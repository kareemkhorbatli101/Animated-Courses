#!/usr/bin/env python3
"""Assemble every finished unit of a book into one DOCX and one PDF.

    python3 -I tools/build_book.py b11

Front matter, contents, then each unit in order, with all figures drawn.
Units that are not yet written are listed in the front matter as outstanding,
so the file never pretends to be a finished book when it is not.
"""
import pathlib, re, subprocess, sys, shutil, importlib.util
HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent
sys.path.insert(0, str(HERE))
import cairosvg                                             # noqa: E402
import ea_figures as F                                      # noqa: E402
from build_unit import load_figs, substitute, FIG_BLOCK, SCALE  # noqa: E402

BOOKS = {
 'a21': ('A2.1', 'Making Plans', 'Pasar Chow Kit, Kuala Lumpur'),
 'a22': ('A2.2', 'Telling the Story', 'Ballinmore, west coast of Ireland'),
 'b11': ('B1.1', 'Taking a Position', 'Jengo House, Nairobi'),
 'b12': ('B1.2', 'Weighing It Up', 'Hospital Regional, Valdivia'),
 'b13': ('B1.3', 'Making the Case', 'a university campus, Melbourne'),
}


def _page_breaks(path):
    """Start every unit on a fresh page. Pandoc's gfm reader has no page break,
    so it is set on the Word paragraphs afterwards."""
    import docx
    from docx.oxml import OxmlElement
    d = docx.Document(str(path))
    n = 0
    for i, p in enumerate(d.paragraphs):
        if p.style.name.startswith('Heading 1') and i > 2:
            pPr = p._p.get_or_add_pPr()
            pPr.append(OxmlElement('w:pageBreakBefore'))
            n += 1
    d.save(str(path))
    print(f'   page breaks: {n}')


def build(book):
    code, title, setting = BOOKS[book]
    out = ROOT / 'build' / f'{book}-book'
    if out.exists():
        shutil.rmtree(out)
    figdir = out / 'figures'
    figdir.mkdir(parents=True)

    units = sorted(ROOT.glob(f'chapters/{book}-unit*.md'))
    done = [int(re.search(r'unit(\d+)', u.name).group(1)) for u in units]
    missing = [n for n in range(1, 11) if n not in done]

    parts = [f"""# English Animated — {code} · {title}

*{setting}*

## About this volume

**English Animated {code} · *{title}*** — {setting}.

This volume contains **{len(done)} of 10 units**, written in full: every text, every task, every
figure drawn. Units are 20 pages each at B-level and 22 at A-level, which is the extent specified
in the series plan.

"""]
    if missing:
        parts.append("**Not yet written:** Unit " +
                     ", ".join(str(m) for m in missing) +
                     ". The syllabus for these — question, grammar, lexis, outcome, File and "
                     "Decision — is set out in `17-contents-a2-b1.md`; the text and figures are "
                     "not yet authored, and this file does not pretend otherwise.\n\n")


    total_figs = 0
    for u in units:
        n = re.search(r'unit(\d+)', u.name).group(1)
        figs = load_figs(book, n)
        for k, s in figs.items():
            svg = F.render(s)
            (figdir / f'{k}.svg').write_text(svg, encoding='utf-8')
            cairosvg.svg2png(bytestring=svg.encode(), write_to=str(figdir / f'{k}.png'), scale=SCALE)
        total_figs += len(figs)
        md = u.read_text(encoding='utf-8')
        md2, placed = substitute(md, {k: figdir / f'{k}.png' for k in figs}, figs, figdir)
        if placed != len(figs):
            print(f'   WARNING unit {n}: {placed} placed of {len(figs)}')
        parts.append(md2 + '\n\n')
        print(f'   unit {n}: {len(figs)} figures')

    src = out / 'book.md'
    src.write_text('\n'.join(parts), encoding='utf-8')
    name = f'EnglishAnimated_{code.replace(".", "")}_{title.replace(" ", "")}'
    docx = out / f'{name}.docx'
    subprocess.run(['pandoc', str(src), '-f', 'gfm', '-t', 'docx',
                    '--reference-doc', str(ROOT / 'build' / 'ea-reference.docx'),
                    '--resource-path', str(out), '--toc', '--toc-depth=2',
                    '-o', str(docx)], check=True)
    _page_breaks(docx)
    subprocess.run(['libreoffice', '--headless', '--convert-to', 'pdf', '--outdir',
                    str(out), str(docx)], check=True, capture_output=True, timeout=900)
    pdf = out / f'{name}.pdf'
    print(f'{code}: {len(done)}/10 units, {total_figs} figures')
    print(f'   {docx.relative_to(ROOT)}  {docx.stat().st_size//1024} KB')
    print(f'   {pdf.relative_to(ROOT)}  {pdf.stat().st_size//1024} KB')
    return docx, pdf


if __name__ == '__main__':
    build(sys.argv[1])
