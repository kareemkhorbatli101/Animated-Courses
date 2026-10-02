# -*- coding: utf-8 -*-
"""Volume 11, Handout 2 — The Six Capitals and the Value Creation Process.

Covers A.1(n): the six stores of value a business draws on and affects, and
the process by which inputs become outcomes.
"""
from fadata import N, Y
from data import money

REP, THINK, CAP, SLATE = '1F6F8F', '2E7D5B', 'A24B6B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_CAPH = ['Capital', 'What it is', 'Northwind’s example']
_CAPW = [22, 40, 38]


def _caps(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Financial', c('Funds available for use in the business'),
         '%s of equity and %s of debt'
         % (money(N.equity), money(N.ltd + N.ltd_current))],
        ['Manufactured', c('Physical objects the company uses, not sells'),
         '%s of property, plant and equipment' % money(N.ppe_gross)],
        ['Intellectual', c('Knowledge-based intangibles, owned or '
                           'organisational'),
         'Component designs, and the %s of intangibles'
         % money(N.intangibles)],
        ['Human', c('People’s skills, experience and motivation'),
         'The engineering team, on no balance sheet'],
        ['Social and relationship',
         c('Relationships with communities and stakeholders'),
         'Twenty years of dealing with its main customer'],
        ['Natural', c('Environmental resources the company uses or affects'),
         'The metal, water and energy the plant consumes'],
    ]


_PROCH = ['Stage', 'What it means', 'Northwind']
_PROCW = [20, 40, 40]


def _proc(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Inputs', c('The capitals the business draws on'),
         c('Metal, engineers, designs, the plant, the funds')],
        ['Business activities',
         c('What the company does to those inputs'),
         c('Designing, machining, assembling, selling')],
        ['Outputs', c('The products and by-products that result'),
         c('Components, and the scrap and emissions with them')],
        ['Outcomes',
         c('The effects on each capital, inside and outside the company'),
         c('%s of profit, a trained workforce, metal consumed'
           % money(N.net_income))],
    ]


