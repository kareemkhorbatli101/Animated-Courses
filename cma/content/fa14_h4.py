# -*- coding: utf-8 -*-
"""Volume 14, Handout 4 — Valuing a Bond, and What Moves Its Price.

Covers CMA Part 2 B.2(e) and B.2(f): valuing bonds by discounted cash flow,
and duration as a measure of interest rate sensitivity.
"""
from fadata import N, BD, TV, Y
from data import money, num

DEBT, PRICE, SLATE, TERM = '6D3F7E', '1F6F8F', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


def _pc2(x):
    return num(x * 100, 2) + '%'


def _price(n, r, coupon=None):
    c = BD.discount_coupon if coupon is None else coupon
    return BD.face * c * TV.pva(n, r) + BD.face * TV.pv(n, r)


_MARKETH = ['Market rate today', 'Price of the %s bond'
            % _pc(BD.discount_coupon), 'Against face value']
_MARKETW = [26, 38, 36]
_MRATES = [0.06, 0.07, 0.08, 0.09, 0.10]


def _market(blank=False):
    def c(v):
        return '' if blank else v
    rows = []
    for r in _MRATES:
        p = _price(BD.n, r)
        rows.append([_pc(r), c(money(p)),
                     c('At par' if abs(p - BD.face) < 1
                       else ('%s discount' % money(BD.face - p) if p < BD.face
                             else '%s premium' % money(p - BD.face)))])
    return rows


_DURH = ['Bond', 'Price at %s' % _pc(BD.market),
         'Price at %s' % _pc(BD.market + 0.01), 'Change']
_DURW = [28, 24, 24, 24]


def _dur(blank=False):
    def c(v):
        return '' if blank else v
    rows = []
    for n in (2, 5, 10):
        p8, p9 = _price(n, BD.market), _price(n, BD.market + 0.01)
        rows.append(['%d-year, %s coupon' % (n, _pc(BD.discount_coupon)),
                     c(money(p8)), c(money(p9)),
                     c(_pc2((p9 - p8) / p8))])
    return rows


