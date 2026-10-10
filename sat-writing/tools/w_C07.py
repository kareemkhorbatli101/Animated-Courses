# -*- coding: utf-8 -*-
"""Chapter 7 - parallel structure. Home domain PHY.

Key plans: HIS DBCADCBACA, BIO ACDBADCBDB, PHY BDACBADCAC, HUM CABDCBADBD,
SOC DBCADCBACA.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 7

AR = dict(
    qaida="التوازي في التركيب يعني أن ما اشترك في موضع واحد من الجملة يشترك في صورة واحدة من "
          "الصرف. فإذا كان أوّل المعطوفات مصدراً بأداة كان الثاني كذلك، وإذا كان اسم فعل "
          "كان الثاني مثله. ويلزم التوازي كذلك في أدوات الاقتران مثل لا هذا بل ذاك، وفي "
          "المقارنة فلا يُقارن شيء إلّا بما هو من جنسه.",
    kayf="يعطيك الاختبار متعاطفين ويجعل الفراغ في الثالث، فيكون السؤال عن صورة الثالث لا عن "
         "معناه. ويختبر كذلك المقارنة الناقصة، وهي أن يُقارن مقدار بشيء ليس مقداراً، فيصحّ "
         "الكلام في الظاهر ولا يصحّ في الحقيقة.",
    fakh="الفخّ أن المعنى يصل إلى القارئ على أيّ صورة جاءت، فلا يشعر بالخلل. والعلاج أن تقرأ "
         "كلّ معطوف وحده مع ما قبل أوّلها، فإن لم يستقم وحده فليس موازياً. وفي المقارنة اسأل: "
         "ما الذي يُقارن بما؟",
    sila="التوازي من الأبواب التي يستعملها اختبار سات في موضعين: في قواعد الإنجليزية "
         "المعيارية، وفي أسئلة التأليف البلاغي حيث يكون الخيار الموازي هو الأوضح. فالفائدة "
         "فيه مزدوجة.",
)

HIS = dict(domain='HIS', note_ar=(
    "جمل التاريخ والنظام المدني تسرد الأفعال سرداً: ناقشوا، وعارضوا، وصاغوا. وهذه القوائم "
    "هي أكثر موضع يُختبر فيه التوازي، لأن الفراغ يقع في آخر القائمة دائماً."), xs=[
    dict(strand='HIS-S01', pos=1,
         carrier="The committee spent the spring debating representation, arguing over the "
                 "slave trade, and ___.",
         rule='parallel_series', rule_span='drafting a compromise',
         opts=['to draft a compromise', 'drafted a compromise',
               'had drafted a compromise', 'drafting a compromise'], key='D',
         faults={'A': ('faulty_parallel', 'to draft a compromise'),
                 'B': ('mixed_form', 'drafted a compromise'),
                 'C': ('mixed_form', 'had drafted a compromise')},
         ctx=dict(form='gerund'),
         why="The series already holds two -ing forms, so the third item takes the same "
             "form.",
         trap="A is an infinitive, which would be right if the first two items had been "
              "infinitives and is wrong because they are not."),
    dict(strand='HIS-S02', pos=2,
         carrier="The Constitution was written to separate the powers, to enumerate them, "
                 "and ___.",
         rule='parallel_infinitive', rule_span='to limit each of them',
         opts=['limiting each of them', 'to limit each of them',
               'were limited in turn', 'limited each of them'], key='B',
         faults={'A': ('faulty_parallel', 'limiting each of them'),
                 'C': ('mixed_form', 'were limited in turn'),
                 'D': ('mixed_form', 'limited each of them')},
         ctx=dict(form='infinitive'),
         why="The first two items are infinitives, so the third keeps the infinitive form.",
         trap="A is a gerund, which reads smoothly after and and breaks the pattern the "
              "first two items set."),
    dict(strand='HIS-S03', pos=3,
         carrier="Petitioners for citizenship in the 1790s had to establish two years of "
                 "residence, to swear an oath of allegiance, and ___.",
         rule='parallel_series', rule_span='to satisfy a court of good character',
         opts=['satisfying a court of good character',
               'a court had to be satisfied of good character',
               'to satisfy a court of good character',
               'satisfied a court of good character'], key='C',
         faults={'A': ('faulty_parallel', 'satisfying a court'),
                 'B': ('mixed_form', 'a court had to be satisfied'),
                 'D': ('mixed_form', 'satisfied a court')},
         ctx=dict(form='infinitive'),
         why="The series is built of infinitives, so the third item in the series takes the "
             "infinitive form as well.",
         trap="A changes to a gerund halfway through a list the first two items have "
              "already shaped."),
    dict(strand='HIS-S04', pos=4,
         carrier="Garrison built his case by printing the testimony of former slaves, by "
                 "reprinting the laws of the slave states, and by ___.",
         rule='parallel_gerund', rule_span='quoting the Declaration back at its readers',
         opts=['quoting the Declaration back at its readers',
               'he made the Declaration answer its own readers',
               'to quote the Declaration back at its readers',
               'quoted the Declaration back at its readers'], key='A',
         faults={'B': ('mixed_form', 'he made the Declaration'),
                 'C': ('faulty_parallel', 'to quote the Declaration'),
                 'D': ('mixed_form', 'quoted the Declaration')},
         ctx=dict(form='gerund'),
         why="Each item follows by, which takes a gerund, so the third item keeps the -ing "
             "form.",
         trap="C is an infinitive, which cannot follow the preposition by that governs all "
              "three items."),
    dict(strand='HIS-S05', pos=5,
         carrier="The Fifteenth Amendment of 1870 was framed not only to forbid a racial "
                 "test for the vote in any state but also ___.",
         rule='parallel_correlative', rule_span='to give Congress power to enforce the ban',
         opts=['giving Congress power to enforce the ban',
               'Congress was given power to enforce the ban',
               'that Congress should enforce the ban',
               'to give Congress power to enforce the ban'], key='D',
         faults={'A': ('faulty_parallel', 'giving Congress power'),
                 'B': ('unbalanced_correlative', 'Congress was given power'),
                 'C': ('unbalanced_correlative', 'that Congress should enforce')},
         ctx=dict(form='infinitive'),
         why="The correlative pair not only and but also must join two items of matching "
             "form, and the first is an infinitive.",
         trap="B puts a full clause after but also, which no longer matches the infinitive "
              "that follows not only."),
    dict(strand='HIS-S06', pos=6,
         carrier="The commission that investigated the packinghouses was asked to inspect "
                 "the premises, to interview the workers, to examine the inspection records "
                 "already on file, and ___.",
         rule='parallel_series', rule_span='to report within six months',
         opts=['reporting within six months', 'a report was due within six months',
               'to report within six months', 'reported within six months'], key='C',
         faults={'A': ('faulty_parallel', 'reporting within six months'),
                 'B': ('mixed_form', 'a report was due'),
                 'D': ('mixed_form', 'reported within six months')},
         ctx=dict(form='infinitive'),
         why="Three infinitives have already set the pattern of the series, so the fourth "
             "item is an infinitive too.",
         trap="A switches to a gerund at the end of a list that has held its form for "
              "three items."),
    dict(strand='HIS-S07', pos=7,
         carrier="The number of lynchings recorded in the decade after Reconstruction ended "
                 "was greater than ___, which is the comparison the anti-lynching campaign "
                 "put at the head of its pamphlets.",
         rule='parallel_comparison', rule_span='the number recorded in any decade before it',
         opts=['any earlier decade on record',
               'the number recorded in any decade before it',
               'recording them in any decade before it',
               'when the earlier decades are counted'], key='B',
         faults={'A': ('incomplete_comparison', 'any earlier decade on record'),
                 'C': ('faulty_parallel', 'recording them in any decade'),
                 'D': ('incomplete_comparison', 'when the earlier decades')},
         why="A comparison has to set like against like, and the first term is a number, so "
             "the second must be a number too.",
         trap="A compares a number of lynchings with a decade, which are not quantities "
              "of the same kind at all."),
    dict(strand='HIS-S08', pos=8,
         carrier="The brief in the school cases argued not that separate schools happened "
                 "to be unequal in fact but ___, which was the harder and the more durable "
                 "of the two claims.",
         rule='parallel_correlative', rule_span='that they could not be equal in principle',
         opts=['that they could not be equal in principle',
               'the impossibility of equality in principle',
               'to show that equality was impossible in principle',
               'equality in principle was out of reach'], key='A',
         faults={'B': ('unbalanced_correlative', 'the impossibility of equality'),
                 'C': ('faulty_parallel', 'to show that equality'),
                 'D': ('unbalanced_correlative', 'equality in principle was out')},
         ctx=dict(form=None),
         why="The correlative pair not and but joins two that-clauses, so the second item "
             "must be a that-clause as well.",
         trap="B turns the second half into a noun phrase, which no longer answers the "
              "that-clause after not."),
    dict(strand='HIS-S09', pos=9,
         carrier="The wartime statutes gave the government power to open the mails, to "
                 "revoke the second-class postal rates on which a small newspaper depended, "
                 "to prosecute an editor for a single paragraph, and ___, so that a "
                 "publication could be destroyed without any trial at all.",
         rule='parallel_series', rule_span='to do all of it without a hearing',
         opts=['doing all of it without a hearing',
               'all of it could be done without a hearing',
               'to do all of it without a hearing',
               'done without a hearing in every case'], key='C',
         faults={'A': ('faulty_parallel', 'doing all of it'),
                 'B': ('mixed_form', 'all of it could be done'),
                 'D': ('mixed_form', 'done without a hearing')},
         ctx=dict(form='infinitive'),
         why="Three infinitives have set the series, so the fourth item in the series takes "
             "the infinitive form.",
         trap="A changes to a gerund in the last item, which is where a long list is "
              "hardest to keep track of."),
    dict(strand='HIS-S10', pos=10,
         carrier="The circulation that a partisan paper could reach in a city of a given "
                 "size in the 1840s was larger than ___, and the editors who worked it out "
                 "first were the ones who survived the decade, which is a claim about "
                 "business rather than about politics.",
         rule='parallel_comparison', rule_span='the circulation of a paper that tried to please everyone',
         opts=['the circulation of a paper that tried to please everyone',
               'a paper that set out to please everyone',
               'trying to please everyone with one paper',
               'when a paper tried to please all sides'], key='A',
         faults={'B': ('incomplete_comparison', 'a paper that set out'),
                 'C': ('faulty_parallel', 'trying to please everyone'),
                 'D': ('incomplete_comparison', 'when a paper tried')},
         why="A comparison must set like against like, and since the first term is a "
             "circulation, the second has to be a circulation too.",
         trap="B compares a circulation with a newspaper, which are not quantities of the "
              "same kind at all."),
])

BIO = dict(domain='BIO', note_ar=(
    "جمل الأحياء وعلوم الأرض تصف إجراءات متسلسلة: يُنظّف، ثمّ يُجفّف، ثمّ يُوزن. فالتوازي "
    "فيها شرط الوضوح لا شرط الأناقة، لأن اختلاف الصورة يوهم أن الخطوة من جنس آخر."), xs=[
    dict(strand='BIO-S01', pos=1,
         carrier="A breeder improves a flock by selecting the best birds, by breeding them "
                 "together, and by ___.",
         rule='parallel_gerund', rule_span='culling the rest each season',
         opts=['culling the rest each season', 'to cull the rest each season',
               'had culled the rest each season', 'culled the rest each season'],
         key='A',
         faults={'B': ('faulty_parallel', 'to cull the rest'),
                 'C': ('mixed_form', 'had culled the rest'),
                 'D': ('mixed_form', 'culled the rest')},
         ctx=dict(form='gerund'),
         why="Each item follows by, which takes a gerund, so the third keeps the -ing form.",
         trap="B is an infinitive, which cannot follow the preposition by that governs all "
              "three items."),
    dict(strand='BIO-S02', pos=2,
         carrier="Mendel's method was to grow the plants, to count the offspring, and ___.",
         rule='parallel_series', rule_span='to record the ratio',
         opts=['recording the ratio', 'recorded the ratio', 'to record the ratio',
               'had recorded the ratio'], key='C',
         faults={'A': ('faulty_parallel', 'recording the ratio'),
                 'B': ('mixed_form', 'recorded the ratio'),
                 'D': ('mixed_form', 'had recorded the ratio')},
         ctx=dict(form='infinitive'),
         why="Two infinitives have set the pattern of the series, so the third item takes "
             "the infinitive form.",
         trap="A changes to a gerund in the last item of a list that has held its shape "
              "throughout."),
    dict(strand='BIO-S03', pos=3,
         carrier="A cell uses the proton gradient across the inner membrane to drive the "
                 "enzyme, to make the energy currency it runs on, and ___.",
         rule='parallel_infinitive', rule_span='to keep the whole process turning over',
         opts=['keeping the whole process turning over',
               'kept the whole process turning over',
               'had kept the whole process turning over',
               'to keep the whole process turning over'], key='D',
         faults={'A': ('faulty_parallel', 'keeping the whole process'),
                 'B': ('mixed_form', 'kept the whole process'),
                 'C': ('mixed_form', 'had kept the whole process')},
         ctx=dict(form='infinitive'),
         why="The first two items are infinitives after to, so the third item in the series "
             "keeps the infinitive.",
         trap="A is a gerund, which reads naturally after and and abandons the pattern the "
              "sentence has already set."),
    dict(strand='BIO-S04', pos=4,
         carrier="Restoring a stream in the park meant returning the predator, waiting for "
                 "the elk to change where they fed, and ___.",
         rule='parallel_series', rule_span='watching the willows come back',
         opts=['to watch the willows come back', 'watching the willows come back',
               'watched the willows come back', 'had watched the willows come back'],
         key='B',
         faults={'A': ('faulty_parallel', 'to watch the willows'),
                 'C': ('mixed_form', 'watched the willows'),
                 'D': ('mixed_form', 'had watched the willows')},
         ctx=dict(form='gerund'),
         why="The series is built of gerunds after meant, so the third item in the series "
             "takes the -ing form.",
         trap="A is an infinitive, which would need the whole list rebuilt around it to be "
              "correct."),
    dict(strand='BIO-S05', pos=5,
         carrier="The number of reindeer the island carried after the crash was smaller "
                 "than ___, which is the figure the original survey had put in its report.",
         rule='parallel_comparison',
         rule_span='the number it had carried before the herd was released',
         opts=['the number it had carried before the herd was released',
               'the herd that had been released',
               'releasing the herd in the first place',
               'when the herd was first released'], key='A',
         faults={'B': ('incomplete_comparison', 'the herd that had been released'),
                 'C': ('faulty_parallel', 'releasing the herd'),
                 'D': ('incomplete_comparison', 'when the herd was first')},
         why="A comparison must set like against like, and the first term is a number, so "
             "the second has to be a number too.",
         trap="B compares a number of animals with a herd, which are not quantities of the "
              "same kind."),
    dict(strand='BIO-S06', pos=6,
         carrier="Koch established a cause of disease by isolating the organism from a sick "
                 "animal, by growing it in a pure culture away from everything else, by "
                 "giving it to a healthy animal, and by ___.",
         rule='parallel_gerund', rule_span='recovering the same organism again',
         opts=['to recover the same organism again',
               'recovered the same organism again',
               'had recovered the same organism again',
               'recovering the same organism again'], key='D',
         faults={'A': ('faulty_parallel', 'to recover the same organism'),
                 'B': ('mixed_form', 'recovered the same organism'),
                 'C': ('mixed_form', 'had recovered the same organism')},
         ctx=dict(form='gerund'),
         why="Every item follows by and so takes a gerund, which the fourth item has to "
             "keep as well.",
         trap="A is an infinitive after a preposition, which no amount of distance from the "
              "first by makes acceptable."),
    dict(strand='BIO-S07', pos=7,
         carrier="Industrial fixation changed agriculture not only by making nitrogen cheap "
                 "enough to spread on any field but also ___, which is the half of the "
                 "story that is usually left out.",
         rule='parallel_correlative', rule_span='by making the guano trade worthless',
         opts=['the guano trade was made worthless',
               'to make the guano trade worthless',
               'by making the guano trade worthless',
               'it made the guano trade worthless'], key='C',
         faults={'A': ('unbalanced_correlative', 'the guano trade was made'),
                 'B': ('faulty_parallel', 'to make the guano trade'),
                 'D': ('unbalanced_correlative', 'it made the guano trade')},
         ctx=dict(form='gerund'),
         why="The correlative pair not only and but also joins two items of matching form, "
             "and the first is a by-phrase with a gerund.",
         trap="A puts a full clause after but also, which no longer answers the by-phrase "
              "after not only."),
    dict(strand='BIO-S08', pos=8,
         carrier="Reading an ice core means cutting it into sections under cold conditions, "
                 "melting each section in a sealed chamber, collecting the air that comes "
                 "out of the bubbles, and ___.",
         rule='parallel_series', rule_span='measuring what the air contains',
         opts=['to measure what the air contains', 'measuring what the air contains',
               'measured what the air contains', 'had measured what the air contains'],
         key='B',
         faults={'A': ('faulty_parallel', 'to measure what the air'),
                 'C': ('mixed_form', 'measured what the air'),
                 'D': ('mixed_form', 'had measured what the air')},
         ctx=dict(form='gerund'),
         why="Three gerunds have set the series, so the fourth item in the series takes the "
             "-ing form as well.",
         trap="A switches to an infinitive in the last item, which is where a reader has "
              "lost track of the pattern."),
    dict(strand='BIO-S09', pos=9,
         carrier="The volume of water that the Missoula flood is now thought to have "
                 "carried down the Columbia in a matter of days was greater than ___, a "
                 "comparison that nobody in the 1920s was willing to entertain and that "
                 "the ice dam, once it was mapped, made unavoidable.",
         rule='parallel_comparison',
         rule_span='the volume of every river on Earth put together',
         opts=['every earlier estimate of river flow',
               'putting every river on Earth together',
               'when every river on Earth is counted',
               'the volume of every river on Earth put together'], key='D',
         faults={'A': ('incomplete_comparison', 'every earlier estimate'),
                 'B': ('faulty_parallel', 'putting every river'),
                 'C': ('incomplete_comparison', 'when every river on Earth')},
         why="A comparison must set like against like, and the first term is a volume, so "
             "the second has to be a volume.",
         trap="A compares a volume of water with a set of estimates, which are not "
              "quantities of the same kind."),
    dict(strand='BIO-S10', pos=10,
         carrier="Tracking the circulation of the deep ocean has involved releasing a "
                 "chemical that does not occur in nature, sampling the water at many depths "
                 "for decades afterward, correcting for the small amount that enters from "
                 "the atmosphere directly, and ___, which together put a lower bound of "
                 "several centuries on the overturning time.",
         rule='parallel_series', rule_span='modeling how the water moves between basins',
         opts=['to model how the water moves between basins',
               'modeling how the water moves between basins',
               'modeled how the water moves between basins',
               'had modeled how the water moves between basins'], key='B',
         faults={'A': ('faulty_parallel', 'to model how the water'),
                 'C': ('mixed_form', 'modeled how the water'),
                 'D': ('mixed_form', 'had modeled how the water')},
         ctx=dict(form='gerund'),
         why="Three gerunds have already set this series, so the fourth item in the series "
             "keeps the -ing form.",
         trap="A is an infinitive at the end of a long list, where the pattern is easiest "
              "to lose."),
])

PHY = dict(domain='PHY', note_ar=(
    "العلوم الفيزيائية هي المجال الأصلي لهذا الفصل: وصف التجربة قائمة من الخطوات، ووصف "
    "القانون مقارنة بين كمّيتين. فالقائمة تطلب توازي الصور، والمقارنة تطلب أن يكون الطرفان "
    "من جنس واحد، وهما أصعب صورتين في الباب."), xs=[
    dict(strand='PHY-S01', pos=1,
         carrier="Good practice in the laboratory means repeating the reading, recording "
                 "every value, and ___.",
         rule='parallel_series', rule_span='reporting the scatter',
         opts=['to report the scatter', 'reporting the scatter', 'reported the scatter',
               'had reported the scatter'], key='B',
         faults={'A': ('faulty_parallel', 'to report the scatter'),
                 'C': ('mixed_form', 'reported the scatter'),
                 'D': ('mixed_form', 'had reported the scatter')},
         ctx=dict(form='gerund'),
         why="Two gerunds have set the series, so the third item in the series keeps the "
             "-ing form.",
         trap="A is an infinitive, which would require the first two items to be rebuilt to "
              "match it."),
    dict(strand='PHY-S02', pos=2,
         carrier="A force is described by giving its size, by giving its direction, and by "
                 "___.",
         rule='parallel_gerund', rule_span='naming the body it acts on',
         opts=['to name the body it acts on', 'named the body it acts on',
               'had named the body it acts on', 'naming the body it acts on'], key='D',
         faults={'A': ('faulty_parallel', 'to name the body'),
                 'B': ('mixed_form', 'named the body'),
                 'C': ('mixed_form', 'had named the body')},
         ctx=dict(form='gerund'),
         why="Every item follows by, which takes a gerund, so the third item keeps the -ing "
             "form.",
         trap="A is an infinitive after a preposition, which the first two items show "
              "cannot be right."),
    dict(strand='PHY-S03', pos=3,
         carrier="The purpose of the apparatus was to store energy in a spring, to release "
                 "it through a train of gears, and ___.",
         rule='parallel_infinitive', rule_span='to measure what was lost to friction',
         opts=['to measure what was lost to friction',
               'measuring what was lost to friction',
               'measured what was lost to friction',
               'had measured what was lost to friction'], key='A',
         faults={'B': ('faulty_parallel', 'measuring what was lost'),
                 'C': ('mixed_form', 'measured what was lost'),
                 'D': ('mixed_form', 'had measured what was lost')},
         ctx=dict(form='infinitive'),
         why="The first two items are infinitives, so the third item keeps the infinitive "
             "form.",
         trap="B is a gerund, which reads easily after and and breaks a pattern already "
              "twice established."),
    dict(strand='PHY-S04', pos=4,
         carrier="An adiabatic compression is carried out by pushing the piston quickly, by "
                 "letting no heat escape, and by ___.",
         rule='parallel_series', rule_span='measuring the temperature at the end',
         opts=['to measure the temperature at the end',
               'measured the temperature at the end',
               'measuring the temperature at the end',
               'had measured the temperature at the end'], key='C',
         faults={'A': ('faulty_parallel', 'to measure the temperature'),
                 'B': ('mixed_form', 'measured the temperature'),
                 'D': ('mixed_form', 'had measured the temperature')},
         ctx=dict(form='gerund'),
         why="Every item in the series follows by and takes a gerund, so the third does "
             "too.",
         trap="A is an infinitive after a preposition, which cannot be right however "
              "natural it sounds."),
    dict(strand='PHY-S05', pos=5,
         carrier="Lamps wired in parallel are preferred not only for giving each one of "
                 "them the full voltage but also for ___.",
         rule='parallel_correlative',
         rule_span='leaving the rest alight when one of them fails',
         opts=['to leave the rest alight when one fails',
               'leaving the rest alight when one of them fails',
               'the rest are left alight when one fails',
               'they leave the rest alight when one fails'], key='B',
         faults={'A': ('faulty_parallel', 'to leave the rest alight'),
                 'C': ('unbalanced_correlative', 'the rest are left alight'),
                 'D': ('unbalanced_correlative', 'they leave the rest alight')},
         ctx=dict(form='gerund'),
         why="The correlative pair not only and but also joins two items of matching form, "
             "and the first is a gerund after for.",
         trap="C answers the gerund with a full clause, which leaves the two halves of the "
              "pair unmatched."),
    dict(strand='PHY-S06', pos=6,
         carrier="The wavelength of the light that a hot filament gives off most strongly "
                 "is shorter than ___, which is why one of them glows white and the other "
                 "only red.",
         rule='parallel_comparison',
         rule_span='the wavelength a cooler one gives off',
         opts=['the wavelength a cooler one gives off', 'a cooler filament altogether',
               'giving off light from a cooler filament', 'when the filament is cooler'],
         key='A',
         faults={'B': ('incomplete_comparison', 'a cooler filament altogether'),
                 'C': ('faulty_parallel', 'giving off light'),
                 'D': ('incomplete_comparison', 'when the filament is cooler')},
         why="A comparison must set like against like, and the first term is a wavelength, "
             "so the second has to be a wavelength.",
         trap="B compares a wavelength with a filament, which are not quantities of the "
              "same kind."),
    dict(strand='PHY-S07', pos=7,
         carrier="Lavoisier's experiment mattered not only for showing that the mass in a "
                 "sealed vessel does not change when something burns inside it but also for "
                 "___.",
         rule='parallel_correlative',
         rule_span='establishing that weighing settles what argument cannot',
         opts=['to establish that weighing settles what argument cannot',
               'it established that weighing settles what argument cannot',
               'the establishment of weighing as a method of proof',
               'establishing that weighing settles what argument cannot'], key='D',
         faults={'A': ('faulty_parallel', 'to establish that weighing'),
                 'B': ('unbalanced_correlative', 'it established that weighing'),
                 'C': ('unbalanced_correlative', 'the establishment of weighing')},
         ctx=dict(form='gerund'),
         why="A correlative pair must join items of one form, and the form the first half "
             "sets here is a gerund after for.",
         trap="C turns the second half into a noun phrase, which no longer answers the "
              "gerund in the first."),
    dict(strand='PHY-S08', pos=8,
         carrier="The stress at which a steel beam will fail after ten million cycles of "
                 "loading is lower than ___, which is the figure that matters when a bridge "
                 "is designed to last.",
         rule='parallel_comparison',
         rule_span='the stress at which it will fail on the first cycle',
         opts=['a single application of the load', 'applying the load only once',
               'the stress at which it will fail on the first cycle',
               'when the load is applied only once'], key='C',
         faults={'A': ('incomplete_comparison', 'a single application'),
                 'B': ('faulty_parallel', 'applying the load only once'),
                 'D': ('incomplete_comparison', 'when the load is applied')},
         why="A comparison must set like against like, and the first term is a stress, so "
             "the second has to be a stress.",
         trap="A compares a stress with an application of a load, which are not quantities "
              "of the same kind."),
    dict(strand='PHY-S09', pos=9,
         carrier="Dating a rock by potassium and argon involves crushing the sample in a "
                 "sealed vessel so that nothing escapes, driving off the argon by heating "
                 "what is left in a vacuum, counting the atoms of each isotope in a mass "
                 "spectrometer, and ___.",
         rule='parallel_series',
         rule_span='comparing the two counts against a known decay rate',
         opts=['comparing the two counts against a known decay rate',
               'to compare the two counts against a known decay rate',
               'compared the two counts against a known decay rate',
               'had compared the two counts against a known rate'], key='A',
         faults={'B': ('faulty_parallel', 'to compare the two counts'),
                 'C': ('mixed_form', 'compared the two counts'),
                 'D': ('mixed_form', 'had compared the two counts')},
         ctx=dict(form='gerund'),
         why="Three items of the series are already gerunds, so the fourth in the series "
             "keeps the -ing form.",
         trap="B is an infinitive at the end of a long list, which is where the pattern is "
              "easiest to lose."),
    dict(strand='PHY-S10', pos=10,
         carrier="The period-luminosity relation mattered not only for putting a distance "
                 "on a star too far away for any parallax to be measured but also for ___, "
                 "which is what took the distance ladder out of the galaxy altogether.",
         rule='parallel_correlative',
         rule_span='finding the same stars in other galaxies',
         opts=['to find the same stars in other galaxies',
               'the same stars were found in other galaxies',
               'finding the same stars in other galaxies',
               'it found the same stars in other galaxies'], key='C',
         faults={'A': ('faulty_parallel', 'to find the same stars'),
                 'B': ('unbalanced_correlative', 'the same stars were found'),
                 'D': ('unbalanced_correlative', 'it found the same stars')},
         ctx=dict(form='gerund'),
         why="The two halves of a correlative pair take one form between them, and the "
             "first half here is a gerund after for.",
         trap="B answers a gerund with a full clause, which is the commonest way a "
              "correlative pair comes apart."),
])

HUM = dict(domain='HUM', note_ar=(
    "جمل الإنسانيات تعطف أفعال القراءة والكتابة بعضها على بعض: يصف، ويقارن، ويحكم. ومعها "
    "مقارنات بين أعمال وأساليب، وهي موضع المقارنة الناقصة لأن العمل يُقارن بالمؤلّف "
    "أحياناً."), xs=[
    dict(strand='HUM-S01', pos=1,
         carrier="A first-person narrator works by reporting what he saw, by withholding "
                 "what he felt, and by ___.",
         rule='parallel_series', rule_span='leaving the reader to supply the rest',
         opts=['to leave the reader to supply the rest',
               'left the reader to supply the rest',
               'leaving the reader to supply the rest',
               'had left the reader to supply the rest'], key='C',
         faults={'A': ('faulty_parallel', 'to leave the reader'),
                 'B': ('mixed_form', 'left the reader'),
                 'D': ('mixed_form', 'had left the reader')},
         ctx=dict(form='gerund'),
         why="Each item in the series is governed by the same by, which takes a gerund, "
             "so the third item is a gerund too.",
         trap="A is an infinitive after a preposition, which the earlier items rule out."),
    dict(strand='HUM-S02', pos=2,
         carrier="A novelist builds a character by showing what she does, by reporting what "
                 "she says, and by ___.",
         rule='parallel_gerund', rule_span='declining to explain the difference',
         opts=['declining to explain the difference',
               'to decline to explain the difference',
               'declined to explain the difference',
               'had declined to explain the difference'], key='A',
         faults={'B': ('faulty_parallel', 'to decline to explain'),
                 'C': ('mixed_form', 'declined to explain'),
                 'D': ('mixed_form', 'had declined to explain')},
         ctx=dict(form='gerund'),
         why="The gerunds that follow by have set the series, so the third item keeps the "
             "-ing form.",
         trap="B is an infinitive, which the by in front of every item in this list will "
              "not take."),
    dict(strand='HUM-S03', pos=3,
         carrier="An imagist poem was supposed to present the thing itself, to drop every "
                 "word that did not contribute, and ___.",
         rule='parallel_infinitive', rule_span='to keep the rhythm of speech',
         opts=['keeping the rhythm of speech', 'to keep the rhythm of speech',
               'kept the rhythm of speech', 'had kept the rhythm of speech'], key='B',
         faults={'A': ('faulty_parallel', 'keeping the rhythm'),
                 'C': ('mixed_form', 'kept the rhythm'),
                 'D': ('mixed_form', 'had kept the rhythm')},
         ctx=dict(form='infinitive'),
         why="The first two items are infinitives, so the third item in the series keeps "
             "the infinitive.",
         trap="A is a gerund, which reads naturally after and and abandons the pattern the "
              "sentence set."),
    dict(strand='HUM-S04', pos=4,
         carrier="The English sonnet is valued not only for compressing a whole argument "
                 "into fourteen lines of verse but also for ___.",
         rule='parallel_correlative', rule_span='giving the argument a place to turn',
         opts=['to give the argument a place to turn',
               'the argument is given a place to turn',
               'it gives the argument a place to turn',
               'giving the argument a place to turn'], key='D',
         faults={'A': ('faulty_parallel', 'to give the argument'),
                 'B': ('unbalanced_correlative', 'the argument is given'),
                 'C': ('unbalanced_correlative', 'it gives the argument')},
         ctx=dict(form='gerund'),
         why="The correlative pair joins two items of matching form, and the first is a "
             "gerund governed by for.",
         trap="B answers a gerund with a full clause, which leaves the two halves of the "
              "pair unmatched."),
    dict(strand='HUM-S05', pos=5,
         carrier="Staging a play at the Globe meant writing for an audience standing in "
                 "daylight, planning entrances through two doors and a trap, and ___.",
         rule='parallel_series', rule_span='accepting that the weather would decide',
         opts=['to accept that the weather would decide',
               'accepted that the weather would decide',
               'accepting that the weather would decide',
               'had accepted that the weather would decide'], key='C',
         faults={'A': ('faulty_parallel', 'to accept that the weather'),
                 'B': ('mixed_form', 'accepted that the weather'),
                 'D': ('mixed_form', 'had accepted that the weather')},
         ctx=dict(form='gerund'),
         why="Two gerunds have set the series after meant, so the third item in the series "
             "keeps the -ing form.",
         trap="A switches to an infinitive at the end of a list already shaped by the first "
              "two items."),
    dict(strand='HUM-S06', pos=6,
         carrier="The number of rules a reader of detective fiction can be relied on to "
                 "know is larger than ___, which is the asymmetry every writer in the genre "
                 "works with.",
         rule='parallel_comparison',
         rule_span='the number any writer could name on request',
         opts=['any writer asked on the spot',
               'the number any writer could name on request',
               'asking a writer to name them',
               'when a writer is asked to list them'], key='B',
         faults={'A': ('incomplete_comparison', 'any writer asked'),
                 'C': ('faulty_parallel', 'asking a writer to name'),
                 'D': ('incomplete_comparison', 'when a writer is asked')},
         why="A comparison must set like against like, and the first term is a number of "
             "rules, so the second has to be a number too.",
         trap="A compares a number of rules with a writer, which are not quantities of the "
              "same kind."),
    dict(strand='HUM-S07', pos=7,
         carrier="A trained eye reads a painting by noticing where the light falls, by "
                 "following the direction the figures look in, by asking what has been left "
                 "out of the frame, and by ___.",
         rule='parallel_gerund', rule_span='remembering what the varnish has done',
         opts=['remembering what the varnish has done',
               'to remember what the varnish has done',
               'remembered what the varnish has done',
               'had remembered what the varnish has done'], key='A',
         faults={'B': ('faulty_parallel', 'to remember what the varnish'),
                 'C': ('mixed_form', 'remembered what the varnish'),
                 'D': ('mixed_form', 'had remembered what the varnish')},
         ctx=dict(form='gerund'),
         why="Every item follows by and so takes a gerund, which the fourth item must keep "
             "as well.",
         trap="B is an infinitive after a preposition, and the distance from the first by "
              "is what makes it survive a reading."),
    dict(strand='HUM-S08', pos=8,
         carrier="Editing a score from a composer's manuscript involves collating every "
                 "surviving copy, deciding which readings came from the composer and which "
                 "from a copyist, and ___.",
         rule='parallel_series', rule_span='saying in a note which choice was made',
         opts=['to say in a note which choice was made',
               'said in a note which choice was made',
               'had said in a note which choice was made',
               'saying in a note which choice was made'], key='D',
         faults={'A': ('faulty_parallel', 'to say in a note'),
                 'B': ('mixed_form', 'said in a note'),
                 'C': ('mixed_form', 'had said in a note')},
         ctx=dict(form='gerund'),
         why="Two gerunds have set the series after involves, so the third item in the "
             "series keeps the -ing form.",
         trap="A is an infinitive, which would require the whole list to be rebuilt around "
              "it."),
    dict(strand='HUM-S09', pos=9,
         carrier="A street is remembered not only for what was built along it in the first "
                 "place, which is the part an architectural history records, but also for "
                 "___, and the second of these is much the harder thing for a drawing to "
                 "show.",
         rule='parallel_correlative',
         rule_span='what the people who use it have made of it since',
         opts=['the use that has since been made of it by the people who live there',
               'what the people who use it have made of it since',
               'to see what the people who use it have made of it',
               'it has been remade by the people who use it'], key='B',
         faults={'A': ('unbalanced_correlative', 'the use that has since been made'),
                 'C': ('faulty_parallel', 'to see what the people'),
                 'D': ('unbalanced_correlative', 'it has been remade')},
         ctx=dict(form=None),
         why="The correlative pair not only and but also joins two items of matching form, "
             "and the first is a what-clause.",
         trap="A turns the second half into a noun phrase, which no longer answers the "
              "clause that follows not only."),
    dict(strand='HUM-S10', pos=10,
         carrier="The number of readings a poem will bear without coming apart is larger "
                 "than ___, and the gap between the two is the space in which criticism "
                 "actually happens, which is a claim both sides of the old argument about "
                 "intention could accept.",
         rule='parallel_comparison',
         rule_span='the number its author could have foreseen',
         opts=['its author writing at the time',
               'foreseeing them all as the author wrote',
               'when the author is consulted about them',
               'the number its author could have foreseen'], key='D',
         faults={'A': ('incomplete_comparison', 'its author writing'),
                 'B': ('faulty_parallel', 'foreseeing them all'),
                 'C': ('incomplete_comparison', 'when the author is consulted')},
         why="A comparison must set like against like, and the first term is a number of "
             "readings, so the second has to be a number.",
         trap="A compares a number of readings with a person, which are not quantities of "
              "the same kind at all."),
])

SOC = dict(domain='SOC', note_ar=(
    "جمل العلوم الاجتماعية تسرد خطوات الدراسة سرداً، وتقارن المقادير بالمقادير: نسبة بنسبة، "
    "ومتوسّطاً بمتوسّط. والمقارنة الناقصة هي الخطأ الأكثر وقوعاً هنا، لأن المقدار يُقارن "
    "بالفئة التي قيس فيها."), xs=[
    dict(strand='SOC-S01', pos=1,
         carrier="Writing a usable questionnaire means testing the wording on real people, "
                 "watching where they hesitate, and ___.",
         rule='parallel_series', rule_span='rewriting the items that failed',
         opts=['to rewrite the items that failed', 'rewrote the items that failed',
               'had rewritten the items that failed',
               'rewriting the items that failed'], key='D',
         faults={'A': ('faulty_parallel', 'to rewrite the items'),
                 'B': ('mixed_form', 'rewrote the items'),
                 'C': ('mixed_form', 'had rewritten the items')},
         ctx=dict(form='gerund'),
         why="The two gerunds after means fix the form of the series, so the third item "
             "is a gerund as well.",
         trap="A is an infinitive, which the pattern already laid down by the first two "
              "items excludes."),
    dict(strand='SOC-S02', pos=2,
         carrier="A trial is designed to balance the two groups, to keep the assignment out "
                 "of anyone's hands, and ___.",
         rule='parallel_infinitive', rule_span='to measure one thing at a time',
         opts=['measuring one thing at a time', 'to measure one thing at a time',
               'measured one thing at a time', 'had measured one thing at a time'],
         key='B',
         faults={'A': ('faulty_parallel', 'measuring one thing'),
                 'C': ('mixed_form', 'measured one thing'),
                 'D': ('mixed_form', 'had measured one thing')},
         ctx=dict(form='infinitive'),
         why="The first two items are infinitives, so the third item in the series keeps "
             "the infinitive form.",
         trap="A is a gerund, which is the form a writer drifts into at the end of a list."),
    dict(strand='SOC-S03', pos=3,
         carrier="A confounder is ruled out by measuring it directly, by holding it fixed "
                 "across the comparison, and by ___.",
         rule='parallel_gerund', rule_span='reporting what was done about it',
         opts=['to report what was done about it',
               'reported what was done about it',
               'reporting what was done about it',
               'had reported what was done about it'], key='C',
         faults={'A': ('faulty_parallel', 'to report what was done'),
                 'B': ('mixed_form', 'reported what was done'),
                 'D': ('mixed_form', 'had reported what was done')},
         ctx=dict(form='gerund'),
         why="Every item follows by and takes a gerund, so the third item keeps the -ing "
             "form.",
         trap="A is an infinitive after a preposition, which cannot be right whatever the "
              "ear says."),
    dict(strand='SOC-S04', pos=4,
         carrier="Describing a distribution honestly means giving a measure of the middle, "
                 "giving a measure of the spread, and ___.",
         rule='parallel_series', rule_span='saying which middle was chosen',
         opts=['saying which middle was chosen', 'to say which middle was chosen',
               'said which middle was chosen', 'had said which middle was chosen'],
         key='A',
         faults={'B': ('faulty_parallel', 'to say which middle'),
                 'C': ('mixed_form', 'said which middle'),
                 'D': ('mixed_form', 'had said which middle')},
         ctx=dict(form='gerund'),
         why="Two gerunds have set the series after means, so the third item in the series "
             "keeps the -ing form.",
         trap="B is an infinitive, which would need the earlier items rewritten to match."),
    dict(strand='SOC-S05', pos=5,
         carrier="The response rate that a dollar paid in advance buys is higher than ___, "
                 "which is the finding that has held up across four decades of survey "
                 "research.",
         rule='parallel_comparison',
         rule_span='the rate that five dollars on completion buys',
         opts=['five dollars paid on completion', 'paying five dollars on completion',
               'when five dollars is paid on completion',
               'the rate that five dollars on completion buys'], key='D',
         faults={'A': ('incomplete_comparison', 'five dollars paid on completion'),
                 'B': ('faulty_parallel', 'paying five dollars'),
                 'C': ('incomplete_comparison', 'when five dollars is paid')},
         why="A comparison must set like against like, and the first term is a rate, so the "
             "second has to be a rate.",
         trap="A compares a response rate with a sum of money, which are not quantities of "
              "the same kind."),
    dict(strand='SOC-S06', pos=6,
         carrier="The Asch experiments are remembered not only for showing how often people "
                 "will give aloud an answer they can plainly see is wrong but also for "
                 "___.",
         rule='parallel_correlative',
         rule_span='showing how quickly one ally ends the effect',
         opts=['one ally was enough to end the effect',
               'to show how quickly one ally ends the effect',
               'showing how quickly one ally ends the effect',
               'it showed how quickly one ally ends the effect'], key='C',
         faults={'A': ('unbalanced_correlative', 'one ally was enough'),
                 'B': ('faulty_parallel', 'to show how quickly'),
                 'D': ('unbalanced_correlative', 'it showed how quickly')},
         ctx=dict(form='gerund'),
         why="What the first half of a correlative pair is, the second half must be, and "
             "here the first half is a gerund after for.",
         trap="A answers a gerund with a full clause, which leaves the two halves of the "
              "pair unmatched."),
    dict(strand='SOC-S07', pos=7,
         carrier="Explaining where a city grew means looking at what it cost to move people "
                 "across it, at what the land under it was worth, at who was allowed to buy "
                 "there, and ___.",
         rule='parallel_series', rule_span='at what the state paid for in the end',
         opts=['the state paid for a good deal of it',
               'at what the state paid for in the end',
               'to see what the state paid for',
               'seeing what the state paid for'], key='B',
         faults={'A': ('unbalanced_correlative', 'the state paid for a good deal'),
                 'C': ('faulty_parallel', 'to see what the state'),
                 'D': ('mixed_form', 'seeing what the state')},
         ctx=dict(form=None),
         why="Three items in the series begin with at, so the fourth item begins with at as "
             "well.",
         trap="D keeps the gerund of looking but drops the preposition that every other "
              "item in the list carries."),
    dict(strand='SOC-S08', pos=8,
         carrier="The share of national income that the top one per cent receives according "
                 "to tax records is larger than ___, and the gap between the two is largest "
                 "in exactly the countries where the top share matters most.",
         rule='parallel_comparison',
         rule_span='the share that household surveys report',
         opts=['the share that household surveys report',
               'household surveys in the same countries',
               'reporting it from household surveys',
               'when household surveys are used instead'], key='A',
         faults={'B': ('incomplete_comparison', 'household surveys in the same'),
                 'C': ('faulty_parallel', 'reporting it from household'),
                 'D': ('incomplete_comparison', 'when household surveys are used')},
         why="A comparison must set like against like, and the first term is a share, so "
             "the second has to be a share.",
         trap="B compares a share of income with a kind of survey, which are not "
              "quantities of the same kind."),
    dict(strand='SOC-S09', pos=9,
         carrier="Testing whether people judge likelihood by how easily an example comes to "
                 "mind has involved asking them to rate events whose real frequencies are "
                 "known, varying how recently the events have been in the news, holding the "
                 "wording of the question fixed, and ___.",
         rule='parallel_gerund', rule_span='comparing the ratings against the frequencies',
         opts=['to compare the ratings against the frequencies',
               'compared the ratings against the frequencies',
               'comparing the ratings against the frequencies',
               'had compared the ratings against the frequencies'], key='C',
         faults={'A': ('faulty_parallel', 'to compare the ratings'),
                 'B': ('mixed_form', 'compared the ratings'),
                 'D': ('mixed_form', 'had compared the ratings')},
         ctx=dict(form='gerund'),
         why="Three gerunds have set this series, so the fourth item in the series keeps "
             "the -ing form.",
         trap="A is an infinitive at the close of a long list, which is where the pattern "
              "is hardest to hold in mind."),
    dict(strand='SOC-S10', pos=10,
         carrier="The program of research on heuristics is defended not only for naming "
                 "the departures from what a calculating agent would do, which is the part "
                 "that has entered common speech, but also for ___, and the second claim is "
                 "the one its critics have found hardest to answer.",
         rule='parallel_correlative',
         rule_span='showing that the departures are systematic rather than random',
         opts=['showing that the departures are systematic rather than random',
               'to show that the departures are systematic rather than random',
               'the departures turned out to be systematic rather than random',
               'it showed the departures to be systematic rather than random'], key='A',
         faults={'B': ('faulty_parallel', 'to show that the departures'),
                 'C': ('unbalanced_correlative', 'the departures turned out'),
                 'D': ('unbalanced_correlative', 'it showed the departures')},
         ctx=dict(form='gerund'),
         why="The correlative pair joins two items of matching form, and the first is a "
             "gerund after for.",
         trap="C answers a gerund with a full clause, which is the commonest way the pair "
              "comes apart."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
