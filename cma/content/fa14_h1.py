# -*- coding: utf-8 -*-
"""Volume 14, Handout 1 — What a Bond Promises: Par, Coupon, Indenture,
Covenants.

Covers CMA Part 2 B.2(c): the basic features of a bond. The bond worked here
is the one Volume 1 already reports.
"""
from fadata import N, BD, Y, PY
from data import money, num

DEBT, PRICE, SLATE, TERM = '6D3F7E', '1F6F8F', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_FEATH = ['Feature', 'What it fixes', 'Northwind’s serial bond']
_FEATW = [24, 40, 36]


def _feat(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Face value', c('What is repaid at maturity, per bond'),
         money(BD.serial_face)],
        ['Coupon rate', c('The cash interest, as a rate on face'),
         c(_pc(BD.serial_coupon_rate))],
        ['Maturity', c('When the face value falls due'),
         c('In instalments of %s a year' % money(BD.serial_instalment))],
        ['Indenture', c('The contract between issuer and holders'),
         c('Names the trustee and the covenants')],
        ['Covenants', c('What the issuer promises to do, or not do'),
         c('A limit on further borrowing')],
        ['Call provision', c('The issuer’s right to repay early'),
         c('None')],
    ]


_SERIALH = ['Northwind’s debt in %s' % Y, 'Amount']
_SERIALW = [68, 32]


def _serial(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Outstanding at 1 January %s' % Y, money(BD.serial_face)],
        ['Coupon at %s on the opening balance'
         % _pc(BD.serial_coupon_rate), c(money(N.interest))],
        ['Instalment repaid during the year', money(-N.debt_repaid)],
        ['Outstanding at 31 December %s' % Y,
         c(money(BD.serial_face - N.debt_repaid))],
        ['   of which due within twelve months', money(N.ltd_current)],
        ['   of which due after twelve months', money(N.ltd)],
    ]


