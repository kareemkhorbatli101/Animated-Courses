# -*- coding: utf-8 -*-
"""Volume 10, Handout 2 — Full, Proportionate and Equity Consolidation.

Covers A.1(j): the three ways an interest in another entity can be brought
into a set of statements, and what each one does to the totals.
"""
from fadata import N, CO, Y
from data import money, num

PAR, SUB, NCI, SLATE = '1F6F8F', '2E7D5B', 'A24B6B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


# The subsidiary's own balance sheet, at the acquisition date fair values that
# Handout 1 established. Assets less liabilities is the $1,000,000 of net
# assets, so nothing here is free to drift.
SUB_ASSETS = 1_600_000
SUB_LIABS = SUB_ASSETS - CO.net_assets_fv
SUB_REVENUE = 900_000
SUB_PROFIT = 120_000

_THREEH = ['', 'Full', 'Proportionate', 'Equity method']
_THREEW = [28, 24, 24, 24]


def _three(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Assets of %s brought in' % CO.sub, c(money(SUB_ASSETS)),
         c(money(SUB_ASSETS * CO.stake)), c('Nil')],
        ['Liabilities brought in', c(money(SUB_LIABS)),
         c(money(SUB_LIABS * CO.stake)), c('Nil')],
        ['Investment line carried', c('Nil'), c('Nil'),
         c(money(CO.price))],
        ['Revenue added', c(money(SUB_REVENUE)),
         c(money(SUB_REVENUE * CO.stake)), c('Nil')],
        ['Profit added', c(money(SUB_PROFIT)),
         c(money(SUB_PROFIT * CO.stake)),
         c(money(SUB_PROFIT * CO.stake))],
        ['Non-controlling interest shown', c(money(CO.nci)), c('Nil'),
         c('Nil')],
    ]


_EFFH = ['Measure', 'Full consolidation', 'Equity method']
_EFFW = [34, 33, 33]


def _eff(blank=False):
    def c(v):
        return '' if blank else v
    a_full = N.total_assets + SUB_ASSETS
    a_eq = N.total_assets + CO.price
    l_full = N.total_liabilities + SUB_LIABS
    l_eq = N.total_liabilities
    return [
        ['Total assets', c(money(a_full)), c(money(a_eq))],
        ['Total liabilities', c(money(l_full)), c(money(l_eq))],
        ['Profit attributable to Northwind',
         money(N.net_income + SUB_PROFIT * CO.stake),
         money(N.net_income + SUB_PROFIT * CO.stake)],
        ['Debt to assets', c(num(l_full / a_full * 100, 1) + '%'),
         c(num(l_eq / a_eq * 100, 1) + '%')],
    ]


