"""The four covers, drawn by the same engine that draws the figures.

A cover made in another tool is a cover that drifts: it keeps saying twenty
units after the book has twenty-one, and no check can see it. These are built
from the same `draw`, `cast`, `world` and `people` modules as every figure in
the book, and the counts on them are computed from the course, not typed.

Page is US Letter. The canvas is 8.5 x 11 at 200 px/in, so the art bleeds to
the paper edge when the cover section's margins are zero.
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(HERE, 'tools'))

from draw import Canvas, C, shade, deep, tw, contrast                # noqa: E402
from cast import who                                                 # noqa: E402
from people import draw_person                                       # noqa: E402
import world as W                                                    # noqa: E402

PW, PH = 1700, 2200            # 8.5 x 11 inches at 200 px/in
ORDER = ['nadia', 'sam', 'lili', 'marek', 'fatima', 'ben', 'rosa', 'omar']


# A cover is the one page everybody sees, so the engine's contrast rule
# applies to it hardest. Amber on deep teal is 2.6:1 -- the same fault
# `verb_change` hit -- so the accent is lightened against its own band
# rather than assumed, and every loop is bounded, because shade() converges
# on white asymptotically and an unbounded one hangs the build.
def pop(col, bg, target=4.5):
    """The accent colour, lightened until it is legible on this band."""
    c = col
    for _ in range(14):
        if contrast(c, bg) >= target:
            return c
        c = shade(c, 1.10)
    return '#FFFFFF'


def sub(band, target=4.5):
    """A lighter band that still carries white text."""
    c = shade(band, 1.22)
    for _ in range(14):
        if contrast('#FFFFFF', c) >= target:
            return c
        c = shade(c, 0.94)
    return band


# ------------------------------------------------------------------ counts

def titles():
    """Unit titles, read from the units. A cover that keeps its own copy of
    the contents page is a cover that goes stale without anything noticing."""
    out = []
    for u in range(1, 100):
        f = os.path.join(HERE, 'units', f'a21-u{u:02d}.md')
        if not os.path.exists(f):
            break
        m = re.search(r'^\*\*Unit (\d+): (.+)\*\*$', open(f).read(), re.M)
        out.append((int(m.group(1)), m.group(2)))
    return out


def counts():
    """Read the book, do not quote it from memory."""
    units = sorted(int(m.group(1)) for f in os.listdir(os.path.join(HERE, 'units'))
                   for m in [re.match(r'a21-u(\d+)\.md$', f)] if m)
    ex = figs = 0
    for u in units:
        raw = open(os.path.join(HERE, 'units', f'a21-u{u:02d}.md')).read()
        ex += len(re.findall(r'^\*\*(?:W\d|\d[A-H])\*\*\s', raw, re.M))
        figs += len(re.findall(r'^\*Figure \d+\.\d+ · ', raw, re.M))
    words = sum(len(open(os.path.join(HERE, 'spec', 'wordlists',
                                      f'u{u:02d}.txt')).read().split())
                for u in units)
    return len(units), ex, figs, words


# ------------------------------------------------------------------ pieces

def _series_bar(cv, y, h, col, label, right):
    cv.rect(0, y, PW, h, col)
    cv.text(label, 96, y + h * 0.62, 34, fill='#FFFFFF', weight='SemiBold',
            bg=col, track=3)
    cv.text(right, PW - 96, y + h * 0.62, 34, fill='#FFFFFF', weight='SemiBold',
            anchor='end', bg=col)


def _hill_road(cv, y, h):
    """The street the whole course happens on, drawn to fit a band."""
    cv.clip(0, y, PW, h)
    W.sky_ground(cv, 0, y, PW, h, horizon=0.52)
    shop_base = y + h * 0.70
    pave = y + h * 0.88
    cv.rect(0, shop_base, PW, pave - shop_base + 10, shade(C['ground'], 1.02))
    cv.rect(0, pave + 8, PW, h, C['road'])
    cv.rect(0, pave, PW, 11, shade(C['ground'], 0.84))
    for i in range(8):
        cv.rect(70 + i * 210, pave + 58, 118, 12, C['line'], r=6)
    tops = [(40, 0.16, 380, 'CAFE', 'red', ['cup', 'cup']),
            (452, 0.22, 352, 'SHOP', 'green', ['basket']),
            (846, 0.17, 380, 'SCHOOL', 'blue', ['book']),
            (1268, 0.23, 360, 'CLINIC', 'teal', ['plant'])]
    for x, ty, w, name, col, items in tops:
        W.shopfront(cv, x, y + h * ty, w, shop_base - (y + h * ty), name,
                    C[col], window_items=items, sign_size=38)
    W.bus_stop(cv, 822, pave, h * 0.30)
    # All eight, spaced so no two figures touch: at h*0.44 a body is about
    # 130px wide, and the bus-stop post owns the middle of the pavement.
    xs = [120, 300, 480, 660, 1000, 1180, 1360, 1530]
    for i, pid in enumerate(ORDER):
        pose = 'wave' if pid in ('nadia', 'omar') else (
            'carry' if pid == 'rosa' else 'stand')
        draw_person(cv, who(pid), xs[i], pave + 5, h * 0.44, pose=pose,
                    face=0.3 if xs[i] < PW / 2 else -0.3)
    cv.endgroup()


def _cast_row(cv, y, h, size=26):
    """The eight people, named. The course's other half of the contents page."""
    cw = PW / len(ORDER)
    for i, pid in enumerate(ORDER):
        p = who(pid)
        draw_person(cv, p, cw * (i + 0.5), y + h - 54, h - 96,
                    pose='stand', face=0.0, shadow=False)
        cv.fit(p.name, cw * i + 14, y + h - 16, cw - 28, size,
               weight='SemiBold', anchor='start', bg=cv.bg)


