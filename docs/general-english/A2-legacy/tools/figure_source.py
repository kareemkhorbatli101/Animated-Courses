#!/usr/bin/env python3
"""Pull the raw source text each new figure slot draws, straight out of the unit.

Nine units at 27 new figures each is 243 figures. Retyping their content by
hand is how a word that is not in the unit, or a phrase the device counter is
watching, gets into a label -- so nothing is retyped. This reads the markdown
and prints exactly what each slot has to work with, keyed by slot number, and
the content module is written against that.

    python3 tools/figure_source.py a21 2
"""
from __future__ import annotations
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE]
import runner as R   # noqa: E402

# (part, 1-based sub index) for every new slot; None means the part's leading
# text, above the first sub-heading.
WHERE = {
    2: ('Warm Up', 1), 3: ('Warm Up', 2),
    5: ('Part 1', 1), 6: ('Part 1', 2), 9: ('Part 1', 6), 10: ('Part 1', 7),
    11: ('Part 2', 1), 14: ('Part 2', 4), 15: ('Part 2', 5),
    17: ('Part 3', 2), 18: ('Part 3', 3),
    19: ('Part 4', 1), 20: ('Part 4', 2), 22: ('Part 4', 4),
    24: ('Part 5', 2),
    27: ('Part 6', 2), 28: ('Part 6', 3), 29: ('Part 6', 4),
    31: ('Part 7', 2), 32: ('Part 7', 3), 33: ('Part 7', 4), 34: ('Part 7', 5),
    36: ('Part 8', 1),
    37: ('Part 9', None), 38: ('Part 9', 1),
    39: ('Part 10', 1), 41: ('Part 10', 3),
}

JOB = {2: 'word_grid', 3: 'bank_strip', 5: 'word_grid', 6: 'sound_shape',
       9: 'bank_strip', 10: 'writing_frame', 11: 'annotated_lines',
       14: 'sort_bins', 15: 'error_pairs', 17: 'dialogue_strip',
       18: 'match_columns', 19: 'question_cards', 20: 'info_gap_pair',
       22: 'talk_shape', 24: 'word_grid', 27: 'writing_frame',
       28: 'writing_frame', 29: 'writing_frame', 31: 'dialogue_strip',
       32: 'sequence_steps', 33: 'cue_cards', 34: 'writing_frame',
       36: 'word_grid', 37: 'close_scene', 38: 'decision_fork',
       39: 'bank_strip', 41: 'glossary_grid'}


def _clean(s):
    return re.sub(r'\s+', ' ', s.replace('**', '').replace('*', '')).strip()


def column_a(lines):
    """`| 1. | **Word** | ____ |` -> ['Word', ...]"""
    return [_clean(m.group(1)) for l in lines
            for m in [re.match(r'^\|\s*\d+\.\s*\|\s*(.+?)\s*\|\s*_+\s*\|$', l)] if m]


def column_b(lines):
    """`| **a)** | text |` -> ['text', ...]"""
    return [_clean(m.group(2)) for l in lines
            for m in [re.match(r'^\|\s*\*\*([a-h])\)\*\*\s*\|\s*(.+?)\s*\|$', l)] if m]


def word_bank(lines):
    for l in lines:
        m = re.search(r'\*\*Word bank:\*\*\s*(.+)$', l)
        if m:
            return [_clean(w) for w in m.group(1).split('|')]
    return []


def pronunciation(lines):
    """`> word - **syl-SYL**` -> (word, [syllables], stressed_index)."""
    out = []
    for l in lines:
        m = re.match(r'^>?\s*([a-z’\- ]+?)\s*[—–-]\s*\*\*([A-Za-z\-’]+)\*\*\s*$', l)
        if not m:
            continue
        word, pat = _clean(m.group(1)), m.group(2)
        syls = pat.split('-')
        st = next((i for i, s in enumerate(syls) if s.isupper() and len(s) > 0), 0)
        out.append((word, [s.lower() for s in syls], st))
    return out


