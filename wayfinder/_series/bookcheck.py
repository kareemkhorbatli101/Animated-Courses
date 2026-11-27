#!/usr/bin/env python3
"""Book-level checks: the gates that can be run from the authored text alone.

gates.py checks one unit against its META spine. This runs across a whole book
and reports the gates that need nothing but the markdown and the figure folder.
Gates needing META (band, key coverage, descriptors) are reported SKIP, loudly.

Run: python3 bookcheck.py <book-dir> [...]   e.g. ../level2
"""
import sys, os, re, glob, json, struct, io

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
    # Doubled consonant before a suffix: British doubles after an unstressed vowel.
    r"\blabell(ed|ing|er|ers)\b", r"\bmodell(ed|ing)\b", r"\bsignall(ed|ing)\b",
    r"\blevell(ed|ing)\b", r"\bfuell(ed|ing)\b", r"\bcounsell(or|ors|ed|ing)\b",
    r"\bmarvellous\b", r"\btotall(ed|ing)\b", r"\bequall(ed|ing)\b",
    # -ment, -ence and single-l word endings.
    r"\bjudgement\b", r"\backnowledgement\b", r"\binstalment\b", r"\bfulfil\b",
    r"\bfulfilment\b", r"\benrolment\b", r"\bspeciality\b",
    # -re, -ph, -ae and other spellings.
    r"\b(kilo|centi|milli)metre(s)?\b", r"\bfibre(s)?\b", r"\bsulphur",
    r"\bartefact", r"\bsceptic", r"\bcatalogue(s|d)?\b", r"\bmanoeuvr",
    r"\bmoustache\b", r"\bpyjamas\b", r"\banalys(e|ed|ing)\b",
    r"\bpractis(ed|ing)\b", r"\benquir(e|es|ed|ing|y|ies)\b", r"\bdespatch",
    # Two words in British English, one in American.
    r"\bper cent\b",
    # Lexis, not spelling: an unambiguous pair where the American base has its own
    # word. The reverse direction lives in VARIANTS.json for the British edition.
    r"\blorr(y|ies)\b", r"\bspanner(s)?\b", r"\bcarriageway(s)?\b",
]
# American English really does end these words in -ise, so the general -ise rule
# below has to know them. Prefixes un-, re-, dis-, im-, non- are stripped first.
ISE_OK = {"advertise", "advise", "appraise", "apprise", "chastise", "chemise",
          "circumcise", "comprise", "compromise", "concise", "disguise",
          "enfranchise", "enterprise", "excise", "exercise", "expertise",
          "franchise", "improvise", "likewise", "clockwise", "anticlockwise",
          "merchandise", "mortise", "otherwise", "paradise", "porpoise",
          "precise", "premise", "promise", "raise", "praise", "sunrise",
          "supervise", "surmise", "surprise", "televise", "tortoise",
          "treatise", "turquoise", "despise"}
ISE_RE = r"\b[A-Za-z]{4,}is(?:e|es|ed|ing|ation|ations|ational)\b"
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


# Organization names, quoted as published. Exempt from gate 14; a citation that
# renames its source is a worse error than a British spelling.
PROPER_NOUNS = ["UN Environment Programme", "World Food Programme",
                "United Nations Environment Programme", "Labour Force Survey",
                "International Labour Organization", "International Labour Office",
                "Labour Organization",
                # The ILO publishes this indicator under this name. Renaming a cited
                # indicator is a worse error than a British spelling.
                "labour income share", "Labour income share",
                # ISO 21506:2018 defines "programme" with that spelling, and the
                # Throughline series uses it as the standard's defined term
                # throughout. "Program" is a different word in that vocabulary,
                # so Americanizing it would rename a defined term.
                "programme", "Programme", "programmes",
                # The OECD's own official English name carries this spelling.
                # Renaming a cited international organization is a worse error
                # than a British spelling, so the legal name is exempt. Flowline
                # Book 6 cites the 1997 anti-bribery convention adopted under it.
                "Organisation for Economic Co-operation and Development",
                "Organisation for Economic Co-operation",
                "International Organisation for Standardisation"]

