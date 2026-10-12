#!/usr/bin/env python3
"""Repair the answer-shuffling defect C29 and C30 found in the shipped A2 books.

Forty-four closed tasks across the twenty units were answerable without being
read: four matching tasks printed Column B in exactly Column A's order, three
more had three or more answers sitting on the diagonal, and thirty-seven word
banks either printed in answer order or opened with the first answer. Every one
passed the other 238 checks, because they were correct -- just free.

The repair is a permutation, not a rewrite. For a matching task the Column B
TEXTS are re-dealt across the letters a), b), c) ... and the key's letters are
rewritten to follow them; no stem, no option and no distractor changes a word.
For a word bank the printed order changes and nothing else does.

The permutation is DETERMINISTIC -- seeded from the sub-section heading -- so a
re-run of this script reproduces it exactly, and it is drawn repeatedly until it
satisfies C29/C30 rather than being accepted and then checked. The figures that
depict a Column A grid or a word-bank strip regenerate from the markdown, so
they need no hand work.

    python3 tools/fix_shuffle.py            # report what it would change
    python3 tools/fix_shuffle.py --write    # change it
"""
from __future__ import annotations
import hashlib, os, random, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE]
import model as M                                            # noqa: E402

LETTERS = 'abcdefgh'
BOOKS = {'a21': range(1, 11), 'a22': range(11, 21)}


def rng(heading: str) -> random.Random:
    return random.Random(hashlib.sha256(heading.encode()).hexdigest())


def diag(ans: list[str]) -> int:
    return sum(1 for i, c in enumerate(ans) if c == LETTERS[i])


# --- matching ---------------------------------------------------------------

def plan_matching(heading, texts, ans, not_needed):
    """Re-deal Column B's texts so the key stops reading down the diagonal.

    `texts` is Column B in printed order, `ans` the key's letters per stem,
    `not_needed` the distractor's letter. Returns the new printed order of
    texts and the new answer letters, or None if nothing needs doing.
    """
    n = len(texts)
    want = [texts[LETTERS.index(a)] for a in ans]        # stem i's own text
    best, r = None, rng(heading)
    for limit in (1, 2):                                 # prefer 1 on-diagonal
        for _ in range(4000):
            order = texts[:]
            r.shuffle(order)
            new = [LETTERS[order.index(t)] for t in want]
            if diag(new) > limit:
                continue
            if new == ans:                               # no change is no fix
                continue
            if new == [LETTERS[n - 1 - i] for i in range(n)][:len(new)]:
                continue                                 # the reverse diagonal is a pattern too
            best = (order, new)
            break
        if best:
            break
    if not best:
        return None
    order, new = best
    nn = LETTERS[order.index(texts[LETTERS.index(not_needed)])]
    return order, new, nn


def rewrite_matching(ulines, klines, heading, texts, order, ans, new, nn, nntext):
    """Rewrite Column B's rows in the unit and the answer line in the key."""
    # unit: find the Column B table rows for this sub-section
    i = next(i for i, l in enumerate(ulines) if l.strip() == f'**{heading}**')
    j = next(k for k in range(i, len(ulines)) if ulines[k].strip() == '**Column B**')
    rows = [k for k in range(j, min(j + 4 + len(texts) + 4, len(ulines)))
            if re.match(r'^\|\s*\*\*[a-h]\)\*\*\s*\|', ulines[k])]
    assert len(rows) == len(texts), f'{heading}: {len(rows)} B rows, {len(texts)} texts'
    for pos, k in enumerate(rows):
        ulines[k] = f'| **{LETTERS[pos]})** | {order[pos]} |'
    # key: the answer line and the Not-needed line
    ki = next(k for k, l in enumerate(klines) if l.strip() == f'**{heading}**')
    want_old = ' · '.join(f'{p}. {a}' for p, a in enumerate(ans, 1))
    for k in range(ki, min(ki + 12, len(klines))):
        if klines[k].strip() == want_old:
            klines[k] = ' · '.join(f'{p}. {a}' for p, a in enumerate(new, 1))
            break
    else:
        raise AssertionError(f'{heading}: answer line {want_old!r} not found')
    for k in range(ki, min(ki + 12, len(klines))):
        if klines[k].startswith('Not needed:'):
            klines[k] = f'Not needed: **{nn})** *{nntext}*'
            break
    else:
        raise AssertionError(f'{heading}: Not-needed line not found')


