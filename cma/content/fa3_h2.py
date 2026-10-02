# -*- coding: utf-8 -*-
"""Volume 3, Handout 2 — The Allowance for Credit Losses.

Covers the second half of A.2(a): estimating the allowance for credit losses.
"""
from fadata import N, A, Y, PY
from data import money, num

AR, CASH, DISC, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_AGEH = ['Age of the balance', 'Amount', 'Loss rate', 'Required allowance']
_AGEW = [36, 22, 18, 24]


def _aging(blank=False):
    out = []
    for i in range(len(A.buckets)):
        name, amount, rate, est = A.row(i)
        out.append([name, money(amount), '%.0f%%' % (rate * 100),
                    '' if blank else money(est)])
    out.append(['Total', money(A.gross), '',
                '' if blank else money(A.required)])
    return out


_ROLLH = ['Movement in the allowance during %s' % Y, 'Amount']
_ROLLW = [68, 32]

HANDOUT = dict(
    n=2,
    title='The Allowance for Credit Losses',
    subtitle='Some of what customers owe will never arrive. The company has to say '
             'how much before it knows, and say it every year.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 where the roll-forward is '
                 'worked the way an exam asks for it.',
        collocations=['estimate expected credit losses',
                      'age the receivables ledger', 'write off a balance',
                      'recover an amount previously written off',
                      'charge the allowance against income',
                      'carry receivables at the amount expected to be collected'],
        pairs=['allowance / write-off', 'expense / allowance',
               'estimate / event', 'gross / net'],
        nots=['Writing off a balance does not reduce net income. The expense was '
              'charged when the allowance was raised, which was earlier.',
              'The allowance is not a fund of money. Nothing is set aside, and '
              'there is no cash behind it.'],
    ),

    objectives=[
        'Explain why an allowance is used rather than waiting for a balance to go '
        'bad.',
        'Estimate the allowance from an aging schedule.',
        'Record a write-off and a recovery, and say what each does to net income.',
        'Roll the allowance forward and produce the charge for the year.',
        'Say why the direct write-off method is not acceptable.',
    ],

    terms=[
        ('allowance for credit losses',
         'A contra account holding the amount of receivables not expected to be '
         'collected.', 'مخصص خسائر الائتمان',
         'A contra asset, not a liability and not a fund. The older name is '
         'allowance for doubtful accounts.'),
        ('expected credit loss',
         'The estimate of amounts that will not be collected, made before any '
         'particular account has failed.', 'خسارة ائتمانية متوقعة',
         'Forward-looking by design. The company does not wait for a customer to '
         'default before recognising the cost of lending to them.'),
        ('aging schedule',
         'An analysis of receivables by how long each balance has been '
         'outstanding.', 'جدول أعمار الذمم',
         'The commonest basis for the estimate, because the chance of collection '
         'falls sharply with age.'),
        ('write-off',
         'Removing a specific balance judged uncollectible from the ledger.',
         'شطب',
         'It reduces gross receivables and the allowance by the same amount, so '
         'the carrying amount and net income are both untouched.'),
        ('recovery',
         'Cash received on a balance that had previously been written off.',
         'تحصيل مبلغ مشطوب',
         'The write-off is reinstated first, then the cash is recorded, so the '
         'allowance is restored rather than income being credited.'),
        ('direct write-off method',
         'Charging a loss only when a specific balance fails.',
         'طريقة الشطب المباشر',
         'Not acceptable for financial reporting: it recognises the cost in the '
         'wrong period and leaves receivables overstated in the meantime.'),
    ],

    blocks=[
        ('scene', 'The %s nobody will ever collect' % money(N.allowance), [
            'Northwind’s customers owe %s. The company does not expect to '
            'collect all of it, and it says so on the face of the balance sheet: '
            'the receivables line is presented net of an allowance of %s.'
            % (money(N.ar_gross), money(N.allowance)),
            'No particular customer has been identified as the one who will fail. '
            'That is the point. The company knows from experience that some '
            'proportion of what is owed will not arrive, and it recognises that '
            'cost in the year the sales were made rather than waiting.',
            'This handout produces the %s, records what happens when a specific '
            'balance does fail, and rolls the account forward across the year.'
            % money(N.allowance),
        ]),
        ('fig', 'ranked', 'How the %s is built, bucket by bucket'
                          % money(N.allowance),
         [(A.buckets[0][0], A.row(0)[3], money(A.row(0)[3]), CASH),
          (A.buckets[1][0], A.row(1)[3], money(A.row(1)[3]), DISC),
          (A.buckets[2][0], A.row(2)[3], money(A.row(2)[3]), RUST),
          (A.buckets[3][0], A.row(3)[3], money(A.row(3)[3]), AR)],
         'The oldest bucket holds only %s of the receivables and contributes %s of '
         'the allowance. Age matters far more than size.'
         % (money(A.buckets[3][1]), money(A.row(3)[3])),
         'Northwind at 31 December %s' % Y),

        ('part', 'Part 1 · Why an allowance at all?',
         'and why waiting is not allowed'),

        ('task', 'Exercise 2A',
         'Explain why the cost of uncollectible accounts is recognised before any '
         'particular account fails.',
         'Read and complete. Write one word in each space.',
         ['Handout 1, for how receivables arise.'],
         ['Blank 2 is the principle from Volume 2 that decides which year the cost '
          'belongs to.',
          'Blank 3 is the method that waits, and the sentence tells you it is not '
          'acceptable.',
          'The last blank is what receivables would be if no allowance were '
          'raised.']),
        ('fill', 'R2',
         ['Selling on credit carries a cost. Some customers will not pay, and a '
          'company that extends credit to a thousand customers knows with near '
          'certainty that it is extending credit to a few that will {fail}, even '
          'though it cannot say which.',
          'That cost belongs to the year in which the sales were made, because '
          'the sales caused it. Charging it in some later year when a particular '
          'customer finally collapses would break the {matching} principle, and it '
          'would do so by several years in a bad case.',
          'Charging only when a balance fails is called the {direct} write-off '
          'method. It is forbidden for financial reporting precisely because it '
          'puts the cost in the wrong year, and because in the meantime it leaves '
          'receivables {overstated} on the balance sheet at an amount nobody '
          'expects to collect.'],
         {'fail': ('Known in aggregate, unknown individually.', ''),
          'matching': ('The sales caused the loss, so they share its year.', ''),
          'direct': ('Waiting for the event is the method that is not allowed.',
                     ''),
          'overstated': ('Carrying an asset at an amount nobody expects to '
                         'collect.',
                         'Students see the direct method as merely simpler. It is '
                         'wrong in two places at once: the year of the charge and '
                         'the carrying amount.')},
         ['succeed', 'indirect', 'understated']),
        ('fig', 'scale',
         'THE ALLOWANCE METHOD — REQUIRED',
         ['The cost is charged in the year of the sales',
          'Receivables are carried at what is expected',
          'No particular customer need be identified',
          'An estimate, revised every year'],
         'THE DIRECT METHOD — NOT ACCEPTABLE',
         ['The cost is charged years later',
          'Receivables sit at an amount nobody expects',
          'Waits for a specific failure',
          'Accurate, and in the wrong period']),

        ('part', 'Part 2 · Producing the estimate',
         'the aging schedule'),

        ('prose', 'The standards call the estimate an expected credit loss, and '
                  'the adjective is the whole of it. The company is not recording '
                  'a loss that has happened. It is recording the loss it expects '
                  'to happen, on sales it has already made, before any customer '
                  'has defaulted.', 'R2'),

        ('task', 'Exercise 2B',
         'Estimate the required allowance from an aging schedule.',
         'Complete the last column, then total it.',
         ['Exercise 2A'],
         ['Each row is a simple multiplication. Do them one at a time and do not '
          'round.',
          'The amounts must add to gross receivables of %s. Check that before you '
          'start.' % money(N.ar_gross),
          'Your total is the allowance that must stand on the balance sheet at the '
          'year end — not the charge for the year. The difference between '
          'those two is Part 4.']),
        ('table', _AGEH, _aging(blank=True), AR, _AGEW),
        ('answers', 5),
        ('fig', 'matrix', 'Why the rate rises so steeply with age',
         ['Not yet due', '1 to 30 days past due', '31 to 90 days past due',
          'More than 90 days past due'],
         ['Loss rate', 'What the delay usually means'],
         [['1%', 'Normal trading; most of this will arrive'],
          ['5%', 'Administrative delay, usually resolved'],
          ['15%', 'A dispute, or a customer under strain'],
          ['50%', 'Serious difficulty; half of it will not arrive']],
         'The oldest bucket is %s of the receivables and %s of the allowance. That '
         'is why the schedule is built by age rather than by customer size.'
         % ('5%', '43%')),

        ('part', 'Part 3 · When a balance actually fails',
         'write-offs and recoveries'),

        ('prose', 'The estimate is made in advance. Eventually a particular '
                  'customer does fail, and the balance has to come out of the '
                  'ledger. That event is a write-off, and it is far less dramatic '
                  'in the accounts than students expect.', 'R2'),
        ('prose', 'A write-off reduces gross receivables and reduces the allowance '
                  'by the same amount. The carrying amount does not move, and net '
                  'income does not move either, because the expense was charged '
                  'when the allowance was raised. The write-off merely records '
                  'which customer it turned out to be.', 'R2'),

        ('task', 'Exercise 2C',
         'Record a write-off and a recovery, and say what each does to net income.',
         'Complete the journal entries. Write the account names and the amounts.',
         ['Exercise 2B, and the two paragraphs above.'],
         ['J1 touches two accounts and neither of them is an expense. Think about '
          'why before you write it.',
          'A recovery is recorded in two steps, and J2 is the first of them: undo '
          'the write-off.',
          'J3 is then an ordinary collection, exactly as in Handout 1.']),
        ('journal', [
            ('J1', ('A customer balance of %s is judged uncollectible and written '
                    'off.' % money(31_000),
                    'Net income does not move. The expense was charged earlier.'),
             [('Allowance for Credit Losses', 0, '', ''),
              ('Accounts Receivable', 1, '', '')]),
            ('J2', ('A customer written off earlier pays %s. Step one: reinstate '
                    'the receivable.' % money(4_000),
                    'The write-off is undone before the cash is recorded.'),
             [('Accounts Receivable', 0, '', ''),
              ('Allowance for Credit Losses', 1, '', '')]),
            ('J3', 'Step two: record the cash received.',
             [('Cash', 0, '', ''),
              ('Accounts Receivable', 1, '', '')]),
        ]),
        ('fig', 'fork', 'Three events, and only one of them touches net income',
         [('The allowance is raised or increased',
           'NET INCOME FALLS — this is the expense', RUST),
          ('A specific balance is written off',
           'NET INCOME UNCHANGED — gross and allowance fall together', SLATE),
          ('A written-off balance is recovered',
           'NET INCOME UNCHANGED — the allowance is restored', CASH)]),

        ('part', 'Part 4 · The roll-forward',
         'from the estimate to the charge for the year'),

        ('task', 'Exercise 2D',
         'Roll the allowance forward and produce the charge for the year.',
         'Complete the schedule. The closing balance is the figure you produced in '
         'Exercise 2B.',
         ['Exercises 2B and 2C'],
         ['Four figures move the account and you have three of them. Work out the '
          'fourth.',
          'The charge for the year is what makes the account close on the required '
          'balance, not the other way round.',
          'Write-offs reduce the allowance. Recoveries restore it.']),
        ('table', _ROLLH,
         [['Allowance at 1 January %s' % Y, money(N.allowance_py)],
          ['Charge for credit losses for the year', '______________'],
          ['Less balances written off', money(-N.writeoffs)],
          ['Add recoveries of amounts previously written off',
           money(N.recoveries)],
          ['Allowance at 31 December %s' % Y, money(N.allowance)]],
         RUST, _ROLLW),
        ('answers', 1),
        ('fill', 'R3',
         ['The closing allowance is fixed by the aging schedule at %s, and the '
          'opening balance was %s. Write-offs of %s reduced the account during the '
          'year and recoveries of %s restored part of it.'
          % (money(N.allowance), money(N.allowance_py), money(N.writeoffs),
             money(N.recoveries)),
          'The charge for the year is whatever makes those four figures agree, '
          'which is {%s}. It is a balancing figure, and that is the single most '
          'important thing to understand about it.' % money(N.bad_debt_expense),
          'Notice the direction of the reasoning. The company does not decide on a '
          'charge and see where the allowance lands. It decides what the allowance '
          'must {be}, and the charge follows.',
          'That is why a year of unusually heavy write-offs does not by itself '
          'produce a large charge. If the allowance was adequate, the write-offs '
          'simply {consume} it, and the charge for the year reflects only what is '
          'needed to restore the {balance} the schedule requires.'],
         {money(N.bad_debt_expense): ('%s − %s + %s − %s.'
                                      % (money(N.allowance), money(N.allowance_py),
                                         money(N.writeoffs), money(N.recoveries)),
                                      ''),
          'be': ('The required balance drives the charge.',
                 'Students compute a charge from a percentage of sales and then '
                 'treat the allowance as whatever results, which is the reasoning '
                 'reversed.'),
          'consume': ('The write-offs use the allowance up; they do not create '
                      'the charge.', ''),
          'balance': ('Restore the required balance, no more.', '')},
         [money(N.allowance), money(N.writeoffs), 'expense']),
        ('fig', 'bridge',
         'Allowance at 1 January %s' % Y, N.allowance_py,
         [('Charge for credit losses — the balancing figure',
           N.bad_debt_expense),
          ('Balances written off', -N.writeoffs),
          ('Recoveries', N.recoveries)],
         'Allowance at 31 December %s' % Y, N.allowance),

        ('task', 'Exercise 2E',
         'Say what the allowance does and does not do to the balance sheet.',
         'Sort each statement into the column that says whether it is true.',
         ['Exercise 2D'],
         ['Two of these describe the allowance as something it is not. Both are '
          'common beliefs.',
          'Ask whether any cash is involved anywhere in this account. None is.',
          'The last one is about which figure a reader of the balance sheet '
          'actually sees.']),
        ('sortgrid',
         ['Statement about the allowance', 'TRUE', 'FALSE'],
         ['It is a contra asset deducted from gross receivables',
          'It is a fund of cash set aside to cover losses',
          'Raising it reduces net income',
          'It is a liability owed to someone',
          'A write-off against it leaves the carrying amount unchanged',
          'It is an estimate revised at every reporting date'],
         ['TRUE', 'FALSE', 'TRUE', 'FALSE', 'TRUE', 'TRUE'],
         'The two false ones are the two things students most often believe: that '
         'it holds money, and that it is owed to somebody.'),
        ('fig', 'ranked', 'What a reader of the balance sheet actually sees',
         [('Gross receivables — in the note', N.ar_gross,
           money(N.ar_gross), SLATE),
          ('Allowance — in the note, and on the face', N.allowance,
           money(-N.allowance), RUST),
          ('Carrying amount — the figure in the total', N.ar_net,
           money(N.ar_net), CASH)],
         'Only the last of these three enters total assets. The other two are '
         'disclosed so a reader can judge the quality of the first.'),

        ('watch', 'A write-off is not an expense. If a question tells you a company '
                  'wrote off %s and asks for the effect on net income, the answer '
                  'is none — unless the allowance was inadequate and had to be '
                  'topped up.' % money(N.writeoffs)),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A company writes off a $12,000 customer balance against an '
                'adequate allowance. The effect on net income is:',
         ['A decrease of $12,000', 'An increase of $12,000', 'No effect',
          'A decrease of $12,000 only if the customer is a related party'],
         2, 'Level B',
         'Gross receivables and the allowance fall by the same amount, so the '
         'carrying amount and net income are both untouched. The expense was '
         'charged when the allowance was raised. (A) is the intuitive answer and '
         'the wrong one.'),

        ('mcq', 'An aging schedule indicates a required allowance of %s. The '
                'allowance before adjustment stands at %s credit. The charge for '
                'credit losses for the year is:'
                % (money(N.allowance), money(N.allowance - N.bad_debt_expense)),
         [money(N.allowance), money(N.bad_debt_expense),
          money(N.allowance + N.bad_debt_expense), money(N.writeoffs)],
         1, 'Level C',
         'The charge is the amount needed to bring the allowance to the required '
         'balance: %s − %s = %s. (A) is the required balance itself, which is '
         'the most frequently chosen wrong answer because it is the figure the '
         'schedule produces.'
         % (money(N.allowance), money(N.allowance - N.bad_debt_expense),
            money(N.bad_debt_expense))),

        ('mcq', 'The allowance for credit losses is best described as:',
         ['A liability for amounts owed to customers',
          'A contra asset deducted from gross accounts receivable',
          'A reserve of cash set aside to absorb losses',
          'An expense of the current period'],
         1, 'Level A',
         'It is a contra asset. (A) reverses the direction of the obligation. (C) '
         'is the persistent myth — no cash is set aside anywhere. (D) confuses '
         'the allowance with the charge that creates it.'),

        ('mcq', 'A customer whose balance was written off last year unexpectedly '
                'pays $4,000. The correct treatment is to:',
         ['Credit $4,000 to other income',
          'Reinstate the receivable by crediting the allowance, then record the '
          'cash collection',
          'Credit $4,000 directly to the charge for credit losses',
          'Make no entry, because the balance no longer exists'],
         1, 'Level B',
         'The recovery is recorded in two steps: undo the write-off, then record '
         'the cash. This restores the allowance rather than crediting income. (A) '
         'and (C) both route the amount through income, which double-counts the '
         'original charge.'),

        ('mcq', 'Why is the direct write-off method unacceptable for financial '
                'reporting?',
         ['It is more difficult to apply than the allowance method',
          'It recognises the cost in a later period than the sales that caused it, '
          'and leaves receivables overstated in the meantime',
          'It overstates the charge for credit losses',
          'It is acceptable, but only for small companies'],
         1, 'Level B',
         'Two faults, not one: the wrong period for the expense, and an asset '
         'carried at an amount nobody expects to collect. (A) is false — it is '
         'simpler. (D) describes a tax rule, not a reporting one.'),

        ('mcq', 'Northwind’s aging schedule shows %s in the oldest bucket at a '
                '50%% loss rate. The contribution of that bucket to the allowance '
                'is:' % money(A.buckets[3][1]),
         [money(A.buckets[3][1]), money(A.row(3)[3]),
          money(A.buckets[3][1] * 2), money(N.allowance)],
         1, 'Level A',
         '%s × 50%% = %s. (A) writes off the whole bucket, which the rate does '
         'not say. (D) is the total allowance across all four buckets.'
         % (money(A.buckets[3][1]), money(A.row(3)[3]))),

        ('mcq', 'A company suffers unusually heavy write-offs during the year but '
                'its aging schedule produces the same required allowance as last '
                'year. Compared with last year, the charge for credit losses will '
                'be:',
         ['Unchanged, because the required allowance is unchanged',
          'Higher, because the allowance has to be rebuilt after the write-offs',
          'Lower, because the bad accounts have been removed',
          'Zero, because the write-offs absorbed the allowance'],
         1, 'Level C',
         'The write-offs consume the allowance, so a larger charge is needed to '
         'restore it to the required balance. (A) confuses the closing balance with '
         'the movement, which is exactly what the roll-forward in Part 4 separates.'),

        ('tip', 'Draw the allowance as a four-line roll-forward every single time: '
                'opening, charge, write-offs, recoveries, closing. The question '
                'will give you four of the five, and the one it withholds is the '
                'answer.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2B · the completed aging schedule'),
        ('table', _AGEH, _aging(), AR, _AGEW),
        ('h3', 'Exercise 2C · the completed entries'),
        ('journal', [
            ('J1', 'A balance judged uncollectible is written off.',
             [('Allowance for Credit Losses', 0, money(31_000), ''),
              ('Accounts Receivable', 1, '', money(31_000))]),
            ('J2', 'A written-off balance is reinstated on recovery.',
             [('Accounts Receivable', 0, money(4_000), ''),
              ('Allowance for Credit Losses', 1, '', money(4_000))]),
            ('J3', 'The cash is then collected in the ordinary way.',
             [('Cash', 0, money(4_000), ''),
              ('Accounts Receivable', 1, '', money(4_000))]),
        ]),
        ('h3', 'Exercise 2D · the completed roll-forward'),
        ('table', _ROLLH,
         [['Allowance at 1 January %s' % Y, money(N.allowance_py)],
          ['Charge for credit losses for the year',
           money(N.bad_debt_expense)],
          ['Less balances written off', money(-N.writeoffs)],
          ['Add recoveries of amounts previously written off',
           money(N.recoveries)],
          ['Allowance at 31 December %s' % Y, money(N.allowance)]],
         RUST, _ROLLW),
    ],
)
