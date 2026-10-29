"""Build guards.

The Arabic guide taught the lesson the hard way: a renderer that quietly
accepts malformed content ships malformed content.  Everything here raises.
"""
import re

MARKERS = ('bullets', 'mono', 'note')


class ContentError(Exception):
    pass


def _fail(where, msg):
    raise ContentError('%s: %s' % (where, msg))


def check_rich(parts, where):
    """A rich paragraph is a list of str | (str, dict)."""
    for i, p in enumerate(parts):
        if isinstance(p, str):
            continue
        if isinstance(p, tuple) and len(p) == 2 and isinstance(p[0], str) \
                and isinstance(p[1], dict):
            continue
        _fail(where, 'rich part %d is %r - expected str or (str, dict). '
                     'A styled fragment written as a bare list entry becomes '
                     'its own paragraph instead of an inline run.' % (i, p))


def check_body(body, where):
    if not isinstance(body, (list, tuple)):
        _fail(where, 'body must be a list')
    for i, item in enumerate(body):
        at = '%s[%d]' % (where, i)
        if isinstance(item, str):
            continue
        if isinstance(item, list):
            check_rich(item, at)
            continue
        if isinstance(item, tuple):
            if not item or item[0] not in MARKERS:
                _fail(at, 'tuple body entry must start with one of %r, got %r. '
                          '(A styled fragment belongs inside a list, not loose '
                          'in the body.)' % (list(MARKERS), item[0] if item else None))
            if item[0] in ('bullets', 'mono'):
                if len(item) != 2 or not isinstance(item[1], (list, tuple)):
                    _fail(at, '%r needs a list payload' % item[0])
                for sub in item[1]:
                    if isinstance(sub, list):
                        check_rich(sub, at)
                    elif not isinstance(sub, str):
                        _fail(at, 'bad %s entry %r' % (item[0], sub))
            else:  # note
                if len(item) != 2 or not isinstance(item[1], str):
                    _fail(at, "'note' needs a single string")
            continue
        _fail(at, 'unexpected body entry %r' % (item,))


def words(text):
    return len(re.findall(r"[A-Za-z0-9’'-]+", text))


def _norm(s):
    """compare word sequences, ignoring punctuation and case"""
    return re.findall(r"[a-z0-9’']+", s.lower())


def check_item(it):
    i = it.get('id', '<no id>')
    for k in ('id', 'task', 'function', 'payload', 'preview', 'followup', 'keys'):
        if k not in it:
            _fail(i, 'missing field %r' % k)
    for k in ('Strategy', 'Grammar', 'Vocabulary', 'Convention'):
        if not it['payload'].get(k):
            _fail(i, 'payload is missing %r - every item must carry its '
                     'teaching load' % k)

    if not 3 <= len(it['preview']) <= 5:
        _fail(i, 'preview has %d questions, must be 3-5' % len(it['preview']))
    if not 3 <= len(it['followup']) <= 5:
        _fail(i, 'followup has %d questions, must be 3-5' % len(it['followup']))

    tags = []
    for tag, title, body in it['preview'] + it['followup']:
        tags.append(tag)
        check_body(body, '%s %s' % (i, tag))
    keyed = [k for k, _ in it['keys']]
    missing = [t for t in tags if t not in keyed]
    if missing:
        _fail(i, 'no answer key for %s - every question must be answered, '
                 'or the book is a workbook, not a guide' % ', '.join(missing))
    extra = [k for k in keyed if k not in tags]
    if extra:
        _fail(i, 'answer key for a question that does not exist: %s' % ', '.join(extra))
    for tag, body in it['keys']:
        check_body(body, '%s key %s' % (i, tag))

    # --- task-specific -------------------------------------------------
    if it['task'].startswith('WRITE AN EMAIL'):
        n = sum(words(p) for p in it['model'])
        if not 90 <= n <= 230:
            _fail(i, 'email model is %d words; aim 110-180' % n)
        if len(it.get('bullets', [])) < 2:
            _fail(i, 'an email task needs its required points')
        if 'degraded' not in it:
            _fail(i, 'F4 needs a lower-band contrast to compare against')

    if it['task'].startswith('WRITE FOR AN ACADEMIC'):
        n = sum(words(p) for p in it['model'])
        if n < 100:
            _fail(i, 'discussion model is %d words; ETS requires at least 100' % n)
        if n > 220:
            _fail(i, 'discussion model is %d words; over-long models teach the '
                     'wrong lesson' % n)
        names = [nm for nm, _ in it['students']]
        body = ' '.join(it['model'])
        unused = [nm for nm in names if nm not in body]
        if unused:
            _fail(i, 'model never engages with %s - the task asks for a '
                     'contribution to a discussion' % ', '.join(unused))

    if it['task'].startswith('BUILD A SENTENCE'):
        seen = set()
        for row in it['items']:
            n, label, cue, chips, answer, tail, note = row
            built = ' '.join(chips) + ' ' + tail
            if sorted(_norm(built)) != sorted(_norm(answer)):
                _fail('%s item %d' % (i, n),
                      'chips + tail do not reconstruct the answer.\n'
                      '   chips+tail: %s\n   answer    : %s'
                      % (' '.join(sorted(_norm(built))),
                         ' '.join(sorted(_norm(answer)))))
            if label in seen:
                _fail(i, 'duplicate structure label %r' % label)
            seen.add(label)
    return True


def check_all(items):
    ids = [i['id'] for i in items]
    if len(set(ids)) != len(ids):
        _fail('book', 'duplicate item ids: %r' % ids)
    for it in items:
        check_item(it)
    return True
