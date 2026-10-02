# -*- coding: utf-8 -*-
"""Volume 4, Handout 4 — What Each Method Does to Income and to Assets.

Covers A.2(f): calculating the effect on income and on assets of using
different inventory methods.
"""
from fadata import N, I, Y, PY
from data import money, num

FIFO, LIFO, WA, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_ISH = ['', 'FIFO', 'Weighted average', 'LIFO']
_ISW = [31, 23, 23, 23]


def _income(blank=False):
    def c(v):
        return '' if blank else v
    f, w, l = I.fifo_closing, I.wa_closing, I.lifo_closing
    return [
        ['Sales, %s units at $%d' % (num(I.sold_units), I.price),
         money(I.sales), money(I.sales), money(I.sales)],
        ['Goods available for sale', money(I.cost_available),
         money(I.cost_available), money(I.cost_available)],
        ['Less closing inventory', c(money(-f)), c(money(-w)), c(money(-l))],
        ['Cost of goods sold', c(money(I.cogs(f))), c(money(I.cogs(w))),
         c(money(I.cogs(l)))],
        ['Gross margin', c(money(I.gross_margin(f))),
         c(money(I.gross_margin(w))), c(money(I.gross_margin(l)))],
        ['Income tax at %d%%' % (I.tax_rate * 100), c(money(-I.tax(f))),
         c(money(-I.tax(w))), c(money(-I.tax(l)))],
        ['Profit after tax', c(money(I.gross_margin(f) - I.tax(f))),
         c(money(I.gross_margin(w) - I.tax(w))),
         c(money(I.gross_margin(l) - I.tax(l)))],
    ]


_RATH = ['Measure', 'FIFO', 'LIFO', 'Which looks better']
_RATW = [34, 20, 20, 26]


def _ratios(blank=False):
    def c(v):
        return '' if blank else v
    f, l = I.fifo_closing, I.lifo_closing
    return [
        ['Gross margin percentage',
         c('%.1f%%' % (100.0 * I.gross_margin(f) / I.sales)),
         c('%.1f%%' % (100.0 * I.gross_margin(l) / I.sales)), c('FIFO')],
        ['Closing inventory', c(money(f)), c(money(l)), c('FIFO')],
        ['Cash paid in tax', c(money(I.tax(f))), c(money(I.tax(l))), c('LIFO')],
        ['Cash held at the year end', c('lower by %s'
                                        % money(I.lifo_reserve * I.tax_rate)),
         c('higher'), c('LIFO')],
    ]


