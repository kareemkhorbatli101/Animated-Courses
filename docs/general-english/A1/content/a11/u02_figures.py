"""EFDL A1.1 Unit 2 -- In the Class. The twenty-two figures.

Same four jobs as Unit 1, same rule: there is no fifth job called decoration.

Unit 2 recycles Unit 1's people and adds the school on Hill Road as a place.
Fatima teaches the evening class -- she is the nurse from Unit 1, which is
how a small cast earns its keep: the learner already knows her, so the only
new thing on the page is the language.
"""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..', 'tools'))

import plates as P
from draw import C

UNIT = 2
BOOK = 'a11'

OBJECTS = [(1, 'book', 'purple'), (2, 'pen', None), (3, 'pencil', None),
           (4, 'notebook', 'green'), (5, 'backpack', None), (6, 'chair', 'blue'),
           (7, 'ruler', None), (8, 'bottle', None), (9, 'phone', None),
           (10, 'key', None)]

TEENS = [('11', 'eleven', 11, 'red'), ('12', 'twelve', 12, 'orange'),
         ('13', 'thirteen', 13, 'amber'), ('14', 'fourteen', 14, 'lime'),
         ('15', 'fifteen', 15, 'green'), ('16', 'sixteen', 16, 'teal'),
         ('17', 'seventeen', 17, 'sky'), ('18', 'eighteen', 18, 'blue'),
         ('19', 'nineteen', 19, 'purple'), ('20', 'twenty', 20, 'pink')]

FIGURES = []


def fig(n, part, job, caption, builder):
    FIGURES.append(dict(n=n, part=part, job=job, caption=caption, build=builder))


# ---- Warm Up ------------------------------------------------------------
fig(1, 'W', 'lexis', 'The evening class',
    lambda: P.classroom_scene('fatima', 'lili', "Good evening. I'm Fatima.",
                              "Hello. I'm Lili.", sitting=['omar', 'rosa'],
                              pose_a='wave', pose_b='stand'))

fig(2, 'W', 'lexis', 'Eleven to twenty',
    lambda: P.numbers(TEENS))

# ---- Part 1 · Words & Sounds -------------------------------------------
fig(3, '1', 'data', 'Ten things in the class',
    lambda: P.object_cards(OBJECTS, cols=5, h=420))

fig(4, '1', 'contrast', 'a or an',
    lambda: P.sort_two(('a', 'blue'), ('an', 'orange'),
                       [('pen', None, 'pen'), ('apple', None, 'apple'),
                        ('book', 'purple', 'book'), ('orange', None, 'orange'),
                        ('umbrella', None, 'umbrella'), ('chair', 'green', 'chair')]))

fig(5, '1', 'contrast', 'this and that',
    lambda: P.blocks([[('This', 'purple'), ('is a pen.', None)],
                      [('That', 'teal'), ('is a door.', None)]],
                     legend=[('here, near me', 'purple'), ('there, not near me', 'teal')],
                     size=36))

fig(6, '1', 'lexis', 'Four jobs',
    lambda: P.people_row([('fatima', 'a teacher', 'point', None),
                          ('ben', 'a shop assistant', 'offer', 'phone'),
                          ('marek', 'a caretaker', 'hold', 'toolbox'),
                          ('nadia', 'a cook', 'carry', 'tray')]))

# ---- Part 2 · Grammar ---------------------------------------------------
fig(7, '2', 'contrast', 'A sentence and a question',
    lambda: P.blocks([[('He', 'red'), ('is', 'teal'), ('a driver.', None)],
                      [('Is', 'teal'), ('he', 'red'), ('a driver?', None)],
                      [('You', 'red'), ('are', 'teal'), ('a student.', None)],
                      [('Are', 'teal'), ('you', 'red'), ('a student?', None)]],
                     legend=[('the person', 'red'), ('be', 'teal')]))

fig(8, '2', 'contrast', 'The short negative',
    lambda: P.contraction([('is not', "isn't", 'o'), ('are not', "aren't", 'o'),
                           ('I am not', "I'm not", 'a')]))

fig(9, '2', 'contrast', 'Yes and no answers',
    lambda: P.qa_pairs([('Is she a nurse?', 'Yes, she is.'),
                        ('Is he a teacher?', "No, he isn't."),
                        ('Are you from Egypt?', "No, I'm not.")]))

# ---- Part 3 · Listening -------------------------------------------------
fig(10, '3', 'data', 'Four people in the class',
    lambda: P.people_row([('omar', '1', 'stand', 'ball'), ('lili', '2', 'hold', 'book'),
                          ('rosa', '3', 'carry', 'basket'), ('sam', '4', 'stand',
                                                             'timetable')],
                         label_size=34))

