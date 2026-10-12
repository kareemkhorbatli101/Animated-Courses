#!/usr/bin/env python3
"""Permute the bank_strip figure tuples to match the repaired markdown order.

`fix_shuffle.py` changed the printed order of 42 word banks. Three figure slots
draw a bank in print order -- 3 (Warm Up 2), 9 (Part 1 6) and 39 (Part 10 1) --
and their captions say "in the order it is printed", so they have to follow.

This permutes the EXISTING tuples rather than re-generating the slot, because
several of those slots carry a hand-chosen icon that differs from the icon map's
default ('busy' is drawn as a bus in Unit 1, not as a crowd), and regenerating
would silently revert it. The alt text's word enumeration is permuted with the
tuples; nothing else in any content module is touched.
"""
from __future__ import annotations
import os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE]
import model as M                                            # noqa: E402

SLOT_SUB = {3: ('Warm Up', 2), 9: ('Part 1', 6), 39: ('Part 10', 1)}
BOOKS = {'a21': range(1, 11), 'a22': range(11, 21)}


def bank_of(u, part, idx):
    p = u.part(part)
    return M.word_bank(p.subs[idx - 1]) if p and len(p.subs) >= idx else None


def main(write=False):
    n = 0
    for book, nums in BOOKS.items():
        for num in nums:
            u = M.parse(os.path.join(ROOT, 'units', f'{book}-u{num:02d}.md'))
            path = os.path.join(ROOT, 'content', book, f'u{num:02d}_figures.py')
            src = open(path, encoding='utf-8').read()
            out, touched = src, []
            for slot, (part, idx) in SLOT_SUB.items():
                want = bank_of(u, part, idx)
                if not want:
                    continue
                # the one bank_strip call that belongs to this slot
                m = re.search(rf'^ {slot}: lambda: F\.bank_strip\(\s*\n'
                              rf'(\s*)\[(.*?)\],\s*\n', out, re.S | re.M)
                if not m:
                    continue
                indent, body = m.group(1), m.group(2)
                tuples = re.findall(r"\((['\"])(.*?)\1,\s*(['\"])(.*?)\3\)", body)
                # a content module may hold a word as a \\uXXXX escape
                # ("mustn\\u2019t"); compare and re-emit the real character.
                def deesc(s):
                    return (s.encode().decode('unicode_escape')
                            if '\\u' in s else s)
                tuples = [(a, deesc(w), c, i) for a, w, c, i in tuples]
                have = [t[1] for t in tuples]
                if [w.lower() for w in have] == [w.lower() for w in want]:
                    continue
                bywlow = {t[1].lower(): (t[1], t[3]) for t in tuples}
                if {w.lower() for w in want} != set(bywlow):
                    print(f'  !! {book} u{num:02d} slot {slot}: figure draws '
                          f'{have} but the bank is {want} - skipped')
                    continue
                new = [bywlow[w.lower()] for w in want]
                src_list = ', '.join(f"({w!r}, {i!r})" for w, i in new)
                # rewrap to the file's style: 72 columns inside the brackets
                lines, cur = [], ''
                for piece in src_list.split(', ('):
                    piece = piece if not lines and not cur else '(' + piece
                    cand = (cur + (', ' if cur else '') + piece)
                    if len(indent) + len(cand) > 76 and cur:
                        lines.append(cur); cur = piece
                    else:
                        cur = cand
                if cur:
                    lines.append(cur)
                joined = (',\n' + indent + ' ').join(
                    l.rstrip(',') for l in lines)
                out = out[:m.start(2)] + joined + out[m.end(2):]
                # and the alt's enumeration, if it lists exactly those words
                seg_end = out.index(f'\n {slot}: lambda:') + 1
                nxt = re.search(r'\n \d+: lambda:', out[seg_end + 1:])
                seg_stop = seg_end + 1 + nxt.start() if nxt else len(out)
                seg = out[seg_end:seg_stop]
                # Only the alt text, never the tuple list: the words appear in
                # both, and rewriting the list a second time would undo the
                # permutation just applied.
                try:
                    alt_at = seg.index('alt=')
                except ValueError:
                    alt_at = None
                low = [w.lower() for w in have]
                pat = re.compile('|'.join(re.escape(w) for w in
                                          sorted(low, key=len, reverse=True)),
                                 re.I)
                if alt_at is None:
                    touched.append(slot); n += 1; continue
                head, tail = seg[:alt_at], seg[alt_at:]
                found = [f.lower() for f in pat.findall(tail)]
                if found == low:
                    it = iter([w.lower() for w in want])
                    def swap(m, it=it):
                        w = next(it)
                        # keep whatever capitalisation stood here
                        return w[0].upper() + w[1:] if m.group(0)[0].isupper() else w
                    tail = pat.sub(swap, tail, count=len(low))
                else:
                    print(f'     (alt for {book} u{num:02d}.{slot} does not '
                          f'enumerate the bank - left alone)')
                out = out[:seg_end] + head + tail + out[seg_stop:]
                touched.append(slot)
                n += 1
            if touched:
                print(f'  {book} u{num:02d}: slots {touched}')
                if write:
                    open(path, 'w', encoding='utf-8').write(out)
    print(f'\n{n} bank_strip slot(s) {"re-ordered" if write else "to re-order"}')
    return 0


if __name__ == '__main__':
    sys.exit(main('--write' in sys.argv))
