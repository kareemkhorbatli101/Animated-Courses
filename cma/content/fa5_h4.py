# -*- coding: utf-8 -*-
"""Volume 5, Handout 4 — Impairment of Long-Lived Assets.

Covers the first part of A.2(n): the accounting for impairment of long-term
assets held and used.
"""
from fadata import N, D, P, Y, PY
from data import money, num

SL, DDB, SYD, UOP = '2B6CB0', '6D3F7E', '1F7A6A', 'C9762E'
SLATE, RUST = '44506B', 'B2531F'

_TESTH = ['', 'Line A', 'Line B']
_TESTW = [40, 30, 30]


def _test(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Carrying amount', money(P.a_carrying), money(P.b_carrying)],
        ['Undiscounted future cash flows', money(P.a_undiscounted),
         money(P.b_undiscounted)],
        ['Step 1 · is the carrying amount recoverable?',
         c('No — %s is less than %s'
           % (money(P.a_undiscounted), money(P.a_carrying))),
         c('Yes — %s exceeds %s'
           % (money(P.b_undiscounted), money(P.b_carrying)))],
        ['Fair value', money(P.a_fair_value), money(P.b_fair_value)],
        ['Step 2 · impairment loss', c(money(P.a_loss)),
         c('None — step 2 is never reached')],
        ['New carrying amount', c(money(P.a_fair_value)),
         c(money(P.b_carrying))],
    ]


