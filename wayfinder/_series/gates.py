#!/usr/bin/env python3
"""Wayfinder quality gates. Run: python3 gates.py <unit-dir> [...]

Reads each unit's META_*.json (the machine-readable spine) plus its text files and
reports PASS / FAIL / SKIP per gate. SKIP is reported honestly and loudly: a gate
that cannot run is not a gate that passed.
"""
import json, sys, os, re, glob

BANDS = {"starter": ["A1"], "l1": ["A1", "A2"], "l2": ["A2"],
         "l3": ["B1"], "l4": ["B1", "B2"], "l5": ["B2"]}

# Gate 8: things that must never appear in either edition.
US_ONLY = [
    r"\bsocial security\b", r"\bW-?[24]\b", r"\b911\b", r"\bDMV\b", r"\bIRS\b",
    r"\bzip code\b", r"\bgreen card\b", r"\bMedicaid\b", r"\bMedicare\b",
    r"\bWalmart\b", r"\bStarbucks\b", r"\bMcDonald", r"\bAmazon\b", r"\bGoogle\b",
    r"\biPhone\b", r"\bWhatsApp\b", r"\bFacebook\b",
    r"\boxford picture dictionary\b", r"\bOPD\b",
    r"\bstep forward\b",
    r"\bCASAS\b", r"\bCCRS\b", r"\bELPS\b", r"\bNRS\b",
    r"[$£€¥]",
]
READ_TARGET = {"starter": (0.0, 3.5), "l1": (2.5, 4.5), "l2": (3.0, 5.0),
               "l3": (4.5, 7.5), "l4": (6.5, 9.5), "l5": (8.5, 11.5)}

def syllables(w):
    w = w.lower(); w = re.sub(r"[^a-z]", "", w)
    if not w: return 0
    groups = re.findall(r"[aeiouy]+", w)
    n = len(groups)
    if w.endswith("e") and n > 1 and not w.endswith(("le", "ee", "ye")): n -= 1
    return max(1, n)

def fk_grade(text):
    sents = [s for s in re.split(r"[.!?]+", text) if s.strip()]
    words = re.findall(r"[A-Za-z']+", text)
    if not sents or not words: return None
    sy = sum(syllables(w) for w in words)
    return 0.39 * (len(words) / len(sents)) + 11.8 * (sy / len(words)) - 15.59

class Report:
    def __init__(s): s.rows = []
    def add(s, g, name, status, detail=""): s.rows.append((g, name, status, detail))
    def show(s, unit):
        print(f"\n=== {unit} ===")
        worst = "PASS"
        for g, name, st, d in s.rows:
            print(f"  [{st:4}] {g:>2}. {name:<26} {d}")
            if st == "FAIL": worst = "FAIL"
            elif st == "SKIP" and worst != "FAIL": worst = "SKIP"
        print(f"  -> {worst}")
        return worst

