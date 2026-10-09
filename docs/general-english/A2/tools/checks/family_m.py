"""M · Content — 10 checks, and the only family in this suite that reads meaning.

Why it exists
-------------
B1 Unit 1 was built, went green on 251 checks, and was rejected on sight. The
suite could prove the unit had 42 sub-sections, 41 figures, a 15.5-word mean
sentence and a 6.61 reading grade. It could not see that 37 of those 42
sub-sections were about the same power cut on the same evening, nor that the
opening listening had a man standing still for twenty minutes in a dark
stairwell while his own script said somebody walked past him holding out a lit
phone.

Families A-L all compare a unit with a SHAPE. Monotony and implausibility are
properties of CONTENT, so no amount of structural checking reaches them. This
family checks content by making the author declare it: `ledgers/situations.yaml`
names, per unit, the theme, the strands, which sub-section belongs to which, and
-- for every strand -- the objection a reader will raise and the answer to it.
The checks then hold the declaration against the unit's own text.

What this family can and cannot do
----------------------------------
It CANNOT judge whether a situation is plausible; nothing can. What it can do is
refuse a situation whose obvious objection has not been named and answered
(M06), refuse an answer that lives only in the ledger and never reaches the page
(M07), and refuse four specific premises that are known to be false (M08). That
is the honest limit, and it is stated here rather than implied by the family's
name.

Calibration
-----------
M10 is to this family what L01 is to the level floors. A law that would have
passed the unit it was written to reject is not a law, so M10 measures the
superseded unit -- kept at spec/fixtures/b11-u01-v1.md -- against the occupancy
numbers and fails if it clears them.

Scope
-----
Every check skips with a stated reason at a level that has no situations ledger.
A2's twenty units shipped before this law existed and are not retrofitted;
00-MASTER-PLAN.md section 4c records that decision, the measurement behind it,
and what retrofitting would cost.
"""
from __future__ import annotations
import os, re, sys
import yaml
from . import check, ok, fail, expect
import model as M

def _ledger(ctx):
    """The situations ledger, or None if this level has none.

    Read through the context rather than off disk, for the same reason cast,
    grammar and lexis are: a check that opens its own file cannot be mutated,
    and a family whose negative tests cannot be written is a family nobody has
    proved catches anything.
    """
    d = getattr(ctx, 'situations', None)
    return d or None


def _unit_entry(ctx, u):
    d = _ledger(ctx)
    if d is None:
        return None, 'this level has no ledgers/situations.yaml; the content law is B1-forward (plan 4c)'
    e = (d.get('units') or {}).get(u.num)
    if e is None:
        return None, f'no entry for unit {u.num} in ledgers/situations.yaml'
    return e, None


def _law(ctx, key):
    d = _ledger(ctx)
    return (d or {}).get('law', {}).get(key)


def _owned(entry):
    """strand id -> list of sub-section headings it owns."""
    return {s['id']: list(s.get('subs') or []) for s in entry.get('strands') or []}


def _norm(h):
    return re.sub(r'\s+', ' ', (h or '')).strip()


def _has(probe, text):
    """Is this probe word in this text, as a word rather than a substring?

    Three things this has to get right, each of which it got wrong first:

    * Boundaries. Without them `till` fires on `still` and `cat` fires on
      `location`, so every strand those belong to is reported present in
      sections that never mention it -- which would make M05 and M07 pass on
      exactly the monotony they exist to detect.
    * Markup. A pronunciation line writes the stressed syllable in bold, so
      `battery` is on the page as `**BATT**ery`. The learner reads one word and
      a literal search finds none, so the emphasis characters come out first.
    * Plurals. The reading lists `deliveries, viewings, repairs, shifts`, and a
      strict boundary rejects every one of them.
    """
    t = re.sub(r'[*_]', '', text)
    return re.search(r'(?<![a-z])' + re.escape(probe) + r'(?:s|es)?(?![a-z])',
                     t, re.I) is not None


# --------------------------------------------------------------------------- M01
@check('M01', 'situations.units.<n>',
       'Every sub-section is attributed to a strand or to the theme, and every '
       'attribution names a sub-section that exists')
