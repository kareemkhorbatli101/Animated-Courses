# -*- coding: utf-8 -*-
"""Volume 14, Handout 2 — Issued at a Discount, at a Premium, at Par.

Intermediate accounting only: no CMA section asks for the issuer's entry.
The price itself is Part 2 B.2(e), and it is Volume 13's arithmetic.
"""
from fadata import N, BD, TV, LS, Y
from data import money, num

DEBT, PRICE, SLATE, TERM = '6D3F7E', '1F6F8F', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


def _f(x):
    return num(x, 5)


_PRICEH = ['Pricing the %s bond' % money(BD.face), 'Discount bond',
           'Premium bond']
_PRICEW = [46, 27, 27]


def _price(blank=False):
    def c(v):
        return '' if blank else v
    d, p = BD.discount_coupon, BD.premium_coupon
    return [
        ['Coupon rate written in the indenture', _pc(d), _pc(p)],
        ['Cash coupon, each year', c(money(BD.face * d)),
         c(money(BD.face * p))],
        ['Present value of the coupons at %s' % _pc(BD.market),
         c(money(BD.face * d * TV.pva(BD.n, BD.market))),
         c(money(BD.face * p * TV.pva(BD.n, BD.market)))],
        ['Present value of the %s repaid at maturity' % money(BD.face),
         money(BD.face * TV.pv(BD.n, BD.market)),
         money(BD.face * TV.pv(BD.n, BD.market))],
        ['Issue price', c(money(BD.discount_price)),
         c(money(BD.premium_price))],
        ['Discount or premium', c(money(-BD.discount)),
         c(money(BD.premium))],
    ]


_SHEETH = ['On the balance sheet at issue', 'Discount bond', 'Premium bond']
_SHEETW = [46, 27, 27]


def _sheet(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Bonds payable, at face value', money(BD.face), money(BD.face)],
        ['Less discount on bonds payable', c(money(-BD.discount)), c('—')],
        ['Plus premium on bonds payable', c('—'), c(money(BD.premium))],
        ['Carrying amount', c(money(BD.discount_price)),
         c(money(BD.premium_price))],
    ]


