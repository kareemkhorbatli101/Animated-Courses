# -*- coding: utf-8 -*-
"""The gates. They replace the first-edition gates that measured the wrong thing."""
import re
import levels

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
    prose += [U.get('cases_intro', '')]
    for C in U.get('cases', []):
        prose += C['situation']
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
    for i, C in enumerate(U.get('cases', []), 1):
        if C.get('tier') == 'A' and not C.get('guidance'):
            P('case %d is Tier A with no cited guidance' % i)

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


# A student book is read, not produced. Its texts are textbook pages, and the
# same argument that widened its register band widens its lexical one: the
# reader meets the next band's words inside a text that has been previewed and
# glossed. The practitioner series keeps the production band exactly.
LEX_UP = {'A1': 'A2', 'A2': 'B1', 'B1': 'B2', 'B2': 'C1', 'C1': 'C1'}


def check_level(U, band, series_kind, domain, fails, warns):
    """Nothing a learner reads may sit above the band unless it is taught here."""
    if series_kind == 'S':
        band = LEX_UP[band]
    texts = []
    for r in U.get('reading', []):
        texts += r['text']
        texts += [r['title']] + [q for q, _ in r['pre']['items']] if False else [r['title']]
        texts += list(r['pre']['items'])
    for L in U.get('listening', []):
        texts += [l for _, l in L['script']] + [L['what'], L['title']]
    for S in U.get('speaking', []):
        texts += [l for _, l in S['model']] + [S['rubric'], S['how']]
        texts += S['checklist'] + [c['brief'] for c in S.get('cards', [])]
    for Wr in U.get('writing', []):
        texts += Wr['model'] + Wr['scaffold'] + Wr['checklist'] + [Wr['rubric'], Wr['how']]
    texts += [U['preview_intro'], U['listen_intro'], U.get('review_intro', ''), U['strap']]
    texts += U['warm'] + U['can_do'] + U['g_rule'] + [U.get('cases_intro', '')]
    for C in U.get('cases', []):
        texts += C['situation'] + C['questions'] + C['facts'] + list(C['words'])
        texts += [C['question'], C['point'], C.get('how', ''), C.get('ask', ''),
                  C.get('note', ''), C['title']]
        texts += [c for _, chunks in C['language'] for c in chunks]
    for grp in ('p1_recap', 'p2_recap', 'p3_recap', 'p4_recap', 'p10_recap'):
        texts += U.get(grp, [])
    for k in ('p1_ask', 'p2_ask', 'p3_ask', 'p4_ask', 'p10_ask'):
        texts += [U.get(k) or '']
    for grp in ('listening', 'speaking', 'reading', 'writing'):
        for it in U.get(grp, []):
            texts += [it.get('point', ''), it.get('ask', '')]
    for grp in ('vocab_tasks', 'g_tasks', 'review'):
        for t in U.get(grp, []):
            texts += [t.get('rubric', ''), t.get('how', '') or '', t.get('example', '') or '']
            for a, b in t.get('pairs', []):
                texts += [str(a), str(b)]
    taught = [it['term'] for it in U.get('set', [])]
    taught += [it['term'] for it in U.get('receptive', [])]
    taught += [c for _, chunks in U.get('phrases', []) for c in chunks]
    taught += [w for row in U.get('morph', []) for w in row]
    if len(U.get('allow', [])) > 8:
        warns.append('U%d: %d words in the deliberate-challenge list (keep it under 8)'
                     % (U['num'], len(U['allow'])))
    hits = levels.check([t for t in texts if t], band, taught=taught,
                        domain=domain, allow=U.get('allow', []),
                        academic=(series_kind == 'S'))
    if hits:
        for w, where in sorted(hits.items())[:40]:
            fails.append('U%d: above %s: "%s"  in: %s' % (U['num'], band, w, where))
        if len(hits) > 40:
            fails.append('U%d: and %d more above %s' % (U['num'], len(hits) - 40, band))


def check_review(U, fails, warns):
    skills = [r.get('skill') for r in U.get('review', [])]
    for need in ('reading', 'listening', 'speaking', 'writing'):
        if need not in skills:
            fails.append('U%d: review has no %s activity' % (U['num'], need))


