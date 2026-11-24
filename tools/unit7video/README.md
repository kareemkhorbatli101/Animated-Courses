# Unit 7 lesson videos

Turns one JSON content file into a finished 1080p25 MP4: neural narration,
word-synced icon cues, karaoke English subtitles and full Arabic translation.

```bash
build/make.sh content/text1.json 4      # 4 capture workers
```

Output lands in `out/<id>.mp4` (gitignored — recordings never live in this repo).

## Stages

| Stage | Script | What it does |
|---|---|---|
| 1 | `build/tts.py` | Synthesises every line with Microsoft Edge neural TTS and records **word-level timings**. Writes `out/<id>/voice.json`. |
| 2 | `build/timeline.js` | Turns content + measured durations into a frame-accurate segment list, `out/<id>/timeline.json`. |
| 3 | `build/mixaudio.py` | Lays each clip at its exact timeline offset (silence generated between, never mixed), loudness-normalised to −16 LUFS. |
| 4 | `build/capture.js` | Renders `lib/scene.html` frame by frame in Chromium across N workers. |
| 5 | `ffmpeg` | Muxes the JPEG sequence with the voice track. |

Skip stages when iterating: `SKIP_TTS=1`, `SKIP_FRAMES=1`.

Review stills without a full render:

```bash
node build/capture.js out/text1 --shots 3.5,88,197
```

## Why it stays in sync

`tts.py` asks Edge TTS for `WordBoundary` events, so every spoken word has a
start and end time. Edge returns tokens in the original spelling, so they align
1:1 with the on-screen text; where a spoken-form rewrite changes the token count
(`INV-2043` → "invoice 2043"), `align()` reconciles the two with difflib and
interpolates the gaps. Icon cues reference a word (`"at": "transposition"`) and
fire at that word's real timestamp.

The renderer is a pure function of time — `window.__seek(t)` — with no CSS
animations or wall-clock reads, so frame N is identical whichever worker draws
it. That is what makes parallel capture safe.

## Adding a video

Copy `content/text1.json` (reading) or `content/conv1.json` (dialogue) and
replace the content. Keys that matter:

- `cues[].at` — the English word the icon should fire on
- `cues[].icon` — a name from `lib/icons.js` (`icon()` falls back if missing)
- `cues[].tone` — `good` / `bad` / `warn` / `key` tints the card
- `cues[].term: true` — adds the KEY TERM ribbon
- `speakers[].voice` / `.arVoice` — gender-matched English and Arabic voices

Readings are narrated in English with Arabic subtitles; dialogues speak every
line twice, English then Arabic, in the speaker's own voice.

## Requirements

`edge-tts` (pip), `playwright` + Chromium, `ffmpeg`. `tts.py` points edge-tts at
the session proxy CA so its websocket can connect.
