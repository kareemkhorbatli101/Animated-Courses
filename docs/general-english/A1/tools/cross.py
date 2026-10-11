"""Cross-unit checks. X1 lexical, X2 grammatical, X3 duplication, X5 ladder.

Run for unit u against every earlier unit p. Unit 2 runs these once; unit 20
will run them nineteen times. Cohesion failures in a coursebook are failures
between two specific units -- a word taught twice, a rule stated two ways, a
unit that got easier -- and a book-level average hides every one of them.
"""
import re
import statistics
import sys

OK, BAD = [], []


def check(name, cond, detail=''):
    (OK if cond else BAD).append((name, detail))


def words(path):
    return re.findall(r"[A-Za-z'’]+", open(path).read())


def items(path, content_only=False):
    out = [re.sub(r'^\d+\.\s*', '', l.strip())
           for l in open(path) if re.match(r'^\d+\.\s', l.strip())]
    if not content_only:
        return out
    # An item that is a blank, a bare number or an example marker is
    # structure, not content. Comparing those across units reports every
    # unit as a copy of every other, which is what the first version did.
    keep = []
    for i in out:
        s = re.sub(r'\*\(example\)\*|_{3,}|✓|✗', ' ', i)
        s = re.sub(r'[—·\-]', ' ', s)
        if len(re.findall(r"[A-Za-z'’]{2,}", s)) >= 3:
            keep.append(' '.join(s.split()).lower())
    return keep


def blocks(path):
    """Each exercise as its own string. NEVER join the file.

    The first version of this check built seven-grams over the whole unit and
    reported three collisions, every one of which was the tail of one rubric
    welded to the head of the next -- 'a listen look at figure write the' is
    not a phrase anybody wrote. This is the same mistake that invented a typo
    in SAT Book 3 by joining option sets, and it is the second time it has
    been made in this repository. Measure the pieces, never the pieces joined.
    """
    raw = open(path).read()
    parts = re.split(r'^\*\*(?:W\d|\d[A-H])\*\*\s', raw, flags=re.M)[1:]
    return parts


BOILER = re.compile(
    r'look at figure \d+\.\d+|one option is not needed|write the correct word|'
    r'listen|tick|complete the|ask and answer|answer the questions|example|what i can do|say the word|write the word|write the number', re.I)


def ngrams(path, n=7):
    """Seven-grams inside each exercise, with the rubric scaffolding removed.

    Two units of the same course are supposed to share their instructions --
    'Look at Figure 2.3. Write the word.' is the house style working, not
    plagiarism. What must not repeat is content.
    """
    out = set()
    for b in blocks(path):
        # Drop the rubric (the first line of the block) and every caption.
        # Two units of one course are SUPPOSED to share their instructions --
        # "Match the person and the job." is the house style working, not
        # plagiarism -- and rubric repetition has its own check, X3b, with its
        # own threshold. What must never repeat is content: items, texts,
        # word boxes, tables.
        lines = b.split('\n')[1:]
        lines = [l for l in lines if not l.strip().startswith('*Figure')]
        body = BOILER.sub(' ', '\n'.join(lines))
        w = [x.lower() for x in re.findall(r"[A-Za-z'’]+", body)]
        out |= {' '.join(w[i:i + n]) for i in range(len(w) - n + 1)}
    return out


def rubrics(path):
    return re.findall(r'^\*\*(?:W\d|\d[A-H])\*\*\s+(.+)$', open(path).read(), re.M)


def main(u_path, p_path, u_lex, p_lex):
    un = set(w.lower() for w in open(u_lex).read().split())
    pn = set(w.lower() for w in open(p_lex).read().split())

    check('X1a no word is taught as new twice', not (un & pn), str(sorted(un & pn)[:8]))
    check('X1b the earlier unit is recycled', len(pn & set(w.lower() for w in words(u_path))) >= 10,
          f'{len(pn & set(w.lower() for w in words(u_path)))} of unit 1 words reappear')

    shared = ngrams(u_path) & ngrams(p_path)
    check('X3a no shared seven-gram of content', not shared,
          str(sorted(shared)[:3]))

    ru, rp = rubrics(u_path), rubrics(p_path)
    dup = [r for r in ru if r in rp]
    check('X3b rubrics are not copied wholesale', len(dup) <= 6,
          f'{len(dup)} identical rubrics: {dup[:3]}')

    iu, ip = items(u_path, True), items(p_path, True)
    check('X3c no exercise reuses an earlier item',
          not (set(iu) & set(ip)), str(sorted(set(iu) & set(ip))[:5]))

    mu = statistics.mean(len(re.findall(r"[A-Za-z'’]+", i)) for i in iu)
    mp = statistics.mean(len(re.findall(r"[A-Za-z'’]+", i)) for i in ip)
    check('X5a the later unit is not easier', mu >= mp - 0.25,
          f'item mean {mu:.2f} vs {mp:.2f}')
    check('X5b the later unit is not much harder', mu <= mp + 2.0,
          f'item mean {mu:.2f} vs {mp:.2f}')
    check('X5c length does not fall', len(words(u_path)) >= len(words(p_path)) * 0.9,
          f'{len(words(u_path))} vs {len(words(p_path))}')

    for n, d in OK:
        print(f'  ok   {n}' + (f'  — {d}' if d else ''))
    for n, d in BAD:
        print(f'  FAIL {n}  — {d}')
    print(f'\n{len(OK)} passed, {len(BAD)} failed   [unit pair]')
    return 1 if BAD else 0


if __name__ == '__main__':
    sys.exit(main(*sys.argv[1:5]))
