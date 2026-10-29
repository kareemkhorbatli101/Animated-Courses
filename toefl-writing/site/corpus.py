# -*- coding: utf-8 -*-
"""Book items -> JSON-able dicts for the practice site.

Normalisation is done here, in Python, and the token lists are shipped with
the data.  The browser never re-implements validate._norm(), so the site
cannot grade a sentence differently from the way the book validated it.
"""
import re
import richhtml as R

TASK_CODE = {'BUILD A SENTENCE': 'bas',
             'WRITE AN EMAIL': 'em',
             'WRITE FOR AN ACADEMIC DISCUSSION': 'ad'}

TASK_SHORT = {'bas': 'Build a Sentence',
              'em': 'Write an Email',
              'ad': 'Academic Discussion'}


def norm(s):
    """Identical to validate._norm, and the only normaliser in the project."""
    return re.findall(r"[a-z0-9’']+", s.lower())


def slug(item_id):
    s = item_id.lower().replace('–', '-').replace('—', '-')
    s = re.sub(r'[^a-z0-9]+', '-', s).strip('-')
    return s


def questions(block):
    return [{'tag': tag, 'title': title, 'html': R.body(body)}
            for tag, title, body in block]


FAULT_LEAD = re.compile(r'^\s*([123])[.)]\s+')


def _plain(entry):
    """A key body entry flattened to text, for fault-list detection."""
    if isinstance(entry, str):
        return entry
    if isinstance(entry, list):
        out = []
        for p in entry:
            out.append(p if isinstance(p, str) else p[0])
        return ''.join(out)
    return ''


def fault_list(it):
    """The three numbered faults that hold the band-3 version at band 3.

    Anchor items carry these under F4 and practice items under F3, so the
    tag is found structurally rather than assumed: the body whose first
    three entries are numbered 1, 2, 3.
    """
    for tag, body in it['keys']:
        plains = [_plain(e) for e in body]
        leads = [FAULT_LEAD.match(p) for p in plains]
        hits = [(m.group(1), p) for m, p in zip(leads, plains) if m]
        if len(hits) >= 3 and [h[0] for h in hits[:3]] == ['1', '2', '3']:
            return {'tag': tag,
                    'faults': [FAULT_LEAD.sub('', p).strip() for _, p in hits[:3]],
                    'html': [R.body([e]) for e, m in zip(body, leads) if m][:3]}
    return None


def bas_rows(it):
    rows = []
    for n, label, cue, chips, answer, tail, note in it['items']:
        rows.append({
            'n': n, 'label': label, 'cue': cue,
            'chips': [{'text': c, 'tokens': norm(c)} for c in chips],
            'tail': tail, 'tail_tokens': norm(tail),
            'answer': answer, 'answer_tokens': norm(answer),
            'note': note,
        })
    return rows


def family(it, index):
    """A Build-a-Sentence family: the rule, the questions, the keys.

    The ten sentences in a family share one grammar rule and one set of
    preview and follow-up questions, so those live on the family page and
    the ten exercises each link back to it.
    """
    return {
        'kind': 'family',
        'id': it['id'],
        'slug': 'bas-family-%02d' % index,
        'task': 'bas',
        'task_label': TASK_SHORT['bas'],
        'time': it.get('time', ''),
        'function': it['function'],
        'payload': dict(it['payload']),
        'intro': R.paras(it.get('intro', [])),
        'preview': questions(it['preview']),
        'followup': questions(it['followup']),
        'keys': {tag: R.body(body) for tag, body in it['keys']},
        'rows': [r['n'] for r in bas_rows(it)],
    }


def sentences(it, index):
    """One exercise page per sentence."""
    fam_slug = 'bas-family-%02d' % index
    out = []
    for r in bas_rows(it):
        r = dict(r)
        r.update({
            'kind': 'exercise',
            'id': 'BAS %03d' % r['n'],
            'slug': 'bas-%03d' % r['n'],
            'task': 'bas',
            'task_label': TASK_SHORT['bas'],
            'task_full': 'Build A Sentence',
            'time': '~40 seconds',
            'function': r['label'],
            'family_id': it['id'],
            'family_slug': fam_slug,
            'family_function': it['function'],
            'payload': dict(it['payload']),
        })
        out.append(r)
    return out


def convert(it):
    code = TASK_CODE[it['task']]
    d = {
        'kind': 'exercise',
        'id': it['id'],
        'slug': slug(it['id']),
        'task': code,
        'task_label': TASK_SHORT[code],
        'task_full': it['task'].title(),
        'time': it.get('time', ''),
        'function': it['function'],
        'payload': dict(it['payload']),
        'preview': questions(it['preview']),
        'followup': questions(it['followup']),
        'keys': {tag: R.body(body) for tag, body in it['keys']},
    }
    d['model'] = it['model']
    d['model_html'] = R.paras(it['model'])
    d['model_band'] = it.get('model_band', 5)
    d['degraded'] = it['degraded']
    d['degraded_html'] = R.paras(it['degraded'])
    d['degraded_band'] = it.get('degraded_band', 3)
    d['model_words'] = len(norm(' '.join(it['model'])))
    d['fault_list'] = fault_list(it)
    if code == 'em':
        d['scenario'] = R.paras(it['scenario'])
        d['bullets'] = list(it['bullets'])
        d['header'] = [list(h) for h in it['header']]
        d['min_words'] = 90
        d['max_words'] = 230
        d['seconds'] = 7 * 60
    if code == 'ad':
        d['prof_name'] = it['prof_name']
        d['professor'] = R.paras(it['professor'])
        d['students'] = [list(s) for s in it['students']]
        d['instructions'] = list(it['instructions'])
        d['min_words'] = 100
        d['max_words'] = 220
        d['seconds'] = 10 * 60
    return d
