# -*- coding: utf-8 -*-
"""Handout 1.8 — Who writes the rules, and which body does something else."""

BODIES = [
    ['Body', 'What it is', 'What it does'],
    ['FASB', 'private and independent',
     'writes U.S. GAAP and keeps it in the Accounting Standards Codification'],
    ['SEC', 'a U.S. government agency',
     'has legal authority over the financial reporting of public companies, '
     'and recognizes the FASB as the standard setter'],
    ['PCAOB', 'an oversight board',
     'oversees the audits of public companies and sets auditing standards '
     '— not accounting standards'],
    ['IASB', 'the board of the IFRS Foundation', 'issues IFRS'],
]

HANDOUT = dict(
    id='1.8',
    n=8,
    pages=5,
    title='Who writes the rules',
    sub='FASB, SEC, PCAOB, IASB · the Codification and how it is amended',
    covers=['sec:1.5', 'fig:F01-08', 'box:IFRS CONTRAST:1.5',
            'box:EXAM TRAP:four bodies four jobs', 'box:TERM BRIDGE:1.5',
            'sc:SC5-1', 'sc:SC5-2', 'p:P15', 'term:U.S. GAAP', 'term:IFRS',
            'term:FASB', 'term:Accounting Standards Codification (ASC)',
            'term:IASB', 'term:SEC', 'term:conceptual framework'],
    skills=[('bodies', 3), ('codification', 3)],
    flow=[
        ('speed', [
            'Which basis does U.S. GAAP require?',
            'Matching matches expenses to',
            'Depreciation uses which way of matching?',
            'Cash paid in advance creates an',
            'Equity is the ______ interest in the assets',
            'A dividend reduces which equity account?',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Four bodies, four different jobs'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='One of these four bodies does not write accounting rules '
                   'at all: FASB, SEC, PCAOB, IASB. Guess which, and say in '
                   'three words what it does instead.',
                 a='PCAOB — it sets auditing standards',
                 why='The PCAOB oversees the audits of public companies. It '
                     'sets auditing standards, not accounting standards.'),
        ]),
        ('move', 'MODEL',
         'Two systems, side by side, and one body set apart at the foot.'),
        ('fig', 'rulemakers'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which body writes U.S. GAAP, and where does it keep it?',
                 a='The FASB, in the Accounting Standards Codification (ASC)',
                 why='The ASC is the single source of authoritative '
                     'nongovernmental U.S. GAAP.'),
            dict(t='SHORT',
                 q='The figure puts the SEC above the FASB. What does the '
                   'word beside that arrow say the SEC does?',
                 a='Recognizes — it recognizes the FASB as the standard '
                   'setter', why=''),
            dict(t='SHORT',
                 q='What is an ASU, and what does it change?',
                 a='An Accounting Standards Update; it amends the '
                   'Codification', why=''),
            dict(t='SHORT',
                 q='Which body issues IFRS, and which organization oversees '
                   'it?',
                 a='The IASB, under the IFRS Foundation', why=''),
            dict(t='SHORT', lines=2,
                 q='Copy the sentence in the red band at the foot of the '
                   'figure.',
                 a='The PCAOB oversees the audits of public companies and '
                   'sets auditing standards. It does not write accounting '
                   'standards.',
                 why=''),
        ]),
        ('move', 'MODEL', 'The same four bodies, in a sentence each.'),
        ('panel', 'Four bodies, four jobs', BODIES, ''),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the difference between having the legal authority over '
         'reporting and writing the standards.',
         [['The ', 10, ' has legal authority over the reporting of ', 20,
           ' companies.'],
          ['The ', 10, ' writes the standards, because the first body ', 16,
           ' it as the standard setter.']],
         ['SEC', 'FASB', 'public', 'recognizes'],
         'The SEC is a U.S. government agency. It has legal authority over '
         'the financial reporting of public companies, and it recognizes the '
         'FASB as the standard setter.'),
        ('contrast',
         'Two bodies whose names both contain "board"',
         [('FASB',
           ['Private or governmental?', 'Writes which kind of standards?',
            'Where does its output live?']),
          ('PCAOB',
           ['Private or governmental?', 'Writes which kind of standards?',
            'Where does its output live?'])],
         'Fill in all three rows for both. Then write the one word that '
         'separates what the two of them produce.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Which organization writes U.S. GAAP?',
                 o=['The FASB', 'The SEC', 'The PCAOB', 'The IASB'],
                 a='A',
                 why='The FASB writes U.S. GAAP and keeps it in the '
                     'Codification. The SEC has legal authority but '
                     'recognizes the FASB; the PCAOB sets auditing standards; '
                     'the IASB writes IFRS.'),
            dict(t='MCQ',
                 q='Which statement is TRUE?',
                 o=['The PCAOB writes U.S. GAAP for public companies.',
                    'The IASB writes U.S. GAAP for companies that also report '
                    'under IFRS.',
                    'The ASC contains IFRS for U.S. companies.',
                    'The SEC has legal authority over public company '
                    'reporting and recognizes the FASB as the standard '
                    'setter.'],
                 a='D',
                 why='The PCAOB sets auditing standards, the IASB writes '
                     'IFRS, and the ASC holds U.S. GAAP rather than IFRS.'),
            dict(t='SORT',
                 q='Write each job under the body that does it.',
                 regions=['FASB', 'SEC', 'PCAOB', 'IASB'],
                 items=['writes U.S. GAAP', 'issues IFRS',
                        'sets auditing standards',
                        'legal authority over public company reporting',
                        'maintains the Codification',
                        'issues Accounting Standards Updates'],
                 a=['FASB: writes U.S. GAAP, maintains the Codification, '
                    'issues ASUs',
                    'SEC: legal authority over public company reporting',
                    'PCAOB: sets auditing standards', 'IASB: issues IFRS'],
                 whys=['', '', '', '']),
        ]),
        ('check',
         'Name the body that writes U.S. GAAP, the body with legal authority '
         'over public company reporting, and the body that sets auditing '
         'standards.',
         'FASB writes U.S. GAAP; the SEC has legal authority; the PCAOB sets '
         'auditing standards.',
         'redo the READ THE MODEL questions of cycle A with the figure in '
         'front of you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'The Codification, and what the exam actually tests'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='If every U.S. accounting rule is kept in one place, '
                   'organized by topic number, what does that one place make '
                   'easy that a pile of separate standards would not?',
                 a='Finding every rule on one topic in one place',
                 why='The ASC keeps all U.S. GAAP in one place, organized by '
                     'topic numbers.'),
        ]),
        ('move', 'MODEL', 'How a U.S. rule is stored, and how it changes.'),
        ('trace', 'From a decision to a rule a company must follow',
         [('The FASB decides a rule should change',
           'the FASB is the standard setter the SEC recognizes'),
          ('The FASB issues an Accounting Standards Update (ASU)',
           'an ASU is the instrument that amends the Codification'),
          ('The Codification is amended',
           'the ASC is the single source of authoritative nongovernmental '
           'U.S. GAAP'),
          ('A company looks the rule up by topic number',
           'ASC 606 covers revenue; ASC 842 covers leases'),
          ('For a company that reports to the SEC, SEC rules also apply',
           'for SEC registrants, SEC rules are also part of authoritative '
           'GAAP')]),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which topic number covers revenue, and which covers '
                   'leases?',
                 a='ASC 606 covers revenue; ASC 842 covers leases', why=''),
            dict(t='SHORT',
                 q='What does the trace call the ASC, in five words?',
                 a='The single source of authoritative nongovernmental U.S. '
                   'GAAP', why=''),
            dict(t='TF',
                 q='An ASU is a separate rulebook that sits beside the '
                   'Codification.',
                 a='F',
                 why='An ASU amends the Codification. It does not sit beside '
                     'it.'),
        ]),
        ('pair', 'Answer the next item alone, then compare.',
         'find the row in the trace that names the instrument. The row '
         'settles it.'),
        ('move', 'MODEL',
         'What the exam does with all this.'),
        ('panel', 'What the CMA exam tests',
         [['The exam tests', 'U.S. GAAP'],
          ['The exam also asks about',
           'the main differences between U.S. GAAP and IFRS'],
          ['Many countries require IFRS for listed companies',
           'among them Jordan and the United Arab Emirates'],
          ['Both systems rest on',
           'a conceptual framework: the users, the elements and the qualities '
           'of useful information']],
         ''),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='The IFRS term share premium has the same meaning as the '
                   'U.S. GAAP term:',
                 o=['retained earnings', 'common stock', 'net income',
                    'additional paid-in capital'],
                 a='D',
                 why='Share premium is the amount received for shares above '
                     'their par value. Retained earnings come from past '
                     'profits, and common stock holds only the par value.'),
            dict(t='FILL',
                 parts=['The FASB keeps all U.S. GAAP in the ', 26,
                        ', and amends it by issuing an ', 22, '.'],
                 a=['Accounting Standards Codification', 'Accounting '
                    'Standards Update'],
                 whys=['', '']),
        ]),
        ('check',
         'Which rules does the CMA exam test, and what else does it ask '
         'about?',
         'It tests U.S. GAAP, and asks about the main differences between '
         'U.S. GAAP and IFRS.',
         'reread the panel at the end of cycle B.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'rulemakers',
         'Rebuild the rule-maker figure. Draw both columns in order, and put '
         'the fourth body where it belongs, with the reason it is set apart.',
         'U.S. GAAP: SEC, which recognizes the FASB, which writes U.S. GAAP '
         'and maintains the ASC, amended by ASUs. IFRS: the IFRS Foundation, '
         'then the IASB, which issues IFRS. Set apart: the PCAOB, which sets '
         'auditing standards, not accounting standards.'),
        ('teach', 'a student who has only ever studied IFRS',
         'In three or four sentences, explain which body writes the rules the '
         'CMA exam tests, where those rules are kept, and what this means for '
         'someone trained on IFRS.',
         ['FASB', 'Codification', 'IASB', 'conceptual framework'],
         'The FASB writes U.S. GAAP and keeps all of it in the Accounting '
         'Standards Codification, which the exam tests; the IASB writes IFRS, '
         'which many countries require instead. Someone trained on IFRS '
         'already knows most of the ideas, because both systems rest on a '
         'conceptual framework with the same users, elements and qualities. '
         'What has to be learned is the different names, and the handful of '
         'rules that genuinely differ.'),
    ],
)