PRON_LINE = re.compile(r'^>\s*(.+?)\s*[\u2014\u2013]\s*\*\*(.+?)\*\*\s*(.*)$')


def pron_kind(lines):
    """What the Pronunciation sub-section actually teaches, and its rows.

    Four different things across ten units, and one figure job cannot draw all
    four honestly:

      stress  `routine - **rou-TINE**`              -> sound_shape
      sound   `walked - **/t/**`                    -> sound_groups
      pair    `go - **went**`                       -> function_map
      beat    `I can swim - **can** is weak: /ken/` -> annotated_lines

    Returns (kind, rows).
    """
    rows = []
    for l in lines:
        m = PRON_LINE.match(l.strip())
        if m:
            rows.append((_clean(m.group(1)), m.group(2).strip(),
                         _clean(m.group(3))))
    if not rows:
        # Unit 10 marks the beat by bolding the word INSIDE the phrase rather
        # than naming it after a dash: `**Mix** it well - the verb takes the
        # beat`. Same teaching point, other way round on the line.
        beats = []
        for l in lines:
            m = re.match(r'^>\s*(.*?\*\*(.+?)\*\*.*?)\s*[\u2014\u2013]\s*\S',
                         l.strip())
            if m:
                beats.append((_clean(m.group(1)), _clean(m.group(2))))
        if beats:
            return 'beat', beats
        beats = _beat_after_dash(lines)
        if beats:
            return 'beat', beats
        return 'none', []
    if any(t for _, _, t in rows):
        return 'beat', [(a, b) for a, b, _ in rows if t_ok(a)]
    if all(b.startswith('/') for _, b, _ in rows):
        groups = {}
        for a, b, _ in rows:
            groups.setdefault(b, []).append(a)
        return 'sound', list(groups.items())
    if all(re.fullmatch(r"[A-Za-z\u2019'-]+", b) for _, b, _ in rows) \
            and any(c.isupper() for _, b, _ in rows for c in b) \
            and any('-' in b for _, b, _ in rows):
        out = []
        for a, b, _ in rows:
            syls = b.split('-')
            st = next((i for i, x in enumerate(syls) if x.isupper()), 0)
            out.append((a, [x.lower() for x in syls], st))
        return 'stress', out
    return 'pair', [(a, b) for a, b, _ in rows]


def _beat_after_dash(lines):
    """`> You must wait - *must* is short and its **t** is soft`

    Every Pronunciation section in A2.2 is written this way: a phrase, a dash,
    and an explanation that italicises the word the phrase is about. The word
    to ring is named in the explanation, or in the section's own rubric
    ("Listen to *going to*"), and it has to be found in the phrase rather than
    assumed -- `going to` is in three of Unit 11's four lines and the fourth
    says `Are you going to come?`.
    """
    rub = next((l for l in lines if 'Listen' in l and l.strip().startswith('> **')), '')
    topics = re.findall(r'\*([^*]{2,20}?)\*', rub.replace('**', ''))
    rows = []
    for l in lines:
        t = l.strip()
        if not t.startswith('>') or t.startswith('> **'):
            continue
        t = t.lstrip('> ').strip()
        m = re.match(r'^([^:\u2014\u2013]{4,70}?)\s*[\u2014\u2013]\s*(.+)$', t)
        if not m:
            continue
        phrase = _clean(m.group(1))
        if len(phrase.split()) > 9 or not phrase:
            continue
        expl = m.group(2)
        cands = [c for c in topics + re.findall(r'\*([^*]{1,20}?)\*', expl) if c.strip()]
        hit = ''
        for c in cands:
            mm = re.search(rf'(?<![\w\u2019]){re.escape(c.strip())}(?![\w\u2019])',
                           phrase, re.I)
            if mm:
                hit = phrase[mm.start():mm.end()]
                break
        rows.append((phrase, hit))
    return rows[:4]


