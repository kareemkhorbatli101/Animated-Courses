# -*- coding: utf-8 -*-
"""Volume 14, Handout 5 — Retirement, Refinancing, Convertibles and Warrants.

Covers CMA Part 2 B.2(d) debt issuance and refinancing strategies, and
B.2(o) other sources of long-term financing.
"""
from fadata import N, BD, Y
from data import money, num

DEBT, PRICE, SLATE, TERM = '6D3F7E', '1F6F8F', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_RETH = ['Retiring the discount bond after %d years' % BD.retire_year,
         'Amount']
_RETW = [68, 32]


def _ret(blank=False):
    def c(v):
        return '' if blank else v
    face_part = BD.face
    unamort = BD.face - BD.retire_carrying
    return [
        ['Face value of the bonds retired', money(face_part)],
        ['Less unamortised discount at that date', c(money(-unamort))],
        ['Carrying amount', c(money(BD.retire_carrying))],
        ['Cash paid at %s of face' % num(BD.retire_price * 100, 0),
         money(-BD.retire_cash)],
        ['Loss on extinguishment', c(money(-BD.retire_loss))],
    ]


_SOURCEH = ['Source of long-term finance', 'What the holder gets',
            'What it costs the issuer']
_SOURCEW = [28, 36, 36]


def _source(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['A straight bond', c('Interest and repayment of face'),
         c('The coupon, and the discount or premium')],
        ['A convertible bond',
         c('The same, plus the right to convert into shares'),
         c('A lower coupon, and dilution if conversion happens')],
        ['A bond with detachable warrants',
         c('The bond, plus a separately tradable right to buy shares'),
         c('A lower coupon, and dilution if the warrants are exercised')],
        ['A lease', c('Rentals, and the asset back at the end'),
         c('Interest inside the rentals, as Volume 7 showed')],
        ['Ordinary shares', c('A residual claim, and any dividend declared'),
         c('No fixed charge, and a permanent share of the company')],
    ]


