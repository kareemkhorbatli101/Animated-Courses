"""EFDL A1.1 Unit 1 -- Hello. The twenty-two figures.

Every entry names its JOB. The four jobs are the only ones a figure may have:

    data      the figure carries the information the exercise asks about;
              remove it and the exercise cannot be done
    contrast  the figure shows two forms side by side
    lexis     the figure supplies the meaning of new words
    document  the figure is a piece of real print

There is no fifth job called decoration. A figure that cannot name one of
these four is not drawn.
"""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..', 'tools'))

import plates as P
from draw import C

UNIT = 1
BOOK = 'a11'

# Headed by the sound written in letters the learner can already read, not
# in IPA. A student on page one of their first English book cannot decode a
# phonetic symbol, and a symbol they cannot decode is not a help, it is a
# second thing to learn. The IPA table is in the back matter.
ALPHA = [('ay', ['A', 'H', 'J', 'K'], 'red'),
         ('ee', ['B', 'C', 'D', 'E', 'G', 'P', 'T', 'V'], 'blue'),
         ('e', ['F', 'L', 'M', 'N', 'S', 'X', 'Z'], 'green'),
         ('eye', ['I', 'Y'], 'purple'),
         ('oh', ['O'], 'amber'),
         ('you', ['Q', 'U', 'W'], 'teal'),
         ('ar', ['R'], 'coral')]

NUMS = [('1', 'one', 1, 'red'), ('2', 'two', 2, 'orange'), ('3', 'three', 3, 'amber'),
        ('4', 'four', 4, 'lime'), ('5', 'five', 5, 'green'), ('6', 'six', 6, 'teal'),
        ('7', 'seven', 7, 'sky'), ('8', 'eight', 8, 'blue'), ('9', 'nine', 9, 'purple'),
        ('10', 'ten', 10, 'pink')]

COUNTRIES = [('England', 'england'), ('Spain', 'spain'), ('Brazil', 'brazil'),
             ('Japan', 'japan'), ('Poland', 'poland'), ('Nigeria', 'nigeria'),
             ('Egypt', 'egypt'), ('Turkey', 'turkey')]


FIGURES = []


def fig(n, part, job, caption, builder):
    FIGURES.append(dict(n=n, part=part, job=job, caption=caption, build=builder))


# ---- Warm Up ------------------------------------------------------------
fig(1, 'W', 'lexis', 'Hill Road',
    lambda: P.street([('nadia', 160, 'wave', 0.4), ('lili', 460, 'stand', 0.2),
                      ('sam', 790, 'stand', -0.2), ('marek', 1090, 'carry', -0.3)],
                     'Hill Road'))

fig(2, 'W', 'data', 'Three times of day',
    lambda: P.panels([('Morning', 'amber', 'nadia', 'wave', 'Good morning!'),
                      ('Afternoon', 'sky', 'ben', 'stand', 'Good afternoon!'),
                      ('Evening', 'indigo', 'fatima', 'wave', 'Good evening!')]))

# ---- Part 1 · Words & Sounds -------------------------------------------
# The labels are NAMES, not jobs. Figure 1.3 used to print the job under each
# person, which made exercise 1A -- match the person and the job -- answerable
# by copying the picture. The job now has to be read off the depiction: the
# apron and tray, the tunic and badge, the uniform and timetable, the book.
fig(3, '1', 'data', 'Four people on Hill Road',
    lambda: P.people_row([('nadia', 'Nadia', 'offer', 'tray'),
                          ('fatima', 'Fatima', 'stand', None),
                          ('sam', 'Sam', 'stand', 'timetable'),
                          ('lili', 'Lili', 'hold', 'book')]))

fig(4, '1', 'data', 'The alphabet in seven sounds',
    lambda: P.alphabet(ALPHA))

fig(5, '1', 'lexis', 'One to ten',
    lambda: P.numbers(NUMS))

fig(6, '1', 'contrast', 'Two sounds in hello and name',
    lambda: P.blocks([[('h', 'red'), ('ello', None), ('h', 'red'), ('i', None)],
                      [('n', None), ('a', 'teal'), ('me', None),
                       ('d', None), ('a', 'teal'), ('y', None)]],
                     legend=[('h  — you say it', 'red'), ('a  — the sound in name', 'teal')],
                     size=38))

# ---- Part 2 · Grammar ---------------------------------------------------
fig(7, '2', 'contrast', 'am, is and are',
    lambda: P.blocks([[('I', 'red'), ('am', 'teal'), ('Nadia', None)],
                      [('You', 'red'), ('are', 'teal'), ('a student', None)],
                      [('He', 'red'), ('is', 'teal'), ('a driver', None)],
                      [('She', 'red'), ('is', 'teal'), ('a nurse', None)]],
                     legend=[('the person', 'red'), ('be', 'teal')]))

