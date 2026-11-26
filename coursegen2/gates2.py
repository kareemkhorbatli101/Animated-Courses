# -*- coding: utf-8 -*-
"""The gates. They replace the first-edition gates that measured the wrong thing."""
import re

# Production and reception are not the same band.
#
# The pilot established this: a student-series A2.2 unit carrying real textbook
# prose cannot sit at 8.5-12.5 words a sentence without ceasing to be textbook
# prose, and a learner reads longer sentences than they produce - especially
# when every term has been previewed and glossed first. So the practitioner
# series, whose texts are notices, records and short guidance, keeps the
# production band; the student series, whose texts are textbook pages, cases
# and procedures, gets a reception band one step wider at the same CEFR level.
BANDS_P = {'A2.1': (8.5, 12.5), 'A2.2': (8.5, 12.5), 'B1.1': (11.5, 16.5),
           'B1.2': (11.5, 16.5), 'B2.1': (15.0, 21.0), 'B2.2': (15.0, 21.0),
           'C1.1': (18.0, 25.0)}
BANDS_S = {'A2.2': (12.0, 16.5), 'B1.1': (14.0, 19.0), 'B1.2': (14.0, 19.0),
           'B2.1': (16.0, 22.0), 'B2.2': (17.0, 23.0), 'C1.1': (18.0, 26.0)}
BANDS = BANDS_P
CAPS = {'A2': 26, 'B1': 34, 'B2': 44, 'C1': 52}
CAPS_S = {'A2': 30, 'B1': 38, 'B2': 46, 'C1': 54}
TURN = {'A2': 12, 'B1': 18, 'B2': 28, 'C1': 35}
READ_P = {'A2': (220, 320), 'B1': (320, 450), 'B2': (450, 650)}
READ_S = {'A2': (450, 650), 'B1': (650, 900), 'B2': (900, 1200), 'C1': (1100, 1500)}
LISTEN = {'A2': (180, 260), 'B1': (260, 400), 'B2': (400, 600), 'C1': (550, 800)}

# Abstract heads barred from A2 productive vocabulary. The first edition's
# "a registration nobody checked" would fail here, which is the point.
ABSTRACT = set("""accountability authority assumption basis capability compliance
consent criterion delegation discretion governance implication judgement
liability obligation oversight precision principle procedure rationale
responsibility scope standard threshold tolerance transparency""".split())

VAGUE = ['soon', 'asap', 'some', 'a few', 'several', 'improve',
         'high quality', 'a lot', 'quickly', 'promptly', 'shortly',
         'a number of', 'various', 'appropriate', 'as necessary']


def words(s):
    return len(str(s).split())


def sentences(parts):
    txt = ' '.join(parts)
    return [s for s in re.split(r'(?<=[.!?])\s+', txt) if len(s.split()) > 2]


def _is_definition(term, d):
    """A definition, not an aphorism."""
    if not d or len(d.split()) < 2:
        return 'too short'
    if d.lstrip().lower().startswith(('and ', 'or ')):
        return 'starts with a conjunction'
    head = re.sub(r'^(a|an|the|to)\s+', '', term.lower()).split()[0]
    body = re.sub(r'^(a|an|the|to)\s+', '', d.lower())
    if body.startswith(head) and len(d.split()) < 5:
        return 'restates the headword'
    return None


