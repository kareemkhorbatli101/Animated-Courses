"""B1-B8: does the back matter still describe the book in front of it?

Back matter is the part of a coursebook most likely to go stale, because it
restates what the units say and nothing re-reads it. Three of the files here
are generated, so this checks they are still what the source produces; the
five written ones are checked for coverage, and the Grammar File is checked
against the eight terms it promises to use and no others.
"""
import io
import os
import re
import sys
import contextlib

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(HERE, 'tools'))
OK, BAD = [], []


def check(name, cond, detail=''):
    (OK if cond else BAD).append((name, detail))


def read(p):
    return open(os.path.join(HERE, 'back', p), encoding='utf-8').read()


def main():
    import build_back

    # B1 -- every Part 3 exercise has a script
    audio = read('audio-file.md')
    # Scope by unit section: an earlier version matched the labels anywhere
    # in the file, so a script for Unit 3 satisfied the check for Unit 17 and
    # it reported 76 missing scripts out of 4 real ones.
    secs = re.split(r'^## Unit (\d+) · ', audio, flags=re.M)
    by_unit = {int(a): b for a, b in zip(secs[1::2], secs[2::2])}
    miss = []
    for u in range(1, 21):
        body = by_unit.get(u, '')
        for lab in ('3A', '3B', '3C', '3D'):
            if not re.search(rf'^\*\*{lab}\*\* · ', body, re.M):
                miss.append(f'u{u:02d} {lab}')
    check('B1 a script for every listening exercise', not miss,
          f'{len(miss)} missing: {miss[:5]}')

    # B2 -- the generated files are what the source produces NOW
    stale = []
    wf, _ = build_back.word_file()
    for name, text in (('word-file.md', wf),
                       ('can-do-record.md', build_back.can_do())):
        if read(name) != text:
            stale.append(name)
    with contextlib.redirect_stdout(io.StringIO()):
        pic = build_back.picture_file()
    if read('picture-file.md') != pic:
        stale.append('picture-file.md')
    check('B2 the generated files match their source', not stale, str(stale))

    # B3 -- every taught word is in the Word File, once, with a gloss
    words = []
    for u in range(1, 21):
        words += open(os.path.join(HERE, 'spec', 'wordlists',
                                   f'u{u:02d}.txt')).read().split()
    rows = re.findall(r'^\| (\S+) \| (\d+) \| (.+) \|$', read('word-file.md'), re.M)
    check('B3 the Word File holds every taught word', len(rows) == len(words),
          f'{len(rows)} rows, {len(words)} words')
    ungloss = [w for w, _, g in rows if g.strip() in ('', '—')]
    check('B4 every word has an Arabic gloss', not ungloss,
          f'{len(ungloss)}: {ungloss[:6]}')

    # B5 -- the Picture File has every figure
    pics = re.findall(r'^\| (\d+)\.(\d+) \|', read('picture-file.md'), re.M)
    check('B5 the Picture File holds all 440 figures', len(pics) == 440,
          f'{len(pics)} rows')

    # B6 -- the Grammar File and the Phrase File reach every unit
    gram = read('grammar-file.md')
    gmiss = [u for u in range(1, 21)
             if not re.search(rf'^## Unit {u} · ', gram, re.M)]
    check('B6 a Grammar File entry for every unit', not gmiss, str(gmiss))
    phr = read('phrase-file.md')
    pmiss = [u for u in range(1, 21)
             if not re.search(rf'^## {u} · ', phr, re.M)]
    check('B7 a Phrase File set for every unit', not pmiss, str(pmiss))

    # B8 -- the Grammar File promises eight terms. Hold it to them.
    #
    # A grammar reference written for a beginner is only as good as its
    # restraint: the moment it says "auxiliary" or "infinitive" it has
    # stopped being readable by the person it is for. The list is declared
    # at the top of the file, so it can be checked.
    allowed = {'verb', 'verbs', 'noun', 'nouns', 'question', 'questions',
               'answer', 'answers', 'short form', 'short forms', 'past',
               'now', 'next'}
    banned = ['auxiliary', 'infinitive', 'participle', 'gerund', 'modal',
              'determiner', 'article', 'clause', 'subject', 'object',
              'adjective', 'adverb', 'pronoun', 'preposition', 'tense',
              'conjugat', 'declension', 'predicate', 'copula']
    found = sorted({b for b in banned if re.search(rf'\b{b}', gram, re.I)})
    check('B8 the Grammar File uses no term it did not declare', not found,
          str(found))

    # B10 -- a written file that counts its own contents has to count them
    # right. The sound table said "the twenty sounds" and listed 23: nothing
    # in the suite reads prose against the table under it, so it shipped.
    WORDS = {'twenty': 20, 'twenty-one': 21, 'twenty-two': 22,
             'twenty-three': 23, 'twenty-four': 24, 'twenty-five': 25}
    snd = read('sound-symbol-table.md')
    m = re.search(r'gives the ([a-z-]+) sounds', snd)
    rows = len(re.findall(r'^\| /', snd, re.M))
    check('B10 the sound table counts its own rows',
          bool(m) and WORDS.get(m.group(1)) == rows,
          f'says {m.group(1) if m else "nothing"}, lists {rows}')

    # B9 -- the covers get the same guarantee drift.py gives every figure:
    # re-render from the current code and compare byte for byte. A cover is
    # the one page everybody sees and the one nothing else checks.
    import covers as CV
    stale_cov, missing_cov = [], []
    for name, fn in CV.COVERS.items():
        f = os.path.join(HERE, 'figures', 'a11', name + '.svg')
        if not os.path.exists(f):
            missing_cov.append(name)
            continue
        if open(f, encoding='utf-8').read() != fn().svg():
            stale_cov.append(name)
    check('B9 the four covers match their source', not (stale_cov or missing_cov),
          f'stale {stale_cov} missing {missing_cov}')

    for n, d in OK:
        print(f'  ok   {n}' + (f'  — {d}' if d else ''))
    for n, d in BAD:
        print(f'  FAIL {n}  — {d}')
    print(f'\n{len(OK)} passed, {len(BAD)} failed   [back matter]')
    return 1 if BAD else 0


if __name__ == '__main__':
    sys.exit(main())
