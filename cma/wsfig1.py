# -*- coding: utf-8 -*-
"""The twelve figures of Book 1 Chapter 1.

Each builder takes `blank`. With blank=False it is the MODEL that carries the
content of a cycle; with blank=True it is the twin the student rebuilds from
memory at the close of the handout. Both come out of one function, so the
structure of the two can never drift apart.

No builder invents an accounting fact. Every word and every number here is in
Chapter 1; the drawing decides only the arrangement.

Heights are never written down. Each figure draws on a Canvas that remembers
how far down it has reached, and the render height follows from that.
"""
from wsart import (Canvas, wrapped_h, tw, arrow,
                   INK, INDIGO, INDIGO_L, INDIGO_M, AMBER, AMBER_L, TEAL,
                   TEAL_L, RED, RED_L, GREY, GREY_L, RULE, SOFT, PAPER)

W = 760


def _head(c, title, sub=None):
    y = c.text(W / 2, 30, title, 21, INDIGO, True)
    if sub:
        y = c.wrapped(W / 2, 54, sub, W - 70, 15, GREY)
    return y + 16


# ---------------------------------------------------------------- 1 · beam
def beam(blank=False):
    """A = L + E as a physical balance. The point is that one pan is a stack."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'The accounting equation never tips')
    cx, bt = W / 2, y + 36
    c.path('M%g %g L%g %g L%g %g Z' % (cx, bt + 6, cx - 34, bt + 86,
                                       cx + 34, bt + 86), INDIGO_L, INDIGO, 2,
           bottom=bt + 86)
    c.line(cx - 48, bt + 86, cx + 48, bt + 86, INDIGO, 3)
    c.line(130, bt, W - 130, bt, INK, 5)
    c.circle(cx, bt, 7, INDIGO)
    for x in (205, W - 205):
        c.line(x, bt, x, bt + 26, GREY, 2)
    c.card(205 - 100, bt + 26, 200, 'ASSETS', 'what the company controls',
           INDIGO_L, INDIGO, 2.4, tsz=21, bsz=14, minh=86)
    c.card(W - 205 - 100, bt + 26, 200, 'LIABILITIES', None, AMBER_L, AMBER,
           2.2, tsz=17, minh=40, pad=7)
    c.card(W - 205 - 100, bt + 72, 200, 'EQUITY', None, TEAL_L, TEAL, 2.2,
           tsz=17, minh=40, pad=7)
    y = bt + 128
    c.text(205, y, 'one block', 15, GREY, italic=True)
    c.text(W - 205, y, 'two blocks, stacked', 15, GREY, italic=True)
    # the equation, written out
    y += 54
    if blank:
        for x in (cx - 200, cx, cx + 200):
            c.slot(x - 80, y - 26, 160, 38)
    else:
        c.text(cx - 200, y, 'Assets', 26, INDIGO, True)
        c.text(cx, y, 'Liabilities', 26, AMBER, True)
        c.text(cx + 200, y, 'Equity', 26, TEAL, True)
    c.text(cx - 100, y, '=', 26, INK, True)
    c.text(cx + 100, y, '+', 26, INK, True)
    y += 34
    y = c.labwrap(cx, y, 'Creditors or owners finance every asset, so the two '
                         'sides must stay equal. Equity is what is left for '
                         'the owners after the liabilities: the residual.',
                  560, 16, GREY)
    return c.render()


# ---------------------------------------------------------------- 2 · equity
def equity_tree(blank=False):
    """Equity's two parts, and the five things that move retained earnings."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'Inside equity')
    c.rect(W / 2 - 110, y, 220, 44, TEAL_L, TEAL, 2.4, 7)
    c.text(W / 2, y + 29, 'EQUITY', 21, TEAL, True)
    top = y + 44
    lx, rx, cy = 180, W - 180, top + 48
    c.line(W / 2, top, W / 2, top + 28, TEAL, 2.2)
    c.line(lx, top + 28, rx, top + 28, TEAL, 2.2)
    c.arrow(lx, top + 28, lx, cy - 2, TEAL, 2.2)
    c.arrow(rx, top + 28, rx, cy - 2, TEAL, 2.2)
    hl = c.card(lx - 155, cy, 310, 'CONTRIBUTED CAPITAL',
                'what the owners paid in', SOFT, INDIGO, 2.2, tsz=17, bsz=14)
    c.card(rx - 155, cy, 310, 'RETAINED EARNINGS',
           'past net income the company kept', SOFT, INDIGO, 2.2, tsz=17,
           bsz=14, minh=hl)
    yy = cy + hl + 10
    for s in ('Common stock, at par value',
              'Additional paid-in capital (APIC)'):
        yy += c.card(lx - 155, yy, 310, s, None, PAPER, GREY_L, 1.7, tsz=15,
                     tcol=INK, minh=30, pad=6) + 8
    c.text(lx, yy + 14, 'these two do not change with profit', 14, GREY,
           italic=True)
    # what moves retained earnings
    ins = (('Revenues', 'increase'), ('Gains', 'increase'))
    outs = (('Expenses', 'decrease'), ('Losses', 'decrease'),
            ('Dividends', 'decrease'))
    bh = 34 + (len(ins) + len(outs)) * 27 + 12
    by = cy + hl + 10
    c.rect(rx - 155, by, 310, bh, PAPER, GREY_L, 1.7, 6)
    c.text(rx, by + 22, 'what moves it', 14, GREY, True)
    for i, (s, dirn) in enumerate(ins + outs):
        ly = by + 46 + i * 27
        up = dirn == 'increase'
        col = TEAL if up else AMBER
        if up:
            c.arrow(rx - 146, ly, rx - 114, ly, col, 2, 7)
        else:
            c.arrow(rx - 114, ly, rx - 146, ly, col, 2, 7)
        c.lab(rx - 104, ly + 5, '%s %s' % (s, dirn), 15, col, anchor='start')
    y = max(yy + 24, by + bh) + 18
    c.note(70, y, W - 140, 'A dividend decreases retained earnings but is '
                           'never an expense. It is a distribution to owners, '
                           'so it never reaches the income statement.',
           RED_L, RED, RED, 16)
    return c.render()


