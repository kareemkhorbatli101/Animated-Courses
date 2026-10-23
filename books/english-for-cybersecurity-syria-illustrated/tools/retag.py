#!/usr/bin/env python3
"""Align a content file's tags with the source unit's measured sheet.

The element sequence must already match one for one; this only moves a
directive between the variants of its own family (the spacing variants the
source uses), and reports anything that is a real structural mismatch.

    python3 tools/retag.py <sheet.txt> <content.txt> [--write]
"""
import re, sys

FAM = {}
for group in (("IT", "IG", "IF"), ("LB", "LB2"), ("BI", "BC", "BR"),
              ("BX", "BG", "BXE"), ("LM", "LC", "LG"), ("GL", "GLE"),
              ("IMG",), ("CAP",),
              ("IN", "IW")):
    for t in group:
        FAM[t] = group[0]


def fam(t):
    return FAM.get(t, t)


def main():
    sheet, content = sys.argv[1], sys.argv[2]
    want = []
    for ln in open(sheet, encoding="utf-8"):
        m = re.match(r"@([A-Z0-9]+)", ln)
        if m:
            want.append(m.group(1))
    lines = open(content, encoding="utf-8").read().split("\n")
    out, k, bad, changed = [], 0, [], 0
    intable = False
    for ln in lines:
        if intable:
            out.append(ln)
            if ln.strip() == "@END":
                intable = False
            continue
        m = re.match(r"@([A-Z0-9]+)(.*)$", ln)
        if not m:
            out.append(ln)
            continue
        tag, rest = m.group(1), m.group(2)
        if tag in ("COLA", "COLB", "GRAM", "TBL", "TBLN"):
            intable = True
        if k >= len(want):
            bad.append(f"content has more elements than the sheet (at @{tag})")
            out.append(ln)
            k += 1
            continue
        w = want[k]
        if fam(w) != fam(tag):
            bad.append(f"#{k}: sheet wants @{w}, content has @{tag}  {rest.strip()[:46]}")
            out.append(ln)
        else:
            # a box the source leaves blank is filled here by design: keep the
            # content's own tag rather than downgrading it to the empty variant
            if w in ("BXE", "GLE") and rest.strip():
                out.append(ln)
            else:
                if w != tag:
                    changed += 1
                out.append(f"@{w}{rest}")
        k += 1
    if k < len(want):
        bad.append(f"content has {k} elements, the sheet has {len(want)}")
    print(f"{content}: {k} elements, {changed} retagged, {len(bad)} mismatch(es)")
    for b in bad[:25]:
        print("   " + b)
    if "--write" in sys.argv and not bad:
        open(content, "w", encoding="utf-8").write("\n".join(out))
        print("   written")
    return 1 if bad else 0


sys.exit(main())
