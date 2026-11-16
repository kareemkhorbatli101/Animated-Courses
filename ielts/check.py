# -*- coding: utf-8 -*-
"""The unit gate for the IELTS books, written before the units.

It enforces what IELTS_Series_Plan.md promises and what the outline
specifies, so a unit cannot drift the way fifty-two outline units drifted off
their Listening coverage before anything was counting.

    python3 check.py 31-40
"""
import importlib
import re
import sys

# Per-volume text bands, from section 9.2 of the plan. A volume's texts are
# shorter and its scripts slower than the volume above it, and the ladder is
# the whole promise of the series, so it is gated rather than intended.
BANDS_BY_VOL = {
    3: {'gt_short': (150, 240), 'gt_work': (250, 340), 'long': (420, 560),
        'acad': (600, 760), 'l1': (240, 320), 'l2': (250, 330),
        'l3': (300, 380), 'l4': (350, 430), 'model': (140, 300),
        'essay': (240, 390)},
    4: {'gt_short': (180, 260), 'gt_work': (280, 380), 'long': (480, 640),
        'acad': (620, 800), 'l1': (260, 340), 'l2': (280, 360),
        'l3': (330, 400), 'l4': (380, 460), 'model': (150, 320),
        'essay': (260, 430)},
    5: {'gt_short': (190, 285), 'gt_work': (300, 400), 'long': (520, 700),
        'acad': (780, 960), 'l1': (280, 360), 'l2': (300, 390),
        'l3': (350, 430), 'l4': (400, 490), 'model': (160, 340),
        'essay': (280, 470)},
    6: {'gt_short': (200, 300), 'gt_work': (320, 430), 'long': (560, 760),
        'acad': (860, 1000), 'l1': (290, 380), 'l2': (290, 400),
        'l3': (360, 450), 'l4': (400, 510), 'model': (170, 360),
        'essay': (300, 500)},
}


