# -*- coding: utf-8 -*-
"""Volume 10, Handout 1 — What Consolidation Is, and the Two Models.

Covers A.1(h) and A.1(i): why consolidated statements are prepared, and the
two bases on which a company may be required to consolidate another.
"""
from fadata import N, CO, Y
from data import money, num

PAR, SUB, NCI, SLATE = '1F6F8F', '2E7D5B', 'A24B6B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_ACQH = ['The acquisition of %s' % CO.sub, 'Amount']
_ACQW = [68, 32]


def _acq(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Consideration paid for %s of the shares' % _pc(CO.stake),
         money(CO.price)],
        ['Implied value of %s as a whole' % CO.sub, c(money(CO.implied_total))],
        ['Non-controlling interest, %s of that value'
         % _pc(1 - CO.stake), c(money(CO.nci))],
        ['Fair value of the identifiable net assets acquired',
         money(CO.net_assets_fv)],
        ['Goodwill recognised', c(money(CO.goodwill))],
    ]


_WHYH = ['', 'If Northwind reports the investment only',
         'If Northwind consolidates']
_WHYW = [26, 37, 37]


def _why(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['On the balance sheet', 'One line: investment %s'
         % money(CO.price),
         c('Every asset and liability %s controls' % CO.sub)],
        ['Debt of %s' % CO.sub, 'Invisible', c('Added to the group’s own')],
        ['Revenue of %s' % CO.sub, 'Invisible',
         c('Added to the group’s own')],
        ['What the reader sees', 'An investment of %s' % money(CO.price),
         c('The resources Northwind directs')],
    ]


