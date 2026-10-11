# The A1 visual system

New machinery. It shares no code with A2's `tools/figures.py`, and this
document says why, what replaced it, and what the replacement is built on.

---

## 1. What went wrong, stated exactly

A2's figures were rounded rectangles with sentences inside them. A learner
looking at one got nothing they did not get from reading the line underneath.
The specific failures, read off a contact sheet of A2 Unit 1:

| | Fault |
|---|---|
| 1 | **Almost nothing was a picture.** Of twenty figures, sixteen were a card containing prose. |
| 2 | **There were no characters.** Amina, Maya, Tomas and Dani were the *same grey pill with a circle on top*. A recurring character you cannot recognise is not a recurring character. |
| 3 | **No scenes.** Nothing showed a place, an action or a moment. |
| 4 | **Four cold colours** — navy, pale blue, white, one teal. |
| 5 | **No shading.** Everything was flat fill, which is the worst case for recognition (see §2). |
| 6 | **The text in the figure repeated the text of the exercise** — a straight violation of the redundancy principle. |

Every one of those passed A2's 269 checks, because the checks measured
palette compliance, overlap and byte-stability. They measured whether a
figure was *correctly produced*. None of them asked whether it was *a
picture*.

---

## 2. What the research says, and what it forces

**Photographs beat line drawings at recognition.** In eye-tracking work
comparing the two, participants gave significantly greater fixation and
first-pass gaze duration to photographs, and object recognition was
*facilitated by colour photographs compared to line drawings*. The reason
given is that photographs carry colour, luminance, texture and shading.
Neuroimaging work agrees: drawings "abstract colour and some texture features
while retaining most of the contours", and decode less accurately than
photographs.

We are not allowed photographs. So the design consequence is not "draw
simply" — it is the opposite:

> **Rule 1. Every solid carries a lighter face and a darker edge.**
> A flat drawing throws away three of the four cues that make a photograph
> easy to recognise. We cannot have texture. We can have colour, luminance
> and shading, and we take all three.

**A face on the page is worth almost nothing; a named person doing something
is worth a great deal.** Mayer's image principle — put the speaker's picture
on screen — is a median *d* of about **0.2** across nine tests, with mixed
results. The personalization principle — a named person, conversational
wording, addressing the learner — is supported in 14 of 17 tests at a median
*d* of about **0.79**, one of the largest effects in the literature. A recent
meta-analysis of 92 articles and 591 effects puts personalization in its top
tier and embodiment a tier below.

> **Rule 2. No portrait galleries.** A character appears because they are
> doing the thing the language describes, and they speak in a bubble. A
> drawing of a person next to a sentence about that person is the image
> principle, which barely works. A drawing of that person *saying* the
> sentence is personalization, which works.

**Over half the images in published coursebooks are decorative.** That is the
background finding this system is designed against.

> **Rule 3. A figure declares one of four jobs, and decoration is not one.**
> `data` (the task cannot be done without it) · `contrast` (two forms, side
> by side) · `lexis` (it supplies the meaning of new words) · `document`
> (it is a piece of real print). A figure that cannot name one is not drawn.
> The job is an argument in the code, not a comment, and `check_visual.py`
> reads it.

**Beginners read slowly, often from a photocopy.** WCAG 2.2 wants 4.5:1 for
text, 3:1 for everything else, and colour never as the only channel.

> **Rule 4. The engine darkens a colour until white text on it is legal.**
> `draw.deep()` is called wherever white sits on a fill. This is a floor on
> *contrast*, which is the only kind of floor this course permits — it is a
> floor on legibility, not on difficulty.

---

## 3. The machinery

Five modules, about 2,100 lines, all new.

| File | What it is |
|---|---|
| `tools/draw.py` | The core: an SVG canvas, 55 colours, shaded solids, text measured against the real font file, WCAG contrast, label-box collision detection |
| `tools/people.py` | The character rig: a person assembled from parts, 12 poses, 11 hairstyles, 5 expressions, 8 garment types, 6 skin tones, 8 hair colours |
| `tools/cast.py` | The eight people of Hill Road |
| `tools/world.py` | Places and things: shopfronts, counters, doorways, buses, bus stops, window walls, 16 props, and speech |
| `tools/plates.py` | The 22 figure types, each taking a declared job |

