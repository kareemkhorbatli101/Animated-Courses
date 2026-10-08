"""Parse a unit markdown file into a structured model the checks can interrogate."""
from __future__ import annotations
import re, unicodedata
from dataclasses import dataclass, field

BOLD = re.compile(r'^\*\*(.+)\*\*$')
TRACK = re.compile(r'^\*\*\*(.+)\*\*\*$')
PART_HDR = re.compile(r'^\*\*(Warm Up|Part (\d+))(?: · (.+))?\*\*$')
SUB_HDR = re.compile(r'^\*\*((?:Warm-up|Part \d+): .+|7[A-E]: .+)\*\*$')
FIGCAP = re.compile(r'^\*Figure (\d+)\.(\d+) · (.+)\.\*$')
AUDIO = re.compile(r'^\**🔊 Audio Track (\d+)\.(\d+)\**$')
MCQOPT = re.compile(r'^> ○ ([A-D])\) (.*)$')
SEED = re.compile(r'^0\. (.*)$')
TROW = re.compile(r'^\|(.*)\|$')


def _caption_words(lines) -> int:
    return sum(len(re.sub(r'[|*>_]', ' ', l).split())
               for l in lines if FIGCAP.match(l.strip()))


def norm(s: str) -> str:
    return unicodedata.normalize('NFC', s).replace(' ', ' ').strip()


@dataclass
class Table:
    rows: list[list[str]]


@dataclass
class Matching:
    a: list[str] = field(default_factory=list)      # Column A stems
    b: list[tuple[str, str]] = field(default_factory=list)  # (letter, text)


@dataclass
class MCQ:
    stem: str
    options: list[tuple[str, str]]


@dataclass
class Sub:
    heading: str
    part: str
    lines: list[str] = field(default_factory=list)

    @property
    def text(self) -> str:
        return '\n'.join(self.lines)

    @property
    def words(self) -> int:
        return len(re.sub(r'[|*>_]', ' ', self.text).split())

    @property
    def caption_words(self) -> int:
        return _caption_words(self.lines)

    @property
    def prose_words(self) -> int:
        return self.words - self.caption_words


@dataclass
class Part:
    name: str                 # 'Warm Up' | 'Part 3'
    header: str
    track: str | None = None
    leading: list[str] = field(default_factory=list)
    subs: list[Sub] = field(default_factory=list)

    @property
    def words(self) -> int:
        n = len(re.sub(r'[|*>_]', ' ', '\n'.join(self.leading)).split())
        return n + sum(s.words for s in self.subs)

    @property
    def caption_words(self) -> int:
        return _caption_words(self.leading) + sum(s.caption_words for s in self.subs)

    @property
    def prose_words(self) -> int:
        return self.words - self.caption_words


@dataclass
class Unit:
    path: str
    num: int
    title: str
    strap: str
    parts: list[Part]
    lines: list[str]

    @property
    def text(self) -> str:
        return '\n'.join(self.lines)

    @property
    def subs(self) -> list[Sub]:
        return [s for p in self.parts for s in p.subs]

    def part(self, name: str) -> Part | None:
        return next((p for p in self.parts if p.name == name), None)

    @property
    def words(self) -> int:
        return len(re.sub(r'[|*>_]', ' ', self.text).split())

    @property
    def caption_words(self) -> int:
        return _caption_words(self.lines)

    @property
    def prose_words(self) -> int:
        """Everything a learner reads, with the figure captions taken out.

        A caption is apparatus, like a heading on a table -- it is not part of
        the reading load the word budget exists to bound. At 14 figures a unit
        the distinction did not matter; the books ran a mean of 64 words below
        their 5,280 ceiling, with Unit 18 three words below. Going to 41
        figures adds about 367 words of caption, so counting them as prose
        would break every unit in both volumes on the first new figure while
        not one sentence had changed. Prose is measured against the unchanged
        source-derived budget; captions are bounded separately by G27.
        """
        return self.words - self.caption_words

    @property
    def bold_headings(self) -> list[str]:
        return [l for l in self.lines if l.startswith('**')]

    @property
    def figures(self) -> list[tuple[int, int, str]]:
        out = []
        for l in self.lines:
            m = FIGCAP.match(l)
            if m:
                out.append((int(m.group(1)), int(m.group(2)), m.group(3)))
        return out

    @property
    def audio(self) -> list[tuple[int, int]]:
        return [(int(m.group(1)), int(m.group(2)))
                for m in (AUDIO.match(l) for l in self.lines) if m]

    @property
    def sentences(self) -> list[str]:
        """Continuous prose only: blockquote body lines that are not instructions."""
        out = []
        for p in self.parts:
            for src in [p.leading] + [s.lines for s in p.subs]:
                for l in src:
                    if not l.startswith('> '):
                        continue
                    body = l[2:].strip()
                    if body.startswith('**') or body.startswith('○') or not body:
                        continue
                    if re.match(r'^(Gloss|Before you|Useful|Model|Card|Word bank|Plan|Check|Answer frame|Phrase bank|Discussion frames|Student [AB])\b', body):
                        continue
                    out += [x.strip() for x in
                            re.split(r'(?<=[.!?])[”’"\')]*\s+', body) if x.strip()]
        return out


def _tables(lines: list[str]) -> list[Table]:
    out, cur = [], None
    for l in lines:
        m = TROW.match(l.strip())
        if m:
            cells = [c.strip() for c in m.group(1).split('|')]
            if set(''.join(cells)) <= set('-: '):
                continue
            if cur is None:
                cur = []
            cur.append(cells)
        elif cur is not None:
            out.append(Table(cur)); cur = None
    if cur:
        out.append(Table(cur))
    return out


