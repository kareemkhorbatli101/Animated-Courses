# -*- coding: utf-8 -*-
"""The figures of Book 1 Chapter 7, Inventory I.

A computational chapter needs a different kind of model from a conceptual one.
These figures draw where a number comes from and what moves it, rather than
what a term means: the split of one total into two, the layers a cost flow
assumption cuts through, the direction every method moves when prices rise,
and the year an error lands in.

Every number here is one the chapter prints. As in Chapter 1, each builder
produces both the model and the blank twin.
"""
from wsart import (Canvas, tw,
                   INK, INDIGO, INDIGO_L, INDIGO_M, AMBER, AMBER_L, TEAL,
                   TEAL_L, RED, RED_L, GREY, GREY_L, SOFT, PAPER)

W = 760


def _head(c, title, sub=None):
    y = c.text(W / 2, 30, title, 21, INDIGO, True)
    if sub:
        y = c.wrapped(W / 2, 54, sub, W - 70, 15, GREY)
    return y + 16


# ---------------------------------------------------------------- 1 · split
def gafs_split(blank=False):
    """One total, split two ways. The whole chapter is this equation."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'One total, split two ways',
              'everything in this chapter is a decision about where to cut')
    # the top bar
    c.rect(60, y, W - 120, 56, INDIGO_L, INDIGO, 2.4, 7)
    c.lab(W / 2, y + 26, 'GOODS AVAILABLE FOR SALE', 19, INDIGO, True)
    c.lab(W / 2, y + 46, 'beginning inventory + purchases', 14, GREY)
    y += 56
    c.line(W / 2, y, W / 2, y + 22, INDIGO, 2)
    c.line(230, y + 22, W - 230, y + 22, INDIGO, 2)
    c.arrow(230, y + 22, 230, y + 40, INDIGO, 2)
    c.arrow(W - 230, y + 22, W - 230, y + 40, INDIGO, 2)
    y += 42
    hl = c.card(60, y, 300, 'COST OF GOODS SOLD',
                'the units that left · an expense, in the income '
                'statement', AMBER_L, AMBER, 2.4, tsz=17, bsz=13, minh=80)
    c.card(W - 60 - 300, y, 300, 'ENDING INVENTORY',
           'the units still here · an asset, on the balance sheet',
           TEAL_L, TEAL, 2.4, tsz=17, bsz=13, minh=hl)
    y += hl + 22
    c.labwrap(W / 2, y,
              'The two always add back to the total. A cost flow assumption '
              'moves the cut; it never changes what is being cut.', W - 140,
              16, INK)
    y = c.bot + 20
    c.note(60, y, W - 120,
           'Beginning inventory + Purchases = Goods available for sale = '
           'Cost of goods sold + Ending inventory', SOFT, GREY_L, INDIGO, 16,
           bold=True)
    return c.render()


# ---------------------------------------------------------------- 2 · tree
def goods_tree(blank=False):
    """Three questions that settle whether goods belong in the count."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'Is it in our inventory at year-end?',
              'the rule is control · control usually follows legal title')
    rows = [
        ('Are the goods in transit?', INDIGO,
         [('FOB shipping point', 'control passed when they left the seller, '
                                 'so the BUYER includes them'),
          ('FOB destination', 'the seller keeps control until they arrive, '
                              'so the SELLER includes them')]),
        ('Are the goods on consignment?', TEAL,
         [('we are the consignor (the owner)',
           'the goods stay in OUR inventory, wherever they sit'),
          ('we are the consignee (the shop)',
           'we NEVER include them, even on our own shelves')]),
        ('Are the goods held for somebody else?', AMBER,
         [('in our warehouse, owned by another company',
           'take them OUT of the physical count'),
          ('ours, but stored somewhere else', 'ADD them to the count')]),
    ]
    for q, col, branches in rows:
        c.rect(30, y, 250, 64, col, None, 0, 6, op=0.12)
        c.rect(30, y, 250, 64, 'none', col, 2.2, 6)
        c.centred(155, y + 32, q, 228, 15, col, True)
        yy = y
        for nm, out in branches:
            c.arrow(284, yy + 18, 310, yy + 18, col, 2, 7)
            c.lab(318, yy + 14, nm, 14, col, True, anchor='start')
            c.lab(318, yy + 34, out, 13, INK, anchor='start')
            yy += 40
        y = max(y + 64, yy) + 16
    c.note(30, y, W - 60,
           'FOB shipping point: the BUYER includes goods in transit. FOB '
           'destination: the SELLER includes them. Many candidates reverse '
           'these.', RED_L, RED, RED, 16)
    return c.render()


