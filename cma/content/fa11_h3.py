# -*- coding: utf-8 -*-
"""Volume 11, Handout 3 — The Eight Elements, and What Adoption Costs.

Covers A.1(o) and A.1(p): the eight content elements of an integrated
report, and the benefits and limitations of preparing one.
"""
from fadata import N, Y
from data import money

REP, THINK, CAP, SLATE = '1F6F8F', '2E7D5B', 'A24B6B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_ELH = ['Content element', 'The question it answers']
_ELW = [40, 60]


def _els(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Organisational overview and external environment',
         c('What does the company do, and in what circumstances?')],
        ['Governance', c('How does governance support value creation?')],
        ['Business model', c('What is the company’s system for creating '
                             'value?')],
        ['Risks and opportunities',
         c('What could affect value creation, and how is it managed?')],
        ['Strategy and resource allocation',
         c('Where does the company want to go, and how will it get there?')],
        ['Performance', c('What has it achieved against its objectives?')],
        ['Outlook', c('What challenges will it meet, and with what effect?')],
        ['Basis of preparation and presentation',
         c('How were the matters to include chosen and measured?')],
    ]


_BOTHH = ['', 'What adoption gives', 'What it costs or risks']
_BOTHW = [24, 38, 38]


def _both(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['For the reader', c('A connected view, with an outlook'),
         c('No assurance, and little comparability')],
        ['For the preparer', c('Integrated thinking forced on the business'),
         c('Real cost, and competitive disclosure')],
        ['For the figures', c('Non-financial drivers made visible'),
         c('Measures that are unmeasured and unverified')],
        ['Over time', c('Trade-offs surfaced before decisions'),
         c('Boilerplate, if the thinking is skipped')],
    ]


