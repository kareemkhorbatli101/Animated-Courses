# -*- coding: utf-8 -*-
"""Plumbline Book 1 figure specs, Units 11 and 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Unit 11 ----------------
S["qa11-f1"]=lambda: f_icons([("signal","one word marked in a stream"),
    ("thread","the same stream, unmarked"),("pen","a correction in red"),
    ("review","the same error three weeks later"),("notebook","a dated diary"),
    ("transfer","a mark in input, then a tick in output"),
    ("data","surface and depth"),("quotemark","a rule written out"),
    ("magnifier","a question mark over an instrument"),
    ("meeting","two researchers who disagree"),("clipboard","a hypothesis"),
    ("proof","a finding"),("calendar","six weeks, one circled"),
    ("stars","it stopped"),("noentry","it did not"),("form","a footnote")],4)
S["qa11-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("hana",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("notebook",390,196,0.24),("board",98,86,0.84),
     ("pen",470,198,0.18),("window",790,56,0.94)],
    board=(644,22,240,120,"THE SAME CORRECTION",[("week 1","corrected"),("week 6","corrected")]),
    clockat=(594,44,22,12,0))
S["qa11-f3"]=lambda: f_icons([("signal","a form noticed in the stream"),
    ("thread","the same form, not noticed"),("data","surface above, depth below"),
    ("quotemark","the rule, written out"),("clipboard","noticing"),
    ("book","understanding")],3)
S["qa11-f4"]=lambda: f_realia(tbl("Team research &middot; the error that will not die", None,
    ["The error","Times corrected","Where I have heard it done correctly","Date I noticed it",
     "Has it stopped"],
    blankrows(6,5),
    note="The one I have never heard: ______________________"), 700)
S["qa11-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to teachers and students",
    "Why we ask you where you have heard it &middot; page 1 of 1",
    "<p><b>The source.</b> R. Schmidt, <i>The Role of Consciousness in Second Language "
    "Learning</i>, Applied Linguistics, <b>1990</b>, with the diary study he and a colleague "
    "published in <b>1986</b>. Printed here in our own words.</p>"
    "<p>Not everything you hear becomes part of your English. The English around you is "
    "<b>input</b>. The part your mind actually takes in is <b>intake</b>. The 1990 paper argues "
    "that the step from one to the other requires <b>noticing</b>: becoming consciously aware of "
    "the form itself, at the moment you meet it.</p>"
    + table_html(["","What it is"],
      [["<b>Noticing</b>","awareness of the form itself as you meet it &mdash; <i>he said</i> "
        "<b>had been</b><i>, not</i> <b>was</b>"],
       ["<b>Understanding</b>","awareness of the rule underneath &mdash; <i>why</i> the past "
        "perfect is there"]])
    + "<p>The evidence the author found most convincing was his own. He had kept a <b>diary</b>, "
    "dated, while learning Portuguese in Brazil, writing down the forms he noticed people using. "
    "Looking back, the forms that appeared in his own speech were, again and again, the ones he had "
    "<b>noticed first in somebody else's</b>. Things he had been taught and had not noticed in use "
    "did not appear.</p>"
    "<p>The claim is about noticing. You can notice without understanding, and &mdash; this is the "
    "painful part &mdash; you can understand a rule perfectly, write it in a notebook six times, "
    "and never once notice it in anything you hear. This is why a correction can change nothing. A "
    "correction gives you the rule. If you have never registered the form in real use, there is "
    "nothing for the rule to attach to, and next week you will produce what you have always "
    "produced.</p>"
    "<p><b>A hypothesis, and contested.</b> This is a hypothesis and an argument, not an experiment "
    "with a result. It has been argued about ever since, and several researchers hold that some "
    "learning happens without any awareness at all. The paper is a position in a live disagreement, "
    "and it is honest about being one.</p>"
    "<p><b>Noticing is very hard to measure.</b> You cannot see it. You can ask somebody &mdash; "
    "which is self-report &mdash; or you can wait and watch their output, which is slow and "
    "indirect. The diary evidence is <b>one learner, himself, reporting on himself</b>, which is the "
    "weakest kind of evidence and the author says so.</p>"
    "<p>The paper makes <b>no claim about any examination</b>, offers no classroom method, and "
    "gives no estimate of how many times you must notice something. The author's own later writing "
    "softened the strongest version of the claim.</p>"
    "<p><b>Four limits.</b> A hypothesis &middot; contested &middot; one self-reporting learner "
    "&middot; no method.</p>",
    "Our summary of a published paper. Read it if your center has access; the diary is the "
    "memorable part."), 620)
S["qa11-f6"]=lambda: f_realia(tbl("Hypothesis, finding, claim", None,
    ["The word","What it is","How careful you must be"],
    [["<b>a hypothesis</b>","an idea offered for testing","very: it may be wrong"],
     ["<b>a finding</b>","a result somebody obtained","careful: ask how"],
     ["<b>a claim</b>","something somebody asserts","careful: ask on what basis"],
     ["<b>evidence</b>","what supports a claim","ask how much, and of what kind"],
     ["<b>self-report</b>",BLANK,BLANK],
     ["<b>a method</b>",BLANK,BLANK]],
    note="Four cells are empty on purpose."), 640)
S["qa11-f7"]=lambda: f_line([("wk 1",7),("wk 2",6),("wk 3",8),("wk 4",6),("wk 5",7),
    ("wk 6",5),("wk 7",1)], unit="times the error appeared", w=620, ymin=0,
    mark=(5,"heard it in a lecture"))
S["qa11-f8"]=lambda: f_icons([("signal","a stream with one word marked"),
    ("thread","the same stream, unmarked"),("notebook","a page of corrections"),
    ("calendar","a dated diary entry"),("clipboard","a hypothesis"),
    ("meeting","researchers facing opposite ways")],3)
S["qa11-f9"]=lambda: f_realia(tbl("Error record &middot; one term",
    "Hana Sato &middot; nine long-standing errors",
    ["The error","Weeks corrected","Written down","Heard in real English","Gone"],
    [["1","6","yes","<b>yes</b>","<b>yes</b>"],["2","5","yes","no","no"],
     ["3","6","yes","no","no"],["4","4","yes","<b>yes</b>","<b>yes</b>"],
     ["5","7","yes","no","no"],["6","3","yes","no","no"],
     ["7","5","yes","<b>yes</b>","<b>yes</b>"],["8","6","yes","no","no"],
     ["9","4","yes","no","no"]],
    note="Nine errors, nine corrections, three cures. Every cured error has a yes in the fourth "
    "column."), 660)
S["qa11-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("hana",400,176,{"seated":True}),("grace",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("notebook",360,196,0.24),("computer",490,142,0.42),
     ("form",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"WEEK 7",[("corrections","6"),("changes","1")]),
    clockat=(680,44,22,13,15))
S["qa11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Record 1", None,
        "<p>Nine errors. <b>Nine</b> corrections. <b>No</b> ticks in the heard-in-real-English "
        "column.</p>"
        "<p style='color:#6b6861;font-size:13px'>Cures: none.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Record 2", None,
        "<p>Nine errors. <b>Four</b> corrections. <b>Six</b> ticks in the heard-in-real-English "
        "column.</p>"
        "<p style='color:#6b6861;font-size:13px'>Cures: five. Fewer corrections, more cures.</p>"
        ), w)[0:3],
    w=900, h=280)
S["qa11-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I keep making the same mistakes even though my teacher corrects me. I think I am just "
        "not good at grammar.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>One error in my spoken English was corrected in six consecutive weeks and I wrote the "
        "rule down four times. It appeared six to eight times a week throughout. In week six I "
        "heard the correct form twice in a lecture and noted where I was; in week seven it appeared "
        "once. A paper published in <b>1990</b> argues that a form has to be noticed in input "
        "before it becomes part of your own English, which would explain this &mdash; but it is a "
        "hypothesis, it is still argued about, and its main evidence is one learner reporting on "
        "himself. My own record is one student in one term and proves nothing. From now on, every "
        "correction gets a second line in my notebook: where I will go to hear it.</p>"), w)[0:3],
    w=920, h=320)
S["qa11-f13"]=lambda: f_realia(form("Note planner",
    [("My error",""),("How many weeks corrected",""),("How many times a week it appeared",""),
     ("What the hypothesis says",""),("Two of its limits",""),
     ("The second line I will add to every correction","")]), 560)
S["qa11-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("hana",130,172,{"seated":True}),("grace",205,176,{"seated":True}),
     ("priya",290,172,{}),("junseo",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("lars",515,176,{"seated":True}),("nour",590,170,{}),("ines",655,172,{}),
     ("marek",720,170,{}),("samira",785,172,{}),("oksana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("notebook",350,198,0.24),
     ("printer",430,196,0.3),("form",560,198,0.22),("table",650,0,1.0),
     ("headset",860,198,0.24),("shelf",930,96,0.5)],
    board=(40,22,230,114,"WHERE WOULD YOU HEAR IT",[("input","what you hear"),("intake","what sticks")]),
    clockat=(286,34,22,13,0))
S["qa11-f15"]=lambda: f_chart([("yes, and I remember where",2),
    ("yes, but I cannot remember where",3),("no",4),
    ("I have never looked",5),("I did not know that was the question",1)])
S["qa11-f16"]=lambda: f_realia(doc("On a desk in the afternoon",
    "Nine errors, three gone, six weeks left",
    table_html(["","Heard in real English","Gone"],
      [["Three errors","<b>yes</b>","<b>yes</b>"],
       ["Six errors","no &mdash; and all six can be explained from memory","no"]])
    + "<p><b>A notebook</b>, open at a page with the same correction written six times.</p>"
    "<p><b>A lecture handout</b> with one phrase underlined and a place and date in the margin.</p>"
    "<p><b>A closed 1990 journal.</b></p>"
    "<p><i>Her Speaking band has not moved in two terms.</i></p>",
    "Four o'clock. The six that remain are forms she can explain, has written out repeatedly, and "
    "has never once registered in anybody's speech."), 640)

# ---------------- Unit 12 ----------------
S["qa12-f1"]=lambda: f_icons([("book","a stapled paper"),
    ("scales","a scale from nought to nine"),("stairwell","a ladder of six rungs"),
    ("spreadsheet","a table of means"),("headset","one playing, one arrow"),
    ("passport","identification"),("data","a shaded page"),
    ("thread","a word with four forms"),("review","a closed book and a hand"),
    ("timer","a falling curve"),("signal","one word noticed"),
    ("form","a numbered answer sheet"),("proof","a form with five figures"),
    ("calendar","widening review gaps"),("magnifier","what it does not say"),
    ("note","one page")],4)
S["qa12-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("chiamaka",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("note",390,196,0.24),("board",96,86,0.86),
     ("book",470,198,0.24),("window",790,56,0.94)],
    board=(638,22,246,122,"ELEVEN DOCUMENTS",[("each one","has a limit"),("printed","in one line")]),
    clockat=(588,44,22,10,0))
S["qa12-f3"]=lambda: f_icons([("book","four papers, with minutes"),
    ("scales","nought to nine"),("proof","four figures and a fifth"),
    ("calendar","widening review gaps"),("data","a hundred words, two shaded"),
    ("magnifier","five numbers by heart")],3)
S["qa12-f4"]=lambda: f_realia(tbl("Team research &middot; the eleven, in one line each", None,
    ["Unit","The document","What it gives you","What it does not cover"],
    blankrows(11,4),
    note="The one we would keep if we could keep one: ______________________"), 680)
S["qa12-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; one page for a new student",
    "Everything in Book 1, and the line under each of it &middot; page 1 of 1",
    "<p><b>The sources.</b> Eleven published documents, consulted between <b>4 and 11 February</b>. "
    "Each is named in full in the back of this book. Printed here in our own words.</p>"
    "<p><b>The test.</b> Four papers. Listening, Reading and Writing in one sitting, in that order, "
    "with no break; Speaking the same day or within seven days. Listening is about thirty minutes, "
    "four parts, forty questions, heard once. Academic Reading is sixty minutes, three passages, "
    "forty questions, no extra time. Writing is sixty minutes, two tasks, Task 2 worth more. "
    "Speaking is eleven to fourteen minutes, three parts, recorded. <i>The published format does "
    "not say which question types you will meet.</i></p>"
    "<p><b>The scale.</b> Nine bands with published names. Five numbers on the form: four papers "
    "and an overall band, which is the average of the four, rounded &mdash; .25 up to the next half "
    "band, .75 up to the next whole band. Nothing is taken away for a wrong answer. <i>The published "
    "raw-score guide is indicative; it is not the table used on your paper.</i></p>"
    "<p><b>The levels.</b> Six levels, A1 to C2, described in <i>can do</i> statements. Bands are "
    "mapped onto them approximately: 4.0 to 5.0 at B1, 5.5 to 6.5 at B2, 7.0 to 8.0 at C1. <i>The "
    "framework says it is a reference and not prescriptive, and it is not a test.</i></p>"
    "<p><b>The figures.</b> Mean bands are published every year for all test takers and by first "
    "language and country. Writing has had the lowest of the four skill means. <i>Everybody in those "
    "tables chose to sit, so a group's mean says as much about who applies; and no average can "
    "predict one person.</i></p>"
    "<p><b>Listening.</b> Played once. Most wrong answers are not vocabulary: they are the question "
    "you stayed with after the recording left it. <i>A book about teaching listening is not a book "
    "about test technique.</i></p>"
    "<p><b>The rules.</b> Bring the identification you booked with. Water in a clear bottle, label "
    "off. No telephone, no watch, no dictionary, no notes. A result can be withheld or cancelled. "
    "<i>The notice does not define a memorized answer.</i></p>"
    "<p><b>Vocabulary.</b> About 8,000 to 9,000 word families for 98 percent of written English, "
    "6,000 to 7,000 for spoken. The first two thousand do most of the work, and one sense of a "
    "common word usually does most of that word's work. <i>Coverage is a count of running words, "
    "not of understanding.</i></p>"
    "<p><b>Studying.</b> Practice testing and spreading your study out are the two techniques the "
    "evidence supports best; rereading and highlighting are not. Forgetting is fast and then slow, "
    "so a review comes before you have lost it, not after. A correction you have never noticed in "
    "real English changes nothing. <i>One of those is a review of judgments, one is a single "
    "subject on nonsense syllables, and one is a contested hypothesis.</i></p>"
    "<p><b>What no document in this book can do.</b> None of them can tell you what you will get. "
    "None of them was written about you. Every one of them is worth reading, and every one of them "
    "stops somewhere, in a sentence its own authors wrote. Learning to find that sentence is the "
    "skill this series is actually teaching.</p>",
    "A review page. Nothing here replaces the eleven documents; read them, and write down the "
    "dates."), 640)
S["qa12-f6"]=lambda: f_realia(tbl("The eleven honest sentences", None,
    ["The document","The honest sentence, in short","Unit"],
    [["The test format","It does not say your question types","1"],
     ["The band scale","The raw-score guide is indicative","2"],
     ["The framework","It is a reference, not a test","3"],
     ["The performance tables","An average cannot predict a person","4"],
     ["The listening book","It is about teaching, not technique","5"],
     ["The notice to candidates",BLANK,"6"],
     ["The vocabulary paper",BLANK,"7"],
     ["The 1953 word list","It was made for writers of readers","8"],
     ["The study review","Low means thin evidence, not useless","9"],
     ["The 1885 study","One subject, and nonsense on purpose","10"],
     ["The noticing paper",BLANK,"11"]],
    note="Three cells are empty on purpose."), 660)
S["qa12-f7"]=lambda: f_chart([("how I review",4),("how many hours with the book shut",3),
    ("what I believe a band is",2),("what I bring on the day",1),("nothing yet",1)])
S["qa12-f8"]=lambda: f_icons([("book","four papers, with minutes"),
    ("scales","nought to nine"),("stairwell","six rungs"),
    ("data","a shaded page"),("timer","a falling curve with review marks"),
    ("review","a closed book and a hand over it")],3)
S["qa12-f9"]=lambda: f_realia(tbl("Personal plan &middot; twelve weeks",
    "Chiamaka Obi &middot; target band 6.5 overall",
    ["Paper","Last practice score","Hours a week","What I will do"],
    [["Reading","24 of 40","<b>4</b>","one academic page a day, timed sections with the book shut"],
     ["Writing","&mdash;","3","one Task 1 and one Task 2 a week, both timed"],
     ["Listening","26 of 40","2","tally every wrong answer by reason"],
     ["Speaking","&mdash;","2","record myself once a week and listen back"],
     ["<b>Reviews</b>","&mdash;","&mdash;","<b>days 1, 2, 4, 8 and 16 after every new list</b>"]],
    note="Twelve weeks, four papers, one weakest. This plan was made in February by somebody who "
    "has not sat the test, and it will be wrong by March."), 680)
S["qa12-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("chiamaka",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("note",360,196,0.24),("computer",490,142,0.42),
     ("form",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"TWELVE WEEKS",[("Reading","4 hrs"),("reviews","1 2 4 8 16")]),
    clockat=(680,44,22,17,30))
S["qa12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Plan 1", None,
        "<p><b>Equal hours</b> to all four papers. No review row.</p>"
        "<p style='color:#6b6861;font-size:13px'>Fair, tidy, and it ignores the student's own "
        "form.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Plan 2", None,
        "<p><b>Most hours</b> to the weakest paper. A review row with widening gaps.</p>"
        "<p style='color:#6b6861;font-size:13px'>Uneven, and built from a result form.</p>"), w)[0:3],
    w=900, h=270)
S["qa12-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page 1", None,
        "<p>Read a lot. Learn vocabulary every day. Do practice tests. Do not panic. Band 6.5 is "
        "possible for everybody with hard work.</p>"
        "<p style='color:#6b6861;font-size:13px'>Five sentences, and not one of them can be "
        "checked.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page 2", None,
        "<p>Four papers; three in one sitting with no break; Listening heard once; Reading sixty "
        "minutes with no extra time; Writing two tasks with Task 2 worth more; Speaking eleven to "
        "fourteen minutes, recorded. The band is a point on a published nine-point scale; your "
        "overall band is the average of four, rounded, with .25 and .75 going up. The published "
        "raw-score guide is a guide only. A band maps onto a six-level framework approximately, and "
        "that framework says it is not a test. The published means describe a self-selected crowd "
        "and cannot predict you. About eight to nine thousand word families give you ninety-eight "
        "words in a hundred. Testing yourself and spreading study out are the two best-supported "
        "techniques. Forgetting is fast then slow, so reviews widen. A correction you have never "
        "noticed in use changes nothing. I read all eleven documents between 4 and 11 February and "
        "wrote the dates down. My own plan: Reading four hours, Writing three, Listening two, "
        "Speaking two, reviews on days 1, 2, 4, 8 and 16. This plan was made by somebody who has "
        "not sat the test and it will be wrong by March.</p>"), w)[0:3],
    w=940, h=400)
S["qa12-f13"]=lambda: f_realia(form("One-page planner",
    [("The four papers, with minutes",""),("The five numbers",""),("The eleven documents",""),
     ("The honest sentences",""),("My weakest paper",""),("My hours",""),
     ("My review days",""),("The sentence at the foot","")]), 560)
S["qa12-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("chiamaka",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("grace",365,176,{"seated":True}),("hana",440,172,{"seated":True}),
     ("mei",515,176,{"seated":True}),("nour",590,170,{}),("junseo",655,172,{}),
     ("ines",720,170,{}),("marek",785,172,{}),("oksana",845,170,{}),
     ("samira",905,172,{}),("yusuf",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("note",350,198,0.24),
     ("printer",430,196,0.3),("book",560,198,0.24),("table",650,0,1.0),
     ("bag",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,232,114,"ELEVEN DOCUMENTS, ONE PAGE",[("facts","move"),("sentences","do not")]),
    clockat=(290,34,22,9,0))
S["qa12-f15"]=lambda: f_chart([("review on a schedule",4),("study with the book shut",3),
    ("read one page a day",2),("check what a document does not say",1),("I am not sure yet",1)])
S["qa12-f16"]=lambda: f_realia(doc("On a desk in the morning",
    "Eleven weeks, eleven documents, one morning left",
    table_html(["","Where she started","Where she is"],
      [["Practice Reading","19 of 40","24 of 40"],
       ["Documents read","0","11"],
       ["Review days written down","none","1, 2, 4, 8, 16"],
       ["Telephone call to the organization that set her band","not made","<b>not made</b>"]])
    + "<p><b>One page of eleven lines</b>, in the middle of the desk.</p>"
    "<p><b>A bag</b>, packed, with a passport on top.</p>"
    "<p><i>Somebody else chose her target band, and she has not yet asked them what it is "
    "for.</i></p>",
    "Eight o'clock. Everything on the page is true and none of it will be tested."), 660)
