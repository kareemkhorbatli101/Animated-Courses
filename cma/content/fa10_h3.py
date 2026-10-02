# -*- coding: utf-8 -*-
"""Volume 10, Handout 3 — What Gets Eliminated.

Covers A.1(k): the intercompany balances, transactions and profits that have
to be removed before a group can report as one entity.
"""
from fadata import N, CO, Y
from data import money, num

PAR, SUB, NCI, SLATE = '1F6F8F', '2E7D5B', 'A24B6B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_sold_on = CO.intercompany_sales - CO.still_in_inventory

_ELIMH = ['What is eliminated', 'Amount', 'Why']
_ELIMW = [36, 22, 42]


def _elim(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['The investment in %s against its equity' % CO.sub,
         money(CO.price), c('The group cannot hold shares in itself')],
        ['Intercompany sales and the matching cost of sales',
         money(CO.intercompany_sales),
         c('No sale was made outside the group')],
        ['The receivable and the payable between them',
         money(CO.intercompany_balance),
         c('The group cannot owe itself money')],
        ['Unrealised profit in inventory still held',
         money(CO.unrealised_profit),
         c('%s of the goods have not been sold on'
           % money(CO.still_in_inventory))],
    ]


_PROFH = ['The intercompany sale of %s' % money(CO.intercompany_sales),
          'Amount']
_PROFW = [70, 30]


def _prof(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Sales recorded by the selling company',
         money(CO.intercompany_sales)],
        ['Cost of those goods to the selling company',
         money(CO.intercompany_cost)],
        ['Profit recorded on the sale', c(money(CO.intercompany_sales
                                                - CO.intercompany_cost))],
        ['Gross margin rate', c(_pc(CO.margin_rate))],
        ['Goods still held by the buying company at the year end',
         money(CO.still_in_inventory)],
        ['Unrealised profit to be eliminated',
         c(money(CO.unrealised_profit))],
    ]


_EFFECTH = ['Consolidated figure', 'Before eliminating', 'After eliminating']
_EFFECTW = [38, 31, 31]


def _effect(blank=False):
    def c(v):
        return '' if blank else v
    rev = N.sales + 900_000
    return [
        ['Revenue', money(rev), c(money(rev - CO.intercompany_sales))],
        ['Inventory', money(N.inventory + 300_000),
         c(money(N.inventory + 300_000 - CO.unrealised_profit))],
        ['Receivables', money(N.ar_net + 200_000),
         c(money(N.ar_net + 200_000 - CO.intercompany_balance))],
        ['Payables', money(N.ap + 180_000),
         c(money(N.ap + 180_000 - CO.intercompany_balance))],
    ]