HANDOUT = dict(
    n=4,
    title='Impairment of Long-Lived Assets',
    subtitle='Two tests, in order, and the second is never reached unless the '
             'first is failed. Most wrong answers skip straight to the second.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 for the final comparison. The '
                 'order of the two steps is the whole difficulty, so the sentences '
                 'are sequenced carefully.',
        collocations=['test an asset for impairment',
                      'assess the recoverability of a carrying amount',
                      'estimate undiscounted future cash flows',
                      'write an asset down to fair value',
                      'recognise an impairment loss',
                      'identify an indicator of impairment'],
        pairs=['recoverability / measurement',
               'undiscounted / discounted', 'fair value / value in use',
               'held and used / held for sale'],
        nots=['The recoverability test uses undiscounted cash flows. The '
              'measurement step uses fair value. Mixing them is the commonest '
              'error in the topic.',
              'An asset can fail to be worth its carrying amount and still not be '
              'impaired, because step 1 ignores the time value of money.'],
    ),

    objectives=[
        'Name the indicators that trigger an impairment test.',
        'Apply the recoverability test using undiscounted cash flows.',
        'Measure the loss using fair value, and only when step 1 has been '
        'failed.',
        'Record the write-down and say what happens to depreciation afterwards.',
        'State the treatment of a later recovery, and how IFRS differs.',
    ],

    terms=[
        ('impairment',
         'A reduction in an asset’s carrying amount because it will not '
         'recover that amount.', 'انخفاض القيمة',
         'Tested when something has happened, not routinely every year — '
         'except for goodwill, which Handout 5 covers.'),
        ('indicator of impairment',
         'An event or change that suggests an asset may not recover its carrying '
         'amount.', 'مؤشر انخفاض القيمة',
         'A fall in market value, physical damage, an adverse legal change, or '
         'current operating losses from the asset.'),
        ('recoverability test',
         'Comparing the carrying amount with the undiscounted future cash flows '
         'the asset will generate.', 'اختبار إمكانية الاسترداد',
         'Step 1, and it is a gate. Pass it and no loss is recognised, however '
         'far fair value has fallen.'),
        ('undiscounted cash flows',
         'The sum of the expected future cash flows, with no adjustment for the '
         'time value of money.', 'التدفقات النقدية غير المخصومة',
         'Used only in step 1. Using a discounted figure there will give the '
         'wrong answer in exactly the cases the exam sets.'),
        ('fair value',
         'The price that would be received to sell the asset in an orderly '
         'transaction between market participants.', 'القيمة العادلة',
         'Used only in step 2, to measure the loss once step 1 has been failed.'),
        ('goodwill',
         'The excess of the price paid for a business over the fair value of its '
         'identifiable net assets.', 'الشهرة',
         'A residual, not a valuation. It arises only on an acquisition and can '
         'never be recognised by trading well.'),
        ('asset group',
         'The smallest group of assets with identifiable cash flows largely '
         'independent of other assets.', 'مجموعة الأصول',
         'A single machine usually generates no cash flows on its own, so the '
         'test is applied to the group it belongs to.'),
    ],

    blocks=[
        ('scene', 'Two production lines, one of them in trouble', [
            'Northwind runs two assembly lines. Both stand in the books at %s, '
            'and both have been hit by a competitor’s new product.'
            % money(P.a_carrying),
            'Line A is expected to generate %s of cash over its remaining life. '
            'Line B is expected to generate %s.'
            % (money(P.a_undiscounted), money(P.b_undiscounted)),
            'If either line were sold today, it would fetch less than it stands '
            'at: line A %s and line B %s.'
            % (money(P.a_fair_value), money(P.b_fair_value)),
            'One of these lines is impaired and the other is not, and the reason '
            'is not the one most people reach for.',
        ]),
        ('fig', 'ranked', 'The three figures for each line',
         [('Line A · carrying amount', P.a_carrying,
           money(P.a_carrying), SLATE),
          ('Line A · undiscounted cash flows', P.a_undiscounted,
           money(P.a_undiscounted), RUST),
          ('Line B · carrying amount', P.b_carrying,
           money(P.b_carrying), SLATE),
          ('Line B · undiscounted cash flows', P.b_undiscounted,
           money(P.b_undiscounted), SL)],
         'Compare each pair. Line A’s cash flows fall short of its carrying '
         'amount; line B’s do not. That single comparison decides which line '
         'is impaired.'),

        ('part', 'Part 1 · When to test at all',
         'indicators, not a calendar'),

        ('prose', 'Before any of that is computed, something has to prompt the '
                  'company to look. An indicator of impairment is the event that '
                  'does it, and Part 1 lists the ones the standards name.', 'R2'),

        ('task', 'Exercise 4A',
         'Name what triggers an impairment test, and say what does not.',
         'Read and complete. Write one word in each space.',
         ['Handout 2, for how a carrying amount is built.'],
         ['Blank 1 is the word for the kind of event that starts the process.',
          'Blank 3 is the frequency at which long-lived assets are tested in the '
          'absence of such an event.',
          'The last blank is the group an individual machine is tested within, '
          'because it generates no cash flows on its own.']),
        ('fill', 'R2',
         ['A long-lived asset held and used is not tested every year. It is tested '
          'when an {indicator} suggests that it may not recover what it stands at: '
          'a sharp fall in market value, physical damage, an adverse change in the '
          'law, a decision to dispose of it early, or current operating losses '
          'from using it.',
          'Absent any such sign the asset is simply depreciated. A company does '
          'not go looking for impairments, and testing every asset every year '
          'would cost more than it is {worth}.',
          'That is the opposite of the rule for goodwill, which is tested at least '
          '{annually} whether or not anything has happened. Handout 5 explains why '
          'goodwill is treated differently.',
          'One practical point decides how the test is applied. A single machine '
          'rarely generates cash flows of its own, so the test is usually applied '
          'to the smallest asset {group} whose cash flows are largely independent '
          'of everything else.'],
         {'indicator': ('An event, not a date.', ''),
          'worth': ('Testing everything would cost more than it saves.', ''),
          'annually': ('Goodwill is the exception, every year.', ''),
          'group': ('Few machines earn cash alone.',
                    'Students test one machine in isolation and find no cash '
                    'flows at all, which makes the test unanswerable.')},
         ['schedule', 'monthly', 'segment']),
        ('fig', 'buckets', 'What starts a test, and what does not',
         [('INDICATORS', RUST,
           ['Market value falls sharply', 'Physical damage',
            'An adverse legal change', 'Operating losses from the asset',
            'A decision to dispose early']),
          ('NOT INDICATORS', SL,
           ['The year end has arrived', 'The share price fell',
            'A competitor launched a product', 'Management is pessimistic', '']),
          ('TESTED REGARDLESS', SYD,
           ['Goodwill, at least annually', 'Indefinite-life intangibles',
            'See Handout 5', '', ''])],
         'The second column is where students go wrong. A difficult year is not '
         'by itself an indicator that any particular asset is impaired.'),

        ('part', 'Part 2 · Step one', 'the recoverability test'),

        ('prose', 'The first step asks a single question: will the asset generate '
                  'enough cash, over the rest of its life, to cover what it stands '
                  'at in the books? The comparison uses undiscounted cash flows, '
                  'and that word is doing a great deal of work.', 'R2'),
        ('prose', 'Ignoring the time value of money makes the test deliberately '
                  'generous. An asset passes if the total cash it will produce '
                  'exceeds its carrying amount, even if that cash arrives so far '
                  'in the future that nobody would pay the carrying amount for it '
                  'today.', 'R2'),

        ('task', 'Exercise 4B',
         'Apply the recoverability test to both lines.',
         'Complete the first three rows of the table, then stop and read the note '
         'before going further.',
         ['Exercise 4A, and the two paragraphs above.'],
         ['Compare the undiscounted cash flows with the carrying amount. Nothing '
          'else is used in this step.',
          'Fair value is given to you and it plays no part at all in step 1. '
          'Resist it.',
          'One line passes and one fails. Say which before you turn to step 2.']),
        ('table', _TESTH, _test(blank=True), SLATE, _TESTW),
        ('answers', 8),
        ('fig', 'fork', 'Step 1 is a gate, not a measurement',
         [('Do the UNDISCOUNTED future cash flows cover the carrying amount?',
           'YES → not impaired. Stop. Recognise nothing.', SL),
          ('Do they fall short?',
           'NO → the asset is impaired. Go to step 2.', RUST),
          ('What is fair value for?',
           'Step 2 only. It plays no part in deciding whether to write down.',
           SLATE)]),

        ('part', 'Part 3 · Step two',
         'measuring the loss, and only now'),

        ('task', 'Exercise 4C',
         'Measure the loss on the impaired line and record it.',
         'Complete the journal entry, then the two remaining rows of the table in '
         'Exercise 4B.',
         ['Exercise 4B'],
         ['The loss is the carrying amount less fair value. The undiscounted cash '
          'flows play no part in this step.',
          'Only one of the two lines reaches this step at all.',
          'Two accounts move, and one of them is an expense.']),
        ('journal', [
            ('J1', ('Line A written down from a carrying amount of %s to its fair '
                    'value of %s.' % (money(P.a_carrying),
                                      money(P.a_fair_value)),
                    'Line B is not written down, although its fair value is also '
                    'below its carrying amount.'),
             [('Impairment Loss', 0, '', ''),
              ('Accumulated Impairment — Line A', 1, '', '')]),
        ]),
        ('fill', 'R2',
         ['Line A failed step 1, because its undiscounted cash flows of %s fall '
          'short of its carrying amount of %s. Only now does fair value matter.'
          % (money(P.a_undiscounted), money(P.a_carrying)),
          'The loss is the carrying amount less {fair} value: %s less %s, which is '
          '%s. That amount is charged to income immediately, within operating '
          'expenses rather than below the operating line.'
          % (money(P.a_carrying), money(P.a_fair_value), money(P.a_loss)),
          'Line B never reaches step 2 at all. Its fair value of %s is below its '
          'carrying amount of %s, and that is {irrelevant}, because the '
          'recoverability test was passed and the test is a gate.'
          % (money(P.b_fair_value), money(P.b_carrying)),
          'After the write-down, line A’s new carrying amount of %s becomes '
          'the basis for future {depreciation}, spread over the remaining useful '
          'life. The annual charge falls, because there is less left to write '
          'off.' % money(P.a_fair_value)],
         {'fair': ('Fair value, not the cash flows.', ''),
          'irrelevant': ('Step 1 was passed, so step 2 is never reached.',
                         'Students write line B down to fair value, which '
                         'recognises a loss the standards specifically do not '
                         'permit.'),
          'depreciation': ('A new basis, over the remaining life.', '')},
         ['undiscounted', 'relevant', 'impairment']),
        ('fig', 'bridge',
         'Line A, carrying amount', P.a_carrying,
         [('Impairment loss, charged to income', -P.a_loss)],
         'Line A, new carrying amount', P.a_fair_value),

        ('part', 'Part 4 · Afterwards',
         'depreciation, recovery, and the IFRS difference'),

        ('task', 'Exercise 4D',
         'Say what happens after the write-down, under US GAAP and under IFRS.',
         'Match each statement to the framework it describes.',
         ['Exercise 4C'],
         ['One framework never reverses an impairment on an asset held and used. '
          'The other does, with a cap.',
          'Both agree on what happens to depreciation afterwards.',
          'The cap on a reversal is the carrying amount the asset would have had '
          'if no loss had been recognised.']),
        ('match',
         ['The written-down amount becomes the new basis for depreciation',
          'An impairment loss on an asset held and used is never reversed',
          'An impairment loss may be reversed if the circumstances change',
          'A reversal is limited to the carrying amount that would have existed '
          'had no loss been recognised',
          'The loss is recognised in profit or loss when it arises'],
         ['Both frameworks', 'US GAAP only', 'IFRS only'],
         ['A', 'B', 'C', 'C', 'A'],
         'The two frameworks agree on recognising the loss and on depreciating '
         'afterwards. They disagree only on reversal, and Volume 12 returns to '
         'it.'),
        ('fig', 'timeline', 'An impaired asset, before and after',
         [('Before the test',
           'carrying %s, depreciating on the original basis'
           % money(P.a_carrying), SLATE),
          ('The write-down', 'loss of %s charged to income' % money(P.a_loss),
           RUST),
          ('After', 'carrying %s, a new and smaller annual charge'
           % money(P.a_fair_value), SL)],
         'The company reports a large loss once and smaller depreciation charges '
         'thereafter. Total expense over the life is unchanged; the distribution '
         'is not.'),

        ('task', 'Exercise 4E',
         'State the two tests in order and say why the order matters.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercises 4A to 4D'],
         ['Blank 1 is the measure used in the first test, and the word matters.',
          'Blank 3 is what makes step 1 deliberately generous.',
          'The last blank is what a company would have to recognise if the two '
          'measures were used the wrong way round.']),
        ('fill', 'R3',
         ['The recoverability test compares the carrying amount with the '
          '{undiscounted} future cash flows. It is a gate: pass it and no loss is '
          'recognised, however far the asset’s price has fallen.',
          'Only an asset that fails the gate is measured, and it is measured '
          'against {fair} value, which is a different quantity entirely. The '
          'two measures are used in two different steps and are never '
          'interchanged.',
          'Ignoring the time value of money in step 1 makes it generous on '
          'purpose. An asset whose cash arrives over fifteen years passes the test '
          'even though nobody would pay its carrying amount for it today, and the '
          'standard setters accepted that in exchange for a test that is hard to '
          '{manipulate}.',
          'Reverse the two measures and the consequences are large. Using '
          'discounted cash flows in step 1 would impair assets that recover their '
          'cost, and using undiscounted flows in step 2 would understate the loss. '
          'Line B is the case in point: it is worth less than it stands at and it '
          'is not {impaired}.'],
         {'undiscounted': ('Step 1, and the word is the test.', ''),
          'fair': ('Step 2, and only step 2.', ''),
          'manipulate': ('No discount rate to argue about.', ''),
          'impaired': ('Worth less, and not impaired.',
                       'Students treat a fall in fair value as proof of '
                       'impairment. Line B exists in this handout to disprove '
                       'exactly that.')},
         ['discounted', 'market', 'depreciated']),
        ('fig', 'matrix', 'The two steps use two different measures',
         ['Step 1 · recoverability', 'Step 2 · measurement'],
         ['The measure used', 'What it decides'],
         [['Undiscounted future cash flows',
           'Whether there is an impairment at all'],
          ['Fair value', 'How large the loss is']],
         'Two rows, two measures, in this order. Nearly every wrong answer in this '
         'topic comes from using one of them in the other’s step.'),

        ('watch', 'Line B is worth %s and stands at %s, and it is not impaired. '
                  'If that feels wrong, read Part 2 again: step 1 is a gate, and '
                  'line B passed it.'
                  % (money(P.b_fair_value), money(P.b_carrying))),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'An asset held and used has a carrying amount of %s, undiscounted '
                'future cash flows of %s and a fair value of %s. The impairment '
                'loss is:' % (money(P.b_carrying), money(P.b_undiscounted),
                              money(P.b_fair_value)),
         [money(P.b_carrying - P.b_fair_value), money(0),
          money(P.b_carrying - P.b_undiscounted), money(P.b_fair_value)],
         1, 'Level C',
         'The undiscounted cash flows of %s exceed the carrying amount of %s, so '
         'the recoverability test is passed and no loss is recognised — even '
         'though fair value is lower. (A) skips straight to step 2, which is the '
         'single most common error in this topic.'
         % (money(P.b_undiscounted), money(P.b_carrying))),

        ('mcq', 'An asset has a carrying amount of %s, undiscounted future cash '
                'flows of %s and a fair value of %s. The impairment loss is:'
                % (money(P.a_carrying), money(P.a_undiscounted),
                   money(P.a_fair_value)),
         [money(P.a_carrying - P.a_undiscounted), money(P.a_loss),
          money(0), money(P.a_undiscounted - P.a_fair_value)],
         1, 'Level B',
         'Step 1 fails, so step 2 measures the loss as carrying amount less fair '
         'value: %s − %s = %s. (A) uses the step 1 figure to measure the '
         'loss, which mixes the two steps.'
         % (money(P.a_carrying), money(P.a_fair_value), money(P.a_loss))),

        ('mcq', 'The recoverability test for a long-lived asset held and used '
                'compares the carrying amount with:',
         ['Fair value', 'The discounted future cash flows',
          'The undiscounted future cash flows', 'Replacement cost'],
         2, 'Level A',
         'Undiscounted, which makes the test deliberately generous and hard to '
         'manipulate. (B) is the trap: discounting would impair assets that do '
         'recover their cost, and there would be a discount rate to argue over.'),

        ('mcq', 'Which of the following is NOT an indicator that a long-lived '
                'asset may be impaired?',
         ['A significant decrease in the asset’s market price',
          'Physical damage to the asset',
          'The arrival of the financial year end',
          'Current operating losses associated with using the asset'],
         2, 'Level A',
         'Long-lived assets held and used are tested when something has happened, '
         'not on a calendar. Goodwill is the exception, and Handout 5 explains '
         'why.'),

        ('mcq', 'After an impairment loss is recognised on an asset held and used, '
                'future depreciation is based on:',
         ['The original cost', 'The new reduced carrying amount',
          'The undiscounted cash flows', 'Fair value at each reporting date'],
         1, 'Level B',
         'The written-down amount becomes the new basis, spread over the remaining '
         'useful life, so the annual charge falls. (D) would turn a historical '
         'cost model into a fair value one, which impairment accounting is not.'),

        ('mcq', 'Under US GAAP, an impairment loss on a long-lived asset held and '
                'used:',
         ['May be reversed if circumstances improve',
          'May never be reversed',
          'Is reversed automatically when fair value recovers',
          'Is reversed only when the asset is sold'],
         1, 'Level B',
         'US GAAP prohibits reversal for assets held and used; IFRS permits it, '
         'capped at the carrying amount that would have existed had no loss been '
         'recognised. The pairing of these two options is how the difference is '
         'usually examined.'),

        ('mcq', 'A single machine generates no identifiable cash flows on its own. '
                'The impairment test should be applied to:',
         ['The machine alone, using an allocated share of revenue',
          'The smallest group of assets with largely independent cash flows',
          'The whole company',
          'The reporting segment the machine belongs to'],
         1, 'Level C',
         'The asset group is the unit of account precisely because most individual '
         'assets produce no cash flows by themselves. (C) and (D) are both too '
         'large, and testing at too high a level hides impairments by offsetting '
         'them against healthy assets.'),

        ('tip', 'Write the two steps down the margin before you touch a figure: '
                'undiscounted for the gate, fair value for the loss. Then check '
                'which numbers the question has given you — it will often '
                'give all three precisely to see whether you use them in the right '
                'order.'),
    ],

    key_extra=[
        ('h3', 'Exercises 4B and 4C · the completed test'),
        ('table', _TESTH, _test(), SLATE, _TESTW),
        ('h3', 'Exercise 4C · the completed entry'),
        ('journal', [
            ('J1', 'Line A written down to fair value.',
             [('Impairment Loss', 0, money(P.a_loss), ''),
              ('Accumulated Impairment — Line A', 1, '',
               money(P.a_loss))]),
        ]),
        ('bullets', [
            'Line A fails the recoverability test and is written down by %s.'
            % money(P.a_loss),
            'Line B passes it and is not written down, although its fair value is '
            '%s below its carrying amount.'
            % money(P.b_carrying - P.b_fair_value),
            'Step 1 uses undiscounted cash flows. Step 2 uses fair value. They '
            'are never interchanged.',
        ]),
    ],
)