def t_ok(_s):
    return True


def numbered(lines):
    return [_clean(m.group(1)) for l in lines
            for m in [re.match(r'^\d+\.\s+(.*\S)\s*$', l)] if m]


def bullets(lines):
    return [_clean(m.group(1)) for l in lines
            for m in [re.match(r'^-\s+(.*\S)\s*$', l)] if m]


def model(lines):
    """The paragraph under **Model - read this first:**."""
    for i, l in enumerate(lines):
        if l.startswith('**Model'):
            for n in lines[i + 1:]:
                if n.strip().startswith('>') and len(n) > 10:
                    return _clean(n.lstrip('> '))
    return ''


_NOT_SPEAKERS = {'Gloss', 'Model', 'Plan', 'Remember', 'Harvest', 'Stretch',
                 'Useful language', 'Useful phrases', 'Word bank', 'Answer frame',
                 'Phrase bank', 'Discussion frames', 'Before you read',
                 'Before you listen', 'Check', 'Watch out'}


def script(lines):
    """A printed dialogue -> [(speaker, line), ...]."""
    body = ''
    for l in lines:
        if l.strip().startswith('>') and re.search(r'[A-Z][a-z]+( [A-Z][a-z]+)?:', l):
            body = _clean(l.lstrip('> '))
            break
    if not body:
        return []
    parts = re.split(r'(?<=[.?!’"])\s+(?=(?:Mr |Mrs |Ms )?[A-Z][a-zA-Z’]*(?: [A-Z][a-z]+)?:)', body)
    out = []
    for p in parts:
        m = re.match(r'^((?:Mr |Mrs |Ms )?[A-Z][a-zA-Z’]*(?: [A-Z][a-z]+)?):\s*(.+)$', p)
        if m and m.group(1).strip() not in _NOT_SPEAKERS:
            out.append((m.group(1).strip(), m.group(2).strip()))
    return out


def reading(lines):
    """The longest blockquote paragraph: the part's reading text."""
    cands = [_clean(l.lstrip('> ')) for l in lines
             if l.strip().startswith('>') and len(l) > 200]
    return max(cands, key=len) if cands else ''


def cards(lines):
    """`Card A - Role: a - b - c` -> [(title, [items]), ...]"""
    out = []
    for l in lines:
        m = re.match(r'^>?\s*(Card [AB][^:]*):\s*(.+?)\.?\s*$', _clean(l))
        if m:
            items = [x.strip() for x in re.split(r'\s*·\s*', m.group(2))]
            out.append((m.group(1).strip(), items))
    return out


def blanks(lines):
    """`____ Do the thing.` -> ['Do the thing.', ...] (the ordering task)."""
    return [_clean(m.group(1)) for l in lines
            for m in [re.match(r'^_+\s+(.*\S)\s*$', l)] if m]


def glossary(u):
    for p in u.parts:
        for s in p.subs:
            if 'Glossary' in s.heading:
                for l in s.lines:
                    if l.strip().startswith('>') and '·' in l:
                        return [w.strip() for w in _clean(l.lstrip('> ')).split('·')]
    return []


def notice(lines):
    """The Notice sub-section's own prose: the blockquote that is a paragraph
    rather than the one-line rubric above it."""
    cands = [_clean(l.lstrip('> ')) for l in lines
             if l.strip().startswith('>') and len(l) > 110
             and not l.strip().startswith('> **')]
    return cands[0] if cands else ''


def students(lines):
    """`Student A - your flat: a - b - c` -> [(who, what, [facts]), ...]"""
    out = []
    for l in lines:
        m = re.match(r'^>?\s*(Student [AB])\s*[\u2014\u2013-]\s*([^:]*):\s*(.+?)\.?\s*$',
                     _clean(l))
        if m:
            facts = [x.strip() for x in re.split(r'\s*\u00b7\s*', m.group(3))]
            out.append((m.group(1), m.group(2).strip(), facts))
    return out