fig(11, '3', 'document', 'The evening timetable',
    lambda: P.register('HILL ROAD SCHOOL · EVENING',
                       (['Class', 'Day', 'Time', 'Room'], [0.28, 0.26, 0.24, 0.22]),
                       [('English 1A', 'Monday', '18.00', '11'),
                        ('English 1B', 'Tuesday', '18.00', '12'),
                        ('English 2A', 'Monday', '19.30', '14'),
                        ('Computers', 'Thursday', '18.30', '20')]))

fig(12, '3', 'data', 'Six things on a desk',
    lambda: P.object_cards([(1, 'pen', None), (2, 'key', None), (3, 'bottle', None),
                            (4, 'book', 'blue'), (5, 'rubber', None),
                            (6, 'notebook', 'red')], cols=6, h=320))

# ---- Part 4 · Speaking --------------------------------------------------
fig(13, '4', 'data', 'Asking in the class',
    lambda: P.classroom_scene('fatima', 'omar', 'Omar, what is this?',
                              "It's a ruler.", sitting=['lili', 'rosa'],
                              pose_a='point', pose_b='stand'))

fig(14, '4', 'contrast', 'Ask and answer',
    lambda: P.qa_pairs([("What's this?", "It's a pen."),
                        ("What's that?", "It's a window."),
                        ('Is this your bag?', 'Yes, it is.')]))

# ---- Part 5 · Reading ---------------------------------------------------
fig(15, '5', 'document', 'A notice at the school',
    lambda: P.notice('HILL ROAD SCHOOL', [
        ('English 1A', 'Room 11'),
        ('English 1B', 'Room 12'),
        ('English 2A', 'Room 14'),
        ('Office', 'Room 3'),
        'The office is open from 9.00 to 17.00.']))

fig(16, '5', 'document', 'Messages about a bag',
    lambda: P.phone('Omar', [('them', 'Is this your bag?'), ('me', "No, it isn't."),
                             ('them', "It's blue. It's in Room 11."),
                             ('me', "It's Lili's bag!")]))

# ---- Part 6 · Writing ---------------------------------------------------
fig(17, '6', 'document', 'A card for the library',
    lambda: P.form('HILL ROAD SCHOOL · LIBRARY CARD',
                   [('Name', None), ('Class', None), ('Room', None),
                    ('Number', None)]))

fig(18, '6', 'data', 'Four lines about your class',
    lambda: P.writing_frame('My class', ["My teacher is ", "My class is ",
                                         "My room is ", "In my bag I have "]))

# ---- Part 7 · Real-World File ------------------------------------------
fig(19, '7', 'document', 'Three doors at the school',
    lambda: P.doors([('ROOM 11', 'blue'), ('OFFICE', 'teal'), ('ROOM 14', 'purple')]))

fig(20, '7', 'document', 'The lost property list',
    lambda: P.register('LOST PROPERTY · ROOM 3',
                       (['Number', 'Thing', 'Room'], [0.26, 0.44, 0.30]),
                       [('12', 'a red book', '11'), ('13', 'a black bag', '14'),
                        ('14', 'a blue bottle', '11'), ('15', 'two keys', '12')]))

# ---- Part 8 · Review & Can-Do ------------------------------------------
fig(21, '8', 'lexis', 'Eight things from this unit',
    lambda: P.object_cards([(1, 'desk', None), (2, 'chair', 'green'),
                            (3, 'board', None), (4, 'window', None),
                            (5, 'door', None), (6, 'ruler', None),
                            (7, 'pencil', None), (8, 'backpack', 'purple')],
                           cols=4, h=460))

fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can name ten things in my class.',
                      'I can ask What is this?',
                      'I can say yes and no with is and are.',
                      'I can count from eleven to twenty.']))


def build(outdir):
    import os
    os.makedirs(outdir, exist_ok=True)
    report = []
    for f in FIGURES:
        cv = f['build']()
        base = os.path.join(outdir, f"u{UNIT:02d}-{f['n']:02d}")
        with open(base + '.svg', 'w') as fh:
            fh.write(cv.svg())
        cv.png(base + '.png', 1440)
        report.append(dict(n=f['n'], part=f['part'], job=f['job'], caption=f['caption'],
                           w=cv.w, h=cv.h, warnings=cv.warnings, overlaps=cv.overlaps()))
    return report


if __name__ == '__main__':
    import json
    out = os.path.join(os.path.dirname(__file__), '..', '..', 'figures', 'a11')
    r = build(out)
    bad = [x for x in r if x['warnings'] or x['overlaps']]
    for x in r:
        flag = 'FAIL' if (x['warnings'] or x['overlaps']) else 'ok  '
        print(f"{flag} fig {x['n']:2d} part {x['part']:>2} {x['job']:<9} "
              f"{int(x['w'])}x{int(x['h']):<4} {x['caption']}")
        for wn in (x['warnings'] + [str(o) for o in x['overlaps']])[:3]:
            print('        !', wn)
    print(f"\n{len(r)} figures, {len(bad)} with findings")
    json.dump(r, open(os.path.join(out, 'u02_report.json'), 'w'), indent=1)