def _bullets(cv, x, y, w, rows, size=29, lead=58, col=None):
    col = col or deep(C['navy'])
    for i, (head, rest) in enumerate(rows):
        yy = y + i * lead
        cv.circle(x + 9, yy - 9, 9, col)
        wd = cv.text(head, x + 36, yy, size, weight='Bold', bg=cv.bg)
        cv.fit(rest, x + 36 + wd + 12, yy, w - wd - 60, size, bg=cv.bg)
    return y + len(rows) * lead


# ------------------------------------------------------------------ covers

def front(kind, accent='navy'):
    n_u, n_ex, n_fig, n_w = counts()
    cv = Canvas(PW, PH, bg=C['cream'])
    band = deep(C[accent], 7.0)
    hi = pop(C['amber'], band)

    cv.rect(0, 0, PW, 890, band)
    cv.rect(0, 0, PW, 890, shade(band, 1.14), r=0)
    cv.rect(0, 0, PW, 620, band)
    cv.text('ENGLISH FOR DAILY LIFE', 96, 150, 38, fill='#FFFFFF',
            weight='SemiBold', bg=band, track=8)
    cv.line(96, 190, 560, 190, C['amber'], sw=7)

    cv.text('English', 96, 346, 142, fill='#FFFFFF', weight='Bold', bg=band)
    cv.text('for', 96, 510, 142, fill=hi, weight='Bold', bg=band)
    wfor = tw('for ', 142, 'Bold')
    cv.text('Daily Life', 96 + wfor, 510, 142, fill='#FFFFFF', weight='Bold',
            bg=band)

    cv.circle(1480, 300, 118, C['amber'])
    cv.text('A2', 1480, 345, 110, fill=deep(C['ink']), weight='Bold',
            anchor='middle', bg=C['amber'])
    cv.text('elementary', 1480, 466, 30, fill='#FFFFFF', weight='SemiBold',
            anchor='middle', bg=band)

    kc = sub(band)
    cv.rect(0, 620, PW, 160, kc)
    cv.text(kind.upper(), 96, 724, 62, fill='#FFFFFF', weight='Bold', bg=kc,
            track=5)
    cv.text(f'{n_u} units', PW - 96, 700, 32, fill='#FFFFFF', weight='SemiBold',
            anchor='end', bg=kc)
    cv.text(f'{n_ex} exercises · {n_fig} figures', PW - 96, 748, 32,
            fill='#FFFFFF', anchor='end', bg=kc)

    _hill_road(cv, 780, 840)

    cv.rect(0, 1620, PW, PH - 1620, C['cream'])
    cv.text('Everything happens on one street.', 96, 1712, 50, weight='Bold',
            bg=C['cream'])
    cv.wrap('The same eight people live on Hill Road from the first page to '
            'the last, so the only new thing on any page is the language.',
            96, 1774, PW - 192, 32, lead=1.42, fill=C['ink_soft'],
            bg=C['cream'])
    _cast_row(cv, 1856, 250, size=25)
    _series_bar(cv, PH - 70, 70, band, 'HILL ROAD', f'{n_w} words')
    return cv


