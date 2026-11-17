# -*- coding: utf-8 -*-
"""Edit one cycle's speaking slot in a content module.

Phase 14. Every book in the series put sixty per cent of its speaking
slots into Part 3 and ten per cent into Part 2, and the two Foundation
books ran a Part 2 long turn with no cue card printed anywhere, which is
not a long turn at all: the card is the task. Fixing that means changing
the `part` label, adding the card, rewriting the lead-in and the
questions, and moving the questions the slot used to ask into the Part 3
slot beside it so that nothing taught stops being taught.

    from speakedit import edit
    edit('u01', 3, part='Part 2',
         cue=('Describe a skill you learned as an adult.',
              ['what the skill was', 'why you decided to learn it',
               'how long it took', 'and explain how useful it has been']),
         intro='...', qs=['...', '...', '...'])
    edit('u01', 4, add_qs=['...'])          # the old questions, kept

The cycle is addressed by its number from 1, the way the book prints it.
`add_qs` appends to the list instead of replacing it, which is how a
question moves from one slot to another without being retyped. The file
is edited as bytes, because ast column offsets are byte offsets.
"""
import ast
import io
import os
import sys
import textwrap

import _base                                            # noqa: F401

HERE = os.path.dirname(os.path.abspath(__file__))
WIDTH = 74


def _speaks(tree):
    out = []
    for node in ast.walk(tree):
        if isinstance(node, ast.keyword) and node.arg == 'speak' \
                and isinstance(node.value, ast.Call):
            out.append(node.value)
    out.sort(key=lambda c: (c.lineno, c.col_offset))
    return out


def _str_lit(s, indent):
    """A string as the file writes them: implicit concatenation, wrapped."""
    room = WIDTH - indent - 2
    lines = textwrap.wrap(s, max(24, room), break_long_words=False)
    if len(lines) == 1:
        return _q(lines[0])
    pad = '\n' + ' ' * (indent + 1)
    body = pad.join(_q(l + (' ' if i < len(lines) - 1 else ''))
                    for i, l in enumerate(lines))
    return '(' + body.lstrip() + ')'


def _q(s):
    return "'%s'" % s.replace('\\', '\\\\').replace("'", "\\'")


def _list_lit(xs, indent):
    """A list of strings, one per line, aligned under the opening bracket."""
    pad = ',\n' + ' ' * (indent + 1)
    return '[' + pad.join(_str_lit(x, indent + 1) for x in xs) + ']'


def _cue_lit(cue, indent):
    title, bullets = cue
    pad = ' ' * (indent + 1)
    return '(%s,\n%s%s)' % (_str_lit(title, indent + 1), pad,
                            _list_lit(bullets, indent + 1))


def edit(name, cycle, part=None, cue=None, intro=None, qs=None, add_qs=None,
         focus=None):
    """Change one speaking slot. Returns how many fields were written."""
    path = os.path.join(HERE, 'content', name + '.py')
    src = io.open(path, encoding='utf-8').read()
    tree = ast.parse(src)
    calls = _speaks(tree)
    if not (1 <= cycle <= len(calls)):
        raise SystemExit('%s: no cycle %d (there are %d)'
                         % (name, cycle, len(calls)))
    call = calls[cycle - 1]
    blines = src.encode('utf-8').split(b'\n')

    raw = src.encode('utf-8')

    def span(node):
        a = sum(len(l) + 1 for l in blines[:node.lineno - 1]) + node.col_offset
        b = sum(len(l) + 1 for l in blines[:node.end_lineno - 1]) \
            + node.end_col_offset
        # ast does not record the redundant parentheses around an implicit
        # string concatenation, so the span of
        #     intro=('one '
        #            'two')
        # ends before the closing bracket. Replacing it alone leaves the
        # old brackets wrapped round the new literal, and inserting after
        # it puts the new keyword INSIDE them, which is a SyntaxError at
        # the next import. Grow the span over any balanced pair.
        while a > 0 and raw[a - 1:a] == b'(' and raw[b:b + 1] == b')':
            a, b = a - 1, b + 1
        return a, b

    kws = {k.arg: k for k in call.keywords}
    jobs = []
    if add_qs:
        k = kws['qs']
        old = ast.literal_eval(k.value)
        qs = list(old) + list(add_qs)
    for field, value, lit in (('part', part, _str_lit),
                              ('focus', focus, _str_lit),
                              ('intro', intro, _str_lit),
                              ('qs', qs, _list_lit),
                              ('cue', cue, _cue_lit)):
        if value is None:
            continue
        if field in kws:
            k = kws[field]
            a, b = span(k.value)
            # The indent the new literal wraps under is where the span
            # actually starts, which is one left of the string's own column
            # when the old value was parenthesised.
            col = a - (raw.rfind(b'\n', 0, a) + 1)
            jobs.append((a, b, lit(value, col)))
        else:
            # Inserted before an existing keyword rather than after one,
            # because a keyword node's own start is unambiguous while the
            # end of its value is not (see span).
            anchor = kws.get('qs') or kws.get('shape') or kws['part']
            a, _ = span(anchor)
            ind = anchor.col_offset
            jobs.append((a, a, '%s=%s,\n%s'
                         % (field, lit(value, ind + len(field) + 1),
                            ' ' * ind)))
    out = src.encode('utf-8')
    for a, b, text in sorted(jobs, reverse=True):
        out = out[:a] + text.encode('utf-8') + out[b:]
    io.open(path, 'wb').write(out)
    return len(jobs)


def show(name):
    """Print every speaking slot of one unit, for the author."""
    import importlib.util
    path = os.path.join(HERE, 'content', name + '.py')
    spec = importlib.util.spec_from_file_location('se_' + name, path)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    print('== %s  %s' % (name, m.UNIT.get('title', '')))
    for ci, c in enumerate(m.UNIT['cycles'], 1):
        sp = c['speak']
        print(' c%d %-20s %s' % (ci, sp.get('part'), sp.get('focus')))
        print('    intro: %s' % sp.get('intro'))
        if sp.get('cue'):
            print('    CUE: %s  %s' % (sp['cue'][0], sp['cue'][1]))
        for q in sp.get('qs') or []:
            print('    q: %s' % q)
        if sp.get('longturn'):
            print('    longturn: %d words' % sum(len(x.split())
                                                 for x in sp['longturn']))


if __name__ == '__main__':
    show(sys.argv[1])
