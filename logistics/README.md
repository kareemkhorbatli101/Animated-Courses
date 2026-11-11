# Logistics — when shipping and receiving go wrong

An offline, interactive supplement to **Al-Hasan International Student Book 2 (CEFR B1)**:
six readings and six conversations about twelve different things that go wrong between a
supplier's gate and your own, with pre- and post-exercises for each and **audio produced by
the browser's own `speechSynthesis`** — the voices installed on the operating system. No
audio files, no build step, no server: about 150 KB in total.

Open `index.html`. See `README.txt` for the classroom notes.

## Shape

| | |
| --- | --- |
| lessons | 12 — six `reading`, six `listening` |
| exercises | 180 (15 a lesson), of eight types |
| text | ~3,000 words of readings and dialogue |
| storage | `localStorage`, per lesson, per browser |

Each lesson runs **Before → Text/Conversation → Comprehension → The words → After**.
A listening keeps its transcript hidden until the learner asks for it, which is what makes
the audio do real work.

## Files

| File | What it is |
| --- | --- |
| `index.html` | the shell; loads the engine and the twelve data files |
| `assets/app.js` | router, the eight exercise renderers and checkers, scoring, and the speech layer |
| `assets/site.css` | the Book 2 palette, cards, player, print rules |
| `assets/data/rN.js`, `cN.js` | one lesson each — text, glossary and every exercise |

Data files are plain `AHL.lesson({...})` calls loaded by `<script>` tags rather than
`fetch`, so the site runs from `file://` with no server.

## Adding a lesson

Copy a data file, change `id`, `kind`, `n`, `title`, and add a `<script>` line to
`index.html`. Exercise objects are:

```js
{t:"mcq",   q:"…", opts:[…], a:0, why:"…"}
{t:"multi", q:"…", opts:[…], a:[0,2]}
{t:"tf",    q:"…", a:true}
{t:"gap",   q:"…", bank:[…], gaps:[{before:"…", after:"…", a:["answer","variant"]}]}
{t:"match", q:"…", pairs:[["left","right"], …]}
{t:"order", q:"…", items:[…]}            // listed in the correct order
{t:"short", q:"…", model:"…"}            // self-marked against a model
{t:"write", q:"…", model:"…"}
```

The source of the texts is `teaching/AlHasan_Logistics_Problems_Pack.md`, which is also
the printable .docx handout.
