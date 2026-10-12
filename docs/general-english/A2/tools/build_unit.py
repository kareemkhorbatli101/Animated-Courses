"""Build one unit into DOCX and PDF with its figures placed.

pandoc writes the DOCX; the figures are injected as images at their caption
points. LibreOffice converts. A2's log says to give LibreOffice real time:
a dense volume killed the old 900 s limit and took the whole chain down
silently, leaving a DOCX and no PDF.
"""
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def build(unit_md, book, unit, out_base, title):
    raw = open(unit_md).read()
    figdir = os.path.join(HERE, 'figures', book)
    # replace each caption line with an image + the caption under it
    def sub(m):
        n = int(m.group(2))
        png = os.path.join(figdir, f'u{unit:02d}-{n:02d}.png')
        if not os.path.exists(png):
            raise SystemExit(f'missing figure {png}')
        return (f'![]({png}){{width=6.1in}}\n\n'
                f'*Figure {m.group(1)}.{n} · {m.group(3)}.*')
    md = re.sub(r'^\*Figure (\d+)\.(\d+) · (.+)\.\*$', sub, raw, flags=re.M)
    # A run of underscores is a markdown thematic break. Inside a list item it
    # eats the item number and prints a black rule, which is exactly what the
    # first build of this unit did to every answer line in 1C and 3D. Escape
    # them so they print as what they are: a line to write on.
    md = re.sub(r'_{3,}', lambda m: r'\_' * len(m.group(0)), md)

    tmp = out_base + '.src.md'
    open(tmp, 'w').write(md)
    docx = out_base + '.docx'
    subprocess.run(['pandoc', tmp, '-o', docx, '--reference-doc',
                    os.path.join(HERE, 'spec', 'reference.docx')]
                   if os.path.exists(os.path.join(HERE, 'spec', 'reference.docx'))
                   else ['pandoc', tmp, '-o', docx], check=True)
    try:
        subprocess.run(['libreoffice', '--headless', '--convert-to', 'pdf',
                        '--outdir', os.path.dirname(out_base), docx],
                       check=True, timeout=2700,
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except subprocess.TimeoutExpired:
        print('LibreOffice timed out; DOCX is written, PDF is not')
    os.remove(tmp)
    return docx


UNITS = {1: 'Hello', 2: 'InTheClass'}


if __name__ == '__main__':
    os.makedirs(os.path.join(HERE, 'build'), exist_ok=True)
    for n in ([int(a) for a in sys.argv[1:]] or sorted(UNITS)):
        d = build(os.path.join(HERE, 'units', f'a21-u{n:02d}.md'), 'a21', n,
                  os.path.join(HERE, 'build',
                               f'EFDL-A2.1-Unit{n:02d}-{UNITS[n]}'), '')
        print('built', d)