def vol_of(n):
    """Which volume a unit number belongs to.

    Ten units a volume from 21, so the arithmetic generalises and a new
    volume needs no edit here. Anything below 21 belongs to the Foundation
    books, which this file does not gate.
    """
    return max(3, min(max(BANDS_BY_VOL), 3 + (n - 21) // 10))


# the module-level name the rest of this file uses; set per unit as it runs
BANDS = BANDS_BY_VOL[4]

# the timed Reading paper: per passage, and for the paper as a whole. The
# real Academic paper runs 2,150-2,750 words; a volume below the target band
# sits at the bottom of that range and reaches it at Volume 5.
PAPER_BY_VOL = {3: dict(passage=(620, 820), total=(1950, 2350)),
                4: dict(passage=(700, 950), total=(2150, 2750)),
                5: dict(passage=(760, 1000), total=(2350, 2850)),
                6: dict(passage=(820, 1050), total=(2550, 3000))}
MIN_WHY = 30            # an explanation shorter than this explains nothing
MAX_UNTAUGHT = 14       # untaught word types in one academic passage


def wc(paras):
    return sum(len(p.split()) for p in paras)


def _items_ok(items, tag, n_lo, n_hi, out):
    if not (n_lo <= len(items) <= n_hi):
        out.append('%s: %d items, want %d-%d' % (tag, len(items), n_lo, n_hi))
    pos = set()
    for i, it in enumerate(items):
        if len(it) == 4:
            stem, opts, ans, why = it
            if opts:
                if not (0 <= ans < len(opts)):
                    out.append('%s item %d: answer out of range' % (tag, i + 1))
                else:
                    pos.add(ans)
            if len(why) < MIN_WHY:
                out.append('%s item %d: explanation %d chars, want %d+'
                           % (tag, i + 1, len(why), MIN_WHY))
    return pos


def check_unit(U, out, heads):
    global BANDS
    n = U['n']
    BANDS = BANDS_BY_VOL[vol_of(n)]
    tag = 'u%d' % n
    cyc = U['cycles']
    if len(cyc) != 5:
        out.append('%s: %d cycles, want 5' % (tag, len(cyc)))
    lparts, sparts, forks = set(), set(), set()
    allpos = set()
    for ci, c in enumerate(cyc, 1):
        ct = '%s c%d' % (tag, ci)
        if not c.get('read'):
            out.append('%s: no reading' % ct)
        for r in c['read']:
            band = BANDS.get(r['band'])
            if band is None:
                out.append('%s: unknown band %r' % (ct, r['band']))
            else:
                w = wc(r['paras'])
                if not (band[0] <= w <= band[1]):
                    out.append('%s "%s": %d words, want %d-%d'
                               % (ct, r['heading'][:34], w, band[0], band[1]))
            allpos |= _items_ok(r['items'], '%s %s' % (ct, r['heading'][:22]),
                                3, 8, out)
        for l in c['listen']:
            m = re.match(r'Part (\d)', l['part'])
            if m:
                lparts.add(int(m.group(1)))
            band = BANDS.get(l['band'])
            if band:
                w = sum(len(t.split()) for _, t in l['script'])
                if not (band[0] <= w <= band[1]):
                    out.append('%s listening "%s": %d words, want %d-%d'
                               % (ct, l['heading'][:30], w, band[0], band[1]))
            allpos |= _items_ok(l['items'], '%s %s' % (ct, l['heading'][:22]),
                                3, 8, out)
        sp = c['speak']
        for m in re.finditer(r'Part (\d)', sp['part']):
            sparts.add(int(m.group(1)))
        if len(sp['qs']) < 3:
            out.append('%s: speaking has %d questions, want 3+' % (ct, len(sp['qs'])))
        # The answer shape is drawn as a figure by book.py, so a cycle
        # missing it crashes the build rather than printing a blank page.
        # Volume 6 unit 54 shipped without one; this is why.
        shape = sp.get('shape') or []
        if len(shape) < 3:
            out.append('%s: answer shape has %d moves, want 3+'
                       % (ct, len(shape)))
        for mv, line in shape:
            if mv not in ('answer', 'support', 'follow-up'):
                out.append('%s: unknown move %r in the answer shape'
                           % (ct, mv))
            if len(line) < 12:
                out.append('%s: a shape line of %d chars says nothing'
                           % (ct, len(line)))
        for w in c['write']:
            if w.get('fork'):
                forks.add(w['fork'])
            if w.get('model'):
                mw = wc(w['model'])
                lo, hi = BANDS[w.get('wband', 'model')]
                if not (lo <= mw <= hi):
                    out.append('%s model "%s": %d words, want %d-%d'
                               % (ct, w['heading'][:30], mw, lo, hi))
        for f in ('gram', 'vocab', 'expr', 'trans'):
            if not c.get(f):
                out.append('%s: no %s' % (ct, f))
        if not (1 <= c.get('step', 0) <= 5):
            out.append('%s: scaffolding step %r' % (ct, c.get('step')))
        for wd, gl in c['vocab']:
            k = wd.lower()
            if k in heads:
                out.append('%s: "%s" already taught in unit %d' % (ct, wd, heads[k]))
            heads[k] = n
    if lparts != {1, 2, 3, 4}:
        out.append('%s: Listening Parts %s, missing %s'
                   % (tag, sorted(lparts), sorted({1, 2, 3, 4} - lparts)))
    if sparts != {1, 2, 3}:
        out.append('%s: Speaking Parts %s, missing %s'
                   % (tag, sorted(sparts), sorted({1, 2, 3} - sparts)))
    if forks != {'A', 'GT'}:
        out.append('%s: Task 1 forks %s, want both' % (tag, sorted(forks) or 'none'))
    if len(allpos) < 3:
        out.append('%s: answers use only %d distinct positions, want 3+'
                   % (tag, len(allpos)))
    if not U.get('technique') or not U.get('outlining'):
        out.append('%s: missing a strand' % tag)


def check_numbering(U, out):
    """The Questions a-b headings must match the running count in the unit."""
    tag = 'u%d' % U['n']
    n = 1
    for ci, c in enumerate(U['cycles'], 1):
        for blk in list(c['read']) + list(c['listen']):
            m = re.match(r'Questions (\d+)-(\d+)$', blk.get('qtype', ''))
            if not m:
                out.append('%s c%d "%s": qtype %r is not "Questions a-b"'
                           % (tag, ci, blk['heading'][:24], blk.get('qtype')))
                continue
            a, b = int(m.group(1)), int(m.group(2))
            k = len(blk['items'])
            if a != n or b != n + k - 1:
                out.append('%s c%d "%s": heading says %d-%d, prints %d-%d'
                           % (tag, ci, blk['heading'][:24], a, b, n,
                              n + k - 1))
            n += k


def check_paper(P, out):
    global BANDS
    BANDS = BANDS_BY_VOL[P['vol']]
    """The timed paper: shape, length, numbering and answer spread."""
    tag = 'paper%s' % P['vol']
    ps = P['passages']
    if len(ps) != 3:
        out.append('%s: %d passages, want 3' % (tag, len(ps)))
    total = 0
    nxt = 1
    for x in ps:
        w = sum(len(t.split()) for t in x['paras'])
        plo, phi = PAPER_BY_VOL[P['vol']]['passage']
        if not plo <= w <= phi:
            out.append('%s p%d "%s": %d words, want %d-%d'
                       % (tag, x['no'], x['heading'][:28], w, plo, phi))
        if x['first'] != nxt:
            out.append('%s p%d starts at %d, want %d'
                       % (tag, x['no'], x['first'], nxt))
        n = len(x['items'])
        if not 12 <= n <= 14:
            out.append('%s p%d: %d questions, want 12-14' % (tag, x['no'], n))
        for i, it in enumerate(x['items']):
            if len(it) != 4:
                out.append('%s p%d item %d: malformed' % (tag, x['no'], i + 1))
                continue
            if len(it[3]) < MIN_WHY:
                out.append('%s p%d item %d: explanation %d chars, want %d+'
                           % (tag, x['no'], x['first'] + i, len(it[3]),
                              MIN_WHY))
        nxt += n
        total += n
    if total != 40:
        out.append('%s: %d questions in total, want 40' % (tag, total))
    words = sum(sum(len(t.split()) for t in x['paras']) for x in ps)
    tlo, thi = PAPER_BY_VOL[P['vol']]['total']
    if not tlo <= words <= thi:
        out.append('%s: %d words in total, want %d-%d'
                   % (tag, words, tlo, thi))
    spread = set()
    for x in ps:
        for it in x['items']:
            if it[1]:
                spread.add(it[2])
    if len(spread) < 3:
        out.append('%s: answers use only %d positions' % (tag, len(spread)))


def check_lpaper(L, out):
    """The timed Listening paper: four parts, ten questions each, 1-40."""
    global BANDS
    BANDS = BANDS_BY_VOL[L['vol']]
    tag = 'lpaper%s' % L['vol']
    parts = L['parts']
    if len(parts) != 4:
        out.append('%s: %d parts, want 4' % (tag, len(parts)))
    want_parts = ['Part 1', 'Part 2', 'Part 3', 'Part 4']
    got_parts = [p.get('part') for p in parts]
    if got_parts != want_parts:
        out.append('%s: parts are %s, want %s' % (tag, got_parts, want_parts))
    nxt, total = 1, 0
    for p in parts:
        w = sum(len(t.split()) for _, t in p['script'])
        lo, hi = BANDS[p['band']]
        if not lo <= w <= hi:
            out.append('%s %s "%s": %d words, want %d-%d'
                       % (tag, p['part'], p['heading'][:26], w, lo, hi))
        if p['first'] != nxt:
            out.append('%s %s starts at %d, want %d'
                       % (tag, p['part'], p['first'], nxt))
        n = len(p['items'])
        if n != 10:
            out.append('%s %s: %d questions, want 10' % (tag, p['part'], n))
        for i, it in enumerate(p['items']):
            if len(it) != 4 or len(it[3]) < MIN_WHY:
                out.append('%s %s item %d: explanation too short'
                           % (tag, p['part'], p['first'] + i))
        nxt += n
        total += n
    if total != 40:
        out.append('%s: %d questions in total, want 40' % (tag, total))


def check_wpaper(Wp, out):
    """The timed Writing paper: both Task 1 forks, one Task 2, models and
    marking checks on every task."""
    global BANDS
    BANDS = BANDS_BY_VOL[Wp['vol']]
    tag = 'wpaper%s' % Wp['vol']
    ts = Wp['tasks']
    if len(ts) != 3:
        out.append('%s: %d tasks, want 3 (Task 1 Academic, Task 1 GT, '
                   'Task 2)' % (tag, len(ts)))
    forks = [t.get('fork') for t in ts]
    if sorted(x for x in forks if x) != ['A', 'GT']:
        out.append('%s: Task 1 forks are %s, want one A and one GT'
                   % (tag, forks))
    nxt = 1
    for t in ts:
        if t['no'] != nxt:
            out.append('%s task %d numbered %d' % (tag, nxt, t['no']))
        nxt += 1
        band = 'essay' if t['task'].startswith('Task 2') else 'model'
        w = wc(t['model'])
        lo, hi = BANDS[band]
        if not lo <= w <= hi:
            out.append('%s "%s" model: %d words, want %d-%d'
                       % (tag, t['heading'][:30], w, lo, hi))
        floor = 250 if band == 'essay' else 150
        if w < floor:
            out.append('%s "%s" model is %d words, under the %d the rubric '
                       'demands' % (tag, t['heading'][:30], w, floor))
        if len(t['notes']) < 3:
            out.append('%s "%s": %d notes, want 3+'
                       % (tag, t['heading'][:30], len(t['notes'])))
        if len(t['checks']) < 4:
            out.append('%s "%s": %d marking checks, want 4+'
                       % (tag, t['heading'][:30], len(t['checks'])))
        for i, c in enumerate(t['checks'], 1):
            if len(c) < MIN_WHY:
                out.append('%s "%s" check %d: %d chars, want %d+'
                           % (tag, t['heading'][:30], i, len(c), MIN_WHY))


def check_spaper(Sp, out):
    """The timed Speaking paper: three parts in order, a cue card on Part 2,
    an answer shape and marking checks on each."""
    tag = 'spaper%s' % Sp['vol']
    parts = Sp['parts']
    want = ['Part 1', 'Part 2', 'Part 3']
    got = [p.get('part') for p in parts]
    if got != want:
        out.append('%s: parts are %s, want %s' % (tag, got, want))
    for i, pt in enumerate(parts, 1):
        nm = pt.get('part', '?')
        if pt['no'] != i:
            out.append('%s %s numbered %d, want %d' % (tag, nm, pt['no'], i))
        if (nm == 'Part 2') != bool(pt.get('cue')):
            out.append('%s %s: a cue card belongs on Part 2 and only there'
                       % (tag, nm))
        lo = 4 if nm == 'Part 1' else 3
        if len(pt['qs']) < lo:
            out.append('%s %s: %d questions, want %d+'
                       % (tag, nm, len(pt['qs']), lo))
        shape = pt.get('shape') or []
        if len(shape) < (3 if nm == 'Part 1' else 5):
            out.append('%s %s: answer shape has %d moves, want %d+'
                       % (tag, nm, len(shape),
                          3 if nm == 'Part 1' else 5))
        for mv, line in shape:
            if mv not in ('answer', 'support', 'follow-up'):
                out.append('%s %s: unknown move %r in the answer shape'
                           % (tag, nm, mv))
            if len(line) < 12:
                out.append('%s %s: a shape line of %d chars says nothing'
                           % (tag, nm, len(line)))
        if len(pt['notes']) < 3:
            out.append('%s %s: %d notes, want 3+' % (tag, nm, len(pt['notes'])))
        if len(pt['checks']) < 4:
            out.append('%s %s: %d marking checks, want 4+'
                       % (tag, nm, len(pt['checks'])))
        for j, c in enumerate(pt['checks'], 1):
            if len(c) < MIN_WHY:
                out.append('%s %s check %d: %d chars, want %d+'
                           % (tag, nm, j, len(c), MIN_WHY))


def seam(heads, ns, out):
    """A head word taught in one volume must not be re-taught in another.

    Within a volume check_unit already forbids repeats. This catches the
    seam between volumes, where a student who has done Volume 3 would
    otherwise meet the same word presented as new in Volume 4.
    """
    this = vol_of(ns[0])
    for other in sorted(BANDS_BY_VOL):
        if other == this:
            continue
        theirs = {}
        # The first unit of volume v. This was once written as a pair of
        # two-way conditionals, which silently gave every volume past the
        # fourth volume 4's own units: `check.py 31-40` then reported unit 39
        # colliding with itself under the name of Volume 5.
        lo = 21 + (other - 3) * 10
        for n in range(lo, lo + 10):
            try:
                m = importlib.import_module('content.u%02d' % n)
            except ModuleNotFoundError:
                continue
            importlib.reload(m)
            for c in m.UNIT['cycles']:
                for w, _ in c['vocab']:
                    theirs.setdefault(w, n)
        for w, where in sorted(heads.items()):
            if w in theirs:
                out.append('seam: "%s" taught in unit %s and again in unit %d '
                           '(Volume %d)' % (w, where, theirs[w], other))


def main(argv):
    spec = argv[0] if argv else '31-40'
    a, _, b = spec.partition('-')
    ns = range(int(a), int(b or a) + 1)
    out, heads = [], {}
    got = 0
    for n in ns:
        try:
            m = importlib.import_module('content.u%02d' % n)
        except ModuleNotFoundError:
            continue
        importlib.reload(m)
        got += 1
        check_unit(m.UNIT, out, heads)
        check_numbering(m.UNIT, out)
    if got:
        seam(heads, list(ns), out)
    npaper = 0
    try:
        pm = importlib.import_module('content.paper%d' % vol_of(ns[0]))
        importlib.reload(pm)
        check_paper(pm.PAPER, out)
        npaper += 1
    except ModuleNotFoundError:
        pass
    try:
        lm = importlib.import_module('content.lpaper%d' % vol_of(ns[0]))
        importlib.reload(lm)
        check_lpaper(lm.LPAPER, out)
        npaper += 1
    except ModuleNotFoundError:
        pass
    try:
        wm = importlib.import_module('content.wpaper%d' % vol_of(ns[0]))
        importlib.reload(wm)
        check_wpaper(wm.WPAPER, out)
        npaper += 1
    except ModuleNotFoundError:
        pass
    try:
        sm = importlib.import_module('content.spaper%d' % vol_of(ns[0]))
        importlib.reload(sm)
        check_spaper(sm.SPAPER, out)
        npaper += 1
    except ModuleNotFoundError:
        pass
    print('%d unit(s) checked, %d head words, %d timed paper(s)'
          % (got, len(heads), npaper))
    if out:
        print('\n%d problem(s):' % len(out))
        for p in out[:60]:
            print('  ' + p)
        return 1
    print('all checks pass')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
