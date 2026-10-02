# -*- coding: utf-8 -*-
"""Volume 12, Handout 3 — Inventories: Costing, Valuation and Write-Downs.

Covers A.2 ff(iii): the three named inventory differences, worked against
the four items Volume 4 used.
"""
from fadata import N, L, I, Y
from data import money, num

GAAP, IFRS, BOTH, SLATE = '1F6F8F', 'A05A2B', '2E7D5B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'


def _d(v):
    return '$' + num(v, 2) if v % 1 else '$' + num(v, 0)


_FOURH = ['Item', 'Cost', 'Under LIFO, the market rule',
          'Under FIFO, net realisable value']
_FOURW = [30, 14, 28, 28]


def _four(blank=False):
    def c(v):
        return '' if blank else v
    rows = []
    for i in range(4):
        r = L.row(i)
        rows.append([r['name'], _d(r['cost']), c(_d(r['lcm'])),
                     c(_d(r['lcnrv']))])
    return rows


_METH = ['Costing method', 'US GAAP', 'IFRS']
_METW = [48, 26, 26]


def _meth(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Specific identification', 'Permitted', c('Permitted')],
        ['First-in, first-out', 'Permitted', c('Permitted')],
        ['Weighted average cost', 'Permitted', c('Permitted')],
        ['Last-in, first-out', 'Permitted', c('Prohibited')],
        ['A different method for different classes of inventory',
         'Permitted', c('Permitted, if the classes genuinely differ')],
    ]


_THREEH = ['The three differences', 'US GAAP', 'IFRS']
_THREEW = [40, 30, 30]


def _three(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Is LIFO available?', c('Yes'), c('No')],
        ['The valuation rule', c('Net realisable value, or market for LIFO'),
         c('Net realisable value, always')],
        ['May a write-down be reversed?', c('No, never'),
         c('Yes, up to the original cost')],
    ]