HANDOUT = dict(
    n=4,
    title='What Each Method Does to Income and to Assets',
    subtitle='Three methods, three profits, one business. The method that reports '
             'the best result is the one that leaves the company with least cash.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 for the final passage, which '
                 'is the comparison an exam asks for.',
        collocations=['report a higher gross margin',
                      'overstate the current ratio', 'understate inventory',
                      'generate a holding gain', 'compare like with like',
                      'restate before comparing'],
        pairs=['reported profit / cash generated',
               'holding gain / operating margin',
               'balance sheet effect / income statement effect',
               'rising prices / falling prices'],
        nots=['A higher reported profit is not a better outcome. Under LIFO the '
              'company with the lower profit keeps more cash.',
              'The method does not change what the goods cost. It changes which '
              'year the cost is reported in.'],
    ),

    objectives=[
        'Prepare the same income statement under all three methods.',
        'Say which method reports the highest profit when prices are rising, and '
        'which when they are falling.',
        'Explain what a holding gain is and why FIFO reports one.',
        'Say what each method does to the balance sheet and to ratios built on '
        'it.',
        'State the one comparison that is identical under all three methods.',
    ],

    terms=[
        ('holding gain',
         'The part of reported profit that arises from holding goods while their '
         'cost rose, rather than from the margin on selling them.',
         'مكسب الاحتفاظ',
         'FIFO reports it inside gross margin, where it is indistinguishable from '
         'trading profit. LIFO keeps it out.'),
        ('inventory turnover',
         'Cost of goods sold divided by inventory: how many times the stock is '
         'sold and replaced.', 'معدل دوران المخزون',
         'A LIFO company looks faster than a FIFO one for no operating reason at '
         'all — its denominator is artificially small.'),
        ('current ratio',
         'Current assets divided by current liabilities.', 'نسبة التداول',
         'Inventory sits in the numerator, so the choice of method moves it '
         'without anything about the business changing.'),
        ('phantom profit',
         'Reported profit that could not be repeated, because replacing the goods '
         'costs more than they were carried at.', 'الربح الوهمي',
         'Another name for the holding gain, used when the point is that the '
         'profit is not sustainable.'),
    ],

    blocks=[
        ('scene', 'Three income statements for one year of trading', [
            'Northwind sold %s units of the %s at $%d each, for sales of %s. That '
            'is a fact: the invoices exist.'
            % (num(I.sold_units), I.name, I.price, money(I.sales)),
            'The goods available for sale cost %s. That is a fact too: the '
            'suppliers were paid.' % money(I.cost_available),
            'Everything between those two facts is a consequence of the method '
            'chosen, and the three methods produce gross margins of %s, %s and '
            '%s.' % (money(I.gross_margin(I.fifo_closing)),
                     money(I.gross_margin(I.wa_closing)),
                     money(I.gross_margin(I.lifo_closing))),
            'This handout sets the three statements side by side and asks which of '
            'them tells a reader the most useful thing.',
        ]),
        ('fig', 'ranked', 'The same year, reported three ways',
         [('Gross margin, FIFO', I.gross_margin(I.fifo_closing),
           money(I.gross_margin(I.fifo_closing)), FIFO),
          ('Gross margin, weighted average', I.gross_margin(I.wa_closing),
           money(I.gross_margin(I.wa_closing)), WA),
          ('Gross margin, LIFO', I.gross_margin(I.lifo_closing),
           money(I.gross_margin(I.lifo_closing)), LIFO)],
         'A spread of %s on identical sales and identical purchases. Nothing about '
         'the business differs between the three bars.'
         % money(I.gross_margin(I.fifo_closing)
                 - I.gross_margin(I.lifo_closing)),
         '%s units sold at $%d' % (num(I.sold_units), I.price)),

        ('part', 'Part 1 · Three statements',
         'built from the figures you already have'),

        ('task', 'Exercise 4A',
         'Prepare the income statement under all three methods.',
         'Complete the table. Each column uses the closing inventory figure you '
         'produced in Handout 2.',
         ['Handout 2, for the three closing inventory figures.'],
         ['The first two rows are identical across all three columns. Fill them '
          'first.',
          'Closing inventory is the only input that differs. Everything below it '
          'follows.',
          'Work down one column at a time, not across the rows.']),
        ('table', _ISH, _income(blank=True), SLATE, _ISW),
        ('answers', 15),
        ('fig', 'bridge',
         'Gross margin under LIFO', I.gross_margin(I.lifo_closing),
         [('The LIFO reserve, released into FIFO profit', I.lifo_reserve)],
         'Gross margin under FIFO', I.gross_margin(I.fifo_closing)),

        ('part', 'Part 2 · Which direction, and why',
         'rising prices, and falling ones'),

        ('task', 'Exercise 4B',
         'State which method reports the highest profit, and say what happens when '
         'prices fall.',
         'Read and complete. Write one word in each space.',
         ['Exercise 4A'],
         ['The direction depends entirely on which way prices moved. Say which way '
          'they moved here before you start.',
          'Blank 2 follows from which costs each method charges against revenue.',
          'The last blank is what happens to the whole comparison if prices fall '
          'instead.']),
        ('fill', 'R2',
         ['Prices rose through %s, from $%d a unit to $%d. FIFO charges the oldest '
          'and therefore the {cheapest} costs against revenue, so it reports the '
          'highest gross margin, %s.'
          % (Y, I.layers[0][2], I.layers[3][2],
             money(I.gross_margin(I.fifo_closing))),
          'LIFO charges the newest and dearest costs, so it reports the lowest, '
          '%s. The weighted average sits between them, as an average always '
          '{must}.' % money(I.gross_margin(I.lifo_closing)),
          'On the balance sheet the ordering reverses. FIFO leaves the newest '
          'costs in inventory, so it reports the {highest} closing inventory, and '
          'LIFO the lowest.',
          'If prices had fallen, every one of those statements would {reverse}. '
          'Nothing about the methods would have changed; the direction of prices '
          'is what drives the comparison, and a question that does not tell you '
          'which way they moved has not given you enough to answer.'],
         {'cheapest': ('Oldest costs charged out under FIFO.', ''),
          'must': ('An average lies between the extremes.', ''),
          'highest': ('Income and balance sheet run in opposite directions.',
                      'Students memorise "FIFO higher" without the condition. In '
                      'falling prices FIFO reports the lower profit.'),
          'reverse': ('The direction of prices drives everything.', '')},
         ['dearest', 'lowest', 'repeat']),
        ('fig', 'matrix', 'The comparison depends entirely on the price direction',
         ['Rising prices — as in %s' % Y, 'Falling prices'],
         ['Highest reported profit', 'Highest closing inventory'],
         [['FIFO', 'FIFO'],
          ['LIFO', 'LIFO']],
         'Read it as a pair: in any one column the same method takes both, because '
         'both come from leaving the dearest costs in inventory.'),

        ('part', 'Part 3 · The holding gain',
         'what FIFO’s extra profit actually is'),

        ('prose', 'FIFO reports %s more gross margin than LIFO on identical '
                  'trading. That extra amount did not come from selling better. It '
                  'came from holding goods while their replacement cost rose.'
                  % money(I.lifo_reserve), 'R2'),
        ('prose', 'The question a reader should ask is whether the margin could be '
                  'repeated. Northwind must replace the units it sold, and '
                  'replacing them costs what the October batch cost, not what the '
                  'opening batch cost. On that basis part of the FIFO margin is '
                  'not available to be earned again.', 'R2'),

        ('prose', 'Analysts have a blunter name for the same amount. They call '
                  'it a phantom profit, because a margin that depends on having '
                  'bought before a price rise cannot be earned again once the '
                  'cheaper goods are gone.', 'R2'),

        ('task', 'Exercise 4C',
         'Separate the holding gain from the trading margin.',
         'Read and complete.',
         ['Exercise 4B, and the two paragraphs above.'],
         ['Blank 1 names the part of FIFO profit that comes from price movement '
          'rather than from trading.',
          'Blank 3 is the method that keeps that component out of gross margin by '
          'construction.',
          'The last blank is the other name for the same thing, used when the '
          'point is that the profit cannot be repeated.']),
        ('fill', 'R2',
         ['Part of the margin FIFO reports arises from having bought goods before '
          'prices rose and sold them afterwards. That component is a {holding} '
          'gain, and it is reported inside gross margin where a reader cannot see '
          'it separately.',
          'LIFO charges the most recent costs against revenue, which is as close '
          'as a cost flow assumption gets to charging what it would cost to '
          '{replace} the goods sold. The holding component is therefore largely '
          'kept out of the margin.',
          'That is the strongest argument made for {LIFO}, and it is an argument '
          'about the income statement alone. The same construction leaves the '
          'balance sheet carrying costs that may be decades old.',
          'When the point being made is that the margin cannot be earned again, '
          'the same amount is often called a {phantom} profit. The two names '
          'describe one thing from two directions.'],
         {'holding': ('Profit from holding, not from trading.', ''),
          'replace': ('Current costs against current revenue.', ''),
          'LIFO': ('An argument about the income statement only.',
                   'Students treat LIFO as better overall. It improves one '
                   'statement by damaging the other.'),
          'phantom': ('Not repeatable, because replacement costs more.', '')},
         ['operating', 'reduce', 'FIFO']),
        ('fig', 'scale',
         'WHAT FIFO PUTS IN GROSS MARGIN',
         ['The margin on actually selling the goods',
          'Plus the holding gain of %s' % money(I.lifo_reserve),
          'Reported together as %s' % money(I.gross_margin(I.fifo_closing)),
          'A reader cannot separate them'],
         'WHAT LIFO PUTS IN GROSS MARGIN',
         ['The margin on actually selling the goods',
          'Current costs against current revenue',
          'Reported as %s' % money(I.gross_margin(I.lifo_closing)),
          'The holding component is kept out']),

        ('part', 'Part 4 · What it does to the balance sheet',
         'and to every ratio built on it'),

        ('task', 'Exercise 4D',
         'Say what each method does to the balance sheet and to the ratios a '
         'reader computes from it.',
         'Complete the table. The last column asks which method a reader would '
         'think looks better.',
         ['Exercise 4C'],
         ['Compute each percentage from the figures in Exercise 4A.',
          'Two rows favour FIFO and two favour LIFO. That split is the point of '
          'the exercise.',
          'The last row is about cash, and cash is the only one of the four that '
          'is not an accounting measure at all.']),
        ('table', _RATH, _ratios(blank=True), SLATE, _RATW),
        ('answers', 12),
        ('fig', 'ranked', 'Two measures a reader would build on these statements',
         [('Closing inventory, FIFO', I.fifo_closing, money(I.fifo_closing),
           FIFO),
          ('Closing inventory, LIFO', I.lifo_closing, money(I.lifo_closing),
           LIFO),
          ('Cash kept by using LIFO', I.lifo_reserve * I.tax_rate,
           money(I.lifo_reserve * I.tax_rate), OK)],
         'The first two bars are the current ratio and the inventory turnover '
         'moving for no operating reason. The third is real money.'),

        ('task', 'Exercise 4E',
         'State what is identical under all three methods, and what a reader must '
         'do before comparing two companies.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercises 4A to 4D'],
         ['Blank 1 is the one figure in the whole comparison that no method '
          'changes.',
          'Blank 3 is what a reader does with a disclosed reserve before '
          'comparing.',
          'The last blank is the thing the method really decides, which is not the '
          'amount of anything.']),
        ('fill', 'R3',
         ['Across all three columns of Exercise 4A, sales are %s and goods '
          'available for sale cost %s. Over the whole life of the inventory the '
          'total profit is {identical} under every method, because the same goods '
          'were bought at the same prices and sold for the same amount.'
          % (money(I.sales), money(I.cost_available)),
          'What differs is which year each part of that total is reported in. '
          'Nothing is created and nothing is destroyed, which is why the method is '
          'a question of {timing} rather than of amount.',
          'It follows that two companies using different methods cannot be '
          'compared as reported. A reader restates the LIFO company by adding its '
          'disclosed {reserve} to inventory and the after-tax movement in it to '
          'income, and only then are the two on the same basis.',
          'One thing the choice does decide in substance, and it is not an '
          'accounting figure at all: how much {cash} the company pays in tax this '
          'year. That is the only difference in the comparison that a business '
          'can actually spend.'],
         {'identical': ('Same goods, same prices, same sales.', ''),
          'timing': ('Which year, not how much.', ''),
          'reserve': ('Restate before comparing.', ''),
          'cash': ('The only real difference.',
                   'Students rank the methods by reported profit. The company '
                   'reporting least keeps most cash.')},
         [money(I.lifo_reserve), 'inventory', 'profit']),
        ('fig', 'timeline', 'Over the life of the inventory, the methods converge',
         [('Year 1', 'FIFO reports %s more margin' % money(I.lifo_reserve),
           FIFO),
          ('Later years', 'LIFO reports more, as old layers are consumed', LIFO),
          ('When the last unit is sold',
           'total profit is identical under all three', SLATE)],
         'The method decides the distribution between years. It never decides the '
         'total.'),

        ('watch', 'If a question asks which method gives the higher profit and '
                  'does not say which way prices moved, the answer is that it '
                  'cannot be determined. That option is often present, and it is '
                  'often right.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'In a period of rising prices, which method reports the highest '
                'gross margin?',
         ['LIFO', 'FIFO', 'Weighted average', 'All three report the same'],
         1, 'Level A',
         'FIFO charges the oldest and cheapest costs against revenue, so its gross '
         'margin is the highest: %s against %s under LIFO. The weighted average '
         'lies between them.'
         % (money(I.gross_margin(I.fifo_closing)),
            money(I.gross_margin(I.lifo_closing)))),

        ('mcq', 'A company using FIFO reports a gross margin of %s. The same '
                'company using LIFO would report %s. The difference of %s is best '
                'described as:'
                % (money(I.gross_margin(I.fifo_closing)),
                   money(I.gross_margin(I.lifo_closing)),
                   money(I.lifo_reserve)),
         ['An operating efficiency gain',
          'A holding gain, arising from the rise in replacement cost rather than '
          'from trading',
          'An error in one of the two computations',
          'A tax saving'],
         1, 'Level C',
         'The amount arises from holding goods while their cost rose. (A) ascribes '
         'it to trading, which is the misreading the term exists to prevent. (D) '
         'confuses the pre-tax difference with the tax on it.'),

        ('mcq', 'Compared with FIFO, a company using LIFO in a period of rising '
                'prices will report:',
         ['A higher current ratio and a lower inventory turnover',
          'A lower current ratio and a higher inventory turnover',
          'A higher current ratio and a higher inventory turnover',
          'The same current ratio and the same inventory turnover'],
         1, 'Level C',
         'LIFO reports lower inventory, which lowers current assets and therefore '
         'the current ratio, and shrinks the denominator of inventory turnover so '
         'that it looks faster. Neither movement reflects anything about '
         'operations.'),

        ('mcq', 'Over the entire period during which a given quantity of inventory '
                'is bought and sold, total profit under FIFO compared with LIFO '
                'is:',
         ['Higher under FIFO', 'Higher under LIFO', 'The same under both',
          'Dependent on the tax rate'],
         2, 'Level B',
         'The same goods are bought at the same prices and sold for the same '
         'amounts, so the total is identical; only its distribution between years '
         'differs. This is the single most useful fact in the topic and the one '
         'students least often state.'),

        ('mcq', 'A question states that a company uses LIFO and that its reported '
                'profit is higher than a FIFO competitor’s. The most likely '
                'explanation is that:',
         ['LIFO always reports higher profit',
          'Prices have been falling, or the company has had a LIFO liquidation',
          'The competitor has made an error',
          'The two companies have different sales volumes'],
         1, 'Level C',
         'LIFO reports the higher profit when prices fall, and a liquidation can '
         'produce the same result even while prices rise. (A) states a rule that '
         'holds only in one price direction. (D) is possible but does not explain '
         'a comparison of margins.'),

        ('mcq', 'Northwind pays %s in tax under FIFO and %s under LIFO. The '
                'difference of %s represents:'
                % (money(I.tax(I.fifo_closing)), money(I.tax(I.lifo_closing)),
                   money(I.lifo_reserve * I.tax_rate)),
         ['Tax permanently avoided by using LIFO',
          'Tax deferred to a later period, which will be paid when the old layers '
          'are sold',
          'An error, since the same transactions occurred',
          'A reduction in the LIFO reserve'],
         1, 'Level B',
         'The timing of the tax moves, not the total. (A) is the error the word '
         'deferral exists to prevent. (C) misunderstands the question — the '
         'transactions are identical and the taxable profit is not.'),

        ('mcq', 'To compare a LIFO company with a FIFO company on the same basis, '
                'a reader should:',
         ['Deduct the LIFO reserve from the LIFO company’s inventory',
          'Add the LIFO reserve to the LIFO company’s inventory and the '
          'after-tax movement in it to income',
          'Deduct the LIFO reserve from the FIFO company’s inventory',
          'Make no adjustment, since both are acceptable methods'],
         1, 'Level C',
         'The reserve restates the LIFO company onto a FIFO basis. (A) moves it the '
         'wrong way. (D) is the dangerous answer: both methods are acceptable and '
         'the resulting figures are still not comparable, which is exactly why the '
         'reserve is disclosed.'),

        ('tip', 'Before answering any comparison question, write two words at the '
                'top of your page: prices rising, or prices falling. Half the '
                'wrong answers in this topic are correct statements about the '
                'other direction.'),
    ],

    key_extra=[
        ('h3', 'Exercise 4A · the three completed income statements'),
        ('table', _ISH, _income(), SLATE, _ISW),
        ('h3', 'Exercise 4D · the completed comparison'),
        ('table', _RATH, _ratios(), SLATE, _RATW),
        ('bullets', [
            'FIFO reports %s more gross margin than LIFO, and that amount is the '
            'LIFO reserve.' % money(I.lifo_reserve),
            'LIFO pays %s less tax this year, and that amount is the reserve at '
            '%d%%.' % (money(I.lifo_reserve * I.tax_rate), I.tax_rate * 100),
            'Over the life of the inventory the total profit is identical under '
            'all three methods. Only the distribution between years differs.',
        ]),
    ],
)