# --- word bank --------------------------------------------------------------

def plan_bank(heading, bank, ans):
    lower, blow = [a.lower() for a in ans], [b.lower() for b in bank]
    order = []
    for a in lower:
        if a not in order:
            order.append(a)
    hits0 = sum(1 for i, a in enumerate(lower) if i < len(blow) and blow[i] == a)
    if order != blow and lower[0] != blow[0] and hits0 <= max(1, len(bank) // 4):
        return None                                      # already fine
    r = rng(heading)
    for _ in range(4000):
        new = bank[:]
        r.shuffle(new)
        nlow = [b.lower() for b in new]
        if nlow == order or nlow == order[::-1] or nlow[0] == lower[0]:
            continue
        if nlow == blow:
            continue
        # and no cluster of bank words standing where their own answer stands
        hits = sum(1 for i, a in enumerate(lower) if i < len(nlow) and nlow[i] == a)
        if hits > max(1, len(new) // 4):
            continue
        return new
    return None


def rewrite_bank(ulines, heading, new):
    i = next(i for i, l in enumerate(ulines) if l.strip() == f'**{heading}**')
    for k in range(i, len(ulines)):
        if ulines[k].strip().startswith('**') and k > i and \
           re.match(r'^\*\*(?:Warm-up|Part \d+):', ulines[k].strip()):
            break
        m = re.search(r'(\*\*Word bank:\*\*\s*)(.+)$', ulines[k])
        if m:
            ulines[k] = ulines[k][:m.start(2)] + ' | '.join(new)
            return
    raise AssertionError(f'{heading}: word-bank line not found')


# --- driver -----------------------------------------------------------------

def main(write=False):
    nm = nb = 0
    for book, nums in BOOKS.items():
        for num in nums:
            up = os.path.join(ROOT, 'units', f'{book}-u{num:02d}.md')
            kp = os.path.join(ROOT, 'keys', f'{book}-u{num:02d}-key.md')
            u, key = M.parse(up), M.parse_key(kp)
            ulines = open(up, encoding='utf-8').read().split('\n')
            klines = open(kp, encoding='utf-8').read().split('\n')
            touched = False
            for s in u.subs:
                ks = key.section(s.heading)
                items = ks.items if ks else {}
                m = M.matchings(s)
                if m and ks:
                    ans = [v for n, v in sorted(items.items())
                           if n > 0 and re.fullmatch(r'[a-h]', v)]
                    if len(ans) == len(m.a) and ans and diag(ans) > 2:
                        texts = [t for _, t in m.b]
                        nn = ks.not_needed
                        p = plan_matching(s.heading, texts, ans, nn)
                        if not p:
                            print(f'  !! {book} u{num} {s.heading}: no permutation found')
                            continue
                        order, new, newnn = p
                        nntext = texts[LETTERS.index(nn)]
                        print(f'  M  u{num:02d} {s.heading}\n'
                              f'       {",".join(ans)}  ->  {",".join(new)}'
                              f'   (diagonal {diag(ans)} -> {diag(new)})')
                        if write:
                            rewrite_matching(ulines, klines, s.heading, texts,
                                             order, ans, new, newnn, nntext)
                        nm += 1
                        touched = True
                bank = M.word_bank(s)
                if bank and ks:
                    ans = [re.sub(r'[*.]', '', v).strip().split('—')[0].strip()
                           for n, v in sorted(items.items()) if n > 0]
                    ans = [a for a in ans if a]
                    if len(ans) >= 3:
                        new = plan_bank(s.heading, bank, ans)
                        if new:
                            print(f'  B  u{num:02d} {s.heading}\n'
                                  f'       {" | ".join(bank)}\n'
                                  f'    -> {" | ".join(new)}')
                            if write:
                                rewrite_bank(ulines, s.heading, new)
                            nb += 1
                            touched = True
            if write and touched:
                open(up, 'w', encoding='utf-8').write('\n'.join(ulines))
                open(kp, 'w', encoding='utf-8').write('\n'.join(klines))
    print(f'\n{nm} matching task(s), {nb} word bank(s) '
          f'{"repaired" if write else "would be repaired"}')
    return 0


if __name__ == '__main__':
    sys.exit(main('--write' in sys.argv))