SPEC_MODULES = {"starter": ["spec_a", "spec_b", "spec_c"],
                "level1":  ["spec_v1", "spec_v2", "spec_v3"],
                "level2":  ["spec_w1", "spec_w2", "spec_w3"],
                "level4":  ["spec_y1", "spec_y2", "spec_y3", "spec_y4"],
                "level3":  ["spec_x1", "spec_x2", "spec_x3", "spec_x4"],
                "level5":  ["spec_z1", "spec_z2", "spec_z3", "spec_z4"],
                # Clearline (business series) — its specs live in business/_build.
                # Both series number their directories level1..level6, so the key
                # carries the series when it is not Wayfinder.
                "business/level1": ["spec_o1", "spec_o2", "spec_o3", "spec_o4"],
                "business/level2": ["spec_p1", "spec_p2", "spec_p3", "spec_p4"],
                "business/level3": ["spec_q1", "spec_q2", "spec_q3", "spec_q4"],
                "business/level4": ["spec_r1", "spec_r2", "spec_r3", "spec_r4"],
                "business/level5": ["spec_s1", "spec_s2", "spec_s3", "spec_s4"],
                "business/level6": ["spec_t1", "spec_t2", "spec_t3", "spec_t4"],
                # Foreign Service English (diplomacy series) — specs in diplomacy/_build.
                "diplomacy/level1": ["spec_g1", "spec_g2", "spec_g3", "spec_g4"],
                "diplomacy/level2": ["spec_h1", "spec_h2", "spec_h3", "spec_h4"],
                "diplomacy/level3": ["spec_i1", "spec_i2", "spec_i3", "spec_i4"],
                "diplomacy/level4": ["spec_j1", "spec_j2", "spec_j3", "spec_j4"],
                "diplomacy/level5": ["spec_k1", "spec_k2", "spec_k3", "spec_k4"],
                "diplomacy/level6": ["spec_l1", "spec_l2", "spec_l3", "spec_l4"],
                # Keystone (architect series) — specs in architect/_build.
                # Plumbline (Academic English for IELTS) — specs in plumbline/_build.
                "plumbline/level1": ["spec_qa1", "spec_qa2", "spec_qa3", "spec_qa4"],
                "plumbline/level2": ["spec_qb1", "spec_qb2", "spec_qb3", "spec_qb4"],
                "plumbline/level3": ["spec_qc1", "spec_qc2", "spec_qc3", "spec_qc4"],
                "plumbline/level4": ["spec_qd1", "spec_qd2", "spec_qd3", "spec_qd4"],
                "plumbline/level5": ["spec_qe1", "spec_qe2", "spec_qe3", "spec_qe4"],
                "plumbline/level6": ["spec_qf1", "spec_qf2", "spec_qf3", "spec_qf4"],
                "architect/level1": ["spec_a1", "spec_a2", "spec_a3", "spec_a4"],
                "architect/level2": ["spec_b1", "spec_b2", "spec_b3", "spec_b4"],
                "architect/level3": ["spec_c1", "spec_c2", "spec_c3", "spec_c4"],
                "architect/level4": ["spec_d1", "spec_d2", "spec_d3", "spec_d4"],
                "architect/level5": ["spec_e1", "spec_e2", "spec_e3", "spec_e4"],
                "architect/level6": ["spec_f1", "spec_f2", "spec_f3", "spec_f4"],
                # Flowline (English for the Oil and Gas Industries, Syrian
                # Edition) — specs in flowline/_build. Prefixes ra-rf.
                "flowline/level1": ["spec_ra1", "spec_ra2", "spec_ra3", "spec_ra4"],
                "flowline/level2": ["spec_rb1", "spec_rb2", "spec_rb3", "spec_rb4"],
                "flowline/level3": ["spec_rc1", "spec_rc2", "spec_rc3", "spec_rc4"],
                "flowline/level4": ["spec_rd1", "spec_rd2", "spec_rd3", "spec_rd4"],
                "flowline/level5": ["spec_re1", "spec_re2", "spec_re3", "spec_re4"],
                "flowline/level6": ["spec_rf1", "spec_rf2", "spec_rf3", "spec_rf4"],
                # Throughline (project management series) — specs in pm/_build.
                # Two-letter figure prefixes: the single letters were used up by
                # the first four series.
                "pm/level1": ["spec_pa1", "spec_pa2", "spec_pa3", "spec_pa4"],
                "pm/level2": ["spec_pb1", "spec_pb2", "spec_pb3", "spec_pb4"],
                "pm/level3": ["spec_pc1", "spec_pc2", "spec_pc3", "spec_pc4"],
                "pm/level4": ["spec_pd1", "spec_pd2", "spec_pd3", "spec_pd4"],
                "pm/level5": ["spec_pe1", "spec_pe2", "spec_pe3", "spec_pe4"],
                "pm/level6": ["spec_pf1", "spec_pf2", "spec_pf3", "spec_pf4"]}

