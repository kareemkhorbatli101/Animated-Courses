# -*- coding: utf-8 -*-
"""Chapter 3 - pronoun-antecedent agreement. Home domain SOC.

Key plans: HIS DBCADCBACA, BIO ACDBADCBDB, PHY BDACBADCAC, HUM CABDCBADBD,
SOC DBCADCBACA.

Every singular antecedent in this chapter is a thing rather than a person -- a
sample, a committee, a species, a statute -- because a singular "they" with a
human antecedent is accepted English and would make the item arguable. Where the
test really tests this, the antecedent is a thing.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 3

AR = dict(
    qaida="مطابقة الضمير لمرجعه تعني أن الضمير يوافق الاسم الذي ينوب عنه في العدد، وأن يكون "
          "ذلك الاسم معروفاً لا محتملاً لأكثر من وجه. فالمرجع المفرد يأخذ ضميراً مفرداً، "
          "والجمع يأخذ جمعاً، وأسماء الجمع مثل اللجنة والعيّنة تُعامل معاملة المفرد حين تعمل "
          "عملاً واحداً.",
    kayf="يضع الاختبار مرجعاً مفرداً ليس إنساناً، مثل العيّنة أو القانون أو النوع، ثمّ يضع "
         "بعده ضميراً جمعاً لأن الاسم يدلّ على كثرة في المعنى. ويضع كذلك ضمائر مبهمة مثل كلّ "
         "وأيّ، وهي مفردة دائماً وإن جاء بعدها جمع.",
    fakh="الفخّ أن المعنى يدلّ على الكثرة والنحو يدلّ على الإفراد. فاللجنة فيها أعضاء كثيرون، "
         "والعيّنة فيها أسر كثيرة، لكنّ الاسم مفرد فالضمير مفرد. والعلاج أن تنظر إلى الاسم لا "
         "إلى ما يحتويه.",
    sila="مطابقة الضمير لمرجعه تتكرّر في اختبار سات بالقدر نفسه الذي تتكرّر فيه مطابقة الفعل "
         "للفاعل، والقاعدة واحدة في البابين: ابحث عن الاسم الحاكم لا عن أقرب اسم. فإذا أتقنت "
         "الفصل الأوّل كان هذا الفصل امتداداً له لا باباً جديداً.",
)

HIS = dict(domain='HIS', note_ar=(
    "في جمل التاريخ والنظام المدني يكون المرجع في الغالب مؤسّسة أو نصّاً: الكونغرس، "
    "والمحكمة، والدستور، والقانون. وهذه كلّها مفردة في النحو وإن كانت جماعات في المعنى، "
    "وهذا موضع الخطأ."), xs=[
    dict(strand='HIS-S01', pos=1,
         carrier="The signers pledged ___ lives, fortunes and sacred honor in the "
                 "Declaration's final sentence.",
         rule='pro_plural', rule_span='their',
         opts=['its', 'his', 'whose', 'their'], key='D',
         faults={'A': ('pro_number', 'its'), 'B': ('pro_number', 'his'),
                 'C': ('pro_vague', 'whose')},
         ctx=dict(number='plur'),
         why="The antecedent is signers, a plural noun, so the pronoun that stands for it "
             "is plural.",
         trap="A takes the Declaration as the antecedent, though what is pledged belongs to "
              "the signers."),
    dict(strand='HIS-S02', pos=2,
         carrier="The veto described in Article One has ___ own limit: a two-thirds vote in "
                 "both chambers overrides it.",
         rule='pro_singular', rule_span='its',
         opts=['their', 'its', "one's", 'our'], key='B',
         faults={'A': ('pro_number', 'their'), 'C': ('pro_vague', "one's"),
                 'D': ('person_shift', 'our')},
         ctx=dict(number='sing'),
         why="The antecedent is veto, a singular thing, so the pronoun is singular.",
         trap="A is pulled plural by chambers at the end of the sentence, which is not the "
              "antecedent."),
    dict(strand='HIS-S03', pos=3,
         carrier="The naturalization laws of the early republic drew the line at race, and "
                 "___ remained in force until Congress extended eligibility in 1870.",
         rule='pro_plural', rule_span='they',
         opts=['it', 'he', 'they', 'one'], key='C',
         faults={'A': ('pro_number', 'it'), 'B': ('pro_number', 'he'),
                 'D': ('pro_vague', 'one')},
         ctx=dict(number='plur'),
         why="The antecedent is laws, a plural noun, so the subject pronoun is plural.",
         trap="A agrees with race or with the line, neither of which is what remained in "
              "force."),
    dict(strand='HIS-S04', pos=4,
         carrier="The convention that met at Philadelphia kept ___ proceedings secret, and "
                 "the only full record is a delegate's private notebook.",
         rule='pro_collective', rule_span='its',
         opts=['its', 'their', 'these', 'whose'], key='A',
         faults={'B': ('pro_number', 'their'), 'C': ('pro_number', 'these'),
                 'D': ('pro_vague', 'whose')},
         ctx=dict(number='sing'),
         why="Convention is a collective noun acting as one body, so it takes a singular "
             "pronoun.",
         trap="B is the commonest error here: a convention is plainly many people, but the "
              "noun that names it is singular."),
    dict(strand='HIS-S05', pos=5,
         carrier="Each of the Reconstruction amendments carries ___ own enforcement clause, "
                 "and the clause is what later Congresses relied on.",
         rule='pro_indefinite_singular', rule_span='its',
         opts=['their', 'these', 'our', 'its'], key='D',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'these'),
                 'C': ('person_shift', 'our')},
         ctx=dict(number='sing'),
         why="Each is an indefinite pronoun and is singular, so the pronoun that follows it "
             "is singular.",
         trap="A agrees with amendments rather than with Each, which is the actual "
              "antecedent."),
    dict(strand='HIS-S06', pos=6,
         carrier="The Interstate Commerce Act gave the new commission power to set rates, "
                 "but ___ first chairman complained that the courts had left the power "
                 "without content.",
         rule='pro_singular', rule_span='its',
         opts=['their', 'those', 'its', 'my'], key='C',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'those'),
                 'D': ('person_shift', 'my')},
         ctx=dict(number='sing'),
         why="The antecedent is commission, a singular noun, so the possessive pronoun is "
             "singular.",
         trap="A follows the sense of commission, which is a body of people, rather than "
              "its grammatical number."),
    dict(strand='HIS-S07', pos=7,
         carrier="The Montgomery Improvement Association chose a young minister as ___ "
                 "president because he had arrived too recently to have made enemies "
                 "inside the city's older organizations.",
         rule='pro_collective', rule_span='its',
         opts=['their', 'its', "one's", 'those'], key='B',
         faults={'A': ('pro_number', 'their'), 'C': ('pro_vague', "one's"),
                 'D': ('pro_number', 'those')},
         ctx=dict(number='sing'),
         why="Association is a collective noun taken here as one organization, so the "
             "pronoun is singular.",
         trap="A follows the sense of the word, which is a crowd of people, instead of its "
              "grammatical number."),
    dict(strand='HIS-S08', pos=8,
         carrier="Every one of the mandates created after the First World War had ___ own "
                 "reporting requirement, and the League received the reports without power "
                 "to act on them.",
         rule='pro_distributive', rule_span='its',
         opts=['its', 'their', 'those', 'our'], key='A',
         faults={'B': ('pro_number', 'their'), 'C': ('pro_number', 'those'),
                 'D': ('person_shift', 'our')},
         ctx=dict(number='sing'),
         why="Every one is a distributive expression and is singular, so the pronoun after "
             "it is singular.",
         trap="B agrees with mandates, the plural the of-phrase supplies, instead of with "
              "Every one."),
    dict(strand='HIS-S09', pos=9,
         carrier="Neither of the two wartime sedition acts survived ___ own decade: the "
                 "first expired of its own accord in 1801 and the second was repealed by "
                 "Congress in 1921, and the Supreme Court never passed on the "
                 "constitutionality of either one.",
         rule='pro_indefinite_singular', rule_span='its',
         opts=['their', 'these', 'its', 'my'], key='C',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'these'),
                 'D': ('person_shift', 'my')},
         ctx=dict(number='sing'),
         why="Neither is an indefinite pronoun and is singular, so the pronoun belonging to "
             "it is singular.",
         trap="A agrees with acts and with two, both of which push the reader toward a "
              "plural that Neither forbids."),
    dict(strand='HIS-S10', pos=10,
         carrier="The press that covered the first mass-circulation elections of the "
                 "1890s built ___ business on partisan readers, and a newspaper that tried "
                 "to speak to both sides of a question at once generally lost money and "
                 "closed within a few years.",
         rule='pro_collective', rule_span='its',
         opts=['its', 'their', 'these', "one's"], key='A',
         faults={'B': ('pro_number', 'their'), 'C': ('pro_number', 'these'),
                 'D': ('pro_vague', "one's")},
         ctx=dict(number='sing'),
         why="Press is a collective noun treated here as one institution, so the pronoun is "
             "singular.",
         trap="B is encouraged by readers and sides, the two plurals the sentence puts near "
              "the blank."),
])

BIO = dict(domain='BIO', note_ar=(
    "في جمل الأحياء وعلوم الأرض يكون المرجع نوعاً أو عشيرة أو فريق بحث، وكلّها مفردة في "
    "النحو ومتعدّدة في المعنى. ومع أسماء الجمع يأتي ضمير مفرد، وهذا ما يخالف السمع."), xs=[
    dict(strand='BIO-S01', pos=1,
         carrier="A trait spreads only if ___ bearers leave more offspring than the rest of "
                 "the population does.",
         rule='pro_singular', rule_span='its',
         opts=['its', 'their', 'these', 'our'], key='A',
         faults={'B': ('pro_number', 'their'), 'C': ('pro_number', 'these'),
                 'D': ('person_shift', 'our')},
         ctx=dict(number='sing'),
         why="The antecedent is trait, a singular noun, so the pronoun that stands for it is "
             "singular.",
         trap="B is pulled plural by bearers and offspring, neither of which is the "
              "antecedent."),
    dict(strand='BIO-S02', pos=2,
         carrier="Mendel's seven traits each behaved independently, and ___ ratios held "
                 "across every cross he recorded.",
         rule='pro_plural', rule_span='their',
         opts=['its', "one's", 'their', 'our'], key='C',
         faults={'A': ('pro_number', 'its'), 'B': ('pro_vague', "one's"),
                 'D': ('person_shift', 'our')},
         ctx=dict(number='plur'),
         why="The antecedent is traits, a plural noun, so the possessive pronoun is plural.",
         trap="A agrees with each, which modifies the traits but is not what the ratios "
              "belong to."),
    dict(strand='BIO-S03', pos=3,
         carrier="The inner membrane of a mitochondrion is folded so tightly that ___ holds "
                 "far more surface area than the outer one, and the folding is where the "
                 "gradient is built.",
         rule='pro_singular', rule_span='it',
         opts=['they', 'one', 'we', 'it'], key='D',
         faults={'A': ('pro_number', 'they'), 'B': ('pro_vague', 'one'),
                 'C': ('person_shift', 'we')},
         ctx=dict(number='sing'),
         why="The antecedent is membrane, a singular noun, so the subject pronoun is "
             "singular.",
         trap="A agrees with the folds the sentence implies rather than with the one "
              "membrane it names."),
    dict(strand='BIO-S04', pos=4,
         carrier="Each of the trophic levels in a lake loses about nine tenths of ___ "
                 "energy before the next level can use any of it.",
         rule='pro_indefinite_singular', rule_span='its',
         opts=['their', 'its', 'these', 'my'], key='B',
         faults={'A': ('pro_number', 'their'), 'C': ('pro_number', 'these'),
                 'D': ('person_shift', 'my')},
         ctx=dict(number='sing'),
         why="Each is an indefinite pronoun and is singular, so the possessive that follows "
             "it is singular.",
         trap="A agrees with levels, the plural inside the of-phrase, rather than with "
              "Each."),
    dict(strand='BIO-S05', pos=5,
         carrier="A population that has outrun ___ food supply does not level off gently "
                 "but crashes, and the crash can overshoot the carrying capacity downward.",
         rule='pro_collective', rule_span='its',
         opts=['its', 'their', 'those', "one's"], key='A',
         faults={'B': ('pro_number', 'their'), 'C': ('pro_number', 'those'),
                 'D': ('pro_vague', "one's")},
         ctx=dict(number='sing'),
         why="Population is a collective noun acting here as one body, so the pronoun is "
             "singular.",
         trap="B follows the sense of population, which is many organisms, instead of its "
              "grammatical number."),
    dict(strand='BIO-S06', pos=6,
         carrier="Koch's postulates were written for bacteria that grow in culture, and ___ "
                 "application to viruses, which need living cells to reproduce at all, has "
                 "never been straightforward.",
         rule='pro_plural', rule_span='their',
         opts=['its', 'my', 'whose', 'their'], key='D',
         faults={'A': ('pro_number', 'its'), 'B': ('person_shift', 'my'),
                 'C': ('pro_vague', 'whose')},
         ctx=dict(number='plur'),
         why="The antecedent is postulates, a plural noun, so the possessive pronoun is "
             "plural.",
         trap="A agrees with culture or with the singular Koch, neither of which the "
              "application belongs to."),
    dict(strand='BIO-S07', pos=7,
         carrier="Every one of the legume species that fixes nitrogen does so through "
                 "bacteria housed in nodules on ___ roots rather than through any chemistry "
                 "of its own making.",
         rule='pro_distributive', rule_span='its',
         opts=['their', 'those', 'its', 'whose'], key='C',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'those'),
                 'D': ('pro_vague', 'whose')},
         ctx=dict(number='sing'),
         why="Every one is a distributive expression and is singular, so the possessive is "
             "singular, as of its own later confirms.",
         trap="A agrees with species or bacteria, the plurals the sentence sets on either "
              "side of the blank."),
    dict(strand='BIO-S08', pos=8,
         carrier="The research team that drilled the Vostok core published ___ first "
                 "results in 1987 and went on extracting longer records from the same "
                 "borehole for another twelve years.",
         rule='pro_collective', rule_span='its',
         opts=['their', 'its', 'these', 'whose'], key='B',
         faults={'A': ('pro_number', 'their'), 'C': ('pro_number', 'these'),
                 'D': ('pro_vague', 'whose')},
         ctx=dict(number='sing'),
         why="Team is a collective noun acting as one research group, so the pronoun is "
             "singular.",
         trap="A is the natural error, because a team is many people and the results "
              "plainly had many authors."),
    dict(strand='BIO-S09', pos=9,
         carrier="Neither of the two mechanisms that geologists proposed for the Scablands, "
                 "a slow river working over millions of years and a single catastrophic "
                 "flood, could account for ___ own strongest piece of evidence without "
                 "borrowing something from the other.",
         rule='pro_indefinite_singular', rule_span='its',
         opts=['their', 'those', 'our', 'its'], key='D',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'those'),
                 'C': ('person_shift', 'our')},
         ctx=dict(number='sing'),
         why="Neither is an indefinite pronoun and is singular, so the possessive belonging "
             "to it is singular.",
         trap="A agrees with mechanisms and with two, the words that make the subject feel "
              "like a pair."),
    dict(strand='BIO-S10', pos=10,
         carrier="Each of the great ocean basins circulates water on a timescale of its "
                 "own, and a tracer released in the North Atlantic reaches the deep Pacific "
                 "only after a thousand years, which is why one measurement cannot stand "
                 "for ___.",
         rule='pro_distributive', rule_span='it',
         opts=['them', 'it', 'us', 'those'], key='B',
         faults={'A': ('pro_number', 'them'), 'C': ('person_shift', 'us'),
                 'D': ('pro_number', 'those')},
         ctx=dict(number='sing'),
         why="The antecedent is Each, a distributive expression and therefore singular, so "
             "the object pronoun is singular.",
         trap="A agrees with basins, the plural inside the of-phrase, rather than with "
              "Each."),
])

PHY = dict(domain='PHY', note_ar=(
    "في جمل العلوم الفيزيائية يكون المرجع كمّية أو جهازاً أو قانوناً، والمفرد فيها واضح، "
    "لكنّ الجملة تضع بين المرجع والضمير قائمة من القياسات بالجمع فتجرّ الضمير إليها."), xs=[
    dict(strand='PHY-S01', pos=1,
         carrier="Repeated readings of one quantity scatter, and ___ spread is what an "
                 "uncertainty reports.",
         rule='pro_plural', rule_span='their',
         opts=['its', 'their', "one's", 'our'], key='B',
         faults={'A': ('pro_number', 'its'), 'C': ('pro_vague', "one's"),
                 'D': ('person_shift', 'our')},
         ctx=dict(number='plur'),
         why="The antecedent is readings, a plural noun, so the possessive pronoun is "
             "plural.",
         trap="A agrees with quantity, the singular noun the of-phrase leaves beside the "
              "blank."),
    dict(strand='PHY-S02', pos=2,
         carrier="A book pushes down on the table, and the table pushes back on ___ just "
                 "as hard.",
         rule='pro_singular', rule_span='it',
         opts=['them', 'this', 'us', 'it'], key='D',
         faults={'A': ('pro_number', 'them'), 'B': ('pro_vague', 'this'),
                 'C': ('person_shift', 'us')},
         ctx=dict(number='sing'),
         why="The antecedent is book, a singular noun, so the object pronoun that stands "
             "for it is singular.",
         trap="A agrees with the two forces the sentence describes rather than with the one "
              "book it names."),
    dict(strand='PHY-S03', pos=3,
         carrier="The joules that a wound spring holds do not disappear when it unwinds; "
                 "___ turn into motion, and then into warmth in the bearings.",
         rule='pro_plural', rule_span='they',
         opts=['they', 'it', 'this', 'we'], key='A',
         faults={'B': ('pro_number', 'it'), 'C': ('pro_vague', 'this'),
                 'D': ('person_shift', 'we')},
         ctx=dict(number='plur'),
         why="The antecedent is joules, a plural noun, so the subject pronoun is plural.",
         trap="B agrees with spring, the singular noun nearest the semicolon, rather than "
              "with joules."),
    dict(strand='PHY-S04', pos=4,
         carrier="A gas confined in a cylinder spends ___ energy pushing the piston "
                 "outward, and the gas cools as it does so, which is why a spray can grows "
                 "cold.",
         rule='pro_collective', rule_span='its',
         opts=['their', 'these', 'its', 'my'], key='C',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'these'),
                 'D': ('person_shift', 'my')},
         ctx=dict(number='sing'),
         why="Gas is a collective noun taken here as one body of matter, so the possessive "
             "is singular, as it does so confirms.",
         trap="A follows the molecules the word implies instead of the singular noun the "
              "sentence actually uses."),
    dict(strand='PHY-S05', pos=5,
         carrier="A resistor wired in parallel with two others draws current according to "
                 "___ own value, and the three branches do not divide the current equally "
                 "unless they are equal.",
         rule='pro_singular', rule_span='its',
         opts=['their', 'its', 'those', "one's"], key='B',
         faults={'A': ('pro_number', 'their'), 'C': ('pro_number', 'those'),
                 'D': ('pro_vague', "one's")},
         ctx=dict(number='sing'),
         why="The antecedent is resistor, a singular noun, so the possessive pronoun is "
             "singular.",
         trap="A agrees with others or with branches, the plurals the sentence keeps in "
              "view throughout."),
    dict(strand='PHY-S06', pos=6,
         carrier="Each of the colors in a rainbow leaves the raindrop at ___ own angle, "
                 "which is why the band is spread at all and why the order never varies "
                 "from one rainbow to the next.",
         rule='pro_indefinite_singular', rule_span='its',
         opts=['its', 'their', 'these', 'whose'], key='A',
         faults={'B': ('pro_number', 'their'), 'C': ('pro_number', 'these'),
                 'D': ('pro_vague', 'whose')},
         ctx=dict(number='sing'),
         why="Each is an indefinite pronoun, singular however many colors follow it, so "
             "the possessive it governs is singular too.",
         trap="B agrees with colors, the plural the of-phrase supplies, rather than with "
              "Each."),
    dict(strand='PHY-S07', pos=7,
         carrier="The committee that approves the names of new elements takes ___ time: the "
                 "gap between a claim of discovery and an accepted name has run to more "
                 "than a decade.",
         rule='pro_collective', rule_span='its',
         opts=['their', 'those', 'whose', 'its'], key='D',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'those'),
                 'C': ('pro_vague', 'whose')},
         ctx=dict(number='sing'),
         why="Committee is a collective noun acting here as one body, so the possessive "
             "pronoun is singular.",
         trap="A follows the sense of a committee, which is several chemists, instead of "
              "the number of the word."),
    dict(strand='PHY-S08', pos=8,
         carrier="Every one of the alloys that an engineer may specify for a bridge has ___ "
                 "own fatigue limit, and a load below that limit may be repeated without "
                 "end while a load above it will eventually open a crack.",
         rule='pro_distributive', rule_span='its',
         opts=['their', 'those', 'its', 'our'], key='C',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'those'),
                 'D': ('person_shift', 'our')},
         ctx=dict(number='sing'),
         why="Every one is a distributive expression and is singular, so the possessive is "
             "singular.",
         trap="A agrees with alloys, the plural the of-phrase supplies, rather than with "
              "Every one."),
    dict(strand='PHY-S09', pos=9,
         carrier="The sample that a laboratory dates by potassium and argon must be sealed "
                 "against the air from the moment ___ is taken, because the argon that "
                 "matters is a gas and the atmosphere contains a great deal of it already.",
         rule='pro_collective', rule_span='it',
         opts=['it', 'they', 'one', 'we'], key='A',
         faults={'B': ('pro_number', 'they'), 'C': ('pro_vague', 'one'),
                 'D': ('person_shift', 'we')},
         ctx=dict(number='sing'),
         why="The antecedent is sample, a collective noun treated as one body of rock, so "
             "the subject pronoun is singular.",
         trap="B agrees with the many grains a sample contains rather than with the "
              "singular noun that names it."),
    dict(strand='PHY-S10', pos=10,
         carrier="Each of the rungs on the distance ladder is calibrated against the rung "
                 "below ___, so an error in the nearest step propagates outward to every "
                 "galaxy whose distance rests on the step above.",
         rule='pro_indefinite_singular', rule_span='it',
         opts=['them', 'us', 'it', 'those'], key='C',
         faults={'A': ('pro_number', 'them'), 'B': ('person_shift', 'us'),
                 'D': ('pro_number', 'those')},
         ctx=dict(number='sing'),
         why="The antecedent is Each, an indefinite expression and therefore singular, so "
             "the object pronoun is singular.",
         trap="A agrees with rungs, the plural inside the of-phrase, rather than with "
              "Each."),
])

HUM = dict(domain='HUM', note_ar=(
    "في جمل الإنسانيات يكون المرجع عملاً أو شخصية أو جمهوراً، ويقع الخطأ حين يصير الراوي "
    "والشخصية كلاهما مرجعاً محتملاً للضمير، فيبقى المرجع مبهماً لا مخالفاً في العدد."), xs=[
    dict(strand='HUM-S01', pos=1,
         carrier="An unreliable narrator does not lie outright; ___ account simply leaves "
                 "out what would damage it.",
         rule='pro_singular', rule_span='its',
         opts=['their', 'these', 'its', 'our'], key='C',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'these'),
                 'D': ('person_shift', 'our')},
         ctx=dict(number='sing'),
         why="The antecedent is narrator, a singular noun, so the possessive pronoun is "
             "singular.",
         trap="A is the form a reader reaches for when a narrator's gender is unstated, but "
              "the noun is singular."),
    dict(strand='HUM-S02', pos=2,
         carrier="The motives a novelist gives a character are rarely stated outright, and "
                 "___ force comes from what the character does instead.",
         rule='pro_plural', rule_span='their',
         opts=['their', 'its', "one's", 'our'], key='A',
         faults={'B': ('pro_number', 'its'), 'C': ('pro_vague', "one's"),
                 'D': ('person_shift', 'our')},
         ctx=dict(number='plur'),
         why="The antecedent is motives, a plural noun, so the possessive pronoun is "
             "plural.",
         trap="B agrees with character or novelist, the singular nouns the clause leaves "
              "near the blank."),
    dict(strand='HUM-S03', pos=3,
         carrier="A metaphor wears out when ___ two halves stop being felt as two, and the "
                 "phrase passes into the language as a single word.",
         rule='pro_singular', rule_span='its',
         opts=['their', 'its', 'these', 'my'], key='B',
         faults={'A': ('pro_number', 'their'), 'C': ('pro_number', 'these'),
                 'D': ('person_shift', 'my')},
         ctx=dict(number='sing'),
         why="The antecedent is metaphor, a singular noun, so the possessive is singular "
             "even though two halves follows.",
         trap="A is pulled plural by two halves, which is what is possessed rather than "
              "what possesses."),
    dict(strand='HUM-S04', pos=4,
         carrier="The sonnet holds ___ shape across four centuries of English because the "
                 "turn at the ninth line gives a writer somewhere to put a second thought.",
         rule='pro_collective', rule_span='its',
         opts=['their', 'those', "one's", 'its'], key='D',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'those'),
                 'C': ('pro_vague', "one's")},
         ctx=dict(number='sing'),
         why="Sonnet names a form taken here as one thing, a collective singular, so the "
             "possessive is singular.",
         trap="A agrees with the many sonnets the word implies rather than with the "
              "singular noun the sentence uses."),
    dict(strand='HUM-S05', pos=5,
         carrier="Each of the entrances to the Elizabethan stage served ___ own purpose: "
                 "the trap for the underworld, the gallery above for the heavens.",
         rule='pro_indefinite_singular', rule_span='its',
         opts=['their', 'these', 'its', 'whose'], key='C',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'these'),
                 'D': ('pro_vague', 'whose')},
         ctx=dict(number='sing'),
         why="Each is singular, being an indefinite pronoun, so the possessive that "
             "depends on it is singular whatever the of-phrase names.",
         trap="A agrees with entrances, the plural inside the of-phrase, rather than with "
              "Each."),
    dict(strand='HUM-S06', pos=6,
         carrier="The conventions of a genre are not rules a writer must obey but "
                 "expectations ___ readers bring, and a book that breaks them relies on "
                 "their being there to break.",
         rule='pro_plural', rule_span='their',
         opts=['its', 'their', 'my', 'whose'], key='B',
         faults={'A': ('pro_number', 'its'), 'C': ('person_shift', 'my'),
                 'D': ('pro_vague', 'whose')},
         ctx=dict(number='plur'),
         why="The antecedent is conventions, a plural noun, so the possessive pronoun is "
             "plural.",
         trap="A agrees with genre, the singular noun the of-phrase leaves near the front "
              "of the sentence."),
    dict(strand='HUM-S07', pos=7,
         carrier="The academy that set the standards of French painting for two centuries "
                 "ranked ___ subjects, and a history painting outranked a landscape however "
                 "well the landscape was made.",
         rule='pro_collective', rule_span='its',
         opts=['its', 'their', 'those', 'whose'], key='A',
         faults={'B': ('pro_number', 'their'), 'C': ('pro_number', 'those'),
                 'D': ('pro_vague', 'whose')},
         ctx=dict(number='sing'),
         why="Academy is a collective noun acting here as one institution, so the "
             "possessive is singular.",
         trap="B follows the sense of an academy, which is a body of painters, instead of "
              "the number of the word."),
    dict(strand='HUM-S08', pos=8,
         carrier="Neither of the two endings Beethoven wrote for the quartet announces ___ "
                 "own arrival clearly, which is why a listener who does not know the piece "
                 "cannot tell which one was played.",
         rule='pro_indefinite_singular', rule_span='its',
         opts=['their', 'those', 'our', 'its'], key='D',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'those'),
                 'C': ('person_shift', 'our')},
         ctx=dict(number='sing'),
         why="Neither is an indefinite pronoun and is singular, so the possessive is "
             "singular despite the two endings.",
         trap="A agrees with endings and with two, the words that make the subject sound "
              "like a pair."),
    dict(strand='HUM-S09', pos=9,
         carrier="Every one of the arcades along the square was built to a different depth, "
                 "and ___ carries a shadow of its own at noon, so the facade that looks "
                 "uniform in a photograph is not uniform at all.",
         rule='pro_distributive', rule_span='it',
         opts=['they', 'it', 'one', 'we'], key='B',
         faults={'A': ('pro_number', 'they'), 'C': ('pro_vague', 'one'),
                 'D': ('person_shift', 'we')},
         ctx=dict(number='sing'),
         why="The antecedent is Every one, a distributive expression and therefore "
             "singular, so the subject pronoun is singular.",
         trap="A agrees with arcades, the plural the of-phrase supplies, rather than with "
              "Every one."),
    dict(strand='HUM-S10', pos=10,
         carrier="The school of criticism that held a poem's meaning to be settled by what "
                 "is on the page lost ___ hold on the discipline within a generation, "
                 "though the habits of close reading that it taught outlasted the argument "
                 "that justified them.",
         rule='pro_collective', rule_span='its',
         opts=['their', 'those', 'my', 'its'], key='D',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'those'),
                 'C': ('person_shift', 'my')},
         ctx=dict(number='sing'),
         why="School is a collective noun taken here as one movement, so the possessive is "
             "singular, as it taught later confirms.",
         trap="A follows the many critics a school contains instead of the singular noun "
              "that names the school."),
])

SOC = dict(domain='SOC', note_ar=(
    "في جمل العلوم الاجتماعية يكون المرجع عيّنة أو مجموعة أو نسبة، وكلّها أسماء مفردة تدلّ "
    "على كثرة، ومعها ضمائر مبهمة مثل كلّ ولا أحد. وهذا هو المجال الأصلي لهذا الفصل، وفيه "
    "تجتمع أصعب صورتين للقاعدة."), xs=[
    dict(strand='SOC-S01', pos=1,
         carrier="A questionnaire shapes ___ own answers, and a question about income "
                 "placed last gets refused more often than the same question placed first.",
         rule='pro_singular', rule_span='its',
         opts=['their', 'these', 'our', 'its'], key='D',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'these'),
                 'C': ('person_shift', 'our')},
         ctx=dict(number='sing'),
         why="The antecedent is questionnaire, a singular noun, so the possessive pronoun "
             "is singular.",
         trap="A is pulled plural by answers, which is what is shaped rather than what "
              "shapes."),
    dict(strand='SOC-S02', pos=2,
         carrier="The two arms of a randomized trial differ in one thing only, and ___ "
                 "comparability is what the drawing of lots is for.",
         rule='pro_plural', rule_span='their',
         opts=['its', 'their', "one's", 'our'], key='B',
         faults={'A': ('pro_number', 'its'), 'C': ('pro_vague', "one's"),
                 'D': ('person_shift', 'our')},
         ctx=dict(number='plur'),
         why="The antecedent is arms, a plural noun, so the possessive pronoun is plural.",
         trap="A agrees with trial, the singular noun the of-phrase leaves beside the "
              "blank."),
    dict(strand='SOC-S03', pos=3,
         carrier="A confounder earns ___ name by causing both of the things that look "
                 "related, and controlling for it makes the apparent relation shrink or "
                 "vanish.",
         rule='pro_collective', rule_span='its',
         opts=['their', 'these', 'its', 'my'], key='C',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'these'),
                 'D': ('person_shift', 'my')},
         ctx=dict(number='sing'),
         why="The antecedent is confounder, a singular noun treated as one collective "
             "cause, so the possessive is singular.",
         trap="A agrees with both of the things, the plural the sentence puts after the "
              "blank."),
    dict(strand='SOC-S04', pos=4,
         carrier="Each of the three averages reports ___ own fact about a distribution, and "
                 "a distribution with a long tail separates them by a wide margin.",
         rule='pro_indefinite_singular', rule_span='its',
         opts=['its', 'their', 'those', "one's"], key='A',
         faults={'B': ('pro_number', 'their'), 'C': ('pro_number', 'those'),
                 'D': ('pro_vague', "one's")},
         ctx=dict(number='sing'),
         why="Each is an indefinite pronoun and is singular, so the possessive after it is "
             "singular.",
         trap="B agrees with averages, the plural inside the of-phrase, rather than with "
              "Each."),
    dict(strand='SOC-S05', pos=5,
         carrier="Every one of the incentives a survey can offer changes who answers as "
                 "well as how many, and ___ effect on the two is not the same.",
         rule='pro_distributive', rule_span='its',
         opts=['their', 'these', 'whose', 'its'], key='D',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'these'),
                 'C': ('pro_vague', 'whose')},
         ctx=dict(number='sing'),
         why="Every one is distributive, taking the incentives one at a time, and is "
             "therefore singular, so the possessive is singular.",
         trap="A agrees with incentives, the plural the of-phrase supplies, rather than "
              "with Every one."),
    dict(strand='SOC-S06', pos=6,
         carrier="The group in an Asch experiment does not argue with the subject or press "
                 "___ case; the members simply give the wrong answer calmly and in turn.",
         rule='pro_collective', rule_span='its',
         opts=['their', 'those', 'its', 'whose'], key='C',
         faults={'A': ('pro_number', 'their'), 'B': ('pro_number', 'those'),
                 'D': ('pro_vague', 'whose')},
         ctx=dict(number='sing'),
         why="Group is a collective noun acting here as one body, so the possessive is "
             "singular, even though members in the next clause is plural.",
         trap="A agrees with members, which the sentence supplies deliberately on the far "
              "side of the semicolon."),
    dict(strand='SOC-S07', pos=7,
         carrier="Each of the great migrations to American cities was driven by work rather "
                 "than by the city itself, and ___ direction reversed as soon as the work "
                 "moved out to the edge.",
         rule='pro_indefinite_singular', rule_span='its',
         opts=['their', 'its', 'those', 'our'], key='B',
         faults={'A': ('pro_number', 'their'), 'C': ('pro_number', 'those'),
                 'D': ('person_shift', 'our')},
         ctx=dict(number='sing'),
         why="Each is an indefinite pronoun and is singular, as was earlier in the sentence "
             "shows, so the possessive it governs is singular.",
         trap="A agrees with migrations, the plural the of-phrase supplies, rather than "
              "with Each."),
    dict(strand='SOC-S08', pos=8,
         carrier="Every one of the measures of unemployment that the monthly report "
                 "publishes counts a different set of people, and ___ moves differently in "
                 "a recession from the headline figure.",
         rule='pro_distributive', rule_span='it',
         opts=['it', 'they', 'one', 'we'], key='A',
         faults={'B': ('pro_number', 'they'), 'C': ('pro_vague', 'one'),
                 'D': ('person_shift', 'we')},
         ctx=dict(number='sing'),
         why="The antecedent is Every one, a distributive expression and therefore "
             "singular, as counts confirms, so the subject pronoun is singular.",
         trap="B agrees with measures or people, the plurals the sentence crowds in front "
              "of the blank."),
    dict(strand='SOC-S09', pos=9,
         carrier="The commission that reports on the distribution of income in a country "
                 "must choose between tax records and household surveys, and ___ has to "
                 "defend the choice, because the two sources disagree most about the "
                 "households at the very top.",
         rule='pro_collective', rule_span='it',
         opts=['they', 'this', 'it', 'we'], key='C',
         faults={'A': ('pro_number', 'they'), 'B': ('pro_vague', 'this'),
                 'D': ('person_shift', 'we')},
         ctx=dict(number='sing'),
         why="Commission is a collective noun acting as one body, so the subject pronoun is "
             "singular, as has confirms.",
         trap="A follows the several commissioners the word implies rather than the "
              "singular noun that names them."),
    dict(strand='SOC-S10', pos=10,
         carrier="Each of the heuristics that Tversky and Kahneman described works well "
                 "enough most of the time, which is why people use ___ at all, and the "
                 "systematic error it produces is the price of a judgment made quickly.",
         rule='pro_indefinite_singular', rule_span='it',
         opts=['it', 'them', 'us', 'those'], key='A',
         faults={'B': ('pro_number', 'them'), 'C': ('person_shift', 'us'),
                 'D': ('pro_number', 'those')},
         ctx=dict(number='sing'),
         why="The antecedent is Each, an indefinite expression and therefore singular, as "
             "works shows, so the object pronoun is singular.",
         trap="B agrees with heuristics, the plural inside the of-phrase, rather than with "
              "Each."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