HANDOUT = dict(
    n=3,
    title='What Gets Eliminated',
    subtitle='%s sells %s of goods to Northwind. Until those goods reach a real '
             'customer the group has sold nothing, and %s of profit has to come '
             'back out.' % (CO.sub, money(CO.intercompany_sales),
                            money(CO.unrealised_profit)),
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the four eliminations, R3 for the allocation between '
                 'the parent and the non-controlling interest.',
        collocations=['eliminate an intercompany balance',
                      'remove unrealised profit from inventory',
                      'offset the investment against equity',
                      'sell goods on to a third party',
                      'allocate an elimination to the non-controlling '
                      'interest',
                      'consolidate the working papers'],
        pairs=['intercompany / external',
               'realised / unrealised',
               'upstream / downstream',
               'gross sales / consolidated revenue'],
        nots=['Eliminating an intercompany sale does not reduce group profit by '
              'the sale. Both the revenue and the cost come out, and only the '
              'unrealised margin changes profit.',
              'An elimination is not a correction. Each company recorded its '
              'transaction properly; the group simply cannot report it.'],
    ),

    objectives=[
        'Say why intercompany items must be eliminated.',
        'Eliminate intercompany revenue and the matching cost.',
        'Compute the unrealised profit in closing inventory.',
        'Distinguish an upstream from a downstream sale.',
        'Allocate an upstream elimination between the parent and the '
        'non-controlling interest.',
    ],

    terms=[
        ('elimination',
         'The removal of an item from a consolidation because it is internal to '
         'the group.', 'الاستبعاد',
         'Made only in the consolidation working papers. Neither company’s own '
         'books are touched.'),
        ('intercompany transaction',
         'A transaction between two members of the same group.',
         'معاملة بين شركات المجموعة',
         'Real for each company and non-existent for the group, which is why '
         'both sides of it have to come out.'),
        ('unrealised profit',
         'Profit recorded on an intercompany sale of goods that the group still '
         'holds.', 'الربح غير المحقق',
         'Realised when the goods are sold outside the group. Only the part '
         'still held is eliminated.'),
        ('upstream',
         'Describing a sale from a subsidiary to its parent.',
         'من التابعة إلى الأم',
         'The direction decides who bears the elimination. Upstream profit was '
         'earned partly for the non-controlling interest.'),
        ('downstream',
         'Describing a sale from a parent to its subsidiary.',
         'من الأم إلى التابعة',
         'The whole elimination falls on the parent, because all of the profit '
         'removed was the parent’s.'),
    ],

    blocks=[
        ('scene', 'Goods that have not been sold', [
            'During %s %s sold %s of control units to Northwind. They cost %s '
            'to make, so %s was recorded as profit.'
            % (Y, CO.sub, money(CO.intercompany_sales),
               money(CO.intercompany_cost),
               money(CO.intercompany_sales - CO.intercompany_cost)),
            'Northwind has sold %s of them on to its own customers. The '
            'remaining %s sit in its warehouse at the year end.'
            % (money(_sold_on), money(CO.still_in_inventory)),
            'Northwind also still owes %s for them.'
            % money(CO.intercompany_balance),
            'The group has sold nothing to anybody outside it on %s of that, '
            'and a group cannot owe itself money. Four things have to come out '
            'before these statements can be published.'
            % money(CO.still_in_inventory),
        ]),
        ('fig', 'workplace', 'One sale, two sets of books',
         [('Hana', 'Sells %s of units for %s' % (CO.sub,
                                                 money(CO.intercompany_sales)),
           'w', SUB),
          ('Rana', 'Buys them for Northwind and owes %s'
           % money(CO.intercompany_balance), 'w', PAR),
          ('Ziad', 'Owns %s of %s and of its recorded profit'
           % (_pc(1 - CO.stake), CO.sub), 'm', NCI)],
         [('truck', '%s of units move' % money(CO.intercompany_sales)),
          ('shelf', '%s still in store' % money(CO.still_in_inventory)),
          ('doc', '%s still owed' % money(CO.intercompany_balance)),
          ('cross', '%s to eliminate' % money(CO.unrealised_profit))],
         'Both companies recorded the transaction correctly. The group is the '
         'only party for whom it did not happen.'),

        ('part', 'Part 1 · Why anything is eliminated at all',
         'the group as one entity'),

        ('task', 'Exercise 3A',
         'Say why intercompany items have to be removed from a consolidation.',
         'Read and complete. Write one word in each space.',
         ['Handout 1 Exercise 1A, on what consolidated statements show.'],
         ['A single company cannot report a sale to its own warehouse. Ask what '
          'follows for a group reporting as one entity.',
          'Every item here is an intercompany transaction: real for each of '
          'the two companies and non-existent for the group.',
          'Think about what the %s receivable and the %s payable do when the '
          'two balance sheets are added together.'
          % (money(CO.intercompany_balance),
             money(CO.intercompany_balance)),
          'The last blank is where the eliminations are recorded, and it is not '
          'in anybody’s ledger.']),
        ('fill', 'R2',
         ['Consolidated statements present the group as one {entity}. A single '
          'entity cannot sell to itself, cannot owe itself money and cannot '
          'make a profit by moving goods from one of its own buildings to '
          'another.',
          'So every item that exists only between members of the group is '
          'removed. Adding the two balance sheets together would otherwise show '
          'a %s receivable and a %s payable that cancel in {substance} and '
          'inflate both totals.'
          % (money(CO.intercompany_balance),
             money(CO.intercompany_balance)),
          'The same applies to the income statement. The %s of sales and the %s '
          'of cost both come out, and because both sides go, group profit falls '
          'only by the margin on goods the group still {holds}.'
          % (money(CO.intercompany_sales), money(CO.intercompany_cost)),
          'None of this is a correction. Each company recorded its transaction '
          'properly and keeps its figures. The eliminations are made in the '
          'consolidation working {papers} alone.'],
         {'entity': ('One reporting entity, whatever the legal structure.',
                     ''),
          'substance': ('Real for each company, nothing for the group.', ''),
          'holds': ('Only the unsold part is unrealised.',
                    'Students reduce profit by the whole intercompany sale. '
                    'The cost comes out with the revenue, so only the '
                    'unrealised margin moves profit.'),
          'papers': ('Neither ledger is touched.', '')},
         ['company', 'law', 'ledger']),
        ('fig', 'buckets', 'The four eliminations',
         [('BALANCE SHEET', PAR,
           ['The investment of %s against %s equity'
            % (money(CO.price), CO.sub),
            'The %s receivable and payable' % money(CO.intercompany_balance),
            'The %s of unrealised profit in inventory'
            % money(CO.unrealised_profit)]),
          ('INCOME STATEMENT', SUB,
           ['The %s of intercompany sales' % money(CO.intercompany_sales),
            'The matching %s of cost of sales'
            % money(CO.intercompany_cost),
            'Any intercompany interest, rent or management fees'])],
         'Three of the four reduce a total without touching profit. Only the '
         'unrealised profit of %s changes the group’s result.'
         % money(CO.unrealised_profit)),

        ('part', 'Part 2 · The unrealised profit',
         'the only elimination that moves profit'),

        ('prose', 'Profit on an intercompany sale is realised when the goods '
                  'leave the group. Until then the margin on whatever is still '
                  'held has been recorded by one company and earned by nobody, '
                  'so it is removed from both inventory and profit.', 'R2'),

        ('task', 'Exercise 3B',
         'Compute the unrealised profit in closing inventory.',
         'Complete the schedule. Three figures are given.',
         ['Exercise 3A, and the paragraph above.'],
         ['%s sold %s of goods that cost it %s. Work out the profit and then '
          'the rate.' % (CO.sub, money(CO.intercompany_sales),
                         money(CO.intercompany_cost)),
          'The rate is the profit as a share of the selling price, because that '
          'is what the %s of unsold goods is stated at.'
          % money(CO.still_in_inventory),
          'The last row is the rate applied to the goods still held, and it is '
          'the only elimination in this handout that changes profit.']),
        ('table', _PROFH, _prof(blank=True), SUB, _PROFW),
        ('answers', 3),
        ('fig', 'formula', 'The unrealised profit, computed',
         [('%s' % money(CO.still_in_inventory),
           'Intercompany goods still held', SUB),
          ('×', '', None),
          ('%s' % _pc(CO.margin_rate), 'The margin in the selling price',
           NCI),
          ('=', '', None),
          ('%s' % money(CO.unrealised_profit),
           'Removed from inventory and from profit', RUST)],
         'The %s already sold on carries realised profit and is left alone. '
         'Only the goods still inside the group are touched.'
         % money(_sold_on)),
        ('journal', [
            ('E1', ('The intercompany sale and the matching cost removed from '
                    'the consolidated income statement.',
                    'Both sides, so group profit does not move on this entry.'),
             [('Sales', 0, '', ''),
              ('Cost of Goods Sold', 1, '', '')]),
            ('E2', ('The unrealised profit removed from the goods still held '
                    'at the year end.',
                    'The one elimination that does reduce group profit.'),
             [('Cost of Goods Sold', 0, '', ''),
              ('Inventory', 1, '', '')]),
            ('E3', ('The intercompany receivable and payable offset.',
                    'Both totals fall and profit is untouched.'),
             [('Accounts Payable', 0, '', ''),
              ('Accounts Receivable', 1, '', '')]),
        ]),

        ('part', 'Part 3 · Which way the goods went',
         'upstream and downstream'),

        ('task', 'Exercise 3C',
         'Say who bears the elimination of an upstream unrealised profit.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercise 3B, and Handout 1 Exercise 1E on the non-controlling '
          'interest.'],
         ['%s sold to Northwind, so the profit was recorded in the '
          'subsidiary’s books.' % CO.sub,
          'Those books belong %s to Northwind and %s to the other '
          'shareholders. Ask whose profit is being removed.'
          % (_pc(CO.stake), _pc(1 - CO.stake)),
          'The last blank is who bears the whole elimination when the parent is '
          'the seller instead.']),
        ('fill', 'R2',
         ['The sale ran from %s to Northwind, which makes it an {upstream} '
          'sale. The %s of profit was recorded in the subsidiary’s own income '
          'statement.' % (CO.sub,
                          money(CO.intercompany_sales
                                - CO.intercompany_cost)),
          'Subsidiary profit belongs %s to Northwind and %s to the other '
          'shareholders, so the %s eliminated was earned partly for them. The '
          'elimination is therefore {shared} in the same proportions.'
          % (_pc(CO.stake), _pc(1 - CO.stake),
             money(CO.unrealised_profit)),
          'Northwind bears %s of it and the non-controlling interest bears '
          '{%s}, which is %s of the %s removed.'
          % (money(CO.unrealised_profit * CO.stake),
             money(CO.unrealised_profit * (1 - CO.stake)),
             _pc(1 - CO.stake), money(CO.unrealised_profit)),
          'A downstream sale works differently. There the profit was recorded '
          'by the parent, so none of it belonged to the other shareholders and '
          'the whole elimination falls on the {parent}.'],
         {'upstream': ('From the subsidiary to the parent.', ''),
          'shared': ('The profit was shared, so the removal is too.', ''),
          money(CO.unrealised_profit * (1 - CO.stake)):
              ('%s of %s.' % (_pc(1 - CO.stake),
                              money(CO.unrealised_profit)), ''),
          'parent': ('All the parent’s profit, all the parent’s '
                     'elimination.',
                     'Students split every elimination. Only an upstream one '
                     'is shared, because only then did the subsidiary record '
                     'the profit.')},
         ['downstream', 'full', 'subsidiary']),
        ('fig', 'matrix', 'Who bears the elimination',
         ['Upstream, %s to Northwind' % CO.sub,
          'Downstream, Northwind to %s' % CO.sub],
         ['Who recorded the profit', 'Borne by the parent',
          'Borne by the non-controlling interest'],
         [['%s, in its own books' % CO.sub,
           '%s of %s, or %s' % (_pc(CO.stake),
                                money(CO.unrealised_profit),
                                money(CO.unrealised_profit * CO.stake)),
           '%s, or %s' % (_pc(1 - CO.stake),
                          money(CO.unrealised_profit * (1 - CO.stake)))],
          ['Northwind, in its own books',
           'All %s of it' % money(CO.unrealised_profit),
           'Nil']],
         'The direction of the sale is the only thing that decides this, and '
         'a stem that gives you a percentage without a direction is '
         'incomplete.'),

        ('part', 'Part 4 · What the statements look like after',
         'four totals, two versions'),

        ('task', 'Exercise 3D',
         'Show the effect of the eliminations on four consolidated totals.',
         'Complete the right-hand column. Each cell is one subtraction.',
         ['Exercises 3B and 3C.'],
         ['Revenue loses the whole %s of intercompany sales.'
          % money(CO.intercompany_sales),
          'Inventory loses the %s of unrealised profit, not the %s of goods.'
          % (money(CO.unrealised_profit),
             money(CO.still_in_inventory)),
          'Receivables and payables each lose the same %s, so the balance sheet '
          'still balances.' % money(CO.intercompany_balance)]),
        ('table', _EFFECTH, _effect(blank=True), SLATE, _EFFECTW),
        ('answers', 4),
        ('fig', 'ranked', 'What each elimination costs a total',
         [('Revenue, less intercompany sales', CO.intercompany_sales,
           money(-CO.intercompany_sales), SUB),
          ('Receivables and payables, each', CO.intercompany_balance,
           money(-CO.intercompany_balance), SLATE),
          ('Inventory, less unrealised profit', CO.unrealised_profit,
           money(-CO.unrealised_profit), RUST)],
         'Only the third bar reaches profit. The first removes equal revenue '
         'and cost, and the second removes equal amounts from both sides of the '
         'balance sheet.',
         'Effect on the consolidated totals'),

        ('watch', 'Eliminate the profit in the inventory, never the inventory. '
                  'A stem that says %s of intercompany goods remain unsold at a '
                  '%s margin is asking for %s, and the figure in the stem is '
                  'there to be multiplied rather than subtracted.'
                  % (money(CO.still_in_inventory), _pc(CO.margin_rate),
                     money(CO.unrealised_profit))),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Intercompany receivables and payables are eliminated in '
                'consolidation because:',
         ['They are immaterial',
          'A single entity cannot owe money to itself',
          'They are not legally enforceable',
          'They have already been settled'],
         1, 'Level A',
         'The group reports as one entity, and the two balances cancel in '
         'substance. (C) is false: the debt between two companies is perfectly '
         'enforceable, which is why each one reports it.'),

        ('mcq', 'A subsidiary sells %s of goods to its parent at a %s gross '
                'margin. All of the goods are sold on to outside customers '
                'before the year end. The unrealised profit to eliminate is:'
         % (money(CO.intercompany_sales), _pc(CO.margin_rate)),
         [money(CO.intercompany_sales * CO.margin_rate), 'Nil',
          money(CO.unrealised_profit), money(CO.intercompany_sales)],
         1, 'Level A',
         'Once the goods leave the group the profit on them is realised, so '
         'nothing is eliminated from inventory. (A) eliminates profit on goods '
         'that have genuinely been sold.'),

        ('mcq', 'A subsidiary sells goods to its parent. At the year end %s of '
                'them remain in the parent’s inventory. The margin was %s. The '
                'elimination from consolidated inventory is:'
         % (money(CO.still_in_inventory), _pc(CO.margin_rate)),
         [money(CO.still_in_inventory), money(CO.unrealised_profit),
          money(CO.still_in_inventory - CO.unrealised_profit),
          money(CO.intercompany_sales)],
         1, 'Level B',
         '%s at %s is %s of unrealised profit. (A) removes the inventory '
         'instead of the profit in it, which would leave the group holding '
         'goods it does not report.'
         % (money(CO.still_in_inventory), _pc(CO.margin_rate),
            money(CO.unrealised_profit))),

        ('mcq', 'Eliminating %s of intercompany sales reduces consolidated '
                'profit by:' % money(CO.intercompany_sales),
         [money(CO.intercompany_sales),
          'Nothing, because the matching cost of sales is eliminated too',
          money(CO.intercompany_sales - CO.intercompany_cost),
          money(CO.unrealised_profit)],
         1, 'Level B',
         'Both the revenue and the cost come out, so that entry alone leaves '
         'profit where it was. (A) is the error the size of the sales figure '
         'invites, and (D) belongs to the separate unrealised profit entry.'),

        ('mcq', 'The whole of an unrealised profit elimination is borne by the '
                'parent when the sale was:',
         ['Upstream, from the subsidiary to the parent',
          'Downstream, from the parent to the subsidiary',
          'Between two subsidiaries',
          'At cost'],
         1, 'Level B',
         'The parent recorded the profit, so none of it belonged to the '
         'non-controlling interest. (A) is the direction in which the '
         'elimination is shared, which is exactly the pair the question '
         'tests.'),

        ('mcq', '%s, which is %s owned, sells goods upstream leaving %s of '
                'unrealised profit at the year end. The amount charged against '
                'the non-controlling interest is:'
         % (CO.sub, _pc(CO.stake), money(CO.unrealised_profit)),
         [money(CO.unrealised_profit),
          money(CO.unrealised_profit * (1 - CO.stake)),
          money(CO.unrealised_profit * CO.stake), 'Nil'],
         1, 'Level C',
         'The subsidiary recorded the profit, and %s of its profit belongs to '
         'the other shareholders: %s of %s is %s. (D) is the downstream answer '
         'applied to an upstream sale.'
         % (_pc(1 - CO.stake), _pc(1 - CO.stake),
            money(CO.unrealised_profit),
            money(CO.unrealised_profit * (1 - CO.stake)))),

        ('mcq', 'The parent’s investment in the subsidiary is eliminated '
                'against:',
         ['The subsidiary’s retained earnings only',
          'The subsidiary’s equity at the acquisition date, with goodwill and '
          'the non-controlling interest recognised',
          'Consolidated revenue',
          'The parent’s own share capital'],
         1, 'Level C',
         'The investment offsets the equity it bought, and what the '
         'consideration and the non-controlling interest exceed the net assets '
         'by is goodwill. (D) is impossible: the parent’s own capital is the '
         'group’s capital and stays.'),

        ('tip', 'Work the eliminations in a fixed order: investment against '
                'equity, then revenue against cost, then receivable against '
                'payable, then the unrealised profit. Only the last one touches '
                'profit, so if a question asks what happened to consolidated '
                'profit, it is asking about one figure out of four.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3B · the unrealised profit, computed'),
        ('table', _PROFH, _prof(), SUB, _PROFW),
        ('h3', 'Exercise 3D · the effect on the totals'),
        ('table', _EFFECTH, _effect(), SLATE, _EFFECTW),
        ('h3', 'The four eliminations, summarised'),
        ('table', _ELIMH, _elim(), PAR, _ELIMW),
        ('h3', 'The elimination entries, completed'),
        ('journal', [
            ('E1', 'Intercompany sales and the matching cost removed.',
             [('Sales', 0, money(CO.intercompany_sales), ''),
              ('Cost of Goods Sold', 1, '',
               money(CO.intercompany_sales))]),
            ('E2', 'Unrealised profit removed from closing inventory.',
             [('Cost of Goods Sold', 0, money(CO.unrealised_profit), ''),
              ('Inventory', 1, '', money(CO.unrealised_profit))]),
            ('E3', 'The intercompany receivable and payable offset.',
             [('Accounts Payable', 0, money(CO.intercompany_balance), ''),
              ('Accounts Receivable', 1, '',
               money(CO.intercompany_balance))]),
        ]),
        ('prose', 'E1 and E3 move no profit at all: each takes equal amounts '
                  'out of two places. Only E2 reduces the group’s result, by '
                  'the %s of margin on goods the group still holds, and that '
                  '%s is split %s to Northwind and %s to the non-controlling '
                  'interest because the sale was upstream.'
                  % (money(CO.unrealised_profit),
                     money(CO.unrealised_profit),
                     money(CO.unrealised_profit * CO.stake),
                     money(CO.unrealised_profit * (1 - CO.stake))), 'R2'),
    ],
)
