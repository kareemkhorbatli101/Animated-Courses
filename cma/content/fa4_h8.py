# -*- coding: utf-8 -*-
"""Volume 4, Handout 8 — Choosing a Method, and Defending the Choice.

Covers A.2(h) the advantages and disadvantages of the different inventory
methods, and A.2(i) recommending a method and cost flow assumption for a
company given a set of facts.
"""
from fadata import N, I, Y, PY
from data import money, num

FIFO, LIFO, WA, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_ADVH = ['', 'FIFO', 'LIFO', 'Weighted average']
_ADVW = [26, 25, 25, 24]

_ADV = [
    ['Balance sheet', 'Current costs — the best of the three',
     'Costs that may be decades old', 'Between the two'],
    ['Income statement',
     'Includes a holding gain in a rising market',
     'Current costs against current revenue — the best of the three',
     'Between the two'],
    ['Tax, when prices rise', 'Highest tax paid now', 'Lowest tax paid now',
     'Between the two'],
    ['Available under IFRS', 'Yes', 'No', 'Yes'],
    ['Risk of a distorting event', 'Low', 'A liquidation can inflate profit',
     'Low'],
    ['Record-keeping', 'Straightforward', 'Layers must be tracked for years',
     'Simplest of the three'],
]

_CASEH = ['The company', 'Recommend', 'The reason that decides it']
_CASEW = [38, 18, 44]


def _case(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['A US distributor with steadily rising costs and a strong preference for '
         'cash', c('LIFO'), c('It defers tax while prices rise, and the company '
                              'reports to US GAAP')],
        ['A company that reports under IFRS', c('FIFO or weighted average'),
         c('LIFO is prohibited under IFRS, so the choice is between the other '
           'two')],
        ['A fuel depot holding one grade of oil in a single tank',
         c('Weighted average'),
         c('The units are physically indistinguishable, so no layer has meaning')],
        ['A dealer in numbered industrial machines', c('Specific identification'),
         c('The units are not interchangeable and each one’s cost is known')],
        ['A company with a bank covenant on its current ratio',
         c('FIFO or weighted average'),
         c('LIFO reports the lowest inventory, which is the covenant’s '
           'numerator')],
    ]