HANDOUT = dict(
    n=3,
    title='Inventories: Costing, Valuation and Write-Downs',
    subtitle='Three differences, and one of them explains why a company that '
             'switches frameworks may have to abandon its costing method '
             'altogether.',
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the three differences, R3 for the comparison, which '
                 'the exam sets as a find-the-difference question.',
        collocations=['value inventory at the lower of two figures',
                      'write inventory down to net realisable value',
                      'reverse a previous write-down',
                      'apply a costing method consistently',
                      'abandon the last-in first-out method',
                      'recapture a reserve on conversion'],
        pairs=['LIFO / FIFO',
               'market / net realisable value',
               'write-down / reversal',
               'ceiling / floor'],
        nots=['Net realisable value is not the selling price. It is the '
              'selling price less the costs of completing and selling.',
              'An IFRS reversal is not a revaluation. Inventory can be '
              'written back up only to what it originally cost.'],
    ),

    objectives=[
        'Say which costing methods each framework permits.',
        'State the valuation rule each framework applies.',
        'Compute a carrying amount under both rules.',
        'Say whether a write-down may be reversed under each framework.',
        'Say what a company switching frameworks has to do about LIFO.',
    ],

    terms=[
        ('last-in, first-out',
         'A cost flow assumption under which the most recently purchased goods '
         'are treated as the first sold.',
         'الوارد أخيراً صادر أولاً',
         'Permitted under US GAAP and prohibited under IFRS. The single '
         'sharpest difference in this volume.'),
        ('net realisable value',
         'The estimated selling price less the costs of completion and sale.',
         'القيمة القابلة للتحقق',
         'The ceiling in the market rule and the whole of the rule under IFRS. '
         'Never the gross selling price.'),
        ('replacement cost',
         'What it would cost to buy or make the same item today.',
         'تكلفة الإحلال',
         'The starting point of the US GAAP market rule for LIFO inventories, '
         'bounded above and below.'),
        ('normal profit margin',
         'The margin a company ordinarily earns on an item, used to set the '
         'floor in the market rule.', 'هامش الربح العادي',
         'The floor exists so that a write-down does not create a profit on the '
         'later sale.'),
        ('write-down',
         'A reduction of inventory’s carrying amount to the lower figure the '
         'valuation rule requires.', 'تخفيض القيمة',
         'Charged to cost of goods sold or shown separately, under both '
         'frameworks.'),
        ('reversal',
         'Writing inventory back up when the circumstances that caused a '
         'write-down no longer apply.', 'عكس التخفيض',
         'Permitted under IFRS up to original cost, and prohibited outright '
         'under US GAAP.'),
    ],

    blocks=[
        ('scene', 'The same four items, valued twice', [
            'Volume 4 Handout 7 valued four of Northwind’s inventory items '
            'under the US GAAP market rule. All four cost %s.'
            % _d(L.row(0)['cost']),
            'Three differences separate the two frameworks here: which costing '
            'methods are allowed, which valuation rule applies, and whether a '
            'write-down can ever be undone.',
            'The first of the three is the most consequential. A company '
            'reporting under IFRS may not use last-in, first-out at all, which '
            'for a US company changing frameworks is not a disclosure matter '
            'but a tax bill.',
            'This handout works all three against the same four items.',
        ]),
        ('fig', 'buckets', 'The three differences, in one place',
         [('COSTING METHOD', GAAP,
           ['US GAAP permits LIFO',
            'IFRS prohibits it outright',
            'Both permit FIFO and weighted average']),
          ('VALUATION RULE', IFRS,
           ['US GAAP: net realisable value, or market for LIFO',
            'IFRS: net realisable value, always',
            'No ceiling and floor under IFRS']),
          ('REVERSAL', SLATE,
           ['US GAAP: a write-down is permanent',
            'IFRS: reversed up to original cost',
            'The new cost basis is the difference'])],
         'Three differences, and the first one is the reason the other two are '
         'ever reached by a US company at all.'),

        ('part', 'Part 1 · Which costing methods are allowed',
         'and what the prohibition costs'),

        ('task', 'Exercise 3A',
         'Say which costing methods each framework permits.',
         'Complete the right-hand column.',
         ['Volume 4 Handout 4, on the cost flow assumptions.'],
         ['Four of the five rows are identical under both frameworks.',
          'The row that differs is the one that assumes the newest goods are '
          'sold first.',
          'The last row is about using different methods for different kinds of '
          'inventory, and both frameworks allow it where the kinds really '
          'differ.']),
        ('table', _METH, _meth(blank=True), GAAP, _METW),
        ('answers', 5),
        ('fig', 'matrix', 'Why the prohibition is expensive for a US company',
         ['Under US GAAP with LIFO', 'On conversion to IFRS'],
         ['Inventory carried at', 'The tax consequence'],
         [['Old, low costs, so inventory is understated and tax deferred',
           'The deferral continues while LIFO is used'],
          ['FIFO or weighted average, so the old low costs come back in',
           'The accumulated deferral is recaptured and becomes taxable']],
         'This is why the LIFO prohibition is the difference US companies '
         'object to most. It is not a presentational change at all.'),

        ('part', 'Part 2 · Which valuation rule applies',
         'net realisable value, or market'),

        ('prose', 'IFRS values all inventory at the lower of cost and net '
                  'realisable value. US GAAP does the same, except for '
                  'inventory costed on LIFO or the retail method, where the '
                  'lower of cost and market applies and market is replacement '
                  'cost bounded by a ceiling and a floor.', 'R2'),

        ('task', 'Exercise 3B',
         'Say what each rule compares cost with, and why the bounds exist.',
         'Read and complete. Write one word in each space.',
         ['Volume 4 Handout 7, which worked the market rule.',
          'The paragraph above.'],
         ['The ceiling is the most a company could get for the item after '
          'selling costs, and it has a name of its own.',
          'The floor is that ceiling less the normal profit margin, which is '
          'the margin the company ordinarily earns on the item.',
          'The floor is the ceiling less the margin the company normally earns. '
          'Ask what would happen on the later sale without it.',
          'The last blank is what IFRS does with the two bounds, and the answer '
          'is that it has neither.']),
        ('fill', 'R2',
         ['Both frameworks compare cost with a lower figure, and they differ in '
          'what that figure is. Under IFRS it is always net {realisable} '
          'value: the selling price less the costs of completing and selling '
          'the item.',
          'Under US GAAP the same rule applies, unless the inventory is costed '
          'on LIFO or the retail method. There the comparison is with market, '
          'which starts at {replacement} cost and is then bounded.',
          'The ceiling is net realisable value, because no company would carry '
          'an item above what it can get for it. The floor is that ceiling less '
          'the normal profit {margin}, so that writing an item down does not '
          'manufacture a profit on the eventual sale.',
          'IFRS has {neither} bound, because it never uses replacement cost. '
          'One comparison, one figure, and a good deal less arithmetic.'],
         {'realisable': ('Selling price less the costs of selling.', ''),
          'replacement': ('What it would cost to buy today.', ''),
          'margin': ('Otherwise the write-down creates tomorrow’s profit.',
                     ''),
          'neither': ('No replacement cost, so no bounds needed.',
                      'Students apply the ceiling and floor under IFRS. There '
                      'is nothing for them to bound.')},
         ['selling', 'historical', 'both']),
        ('fig', 'formula', 'The US GAAP market figure, bounded',
         [('Ceiling', 'Net realisable value', IFRS),
          ('≥', '', None),
          ('Market', 'Replacement cost, if it falls between', SLATE),
          ('≥', '', None),
          ('Floor', 'Net realisable value less the normal margin', GAAP)],
         'Three figures to compute before the comparison with cost even '
         'begins. Under IFRS the first of the three is the whole rule.'),

        ('part', 'Part 3 · The four items, both ways',
         'where the rules disagree'),

        ('task', 'Exercise 3C',
         'Value each of four items under both rules.',
         'Complete both right-hand columns.',
         ['Exercise 3B, and Volume 4 Handout 7 for the market computations.'],
         ['The market column is the work you did in Volume 4: the bounded '
          'replacement cost, compared with the %s cost.'
          % _d(L.row(0)['cost']),
          'The net realisable value column is simpler. Compare cost with the '
          'ceiling alone and take the lower.',
          'Two of the four items come out the same under both rules, and two do '
          'not. Notice which two.']),
        ('table', _FOURH, _four(blank=True), IFRS, _FOURW),
        ('answers', 8),
        ('fig', 'ranked', 'The obsolete sensor, valued three ways',
         [('Cost', L.row(1)['cost'], _d(L.row(1)['cost']), BOTH),
          ('Under IFRS — net realisable value', L.row(1)['lcnrv'],
           _d(L.row(1)['lcnrv']), IFRS),
          ('Under US GAAP with LIFO — the floor', L.row(1)['lcm'],
           _d(L.row(1)['lcm']), GAAP)],
         'Replacement cost had fallen to %s, below the floor of %s, so the '
         'market rule stops at the floor. IFRS never looks at replacement cost '
         'and carries the item at %s.'
         % (_d(L.row(1)['repl']), _d(L.row(1)['floor']),
            _d(L.row(1)['lcnrv'])),
         'Carrying amount per unit'),

        ('part', 'Part 4 · Undoing a write-down',
         'the third difference'),

        ('task', 'Exercise 3D',
         'Say whether a write-down may be reversed under each framework.',
         'Read and complete. Write one word in each space.',
         ['Exercise 3C.'],
         ['Suppose the obsolete sensor finds a buyer next year and its value '
          'recovers.',
          'Under one framework the written-down figure has become the item’s '
          'cost for all later purposes. Ask what that means for a recovery.',
          'The last blank is the limit on an IFRS reversal, and it is not fair '
          'value.']),
        ('fill', 'R2',
         ['Suppose the sensor written down to %s recovers its value next year. '
          'Under US GAAP nothing happens: the write-down established a new '
          'cost {basis}, and the item can never be carried above it.'
          % _d(L.row(1)['lcnrv']),
          'Under IFRS the write-down is {reversed}. The reason for it no longer '
          'applies, so the carrying amount is restored and the credit goes '
          'against cost of goods sold in the year of recovery.',
          'The reversal is capped. Inventory may be written back up only as far '
          'as its original {cost} of %s, never above it, because the IFRS rule '
          'remains the lower of cost and net realisable value.'
          % _d(L.row(1)['cost']),
          'So two companies holding identical goods can carry them at different '
          'amounts for years, and the one reporting under US GAAP will be the '
          '{lower} of the two.'],
         {'basis': ('A new cost, permanently.', ''),
          'reversed': ('The reason has gone, so the write-down goes.', ''),
          'cost': ('The cap is cost, not fair value.',
                   'Students reverse up to net realisable value. The rule is '
                   'still the lower of the two figures, so cost is the '
                   'ceiling.'),
          'lower': ('A write-down that cannot be undone.', '')},
         ['figure', 'disclosed', 'higher']),
        ('fig', 'timeline', 'One sensor, two frameworks, three years',
         [('Year 1', 'Written down from %s to %s under both frameworks'
           % (_d(L.row(1)['cost']), _d(L.row(1)['lcnrv'])), BOTH),
          ('Year 2, value recovers', 'IFRS writes it back to %s. US GAAP '
                                     'leaves it at %s.'
           % (_d(L.row(1)['cost']), _d(L.row(1)['lcnrv'])), IFRS),
          ('Year 3, sold', 'The same cash is received, and the two '
                           'frameworks have reported it in different years',
           GAAP)],
         'Over the three years both report the same total. The IFRS company '
         'reports the recovery when it happens and the US GAAP company reports '
         'it as a larger margin on the sale.'),

        ('part', 'Part 5 · All three at once',
         'the comparison the exam asks for'),

        ('task', 'Exercise 3E',
         'Summarise all three inventory differences.',
         'Complete both columns.',
         ['Exercises 3A, 3B and 3D.'],
         ['The first row is a single word in each column.',
          'The second row has one framework with a condition attached and one '
          'without.',
          'The third row needs a qualification in one column, because the '
          'reversal is capped.']),
        ('table', _THREEH, _three(blank=True), SLATE, _THREEW),
        ('answers', 6),
        ('fig', 'fork', 'Which rule applies to this inventory?',
         [('Does the company report under IFRS?',
           'YES → the lower of cost and net realisable value, and reversals '
           'are permitted', IFRS),
          ('Is US GAAP inventory costed on LIFO or the retail method?',
           'YES → the lower of cost and market, with the ceiling and floor',
           GAAP),
          ('US GAAP, costed on FIFO or weighted average?',
           'The lower of cost and net realisable value, and no reversals',
           SLATE)]),

        ('watch', 'The US GAAP market rule survives only for LIFO and retail '
                  'inventories. A question that applies the ceiling and floor '
                  'to a FIFO inventory under US GAAP has been set from an old '
                  'textbook, and the answer it wants is the net realisable '
                  'value one.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Which inventory costing method is prohibited under IFRS?',
         ['First-in, first-out', 'Last-in, first-out',
          'Weighted average cost', 'Specific identification'],
         1, 'Level A',
         'LIFO is prohibited under IFRS and permitted under US GAAP. The other '
         'three are permitted under both, which makes this the one difference '
         'worth memorising outright.'),

        ('mcq', 'Under IFRS, inventory is carried at:',
         ['Cost', 'The lower of cost and net realisable value',
          'The lower of cost and market', 'Net realisable value'],
         1, 'Level A',
         'One comparison, with no ceiling and floor. (C) is the US GAAP rule '
         'for LIFO inventories, and the two wordings are a syllable apart by '
         'design.'),

        ('mcq', 'An item costs %s, has a net realisable value of %s and a '
                'replacement cost of %s. Under IFRS it is carried at:'
         % (_d(L.row(0)['cost']), _d(L.row(0)['ceiling']),
            _d(L.row(0)['repl'])),
         [_d(L.row(0)['repl']), _d(L.row(0)['ceiling']),
          _d(L.row(0)['cost']), _d(L.row(0)['floor'])],
         1, 'Level B',
         'IFRS compares cost with net realisable value alone: %s against %s, '
         'so %s. (A) is the replacement cost, which IFRS never looks at.'
         % (_d(L.row(0)['cost']), _d(L.row(0)['ceiling']),
            _d(L.row(0)['ceiling']))),

        ('mcq', 'The same item under US GAAP, with the inventory costed on '
                'LIFO, is carried at:',
         [_d(L.row(0)['ceiling']), _d(L.row(0)['repl']),
          _d(L.row(0)['cost']), _d(L.row(0)['floor'])],
         1, 'Level B',
         'Market is replacement cost of %s, which falls between the floor of %s '
         'and the ceiling of %s, so it stands and is below the %s cost. The '
         'same item is %s under IFRS, which is the whole point of the pair.'
         % (_d(L.row(0)['repl']), _d(L.row(0)['floor']),
            _d(L.row(0)['ceiling']), _d(L.row(0)['cost']),
            _d(L.row(0)['ceiling']))),

        ('mcq', 'Inventory written down in one year recovers its value in the '
                'next. Under US GAAP the recovery is:',
         ['Recognised, up to original cost',
          'Not recognised, because the write-down created a new cost basis',
          'Recognised in other comprehensive income',
          'Recognised only on sale of the inventory'],
         1, 'Level B',
         'A US GAAP write-down is permanent. (D) is close enough to be '
         'tempting: the recovery does affect the margin on the eventual sale, '
         'and that is not a recognition of the recovery.'),

        ('mcq', 'Under IFRS, a reversal of an inventory write-down is limited '
                'to:',
         ['Fair value', 'The inventory’s original cost',
          'Net realisable value at the reversal date',
          'The amount of the original write-down plus inflation'],
         1, 'Level C',
         'The rule is still the lower of cost and net realisable value, so cost '
         'caps the reversal. (C) is the trap: a recovered net realisable value '
         'above cost does not let inventory be carried above cost.'),

        ('mcq', 'A US company using LIFO converts to IFRS. The principal '
                'consequence is:',
         ['A disclosure change only',
          'It must abandon LIFO, and the accumulated tax deferral is '
          'recaptured',
          'It may keep LIFO for tax and IFRS for reporting, with no effect',
          'Its inventory is revalued to fair value'],
         1, 'Level C',
         'LIFO is unavailable under IFRS, and in jurisdictions requiring '
         'conformity between the books and the return the deferred tax benefit '
         'falls in. (A) is the reason this difference is the most contested in '
         'the whole of ff(iii).'),

        ('tip', 'Learn the three in order: LIFO is out under IFRS, the rule is '
                'net realisable value under IFRS, and IFRS reverses write-downs '
                'up to cost. Then remember that US GAAP now uses net realisable '
                'value too, except for LIFO and retail, where the old ceiling '
                'and floor survive.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3C · the four items, both ways'),
        ('table', _FOURH, _four(), IFRS, _FOURW),
        ('h3', 'Exercise 3A · the costing methods'),
        ('table', _METH, _meth(), GAAP, _METW),
        ('h3', 'Exercise 3E · the three differences'),
        ('table', _THREEH, _three(), SLATE, _THREEW),
        ('prose', 'Items A and B disagree between the two columns and items C '
                  'and D agree. A and B are the cases where replacement cost '
                  'has fallen below net realisable value, which is the only '
                  'situation in which the market rule bites, and the whole of '
                  'the first difference lives there.', 'R2'),
        ('prose', 'Item D is worth a second look: replacement cost of %s is '
                  'above the %s cost, so both rules stop at cost. A rising '
                  'replacement cost never writes inventory up under either '
                  'framework.'
                  % (_d(L.row(3)['repl']), _d(L.row(3)['cost'])), 'R2'),
    ],
)
