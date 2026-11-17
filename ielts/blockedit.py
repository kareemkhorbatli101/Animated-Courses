# -*- coding: utf-8 -*-
"""Set a keyword on one exercise block in a content module.

The item editor edits items and the label editor edits labels. This edits
the block itself, which phases 12 and 13 need in order to give a block a
lettered bank, a bank label, a plan figure or an authored qkind without
anybody retyping a dict literal by hand and getting the indentation wrong.

    from blockedit import setkw
    setkw('u51', 'listen', 4, bank=['A', 'B', 'C', 'D', 'E', 'F'],
          banklabel='What each speaker says')

The block is addressed the way the gate addresses it: the module, the
skill, and the block's index in that skill across the whole unit, counted
in source order. An existing keyword is replaced; a new one is inserted
after `task`, which every block has. The file is edited as bytes because
ast column offsets are byte offsets, which cost an hour the first time.
"""
import ast
import importlib.util
import io
import os
import pprint

import _base                                            # noqa: F401

HERE = os.path.dirname(os.path.abspath(__file__))


def _calls(tree, skill):
    out = []
    for node in ast.walk(tree):
        if isinstance(node, ast.keyword) and node.arg == skill \
                and isinstance(node.value, (ast.List, ast.Tuple)):
            out += [e for e in node.value.elts if isinstance(e, ast.Call)]
    out.sort(key=lambda c: (c.lineno, c.col_offset))
    return out


def _lit(v, indent):
    if isinstance(v, str):
        return repr(v)
    s = pprint.pformat(v, width=74 - indent, indent=1)
    pad = '\n' + ' ' * (indent + 1)
    return s.replace('\n', pad)


def setkw(name, skill, index, **kw):
    """Set keywords on one block. Returns how many were written."""
    path = os.path.join(HERE, 'content', name + '.py')
    src = io.open(path, encoding='utf-8').read()
    tree = ast.parse(src)
    calls = _calls(tree, skill)
    if not (0 <= index < len(calls)):
        raise SystemExit('%s: no %s block %d (there are %d)'
                         % (name, skill, index, len(calls)))
    call = calls[index]
    blines = src.encode('utf-8').split(b'\n')

    def span(node):
        a = sum(len(l) + 1 for l in blines[:node.lineno - 1]) \
            + node.col_offset
        b = sum(len(l) + 1 for l in blines[:node.end_lineno - 1]) \
            + node.end_col_offset
        return a, b

    jobs = []
    anchor = None
    for k in call.keywords:
        if k.arg == 'task':
            anchor = k
        if k.arg in kw:
            a, b = span(k.value)
            jobs.append((a, b, _lit(kw.pop(k.arg), k.value.col_offset)))
    if kw:
        if anchor is None:
            raise SystemExit('%s %s%d: no task= to insert after'
                             % (name, skill, index))
        a, b = span(anchor.value)
        ind = anchor.value.col_offset
        add = ''.join(',\n%s%s=%s' % (' ' * (ind - len('task=')), k,
                                      _lit(v, ind))
                      for k, v in kw.items())
        jobs.append((b, b, _lit(anchor.value.value, ind) + add))
    out = src.encode('utf-8')
    for a, b, text in sorted(jobs, reverse=True):
        out = out[:a] + text.encode('utf-8') + out[b:]
    io.open(path, 'wb').write(out)
    return len(jobs)


def blocks(name, skill):
    """(index, task, items) for every block of one skill, for the author."""
    path = os.path.join(HERE, 'content', name + '.py')
    spec = importlib.util.spec_from_file_location('be_' + name, path)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    out = []
    i = 0
    for ci, c in enumerate(m.UNIT['cycles'], 1):
        for b in c[skill]:
            out.append((i, 'c%d' % ci, b))
            i += 1
    return out
