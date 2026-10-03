# -*- coding: utf-8 -*-
"""Page blocks for the Workshop handouts.

The first-generation sheets had one kind of block: an exercise. These sheets
have three — a model that carries content, an interaction that needs another
person, and a test item — and the page has to make the difference visible at a
glance, because a student working alone has to know when to stop and find a
partner.

Everything here is built on the primitives in docxw; nothing writes raw XML
that docxw does not already know how to save.
"""
from docxw import (Doc, para, run, tblpr, tcpr, esc, INDIGO, PERI, GREY,
                   INK, CREAM, SOFT, RULE, GREEN, RED, AMBER, TEAL, PLUM,
                   BLUE)

# docxw keeps colours as bare hex, with no leading hash.
GREY_L = 'AAB2C0'
PAPER = 'FFFFFF'

# The move names, in the order the standard fixes them.
MOVES = ['ORIENT', 'MODEL', 'READ THE MODEL', 'INVENT THE RULE', 'APPLY',
         'CHECKPOINT']
MOVEC = {'ORIENT': GREY, 'MODEL': INDIGO, 'READ THE MODEL': INDIGO,
         'INVENT THE RULE': TEAL, 'APPLY': PLUM, 'CHECKPOINT': RED}

# Interaction badges and what each one asks of the room.
XBADGE = {
    'pair': ('WORK IN PAIRS', TEAL),
    'role': ('TAKE A ROLE', PLUM),
    'hunt': ('ERROR HUNT', RED),
    'predict': ('PREDICT FIRST', AMBER),
    'teach': ('TEACH IT BACK', TEAL),
    'sort': ('SORT THEM', BLUE),
    'build': ('FROM MEMORY', INDIGO),
    'speed': ('60 SECONDS', AMBER),
}


def _cell(xml, fill=None, pad=100, w=None):
    return '<w:tc>%s%s</w:tc>' % (tcpr(fill, pad, w), xml)


def _row(cells):
    return '<w:tr>%s</w:tr>' % ''.join(cells)


def _tbl(rows, col, sz=6, grid=(100,)):
    """`grid` is column widths as percentages, the same unit tcpr takes.

    docxw measures a cell in fiftieths of a percent and multiplies by 50, so a
    width here is a percentage of the text column, never twips. The first
    draft passed twips, which made every table 10,000 per cent wide and left a
    document LibreOffice would not open at all.
    """
    if sz <= 0:
        pr = '<w:tblPr><w:tblW w:type="pct" w:w="100%"/></w:tblPr>'
    else:
        pr = tblpr(col, sz)
    cols = ''.join('<w:gridCol w:w="%d"/>' % int(g * 96) for g in grid)
    return '<w:tbl>%s<w:tblGrid>%s</w:tblGrid>%s</w:tbl>' % (
        pr, cols, ''.join(rows))


class Counter(object):
    """Hands out item numbers inside a handout and collects the answers.

    A handout numbers its items from 1 and the key repeats those numbers, so
    one object issues both: `n()` for the next number, `take()` for the answer
    that goes with it.
    """

    def __init__(self):
        self.i = 0
        self.ans = []
        self.why = []

    def n(self):
        self.i += 1
        return self.i

    def take(self, answer, why=''):
        n = self.n()
        self.ans.append((n, answer))
        if why:
            self.why.append((n, why))
        return n

    def cells(self, answers, whys=None):
        whys = whys or [''] * len(answers)
        return [self.take(a, w) for a, w in zip(answers, whys)]


