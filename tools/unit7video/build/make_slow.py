#!/usr/bin/env python3
"""
Derive a slow edition of a lesson from the normal one.

    python3 build/make_slow.py text1 conv1 --scale 0.8

Writes content/<id>_slow<NN>.json, which is the original with three fields
changed: a new id, a "· slow" label, and speechScale. The derived file is
regenerated from the original and is gitignored, so a correction to the
source text cannot leave the slow edition behind saying something else.
"""
import argparse
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def derive(src_id, scale):
    src = os.path.join(ROOT, "content", src_id + ".json")
    with open(src, encoding="utf-8") as f:
        c = json.load(f)

    tag = f"slow{int(round(scale * 100))}"
    c["id"] = f"{src_id}_{tag}"
    c["speechScale"] = scale
    if "· slow" not in c["number"]:
        c["number"] = c["number"] + " · slow"

    out = os.path.join(ROOT, "content", c["id"] + ".json")
    with open(out, "w", encoding="utf-8") as f:
        json.dump(c, f, ensure_ascii=False, indent=2)
    return out, c["id"]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("ids", nargs="+", help="source lesson ids, e.g. text1 conv1")
    ap.add_argument("--scale", type=float, default=0.8,
                    help="speaking speed as a fraction of the original (default 0.8)")
    a = ap.parse_args()
    if not 0.4 <= a.scale <= 1.5:
        raise SystemExit("--scale outside the range edge-tts can voice (0.4-1.5)")
    for i in a.ids:
        path, new_id = derive(i, a.scale)
        print(f"[slow] {i} -> {new_id}  ({os.path.relpath(path, ROOT)})")


if __name__ == "__main__":
    main()
