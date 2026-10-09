#!/usr/bin/env python3
"""Run every check against every unit. Green or it does not ship."""
from __future__ import annotations
import argparse, json, os, re, subprocess, sys, yaml
from dataclasses import dataclass, field

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE, os.path.join(HERE, 'checks')]

import model as M                      # noqa: E402
import checks as C                     # noqa: E402
import level as LV                     # noqa: E402


@dataclass
class Ctx:
    root: str = ROOT
    book: str = 'a21'
    book_label: str = 'A2.1'
    volume_title: str = 'Everyday Life'
    expected_units: int = 10
    partial: bool = True
    releasing: bool = False
    spec_source: str = 'spec/golden.yaml'
    spec: dict = field(default_factory=dict)
    typo: dict = field(default_factory=dict)
    palette: dict = field(default_factory=dict)
    cast: dict = field(default_factory=dict)
    grammar: dict = field(default_factory=dict)
    lexis: dict = field(default_factory=dict)
    key: object = None
    results: dict = field(default_factory=dict)
    previous_results: dict = field(default_factory=dict)
    unit_status: dict = field(default_factory=dict)
    manifest: dict = field(default_factory=dict)
    reports: dict = field(default_factory=dict)
    mutation_report: dict | None = None
    unit_executions: int = 0
    _keys: dict = field(default_factory=dict)

    def for_unit(self, u):
        self.key = self._keys.get(u.num)
        return self

    # The whole-book DOCX is named by build_book.py as
    # `EFDL-A2.{vol}-{Title}-u{lo}-{hi}.docx`, and the unit span in that name
    # moves every time a unit is added. Returning a fixed `{book}-book.docx`
    # named a file that has never existed, so every book-scoped check asking
    # for it skipped in silence -- J15 (page count per volume) had never
    # executed once in this project. Resolve the real name off disk instead.
    # The level half of that prefix comes from tools/level.py, so the same
    # runner resolves EFDL-B1.1- when it is run from B1/.

    def _book_docx(self):
        d = os.path.join(self.root, 'build')
        fallback = os.path.join(d, f'{self.book}-book.docx')
        if not os.path.isdir(d):
            return fallback
        pre = LV.prefix(self.book)
        hits = sorted(f for f in os.listdir(d)
                      if f.startswith(pre) and f.endswith('.docx')
                      and 'AnswerKey' not in f)
        # one match in practice: build_book removes the previous span on rename
        return os.path.join(d, hits[-1]) if hits else fallback

    def docx_for(self, u):
        if u is None:
            return self._book_docx()
        return os.path.join(self.root, 'build', f'{self.book}-u{u.num:02d}.docx')

    def pdf_for(self, u):
        return self.docx_for(u)[:-5] + '.pdf'

    def pdf_text(self, p):
        try:
            return subprocess.run(['pdftotext', p, '-'], capture_output=True,
                                  text=True, timeout=60).stdout
        except Exception:
            return ''


def _load_yaml(*parts):
    """Read one YAML file, and say which file and which line broke if it does.

    A bare colon inside an unquoted ledger fact (`a coat older than Dani: it
    has been relined`) makes YAML read the string as a mapping, and PyYAML's
    own traceback is twenty frames of composer internals with the filename
    only at the very bottom. This happened twice while writing A2.2, so the
    message now names the file, the line and the usual cause."""
    path = os.path.join(ROOT, *parts)
    try:
        return yaml.safe_load(open(path, encoding='utf-8'))
    except yaml.YAMLError as e:
        mark = getattr(e, 'problem_mark', None)
        where = f' line {mark.line + 1}, column {mark.column + 1}' if mark else ''
        line = ''
        if mark:
            try:
                line = open(path, encoding='utf-8').read().split('\n')[mark.line]
            except Exception:
                pass
        raise SystemExit(
            f'{os.path.join(*parts)}{where}: {getattr(e, "problem", e)}\n'
            f'  {line.strip()}\n'
            '  A bare ": " inside an unquoted value is read as a mapping. '
            'Use a semicolon, or quote the whole value.') from None