HANDOUT = dict(
    n=8,
    title='Choosing a Method, and Defending the Choice',
    subtitle='Four methods, each better at something and worse at something else. '
             'The exam asks you to choose, and to say what you traded away.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 for the final case, which is '
                 'written the way a Case-Based Question frames it.',
        collocations=['recommend a method for a company',
                      'apply a method consistently', 'disclose the method used',
                      'justify a change in accounting principle',
                      'weigh the balance sheet against the income statement',
                      'satisfy a covenant'],
        pairs=['recommend / require', 'advantage / trade-off',
               'consistency / comparability', 'change of method / error'],
        nots=['There is no best method. Each one is better on one statement and '
              'worse on the other, and the question is which matters here.',
              'Consistency does not forbid a change. It requires that a change be '
              'justified and disclosed.'],
    ),

    objectives=[
        'State the main advantage and the main disadvantage of each method.',
        'Recommend a method for a company given its circumstances.',
        'Say what the recommendation trades away.',
        'State what consistency requires and what it permits.',
        'Say what must be disclosed about the method chosen.',
    ],

    terms=[
        ('consistency',
         'Applying the same accounting method from one period to the next.',
         'الثبات',
         'Not a prohibition on change. It requires that a change be justified as '
         'preferable and that its effect be disclosed.'),
        ('change in accounting principle',
         'A move from one acceptable method to another.',
         'التغير في السياسة المحاسبية',
         'Applied retrospectively, with prior periods restated, so that a reader '
         'can still compare the years.'),
        ('preferability',
         'The requirement that a new method be demonstrably better, not merely '
         'different.', 'الأفضلية',
         'It exists to stop a company changing method whenever the result would '
         'flatter this year.'),
    ],

    blocks=[
        ('scene', 'Seven handouts of mechanics, one of judgement', [
            'You can now measure inventory under four methods, apply either '
            'write-down rule to the result, and trace an error through two years '
            'of it.',
            'What you have not yet been asked is which method a company should '
            'use. That question is Level C in the learning outcomes, it is where '
            'the Case-Based Questions live, and it has no single right answer.',
            'What it does have is a right structure. Name what each method is good '
            'at, name what it costs, identify which of those matters to this '
            'company, and say so.',
            'This handout builds that structure and then applies it to five '
            'companies.',
        ]),
        ('fig', 'scale',
         'WHAT FIFO IS GOOD AT',
         ['A balance sheet carrying current costs',
          'Simple records, no layers to track',
          'Permitted under both US GAAP and IFRS',
          'No liquidation risk at all'],
         'WHAT LIFO IS GOOD AT',
         ['An income statement matching current costs',
          'Deferring tax while prices rise',
          'Keeping holding gains out of margin',
          'Nothing else — and it is US-only']),

        ('part', 'Part 1 · What each method is good at',
         'and what it costs'),

        ('task', 'Exercise 8A',
         'State the main advantage and disadvantage of each method.',
         'Read and complete. Write one word in each space.',
         ['Handouts 2, 3 and 4, for how each method behaves.'],
         ['Each method is better on one statement and worse on the other. Name '
          'the statement in each case.',
          'Blank 3 is the one thing LIFO cannot do, and it is geographical.',
          'The last blank is the practical advantage of the weighted average that '
          'has nothing to do with either statement.']),
        ('fill', 'R2',
         ['FIFO leaves the newest costs in inventory, so its {balance} sheet '
          'figure is close to what the goods would cost today. Its weakness is on '
          'the other statement: in a rising market its margin includes a holding '
          'gain that cannot be repeated.',
          'LIFO is the reverse. It charges the newest costs against revenue, so '
          'its {income} statement matches current costs against current revenue, '
          'and its balance sheet is left carrying costs that may be decades old.',
          'LIFO also carries two burdens FIFO does not. Layers have to be tracked '
          'for as long as they survive, and the method is not permitted under '
          '{IFRS} at all, so a company reporting under those standards cannot '
          'choose it.',
          'The weighted average sits between the two on both statements, which '
          'makes it nobody’s first choice on principle and a sensible one in '
          'practice. Its real advantage is {simplicity}: one rate, no layers, and '
          'no liquidation to disclose.'],
         {'balance': ('Current costs on the balance sheet.', ''),
          'income': ('Current costs against current revenue.', ''),
          'IFRS': ('Prohibited under IFRS; permitted under US GAAP.',
                   'Students recommend LIFO for a company that reports under '
                   'IFRS, which is not a trade-off but an impossibility.'),
          'simplicity': ('One rate, no layers, no liquidation.', '')},
         ['margin', 'GAAP', 'accuracy']),
        ('table', _ADVH, _ADV, SLATE, _ADVW),
        ('fig', 'matrix', 'Each method wins one statement and loses the other',
         ['FIFO', 'LIFO', 'Weighted average', 'Specific identification'],
         ['Better on', 'Worse on'],
         [['The balance sheet', 'The income statement, in a rising market'],
          ['The income statement', 'The balance sheet, and record-keeping'],
          ['Neither, and both', 'Nothing in particular'],
          ['Both, where it can be used', 'Only usable for unique items']],
         'The third row is why the weighted average is so widely used, and the '
         'fourth is why specific identification is so rarely available.'),

        ('part', 'Part 2 · Recommending a method',
         'five companies, five answers'),

        ('prose', 'A recommendation is only as good as the reason attached to it. '
                  'An examiner marking a Case-Based Question is looking for the '
                  'fact in the scenario that decides the answer, not for the name '
                  'of a method.', 'R2'),
        ('prose', 'Two kinds of fact decide these questions. Some remove options '
                  'altogether: a company reporting under IFRS cannot use LIFO, and '
                  'a company whose units are not interchangeable must use specific '
                  'identification. Others weigh one statement against the other, '
                  'and those are the ones to argue.', 'R2'),

        ('task', 'Exercise 8B',
         'Recommend a method for five companies, and give the deciding reason.',
         'Complete the table. One method and one reason in each row.',
         ['Exercise 8A, and the two paragraphs above.'],
         ['Look first for a fact that removes an option. Two of these five are '
          'decided that way and need no argument at all.',
          'The fuel depot is about physical indistinguishability, not about '
          'prices.',
          'The last row is about which statement the company actually cares '
          'about, and it is not the income statement.']),
        ('table', _CASEH, _case(blank=True), FIFO, _CASEW),
        ('answers', 10),
        ('fig', 'fork', 'Ask the removing questions first',
         [('Does the company report under IFRS?',
           'YES → LIFO is out; choose between FIFO and weighted average',
           RUST),
          ('Are the units unique and individually tracked?',
           'YES → specific identification is required, not chosen', WA),
          ('Neither applies?',
           'Now argue: which statement does this company most need to be right?',
           FIFO)]),

        ('part', 'Part 3 · Defending the choice',
         'the part that earns the marks'),

        ('task', 'Exercise 8C',
         'Say what a recommendation has to include besides the name of a method.',
         'Read and complete.',
         ['Exercise 8B'],
         ['Blank 1 is what a recommendation is worthless without.',
          'Blank 3 is the thing a good answer names even though the company '
          'accepted it.',
          'The last blank is what a reader needs in order to compare this company '
          'with another.']),
        ('fill', 'R2',
         ['A method named without a {reason} earns nothing. The reason has to '
          'point at a fact in the scenario — the reporting framework, the '
          'direction of prices, the nature of the units, a covenant — and '
          'show why that fact decides the answer.',
          'A good answer then names what the choice {costs}. Recommending LIFO to '
          'a US distributor for the tax deferral is right, and it is better if you '
          'add that the company accepts a lower reported margin and an inventory '
          'figure that will drift further from current costs every year.',
          'Where the company is choosing between methods rather than being forced '
          'into one, the answer should also say which {statement} the company most '
          'needs to be right, because that is the trade being made.',
          'Finally, whichever method is chosen, the company must disclose it. '
          'Without that disclosure a reader cannot restate the figures, and '
          'without restatement two companies cannot be {compared}.'],
         {'reason': ('A method name alone earns nothing.', ''),
          'costs': ('Name what was traded away.',
                    'Students name a method and stop. The examiner is marking the '
                    'reasoning, and the trade-off is half of it.'),
          'statement': ('Which statement does this company need to be right?', ''),
          'compared': ('Disclosure is what makes comparison possible.', '')},
         ['method', 'gains', 'price']),
        ('fig', 'ranked', 'What a complete answer contains',
         [('The method recommended', 1, 'necessary, not sufficient', SLATE),
          ('The fact in the scenario that decides it', 2, 'where the marks are',
           FIFO),
          ('What the choice trades away', 3, 'the second half of the marks', WA),
          ('What must be disclosed', 4, 'often the final mark', LIFO)],
         'The bar is the order to write them in, not an amount. Most lost marks '
         'are in the second and third rows.'),

        ('part', 'Part 4 · Changing the method',
         'consistency, and what it actually requires'),

        ('prose', 'Moving from one acceptable method to another is a change in '
                  'accounting principle, and the standards do not forbid it. What '
                  'they require is preferability: the company must be able to show '
                  'that the new method is better, not merely that it produces a '
                  'number the company prefers.', 'R2'),

        ('task', 'Exercise 8D',
         'State what consistency requires, and what it permits.',
         'Sort each statement into the column that says whether it is true.',
         ['Exercise 8C'],
         ['Consistency is often misread as a prohibition. Two of these statements '
          'misread it in exactly that way.',
          'A change of method is applied to prior years as well, so that the '
          'comparison survives.',
          'The requirement that a new method be better rather than merely '
          'different has a name.']),
        ('sortgrid',
         ['Statement about changing an inventory method', 'TRUE', 'FALSE'],
         ['A company may never change its inventory method',
          'A change must be justified as preferable, not merely different',
          'A change is applied retrospectively, with prior periods restated',
          'A change may be made whenever the new method gives a better result '
          'this year',
          'The effect of the change must be disclosed',
          'A change of method is treated in the same way as the correction of an '
          'error'],
         ['FALSE', 'TRUE', 'TRUE', 'FALSE', 'TRUE', 'FALSE'],
         'A change in principle and the correction of an error are both applied '
         'retrospectively and are not the same thing: one is a choice, the other '
         'is a mistake.'),
        ('fig', 'timeline', 'What happens when a method is changed',
         [('Before the change', 'prior years reported under the old method',
           SLATE),
          ('The change', 'justified as preferable, and disclosed', WA),
          ('After the change',
           'prior years restated, so the comparison still works', FIFO)],
         'Retrospective application is what protects comparability. Without it a '
         'change of method would break every trend a reader was following.'),

        ('part', 'Part 5 · One case, written out',
         'the way a Case-Based Question frames it'),

        ('task', 'Exercise 8E',
         'Work a full recommendation for one company, including the trade-off.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercises 8A to 8D'],
         ['Read the scenario for the facts that remove options before you weigh '
          'anything.',
          'Blank 2 is the covenant measure that LIFO would damage.',
          'The last blank is what the company gives up by choosing as it does.']),
        ('fill', 'R3',
         ['A US distributor faces steadily rising purchase costs. Its bank '
          'requires a current ratio above 1.5, tested at each year end, and the '
          'margin above that threshold is thin. Management would prefer to pay '
          'less tax.',
          'LIFO would defer tax, which is what management wants. It would also '
          'report the lowest closing inventory of the three methods, and inventory '
          'sits in the numerator of the {current} ratio, so the method that saves '
          'the tax is the method most likely to breach the covenant.',
          'The recommendation is therefore FIFO or weighted average, and the fact '
          'that decides it is the {covenant} rather than the direction of prices. '
          'A breach would make the loan repayable on demand, which is a larger '
          'problem than a year of higher {tax}.',
          'What the company gives up is the deferral: on inventory of this size, '
          'real cash, every year that prices continue to rise. A complete answer '
          'names that cost rather than pretending the recommendation is '
          '{free}.'],
         {'current': ('Inventory is in the numerator.', ''),
          'covenant': ('The covenant removes the option; prices only shape it.',
                       ''),
          'tax': ('A breach is worse than a tax bill.', ''),
          'free': ('Every recommendation costs something.',
                   'Students present a recommendation as though it had no '
                   'downside, which is exactly the half of the answer the '
                   'examiner is looking for.')},
         ['quick', 'margin', 'obvious']),
        ('fig', 'scale',
         'WHAT CHOOSING FIFO HERE BUYS',
         ['The covenant holds with room to spare',
          'The loan does not become repayable on demand',
          'A balance sheet carrying current costs',
          'Simpler records'],
         'WHAT IT COSTS',
         ['Tax paid now rather than deferred',
          'Real cash, every year prices rise',
          'A margin that includes a holding gain',
          'A reported profit that flatters the trading']),

        ('watch', 'A Case-Based Question rarely has one defensible answer. It '
                  'almost always has one defensible structure: the deciding fact, '
                  'the recommendation, the trade-off. Write all three even when '
                  'you are unsure of the second.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A company reporting under IFRS asks which cost flow assumption it '
                'should adopt. Which is NOT available to it?',
         ['FIFO', 'Weighted average', 'LIFO', 'Specific identification'],
         2, 'Level A',
         'LIFO is prohibited under IFRS. This is not a trade-off to be weighed but '
         'an option that has been removed, and a question that mentions IFRS has '
         'already eliminated an answer before you start reading the others.'),

        ('mcq', 'A fuel depot stores a single grade of oil in one tank, so that '
                'individual deliveries cannot be distinguished. The most '
                'appropriate method is:',
         ['FIFO, because the oldest oil is drawn off first',
          'Weighted average, because the units are physically '
          'indistinguishable',
          'Specific identification, because the deliveries are documented',
          'LIFO, because the newest oil is at the top of the tank'],
         1, 'Level C',
         'Where units are completely interchangeable, no layer has any meaning and '
         'one average cost is the honest answer. (A) and (D) both reason from the '
         'physical movement of the goods, which Handout 2 established is not what '
         'a cost flow assumption describes.'),

        ('mcq', 'The main advantage claimed for LIFO is that it:',
         ['Reports inventory on the balance sheet at current cost',
          'Matches current costs against current revenue on the income statement',
          'Is the simplest method to apply',
          'Is permitted in all jurisdictions'],
         1, 'Level B',
         'LIFO’s case is entirely about the income statement. (A) describes '
         'FIFO and is precisely LIFO’s weakness. (C) is false — layers '
         'must be tracked for years. (D) is false under IFRS.'),

        ('mcq', 'A company subject to a current ratio covenant is choosing an '
                'inventory method in a period of rising prices. LIFO would:',
         ['Improve the current ratio, by lowering cost of goods sold',
          'Weaken the current ratio, by reporting the lowest inventory figure',
          'Leave the current ratio unaffected',
          'Improve the current ratio, by deferring tax'],
         1, 'Level C',
         'Inventory is in the numerator of the current ratio, and LIFO reports the '
         'lowest inventory of the three methods. (D) confuses a cash benefit with '
         'a ratio effect — the deferred tax does help cash, but the ratio '
         'still falls.'),

        ('mcq', 'A company wishes to change from LIFO to FIFO. Which statement is '
                'correct?',
         ['A change of method is never permitted',
          'The change must be justified as preferable and applied '
          'retrospectively, with prior periods restated',
          'The change is applied to the current year only',
          'The change is treated as the correction of an error'],
         1, 'Level B',
         'Consistency permits change and requires justification, retrospective '
         'application and disclosure. (C) would break every trend a reader was '
         'following, which is exactly what retrospective application prevents. (D) '
         'confuses a choice with a mistake.'),

        ('mcq', 'Which of the following is the strongest argument AGAINST a US '
                'company adopting LIFO?',
         ['It would reduce the tax paid this year',
          'It leaves the balance sheet carrying costs that may be many years out '
          'of date, and exposes reported profit to liquidation effects',
          'It is prohibited under US GAAP',
          'It cannot be applied consistently'],
         1, 'Level C',
         'Those are LIFO’s two real costs. (A) is an argument in favour, '
         'stated as though it were against. (C) is false for a US company — '
         'that is IFRS. (D) is invented.'),

        ('mcq', 'A complete recommendation of an inventory method in a Case-Based '
                'Question should include:',
         ['The name of the method only',
          'The method, the fact in the scenario that decides it, and what the '
          'choice trades away',
          'A calculation of inventory under all four methods',
          'A statement that no method is better than any other'],
         1, 'Level C',
         'The reasoning carries the marks, and the trade-off is half of it. (C) '
         'may be useful working but does not answer the question asked. (D) is '
         'true in the abstract and useless as an answer.'),

        ('tip', 'In any scenario, scan first for a fact that removes an option '
                '— a reporting framework, a covenant, units that are not '
                'interchangeable. Only argue about the statements once no fact '
                'has already decided it for you.'),
    ],

    key_extra=[
        ('h3', 'Exercise 8B · the completed recommendations'),
        ('table', _CASEH, _case(), FIFO, _CASEW),
        ('h3', 'The methods compared'),
        ('table', _ADVH, _ADV, SLATE, _ADVW),
        ('bullets', [
            'FIFO is better on the balance sheet; LIFO is better on the income '
            'statement; the weighted average is between them on both.',
            'Facts that remove options come first: IFRS removes LIFO, and '
            'non-interchangeable units require specific identification.',
            'A recommendation without the deciding fact and the trade-off is half '
            'an answer.',
        ]),
    ],
)