def sentences(text):
    """Split a prose paragraph into sentences, keeping the full stop."""
    return [x.strip() for x in re.findall(r'[^.!?]+[.!?]', text or '') if x.strip()]


def task(lines):
    """The bold instruction the sub-section opens with."""
    for l in lines:
        m = re.match(r'^>\s*\*\*(.+?)\*\*\s*$', l)
        if m:
            return _clean(m.group(1))
    return ''


def dump(book, num):
    ctx = R.load_ctx(book)
    units, ctx._keys = R.discover(book)
    u = [x for x in units if x.num == num][0]
    body = u.text.lower().replace('’', "'")
    print(f'===== {book} Unit {u.num}: {u.title} =====')
    print(f'glossary: {glossary(u)}')
    for slot in sorted(WHERE):
        part_name, idx = WHERE[slot]
        p = u.part(part_name)
        lines = p.leading if idx is None else p.subs[idx - 1].lines
        head = part_name if idx is None else p.subs[idx - 1].heading
        print(f'\n--- slot {slot}  {JOB[slot]}  [{head}]')
        print(f'    task: {task(lines)[:110]}')
        for name, fn in (('colA', column_a), ('colB', column_b),
                         ('bank', word_bank), ('pron', pronunciation),
                         ('num', numbered), ('bul', bullets),
                         ('blanks', blanks), ('cards', cards),
                         ('script', script)):
            v = fn(lines)
            if v:
                print(f'    {name}: {json.dumps(v, ensure_ascii=False)[:900]}')
        st = students(lines)
        if st:
            print(f'    students: {json.dumps(st, ensure_ascii=False)[:600]}')
        if slot in (11, 37):
            nt = notice(lines) or reading(lines)
            if nt:
                print(f'    prose: {json.dumps(sentences(nt), ensure_ascii=False)[:1100]}')
        m = model(lines)
        if m:
            print(f'    model_sentences: {json.dumps(sentences(m), ensure_ascii=False)[:800]}')
        if idx is None:
            r = reading(lines)
            if r:
                print(f'    reading: {r[:600]}')
    return u, body



# The seven slots a parser cannot decide, and only what is needed to decide
# them. Printing the whole unit for each one is how the context gets spent.
DECIDE = {10: ('Part 1', 7), 11: ('Part 2', 1), 14: ('Part 2', 4),
          22: ('Part 4', 4), 36: ('Part 8', 1), 37: ('Part 9', None),
          38: ('Part 9', 1)}


def decide(book, num):
    ctx = R.load_ctx(book)
    units, ctx._keys = R.discover(book)
    u = [x for x in units if x.num == num][0]
    print(f'##### {book} u{num:02d}: {u.title}')
    for slot in sorted(DECIDE):
        part, idx = DECIDE[slot]
        p = u.part(part)
        lines = p.leading if idx is None else p.subs[idx - 1].lines
        head = part if idx is None else p.subs[idx - 1].heading
        print(f'\n-- {slot} {JOB[slot]} [{head}]')
        print(f'   task: {task(lines)}')
        if slot == 10:
            print(f'   model: {model(lines)}')
        if slot == 11:
            print(f'   lines: {json.dumps(sentences(notice(lines)), ensure_ascii=False)}')
        if slot == 14:
            print(f'   items: {json.dumps(numbered(lines), ensure_ascii=False)[:800]}')
        if slot == 36:
            print(f'   colA: {column_a(lines)}')
        if slot == 37:
            print(f'   reading: {reading(lines)}')
        if slot == 38:
            print(f'   model: {model(lines)}')


if __name__ == '__main__':
    _b = sys.argv[1] if len(sys.argv) > 1 else 'a21'
    _n = int(sys.argv[2]) if len(sys.argv) > 2 else 1
    (decide if '--decide' in sys.argv else dump)(_b, _n)
