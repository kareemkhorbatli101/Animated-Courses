"""anyline.py — replace lines of a content file by number, including @TAG lines.

Used for the heading and instruction lines, which byline.py deliberately
refuses to touch.  The tag itself must be repeated in the replacement, so a
mistyped tag shows up immediately in the skeleton diff.
"""
import sys

src, repl, out = sys.argv[1], sys.argv[2], sys.argv[3]
lines = open(src, encoding="utf-8").read().split("\n")
n = 0
for raw in open(repl, encoding="utf-8"):
    raw = raw.rstrip("\n")
    if not raw.strip():
        continue
    num, _, text = raw.partition("\t")
    i = int(num) - 1
    old, new = lines[i], text
    if old.startswith("@") and new.split(" ")[0] != old.split(" ")[0]:
        sys.exit(f"line {num}: tag changed, {old.split(' ')[0]} -> {new.split(' ')[0]}")
    lines[i] = new
    n += 1
open(out, "w", encoding="utf-8").write("\n".join(lines))
print(f"{n} line(s) replaced -> {out}")
