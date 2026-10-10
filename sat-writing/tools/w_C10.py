# -*- coding: utf-8 -*-
"""Chapter 10 - supplements and paired punctuation. Home domain HIS.

Key plans: HIS CABDCBADBD, BIO DBCADCBACA, PHY ACDBADCBDB, HUM BDACBADCAC,
SOC CABDCBADBD.

Each option carries the whole supplement together with the marks around it, so
that the four options differ in the marks and in nothing else.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 10
D = '—'

AR = dict(
    qaida="العبارات المعترضة وترقيمها: العبارة التي تعترض الجملة ولا تلزم لتحديد المعنى "
          "تُحاط بعلامتين من جنس واحد، فاصلتين أو شرطتين أو قوسين. والعلامة التي فتحت هي "
          "التي تغلق، ولا يُفتح بشرطة ويُغلق بفاصلة. وما كان لازماً لتحديد المقصود لا يُحاط "
          "بشيء أصلاً.",
    kayf="يعرض الاختبار عبارة معترضة ويحذف علامتيها، فتكون الخيارات: علامتان متفقتان، "
         "وعلامة واحدة، وعلامتان مختلفتان، ولا علامة. والسؤال سؤالان: هل العبارة لازمة؟ "
         "فإن لم تكن لازمة فهل أُغلقت بما فُتحت به؟",
    fakh="الفخّ أن العلامة الأولى تُقرأ ثمّ يطول الكلام فتُنسى، فيُغلق بغيرها أو لا يُغلق "
         "أصلاً. والعلاج أن تحذف العبارة المعترضة كلّها فتقرأ الجملة بدونها: فإن استقامت "
         "فالعبارة غير لازمة وتحتاج إلى علامتين.",
    sila="هذا الباب من أكثر ما يتكرّر في اختبار سات بعد حدود الجملة، وهو أسهل منه لأن "
         "العلاج ميكانيكي: احذف ما بين العلامتين. ويتّصل بالفصل الذي يليه في النقطتين، "
         "وبالفصل الثاني عشر في الوصف المحدِّد.",
)

HIS = dict(domain='HIS', note_ar=(
    "التاريخ والنظام المدني هو المجال الأصلي لهذا الفصل، لأن جمله مليئة بالألقاب والتواريخ "
    "والتعريفات التي تعترض الكلام: فلان، وهو كذا، فعل كذا. وهذه العبارات تطول فتُنسى "
    "علامتها الأولى."), xs=[
    dict(strand='HIS-S01', pos=1,
         carrier="Jefferson ___ wrote the first draft in seventeen days at a desk of his "
                 "own design.",
         rule='appositive_commas', rule_span=', then thirty-three years old,',
         opts=[', then thirty-three years old',
               D + ' then thirty-three years old,',
               ', then thirty-three years old,',
               '(then thirty-three years old,'], key='C',
         faults={'A': ('unpaired', ', then thirty-three years old'),
                 'B': ('mismatched_pair', D + ' then thirty-three years old,'),
                 'D': ('mismatched_pair', '(then thirty-three years old,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A nonessential appositive is enclosed in commas, which means a comma at each "
             "end of it and not one.",
         trap="A opens the supplement and never closes it, which is the commonest fault in "
              "this chapter."),
    dict(strand='HIS-S02', pos=2,
         carrier="The veto ___ can be overridden only by a two-thirds vote in both "
                 "chambers.",
         rule='paired_commas',
         rule_span=', which Article One gives to the President alone,',
         opts=[', which Article One gives to the President alone,',
               ', which Article One gives to the President alone',
               D + ' which Article One gives to the President alone,',
               '(which Article One gives to the President alone,'], key='A',
         faults={'B': ('unpaired', ', which Article One gives to the President alone'),
                 'C': ('mismatched_pair',
                       D + ' which Article One gives to the President alone,'),
                 'D': ('mismatched_pair',
                       '(which Article One gives to the President alone,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A supplement set off by commas takes a comma at each end, and a which-clause "
             "that merely adds information is a supplement.",
         trap="B leaves the supplement open at the far end, which a long interruption makes "
              "easy to forget."),
    dict(strand='HIS-S03', pos=3,
         carrier="The Naturalization Act of 1790 ___ restricted eligibility to free white "
                 "persons of good character who had lived two years in the country.",
         rule='appositive_commas',
         rule_span=', the first statute Congress passed on the subject,',
         opts=[', the first statute Congress passed on the subject',
               ', the first statute Congress passed on the subject,',
               D + ' the first statute Congress passed on the subject,',
               '(the first statute Congress passed on the subject,'], key='B',
         faults={'A': ('unpaired', ', the first statute Congress passed on the subject'),
                 'C': ('mismatched_pair',
                       D + ' the first statute Congress passed on the subject,'),
                 'D': ('mismatched_pair',
                       '(the first statute Congress passed on the subject,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="The appositive names the same thing the subject names, so it is nonessential "
             "and takes a comma at each end.",
         trap="C opens with a dash and closes with a comma, which is a pair of two "
              "different marks."),
    dict(strand='HIS-S04', pos=4,
         carrier="Garrison's newspaper ___ ran for thirty-five years and stopped the week "
                 "the Thirteenth Amendment was ratified by the states.",
         rule='paired_dashes',
         rule_span=D + ' never profitable and never quiet ' + D,
         opts=[D + ' never profitable and never quiet',
               ', never profitable and never quiet ' + D,
               '(never profitable and never quiet ' + D,
               D + ' never profitable and never quiet ' + D], key='D',
         faults={'A': ('unpaired', D + ' never profitable and never quiet'),
                 'B': ('mismatched_pair', ', never profitable and never quiet ' + D),
                 'C': ('mismatched_pair', '(never profitable and never quiet ' + D)},
         ctx=dict(pair='dash', marks_expected=2),
         why="A supplement set off by dashes takes a dash at each end, and dashes suit an "
             "interruption the writer wants heard.",
         trap="A supplies the opening dash and no closing one, so the sentence never comes "
              "back from the interruption."),
    dict(strand='HIS-S05', pos=5,
         carrier="The governments ___ disenfranchised black voters within twenty years of "
                 "the federal withdrawal and were not seriously challenged for another "
                 "sixty.",
         rule='no_marks_needed', rule_span='that replaced the occupation',
         opts=[', that replaced the occupation,', ', that replaced the occupation',
               'that replaced the occupation',
               D + ' that replaced the occupation ' + D], key='C',
         faults={'A': ('overpunctuated', ', that replaced the occupation,'),
                 'B': ('overpunctuated', ', that replaced the occupation'),
                 'D': ('wrong_mark', D + ' that replaced the occupation ' + D)},
         ctx=dict(pair=None, marks_expected=0, mark_ok=[]),
         why="The clause says which governments are meant, so it is essential and takes no "
             "marks at all.",
         trap="A encloses an essential clause in commas, which tells the reader it could be "
              "removed when it cannot."),
    dict(strand='HIS-S06', pos=6,
         carrier="The commission that investigated the Chicago packinghouses ___ reported "
                 "within six months, and the Meat Inspection Act followed it into law "
                 "before the end of the same year.",
         rule='paired_parentheses', rule_span='(two lawyers and a physician)',
         opts=['(two lawyers and a physician', '(two lawyers and a physician)',
               '(two lawyers and a physician,',
               D + ' two lawyers and a physician)'], key='B',
         faults={'A': ('unpaired', '(two lawyers and a physician'),
                 'C': ('mismatched_pair', '(two lawyers and a physician,'),
                 'D': ('mismatched_pair', D + ' two lawyers and a physician)')},
         ctx=dict(pair='paren', marks_expected=2),
         why="Parentheses come in twos, and an aside this incidental is what they are for.",
         trap="A opens a parenthesis and leaves it open, which no reader forgives and many "
              "writers do."),
    dict(strand='HIS-S07', pos=7,
         carrier="The Court asked the parties in the school cases ___ to come back a year "
                 "later and argue the history of the amendment, which is why the decision "
                 "took two full terms rather than one.",
         rule='paired_dashes',
         rule_span=D + ' all of whom had thought the matter closed ' + D,
         opts=[D + ' all of whom had thought the matter closed ' + D,
               D + ' all of whom had thought the matter closed',
               ', all of whom had thought the matter closed ' + D,
               '(all of whom had thought the matter closed ' + D], key='A',
         faults={'B': ('unpaired', D + ' all of whom had thought the matter closed'),
                 'C': ('mismatched_pair',
                       ', all of whom had thought the matter closed ' + D),
                 'D': ('mismatched_pair',
                       '(all of whom had thought the matter closed ' + D)},
         ctx=dict(pair='dash', marks_expected=2),
         why="Dashes set off a supplement at both ends, and a dash pair carries an aside "
             "more loudly than commas would.",
         trap="C opens with a comma and closes with a dash, which is two marks of different "
              "kinds doing one job."),
    dict(strand='HIS-S08', pos=8,
         carrier="The mandates ___ were to be surrendered as soon as their inhabitants were "
                 "ready to govern themselves, and not one of them was surrendered until "
                 "after a second world war.",
         rule='no_marks_needed',
         rule_span='that the League created after the First World War',
         opts=[', that the League created after the First World War,',
               D + ' that the League created after the First World War ' + D,
               ', that the League created after the First World War',
               'that the League created after the First World War'], key='D',
         faults={'A': ('overpunctuated',
                       ', that the League created after the First World War,'),
                 'B': ('wrong_mark',
                       D + ' that the League created after the First World War ' + D),
                 'C': ('overpunctuated',
                       ', that the League created after the First World War')},
         ctx=dict(pair=None, marks_expected=0, mark_ok=[]),
         why="The clause identifies which mandates are meant, so it is essential and takes "
             "no marks.",
         trap="A sets an essential clause inside commas, which invites the reader to skip "
              "the words that say what the sentence is about."),
    dict(strand='HIS-S09', pos=9,
         carrier="The Supreme Court upheld the internment of Japanese Americans while the "
                 "war was still being fought ___ and the three dissents in that case are "
                 "quoted far more often now than the opinion of the Court itself, which has "
                 "never been formally overruled.",
         rule='paired_parentheses', rule_span='(by six votes to three)',
         opts=['(by six votes to three', '(by six votes to three)',
               '(by six votes to three,', D + ' by six votes to three)'], key='B',
         faults={'A': ('unpaired', '(by six votes to three'),
                 'C': ('mismatched_pair', '(by six votes to three,'),
                 'D': ('mismatched_pair', D + ' by six votes to three)')},
         ctx=dict(pair='paren', marks_expected=2),
         why="Parentheses come in twos, and a bare count of votes is exactly the kind of "
             "detail they hold.",
         trap="D opens with a dash and closes with a parenthesis, which leaves the reader "
              "with one of each."),
    dict(strand='HIS-S10', pos=10,
         carrier="The penny papers sold for a cent where the established papers sold for "
                 "six and recovered the difference from advertisers ___ and the model "
                 "outlived every one of the papers that invented it by more than a "
                 "century.",
         rule='paired_dashes',
         rule_span=D + ' a reversal nobody in the trade had thought possible ' + D,
         opts=[D + ' a reversal nobody in the trade had thought possible',
               ', a reversal nobody in the trade had thought possible ' + D,
               '(a reversal nobody in the trade had thought possible ' + D,
               D + ' a reversal nobody in the trade had thought possible ' + D],
         key='D',
         faults={'A': ('unpaired',
                       D + ' a reversal nobody in the trade had thought possible'),
                 'B': ('mismatched_pair',
                       ', a reversal nobody in the trade had thought possible ' + D),
                 'C': ('mismatched_pair',
                       '(a reversal nobody in the trade had thought possible ' + D)},
         ctx=dict(pair='dash', marks_expected=2),
         why="A supplement held between dashes needs a dash at each end, and this one "
             "interrupts a sentence already long enough to lose its way.",
         trap="A leaves the dash open, so the aside runs on into the clause that follows it "
              "and never ends."),
])

BIO = dict(domain='BIO', note_ar=(
    "جمل الأحياء وعلوم الأرض تعترضها تعريفات الأسماء العلمية وأرقام القياسات، وهذه "
    "التعريفات غير لازمة في الغالب فتحتاج إلى علامتين. وبعضها لازم لتحديد النوع المقصود "
    "فلا يحتاج إلى شيء."), xs=[
    dict(strand='BIO-S01', pos=1,
         carrier="Variation ___ is what selection acts on and is not what selection makes.",
         rule='paired_commas', rule_span=', which is already present in a population,',
         opts=[', which is already present in a population',
               D + ' which is already present in a population,',
               '(which is already present in a population,',
               ', which is already present in a population,'], key='D',
         faults={'A': ('unpaired', ', which is already present in a population'),
                 'B': ('mismatched_pair',
                       D + ' which is already present in a population,'),
                 'C': ('mismatched_pair',
                       '(which is already present in a population,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A supplement set off by commas carries one of the two commas at each end of "
             "itself.",
         trap="A opens the supplement and does not close it, which is the fault this whole "
              "chapter turns on."),
    dict(strand='BIO-S02', pos=2,
         carrier="Mendel ___ counted some twenty-eight thousand pea plants over eight "
                 "seasons in a walled garden.",
         rule='appositive_commas', rule_span=', a monk with a mathematical training,',
         opts=[', a monk with a mathematical training',
               ', a monk with a mathematical training,',
               D + ' a monk with a mathematical training,',
               '(a monk with a mathematical training,'], key='B',
         faults={'A': ('unpaired', ', a monk with a mathematical training'),
                 'C': ('mismatched_pair', D + ' a monk with a mathematical training,'),
                 'D': ('mismatched_pair', '(a monk with a mathematical training,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="An appositive that only renames the subject is nonessential, so commas "
             "enclose it at both ends.",
         trap="C opens with a dash and closes with a comma, which is a pair of different "
              "marks."),
    dict(strand='BIO-S03', pos=3,
         carrier="The inner membrane of a mitochondrion ___ carries a surface many times "
                 "the area of the smooth outer one that encloses it.",
         rule='paired_commas', rule_span=', folded over on itself many times,',
         opts=[', folded over on itself many times',
               D + ' folded over on itself many times,',
               ', folded over on itself many times,',
               '(folded over on itself many times,'], key='C',
         faults={'A': ('unpaired', ', folded over on itself many times'),
                 'B': ('mismatched_pair', D + ' folded over on itself many times,'),
                 'D': ('mismatched_pair', '(folded over on itself many times,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A participial supplement takes commas at both ends, since it could be lifted "
             "out and leave a sentence behind.",
         trap="B mixes a dash and a comma, and the length of the supplement is what lets it "
              "pass."),
    dict(strand='BIO-S04', pos=4,
         carrier="The elk ___ browsed the streamside willows almost to the ground for "
                 "seventy years and then stopped within a decade of the wolves returning.",
         rule='no_marks_needed', rule_span='that had no predator left in the valley',
         opts=['that had no predator left in the valley',
               ', that had no predator left in the valley,',
               ', that had no predator left in the valley',
               D + ' that had no predator left in the valley ' + D], key='A',
         faults={'B': ('overpunctuated', ', that had no predator left in the valley,'),
                 'C': ('overpunctuated', ', that had no predator left in the valley'),
                 'D': ('wrong_mark',
                       D + ' that had no predator left in the valley ' + D)},
         ctx=dict(pair=None, marks_expected=0, mark_ok=[]),
         why="The clause says which elk are meant, so it is essential and takes no marks at "
             "all.",
         trap="B encloses an essential clause in commas, which tells the reader it may be "
              "skipped when it cannot."),
    dict(strand='BIO-S05', pos=5,
         carrier="A population that has outrun its food ___ falls below the level the "
                 "habitat would have supported and may take decades to come back.",
         rule='paired_dashes', rule_span=D + ' and this is the part that surprises ' + D,
         opts=[D + ' and this is the part that surprises',
               ', and this is the part that surprises ' + D,
               '(and this is the part that surprises ' + D,
               D + ' and this is the part that surprises ' + D], key='D',
         faults={'A': ('unpaired', D + ' and this is the part that surprises'),
                 'B': ('mismatched_pair', ', and this is the part that surprises ' + D),
                 'C': ('mismatched_pair', '(and this is the part that surprises ' + D)},
         ctx=dict(pair='dash', marks_expected=2),
         why="Dashes set a supplement off at both ends, and an aside the writer wants heard "
             "is what a dash pair is for.",
         trap="A opens with a dash and never closes it, so the aside runs into the rest of "
              "the sentence."),
    dict(strand='BIO-S06', pos=6,
         carrier="Koch's fourth postulate ___ has never been satisfied for an organism that "
                 "will not grow in a pure culture, and that is most of the viruses.",
         rule='appositive_commas',
         rule_span=', the recovery of the same organism from the second host,',
         opts=[', the recovery of the same organism from the second host',
               D + ' the recovery of the same organism from the second host,',
               ', the recovery of the same organism from the second host,',
               '(the recovery of the same organism from the second host,'], key='C',
         faults={'A': ('unpaired',
                       ', the recovery of the same organism from the second host'),
                 'B': ('mismatched_pair',
                       D + ' the recovery of the same organism from the second host,'),
                 'D': ('mismatched_pair',
                       '(the recovery of the same organism from the second host,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="The appositive renames the postulate, so it is nonessential and is enclosed in "
             "commas at both ends.",
         trap="A is open at the far end, and a supplement nine words long is where that is "
              "easiest to miss."),
    dict(strand='BIO-S07', pos=7,
         carrier="Nitrogen enters the soil of a legume field ___ rather than from any "
                 "chemistry the plant performs itself, and a field of them leaves the "
                 "ground richer than it found it.",
         rule='paired_parentheses',
         rule_span='(by way of bacteria housed in root nodules)',
         opts=['(by way of bacteria housed in root nodules,',
               '(by way of bacteria housed in root nodules)',
               '(by way of bacteria housed in root nodules',
               D + ' by way of bacteria housed in root nodules)'], key='B',
         faults={'A': ('mismatched_pair', '(by way of bacteria housed in root nodules,'),
                 'C': ('unpaired', '(by way of bacteria housed in root nodules'),
                 'D': ('mismatched_pair',
                       D + ' by way of bacteria housed in root nodules)')},
         ctx=dict(pair='paren', marks_expected=2),
         why="Parentheses come in twos, and a mechanism mentioned in passing is what they "
             "hold.",
         trap="C opens a parenthesis and leaves it open, which the length of the phrase "
              "makes easy to do."),
    dict(strand='BIO-S08', pos=8,
         carrier="The ice ___ holds air that was last in contact with the atmosphere eight "
                 "hundred thousand years ago, and no other record reaches so far back "
                 "directly.",
         rule='no_marks_needed', rule_span='at the bottom of a deep Antarctic core',
         opts=['at the bottom of a deep Antarctic core',
               ', at the bottom of a deep Antarctic core,',
               ', at the bottom of a deep Antarctic core',
               D + ' at the bottom of a deep Antarctic core ' + D], key='A',
         faults={'B': ('overpunctuated', ', at the bottom of a deep Antarctic core,'),
                 'C': ('overpunctuated', ', at the bottom of a deep Antarctic core'),
                 'D': ('wrong_mark', D + ' at the bottom of a deep Antarctic core ' + D)},
         ctx=dict(pair=None, marks_expected=0, mark_ok=[]),
         why="The phrase says which ice is meant, so it is essential and takes no marks.",
         trap="B puts commas round the words that identify the subject, which makes the "
              "sentence say something it does not mean."),
    dict(strand='BIO-S09', pos=9,
         carrier="The channels cut across eastern Washington were read for fifty years as "
                 "the work of a slow river ___ and the boulders the water had rolled were "
                 "lying in plain sight the whole time, waiting for somebody willing to say "
                 "what could have moved them.",
         rule='paired_dashes',
         rule_span=D + ' a reading nobody now defends ' + D,
         opts=[D + ' a reading nobody now defends',
               ', a reading nobody now defends ' + D,
               D + ' a reading nobody now defends ' + D,
               '(a reading nobody now defends ' + D], key='C',
         faults={'A': ('unpaired', D + ' a reading nobody now defends'),
                 'B': ('mismatched_pair', ', a reading nobody now defends ' + D),
                 'D': ('mismatched_pair', '(a reading nobody now defends ' + D)},
         ctx=dict(pair='dash', marks_expected=2),
         why="A supplement held between dashes needs a dash at each end, and the judgment "
             "this one carries is why dashes suit it.",
         trap="B opens with a comma and closes with a dash, which is one mark of each kind "
              "doing a single job."),
    dict(strand='BIO-S10', pos=10,
         carrier="A tracer released into the surface of the North Atlantic in the early "
                 "1960s ___ had still not reached the deepest water of the Pacific when it "
                 "was looked for again twenty years later, which is how the overturning "
                 "time came to be measured in centuries.",
         rule='paired_commas',
         rule_span=', in an experiment nobody had planned as one,',
         opts=[', in an experiment nobody had planned as one,',
               ', in an experiment nobody had planned as one',
               D + ' in an experiment nobody had planned as one,',
               '(in an experiment nobody had planned as one,'], key='A',
         faults={'B': ('unpaired', ', in an experiment nobody had planned as one'),
                 'C': ('mismatched_pair',
                       D + ' in an experiment nobody had planned as one,'),
                 'D': ('mismatched_pair',
                       '(in an experiment nobody had planned as one,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A supplement set off by commas takes one at each end, and this one sits inside "
             "a sentence that holds two other commas.",
         trap="B leaves the supplement open, so the reader cannot tell where the "
              "interruption stops and the main clause starts again."),
])

PHY = dict(domain='PHY', note_ar=(
    "جمل العلوم الفيزيائية تعترضها الأرقام والوحدات وشروح المصطلحات، وتُستعمل فيها القوسان "
    "كثيراً لأن الرقم الدقيق تفصيل لا يلزم القارئ. والشرطتان أعلى صوتاً من أن تُستعمل "
    "لرقم."), xs=[
    dict(strand='PHY-S01', pos=1,
         carrier="Uncertainty ___ must be reported with any figure that claims to be a "
                 "measurement.",
         rule='appositive_commas', rule_span=', the spread of repeated readings,',
         opts=[', the spread of repeated readings,',
               ', the spread of repeated readings',
               D + ' the spread of repeated readings,',
               '(the spread of repeated readings,'], key='A',
         faults={'B': ('unpaired', ', the spread of repeated readings'),
                 'C': ('mismatched_pair', D + ' the spread of repeated readings,'),
                 'D': ('mismatched_pair', '(the spread of repeated readings,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A nonessential appositive is enclosed in commas, one at each end of it.",
         trap="B closes nothing, which leaves the reader unsure where the definition stops."),
    dict(strand='PHY-S02', pos=2,
         carrier="The two forces on a resting book ___ are equal in size and opposite in "
                 "direction.",
         rule='paired_commas', rule_span=', its weight and the push of the table,',
         opts=[', its weight and the push of the table',
               D + ' its weight and the push of the table,',
               ', its weight and the push of the table,',
               '(its weight and the push of the table,'], key='C',
         faults={'A': ('unpaired', ', its weight and the push of the table'),
                 'B': ('mismatched_pair', D + ' its weight and the push of the table,'),
                 'D': ('mismatched_pair', '(its weight and the push of the table,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A supplement set off by commas takes a comma at each end, and this one names "
             "the pair the sentence has just counted.",
         trap="A is open at the far end, which a supplement of eight words makes easy to "
              "overlook."),
    dict(strand='PHY-S03', pos=3,
         carrier="The joules ___ do not disappear when the spring unwinds but turn into "
                 "motion and then into warmth in the bearings.",
         rule='no_marks_needed', rule_span='that a wound clock spring holds',
         opts=[', that a wound clock spring holds,',
               ', that a wound clock spring holds',
               D + ' that a wound clock spring holds ' + D,
               'that a wound clock spring holds'], key='D',
         faults={'A': ('overpunctuated', ', that a wound clock spring holds,'),
                 'B': ('overpunctuated', ', that a wound clock spring holds'),
                 'C': ('wrong_mark', D + ' that a wound clock spring holds ' + D)},
         ctx=dict(pair=None, marks_expected=0, mark_ok=[]),
         why="The clause says which joules are meant, so it is essential and takes no marks "
             "at all.",
         trap="A puts commas round the words that identify the subject, which changes what "
              "the sentence claims."),
    dict(strand='PHY-S04', pos=4,
         carrier="A gas compressed faster than heat can leave the cylinder ___ grows warmer "
                 "than it was before anything was added to it.",
         rule='paired_commas', rule_span=', which is what a bicycle pump does,',
         opts=[', which is what a bicycle pump does',
               ', which is what a bicycle pump does,',
               D + ' which is what a bicycle pump does,',
               '(which is what a bicycle pump does,'], key='B',
         faults={'A': ('unpaired', ', which is what a bicycle pump does'),
                 'C': ('mismatched_pair', D + ' which is what a bicycle pump does,'),
                 'D': ('mismatched_pair', '(which is what a bicycle pump does,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A which-clause that merely adds an example is a supplement, so it takes commas "
             "at both ends.",
         trap="C opens with a dash and closes with a comma, which is a mismatched pair "
              "however natural each mark looks alone."),
    dict(strand='PHY-S05', pos=5,
         carrier="Three lamps wired in parallel across one battery ___ each burn at the "
                 "full brightness the battery can give them.",
         rule='paired_dashes', rule_span=D + ' and this is the whole point ' + D,
         opts=[D + ' and this is the whole point ' + D,
               D + ' and this is the whole point',
               ', and this is the whole point ' + D,
               '(and this is the whole point ' + D], key='A',
         faults={'B': ('unpaired', D + ' and this is the whole point'),
                 'C': ('mismatched_pair', ', and this is the whole point ' + D),
                 'D': ('mismatched_pair', '(and this is the whole point ' + D)},
         ctx=dict(pair='dash', marks_expected=2),
         why="A supplement between dashes needs a dash at each end, and dashes carry an "
             "aside the writer means to be heard.",
         trap="B opens the pair and never closes it, so the aside swallows the clause after "
              "it."),
    dict(strand='PHY-S06', pos=6,
         carrier="A prism bends the short waves of light more than it bends the long ones "
                 "___ and the order of the colors in the band it throws never changes from "
                 "one prism to the next.",
         rule='paired_parentheses',
         rule_span='(by something under two degrees in ordinary glass)',
         opts=['(by something under two degrees in ordinary glass',
               '(by something under two degrees in ordinary glass,',
               D + ' by something under two degrees in ordinary glass)',
               '(by something under two degrees in ordinary glass)'], key='D',
         faults={'A': ('unpaired', '(by something under two degrees in ordinary glass'),
                 'B': ('mismatched_pair',
                       '(by something under two degrees in ordinary glass,'),
                 'C': ('mismatched_pair',
                       D + ' by something under two degrees in ordinary glass)')},
         ctx=dict(pair='paren', marks_expected=2),
         why="Parentheses come in twos, and a figure as incidental as this one is exactly "
             "what they are for.",
         trap="A opens the parenthesis and leaves it open, which a nine-word aside makes "
              "easy to do."),
    dict(strand='PHY-S07', pos=7,
         carrier="Lavoisier ___ weighed the sealed vessel before the reaction and again "
                 "afterward, and the idea that burning destroys matter did not survive the "
                 "decade that followed.",
         rule='appositive_commas',
         rule_span=', a tax collector as well as a chemist,',
         opts=[', a tax collector as well as a chemist',
               D + ' a tax collector as well as a chemist,',
               ', a tax collector as well as a chemist,',
               '(a tax collector as well as a chemist,'], key='C',
         faults={'A': ('unpaired', ', a tax collector as well as a chemist'),
                 'B': ('mismatched_pair', D + ' a tax collector as well as a chemist,'),
                 'D': ('mismatched_pair', '(a tax collector as well as a chemist,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="The appositive renames the subject and could be removed, so it is enclosed in "
             "commas at both ends.",
         trap="A leaves the appositive open at the far end, and the sentence has two other "
              "commas to hide behind."),
    dict(strand='PHY-S08', pos=8,
         carrier="The load ___ may be applied to a steel beam without end, while a load "
                 "just above it will open a crack after a number of cycles that can be "
                 "worked out in advance.",
         rule='no_marks_needed', rule_span='that stays below the fatigue limit',
         opts=[', that stays below the fatigue limit,',
               'that stays below the fatigue limit',
               ', that stays below the fatigue limit',
               D + ' that stays below the fatigue limit ' + D], key='B',
         faults={'A': ('overpunctuated', ', that stays below the fatigue limit,'),
                 'C': ('overpunctuated', ', that stays below the fatigue limit'),
                 'D': ('wrong_mark', D + ' that stays below the fatigue limit ' + D)},
         ctx=dict(pair=None, marks_expected=0, mark_ok=[]),
         why="The clause says which load is meant, and the contrast that follows depends on "
             "it, so it is essential and takes no marks.",
         trap="A encloses the words the whole contrast rests on, which tells the reader they "
              "can be dropped."),
    dict(strand='PHY-S09', pos=9,
         carrier="A radioactive nucleus has no way of recording how long it has already "
                 "waited ___ and the chance that it decays in the next second is therefore "
                 "the same whether it formed yesterday or found itself in a rock a billion "
                 "years old.",
         rule='paired_dashes',
         rule_span=D + ' no clock, no memory, nothing ' + D,
         opts=[D + ' no clock, no memory, nothing',
               ', no clock, no memory, nothing ' + D,
               '(no clock, no memory, nothing ' + D,
               D + ' no clock, no memory, nothing ' + D], key='D',
         faults={'A': ('unpaired', D + ' no clock, no memory, nothing'),
                 'B': ('mismatched_pair', ', no clock, no memory, nothing ' + D),
                 'C': ('mismatched_pair', '(no clock, no memory, nothing ' + D)},
         ctx=dict(pair='dash', marks_expected=3),
         why="Dashes set off a supplement at both ends, and they are the only pair that will "
             "work here because the supplement already contains commas of its own.",
         trap="B opens with a comma, which the supplement's own commas make impossible to "
              "read as a boundary."),
    dict(strand='PHY-S10', pos=10,
         carrier="A Cepheid gives away its true brightness by the time it takes to brighten "
                 "and fade ___ and a photographic plate full of anonymous points of light "
                 "therefore became a measuring rod that reached clean out of the galaxy.",
         rule='paired_commas',
         rule_span=', a relation found by measuring hundreds of plates,',
         opts=[', a relation found by measuring hundreds of plates',
               ', a relation found by measuring hundreds of plates,',
               D + ' a relation found by measuring hundreds of plates,',
               '(a relation found by measuring hundreds of plates,'], key='B',
         faults={'A': ('unpaired', ', a relation found by measuring hundreds of plates'),
                 'C': ('mismatched_pair',
                       D + ' a relation found by measuring hundreds of plates,'),
                 'D': ('mismatched_pair',
                       '(a relation found by measuring hundreds of plates,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A supplement set off by commas takes a comma at each end, which is what holds "
             "it inside a sentence this long.",
         trap="A is open at the far end, and by the time the reader reaches the closing "
              "clause the opening comma is forgotten."),
])

HUM = dict(domain='HUM', note_ar=(
    "جمل الإنسانيات تعترضها تواريخ الأعمال وأسماء المؤلّفين وأحكام الناقد على ما يصف، "
    "وهذه الأحكام أنسب ما يُحاط بالشرطتين، لأنها صوت الكاتب نفسه داخل الوصف فيحسن أن "
    "يُسمع على حدة."), xs=[
    dict(strand='HUM-S01', pos=1,
         carrier="The narrator ___ does not lie to the reader but leaves out what would "
                 "damage him.",
         rule='paired_commas', rule_span=', whose account is all we have,',
         opts=[', whose account is all we have',
               ', whose account is all we have,',
               D + ' whose account is all we have,',
               '(whose account is all we have,'], key='B',
         faults={'A': ('unpaired', ', whose account is all we have'),
                 'C': ('mismatched_pair', D + ' whose account is all we have,'),
                 'D': ('mismatched_pair', '(whose account is all we have,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A supplement set off by commas takes a comma at each end of it.",
         trap="A opens the supplement and leaves it open, which is the fault of this chapter "
              "in its plainest form."),
    dict(strand='HUM-S02', pos=2,
         carrier="Henry James ___ gave the technique its name and used it in most of his "
                 "late novels.",
         rule='appositive_commas', rule_span=', himself a critic before he was a novelist,',
         opts=[', himself a critic before he was a novelist',
               D + ' himself a critic before he was a novelist,',
               '(himself a critic before he was a novelist,',
               ', himself a critic before he was a novelist,'], key='D',
         faults={'A': ('unpaired', ', himself a critic before he was a novelist'),
                 'B': ('mismatched_pair',
                       D + ' himself a critic before he was a novelist,'),
                 'C': ('mismatched_pair',
                       '(himself a critic before he was a novelist,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A nonessential appositive is enclosed in commas, one at each end.",
         trap="B opens with a dash and closes with a comma, which is a pair made of two "
              "different marks."),
    dict(strand='HUM-S03', pos=3,
         carrier="A metaphor ___ stops being felt as a figure and passes into the language "
                 "as a single word nobody looks at twice.",
         rule='paired_commas', rule_span=', used often enough and long enough,',
         opts=[', used often enough and long enough,',
               ', used often enough and long enough',
               D + ' used often enough and long enough,',
               '(used often enough and long enough,'], key='A',
         faults={'B': ('unpaired', ', used often enough and long enough'),
                 'C': ('mismatched_pair', D + ' used often enough and long enough,'),
                 'D': ('mismatched_pair', '(used often enough and long enough,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A participial supplement is enclosed in commas, one at each end, since the "
             "sentence stands without it.",
         trap="B closes nothing, so the reader cannot tell where the condition stops and "
              "the main verb starts."),
    dict(strand='HUM-S04', pos=4,
         carrier="The English sonnet turns two lines later than the Italian form it was "
                 "translated from ___ and leaves a couplet at the end that the Italian does "
                 "not have.",
         rule='paired_dashes', rule_span=D + ' at the ninth line rather than the eighth ' + D,
         opts=[D + ' at the ninth line rather than the eighth',
               ', at the ninth line rather than the eighth ' + D,
               D + ' at the ninth line rather than the eighth ' + D,
               '(at the ninth line rather than the eighth ' + D], key='C',
         faults={'A': ('unpaired', D + ' at the ninth line rather than the eighth'),
                 'B': ('mismatched_pair',
                       ', at the ninth line rather than the eighth ' + D),
                 'D': ('mismatched_pair',
                       '(at the ninth line rather than the eighth ' + D)},
         ctx=dict(pair='dash', marks_expected=2),
         why="A supplement held between dashes needs a dash at each end of it.",
         trap="B opens with a comma and closes with a dash, which leaves the reader one of "
              "each."),
    dict(strand='HUM-S05', pos=5,
         carrier="The audience ___ had as much say in how an afternoon at the Globe went as "
                 "the writing did, and the weather had more.",
         rule='no_marks_needed', rule_span='that stood on three sides of the stage',
         opts=[', that stood on three sides of the stage,',
               'that stood on three sides of the stage',
               ', that stood on three sides of the stage',
               D + ' that stood on three sides of the stage ' + D], key='B',
         faults={'A': ('overpunctuated', ', that stood on three sides of the stage,'),
                 'C': ('overpunctuated', ', that stood on three sides of the stage'),
                 'D': ('wrong_mark', D + ' that stood on three sides of the stage ' + D)},
         ctx=dict(pair=None, marks_expected=0, mark_ok=[]),
         why="The clause says which part of the audience is meant, so it is essential and "
             "takes no marks at all.",
         trap="A sets commas round the words that identify the subject, which offers the "
              "reader permission to skip them."),
    dict(strand='HUM-S06', pos=6,
         carrier="The locked room ___ is the oldest promise the detective story makes, and "
                 "a novel written now cannot make it without also commenting on the hundred "
                 "that made it before.",
         rule='appositive_commas',
         rule_span=', a space nobody could have entered or left,',
         opts=[', a space nobody could have entered or left,',
               ', a space nobody could have entered or left',
               D + ' a space nobody could have entered or left,',
               '(a space nobody could have entered or left,'], key='A',
         faults={'B': ('unpaired', ', a space nobody could have entered or left'),
                 'C': ('mismatched_pair',
                       D + ' a space nobody could have entered or left,'),
                 'D': ('mismatched_pair',
                       '(a space nobody could have entered or left,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="The appositive explains the phrase in front of it and could be lifted out, so "
             "it is enclosed in commas at both ends.",
         trap="B leaves the appositive unclosed, and the sentence runs on long enough for "
              "that to go unnoticed."),
    dict(strand='HUM-S07', pos=7,
         carrier="The academy ranked a history painting above every other kind of subject "
                 "___ and a landscape shown there at all had to be defended as a history in "
                 "disguise.",
         rule='paired_parentheses',
         rule_span='(portrait, landscape, still life, in that order)',
         opts=['(portrait, landscape, still life, in that order',
               '(portrait, landscape, still life, in that order,',
               D + ' portrait, landscape, still life, in that order)',
               '(portrait, landscape, still life, in that order)'], key='D',
         faults={'A': ('unpaired', '(portrait, landscape, still life, in that order'),
                 'B': ('mismatched_pair',
                       '(portrait, landscape, still life, in that order,'),
                 'C': ('mismatched_pair',
                       D + ' portrait, landscape, still life, in that order)')},
         ctx=dict(pair='paren', marks_expected=4),
         why="Parentheses come in twos, and they are the only pair that will hold a list "
             "which already contains commas of its own.",
         trap="B closes with a comma that the reader cannot tell apart from the three commas "
              "inside the list."),
    dict(strand='HUM-S08', pos=8,
         carrier="No two of the surviving copies of the parts ___ agree with one another in "
                 "every reading, and an editor has to choose and then say in a note which "
                 "choice was made.",
         rule='paired_commas',
         rule_span=', all of them made by hand from one score,',
         opts=[', all of them made by hand from one score',
               D + ' all of them made by hand from one score,',
               ', all of them made by hand from one score,',
               '(all of them made by hand from one score,'], key='C',
         faults={'A': ('unpaired', ', all of them made by hand from one score'),
                 'B': ('mismatched_pair',
                       D + ' all of them made by hand from one score,'),
                 'D': ('mismatched_pair',
                       '(all of them made by hand from one score,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A supplement set off by commas takes a comma at each end, and this one sits "
             "between a long subject and its verb.",
         trap="A is open at the far end, which leaves the verb looking as though it belongs "
              "to the supplement."),
    dict(strand='HUM-S09', pos=9,
         carrier="The viaduct ___ was raised twenty feet above the shops that lined it so "
                 "that traffic could pass without stopping, and the city has since spent "
                 "more on taking the structure down than it ever spent putting it up.",
         rule='no_marks_needed', rule_span='that the 1948 plan proposed',
         opts=['that the 1948 plan proposed', ', that the 1948 plan proposed,',
               ', that the 1948 plan proposed',
               D + ' that the 1948 plan proposed ' + D], key='A',
         faults={'B': ('overpunctuated', ', that the 1948 plan proposed,'),
                 'C': ('overpunctuated', ', that the 1948 plan proposed'),
                 'D': ('wrong_mark', D + ' that the 1948 plan proposed ' + D)},
         ctx=dict(pair=None, marks_expected=0, mark_ok=[]),
         why="The clause says which viaduct is meant and so is essential, which means no "
             "marks at all.",
         trap="B encloses the identifying clause in commas, which makes the sentence sound "
              "as though there were only one viaduct in the world."),
    dict(strand='HUM-S10', pos=10,
         carrier="The critics who held that a poem's meaning is settled by the words on the "
                 "page ___ taught two generations to read as though the author were "
                 "unavailable, and the habit of asking what the poet had intended outlived "
                 "their argument by fifty years.",
         rule='paired_dashes',
         rule_span=D + ' and they were arguing against a habit, not a theory ' + D,
         opts=[D + ' and they were arguing against a habit, not a theory',
               ', and they were arguing against a habit, not a theory ' + D,
               D + ' and they were arguing against a habit, not a theory ' + D,
               '(and they were arguing against a habit, not a theory ' + D], key='C',
         faults={'A': ('unpaired',
                       D + ' and they were arguing against a habit, not a theory'),
                 'B': ('mismatched_pair',
                       ', and they were arguing against a habit, not a theory ' + D),
                 'D': ('mismatched_pair',
                       '(and they were arguing against a habit, not a theory ' + D)},
         ctx=dict(pair='dash', marks_expected=3),
         why="Dashes set a supplement off at both ends, and they are the pair to use when "
             "the supplement carries a comma of its own.",
         trap="B opens with a comma, which the comma inside the supplement then makes "
              "impossible to read as a boundary."),
])

SOC = dict(domain='SOC', note_ar=(
    "جمل العلوم الاجتماعية تعترضها تعريفات المقاييس وحدود العيّنة، وكثير منها لازم لتحديد "
    "المقصود فلا يُحاط بعلامة. والتمييز بين اللازم وغير اللازم هو أصعب ما في الباب."), xs=[
    dict(strand='SOC-S01', pos=1,
         carrier="The wording ___ changes the answers a question gets more than the order "
                 "of the options does.",
         rule='appositive_commas', rule_span=', not the subject matter,',
         opts=[', not the subject matter', D + ' not the subject matter,',
               ', not the subject matter,', '(not the subject matter,'], key='C',
         faults={'A': ('unpaired', ', not the subject matter'),
                 'B': ('mismatched_pair', D + ' not the subject matter,'),
                 'D': ('mismatched_pair', '(not the subject matter,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A contrasting appositive is nonessential and is enclosed in commas at both "
             "ends.",
         trap="A opens the supplement and never closes it, which is the plainest fault of "
              "the chapter."),
    dict(strand='SOC-S02', pos=2,
         carrier="Random assignment ___ leaves two groups alike in the things nobody thought "
                 "to measure.",
         rule='paired_commas', rule_span=', and this is the whole of its value,',
         opts=[', and this is the whole of its value,',
               ', and this is the whole of its value',
               D + ' and this is the whole of its value,',
               '(and this is the whole of its value,'], key='A',
         faults={'B': ('unpaired', ', and this is the whole of its value'),
                 'C': ('mismatched_pair', D + ' and this is the whole of its value,'),
                 'D': ('mismatched_pair', '(and this is the whole of its value,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A supplement set off by commas takes one at each end, and this interruption "
             "could be removed without loss.",
         trap="B is open at the far end, so the main verb reads as part of the "
              "interruption."),
    dict(strand='SOC-S03', pos=3,
         carrier="A confounder ___ is what makes two measurements rise and fall together "
                 "without either one causing the other at all.",
         rule='appositive_commas',
         rule_span=', a third variable nobody measured,',
         opts=[', a third variable nobody measured',
               ', a third variable nobody measured,',
               D + ' a third variable nobody measured,',
               '(a third variable nobody measured,'], key='B',
         faults={'A': ('unpaired', ', a third variable nobody measured'),
                 'C': ('mismatched_pair', D + ' a third variable nobody measured,'),
                 'D': ('mismatched_pair', '(a third variable nobody measured,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="The appositive defines the word in front of it and could be removed, so it is "
             "enclosed in commas.",
         trap="C opens with a dash and closes with a comma, and each mark looks right on its "
              "own."),
    dict(strand='SOC-S04', pos=4,
         carrier="The distributions ___ can describe populations with almost nothing in "
                 "common, which is why a report that gives only a mean has said very "
                 "little.",
         rule='no_marks_needed', rule_span='that share a mean',
         opts=[', that share a mean,', ', that share a mean',
               D + ' that share a mean ' + D, 'that share a mean'], key='D',
         faults={'A': ('overpunctuated', ', that share a mean,'),
                 'B': ('overpunctuated', ', that share a mean'),
                 'C': ('wrong_mark', D + ' that share a mean ' + D)},
         ctx=dict(pair=None, marks_expected=0, mark_ok=[]),
         why="The clause says which distributions are meant, so it is essential and takes no "
             "marks.",
         trap="A puts commas round the three words the sentence depends on, which says they "
              "could be left out."),
    dict(strand='SOC-S05', pos=5,
         carrier="A dollar paid in advance ___ buys a better response rate than five dollars "
                 "promised on completion of the whole questionnaire.",
         rule='paired_commas', rule_span=', a finding that has held for forty years,',
         opts=[', a finding that has held for forty years',
               D + ' a finding that has held for forty years,',
               ', a finding that has held for forty years,',
               '(a finding that has held for forty years,'], key='C',
         faults={'A': ('unpaired', ', a finding that has held for forty years'),
                 'B': ('mismatched_pair',
                       D + ' a finding that has held for forty years,'),
                 'D': ('mismatched_pair',
                       '(a finding that has held for forty years,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A supplement set off by commas takes a comma at each end, and this one "
             "interrupts a subject and its verb.",
         trap="A closes nothing, which leaves the verb looking as though it belongs to the "
              "supplement rather than to the subject."),
    dict(strand='SOC-S06', pos=6,
         carrier="The seven confederates in an Asch experiment gave the same wrong answer "
                 "calmly and in turn ___ and about a third of the subjects went along with "
                 "them rather than say what they could plainly see.",
         rule='paired_dashes', rule_span=D + ' no argument, no pressure, nothing ' + D,
         opts=[D + ' no argument, no pressure, nothing',
               D + ' no argument, no pressure, nothing ' + D,
               ', no argument, no pressure, nothing ' + D,
               '(no argument, no pressure, nothing ' + D], key='B',
         faults={'A': ('unpaired', D + ' no argument, no pressure, nothing'),
                 'C': ('mismatched_pair', ', no argument, no pressure, nothing ' + D),
                 'D': ('mismatched_pair', '(no argument, no pressure, nothing ' + D)},
         ctx=dict(pair='dash', marks_expected=3),
         why="Dashes set a supplement off at both ends, and they are the only pair that will "
             "hold a phrase with its own commas in it.",
         trap="C opens with a comma, which the two commas inside the supplement then make "
              "unreadable as a boundary."),
    dict(strand='SOC-S07', pos=7,
         carrier="The streetcar line ___ gave the neighborhood a shape it kept long after "
                 "the rails had been pulled up and nothing about the street had been "
                 "redrawn.",
         rule='paired_commas', rule_span=', which ran every six minutes,',
         opts=[', which ran every six minutes,', ', which ran every six minutes',
               D + ' which ran every six minutes,',
               '(which ran every six minutes,'], key='A',
         faults={'B': ('unpaired', ', which ran every six minutes'),
                 'C': ('mismatched_pair', D + ' which ran every six minutes,'),
                 'D': ('mismatched_pair', '(which ran every six minutes,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="A which-clause that adds a detail rather than identifying the subject is a "
             "supplement, so it takes commas at both ends.",
         trap="B leaves the clause open, which makes the verb that follows read as part of "
              "it."),
    dict(strand='SOC-S08', pos=8,
         carrier="The count of unemployment ___ understates how bad a long recession has "
                 "been, and the alternative measures the monthly report publishes beside it "
                 "are almost never quoted.",
         rule='no_marks_needed',
         rule_span='that includes only the people still looking for work',
         opts=[', that includes only the people still looking for work,',
               D + ' that includes only the people still looking for work ' + D,
               ', that includes only the people still looking for work',
               'that includes only the people still looking for work'], key='D',
         faults={'A': ('overpunctuated',
                       ', that includes only the people still looking for work,'),
                 'B': ('wrong_mark',
                       D + ' that includes only the people still looking for work ' + D),
                 'C': ('overpunctuated',
                       ', that includes only the people still looking for work')},
         ctx=dict(pair=None, marks_expected=0, mark_ok=[]),
         why="The clause says which count is meant, and the whole point of the sentence "
             "depends on it, so it is essential and takes no marks.",
         trap="A encloses the clause the argument rests on, which tells the reader it is an "
              "aside."),
    dict(strand='SOC-S09', pos=9,
         carrier="The share of income going to the richest households can be computed from "
                 "tax returns in some countries and only from household surveys in others "
                 "___ and the two sources disagree most about exactly the households the "
                 "measure was built to describe.",
         rule='paired_parentheses',
         rule_span='(the top one per cent, on the usual definition)',
         opts=['(the top one per cent, on the usual definition',
               '(the top one per cent, on the usual definition)',
               '(the top one per cent, on the usual definition,',
               D + ' the top one per cent, on the usual definition)'], key='B',
         faults={'A': ('unpaired', '(the top one per cent, on the usual definition'),
                 'C': ('mismatched_pair',
                       '(the top one per cent, on the usual definition,'),
                 'D': ('mismatched_pair',
                       D + ' the top one per cent, on the usual definition)')},
         ctx=dict(pair='paren', marks_expected=3),
         why="Parentheses come in twos, and they can hold a definition that carries a comma "
             "inside it without the reader losing the boundary.",
         trap="C closes with a comma, which cannot be told apart from the comma already "
              "inside the parenthesis."),
    dict(strand='SOC-S10', pos=10,
         carrier="People asked how likely a rare event is do not consult any record of how "
                 "often it has happened ___ which is why the answer follows what the "
                 "newspapers reported last week rather than what the century actually "
                 "contains.",
         rule='appositive_commas',
         rule_span=', the one thing that would settle it,',
         opts=[', the one thing that would settle it',
               D + ' the one thing that would settle it,',
               '(the one thing that would settle it,',
               ', the one thing that would settle it,'], key='D',
         faults={'A': ('unpaired', ', the one thing that would settle it'),
                 'B': ('mismatched_pair', D + ' the one thing that would settle it,'),
                 'C': ('mismatched_pair', '(the one thing that would settle it,')},
         ctx=dict(pair='comma', marks_expected=2),
         why="The appositive renames what came before it and is nonessential, so it takes a "
             "comma at each end.",
         trap="A leaves the appositive open, and the which-clause that follows then reads as "
              "part of it."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
