# -*- coding: utf-8 -*-
"""Insert the rebuilt cycle's beats into a unit module, by anchor.

A unit module is a literal dict spread over a thousand lines, and the new
beats - the lead-in, the vocabulary work, the Skills builder, the advice
box, the debrief, the outside-the-exam line and the teacher's notes - all
hang at cycle level. Each cycle carries a `step=N,` line and the five step
values are unique inside a unit, so that line is an exact anchor.

Unit-level keys go in before `cycles=[`.

The tool re-imports the module afterwards and refuses to leave a file that
will not parse, because a half-applied insertion into a dict literal is
much worse than no insertion at all.

Usage, from a script:
    import beats
    beats.add('u21', unit=UNIT_SRC, cycles={1: SRC1, 2: SRC2, ...})
"""
import importlib
import io
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))


def path_of(name):
    return os.path.join(HERE, 'content', name + '.py')


def _into_list(out, step_anchor, list_anchor, body, where):
    """Insert a block at the FRONT of a named list inside one cycle.

    A preview input lives in the cycle's own `read` or `listen` list, so
    that check.py measures its length against the band and _items_ok
    measures its questions, exactly as it does for the exam task. The list
    opener is not unique in the file - every cycle has one - so it is
    found relative to that cycle's step anchor, which is.
    """
    i = out.index(step_anchor) + len(step_anchor)
    j = out.find(list_anchor, i)
    if j < 0:
        raise ValueError('%s: no %r after %r'
                         % (where, list_anchor.strip(), step_anchor.strip()))
    k = j + len(list_anchor)
    block = body.strip('\n')
    if not block.endswith(','):
        block += ','
    return out[:k] + block + '\n' + out[k:]


def add(name, unit='', cycles=None, read_pre=None, listen_pre=None,
        gram=None, dry=False):
    p = path_of(name)
    src = io.open(p, encoding='utf-8').read()
    out = src
    for opener, lst in (('   read=[\n', read_pre or {}),
                        ('   listen=[\n', listen_pre or {}),
                        ('   gram=dict(\n', gram or {})):
        for n, block in sorted(lst.items()):
            step = '   step=%d,\n' % n
            if out.count(step) != 1:
                raise ValueError('%s: anchor %r appears %d times'
                                 % (name, step.strip(), out.count(step)))
            out = _into_list(out, step, opener, block,
                             '%s c%d' % (name, n))
    for n, block in sorted((cycles or {}).items()):
        anchor = '   step=%d,\n' % n
        if out.count(anchor) != 1:
            raise ValueError('%s: anchor %r appears %d times'
                             % (name, anchor.strip(), out.count(anchor)))
        body = block.strip('\n')
        if not body.endswith(','):
            body += ','
        out = out.replace(anchor, anchor + body + '\n')
    if unit:
        anchor = ' cycles=[\n'
        if out.count(anchor) != 1:
            raise ValueError('%s: cycles anchor appears %d times'
                             % (name, out.count(anchor)))
        body = unit.strip('\n')
        if not body.endswith(','):
            body += ','
        out = out.replace(anchor, body + '\n' + anchor)
    if dry:
        return out
    shutil.copy(p, p + '.bak')
    io.open(p, 'w', encoding='utf-8').write(out)
    try:
        if 'content.' + name in sys.modules:
            importlib.reload(sys.modules['content.' + name])
        else:
            importlib.import_module('content.' + name)
    except Exception:
        shutil.copy(p + '.bak', p)
        raise
    os.remove(p + '.bak')
    return out