class WS(object):
    """Workshop blocks, mixed into a Doc."""

    # ---------------------------------------------------------- page frame
    def cyclebar(self, letter, title):
        """The band that opens a cycle: one idea, one band."""
        self.body.append(_tbl(
            [_row([_cell(para([run('CYCLE ' + letter, b=True, color='FFFFFF',
                                   sz=19)],
                              '<w:spacing w:before="40" w:after="40"/>'),
                         INDIGO.lstrip('#'), 90, 11),
                   _cell(para([run(title, b=True, color=INDIGO, sz=22)],
                              '<w:spacing w:before="40" w:after="40"/>'),
                         'F2F4FB', 90, 89)])],
            INDIGO, 8, (11, 89)))
        self.blank()

    def movebar(self, name, direction=''):
        """A thin rule naming the move, so the student knows what is wanted."""
        col = MOVEC.get(name, INDIGO)
        rs = [run(name, b=True, color=col, sz=17)]
        if direction:
            rs.append(run('      ' + direction, color=GREY, sz=18))
        self.body.append(_tbl(
            [_row([_cell(para(rs, '<w:spacing w:before="30" w:after="30"/>'),
                         None, 60)])],
            col, 0, (100,)))
        # a hairline under the bar, drawn as a one-cell table border
        self.body.append(para([run('', sz=2)],
                              '<w:pBdr><w:top w:val="single" w:sz="6" '
                              'w:space="1" w:color="%s"/></w:pBdr>'
                              '<w:spacing w:after="30"/>' % col))

    def badge(self, kind, note=''):
        """A coloured tag that tells the room what kind of work this is."""
        label, col = XBADGE[kind]
        rs = [run('  ' + label + '  ', b=True, color='FFFFFF', sz=15)]
        self.body.append(_tbl(
            [_row([_cell(para(rs, '<w:spacing w:before="20" w:after="20"/>'),
                         col.lstrip('#'), 60, 17),
                   _cell(para([run(note, color=col, sz=18)],
                              '<w:spacing w:before="20" w:after="20"/>'),
                         None, 80, 83)])],
            col, 0, (17, 83)))

    def checkbar(self, n, question, reloop):
        """The gate at the end of a cycle, with the move to redo if missed."""
        rs = [run('CHECKPOINT  ', b=True, color=RED, sz=16),
              run('%d.  ' % n, b=True, color=INDIGO, sz=19),
              run(question, sz=19)]
        inner = [para(rs, '<w:spacing w:before="50" w:after="30"/>'),
                 para([run('        ', u=True, sz=20),
                       run('        ', u=True, sz=20),
                       run('        ', u=True, sz=20),
                       run('        ', u=True, sz=20)],
                      '<w:spacing w:after="30"/><w:ind w:left="300"/>'),
                 para([run('If you could not answer it: ' + reloop,
                           color=RED, sz=17)],
                      '<w:spacing w:after="50"/>')]
        self.body.append(_tbl([_row([_cell(''.join(inner), 'FBF0EF', 120)])],
                              RED, 12, (100,)))
        self.blank()

    # ---------------------------------------------------------- items
    def q(self, n, text, after=0, ind=0, sz=19):
        """A numbered question. `after` is how many ruled lines follow."""
        self.body.append(para(
            [run('%d.  ' % n, b=True, color=INDIGO, sz=sz),
             run(text, sz=sz)],
            '<w:spacing w:before="40" w:after="%d"/><w:ind w:left="%d" '
            'w:hanging="%d"/>' % (30 if after else 50, ind + 260, 260)))
        for _ in range(after):
            self.rule(ind + 300)

    def rule(self, ind=300, width=8700):
        self.body.append(para(
            [run(' ' * 2, sz=19)],
            '<w:pBdr><w:bottom w:val="single" w:sz="4" w:space="2" '
            'w:color="%s"/></w:pBdr>'
            '<w:spacing w:before="40" w:after="40"/><w:ind w:left="%d"/>'
            % (GREY_L, ind)))

    def options(self, letters, texts, ind=300, sz=18):
        """Lettered options laid out in one or two columns."""
        wide = max(len(t) for t in texts) > 34
        if wide:
            for ltr, t in zip(letters, texts):
                self.body.append(para(
                    [run('%s. ' % ltr, b=True, color=PERI, sz=sz),
                     run(t, sz=sz)],
                    '<w:spacing w:after="20"/><w:ind w:left="%d" '
                    'w:hanging="200"/>' % (ind + 200)))
        else:
            half = (len(texts) + 1) // 2
            rows = []
            for i in range(half):
                cells = []
                for j in (i, i + half):
                    if j < len(texts):
                        cells.append(_cell(para(
                            [run('%s. ' % letters[j], b=True, color=PERI,
                                 sz=sz), run(texts[j], sz=sz)],
                            '<w:spacing w:before="12" w:after="12"/>'),
                            None, 60, 50))
                    else:
                        cells.append(_cell(para([run('', sz=sz)]), None, 60,
                                           50))
                rows.append(_row(cells))
            self.body.append(_tbl(rows, 'FFFFFF', 0, (50, 50)))

    def tf(self, n, text, sz=19):
        """One true/false item with the two boxes on the line."""
        self.body.append(para(
            [run('%d.  ' % n, b=True, color=INDIGO, sz=sz),
             run(text + '   ', sz=sz),
             run('  T  ', b=True, color=PERI, sz=sz),
             run('/', color=GREY_L, sz=sz),
             run('  F  ', b=True, color=PERI, sz=sz)],
            '<w:spacing w:before="30" w:after="30"/>'
            '<w:ind w:left="260" w:hanging="260"/>'))

    def blanks(self, parts, sz=19, ind=0):
        """A sentence with writing slots. `parts` alternates text and width."""
        rs = []
        for p in parts:
            if isinstance(p, int):
                rs.append(run(' ' * max(6, p), u=True, sz=sz))
            else:
                rs.append(run(p, sz=sz))
        self.body.append(para(rs, '<w:spacing w:before="40" w:after="40"/>'
                                  '<w:ind w:left="%d"/>' % ind))

    # ---------------------------------------------------------- models
    def datapanel(self, title, rows, accent=INDIGO, note=''):
        """M2 · the book's own figures, handed over as data for the cycle."""
        out = [_row([_cell(para([run(title, b=True, color='FFFFFF', sz=17)],
                                '<w:spacing w:before="40" w:after="40"/>'),
                           accent.lstrip('#'), 90, 100)])]
        for i, r in enumerate(rows):
            if isinstance(r, (list, tuple)):
                n = len(r)
                wds = [100 // n] * n
                out.append(_row([
                    _cell(para([run(str(c), sz=17,
                                    b=(i == 0),
                                    color=INK if i else accent)],
                               '<w:spacing w:before="26" w:after="26"/>'),
                          CREAM if i % 2 else None, 80, wd)
                    for c, wd in zip(r, wds)]))
            else:
                out.append(_row([_cell(para([run(str(r), sz=17)],
                                            '<w:spacing w:before="26" '
                                            'w:after="26"/>'),
                                      None, 80, 100)]))
        self.body.append(_tbl(out, accent, 6, (100,)))
        if note:
            self.body.append(para([run(note, color=GREY, sz=16)],
                                  '<w:spacing w:after="60"/>'))
        else:
            self.blank()

    def grid(self, headers, rows, accent=INDIGO, widths=None, note=''):
        """A table whose cells may be filled or blank. '' means a writing slot."""
        n = len(headers)
        widths = widths or [100 // n] * n
        out = [_row([_cell(para([run(h, b=True, color='FFFFFF', sz=16)],
                                '<w:spacing w:before="36" w:after="36"/>'),
                           accent.lstrip('#'), 80, w)
                     for h, w in zip(headers, widths)])]
        for i, r in enumerate(rows):
            cells = []
            for c, w in zip(r, widths):
                if c == '':
                    cells.append(_cell(para([run('', sz=18)],
                                            '<w:spacing w:before="54" '
                                            'w:after="54"/>'),
                                      'FFFFFF', 80, w))
                else:
                    cells.append(_cell(para([run(str(c), sz=17)],
                                            '<w:spacing w:before="36" '
                                            'w:after="36"/>'),
                                      CREAM if i % 2 else None, 80, w))
            out.append(_row(cells))
        self.body.append(_tbl(out, accent, 6, tuple(widths)))
        if note:
            self.body.append(para([run(note, color=GREY, sz=16)],
                                  '<w:spacing w:after="60"/>'))
        else:
            self.blank()

    def trace(self, title, steps, accent=INDIGO):
        """M3 · a worked solution, each step beside the reason for it."""
        out = [_row([_cell(para([run(title, b=True, color='FFFFFF', sz=17)],
                                '<w:spacing w:before="40" w:after="40"/>'),
                           accent.lstrip('#'), 90, 100)])]
        rows = []
        for i, (step, why) in enumerate(steps):
            rows.append(_row([
                _cell(para([run(step, sz=18, mono=('=' in step or
                                                   step[:1].isdigit()))],
                           '<w:spacing w:before="30" w:after="30"/>'),
                      CREAM if i % 2 else None, 80, 52),
                _cell(para([run(why, sz=16, color=GREY)],
                           '<w:spacing w:before="30" w:after="30"/>'),
                      CREAM if i % 2 else None, 80, 48)]))
        self.body.append(_tbl(out, accent, 6, (100,)))
        self.body.append(_tbl(rows, accent, 6, (52, 48)))
        self.blank()

    def ruleframe(self, n, lead, skeleton, words):
        """M5 · the student writes the rule, with the obligatory words given.

        The frame supplies the shape of the sentence and the vocabulary that
        must appear in it. What it never supplies is the rule — that is the
        point of the move, and the book's own wording waits in the key.
        """
        rs = [run('%d.  ' % n, b=True, color=TEAL, sz=19), run(lead, sz=19)]
        inner = [para(rs, '<w:spacing w:before="46" w:after="26"/>')]
        inner.append(para([run('use every one of these words:  ', color=GREY,
                               sz=16),
                           run('  ·  '.join(words), b=True, color=TEAL,
                               sz=16)],
                          '<w:spacing w:after="30"/>'))
        for line in skeleton:
            prs = []
            for p in line:
                if isinstance(p, int):
                    prs.append(run(' ' * max(8, p), u=True, sz=19))
                else:
                    prs.append(run(p, sz=19))
            inner.append(para(prs, '<w:spacing w:before="26" w:after="26"/>'
                                   '<w:ind w:left="200"/>'))
        self.body.append(_tbl([_row([_cell(''.join(inner), 'EEF6F4', 120)])],
                              TEAL, 10, (100,)))
        self.blank()

    def contrast(self, title, cases, question, accent=AMBER):
        """M6 · cases that differ on one dimension, side by side."""
        n = len(cases)
        w = 100 // n
        head = _row([_cell(para([run(c[0], b=True, color=accent, sz=17)],
                                '<w:spacing w:before="34" w:after="34"/>'),
                           'FBF4EA', 80, w) for c in cases])
        bodyr = []
        depth = max(len(c[1]) for c in cases)
        for i in range(depth):
            bodyr.append(_row([
                _cell(para([run(c[1][i] if i < len(c[1]) else '', sz=17)],
                           '<w:spacing w:before="26" w:after="26"/>'),
                      None, 80, w) for c in cases]))
        self.body.append(para([run(title, b=True, color=accent, sz=17)],
                              '<w:spacing w:before="50" w:after="24"/>'))
        self.body.append(_tbl([head] + bodyr, accent, 6, tuple([w] * n)))
        self.body.append(para([run(question, sz=18)],
                              '<w:spacing w:before="36" w:after="20"/>'))
        self.rule(300)
        self.rule(300)
        self.blank()

    # ---------------------------------------------------------- interactions
    def rolecards(self, intro, roles, accent=PLUM):
        """X2 · one viewpoint each, then the team fills one grid."""
        self.badge('role', intro)
        n = len(roles)
        w = 100 // n
        head = _row([_cell(para([run(r[0], b=True, color='FFFFFF', sz=16)],
                                '<w:spacing w:before="32" w:after="32"/>'),
                           accent.lstrip('#'), 80, w) for r in roles])
        body = _row([_cell(para([run(r[1], sz=16)],
                                '<w:spacing w:before="30" w:after="30"/>'),
                           'F7F2F8', 80, w) for r in roles])
        ans = _row([_cell(''.join(para([run('', sz=18)],
                                       '<w:spacing w:before="60" '
                                       'w:after="60"/>')
                                  for _ in range(2)), 'FFFFFF', 80, w)
                    for r in roles])
        self.body.append(_tbl([head, body, ans], accent, 6, tuple([w] * n)))
        self.blank()

    def errorhunt(self, intro, lines, accent=RED):
        """X3 · a worked solution with planted errors, numbered for marking."""
        self.badge('hunt', intro)
        rows = []
        for i, ln in enumerate(lines):
            rows.append(_row([
                _cell(para([run(chr(97 + i), b=True, color=accent, sz=16)],
                           '<w:spacing w:before="28" w:after="28"/>'),
                      'FBF0EF', 70, 6),
                _cell(para([run(ln, sz=18, mono=True)],
                           '<w:spacing w:before="28" w:after="28"/>'),
                      None, 70, 60),
                _cell(para([run('', sz=18)],
                           '<w:spacing w:before="28" w:after="28"/>'),
                      'FFFFFF', 70, 34)]))
        self.body.append(_tbl(
            [_row([_cell(para([run('the solution as written', b=True,
                                   color='FFFFFF', sz=15)],
                              '<w:spacing w:before="28" w:after="28"/>'),
                         accent.lstrip('#'), 70, 66),
                   _cell(para([run('right, or what is wrong with it', b=True,
                                   color='FFFFFF', sz=15)],
                              '<w:spacing w:before="28" w:after="28"/>'),
                         accent.lstrip('#'), 70, 34)])] + rows,
            accent, 6, (6, 60, 34)))
        self.blank()

    def predict(self, prompt, after, accent=AMBER):
        """X4 · the prediction is written before the evidence is read."""
        self.badge('predict', prompt)
        head = _row([
            _cell(para([run('what I think will happen', b=True, color=accent,
                            sz=16)], '<w:spacing w:before="30" w:after="30"/>'),
                  'FBF4EA', 80, 50),
            _cell(para([run('what the figures actually show', b=True,
                            color=accent, sz=16)],
                       '<w:spacing w:before="30" w:after="30"/>'),
                  'FBF4EA', 80, 50)])
        slot = _row([
            _cell(''.join(para([run('', sz=18)], '<w:spacing w:before="66" '
                                                 'w:after="66"/>')
                          for _ in range(2)), 'FFFFFF', 80, 50),
            _cell(''.join(para([run('', sz=18)], '<w:spacing w:before="66" '
                                                 'w:after="66"/>')
                          for _ in range(2)), 'FFFFFF', 80, 50)])
        self.body.append(_tbl([head, slot], accent, 6, (50, 50)))
        if after:
            self.body.append(para([run(after, color=GREY, sz=16)],
                                  '<w:spacing w:after="60"/>'))
        self.blank()

    def teachback(self, n, audience, task, words, lines=5, accent=TEAL):
        """X5 · explain it to a named reader, using the required words."""
        self.badge('teach', 'Write it for %s — not for the marker.' % audience)
        inner = [para([run('%d.  ' % n, b=True, color=accent, sz=19),
                       run(task, sz=19)],
                      '<w:spacing w:before="40" w:after="24"/>')]
        inner.append(para([run('every one of these words must appear:  ',
                               color=GREY, sz=16),
                           run('  ·  '.join(words), b=True, color=accent,
                               sz=16)], '<w:spacing w:after="36"/>'))
        self.body.append(_tbl([_row([_cell(''.join(inner), 'EEF6F4', 110)])],
                              accent, 10, (100,)))
        for _ in range(lines):
            self.rule(200)
        self.blank()

    def sortboard(self, intro, regions, items, accent=BLUE):
        """X6 · regions printed on the page, items written into them."""
        self.badge('sort', intro)
        self.body.append(para(
            [run('the items:  ', color=GREY, sz=16)]
            + [run('  ·  '.join(items), sz=17)],
            '<w:spacing w:before="20" w:after="40"/>'))
        n = len(regions)
        w = 100 // n
        head = _row([_cell(para([run(r, b=True, color='FFFFFF', sz=16)],
                                '<w:spacing w:before="32" w:after="32"/>'),
                           accent.lstrip('#'), 80, w) for r in regions])
        pit = _row([_cell(''.join(para([run('', sz=18)],
                                       '<w:spacing w:before="54" '
                                       'w:after="54"/>') for _ in range(3)),
                          'FFFFFF', 80, w) for _ in regions])
        self.body.append(_tbl([head, pit], accent, 6, tuple([w] * n)))
        self.blank()

    def speedround(self, items, accent=AMBER):
        """X8 · retrieval from earlier handouts, before anything new starts."""
        self.badge('speed', 'Answer from memory. Do not look anything up.')
        rows = []
        half = (len(items) + 1) // 2
        for i in range(half):
            cells = []
            for j in (i, i + half):
                if j < len(items):
                    cells.append(_cell(para(
                        [run('%d. ' % (j + 1), b=True, color=accent, sz=16),
                         run(items[j], sz=16),
                         run('  ' + ' ' * 10, u=True, sz=16)],
                        '<w:spacing w:before="22" w:after="22"/>'),
                        None, 70, 50))
                else:
                    cells.append(_cell(para([run('', sz=16)]), None, 70, 50))
            rows.append(_row(cells))
        self.body.append(_tbl(rows, accent, 4, (50, 50)))
        self.blank()

    def matchpairs(self, left, right, start=1, accent=PERI):
        """T4 · numbered items on the left, lettered choices on the right.

        The choices are printed once, above the items, so a student never has
        to turn back to a previous block to read them. Nothing on these sheets
        refers to anything that is not on the same page.
        """
        letters = [chr(65 + i) for i in range(len(right))]
        rows = []
        half = (len(right) + 1) // 2
        for i in range(half):
            cells = []
            for j in (i, i + half):
                if j < len(right):
                    cells.append(_cell(para(
                        [run('%s  ' % letters[j], b=True, color=accent, sz=16),
                         run(right[j], sz=16)],
                        '<w:spacing w:before="20" w:after="20"/>'),
                        CREAM, 70, 50))
                else:
                    cells.append(_cell(para([run('', sz=16)]), CREAM, 70, 50))
            rows.append(_row(cells))
        self.body.append(_tbl(rows, accent, 4, (50, 50)))
        self.blank()
        for i, lt in enumerate(left):
            self.body.append(para(
                [run('%d.  ' % (start + i), b=True, color=INDIGO, sz=18),
                 run(lt, sz=18),
                 run('      ', sz=18),
                 run('        ', u=True, sz=18)],
                '<w:spacing w:before="24" w:after="24"/>'
                '<w:ind w:left="300" w:hanging="300"/>'))
        self.blank()

    def pairpoint(self, note, settle):
        """X1 · both answer alone, then compare; the sheet settles the draw."""
        self.badge('pair', note)
        self.body.append(para(
            [run('If you disagree: ', b=True, color=TEAL, sz=16),
             run(settle, color=GREY, sz=16)],
            '<w:spacing w:before="20" w:after="50"/>'))

    def buildframe(self, n, task, accent=INDIGO):
        """X7 · the blank twin, introduced."""
        self.badge('build', 'Close the earlier pages first.')
        self.body.append(para(
            [run('%d.  ' % n, b=True, color=accent, sz=19), run(task, sz=19)],
            '<w:spacing w:before="30" w:after="40"/>'))

    # ---------------------------------------------------------- key side
    def keyhead(self, t):
        self.body.append(_tbl(
            [_row([_cell(para([run(t, b=True, color='FFFFFF', sz=21)],
                              '<w:spacing w:before="60" w:after="60"/>'),
                         INDIGO.lstrip('#'), 110, 100)])],
            INDIGO, 8, (100,)))
        self.blank()

    def keygrid3(self, answers, cols=3):
        """Short answers, three to a row, numbered as the handout numbers them."""
        rows = []
        per = (len(answers) + cols - 1) // cols
        for i in range(per):
            cells = []
            for k in range(cols):
                j = i + k * per
                if j < len(answers):
                    n, a = answers[j]
                    cells.append(_cell(para(
                        [run('%d  ' % n, b=True, color=PERI, sz=16),
                         run(str(a), sz=17)],
                        '<w:spacing w:before="22" w:after="22"/>'),
                        CREAM if i % 2 else None, 70, 100 // cols))
                else:
                    cells.append(_cell(para([run('', sz=16)]), None, 70,
                                      100 // cols))
            rows.append(_row(cells))
        self.body.append(_tbl(rows, INDIGO, 4,
                              tuple([100 // cols] * cols)))
        self.blank()

    def keywhy(self, whys, cap=16):
        if not whys:
            return
        self.body.append(para([run('why', b=True, color=INDIGO, sz=18)],
                              '<w:spacing w:before="60" w:after="20"/>'))
        for n, w in whys[:cap]:
            self.body.append(para(
                [run('%d  ' % n, b=True, color=PERI, sz=16),
                 run(w, sz=16)],
                '<w:spacing w:after="18"/><w:ind w:left="300" '
                'w:hanging="300"/>'))
        self.blank()

    def keyrule(self, n, booktext):
        """The book's own wording for a rule frame, for the student to compare."""
        self.body.append(_tbl(
            [_row([_cell(''.join([
                para([run('%d  ' % n, b=True, color=TEAL, sz=17),
                      run('what the book says', b=True, color=TEAL, sz=16)],
                     '<w:spacing w:before="34" w:after="18"/>'),
                para([run(booktext, sz=17)],
                     '<w:spacing w:after="34"/><w:ind w:left="300"/>')]),
                'EEF6F4', 100)])], TEAL, 8, (100,)))
        self.blank()


class WDoc(Doc, WS):
    """A Doc that also knows the Workshop blocks."""
    pass
