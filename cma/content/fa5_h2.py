# -*- coding: utf-8 -*-
"""Volume 5, Handout 2 — What Each Method Does to the Statements.

Covers the second part of A.2(l): determining the effect on the financial
statements of using different depreciation methods.
"""
from fadata import N, D, Y, PY
from data import money, num

SL, DDB, SYD, UOP = '2B6CB0', '6D3F7E', '1F7A6A', 'C9762E'
SLATE, RUST = '44506B', 'B2531F'

PROFIT_BEFORE = 400_000          # the machine's own pre-depreciation result
TAX = 0.25

_EFFH = ['Year 1', 'Straight line', 'Double declining balance']
_EFFW = [34, 33, 33]


def _eff(blank=False):
    def c(v):
        return '' if blank else v
    s, d = D.sl[0], D.ddb[0]
    return [
        ['Result before depreciation', money(PROFIT_BEFORE),
         money(PROFIT_BEFORE)],
        ['Depreciation charged', c(money(-s)), c(money(-d))],
        ['Profit before tax', c(money(PROFIT_BEFORE - s)),
         c(money(PROFIT_BEFORE - d))],
        ['Tax at %d%%' % (TAX * 100), c(money(-(PROFIT_BEFORE - s) * TAX)),
         c(money(-(PROFIT_BEFORE - d) * TAX))],
        ['Profit after tax', c(money((PROFIT_BEFORE - s) * (1 - TAX))),
         c(money((PROFIT_BEFORE - d) * (1 - TAX)))],
        ['Carrying amount at the year end', c(money(D.cost - s)),
         c(money(D.cost - d))],
        ['Cash generated', c(money(PROFIT_BEFORE)), c(money(PROFIT_BEFORE))],
    ]


_CARH = ['End of year', 'Straight line', 'Double declining balance',
         'Difference']
_CARW = [20, 27, 27, 26]


def _carry(blank=False):
    def c(v):
        return '' if blank else v
    out, accs, accd = [], 0.0, 0.0
    for i in range(D.life):
        accs += D.sl[i]
        accd += D.ddb[i]
        out.append([str(i + 1), c(money(D.cost - accs)), c(money(D.cost - accd)),
                    c(money((D.cost - accd) - (D.cost - accs)))])
    return out