HANDOUT = dict(
    n=2,
    title='Full, Proportionate and Equity Consolidation',
    subtitle='Three ways to bring %s into Northwind’s statements. All three '
             'report the same profit, and only one of them shows the %s of '
             'debt.' % (CO.sub, money(SUB_LIABS)),
    register='R2',

    lang=dict(
        register='R2 throughout, with one R3 comparison because the exam asks '
                 'this as an effect-on-the-statements question.',
        collocations=['bring in a subsidiary in full',
                      'include a share of the assets',
                      'carry an investment on one line',
                      'apply uniform accounting policies',
                      'account for a joint venture',
                      'distort a leverage ratio'],
        pairs=['full / proportionate',
               'consolidation / one-line consolidation',
               'joint operation / joint venture',
               'assets brought in / investment carried'],
        nots=['Proportionate consolidation is not a compromise US GAAP allows '
              'for subsidiaries. It is prohibited for them.',
              'The equity method is not a way of avoiding consolidation. It '
              'reports the same profit, on one line instead of many.'],
    ),

    objectives=[
        'Describe each of the three methods.',
        'Say which method applies to a controlled subsidiary, an associate and '
        'a joint arrangement.',
        'Compute what each method brings into the statements.',
        'Say why all three report the same profit.',
        'Say what the choice does to a leverage ratio.',
    ],

    terms=[
        ('full consolidation',
         'Bringing in all of a subsidiary’s assets, liabilities, revenues and '
         'expenses, with a non-controlling interest for the part not owned.',
         'التوحيد الكامل',
         'The only method permitted for a controlled subsidiary. All of the '
         'assets, whatever the stake.'),
        ('one-line consolidation',
         'A name for the equity method, because it reports the investor’s share '
         'of an investee’s net assets and profit on single lines.',
         'التوحيد في سطر واحد',
         'The name is the point: the same share of profit arrives, with none of '
         'the detail and none of the debt.'),
        ('joint arrangement',
         'An arrangement over which two or more parties have joint control.',
         'الترتيب المشترك',
         'Joint control means neither party can act alone. It is a third thing, '
         'not a weak form of control.'),
        ('joint venture',
         'A joint arrangement in which the parties have rights to the net '
         'assets of the arrangement.', 'المشروع المشترك',
         'Accounted for by the equity method. A joint operation, where the '
         'parties have rights to the assets themselves, is accounted for '
         'directly.'),
        ('uniform accounting policies',
         'The requirement that a group apply the same policies to like '
         'transactions throughout the consolidation.',
         'سياسات محاسبية موحدة',
         'A subsidiary using a different inventory method must be restated '
         'before consolidation, not consolidated as it stands.'),
    ],

    blocks=[
        ('scene', 'The same %s, three ways' % CO.sub, [
            '%s has assets of %s, liabilities of %s and profit of %s for the '
            'year. Northwind owns %s of it.'
            % (CO.sub, money(SUB_ASSETS), money(SUB_LIABS),
               money(SUB_PROFIT), _pc(CO.stake)),
            'There are three ways a textbook describes bringing an interest '
            'like this into a set of statements, and the exam expects all '
            'three.',
            'Only one of them is permitted here. The other two are the answers '
            'that apply when control is absent, and knowing which is which is '
            'the whole of A.1(j).',
            'Strikingly, all three report the same profit attributable to '
            'Northwind. What differs is everything else.',
        ]),
        ('fig', 'buckets', 'Three methods, in one sentence each',
         [('FULL CONSOLIDATION', PAR,
           ['All of the assets and liabilities',
            'All of the revenue and expenses',
            'A non-controlling interest of %s in equity' % money(CO.nci)]),
          ('PROPORTIONATE CONSOLIDATION', SUB,
           ['%s of the assets and liabilities' % _pc(CO.stake),
            '%s of the revenue and expenses' % _pc(CO.stake),
            'No non-controlling interest at all']),
          ('EQUITY METHOD', SLATE,
           ['No assets or liabilities at all',
            'One investment line of %s' % money(CO.price),
            'One line of profit, %s' % money(SUB_PROFIT * CO.stake)])],
         'The third is called one-line consolidation for a reason. The share of '
         'profit arrives; nothing else does.'),

        ('part', 'Part 1 · Which method, and when',
         'control, joint control, influence'),

        ('task', 'Exercise 2A',
         'Say which method applies to each kind of interest and why.',
         'Read and complete. Write one word in each space.',
         ['Handout 1 Exercise 1B, on control and influence.'],
         ['Northwind controls %s, so only one of the three methods is open to '
          'it.' % CO.sub,
          'Proportionate consolidation is attractive and prohibited. Ask what '
          'would be misleading about reporting %s of a liability the company is '
          'wholly responsible for.' % _pc(CO.stake),
          'The last blank is the method a joint venture uses, and it is the '
          'same one an associate uses.']),
        ('fill', 'R2',
         ['Northwind controls %s, so the subsidiary is brought in {fully}. '
          'Every asset, every liability, every dollar of revenue, and a '
          'non-controlling interest of %s for the owners of the other %s.'
          % (CO.sub, money(CO.nci), _pc(1 - CO.stake)),
          'Proportionate consolidation would bring in %s of each figure. It is '
          '{prohibited} for a controlled subsidiary, because a parent that '
          'controls an entity is answerable for the whole of its debt rather '
          'than %s of it.' % (_pc(CO.stake), _pc(CO.stake)),
          'Where there is influence but not control, the investor cannot bring '
          'in assets it does not direct. It reports its share of the net assets '
          'and of the profit on single lines, which is the {equity} method of '
          'Volume 6.',
          'A joint arrangement is a third case. Where the parties have rights '
          'to the net assets of the arrangement it is a joint {venture}, and it '
          'too uses the equity method.'],
         {'fully': ('All of it, because control is not divisible.', ''),
          'prohibited': ('Not an option for a subsidiary under US GAAP.',
                         'Students pick it because it matches the '
                         'shareholding. The shareholding is not what '
                         'consolidation measures.'),
          'equity': ('One line for the net assets, one for the profit.', ''),
          'venture': ('Rights to the net assets, not to the assets.', '')},
         ['partly', 'permitted', 'operation']),
        ('fig', 'fork', 'Which method does this interest call for?',
         [('Does the investor control the entity?',
           'YES → full consolidation, and nothing else is permitted', PAR),
          ('Is there joint control, with rights to the net assets?',
           'YES → a joint venture, and the equity method', SLATE),
          ('Is there influence without control?',
           'YES → the equity method again, on one line', SUB)]),

        ('part', 'Part 2 · What each method brings in',
         'the three columns, computed'),

        ('task', 'Exercise 2B',
         'Compute what each of the three methods brings into the statements.',
         'Complete the grid. %s is %s of each figure.'
         % (_pc(CO.stake), 'four fifths'),
         ['Exercise 2A, and the opening scene for %s own figures.' % CO.sub],
         ['The first column takes the whole of each figure. The second takes '
          '%s of it.' % _pc(CO.stake),
          'The third column brings in no assets and no liabilities at all, so '
          'two of its cells are nil and one carries the %s investment.'
          % money(CO.price),
          'Row 5 is the surprise: the profit added is %s in two of the three '
          'columns.' % money(SUB_PROFIT * CO.stake)]),
        ('table', _THREEH, _three(blank=True), PAR, _THREEW),
        ('answers', 16),
        ('fig', 'ranked', 'Assets of %s brought into the group' % CO.sub,
         [('Full consolidation', SUB_ASSETS, money(SUB_ASSETS), PAR),
          ('Proportionate consolidation, %s' % _pc(CO.stake),
           SUB_ASSETS * CO.stake, money(SUB_ASSETS * CO.stake), SUB),
          ('Equity method, the investment line only', CO.price,
           money(CO.price), SLATE)],
         'Three different balance sheets from one set of facts. The profit '
         'attributable to Northwind is the same under all three.',
         'Assets added to Northwind’s own %s' % money(N.total_assets)),

        ('part', 'Part 3 · Why the profit is the same',
         'the one figure that does not move'),

        ('prose', 'Full consolidation adds the whole of a subsidiary’s profit '
                  'and then gives part of it away to the non-controlling '
                  'interest. The equity method adds only the investor’s share '
                  'in the first place. Both arrive at the same figure '
                  'attributable to the parent.', 'R2'),

        ('task', 'Exercise 2C',
         'Show that the profit attributable to Northwind is the same under full '
         'consolidation and the equity method.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercise 2B, and the paragraph above.'],
         ['%s earned %s. Under full consolidation all of it is added, and then '
          'the other owners’ share is deducted.'
          % (CO.sub, money(SUB_PROFIT)),
          'The other owners hold %s, so their share is %s.'
          % (_pc(1 - CO.stake), money(SUB_PROFIT * (1 - CO.stake))),
          'Under the equity method %s is added and nothing is deducted. Compare '
          'the two results.' % money(SUB_PROFIT * CO.stake)]),
        ('fill', 'R2',
         ['Under full consolidation the whole %s of %s profit is added to '
          'Northwind’s %s. The consolidated profit is therefore %s before any '
          'split.' % (money(SUB_PROFIT), CO.sub, money(N.net_income),
                      money(N.net_income + SUB_PROFIT)),
          'That total is then divided. The non-controlling interest is credited '
          'with its %s share, which is {%s}, and the remainder is attributable '
          'to Northwind’s own shareholders.'
          % (_pc(1 - CO.stake), money(SUB_PROFIT * (1 - CO.stake))),
          'Under the equity method no such split is needed, because only '
          'Northwind’s %s share of %s is ever brought in. Nothing is '
          '{deducted} afterwards.'
          % (_pc(CO.stake), money(SUB_PROFIT * CO.stake)),
          'Both routes end at %s. The choice of method changes the balance '
          'sheet and the revenue line completely and leaves the profit '
          'attributable to the parent {unchanged}.'
          % money(N.net_income + SUB_PROFIT * CO.stake)],
         {money(SUB_PROFIT * (1 - CO.stake)): ('%s of %s.'
                                               % (_pc(1 - CO.stake),
                                                  money(SUB_PROFIT)), ''),
          'deducted': ('Only the share was ever added.', ''),
          'unchanged': ('Same destination, two routes.',
                        'Students expect consolidation to raise the parent’s '
                        'profit. It raises revenue, assets and liabilities; '
                        'the attributable profit is the one figure it cannot '
                        'move.')},
         [money(SUB_PROFIT), 'added', 'doubled']),
        ('fig', 'formula', 'Two routes to one figure',
         [('All of %s profit, %s' % (CO.sub, money(SUB_PROFIT)),
           'Added under full consolidation', PAR),
          ('−', '', None),
          ('Non-controlling share %s' % money(SUB_PROFIT * (1 - CO.stake)),
           'Given to the other owners', NCI),
          ('=', '', None),
          ('%s' % money(SUB_PROFIT * CO.stake),
           'Exactly what the equity method adds', SLATE)],
         'The equity method starts where full consolidation finishes, which is '
         'why the attributable profit cannot differ.'),

        ('part', 'Part 4 · What the choice does to a ratio',
         'where it matters most'),

        ('task', 'Exercise 2D',
         'Compare Northwind’s totals and leverage under two of the methods.',
         'Complete the grid. The profit row is given, and it is the point.',
         ['Exercise 2C, and Volume 1 Handout 4 for Northwind’s own totals.'],
         ['Northwind’s own assets are %s and its own liabilities are %s.'
          % (money(N.total_assets), money(N.total_liabilities)),
          'Full consolidation adds %s of assets and %s of liabilities. The '
          'equity method adds the %s investment and no liabilities at all.'
          % (money(SUB_ASSETS), money(SUB_LIABS), money(CO.price)),
          'Work the last row from the two above it, and notice which direction '
          'it moves.']),
        ('table', _EFFH, _eff(blank=True), SLATE, _EFFW),
        ('answers', 6),
        ('fig', 'matrix', 'The same group, two presentations',
         ['Full consolidation', 'Equity method'],
         ['Assets', 'Liabilities', 'Debt to assets'],
         [[money(N.total_assets + SUB_ASSETS), money(N.total_liabilities + SUB_LIABS),
           num((N.total_liabilities + SUB_LIABS) / (N.total_assets + SUB_ASSETS) * 100, 1)
           + '%'],
          [money(N.total_assets + CO.price), money(N.total_liabilities),
           num(N.total_liabilities / (N.total_assets + CO.price) * 100, 1) + '%']],
         'The %s of %s debt is real under both presentations and visible under '
         'only one. That is why the method is prescribed rather than chosen.'
         % (money(SUB_LIABS), CO.sub)),

        ('part', 'Part 5 · One more requirement',
         'the same policies throughout'),

        ('task', 'Exercise 2E',
         'Say what must be done before a subsidiary’s figures can be '
         'consolidated.',
         'Read and complete. Write one word in each space.',
         ['Exercise 2B, and Volume 4 Handout 4 on inventory cost flows.'],
         ['Suppose %s values its inventory on a different basis from '
          'Northwind. A group has to apply uniform accounting policies to like '
          'transactions throughout.' % CO.sub,
          'Adding the two figures together would produce a total measured on '
          'two bases at once. Ask what has to happen first.',
          'The last blank is what has to be done when the subsidiary’s year end '
          'is not the same as the parent’s.']),
        ('fill', 'R2',
         ['A group reports as one entity, so like transactions must be measured '
          'the same way throughout it. The requirement is for {uniform} '
          'accounting policies across the consolidation.',
          'If %s values inventory on a basis Northwind does not use, its '
          'figures are {restated} onto Northwind’s basis before they are added. '
          'The subsidiary’s own statements are unaffected.' % CO.sub,
          'The same applies to dates. A subsidiary whose year end differs from '
          'the parent’s is consolidated from figures drawn up to the {parent} '
          'reporting date, and a gap of more than three months is not '
          'acceptable.',
          'None of this changes what %s reports to its own shareholders. The '
          'adjustments are made in the {consolidation} and nowhere else.'
          % CO.sub],
         {'uniform': ('One policy per kind of transaction, group-wide.', ''),
          'restated': ('Restated for the group, not for itself.',
                       'Students adjust the subsidiary’s own books. The '
                       'adjustment belongs in the consolidation working '
                       'papers.'),
          'parent': ('The group reports as at one date.', ''),
          'consolidation': ('Working papers, not ledgers.', '')},
         ['separate', 'audited', 'ledger']),
        ('fig', 'timeline', 'From two sets of books to one set of statements',
         [('Each company reports', '%s and %s each prepare their own '
                                   'statements on their own policies'
           % (N.short, CO.sub), SUB),
          ('Restate', 'Policies aligned and the date matched, in the '
                      'consolidation working papers', SLATE),
          ('Consolidate', 'All of %s brought in, with a %s non-controlling '
                          'interest' % (CO.sub, money(CO.nci)), PAR)],
         'The middle step happens outside both ledgers, which is why neither '
         'company’s own statements change.'),

        ('watch', 'Proportionate consolidation is the answer the share '
                  'percentage invites and it is prohibited for a controlled '
                  'subsidiary. If a stem gives you %s and asks for consolidated '
                  'assets, the answer uses all of the subsidiary’s assets.'
                  % _pc(CO.stake)),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A controlled subsidiary is brought into the group’s statements '
                'by:',
         ['Proportionate consolidation',
          'Full consolidation, with a non-controlling interest',
          'The equity method',
          'Whichever method the parent elects'],
         1, 'Level A',
         'Full consolidation is the only method permitted once control exists. '
         '(A) matches the shareholding and is prohibited precisely because '
         'control is not proportionate.'),

        ('mcq', 'An investment in a joint venture is accounted for using:',
         ['Full consolidation', 'The equity method',
          'Proportionate consolidation', 'Fair value through profit'],
         1, 'Level A',
         'Rights to the net assets of a jointly controlled arrangement give the '
         'equity method. (C) was permitted for joint ventures under older '
         'standards, which is why the exam keeps offering it.'),

        ('mcq', 'Northwind owns %s of %s, which has assets of %s. The assets '
                'included in the consolidated balance sheet are:'
         % (_pc(CO.stake), CO.sub, money(SUB_ASSETS)),
         [money(SUB_ASSETS * CO.stake), money(SUB_ASSETS),
          money(CO.price), money(CO.net_assets_fv)],
         1, 'Level B',
         'All of them, with a non-controlling interest in equity for the share '
         'not owned. (A) is the proportionate answer, which is the single most '
         'common error on this topic.'),

        ('mcq', 'A subsidiary earns %s and is %s owned. The profit '
                'attributable to the parent under full consolidation compared '
                'with the equity method is:'
         % (money(SUB_PROFIT), _pc(CO.stake)),
         ['Higher by %s' % money(SUB_PROFIT * (1 - CO.stake)),
          'The same', 'Higher by %s' % money(SUB_PROFIT),
          'Lower by %s' % money(SUB_PROFIT * (1 - CO.stake))],
         1, 'Level B',
         'Full consolidation adds %s and then allocates %s to the '
         'non-controlling interest, leaving %s, which is what the equity method '
         'adds directly. (A) forgets the allocation.'
         % (money(SUB_PROFIT), money(SUB_PROFIT * (1 - CO.stake)),
            money(SUB_PROFIT * CO.stake))),

        ('mcq', 'Compared with the equity method, full consolidation of a '
                'subsidiary with debt:',
         ['Reduces the group’s reported leverage',
          'Increases the group’s reported assets and liabilities',
          'Increases the profit attributable to the parent',
          'Has no effect on the balance sheet'],
         1, 'Level B',
         'Both sides of the balance sheet grow, which is the whole purpose: the '
         'subsidiary’s debt becomes visible. (C) is the answer the bigger '
         'revenue figure suggests and the non-controlling allocation rules '
         'out.'),

        ('mcq', 'A subsidiary values inventory on a basis its parent does not '
                'use. For consolidation purposes the subsidiary’s figures '
                'should be:',
         ['Consolidated as reported, with disclosure of the difference',
          'Restated onto the parent’s basis before consolidation',
          'Excluded from the consolidation',
          'Consolidated at the parent’s election'],
         1, 'Level C',
         'A group applies uniform policies to like transactions, so the '
         'restatement is made in the consolidation. (A) would add two figures '
         'measured on different bases and call the total one number.'),

        ('mcq', 'An investor has joint control of an arrangement and rights to '
                'the individual assets and obligations rather than to its net '
                'assets. The arrangement is:',
         ['A joint venture, accounted for by the equity method',
          'A joint operation, with the investor recognising its share of the '
          'assets and liabilities directly',
          'A subsidiary, consolidated in full',
          'A variable interest entity'],
         1, 'Level C',
         'Rights to the assets themselves make it a joint operation, and the '
         'investor records its own share directly. (A) is the other half of the '
         'same distinction, and it is the half the exam states first to see '
         'whether you read on.'),

        ('tip', 'Decide the relationship before you touch a figure. Control '
                'means all of the assets; influence or joint control over net '
                'assets means one line. Every number in the question follows '
                'from that decision, and no percentage in the stem changes it.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2B · the three methods, computed'),
        ('table', _THREEH, _three(), PAR, _THREEW),
        ('h3', 'Exercise 2D · the effect on the totals'),
        ('table', _EFFH, _eff(), SLATE, _EFFW),
        ('prose', 'Row 5 of the first grid is the one to remember. Full '
                  'consolidation adds %s of profit and allocates %s away; the '
                  'equity method adds %s and allocates nothing. Both leave '
                  '%s attributable to Northwind.'
                  % (money(SUB_PROFIT),
                     money(SUB_PROFIT * (1 - CO.stake)),
                     money(SUB_PROFIT * CO.stake),
                     money(N.net_income + SUB_PROFIT * CO.stake)), 'R2'),
        ('prose', 'The second grid is why the method is prescribed. The same '
                  'group owes the same %s either way, and only full '
                  'consolidation puts it on the face of the balance sheet, '
                  'where it moves debt to assets from %s to %s.'
                  % (money(SUB_LIABS),
                     num(N.total_liabilities / (N.total_assets + CO.price) * 100, 1)
                     + '%',
                     num((N.total_liabilities + SUB_LIABS)
                         / (N.total_assets + SUB_ASSETS) * 100, 1) + '%'), 'R2'),
    ],
)
