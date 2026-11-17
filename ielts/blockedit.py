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

    raw = src.encode('utf-8')

    def span(node):
        a = sum(len(l) + 1 for l in blines[:node.lineno - 1]) \
            + node.col_offset
        b = sum(len(l) + 1 for l in blines[:node.end_lineno - 1]) \
            + node.end_col_offset
        # ast does not record the redundant brackets round an implicit
        # string concatenation, so the span of a wrapped task= ends before
        # the closing bracket. Grow over any balanced pair, or a
        # replacement leaves the old brackets round the new literal and an
        # insert lands inside them.
        while a > 0 and raw[a - 1:a] == b'(' and raw[b:b + 1] == b')':
            a, b = a - 1, b + 1
        return a, b

    jobs = []
    anchor = None
    for k in call.keywords:
        if k.arg in ('items', 'script', 'paras') and anchor is None:
            anchor = k
        if k.arg in kw:
            a, b = span(k.value)
            col = a - (raw.rfind(b'\n', 0, a) + 1)
            jobs.append((a, b, _lit(kw.pop(k.arg), col)))
    if kw:
        # Inserted BEFORE a keyword rather than after one. The first
        # version re-emitted task= at the end of its own span and relied on
        # that span covering the old text; where the label was a wrapped
        # concatenation it did not, so the file kept the old label AND
        # gained a copy. Eight blocks shipped with their label printed
        # twice. A keyword node's own start is unambiguous.
        if anchor is None:
            raise SystemExit('%s %s%d: nothing to insert before'
                             % (name, skill, index))
        a, _ = span(anchor)
        ind = anchor.col_offset
        jobs.append((a, a, ''.join('%s=%s,\n%s' % (k, _lit(v, ind), ' ' * ind)
                                   for k, v in kw.items())))
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


def addscript(name, skill, index, lines):
    """Append (speaker, line) pairs to one block's recording script.

    Phase 12 and 13 avoided this on purpose: a question can almost always
    be re-asked in another task's form without touching the recording. A
    plan or diagram labelling task is the exception. It needs the
    recording to say where things are, and a script that never describes a
    place cannot be relabelled into one - the task would be unanswerable.
    So ten scripts in each Foundation book gain two to four lines, in the
    speaker's voice, saying what the diagram shows. Those additions are
    declared as text changes in the phase's intent file, where every other
    change to a script in this series has had to be declared.
    """
    blks = blocks(name, skill)
    if not (0 <= index < len(blks)):
        raise SystemExit('%s: no %s block %d' % (name, skill, index))
    old = list(blks[index][2].get('script') or [])
    return setkw(name, skill, index, script=old + [tuple(x) for x in lines])