# ---------------------------------------------------------------- 3 · dr/cr
def drcr_grid(blank=False):
    """Which six account types increase on the left, and which on the right."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'Which side increases the account?',
              'debit means the left side · credit means the right side '
              '· neither word means good or bad')
    cw, x0 = 300, 50
    bot = y
    for k, (hd, sub, col, fillc, names) in enumerate([
            ('DEBIT', 'the left side', INDIGO, INDIGO_L,
             ('Assets', 'Expenses', 'Dividends declared')),
            ('CREDIT', 'the right side', AMBER, AMBER_L,
             ('Liabilities', 'Equity', 'Revenues'))]):
        x = x0 + k * (cw + 60)
        c.rect(x, y, cw, 46, fillc, col, 2.4, 7)
        c.text(x + cw / 2, y + 24, hd, 20, col, True)
        c.text(x + cw / 2, y + 40, sub, 14, col)
        c.text(x + cw / 2, y + 72, 'increases these', 15, GREY, True)
        yy = y + 86
        for nm in names:
            yy += c.card(x, yy, cw, nm, None, PAPER, col, 1.9, tsz=17,
                         tcol=INK, minh=34, pad=7) + 8
        bot = max(bot, yy)
    # the memory aid
    y = bot + 16
    c.text(W / 2, y, 'the expanded equation says the same thing', 15, GREY,
           True)
    y += 18
    parts = [('Assets', INDIGO), ('+', None), ('Expenses', INDIGO),
             ('+', None), ('Dividends', INDIGO), ('=', None),
             ('Liabilities', AMBER), ('+', None), ('Equity', AMBER),
             ('+', None), ('Revenues', AMBER)]
    widths = [26 if col is None else tw(s, 15, True) + 20 for s, col in parts]
    x = (W - sum(widths)) / 2.0
    for (s, col), wd in zip(parts, widths):
        if col is None:
            c.text(x + wd / 2, y + 23, s, 20, INK, True)
        elif blank:
            c.slot(x + 2, y, wd - 4, 34)
        else:
            c.rect(x + 2, y, wd - 4, 34,
                   INDIGO_L if col == INDIGO else AMBER_L, col, 1.8, 5)
            c.text(x + wd / 2, y + 23, s, 15, col, True)
        x += wd
    y += 34 + 20
    y = c.labwrap(W / 2, y, 'Everything on the left of this equation increases '
                            'with a debit. Everything on the right increases '
                            'with a credit.', 600, 16, GREY)
    c.note(50, y + 16, W - 100,
           'A contra account reduces a related account, so it takes the '
           'opposite side: accumulated depreciation sits with the assets but '
           'has a credit balance.', SOFT, GREY_L, GREY, 15)
    return c.render()


# ---------------------------------------------------------------- 4 · T-account
def taccount(blank=False):
    """The anatomy of an account, and where the normal balance sits."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'Where the normal balance sits')
    for k, (nm, side, col, rows, bal, balside) in enumerate([
            ('Cash  (an asset)', 'debit', INDIGO,
             [('1,500', ''), ('800', '1,200'), ('', '40')], '1,060', 'left'),
            ('Notes payable  (a liability)', 'credit', AMBER,
             [('', '800')], '800', 'right')]):
        x0 = 44 + k * 356
        wd = 312
        c.text(x0 + wd / 2, y, nm, 17, INK, True)
        top = y + 16
        c.rect(x0 + (0 if balside == 'left' else wd / 2), top, wd / 2, 176,
               col, None, 0, 0, op=0.09)
        c.line(x0, top, x0 + wd, top, INK, 3)
        c.line(x0 + wd / 2, top, x0 + wd / 2, top + 176, INK, 3)
        c.lab(x0 + wd / 4, top + 26, 'DEBIT', 16, INDIGO, True)
        c.lab(x0 + 3 * wd / 4, top + 26, 'CREDIT', 16, AMBER, True)
        c.text(x0 + wd / 4, top + 44, 'left', 13, GREY)
        c.text(x0 + 3 * wd / 4, top + 44, 'right', 13, GREY)
        for i, (ld, rd) in enumerate(rows):
            yy = top + 74 + i * 26
            if ld:
                c.text(x0 + wd / 4, yy, ld, 17, INK, mono=True)
            if rd:
                c.text(x0 + 3 * wd / 4, yy, rd, 17, INK, mono=True)
        bx = x0 + (wd / 4 if balside == 'left' else 3 * wd / 4)
        c.line(bx - 42, top + 142, bx + 42, top + 142, INK, 1.6)
        c.text(bx, top + 164, bal, 18, col, True, mono=True)
        c.lab(x0 + wd / 2, top + 206, 'normal balance: ' + side, 16, col, True)
    y = c.bot + 22
    c.note(44, y, W - 88,
           'The normal balance is the side that increases the account. It is '
           'never a judgement about whether the account is good.',
           SOFT, GREY_L, GREY, 15)
    return c.render()