HANDOUT = dict(
    n=1,
    title='What Consolidation Is, and the Two Models',
    subtitle='Northwind pays %s for %s of %s. From that day the two companies '
             'report as one, and this handout says why and when.'
             % (money(CO.price), _pc(CO.stake), CO.sub),
    register='R1 moving to R2',

    lang=dict(
        register='R1 while control is being defined, R2 once the two models are '
                 'being applied.',
        collocations=['obtain control of an entity',
                      'consolidate a subsidiary',
                      'present a single set of statements',
                      'recognise a non-controlling interest',
                      'absorb the losses of an entity',
                      'direct the activities of an entity'],
        pairs=['parent / subsidiary',
               'control / influence',
               'voting interest / variable interest',
               'consolidated / separate'],
        nots=['Consolidation is not addition of two legal entities into one. '
              'The companies remain separate in law and keep their own books.',
              'Control is not always a majority of the shares. One of the two '
              'models exists precisely for the cases where it is not.'],
    ),

    objectives=[
        'Say what a consolidated set of statements shows and why.',
        'Define control and distinguish it from influence.',
        'Apply the voting interest model.',
        'Say when the variable interest model applies instead.',
        'Compute the non-controlling interest and the goodwill on an '
        'acquisition.',
    ],

    terms=[
        ('control',
         'The power to direct the activities of another entity so as to obtain '
         'benefits from it.', 'السيطرة',
         'The trigger for consolidation. Influence without control gives the '
         'equity method of Volume 6 instead.'),
        ('parent',
         'A company that controls one or more other entities.',
         'الشركة الأم',
         'Northwind is the parent from the day control passes, not from the day '
         'the shares are paid for if the two differ.'),
        ('subsidiary',
         'An entity controlled by another.', 'الشركة التابعة',
         'A subsidiary keeps its own legal identity and its own books. '
         'Consolidation happens only in the parent’s reporting.'),
        ('non-controlling interest',
         'The portion of a subsidiary’s equity that the parent does not own.',
         'حقوق الملكية غير المسيطرة',
         'Reported inside consolidated equity, not as a liability, because '
         'those shareholders are owners of the group’s net assets.'),
        ('significant influence',
         'The power to participate in another entity’s decisions without '
         'directing them.', 'التأثير الجوهري',
         'Ordinarily presumed from a holding of twenty to fifty per cent. It '
         'gives the equity method and never consolidation.'),
        ('equity method',
         'Reporting an investment at cost plus the investor’s share of the '
         'investee’s profits, less dividends received, on one line.',
         'طريقة حقوق الملكية',
         'Volume 6 worked the mechanics. Here it is the alternative '
         'consolidation is being chosen over.'),
        ('proportionate consolidation',
         'Bringing in a share of an investee’s assets and liabilities equal '
         'to the investor’s interest.',
         'التوحيد النسبي',
         'Not permitted for a controlled subsidiary under US GAAP. It is the '
         'answer the share percentage invites and the exam rewards avoiding.'),
        ('variable interest entity',
         'An entity that is consolidated because of exposure to its risks and '
         'rewards rather than because of voting rights.',
         'كيان ذو حصص متغيرة',
         'The second model. It exists because voting rights alone could be '
         'arranged to keep an entity off a balance sheet.'),
    ],

    blocks=[
        ('scene', 'Northwind buys a controller business', [
            'On 1 January %s Northwind pays %s for %s of the shares of %s, a '
            'company that makes the control units its components are built '
            'into.' % (Y, money(CO.price), _pc(CO.stake), CO.sub),
            'The two companies remain separate in law. %s keeps its own books, '
            'files its own return and has its own shareholders for the other '
            '%s.' % (CO.sub, _pc(1 - CO.stake)),
            'Yet Northwind now decides what %s does. It appoints the board, '
            'sets the budget and directs the business.' % CO.sub,
            'Reporting the %s as an investment on one line would tell a reader '
            'almost nothing about the resources Northwind now directs. So the '
            'statements are consolidated.' % money(CO.price),
        ]),
        ('fig', 'workplace', 'One group, two companies',
         [('Samir', 'Chief executive of Northwind, the parent', 'm', PAR),
          ('Hana', 'Managing director of %s' % CO.sub, 'w', SUB),
          ('Ziad', 'Holder of the other %s of %s' % (_pc(1 - CO.stake),
                                                     CO.sub), 'm', NCI)],
         [('bank', '%s paid' % money(CO.price)),
          ('factory', '%s plant' % CO.sub),
          ('doc', '%s of the shares' % _pc(CO.stake)),
          ('globe', 'One set of statements')],
         'Ziad owns %s of %s and nothing at all of Northwind. The '
         'consolidated statements have to show both of those facts at once.'
         % (_pc(1 - CO.stake), CO.sub)),

        ('part', 'Part 1 · What consolidated statements show',
         'resources directed, not shares owned'),

        ('task', 'Exercise 1A',
         'Say what consolidated statements show and why a single line will not '
         'do.',
         'Read and complete. Write one word in each space.',
         ['Volume 6 Handout 1, where an investment was reported on one line.'],
         ['Think about what a lender to Northwind wants to know about %s debt.'
          % CO.sub,
          'The group is not a legal person. Ask whose statements these actually '
          'are.',
          'The last blank is what Northwind has over %s that a %s shareholding '
          'would not give it.' % (CO.sub, '10%')]),
        ('fill', 'R1',
         ['Consolidated statements present a parent and its subsidiaries as a '
          'single {entity}. The two companies stay separate in law, and the '
          'combination exists only in the parent’s reporting.',
          'The reason is what a reader needs. A lender deciding whether to lend '
          'to Northwind wants to know what the group owes, and %s debt is '
          'invisible if the investment is reported on one {line}.' % CO.sub,
          'So every asset and liability %s has is brought in, and so is every '
          'dollar of its revenue and expense. What the reader then sees is the '
          'resources Northwind {directs}, rather than the shares it happens to '
          'hold.' % CO.sub,
          'The reason Northwind may do this is that it has {control}. A '
          'minority shareholder has no such power and reports an investment '
          'instead.'],
         {'entity': ('One reporting entity, two legal ones.', ''),
          'line': ('A single investment figure hides everything behind it.',
                   ''),
          'directs': ('Direction, not ownership, is the test.',
                      'Students expect consolidation to show what the parent '
                      'owns. It shows what the parent controls, which is why '
                      '%s of the assets come in and not %s.'
                      % ('100%', _pc(CO.stake))),
          'control': ('The single condition for consolidating.', '')},
         ['company', 'owns', 'influence']),
        ('fig', 'matrix', 'The same facts, two ways of reporting them',
         ['One line, as an investment', 'Consolidated'],
         ['Balance sheet', 'Income statement', 'What a lender learns'],
         [['Investment in %s, %s' % (CO.sub, money(CO.price)),
           'Share of profit, one line',
           'Nothing about %s debt' % CO.sub],
          ['Every asset and liability of %s' % CO.sub,
           'Every revenue and expense of %s' % CO.sub,
           'What the group as a whole owes']],
         'Both presentations are faithful to the shares held. Only the second '
         'is faithful to the resources directed.'),

        ('part', 'Part 2 · Control, and what it is not',
         'the line between the two methods'),

        ('prose', 'Control is the power to direct another entity’s activities '
                  'so as to obtain benefits from it. Significant influence, '
                  'which is the power to participate without directing, is a '
                  'different thing and gives the equity method of Volume 6. '
                  'The usual evidence of control is more than half the votes.',
         'R2'),

        ('task', 'Exercise 1B',
         'Decide which method each shareholding calls for.',
         'Sort each holding into the column it belongs in.',
         ['The paragraph above, and Volume 6 Handout 1 on classification.'],
         ['More than half the votes is the ordinary evidence of control, and '
          'twenty to fifty per cent the ordinary evidence of influence.',
          'A majority that cannot actually direct the business is the exception '
          'the exam likes: ask whether the power is real.',
          'One of the holdings is a passive stake too small for either, and it '
          'is measured at fair value.']),
        ('sortgrid',
         ['Holding', 'CONSOLIDATE', 'EQUITY METHOD', 'FAIR VALUE'],
         ['%s of the voting shares, with board control' % _pc(CO.stake),
          '30% of the voting shares, with one seat on the board',
          '5% of the voting shares, held for its dividends',
          '60% of the voting shares of a company in bankruptcy proceedings',
          '45% of the voting shares, with the other 55% held by one investor',
          '%s, with the power to direct a variable interest entity' % '0%'],
         ['CONSOLIDATE', 'EQUITY METHOD', 'FAIR VALUE', 'EQUITY METHOD',
          'EQUITY METHOD', 'CONSOLIDATE'],
         'Two of the six go against the share count: a majority that cannot '
         'direct does not consolidate, and no shares at all sometimes does.'),
        ('fig', 'fork', 'Which method does this holding call for?',
         [('Does the investor control the entity?',
           'YES → consolidate, whatever the percentage', PAR),
          ('Does it have significant influence without control?',
           'YES → the equity method, one line', SUB),
          ('Neither of those?',
           'Fair value, as a security', SLATE)]),

        ('part', 'Part 3 · The two models', 'votes, and exposure'),

        ('task', 'Exercise 1C',
         'Name the two consolidation models and say when each applies.',
         'Read and complete. Write one word in each space.',
         ['Exercise 1B.'],
         ['The first model counts votes, and Northwind’s %s is decided by it.'
          % _pc(CO.stake),
          'The second exists because an entity could be arranged so that the '
          'party bearing its risks holds no votes at all.',
          'The last blank is the party that consolidates a variable interest '
          'entity, and the standard gives it a name.']),
        ('fill', 'R2',
         ['The first model is the voting {interest} model. An investor that '
          'holds more than half the votes is presumed to control, so Northwind '
          'consolidates %s on its %s holding.'
          % (CO.sub, _pc(CO.stake)),
          'The presumption can be rebutted. A majority holder that cannot in '
          'fact direct the business, because a court or a regulator has taken '
          'over, does {not} consolidate.',
          'The second model exists for entities whose votes decide nothing. A '
          'structure can be arranged so that one party bears the losses and '
          'takes the returns while holding few shares or none, and such an '
          'entity is a {variable} interest entity.',
          'There the question is not who votes but who has the power to direct '
          'the activities that matter and the exposure to the results. That '
          'party is the primary {beneficiary}, and it consolidates.'],
         {'interest': ('Votes, and more than half of them.', ''),
          'not': ('The power has to be real.', ''),
          'variable': ('The standard’s own name for the structure.', ''),
          'beneficiary': ('Power and exposure, not shares.',
                          'Students look for a percentage. Under this model '
                          'there may be no relevant percentage at all.')},
         ['majority', 'always', 'shareholder']),
        ('fig', 'matrix', 'The two models compared',
         ['Voting interest model', 'Variable interest model'],
         ['The question asked', 'Usual answer', 'Who consolidates'],
         [['Who holds more than half the votes?',
           'A majority shareholder',
           'That shareholder, as parent'],
          ['Who has the power to direct and the exposure to results?',
           'A sponsor, guarantor or lender with no majority stake',
           'The primary beneficiary']],
         'The first model is applied first. The second is reached only when an '
         'entity’s votes do not determine who directs it.'),

        ('part', 'Part 4 · The acquisition, measured',
         'goodwill and the other shareholders'),

        ('task', 'Exercise 1D',
         'Compute the non-controlling interest and the goodwill on the '
         'acquisition.',
         'Complete the schedule. Two figures are given.',
         ['Volume 5 Handout 5, where goodwill was first met.',
          'Exercise 1A.'],
         ['Northwind paid %s for %s. Work out what that implies the whole of '
          '%s is worth.' % (money(CO.price), _pc(CO.stake), CO.sub),
          'The non-controlling interest is the %s of that implied value that '
          'Northwind did not buy.' % _pc(1 - CO.stake),
          'Goodwill is the implied total less the %s fair value of the '
          'identifiable net assets.' % money(CO.net_assets_fv)]),
        ('table', _ACQH, _acq(blank=True), PAR, _ACQW),
        ('answers', 3),
        ('fig', 'formula', 'The identity the schedule has to satisfy',
         [('Consideration %s' % money(CO.price), 'What the parent paid', PAR),
          ('+', '', None),
          ('Non-controlling interest %s' % money(CO.nci),
           'What the other shareholders hold', NCI),
          ('=', '', None),
          ('Net assets %s' % money(CO.net_assets_fv),
           'Identifiable, at fair value', SUB),
          ('+', '', None),
          ('Goodwill %s' % money(CO.goodwill), 'The unidentifiable remainder',
           SLATE)],
         'Both sides come to %s. If they do not, one of the four figures is '
         'wrong, and this is the check to run before anything else.'
         % money(CO.implied_total)),

        ('part', 'Part 5 · Where the other shareholders go',
         'inside equity, not beside it'),

        ('task', 'Exercise 1E',
         'Say where the non-controlling interest is reported and why.',
         'Read and complete. Write one word in each space.',
         ['Exercise 1D, and Volume 8 Handout 1 on the equity section.'],
         ['Ziad owns %s of %s. Ask whether Northwind owes him anything.'
          % (_pc(1 - CO.stake), CO.sub),
          'A liability is an obligation to transfer resources. Decide whether '
          'that describes a shareholding.',
          'The last blank is the proportion of %s assets that the consolidated '
          'balance sheet carries.' % CO.sub]),
        ('fill', 'R2',
         ['The other shareholders of %s own part of the group’s net assets. '
          'Northwind owes them nothing, so their interest is not a {liability} '
          'however much it looks like one.' % CO.sub,
          'It is reported inside consolidated equity, on its own line of %s, '
          'separately from the equity attributable to Northwind’s own '
          '{shareholders}.' % money(CO.nci),
          'Consolidated profit is presented the same way: one total, then a '
          'split showing the part attributable to the parent and the part '
          'attributable to the non-controlling {interest}.',
          'Note what is not proportionate. Because Northwind controls %s, {all} '
          'of its assets and liabilities are brought in, not %s of them.'
          % (CO.sub, _pc(CO.stake))],
         {'liability': ('No obligation to transfer anything.', ''),
          'shareholders': ('Two lines inside one equity section.', ''),
          'interest': ('Profit is split after being totalled.', ''),
          'all': ('Control is not divisible.',
                  'Students bring in %s of the assets to match the '
                  'shareholding. Control is the test, and it is all or '
                  'nothing.' % _pc(CO.stake))},
         ['asset', 'creditors', 'some']),
        ('table', _WHYH, _why(blank=True), SUB, _WHYW),
        ('answers', 6),
        ('fig', 'ranked', 'Consolidated equity, split between its owners',
         [('Equity attributable to Northwind’s shareholders', N.equity,
           money(N.equity), PAR),
          ('Non-controlling interest in %s' % CO.sub, CO.nci,
           money(CO.nci), NCI),
          ('Total consolidated equity', N.equity + CO.nci,
           money(N.equity + CO.nci), SLATE)],
         'Two kinds of owner, one equity section. Ziad’s %s is inside the '
         'total and not beside it, because he owns part of the group’s net '
         'assets.' % money(CO.nci),
         'At the date of acquisition'),

        ('watch', 'Consolidation brings in %s of a subsidiary’s assets and '
                  'liabilities however small the parent’s stake above half. '
                  'The non-controlling interest is how the other owners are '
                  'shown; it is not a reason to bring in less.' % '100%'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Consolidated financial statements are prepared because:',
         ['The parent and the subsidiary are one legal entity',
          'A reader needs to see the resources the parent controls',
          'The subsidiary is required to stop reporting',
          'Tax is assessed on the group'],
         1, 'Level A',
         'Consolidation reflects control over resources. (A) is false in law: '
         'both companies keep their identity, their books and usually their own '
         'tax return.'),

        ('mcq', 'An investor holds %s of the voting shares of another company '
                'and appoints its board. The investment is reported by:'
         % _pc(CO.stake),
         ['The fair value method', 'Consolidation', 'The equity method',
          'The cost method'],
         1, 'Level A',
         'A majority with real power means control, which means consolidation. '
         '(C) is the method for influence without control, which this holding '
         'has gone well past.'),

        ('mcq', 'A company holds 60%% of another whose assets are under the '
                'control of a bankruptcy court. It should:',
         ['Consolidate, because it holds a majority',
          'Not consolidate, because it cannot direct the activities',
          'Consolidate, but exclude the subsidiary’s liabilities',
          'Report the holding at cost'],
         1, 'Level B',
         'The majority presumption is rebutted when the power is not real. (A) '
         'applies the share count mechanically, and (C) proposes a '
         'consolidation that would hide exactly what consolidation is for.'),

        ('mcq', 'A variable interest entity is consolidated by:',
         ['Its largest shareholder',
          'Its primary beneficiary',
          'Each investor, in proportion to its interest',
          'Nobody, because it has no voting shares'],
         1, 'Level B',
         'The party with the power to direct the activities that matter and the '
         'exposure to the results consolidates, whatever its shareholding. (A) '
         'is the voting model applied to the case the second model exists for.'),

        ('mcq', 'Northwind pays %s for %s of %s, whose identifiable net assets '
                'have a fair value of %s. Goodwill is:'
         % (money(CO.price), _pc(CO.stake), CO.sub,
            money(CO.net_assets_fv)),
         [money(CO.price - CO.net_assets_fv * CO.stake),
          money(CO.goodwill), money(CO.price - CO.net_assets_fv),
          'Nil'],
         1, 'Level C',
         '%s for %s implies a total of %s, which is %s above the %s of net '
         'assets. (C) compares the %s consideration with %s of the net assets '
         'and so understates goodwill by the non-controlling share of it.'
         % (money(CO.price), _pc(CO.stake), money(CO.implied_total),
            money(CO.goodwill), money(CO.net_assets_fv),
            money(CO.price), '100%')),

        ('mcq', 'The non-controlling interest in a consolidated balance sheet '
                'is reported:',
         ['As a long-term liability',
          'As a separate component of consolidated equity',
          'As a deduction from goodwill',
          'In the notes only'],
         1, 'Level B',
         'Those shareholders own part of the group’s net assets, and the parent '
         'owes them nothing. (A) is the classification the name invites and the '
         'definition of a liability rules out.'),

        ('mcq', 'A parent owns %s of a subsidiary. The proportion of the '
                'subsidiary’s assets included in the consolidated balance sheet '
                'is:' % _pc(CO.stake),
         [_pc(CO.stake), '100%', _pc(1 - CO.stake),
          'Whichever the parent elects'],
         1, 'Level C',
         'Control is not divisible, so everything comes in and the other '
         'owners are shown as a non-controlling interest in equity. (A) is '
         'proportionate consolidation, which US GAAP does not permit for a '
         'controlled subsidiary.'),

        ('tip', 'Run the identity before you answer any acquisition question: '
                'consideration plus non-controlling interest equals '
                'identifiable net assets plus goodwill. Three of the four '
                'figures are always in the stem, and the one that is missing '
                'is what is being asked for.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1D · the completed acquisition schedule'),
        ('table', _ACQH, _acq(), PAR, _ACQW),
        ('h3', 'Exercise 1E · one line against consolidation'),
        ('table', _WHYH, _why(), SUB, _WHYW),
        ('prose', 'The %s paid for %s implies that the whole of %s is worth %s, '
                  'so the non-controlling interest is %s and the goodwill is '
                  'the %s by which the implied total exceeds the %s fair value '
                  'of the identifiable net assets.'
                  % (money(CO.price), _pc(CO.stake), CO.sub,
                     money(CO.implied_total), money(CO.nci),
                     money(CO.goodwill), money(CO.net_assets_fv)), 'R2'),
        ('prose', 'Check it the other way: %s of consideration plus %s of '
                  'non-controlling interest is %s, and %s of net assets plus '
                  '%s of goodwill is the same figure. Handout 2 uses that '
                  'identity again under each of the three methods.'
                  % (money(CO.price), money(CO.nci),
                     money(CO.implied_total), money(CO.net_assets_fv),
                     money(CO.goodwill)), 'R2'),
    ],
)
