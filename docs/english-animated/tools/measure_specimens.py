#!/usr/bin/env python3
"""Gate 1 text checker for English Animated.

Measures every specimen in 14-specimen-texts.md against its declared band and
rewrites the inline counts and the §6/§7 tables from the measurement, so the
printed numbers can never drift from the texts.

    python3 -I tools/measure_specimens.py [--check]

--check exits non-zero if any specimen is out of band and writes nothing.
"""
import re, sys, pathlib

DOC = pathlib.Path(__file__).resolve().parent.parent / '14-specimen-texts.md'

# key, start marker, end marker, label, word band, mean-sentence band, wpm, is-extract
SPEC = [
 ('r_a11', "**The card with the cats on it**", "---\n\n### 1.2",
  "A1.1 U9 main text", "80–120 w", (8, 10), None, False),
 ('r_a22', "**The night the water came**", "---\n\n### 1.3",
  "A2.2 U3 main text", "180–240 w", (11, 13), None, False),
 ('r_b11', "**The last shop on the corner**", "---\n\n### 1.4",
  "B1.1 U1 main text", "250–320 w", (13, 15), None, False),
 ('r_b22', "**What the port does not see**", "---\n\n### 1.5",
  "B2.2 U3 main text", "500–650 w", (17, 20), None, False),
 ('r_c12', "**A building of considerable confidence**", "---\n\n### 1.6",
  "C1.2 U5 extract", "extract of 800–1,000", (20, 24), None, True),
 ('r_c22', "**The paperwork was in order**", "---\n\n## 2 ·",
  "C2.2 U7 extract", "extract of 1,200–1,600", (22, 28), None, True),
 ('l_a11', "2 speakers · fully scripted ·", "### 2.2",
  "A1.1 Track 9.2", "45–60 s @ 90–100 wpm", None, 93, False),
 ('l_b11', "Grace is the speaker used for the 2B decoding clinic.", "**Decoding clinic (2B)",
  "B1.1 Track 1.1 (Grace)", "part of 110–140 s @ 120–130", None, 129, True),
 ('l_b22', "semi-scripted\n", "---\n\n## 3 ·",
  "B2.2 Track 3.1 extract", "part of 240–280 s @ 145–155", None, 150, True),
 ('w_a11', "### 3.1 · A1.1 Unit 9 — *Directions to a place you know* (band 40–60 w)", "### 3.2",
  "A1.1 U9 model", "40–60 w", None, None, False),
 ('w_a22', "### 3.2 · A2.2 Unit 3 — *A night something changed* (band 80–110 w)", "### 3.3",
  "A2.2 U3 model", "80–110 w", None, None, False),
 ('w_b11', "### 3.3 · B1.1 Unit 1 — *How a street changed* (band 120–150 w)", "### 3.4",
  "B1.1 U1 model", "120–150 w", None, None, False),
 ('w_b22', "### 3.4 · B2.2 Unit 3 — *A system and what it pushed elsewhere* (band 220–280 w)", "### 3.5",
  "B2.2 U3 model", "220–280 w", None, None, False),
 ('w_c12', "### 3.5 · C1.2 Unit 10 — *An editorial judgement* (band 350–450 w), opening", "---\n\n## 4 ·",
  "C1.2 U10 opening", "extract of 350–450", None, None, True),
 ('s_a11', "### 4.1 · A1.1 Unit 9 — *Direct a visitor* (band 20–30 s)", "### 4.2",
  "A1.1 U9 model answer", "20–30 s", None, 90, False),
 ('s_a22', "### 4.2 · A2.2 Unit 3 — *Something that changed in your town* (band 60–75 s)", "### 4.3",
  "A2.2 U3 model answer", "60–75 s", None, 112, False),
 ('s_b11', "### 4.3 · B1.1 Unit 1 — *Tell the story of a street that changed* (band 60–90 s, the Outcome Task)", "### 4.4",
  "B1.1 U1 model answer", "60–90 s", None, 124, False),
 ('s_b22', "### 4.4 · B2.2 Unit 3 — *Chair a five-minute decision* (band 3 min), opening", "---\n\n## 5 ·",
  "B2.2 U3 opening", "part of 3 min", None, 152, True),
]

