# -*- coding: utf-8 -*-
"""Chapter 8 - finite verbs and fragments. Home domain HIS.

Key plans: HIS ACDBADCBDB, BIO BDACBADCAC, PHY CABDCBADBD, HUM DBCADCBACA,
SOC ACDBADCBDB.

Note on the predicates. The fragment and nonfinite_only detectors fire on any
span that supplies no finite verb -- which is what the KEY is in a
participle_attached item, since a participial phrase correctly attached to a
complete main clause has no finite verb of its own. So those two moves are used
only where the key is a finite clause, and the participle_attached items are
carried by loose_subordinate and missing_subject, which have no predicate and
are judged by their quoted spans.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 8

AR = dict(
    qaida="الفعل التام والجملة الناقصة بابان متلازمان: الجملة التامّة تحتاج إلى مسند ومسند "
          "إليه، وإلى فعل تامّ يحمل الزمن. واسم الفاعل "
          "واسم المفعول ليسا فعلاً تامّاً، فالعبارة التي ليس فيها غيرهما جملة ناقصة وإن طالت. "
          "والجملة الموصولة أو الشرطية لا تقوم وحدها، بل تتعلّق بجملة رئيسة.",
    kayf="يعرض الاختبار عبارة طويلة فيها اسم وصفة ومتعلّقات كثيرة ولا فعل تامّ فيها، فتبدو "
         "جملة لطولها. ويعرض كذلك جملتين تامّتين بينهما فاصلة، أو جملة شرطية بلا جواب، فيطلب "
         "منك أن تعيّن أيّ الصور يصحّ أن يقوم بنفسه.",
    fakh="الفخّ أن الطول يوهم التمام. فعبارة من عشرين كلمة فيها اسم فاعل واحد تبدو جملة، وهي "
         "ليست جملة. والعلاج أن تسأل: أين الفعل الذي يحمل الزمن؟ فإن لم تجده فليست جملة.",
    sila="هذا الباب هو أساس الفصول الأربعة التي تليه في اختبار سات، لأن حدود الجملة لا تُعرف "
         "إلّا بعد معرفة ما يصحّ أن يكون جملة. فمن أتقنه هنا سهل عليه باب الفاصلة المنقوطة "
         "والنقطة بعده.",
)

HIS = dict(domain='HIS', note_ar=(
    "التاريخ والنظام المدني هو المجال الأصلي لهذا الفصل: جمله مليئة بالتواريخ والألقاب "
    "والعبارات المعترضة التي تطيل الكلام بلا فعل تامّ، فتبدو الجملة الناقصة فيها تامّة "
    "لطولها."), xs=[
    dict(strand='HIS-S01', pos=1,
         carrier="The Declaration states its premise in the second sentence and its "
                 "conclusion in the last; ___.",
         rule='finite_main_verb', rule_span='the grievances filled everything between',
         opts=['the grievances filled everything between them',
               'filling everything between them',
               'having filled everything between them',
               'which filled everything between them'], key='A',
         faults={'B': ('fragment', 'filling everything between them'),
                 'C': ('nonfinite_only', 'having filled everything between them'),
                 'D': ('loose_subordinate', 'which filled everything between them')},
         why="What follows a semicolon must be able to stand alone, which takes a subject "
             "and a finite verb.",
         trap="B has a subject and a participle, which reads like a clause and carries no "
              "tense."),
    dict(strand='HIS-S02', pos=2,
         carrier="Article One gives the whole of the legislative power to a Congress of two "
                 "chambers; ___.",
         rule='independent_clause',
         rule_span='Article Two gives the executive power to one person',
         opts=['giving the executive power to one person',
               'having given the executive power to one person',
               'Article Two gives the executive power to one person',
               'which gives the executive power to one person'], key='C',
         faults={'A': ('fragment', 'giving the executive power to one person'),
                 'B': ('nonfinite_only', 'having given the executive power'),
                 'D': ('loose_subordinate', 'which gives the executive power')},
         why="A semicolon joins two things that can each stand alone, so what follows it has "
             "to be an independent clause.",
         trap="D is a relative clause, which has a finite verb and still cannot stand by "
              "itself."),
    dict(strand='HIS-S03', pos=3,
         carrier="The Naturalization Act of 1790 named a residence requirement, an oath of "
                 "allegiance, and a racial bar that stood for eighty years; ___.",
         rule='finite_main_verb',
         rule_span='Congress removed only the last of the three',
         opts=['removing only the last of the three',
               'having removed only the last of the three',
               'which Congress removed last of the three',
               'Congress removed only the last of the three'], key='D',
         faults={'A': ('fragment', 'removing only the last of the three'),
                 'B': ('nonfinite_only', 'having removed only the last'),
                 'C': ('loose_subordinate', 'which Congress removed last')},
         why="What stands after a semicolon needs a finite verb of its own, and only one of "
             "these supplies it with a subject.",
         trap="A looks complete because it is as long as the clause it replaces, and length "
              "is not what makes a sentence."),
    dict(strand='HIS-S04', pos=4,
         carrier="___, the abolitionists could argue from a document that their opponents "
                 "claimed to honor as much as they did.",
         rule='subordinate_attached',
         rule_span='Because the Declaration spoke of all men',
         opts=['The Declaration had spoken of all men without qualification',
               'Because the Declaration spoke of all men',
               'The Declaration speaking of all men',
               'Having spoken of all men without qualification'], key='B',
         faults={'A': ('loose_subordinate', 'The Declaration had spoken'),
                 'C': ('fragment', 'The Declaration speaking of all men'),
                 'D': ('nonfinite_only', 'Having spoken of all men')},
         why="A subordinate clause attaches to the main clause that follows it, which is "
             "what the comma is doing here.",
         trap="A is a complete sentence, which leaves two sentences joined by nothing but a "
              "comma."),
    dict(strand='HIS-S05', pos=5,
         carrier="The federal occupation of the former Confederate states ended in 1877 "
                 "with a bargain struck over a disputed presidential election, ___.",
         rule='participle_attached',
         rule_span='leaving the governments that replaced it to decide the rest',
         opts=['leaving the governments that replaced it to decide the rest',
               'the governments that replaced it decided the rest',
               'the rest left to the governments that replaced it',
               'it left the governments that replaced it to decide'], key='A',
         faults={'B': ('loose_subordinate', 'the governments that replaced it decided'),
                 'C': ('missing_subject', 'the rest left to the governments'),
                 'D': ('loose_subordinate', 'it left the governments')},
         why="A participial phrase attaches to the clause in front of it and does not need "
             "a subject of its own.",
         trap="B is a complete sentence and so needs more than a comma to join it to the "
              "one before."),
    dict(strand='HIS-S06', pos=6,
         carrier="___, the legislature wrote thirty-eight bills in eighteen months and the "
                 "inspectors who enforced them were given power to close a building on the "
                 "spot without a hearing.",
         rule='subordinate_attached',
         rule_span='Once the Triangle fire had killed a hundred and forty-six workers',
         opts=['A hundred and forty-six workers had died in the Triangle fire',
               'The Triangle fire killing a hundred and forty-six workers',
               'Having killed a hundred and forty-six workers',
               'Once the Triangle fire had killed a hundred and forty-six workers'],
         key='D',
         faults={'A': ('loose_subordinate', 'A hundred and forty-six workers had died'),
                 'B': ('fragment', 'The Triangle fire killing'),
                 'C': ('nonfinite_only', 'Having killed a hundred')},
         why="The opening element has to be a subordinate clause, which attaches to the "
             "main clause the comma introduces.",
         trap="A is grammatical on its own and that is the problem: two complete sentences "
              "cannot be joined by a comma."),
    dict(strand='HIS-S07', pos=7,
         carrier="The Court heard the school cases twice, ___, and the second argument "
                 "turned on the history of the amendment rather than on the schools "
                 "themselves at all.",
         rule='participle_attached',
         rule_span='having asked the parties to return a year later',
         opts=['it asked the parties to return a year later',
               'the parties were asked to return a year later',
               'having asked the parties to return a year later',
               'the parties asked to return a year later'], key='C',
         faults={'A': ('loose_subordinate', 'it asked the parties'),
                 'B': ('loose_subordinate', 'the parties were asked'),
                 'D': ('missing_subject', 'the parties asked to return')},
         why="The element between the commas is a participial phrase attached to the clause "
             "around it, not a clause of its own.",
         trap="A is a complete sentence dropped between two commas, which gives the "
              "sentence three clauses and two commas to join them."),
    dict(strand='HIS-S08', pos=8,
         carrier="The mandates created after the First World War were to be held in trust "
                 "for their inhabitants and surrendered as soon as those inhabitants were "
                 "ready to govern themselves; ___.",
         rule='independent_clause',
         rule_span='none of them was surrendered until after a second war',
         opts=['none of them being surrendered until after a second war',
               'none of them was surrendered until after a second war',
               'having surrendered none of them until after a second war',
               'which none of them was until after a second war'], key='B',
         faults={'A': ('fragment', 'none of them being surrendered'),
                 'C': ('nonfinite_only', 'having surrendered none of them'),
                 'D': ('loose_subordinate', 'which none of them was')},
         why="A semicolon demands an independent clause on each side, so the second half "
             "needs a subject and a finite verb.",
         trap="A differs from the key by one word and that word is the whole difference "
              "between a clause and a phrase."),
    dict(strand='HIS-S09', pos=9,
         carrier="___, the courts declined to decide who had the power to suspend the writ, "
                 "and the question has not been squarely answered in the century and a half "
                 "since the war itself ended.",
         rule='subordinate_attached',
         rule_span='Although Congress had ratified the suspension two years after the fact',
         opts=['Congress ratified the suspension two years after the fact',
               'Congress ratifying the suspension two years after the fact',
               'Having ratified the suspension two years after the fact',
               'Although Congress had ratified the suspension two years after the fact'],
         key='D',
         faults={'A': ('loose_subordinate', 'Congress ratified the suspension'),
                 'B': ('fragment', 'Congress ratifying the suspension'),
                 'C': ('nonfinite_only', 'Having ratified the suspension')},
         why="A subordinate clause is what attaches to the main clause here, and the "
             "concession the sentence needs can only be carried by one.",
         trap="A is a complete sentence and so splices itself to the clause that follows "
              "with nothing but a comma."),
    dict(strand='HIS-S10', pos=10,
         carrier="The penny papers sold for a cent when the established papers sold for "
                 "six, ___, and the model of recovering the cost from advertisers rather "
                 "than from readers has outlasted every one of the papers that invented it.",
         rule='participle_attached',
         rule_span='making up the difference by selling space to advertisers',
         opts=['they made up the difference by selling space to advertisers',
               'making up the difference by selling space to advertisers',
               'the difference made up by selling space to advertisers',
               'it was made up by selling space to advertisers'], key='B',
         faults={'A': ('loose_subordinate', 'they made up the difference'),
                 'C': ('missing_subject', 'the difference made up'),
                 'D': ('loose_subordinate', 'it was made up')},
         why="A participial phrase attaches to the clause beside it and borrows that "
             "clause's subject.",
         trap="A is a complete sentence inserted between commas, which leaves three clauses "
              "held together by punctuation that cannot do it."),
])

BIO = dict(domain='BIO', note_ar=(
    "جمل الأحياء وعلوم الأرض تطيل وصف الكائن أو الطبقة بعبارات متتابعة لا فعل فيها، فتبدو "
    "جملة. والعلاج أن تبحث عن الفعل الذي يحمل الزمن لا عن طول الكلام."), xs=[
    dict(strand='BIO-S01', pos=1,
         carrier="Selection acts on the variation that is already present in a "
                 "population; ___.",
         rule='finite_main_verb', rule_span='it created none of that variation itself',
         opts=['creating none of that variation itself',
               'it created none of that variation itself',
               'having created none of that variation itself',
               'which created none of that variation itself'], key='B',
         faults={'A': ('fragment', 'creating none of that variation'),
                 'C': ('nonfinite_only', 'having created none of that variation'),
                 'D': ('loose_subordinate', 'which created none of that variation')},
         why="What follows a semicolon has to stand alone, which takes a subject and a "
             "finite verb.",
         trap="A has a participle where the tense should be, which reads like a clause and "
              "is not one."),
    dict(strand='BIO-S02', pos=2,
         carrier="Mendel counted some twenty-eight thousand pea plants across eight "
                 "seasons in the monastery garden; ___.",
         rule='independent_clause',
         rule_span='nobody read the paper for thirty-five years',
         opts=['reading the paper only thirty-five years later',
               'having been read only thirty-five years later',
               'which nobody read for thirty-five years',
               'nobody read the paper for thirty-five years'], key='D',
         faults={'A': ('fragment', 'reading the paper only thirty-five'),
                 'B': ('nonfinite_only', 'having been read only thirty-five'),
                 'C': ('loose_subordinate', 'which nobody read for thirty-five')},
         why="A semicolon wants an independent clause on each side of it, so the second half "
             "needs a subject and a tensed verb.",
         trap="C has a finite verb and still cannot stand by itself, because which binds it "
              "to something earlier."),
    dict(strand='BIO-S03', pos=3,
         carrier="The inner membrane of a mitochondrion is folded into a surface many times "
                 "the area of the smooth outer one; ___.",
         rule='finite_main_verb',
         rule_span='the folding is what makes the gradient possible',
         opts=['the folding is what makes the gradient possible',
               'the folding making the gradient possible',
               'having made the gradient possible by folding',
               'which makes the gradient possible'], key='A',
         faults={'B': ('fragment', 'the folding making the gradient'),
                 'C': ('nonfinite_only', 'having made the gradient possible'),
                 'D': ('loose_subordinate', 'which makes the gradient possible')},
         why="A clause after a semicolon needs a finite verb, and only one of these has "
             "one with a subject in front of it.",
         trap="B supplies a subject and then a participle, which is the commonest shape a "
              "fragment takes."),
    dict(strand='BIO-S04', pos=4,
         carrier="The wolves came back to the valley in 1995, ___, and the willows along "
                 "the streams followed within ten years.",
         rule='participle_attached',
         rule_span='changing where the elk were willing to feed',
         opts=['they changed where the elk were willing to feed',
               'the places where the elk fed were changed',
               'changing where the elk were willing to feed',
               'it changed where the elk were willing to feed'], key='C',
         faults={'A': ('loose_subordinate', 'they changed where the elk'),
                 'B': ('missing_subject', 'the places where the elk fed'),
                 'D': ('loose_subordinate', 'it changed where the elk')},
         why="A participial phrase attaches to the clause beside it and takes its subject "
             "from there.",
         trap="A is a complete sentence, which cannot be joined to the clause before it by "
              "a comma alone."),
    dict(strand='BIO-S05', pos=5,
         carrier="A population that has already outrun its food does not settle gently at "
                 "the level the habitat would support; ___.",
         rule='independent_clause', rule_span='it overshoots and then crashes below it',
         opts=['overshooting and then crashing below it',
               'it overshoots and then crashes below it',
               'having overshot and then crashed below it',
               'which overshoots and then crashes below it'], key='B',
         faults={'A': ('fragment', 'overshooting and then crashing'),
                 'C': ('nonfinite_only', 'having overshot and then crashed'),
                 'D': ('loose_subordinate', 'which overshoots and then crashes')},
         why="The second half of a sentence joined by a semicolon has to be an independent "
             "clause in its own right.",
         trap="A is two participles joined by and, which is twice as long as the key and "
              "half a sentence."),
    dict(strand='BIO-S06', pos=6,
         carrier="___, the parish board agreed to take the handle off the pump in Broad "
                 "Street, and the number of new cases fell within a few days of their "
                 "doing it.",
         rule='subordinate_attached',
         rule_span='Although nobody yet knew what the organism was',
         opts=['Although nobody yet knew what the organism was',
               'The organism itself was still entirely unknown',
               'Nobody yet knowing what the organism was',
               'Having no idea what the organism was'], key='A',
         faults={'B': ('loose_subordinate', 'The organism itself was still'),
                 'C': ('fragment', 'Nobody yet knowing what'),
                 'D': ('nonfinite_only', 'Having no idea what')},
         why="A subordinate clause is what can attach to the main clause the comma "
             "introduces, and the concession needs one.",
         trap="B is a complete sentence, so a comma leaves two sentences spliced together."),
    dict(strand='BIO-S07', pos=7,
         carrier="Industrial fixation made nitrogen cheap enough to spread by the ton on "
                 "any field at all, and it did so in the decade before the First World "
                 "War; ___.",
         rule='finite_main_verb',
         rule_span='the guano trade collapsed inside ten years',
         opts=['collapsing the guano trade inside ten years',
               'having collapsed the guano trade inside ten years',
               'which collapsed the guano trade inside ten years',
               'the guano trade collapsed inside ten years'], key='D',
         faults={'A': ('fragment', 'collapsing the guano trade'),
                 'B': ('nonfinite_only', 'having collapsed the guano trade'),
                 'C': ('loose_subordinate', 'which collapsed the guano trade')},
         why="What follows the semicolon must carry a finite verb, and a participle cannot "
             "carry one however much it says.",
         trap="A names the same event in almost the same words and leaves the sentence "
              "without a second verb."),
    dict(strand='BIO-S08', pos=8,
         carrier="The deepest section of the Vostok core was lifted out in pieces that had "
                 "to be kept colder than the Antarctic air, ___, and the bubbles inside it "
                 "were eight hundred thousand years old.",
         rule='participle_attached',
         rule_span='each piece numbered as it came off the drill',
         opts=['each piece was numbered as it came off the drill',
               'they numbered each piece as it came off the drill',
               'each piece numbered as it came off the drill',
               'it was numbered as each piece came off the drill'], key='C',
         faults={'A': ('loose_subordinate', 'each piece was numbered'),
                 'B': ('loose_subordinate', 'they numbered each piece'),
                 'D': ('missing_subject', 'it was numbered as each')},
         why="The phrase between the commas is a participial phrase attached to the clause "
             "around it rather than a clause of its own.",
         trap="A differs from the key by one word, and that word turns a phrase into a "
              "sentence the comma cannot hold."),
    dict(strand='BIO-S09', pos=9,
         carrier="___, the discipline came round to the idea that a single flood had cut "
                 "the channels, and the man who had argued it for fifty years received the "
                 "highest medal the field awards.",
         rule='subordinate_attached',
         rule_span='After the ice dam that would have held the water was mapped',
         opts=['After the ice dam that would have held the water was mapped',
               'Somebody finally mapped the ice dam that held the water',
               'The ice dam being mapped at last by somebody',
               'Having mapped the ice dam that would have held the water'], key='A',
         faults={'B': ('loose_subordinate', 'Somebody finally mapped the ice dam'),
                 'C': ('fragment', 'The ice dam being mapped at last'),
                 'D': ('nonfinite_only', 'Having mapped the ice dam')},
         why="The opening element has to be a subordinate clause, which attaches to the "
             "main clause after the comma.",
         trap="B is a complete sentence, which makes the comma do work only a semicolon or "
              "a conjunction can do."),
    dict(strand='BIO-S10', pos=10,
         carrier="A tracer released into the surface water of the North Atlantic in the "
                 "early 1960s had still not reached the deepest water of the Pacific "
                 "Ocean when it was looked for again twenty years later; ___.",
         rule='independent_clause',
         rule_span='the circulation therefore takes centuries rather than decades',
         opts=['taking centuries rather than decades to circulate',
               'having taken centuries rather than decades',
               'the circulation therefore takes centuries rather than decades',
               'which therefore takes centuries rather than decades'], key='C',
         faults={'A': ('fragment', 'taking centuries rather than decades'),
                 'B': ('nonfinite_only', 'having taken centuries rather'),
                 'D': ('loose_subordinate', 'which therefore takes centuries')},
         why="A semicolon joins two independent clauses, so the second half needs its own "
             "subject and its own tensed verb.",
         trap="D has a tensed verb and no subject of its own, which is what which always "
              "does."),
])

PHY = dict(domain='PHY', note_ar=(
    "جمل العلوم الفيزيائية تصف الجهاز بعبارات طويلة فيها أسماء الأدوات والوحدات ولا فعل "
    "تامّ، فتُقرأ كأنها جملة. والفعل التامّ في هذه الجمل كثيراً ما يكون فعلاً مساعداً "
    "واحداً، فإن سقط سقطت الجملة."), xs=[
    dict(strand='PHY-S01', pos=1,
         carrier="Eleven readings of one quantity scattered over two per cent of the mean; "
                 "___.",
         rule='independent_clause', rule_span='the scatter was not a mistake',
         opts=['scattering without being a mistake',
               'having scattered without any mistake',
               'the scatter was not a mistake',
               'which was not a mistake at all'], key='C',
         faults={'A': ('fragment', 'scattering without being a mistake'),
                 'B': ('nonfinite_only', 'having scattered without any mistake'),
                 'D': ('loose_subordinate', 'which was not a mistake')},
         why="A semicolon takes an independent clause on each side, so the second half needs "
             "a subject and a tensed verb.",
         trap="D has a tensed verb and no subject, which is what a relative pronoun always "
              "leaves behind."),
    dict(strand='PHY-S02', pos=2,
         carrier="A heavy ball and a light one reach the ground together in a vacuum; ___.",
         rule='finite_main_verb', rule_span='the air is what separates them',
         opts=['the air is what separates them', 'the air separating them',
               'having been separated by the air', 'which the air separates'], key='A',
         faults={'B': ('fragment', 'the air separating them'),
                 'C': ('nonfinite_only', 'having been separated by the air'),
                 'D': ('loose_subordinate', 'which the air separates')},
         why="The second half needs a finite verb, and only one of these supplies a tensed "
             "verb with a subject in front of it.",
         trap="B gives a subject and then a participle, which is the commonest shape a "
              "fragment takes in prose like this."),
    dict(strand='PHY-S03', pos=3,
         carrier="Energy in a wound clock passes from the spring to the gears and from the "
                 "gears to the bearings; ___.",
         rule='independent_clause', rule_span='none of it was destroyed on the way',
         opts=['none of it being destroyed on the way',
               'none of it was destroyed on the way',
               'having been destroyed nowhere on the way',
               'which was destroyed nowhere on the way'], key='B',
         faults={'A': ('fragment', 'none of it being destroyed'),
                 'C': ('nonfinite_only', 'having been destroyed nowhere'),
                 'D': ('loose_subordinate', 'which was destroyed nowhere')},
         why="What stands on the far side of a semicolon has to be an independent clause.",
         trap="A differs from the key by one word, and that one word is the difference "
              "between a phrase and a sentence."),
    dict(strand='PHY-S04', pos=4,
         carrier="A gas compressed faster than heat can leave the cylinder rises in "
                 "temperature even though nothing has been added to it; ___.",
         rule='finite_main_verb', rule_span='the work done on it became internal energy',
         opts=['the work done on it becoming internal energy',
               'having become internal energy by then',
               'which became internal energy instead',
               'the work done on it became internal energy'], key='D',
         faults={'A': ('fragment', 'the work done on it becoming'),
                 'B': ('nonfinite_only', 'having become internal energy'),
                 'C': ('loose_subordinate', 'which became internal energy')},
         why="A clause needs a finite verb, and a participle at the end of a long subject "
             "never supplies one.",
         trap="A is longer than the key and still has no tense anywhere in it."),
    dict(strand='PHY-S05', pos=5,
         carrier="Three lamps wired in parallel across one battery each burn at full "
                 "brightness, ___, and the failure of one of them leaves the other two "
                 "alight.",
         rule='participle_attached',
         rule_span='drawing current according to the resistance of each',
         opts=['they draw current according to the resistance of each',
               'the current drawn according to the resistance of each',
               'drawing current according to the resistance of each',
               'it draws current according to the resistance of each'], key='C',
         faults={'A': ('loose_subordinate', 'they draw current according'),
                 'B': ('missing_subject', 'the current drawn according'),
                 'D': ('loose_subordinate', 'it draws current according')},
         why="The participial phrase here leans on the clause in front of it, which is "
             "what supplies the subject it does not state.",
         trap="A is a complete sentence set between commas, which gives the sentence more "
              "clauses than its punctuation can hold."),
    dict(strand='PHY-S06', pos=6,
         carrier="___, the chemists who had believed that burning destroys matter gave up "
                 "the idea inside a decade, and the balance became the instrument that "
                 "settled arguments.",
         rule='subordinate_attached',
         rule_span='Once the sealed vessel had been weighed twice',
         opts=['Somebody weighed the sealed vessel before and after',
               'Once the sealed vessel had been weighed twice',
               'The sealed vessel being weighed twice over',
               'Having weighed the sealed vessel twice over'], key='B',
         faults={'A': ('loose_subordinate', 'Somebody weighed the sealed vessel'),
                 'C': ('fragment', 'The sealed vessel being weighed'),
                 'D': ('nonfinite_only', 'Having weighed the sealed vessel')},
         why="The opening element has to be a subordinate clause, which is what attaches to "
             "the main clause after the comma.",
         trap="A is a complete sentence, so the comma is left joining two sentences on its "
              "own."),
    dict(strand='PHY-S07', pos=7,
         carrier="A prism bends the short waves more than it bends the long ones and so "
                 "spreads white light into a band whose order never changes from one prism "
                 "to the next; ___.",
         rule='independent_clause',
         rule_span='a second prism was able to put the band back together',
         opts=['a second prism was able to put the band back together',
               'a second prism putting the band back together',
               'having put the band back together with a second prism',
               'which a second prism put back together'], key='A',
         faults={'B': ('fragment', 'a second prism putting the band'),
                 'C': ('nonfinite_only', 'having put the band back together'),
                 'D': ('loose_subordinate', 'which a second prism put')},
         why="A semicolon joins two independent clauses, so what follows it must be able to "
             "stand as a sentence.",
         trap="B has a subject and a participle, which is a phrase however much it reads "
              "like a clause."),
    dict(strand='PHY-S08', pos=8,
         carrier="The rare earths were separated from one another only after decades of "
                 "repeated crystallization, and nobody at the time could say why the "
                 "elements were so nearly alike; ___.",
         rule='finite_main_verb',
         rule_span='the answer was a shell of electrons that fills inward',
         opts=['the answer being a shell of electrons that fills inward',
               'having been a shell of electrons filling inward',
               'which was a shell of electrons filling inward',
               'the answer was a shell of electrons that fills inward'], key='D',
         faults={'A': ('fragment', 'the answer being a shell'),
                 'B': ('nonfinite_only', 'having been a shell of electrons'),
                 'C': ('loose_subordinate', 'which was a shell of electrons')},
         why="What follows the semicolon needs a finite verb of its own, and being is not "
             "one.",
         trap="A is a noun phrase with a relative clause inside it, which supplies a verb "
              "to the wrong clause."),
    dict(strand='PHY-S09', pos=9,
         carrier="A radioactive nucleus has no way of recording how long it has already "
                 "waited, ___, and the chance that it decays in the next second is the same "
                 "whether it formed yesterday or a billion years ago.",
         rule='participle_attached',
         rule_span='making the idea of an aging nucleus meaningless',
         opts=['it makes the idea of an aging nucleus meaningless',
               'making the idea of an aging nucleus meaningless',
               'the idea of an aging nucleus made meaningless',
               'they make the idea of an aging nucleus meaningless'], key='B',
         faults={'A': ('loose_subordinate', 'it makes the idea'),
                 'C': ('missing_subject', 'the idea of an aging nucleus made'),
                 'D': ('loose_subordinate', 'they make the idea')},
         why="The phrase between the commas is a participial phrase attached to the clause "
             "around it, not a clause of its own.",
         trap="A is a complete sentence dropped between commas, which leaves the comma "
              "doing a semicolon's work."),
    dict(strand='PHY-S10', pos=10,
         carrier="___, a photographic plate covered in anonymous points of light became a "
                 "measuring rod that reached out of the galaxy, and the relation that made "
                 "it possible still carries the name of the woman who found it.",
         rule='subordinate_attached',
         rule_span='After the period of a Cepheid had been tied to its brightness',
         opts=['Somebody tied the period of a Cepheid to its brightness',
               'The period of a Cepheid being tied to its brightness',
               'Having tied the period of a Cepheid to its brightness',
               'After the period of a Cepheid had been tied to its brightness'],
         key='D',
         faults={'A': ('loose_subordinate', 'Somebody tied the period'),
                 'B': ('fragment', 'The period of a Cepheid being tied'),
                 'C': ('nonfinite_only', 'Having tied the period')},
         why="The opening element is a subordinate clause, which attaches to the main clause "
             "and cannot be replaced by a sentence.",
         trap="A is a complete sentence and so leaves two sentences joined by a comma, "
              "which is the error the whole chapter is about."),
])

HUM = dict(domain='HUM', note_ar=(
    "جمل الإنسانيات تطيل في وصف العمل والأسلوب بعبارات اسمية متتابعة، ثمّ تضع الفعل التامّ "
    "في آخرها أو تنساه. والجملة الناقصة هنا تبدو أدبية لا خاطئة، وهذا أخفى ما في الباب."),
    xs=[
    dict(strand='HUM-S01', pos=1,
         carrier="An unreliable narrator does not lie to the reader outright at any point; "
                 "___.",
         rule='finite_main_verb', rule_span='he had merely left things out',
         opts=['merely leaving things out', 'having merely left things out',
               'which merely left things out', 'he had merely left things out'],
         key='D',
         faults={'A': ('fragment', 'merely leaving things out'),
                 'B': ('nonfinite_only', 'having merely left things out'),
                 'C': ('loose_subordinate', 'which merely left things out')},
         why="A clause after a semicolon needs a finite verb with a subject in front of it.",
         trap="A says exactly the right thing and carries no tense, which is the whole "
              "difference between a phrase and a clause."),
    dict(strand='HUM-S02', pos=2,
         carrier="A character's stated reason rarely accounts for everything that she "
                 "actually goes on to do; ___.",
         rule='independent_clause', rule_span='the gap was left for the reader',
         opts=['the gap being left for the reader',
               'the gap was left for the reader',
               'having been left for the reader',
               'which was left for the reader'], key='B',
         faults={'A': ('fragment', 'the gap being left for the reader'),
                 'C': ('nonfinite_only', 'having been left for the reader'),
                 'D': ('loose_subordinate', 'which was left for the reader')},
         why="A semicolon takes an independent clause on each side, so the second half needs "
             "a subject and a tense.",
         trap="A differs from the key by a single word and that word is the difference "
              "between being and was."),
    dict(strand='HUM-S03', pos=3,
         carrier="A metaphor used often enough stops being felt as a figure at all and "
                 "passes into the language as one word; ___.",
         rule='finite_main_verb',
         rule_span='its two halves had been welded together',
         opts=['its two halves welding together',
               'having welded its two halves together',
               'its two halves had been welded together',
               'which welded its two halves together'], key='C',
         faults={'A': ('fragment', 'its two halves welding together'),
                 'B': ('nonfinite_only', 'having welded its two halves'),
                 'D': ('loose_subordinate', 'which welded its two halves')},
         why="The second half of the sentence needs a finite verb, and only an auxiliary "
             "supplies one here.",
         trap="A has a subject and a participle, which reads like a clause and reports no "
              "time at all."),
    dict(strand='HUM-S04', pos=4,
         carrier="___, the English poets who were translating it changed the rhyme scheme "
                 "and moved the turn to the ninth line.",
         rule='subordinate_attached',
         rule_span='Because the Italian form did not fit the language',
         opts=['Because the Italian form did not fit the language',
               'The Italian form was a poor fit for English',
               'The Italian form not fitting the language',
               'Having found the Italian form a poor fit'], key='A',
         faults={'B': ('loose_subordinate', 'The Italian form was a poor fit'),
                 'C': ('fragment', 'The Italian form not fitting'),
                 'D': ('nonfinite_only', 'Having found the Italian form')},
         why="A subordinate clause attaches to the main clause the comma introduces, and "
             "the reason needs one.",
         trap="B is a complete sentence, which leaves two sentences joined by a comma."),
    dict(strand='HUM-S05', pos=5,
         carrier="The company at the Globe played to an audience standing in daylight on "
                 "three sides of a thrust stage; ___.",
         rule='independent_clause',
         rule_span='the weather had as much say as the writing',
         opts=['the weather having as much say as the writing',
               'having had as much say as the writing',
               'which had as much say as the writing',
               'the weather had as much say as the writing'], key='D',
         faults={'A': ('fragment', 'the weather having as much say'),
                 'B': ('nonfinite_only', 'having had as much say'),
                 'C': ('loose_subordinate', 'which had as much say')},
         why="A semicolon wants an independent clause after it, which takes a subject and a "
             "finite verb.",
         trap="A is the key with one word changed, and the changed word is the one that "
              "carried the tense."),
    dict(strand='HUM-S06', pos=6,
         carrier="A detective novel written now cannot avoid commenting on the hundred that "
                 "came before it, ___, and a reader who knows none of them misses half of "
                 "what is going on.",
         rule='participle_attached',
         rule_span='borrowing a shape it then declines to fill',
         opts=['it borrows a shape it then declines to fill',
               'a shape borrowed and then left unfilled',
               'borrowing a shape it then declines to fill',
               'they borrow a shape and then decline to fill it'], key='C',
         faults={'A': ('loose_subordinate', 'it borrows a shape'),
                 'B': ('missing_subject', 'a shape borrowed and then left'),
                 'D': ('loose_subordinate', 'they borrow a shape')},
         why="A participial phrase attaches to the clause beside it and takes its subject "
             "from that clause.",
         trap="A is a complete sentence between two commas, which asks a comma to do a "
              "semicolon's work."),
    dict(strand='HUM-S07', pos=7,
         carrier="The academy ranked a history painting above a landscape however well the "
                 "landscape had been made, and the ranking held until the market stopped "
                 "agreeing with it; ___.",
         rule='finite_main_verb',
         rule_span='the first landscapes shown there were defended as histories',
         opts=['the first landscapes shown there being defended as histories',
               'the first landscapes shown there were defended as histories',
               'having been defended there as histories',
               'which were defended there as histories'], key='B',
         faults={'A': ('fragment', 'the first landscapes shown there being'),
                 'C': ('nonfinite_only', 'having been defended there'),
                 'D': ('loose_subordinate', 'which were defended there')},
         why="What follows the semicolon needs a finite verb, and being cannot be one "
             "however long the subject in front of it runs.",
         trap="A is the longest option and the only one of the four with no tense in it at "
              "all."),
    dict(strand='HUM-S08', pos=8,
         carrier="___, an editor who prepares a performing score has to decide which "
                 "readings came from the composer and which came from a copyist working "
                 "against a deadline.",
         rule='subordinate_attached',
         rule_span='Since no two of the surviving copies have ever agreed',
         opts=['Since no two of the surviving copies have ever agreed',
               'No two of the surviving copies agree with one another',
               'No two surviving copies of the parts agreeing',
               'Having found no two copies in agreement'], key='A',
         faults={'B': ('loose_subordinate', 'No two of the surviving copies agree'),
                 'C': ('fragment', 'No two surviving copies of the parts agreeing'),
                 'D': ('nonfinite_only', 'Having found no two copies')},
         why="The opening element must be a subordinate clause, which is what attaches to "
             "the main clause after the comma.",
         trap="B is a complete sentence, so the comma is left splicing two sentences "
              "together."),
    dict(strand='HUM-S09', pos=9,
         carrier="The viaduct along the waterfront was raised a full twenty feet above "
                 "the shops that lined it so that the traffic could pass without ever "
                 "stopping, and the traffic found another route inside thirty years; "
                 "___.",
         rule='independent_clause',
         rule_span='the city has since spent more on removing it than on building it',
         opts=['the city having since spent more on removing it than on building it',
               'having spent more since on removing it than on building it',
               'the city has since spent more on removing it than on building it',
               'which has cost more to remove than it cost to build'], key='C',
         faults={'A': ('fragment', 'the city having since spent more'),
                 'B': ('nonfinite_only', 'having spent more since on removing'),
                 'D': ('loose_subordinate', 'which has cost more to remove')},
         why="A semicolon joins two independent clauses, so the second half needs a subject "
             "and a finite verb of its own.",
         trap="A is longer than the key, says the same thing, and is not a sentence."),
    dict(strand='HUM-S10', pos=10,
         carrier="The critics who held that a poem's meaning is settled by the words on the "
                 "page were arguing against a habit of reading rather than against a "
                 "theory, ___, and the habit outlived the argument by fifty years.",
         rule='participle_attached',
         rule_span='teaching two generations to read as if the author were unavailable',
         opts=['teaching two generations to read as if the author were unavailable',
               'they taught two generations to read as if the author were unavailable',
               'two generations taught to read as if the author were unavailable',
               'it taught two generations to read as if the author were gone'],
         key='A',
         faults={'B': ('loose_subordinate', 'they taught two generations'),
                 'C': ('missing_subject', 'two generations taught to read'),
                 'D': ('loose_subordinate', 'it taught two generations')},
         why="A participial phrase attaches to the clause around it and does not need a "
             "subject of its own.",
         trap="B is a complete sentence inserted between commas, which leaves three "
              "clauses and two commas to hold them."),
])

SOC = dict(domain='SOC', note_ar=(
    "جمل العلوم الاجتماعية تصف المنهج بعبارات طويلة: عيّنة مختارة بالقرعة، ومقاسة مرّتين، "
    "وموزونة بحسب العمر. وهذه كلّها أوصاف لا جمل، فإن لم يأتِ بعدها فعل تامّ بقي الكلام "
    "ناقصاً."), xs=[
    dict(strand='SOC-S01', pos=1,
         carrier="The wording of a survey question changes the answers that it gets back; "
                 "___.",
         rule='independent_clause', rule_span='the order of the options does too',
         opts=['the order of the options does too',
               'the order of the options doing the same',
               'having done the same with the order',
               'which the order of the options also does'], key='A',
         faults={'B': ('fragment', 'the order of the options doing'),
                 'C': ('nonfinite_only', 'having done the same with the order'),
                 'D': ('loose_subordinate', 'which the order of the options')},
         why="A semicolon takes an independent clause after it, so the second half needs a "
             "subject and a tensed verb.",
         trap="B has a subject and a participle, which is the commonest fragment in careful "
              "prose."),
    dict(strand='SOC-S02', pos=2,
         carrier="Random assignment leaves the two arms of a trial alike at the start; "
                 "___.",
         rule='finite_main_verb', rule_span='no other method had done as much',
         opts=['no other method doing as much',
               'having done as much by no other method',
               'no other method had done as much',
               'which no other method had done'], key='C',
         faults={'A': ('fragment', 'no other method doing as much'),
                 'B': ('nonfinite_only', 'having done as much by no other'),
                 'D': ('loose_subordinate', 'which no other method had done')},
         why="The second half of the sentence needs a finite verb, and only the auxiliary "
             "had supplies one.",
         trap="A reports the same fact and reports no time, which is what makes it a "
              "fragment."),
    dict(strand='SOC-S03', pos=3,
         carrier="Two measurements can rise and fall together for years without either of "
                 "them causing the other at all; ___.",
         rule='independent_clause',
         rule_span='a third variable had been moving both of them',
         opts=['a third variable moving both of them',
               'having moved both of them all along',
               'which had been moving both of them',
               'a third variable had been moving both of them'], key='D',
         faults={'A': ('fragment', 'a third variable moving both'),
                 'B': ('nonfinite_only', 'having moved both of them'),
                 'C': ('loose_subordinate', 'which had been moving both')},
         why="A semicolon wants an independent clause on each side of it, which takes a "
             "subject and a finite verb.",
         trap="A is a subject followed by a participle, which has the shape of a clause and "
              "none of the grammar."),
    dict(strand='SOC-S04', pos=4,
         carrier="___, the mean of a distribution sits well above the middle of it, and a "
                 "report that gives only the mean has said very little.",
         rule='subordinate_attached',
         rule_span='When a few very large values have stretched out the top',
         opts=['A few very large values stretch out the top of it',
               'When a few very large values have stretched out the top',
               'A few very large values stretching out the top',
               'Having been stretched out at the top by a few values'], key='B',
         faults={'A': ('loose_subordinate', 'A few very large values stretch'),
                 'C': ('fragment', 'A few very large values stretching'),
                 'D': ('nonfinite_only', 'Having been stretched out')},
         why="A subordinate clause attaches to the main clause the comma introduces, and the "
             "condition needs one.",
         trap="A is a complete sentence, which leaves the comma joining two sentences on "
              "its own."),
    dict(strand='SOC-S05', pos=5,
         carrier="A dollar paid in advance buys a better response rate than five dollars "
                 "promised on completion of the whole questionnaire; ___.",
         rule='finite_main_verb',
         rule_span='the gesture had mattered more than the money',
         opts=['the gesture had mattered more than the money',
               'the gesture mattering more than the money',
               'having mattered more than the money did',
               'which had mattered more than the money'], key='A',
         faults={'B': ('fragment', 'the gesture mattering more'),
                 'C': ('nonfinite_only', 'having mattered more than the money'),
                 'D': ('loose_subordinate', 'which had mattered more')},
         why="A finite verb is what the second half needs, and the auxiliary had is the only "
             "one on offer.",
         trap="B is a subject and a participle, which is a phrase wearing the clothes of a "
              "clause."),
    dict(strand='SOC-S06', pos=6,
         carrier="Seven confederates gave the same wrong answer calmly and in turn before "
                 "the subject was asked for his own, ___, and about a third of the subjects "
                 "went along with them.",
         rule='participle_attached',
         rule_span='leaving him nothing to argue with',
         opts=['it left him nothing to argue with',
               'nothing left for him to argue with',
               'they left him nothing to argue with',
               'leaving him nothing to argue with'], key='D',
         faults={'A': ('loose_subordinate', 'it left him nothing'),
                 'B': ('missing_subject', 'nothing left for him'),
                 'C': ('loose_subordinate', 'they left him nothing')},
         why="A participial phrase is attached to the clause it stands beside and takes "
             "from that clause the subject it has none of its own.",
         trap="A is a complete sentence placed between commas, which gives the sentence "
              "more clauses than it can punctuate."),
    dict(strand='SOC-S07', pos=7,
         carrier="A neighborhood laid out along a streetcar line kept the shape the line "
                 "had given it long after the rails had been pulled up and the cars had "
                 "gone; ___.",
         rule='independent_clause',
         rule_span='the automobile had inherited a street built for something else',
         opts=['the automobile inheriting a street built for something else',
               'having inherited a street built for something else',
               'the automobile had inherited a street built for something else',
               'which had inherited a street built for something else'], key='C',
         faults={'A': ('fragment', 'the automobile inheriting a street'),
                 'B': ('nonfinite_only', 'having inherited a street built'),
                 'D': ('loose_subordinate', 'which had inherited a street')},
         why="A semicolon joins two independent clauses, so the second half must stand as a "
             "sentence by itself.",
         trap="A is the key with one word changed, and that word is the one that held the "
              "tense."),
    dict(strand='SOC-S08', pos=8,
         carrier="___, a figure for unemployment that counts only the people who are "
                 "still actively looking for work will understate how bad a long recession "
                 "has been.",
         rule='subordinate_attached',
         rule_span='Because people who give up looking have dropped out of the count',
         opts=['People who give up looking drop out of the count altogether',
               'Because people who give up looking have dropped out of the count',
               'People who give up looking dropping out of the count',
               'Having dropped out of the count by giving up'], key='B',
         faults={'A': ('loose_subordinate', 'People who give up looking drop'),
                 'C': ('fragment', 'People who give up looking dropping'),
                 'D': ('nonfinite_only', 'Having dropped out of the count')},
         why="The opening element has to be a subordinate clause, which is what attaches to "
             "the main clause the comma introduces.",
         trap="A is a complete sentence, and two complete sentences cannot be joined by a "
              "comma."),
    dict(strand='SOC-S09', pos=9,
         carrier="The share of income going to the richest households can be computed from "
                 "tax returns in some countries and only from household surveys in others, "
                 "and the two sources disagree most about exactly the households the "
                 "measure is for; ___.",
         rule='finite_main_verb',
         rule_span='the choice of source had decided the answer in advance',
         opts=['the choice of source deciding the answer in advance',
               'having decided the answer in advance by the choice of source',
               'which had decided the answer in advance',
               'the choice of source had decided the answer in advance'], key='D',
         faults={'A': ('fragment', 'the choice of source deciding'),
                 'B': ('nonfinite_only', 'having decided the answer in advance by'),
                 'C': ('loose_subordinate', 'which had decided the answer')},
         why="What follows the semicolon needs a finite verb, and a participle at the end of "
             "a long subject never provides one.",
         trap="A is the longest of the four and the only one with nothing in it that carries "
              "a tense."),
    dict(strand='SOC-S10', pos=10,
         carrier="People asked how likely a rare event is do not consult any count of how "
                 "often it has happened but ask instead how easily an example comes to "
                 "mind, ___, and the answer therefore follows last week's newspapers rather "
                 "than the record of the last century.",
         rule='participle_attached',
         rule_span='substituting a question they can answer for one they cannot',
         opts=['they substitute a question they can answer for one they cannot',
               'substituting a question they can answer for one they cannot',
               'a question they can answer substituted for one they cannot',
               'it substitutes a question they can answer for one they cannot'],
         key='B',
         faults={'A': ('loose_subordinate', 'they substitute a question'),
                 'C': ('missing_subject', 'a question they can answer substituted'),
                 'D': ('loose_subordinate', 'it substitutes a question')},
         why="A participial phrase attaches to the clause around it and takes its subject "
             "from there.",
         trap="A is a complete sentence inserted between commas, which leaves the comma "
              "doing work only a semicolon can do."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
