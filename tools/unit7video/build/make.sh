#!/usr/bin/env bash
# Build one lesson video end to end.
#   build/make.sh content/text1.json [workers]
# Stages are skippable: SKIP_TTS=1 reuses voice.json, SKIP_FRAMES=1 reuses frames.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CONTENT="$1"
WORKERS="${2:-4}"
ID="$(python3 -c "import json,sys;print(json.load(open(sys.argv[1]))['id'])" "$CONTENT")"
OUT="$ROOT/out/$ID"
mkdir -p "$OUT"

cd "$ROOT"
echo "=== $ID ==============================================="

if [ "${SKIP_TTS:-0}" != "1" ] || [ ! -f "$OUT/voice.json" ]; then
  python3 build/tts.py "$CONTENT" "$OUT"
fi

node build/timeline.js "$CONTENT" "$OUT"
python3 build/mixaudio.py "$OUT"

if [ "${SKIP_FRAMES:-0}" != "1" ]; then
  rm -rf "$OUT/frames"
  node build/capture.js "$OUT" --workers "$WORKERS"
fi

echo "[mux] encoding $ID.mp4"
ffmpeg -v warning -stats -y \
  -framerate 25 -i "$OUT/frames/f%06d.jpg" \
  -i "$OUT/voice.m4a" \
  -map 0:v -map 1:a \
  -c:v libx264 -preset medium -crf 19 -pix_fmt yuv420p \
  -profile:v high -level 4.2 -g 50 \
  -c:a copy -shortest -movflags +faststart \
  "$ROOT/out/$ID.mp4"

SIZE=$(du -h "$ROOT/out/$ID.mp4" | cut -f1)
DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$ROOT/out/$ID.mp4")
printf '[done] %s  %s  %.1fs\n' "$ROOT/out/$ID.mp4" "$SIZE" "$DUR"
