# -*- coding: utf-8 -*-
"""Chapter 12 - restrictive and nonrestrictive elements. Home domain BIO.

Key plans: HIS ACDBADCBDB, BIO BDACBADCAC, PHY CABDCBADBD, HUM DBCADCBACA,
SOC ACDBADCBDB.

Every modifier in this chapter sits in the middle of its sentence rather than
at the end, so an enclosing pair of commas is genuinely a pair and unpaired
has something to measure. A sentence-final nonrestrictive modifier takes one
comma, and an item built on one would make unpaired fire on its own key.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 12

AR = dict(
    qaida="الوصف المحدِّد وغير المحدِّد: إذا كان الوصف هو الذي يعيّن المقصود فلا فواصل حوله، "
          "وإذا كان المقصود معيّناً من قبل فالوصف زيادة بيان يُحاط بفاصلتين. والمعيار واحد: "
          "احذف الوصف واقرأ الجملة، فإن بقيت تدلّ على الشيء نفسه فالوصف غير محدِّد.",
    kayf="يعرض اختبار سات الوصف ويحذف فواصله، فتكون الخيارات أربعة: بلا فاصلة، وبفاصلة "
         "واحدة، وبفاصلتين، وبضمير وصل غير مطابق. والسؤال الذي يحسم الأمر: هل سُمّي الشيء "
         "قبل الوصف؟ فإن كان اسماً علماً أو وُصف بأنه الوحيد فالفاصلتان لازمتان.",
    fakh="الفخّ الأوّل الفاصلة الواحدة، فهي تفتح ولا تغلق، والعين لا تلحظها. والفخّ الثاني "
         "أن الفاصلتين تبدوان أدباً في الكتابة فتُوضعان حيث لا موضع لهما، فيصير المعنى أن "
         "كلّ الأشياء كذلك لا واحداً منها.",
    sila="هذا الباب من أكثر أبواب الترقيم دوراناً في اختبار سات، وهو امتداد لفصل العبارات "
         "المعترضة، إلّا أن الحكم فيه معنويّ لا شكليّ: الفاصلتان تغيّران ما تدلّ عليه الجملة "
         "لا شكلها وحده.",
)

HIS = dict(domain='HIS', note_ar=(
    "في التاريخ والنظام المدني يأتي الوصف على المواد والقوانين والأشخاص، وكثيراً ما يكون "
    "الشيء مسمّى باسمه العلم كأن يقال مواد الكونفدرالية، فيكون الوصف بعده زيادة بيان "
    "محاطة بفاصلتين لا تحديداً."), xs=[
    dict(strand='HIS-S01', pos=1,
         carrier="The clause ___ gave Congress its power over the territories.",
         rule='restrictive_no_comma',
         rule_span='that the convention argued over longest',
         opts=['that the convention argued over longest',
               ', which the convention argued over longest,',
               ', which the convention argued over longest',
               'who the convention argued over longest'], key='A',
         faults={'B': ('restrictive_shift', ', which the convention argued over longest,'),
                 'C': ('unpaired', ', which the convention argued over longest'),
                 'D': ('wrong_relativizer', 'who the convention argued over longest')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="Which clause is meant has not been said, so the modifier is essential to the "
             "sentence and takes no commas at all.",
         trap="B shuts the modifier in commas, which claims the clause has already been "
              "named and leaves the reader asking which one."),
    dict(strand='HIS-S02', pos=2,
         carrier="The Northwest Ordinance ___ set the pattern for every territory admitted "
                 "after it.",
         rule='nonrestrictive_commas',
         rule_span=', passed under the Articles of Confederation,',
         opts=['passed under the Articles of Confederation',
               ', passed under the Articles of Confederation',
               ', passed under the Articles of Confederation,',
               ', passed, under the Articles of Confederation,'], key='C',
         faults={'A': ('restrictive_shift', 'passed under the Articles of Confederation'),
                 'B': ('unpaired', ', passed under the Articles of Confederation'),
                 'D': ('overpunctuated', ', passed, under the Articles of Confederation,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="The ordinance is named, so the phrase that follows is nonessential and is shut "
             "in a comma at each end.",
         trap="A drops both commas, which turns the phrase into the words that say which "
              "ordinance is meant."),
    dict(strand='HIS-S03', pos=3,
         carrier="The only part of the Compromise of 1850 ___ was the fugitive slave "
                 "provision.",
         rule='restrictive_no_comma',
         rule_span='that the South insisted on in writing',
         opts=[', which the South insisted on in writing,',
               'that the South insisted on in writing,',
               'who the South insisted on in writing',
               'that the South insisted on in writing'], key='D',
         faults={'A': ('restrictive_shift', ', which the South insisted on in writing,'),
                 'B': ('unpaired', 'that the South insisted on in writing,'),
                 'C': ('wrong_relativizer', 'who the South insisted on in writing')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The modifier is essential: it is the one thing that picks out which part of "
             "the Compromise the sentence means.",
         trap="A encloses the modifier in commas, which would have the sentence say that "
              "every part was insisted on in writing."),
    dict(strand='HIS-S04', pos=4,
         carrier="The Freedmen's Bureau ___ was shut down by Congress after seven years.",
         rule='nonrestrictive_commas',
         rule_span=', created in the last month of the war,',
         opts=['created in the last month of the war',
               ', created in the last month of the war,',
               ', created in the last month of the war',
               ', created, in the last month of the war,'], key='B',
         faults={'A': ('restrictive_shift', 'created in the last month of the war'),
                 'C': ('unpaired', ', created in the last month of the war'),
                 'D': ('overpunctuated', ', created, in the last month of the war,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="There was only one Freedmen's Bureau, so the phrase is nonessential and needs "
             "a comma on both sides of it.",
         trap="C opens the phrase with a comma and closes it with none, so the reader waits "
              "for the sentence to resume and it never does."),
    dict(strand='HIS-S05', pos=5,
         carrier="Lincoln's message to Congress mentions the general ___ by his title and "
                 "not by his name.",
         rule='restrictive_name',
         rule_span='who had refused to move in the spring',
         opts=['who had refused to move in the spring',
               ', who had refused to move in the spring,',
               ', who had refused to move in the spring',
               'which had refused to move in the spring'], key='A',
         faults={'B': ('restrictive_shift', ', who had refused to move in the spring,'),
                 'C': ('unpaired', ', who had refused to move in the spring'),
                 'D': ('wrong_relativizer', 'which had refused to move in the spring')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='person'),
         why="The sentence has not said which general, so the clause is doing the work of "
             "saying which one and cannot take commas.",
         trap="D uses which for a person, a fault no arrangement of commas can repair."),
    dict(strand='HIS-S06', pos=6,
         carrier="Thaddeus Stevens ___ held the Reconstruction committee together for four "
                 "years by nothing more than force of temper.",
         rule='nonrestrictive_name',
         rule_span=', who was already old and ill by 1865,',
         opts=['who was already old and ill by 1865',
               ', who was already old and ill by 1865',
               ', who was already old, and ill, by 1865,',
               ', who was already old and ill by 1865,'], key='D',
         faults={'A': ('restrictive_shift', 'who was already old and ill by 1865'),
                 'B': ('unpaired', ', who was already old and ill by 1865'),
                 'C': ('overpunctuated', ', who was already old, and ill, by 1865,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='person'),
         why="Stevens is already identified by his name, so the clause about him is set off "
             "by a comma at each end.",
         trap="A leaves the commas off, which makes the sentence mean whichever Stevens was "
              "old and ill by that year."),
    dict(strand='HIS-S07', pos=7,
         carrier="Of the thirteen states only the two ___ sent no delegates at all to the "
                 "Annapolis meeting of 1786.",
         rule='restrictive_no_comma',
         rule_span='that had already settled their western claims',
         opts=[', which had already settled their western claims,',
               'who had already settled their western claims',
               'that had already settled their western claims',
               'that had already settled their western claims,'], key='C',
         faults={'A': ('restrictive_shift',
                       ', which had already settled their western claims,'),
                 'B': ('wrong_relativizer',
                       'who had already settled their western claims'),
                 'D': ('unpaired', 'that had already settled their western claims,')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The modifier is essential, because without it the sentence names two states "
             "and gives the reader no way to tell which two.",
         trap="A adds the commas, which would say that all thirteen had settled their "
              "claims and that two of them happened to stay away."),
    dict(strand='HIS-S08', pos=8,
         carrier="The Articles of Confederation ___ left the national government with no "
                 "power to tax and no way of making a state pay.",
         rule='nonrestrictive_commas',
         rule_span=', which no state had wanted to amend in 1781,',
         opts=['which no state had wanted to amend in 1781',
               ', which no state had wanted to amend in 1781,',
               ', which no state, had wanted to amend, in 1781,',
               'which no state had wanted to amend in 1781,'], key='B',
         faults={'A': ('restrictive_shift',
                       'which no state had wanted to amend in 1781'),
                 'C': ('overpunctuated',
                       ', which no state, had wanted to amend, in 1781,'),
                 'D': ('unpaired', 'which no state had wanted to amend in 1781,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="Only one document bears that name, so the clause adds nonessential "
             "information and has to be enclosed in commas.",
         trap="D closes the clause with a comma but opens it with none, so the sentence "
              "loses its left-hand boundary altogether."),
    dict(strand='HIS-S09', pos=9,
         carrier="The one clause of the Fourteenth Amendment ___ has been argued in the "
                 "Supreme Court more often than the rest of the amendment together.",
         rule='restrictive_name',
         rule_span='that says no state shall deny equal protection',
         opts=[', which says no state shall deny equal protection,',
               ', which says no state shall deny equal protection',
               'who says no state shall deny equal protection',
               'that says no state shall deny equal protection'], key='D',
         faults={'A': ('restrictive_shift',
                       ', which says no state shall deny equal protection,'),
                 'B': ('unpaired', ', which says no state shall deny equal protection'),
                 'C': ('wrong_relativizer',
                       'who says no state shall deny equal protection')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The modifier says which one of the clauses is meant, and a modifier doing "
             "that work never takes commas, however long the sentence runs.",
         trap="B opens with a comma and closes without one, which leaves the clause half "
              "enclosed and the sentence impossible to parse."),
    dict(strand='HIS-S10', pos=10,
         carrier="Frederick Douglass ___ spent the last decade of his life arguing that the "
                 "amendments had been abandoned rather than merely left unenforced in the "
                 "South.",
         rule='nonrestrictive_name',
         rule_span=', who had written three autobiographies by then,',
         opts=['who had written three autobiographies by then',
               ', who had written three autobiographies by then,',
               ', who had written three autobiographies by then',
               ', who had written three autobiographies, by then,'], key='B',
         faults={'A': ('restrictive_shift', 'who had written three autobiographies by then'),
                 'C': ('unpaired', ', who had written three autobiographies by then'),
                 'D': ('overpunctuated',
                       ', who had written three autobiographies, by then,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='person'),
         why="Douglass is already identified by his name, so what the sentence adds about "
             "him belongs between two commas.",
         trap="A removes the commas, which makes the clause say which Douglass is meant "
              "rather than tell the reader more about him."),
])

BIO = dict(domain='BIO', note_ar=(
    "في الأحياء وعلوم الأرض يكون الشيء إمّا نوعاً مسمّى باسمه اللاتيني فالوصف بعده بيان "
    "محاط بفاصلتين، وإمّا نوعاً من بين أنواع فالوصف هو الذي يختاره من بينها فلا فاصلة "
    "حوله. وهذا الفرق هو أصعب ما في الباب وأكثره دوراناً."), xs=[
    dict(strand='BIO-S01', pos=1,
         carrier="The coelacanth ___ was known only from fossils until 1938.",
         rule='nonrestrictive_commas', rule_span=', a fish of the deep reefs,',
         opts=['a fish of the deep reefs', ', a fish of the deep reefs,',
               ', a fish of the deep reefs', ', a fish, of the deep reefs,'], key='B',
         faults={'A': ('restrictive_shift', 'a fish of the deep reefs'),
                 'C': ('unpaired', ', a fish of the deep reefs'),
                 'D': ('overpunctuated', ', a fish, of the deep reefs,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="The fish is named, so what the sentence adds about it is nonessential and "
             "goes between two commas.",
         trap="A takes the commas away, which turns the phrase into the words that say "
              "which coelacanth is meant."),
    dict(strand='BIO-S02', pos=2,
         carrier="The enzyme ___ is destroyed by a few minutes of boiling.",
         rule='restrictive_no_comma', rule_span='that breaks the starch down',
         opts=[', which breaks the starch down,', 'who breaks the starch down',
               ', which breaks the starch down', 'that breaks the starch down'], key='D',
         faults={'A': ('restrictive_shift', ', which breaks the starch down,'),
                 'B': ('wrong_relativizer', 'who breaks the starch down'),
                 'C': ('unpaired', ', which breaks the starch down')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="A cell holds hundreds of enzymes, so the clause is essential and takes no "
             "commas: it is what tells the reader which enzyme.",
         trap="A sets the clause between commas, which would say that every enzyme in the "
              "cell breaks starch down."),
    dict(strand='BIO-S03', pos=3,
         carrier="Barbara McClintock ___ worked on maize for forty years before the prize "
                 "came.",
         rule='nonrestrictive_name',
         rule_span=', who published her transposition papers in 1950,',
         opts=[', who published her transposition papers in 1950,',
               'who published her transposition papers in 1950',
               ', who published her transposition papers in 1950',
               ', who published her transposition papers, in 1950,'], key='A',
         faults={'B': ('restrictive_shift', 'who published her transposition papers in 1950'),
                 'C': ('unpaired', ', who published her transposition papers in 1950'),
                 'D': ('overpunctuated',
                       ', who published her transposition papers, in 1950,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='person'),
         why="McClintock is already identified by her name, so the clause about her papers "
             "is enclosed in commas.",
         trap="B drops the commas, which makes the clause pick out one McClintock from "
              "several and leaves the sentence saying less, not more."),
    dict(strand='BIO-S04', pos=4,
         carrier="In a mixed culture the species ___ is the one that will dominate the "
                 "flask within a week.",
         rule='restrictive_name',
         rule_span='that divides fastest at thirty degrees',
         opts=[', which divides fastest at thirty degrees,',
               'who divides fastest at thirty degrees',
               'that divides fastest at thirty degrees',
               'that divides fastest at thirty degrees,'], key='C',
         faults={'A': ('restrictive_shift', ', which divides fastest at thirty degrees,'),
                 'B': ('wrong_relativizer', 'who divides fastest at thirty degrees'),
                 'D': ('unpaired', 'that divides fastest at thirty degrees,')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The clause says which one of the species in the flask is meant, and a clause "
             "doing that takes no commas.",
         trap="A encloses it, which would make the sentence claim that all the species in "
              "the culture divide at the same rate."),
    dict(strand='BIO-S05', pos=5,
         carrier="The Burgess Shale ___ holds the best record anywhere of the animals of "
                 "the middle Cambrian.",
         rule='nonrestrictive_commas',
         rule_span=', quarried in British Columbia since 1909,',
         opts=['quarried in British Columbia since 1909',
               ', quarried in British Columbia since 1909,',
               ', quarried in British Columbia since 1909',
               ', quarried, in British Columbia, since 1909,'], key='B',
         faults={'A': ('restrictive_shift', 'quarried in British Columbia since 1909'),
                 'C': ('unpaired', ', quarried in British Columbia since 1909'),
                 'D': ('overpunctuated', ', quarried, in British Columbia, since 1909,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="There is one Burgess Shale, so the phrase about the quarry is nonessential "
             "and sits inside a pair of commas.",
         trap="C gives the phrase an opening comma and no closing one, so the sentence "
              "never comes back to its verb."),
    dict(strand='BIO-S06', pos=6,
         carrier="A culture kept in the dark will lose only the pigments ___ and will hold "
                 "on to all the rest for weeks.",
         rule='restrictive_no_comma',
         rule_span='that the cell makes in response to light',
         opts=['that the cell makes in response to light',
               ', which the cell makes in response to light,',
               ', which the cell makes in response to light',
               'who the cell makes in response to light'], key='A',
         faults={'B': ('restrictive_shift', ', which the cell makes in response to light,'),
                 'C': ('unpaired', ', which the cell makes in response to light'),
                 'D': ('wrong_relativizer', 'who the cell makes in response to light')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="Only is the word that gives the game away: the clause is essential, because "
             "it divides the pigments that go from the pigments that stay.",
         trap="B adds the commas, which would say that the cell makes all its pigments in "
              "response to light and loses all of them."),
    dict(strand='BIO-S07', pos=7,
         carrier="The Antarctic ice sheet ___ holds about seven tenths of the fresh water "
                 "on the surface of the earth.",
         rule='nonrestrictive_name',
         rule_span=', which is nowhere less than a mile thick,',
         opts=['which is nowhere less than a mile thick',
               ', which is nowhere less than a mile thick',
               ', which is nowhere less than a mile, thick,',
               ', which is nowhere less than a mile thick,'], key='D',
         faults={'A': ('restrictive_shift', 'which is nowhere less than a mile thick'),
                 'B': ('unpaired', ', which is nowhere less than a mile thick'),
                 'C': ('overpunctuated', ', which is nowhere less than a mile, thick,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="The sheet is already identified by name, so the clause about its thickness is "
             "an addition and takes a comma at each end.",
         trap="A leaves both commas out, which says that one Antarctic ice sheet among "
              "several is the thick one."),
    dict(strand='BIO-S08', pos=8,
         carrier="Among the ground finches of the Galapagos the one species ___ was the "
                 "species that came through the drought of 1977.",
         rule='restrictive_name',
         rule_span='that could crack the largest seeds',
         opts=[', which could crack the largest seeds,',
               ', which could crack the largest seeds',
               'that could crack the largest seeds',
               'who could crack the largest seeds'], key='C',
         faults={'A': ('restrictive_shift', ', which could crack the largest seeds,'),
                 'B': ('unpaired', ', which could crack the largest seeds'),
                 'D': ('wrong_relativizer', 'who could crack the largest seeds')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The clause says which one of the finches survived, which is the whole point "
             "of the sentence, so it stands without commas.",
         trap="A encloses the clause, and the sentence then says that all the ground "
              "finches could crack the largest seeds."),
    dict(strand='BIO-S09', pos=9,
         carrier="The Great Barrier Reef ___ lost about half of its shallow-water coral in "
                 "the two bleaching summers of 2016 and 2017 alone.",
         rule='nonrestrictive_name',
         rule_span=', which is not one reef but some three thousand of them,',
         opts=[', which is not one reef but some three thousand of them,',
               'which is not one reef but some three thousand of them',
               ', which is not one reef but some three thousand of them',
               ', which is not one reef, but some three thousand of them,'], key='A',
         faults={'B': ('restrictive_shift',
                       'which is not one reef but some three thousand of them'),
                 'C': ('unpaired',
                       ', which is not one reef but some three thousand of them'),
                 'D': ('overpunctuated',
                       ', which is not one reef, but some three thousand of them,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="The reef is already identified, so the correction the clause offers is an "
             "addition to the sentence and is fenced by commas.",
         trap="C opens the clause and never closes it, so the reader loses track of where "
              "the main sentence picks up again."),
    dict(strand='BIO-S10', pos=10,
         carrier="In a lake that has begun to lose its oxygen through the summer the first "
                 "fish ___ are the ones a fisherman notices, and the carp are the last to "
                 "go.",
         rule='restrictive_name',
         rule_span='that need the coldest and deepest water',
         opts=[', which need the coldest and deepest water,',
               'that need the coldest and deepest water,',
               'that need the coldest and deepest water',
               'who need the coldest and deepest water'], key='C',
         faults={'A': ('restrictive_shift', ', which need the coldest and deepest water,'),
                 'B': ('unpaired', 'that need the coldest and deepest water,'),
                 'D': ('wrong_relativizer', 'who need the coldest and deepest water')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The clause says which one of the kinds of fish goes first, so no commas may "
             "stand around it however long the sentence has grown.",
         trap="B closes the clause with a comma that nothing opened, which is the hardest "
              "of these faults to see on the page."),
])

PHY = dict(domain='PHY', note_ar=(
    "في العلوم الفيزيائية يأتي الوصف على الأجهزة والتجارب والكمّيات، والجملة في الغالب "
    "مبنيّة للمجهول فيطول ما بين الموصوف ووصفه. ومع ذلك فالحكم واحد: إن كان الجهاز "
    "واحداً معلوماً فالفاصلتان، وإن كان واحداً من عدّة فلا فاصلة."), xs=[
    dict(strand='PHY-S01', pos=1,
         carrier="The wire ___ carried much the larger share of the current.",
         rule='restrictive_no_comma', rule_span='that had the smaller resistance',
         opts=[', which had the smaller resistance,',
               ', which had the smaller resistance',
               'that had the smaller resistance', 'who had the smaller resistance'],
         key='C',
         faults={'A': ('restrictive_shift', ', which had the smaller resistance,'),
                 'B': ('unpaired', ', which had the smaller resistance'),
                 'D': ('wrong_relativizer', 'who had the smaller resistance')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="Two wires are in the circuit, so the clause is essential and bare: it is what "
             "says which of the two is meant.",
         trap="A puts commas round the clause, which would say that both wires had the "
              "smaller resistance."),
    dict(strand='PHY-S02', pos=2,
         carrier="The second trial ___ gave a figure twice the size of the first.",
         rule='nonrestrictive_commas',
         rule_span=', run with the heater switched off,',
         opts=[', run with the heater switched off,',
               'run with the heater switched off',
               ', run with the heater switched off',
               ', run, with the heater switched off,'], key='A',
         faults={'B': ('restrictive_shift', 'run with the heater switched off'),
                 'C': ('unpaired', ', run with the heater switched off'),
                 'D': ('overpunctuated', ', run, with the heater switched off,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="Second has already said which trial, so the phrase about the heater is "
             "nonessential and takes a comma on each side.",
         trap="B leaves the phrase bare, which implies that there were several second "
              "trials and this was the one without the heater."),
    dict(strand='PHY-S03', pos=3,
         carrier="Of the four pendulums only the one ___ kept time to better than a second "
                 "a day.",
         rule='restrictive_name', rule_span='that hung from a steel wire',
         opts=[', which hung from a steel wire,', 'that hung from a steel wire',
               ', which hung from a steel wire', 'who hung from a steel wire'], key='B',
         faults={'A': ('restrictive_shift', ', which hung from a steel wire,'),
                 'C': ('unpaired', ', which hung from a steel wire'),
                 'D': ('wrong_relativizer', 'who hung from a steel wire')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The clause says which one of the four pendulums kept time, so it belongs to "
             "the noun without any comma between them.",
         trap="A encloses the clause, which would say that all four hung from steel wire "
              "and only one of them worked."),
    dict(strand='PHY-S04', pos=4,
         carrier="The 1919 eclipse expedition ___ measured a deflection of about two "
                 "seconds of arc.",
         rule='nonrestrictive_commas',
         rule_span=', which sailed to Principe and to Brazil,',
         opts=['which sailed to Principe and to Brazil',
               ', which sailed to Principe and to Brazil',
               ', which sailed to Principe, and to Brazil,',
               ', which sailed to Principe and to Brazil,'], key='D',
         faults={'A': ('restrictive_shift', 'which sailed to Principe and to Brazil'),
                 'B': ('unpaired', ', which sailed to Principe and to Brazil'),
                 'C': ('overpunctuated', ', which sailed to Principe, and to Brazil,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="The year and the word eclipse have identified the expedition, so the clause "
             "is nonessential and is closed off at both ends.",
         trap="A removes the commas, which makes the clause distinguish this expedition "
              "from other 1919 eclipse expeditions that did not exist."),
    dict(strand='PHY-S05', pos=5,
         carrier="A capacitor of this kind will hold its charge for hours if the dielectric "
                 "___ is thick enough.",
         rule='restrictive_no_comma', rule_span='that separates the plates',
         opts=[', which separates the plates,', 'who separates the plates',
               'that separates the plates', 'that separates the plates,'], key='C',
         faults={'A': ('restrictive_shift', ', which separates the plates,'),
                 'B': ('wrong_relativizer', 'who separates the plates'),
                 'D': ('unpaired', 'that separates the plates,')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The clause is essential because dielectric on its own does not say which "
             "layer of the capacitor the sentence has in mind.",
         trap="D gives the clause a closing comma without an opening one, and the sentence "
              "then seems to break off before its verb."),
    dict(strand='PHY-S06', pos=6,
         carrier="Absolute zero ___ has been approached to within a few billionths of a "
                 "degree but has never been reached.",
         rule='nonrestrictive_name',
         rule_span=', which is a limit rather than a temperature,',
         opts=['which is a limit rather than a temperature',
               ', which is a limit rather than a temperature,',
               ', which is a limit rather than a temperature',
               ', which is a limit, rather than a temperature,'], key='B',
         faults={'A': ('restrictive_shift',
                       'which is a limit rather than a temperature'),
                 'C': ('unpaired', ', which is a limit rather than a temperature'),
                 'D': ('overpunctuated', ', which is a limit, rather than a temperature,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="Absolute zero is already identified by its name, so the clause that corrects "
             "the reader's picture of it is enclosed in commas.",
         trap="A drops the commas, which leaves the clause selecting one absolute zero from "
              "a field of them."),
    dict(strand='PHY-S07', pos=7,
         carrier="In the spectrum of hydrogen the only lines ___ fall in the visible range, "
                 "and all the others lie in the ultraviolet.",
         rule='restrictive_name',
         rule_span='that end on the second energy level',
         opts=['that end on the second energy level',
               ', which end on the second energy level,',
               ', which end on the second energy level',
               'who end on the second energy level'], key='A',
         faults={'B': ('restrictive_shift', ', which end on the second energy level,'),
                 'C': ('unpaired', ', which end on the second energy level'),
                 'D': ('wrong_relativizer', 'who end on the second energy level')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The clause says which one of the families of lines is visible, so it takes no "
             "commas and the word only depends on it.",
         trap="B sets the clause in commas, which would put every line of hydrogen in the "
              "visible range and contradict the rest of the sentence."),
    dict(strand='PHY-S08', pos=8,
         carrier="The kilogram ___ is now defined from the Planck constant rather than from "
                 "a lump of metal in a vault.",
         rule='nonrestrictive_commas',
         rule_span=', the last of the base units to be redefined,',
         opts=['the last of the base units to be redefined',
               ', the last of the base units to be redefined',
               ', the last of the base units, to be redefined,',
               ', the last of the base units to be redefined,'], key='D',
         faults={'A': ('restrictive_shift',
                       'the last of the base units to be redefined'),
                 'B': ('unpaired', ', the last of the base units to be redefined'),
                 'C': ('overpunctuated',
                       ', the last of the base units, to be redefined,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="There is only one kilogram, so the appositive is nonessential and both of its "
             "commas have to be there.",
         trap="A leaves the appositive bare, which reads as though the sentence were "
              "choosing among several kilograms."),
    dict(strand='PHY-S09', pos=9,
         carrier="When a beam of light passes from water into air at a shallow angle the "
                 "part of the beam ___ never leaves the water at all.",
         rule='restrictive_no_comma',
         rule_span='that meets the surface beyond the critical angle',
         opts=[', which meets the surface beyond the critical angle,',
               'that meets the surface beyond the critical angle',
               ', which meets the surface beyond the critical angle',
               'who meets the surface beyond the critical angle'], key='B',
         faults={'A': ('restrictive_shift',
                       ', which meets the surface beyond the critical angle,'),
                 'C': ('unpaired',
                       ', which meets the surface beyond the critical angle'),
                 'D': ('wrong_relativizer',
                       'who meets the surface beyond the critical angle')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The clause is essential: the sentence is about one part of the beam and not "
             "the beam, and the clause is what makes the difference.",
         trap="A encloses the clause, which would say that no light at all escapes the "
              "water, whatever angle it meets the surface at."),
    dict(strand='PHY-S10', pos=10,
         carrier="The Michelson-Morley experiment ___ is taught as the experiment that "
                 "failed, although its authors spent years hunting for the fault they were "
                 "sure lay in their own apparatus.",
         rule='nonrestrictive_name',
         rule_span=', which was repeated in Cleveland in 1887,',
         opts=['which was repeated in Cleveland in 1887',
               ', which was repeated in Cleveland in 1887',
               ', which was repeated in Cleveland, in 1887,',
               ', which was repeated in Cleveland in 1887,'], key='D',
         faults={'A': ('restrictive_shift', 'which was repeated in Cleveland in 1887'),
                 'B': ('unpaired', ', which was repeated in Cleveland in 1887'),
                 'C': ('overpunctuated', ', which was repeated in Cleveland, in 1887,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="The experiment is already identified by the two names, so the clause about "
             "the repetition is an addition and is shut in commas.",
         trap="B opens the clause with a comma and closes it with none, which is easy to "
              "miss in a sentence that already holds two other commas."),
])

HUM = dict(domain='HUM', note_ar=(
    "في الإنسانيات يكون الموصوف في الغالب مسمّى: كاتباً باسمه أو كتاباً بعنوانه، فالوصف "
    "بعده زيادة بيان بين فاصلتين. فإذا جاء الموصوف مجهولاً كأن يقال القصيدة أو النسخة "
    "صار الوصف هو الذي يعيّنه فلا فاصلة."), xs=[
    dict(strand='HUM-S01', pos=1,
         carrier="Middlemarch ___ was published in eight parts over a single year.",
         rule='nonrestrictive_commas', rule_span=', the longest of the novels,',
         opts=['the longest of the novels', ', the longest of the novels',
               ', the longest, of the novels,', ', the longest of the novels,'], key='D',
         faults={'A': ('restrictive_shift', 'the longest of the novels'),
                 'B': ('unpaired', ', the longest of the novels'),
                 'C': ('overpunctuated', ', the longest, of the novels,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="The novel is named in the first word, so the appositive after it is "
             "nonessential and takes a comma at each end.",
         trap="A leaves the appositive bare, which reads as though several books were "
              "called Middlemarch and this is the long one."),
    dict(strand='HUM-S02', pos=2,
         carrier="The sonnet ___ is the one that every anthology prints.",
         rule='restrictive_no_comma', rule_span='that opens with a question',
         opts=[', which opens with a question,', 'that opens with a question',
               ', which opens with a question', 'who opens with a question'], key='B',
         faults={'A': ('restrictive_shift', ', which opens with a question,'),
                 'C': ('unpaired', ', which opens with a question'),
                 'D': ('wrong_relativizer', 'who opens with a question')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The sonnet has not been named, so the clause is essential and bare: it is "
             "the only thing telling the reader which sonnet.",
         trap="A sets the clause in commas, which would say that every sonnet opens with a "
              "question and one of them is anthologized."),
    dict(strand='HUM-S03', pos=3,
         carrier="Zora Neale Hurston ___ was buried in an unmarked grave and found again "
                 "thirty years later.",
         rule='nonrestrictive_name',
         rule_span=', who had trained as an anthropologist,',
         opts=['who had trained as an anthropologist',
               ', who had trained as an anthropologist',
               ', who had trained as an anthropologist,',
               ', who had trained, as an anthropologist,'], key='C',
         faults={'A': ('restrictive_shift', 'who had trained as an anthropologist'),
                 'B': ('unpaired', ', who had trained as an anthropologist'),
                 'D': ('overpunctuated', ', who had trained, as an anthropologist,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='person'),
         why="Hurston is already identified by her three names, so the clause about her "
             "training is enclosed in a pair of commas.",
         trap="A takes both commas out, which makes the clause single out one Hurston from "
              "a crowd of them."),
    dict(strand='HUM-S04', pos=4,
         carrier="Of the four quartos only the one ___ carries the lines the editors now "
                 "print.",
         rule='restrictive_name',
         rule_span='that the players themselves set in type',
         opts=['that the players themselves set in type',
               ', which the players themselves set in type,',
               ', which the players themselves set in type',
               'who the players themselves set in type'], key='A',
         faults={'B': ('restrictive_shift',
                       ', which the players themselves set in type,'),
                 'C': ('unpaired', ', which the players themselves set in type'),
                 'D': ('wrong_relativizer', 'who the players themselves set in type')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The clause says which one of the four quartos is meant, and only is left "
             "without a job if the clause is fenced off.",
         trap="B encloses the clause, which would say that the players set all four quartos "
              "in type themselves."),
    dict(strand='HUM-S05', pos=5,
         carrier="The first folio ___ gathers thirty-six plays and leaves two of them out.",
         rule='nonrestrictive_commas',
         rule_span=', printed seven years after the poet died,',
         opts=['printed seven years after the poet died',
               ', printed seven years after the poet died',
               ', printed seven years, after the poet died,',
               ', printed seven years after the poet died,'], key='D',
         faults={'A': ('restrictive_shift', 'printed seven years after the poet died'),
                 'B': ('unpaired', ', printed seven years after the poet died'),
                 'C': ('overpunctuated', ', printed seven years, after the poet died,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="First has already said which folio, so the phrase about the printing is "
             "nonessential and needs both of its commas.",
         trap="A drops the commas, and the phrase then claims to distinguish this first "
              "folio from other first folios."),
    dict(strand='HUM-S06', pos=6,
         carrier="In a first-person novel the reader comes to trust only the sentences ___ "
                 "and discounts a good deal of the rest.",
         rule='restrictive_no_comma',
         rule_span='that the narrator has no reason to shade',
         opts=[', which the narrator has no reason to shade,',
               ', which the narrator has no reason to shade',
               'that the narrator has no reason to shade',
               'who the narrator has no reason to shade'], key='C',
         faults={'A': ('restrictive_shift',
                       ', which the narrator has no reason to shade,'),
                 'B': ('unpaired', ', which the narrator has no reason to shade'),
                 'D': ('wrong_relativizer', 'who the narrator has no reason to shade')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The clause is essential because the sentence trusts some sentences and not "
             "others, and the clause is what draws the line.",
         trap="A encloses the clause, which would have the reader trusting every sentence "
              "in the novel and the word only meaning nothing."),
    dict(strand='HUM-S07', pos=7,
         carrier="Chinua Achebe ___ went on to say that the novel had taught generations to "
                 "read Africa as a backdrop.",
         rule='nonrestrictive_name',
         rule_span=', who had read Heart of Darkness as a student,',
         opts=['who had read Heart of Darkness as a student',
               ', who had read Heart of Darkness as a student,',
               ', who had read Heart of Darkness as a student',
               ', who had read Heart of Darkness, as a student,'], key='B',
         faults={'A': ('restrictive_shift',
                       'who had read Heart of Darkness as a student'),
                 'C': ('unpaired', ', who had read Heart of Darkness as a student'),
                 'D': ('overpunctuated',
                       ', who had read Heart of Darkness, as a student,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='person'),
         why="Achebe is already identified by name, so the clause about his reading is an "
             "addition and sits between two commas.",
         trap="A removes the commas, which turns an addition into a way of saying which "
              "Achebe the sentence means."),
    dict(strand='HUM-S08', pos=8,
         carrier="The one translation of the Odyssey ___ has outsold all the others in "
                 "English put together since the war.",
         rule='restrictive_name',
         rule_span='that keeps the line count of the Greek',
         opts=['that keeps the line count of the Greek',
               ', which keeps the line count of the Greek,',
               'that keeps the line count of the Greek,',
               'who keeps the line count of the Greek'], key='A',
         faults={'B': ('restrictive_shift', ', which keeps the line count of the Greek,'),
                 'C': ('unpaired', 'that keeps the line count of the Greek,'),
                 'D': ('wrong_relativizer', 'who keeps the line count of the Greek')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The clause says which one of the many translations has sold, so it joins the "
             "noun with nothing between them.",
         trap="C ends the clause with a comma and begins it with none, which breaks the "
              "subject of the sentence in half."),
    dict(strand='HUM-S09', pos=9,
         carrier="The last chapter of A Clockwork Orange ___ was left out of the American "
                 "edition for twenty-five years and restored to it only in 1986.",
         rule='nonrestrictive_commas',
         rule_span=', in which the narrator grows tired of violence,',
         opts=['in which the narrator grows tired of violence',
               ', in which the narrator grows tired of violence',
               ', in which the narrator grows tired of violence,',
               ', in which the narrator grows tired, of violence,'], key='C',
         faults={'A': ('restrictive_shift',
                       'in which the narrator grows tired of violence'),
                 'B': ('unpaired', ', in which the narrator grows tired of violence'),
                 'D': ('overpunctuated',
                       ', in which the narrator grows tired, of violence,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="The last chapter of a named novel is one chapter and no other, so the clause "
             "about it is nonessential and is closed at both ends.",
         trap="A leaves the clause bare, which would imply that the novel has several last "
              "chapters and this is the gentle one."),
    dict(strand='HUM-S10', pos=10,
         carrier="Among the eighteen hundred poems that Dickinson left behind her in "
                 "manuscript the few ___ are the ones that every reader still meets first.",
         rule='restrictive_name',
         rule_span='that her first editors chose to retitle',
         opts=['that her first editors chose to retitle',
               ', which her first editors chose to retitle,',
               ', which her first editors chose to retitle',
               'who her first editors chose to retitle'], key='A',
         faults={'B': ('restrictive_shift', ', which her first editors chose to retitle,'),
                 'C': ('unpaired', ', which her first editors chose to retitle'),
                 'D': ('wrong_relativizer', 'who her first editors chose to retitle')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The clause says which one of the eighteen hundred groups of poems is meant, "
             "so the few and the clause belong together without a mark.",
         trap="B fences the clause off, which would say that the editors retitled all "
              "eighteen hundred poems."),
])

SOC = dict(domain='SOC', note_ar=(
    "في العلوم الاجتماعية يكون الموصوف فئة من الناس أو مقياساً من المقاييس، والوصف هو "
    "الذي يحدّد أيّ فئة وأيّ مقياس، فحذف فاصلته أو زيادتها يغيّر الرقم الذي تتحدّث عنه "
    "الجملة لا شكلها."), xs=[
    dict(strand='SOC-S01', pos=1,
         carrier="The households ___ were counted twice in the 1950 return.",
         rule='restrictive_no_comma', rule_span='that had moved during the week',
         opts=['that had moved during the week', ', which had moved during the week,',
               ', which had moved during the week', 'who had moved during the week'],
         key='A',
         faults={'B': ('restrictive_shift', ', which had moved during the week,'),
                 'C': ('unpaired', ', which had moved during the week'),
                 'D': ('wrong_relativizer', 'who had moved during the week')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="Some households were counted twice and most were not, so the clause is "
             "essential and goes without commas.",
         trap="B encloses the clause, which would have every household in the country "
              "moving that week and being counted twice."),
    dict(strand='SOC-S02', pos=2,
         carrier="The 1950 census ___ counted three fifths of the country as urban.",
         rule='nonrestrictive_commas',
         rule_span=', the first to be taken partly by mail,',
         opts=['the first to be taken partly by mail',
               ', the first to be taken partly by mail',
               ', the first to be taken partly by mail,',
               ', the first to be taken partly, by mail,'], key='C',
         faults={'A': ('restrictive_shift', 'the first to be taken partly by mail'),
                 'B': ('unpaired', ', the first to be taken partly by mail'),
                 'D': ('overpunctuated', ', the first to be taken partly, by mail,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="The year has identified the census, so the appositive is nonessential and "
             "takes a comma on both sides.",
         trap="B opens the appositive and leaves it open, so the reader cannot tell where "
              "the subject of counted ends."),
    dict(strand='SOC-S03', pos=3,
         carrier="Of the three measures of poverty in common use the one ___ gives much the "
                 "lowest figure.",
         rule='restrictive_name',
         rule_span='that counts income after taxes and transfers',
         opts=[', which counts income after taxes and transfers,',
               ', which counts income after taxes and transfers',
               'who counts income after taxes and transfers',
               'that counts income after taxes and transfers'], key='D',
         faults={'A': ('restrictive_shift',
                       ', which counts income after taxes and transfers,'),
                 'B': ('unpaired', ', which counts income after taxes and transfers'),
                 'C': ('wrong_relativizer',
                       'who counts income after taxes and transfers')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The clause says which one of the three measures is meant, so it cannot be "
             "shut away in commas without emptying the sentence.",
         trap="A sets the clause between commas, which would say that all three measures "
              "count income the same way."),
    dict(strand='SOC-S04', pos=4,
         carrier="Jane Addams ___ wrote that the settlement house had taught her more than "
                 "her reading had.",
         rule='nonrestrictive_name',
         rule_span=', who had founded Hull House in 1889,',
         opts=['who had founded Hull House in 1889',
               ', who had founded Hull House in 1889,',
               ', who had founded Hull House in 1889',
               ', who had founded Hull House, in 1889,'], key='B',
         faults={'A': ('restrictive_shift', 'who had founded Hull House in 1889'),
                 'C': ('unpaired', ', who had founded Hull House in 1889'),
                 'D': ('overpunctuated', ', who had founded Hull House, in 1889,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='person'),
         why="Addams is already identified by her name, so the clause about Hull House is "
             "an addition and is fenced by commas.",
         trap="A leaves the clause bare, which reads as though the sentence were choosing "
              "between two women of that name."),
    dict(strand='SOC-S05', pos=5,
         carrier="A question ___ will be answered differently by the same person in June "
                 "and in November.",
         rule='restrictive_no_comma',
         rule_span="that asks about last year's income",
         opts=["that asks about last year's income",
               ", which asks about last year's income,",
               ", which asks about last year's income",
               "who asks about last year's income"], key='A',
         faults={'B': ('restrictive_shift', ", which asks about last year's income,"),
                 'C': ('unpaired', ", which asks about last year's income"),
                 'D': ('wrong_relativizer', "who asks about last year's income")},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="A question is any question until the clause narrows it, so the clause is "
             "essential and bare.",
         trap="B encloses the clause, which would say that every question on every form "
              "asks about last year's income."),
    dict(strand='SOC-S06', pos=6,
         carrier="The Moynihan report ___ was read as an attack on the families it had set "
                 "out to describe.",
         rule='nonrestrictive_commas',
         rule_span=', written inside the Department of Labor in 1965,',
         opts=['written inside the Department of Labor in 1965',
               ', written inside the Department of Labor in 1965',
               ', written inside the Department of Labor, in 1965,',
               ', written inside the Department of Labor in 1965,'], key='D',
         faults={'A': ('restrictive_shift',
                       'written inside the Department of Labor in 1965'),
                 'B': ('unpaired', ', written inside the Department of Labor in 1965'),
                 'C': ('overpunctuated',
                       ', written inside the Department of Labor, in 1965,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="The report is identified by the name of its author, so the phrase about where "
             "it was written is nonessential and needs two commas.",
         trap="A drops both commas, which implies that there are several Moynihan reports "
              "and this is the departmental one."),
    dict(strand='SOC-S07', pos=7,
         carrier="In every survey of this kind the respondents ___ are the ones whose "
                 "answers shift most between one wave and the next.",
         rule='restrictive_name',
         rule_span='whom the interviewers reach on a first call',
         opts=[', whom the interviewers reach on a first call,',
               ', whom the interviewers reach on a first call',
               'whom the interviewers reach on a first call',
               'which the interviewers reach on a first call'], key='C',
         faults={'A': ('restrictive_shift',
                       ', whom the interviewers reach on a first call,'),
                 'B': ('unpaired', ', whom the interviewers reach on a first call'),
                 'D': ('wrong_relativizer',
                       'which the interviewers reach on a first call')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='person'),
         why="The clause says which one of the groups of respondents is meant, so it takes "
             "no commas, and whom is the form the object of reach requires.",
         trap="D uses which for people, which the sentence cannot carry whatever its "
              "punctuation."),
    dict(strand='SOC-S08', pos=8,
         carrier="W. E. B. Du Bois ___ walked the Seventh Ward street by street and "
                 "counted all of its households himself.",
         rule='nonrestrictive_name',
         rule_span=', who had been trained in Berlin,',
         opts=['who had been trained in Berlin', ', who had been trained in Berlin,',
               ', who had been trained in Berlin', ', who had been trained, in Berlin,'],
         key='B',
         faults={'A': ('restrictive_shift', 'who had been trained in Berlin'),
                 'C': ('unpaired', ', who had been trained in Berlin'),
                 'D': ('overpunctuated', ', who had been trained, in Berlin,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='person'),
         why="Du Bois is already identified by name, so the clause about his training is an "
             "addition and belongs between a pair of commas.",
         trap="A takes the commas away, which asks the reader to pick this Du Bois out from "
              "others who were not trained in Berlin."),
    dict(strand='SOC-S09', pos=9,
         carrier="When a city counts the people sleeping outside on one night in January "
                 "the part of the population ___ is the only part the published figure "
                 "describes.",
         rule='restrictive_no_comma',
         rule_span='that has nowhere indoors to go at all',
         opts=[', which has nowhere indoors to go at all,',
               ', which has nowhere indoors to go at all',
               'who has nowhere indoors to go at all',
               'that has nowhere indoors to go at all'], key='D',
         faults={'A': ('restrictive_shift',
                       ', which has nowhere indoors to go at all,'),
                 'B': ('unpaired', ', which has nowhere indoors to go at all'),
                 'C': ('wrong_relativizer', 'who has nowhere indoors to go at all')},
         ctx=dict(enclosed=False, pair='comma', marks_expected=0, antecedent='thing'),
         why="The clause is essential because the sentence is about one part of the "
             "population and the clause is the only thing that marks that part off.",
         trap="A encloses the clause, and the count then covers the whole population of the "
              "city rather than the part that sleeps outside."),
    dict(strand='SOC-S10', pos=10,
         carrier="The General Social Survey ___ is the reason that sociologists can say "
                 "anything at all about how American opinion has moved since the Nixon "
                 "years.",
         rule='nonrestrictive_commas',
         rule_span=', which has asked some of the same questions since 1972,',
         opts=['which has asked some of the same questions since 1972',
               ', which has asked some of the same questions since 1972,',
               ', which has asked some of the same questions since 1972',
               ', which has asked some of the same questions, since 1972,'], key='B',
         faults={'A': ('restrictive_shift',
                       'which has asked some of the same questions since 1972'),
                 'C': ('unpaired',
                       ', which has asked some of the same questions since 1972'),
                 'D': ('overpunctuated',
                       ', which has asked some of the same questions, since 1972,')},
         ctx=dict(enclosed=True, pair='comma', marks_expected=2, antecedent='thing'),
         why="The survey is named, so the clause about its questions is nonessential, and a "
             "nonessential clause is closed at both ends.",
         trap="A leaves the clause unpunctuated, which makes it select one General Social "
              "Survey from several that do not exist."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
