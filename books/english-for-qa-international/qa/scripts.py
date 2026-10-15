"""Check (and optionally repair) appendix A against the units' own transcripts.

In the source book a track whose transcript appears both inside its unit and in
Appendix A carries exactly the same lines in both places, so a reader following
a cross-reference can never find two different scripts.  This matches the two
by track number and, with --fix, copies the unit's lines into the appendix.
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
root = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(HERE), "content")
fix = "--fix" in sys.argv

BODY = re.compile(r"@[A-Z]")
SPACER = re.compile(r"^_(\d+|-)[dp]*$")


def body_run(lines, i):
    """The run of body lines starting at i."""
    j = i
    while j < len(lines) and not BODY.match(lines[j]) and not SPACER.match(lines[j].strip()):
        j += 1
    return j


# track -> the unit's own transcript lines
scripts = {}
for n in range(1, 11):
    lines = open(f"{root}/unit-{n:02d}.txt", encoding="utf-8").read().split("\n")
    track = None
    for i, l in enumerate(lines):
        m = re.match(r"@AUDIO .*?Audio Track ([\d.]+)", l)
        if m:
            track = m.group(1)
        elif l.strip() == "@SCRIPT" and track:
            scripts[track] = lines[i + 1:body_run(lines, i + 1)]
            track = None

ap = f"{root}/appendix-a.txt"
lines = open(ap, encoding="utf-8").read().split("\n")
track, bad, shared = None, 0, 0
for i, l in enumerate(lines):
    m = re.match(r"@TRACK .*?Track ([\d.]+) ", l)
    if m:
        track = m.group(1)
    elif l.strip() == "@SPEECH" and track:
        src = scripts.get(track)
        if src is None:
            track = None
            continue
        shared += 1
        end = body_run(lines, i + 1)
        if end - (i + 1) != len(src):
            print(f"track {track}: {end - i - 1} appendix line(s) vs {len(src)} in the unit")
            bad += 1
        else:
            for k in range(len(src)):
                if lines[i + 1 + k] != src[k]:
                    bad += 1
                    if fix:
                        lines[i + 1 + k] = src[k]
                    else:
                        print(f"track {track} line {i + 2 + k}: appendix differs from the unit")
        track = None

if fix:
    open(ap, "w", encoding="utf-8").write("\n".join(lines))
    print(f"{shared} shared track(s); {bad} line(s) copied from the units")
else:
    print(f"{shared} shared track(s); {bad} difference(s)")
