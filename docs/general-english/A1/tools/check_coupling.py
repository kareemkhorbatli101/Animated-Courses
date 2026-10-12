"""The no-guess check: how an exercise and its figure are coupled.

Five faults in this course have been found by eye and none by machine, and
every one of them was a figure and an exercise that did not fit:

  * Unit 1 Figure 1.3 printed the job under each person while exercise 1A
    asked the learner to match the person to the job -- answerable by copying.
  * Unit 2 Figure 2.6 did the same.
  * Unit 8 exercise W1 asked where a doctor works against a map with no
    clinic on it -- not answerable at all.
  * Unit 1 Figure 1.21 reviewed six objects the unit never taught.
  * Unit 1 Figure 1.14 said "This is Omar" with no Omar in the picture.

What makes these catchable is that a Canvas already records every string it
draws, in `cv.labels`. So the printed text of a figure is data, and it can
be compared against the answers the key gives.

Two rules, both REPORTS rather than hard failures, because the judgement at
the end is a reader's:

  LEAK  two or more of an exercise's answers are printed in its own figure.
        The task may be answerable by copying.
  GAP   an exercise asks the learner to read something off a figure and not
        one of its answers appears there. The task may be unanswerable.

A report that needs a human is not a weak check. It is an honest one: the
alternative is a rule confident enough to pass Unit 8's doctor, which is
what every other check in this suite did.
"""
import importlib.util
import os
import re
import sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(HERE, 'tools'))

# The three task shapes, and they must not overlap. The first version had
# "write the word" in BOTH lists, so every supply task fell through to the
# lookup rule and 61 of them reported as unanswerable. A classifier whose
# classes intersect is not a classifier.
#
#   SUPPLY     the learner produces a word from knowledge; the figure must
#              NOT print it
#   LOOKUP     the learner reads a value off the figure; the figure MUST
#              contain it
#   JUDGEMENT  yes/no, ticking -- the answer is a decision and is never
#              printed anywhere, so neither rule applies
JUDGEMENT = re.compile(r'\b(yes or no|tick|true or false)\b', re.I)
LOOKUP = re.compile(r'\b(answer the questions|write the (time|price|age|room|'
                    r'number you hear)|complete the (timetable|list|week|class)|'
                    r'how much|how many)\b', re.I)
SUPPLY = re.compile(r'\b(match|write the (word|job|place|plural|sentence|name|'
                    r'day|number)|complete with|choose|write a or an|'
                    r'write this or that)\b', re.I)
VAGUE = re.compile(r"learner's own|spoken|accept any", re.I)


