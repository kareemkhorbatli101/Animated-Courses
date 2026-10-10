# -*- coding: utf-8 -*-
"""Chapter 1 - subject-verb agreement. Home domain BIO.

Key plans, from the spec: HIS BDACBADCAC, BIO CABDCBADBD, PHY DBCADCBACA,
HUM ACDBADCBDB, SOC BDACBADCAC.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 1

AR = dict(
    qaida="مطابقة الفعل للفاعل تعني أن الفعل يوافق فاعله في العدد، لا يوافق أقرب اسم إليه. "
          "الفاعل المفرد يأخذ فعلاً مفرداً، والفاعل الجمع يأخذ فعلاً جمعاً، وما يقع بين الفاعل "
          "والفعل من عبارات جارّة أو جمل وصفية لا يغيّر العدد مهما طال.",
    kayf="يضع الاختبار بين الفاعل والفعل عبارة طويلة تنتهي باسم مخالف للفاعل في العدد، فيختار "
         "الطالب الفعل الذي يوافق الاسم القريب. ويستعمل كذلك أسماء الجمع مثل اللجنة والفريق، "
         "والضمائر المبهمة مثل كلّ وأيّ، والترتيب المقلوب الذي يأتي فيه الفاعل بعد الفعل.",
    fakh="الفخّ الأكبر هو الاسم القريب. حين تقرأ الجملة بسرعة تسمع آخر اسم قبل الفراغ فتوافقه، "
         "وهو في الغالب ليس الفاعل. العلاج أن تحذف ما بين الفاعل والفعل ثم تقرأ الجملة من جديد.",
    sila="مطابقة الفعل للفاعل من أكثر ما يتكرر في قسم قواعد الإنجليزية المعيارية في اختبار سات، "
         "وهي أرخص الدرجات لأن القاعدة واحدة والعلاج ميكانيكي: احذف العبارة المعترضة، وجد الفاعل، "
         "ثم طابق. وتعود القاعدة نفسها في مطابقة الضمير لمرجعه في الفصل الثالث.",
)

HIS = dict(domain='HIS', note_ar=(
    "جمل التاريخ والنظام المدني مليئة بالعبارات المعترضة التي تسمّي الأشخاص والمناصب والتواريخ، "
    "وهذه العبارات هي بيت الفخّ في هذا الفصل: تفصل الفاعل عن فعله بأسطر، وتضع قبل الفراغ اسماً "
    "مخالفاً له في العدد."), xs=[
    dict(strand='HIS-S01', pos=1,
         carrier="The grievances ___ the longest single section of the Declaration of "
                 "Independence, by far.",
         rule='agr_plural', rule_span='form',
         opts=['forms', 'form', 'has formed', 'is forming'], key='B',
         faults={'A': ('wrong_number', 'forms'), 'C': ('wrong_number', 'has formed'),
                 'D': ('wrong_aspect', 'is forming')},
         ctx=dict(number='plur'),
         why="The subject is the plural noun grievances standing immediately before the "
             "blank, so the verb takes the plural form.",
         trap="A is tempting because section, the nearest singular noun, follows the blank "
              "and seems to govern the verb."),
    dict(strand='HIS-S02', pos=2,
         carrier="The Constitution ___ three branches and sets out what each one may and "
                 "may not do.",
         rule='agr_singular', rule_span='establishes',
         opts=['have established', 'establish', 'is establishing', 'establishes'], key='D',
         faults={'A': ('wrong_number', 'have established'),
                 'B': ('wrong_number', 'establish'),
                 'C': ('wrong_aspect', 'is establishing')},
         ctx=dict(number='sing'),
         why="The subject is Constitution, a singular noun, so the verb takes the singular "
             "form even though branches is plural.",
         trap="B drops the third-person s, which sounds right to an ear used to plural "
              "subjects like laws or powers."),
    dict(strand='HIS-S03', pos=3,
         carrier="The records that survive from the first federal census ___ a population "
                 "of just under four million people in sixteen states.",
         rule='agr_plural', rule_span='have shown',
         opts=['have shown', 'shows', 'has shown', 'showed'], key='A',
         faults={'B': ('agree_with_nearest', 'shows'), 'C': ('wrong_number', 'has shown'),
                 'D': ('tense_shift', 'showed')},
         ctx=dict(number='plur'),
         why="The plural subject is records; census is the object of a preposition and "
             "cannot govern the verb, so the plural form is right.",
         trap="B agrees with census, the singular noun nearest the blank, rather than with "
              "the plural subject records."),
    dict(strand='HIS-S04', pos=4,
         carrier="The argument that slavery violated the natural rights of all men ___ at "
                 "the center of abolitionist pamphlets for forty years.",
         rule='agr_intervening', rule_span='has remained',
         opts=['have remained', 'remain', 'has remained', 'is remaining'], key='C',
         faults={'A': ('agree_with_nearest', 'have remained'),
                 'B': ('agree_with_nearest', 'remain'),
                 'D': ('wrong_aspect', 'is remaining')},
         ctx=dict(number='sing'),
         why="The subject is argument, and the clause between it and the verb is "
             "intervening material that cannot change the number.",
         trap="A takes its number from men, the plural noun that the intervening clause "
              "leaves nearest the blank."),
    dict(strand='HIS-S05', pos=5,
         carrier="The Freedmen's Bureau and the Union army together ___ the only federal "
                 "presence in much of the South after 1865.",
         rule='agr_compound', rule_span='were',
         opts=['was', 'were', 'has been', 'had been'], key='B',
         faults={'A': ('wrong_number', 'was'), 'C': ('wrong_number', 'has been'),
                 'D': ('tense_shift', 'had been')},
         ctx=dict(number='plur'),
         why="Two subjects joined by and make a compound subject, which is plural however "
             "singular each part may be.",
         trap="A agrees with army alone, the noun closest to the blank, and misses that the "
              "subject is compound."),
    dict(strand='HIS-S06', pos=6,
         carrier="The committee that Congress appointed to investigate the Chicago "
                 "packinghouses ___ unanimous in its findings, and the Meat Inspection Act "
                 "followed within a few months of the report.",
         rule='agr_collective', rule_span='was',
         opts=['was', 'is', 'were', 'have been'], key='A',
         faults={'B': ('tense_shift', 'is'), 'C': ('wrong_number', 'were'),
                 'D': ('agree_with_nearest', 'have been')},
         ctx=dict(number='sing'),
         why="Committee is a collective noun acting here as one body, so it takes a "
             "singular verb and the singular pronoun its.",
         trap="D agrees with packinghouses, the plural noun the relative clause leaves "
              "beside the blank."),
    dict(strand='HIS-S07', pos=7,
         carrier="The series of sit-ins that students began at lunch counters across the "
                 "upper South in 1960 ___ organized by people who had trained together in "
                 "workshops on nonviolence.",
         rule='agr_intervening', rule_span='was',
         opts=['were', 'have been', 'are', 'was'], key='D',
         faults={'A': ('agree_with_nearest', 'were'), 'B': ('wrong_number', 'have been'),
                 'C': ('wrong_number', 'are')},
         ctx=dict(number='sing'),
         why="The subject is series, a singular noun; everything from of to 1960 is "
             "intervening material and leaves the number alone.",
         trap="A agrees with sit-ins, which the intervening phrase makes the loudest plural "
              "in the sentence."),
    dict(strand='HIS-S08', pos=8,
         carrier="Each of the mandates that the League of Nations created after the First "
                 "World War ___ administered by a European power required to report "
                 "annually on its progress.",
         rule='agr_indefinite', rule_span='was',
         opts=['were', 'has been', 'was', 'is'], key='C',
         faults={'A': ('wrong_number', 'were'), 'B': ('tense_shift', 'has been'),
                 'D': ('tense_shift', 'is')},
         ctx=dict(number='sing'),
         why="Each is an indefinite pronoun and is singular, so the verb is singular "
             "however many mandates the phrase after it names.",
         trap="A agrees with mandates and ignores Each, the pronoun that is the real "
              "subject of the sentence."),
    dict(strand='HIS-S09', pos=9,
         carrier="Among the powers that Congress has claimed in wartime and the courts have "
                 "been reluctant to review ___ the suspension of habeas corpus, the "
                 "internment of civilians, and the censorship of the mails, each of which "
                 "was later called a mistake.",
         rule='agr_inverted', rule_span='are',
         opts=['are', 'is', 'has been', 'was being'], key='A',
         faults={'B': ('wrong_number', 'is'), 'C': ('agree_with_nearest', 'has been'),
                 'D': ('wrong_aspect', 'was being')},
         ctx=dict(number='plur'),
         why="The order is inverted: the subject is the list of three powers that follows "
             "the verb, and a list of three is plural.",
         trap="B agrees with review, the singular word the inverted order leaves directly "
              "in front of the blank."),
    dict(strand='HIS-S10', pos=10,
         carrier="The claim, repeated in editorials across the country and tested by "
                 "pollsters only decades later, that a newspaper's endorsement moves a "
                 "measurable number of votes ___ by evidence strong enough to settle the "
                 "question either way.",
         rule='agr_intervening', rule_span='has never been supported',
         opts=['have never been supported', 'were never supported',
               'has never been supported', 'is never being supported'], key='C',
         faults={'A': ('agree_with_nearest', 'have never been supported'),
                 'B': ('wrong_number', 'were never supported'),
                 'D': ('wrong_aspect', 'is never being supported')},
         ctx=dict(number='sing'),
         why="The subject is claim; two intervening elements, a participial phrase and a "
             "that-clause, stand between it and the verb without changing its number.",
         trap="A agrees with votes, the plural noun the intervening that-clause leaves "
              "immediately before the blank."),
])

BIO = dict(domain='BIO', note_ar=(
    "جمل الأحياء وعلوم الأرض تكثر فيها أسماء الجمع التقنية مثل البكتيريا والأنواع والمعطيات، "
    "وهي مفردة في العربية وجمع في الإنجليزية، فتصير المطابقة اختباراً للمعرفة بالاسم نفسه لا "
    "بالقاعدة وحدها. وهذا هو المجال الأصلي لهذا الفصل."), xs=[
    dict(strand='BIO-S01', pos=1,
         carrier="The finches Darwin collected in the Galapagos ___ in the depth and shape "
                 "of their beaks ever since the islands rose.",
         rule='agr_plural', rule_span='have differed',
         opts=['differs', 'has differed', 'have differed', 'is differing'], key='C',
         faults={'A': ('wrong_number', 'differs'), 'B': ('wrong_number', 'has differed'),
                 'D': ('wrong_aspect', 'is differing')},
         ctx=dict(number='plur'),
         why="Finches is the plural subject; Galapagos is part of a prepositional phrase, "
             "so the verb takes the plural form.",
         trap="A agrees with Galapagos, which looks singular and sits immediately before "
              "the blank."),
    dict(strand='BIO-S02', pos=2,
         carrier="Mendel's ratio of three to one ___ in every one of the seven traits he "
                 "followed.",
         rule='agr_singular', rule_span='appears',
         opts=['appears', 'appear', 'have appeared', 'are appearing'], key='A',
         faults={'B': ('wrong_number', 'appear'), 'C': ('wrong_number', 'have appeared'),
                 'D': ('wrong_aspect', 'are appearing')},
         ctx=dict(number='sing'),
         why="The subject is ratio, a singular noun; three, one and traits all sit inside "
             "phrases that cannot govern the verb, so the singular form is right.",
         trap="C agrees with traits, the plural noun at the end of the sentence, and treats "
              "ratio as if it were plural."),
    dict(strand='BIO-S03', pos=3,
         carrier="The number of molecules of ATP that a single glucose molecule yields in "
                 "aerobic respiration ___ close to thirty.",
         rule='agr_intervening', rule_span='is',
         opts=['are', 'is', 'have been', 'were'], key='B',
         faults={'A': ('agree_with_nearest', 'are'), 'C': ('wrong_number', 'have been'),
                 'D': ('wrong_number', 'were')},
         ctx=dict(number='sing'),
         why="The subject is number; the long intervening phrase ends in respiration and "
             "molecules, but neither can change a singular subject.",
         trap="A agrees with molecules, the plural noun the intervening phrase plants in "
              "the middle of the sentence."),
    dict(strand='BIO-S04', pos=4,
         carrier="A wolf pack that hunts elk in Yellowstone ___ six to ten animals and "
                 "holds a territory of several hundred square kilometers.",
         rule='agr_collective', rule_span='numbers',
         opts=['number', 'have numbered', 'are numbering', 'numbers'], key='D',
         faults={'A': ('wrong_number', 'number'),
                 'B': ('agree_with_nearest', 'have numbered'),
                 'C': ('wrong_aspect', 'are numbering')},
         ctx=dict(number='sing'),
         why="Pack is a collective noun treated here as one hunting unit, so it takes a "
             "singular verb like the later holds.",
         trap="B agrees with elk or animals and treats the collective noun pack as though "
              "it were plural."),
    dict(strand='BIO-S05', pos=5,
         carrier="The set of equations that ecologists use to predict how fast a population "
                 "will reach its limit ___ on only three measured quantities.",
         rule='agr_intervening', rule_span='depends',
         opts=['depend', 'have depended', 'depends', 'are depending'], key='C',
         faults={'A': ('agree_with_nearest', 'depend'),
                 'B': ('wrong_number', 'have depended'),
                 'D': ('wrong_aspect', 'are depending')},
         ctx=dict(number='sing'),
         why="The subject is set; the intervening relative clause runs eleven words and "
             "ends in limit, but set is still singular.",
         trap="A agrees with equations, the plural noun the intervening clause opens with, "
              "and reads naturally aloud."),
    dict(strand='BIO-S06', pos=6,
         carrier="Neither of the two cholera outbreaks that John Snow mapped in London ___ "
                 "explained by the prevailing theory that disease rose from bad air, and "
                 "both were explained by water.",
         rule='agr_indefinite', rule_span='was',
         opts=['were', 'was', 'have been', 'are being'], key='B',
         faults={'A': ('wrong_number', 'were'), 'C': ('agree_with_nearest', 'have been'),
                 'D': ('wrong_aspect', 'are being')},
         ctx=dict(number='sing'),
         why="Neither is an indefinite pronoun and is singular, so the verb is singular "
             "even though two outbreaks are named.",
         trap="A agrees with outbreaks and is helped along by were later in the sentence, "
              "which has a plural subject of its own."),
    dict(strand='BIO-S07', pos=7,
         carrier="Lightning and the bacteria that live in the root nodules of legumes ___ "
                 "the two natural routes by which nitrogen enters the soil in a form plants "
                 "can use.",
         rule='agr_compound', rule_span='are',
         opts=['are', 'is', 'has been', 'were'], key='A',
         faults={'B': ('wrong_number', 'is'), 'C': ('agree_with_nearest', 'has been'),
                 'D': ('tense_shift', 'were')},
         ctx=dict(number='plur'),
         why="Lightning and the bacteria make a compound subject joined by and, so the verb "
             "is plural whatever the number of either part.",
         trap="B agrees with legumes or with lightning alone and misses the compound "
              "subject that and creates."),
    dict(strand='BIO-S08', pos=8,
         carrier="In the ice cores drilled at Vostok, beneath eight hundred meters of "
                 "compacted snow, ___ bubbles of ancient air whose carbon dioxide can be "
                 "measured directly.",
         rule='agr_inverted', rule_span='are',
         opts=['is', 'has been', 'was being', 'are'], key='D',
         faults={'A': ('wrong_number', 'is'), 'B': ('agree_with_nearest', 'has been'),
                 'C': ('wrong_aspect', 'was being')},
         ctx=dict(number='plur'),
         why="The order is inverted and the subject, bubbles, follows the verb, so the verb "
             "is plural.",
         trap="A agrees with snow, the singular noun the inverted order leaves directly "
              "before the blank."),
    dict(strand='BIO-S09', pos=9,
         carrier="The rate at which the Atlantic widens, measured first by magnetic stripes "
                 "on the seafloor and later by satellites that can detect a change of a few "
                 "millimeters a year, ___ about two and a half centimeters annually.",
         rule='agr_intervening', rule_span='is',
         opts=['are', 'is', 'have been', 'had been'], key='B',
         faults={'A': ('agree_with_nearest', 'are'), 'C': ('wrong_number', 'have been'),
                 'D': ('tense_shift', 'had been')},
         ctx=dict(number='sing'),
         why="The subject is rate; two intervening phrases, twenty-five words of them, end "
             "in millimeters and year without touching a singular subject.",
         trap="A agrees with satellites or millimeters, the plurals the intervening "
              "material crowds in front of the blank."),
    dict(strand='BIO-S10', pos=10,
         carrier="The team of glaciologists who flew the radar surveys over the Greenland "
                 "ice sheet, and whose results appeared in three separate papers, ___ that "
                 "the base of the ice is melting faster than the surface.",
         rule='agr_collective', rule_span='has concluded',
         opts=['have concluded', 'conclude', 'are concluding', 'has concluded'], key='D',
         faults={'A': ('agree_with_nearest', 'have concluded'),
                 'B': ('wrong_number', 'conclude'),
                 'C': ('wrong_aspect', 'are concluding')},
         ctx=dict(number='sing'),
         why="Team is a collective noun acting as one research group, so it takes a "
             "singular verb; whose results avoids committing the sentence to a plural.",
         trap="A is the hardest to resist because glaciologists stands next to the blank "
              "and the group plainly contains many people."),
])

PHY = dict(domain='PHY', note_ar=(
    "جمل العلوم الفيزيائية مبنية على الكميات والوحدات، وفاعلها كثيراً ما يكون اسماً مفرداً مثل "
    "المقدار أو المعدّل أو عدم اليقين، يتبعه حرف جرّ يجرّ جمعاً من القياسات. فالفخّ هنا هو الجمع "
    "الذي يسبق الفعل مباشرة وليس هو الفاعل."), xs=[
    dict(strand='PHY-S01', pos=1,
         carrier="The uncertainty in a single measurement ___ with the square root of the "
                 "number of readings taken.",
         rule='agr_singular', rule_span='falls',
         opts=['fall', 'have fallen', 'are falling', 'falls'], key='D',
         faults={'A': ('wrong_number', 'fall'), 'B': ('wrong_number', 'have fallen'),
                 'C': ('wrong_aspect', 'are falling')},
         ctx=dict(number='sing'),
         why="Uncertainty is the singular subject; readings sits inside a prepositional "
             "phrase and cannot govern the verb.",
         trap="B agrees with readings, the plural noun standing at the end of the sentence."),
    dict(strand='PHY-S02', pos=2,
         carrier="The forces on a book resting on a table ___ equal in size and opposite in "
                 "direction.",
         rule='agr_plural', rule_span='are',
         opts=['is', 'are', 'has been', 'was being'], key='B',
         faults={'A': ('wrong_number', 'is'), 'C': ('agree_with_nearest', 'has been'),
                 'D': ('wrong_aspect', 'was being')},
         ctx=dict(number='plur'),
         why="Forces is the plural subject, so the verb is plural; book and table are both "
             "inside prepositional phrases.",
         trap="C agrees with table, the singular noun the two prepositional phrases leave "
              "next to the blank."),
    dict(strand='PHY-S03', pos=3,
         carrier="The energy stored in the spring of a wound clock ___ into the motion of "
                 "the hands and, in the end, into heat in the bearings.",
         rule='agr_singular', rule_span='goes',
         opts=['go', 'have gone', 'goes', 'are going'], key='C',
         faults={'A': ('wrong_number', 'go'), 'B': ('wrong_number', 'have gone'),
                 'D': ('wrong_aspect', 'are going')},
         ctx=dict(number='sing'),
         why="Energy is a singular noun and the subject; clock, hands and bearings all sit "
             "inside phrases, so the singular form is right.",
         trap="B agrees with hands and is helped by the plural bearings at the close of the "
              "sentence."),
    dict(strand='PHY-S04', pos=4,
         carrier="The temperature of a gas and the average speed of its molecules ___ two "
                 "descriptions of the same quantity, related by a single constant.",
         rule='agr_compound', rule_span='are',
         opts=['are', 'is', 'has been', 'were'], key='A',
         faults={'B': ('wrong_number', 'is'), 'C': ('agree_with_nearest', 'has been'),
                 'D': ('tense_shift', 'were')},
         ctx=dict(number='plur'),
         why="Two noun phrases joined by and form a compound subject, so the verb is plural "
             "even though molecules is the nearest noun.",
         trap="B agrees with speed alone and reads the sentence as if and joined two "
              "descriptions of one subject."),
    dict(strand='PHY-S05', pos=5,
         carrier="The current through each of the three resistors wired in parallel across "
                 "the battery ___ on that resistor's own value alone.",
         rule='agr_intervening', rule_span='depends',
         opts=['depend', 'have depended', 'are depending', 'depends'], key='D',
         faults={'A': ('agree_with_nearest', 'depend'),
                 'B': ('wrong_number', 'have depended'),
                 'C': ('wrong_aspect', 'are depending')},
         ctx=dict(number='sing'),
         why="The subject is current; the intervening phrase names three resistors and a "
             "battery, and none of them governs the verb.",
         trap="A agrees with resistors, the plural the intervening phrase puts in the middle "
              "of the sentence."),
    dict(strand='PHY-S06', pos=6,
         carrier="The pitch of the notes that a clarinet player produces by opening and "
                 "closing the holes along the body of the instrument ___ on the length of "
                 "the air column, not on the force of the breath.",
         rule='agr_intervening', rule_span='rests',
         opts=['rest', 'have rested', 'rests', 'are resting'], key='C',
         faults={'A': ('agree_with_nearest', 'rest'),
                 'B': ('wrong_number', 'have rested'),
                 'D': ('wrong_aspect', 'are resting')},
         ctx=dict(number='sing'),
         why="The subject is pitch, a singular noun; the intervening relative clause ends "
             "in instrument and holes but leaves the number alone.",
         trap="A agrees with notes or holes, the plurals the long intervening clause "
              "scatters before the blank."),
    dict(strand='PHY-S07', pos=7,
         carrier="The committee that settles the names of newly confirmed elements ___ on a "
                 "proposal from the laboratory that first produced the element, and it has "
                 "refused a name only twice.",
         rule='agr_collective', rule_span='votes',
         opts=['vote', 'votes', 'have voted', 'are voting'], key='B',
         faults={'A': ('wrong_number', 'vote'), 'C': ('agree_with_nearest', 'have voted'),
                 'D': ('wrong_aspect', 'are voting')},
         ctx=dict(number='sing'),
         why="Committee is a collective noun acting as one body, so it takes a singular "
             "verb and the singular pronoun it later on.",
         trap="C agrees with elements, the plural noun the relative clause leaves in front "
              "of the blank."),
    dict(strand='PHY-S08', pos=8,
         carrier="Behind every bridge that has failed under a load it was designed to carry "
                 "___ a material whose behavior under repeated stress was not understood "
                 "when the bridge was built.",
         rule='agr_inverted', rule_span='lies',
         opts=['lies', 'lie', 'have lain', 'are lying'], key='A',
         faults={'B': ('wrong_number', 'lie'), 'C': ('wrong_number', 'have lain'),
                 'D': ('wrong_aspect', 'are lying')},
         ctx=dict(number='sing'),
         why="The order is inverted: the subject is a material, which follows the verb, and "
             "it is singular.",
         trap="C is plural because the opening phrase speaks of failures in general, though "
              "the subject after the blank is one material."),
    dict(strand='PHY-S09', pos=9,
         carrier="Every one of the radioactive isotopes that geologists use to date rock, "
                 "from the potassium that decays over a billion years to the carbon that "
                 "decays over five thousand, ___ a half-life that has been measured in the "
                 "laboratory to within a fraction of a per cent.",
         rule='agr_indefinite', rule_span='has',
         opts=['have', 'had', 'has', 'are having'], key='C',
         faults={'A': ('agree_with_nearest', 'have'), 'B': ('tense_shift', 'had'),
                 'D': ('wrong_aspect', 'are having')},
         ctx=dict(number='sing'),
         why="Every one is an indefinite expression and is singular, so the verb is singular "
             "however many isotopes the sentence goes on to name.",
         trap="A agrees with isotopes and is reinforced by the two plurals, years and "
              "thousand, that the intervening clauses leave behind."),
    dict(strand='PHY-S10', pos=10,
         carrier="The distance to the nearest galaxies, established in the 1920s by "
                 "comparing the brightness of variable stars whose true luminosity can be "
                 "inferred from their periods, ___ the Milky Way one galaxy among a great "
                 "many rather than the whole of the universe.",
         rule='agr_intervening', rule_span='makes',
         opts=['makes', 'make', 'have made', 'are making'], key='A',
         faults={'B': ('agree_with_nearest', 'make'), 'C': ('wrong_number', 'have made'),
                 'D': ('wrong_aspect', 'are making')},
         ctx=dict(number='sing'),
         why="The subject is distance; the intervening participial phrase runs twenty words "
             "and ends in periods, but a singular subject stays singular.",
         trap="C agrees with stars or galaxies, the plurals the intervening phrase leaves "
              "ringing in the ear."),
])

HUM = dict(domain='HUM', note_ar=(
    "جمل الإنسانيات تضع بين الفاعل وفعله جملاً وصفية عن الراوي والشخصية والقصيدة، وتسمّي في "
    "الطريق أسماء جمع مثل الشخصيات والقصائد والأبيات. والفاعل في الغالب اسم مفرد مجرّد مثل "
    "الفجوة أو الحكم أو المنعطف."), xs=[
    dict(strand='HUM-S01', pos=1,
         carrier="The judgments a first-person narrator makes about other characters ___ as "
                 "much about the narrator as about them.",
         rule='agr_plural', rule_span='have revealed',
         opts=['have revealed', 'reveals', 'has revealed', 'is revealing'], key='A',
         faults={'B': ('agree_with_nearest', 'reveals'),
                 'C': ('wrong_number', 'has revealed'),
                 'D': ('wrong_aspect', 'is revealing')},
         ctx=dict(number='plur'),
         why="Judgments is the plural subject; characters and narrator both sit inside "
             "other phrases, so the verb takes the plural form.",
         trap="B agrees with characters, the noun nearest the blank, or with the singular "
              "narrator just before it."),
    dict(strand='HUM-S02', pos=2,
         carrier="The gap between what a character says and what the same character does "
                 "___ the reader a motive to infer.",
         rule='agr_singular', rule_span='gives',
         opts=['give', 'have given', 'gives', 'are giving'], key='C',
         faults={'A': ('wrong_number', 'give'), 'B': ('wrong_number', 'have given'),
                 'D': ('wrong_aspect', 'are giving')},
         ctx=dict(number='sing'),
         why="The subject is gap, a singular noun; the two what-clauses standing between it "
             "and the verb do not make it plural.",
         trap="B is attractive because the sentence names two things, so the subject feels "
              "like a pair rather than one gap."),
    dict(strand='HUM-S03', pos=3,
         carrier="The images a poet repeats across a sequence of poems ___ a pattern the "
                 "reader feels before noticing it.",
         rule='agr_plural', rule_span='have been building',
         opts=['builds', 'has been building', 'is building', 'have been building'], key='D',
         faults={'A': ('agree_with_nearest', 'builds'),
                 'B': ('wrong_number', 'has been building'),
                 'C': ('wrong_number', 'is building')},
         ctx=dict(number='plur'),
         why="Images is the plural subject; poems ends a prepositional phrase, so the verb "
             "takes the plural form.",
         trap="A agrees with poems or with the singular sequence, both of which sit between "
              "the subject and the blank."),
    dict(strand='HUM-S04', pos=4,
         carrier="The turn that comes at the ninth line of most Petrarchan sonnets ___ the "
                 "problem the first eight lines have set out.",
         rule='agr_intervening', rule_span='answers',
         opts=['answer', 'answers', 'have answered', 'are answering'], key='B',
         faults={'A': ('agree_with_nearest', 'answer'),
                 'C': ('wrong_number', 'have answered'),
                 'D': ('wrong_aspect', 'are answering')},
         ctx=dict(number='sing'),
         why="The subject is turn; the intervening relative clause ends in sonnets, and an "
             "intervening plural cannot change a singular subject.",
         trap="A agrees with sonnets and is helped by the plural lines later in the "
              "sentence."),
    dict(strand='HUM-S05', pos=5,
         carrier="The company that first staged the play at the Globe ___ made up of about "
                 "twelve sharers, who owned the theater between them and divided what it "
                 "earned.",
         rule='agr_collective', rule_span='was',
         opts=['was', 'were', 'have been', 'is'], key='A',
         faults={'B': ('wrong_number', 'were'), 'C': ('agree_with_nearest', 'have been'),
                 'D': ('tense_shift', 'is')},
         ctx=dict(number='sing'),
         why="Company is a collective noun treated here as one troupe, so the verb is "
             "singular even though twelve people are named.",
         trap="B agrees with sharers after the blank, and the sentence does go on to use "
              "the plural them."),
    dict(strand='HUM-S06', pos=6,
         carrier="A detective's arrival and the discovery of a body at the opening of a "
                 "novel ___ a promise to the reader that the book will either keep or "
                 "deliberately break.",
         rule='agr_compound', rule_span='are',
         opts=['is', 'has been', 'was being', 'are'], key='D',
         faults={'A': ('wrong_number', 'is'), 'B': ('agree_with_nearest', 'has been'),
                 'C': ('wrong_aspect', 'was being')},
         ctx=dict(number='plur'),
         why="The arrival and the discovery are two things joined by and, a compound "
             "subject, so the verb is plural.",
         trap="A agrees with novel, and a promise after the blank is singular, which makes "
              "the singular verb sound right."),
    dict(strand='HUM-S07', pos=7,
         carrier="The thin layer of varnish that restorers apply over the paint of an oil "
                 "painting, and that darkens over a century or two, ___ the colors beneath "
                 "it look warmer than the painter left them.",
         rule='agr_intervening', rule_span='makes',
         opts=['make', 'have made', 'makes', 'are making'], key='C',
         faults={'A': ('agree_with_nearest', 'make'), 'B': ('wrong_number', 'have made'),
                 'D': ('wrong_aspect', 'are making')},
         ctx=dict(number='sing'),
         why="The subject is layer; two intervening relative clauses stand between it and "
             "the verb, and neither changes its number.",
         trap="A agrees with restorers or colors, the plurals the intervening clauses leave "
              "on either side of the blank."),
    dict(strand='HUM-S08', pos=8,
         carrier="Either of the two endings that Beethoven wrote for the quartet ___ "
                 "acceptable to his publisher, and the one usually played today is not the "
                 "one he first intended.",
         rule='agr_indefinite', rule_span='was',
         opts=['were', 'was', 'have been', 'are being'], key='B',
         faults={'A': ('wrong_number', 'were'), 'C': ('agree_with_nearest', 'have been'),
                 'D': ('wrong_aspect', 'are being')},
         ctx=dict(number='sing'),
         why="Either is an indefinite pronoun and is singular, so the verb is singular even "
             "though two endings are named.",
         trap="A agrees with endings and is helped by two, the word that makes the subject "
              "feel like a pair."),
    dict(strand='HUM-S09', pos=9,
         carrier="The decision to raise the roadway of a city's main avenue above the level "
                 "of the shops that line it, taken in a dozen American cities between 1955 "
                 "and 1970 and regretted in most of them, ___ a street that was easy to "
                 "drive along and unpleasant to walk down.",
         rule='agr_intervening', rule_span='has produced',
         opts=['have produced', 'produce', 'are producing', 'has produced'], key='D',
         faults={'A': ('agree_with_nearest', 'have produced'),
                 'B': ('wrong_number', 'produce'),
                 'C': ('wrong_aspect', 'are producing')},
         ctx=dict(number='sing'),
         why="The subject is decision; thirty words of intervening material, ending in "
             "them and cities, stand between it and the verb.",
         trap="A agrees with cities or shops, the plurals the intervening phrases leave "
              "nearest the blank."),
    dict(strand='HUM-S10', pos=10,
         carrier="At the center of nearly every argument that critics have had about "
                 "whether a work's meaning is fixed by its author or made by its readers "
                 "___ two assumptions that the disputants rarely state and almost never "
                 "defend.",
         rule='agr_inverted', rule_span='lie',
         opts=['lies', 'lie', 'has lain', 'is lying'], key='B',
         faults={'A': ('wrong_number', 'lies'), 'C': ('agree_with_nearest', 'has lain'),
                 'D': ('wrong_aspect', 'is lying')},
         ctx=dict(number='plur'),
         why="The order is inverted: the subject, two assumptions, follows the verb, so the "
             "verb is plural.",
         trap="A agrees with meaning, the singular noun the inverted order leaves far in "
              "front of the blank."),
])

SOC = dict(domain='SOC', note_ar=(
    "جمل العلوم الاجتماعية تقوم على العيّنات والمجموعات والنسب، فتكثر فيها أسماء الجمع مثل "
    "العيّنة واللجنة والفريق، وتكثر فيها الضمائر المبهمة مثل كلّ ولا أحد. وهذان البابان هما "
    "أصعب ما في مطابقة الفعل للفاعل."), xs=[
    dict(strand='SOC-S01', pos=1,
         carrier="The wording of a survey question ___ the answers people give more than "
                 "the order of the choices does.",
         rule='agr_singular', rule_span='shapes',
         opts=['shape', 'shapes', 'have shaped', 'are shaping'], key='B',
         faults={'A': ('wrong_number', 'shape'), 'C': ('wrong_number', 'have shaped'),
                 'D': ('wrong_aspect', 'are shaping')},
         ctx=dict(number='sing'),
         why="Wording is the singular subject; question, answers and choices all sit inside "
             "other phrases and cannot govern the verb.",
         trap="C agrees with answers, the plural noun that follows the blank immediately."),
    dict(strand='SOC-S02', pos=2,
         carrier="The two groups in a randomized trial ___ alike in everything except the "
                 "treatment one of them receives.",
         rule='agr_plural', rule_span='have been made',
         opts=['was', 'has been made', 'is being made', 'have been made'], key='D',
         faults={'A': ('wrong_number', 'was'),
                 'B': ('agree_with_nearest', 'has been made'),
                 'C': ('wrong_aspect', 'is being made')},
         ctx=dict(number='plur'),
         why="Groups is the plural subject; trial ends a prepositional phrase, so the verb "
             "takes the plural form.",
         trap="B agrees with trial, the singular noun the prepositional phrase leaves "
              "beside the blank."),
    dict(strand='SOC-S03', pos=3,
         carrier="Each of the three explanations a researcher must rule out before claiming "
                 "a cause ___ a different kind of evidence.",
         rule='agr_indefinite', rule_span='requires',
         opts=['requires', 'require', 'have required', 'are requiring'], key='A',
         faults={'B': ('wrong_number', 'require'), 'C': ('wrong_number', 'have required'),
                 'D': ('wrong_aspect', 'are requiring')},
         ctx=dict(number='sing'),
         why="Each is an indefinite pronoun and takes a singular verb, however many "
             "explanations the phrase after it names.",
         trap="B agrees with explanations, the plural the of-phrase puts right after the "
              "pronoun."),
    dict(strand='SOC-S04', pos=4,
         carrier="The sample of households that the agency interviews each month ___ about "
                 "sixty thousand, which is large enough to estimate unemployment to within "
                 "a tenth of a point.",
         rule='agr_collective', rule_span='numbers',
         opts=['number', 'have numbered', 'numbers', 'are numbering'], key='C',
         faults={'A': ('wrong_number', 'number'),
                 'B': ('agree_with_nearest', 'have numbered'),
                 'D': ('wrong_aspect', 'are numbering')},
         ctx=dict(number='sing'),
         why="Sample is a collective noun taken here as one body of data, so it takes a "
             "singular verb like the later is.",
         trap="B agrees with households, the plural noun the relative clause leaves before "
              "the blank."),
    dict(strand='SOC-S05', pos=5,
         carrier="The effect of small cash rewards on the rate at which people return a "
                 "mailed questionnaire ___ larger than researchers expected.",
         rule='agr_intervening', rule_span='is',
         opts=['are', 'is', 'have been', 'were'], key='B',
         faults={'A': ('agree_with_nearest', 'are'), 'C': ('wrong_number', 'have been'),
                 'D': ('wrong_number', 'were')},
         ctx=dict(number='sing'),
         why="The subject is effect; the intervening phrases name rewards and people, but "
             "intervening plurals leave a singular subject alone.",
         trap="A agrees with people, the plural the intervening relative clause leaves "
              "nearest the blank."),
    dict(strand='SOC-S06', pos=6,
         carrier="Neither of the two confederates whom Asch placed in the room with the "
                 "real subject ___ instructed to argue; both were told only to give the "
                 "wrong answer calmly.",
         rule='agr_indefinite', rule_span='was',
         opts=['was', 'were', 'have been', 'are being'], key='A',
         faults={'B': ('wrong_number', 'were'), 'C': ('agree_with_nearest', 'have been'),
                 'D': ('wrong_aspect', 'are being')},
         ctx=dict(number='sing'),
         why="Neither is an indefinite pronoun and is singular, so the verb is singular "
             "even though the clause after it names two people.",
         trap="B agrees with confederates and is reinforced by were in the second half of "
              "the sentence, whose subject is both."),
    dict(strand='SOC-S07', pos=7,
         carrier="The cost of housing near the center and the time a commute takes from the "
                 "edge ___ the two quantities that households trade against each other when "
                 "they choose where to live.",
         rule='agr_compound', rule_span='are',
         opts=['is', 'has been', 'were', 'are'], key='D',
         faults={'A': ('wrong_number', 'is'), 'B': ('agree_with_nearest', 'has been'),
                 'C': ('tense_shift', 'were')},
         ctx=dict(number='plur'),
         why="The cost and the time are joined by and, which makes a compound subject, so "
             "the verb is plural.",
         trap="A agrees with edge, the singular noun directly before the blank, and misses "
              "the subject that and creates."),
    dict(strand='SOC-S08', pos=8,
         carrier="Beneath the single figure that the monthly report gives for the "
                 "unemployment rate ___ several measures that move differently, one of "
                 "which counts people who have given up looking for work.",
         rule='agr_inverted', rule_span='are',
         opts=['is', 'have been', 'are', 'was being'], key='C',
         faults={'A': ('wrong_number', 'is'), 'B': ('tense_shift', 'have been'),
                 'D': ('wrong_aspect', 'was being')},
         ctx=dict(number='plur'),
         why="The order is inverted: the subject is several measures, which follows the "
             "verb, so the verb is plural.",
         trap="A agrees with rate, the singular noun the inverted order leaves immediately "
              "before the blank."),
    dict(strand='SOC-S09', pos=9,
         carrier="The share of all income that goes to the richest one per cent of "
                 "households, a figure that can be computed from tax records in some "
                 "countries and only from surveys in others, ___ sharply between the two "
                 "kinds of source.",
         rule='agr_intervening', rule_span='differs',
         opts=['differs', 'differ', 'have differed', 'are differing'], key='A',
         faults={'B': ('agree_with_nearest', 'differ'),
                 'C': ('wrong_number', 'have differed'),
                 'D': ('wrong_aspect', 'are differing')},
         ctx=dict(number='sing'),
         why="The subject is share; twenty-five words of intervening material, ending in "
             "surveys and others, leave a singular subject singular.",
         trap="C agrees with households, records or countries, any of the plurals the "
              "appositive supplies."),
    dict(strand='SOC-S10', pos=10,
         carrier="The panel of forecasters that a central bank polls each quarter, whose "
                 "individual predictions are published and scored against what actually "
                 "happens, ___ wrong about the direction of interest rates in roughly one "
                 "quarter of the periods surveyed.",
         rule='agr_collective', rule_span='has been',
         opts=['have been', 'had been', 'has been', 'is'], key='C',
         faults={'A': ('agree_with_nearest', 'have been'), 'B': ('tense_shift', 'had been'),
                 'D': ('tense_shift', 'is')},
         ctx=dict(number='sing'),
         why="Panel is a collective noun taken as one body here, so it takes a singular "
             "verb despite the plural predictions in the clause between.",
         trap="A agrees with forecasters or predictions, the plurals the two relative "
              "clauses leave standing before the blank."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
