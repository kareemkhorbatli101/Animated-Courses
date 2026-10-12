"""The answer key, and the two places where a key and a unit drift apart.

The keys in this course are written by hand, which breaks one of the guards
this project set itself -- "one source for item and answer". Until they are
generated, this is what stands in for that guard.

  K1  every exercise has a key entry
  K2  an enumerated key has as many answers as the exercise has items
  K3  the key's example is the unit's seeded example, word for word
  K4  a matching key uses letters the table actually offers, and the spare
      the key names is genuinely unused
  K5  a multiple-choice key answers with (a), (b) or (c)
  K6  no option letter takes more than 45% of a unit's keyed letters
  K7  the caption printed in the unit is the caption the figure module
      declares -- these are two separate strings and nothing else compares
      them, so a caption can be changed in one and not the other and no
      check in the suite would notice
"""
import importlib.util
import os
import re
import sys
from collections import Counter

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(HERE, 'tools'))

OK, BAD = [], []


def check(name, cond, detail=''):
    (OK if cond else BAD).append((name, detail))


def module_captions(book, unit):
    path = os.path.join(HERE, 'content', book, f'u{unit:02d}_figures.py')
    sys.path.insert(0, os.path.dirname(path))
    spec = importlib.util.spec_from_file_location(f'ck_u{unit}', path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return {f['n']: f['caption'] for f in mod.FIGURES}


def main(book, units):
    volume = Counter()
    for u in units:
        ut = open(os.path.join(HERE, 'units', f'a21-u{u:02d}.md')).read()
        kt = open(os.path.join(HERE, 'keys', f'a21-u{u:02d}-key.md')).read()
        ub = re.split(r'^\*\*(W\d|\d[A-H])\*\*\s', ut, flags=re.M)
        kb = re.split(r'^\*\*(W\d|\d[A-H])\*\*', kt, flags=re.M)
        units_by = dict(zip(ub[1::2], ub[2::2]))
        keys_by = dict(zip(kb[1::2], kb[2::2]))

        check(f'K1 u{u:02d} every exercise keyed',
              not set(units_by) - set(keys_by), str(sorted(set(units_by) - set(keys_by))))

        mism, exbad, mbad, mcq = [], [], [], []
        letters = Counter()
        for lab, body in units_by.items():
            k = keys_by.get(lab, '')
            n_items = len(re.findall(r'^\d+\.\s', body, re.M)) - 1
            enumerated = re.findall(r'·\s*(\d+)\s', k)
            if enumerated and len(enumerated) != n_items:
                mism.append((lab, n_items, len(enumerated)))

            m = re.search(r'^0\.\s+(.*?)\s*\*\(example\)\*', body, re.M)
            km = re.search(r'^\s*(?:\*\*)?.*?0\s+(.*?)\s*\(example\)', k, re.M)
            if m and km:
                a = re.sub(r'[^a-z0-9]', '', m.group(1).lower())
                b = re.sub(r'[^a-z0-9]', '', km.group(1).lower())
                if b and b not in a:
                    exbad.append((lab, km.group(1)[:24], m.group(1)[:24]))

            if '|---|' in body:
                offered = set(re.findall(r'\|\s*([a-e])\s', body))
                used = set(re.findall(r'·\s*\d+\s+([a-e])\b', k))
                spare = re.search(r'\(([a-e]),?[^)]*is not needed', k)
                if used - offered:
                    mbad.append((lab, 'uses letters not offered', sorted(used - offered)))
                if spare and spare.group(1) in used:
                    mbad.append((lab, 'the named spare is used', spare.group(1)))
                letters.update(used)

            if re.search(r'\(a\).*\(b\).*\(c\)', body):
                ans = re.findall(r'·\s*\d+\s+([a-z])\b', k)
                bad = [x for x in ans if x not in 'abc']
                if bad:
                    mcq.append((lab, bad))
                letters.update(x for x in ans if x in 'abc')

        check(f'K2 u{u:02d} answer count matches item count', not mism, str(mism))
        check(f'K3 u{u:02d} key example matches the unit', not exbad, str(exbad[:3]))
        check(f'K4 u{u:02d} matching letters and spare', not mbad, str(mbad))
        check(f'K5 u{u:02d} mcq answers are a, b or c', not mcq, str(mcq))
        tot = sum(letters.values())
        worst = letters.most_common(1)
        share = (worst[0][1] / tot) if tot else 0
        volume.update(letters)
        # Six letters cannot test a 45% ceiling: three of one is 50% by
        # accident. Below a dozen the share is noise, and a check that
        # reports noise trains you to ignore it.
        if tot >= 12:
            check(f'K6 u{u:02d} letter balance', share <= 0.45,
                  f'{worst[0][0] if worst else "-"} takes {share:.0%} of {tot}')
        else:
            check(f'K6 u{u:02d} letter balance', True,
                  f'{tot} letters, too few to judge; pooled below')

        caps_md = {int(b): c for a, b, c in
                   re.findall(r'^\*Figure (\d+)\.(\d+) · (.+)\.\*$', ut, re.M)}
        caps_mod = module_captions(book, u)
        drift = [(n, caps_md.get(n), caps_mod.get(n)) for n in caps_mod
                 if caps_md.get(n) != caps_mod.get(n)]
        check(f'K7 u{u:02d} caption parity', not drift, str(drift[:2]))

    vt = sum(volume.values())
    vw = volume.most_common(1)
    check('K6v volume letter balance', vt and vw[0][1] / vt <= 0.45,
          f'{vw[0][0]} takes {vw[0][1]/vt:.0%} of {vt} across the volume'
          if vt else 'no letters')

    for n, d in OK:
        print(f'  ok   {n}' + (f'  — {d}' if d else ''))
    for n, d in BAD:
        print(f'  FAIL {n}  — {d}')
    print(f'\n{len(OK)} passed, {len(BAD)} failed over {len(units)} units')
    return 1 if BAD else 0


if __name__ == '__main__':
    sys.exit(main('a21', [int(a) for a in sys.argv[1:]] or list(range(1, 11))))
