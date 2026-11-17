# -*- coding: utf-8 -*-
"""Rewrite the printed task label of every exercise block from its items.

Phase 11. The audit found three kinds of false label and 713 items under
one. Rather than correct them by hand and hope, this walks the source,
asks `qtypes.label_for` what the block actually holds, and writes that
string into the `task=` keyword of the dict literal that builds it.

    python3 labeledit.py u11            # report what would change
    python3 labeledit.py u11 write      # change it

Nothing but the label moves. The tool refuses to run on a file whose
blocks it cannot match one-to-one against the loaded module, because a
mismatch would silently relabel the wrong exercise.
"""
import ast
import importlib.util
import io
import os
import sys

import _base                                            # noqa: F401
import qtypes

HERE = os.path.dirname(os.path.abspath(__file__))


def load(path, name):
    spec = importlib.util.spec_from_file_location('le_' + name, path)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def _unit_calls(tree, skill):
    """Every dict(...) call that builds a block of one skill, in order."""
    out = []
    for node in ast.walk(tree):
        if not isinstance(node, ast.keyword) or node.arg != skill:
            continue
        if not isinstance(node.value, (ast.List, ast.Tuple)):
            continue
        for el in node.value.elts:
            if isinstance(el, ast.Call):
                out.append(el)
    out.sort(key=lambda c: (c.lineno, c.col_offset))
    return out


def _task_kw(call):
    for kw in call.keywords:
        if kw.arg == 'task':
            return kw
    return None


def plan(name):
    """[(start, end, old, new, addr)] for one content module."""
    path = os.path.join(HERE, 'content', name + '.py')
    src = io.open(path, encoding='utf-8').read()
    tree = ast.parse(src)
    m = load(path, name)
    jobs = []
    U = getattr(m, 'UNIT', None)
    if U is None:
        return path, src, jobs
    for skill in ('read', 'listen'):
        blocks = [b for c in U['cycles'] for b in c[skill]]
        calls = _unit_calls(tree, skill)
        if len(blocks) != len(calls):
            raise SystemExit('%s: %d %s blocks but %d dict() calls - '
                             'refusing to guess'
                             % (name, len(blocks), skill, len(calls)))
        for i, (blk, call) in enumerate(zip(blocks, calls)):
            kw = _task_kw(call)
            if kw is None:
                continue
            new = qtypes.label_for(blk, skill)
            if not new:
                continue
            old = blk.get('task') or ''
            if new == old:
                continue
            # ast col_offset is a UTF-8 BYTE offset into the line, not a
            # character offset. Getting that wrong ate the comma after a
            # label on a line containing a curly apostrophe, so the span
            # is computed on bytes and the file is edited as bytes.
            blines = src.encode('utf-8').split(b'\n')
            start = sum(len(l) + 1 for l in blines[:kw.value.lineno - 1]) \
                + kw.value.col_offset
            end = sum(len(l) + 1 for l in blines[:kw.value.end_lineno - 1]) \
                + kw.value.end_col_offset
            jobs.append((start, end, old, new, '%s %s%d' % (name, skill, i)))
    return path, src, jobs


def apply(name, write=False):
    path, src, jobs = plan(name)
    for start, end, old, new, addr in jobs:
        print('  %-14s %-58s -> %s' % (addr, old[:58], new))
    if write and jobs:
        out = src.encode('utf-8')
        for start, end, old, new, addr in sorted(jobs, reverse=True):
            out = out[:start] + _lit(new).encode('utf-8') + out[end:]
        io.open(path, 'wb').write(out)
    return len(jobs)


def _lit(s):
    """A single-quoted Python literal, wrapped if the line would run long."""
    body = s.replace('\\', '\\\\').replace("'", "\\'")
    return "'%s'" % body


def main(argv):
    names = [argv[1]] if len(argv) > 1 and not argv[1].startswith('-') else []
    write = 'write' in argv
    if not names or names[0] == 'all':
        names = ['u%02d' % n for n in range(1, 81)]
    n = 0
    for nm in names:
        n += apply(nm, write)
    print('%d label(s) %s' % (n, 'rewritten' if write else 'to rewrite'))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