# ---------------------------------------------------------------- 3 · costs
def cost_split(blank=False):
    """Which costs stay in the asset, and which leave as an expense."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'Which costs go into the asset',
              'cost means everything needed to bring the goods to their '
              'present condition and location')
    cw = 350
    cols = [
        ('INVENTORIABLE', TEAL, TEAL_L,
         'stays in inventory as an ASSET, and becomes cost of goods sold '
         'when the goods are sold',
         ['purchase price', 'freight-in', 'import duties',
          'non-refundable taxes', 'handling',
          'less trade and purchase discounts', 'direct labor',
          'production overhead, at normal capacity']),
        ('PERIOD', AMBER, AMBER_L,
         'an EXPENSE of the period in which it occurs',
         ['freight-out to customers', 'sales commissions', 'advertising',
          'general and administrative costs',
          'storage of finished goods',
          'interest on routinely produced inventory',
          'abnormal waste: unusual spoilage, idle time, extra freight',
          'fixed overhead not allocated when output is low']),
    ]
    bot = y
    for k, (hd, col, fill, rule, items) in enumerate(cols):
        x = 24 + k * (cw + 12)
        c.rect(x, y, cw, 36, fill, col, 2.4, 6)
        c.text(x + cw / 2, y + 24, hd, 18, col, True)
        yy = y + 36 + 6
        yy = c.centred(x + cw / 2, yy + 20, rule, cw - 20, 13, GREY) + 12
        for it in items:
            h = c.card(x, yy, cw, it, None, PAPER, GREY_L, 1.5, tsz=13,
                       tcol=INK, minh=26, pad=5)
            yy += h + 5
        bot = max(bot, yy)
    c.note(24, bot + 10, W - 48,
           'The test is the same every time: did this cost help bring the '
           'goods to their present condition and location?',
           SOFT, GREY_L, INK, 16)
    return c.render()


# ---------------------------------------------------------------- 4 · layers
def cost_layers(blank=False):
    """The same eight thousand cases, cut three different ways."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'One set of facts, three cuts',
              'Orontes olive oil 2025 · 8,000 cases available costing '
              '372,000 · 6,000 sold, 2,000 left')
    # the layers, as a stack: 1,000@40 · 2,000@44 · 3,000@48 · 2,000@50
    layers = [(1000, 40, 40000), (2000, 44, 88000), (3000, 48, 144000),
              (2000, 50, 100000)]
    total_u = sum(l[0] for l in layers)
    bar_w = W - 220
    c.text(24, y + 16, 'the layers,', 13, GREY, True, anchor='start')
    c.text(24, y + 32, 'oldest first', 13, GREY, True, anchor='start')
    x = 190
    for u, p, v in layers:
        wd = bar_w * u / float(total_u)
        c.rect(x, y, wd, 50, INDIGO_L, INDIGO, 1.8, 4)
        # a narrow layer cannot hold "1,000 @ $40" on one line, so it stacks
        narrow = wd < 100
        if narrow:
            c.lab(x + wd / 2, y + 19, '{:,}'.format(u), 12, INDIGO, True)
            c.lab(x + wd / 2, y + 33, '@ $%d' % p, 12, INDIGO, True)
        else:
            c.lab(x + wd / 2, y + 24, '%s @ $%d' % ('{:,}'.format(u), p), 13,
                  INDIGO, True)
        c.lab(x + wd / 2, y + 45, '{:,}'.format(v), 11, GREY)
        x += wd
    y += 66
    cuts = [
        ('FIFO', AMBER, 'the OLDEST costs leave',
         'ending inventory 100,000', 'cost of goods sold 272,000', 1.0),
        ('LIFO', TEAL, 'the NEWEST costs leave',
         'ending inventory 84,000', 'cost of goods sold 288,000', 0.0),
        ('Weighted average', INDIGO, 'one cost for every unit',
         'ending inventory 93,000', 'cost of goods sold 279,000', None),
    ]
    for nm, col, rule, ei, cogs, frac in cuts:
        c.rect(24, y, 156, 56, col, None, 0, 5, op=0.12)
        c.rect(24, y, 156, 56, 'none', col, 2, 5)
        c.centred(102, y + 17, nm, 140, 14, col, True)
        c.centred(102, y + 40, rule, 144, 11, GREY)
        # the bar, split at 6,000 of 8,000 sold
        bx, bw = 190, W - 220
        sold = bw * 0.75
        if frac is None:
            c.rect(bx, y + 8, sold, 40, AMBER_L, AMBER, 1.6, 4)
            c.rect(bx + sold, y + 8, bw - sold, 40, TEAL_L, TEAL, 1.6, 4)
            c.lab(bx + sold / 2, y + 33, cogs, 13, AMBER, True)
            c.lab(bx + sold + (bw - sold) / 2, y + 33, '93,000', 13, TEAL,
                  True)
        else:
            # FIFO sells from the left of the stack, LIFO from the right
            sx = bx if frac else bx + bw - sold
            kx = bx + sold if frac else bx
            c.rect(sx, y + 8, sold, 40, AMBER_L, AMBER, 1.6, 4)
            c.rect(kx, y + 8, bw - sold, 40, TEAL_L, TEAL, 1.6, 4)
            c.lab(sx + sold / 2, y + 33, cogs, 13, AMBER, True)
            c.lab(kx + (bw - sold) / 2, y + 33, ei.split()[-1], 13, TEAL, True)
        y += 68
    c.rect(190, y, 150, 22, AMBER_L, AMBER, 1.5, 4)
    c.text(265, y + 16, 'sold · an expense', 12, AMBER, True)
    c.rect(352, y, 150, 22, TEAL_L, TEAL, 1.5, 4)
    c.text(427, y + 16, 'kept · an asset', 12, TEAL, True)
    c.note(24, y + 36, W - 48,
           'Every row adds back to 372,000. The method moves the cut, never '
           'the total.', SOFT, GREY_L, INK, 16, bold=True)
    return c.render()


