# -*- coding: utf-8 -*-
"""Edit an exercise item in place, by parsing rather than by matching text.

An item is a tuple `(stem, options, answer, explanation[, wrongs])` inside an
`items=[...]` list, wrapped across lines by the author's margin. Neither sed
nor a string match can find one reliably. This walks the module's AST, takes
each item's exact source span, and writes a new tuple back at the same
indentation.

    from itemedit import Items
    f = Items('content/u61.py')
    for it in f.all():
        if len(it.ans.split()) > 3:
            it.set(stem='...', ans='...', why='...')
    f.save()
"""
import ast
import io
import re

WIDTH = 72


def lit(s):
    body = s.replace('\\', '\\\\').replace("'", "\\'")
    return "'" + ''.join(c if ord(c) < 128 else '\\u%04x' % ord(c)
                         for c in body) + "'"


def wrap(text, indent, first_prefix='', last_suffix=''):
    """Emit text as adjacent literals at `indent`, honouring the margin."""
    room = max(24, WIDTH - indent - 2)
    words, lines, cur = text.split(' '), [], ''
    for w in words:
        trial = (cur + ' ' + w) if cur else w
        if len(trial) + 1 > room and cur:
            lines.append(cur + ' ')
            cur = w
        else:
            cur = trial
    lines.append(cur)
    out = [(' ' * indent if i else '') + lit(s) for i, s in enumerate(lines)]
    return ('\n'.join(out))


class Item(object):
    def __init__(self, owner, node):
        self.owner, self.node = owner, node
        v = ast.literal_eval(node)
        self.stem, self.opts, self.ans, self.why = v[0], v[1], v[2], v[3]
        self.wrongs = v[4] if len(v) > 4 else None
        self.new = None

    def set(self, stem=None, ans=None, why=None, wrongs=None, opts=False):
        if stem is not None:
            self.stem = stem
        if ans is not None:
            self.ans = ans
        if why is not None:
            self.why = why
        if wrongs is not None:
            self.wrongs = wrongs
        if opts is not False:
            self.opts = opts
        self.new = True

    def source(self, indent):
        inner = indent + 1
        parts = [wrap(self.stem, inner)]
        if self.opts:
            parts.append('[%s]' % ', '.join(lit(o) for o in self.opts))
        else:
            parts.append('None')
        parts.append(repr(self.ans) if not isinstance(self.ans, str)
                     else wrap(self.ans, inner))
        parts.append(wrap(self.why, inner))
        if self.wrongs:
            ws = ', '.join('%d: %s' % (k, wrap(v, inner + 4))
                           for k, v in sorted(self.wrongs.items()))
            parts.append('{%s}' % ws)
        body = ''
        line = '('
        for i, p in enumerate(parts):
            piece = p + (', ' if i < len(parts) - 1 else ')')
            if '\n' in piece or len(line.split('\n')[-1]) + len(piece.split('\n')[0]) > WIDTH - indent:
                body += line.rstrip() + '\n' + ' ' * inner
                line = piece
            else:
                line += piece
        return body + line


class Items(object):
    def __init__(self, path):
        self.path = path
        self.src = io.open(path, encoding='utf-8').read()
        self.lines = self.src.split('\n')
        tree = ast.parse(self.src)
        self.items = []
        for node in ast.walk(tree):
            if not isinstance(node, ast.Tuple) or len(node.elts) < 4:
                continue
            try:
                v = ast.literal_eval(node)
            except Exception:
                continue
            if not (isinstance(v[0], str) and (v[1] is None or isinstance(v[1], list))
                    and isinstance(v[3], str)):
                continue
            if v[1] is not None and not all(isinstance(o, str) for o in v[1]):
                continue
            self.items.append(Item(self, node))

    def all(self):
        return self.items

    def find(self, needle):
        hits = [i for i in self.items if needle in i.stem]
        if len(hits) != 1:
            raise KeyError('%d items match %r' % (len(hits), needle[:50]))
        return hits[0]

    def save(self):
        edits = [i for i in self.items if i.new]
        if not edits:
            return 0
        # replace from the bottom so earlier spans stay valid
        for it in sorted(edits, key=lambda x: (-x.node.lineno, -x.node.col_offset)):
            n = it.node
            a_line, a_col = n.lineno - 1, n.col_offset
            b_line, b_col = n.end_lineno - 1, n.end_col_offset
            # ast gives column offsets in UTF-8 BYTES, not characters, so a
            # line carrying a curly apostrophe slices two short and eats the
            # comma after the tuple. Slice the bytes.
            hb = self.lines[a_line].encode('utf-8')
            tb = self.lines[b_line].encode('utf-8')
            head = hb[:a_col].decode('utf-8')
            tail = tb[b_col:].decode('utf-8')
            indent = len(head) - len(head.rstrip()) + len(head.rstrip()) - len(head.strip()) if False else len(head)
            new = it.source(indent)
            block = (head + new + tail).split('\n')
            self.lines[a_line:b_line + 1] = block
        io.open(self.path, 'w', encoding='utf-8').write('\n'.join(self.lines))
        return len(edits)
