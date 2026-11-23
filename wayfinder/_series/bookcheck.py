#!/usr/bin/env python3
"""Book-level checks: the gates that can be run from the authored text alone.

gates.py checks one unit against its META spine. This runs across a whole book
and reports the gates that need nothing but the markdown and the figure folder.
Gates needing META (band, key coverage, descriptors) are reported SKIP, loudly.

Run: python3 bookcheck.py <book-dir> [...]   e.g. ../level2
"""
import sys, os, re, glob, json, struct

HERE = os.path.dirname(os.path.abspath(__file__))
V = json.load(open(os.path.join(HERE, "VARIANTS.json"), encoding="utf-8"))
VARIANT_TOKENS = [t["variant"] for t in V["tokens"] if t["class"] == "spelling"]

FORBIDDEN = [
    r"\bsocial security\b", r"\bW-?[24]\b", r"\b911\b", r"\bDMV\b", r"\bIRS\b",
    r"\bzip code\b", r"\bgreen card\b", r"\bMedicaid\b", r"\bMedicare\b",
    r"\bWalmart\b", r"\bStarbucks\b", r"\bMcDonald", r"\bAmazon\b", r"\bGoogle\b",
    r"\biPhone\b", r"\bWhatsApp\b", r"\bFacebook\b", r"\bTikTok\b", r"\bInstagram\b",
    r"\boxford picture dictionary\b", r"\bOPD\b", r"\bstep forward\b",
    r"\bCASAS\b", r"\bCCRS\b", r"\bELPS\b", r"\bNRS\b", r"[$£€¥]",
]
# A British token in an American-base book, outside a deliberate variant note.
BRITISH = [
    r"\bcolour", r"\bflavour", r"\bneighbour", r"\blabour", r"\bbehaviour", r"\bfavour",
    r"\bcentre\b", r"\btheatre\b", r"\blitre(s)?\b", r"\bmetre\b", r"\borganis(e|es|ed|ing|ation|er|ers)\b", r"\brealis(e|es|ed|ing|ation)\b",
    r"\brecognis", r"\bapologis", r"\bpractise\b", r"\blicence\b", r"\bdefence\b",
    r"\boffence\b", r"\btravell(ed|ing|er|ers)\b", r"\bcancell(ed|ing)\b", r"\bprogramme\b", r"\benrol\b",
    r"\bskilful\b", r"\bgrey\b", r"\bcheque\b", r"\bkerb\b", r"\btyre\b", r"\bplough\b",
    r"\bdraught\b", r"\bmaths\b", r"\bwhilst\b", r"\bamongst\b", r"\blearnt\b",
    r"\bspelt\b", r"\bburnt\b", r"\bdreamt\b", r"\baluminium\b", r"\bjewellery\b",
    r"\bstorey\b",
]
SPEAK = [r"\bwith a partner\b", r"\bwith your partner\b", r"\bask and answer\b",
         r"\bin pairs\b", r"\bin threes\b", r"\bin your group\b", r"\bwith your group\b",
         r"\btell your\b", r"\btell the class\b", r"\btell somebody\b", r"\btell each other\b",
         r"\bsay (?:the|it|them|these|your|each)\b", r"\bsay what\b", r"\bsay why\b",
         r"\bdiscuss\b", r"\btake turns\b", r"\baloud\b", r"\brepeat\b",
         r"\bpractice (?:the|it|this|them|saying)\b", r"\bask (?:three|four|five|two|your|a|the|each)\b",
         r"\breport back\b", r"\brole-?play\b", r"\bcompare (?:with|your)\b",
         r"\bexplain to\b", r"\btalk about\b", r"\bshare (?:your|it|one)\b",
         r"\bread (?:it|them|the \w+) (?:aloud|out)\b", r"\bagree (?:on|with)\b",
         r"\bask somebody\b", r"\bask a partner\b", r"\binterview\b", r"\bpresent\b",
         # Team Up & Review speaks in its own idiom; these are its oral instructions.
         r"\bin your team\b", r"\bto another team\b", r"\bwith another team\b",
         r"\bread your \w+ to\b", r"\bPresenter\b", r"\byour team, answer\b",
         r"\beverybody says\b", r"\bthey say one\b"]