def load_specs(book):
    """The realia text of every figure, as raw HTML, keyed by figure id."""
    mods = SPEC_MODULES.get(book)
    if not mods: return {}
    sys.path.insert(0, os.path.join(HERE, "..", "_build"))
    for _series in ("business", "diplomacy", "architect", "pm", "plumbline",
                    "flowline"):
        if book.startswith(_series + "/"):
            sys.path.insert(0, os.path.join(HERE, "..", "..", _series, "_build"))
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

def spec_funcs(book):
    """figure id -> the drawing function it is built from, read from the spec source.
    f_realia is reported with its inner builder, because a page of six tables and a
    page of six letters are not the same kind of page."""
    mods = SPEC_MODULES.get(book) or []
    dirs = [os.path.join(HERE, "..", "_build")]
    for _series in ("business", "diplomacy", "architect", "pm", "plumbline", "flowline"):
        if book.startswith(_series + "/"):
            dirs.insert(0, os.path.join(HERE, "..", "..", _series, "_build"))
    out = {}
    for mn in mods:
        for d in dirs:
            p = os.path.join(d, mn + ".py")
            if not os.path.exists(p): continue
            src = io.open(p, encoding="utf-8").read()
            for m in re.finditer(r'S\[\s*"([\w-]+)"\s*\]\s*=\s*lambda[^:]*:\s*(\w+)\(\s*(\w+)?',
                                 src):
                fid, fn, inner = m.group(1), m.group(2), m.group(3)
                if fn == "f_realia" and inner in ("doc", "form", "tbl"):
                    fn = "f_realia:" + inner
                out[fid] = fn
            break
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
               "level3": (4.5,7.5), "level4": (6.5,9.5), "level5": (8.5,11.5),
               # Clearline: adult business readers, A2 to C1
               "business/level1": (3.5,6.5), "business/level2": (4.5,7.5),
               "business/level3": (5.5,8.5), "business/level4": (6.5,9.5),
               "business/level5": (7.5,10.5), "business/level6": (8.5,11.5),
               # Foreign Service English: adult professional readers, A2 to C1
               "diplomacy/level1": (3.5,6.5), "diplomacy/level2": (4.5,7.5),
               "diplomacy/level3": (5.5,8.5), "diplomacy/level4": (6.5,9.5),
               "diplomacy/level5": (7.5,10.5), "diplomacy/level6": (8.5,11.5),
               # Keystone: adult technical readers, A2 to C1
               "architect/level1": (3.5,6.5), "architect/level2": (4.5,7.5),
               "architect/level3": (5.5,8.5), "architect/level4": (6.5,9.5),
               "architect/level5": (7.5,10.5), "architect/level6": (8.5,11.5),
               # Throughline: adult project-management readers, A2 to C1
               "pm/level1": (3.5,6.5), "pm/level2": (4.5,7.5),
               "pm/level3": (5.5,8.5), "pm/level4": (6.5,9.5),
               "pm/level5": (7.5,10.5), "pm/level6": (8.5,11.5),
               # Plumbline: Academic IELTS candidates. The series starts at B1,
               # not A2, so the floor of the band is higher than the others'.
               "plumbline/level1": (5.0,8.0), "plumbline/level2": (5.5,8.5),
               "plumbline/level3": (6.0,9.5), "plumbline/level4": (6.5,10.0),
               "plumbline/level5": (7.0,10.5), "plumbline/level6": (8.0,11.5),
               # Flowline: adult oil and gas field and plant readers, A2 to C1.
               # Technical prose carries long compound nouns that push FK up,
               # so the ceiling is a half point above the other A2-to-C1 series.
               "flowline/level1": (3.5,7.0), "flowline/level2": (4.5,8.0),
               "flowline/level3": (5.5,9.0), "flowline/level4": (6.5,10.0),
               "flowline/level5": (7.5,11.0), "flowline/level6": (8.5,12.0)}

