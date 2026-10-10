# -*- coding: utf-8 -*-
"""Chapter 13 - transitions. Home domain SOC.

Key plans: HIS BDACBADCAC, BIO CABDCBADBD, PHY DBCADCBACA, HUM ACDBADCBDB,
SOC BDACBADCAC.

Every part carries all ten relations once, with the four hardest -- concession,
comparison, emphasis and restatement -- always in positions seven to ten. So a
student meets every relation in every field, and meets the hard four late.

None of this chapter's four moves has a machine predicate, and none can have
one: whether a transition states the relation the two sentences bear is a
question about meaning, not about form. The check that holds here is the span
rule -- no distractor's transition may be a token run of the key's -- and the
end-to-end read.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 13

AR = dict(
    qaida="أدوات الربط: الأداة تُعلن ما بين الجملتين من صلة، فإمّا أن تضيف الثانية إلى "
          "الأولى، أو تخالفها، أو تكون نتيجة لها، أو سبباً لها، أو مثالاً عليها، أو "
          "إعادة لها بعبارة أدقّ. والصلة تُقرأ من الجملتين لا من الأداة.",
    kayf="يحذف اختبار سات الأداة ويعرض أربعاً، وكلّها صحيحة في نفسها. فالطريق أن تغطّي "
         "الخيارات وتقرأ الجملتين وتقول الصلة بينهما بلغتك، ثمّ تختار الأداة التي تقولها. "
         "ومن قرأ الخيارات أوّلاً وجد كلّ واحدة منها مقبولة.",
    fakh="الفخّ الأكبر أداة الاتّجاه المعاكس: تقول الجملتان شيئاً واحداً فتأتي لكنْ، أو "
         "تتخالفان فتأتي لذلك. والفخّ الثاني أداة قريبة لا مطابقة، كأن توضع للمثال موضع "
         "الإيضاح.",
    sila="هذا الباب من أكثر أبواب القسم الكتابيّ في اختبار سات ورودًا، ويتكرّر في كلّ "
         "اختبار مرّات. وهو يقيس القراءة لا القواعد، لأن الأداة لا تُعرف إلّا بفهم "
         "الجملتين.",
)

HIS = dict(domain='HIS', note_ar=(
    "نصوص التاريخ والنظام المدني تسوق الحوادث على ترتيبها، فتكثر فيها أدوات التعاقب "
    "وأدوات النتيجة، ويكثر معها فخّ المخالفة: فيحسب الطالب أن كلّ جملتين متجاورتين في "
    "التاريخ متخالفتان."), xs=[
    dict(strand='HIS-S01', pos=1,
         carrier="The canal cut freight costs to a tenth of what they had been. ___ it cut "
                 "the journey from weeks to days.",
         rule='addition', rule_span='Moreover,',
         opts=['Nevertheless,', 'Moreover,', 'For instance,', 'Meanwhile,'], key='B',
         faults={'A': ('wrong_direction', 'Nevertheless,'),
                 'C': ('near_miss', 'For instance,'),
                 'D': ('no_relation', 'Meanwhile,')},
         why="The second sentence adds a second saving to the first rather than qualifying "
             "it, so the transition has to be one of addition.",
         trap="A says the second sentence runs against the first, when the two report the "
              "same kind of gain."),
    dict(strand='HIS-S02', pos=2,
         carrier="The assembly met in Philadelphia in May rather than in New York. ___ the "
                 "New York delegates had not yet been appointed.",
         rule='cause', rule_span='After all,',
         opts=['As a result,', 'In other words,', 'Similarly,', 'After all,'], key='D',
         faults={'A': ('wrong_direction', 'As a result,'),
                 'B': ('restatement', 'In other words,'),
                 'C': ('no_relation', 'Similarly,')},
         why="The second sentence gives the reason the assembly met where it did, so the "
             "transition must point back to the first as its explanation.",
         trap="A turns the explanation round and makes the unappointed delegates the "
              "consequence of the meeting rather than its cause."),
    dict(strand='HIS-S03', pos=3,
         carrier="The early state constitutions kept the governor weak on purpose. ___ "
                 "Pennsylvania replaced the office with a council of twelve men.",
         rule='example', rule_span='For instance,',
         opts=['For instance,', 'On the contrary,', 'In short,', 'In the meantime,'],
         key='A',
         faults={'B': ('wrong_direction', 'On the contrary,'),
                 'C': ('near_miss', 'In short,'),
                 'D': ('no_relation', 'In the meantime,')},
         why="Pennsylvania's council is an instance of the weak executive the first "
             "sentence describes, so the transition introduces an example.",
         trap="C promises a summary of the first sentence, but what follows is one state "
              "out of thirteen rather than the gist of them all."),
    dict(strand='HIS-S04', pos=4,
         carrier="The Confederation Congress could ask the states for money but could not "
                 "make them pay. ___ it spent the 1780s unable to meet the interest on its "
                 "own debt.",
         rule='result', rule_span='Consequently,',
         opts=['Even so,', 'Likewise,', 'Consequently,', 'That is,'], key='C',
         faults={'A': ('wrong_direction', 'Even so,'),
                 'B': ('near_miss', 'Likewise,'),
                 'D': ('restatement', 'That is,')},
         why="Going unpaid is the consequence of having no power to compel payment, so the "
             "transition marks a result.",
         trap="A offers a concession, which would mean the Congress paid its interest in "
              "spite of collecting nothing."),
    dict(strand='HIS-S05', pos=5,
         carrier="The 1787 convention sat behind closed windows for four months and "
                 "published nothing. ___ the ratifying conventions were argued out in "
                 "public and in print.",
         rule='contrast', rule_span='By contrast,',
         opts=['All the same,', 'By contrast,', 'In the same way,', 'In other words,'],
         key='B',
         faults={'A': ('near_miss', 'All the same,'),
                 'C': ('wrong_direction', 'In the same way,'),
                 'D': ('restatement', 'In other words,')},
         why="The second sentence sets public argument against closed deliberation, which "
             "is a contrast and not a concession.",
         trap="A grants a point instead of marking the difference, and nothing in the "
              "first sentence is being granted."),
    dict(strand='HIS-S06', pos=6,
         carrier="The ordinance of 1785 laid a township grid across the land north of the "
                 "Ohio. ___ the ordinance of 1787 said how the territories drawn on that "
                 "grid would become states.",
         rule='sequence', rule_span='Two years later,',
         opts=['Two years later,', 'Beforehand,', 'At the same time,', 'In contrast,'],
         key='A',
         faults={'B': ('wrong_direction', 'Beforehand,'),
                 'C': ('near_miss', 'At the same time,'),
                 'D': ('no_relation', 'In contrast,')},
         why="The two ordinances came in the order the sentences give them, so the "
             "transition marks the step from the first year to the second.",
         trap="B puts the second ordinance before the first, which the dates in both "
              "sentences rule out."),
    dict(strand='HIS-S07', pos=7,
         carrier="The Northwest Ordinance barred slavery from the territory in a single "
                 "sentence. ___ the men who drafted it wrote no means of enforcing the ban "
                 "into the document.",
         rule='concession', rule_span='Admittedly,',
         opts=['Therefore,', 'Meanwhile,', 'Put differently,', 'Admittedly,'], key='D',
         faults={'A': ('near_miss', 'Therefore,'),
                 'B': ('no_relation', 'Meanwhile,'),
                 'C': ('restatement', 'Put differently,')},
         why="The second sentence grants a weakness in the ban without withdrawing the "
             "ban, which is a concession rather than a flat reversal.",
         trap="A makes the missing enforcement follow from the prohibition, as though a ban "
              "caused its own neglect."),
    dict(strand='HIS-S08', pos=8,
         carrier="Jefferson's draft of the Declaration spent its longest paragraph on the "
                 "slave trade and the Congress struck that paragraph out. ___ his statute "
                 "on religious freedom was cut by the Virginia legislature where it reached "
                 "furthest.",
         rule='comparison', rule_span='Similarly,',
         opts=['By contrast,', 'As a result,', 'Similarly,', 'In the meantime,'], key='C',
         faults={'A': ('wrong_direction', 'By contrast,'),
                 'B': ('near_miss', 'As a result,'),
                 'D': ('no_relation', 'In the meantime,')},
         why="What happened to the second draft is like what happened to the first, so the "
             "transition marks a likeness rather than a difference.",
         trap="A announces a difference between two fates that are the same fate twice "
              "over."),
    dict(strand='HIS-S09', pos=9,
         carrier="The compromise over representation gave the small states an equal voice "
                 "in one chamber and the large states a proportional voice in the other. "
                 "___ it counted the same population twice, once by state and once by "
                 "head.",
         rule='restatement_rel', rule_span='Put more precisely,',
         opts=['Put more precisely,', 'On the other hand,', 'For example,', 'Afterward,'],
         key='A',
         faults={'B': ('wrong_direction', 'On the other hand,'),
                 'C': ('near_miss', 'For example,'),
                 'D': ('no_relation', 'Afterward,')},
         why="The second sentence says the first again in sharper terms rather than adding "
             "anything new to it.",
         trap="C offers the second sentence as one case among several, when it is the whole "
              "of the first said another way."),
    dict(strand='HIS-S10', pos=10,
         carrier="Hamilton's report on the public credit proposed that the federal "
                 "government take on the war debts of the states at face value. ___ it "
                 "proposed to pay in full the speculators who had bought those debts from "
                 "soldiers for a fraction of their worth.",
         rule='emphasis', rule_span='Indeed,',
         opts=['For instance,', 'Meanwhile,', 'Indeed,', 'Nonetheless,'], key='C',
         faults={'A': ('near_miss', 'For instance,'),
                 'B': ('no_relation', 'Meanwhile,'),
                 'D': ('wrong_direction', 'Nonetheless,')},
         why="The second sentence presses the first harder by naming who would be paid, so "
             "the transition carries emphasis rather than a new case.",
         trap="D reverses the direction, as though paying the speculators cut against the "
              "proposal instead of being the sharpest part of it."),
])

BIO = dict(domain='BIO', note_ar=(
    "نصوص الأحياء وعلوم الأرض تصف سلاسل من الأسباب والنتائج، فيكثر فيها أن تكون الجملة "
    "الثانية نتيجة الأولى أو سببها. والفرق بين الاثنين هو موضع الخطأ، إذ تُقلب الجهة "
    "فتوضع النتيجة موضع السبب."), xs=[
    dict(strand='BIO-S01', pos=1,
         carrier="The pond holds no fish above the lowest weir. ___ the water there carries "
                 "almost no oxygen in August.",
         rule='cause', rule_span='After all,',
         opts=['As a result,', 'In other words,', 'After all,', 'Meanwhile,'], key='C',
         faults={'A': ('wrong_direction', 'As a result,'),
                 'B': ('restatement', 'In other words,'),
                 'D': ('no_relation', 'Meanwhile,')},
         why="The second sentence gives the reason the fish are absent, so the transition "
             "has to look back at the first as the thing explained.",
         trap="A makes the low oxygen follow from the absence of fish, which is the "
              "explanation running backwards."),
    dict(strand='BIO-S02', pos=2,
         carrier="Mangroves hold a shoreline together with their roots. ___ they shelter "
                 "the young of most of the reef fish.",
         rule='addition', rule_span='In addition,',
         opts=['In addition,', 'However,', 'For example,', 'Earlier,'], key='A',
         faults={'B': ('wrong_direction', 'However,'),
                 'C': ('near_miss', 'For example,'),
                 'D': ('no_relation', 'Earlier,')},
         why="The second sentence adds a second service to the first, and the two services "
             "have nothing to do with each other beyond belonging to the same tree.",
         trap="C offers the nursery as an instance of holding the shore together, which it "
              "is not."),
    dict(strand='BIO-S03', pos=3,
         carrier="The gene for the enzyme was deleted from one line of mice and left in the "
                 "other. ___ the first line could not digest the sugar at all.",
         rule='result', rule_span='As a result,',
         opts=['Even so,', 'As a result,', 'Similarly,', 'That is to say,'], key='B',
         faults={'A': ('wrong_direction', 'Even so,'),
                 'C': ('near_miss', 'Similarly,'),
                 'D': ('restatement', 'That is to say,')},
         why="Losing the enzyme is the consequence of losing the gene, so the transition "
             "marks a result and not a resemblance.",
         trap="A grants the point and then denies it, which would mean the mice digested "
              "the sugar in spite of having no enzyme for it."),
    dict(strand='BIO-S04', pos=4,
         carrier="A coral polyp feeds itself in the light through the algae in its tissue. "
                 "___ it feeds in the dark by catching plankton with its tentacles.",
         rule='contrast', rule_span='By contrast,',
         opts=['All the same,', 'In other words,', 'In the same way,', 'By contrast,'],
         key='D',
         faults={'A': ('near_miss', 'All the same,'),
                 'B': ('restatement', 'In other words,'),
                 'C': ('wrong_direction', 'In the same way,')},
         why="Two ways of feeding are set against each other by the light and the dark, "
             "which is a contrast in the plainest sense.",
         trap="C claims the two ways of feeding are alike, when the sentence is built to "
              "separate them."),
    dict(strand='BIO-S05', pos=5,
         carrier="Some plants spend the dry season as seed rather than as leaf. ___ the "
                 "desert annuals of the Mojave live as seed for all but six weeks of the "
                 "year.",
         rule='example', rule_span='For instance,',
         opts=['On the contrary,', 'In short,', 'For instance,', 'Afterward,'], key='C',
         faults={'A': ('wrong_direction', 'On the contrary,'),
                 'B': ('near_miss', 'In short,'),
                 'D': ('no_relation', 'Afterward,')},
         why="The Mojave annuals are an instance of the habit the first sentence names, so "
             "the transition introduces an example.",
         trap="B announces a summary, but one group of plants in one desert is narrower "
              "than the sentence it would be summarizing."),
    dict(strand='BIO-S06', pos=6,
         carrier="An ice core is cut into lengths of about a yard and the lengths are logged "
                 "in order. ___ each length is melted slowly and the water run through a "
                 "mass spectrometer.",
         rule='sequence', rule_span='Only then,',
         opts=['Beforehand,', 'Only then,', 'At the same time,', 'By contrast,'], key='B',
         faults={'A': ('wrong_direction', 'Beforehand,'),
                 'C': ('near_miss', 'At the same time,'),
                 'D': ('no_relation', 'By contrast,')},
         why="The melting comes after the logging in the order the laboratory works, and "
             "the transition has to say so.",
         trap="C has the core melted while it is still being logged, which would leave "
              "nothing to log."),
    dict(strand='BIO-S07', pos=7,
         carrier="A whale's flipper carries the same five sets of finger bones that a bat's "
                 "wing carries. ___ the leg of a horse is a hand standing on the tip of one "
                 "finger.",
         rule='comparison', rule_span='Likewise,',
         opts=['Likewise,', 'By contrast,', 'As a result,', 'Meanwhile,'], key='A',
         faults={'B': ('wrong_direction', 'By contrast,'),
                 'C': ('near_miss', 'As a result,'),
                 'D': ('no_relation', 'Meanwhile,')},
         why="The horse's leg is like the flipper and the wing in just the way the first "
             "sentence has set up, so the transition marks a likeness.",
         trap="B marks a difference between three limbs that the sentences are grouping "
              "together."),
    dict(strand='BIO-S08', pos=8,
         carrier="The vaccine trial followed its subjects for two years and reported a "
                 "clear effect in both age groups. ___ it enrolled no one over sixty-five.",
         rule='concession', rule_span='To be sure,',
         opts=['Therefore,', 'In the same way,', 'Put another way,', 'To be sure,'],
         key='D',
         faults={'A': ('near_miss', 'Therefore,'),
                 'B': ('no_relation', 'In the same way,'),
                 'C': ('restatement', 'Put another way,')},
         why="The second sentence grants a limit on the trial without taking back its "
             "finding, which is a concession.",
         trap="A makes the narrow enrollment follow from the clear effect, as though a "
              "result could choose its own subjects."),
    dict(strand='BIO-S09', pos=9,
         carrier="The gut of a termite holds microbes that no other animal carries and that "
                 "cannot live outside it. ___ a termite hatched in a clean jar and never fed "
                 "by another termite starves on a diet of pure wood.",
         rule='emphasis', rule_span='Indeed,',
         opts=['For instance,', 'Indeed,', 'Nonetheless,', 'Afterward,'], key='B',
         faults={'A': ('near_miss', 'For instance,'),
                 'C': ('wrong_direction', 'Nonetheless,'),
                 'D': ('no_relation', 'Afterward,')},
         why="The starving termite presses the first sentence to its limit rather than "
             "illustrating it, so the transition carries emphasis.",
         trap="A offers the clean jar as one case among many, when it is the strongest "
              "statement the paragraph makes."),
    dict(strand='BIO-S10', pos=10,
         carrier="A population that doubles every twenty minutes will exhaust the sugar in "
                 "its flask within a day, however little of it there was to begin with. ___ "
                 "the limit on growth in such a culture is set by the food and not by the "
                 "rate of division.",
         rule='restatement_rel', rule_span='More precisely,',
         opts=['On the other hand,', 'For example,', 'In the meantime,', 'More precisely,'],
         key='D',
         faults={'A': ('wrong_direction', 'On the other hand,'),
                 'B': ('near_miss', 'For example,'),
                 'C': ('no_relation', 'In the meantime,')},
         why="The second sentence says the first again in the language of limits, which is "
             "a restatement and not an addition.",
         trap="B presents the second sentence as an instance of the first, but it is the "
              "same claim at a higher level of generality."),
])

PHY = dict(domain='PHY', note_ar=(
    "نصوص العلوم الفيزيائية تسوق خطوات التجربة وشروطها، فتكثر فيها أدوات الترتيب وأدوات "
    "النتيجة. والخطأ الشائع أن يُقرأ شرط التجربة نتيجةً لها، فتوضع أداة النتيجة موضع "
    "أداة السبب."), xs=[
    dict(strand='PHY-S01', pos=1,
         carrier="The second coil was wound with twice as many turns. ___ it gave twice the "
                 "voltage.",
         rule='result', rule_span='Accordingly,',
         opts=['Even so,', 'Similarly,', 'That is,', 'Accordingly,'], key='D',
         faults={'A': ('wrong_direction', 'Even so,'),
                 'B': ('near_miss', 'Similarly,'),
                 'C': ('restatement', 'That is,')},
         why="The doubled voltage is the consequence of the doubled winding, so the "
             "transition marks a result.",
         trap="A sets the two readings against each other, when the second is what the "
              "first predicts."),
    dict(strand='PHY-S02', pos=2,
         carrier="Some materials carry heat far better than they carry current. ___ diamond "
                 "conducts heat better than copper and electricity not at all.",
         rule='example', rule_span='For example,',
         opts=['On the contrary,', 'For example,', 'In short,', 'Meanwhile,'], key='B',
         faults={'A': ('wrong_direction', 'On the contrary,'),
                 'C': ('near_miss', 'In short,'),
                 'D': ('no_relation', 'Meanwhile,')},
         why="Diamond is an instance of the class of materials the first sentence names, "
             "and the transition has to say so.",
         trap="C would make one mineral the summary of a whole class of materials."),
    dict(strand='PHY-S03', pos=3,
         carrier="A mirror of that size can be ground to a smoother surface than a lens of "
                 "the same diameter. ___ it weighs a quarter as much.",
         rule='addition', rule_span='Moreover,',
         opts=['Nevertheless,', 'For instance,', 'Moreover,', 'Formerly,'], key='C',
         faults={'A': ('wrong_direction', 'Nevertheless,'),
                 'B': ('near_miss', 'For instance,'),
                 'D': ('no_relation', 'Formerly,')},
         why="The second sentence adds a second advantage of the mirror, unconnected to "
             "the first except that both favor the mirror.",
         trap="A turns the weight into an objection, when lighter is one more reason to "
              "choose the mirror."),
    dict(strand='PHY-S04', pos=4,
         carrier="The tube was pumped out before the beam was switched on. ___ a single "
                 "collision with a gas molecule would have scattered the electrons out of "
                 "the beam.",
         rule='cause', rule_span='After all,',
         opts=['After all,', 'As a result,', 'In other words,', 'Similarly,'], key='A',
         faults={'B': ('wrong_direction', 'As a result,'),
                 'C': ('restatement', 'In other words,'),
                 'D': ('no_relation', 'Similarly,')},
         why="The second sentence gives the reason the tube was pumped out, which is the "
             "one relation that fits a precaution and its purpose.",
         trap="B makes the scattering a consequence of the pumping, which inverts the "
              "physics as well as the logic."),
    dict(strand='PHY-S05', pos=5,
         carrier="The sample is weighed dry and the reading on the balance is recorded. "
                 "___ it is soaked for an hour and weighed again.",
         rule='sequence', rule_span='Only then,',
         opts=['Beforehand,', 'Meanwhile,', 'By contrast,', 'Only then,'], key='D',
         faults={'A': ('wrong_direction', 'Beforehand,'),
                 'B': ('near_miss', 'Meanwhile,'),
                 'C': ('no_relation', 'By contrast,')},
         why="The soaking follows the dry weighing in the order the procedure sets out, "
             "and the transition must keep them in that order.",
         trap="A puts the soaking first, which would leave the dry weight impossible to "
              "take."),
    dict(strand='PHY-S06', pos=6,
         carrier="Sound needs a medium and dies within a few feet in the thin air of the "
                 "stratosphere. ___ light crosses the vacuum between galaxies for ten "
                 "billion years without loss.",
         rule='contrast', rule_span='By contrast,',
         opts=['All the same,', 'In other words,', 'By contrast,', 'In the same way,'],
         key='C',
         faults={'A': ('near_miss', 'All the same,'),
                 'B': ('restatement', 'In other words,'),
                 'D': ('no_relation', 'In the same way,')},
         why="The sentences set a wave that needs matter against one that does not, which "
             "is a contrast and the sharpest in physics.",
         trap="D says light behaves as sound does, which is the opposite of what the two "
              "sentences report."),
    dict(strand='PHY-S07', pos=7,
         carrier="The constant has been measured to eleven decimal places and the last of "
                 "them is still settling. ___ the agreement between theory and experiment "
                 "here is the closest anywhere in physics.",
         rule='emphasis', rule_span='Indeed,',
         opts=['For instance,', 'Indeed,', 'Even so,', 'Afterward,'], key='B',
         faults={'A': ('near_miss', 'For instance,'),
                 'C': ('wrong_direction', 'Even so,'),
                 'D': ('no_relation', 'Afterward,')},
         why="The second sentence presses the first harder by saying what the eleven "
             "places amount to, so the transition carries emphasis.",
         trap="C concedes something, and nothing in either sentence is being conceded."),
    dict(strand='PHY-S08', pos=8,
         carrier="A photon of red light carries about half the energy of one of violet "
                 "light. ___ what matters at the metal surface is the energy of a single "
                 "photon and not the brightness of the beam.",
         rule='restatement_rel', rule_span='More exactly,',
         opts=['More exactly,', 'On the other hand,', 'For example,', 'Meanwhile,'],
         key='A',
         faults={'B': ('wrong_direction', 'On the other hand,'),
                 'C': ('near_miss', 'For example,'),
                 'D': ('no_relation', 'Meanwhile,')},
         why="The second sentence states again what the first implies, in the terms that "
             "matter for the photoelectric effect.",
         trap="C makes the general principle an example of the particular comparison, "
              "which is the relation upside down."),
    dict(strand='PHY-S09', pos=9,
         carrier="The deflection of starlight by the sun in 1919 came within a fifth of the "
                 "figure general relativity had published four years earlier. ___ the shift "
                 "of Mercury's perihelion had been known for sixty years and matched the "
                 "same theory.",
         rule='comparison', rule_span='In much the same way,',
         opts=['By contrast,', 'As a result,', 'In much the same way,', 'In the meantime,'],
         key='C',
         faults={'A': ('wrong_direction', 'By contrast,'),
                 'B': ('near_miss', 'As a result,'),
                 'D': ('no_relation', 'In the meantime,')},
         why="The second measurement bears on the theory in a way that is like the first, "
             "so the transition marks a likeness between two confirmations.",
         trap="A announces a difference between two results that point the same way."),
    dict(strand='PHY-S10', pos=10,
         carrier="The 1887 experiment is remembered as the one that found nothing, and its "
                 "null result is quoted in every textbook account of relativity. ___ its "
                 "authors spent the following years rebuilding the apparatus in the belief "
                 "that the fault lay in their own mirrors.",
         rule='concession', rule_span='To be fair,',
         opts=['To be fair,', 'Therefore,', 'In the same way,', 'Put another way,'],
         key='A',
         faults={'B': ('near_miss', 'Therefore,'),
                 'C': ('no_relation', 'In the same way,'),
                 'D': ('restatement', 'Put another way,')},
         why="The second sentence grants that the authors did not read their own result as "
             "the textbooks do, which is a concession and not a reversal.",
         trap="B makes the rebuilding follow from the fame of the null result, which the "
              "dates will not allow."),
])

HUM = dict(domain='HUM', note_ar=(
    "نصوص الإنسانيات توازن بين عملين أو تفسّر حكماً، فتكثر فيها أدوات المقابلة وأدوات "
    "إعادة الصياغة. والفخّ أن تُقرأ إعادة الصياغة مثالاً، فيختار الطالب أداة التمثيل "
    "موضع أداة التوضيح."), xs=[
    dict(strand='HUM-S01', pos=1,
         carrier="Some novels keep their narrator off the page altogether. ___ no one in "
                 "Hemingway's early stories tells the reader anything.",
         rule='example', rule_span='For instance,',
         opts=['For instance,', 'On the contrary,', 'In short,', 'Meanwhile,'], key='A',
         faults={'B': ('wrong_direction', 'On the contrary,'),
                 'C': ('near_miss', 'In short,'),
                 'D': ('no_relation', 'Meanwhile,')},
         why="Hemingway's stories are an instance of the practice the first sentence "
             "describes, so the transition introduces an example.",
         trap="C would make one writer's early work the summary of every novel of the "
              "kind."),
    dict(strand='HUM-S02', pos=2,
         carrier="A sonnet settles its argument inside fourteen lines. ___ an ode may take "
                 "two hundred and settle nothing.",
         rule='contrast', rule_span='By contrast,',
         opts=['All the same,', 'In other words,', 'By contrast,', 'In the same way,'],
         key='C',
         faults={'A': ('near_miss', 'All the same,'),
                 'B': ('restatement', 'In other words,'),
                 'D': ('no_relation', 'In the same way,')},
         why="The two forms are set against each other on length and on resolution alike, "
             "which is a contrast.",
         trap="D says the ode behaves as the sonnet does, which is what the sentence "
              "denies."),
    dict(strand='HUM-S03', pos=3,
         carrier="The first audiences for the play stood through all three hours of it in "
                 "the open air. ___ the theater had no roof and almost no seats.",
         rule='cause', rule_span='After all,',
         opts=['As a result,', 'In other words,', 'Similarly,', 'After all,'], key='D',
         faults={'A': ('wrong_direction', 'As a result,'),
                 'B': ('restatement', 'In other words,'),
                 'C': ('no_relation', 'Similarly,')},
         why="The second sentence gives the reason the audience stood, so the transition "
             "points back to the first as the thing being explained.",
         trap="A makes the roofless theater a consequence of the standing audience, which "
              "builds the playhouse out of its own crowd."),
    dict(strand='HUM-S04', pos=4,
         carrier="Dickens published the novel in twenty monthly parts and wrote each part a "
                 "few weeks before it appeared. ___ he revised the whole of it for the "
                 "single volume of the following spring.",
         rule='sequence', rule_span='Only afterward,',
         opts=['Beforehand,', 'Only afterward,', 'At the same time,', 'By contrast,'],
         key='B',
         faults={'A': ('wrong_direction', 'Beforehand,'),
                 'C': ('near_miss', 'At the same time,'),
                 'D': ('no_relation', 'By contrast,')},
         why="The revision came after the serial in the order the sentences report, so the "
             "transition has to mark the later step.",
         trap="C has him revising the whole while the parts were still being written, which "
              "the first sentence rules out."),
    dict(strand='HUM-S05', pos=5,
         carrier="The translator keeps the line count of the Greek and the order of its "
                 "clauses. ___ she keeps the formulas that open and close each speech.",
         rule='addition', rule_span='In addition,',
         opts=['In addition,', 'However,', 'For example,', 'Earlier,'], key='A',
         faults={'B': ('wrong_direction', 'However,'),
                 'C': ('near_miss', 'For example,'),
                 'D': ('no_relation', 'Earlier,')},
         why="The second sentence adds a third thing the translator keeps to the two the "
             "first has named.",
         trap="C presents the formulas as an instance of the line count, and a formula is "
              "not a way of counting lines."),
    dict(strand='HUM-S06', pos=6,
         carrier="The company that owned the manuscript would not let a rival perform it, "
                 "and no printed text existed for forty years. ___ the version every modern "
                 "edition rests on was set from the memories of two actors.",
         rule='result', rule_span='Consequently,',
         opts=['Even so,', 'Likewise,', 'That is,', 'Consequently,'], key='D',
         faults={'A': ('wrong_direction', 'Even so,'),
                 'B': ('near_miss', 'Likewise,'),
                 'C': ('restatement', 'That is,')},
         why="A text set from memory is the consequence of there being no text to set "
             "from, so the transition marks a result.",
         trap="A concedes, which would mean the actors' memories survived in spite of the "
              "missing manuscript rather than because of it."),
    dict(strand='HUM-S07', pos=7,
         carrier="The narrator tells the reader at the outset that he has spent his life "
                 "among people who would not have him. ___ the book is a man explaining "
                 "himself to an audience he does not have.",
         rule='restatement_rel', rule_span='More precisely,',
         opts=['On the other hand,', 'For example,', 'More precisely,', 'Meanwhile,'],
         key='C',
         faults={'A': ('wrong_direction', 'On the other hand,'),
                 'B': ('near_miss', 'For example,'),
                 'D': ('no_relation', 'Meanwhile,')},
         why="The second sentence puts the first again in a single phrase, which is a "
             "restatement and not a second observation.",
         trap="B makes the whole book an example of its own first page."),
    dict(strand='HUM-S08', pos=8,
         carrier="Woolf's essay argues that a woman writing fiction in 1600 would have "
                 "needed money and a room with a door that locked. ___ the essay holds that "
                 "the absence of those two things explains four centuries of silence.",
         rule='emphasis', rule_span='Indeed,',
         opts=['For instance,', 'Indeed,', 'Nonetheless,', 'Afterward,'], key='B',
         faults={'A': ('near_miss', 'For instance,'),
                 'C': ('wrong_direction', 'Nonetheless,'),
                 'D': ('no_relation', 'Afterward,')},
         why="The second sentence presses the claim of the first to its strongest form, so "
             "the transition carries emphasis.",
         trap="A offers the four centuries as one instance of needing a room, which is the "
              "larger claim mistaken for a smaller one."),
    dict(strand='HUM-S09', pos=9,
         carrier="The anthology that fixed the canon of English poetry for a generation of "
                 "schoolchildren printed its texts carefully and glossed every hard word. "
                 "___ it left out every living poet and half of the women who had ever "
                 "published.",
         rule='concession', rule_span='Admittedly,',
         opts=['Therefore,', 'In the same way,', 'Put another way,', 'Admittedly,'],
         key='D',
         faults={'A': ('near_miss', 'Therefore,'),
                 'B': ('no_relation', 'In the same way,'),
                 'C': ('restatement', 'Put another way,')},
         why="The second sentence grants a serious objection without withdrawing the "
             "praise, which is a concession.",
         trap="A makes the omissions follow from the careful glossing, as though accuracy "
              "required exclusion."),
    dict(strand='HUM-S10', pos=10,
         carrier="Bach spent the last twenty-seven years of his life in one city writing "
                 "for one church and was known in his own time as an organist rather than a "
                 "composer. ___ Vivaldi spent thirty years teaching the violin to the girls "
                 "of a Venetian orphanage and was remembered for a while as their teacher.",
         rule='comparison', rule_span='Similarly,',
         opts=['By contrast,', 'Similarly,', 'As a result,', 'In the meantime,'], key='B',
         faults={'A': ('wrong_direction', 'By contrast,'),
                 'C': ('near_miss', 'As a result,'),
                 'D': ('no_relation', 'In the meantime,')},
         why="The second career is like the first in the one respect the sentences care "
             "about, which is how each man was known in his own lifetime.",
         trap="A marks a difference between two lives the paragraph has lined up as "
              "parallel."),
])

SOC = dict(domain='SOC', note_ar=(
    "نصوص العلوم الاجتماعية تقابل الأرقام بالأرقام وتفسّرها، فتجتمع فيها الأدوات كلّها: "
    "المخالفة والنتيجة والتنازل وإعادة الصياغة. ولذلك جُعل هذا المجال أصل الفصل، وفيه "
    "الأدوات العشر على ترتيب الصعوبة."), xs=[
    dict(strand='SOC-S01', pos=1,
         carrier="Nine in ten households answered the first mailing in 1970. ___ fewer than "
                 "three in ten answer it now.",
         rule='contrast', rule_span='By contrast,',
         opts=['All the same,', 'By contrast,', 'In other words,', 'In the same way,'],
         key='B',
         faults={'A': ('near_miss', 'All the same,'),
                 'C': ('restatement', 'In other words,'),
                 'D': ('no_relation', 'In the same way,')},
         why="Two rates are set against each other across fifty years, which is a contrast "
             "and the point of putting them side by side.",
         trap="C offers the second rate as the first said again, when the two numbers are "
              "as far apart as the sentence can make them."),
    dict(strand='SOC-S02', pos=2,
         carrier="The question about income was moved to the last page of the form. ___ the "
                 "share of blank answers to it tripled.",
         rule='result', rule_span='Consequently,',
         opts=['Even so,', 'Likewise,', 'That is,', 'Consequently,'], key='D',
         faults={'A': ('wrong_direction', 'Even so,'),
                 'B': ('near_miss', 'Likewise,'),
                 'C': ('restatement', 'That is,')},
         why="The rise in blanks is the consequence of the move, so the transition marks a "
             "result rather than a coincidence.",
         trap="A concedes, which would say the blanks tripled in spite of the question "
              "being moved."),
    dict(strand='SOC-S03', pos=3,
         carrier="The interviewers were sent to every twentieth address on the list and "
                 "recorded who answered the door. ___ a second team returned to the "
                 "addresses where no one had.",
         rule='sequence', rule_span='Only then,',
         opts=['Only then,', 'Beforehand,', 'At the same time,', 'By contrast,'], key='A',
         faults={'B': ('wrong_direction', 'Beforehand,'),
                 'C': ('near_miss', 'At the same time,'),
                 'D': ('no_relation', 'By contrast,')},
         why="The second visit comes after the first in the order the design requires, and "
             "the transition has to keep that order.",
         trap="B sends the second team before the first, which would leave it nothing to "
              "follow up."),
    dict(strand='SOC-S04', pos=4,
         carrier="The panel study follows the same families for thirty years and so can "
                 "watch one household rise or fall. ___ it can follow their children into "
                 "households of their own.",
         rule='addition', rule_span='In addition,',
         opts=['However,', 'For example,', 'In addition,', 'Earlier,'], key='C',
         faults={'A': ('wrong_direction', 'However,'),
                 'B': ('near_miss', 'For example,'),
                 'D': ('no_relation', 'Earlier,')},
         why="The second sentence adds a second thing the design makes possible, beyond the "
             "one the first has named.",
         trap="B makes the children an instance of watching a household rise, which is a "
              "second ability rather than a case of the first."),
    dict(strand='SOC-S05', pos=5,
         carrier="The survey asks about the last seven days rather than the last year. ___ "
                 "people remember a week and estimate a year.",
         rule='cause', rule_span='After all,',
         opts=['As a result,', 'After all,', 'In other words,', 'Similarly,'], key='B',
         faults={'A': ('wrong_direction', 'As a result,'),
                 'C': ('restatement', 'In other words,'),
                 'D': ('no_relation', 'Similarly,')},
         why="The second sentence gives the reason for the seven-day window, which is the "
             "relation a design and its justification bear.",
         trap="A makes human memory the consequence of a questionnaire's wording."),
    dict(strand='SOC-S06', pos=6,
         carrier="A measure can be reliable and still be wrong about the thing it is meant "
                 "to measure. ___ a thermometer that reads two degrees high reads two "
                 "degrees high every time.",
         rule='example', rule_span='For instance,',
         opts=['For instance,', 'On the contrary,', 'In short,', 'Afterward,'], key='A',
         faults={'B': ('wrong_direction', 'On the contrary,'),
                 'C': ('near_miss', 'In short,'),
                 'D': ('no_relation', 'Afterward,')},
         why="The thermometer is an instance of a measure that is steady and wrong at "
             "once, which is what the first sentence claims is possible.",
         trap="B denies the first sentence, when the thermometer is the clearest "
              "illustration of it."),
    dict(strand='SOC-S07', pos=7,
         carrier="The study reached eleven thousand people in sixty cities and asked them "
                 "all the same forty questions in the same order. ___ it reached them by "
                 "landline in a decade when a third of the country had none.",
         rule='concession', rule_span='To be sure,',
         opts=['Therefore,', 'In the same way,', 'Put another way,', 'To be sure,'],
         key='D',
         faults={'A': ('near_miss', 'Therefore,'),
                 'B': ('no_relation', 'In the same way,'),
                 'C': ('restatement', 'Put another way,')},
         why="The second sentence grants a flaw in the sample without giving up the scale "
             "of the study, which is a concession.",
         trap="A makes the landline sampling follow from the size of the study, which "
              "nothing in either sentence supports."),
    dict(strand='SOC-S08', pos=8,
         carrier="A city's unemployment figure counts the people who looked for work in the "
                 "past four weeks and found none, and leaves out those who stopped looking. "
                 "___ the figure measures the search for work and not the want of it.",
         rule='restatement_rel', rule_span='More precisely,',
         opts=['On the other hand,', 'For example,', 'More precisely,', 'Meanwhile,'],
         key='C',
         faults={'A': ('wrong_direction', 'On the other hand,'),
                 'B': ('near_miss', 'For example,'),
                 'D': ('no_relation', 'Meanwhile,')},
         why="The second sentence says what the first has described, again and in six "
             "words, which is what a restatement does.",
         trap="B treats the general statement as one example of the counting rule, and the "
              "relation runs the other way."),
    dict(strand='SOC-S09', pos=9,
         carrier="The great migration out of the rural South moved six million people over "
                 "sixty years and was driven as much by the mechanical cotton picker as by "
                 "anything in the northern cities. ___ the movement off the land in Europe "
                 "a century earlier followed the threshing machine from one country to the "
                 "next.",
         rule='comparison', rule_span='In much the same way,',
         opts=['In much the same way,', 'By contrast,', 'As a result,', 'In the meantime,'],
         key='A',
         faults={'B': ('wrong_direction', 'By contrast,'),
                 'C': ('near_miss', 'As a result,'),
                 'D': ('no_relation', 'In the meantime,')},
         why="The European movement is like the American one in the respect the sentences "
             "pick out, which is that a machine emptied the countryside.",
         trap="B sets the two migrations against each other, when the paragraph is "
              "matching them."),
    dict(strand='SOC-S10', pos=10,
         carrier="The neighborhoods marked in red on the 1937 maps were refused mortgages "
                 "for thirty years, and the lines on those maps still show in the price of "
                 "a house. ___ the best predictor of what a block is worth in some cities "
                 "is which side of a 1937 line it falls on.",
         rule='emphasis', rule_span='Indeed,',
         opts=['For instance,', 'Meanwhile,', 'Indeed,', 'Nonetheless,'], key='C',
         faults={'A': ('near_miss', 'For instance,'),
                 'B': ('no_relation', 'Meanwhile,'),
                 'D': ('wrong_direction', 'Nonetheless,')},
         why="The second sentence presses the first as hard as the evidence allows, so the "
             "transition carries emphasis rather than illustration.",
         trap="D reverses the direction, as though the strength of the prediction cut "
              "against the claim it confirms."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
