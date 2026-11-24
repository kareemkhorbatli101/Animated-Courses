#!/usr/bin/env python3
"""
Synthesise every spoken line of a lesson video with Microsoft Edge neural TTS,
capturing word-level timings so the renderer can sync karaoke highlighting and
icon cues to the exact moment a word is spoken.

Usage:  python3 tts.py <content.json> <outdir>
"""
import argparse
import asyncio
import difflib
import json
import os
import re
import ssl
import subprocess
import sys

CA = "/root/.ccr/ca-bundle.crt"


def patch_ssl():
    """edge-tts pins its own certifi bundle; point it at the session proxy CA."""
    if not os.path.exists(CA):
        return
    ctx = ssl.create_default_context(cafile=CA)
    import edge_tts.communicate as _c
    import edge_tts.voices as _v
    _c._SSL_CTX = ctx
    _v._SSL_CTX = ctx


patch_ssl()
import edge_tts  # noqa: E402

# --------------------------------------------------------------------------
# Text handling
# --------------------------------------------------------------------------

# Spoken-form rewrites: the screen keeps the original, the voice gets something
# it can pronounce. Alignment maps the two back together afterwards.
SPEAK_SUBS = [
    (r"\bINV-(\d+)\b", r"invoice \1"),
    (r"\bCN-(\d+)\b", r"credit note \1"),
    (r"\bPO-(\d+)\b", r"P.O. \1"),
    (r"\bTR-(\d+)-?([A-Z])?\b", lambda m: f"T.R. {m.group(1)}" + (f" {m.group(2)}" if m.group(2) else "")),
    (r"\bS275\b", "S two seven five"),
    (r"\bUCP 600\b", "U.C.P. six hundred"),
    (r"\bLC\b", "L.C."),
    (r"\bIBAN\b", "I ban"),
    (r"\bMT103\b", "M.T. one oh three"),
    (r"…", ", "),
    (r"—", ", "),
]

WORD_RE = re.compile(r"[^\s]+")
STRIP_RE = re.compile(r"^[^\w$£€%٠-٩]+|[^\w$£€%٠-٩]+$", re.UNICODE)


def to_spoken(text):
    out = text
    for pat, rep in SPEAK_SUBS:
        out = re.sub(pat, rep, out)
    return re.sub(r"\s+", " ", out).strip()


def display_words(text):
    """Split display text into word spans, keeping index positions."""
    return [(m.start(), m.end(), m.group(0)) for m in WORD_RE.finditer(text)]


def norm(tok):
    t = STRIP_RE.sub("", tok).lower()
    return t


def align(disp, spoken_words):
    """
    Map display words -> (start, end) seconds using the spoken word timings.

    edge-tts returns tokens in the original orthography, so most sequences match
    1:1. Where a rewrite changed the token count, difflib finds the matching
    blocks and the gaps are interpolated across the span they occupy.
    """
    a = [norm(w) for (_, _, w) in disp]
    b = [norm(w["w"]) for w in spoken_words]
    times = [None] * len(disp)

    sm = difflib.SequenceMatcher(a=a, b=b, autojunk=False)
    for i, j, n in sm.get_matching_blocks():
        for k in range(n):
            w = spoken_words[j + k]
            times[i + k] = (w["t"], w["t"] + max(w["d"], 0.04))

    # Fill unmatched display words by spreading them over the gap between the
    # nearest known anchors on each side.
    total = (spoken_words[-1]["t"] + spoken_words[-1]["d"]) if spoken_words else 0.0
    known = [i for i, t in enumerate(times) if t]
    if not known:
        if not disp:
            return []
        step = total / max(len(disp), 1)
        return [(i * step, (i + 1) * step) for i in range(len(disp))]

    # leading gap
    first = known[0]
    if first > 0:
        t0, t1 = 0.0, times[first][0]
        step = (t1 - t0) / first
        for i in range(first):
            times[i] = (t0 + i * step, t0 + (i + 1) * step)
    # trailing gap
    last = known[-1]
    if last < len(times) - 1:
        t0, t1 = times[last][1], total
        n = len(times) - 1 - last
        step = max((t1 - t0) / n, 0.05)
        for k, i in enumerate(range(last + 1, len(times))):
            times[i] = (t0 + k * step, t0 + (k + 1) * step)
    # interior gaps
    for idx in range(len(known) - 1):
        lo, hi = known[idx], known[idx + 1]
        if hi - lo <= 1:
            continue
        t0, t1 = times[lo][1], times[hi][0]
        n = hi - lo - 1
        step = max((t1 - t0) / n, 0.04)
        for k, i in enumerate(range(lo + 1, hi)):
            times[i] = (t0 + k * step, t0 + (k + 1) * step)

    return times


# --------------------------------------------------------------------------
# Synthesis
# --------------------------------------------------------------------------

