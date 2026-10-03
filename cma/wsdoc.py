# -*- coding: utf-8 -*-
"""Page blocks for the Workshop handouts.

Three kinds of block, and the page has to make the difference visible at a
glance: a model that carries content, an interaction that needs another
person, and a test item.

Every table here goes through wstable, which keeps the grid, the cell counts
and the widths consistent; wslint then checks the built document rather than
trusting this source.
"""
from docxw import (Doc, para, run, esc, INDIGO, PERI, GREY, INK, CREAM, SOFT,
                   RULE, GREEN, RED, AMBER, TEAL, PLUM, BLUE)
from wstable import cell, row, table, widths_for, banner

GREY_L = 'AAB2C0'
PAPER = 'FFFFFF'

MOVES = ['ORIENT', 'MODEL', 'READ THE MODEL', 'INVENT THE RULE', 'APPLY',
         'CHECKPOINT']
MOVEC = {'ORIENT': GREY, 'MODEL': INDIGO, 'READ THE MODEL': INDIGO,
         'INVENT THE RULE': TEAL, 'APPLY': PLUM, 'CHECKPOINT': RED}

XBADGE = {
    'pair': ('WORK IN PAIRS', TEAL),
    'role': ('TAKE A ROLE', PLUM),
    'hunt': ('ERROR HUNT', RED),
    'predict': ('PREDICT FIRST', AMBER),
    'teach': ('TEACH IT BACK', TEAL),
    'sort': ('SORT THEM', BLUE),
    'build': ('FROM MEMORY', INDIGO),
    'speed': ('60 SECONDS', AMBER),
    'preview': ('BEFORE YOU START', INDIGO),
}


def _p(text, sz=18, b=False, color=None, before=24, after=24, ind=0,
       hang=0, mono=False):
    ppr = '<w:spacing w:before="%d" w:after="%d"/>' % (before, after)
    if ind or hang:
        ppr += '<w:ind w:left="%d" w:hanging="%d"/>' % (ind, hang)
    return para([run(text, b=b, color=color, sz=sz, mono=mono)], ppr)


class Counter(object):
    """Hands out item numbers inside a handout and collects the answers."""

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

    def mark(self):
        return (self.i, len(self.ans), len(self.why))

    def reset(self, mark):
        self.i, na, nw = mark
        del self.ans[na:]
        del self.why[nw:]