def m01(u, ctx):
    e, why = _unit_entry(ctx, u)
    if e is None:
        return ok(why) if 'B1-forward' in why else fail(why)
    if not e.get('built'):
        return ok(f'unit {u.num} is designed but not built; attribution is '
                  f'required of a built unit only')
    heads = {_norm(s.heading) for s in u.subs}
    claimed: dict[str, str] = {}
    dupes = []
    for sid, subs in _owned(e).items():
        for h in subs:
            h = _norm(h)
            if h in claimed:
                dupes.append(f'{h!r} claimed by both {claimed[h]} and {sid}')
            claimed[h] = sid
    for h in (e.get('theme_subs') or {}):
        h = _norm(h)
        if h in claimed:
            dupes.append(f'{h!r} claimed by {claimed[h]} and also listed as a theme sub')
        claimed[h] = 'theme'
    ghost = sorted(set(claimed) - heads)
    orphan = sorted(heads - set(claimed))
    bad = []
    if dupes:  bad.append(f'{len(dupes)} double attribution(s): {dupes[:3]}')
    if ghost:  bad.append(f'{len(ghost)} attribution(s) to a heading the unit does not have: {ghost[:3]}')
    if orphan: bad.append(f'{len(orphan)} sub-section(s) with no attribution: {orphan[:3]}')
    if bad:
        return fail('; '.join(bad))
    return ok(f'{len(heads)} sub-sections, all attributed')


# --------------------------------------------------------------------------- M02
@check('M02', 'situations.law.min_strands',
       'A unit carries at least min_strands distinct situations, each owning at '
       'least one sub-section outright')
def m02(u, ctx):
    e, why = _unit_entry(ctx, u)
    if e is None:
        return ok(why) if 'B1-forward' in why else fail(why)
    need = _law(ctx, 'min_strands') or 0
    floor = _law(ctx, 'min_strand_subs') or 1
    strands = e.get('strands') or []
    if not e.get('built'):
        n = len(strands)
        return expect(n >= need,
                      f'unit {u.num} is designed with {n} strands, below the floor of {need}')
    owned = _owned(e)
    thin = sorted(sid for sid, subs in owned.items() if len(subs) < floor)
    if thin:
        return fail(f'{len(thin)} strand(s) own no sub-section of their own, so they are '
                    f'decoration rather than situations: {thin}')
    n = len(owned)
    if n < need:
        return fail(f'unit {u.num} carries {n} strands; the law is {need}. A unit with '
                    f'fewer is a single topic with scenery.')
    return ok(f'{n} distinct situations, the smallest owning '
              f'{min(len(v) for v in owned.values())} sub-section(s)')


# --------------------------------------------------------------------------- M03
@check('M03', 'situations.law.max_strand_subs / max_strand_share',
       'No one situation owns more than max_strand_subs sub-sections, nor more '
       'than max_strand_share of all attributions')
def m03(u, ctx):
    e, why = _unit_entry(ctx, u)
    if e is None:
        return ok(why) if 'B1-forward' in why else fail(why)
    if not e.get('built'):
        return ok(f'unit {u.num} not built')
    cap = _law(ctx, 'max_strand_subs') or 99
    share = _law(ctx, 'max_strand_share') or 1.0
    owned = _owned(e)
    over = {sid: len(s) for sid, s in owned.items() if len(s) > cap}
    if over:
        return fail(f'{over} -- the cap is {cap} of {len(u.subs)} sub-sections. '
                    f'This is the check the superseded Unit 1 failed at 37.')
    # attributions = sub-sections owned, plus every mention in a theme sub's touches
    tally = {sid: len(s) for sid, s in owned.items()}
    for touches in (e.get('theme_subs') or {}).values():
        for sid in touches or []:
            tally[sid] = tally.get(sid, 0) + 1
    total = sum(tally.values()) or 1
    hot = {sid: f'{n}/{total} = {n/total:.0%}' for sid, n in tally.items()
           if n / total > share}
    if hot:
        return fail(f'{hot} -- no situation may be more than {share:.0%} of a unit\'s '
                    f'attributions, counting the theme sub-sections that draw on it')
    big = max(tally.items(), key=lambda kv: kv[1])
    biggest = max(owned.items(), key=lambda kv: len(kv[1]))
    return ok(f'largest situation owns {len(biggest[1])} of {len(u.subs)} sub-sections '
              f'(cap {cap}); busiest is {big[0]} at {big[1]}/{total} attributions '
              f'= {big[1]/total:.0%} (cap {share:.0%})')


# --------------------------------------------------------------------------- M04
@check('M04', 'situations.law.min_settings / max_setting_subs',
       'A unit stands in at least min_settings distinct places, and no one place '
       'carries more than max_setting_subs sub-sections')
