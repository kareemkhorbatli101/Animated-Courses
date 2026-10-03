# -*- coding: utf-8 -*-
"""The registry of handout sets.

One Set is one book: a run of handouts, an answer key serving all of them, and
a glossary. Everything that differs between Sets lives here, so book.py and
check.py stay the generic machinery and a new Set is a data entry plus its
content files.
"""


class SetSpec:
    def __init__(self, key, code, title, cover1, cover2, cso, handouts,
                 modpat, out, intro, arith=None, company='', terse=False,
                 itemonly=False):
        self.key = key              # 'd1', 'fa1', ... — the command-line name
        self.code = code            # 'Set D1' — printed on the cover and headers
        self.title = title          # 'Absorption and Variable Costing'
        self.cover1 = cover1        # the two big cover lines
        self.cover2 = cover2
        self.cso = cso              # the CSO reference this Set answers
        self.handouts = handouts    # [1, 2, 3, ...]
        self.modpat = modpat        # 'content.h%d'
        self.out = out              # output .docx filename
        self.intro = intro          # the sentence under the title page heading
        self.arith = arith          # callable(bad): recompute this Set's figures
        self.company = company      # the running scenario, named on the title page
        self.terse = terse          # the 2026 format: no printed objectives list
        # The item-only format: nothing on the page explains anything.
        # Every element is a question, including the scaffolding, and the
        # only thing that is not a question is the material the questions
        # interrogate. Implies terse.
        self.itemonly = itemonly
        if itemonly:
            self.terse = True

    @property
    def n(self):
        return len(self.handouts)

    @property
    def nword(self):
        return {1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six',
                7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten'}.get(self.n, str(self.n))

    def cover_args(self):
        return dict(setcode=self.code, line1=self.cover1, line2=self.cover2,
                    cso=self.cso, nhand=self.nword,
                    blurb=('%s handouts you complete by hand, and one answer key'
                           % self.nword,
                           'Every blank, table and diagram builds the summary '
                           'you revise from'))


OUT = '/home/user/Animated-Courses/'

SETS = {}


def _add(s):
    SETS[s.key] = s
    return s


def _d1_arith(bad):
    import check
    check.check_arithmetic(bad)


_add(SetSpec(
    key='d1', code='Set D1', title='Absorption and Variable Costing',
    cover1='Absorption Costing', cover2='and Variable Costing',
    cso='Section D.1 Measurement Concepts',
    handouts=[1, 2, 3, 4, 5, 6], modpat='content.h%d',
    out=OUT + 'CMA_P1_SetD1_Absorption_vs_Variable.docx',
    intro='Six handouts, one answer key. Section D.1 Measurement Concepts, with '
          'the Section C and Section A links the exam actually tests.',
    arith=_d1_arith, company='Grandview Instruments'))

# ---------------------------------------------------------------- Section A --
# The financial accounting volumes. One company, Northwind Components, carried
# through all of them, so a student meets the same balance sheet in Volume 1
# that they later write the inventory note for in Volume 4.

def _fa_arith(bad):
    import facheck
    facheck.check(bad)


_FA = [
    ('fa1', 'Volume 1', 'The Framework', 'and the Statements',
     'Section A.1 Financial Statements', list(range(1, 10)),
     'Nine handouts, one answer key. The four statements, how a transaction '
     'moves through all of them, and what each one cannot tell you.'),
    ('fa2', 'Volume 2', 'Revenue', 'Recognition',
     'Section A.2 Revenue Recognition', list(range(1, 5)),
     'Four handouts, one answer key. The five steps, worked on contracts the '
     'exam actually sets, and the matching principle underneath them.'),
    ('fa3', 'Volume 3', 'Receivables', 'and Credit Losses',
     'Section A.2 Asset Valuation — Receivables', list(range(1, 4)),
     'Three handouts, one answer key. When a receivable is recognised, what it '
     'is carried at, and what changes when it is sold.'),
    ('fa4', 'Volume 4', 'Inventory', 'and Cost Flow',
     'Section A.2 Asset Valuation — Inventory', list(range(1, 9)),
     'Eight handouts, one answer key. The densest block in Section A: what '
     'belongs in inventory, which cost flow assumption, and what each one does '
     'to income and to assets.'),
    ('fa5', 'Volume 5', 'Long-Lived Assets', 'and Impairment',
     'Section A.2 Asset Valuation — Long-Lived Assets', list(range(1, 7)),
     'Six handouts, one answer key. Depreciation methods and what each does to '
     'the statements, impairment, intangibles and goodwill, and disposal.'),
    ('fa6', 'Volume 6', 'Investments', 'in Debt and Equity',
     'Section A.2 Asset Valuation — Securities', list(range(1, 4)),
     'Three handouts, one answer key. Classification first, because every '
     'measurement question in this volume follows from it.'),
    ('fa7', 'Volume 7', 'Liabilities, Taxes', 'and Leases',
     'Section A.2 Liabilities, Income Taxes and Leases', list(range(1, 7)),
     'Six handouts, one answer key. Two liability questions, the whole of '
     'deferred tax, and the two kinds of lease.'),
    ('fa8', 'Volume 8', 'Equity', 'Transactions',
     'Section A.2 Equity Transactions', list(range(1, 4)),
     'Three handouts, one answer key. What moves paid-in capital, what moves '
     'retained earnings, and why a stock dividend is neither.'),
    ('fa9', 'Volume 9', 'Income', 'Measurement',
     'Section A.2 Income Measurement', list(range(1, 4)),
     'Three handouts, one answer key. Gains and losses, expense recognition, '
     'comprehensive income and discontinued operations.'),
    ('fa10', 'Volume 10', 'Consolidated', 'Statements',
     'Section A.1 Consolidated Financial Statements', list(range(1, 4)),
     'Three handouts, one answer key. When one company reports another as part '
     'of itself, and what has to disappear when it does.'),
    ('fa11', 'Volume 11', 'Integrated', 'Reporting',
     'Section A.1 Integrated Reporting', list(range(1, 4)),
     'Three handouts, one answer key. A report that explains how a company '
     'creates value, and the six capitals it creates it from.'),
    ('fa12', 'Volume 12', 'US GAAP', 'and IFRS',
     'Section A.2 GAAP and IFRS Differences', list(range(1, 6)),
     'Five handouts, one answer key. The six named differences, each worked '
     'against a volume you have already completed.'),
]

for _k, _code, _c1, _c2, _cso, _hs, _intro in _FA:
    _add(SetSpec(
        key=_k, code=_code, title=(_c1 + ' ' + _c2),
        cover1=_c1, cover2=_c2, cso=_cso, handouts=_hs,
        modpat='content.%s_h%%d' % _k,
        out='%sCMA_P1_SectionA_%s_%s.docx'
            % (OUT, _code.replace(' ', ''),
               _c1.replace(',', '').replace(' ', '_').replace('-', '_')),
        intro=_intro, arith=_fa_arith, company='Northwind Components'))



# --------------------------------------------------- the 2026 format sample --
# Volume 1 Handout 1, rebuilt. Separate key and separate file so the delivered
# books are untouched while the format is judged.
_add(SetSpec(
    key='v1n', code='Volume 1', title='The Framework and the Statements',
    cover1='The Framework', cover2='and the Statements',
    cso='Section A.1 \u00b7 2026 format sample', handouts=[1],
    modpat='content.n1_h%d',
    out=OUT + 'CMA_NewFormat_Volume1_Handout1.docx',
    intro='One handout, rebuilt. The case is given in English and in full '
          'Arabic, every calculation table carries a worked row, and the '
          'blanks ask for meanings rather than for figures.',
    arith=_fa_arith, company='Northwind Components', terse=True))

_add(SetSpec(
    key='v5n', code='Volume 5', title='Long-Lived Assets',
    cover1='Depreciation', cover2='and the Four Methods',
    cso='Section A.2 \u00b7 2026 format sample', handouts=[1],
    modpat='content.n5_h%d',
    out=OUT + 'CMA_NewFormat_Volume5_Handout1.docx',
    intro='One handout, rebuilt. Five schedules, sixty cells to complete, '
          'and not one figure printed in the prose that a table then asks '
          'for. The case gives three estimates; everything else is derived.',
    arith=_fa_arith, company='Northwind Components', terse=True))

# ------------------------------------------------- the item-only format ------
# Handout 1 again, with the exposition removed rather than shortened. Nothing
# on the page explains anything: the scaffolding is a question, the contrasts
# are questions, the material is evidence, and the objectives list is replaced
# by six items the student answers before and after.
_add(SetSpec(
    key='v1i', code='Volume 1', title='The Framework and the Statements',
    cover1='Ninety-Two Decisions', cover2='and Nothing to Read',
    cso='Section A.1 \u00b7 item-only format', handouts=[1],
    modpat='content.i1_h%d',
    out=OUT + 'CMA_ItemOnly_Volume1_Handout1.docx',
    intro='One handout, built entirely out of questions. Every element is a '
          'multiple choice, a blank or a match, including the scaffolding, '
          'and the only element that is not a question is the material the '
          'questions are asked about.',
    arith=_fa_arith, company='Northwind Components', itemonly=True))

# ------------------------------------------------- the intermediate bridge --
# Volumes 13 to 17 finish intermediate accounting. They are not Section A, so
# they carry their own filename prefix and each cover names its real home: a
# Part 2 section where the CMA has one, and an honest note where it does not.
_BRIDGE = [
    ('fa13', 'Volume 13', 'The Time Value', 'of Money',
     'Assumed by Part 2 E.2 and B.2 · taught nowhere',
     list(range(1, 4)),
     'Three handouts, one answer key. Read this before Volume 7: that volume '
     'builds a lease schedule from a present value this one teaches you to '
     'compute.'),
    ('fa14', 'Volume 14', 'Long-Term Debt', 'and Contingent Liabilities',
     'Part 2 Section B.2 Long-term financial management', list(range(1, 7)),
     'Six handouts, one answer key. The CMA wants a bond valued; intermediate '
     'accounting wants it accounted for. This volume does both, and says which '
     'is which.'),
    ('fa15', 'Volume 15', 'Earnings', 'Per Share',
     'Part 2 Section A.2 Financial ratios · market', list(range(1, 4)),
     'Three handouts, one answer key. One line of the Learning Outcome '
     'Statements, and a whole chapter of intermediate accounting behind it.'),
    ('fa16', 'Volume 16', 'Pensions and Other', 'Post-Employment Benefits',
     'Outside the CMA · intermediate accounting only', list(range(1, 4)),
     'Three handouts, one answer key. No CMA section asks for this. It is here '
     'because a course in intermediate accounting without it is not one.'),
    ('fa17', 'Volume 17', 'Changes, Errors', 'and Special Issues',
     'Part 2 Section A.4 Special issues', list(range(1, 5)),
     'Four handouts, one answer key. What to do when the numbers you already '
     'published turn out to be the wrong numbers.'),
]

for _k, _code, _c1, _c2, _cso, _hs, _intro in _BRIDGE:
    _add(SetSpec(
        key=_k, code=_code, title=(_c1 + ' ' + _c2),
        cover1=_c1, cover2=_c2, cso=_cso, handouts=_hs,
        modpat='content.%s_h%%d' % _k,
        out='%sCMA_Bridge_%s_%s.docx'
            % (OUT, _code.replace(' ', ''),
               _c1.replace(',', '').replace(' ', '_').replace('-', '_')),
        intro=_intro, arith=_fa_arith, company='Northwind Components'))
