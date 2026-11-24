# -*- coding: utf-8 -*-
"""Plumbline Book 3 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Starting Point ----------------
S["qc00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each, from an academic passage",
    ["What you have","An example"],
    [["Nouns that carry a question","What was the <b>purpose</b> of the <b>second trial</b>?"],
     ["Synonyms","<i>rose</i> &middot; <i>increased</i> &middot; <i>grew</i> &middot; <i>climbed</i>"],
     ["Numbers and dates","in 1948 &middot; about 12 per cent &middot; one in fifty"],
     ["Reference words","<i>this</i> &middot; <i>these</i> &middot; <i>such</i> &middot; <i>the latter</i>"],
     ["Negatives","<i>not all</i> &middot; <i>few</i> &middot; <i>hardly</i> &middot; <i>unlikely</i>"],
     ["Question stems","According to the passage&hellip; &middot; The writer suggests that&hellip;"]],
    note="Six boxes. Three of them &mdash; reference words, negatives and question stems &mdash; "
    "carry most of the marks in this paper, and nobody teaches them."), 600)
S["qc00-f2"]=lambda: f_icons([("magnifier","Passage 1: general interest"),
    ("book","Passage 2: a little denser"),
    ("essay","Passage 3: and one of the three carries detailed argument")],3)
S["qc00-f3"]=lambda: f_realia(doc("Taped inside a notebook",
    "The arithmetic nobody does",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>60 minutes for 3 passages = 20 minutes each.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Including reading, finding every answer and writing "
    "it down.</span><br>"
    "<b>40 questions in 60 minutes = 90 seconds a question.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Including the reading.</span><br>"
    "<b>900 words at 200 words a minute = 4&frac12; minutes.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>One careful reading, with no searching.</span><br>"
    "<b>So: about 15 minutes for 13 questions, after one reading.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Which is why the reading has to be a different kind "
    "of reading.</span>"
    "</p>",
    "There is no extra time at the end. An answer in your head at minute fifty-nine is worth "
    "nothing."), 580)
S["qc00-f4"]=lambda: f_realia(doc("Two ways of reading one paragraph", None,
    "<p><b>Reader 1.</b> Underlines nearly every line. Understands the paragraph. Has used four "
    "minutes.</p>"
    "<p><b>Reader 2.</b> Circles one noun phrase, one date and one <i>such</i>. Understands less. "
    "Has used forty seconds and knows where to come back.</p>",
    "Reader 1 is doing something admirable and expensive. Reader 2 is doing the paper."), 560)

# ---------------- Unit 1 ----------------
S["qc01-f1"]=lambda: f_icons([("book","three stapled passages"),
    ("spreadsheet","a forty-line answer sheet"),("clock","sixty minutes"),
    ("quotemark","a magazine page"),("essay","a journal page"),
    ("library","a textbook page"),("note","a glossary at the foot"),
    ("data","a diagram inside a text"),("form","a question stem in bold"),
    ("notebook","eight heading options"),("refnumber","a paragraph letter"),
    ("wordcount","a gap in a summary"),("review","a true-false-not-given box"),
    ("pen","a pencil along a line"),("magnifier","one noun phrase circled"),
    ("proof","a line of small print")],4)
S["qc01-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("nour",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",390,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"TWENTY EACH",[("P1","20 min"),("P2","20 min"),("P3","20 min")]),
    clockat=(622,44,22,9,0))
S["qc01-f3"]=lambda: f_icons([("library","a book"),("essay","a journal"),
    ("quotemark","a magazine"),("note","a newspaper"),
    ("data","a diagram inside a text"),("magnifier","a glossary at the foot")],3)
S["qc01-f4"]=lambda: f_realia(tbl("Team research &middot; where the hour goes", None,
    ["Passage","Minutes reading","Minutes answering","Questions answered","Questions blank"],
    br(3,5),
    note="The passage that ate the hour: ______________________"), 680)
S["qc01-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Reading class",
    "The shape of the Academic Reading paper, and what follows from it &middot; page 1 of 1",
    "<p><b>The source.</b> The published description of the Academic Reading test, from the test "
    "owners' own pages. Downloaded <b>2 May</b>. Printed here in our own words.</p>"
    + table_html(["What the description states","What it means for you"],
      [["Three passages, forty questions, <b>sixty minutes</b>",
        "unlike Listening, the hour includes writing your answers"],
       ["Texts from <b>books, journals, magazines and newspapers</b>",
        "written for a general educated reader, not for a learner"],
       ["<b>At least one</b> text contains detailed logical argument",
        "one of the three will reward slow reading"],
       ["Texts may include diagrams, graphs or illustrations; a short <b>glossary</b> may be given",
        "the glossary is free and almost nobody reads it"]])
    + "<p><b>Now the arithmetic, which the description does not do for you.</b> Sixty minutes across "
    "three passages is <b>twenty minutes each</b>, including everything. Forty questions in sixty "
    "minutes is <b>ninety seconds a question</b>, including the reading. A passage of around nine "
    "hundred words, read once at a moderate speed, takes four or five minutes &mdash; so after one "
    "reading of one passage you have about fifteen minutes left to answer about thirteen questions "
    "and write them down.</p>"
    "<p>That arithmetic has one consequence and everybody resists it. <b>You cannot read all three "
    "passages carefully and answer forty questions in an hour.</b> The students who finish are not "
    "reading faster; they are reading differently, and they are reading some parts of the text and "
    "not others.</p>"
    "<p><b>What a design document will not tell you.</b> It describes a design, not your paper. It "
    "does not say what the topics will be, how many questions of each type you will meet, in what "
    "order they will come, or which passage carries the detailed argument. It is also silent on "
    "everything this book is about: how to divide the hour, which parts of a text to read closely, "
    "what to do when the hour is nearly over. Those are not omissions &mdash; a test publisher "
    "describes the test, and a method is somebody else's job. And it says nothing about you: the "
    "number of questions you can answer in an hour is a fact about your reading.</p>",
    "Our summary of a published description. Read the owners' own pages, and write down the date."),
    620)
S["qc01-f6"]=lambda: f_realia(tbl("The head noun", None,
    ["The noun phrase","The head noun","What the modifiers add"],
    [["<i>the rapid decline of the coastal fishing industry</i>","<b>decline</b>",
      "how fast, of what, where"],
     ["<i>a second set of measurements taken in winter</i>","<b>set</b>","which one, of what, when"],
     ["<i>the effects on soil quality of repeated cultivation</i>","<b>effects</b>",
      "on what, caused by what"],
     ["<i>an unexpected reduction in the number of applicants</i>",B,B],
     ["<i>three previously unpublished letters from the period</i>",B,B]],
    note="Four cells are empty on purpose. The head noun is the word you search for."), 640)
S["qc01-f7"]=lambda: f_matrix(["Minutes spent","Questions answered"],
    [("Passage 1",["26","13 of 13"]),("Passage 2",["24","12 of 13"]),
     ("Passage 3",["10","4 of 14"])], 520)
S["qc01-f8"]=lambda: f_icons([("book","three stapled passages"),("clock","sixty minutes"),
    ("spreadsheet","a forty-line answer sheet"),("essay","a journal page"),
    ("note","a glossary"),("data","a diagram inside a text")],3)
S["qc01-f9"]=lambda: f_realia(tbl("Timing plan &middot; one hour",
    "Written on the question paper before the hour starts",
    ["Row","Minutes","Running total"],
    [["Passage 1: read and answer","18","18"],
     ["Passage 2: read and answer","19","37"],
     ["Passage 3: read and answer","20","57"],
     ["Check the answer sheet","3","60"]],
    note="Eighteen, nineteen, twenty, and three to check. Then obey them, even in the middle of a "
    "sentence."), 560)
S["qc01-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("nour",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("book",360,196,0.26),("computer",490,142,0.42),
     ("spreadsheet",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"29 ANSWERED",[("right","26"),("blank","11")]),
    clockat=(680,44,22,16,0))
S["qc01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Plan 1", None,
        "<p>26 &middot; 24 &middot; 10 minutes.</p>"
        "<p style='color:#6b6861;font-size:13px'>Eleven blanks, and an accuracy of ninety per "
        "cent on what was attempted.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Plan 2", None,
        "<p>18 &middot; 19 &middot; 20 minutes, and 3 to check.</p>"
        "<p style='color:#6b6861;font-size:13px'>Forty answered, and an accuracy that will be "
        "lower.</p>"), w)[0:3],
    w=900, h=270)
S["qc01-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I got 26 out of 40 in Reading. I need to read faster and learn more vocabulary.</p>"),
        w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>Practice Reading paper, <b>2 May</b>: 26 of 40. I answered 29 questions and got 26 right, "
        "so my accuracy on what I attempted was <b>90 per cent</b> and eleven questions were blank "
        "because the hour ended. The minutes went <b>26, 24 and 10</b>. The published description "
        "gives three passages, forty questions and sixty minutes with no extra time &mdash; ninety "
        "seconds a question including the reading &mdash; and it does not say which passage carries "
        "the detailed argument or how many questions of each type there will be. So my problem is "
        "not reading or vocabulary. From now on: eighteen, nineteen, twenty, and three to check.</p>"
        ), w)[0:3],
    w=920, h=320)
S["qc01-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the score",""),("Attempted and right",""),("Questions blank",""),
     ("Minutes by passage",""),("What the description does not say",""),
     ("My timing plan","")]), 540)
S["qc01-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("nour",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("junseo",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("ines",590,170,{}),("marek",655,172,{}),
     ("samira",720,170,{}),("oksana",785,172,{}),("hana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("book",350,198,0.26),
     ("printer",430,196,0.3),("spreadsheet",560,198,0.22),("table",650,0,1.0),
     ("clock",860,198,0.22),("shelf",930,96,0.5)],
    board=(40,22,220,114,"18, 19, 20, 3",[("read","and move"),("no","extra time")]),
    clockat=(276,34,22,10,0))
S["qc01-f15"]=lambda: f_chart([("Passage 1",5),("Passage 2",3),("Passage 3",0),
    ("about the same",1),("I have never timed it",2)])
S["qc01-f16"]=lambda: f_realia(doc("On a desk in May",
    "Six papers, ninety per cent accuracy, twenty-six marks",
    table_html(["Paper","Attempted","Right","Accuracy","Score","Blank"],
      [["1","27","24","89%","24","13"],["2","29","26","90%","26","11"],
       ["3","28","25","89%","25","12"],["4","29","26","90%","26","11"],
       ["5","30","27","90%","27","10"],["6","29","26","90%","26","11"]])
    + "<p><b>A journal page</b> covered in underlining.</p>"
    "<p><b>A published description</b> with one paragraph underlined.</p>"
    "<p><i>She needs a raw score that would reach band 7, and she has read every word of every "
    "passage in all six papers.</i></p>",
    "Six o'clock. The highest accuracy in the class, and the arithmetic that cancels it."), 680)

# ---------------- Unit 2 ----------------
S["qc02-f1"]=lambda: f_icons([("noentry","an eye with a crossed line"),
    ("form","a test item with a tick"),("dashboard","a construct with a question mark"),
    ("notebook","a list of named skills"),("review","two items, no equals sign"),
    ("padlock","a question answered with the passage covered"),
    ("student","a head with existing knowledge"),("spreadsheet","one text, two question types"),
    ("library","a stack of journals"),("book","a spine dated 2000"),
    ("clipboard","a specification"),("danger","a warning"),
    ("magnifier","a dictionary open at inference"),("stars","a tick"),
    ("scissors","a cross"),("proof","a footnote")],4)
S["qc02-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("junseo",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",390,196,0.26),("board",104,86,0.78),
     ("padlock",470,198,0.2),("window",790,56,0.94)],
    board=(660,22,224,114,"TEXT COVERED",[("of four","two"),("measured","not reading")]),
    clockat=(610,44,22,9,30))
S["qc02-f3"]=lambda: f_icons([("padlock","answered with the text covered"),
    ("student","a reader who knows the topic"),("spreadsheet","one text, two question types"),
    ("review","two named skills, not distinguishable"),
    ("clipboard","a specification"),("magnifier","we know less than the document claims")],3)
S["qc02-f4"]=lambda: f_realia(tbl("Team research &middot; answer it with the text covered", None,
    ["No.","The type","Answered with the text covered","Right or wrong","Why it was possible"],
    br(10,5),
    note="How many of ten we got without reading: ______________________"), 700)
S["qc02-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Reading class",
    "What a reading test can and cannot measure &middot; page 1 of 1",
    "<p><b>The source.</b> J. Charles Alderson, <i>Assessing Reading</i>, Cambridge University Press, "
    "<b>2000</b>. Printed here in our own words.</p>"
    "<p>Reading is not observable. Nobody can watch it happen. A test can only look at what a reader "
    "<b>does with items</b> and infer something from that, and the thing it infers is called the "
    "<b>construct</b> &mdash; what the test claims to be measuring.</p>"
    + table_html(["What the review reports","Why it matters"],
      [["Some items can be answered <b>without reading</b>",
        "they measure something, and it is not the text"],
       ["<b>Background knowledge</b> affects performance",
        "two readers of equal English can score differently"],
       ["The <b>question type</b> changes the score",
        "the same text, tested two ways, gives two results"],
       ["Named &ldquo;skills&rdquo; are hard to <b>distinguish</b> in the data",
        "a specification may name skills a test cannot separate"]])
    + "<p>Cover the passage and a proportion of the questions remain answerable: from general "
    "knowledge, from the shape of the options, from the fact that three of four are implausible. Two "
    "readers with the same English will not score the same on a passage about soil chemistry if one "
    "of them is an agronomist. And studies that look for named reading skills as separate things in "
    "candidates' performance often cannot find them.</p>"
    "<p>The book's general conclusion, stated repeatedly and without drama, is that <b>we know less "
    "about reading and about reading tests than the confident language of test specifications "
    "suggests</b>.</p>"
    "<p><b>A review, not a method.</b> This is a review of a field, not a study. It reports other "
    "people's work and weighs it, and it reaches <b>few firm conclusions on purpose</b>: a reader who "
    "wants a list of answers will be disappointed, and the disappointment is the honest result. It is "
    "written for test developers and researchers, not for candidates: there is no technique in it for "
    "sitting a paper. It is also of its period, published in 2000, and a great deal of work has "
    "appeared since. And none of this makes the paper you will sit invalid: <b>a measure can be "
    "imperfect, well made, and the best available, all at once</b> &mdash; which is roughly the "
    "book's own position.</p>",
    "Our summary of a published book. The center's copy is on the shelf; the chapters on the "
    "construct are the ones to read."), 620)
S["qc02-f6"]=lambda: f_realia(tbl("Reporting verbs and their strength", None,
    ["The verb","How strong","What the writer did"],
    [["<b>states</b>","strong, neutral","said it plainly"],
     ["<b>claims</b>","strong, and the reporter is doubtful","asserted it without full support"],
     ["<b>suggests</b>","weak","put it forward carefully"],
     ["<b>implies</b>","weakest","did not say it; it follows"],
     ["<b>concedes</b>",B,B],
     ["<b>argues</b>",B,B]],
    note="Four cells are empty on purpose. A stem with <i>implies</i> wants a different answer from "
    "one with <i>states</i>."), 640)
S["qc02-f7"]=lambda: f_chart([("multiple choice, three weak options",8),
    ("a question asking for a number",6),("sentence completion",2),
    ("matching headings",1),("true / false / not given",0)], unit="of 11 students")
S["qc02-f8"]=lambda: f_icons([("noentry","an eye with a crossed line"),
    ("form","an item with a tick"),("dashboard","a construct"),
    ("student","a reader with prior knowledge"),("spreadsheet","one text, two question types"),
    ("clipboard","a specification")],3)
S["qc02-f9"]=lambda: f_realia(tbl("Test specification &middot; extract",
    "Six named reading skills, as such documents list them",
    ["Skill","As described"],
    [["Reading for gist","identifying the main idea of a text or section"],
     ["Reading for detail","locating specific information"],
     ["Inferring meaning","drawing conclusions not directly stated"],
     ["Identifying opinion","distinguishing fact from the writer's view"],
     ["Following argument","tracing a line of reasoning across a text"],
     ["Recognizing paraphrase","matching a restatement to its original"]],
    note="Our own illustration of how such documents are written. Six names &mdash; and studies "
    "that look for them as separate abilities in candidate data often cannot tell them apart."),
    620)
S["qc02-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("junseo",400,176,{"seated":True}),("grace",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("padlock",360,196,0.22),("computer",490,142,0.42),
     ("form",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"TWO OF FOUR",[("text","covered"),("still","answerable")]),
    clockat=(680,44,22,10,30))
S["qc02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("With the passage", None,
        "<p>Four questions, and the passage printed above them.</p>"
        "<p style='color:#6b6861;font-size:13px'>All four answerable, three of them from the "
        "text.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("With the passage covered", None,
        "<p>The same four questions, the passage blanked out.</p>"
        "<p style='color:#6b6861;font-size:13px'>Two still answerable: one from general knowledge, "
        "one because three options are implausible.</p>"), w)[0:3],
    w=900, h=270)
S["qc02-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I got 31 out of 40 in Reading, so my reading is about band 7 now. I understand almost "
        "everything.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>Practice Reading paper, <b>9 May</b>: 31 of 40. The second passage was about railway "
        "engineering, which I studied, and I got <b>13 of 14</b> on it against <b>9 of 13</b> on the "
        "other two &mdash; so part of that score is my own background knowledge, not my English. I "
        "also answered two multiple-choice items correctly with the passage covered. A review "
        "published in 2000 reports that some items can be answered without the text, that background "
        "knowledge affects performance, that the question type changes the score, and that named "
        "reading skills are hard to separate in candidate data; it is a review rather than a study, "
        "written for test developers, deliberately tentative, and now of its period. None of that "
        "makes my 31 worthless &mdash; it makes it a measurement with a known width and some known "
        "ingredients.</p>"), w)[0:3],
    w=940, h=340)
S["qc02-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the score",""),("The score by passage",""),("A topic I already knew about",""),
     ("Items answered without the text",""),("The four findings",""),
     ("What my score is and is not","")]), 560)
S["qc02-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("junseo",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("grace",290,172,{}),("nour",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("lars",515,176,{"seated":True}),("ines",590,170,{}),("marek",655,172,{}),
     ("samira",720,170,{}),("oksana",785,172,{}),("hana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("padlock",350,198,0.22),
     ("printer",430,196,0.3),("spreadsheet",560,198,0.22),("table",650,0,1.0),
     ("clipboard",860,198,0.24),("shelf",930,96,0.5)],
    board=(40,22,232,114,"NOBODY CAN WATCH YOU READ",[("six names","in a document"),("the data","cannot tell them apart")]),
    clockat=(290,34,22,11,0))
S["qc02-f15"]=lambda: f_chart([("my English",5),("what I already know about the topic",2),
    ("the question types",1),("my timing",2),("I have never thought about it",1)])
S["qc02-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Thirty-one marks, and three ingredients",
    table_html(["Passage","Topic","Score"],
      [["1","glass manufacture","9 of 13"],
       ["2","<b>railway engineering, his own field</b>","<b>13 of 14</b>"],
       ["3","migration patterns","9 of 13"]])
    + "<p><b>Two multiple-choice items</b> answered correctly with the passage covered, and he cannot "
    "say what either of them measured.</p>"
    "<p><b>A specification extract</b> listing six named reading skills.</p>",
    "Seven o'clock. A university will read the band and not this page."), 640)

# ---------------- Unit 3 ----------------
S["qc03-f1"]=lambda: f_icons([("eye","an eye stopped on a word"),
    ("transfer","an eye jumping between words"),("signal","stops marked above a line"),
    ("magnifier","a small clear window"),("review","wider to the right than the left"),
    ("flashback","a jump backwards"),("timer","a quarter of a second"),
    ("quotemark","a long word fixated twice"),("thread","a short word skipped"),
    ("tally","a frequent and a rare word"),("note","a predictable word"),
    ("clipboard","a laboratory"),("library","a journal cover dated 1998"),
    ("stars","a tick"),("scissors","a cross"),("proof","a footnote")],4)
S["qc03-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("mei",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("essay",390,196,0.24),("board",102,86,0.8),
     ("eye",470,198,0.2),("window",790,56,0.94)],
    board=(656,22,228,116,"TWELVE STOPS",[("span","~15 letters"),("blocks of five","~30")]),
    clockat=(606,44,22,10,0))
S["qc03-f3"]=lambda: f_icons([("timer","a fixation: a quarter of a second"),
    ("transfer","a saccade: eight or nine letters"),("magnifier","a few letters left, fifteen right"),
    ("flashback","one jump in eight goes back"),("thread","a short word skipped"),
    ("clipboard","measured, not imagined")],3)
S["qc03-f4"]=lambda: f_realia(tbl("Team research &middot; count your own stops", None,
    ["The line","Stops I made","Words in the line","Backward jumps","The hardest word"],
    br(8,5),
    note="The word that cost two stops: ______________________"), 700)
S["qc03-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Reading class",
    "What the eye actually does, measured &middot; page 1 of 1",
    "<p><b>The source.</b> Keith Rayner, <i>Eye movements in reading and information processing: 20 "
    "years of research</i>, Psychological Bulletin, <b>1998</b>. Printed here in our own words.</p>"
    "<p>Reading feels smooth. It is not. The eye makes a series of short stops, called "
    "<b>fixations</b>, separated by fast jumps, called <b>saccades</b>. Nothing useful is taken in "
    "during a jump. All the reading happens at the stops.</p>"
    + table_html(["Measurement","Approximately","What it rules out"],
      [["Fixation duration","a quarter of a second","reading a page in one glance"],
       ["Saccade length","8 to 9 letters","taking in a line at one stop"],
       ["Perceptual span","a few letters left, about 15 right",
        "reading in blocks of five words"],
       ["Regressions","about 1 jump in 8","never looking back if you are good"]])
    + "<p>Fixation time is not fixed. A <b>rare</b> word holds the eye longer than a frequent one. A "
    "word the sentence has already made <b>predictable</b> is often <b>skipped</b> &mdash; and short "
    "function words are skipped a great deal of the time, which is one reason you cannot report them "
    "afterwards.</p>"
    "<p><b>Two consequences.</b> The useful field is about fifteen letters wide, so any technique "
    "that asks you to take in a whole line at one stop is asking for something the visual system does "
    "not do: reading faster is not a matter of widening the span. And hard words cost time at the "
    "point of fixation, so a passage full of unfamiliar vocabulary is slow for a mechanical reason as "
    "well as a comprehension one.</p>"
    "<p><b>Mechanics, not a method.</b> This is a review of laboratory research. Participants read in "
    "controlled conditions, often with the head supported, and were mostly <b>skilled readers of "
    "their first language</b> reading sentences and short texts rather than sitting an examination. "
    "It is about the mechanics of the eye, not about understanding: it does not say how to choose what "
    "to read closely, how to divide an hour, or how a second-language reader differs. And it contains "
    "<b>no training</b>. Knowing where your eyes go does not move them. What it gives you is a floor: "
    "a set of limits any honest advice about reading faster has to respect.</p>",
    "Our summary of a published review. It is long, and the figures are the part to keep."), 620)
S["qc03-f6"]=lambda: f_realia(tbl("The main clause", None,
    ["The sentence","The main clause","What was stripped"],
    [["<i>Although the first survey, conducted in 1948, found no such pattern, later work confirmed "
      "it.</i>","<b>later work confirmed it</b>","a concession, a date, a participle"],
     ["<i>The method, which had been abandoned twenty years earlier, was revived.</i>",
      "<b>the method was revived</b>","a non-defining relative clause"],
     ["<i>Having examined the records, the commission reported in favor of the scheme.</i>",
      "<b>the commission reported in favor</b>","a participle clause"],
     ["<i>While the figures published in 1960 are incomplete, they remain the only source.</i>",B,B],
     ["<i>The decline, described by several writers as inevitable, had been reversed once "
      "before.</i>",B,B]],
    note="Four cells are empty on purpose. The main clause is usually where the answer lives."),
    660)
S["qc03-f7"]=lambda: f_matrix(["Approximately","What it rules out"],
    [("Fixation duration",["&frac14; second","a page in one glance"]),
     ("Saccade length",["8&ndash;9 letters","a line at one stop"]),
     ("Perceptual span",["~15 letters right","blocks of five words"]),
     ("Regressions",["1 jump in 8","never looking back"])], 600)
S["qc03-f8"]=lambda: f_icons([("eye","an eye stopped on a word"),
    ("transfer","a jump between words"),("magnifier","a window wider to the right"),
    ("flashback","a backward jump"),("quotemark","a rare word fixated twice"),
    ("thread","a short word skipped")],3)
S["qc03-f9"]=lambda: f_realia(doc("One paragraph, twice",
    "As written, and stripped to its main clauses",
    "<p><b>As written, 110 words.</b> Although the first survey, conducted in 1948 by a commission "
    "that had no statistical staff, found no such pattern, later work &mdash; much of it published "
    "after the records had been moved &mdash; confirmed it. The method, which had been abandoned "
    "twenty years earlier on grounds that were never written down, was revived in 1961. Having "
    "examined what remained of the correspondence, the committee, whose members disagreed about "
    "almost everything else, reported in favor of the scheme. The figures, incomplete though they "
    "are, remain the only source.</p>"
    "<p><b>Stripped, 26 words.</b> Later work confirmed it. The method was revived in 1961. The "
    "committee reported in favor of the scheme. The figures remain the only source.</p>",
    "A hundred and ten words became twenty-six. The concessions, relative clauses and participles "
    "are where the distractors live. Our own paragraph, written for this book."), 640)
S["qc03-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("mei",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("essay",360,196,0.24),("computer",490,142,0.42),
     ("eye",450,198,0.18),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"BLOCKS OF FIVE",[("asked for","30 letters"),("available","15")]),
    clockat=(680,44,22,11,0))
S["qc03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The full paragraph", None,
        "<p>110 words. Four main clauses, three concessions, two relative clauses and a participle.</p>"
        "<p style='color:#6b6861;font-size:13px'>Everything a question could turn on.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("The stripped paragraph", None,
        "<p>26 words. Four short sentences.</p>"
        "<p style='color:#6b6861;font-size:13px'>Three things it no longer contains: the dates, the "
        "reasons, and who disagreed.</p>"), w)[0:3],
    w=900, h=270)
S["qc03-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I did a speed-reading course. It worked for a week and then stopped, so I think I am just "
        "a slow reader.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>I spent six weeks on a course that taught reading in blocks of five words. My speed rose "
        "for about a week and my comprehension fell. A review published in 1998 summarizes twenty "
        "years of eye-tracking: a stop lasts about a quarter of a second, a jump covers eight or nine "
        "letters, the clear part of vision reaches a few letters left and about fifteen right, and "
        "roughly one jump in eight goes backwards even in skilled readers. Five English words is more "
        "than thirty letters, so the technique asked my eyes to use text they cannot see. The review "
        "is laboratory work with first-language skilled readers, says nothing about second-language "
        "reading and contains no training. So: fewer words, more known words, fewer backward "
        "jumps.</p>"), w)[0:3],
    w=940, h=340)
S["qc03-f13"]=lambda: f_realia(form("Note planner",
    [("What I was taught about reading faster",""),("What happened",""),
     ("The four measurements",""),("What they rule out",""),
     ("What the review does not cover",""),("My three changes","")]), 560)
S["qc03-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("mei",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("nour",365,176,{"seated":True}),("junseo",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("ines",590,170,{}),("marek",655,172,{}),
     ("samira",720,170,{}),("oksana",785,172,{}),("hana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("essay",350,198,0.24),
     ("printer",430,196,0.3),("eye",560,198,0.2),("table",650,0,1.0),
     ("library",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,228,114,"YOU READ AT THE STOPS",[("span","~15 letters"),("blocks","do not work")]),
    clockat=(284,34,22,12,0))
S["qc03-f15"]=lambda: f_chart([("yes and it helped",1),("yes and it did not",3),
    ("no",4),("I did not know they existed",2),("I do not believe in them",1)])
S["qc03-f16"]=lambda: f_realia(doc("On a desk in the afternoon",
    "Six weeks of a course, and two numbers",
    table_html(["","Before","Week 1","Week 6"],
      [["Measured speed, academic prose","140 wpm","190 wpm","150 wpm"],
       ["Comprehension, the course's own test","8 of 10","6 of 10","6 of 10"]])
    + "<p><b>An advertisement</b> for the course, with a price circled and no symbol beside it.</p>"
    "<p><i>She can now say what the span figure is. She is still a 150-words-a-minute reader of "
    "academic English, and the paper gives her sixty minutes.</i></p>",
    "Four o'clock. The course cannot have widened her span. It may have taught her to skip."), 640)
