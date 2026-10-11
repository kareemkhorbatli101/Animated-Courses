"""Build EFDL A1.1 as a volume: ten units in one book, plus the answer key.

The per-unit files remain; this is the thing a learner actually holds.
"""
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TITLES = {1: 'Hello', 2: 'In the Class', 3: "Who's This?", 4: 'Where I Live',
          5: 'Every Day', 6: 'She Works Here', 7: 'Food and Drink',
          8: 'In the Town', 9: 'I Can Do That', 10: 'Last Weekend',
          11: 'A Day Out', 12: 'Last Year', 13: 'Right Now',
          14: 'Next Week', 15: 'Bigger and Better',
          16: 'Things I Like Doing', 17: 'Would You Like?',
          18: 'The Best in Town', 19: 'How Are You?', 20: 'See You Soon'}
GRAMMAR = {1: 'am, is, are · my, your, his, her',
           2: "questions and short answers · isn't, aren't · a/an · this, that",
           3: "possessive 's · plural nouns · our, their",
           4: 'there is, there are · how many · in, on, under',
           5: 'present simple I, you, we, they · time · days',
           6: 'present simple he, she, it · does',
           7: 'some, any · countable and uncountable · like',
           8: 'prepositions of place · imperatives',
           9: "can, can't",
           10: 'was, were · past time words',
           11: 'past simple, regular verbs',
           12: 'past simple, irregular verbs · questions with did',
           13: 'present continuous · beside the present simple',
           14: 'going to',
           15: 'comparatives · adjectives',
           16: 'like, love, hate + ing',
           17: 'would like · polite requests',
           18: 'superlatives',
           19: 'have got · should',
           20: 'past, present and will, together'}


BACK = [('grammar-file.md', 'Grammar File'),
        ('word-file.md', 'Word File'),
        ('phrase-file.md', 'Phrase File'),
        ('irregular-verbs.md', 'Irregular Verbs'),
        ('sound-symbol-table.md', 'Sound and Symbol Table'),
        ('audio-file.md', 'Audio File'),
        ('picture-file.md', 'Picture File'),
        ('can-do-record.md', 'Can-Do Record')]


def back_matter(nums):
    """The reference section, appended to the Student Book.

    Only whole-course volumes carry it: a ten-unit build would otherwise
    print a Word File listing words from units it does not contain.
    """
    if list(nums) != list(range(1, 21)):
        return []
    out = []
    for name, _title in BACK:
        raw = open(os.path.join(HERE, 'back', name), encoding='utf-8').read()
        out.append('\n\n```{=openxml}\n'
                   '<w:p><w:r><w:br w:type="page"/></w:r></w:p>\n```\n\n' + raw)
    return out


def front_matter(kind, nums=()):
    rows = '\n'.join(
        f'| **{k}** | {TITLES[k]} | {GRAMMAR[k]} |'
        for k in sorted(TITLES) if k in nums or not nums)
    n = len([k for k in TITLES if k in nums]) or len(TITLES)
    back_note = ''
    if kind == 'Student Book' and list(nums) == list(range(1, 21)):
        back_note = (
            '**At the back of this book**\n\n'
            'Grammar File, one entry per unit · Word File, every word with '
            'the unit that\n'
            'teaches it and an Arabic gloss · Phrase File · irregular verbs '
            '· sound and\n'
            'symbol table · Audio File, all eighty listening scripts to the '
            'word ·\n'
            'Picture File, all 440 figures with alt text · Can-Do Record.\n')
    return f"""# English for Daily Life

## A1 — {kind}

**{n} units · {n * 38} exercises · {n * 22} figures**

A beginner's course. Everything happens on one street, Hill Road, and the
same eight people live there, so the only new thing on any page is the
language.

| Unit | Title | Grammar |
|---|---|---|
{rows}

**The people of Hill Road**

Nadia cooks at the cafe. Sam drives bus 12. Lili is a student. Marek looks
after the flats. Fatima is a nurse at the clinic and teaches the evening
class. Ben works in the shop. Rosa is Marek's mother. Omar is his son.

{back_note}
"""