# Words of running reading per unit. Flesch-Kincaid is blind to length: a 450-word
# text at FK 6.0 still defeats an A2 reader, who decodes sixty to ninety words a
# minute and has one lesson to read, re-read and answer. A text may be shorter than
# the ceiling; it may not be longer.
READ_LEN = {"starter": 110, "level1": 150, "level2": 190, "level3": 280,
            "level4": 380, "level5": 480}
for _s in ("business", "diplomacy", "architect", "pm", "flowline"):
    for _k, _v in {"level1": 220, "level2": 290, "level3": 360,
                   "level4": 440, "level5": 530, "level6": 650}.items():
        READ_LEN["%s/%s" % (_s, _k)] = _v
# Plumbline's reading lesson is exam practice. A real Academic Reading passage runs
# 700 to 900 words, and shortening it would misrepresent the test, so the ceiling
# here is the test's own length, not a teaching length.
for _k, _v in {"level1": 350, "level2": 450, "level3": 600,
               "level4": 700, "level5": 800, "level6": 900}.items():
    READ_LEN["plumbline/%s" % _k] = _v

# Nominalizations per 1,000 words of student-facing prose. Turning verbs into nouns
# is how a text drifts above its level without its sentences getting any longer.
# The ceilings are the rates the best-scaffolded books in the estate already hold:
# Wayfinder across its six levels, and Clearline Foundation for adult A2.
NOM_MAX = {"starter": 16, "level1": 26, "level2": 30, "level3": 38,
           "level4": 46, "level5": 52}
for _s in ("business", "diplomacy", "architect", "pm", "flowline"):
    for _k, _v in {"level1": 30, "level2": 38, "level3": 46,
                   "level4": 54, "level5": 62, "level6": 72}.items():
        NOM_MAX["%s/%s" % (_s, _k)] = _v
# Plumbline starts at B1 and its subject is academic argument, where the abstract
# noun is the register, not drift away from it.
for _k, _v in {"level1": 46, "level2": 50, "level3": 54,
               "level4": 60, "level5": 68, "level6": 78}.items():
    NOM_MAX["plumbline/%s" % _k] = _v

# Share of a unit that may be quoted text -- the reading, the realia, the model
# answer. Above this the unit is an anthology with questions, not a lesson.
# Above two-fifths quoted, the lesson's own apparatus -- tasks, grammar, writing,
# review -- has fallen below three-fifths of the unit, and the unit has become an
# anthology with questions attached.
QUOTE_MAX = dict.fromkeys(READ_LEN, 0.38)
for _k in list(QUOTE_MAX):
    if _k.startswith("plumbline/"): QUOTE_MAX[_k] = 0.45

NOM_RE = re.compile(r"\b[A-Za-z]{4,}(?:tion|sion|ment|ness|ity|ance|ence|ism|ship)s?\b")

