#!/usr/bin/env python3
"""Build one English Animated unit into DOCX and PDF with its figures drawn.

    python3 -I tools/build_unit.py b11 01

Reads  chapters/<book>-unit<nn>.md  and  content/<book>/u<nn>_figures.py,
renders every figure to SVG + print-resolution PNG, substitutes the figure
brief blocks in the chapter for the real images, and exports:

    build/<book>-unit<nn>/EnglishAnimated_<BOOK>_Unit<nn>.docx
                           .../...pdf
                           .../figures/*.svg   (layered source)
                           .../figures/*.png   (print export)
"""
import importlib.util, pathlib, re, subprocess, sys, shutil

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent
sys.path.insert(0, str(HERE))
import cairosvg                                            # noqa: E402
import ea_figures as F                                     # noqa: E402

SCALE = 2.0            # 1600 px wide artboard → 3200 px PNG ≈ 300 dpi at placed size
IMG_W_IN = 6.6         # placed width inside the Word page


def load_figs(book, unit):
    p = ROOT / 'content' / book / f'u{unit}_figures.py'
    spec = importlib.util.spec_from_file_location(f'{book}_u{unit}_figs', p)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.FIGURES


def render_all(figs, outdir):
    outdir.mkdir(parents=True, exist_ok=True)
    made = {}
    for k, s in figs.items():
        svg = F.render(s)
        (outdir / f'{k}.svg').write_text(svg, encoding='utf-8')
        png = outdir / f'{k}.png'
        cairosvg.svg2png(bytestring=svg.encode(), write_to=str(png), scale=SCALE)
        made[k] = png
        print(f"   {s['type']:<4} {k}")
    return made


FIG_BLOCK = re.compile(
    r'^> \*\*FIGURE `(?P<id>fig_[a-z0-9_]+)` · (?P<type>V\d+)[^\n]*\*\*\n'
    r'(?P<body>(?:^>[^\n]*\n)*)', re.M)


def substitute(md, pngs, figs, figdir):
    """Replace each figure brief with the drawn figure plus a short caption."""
    def rep(m):
        fid = m.group('id')
        if fid not in pngs:
            return m.group(0)
        spec = figs[fid]
        cap = spec.get('sub') or spec.get('title')
        rel = f'figures/{fid}.png'
        alt = spec.get('alt', spec.get('title', '')).replace(']', ')').replace('[', '(')
        return (f'\n![{alt}]({rel}){{width={IMG_W_IN}in}}\n\n'
                f'*{spec["title"]} — {cap}*\n\n')
    out, n = FIG_BLOCK.subn(rep, md)
    return out, n


def build(book, unit):
    src = ROOT / 'chapters' / f'{book}-unit{unit}.md'
    md = src.read_text(encoding='utf-8')
    figs = load_figs(book, unit)
    out = ROOT / 'build' / f'{book}-unit{unit}'
    if out.exists():
        shutil.rmtree(out)
    figdir = out / 'figures'
    print(f'rendering {len(figs)} figures …')
    pngs = render_all(figs, figdir)

    md2, n = substitute(md, pngs, figs, figdir)
    print(f'substituted {n} figure blocks of {len(figs)} rendered')
    missing = [k for k in figs if f'figures/{k}.png' not in md2]
    if missing:
        print('   WARNING figures rendered but not placed:', missing)

    tmp = out / 'unit.md'
    tmp.write_text(md2, encoding='utf-8')

    name = f"EnglishAnimated_{book.upper()}_Unit{unit}"
    docx = out / f'{name}.docx'
    subprocess.run(['pandoc', str(tmp), '-f', 'gfm+tex_math_dollars', '-t', 'docx',
                    '--reference-doc', str(ROOT / 'build' / 'ea-reference.docx'),
                    '--resource-path', str(out),
                    '--toc', '--toc-depth=2',
                    '-o', str(docx)], check=True)
    print(f'wrote {docx.relative_to(ROOT)}  ({docx.stat().st_size//1024} KB)')

    subprocess.run(['libreoffice', '--headless', '--convert-to', 'pdf',
                    '--outdir', str(out), str(docx)],
                   check=True, capture_output=True, timeout=600)
    pdf = out / f'{name}.pdf'
    print(f'wrote {pdf.relative_to(ROOT)}  ({pdf.stat().st_size//1024} KB)')
    return docx, pdf


if __name__ == '__main__':
    build(sys.argv[1], sys.argv[2])
