#!/usr/bin/env python3
"""Assemble the whole volume as one DOCX: covers, front matter, every unit
built so far, the answer key, and the back cover.

Run after every unit, so there is always one file that is the book to date.
"""
from __future__ import annotations
import os, re, subprocess, sys, yaml

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE, os.path.join(HERE, 'checks')]
import model as M          # noqa: E402
import build_docx as B     # noqa: E402
import runner as R         # noqa: E402

VOL = {'a21': ('1', 'Everyday Life'), 'a22': ('2', 'Out in the World')}


def front_matter(book, units, g):
    vol, title = VOL[book]
    cov = os.path.join(ROOT, 'covers', f'{book}-front.png')
    out = []
    if os.path.exists(cov):
        out += [f'![Front cover]({cov})', '']
    out += [
        '**English for Daily Life**', '',
        f'*A2 · Volume {vol} · {title}*', '',
        '**How to use this book**', '',
        '> Every unit has the same ten parts in the same order, so after Unit 1 you '
        'always know where you are.',
        '',
        '> **[CORE]** is the Warm Up and Parts 1–6. Everybody does these.',
        '',
        '> **[PLUS]** is Parts 7–9. They are there when you are ready for them, and '
        'optional when you are not. Part 10 is for everybody.',
        '',
        '> Almost every exercise opens with item **0**, already answered. It is the '
        'worked example: read it before you start.',
        '',
        '**Symbols**', '',
        '| | |', '|---|---|',
        '| 🔊 | an audio track; the script is printed on the page |',
        '| ☐ | something to tick when you have checked it |',
        '| ✗ → ✓ | a common mistake, then the correction |',
        '| ***Stretch*** | a harder version of the task, for the Plus track |',
        '| → Harvest | the grammar you will meet again later in the unit |',
        '',
        '**Map of the Book**', '',
        '| Unit | Topic | Grammar | Glossary |', '|---|---|---|---|',
    ]
    led = yaml.safe_load(open(os.path.join(ROOT, 'ledgers', 'lexis.yaml')))['units']
    for u in sorted(units, key=lambda x: x.num):
        gram = str(g['spine'][u.num]['point'])
        words = ', '.join(str(w) for w in led.get(u.num, {}).get('words', [])[:4])
        out.append(f'| {u.num} | {u.title} | {gram} | {words}… |')
    out += ['', '**Audio tracks**', '', '| Track | Where | What |', '|---|---|---|']
    for u in sorted(units, key=lambda x: x.num):
        for t in sorted(u.audio):
            where = ('Part 1 Pronunciation' if t[1] == 1 else
                     'Part 7B' if t[1] == 5 else f'Part 3 ({t[1] - 1})')
            out.append(f'| {t[0]}.{t[1]} | Unit {t[0]} · {where} | {u.title} |')
    return '\n'.join(out)


def back_matter(book):
    cov = os.path.join(ROOT, 'covers', f'{book}-back.png')
    return f'![Back cover]({cov})' if os.path.exists(cov) else ''


def build(book='a21'):
    units, keys = R.discover(book)
    if not units:
        print('no units'); return 1
    g = yaml.safe_load(open(os.path.join(ROOT, 'ledgers', 'grammar.yaml')))
    vol, title = VOL[book]

    parts = [front_matter(book, units, g)]
    for u in sorted(units, key=lambda x: x.num):
        parts.append(B.preprocess(u.path, book, u.num))
    parts.append('**Answer Key**\n\n'
                 '> The source this course is modelled on has no answer key at all. '
                 'This one covers every closed item, and gives marking points and a '
                 'sample answer for every open task.')
    for n in sorted(keys):
        parts.append(open(keys[n].path, encoding='utf-8').read())
    bm = back_matter(book)
    if bm:
        parts.append(bm)

    tmp = os.path.join(ROOT, 'build', f'.{book}-book.md')
    body = '\n\n'.join(parts)
    srcs = B.img_sources(body)
    open(tmp, 'w', encoding='utf-8').write(body)
    out = os.path.join(ROOT, 'build', f'EFDL-A2.{vol}-{title.replace(" ", "")}-'
                                      f'u{min(u.num for u in units):02d}-'
                                      f'{max(u.num for u in units):02d}.docx')
    for old in os.listdir(os.path.join(ROOT, 'build')):
        if old.startswith(f'EFDL-A2.{vol}-') and old.endswith(('.docx', '.pdf')):
            os.remove(os.path.join(ROOT, 'build', old))
    subprocess.run(['pandoc', tmp, '-f', 'gfm', '-t', 'docx',
                    '--reference-doc', os.path.join(ROOT, 'build', 'reference.docx'),
                    '-o', out], check=True)
    os.remove(tmp)
    B.postprocess(out, f'English for Daily Life · A2 Volume {vol}: {title}',
                  f'English for Daily Life · A2.{vol}', srcs)
    subprocess.run(['libreoffice', '--headless', '--convert-to', 'pdf',
                    '--outdir', os.path.join(ROOT, 'build'), out],
                   capture_output=True, timeout=900)
    B.write_manifest()
    pdf = out[:-5] + '.pdf'
    pages = 0
    if os.path.exists(pdf):
        pages = len(re.findall(rb'/Type\s*/Page[^s]', open(pdf, 'rb').read()))
    print(f'{os.path.basename(out)}  {os.path.getsize(out)//1024} KB  '
          f'{len(units)} unit(s)  {pages} pages')
    return out


if __name__ == '__main__':
    build(sys.argv[1] if len(sys.argv) > 1 else 'a21')