# ---------------------------------------------------------------- 5 · rising
def rising_effects(blank=False):
    """Which way each figure moves, when prices are rising."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'When prices are rising',
              'when prices FALL, every one of these reverses')
    cols = ['Cost of goods sold', 'Gross profit', 'Income tax',
            'Ending inventory']
    rows = [('FIFO', AMBER, ['lowest', 'highest', 'highest', 'highest']),
            ('Weighted average', GREY, ['between', 'between', 'between',
                                        'between']),
            ('LIFO', TEAL, ['highest', 'lowest', 'lowest', 'lowest'])]
    lw = 170
    cw = (W - 48 - lw) / float(len(cols))
    c.rect(24, y, lw, 40, SOFT, GREY_L, 1.6, 4)
    c.text(34, y + 25, 'method', 14, GREY, True, anchor='start')
    for j, col in enumerate(cols):
        x = 24 + lw + j * cw
        c.rect(x, y, cw, 40, INDIGO_L, INDIGO, 1.6, 4)
        c.centred(x + cw / 2, y + 20, col, cw - 8, 12.5, INDIGO, True)
    y += 40
    for nm, col, vals in rows:
        c.rect(24, y, lw, 44, PAPER, GREY_L, 1.3)
        c.text(34, y + 28, nm, 15, col, True, anchor='start')
        for j, v in enumerate(vals):
            x = 24 + lw + j * cw
            c.rect(x, y, cw, 44, PAPER, GREY_L, 1.3)
            if blank:
                continue
            tint = (AMBER_L if v == 'highest' else
                    TEAL_L if v == 'lowest' else SOFT)
            tc = (AMBER if v == 'highest' else
                  TEAL if v == 'lowest' else GREY)
            c.rect(x + 4, y + 5, cw - 8, 34, tint, None, 0, 4)
            c.text(x + cw / 2, y + 28, v, 13, tc, True)
        y += 44
    y += 16
    c.labwrap(W / 2, y,
              'FIFO puts the old, cheap costs into cost of goods sold, so its '
              'profit and its tax are the highest. LIFO does the opposite.',
              W - 120, 15, INK)
    y = c.bot + 16
    c.note(24, y, W - 48,
           'The LIFO reserve is the difference between the two inventories: '
           'for Orontes, 100,000 − 84,000 = 16,000. FIFO inventory = '
           'LIFO inventory + the reserve. FIFO cost of goods sold = LIFO cost '
           'of goods sold − the INCREASE in the reserve.',
           INDIGO_L, INDIGO, INDIGO, 15)
    return c.render()


# ---------------------------------------------------------------- 6 · errors
def error_years(blank=False):
    """An overstated count, and the two years it touches."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'An error in the count lands in two years',
              'Orontes counted some goods twice at the end of 2025, '
              'overstating ending inventory by 40 (USD 000)')
    bw = (W - 72) / 2.0
    for k, (yr, col, lines, note) in enumerate([
            ('2025', AMBER,
             [('Ending inventory', 'overstated by 40'),
              ('Cost of goods sold', 'understated by 40'),
              ('Pretax income', 'overstated by 40'),
              ('Retained earnings at the year end', 'overstated by 40')],
             'at a 25% tax rate, NET income is overstated by only 30'),
            ('2026', TEAL,
             [('Beginning inventory', 'too high by 40'),
              ('Cost of goods sold', 'overstated by 40'),
              ('Pretax income', 'understated by 40'),
              ('Retained earnings at the year end', 'CORRECT')],
             'the two errors cancel: this is a counterbalancing error')]):
        x = 24 + k * (bw + 24)
        c.rect(x, y, bw, 34, col, None, 0, 6, op=0.14)
        c.rect(x, y, bw, 34, 'none', col, 2.2, 6)
        c.text(x + bw / 2, y + 23, yr, 18, col, True)
        yy = y + 34 + 8
        for nm, eff in lines:
            c.rect(x, yy, bw, 42, PAPER, GREY_L, 1.4, 4)
            c.text(x + 10, yy + 18, nm, 13, GREY, anchor='start')
            c.lab(x + 10, yy + 35, eff, 14, col, True, anchor='start')
            yy += 46
        c.labwrap(x + bw / 2, yy + 14, note, bw - 16, 13, INK)
        if k == 0:
            c.arrow(x + bw + 2, y + 120, x + bw + 22, y + 120, INDIGO_M, 2.4,
                    8)
    y = c.bot + 18
    c.note(24, y, W - 48,
           'Find the direction for the first year, then reverse it for the '
           'second. Retained earnings are wrong at the end of year one and '
           'right at the end of year two.', SOFT, GREY_L, INK, 16)
    return c.render()