def load_ctx(book='a21') -> Ctx:
    y = _load_yaml
    c = Ctx(book=book,
            book_label=LV.label(book),
            volume_title=LV.title(book))
    c.spec = y('spec', 'golden.yaml')
    c.typo = y('spec', 'typography.yaml')
    c.palette = y('spec', 'palette.yaml')
    c.cast = y('ledgers', 'cast.yaml')
    c.grammar = y('ledgers', 'grammar.yaml')
    c.lexis = y('ledgers', 'lexis.yaml')
    prev = os.path.join(ROOT, 'reports', f'{book}-last.json')
    if os.path.exists(prev):
        c.previous_results = json.load(open(prev)).get('results', {})
    mut = os.path.join(ROOT, 'reports', f'{book}-mutations.json')
    if os.path.exists(mut):
        c.mutation_report = json.load(open(mut))
    man = os.path.join(ROOT, 'reports', 'manifest.json')
    if os.path.exists(man):
        c.manifest = json.load(open(man))
    return c


def discover(book: str):
    d = os.path.join(ROOT, 'units')
    units, keys = [], {}
    for f in sorted(os.listdir(d)) if os.path.isdir(d) else []:
        if re.fullmatch(rf'{book}-u\d\d\.md', f):
            u = M.parse(os.path.join(d, f))
            units.append(u)
            kp = os.path.join(ROOT, 'keys', f.replace('.md', '-key.md'))
            if os.path.exists(kp):
                keys[u.num] = M.parse_key(kp)
    return units, keys


def run(book='a21', only=None, quiet=False, releasing=False):
    reg = C.load_all()
    ctx = load_ctx(book)
    ctx.releasing = releasing
    units, ctx._keys = discover(book)
    ctx.partial = len(units) < ctx.expected_units

    rows = []
    ordered = sorted(reg.items(), key=lambda kv: (kv[1].scope != 'unit', kv[0]))
    for cid, chk in ordered:
        if only and not re.match(only, cid):
            continue
        if chk.scope == 'unit':
            for u in units:
                ctx.for_unit(u)
                try:
                    r = chk.fn(u, ctx)
                except Exception as e:
                    r = C.Result(False, f'{type(e).__name__}: {e}')
                ctx.unit_executions += 1
                key = f'{cid}@u{u.num:02d}'
                verdict = ('SKIP' if r.ok and r.detail.startswith('SKIP')
                           else 'GATE' if (chk.gate and r.ok)
                           else 'PASS' if r.ok else 'FAIL')
                ctx.results[key] = verdict
                rows.append((key, verdict, chk.desc, r.detail))
        else:
            ctx.for_unit(units[0]) if units else None
            try:
                r = chk.fn(units, ctx)
            except Exception as e:
                r = C.Result(False, f'{type(e).__name__}: {e}')
            verdict = ('SKIP' if r.ok and r.detail.startswith('SKIP')
                       else 'GATE' if (chk.gate and r.ok)
                       else 'PASS' if r.ok else 'FAIL')
            ctx.results[cid] = verdict
            rows.append((cid, verdict, chk.desc, r.detail))

    fails = [r for r in rows if r[1] == 'FAIL']
    gates = [r for r in rows if r[1] == 'GATE']
    skips = [r for r in rows if r[1] == 'SKIP']
    if not quiet:
        for k, v, desc, detail in rows:
            if v == 'FAIL':
                print(f'FAIL {k:14s} {desc}\n       {detail}')
        for k, v, desc, detail in gates:
            print(f'GATE {k:14s} {desc}\n       {detail[:150]}')
        if skips:
            print(f'SKIP {len(skips)}: ' + ', '.join(sorted({k.split("@")[0] for k, *_ in skips})))
    os.makedirs(os.path.join(ROOT, 'reports'), exist_ok=True)
    json.dump({'book': book, 'units': [u.num for u in units],
               'results': ctx.results,
               'summary': {'total': len(rows),
                           'pass': len(rows) - len(fails) - len(gates) - len(skips),
                           'fail': len(fails), 'gate': len(gates), 'skip': len(skips)}},
              open(os.path.join(ROOT, 'reports', f'{book}-last.json'), 'w'), indent=1)
    print(f'\n{book}: {len(units)} unit(s) · {len(reg)} checks · {len(rows)} executions · '
          f'{len(rows)-len(fails)-len(gates)-len(skips)} pass · {len(fails)} FAIL · '
          f'{len(gates)} gate · {len(skips)} skip')
    return 1 if fails else 0


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--book', default='a21')
    ap.add_argument('--only', default=None, help='regex on check id')
    ap.add_argument('--quiet', action='store_true')
    ap.add_argument('--releasing', action='store_true')
    a = ap.parse_args()
    sys.exit(run(a.book, a.only, a.quiet, a.releasing))