def quote_prose(body):
    """The reading as the learner meets it in the markdown: the blockquote, minus
    the things that are not the text -- the strategy tip addressed to the reader,
    table rows, bullets, and paragraph-number labels."""
    lines = []
    for l in body.splitlines():
        if not l.startswith("> "):
            lines.append("")                  # a non-quoted line ends the paragraph
            continue
        t = l[2:].strip()
        if "|" in t or t.startswith(("- ", "* ", "**Reader", "**Tip")): continue
        if re.match(r"^\*\*[A-Z][^*]{0,30}\*\*\s*(—|-)", t): continue
        lines.append(t)
    paras, cur = [], []
    for l in lines:
        if l.strip(): cur.append(l)
        elif cur: paras.append(cur); cur = []
    if cur: paras.append(cur)
    # A paragraph whose every line is wholly bold is the letterhead, and one wholly
    # in italics is the provenance line at the foot. Neither is the reading, and
    # scoring them was measuring the stationery.
    body = []
    for pl in paras:
        if all(re.match(r"^\*\*.*\*\*[.,;:]?$", x) for x in pl): continue
        if all(re.match(r"^\*[^*].*\*[.,;:]?$", x) for x in pl): continue
        body.append(" ".join(pl))
    keep = []
    for t in (strip_markup(x) for x in body):
        sents = [y for y in re.split(r"(?<=[.!?])\s+", t)
                 if y.rstrip().endswith((".", "!", "?")) and len(y.split()) > 4]
        if len(sents) >= 2 and len(t.split()) >= 20: keep.append(" ".join(sents))
    return " ".join(keep)

def strip_markup(s):
    s = re.sub(r"%%FIG[^%]*%%", " ", s)
    s = re.sub(r"%%AUD[^%]*%%", " ", s)
    s = re.sub(r"<sub>.*?</sub>", " ", s, flags=re.S)
    s = re.sub(r"[*_`>|#]", " ", s)
    return s

