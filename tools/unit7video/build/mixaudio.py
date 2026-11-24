#!/usr/bin/env python3
"""
Lay every speech clip onto one continuous track at its exact timeline offset.

Silence is generated between clips rather than mixed, so the result is
sample-exact against the frame timeline. Usage: mixaudio.py <outdir>
"""
import json
import os
import subprocess
import sys

SR = 48000


def run(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        sys.stderr.write(" ".join(cmd) + "\n" + r.stderr[-2500:] + "\n")
        raise SystemExit(1)
    return r


def main(outdir):
    tl = json.load(open(os.path.join(outdir, "timeline.json"), encoding="utf-8"))
    work = os.path.join(outdir, "awork")
    os.makedirs(work, exist_ok=True)

    clips = sorted(tl["audio"], key=lambda c: c["at"])
    parts, cursor, n = [], 0.0, 0

    def silence(dur):
        nonlocal n
        p = os.path.join(work, f"sil{n:03d}.wav"); n += 1
        run(["ffmpeg", "-v", "error", "-y", "-f", "lavfi",
             "-i", f"anullsrc=r={SR}:cl=mono", "-t", f"{dur:.6f}",
             "-c:a", "pcm_s16le", p])
        return p

    def speech(src, dur):
        """Decode to wav and force it to exactly `dur`, so the next clip can
        start precisely where the timeline (and the subtitles) expect."""
        nonlocal n
        p = os.path.join(work, f"spk{n:03d}.wav"); n += 1
        run(["ffmpeg", "-v", "error", "-y", "-i", os.path.join(outdir, src),
             "-af", "apad", "-t", f"{dur:.6f}",
             "-ar", str(SR), "-ac", "1", "-c:a", "pcm_s16le", p])
        return p

    for c in clips:
        pad = c["at"] - cursor
        if pad > 0.001:
            parts.append(silence(pad))
        elif pad < -0.001:
            print(f"  ! overlap {abs(pad):.3f}s at {c['at']:.2f}s ({c['file']})")
        parts.append(speech(c["file"], c["dur"]))
        cursor = c["at"] + c["dur"]

    tail = tl["duration"] - cursor
    if tail > 0.001:
        parts.append(silence(tail))

    lst = os.path.join(work, "concat.txt")
    with open(lst, "w") as f:
        for p in parts:
            f.write("file '" + os.path.abspath(p).replace("'", "'\\''") + "'\n")

    raw = os.path.join(work, "raw.wav")
    run(["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", lst,
         "-c:a", "pcm_s16le", raw])

    out = os.path.join(outdir, "voice.m4a")
    run(["ffmpeg", "-v", "error", "-y", "-i", raw,
         "-af", "highpass=f=70,loudnorm=I=-16:TP=-1.5:LRA=11,alimiter=limit=0.97",
         "-ar", "48000", "-ac", "2", "-c:a", "aac", "-b:a", "192k", out])

    got = float(run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                     "-of", "csv=p=0", out]).stdout.strip())
    print(f"[audio] {tl['id']}: {len(clips)} clips -> {out}  "
          f"{got:.2f}s (timeline {tl['duration']:.2f}s, drift {got - tl['duration']:+.3f}s)")
    for p in parts:
        os.remove(p)
    os.remove(raw); os.remove(lst)
    os.rmdir(work)


if __name__ == "__main__":
    main(sys.argv[1])