def check(unit_dir):
    r = Report()
    metas = glob.glob(os.path.join(unit_dir, "META_*.json"))
    if not metas:
        print(f"\n=== {unit_dir} ===\n  no META_*.json -- cannot check"); return "FAIL"
    M = json.load(open(metas[0], encoding="utf-8"))
    level = M["level"]
    slots = [s for L in M["lessons"] for s in L["slots"]]
    alltext = ""
    for f in glob.glob(os.path.join(unit_dir, "*.md")):
        alltext += open(f, encoding="utf-8").read() + "\n"

    # 1 band
    bad = [v["w"] for v in M.get("vocab", []) if v["band"] not in BANDS[level] + ["A1", "A2"][:0] + BANDS[level]]
    allowed = set(BANDS[level]) | {"A1"} if level != "starter" else {"A1"}
    if level == "starter": allowed = {"A1"}
    elif level == "l1": allowed = {"A1", "A2"}
    elif level == "l2": allowed = {"A1", "A2"}
    elif level == "l3": allowed = {"A2", "B1"}
    elif level == "l4": allowed = {"B1", "B2"}
    else: allowed = {"B1", "B2", "C1"}
    off = [v["w"] for v in M.get("vocab", []) if v["band"] not in allowed]
    r.add(1, "Band check", "FAIL" if off else "PASS",
          f"{len(off)} out of band: {off[:5]}" if off else f"{len(M.get('vocab',[]))} items, all in {sorted(allowed)}")

    # 2 readability (article only)
    art = M.get("texts", {}).get("article")
    if art:
        g = fk_grade(art)
        lo, hi = READ_TARGET[level]
        r.add(2, "Readability", "PASS" if lo <= g <= hi else "FAIL", f"FK {g:.1f} (target {lo}-{hi})")
    else:
        r.add(2, "Readability", "SKIP", "no article text in META")

    # 3 recycling
    rec = M.get("recycling", {})
    r.add(3, "Recycling links", "PASS" if rec.get("forward_refs") else "SKIP",
          f"{len(rec.get('forward_refs',[]))} forward refs declared" if rec.get("forward_refs")
          else "later units not authored yet -- re-run at book close")

    # 4 key coverage
    # A slot needs a key only if it has markable items. Repetition drills (listen and
    # repeat, model playback, point-at-it pair games) and learner-generated tasks have
    # nothing to mark, and must be tagged rather than given a fictional key.
    closed = [s for s in slots if s.get("items", 0)
              and not s.get("open", False) and not s.get("drill", False)]
    nokey = [s["id"] for s in closed if not s.get("key")]
    r.add(4, "Key coverage", "FAIL" if nokey else "PASS",
          f"missing: {nokey}" if nokey else f"{len(closed)}/{len(closed)} closed slots keyed")

    # 5 audio completeness
    aud = [s for s in slots if s.get("audio")]
    noscript = [s["id"] for s in aud if not s.get("script_ref")]
    ntr = len({s["audio"] for s in aud})
    ok = (not noscript) and 15 <= ntr <= 22
    r.add(5, "Audio completeness", "PASS" if ok else "FAIL",
          f"{ntr} tracks" + (f", missing scripts: {noscript}" if noscript else "")
          + ("" if 15 <= ntr <= 22 else " -- outside 15-22"))

    # 6 descriptors (human read, but presence is machinable)
    nod = [L["id"] for L in M["lessons"] if not L.get("can_do")]
    r.add(6, "CEFR descriptors", "FAIL" if nod else "PASS",
          f"missing: {nod}" if nod else "every lesson carries can-do")

    # 7 clean room
    r.add(7, "Clean-room n-gram", "SKIP", "no Step Forward corpus held by the project -- nothing to diff against")

    # 8 internationalization
    hits = sorted({m.group(0) for p in US_ONLY for m in re.finditer(p, alltext, re.I)})
    r.add(8, "Internationalization", "FAIL" if hits else "PASS",
          f"found: {hits}" if hits else "clean")

    # 9 word counts
    B = M["budgets"]; probs = []
    for k, t in M.get("texts", {}).items():
        if k in B:
            n = len(re.findall(r"[A-Za-z'\-]+", t)); lo, hi = B[k]
            if not lo <= n <= hi: probs.append(f"{k}={n} (want {lo}-{hi})")
    r.add(9, "Word counts", "FAIL" if probs else "PASS", "; ".join(probs) or "all texts in budget")

    # 10 art completeness
    artf = os.path.join(unit_dir, f"ART_{M['unit_id']}.csv")
    if os.path.exists(artf):
        rows = [l for l in open(artf, encoding="utf-8").read().splitlines()[1:] if l.strip()]
        ids = {l.split(",")[0] for l in rows}
        need = {s["art"] for s in slots if s.get("art")}
        miss = need - ids
        noalt = [l.split(",")[0] for l in rows if l.count(",") < 9 or not l.rsplit(",", 1)[-1].strip()]
        bad = bool(miss or noalt)
        r.add(10, "Art completeness", "FAIL" if bad else "PASS",
              (f"unmanifested: {sorted(miss)} " if miss else "") + (f"no alt text: {noalt[:4]}" if noalt else "")
              or f"{len(ids)} assets, all referenced, all with alt text")
    else:
        r.add(10, "Art completeness", "FAIL", "no ART csv")

    # 11 answer sanity -> human
    r.add(11, "Answer sanity", "SKIP", "human read required")

    # 12 sources
    srcs = M.get("sources", [])
    if not srcs:
        r.add(12, "Source check", "PASS", "no external factual claims at this level (authored realia only)")
    else:
        unver = [s["url"] for s in srcs if not s.get("verified")]
        r.add(12, "Source check", "FAIL" if unver else "PASS",
              f"unverified: {unver}" if unver else f"{len(srcs)} sources verified")

    # 13 speaking floor
    probs = []
    for L in M["lessons"]:
        oral = [s for s in L["slots"] if s.get("oral")]
        openq = [s for s in oral if s.get("open")]
        if len(oral) < 3: probs.append(f"{L['id']}: {len(oral)} oral")
        if not openq: probs.append(f"{L['id']}: no open-ended")
        if L["slots"] and not (L["slots"][0].get("oral") or L["slots"][0].get("oral_step")):
            probs.append(f"{L['id']}: silent opener")
    r.add(13, "Speaking floor", "FAIL" if probs else "PASS",
          "; ".join(probs) or f"all {len(M['lessons'])} lessons >=3 oral, >=1 open, none silent")

    # 14 variant integrity
    vf = os.path.join(unit_dir, f"VARIANTS_{M['unit_id']}.json")
    if os.path.exists(vf):
        V = json.load(open(vf, encoding="utf-8"))
        broken = [t["id"] for t in V["tokens"] if not t.get("base") or not t.get("variant")]
        divk = [t["id"] for t in V["tokens"] if t.get("affects_key") and not t.get("variant_is_content")]
        r.add(14, "Variant integrity", "FAIL" if (broken or divk) else "PASS",
              (f"unresolved: {broken} " if broken else "") + (f"key diverges unflagged: {divk}" if divk else "")
              or f"{len(V['tokens'])} tokens resolve in both editions")
    else:
        r.add(14, "Variant integrity", "FAIL", "no unit VARIANTS json")

    return r.show(M["unit_id"])

if __name__ == "__main__":
    dirs = sys.argv[1:] or ["."]
    res = [check(d) for d in dirs]
    print()
    print("ALL UNITS PASS" if all(x == "PASS" for x in res)
          else "SOME GATES SKIPPED (see above)" if "FAIL" not in res else "FAILURES PRESENT")
    sys.exit(1 if "FAIL" in res else 0)
