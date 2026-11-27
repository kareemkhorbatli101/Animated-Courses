# -*- coding: utf-8 -*-
"""Plumbline Book 1 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Starting Point ----------------
S["qa00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each, from an ordinary preparation class",
    ["What you have","An example"],
    [["The present simple","The Listening paper <b>has</b> four parts."],
     ["The past simple","I <b>took</b> the test in March."],
     ["Numbers","<b>Forty</b> questions. <b>Sixty</b> minutes. A band of <b>6.5</b>."],
     ["Dates","<b>On</b> 9 March &middot; <b>in</b> April &middot; <b>by</b> Friday"],
     ["<i>There is</i> and <i>there are</i>","<b>There are</b> three passages in Reading."],
     ["Questions","<b>How</b> long is the Speaking test? <b>Who</b> marks it?"]],
    note="Six boxes. This book adds the English of a published document: its edition, its date, "
    "and the line that says what it does not cover."), 580)
S["qa00-f2"]=lambda: f_icons([("headset","Listening: 40 questions, heard once"),
    ("book","Reading: 3 passages, 60 minutes"),("essay","Writing: 2 tasks, 60 minutes"),
    ("microphone","Speaking: 3 parts, 11 to 14 minutes")],4)
S["qa00-f3"]=lambda: f_realia(doc("Taped inside a notebook",
    "Four questions about any score, and who asks each one",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;What is this a score of?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Almost nobody asks this, and it is the first "
    "question.</span><br>"
    "<b>2 &nbsp;Who decided the number I need?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Not the test. A university, an employer or a "
    "government decided it.</span><br>"
    "<b>3 &nbsp;Would I get the same number next week?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Probably close. Probably not the same.</span><br>"
    "<b>4 &nbsp;What does this score not tell anybody?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>This is the question the published documents "
    "answer best.</span>"
    "</p>",
    "Four questions. A score with no answer to question four gets used for things it was never "
    "evidence for."), 560)
S["qa00-f4"]=lambda: f_realia(doc("Two answers to question one", None,
    "<p><b>&ldquo;My English is 6.5.&rdquo;</b></p>"
    "<p style='color:#6b6861;font-size:13px'>Five words. A number about four papers, said as if "
    "it were a number about a person.</p>"
    "<p><b>&ldquo;In February I answered 23 of the 40 Reading questions on that paper, and that "
    "was reported as a 6.&rdquo;</b></p>"
    "<p style='color:#6b6861;font-size:13px'>A paper. A date. A count. A reported band.</p>",
    "Both answers come from the same morning. Only the second one says what happened."), 560)

# ---------------- Unit 1 ----------------
S["qa01-f1"]=lambda: f_icons([("book","a paper: one of the four tests"),
    ("note","a part: one numbered piece"),("essay","a section of a paper"),
    ("quotemark","a passage: one long text"),("wordcount","a task you must produce"),
    ("form","a question type"),("spreadsheet","an answer sheet"),
    ("transfer","to transfer your answers"),("recorder","a recording"),
    ("microphone","a monologue: one speaker"),("speechbubble","a conversation"),
    ("studentcard","a candidate"),("clipboard","an examiner"),
    ("star","a band"),("scales","a criterion"),("desk","a sitting")],4)
S["qa01-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("chiamaka",420,172,{"seated":True})],
    props=[("table",240,0,1.22),("note",385,196,0.24),("board",110,86,0.72),
     ("clipboard",470,196,0.24),("window",790,56,0.94)],
    board=(690,22,196,110,"FOUR PAPERS",[("Listening","30 min"),("Reading","60 min"),("Writing","60 min")]),
    clockat=(630,44,22,9,10))
S["qa01-f3"]=lambda: f_icons([("wordcount","no more than two words"),
    ("form","a word limit box"),("quotemark","a paragraph heading"),
    ("data","a labeled diagram"),("essay","an essay prompt"),
    ("desk","one sitting, three papers")],3)
S["qa01-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The question","What the class thinks","What the published format says","Who found it"],
    blankrows(6,4),
    note="The one nobody could find: ______________________"), 640)
S["qa01-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to new students",
    "The shape of the test, from the published format &middot; page 1 of 1",
    "<p><b>The source.</b> The test format pages published by the test owners &mdash; the British "
    "Council, IDP: IELTS Australia and Cambridge University Press &amp; Assessment. Downloaded "
    "<b>4 February</b>. Printed here in our own words.</p>"
    "<p>The test has four papers. The published format gives the length of each one, the number of "
    "questions or tasks in it, and the order.</p>"
    + table_html(["Paper","What the published format says"],
      [["<b>Listening</b>","about 30 minutes &middot; 4 parts &middot; 40 questions &middot; each "
        "recording heard <b>once</b> &middot; in the paper test, 10 extra minutes to copy answers "
        "onto the answer sheet"],
       ["<b>Reading</b>","60 minutes &middot; 3 passages &middot; 40 questions &middot; <b>no</b> "
        "extra time; the 60 minutes include writing your answers"],
       ["<b>Writing</b>","60 minutes &middot; 2 tasks &middot; Task 1 describes information you "
        "are given, Task 2 is an essay &middot; Task 2 counts for more"],
       ["<b>Speaking</b>","11 to 14 minutes &middot; 3 parts &middot; one examiner, in a room, "
        "and the conversation is recorded"]])
    + "<p><b>The order.</b> Listening, Reading and Writing are taken in one sitting, in that "
    "order, with <b>no break</b>. Speaking may be on the same day or within seven days of it.</p>"
    "<p><b>What this page does not tell you.</b> The published format is a description of the "
    "<b>shape</b> of the test. It is not a description of your paper. It does not say which "
    "question types you will meet, or how many of each. It does not say what the passages will be "
    "about. It does not say how many correct answers make a band on the version you sit. And it "
    "does not say anything at all about you.</p>"
    "<p><b>Four things the document is silent about.</b> Your question types &middot; your topics "
    "&middot; your raw-score line &middot; your result.</p>",
    "Our summary of a published format. Read the owners' own pages before you book, and write "
    "down the date you read them."), 620)
S["qa01-f6"]=lambda: f_realia(tbl("Words that look like they mean the same", None,
    ["The word","What it means here","An example"],
    [["<b>paper</b>","one of the four tests","the Listening paper"],
     ["<b>part</b>","one numbered piece of Listening or Speaking","Part 3 is a conversation"],
     ["<b>section</b>",BLANK,BLANK],
     ["<b>passage</b>","one long text in Reading","the second passage is about glass"],
     ["<b>task</b>",BLANK,BLANK],
     ["<b>question type</b>","one shape of question, such as matching",BLANK]],
    note="Three cells are empty on purpose."), 620)
S["qa01-f7"]=lambda: f_chart([("Listening",30),("transfer, paper test only",10),
    ("Reading",60),("Writing",60),("Speaking, on another day",14)], unit="minutes")
S["qa01-f8"]=lambda: f_icons([("headset","four parts, heard once"),
    ("book","three passages"),("essay","two tasks"),
    ("microphone","one examiner, recorded"),("spreadsheet","the answer sheet"),
    ("timer","ten extra minutes")],3)
S["qa01-f9"]=lambda: f_realia(tbl("Booking confirmation &middot; extract",
    "Four rows, as the center printed them",
    ["Paper","Date","Start","Room"],
    [["Listening","9 March","09:00","B2"],
     ["Reading","9 March","09:40","B2"],
     ["Writing","9 March","10:45","B2"],
     ["Speaking","<b>12 March</b>","14:20","C4"]],
    note="Three papers in one sitting, Speaking on the 12th."), 560)
S["qa01-f10"]=lambda: f_scene(940,430, people=[("priya",300,172,{}),
     ("chiamaka",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("computer",370,142,0.44),("clipboard",470,196,0.24),
     ("note",520,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"TEST FORMAT",[("one sitting","3 papers"),("Speaking","within 7 days")]),
    clockat=(680,44,22,16,30))
S["qa01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Confirmation 1", None,
        "<p><b>All four papers</b><br>9 March</p>"
        "<p style='color:#6b6861;font-size:13px'>Listening, Reading, Writing in one sitting; "
        "Speaking the same afternoon.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Confirmation 2", None,
        "<p><b>Three papers</b><br>9 March</p>"
        "<p><b>Speaking</b><br>13 March</p>"
        "<p style='color:#6b6861;font-size:13px'>A gap of four days, which the published format "
        "allows.</p>"), w)[0:3],
    w=900, h=280)
S["qa01-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>The test has four parts and takes about three hours. Reading and writing are the long "
        "ones. Ask the center for details.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>Four papers. On the day you sit three, one after the other, no break: "
        "<b>Listening</b> (about 30 min, 4 parts, 40 questions, heard once), <b>Reading</b> "
        "(60 min, 3 passages, 40 questions, no extra time), <b>Writing</b> (60 min, 2 tasks, Task "
        "2 worth more). <b>Speaking</b> (11&ndash;14 min, 3 parts, recorded) is the same day or "
        "within seven. I could not find anywhere that says which question types are on a paper.</p>"
        ), w)[0:3],
    w=920, h=290)
S["qa01-f13"]=lambda: f_realia(form("Note planner",
    [("The four paper names",""),("The minutes for each",""),("The order on the day",""),
     ("What moves",""),("Where I read it, and when",""),("What I could not find","")]), 520)
S["qa01-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("priya",130,172,{"seated":True}),("chiamaka",205,176,{"seated":True}),
     ("grace",290,172,{}),("tomas",365,176,{"seated":True}),("marek",440,172,{"seated":True}),
     ("lars",515,176,{"seated":True}),("oksana",590,170,{}),("ines",655,172,{}),
     ("ravi",720,170,{}),("samira",785,172,{}),("junseo",845,170,{}),
     ("mei",905,172,{}),("yusuf",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("printer",430,196,0.3),
     ("clipboard",560,198,0.22),("table",650,0,1.0),("passport",860,198,0.3),
     ("shelf",930,96,0.5)],
    board=(40,22,206,112,"ONE SITTING, NO BREAK",[("Listening","30"),("Reading","60"),("Writing","60")]),
    clockat=(262,34,22,10,0))
S["qa01-f15"]=lambda: f_chart([("the recording is played twice",5),
    ("Reading gives extra time",4),("there is a break",6),
    ("Speaking is always on the same day",3),("I had read the format",1)])
S["qa01-f16"]=lambda: f_realia(doc("On a desk in February",
    "What was on it at five o'clock",
    "<p><b>The published format</b>, printed, with one paragraph underlined.</p>"
    "<p><b>A practice answer sheet.</b> <b>23</b> of <b>40</b> marked correct.</p>"
    "<p><b>A notebook page</b> headed <i>what the page does not say</i>, with four lines on it.</p>"
    "<p><b>A sealed envelope</b>, not opened.</p>"
    "<p><i>Somebody told her 23 out of 40 is &ldquo;about a 6&rdquo;. She has written in the "
    "margin: so I am a 6?</i></p>",
    "Five o'clock. One morning, one version, one set of forty questions, and a number somebody "
    "else supplied."), 580)

# ---------------- Unit 2 ----------------
S["qa02-f1"]=lambda: f_icons([("star","a band, printed in a box"),
    ("scales","a scale from nought to nine"),("balance","a half band"),
    ("tally","a whole band"),("proof","a score"),("wordcount","a raw score"),
    ("data","out of forty"),("calculator","a total"),("spreadsheet","an average"),
    ("transfer","to round"),("stars","to round up"),("form","a report form"),
    ("envelope","a result"),("today","a stamped date"),("review","correct and incorrect"),
    ("magnifier","a guide, in small print")],4)
S["qa02-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("marek",420,172,{"seated":True})],
    props=[("table",240,0,1.22),("form",385,196,0.24),("board",108,86,0.74),
     ("calculator",470,198,0.22),("window",790,56,0.94)],
    board=(680,22,206,110,"NOUGHT TO NINE",[("9","expert"),("6","competent"),("4","limited")]),
    clockat=(626,44,22,12,0))
S["qa02-f3"]=lambda: f_icons([("stars","band 9: expert user"),
    ("scales","band 4: limited user"),("balance","up to the next half band"),
    ("tally","up to the next whole band"),("noentry","nought: did not attempt"),
    ("magnifier","a guide only")],3)
S["qa02-f4"]=lambda: f_realia(tbl("Team research", None,
    ["Who asks for a band","The band they ask for","Where we read it","The date we looked"],
    blankrows(6,4),
    note="The one that would not say: ______________________"), 640)
S["qa02-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to new students",
    "The band scale, and how an overall band is worked out &middot; page 1 of 1",
    "<p><b>The source.</b> The band scale and scores pages published by the test owners. "
    "Downloaded <b>4 February</b>. Printed here in our own words.</p>"
    "<p><b>There is no pass mark.</b> The test reports a band from 1 to 9, and 0 if you did not "
    "attempt it. Each band has a published name.</p>"
    + table_html(["Band","The published name"],
      [["<b>9</b>","Expert user"],["<b>8</b>","Very good user"],["<b>7</b>","Good user"],
       ["<b>6</b>","Competent user"],["<b>5</b>","Modest user"],["<b>4</b>","Limited user"],
       ["<b>3</b>","Extremely limited user"],["<b>2</b>","Intermittent user"],
       ["<b>1</b>","Non-user"],["<b>0</b>","Did not attempt the test"]])
    + "<p><b>Five numbers.</b> One for each of the four papers, and an overall band. The overall "
    "band is the average of the four, rounded. If the average ends in <b>.25</b> it is rounded "
    "<b>up to the next half band</b>. If it ends in <b>.75</b> it is rounded <b>up to the next "
    "whole band</b>. Anything else goes to the nearest whole or half band.</p>"
    + table_html(["Four scores","Average","Reported"],
      [["6.5 &middot; 6.5 &middot; 5.0 &middot; 7.0","6.25","<b>6.5</b>"],
       ["4.0 &middot; 3.5 &middot; 4.0 &middot; 4.0","3.875","<b>4.0</b>"],
       ["6.5 &middot; 6.5 &middot; 5.5 &middot; 6.0","6.125","<b>6.0</b>"]])
    + "<p><b>Raw scores.</b> Listening and Academic Reading have forty questions each, and nothing "
    "is taken away for a wrong answer. Guidance published alongside the scale says that, as a "
    "rough guide, about 30 correct out of 40 is near band 7 and about 23 out of 40 is near band 6. "
    "<b>That guidance is described as indicative only.</b></p>"
    "<p><b>What this scale does not claim.</b> The published guide to raw scores is not the table "
    "used on your paper: every version is set against the same scale, and the number of correct "
    "answers that reaches a band is worked out for that version. The scale does not tell you how "
    "far your own band might move if you sat a second version next week. It does not say that two "
    "people with the same band speak the same English. And it does not say what a band is worth in "
    "a job, a seminar or a hospital ward. Somebody else decided that, and the scale is silent "
    "about it.</p>",
    "Our summary of a published scale. Read the owners' own pages before you book."), 620)
S["qa02-f6"]=lambda: f_realia(tbl("Saying a score aloud", None,
    ["Written","Said","A sentence"],
    [["<b>6.5</b>","six point five &middot; a six point five","I need a six point five."],
     ["<b>7.0</b>","seven &middot; a seven","She got a seven in Listening."],
     ["<b>23/40</b>","twenty-three out of forty","I got twenty-three out of forty."],
     ["<b>6.125</b>","six point one two five",BLANK],
     ["<b>0.25</b>","nought point two five &middot; a quarter",BLANK],
     ["<b>band 9</b>","band nine","Band nine is published as expert user."]],
    note="Two cells are empty on purpose."), 620)
S["qa02-f7"]=lambda: f_matrix(["L","R","W","S","Average","Reported"],
    [("Marek",["6.5","6.5","5.5","6.0","6.125","<b>6.0</b>"]),
     ("Ines",["6.5","6.5","5.0","7.0","6.25","<b>6.5</b>"]),
     ("Oksana",["7.0","7.0","6.5","7.0","6.875","<b>7.0</b>"])], 620)
S["qa02-f8"]=lambda: f_icons([("form","a report form, four figures"),
    ("spreadsheet","an answer sheet with a raw total"),("transfer","raw total to band"),
    ("calendar","one morning"),("refnumber","a version number"),
    ("review","two forms, two dates")],3)
S["qa02-f9"]=lambda: f_realia(tbl("Result form &middot; extract",
    "Oksana Hryn &middot; 14 February",
    ["Paper","Band"],
    [["Listening","7.0"],["Reading","7.0"],["Writing","<b>6.5</b>"],["Speaking","7.0"],
     ["<b>Overall band</b>","<b>7.0</b>"]],
    note="One version, one morning. Her register asks for 7.0 in each paper."), 520)
S["qa02-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("oksana",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("form",360,196,0.24),("calculator",450,198,0.22),
     ("computer",500,142,0.42),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"BAND SCALE",[("overall","7.0"),("Writing","6.5")]),
    clockat=(680,44,22,17,0))
S["qa02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Form 1", None,
        "<p>6.5 &middot; 6.5 &middot; 5.0 &middot; 7.0</p>"
        "<p style='font-size:20px'><b>Overall 6.5</b></p>"
        "<p style='color:#6b6861;font-size:13px'>Average 6.25, rounded up.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Form 2", None,
        "<p>6.5 &middot; 6.5 &middot; 5.5 &middot; 6.0</p>"
        "<p style='font-size:20px'><b>Overall 6.0</b></p>"
        "<p style='color:#6b6861;font-size:13px'>Average 6.125. A difference of 0.125 in the "
        "average, and half a band on the form.</p>"), w)[0:3],
    w=900, h=280)
S["qa02-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I got a 6 in February. I need 6.5 so I have to take it again.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>February: reported <b>6.0</b> overall. Listening 6.5, Reading 6.5, Writing 5.5, "
        "Speaking 6.0. Average <b>6.125</b>, and the published rule rounds that to 6.0. Writing is "
        "holding the average down and is the paper I have done least work on. The figure tells me "
        "what I did on one version on one morning; it does not tell me what I would get next "
        "month.</p>"), w)[0:3],
    w=920, h=290)
S["qa02-f13"]=lambda: f_realia(form("Note planner",
    [("My four bands",""),("The average",""),("What was reported",""),
     ("My weakest paper",""),("The band I need",""),("What this figure does not tell me","")]), 520)
S["qa02-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("marek",130,172,{"seated":True}),("oksana",205,176,{"seated":True}),
     ("priya",290,172,{}),("ines",365,176,{"seated":True}),("samira",440,172,{"seated":True}),
     ("lars",515,176,{"seated":True}),("grace",590,170,{}),("hana",655,172,{}),
     ("mei",720,170,{}),("yusuf",785,172,{}),("junseo",845,170,{}),
     ("nour",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("calculator",350,198,0.24),
     ("printer",430,196,0.3),("form",560,198,0.22),("table",650,0,1.0),
     ("envelope",860,198,0.28),("shelf",930,96,0.5)],
    board=(40,22,210,112,".25 UP, .75 UP",[("6.25","6.5"),("6.125","6.0"),("6.875","7.0")]),
    clockat=(262,34,22,16,0))
S["qa02-f15"]=lambda: f_chart([("the overall band",7),("my weakest paper",5),
    ("my strongest paper",2),("the raw score",1),("I have never seen a form",4)])
S["qa02-f16"]=lambda: f_realia(doc("On a desk in March",
    "Two result forms, four months apart",
    table_html(["Paper","October","February"],
      [["Listening","5.5","<b>7.0</b>"],["Reading","6.5","6.0"],
       ["Writing","6.0","<b>5.5</b>"],["Speaking","6.0","5.5"],
       ["<b>Overall</b>","<b>6.0</b>","<b>6.0</b>"]])
    + "<p><i>The large number did not move. Two of the four did, by a whole band and by half a "
    "band, in opposite directions. Her university asks for 6.0 overall and she already has it.</i></p>",
    "A calculator on the desk reads 6.125. The notebook page is headed: same band, different "
    "English."), 600)

# ---------------- Unit 3 ----------------
S["qa03-f1"]=lambda: f_icons([("stairwell","six levels, A1 to C2"),
    ("quotemark","a descriptor: can understand"),("book","a framework, 2001"),
    ("notebook","a companion volume, 2020"),("worldmap","written for many countries"),
    ("scales","a scale with an arrow between two levels"),
    ("teacher","teachers judging learners"),("note","a column of can do statements"),
    ("balance","approximate"),("university","an admissions page"),
    ("jobnotice","a job advertisement"),("form","a government form"),
    ("book","a dictionary open at mediation"),("review","a tick in a box"),
    ("noentry","a cross in a box"),("magnifier","a sheet headed not a test")],4)
S["qa03-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("junseo",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("note",390,196,0.24),("board",106,86,0.76),
     ("university",470,198,0.24),("window",790,56,0.94)],
    board=(676,22,210,112,"SIX LEVELS",[("C1","7.0-8.0"),("B2","5.5-6.5"),("B1","4.0-5.0")]),
    clockat=(622,44,22,14,30))
S["qa03-f3"]=lambda: f_icons([("stairwell","basic user: A1 and A2"),
    ("stairwell","independent user: B1 and B2"),("stairwell","proficient user: C1 and C2"),
    ("quotemark","can understand"),("note","can produce"),
    ("magnifier","a reference, not a test")],3)
S["qa03-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The organization","Band asked for","Level asked for","Do they match","Where we read it"],
    blankrows(6,5),
    note="The one that asked for both: ______________________"), 680)
S["qa03-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to new students",
    "The six levels, and how bands are mapped onto them &middot; page 1 of 1",
    "<p><b>The sources.</b> The Council of Europe, <i>Common European Framework of Reference for "
    "Languages: Learning, teaching, assessment</i>, <b>2001</b>; and the <i>CEFR Companion "
    "Volume</i>, Council of Europe, <b>2020</b>. The mapping of bands to levels is published "
    "separately by the test owners. Printed here in our own words.</p>"
    + table_html(["Level","Grouping","Name"],
      [["<b>A1</b>","Basic user","Breakthrough"],["<b>A2</b>","Basic user","Waystage"],
       ["<b>B1</b>","Independent user","Threshold"],["<b>B2</b>","Independent user","Vantage"],
       ["<b>C1</b>","Proficient user","Effective operational proficiency"],
       ["<b>C2</b>","Proficient user","Mastery"]])
    + "<p><b>Descriptors.</b> Each level is described by short statements that begin <i>Can "
    "understand&hellip;</i>, <i>Can produce&hellip;</i>, <i>Can take part in&hellip;</i>. They "
    "describe what a learner can do. They do not describe what a learner gets wrong.</p>"
    "<p><b>The 2020 volume</b> kept the six levels and added more. It extended the descriptors for "
    "<b>mediation</b> &mdash; helping other people understand each other &mdash; and for online "
    "interaction, and it moved away from describing the ideal learner as somebody who sounds like "
    "a native speaker.</p>"
    + table_html(["Bands","Level, indicatively"],
      [["4.0 &ndash; 5.0","B1"],["5.5 &ndash; 6.5","B2"],["7.0 &ndash; 8.0","C1"],
       ["8.5 &ndash; 9.0","C2"]])
    + "<p><b>What the framework says about itself.</b> It states plainly that it is a "
    "<b>reference</b> document and that it is <b>not prescriptive</b>: it is there to be consulted, "
    "not obeyed, and the Council of Europe has repeatedly said it is not a tool for sorting people. "
    "It is not a test and contains no test. Its descriptors were calibrated using the judgments of "
    "teachers about learners, not against any single examination. It does not say how long a level "
    "takes, it does not say what a level is worth in a seminar or a hospital, and it does not say "
    "that two learners at B2 are interchangeable.</p>"
    "<p><b>Three things it does not do.</b> Set a pass mark &middot; rank languages &middot; decide "
    "who gets in.</p>",
    "Our summary of two published documents. Read them yourself: both are free."), 620)
S["qa03-f6"]=lambda: f_realia(tbl("The can do sentence", None,
    ["Level","A descriptor, in short form","An example of my own"],
    [["<b>A2</b>","Can understand short, simple texts on familiar matters",
      "I can read a short message from my landlord."],
     ["<b>B1</b>","Can understand the main points of clear standard speech",
      "I can follow a slow lecture if I know the topic."],
     ["<b>B2</b>","Can understand extended speech and follow complex argument",BLANK],
     ["<b>C1</b>","Can express ideas fluently without much obvious searching for words",BLANK]],
    note="Two cells are empty on purpose."), 640)
S["qa03-f7"]=lambda: f_part("An indicative mapping, published as a guide",
    [("B1 &middot; bands 4.0 to 5.0",2,"#9fb4cc"),("B2 &middot; bands 5.5 to 6.5",3,"#3b6fa0"),
     ("C1 &middot; bands 7.0 to 8.0",3,"#1f4e79"),("C2 &middot; bands 8.5 and 9.0",2,"#12314d")], 560)
S["qa03-f8"]=lambda: f_icons([("stairwell","six rungs"),
    ("quotemark","can understand"),("transfer","two scales, one soft arrow"),
    ("university","a level on an admissions page"),("book","the framework, 2001"),
    ("notebook","the companion volume, 2020")],3)
S["qa03-f9"]=lambda: f_realia(tbl("Ashworth University &middot; admissions extract",
    "English language requirement &middot; MSc Structural Engineering",
    ["Test","Band required","Level required"],
    [["This test","<b>6.5</b>","B2 or above"],
     ["Test B","&mdash;","B2 or above"],
     ["Test C","&mdash;","B2 or above"],
     ["Our own test","58","&mdash;"]],
    note="We accept either. The first row asks twice, and the two asks do not agree."), 580)
S["qa03-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("junseo",400,176,{"seated":True}),("grace",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("university",360,196,0.24),("computer",490,142,0.42),
     ("note",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"TWO SCALES",[("band 5.5","B2"),("band 6.5","B2")]),
    clockat=(680,44,22,15,30))
S["qa03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Extract 1", None,
        "<p><b>Band 6.5</b> required.</p>"
        "<p style='color:#6b6861;font-size:13px'>No level is named anywhere on the page.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Extract 2", None,
        "<p><b>B2 or above</b> required.</p>"
        "<p style='color:#6b6861;font-size:13px'>No band is named anywhere on the page. The only "
        "way to know what they will accept is to ask them.</p>"), w)[0:3],
    w=900, h=270)
S["qa03-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I am B2 so I can apply to Ashworth. I will send the form this week.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>February: reported <b>5.5</b> overall. On the mapping published by the test owners, "
        "bands 5.5 to 6.5 sit at <b>B2</b>, so 5.5 is at B2. The Ashworth page asks for band 6.5 "
        "in one paragraph and B2 or above in another. The two do not agree, and the mapping is "
        "published as a guide, not as a rule. I am going to telephone the admissions office before "
        "I apply, and write down what they say and the date.</p>"), w)[0:3],
    w=920, h=300)
S["qa03-f13"]=lambda: f_realia(form("Note planner",
    [("My band",""),("The level it maps onto",""),("What the page asks for",""),
     ("Where the page disagrees with itself",""),("Who I will ask",""),
     ("What I will write down","")]), 540)
S["qa03-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("junseo",130,172,{"seated":True}),("grace",205,176,{"seated":True}),
     ("priya",290,172,{}),("nour",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("lars",515,176,{"seated":True}),("ines",590,170,{}),("marek",655,172,{}),
     ("samira",720,170,{}),("oksana",785,172,{}),("hana",845,170,{}),
     ("tomas",905,172,{}),("yusuf",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("phone",350,198,0.22),
     ("printer",430,196,0.3),("university",560,198,0.22),("table",650,0,1.0),
     ("form",860,198,0.24),("shelf",930,96,0.5)],
    board=(40,22,206,112,"A REFERENCE, NOT A RULE",[("A1-A2","basic"),("B1-B2","independent"),("C1-C2","proficient")]),
    clockat=(262,34,22,11,0))
S["qa03-f15"]=lambda: f_chart([("a university page",6),("a job advertisement",2),
    ("a language school",4),("a government form",3),("never until today",5)])
S["qa03-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "One band, two requirements, five weeks",
    "<p><b>The admissions page</b>, with two paragraphs underlined in different colors: "
    "<b>band 6.5</b> and <b>B2 or above</b>.</p>"
    "<p><b>The result form.</b> Overall <b>5.5</b>.</p>"
    "<p><b>The printed mapping.</b> Bands 5.5 to 6.5 sit at B2 &mdash; indicatively.</p>"
    "<p><b>A slip of paper</b> with the admissions office telephone number on it, and a note of "
    "what they said: the first paragraph is the one we use.</p>"
    "<p><i>Enough money for one more test. Five weeks until the application closes.</i></p>",
    "Seven o'clock. The mapping is true, published and approximate, and it is not an argument."), 600)