def m04(u, ctx):
    e, why = _unit_entry(ctx, u)
    if e is None:
        return ok(why) if 'B1-forward' in why else fail(why)
    if not e.get('built'):
        return ok(f'unit {u.num} not built')
    need = _law(ctx, 'min_settings') or 0
    cap = _law(ctx, 'max_setting_subs') or 99
    byset: dict[str, int] = {}
    missing = []
    for s in e.get('strands') or []:
        st = _norm(s.get('setting'))
        if not st:
            missing.append(s['id']); continue
        byset[st] = byset.get(st, 0) + len(s.get('subs') or [])
    if missing:
        return fail(f'strand(s) with no declared setting: {missing}')
    over = {k: v for k, v in byset.items() if v > cap}
    if over:
        return fail(f'one place carrying too much of the unit: {over} (cap {cap})')
    if len(byset) < need:
        return fail(f'{len(byset)} distinct settings; the law is {need}. '
                    f'Settings seen: {sorted(byset)[:6]}')
    return ok(f'{len(byset)} distinct settings, the busiest carrying '
              f'{max(byset.values())} sub-sections (cap {cap})')


# --------------------------------------------------------------------------- M05
@check('M05', 'situations.units.<n>.theme_subs',
       'A theme-level sub-section draws on at least min_touches named strands, '
       'and each one is actually present in its text')
def m05(u, ctx):
    e, why = _unit_entry(ctx, u)
    if e is None:
        return ok(why) if 'B1-forward' in why else fail(why)
    if not e.get('built'):
        return ok(f'unit {u.num} not built')
    need = _law(ctx, 'min_touches') or 0
    probes = {s['id']: [p.lower() for p in (s.get('probes') or [])]
              for s in e.get('strands') or []}
    bysub = {_norm(s.heading): s for s in u.subs}
    thin, unknown, absent = [], [], []
    for h, touches in (e.get('theme_subs') or {}).items():
        h = _norm(h)
        touches = list(touches or [])
        if len(touches) < need:
            thin.append(f'{h!r} names {len(touches)}')
        sub = bysub.get(h)
        if sub is None:
            continue                      # M01 reports the ghost heading
        txt = sub.text.lower()
        for sid in touches:
            if sid not in probes:
                unknown.append(f'{h!r} -> {sid}'); continue
            if not any(_has(p, txt) for p in probes[sid]):
                absent.append(f'{h!r} claims {sid} but none of {probes[sid]} is in it')
    bad = []
    if thin:    bad.append(f'{len(thin)} theme sub(s) drawing on fewer than {need} strands: {thin[:3]}')
    if unknown: bad.append(f'{len(unknown)} touch(es) naming no declared strand: {unknown[:3]}')
    if absent:  bad.append(f'{len(absent)} claimed but not on the page: {absent[:3]}')
    if bad:
        return fail('; '.join(bad))
    n = len(e.get('theme_subs') or {})
    return ok(f'{n} theme sub-sections, each drawing on {need}+ strands that are in its text')


# --------------------------------------------------------------------------- M06
@check('M06', 'situations.units.<n>.strands[].obvious_out / why_not',
       'Every situation names the objection a reader will raise, and answers it')
def m06(u, ctx):
    e, why = _unit_entry(ctx, u)
    if e is None:
        return ok(why) if 'B1-forward' in why else fail(why)
    if not e.get('built'):
        return ok(f'unit {u.num} not built')
    minw = _law(ctx, 'min_why_not_words') or 0
    bad = []
    for s in e.get('strands') or []:
        for f in ('premise', 'setting', 'obvious_out', 'why_not'):
            if not _norm(s.get(f)):
                bad.append(f'{s["id"]}.{f} is empty')
        w = len(_norm(s.get('why_not')).split())
        if _norm(s.get('why_not')) and w < minw:
            bad.append(f'{s["id"]}.why_not is {w} words; {minw} is the floor')
        if not (s.get('probes') or []):
            bad.append(f'{s["id"]}.probes is empty, so M05 and M07 cannot find it on the page')
    if bad:
        return fail(f'{len(bad)} realism declaration(s) missing or too thin: {bad[:4]}')
    n = len(e.get('strands') or [])
    return ok(f'{n} situations, each naming the objection a reader will raise and '
              f'answering it in {minw}+ words')


# --------------------------------------------------------------------------- M07
@check('M07', 'situations -- the answer must reach the page',
       'Each situation is present in the unit\'s own text, by its own probe words')