OPEN = [r"\bwhat do you think\b", r"\bwould you\b", r"\bdo you agree\b", r"\bwhy\b",
        r"\bin your country\b", r"\bhave you ever\b", r"\bwhat would\b",
        r"\bwhich .*would you\b", r"\bwhat happens\b", r"\bis it fair\b",
        r"\bshould\b", r"\bwhat did you\b", r"\bhow do you\b", r"\bwhat is the\b.*\?",
        r"\bdo you think\b", r"\bwhat else\b", r"\bwhat would you do\b"]


SPEC_MODULES = {"starter": ["spec_a", "spec_b", "spec_c"],
                "level1":  ["spec_v1", "spec_v2", "spec_v3"],
                "level2":  ["spec_w1", "spec_w2", "spec_w3"],
                "level4":  ["spec_y1", "spec_y2", "spec_y3", "spec_y4"],
                "level3":  ["spec_x1", "spec_x2", "spec_x3", "spec_x4"]}

def load_specs(book):
    """The realia text of every figure, as raw HTML, keyed by figure id."""
    mods = SPEC_MODULES.get(book)
    if not mods: return {}
    sys.path.insert(0, os.path.join(HERE, "..", "_build"))
    out = {}
    try:
        for mn in mods:
            m = __import__(mn)
            for k, fn in m.S.items():
                try:
                    svg = fn()[0]
                except Exception:
                    continue
                if "<div" in svg or "<p" in svg: out[k] = svg
    except Exception as e:
        print("  (figure specs not loadable: %s)" % e)
    return out

def html_text(h):
    h = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", h, flags=re.S)
    h = re.sub(r"<br\s*/?>", " ", h)
    h = re.sub(r"<[^>]+>", " ", h)
    h = (h.replace("&mdash;", "—").replace("&middot;", "·").replace("&nbsp;", " ")
          .replace("&amp;", "&").replace("&ldquo;", '"').replace("&rdquo;", '"')
          .replace("&#10003;", " "))
    return re.sub(r"\s+", " ", h).strip()


def prose_only(h):
    """Running prose from a realia document: paragraphs of real sentences. A table
    row, a bullet or a line of fields is not prose, and Flesch-Kincaid scores it as
    nonsense, so none of it is counted."""
    out = []
    for m in re.finditer(r"<p[^>]*>(.*?)</p>", h, re.S):
        t = html_text(m.group(1))
        if "·" in t or t.startswith(("&bull;", "•")): continue
        if re.match(r"^(Reader's Tip|Tip)\b", t): continue
        sents = [x for x in re.split(r"(?<=[.!?])\s+", t) if x.rstrip().endswith((".", "!", "?"))]
        if len(sents) >= 2 and len(t.split()) >= 20: out.append(" ".join(sents))
    return " ".join(out)

def syll(w):
    w = re.sub(r"[^a-z]", "", w.lower())
    if not w: return 0
    n = len(re.findall(r"[aeiouy]+", w))
    if w.endswith("e") and n > 1 and not w.endswith(("le","ee","ye")): n -= 1
    return max(1, n)

def fk(text):
    sents = [s for s in re.split(r"[.!?]+", text) if s.strip()]
    words = re.findall(r"[A-Za-z']+", text)
    if not sents or not words: return None
    return 0.39*(len(words)/len(sents)) + 11.8*(sum(syll(w) for w in words)/len(words)) - 15.59

READ_TARGET = {"starter": (0.0,3.5), "level1": (2.5,4.5), "level2": (3.0,5.0),
               "level3": (4.5,7.5), "level4": (6.5,9.5), "level5": (8.5,11.5)}

def strip_markup(s):
    s = re.sub(r"%%FIG[^%]*%%", " ", s)
    s = re.sub(r"%%AUD[^%]*%%", " ", s)
    s = re.sub(r"<sub>.*?</sub>", " ", s, flags=re.S)
    s = re.sub(r"[*_`>|#]", " ", s)
    return s