def check_exercise_figs(ctx, fails, warns, floor=2):
    """Every exercise carries two visuals: one that organises, one that pictures."""
    thin = {k: v for k, v in ctx.exercise_figs.items() if v < floor}
    for k in sorted(thin):
        fails.append('exercise %s has %d visual(s), needs %d' % (k, thin[k], floor))


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


# Part 9 used to be a fact in a box. A fact is not a task: it gave the class
# nothing to do and nothing to disagree about. It is now three cases, and a
# case has to be arguable, answerable at the level, and settled by something
# the unit has actually taught.
YESNO = ('is ', 'are ', 'was ', 'were ', 'do ', 'does ', 'did ', 'can ',
         'could ', 'should ', 'would ', 'will ', 'has ', 'have ', 'must ')


def check_cases(U, level, series_kind, fails, warns):
    n = U['num']
    P = lambda m: fails.append('U%d: %s' % (n, m))
    Wn = lambda m: warns.append('U%d: %s' % (n, m))
    cases = U.get('cases', [])
    if len(cases) != 3:
        P('part 9 has %d cases (needs 3)' % len(cases))
    if not U.get('cases_intro'):
        P('part 9 has no introduction')
    titles = [C.get('title', '') for C in cases]
    if len(set(titles)) != len(titles):
        P('two cases share a title')
    for i, C in enumerate(cases, 1):
        for need in ('title', 'situation', 'who', 'facts', 'question',
                     'questions', 'language', 'words', 'point'):
            if not C.get(need):
                P('case %d has no %s' % (i, need))
        qs = C.get('questions', [])
        if len(qs) != 3:
            P('case %d has %d discussion questions (needs 3)' % (i, len(qs)))
        for q in qs:
            if q.strip().lower().startswith(YESNO):
                P('case %d question is answerable yes/no: "%s"' % (i, q))
        if len(C.get('words', [])) < 4:
            P('case %d names fewer than four words the talk needs' % i)
        nw = sum(words(p) for p in C.get('situation', []))
        if not (45 <= nw <= 140):
            Wn('case %d situation is %d words (aim 45-140)' % (i, nw))
        if len(C.get('who', [])) not in (1, 2):
            P('case %d draws %d people (needs 1 or 2)' % (i, len(C.get('who', []))))
        if not any(len(ch) for _, ch in C.get('language', [])):
            P('case %d has an empty language box' % i)


def check_recaps(U, ctx, fails, warns):
    """No page break may be written without a teaching figure in front of it."""
    want = ('p1_recap', 'p2_recap', 'p3_recap', 'p4_recap', 'p10_recap')
    for k in want:
        if not U.get(k):
            fails.append('U%d: no recap lines for %s' % (U['num'], k.split('_')[0]))
    for grp in ('listening', 'speaking', 'reading', 'writing'):
        for i, it in enumerate(U.get(grp, []), 1):
            if not it.get('point'):
                fails.append('U%d: %s %d has no closing point' % (U['num'], grp, i))
    for i, C in enumerate(U.get('cases', []), 1):
        if not C.get('point'):
            fails.append('U%d: case %d has no closing point' % (U['num'], i))


def check_breaks(ctx, fails, warns):
    if ctx.breaks != len(ctx.recaps):
        fails.append('%d page breaks but %d closing figures'
                     % (ctx.breaks, len(ctx.recaps)))


def check_fit(fit_report, fails, warns, slack_pt=42):
    """What the printed pages actually look like, measured off the PDF.

    fit_report maps a recap key to the points of white left under it on the
    page it landed on. Anything over `slack_pt` is a part that ends on a
    half-empty page, which is the thing this round set out to remove.
    """
    bad = {k: v for k, v in (fit_report or {}).items() if v > slack_pt}
    for k in sorted(bad, key=lambda k: -bad[k])[:12]:
        fails.append('%s leaves %.0fpt of white at the foot of its page'
                     % (k, bad[k]))
    if len(bad) > 12:
        fails.append('and %d more parts ending on a half-empty page' % (len(bad) - 12))


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