fig(8, '2', 'contrast', 'Two words become one',
    lambda: P.contraction([('I am', "I'm", 'a'), ('He is', "He's", 'i'),
                           ('She is', "She's", 'i'), ('You are', "You're", 'a')]))

fig(9, '2', 'contrast', 'my, your, his and her',
    lambda: P.blocks([[('My', 'purple'), ('name is Lili', None)],
                      [('Your', 'purple'), ('name is Sam', None)],
                      [('His', 'purple'), ('name is Ben', None)],
                      [('Her', 'purple'), ('name is Nadia', None)]],
                     legend=[('whose?', 'purple')]))

# ---- Part 3 · Listening -------------------------------------------------
fig(10, '3', 'data', 'Four voices',
    lambda: P.people_row([('ben', '1', 'hold', 'phone'), ('rosa', '2', 'carry', 'basket'),
                          ('omar', '3', 'stand', 'ball'), ('marek', '4', 'hold', 'toolbox')],
                         label_size=34))

fig(11, '3', 'document', 'The class list',
    lambda: P.register('HILL ROAD SCHOOL · CLASS 1A',
                       (['Name', 'Country', 'Class'], [0.40, 0.34, 0.26]),
                       [('Lili Chen', 'China', '1A'), ('Omar Haddad', 'Egypt', '1A'),
                        ('Ana Silva', 'Brazil', '1A'), ('Jan Kowalski', 'Poland', '1A')]))

fig(12, '3', 'lexis', 'Eight countries',
    lambda: P.flags(COUNTRIES, h=440))

# ---- Part 4 · Speaking --------------------------------------------------
fig(13, '4', 'contrast', 'A question and an answer',
    lambda: P.qa_pairs([("What's your name?", "I'm Lili."),
                        ('Where are you from?', "I'm from China."),
                        ('Are you a student?', 'Yes, I am.')]))

fig(14, '4', 'data', 'Marek introduces Omar',
    lambda: P.two_talk('door', 'marek', 'nadia', 'Hello, Nadia. This is Omar.',
                       'Hello, Omar!', pose_a='point', pose_b='wave', third='omar'))

# ---- Part 5 · Reading ---------------------------------------------------
fig(15, '5', 'document', 'Three name badges',
    lambda: P.badges([('Fatima Saleh', 'Nurse', 'HILL ROAD CLINIC', 'teal'),
                      ('Sam Okafor', 'Driver', 'BUS 12', 'navy'),
                      ('Nadia Haddad', 'Cook', 'THE CAFE', 'red')]))

fig(16, '5', 'document', 'Two messages',
    lambda: P.phone('Lili', [('them', 'Hello! Are you Ben?'), ('me', 'Yes, I am.'),
                             ('them', "I'm Lili. I'm a student."),
                             ('me', 'Hi, Lili!')]))

# ---- Part 6 · Writing ---------------------------------------------------
fig(17, '6', 'document', 'A form for a new student',
    lambda: P.form('HILL ROAD SCHOOL · NEW STUDENT',
                   [('First name', None), ('Surname', None),
                    ('Country', None), ('Class', None)]))

fig(18, '6', 'data', 'Three lines about you',
    lambda: P.writing_frame('About me', ["My name is ", "I'm from ", "I'm a "]))

# ---- Part 7 · Real-World File ------------------------------------------
fig(19, '7', 'document', 'Signs on Hill Road',
    lambda: P.signs([('HILL ROAD', 'post', 'blue'), ('CAFE', 'board', 'red'),
                     ('CLINIC', 'plate', 'teal')]))

fig(20, '7', 'document', 'A badge with no name',
    lambda: P.badge('', 'Student', 'HILL ROAD SCHOOL', col='blue'))

# ---- Part 8 · Review & Can-Do ------------------------------------------
# Was six objects -- ball, cup, phone -- none of which Unit 1 teaches. A
# review exercise that reviews words the unit never taught is not a review.
# It is four of this unit's own people instead.
fig(21, '8', 'data', 'Four people to name',
    lambda: P.people_row([('nadia', '1', 'offer', 'tray'),
                          ('sam', '2', 'stand', 'timetable'),
                          ('fatima', '3', 'stand', None),
                          ('lili', '4', 'hold', 'book')], label_size=34))

fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say hello and goodbye.',
                      'I can say my name and my country.',
                      'I can spell my name.',
                      'I can count from one to ten.']))


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
        for wn in x['warnings'][:3]:
            print('        !', wn)
    print(f"\n{len(r)} figures, {len(bad)} with findings")
    json.dump(r, open(os.path.join(out, 'u01_report.json'), 'w'), indent=1)