def back_student():
    n_u, n_ex, n_fig, n_w = counts()
    cv = Canvas(PW, PH, bg=C['cream'])
    band = deep(C['plum'], 7.0)
    cv.rect(0, 0, PW, 230, band)
    cv.text('ENGLISH FOR DAILY LIFE', 96, 108, 34, fill='#FFFFFF',
            weight='SemiBold', bg=band, track=7)
    cv.text('A2 · Student Book', 96, 176, 44, fill=pop(C['amber'], band),
            weight='Bold', bg=band)

    y = 330
    cv.text('The year after your first year.', 96, y, 54, weight='Bold',
            bg=cv.bg)
    y = cv.wrap('A2 picks up where A1 left off, on the same street, with the '
                'same eight people. You tell a story in the past, say what '
                'you have done, describe a person, read a label and a '
                'timetable, and write the letter that gets you the job. '
                'Nothing is explained in words you have not met.',
                96, y + 62, PW - 192, 33, lead=1.44, fill=C['ink_soft'],
                bg=cv.bg)

    y += 54
    cv.text('Every unit has nine parts', 96, y, 38, weight='Bold', bg=cv.bg)
    y = _bullets(cv, 96, y + 58, PW - 192, [
        ('Warm Up', '— three ways in'),
        ('Words & Sounds', '— the new words, and how to say them'),
        ('Grammar', '— the form, shown before it is named'),
        ('Listening', '— four tasks, every script printed at the back'),
        ('Speaking', '— four tasks you do with a partner'),
        ('Reading', '— real things: a notice, a receipt, a message'),
        ('Writing', '— a form, a frame, then your own lines'),
        ('Real-World File', '— the thing outside the classroom'),
        ('Review & Can-Do', '— what you can do now, ticked by you'),
    ], size=29, lead=52)

    y += 30
    cv.text('The twenty units', 96, y, 38, weight='Bold', bg=cv.bg)
    ts = titles()
    half = (len(ts) + 1) // 2
    colw = (PW - 192 - 40) / 2
    for i, (n, title) in enumerate(ts):
        cx = 96 + (0 if i < half else colw + 40)
        cy = y + 52 + (i % half) * 40
        cv.text(f'{n}', cx + 22, cy, 25, fill=C['ink_soft'], weight='Bold',
                anchor='end', bg=cv.bg)
        cv.fit(title, cx + 40, cy, colw - 50, 26, bg=cv.bg)
    y += 52 + half * 40

    y += 36
    cv.text('And at the back of the book', 96, y, 34, weight='Bold', bg=cv.bg)
    cv.wrap('Grammar File, one entry per unit · Word File, every word with '
            'the unit that teaches it and an Arabic gloss · Phrase File · '
            'irregular verbs · sound and symbol table · Audio File, all the '
            'listening scripts to the word · Picture File · Can-Do Record.',
            96, y + 48, PW - 192, 28, lead=1.40, fill=C['ink_soft'], bg=cv.bg)

    cards = [(f'{n_u}', 'units'), (f'{n_ex}', 'exercises'),
             (f'{n_fig}', 'figures'), (f'{n_w}', 'words')]
    cwid = (PW - 192 - 3 * 24) / 4
    cy = 1884
    for i, (big, small) in enumerate(cards):
        x = 96 + i * (cwid + 24)
        cv.rect(x, cy, cwid, 136, C['paper'], r=18, stroke=C['silver'], sw=3)
        cv.fit(big, x + 20, cy + 70, cwid - 40, 50, weight='Bold',
               anchor='start', bg=C['paper'])
        cv.text(small, x + 22, cy + 112, 25, fill=C['ink_soft'], bg=C['paper'])

    cv.wrap('No photographs. Every picture is drawn, and every one has a job: '
            'to carry what a task needs, to show one form against another, to '
            'show what a word means, or to reproduce a real document.',
            96, 2064, PW - 192, 26, lead=1.38, fill=C['ink_soft'], bg=cv.bg)
    _series_bar(cv, PH - 70, 70, band, 'HILL ROAD', 'A2 · Student Book')
    return cv