# ---------------------------------------------------------------- 5 · pipeline
def pipeline(blank=False):
    """Where a transaction goes, from the paper to the statements."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'The road a transaction travels')
    steps = [('Source document', 'invoice, bank slip'),
             ('Journal entry', 'debits and credits'),
             ('Ledger', 'one T-account per item'),
             ('Trial balance', 'do the two totals agree?'),
             ('Four statements', 'what users read')]
    n = len(steps)
    gapx = 16
    bw = (W - 60 - gapx * (n - 1)) / float(n)
    h = 0
    for i, (nm, sub) in enumerate(steps):
        x = 30 + i * (bw + gapx)
        last = i == n - 1
        h = max(h, c.card(x, y, bw, nm, sub, INDIGO_L if last else SOFT,
                          INDIGO, 2.4 if last else 2, tsz=15, bsz=12,
                          minh=84, pad=9))
    for i in range(n - 1):
        x = 30 + i * (bw + gapx)
        c.arrow(x + bw + 1, y + h / 2, x + bw + gapx - 1, y + h / 2, INDIGO,
                2.2, 7)
    y += h + 26
    c.text(W / 2, y, 'every step keeps total debits equal to total credits',
           16, GREY, True)
    y += 16
    c.line(30, y, W - 30, y, RULE, 1.6)
    c.labwrap(W / 2, y + 26,
              'A trial balance that agrees does not prove the entries are '
              'right. It only proves that the debits and the credits are '
              'equal.', W - 120, 16, AMBER)
    return c.render()


# ---------------------------------------------------------------- 6 · accrual
def accrual_timeline(blank=False):
    """One sale, two bases, two different years."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'One sale, two bases',
              'Orontes ships olive oil on December 20, 2025 and invoices 90 '
              '· the goods cost 54 · the customer pays on '
              'January 15, 2026')
    x1, x2 = 150, W - 60
    ship, pay = 250, 640
    ye = 445
    ytop = y + 26
    bands = []
    for k, (nm, col, fillc, marks, note) in enumerate([
            ('ACCRUAL BASIS', INDIGO, INDIGO_L,
             [(ship, 'revenue 90', 'cost of goods sold 54'),
              (pay, 'no revenue', 'the receivable becomes cash')],
             'Gross profit of 36 belongs to 2025, the year of delivery.'),
            ('CASH BASIS', AMBER, AMBER_L,
             [(ship, 'nothing recorded', ''),
              (pay, 'revenue 90', 'which is the wrong period')],
             'Simple, but not acceptable under U.S. GAAP.')]):
        ybase = ytop + 40 + k * 136
        bands.append(ybase)
        c.rect(26, ybase - 14, 112, 28, fillc, col, 1.8, 5)
        c.text(82, ybase + 5, nm.split()[0], 14, col, True)
        c.line(x1, ybase, x2, ybase, INK, 2.6)
        for xx, a, b in marks:
            c.circle(xx, ybase, 6, col)
            c.lab(xx, ybase - 16, a, 16, col, True)
            if b:
                c.lab(xx, ybase + 28, b, 14, GREY)
        c.lab(x2, ybase + 52, note, 15, col, anchor='end')
    # year-end divider, drawn to span both bands
    c.line(ye, ytop + 6, ye, bands[-1] + 68, RED, 2.2, '7 5')
    c.text(ye, ytop, 'fiscal year ends Dec 31, 2025', 15, RED, True)
    # the two dates sit on the axis of the lower band, where the eye already is
    for xx, s in ((ship, 'Dec 20'), (pay, 'Jan 15')):
        c.line(xx, bands[-1], xx, bands[-1] + 66, GREY_L, 1.4, '3 4')
        c.text(xx, bands[-1] + 84, s, 15, GREY)
    yb = bands[-1] + 84
    c.text(ye - 120, yb + 24, 'fiscal 2025', 16, GREY, True)
    c.text(ye + 120, yb + 24, 'fiscal 2026', 16, GREY, True)
    c.note(60, yb + 44, W - 120,
           'The timing of the cash does not decide the period.',
           SOFT, GREY_L, INK, 16, bold=True)
    return c.render()