# ---------------------------------------------------------------- 7 · map
def ch7_map(blank=False):
    """The chapter's five sections and what each one decides."""
    c = Canvas(W, blank=blank)
    y = _head(c, 'Chapter 7 at a glance')
    nodes = [
        ('Which GOODS belong',
         'control at the year-end date, wherever they sit'),
        ('Which COSTS belong',
         'everything that brings them to their present condition and '
         'location'),
        ('Which costs LEAVE',
         'the cost flow assumption cuts goods available into two'),
        ('What the choice DOES',
         'in rising prices FIFO gives higher income, tax and inventory'),
        ('What a WRONG count does',
         'the error reverses in the next year and then cancels'),
    ]
    for i, (nm, sub) in enumerate(nodes):
        h = c.card(80, y, W - 160, nm, sub, SOFT, INDIGO, 2, tsz=16, bsz=13,
                   minh=58)
        if i < len(nodes) - 1:
            c.arrow(W / 2, y + h + 1, W / 2, y + h + 17, INDIGO_M, 2, 8)
        y += h + 18
    c.note(80, y + 2, W - 160,
           'Every unit is either still in inventory at the end of the year, '
           'or part of cost of goods sold. There is no third place for it to '
           'be.', INDIGO_L, INDIGO, INDIGO, 16)
    return c.render()


FIGS = {
    'gafs_split': gafs_split, 'goods_tree': goods_tree,
    'cost_split': cost_split, 'cost_layers': cost_layers,
    'rising_effects': rising_effects, 'error_years': error_years,
    'ch7_map': ch7_map,
}
