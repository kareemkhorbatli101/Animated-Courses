# -*- coding: utf-8 -*-
"""Quality gates for English for Management with AI - International Edition.

  python3 qa.py A21            one book
  python3 qa.py all            every book that has been written, plus series gates
"""
import os, sys, re, json, zipfile, importlib, collections, io
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import series

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
import xml.etree.ElementTree as ET
LET = 'ABCDEFGH'
LEDGER = os.path.join(HERE, 'out', 'vocab_ledger.json')

ROLES = {'Lina Khalil': 'desk officer, Bilateral Affairs',
         'Samir Haddad': 'Legal and Treaties',
         'Dr Hana Mourad': 'Policy Planning',
         'Rana Deeb': 'Consular Affairs',
         'Omar Nasri': 'Translation and Documentation',
         'Yara Ibrahim': 'Press and Public Diplomacy',
         'Tarek Zayed': 'Protocol',
         'Nadia Barakat': 'Multilateral Affairs',
         'Karim Dalati': 'Information Security and Records',
         'Maya Sarkis': 'the Diplomatic Institute',
         'Ambassador Faris Said': 'Head of Mission'}

# Gate 16. Named products, models and platforms are what date a book; none may appear.
VENDOR = ['ChatGPT', 'OpenAI', 'Copilot', 'Gemini', 'Claude', 'Anthropic', 'Llama',
          'Mistral', 'Midjourney', 'Perplexity', 'Bard', 'DALL-E', 'Grok', 'Azure',
          'AWS', 'Salesforce', 'HubSpot', 'Zapier', 'Notion', 'Slack', 'Zoom',
          'SAP', 'Workday', 'Xero', 'QuickBooks', 'Shopify', 'Stripe']

# Gate 12b. No real state's position, no serving official, no live dispute. The series
# teaches diplomatic craft; it takes no position on anybody's foreign policy.
POLITICS = ['Syrian government', 'Syrian regime', 'Assad', 'Damascus government',
            'Israeli government', 'Iranian government', 'Russian government',
            'Turkish government', 'American government', 'White House', 'Kremlin',
            'sanctions regime', 'occupied', 'annexation', 'civil war']

# Gate 17. A capability claim tied to a future date dates the book just as fast.
FORECAST = re.compile(
    r'(within (the next )?(two|three|five|ten|\d+) years|'
    r'by 20[3-9]\d|in (two|three|five|ten|\d+) years.{0,40}(will|able to)|'
    r'will (soon|shortly|eventually) be able to|'
    r'(systems|agents|models) will (soon|be able to|replace))', re.I)
REAL = ['Microsoft', 'Google', 'Amazon', 'Apple Inc', 'Facebook', 'Meta Platforms',
        'Tesla', 'Unilever', 'Siemens', 'Toyota', 'Samsung', 'Nestlé', 'Walmart',
        'IBM', 'Oracle', 'Deloitte', 'McKinsey', 'Goldman Sachs', 'HSBC', 'Maersk']
FLAG = ['regime', 'terrorist', 'enemy', 'traitor', 'infidel', 'propaganda',
        'glorious', 'heroic struggle', 'our leader', 'stupid', 'lazy worker']


def load(code):
    d = os.path.join(HERE, 'units', code)
    sys.path.insert(0, d)
    out = []
    for i in range(1, 11):
        name = 'u%02d' % i
        for m in list(sys.modules):
            if m == name:
                del sys.modules[m]
        out.append(importlib.import_module(name).U)
    sys.path.remove(d)
    return out