def matchings(sub: Sub) -> Matching | None:
    """Extract a Column A / Column B matching from a sub-section."""
    ls = sub.lines
    try:
        ia = next(i for i, l in enumerate(ls) if l.strip() == '**Column A**')
        ib = next(i for i, l in enumerate(ls) if l.strip() == '**Column B**')
    except StopIteration:
        return None
    ta, tb = _tables(ls[ia:ib]), _tables(ls[ib:])
    if not ta or not tb:
        return None
    m = Matching()
    for row in ta[0].rows:
        cells = [c for c in row if c]
        if len(cells) >= 2 and re.match(r'^\d+\.$', cells[0]):
            m.a.append(cells[1].strip('*'))
    for row in tb[0].rows:
        cells = [c for c in row if c]
        if len(cells) >= 2 and re.match(r'^\*\*([a-h])\)\*\*$', cells[0]):
            m.b.append((cells[0].strip('*)'), cells[1]))
    return m if m.a and m.b else None


def mcqs(sub: Sub) -> list[MCQ]:
    out, stem, opts = [], None, []
    for l in sub.lines:
        mo = MCQOPT.match(l)
        if mo:
            opts.append((mo.group(1), mo.group(2).strip()))
            continue
        if l.strip() in ('', '>'):          # blank blockquote line between options
            continue
        if opts:
            out.append(MCQ(stem or '', opts)); opts = []
        mb = BOLD.match(l.strip())
        if mb:
            stem = mb.group(1)
    if opts:
        out.append(MCQ(stem or '', opts))
    return out


def word_bank(sub: Sub) -> list[str] | None:
    for l in sub.lines:
        m = re.search(r'\*\*Word bank:\*\*\s*(.+)$', l)
        if m:
            return [w.strip() for w in m.group(1).split('|') if w.strip()]
    return None


def gaps(sub: Sub) -> int:
    return sum(1 for l in sub.lines
               if re.match(r'^\d+\. ', l) and '_____' in l)


def seeded(sub: Sub) -> list[str]:
    return [m.group(1) for m in (SEED.match(l) for l in sub.lines) if m]


def parse(path: str) -> Unit:
    raw = open(path, encoding='utf-8').read()
    lines = [norm(l) for l in raw.split('\n')]
    m = re.match(r'^\*\*Unit (\d+): (.+)\*\*$', lines[0])
    if not m:
        raise ValueError(f'{path}: first line is not a unit title')
    num, title = int(m.group(1)), m.group(2)
    strap = next((l for l in lines[1:6] if l.startswith('*English')), '')

    parts: list[Part] = []
    cur_part: Part | None = None
    cur_sub: Sub | None = None
    for l in lines[1:]:
        ph = PART_HDR.match(l)
        sh = SUB_HDR.match(l)
        if ph and not sh:
            cur_part = Part(name=ph.group(1), header=l)
            parts.append(cur_part); cur_sub = None
            continue
        if cur_part is None:
            continue
        if sh:
            cur_sub = Sub(heading=sh.group(1), part=cur_part.name)
            cur_part.subs.append(cur_sub)
            continue
        tr = TRACK.match(l)
        if tr and cur_sub is None and cur_part.track is None and l.startswith('***['):
            cur_part.track = tr.group(1)
            continue
        (cur_sub.lines if cur_sub else cur_part.leading).append(l)
    return Unit(path=path, num=num, title=title, strap=strap, parts=parts, lines=lines)


# ---------------------------------------------------------------- answer key

KEY_SUB = re.compile(r'^\*\*((?:Warm-up|Part \d+): .+?|7[A-E]: .+?)\*\*(?:\s*\((?:Track [\d.]+|given)\))?\s*$')
ITEM = re.compile(r'(?:^|·\s*)(\d+)\.\s+(.+?)(?=\s*·\s*\d+\.|$)')


@dataclass
class KeySection:
    heading: str
    lines: list[str] = field(default_factory=list)

    @property
    def text(self) -> str:
        return '\n'.join(self.lines)

    @property
    def items(self) -> dict[int, str]:
        out: dict[int, str] = {}
        for l in self.lines:
            if l.startswith('|') or l.startswith('>'):
                continue
            for m in ITEM.finditer(l.strip()):
                n = int(m.group(1))
                if n not in out:
                    out[n] = m.group(2).strip()
        return out

    @property
    def not_needed(self) -> str | None:
        m = re.search(r'Not needed:\s*\*\*([a-h])\)\*\*', self.text)
        return m.group(1) if m else None


@dataclass
class Key:
    path: str
    num: int
    sections: list[KeySection]

    def section(self, heading: str) -> KeySection | None:
        return next((s for s in self.sections if s.heading == heading), None)

    @property
    def text(self) -> str:
        return '\n'.join(l for s in self.sections for l in [f'**{s.heading}**'] + s.lines)


def parse_key(path: str) -> Key:
    lines = [norm(l) for l in open(path, encoding='utf-8').read().split('\n')]
    m = re.match(r'^\*\*Unit (\d+): .+ Answer Key\*\*$', lines[0])
    if not m:
        raise ValueError(f'{path}: first line is not an answer-key title')
    secs, cur = [], None
    for l in lines[1:]:
        km = KEY_SUB.match(l)
        if km:
            cur = KeySection(km.group(1)); secs.append(cur); continue
        if cur is not None:
            cur.lines.append(l)
    return Key(path=path, num=int(m.group(1)), sections=secs)
