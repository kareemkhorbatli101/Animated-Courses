# -*- coding: utf-8 -*-
"""Chapter 6 - modifier placement. Home domain PHY.

Key plans: HIS CABDCBADBD, BIO DBCADCBACA, PHY ACDBADCBDB, HUM BDACBADCAC,
SOC CABDCBADBD.

None of this chapter's four moves carries a machine predicate, so every
distractor is carried by its quoted span alone and the strict rule applies: the
span must occur in its own option and in no other, the key above all. The item
shape is the one the test uses -- the modifier is fixed in the carrier and the
blank is the main clause -- because that is what makes exactly one option
grammatical. An item that left the modifier open would have two defensible
answers, since a full subordinate clause and a correctly matched participle are
both right.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 6

AR = dict(
    qaida="موضع العبارة الواصفة هو القاعدة التي تقول إن العبارة تصف ما تجاوره، فلا بدّ أن "
          "تجاور ما تصفه. والصورة الأشهر هي العبارة التي تفتتح الجملة وتنتهي بفاصلة: فاعل "
          "الجملة بعدها هو الذي تصفه، فإن كان غيره صارت العبارة معلّقة لا صاحب لها.",
    kayf="يثبّت الاختبار العبارة الواصفة في أوّل الجملة ويجعل الفراغ في الجملة الرئيسة، فيصير "
         "السؤال: أيّ فاعل يصحّ أن توصف به هذه العبارة؟ ويستعمل كذلك الظرف الذي يصلح أن يتعلّق "
         "بفعلين قبله وبعده فيبقى المعنى مزدوجاً.",
    fakh="الفخّ أن الجملة المعلّقة تُقرأ قراءة سليمة ولا يشعر القارئ بشيء، لأن العقل يصحّح "
         "المعنى من تلقاء نفسه. والعلاج أن تسأل سؤالاً واحداً صريحاً: من فعل ما تصفه العبارة؟ "
         "ثمّ تنظر هل هو فاعل الجملة أم لا.",
    sila="موضع العبارة الواصفة من الأبواب التي تتكرّر في اختبار سات بصورة واحدة تكاد لا "
         "تتغيّر، فمعرفة الصورة تكفي. والمهارة نفسها تنفع في الفهم القرائي، لأن تحديد صاحب "
         "العبارة هو تحديد المعنى.",
)

HIS = dict(domain='HIS', note_ar=(
    "جمل التاريخ والنظام المدني تفتتح بعبارات تصف أحداثاً جرت قبل الجملة الرئيسة: بعد "
    "مداولات طويلة، وبعد أن طُبع النصّ. وصاحب العبارة في هذه الجمل كثيراً ما يكون غائباً "
    "عن الجملة الرئيسة تماماً."), xs=[
    dict(strand='HIS-S01', pos=1,
         carrier="Printed overnight by a Philadelphia shop and sent north by riders the "
                 "next morning, ___.",
         rule='modifier_adjacent', rule_span='the text',
         opts=['Washington read it to the army on July ninth',
               'it took four days for the news to arrive in New York',
               'the text reached New York within four days',
               'reading it aloud took the better part of an hour'], key='C',
         faults={'A': ('agent_mismatch', 'Washington read it'),
                 'B': ('dangler', 'it took four days'),
                 'D': ('dangler', 'reading it aloud')},
         why="The opening phrase describes what was printed and sent, so the noun standing "
             "next to it has to be the text.",
         trap="A reads naturally because Washington did receive the document, but he is not "
              "what the printer printed."),
    dict(strand='HIS-S02', pos=2,
         carrier="Having spent four months in debate over representation and the slave "
                 "trade, ___.",
         rule='agent_named_first', rule_span='the delegates',
         opts=['the delegates signed a document none of them entirely approved',
               "Madison's notes record the last day in unusual detail",
               'the document was signed by thirty-nine of the fifty-five',
               'approval was far from unanimous'], key='A',
         faults={'B': ('agent_mismatch', "Madison's notes record"),
                 'C': ('dangler', 'the document was signed'),
                 'D': ('dangler', 'approval was far')},
         why="The opening participle needs the subject of the main clause to be whoever "
             "spent the four months, and only the delegates did.",
         trap="C is in the passive and so hides the agent, which is exactly how a dangling "
              "modifier survives a first reading."),
    dict(strand='HIS-S03', pos=3,
         carrier="Written into the Naturalization Act of 1790 and then left standing in the "
                 "statute books for eighty years without serious challenge, ___.",
         rule='modifier_adjacent', rule_span='the phrase',
         opts=['Congress did not remove the racial bar until after the Civil War',
               'the phrase free white person decided who could be naturalized',
               'naturalization was open only to a part of the population',
               'it was a restriction nobody in 1790 thought remarkable'], key='B',
         faults={'A': ('agent_mismatch', 'Congress did not remove'),
                 'C': ('dangler', 'naturalization was open'),
                 'D': ('dangler', 'it was a restriction')},
         why="The opening phrase describes what was written into the Act, so the noun next "
             "to it must be the phrase itself.",
         trap="A names the body that wrote the words, which is the agent of the modifier "
              "rather than the thing modified."),
    dict(strand='HIS-S04', pos=4,
         carrier="Arguing on a public platform that the claim of natural rights could not "
                 "be limited by the color of a man's skin, ___.",
         rule='participle_matched', rule_span='Douglass',
         opts=['the speech at Rochester has been reprinted ever since',
               'his audience at Rochester heard the whole of it in silence',
               'it was a case the Constitution itself seemed to concede',
               'Douglass turned the Fourth of July into an accusation'], key='D',
         faults={'A': ('dangler', 'the speech at Rochester'),
                 'B': ('agent_mismatch', 'his audience at Rochester'),
                 'C': ('dangler', 'it was a case')},
         why="The participle arguing needs a person as its implied actor, and the subject "
             "of the main clause has to be that person.",
         trap="A is tempting because the speech does contain the argument, but a speech "
              "cannot be the one doing the arguing."),
    dict(strand='HIS-S05', pos=5,
         carrier="Occupied by federal troops for the better part of a decade and then left "
                 "to the governments that replaced them, ___.",
         rule='agent_named_first', rule_span='the former Confederate states',
         opts=['Reconstruction ended with a bargain over a disputed election',
               'it was a settlement that lasted until the 1960s',
               'the former Confederate states rewrote their constitutions twice',
               'disenfranchisement followed within twenty years'], key='C',
         faults={'A': ('agent_mismatch', 'Reconstruction ended'),
                 'B': ('dangler', 'it was a settlement'),
                 'D': ('dangler', 'disenfranchisement followed')},
         why="The opening phrase describes what was occupied, so the subject of the main "
             "clause must be the places that were under occupation.",
         trap="A names the period rather than the territory, and a period of time cannot be "
              "occupied by troops."),
    dict(strand='HIS-S06', pos=6,
         carrier="Having watched a hundred and forty-six garment workers die in a fire "
                 "whose exits had been locked from the outside to stop the women leaving "
                 "early, ___.",
         rule='participle_matched', rule_span='the state commission',
         opts=['the factory was rebuilt to a new standard within two years',
               'the state commission wrote thirty-eight bills in eighteen months',
               'the owners of the building were acquitted of manslaughter',
               'fire regulations were rewritten across the whole of New York'],
         key='B',
         faults={'A': ('dangler', 'the factory was rebuilt'),
                 'C': ('agent_mismatch', 'the owners of the building'),
                 'D': ('dangler', 'fire regulations were rewritten')},
         why="The participle having watched requires an actor who can watch, so the "
             "subject of the main clause must be people rather than a building or a rule.",
         trap="D is the historical consequence and reads as the natural continuation, but "
              "regulations cannot watch anything."),
    dict(strand='HIS-S07', pos=7,
         carrier="Argued over four days in December 1952 and then argued through again a "
                 "full year later, when the Court asked the parties to return and address "
                 "the history of the amendment, ___.",
         rule='modifier_adjacent', rule_span='the school cases',
         opts=['the school cases took two full terms to decide',
               'the justices were unanimous when the opinion finally came down',
               'segregation in public schools was held to be unconstitutional',
               'it was the longest argument of the decade'], key='A',
         faults={'B': ('agent_mismatch', 'the justices were unanimous'),
                 'C': ('dangler', 'segregation in public schools'),
                 'D': ('dangler', 'it was the longest argument')},
         why="The opening phrase describes what was argued, so the noun standing next to it "
             "must be the cases themselves.",
         trap="B names the people who did the deciding, who are the agent of the main verb "
              "and not the thing that was argued."),
    dict(strand='HIS-S08', pos=8,
         carrier="The dispatches that the colonial office in London answered, often after "
                 "the situation they reported had already changed beyond recognition, ___ "
                 "the state of the territory.",
         rule='squint_resolved', rule_span='slowly described',
         opts=['described slowly conditions in', 'described conditions slowly in',
               'conditions described slowly in', 'slowly described conditions in'],
         key='D',
         faults={'A': ('misplaced', 'described slowly conditions'),
                 'B': ('squinting', 'described conditions slowly'),
                 'C': ('misplaced', 'conditions described slowly')},
         why="Placed in front of the verb it modifies, slowly can only describe the "
             "describing and is no longer ambiguous between two verbs.",
         trap="B leaves the adverb where it could belong either to answered or to "
              "described, which is the ambiguous reading the item is testing."),
    dict(strand='HIS-S09', pos=9,
         carrier="Suspended by the president in the first year of the war, upheld by an act "
                 "of Congress two years after that, and never squarely tested in the "
                 "Supreme Court while the fighting continued, ___.",
         rule='participle_matched', rule_span='the writ of habeas corpus',
         opts=['Lincoln defended the suspension as a necessity of war',
               'the writ of habeas corpus was restored only after the war ended',
               'the question of who may suspend it has never been settled',
               'it remained an open question for the whole of the century'], key='B',
         faults={'A': ('agent_mismatch', 'Lincoln defended the suspension'),
                 'C': ('dangler', 'the question of who'),
                 'D': ('dangler', 'it remained an open question')},
         why="All three opening participles describe the same thing being acted upon, so "
             "the subject of the main clause must be that thing.",
         trap="A names the man who suspended the writ, who is the agent of the first "
              "participle rather than what it describes."),
    dict(strand='HIS-S10', pos=10,
         carrier="Historians of the penny press have argued that the editors who courted "
                 "partisan readers in the 1830s ___ the circulation figures that made the "
                 "papers worth buying, which is a claim about cause that the surviving "
                 "ledgers can neither confirm nor refute.",
         rule='squint_resolved', rule_span='deliberately inflated',
         opts=['inflated deliberately', 'inflated the deliberately',
               'inflated and deliberately', 'deliberately inflated'], key='D',
         faults={'A': ('squinting', 'inflated deliberately'),
                 'B': ('misplaced', 'inflated the deliberately'),
                 'C': ('misplaced', 'inflated and deliberately')},
         why="Put in front of the verb, deliberately can only describe the inflating and is "
             "no longer ambiguous between courted and inflated.",
         trap="A leaves the adverb between two verbs, where it could qualify either the "
              "courting or the inflating."),
])

BIO = dict(domain='BIO', note_ar=(
    "جمل الأحياء وعلوم الأرض تفتتح بعبارات تصف ما جرى على الكائن أو على الصخر، ثمّ تأتي "
    "الجملة الرئيسة ففاعلها كثيراً ما يكون الباحث لا الشيء الموصوف، وهنا يقع التعليق."),
    xs=[
    dict(strand='BIO-S01', pos=1,
         carrier="Having kept and bred pigeons for years before he ever wrote a word "
                 "about finches, ___.",
         rule='agent_named_first', rule_span='Darwin',
         opts=['the breeding experiments came first and the theory afterward',
               'his correspondents supplied skins from every continent',
               'it was an argument built from the farmyard outward',
               'Darwin opened his book with the breeder rather than the naturalist'],
         key='D',
         faults={'A': ('dangler', 'the breeding experiments came'),
                 'B': ('agent_mismatch', 'his correspondents supplied skins'),
                 'C': ('dangler', 'it was an argument')},
         why="Having kept needs a person as its actor, so the subject of the main clause "
             "must be the man who kept the pigeons.",
         trap="A names the experiments, which are what he kept the pigeons for and not the "
              "one who kept them."),
    dict(strand='BIO-S02', pos=2,
         carrier="Grown in a walled garden and counted by hand over eight seasons, ___.",
         rule='modifier_adjacent', rule_span='the pea plants',
         opts=['Mendel found ratios that held across every cross',
               'the pea plants gave a three to one ratio in every trait',
               'inheritance turned out to work in whole units',
               'it was work nobody read for thirty-five years'], key='B',
         faults={'A': ('agent_mismatch', 'Mendel found ratios'),
                 'C': ('dangler', 'inheritance turned out'),
                 'D': ('dangler', 'it was work nobody')},
         why="The opening phrase describes what was grown and counted, so the noun next to "
             "it must be the plants.",
         trap="A names the man who did the growing, who is the agent of the modifier rather "
              "than its subject."),
    dict(strand='BIO-S03', pos=3,
         carrier="Stained with a dye that collects only in those places where a proton "
                 "gradient across a membrane is steep, ___.",
         rule='participle_matched', rule_span='the inner membrane',
         opts=['the microscope showed a line of bright folds',
               'energy turned out to be stored across a surface rather than in a vessel',
               'the inner membrane glowed along every one of its folds',
               'it became possible to see where the gradient was'], key='C',
         faults={'A': ('agent_mismatch', 'the microscope showed'),
                 'B': ('dangler', 'energy turned out'),
                 'D': ('dangler', 'it became possible')},
         why="The participle stained describes the thing the dye was applied to, so the "
             "subject of the main clause must be that thing.",
         trap="A names the instrument that revealed the result, which was not itself "
              "stained with anything."),
    dict(strand='BIO-S04', pos=4,
         carrier="Browsed almost to the ground for seventy years by elk that had no "
                 "predator left in the valley to fear, ___.",
         rule='modifier_adjacent', rule_span='the streamside willows',
         opts=['the streamside willows came back within a decade of the wolves returning',
               'beavers had almost disappeared from the valley floor',
               'the park looked healthy to anyone who did not know what was missing',
               'it was a change nobody had predicted in those terms'], key='A',
         faults={'B': ('dangler', 'beavers had almost disappeared'),
                 'C': ('agent_mismatch', 'the park looked healthy'),
                 'D': ('dangler', 'it was a change')},
         why="The opening phrase describes what was browsed, so the noun standing next to "
             "it must be the willows.",
         trap="B names the animal that suffered from the browsing, which is a consequence "
              "rather than the thing browsed."),
    dict(strand='BIO-S05', pos=5,
         carrier="Released onto an island that held lichen enough for a few hundred "
                 "animals and no predator of any kind, ___.",
         rule='participle_matched', rule_span='the reindeer herd',
         opts=['the carrying capacity was exceeded within two decades',
               'the biologists who had put them there counted them every summer',
               'it was a textbook case of overshoot and collapse',
               'the reindeer herd grew to six thousand and then fell to forty-two'],
         key='D',
         faults={'A': ('dangler', 'the carrying capacity was exceeded'),
                 'B': ('agent_mismatch', 'the biologists who had put'),
                 'C': ('dangler', 'it was a textbook case')},
         why="The participle released describes what was put on the island, so the subject "
             "of the main clause must be the animals.",
         trap="A names the quantity that was exceeded, which cannot be the thing released "
              "onto an island."),
    dict(strand='BIO-S06', pos=6,
         carrier="Having mapped every death in the parish against the pump the household "
                 "drew its water from, and having found the cases clustered around one "
                 "pump in Broad Street, ___.",
         rule='agent_named_first', rule_span='Snow',
         opts=['the handle was removed and the outbreak subsided',
               'the map did more work than the theory behind it',
               'Snow persuaded the parish board where his argument had failed',
               'it was still not clear what the organism was'], key='C',
         faults={'A': ('dangler', 'the handle was removed'),
                 'B': ('agent_mismatch', 'the map did more work'),
                 'D': ('dangler', 'it was still not clear')},
         why="Both opening participles need a person as their actor, so the subject of the "
             "main clause must be the man who did the mapping.",
         trap="B names the map, which is what he made rather than the one who made it."),
    dict(strand='BIO-S07', pos=7,
         carrier="Agronomists reported that the fields they had treated with the new "
                 "industrial nitrate, which arrived in bulk for the first time in the "
                 "decade before the war, ___ the yields of the fields beside them.",
         rule='squint_resolved', rule_span='quickly exceeded',
         opts=['exceeded quickly', 'quickly exceeded', 'exceeded the quickly',
               'exceeded and quickly'], key='B',
         faults={'A': ('squinting', 'exceeded quickly'),
                 'C': ('misplaced', 'exceeded the quickly'),
                 'D': ('misplaced', 'exceeded and quickly')},
         why="Standing in front of the verb, quickly can only describe the exceeding and is "
             "no longer ambiguous between treated and exceeded.",
         trap="A leaves the adverb between two verbs, where it could qualify either the "
              "treating or the exceeding."),
    dict(strand='BIO-S08', pos=8,
         carrier="Drilled through nearly four kilometers of ice and lifted out in sections "
                 "that had to be kept below the temperature of the air at the surface, "
                 "___.",
         rule='participle_matched', rule_span='the core',
         opts=['the core carried bubbles of air eight hundred thousand years old',
               'the drillers worked in shifts through the Antarctic summer',
               'carbon dioxide could be measured directly for the first time',
               'it was the longest record anyone had recovered'], key='A',
         faults={'B': ('agent_mismatch', 'the drillers worked'),
                 'C': ('dangler', 'carbon dioxide could be measured'),
                 'D': ('dangler', 'it was the longest record')},
         why="Both participles describe the thing that was drilled and lifted, so the "
             "subject of the main clause must be that thing.",
         trap="B names the people who did the drilling, who are the agent of the modifier "
              "and not what it describes."),
    dict(strand='BIO-S09', pos=9,
         carrier="Scoured by water moving fast enough to roll boulders the size of small "
                 "houses, and then left dry for twelve thousand years with every mark of "
                 "that water still legible on them, ___.",
         rule='modifier_adjacent', rule_span='the Scablands',
         opts=['Bretz saw what the channels meant before anyone else would admit it',
               'catastrophe became respectable again as an explanation',
               'the Scablands kept a record no slow river could have written',
               'it took fifty years for the argument to be settled'], key='C',
         faults={'A': ('agent_mismatch', 'Bretz saw what'),
                 'B': ('dangler', 'catastrophe became respectable'),
                 'D': ('dangler', 'it took fifty years')},
         why="The opening phrase describes what was scoured and left dry, so the noun next "
             "to it must be the landscape itself.",
         trap="A names the geologist who read the evidence, who is not what the water "
              "scoured."),
    dict(strand='BIO-S10', pos=10,
         carrier="Oceanographers who followed the bomb-produced carbon that had entered the "
                 "surface water in the 1960s reported that the deep Pacific water they "
                 "sampled twenty years later ___ any of the tracer they were looking for, "
                 "which put a lower bound of several centuries on the circulation time.",
         rule='squint_resolved', rule_span='still contained barely',
         opts=['still contained barely', 'contained barely still',
               'contained still barely', 'barely still contained'], key='A',
         faults={'B': ('squinting', 'contained barely still'),
                 'C': ('misplaced', 'contained still barely'),
                 'D': ('misplaced', 'barely still contained')},
         why="With both adverbs in front of the verb, the reading is no longer ambiguous "
             "between what was sampled and what was contained.",
         trap="B puts barely where it could attach to sampled instead of contained, which "
              "reverses what the measurement found."),
])

PHY = dict(domain='PHY', note_ar=(
    "العلوم الفيزيائية هي المجال الأصلي لهذا الفصل، لأن وصف التجربة يبدأ دائماً بما جرى "
    "على الجهاز أو على المادّة: وُزن، وضُغط، وسُدّ. ثمّ تأتي الجملة الرئيسة ففاعلها هو "
    "الباحث أو النتيجة، لا الشيء الذي جرى عليه الفعل."), xs=[
    dict(strand='PHY-S01', pos=1,
         carrier="Repeated eleven times on the same afternoon with the same instrument and "
                 "the same operator, ___.",
         rule='modifier_adjacent', rule_span='the measurement',
         opts=['the measurement still scattered over a range of two per cent',
               'the operator recorded every figure in the logbook',
               'uncertainty turned out to be irreducible',
               'it was clear that the scatter was not a mistake'], key='A',
         faults={'B': ('agent_mismatch', 'the operator recorded'),
                 'C': ('dangler', 'uncertainty turned out'),
                 'D': ('dangler', 'it was clear')},
         why="The opening phrase describes what was repeated, so the noun standing next to "
             "it must be the measurement.",
         trap="B names the person who did the repeating, who is the agent of the modifier "
              "rather than the thing modified."),
    dict(strand='PHY-S02', pos=2,
         carrier="Having dropped two balls of unequal weight from the same height on the "
                 "same still morning, ___.",
         rule='agent_named_first', rule_span='Galileo',
         opts=['the times of fall were indistinguishable',
               'his students timed the descent with a water clock',
               'Galileo reported that they struck the ground together',
               'it became hard to defend the older view'], key='C',
         faults={'A': ('dangler', 'the times of fall'),
                 'B': ('agent_mismatch', 'his students timed'),
                 'D': ('dangler', 'it became hard')},
         why="Having dropped needs a person as its actor, so the subject of the main clause "
             "must be the one who dropped the balls.",
         trap="A names the quantity that was observed, which cannot be what did the "
              "dropping."),
    dict(strand='PHY-S03', pos=3,
         carrier="Stored in a wound spring, carried by a train of brass gears, and lost in "
                 "the end to friction in the bearings, ___.",
         rule='participle_matched', rule_span='the energy',
         opts=['the clockmaker had to replace the bearings every few years',
               'the gears turned more slowly as the spring unwound',
               'it was never destroyed, only moved and spread',
               'the energy passed through three forms before it dispersed'], key='D',
         faults={'A': ('agent_mismatch', 'the clockmaker had to replace'),
                 'B': ('dangler', 'the gears turned'),
                 'C': ('dangler', 'it was never destroyed')},
         why="All three participles describe the same thing being moved about, so the "
             "subject of the main clause must be that thing.",
         trap="C says the right thing about energy but puts it behind an it that the "
              "modifier cannot describe."),
    dict(strand='PHY-S04', pos=4,
         carrier="Compressed quickly enough that no heat can leave the cylinder in the time "
                 "the stroke takes to complete, ___.",
         rule='modifier_adjacent', rule_span='the gas',
         opts=['the piston grows warm under the hand that pushes it',
               'the gas rises in temperature without any heat being added',
               'work turns into internal energy directly',
               'it is the same effect that makes a spray can cold'], key='B',
         faults={'A': ('agent_mismatch', 'the piston grows warm'),
                 'C': ('dangler', 'work turns into'),
                 'D': ('dangler', 'it is the same effect')},
         why="The opening phrase describes what was compressed, so the noun next to it has "
             "to be the gas.",
         trap="A names the part that does the compressing, which is not what gets "
              "compressed."),
    dict(strand='PHY-S05', pos=5,
         carrier="Wired in parallel across the same battery so that each one sees the full "
                 "voltage rather than a share of it, ___.",
         rule='participle_matched', rule_span='the three lamps',
         opts=['the three lamps burn at full brightness',
               'the current divides according to resistance',
               'the electrician could add a fourth without dimming the rest',
               'it is why a house is not wired in series'], key='A',
         faults={'B': ('dangler', 'the current divides'),
                 'C': ('agent_mismatch', 'the electrician could add'),
                 'D': ('dangler', 'it is why a house')},
         why="The participle wired describes what was connected, so the subject of the main "
             "clause must be the lamps.",
         trap="B names what happens as a result, which is a consequence of the wiring and "
              "not the thing wired."),
    dict(strand='PHY-S06', pos=6,
         carrier="Students who are told that a prism separates white light into colors "
                 "because the glass slows the short waves more than the long ___ the "
                 "explanation when they are asked to predict what a second prism will do.",
         rule='squint_resolved', rule_span='frequently misremember',
         opts=['misremember frequently', 'misremember the frequently',
               'misremember and frequently', 'frequently misremember'], key='D',
         faults={'A': ('squinting', 'misremember frequently'),
                 'B': ('misplaced', 'misremember the frequently'),
                 'C': ('misplaced', 'misremember and frequently')},
         why="In front of the verb, frequently can only describe the misremembering, so the "
             "sentence is no longer ambiguous about what happens often.",
         trap="A leaves the adverb between told and misremember, where it could qualify "
              "either one."),
    dict(strand='PHY-S07', pos=7,
         carrier="Weighed in a sealed vessel before the reaction and weighed again in the "
                 "same vessel afterward, with nothing allowed to enter or to escape in "
                 "between, ___.",
         rule='participle_matched', rule_span='the contents',
         opts=['Lavoisier could show that burning adds rather than destroys',
               'the idea that fire consumes matter became untenable',
               'the contents came to exactly the mass they had started with',
               'it was a result nobody could argue with'], key='C',
         faults={'A': ('agent_mismatch', 'Lavoisier could show'),
                 'B': ('dangler', 'the idea that fire'),
                 'D': ('dangler', 'it was a result')},
         why="Both participles describe what was weighed, so the subject of the main clause "
             "must be the thing on the balance.",
         trap="A names the chemist who did the weighing, who is the agent of the modifier "
              "and not its subject."),
    dict(strand='PHY-S08', pos=8,
         carrier="Engineers who inspect a bridge for the cracks that have opened under "
                 "loads the deck was designed to carry ___ the fatigue limit of the steel "
                 "they happen to be looking at.",
         rule='squint_resolved', rule_span='routinely consult',
         opts=['consult routinely', 'routinely consult', 'consult the routinely',
               'consult and routinely'], key='B',
         faults={'A': ('squinting', 'consult routinely'),
                 'C': ('misplaced', 'consult the routinely'),
                 'D': ('misplaced', 'consult and routinely')},
         why="Standing before the verb, routinely can only describe the consulting, so the "
             "sentence is no longer ambiguous about which action is routine.",
         trap="A leaves the adverb where it could attach to inspect instead of consult, "
              "which says something different about the inspection."),
    dict(strand='PHY-S09', pos=9,
         carrier="Having measured the ratio of argon to potassium in a sample that had been "
                 "sealed against the atmosphere from the moment it was taken out of the "
                 "outcrop and carried to the laboratory in a stoppered tube, ___.",
         rule='agent_named_first', rule_span='the geologists',
         opts=['the age of the rock could be stated to within a per cent',
               'the laboratory report gave a figure of forty million years',
               'it was possible to date the eruption directly',
               'the geologists could put a number on the eruption at last'], key='D',
         faults={'A': ('dangler', 'the age of the rock'),
                 'B': ('agent_mismatch', 'the laboratory report gave'),
                 'C': ('dangler', 'it was possible')},
         why="Having measured needs people as its actors, so the subject of the main clause "
             "must be the ones who did the measuring.",
         trap="B names the document that reported the result, which did not do the "
              "measuring."),
    dict(strand='PHY-S10', pos=10,
         carrier="Timed on plate after plate until the length of the cycle was known to "
                 "within a few hours, and then set against the brightness the star showed "
                 "at the top and at the bottom of that same cycle, ___.",
         rule='participle_matched', rule_span='the period of a Cepheid',
         opts=['Leavitt found a relation that turned plates into a ruler',
               'the period of a Cepheid gave away its true luminosity',
               'distances beyond the galaxy became measurable',
               'it was the first rung of a ladder that reaches outward still'], key='B',
         faults={'A': ('agent_mismatch', 'Leavitt found a relation'),
                 'C': ('dangler', 'distances beyond the galaxy'),
                 'D': ('dangler', 'it was the first rung')},
         why="Both participles describe what was timed and compared, so the subject of the "
             "main clause must be that quantity.",
         trap="A names the astronomer who did the timing, who is the agent of the modifier "
              "rather than what it describes."),
])

HUM = dict(domain='HUM', note_ar=(
    "جمل الإنسانيات تفتتح بعبارات تصف العمل الفنّي: كُتب، ونُشر، وعُرض. ثمّ تأتي الجملة "
    "الرئيسة ففاعلها المؤلّف أو الناقد، وهما ليسا ما كُتب ولا ما عُرض."), xs=[
    dict(strand='HUM-S01', pos=1,
         carrier="Told entirely by a man who never admits to a motive of his own, ___.",
         rule='modifier_adjacent', rule_span='the story',
         opts=['the reader has to supply what the narrator leaves out',
               'the story asks to be read twice before it is believed',
               'unreliability is built into the form itself',
               'it is a technique James used more than once'], key='B',
         faults={'A': ('agent_mismatch', 'the reader has to supply'),
                 'C': ('dangler', 'unreliability is built'),
                 'D': ('dangler', 'it is a technique')},
         why="The opening phrase describes what is told, so the noun standing next to it "
             "must be the story.",
         trap="A names the person who has to do the work of reading, who is not the thing "
              "that was told."),
    dict(strand='HUM-S02', pos=2,
         carrier="Having given a character a reason that does not quite account for what "
                 "she does, ___.",
         rule='agent_named_first', rule_span='the novelist',
         opts=['the gap is left for the reader to close',
               'her own account of herself becomes the least reliable evidence',
               'it is the oldest device in the realist novel',
               'the novelist has told the reader where to look'], key='D',
         faults={'A': ('dangler', 'the gap is left'),
                 'B': ('agent_mismatch', 'her own account'),
                 'C': ('dangler', 'it is the oldest device')},
         why="Having given needs a person as its actor, so the subject of the main clause "
             "must be whoever gave the character the reason.",
         trap="A describes the effect of the device, and an effect cannot be the one who "
              "produced it."),
    dict(strand='HUM-S03', pos=3,
         carrier="Repeated across a sequence of poems until a reader begins to expect it "
                 "without noticing that it is there, ___.",
         rule='modifier_adjacent', rule_span='an image',
         opts=['an image stops being a decoration and becomes an argument',
               'the poet has built a structure without announcing one',
               'repetition does more than emphasis ever could',
               'it is the quietest thing a sequence can do'], key='A',
         faults={'B': ('agent_mismatch', 'the poet has built'),
                 'C': ('dangler', 'repetition does more'),
                 'D': ('dangler', 'it is the quietest thing')},
         why="The opening phrase describes what is repeated, so the noun next to it has to "
             "be the image.",
         trap="B names the writer who does the repeating, who is the agent of the modifier "
              "and not its subject."),
    dict(strand='HUM-S04', pos=4,
         carrier="Divided into three quatrains and a couplet and turned at the ninth line "
                 "rather than the ninth syllable, ___.",
         rule='participle_matched', rule_span='the English sonnet',
         opts=['Shakespeare had a form his Italian models did not provide',
               'the turn arrives a little later than it does in Petrarch',
               'the English sonnet gives a writer two places to change direction',
               'it is a shape that has lasted four hundred years'], key='C',
         faults={'A': ('agent_mismatch', 'Shakespeare had a form'),
                 'B': ('dangler', 'the turn arrives'),
                 'D': ('dangler', 'it is a shape')},
         why="Both participles describe the thing that was divided and turned, so the "
             "subject of the main clause must be that thing.",
         trap="A names the poet who used the form, who is not what the form was divided "
              "into parts."),
    dict(strand='HUM-S05', pos=5,
         carrier="Having lost the Globe to a fire started by the wadding from a stage "
                 "cannon in the middle of a performance, ___.",
         rule='agent_named_first', rule_span='the company',
         opts=['the playhouse was gone in under two hours',
               'the company rebuilt on the same foundations within a year',
               'the carpenters were paid out of the sharers own pockets',
               'it was the second theater they had lost'], key='B',
         faults={'A': ('dangler', 'the playhouse was gone'),
                 'C': ('agent_mismatch', 'the carpenters were paid'),
                 'D': ('dangler', 'it was the second theater')},
         why="Having lost needs people as its actors, so the subject of the main clause "
             "must be the ones who lost the building.",
         trap="A names the building that burned, which is what was lost rather than who "
              "lost it."),
    dict(strand='HUM-S06', pos=6,
         carrier="Opened with a body in a locked room and a detective who arrives from "
                 "outside the household, and closed with an explanation that accounts for "
                 "every detail laid down earlier, ___.",
         rule='modifier_adjacent', rule_span='the classical detective story',
         opts=['the classical detective story promises more than most novels dare',
               'the reader is invited to compete rather than to watch',
               'Christie and her contemporaries worked inside rules they had not written',
               'it is a contract rather than a convention'], key='A',
         faults={'B': ('agent_mismatch', 'the reader is invited'),
                 'C': ('agent_mismatch', 'Christie and her contemporaries'),
                 'D': ('dangler', 'it is a contract')},
         why="Both opening phrases describe how the thing is built, so the noun standing "
             "next to them must be the form itself.",
         trap="C names the writers who worked in the form, who are not what the form opens "
              "and closes with."),
    dict(strand='HUM-S07', pos=7,
         carrier="Ranked above every other kind of subject by the academy that set the "
                 "standards, and painted at a scale that no private buyer could easily "
                 "hang, ___.",
         rule='participle_matched', rule_span='history painting',
         opts=['the academy made its hierarchy visible on the wall',
               'landscape had to be defended as something else entirely',
               'it was a ranking nobody outside the academy had agreed to',
               'history painting kept its place until the market stopped wanting it'],
         key='D',
         faults={'A': ('agent_mismatch', 'the academy made its hierarchy'),
                 'B': ('dangler', 'landscape had to be defended'),
                 'C': ('dangler', 'it was a ranking')},
         why="Both participles describe the kind of picture that was ranked and painted, so "
             "the subject of the main clause must be that kind.",
         trap="A names the institution that did the ranking, which is the agent of the "
              "first participle rather than its subject."),
    dict(strand='HUM-S08', pos=8,
         carrier="Audiences who were told before the curtain rose that the piece they were "
                 "about to hear had caused a riot at its first performance a year earlier "
                 "___ the second performance in near silence.",
         rule='squint_resolved', rule_span='reportedly received',
         opts=['received reportedly', 'received the reportedly',
               'reportedly received', 'received and reportedly'], key='C',
         faults={'A': ('squinting', 'received reportedly'),
                 'B': ('misplaced', 'received the reportedly'),
                 'D': ('misplaced', 'received and reportedly')},
         why="In front of the verb, reportedly can only qualify the receiving, so the "
             "sentence is no longer ambiguous about which claim is secondhand.",
         trap="A leaves the adverb where it could attach to told instead of received, which "
              "moves the doubt onto the wrong clause."),
    dict(strand='HUM-S09', pos=9,
         carrier="Raised twenty feet above the shops that line it so that the traffic could "
                 "pass without stopping, and then abandoned to the weather for thirty years "
                 "after the traffic found another route, ___.",
         rule='participle_matched', rule_span='the viaduct',
         opts=['the viaduct now carries a public garden along its whole length',
               'the city has spent more on removing it than on building it',
               'planners in 1948 could not have foreseen either outcome',
               'it is the most photographed street in the district'], key='A',
         faults={'B': ('agent_mismatch', 'the city has spent more'),
                 'C': ('agent_mismatch', 'planners in 1948 could not'),
                 'D': ('dangler', 'it is the most photographed street')},
         why="Both participles describe the structure that was raised and abandoned, so the "
             "subject of the main clause must be that structure.",
         trap="B names the body that paid for the work, which did the raising rather than "
              "being raised."),
    dict(strand='HUM-S10', pos=10,
         carrier="Having insisted for twenty years that what a poet meant to do has no "
                 "bearing on what the poem turns out to mean, and having taught two "
                 "generations to read as though the author were unavailable, ___.",
         rule='agent_named_first', rule_span='the critics',
         opts=['the habit of asking about intention survived anyway',
               'their students went on asking what the poet had meant',
               'the critics were outlived by the very reflex they set out to end',
               'it was a position easier to state than to hold'], key='C',
         faults={'A': ('dangler', 'the habit of asking'),
                 'B': ('agent_mismatch', 'their students went on'),
                 'D': ('dangler', 'it was a position')},
         why="Both opening participles need people as their actors, so the subject of the "
             "main clause must be the ones who insisted and taught.",
         trap="A says something true and puts it behind a subject that cannot have insisted "
              "on anything."),
])

SOC = dict(domain='SOC', note_ar=(
    "جمل العلوم الاجتماعية تفتتح بعبارات تصف ما جرى على العيّنة أو على البيانات: اختيرت، "
    "وقُسمت، ووزنت. وفاعل الجملة الرئيسة هو الباحث أو النتيجة، فيقع التعليق بسهولة."), xs=[
    dict(strand='SOC-S01', pos=1,
         carrier="Having placed the question about income at the very end of a long "
                 "questionnaire, ___.",
         rule='agent_named_first', rule_span='the researchers',
         opts=['refusals on that one item ran at three times the usual rate',
               'it was an avoidable error in the design',
               'the researchers found that refusals on that item tripled',
               'the questionnaire took longer than anyone had allowed for'], key='C',
         faults={'A': ('dangler', 'refusals on that one item'),
                 'B': ('dangler', 'it was an avoidable error'),
                 'D': ('agent_mismatch', 'the questionnaire took longer')},
         why="Having placed needs people as its actors, so the subject of the main clause "
             "must be the ones who placed the question.",
         trap="A names the consequence, and a rate of refusal cannot have placed anything "
              "anywhere."),
    dict(strand='SOC-S02', pos=2,
         carrier="Assigned to the two arms by the drawing of lots rather than by anyone's "
                 "judgment, ___.",
         rule='modifier_adjacent', rule_span='the subjects',
         opts=['the subjects differed in no systematic way at the start',
               'randomization does the work that matching cannot',
               'the trial could support a claim about cause',
               'it is the one thing an observational study cannot copy'], key='A',
         faults={'B': ('dangler', 'randomization does the work'),
                 'C': ('agent_mismatch', 'the trial could support'),
                 'D': ('dangler', 'it is the one thing')},
         why="The opening phrase describes who was assigned, so the noun next to it must be "
             "the subjects.",
         trap="B names the procedure that did the assigning, which is the agent of the "
              "modifier rather than its subject."),
    dict(strand='SOC-S03', pos=3,
         carrier="Measured on the same households before the policy began and again three "
                 "years after it had taken effect, ___.",
         rule='modifier_adjacent', rule_span='the two figures',
         opts=['the researchers could rule out a change in the composition of the sample',
               'the two figures could be compared without any further adjustment',
               'confounding by household type was no longer a worry',
               'it was a design that cost more than a cross-section would have'],
         key='B',
         faults={'A': ('agent_mismatch', 'the researchers could rule out'),
                 'C': ('dangler', 'confounding by household type'),
                 'D': ('dangler', 'it was a design')},
         why="The opening phrase describes what was measured twice, so the noun standing "
             "next to it must be the figures.",
         trap="A names the people who did the measuring, who are the agent of the modifier "
              "and not what it describes."),
    dict(strand='SOC-S04', pos=4,
         carrier="Stretched out by a handful of very large incomes at the top and bounded "
                 "hard below by zero at the bottom, ___.",
         rule='participle_matched', rule_span='the distribution of earnings',
         opts=['the mean sits well above the median',
               'economists prefer to report both figures together',
               'inequality is easier to see in a graph than in a table',
               'the distribution of earnings is not symmetrical in any country'],
         key='D',
         faults={'A': ('dangler', 'the mean sits well'),
                 'B': ('agent_mismatch', 'economists prefer to report'),
                 'C': ('dangler', 'inequality is easier')},
         why="Both participles describe the thing that is stretched and bounded, so the "
             "subject of the main clause must be that thing.",
         trap="A names a consequence of the shape, and a mean is not what gets stretched by "
              "large incomes."),
    dict(strand='SOC-S05', pos=5,
         carrier="Having offered a dollar in advance to one half of the sample and five on "
                 "completion to the other, ___.",
         rule='agent_named_first', rule_span='the survey team',
         opts=['response rates were higher in the half paid in advance',
               'it turned out that the promise mattered less than the gesture',
               'the survey team found the advance payment worked better',
               'the accounting office queried the expenditure twice'], key='C',
         faults={'A': ('dangler', 'response rates were higher'),
                 'B': ('dangler', 'it turned out that'),
                 'D': ('agent_mismatch', 'the accounting office queried')},
         why="Having offered needs people as its actors, so the subject of the main clause "
             "must be the ones who made the offer.",
         trap="A names what was observed, and a response rate cannot offer anybody a "
              "dollar."),
    dict(strand='SOC-S06', pos=6,
         carrier="Seated among seven confederates who had been told to give the same wrong "
                 "answer calmly and in turn before he was asked for his own, ___.",
         rule='participle_matched', rule_span='the subject',
         opts=['conformity was measured without anyone being argued with',
               'the subject went along with the group about a third of the time',
               'Asch had designed the situation to remove every pressure but one',
               'it was the calm that did the work rather than the argument'], key='B',
         faults={'A': ('dangler', 'conformity was measured'),
                 'C': ('agent_mismatch', 'Asch had designed the situation'),
                 'D': ('dangler', 'it was the calm')},
         why="The participle seated describes the person who was placed in the room, so the "
             "subject of the main clause must be that person.",
         trap="C names the man who arranged the seating, who is the agent of the modifier "
              "and not the one seated."),
    dict(strand='SOC-S07', pos=7,
         carrier="Laid out along a streetcar line that ran every six minutes and then left "
                 "to the automobile when the line was pulled up in the 1950s, ___.",
         rule='modifier_adjacent', rule_span='the neighborhood',
         opts=['the neighborhood kept a shape that no longer matched how people moved',
               'planners spent the next forty years undoing the consequences',
               'the automobile reshaped a street it had not been built for',
               'it is a pattern repeated in a hundred American cities'], key='A',
         faults={'B': ('agent_mismatch', 'planners spent the next forty years'),
                 'C': ('agent_mismatch', 'the automobile reshaped a street'),
                 'D': ('dangler', 'it is a pattern')},
         why="Both opening phrases describe what was laid out and left, so the noun next to "
             "them must be the district itself.",
         trap="C names the thing the district was left to, which is not what was laid out "
              "along the line."),
    dict(strand='SOC-S08', pos=8,
         carrier="Statisticians who publish a figure for unemployment that counts only "
                 "people actively looking for work, and not those who have stopped looking "
                 "altogether, ___ the alternative measures alongside it every month.",
         rule='squint_resolved', rule_span='nevertheless publish',
         opts=['publish nevertheless', 'publish the nevertheless',
               'publish and nevertheless', 'nevertheless publish'], key='D',
         faults={'A': ('squinting', 'publish nevertheless'),
                 'B': ('misplaced', 'publish the nevertheless'),
                 'C': ('misplaced', 'publish and nevertheless')},
         why="Before the verb, nevertheless can only qualify the publishing, so the "
             "sentence is no longer ambiguous about which action it concedes.",
         trap="A leaves the adverb where it could attach to the earlier publish instead of "
              "the later one, reversing the concession."),
    dict(strand='SOC-S09', pos=9,
         carrier="Reconstructed from income tax returns in the countries that kept them and "
                 "from household surveys everywhere else, and compared across a century "
                 "during which the definition of income changed more than once, ___.",
         rule='participle_matched', rule_span='the series',
         opts=['Kuznets produced the first figures that could be set side by side',
               'the series disagrees with itself most at the very top',
               'comparability is the weakest part of the whole exercise',
               'it is a measure nobody defends and everybody uses'], key='B',
         faults={'A': ('agent_mismatch', 'Kuznets produced the first figures'),
                 'C': ('dangler', 'comparability is the weakest part'),
                 'D': ('dangler', 'it is a measure')},
         why="Both participles describe what was reconstructed and compared, so the subject "
             "of the main clause must be that thing.",
         trap="A names the economist who built the figures, who is the agent of the "
              "modifier rather than what it describes."),
    dict(strand='SOC-S10', pos=10,
         carrier="People who are asked how likely a rare event is and who answer by "
                 "recalling how easily an example of it comes to mind, rather than by "
                 "consulting any count of how often it has actually happened, ___ the "
                 "events that the newspapers reported last week.",
         rule='squint_resolved', rule_span='systematically overweight',
         opts=['overweight systematically', 'overweight the systematically',
               'overweight and systematically', 'systematically overweight'], key='D',
         faults={'A': ('squinting', 'overweight systematically'),
                 'B': ('misplaced', 'overweight the systematically'),
                 'C': ('misplaced', 'overweight and systematically')},
         why="Standing before the verb, systematically can only qualify the overweighting, "
             "so the sentence is no longer ambiguous about what is systematic.",
         trap="A leaves the adverb where it could attach to answer instead of overweight, "
              "which is a claim about method rather than about error."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
