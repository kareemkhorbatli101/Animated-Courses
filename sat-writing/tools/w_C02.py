# -*- coding: utf-8 -*-
"""Chapter 2 - verb tense and aspect. Home domain HIS.

Key plans: HIS CABDCBADBD, BIO DBCADCBACA, PHY ACDBADCBDB, HUM BDACBADCAC,
SOC CABDCBADBD.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 2

AR = dict(
    qaida="زمن الفعل وجهته بابان متلازمان: الزمن يحدّد موضع الحدث من الماضي والحاضر، والجهة "
          "تحدّد هل تمّ الحدث أم كان مستمرّاً أم كان سابقاً على حدث آخر. فالماضي البسيط لحدث "
          "منتهٍ مؤرَّخ، والماضي التامّ لأسبق حدثين ماضيين، والمضارع التامّ لحدث بدأ في الماضي "
          "ولم ينته بعد، والمضارع البسيط لحقيقة قائمة لا تتعلّق بوقت.",
    kayf="يضع الاختبار في الجملة حدثين ماضيين ويطلب منك أن تحدّد الأسبق، أو يضع ظرفاً يدلّ على "
         "الامتداد أو الأسبقية فيحصر الزمن حصراً لا يقبل غيره، أو يأتي بشرط غير واقعي في الماضي "
         "ويطلب جوابه.",
    fakh="الفخّ أن الخيارات الأربعة كلّها سليمة نحوياً لو وُضعت في جملة أخرى. فلا تسأل أيّها "
         "صحيح في نفسه، بل أيّها يوافق القرينة الزمنية الموجودة في الجملة نفسها: التاريخ، أو "
         "الظرف، أو الفعل الآخر.",
    sila="زمن الفعل باب ثابت في قسم قواعد الإنجليزية المعيارية في اختبار سات، وهو من أسهل ما "
         "يُكتسب لأن القرينة مكتوبة في الجملة دائماً ولا تحتاج إلى معرفة خارجية. والقاعدة نفسها "
         "تعود في فصل التوازي حيث يجب أن تتطابق الأزمنة بين المتعاطفات.",
)

HIS = dict(domain='HIS', note_ar=(
    "جمل التاريخ والنظام المدني تحتوي على حدثين ماضيين أو أكثر، ومعها تواريخ صريحة وظروف تدلّ "
    "على الأسبقية، وهذه أوضح قرينة زمنية في الكتاب. فالترتيب بين الحدثين هو ما يُختبر هنا، "
    "وهذا هو المجال الأصلي لهذا الفصل."), xs=[
    dict(strand='HIS-S01', pos=1,
         carrier="Jefferson ___ the first draft of the Declaration in seventeen days in "
                 "June 1776.",
         rule='past_simple', rule_span='wrote',
         opts=['writing', 'has written', 'wrote', 'was writing'], key='C',
         faults={'A': ('nonfinite', 'writing'), 'B': ('wrong_tense', 'has written'),
                 'D': ('wrong_aspect', 'was writing')},
         why="The action is finished and carries a date, so it takes the simple past.",
         trap="A leaves a participle where the sentence needs its only finite verb, so no "
              "clause is completed at all."),
    dict(strand='HIS-S02', pos=2,
         carrier="Article One ___ all legislative power in a Congress of two chambers, a "
                 "House and a Senate.",
         rule='present_general', rule_span='vests',
         opts=['vests', 'vested', 'had vested', 'is vesting'], key='A',
         faults={'B': ('wrong_tense', 'vested'), 'C': ('wrong_tense', 'had vested'),
                 'D': ('wrong_aspect', 'is vesting')},
         why="A standing provision of a document still in force takes the simple present.",
         trap="B reads the clause as history, but the Constitution still vests the power, "
              "so the present is right."),
    dict(strand='HIS-S03', pos=3,
         carrier="The Naturalization Act of 1790 ___ eligibility to free white persons of "
                 "good character who had lived in the country two years.",
         rule='past_simple', rule_span='restricted',
         opts=['restricts', 'restricted', 'has restricted', 'was restricting'], key='B',
         faults={'A': ('wrong_tense', 'restricts'),
                 'C': ('wrong_tense', 'has restricted'),
                 'D': ('wrong_aspect', 'was restricting')},
         why="The Act is dated and its provision has since been replaced, so the simple "
             "past is right.",
         trap="C uses the present perfect, which reaches into the present and so denies "
              "that the Act was superseded."),
    dict(strand='HIS-S04', pos=4,
         carrier="By the time Garrison founded his newspaper in 1831, Britain ___ the trade in "
                 "slaves across the Atlantic but had not yet touched slavery itself.",
         rule='past_perfect_sequence', rule_span='had abolished',
         opts=['abolished', 'abolishes', 'was abolishing', 'had abolished'], key='D',
         faults={'A': ('wrong_aspect', 'abolished'), 'B': ('wrong_tense', 'abolishes'),
                 'C': ('wrong_aspect', 'was abolishing')},
         why="Of two past actions the earlier takes the past perfect, and the abolition of "
             "the trade came first.",
         trap="A puts both actions in the simple past and loses the order the sentence "
              "depends on."),
    dict(strand='HIS-S05', pos=5,
         carrier="Historians ___ about the ending of Reconstruction since the 1930s, and "
                 "the argument has shifted direction at least twice since then.",
         rule='present_perfect_continuing', rule_span='have argued',
         opts=['argued', 'argue', 'have argued', 'are arguing'], key='C',
         faults={'A': ('wrong_tense', 'argued'), 'B': ('wrong_tense', 'argue'),
                 'D': ('wrong_aspect', 'are arguing')},
         why="The arguing began in the past and still goes on, which is what since marks, "
             "so the present perfect is right.",
         trap="A uses the simple past and so says the argument is over, which since the "
              "1930s contradicts."),
    dict(strand='HIS-S06', pos=6,
         carrier="When the Triangle factory caught fire in 1911, the legislature ___ a bill "
                 "that would have required outward-opening doors, and the bill passed into "
                 "law within the year.",
         rule='past_progressive', rule_span='was considering',
         opts=['considered', 'was considering', 'has considered', 'considers'], key='B',
         faults={'A': ('wrong_aspect', 'considered'),
                 'C': ('wrong_tense', 'has considered'),
                 'D': ('wrong_tense', 'considers')},
         why="The action was already in progress when the fire interrupted it, so the past "
             "progressive is right.",
         trap="A uses the simple past, which makes the consideration a finished event "
              "rather than one the fire cut across."),
    dict(strand='HIS-S07', pos=7,
         carrier="By the time the Montgomery boycott ended in December 1956, the Supreme "
                 "Court ___ that segregation on the city's buses was unconstitutional, and "
                 "the boycott's leaders had already turned to other cities.",
         rule='past_perfect_sequence', rule_span='had ruled',
         opts=['had ruled', 'ruled', 'rules', 'was ruling'], key='A',
         faults={'B': ('wrong_aspect', 'ruled'), 'C': ('tense_shift', 'rules'),
                 'D': ('wrong_aspect', 'was ruling')},
         why="The ruling came before the boycott ended, and of two past actions the earlier "
             "takes the past perfect.",
         trap="B uses the simple past, which leaves the order of the ruling and the ending "
              "undecided."),
    dict(strand='HIS-S08', pos=8,
         carrier="Had the mandates been granted to the inhabitants rather than to the "
                 "victorious powers, the map of the Middle East ___ a different shape, and "
                 "several of the borders drawn in 1920 would not exist.",
         rule='conditional_sequence', rule_span='would have taken',
         opts=['would take', 'took', 'has taken', 'would have taken'], key='D',
         faults={'A': ('wrong_aspect', 'would take'), 'B': ('wrong_tense', 'took'),
                 'C': ('wrong_tense', 'has taken')},
         ctx=dict(tense='conditional_perfect'),
         why="The condition is contrary to fact and set in past time, so the consequence "
             "takes would with a perfect infinitive.",
         trap="A uses would with a plain verb, which fits a present condition but not one "
              "set in 1920."),
    dict(strand='HIS-S09', pos=9,
         carrier="When the Supreme Court finally considered the internment of Japanese "
                 "Americans in 1944, the War Relocation Authority ___ most of the camps for "
                 "more than a year, and the military necessity the government had claimed "
                 "was no longer being asserted by anyone.",
         rule='past_perfect_sequence', rule_span='had been running',
         opts=['has been running', 'had been running', 'was running', 'ran'], key='B',
         faults={'A': ('wrong_tense', 'has been running'),
                 'C': ('wrong_aspect', 'was running'), 'D': ('wrong_aspect', 'ran')},
         why="The running of the camps began before the Court considered the case, so the "
             "earlier action takes the past perfect.",
         trap="A uses the present perfect, which would mean the camps are still being run "
              "today."),
    dict(strand='HIS-S10', pos=10,
         carrier="Ever since the first newspaper endorsements were counted against election "
                 "returns in the 1920s, researchers ___ whether an endorsement changes any "
                 "votes at all, and the honest answer is still that the effect, if there is "
                 "one, is too small to measure reliably.",
         rule='present_perfect_continuing', rule_span='have been asking',
         opts=['asked', 'ask', 'are asking', 'have been asking'], key='D',
         faults={'A': ('wrong_tense', 'asked'), 'B': ('wrong_tense', 'ask'),
                 'C': ('wrong_aspect', 'are asking')},
         why="The asking began in the 1920s and has not stopped, so the present perfect "
             "carries it.",
         trap="A uses the simple past, which would close a question the sentence says is "
              "still open."),
])

BIO = dict(domain='BIO', note_ar=(
    "جمل الأحياء وعلوم الأرض تخلط الحقيقة القائمة بالحدث المؤرَّخ: الانتخاب الطبيعي يعمل الآن، "
    "ومندل زرع نباتاته مرّة واحدة في القرن التاسع عشر. والتمييز بين الاثنين هو أوّل ما يُطلب "
    "في هذا الفصل."), xs=[
    dict(strand='BIO-S01', pos=1,
         carrier="Natural selection ___ on variation that already exists in a population "
                 "rather than creating it.",
         rule='present_general', rule_span='acts',
         opts=['acted', 'had acted', 'acting', 'acts'], key='D',
         faults={'A': ('wrong_tense', 'acted'), 'B': ('wrong_tense', 'had acted'),
                 'C': ('nonfinite', 'acting')},
         why="Selection works this way now and always, which is a standing truth and takes "
             "the simple present.",
         trap="C leaves a participle where the sentence needs a finite verb, so the words "
              "never become a clause."),
    dict(strand='BIO-S02', pos=2,
         carrier="Mendel ___ about twenty-eight thousand pea plants over eight years in the "
                 "monastery garden.",
         rule='past_simple', rule_span='grew',
         opts=['grows', 'grew', 'has grown', 'was growing'], key='B',
         faults={'A': ('wrong_tense', 'grows'), 'C': ('wrong_tense', 'has grown'),
                 'D': ('wrong_aspect', 'was growing')},
         why="The work is finished and bounded by eight named years, so the simple past is "
             "right.",
         trap="C uses the present perfect, which would have Mendel still growing peas."),
    dict(strand='BIO-S03', pos=3,
         carrier="A cell ___ most of its energy from the gradient of protons across the "
                 "inner mitochondrial membrane, not from the splitting of glucose itself.",
         rule='present_general', rule_span='draws',
         opts=['drew', 'had drawn', 'draws', 'is drawing'], key='C',
         faults={'A': ('wrong_tense', 'drew'), 'B': ('tense_shift', 'had drawn'),
                 'D': ('wrong_aspect', 'is drawing')},
         why="How a cell works is a standing truth, so it takes the simple present.",
         trap="A puts a permanent mechanism in the past, as though cells had since changed "
              "their chemistry."),
    dict(strand='BIO-S04', pos=4,
         carrier="By the time wolves returned to Yellowstone in 1995, elk ___ the streamside "
                 "willows so heavily that beavers had almost vanished from the park.",
         rule='past_perfect_sequence', rule_span='had browsed',
         opts=['had browsed', 'browsed', 'browse', 'were browsing'], key='A',
         faults={'B': ('wrong_aspect', 'browsed'), 'C': ('wrong_tense', 'browse'),
                 'D': ('wrong_aspect', 'were browsing')},
         why="The browsing came before the wolves returned, and the earlier of two past "
             "actions takes the past perfect.",
         trap="B uses the simple past, which puts the browsing and the return in no "
              "particular order."),
    dict(strand='BIO-S05', pos=5,
         carrier="When the last passenger pigeon died in 1914, the species ___ for forty "
                 "years, and nobody had thought to count the birds while they were still "
                 "common.",
         rule='past_perfect_sequence', rule_span='had been declining',
         opts=['has been declining', 'declined', 'is declining', 'had been declining'],
         key='D',
         faults={'A': ('wrong_tense', 'has been declining'),
                 'B': ('wrong_aspect', 'declined'),
                 'C': ('wrong_tense', 'is declining')},
         why="The decline ran for forty years up to the death, so the past perfect carries "
             "it, in its continuing form.",
         trap="A uses the present perfect, which would have a species extinct in 1914 still "
              "declining now."),
    dict(strand='BIO-S06', pos=6,
         carrier="Since Koch set out his postulates in the 1880s, microbiologists ___ for a "
                 "way to apply them to organisms that cannot be grown in pure culture, and "
                 "some viruses still resist the test.",
         rule='present_perfect_continuing', rule_span='have been looking',
         opts=['looked', 'are looking', 'have been looking', 'had looked'], key='C',
         faults={'A': ('wrong_tense', 'looked'), 'B': ('wrong_aspect', 'are looking'),
                 'D': ('wrong_tense', 'had looked')},
         why="The looking began in the 1880s and has not finished, so the present perfect "
             "is right.",
         trap="A uses the simple past and so closes a search the sentence says is still "
              "open."),
    dict(strand='BIO-S07', pos=7,
         carrier="When Haber and Bosch found a way to fix nitrogen industrially in 1913, "
                 "European farmers ___ guano shipped from Peru and nitrate mined in Chile, "
                 "and both trades collapsed within a decade.",
         rule='past_progressive', rule_span='were using',
         opts=['used', 'were using', 'has been using', 'would use'], key='B',
         faults={'A': ('wrong_aspect', 'used'), 'C': ('wrong_tense', 'has been using'),
                 'D': ('tense_shift', 'would use')},
         why="The practice was going on when the discovery interrupted it, so the past "
             "progressive is right.",
         trap="A uses the simple past, which makes the practice a finished episode rather "
              "than one the discovery ended."),
    dict(strand='BIO-S08', pos=8,
         carrier="The ice at the bottom of a deep Antarctic core ___ air that was last in "
                 "contact with the atmosphere eight hundred thousand years ago, which is "
                 "why the record reaches so far back.",
         rule='present_general', rule_span='holds',
         opts=['holds', 'held', 'has held', 'holding'], key='A',
         faults={'B': ('wrong_tense', 'held'), 'C': ('wrong_aspect', 'has held'),
                 'D': ('nonfinite', 'holding')},
         why="The ice holds the air now, which is a present fact about a present object, so "
             "the simple present is right.",
         trap="B puts in the past something that is true of the core as it sits in the "
              "laboratory today."),
    dict(strand='BIO-S09', pos=9,
         carrier="If Bretz had published his account of the Channeled Scablands a "
                 "generation later, when aerial photographs of the region were available "
                 "and the Missoula ice dam had been mapped, the reception of his argument "
                 "___ very different, and he would not have waited fifty years for the "
                 "discipline's highest medal.",
         rule='conditional_sequence', rule_span='would have been',
         opts=['would be', 'was', 'would have been', 'has been'], key='C',
         faults={'A': ('wrong_aspect', 'would be'), 'B': ('wrong_tense', 'was'),
                 'D': ('wrong_tense', 'has been')},
         ctx=dict(tense='conditional_perfect'),
         why="The condition is contrary to fact and set in the past, so the consequence "
             "takes would with a perfect infinitive.",
         trap="A uses would with a plain verb, which would suit a condition about the "
              "present rather than one about the 1920s."),
    dict(strand='BIO-S10', pos=10,
         carrier="By the time the first satellite measurements of sea ice began in 1979, "
                 "the Arctic ___ through a warm period in the 1930s and a cool one in the "
                 "1960s, neither of which the satellite record can see at all.",
         rule='past_perfect_sequence', rule_span='had passed',
         opts=['had passed', 'passes', 'has passed', 'was passing'], key='A',
         faults={'B': ('wrong_tense', 'passes'), 'C': ('wrong_tense', 'has passed'),
                 'D': ('wrong_aspect', 'was passing')},
         why="Both warm and cool periods came before the satellites began, so the earlier "
             "actions take the past perfect.",
         trap="C uses the present perfect, which cannot sit under a by-the-time clause set "
              "in 1979."),
])

PHY = dict(domain='PHY', note_ar=(
    "جمل العلوم الفيزيائية تقرّر قوانين لا تتغيّر، فتطلب المضارع البسيط، ثمّ تروي تاريخ "
    "اكتشاف تلك القوانين، فتطلب الماضي. والفخّ أن تنجرّ بالتاريخ المذكور في الجملة فتضع "
    "الماضي حيث القانون ما زال قائماً."), xs=[
    dict(strand='PHY-S01', pos=1,
         carrier="Every measurement ___ an uncertainty, and a result reported without one "
                 "is incomplete.",
         rule='present_general', rule_span='carries',
         opts=['carries', 'carried', 'had carried', 'is carrying'], key='A',
         faults={'B': ('wrong_tense', 'carried'), 'C': ('wrong_tense', 'had carried'),
                 'D': ('wrong_aspect', 'is carrying')},
         why="This is true of every measurement ever made, so it takes the simple present.",
         trap="B puts a permanent fact about measurement into the past."),
    dict(strand='PHY-S02', pos=2,
         carrier="Galileo ___ that a heavy ball and a light one fall at the same rate in a "
                 "vacuum.",
         rule='past_simple', rule_span='argued',
         opts=['argues', 'has argued', 'argued', 'was arguing'], key='C',
         faults={'A': ('wrong_tense', 'argues'), 'B': ('wrong_tense', 'has argued'),
                 'D': ('wrong_aspect', 'was arguing')},
         why="Galileo's arguing is over, so the simple past is right even though what he "
             "argued is still true.",
         trap="A uses the present because the claim still holds, but the arguing was done "
              "four centuries ago."),
    dict(strand='PHY-S03', pos=3,
         carrier="Energy ___ neither created nor destroyed in any process yet measured, "
                 "though it moves and spreads and becomes harder to use.",
         rule='present_general', rule_span='is',
         opts=['was', 'had been', 'has been', 'is'], key='D',
         faults={'A': ('wrong_tense', 'was'), 'B': ('tense_shift', 'had been'),
                 'C': ('wrong_aspect', 'has been')},
         why="A conservation law holds now, so it takes the simple present, matching moves "
             "and spreads later in the sentence.",
         trap="C uses the present perfect, which makes a law sound like an accumulated "
              "result rather than a standing one."),
    dict(strand='PHY-S04', pos=4,
         carrier="Carnot ___ the limit on the efficiency of a heat engine in 1824, before "
                 "the first law of thermodynamics had been clearly stated.",
         rule='past_simple', rule_span='established',
         opts=['establishes', 'established', 'has established', 'was establishing'],
         key='B',
         faults={'A': ('wrong_tense', 'establishes'),
                 'C': ('wrong_tense', 'has established'),
                 'D': ('wrong_aspect', 'was establishing')},
         why="A dated act by a named person is finished, so the simple past is right.",
         trap="C uses the present perfect, which cannot carry the date 1824."),
    dict(strand='PHY-S05', pos=5,
         carrier="Before Volta built the first battery in 1800, experimenters ___ only with "
                 "charge stored briefly in jars, and no steady current had ever been "
                 "produced.",
         rule='past_perfect_sequence', rule_span='had worked',
         opts=['had worked', 'works', 'were working', 'have been working'], key='A',
         faults={'B': ('wrong_tense', 'works'), 'C': ('wrong_aspect', 'were working'),
                 'D': ('wrong_tense', 'have been working')},
         why="The jar experiments came before Volta's battery, so the earlier work takes "
             "the past perfect.",
         trap="C uses the past progressive, which says what was going on rather than what "
              "had been finished by 1800."),
    dict(strand='PHY-S06', pos=6,
         carrier="Physicists ___ the speed of light since the seventeenth century, and "
                 "since 1983 the number has been fixed by definition rather than measured, "
                 "which makes the meter depend on it.",
         rule='present_perfect_continuing', rule_span='have been measuring',
         opts=['measured', 'measure', 'are measuring', 'have been measuring'], key='D',
         faults={'A': ('wrong_tense', 'measured'), 'B': ('wrong_tense', 'measure'),
                 'C': ('wrong_aspect', 'are measuring')},
         why="The measuring runs from the seventeenth century to the present, which is what "
             "since marks, so the present perfect is right.",
         trap="A uses the simple past and so detaches the work from the present that since "
              "the seventeenth century reaches into."),
    dict(strand='PHY-S07', pos=7,
         carrier="When Lavoisier weighed the sealed vessel before and after the reaction in "
                 "1774, most chemists ___ that burning destroyed matter, and his "
                 "measurement ended the idea within a decade.",
         rule='past_progressive', rule_span='were still holding',
         opts=['held', 'have been holding', 'were still holding', 'to hold'], key='C',
         faults={'A': ('wrong_aspect', 'held'),
                 'B': ('wrong_tense', 'have been holding'),
                 'D': ('nonfinite', 'to hold')},
         why="The belief was in force at the moment the measurement cut across it, so the "
             "past progressive is right.",
         trap="A uses the simple past, which does not mark the belief as the thing the "
              "experiment interrupted."),
    dict(strand='PHY-S08', pos=8,
         carrier="If the designers of the Tacoma Narrows bridge had tested a model in a "
                 "wind tunnel, as the designers of later suspension bridges routinely did, "
                 "the deck ___ the oscillation that destroyed it four months after it "
                 "opened.",
         rule='conditional_sequence', rule_span='might have survived',
         opts=['survives', 'might have survived', 'would survive', 'had survived'],
         key='B',
         faults={'A': ('wrong_tense', 'survives'), 'C': ('wrong_aspect', 'would survive'),
                 'D': ('wrong_tense', 'had survived')},
         ctx=dict(tense='conditional_perfect'),
         why="The condition is contrary to fact and set in 1940, so the consequence takes "
             "would, or another modal, with a perfect infinitive.",
         trap="C uses a plain conditional, which would fit a bridge not yet built rather "
              "than one that fell."),
    dict(strand='PHY-S09', pos=9,
         carrier="By the time Libby published the first radiocarbon dates in 1949, "
                 "archaeologists ___ on stylistic sequences and on the rare site where a "
                 "written date survived, and a method that could date a piece of charcoal "
                 "directly changed the discipline within ten years.",
         rule='past_perfect_sequence', rule_span='had relied',
         opts=['rely', 'have relied', 'were relying', 'had relied'], key='D',
         faults={'A': ('wrong_tense', 'rely'), 'B': ('wrong_tense', 'have relied'),
                 'C': ('wrong_aspect', 'were relying')},
         why="The reliance ran up to 1949 and stopped there, so the past perfect is right.",
         trap="B uses the present perfect, which would have archaeologists still without "
              "radiocarbon dating today."),
    dict(strand='PHY-S10', pos=10,
         carrier="A Cepheid variable ___ its period to its true brightness, which is why a "
                 "star of this kind, once its period is timed, gives the distance to the "
                 "galaxy that holds it, and why the method still carries Leavitt's name.",
         rule='present_general', rule_span='ties',
         opts=['tied', 'ties', 'has tied', 'tying'], key='B',
         faults={'A': ('wrong_tense', 'tied'), 'C': ('wrong_aspect', 'has tied'),
                 'D': ('nonfinite', 'tying')},
         why="The relation between period and brightness holds whenever such a star is "
             "observed, so the simple present is right.",
         trap="A puts in the past a relation the rest of the sentence states in the present "
              "with gives and carries."),
])

HUM = dict(domain='HUM', note_ar=(
    "جمل الإنسانيات تتحدّث عن أعمال كُتبت في زمن بعيد وما زالت تُقرأ، فيلتقي فيها الماضي "
    "المؤرَّخ بالمضارع الذي يصف العمل نفسه. وهذا الالتقاء هو مصدر الخطأ الأكثر شيوعاً في "
    "هذا الباب."), xs=[
    dict(strand='HUM-S01', pos=1,
         carrier="Henry James ___ the phrase central intelligence for the character through "
                 "whose eyes a story is seen.",
         rule='past_simple', rule_span='coined',
         opts=['coins', 'coined', 'has coined', 'was coining'], key='B',
         faults={'A': ('wrong_tense', 'coins'), 'C': ('wrong_tense', 'has coined'),
                 'D': ('wrong_aspect', 'was coining')},
         why="The coining happened once and is over, so the simple past is right even "
             "though the phrase is still used.",
         trap="A uses the present because the term survives, but the act of coining does "
              "not repeat."),
    dict(strand='HUM-S02', pos=2,
         carrier="A character's stated reason for acting ___ rarely the whole of the motive "
                 "a reader is meant to infer.",
         rule='present_general', rule_span='is',
         opts=['was', 'had been', 'has been', 'is'], key='D',
         faults={'A': ('wrong_tense', 'was'), 'B': ('tense_shift', 'had been'),
                 'C': ('wrong_aspect', 'has been')},
         why="This is a general claim about how fiction works, so it takes the simple "
             "present, matching is meant later in the sentence.",
         trap="A puts a general truth about reading into the past, as though it had stopped "
              "being true."),
    dict(strand='HUM-S03', pos=3,
         carrier="Imagism ___ in 1912 with the demand that a poem present a thing directly "
                 "and drop every word that did not contribute.",
         rule='past_simple', rule_span='began',
         opts=['began', 'begins', 'has begun', 'was beginning'], key='A',
         faults={'B': ('wrong_tense', 'begins'), 'C': ('wrong_tense', 'has begun'),
                 'D': ('wrong_aspect', 'was beginning')},
         why="A movement with a date began once, so the simple past is right.",
         trap="C uses the present perfect, which cannot take the date 1912 that the "
              "sentence supplies."),
    dict(strand='HUM-S04', pos=4,
         carrier="When Shakespeare wrote his sonnets in the 1590s, English poets ___ with "
                 "the Italian form for half a century and had already settled on a rhyme "
                 "scheme of their own.",
         rule='past_perfect_sequence', rule_span='had been experimenting',
         opts=['experimented', 'experiment', 'had been experimenting',
               'have experimented'], key='C',
         faults={'A': ('wrong_aspect', 'experimented'),
                 'B': ('wrong_tense', 'experiment'),
                 'D': ('wrong_tense', 'have experimented')},
         why="The experimenting ran for fifty years up to the 1590s, so the past perfect is "
             "right, in its continuing form.",
         trap="A uses the simple past, which gives no sense of a half-century already "
              "behind the sonnets."),
    dict(strand='HUM-S05', pos=5,
         carrier="When the Globe burned in 1613, the company ___ a new play by Shakespeare "
                 "and Fletcher, and the wadding from a stage cannon set the thatch alight.",
         rule='past_progressive', rule_span='was performing',
         opts=['performed', 'was performing', 'has performed', 'performs'], key='B',
         faults={'A': ('wrong_aspect', 'performed'),
                 'C': ('wrong_tense', 'has performed'),
                 'D': ('tense_shift', 'performs')},
         why="The performance was under way when the fire began, so the past progressive is "
             "right.",
         trap="A uses the simple past, which makes the performance a completed event rather "
              "than the thing in progress."),
    dict(strand='HUM-S06', pos=6,
         carrier="Ever since the detective story settled into its shape in the 1890s, "
                 "writers ___ against the rules of the form, and a novel that breaks them "
                 "still depends on the reader knowing them.",
         rule='present_perfect_continuing', rule_span='have pushed',
         opts=['have pushed', 'pushes', 'push', 'are still pushing'], key='A',
         faults={'B': ('wrong_tense', 'pushes'), 'C': ('wrong_tense', 'push'),
                 'D': ('wrong_aspect', 'are still pushing')},
         why="The pushing started in the 1890s and continues, so the present perfect is "
             "right.",
         trap="B uses the simple present, which drops the century the sentence reaches back "
              "across."),
    dict(strand='HUM-S07', pos=7,
         carrier="A varnish layer that has yellowed ___ a painting's blues toward green, "
                 "which is why a cleaned canvas can look colder than any viewer alive has "
                 "ever seen it.",
         rule='present_general', rule_span='turns',
         opts=['turned', 'had turned', 'is turning', 'turns'], key='D',
         faults={'A': ('wrong_tense', 'turned'), 'B': ('wrong_tense', 'had turned'),
                 'C': ('wrong_aspect', 'is turning')},
         why="This is what yellowed varnish always does, a standing truth, so it takes the "
             "simple present.",
         trap="A puts in the past an effect that is on the canvas now, which is why a "
              "cleaned one looks colder."),
    dict(strand='HUM-S08', pos=8,
         carrier="By the time the Rite of Spring was played again in 1914, a year after the "
                 "riot at its premiere, the Paris audience ___ to the sound, and the piece "
                 "was applauded without incident.",
         rule='past_perfect_sequence', rule_span='had grown accustomed',
         opts=['grew accustomed', 'grows accustomed', 'had grown accustomed',
               'has grown accustomed'], key='C',
         faults={'A': ('wrong_aspect', 'grew accustomed'),
                 'B': ('wrong_tense', 'grows accustomed'),
                 'D': ('wrong_tense', 'has grown accustomed')},
         why="The audience changed before the second performance, so the earlier of the two "
             "past events takes the past perfect.",
         trap="A uses the simple past and leaves the order of growing used to it and "
              "hearing it again unsettled."),
    dict(strand='HUM-S09', pos=9,
         carrier="If the elevated expressway along the waterfront had been built as the "
                 "1948 plan proposed, running for two miles between the old market and the "
                 "harbor, the district that tourists now walk through ___ a service road "
                 "under a concrete deck.",
         rule='conditional_sequence', rule_span='would have become',
         opts=['would have become', 'becomes', 'would become', 'had become'], key='A',
         faults={'B': ('wrong_tense', 'becomes'), 'C': ('wrong_aspect', 'would become'),
                 'D': ('wrong_tense', 'had become')},
         ctx=dict(tense='conditional_perfect'),
         why="The expressway was never built, so the condition is contrary to fact in past "
             "time and takes would with a perfect infinitive.",
         trap="C uses a plain conditional, which would suit a plan still on the table "
              "rather than one abandoned in 1948."),
    dict(strand='HUM-S10', pos=10,
         carrier="By the time Wimsatt and Beardsley published their essay on the "
                 "intentional fallacy in 1946, critics ___ for two decades about whether a "
                 "poet's stated purpose settles what a poem means, and the essay did not "
                 "end the argument so much as name it.",
         rule='past_perfect_sequence', rule_span='had been arguing',
         opts=['have been arguing', 'argued', 'had been arguing', 'arguing'], key='C',
         faults={'A': ('wrong_tense', 'have been arguing'),
                 'B': ('wrong_aspect', 'argued'), 'D': ('nonfinite', 'arguing')},
         why="The arguing filled the twenty years before 1946, so the past perfect is "
             "right, in its continuing form.",
         trap="A uses the present perfect, which would run the two decades up to today "
              "rather than up to the essay."),
])

SOC = dict(domain='SOC', note_ar=(
    "جمل العلوم الاجتماعية تقول نتائج دراسات بدأت في الماضي ولم تنته، ومعها ظروف تدلّ على "
    "الامتداد من وقت معيّن إلى الآن، وهذه القرينة تطلب المضارع التامّ لا الماضي البسيط."),
    xs=[
    dict(strand='SOC-S01', pos=1,
         carrier="The order in which the choices appear ___ which one a respondent picks.",
         rule='present_general', rule_span='affects',
         opts=['affected', 'had affected', 'affects', 'is affecting'], key='C',
         faults={'A': ('wrong_tense', 'affected'), 'B': ('wrong_tense', 'had affected'),
                 'D': ('wrong_aspect', 'is affecting')},
         why="This is a finding about how surveys work in general, so it takes the simple "
             "present.",
         trap="A puts a standing property of questionnaires into the past."),
    dict(strand='SOC-S02', pos=2,
         carrier="Fisher ___ the drawing of lots into agricultural experiments at "
                 "Rothamsted in the 1920s.",
         rule='past_simple', rule_span='introduced',
         opts=['introduced', 'introduces', 'has introduced', 'was introducing'], key='A',
         faults={'B': ('wrong_tense', 'introduces'),
                 'C': ('wrong_tense', 'has introduced'),
                 'D': ('wrong_aspect', 'was introducing')},
         why="Fisher did this once, at a named place in a named decade, so the simple past "
             "is right.",
         trap="C uses the present perfect, which cannot carry a decade as specific as the "
              "1920s."),
    dict(strand='SOC-S03', pos=3,
         carrier="A correlation between two measurements ___ nothing about which of them, "
                 "if either, causes the other, and a third variable may cause both.",
         rule='present_general', rule_span='settles',
         opts=['settled', 'settles', 'has settled', 'settling'], key='B',
         faults={'A': ('wrong_tense', 'settled'), 'C': ('wrong_aspect', 'has settled'),
                 'D': ('nonfinite', 'settling')},
         why="This is a permanent limitation of correlation, so it takes the simple present, "
             "matching may later in the sentence.",
         trap="D leaves a participle where the clause needs a finite verb, so nothing is "
              "asserted at all."),
    dict(strand='SOC-S04', pos=4,
         carrier="When the Census Bureau adopted the current unemployment measure in 1940, "
                 "statisticians ___ for twenty years about who should count as looking for "
                 "work.",
         rule='past_perfect_sequence', rule_span='had disagreed',
         opts=['disagree', 'have disagreed', 'were disagreeing', 'had disagreed'], key='D',
         faults={'A': ('wrong_tense', 'disagree'),
                 'B': ('wrong_tense', 'have disagreed'),
                 'C': ('wrong_aspect', 'were disagreeing')},
         why="The twenty years of disagreement ran up to 1940, so the past perfect is "
             "right.",
         trap="B uses the present perfect, which would run the disagreement up to today "
              "instead of up to the adoption."),
    dict(strand='SOC-S05', pos=5,
         carrier="Economists ___ small cash incentives in survey research since the 1970s, "
                 "and the finding that a dollar in advance beats five on completion has "
                 "held up repeatedly.",
         rule='present_perfect_continuing', rule_span='have been testing',
         opts=['tested', 'test', 'have been testing', 'are testing'], key='C',
         faults={'A': ('wrong_tense', 'tested'), 'B': ('wrong_tense', 'test'),
                 'D': ('wrong_aspect', 'are testing')},
         why="The testing began in the 1970s and continues, which is what since marks, so "
             "the present perfect is right.",
         trap="A uses the simple past and so detaches the work from the present that has "
              "held up reaches into."),
    dict(strand='SOC-S06', pos=6,
         carrier="When Asch ran his line-judging experiments in the early 1950s, American "
                 "social psychologists ___ mainly about why people had obeyed orders in "
                 "wartime, and conformity looked like the same question in a smaller room.",
         rule='past_progressive', rule_span='were arguing',
         opts=['argued', 'were arguing', 'have been arguing', 'argue'], key='B',
         faults={'A': ('wrong_aspect', 'argued'),
                 'C': ('wrong_tense', 'have been arguing'),
                 'D': ('tense_shift', 'argue')},
         why="The discipline's preoccupation was in force while Asch worked, so the past "
             "progressive is right.",
         trap="A uses the simple past, which makes the preoccupation a finished episode "
              "rather than the climate Asch worked in."),
    dict(strand='SOC-S07', pos=7,
         carrier="A city ___ its shape from the cost of moving people across it, which is "
                 "why the streetcar left a different pattern behind than the automobile "
                 "did.",
         rule='present_general', rule_span='takes',
         opts=['takes', 'took', 'has taken', 'was taking'], key='A',
         faults={'B': ('wrong_tense', 'took'), 'C': ('wrong_aspect', 'has taken'),
                 'D': ('wrong_tense', 'was taking')},
         why="This is a general principle about cities, so it takes the simple present even "
             "though the examples are historical.",
         trap="B is pulled into the past by streetcar and automobile, but the principle "
              "holds for cities being built now."),
    dict(strand='SOC-S08', pos=8,
         carrier="If the monthly household survey had been designed to follow the same "
                 "families for a decade rather than to sample fresh households each month, "
                 "the question of how long a spell of unemployment lasts ___ far easier to "
                 "answer.",
         rule='conditional_sequence', rule_span='would have been',
         opts=['is', 'would be', 'had been', 'would have been'], key='D',
         faults={'A': ('wrong_tense', 'is'), 'B': ('wrong_aspect', 'would be'),
                 'C': ('wrong_tense', 'had been')},
         ctx=dict(tense='conditional_perfect'),
         why="The survey was designed the other way long ago, so the condition is contrary "
             "to fact in past time and takes would with a perfect infinitive.",
         trap="B uses a plain conditional, which would fit a survey still being designed."),
    dict(strand='SOC-S09', pos=9,
         carrier="By the time Kuznets presented the first American income distributions to "
                 "Congress in the 1930s, European statisticians ___ comparable tables from "
                 "tax records for a generation, and the two kinds of source still do not "
                 "agree about the top of the distribution.",
         rule='past_perfect_sequence', rule_span='had been building',
         opts=['have been building', 'had been building', 'built', 'build'], key='B',
         faults={'A': ('wrong_tense', 'have been building'),
                 'C': ('wrong_aspect', 'built'), 'D': ('wrong_tense', 'build')},
         why="The European tables came first and ran for a generation, so the past perfect "
             "is right, in its continuing form.",
         trap="A uses the present perfect, which would make the generation of work run up "
              "to now rather than up to Kuznets."),
    dict(strand='SOC-S10', pos=10,
         carrier="Since Tversky and Kahneman published their first papers on heuristics in "
                 "the early 1970s, psychologists ___ the list of systematic departures from "
                 "what a calculating agent would do, and the list is now long enough that "
                 "its length has itself become an objection.",
         rule='present_perfect_continuing', rule_span='have been extending',
         opts=['extended', 'extend', 'are extending', 'have been extending'], key='D',
         faults={'A': ('wrong_tense', 'extended'), 'B': ('wrong_tense', 'extend'),
                 'C': ('wrong_aspect', 'are extending')},
         why="The extending began in the 1970s and is still going on, so the present "
             "perfect is right.",
         trap="A uses the simple past, which would close a program the sentence says is "
              "still producing entries."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