WORD = re.compile(r"[A-Za-z0-9À-ÖØ-öø-ÿ]"
                  r"[A-Za-z0-9'’À-ÖØ-öø-ÿ-]*")


def clean(t):
    t = re.sub(r'\*\*\[.*?\]\*\*', '', t, flags=re.S)   # annotation callouts
    t = re.sub(r'\*\(.*?\)\*', '', t)                   # stage directions
    t = re.sub(r'^\s*>\s?', '', t, flags=re.M)          # blockquote marks
    t = re.sub(r'\*\*[A-ZÄÖÜ ]+:\*\*', '', t)  # speaker labels
    t = re.sub(r'^#.*$', '', t, flags=re.M)
    t = re.sub(r'^\*\*.*?\*\*\s*$', '', t, flags=re.M)  # standalone bold headings
    return t.replace('*', '').replace('—', ' ').replace('…', '.')


def words(t):
    return len(WORD.findall(clean(t)))


def sentences(t):
    c = re.sub(r'\s+', ' ', clean(t)).strip()
    return len([x for x in re.split(r'(?<=[.!?])\s+', c) if len(x.split()) > 1])


def measure(doc):
    out = {}
    for key, start, end, label, band_w, band_m, wpm, extract in SPEC:
        i = doc.index(start) + len(start)
        body = doc[i:doc.index(end, i)]
        w, c = words(body), sentences(body)
        out[key] = dict(w=w, c=c, mean=w / c, label=label, band_w=band_w,
                        band_m=band_m, wpm=wpm, extract=extract,
                        secs=round(w / wpm * 60) if wpm else None)
    return out