def m07(u, ctx):
    e, why = _unit_entry(ctx, u)
    if e is None:
        return ok(why) if 'B1-forward' in why else fail(why)
    if not e.get('built'):
        return ok(f'unit {u.num} not built')
    txt = u.text.lower()
    bysub = {_norm(s.heading): s for s in u.subs}
    ghost, unsupported = [], []
    for s in e.get('strands') or []:
        probes = [p.lower() for p in (s.get('probes') or [])]
        if probes and not any(_has(p, txt) for p in probes):
            ghost.append(s['id'])
        # the strand's own sub-sections must carry it, not just some other part
        for h in s.get('subs') or []:
            sub = bysub.get(_norm(h))
            if sub is None:
                continue
            if probes and not any(_has(p, sub.text) for p in probes):
                unsupported.append(f'{s["id"]} owns {_norm(h)!r}, which contains none of {probes}')
    bad = []
    if ghost:       bad.append(f'{len(ghost)} situation(s) declared but nowhere in the unit: {ghost}')
    if unsupported: bad.append(f'{len(unsupported)} sub-section(s) attributed to a situation '
                               f'they do not mention: {unsupported[:3]}')
    if bad:
        return fail('; '.join(bad))
    return ok(f'all {len(e.get("strands") or [])} situations findable in the unit\'s '
              f'own text, in the sub-sections that claim them')


# --------------------------------------------------------------------------- M08
@check('M08', 'situations.banned_premises',
       'The unit asserts no premise on the blocklist')
def m08(u, ctx):
    d = _ledger(ctx)
    if d is None:
        return ok('this level has no ledgers/situations.yaml; the content law is B1-forward (plan 4c)')
    hits = []
    for b in d.get('banned_premises') or []:
        m = re.search(b['pattern'], u.text)
        if m:
            frag = re.sub(r'\s+', ' ', m.group(0))[:90]
            hits.append(f'{b["id"]}: ...{frag}...')
    if hits:
        return fail(f'{len(hits)} banned premise(s): {hits}. Each is a thing an adult '
                    f'reader knows to be false; see ledgers/situations.yaml for why.')
    return ok(f'none of the {len(d.get("banned_premises") or [])} blocklisted premises')


# --------------------------------------------------------------------------- M09
@check('M09', 'situations.law.max_person_strand_share',
       'No one person is in more than max_person_strand_share of a unit\'s situations')
def m09(u, ctx):
    e, why = _unit_entry(ctx, u)
    if e is None:
        return ok(why) if 'B1-forward' in why else fail(why)
    if not e.get('built'):
        return ok(f'unit {u.num} not built')
    cap = _law(ctx, 'max_person_strand_share') or 1.0
    strands = e.get('strands') or []
    n = len(strands) or 1
    tally: dict[str, int] = {}
    for s in strands:
        for p in s.get('people') or []:
            tally[p] = tally.get(p, 0) + 1
    hot = {p: f'{c}/{n}' for p, c in tally.items() if c / n > cap}
    if hot:
        return fail(f'{hot} -- above {cap:.0%} of this unit\'s situations. A unit in which '
                    f'one person is everywhere is one story, whatever the ledger calls it.')
    if not tally:
        return ok('no named people in this unit\'s situations')
    busiest = max(tally.items(), key=lambda kv: kv[1])
    return ok(f'{len(tally)} people across {n} situations; the busiest is '
              f'{busiest[0]} in {busiest[1]} of them (cap {cap:.0%})')


# --------------------------------------------------------------------------- M10
@check('M10', 'situations.calibration',
       'The occupancy law is calibrated: it rejects the unit it was written to reject',
       scope='book')
def m10(units, ctx):
    d = _ledger(ctx)
    if d is None:
        return ok('this level has no ledgers/situations.yaml; the content law is B1-forward (plan 4c)')
    cal = d.get('calibration') or {}
    p = os.path.join(ctx.root, cal.get('fixture', ''))
    if not cal or not os.path.isfile(p):
        return fail(f'no calibration fixture at {p!r}. A law with no rejected example is '
                    f'an assertion: keep the superseded unit and measure against it.')
    got = cal.get('measured') or {}
    law = d.get('law') or {}
    verdicts = {
        'M02': got.get('distinct_strands', 0) < law.get('min_strands', 0),
        'M03': got.get('largest_strand_subs', 0) > law.get('max_strand_subs', 99),
        'M04': got.get('distinct_settings', 0) < law.get('min_settings', 0),
    }
    # and the fixture must still be on disk and still be the thing described
    try:
        fx = M.parse(p)
    except Exception as ex:
        return fail(f'the calibration fixture will not parse: {ex}')
    if len(fx.subs) < 40:
        return fail(f'the calibration fixture has {len(fx.subs)} sub-sections, so it is not '
                    f'the shipped unit it claims to be')
    clears = [k for k, v in verdicts.items() if not v]
    if clears:
        return fail(f'the superseded unit would CLEAR {clears} on the numbers recorded in '
                    f'`calibration.measured` ({got}), so those are not limits. Lower them '
                    f'until they bite, or correct the measurement.')
    return ok(f'the law rejects the superseded unit on {sorted(verdicts)} '
              f'(it ran {got.get("largest_strand_subs")} of its {len(fx.subs)} sub-sections '
              f'on one situation)')