def check_book(code, fail, warn, ledger, quiet=False):
    B = series.BOOKS[code]
    Us = load(code)
    doc = os.path.join(HERE, 'out', 'English_for_the_Foreign_Ministry_%s_%s.docx'
                       % (B['bandge'].replace('.', '-'), B['sub'].replace(' ', '_')))
    if not os.path.exists(doc):
        doc = None
    P = (lambda *a: None) if quiet else (lambda *a: print(*a))
    F = lambda m: fail.append('%s: %s' % (code, m))
    V = lambda m: warn.append('%s: %s' % (code, m))

    P('=' * 76)
    P('%s  %s  (%s)' % (B['book'], B['sub'], B['bandge']))
    P('=' * 76)

    # ---- 1 structure ------------------------------------------------------
    P('\n1. STRUCTURE')
    if doc:
        with zipfile.ZipFile(doc) as z:
            root = ET.fromstring(z.read('word/document.xml'))
            media = [n for n in z.namelist() if n.startswith('word/media/')]
        txt = ''.join(e.text or '' for e in root.iter(W + 't'))
    else:
        txt, media = '', []
        V('docx not built')
    P('   units                      : %d' % len(Us))
    P('   figures in package         : %d   (expect 140 unit + 2 cover + 1 cast)' % len(media))
    P('   words                      : %d' % len(txt.split()))
    if txt:
        wlo, whi = series.WORDS[B['level']]
        per = [len(re.sub(r'\s+', ' ', ' '.join(
            U['read'] + U['ext'] + U['t_body'] + U['case']['brief'])).split()) for U in Us]
        P('   prose words per unit       : min %d  max %d  (%s)'
          % (min(per), max(per), B['level']))
    parts = len(re.findall(r'Part \d+\s+·', txt))
    P('   part bands                 : %d   (expect 110)' % parts)
    if txt and parts != 110:
        F('part bands %d' % parts)
    if [U['num'] for U in Us] != list(range(1, 11)):
        F('unit numbering')
    titles = [U['title'] for U in Us]
    if titles != B['units']:
        F('unit titles do not match series.py')
    P('   titles match series.py     : %s' % ('yes' if titles == B['units'] else 'NO'))

    # ---- 2 answer-key integrity -------------------------------------------
    P('\n2. ANSWER-KEY INTEGRITY')
    gapsets = ('c_c', 'v_a', 'g_a', 't_a')
    opensets = ('c_a', 'e_a', 't_b')
    bad, empty, items = [], [], 0
    for U in Us:
        for n in gapsets:
            for s, a in U[n]:
                items += 1
                if not a:
                    bad.append((U['num'], n, s[:28]))
                if '____________' not in s:
                    bad.append((U['num'], n, 'no gap', s[:28]))
        for n in opensets:
            for s, a in U[n]:
                items += 1
                if not a:
                    empty.append((U['num'], n, s[:28]))
        for dn in ('d1', 'd2'):
            for key in ('a', 'b'):
                for s, a in U[dn][key]:
                    items += 1
                    if not a:
                        empty.append((U['num'], dn + '.' + key, s[:28]))
        for n in ('analysis', 'outcome_q'):
            for s, a in U['case'][n]:
                items += 1
                if not a:
                    empty.append((U['num'], 'case.' + n, s[:28]))
        for n in ('listen', 'vocab', 'gram'):
            for s, a in U['rev'][n]:
                items += 1
                if not a:
                    bad.append((U['num'], 'rev.' + n, s[:28]))
    P('   graded items               : %d' % items)
    P('   gap items broken           : %s' % (bad if bad else 'none'))
    P('   open items with no answer  : %s' % (empty if empty else 'none'))
    if bad:
        F('gap integrity')
    if empty:
        F('answer key incomplete')
    if txt:
        kl = len(re.findall(r'Unit \d+\s+·\s+', txt))
        P('   answer-key unit headings   : %d   (expect 10)' % kl)
        if kl != 10:
            F('answer key sections %d' % kl)
        ksec = txt[txt.find('Answer Key'):]
        labs = re.findall(r'P(\d+) ([A-Z])', ksec)
        per = collections.Counter(a for a, b in labs)
        P('   answer-key exercise blocks : %d   (expect 250)' % len(labs))
        P('   blocks per part            : %s'
          % {int(k): v for k, v in sorted(per.items(), key=lambda x: int(x[0]))})
        if len(labs) != 250:
            F('answer key blocks %d' % len(labs))
        if {int(k) for k in per} != {1, 2, 3, 5, 7, 8, 9, 10}:
            F('answer key parts %s' % sorted(int(k) for k in per))

    # ---- 3 mcq ------------------------------------------------------------
    P('\n3. MULTIPLE-CHOICE INTEGRITY')
    import build
    mb, dist, dist2 = [], collections.Counter(), collections.Counter()
    for U in Us:
        nn = U['num']
        for spec, seed in ((U['c_d'], 1000 * nn + 14), (U['g_b'], 1000 * nn + 32),
                           (U['rev']['read'], 1000 * nn + 91)):
            for stem, opts, k in build.rebalance(spec, seed):
                (dist2 if len(opts) == 2 else dist)[LET[k]] += 1
                m2 = re.search(r'\(\s*([^()/]+?)\s*/\s*([^()/]+?)\s*\)', stem)
                if m2 and len(opts) == 2 and {m2.group(1), m2.group(2)} == {o.strip() for o in opts}:
                    if [m2.group(1), m2.group(2)] != [o.strip() for o in opts]:
                        mb.append((nn, 'stem/option order', stem[:26]))
    for U in Us:
        for n in ('c_d', 'g_b'):
            for stem, opts, k in U[n]:
                if len(opts) != len(set(opts)):
                    mb.append((U['num'], n, 'duplicate option', stem[:26]))
                if not (0 <= k < len(opts)):
                    mb.append((U['num'], n, 'key out of range', stem[:26]))
                if len(opts) < 2:
                    mb.append((U['num'], n, 'too few options', stem[:26]))
        for stem, opts, k in U['rev']['read']:
            if len(opts) != len(set(opts)) or not (0 <= k < len(opts)):
                mb.append((U['num'], 'rev.read', stem[:26]))
    P('   invalid options            : %s' % (mb if mb else 'none'))
    P('   printed key distribution   : 4-option %s   2-option %s'
      % (dict(sorted(dist.items())), dict(sorted(dist2.items()))))
    if mb:
        F('mcq integrity')
    for label, dd, lim in (('4-option', dist, 0.40), ('2-option', dist2, 0.62)):
        t = sum(dd.values())
        if t and max(dd.values()) / float(t) > lim:
            V('mcq %s key distribution skewed (%s)' % (label, dict(dd)))

    # ---- 4 true/false -----------------------------------------------------
    P('\n4. TRUE / FALSE BALANCE')
    tf = collections.Counter()
    tb = []
    for U in Us:
        for n in ('c_b', 'e_b'):
            for s, a in U[n]:
                if a not in ('T', 'F'):
                    tb.append((U['num'], n, a))
                tf[a] += 1
    P('   values                     : %s' % dict(tf))
    P('   invalid                    : %s' % (tb if tb else 'none'))
    if tb:
        F('true/false values')
    if tf and min(tf.get('T', 0), tf.get('F', 0)) < 0.3 * sum(tf.values()):
        V('true/false unbalanced')

    # ---- 5 vocabulary -----------------------------------------------------
    P('\n5. VOCABULARY')
    prob, terms_here = [], []
    for U in Us:
        ts = [t for t, m in U['vocab']]
        if len(ts) != len(set(ts)):
            prob.append((U['num'], 'duplicate inside unit'))
        if len(U['vocab']) != 20:
            prob.append((U['num'], 'size %d' % len(U['vocab'])))
        for t, m in U['vocab']:
            if not m or len(m.split()) < 2:
                prob.append((U['num'], 'thin gloss', t))
        ends = [b for a, b in U['v_b']]
        if len(ends) != len(set(ends)):
            prob.append((U['num'], 'duplicate matching ending'))
        terms_here += ts
    dup_in_book = [t for t, c in collections.Counter(terms_here).items() if c > 1]
    P('   terms in book              : %d' % len(terms_here))
    P('   repeats inside book        : %s' % (dup_in_book if dup_in_book else 'none'))
    P('   problems                   : %s' % (prob if prob else 'none'))
    if prob:
        F('vocabulary')
    if dup_in_book:
        F('vocabulary repeats inside book')
    mis = []
    for U in Us:
        T = [t.lower() for t, m in U['vocab']]
        joined = ' | '.join(T)
        for nm, pairs in (('v_a', U['v_a']), ('rev.vocab', U['rev']['vocab'])):
            for stem, a in pairs:
                a = a.lower().strip()
                if a not in T and a not in joined.split() and a not in joined:
                    mis.append((U['num'], nm, a))
        for head, tail in U['v_b']:
            h = head.lower()
            ok = False
            for t in T:
                ws = t.split()
                pos, good = 0, True
                for w in ws:
                    i2 = h.find(w, pos)
                    if i2 < 0:
                        good = False; break
                    pos = i2 + len(w)
                if good:
                    ok = True; break
            if not ok:
                mis.append((U['num'], 'v_b', head[:30]))
    P('   exercise targets in table  : %s' % ('yes' if not mis else mis))
    if mis:
        F('vocabulary exercise targets outside the unit table')
    fwd = []
    first = {}
    for U in Us:
        for t, m in U['vocab']:
            first.setdefault(t.lower(), U['num'])
    for U in Us:
        for icon, lab in U['v_fig']:
            f = first.get(lab.lower())
            if f and f > U['num']:
                fwd.append((U['num'], lab, 'taught in U%d' % f))
    P('   figure labels taught later : %s' % (fwd if fwd else 'none'))
    if fwd:
        V('forward reference in vocabulary figure: %s' % fwd[:4])
    clash = sorted(set(terms_here) & set(ledger.get('terms', {})))
    clash = [t for t in clash if ledger['terms'][t] != code]
    P('   taught in an earlier book  : %s' % (clash if clash else 'none'))
    if clash:
        F('cross-book vocabulary repeat: %s' % clash[:8])
    for t in terms_here:
        ledger.setdefault('terms', {}).setdefault(t, code)

    # ---- 6 classify -------------------------------------------------------
    P('\n6. CLASSIFY TASK')
    cl = []
    for U in Us:
        inst, pairs, cols = U['c_e']
        for item, col in pairs:
            if col not in cols:
                cl.append((U['num'], item[:24], col))
        used = {c for _, c in pairs}
        if used != set(cols):
            cl.append((U['num'], 'unused column', sorted(set(cols) - used)))
        if len(pairs) < 6:
            cl.append((U['num'], 'fewer than 6 items'))
    P('   valid                      : %s' % ('yes' if not cl else cl))
    if cl:
        F('classify')

    # ---- 7 figures --------------------------------------------------------
    P('\n7. FIGURE NUMBERING AND CAPTIONS')
    byunit = collections.defaultdict(list)
    for a, b in re.findall(r'Figure (\d+)\.(\d+) ·', txt):
        byunit[int(a)].append(int(b))
    badfig = []
    for u in range(1, 11):
        got = sorted(byunit.get(u, []))
        if txt and got != list(range(0, 14)):
            badfig.append((u, got))
    P('   each unit has .0 to .13    : %s' % ('yes' if not badfig else badfig))
    if badfig:
        F('figure numbering')
    nocap = [c for c in re.findall(r'Figure \d+\.\d+ ·\s*([^\n]{0,4})', txt) if not c.strip()]
    if nocap:
        F('figure without caption text')

    # ---- 8 case clinic ----------------------------------------------------
    P('\n8. CASE CLINIC STRUCTURE')
    cs = []
    for U in Us:
        C = U['case']
        if len(C['brief']) < 3:
            cs.append((U['num'], 'brief < 3 paragraphs'))
        if len(C['steps']) != 5:
            cs.append((U['num'], 'steps %d' % len(C['steps'])))
        if len(C['voices']) < 3:
            cs.append((U['num'], 'voices %d' % len(C['voices'])))
        if len(C['analysis']) < 5:
            cs.append((U['num'], 'analysis %d' % len(C['analysis'])))
        if len(C['bank']) < 4:
            cs.append((U['num'], 'language bank %d' % len(C['bank'])))
        if len(C['decision_steps']) < 4:
            cs.append((U['num'], 'decision steps'))
        if len(C['outcome'].split()) < 40:
            cs.append((U['num'], 'outcome too short'))
        if len(C['outcome_q']) < 2:
            cs.append((U['num'], 'outcome questions'))
        if not C.get('exhibit_note'):
            cs.append((U['num'], 'no exhibit note'))
        heads = [h for h, s in C['steps']]
        if heads != ['Find it', 'Compare it', 'Infer it', 'Weigh it', 'Decide']:
            cs.append((U['num'], 'ladder order', heads))
        for i, (q, a) in enumerate(C['analysis'][:5]):
            if not q.startswith(heads[i].rstrip('it ').strip()[:4]) and not q.startswith(heads[i]):
                cs.append((U['num'], 'analysis %d not aligned to ladder' % (i + 1)))
    P('   five stages, voices, bank  : %s' % ('all valid' if not cs else cs))
    if cs:
        F('case clinic structure')
    if txt:
        st = len(re.findall(r'STAGE \d', txt))
        P('   STAGE bands in document    : %d   (expect 100)' % st)
        if st != 100:
            F('stage bands %d' % st)

    # ---- 9 register -------------------------------------------------------
    P('\n9. REGISTER AND DENSITY')
    lo, hi = series.BANDS[B['level']]
    prose = []
    for U in Us:
        prose += U['read'] + U['ext'] + U['t_body'] + U['case']['brief']
        prose += [U['case']['outcome']]
        prose += [l for _, l in U['d1']['lines']] + [l for _, l in U['d2']['lines']]
        prose += [l for n, r, l in U['case']['voices']]
    pr = ' '.join(prose)
    sents = [s for s in re.split(r'(?<=[.!?])\s+', pr) if len(s.split()) > 2]
    wl = [len(s.split()) for s in sents]
    mean = sum(wl) / float(len(wl))
    P('   sentences                  : %d' % len(sents))
    P('   mean sentence length       : %.2f words   (%s band %.1f-%.1f)'
      % (mean, B['level'], lo, hi))
    if not (lo <= mean <= hi):
        F('register band: mean %.2f outside %.1f-%.1f' % (mean, lo, hi))
    cap = series.CAPS[B['level']]
    longs = [s for s in sents if len(s.split()) > cap]
    P('   sentences over %d words     : %d (%.1f%%)'
      % (cap, len(longs), 100.0 * len(longs) / len(sents)))
    if 100.0 * len(longs) / len(sents) > 5:
        V('long sentences %.1f%%' % (100.0 * len(longs) / len(sents)))
    wc = [len(re.sub(r'\s+', ' ', ' '.join(
        U['read'] + U['ext'])).split()) for U in Us]
    P('   reading words per unit     : min %d  max %d  mean %d'
      % (min(wc), max(wc), sum(wc) / len(wc)))
    if max(wc) - min(wc) > 0.6 * (sum(wc) / len(wc)):
        V('reading length uneven across units')

    # ---- 10 dialogue parity ----------------------------------------------
    P('\n10. DIALOGUE AND TASK PARITY')
    dl = [len(U['d1']['lines']) for U in Us] + [len(U['d2']['lines']) for U in Us]
    P('   dialogue turns             : min %d  max %d' % (min(dl), max(dl)))
    if min(dl) < 10:
        F('dialogue shorter than 10 turns')
    sp = {len(U['speak']) for U in Us}
    cd = {len(U['cando']) for U in Us}
    fo = {len(U['found']) for U in Us}
    P('   speaking tasks per unit    : %s' % sorted(sp))
    P('   can-do statements          : %s' % sorted(cd))
    P('   foundations items          : %s' % sorted(fo))
    if sp != {3} or cd != {5} or fo != {4}:
        F('task parity (speak %s cando %s found %s)' % (sorted(sp), sorted(cd), sorted(fo)))
    wk = [len(U['w_steps']) for U in Us] + [len(U['w_check']) for U in Us]
    if min(wk) < 4:
        F('writing scaffold thin')

    # ---- 11 data points ---------------------------------------------------
    P('\n11. DATA POINTS SOURCED')
    n_dp = txt.count('DATA POINT')
    n_src = len(re.findall(r'Source[s]?:', txt))
    P('   data point boxes           : %d' % n_dp)
    P('   source lines               : %d' % n_src)
    if n_dp > n_src:
        F('unsourced data point')

    # ---- 12 continuity ----------------------------------------------------
    P('\n12. CONTINUITY AND NAMES')
    conf = []
    for who, role in ROLES.items():
        for other in {r for r in ROLES.values()} - {role}:
            m3 = re.search(re.escape(who) + r'[^.]{0,40}\b' + re.escape(other) + r'\b', txt)
            if m3 and '\u00b7' not in m3.group(0):
                conf.append((who, other))
    P('   role conflicts             : %s' % (conf if conf else 'none'))
    if conf:
        V('role conflict %s' % conf[:3])
    seen = [w for w in ROLES if txt.count(w.split()[0]) > 0]
    P('   cast members appearing     : %d of %d' % (len(seen), len(ROLES)))
    world = [w for w in series.WORLD if w[0].isupper() and re.search(r'\b' + w + r'\b', txt)]
    P('   invented states used       : %d of %d' % (len(world), len(series.WORLD)))
    stray = sorted({m for m in re.findall(r'\b(Veren[a-z]+|Orist[a-z]+|Kavar[a-z]+|Lysmar[a-z]+|'
                                          r'Tarn[a-z]+|Halmar[a-z]+|Astren[a-z]+)\b', txt)}
                   - {'Verenia', 'Verenian', 'Oristan', 'Oristani', 'Kavara', 'Kavaran',
                      'Lysmark', 'Tarnia', 'Tarnian', 'Halmar', 'Halmari', 'Astrene'})
    P('   invented-name variants     : %s' % (stray if stray else 'none'))
    if stray:
        F('inconsistent invented name %s' % stray)
    pol = [w for w in POLITICS if re.search(r'\b' + w + r'\b', txt, re.I)]
    P('   live political references  : %s' % (pol if pol else 'none'))
    if pol:
        F('live political reference %s' % pol)
    hit = [c for c in REAL if re.search(r'\b' + re.escape(c) + r'\b', txt)]
    P('   real company names         : %s' % (hit if hit else 'none'))
    if hit:
        F('real company name %s' % hit)
    fl = [w for w in FLAG if re.search(r'\b' + w + r'\b', txt, re.I)]
    P('   flagged terms              : %s' % (fl if fl else 'none'))
    if fl:
        F('neutrality %s' % fl)

    # ---- 13 grammar ladder ------------------------------------------------
    P('\n13. GRAMMAR AND SKILL LADDER')
    gram = [U['gram'] for U in Us]
    skill = [U['t_title'] for U in Us]
    if gram != series.GRAMMAR[code]:
        off = [i + 1 for i in range(10) if gram[i] != series.GRAMMAR[code][i]]
        F('grammar ladder does not match series.py at units %s' % off)
    for i, (g, s) in enumerate(zip(gram, skill), 1):
        P('   U%-2d %-34s %s' % (i, g[:34], s[:34]))
    if len(set(gram)) != 10:
        F('grammar repeats inside book')
    if len(set(skill)) != 10:
        F('real-world skill repeats inside book')
    for g in gram:
        prev = ledger.setdefault('grammar', {})
        if g in prev and prev[g] != code:
            F('grammar point already taught in %s: %s' % (prev[g], g))
        prev[g] = code
    for s in skill:
        prev = ledger.setdefault('skills', {})
        if s in prev and prev[s] != code:
            V('real-world skill repeated from %s: %s' % (prev[s], s))
        prev[s] = code

    # ---- 14 hammering -----------------------------------------------------
    P('\n14. REDUNDANCY SCAN')
    stems = collections.Counter()
    for U in Us:
        for n in ('c_c', 'v_a', 'g_a', 't_a'):
            for s, a in U[n]:
                stems[re.sub(r'_+', '_', s.strip().lower())] += 1
        for n in ('listen', 'vocab', 'gram'):
            for s, a in U['rev'][n]:
                stems[re.sub(r'_+', '_', s.strip().lower())] += 1
    rep = [s for s, c in stems.items() if c > 2]
    P('   distinct gap stems         : %d' % len(stems))
    P('   stems used more than twice : %s' % (len(rep) if rep else 'none'))
    if rep:
        V('repeated gap stems %d' % len(rep))
    sent_rep = collections.Counter(re.split(r'(?<=[.!?])\s+', pr))
    dupe = [s for s, c in sent_rep.items() if c > 1 and len(s.split()) > 8]
    P('   duplicated prose sentences : %s' % (len(dupe) if dupe else 'none'))
    if dupe:
        V('duplicated prose %d' % len(dupe))

    # ---- 15 precision in the book's own models --------------------------
    P('\n15. PRECISION OF THE MODEL ANSWERS')
    vag = []
    for U in Us:
        texts = [('lab.model', ' '.join(U['lab']['model'])), ('w_model', U['w_model'])]
        for nm, body in texts:
            for cl in re.split(r'[.;,]\s*', body):
                low = cl.lower()
                for v in series.VAGUE:
                    if re.search(r'(?<![a-z])' + re.escape(v) + r'(?![a-z])', low):
                        if not re.search(r'\d', cl):
                            vag.append((U['num'], nm, v, cl.strip()[:46]))
    P('   model texts scanned        : %d' % (2 * len(Us)))
    P('   unquantified vagueness     : %s' % (vag if vag else 'none'))
    if vag:
        F('precision: a model answer uses %s with no number' % vag[0][2])

    # ---- 16 no vendor ----------------------------------------------------
    P('\n16. NO PRODUCT, MODEL OR PLATFORM NAMED')
    vh = [c for c in VENDOR if re.search(r'\b' + re.escape(c) + r'\b', txt)]
    P('   named products             : %s' % (vh if vh else 'none'))
    if vh:
        F('vendor name %s' % vh)

    # ---- 17 no capability forecast ---------------------------------------
    P('\n17. NO CAPABILITY FORECAST')
    fc = []
    for U in Us:
        for p in U['read'] + U['ext'] + U['t_body'] + U['case']['brief'] + [U['t_bound']]:
            m = FORECAST.search(p)
            if m:
                fc.append((U['num'], m.group(0)[:40]))
    P('   forecast claims            : %s' % (fc if fc else 'none'))
    if fc:
        F('capability forecast %s' % fc[:3])

    # ---- 18 brief lab integrity ------------------------------------------
    P('\n18. BRIEF LAB INTEGRITY')
    need = ('title task draft marks draft_cap asked back gap back_cap back_note '
            'diagnosis rewrite scaffold bank check model cost').split()
    lb, perlab = [], []
    for U in Us:
        L = U['lab']
        miss = [k for k in need if not L.get(k)]
        if miss:
            lb.append((U['num'], 'missing', miss)); continue
        if len(L['marks']) < 5:
            lb.append((U['num'], 'marked spans %d' % len(L['marks'])))
        if sorted(L['marks'].values()) != list(range(1, len(L['marks']) + 1)):
            lb.append((U['num'], 'flag numbering', sorted(L['marks'].values())))
        if max(L['marks'].keys()) >= len(L['draft']):
            lb.append((U['num'], 'flag past end of draft'))
        if len(L['diagnosis']) != 6:
            lb.append((U['num'], 'diagnosis items %d (expect 6)' % len(L['diagnosis'])))
        if len(L['scaffold']) != 6 or len(L['model']) != 6:
            lb.append((U['num'], 'scaffold %d model %d' % (len(L['scaffold']), len(L['model']))))
        if not re.search(r'\d', L['cost']):
            lb.append((U['num'], 'cost line has no number'))
        if len(L['cost'].split()) < 12:
            lb.append((U['num'], 'cost line too short'))
        if len(L['bank']) < 4 or len(L['check']) < 3:
            lb.append((U['num'], 'lab scaffold thin'))
        if len(L['asked']) < 3 or len(L['back']) < 3:
            lb.append((U['num'], 'brief-against-output thin'))
        fs = [a for q, a in L['diagnosis']]
        bad = [a for a in fs if a not in series.FAULT_OK[code]]
        if bad:
            lb.append((U['num'], 'fault outside this book\'s ladder', bad))
        cnt = collections.Counter(fs)
        if len(cnt) > 3:
            lb.append((U['num'], 'more than three fault types', sorted(cnt)))
        if cnt and max(cnt.values()) > 2:
            lb.append((U['num'], 'a fault used more than twice', cnt.most_common(1)))
        perlab.append((U['num'], sorted(set(fs))))
        for f in set(fs):
            ledger.setdefault('lab_faults', {}).setdefault(f, []).append('%s/u%02d' % (code, U['num']))
    P('   labs                       : %d' % len(Us))
    P('   fault types per lab        : %s' % ', '.join('u%d:%d' % (n, len(f)) for n, f in perlab))
    P('   problems                   : %s' % (lb if lb else 'none'))
    if lb:
        F('brief lab integrity %s' % lb[:3])

    # ---- 19 fault ladder --------------------------------------------------
    P('\n19. FAULT LADDER')
    early = []
    for U in Us:
        for q, a in U['lab']['diagnosis']:
            if a not in series.FAULT_OK[code]:
                early.append((U['num'], a))
    here = collections.Counter()
    for U in Us:
        for f in {a for q, a in U['lab']['diagnosis']}:
            here[f] += 1
    P('   faults used in this book   : %s' % dict(sorted(here.items())))
    P('   used before introduced     : %s' % (early if early else 'none'))
    if early:
        F('fault used before its book: %s' % early[:3])

    # ---- 20 ai ladder ------------------------------------------------------
    P('\n20. AI LADDER')
    ais = [U['ai'] for U in Us]
    if ais != series.AI_LADDER[code]:
        off = [i + 1 for i in range(10) if ais[i] != series.AI_LADDER[code][i]]
        F('AI ladder does not match series.py at units %s' % off)
    STOP = set('the a an and or of to in on for is are be it its what that this with '
               'as at by from not no does do you your they them their one two three '
               'four when where which who why how can will would should must'.split())
    thin = []
    for U in Us:
        kw = {w.strip('.,:;"\'()') for w in U['ai'].lower().split()}
        kw = {w for w in kw if w and w not in STOP and len(w) > 3}
        ext = ' '.join(U['ext']).lower()
        skl = ' '.join(U['t_body']).lower()
        nar = (' '.join(U['read']) + ' ' + ' '.join(U['case']['brief'])).lower()
        hits = [any(k[:6] in z for k in kw) for z in (ext, skl, nar)]
        if sum(hits) < 3:
            thin.append((U['num'], ['ext', 'skill', 'narrative'][hits.index(False)]))
    for i, a in enumerate(ais, 1):
        prev = ledger.setdefault('ai', {})
        if a in prev and prev[a] != code:
            F('AI point already taught in %s: %s' % (prev[a], a))
        prev[a] = code
    P('   points in order            : %s' % ('yes' if ais == series.AI_LADDER[code] else 'NO'))
    P('   carried by ext+skill+story : %s' % ('all ten' if not thin else thin))
    if thin:
        V('AI point thin in %s' % thin[:4])

    # ---- 21 boundary line --------------------------------------------------
    P('\n21. BOUNDARY LINE ON EVERY CAPABILITY')
    NEG = re.compile(r"\b(not|cannot|can't|does not|doesn't|will not|won't|never|"
                     r"no |nothing|neither|fails|unable)\b", re.I)
    bnd = []
    for U in Us:
        b = U.get('t_bound', '')
        if not b or len(b.split()) < 14:
            bnd.append((U['num'], 'missing or too short'))
        elif not NEG.search(b):
            bnd.append((U['num'], 'states no limit'))
    P('   boundary lines             : %d of %d valid' % (len(Us) - len(bnd), len(Us)))
    P('   problems                   : %s' % (bnd if bnd else 'none'))
    if bnd:
        F('boundary line %s' % bnd)

    # ---- 22 dissent ---------------------------------------------------------
    P('\n22. DISSENT')
    unres = [U['num'] for U in Us for d in (U['d1'], U['d2']) if d.get('unresolved')]
    tags = collections.Counter()
    bad = []
    for U in Us:
        tg = set(U['case'].get('tags', []))
        if not tg <= {'manager_wrong', 'sceptic_right'}:
            bad.append((U['num'], sorted(tg)))
        for t2 in tg:
            tags[t2] += 1
            ledger.setdefault('clinic_tags', {}).setdefault(t2, []).append('%s/u%02d' % (code, U['num']))
    P('   dialogues ending on an open objection : %d  (need 4)' % len(unres))
    P('   clinics where the manager was wrong   : %d' % tags['manager_wrong'])
    P('   clinics where the sceptic was right   : %d' % tags['sceptic_right'])
    if bad:
        F('unknown clinic tag %s' % bad)
    if len(unres) < 4:
        F('only %d dialogues end on an unanswered objection (need 4)' % len(unres))

    return len(txt.split()), len(media)