def back_key():
    n_u, n_ex, n_fig, n_w = counts()
    cv = Canvas(PW, PH, bg=C['cream'])
    band = deep(C['forest'], 7.0)
    cv.rect(0, 0, PW, 230, band)
    cv.text('ENGLISH FOR DAILY LIFE', 96, 108, 34, fill='#FFFFFF',
            weight='SemiBold', bg=band, track=7)
    cv.text('A2 · Answer Key', 96, 176, 44, fill=pop(C['amber'], band),
            weight='Bold', bg=band)

    y = 330
    cv.text('Every answer, in one place.', 96, y, 54, weight='Bold', bg=cv.bg)
    y = cv.wrap(f'The key to all {n_u} units and all {n_ex} exercises. Each '
                'entry begins with the seeded example, so you can see at a '
                'glance that you are reading the right exercise.',
                96, y + 62, PW - 192, 33, lead=1.44, fill=C['ink_soft'],
                bg=cv.bg)

    y += 54
    cv.text('How to read it', 96, y, 38, weight='Bold', bg=cv.bg)
    y = _bullets(cv, 96, y + 58, PW - 192, [
        ('0', '— the example printed in the Student Book, repeated here'),
        ('·', '— separates one answer from the next'),
        ("Learner's own answers", '— speaking and writing tasks'),
        ('Spoken', '— a pronunciation task, with what to listen for'),
        ('(e is not needed)', '— the spare option in a matching task'),
    ], size=29, lead=54, col=band)

    y += 40
    cv.text('Where the other answers live', 96, y, 38, weight='Bold', bg=cv.bg)
    cv.wrap('Listening answers come from the audio, and every script is '
            'printed in the Audio File at the back of the Student Book, to '
            'the word. Nothing a learner is asked for is missing from the '
            'two books together.',
            96, y + 54, PW - 192, 30, lead=1.42, fill=C['ink_soft'], bg=cv.bg)

    y += 150
    cv.text('What is true of every page behind this one', 96, y, 38,
            weight='Bold', bg=cv.bg)
    pairs = n_u * (n_u - 1) // 2
    rows = [
        'No word is taught as new twice.',
        f'Across all {pairs} pairs here, and against every A1 unit too.',
        'Every exercise carries a worked example.',
        'Numbered 0, and repeated in this key.',
        'Every figure is used by an exercise.',
        'And every exercise that needs one has one.',
        'No answer is printed in its own figure.',
        'A task you can copy is not a task.',
        'The answer letters are balanced.',
        'No learner guesses through on one letter.',
        'Every figure was re-rendered and compared.',
        'Byte for byte, against the file that printed.',
    ]
    colw = (PW - 192 - 44) / 2
    for i in range(0, len(rows), 2):
        ry = y + 58 + (i // 2) * 76
        cv.circle(96 + 11, ry - 10, 11, band)
        cv.fit(rows[i], 96 + 40, ry, colw - 50, 29, weight='SemiBold',
               bg=cv.bg)
        cv.fit(rows[i + 1], 96 + 40, ry + 36, colw + 400, 26,
               fill=C['ink_soft'], bg=cv.bg)
    y += 58 + (len(rows) // 2) * 76

    y += 26
    cv.rect(96, y, PW - 192, 212, C['paper'], r=20, stroke=C['silver'], sw=3)
    cv.text('Checked, not just written', 128, y + 60, 34, weight='Bold',
            bg=C['paper'])
    cv.wrap('Every exercise is keyed, every key entry is counted against its '
            'own exercise, and the example in the key is matched against the '
            'example on the page.',
            128, y + 108, PW - 256, 27, lead=1.42, fill=C['ink_soft'],
            bg=C['paper'])

    _cast_row(cv, PH - 300, 212, size=23)
    _series_bar(cv, PH - 70, 70, band, 'HILL ROAD', f'{n_fig} figures keyed')
    return cv


COVERS = {
    'cover-sb-front': lambda: front('Student Book', 'plum'),
    'cover-sb-back': back_student,
    'cover-ak-front': lambda: front('Answer Key', 'forest'),
    'cover-ak-back': back_key,
}


def build(outdir=None):
    outdir = outdir or os.path.join(HERE, 'figures', 'a21')
    os.makedirs(outdir, exist_ok=True)
    rep = []
    for name, fn in COVERS.items():
        cv = fn()
        open(os.path.join(outdir, name + '.svg'), 'w').write(cv.svg())
        cv.png(os.path.join(outdir, name + '.png'), 1700)
        rep.append((name, cv.warnings, cv.overlaps()))
    return rep


if __name__ == '__main__':
    bad = 0
    for name, warn, over in build():
        flag = 'FAIL' if (warn or over) else 'ok  '
        bad += bool(warn or over)
        print(f'{flag} {name}')
        for x in (warn + [str(o) for o in over])[:4]:
            print('       !', x)
    print(f'\n4 covers, {bad} with findings')
    sys.exit(1 if bad else 0)