HANDOUT = dict(
    n=2,
    title='Issued at a Discount, at a Premium, at Par',
    subtitle='The same %s bond raises %s with one coupon and %s with another. '
             'Nothing about the company changed.'
             % (money(BD.face), money(BD.discount_price),
                money(BD.premium_price)),
    register='R2',

    lang=dict(
        register='R2 throughout. The exam register waits for Handout 4, where '
                 'the CMA’s own wording arrives.',
        collocations=['issue a bond below par',
                      'discount the coupons and the principal',
                      'record a discount on bonds payable',
                      'carry a bond at its issue price',
                      'present a discount as a contra account',
                      'raise less than the face value'],
        pairs=['discount / premium',
               'coupon rate / market rate',
               'face value / issue price',
               'contra liability / addition'],
        nots=['A discount is not a loss and a premium is not a gain. Both are '
              'interest, and Handout 3 spreads them over the bond’s life.',
              'A discount on bonds payable is not an asset. It is a deduction '
              'from the liability it belongs to.'],
    ),

    objectives=[
        'Say why a bond sells above or below its face value.',
        'Price a bond as an annuity plus a single sum.',
        'Compute the discount or premium at issue.',
        'Record the issue and present the bond on the balance sheet.',
        'Say what the discount and the premium actually represent.',
    ],

    terms=[
        ('issue price',
         'The cash a bond actually raises, which is the present value of its '
         'coupons and its face value at the market rate.',
         'سعر الإصدار',
         'The figure the liability starts at. Neither the face value nor '
         'anything in the indenture fixes it.'),
        ('stated rate',
         'Another name for the coupon rate, used where it must be contrasted '
         'with the market rate.', 'السعر المعلن',
         'Also called the nominal or face rate. The exam uses all four names '
         'for the same number.'),
        ('discount on bonds payable',
         'The excess of a bond’s face value over its issue price.',
         'خصم إصدار السندات',
         'A contra account, deducted from bonds payable. It is additional '
         'interest the issuer pays at maturity.'),
        ('premium on bonds payable',
         'The excess of a bond’s issue price over its face value.',
         'علاوة إصدار السندات',
         'Added to bonds payable, and it reduces the interest the issuer '
         'really bears below the coupon.'),
    ],

    blocks=[
        ('scene', 'Two bonds, one company, one week', [
            'Northwind proposes to raise money with a %s bond repayable in %d '
            'years. The market requires %s from a company of its credit.'
            % (money(BD.face), BD.n, _pc(BD.market)),
            'If the board sets the coupon at %s, the bond pays less than '
            'investors want and will not sell at face value. If it sets %s, it '
            'pays more than they want and will sell for more.'
            % (_pc(BD.discount_coupon), _pc(BD.premium_coupon)),
            'The first raises %s and the second raises %s. The company, the '
            'term and the amount repaid at maturity are identical.'
            % (money(BD.discount_price), money(BD.premium_price)),
            'This handout prices both and records them. The arithmetic is '
            'Volume 13’s, with nothing added.',
        ]),
        ('fig', 'ranked', 'What the same %s bond raises' % money(BD.face),
         [('Premium bond, %s coupon' % _pc(BD.premium_coupon),
           BD.premium_price, money(BD.premium_price), PRICE),
          ('At par, if the coupon were %s' % _pc(BD.market), BD.face,
           money(BD.face), SLATE),
          ('Discount bond, %s coupon' % _pc(BD.discount_coupon),
           BD.discount_price, money(BD.discount_price), DEBT)],
         'The two coupons sit %s either side of the market rate, so the two '
         'prices sit %s either side of par. The symmetry is exact.'
         % (_pc(BD.market - BD.discount_coupon), money(BD.discount)),
         'Cash raised on a %s bond at a %s market rate'
         % (money(BD.face), _pc(BD.market))),

        ('part', 'Part 1 · Why a bond sells away from par',
         'the cash is fixed, so the price moves'),

        ('task', 'Exercise 2A',
         'Say why a bond sells below or above its face value.',
         'Read and complete. Write one word in each space.',
         ['Handout 1 Exercise 1B, on the coupon against the market rate.'],
         ['An investor can get %s elsewhere. Ask what they would pay for a '
          'promise of %s a year.' % (_pc(BD.market),
                                     money(BD.face * BD.discount_coupon)),
          'The coupon cannot be changed, and the amount repaid at maturity '
          'cannot be changed either. Only one number is left free.',
          'The last blank is what the shortfall in the price really is, and '
          'it is not a loss.']),
        ('fill', 'R2',
         ['An investor who can earn %s elsewhere will not pay %s for a bond '
          'paying a %s coupon. The cash the bond offers is fixed by the '
          'indenture, so the only thing that can adjust is what the investor '
          'is willing to {pay}.'
          % (_pc(BD.market), money(BD.face), _pc(BD.discount_coupon)),
          'The price falls until the bond yields %s on the money actually '
          'laid out. At %s it does, and the %s shortfall against face value is '
          'called a {discount}.'
          % (_pc(BD.market), money(BD.discount_price), money(BD.discount)),
          'That shortfall is not a loss to the issuer. Northwind receives %s '
          'and repays %s, and the extra %s it hands back at maturity is '
          'additional {interest} it did not pay in cash along the way.'
          % (money(BD.discount_price), money(BD.face), money(BD.discount)),
          'A %s coupon runs the other way. Investors pay %s for it, the %s '
          'excess is a {premium}, and the issuer’s real cost is below the '
          'coupon because part of what it collected is never repaid as '
          'interest.'
          % (_pc(BD.premium_coupon), money(BD.premium_price),
             money(BD.premium))],
         {'pay': ('The price, which is the only free variable.', ''),
          'discount': ('Below par, because the coupon is below the market.',
                       ''),
          'interest': ('Paid at the end rather than along the way.',
                       'Students read a discount as a loss on issue. The '
                       'company borrowed less and will repay more; the '
                       'difference is interest.'),
          'premium': ('Above par, for a coupon above the market.', '')},
         ['receive', 'loss', 'gain']),
        ('fig', 'fork', 'Will this bond sell above or below par?',
         [('Is the coupon rate below the market rate?',
           'YES → a discount, and the issuer raises less than face', DEBT),
          ('Is the coupon rate above the market rate?',
           'YES → a premium, and the issuer raises more than face', PRICE),
          ('Are the two rates equal?',
           'The bond sells at par, as Northwind’s serial bond did', SLATE)]),

        ('part', 'Part 2 · Pricing it',
         'an annuity plus a single sum'),

        ('prose', 'A bond is two promises: a stream of equal coupons, and one '
                  'repayment of the face value at the end. Volume 13 can value '
                  'both. The coupons are an ordinary annuity and the repayment '
                  'is a single sum, and the price is their total.', 'R2'),

        ('task', 'Exercise 2B',
         'Price both bonds as an annuity plus a single sum.',
         'Complete the grid. The present value of the repayment is given.',
         ['Volume 13 Handout 2, for the five-year annuity factor at %s.'
          % _pc(BD.market),
          'Volume 13 Handout 1, for the single-sum factor.'],
         ['The coupon row is the rate in row 1 applied to the %s face value.'
          % money(BD.face),
          'The annuity factor at %s for %d years is %s, and you computed it in '
          'Volume 13.' % (_pc(BD.market), BD.n, _f(TV.pva(BD.n, BD.market))),
          'Look hard at the discount bond’s coupon row before you move on: you '
          'have met that figure twice already.']),
        ('table', _PRICEH, _price(blank=True), PRICE, _PRICEW),
        ('answers', 10),
        ('fig', 'formula', 'A bond price is two of Volume 13’s answers',
         [('Coupons %s a year' % money(BD.face * BD.discount_coupon),
           '× %s, the annuity factor' % _f(TV.pva(BD.n, BD.market)), TERM),
          ('+', '', None),
          ('Face %s at maturity' % money(BD.face),
           '× %s, the single-sum factor' % _f(TV.pv(BD.n, BD.market)),
           SLATE),
          ('=', '', None),
          ('%s' % money(BD.discount_price), 'What the bond raises', DEBT)],
         'The first line comes to %s — the very figure Volume 7 used for its '
         'lease and Volume 13 derived. Same payment, same term, same rate, so '
         'necessarily the same answer.'
         % money(BD.face * BD.discount_coupon * TV.pva(BD.n, BD.market))),

        ('part', 'Part 3 · Recording the issue',
         'and where the difference sits'),

        ('task', 'Exercise 2C',
         'Record both issues and present each bond on the balance sheet.',
         'Read and complete, then fill the grid and record the two entries '
         'underneath.',
         ['Exercise 2B.'],
         ['Bonds payable is always credited with the face value, whatever the '
          'cash received.',
          'The difference between the cash and the face goes to a separate '
          'account, and its sign decides which of the two rows it uses.',
          'The carrying amount must come back to the issue price you computed '
          'in Exercise 2B.']),
        ('fill', 'R2',
         ['Whatever the cash, bonds payable is credited with the {face} value '
          'of %s. That account records what will be repaid, and what will be '
          'repaid does not depend on what the bond fetched.' % money(BD.face),
          'The difference goes to an account of its own. On the %s bond the '
          'company received %s less than face, so %s is {debited} to discount '
          'on bonds payable.'
          % (_pc(BD.discount_coupon), money(BD.discount),
             money(BD.discount)),
          'That account is a contra liability. It is deducted from bonds '
          'payable rather than shown separately, so the balance sheet reports '
          'one {carrying} amount of %s.' % money(BD.discount_price),
          'The premium bond runs the other way. The %s excess is credited to '
          'premium on bonds payable and {added} to the face value, giving a '
          'carrying amount of %s.'
          % (money(BD.premium), money(BD.premium_price)),
          'Note which rate did all the work. The stated rate decided the cash '
          'coupons; the {market} rate decided the price and therefore the '
          'discount and the premium.'],
         {'face': ('What will be repaid, not what was raised.', ''),
          'debited': ('A contra liability has a debit balance.', ''),
          'carrying': ('One figure, not two.',
                       'Students report the discount as a separate line or, '
                       'worse, as an asset. It belongs with the bond.'),
          'added': ('The premium raises the carrying amount.', ''),
          'market': ('The rate investors required, not the one printed.',
                     '')},
         ['issue', 'credited', 'stated']),
        ('table', _SHEETH, _sheet(blank=True), DEBT, _SHEETW),
        ('answers', 6),
        ('journal', [
            ('J1', ('The %s bond issued at %s, raising %s.'
                    % (_pc(BD.discount_coupon), money(BD.discount_price),
                       money(BD.discount_price)),
                    'Three lines, and the discount is a debit.'),
             [('Cash', 0, '', ''),
              ('Discount on Bonds Payable', 0, '', ''),
              ('Bonds Payable', 1, '', '')]),
            ('J2', ('The %s bond issued at %s instead.'
                    % (_pc(BD.premium_coupon), money(BD.premium_price)),
                    'The same three accounts, with the premium on the other '
                    'side.'),
             [('Cash', 0, '', ''),
              ('Bonds Payable', 1, '', ''),
              ('Premium on Bonds Payable', 1, '', '')]),
        ]),
        ('fig', 'matrix', 'Where each account sits',
         ['Bonds payable', 'Discount on bonds payable',
          'Premium on bonds payable'],
         ['Normal balance', 'Presented as', 'Effect on the carrying amount'],
         [['Credit, at face value %s' % money(BD.face),
           'A non-current liability', 'The starting point'],
          ['Debit, %s' % money(BD.discount),
           'A deduction from bonds payable', 'Reduces it to %s'
           % money(BD.discount_price)],
          ['Credit, %s' % money(BD.premium),
           'An addition to bonds payable', 'Raises it to %s'
           % money(BD.premium_price)]],
         'Neither the discount nor the premium is reported on its own. Both are '
         'presented with the bond they belong to, so a reader sees one figure.'),

        ('part', 'Part 4 · What the difference really is',
         'interest, and nothing else'),

        ('task', 'Exercise 2D',
         'Say what the discount and the premium represent over the bond’s '
         'life.',
         'Sort each statement into the column that says whether it is true.',
         ['Exercise 2C.'],
         ['Northwind receives %s on the discount bond and repays %s. Add up '
          'what it pays in total and compare.'
          % (money(BD.discount_price), money(BD.face)),
          'Five coupons of %s plus %s of principal is %s, against %s received.'
          % (money(BD.face * BD.discount_coupon), money(BD.face),
             money(BD.face * BD.discount_coupon * BD.n + BD.face),
             money(BD.discount_price)),
          'One of the statements is about the premium bond, where the total '
          'cost runs the other way.']),
        ('sortgrid',
         ['Statement about the discount bond', 'TRUE', 'FALSE'],
         ['The total cash cost is %s'
          % money(BD.face * BD.discount_coupon * BD.n + BD.face
                  - BD.discount_price),
          'The discount is a loss recognised at issue',
          'The real cost of borrowing is above the %s coupon'
          % _pc(BD.discount_coupon),
          'The discount will be charged to interest expense over the term',
          'The premium bond costs more in total than the discount bond',
          'Both bonds repay %s at maturity' % money(BD.face)],
         ['TRUE', 'FALSE', 'TRUE', 'TRUE', 'TRUE', 'TRUE'],
         'The fifth surprises people. The premium bond pays %s a year rather '
         'than %s, so it costs more in cash even though it raised more at '
         'issue.' % (money(BD.face * BD.premium_coupon),
                     money(BD.face * BD.discount_coupon))),
        ('fig', 'bridge',
         'Cash received at issue', BD.discount_price,
         [('Five coupons of %s' % money(BD.face * BD.discount_coupon),
           -BD.face * BD.discount_coupon * BD.n),
          ('Face value repaid at maturity', -BD.face)],
         'Net cost of the borrowing',
         BD.discount_price - BD.face * BD.discount_coupon * BD.n - BD.face),

        ('watch', 'Bonds payable is credited with the face value every time, '
                  'whatever the cash. A question that asks for the credit to '
                  'bonds payable on a bond issued at %s is asking for %s, and '
                  'the %s goes to a separate account.'
                  % (money(BD.discount_price), money(BD.face),
                     money(BD.discount))),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A bond sells at a discount when:',
         ['The issuer is in financial difficulty',
          'The coupon rate is below the market rate',
          'The coupon rate is above the market rate',
          'The bond is unsecured'],
         1, 'Level A',
         'The price adjusts until the bond yields the market rate. (A) affects '
         'the market rate the bond is priced at, and a bond from a sound '
         'issuer sells at a discount whenever its coupon is below that rate.'),

        ('mcq', 'A %s bond with a %s coupon is issued when the market rate is '
                '%s. The issue price is the present value of:'
         % (money(BD.face), _pc(BD.discount_coupon), _pc(BD.market)),
         ['The face value only',
          'The coupons and the face value, both at %s' % _pc(BD.market),
          'The coupons and the face value, both at %s'
          % _pc(BD.discount_coupon),
          'The total cash the bond will pay'],
         1, 'Level B',
         'Both promises, discounted at the rate investors require. (C) uses '
         'the coupon rate and would price every bond at par, which is the '
         'commonest error on this topic.'),

        ('mcq', 'On the issue of a bond at a discount, bonds payable is '
                'credited with:',
         [money(BD.discount_price), money(BD.face), money(BD.discount),
          money(BD.premium_price)],
         1, 'Level A',
         'Always the face value. The %s of cash and the %s of discount are the '
         'two debits that balance it.'
         % (money(BD.discount_price), money(BD.discount))),

        ('mcq', 'Discount on bonds payable is reported as:',
         ['An asset', 'A deduction from bonds payable',
          'An expense of the period of issue', 'An addition to equity'],
         1, 'Level B',
         'A contra liability, so the balance sheet shows one net figure of %s. '
         '(C) is the error the sortgrid was built to prevent: the discount is '
         'interest, and it belongs to the whole term.'
         % money(BD.discount_price)),

        ('mcq', 'The same issuer offers a %s coupon and a %s coupon on '
                'otherwise identical %s bonds. Compared with the discount '
                'bond, the premium bond:'
         % (_pc(BD.discount_coupon), _pc(BD.premium_coupon),
            money(BD.face)),
         ['Repays more at maturity',
          'Raises more at issue and pays more in coupons',
          'Costs the issuer less in total cash',
          'Costs the issuer a higher rate on the money raised'],
         1, 'Level C',
         'Both repay %s; the premium bond raises %s more and pays %s more each '
         'year. (D) is the trap: both bonds were priced to yield exactly %s, '
         'so the effective rates are identical.'
         % (money(BD.face), money(BD.premium_price - BD.discount_price),
            money(BD.face * (BD.premium_coupon - BD.discount_coupon)),
            _pc(BD.market))),

        ('mcq', 'A bond is issued at exactly par. This tells you that:',
         ['The issuer has no covenants',
          'The coupon rate equals the market rate at issue',
          'The bond is secured',
          'The bond matures in one year'],
         1, 'Level A',
         'Par is the one case where the two rates agree, which is why '
         'Northwind’s serial bond in Handout 1 needed no discount account at '
         'all.'),

        ('mcq', 'The present value of the coupons on the %s bond comes to %s. '
                'That figure also appears in this course as:'
         % (_pc(BD.discount_coupon),
            money(BD.face * BD.discount_coupon * TV.pva(BD.n, BD.market))),
         ['The premium on the other bond',
          'The present value of Volume 7’s finance lease',
          'The face value of the serial bond',
          'A coincidence with no meaning'],
         1, 'Level C',
         'Five payments of %s at %s is one calculation, whether the payments '
         'are lease instalments or bond coupons. Recognising that a bond is an '
         'annuity plus a single sum is most of what Part 2 B.2(e) asks for.'
         % (money(LS.fin_payments), _pc(BD.market))),

        ('tip', 'Price every bond in two pieces and label them. Coupons times '
                'the annuity factor, face times the single-sum factor, both at '
                'the market rate. Then compare the total with the face value: '
                'below is a discount, above is a premium, and you never have '
                'to remember which way round it goes.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2B · both bonds, priced'),
        ('table', _PRICEH, _price(), PRICE, _PRICEW),
        ('h3', 'Exercise 2C · the balance sheet at issue'),
        ('table', _SHEETH, _sheet(), DEBT, _SHEETW),
        ('h3', 'The two issue entries, completed'),
        ('journal', [
            ('J1', 'The %s bond issued at a discount.'
             % _pc(BD.discount_coupon),
             [('Cash', 0, money(BD.discount_price), ''),
              ('Discount on Bonds Payable', 0, money(BD.discount), ''),
              ('Bonds Payable', 1, '', money(BD.face))]),
            ('J2', 'The %s bond issued at a premium.'
             % _pc(BD.premium_coupon),
             [('Cash', 0, money(BD.premium_price), ''),
              ('Bonds Payable', 1, '', money(BD.face)),
              ('Premium on Bonds Payable', 1, '', money(BD.premium))]),
        ]),
        ('prose', 'The discount and the premium are equal at %s, and that is '
                  'not a coincidence. Both coupons sit %s away from the %s '
                  'market rate, so each is %s of face a year for %d years, '
                  'discounted at %s — the same annuity in both directions.'
                  % (money(BD.discount),
                     _pc(BD.market - BD.discount_coupon), _pc(BD.market),
                     money(BD.face * (BD.market - BD.discount_coupon)),
                     BD.n, _pc(BD.market)), 'R2'),
        ('prose', 'Note where the %s of coupons on the discount bond came '
                  'from. It is %s a year for five years at %s, which is the '
                  'figure Volume 7 opened its lease schedule with and Volume '
                  '13 derived. A lease and a bond are the same arithmetic '
                  'wearing different contracts.'
                  % (money(BD.face * BD.discount_coupon
                           * TV.pva(BD.n, BD.market)),
                     money(LS.fin_payments), _pc(BD.market)), 'R2'),
    ],
)
