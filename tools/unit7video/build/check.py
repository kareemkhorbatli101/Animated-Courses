#!/usr/bin/env python3
"""
Regression guard for the lesson set.

    python3 build/check.py text1 text2 ...        # content checks
    python3 build/check.py --built text1 ...      # also check what was rendered

Content checks catch the mistakes that are expensive to find in a finished
video: a conversation that still dubs its Arabic, a lesson that forgot to be
slow, an icon name the library does not define, a cue whose trigger word is not
in the line it belongs to, or a missing Arabic translation.
"""
import argparse
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WORD = re.compile(r"[^\s]+")
STRIP = re.compile(r"^[^\w$£€%]+|[^\w$£€%]+$", re.UNICODE)


def icon_names():
    src = open(os.path.join(ROOT, "lib", "icons.js"), encoding="utf-8").read()
    return set(re.findall(r"^\s*I\.([A-Za-z_][\w]*)\s*=", src, re.M))


def norm(w):
    return STRIP.sub("", w).lower()


def check_content(cid, icons, problems):
    path = os.path.join(ROOT, "content", cid + ".json")
    c = json.load(open(path, encoding="utf-8"))
    say = lambda m: problems.append(f"{cid}: {m}")

    if c.get("speechScale") != 0.8:
        say(f"speechScale is {c.get('speechScale')!r}, expected 0.8")

    if c["kind"] == "dialogue":
        if c.get("arabicAudio") is not False:
            say("arabicAudio is not false — the Arabic would be spoken")
        for i, ln in enumerate(c["dialogue"]):
            if not ln.get("ar", "").strip():
                say(f"dialogue line {i} has no Arabic subtitle")
        lines = [(f"d{i}", ln["en"], ln.get("cues", []))
                 for i, ln in enumerate(c["dialogue"])]
    else:
        lines = []
        for pi, para in enumerate(c["paragraphs"]):
            if not para.get("scene"):
                say(f"paragraph {pi} has no scene")
            for li, ln in enumerate(para["lines"]):
                if not ln.get("ar", "").strip():
                    say(f"p{pi}l{li} has no Arabic subtitle")
                lines.append((f"p{pi}l{li}", ln["en"], ln.get("cues", [])))

    # every icon must exist, and every cue must fire on a word that is there
    def walk_icons(o, where):
        if isinstance(o, dict):
            n = o.get("icon")
            if isinstance(n, str) and n not in icons:
                say(f"{where}: icon '{n}' is not defined")
            for v in o.values():
                walk_icons(v, where)
        elif isinstance(o, list):
            for v in o:
                walk_icons(v, where)

    walk_icons(c.get("preview"), "preview")
    walk_icons(c.get("vocab"), "vocab")
    walk_icons(c.get("takeaway"), "takeaway")

    for lid, en, cues in lines:
        words = {norm(m.group(0)) for m in WORD.finditer(en)}
        for ci, cue in enumerate(cues):
            walk_icons(cue, f"{lid} cue {ci}")
            at = norm(cue.get("at", ""))
            if at and at not in words and not any(w.startswith(at) for w in words):
                say(f"{lid} cue {ci}: trigger '{cue.get('at')}' is not in the line")
            if cue.get("kind") == "compare":
                for side in ("a", "b"):
                    if not isinstance(cue.get(side), dict):
                        say(f"{lid} cue {ci}: compare card has no '{side}' side")
            if cue.get("kind") == "doc" and not cue.get("rows"):
                say(f"{lid} cue {ci}: doc card has no rows")
    return c


def check_built(cid, problems):
    out = os.path.join(ROOT, "out", cid)
    say = lambda m: problems.append(f"{cid}: {m}")
    vp = os.path.join(out, "voice.json")
    if not os.path.exists(vp):
        return say("no voice.json — not built")
    v = json.load(open(vp, encoding="utf-8"))
    tl = json.load(open(os.path.join(out, "timeline.json"), encoding="utf-8"))

    if tl["kind"] == "dialogue":
        spoken_ar = [u for u in v["utterances"] if u["voice"].startswith("ar-")]
        if spoken_ar:
            say(f"{len(spoken_ar)} Arabic clips were synthesised")
        slots = [s for s in tl["segments"]
                 if s["type"] == "turn" and s.get("audio2At") is not None]
        if slots:
            say(f"{len(slots)} turns still reserve time for Arabic audio")

    mp4 = os.path.join(ROOT, "out", cid + ".mp4")
    if not os.path.exists(mp4):
        return say("mp4 not rendered")
    # a stale mp4 passes every other check while showing the old lesson
    tlp = os.path.join(out, "timeline.json")
    if os.path.getmtime(mp4) < os.path.getmtime(tlp):
        return say("mp4 is older than its timeline — stale render")
    probe = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "stream=codec_type,duration",
         "-of", "csv=p=0", mp4], capture_output=True, text=True).stdout.split()
    durs = [float(x.split(",")[1]) for x in probe if "," in x]
    if len(durs) < 2:
        say("mp4 is missing a video or audio stream")
    elif abs(durs[0] - durs[1]) > 0.25:
        say(f"audio and video differ by {abs(durs[0]-durs[1]):.2f}s")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("ids", nargs="+")
    ap.add_argument("--built", action="store_true")
    a = ap.parse_args()

    icons = icon_names()
    problems = []
    for cid in a.ids:
        check_content(cid, icons, problems)
        if a.built:
            check_built(cid, problems)

    if problems:
        print(f"FAIL — {len(problems)} problem(s):")
        for p in problems:
            print("  •", p)
        return 1
    print(f"OK — {len(a.ids)} lessons pass "
          f"({'content + build' if a.built else 'content'})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