def keep_together(docx):
    """Stop a rubric being stranded a page away from its own figure.

    "Look at Figure 1.5" at the foot of page 4 with the picture on page 5 is
    a real fault and it only exists in the printed artefact -- the source is
    fine. Word fixes it with keepNext, so the rubric, the image and the
    caption travel as one block.
    """
    from docx import Document
    from docx.oxml.ns import qn
    from docx.oxml import OxmlElement

    import re as _re
    LABEL = _re.compile(r'^(W\d|\d{1,2}[A-H])\s')
    doc = Document(docx)
    ps = doc.paragraphs
    n = 0
    for i, para in enumerate(ps):
        # An exercise label is never the last thing on a page: its rubric
        # must stay with its first item, figure or not. The first pass only
        # handled paragraphs next to an image and left the figureless
        # exercises -- "Say it.", "Write the numbers." -- still stranded.
        if LABEL.match(para.text.strip()):
            pPr = para._p.get_or_add_pPr()
            from docx.oxml.ns import qn as _qn
            if pPr.find(_qn('w:keepNext')) is None:
                pPr.append(OxmlElement('w:keepNext'))
                n += 1
        has_img = bool(para._p.findall('.//' + qn('w:drawing')))
        cap_next = (i + 1 < len(ps)
                    and ps[i + 1].text.strip().startswith('Figure '))
        img_next = (i + 1 < len(ps)
                    and ps[i + 1]._p.findall('.//' + qn('w:drawing')))
        if has_img or img_next or (has_img and cap_next):
            pPr = para._p.get_or_add_pPr()
            if pPr.find(qn('w:keepNext')) is None:
                pPr.append(OxmlElement('w:keepNext'))
                n += 1
    doc.save(docx)
    return n


def build(kind, nums, src, out_base):
    parts = [front_matter(kind, nums)]
    for n in nums:
        raw = open(src.format(n)).read()
        figdir = os.path.join(HERE, 'figures', 'a11')

        def sub(m, _n=n):
            f = int(m.group(2))
            png = os.path.join(figdir, f'u{_n:02d}-{f:02d}.png')
            if not os.path.exists(png):
                raise SystemExit(f'missing figure {png}')
            return (f'![]({png}){{width=6.1in}}\n\n'
                    f'*Figure {m.group(1)}.{f} · {m.group(3)}.*')
        raw = re.sub(r'^\*Figure (\d+)\.(\d+) · (.+)\.\*$', sub, raw, flags=re.M)
        raw = re.sub(r'_{3,}', lambda m: r'\_' * len(m.group(0)), raw)
        # \newpage is LaTeX and pandoc drops it on the way to DOCX, so the
        # first build ran unit 6 onto the last page of unit 5. A docx page
        # break has to be raw OpenXML.
        parts.append('\n\n```{=openxml}\n'
                     '<w:p><w:r><w:br w:type="page"/></w:r></w:p>\n```\n\n' + raw)
    if kind == 'Student Book':
        parts += back_matter(nums)
    md = '\n'.join(parts)
    tmp = out_base + '.src.md'
    open(tmp, 'w').write(md)
    docx = out_base + '.docx'
    ref = os.path.join(HERE, 'spec', 'reference.docx')
    cmd = ['pandoc', tmp, '-o', docx]
    if os.path.exists(ref):
        cmd += ['--reference-doc', ref]
    subprocess.run(cmd, check=True)
    print(f'  keepNext set on {keep_together(docx)} paragraphs')
    try:
        subprocess.run(['libreoffice', '--headless', '--convert-to', 'pdf',
                        '--outdir', os.path.dirname(out_base), docx],
                       check=True, timeout=2700,
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except subprocess.TimeoutExpired:
        print('LibreOffice timed out; the DOCX is written, the PDF is not')
    os.remove(tmp)
    return docx


if __name__ == '__main__':
    last = int(sys.argv[1]) if len(sys.argv) > 1 else 10
    nums = list(range(1, last + 1))
    os.makedirs(os.path.join(HERE, 'build'), exist_ok=True)
    print(build('Student Book', nums,
                os.path.join(HERE, 'units', 'a11-u{:02d}.md'),
                os.path.join(HERE, 'build', f'EFDL-A1-StudentBook-u01-{last:02d}')))
    print(build('Answer Key', nums,
                os.path.join(HERE, 'keys', 'a11-u{:02d}-key.md'),
                os.path.join(HERE, 'build', f'EFDL-A1-AnswerKey-u01-{last:02d}')))