def main():
    arg = (sys.argv[1] if len(sys.argv) > 1 else 'all')
    fail, warn = [], []
    ledger = {'terms': {}, 'grammar': {}, 'skills': {}, 'ai': {},
              'lab_faults': {}, 'clinic_tags': {'manager_wrong': [], 'sceptic_right': []}}
    codes = series.ORDER if arg == 'all' else [arg]
    done, tot_w, tot_f = [], 0, 0
    for c in codes:
        if not os.path.isdir(os.path.join(HERE, 'units', c)):
            continue
        n = len([f for f in os.listdir(os.path.join(HERE, 'units', c))
                 if re.match(r'u\d\d\.py$', f)])
        if n < 10:
            continue
        w, f = check_book(c, fail, warn, ledger)
        done.append(c); tot_w += w; tot_f += f
    print('\n' + '=' * 76)
    print('SERIES')
    print('   books checked              : %d  (%s)' % (len(done), ' '.join(done)))
    print('   total words                : %d' % tot_w)
    print('   total figures              : %d' % tot_f)
    print('   vocabulary ledger          : %d distinct terms' % len(ledger['terms']))
    print('   grammar ledger             : %d distinct points' % len(ledger['grammar']))
    print('   AI ledger                  : %d distinct points' % len(ledger.get('ai', {})))
    if arg == 'all' and len(done) == len(series.ORDER):
        print('\n   SERIES GATE 19 \u00B7 fault ladder across 60 labs')
        lf = ledger.get('lab_faults', {})
        for f in series.FAULTS:
            n = len(set(lf.get(f, [])))
            print('      %-20s %2d labs%s' % (f, n, '' if n >= 12 else '   TOO FEW'))
            if n < 12:
                fail.append('series: fault "%s" appears in only %d labs (need 12)' % (f, n))
        print('\n   SERIES GATE 22 \u00B7 dissent across 60 clinics')
        ct = ledger.get('clinic_tags', {})
        mw, sr = len(set(ct.get('manager_wrong', []))), len(set(ct.get('sceptic_right', [])))
        print('      manager or founder wrong      %2d  (need 20)' % mw)
        print('      sceptic right, plan dropped   %2d  (need 12)' % sr)
        if mw < 20:
            fail.append('series: only %d clinics where the manager was wrong (need 20)' % mw)
        if sr < 12:
            fail.append('series: only %d clinics where the sceptic was right (need 12)' % sr)
    try:
        os.makedirs(os.path.join(HERE, 'out'))
    except OSError:
        pass
    if arg == 'all':
        io.open(LEDGER, 'w', encoding='utf-8').write(
            json.dumps(ledger, indent=1, ensure_ascii=False, sort_keys=True))
        print('   ledger written             : %s' % LEDGER)
    else:
        print('   ledger NOT written         : single-book run')
    print('=' * 76)
    print('RESULT : %s' % ('ALL CHECKS PASS' if not fail else 'FAILURES'))
    for f in fail:
        print('   FAIL  %s' % f)
    for w in warn:
        print('   warn  %s' % w)
    sys.exit(1 if fail else 0)


main()
