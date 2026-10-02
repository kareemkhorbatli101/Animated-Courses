# -*- coding: utf-8 -*-
"""Volume 7, Handout 1 — Two Liability Questions: Refinancing and Warranties.

Covers A.2(o) the classification of short-term debt expected to be refinanced,
and A.2(p) the assurance and service approaches to warranties.
"""
from fadata import N, W, RF, Y, PY
from data import money, num

LIAB, TAX, LEASE, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_REFH = ['The situation at 31 December %s' % Y, 'Current', 'Non-current']
_REFW = [50, 25, 25]


def _refi(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['No refinancing agreement in place', c(money(RF.note)), c(money(0))],
        ['Agreement signed before the statements are issued, for the full %s'
         % money(RF.refinanced_full), c(money(0)), c(money(RF.note))],
        ['Agreement covers only %s of the note'
         % money(RF.refinanced_part), c(money(RF.current_if_part)),
         c(money(RF.refinanced_part))],
        ['Agreement signed after the statements are issued',
         c(money(RF.note)), c(money(0))],
    ]


_WARH = ['Movement in the warranty provision during %s' % Y, 'Amount']
_WARW = [66, 34]


def _war(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Provision at 1 January %s' % Y, money(W.opening)],
        ['Charge for the year, %s%% of sales of %s'
         % (int(W.rate * 100), money(N.sales)), c(money(W.charge))],
        ['Less claims settled during the year', c(money(-W.claims))],
        ['Provision at 31 December %s' % Y, c(money(W.closing))],
    ]


