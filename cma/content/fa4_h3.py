# -*- coding: utf-8 -*-
"""Volume 4, Handout 3 — The LIFO Reserve and the LIFO Liquidation.

Covers the second half of A.2(d): the consequences of the LIFO assumption,
including the reserve that makes LIFO companies comparable with others and
the liquidation that reverses the policy's effect in a single year.
"""
from fadata import N, I, Y, PY
from data import money, num

FIFO, LIFO, WA, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_Y2 = '20X5'

_CONVH = ['As reported, LIFO', 'Adjustment', 'Restated to FIFO']
_CONVW = [34, 32, 34]

_LIQH = ['%s · LIFO cost of goods sold' % _Y2, 'Units', 'Cost per unit',
         'Total']
_LIQW = [40, 16, 20, 24]


def _liq(blank=False):
    def c(v):
        return '' if blank else v
    order = I._y2_order()
    rows = [['This year’s purchase, newest cost first', num(order[0][0]),
             '$%d' % order[0][1], c(money(order[0][0] * order[0][1]))]]
    need = I.y2_sold_units - order[0][0]
    for u, cst in order[1:]:
        take = min(need, u)
        if take <= 0:
            break
        rows.append(['Then into an old layer at $%d' % cst, num(take),
                     '$%d' % cst, c(money(take * cst))])
        need -= take
    rows.append(['Cost of goods sold', num(I.y2_sold_units), '',
                 c(money(I.y2_lifo_cogs))])
    return rows