# ---------------------------------------------------------------- 7 · qualities
def quality_tree(blank=False):
    """What makes information useful, and which qualities rank above which."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'What makes information useful')
    c.rect(W / 2 - 150, y, 300, 40, INDIGO_L, INDIGO, 2.4, 7)
    c.text(W / 2, y + 27, 'USEFUL INFORMATION', 18, INDIGO, True)
    top = y + 40
    c.text(W / 2, top + 22, 'two FUNDAMENTAL qualities', 15, INDIGO, True)
    c.line(W / 2, top, W / 2, top + 32, INDIGO, 2)
    lx, rx, fy = 200, W - 200, top + 42
    c.line(lx, top + 32, rx, top + 32, INDIGO, 2)
    bot = fy
    for x, nm, parts in ((lx, 'Relevance',
                          ('predictive value', 'confirmatory value',
                           'materiality')),
                         (rx, 'Faithful representation',
                          ('complete', 'neutral', 'free from error'))):
        c.arrow(x, top + 32, x, fy - 2, INDIGO, 2)
        yy = fy + c.card(x - 165, fy, 330, nm, None, SOFT, INDIGO, 2.2,
                         tsz=18, minh=38, pad=8) + 10
        for p in parts:
            yy += c.card(x - 145, yy, 290, p, None, PAPER, GREY_L, 1.6,
                         tsz=14, tcol=INK, minh=26, pad=5) + 6
        bot = max(bot, yy)
    ey = bot + 16
    c.text(W / 2, ey, 'four ENHANCING qualities', 15, TEAL, True)
    names = ('comparability', 'verifiability', 'timeliness',
             'understandability')
    bw = (W - 80 - 3 * 12) / 4.0
    hh = 0
    for i, nm in enumerate(names):
        x = 40 + i * (bw + 12)
        hh = max(hh, c.card(x, ey + 14, bw, nm, None, TEAL_L, TEAL, 1.9,
                            tsz=13, minh=38, pad=7))
    ey += 14 + hh + 22
    ey = c.labwrap(W / 2, ey, 'these make useful information more useful — '
                              'they cannot make useless information useful',
                   W - 150, 15, GREY)
    c.note(40, ey + 16, W - 80,
           'COST CONSTRAINT  ·  the benefit of reporting the information '
           'must be greater than the cost of producing it',
           AMBER_L, AMBER, AMBER, 16)
    return c.render()


# ---------------------------------------------------------------- 8 · rulemakers
def rulemakers(blank=False):
    """Four bodies, four jobs — and which one is not an accounting body."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'Who writes the rules')
    bot = y
    for k, (hd, col, fillc, chain) in enumerate([
            ('U.S. GAAP', INDIGO, INDIGO_L,
             [('SEC', 'U.S. government agency with legal authority over '
                      'public company reporting'),
              ('FASB', 'private and independent · writes U.S. GAAP'),
              ('ASC', 'Accounting Standards Codification · all U.S. GAAP '
                      'in one place, by topic'),
              ('ASU', 'Accounting Standards Update · how the FASB amends '
                      'the Codification')]),
            ('IFRS', TEAL, TEAL_L,
             [('IFRS Foundation', 'oversight of the standard setter'),
              ('IASB', 'issues IFRS'),
              ('IFRS', 'required for listed companies in many countries, '
                       'among them Jordan and the UAE')])]):
        x = 36 + k * 374
        cw = 314
        c.rect(x, y, cw, 34, fillc, col, 2.4, 6)
        c.text(x + cw / 2, y + 23, hd, 19, col, True)
        yy = y + 34 + 16
        for i, (nm, sub) in enumerate(chain):
            h = c.card(x, yy, cw, nm, sub, SOFT, col, 2, tsz=17, bsz=13,
                       minh=58)
            if i < len(chain) - 1:
                c.arrow(x + cw / 2, yy + h + 1, x + cw / 2, yy + h + 15, col, 2)
            if k == 0 and i == 0:
                c.text(x + cw / 2 + 92, yy + h + 12, 'recognizes', 13, GREY,
                       italic=True, anchor='start')
            yy += h + 16
        bot = max(bot, yy)
    y = bot + 4
    c.text(W / 2, y, 'The CMA exam tests U.S. GAAP, and asks about the main '
                     'IFRS differences.', 16, GREY, True)
    c.note(36, y + 18, W - 72,
           'PCAOB  ·  oversees the audits of public companies and sets '
           'AUDITING standards. It does not write accounting standards.',
           RED_L, RED, RED, 16)
    return c.render()


