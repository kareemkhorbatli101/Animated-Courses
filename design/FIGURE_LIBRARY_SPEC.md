# Figure library specification

250–300 figures per book, roughly one per exercise, with a hard rule: **no
figure is decorative.** A figure earns its place by being the thing the task
operates on, or by carrying information the text would need a paragraph for.

---

## Primitives

Each is a parametric generator: data in, labelled vector art out, at any size,
in the house palette, legible at print size and in greyscale.

### Anatomical
- `tooth_section(type, layers, labels)` — crown/root cross-section: enamel,
  dentine, pulp, cementum, periodontal ligament, alveolar bone, nerve, vessels
- `dentition_map(notation, highlight)` — full mouth, FDI by default, with
  Universal and Palmer shown alongside for the notation unit
- `quadrant(number, teeth, callouts)`
- `oral_cavity(labels)` — tongue, palate, floor, vestibule, gingiva
- `head_neck(region, labels)` — for the student series' anatomy units

### Instruments and equipment
- `instrument_plate(items, callouts)` — a tray of instruments, each named, with
  working end, shank and handle callable out
- `tray_layout(procedure)` — what is set out for which procedure, in order
- `unit_diagram(parts)` — the dental chair and unit, labelled
- `equipment_cutaway(item, labels)` — autoclave, curing light, X-ray head

### Process
- `step_sequence(steps, hazards)` — numbered procedure steps, with the stop
  points marked
- `flow(nodes, edges)` — decision and referral pathways
- `timeline(events, scale)` — an appointment, a shift, a treatment plan

### Document
- `form_annotated(type, fields, callouts)` — a record card, a consent form, an
  estimate, a referral letter, a prescription, with each field called out
- `label_anatomy(kind)` — a medicine label, a blister pack, a sterilisation
  pouch indicator

### Language
- `phrase_box(function, chunks)` — the preview's phrase bank, as a usable panel
- `set_plate(items)` — the lexical set as a labelled picture, not a word list
- `contrast(loose, precise)` — the grammar figure: vague vs precise, both real
- `morph_builder(parts)` — **[student]** prefix + root + suffix assembling into
  terms, with the join rules visible
- `spec_card(lines)` — the six-line tasking card, retained from the First Edition
- `datatable(headers, rows)` — retained, for evidence boxes

---

## Every figure carries

```
id              FIG 3.12  (book.unit.sequence)
type            which primitive
caption         one sentence, saying what to look at, not what it is
alt_text        a full description for a reader who cannot see it
cross_ref       the exercise number that uses it
licence_record  tier 1 generated, or tier 2/3 with source, licence, attribution
greyscale_ok    checked: the figure survives monochrome printing
```

## Rules

1. **No decoration.** Every figure is referenced by number from a task or a text.
2. **Labels are in the learner's level of English.** A figure at A2 is labelled
   with A2 words; the Latin sits beside it, marked as the technical term.
3. **One idea per figure.** A figure that needs two captions is two figures.
4. **Colour carries no meaning alone** — shape, label or hatching repeats it.
5. **Adapted third-party art is redrawn to house conventions** before labelling:
   same stroke weight, same label style, same palette.
6. **The notation figure is standard across both series** so a learner moving
   between them sees the same mouth map.