def check_unit(U, level, series_kind, fails, warns):
    """level like 'A2.1'; series_kind 'P' or 'S'."""
    band = level[:2]
    n = U['num']
    P = lambda m: fails.append('U%d: %s' % (n, m))
    W = lambda m: warns.append('U%d: %s' % (n, m))

    # --- preview exists and is sized
    core = U.get('set', [])
    if not (8 <= len(core) <= 10):
        P('productive core is %d items (needs 8-10)' % len(core))
    if len(U.get('receptive', [])) > 14:
        P('receptive set is %d items (max 14)' % len(U['receptive']))
    if not U.get('phrases'):
        P('no phrase bank in the preview')
    nchunks = sum(len(c) for _, c in U.get('phrases', []))
    if not (8 <= nchunks <= 14):
        W('phrase bank has %d chunks (aim 8-12)' % nchunks)

    # --- definitions are definitions
    for it in core + U.get('receptive', []):
        why = _is_definition(it['term'], it.get('definition', ''))
        if why:
            P('"%s" definition %s' % (it['term'], why))
        if not it.get('example'):
            P('"%s" has no example in use' % it['term'])

    # --- concept load at A2
    if band == 'A2':
        for it in core:
            head = re.sub(r'^(a|an|the|to)\s+', '', it['term'].lower()).split()[0]
            if head in ABSTRACT:
                P('abstract headword at A2: "%s"' % it['term'])

    # --- 3 x 3 x 3 x 3, with distinct genres
    for fieldname, key in [('listening', 'what'), ('reading', 'title'),
                           ('speaking', 'title'), ('writing', 'title')]:
        items = U.get(fieldname, [])
        if len(items) != 3:
            P('%s has %d items (needs 3)' % (fieldname, len(items)))
        genres = [i.get('genre', i.get(key, '')) for i in items]
        if len(set(genres)) != len(genres):
            P('%s genres are not distinct: %s' % (fieldname, genres))

    # --- scaffolding on every task
    def scan_tasks(obj, path):
        if isinstance(obj, dict):
            if 'rubric' in obj and ('pairs' in obj or 'items' in obj):
                if 'example' not in obj and 'items' not in obj:
                    W('%s has no worked example' % path)
            for k, v in obj.items():
                scan_tasks(v, path + '.' + str(k))
        elif isinstance(obj, list):
            for i, v in enumerate(obj):
                scan_tasks(v, '%s[%d]' % (path, i))
    scan_tasks(U.get('vocab_tasks'), 'vocab')
    scan_tasks(U.get('g_tasks'), 'grammar')
    scan_tasks(U.get('listening'), 'listening')
    for i, s in enumerate(U.get('speaking', []), 1):
        if not s.get('checklist'):
            P('speaking %d has no checklist' % i)
        if not s.get('model'):
            P('speaking %d has no model' % i)
    for i, w in enumerate(U.get('writing', []), 1):
        for need in ('model', 'scaffold', 'checklist', 'rubric'):
            if not w.get(need):
                P('writing %d has no %s' % (i, need))

    # --- length bands
    lo, hi = READ_S[band] if series_kind == 'S' else READ_P[band]
    for i, r in enumerate(U.get('reading', []), 1):
        n_w = sum(words(p) for p in r['text'])
        if not (lo <= n_w <= hi):
            W('reading %d is %d words (band %d-%d)' % (i, n_w, lo, hi))
    llo, lhi = LISTEN[band]
    for i, L in enumerate(U.get('listening', []), 1):
        n_w = sum(words(l) for _, l in L['script'])
        if not (llo <= n_w <= lhi):
            W('listening %d script is %d words (band %d-%d)' % (i, n_w, llo, lhi))
        if series_kind == 'P':
            longest = max(words(l) for _, l in L['script'])
            if longest > TURN[band]:
                W('listening %d has a %d-word turn (cap %d)' % (i, longest, TURN[band]))

    # --- register
    prose = []
    for r in U.get('reading', []):
        prose += r['text']
    prose += [U.get('preview_intro', ''), U.get('listen_intro', '')]
    prose += [U['data_box']['text']]
    ss = sentences([p for p in prose if p])
    if ss:
        msl = sum(len(s.split()) for s in ss) / len(ss)
        bands = BANDS_S if series_kind == 'S' else BANDS_P
        cap = (CAPS_S if series_kind == 'S' else CAPS)[band]
        blo, bhi = bands[level]
        if not (blo <= msl <= bhi):
            P('mean sentence length %.2f outside %s %s band %.1f-%.1f'
              % (msl, level, 'reception' if series_kind == 'S' else 'production',
                 blo, bhi))
        over = [s for s in ss if len(s.split()) > cap]
        if len(over) / len(ss) > 0.03:
            W('%d of %d sentences over the %d-word cap' % (len(over), len(ss), cap))

    # --- Tier A sourcing
    for i, r in enumerate(U.get('reading', []), 1):
        if r.get('source_tier') == 'A' and not r.get('source'):
            P('reading %d is Tier A with no source' % i)
    if U['data_box'].get('tier') == 'A' and not U['data_box'].get('source'):
        P('data box is Tier A with no source')

    # --- dissent forbidden below B1.2
    if level in ('A2.1', 'A2.2', 'B1.1') and U.get('dissent'):
        P('a professional dispute appears at %s' % level)

    # --- vagueness in anything presented as a model
    models = []
    for w in U.get('writing', []):
        models += w['model']
    low = ' '.join(models).lower()
    hits = [v for v in VAGUE if v in low]
    if hits:
        W('model texts contain vague wording: %s' % hits[:3])


def check_figures(figures, fails, warns, floor=18):
    if len(figures) < floor:
        warns.append('only %d figures (floor %d)' % (len(figures), floor))
    for fid, cap, alt, xref in figures:
        if not cap:
            fails.append('%s has no caption' % fid)
        if not alt:
            fails.append('%s has no alt text' % fid)
        if not xref:
            warns.append('%s is not cross-referenced from a task' % fid)


def report(name, fails, warns):
    print('=' * 72)
    print(name)
    print('=' * 72)
    for f in fails:
        print('  FAIL  ' + f)
    for w in warns:
        print('  warn  ' + w)
    print('  RESULT: %s' % ('FAILURES' if fails else 'ALL CHECKS PASS'))
    return not fails