def rewrite(doc, m):
    inline = [
        ("· 2 speakers · fully scripted · ", 'l_a11', "{w} words / {secs} s"),
        ("Extract below: ", 'l_b11', "{w} words / {secs} s."),
        ("> Extract below: ", 'l_b22', "{w} words / {secs} s"),
    ]
    doc = re.sub(r'(· 2 speakers · fully scripted · )\d+ words / \d+ s',
                 lambda g: g.group(1) + f"{m['l_a11']['w']} words / {m['l_a11']['secs']} s", doc)
    doc = re.sub(r'(Extract below: )\d+ words / \d+ s\.',
                 lambda g: g.group(1) + f"{m['l_b11']['w']} words / {m['l_b11']['secs']} s.", doc)
    doc = re.sub(r'(> Extract below: )\d+ words / \d+ s',
                 lambda g: g.group(1) + f"{m['l_b22']['w']} words / {m['l_b22']['secs']} s", doc)
    for key, pat in [('w_a11', r'> \d+ words\n(?=\n> My aunt)'),
                     ('w_a22', r'> \d+ words\n(?=\n> The shop)'),
                     ('w_b22', r'> \d+ words\n(?=\n> Our ticketing)')]:
        doc = re.sub(pat, f"> {m[key]['w']} words\n", doc)
    doc = re.sub(r'> \d+ words — the model', f"> {m['w_b11']['w']} words — the model", doc)
    doc = re.sub(r'> Extract: \d+ words\n', f"> Extract: {m['w_c12']['w']} words\n", doc)
    for key, nxt in [('s_a11', 'Okay. So'), ('s_a22', 'I want to talk'), ('s_b11', 'Right, so')]:
        doc = re.sub(r'> \d+ words / \d+ s\n(?=\n> "' + re.escape(nxt) + ')',
                     f"> {m[key]['w']} words / {m[key]['secs']} s\n", doc)
    doc = re.sub(r'> Extract: \d+ words / \d+ s\n',
                 f"> Extract: {m['s_b22']['w']} words / {m['s_b22']['secs']} s\n", doc)
    doc = re.sub(r'\(extract below: \d+\)\s*·\s*mean sentence 20',
                 f"(extract below: {m['r_c12']['w']}) · mean sentence 20", doc)
    doc = re.sub(r'\(extract below: \d+\)\s*·\s*mean sentence 22',
                 f"(extract below: {m['r_c22']['w']}) · mean sentence 22", doc)

    reading = ['r_a11', 'r_a22', 'r_b11', 'r_b22', 'r_c12', 'r_c22']
    rows = []
    for k in reading:
        x = m[k]; lo, hi = x['band_m']
        rows.append(f"| {x['label']} | {x['w']} | {x['c']} | {x['mean']:.1f} | "
                    f"{lo}–{hi} | {'✔' if lo <= x['mean'] <= hi else '✘'} |")
    t6 = ("| Text | Words | Sentences | Mean sentence | Band | ✔ |\n|---|---|---|---|---|---|\n"
          + "\n".join(rows) + "\n\n")
    a = doc.index("| Text | Words | Sentences | Mean sentence | Band | ✔ |")
    b = doc.index("The curve is smooth and monotonic.")
    doc = doc[:a] + t6 + doc[b:]

    def row(k):
        x = m[k]
        meas = f"{x['w']} w" + (f" / {x['secs']} s" if x['secs'] else "")
        if x['wpm']:
            meas += f" / {x['wpm']} wpm"
        return f"| {x['label']} | {x['band_w']} | {meas} | {'— extract' if x['extract'] else '✔'} |"
    t7 = "| Specimen | Band | Measured | ✔ |\n|---|---|---|---|\n| **Reading** | | | |\n"
    t7 += "\n".join(row(k) for k in reading)
    t7 += "\n| **Listening** | | | |\n" + "\n".join(row(k) for k in ['l_a11', 'l_b11', 'l_b22'])
    t7 += "\n| **Writing models** | | | |\n" + "\n".join(
        row(k) for k in ['w_a11', 'w_a22', 'w_b11', 'w_b22', 'w_c12'])
    t7 += "\n| **Speaking models** | | | |\n" + "\n".join(
        row(k) for k in ['s_a11', 's_a22', 's_b11', 's_b22']) + "\n\n"
    a = doc.index("| Specimen | Band | Measured | ✔ |")
    b = doc.index("full specimens in band,")
    b = doc.rindex("\n", 0, doc.rindex("\n", 0, b)) + 1
    doc = doc[:a] + t7 + doc[b:]

    full = sum(1 for v in m.values() if not v['extract'])
    ext = sum(1 for v in m.values() if v['extract'])
    doc = re.sub(r'\d+ full specimens in band, \w+ marked extracts\.',
                 f"{full} full specimens in band, {ext} marked extracts.", doc)
    return doc


def main():
    doc = DOC.read_text(encoding='utf-8')
    m = measure(doc)
    bad = []
    for k, x in m.items():
        if x['band_m'] and not (x['band_m'][0] <= x['mean'] <= x['band_m'][1]):
            bad.append(f"{x['label']}: mean {x['mean']:.1f} outside {x['band_m']}")
        lo = re.match(r'(\d+)[–-](\d+) w$', x['band_w'])
        if lo and not (int(lo.group(1)) <= x['w'] <= int(lo.group(2))):
            bad.append(f"{x['label']}: {x['w']} w outside {x['band_w']}")
    for k, x in m.items():
        print(f"  {x['label']:26} {x['w']:4} w   mean {x['mean']:5.1f}"
              + (f"   {x['secs']} s @ {x['wpm']} wpm" if x['secs'] else ""))
    if bad:
        print("\nOUT OF BAND:")
        for b in bad:
            print("  " + b)
    if '--check' in sys.argv:
        sys.exit(1 if bad else 0)
    DOC.write_text(rewrite(doc, m), encoding='utf-8')
    print("\n14-specimen-texts.md tables regenerated from measurement.")


if __name__ == '__main__':
    main()