async def synth_one(utt, outdir, sem, attempts=4):
    path = os.path.join(outdir, "audio", utt["id"] + ".mp3")
    spoken = to_spoken(utt["text"])
    last_err = None

    for attempt in range(attempts):
        async with sem:
            try:
                comm = edge_tts.Communicate(
                    spoken,
                    utt["voice"],
                    rate=utt.get("rate", "+0%"),
                    pitch=utt.get("pitch", "+0Hz"),
                    boundary="WordBoundary",
                )
                words, buf = [], bytearray()
                async for ch in comm.stream():
                    if ch["type"] == "audio":
                        buf += ch["data"]
                    elif ch["type"] == "WordBoundary":
                        words.append({
                            "t": ch["offset"] / 1e7,
                            "d": ch["duration"] / 1e7,
                            "w": ch["text"],
                        })
                if not buf:
                    raise RuntimeError("empty audio")
                with open(path, "wb") as f:
                    f.write(buf)
                break
            except Exception as e:  # noqa: BLE001 - retry any transport failure
                last_err = e
                await asyncio.sleep(1.5 * (attempt + 1))
    else:
        raise RuntimeError(f"TTS failed for {utt['id']}: {last_err}")

    dur = probe(path)
    disp = display_words(utt["text"])
    times = align(disp, words)
    # Clamp to the real audio duration
    wt = []
    for (s, e, w), tt in zip(disp, times):
        a, b = tt if tt else (0.0, dur)
        wt.append({"w": w, "s": round(min(a, dur), 3), "e": round(min(b, dur), 3)})

    return {
        "id": utt["id"],
        "file": "audio/" + utt["id"] + ".mp3",
        "text": utt["text"],
        "lang": utt.get("lang", "en"),
        "voice": utt["voice"],
        "dur": round(dur, 3),
        "words": wt,
        "meta": utt.get("meta", {}),
    }


def probe(path):
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "csv=p=0", path],
        capture_output=True, text=True, check=True)
    return float(out.stdout.strip())


# --------------------------------------------------------------------------
# Utterance plans
# --------------------------------------------------------------------------

def plan_reading(c):
    nv, nr = c["narrator"]["voice"], c["narrator"].get("rate", "+0%")
    u = []

    def add(uid, text, voice=nv, rate=nr, lang="en", **meta):
        u.append({"id": uid, "text": text, "voice": voice, "rate": rate,
                  "lang": lang, "meta": meta})

    add("title", f"{c['number']}. {c['title']}.")
    p = c["preview"]
    for i, ln in enumerate(p["lines"]):
        add(f"pv{i}", ln["en"])
    add("pvt", p["teaser"]["en"], rate="-12%")

    v = c["vocab"]
    for i, it in enumerate(v["items"]):
        add(f"vc{i}", f"{it['term']}. {it['def']}.")

    for pi, para in enumerate(c["paragraphs"]):
        for li, ln in enumerate(para["lines"]):
            add(f"p{pi}l{li}", ln["en"])

    add("take", c["takeaway"]["en"], rate="-12%")

    q = c["questions"]
    for i, it in enumerate(q["items"]):
        add(f"q{i}", it["en"])

    add("disc", c["discussion"]["en"], rate="-10%")
    return u


def plan_dialogue(c):
    nv, nr = c["narrator"]["voice"], c["narrator"].get("rate", "+0%")
    AR_N, AR_NR = "ar-SY-LaithNeural", "-4%"
    u = []

    def add(uid, text, voice, rate, lang="en", **meta):
        u.append({"id": uid, "text": text, "voice": voice, "rate": rate,
                  "lang": lang, "meta": meta})

    add("title", f"{c['number']}. {c['title']}.", nv, nr)
    p = c["preview"]
    for i, ln in enumerate(p["lines"]):
        add(f"pv{i}", ln["en"], nv, nr)
    add("pvt", p["teaser"]["en"], nv, "-12%")

    # Arabic is spoken only when the lesson asks for it. With
    # "arabicAudio": false the Arabic stays on screen as subtitles and no
    # dubbing time is reserved anywhere in the video.
    dub = c.get("arabicAudio", True)

    for i, it in enumerate(c["vocab"]["items"]):
        add(f"vc{i}", it["term"], nv, "-10%")
        if dub:
            add(f"vc{i}a", it["ar"], AR_N, AR_NR, lang="ar")

    for i, ln in enumerate(c["dialogue"]):
        sp = c["speakers"][ln["sp"]]
        add(f"d{i}", ln["en"], sp["voice"], sp.get("rate", "+0%"), sp=ln["sp"])
        if dub:
            add(f"d{i}a", ln["ar"], sp["arVoice"], sp.get("arRate", "+0%"),
                lang="ar", sp=ln["sp"])

    add("take", c["takeaway"]["en"], nv, "-12%")
    if dub:
        add("takea", c["takeaway"]["ar"], AR_N, "-8%", lang="ar")

    for i, it in enumerate(c["questions"]["items"]):
        add(f"q{i}", it["en"], nv, nr)

    add("disc", c["discussion"]["en"], nv, "-10%")
    return u


# --------------------------------------------------------------------------

async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("content")
    ap.add_argument("outdir")
    ap.add_argument("--concurrency", type=int, default=3)
    args = ap.parse_args()

    with open(args.content, encoding="utf-8") as f:
        c = json.load(f)

    os.makedirs(os.path.join(args.outdir, "audio"), exist_ok=True)
    utts = plan_reading(c) if c["kind"] == "reading" else plan_dialogue(c)
    print(f"[tts] {c['id']}: {len(utts)} utterances", flush=True)

    sem = asyncio.Semaphore(args.concurrency)
    done = 0
    results = []

    async def run(utt):
        nonlocal done
        r = await synth_one(utt, args.outdir, sem)
        done += 1
        print(f"  [{done}/{len(utts)}] {r['id']:<8} {r['dur']:>6.2f}s  "
              f"{r['text'][:58]}", flush=True)
        return r

    results = await asyncio.gather(*(run(x) for x in utts))

    by_id = {r["id"]: r for r in results}
    out = {"id": c["id"], "kind": c["kind"],
           "utterances": [by_id[u["id"]] for u in utts]}
    path = os.path.join(args.outdir, "voice.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=1)
    total = sum(r["dur"] for r in results)
    print(f"[tts] wrote {path}  ({total:.1f}s of speech)")


if __name__ == "__main__":
    sys.exit(asyncio.run(main()) or 0)
