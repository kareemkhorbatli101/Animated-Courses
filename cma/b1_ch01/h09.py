# -*- coding: utf-8 -*-
"""Handout 1.9 — Who writes the rules  (from section 1.5)

The four bodies and their four jobs, the Codification and the Update, the two
MENA countries the chapter names, and the six U.S. GAAP / IFRS name pairs.
"""

_BH = ['Body', 'What it is', 'What it writes or does']
_B = [
    (['FASB', 'a private, independent organization',
      'writes U.S. GAAP and keeps it in the Accounting Standards '
      'Codification'], 'w'),
    (['SEC', None, None], 'd'),
    (['PCAOB', None, None], 'd'),
    (['IASB', None, None], 'd'),
]
_BA = ['a U.S. government agency',
       'has legal authority over the financial reporting of public '
       'companies, and recognizes the FASB as the standard setter',
       'the body that oversees the audits of public companies',
       'sets auditing standards, not accounting standards',
       'the board under the IFRS Foundation',
       'issues IFRS']

_CH = ['Term', 'What it is', 'An example the chapter gives']
_C = [
    (['ASC', 'the single source of authoritative nongovernmental U.S. GAAP',
      'ASC 606 covers revenue'], 'w'),
    (['Topic numbers', None, None], 'd'),
    (['ASU', None, '—'], 'd'),
]
_CA = ['how the Codification is organized', 'ASC 842 covers leases',
       'what the FASB issues when it changes a rule, and it amends the '
       'Codification']