# ---------------------------------------------------------------- 9 · articulation
def articulation(blank=False):
    """The four statements, and the two links that join them."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'How the four statements connect')
    bw = 252
    X1, X2 = 34, W - 34 - bw
    rows = [(X1, 'Income statement', 'for a period · how did it perform?',
             False),
            (X2, 'Statement of changes in equity',
             'for a period · why did each equity account change?', False)]
    h1 = 0
    for x, nm, sub, hi in rows:
        h1 = max(h1, c.card(x, y, bw, nm, sub, SOFT, INDIGO, 2, tsz=16,
                            bsz=13, minh=74))
    # link 1
    mid = y + h1 / 2
    c.arrow(X1 + bw + 6, mid, X2 - 6, mid, TEAL, 2.4)
    c.lab(W / 2, mid - 12, 'net income', 15, TEAL, True)
    y2 = y + h1 + 68
    rows2 = [(X1, 'Statement of cash flows',
              'for a period · where did cash come from and go?', False),
             (X2, 'Balance sheet',
              'AT A DATE · what it has, what it owes, the owners’ '
              'claim', True)]
    h2 = 0
    for x, nm, sub, hi in rows2:
        h2 = max(h2, c.card(x, y2, bw, nm, sub, INDIGO_L if hi else SOFT,
                            INDIGO, 2.4 if hi else 2, tsz=16, bsz=13, minh=74))
    c.arrow(X2 + bw / 2, y + h1 + 2, X2 + bw / 2, y2 - 4, TEAL, 2.4)
    c.lab(X2 + bw / 2 - 14, y + h1 + 42, 'retained earnings', 15, TEAL,
          anchor='end')
    mid2 = y2 + h2 / 2
    c.arrow(X1 + bw + 6, mid2, X2 - 6, mid2, AMBER, 2.4)
    c.lab(W / 2, mid2 - 12, 'net change in cash', 15, AMBER, True)
    y = y2 + h2 + 24
    c.note(40, y, W - 80,
           'In Orontes’ January, net income was 80 but cash rose by '
           '1,060. Two very different numbers: that is the accrual basis at '
           'work.', SOFT, GREY_L, INK, 16)
    c.text(W / 2, c.bot + 26, 'one statement at a date · three for a '
                              'period', 16, GREY, True)
    return c.render()


# ---------------------------------------------------------------- 10 · effects
def effect_strip(blank=False):
    """Six January transactions, and which totals each one moves."""
    rows = [
        ('1', 'Issued shares for cash 1,500', '+1,500', '0', '+1,500', '0',
         '+1,500'),
        ('2', 'Borrowed cash on a note 800', '+800', '+800', '0', '0', '+800'),
        ('3', 'Bought a bottling line for cash 1,200', '0', '0', '0', '0',
         '(1,200)'),
        ('4', 'Sold goods on credit 300, cost 180', '+120', '0', '+120',
         '+120', '0'),
        ('5', 'Paid wages in cash 40', '(40)', '0', '(40)', '(40)', '(40)'),
        ('6', 'Declared a dividend 50', '0', '+50', '(50)', '0', '0'),
    ]
    cols = ['Assets', 'Liabilities', 'Equity', 'Net income', 'Cash']
    c = Canvas(W, blank=blank)
    y = _head(c, 'What each transaction moves',
              'Orontes Foods, January 2025 · USD 000')
    x0 = 26
    lw = 250
    cw = (W - 60 - lw) / float(len(cols))
    c.rect(x0, y, lw, 40, SOFT, GREY_L, 1.6, 4)
    c.text(x0 + 10, y + 25, 'transaction', 15, GREY, True, anchor='start')
    for j, col in enumerate(cols):
        x = x0 + lw + j * cw
        c.rect(x, y, cw, 40, INDIGO_L, INDIGO, 1.6, 4)
        c.centred(x + cw / 2, y + 20, col, cw - 4, 12.5, INDIGO, True)
    y += 40
    rh = 44
    for i, r in enumerate(rows):
        yy = y + i * rh
        c.rect(x0, yy, lw, rh, PAPER if i % 2 else SOFT, GREY_L, 1.2)
        c.text(x0 + 10, yy + 20, r[0] + '.', 14, INDIGO, True, anchor='start')
        c.centred(x0 + lw / 2 + 8, yy + rh / 2, r[1], lw - 40, 13, INK)
        for j in range(len(cols)):
            x = x0 + lw + j * cw
            v = r[2 + j]
            c.rect(x, yy, cw, rh, PAPER, GREY_L, 1.2)
            if blank:
                continue
            if v == '0':
                c.circle(x + cw / 2, yy + rh / 2, 3.4, GREY_L)
            else:
                neg = v.startswith('(')
                col = AMBER if neg else INDIGO
                c.rect(x + 4, yy + 5, cw - 8, rh - 10,
                       AMBER_L if neg else INDIGO_L, None, 0, 4)
                c.text(x + cw / 2, yy + rh / 2 + 5, v, 14, col, True, mono=True)
    y += len(rows) * rh + 26
    c.text(x0, y, 'read the columns, not the rows:', 15, GREY, True,
           anchor='start')
    y += 10
    for s in ('rows 1 and 2 bring in 2,300 of cash and no revenue — money '
              'from owners and lenders is financing, not income',
              'row 4 creates net income and no cash — revenue is recorded on '
              'delivery, not on payment',
              'row 6 moves equity and liabilities only — a dividend is not an '
              'expense, and no cash moves until February'):
        y = c.labwrap(W / 2, y + 22, '·  ' + s, W - 90, 14, INK)
    return c.render()


# ---------------------------------------------------------------- 11 · verbs
def verb_ladder(blank=False):
    """Five verbs that exam stems use precisely, as stages of one item's life."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'Five verbs, five different jobs')
    steps = [('recognize', 'put the item in the statements, with a name and '
                           'an amount'),
             ('measure', 'decide the amount'),
             ('record', 'enter it in the journal and the ledger'),
             ('present', 'show it on the face of a statement'),
             ('disclose', 'explain it in the notes')]
    n = len(steps)
    bw = (W - 56 - (n - 1) * 10) / float(n)
    bot = y
    for i, (v, m) in enumerate(steps):
        x = 28 + i * (bw + 10)
        c.rect(x, y, bw, 34, INDIGO_L, INDIGO, 2, 5)
        c.text(x + bw / 2, y + 23, v, 16, INDIGO, True)
        bot = max(bot, c.labwrap(x + bw / 2, y + 54, m, bw - 6, 13, INK))
        if i < n - 1:
            c.arrow(x + bw + 1, y + 17, x + bw + 9, y + 17, INDIGO, 1.8, 6)
    y = bot + 24
    c.note(28, y, W - 56,
           'Orontes recognizes revenue when it delivers the goods. It '
           'measures the revenue at the invoice price. It presents revenue in '
           'the income statement, and it discloses its revenue policy in the '
           'notes.', SOFT, GREY_L, INK, 15)
    c.labwrap(W / 2, c.bot + 28,
              'An exam stem that says "disclose" is not asking about the face '
              'of the statement.', W - 120, 16, AMBER)
    return c.render()


