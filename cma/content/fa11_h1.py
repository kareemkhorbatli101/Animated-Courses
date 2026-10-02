# -*- coding: utf-8 -*-
"""Volume 11, Handout 1 — Integrated Reporting and Integrated Thinking.

Covers A.1(l) and A.1(m): what an integrated report is, who it is for, and
the guiding principles it is prepared under.
"""
from fadata import N, Y
from data import money

REP, THINK, CAP, SLATE = '1F6F8F', '2E7D5B', 'A24B6B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_PRINH = ['Guiding principle', 'What it requires']
_PRINW = [38, 62]


def _prin(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Strategic focus and future orientation',
         c('Insight into the strategy and how it affects value over time')],
        ['Connectivity of information',
         c('The links between the factors affecting value, shown together')],
        ['Stakeholder relationships',
         c('The quality of relationships with key stakeholders')],
        ['Materiality',
         c('Only matters that substantively affect value creation')],
        ['Conciseness', c('Enough to understand, and no more')],
        ['Reliability and completeness',
         c('All material matters, good and bad, without material error')],
        ['Consistency and comparability',
         c('The same basis over time, and comparably with others')],
    ]


_DIFFH = ['', 'The financial statements', 'An integrated report']
_DIFFW = [26, 37, 37]


def _diff(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Period covered', 'The year just ended',
         c('The past, the present and what is expected next')],
        ['Measured in', 'Money', c('Money, and whatever else is material')],
        ['Prepared for', c('Investors and lenders, primarily'),
         c('Providers of financial capital, primarily')],
        ['Governed by', 'Accounting standards', c('A principles-based '
                                                  'framework')],
        ['Assured by', 'A statutory audit', c('No general requirement')],
    ]


