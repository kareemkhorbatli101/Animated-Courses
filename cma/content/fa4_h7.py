# -*- coding: utf-8 -*-
"""Volume 4, Handout 7 — Inventory Errors and How They Unwind.

Covers A.2(g): analysing the effects of inventory errors.
"""
from fadata import N, I, Y, PY
from data import money, num

FIFO, LIFO, WA, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_Y1, _Y2 = Y, '20X5'
_ERR = 30_000

_EFFH = ['Figure', 'Year 1 effect', 'Year 2 effect', 'Over the two years']
_EFFW = [30, 24, 24, 22]


def _eff(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Closing inventory, year 1', c('Overstated %s' % money(_ERR)),
         c('—'), c('Corrected by the year 2 count')],
        ['Opening inventory, year 2', c('—'),
         c('Overstated %s' % money(_ERR)), c('—')],
        ['Cost of goods sold', c('Understated %s' % money(_ERR)),
         c('Overstated %s' % money(_ERR)), c('Correct in total')],
        ['Net income', c('Overstated %s' % money(_ERR)),
         c('Understated %s' % money(_ERR)), c('Correct in total')],
        ['Closing retained earnings', c('Overstated %s' % money(_ERR)),
         c('Correct'), c('Correct')],
        ['Working capital', c('Overstated %s' % money(_ERR)), c('Correct'),
         c('Correct')],
    ]


_GRIDH = ['The error', 'Cost of goods sold', 'Net income',
          'Closing retained earnings']
_GRIDW = [34, 22, 22, 22]


def _grid(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Closing inventory overstated', c('Understated'), c('Overstated'),
         c('Overstated')],
        ['Closing inventory understated', c('Overstated'), c('Understated'),
         c('Understated')],
        ['Opening inventory overstated', c('Overstated'), c('Understated'),
         c('Understated')],
        ['Opening inventory understated', c('Understated'), c('Overstated'),
         c('Overstated')],
        ['Purchases recorded but goods excluded from the count',
         c('Overstated'), c('Understated'), c('Understated')],
    ]


