# -*- coding: utf-8 -*-
"""Render the logistics pack markdown into a Book-2-styled .docx."""
import io, os, re, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'book2'))
from docxw import Doc

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   'AlHasan_Logistics_Problems_Pack.md')
STRAP = 'Al-Hasan International — English for Trade, Industry & Global Partnerships'


def plain(s):
    s = re.sub(r'\*\*(.+?)\*\*', r'\1', s)
    s = re.sub(r'(?<!\w)\*(.+?)\*(?!\w)', r'\1', s)
    return s.strip()


def build(out):
    d = Doc()
    lines = io.open(SRC, encoding='utf-8').read().split('\n')
    i, first, in_conv, in_key = 0, True, False, False
    pend = []            # pending numbered items

    def flush():
        if pend:
            d.items([plain(x) for x in pend], 1)
            del pend[:]

    while i < len(lines):
        ln = lines[i].rstrip()
        i += 1
        if not ln.strip() or ln.strip() in ('---',):
            flush(); continue

        if ln.startswith('# '):
            flush()
            t = plain(ln[2:])
            if t.lower().startswith('answer key'):
                in_key = True
                d.page_break_section(); d.keybar('Answer Key')
            else:
                d.unit_title(t); d.strapline(STRAP)
                d.cefr('CEFR B1   ·   Logistics: shipping and receiving   ·   '
                       'six texts and six conversations, with comprehension')
            continue

        if ln.startswith('## '):
            flush()
            t = plain(ln[3:])
            in_conv = t.lower().startswith('conversation')
            if not first:
                d.page_break_section()
            first = False
            tag = ('DIALOGUE' if in_conv else
                   'READING' if t.lower().startswith('text') else 'LOGISTICS')
            d.partbar(t, tag)
            continue

        if ln.startswith('### '):
            flush(); d.h3(plain(ln[4:])); continue

        m = re.match(r'^(\d+)\.\s+(.*)$', ln)
        if m:
            pend.append(m.group(2)); continue
        flush()

        # a dialogue turn inside a conversation
        if in_conv and not in_key:
            m = re.match(r'^\*\*(.+?):\*\*\s*(.*)$', ln)
            if m:
                d.dialogue([(m.group(1), plain(m.group(2)))]); continue

        # a bold label, alone or followed by text
        m = re.match(r'^\*\*(.+?)[:.]\*\*\s*(.*)$', ln)
        if m:
            d.ex(m.group(1) + ('.' if m.group(2) else ''))
            if m.group(2):
                d.body_p(plain(m.group(2)))
            continue
        if re.match(r'^\*\*[^*]+\*\*$', ln):
            d.ex(plain(ln)); continue

        if in_key:
            d.keyline('', plain(ln)); continue
        d.body_p(plain(ln))

    flush()
    d.page_break_section(zero=True)
    d.save(out)
    return d


if __name__ == '__main__':
    out = sys.argv[1] if len(sys.argv) > 1 else '../AlHasan_Logistics_Problems_Pack.docx'
    d = build(out)
    print('wrote %s  (%.0f KB, %d body elements)'
          % (out, os.path.getsize(out) / 1024, len(d.body)))
