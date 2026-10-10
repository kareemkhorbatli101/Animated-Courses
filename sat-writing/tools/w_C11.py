# -*- coding: utf-8 -*-
"""Chapter 11 - colons, semicolons and lists. Home domain PHY.

Key plans: HIS DBCADCBACA, BIO ACDBADCBDB, PHY BDACBADCAC, HUM CABDCBADBD,
SOC DBCADCBACA.

The colon_after_fragment predicate can only fire where the words before the
blank do NOT make a clause, so it is used in the no_mark_needed items, whose
whole point is that a verb is followed straight by its object with no mark at
all. The colon_after_independent items, where the left side IS a clause, are
carried by wrong_mark and overpunctuated.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 11

AR = dict(
    qaida="النقطتان والفاصلة المنقوطة والقوائم: النقطتان لا تأتيان إلّا بعد جملة تامّة، وما "
          "بعدهما بيان لها أو قائمة. والفاصلة المنقوطة تفصل عناصر القائمة إذا كان في "
          "العناصر نفسها فواصل. والقائمة البسيطة تفصل بالفواصل. وما بين الفعل ومفعوله لا "
          "تدخله علامة أصلاً.",
    kayf="يعرض الاختبار قائمة ويحذف علامتها الأولى أو علاماتها الداخلية. والسؤال الأوّل: هل "
         "ما قبل العلامة جملة تامّة؟ فإن لم يكن فلا نقطتين. والسؤال الثاني: هل في العناصر "
         "فواصل؟ فإن كان فالفاصلة المنقوطة.",
    fakh="الفخّ أن النقطتين تبدوان علامة التقديم في كلّ حال، فتُوضعان بعد فعل ناقص مثل كانت "
         "أو تشمل. والعلاج أن تحذف القائمة وتقرأ ما قبلها وحده: فإن لم يستقم كلاماً تامّاً "
         "فلا نقطتين.",
    sila="هذا الباب يتكرّر في اختبار سات في صورة واحدة غالباً: نقطتان بعد كلام ناقص. وهو "
         "امتداد لفصل حدود الجملة، لأن السؤال في البابين واحد: هل هذا كلام تامّ؟",
)

HIS = dict(domain='HIS', note_ar=(
    "جمل التاريخ والنظام المدني تعدّ المواد والشروط والأسماء عدّاً، ومع الأسماء تأتي "
    "الولايات والمناصب فتكثر الفواصل داخل العناصر، وهنا تلزم الفاصلة المنقوطة لا الفاصلة "
    "وحدها. ولذلك تجد في هذا الفصل قوائم أسماء اللجان والقوانين على وجه الخصوص، وهي "
    "موضع الخطأ الأوّل عند الطلّاب."), xs=[
    dict(strand='HIS-S01', pos=1,
         carrier="The Declaration ends with a pledge of three things ___.",
         rule='comma_series',
         rule_span='lives, fortunes and sacred honor',
         opts=['lives, fortunes, and sacred honor,', 'lives; fortunes and sacred honor',
               'lives fortunes and sacred honor', 'lives, fortunes and sacred honor'],
         key='D',
         faults={'A': ('overpunctuated', 'lives, fortunes, and sacred honor,'),
                 'B': ('wrong_mark', 'lives; fortunes and sacred honor'),
                 'C': ('missing_series_mark', 'lives fortunes and sacred honor')},
         ctx=dict(mark_ok=['comma'], marks_expected=1),
         why="Plain list items are separated by commas, and three short items need one "
             "comma between the first two.",
         trap="A adds a comma the list does not need and then another after the last item, "
              "which closes nothing."),
    dict(strand='HIS-S02', pos=2,
         carrier="Article One divides the legislative power in a single sentence ___.",
         rule='colon_after_independent',
         rule_span=': one chamber elected by the people and one by the states',
         opts=[', one chamber elected by the people and one by the states',
               ': one chamber elected by the people and one by the states',
               '; one chamber elected by the people and one by the states',
               ': one chamber, elected by the people, and one by the states,'],
         key='B',
         faults={'A': ('wrong_mark',
                       ', one chamber elected by the people and one by the states'),
                 'C': ('wrong_mark',
                       '; one chamber elected by the people and one by the states'),
                 'D': ('overpunctuated',
                       ': one chamber, elected by the people, and one by the states,')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="A colon follows a complete clause and announces what explains it, which is "
             "what the second half does here.",
         trap="A uses a comma, which cannot introduce an explanation of the clause before "
              "it."),
    dict(strand='HIS-S03', pos=3,
         carrier="The Naturalization Act of 1790 imposed three conditions on anyone who "
                 "wished to be naturalized ___.",
         rule='comma_series',
         rule_span='two years of residence, an oath of allegiance and good character',
         opts=['two years of residence an oath of allegiance and good character',
               'two years of residence; an oath of allegiance and good character',
               'two years of residence, an oath of allegiance and good character',
               'two years of residence, an oath of allegiance, and good character,'],
         key='C',
         faults={'A': ('missing_series_mark',
                       'two years of residence an oath of allegiance'),
                 'B': ('wrong_mark',
                       'two years of residence; an oath of allegiance'),
                 'D': ('overpunctuated',
                       'two years of residence, an oath of allegiance, and good '
                       'character,')},
         ctx=dict(mark_ok=['comma'], marks_expected=1),
         why="Plain list items take commas between them, and none of these items contains a "
             "comma of its own.",
         trap="B uses semicolons, which are only needed when the items themselves hold "
              "commas."),
    dict(strand='HIS-S04', pos=4,
         carrier="In the years before the war the three documents Garrison reprinted "
                 "most often in the Liberator were ___.",
         rule='no_mark_needed',
         rule_span='the slave codes, the advertisements and the Declaration',
         opts=['the slave codes, the advertisements and the Declaration',
               ': the slave codes, the advertisements and the Declaration',
               ', the slave codes, the advertisements and the Declaration',
               '; the slave codes, the advertisements and the Declaration'], key='A',
         faults={'B': ('colon_after_fragment',
                       ': the slave codes, the advertisements and the Declaration'),
                 'C': ('overpunctuated',
                       ', the slave codes, the advertisements and the Declaration'),
                 'D': ('wrong_mark',
                       '; the slave codes, the advertisements and the Declaration')},
         ctx=dict(before_independent=False, mark_ok=[], marks_expected=1),
         why="No mark belongs between a verb and the list that completes it, and were is "
             "left incomplete until the list arrives.",
         trap="B puts a colon after were, which is not a complete clause and so cannot take "
              "one."),
    dict(strand='HIS-S05', pos=5,
         carrier="The bargain that ended Reconstruction had a shape everyone understood at "
                 "the time ___.",
         rule='colon_after_independent',
         rule_span=': the presidency for one party and the South for the other',
         opts=[', the presidency for one party and the South for the other',
               '; the presidency for one party and the South for the other',
               ': the presidency, for one party, and the South, for the other,',
               ': the presidency for one party and the South for the other'],
         key='D',
         faults={'A': ('wrong_mark',
                       ', the presidency for one party and the South for the other'),
                 'B': ('wrong_mark',
                       '; the presidency for one party and the South for the other'),
                 'C': ('overpunctuated',
                       ': the presidency, for one party, and the South, for the other,')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="A colon follows a complete clause, and what comes after it spells out the "
             "shape the clause has named.",
         trap="B uses a semicolon, which joins two clauses and cannot announce an "
              "explanation."),
    dict(strand='HIS-S06', pos=6,
         carrier="The commission that investigated the packinghouses was made up of three "
                 "men: ___.",
         rule='semicolon_between_items',
         rule_span='Neill, a labor commissioner; Reynolds, a social worker; and a '
                   'physician from Chicago',
         opts=['Neill, a labor commissioner, Reynolds, a social worker, and a physician '
               'from Chicago',
               'Neill: a labor commissioner: Reynolds: a social worker: and a physician '
               'from Chicago',
               'Neill, a labor commissioner; Reynolds, a social worker; and a physician '
               'from Chicago',
               'Neill, a labor commissioner; Reynolds, a social worker; and a physician '
               'from Chicago;'], key='C',
         faults={'A': ('missing_series_mark', 'commissioner, Reynolds'),
                 'B': ('wrong_mark', 'Neill: a labor commissioner:'),
                 'D': ('overpunctuated', 'from Chicago;')},
         ctx=dict(mark_ok=['semi', 'comma'], marks_expected=4),
         why="Semicolons separate list items that themselves contain commas, which is what "
             "each of these three items does.",
         trap="A uses commas throughout, so a reader cannot tell how many people are named "
              "or where one ends."),
    dict(strand='HIS-S07', pos=7,
         carrier="The boycott in Montgomery held together for three hundred and eighty-one "
                 "days on three things ___.",
         rule='comma_series',
         rule_span='a car pool, a network of churches and a willingness to walk',
         opts=['a car pool a network of churches and a willingness to walk',
               'a car pool, a network of churches and a willingness to walk',
               'a car pool; a network of churches and a willingness to walk',
               'a car pool, a network of churches, and a willingness to walk,'],
         key='B',
         faults={'A': ('missing_series_mark', 'a car pool a network'),
                 'C': ('wrong_mark', 'a car pool; a network'),
                 'D': ('overpunctuated', 'and a willingness to walk,')},
         ctx=dict(mark_ok=['comma'], marks_expected=1),
         why="Plain list items are separated by commas, and none of these three holds a "
             "comma inside it.",
         trap="A leaves the first two items run together, which makes three things read as "
              "two."),
    dict(strand='HIS-S08', pos=8,
         carrier="The territories taken from the Ottoman and German empires after the "
                 "First World War were not annexed outright but were divided by the "
                 "League of Nations into ___.",
         rule='no_mark_needed', rule_span='three classes of descending sovereignty',
         opts=['three classes of descending sovereignty',
               ': three classes of descending sovereignty',
               ', three classes of descending sovereignty',
               '; three classes of descending sovereignty'], key='A',
         faults={'B': ('colon_after_fragment',
                       ': three classes of descending sovereignty'),
                 'C': ('overpunctuated', ', three classes of descending sovereignty'),
                 'D': ('wrong_mark', '; three classes of descending sovereignty')},
         ctx=dict(before_independent=False, mark_ok=[], marks_expected=0),
         why="No mark belongs between a preposition and its object, and divided into is not "
             "a complete clause.",
         trap="B puts a colon after into, which looks like an announcement and follows no "
              "clause at all."),
    dict(strand='HIS-S09', pos=9,
         carrier="Three statutes were used against editors during the First World War: "
                 "___.",
         rule='semicolon_between_items',
         rule_span='the Espionage Act, passed in 1917; the Sedition Act, passed the '
                   'following year; and the Trading with the Enemy Act, which reached the '
                   'foreign-language press',
         opts=['the Espionage Act, passed in 1917, the Sedition Act, passed the following '
               'year, and the Trading with the Enemy Act, which reached the '
               'foreign-language press',
               'the Espionage Act: passed in 1917: the Sedition Act: passed the following '
               'year: and the Trading with the Enemy Act, which reached the '
               'foreign-language press',
               'the Espionage Act, passed in 1917; the Sedition Act, passed the following '
               'year; and the Trading with the Enemy Act, which reached the '
               'foreign-language press',
               'the Espionage Act, passed in 1917; the Sedition Act, passed the following '
               'year; and the Trading with the Enemy Act, which reached the '
               'foreign-language press;'], key='C',
         faults={'A': ('missing_series_mark', 'in 1917, the Sedition Act'),
                 'B': ('wrong_mark', 'the Espionage Act: passed in 1917:'),
                 'D': ('overpunctuated', 'foreign-language press;')},
         ctx=dict(mark_ok=['semi', 'comma'], marks_expected=5),
         why="Semicolons separate list items that already contain commas, and each of these "
             "three statutes carries a date or a clause of its own.",
         trap="A uses commas for both jobs at once, so the reader cannot tell whether three "
              "statutes are named or six."),
    dict(strand='HIS-S10', pos=10,
         carrier="The penny papers recovered their costs in a way the established press had "
                 "not thought of and could not easily copy ___.",
         rule='colon_after_independent',
         rule_span=': the sale of the reader to the advertiser rather than of the paper '
                   'to the reader',
         opts=[': the sale of the reader to the advertiser rather than of the paper to the '
               'reader',
               ', the sale of the reader to the advertiser rather than of the paper to the '
               'reader',
               '; the sale of the reader to the advertiser rather than of the paper to the '
               'reader',
               ': the sale of the reader, to the advertiser, rather than of the paper, to '
               'the reader,'], key='A',
         faults={'B': ('wrong_mark',
                       ', the sale of the reader to the advertiser rather than of the '
                       'paper to the reader'),
                 'C': ('wrong_mark',
                       '; the sale of the reader to the advertiser rather than of the '
                       'paper to the reader'),
                 'D': ('overpunctuated',
                       ': the sale of the reader, to the advertiser, rather than of the '
                       'paper, to the reader,')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="A colon follows a complete clause when a phrase after it explains the clause, "
             "and that is what the sale of the reader does here.",
         trap="C uses a semicolon, which needs a second sentence on its right and is given "
              "a noun phrase instead."),
])

BIO = dict(domain='BIO', note_ar=(
    "قوائم الأحياء وعلوم الأرض تعدّ الأنواع والمراحل والمواد الكاشفة، وكثير من عناصرها "
    "يحمل في داخله شرحاً مفصولاً بفاصلة، كأن يقال الكبد في الفورمالين. وعند ذلك تنتقل "
    "القائمة من الفاصلة إلى الفاصلة المنقوطة."), xs=[
    dict(strand='BIO-S01', pos=1,
         carrier="The flask was seeded with three species of bacteria ___.",
         rule='comma_series',
         rule_span='Escherichia coli, Bacillus subtilis and Pseudomonas putida',
         opts=['Escherichia coli, Bacillus subtilis and Pseudomonas putida',
               'Escherichia coli; Bacillus subtilis and Pseudomonas putida',
               'Escherichia coli Bacillus subtilis and Pseudomonas putida',
               'Escherichia coli, Bacillus subtilis, and Pseudomonas putida,'],
         key='A',
         faults={'B': ('wrong_mark', 'Escherichia coli; Bacillus subtilis'),
                 'C': ('missing_series_mark', 'Escherichia coli Bacillus subtilis'),
                 'D': ('overpunctuated', 'Pseudomonas putida,')},
         ctx=dict(mark_ok=['comma'], marks_expected=1),
         why="Plain list items are separated by commas, and none of these three species "
             "names holds a comma inside it.",
         trap="C runs the first two names together, so a reader meets what looks like one "
              "organism with four words in its name."),
    dict(strand='BIO-S02', pos=2,
         carrier="The two hormones that open and close the stomata are ___.",
         rule='no_mark_needed', rule_span='abscisic acid and auxin',
         opts=[': abscisic acid and auxin', ', abscisic acid and auxin',
               'abscisic acid and auxin', '; abscisic acid and auxin'], key='C',
         faults={'A': ('colon_after_fragment', ': abscisic acid and auxin'),
                 'B': ('overpunctuated', ', abscisic acid and auxin'),
                 'D': ('wrong_mark', '; abscisic acid and auxin')},
         ctx=dict(before_independent=False, mark_ok=[], marks_expected=0),
         why="No mark belongs between are and the names that complete it, because are on "
             "its own is not yet a clause.",
         trap="A sets a colon after are, which looks like an announcement but follows "
              "nothing that could stand alone."),
    dict(strand='BIO-S03', pos=3,
         carrier="The electron micrographs settled a question that had been open for half a "
                 "century ___.",
         rule='colon_after_independent',
         rule_span=': the origin of the chloroplast in a free-living bacterium',
         opts=[', the origin of the chloroplast in a free-living bacterium',
               '; the origin of the chloroplast in a free-living bacterium',
               ': the origin of the chloroplast, in a free-living bacterium,',
               ': the origin of the chloroplast in a free-living bacterium'], key='D',
         faults={'A': ('wrong_mark',
                       ', the origin of the chloroplast in a free-living bacterium'),
                 'B': ('wrong_mark',
                       '; the origin of the chloroplast in a free-living bacterium'),
                 'C': ('overpunctuated',
                       ': the origin of the chloroplast, in a free-living bacterium,')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="A colon follows a complete clause, and the phrase after it names the question "
             "that the clause has just said was settled.",
         trap="B offers a semicolon, which joins two complete clauses and cannot stand "
              "before a phrase."),
    dict(strand='BIO-S04', pos=4,
         carrier="A standard Gram stain uses its four reagents in one fixed order ___.",
         rule='comma_series',
         rule_span='crystal violet, iodine, alcohol and safranin',
         opts=['crystal violet iodine, alcohol and safranin',
               'crystal violet, iodine, alcohol and safranin',
               'crystal violet; iodine; alcohol and safranin',
               'crystal violet, iodine, alcohol, and safranin,'], key='B',
         faults={'A': ('missing_series_mark', 'crystal violet iodine'),
                 'C': ('wrong_mark', 'crystal violet; iodine;'),
                 'D': ('overpunctuated', 'alcohol, and safranin,')},
         ctx=dict(mark_ok=['comma'], marks_expected=2),
         why="Four plain items take commas between them, and a list of commas is the right "
             "mark here because no item carries one of its own.",
         trap="A drops the comma after the first reagent, which turns two reagents into one "
              "with an odd name."),
    dict(strand='BIO-S05', pos=5,
         carrier="The culture was sampled at three points in the growth curve: ___.",
         rule='semicolon_between_items',
         rule_span='at six hours, before dilution; at twelve hours, after dilution; and at '
                   'twenty-four hours',
         opts=['at six hours, before dilution; at twelve hours, after dilution; and at '
               'twenty-four hours',
               'at six hours, before dilution, at twelve hours, after dilution, and at '
               'twenty-four hours',
               'at six hours: before dilution: at twelve hours: after dilution: and at '
               'twenty-four hours',
               'at six hours, before dilution; at twelve hours, after dilution; and at '
               'twenty-four hours;'], key='A',
         faults={'B': ('missing_series_mark', 'before dilution, at twelve hours'),
                 'C': ('wrong_mark', 'at six hours: before dilution:'),
                 'D': ('overpunctuated', 'at twenty-four hours;')},
         ctx=dict(mark_ok=['semi', 'comma'], marks_expected=4),
         why="Semicolons separate list items that themselves contain commas, and the first "
             "two points here each carry a comma before their description.",
         trap="B uses commas for both jobs, so three sampling points read as five."),
    dict(strand='BIO-S06', pos=6,
         carrier="The 1918 pandemic reversed the usual shape of influenza mortality in a way "
                 "that no physician had seen before ___.",
         rule='colon_after_independent',
         rule_span=': a peak among adults of twenty to forty rather than among the very '
                   'young and the very old',
         opts=[', a peak among adults of twenty to forty rather than among the very young '
               'and the very old',
               '; a peak among adults of twenty to forty rather than among the very young '
               'and the very old',
               ': a peak, among adults of twenty to forty, rather than among the very '
               'young, and the very old,',
               ': a peak among adults of twenty to forty rather than among the very young '
               'and the very old'], key='D',
         faults={'A': ('wrong_mark', ', a peak among adults of twenty'),
                 'B': ('wrong_mark', '; a peak among adults of twenty'),
                 'C': ('overpunctuated', ': a peak, among adults of twenty to forty,')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="The clause before the blank is complete, so a colon may follow it, and what "
             "follows is the shape the clause has just called unfamiliar.",
         trap="A uses a comma, which leaves the long phrase hanging off the clause with no "
              "mark strong enough to introduce it."),
    dict(strand='BIO-S07', pos=7,
         carrier="A field key to the freshwater algae asks the student to look first and "
                 "above all at ___.",
         rule='no_mark_needed',
         rule_span='the shape of the cell wall and the number of flagella',
         opts=[': the shape of the cell wall and the number of flagella',
               ', the shape of the cell wall and the number of flagella',
               'the shape of the cell wall and the number of flagella',
               '; the shape of the cell wall and the number of flagella'], key='C',
         faults={'A': ('colon_after_fragment',
                       ': the shape of the cell wall and the number of flagella'),
                 'B': ('overpunctuated',
                       ', the shape of the cell wall and the number of flagella'),
                 'D': ('wrong_mark',
                       '; the shape of the cell wall and the number of flagella')},
         ctx=dict(before_independent=False, mark_ok=[], marks_expected=0),
         why="No mark belongs between a preposition and its object, and at is left "
             "incomplete until the two phrases arrive.",
         trap="A puts a colon after at, where a colon can only pretend that a fragment is a "
              "finished clause."),
    dict(strand='BIO-S08', pos=8,
         carrier="The protocol names three tissues, each with the fixative that it takes and "
                 "no other: ___.",
         rule='semicolon_between_items',
         rule_span='liver, in formalin; kidney, in glutaraldehyde; and brain, in osmium '
                   'tetroxide',
         opts=['liver: in formalin: kidney: in glutaraldehyde: and brain: in osmium '
               'tetroxide',
               'liver, in formalin; kidney, in glutaraldehyde; and brain, in osmium '
               'tetroxide',
               'liver, in formalin, kidney, in glutaraldehyde, and brain, in osmium '
               'tetroxide',
               'liver, in formalin; kidney, in glutaraldehyde; and brain, in osmium '
               'tetroxide;'], key='B',
         faults={'A': ('wrong_mark', 'liver: in formalin:'),
                 'C': ('missing_series_mark', 'in formalin, kidney'),
                 'D': ('overpunctuated', 'in osmium tetroxide;')},
         ctx=dict(mark_ok=['semi', 'comma'], marks_expected=5),
         why="Each tissue is named with its fixative after a comma, so semicolons are what "
             "separate one tissue from the next.",
         trap="C puts a comma everywhere, and the reader cannot tell whether three tissues "
              "are listed or six."),
    dict(strand='BIO-S09', pos=9,
         carrier="Lynn Margulis spent a decade arguing for a claim that the textbooks now "
                 "state in a single line, as though it had never been in doubt ___.",
         rule='colon_after_independent',
         rule_span=': the descent of the mitochondrion from a bacterium swallowed and not '
                   'digested',
         opts=[', the descent of the mitochondrion from a bacterium swallowed and not '
               'digested',
               '; the descent of the mitochondrion from a bacterium swallowed and not '
               'digested',
               ': the descent of the mitochondrion, from a bacterium swallowed, and not '
               'digested,',
               ': the descent of the mitochondrion from a bacterium swallowed and not '
               'digested'], key='D',
         faults={'A': ('wrong_mark', ', the descent of the mitochondrion from'),
                 'B': ('wrong_mark', '; the descent of the mitochondrion from'),
                 'C': ('overpunctuated', ': the descent of the mitochondrion, from')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="What stands before the blank is already a sentence, and a colon is the mark "
             "that lets a phrase follow it and spell the claim out.",
         trap="B treats the phrase as though it were a second clause, which a semicolon "
              "requires and this phrase is not."),
    dict(strand='BIO-S10', pos=10,
         carrier="A modern tree of life rests on three kinds of evidence, each gathered by a "
                 "different method and each with a weakness of its own: ___.",
         rule='semicolon_between_items',
         rule_span='ribosomal RNA, read base by base; gene order, compared across whole '
                   'genomes; and the fossil record, patchy for microbes',
         opts=['ribosomal RNA, read base by base, gene order, compared across whole '
               'genomes, and the fossil record, patchy for microbes',
               'ribosomal RNA, read base by base; gene order, compared across whole '
               'genomes; and the fossil record, patchy for microbes',
               'ribosomal RNA: read base by base: gene order: compared across whole '
               'genomes: and the fossil record, patchy for microbes',
               'ribosomal RNA, read base by base; gene order, compared across whole '
               'genomes; and the fossil record, patchy for microbes;'], key='B',
         faults={'A': ('missing_series_mark', 'read base by base, gene order'),
                 'C': ('wrong_mark', 'ribosomal RNA: read base by base:'),
                 'D': ('overpunctuated', 'patchy for microbes;')},
         ctx=dict(mark_ok=['semi', 'comma'], marks_expected=5),
         why="Every one of the three kinds of evidence is followed by a comma and a "
             "description, which is the case semicolons exist for.",
         trap="A leaves six comma-separated phrases in a row, and nothing tells the reader "
              "which three are the evidence."),
])

PHY = dict(domain='PHY', note_ar=(
    "في العلوم الفيزيائية تُعدّ الأجهزة والكمّيات ووحداتها، فتأتي الوحدة بعد الكمّية مفصولة "
    "بفاصلة، ويصير داخل العنصر فاصلة. وهذا هو موضع الفاصلة المنقوطة بعينه، وهو أكثر ما "
    "يتكرّر في هذا الفصل من مواضع."), xs=[
    dict(strand='PHY-S01', pos=1,
         carrier="The simplest version of the apparatus needs only ___.",
         rule='no_mark_needed',
         rule_span='a tuning fork, a resonance tube and a thermometer',
         opts=[': a tuning fork, a resonance tube and a thermometer',
               'a tuning fork, a resonance tube and a thermometer',
               ', a tuning fork, a resonance tube and a thermometer',
               '; a tuning fork, a resonance tube and a thermometer'], key='B',
         faults={'A': ('colon_after_fragment',
                       ': a tuning fork, a resonance tube and a thermometer'),
                 'C': ('overpunctuated',
                       ', a tuning fork, a resonance tube and a thermometer'),
                 'D': ('wrong_mark',
                       '; a tuning fork, a resonance tube and a thermometer')},
         ctx=dict(before_independent=False, mark_ok=[], marks_expected=1),
         why="No mark belongs between needs and the three things it governs, and only "
             "leaves the sentence plainly unfinished.",
         trap="A sets a colon after only, which can introduce a list but not from the "
              "middle of a verb phrase."),
    dict(strand='PHY-S02', pos=2,
         carrier="The cart was loaded in turn with three masses ___.",
         rule='comma_series', rule_span='200 grams, 500 grams and one kilogram',
         opts=['200 grams 500 grams and one kilogram',
               '200 grams; 500 grams and one kilogram',
               '200 grams, 500 grams, and one kilogram,',
               '200 grams, 500 grams and one kilogram'], key='D',
         faults={'A': ('missing_series_mark', '200 grams 500 grams'),
                 'B': ('wrong_mark', '200 grams; 500 grams'),
                 'C': ('overpunctuated', '500 grams, and one kilogram,')},
         ctx=dict(mark_ok=['comma'], marks_expected=1),
         why="Three short quantities are a plain list, and plain lists take commas between "
             "their items.",
         trap="A leaves the first two masses with nothing between them, which reads as a "
              "single impossible figure."),
    dict(strand='PHY-S03', pos=3,
         carrier="The 1887 interferometer gave the same reading in every orientation of the "
                 "apparatus ___.",
         rule='colon_after_independent', rule_span=': no shift in the fringes at all',
         opts=[': no shift in the fringes at all', ', no shift in the fringes at all',
               '; no shift in the fringes at all', ': no shift, in the fringes, at all,'],
         key='A',
         faults={'B': ('wrong_mark', ', no shift in the fringes at all'),
                 'C': ('wrong_mark', '; no shift in the fringes at all'),
                 'D': ('overpunctuated', ': no shift, in the fringes, at all,')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="A colon can follow this clause because the clause is complete, and the phrase "
             "after it says what the reading was.",
         trap="C uses a semicolon, which needs a clause on each side and has only a short "
              "phrase on the right."),
    dict(strand='PHY-S04', pos=4,
         carrier="Three instruments were read at every trial: ___.",
         rule='semicolon_between_items',
         rule_span='the barometer, in millibars; the thermometer, in kelvin; and the '
                   'hygrometer, in per cent',
         opts=['the barometer: in millibars: the thermometer: in kelvin: and the '
               'hygrometer, in per cent',
               'the barometer, in millibars, the thermometer, in kelvin, and the '
               'hygrometer, in per cent',
               'the barometer, in millibars; the thermometer, in kelvin; and the '
               'hygrometer, in per cent',
               'the barometer, in millibars; the thermometer, in kelvin; and the '
               'hygrometer, in per cent;'], key='C',
         faults={'A': ('wrong_mark', 'the barometer: in millibars:'),
                 'B': ('missing_series_mark', 'in millibars, the thermometer'),
                 'D': ('overpunctuated', 'in per cent;')},
         ctx=dict(mark_ok=['semi', 'comma'], marks_expected=5),
         why="Each instrument is followed by a comma and its unit, so semicolons are needed "
             "to mark where one instrument ends.",
         trap="B uses commas throughout, which makes six items of three and hides the units "
              "among the instruments."),
    dict(strand='PHY-S05', pos=5,
         carrier="A series circuit of this kind contains four parts and no more ___.",
         rule='comma_series',
         rule_span='a cell, a resistor, an ammeter and a switch',
         opts=['a cell a resistor, an ammeter and a switch',
               'a cell, a resistor, an ammeter and a switch',
               'a cell; a resistor; an ammeter and a switch',
               'a cell, a resistor, an ammeter, and a switch,'], key='B',
         faults={'A': ('missing_series_mark', 'a cell a resistor'),
                 'C': ('wrong_mark', 'a cell; a resistor;'),
                 'D': ('overpunctuated', 'an ammeter, and a switch,')},
         ctx=dict(mark_ok=['comma'], marks_expected=2),
         why="None of these four parts carries a comma of its own, so commas are enough to "
             "keep them apart.",
         trap="C raises the mark to a semicolon, which is reserved for items that already "
              "hold commas."),
    dict(strand='PHY-S06', pos=6,
         carrier="The quantity that stays constant while a gas is compressed slowly in a "
                 "jacket of melting ice is ___.",
         rule='no_mark_needed',
         rule_span='the product of its pressure and its volume',
         opts=['the product of its pressure and its volume',
               ': the product of its pressure and its volume',
               ', the product of its pressure and its volume',
               '; the product of its pressure and its volume'], key='A',
         faults={'B': ('colon_after_fragment',
                       ': the product of its pressure and its volume'),
                 'C': ('overpunctuated',
                       ', the product of its pressure and its volume'),
                 'D': ('wrong_mark', '; the product of its pressure and its volume')},
         ctx=dict(before_independent=False, mark_ok=[], marks_expected=0),
         why="No mark belongs between is and the phrase that completes it, however long the "
             "subject in front of is has grown.",
         trap="B uses a colon because the subject is long, but length does not make the "
              "words before it a clause."),
    dict(strand='PHY-S07', pos=7,
         carrier="The 1911 scattering results forced one conclusion on Rutherford that he "
                 "had neither expected nor wanted ___.",
         rule='colon_after_independent',
         rule_span=': a nucleus small enough to leave the atom almost all empty space',
         opts=[', a nucleus small enough to leave the atom almost all empty space',
               '; a nucleus small enough to leave the atom almost all empty space',
               ': a nucleus, small enough to leave the atom, almost all empty space,',
               ': a nucleus small enough to leave the atom almost all empty space'],
         key='D',
         faults={'A': ('wrong_mark', ', a nucleus small enough'),
                 'B': ('wrong_mark', '; a nucleus small enough'),
                 'C': ('overpunctuated', ': a nucleus, small enough to leave the atom,')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="The words before the blank make a sentence on their own, which is the one "
             "condition a colon imposes, and the phrase names the conclusion.",
         trap="A offers a comma, too light a mark to carry the announcement the sentence has "
              "set up."),
    dict(strand='PHY-S08', pos=8,
         carrier="The uncertainty in the final figure came from three sources, each of them "
                 "estimated separately: ___.",
         rule='semicolon_between_items',
         rule_span='the balance, read to a milligram; the stopwatch, started by hand; and '
                   'the thermometer, read to half a degree',
         opts=['the balance, read to a milligram, the stopwatch, started by hand, and the '
               'thermometer, read to half a degree',
               'the balance: read to a milligram: the stopwatch: started by hand: and the '
               'thermometer, read to half a degree',
               'the balance, read to a milligram; the stopwatch, started by hand; and the '
               'thermometer, read to half a degree',
               'the balance, read to a milligram; the stopwatch, started by hand; and the '
               'thermometer, read to half a degree;'], key='C',
         faults={'A': ('missing_series_mark', 'read to a milligram, the stopwatch'),
                 'B': ('wrong_mark', 'the balance: read to a milligram:'),
                 'D': ('overpunctuated', 'read to half a degree;')},
         ctx=dict(mark_ok=['semi', 'comma'], marks_expected=5),
         why="Semicolons separate the three sources because each of them is already split "
             "by a comma from the way it was estimated.",
         trap="A flattens every mark to a comma, so the three sources and their three "
              "methods read as one list of six."),
    dict(strand='PHY-S09', pos=9,
         carrier="Everything the kinetic theory says about a gas at equilibrium can be "
                 "derived, with no further assumption about the particles, from ___.",
         rule='no_mark_needed',
         rule_span='the distribution of their speeds and the mass of one of them',
         opts=['the distribution of their speeds and the mass of one of them',
               ': the distribution of their speeds and the mass of one of them',
               ', the distribution of their speeds and the mass of one of them',
               '; the distribution of their speeds and the mass of one of them'], key='A',
         faults={'B': ('colon_after_fragment',
                       ': the distribution of their speeds and the mass of one of them'),
                 'C': ('overpunctuated',
                       ', the distribution of their speeds and the mass of one of them'),
                 'D': ('wrong_mark',
                       '; the distribution of their speeds and the mass of one of them')},
         ctx=dict(before_independent=False, mark_ok=[], marks_expected=0),
         why="The sentence has commas already, around its inserted phrase, but no mark "
             "belongs after from, which still needs its object.",
         trap="C adds a third comma after from, where the two commas already in the "
              "sentence are doing a different job."),
    dict(strand='PHY-S10', pos=10,
         carrier="A modern measurement of the gravitational constant reports three numbers "
                 "rather than one, and the last two matter more than a student expects: "
                 "___.",
         rule='semicolon_between_items',
         rule_span='the value itself, in SI units; the statistical uncertainty, from the '
                   'scatter of the runs; and the systematic uncertainty, from the '
                   'apparatus',
         opts=['the value itself, in SI units, the statistical uncertainty, from the '
               'scatter of the runs, and the systematic uncertainty, from the apparatus',
               'the value itself: in SI units: the statistical uncertainty: from the '
               'scatter of the runs: and the systematic uncertainty, from the apparatus',
               'the value itself, in SI units; the statistical uncertainty, from the '
               'scatter of the runs; and the systematic uncertainty, from the apparatus',
               'the value itself, in SI units; the statistical uncertainty, from the '
               'scatter of the runs; and the systematic uncertainty, from the apparatus;'],
         key='C',
         faults={'A': ('missing_series_mark', 'in SI units, the statistical uncertainty'),
                 'B': ('wrong_mark', 'the value itself: in SI units:'),
                 'D': ('overpunctuated', 'from the apparatus;')},
         ctx=dict(mark_ok=['semi', 'comma'], marks_expected=5),
         why="Each of the three numbers is followed by a comma and its source, so "
             "semicolons are what divide one number from the next.",
         trap="B replaces every separator with a colon, a mark that can open a list but "
              "cannot run through one."),
])

HUM = dict(domain='HUM', note_ar=(
    "في الإنسانيات تُعدّ العناوين والمترجمون والرواة، ومع كلّ اسم يأتي وصفه بعد فاصلة، "
    "كأن يقال ترجمة فلان، في بيتين مزدوجين. فالعناصر هنا طويلة موصوفة، والفاصلة وحدها "
    "لا تكفي لفصلها."), xs=[
    dict(strand='HUM-S01', pos=1,
         carrier="The Bronte sisters published their first book under three borrowed names "
                 "___.",
         rule='comma_series', rule_span='Currer, Ellis and Acton Bell',
         opts=['Currer Ellis and Acton Bell', 'Currer; Ellis and Acton Bell',
               'Currer, Ellis and Acton Bell', 'Currer, Ellis, and Acton Bell,'], key='C',
         faults={'A': ('missing_series_mark', 'Currer Ellis and'),
                 'B': ('wrong_mark', 'Currer; Ellis and'),
                 'D': ('overpunctuated', 'Ellis, and Acton Bell,')},
         ctx=dict(mark_ok=['comma'], marks_expected=1),
         why="Three short names are a plain list, and plain lists are separated by commas "
             "and nothing heavier.",
         trap="A gives the three names with nothing between the first two, which reads as "
              "one person called Currer Ellis."),
    dict(strand='HUM-S02', pos=2,
         carrier="Keats names the subject of the ode in its opening line ___.",
         rule='colon_after_independent', rule_span=': a bird he never sees',
         opts=[': a bird he never sees', ', a bird he never sees', '; a bird he never sees',
               ': a bird, he never sees,'], key='A',
         faults={'B': ('wrong_mark', ', a bird he never sees'),
                 'C': ('wrong_mark', '; a bird he never sees'),
                 'D': ('overpunctuated', ': a bird, he never sees,')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="The clause before the blank is whole, so a colon may follow, and the phrase "
             "after it is the subject the clause has promised.",
         trap="C puts a semicolon before four words that are not a clause, which is the one "
              "thing a semicolon cannot do."),
    dict(strand='HUM-S03', pos=3,
         carrier="The narrator of Great Expectations keeps from the reader for three hundred "
                 "pages the name of ___.",
         rule='no_mark_needed',
         rule_span='the convict who has paid for his education',
         opts=[': the convict who has paid for his education',
               'the convict who has paid for his education',
               ', the convict who has paid for his education',
               '; the convict who has paid for his education'], key='B',
         faults={'A': ('colon_after_fragment',
                       ': the convict who has paid for his education'),
                 'C': ('overpunctuated', ', the convict who has paid for his education'),
                 'D': ('wrong_mark', '; the convict who has paid for his education')},
         ctx=dict(before_independent=False, mark_ok=[], marks_expected=0),
         why="No mark belongs between of and the phrase it governs, and the name of is as "
             "incomplete as a phrase can be.",
         trap="A announces the answer with a colon, but the words before it end in a "
              "preposition and cannot stand alone."),
    dict(strand='HUM-S04', pos=4,
         carrier="Hurston said that her training as a folklorist had given her one thing "
                 "above everything else ___.",
         rule='colon_after_independent',
         rule_span=': an ear for the way people actually talk',
         opts=[', an ear for the way people actually talk',
               '; an ear for the way people actually talk',
               ': an ear, for the way people actually talk,',
               ': an ear for the way people actually talk'], key='D',
         faults={'A': ('wrong_mark', ', an ear for the way'),
                 'B': ('wrong_mark', '; an ear for the way'),
                 'C': ('overpunctuated', ': an ear, for the way people actually talk,')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="One thing above everything else promises a naming, and the colon is the mark "
             "that delivers it after a finished clause.",
         trap="B reaches for a semicolon, which would need a second sentence and is given a "
              "noun phrase instead."),
    dict(strand='HUM-S05', pos=5,
         carrier="The anthology prints three translations of the same passage: ___.",
         rule='semicolon_between_items',
         rule_span="Pope's, in couplets; Fitzgerald's, in free verse; and Fagles's, in "
                   'lines of six beats',
         opts=["Pope's: in couplets: Fitzgerald's: in free verse: and Fagles's, in lines of "
               'six beats',
               "Pope's, in couplets, Fitzgerald's, in free verse, and Fagles's, in lines of "
               'six beats',
               "Pope's, in couplets; Fitzgerald's, in free verse; and Fagles's, in lines of "
               'six beats',
               "Pope's, in couplets; Fitzgerald's, in free verse; and Fagles's, in lines of "
               'six beats;'], key='C',
         faults={'A': ('wrong_mark', "Pope's: in couplets:"),
                 'B': ('missing_series_mark', "in couplets, Fitzgerald's"),
                 'D': ('overpunctuated', 'lines of six beats;')},
         ctx=dict(mark_ok=['semi', 'comma'], marks_expected=5),
         why="Each translator's name is followed by a comma and the verse form, so "
             "semicolons must do the separating between the three.",
         trap="B uses commas for both jobs, leaving the reader to guess which phrases are "
              "translators and which are forms."),
    dict(strand='HUM-S06', pos=6,
         carrier="A Jacobean company kept its repertory going on four kinds of writing, "
                 "often by four different hands at once ___.",
         rule='comma_series',
         rule_span='tragedies, comedies, masques and city satires',
         opts=['tragedies comedies, masques and city satires',
               'tragedies, comedies, masques and city satires',
               'tragedies; comedies; masques and city satires',
               'tragedies, comedies, masques, and city satires,'], key='B',
         faults={'A': ('missing_series_mark', 'tragedies comedies,'),
                 'C': ('wrong_mark', 'tragedies; comedies;'),
                 'D': ('overpunctuated', 'masques, and city satires,')},
         ctx=dict(mark_ok=['comma'], marks_expected=2),
         why="Four one-word kinds of play hold no commas of their own, so commas are the "
             "mark that separates them.",
         trap="C uses semicolons between single words, a weight the list cannot carry and "
              "does not need."),
    dict(strand='HUM-S07', pos=7,
         carrier="Baldwin's quarrel with the protest novel came down in the end to one "
                 "objection, and he went on repeating it for twenty years ___.",
         rule='colon_after_independent',
         rule_span=': the cost to the characters of standing for something larger than '
                   'themselves',
         opts=[': the cost to the characters of standing for something larger than '
               'themselves',
               ', the cost to the characters of standing for something larger than '
               'themselves',
               '; the cost to the characters of standing for something larger than '
               'themselves',
               ': the cost, to the characters, of standing for something larger than '
               'themselves,'], key='A',
         faults={'B': ('wrong_mark', ', the cost to the characters of standing'),
                 'C': ('wrong_mark', '; the cost to the characters of standing'),
                 'D': ('overpunctuated', ': the cost, to the characters, of standing')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="Two clauses joined by and are still a complete sentence, so the colon has the "
             "clause it requires in front of it.",
         trap="B uses a comma, which after a sentence this long reads as a third clause "
              "beginning rather than an explanation."),
    dict(strand='HUM-S08', pos=8,
         carrier="What the chorus of a Greek tragedy gives an audience, and what no modern "
                 "stage direction replaces, is ___.",
         rule='no_mark_needed',
         rule_span='a voice that knows the story already',
         opts=[': a voice that knows the story already',
               ', a voice that knows the story already',
               '; a voice that knows the story already',
               'a voice that knows the story already'], key='D',
         faults={'A': ('colon_after_fragment', ': a voice that knows the story already'),
                 'B': ('overpunctuated', ', a voice that knows the story already'),
                 'C': ('wrong_mark', '; a voice that knows the story already')},
         ctx=dict(before_independent=False, mark_ok=[], marks_expected=0),
         why="No mark belongs between is and its complement, and the two commas earlier in "
             "the sentence close a different insertion.",
         trap="A takes the pause after the long subject for an announcement and marks it "
              "with a colon that nothing licenses."),
    dict(strand='HUM-S09', pos=9,
         carrier="Frankenstein reaches the reader through three narrators in turn, each one "
                 "framed by the next, and the order is part of the argument: ___.",
         rule='semicolon_between_items',
         rule_span='Walton, writing letters home; Victor, telling his story on the ice; and '
                   'the creature, speaking for a few chapters in the middle',
         opts=['Walton, writing letters home, Victor, telling his story on the ice, and the '
               'creature, speaking for a few chapters in the middle',
               'Walton, writing letters home; Victor, telling his story on the ice; and the '
               'creature, speaking for a few chapters in the middle',
               'Walton: writing letters home: Victor: telling his story on the ice: and the '
               'creature, speaking for a few chapters in the middle',
               'Walton, writing letters home; Victor, telling his story on the ice; and the '
               'creature, speaking for a few chapters in the middle;'], key='B',
         faults={'A': ('missing_series_mark', 'writing letters home, Victor'),
                 'C': ('wrong_mark', 'Walton: writing letters home:'),
                 'D': ('overpunctuated', 'in the middle;')},
         ctx=dict(mark_ok=['semi', 'comma'], marks_expected=5),
         why="Each narrator is named and then described after a comma, which is exactly the "
             "list that semicolons were made for.",
         trap="A gives six comma-separated phrases, so the reader cannot see that three of "
              "them are the narrators."),
    dict(strand='HUM-S10', pos=10,
         carrier="Eliot added the notes to The Waste Land for a reason he later wished he "
                 "had resisted, and the poem has been read through them ever since ___.",
         rule='colon_after_independent',
         rule_span=': the need to fill out a volume too thin for the printer',
         opts=[', the need to fill out a volume too thin for the printer',
               '; the need to fill out a volume too thin for the printer',
               ': the need, to fill out a volume, too thin for the printer,',
               ': the need to fill out a volume too thin for the printer'], key='D',
         faults={'A': ('wrong_mark', ', the need to fill out a volume'),
                 'B': ('wrong_mark', '; the need to fill out a volume'),
                 'C': ('overpunctuated', ': the need, to fill out a volume,')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="A colon is the mark that lets a bare noun phrase explain the clause before "
             "it, and that clause here is already complete.",
         trap="A adds a comma to a sentence that already has one, and the phrase then reads "
              "as a third item rather than the reason."),
])

SOC = dict(domain='SOC', note_ar=(
    "في العلوم الاجتماعية تُعدّ النسب والمدن والتعريفات، وكلّ رقم يُتبع بتعريفه أو بمصدره "
    "بعد فاصلة. فإذا عُدّت ثلاثة أرقام على هذا الوجه صارت الفاصلة المنقوطة هي الفاصل بين "
    "الأرقام، والفاصلة داخل الرقم الواحد."), xs=[
    dict(strand='SOC-S01', pos=1,
         carrier="The survey asked every household about ___.",
         rule='no_mark_needed', rule_span='income, housing and travel to work',
         opts=[': income, housing and travel to work',
               ', income, housing and travel to work',
               '; income, housing and travel to work',
               'income, housing and travel to work'], key='D',
         faults={'A': ('colon_after_fragment', ': income, housing and travel to work'),
                 'B': ('overpunctuated', ', income, housing and travel to work'),
                 'C': ('wrong_mark', '; income, housing and travel to work')},
         ctx=dict(before_independent=False, mark_ok=[], marks_expected=1),
         why="No mark belongs between about and the three things it governs, even though "
             "the three things need commas among themselves.",
         trap="A sets a colon after about, which leaves a preposition announcing a list it "
              "should simply govern."),
    dict(strand='SOC-S02', pos=2,
         carrier="The form left its three hardest questions to the very end ___.",
         rule='comma_series', rule_span='rent, debt and savings',
         opts=['rent debt and savings', 'rent, debt and savings', 'rent; debt and savings',
               'rent, debt, and savings,'], key='B',
         faults={'A': ('missing_series_mark', 'rent debt and'),
                 'C': ('wrong_mark', 'rent; debt and'),
                 'D': ('overpunctuated', 'debt, and savings,')},
         ctx=dict(mark_ok=['comma'], marks_expected=1),
         why="Three single words are the plainest list there is, and commas are the mark it "
             "takes.",
         trap="C uses a semicolon between two single words, which tells the reader to "
              "expect a complication that is not there."),
    dict(strand='SOC-S03', pos=3,
         carrier="The 1967 study sorted the blocks of the city into four classes by income "
                 "alone and nothing else ___.",
         rule='comma_series', rule_span='poor, modest, comfortable and rich',
         opts=['poor modest, comfortable and rich', 'poor; modest; comfortable and rich',
               'poor, modest, comfortable and rich', 'poor, modest, comfortable, and rich,'],
         key='C',
         faults={'A': ('missing_series_mark', 'poor modest,'),
                 'B': ('wrong_mark', 'poor; modest;'),
                 'D': ('overpunctuated', 'comfortable, and rich,')},
         ctx=dict(mark_ok=['comma'], marks_expected=2),
         why="Four single adjectives carry no internal punctuation, so commas are all the "
             "list needs to keep the four classes apart.",
         trap="A drops the first comma, which makes poor modest read as one class described "
              "twice."),
    dict(strand='SOC-S04', pos=4,
         carrier="The response rate to mailed questionnaires has fallen in a way that "
                 "worries every survey organization ___.",
         rule='colon_after_independent',
         rule_span=': from above seventy per cent in 1970 to below thirty today',
         opts=[': from above seventy per cent in 1970 to below thirty today',
               ', from above seventy per cent in 1970 to below thirty today',
               '; from above seventy per cent in 1970 to below thirty today',
               ': from above seventy per cent, in 1970, to below thirty, today,'], key='A',
         faults={'B': ('wrong_mark', ', from above seventy per cent in 1970'),
                 'C': ('wrong_mark', '; from above seventy per cent in 1970'),
                 'D': ('overpunctuated', ': from above seventy per cent, in 1970,')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="The clause is complete before the blank, so a colon may introduce the figures "
             "that show how far the rate has fallen.",
         trap="C offers a semicolon, which demands a clause on the right and gets a pair of "
              "percentages."),
    dict(strand='SOC-S05', pos=5,
         carrier="What the researchers could not measure from the records they had, and "
                 "what they said so in the first paragraph, was ___.",
         rule='no_mark_needed',
         rule_span='the hours each parent actually spent at home',
         opts=[': the hours each parent actually spent at home',
               ', the hours each parent actually spent at home',
               '; the hours each parent actually spent at home',
               'the hours each parent actually spent at home'], key='D',
         faults={'A': ('colon_after_fragment',
                       ': the hours each parent actually spent at home'),
                 'B': ('overpunctuated', ', the hours each parent actually spent at home'),
                 'C': ('wrong_mark', '; the hours each parent actually spent at home')},
         ctx=dict(before_independent=False, mark_ok=[], marks_expected=0),
         why="No mark belongs between was and what it equates the subject to, however many "
             "clauses that subject has gathered.",
         trap="A puts a colon after was, which is the commonest version of this error on "
              "the test."),
    dict(strand='SOC-S06', pos=6,
         carrier="The report gives three figures for the same city, and each of them rests "
                 "on a different definition: ___.",
         rule='semicolon_between_items',
         rule_span='eight per cent, by the official line; fourteen per cent, by a relative '
                   'measure; and twenty per cent, by the residents of the city themselves',
         opts=['eight per cent, by the official line, fourteen per cent, by a relative '
               'measure, and twenty per cent, by the residents of the city themselves',
               'eight per cent: by the official line: fourteen per cent: by a relative '
               'measure: and twenty per cent, by the residents of the city themselves',
               'eight per cent, by the official line; fourteen per cent, by a relative '
               'measure; and twenty per cent, by the residents of the city themselves',
               'eight per cent, by the official line; fourteen per cent, by a relative '
               'measure; and twenty per cent, by the residents of the city themselves;'],
         key='C',
         faults={'A': ('missing_series_mark', 'by the official line, fourteen per cent'),
                 'B': ('wrong_mark', 'eight per cent: by the official line:'),
                 'D': ('overpunctuated', 'of the city themselves;')},
         ctx=dict(mark_ok=['semi', 'comma'], marks_expected=5),
         why="Each figure is followed by a comma and the definition behind it, so "
             "semicolons are what separate one figure from the next.",
         trap="A uses commas for both jobs, and the three figures then read as six items of "
              "equal weight."),
    dict(strand='SOC-S07', pos=7,
         carrier="Durkheim's tables pointed to a conclusion that his first readers took for "
                 "a paradox ___.",
         rule='colon_after_independent',
         rule_span=': a higher rate of suicide among the free than among the bound',
         opts=[', a higher rate of suicide among the free than among the bound',
               ': a higher rate of suicide among the free than among the bound',
               '; a higher rate of suicide among the free than among the bound',
               ': a higher rate of suicide, among the free, than among the bound,'],
         key='B',
         faults={'A': ('wrong_mark', ', a higher rate of suicide among the free'),
                 'C': ('wrong_mark', '; a higher rate of suicide among the free'),
                 'D': ('overpunctuated', ': a higher rate of suicide, among the free,')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="A colon follows the complete clause and states the conclusion the clause has "
             "just described without naming.",
         trap="C uses a semicolon, which would be right only if what follows were a second "
              "sentence rather than a comparison."),
    dict(strand='SOC-S08', pos=8,
         carrier="Three cities were compared on one measure of crowding, and each of them "
                 "had to be adjusted in its own way: ___.",
         rule='semicolon_between_items',
         rule_span='Chicago, where the tracts are large; Boston, where they are small; and '
                   'Houston, where many of them are unbuilt',
         opts=['Chicago, where the tracts are large; Boston, where they are small; and '
               'Houston, where many of them are unbuilt',
               'Chicago: where the tracts are large: Boston: where they are small: and '
               'Houston, where many of them are unbuilt',
               'Chicago, where the tracts are large, Boston, where they are small, and '
               'Houston, where many of them are unbuilt',
               'Chicago, where the tracts are large; Boston, where they are small; and '
               'Houston, where many of them are unbuilt;'], key='A',
         faults={'B': ('wrong_mark', 'Chicago: where the tracts are large:'),
                 'C': ('missing_series_mark', 'the tracts are large, Boston'),
                 'D': ('overpunctuated', 'are unbuilt;')},
         ctx=dict(mark_ok=['semi', 'comma'], marks_expected=5),
         why="Every city brings a clause of its own after a comma, and semicolons are the "
             "only mark that can still show where one city ends.",
         trap="C leaves commas doing two jobs at once, so the three cities and their three "
              "clauses flatten into one list."),
    dict(strand='SOC-S09', pos=9,
         carrier="The move from asking people what they earn to looking the figure up in an "
                 "administrative file changed one thing about the measurement of poverty "
                 "more than anything else ___.",
         rule='colon_after_independent',
         rule_span=': the number of households that turn out to have no income at all',
         opts=[', the number of households that turn out to have no income at all',
               '; the number of households that turn out to have no income at all',
               ': the number of households that turn out to have no income at all',
               ': the number of households, that turn out to have no income, at all,'],
         key='C',
         faults={'A': ('wrong_mark', ', the number of households that turn'),
                 'B': ('wrong_mark', '; the number of households that turn'),
                 'D': ('overpunctuated', ': the number of households, that turn')},
         ctx=dict(before_independent=True, mark_ok=['colon'], marks_expected=1),
         why="However long the subject grows, the clause before the blank is finished, and "
             "a colon may then name the one thing that changed.",
         trap="B puts a semicolon before a noun phrase, which would need a clause to stand "
              "on its right."),
    dict(strand='SOC-S10', pos=10,
         carrier="A careful account of the rise in reported crime after 1965 has to "
                 "separate three things that moved at once, and the second is the one most "
                 "often forgotten: ___.",
         rule='semicolon_between_items',
         rule_span='the number of offenses committed, which rose; the share reported to the '
                   'police, which rose faster; and the share recorded by the police, which '
                   'rose fastest of all',
         opts=['the number of offenses committed, which rose; the share reported to the '
               'police, which rose faster; and the share recorded by the police, which '
               'rose fastest of all',
               'the number of offenses committed, which rose, the share reported to the '
               'police, which rose faster, and the share recorded by the police, which '
               'rose fastest of all',
               'the number of offenses committed: which rose: the share reported to the '
               'police: which rose faster: and the share recorded by the police, which '
               'rose fastest of all',
               'the number of offenses committed, which rose; the share reported to the '
               'police, which rose faster; and the share recorded by the police, which '
               'rose fastest of all;'], key='A',
         faults={'B': ('missing_series_mark', 'which rose, the share reported'),
                 'C': ('wrong_mark', 'the number of offenses committed: which rose:'),
                 'D': ('overpunctuated', 'rose fastest of all;')},
         ctx=dict(mark_ok=['semi', 'comma'], marks_expected=5),
         why="Each of the three quantities carries its own which-clause after a comma, so "
             "semicolons are needed to keep the three apart.",
         trap="B uses commas throughout, and the three quantities and their three clauses "
              "become six phrases in a row."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