### 3.1 The character rig

A person is drawn from a skeleton: head, neck, torso, two arms, two legs, each
a shaded shape. Poses are **joint offsets from the shoulder and hip**, already
signed per limb — there is no sign arithmetic anywhere in the file, because
the first version had some and produced eight characters with their arms
inside their own torsos.

The near arm is drawn after the torso and the far arm before it, so a raised
hand reads in front of the body. Hair is split into a **back mass** (puffs,
long locks, a headscarf) drawn before the head and a **front fringe** drawn
after the face — the first version drew all hair last and gave two characters
no face at all.

### 3.2 Recognisable at one inch

The hard constraint. A character in a four-up grid prints about an inch tall,
and at that size a face is three pixels. Identity therefore rides on three
channels, in this order of strength:

1. **silhouette** — hair shape and garment shape, readable in black
2. **colour** — one signature garment colour nobody else wears
3. **prop** — the thing this person always has

The face is fourth, and carries expression, not identity. **No two characters
may share two of the three channels**; `check_visual.py` fails the book if
they do.

### 3.3 The cast of Hill Road

| | Who | Silhouette | Colour | Prop |
|---|---|---|---|---|
| Nadia | cook at the cafe | curly, apron | red | tray |
| Sam | driver, bus 12 | buzz, uniform | navy | timetable |
| Lili | student | bob, tee | yellow | backpack |
| Marek | caretaker | short grey + beard, overall | lime | toolbox |
| Fatima | nurse at the clinic | hijab, tunic | teal | lanyard badge |
| Ben | works in the phone shop | wavy ginger + glasses, shirt | orange | phone |
| Rosa | neighbour | white bun + glasses, cardigan | purple | basket |
| Omar | Marek's grandson | afro, tee | sky | ball |

Six people, one street, one bus route. An A1 learner needs a world small
enough to hold in their head.

### 3.4 Speech

`world.say()` places a bubble beside a person's head and runs the tail to the
near edge of the face, clamping its length. A tail longer than about a head's
width stops reading as speech and starts reading as a spear — which is what
the first café scene produced. Two speakers in one plate are staggered
vertically on purpose: speech at one height across a picture collides the
moment a line gets long, and a conversation reads better staggered anyway.

### 3.5 The plates

Twenty-two types in five classes: **S** scenes (street, two-person
conversations in five places, panel strips), **D** documents (badges, forms,
phone screens, registers, signs), **G** grammar made visible (block sentences,
the contraction zipper, the alphabet by sound, numbers as quantities,
question-and-answer pairs), **P** people (rows, picture cards, can-do lists),
**T** tables carrying real data.

---

## 4. What the engine checks, and what it cannot

Every plate returns a Canvas that records, as it draws:

- **contrast** — every label against the fill it sits on, flagged under 4.5:1
- **overflow** — every string measured against the box it was given
- **collision** — every label box against every other label box
- **jobs** — the declared job, checked against the permitted four

Unit 1's twenty-two figures pass all four with zero findings. They did not at
first: the checker caught eleven contrast failures, one overflow, and two
speech bubbles colliding.

**What it cannot check** is whether the picture is right. Figure 14 renders a
line saying *"Hello, Nadia. This is Omar"* — and in the first build, Omar was
not in the picture. Every automated check passed. It was caught by looking.
That is the standing argument for the three adjudication passes in the run
plan: the checks catch what is malformed, a reader catches what is wrong.

---

## 5. Parity with American Headway on the visual side

| | AH Starter | EFDL A1 |
|---|---|---|
| Register | photographs, every page | drawn, shaded, 22 per unit |
| Recurring cast | yes | 8, each recognisable at one inch |
| Scenes | yes | 5 places, any two characters, any pose |
| Real documents | some | 8 kinds, every unit |
| Grammar diagrams | Grammar Spot boxes | 6 diagram types; form shown, not stated |
| Decorative images | over half, per the literature | **none** — there is no such job |
| Contrast compliance | not stated | every label, enforced in code |
| Checkable | no | 14 passes per figure |

The honest row is the first one. A beginners' course with no photographic
register is a real difference from the book we are matching, and it is a
deliberate trade: drawn figures can be checked, generated, corrected and
re-rendered byte-for-byte, and photographs cannot. Everything below that row
is ours.