def check(book):
    full = os.path.abspath(book.rstrip("/"))
    name = os.path.basename(full)
    series = os.path.basename(os.path.dirname(full))
    # Two series share the directory names level1..level6, so anything that is
    # not Wayfinder is keyed by series/level.
    if series != "wayfinder":
        name = "%s/%s" % (series, name)
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

    # 14 variant layer: the base edition must be clean of variant spellings.
    # A proper noun is not a spelling choice: the UN Environment Programme is
    # called that, and Americanizing an organization's name would misquote it.
    novariant = whole
    for _pn in PROPER_NOUNS:
        novariant = novariant.replace(_pn, " ")
    bh = []
    for pat in BRITISH:
        for m in re.finditer(pat, novariant, re.I):
            bh.append(m.group(0))
    # The -ise / -isation family in one rule, because listing it word by word is how
    # 39 patterns missed organisation's cousins. Anything whose American spelling
    # really is -ise is in ISE_OK and is not a hit.
    # A pronunciation exercise marks the stress inside the word -- **AD**vertise --
    # so the emphasis comes out before this rule looks for whole words.
    for m in re.finditer(ISE_RE, novariant.replace("**", "").replace("*", "")):
        w = m.group(0).lower()
        root = re.sub(r"is(e|es|ed|ing|ation|ations|ational)$", "ise", w)
        bare = re.sub(r"^(un|re|dis|im|non)", "", root)
        if root in ISE_OK or bare in ISE_OK: continue
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

    # 2 readability and length of the Lesson 2 reading. Two texts can sit in that
    # lesson: the blockquote the learner reads on the page, and a realia document
    # set in the figure. BOTH are scored, and either one outside the band fails the
    # gate. The earlier version of this check preferred the realia and fell back to
    # the blockquote only when the realia was short, so in every book whose reading
    # is a blockquote beside a form it measured the form -- which is how twelve A2
    # readings at FK 9.6 passed a 4.5 ceiling. It also zeroed the floor and added
    # 2.5 to the ceiling, which together let anything through.
    # SERIES-PLAN 4.2: an authentic document may sit one grade above the band,
    # because the task type is what protects the learner. One grade, not two and a half.
    lo, hi = READ_TARGET.get(name, (0, 99))
    hi = hi + 1.0
    maxw = READ_LEN.get(name, 999)
    grades, off, unscored, longer, art_g, lens = [], [], [], [], [], []
    specs = load_specs(name)
    for fn, s2 in sorted(allmd.items()):
        if not re.match(r"u\d\d\.md", fn): continue
        m = re.search(r"\n## Lesson 2[^\n]*\n(.*?)(?=\n## |\Z)", s2, re.S)
        if not m: continue                     # Starting Point carries no reading lesson
        body = m.group(1)
        # The reading text is a document: headings, bullets and table rows sit beside
        # running prose. Flesch-Kincaid means nothing on a bullet, so only complete
        # sentences are measured, and the report says so.
        texts = []
        bq = quote_prose(body)
        if len(bq.split()) >= 50: texts.append(("", bq))
        for fid in re.findall(r"%%FIG (\S+) ", body):
            if fid in specs:
                art = prose_only(specs[fid])
                if len(art.split()) >= 50: texts.append(("/" + fid.split("-")[-1], art))
        if not texts:
            unscored.append(fn[:3]); continue
        for tag, t in texts:
            g = fk(t)
            if g is None: continue
            (art_g if tag else grades).append(g)
            # The floor is for the text written for the lesson. A real notice or
            # form may be plainer than the band -- authenticity can be simpler than
            # the level, never harder -- so realia is held to the ceiling alone.
            bad = g > hi if tag else not (lo <= g <= hi)
            if bad: off.append("%s%s %.1f" % (fn[:3], tag, g))
        # Length is the longest single text the learner has to get through, not the
        # sum: where a lesson sets the same note twice, once as realia and once as
        # the reading, the second one is support and not extra reading.
        wc = max(len(t.split()) for _, t in texts)
        lens.append(wc)
        if wc > maxw: longer.append("%s %dw" % (fn[:3], wc))
    if not grades and not art_g:
        add(2, "Readability", "SKIP",
            "nothing scored: all %d reading texts are forms, tables or adverts with no running "
            "prose, so Flesch-Kincaid does not apply -- a human read is the only check" % len(unscored))
    else:
        add(2, "Readability", "PASS" if not off and not longer else "FAIL",
            ("%d readings FK %.1f-%.1f inside band %.1f-%.1f%s; longest %dw against a %dw "
             "ceiling; %d lessons carry no running prose to score: %s"
             % (len(grades), min(grades) if grades else 0.0, max(grades) if grades else 0.0,
                lo, hi,
                (", plus %d realia documents FK %.1f-%.1f, held to the ceiling only"
                 % (len(art_g), min(art_g), max(art_g))) if art_g else "",
                max(lens) if lens else 0, maxw, len(unscored), unscored))
            if not off and not longer else
            "outside band %.1f-%.1f: %s | over %dw: %s" % (lo, hi, off[:6], maxw, longer[:6]))

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
    badf = [c for c in cues if not re.match(r"^[A-Z]{1,3}\d-\d\d-\d\d$", c)]
    dup = sorted({c for c in cues if cues.count(c) > 1})
    # The prefix has to name THIS book. A renumbering script with the wrong
    # prefix hard-coded in it produces ids that are well-formed, unique and
    # wrong, which is exactly what happened once and is why this check exists.
    wrongbook = []
    front = allmd.get("front.md", "") + allmd.get("back.md", "")
    declared = sorted({m for m in re.findall(r"\b([A-Z]{1,3}\d)-unit-track\b", front)})
    if declared:
        want = set(declared)
        wrongbook = sorted({c.split("-")[0] for c in cues
                            if c.split("-")[0] not in want})
    add("C", "Audio cue ids", "PASS" if not (badf or dup or wrongbook) else "FAIL",
        "%d cues, all well-formed, unique and prefixed %s" % (len(cues), declared[0])
        if not (badf or dup or wrongbook) and declared
        else "%d cues, all well-formed and unique" % len(cues)
        if not (badf or dup or wrongbook)
        else "malformed %s duplicate %s wrong book %s (front matter declares %s)"
             % (badf[:4], dup[:4], wrongbook[:4], declared))

    # 15 forward reference. A structure the unit teaches in Lesson 3 must not be
    # used in Lessons 1 and 2, where the learner has not met it yet and can only
    # guess. The targets are the forms named in the Lesson 3 section headings.
    STOPW = {"be", "have", "has", "the", "and", "not", "can", "will", "there",
             "this", "that", "with", "for", "from", "into"}
    fwd = []
    for fn, s2 in sorted(allmd.items()):
        if not re.match(r"u\d\d\.md", fn): continue
        m = re.search(r"^## Lesson 3", s2, re.M)
        if not m: continue
        pre, post = s2[:m.start()], s2[m.start():]
        forms = set()
        for h in re.findall(r"^### [^\n]*$", post, re.M):
            for f in re.findall(r"\*([^*]{4,40})\*", h):
                f = f.strip().lower()
                if len(f) >= 5 and f not in STOPW: forms.add(f)
        # Where an unmet form really hurts is the reading: text the learner has to
        # decode with nothing holding it up. The goals block names the unit's
        # targets, which is the syllabus; a word study chart, a vocabulary list and
        # an exercise prompt with a frame in it are all teaching the form or
        # supporting it. So this looks in the Lesson 2 reading only.
        m2 = re.search(r"\n## Lesson 2[^\n]*\n(.*?)(?=\n## |\Z)", pre, re.S)
        read = ""
        if m2:
            read = " ".join(l[2:] for l in m2.group(1).splitlines()
                            if l.startswith("> ") and "|" not in l)
            read = re.sub(r"%%.*?%%", " ", read, flags=re.S).lower()
        for f in sorted(forms):
            if read and re.search(r"\b" + re.escape(f) + r"\b", read):
                fwd.append("%s: %s" % (fn[:3], f))
    add(15, "Forward reference", "PASS" if not fwd else "FAIL",
        "no unit uses its own Lesson 3 target form before it teaches it"
        if not fwd else "%d uses before teaching: %s" % (len(fwd), fwd[:5]))

    # 16 abstraction load. Nominalization is how a text climbs above its level
    # without its sentences getting any longer: "we decide" becomes "the decision
    # process". Counted over the prose the student reads, per 1,000 words.
    nmax = NOM_MAX.get(name, 999)
    heavy, rates = [], []
    for fn, s2 in sorted(allmd.items()):
        if not re.match(r"u\d\d\.md", fn): continue
        t = strip_markup(s2)
        w = re.findall(r"[A-Za-z']+", t)
        if len(w) < 200: continue
        r = 1000.0 * len(NOM_RE.findall(t)) / len(w)
        rates.append(r)
        if r > nmax: heavy.append("%s %.0f" % (fn[:3], r))
    add(16, "Abstraction load", "PASS" if not heavy and rates else "FAIL" if heavy else "SKIP",
        "%.0f-%.0f nominalizations per 1,000 words against a ceiling of %d"
        % (min(rates), max(rates), nmax) if rates and not heavy
        else "over the ceiling of %d per 1,000: %s" % (nmax, heavy[:6]) if heavy
        else "no unit long enough to measure")

    # 17 quoted share. A unit whose bulk is quoted text -- reading, realia, model
    # answer -- is an anthology with questions attached, not a lesson.
    qmax = QUOTE_MAX.get(name, 0.30)
    qbad, qshare = [], []
    for fn, s2 in sorted(allmd.items()):
        if not re.match(r"u\d\d\.md", fn): continue
        tot = len(re.findall(r"[A-Za-z']+", strip_markup(s2)))
        if tot < 200: continue
        q = sum(len(re.findall(r"[A-Za-z']+", l[2:]))
                for l in s2.splitlines() if l.startswith("> "))
        sh = float(q) / tot
        qshare.append(sh)
        if sh > qmax: qbad.append("%s %d%%" % (fn[:3], round(100 * sh)))
    add(17, "Quoted share", "PASS" if qshare and not qbad else "FAIL" if qbad else "SKIP",
        "quoted text is %d%%-%d%% of a unit against a ceiling of %d%%"
        % (round(100 * min(qshare)), round(100 * max(qshare)), round(100 * qmax))
        if qshare and not qbad
        else "over %d%%: %s" % (round(100 * qmax), qbad[:6]) if qbad else "nothing to measure")

    # 18 typography. A table cell longer than a line and a page speckled with bold
    # both print badly, and neither shows up in a word count.
    # An item label in bold is navigation and does not count; bold inside a sentence
    # is emphasis, and a page of emphasis emphasizes nothing.
    fat, boldy = [], []
    for fn, s2 in sorted(allmd.items()):
        if not re.match(r"u\d\d\.md", fn): continue
        nb = 0
        for l in s2.splitlines():
            if not l.strip() or l.startswith(("#", "%%")): continue
            if l.startswith("|"):
                if set(l) <= set("|-: "): continue
                for c in l.strip().strip("|").split("|"):
                    if len(c.strip()) > 90: fat.append("%s %dch" % (fn[:3], len(c.strip())))
                continue
            body = l[2:] if l.startswith("> ") else l
            body = re.sub(r"^\s*\*\*[^*]+\*\*", "", body)   # leading label or run-in head
            nb += len(re.findall(r"\*\*[^*\n]+\*\*", body))
        if nb > 45: boldy.append("%s %d" % (fn[:3], nb))
    add(18, "Typography", "PASS" if not fat and not boldy else "FAIL",
        "no table cell over 90 characters, no unit over 45 bold runs inside sentences"
        if not fat and not boldy
        else "fat cells %d %s | emphasis-heavy %s"
             % (len(fat), sorted(set(fat))[:5], boldy[:4]))

    # 19 figure diversity. Sixteen figures a unit is only a resource if they are
    # different kinds of thing; eight of one kind is a pattern the learner stops
    # looking at.
    funcs = spec_funcs(name)
    mono = []
    if funcs:
        for fn, s2 in sorted(allmd.items()):
            if not re.match(r"u\d\d\.md", fn): continue
            ids = [i for i in re.findall(r"%%FIG (\S+) ", s2) if i in funcs]
            if len(ids) < 8: continue
            c = {}
            for i in ids: c[funcs[i]] = c.get(funcs[i], 0) + 1
            top, n = max(c.items(), key=lambda x: x[1])
            if n > 8: mono.append("%s %s x%d of %d" % (fn[:3], top, n, len(ids)))
    add(19, "Figure diversity", "SKIP" if not funcs else "PASS" if not mono else "FAIL",
        "figure specs not readable from source" if not funcs
        else "no unit leans on one figure kind for more than half its artwork"
        if not mono else "one kind dominates: %s" % mono[:5])

    # 20 audio scripts. A cue in the margin with no script behind it is a promise
    # to a teacher who has nothing to read out.
    adir = os.path.join(book, "audio")
    script = ""
    if os.path.isdir(adir):
        for f in sorted(os.listdir(adir)):
            if f.endswith(".md"): script += io.open(os.path.join(adir, f), encoding="utf-8").read()
    missing = [c for c in sorted(set(cues)) if c not in script]
    add(20, "Audio scripts", "PASS" if cues and not missing else "FAIL",
        "all %d cues resolve to a script line" % len(set(cues)) if cues and not missing
        else "%d of %d cues have no script%s" % (len(missing), len(set(cues)),
             "" if os.path.isdir(adir) else " (no audio/ directory)"))

    # 21 pronunciation. Adults who never hear which syllable carries the stress say
    # the word wrongly for the rest of their working lives, and a book that teaches
    # speaking in every unit owes them one box of it in every unit.
    teach = [fn for fn in sorted(allmd) if re.match(r"u(0[1-9]|1[0-2])\.md", fn)]
    pron = [fn[:3] for fn in teach
            if not re.search(r"(Say it|Pronunciation|Sounds and spelling|Stress)",
                             allmd[fn])]
    nun = len(teach)
    add(21, "Pronunciation", "PASS" if not pron else "FAIL",
        "every one of the %d teaching units carries a pronunciation box" % nun
        if not pron else "%d of %d units carry no pronunciation work: %s"
        % (len(pron), nun, pron[:8]))

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