HANDOUT = dict(
    n=5,
    title='Retirement, Refinancing, Convertibles and Warrants',
    subtitle='Northwind buys its bond back three years in, at %s of face, and '
             'records a %s loss on a deal it chose to do.'
             % (num(BD.retire_price * 100, 0), money(BD.retire_loss)),
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the entries, R3 for the financing comparison, which '
                 'Part 2 sets as a strategy question.',
        collocations=['extinguish a debt before maturity',
                      'call a bond at a stated premium',
                      'refinance at a lower rate',
                      'convert a bond into shares',
                      'detach a warrant and sell it',
                      'recognise a loss on extinguishment'],
        pairs=['retirement / maturity',
               'carrying amount / cash paid',
               'convertible / warrant',
               'debt finance / equity finance'],
        nots=['A loss on extinguishment is not evidence of a bad decision. '
              'Refinancing at a lower rate usually produces one.',
              'A convertible bond is not equity until it is converted. Until '
              'then it is debt, and it pays interest.'],
    ),

    objectives=[
        'Compute the gain or loss on retiring a bond early.',
        'Record an extinguishment.',
        'Say when refinancing makes sense despite the loss it records.',
        'Distinguish a convertible bond from a bond with warrants.',
        'Compare the sources of long-term finance.',
    ],

    terms=[
        ('extinguishment',
         'The settlement of a debt before its maturity date, by repurchase or '
         'by call.', 'إطفاء الدين',
         'The gain or loss is the difference between the carrying amount and '
         'the cash paid, and it goes to profit at once.'),
        ('call premium',
         'The excess over face value an issuer must pay to redeem a bond under '
         'a call provision.', 'علاوة الاستدعاء',
         'The price of the option the issuer reserved. It is what makes most '
         'early retirements show a loss.'),
        ('refinancing',
         'Replacing an existing borrowing with a new one, usually at a lower '
         'rate or a longer term.', 'إعادة التمويل',
         'A financing decision, not an accounting one. The accounting loss and '
         'the economic gain routinely point in opposite directions.'),
        ('convertible bond',
         'A bond the holder may exchange for a fixed number of the issuer’s '
         'shares.', 'سند قابل للتحويل',
         'One instrument, and under US GAAP usually one liability. The '
         'conversion right is not separated.'),
        ('detachable warrant',
         'A right to buy shares at a stated price, issued with a bond and '
         'tradable separately from it.', 'أمر اكتتاب قابل للفصل',
         'Detachable is the word that matters. Because it can be sold on its '
         'own it has its own value, and part of the proceeds is allocated to '
         'equity.'),
    ],

    blocks=[
        ('scene', 'Rates fall, and Northwind acts', [
            'Three years into the %s bond, market rates have fallen. Northwind '
            'can borrow at %s and is paying an effective %s.'
            % (_pc(BD.discount_coupon), _pc(0.06), _pc(BD.market)),
            'It buys the bond back in the market at %s of face, paying %s for '
            'debt standing in its books at %s.'
            % (num(BD.retire_price * 100, 0), money(BD.retire_cash),
               money(BD.retire_carrying)),
            'The entry records a %s loss. The decision was still the right '
            'one, and this handout explains why those two statements are not '
            'in conflict.' % money(BD.retire_loss),
            'Then the instruments that are not straight debt: convertibles, '
            'warrants, and what each costs.',
        ]),
        ('fig', 'ranked', 'What the retirement costs, three ways of counting',
         [('Face value of the bonds', BD.face, money(BD.face), SLATE),
          ('Cash paid at %s of face' % num(BD.retire_price * 100, 0),
           BD.retire_cash, money(BD.retire_cash), RUST),
          ('Carrying amount in the books', BD.retire_carrying,
           money(BD.retire_carrying), DEBT)],
         'The loss is the gap between the second bar and the third, %s. The '
         'first bar is not involved in the computation at all.'
         % money(BD.retire_loss),
         'At the end of year %d' % BD.retire_year),

        ('part', 'Part 1 · Retiring a bond early',
         'carrying amount against cash'),

        ('task', 'Exercise 5A',
         'Compute the loss on retiring the bond and record the entry.',
         'Complete the schedule, then record the entry underneath.',
         ['Handout 3 Exercise 3B, for the carrying amount after %d years.'
          % BD.retire_year],
         ['Take the carrying amount from your Handout 3 schedule. At the end '
          'of year %d it is %s.' % (BD.retire_year,
                                    money(BD.retire_carrying)),
          'The unamortised discount is the gap between that figure and the %s '
          'face value.' % money(BD.face),
          'The loss is the cash paid less the carrying amount, and the face '
          'value plays no part in it.']),
        ('table', _RETH, _ret(blank=True), DEBT, _RETW),
        ('answers', 4),
        ('journal', [
            ('J1', ('The bond repurchased at %s of face after %d years, '
                    'against a carrying amount of %s.'
                    % (num(BD.retire_price * 100, 0), BD.retire_year,
                       money(BD.retire_carrying)),
                    'Four lines: the face value out, the discount out, the '
                    'cash out, and the difference to profit.'),
             [('Bonds Payable', 0, '', ''),
              ('Loss on Extinguishment', 0, '', ''),
              ('Discount on Bonds Payable', 1, '', ''),
              ('Cash', 1, '', '')]),
        ]),
        ('fig', 'bridge',
         'Carrying amount at the end of year %d' % BD.retire_year,
         BD.retire_carrying,
         [('Cash paid to repurchase', -BD.retire_cash)],
         'Loss on extinguishment', -BD.retire_loss),

        ('part', 'Part 2 · Why a loss can be the right answer',
         'the accounting and the decision'),

        ('task', 'Exercise 5B',
         'Say why refinancing can make sense despite the loss it records.',
         'Read and complete. Write one word in each space.',
         ['Exercise 5A, and Handout 4 on what moves a bond price.'],
         ['Rates fell, which is why the bond costs more than its carrying '
          'amount to buy back. Ask what else falling rates make possible.',
          'The %s loss is recognised once. The saving on a new borrowing '
          'recurs every year until maturity.' % money(BD.retire_loss),
          'The last blank is the comparison a treasurer actually makes, and it '
          'is not between two accounting figures.']),
        ('fill', 'R2',
         ['The bond costs %s to retire because rates have {fallen}: a %s '
          'coupon is attractive when the market pays %s, so holders want more '
          'than par for it.'
          % (money(BD.retire_cash), _pc(BD.discount_coupon), _pc(0.06)),
          'The same fall is why Northwind wants out. It can borrow at %s '
          'instead of the %s it is effectively paying, and that saving '
          '{recurs} in every remaining year.'
          % (_pc(0.06), _pc(BD.market)),
          'So the %s loss is a one-off charge and the saving is an annuity. '
          'Comparing them means discounting the saving back, which is Volume '
          '13’s {arithmetic} and the whole of a refinancing decision.'
          % money(BD.retire_loss),
          'The accounting records the charge in the year of the repurchase and '
          'says nothing about the saving at all, which is why a company can '
          'report a loss on a decision that was plainly {right}.'],
         {'fallen': ('A low-rate world makes old bonds expensive.', ''),
          'recurs': ('Every year, not once.', ''),
          'arithmetic': ('A one-off against an annuity, discounted.', ''),
          'right': ('The books record one side of it.',
                    'Students read a loss on extinguishment as a mistake. It '
                    'is the price of ending an expensive contract early.')},
         ['risen', 'reverses', 'wrong']),
        ('fig', 'scale',
         'WHAT THE ACCOUNTS SHOW',
         ['A %s loss, in one year' % money(BD.retire_loss),
          'Charged to profit at once',
          'Nothing about the new borrowing',
          'Complete, and misleading on its own'],
         'WHAT THE DECISION WEIGHS',
         ['The %s loss, once' % money(BD.retire_loss),
          'Against a lower rate for every remaining year',
          'Both discounted to today',
          'Volume 13, applied to a financing choice']),

        ('part', 'Part 3 · Convertibles and warrants',
         'debt with something attached'),

        ('prose', 'An issuer can lower its coupon by attaching a right to buy '
                  'shares. Where the right is embedded and inseparable the '
                  'instrument is a convertible bond; where it is a separately '
                  'tradable certificate it is a detachable warrant, and the '
                  'two are accounted for differently.', 'R2'),

        ('task', 'Exercise 5C',
         'Distinguish a convertible bond from a bond with detachable warrants.',
         'Read and complete. Write one word in each space.',
         ['The paragraph above.'],
         ['Ask whether the holder can sell the share right on its own while '
          'keeping the bond.',
          'If it can be sold separately it has an observable value of its own, '
          'which is what makes the allocation possible.',
          'The last blank is what happens to the existing shareholders if '
          'either right is eventually used.']),
        ('fill', 'R2',
         ['Both instruments give the holder a right to the issuer’s shares, '
          'and both let the issuer pay a {lower} coupon than straight debt '
          'would require.',
          'A convertible bond is one instrument. The right cannot be sold '
          'apart from the bond, so under US GAAP the whole of the proceeds is '
          'usually recorded as a {liability} and no part of it reaches equity '
          'at issue.',
          'A detachable warrant can be traded on its own, so it has a value '
          'that can be observed. The proceeds are {allocated} between the bond '
          'and the warrants, and the warrant portion is credited to paid-in '
          'capital.',
          'Either way, exercise or conversion issues new shares, so the '
          'existing holders own a smaller fraction of the same company. That '
          'is {dilution}, and Volume 15 measures it.'],
         {'lower': ('The share right is worth something, so the coupon can be '
                    'less.', ''),
          'liability': ('One instrument, one classification, under US GAAP.',
                        ''),
          'allocated': ('Split, because the warrant has its own price.',
                        'Students split a convertible too. The test is whether '
                        'the right can be sold on its own.'),
          'dilution': ('More shares over the same earnings.', '')},
         ['higher', 'equity', 'conversion']),
        ('fig', 'matrix', 'The two instruments compared',
         ['Convertible bond', 'Bond with detachable warrants'],
         ['Can the share right be sold separately?',
          'Proceeds at issue', 'On exercise or conversion'],
         [['No, it is embedded in the bond',
           'All recorded as a liability under US GAAP',
           'The bond is replaced by shares; no cash changes hands'],
          ['Yes, the warrant is traded on its own',
           'Allocated between the bond and paid-in capital',
           'Cash is received for the shares, and the bond continues']],
         'The last row is the practical difference. A conversion retires the '
         'debt and brings in no cash; a warrant exercise brings in cash and '
         'leaves the bond outstanding.'),

        ('part', 'Part 4 · Choosing a source',
         'what each one really costs'),

        ('task', 'Exercise 5D',
         'Compare the sources of long-term finance available to Northwind.',
         'Complete both right-hand columns.',
         ['Exercise 5C, and Volume 7 Handout 5 on leases as financing.'],
         ['The second column is what the provider receives, and the third is '
          'what the company gives up.',
          'Two of the five lower the coupon by attaching a right to shares, '
          'and both therefore risk dilution.',
          'The last row is the only one with no fixed charge at all, and that '
          'is both its advantage and its cost.']),
        ('table', _SOURCEH, _source(blank=True), SLATE, _SOURCEW),
        ('answers', 8),
        ('fig', 'buckets', 'Debt against equity, as Part 2 frames it',
         [('DEBT', DEBT,
           ['A fixed charge, due whatever profits are',
            'Interest is deductible for tax',
            'No share of ownership given up']),
          ('EQUITY', PRICE,
           ['No fixed charge, and no obligation to pay',
            'Dividends are not deductible',
            'A permanent share of the company']),
          ('THE HYBRIDS', TERM,
           ['A lower coupon than straight debt',
            'Debt now, equity later if the right is used',
            'Dilution deferred rather than avoided'])],
         'The tax deduction is why debt is cheaper and the fixed charge is why '
         'it is riskier. Part 2 Section B builds its whole capital structure '
         'discussion on that pair.'),

        ('watch', 'The gain or loss on extinguishment is carrying amount less '
                  'cash paid, and the face value never enters it. A stem that '
                  'gives you %s of face, a call at %s and an unamortised '
                  'discount is giving you three numbers and asking for a '
                  'subtraction between two of them.'
                  % (money(BD.face), num(BD.retire_price * 100, 0))),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A gain or loss on the early extinguishment of debt is '
                'measured as:',
         ['Face value less cash paid',
          'Carrying amount less cash paid',
          'Cash paid less the unamortised discount',
          'The call premium alone'],
         1, 'Level A',
         'The books give up the carrying amount and part with the cash. (A) '
         'uses the face value, which ignores every year of amortisation '
         'already recorded.'),

        ('mcq', 'A bond with a %s carrying amount is retired for %s. The '
                'result is:' % (money(BD.retire_carrying),
                                money(BD.retire_cash)),
         ['A gain of %s' % money(BD.retire_loss),
          'A loss of %s' % money(BD.retire_loss),
          'No gain or loss', 'A loss of %s' % money(BD.face
                                                    - BD.retire_carrying)],
         1, 'Level A',
         'More cash went out than the liability stood at, so it is a loss. (D) '
         'is the unamortised discount, which is an input to the carrying '
         'amount rather than the answer.'),

        ('mcq', 'A loss on extinguishment is reported:',
         ['As an extraordinary item',
          'In profit for the period of the extinguishment',
          'As an adjustment to retained earnings',
          'Spread over the remaining original term'],
         1, 'Level B',
         'In profit, at once. (A) is the category US GAAP abolished and (D) '
         'would keep amortising a bond that no longer exists.'),

        ('mcq', 'A company refinances expensive debt at a lower rate and '
                'records a loss. The decision was:',
         ['Clearly wrong, because it produced a loss',
          'Possibly right, if the discounted saving exceeds the loss',
          'Right only if the loss is immaterial',
          'Not assessable from accounting information'],
         1, 'Level C',
         'A one-off charge against a recurring saving is a discounting '
         'question, which is why Part 2 treats refinancing as a capital '
         'decision. (A) reads the accounts as if they were the decision.'),

        ('mcq', 'Proceeds from a bond issued with detachable warrants are:',
         ['Recorded entirely as a liability',
          'Allocated between the bond and paid-in capital',
          'Recorded entirely in equity',
          'Deferred until the warrants are exercised'],
         1, 'Level B',
         'The warrants trade separately and so have an observable value. (A) '
         'is the treatment of a convertible bond, and separability is exactly '
         'what distinguishes the two.'),

        ('mcq', 'When a convertible bond is converted into shares:',
         ['The company receives cash for the new shares',
          'The liability is replaced by equity and no cash moves',
          'A gain is recognised in profit',
          'The bond remains outstanding'],
         1, 'Level B',
         'Conversion exchanges one claim for another. (A) describes a warrant '
         'exercise, where the holder pays for the shares and the bond '
         'continues.'),

        ('mcq', 'The principal advantage of debt finance over equity finance '
                'is that:',
         ['It carries no obligation to pay',
          'Interest is deductible for tax, while dividends are not',
          'It never dilutes existing shareholders',
          'It improves the debt-to-equity ratio'],
         1, 'Level C',
         'The tax shield is why debt is the cheaper source. (C) is true of '
         'straight debt and false of the hybrids in this handout, and (D) is '
         'backwards.'),

        ('tip', 'For any extinguishment, write three numbers: the carrying '
                'amount from the schedule, the cash paid, and the difference. '
                'The face value is in the stem to be used in the entry, not in '
                'the computation of the gain or loss.'),
    ],

    key_extra=[
        ('h3', 'Exercise 5A · the retirement, computed'),
        ('table', _RETH, _ret(), DEBT, _RETW),
        ('h3', 'Exercise 5D · the sources compared'),
        ('table', _SOURCEH, _source(), SLATE, _SOURCEW),
        ('h3', 'The extinguishment entry, completed'),
        ('journal', [
            ('J1', 'The bond repurchased at %s of face after %d years.'
             % (num(BD.retire_price * 100, 0), BD.retire_year),
             [('Bonds Payable', 0, money(BD.face), ''),
              ('Loss on Extinguishment', 0, money(BD.retire_loss), ''),
              ('Discount on Bonds Payable', 1, '',
               money(BD.face - BD.retire_carrying)),
              ('Cash', 1, '', money(BD.retire_cash))]),
        ]),
        ('prose', 'The entry clears the %s of face and the %s of discount that '
                  'were still on the books, which together are the %s carrying '
                  'amount, and pays out %s. The %s difference is the loss, and '
                  'it is the only line of the four that reaches profit.'
                  % (money(BD.face), money(BD.face - BD.retire_carrying),
                     money(BD.retire_carrying), money(BD.retire_cash),
                     money(BD.retire_loss)), 'R2'),
        ('prose', 'Note that the loss arose because rates fell. A bond bought '
                  'back after rates have risen produces a gain, and a company '
                  'that reports one has usually been in trouble rather than in '
                  'luck: its own credit spread is what made its debt cheap.',
         'R2'),
    ],
)