HANDOUT = dict(
    n=1,
    title='Two Liability Questions: Refinancing and Warranties',
    subtitle='The whole of Section A’s liability measurement is two '
             'questions. One is about a date, and the other is about whether a '
             'promise was sold.',
    register='R1 moving to R2',

    lang=dict(
        register='R1 while each question is set up, R2 once the conditions are '
                 'applied.',
        collocations=['classify a liability as current',
                      'refinance a short-term obligation',
                      'recognise a provision for warranty claims',
                      'settle a claim against the provision',
                      'allocate part of the transaction price',
                      'defer revenue over the service period'],
        pairs=['current / non-current',
               'intent / ability', 'assurance / service',
               'provision / deferred revenue'],
        nots=['Intending to refinance is not enough. The ability has to be '
              'demonstrated, and the standards say how.',
              'A warranty is not always a liability. One kind of warranty is a '
              'performance obligation and produces revenue instead.'],
    ),

    objectives=[
        'Say when short-term debt expected to be refinanced may be classified '
        'as non-current.',
        'Classify a note under four different refinancing situations.',
        'Distinguish an assurance warranty from a service warranty.',
        'Record and roll forward a warranty provision.',
        'Say what happens to the transaction price when a warranty is a '
        'separate promise.',
    ],

    terms=[
        ('refinance',
         'To replace a short-term obligation with a longer-term one.',
         'إعادة التمويل',
         'The test is not whether the company wants to. It is whether it has '
         'demonstrated that it can.'),
        ('provision',
         'A liability of uncertain timing or amount.', 'مخصص',
         'A warranty provision is a real liability: the obligation exists, and '
         'only its size and timing are estimated.'),
        ('assurance warranty',
         'A promise that the product will work as specified.', 'ضمان التأكيد',
         'Not a separate promise. The customer did not buy it; it came with the '
         'product, so it produces a provision rather than revenue.'),
        ('service warranty',
         'A promise of a service beyond the product working as specified.',
         'ضمان الخدمة',
         'A separate performance obligation. Part of the transaction price is '
         'allocated to it and recognised over the service period.'),
        ('refinancing agreement',
         'A binding arrangement to replace short-term debt with long-term '
         'financing.', 'اتفاقية إعادة التمويل',
         'It must be in place before the statements are issued, and it is '
         'evidence of ability rather than of intention.'),
    ],

    blocks=[
        ('scene', 'Two liability questions, and no others', [
            'Section A asks remarkably little about liability measurement. There '
            'is no bond amortisation, no pension arithmetic and no provisions '
            'beyond warranties.',
            'What it asks is two questions. The first is about a date: when may a '
            'debt that falls due next year be reported as non-current? The second '
            'is about a promise: when is a warranty a liability, and when is it '
            'revenue the company has not yet earned?',
            'Northwind faces both. It has a %s note falling due in March %s, and '
            'it gives a warranty on every component it sells.'
            % (money(RF.note), '20X5'),
        ]),
        ('fig', 'buckets', 'The whole of liability measurement in Section A',
         [('QUESTION ONE', LIAB,
           ['A note due next year', 'Can it be reported non-current?',
            'The answer is about ability', 'Part 1 and Part 2', '']),
          ('QUESTION TWO', TAX,
           ['A warranty given on a sale', 'Is it a liability or revenue?',
            'The answer is about what was sold', 'Part 3 and Part 4', '']),
          ('NOT ASKED AT ALL', SLATE,
           ['Bond premium amortisation', 'Pension obligations',
            'Restructuring provisions', 'Contingent liabilities generally', ''])],
         'The third column is as useful as the other two. Section A does not ask '
         'for any of it, and time spent on it is time taken from Volume 4.'),

        ('part', 'Part 1 · The refinancing question',
         'intention is not the test'),

        ('task', 'Exercise 1A',
         'Say when a short-term debt may be classified as non-current.',
         'Read and complete. Write one word in each space.',
         ['Volume 1 Handout 2, for the current and non-current test.'],
         ['The ordinary rule comes first. The exception comes second, and it has '
          'conditions.',
          'Blank 2 is the thing that is not enough on its own.',
          'The last blank is the moment by which the agreement has to be in '
          'place.']),
        ('fill', 'R1',
         ['The ordinary rule is the one from Volume 1. A debt due within a year of '
          'the balance sheet date is a {current} liability, and Northwind’s '
          '%s note falls due in March.' % money(RF.note),
          'There is one exception, and it exists because a company that will '
          'simply replace the debt with a longer one is not really facing a '
          'payment next year at all.',
          'To use it the company must intend to refinance on a long-term basis and '
          'must demonstrate the {ability} to do so. Intention alone is never '
          'enough: every company with a cash problem intends to refinance.',
          'Ability is demonstrated in one of two ways. Either the debt is actually '
          'refinanced after the balance sheet date but before the statements are '
          '{issued}, or a binding refinancing agreement is in place by then. '
          'Either way the evidence must exist before the reader sees the '
          'statements.'],
         {'current': ('Due within a year, so current by the ordinary rule.', ''),
          'ability': ('Demonstrated, not asserted.',
                      'Students accept management’s stated intention. The '
                      'standard asks for evidence of ability.'),
          'issued': ('Before issuance, not before the year end.', '')},
         ['non-current', 'willingness', 'audited']),
        ('fig', 'fork', 'One debt, and the question that reclassifies it',
         [('Is the debt due within one year?',
           'YES → current, unless the exception applies', LIAB),
          ('Does the company intend to refinance AND demonstrate it can?',
           'YES → non-current, to the extent demonstrated', TAX),
          ('What demonstrates ability?',
           'Actual refinancing, or a binding agreement, before issuance', OK)]),

        ('task', 'Exercise 1B',
         'Classify the note under four refinancing situations.',
         'Complete the table. Split the note between the two columns where it has '
         'to be split.',
         ['Exercise 1A'],
         ['Each row is the same %s note under different facts.' % money(RF.note),
          'The third row is the one that splits. Only what is covered may move.',
          'The fourth row turns on a date, and it is the date of issuance rather '
          'than the balance sheet date.']),
        ('table', _REFH, _refi(blank=True), LIAB, _REFW),
        ('answers', 8),
        ('fig', 'matrix', 'The same note, four sets of facts',
         ['No agreement', 'Full agreement before issuance',
          'Agreement for %s only' % money(RF.refinanced_part),
          'Agreement after issuance'],
         ['Current', 'Non-current'],
         [[money(RF.note), money(0)],
          [money(0), money(RF.note)],
          [money(RF.current_if_part), money(RF.refinanced_part)],
          [money(RF.note), money(0)]],
         'Only what the agreement actually covers may be reclassified. The third '
         'row is where the marks are, because the note splits.'),

        ('part', 'Part 2 · The warranty question',
         'liability, or revenue not yet earned?'),

        ('prose', 'Every component Northwind sells carries a warranty, and the '
                  'accounting depends entirely on what that warranty promises. '
                  'Two kinds exist and they are treated in completely different '
                  'places in the statements.', 'R2'),
        ('prose', 'An assurance warranty promises only that the product will work '
                  'as it was specified to. The customer did not buy it separately '
                  'and could not have declined it. It is therefore not a promise '
                  'the company sold, and the expected cost of honouring it is a '
                  'provision.', 'R2'),

        ('task', 'Exercise 1C',
         'Distinguish the two kinds of warranty and say where each is reported.',
         'Sort each warranty into the column it belongs in.',
         ['Exercise 1B, and the two paragraphs above.'],
         ['Ask one question: could the customer have bought this separately, or '
          'declined it?',
          'A warranty that merely promises the product works is not a separate '
          'promise, however long it runs.',
          'The last one is the trap. Length is not the test.']),
        ('sortgrid',
         ['The warranty given', 'ASSURANCE — a provision',
          'SERVICE — a performance obligation'],
         ['A one-year promise that the component works as specified',
          'A three-year extended plan the customer paid extra for',
          'A plan covering accidental damage, sold separately',
          'A two-year promise that the component works as specified',
          'Free annual servicing included in the price but also sold separately',
          'A legal requirement that the product conform to specification'],
         ['ASSURANCE — a provision', 'SERVICE — a performance obligation',
          'SERVICE — a performance obligation', 'ASSURANCE — a provision',
          'SERVICE — a performance obligation',
          'ASSURANCE — a provision'],
         'The fourth item runs for two years and is still assurance. Length is not '
         'the test; what is promised is.'),
        ('fig', 'scale',
         'AN ASSURANCE WARRANTY',
         ['Promises only that the product works',
          'Could not have been declined',
          'Produces a provision, and an expense',
          'No part of the price is allocated to it'],
         'A SERVICE WARRANTY',
         ['Promises more than the product working',
          'Could have been bought separately',
          'Produces a contract liability, and revenue',
          'Part of the transaction price is allocated to it']),

        ('part', 'Part 3 · The provision',
         'recording it and rolling it forward'),

        ('task', 'Exercise 1D',
         'Record the warranty charge and roll the provision forward.',
         'Complete the schedule, then the journal entries underneath.',
         ['Exercise 1C'],
         ['The charge is %s%% of the year’s sales of %s.'
          % (int(W.rate * 100), money(N.sales)),
          'Claims settled reduce the provision. They are not an expense when they '
          'are paid — the expense was charged when the provision was '
          'raised.',
          'The closing figure is whatever the three lines above it produce.']),
        ('table', _WARH, _war(blank=True), TAX, _WARW),
        ('answers', 3),
        ('journal', [
            ('J1', ('The warranty charge for the year, %s%% of sales.'
                    % int(W.rate * 100),
                    'The expense is recognised now, on sales already made.'),
             [('Warranty Expense', 0, '', ''),
              ('Warranty Provision', 1, '', '')]),
            ('J2', ('Claims of %s settled in cash during the year.'
                    % money(W.claims),
                    'No expense. The provision absorbs it, exactly as an '
                    'allowance absorbs a write-off.'),
             [('Warranty Provision', 0, '', ''),
              ('Cash', 1, '', '')]),
        ]),
        ('fig', 'bridge',
         'Provision at 1 January %s' % Y, W.opening,
         [('Charge for the year', W.charge),
          ('Claims settled', -W.claims)],
         'Provision at 31 December %s' % Y, W.closing),

        ('part', 'Part 4 · When the warranty is revenue instead',
         'the service approach'),

        ('task', 'Exercise 1E',
         'Say what happens to the transaction price when a warranty is a separate '
         'promise.',
         'Read and complete.',
         ['Exercise 1D', 'Volume 2 Handout 3, for allocation.'],
         ['A service warranty is a performance obligation, so Volume 2’s '
          'five steps apply to it.',
          'Blank 2 is the step that gives it a share of the price.',
          'The last blank is the balance sheet line the unearned part sits in '
          'until the service period runs.']),
        ('fill', 'R2',
         ['A service warranty is a separate performance obligation, so it is not '
          'accounted for as a {provision} at all. Nothing is estimated and no '
          'expense is charged on the day of sale.',
          'Instead it goes through the five steps from Volume 2. Part of the '
          'transaction price is {allocated} to it on a relative standalone selling '
          'price basis, exactly as the support contract in that volume was.',
          'The allocated amount is then recognised as revenue {over} the warranty '
          'period, because the customer receives and consumes the benefit of the '
          'cover as time passes.',
          'Until it is earned, the unrecognised part sits on the balance sheet as '
          'a contract {liability}. The company has been paid for cover it has not '
          'yet provided, which is the same position as %s’s support contract '
          'in Volume 2.' % 'Meridian',
          'One consequence is worth stating. The same warranty period produces an '
          '{expense} on day one under the assurance approach and revenue spread '
          'across the period under the service approach, so the two treatments '
          'move reported profit in opposite directions in the year of sale.'],
         {'provision': ('Not a provision — a performance obligation.', ''),
          'allocated': ('Step 4, on a relative standalone basis.', ''),
          'over': ('Over the period, as the cover is provided.',
                   'Students recognise the whole service warranty on the day of '
                   'sale, which pulls years of revenue into one period.'),
          'liability': ('Paid for, not yet provided.', ''),
          'expense': ('One charges on day one; the other earns over time.', '')},
         ['estimate', 'immediately', 'asset']),
        ('fig', 'matrix', 'Two warranties, two completely different treatments',
         ['Assurance warranty', 'Service warranty'],
         ['On the day of sale', 'As time passes'],
         [['An expense and a provision, estimated',
           'Claims are settled against the provision'],
          ['Part of the price allocated, no expense',
           'The allocated amount is recognised as revenue']],
         'One produces an expense immediately and no revenue ever. The other '
         'produces revenue over time and no expense at the point of sale.'),

        ('watch', 'A warranty provision behaves exactly like the allowance for '
                  'credit losses in Volume 3. The expense is charged when the '
                  'provision is raised, and settling a claim reduces the '
                  'provision without touching income. If a question asks the '
                  'effect of paying a claim, the answer is none.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A note of %s falls due in March. A binding refinancing agreement '
                'for the full amount is signed before the financial statements '
                'are issued. The note should be classified as:' % money(RF.note),
         ['Current, because it falls due within one year',
          'Non-current, because the ability to refinance has been demonstrated',
          'Half current and half non-current',
          'Non-current, provided management intends to refinance'],
         1, 'Level B',
         'The agreement demonstrates ability before issuance, so the exception '
         'applies. (D) is the trap: intention alone is never sufficient, and the '
         'word provided in that option is doing work the standard does not '
         'permit.'),

        ('mcq', 'A note of %s falls due within one year. A refinancing agreement '
                'covers only %s of it. The amount reported as a current liability '
                'is:' % (money(RF.note), money(RF.refinanced_part)),
         [money(0), money(RF.current_if_part), money(RF.note),
          money(RF.refinanced_part)],
         1, 'Level C',
         'Only what the agreement covers may be reclassified: %s − %s = %s '
         'stays current. (C) ignores the agreement entirely and (A) applies it to '
         'the whole note.'
         % (money(RF.note), money(RF.refinanced_part),
            money(RF.current_if_part))),

        ('mcq', 'A warranty that promises only that the product will function as '
                'specified is accounted for as:',
         ['A separate performance obligation, with revenue allocated to it',
          'A provision, with the expected cost charged as an expense',
          'A contingent liability disclosed in the notes',
          'A reduction of revenue'],
         1, 'Level A',
         'An assurance warranty is not a promise the customer bought, so it '
         'produces a provision rather than revenue. (A) describes a service '
         'warranty. (C) understates it — the obligation exists and only its '
         'amount is estimated.'),

        ('mcq', 'A company sells a machine with a three-year extended service plan '
                'that customers may buy separately. The plan should be:',
         ['Charged as a warranty provision',
          'Treated as a separate performance obligation, with part of the '
          'transaction price allocated to it',
          'Ignored until a claim is made',
          'Recognised as revenue in full on the day of sale'],
         1, 'Level B',
         'It is a service warranty and therefore a performance obligation, '
         'allocated under Volume 2’s step 4 and recognised over the period. '
         '(D) is the common error and pulls three years of revenue into one.'),

        ('mcq', 'A warranty provision stands at %s. Claims of %s are settled in '
                'cash during the year. The effect on net income of settling those '
                'claims is:' % (money(W.opening), money(W.claims)),
         ['A decrease of %s' % money(W.claims), 'An increase of %s'
          % money(W.claims), 'No effect',
          'A decrease of %s' % money(W.charge)],
         2, 'Level B',
         'The expense was charged when the provision was raised; settling a claim '
         'reduces the provision and cash together. (A) is the intuitive answer and '
         'the wrong one — the same structure as a write-off against the '
         'allowance for credit losses in Volume 3.'),

        ('mcq', 'A warranty provision opened at %s. The charge for the year was %s '
                'and claims of %s were settled. The closing provision is:'
                % (money(W.opening), money(W.charge), money(W.claims)),
         [money(W.closing), money(W.charge), money(W.opening),
          money(W.opening + W.charge)],
         0, 'Level A',
         '%s + %s − %s = %s. (D) omits the claims, which is the only '
         'movement that reduces the provision.'
         % (money(W.opening), money(W.charge), money(W.claims),
            money(W.closing))),

        ('mcq', 'Which of the following determines whether a warranty is an '
                'assurance warranty or a service warranty?',
         ['The length of the warranty period',
          'Whether the customer could have purchased it separately',
          'Whether any claims have been made',
          'The size of the expected cost'],
         1, 'Level C',
         'Separability is the test: a warranty the customer could have bought or '
         'declined is a promise the company sold. (A) is the commonest wrong '
         'answer — a two-year promise that the product works is still '
         'assurance.'),

        ('tip', 'Both questions in this handout are about evidence rather than '
                'intention. A refinancing needs demonstrated ability, and a '
                'service warranty needs a price the customer could have paid '
                'separately. Look for the evidence in the stem before you '
                'classify anything.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1B · the completed classification'),
        ('table', _REFH, _refi(), LIAB, _REFW),
        ('h3', 'Exercise 1D · the completed provision'),
        ('table', _WARH, _war(), TAX, _WARW),
        ('journal', [
            ('J1', 'The warranty charge for the year.',
             [('Warranty Expense', 0, money(W.charge), ''),
              ('Warranty Provision', 1, '', money(W.charge))]),
            ('J2', 'Claims settled in cash.',
             [('Warranty Provision', 0, money(W.claims), ''),
              ('Cash', 1, '', money(W.claims))]),
        ]),
    ],
)
