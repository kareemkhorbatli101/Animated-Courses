# -*- coding: utf-8 -*-
"""Plumbline Book 1 figure specs, Units 4 to 7."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Unit 4 ----------------
S["qa04-f1"]=lambda: f_icons([("spreadsheet","a table of figures"),
    ("data","a column of means"),("balance","a pie divided unevenly"),
    ("tally","a bar chart of four bars"),("queue","a crowd of test takers"),
    ("student","one person, standing apart"),("calendar","a calendar year"),
    ("worldmap","every country"),("book","a dictionary open at mean"),
    ("stars","the highest figure"),("noentry","the lowest figure"),
    ("transfer","a group above the mean"),("review","a group below it"),
    ("form","a sheet headed all test takers"),("note","a sheet headed by first language"),
    ("magnifier","a footnote")],4)
S["qa04-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("samira",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("form",390,196,0.24),("board",104,86,0.78),
     ("spreadsheet",470,198,0.22),("window",790,56,0.94)],
    board=(660,22,224,114,"MEAN BANDS, ONE YEAR",[("Listening","highest"),("Writing","lowest")]),
    clockat=(610,44,22,9,0))
S["qa04-f3"]=lambda: f_icons([("spreadsheet","all test takers"),
    ("worldmap","by first language"),("map","by country"),
    ("review","Academic and General Training"),("data","four skill means"),
    ("magnifier","the year this covers")],3)
S["qa04-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The group","Listening","Reading","Writing","Speaking"],
    blankrows(6,5),
    note="The figure that surprised us: ______________________"), 680)
S["qa04-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to new students",
    "The published test taker performance figures &middot; page 1 of 1",
    "<p><b>The source.</b> The test taker performance tables published each year by the test "
    "owners. Downloaded <b>4 February</b> for the most recent year then available. Printed here in "
    "our own words. <b>We have not reprinted their figures: look them up, because they change "
    "every year.</b></p>"
    "<p>Every year the owners of the test publish how everybody did. The tables give a <b>mean</b> "
    "band for each of the four papers and a mean overall band. They are published for all Academic "
    "test takers in the year, and again cut by <b>first language</b>, by <b>country of origin</b> "
    "and by test &mdash; Academic or General Training.</p>"
    + table_html(["What the tables give","What they are a figure of"],
      [["A mean for each paper","every Academic test taker in one calendar year"],
       ["A mean overall band","the same crowd, averaged again"],
       ["The same, by first language","the people from each language group who chose to sit"],
       ["The same, by country","the people from each country who chose to sit"]])
    + "<p><b>One clear pattern.</b> Across the years we have looked at, the mean for <b>Writing</b> "
    "has been the lowest of the four skill means for Academic test takers, and Listening and "
    "Reading have been higher than Writing and Speaking. That is a pattern in the published "
    "figures, not a law.</p>"
    "<p><b>What an average cannot do.</b> These tables describe about two million people who chose "
    "to sit a test. They are not a sample of any country's population: nobody is picked at random, "
    "everybody is there because they wanted something. A subgroup mean therefore says as much "
    "about <b>who applies</b> from a place as about anybody's English.</p>"
    "<p>The tables do not say <b>why</b> a mean is where it is. They do not say what any individual "
    "got, and they cannot be used to predict what you will get: an average is a fact about a crowd, "
    "and you are one person inside it. The owners note that the figures for different years are "
    "not safely compared, because the people sitting the test are not the same people.</p>"
    "<p><b>Four things the tables do not say.</b> Why &middot; who &middot; your score &middot; "
    "next year.</p>",
    "Our summary of a published table. Read the owners' own pages, and write down the year."), 620)
S["qa04-f6"]=lambda: f_realia(tbl("Talking about a mean", None,
    ["The phrase","What it means","An example"],
    [["<b>the mean for</b>","the average of one named group",
      "the mean for all Academic test takers"],
     ["<b>below the mean</b>","lower than that average","My Writing was below the mean."],
     ["<b>the highest of the four</b>","the top one in a set of four",
      "Listening was the highest of the four."],
     ["<b>varies by</b>","is different from group to group","The mean varies by first language."],
     ["<b>in that year</b>",BLANK,BLANK],
     ["<b>self-selected</b>",BLANK,BLANK]],
    note="Four cells are empty on purpose."), 640)
S["qa04-f7"]=lambda: f_chart([("Listening",62),("Reading",60),("Writing",55),("Speaking",59)],
    unit="class mean x 10")
S["qa04-f8"]=lambda: f_icons([("queue","two million, in one year"),
    ("student","one person, one form"),("worldmap","cut by first language"),
    ("map","cut by country"),("calendar","one calendar year"),
    ("noentry","two years, not comparable")],3)
S["qa04-f9"]=lambda: f_realia(tbl("Performance table &middot; extract",
    "Mean band by first language, one published year &middot; figures shown here are our own "
    "illustration, not the published ones",
    ["First language","Listening","Reading","Writing","Speaking"],
    [["Language A","6.4","6.3","5.8","6.1"],
     ["Language B","6.1","6.0","5.7","6.0"],
     ["Language C","5.9","5.8","5.6","5.9"],
     ["Language D","6.6","6.4","6.0","6.2"],
     ["Language E","6.0","6.2","5.9","5.8"],
     ["Language F","5.7","5.6","5.5","5.9"]],
    note="Means, not people. Everybody in every row chose to sit. Look up the real table and write "
    "down the year."), 680)
S["qa04-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("samira",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("spreadsheet",360,196,0.24),("computer",490,142,0.42),
     ("form",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"FOUR MEANS",[("lowest","Writing"),("highest","Listening")]),
    clockat=(680,44,22,18,10))
S["qa04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Extract 1 &middot; all test takers", None,
        "<p>One row. Four skill means and one overall mean, for everybody.</p>"
        "<p style='color:#6b6861;font-size:13px'>It cannot show you any group.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Extract 2 &middot; by first language", None,
        "<p>Eight rows. The same four columns in each.</p>"
        "<p style='color:#6b6861;font-size:13px'>It can show you a group, and it still cannot show "
        "you a person.</p>"), w)[0:3],
    w=900, h=270)
S["qa04-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>The average for Writing is low, so Writing is the hardest paper. I am going to do more "
        "Writing.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>I looked at the published performance tables on <b>4 February</b>, for the most recent "
        "year available. They give a mean band for each paper for all Academic test takers, and "
        "again by first language and by country. In that year, and the years before it, Writing "
        "had the lowest of the four skill means. That is a pattern in a self-selected crowd of "
        "about two million; it does not say Writing is harder, and it says nothing about me. My own "
        "Writing band was <b>5.5</b>, my lowest paper, so I am moving two of my four weekly hours "
        "to Writing &mdash; because of my form, not because of the table.</p>"), w)[0:3],
    w=920, h=310)
S["qa04-f13"]=lambda: f_realia(form("Note planner",
    [("The year the figures cover",""),("Where I read it, and when",""),("The four means",""),
     ("The pattern",""),("What it cannot say",""),
     ("What I will change, from my own form","")]), 540)
S["qa04-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("samira",130,172,{"seated":True}),("lars",205,176,{"seated":True}),
     ("priya",290,172,{}),("hana",365,176,{"seated":True}),("nour",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("mei",590,170,{}),("junseo",655,172,{}),
     ("ines",720,170,{}),("marek",785,172,{}),("oksana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.24),
     ("printer",430,196,0.3),("tally",560,198,0.24),("table",650,0,1.0),
     ("data",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,206,112,"A CROWD, AND ONE PERSON",[("two million","chose to sit"),("you","one form")]),
    clockat=(262,34,22,14,0))
S["qa04-f15"]=lambda: f_chart([("never heard of them",5),("heard of them, never looked",4),
    ("looked once",2),("use them with my students",1),("do not believe them",2)])
S["qa04-f16"]=lambda: f_realia(doc("On a desk at night",
    "One row, circled, and eight weeks left",
    "<p><b>The published table</b>, with the row for her first language circled.</p>"
    "<p><b>Her own result form.</b> Writing <b>5.5</b>, and she needs 6.0 overall with nothing "
    "under 5.5.</p>"
    "<p><b>A small chart</b> of the class of eleven, drawn by hand.</p>"
    "<p><b>A notebook page</b> headed <i>is this my ceiling?</i></p>"
    "<p><i>The mean overall band for that group, in that published year, is lower than the band "
    "she needs. She has been looking at it for an hour.</i></p>",
    "Ten o'clock. Everybody in that row chose to sit the test, which is the first thing to say "
    "about the row and the last thing anybody says."), 600)

# ---------------- Unit 5 ----------------
S["qa05-f1"]=lambda: f_icons([("headset","one playing, one arrow"),
    ("signal","the gaps between words"),("thread","two words running together"),
    ("quotemark","a weak form, nearly lost"),("pen","still writing"),
    ("spreadsheet","a numbered answer left blank"),("review","one letter wrong"),
    ("speechbubble","an ear with a question mark"),("data","sound, then meaning"),
    ("book","a dictionary open at decode"),("microphone","a monologue"),
    ("meeting","three speakers in a seminar"),("form","a sheet headed why I missed it"),
    ("timer","a stopwatch"),("stars","a tick"),("noentry","a cross")],4)
S["qa05-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("mei",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("spreadsheet",390,196,0.24),("board",104,86,0.78),
     ("headset",470,198,0.24),("window",790,56,0.94)],
    board=(660,22,224,114,"WHERE ARE THE GAPS",[("heard","one stream"),("written","four words")]),
    clockat=(610,44,22,10,30))
S["qa05-f3"]=lambda: f_icons([("book","I did not know the word"),
    ("pen","I wrote it too slowly"),("review","I spelled it wrongly"),
    ("timer","I was still writing the answer before"),
    ("speechbubble","I was waiting for a different word"),
    ("form","name the reason, not the mark")],3)
S["qa05-f4"]=lambda: f_realia(tbl("Team research &middot; why we missed it", None,
    ["Question","Did not know it","Too slow","Wrong spelling","Still writing","Expected another"],
    blankrows(10,6),
    note="The reason that happened most: ______________________"), 720)
S["qa05-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to teachers and students",
    "Why our listening lessons stop and go back &middot; page 1 of 1",
    "<p><b>The source.</b> John Field, <i>Listening in the Language Classroom</i>, Cambridge "
    "University Press, <b>2008</b>. Printed here in our own words.</p>"
    "<p>Most listening lessons in the world follow the same shape. The teacher plays a recording, "
    "asks questions, takes the answers, says which are right and plays it again. Field calls this "
    "the <b>comprehension approach</b>, and his argument is short: it <b>tests</b> listening, it "
    "does not <b>teach</b> it. The student who got four out of ten learns that they got four out "
    "of ten.</p>"
    + table_html(["A comprehension lesson","A diagnostic lesson"],
      [["Plays the whole recording","Plays three words, twice"],
       ["Asks what the answer was","Asks why you did not get it"],
       ["Marks right and wrong","Names which of five things went wrong"],
       ["Gives everybody the same homework","Gives two students different homework"]])
    + "<p><b>Two operations.</b> <b>Decoding</b> is turning a stream of sound into words. "
    "<b>Meaning-building</b> is turning those words into sense, using what you already know. A "
    "student can fail at either, and the classroom cure is different for each one. A student who "
    "did not know the word needs vocabulary. A student who knew the word but did not hear it inside "
    "the stream needs work on the stream.</p>"
    "<p><b>So the first question</b> after a wrong answer is not <i>what was the answer</i>. It is "
    "<b>why did you not get it</b>. Field's book is largely a set of ways of asking that question "
    "in a classroom: going back to the exact second, playing three words, asking what the student "
    "thought they heard.</p>"
    "<p><b>What this book does not promise.</b> It is a book of argument and classroom method, "
    "drawing on research into how people process speech. It is <b>not an experiment</b> and it "
    "reports no trial showing that one approach produces higher test scores than another. Field "
    "does not claim a quick fix and says so repeatedly: decoding improves slowly. The book is about "
    "teaching listening, not about test technique, and it offers no advice about any examination. "
    "And it cannot tell you which of the five reasons applies to you on a given morning. Only you "
    "were there.</p>",
    "Our summary of a published book. Read Chapter 5 if your center has a copy."), 620)
S["qa05-f6"]=lambda: f_realia(tbl("Five verbs for hearing", None,
    ["The verb","What it means","An example"],
    [["<b>hear</b>","sound arrives, with or without your attention",
      "I heard a number but not which one."],
     ["<b>listen to</b>","you put your attention on it","Listen to Part 3 twice tonight."],
     ["<b>catch</b>","hear well enough to write it","I did not catch the street name."],
     ["<b>miss</b>","fail to get it at all","I missed question 12."],
     ["<b>make out</b>",BLANK,BLANK],
     ["<b>overhear</b>",BLANK,BLANK]],
    note="Four cells are empty on purpose."), 640)
S["qa05-f7"]=lambda: f_chart([("still writing the answer before",13),
    ("expected a different word",10),("did not know the word",9),
    ("wrote it too slowly",6),("wrong spelling",3)], unit="wrong answers")
S["qa05-f8"]=lambda: f_icons([("book","an unknown word"),
    ("pen","still writing while the speaker goes on"),("review","two letters wrong"),
    ("speechbubble","expected one word, heard another"),
    ("timer","a half-written answer"),("tally","a tally sheet of five columns")],3)
S["qa05-f9"]=lambda: f_realia(tbl("Practice answer sheet &middot; extract",
    "Questions 9 to 20, with a reason code in the margin",
    ["No.","Answer written","Reason code"],
    [["9","car park","&mdash;"],["10","14 March","&mdash;"],["11","reception","&mdash;"],
     ["12","<b>blank</b>","S &middot; too slow"],["13","<b>blank</b>","W &middot; still writing"],
     ["14","<b>blank</b>","W &middot; still writing"],["15","north gate","&mdash;"],
     ["16","<b>blank</b>","V &middot; did not know it"],["17","Thursday","&mdash;"],
     ["18","<b>blank</b>","E &middot; expected a date"],["19","two weeks","&mdash;"],
     ["20","<b>blank</b>","P &middot; spelling"]],
    note="Twelve blanks on the whole sheet, five reasons, one habit."), 600)
S["qa05-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{"seated":True}),
     ("mei",400,176,{"seated":True}),("yusuf",520,172,{})],
    props=[("table",230,0,1.2),("spreadsheet",360,196,0.24),("computer",490,142,0.42),
     ("headset",450,198,0.22),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"12, 13, 14",[("one problem","two casualties")]),
    clockat=(680,44,22,16,0))
S["qa05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Sheet 1", None,
        "<p><b>Eleven blanks</b>, spread evenly across forty questions.</p>"
        "<p style='color:#6b6861;font-size:13px'>Eleven separate problems, probably vocabulary.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("Sheet 2", None,
        "<p><b>Eleven blanks</b>, in three tight groups.</p>"
        "<p style='color:#6b6861;font-size:13px'>Three problems and eight casualties. A different "
        "student with the same score.</p>"), w)[0:3],
    w=900, h=280)
S["qa05-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I got 19 out of 40 in Listening. Please send me a vocabulary list for Part 4.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>I got <b>19 out of 40</b> in the practice Listening paper on <b>7 February</b>. Eleven "
        "of my twenty-one wrong answers came in three groups of three or four, in Parts 2 and 3. In "
        "every group I knew the first word and was still writing it when the next answer was "
        "spoken. Only four of the twenty-one were words I did not know. So my main problem is not "
        "vocabulary: it is that I stay with a question after the recording has left it. This week I "
        "am practicing writing short, and marking an answer I am unsure of instead of finishing "
        "it.</p>"), w)[0:3],
    w=920, h=310)
S["qa05-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the score",""),("How many wrong",""),("Where the blanks came in groups",""),
     ("The reason for each group",""),("How many were really vocabulary",""),
     ("The one thing I will change","")]), 540)
S["qa05-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("mei",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("yusuf",290,172,{}),("junseo",365,176,{"seated":True}),("hana",440,172,{"seated":True}),
     ("lars",515,176,{"seated":True}),("ines",590,170,{}),("samira",655,172,{}),
     ("nour",720,170,{}),("marek",785,172,{}),("oksana",845,170,{}),
     ("grace",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("headset",350,198,0.24),
     ("printer",430,196,0.3),("tally",560,198,0.24),("table",650,0,1.0),
     ("timer",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,210,112,"ONE PLAYING, FIVE REASONS",[("knew it","too slow"),("did not","vocabulary")]),
    clockat=(262,34,22,15,0))
S["qa05-f15"]=lambda: f_chart([("did not know the word",3),("too slow",2),
    ("wrong spelling",1),("still writing the answer before",4),("expected something else",1)])
S["qa05-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Four papers in three weeks, and a list nobody has marked",
    table_html(["Practice paper","Score out of 40","Where the wrong answers came"],
      [["7 January","18","three groups"],["20 January","19","three groups"],
       ["31 January","19","four groups"],["7 February","21","three groups"]])
    + "<p><b>The tally sheet</b> says the same thing every time: most wrong answers come in groups, "
    "and she knew the first word of every group.</p>"
    "<p><b>A vocabulary list of two hundred words</b>, learned, with no marks on it. None of them "
    "appear in the tally.</p>",
    "Nine o'clock. The score moved three marks. The habit did not move at all."), 620)

# ---------------- Unit 6 ----------------
S["qa06-f1"]=lambda: f_icons([("passport","a passport, open at the photograph"),
    ("idcard","an identity card"),("water","water in a clear bottle"),
    ("pencil","a pencil and an eraser"),("phone","no telephone"),
    ("clock","no watch"),("book","no dictionary"),
    ("cupboard","a locker with a key"),("camera","a photograph taken on the day"),
    ("desk","a numbered desk"),("clock","a clock on the wall"),
    ("handsup","raising a hand"),("noentry","no leaving the room"),
    ("stamp","a result withheld"),("form","a notice to candidates"),
    ("magnifier","a line of small print")],4)
S["qa06-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("tomas",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("passport",370,196,0.24),("board",104,86,0.78),
     ("water",420,198,0.22),("phone",470,198,0.2),("window",790,56,0.94)],
    board=(660,22,224,114,"IN THE ROOM OR NOT",[("water","label off"),("watch","locker")]),
    clockat=(610,44,22,9,15))
S["qa06-f3"]=lambda: f_icons([("passport","you must bring"),
    ("water","you may bring"),("noentry","you must not bring"),
    ("pencil","you do not have to bring"),("cupboard","a locker row"),
    ("magnifier","ask your own test center")],3)
S["qa06-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The rule","What the published notice says","What our test center says","Where we read it"],
    blankrows(6,4),
    note="The one that was different: ______________________"), 660)
S["qa06-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to students sitting in March",
    "The rules for the morning &middot; page 1 of 1",
    "<p><b>The source.</b> The notice to candidates and information for candidates published by the "
    "test owners, together with our own test center's page. Downloaded <b>4 February</b>. Printed "
    "here in our own words. <b>Rules differ a little between countries: read your own center's "
    "page.</b></p>"
    + table_html(["","What the notice says"],
      [["<b>You must bring</b>","the <b>same</b> identification document you booked with &mdash; "
        "for most people a passport. Your photograph is taken at the center on the day, and in some "
        "countries a finger scan as well. If the document does not match the booking, you may not "
        "be allowed to sit"],
       ["<b>You may bring</b>","water, in a <b>clear bottle with the label removed</b>; a pencil "
        "and an eraser. That is close to the whole list"],
       ["<b>You must not bring</b>","a telephone &middot; a watch of any kind &mdash; there is a "
        "clock in the room &middot; a dictionary &middot; notes of any kind &middot; any electronic "
        "device. Personal belongings are left outside, usually in a locker, and no test material or "
        "note of yours may leave the room"],
       ["<b>You do not have to bring</b>","your booking confirmation on paper; a pen"]])
    + "<p><b>When a rule is broken.</b> The published notice is plain. A result may be "
    "<b>withheld</b> or <b>cancelled</b>, and in some cases a candidate may be required to sit the "
    "test again. The owners state that they may withhold or cancel a result where they have reason "
    "to doubt that it is the candidate's own work.</p>"
    "<p><b>Speaking.</b> The notice also says that an answer learned by heart will be penalized, "
    "and that examiners report it when they hear it.</p>"
    "<p><b>The question this notice does not answer.</b> It lists the rules; it does not explain "
    "them, and it does not say how a decision about misconduct is made, or by whom, or whether "
    "anybody can argue with it. It does not define what makes an answer a <b>memorized</b> one "
    "&mdash; the line between a phrase you have practiced and a paragraph you have learned is "
    "nowhere in the document, and it is the question students ask most. It cannot tell you what "
    "your own center does at the door, which is why it tells you to ask them.</p>",
    "Our summary of a published notice. Read your own center's page, and read it before the week "
    "of the test."), 620)
S["qa06-f6"]=lambda: f_realia(tbl("Must, may, and the passive", None,
    ["The form","What it means","An example"],
    [["<b>you must</b>","it is necessary","You must bring your passport."],
     ["<b>you must not</b>","it is forbidden","You must not bring a watch."],
     ["<b>you may</b>","it is permitted","You may bring water in a clear bottle."],
     ["<b>you do not have to</b>","it is not necessary","You do not have to bring a pen."],
     ["<b>phones are not allowed</b>",BLANK,BLANK],
     ["<b>results may be withheld</b>",BLANK,BLANK]],
    note="Four cells are empty on purpose."), 640)
S["qa06-f7"]=lambda: f_chart([("a watch",4),("nothing they should not have",4),
    ("a bottle with the label on",2),("a telephone still in a pocket",1),
    ("notes in a sleeve",0)])
S["qa06-f8"]=lambda: f_icons([("passport","the document you booked with"),
    ("water","a clear bottle, no label"),("cupboard","a locker with a key"),
    ("clock","a clock on the wall"),("stamp","a result withheld"),
    ("speechbubble","a memorized answer?")],3)
S["qa06-f9"]=lambda: f_realia(tbl("For the door of the test room",
    "Four lists, and one line about results",
    ["","Items"],
    [["<b>MUST</b>","the identification document you booked with"],
     ["<b>MAY</b>","water in a clear bottle, label removed &middot; a pencil &middot; an eraser"],
     ["<b>MUST NOT</b>","a telephone &middot; a watch &middot; a dictionary &middot; notes "
      "&middot; any electronic device"],
     ["<b>NEED NOT</b>","your confirmation on paper &middot; a pen"],
     ["<b>ALSO</b>","your photograph is taken here; in some countries a finger scan"],
     ["<b>IF A RULE IS BROKEN</b>","a result may be withheld or cancelled, and a retest may be "
      "required"]],
    note="Leave everything else in the locker."), 620)
S["qa06-f10"]=lambda: f_scene(960,430, people=[("tomas",300,176,{}),
     ("lars",430,172,{}),("priya",560,172,{})],
    props=[("passport",250,196,0.26),("water",310,198,0.22),("clock",360,198,0.2),
     ("cupboard",120,110,0.62),("board",700,86,0.6),("window",840,56,0.9)],
    counter_=(210,300,420,70),
    clockat=(660,44,22,8,40))
S["qa06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Desk 1", None,
        "<p>A pencil. An eraser. A clear bottle with no label.</p>"
        "<p style='color:#6b6861;font-size:13px'>Nothing here needs a conversation at the door.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("Desk 2", None,
        "<p><s>A watch.</s> <s>A telephone, face down.</s> <s>A bottle with a label.</s></p>"
        "<p style='color:#6b6861;font-size:13px'>Three crosses, none of them deliberate. The watch "
        "is the one everybody forgets.</p>"), w)[0:3],
    w=900, h=270)
S["qa06-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>Bring your passport and some water. Leave your phone outside. Good luck!</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>For <b>9 March</b>. You <b>must</b> bring the same identification document you booked "
        "with &mdash; for all of us that is a passport. You <b>may</b> bring water in a clear bottle "
        "with the label removed, and a pencil and an eraser. You <b>must not</b> bring a telephone, "
        "a watch of any kind, a dictionary or notes; everything else goes in a locker. You <b>do "
        "not have to</b> bring your confirmation on paper. If a rule is broken, a result may be "
        "withheld or cancelled. Our center also asks you to arrive forty-five minutes early, which "
        "is not in the general notice. I checked both pages on 4 February.</p>"), w)[0:3],
    w=920, h=320)
S["qa06-f13"]=lambda: f_realia(form("Note planner",
    [("Must bring",""),("May bring",""),("Must not bring",""),
     ("Do not have to bring",""),("What happens if a rule is broken",""),
     ("One rule only my center has","")]), 540)
S["qa06-f14"]=lambda: f_scene(1000,450,
    people=[("tomas",70,176,{}),("lars",140,172,{}),("priya",210,176,{}),
     ("samira",300,172,{}),("junseo",370,176,{}),("mei",440,172,{}),
     ("nour",515,176,{}),("ines",590,170,{}),("marek",655,172,{}),
     ("oksana",720,170,{}),("hana",785,172,{}),("yusuf",845,170,{}),
     ("grace",905,172,{}),("chiamaka",955,174,{})],
    props=[("cupboard",95,106,0.66),("board",170,88,0.64),("passport",350,198,0.24),
     ("printer",430,196,0.3),("water",560,198,0.2),("camera",860,198,0.28),
     ("shelf",930,96,0.5)],
    counter_=(240,312,380,66),
    board=(40,22,214,114,"MUST, MAY, MUST NOT, NEED NOT",[("water","label off"),("watch","locker")]),
    clockat=(272,34,22,8,20))
S["qa06-f15"]=lambda: f_chart([("a watch",5),("a telephone",2),
    ("a labeled bottle",3),("a dictionary",1),("nothing",3)])
S["qa06-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Three paragraphs learned by heart, and a band that came back lower",
    "<p><b>The printed notice</b>, with one paragraph underlined: an answer learned by heart will "
    "be penalized, and examiners report it.</p>"
    "<p><b>A passport.</b> <b>A bottle</b> with the label torn off, lying next to its label. "
    "<b>A watch</b>, face down.</p>"
    "<p><b>A notebook page</b> headed <i>what counts as memorized?</i>, with nothing written under "
    "it.</p>"
    "<p><i>He learned three paragraphs because a video told him to: his home town, a book, "
    "technology. He used two of them. His Speaking band came back a band lower than his practice "
    "bands, and nobody told him why.</i></p>",
    "Nine o'clock. The notice says the rule exists. It does not say where the line is."), 620)

# ---------------- Unit 7 ----------------
S["qa07-f1"]=lambda: f_icons([("quotemark","a single word"),
    ("thread","four related forms"),("book","a stack of texts: a corpus"),
    ("tally","frequency"),("data","coverage of a page"),
    ("wordcount","running words"),("stairwell","a threshold"),
    ("noentry","unassisted: no dictionary"),("headset","spoken text"),
    ("essay","written text"),("idcard","a proper noun"),
    ("transfer","a derivation"),("balance","per cent"),
    ("scales","a ratio"),("spreadsheet","a sample"),("magnifier","a footnote")],4)
S["qa07-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("nour",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("essay",390,196,0.24),("board",104,86,0.78),
     ("tally",470,198,0.22),("window",790,56,0.94)],
    board=(660,22,224,114,"TWO WORDS IN A HUNDRED",[("98%","one in fifty"),("96%","two in fifty")]),
    clockat=(610,44,22,11,0))
S["qa07-f3"]=lambda: f_icons([("square","the first thousand families"),
    ("square","the second thousand"),("square","four thousand"),
    ("square","nine thousand"),("book","95 per cent: with a dictionary"),
    ("noentry","98 per cent: without one")],3)
S["qa07-f4"]=lambda: f_realia(tbl("Team research &middot; count a page of your own", None,
    ["The text","Running words counted","Words I did not know","Coverage","Could I follow it"],
    blankrows(6,5),
    note="The page that surprised us: ______________________"), 680)
S["qa07-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to students",
    "How many words you need, and where the figure comes from &middot; page 1 of 1",
    "<p><b>The source.</b> I. S. P. Nation, <i>How large a vocabulary is needed for reading and "
    "listening?</i>, Canadian Modern Language Review, <b>2006</b>. Printed here in our own "
    "words.</p>"
    "<p>The study counts. It takes frequency lists of <b>word families</b> built from a very large "
    "collection of real English, and asks a single question: if you knew the most frequent one "
    "thousand families, then two thousand, then three, what share of the words on an ordinary page "
    "would you already know? That share is called <b>coverage</b>.</p>"
    + table_html(["Word families known","Coverage of written text, approximately"],
      [["1,000","about 80 per cent"],["2,000","a little under 90 per cent"],
       ["4,000 to 5,000","about 95 per cent"],["8,000 to 9,000","about 98 per cent"],
       ["6,000 to 7,000","about 98 per cent of <b>spoken</b> text"]])
    + "<p>The answers are not what most students expect. The first thousand families cover about "
    "four fifths of the running words in ordinary written English. The first two thousand cover a "
    "little under nine tenths. After that the climb gets slow: every extra thousand families buys "
    "less coverage than the thousand before it.</p>"
    "<p>At 98 per cent you meet one unknown word in every fifty. The paper treats 98 per cent as "
    "the level at which a reader can manage <b>unassisted</b> &mdash; without a dictionary and "
    "without help. Around 95 per cent, which needs four to five thousand families, a reader can "
    "usually follow a text with some help.</p>"
    "<p><b>What coverage is not.</b> Coverage is a count of <b>running words</b>, not a measure of "
    "understanding. Knowing 98 words in a hundred does not mean you understand 98 per cent of the "
    "meaning: the two you do not know may be the two the question is about. The 98 per cent line "
    "itself came from other studies of learners, not from this counting exercise, and the paper "
    "presents it as a working figure, not a law.</p>"
    "<p>A word <b>family</b> counts a base word and the forms built from it as one item, which "
    "assumes you can handle those forms when you meet them &mdash; and that assumption is doing "
    "some of the work in the totals. Proper nouns and a few marginal words are set aside. And the "
    "study is a count of texts, not a study of students: it does not say <b>which</b> words you "
    "need, how long any of this takes, or what any individual learner can do.</p>"
    "<p><b>Four things the study does not say.</b> Which words &middot; how long &middot; your "
    "reading &middot; your band.</p>",
    "Our summary of a published paper. Read it if your center has access; the counting is the "
    "interesting part."), 620)
S["qa07-f6"]=lambda: f_realia(tbl("How many and how much", None,
    ["The question or phrase","Countable or uncountable","An example"],
    [["<b>how many words</b>","countable","How many words do you learn a day?"],
     ["<b>how much vocabulary</b>","uncountable","How much vocabulary do I need?"],
     ["<b>a few words</b>","countable","I learned a few words from that page."],
     ["<b>a little help</b>","uncountable","At 95 per cent you need a little help."],
     ["<b>several families</b>",BLANK,BLANK],
     ["<b>a great deal of reading</b>",BLANK,BLANK]],
    note="Four cells are empty on purpose."), 640)
S["qa07-f7"]=lambda: f_line([("1,000",80),("2,000",88),("4,000",94),("5,000",95),
    ("7,000",97),("9,000",98)], unit="per cent", w=620, ymin=70, mark=(5,"98 per cent"))
S["qa07-f8"]=lambda: f_icons([("quotemark","a single printed word"),
    ("thread","four related forms"),("book","a stack of texts"),
    ("data","a shaded page"),("noentry","no dictionary"),
    ("magnifier","a footnote marked with an asterisk")],3)
S["qa07-f9"]=lambda: f_realia(tbl("Vocabulary record &middot; February",
    "Nour Khalil &middot; sixteen rows",
    ["The word","Where I met it","Family","Times since"],
    [["constitute","a science page","constitution, constituent","|||"],
     ["threshold","this book","&mdash;","||||"],
     ["coverage","this book","cover, covered","|||||"],
     ["derive","a journal abstract","derivation, derivative","||"],
     ["marginal","a footnote","margin","|"],
     ["unassisted","this book","assist, assistance","|"],
     ["corpus","a lecture","corpora","|"],
     ["frequency","this book","frequent, frequently","|||||"],
     ["running (words)","this book","&mdash;","||"],
     ["approximate","a chart caption","approximately","||||"],
     ["criterion","a rubric","criteria","|"],
     ["sample","a statistics page","sampling","|"],
     ["ratio","a chart","&mdash;","|"],
     ["spoken","this book","speak, speech","|||"],
     ["written","this book","write, writing","|||"],
     ["proper noun","a grammar page","&mdash;","|"]],
    note="Nine words met once are worth less than three words met five times."), 660)
S["qa07-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("nour",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("essay",360,196,0.24),("computer",490,142,0.42),
     ("tally",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"COVERAGE",[("4 in 100","96%"),("1 in 50","98%")]),
    clockat=(680,44,22,17,30))
S["qa07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page 1", None,
        "<p><b>Two</b> words shaded in a hundred. Coverage about 98 per cent.</p>"
        "<p style='color:#6b6861;font-size:13px'>One of the two shaded words is in the question "
        "printed beneath the page.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page 2", None,
        "<p><b>Eight</b> words shaded in a hundred. Coverage about 92 per cent.</p>"
        "<p style='color:#6b6861;font-size:13px'>None of the eight is in any question.</p>"), w)[0:3],
    w=900, h=280)
S["qa07-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I need nine thousand words and I know three thousand, so I have six thousand to "
        "learn.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>I counted one hundred running words of a science page on <b>11 February</b> and did not "
        "know four of them, so my coverage of that page was about <b>96 per cent</b>. A published "
        "counting study from 2006 reports that about 8,000 to 9,000 word families give 98 per cent "
        "coverage of written English, and about 6,000 to 7,000 for spoken; at 98 per cent you meet "
        "one unknown word in fifty. One page does not measure my vocabulary size, and coverage is "
        "not understanding &mdash; the four words I did not know included the one the question was "
        "about. From this week I am reading one academic page a day and recording every word I meet "
        "twice.</p>"), w)[0:3],
    w=920, h=320)
S["qa07-f13"]=lambda: f_realia(form("Note planner",
    [("The page I counted",""),("The date",""),("Words unknown in a hundred",""),
     ("My coverage of that page",""),("The published thresholds",""),
     ("What I will do each week","")]), 540)
S["qa07-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("nour",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("yusuf",290,172,{}),("mei",365,176,{"seated":True}),("junseo",440,172,{"seated":True}),
     ("lars",515,176,{"seated":True}),("samira",590,170,{}),("ines",655,172,{}),
     ("marek",720,170,{}),("hana",785,172,{}),("oksana",845,170,{}),
     ("tomas",905,172,{}),("grace",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("tally",350,198,0.24),
     ("printer",430,196,0.3),("essay",560,198,0.22),("table",650,0,1.0),
     ("book",860,198,0.28),("shelf",930,96,0.5)],
    board=(40,22,220,114,"THE FIRST TWO THOUSAND",[("1,000","80%"),("2,000","88%"),("9,000","98%")]),
    clockat=(272,34,22,16,0))
S["qa07-f15"]=lambda: f_chart([("under two thousand",2),("two to four thousand",4),
    ("four to six thousand",2),("over six thousand",1),("no idea",6)])
S["qa07-f16"]=lambda: f_realia(doc("On a desk at night",
    "Nineteen weeks, four words, and a list in its wrapper",
    "<p><b>The science page</b>, with four words circled. One of the four is also circled in the "
    "question printed underneath it.</p>"
    "<p><b>The vocabulary record.</b> Sixteen rows; four of them marked three times or more.</p>"
    "<p><b>A printed list of nine thousand words</b>, still in its wrapper.</p>"
    "<p><i>Coverage of that page: about 96 per cent. Reading band 6.0. Band needed 7.0. Nineteen "
    "weeks.</i></p>",
    "Eleven o'clock. Four thousand extra families buy the last three per cent, and nineteen weeks "
    "will not buy four thousand families."), 620)