def figure_strings(book, unit):
    path = os.path.join(HERE, 'content', book, f'u{unit:02d}_figures.py')
    sys.path.insert(0, os.path.dirname(path))
    spec = importlib.util.spec_from_file_location(f'cp_u{unit}', path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    out = {}
    for f in mod.FIGURES:
        cv = f['build']()
        out[f['n']] = ({s.strip().lower() for s, *_ in cv.labels if s.strip()},
                       f['job'])
    return out


def norm(s):
    s = re.sub(r'\*\(example\)\*|\(example\)', ' ', s)
    s = re.sub(r'[*_`]', '', s)
    return ' '.join(s.split()).strip(' .·—-').lower()


def answers(keyblock):
    """The definite answers in a key entry, as strings."""
    if VAGUE.search(keyblock):
        return []
    out = []
    for part in re.split(r'·', keyblock):
        part = re.sub(r'^\s*\d+\s*', '', part)
        part = re.sub(r'\(example\)|\*', '', part)
        a = norm(part)
        if a and not a.isdigit() and len(a) > 1:
            out.append(a)
    return out


def main(book, units):
    leaks, gaps, pictorial, silent, n_ex = [], [], [], [], 0
    for u in units:
        figs = figure_strings(book, u)
        ut = open(os.path.join(HERE, 'units', f'a11-u{u:02d}.md')).read()
        kt = open(os.path.join(HERE, 'keys', f'a11-u{u:02d}-key.md')).read()
        blocks = re.split(r'^\*\*(W\d|\d[A-H])\*\*\s', ut, flags=re.M)
        kblocks = re.split(r'^\*\*(W\d|\d[A-H])\*\*', kt, flags=re.M)
        keys = dict(zip(kblocks[1::2], kblocks[2::2]))
        for lab, body in zip(blocks[1::2], blocks[2::2]):
            n_ex += 1
            m = re.search(r'Figure \d+\.(\d+)', body)
            if not m:
                continue
            fn = int(m.group(1))
            printed, job = figs.get(fn, (set(), ''))
            words = {w for s in printed for w in re.findall(r"[a-z']+", s)}
            rubric = body.split('\n')[0]
            ans = answers(keys.get(lab, ''))
            if not ans:
                continue
            if JUDGEMENT.search(rubric):
                continue
            ans = [a for a in ans if a not in ('yes', 'no')]
            if not ans:
                continue
            # match on content words, not on the exact string: the key says
            # "Omar's" where the figure prints "Omar Haddad", and an exact
            # comparison called that unanswerable.
            STOP = {'the', 'a', 'an', 'is', 'are', 'was', 'were', 'and',
                    'yes', 'no', 'she', 'he', 'it', 'they', 'does', 'do',
                    'at', 'in', 'on', 'of', 'to'}

            def seen(a):
                ws = [w for w in re.findall(r"[a-z']+", a)
                      if len(w) > 2 and w not in STOP]
                return bool(ws) and all(
                    any(w.rstrip("'s") in p or p in w for p in words) for w in ws)
            hit = [a for a in ans if a in printed or seen(a)]
            # SILENT -- a Part 3 task whose figure already prints every answer.
            # The learner does it with the audio off, so that unit's listening
            # section is one exercise shorter than it says it is. Two of these
            # were found by eye in units 18 and 20 and fixed; nobody asked how
            # many more there were. LOOKUP wants the answers in the figure and
            # a listening task wants them out of it, so no rule already here
            # could see it: the two want opposite things of one exercise.
            if lab.startswith('3') and len(hit) == len(ans):
                silent.append((u, lab, fn, ans[:4], rubric[:54]))
            # A figure whose declared job is `contrast` or `lexis` IS the
            # model -- printing the forms is the whole point of it, the way
            # a Grammar Spot box prints the pattern the exercise practises.
            # Only a `data` figure, whose job is to carry the task's own
            # information, can give an answer away.
            if SUPPLY.search(rubric) and job == 'data':
                if len(hit) >= 2:
                    leaks.append((u, lab, fn, hit[:4], rubric[:54]))
            elif LOOKUP.search(rubric) and not hit:
                # A figure that prints no content words at all -- a row of
                # clock faces, a grid of ticks -- answers in pictures, and a
                # check that reads text cannot judge it. Saying so is better
                # than reporting it as unanswerable, which is what the first
                # version did to every clock in Unit 5.
                content = {w for w in words if len(w) > 2 and not w.isdigit()}
                (pictorial if len(content) < 3 else gaps).append(
                    (u, lab, fn, ans[:4], rubric[:54]))
    print('LEAK — two or more answers are printed in the exercise\'s own figure')
    for u, lab, fn, hit, r in leaks:
        print(f'  u{u:02d} {lab:3} fig {fn:2d}  {hit}\n        {r}')
    print(f'  ({len(leaks)} to read)\n')
    print('GAP — a lookup task whose answers are nowhere in its figure')
    for u, lab, fn, ans, r in gaps:
        print(f'  u{u:02d} {lab:3} fig {fn:2d}  {ans}\n        {r}')
    print(f'  ({len(gaps)} to read)\n')
    print('PICTORIAL — the answer is read off a picture, not off printed text')
    for u, lab, fn, ans, r in pictorial:
        print(f'  u{u:02d} {lab:3} fig {fn:2d}  {r}')
    print(f'  ({len(pictorial)} not checkable by text, by design)\n')
    print('SILENT — a listening task whose every answer is printed in its figure')
    for u, lab, fn, ans, r in silent:
        print(f'  u{u:02d} {lab:3} fig {fn:2d}  {ans}\n        {r}')
    print(f'  ({len(silent)} answerable with the sound off)\n')
    print(f'{n_ex} exercises examined over {len(units)} units')
    return 1 if silent else 0


if __name__ == '__main__':
    sys.exit(main('a11', [int(a) for a in sys.argv[1:]] or list(range(1, 11))))