HANDOUT = dict(
    n=1,
    title='Integrated Reporting and Integrated Thinking',
    subtitle='Northwind’s statements explain the %s it earned. They say nothing '
             'about how it will earn anything in %s, and that gap is what this '
             'volume is about.' % (money(N.net_income), '20X9'),
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the purpose is being established, R2 once the '
                 'principles are being applied.',
        collocations=['create value over time',
                      'report on value creation',
                      'connect financial and non-financial information',
                      'determine what is material',
                      'embed integrated thinking in a business',
                      'address the providers of financial capital'],
        pairs=['integrated report / financial statements',
               'integrated thinking / integrated reporting',
               'financial capital / the other capitals',
               'short term / over time'],
        nots=['An integrated report is not a sustainability report. Its '
              'subject is value creation for the business, not its '
              'environmental record for its own sake.',
              'Integrated reporting is not an accounting standard. There is no '
              'required format and no general audit requirement.'],
    ),

    objectives=[
        'Say what an integrated report is and what it reports on.',
        'Name its primary intended audience.',
        'Distinguish integrated thinking from integrated reporting.',
        'State the seven guiding principles.',
        'Say how an integrated report differs from the financial statements.',
    ],

    terms=[
        ('integrated report',
         'A concise communication about how a company’s strategy, governance, '
         'performance and prospects lead to value creation over time.',
         'التقرير المتكامل',
         'Concise is in the definition. Length is a failure of the framework, '
         'not compliance with it.'),
        ('value creation',
         'The process by which a company increases, decreases or transforms '
         'the resources it uses and affects.', 'خلق القيمة',
         'Value can be destroyed as well as created, and the framework requires '
         'both to be reported.'),
        ('integrated thinking',
         'Active consideration of the relationships between a company’s '
         'business units and the resources it uses, when making decisions.',
         'التفكير المتكامل',
         'The practice inside the business. The report is only its output, '
         'which is why a report without the thinking is worthless.'),
        ('provider of financial capital',
         'An investor or lender who commits money to a business, and the '
         'primary intended reader of an integrated report.',
         'مقدّم رأس المال المالي',
         'The framework names this audience explicitly. Other stakeholders '
         'benefit, and the report is not addressed to them first.'),
        ('financial capital',
         'The pool of funds available to a company, from investors, lenders or '
         'its own operations.', 'رأس المال المالي',
         'The only one of the framework’s six capitals that the balance sheet '
         'measures. Handout 2 takes the other five.'),
        ('materiality',
         'The test that a matter be included only if it substantively affects '
         'the company’s ability to create value.', 'الأهمية النسبية',
         'A different test from the accounting one. Here the question is '
         'effect on value creation, not effect on a reported figure.'),
    ],

    blocks=[
        ('scene', 'What the statements do not say', [
            'Volume 1 built Northwind’s statements. They report %s of sales, '
            '%s of profit and %s of total assets, all of it measured, audited '
            'and comparable.' % (money(N.sales), money(N.net_income),
                                 money(N.total_assets)),
            'A reader deciding whether to invest for ten years needs more than '
            'that. Are the engineers staying? Is the brand holding? What '
            'happens to the components business if its main customer '
            'redesigns?',
            'None of those are assets and none of them can be put in the '
            'balance sheet. Yet every one of them bears on whether there will '
            'be a profit in %s.' % '20X9',
            'An integrated report is an attempt to answer them, in one concise '
            'document, alongside the figures.',
        ]),
        ('fig', 'scale',
         'THE FINANCIAL STATEMENTS',
         ['One year, just ended',
          'Everything measured in money',
          'Prescribed by accounting standards',
          'Audited, and comparable across companies'],
         'AN INTEGRATED REPORT',
         ['Past, present and what comes next, together',
          'Money, and whatever else is material',
          'A principles-based framework, no set format',
          'Concise, connected, and usually unaudited']),

        ('part', 'Part 1 · What it is and who it is for',
         'one document, one audience'),

        ('task', 'Exercise 1A',
         'Say what an integrated report reports on and who its primary reader '
         'is.',
         'Read and complete. Write one word in each space.',
         ['Volume 1 Handout 1, on the purpose of financial reporting.'],
         ['The subject of the report is a process rather than a period. Think '
          'about what the reader is trying to predict.',
          'The framework names one audience first, and it is the same audience '
          'the financial statements serve: a provider of financial capital, '
          'which means an investor or a lender.',
          'The last blank is the quality the framework puts into the definition '
          'itself, and most first attempts fail it.']),
        ('fill', 'R1',
         ['An integrated report explains how a company’s strategy, governance, '
          'performance and prospects lead it to create {value} over time. Its '
          'subject is that process, not a period.',
          'Value is not only financial and not only the company’s own. A '
          'business uses and affects resources of several kinds, and the report '
          'has to show what it does to each. Value can also be {destroyed}, and '
          'the framework requires that to be reported too.',
          'The report is addressed first to the providers of financial '
          '{capital}: the investors and lenders who commit money and want to '
          'know whether the business will still be creating value in ten '
          'years.',
          'Other stakeholders benefit from reading it, and it is not written '
          'for them first. And it must be {concise}, which is part of the '
          'definition rather than a presentational preference.'],
         {'value': ('Over time, which is why what comes next is in it.',
                    ''),
          'destroyed': ('Good news and bad, both material.', ''),
          'capital': ('Investors and lenders, named explicitly.',
                      'Students answer that an integrated report is for all '
                      'stakeholders. The framework names one audience first, '
                      'and the exam tests that it is named.'),
          'concise': ('In the definition, not an afterthought.', '')},
         ['profit', 'audited', 'detailed']),
        ('fig', 'workplace', 'Who reads which report',
         [('Nour', 'Treasurer — prepares both', 'w', REP),
          ('Layla', 'Pension fund investor — the primary reader', 'w', CAP),
          ('Omar', 'Bank lender — also a provider of capital', 'm', SLATE)],
         [('doc', 'Financial statements'),
          ('globe', 'Integrated report'),
          ('clock', 'A ten-year view'),
          ('scale', 'Material to value')],
         'Layla and Omar both committed money and both want to know about %s. '
         'The framework writes for them first and does not pretend the report '
         'serves everyone equally.' % '20X9'),

        ('part', 'Part 2 · Thinking before reporting',
         'the practice and its output'),

        ('prose', 'Integrated thinking is what happens inside a business: '
                  'managers actively considering the relationships between the '
                  'units they run and the resources they use and affect. The '
                  'report is its output. A company that has not done the '
                  'thinking can only produce a document.', 'R2'),

        ('task', 'Exercise 1B',
         'Distinguish integrated thinking from integrated reporting.',
         'Sort each item into the column it belongs in.',
         ['The paragraph above.'],
         ['Ask where each activity happens: inside the management of the '
          'business, or in the document that comes out of it.',
          'Breaking down the barriers between functions is a management change '
          'and not a disclosure.',
          'Two of the items are about the document, and one of those two is '
          'about its length.']),
        ('sortgrid',
         ['Activity', 'INTEGRATED THINKING', 'INTEGRATED REPORTING'],
         ['Capital budgeting that weighs the effect on staff retention',
          'Publishing one concise document in place of several',
          'Breaking down the barriers between finance and operations',
          'Deciding which matters are material to value creation',
          'Managers held accountable for resources that are not on the '
          'balance sheet',
          'Connecting the strategy section to the performance figures on the '
          'page'],
         ['INTEGRATED THINKING', 'INTEGRATED REPORTING',
          'INTEGRATED THINKING', 'INTEGRATED REPORTING',
          'INTEGRATED THINKING', 'INTEGRATED REPORTING'],
         'The left column changes how decisions are made. The right column '
         'changes what is published. Only the left one can make the right one '
         'true.'),
        ('fig', 'matrix', 'The practice and the document',
         ['Integrated thinking', 'Integrated reporting'],
         ['Where it happens', 'What it changes', 'Who notices first'],
         [['Inside the business, in its decisions',
           'How capital is allocated and managers are judged',
           'Employees and managers'],
          ['In the published report',
           'What outsiders are told, and how it connects',
           'Investors and lenders']],
         'The framework’s claim is that the second is worth little without the '
         'first, which is why the exam asks for the distinction and not just '
         'the definitions.'),

        ('part', 'Part 3 · The seven guiding principles',
         'how the report is prepared'),

        ('task', 'Exercise 1C',
         'State each guiding principle and say what it requires.',
         'Complete the right-hand column. One short phrase in each cell.',
         ['Exercises 1A and 1B.'],
         ['Two of the seven are about what goes in: one is a threshold and one '
          'is a limit on length.',
          'One is about showing the links between things rather than listing '
          'them separately, and it is the principle most reports fail.',
          'Two are paired qualities, and both of those pairs appear as single '
          'principles.']),
        ('table', _PRINH, _prin(blank=True), REP, _PRINW),
        ('answers', 7),
        ('fig', 'buckets', 'The seven principles, grouped',
         [('WHAT TO REPORT ON', REP,
           ['Strategic focus and future orientation',
            'Stakeholder relationships',
            '']),
          ('HOW MUCH TO REPORT', CAP,
           ['Materiality — only what affects value',
            'Conciseness — enough, and no more',
            'Reliability and completeness']),
          ('HOW TO PRESENT IT', SLATE,
           ['Connectivity of information',
            'Consistency and comparability',
            ''])],
         'Materiality and conciseness pull the same way and connectivity pulls '
         'against both. Holding the three together is the whole difficulty of '
         'preparing one of these reports.'),

        ('part', 'Part 4 · The principle that does the work',
         'connectivity'),

        ('task', 'Exercise 1D',
         'Say what connectivity of information requires and why it is hard.',
         'Read and complete. Write one word in each space.',
         ['Exercise 1C.'],
         ['A report with a strategy section, a performance section and a risk '
          'section may still fail this principle. Ask what is missing.',
          'Northwind’s %s of profit depends on things no section of the '
          'statements mentions.' % money(N.net_income),
          'The last blank is what a reader should be able to do once the links '
          'are shown.']),
        ('fill', 'R2',
         ['Connectivity requires the report to show the {links} between the '
          'factors that affect value, rather than reporting each of them in a '
          'section of its own.',
          'A report that describes a strategy on one page, the year’s results '
          'on another and the principal risks on a third has told the reader '
          'three things and connected {nothing}.',
          'Done properly, Northwind’s report would show how retaining its '
          'engineers feeds the product development that produced this year’s '
          '%s of sales, and what happens to that if the engineers {leave}.'
          % money(N.sales),
          'The test is whether a reader can follow a chain from a resource the '
          'company depends on to a number in the statements, and so form a '
          'view about the {future}.'],
         {'links': ('Relationships, not sections.', ''),
          'nothing': ('Three disclosures are not one report.',
                      'Students read connectivity as putting the sections in '
                      'the same document. It means showing how each one bears '
                      'on the others.'),
          'leave': ('The risk and the resource, reported together.', ''),
          'future': ('Which is what the primary reader came for.', '')},
         ['sections', 'everything', 'past']),
        ('fig', 'timeline', 'A chain a connected report lets a reader follow',
         [('A resource', 'Experienced engineers, on no balance sheet',
           THINK),
          ('A dependency', 'Product development depends on them, and the '
                           'strategy depends on that', SLATE),
          ('A number', '%s of sales and %s of profit this year'
           % (money(N.sales), money(N.net_income)), REP)],
         'Three links, one chain. A reader who can follow it can price the risk '
         'that the first box empties.'),

        ('part', 'Part 5 · Against the financial statements',
         'five differences'),

        ('task', 'Exercise 1E',
         'Compare an integrated report with the financial statements on five '
         'points.',
         'Complete both right-hand columns where they are blank.',
         ['Exercises 1A and 1C, and Volume 1 Handout 1.'],
         ['One of the five is a difference of period, and the integrated report '
          'covers more than one.',
          'On one row the two reports agree, and that row is the audience.',
          'The last row is the one most students get wrong, and the answer for '
          'the integrated report is that there is no general requirement.']),
        ('table', _DIFFH, _diff(blank=True), SLATE, _DIFFW),
        ('answers', 7),
        ('fig', 'fork', 'Is this an integrated reporting matter?',
         [('Does it substantively affect the ability to create value?',
           'NO → it is not material, and it is left out', RUST),
          ('Can a reader see how it connects to the rest?',
           'NO → it fails connectivity, however true it is', SLATE),
          ('Both of those satisfied?',
           'YES → include it, concisely, with the links shown', REP)]),

        ('watch', 'Integrated reporting is a framework and not a standard. '
                  'There is no prescribed format, no line items, and no general '
                  'requirement for assurance. A question that offers a required '
                  'statement or a mandatory audit is offering a distractor.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'An integrated report is best described as a communication '
                'about:',
         ['A company’s environmental and social performance',
          'How a company’s strategy, governance, performance and prospects '
          'lead to value creation over time',
          'The results of the year just ended',
          'A company’s compliance with accounting standards'],
         1, 'Level A',
         'Value creation over time is the subject. (A) describes a '
         'sustainability report, which is the commonest confusion on this '
         'topic and a different document with a different purpose.'),

        ('mcq', 'The primary intended audience of an integrated report is:',
         ['Employees', 'Providers of financial capital', 'Regulators',
          'All stakeholders equally'],
         1, 'Level A',
         'The framework names investors and lenders first. (D) is the generous '
         'answer the word integrated invites, and the framework explicitly does '
         'not say it.'),

        ('mcq', 'Integrated thinking differs from integrated reporting in '
                'that it:',
         ['Is required by the framework',
          'Happens inside the business, in how decisions are made',
          'Covers a longer period',
          'Is audited'],
         1, 'Level B',
         'Thinking is the management practice and the report is its output. (A) '
         'inverts the relationship: the framework asks for the report, and the '
         'thinking is what makes the report mean anything.'),

        ('mcq', 'Which guiding principle requires an integrated report to show '
                'the relationships between the factors affecting value?',
         ['Materiality', 'Connectivity of information', 'Conciseness',
          'Reliability and completeness'],
         1, 'Level B',
         'Connectivity is about relationships rather than content. (A) and (C) '
         'both limit what goes in, and a report can satisfy them both while '
         'connecting nothing.'),

        ('mcq', 'Under the integrated reporting framework, a matter is material '
                'if it:',
         ['Exceeds a quantitative threshold',
          'Substantively affects the company’s ability to create value',
          'Would change an auditor’s opinion',
          'Is required by an accounting standard'],
         1, 'Level B',
         'The test is effect on value creation, not effect on a reported '
         'figure. (A) is the accounting instinct, and the framework sets no '
         'threshold at all.'),

        ('mcq', 'An integrated report that runs to 300 pages and discloses every '
                'available metric:',
         ['Complies with the framework, because completeness is a principle',
          'Fails the framework, because conciseness and materiality are also '
          'principles',
          'Complies, provided it is audited',
          'Fails, because the framework sets a page limit'],
         1, 'Level C',
         'Completeness is balanced against conciseness and materiality, and the '
         'definition itself says concise. (D) is the wrong reason for the right '
         'answer: there is no page limit, just principles that pull against '
         'each other.'),

        ('mcq', 'Assurance on an integrated report is:',
         ['Required annually, by the statutory auditor',
          'Not generally required by the framework',
          'Required only for listed companies',
          'Required for the non-financial sections only'],
         1, 'Level C',
         'The framework imposes no general assurance requirement, which is one '
         'of the sharpest differences from the financial statements. (A) '
         'assumes the audit rules carry across, and they do not.'),

        ('tip', 'Two words answer most questions on this topic: value and over '
                'time. If an option is about a past period, about compliance, '
                'or about one stakeholder group other than the providers of '
                'capital, it is almost certainly the distractor.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1C · the seven principles'),
        ('table', _PRINH, _prin(), REP, _PRINW),
        ('h3', 'Exercise 1E · the two reports compared'),
        ('table', _DIFFH, _diff(), SLATE, _DIFFW),
        ('prose', 'The audience row is the one to remember, because it is the '
                  'row where the two reports agree. Both are written first for '
                  'the people who have committed money, which is why an '
                  'integrated report is not a sustainability report with the '
                  'accounts attached.', 'R2'),
        ('prose', 'The assurance row is the one most often got wrong. A '
                  'statutory audit covers the financial statements; the '
                  'framework asks for no general assurance on the integrated '
                  'report at all, and Handout 3 returns to what that costs a '
                  'reader.', 'R2'),
    ],
)