HANDOUT = dict(
    n=4,
    title='Valuing a Bond, and What Moves Its Price',
    subtitle='The CMA asks for this half of the topic and not for Handout 3. '
             'One bond, five market rates, and five different prices.',
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the valuation, R3 for duration, which Part 2 states '
                 'in its own words.',
        collocations=['value a bond by discounted cash flow',
                      'price a bond off the market rate',
                      'measure interest rate sensitivity',
                      'widen a credit spread',
                      'read the term structure',
                      'compute the current yield'],
        pairs=['price / yield',
               'coupon rate / current yield',
               'duration / maturity',
               'interest rate risk / credit risk'],
        nots=['A bond’s price is not its carrying amount. Handout 3’s schedule '
              'ignores the market entirely once the bond is issued.',
              'Duration is not maturity. Two bonds maturing on the same day '
              'can have very different durations.'],
    ),

    objectives=[
        'Value a bond at any market rate by discounted cash flow.',
        'Say what moves a bond’s price after issue.',
        'Distinguish the coupon rate, the current yield and the yield to '
        'maturity.',
        'Say what duration measures and what raises it.',
        'Say why the carrying amount does not follow the market price.',
    ],

    terms=[
        ('duration',
         'A measure of how much a bond’s price moves when interest rates '
         'change, expressed in years.', 'المدة',
         'Longer duration means a larger price swing. It is driven by the '
         'timing of the cash flows, not by the maturity date alone.'),
        ('interest rate risk',
         'The risk that a bond’s price falls because market rates rise.',
         'مخاطر سعر الفائدة',
         'Borne by the holder, not the issuer. Northwind’s liability is '
         'unaffected by what happens to its bond in the market.'),
        ('credit spread',
         'The amount by which the rate required from a borrower exceeds the '
         'rate on a risk-free bond of the same term.',
         'هامش الائتمان',
         'The second thing that moves a bond price. Rates can be flat and a '
         'bond still fall, if the issuer’s credit worsens.'),
        ('term structure of interest rates',
         'The relationship between the rate required and the term to '
         'maturity, usually drawn as a yield curve.',
         'هيكل أسعار الفائدة الزمني',
         'Why a ten-year bond and a two-year bond from one issuer are '
         'discounted at different rates in practice.'),
        ('current yield',
         'The annual coupon divided by the bond’s current market price.',
         'العائد الجاري',
         'A crude measure that ignores the discount or premium entirely. The '
         'exam offers it as a distractor for yield to maturity.'),
    ],

    blocks=[
        ('scene', 'The price, after the issue', [
            'Handout 2 priced Northwind’s %s bond at %s, because the market '
            'wanted %s on the day it was issued.'
            % (_pc(BD.discount_coupon), money(BD.discount_price),
               _pc(BD.market)),
            'The market does not stay still. A year later rates may be %s or '
            '%s, and the bond will trade at a different price even though not '
            'one term of the contract has changed.'
            % (_pc(0.06), _pc(0.10)),
            'This is the half of the topic the CMA actually asks for. Part 2 '
            'B.2(e) wants the bond valued; it never asks for Handout 3’s '
            'schedule.',
            'The valuation is Volume 13’s arithmetic with a different rate in '
            'it. What is new is why the rate moves, and how much the price '
            'moves with it.',
        ]),
        ('fig', 'ranked', 'One bond, five market rates',
         [(_pc(r), _price(BD.n, r), money(_price(BD.n, r)),
           PRICE if r < BD.market else (SLATE if r == BD.market else DEBT))
          for r in _MRATES],
         'Same %s face, same %s coupon, same five years. The only thing that '
         'changed is what investors require.'
         % (money(BD.face), _pc(BD.discount_coupon)),
         'What the bond would fetch today'),

        ('part', 'Part 1 · Valuing it at any rate',
         'the same two pieces, a different rate'),

        ('task', 'Exercise 4A',
         'Value the bond at five different market rates.',
         'Complete both right-hand columns.',
         ['Handout 2 Exercise 2B, for the two-piece method.',
          'Volume 13 Handout 2, for the annuity factors.'],
         ['Each row is the same calculation as Handout 2 with a different '
          'rate: %s a year for five years, plus %s at the end.'
          % (money(BD.face * BD.discount_coupon), money(BD.face)),
          'One row should come out at exactly %s. Work out which before you '
          'compute it.' % money(BD.face),
          'The last column asks for the gap against face value, and its sign '
          'tells you whether the bond is at a discount or a premium.']),
        ('table', _MARKETH, _market(blank=True), PRICE, _MARKETW),
        ('answers', 10),
        ('fig', 'fork', 'Where will this bond trade?',
         [('Is the market rate above the %s coupon?'
           % _pc(BD.discount_coupon),
           'YES → below par, and the gap widens as the rate rises', DEBT),
          ('Is the market rate below the coupon?',
           'YES → above par, and the bond trades at a premium', PRICE),
          ('Is the market rate exactly the coupon?',
           'The bond trades at %s, its face value' % money(BD.face),
           SLATE)]),

        ('part', 'Part 2 · What makes the rate move',
         'two forces, not one'),

        ('task', 'Exercise 4B',
         'Say what moves the rate a bond is discounted at.',
         'Read and complete. Write one word in each space.',
         ['Exercise 4A.'],
         ['A government bond of the same term is the benchmark. Ask what makes '
          'that benchmark move.',
          'Then ask what makes investors demand more from Northwind than from '
          'a government, and what makes that gap widen.',
          'The last blank is why a ten-year rate and a two-year rate are not '
          'the same number on the same day.']),
        ('fill', 'R2',
         ['The rate used to value a bond has two parts. The first is the '
          'risk-free rate for that term, which moves with inflation '
          'expectations and with what the central {bank} is doing.',
          'The second is the extra return investors require for lending to '
          'this particular company rather than to a government. That is the '
          'credit {spread}, and it widens when the issuer’s prospects worsen.',
          'Either can move on its own. Northwind’s bond can fall in price on a '
          'day when interest rates do not move at all, if the market decides '
          'the company has become more {risky}.',
          'And the risk-free rate itself is not one number. It differs by '
          'term, which is what the term {structure} of interest rates '
          'describes, so a ten-year bond and a two-year bond are discounted '
          'differently on the same day. Reading the term structure of interest '
          'rates off a yield curve is how a treasurer decides which maturity '
          'to issue.'],
         {'bank': ('Policy and inflation, mostly.', ''),
          'spread': ('The price of this borrower’s credit.', ''),
          'risky': ('Credit can move when rates do not.',
                    'Students treat a bond price as a pure interest rate '
                    'story. Half the movement in corporate bonds is credit.'),
          'structure': ('A curve, not a point.', '')},
         ['issuer', 'coupon', 'premium']),
        ('fig', 'buckets', 'Two reasons a bond price falls',
         [('RATES ROSE', TERM,
           ['The risk-free benchmark moved up',
            'Every bond of that term falls together',
            'Nothing about the issuer changed']),
          ('CREDIT WORSENED', RUST,
           ['Investors want more from this issuer',
            'This bond falls while others do not',
            'The spread over the benchmark widened']),
          ('WHAT DID NOT CHANGE', SLATE,
           ['The %s coupon, fixed in the indenture'
            % _pc(BD.discount_coupon),
            'The %s repaid at maturity' % money(BD.face),
            'The carrying amount in Northwind’s books'])],
         'The third column is the one students forget. A bond can halve in the '
         'market and the issuer’s balance sheet will not move by a dollar.'),

        ('part', 'Part 3 · Three rates with similar names',
         'and only one of them is the yield'),

        ('task', 'Exercise 4C',
         'Distinguish the coupon rate, the current yield and the yield to '
         'maturity.',
         'Sort each statement into the column it belongs in.',
         ['Exercise 4B, and Handout 3 on the effective rate.'],
         ['The coupon rate is on the face value; the current yield is on the '
          'price. They differ whenever the bond is not at par.',
          'With the bond at %s, a %s coupon of %s is a current yield of %s.'
          % (money(BD.discount_price), _pc(BD.discount_coupon),
             money(BD.face * BD.discount_coupon),
             _pc2(BD.face * BD.discount_coupon / BD.discount_price)),
          'Only one of the three accounts for the %s that will be received at '
          'maturity.' % money(BD.discount)]),
        ('sortgrid',
         ['Statement', 'COUPON RATE', 'CURRENT YIELD', 'YIELD TO MATURITY'],
         ['Fixed in the indenture and never changes',
          'The annual coupon divided by the current market price',
          'The rate that discounts all the cash flows back to the price',
          'Ignores the discount that will be received at maturity',
          'Equals the effective rate Handout 3 used',
          'Is %s on Northwind’s discount bond' % _pc(BD.discount_coupon)],
         ['COUPON RATE', 'CURRENT YIELD', 'YIELD TO MATURITY',
          'CURRENT YIELD', 'YIELD TO MATURITY', 'COUPON RATE'],
         'Only the yield to maturity accounts for everything the investor will '
         'receive, which is why it is the one the exam means by yield.'),
        ('fig', 'matrix', 'The three rates on the same bond',
         ['Coupon rate', 'Current yield', 'Yield to maturity'],
         ['Computed as', 'On this bond', 'Accounts for the discount?'],
         [['Coupon over face value', _pc(BD.discount_coupon), 'No'],
          ['Coupon over market price',
           _pc2(BD.face * BD.discount_coupon / BD.discount_price), 'No'],
          ['The rate that prices all the cash flows', _pc(BD.market),
           'Yes']],
         'The three rise in that order on a discount bond, and fall in that '
         'order on a premium bond. If yours do not, one of them is wrong.'),

        ('part', 'Part 4 · How far the price moves',
         'duration'),

        ('prose', 'Two bonds from the same issuer do not move by the same '
                  'amount when rates change. The one whose cash flows arrive '
                  'later moves more, because every one of its payments is '
                  'discounted over more periods. Duration measures that, and '
                  'it is quoted in years.', 'R3'),

        ('task', 'Exercise 4D',
         'Measure how far three bonds move when the market rate rises by one '
         'point.',
         'Complete the grid, then say which bond is most sensitive.',
         ['Exercise 4A, and the paragraph above.'],
         ['Each row is the same %s coupon bond with a different term. Price '
          'each one at %s and again at %s.'
          % (_pc(BD.discount_coupon), _pc(BD.market),
             _pc(BD.market + 0.01)),
          'The last column is the change as a percentage of the starting '
          'price, not in dollars.',
          'The three answers should get larger as you go down the table, and '
          'the question is why.']),
        ('table', _DURH, _dur(blank=True), TERM, _DURW),
        ('answers', 9),
        ('fig', 'ranked', 'What one point on the rate costs, by term',
         [('%d-year bond' % n,
           abs((_price(n, BD.market + 0.01) - _price(n, BD.market))
               / _price(n, BD.market)) * 100,
           _pc2(abs((_price(n, BD.market + 0.01) - _price(n, BD.market))
                    / _price(n, BD.market))),
           PRICE if n == 2 else (SLATE if n == 5 else DEBT))
          for n in (2, 5, 10)],
         'Five times the term does not mean five times the movement, but the '
         'direction is unmistakable: later cash flows move more.',
         'Price fall when the market rate rises from %s to %s'
         % (_pc(BD.market), _pc(BD.market + 0.01))),

        ('part', 'Part 5 · What the market price does not touch',
         'the books'),

        ('task', 'Exercise 4E',
         'Say why the carrying amount does not follow the market price.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercise 4D, and Handout 3 Exercise 3B.'],
         ['Handout 3 built a schedule that reached %s in year one. Ask what '
          'rate that schedule used.'
          % money(BD.schedule(BD.discount_coupon)[0][5]),
          'The effective rate was fixed at issue. Nothing in Exercise 4A '
          'changed it.',
          'The last blank is who bears the loss when rates rise, and it is not '
          'the company that issued the bond.']),
        ('fill', 'R2',
         ['Suppose rates rise to %s and the bond falls to %s in the market. '
          'Handout 3’s schedule still shows a carrying amount of %s at the end '
          'of year one, because that schedule uses the rate fixed at {issue}.'
          % (_pc(0.10), money(_price(BD.n, 0.10)),
             money(BD.schedule(BD.discount_coupon)[0][5])),
          'Northwind still owes %s at maturity and still pays %s a year. '
          'Nothing the market does changes either, so nothing about its '
          '{liability} changes.'
          % (money(BD.face), money(BD.face * BD.discount_coupon)),
          'The fall is borne by whoever holds the bond. Interest rate risk is '
          'the holder’s {risk} and not the issuer’s, and Volume 6 showed how a '
          'holder reports it depending on the classification.',
          'The one case where the issuer is affected is a {repurchase}. If '
          'Northwind buys its own bond back at %s it settles a %s liability '
          'for less, and Handout 5 works that entry.'
          % (money(_price(BD.n, 0.10)),
             money(BD.schedule(BD.discount_coupon)[0][5]))],
         {'issue': ('Fixed then, and not revisited.', ''),
          'liability': ('The contract did not change.',
                        'Students mark the liability to market. A bond payable '
                        'is carried at amortised cost, not at fair value.'),
          'risk': ('Borne by the holder.', ''),
          'repurchase': ('Buying the debt back realises the difference.',
                         '')},
         ['maturity', 'asset', 'coupon']),
        ('fig', 'scale',
         'IN THE MARKET',
         ['Price moves every day',
          'Falls when rates rise or credit worsens',
          'Would be %s at a %s rate'
          % (money(_price(BD.n, 0.10)), _pc(0.10)),
          'Matters to the holder'],
         'IN NORTHWIND’S BOOKS',
         ['Carrying amount follows Handout 3’s schedule',
          'Uses the %s rate fixed at issue' % _pc(BD.market),
          'Stands at %s after year one'
          % money(BD.schedule(BD.discount_coupon)[0][5]),
          'Matters to the issuer']),

        ('watch', 'Price and yield move in opposite directions, always. If a '
                  'question says rates rose and offers you a higher price, it '
                  'is offering a distractor; and the longer the bond, the '
                  'bigger the move, which is what duration is for.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A bond is valued by discounting:',
         ['The face value only, at the coupon rate',
          'The coupons and the face value, at the market rate',
          'The coupons only, at the market rate',
          'The total cash the bond will pay, at the coupon rate'],
         1, 'Level A',
         'Both cash flows, at the rate investors require. (D) discounts at the '
         'coupon rate, which would price every bond at par whatever the '
         'market was doing.'),

        ('mcq', 'If market interest rates rise, the price of an existing bond:',
         ['Rises', 'Falls', 'Is unchanged',
          'Rises if it was issued at a discount'],
         1, 'Level A',
         'The cash flows are fixed, so a higher required return can only come '
         'from a lower price. (D) invents a dependence on the issue price that '
         'does not exist.'),

        ('mcq', 'A %s bond with a %s coupon trades at %s. Its current yield '
                'is:' % (money(BD.face), _pc(BD.discount_coupon),
                         money(BD.discount_price)),
         [_pc(BD.discount_coupon),
          _pc2(BD.face * BD.discount_coupon / BD.discount_price),
          _pc(BD.market), _pc2(BD.discount / BD.face)],
         1, 'Level B',
         '%s of coupon over the %s price. (C) is the yield to maturity, which '
         'is higher because it also counts the %s received at maturity.'
         % (money(BD.face * BD.discount_coupon),
            money(BD.discount_price), money(BD.discount))),

        ('mcq', 'Duration measures:',
         ['The number of years to maturity',
          'How much a bond’s price moves when interest rates change',
          'The credit risk of the issuer',
          'The total interest a bond will pay'],
         1, 'Level B',
         'Interest rate sensitivity, quoted in years. (A) is the confusion the '
         'unit invites: two bonds maturing on the same day have different '
         'durations if their coupons differ.'),

        ('mcq', 'Of two bonds from the same issuer with the same coupon, the '
                'one with the longer maturity has:',
         ['Lower duration and a smaller price movement',
          'Higher duration and a larger price movement',
          'The same duration',
          'Higher duration but a smaller price movement'],
         1, 'Level C',
         'Later cash flows are discounted over more periods, so they move '
         'more: %s against %s for a one-point rise on Northwind’s figures. '
         '(D) states the measure and then contradicts what it measures.'
         % (_pc2(abs((_price(10, 0.09) - _price(10, 0.08)) / _price(10, 0.08))),
            _pc2(abs((_price(2, 0.09) - _price(2, 0.08)) / _price(2, 0.08))))),

        ('mcq', 'A bond falls in price on a day when risk-free rates are '
                'unchanged. The most likely cause is:',
         ['An error in the quotation',
          'A widening of the issuer’s credit spread',
          'A change in the coupon rate',
          'Amortisation of the discount'],
         1, 'Level C',
         'Credit and rates move independently, and corporate bond prices '
         'respond to both. (C) is impossible: the coupon is a term of the '
         'indenture, and (D) affects the issuer’s books rather than the '
         'market.'),

        ('mcq', 'Market rates rise sharply after Northwind issues its bond. '
                'The carrying amount of the liability in Northwind’s balance '
                'sheet:',
         ['Falls to the new market price',
          'Continues to follow the schedule built at the issue rate',
          'Is written down with a gain in profit',
          'Is disclosed at fair value on the face of the balance sheet'],
         1, 'Level C',
         'A bond payable is carried at amortised cost using the rate fixed at '
         'issue. (A) and (C) would let a company report a gain because its own '
         'credit worsened, which is exactly what amortised cost avoids.'),

        ('tip', 'Ask which side of the contract the question is on. The '
                'issuer’s books use the rate fixed at issue and never move; '
                'the holder’s price uses today’s rate and moves daily. Most '
                'distractors here are the right answer for the other party.'),
    ],

    key_extra=[
        ('h3', 'Exercise 4A · the bond at five market rates'),
        ('table', _MARKETH, _market(), PRICE, _MARKETW),
        ('h3', 'Exercise 4D · what one point costs, by term'),
        ('table', _DURH, _dur(), TERM, _DURW),
        ('prose', 'The %s row of the first table is the one to notice. When '
                  'the market rate equals the %s coupon the bond trades at '
                  'exactly %s, which is the definition of par and the only '
                  'case where price, face value and carrying amount all agree.'
                  % (_pc(BD.discount_coupon), _pc(BD.discount_coupon),
                     money(BD.face)), 'R2'),
        ('prose', 'The second table is duration without the formula. The '
                  'two-year bond loses %s and the ten-year bond loses %s on '
                  'the same one-point rise, from the same issuer at the same '
                  'coupon. Nothing but the timing of the cash flows differs.'
                  % (_pc2(abs((_price(2, 0.09) - _price(2, 0.08))
                              / _price(2, 0.08))),
                     _pc2(abs((_price(10, 0.09) - _price(10, 0.08))
                              / _price(10, 0.08)))), 'R2'),
    ],
)