HANDOUT = dict(
    n=2,
    title='The Six Capitals and the Value Creation Process',
    subtitle='Northwind’s balance sheet measures one of the six stores of value '
             'it runs on. The other five are why the %s is possible at all.'
             % money(N.net_income),
    register='R2',

    lang=dict(
        register='R2 throughout, with one R3 classification because the exam '
                 'asks which capital an item belongs to.',
        collocations=['draw on a capital',
                      'deplete a stock of capital',
                      'transform inputs into outputs',
                      'report an outcome rather than an output',
                      'trade one capital off against another',
                      'describe a business model'],
        pairs=['input / output',
               'output / outcome',
               'financial capital / the other five',
               'increase / deplete'],
        nots=['The six capitals are not six new asset categories. Most of them '
              'are not assets of the company at all and are reported on '
              'because the company affects them.',
              'An output is not an outcome. The component is the output; what '
              'making it did to each capital is the outcome.'],
    ),

    objectives=[
        'Name the six capitals and say what each one is.',
        'Classify a resource into the right capital.',
        'Describe the value creation process in its four stages.',
        'Distinguish an output from an outcome.',
        'Explain a trade-off between two capitals.',
    ],

    terms=[
        ('manufactured capital',
         'Physical objects a company uses in production rather than sells, '
         'including buildings, equipment and infrastructure.',
         'رأس المال المصنوع',
         'Called manufactured, not manufacturing. Inventory is an output and '
         'not part of this capital.'),
        ('intellectual capital',
         'Knowledge-based intangibles: patents, designs, systems and '
         'organisational know-how.', 'رأس المال الفكري',
         'Wider than the intangible assets on a balance sheet, because most '
         'know-how fails the recognition tests of Volume 5.'),
        ('human capital',
         'The competences, capabilities, experience and motivation of a '
         'company’s people.', 'رأس المال البشري',
         'Never an asset in accounting, because a company does not control its '
         'employees. The framework reports it anyway.'),
        ('social and relationship capital',
         'The relationships a company has with its communities, customers, '
         'suppliers and other stakeholders.',
         'رأس المال الاجتماعي والعلاقات',
         'Includes a company’s licence to operate and its reputation. Both can '
         'be destroyed in a week.'),
        ('natural capital',
         'Environmental resources a company uses or affects, renewable and '
         'otherwise.', 'رأس المال الطبيعي',
         'Reported because the company affects it, not because it owns it. '
         'That is true of most of the six.'),
        ('business model',
         'A company’s system for turning inputs into outputs and outcomes '
         'through its business activities.', 'نموذج العمل',
         'The framework’s own term for the middle of the value creation '
         'process, and one of the eight content elements of Handout 3.'),
        ('outcome',
         'The internal and external effect of a company’s activities and '
         'outputs on the capitals.', 'النتيجة',
         'An outcome can be negative. Depleting a capital is an outcome the '
         'framework requires to be reported.'),
    ],

    blocks=[
        ('scene', 'Six stores of value, one on the balance sheet', [
            'Northwind’s balance sheet measures %s of total assets and %s of '
            'equity. That is financial capital, and the accounts measure it '
            'well.' % (money(N.total_assets), money(N.equity)),
            'It also runs on five other things. A plant, a set of component '
            'designs, an engineering team, twenty years of dealing with its '
            'main customer, and the metal and energy its machines consume.',
            'Only the first of those five is on the balance sheet, as %s of '
            'property, plant and equipment. The team and the relationship are '
            'not assets in accounting at all.' % money(N.ppe_gross),
            'The framework calls all six capitals and asks a company to report '
            'what it does to each.',
        ]),
        ('fig', 'buckets', 'The six capitals',
         [('ON THE BALANCE SHEET', REP,
           ['Financial — %s of equity' % money(N.equity),
            'Manufactured — %s of plant' % money(N.ppe_gross),
            'Intellectual — partly, %s of intangibles'
            % money(N.intangibles)]),
          ('NOT ON ANY BALANCE SHEET', THINK,
           ['Human — the engineering team',
            'Social and relationship — the customer of twenty years',
            'Natural — the metal, water and energy consumed'])],
         'Three of the six are measured and three are not. The three that are '
         'not are the ones a long-term investor most wants to know about.'),

        ('part', 'Part 1 · The six, named',
         'and what each one covers'),

        ('task', 'Exercise 2A',
         'Name each of the six capitals and say what it covers.',
         'Complete the middle column. One short phrase in each cell.',
         ['Handout 1 Exercise 1A, on what value creation means.'],
         ['Two of the six cover physical things, and they are distinguished by '
          'whether the company sells them or uses them.',
          'One of the six covers things that cannot be touched at all, and it '
          'is wider than the intangible assets of Volume 5.',
          'The last two are reported because the company affects them rather '
          'than because it owns them.']),
        ('table', _CAPH, _caps(blank=True), CAP, _CAPW),
        ('answers', 6),
        ('fig', 'matrix', 'Three of the six, and the accounting test they '
                          'fail',
         ['Human capital', 'Social and relationship capital',
          'Natural capital'],
         ['What it is', 'Why it is not an asset'],
         [['The skills and motivation of the workforce',
           'A company does not control its employees'],
          ['The licence to operate and the customer relationships',
           'No control, and no reliable measurement'],
          ['The metal, water and energy the plant consumes',
           'Owned by nobody, and affected by everybody']],
         'All three fail the recognition tests of Volume 1 and all three bear '
         'directly on whether there is a profit in %s. That gap is the '
         'framework’s whole argument.' % '20X9'),

        ('part', 'Part 2 · Sorting a resource into a capital',
         'the classification the exam asks for'),

        ('prose', 'The hard cases turn on one distinction each. Physical things '
                  'a company sells are outputs rather than manufactured '
                  'capital. Knowledge inside people is human capital, while '
                  'knowledge written down and owned by the company is '
                  'intellectual capital.', 'R2'),

        ('task', 'Exercise 2B',
         'Classify each resource into the capital it belongs to.',
         'Sort each item into the column it belongs in.',
         ['Exercise 2A, and the paragraph above.'],
         ['Ask first whether the item is physical, and if it is, whether the '
          'company sells it or uses it.',
          'A patent is written down and owned; a technician’s experience is '
          'not. They are different capitals.',
          'Two of the items are relationships rather than things, and one of '
          'those is with a regulator.']),
        ('sortgrid',
         ['Resource', 'MANUFACTURED', 'INTELLECTUAL', 'HUMAN', 'SOCIAL'],
         ['The machining centre on the factory floor',
          'A patent on a component design',
          'A technician’s twenty years of experience',
          'The licence to operate granted by the regulator',
          'The quality management system the company wrote',
          'The trust of the main customer',
          'The warehouse and its racking',
          'The training the engineers have been given'],
         ['MANUFACTURED', 'INTELLECTUAL', 'HUMAN', 'SOCIAL',
          'INTELLECTUAL', 'SOCIAL', 'MANUFACTURED', 'HUMAN'],
         'The written-down system is intellectual and the training inside '
         'people is human. Same knowledge, two capitals, and the test is where '
         'it lives.'),
        ('fig', 'fork', 'Which capital does this resource belong to?',
         [('Is it physical, and used rather than sold?',
           'YES → manufactured capital', REP),
          ('Is it knowledge the company has written down or owns?',
           'YES → intellectual capital', CAP),
          ('Is it knowledge or motivation inside a person?',
           'YES → human capital, and never an asset', THINK)]),

        ('part', 'Part 3 · The value creation process',
         'four stages, in order'),

        ('task', 'Exercise 2C',
         'Describe the four stages of the value creation process.',
         'Complete both right-hand columns.',
         ['Exercise 2A.'],
         ['The first stage is the capitals going in, and Northwind draws on all '
          'six of them.',
          'The third stage is what comes out of the factory, and it includes '
          'what nobody wanted as well as what was sold.',
          'The fourth stage is the one students collapse into the third. It is '
          'the effect on each capital, not the thing produced.']),
        ('table', _PROCH, _proc(blank=True), THINK, _PROCW),
        ('answers', 8),
        ('fig', 'timeline', 'From the capitals to the outcomes',
         [('Inputs', 'Six capitals drawn on: funds, plant, designs, people, '
                     'relationships, materials', CAP),
          ('Activities', 'Designing, machining, assembling and selling, '
                         'governed by the business model', THINK),
          ('Outputs', 'Components sold, plus the scrap and emissions that '
                      'came with them', REP),
          ('Outcomes', 'The effect on each capital: %s of profit, a trained '
                       'workforce, metal consumed' % money(N.net_income),
           SLATE)],
         'The process is a circle rather than a line: the outcomes become the '
         'inputs of the following year, which is why depleting a capital shows '
         'up later.'),

        ('part', 'Part 4 · Output against outcome',
         'the distinction that is tested'),

        ('task', 'Exercise 2D',
         'Distinguish an output from an outcome and give one of each.',
         'Read and complete. Write one word in each space.',
         ['Exercise 2C, and the process figure above.'],
         ['Northwind’s factory produces components. Ask what else it produces '
          'that nobody ordered.',
          'The outcome is not the thing. It is what making the thing did to '
          'each of the six capitals.',
          'The last blank is the kind of outcome students leave out, and the '
          'framework requires it.']),
        ('fill', 'R2',
         ['An output is what comes out of the business activities: Northwind’s '
          'components, and also the scrap and emissions that came with them. A '
          'by-product is still an {output}.',
          'An outcome is different. It is the {effect} of those activities and '
          'outputs on the capitals, inside the company and outside it.',
          'So the component is an output; the %s of profit it helped produce is '
          'a financial outcome, the skills the engineers gained in designing it '
          'are a human outcome, and the metal consumed in making it is a '
          '{natural} outcome.' % money(N.net_income),
          'Note the direction of that last one. An outcome can be {negative}, '
          'and a framework that only let a company report the capitals it had '
          'increased would be worth nothing.'],
         {'output': ('Wanted or not, it came out.', ''),
          'effect': ('Not the thing, but what the thing did.',
                     'Students answer that the outcome is the product. The '
                     'product is the output; the outcome is what making it '
                     'did to each capital.'),
          'natural': ('Metal, water and energy.', ''),
          'negative': ('Value can be destroyed, and must be reported.', '')},
         ['outcome', 'profit', 'financial']),
        ('fig', 'matrix', 'One component, one output, four outcomes',
         ['The output', 'Financial outcome', 'Human outcome',
          'Natural outcome'],
         ['What it is', 'Measured?'],
         [['A component, sold to a customer', 'Yes, inside the %s of sales'
           % money(N.sales)],
          ['%s of profit for the year' % money(N.net_income),
           'Yes, in the income statement'],
          ['Engineers more skilled than last year', 'No'],
          ['Metal, water and energy consumed', 'No']],
         'One row is the output and three are outcomes. Two of the three are '
         'measured by nothing in Volume 1.'),

        ('part', 'Part 5 · Trading one capital for another',
         'where the framework earns its keep'),

        ('task', 'Exercise 2E',
         'Explain a trade-off between two capitals and say why it matters.',
         'Read and complete. Write one word in each space.',
         ['Exercise 2D.'],
         ['Suppose Northwind cuts its training budget and reports a higher '
          'profit this year.',
          'Ask which capital rose and which fell, and whether the statements '
          'would show both.',
          'The last blank is what the framework asks a company to disclose '
          'about such a decision.']),
        ('fill', 'R2',
         ['Suppose Northwind halves its training budget. Profit rises this '
          'year, so financial capital increases, and the skills of its '
          'engineers {decline}, so human capital is depleted.',
          'The income statement reports the first effect and is silent about '
          'the second. A reader seeing only the statements would record an '
          'improvement where the framework would record a {trade-off}.',
          'That is where the six capitals earn their keep. A company genuinely '
          'practising integrated thinking has to ask what a decision does to '
          'each capital rather than to {profit} alone.',
          'And because the outcomes of one year are the inputs of the next, a '
          'capital run down now reduces what is available {later}, which is '
          'exactly what a ten-year investor is trying to find out.'],
         {'decline': ('Less training, fewer skills.', ''),
          'trade-off': ('One capital up, another down.', ''),
          'profit': ('One of six, and the only measured one.',
                     'Students read the six capitals as a disclosure exercise. '
                     'Their purpose is to make the trade-offs visible before '
                     'the decision is taken.'),
          'later': ('This year’s outcomes are next year’s inputs.', '')},
         ['improve', 'balance', 'sooner']),
        ('fig', 'scale',
         'WHAT THE STATEMENTS SHOW',
         ['Training cost halved',
          'Operating expenses lower',
          'Profit higher than last year',
          'An improvement, on the face of it'],
         'WHAT THE SIX CAPITALS SHOW',
         ['Financial capital increased this year',
          'Human capital depleted',
          'Next year’s inputs reduced',
          'A trade-off, disclosed as one']),

        ('watch', 'A company need not use the six capitals as the structure of '
                  'its report, and it must consider all of them. The framework '
                  'asks which capitals matter to this business and what it does '
                  'to them, not for six headed sections.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Which of the following is not one of the six capitals in the '
                'integrated reporting framework?',
         ['Intellectual capital', 'Regulatory capital', 'Natural capital',
          'Social and relationship capital'],
         1, 'Level A',
         'The six are financial, manufactured, intellectual, human, social and '
         'relationship, and natural. Regulatory capital is a banking term, '
         'offered here because it sounds like it belongs.'),

        ('mcq', 'A company’s factory buildings and machinery are an example '
                'of:',
         ['Financial capital', 'Manufactured capital',
          'Intellectual capital', 'Natural capital'],
         1, 'Level A',
         'Physical objects used in production rather than sold. (D) is the '
         'distractor the raw materials inside the building invite: the metal is '
         'natural capital and the machine that shapes it is not.'),

        ('mcq', 'The experience and motivation of a company’s workforce is:',
         ['An intangible asset, amortised over its useful life',
          'Human capital, reported in an integrated report but not on the '
          'balance sheet',
          'Intellectual capital',
          'Not reported anywhere'],
         1, 'Level B',
         'A company does not control its employees, so there is no asset, and '
         'the framework reports the capital anyway. (C) is the near miss: '
         'knowledge written down is intellectual, knowledge inside a person is '
         'human.'),

        ('mcq', 'In the value creation process, scrap metal produced alongside '
                'a company’s products is:',
         ['An outcome', 'An output', 'An input', 'Not reported'],
         1, 'Level B',
         'Outputs include by-products, wanted or not. (A) is the confusion the '
         'whole distinction exists to prevent: the scrap is a thing produced, '
         'and the depletion of natural capital is the outcome.'),

        ('mcq', 'An outcome in the integrated reporting framework is:',
         ['The product a company sells',
          'The effect of the company’s activities and outputs on the capitals',
          'The revenue earned in the period',
          'A forecast of next year’s results'],
         1, 'Level B',
         'An effect on the capitals, internal or external, positive or '
         'negative. (A) is the output, and distinguishing the two is the single '
         'most tested point in A.1(n).'),

        ('mcq', 'A company reduces its training spend, raising this year’s '
                'profit. Under the framework this is:',
         ['An increase in value creation',
          'A trade-off, with financial capital increased and human capital '
          'depleted',
          'Outside the scope of an integrated report',
          'A reduction in manufactured capital'],
         1, 'Level C',
         'Two capitals moved in opposite directions and the report has to show '
         'both. (A) is what the income statement alone would suggest, and it is '
         'the reading the six capitals exist to correct.'),

        ('mcq', 'Must an integrated report be structured around the six '
                'capitals?',
         ['Yes, with a section for each',
          'No, but all six must be considered',
          'Yes, for listed companies only',
          'No, and only financial capital need be considered'],
         1, 'Level C',
         'Consideration is required and the structure is not. (A) is the '
         'compliance instinct, and a report with six headed sections and no '
         'connections between them would fail the connectivity principle of '
         'Handout 1.'),

        ('tip', 'For any item, ask two questions: is it going in, coming out, '
                'or an effect? And if it is going in, is it physical, written '
                'down, inside a person, a relationship, or from the '
                'environment? Those two questions place every item this topic '
                'can offer you.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2A · the six capitals'),
        ('table', _CAPH, _caps(), CAP, _CAPW),
        ('h3', 'Exercise 2C · the value creation process'),
        ('table', _PROCH, _proc(), THINK, _PROCW),
        ('prose', 'Three of the six appear in Volume 1 and three do not. '
                  'Financial capital is the %s of equity and %s of debt; '
                  'manufactured capital is the %s of property, plant and '
                  'equipment; intellectual capital is partly the %s of '
                  'intangibles and mostly not recognised at all.'
                  % (money(N.equity), money(N.ltd + N.ltd_current),
                     money(N.ppe_gross), money(N.intangibles)), 'R2'),
        ('prose', 'The outputs row and the outcomes row are the two most often '
                  'confused. The component is an output and so is the scrap; '
                  'the %s of profit, the skills gained and the metal consumed '
                  'are all outcomes, and only the first of those three is '
                  'measured anywhere in this course.'
                  % money(N.net_income), 'R2'),
    ],
)
