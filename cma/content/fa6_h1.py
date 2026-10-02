# -*- coding: utf-8 -*-
"""Volume 6, Handout 1 — Trading, Available-for-Sale, Held-to-Maturity.

Covers A.2(j): demonstrating an understanding of the debt security types
trading, available-for-sale and held-to-maturity.
"""
from fadata import N, S, Y, PY
from data import money, num

TRD, AFS, HTM, SLATE = '2B6CB0', '6D3F7E', '1F7A6A', '44506B'
RUST, OK = 'B2531F', 'C9762E'

_CLSH = ['', 'Trading', 'Available for sale', 'Held to maturity']
_CLSW = [28, 24, 24, 24]


def _cls(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['The intention', c('Sell in the near term'),
         c('Neither of the other two'),
         c('Hold until it matures')],
        ['Carried at', c('Fair value'), c('Fair value'), c('Amortised cost')],
        ['Unrealised gains and losses go to',
         c('Net income'), c('Other comprehensive income'),
         c('Nowhere — not recognised')],
        ['Interest income', c('Net income'), c('Net income'), c('Net income')],
        ['Normally classified as', c('Current'),
         c('Current or non-current'), c('By maturity date')],
        ['Available for equity securities?', c('No'), c('No'), c('No')],
    ]


HANDOUT = dict(
    n=1,
    title='Trading, Available-for-Sale, Held-to-Maturity',
    subtitle='Three classifications, decided by what the company intends to do '
             'with the security. Everything else in this volume follows from '
             'that one choice.',
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the three classes are introduced, R2 once the '
                 'consequences are drawn out.',
        collocations=['classify a debt security on acquisition',
                      'intend to hold to maturity',
                      'carry an investment at fair value',
                      'recognise an unrealised gain',
                      'take a gain to other comprehensive income',
                      'reclassify between categories'],
        pairs=['trading / available for sale',
               'realised / unrealised',
               'fair value / amortised cost',
               'intention / ability'],
        nots=['Held to maturity is not about what a company might do. It requires '
              'both the positive intention and the ability to hold.',
              'Available for sale is not a decision. It is what a debt security '
              'is when it is neither of the other two.'],
    ),

    objectives=[
        'Name the three classifications of a debt security and the intention '
        'behind each.',
        'Say what each classification is carried at.',
        'Say where unrealised gains and losses go under each.',
        'State the two conditions for held-to-maturity classification.',
        'Explain why equity securities are outside this scheme entirely.',
    ],

    terms=[
        ('debt security',
         'An instrument representing a creditor relationship: a bond, a note, a '
         'bill.', 'أداة دين',
         'The holder is owed money on fixed terms. That is what makes holding it '
         'to maturity a meaningful idea.'),
        ('trading security',
         'A debt security held with the intention of selling it in the near '
         'term.', 'ورقة مالية للمتاجرة',
         'Carried at fair value, with every movement through net income, because '
         'the company means to realise it soon.'),
        ('available-for-sale security',
         'A debt security that is neither trading nor held to maturity.',
         'ورقة مالية متاحة للبيع',
         'The residual category. A company does not choose it so much as fail to '
         'qualify for the other two.'),
        ('held-to-maturity security',
         'A debt security the company has both the positive intention and the '
         'ability to hold until it matures.', 'ورقة مالية محتفظ بها حتى الاستحقاق',
         'Two conditions, not one. Intention without ability is not enough, and '
         'the exam separates them.'),
        ('equity security',
         'An instrument representing an ownership interest in another entity.',
         'أداة حقوق ملكية',
         'No maturity and no contractual repayment, which is why the debt '
         'classifications in Handout 1 have no application to it.'),
        ('significant influence',
         'The power to participate in the financial and operating policy '
         'decisions of another entity, without controlling it.',
         'التأثير الجوهري',
         'Presumed between 20% and 50%, and the presumption can be rebutted by '
         'evidence either way.'),
        ('equity method',
         'Recording an investment at cost and then adjusting it for the '
         'investor’s share of the investee’s profits and dividends.',
         'طريقة حقوق الملكية',
         'Not a fair value measure at all. The carrying amount tracks the '
         'investee’s performance, not its share price.'),
        ('unrealised gain',
         'An increase in the fair value of a security the company still holds.',
         'مكسب غير محقق',
         'Where it is reported is the whole subject of this volume, and it '
         'depends entirely on the classification.'),
        ('amortised cost',
         'Cost adjusted for the amortisation of any premium or discount, and not '
         'for changes in fair value.', 'التكلفة المطفأة',
         'The basis for held-to-maturity securities. Fair value is disclosed in '
         'the notes and never recognised.'),
    ],

    blocks=[
        ('scene', 'The %s nobody has sold' % money(N.afs), [
            'Northwind’s balance sheet reports investments in debt securities '
            'of %s. The company paid %s for them.'
            % (money(N.afs), money(S.afs_cost)),
            'The difference of %s is a gain on securities the company still owns. '
            'No transaction has confirmed it, and Northwind may yet sell them for '
            'less.' % money(S.afs_unrealised),
            'In Volume 1 that %s appeared in other comprehensive income rather '
            'than in net income, and the statement of changes in equity carried it '
            'to a separate column. This volume explains why it went there and not '
            'somewhere else.' % money(N.afs_gain_pretax),
            'The answer is a single word on the day the securities were bought: '
            'their classification.',
        ]),
        ('fig', 'ranked', 'Northwind’s portfolio, cost against fair value',
         [(S.afs[0][0], S.afs[0][2], '%s, cost %s'
           % (money(S.afs[0][2]), money(S.afs[0][1])), AFS),
          (S.afs[1][0], S.afs[1][2], '%s, cost %s'
           % (money(S.afs[1][2]), money(S.afs[1][1])), AFS),
          (S.afs[2][0], S.afs[2][2], '%s, cost %s'
           % (money(S.afs[2][2]), money(S.afs[2][1])), AFS)],
         'Three holdings, %s of cost, %s of fair value, and %s of gain that has '
         'not been realised by anything.'
         % (money(S.afs_cost), money(S.afs_fair_value),
            money(S.afs_unrealised)),
         'at 31 December %s' % Y),

        ('part', 'Part 1 · Three intentions',
         'and the classification each one produces'),

        ('task', 'Exercise 1A',
         'Name the three classifications and the intention behind each.',
         'Read and complete. Write one word in each space.',
         ['Nothing — this is the first exercise in the volume.'],
         ['Each paragraph describes one intention. The blank names the class it '
          'produces.',
          'Blank 3 is the one that requires two things rather than one.',
          'The last blank is the category a security falls into when neither of '
          'the other two applies.']),
        ('fill', 'R1',
         ['A debt security is classified on the day it is bought, and the '
          'classification depends on what the company means to do with it.',
          'A company that buys a bond meaning to sell it again within weeks is '
          'holding a {trading} security. It is carried at fair value, and every '
          'movement in that value goes straight to net income, because the company '
          'intends to turn it into cash soon.',
          'A company that buys a bond meaning to keep it until the issuer repays '
          'it is holding a {held-to-maturity} security. That classification '
          'requires two things: the positive intention to hold, and the {ability} '
          'to do so. A company that might need to sell the bond to pay its own '
          'bills does not qualify.',
          'Everything else is {available} for sale. It is not really a decision at '
          'all — it is what a debt security is when it is neither of the '
          'other two, and Northwind’s portfolio is in that position.'],
         {'trading': ('Near-term sale intended.', ''),
          'held-to-maturity': ('Kept until the issuer repays.', ''),
          'ability': ('Intention is not enough on its own.',
                      'Students classify as held to maturity on intention alone. '
                      'A company that may have to sell does not qualify.'),
          'available': ('The residual category.', '')},
         ['current', 'equity', 'willingness']),
        ('fig', 'fork', 'Two questions, asked in this order',
         [('Does the company intend to sell it in the near term?',
           'YES → TRADING', TRD),
          ('Does it have both the intention AND the ability to hold to maturity?',
           'YES → HELD TO MATURITY', HTM),
          ('Neither?', 'AVAILABLE FOR SALE — by elimination', AFS)]),

        ('prose', 'The three names are worth saying in full once, because the '
                  'exam uses them in full. A trading security is one held for '
                  'near-term sale; a held-to-maturity security is one the company '
                  'both intends and is able to keep until the issuer repays it; '
                  'and an available-for-sale security is any debt security that is '
                  'neither of those.', 'R2'),

        ('part', 'Part 2 · What follows from the classification',
         'measurement, and where the gains go'),

        ('prose', 'The classification is made once and decides three separate '
                  'things: what the security is carried at, where any unrealised '
                  'movement is reported, and how the balance sheet classifies it. '
                  'None of those is a separate choice.', 'R2'),
        ('prose', 'The logic behind the differences is worth seeing. A security '
                  'the company means to sell soon is carried at what it would '
                  'fetch, and the movement runs through income because it is '
                  'nearly realised. A security held to maturity will be repaid at '
                  'its face amount whatever happens to its price, so its price is '
                  'irrelevant and is not recognised at all.', 'R2'),

        ('task', 'Exercise 1B',
         'Complete the grid of consequences for all three classifications.',
         'Complete the table. Each column follows from one intention.',
         ['Exercise 1A, and the two paragraphs above.'],
         ['Two of the three columns are carried at fair value and one is not.',
          'The third row is where the three classes really separate, and it is '
          'the row the exam tests.',
          'The last row is the same for all three columns, and Part 4 explains '
          'why.']),
        ('table', _CLSH, _cls(blank=True), SLATE, _CLSW),
        ('answers', 18),
        ('fig', 'matrix', 'Where an unrealised gain goes, by classification',
         ['Trading', 'Available for sale', 'Held to maturity'],
         ['Carried at', 'The unrealised gain goes to'],
         [['Fair value', 'Net income — it is nearly realised'],
          ['Fair value', 'Other comprehensive income — held, not sold'],
          ['Amortised cost', 'Nowhere — the price does not matter']],
         'The middle row is Northwind. Its %s went to other comprehensive income '
         'because the securities are available for sale.'
         % money(N.afs_gain_pretax)),

        ('part', 'Part 3 · The same bond, three ways',
         'what the classification is worth'),

        ('task', 'Exercise 1C',
         'Report the same security under all three classifications.',
         'Read and complete.',
         ['Exercise 1B'],
         ['Use a bond bought for %s that is worth %s at the year end.'
          % (money(S.trading_cost), money(S.trading_fv)),
          'The amounts are the same in all three cases. Only the reporting '
          'differs.',
          'The last blank is the figure that appears nowhere at all under one of '
          'the three.']),
        ('fill', 'R2',
         ['Take one bond bought for %s and worth %s at the year end, an unrealised '
          'gain of %s.' % (money(S.trading_cost), money(S.trading_fv),
                           money(S.trading_gain)),
          'Classified as trading, the bond is carried at %s and the %s is reported '
          'in {net} income. Reported profit rises, although nothing has been sold.'
          % (money(S.trading_fv), money(S.trading_gain)),
          'Classified as available for sale, the bond is carried at the same %s, '
          'but the gain is reported in other {comprehensive} income and '
          'accumulates in its own equity column. Net income is untouched.'
          % money(S.trading_fv),
          'Classified as held to maturity, the bond stays at its amortised cost of '
          '%s. The gain appears {nowhere} in the statements, and the fair value is '
          'merely disclosed in the notes, because the company will be repaid the '
          'face amount whatever the market does in the meantime.'
          % money(S.trading_cost)],
         {'net': ('Through profit, because sale is intended.', ''),
          'comprehensive': ('Held rather than sold, so it bypasses profit.', ''),
          'nowhere': ('Not recognised at all.',
                      'Students expect every fair value movement to appear '
                      'somewhere. Under held to maturity it genuinely does not.')},
         ['retained', 'operating', 'everywhere']),
        ('fig', 'scale',
         'IF CLASSIFIED AS TRADING',
         ['Carried at %s' % money(S.trading_fv),
          'Net income higher by %s' % money(S.trading_gain),
          'Nothing in other comprehensive income',
          'The gain is in this year’s profit'],
         'IF CLASSIFIED AS HELD TO MATURITY',
         ['Carried at %s' % money(S.trading_cost),
          'Net income unchanged',
          'Nothing in other comprehensive income',
          'Fair value disclosed in the notes only']),

        ('part', 'Part 4 · Why equity securities are not here',
         'a scheme for debt alone'),

        ('task', 'Exercise 1D',
         'Say why equity securities are outside this classification scheme.',
         'Read and complete.',
         ['Exercise 1C'],
         ['Blank 1 is the feature of a bond that an ordinary share does not have.',
          'Blank 3 is where almost every equity security’s fair value '
          'movement now goes.',
          'The last blank is the handout that deals with equity securities '
          'properly.']),
        ('fill', 'R2',
         ['Held to maturity is a meaningful idea only where there is a {maturity} '
          'to hold the security to. A bond is repaid on a fixed date; an ordinary '
          'share is never repaid at all.',
          'Equity securities are therefore outside this three-way scheme '
          'completely. Under current US GAAP an equity security that does not give '
          'the holder significant influence is carried at fair value with every '
          'movement reported in {net} income — the same treatment as a '
          'trading debt security, and the only treatment available.',
          'That is a change from the older rules, under which equity securities '
          'could also be classified as available for sale. A question written from '
          'an older text may still offer that option, and it is now {wrong}.',
          'Where a holding is large enough to give significant influence, a '
          'different method applies again, and Handout {3} of this volume covers '
          'both cases.'],
         {'maturity': ('No maturity, so no holding to it.', ''),
          'net': ('Fair value through profit, and nothing else.',
                  'Students classify an equity holding as available for sale, '
                  'which the current standards no longer permit.'),
          'wrong': ('An older rule that still appears in older texts.', ''),
          '3': ('Handout 3 covers equity securities.', '')},
         ['coupon', 'comprehensive', '2']),
        ('fig', 'buckets', 'What this scheme covers, and what it does not',
         [('DEBT SECURITIES', AFS,
           ['Trading', 'Available for sale', 'Held to maturity',
            'All three available', '']),
          ('EQUITY, NO INFLUENCE', TRD,
           ['One treatment only', 'Fair value through net income',
            'No classification choice', 'Handout 3', '']),
          ('EQUITY, SIGNIFICANT INFLUENCE', HTM,
           ['The equity method', 'Not a fair value measure at all',
            'Usually 20% to 50%', 'Handout 3', ''])],
         'Three columns, three different worlds. Only the first one is what this '
         'handout has been about.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A debt security classified as available for sale is reported on '
                'the balance sheet at:',
         ['Amortised cost', 'Fair value', 'The lower of cost and fair value',
          'Original cost'],
         1, 'Level A',
         'Both trading and available-for-sale securities are carried at fair '
         'value; only held-to-maturity securities stay at amortised cost. (C) '
         'imports an inventory rule that has no application here.'),

        ('mcq', 'An unrealised gain on a debt security classified as trading is '
                'reported in:',
         ['Other comprehensive income', 'Net income',
          'Retained earnings directly', 'The notes only'],
         1, 'Level A',
         'A trading security is held for near-term sale, so the movement runs '
         'through net income. (A) is the available-for-sale treatment, and the '
         'pairing of these two options is the commonest form this question '
         'takes.'),

        ('mcq', 'To classify a debt security as held to maturity, a company must '
                'have:',
         ['The intention to hold it to maturity',
          'Both the positive intention and the ability to hold it to maturity',
          'The ability to hold it to maturity',
          'A maturity date within one year'],
         1, 'Level B',
         'Two conditions, and the second is the one that fails in practice: a '
         'company that may need to sell the security to meet its own obligations '
         'lacks the ability, whatever it intends.'),

        ('mcq', 'A bond costing %s is worth %s at the year end. If it is '
                'classified as held to maturity, the carrying amount on the '
                'balance sheet is:'
                % (money(S.htm_cost), money(S.htm_fv)),
         [money(S.htm_fv), money(S.htm_cost),
          money((S.htm_cost + S.htm_fv) / 2), money(S.htm_fv - S.htm_cost)],
         1, 'Level B',
         'Held-to-maturity securities stay at amortised cost; the fair value is '
         'disclosed and never recognised. (A) is the trap for anyone who assumes '
         'every investment is carried at fair value.'),

        ('mcq', 'Northwind’s debt securities cost %s and are worth %s. The %s '
                'unrealised gain is reported in other comprehensive income. This '
                'tells you the securities are classified as:'
                % (money(S.afs_cost), money(S.afs_fair_value),
                   money(S.afs_unrealised)),
         ['Trading', 'Available for sale', 'Held to maturity',
          'Equity securities'],
         1, 'Level B',
         'Only available-for-sale debt securities route unrealised movements '
         'through other comprehensive income. The reporting location identifies '
         'the classification, which is a question the exam likes to ask in '
         'reverse.'),

        ('mcq', 'Under current US GAAP, an equity security that does not confer '
                'significant influence is measured at:',
         ['Cost', 'Fair value, with changes in net income',
          'Fair value, with changes in other comprehensive income',
          'The lower of cost and fair value'],
         1, 'Level C',
         'Fair value through net income is the only treatment available for such '
         'holdings. (C) was permitted under the older rules and still appears in '
         'older texts, which is exactly why it is offered here.'),

        ('mcq', 'Which classification is NOT available for a debt security?',
         ['Trading', 'Available for sale', 'Held to maturity',
          'All three are available'],
         3, 'Level A',
         'All three apply to debt securities; it is equity securities that are '
         'excluded from the scheme, because a share has no maturity to be held '
         'to. The question tests whether the reader knows which instruments the '
         'scheme covers.'),

        ('tip', 'Every question in this volume starts with one word: the '
                'classification. Write it down before you read the numbers, '
                'because the numbers are usually the same under all three and only '
                'the reporting differs.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1B · the completed grid'),
        ('table', _CLSH, _cls(), SLATE, _CLSW),
        ('bullets', [
            'Trading: fair value, movements through net income.',
            'Available for sale: fair value, movements through other '
            'comprehensive income.',
            'Held to maturity: amortised cost, movements not recognised at all.',
            'Northwind’s portfolio is available for sale, which is why its '
            '%s went to other comprehensive income in Volume 1.'
            % money(N.afs_gain_pretax),
        ]),
    ],
)