HANDOUT = dict(
    n=1,
    title='What a Bond Promises: Par, Coupon, Indenture, Covenants',
    subtitle='Northwind has had a %s bond on its balance sheet since Volume 1. '
             'This handout reads the contract behind it.'
             % money(BD.serial_face),
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the features are being named, R2 once the contract '
                 'is being read.',
        collocations=['issue a bond to the public',
                      'pay a coupon semi-annually',
                      'redeem a bond at maturity',
                      'breach a covenant',
                      'call a bond before maturity',
                      'retire an instalment of a serial bond'],
        pairs=['face value / market price',
               'coupon rate / market rate',
               'secured / unsecured',
               'term bond / serial bond'],
        nots=['A coupon rate is not a yield. It is a rate on the face value '
              'and it never changes; the yield moves every day.',
              'A covenant is not a guarantee of repayment. It is a promise '
              'about conduct, and breaching it usually makes the debt fall '
              'due at once.'],
    ),

    objectives=[
        'Name the features of a bond that the indenture fixes.',
        'Distinguish the coupon rate from the market rate.',
        'Say what a covenant does and what breaching one costs.',
        'Distinguish a term bond from a serial bond.',
        'Read Northwind’s own debt as the bond it is.',
    ],

    terms=[
        ('face value',
         'The amount a bond repays at maturity, on which the coupon is '
         'computed.', 'القيمة الاسمية للسند',
         'Also called par. It is what is repaid and almost never what the bond '
         'was sold for.'),
        ('coupon rate',
         'The fixed rate, stated in the indenture, that determines the cash '
         'interest paid.', 'سعر الكوبون',
         'Fixed for the life of the bond. Everything that moves — the price, '
         'the yield, the carrying amount — moves around it.'),
        ('indenture',
         'The contract between the issuer and the bondholders, administered by '
         'a trustee.', 'عقد إصدار السندات',
         'Where every term in this handout is actually written down. An exam '
         'question that says "the indenture provides" is quoting a contract, '
         'not a standard.'),
        ('covenant',
         'A promise in the indenture about what the issuer will or will not '
         'do.', 'تعهد',
         'Breach usually accelerates the debt, which is how a long-term '
         'liability becomes current overnight.'),
        ('debenture',
         'A bond backed by the issuer’s general credit rather than by specific '
         'collateral.', 'سند غير مضمون',
         'Unsecured, so it carries a higher coupon than a secured bond of the '
         'same issuer.'),
        ('carrying amount',
         'The amount at which a liability stands in the books, which for a '
         'bond is the issue price adjusted for amortisation to date.',
         'المبلغ المدرج',
         'Neither the face value nor the market price. On a bond issued at par '
         'it happens to equal the face, which is why this volume starts '
         'there.'),
        ('serial bond',
         'A bond that matures in instalments across several dates rather than '
         'all at once.', 'سند متسلسل',
         'Northwind’s is one. The part maturing within a year is a current '
         'liability, which is why Volume 1 split it.'),
    ],

    blocks=[
        ('scene', 'The debt you have been looking at all along', [
            'Volume 1’s balance sheet carries %s of long-term debt and %s due '
            'within twelve months, and its income statement charges %s of '
            'interest.' % (money(N.ltd), money(N.ltd_current),
                           money(N.interest)),
            'Those three figures describe one instrument completely. %s of '
            'interest on %s outstanding at the start of the year is a coupon '
            'of %s.' % (money(N.interest), money(BD.serial_face),
                        _pc(BD.serial_coupon_rate)),
            'And %s was repaid during the year, which is why the total fell '
            'from %s to %s.'
            % (money(N.debt_repaid), money(BD.serial_face),
               money(BD.serial_face - N.debt_repaid)),
            'It is a serial bond at par. This handout reads its contract; '
            'Handouts 2 and 3 take two bonds that were not issued at par.',
        ]),
        ('fig', 'workplace', 'The parties to a bond',
         [('Nour', 'Treasurer of Northwind, the issuer', 'w', DEBT),
          ('Layla', 'Pension fund, a bondholder', 'w', PRICE),
          ('Karim', 'Trustee, who enforces the indenture', 'm', SLATE)],
         [('bank', '%s raised' % money(BD.serial_face)),
          ('doc', 'The indenture'),
          ('calendar', '%s a year repaid' % money(BD.serial_instalment)),
          ('money', '%s coupon' % _pc(BD.serial_coupon_rate))],
         'Karim acts for the holders and not for either side. His job is the '
         'covenants, and he is the reason a breach is noticed.'),

        ('part', 'Part 1 · What the indenture fixes',
         'six features, all of them in the contract'),

        ('task', 'Exercise 1A',
         'Name each feature of a bond and say what it fixes.',
         'Complete both right-hand columns.',
         ['Volume 1 Handout 4, for the debt on the balance sheet.'],
         ['Two of the six are amounts, two are dates or schedules, and two are '
          'promises about conduct.',
          'Northwind’s coupon is %s of interest on %s outstanding.'
          % (money(N.interest), money(BD.serial_face)),
          'The last row is a right the issuer may or may not have reserved, '
          'and Northwind did not.']),
        ('table', _FEATH, _feat(blank=True), DEBT, _FEATW),
        ('answers', 11),
        ('fig', 'buckets', 'What a bond contract settles',
         [('AMOUNTS', DEBT,
           ['Face value %s, repaid at maturity' % money(BD.serial_face),
            'Coupon rate %s, paid in cash'
            % _pc(BD.serial_coupon_rate),
            '']),
          ('TIMING', TERM,
           ['Maturity, or a schedule of maturities',
            'Coupon dates, usually semi-annual',
            'Any call dates the issuer reserved']),
          ('CONDUCT', SLATE,
           ['Covenants on borrowing, dividends, ratios',
            'The trustee who enforces them',
            'What happens on a breach'])],
         'The first column is arithmetic and the third is law. Most of what '
         'goes wrong with corporate debt goes wrong in the third.'),

        ('part', 'Part 2 · The coupon and the market',
         'one is fixed, the other is not'),

        ('task', 'Exercise 1B',
         'Distinguish the coupon rate from the market rate.',
         'Read and complete. Write one word in each space.',
         ['Exercise 1A, and Volume 13 Handout 1 on discount rates.'],
         ['The coupon is printed on the contract. Ask whether anything printed '
          'on a contract can respond to tomorrow’s news.',
          'If a bond pays %s and investors can get %s elsewhere, ask what has '
          'to happen to the price for anyone to buy it.'
          % (_pc(BD.discount_coupon), _pc(BD.market)),
          'The last blank is the only one of the two rates that changes after '
          'the bond is issued.']),
        ('fill', 'R2',
         ['The coupon rate is written into the indenture and never changes. A '
          '%s coupon on %s of face pays %s in cash every year of the bond’s '
          'life, whatever happens to interest rates or to the company.'
          % (_pc(BD.discount_coupon), money(BD.face),
             money(BD.face * BD.discount_coupon)),
          'The market rate is what investors require today for a bond of this '
          'risk and this term. It moves daily and the issuer has no control '
          'over it, so the two rates agree only by {coincidence}.',
          'When they differ, the cash is fixed, so the only thing that can '
          'adjust is the {price}. A bond paying less than the market demands '
          'sells below its face value, and one paying more sells above it.',
          'That is the whole of Handout 2. For now note which figure the '
          'balance sheet carries: not the face value and not the market price, '
          'but the amount actually {received}, adjusted thereafter.'],
         {'coincidence': ('Nothing makes them agree after issue.', ''),
          'price': ('The cash cannot move, so the price must.',
                    'Students expect the coupon to adjust. It is a term of a '
                    'signed contract and cannot.'),
          'received': ('What the issuer got, which Handout 2 computes.', '')},
         ['design', 'yield', 'face']),
        ('fig', 'scale',
         'THE COUPON RATE',
         ['Fixed in the indenture at issue',
          'Determines the cash paid, every period',
          'Never changes for the life of the bond',
          'Northwind’s serial bond pays %s'
          % _pc(BD.serial_coupon_rate)],
         'THE MARKET RATE',
         ['Set by investors, not by the issuer',
          'Determines the price a bond will fetch',
          'Changes daily, with rates and with credit',
          'Handout 4 is about what moves it']),

        ('part', 'Part 3 · Covenants', 'the promises that are not about money'),

        ('prose', 'A lender who cannot control what a borrower does after the '
                  'money has gone protects itself by contract. Covenants are '
                  'those protections: promises to maintain a ratio, to limit '
                  'further borrowing, to restrict dividends, or to keep an '
                  'asset insured.', 'R2'),

        ('task', 'Exercise 1C',
         'Say what covenants do and what breaching one costs.',
         'Read and complete, then sort each item into the column it belongs '
         'in.',
         ['The paragraph above.'],
         ['An affirmative covenant is something the issuer promises to do; a '
          'negative covenant is something it promises not to do.',
          'Ask which kind "maintain a current ratio above 1.5" is before you '
          'answer.',
          'Two of the items are not covenants at all, and one of those two is '
          'about what happens after a breach.']),
        ('fill', 'R2',
         ['A lender hands over the money first and watches afterwards. '
          'Covenants are how it keeps some control: promises in the indenture '
          'about what the issuer will and will not {do}.',
          'A promise to do something, such as deliver audited statements or '
          'hold a ratio above a stated level, is an {affirmative} covenant. A '
          'promise to refrain, such as not to borrow further or not to pay '
          'dividends above a share of earnings, is a negative one.',
          'Breaching either is serious because of what usually follows. The '
          'lender may demand immediate repayment, and a balance that was due '
          'in five years becomes payable at {once}.',
          'That is why a breach moves the whole debt into current '
          'liabilities. Northwind’s %s would join the %s already there, and '
          'every liquidity ratio Part 2 computes would change on a day when '
          'no {cash} moved at all.'
          % (money(N.ltd), money(N.ltd_current)),
          'A lender may instead {waive} the breach for at least twelve '
          'months, and where it has done so by the reporting date the debt '
          'stays long-term and the waiver is disclosed.'],
         {'do': ('Conduct, not amounts.', ''),
          'affirmative': ('A promise to act.', ''),
          'once': ('Acceleration, and it is immediate.', ''),
          'cash': ('A reclassification, not a payment.',
                   'Students look for a transaction. A covenant breach moves '
                   'a liability between categories without anything being '
                   'paid.'),
          'waive': ('Granted by the lender, before the year end.', '')},
         ['promise', 'negative', 'default']),
        ('sortgrid',
         ['Item', 'AFFIRMATIVE', 'NEGATIVE', 'NOT A COVENANT'],
         ['Maintain a current ratio of at least 1.5',
          'Do not incur additional debt beyond a stated limit',
          'Deliver audited statements within 90 days of the year end',
          'Do not pay dividends exceeding a stated share of earnings',
          'Repay the face value at maturity',
          'The whole debt becomes due on breach'],
         ['AFFIRMATIVE', 'NEGATIVE', 'AFFIRMATIVE', 'NEGATIVE',
          'NOT A COVENANT', 'NOT A COVENANT'],
         'Repaying is the promise the bond is; a covenant is a promise about '
         'everything else. Acceleration is the consequence of breach, not a '
         'covenant itself.'),
        ('fig', 'fork', 'What a breached covenant does to the balance sheet',
         [('Has the issuer breached a covenant at the reporting date?',
           'NO → the debt stays long-term, as Volume 1 reports it', OK),
          ('Breached, and the lender can demand repayment?',
           'YES → the whole balance becomes a current liability', RUST),
          ('Breached, but the lender has waived it for twelve months?',
           'It stays long-term, and the waiver is disclosed', SLATE)]),

        ('part', 'Part 4 · Term bonds and serial bonds',
         'and why Volume 1 split the balance'),

        ('task', 'Exercise 1D',
         'Roll Northwind’s serial bond forward and split the closing balance.',
         'Complete the schedule. Two figures are given from Volume 1.',
         ['Exercise 1A, and Volume 1 Handout 4 for the balance sheet split.'],
         ['The coupon is %s on the %s outstanding at the start of the year.'
          % (_pc(BD.serial_coupon_rate), money(BD.serial_face)),
          'One instalment of %s was repaid, so the closing balance is the '
          'opening less that.' % money(BD.serial_instalment),
          'The last two rows split that closing balance the way Volume 1 '
          'splits it, and they must add back to it.']),
        ('table', _SERIALH, _serial(blank=True), DEBT, _SERIALW),
        ('answers', 3),
        ('fig', 'ranked', 'Northwind’s bond, as Volume 1 reports it',
         [('Outstanding at 1 January', BD.serial_face,
           money(BD.serial_face), SLATE),
          ('Repaid during the year', N.debt_repaid,
           money(N.debt_repaid), RUST),
          ('Non-current at 31 December', N.ltd, money(N.ltd), DEBT),
          ('Current at 31 December', N.ltd_current,
           money(N.ltd_current), TERM)],
         'The last two bars add to %s, which is the first bar less the second. '
         'Nothing in Volume 1 was invented; it was a serial bond all along.'
         % money(BD.serial_face - N.debt_repaid)),

        ('watch', 'A term bond repays everything on one date and a serial bond '
                  'repays in instalments. Only the serial kind produces a '
                  'current portion every year, which is why Northwind’s %s sits '
                  'among current liabilities while the other %s does not.'
                  % (money(N.ltd_current), money(N.ltd))),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'The coupon rate on a bond:',
         ['Changes with market interest rates',
          'Is fixed in the indenture and determines the cash interest paid',
          'Equals the rate investors require at all times',
          'Is set by the trustee'],
         1, 'Level A',
         'The coupon is a contractual term and cannot move. (C) is true only '
         'on the day a bond is issued at par, which is the one case where the '
         'two rates agree.'),

        ('mcq', 'A bond backed by the issuer’s general credit rather than by '
                'specific collateral is a:',
         ['Mortgage bond', 'Debenture', 'Serial bond', 'Callable bond'],
         1, 'Level A',
         'A debenture is unsecured, which is why it carries a higher coupon '
         'than a secured bond from the same issuer. (C) and (D) describe '
         'maturity and redemption, not security.'),

        ('mcq', 'An indenture is:',
         ['The accounting standard governing bonds',
          'The contract between the issuer and the bondholders',
          'The certificate held by each investor',
          'The registration filed with a regulator'],
         1, 'Level B',
         'A contract, administered by a trustee. (A) is the distinction worth '
         'holding: a question that says "the indenture requires" is quoting '
         'the parties’ own agreement, which can require things no standard '
         'does.'),

        ('mcq', 'A company breaches a debt covenant before its year end and '
                'the lender has not waived it. The debt should be reported as:',
         ['Long-term, because the maturity has not changed',
          'A current liability',
          'Off balance sheet until the lender acts',
          'Equity'],
         1, 'Level B',
         'Breach makes the balance callable, so it is current whatever the '
         'stated maturity. (A) reads the maturity date and ignores the '
         'acceleration clause, which is exactly the trap.'),

        ('mcq', 'Northwind’s bond repays %s each year rather than the whole '
                '%s at one date. It is a:'
         % (money(BD.serial_instalment), money(BD.serial_face)),
         ['Term bond', 'Serial bond', 'Callable bond', 'Secured bond'],
         1, 'Level A',
         'Instalment maturities make it serial, which is why part of it is a '
         'current liability every year. A term bond would show no current '
         'portion until its final year.'),

        ('mcq', 'A call provision in an indenture benefits:',
         ['The bondholders, who may demand early repayment',
          'The issuer, who may repay early if rates fall',
          'The trustee', 'Neither party'],
         1, 'Level C',
         'The call is the issuer’s option, exercised when replacing the debt '
         'is cheaper. (A) describes a put provision, and because the call is '
         'valuable to the issuer a callable bond carries a higher coupon.'),

        ('mcq', 'Northwind reports %s of interest expense on %s of debt '
                'outstanding at the start of the year. The coupon rate is:'
         % (money(N.interest), money(BD.serial_face)),
         [_pc(BD.serial_coupon_rate + 0.02), _pc(BD.serial_coupon_rate),
          _pc(BD.market), 'Not determinable'],
         1, 'Level B',
         '%s over %s is %s. The computation works here because the bond was '
         'issued at par; Handout 3 shows why it would not work on a bond '
         'issued at a discount.'
         % (money(N.interest), money(BD.serial_face),
            _pc(BD.serial_coupon_rate))),

        ('tip', 'Separate the three rates before you answer anything on this '
                'topic: the coupon rate fixes the cash, the market rate at '
                'issue fixes the price, and the market rate today fixes what '
                'the bond would fetch now. Most distractors are the right '
                'arithmetic on the wrong one of the three.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1A · the features, completed'),
        ('table', _FEATH, _feat(), DEBT, _FEATW),
        ('h3', 'Exercise 1D · the serial bond, rolled forward'),
        ('table', _SERIALH, _serial(), DEBT, _SERIALW),
        ('prose', 'Nothing in the second table is new. %s of interest, %s '
                  'repaid and a closing balance split %s current and %s '
                  'non-current are all figures Volume 1 reported, and the '
                  'coupon of %s is the only thing this handout had to solve '
                  'for.'
                  % (money(N.interest), money(N.debt_repaid),
                     money(N.ltd_current), money(N.ltd),
                     _pc(BD.serial_coupon_rate)), 'R2'),
        ('prose', 'The serial bond is a useful first case precisely because it '
                  'was issued at par: the carrying amount is the face value, '
                  'and the interest expense is the cash paid. Handouts 2 and 3 '
                  'remove both of those conveniences.', 'R2'),
    ],
)
