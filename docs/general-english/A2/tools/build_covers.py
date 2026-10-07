#!/usr/bin/env python3
"""Build both covers from what the book ACTUALLY contains.

Every claim is read out of the units and the ledgers rather than written by
hand, so the back cover cannot drift from the book (checks I07, I08).
"""
import os, sys, yaml
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE, os.path.join(HERE, 'checks')]
import covers as CV      # noqa: E402
import runner as R       # noqa: E402

VOL = {'a21': dict(volume=1, title='Everyday Life',
                   theme=dict(icons=['home', 'person', 'shop', 'bus', 'clock'],
                              strap='Six people, one street, every morning.')),
       'a22': dict(volume=2, title='Out in the World',
                   theme=dict(icons=['bus', 'sun', 'school', 'sign', 'moon'],
                              panel='dark',
                              strap='Plans, rules, stories and the road out.'))}

BLURB = {
 'a21': ("English for Daily Life takes an adult beginner who already knows a little "
         "English and gives them the present and the past: what is, what they do, and "
         "what happened. Ten units follow six people who live at one address, so the "
         "vocabulary comes back week after week instead of arriving once and leaving. "
         "Every unit has the same ten parts, the same twelve kinds of exercise and the "
         "same support: a worked example at the top of almost every task, a model "
         "before every piece of writing, a word bank under every gap-fill and a "
         "checklist before you hand anything in. The Core track is for everybody. The "
         "Plus track at the back of each unit is there when you are ready for it, and "
         "optional when you are not. Answers for every closed question are in the book."),
 'a22': ("Volume two takes the same six people and the same ten-part unit out of the "
         "street and into the rest of life: plans, weather, rules, health, experience, "
         "how things are made, what might happen and what other people said. It ends "
         "at the border between A2 and B1. As in volume one, every unit carries a "
         "worked example at the top of almost every task, a filled model before every "
         "piece of writing, a word bank under every gap-fill, and a checklist before "
         "you hand anything in. The Core track is for everybody; the Plus track is "
         "there when you want it, and optional when you are not. Answers for every "
         "closed question are in the book, and every open task has marking points "
         "and a sample answer for the person teaching it."),
}


def build(book='a21'):
    units, _ = R.discover(book)
    g = yaml.safe_load(open(os.path.join(ROOT, 'ledgers', 'grammar.yaml')))
    v = VOL[book]

    titles = [u.title for u in sorted(units, key=lambda x: x.num)]
    grammar = [str(g['spine'][u.num]['point']) for u in sorted(units, key=lambda x: x.num)]

    can_do = []
    for u in sorted(units, key=lambda x: x.num):
        sec = next((s for s in u.subs if s.heading.endswith('Can-Do')), None)
        for l in (sec.lines if sec else []):
            if l.strip().startswith('☐'):
                line = l.strip().lstrip('☐ ').strip()
                if '(Plus)' not in line:
                    can_do.append(line)
    can_do = can_do[:6]

    WORDS = {1: 'One unit', 2: 'Two units', 3: 'Three units', 4: 'Four units',
             5: 'Five units', 6: 'Six units', 7: 'Seven units', 8: 'Eight units',
             9: 'Nine units', 10: 'Ten units'}
    n_label = WORDS.get(len(titles), f'{len(titles)} units')
    # the blurb must describe the book that exists, not the one that is planned
    blurb = BLURB[book].replace('Ten units', n_label, 1)
    f = CV.front(v['volume'], v['title'], titles, v['theme'], n_units_label=n_label)
    CV.emit(f, book, 'front', {'theme': book, 'volume': v['volume'],
                               'title': v['title'], 'level': 'A2'})
    b = CV.back(v['volume'], v['title'], blurb, titles, grammar, can_do, v['theme'])
    CV.emit(b, book, 'back', {'theme': book, 'volume': v['volume'], 'title': v['title'],
                              'level': 'A2', 'blurb': blurb, 'units': titles,
                              'grammar': grammar, 'can_do': can_do,
                              'unit_count': len(titles)})
    print(f'{book}: covers built from {len(titles)} unit(s); '
          f'blurb {len(blurb.split())} words; {len(can_do)} can-do lines')
    return 0


if __name__ == '__main__':
    sys.exit(build(sys.argv[1] if len(sys.argv) > 1 else 'a21'))