# ---------------------------------------------------------------- 12 · map
def chapter_map(blank=False):
    """The chapter's seven topics and what each one depends on."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'Chapter 1 at a glance')
    nodes = [
        ('users', 44, y, 210, 'Users, and what makes information useful'),
        ('elements', 278, y, 204, 'Elements and the accounting equation'),
        ('entry', 506, y, 210, 'Double entry: debits and credits'),
        ('accrual', 160, y + 120, 220, 'The accrual basis and matching'),
        ('rules', 404, y + 120, 220, 'Who writes the rules: U.S. GAAP and '
                                     'IFRS'),
        ('tb', 44, y + 240, 210, 'The trial balance'),
        ('stmts', 290, y + 240, 426, 'The four statements, and how they link'),
    ]
    at = {}
    for k, x, yy, w, lab in nodes:
        h = c.card(x, yy, w, lab, None, SOFT, INDIGO, 2, tsz=15, minh=62)
        at[k] = (x, yy, w, h)

    def edge(a, b, bow=0):
        ax, ay, aw, ah = at[a]
        bx, by, bw_, bh = at[b]
        x1, y1 = ax + aw / 2.0, ay + ah
        x2, y2 = bx + bw_ / 2.0, by
        if bow:
            c.curve(x1, y1, x2, y2, bow, INDIGO_M, 2, 8)
        else:
            c.arrow(x1, y1, x2, y2, INDIGO_M, 2, 8)

    edge('users', 'accrual', 22)
    edge('elements', 'accrual')
    edge('entry', 'rules', -22)
    edge('accrual', 'tb', 26)
    edge('accrual', 'stmts')
    edge('rules', 'stmts', -18)
    tx, ty, tw_, th = at['tb']
    sx, sy, sw_, sh = at['stmts']
    c.arrow(tx + tw_, ty + th / 2, sx - 3, sy + sh / 2, INDIGO_M, 2, 8)
    c.text(W / 2, c.bot + 30, 'everything in this chapter ends at the four '
                              'statements', 15, GREY, True)
    return c.render()


FIGS = {
    'beam': beam, 'equity_tree': equity_tree, 'drcr_grid': drcr_grid,
    'taccount': taccount, 'pipeline': pipeline,
    'accrual_timeline': accrual_timeline, 'quality_tree': quality_tree,
    'rulemakers': rulemakers, 'articulation': articulation,
    'effect_strip': effect_strip, 'verb_ladder': verb_ladder,
    'chapter_map': chapter_map,
}


# ---------------------------------------------------------------- 13 · adjustments
def adjust_quad(blank=False):
    """The four adjustments, as two questions crossed.

    The book lists the four in a table. A table invites memorising four names;
    the two questions behind them (which way did the cash go, and did it come
    early or late) generate all four, so they are what the figure draws.
    """
    c = Canvas(W, blank=blank)
    y = _head(c, 'Four adjustments from two questions',
              'ask which way the cash moved, and whether it moved early or '
              'late')
    lx, cw = 170, 270
    gy = y + 46
    rh = 108
    # column headings: the direction of the cash
    for k, lab in enumerate(('the company PAID the cash',
                             'the company RECEIVED the cash')):
        c.rect(lx + k * (cw + 16), gy - 40, cw, 34, INDIGO_L, INDIGO, 1.9, 5)
        c.text(lx + k * (cw + 16) + cw / 2, gy - 17, lab, 14, INDIGO, True)
    # row headings: when the cash moved
    for r, lab in enumerate(('cash moved FIRST,\nbefore it was earned or used',
                             'cash moves LAST,\nafter it was earned or used')):
        yy = gy + r * (rh + 14)
        c.rect(20, yy, 140, rh, AMBER_L, AMBER, 1.9, 5)
        c.centred(90, yy + rh / 2, lab.replace('\n', ' '), 126, 13, AMBER,
                  True)
    cells = [[('Prepaid expense', 'a deferral · creates an ASSET'),
              ('Contract liability\n(unearned revenue)',
               'a deferral · creates a LIABILITY')],
             [('Accrued expense', 'creates a LIABILITY'),
              ('Accrued revenue', 'creates an ASSET')]]
    for r, row in enumerate(cells):
        for k, (nm, sub) in enumerate(row):
            x = lx + k * (cw + 16)
            yy = gy + r * (rh + 14)
            c.card(x, yy, cw, nm.replace('\n', ' '), sub, SOFT, INDIGO, 2,
                   tsz=16, bsz=13, minh=rh)
    y = gy + 2 * (rh + 14) + 6
    c.note(20, y, W - 40,
           'Cash paid in advance is an asset, not an expense. Cash received '
           'in advance is a liability, not revenue.',
           AMBER_L, AMBER, AMBER, 16)
    return c.render()


# ---------------------------------------------------------------- 14 · trial balance
def tb_anatomy(blank=False):
    """What to do with each kind of line in a trial balance."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'How to read a trial balance',
              'four jobs, and which lines each one uses')
    jobs = [
        ('NET INCOME', INDIGO, 'every revenue, less every expense',
         'sales revenue · cost of goods sold · wages · '
         'depreciation · interest',
         'dividends declared are NOT an expense'),
        ('TOTAL ASSETS', TEAL, 'every asset, LESS every contra-asset',
         'cash · receivables · inventory · prepaid · land '
         '· equipment',
         'deduct the allowance and accumulated depreciation'),
        ('TOTAL LIABILITIES', AMBER, 'everything the company owes',
         'payables · dividends payable · notes payable',
         'a contra-asset is not a liability, whatever side it is on'),
        ('RETAINED EARNINGS', RED, 'opening, plus net income, less dividends',
         'retained earnings at January 1 · net income · dividends '
         'declared',
         'the trial balance holds only the OPENING figure'),
    ]
    for nm, col, rule, lines, trap in jobs:
        c.rect(24, y, 190, 70, col, None, 0, 5, op=0.12)
        c.rect(24, y, 190, 70, 'none', col, 2, 5)
        c.centred(119, y + 24, nm, 172, 15, col, True)
        c.centred(119, y + 50, rule, 172, 12, GREY)
        c.lab(232, y + 24, lines, 14, INK, anchor='start')
        c.lab(232, y + 50, '⚠  ' + trap, 13, col, anchor='start')
        y += 84
    c.note(24, y + 6, W - 48,
           'The two totals agreeing proves only that debits equal credits. It '
           'does not prove any line is in the right account.',
           SOFT, GREY_L, INK, 15)
    return c.render()