class WS(object):
    """Workshop blocks, mixed into a Doc."""

    # ---------------------------------------------------------- page frame
    def cyclebar(self, letter, title):
        w = [11.0, 89.0]
        self.body.append(table([row([
            cell(_p('CYCLE ' + letter, 19, True, 'FFFFFF', 40, 40), w[0],
                 INDIGO, 90),
            cell(_p(title, 22, True, INDIGO, 40, 40), w[1], 'F2F4FB', 90)])],
            w, INDIGO, 8))
        self.blank()

    def movebar(self, name, direction=''):
        col = MOVEC.get(name, INDIGO)
        rs = [run(name, b=True, color=col, sz=17)]
        if direction:
            rs.append(run('      ' + direction, color=GREY, sz=18))
        self.body.append(table(
            [row([cell(para(rs, '<w:spacing w:before="30" w:after="30"/>'),
                       100.0, None, 60)])], [100.0], col, 0))
        self.body.append(para([run('', sz=2)],
                              '<w:pBdr><w:top w:val="single" w:sz="6" '
                              'w:space="1" w:color="%s"/></w:pBdr>'
                              '<w:spacing w:after="30"/>' % col))

    def badge(self, kind, note=''):
        label, col = XBADGE[kind]
        w = [17.0, 83.0]
        self.body.append(table([row([
            cell(_p('  ' + label + '  ', 15, True, 'FFFFFF', 20, 20), w[0],
                 col, 60),
            cell(_p(note, 18, False, col, 20, 20), w[1], None, 80)])],
            w, col, 0))

    def checkbar(self, n, question, options, reloop):
        """The gate at the end of a cycle. Always multiple choice."""
        inner = [para([run('CHECKPOINT  ', b=True, color=RED, sz=16),
                       run('%d.  ' % n, b=True, color=INDIGO, sz=19),
                       run(question, sz=19)],
                      '<w:spacing w:before="50" w:after="24"/>')]
        for i, o in enumerate(options):
            inner.append(para(
                [run('%s. ' % 'ABCD'[i], b=True, color=PERI, sz=18),
                 run(o, sz=18)],
                '<w:spacing w:after="16"/><w:ind w:left="500" '
                'w:hanging="200"/>'))
        inner.append(para([run('If you got it wrong: ' + reloop, color=RED,
                               sz=17)],
                          '<w:spacing w:before="20" w:after="50"/>'))
        self.body.append(table(
            [row([cell(''.join(inner), 100.0, 'FBF0EF', 120)])],
            [100.0], RED, 12))
        self.blank()

    # ---------------------------------------------------------- items
    def q(self, n, text, sz=19, after=16):
        self.body.append(para(
            [run('%d.  ' % n, b=True, color=INDIGO, sz=sz),
             run(text, sz=sz)],
            '<w:spacing w:before="40" w:after="%d"/>'
            '<w:ind w:left="300" w:hanging="300"/>' % after))

    def options(self, letters, texts, sz=18):
        """Lettered options, one or two columns depending on their length."""
        wide = max(len(t) for t in texts) > 32
        if wide:
            for ltr, t in zip(letters, texts):
                self.body.append(para(
                    [run('%s. ' % ltr, b=True, color=PERI, sz=sz),
                     run(t, sz=sz)],
                    '<w:spacing w:after="18"/><w:ind w:left="560" '
                    'w:hanging="260"/>'))
        else:
            half = (len(texts) + 1) // 2
            w = [50.0, 50.0]
            rows = []
            for i in range(half):
                cs = []
                for j in (i, i + half):
                    if j < len(texts):
                        xml = para([run('%s. ' % letters[j], b=True,
                                        color=PERI, sz=sz),
                                    run(texts[j], sz=sz)],
                                   '<w:spacing w:before="12" w:after="12"/>')
                    else:
                        xml = _p('', sz)
                    cs.append(cell(xml, 50.0, None, 60))
                rows.append(row(cs))
            self.body.append(table(rows, w, PAPER, 0))

    def tf(self, n, text, sz=19):
        self.body.append(para(
            [run('%d.  ' % n, b=True, color=INDIGO, sz=sz),
             run(text + '   ', sz=sz),
             run('  TRUE  ', b=True, color=PERI, sz=sz),
             run('/', color=GREY_L, sz=sz),
             run('  FALSE  ', b=True, color=PERI, sz=sz)],
            '<w:spacing w:before="30" w:after="30"/>'
            '<w:ind w:left="300" w:hanging="300"/>'))

    def blanks(self, parts, sz=19, ind=300):
        rs = []
        for p in parts:
            if isinstance(p, int):
                rs.append(run(' ' * max(6, p), u=True, sz=sz))
            else:
                rs.append(run(p, sz=sz))
        self.body.append(para(rs, '<w:spacing w:before="36" w:after="36"/>'
                                  '<w:ind w:left="%d"/>' % ind))

    def wordbank(self, words, label='choose from'):
        self.body.append(para(
            [run(label + ':  ', color=GREY, sz=16),
             run('   ·   '.join(words), b=True, color=INDIGO, sz=16)],
            '<w:spacing w:before="20" w:after="26"/><w:ind w:left="300"/>'))

    # ---------------------------------------------------------- models
    def datapanel(self, title, rows, accent=INDIGO, note='', widths=None):
        """M2 · the book's own figures, handed over as data."""
        body = [r for r in rows if isinstance(r, (list, tuple))]
        w = widths or widths_for(body)
        out = [banner(title, w, accent)]
        for i, r in enumerate(rows):
            if not isinstance(r, (list, tuple)):
                out.append(row([cell(_p(str(r), 17, False, None, 26, 26),
                                     sum(w), None, 80, span=len(w))]))
                continue
            r = list(r) + [''] * (len(w) - len(r))
            out.append(row([
                cell(_p(str(c), 16 if i else 15, i == 0,
                        accent if i == 0 else INK, 26, 26),
                     w[j], CREAM if (i and i % 2 == 0) else None, 80)
                for j, c in enumerate(r[:len(w)])]))
        self.body.append(table(out, w, accent, 6))
        if note:
            self.body.append(_p(note, 16, False, GREY, 10, 60))
        else:
            self.blank()

    def grid(self, headers, rows, accent=INDIGO, widths=None, note=''):
        """A table whose cells may be filled or blank; '' is a writing slot."""
        w = widths or widths_for([headers] + [list(r) for r in rows])
        out = [row([cell(_p(h, 15, True, 'FFFFFF', 34, 34), w[j], accent, 80)
                    for j, h in enumerate(headers)])]
        for i, r in enumerate(rows):
            r = list(r) + [''] * (len(w) - len(r))
            cs = []
            for j, c in enumerate(r[:len(w)]):
                if c == '':
                    cs.append(cell(_p('', 18, before=54, after=54), w[j],
                                   PAPER, 80))
                else:
                    cs.append(cell(_p(str(c), 16, before=32, after=32), w[j],
                                   CREAM if i % 2 else None, 80))
            out.append(row(cs))
        self.body.append(table(out, w, accent, 6))
        if note:
            self.body.append(_p(note, 16, False, GREY, 10, 60))
        else:
            self.blank()

    def trace(self, title, steps, accent=INDIGO):
        """M3 · a worked solution, each step beside the reason for it."""
        w = widths_for([[s, r] for s, r in steps])
        out = [banner(title, w, accent)]
        for i, (step, why) in enumerate(steps):
            fill = CREAM if i % 2 else None
            out.append(row([
                cell(_p(step, 17, before=30, after=30,
                        mono=('=' in step)), w[0], fill, 80),
                cell(_p(why, 15, False, GREY, 30, 30), w[1], fill, 80)]))
        self.body.append(table(out, w, accent, 6))
        self.blank()

    def ruleframe(self, n, lead, skeleton, words):
        """M5 · the student writes the rule, with the words supplied."""
        inner = [para([run('%d.  ' % n, b=True, color=TEAL, sz=19),
                       run(lead, sz=19)],
                      '<w:spacing w:before="46" w:after="26"/>')]
        inner.append(para([run('use every one of these words:  ', color=GREY,
                               sz=16),
                           run('  ·  '.join(words), b=True, color=TEAL,
                               sz=16)], '<w:spacing w:after="30"/>'))
        for line in skeleton:
            prs = []
            for p in line:
                if isinstance(p, int):
                    prs.append(run(' ' * max(8, p), u=True, sz=19))
                else:
                    prs.append(run(p, sz=19))
            inner.append(para(prs, '<w:spacing w:before="26" w:after="26"/>'
                                   '<w:ind w:left="200"/>'))
        self.body.append(table([row([cell(''.join(inner), 100.0, 'EEF6F4',
                                          120)])], [100.0], TEAL, 10))
        self.blank()

    def contrast(self, title, cases, question, options, accent=AMBER):
        """M6 · cases that differ on one dimension, side by side."""
        n = len(cases)
        w = [100.0 / n] * n
        head = row([cell(_p(c[0], 16, True, accent, 34, 34), w[j], 'FBF4EA',
                         80) for j, c in enumerate(cases)])
        depth = max(len(c[1]) for c in cases)
        rows = []
        for i in range(depth):
            rows.append(row([
                cell(_p(c[1][i] if i < len(c[1]) else '', 16, before=26,
                        after=26), w[j], None, 80)
                for j, c in enumerate(cases)]))
        self.body.append(_p(title, 17, True, accent, 50, 24))
        self.body.append(table([head] + rows, w, accent, 6))
        self.body.append(_p(question, 18, before=36, after=16))
        return options

    # ---------------------------------------------------------- interactions
    def rolecards(self, intro, roles, accent=PLUM):
        self.badge('role', intro)
        n = len(roles)
        w = [100.0 / n] * n
        head = row([cell(_p(r[0], 15, True, 'FFFFFF', 32, 32), w[j], accent,
                         80) for j, r in enumerate(roles)])
        body = row([cell(_p(r[1], 15, before=30, after=30), w[j], 'F7F2F8',
                         80) for j, r in enumerate(roles)])
        slot = row([cell(''.join(_p('', 18, before=60, after=60)
                                 for _ in range(2)), w[j], PAPER, 80)
                    for j in range(n)])
        self.body.append(table([head, body, slot], w, accent, 6))
        self.blank()

    def errorhunt(self, intro, lines, accent=RED):
        """X3 · a worked solution with planted errors, each one marked
        right or wrong by letter. No free writing."""
        self.badge('hunt', intro)
        w = [7.0, 63.0, 30.0]
        out = [row([
            cell(_p('', 15, before=28, after=28), w[0], accent, 70),
            cell(_p('the line as written', 15, True, 'FFFFFF', 28, 28), w[1],
                 accent, 70),
            cell(_p('right, or wrong?', 15, True, 'FFFFFF', 28, 28), w[2],
                 accent, 70)])]
        for i, ln in enumerate(lines):
            out.append(row([
                cell(_p(chr(97 + i), 16, True, accent, 28, 28), w[0],
                     'FBF0EF', 70),
                cell(_p(ln, 17, before=28, after=28), w[1], None, 70),
                cell(para([run('  RIGHT  ', b=True, color=PERI, sz=15),
                           run('/', color=GREY_L, sz=15),
                           run('  WRONG  ', b=True, color=PERI, sz=15)],
                          '<w:spacing w:before="28" w:after="28"/>'),
                     w[2], PAPER, 70)]))
        self.body.append(table(out, w, accent, 6))
        self.blank()

    def predict(self, prompt, options, after='', accent=AMBER):
        self.badge('predict', prompt)
        w = [50.0, 50.0]
        head = row([
            cell(_p('what I think will happen', 15, True, accent, 30, 30),
                 w[0], 'FBF4EA', 80),
            cell(_p('what the figures actually show', 15, True, accent, 30,
                    30), w[1], 'FBF4EA', 80)])
        slot = row([
            cell(''.join(_p('', 18, before=60, after=60) for _ in range(2)),
                 w[0], PAPER, 80),
            cell(''.join(_p('', 18, before=60, after=60) for _ in range(2)),
                 w[1], PAPER, 80)])
        self.body.append(table([head, slot], w, accent, 6))
        if after:
            self.body.append(_p(after, 16, False, GREY, 10, 60))
        self.blank()

    def teachback(self, n, audience, task, words, lines=5, accent=TEAL):
        self.badge('teach', 'Write it for %s — not for the marker.'
                   % audience)
        inner = [para([run('%d.  ' % n, b=True, color=accent, sz=19),
                       run(task, sz=19)],
                      '<w:spacing w:before="40" w:after="24"/>')]
        inner.append(para([run('every one of these words must appear:  ',
                               color=GREY, sz=16),
                           run('  ·  '.join(words), b=True, color=accent,
                               sz=16)], '<w:spacing w:after="36"/>'))
        self.body.append(table([row([cell(''.join(inner), 100.0, 'EEF6F4',
                                          110)])], [100.0], accent, 10))
        for _ in range(lines):
            self.rule(200)
        self.blank()

    def rule(self, ind=300):
        self.body.append(para(
            [run('  ', sz=19)],
            '<w:pBdr><w:bottom w:val="single" w:sz="4" w:space="2" '
            'w:color="%s"/></w:pBdr>'
            '<w:spacing w:before="40" w:after="40"/><w:ind w:left="%d"/>'
            % (GREY_L, ind)))

    def sortboard(self, intro, regions, items, accent=BLUE):
        """X6 · regions printed on the page, items written into them."""
        self.badge('sort', intro)
        self.body.append(para(
            [run('the items:  ', color=GREY, sz=16),
             run('   ·   '.join(items), sz=17)],
            '<w:spacing w:before="20" w:after="40"/>'))
        n = len(regions)
        w = [100.0 / n] * n
        head = row([cell(_p(r, 15, True, 'FFFFFF', 32, 32), w[j], accent, 80)
                    for j, r in enumerate(regions)])
        pit = row([cell(''.join(_p('', 18, before=54, after=54)
                                for _ in range(3)), w[j], PAPER, 80)
                   for j in range(n)])
        self.body.append(table([head, pit], w, accent, 6))
        self.blank()

    def matchpairs(self, left, right, start=1, accent=PERI):
        """T4 · the choices are printed above the items, never elsewhere."""
        letters = [chr(65 + i) for i in range(len(right))]
        wide = max(len(r) for r in right) > 34
        if wide:
            w = [100.0]
            rows = [row([cell(para(
                [run('%s  ' % letters[j], b=True, color=accent, sz=16),
                 run(right[j], sz=16)],
                '<w:spacing w:before="18" w:after="18"/>'), 100.0, CREAM, 70)])
                for j in range(len(right))]
        else:
            w = [50.0, 50.0]
            half = (len(right) + 1) // 2
            rows = []
            for i in range(half):
                cs = []
                for j in (i, i + half):
                    if j < len(right):
                        xml = para([run('%s  ' % letters[j], b=True,
                                        color=accent, sz=16),
                                    run(right[j], sz=16)],
                                   '<w:spacing w:before="18" w:after="18"/>')
                    else:
                        xml = _p('', 16)
                    cs.append(cell(xml, 50.0, CREAM, 70))
                rows.append(row(cs))
        self.body.append(table(rows, w, accent, 4))
        self.blank()
        for i, lt in enumerate(left):
            self.body.append(para(
                [run('%d.  ' % (start + i), b=True, color=INDIGO, sz=18),
                 run(lt, sz=18), run('      ', sz=18),
                 run('        ', u=True, sz=18)],
                '<w:spacing w:before="24" w:after="24"/>'
                '<w:ind w:left="300" w:hanging="300"/>'))
        self.blank()

    def speedround(self, pairs, accent=AMBER):
        """X8 · retrieval from earlier handouts, as true or false so that
        it can be marked in sixty seconds without a key."""
        self.badge('speed', 'Mark each one TRUE or FALSE from memory. Sixty '
                            'seconds, no looking back.')
        w = [78.0, 22.0]
        rows = []
        for i, (stem, _a) in enumerate(pairs):
            rows.append(row([
                cell(para([run('%d. ' % (i + 1), b=True, color=accent, sz=16),
                           run(stem, sz=16)],
                          '<w:spacing w:before="20" w:after="20"/>'),
                     w[0], None if i % 2 else CREAM, 70),
                cell(para([run(' T ', b=True, color=PERI, sz=16),
                           run('/', color=GREY_L, sz=16),
                           run(' F ', b=True, color=PERI, sz=16)],
                          '<w:spacing w:before="20" w:after="20"/>'),
                     w[1], None if i % 2 else CREAM, 70)]))
        self.body.append(table(rows, w, accent, 4))
        self.blank()

    def pairpoint(self, note, settle):
        self.badge('pair', note)
        self.body.append(para(
            [run('If you disagree: ', b=True, color=TEAL, sz=16),
             run(settle, color=GREY, sz=16)],
            '<w:spacing w:before="20" w:after="50"/>'))

    def buildframe(self, n, task, accent=INDIGO):
        self.badge('build', 'Close the earlier pages first.')
        self.body.append(para(
            [run('%d.  ' % n, b=True, color=accent, sz=19), run(task, sz=19)],
            '<w:spacing w:before="30" w:after="40"/>'))

    def previewbar(self, title, note):
        """The band that opens page 1 of every handout."""
        self.body.append(table([row([cell(
            ''.join([_p(title, 20, True, 'FFFFFF', 50, 16),
                     _p(note, 16, False, 'E8EAF6', 0, 50)]),
            100.0, INDIGO, 110)])], [100.0], INDIGO, 8))
        self.blank()

    # ---------------------------------------------------------- key side
    def keyhead(self, t):
        self.body.append(table([row([cell(
            _p(t, 21, True, 'FFFFFF', 60, 60), 100.0, INDIGO, 110)])],
            [100.0], INDIGO, 8))
        self.blank()

    def keygrid3(self, answers, cols=3):
        w = [100.0 / cols] * cols
        per = (len(answers) + cols - 1) // cols
        rows = []
        for i in range(per):
            cs = []
            for k in range(cols):
                j = i + k * per
                if j < len(answers):
                    n, a = answers[j]
                    xml = para([run('%d  ' % n, b=True, color=PERI, sz=16),
                                run(str(a), sz=17)],
                               '<w:spacing w:before="22" w:after="22"/>')
                else:
                    xml = _p('', 16)
                cs.append(cell(xml, w[k], CREAM if i % 2 else None, 70))
            rows.append(row(cs))
        self.body.append(table(rows, w, INDIGO, 4))
        self.blank()

    def keywhy(self, whys, cap=24):
        if not whys:
            return
        self.body.append(_p('why', 18, True, INDIGO, 60, 20))
        for n, w in whys[:cap]:
            self.body.append(para(
                [run('%d  ' % n, b=True, color=PERI, sz=16),
                 run(w, sz=16)],
                '<w:spacing w:after="18"/><w:ind w:left="300" '
                'w:hanging="300"/>'))
        self.blank()

    def keyrule(self, n, booktext):
        self.body.append(table([row([cell(''.join([
            para([run('%d  ' % n, b=True, color=TEAL, sz=17),
                  run('what the book says', b=True, color=TEAL, sz=16)],
                 '<w:spacing w:before="34" w:after="18"/>'),
            para([run(booktext, sz=17)],
                 '<w:spacing w:after="34"/><w:ind w:left="300"/>')]),
            100.0, 'EEF6F4', 100)])], [100.0], TEAL, 8))
        self.blank()


class WDoc(Doc, WS):
    """A Doc that also knows the Workshop blocks."""
    pass