HANDOUT = dict(
    n=3,
    title='The LIFO Reserve and the LIFO Liquidation',
    subtitle='LIFO holds a company’s balance sheet decades out of date, and '
             'one bad year can release all of it into income at once.',
    register='R2 throughout',

    lang=dict(
        register='R2 textbook English. The ideas here connect two years at a '
                 'time, so the sentences carry more than one clause.',
        collocations=['disclose the LIFO reserve',
                      'restate inventory to a FIFO basis',
                      'dip into an old layer', 'liquidate a LIFO layer',
                      'defer tax by using LIFO',
                      'compare companies on the same basis'],
        pairs=['reserve / allowance', 'liquidation / sale',
               'reported figure / restated figure',
               'tax deferred / tax saved'],
        nots=['A LIFO reserve is not money. It is the gap between two '
              'measurements of the same inventory.',
              'LIFO defers tax; it does not avoid it. A liquidation collects the '
              'deferral back, often at the worst moment.'],
    ),

    objectives=[
        'Compute the LIFO reserve and say what it measures.',
        'Restate a LIFO company’s inventory and income to a FIFO basis.',
        'Explain why LIFO defers tax, and why the deferral is not permanent.',
        'Recognise a LIFO liquidation and compute the effect on income.',
        'State the conformity rule and why it exists.',
    ],

    terms=[
        ('LIFO reserve',
         'The difference between inventory measured on a LIFO basis and the same '
         'inventory measured on a FIFO basis.', 'احتياطي الوارد أخيراً صادر أولاً',
         'Disclosed precisely so that a reader can undo the policy and compare the '
         'company with a FIFO one.'),
        ('LIFO liquidation',
         'A reduction in inventory quantities that forces old, low-cost layers '
         'into cost of goods sold.', 'تصفية طبقات المخزون',
         'It inflates reported profit and brings forward the tax the policy had '
         'been deferring.'),
        ('LIFO conformity rule',
         'A US tax rule: a company using LIFO for tax must also use it in its '
         'financial statements.', 'قاعدة التوافق',
         'The reason LIFO exists at all in published accounts. Without it, '
         'companies would use LIFO for tax and FIFO for reporting.'),
        ('inventory pool',
         'A group of similar items treated as one for LIFO purposes.',
         'مجمع المخزون',
         'Pooling reduces the chance of a liquidation, because a fall in one item '
         'can be offset by a rise in another.'),
        ('tax deferral',
         'Postponing a tax payment to a later year rather than avoiding it.',
         'تأجيل الضريبة',
         'Worth real money, because cash held now is worth more than cash held '
         'later. It is not a saving.'),
    ],

    blocks=[
        ('scene', 'The %s that is not on the balance sheet'
                  % money(I.lifo_reserve), [
            'Handout 2 produced two closing inventory figures for the same %s '
            'units: %s under FIFO and %s under LIFO.'
            % (num(I.closing_units), money(I.fifo_closing),
               money(I.lifo_closing)),
            'The gap between them is %s. Nothing about the goods differs — '
            'the same controllers are on the same shelves — and the gap is '
            'entirely the consequence of an accounting choice.'
            % money(I.lifo_reserve),
            'That gap has a name, it is disclosed, and this handout is about what '
            'it does. It makes a LIFO company comparable with a FIFO one, it '
            'measures a tax deferral, and in a bad year it comes back all at once.',
        ]),
        ('fig', 'scale',
         'WHAT THE BALANCE SHEET SAYS',
         ['LIFO closing inventory %s' % money(I.lifo_closing),
          'Made of %s units at $%d' % (num(I.layers[0][1]), I.layers[0][2]),
          'and %s units at $%d'
          % (num(I.closing_units - I.layers[0][1]), I.layers[1][2]),
          'The oldest costs in the pool'],
         'WHAT THE GOODS WOULD COST TODAY',
         ['FIFO closing inventory %s' % money(I.fifo_closing),
          'Made of %s units at $%d' % (num(I.layers[3][1]), I.layers[3][2]),
          'and %s units at $%d'
          % (num(I.closing_units - I.layers[3][1]), I.layers[2][2]),
          'The newest costs in the pool']),

        ('part', 'Part 1 · The reserve',
         'the gap, and why it is disclosed'),

        ('task', 'Exercise 3A',
         'Compute the reserve and say what a reader does with it.',
         'Read and complete. Write one word in each space.',
         ['Handout 2, for both closing inventory figures.'],
         ['Blank 1 is a subtraction you can do from Handout 2’s answers.',
          'Blank 3 is what a reader adds the reserve to in order to compare the '
          'company with a FIFO one.',
          'The last blank is the word that explains why the disclosure is required '
          'rather than optional.']),
        ('fill', 'R2',
         ['Northwind’s inventory would be %s on a FIFO basis and is %s on a '
          'LIFO basis. The difference of {%s} is the LIFO reserve.'
          % (money(I.fifo_closing), money(I.lifo_closing),
             money(I.lifo_reserve)),
          'It is not a fund and nothing is set aside. It is the amount by which '
          'LIFO holds the balance sheet below what the same goods would be carried '
          'at under the other assumption, and in a company that has used LIFO for '
          'thirty years it can be larger than the reported inventory {itself}.',
          'A reader comparing Northwind with a FIFO competitor adds the reserve to '
          'reported inventory, which restates it to a {FIFO} basis, and adds the '
          'after-tax movement in the reserve to reported income.',
          'That is why the disclosure is required. Without it the two companies '
          'could not be compared at all, and {comparability} is exactly what the '
          'disclosure exists to protect.'],
         {money(I.lifo_reserve): ('%s − %s.' % (money(I.fifo_closing),
                                                     money(I.lifo_closing)), ''),
          'itself': ('Decades of price rises accumulate in it.', ''),
          'FIFO': ('Add the reserve to get back to FIFO.',
                   'Students subtract the reserve, which moves the comparison in '
                   'the wrong direction.'),
          'comparability': ('The reason the disclosure is required.', '')},
         ['cash', 'LIFO', 'prudence']),
        ('fig', 'bridge',
         'LIFO inventory, as reported', I.lifo_closing,
         [('Add the LIFO reserve, as disclosed', I.lifo_reserve)],
         'Inventory restated to a FIFO basis', I.fifo_closing),

        ('task', 'Exercise 3B',
         'Restate a LIFO company to a FIFO basis.',
         'Complete the table. Both lines are restated with the same reserve.',
         ['Exercise 3A'],
         ['Inventory is restated by adding the whole reserve.',
          'Cost of goods sold moves the other way, because the pool is fixed.',
          'The tax column uses the %s rate from the data.'
          % ('%d%%' % (I.tax_rate * 100))]),
        ('table', _CONVH,
         [['Closing inventory %s' % money(I.lifo_closing),
           'Add the reserve of %s' % money(I.lifo_reserve), '______________'],
          ['Cost of goods sold %s' % money(I.cogs(I.lifo_closing)),
           'Deduct the reserve of %s' % money(I.lifo_reserve), '______________'],
          ['Gross margin %s' % money(I.gross_margin(I.lifo_closing)),
           'Add the reserve of %s' % money(I.lifo_reserve), '______________'],
          ['Income tax at %d%%' % (I.tax_rate * 100),
           'Add %s' % money(I.lifo_reserve * I.tax_rate), '______________']],
         FIFO, _CONVW),
        ('answers', 4),
        ('fig', 'ranked', 'The same company, reported two ways',
         [('Gross margin reported under LIFO',
           I.gross_margin(I.lifo_closing),
           money(I.gross_margin(I.lifo_closing)), LIFO),
          ('Gross margin restated to FIFO', I.gross_margin(I.fifo_closing),
           money(I.gross_margin(I.fifo_closing)), FIFO),
          ('The gap — the LIFO reserve', I.lifo_reserve,
           money(I.lifo_reserve), SLATE)],
         'Identical goods, identical sales, identical prices paid. The gap is the '
         'accounting policy and nothing else.'),

        ('part', 'Part 2 · Why a company chooses LIFO',
         'and what it is really buying'),

        ('prose', 'LIFO charges the newest and dearest costs against revenue, so '
                  'in a period of rising prices it reports a lower profit. A '
                  'company that reports a lower profit pays less tax, and that is '
                  'the whole of the attraction.', 'R2'),
        ('prose', 'The tax is not avoided. The goods will eventually be sold, and '
                  'when the old cheap layers finally reach cost of goods sold the '
                  'tax arrives with them. What LIFO buys is time, and time has a '
                  'value, which is why the choice is worth making.', 'R2'),

        ('task', 'Exercise 3C',
         'Compute what LIFO saves this year, and say what it has actually bought.',
         'Read and complete.',
         ['Exercise 3B, and the two paragraphs above.'],
         ['Blank 1 is the difference between the two tax charges, and you have '
          'both from Exercise 3B.',
          'Blank 3 is the name of the US tax rule that forces a company using LIFO '
          'for tax to use it in its accounts as well.',
          'The last blank is what the company has bought, and it is not a '
          'saving.']),
        ('fill', 'R2',
         ['Under LIFO Northwind reports a gross margin of %s and under FIFO it '
          'would report %s. At %d%% the tax charge differs by {%s}, and that is '
          'the cash Northwind keeps this year by having chosen LIFO.'
          % (money(I.gross_margin(I.lifo_closing)),
             money(I.gross_margin(I.fifo_closing)), I.tax_rate * 100,
             money(I.lifo_reserve * I.tax_rate)),
          'There is a condition attached, and it is the reason LIFO appears in '
          'published accounts at all. The US {conformity} rule says that a company '
          'using LIFO for tax must use it in its financial statements too, so it '
          'cannot report a high profit to shareholders and a low one to the tax '
          'authority.',
          'The company therefore buys its tax position with its reported {profit}. '
          'A lower reported margin is the price of the deferral, and a board has '
          'to decide whether that trade is worth making.',
          'And it is a deferral rather than a saving. The tax has been postponed '
          'to whichever year the old layers are finally sold, which is the subject '
          'of Part 3.'],
         {money(I.lifo_reserve * I.tax_rate): ('The reserve at the tax rate.', ''),
          'conformity': ('LIFO for tax means LIFO for reporting.',
                         'Students assume a company can have both. The conformity '
                         'rule is precisely what stops it.'),
          'profit': ('Reported margin is what is being traded away.', '')},
         ['matching', 'revenue', 'saving']),
        ('fig', 'matrix', 'What LIFO gives and what it costs',
         ['Reported gross margin', 'Tax charge this year',
          'Inventory on the balance sheet', 'Tax over the life of the inventory'],
         ['Under LIFO', 'Under FIFO'],
         [[money(I.gross_margin(I.lifo_closing)),
           money(I.gross_margin(I.fifo_closing))],
          [money(I.tax(I.lifo_closing)), money(I.tax(I.fifo_closing))],
          [money(I.lifo_closing), money(I.fifo_closing)],
          ['The same', 'The same']],
         'Only the last row is identical, and it is the one that matters most: the '
         'policy moves tax between years and never changes the total.'),

        ('part', 'Part 3 · The liquidation',
         'when the old layers finally come out'),

        ('task', 'Exercise 3D',
         'Compute cost of goods sold in a year when quantities fall.',
         'Complete the schedule. Work from the newest cost down into the old '
         'layers.',
         ['Exercise 3C'],
         ['In %s Northwind buys only %s units and sells %s, so quantities fall by '
          '%s units.' % (_Y2, num(I.y2_purchased_units), num(I.y2_sold_units),
                         num(I.y2_liquidation_units)),
          'LIFO charges the newest cost first: this year’s purchase at $%d.'
          % I.y2_purchased_cost,
          'Once that is used up, the next costs are the old layers Handout 2 left '
          'behind, and they are very much cheaper.']),
        ('table', _LIQH, _liq(blank=True), LIFO, _LIQW),
        ('answers', 4),
        ('fill', 'R2',
         ['Northwind sold %s units in %s and replaced only %s of them. The '
          'remaining %s units had to come out of the layers carried forward from '
          '%s, and those layers are priced at $%d and $%d.'
          % (num(I.y2_sold_units), _Y2, num(I.y2_purchased_units),
             num(I.y2_liquidation_units), Y, I.layers[1][2], I.layers[0][2]),
          'Had Northwind replaced the units it sold, those %s would have cost $%d '
          'each. Instead they cost far less, so cost of goods sold is lower and '
          'reported profit is {higher} by %s.'
          % (num(I.y2_liquidation_units), I.y2_purchased_cost,
             money(I.y2_liquidation_effect)),
          'That increase is a LIFO {liquidation}, and it has nothing to do with '
          'trading well. It arises because quantities fell, which is more often a '
          'sign of difficulty than of success.',
          'The tax deferred in earlier years arrives with it. A company having a '
          'bad enough year to run its inventory down is therefore handed a higher '
          'reported profit and a larger tax bill, at precisely the moment it can '
          'least {afford} either.'],
         {'higher': ('Old cheap costs reach cost of sales.', ''),
          'liquidation': ('Quantities fell and the layers came out.', ''),
          'afford': ('The worst possible timing, structurally.',
                     'Students read a liquidation as good news because profit '
                     'rose. It is usually the opposite.')},
         ['lower', 'reserve', 'welcome']),
        ('fig', 'timeline', 'The deferral, and the year it comes back',
         [('%s' % Y, 'LIFO defers %s of tax'
           % money(I.lifo_reserve * I.tax_rate), LIFO),
          ('Quantities hold', 'the deferral continues, year after year', SLATE),
          ('%s — quantities fall' % _Y2,
           'old layers reach cost of sales; profit up %s'
           % money(I.y2_liquidation_effect), RUST)],
         'The policy defers tax for as long as inventory quantities hold. The year '
         'they fall is the year the deferral is collected.'),

        ('task', 'Exercise 3E',
         'Say how a company reduces the risk of a liquidation, and what it must '
         'disclose when one happens.',
         'Sort each statement into the column that says whether it is true.',
         ['Exercise 3D'],
         ['Putting similar items into one inventory pool means a fall in one '
          'can be offset by a rise in another.',
          'A liquidation changes reported profit materially, so a reader has to be '
          'told.',
          'Two of these statements describe a liquidation as something it is '
          'not.']),
        ('sortgrid',
         ['Statement about LIFO liquidations', 'TRUE', 'FALSE'],
         ['Grouping similar items into one inventory pool reduces the risk of a '
          'liquidation',
          'A liquidation means the company traded unusually well',
          'The effect on income must be disclosed when it is material',
          'A liquidation brings forward tax that LIFO had deferred',
          'A liquidation happens whenever prices fall',
          'A liquidation arises because inventory quantities fell'],
         ['TRUE', 'FALSE', 'TRUE', 'TRUE', 'FALSE', 'TRUE'],
         'A liquidation is about quantities, not prices. Prices decide the size of '
         'the effect; quantities decide whether there is one at all.'),
        ('fig', 'fork', 'What a reader should do with a profit increase',
         [('Did inventory quantities fall during the year?',
           'YES → check the liquidation disclosure before believing the '
           'margin', RUST),
          ('Did quantities hold or rise?',
           'NO LIQUIDATION → the margin reflects trading', FIFO),
          ('Why does it matter?',
           'A liquidation can turn a bad year into a reported record', SLATE)]),

        ('watch', 'A liquidation is measured in units, not dollars. Read the stem '
                  'for whether quantities fell. If they did not, there is no '
                  'liquidation however violently prices moved.'),

        ('part', 'Part 4 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A company reports LIFO inventory of %s and discloses a LIFO '
                'reserve of %s. Inventory restated to a FIFO basis is:'
                % (money(I.lifo_closing), money(I.lifo_reserve)),
         [money(I.lifo_closing - I.lifo_reserve), money(I.fifo_closing),
          money(I.lifo_reserve), money(I.lifo_closing)],
         1, 'Level B',
         'The reserve is added back: %s + %s = %s. (A) subtracts it, which moves '
         'the comparison the wrong way and is the most common error in this '
         'calculation.'
         % (money(I.lifo_closing), money(I.lifo_reserve),
            money(I.fifo_closing))),

        ('mcq', 'The LIFO reserve is best described as:',
         ['A fund of cash set aside to replace inventory',
          'The difference between inventory measured under LIFO and under FIFO',
          'The tax saved by using LIFO',
          'A liability for future inventory purchases'],
         1, 'Level A',
         'It is the gap between two measurements of the same goods. (A) is the '
         'usual misconception — no money is involved. (C) is the reserve '
         'multiplied by the tax rate, a different figure. (D) invents an '
         'obligation.'),

        ('mcq', 'In a period of rising prices, a company using LIFO rather than '
                'FIFO will report:',
         ['Higher net income and pay higher tax',
          'Lower net income and pay lower tax in the current year',
          'Lower net income and the same tax',
          'Higher inventory on the balance sheet'],
         1, 'Level B',
         'LIFO charges the newest and dearest costs against revenue, so profit and '
         'the current tax charge both fall. (D) is backwards: LIFO leaves the '
         'oldest and cheapest costs in inventory.'),

        ('mcq', 'The LIFO conformity rule requires that:',
         ['LIFO be applied consistently from year to year',
          'A company using LIFO for tax purposes also use it in its financial '
          'statements',
          'All companies in an industry use the same cost flow assumption',
          'The LIFO reserve be disclosed'],
         1, 'Level B',
         'Conformity ties the tax election to the reporting treatment, which is '
         'why a company cannot take the tax benefit and still report a FIFO '
         'profit. (A) describes consistency and (D) a disclosure requirement '
         '— both real rules, neither of them this one.'),

        ('mcq', 'A LIFO liquidation occurs when:',
         ['Prices fall during the period',
          'Inventory quantities decline, so older low-cost layers enter cost of '
          'goods sold',
          'A company changes from LIFO to FIFO',
          'The LIFO reserve increases'],
         1, 'Level B',
         'Quantities decide whether a liquidation happens; prices only decide how '
         'large its effect is. (A) is the most commonly chosen wrong answer. (C) '
         'is a change in accounting principle, a different topic entirely.'),

        ('mcq', 'In %s Northwind sells %s units and purchases only %s. The %s '
                'units drawn from old layers would have cost $%d each to replace '
                'but carried much older costs. The effect on reported pre-tax '
                'income is:'
                % (_Y2, num(I.y2_sold_units), num(I.y2_purchased_units),
                   num(I.y2_liquidation_units), I.y2_purchased_cost),
         ['A decrease of %s' % money(I.y2_liquidation_effect),
          'An increase of %s' % money(I.y2_liquidation_effect),
          'No effect, because the units were already in inventory',
          'An increase equal to the whole LIFO reserve'],
         1, 'Level C',
         'Old cheap costs reach cost of goods sold instead of current ones, so '
         'cost of sales falls and profit rises by %s. (C) misses the point '
         'entirely: it is precisely because the units were old that the effect '
         'arises.' % money(I.y2_liquidation_effect)),

        ('mcq', 'Why does grouping similar inventory items into pools reduce the '
                'risk of a LIFO liquidation?',
         ['Because pools are measured at current cost',
          'Because a decline in the quantity of one item can be offset by an '
          'increase in another within the same pool',
          'Because pooling is required by the conformity rule',
          'Because pools eliminate the LIFO reserve'],
         1, 'Level C',
         'A liquidation is triggered by a fall in the quantity of the pool, so '
         'offsetting movements inside it prevent one. (D) is wrong in the other '
         'direction — pooling preserves the reserve by preventing the layers '
         'from being consumed.'),

        ('tip', 'Any question that gives you a LIFO reserve is asking you to '
                'restate something. Write down which direction before you compute: '
                'add it to inventory, deduct it from cost of goods sold, add the '
                'after-tax movement to income.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3B · the completed restatement'),
        ('table', _CONVH,
         [['Closing inventory %s' % money(I.lifo_closing),
           'Add the reserve of %s' % money(I.lifo_reserve),
           money(I.fifo_closing)],
          ['Cost of goods sold %s' % money(I.cogs(I.lifo_closing)),
           'Deduct the reserve of %s' % money(I.lifo_reserve),
           money(I.cogs(I.fifo_closing))],
          ['Gross margin %s' % money(I.gross_margin(I.lifo_closing)),
           'Add the reserve of %s' % money(I.lifo_reserve),
           money(I.gross_margin(I.fifo_closing))],
          ['Income tax at %d%%' % (I.tax_rate * 100),
           'Add %s' % money(I.lifo_reserve * I.tax_rate),
           money(I.tax(I.fifo_closing))]],
         FIFO, _CONVW),
        ('h3', 'Exercise 3D · the completed liquidation schedule'),
        ('table', _LIQH, _liq(), LIFO, _LIQW),
        ('bullets', [
            'The LIFO reserve at 31 December %s is %s.' % (Y,
                                                           money(I.lifo_reserve)),
            'It represents %s of tax deferred at a %d%% rate.'
            % (money(I.lifo_reserve * I.tax_rate), I.tax_rate * 100),
            'The %s liquidation of %s units raises reported pre-tax income by %s '
            'and collects part of that deferral.'
            % (_Y2, num(I.y2_liquidation_units),
               money(I.y2_liquidation_effect)),
        ]),
    ],
)