# ---------------------------------------------------------------- 15 · stems
def stem_decoder(blank=False):
    """Four wordings, and what each one instructs you to do."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'What the wording is telling you to do')
    rows = [
        ('MOST likely · BEST describes', INDIGO,
         'more than one option may be partly true',
         'choose the most precise and complete'),
        ('NOT · EXCEPT', RED,
         'three of the four options are true',
         'find the one that is false'),
        ('immediately after the transaction', AMBER,
         'later events are not being asked about',
         'ignore the cash payment next month'),
        ('net effect', TEAL,
         'two or more changes are in play',
         'add the increases and decreases first'),
    ]
    for nm, col, what, do in rows:
        h = 78
        c.rect(26, y, 268, h, col, None, 0, 6, op=0.12)
        c.rect(26, y, 268, h, 'none', col, 2.2, 6)
        c.centred(160, y + h / 2, nm, 246, 16, col, True)
        c.arrow(300, y + h / 2, 330, y + h / 2, col, 2.2, 8)
        c.lab(342, y + 30, what, 15, GREY, anchor='start')
        c.lab(342, y + 56, do, 16, INK, True, anchor='start')
        y += h + 14
    c.note(26, y + 6, W - 52,
           'One word in the stem can change which option is right. Read the '
           'stem twice before you read the options once.',
           SOFT, GREY_L, INK, 16)
    return c.render()


FIGS.update({'adjust_quad': adjust_quad, 'tb_anatomy': tb_anatomy,
             'stem_decoder': stem_decoder})
