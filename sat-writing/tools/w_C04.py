# -*- coding: utf-8 -*-
"""Chapter 4 - pronoun case and clarity. Home domain HUM.

Key plans: HIS ACDBADCBDB, BIO BDACBADCAC, PHY CABDCBADBD, HUM DBCADCBACA,
SOC ACDBADCBDB.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 4

AR = dict(
    qaida="حالة الضمير ووضوحه بابان: الحالة تعني أن الضمير يأخذ صورة الفاعل إذا كان فاعلاً، "
          "وصورة المفعول إذا كان مفعولاً لفعل أو لحرف جرّ، وصورة الملكية إذا أضيف إلى اسم. "
          "والوضوح يعني أن يكون للضمير مرجع واحد معيّن لا يحتمل غيره.",
    kayf="يضع الاختبار الضمير في تركيب معطوف مثل اسم وضمير، فيضيع الإحساس بالحالة لأن الأذن "
         "تسمع الاسم لا موضع الضمير. ويختبر كذلك الفرق بين صورتي الضمير الموصول في حالة الفاعل "
         "وحالة المفعول، وهو أصعب ما في الباب.",
    fakh="الفخّ أن تحذف الاسم المعطوف فتظهر الحالة فوراً. فإذا قلت آدمز وهو كتبا، فاحذف آدمز "
         "يبقى هو كتب، وهي الصورة الصحيحة. والفخّ الثاني أن الضمير العائد قد يصلح لمرجعين "
         "فيبقى المعنى معلّقاً.",
    sila="حالة الضمير تتكرّر في اختبار سات في صورة واحدة غالباً: تركيب معطوف يخفي موضع الضمير. "
         "والعلاج ميكانيكي لا يحتاج إلى ذوق: احذف ما عُطف عليه واقرأ الجملة. أمّا الوضوح فيعود "
         "في فصل مطابقة الضمير لمرجعه.",
)

HIS = dict(domain='HIS', note_ar=(
    "جمل التاريخ والنظام المدني تكثر فيها التراكيب المعطوفة التي تجمع اسم شخص وضميراً، "
    "وتكثر فيها الجمل الموصولة التي تصف أعضاء لجنة أو محكمة، وهذان موضعا الاختبار."), xs=[
    dict(strand='HIS-S01', pos=1,
         carrier="Adams and ___ had drafted separate paragraphs before the committee met to "
                 "combine them.",
         rule='subject_case', rule_span='he',
         opts=['he', 'him', 'himself', 'his'], key='A',
         faults={'B': ('pro_case', 'him'), 'C': ('reflexive_misuse', 'himself'),
                 'D': ('pro_case', 'his')},
         why="The pronoun is half of the compound subject of had drafted, so it takes the "
             "subject case.",
         trap="B sounds right because Adams and him runs off the tongue like the object of "
              "a preposition."),
    dict(strand='HIS-S02', pos=2,
         carrier="The king's ministers dismissed the petition, and the colonists never "
                 "forgave ___ for it.",
         rule='object_case', rule_span='them',
         opts=['they', 'their', 'them', 'themselves'], key='C',
         faults={'A': ('pro_case', 'they'), 'B': ('pro_case', 'their'),
                 'D': ('reflexive_misuse', 'themselves')},
         why="The pronoun is the object of forgave, so it takes the object case.",
         trap="A is the form a reader expects after a comma, where a new subject would "
              "normally begin."),
    dict(strand='HIS-S03', pos=3,
         carrier="The framers left the method of choosing a president to the states, and "
                 "___ choices produced the electoral college as it now works.",
         rule='possessive_det', rule_span='their',
         opts=['them', 'themselves', 'theirs', 'their'], key='D',
         faults={'A': ('pro_case', 'them'), 'B': ('reflexive_misuse', 'themselves'),
                 'C': ('pro_vague', 'theirs')},
         why="The pronoun modifies the noun choices, so it takes the possessive form that "
             "can stand before a noun.",
         trap="C is possessive but cannot stand in front of a noun, which is the one thing "
              "this position requires."),
    dict(strand='HIS-S04', pos=4,
         carrier="Truth asked the convention to hear ___ out, and the record of what she "
                 "said survives in three conflicting versions.",
         rule='object_case', rule_span='her',
         opts=['she', 'her', 'herself', 'hers'], key='B',
         faults={'A': ('pro_case', 'she'), 'C': ('reflexive_misuse', 'herself'),
                 'D': ('pro_case', 'hers')},
         why="The pronoun is the object of hear, so it takes the object case.",
         trap="A is pulled in by the later she said, which is a subject and sets the wrong "
              "pattern."),
    dict(strand='HIS-S05', pos=5,
         carrier="The senators ___ voted against the Reconstruction amendments were almost "
                 "all from the states that had seceded a decade earlier.",
         rule='who_subject', rule_span='who',
         opts=['who', 'whom', 'whose', 'which'], key='A',
         faults={'B': ('who_whom', 'whom'), 'C': ('pro_case', 'whose'),
                 'D': ('pro_vague', 'which')},
         why="The pronoun is the subject of voted inside its own clause, so who is the form "
             "it takes.",
         trap="B is chosen by readers who treat whom as the more formal and therefore the "
              "safer option."),
    dict(strand='HIS-S06', pos=6,
         carrier="The commissioners ___ Congress appointed to investigate the railroads had "
                 "no power to compel testimony, and the industry treated the hearings as a "
                 "formality to be waited out.",
         rule='whom_object', rule_span='whom',
         opts=['who', 'whose', 'that', 'whom'], key='D',
         faults={'A': ('who_whom', 'who'), 'B': ('pro_case', 'whose'),
                 'C': ('pro_vague', 'that')},
         why="The pronoun is the object of appointed inside its own clause, so whom is the "
             "form it takes.",
         trap="A is the commoner word and sounds natural, but Congress is the subject of "
              "appointed and the pronoun is what was appointed."),
    dict(strand='HIS-S07', pos=7,
         carrier="The Court held that a state could not deny a citizen the vote on account "
                 "of race, and ___ reasoning rested on the amendment's second sentence "
                 "rather than its first.",
         rule='possessive_det', rule_span='its',
         opts=['it', 'itself', 'its', "one's"], key='C',
         faults={'A': ('pro_vague', 'it'), 'B': ('reflexive_misuse', 'itself'),
                 'D': ('pro_vague', "one's")},
         why="The pronoun modifies reasoning, so it takes the possessive form.",
         trap="A is the subject form and leaves reasoning without anything to belong to."),
    dict(strand='HIS-S08', pos=8,
         carrier="The Senate cannot discipline a member without first constituting ___ as a "
                 "court, a step it has taken only a handful of times in two centuries.",
         rule='reflexive_proper', rule_span='itself',
         opts=['it', 'itself', 'its', 'them'], key='B',
         faults={'A': ('reflexive_misuse', 'it'), 'C': ('pro_case', 'its'),
                 'D': ('pro_case', 'them')},
         why="The Senate is both the subject doing the constituting and the thing "
             "constituted, so the reflexive is correct.",
         trap="A uses the plain object form, which would make the Senate constitute "
              "something other than itself."),
    dict(strand='HIS-S09', pos=9,
         carrier="The citizens ___ the wartime sedition statutes reached were in most cases "
                 "not spies or saboteurs but editors of small newspapers printed in "
                 "languages other than English, and several of the convictions were later "
                 "quietly set aside.",
         rule='whom_object', rule_span='whom',
         opts=['who', 'that', 'whoever', 'whom'], key='D',
         faults={'A': ('who_whom', 'who'), 'B': ('pro_vague', 'that'),
                 'C': ('pro_vague', 'whoever')},
         why="The statutes reached the citizens, so the pronoun is the object of reached "
             "and takes whom.",
         trap="A is the form most writers would use here, which is exactly why the test "
              "uses this construction."),
    dict(strand='HIS-S10', pos=10,
         carrier="The editors ___ built the first mass-circulation papers understood that a "
                 "reader who agreed with the paper bought it more faithfully than a reader "
                 "who merely trusted it, and they wrote accordingly for forty years.",
         rule='who_subject', rule_span='who',
         opts=['whom', 'who', 'which', 'whomever'], key='B',
         faults={'A': ('who_whom', 'whom'), 'C': ('pro_vague', 'which'),
                 'D': ('pro_vague', 'whomever')},
         why="The editors did the building, so the pronoun is the subject of built and "
             "takes who.",
         trap="A is encouraged by the length of the sentence, which hides how close the "
              "pronoun is to its own verb."),
])

BIO = dict(domain='BIO', note_ar=(
    "جمل الأحياء وعلوم الأرض تصف باحثين وأنواعاً بجمل موصولة طويلة، فيبعد الضمير الموصول "
    "عن فعله الذي يحكم حالته وتضيع الحالة في الطريق. والحلّ أن تحذف ما بينهما وتقرأ الجملة "
    "الموصولة وحدها، فيظهر هل الضمير فاعل أم مفعول."), xs=[
    dict(strand='BIO-S01', pos=1,
         carrier="Darwin and Wallace reached the same explanation, and ___ papers were read "
                 "to the Linnean Society on one evening.",
         rule='possessive_det', rule_span='their',
         opts=['them', 'their', 'themselves', 'theirs'], key='B',
         faults={'A': ('pro_case', 'them'), 'C': ('reflexive_misuse', 'themselves'),
                 'D': ('pro_vague', 'theirs')},
         why="The pronoun modifies the noun papers, so it takes the possessive form that "
             "stands before a noun.",
         trap="D is possessive in meaning but cannot sit in front of a noun, which this "
              "position demands."),
    dict(strand='BIO-S02', pos=2,
         carrier="Mendel kept his results to himself for years, and neither Nageli nor ___ "
                 "saw what the ratios meant.",
         rule='subject_case', rule_span='he',
         opts=['him', 'himself', 'his', 'he'], key='D',
         faults={'A': ('pro_case', 'him'), 'B': ('reflexive_misuse', 'himself'),
                 'C': ('pro_case', 'his')},
         why="The pronoun is half of the compound subject of saw, so it takes the subject "
             "case.",
         trap="A follows nor, which feels like a preposition and is not."),
    dict(strand='BIO-S03', pos=3,
         carrier="The folds of the inner membrane are what give a mitochondrion its "
                 "surface, and a drug that flattens ___ shuts the cell's energy supply "
                 "down.",
         rule='object_case', rule_span='them',
         opts=['them', 'they', 'their', 'themselves'], key='A',
         faults={'B': ('pro_case', 'they'), 'C': ('pro_case', 'their'),
                 'D': ('reflexive_misuse', 'themselves')},
         why="The pronoun is the object of flattens, so it takes the object case.",
         trap="B is the subject form and is encouraged by the long stretch of subject "
              "material earlier in the sentence."),
    dict(strand='BIO-S04', pos=4,
         carrier="A lake loses most of the energy entering it at every step of the food "
                 "chain, and ___ productivity depends more on sunlight than on the fish "
                 "stocked in it.",
         rule='possessive_det', rule_span='its',
         opts=['it', 'itself', 'its', "one's"], key='C',
         faults={'A': ('pro_vague', 'it'), 'B': ('reflexive_misuse', 'itself'),
                 'D': ('pro_vague', "one's")},
         why="The pronoun modifies productivity, so it takes the possessive form.",
         trap="A is the subject form, which leaves productivity with nothing that owns it."),
    dict(strand='BIO-S05', pos=5,
         carrier="The ecologists ___ Elton trained went on to build the first quantitative "
                 "food webs, and the diagrams they drew are still reprinted.",
         rule='whom_object', rule_span='whom',
         opts=['who', 'whom', 'whose', 'that'], key='B',
         faults={'A': ('who_whom', 'who'), 'C': ('pro_case', 'whose'),
                 'D': ('pro_vague', 'that')},
         why="Elton did the training, so the pronoun is the object of trained and takes "
             "whom.",
         trap="A is the form most readers hear as correct because the pronoun stands at the "
              "front of its clause."),
    dict(strand='BIO-S06', pos=6,
         carrier="The physician ___ traced the Broad Street outbreak to a single pump had "
                 "no theory of the organism at all, and the map he drew persuaded the parish "
                 "board where his argument had not.",
         rule='who_subject', rule_span='who',
         opts=['who', 'whom', 'whose', 'which'], key='A',
         faults={'B': ('who_whom', 'whom'), 'C': ('pro_case', 'whose'),
                 'D': ('pro_vague', 'which')},
         why="The physician did the tracing, so the pronoun is the subject of traced and "
             "takes who.",
         trap="B is chosen by readers who reach for whom whenever a sentence sounds "
              "formal."),
    dict(strand='BIO-S07', pos=7,
         carrier="Legumes do not fix nitrogen themselves; bacteria housed in nodules on "
                 "the roots do it for ___, and the plant pays for the service in sugar "
                 "that it makes above ground.",
         rule='object_case', rule_span='her',
         opts=['she', 'herself', 'hers', 'her'], key='D',
         faults={'A': ('pro_case', 'she'), 'B': ('reflexive_misuse', 'herself'),
                 'C': ('pro_case', 'hers')},
         ctx=dict(number='sing'),
         why="The pronoun is the object of the preposition for, so it takes the object "
             "case.",
         trap="A is the subject form, which cannot follow a preposition however natural it "
              "sounds in speech."),
    dict(strand='BIO-S08', pos=8,
         carrier="A carbon reservoir that exchanges slowly with the atmosphere can hide a "
                 "great deal of carbon inside ___ for centuries, which is why the deep "
                 "ocean matters more than its temperature suggests.",
         rule='reflexive_proper', rule_span='itself',
         opts=['it', 'its', 'itself', 'them'], key='C',
         faults={'A': ('reflexive_misuse', 'it'), 'B': ('pro_case', 'its'),
                 'D': ('pro_case', 'them')},
         why="The reservoir is both what hides the carbon and where the carbon is hidden, "
             "so the reflexive is correct.",
         trap="A uses the plain object form, which would put the carbon inside something "
              "other than the reservoir."),
    dict(strand='BIO-S09', pos=9,
         carrier="The geologist ___ argued that the Scablands were cut by a single flood "
                 "spent thirty years being told that catastrophe was not a respectable "
                 "explanation, and the discipline came round only after the ice dam that "
                 "would have held the water was found.",
         rule='who_subject', rule_span='who',
         opts=['who', 'whom', 'which', 'whomever'], key='A',
         faults={'B': ('who_whom', 'whom'), 'C': ('pro_vague', 'which'),
                 'D': ('pro_vague', 'whomever')},
         why="The geologist did the arguing, so the pronoun is the subject of argued and "
             "takes who.",
         trap="B is encouraged by the sentence's length, which separates the pronoun from "
              "the verb it governs."),
    dict(strand='BIO-S10', pos=10,
         carrier="The oceanographers ___ the first deep tracer surveys employed were "
                 "looking for circulation times rather than for pollution, and the "
                 "bomb-produced carbon they used as a marker had been put into the water by "
                 "accident.",
         rule='whom_object', rule_span='whom',
         opts=['who', 'that', 'whom', 'whoever'], key='C',
         faults={'A': ('who_whom', 'who'), 'B': ('pro_vague', 'that'),
                 'D': ('pro_vague', 'whoever')},
         why="The surveys employed the oceanographers, so the pronoun is the object of "
             "employed and takes whom.",
         trap="A reads as a subject because it stands first, though the subject of employed "
              "is the surveys."),
])

PHY = dict(domain='PHY', note_ar=(
    "جمل العلوم الفيزيائية تضع الضمير بعد حرف جرّ كثيراً، لأن وصف الجهاز يحتاج إلى حروف "
    "الجرّ: على، وفي، ومن، وبين. وبعد حرف الجرّ لا تأتي إلّا صورة المفعول، وهذه أوضح قاعدة "
    "في الفصل وأكثرها إهمالاً."), xs=[
    dict(strand='PHY-S01', pos=1,
         carrier="The technician and ___ read the same instrument and recorded figures "
                 "differing in the last digit.",
         rule='subject_case', rule_span='he',
         opts=['him', 'himself', 'he', 'his'], key='C',
         faults={'A': ('pro_case', 'him'), 'B': ('reflexive_misuse', 'himself'),
                 'D': ('pro_case', 'his')},
         why="The pronoun is half of the compound subject of read, so it takes the subject "
             "case.",
         trap="A sounds natural because the technician and him runs together as a phrase."),
    dict(strand='PHY-S02', pos=2,
         carrier="A pendulum keeps time by ___ length alone, and the mass hung at the "
                 "bottom makes no difference at all.",
         rule='possessive_det', rule_span='its',
         opts=['its', 'it', 'itself', "one's"], key='A',
         faults={'B': ('pro_vague', 'it'), 'C': ('reflexive_misuse', 'itself'),
                 'D': ('pro_vague', "one's")},
         why="The pronoun modifies the noun length, so it takes the possessive form.",
         trap="B is the plain form, which leaves length belonging to nothing."),
    dict(strand='PHY-S03', pos=3,
         carrier="Two forces act on a book lying on a table, and a free-body diagram draws "
                 "___ as arrows of equal length pointing opposite ways.",
         rule='object_case', rule_span='them',
         opts=['they', 'them', 'their', 'themselves'], key='B',
         faults={'A': ('pro_case', 'they'), 'C': ('pro_case', 'their'),
                 'D': ('reflexive_misuse', 'themselves')},
         why="The pronoun is the object of draws, so it takes the object case.",
         trap="A is the subject form and is encouraged by Two forces act at the start of "
              "the sentence."),
    dict(strand='PHY-S04', pos=4,
         carrier="Joule measured the warming of water stirred by a falling weight, and "
                 "neither the thermometer nor ___ was accurate enough to convince everyone "
                 "at once.",
         rule='subject_case', rule_span='she',
         opts=['her', 'herself', 'hers', 'she'], key='D',
         faults={'A': ('pro_case', 'her'), 'B': ('reflexive_misuse', 'herself'),
                 'C': ('pro_case', 'hers')},
         ctx=dict(number='sing'),
         why="The pronoun is half of the compound subject of was, so it takes the subject "
             "case.",
         trap="A follows nor, which the ear treats as a preposition though it is a "
              "conjunction."),
    dict(strand='PHY-S05', pos=5,
         carrier="The engineer ___ wired the three lamps in parallel knew that each would "
                 "burn at full brightness rather than at a third of it.",
         rule='who_subject', rule_span='who',
         opts=['whom', 'whose', 'who', 'which'], key='C',
         faults={'A': ('who_whom', 'whom'), 'B': ('pro_case', 'whose'),
                 'D': ('pro_vague', 'which')},
         why="The engineer did the wiring, so the pronoun is the subject of wired and takes "
             "who.",
         trap="A is reached for by writers who treat whom as a mark of care rather than a "
              "case."),
    dict(strand='PHY-S06', pos=6,
         carrier="The instrument makers ___ the observatory employed ground lenses by hand "
                 "to a tolerance no machine of the period could hold, and a single flaw in "
                 "the glass wasted a month of work.",
         rule='whom_object', rule_span='whom',
         opts=['who', 'whom', 'whose', 'that'], key='B',
         faults={'A': ('who_whom', 'who'), 'C': ('pro_case', 'whose'),
                 'D': ('pro_vague', 'that')},
         why="The observatory employed the makers, so the pronoun is the object of employed "
             "and takes whom.",
         trap="A stands at the head of its clause and so reads as a subject, though the "
              "subject is the observatory."),
    dict(strand='PHY-S07', pos=7,
         carrier="Two metals pressed together conduct heat across the joint badly, and ___ "
                 "contact resistance is what limits the cooling of a processor far more "
                 "than the metals themselves do.",
         rule='possessive_det', rule_span='their',
         opts=['their', 'them', 'themselves', 'theirs'], key='A',
         faults={'B': ('pro_case', 'them'), 'C': ('reflexive_misuse', 'themselves'),
                 'D': ('pro_vague', 'theirs')},
         why="The pronoun modifies contact resistance, so it takes the possessive form that "
             "stands before a noun.",
         trap="D is possessive but cannot precede a noun, which is the only thing this slot "
              "allows."),
    dict(strand='PHY-S08', pos=8,
         carrier="The chemists ___ first separated the rare earths worked for decades "
                 "without knowing why the elements were so nearly alike, and the answer lay "
                 "in a shell of electrons that fills inward rather than outward.",
         rule='who_subject', rule_span='who',
         opts=['whom', 'which', 'whomever', 'who'], key='D',
         faults={'A': ('who_whom', 'whom'), 'B': ('pro_vague', 'which'),
                 'C': ('pro_vague', 'whomever')},
         why="The chemists did the separating, so the pronoun is the subject of separated "
             "and takes who.",
         trap="A is encouraged by the formality of the sentence rather than by the "
              "pronoun's position."),
    dict(strand='PHY-S09', pos=9,
         carrier="A radioactive nucleus does not age: it has no way of recording how long "
                 "it has already waited, and so the chance that it decays in the next "
                 "second is the same whether it formed yesterday or found ___ in a rock a "
                 "billion years old.",
         rule='reflexive_proper', rule_span='itself',
         opts=['it', 'itself', 'its', 'them'], key='B',
         faults={'A': ('reflexive_misuse', 'it'), 'C': ('pro_case', 'its'),
                 'D': ('pro_case', 'them')},
         why="The nucleus is both what finds and what is found, so the reflexive is "
             "correct.",
         trap="A uses the plain object form, which would have the nucleus find something "
              "other than itself."),
    dict(strand='PHY-S10', pos=10,
         carrier="The astronomer ___ Pickering set to work measuring the brightness of "
                 "variable stars on photographic plates found a relation between period and "
                 "luminosity that turned the plates into a ruler for the universe, and the "
                 "relation still carries her name.",
         rule='whom_object', rule_span='whom',
         opts=['who', 'that', 'whoever', 'whom'], key='D',
         faults={'A': ('who_whom', 'who'), 'B': ('pro_vague', 'that'),
                 'C': ('pro_vague', 'whoever')},
         why="Pickering did the setting to work, so the pronoun is the object of set and "
             "takes whom.",
         trap="A is what nearly every writer would use, which is why this construction "
              "appears on the test at all."),
])

HUM = dict(domain='HUM', note_ar=(
    "في جمل الإنسانيات يلتقي الراوي والشخصية والمؤلّف في جملة واحدة، فيصلح الضمير لأكثر من "
    "مرجع. وهذا هو المجال الأصلي لهذا الفصل: الحالة فيه مسألة نحوية، والوضوح مسألة معنى، "
    "وكلتاهما تُختبر هنا."), xs=[
    dict(strand='HUM-S01', pos=1,
         carrier="The narrator and ___ remember the same evening differently, and the novel "
                 "never says which account to trust.",
         rule='subject_case', rule_span='he',
         opts=['him', 'his', 'himself', 'he'], key='D',
         faults={'A': ('pro_case', 'him'), 'B': ('pro_case', 'his'),
                 'C': ('reflexive_misuse', 'himself')},
         why="The pronoun is half of the compound subject of remember, so it takes the "
             "subject case.",
         trap="A is the form that sounds right after the narrator and, which the ear hears "
              "as a phrase."),
    dict(strand='HUM-S02', pos=2,
         carrier="Characters reveal ___ motives through what they do rather than through "
                 "what they say about themselves.",
         rule='possessive_det', rule_span='their',
         opts=['them', 'their', 'themselves', 'theirs'], key='B',
         faults={'A': ('pro_case', 'them'), 'C': ('reflexive_misuse', 'themselves'),
                 'D': ('pro_vague', 'theirs')},
         why="The pronoun modifies the noun motives, so it takes the possessive form.",
         trap="C is pulled in by themselves at the end of the sentence, which is a "
              "different construction."),
    dict(strand='HUM-S03', pos=3,
         carrier="A dead metaphor still carries its two halves, and a reader who stops to "
                 "look can see ___ separate again for a moment.",
         rule='object_case', rule_span='them',
         opts=['their', 'they', 'them', 'themselves'], key='C',
         faults={'A': ('pro_case', 'their'), 'B': ('pro_case', 'they'),
                 'D': ('reflexive_misuse', 'themselves')},
         why="The pronoun is the object of see, so it takes the object case.",
         trap="B is the subject form, chosen because separate reads as a verb needing a "
              "subject."),
    dict(strand='HUM-S04', pos=4,
         carrier="The poets ___ fixed the English sonnet in its present shape were "
                 "translating an Italian form and changed it as they went.",
         rule='who_subject', rule_span='who',
         opts=['who', 'whom', 'whose', 'which'], key='A',
         faults={'B': ('who_whom', 'whom'), 'C': ('pro_case', 'whose'),
                 'D': ('pro_vague', 'which')},
         why="The poets did the fixing, so the pronoun is the subject of fixed and takes "
             "who.",
         trap="B is chosen for its formality, which the sentence does not ask for."),
    dict(strand='HUM-S05', pos=5,
         carrier="The boy actors ___ the company apprenticed played the women's parts, and "
                 "a successful one could expect to graduate to men's roles when his voice "
                 "broke.",
         rule='whom_object', rule_span='whom',
         opts=['who', 'whose', 'that', 'whom'], key='D',
         faults={'A': ('who_whom', 'who'), 'B': ('pro_case', 'whose'),
                 'C': ('pro_vague', 'that')},
         why="The company apprenticed the boys, so the pronoun is the object of "
             "apprenticed and takes whom.",
         trap="A heads its clause and so reads as a subject, though the company is the "
              "subject of apprenticed."),
    dict(strand='HUM-S06', pos=6,
         carrier="A genre that has lasted long enough begins to quote ___, and a detective "
                 "novel written now cannot avoid commenting on the hundred that came before "
                 "it.",
         rule='reflexive_proper', rule_span='itself',
         opts=['it', 'its', 'itself', 'them'], key='C',
         faults={'A': ('reflexive_misuse', 'it'), 'B': ('pro_case', 'its'),
                 'D': ('pro_case', 'them')},
         why="The genre is both what quotes and what is quoted, so the reflexive is "
             "correct.",
         trap="A uses the plain object form, which would have the genre quote some other "
              "thing."),
    dict(strand='HUM-S07', pos=7,
         carrier="The painters ___ learned to see in the academy's drawing rooms carried "
                 "its hierarchy of subjects with them even when they left, and the first "
                 "landscapes they exhibited were defended as history paintings in "
                 "disguise.",
         rule='who_subject', rule_span='who',
         opts=['whom', 'who', 'which', 'whomever'], key='B',
         faults={'A': ('who_whom', 'whom'), 'C': ('pro_vague', 'which'),
                 'D': ('pro_vague', 'whomever')},
         why="The painters did the learning, so the pronoun is the subject of learned and "
             "takes who.",
         trap="A is encouraged by the length of the clause, which puts the verb a long way "
              "from the pronoun."),
    dict(strand='HUM-S08', pos=8,
         carrier="The copyists ___ a publisher paid to prepare parts from a composer's "
                 "score introduced errors that are still played, and an editor who corrects "
                 "them has to decide which readings were the composer's and which were the "
                 "copyist's.",
         rule='whom_object', rule_span='whom',
         opts=['whom', 'who', 'that', 'whoever'], key='A',
         faults={'B': ('who_whom', 'who'), 'C': ('pro_vague', 'that'),
                 'D': ('pro_vague', 'whoever')},
         why="The publisher paid the copyists, so the pronoun is the object of paid and "
             "takes whom.",
         trap="B is the word a careful writer would still choose here, which is why the "
              "test prefers this frame."),
    dict(strand='HUM-S09', pos=9,
         carrier="A building that has to be approached on foot teaches a city something "
                 "about ___, because the walk is where the visitor notices how the street "
                 "is made and what the facade was meant to answer.",
         rule='reflexive_proper', rule_span='herself',
         opts=['her', 'hers', 'herself', 'she'], key='C',
         faults={'A': ('reflexive_misuse', 'her'), 'B': ('pro_case', 'hers'),
                 'D': ('pro_case', 'she')},
         ctx=dict(number='sing'),
         why="The visitor is both the one who learns and the one learned about, so the "
             "reflexive is correct.",
         trap="A uses the plain object form, which points at a person other than the one "
              "doing the walking."),
    dict(strand='HUM-S10', pos=10,
         carrier="The critics ___ insisted that a poem's meaning is settled by the words on "
                 "the page were arguing against a habit of reading rather than against a "
                 "theory, and the habit of asking what the poet had intended survived the "
                 "argument by fifty years.",
         rule='who_subject', rule_span='who',
         opts=['who', 'whom', 'whose', 'whoever'], key='A',
         faults={'B': ('who_whom', 'whom'), 'C': ('pro_case', 'whose'),
                 'D': ('pro_vague', 'whoever')},
         why="The critics did the insisting, so the pronoun is the subject of insisted and "
             "takes who.",
         trap="B is reached for because the sentence is long and formal, not because the "
              "pronoun is an object."),
])

SOC = dict(domain='SOC', note_ar=(
    "جمل العلوم الاجتماعية تصف من سُئل ومن أجاب ومن أُهمل، فتتوالى الجمل الموصولة عن أناس، "
    "وهذا هو الموضع الذي يختبر فيه الفرق بين صورتي الضمير الموصول. والسؤال دائماً: من فعل "
    "الفعل داخل الجملة الموصولة؟"), xs=[
    dict(strand='SOC-S01', pos=1,
         carrier="Interviewers are told not to help a respondent, because helping ___ "
                 "changes the answer being measured.",
         rule='object_case', rule_span='them',
         opts=['them', 'they', 'their', 'themselves'], key='A',
         faults={'B': ('pro_case', 'they'), 'C': ('pro_case', 'their'),
                 'D': ('reflexive_misuse', 'themselves')},
         why="The pronoun is the object of helping, so it takes the object case.",
         trap="B is the subject form and is encouraged by the verb changes that follows."),
    dict(strand='SOC-S02', pos=2,
         carrier="Fisher and ___ disagreed for years about whether a controlled experiment "
                 "needed randomizing at all.",
         rule='subject_case', rule_span='he',
         opts=['him', 'himself', 'he', 'his'], key='C',
         faults={'A': ('pro_case', 'him'), 'B': ('reflexive_misuse', 'himself'),
                 'D': ('pro_case', 'his')},
         why="The pronoun is half of the compound subject of disagreed, so it takes the "
             "subject case.",
         trap="A sounds right because Fisher and him is heard as a unit rather than as two "
              "subjects."),
    dict(strand='SOC-S03', pos=3,
         carrier="Two variables can rise together without either causing the other, and ___ "
                 "common cause is often something nobody thought to measure.",
         rule='possessive_det', rule_span='their',
         opts=['them', 'themselves', 'theirs', 'their'], key='D',
         faults={'A': ('pro_case', 'them'), 'B': ('reflexive_misuse', 'themselves'),
                 'C': ('pro_vague', 'theirs')},
         why="The pronoun modifies the noun cause, so it takes the possessive form that "
             "stands before a noun.",
         trap="C is possessive in sense but cannot be followed by a noun, which this "
              "position requires."),
    dict(strand='SOC-S04', pos=4,
         carrier="A long tail pulls the mean away from the middle of a distribution, and no "
                 "single number describes ___ as well as two of them together do.",
         rule='object_case', rule_span='it',
         opts=['they', 'it', 'its', 'itself'], key='B',
         faults={'A': ('pro_case', 'they'), 'C': ('pro_case', 'its'),
                 'D': ('reflexive_misuse', 'itself')},
         why="The pronoun is the object of describes, so it takes the object case.",
         trap="A is plural and agrees with nothing in the sentence, but the nearby them "
              "makes it sound available."),
    dict(strand='SOC-S05', pos=5,
         carrier="The respondents ___ answered the first mailing differed from those who "
                 "answered only after a reminder, and the difference was larger than the "
                 "effect the study was looking for.",
         rule='who_subject', rule_span='who',
         opts=['who', 'whom', 'whose', 'which'], key='A',
         faults={'B': ('who_whom', 'whom'), 'C': ('pro_case', 'whose'),
                 'D': ('pro_vague', 'which')},
         why="The respondents did the answering, so the pronoun is the subject of answered "
             "and takes who.",
         trap="B is chosen by readers who use whom wherever a sentence looks technical."),
    dict(strand='SOC-S06', pos=6,
         carrier="The subjects ___ Asch placed among the confederates were told that the "
                 "study concerned vision, and a third of them went along with an answer "
                 "they could see was wrong.",
         rule='whom_object', rule_span='whom',
         opts=['who', 'whose', 'that', 'whom'], key='D',
         faults={'A': ('who_whom', 'who'), 'B': ('pro_case', 'whose'),
                 'C': ('pro_vague', 'that')},
         why="Asch placed the subjects, so the pronoun is the object of placed and takes "
             "whom.",
         trap="A heads its clause and reads as a subject, though Asch is the subject of "
              "placed."),
    dict(strand='SOC-S07', pos=7,
         carrier="Housing near the center and a shorter commute are the two things a "
                 "household trades against each other, and ___ are what a city's shape "
                 "ultimately records.",
         rule='subject_case', rule_span='they',
         opts=['them', 'themselves', 'they', 'theirs'], key='C',
         faults={'A': ('pro_case', 'them'), 'B': ('reflexive_misuse', 'themselves'),
                 'D': ('pro_case', 'theirs')},
         why="The pronoun is the subject of are in the second clause, so it takes the "
             "subject case.",
         trap="A is pulled in by each other just before the comma, which is an object."),
    dict(strand='SOC-S08', pos=8,
         carrier="A statistical agency that publishes a figure it knows to be imperfect "
                 "exposes ___ to criticism from both sides, and the alternative, publishing "
                 "nothing, is worse.",
         rule='reflexive_proper', rule_span='itself',
         opts=['it', 'itself', 'its', 'them'], key='B',
         faults={'A': ('reflexive_misuse', 'it'), 'C': ('pro_case', 'its'),
                 'D': ('pro_case', 'them')},
         why="The agency is both what exposes and what is exposed, so the reflexive is "
             "correct.",
         trap="A uses the plain object form, which would have the agency expose something "
              "other than itself."),
    dict(strand='SOC-S09', pos=9,
         carrier="The households ___ a long-running panel study follows for a decade are "
                 "not a fresh sample each year, which is what makes it possible to ask how "
                 "long a spell of low income lasts, and also what makes the study expensive "
                 "enough that few countries run one.",
         rule='whom_object', rule_span='whom',
         opts=['who', 'that', 'whoever', 'whom'], key='D',
         faults={'A': ('who_whom', 'who'), 'B': ('pro_vague', 'that'),
                 'C': ('pro_vague', 'whoever')},
         why="The study follows the households, so the pronoun is the object of follows and "
             "takes whom.",
         trap="A is the form almost every writer would use, and the test relies on that."),
    dict(strand='SOC-S10', pos=10,
         carrier="People asked to judge how likely an event is do not compute a frequency; "
                 "they ask how easily an example comes to mind, and ___ answer is therefore "
                 "shaped by what the newspapers happened to report last week rather than by "
                 "any count.",
         rule='possessive_det', rule_span='their',
         opts=['them', 'their', 'themselves', 'whose'], key='B',
         faults={'A': ('pro_case', 'them'), 'C': ('reflexive_misuse', 'themselves'),
                 'D': ('pro_vague', 'whose')},
         why="The pronoun modifies the noun answer, so it takes the possessive form.",
         trap="A is the object form, which leaves answer with nothing that owns it."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
