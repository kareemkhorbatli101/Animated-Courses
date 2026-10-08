#!/usr/bin/env python3
"""Assemble one volume's ten answer keys as a standalone teacher's DOCX.

The whole-book DOCX already carries the answer key at the back, which is right
for a learner holding one file. A teacher wants the key on its own: separate
from the book, printable without the 390 pages in front of it, and with its own
cover sheet saying which volume it belongs to. That is what this builds.
"""
from __future__ import annotations
import os, re, subprocess, sys, yaml

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE, os.path.join(HERE, 'checks')]
import model as M          # noqa: E402
import build_docx as B     # noqa: E402
import runner as R         # noqa: E402
import build_book as BK    # noqa: E402


def front_matter(book, units, keys, g):
    vol, title = BK.VOL[book]
    led = yaml.safe_load(open(os.path.join(ROOT, 'ledgers', 'lexis.yaml')))['units']
    lo, hi = min(u.num for u in units), max(u.num for u in units)
    out = [
        '**English for Daily Life · Answer Key**', '',
        f'*A2 · Volume {vol} · {title} · Units {lo}–{hi}*', '',
        '**What is in here**', '',
        '> Every closed item in the book, keyed. Every open task with marking '
        'points and a sample answer. The source this course is modelled on has '
        'no answer key at all; this one is an addition, and the samples are one '
        'correct answer rather than the only one.',
        '',
        '> Where a task is open, mark the form and not the content. Each entry '
        'says which form, and most of them say which mistake to expect.',
        '',
        '> Notes set off in a quote, like this one, are for the person teaching: '
        'what the item is really testing, and what learners reliably do wrong.',
        '',
        '**Contents**', '',
        '| Unit | Topic | Grammar | Key |', '|---|---|---|---|',
    ]
    for u in sorted(units, key=lambda x: x.num):
        gram = str(g['spine'][u.num]['point'])
        has = 'yes' if u.num in keys else '—'
        out.append(f'| {u.num} | {u.title} | {gram} | {has} |')
    out += ['', '**Closed items keyed, by unit**', '',
            '| Unit | Closed items | Open tasks | Worked `0.` examples |',
            '|---|---|---|---|']
    for n in sorted(keys):
        txt = open(keys[n].path, encoding='utf-8').read()
        m = re.search(r'Closed items (\d+)', txt)
        o = re.search(r'Open tasks (\d+)', txt)
        z = re.search(r'examples (\d+)', txt)
        out.append(f'| {n} | {m.group(1) if m else "—"} | '
                   f'{o.group(1) if o else "—"} | {z.group(1) if z else "—"} |')
    return '\n'.join(out)


def build(book='a21'):
    vol, title = BK.VOL[book]
    units, keys = R.discover(book)
    if not keys:
        print(f'{book}: no keys found'); return None
    g = yaml.safe_load(open(os.path.join(ROOT, 'ledgers', 'grammar.yaml')))
    parts = [front_matter(book, units, keys, g)]
    for n in sorted(keys):
        parts.append(open(keys[n].path, encoding='utf-8').read())
    md = '\n\n---\n\n'.join(p for p in parts if p.strip())

    lo, hi = min(keys), max(keys)
    tmp = os.path.join(ROOT, 'build', f'.{book}-key.md')
    srcs = B.img_sources(md)
    open(tmp, 'w', encoding='utf-8').write(md)
    name = (f'EFDL-A2.{vol}-{title.replace(" ", "")}-AnswerKey-'
            f'u{lo:02d}-{hi:02d}.docx')
    out = os.path.join(ROOT, 'build', name)
    # a rename leaves the previous span behind, as build_book does
    for old in os.listdir(os.path.join(ROOT, 'build')):
        if re.fullmatch(rf'EFDL-A2\.{vol}-\S+-AnswerKey-u\d\d-\d\d\.(docx|pdf)',
                        old) and not old.startswith(name[:-5]):
            os.remove(os.path.join(ROOT, 'build', old))
    subprocess.run(['pandoc', tmp, '-f', 'gfm', '-t', 'docx',
                    '--reference-doc', os.path.join(ROOT, 'build', 'reference.docx'),
                    '-o', out], check=True)
    os.remove(tmp)
    B.postprocess(out, f'English for Daily Life · A2.{vol} Answer Key: {title}',
                  f'English for Daily Life · A2.{vol} Answer Key', srcs)
    subprocess.run(['libreoffice', '--headless', '--convert-to', 'pdf',
                    '--outdir', os.path.join(ROOT, 'build'), out],
                   # A dense volume is about 500 pages and 18 MB. The old 900 s
                   # killed the A2.2 conversion, and because TimeoutExpired is
                   # not caught it took build_book down with it: no PDF, no
                   # answer key, and a chain that stopped without saying why.
                   capture_output=True, timeout=2700)
    B.write_manifest()
    pdf = out[:-5] + '.pdf'
    pages = 0
    if os.path.exists(pdf):
        pages = len(re.findall(rb'/Type\s*/Page[^s]', open(pdf, 'rb').read()))
    print(f'{name}  {os.path.getsize(out)//1024} KB  {len(keys)} key(s)  '
          f'{pages} pages')
    return out


if __name__ == '__main__':
    build(sys.argv[1] if len(sys.argv) > 1 else 'a21')