HANDOUT = dict(
    n=7,
    title='Inventory Errors and How They Unwind',
    subtitle='An inventory error is wrong twice: once this year and once, in the '
             'opposite direction, next year. After that it is gone.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 for the final passage. The '
                 'vocabulary here is directional: overstate, understate, reverse.',
        collocations=['overstate closing inventory',
                      'understate cost of goods sold',
                      'an error counterbalances in the following period',
                      'restate the comparative figures',
                      'the error washes out', 'affect working capital'],
        pairs=['overstated / understated',
               'counterbalancing / non-counterbalancing',
               'closing inventory / opening inventory',
               'this year / next year'],
        nots=['An error that counterbalances is not harmless. Two years of '
              'reported results were wrong, and decisions were taken on them.',
              'Self-correcting does not mean self-disclosing. The company still '
              'has to restate if the amounts are material.'],
    ),

    objectives=[
        'Trace an inventory error through cost of goods sold to net income.',
        'Say what the same error does in the following year, and why.',
        'Explain what counterbalancing means and what it does not excuse.',
        'Build the full grid of four error directions.',
        'Identify the error that does not counterbalance at all.',
    ],

    terms=[
        ('counterbalancing error',
         'An error whose effect on income reverses in the following period, '
         'leaving the cumulative total correct.', 'خطأ ذاتي التصحيح',
         'Most inventory errors are of this kind. That is a fact about the '
         'arithmetic, not a reason to leave them uncorrected.'),
        ('restatement',
         'Correcting prior period figures and presenting them again.',
         'إعادة عرض القوائم',
         'Required where the error is material, even if it has already '
         'counterbalanced, because the comparative figures are still wrong.'),
        ('covenant',
         'A condition in a loan agreement, often expressed as a financial ratio.',
         'تعهد في اتفاقية قرض',
         'The reason a balance sheet effect can matter more to a company than an '
         'income statement one.'),
        ('working capital',
         'Current assets less current liabilities.', 'رأس المال العامل',
         'Inventory sits inside it, so an inventory error moves it and every '
         'ratio built on it.'),
    ],

    blocks=[
        ('scene', 'One miscount, two wrong years', [
            'At 31 December %s a warehouse team counts a pallet twice. Closing '
            'inventory is recorded %s higher than it should be.'
            % (_Y1, money(_ERR)),
            'Nothing else is wrong. The purchases were recorded correctly, the '
            'sales were recorded correctly, and the goods that were actually '
            'there are correctly priced. One pallet was counted twice.',
            'That single error moves four figures in %s and four more in %s, in '
            'the opposite direction. By the end of %s it has vanished entirely, '
            'and the company has still published two years of wrong numbers.'
            % (_Y1, _Y2, _Y2),
            'This handout traces it, and then builds the grid that handles any '
            'inventory error in either direction.',
        ]),
        ('fig', 'formula', 'The identity every inventory error travels through',
         [('OPENING INVENTORY', 'from last year', SLATE),
          ('+', '', None),
          ('PURCHASES', 'recorded correctly', FIFO),
          ('−', '', None),
          ('CLOSING INVENTORY', 'counted, and here miscounted', RUST),
          ('=', '', None),
          ('COST OF GOODS SOLD', 'wrong, by the same amount', LIFO)],
         'Closing inventory is subtracted, so an error in it moves cost of goods '
         'sold the opposite way.'),

        ('part', 'Part 1 · Year one',
         'what the error does immediately'),

        ('task', 'Exercise 7A',
         'Trace the error through to net income in the year it is made.',
         'Read and complete. Write one word in each space.',
         ['Handout 2, for the relationship between the pool and the two outputs.'],
         ['Start from the identity in the figure above and move one step at a '
          'time.',
          'Closing inventory is subtracted, so blank 2 is the opposite direction '
          'to blank 1.',
          'Then cost of goods sold is subtracted from sales, so blank 3 flips '
          'again.']),
        ('fill', 'R2',
         ['Closing inventory at the end of %s is {overstated} by %s.'
          % (_Y1, money(_ERR)),
          'Closing inventory is deducted in arriving at cost of goods sold, so if '
          'it is too high then cost of goods sold is too low. Cost of goods sold '
          'is {understated} by the same %s.' % money(_ERR),
          'Cost of goods sold is deducted in arriving at gross margin, so the flip '
          'happens again. Gross margin and net income are both {overstated} by %s.'
          % money(_ERR),
          'On the balance sheet, inventory is a current asset, so working capital '
          'and the current ratio are overstated as well, and closing retained '
          'earnings is overstated by the amount of the {income} error.'],
         {'overstated': ('Counted twice, so too high.', ''),
          'understated': ('It is subtracted, so the direction flips.', ''),
          'income': ('Retained earnings carries the income error forward.',
                     'Students stop at cost of goods sold and forget that the '
                     'error reaches the balance sheet through retained earnings.')},
         ['correct', 'unchanged', 'purchases']),
        ('fig', 'ranked', 'One error, four figures, two directions',
         [('Closing inventory', _ERR, 'overstated %s' % money(_ERR), RUST),
          ('Cost of goods sold', _ERR, 'understated %s' % money(_ERR), FIFO),
          ('Net income', _ERR, 'overstated %s' % money(_ERR), RUST),
          ('Closing retained earnings', _ERR, 'overstated %s' % money(_ERR),
           RUST)],
         'Every bar is the same %s. Only the direction changes, and it changes '
         'once, at the subtraction.' % money(_ERR)),

        ('part', 'Part 2 · Year two',
         'the same error, running backwards'),

        ('prose', 'The error is not repeated in %s. The warehouse counts '
                  'correctly at the end of that year, so closing inventory for %s '
                  'is right.' % (_Y2, _Y2), 'R2'),
        ('prose', 'But the opening inventory of %s is the closing inventory of '
                  '%s, and that figure is still too high. Opening inventory is '
                  'added in arriving at cost of goods sold, so this time the error '
                  'pushes cost of goods sold up rather than down.' % (_Y2, _Y1),
         'R2'),

        ('task', 'Exercise 7B',
         'Trace the same error through the following year.',
         'Read and complete.',
         ['Exercise 7A, and the two paragraphs above.'],
         ['The figure carried into year two is the opening inventory, and it is '
          'added rather than subtracted.',
          'That one difference in sign is why every effect reverses.',
          'The last blank is what has happened to retained earnings by the end of '
          'year two.']),
        ('fill', 'R2',
         ['Opening inventory for %s is overstated by %s, because it is last '
          'year’s closing figure carried forward.' % (_Y2, money(_ERR)),
          'Opening inventory is {added} in arriving at cost of goods sold, not '
          'subtracted, so this time the error raises cost of goods sold. Cost of '
          'goods sold is overstated by %s and net income is {understated} by the '
          'same amount.' % money(_ERR),
          'Over the two years together, cost of goods sold is understated once and '
          'overstated once by the same figure, so the cumulative total is '
          '{correct}. The same is true of net income.',
          'And because retained earnings accumulates net income, the %s '
          'overstatement at the end of %s is exactly cancelled by the %s '
          'understatement in %s. By 31 December %s retained earnings is '
          '{right}.' % (money(_ERR), _Y1, money(_ERR), _Y2, _Y2)],
         {'added': ('Opening is added, closing is subtracted.', ''),
          'understated': ('The mirror image of year one.', ''),
          'correct': ('Two equal errors in opposite directions.', ''),
          'right': ('The balance sheet corrects itself after two years.',
                    'Students expect a correcting entry in year two. The '
                    'arithmetic does it without one.')},
         ['subtracted', 'overstated', 'wrong']),
        ('fig', 'timeline', 'The error, from miscount to disappearance',
         [('31 December %s' % _Y1,
           'closing inventory, income and retained earnings all overstated %s'
           % money(_ERR), RUST),
          ('During %s' % _Y2,
           'opening inventory too high; cost of goods sold too high; income too '
           'low', FIFO),
          ('31 December %s' % _Y2,
           'retained earnings correct; the error has gone', OK)],
         'Two wrong years and a right balance sheet at the end of them. Nobody '
         'made a correcting entry.'),

        ('prose', 'An error that reverses itself like this is called a '
                  'counterbalancing error, and most inventory errors are of that '
                  'kind. The name describes the arithmetic and makes no promise '
                  'about what the company has to do, which is the subject of Part '
                  '4.', 'R2'),

        ('task', 'Exercise 7C',
         'Set out the two years side by side and state the cumulative position.',
         'Complete the table. Write the direction and the amount in each cell.',
         ['Exercises 7A and 7B'],
         ['Work down each column rather than across each row.',
          'Two rows have a dash in one of the year columns. Decide which before '
          'you start.',
          'The last column is the cumulative position, and most of it is one '
          'word.']),
        ('table', _EFFH, _eff(blank=True), SLATE, _EFFW),
        ('answers', 18),
        ('fig', 'scale',
         'WHAT COUNTERBALANCING MEANS',
         ['The cumulative income error is nil',
          'Retained earnings is right after two years',
          'No correcting entry is needed for the balance sheet',
          'The arithmetic undoes itself'],
         'WHAT IT DOES NOT MEAN',
         ['Two published years were still wrong',
          'Decisions were taken on wrong figures',
          'The comparatives still need restating',
          'Nobody needs to be told']),

        ('part', 'Part 3 · The grid',
         'any error, either direction'),

        ('task', 'Exercise 7D',
         'Build the grid for all four error directions.',
         'Complete the table. Write overstated or understated in each cell.',
         ['Exercise 7C'],
         ['The first row is the case you have just worked. Fill it from memory and '
          'use it to check the pattern.',
          'Rows two to four are each the reverse of one of the others. You should '
          'be able to derive them rather than reason them out again.',
          'The last row is different in kind. Think about what happens to the '
          'identity when purchases are recorded but the goods are not counted.']),
        ('table', _GRIDH, _grid(blank=True), FIFO, _GRIDW),
        ('answers', 15),
        ('fig', 'matrix', 'The two rules that generate the whole grid',
         ['Closing inventory is too high', 'Closing inventory is too low',
          'Opening inventory is too high', 'Opening inventory is too low'],
         ['Cost of goods sold', 'Net income'],
         [['Too low', 'Too high'],
          ['Too high', 'Too low'],
          ['Too high', 'Too low'],
          ['Too low', 'Too high']],
         'Closing inventory is subtracted and opening inventory is added. Those '
         'two facts generate every row, and memorising the grid is unnecessary.'),

        ('part', 'Part 4 · The error that does not unwind',
         'and what still has to be done'),

        ('task', 'Exercise 7E',
         'Identify the error that does not counterbalance, and say what the '
         'company must still do.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercise 7D'],
         ['Blank 1 is the condition under which an inventory error does not '
          'reverse in the following year.',
          'Blank 3 is what the company must do when the amounts are material, even '
          'though the arithmetic has already fixed itself.',
          'The last blank names the thing a reader has lost that no reversal '
          'restores.']),
        ('fill', 'R3',
         ['An inventory error counterbalances because last year’s closing '
          'figure becomes this year’s opening figure. The one case in which '
          'that does not happen is where the error is in the {pricing} rather than '
          'in the count — a permanent misapplication of a cost flow '
          'assumption, say, which is repeated in every subsequent year and '
          'therefore never reverses.',
          'The last row of the grid is a related case. Goods received and recorded '
          'as purchases but left out of the count overstate cost of goods sold, '
          'and because the goods are physically present they will be counted next '
          'year, so the error does {reverse} — but working capital was '
          'understated at a reporting date, and a covenant tested at that date was '
          'tested against the wrong figure.',
          'Where the amounts are material the company must {restate} the '
          'comparative figures, even though retained earnings has already '
          'corrected itself, because a reader comparing the two years is still '
          'being shown wrong numbers.',
          'And that is the point this handout ends on. Counterbalancing fixes the '
          'arithmetic. It does not give back the two years of {decisions} that '
          'were taken on figures that were wrong.'],
         {'pricing': ('A repeated pricing error never reverses.', ''),
          'reverse': ('The goods are there and will be counted.', ''),
          'restate': ('Required where material, counterbalanced or not.',
                      'Students conclude that a counterbalanced error needs no '
                      'action. The comparatives are still wrong.'),
          'decisions': ('What no reversal restores.', '')},
         ['count', 'ignore', 'disclosures']),
        ('fig', 'fork', 'What to do when an inventory error is found',
         [('Has it already counterbalanced, and is it immaterial?',
           'Correct the records; no restatement required', OK),
          ('Has it counterbalanced, but the amounts are material?',
           'Restate the comparatives — the published figures are wrong', WA),
          ('Does it repeat every year, so it never reverses?',
           'Correct it and restate; it will not fix itself', RUST)]),

        ('watch', 'Read the stem for which inventory figure is wrong — '
                  'opening or closing — before anything else. Closing is '
                  'subtracted and opening is added, and that single fact decides '
                  'every direction in the question.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Closing inventory at the end of year 1 is overstated by $30,000. '
                'The effect on year 1 net income is:',
         ['Understated by $30,000', 'Overstated by $30,000', 'No effect',
          'Overstated by $60,000'],
         1, 'Level B',
         'Closing inventory is deducted in computing cost of goods sold, so cost '
         'of goods sold is understated and net income is overstated by the same '
         '$30,000. (A) misses the second flip in direction.'),

        ('mcq', 'The same $30,000 overstatement of year 1 closing inventory affects '
                'year 2 net income how?',
         ['Overstated by $30,000', 'Understated by $30,000', 'No effect',
          'Understated by $60,000'],
         1, 'Level B',
         'Year 1 closing inventory is year 2 opening inventory, which is added in '
         'computing cost of goods sold. Cost of goods sold is overstated and net '
         'income understated — the exact reverse of year 1, which is what '
         'counterbalancing means.'),

        ('mcq', 'After two years, the cumulative effect of a counterbalancing '
                'inventory error on retained earnings is:',
         ['An overstatement equal to the error',
          'An understatement equal to the error', 'Nil',
          'Twice the amount of the error'],
         2, 'Level B',
         'Two equal errors in opposite directions cancel, so retained earnings is '
         'correct at the end of year 2. No correcting entry is required for the '
         'balance sheet — which is not the same as saying no action is '
         'required at all.'),

        ('mcq', 'Goods received before the year end are recorded as purchases but '
                'are omitted from the physical count. The effect on that '
                'year’s figures is:',
         ['Cost of goods sold understated and net income overstated',
          'Cost of goods sold overstated and net income understated',
          'No effect on either, since purchases and inventory offset',
          'Inventory overstated and net income overstated'],
         1, 'Level C',
         'The purchase is in the pool but the goods are missing from closing '
         'inventory, so cost of goods sold absorbs them and is too high. (C) is '
         'the plausible-sounding trap: the two entries do not offset, because only '
         'one of them was made.'),

        ('mcq', 'Which of the following inventory errors does NOT counterbalance?',
         ['A pallet counted twice at the year end',
          'Goods in transit omitted from the count',
          'A cost flow assumption applied incorrectly in every year',
          'Closing inventory priced at the wrong unit cost in one year only'],
         2, 'Level C',
         'An error repeated every year never becomes a prior opening balance that '
         'reverses, so it accumulates. The other three are one-off errors in a '
         'closing figure, and every one of those counterbalances in the following '
         'year.'),

        ('mcq', 'A material inventory error from two years ago has fully '
                'counterbalanced. The company should:',
         ['Do nothing, since retained earnings is now correct',
          'Restate the comparative figures, because the published results for '
          'those years were wrong',
          'Record a correcting entry in the current year',
          'Disclose the error only if it recurs'],
         1, 'Level C',
         'Counterbalancing fixes the cumulative arithmetic and leaves two '
         'published years wrong. (A) is the single most common error of judgement '
         'in this topic. (C) would introduce a new error, since the balance sheet '
         'is already right.'),

        ('mcq', 'Closing inventory is understated by $20,000. Working capital at '
                'that date is:',
         ['Overstated by $20,000', 'Understated by $20,000', 'Unaffected',
          'Understated by $40,000'],
         1, 'Level A',
         'Inventory is a current asset, so understating it understates current '
         'assets and therefore working capital by the same amount. The current '
         'ratio falls with it, which matters wherever a covenant is tested at a '
         'reporting date.'),

        ('tip', 'Draw the identity before you answer: opening plus purchases less '
                'closing equals cost of goods sold. Mark which figure the question '
                'says is wrong, follow the sign, and flip once more at net income. '
                'Three steps, and no memorisation.'),
    ],

    key_extra=[
        ('h3', 'Exercise 7C · the completed two-year table'),
        ('table', _EFFH, _eff(), SLATE, _EFFW),
        ('h3', 'Exercise 7D · the completed grid'),
        ('table', _GRIDH, _grid(), FIFO, _GRIDW),
        ('bullets', [
            'Closing inventory is subtracted; opening inventory is added. Those '
            'two facts generate every cell above.',
            'An error in a closing figure counterbalances in the following year '
            'and leaves retained earnings correct.',
            'It leaves two published years wrong, and material amounts must still '
            'be restated.',
        ]),
    ],
)