def check(book):
    name = os.path.basename(book.rstrip("/"))
    tdir = os.path.join(book, "text")
    fdir = os.path.join(book, "figures")
    units = sorted(glob.glob(os.path.join(tdir, "u*.md")))
    allmd = {os.path.basename(f): open(f, encoding="utf-8").read() for f in
             sorted(glob.glob(os.path.join(tdir, "*.md")))}
    whole = "\n".join(allmd.values())
    rows = []
    def add(n, title, ok, detail): rows.append((n, title, ok, detail))

    # 8 forbidden content. Audio cue ids (W3-04-11) are this project's own and must
    # not be read as the US tax form W-2, so they come out first.
    prose = re.sub(r"%%AUD[^%]*%%", " ", whole)
    prose = re.sub(r"`[^`]*`", " ", prose)          # the series own cue format, not a tax form
    hits = []
    for pat in FORBIDDEN:
        for m in re.finditer(pat, prose, re.I):
            hits.append(m.group(0))
    add(8, "Forbidden content", "PASS" if not hits else "FAIL",
        "none of the US-specific, branded, framework or currency-symbol tokens appear"
        if not hits else "%d hits: %s" % (len(hits), sorted(set(hits))[:6]))

    # 14 variant layer: the base edition must be clean of variant spellings
    bh = []
    for pat in BRITISH:
        for m in re.finditer(pat, whole, re.I):
            bh.append(m.group(0))
    add(14, "Variant base purity", "PASS" if not bh else "FAIL",
        "American base clean; %d switchable tokens defined in VARIANTS.json" % len(VARIANT_TOKENS)
        if not bh else "%d British spellings in the base: %s" % (len(bh), sorted(set(bh))[:8]))

    # 13 speaking spine
    bad_lessons, silent = [], []
    for fn, s in sorted(allmd.items()):
        if not re.match(r"u\d\d\.md", fn): continue
        lessons = re.split(r"\n## ", s)[1:]
        for L in lessons:
            title = L.split("\n")[0].strip()
            body = strip_markup(L)
            n = sum(len(re.findall(p, body, re.I)) for p in SPEAK)
            o = sum(len(re.findall(p, body, re.I)) for p in OPEN)
            if n < 3 or o < 1:
                bad_lessons.append("%s %s (%d oral, %d open)" % (fn[:3], title[:18], n, o))
            # opener: the first numbered task of the lesson
            first = re.search(r"\*\*1A\b(.*?)(?=\*\*2[A-Z]\b|\n### |\Z)", L, re.S)
            if first and not any(re.search(p, strip_markup(first.group(1)), re.I) for p in SPEAK):
                silent.append("%s %s" % (fn[:3], title[:18]))
    add(13, "Speaking spine", "PASS" if not bad_lessons and not silent else "FAIL",
        "every lesson carries >=3 oral slots and >=1 open question; no silent openers"
        if not bad_lessons and not silent else
        "thin: %s | silent openers: %s" % (bad_lessons[:4], silent[:4]))

    # 2 readability of the Lesson 2 reading text. In most units that text is set as
    # realia -- it is a leaflet, a notice, a contract -- so it lives in the figure
    # spec, not the markdown. Measure it there, and fall back to the blockquote.
    # SERIES-PLAN §4.2‡ : a Real-life Reading text is an authentic document. It carries
    # the band ceiling + 2.5 and no floor; what protects the learner is the task type,
    # which is a human read (Gate 9), not a lower score.
    lo, hi = READ_TARGET.get(name, (0, 99))
    lo, hi = 0.0, hi + 2.5
    grades, off, unscored = [], [], []
    specs = load_specs(name)
    for fn, s in sorted(allmd.items()):
        if not re.match(r"u\d\d\.md", fn): continue
        m = re.search(r"\n## Lesson 2[^\n]*\n(.*?)(?=\n## |\Z)", s, re.S)
        if not m: continue                     # Starting Point carries no reading lesson
        # The reading text is a document: headings, bullets and table rows sit beside
        # running prose. Flesch-Kincaid means nothing on a bullet, so only complete
        # sentences are measured, and the report says so.
        art = ""
        fid = re.search(r"%%FIG (\S+-f5) ", m.group(1))
        if fid and fid.group(1) in specs:
            art = prose_only(specs[fid.group(1)])
        if len(art.split()) < 50:
            # Fallback to the blockquote, minus the things that are not the text:
            # the strategy tip addressed to the reader, table rows, and list items.
            lines = []
            for l in m.group(1).splitlines():
                if not l.startswith("> "):
                    lines.append("")          # a non-quoted line ends the paragraph
                    continue
                body = l[2:].strip()
                if "|" in body or body.startswith(("- ", "* ", "**Reader", "**Tip")): continue
                if re.match(r"^\*\*[A-Z][^*]{0,30}\*\*\s*(—|-)", body): continue
                lines.append(body)
            # Same rule as the realia path: only paragraphs that are really prose.
            paras, cur = [], []
            for l in lines:
                if l.strip(): cur.append(l)
                elif cur: paras.append(" ".join(cur)); cur = []
            if cur: paras.append(" ".join(cur))
            keep = []
            for t in (strip_markup(x) for x in paras):
                sents = [y for y in re.split(r"(?<=[.!?])\s+", t)
                         if y.rstrip().endswith((".", "!", "?")) and len(y.split()) > 4]
                if len(sents) >= 2 and len(t.split()) >= 20: keep.append(" ".join(sents))
            art = " ".join(keep)
        if len(art.split()) < 50:
            unscored.append(fn[:3]); continue
        g = fk(art)
        if g is None: continue
        grades.append(g)
        if not (lo <= g <= hi): off.append("%s %.1f" % (fn[:3], g))
    if not grades:
        add(2, "Readability", "SKIP",
            "nothing scored: all %d reading texts are forms, tables or adverts with no running "
            "prose, so Flesch-Kincaid does not apply -- a human read is the only check" % len(unscored))
    else:
     add(2, "Readability", "PASS" if not off else "FAIL",
        ("%d of %d reading texts scored, FK %.1f-%.1f (document ceiling %.1f); %d are forms, "
         "tables or adverts with no running prose, so FK does not apply: %s"
         % (len(grades), len(grades)+len(unscored), min(grades), max(grades), hi,
            len(unscored), unscored)) if grades and not off
        else "outside band: %s" % off)

    # figures: every id referenced exists and is a real PNG; none orphaned
    refs = re.findall(r"%%FIG (\S+)", whole)
    have = {os.path.basename(p)[:-4] for p in glob.glob(os.path.join(fdir, "*.png"))}
    missing = sorted(set(refs) - have); orphan = sorted(have - set(refs))
    tiny = []
    for p in glob.glob(os.path.join(fdir, "*.png")):
        d = open(p, "rb").read(32)
        w, h = struct.unpack(">II", d[16:24])
        if h < 60 or os.path.getsize(p) < 4000: tiny.append(os.path.basename(p))
    add("F", "Figures", "PASS" if not (missing or orphan or tiny) else "FAIL",
        "%d referenced, %d rendered, all present and sized"
        % (len(refs), len(have)) if not (missing or orphan or tiny)
        else "missing %s orphan %s tiny %s" % (missing[:4], orphan[:4], tiny[:4]))

    # alt text: every figure carries one
    noalt = [m for m in re.findall(r"%%FIG (\S+)([^%]*)%%", whole) if "|" not in m[1]]
    add("A", "Alt text", "PASS" if not noalt else "FAIL",
        "every figure carries alt text" if not noalt else "missing: %s" % [m[0] for m in noalt][:5])

    # audio cue integrity (ids only -- audio itself is produced off-platform)
    cues = re.findall(r"%%AUD (\S+)%%", whole)
    badf = [c for c in cues if not re.match(r"^W\d-\d\d-\d\d$", c)]
    dup = sorted({c for c in cues if cues.count(c) > 1})
    add("C", "Audio cue ids", "PASS" if not (badf or dup) else "FAIL",
        "%d cues, all well-formed and unique" % len(cues) if not (badf or dup)
        else "malformed %s duplicate %s" % (badf[:4], dup[:4]))

    # gates that need the META spine
    for n, t in [(1,"Band check"), (4,"Key coverage"), (6,"CEFR descriptors"),
                 (5,"Audio completeness"), (3,"Recycling links"),
                 (7,"Clean-room n-gram"), (9,"Answer sanity")]:
        add(n, t, "SKIP", "needs the per-unit META spine / a human read -- not run here")

    print("\n=== %s ===" % name)
    worst = "PASS"
    for n, t, st, d in sorted(rows, key=lambda r: str(r[0])):
        print("  [%-4s] %2s. %-24s %s" % (st, n, t, d))
        if st == "FAIL": worst = "FAIL"
        elif st == "SKIP" and worst == "PASS": worst = "SKIP"
    print("  -> %s" % worst)
    return worst

if __name__ == "__main__":
    res = [check(d) for d in (sys.argv[1:] or ["."])]
    print()
    print("ALL CHECKED GATES PASS (some SKIPPED -- see above)" if "FAIL" not in res
          else "FAILURES PRESENT")
    sys.exit(1 if "FAIL" in res else 0)
