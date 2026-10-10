# -*- coding: utf-8 -*-
"""Chapter 9 - sentence boundaries. Home domain BIO.

Key plans: HIS BDACBADCAC, BIO CABDCBADBD, PHY DBCADCBACA, HUM ACDBADCBDB,
SOC BDACBADCAC.

Every option carries the junction and the first word or two of the second
clause, so that the run-on option is a real string rather than an empty one, and
the four options differ by exactly the punctuation and the connective.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 9

AR = dict(
    qaida="حدود الجملة تعني أن الجملتين التامّتين لا تُجمعان بفاصلة وحدها. فلهما أربع طرق: "
          "نقطة تفصلهما، أو فاصلة منقوطة تصلهما، أو فاصلة مع حرف عطف، أو أن تُجعل إحداهما "
          "تابعة للأخرى بأداة ربط فتزول المسألة من أصلها.",
    kayf="يعرض الاختبار جملتين تامّتين ويضع بينهما فراغاً، فتكون الخيارات: فاصلة وحدها، "
         "ولا شيء، وفاصلة منقوطة، وفاصلة مع حرف عطف. والسؤال واحد في كلّ مرّة: هل ما قبل "
         "الفراغ جملة تامّة وما بعده جملة تامّة؟",
    fakh="الفخّ أن الفاصلة وحدها تبدو كافية لأن المعنى متّصل. ولا تنظر إلى المعنى بل إلى "
         "التركيب: إن صحّ أن تضع نقطة مكان الفراغ فلا تكفي الفاصلة وحدها أبداً.",
    sila="حدود الجملة من أكثر ما يُختبر في قواعد الإنجليزية المعيارية في اختبار سات، وكان "
         "هذا الباب في الكتاب الثاني سهلاً في كلّ المستويات، فجاء هنا في المستويات الأربعة "
         "كلّها حتّى الصعب منها.",
)

HIS = dict(domain='HIS', note_ar=(
    "جمل التاريخ والنظام المدني تضع حدثين متتابعين في جملة واحدة، فيكون كلّ منهما جملة "
    "تامّة، ويكون الوصل بينهما هو المسألة. والفاصلة وحدها هي الخطأ المتوقّع."), xs=[
    dict(strand='HIS-S01', pos=1,
         carrier="The Declaration lists the grievances at length ___ names the king only "
                 "once by title.",
         rule='comma_conjunction', rule_span=', but it',
         opts=[', it', ', but it', 'it', '; but it'], key='B',
         faults={'A': ('comma_splice', ', it'), 'C': ('run_on', 'it'),
                 'D': ('wrong_mark', '; but it')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['comma'],
                  marks_expected=1),
         why="Two independent clauses may be joined by a comma together with a coordinating "
             "conjunction.",
         trap="A has the comma and not the conjunction, which is the commonest splice in "
              "English prose."),
    dict(strand='HIS-S02', pos=2,
         carrier="Article One vests the legislative power in a Congress of two chambers ___ "
                 "vests the executive power in one person.",
         rule='period_boundary', rule_span='. Article Two',
         opts=[', Article Two', 'Article Two', '; and Article Two', '. Article Two'],
         key='D',
         faults={'A': ('comma_splice', ', Article Two'), 'B': ('run_on', 'Article Two'),
                 'C': ('wrong_mark', '; and Article Two')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['period'],
                  marks_expected=1),
         why="Two independent clauses can simply be separated by a period, which is always "
             "available and never wrong.",
         trap="C uses a semicolon and a conjunction together, which is one mark more than "
              "the join needs."),
    dict(strand='HIS-S03', pos=3,
         carrier="The Act of 1790 set a residence requirement of two years ___ did not drop "
                 "the racial bar for another eighty years.",
         rule='comma_conjunction', rule_span=', and Congress',
         opts=[', and Congress', ', Congress', 'Congress', '; and Congress'], key='A',
         faults={'B': ('comma_splice', ', Congress'), 'C': ('run_on', 'Congress'),
                 'D': ('wrong_mark', '; and Congress')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['comma'],
                  marks_expected=1),
         why="A comma with a coordinating conjunction is one of the four ways two "
             "independent clauses may be joined.",
         trap="B drops the conjunction and leaves the comma to do work it cannot do alone."),
    dict(strand='HIS-S04', pos=4,
         carrier="Garrison reprinted the laws of the slave states without any comment at "
                 "all ___ reprinting was itself the whole of the argument.",
         rule='semicolon_boundary', rule_span='; the',
         opts=[', the', 'the', '; the', ': the'], key='C',
         faults={'A': ('comma_splice', ', the'), 'B': ('run_on', 'the'),
                 'D': ('wrong_mark', ': the')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses directly, which suits a pair as "
             "closely related as these.",
         trap="D uses a colon, which announces a list or an explanation rather than joining "
              "two equal clauses."),
    dict(strand='HIS-S05', pos=5,
         carrier="Federal troops left the South in 1877 under a bargain over a disputed "
                 "election ___ governments that replaced them disenfranchised black voters "
                 "within twenty years.",
         rule='period_boundary', rule_span='. The',
         opts=[', the', '. The', 'the', '; and the'], key='B',
         faults={'A': ('comma_splice', ', the'), 'C': ('run_on', 'the'),
                 'D': ('wrong_mark', '; and the')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['period'],
                  marks_expected=1),
         why="A period separates two independent clauses, and nothing about the length of "
             "either makes it unavailable.",
         trap="A joins two full sentences with a comma, which is what the whole chapter is "
              "about."),
    dict(strand='HIS-S06', pos=6,
         carrier="The fire that killed a hundred and forty-six garment workers was not the "
                 "largest in the city's history ___ exits had been locked from the outside "
                 "to stop the women leaving early, which made it the one that changed the "
                 "law.",
         rule='subordinate_boundary', rule_span='because its',
         opts=['because its', ', its', 'its', '; its'], key='A',
         faults={'B': ('comma_splice', ', its'), 'C': ('run_on', 'its'),
                 'D': ('wrong_mark', '; its')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=[],
                  marks_expected=0),
         why="Making the second clause subordinate removes the boundary problem altogether, "
             "because a subordinate clause needs no mark to attach it.",
         trap="B leaves two complete sentences joined by a comma, which no amount of logical "
              "connection repairs."),
    dict(strand='HIS-S07', pos=7,
         carrier="The boycott in Montgomery lasted three hundred and eighty-one days ___ "
                 "that ended it had been handed down six weeks before the buses were "
                 "actually integrated.",
         rule='semicolon_boundary', rule_span='; the ruling',
         opts=[', the ruling', 'the ruling', ': the ruling', '; the ruling'], key='D',
         faults={'A': ('comma_splice', ', the ruling'), 'B': ('run_on', 'the ruling'),
                 'C': ('wrong_mark', ': the ruling')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon is the right join for two independent clauses that belong together "
             "closely enough that a period would separate them too far.",
         trap="C uses a colon, which promises that what follows explains what came before "
              "rather than standing beside it."),
    dict(strand='HIS-S08', pos=8,
         carrier="The mandates were to be surrendered as soon as their inhabitants were "
                 "ready to govern themselves ___ of them was surrendered until after a "
                 "second world war had been fought and lost.",
         rule='comma_conjunction', rule_span=', but none',
         opts=[', none', 'none', ', but none', '; but none'], key='C',
         faults={'A': ('comma_splice', ', none'), 'B': ('run_on', 'none'),
                 'D': ('wrong_mark', '; but none')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['comma'],
                  marks_expected=1),
         why="A comma and a coordinating conjunction join two independent clauses, and the "
             "contrast here calls for one.",
         trap="A has the comma without the conjunction, so the contrast is left to the "
              "reader and the grammar is left broken."),
    dict(strand='HIS-S09', pos=9,
         carrier="The wartime sedition statutes were never squarely tested in the Supreme "
                 "Court while the fighting continued ___ convictions under them were of "
                 "editors rather than of spies, and several of those convictions were later "
                 "set aside without any opinion being written at all.",
         rule='subordinate_boundary', rule_span='although most',
         opts=['although most', ', most', 'most', '; most'], key='A',
         faults={'B': ('comma_splice', ', most'), 'C': ('run_on', 'most'),
                 'D': ('wrong_mark', '; most')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=[],
                  marks_expected=0),
         why="A subordinate clause attaches without a boundary mark, so making the second clause subordinate removes the boundary question, and the "
             "concession the sentence makes needs a subordinator to carry it.",
         trap="D uses a semicolon, which would be correct grammar and would lose the "
              "concession the sentence is making."),
    dict(strand='HIS-S10', pos=10,
         carrier="The penny papers sold for a cent where the established papers sold for "
                 "six and recovered the difference from advertisers rather than from "
                 "readers ___ has outlived every one of the papers that invented it, and "
                 "the editors who worked it out first were the ones who survived the "
                 "decade.",
         rule='semicolon_boundary', rule_span='; the model',
         opts=[', the model', 'the model', '; the model', ': the model'], key='C',
         faults={'A': ('comma_splice', ', the model'), 'B': ('run_on', 'the model'),
                 'D': ('wrong_mark', ': the model')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses, and after a first clause this long "
             "it keeps the pair together where a period would break them apart.",
         trap="A is the splice the length of the first clause makes easy to miss."),
])

BIO = dict(domain='BIO', note_ar=(
    "الأحياء وعلوم الأرض هو المجال الأصلي لهذا الفصل: وصف العملية سلسلة من الجمل التامّة "
    "المتعاقبة، فتتكرّر الحدود في كلّ سطر، والفاصلة المنقوطة هي أنسب ما يصلها."), xs=[
    dict(strand='BIO-S01', pos=1,
         carrier="Selection cannot create variation ___ can only work on what is already "
                 "there.",
         rule='period_boundary', rule_span='. It',
         opts=[', it', 'it', '. It', '; and it'], key='C',
         faults={'A': ('comma_splice', ', it'), 'B': ('run_on', 'it'),
                 'D': ('wrong_mark', '; and it')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['period'],
                  marks_expected=1),
         why="A period separates two independent clauses, which is what these two are.",
         trap="A joins two sentences with a comma, which is a splice however short they "
              "are."),
    dict(strand='BIO-S02', pos=2,
         carrier="Mendel published his ratios in 1866 ___ built on the paper for another "
                 "thirty-five years.",
         rule='comma_conjunction', rule_span=', but nobody',
         opts=[', but nobody', ', nobody', 'nobody', '; but nobody'], key='A',
         faults={'B': ('comma_splice', ', nobody'), 'C': ('run_on', 'nobody'),
                 'D': ('wrong_mark', '; but nobody')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['comma'],
                  marks_expected=1),
         why="A comma together with a coordinating conjunction joins two independent "
             "clauses, and the contrast needs the conjunction.",
         trap="B supplies the comma without the conjunction, which a join between two full "
              "clauses cannot do."),
    dict(strand='BIO-S03', pos=3,
         carrier="The inner membrane is folded into a surface many times the area of the "
                 "outer one ___ folding is where the proton gradient is built.",
         rule='semicolon_boundary', rule_span='; the',
         opts=[', the', '; the', 'the', ': the'], key='B',
         faults={'A': ('comma_splice', ', the'), 'C': ('run_on', 'the'),
                 'D': ('wrong_mark', ': the')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses, which keeps a pair this closely "
             "related in one sentence.",
         trap="D uses a colon, which announces an explanation rather than joining two equal "
              "clauses."),
    dict(strand='BIO-S04', pos=4,
         carrier="A lake loses nine tenths of the energy at every step of the food chain "
                 "___ fifth link is almost unknown anywhere.",
         rule='period_boundary', rule_span='. A',
         opts=[', a', 'a', '; and a', '. A'], key='D',
         faults={'A': ('comma_splice', ', a'), 'B': ('run_on', 'a'),
                 'C': ('wrong_mark', '; and a')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['period'],
                  marks_expected=1),
         why="A period is always available to separate two independent clauses, and nothing "
             "here rules it out.",
         trap="C puts a semicolon and a conjunction together, which is one mark more than "
              "the join needs."),
    dict(strand='BIO-S05', pos=5,
         carrier="A population that has already outrun its food does not level off gently "
                 "___ crash can carry it below what the habitat would support.",
         rule='subordinate_boundary', rule_span='because the',
         opts=[', the', 'the', 'because the', ', because the'], key='C',
         faults={'A': ('comma_splice', ', the'), 'B': ('run_on', 'the'),
                 'D': ('overpunctuated', ', because the')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=[],
                  marks_expected=0),
         why="A subordinate clause attaches without a boundary mark, so making the second clause subordinate removes the boundary problem, since a "
             "subordinate clause needs no mark to attach it.",
         trap="D puts a comma in front of a restrictive because-clause, which needs no "
              "mark at all."),
    dict(strand='BIO-S06', pos=6,
         carrier="Koch could not apply his own postulates to the organisms that will not "
                 "grow in a pure culture ___ of them in particular has never been "
                 "satisfied for a virus, and the test is still the one he wrote.",
         rule='semicolon_boundary', rule_span='; the fourth',
         opts=[', the fourth', '; the fourth', 'the fourth', ': the fourth'], key='B',
         faults={'A': ('comma_splice', ', the fourth'), 'C': ('run_on', 'the fourth'),
                 'D': ('wrong_mark', ': the fourth')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses and keeps them in the one sentence "
             "the argument needs.",
         trap="A is a splice that the length of the first clause makes easy to read past."),
    dict(strand='BIO-S07', pos=7,
         carrier="Industrial fixation made nitrogen cheap enough to spread by the ton on "
                 "any field at all ___ guano trade and the Chilean nitrate trade both "
                 "collapsed inside a single decade.",
         rule='comma_conjunction', rule_span=', and the',
         opts=[', and the', ', the', 'the', '; and the'], key='A',
         faults={'B': ('comma_splice', ', the'), 'C': ('run_on', 'the'),
                 'D': ('wrong_mark', '; and the')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['comma'],
                  marks_expected=1),
         why="A comma with a coordinating conjunction joins two independent clauses, and the "
             "consequence here wants the conjunction.",
         trap="B has the comma and no conjunction, which is the splice this chapter exists "
              "to catch."),
    dict(strand='BIO-S08', pos=8,
         carrier="The air in the bubbles at the bottom of a deep ice core was last in "
                 "contact with the atmosphere eight hundred thousand years ago ___ record "
                 "reaches back further than any other direct measurement we have.",
         rule='subordinate_boundary', rule_span='which is why the',
         opts=[', the', 'the', '; the', 'which is why the'], key='D',
         faults={'A': ('comma_splice', ', the'), 'B': ('run_on', 'the'),
                 'C': ('wrong_mark', '; the')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=[],
                  marks_expected=0),
         why="A subordinate clause attaches without a boundary mark, so making the second clause subordinate attaches it without any boundary mark and "
             "states the connection the sentence is drawing.",
         trap="C uses a semicolon, which is correct grammar and leaves the reader to supply "
              "the connection."),
    dict(strand='BIO-S09', pos=9,
         carrier="The channels that water cut across eastern Washington were read for fifty "
                 "years as the work of a slow river over millions of years ___ boulders the "
                 "size of small houses that the water had rolled were lying in plain sight "
                 "the whole time, and nobody wanted to say what could have moved "
                 "them.",
         rule='semicolon_boundary', rule_span='; the boulders',
         opts=[', the boulders', '; the boulders', 'the boulders', ': the boulders'],
         key='B',
         faults={'A': ('comma_splice', ', the boulders'),
                 'C': ('run_on', 'the boulders'),
                 'D': ('wrong_mark', ': the boulders')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses, which is what holds a contrast this "
             "long inside one sentence.",
         trap="A is a comma splice across two very long clauses, which is where a splice is "
              "hardest to see."),
    dict(strand='BIO-S10', pos=10,
         carrier="The overturning time of the ocean has to be measured in centuries rather "
                 "than in decades ___ tracer released into the surface of the North "
                 "Atlantic in the early 1960s had still not reached the deepest water of "
                 "the Pacific when it was looked for again twenty years later.",
         rule='subordinate_boundary', rule_span='because the',
         opts=[', the', 'the', '; the', 'because the'], key='D',
         faults={'A': ('comma_splice', ', the'), 'B': ('run_on', 'the'),
                 'C': ('wrong_mark', '; the')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=[],
                  marks_expected=0),
         why="A subordinate clause attaches without a boundary mark, so making the second clause subordinate removes the boundary question and names the "
             "evidence the first clause rests on.",
         trap="C uses a semicolon, which joins the clauses correctly and says nothing about "
              "why the first should be believed."),
])

PHY = dict(domain='PHY', note_ar=(
    "جمل العلوم الفيزيائية تضع القانون ثمّ نتيجته المقيسة في جملة واحدة، فكلٌّ منهما جملة "
    "تامّة قائمة بنفسها. والفاصلة المنقوطة والنقطة كلتاهما تصلح للوصل بينهما، والفاصلة "
    "وحدها لا تصلح أبداً مهما كان المعنى متّصلاً."), xs=[
    dict(strand='PHY-S01', pos=1,
         carrier="A single reading settles very little ___ of eleven of them settles a "
                 "great deal.",
         rule='period_boundary', rule_span='. The scatter',
         opts=[', the scatter', 'the scatter', '; and the scatter', '. The scatter'],
         key='D',
         faults={'A': ('comma_splice', ', the scatter'),
                 'B': ('run_on', 'the scatter'),
                 'C': ('wrong_mark', '; and the scatter')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['period'],
                  marks_expected=1),
         why="A period separates two independent clauses, which is the simplest of the four "
             "joins and never wrong.",
         trap="A joins two full clauses with a comma, which the shortness of each makes easy "
              "to accept."),
    dict(strand='PHY-S02', pos=2,
         carrier="The two forces on a resting book are equal in size ___ point in exactly "
                 "opposite directions.",
         rule='comma_conjunction', rule_span=', and they',
         opts=[', they', ', and they', 'they', '; and they'], key='B',
         faults={'A': ('comma_splice', ', they'), 'C': ('run_on', 'they'),
                 'D': ('wrong_mark', '; and they')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['comma'],
                  marks_expected=1),
         why="A comma with a coordinating conjunction is what joins two independent clauses "
             "of equal weight.",
         trap="A gives the comma and no conjunction, which a join between two full clauses "
              "cannot manage."),
    dict(strand='PHY-S03', pos=3,
         carrier="Energy is never destroyed in any process that has ever been measured ___ "
                 "moves and spreads and becomes harder to use than it was.",
         rule='period_boundary', rule_span='. It',
         opts=[', it', 'it', '. It', '; and it'], key='C',
         faults={'A': ('comma_splice', ', it'), 'B': ('run_on', 'it'),
                 'D': ('wrong_mark', '; and it')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['period'],
                  marks_expected=1),
         why="Two independent clauses may be separated by a period, and the second here is "
             "long enough to stand alone.",
         trap="A puts a comma where a period or a semicolon belongs, which is the splice "
              "this chapter is about."),
    dict(strand='PHY-S04', pos=4,
         carrier="A gas compressed faster than heat can leave the cylinder grows warmer ___ "
                 "expanding against a piston grows colder instead.",
         rule='semicolon_boundary', rule_span='; the same gas',
         opts=['; the same gas', ', the same gas', 'the same gas', ': the same gas'],
         key='A',
         faults={'B': ('comma_splice', ', the same gas'),
                 'C': ('run_on', 'the same gas'),
                 'D': ('wrong_mark', ': the same gas')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses, and a pair as balanced as these "
             "belongs inside one sentence.",
         trap="D uses a colon, which would promise that the second clause explains the "
              "first rather than matching it."),
    dict(strand='PHY-S05', pos=5,
         carrier="Each lamp in a parallel circuit sees the whole of the battery voltage ___ "
                 "of one of them leaves the others alight.",
         rule='comma_conjunction', rule_span=', and the failure',
         opts=[', the failure', 'the failure', '; and the failure',
               ', and the failure'], key='D',
         faults={'A': ('comma_splice', ', the failure'),
                 'B': ('run_on', 'the failure'),
                 'C': ('wrong_mark', '; and the failure')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['comma'],
                  marks_expected=1),
         why="A comma and a coordinating conjunction join two independent clauses, and the "
             "second fact follows from the first.",
         trap="A drops the conjunction and leaves a comma holding two whole sentences "
              "together."),
    dict(strand='PHY-S06', pos=6,
         carrier="A prism always bends the short waves more than it bends the long ones ___ "
                 "of the colors in the band it throws on the wall never changes from one "
                 "prism to the next.",
         rule='subordinate_boundary', rule_span='which is why the order',
         opts=[', the order', 'the order', 'which is why the order', '; the order'],
         key='C',
         faults={'A': ('comma_splice', ', the order'), 'B': ('run_on', 'the order'),
                 'D': ('wrong_mark', '; the order')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=[],
                  marks_expected=0),
         why="A subordinate clause attaches without a boundary mark, so making the second clause subordinate attaches it without a mark and states the "
             "consequence the sentence is drawing.",
         trap="D uses a semicolon, which is correct and leaves the reader to work out why "
              "the second clause follows at all."),
    dict(strand='PHY-S07', pos=7,
         carrier="Lavoisier weighed the sealed vessel before the reaction and again "
                 "afterward and found the very same mass both times ___ that burning "
                 "destroys matter did not survive the decade.",
         rule='semicolon_boundary', rule_span='; the idea',
         opts=[', the idea', '; the idea', 'the idea', ': the idea'], key='B',
         faults={'A': ('comma_splice', ', the idea'), 'C': ('run_on', 'the idea'),
                 'D': ('wrong_mark', ': the idea')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses, and the second follows closely "
             "enough from the first to stay in the sentence.",
         trap="A leaves a comma between two clauses either of which could have ended with a "
              "period."),
    dict(strand='PHY-S08', pos=8,
         carrier="A load that stays below the fatigue limit of a steel beam may be applied "
                 "without end ___ just above it will open a crack after a number of cycles "
                 "that can be worked out in advance.",
         rule='period_boundary', rule_span='. A load',
         opts=['. A load', ', a load', 'a load', '; and a load'], key='A',
         faults={'B': ('comma_splice', ', a load'), 'C': ('run_on', 'a load'),
                 'D': ('wrong_mark', '; and a load')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['period'],
                  marks_expected=1),
         why="A period separates two independent clauses, and the contrast reads more "
             "sharply for the full stop between them.",
         trap="B is a splice across a contrast, where the comma feels like the mark the "
              "sense is asking for."),
    dict(strand='PHY-S09', pos=9,
         carrier="A radioactive nucleus has no way of recording how long it has already "
                 "waited, so the chance that it decays in the next second is the same "
                 "whether it formed yesterday or a billion years ago ___ of an aging "
                 "nucleus has no meaning at all.",
         rule='subordinate_boundary', rule_span='and so the idea',
         opts=[', the idea', 'the idea', 'and so the idea', '; the idea'], key='C',
         faults={'A': ('comma_splice', ', the idea'), 'B': ('run_on', 'the idea'),
                 'D': ('wrong_mark', '; the idea')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=[],
                  marks_expected=0),
         why="A subordinate connective attaches the last clause without any mark and names "
             "the conclusion the two clauses before it support.",
         trap="D uses a semicolon after a sentence that already holds a comma and a "
              "conjunction, which is grammatical and loses the inference."),
    dict(strand='PHY-S10', pos=10,
         carrier="A Cepheid gives away its true brightness by the time it takes to brighten "
                 "and fade again, and a plate full of anonymous points of light therefore "
                 "became a measuring rod ___ that made it possible still carries the name "
                 "of the woman who found it.",
         rule='semicolon_boundary', rule_span='; the relation',
         opts=['; the relation', ', the relation', 'the relation', ': the relation'],
         key='A',
         faults={'B': ('comma_splice', ', the relation'),
                 'C': ('run_on', 'the relation'),
                 'D': ('wrong_mark', ': the relation')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses, and after a first clause that "
             "already carries a comma it is the only join that will not confuse.",
         trap="B would give the sentence three commas doing three different jobs, one of "
              "them a job no comma can do."),
])

HUM = dict(domain='HUM', note_ar=(
    "جمل الإنسانيات توازن بين جملتين تامّتين: ما يقوله النصّ وما يفعله. وهذا التوازن هو "
    "أنسب موضع للفاصلة المنقوطة، لأن النقطة تفصل ما أراد الكاتب وصله."), xs=[
    dict(strand='HUM-S01', pos=1,
         carrier="An unreliable narrator does not lie to the reader ___ leaves out what "
                 "would damage him.",
         rule='comma_conjunction', rule_span=', and he',
         opts=[', and he', ', he', 'he', '; and he'], key='A',
         faults={'B': ('comma_splice', ', he'), 'C': ('run_on', 'he'),
                 'D': ('wrong_mark', '; and he')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['comma'],
                  marks_expected=1),
         why="A comma with a coordinating conjunction joins two independent clauses, and the "
             "second qualifies the first.",
         trap="B has the comma without the conjunction, which is the splice that sounds "
              "most natural of all."),
    dict(strand='HUM-S02', pos=2,
         carrier="A character's stated reason is rarely the whole of her motive ___ is "
                 "where the reader does the work.",
         rule='semicolon_boundary', rule_span='; the gap',
         opts=[', the gap', 'the gap', '; the gap', ': the gap'], key='C',
         faults={'A': ('comma_splice', ', the gap'), 'B': ('run_on', 'the gap'),
                 'D': ('wrong_mark', ': the gap')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses, which is what a pair this closely "
             "paired needs.",
         trap="D uses a colon, which would announce an explanation where the two clauses "
              "stand side by side."),
    dict(strand='HUM-S03', pos=3,
         carrier="A metaphor used often enough stops being felt as a figure at all ___ "
                 "passes into the language as a single word nobody looks twice at.",
         rule='period_boundary', rule_span='. It',
         opts=[', it', 'it', '; and it', '. It'], key='D',
         faults={'A': ('comma_splice', ', it'), 'B': ('run_on', 'it'),
                 'C': ('wrong_mark', '; and it')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['period'],
                  marks_expected=1),
         why="A period separates two independent clauses, and the second is long enough to "
             "want the full stop.",
         trap="A joins two whole clauses with a comma, which is the error the chapter is "
              "named for."),
    dict(strand='HUM-S04', pos=4,
         carrier="The Italian sonnet turns at the ninth line of fourteen ___ in the English "
                 "form arrives two lines later and leaves a couplet behind it.",
         rule='comma_conjunction', rule_span=', and the turn',
         opts=[', the turn', ', and the turn', 'the turn', '; and the turn'], key='B',
         faults={'A': ('comma_splice', ', the turn'), 'C': ('run_on', 'the turn'),
                 'D': ('wrong_mark', '; and the turn')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['comma'],
                  marks_expected=1),
         why="A comma together with a coordinating conjunction joins two independent clauses "
             "of equal standing.",
         trap="A leaves the comma to join two sentences by itself, which is what a comma "
              "cannot do."),
    dict(strand='HUM-S05', pos=5,
         carrier="The company at the Globe played in daylight to an audience standing on "
                 "three sides ___ had as much say in the afternoon as the writing did.",
         rule='semicolon_boundary', rule_span='; the weather',
         opts=['; the weather', ', the weather', 'the weather', ': the weather'],
         key='A',
         faults={'B': ('comma_splice', ', the weather'),
                 'C': ('run_on', 'the weather'),
                 'D': ('wrong_mark', ': the weather')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses, keeping in one sentence a pair that "
             "belong together.",
         trap="D uses a colon, which promises that the second clause explains the first "
              "rather than adding to it."),
    dict(strand='HUM-S06', pos=6,
         carrier="A detective novel written now cannot help commenting on the hundred that "
                 "came before it, and it borrows a shape it then declines to fill ___ who "
                 "knows none of the hundred misses half of what is going on.",
         rule='subordinate_boundary', rule_span='which is why a reader',
         opts=[', a reader', 'a reader', '; a reader', 'which is why a reader'],
         key='D',
         faults={'A': ('comma_splice', ', a reader'), 'B': ('run_on', 'a reader'),
                 'C': ('wrong_mark', '; a reader')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=[],
                  marks_expected=0),
         why="A subordinate clause attaches without a boundary mark, so making the last clause attaches it without a mark and names the "
             "consequence the sentence has been building to.",
         trap="C uses a semicolon, which joins the clauses correctly and leaves the "
              "consequence unstated."),
    dict(strand='HUM-S07', pos=7,
         carrier="The academy ranked a history painting above every other kind of subject "
                 "and painted it at a scale no private buyer could hang ___ shown there at "
                 "all had to be defended as a history in disguise.",
         rule='period_boundary', rule_span='. A landscape',
         opts=[', a landscape', 'a landscape', '. A landscape', '; and a landscape'],
         key='C',
         faults={'A': ('comma_splice', ', a landscape'),
                 'B': ('run_on', 'a landscape'),
                 'D': ('wrong_mark', '; and a landscape')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['period'],
                  marks_expected=1),
         why="A period separates two independent clauses, and after a first clause this long "
             "it gives the reader somewhere to stop.",
         trap="A is a splice the length of the first clause makes easy to read straight "
              "past."),
    dict(strand='HUM-S08', pos=8,
         carrier="No two of the surviving copies of the parts agree with one another in "
                 "every reading ___ who prepares a performing score has to choose, and has "
                 "to say in a note which choice was made.",
         rule='semicolon_boundary', rule_span='; an editor',
         opts=[', an editor', '; an editor', 'an editor', ': an editor'], key='B',
         faults={'A': ('comma_splice', ', an editor'), 'C': ('run_on', 'an editor'),
                 'D': ('wrong_mark', ': an editor')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses, which is what holds the problem and "
             "its consequence in a single sentence.",
         trap="D uses a colon, which would make the second clause an explanation of the "
              "first rather than what follows from it."),
    dict(strand='HUM-S09', pos=9,
         carrier="The viaduct was raised twenty feet above the shops that lined it so that "
                 "the traffic could pass without ever stopping ___ found another route "
                 "inside thirty years, and the city has since spent more on taking the "
                 "structure down than it spent putting it up.",
         rule='comma_conjunction', rule_span=', and the traffic',
         opts=[', the traffic', 'the traffic', '; and the traffic',
               ', and the traffic'], key='D',
         faults={'A': ('comma_splice', ', the traffic'),
                 'B': ('run_on', 'the traffic'),
                 'C': ('wrong_mark', '; and the traffic')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['comma'],
                  marks_expected=1),
         why="A comma with a coordinating conjunction joins two independent clauses, and the "
             "sentence needs the conjunction to carry the irony.",
         trap="A has the comma and not the conjunction, and the length of the first clause "
              "hides it."),
    dict(strand='HUM-S10', pos=10,
         carrier="The critics who held that a poem's meaning is settled by the words on the "
                 "page taught two generations to read as though the author were unavailable "
                 "___ of asking what the poet had intended outlived the argument against it "
                 "by fifty years.",
         rule='subordinate_boundary', rule_span='because the habit',
         opts=[', the habit', 'because the habit', 'the habit', '; the habit'], key='B',
         faults={'A': ('comma_splice', ', the habit'), 'C': ('run_on', 'the habit'),
                 'D': ('wrong_mark', '; the habit')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=[],
                  marks_expected=0),
         why="A subordinate clause attaches without a boundary mark, so making the second clause subordinate removes the boundary question and states why "
             "the teaching mattered less than it looked.",
         trap="D uses a semicolon, which is grammatical and leaves the two facts side by "
              "side with no relation between them."),
])

SOC = dict(domain='SOC', note_ar=(
    "جمل العلوم الاجتماعية تقرن النتيجة بتفسيرها في جملة واحدة، وكلّ منهما جملة تامّة "
    "قائمة بنفسها. والفاصلة وحدها بينهما خطأ شائع جدّاً في كتابة التقارير والأبحاث، "
    "وعليه بُني هذا الفصل كلّه."), xs=[
    dict(strand='SOC-S01', pos=1,
         carrier="The wording of a question changes the answers it gets ___ of the options "
                 "changes them too.",
         rule='period_boundary', rule_span='. The order',
         opts=[', the order', '. The order', 'the order', '; and the order'], key='B',
         faults={'A': ('comma_splice', ', the order'), 'C': ('run_on', 'the order'),
                 'D': ('wrong_mark', '; and the order')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['period'],
                  marks_expected=1),
         why="A period separates two independent clauses, and two findings of equal weight "
             "read best as two sentences.",
         trap="A joins two whole clauses with a comma, which is the splice this chapter is "
              "about."),
    dict(strand='SOC-S02', pos=2,
         carrier="Matching two groups on the measured things leaves them unlike in the "
                 "unmeasured ones ___ does not have that problem.",
         rule='semicolon_boundary', rule_span='; randomization',
         opts=[', randomization', 'randomization', ': randomization',
               '; randomization'], key='D',
         faults={'A': ('comma_splice', ', randomization'),
                 'B': ('run_on', 'randomization'),
                 'C': ('wrong_mark', ': randomization')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses, which is right for a contrast this "
             "tight.",
         trap="C uses a colon, which would announce that the second clause explains the "
              "first instead of contradicting it."),
    dict(strand='SOC-S03', pos=3,
         carrier="Two measurements can rise and fall together for years without either one "
                 "causing the other ___ variable may have been moving both of them all "
                 "along.",
         rule='comma_conjunction', rule_span=', and a third',
         opts=[', and a third', ', a third', 'a third', '; and a third'], key='A',
         faults={'B': ('comma_splice', ', a third'), 'C': ('run_on', 'a third'),
                 'D': ('wrong_mark', '; and a third')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['comma'],
                  marks_expected=1),
         why="A comma and a coordinating conjunction join two independent clauses, and the "
             "second explains the first.",
         trap="B drops the conjunction and leaves the comma holding two sentences on its "
              "own."),
    dict(strand='SOC-S04', pos=4,
         carrier="A distribution with a long tail at one end pulls the mean away from the "
                 "middle ___ numbers are needed before anyone can picture it.",
         rule='period_boundary', rule_span='. Two',
         opts=[', two', 'two', '. Two', '; and two'], key='C',
         faults={'A': ('comma_splice', ', two'), 'B': ('run_on', 'two'),
                 'D': ('wrong_mark', '; and two')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['period'],
                  marks_expected=1),
         why="A period separates two independent clauses, and nothing about the pair makes "
             "the full stop unavailable.",
         trap="A is a splice between a fact and its consequence, where a comma feels like "
              "enough."),
    dict(strand='SOC-S05', pos=5,
         carrier="Five dollars promised on completion of a questionnaire buys a worse "
                 "response rate than a smaller sum would ___ paid in advance does better "
                 "than any promise.",
         rule='semicolon_boundary', rule_span='; a dollar',
         opts=[', a dollar', '; a dollar', 'a dollar', ': a dollar'], key='B',
         faults={'A': ('comma_splice', ', a dollar'), 'C': ('run_on', 'a dollar'),
                 'D': ('wrong_mark', ': a dollar')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses, and the second is the surprising "
             "half of a pair that belongs together.",
         trap="A is a comma splice between two findings, which a report would print without "
              "anyone noticing."),
    dict(strand='SOC-S06', pos=6,
         carrier="Seven confederates gave the same wrong answer calmly and in turn before "
                 "anyone asked the subject for his ___ had nothing at all to argue with and "
                 "about a third of the time went along with them.",
         rule='subordinate_boundary', rule_span='because the subject',
         opts=['because the subject', ', the subject', 'the subject', '; the subject'],
         key='A',
         faults={'B': ('comma_splice', ', the subject'),
                 'C': ('run_on', 'the subject'),
                 'D': ('wrong_mark', '; the subject')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=[],
                  marks_expected=0),
         why="A subordinate clause attaches without a boundary mark, so making the second clause subordinate attaches it without a mark and states why the "
             "experiment worked as it did.",
         trap="D uses a semicolon, which joins the clauses correctly and leaves the reason "
              "for the reader to guess."),
    dict(strand='SOC-S07', pos=7,
         carrier="A neighborhood laid out along a streetcar line kept the shape the line "
                 "gave it long after the cars had gone ___ were pulled up in the 1950s and "
                 "nothing about the street was redrawn.",
         rule='comma_conjunction', rule_span=', and the rails',
         opts=[', the rails', 'the rails', '; and the rails', ', and the rails'],
         key='D',
         faults={'A': ('comma_splice', ', the rails'), 'B': ('run_on', 'the rails'),
                 'C': ('wrong_mark', '; and the rails')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['comma'],
                  marks_expected=1),
         why="A comma with a coordinating conjunction joins two independent clauses, and the "
             "second fills in the first.",
         trap="A has the comma and no conjunction, which is the error a long first clause "
              "conceals."),
    dict(strand='SOC-S08', pos=8,
         carrier="A count of unemployment that includes only the people still actively "
                 "looking for work understates how bad a long recession has been ___ that "
                 "the monthly report publishes beside it moves differently and is almost "
                 "never quoted.",
         rule='semicolon_boundary', rule_span='; the figure',
         opts=[', the figure', 'the figure', '; the figure', ': the figure'], key='C',
         faults={'A': ('comma_splice', ', the figure'), 'B': ('run_on', 'the figure'),
                 'D': ('wrong_mark', ': the figure')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['semi'],
                  marks_expected=1),
         why="A semicolon joins two independent clauses, and the two measures belong in one "
             "sentence because the point is the comparison.",
         trap="A is a splice between two long clauses, which is where a splice is hardest to "
              "see at all."),
    dict(strand='SOC-S09', pos=9,
         carrier="The share of income going to the richest households can be computed from "
                 "tax returns in some countries and only from household surveys in others "
                 "___ kinds of source disagree most about exactly the households that the "
                 "measure was designed to describe.",
         rule='subordinate_boundary', rule_span='which is why the two',
         opts=['which is why the two', ', the two', 'the two', '; the two'], key='A',
         faults={'B': ('comma_splice', ', the two'), 'C': ('run_on', 'the two'),
                 'D': ('wrong_mark', '; the two')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=[],
                  marks_expected=0),
         why="A subordinate clause attaches without a boundary mark, so making the second clause subordinate attaches it without a mark and names the "
             "consequence the first clause has.",
         trap="D uses a semicolon, which is correct grammar and leaves the two halves "
              "standing side by side without a relation."),
    dict(strand='SOC-S10', pos=10,
         carrier="People asked how likely a rare event is do not consult any record of how "
                 "often it has happened but ask instead how easily an example of it comes "
                 "to mind ___ therefore follows what the newspapers reported last week "
                 "rather than what the century actually contains.",
         rule='period_boundary', rule_span='. The answer',
         opts=[', the answer', 'the answer', '. The answer', '; and the answer'],
         key='C',
         faults={'A': ('comma_splice', ', the answer'), 'B': ('run_on', 'the answer'),
                 'D': ('wrong_mark', '; and the answer')},
         ctx=dict(left_independent=True, right_independent=True, mark_ok=['period'],
                  marks_expected=1),
         why="A period separates two independent clauses, and after a first clause of this "
             "length the reader needs the stop.",
         trap="A joins two long clauses with a comma, which is the splice the whole chapter "
              "has been about."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