HANDOUT = dict(
    n=3,
    title='The Eight Elements, and What Adoption Costs',
    subtitle='Eight questions a report must answer, and one honest account of '
             'why most companies have not adopted the framework.',
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the elements, R3 for the benefits and limitations, '
                 'which the exam asks as an evaluation question.',
        collocations=['address a content element',
                      'explain the basis of preparation',
                      'disclose a forward-looking statement',
                      'obtain assurance over a disclosure',
                      'compare one report with another',
                      'fall back on boilerplate'],
        pairs=['element / principle',
               'performance / outlook',
               'benefit / limitation',
               'disclosure / assurance'],
        nots=['The eight elements are not a table of contents. They are '
              'questions to be answered, in whatever structure suits the '
              'business.',
              'The limitations are not an argument against the framework. They '
              'are what the exam expects a candidate to be able to state.'],
    ),

    objectives=[
        'Name the eight content elements.',
        'Say which question each element answers.',
        'Distinguish the elements from the guiding principles.',
        'State the benefits of preparing an integrated report.',
        'State its limitations, and say which is the most serious.',
    ],

    terms=[
        ('content element',
         'One of the eight matters an integrated report is required to '
         'address, each framed as a question.', 'عنصر المحتوى',
         'A question, not a section heading. The framework is explicit that no '
         'structure is prescribed.'),
        ('risks and opportunities',
         'The content element covering what could affect value creation and '
         'how the company manages it.', 'المخاطر والفرص',
         'Opportunities as well as risks, which is the half candidates leave '
         'out of the name.'),
        ('outlook',
         'The content element covering the challenges the company expects and '
         'their implications for value creation.', 'التوقعات المستقبلية',
         'Distinct from performance, which is backward-looking. This is where '
         'the framework differs most from the financial statements.'),
        ('basis of preparation',
         'The content element explaining how the matters to include were '
         'chosen and how they were measured.', 'أساس الإعداد',
         'The element that makes the rest readable, because without it a '
         'reader cannot tell what a non-financial measure means.'),
        ('boilerplate',
         'Disclosure that is generic enough to be true of any company and so '
         'tells a reader nothing.', 'صياغة نمطية جاهزة',
         'The characteristic failure of this framework. A report can address '
         'all eight elements in boilerplate and satisfy none of them.'),
    ],

    blocks=[
        ('scene', 'Eight questions', [
            'Handout 1 gave the seven principles, which govern how a report is '
            'prepared. This handout gives the eight content elements, which '
            'govern what it has to address.',
            'Each element is a question rather than a heading. The framework '
            'prescribes no structure at all, and a company may answer the '
            'eight in whatever order its own business makes sensible.',
            'Then the honest part. Very few companies prepare one of these, '
            'and the reasons are good ones.',
            'The exam asks for both halves: the benefits, and the limitations.',
        ]),
        ('fig', 'buckets', 'The eight elements, grouped by what they ask',
         [('WHERE THE COMPANY IS', REP,
           ['Organisational overview and external environment',
            'Governance',
            'Business model']),
          ('WHERE IT IS GOING', THINK,
           ['Risks and opportunities',
            'Strategy and resource allocation',
            'Outlook']),
          ('HOW IT DID, AND HOW TO READ IT', SLATE,
           ['Performance',
            'Basis of preparation and presentation',
            ''])],
         'Seven principles and eight elements. The principles say how to '
         'prepare; the elements say what to address.'),

        ('part', 'Part 1 · The eight elements',
         'each one a question'),

        ('task', 'Exercise 3A',
         'Say which question each content element answers.',
         'Complete the right-hand column. One question in each cell.',
         ['Handout 1 Exercise 1C, on the seven principles.',
          'Handout 2 Exercise 2C, on the business model.'],
         ['Two of the eight are forward-looking, and only one of those two is '
          'about the company’s own intentions.',
          'One asks how the company creates value at all, and Handout 2 named '
          'it.',
          'The last one is the only element about the report itself rather than '
          'about the business.']),
        ('table', _ELH, _els(blank=True), REP, _ELW),
        ('answers', 8),
        ('fig', 'matrix', 'The two forward-looking elements',
         ['Strategy and resource allocation', 'Outlook'],
         ['What it covers', 'Whose view it is'],
         [['Where the company intends to go and how it will get there',
           'The company’s own plan'],
          ['The challenges it expects and what they imply for value',
           'The conditions it will meet, chosen or not']],
         'Strategy is what the company means to do. Outlook is what will '
         'happen to it anyway. Both are absent from the financial statements.'),

        ('part', 'Part 2 · Elements against principles',
         'what to address, how to prepare'),

        ('task', 'Exercise 3B',
         'Distinguish the content elements from the guiding principles.',
         'Sort each item into the column it belongs in.',
         ['Exercise 3A, and Handout 1 Exercise 1C.'],
         ['A principle is a quality the whole report must have. An element is '
          'a matter the report must address.',
          'Conciseness is a quality of the document, not a subject of it.',
          'Three of the six items are elements, and one of those three is '
          'about how the report itself was put together.']),
        ('sortgrid',
         ['Item', 'CONTENT ELEMENT', 'GUIDING PRINCIPLE'],
         ['Governance',
          'Connectivity of information',
          'Outlook',
          'Conciseness',
          'Basis of preparation and presentation',
          'Stakeholder relationships'],
         ['CONTENT ELEMENT', 'GUIDING PRINCIPLE', 'CONTENT ELEMENT',
          'GUIDING PRINCIPLE', 'CONTENT ELEMENT', 'GUIDING PRINCIPLE'],
         'Stakeholder relationships is a principle and not an element, which '
         'is the pairing the exam uses to see whether the two lists have been '
         'learned separately.'),
        ('fig', 'fork', 'Element or principle?',
         [('Is it a matter the report must address?',
           'YES → a content element, one of eight', REP),
          ('Is it a quality the whole report must have?',
           'YES → a guiding principle, one of seven', CAP),
          ('Is it about how the matters were chosen and measured?',
           'That is the basis of preparation, which is an element', SLATE)]),

        ('part', 'Part 3 · What adoption gives',
         'the case for it'),

        ('task', 'Exercise 3C',
         'State the benefits of preparing an integrated report.',
         'Read and complete. Write one word in each space.',
         ['Handout 1 Exercise 1B, on integrated thinking.'],
         ['The largest benefit is not to the reader at all. Ask what a company '
          'has to do inside itself before it can write one.',
          'Northwind’s statements explain the %s and say nothing about the '
          'engineers. Ask what a reader gains from having both.'
          % money(N.net_income),
          'The last blank is what a company discovers about a decision before '
          'it takes it.']),
        ('fill', 'R2',
         ['The largest benefit falls inside the business. A company cannot '
          'write about its six capitals without first considering them when it '
          'decides things, so preparing the report forces integrated '
          '{thinking}.',
          'For a reader, the gain is connection. Northwind’s %s of profit and '
          'the engineering team that made it possible appear in the same '
          'document, with the {links} between them shown.'
          % money(N.net_income),
          'And a reader gets an outlook. The financial statements stop at the '
          'year end; the report says what the company expects to meet next, '
          'which is what a long-term provider of capital actually wants to '
          '{know}.',
          'Inside the business, trade-offs become visible before they are made. '
          'Halving a training budget stops looking like a saving and starts '
          'looking like a {decision}.'],
         {'thinking': ('The practice, not the document.', ''),
          'links': ('Connectivity, from Handout 1.', ''),
          'know': ('The outlook element.', ''),
          'decision': ('With two capitals moving in opposite directions.',
                       'Students list only disclosure benefits. The framework’s '
                       'own strongest claim is about how decisions get '
                       'made.')},
         ['reporting', 'figures', 'saving']),
        ('fig', 'ranked', 'Where the benefit actually falls',
         [('Integrated thinking forced on the business', 100,
           'The largest claim', THINK),
          ('Trade-offs surfaced before decisions are taken', 80,
           'Inside the business', CAP),
          ('A connected view for the provider of capital', 60,
           'For the reader', REP),
          ('An outlook the statements do not give', 45,
           'For the reader', SLATE)],
         'Two of the four benefits never reach a reader at all. That is the '
         'framework’s own argument, and it is the half candidates leave out.',
         'Ranked by the framework’s own emphasis, not by measurement'),

        ('part', 'Part 4 · What it costs',
         'the case against, stated fairly'),

        ('task', 'Exercise 3D',
         'State the limitations of integrated reporting.',
         'Read and complete. Write one word in each space.',
         ['Exercise 3C, and Handout 1 Exercise 1E on assurance.'],
         ['Volume 1’s statements can be compared with any other company’s. Ask '
          'whether two integrated reports can.',
          'A statutory audit covers the financial statements. Ask what covers '
          'the claim about the engineers.',
          'The last blank is what a report becomes when the thinking behind it '
          'has been skipped.']),
        ('fill', 'R3',
         ['The framework prescribes no format and no measures, so two '
          'integrated reports are hard to set beside each other. The loss of '
          '{comparability} is the first limitation, and it is the price of a '
          'principles-based approach.',
          'The second is assurance. There is no general requirement for an '
          'integrated report to be {audited}, so a claim about a company’s '
          'workforce carries nothing like the authority of a figure in the '
          'statements.',
          'The third is measurement. Several of the capitals have no accepted '
          'unit at all, so a company reporting on its human capital is '
          'choosing its own {measures} and its own basis for them.',
          'The fourth is the most serious. A company can address all eight '
          'elements in language true of any company in its industry, and a '
          'report of that kind is {boilerplate}: compliant, concise, '
          'connected-looking and worthless.'],
         {'comparability': ('No format, no comparison.', ''),
          'audited': ('No general requirement at all.', ''),
          'measures': ('Its own units, and its own basis.', ''),
          'boilerplate': ('Compliant and empty.',
                          'Students treat the limitations as a list to recite. '
                          'This one is why so few companies produce reports '
                          'worth reading, and the exam asks which limitation '
                          'matters most.')},
         ['reliability', 'concise', 'connectivity']),
        ('fig', 'scale',
         'THE FINANCIAL STATEMENTS',
         ['One prescribed basis of measurement',
          'Comparable with any other company',
          'Audited every year',
          'Silent about five of the six capitals'],
         'AN INTEGRATED REPORT',
         ['Measures the company chooses itself',
          'Hard to compare with anything',
          'Usually unaudited',
          'Addresses all six, if the thinking was done']),

        ('part', 'Part 5 · Both sides at once',
         'the evaluation the exam asks for'),

        ('task', 'Exercise 3E',
         'Set the benefits and the limitations against each other.',
         'Complete both columns. Each row is one benefit and one cost.',
         ['Exercises 3C and 3D.'],
         ['Each row is a pair: the same feature of the framework seen from two '
          'sides.',
          'The reader gains an outlook and loses assurance, and both of those '
          'come from the same absence of a standard.',
          'The last row is about time, and the cost on that row is the one '
          'Exercise 3D called most serious.']),
        ('table', _BOTHH, _both(blank=True), SLATE, _BOTHW),
        ('answers', 8),
        ('fig', 'matrix', 'One framework, two readings',
         ['Principles rather than rules', 'No assurance requirement',
          'Non-financial measures'],
         ['The benefit', 'The cost'],
         [['Each company reports what matters to it',
           'No two reports can be compared'],
          ['A company can say what it believes about the future',
           'A reader cannot tell what has been verified'],
          ['Five capitals become visible',
           'None of the five has an accepted unit']],
         'Every row is the same feature twice. That is why the exam asks for '
         'benefits and limitations in one question: they are not separate '
         'lists.'),

        ('watch', 'The exam wants both halves. A question asking you to '
                  'evaluate integrated reporting is not satisfied by the '
                  'benefits, and an answer that only lists the limitations has '
                  'missed that the framework’s main claim is about decisions '
                  'rather than disclosure.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'How many content elements does the integrated reporting '
                'framework specify?',
         ['Six', 'Eight', 'Seven', 'Three'],
         1, 'Level A',
         'Eight content elements, against seven guiding principles and six '
         'capitals. (C) is the number of principles, and the three counts are '
         'the easiest marks on this topic to lose.'),

        ('mcq', 'Which of the following is a content element rather than a '
                'guiding principle?',
         ['Conciseness', 'Outlook', 'Materiality',
          'Connectivity of information'],
         1, 'Level A',
         'Outlook is a matter the report must address. The other three are '
         'qualities the whole report must have, which is exactly the '
         'distinction being tested.'),

        ('mcq', 'The content element that explains how the matters to include '
                'were chosen and measured is:',
         ['Governance', 'Basis of preparation and presentation',
          'Performance', 'Business model'],
         1, 'Level B',
         'It is the only element about the report itself rather than the '
         'business, and without it a reader cannot interpret any non-financial '
         'measure in the document.'),

        ('mcq', 'The most frequently cited benefit of preparing an integrated '
                'report is:',
         ['A lower cost of capital',
          'That it forces integrated thinking inside the business',
          'A reduction in audit fees',
          'Compliance with accounting standards'],
         1, 'Level B',
         'The framework’s own strongest claim is about how decisions get made, '
         'not about disclosure. (D) is impossible: the framework is not an '
         'accounting standard and compliance with it satisfies nothing '
         'statutory.'),

        ('mcq', 'A principal limitation of integrated reporting is that:',
         ['It is too short to be useful',
          'Reports are difficult to compare, because no format or measures '
          'are prescribed',
          'It excludes financial information',
          'It is required only of listed companies'],
         1, 'Level B',
         'A principles-based framework buys relevance at the cost of '
         'comparability. (C) is false: the financial statements sit inside the '
         'picture an integrated report draws.'),

        ('mcq', 'A company publishes a report addressing all eight content '
                'elements in language that would be true of any competitor. '
                'The report:',
         ['Complies with the framework in substance',
          'Addresses the elements and fails the framework’s purpose',
          'Fails because it is too concise',
          'Cannot be published without assurance'],
         1, 'Level C',
         'Boilerplate is the characteristic failure of this framework: the '
         'elements can be addressed while the connectivity and materiality '
         'principles are not met at all. (A) mistakes coverage for '
         'communication.'),

        ('mcq', 'Compared with the financial statements, the absence of an '
                'assurance requirement over an integrated report:',
         ['Makes it more reliable, because management speaks directly',
          'Is a limitation, because a reader cannot tell what has been '
          'verified',
          'Has no practical effect',
          'Applies only to the outlook element'],
         1, 'Level C',
         'Unverified claims about unmeasured capitals are exactly where a '
         'sceptical reader needs assurance most. (A) is the argument a company '
         'might make and is not the one the exam rewards.'),

        ('tip', 'Learn the three counts cold: six capitals, seven principles, '
                'eight elements. Then learn one pair from each list in detail, '
                'because the questions that are not about counting are almost '
                'always about telling a principle from an element.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3A · the eight content elements'),
        ('table', _ELH, _els(), REP, _ELW),
        ('h3', 'Exercise 3E · benefits and limitations, paired'),
        ('table', _BOTHH, _both(), SLATE, _BOTHW),
        ('prose', 'Each row of the second table is one feature of the framework '
                  'read twice. Principles instead of rules let every company '
                  'report what matters to it and make no two reports '
                  'comparable; the absence of assurance lets a company state '
                  'what it believes and leaves a reader unable to tell what has '
                  'been checked.', 'R2'),
        ('prose', 'The last row is the one to carry into the exam. The benefit '
                  'is that trade-offs surface before decisions are taken; the '
                  'cost is that a company that skips the thinking can still '
                  'publish a document, and most of what has been published is '
                  'of that kind.', 'R2'),
    ],
)
