# -*- coding: utf-8 -*-
"""Rich text -> HTML.

This mirrors engine.rich() and engine._emit() exactly.  It is the only
logic in the site generator that is duplicated from the book renderer, so
it lives alone in one module and is covered by a fixture test that walks
every styled fragment in the corpus.
"""
import html

# The book's inline colours become semantic classes rather than literal hex,
# so that a key written in RED is still legible on a dark background.
COLOUR_CLASS = {
    '16365C': 'c-navy', '0F766E': 'c-teal', '9A5B00': 'c-amber',
    '1B6B3A': 'c-green', 'B3261E': 'c-red', '5B3E8E': 'c-violet',
    '5A6472': 'c-grey', '1A1A1A': '',
}


def esc(s):
    return html.escape(str(s), quote=False)


def inline(parts):
    """parts: list of str | (str, {opts}) -> inline HTML."""
    out = []
    for p in parts:
        if isinstance(p, str):
            out.append(esc(p))
            continue
        text, o = p
        s = esc(text)
        if o.get('font') == 'Consolas':
            s = '<code>%s</code>' % s
        if o.get('bold'):
            s = '<strong>%s</strong>' % s
        if o.get('italic'):
            s = '<em>%s</em>' % s
        if o.get('underline'):
            s = '<u>%s</u>' % s
        colour = o.get('colour')
        if colour:
            cls = COLOUR_CLASS.get(colour.upper())
            if cls:
                s = '<span class="%s">%s</span>' % (cls, s)
            elif colour.upper() != '1A1A1A':
                s = '<span style="color:#%s">%s</span>' % (esc(colour), s)
        out.append(s)
    return ''.join(out)


def body(entries):
    """A question or key body -> block HTML.

    Accepts exactly what validate.check_body() permits:
    str | list-of-rich | ('bullets', [...]) | ('mono', [...]) | ('note', str)
    """
    out = []
    for e in entries:
        if isinstance(e, str):
            out.append('<p>%s</p>' % esc(e))
        elif isinstance(e, list):
            out.append('<p>%s</p>' % inline(e))
        elif isinstance(e, tuple):
            kind = e[0]
            if kind == 'bullets':
                lis = ''.join(
                    '<li>%s</li>' % (inline(s) if isinstance(s, list) else esc(s))
                    for s in e[1])
                out.append('<ul>%s</ul>' % lis)
            elif kind == 'mono':
                lines = '\n'.join(
                    inline(l) if isinstance(l, list) else esc(l) for l in e[1])
                out.append('<pre class="mono">%s</pre>' % lines)
            elif kind == 'note':
                out.append('<p class="note">%s</p>' % esc(e[1]))
            else:
                raise ValueError('unknown body marker %r' % (kind,))
        else:
            raise ValueError('unexpected body entry %r' % (e,))
    return ''.join(out)


def paras(lines):
    """A model / scenario / professor prompt: list of plain strings."""
    return ''.join('<p>%s</p>' % esc(l) for l in lines)