HANDOUT = dict(
    n=2,
    title='What Each Method Does to the Statements',
    subtitle='The method that reports the lowest profit in year 1 reports the '
             'highest in year 5. Over five years it makes no difference at all, '
             'except to tax.',
    register='R2 throughout',

    lang=dict(
        register='R2 textbook English throughout. The comparison in Part 4 is '
                 'the one an exam asks for.',
        collocations=['charge depreciation against profit',
                      'reduce the carrying amount',
                      'defer tax into a later year',
                      'report a lower profit in the early years',
                      'reverse in the later years',
                      'leave cash unaffected'],
        pairs=['charge / payment', 'early years / later years',
               'reported profit / cash generated',
               'book depreciation / tax depreciation'],
        nots=['Depreciation does not move cash. The cash left when the asset was '
              'bought, and the annual charge moves nothing.',
              'An accelerated method does not reduce total profit. It moves '
              'profit between years, and nothing else.'],
    ),

    objectives=[
        'Say what depreciation does to each of the four statements.',
        'Compare reported profit under two methods in the same year.',
        'Trace the carrying amount under two methods across the whole life.',
        'Explain why the choice of method does not affect cash.',
        'Say what remains different after the asset is fully depreciated.',
    ],

    terms=[
        ('book depreciation',
         'The depreciation reported in the financial statements.',
         'الإهلاك الدفتري',
         'Frequently different from the figure claimed for tax, and that '
         'difference is the commonest source of a deferred tax liability.'),
        ('tax depreciation',
         'The deduction the tax rules allow, which follows its own schedule.',
         'الإهلاك الضريبي',
         'A company may use straight line in its accounts and an accelerated '
         'schedule for tax, and most do.'),
    ],

    blocks=[
        ('scene', 'The same machine, two income statements', [
            'Handout 1 produced four depreciation schedules for the %s. This '
            'handout takes two of them — the slowest and the fastest — '
            'and asks what each does to the figures a reader sees.' % D.name,
            'Assume the machine generates %s a year before depreciation, and that '
            'tax is charged at %d%% on the result.'
            % (money(PROFIT_BEFORE), TAX * 100),
            'In year 1 the straight line method charges %s and double declining '
            'balance charges %s. That is a difference of %s on one machine, and '
            'it flows straight through to reported profit.'
            % (money(D.sl[0]), money(D.ddb[0]),
               money(D.ddb[0] - D.sl[0])),
        ]),
        ('fig', 'ranked', 'Year 1 profit after tax, under two methods',
         [('Straight line', (PROFIT_BEFORE - D.sl[0]) * (1 - TAX),
           money((PROFIT_BEFORE - D.sl[0]) * (1 - TAX)), SL),
          ('Double declining balance',
           (PROFIT_BEFORE - D.ddb[0]) * (1 - TAX),
           money((PROFIT_BEFORE - D.ddb[0]) * (1 - TAX)), DDB),
          ('Cash generated — identical under both', PROFIT_BEFORE,
           money(PROFIT_BEFORE), SYD)],
         'The third bar is the one to hold on to. Whatever the first two do, the '
         'cash the machine generates is the same figure.'),

        ('part', 'Part 1 · What a depreciation charge actually does',
         'four statements, three of them affected'),

        ('task', 'Exercise 2A',
         'Say what the charge does to each statement, and which one it leaves '
         'alone.',
         'Read and complete. Write one word in each space.',
         ['Handout 1, for the four schedules.'],
         ['Three statements move and one does not. Decide which before you start.',
          'Blank 2 is the contra account the charge accumulates in.',
          'The last blank is why the cash flow statement adds the charge back.']),
        ('fill', 'R2',
         ['The charge is an expense, so it reduces the year’s {profit}, and '
          'through profit it reduces retained earnings in the equity statement.',
          'On the balance sheet it does not reduce the asset account directly. It '
          'accumulates in a contra account called {accumulated} depreciation, so '
          'that a reader can still see both the original cost and the amount '
          'written off so far.',
          'The difference between those two is the {carrying} amount, and it is '
          'the figure that enters total assets.',
          'The cash flow statement is the one that does not really move. No cash '
          'leaves the company when the charge is made — the cash left when '
          'the machine was {bought} — so the indirect method adds the charge '
          'back, and it cancels its own effect on net income exactly.'],
         {'profit': ('An expense, so profit falls.', ''),
          'accumulated': ('A contra account, so both figures stay visible.', ''),
          'carrying': ('Cost less accumulated depreciation.', ''),
          'bought': ('The cash moved years ago.',
                     'Students describe depreciation as a source of cash. The '
                     'add-back removes a deduction; it brings nothing in.')},
         ['cash', 'inventory', 'sold']),
        ('fig', 'matrix', 'One charge, four statements',
         ['Income statement', 'Balance sheet', 'Changes in equity', 'Cash flows'],
         ['What the charge does', 'By how much'],
         [['Profit falls', 'The full charge'],
          ['Carrying amount falls, through a contra account', 'The full charge'],
          ['Retained earnings falls, through profit', 'The charge after tax'],
          ['Nothing — added back in the operating section', 'Nil']],
         'Three statements move. The fourth is the reason the add-back in Volume 1 '
         'Handout 8 existed at all.'),

        ('part', 'Part 2 · Year one, two ways',
         'the comparison a reader actually sees'),

        ('task', 'Exercise 2B',
         'Prepare year 1 under both methods and compare every line.',
         'Complete the table. The first row and the last are given, and they are '
         'the same in both columns.',
         ['Exercise 2A'],
         ['Only one input differs between the two columns: the depreciation '
          'charge. Everything else follows from it.',
          'The tax line is %d%% of profit before tax, computed separately in each '
          'column.' % (TAX * 100),
          'The last row is deliberately identical. Make sure you can say why '
          'before you move on.']),
        ('table', _EFFH, _eff(blank=True), SLATE, _EFFW),
        ('answers', 12),
        ('fig', 'scale',
         'WHAT CHANGES BETWEEN THE COLUMNS',
         ['Depreciation charged',
          'Profit before and after tax',
          'The tax charge for the year',
          'The carrying amount of the machine'],
         'WHAT DOES NOT',
         ['The result before depreciation',
          'The cash the machine generated',
          'The total written off over five years',
          'The residual value at the end']),

        ('part', 'Part 3 · Across the whole life',
         'where the comparison reverses'),

        ('prose', 'A single year is a misleading place to compare two methods, '
                  'because the comparison reverses. The method charging more now '
                  'must charge less later: both write off the same %s.'
                  % money(D.depreciable), 'R2'),
        ('prose', 'Setting the carrying amounts side by side across all five years '
                  'shows exactly where the crossover happens, and how far apart '
                  'the two balance sheets get before they converge again.', 'R2'),

        ('task', 'Exercise 2C',
         'Trace the carrying amount under both methods across the whole life.',
         'Complete the table. The last column is the gap between the two.',
         ['Exercise 2B', 'Handout 1, for both schedules.'],
         ['Each carrying amount is cost less the accumulated depreciation to '
          'date.',
          'The gap widens for the first few years and then narrows.',
          'The gap in the final row must be nil. If it is not, one of your '
          'schedules does not end at the residual value.']),
        ('table', _CARH, _carry(blank=True), SLATE, _CARW),
        ('answers', 15),
        ('fig', 'timeline', 'The two carrying amounts, and where they meet again',
         [('End of year 1', 'straight line %s, accelerated %s'
           % (money(D.cost - D.sl[0]), money(D.cost - D.ddb[0])), SL),
          ('End of year 3', 'the gap is at its widest', DDB),
          ('End of year %d' % D.life, 'both at the residual value of %s'
           % money(D.residual), SYD)],
         'The balance sheets diverge and then converge. By the end of the life the '
         'two methods have told exactly the same story.'),

        ('task', 'Exercise 2D',
         'Say why the choice of method leaves cash unaffected.',
         'Read and complete.',
         ['Exercise 2C'],
         ['Blank 1 is the year in which the cash actually moved.',
          'Blank 3 is the one real effect the choice of method has on cash, and it '
          'is indirect.',
          'The last blank is the schedule that determines that effect, and it is '
          'not the one in the accounts.']),
        ('fill', 'R2',
         ['The machine cost %s and the company paid for it in the year it was '
          '{bought}. That was an investing outflow, and it happened once.'
          % money(D.cost),
          'Every charge after that is an allocation of an amount already spent. '
          'Nothing leaves the bank when the charge is made, which is why the '
          'operating section of the cash flow statement adds it {back}.',
          'There is one real cash effect and it runs through {tax}. A larger '
          'depreciation deduction means a smaller taxable profit and a smaller '
          'payment to the tax authority this year.',
          'But that effect follows the {tax} depreciation schedule, not the one in '
          'the financial statements. A company may charge straight line in its '
          'accounts and claim an accelerated schedule for tax, and most of them '
          'do, so the method chosen for reporting usually has no cash effect at '
          'all.'],
         {'bought': ('One outflow, in one year.', ''),
          'back': ('An add-back, not an inflow.', ''),
          'tax': ('The only route from depreciation to cash.',
                  'Students assume the reporting method drives the tax bill. The '
                  'tax rules have their own schedule.')},
         ['sold', 'forward', 'revenue']),
        ('prose', 'The two schedules even have their own names. Book '
                  'depreciation is the figure reported in the financial '
                  'statements; tax depreciation is the deduction the tax rules '
                  'allow. They are computed separately and they rarely agree.',
                  'R2'),
        ('fig', 'fork', 'Does the depreciation method affect cash?',
         [('Does the charge itself move money?',
           'NO — the cash left when the asset was bought', SL),
          ('Does a bigger deduction reduce the tax paid?',
           'YES — but it follows the tax schedule, not the accounts', UOP),
          ('So does the reporting choice affect cash?',
           'Usually not at all, because the two schedules are separate', SLATE)]),

        ('part', 'Part 4 · After five years',
         'what is left of the difference'),

        ('task', 'Exercise 2E',
         'State what remains different once the asset is fully depreciated.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercises 2A to 2D'],
         ['Blank 1 is the cumulative difference in reported profit over the five '
          'years.',
          'Blank 3 is the only thing that genuinely differs, and it is not an '
          'amount.',
          'The last blank is the comparison a reader cannot make without knowing '
          'which method was used.']),
        ('fill', 'R2',
         ['Over the five years both methods charge %s. The cumulative difference '
          'in reported profit is therefore {nil}, and the carrying amount at the '
          'end is %s under both.' % (money(D.depreciable), money(D.residual)),
          'In the early years the accelerated method reports the lower profit and '
          'the lower carrying amount. In the later years it reports the higher '
          'profit, because the charge has already been taken. The two statements '
          'cross over and then {converge}.',
          'What genuinely differs is the {timing} — which year each dollar of '
          'expense falls in — and nothing else. The total expense, the total '
          'profit and the final carrying amount are identical.',
          'The practical consequence is for a reader rather than for the company. '
          'Two otherwise identical companies using different methods report '
          'different profits and different assets for years at a time, which is '
          'why the method used must be disclosed and why a {comparison} made '
          'without that disclosure is worthless.'],
         {'nil': ('Both write off %s.' % money(D.depreciable), ''),
          'converge': ('Diverge, cross, converge.', ''),
          'timing': ('Which year, not how much.', ''),
          'comparison': ('Disclosure is what makes it possible.',
                         'Students compare two companies’ margins without '
                         'checking the depreciation policies behind them.')},
         [money(D.depreciable), 'cash', 'total']),
        ('fig', 'ranked', 'The five-year totals, under both methods',
         [('Total depreciation, straight line', sum(D.sl),
           money(sum(D.sl)), SL),
          ('Total depreciation, double declining', sum(D.ddb),
           money(sum(D.ddb)), DDB),
          ('Final carrying amount, both methods', D.residual,
           money(D.residual), SYD)],
         'Identical totals and an identical ending. Every difference this handout '
         'measured has disappeared by the end of the fifth year.'),

        ('watch', 'If a question asks which method gives the higher profit, check '
                  'which year it is asking about. An accelerated method gives the '
                  'lower profit early and the higher profit late, and an answer '
                  'without a year attached to it is not an answer.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'In the first year of an asset’s life, an accelerated '
                'depreciation method compared with straight line produces:',
         ['Higher profit and a higher carrying amount',
          'Lower profit and a lower carrying amount',
          'Lower profit and a higher carrying amount',
          'The same profit and the same carrying amount'],
         1, 'Level B',
         'A bigger charge reduces both profit and the carrying amount. (C) splits '
         'the two, which cannot happen — the same charge drives both. By year '
         '%d the comparison in (A) would be correct.' % D.life),

        ('mcq', 'A company changes from straight line to an accelerated method. '
                'The effect on cash generated from operations is:',
         ['An increase, because depreciation is a source of cash',
          'A decrease, because the charge is larger',
          'None, because depreciation involves no cash movement',
          'An increase equal to the additional charge'],
         2, 'Level B',
         'No cash moves when the charge is made, and the indirect method adds it '
         'back. (A) and (D) describe the persistent myth that depreciation '
         'generates cash — the add-back removes a deduction and brings '
         'nothing in.'),

        ('mcq', 'The machine costs %s with a residual value of %s. At the end of '
                'its %d-year life, the carrying amount under the units of '
                'production method is:'
                % (money(D.cost), money(D.residual), D.life),
         [money(0), money(D.residual), money(D.cost), money(D.depreciable)],
         1, 'Level A',
         'Every method stops at the residual value, which is never depreciated. '
         '(A) is the common error — it would require writing off the whole '
         'cost, including an amount the company expects to recover.'),

        ('mcq', 'Over the entire useful life of an asset, total depreciation under '
                'an accelerated method compared with straight line is:',
         ['Higher', 'Lower', 'The same',
          'Dependent on the residual value'],
         2, 'Level A',
         'Both write off the depreciable amount, so the totals agree; only the '
         'pattern differs. This is the single most useful fact in the topic and '
         'the one that disposes of most wrong answers.'),

        ('mcq', 'A company uses straight line depreciation in its financial '
                'statements and an accelerated schedule for tax. This:',
         ['Is not permitted',
          'Is permitted, and commonly produces a deferred tax liability',
          'Requires the financial statements to be restated',
          'Means the company has made an error'],
         1, 'Level C',
         'The two schedules are independent, and the timing difference between '
         'them is the classic source of a deferred tax liability. (A) confuses '
         'this with the LIFO conformity rule, which applies to inventory and has '
         'no counterpart here.'),

        ('mcq', 'Accumulated depreciation is best described as:',
         ['A fund set aside to replace the asset',
          'A contra asset account holding the total charged since acquisition',
          'An expense of the current period',
          'A liability to be settled when the asset is replaced'],
         1, 'Level A',
         'It is a contra asset, presented separately so that both cost and the '
         'amount written off remain visible. (A) and (D) both imply money or an '
         'obligation, and neither exists.'),

        ('mcq', 'Two identical companies report different profits because one uses '
                'straight line and the other an accelerated method. An analyst '
                'comparing them should:',
         ['Treat the difference as a real difference in performance',
          'Read the disclosed depreciation policies and adjust before comparing',
          'Use the company with the higher profit as the benchmark',
          'Ignore depreciation entirely'],
         1, 'Level C',
         'The difference is a policy difference, not a performance one, and the '
         'policies are disclosed precisely so that the adjustment can be made. (D) '
         'overcorrects: depreciation is a real expense, and discarding it would '
         'flatter an asset-heavy company.'),

        ('tip', 'Any comparison question in this topic needs two things written '
                'down before you answer: which year, and which direction prices '
                'or charges are moving. Half the wrong options are correct '
                'statements about a different year.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2B · year 1 under both methods'),
        ('table', _EFFH, _eff(), SLATE, _EFFW),
        ('h3', 'Exercise 2C · the carrying amounts across the life'),
        ('table', _CARH, _carry(), SLATE, _CARW),
        ('bullets', [
            'The accelerated method reports lower profit in the early years and '
            'higher profit in the later ones.',
            'Both reach a carrying amount of %s at the end of year %d.'
            % (money(D.residual), D.life),
            'Cash is unaffected in both. The only route from depreciation to cash '
            'runs through the tax schedule, which is separate from the accounts.',
        ]),
    ],
)