HANDOUT = dict(
    n=9, book='CMA Part 1 · Section A · Chapter 1', source='1.5',
    title='Who writes the rules',
    covers=['1.5-a', '1.5-b', '1.5-c', '1.5-d', '1.5-e', '1.5-f', '1.5-g',
            '1.5-h'],
    pages=[

        # ---- page 1 -----------------------------------------------------
        dict(redo='read section 1.5 again before page 2', exercises=[

            dict(t='T5',
                 d='Complete the table of four bodies and four jobs. The '
                   'first row is done.',
                 data=('The four bodies, as section 1.5 names them',
                       ['FASB: writes U.S. GAAP (the ASC).',
                        'SEC: U.S. government agency with legal authority '
                        'over public company reporting.',
                        'PCAOB: sets auditing standards for audits of public '
                        'companies.',
                        'IASB: writes IFRS.']),
                 heads=_BH, rows=_B, ans=_BA, w=[14, 34, 52]),

            dict(t='T5',
                 d='Complete the table. A dash means the chapter gives no '
                   'example. The first row is done.',
                 heads=_CH, rows=_C, ans=_CA, w=[18, 46, 36]),
        ]),

        # ---- page 2 -----------------------------------------------------
        dict(redo='redo page 2 before page 3', exercises=[

            dict(t='T3', d='Write one word in each numbered space.',
                 paras=[
                     'In the United States the rules are called U.S. GAAP, '
                     'which stands for {generally} accepted accounting '
                     'principles. The FASB writes them and keeps them all in '
                     'one place: the Accounting Standards {Codification}, '
                     'which is the single source of {authoritative} '
                     'nongovernmental U.S. GAAP. It is organized by {topic} '
                     'numbers. When the FASB changes a rule it issues an '
                     'Accounting Standards {Update}, which {amends} the '
                     'Codification.',

                     'The SEC is a U.S. government agency. It has legal '
                     '{authority} over the financial reporting of public '
                     'companies, and it {recognizes} the FASB as the '
                     'standard setter. The PCAOB is a different body again: '
                     'it sets {auditing} standards, not accounting '
                     'standards.',

                     'Outside the United States many countries use IFRS, '
                     'which the IASB issues under the IFRS {Foundation}. '
                     'Both systems rest on a conceptual {framework}: the '
                     'basic ideas behind the standards.',
                 ],
                 whys={'generally': 'The first word the abbreviation stands '
                                    'for.',
                       'Codification': 'Where the FASB keeps U.S. GAAP.',
                       'authoritative': 'The single source of it.',
                       'topic': 'How the Codification is organized.',
                       'Update': 'What the FASB issues to change a rule.',
                       'amends': 'What an Update does to the Codification.',
                       'authority': 'What the SEC has over public company '
                                    'reporting.',
                       'recognizes': 'What the SEC does about the FASB.',
                       'auditing': 'The standards the PCAOB sets.',
                       'Foundation': 'What the IASB sits under.',
                       'framework': 'What both systems rest on.'},
                 extras=['government', 'auditors', 'statutory', 'Board']),

            dict(t='T6', d='Write F for the FASB, S for the SEC, P for the '
                 'PCAOB, I for the IASB.',
                 items=['writes U.S. GAAP',
                        'keeps the Accounting Standards Codification',
                        'is a U.S. government agency',
                        'sets auditing standards',
                        'issues IFRS',
                        'recognizes the FASB as the standard setter',
                        'issues an Accounting Standards Update',
                        'oversees the audits of public companies'],
                 ans=['F', 'F', 'S', 'P', 'I', 'S', 'F', 'P']),
        ]),

        # ---- page 3 -----------------------------------------------------
        dict(redo='redo page 3 before page 4', exercises=[

            dict(t='T1', d='Ring one letter for each question.', items=[
                ('Which organization writes U.S. GAAP?',
                 ['The FASB', 'The SEC', 'The PCAOB', 'The IASB'], 0,
                 'The FASB writes U.S. GAAP and keeps it in the Accounting '
                 'Standards Codification.'),
                ('The IFRS term share premium has the same meaning as the '
                 'U.S. GAAP term:',
                 ['retained earnings', 'common stock', 'net income',
                  'additional paid-in capital'], 3,
                 'Both mean the amount received for shares above their par '
                 'value.'),
                ('Which statement is TRUE?',
                 ['The PCAOB writes U.S. GAAP for public companies.',
                  'The IASB writes U.S. GAAP for companies that also report '
                  'under IFRS.',
                  'The ASC contains IFRS for U.S. companies.',
                  'The SEC has legal authority over public company reporting '
                  'and recognizes the FASB as the standard setter.'], 3,
                 'The SEC has the legal authority, the FASB sets the '
                 'standards, and the ASC holds U.S. GAAP.'),
                ('A Jordanian company’s IFRS statements show share '
                 'premium of 400. Under U.S. GAAP, the same item is called:',
                 ['retained earnings', 'common stock',
                  'additional paid-in capital', 'treasury stock'], 2,
                 'Share premium and additional paid-in capital both mean the '
                 'amount received above par value.'),
                ('The Accounting Standards Codification is:',
                 ['a list of auditing standards',
                  'the single source of authoritative nongovernmental U.S. '
                  'GAAP',
                  'the IFRS equivalent of U.S. GAAP',
                  'a set of SEC filing forms'], 1,
                 'It holds all U.S. GAAP in one place, organized by topic '
                 'numbers.'),
                ('ASC 842 covers:',
                 ['revenue', 'leases', 'income taxes',
                  'business combinations'], 1,
                 'The chapter gives ASC 606 for revenue and ASC 842 for '
                 'leases.'),
                ('Which rules does the CMA exam test?',
                 ['IFRS only', 'U.S. GAAP only',
                  'U.S. GAAP, and the main differences from IFRS',
                  'whichever the candidate learned first'], 2,
                 'The exam tests U.S. GAAP, and Section A also asks about '
                 'the main differences.'),
                ('Which countries are named as requiring IFRS for listed '
                 'companies?',
                 ['the United States and Canada',
                  'Jordan and the United Arab Emirates',
                  'the United Kingdom and Ireland',
                  'Lebanon and Syria'], 1,
                 'The chapter names Jordan and the UAE as examples in the '
                 'Middle East and North Africa.'),
            ]),

            dict(t='T2', d='Ring T or F for each statement.', items=[
                ('The FASB is a private, independent organization.', True,
                 ''),
                ('The PCAOB sets accounting standards.', False,
                 'It sets auditing standards, not accounting standards.'),
                ('For companies that report to the SEC, SEC rules are also '
                 'part of authoritative GAAP.', True, ''),
                ('The IASB issues IFRS under the IFRS Foundation.', True, ''),
                ('An Accounting Standards Update replaces the Codification.',
                 False, 'It amends the Codification.'),
                ('Most concepts are the same under U.S. GAAP and IFRS.',
                 True, ''),
            ]),
        ]),

        # ---- page 4 -----------------------------------------------------
        dict(redo='redo page 4 before you leave the handout', exercises=[

            dict(t='T4', d='Write the letter of the IFRS name beside each '
                 'U.S. GAAP name.',
                 heads=('U.S. GAAP (used on the exam)', 'IFRS'),
                 left=['balance sheet', 'income statement', 'common stock',
                       'additional paid-in capital', 'accounts receivable',
                       'net income'],
                 right=['profit', 'share capital (ordinary shares)',
                        'share premium',
                        'statement of financial position',
                        'statement of profit or loss', 'trade receivables'],
                 ans=['D', 'E', 'B', 'C', 'F', 'A']),

            dict(t='T7', d='One item in each group does not belong with the '
                 'other three. Ring its letter.',
                 groups=[(['FASB', 'SEC', 'PCAOB', 'IASB'], 3),
                         (['U.S. GAAP', 'the ASC', 'an ASU', 'IFRS'], 3),
                         (['balance sheet', 'income statement',
                           'share premium', 'statement of cash flows'], 2)]),

            dict(t='T4', d='Write the letter of the Arabic term beside each '
                 'English one.',
                 heads=('English (exam term)',
                        'العربية'),
                 left=['U.S. GAAP', 'IFRS', 'FASB',
                       'Accounting Standards Codification (ASC)', 'IASB',
                       'SEC', 'conceptual framework'],
                 right=['الإطار المفاهيمي',
                        'المبادئ المحاسبية المقبولة عموماً في الولايات المتحدة',
                        'مجلس معايير المحاسبة المالية',
                        'المعايير الدولية لإعداد التقارير المالية',
                        'تقنين معايير المحاسبة',
                        'هيئة الأوراق المالية والبورصات الأمريكية',
                        'مجلس معايير المحاسبة الدولية'],
                 ans=['B', 'D', 'C', 'E', 'G', 'F', 'A']),
        ]),
    ],
)
