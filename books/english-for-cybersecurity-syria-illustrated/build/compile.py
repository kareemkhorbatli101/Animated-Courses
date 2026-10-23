#!/usr/bin/env python3
"""Compile the content DSL into the illustrated student book.

Usage:  python3 build/compile.py <out.docx> [unit-files...]
With no unit files, every content/unit-*.txt is built in order.

DSL: one element per line, "@TAG text".  A line starting "+ " continues the
previous element's text.  Blank lines and "# " comments are ignored.
Tables open with @COLA/@COLB/@GRAM/@TBL/@TBLN and close with @END; their rows
use " | " between cells.
"""
import glob, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import render as R

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FIGDIR = os.path.join(ROOT, "figures")

SIMPLE = {
    "U": R.unithead, "SUB": R.subtitle, "WARM": R.warmbar, "PART": R.partbar,
    "TRK": R.track, "EX": R.exhead, "IN": R.instr, "IW": R.instrw,
    "LB": R.label, "LB2": R.label2, "LM": R.labelm, "LC": R.labelc,
    "LG": R.labelg, "CAP": R.caption, "BX": R.box, "BG": R.boxg,
    "WB": R.bank, "GL": R.gloss, "WO": R.watch,
    "IT": R.item, "IG": R.item40, "IF": R.item24,
    "BI": R.bitem, "BC": R.bcheck, "BR": R.bremember,
    "PR": R.pron, "OP": R.opt,
}
BARE = {"BXE": lambda: R.box(""), "GLE": R.glossempty, "PB": R.pagebreak}


class Builder:
    def __init__(self):
        self.els = []          # rendered XML, in reading order
        self.kinds = []        # the tag that produced each element
        self.images = []       # (rid, path)
        self.rid = 4           # rIds 1-2 are styles/settings
        self.errors = []

    def emit(self, kind, xml):
        self.els.append(xml)
        self.kinds.append(kind)

    def add_image(self, name):
        path = os.path.join(FIGDIR, name)
        if not os.path.exists(path):
            self.errors.append(f"missing figure: {name}")
            w, h = 1440, 360
        else:
            w, h = R.png_size(path)
        self.rid += 1
        self.images.append((self.rid, path))
        return self.rid, 540, round(540 * h / w)

    # ------------------------------------------------------------ parsing
    def feed(self, path):
        with open(path, encoding="utf-8") as f:
            raw = [ln.rstrip("\n") for ln in f]
        lines, pending = [], None
        for ln in raw:
            if ln.startswith("+ "):
                if pending is None:
                    self.errors.append(f"{path}: continuation with no element")
                    continue
                lines[-1] = lines[-1] + " " + ln[2:].strip()
                continue
            if not ln.strip() or ln.lstrip().startswith("# "):
                continue
            lines.append(ln)
            pending = ln
        i = 0
        while i < len(lines):
            ln = lines[i]
            if not ln.startswith("@"):
                self.errors.append(f"{path}:{i}: not a directive: {ln[:48]}")
                i += 1
                continue
            tag, _, rest = ln[1:].partition(" ")
            rest = rest.strip()
            if tag in SIMPLE:
                self.emit(tag, SIMPLE[tag](rest))
            elif tag in BARE:
                self.emit(tag, BARE[tag]())
            elif tag == "IMG":
                rid, w, h = self.add_image(rest)
                self.emit(tag, R.figure(rid, w, h))
            elif tag in ("COLA", "COLB", "GRAM", "TBL", "TBLN"):
                rows, shade, i = [], set(), i + 1
                while i < len(lines) and lines[i].strip() != "@END":
                    row = lines[i]
                    if row.startswith("* "):      # the worked-example row
                        shade.add(len(rows))
                        row = row[2:]
                    rows.append([c.strip() for c in row.split("|")])
                    i += 1
                self.shade = shade
                self.emit(tag, self.render_table(tag, rest, rows, path))
                self.shade = set()
            else:
                self.errors.append(f"{path}:{i}: unknown tag @{tag}")
            i += 1

    def render_table(self, tag, spec, rows, path):
        if tag == "COLA":
            return R.cola([(r[0], r[1]) for r in rows])
        if tag == "COLB":
            return R.colb([(r[0], r[1]) for r in rows])
        grid = [int(x) for x in spec.split(",") if x]
        for r in rows:
            if len(r) != len(grid):
                self.errors.append(
                    f"{path}: @{tag} row has {len(r)} cells, grid has {len(grid)}: {r[:2]}")
                while len(r) < len(grid):
                    r.append("")
        if tag == "GRAM":
            return R.gram(grid, rows)
        return R.tbl(grid, rows, header=(tag == "TBL"),
                     shade=getattr(self, "shade", set()))


def main():
    out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "dist", "book.docx")
    files = sys.argv[2:] or sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt")))
    b = Builder()
    for f in files:
        b.feed(f)
    R.write_docx(out, b.els, b.images)
    print(f"{out}: {len(b.els)} elements, {len(b.images)} images, from {len(files)} file(s)")
    if b.errors:
        print(f"!! {len(b.errors)} problem(s):")
        for e in b.errors[:40]:
            print("   " + e)
        sys.exit(1)


if __name__ == "__main__":
    main()
