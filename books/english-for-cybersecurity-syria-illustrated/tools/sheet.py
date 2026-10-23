#!/usr/bin/env python3
"""Print a unit's build sheet: the DSL tag sequence the clone must match."""
import re, sys, zipfile, subprocess, os

HERE = os.path.dirname(os.path.abspath(__file__))
sys.argv_src = sys.argv[1]
out = subprocess.run([sys.executable, "-I", os.path.join(HERE, "skel.py"),
                      sys.argv[1], "--unit", sys.argv[2]],
                     capture_output=True, text=True).stdout

MAP = {"UNITHEAD": "U", "SUBTITLE": "SUB", "WARMBAR": "WARM", "PARTBAR": "PART",
       "TRACK": "TRK", "EXHEAD": "EX", "INSTR": "IN", "INSTRW": "IW",
       "LABEL": "LB", "LABEL2": "LB2", "LABELM": "LM", "LABELC": "LC",
       "LABELG": "LG", "ITEM40": "IG", "ITEM24": "IF", "BCHECK": "BC",
       "BREMEMBER": "BR", "BOXG": "BG", "CAPTION": "CAP", "BOX": "BX", "BOX_EMPTY": "BXE",
       "BANK": "WB", "GLOSS": "GL", "GLOSS_EMPTY": "GLE", "WATCH": "WO",
       "ITEM": "IT", "BITEM": "BI", "PRON": "PR", "IND": "OP", "FIG": "IMG",
       "SPACER": "PB", "T_COLA": "COLA", "T_COLB": "COLB", "T_GRAM": "GRAM"}

# rows per table, read back out of the source
x = zipfile.ZipFile(sys.argv[1]).read("word/document.xml").decode()
body = x[x.find("<w:body>"):]
toks = re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b(?:[^>]*/>|.*?</w:p>)", body, re.S)

for ln in out.splitlines():
    m = re.match(r"\s*(\d+) (\w+)\s+(\S*)\s*(.*)", ln)
    if not m:
        print(ln)
        continue
    i, kind, extra, text = int(m.group(1)), m.group(2), m.group(3), m.group(4)
    tag = MAP.get(kind, kind)
    if kind.startswith("T_") or kind == "T_OTHER":
        rows = len(re.findall(r"<w:tr\b", toks[i]))
        cols = re.findall(r'<w:gridCol w:w="(\d+)"', toks[i])
        if kind == "T_COLA" and cols == ["700", "3300", "1200"]:
            print(f"@COLA   rows={rows}")
        elif kind == "T_COLB":
            print(f"@COLB   rows={rows}")
        elif kind == "T_GRAM":
            print(f"@GRAM {','.join(cols)}   rows={rows}")
        else:
            print(f"@TBL {','.join(cols)}   rows={rows}")
        continue
    if kind == "FIG":
        print(f"@IMG    ({extra})")
        continue
    print(f"@{tag:<6} {text[:92]}")
