# -*- coding: utf-8 -*-
"""Volume 3, Handout 3 — Selling the Receivable: With Recourse and Without.

Covers A.2(b): receivables sold on a with-recourse basis and on a
without-recourse basis, and the effect on the balance sheet.
"""
from fadata import N, F, Y, PY
from data import money, num

AR, CASH, DISC, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_CMPH = ['', 'Without recourse', 'With recourse, qualifying as a sale',
         'With recourse, failing the sale test']
_CMPW = [28, 24, 24, 24]


def _cmp(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Receivables removed from the balance sheet?',
         c('Yes — all %s' % money(F.sold)),
         c('Yes — all %s' % money(F.sold)),
         c('No — they stay')],
        ['Cash received now', money(F.cash_now), money(F.cash_now),
         money(F.cash_now)],
        ['A liability recorded?', c('No'),
         c('Yes — the recourse obligation, %s'
           % money(F.recourse_obligation)),
         c('Yes — a borrowing of %s' % money(F.borrowing_liability))],
        ['Charged to income now', c(money(F.loss_without_recourse)),
         c(money(F.loss_with_recourse)), c('Nothing — the fee is interest')],
        ['Who bears the credit risk?', c('The factor'), c('Northwind'),
         c('Northwind')],
    ]


HANDOUT = dict(
    n=3,
    title='Selling the Receivable: With Recourse and Without',
    subtitle='A company short of cash can sell what customers owe it. Whether the '
             'receivable leaves the balance sheet turns on who still carries the '
             'risk.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 for the final comparison, '
                 'which is written the way an exam sets it.',
        collocations=['factor a receivable', 'sell on a without-recourse basis',
                      'retain the credit risk', 'derecognise a financial asset',
                      'account for a transfer as a secured borrowing',
                      'withhold a retainer against returns'],
        pairs=['with recourse / without recourse',
               'sale / secured borrowing', 'derecognise / retain',
               'fee / interest'],
        nots=['Receiving cash from a factor does not by itself mean the receivable '
              'has been sold. The accounting depends on who still bears the risk.',
              'With recourse does not automatically mean it is a borrowing. It can '
              'still be a sale if the transferor has genuinely given up control.'],
    ),

    objectives=[
        'Say what factoring is and why a company does it.',
        'Distinguish a transfer with recourse from one without recourse.',
        'Record a without-recourse sale and compute the loss.',
        'Record a with-recourse transfer under both outcomes of the sale test.',
        'Explain what a failed sale test does to the balance sheet, and to every '
        'ratio built on it.',
    ],

    terms=[
        ('factoring',
         'Selling receivables to a finance company for cash before they fall due.',
         'بيع الذمم المدينة',
         'A financing decision rather than a trading one. The company is buying '
         'time, and paying for it.'),
        ('without recourse',
         'The buyer of the receivables absorbs any loss if a customer fails to '
         'pay.', 'بدون حق الرجوع',
         'The credit risk has genuinely moved, so the receivables come off the '
         'balance sheet.'),
        ('with recourse',
         'The seller must make good any receivable the customer fails to pay.',
         'مع حق الرجوع',
         'The credit risk stays behind. Whether the transfer is still a sale '
         'depends on the control tests.'),
        ('derecognise',
         'To remove an asset from the balance sheet.', 'إلغاء الاعتراف',
         'The question in this handout. Everything else follows from whether '
         'derecognition is permitted.'),
        ('secured borrowing',
         'A transfer accounted for as a loan, with the receivables pledged as '
         'security.', 'اقتراض مضمون',
         'What a transfer becomes when it fails the sale test. The receivables '
         'stay and a liability appears beside them.'),
        ('holdback',
         'An amount the factor keeps back until the receivables are collected.',
         'المبلغ المحتجز',
         'A receivable from the factor, not a loss. It comes back once the '
         'collections are settled.'),
    ],

    blocks=[
        ('scene', 'Cash now, at a price', [
            'Northwind collects most of its invoices within sixty days, but it '
            'does not always want to wait. In November it agreed to sell %s of '
            'receivables to a finance company.' % money(F.sold),
            'The factor charges a fee of %s, which is %s of the amount sold, and '
            'holds back a further %s until the receivables have been collected. '
            'Northwind receives %s in cash immediately.'
            % (money(F.fee), '3%', money(F.holdback), money(F.cash_now)),
            'Those figures are the same under every version of this arrangement. '
            'What changes, and changes completely, is whether the %s of '
            'receivables leaves Northwind’s balance sheet at all.'
            % money(F.sold),
        ]),
        ('fig', 'ranked', 'Where the %s goes' % money(F.sold),
         [('Cash received immediately', F.cash_now, money(F.cash_now), CASH),
          ('Held back by the factor until collection', F.holdback,
           money(F.holdback), DISC),
          ('Fee charged by the factor', F.fee, money(F.fee), RUST)],
         'Only the last of these three is a cost. The holdback is a receivable '
         'from the factor and it comes back.'),

        ('part', 'Part 1 · Why sell a receivable at all?',
         'and what the fee buys'),

        ('task', 'Exercise 3A',
         'Say what factoring is, what the fee pays for, and what the holdback is.',
         'Read and complete. Write one word in each space.',
         ['Handout 1, for how receivables arise.',
          'Handout 2, for who normally bears the loss when a customer fails.'],
         ['Blank 1 is what the company is really buying when it sells a receivable '
          'at a discount.',
          'Blank 3 is the one item in the arrangement that is not a cost at all.',
          'The last blank is the thing that decides the entire accounting '
          'treatment, and it is not the cash.']),
        ('fill', 'R2',
         ['A receivable is a right to cash at a future date. Selling it converts '
          'that right into cash today, and the fee is what the company pays for '
          '{time}. It is a financing decision, taken for the same reasons a '
          'company borrows.',
          'Northwind sold %s and paid a fee of %s. That fee is a cost and it is '
          'charged to income. The {holdback} of %s is different: the factor keeps '
          'it until the receivables have been collected, and it then comes back, '
          'so it is recorded as a receivable from the factor rather than as a '
          'loss.' % (money(F.sold), money(F.fee), money(F.holdback)),
          'What decides the accounting is none of these figures. It is the '
          'question of who is left carrying the {risk} that a customer does not '
          'pay — and that is settled by one clause in the agreement.'],
         {'time': ('Cash now instead of cash later, and the fee is the price.',
                   ''),
          'holdback': ('Kept back, then returned: an asset, not a cost.',
                       'Students treat the holdback as part of the loss, which '
                       'overstates the charge by the whole retained amount.'),
          'risk': ('Credit risk decides everything that follows.', '')},
         ['interest', 'fee', 'cash']),
        ('fig', 'fork', 'One clause decides the whole treatment',
         [('If a customer fails to pay, who absorbs it?',
           'THE FACTOR → without recourse: the risk has moved', CASH),
          ('If a customer fails to pay, who absorbs it?',
           'NORTHWIND → with recourse: the risk stayed behind', RUST),
          ('And if the risk stayed behind?',
           'Then ask whether control passed anyway — Part 3', SLATE)]),

        ('part', 'Part 2 · Without recourse',
         'the clean case'),

        ('prose', 'Where the sale is without recourse, the factor absorbs any loss '
                  'from a customer who fails to pay. The credit risk has genuinely '
                  'moved, Northwind has no further involvement, and the transfer '
                  'is a sale in substance as well as in name.', 'R2'),
        ('prose', 'The receivables are therefore removed from the balance sheet in '
                  'full. Cash and the holdback come in, the receivables go out, and '
                  'the difference is a loss on sale. Nothing is left behind and no '
                  'liability is created.', 'R2'),

        ('task', 'Exercise 3B',
         'Record a without-recourse sale and compute the loss.',
         'Complete the journal entry. Four accounts move.',
         ['Exercise 3A, and the two paragraphs above.'],
         ['Two debits and two credits. The cash and the holdback both come in.',
          'The receivables go out at their full %s, because all of them have been '
          'sold.' % money(F.sold),
          'The loss is whatever makes the entry balance, and you should be able to '
          'say what it is before you compute it.']),
        ('journal', [
            ('J1', ('%s of receivables sold without recourse. Fee %s, holdback %s.'
                    % (money(F.sold), money(F.fee), money(F.holdback)),
                    'The receivables leave the balance sheet in full.'),
             [('Cash', 0, '', ''),
              ('Due from Factor', 0, '', ''),
              ('Loss on Sale of Receivables', 0, '', ''),
              ('Accounts Receivable', 1, '', '')]),
        ]),
        ('fig', 'bridge',
         'Receivables given up', F.sold,
         [('Cash received now', -F.cash_now),
          ('Due from the factor, to come back', -F.holdback)],
         'Loss on sale', F.loss_without_recourse),

        ('part', 'Part 3 · With recourse',
         'two possible answers, not one'),

        ('task', 'Exercise 3C',
         'Decide whether a with-recourse transfer is a sale or a borrowing.',
         'Read and complete.',
         ['Exercise 3B'],
         ['Blank 1 is what Northwind has promised to do if a customer fails.',
          'Blank 3 names the three conditions that still allow a sale even though '
          'the risk stayed behind.',
          'The last blank is what the transfer becomes if those conditions are not '
          'met.']),
        ('fill', 'R2',
         ['With recourse, Northwind must make {good} any receivable the customer '
          'fails to pay. The credit risk has not moved, and the obvious conclusion '
          'would be that nothing has really been sold.',
          'That conclusion is not automatic. A transfer with recourse is still '
          'accounted for as a sale if three things hold: the receivables are '
          'isolated beyond the reach of Northwind and its creditors, the factor '
          'can pledge or sell them freely, and Northwind keeps no effective '
          '{control} through an agreement to repurchase them.',
          'Where all three hold, the receivables are derecognised exactly as in '
          'Part 2, with one addition: Northwind records a {recourse} obligation of '
          '%s for what it expects to have to make good, and the loss on sale rises '
          'to %s.' % (money(F.recourse_obligation),
                      money(F.loss_with_recourse)),
          'Where they do not hold, nothing is sold at all. The transfer is '
          'accounted for as a secured {borrowing}: the receivables stay on the '
          'balance sheet, a liability of %s appears beside them, and the fee is '
          'treated as interest over the period rather than as a loss today.'
          % money(F.borrowing_liability)],
         {'good': ('The seller stands behind the receivables.', ''),
          'control': ('Three conditions, and control is the last of them.', ''),
          'recourse': ('An extra liability for what will have to be made good.',
                       ''),
          'borrowing': ('Nothing leaves; a liability arrives.',
                        'Students assume with recourse always means a borrowing. '
                        'It can still be a sale, and the three conditions decide.')},
         ['sale', 'risk', 'revenue']),
        ('fig', 'buckets', 'Three outcomes from one arrangement',
         [('WITHOUT RECOURSE', CASH,
           ['Receivables derecognised', 'No liability',
            'Loss %s' % money(F.loss_without_recourse),
            'The factor bears the risk', '']),
          ('WITH RECOURSE, A SALE', DISC,
           ['Receivables derecognised', 'Recourse obligation recorded',
            'Loss %s' % money(F.loss_with_recourse),
            'Northwind bears the risk', '']),
          ('WITH RECOURSE, A BORROWING', RUST,
           ['Receivables stay', 'Liability %s' % money(F.borrowing_liability),
            'Fee becomes interest over time', 'Northwind bears the risk', ''])],
         'The cash received is %s in all three. Everything else about the balance '
         'sheet differs.' % money(F.cash_now)),

        ('part', 'Part 4 · The three side by side',
         'and what each does to the balance sheet'),

        ('task', 'Exercise 3D',
         'Compare the three treatments and say what each does to the balance '
         'sheet.',
         'Complete the table. Work down one column at a time.',
         ['Exercises 3B and 3C'],
         ['The cash row is the same in all three columns. Fill it first and it '
          'will stop you confusing the columns.',
          'Two columns remove the receivables. One does not.',
          'The last row is the question that produced all the others.']),
        ('table', _CMPH, _cmp(blank=True), SLATE, _CMPW),
        ('answers', 12),
        ('fig', 'matrix', 'What a reader of the balance sheet would see',
         ['Without recourse', 'With recourse, a sale',
          'With recourse, a borrowing'],
         ['Total assets', 'Total liabilities'],
         [['Lower by %s' % money(F.sold - F.cash_now - F.holdback),
           'Unchanged'],
          ['Lower by %s' % money(F.sold - F.cash_now - F.holdback),
           'Higher by %s' % money(F.recourse_obligation)],
          ['Higher by %s' % money(F.cash_now),
           'Higher by %s' % money(F.borrowing_liability)]],
         'The third column leaves the company looking far more indebted than the '
         'other two, on identical cash. That is why the sale test is fought over.'),

        ('task', 'Exercise 3E',
         'Say why the sale test matters to a reader, beyond the accounting.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercise 3D'],
         ['Blank 1 is the ratio most affected by whether a liability appears.',
          'Blank 3 is what a company gains by arranging a transfer to qualify as a '
          'sale.',
          'The last blank is the reason a reader should look for the note rather '
          'than trusting the face of the statement.']),
        ('fill', 'R3',
         ['The cash is %s in every version. What differs is what the balance sheet '
          'says about it, and the difference runs straight into the debt to equity '
          '{ratio}: the borrowing treatment adds %s of liabilities that the sale '
          'treatment does not.'
          % (money(F.cash_now), money(F.borrowing_liability)),
          'It also changes total assets. Under the borrowing, the receivables stay '
          'and the cash arrives beside them, so the balance sheet grows on both '
          '{sides}. Under either sale treatment it does not.',
          'A company with debt covenants has an evident interest in the transfer '
          'qualifying as a {sale}, and the three conditions in Part 3 exist '
          'precisely because that interest exists.',
          'None of this is hidden. The treatment and the terms are set out in the '
          '{notes}, which is where a reader who wants to compare two companies on '
          'the same basis has to look.'],
         {'ratio': ('Debt to equity moves on a decision about one clause.', ''),
          'sides': ('Assets and liabilities both grow.', ''),
          'sale': ('Covenants give the company a stake in the answer.',
                   'Students treat the sale test as a technicality. It is the '
                   'difference between a clean balance sheet and a geared one.'),
          'notes': ('The face of the statement does not say; the notes do.', '')},
         [money(F.sold), 'margin', 'borrowing']),
        ('fig', 'scale',
         'IF IT QUALIFIES AS A SALE',
         ['Receivables leave the balance sheet',
          'No borrowing appears',
          'Debt to equity is unaffected',
          'The cost is a loss, charged at once'],
         'IF IT DOES NOT',
         ['Receivables stay where they were',
          'A liability of %s appears' % money(F.borrowing_liability),
          'Debt to equity rises',
          'The cost is interest, spread over time']),

        ('watch', 'With recourse does not automatically mean a borrowing. Read the '
                  'stem for the three conditions: isolation, the factor’s '
                  'freedom to pledge or sell, and no repurchase agreement. If the '
                  'question is silent on all three, it is usually testing whether '
                  'you know they exist.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A company sells %s of receivables without recourse. The factor '
                'charges a %s fee and holds back %s pending collection. Cash '
                'received immediately is:'
                % (money(F.sold), '3%', '5%'),
         [money(F.sold), money(F.cash_now), money(F.sold - F.fee),
          money(F.sold - F.holdback)],
         1, 'Level B',
         '%s less the %s fee and the %s holdback leaves %s. (C) forgets the '
         'holdback and (D) forgets the fee — both are deducted now, although '
         'only one of them is a cost.'
         % (money(F.sold), money(F.fee), money(F.holdback), money(F.cash_now))),

        ('mcq', 'In a without-recourse sale of receivables, the holdback retained '
                'by the factor is recorded by the seller as:',
         ['Part of the loss on sale',
          'A receivable from the factor',
          'A reduction of the allowance for credit losses',
          'A contingent liability'],
         1, 'Level B',
         'The holdback comes back once collections are settled, so it is an asset. '
         '(A) is the common error and it overstates the loss by the whole retained '
         'amount. (D) reverses the direction: the factor owes Northwind.'),

        ('mcq', 'A transfer of receivables with recourse fails the conditions for '
                'sale accounting. The transferor should:',
         ['Remove the receivables and record a loss',
          'Keep the receivables on the balance sheet and record a liability for '
          'the proceeds',
          'Remove the receivables and record a recourse obligation',
          'Disclose the arrangement in the notes but make no entry'],
         1, 'Level C',
         'A failed sale test makes the transfer a secured borrowing: nothing '
         'leaves, and a liability appears. (C) describes the treatment when the '
         'test is passed. (D) ignores cash that has actually been received.'),

        ('mcq', 'Which of the following is NOT one of the conditions for a transfer '
                'of receivables to be accounted for as a sale?',
         ['The transferred assets are isolated from the transferor and its '
          'creditors',
          'The transferee may pledge or exchange the assets',
          'The transferor does not maintain effective control through a repurchase '
          'agreement',
          'The transfer is made without recourse'],
         3, 'Level C',
         'Recourse is not itself disqualifying — a with-recourse transfer can '
         'still be a sale if the three control conditions hold. This is the single '
         'most common misconception in the topic, and the exam sets it directly.'),

        ('mcq', 'A company factors receivables with recourse in an arrangement that '
                'qualifies as a sale. Compared with an identical without-recourse '
                'sale, the loss recognised will be:',
         ['The same',
          'Higher, by the estimated recourse obligation',
          'Lower, by the estimated recourse obligation',
          'Nil, because the risk has been retained'],
         1, 'Level B',
         'The recourse obligation is an additional cost recognised at the time of '
         'the transfer, so the loss rises from %s to %s. (C) reverses the '
         'direction. (D) confuses retaining risk with retaining the asset.'
         % (money(F.loss_without_recourse), money(F.loss_with_recourse))),

        ('mcq', 'Treating a transfer of receivables as a secured borrowing rather '
                'than a sale will:',
         ['Reduce total assets and total liabilities',
          'Increase both total assets and total liabilities',
          'Leave the balance sheet unchanged',
          'Increase net income in the year of transfer'],
         1, 'Level C',
         'The receivables stay and the cash arrives beside them, so both sides '
         'grow. (D) is backwards in a subtle way: no loss is recognised today, but '
         'interest is charged over time, so income is higher now and lower later '
         'rather than higher overall.'),

        ('mcq', 'The principal reason a company factors its receivables is to:',
         ['Avoid recognising credit losses',
          'Obtain cash earlier than the receivables would otherwise be collected',
          'Increase reported revenue',
          'Reduce the allowance for credit losses'],
         1, 'Level A',
         'Factoring is a financing decision: cash now rather than cash later, and '
         'the fee is the price of the difference. (A) is wrong under a '
         'with-recourse arrangement and irrelevant under a without-recourse one. '
         '(C) is false — the sale has already been recognised.'),

        ('tip', 'Read the recourse clause first and the three conditions second. '
                'The cash figure is the same in every version of these questions, '
                'so it tells you nothing; the balance sheet is where the answer '
                'differs.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3B · the completed entry'),
        ('journal', [
            ('J1', '%s of receivables sold without recourse.' % money(F.sold),
             [('Cash', 0, money(F.cash_now), ''),
              ('Due from Factor', 0, money(F.holdback), ''),
              ('Loss on Sale of Receivables', 0,
               money(F.loss_without_recourse), ''),
              ('Accounts Receivable', 1, '', money(F.sold))]),
        ]),
        ('h3', 'Exercise 3D · the completed comparison'),
        ('table', _CMPH, _cmp(), SLATE, _CMPW),
        ('bullets', [
            'The cash received is %s under all three treatments.'
            % money(F.cash_now),
            'Two of the three remove the receivables; one leaves them where they '
            'were and adds a liability of %s.' % money(F.borrowing_liability),
            'With recourse does not decide the answer. The three control '
            'conditions do.',
        ]),
    ],
)
