# -*- coding: utf-8 -*-
"""Plumbline Book 2 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Starting Point ----------------
S["qb00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each, from a recorded conversation",
    ["What you have","An example"],
    [["Numbers","Thirteen, thirty. Fifteen, fifty. <b>Double four.</b> <b>Oh seven.</b>"],
     ["Spelling aloud","H-A-<b>double L</b>, then I-D-A-Y."],
     ["Prepositions of place","<b>Opposite</b> the library, <b>next to</b> the gate."],
     ["Times and dates","Half past two. The third of May."],
     ["Plurals","Two <b>forms</b>. Three <b>weeks</b>. One <b>pass</b>."],
     ["Question words","<b>How many? How much? Which one? Where exactly?</b>"]],
    note="Six boxes. Four or five marks a paper live in them, in every paper, for everybody."), 580)
S["qb00-f2"]=lambda: f_icons([("speechbubble","Part 1: two people, everyday"),
    ("microphone","Part 2: one speaker, everyday"),
    ("meeting","Part 3: up to four, study"),
    ("podium","Part 4: one speaker, a lecture")],4)
S["qb00-f3"]=lambda: f_realia(doc("Taped inside a notebook",
    "Four reasons a mark goes, and what to do about each",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;I did not know the word.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>The only one a vocabulary list helps.</span><br>"
    "<b>2 &nbsp;I knew it and did not hear it in the stream.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Units 2, 3 and 8 are about nothing else.</span><br>"
    "<b>3 &nbsp;I heard it and was too slow to write it.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Unit 6.</span><br>"
    "<b>4 &nbsp;I was still on the question before.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>The most expensive habit in the paper, and the "
    "cheapest to change.</span>"
    "</p>",
    "One of the four is vocabulary. Three are about sound, speed and habit, which is why this book "
    "is not a word list."), 560)
S["qb00-f4"]=lambda: f_realia(doc("Two ways of reporting a wrong answer", None,
    "<p><b>&ldquo;I got 19 out of 40. Listening is my worst paper.&rdquo;</b></p>"
    "<p style='color:#6b6861;font-size:13px'>True, and there is nothing in it anybody can act "
    "on.</p>"
    "<p><b>&ldquo;I got 19. Eleven of my wrong answers were in Parts 3 and 4, in three groups. In "
    "every group I knew the first word and was still writing it when the next answer "
    "came.&rdquo;</b></p>"
    "<p style='color:#6b6861;font-size:13px'>A part, a shape, a count and a cause.</p>",
    "Both reports come from the same morning. Only the second one names something that can be "
    "changed this week."), 560)

# ---------------- Unit 1 ----------------
S["qb01-f1"]=lambda: f_icons([("speechbubble","a conversation"),("microphone","a monologue"),
    ("meeting","a seminar"),("podium","a lecture"),("map","a map with a route"),
    ("form","a form with three gaps"),("spreadsheet","a table with empty cells"),
    ("note","five labels, three used"),("review","two pictures to choose between"),
    ("quotemark","a sentence with a blank"),("notebook","notes with three headings"),
    ("wordcount","a numbered answer line"),("clock","half past two"),
    ("phone","a number in groups"),("pen","a name spelled out"),
    ("magnifier","a line of small print")],4)
S["qb01-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("mei",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("form",390,196,0.24),("board",106,86,0.76),
     ("headset",470,198,0.22),("window",790,56,0.94)],
    board=(676,22,210,112,"FOUR PARTS",[("1 and 2","everyday"),("3 and 4","academic")]),
    clockat=(622,44,22,9,0))
S["qb01-f3"]=lambda: f_icons([("form","form, note or table completion"),
    ("quotemark","sentence completion"),("notebook","note completion"),
    ("map","plan, map or diagram labeling"),("data","flow-chart completion"),
    ("review","multiple choice")],3)
S["qb01-f4"]=lambda: f_realia(tbl("Team research", None,
    ["Question type","In the published guide","In our last practice","How many","Where we read it"],
    br(6,5),
    note="The type we have never practiced: ______________________"), 680)
S["qb01-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Listening class",
    "The four parts, and the question types that may appear &middot; page 1 of 1",
    "<p><b>The source.</b> The guide for teachers published by the test owners, downloaded "
    "<b>11 February</b>. Printed here in our own words. The guide is revised from time to time: "
    "check the date on the copy you read.</p>"
    "<p>The Listening paper has <b>four parts</b> and <b>forty questions</b>, ten in each part. "
    "Every recording is played <b>once</b>.</p>"
    + table_html(["Part","Speakers","Context"],
      [["<b>1</b>","two people, in conversation","an everyday matter: booking, joining, asking for "
        "details"],
       ["<b>2</b>","one speaker, alone","an everyday subject: a place, an arrangement, a plan"],
       ["<b>3</b>","up to four people","study or training: a project, an assignment, a reading list"],
       ["<b>4</b>","one speaker, alone","an academic subject: a short lecture"]])
    + "<p><b>So the paper moves twice.</b> It moves from two speakers to one and back, and it moves "
    "from everyday English to academic English. Students who lose marks evenly across the paper are "
    "rare; most lose them in a block, and the block has a reason.</p>"
    "<p><b>The question types the guide names.</b> Completion of a form, a set of notes, a table or "
    "a flow-chart; sentence completion; short-answer questions; multiple choice; matching; and the "
    "labeling of a plan, a map or a diagram. Each type carries its own instruction about how many "
    "words you may write, and <b>that instruction is part of the question</b>.</p>"
    "<p><b>What a guide will not promise.</b> It says which types <b>may</b> appear. It does not say "
    "which will appear on your paper, how many of each, or in what order. It does not say what any "
    "recording will be about. It is a description of a design, not a description of a paper, and a "
    "student who treats it as a prediction has read it wrongly.</p>"
    "<p>It is also <b>revised</b>. The edition you read is the edition you read; quoting it without a "
    "date is quoting nothing. And it is written for teachers: it explains what the paper is for, not "
    "how to answer it quickly.</p>",
    "Our summary of a published guide. Read it yourself &mdash; it is free, and it is written in "
    "plain English."), 620)
S["qb01-f6"]=lambda: f_realia(tbl("Where something is", None,
    ["The preposition","What it means","An example"],
    [["<b>opposite</b>","facing it, across the road or room","The office is opposite the library."],
     ["<b>next to</b>","beside it","The lift is next to the stairs."],
     ["<b>between</b>","with one thing on each side","It is between the gate and the shop."],
     ["<b>past</b>","you go by it and continue","Go past the canteen and turn left."],
     ["<b>along</b>",B,B],
     ["<b>through</b>",B,B]],
    note="Four cells are empty on purpose."), 620)
S["qb01-f7"]=lambda: f_matrix(["Questions","Marks this class lost"],
    [("Part 1",["10","1.6"]),("Part 2",["10","2.4"]),
     ("Part 3",["10","3.9"]),("Part 4",["10","4.1"])], 520)
S["qb01-f8"]=lambda: f_icons([("headset","four parts, heard once"),
    ("microphone","one speaker alone"),("meeting","four voices"),
    ("podium","a lecture"),("map","a map with two empty boxes"),
    ("form","a form with three gaps")],3)
S["qb01-f9"]=lambda: f_realia(doc("Practice question page &middot; Part 1",
    "Questions 1 to 6, and a map",
    "<p style='font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.75'>"
    "<b>Write no more than two words and/or a number for each answer.</b></p>"
    + table_html(["No.","Item"],
      [["1","Name of the course: ______________"],
       ["2","Day of the week: ______________"],
       ["3","Start time: ______________"],
       ["4","Room: ______________"],
       ["5","Cost: ______________"],
       ["6","Bring: ______________"]])
    + "<p><b>Questions 7 to 9.</b> Label the map with the three places you hear: the entrance, the "
    "office and the hall.</p>",
    "The instruction is part of the question. Three words where two are allowed scores nothing."),
    600)
S["qb01-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("mei",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("spreadsheet",360,196,0.24),("computer",490,142,0.42),
     ("form",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"BY PART",[("1 and 2","16 of 20"),("3 and 4","3 of 20")]),
    clockat=(680,44,22,16,15))
S["qb01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Map 1", None,
        "<p>A route marked with four turns, and three buildings labeled.</p>"
        "<p style='color:#6b6861;font-size:13px'>Student A has this one.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Map 2", None,
        "<p>The same streets, no route, three empty boxes.</p>"
        "<p style='color:#6b6861;font-size:13px'>Student B has this one, and has to ask.</p>"),
        w)[0:3],
    w=900, h=260)
S["qb01-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I got 19 out of 40 in Listening. I need more practice. I will do a test every day this "
        "week.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>Practice Listening paper, <b>11 February</b>: <b>19 of 40</b>. By part: P1 <b>9</b>, P2 "
        "<b>7</b>, P3 <b>2</b>, P4 <b>1</b>. Nineteen of my twenty-one lost marks were in the two "
        "academic parts, which have four voices and a lecture in them. Both used note completion and "
        "matching, and matching is a type I have never practiced. The guide lists the types that may "
        "appear but not how many of each, so I cannot plan around that. This week: Part 3 and Part 4 "
        "only, twice each, and one matching exercise a day.</p>"), w)[0:3],
    w=920, h=310)
S["qb01-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the score",""),("The score by part",""),("The question types that appeared",""),
     ("Where the block was",""),("What the guide does not say",""),
     ("What I will do this week","")]), 540)
S["qb01-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("mei",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("junseo",365,176,{"seated":True}),("nour",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("ines",590,170,{}),("marek",655,172,{}),
     ("samira",720,170,{}),("oksana",785,172,{}),("hana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.24),
     ("printer",430,196,0.3),("map",560,198,0.24),("table",650,0,1.0),
     ("book",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,222,114,"TWO, ONE, TWO, ONE",[("1 and 2","everyday"),("3 and 4","academic")]),
    clockat=(278,34,22,10,0))
S["qb01-f15"]=lambda: f_chart([("Part 1",5),("Part 2",2),("Part 3",1),("Part 4",0),
    ("whole papers only",3)])
S["qb01-f16"]=lambda: f_realia(doc("On a desk in February",
    "Eleven practice papers, and two marks",
    table_html(["Paper","Part 1","Part 2","Part 3","Part 4","Total"],
      [["1","8","6","2","1","17"],["4","9","7","2","1","19"],
       ["8","9","6","2","2","19"],["11","9","7","2","1","19"]])
    + "<p><b>A printed guide</b>, open at a table of question types.</p>"
    "<p><b>A notebook page</b> headed <i>types I have never practiced</i>, with three entries.</p>"
    "<p><i>She has practiced Part 1 in nine of the eleven weeks. She says Part 4 makes her feel "
    "stupid, and that she will do it when her English is better.</i></p>",
    "Six o'clock. Eleven papers, two marks, and the same two columns every time."), 640)

# ---------------- Unit 2 ----------------
S["qb02-f1"]=lambda: f_icons([("quotemark","one word, printed clearly"),
    ("thread","the same word inside a ribbon of sound"),
    ("signal","faint breaks in the ribbon"),("tally","one syllable larger than the rest"),
    ("timer","a pause drawn as a gap"),("planter","the greenhouse"),
    ("park","the garden"),("tree","the jungle"),
    ("book","a dictionary open at citation"),("flashcard","a drill of five identical boxes"),
    ("recorder","a waveform"),("headset","slow"),
    ("signal","fast"),("stars","a tick"),("noentry","a cross"),
    ("magnifier","a footnote")],4)
S["qb02-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("yusuf",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",390,196,0.26),("board",104,86,0.78),
     ("recorder",470,198,0.22),("window",790,56,0.94)],
    board=(660,22,224,114,"WHERE ARE THE WORDS",[("heard","four"),("printed","seven")]),
    clockat=(610,44,22,9,30))
S["qb02-f3"]=lambda: f_icons([("planter","greenhouse: one careful word"),
    ("park","garden: textbook connected speech"),("tree","jungle: real speech"),
    ("quotemark","a citation form"),("thread","the same word, squeezed"),
    ("magnifier","you were taught two of the three")],3)
S["qb02-f4"]=lambda: f_realia(tbl("Team research &middot; three recordings of one sentence", None,
    ["The sentence","Words heard: greenhouse","Garden","Jungle","Which words vanished"],
    br(6,5),
    note="The word that vanished every time: ______________________"), 700)
S["qb02-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Listening class",
    "Why the words are not where you expect them &middot; page 1 of 1",
    "<p><b>The source.</b> Richard Cauldwell, <i>Phonology for Listening: Teaching the Stream of "
    "Speech</i>, Speech in Action, <b>2013</b>. Printed here in our own words. The three names are "
    "his.</p>"
    "<p>Speech is not a row of words with gaps between them. It is a <b>stream</b>. The gaps you "
    "think you hear are mostly in your head, put there by your knowledge of where words end &mdash; "
    "which is why you can hear the boundaries in your own language and not in English.</p>"
    + table_html(["The book's name for it","What it is","Where you meet it"],
      [["<b>The greenhouse</b>","a single word, alone, careful, in its full form",
        "a word list, a drill, a dictionary recording"],
       ["<b>The garden</b>","connected speech that follows the rules you were taught",
        "a textbook recording, a careful teacher"],
       ["<b>The jungle</b>","spontaneous speech: fast, uneven, full of shapes no rule predicted",
        "real conversation, and the second half of a Listening paper"]])
    + "<p><b>The speech unit.</b> The book's organizing unit is a short stretch between two pauses, "
    "usually with one syllable standing out. The important thing about a speech unit is that the "
    "words inside it are <b>not equal</b>. One or two carry the message and are said clearly. The "
    "rest are compressed into the space between them, and those compressed ones are usually the "
    "grammar &mdash; the articles, the prepositions, the auxiliaries.</p>"
    "<p>So the problem is not that you do not know those words. You know them better than you know "
    "the clear ones. The problem is that you learned them in the greenhouse and meet them in the "
    "jungle.</p>"
    "<p><b>What this book is and is not.</b> It is a <b>pedagogic account</b> written for teachers, "
    "with its own terminology, built from close listening to recordings of real speech. The "
    "three-way division is a <b>teaching device</b> &mdash; a way of describing what you hear &mdash; "
    "not an experimental finding, and the author does not claim it is one. It reports no trial, gives "
    "no timetable and promises no gain in any score. It also does not say how long jungle listening "
    "takes to learn. It tells you what you are listening to, which is a different kind of help, and "
    "most students have never been given it.</p>",
    "Our summary of a published book. If your center has a copy, the recordings that come with it "
    "are the part to use."), 620)
S["qb02-f6"]=lambda: f_realia(tbl("Contractions, and what they hide", None,
    ["What you hear","What it hides","An example"],
    [["<b>I'll</b>","I will","I'll send it on Thursday."],
     ["<b>there's</b>","there is","There's a form at reception."],
     ["<b>he's</b>","he is <b>or</b> he has","He's finished. He's late."],
     ["<b>we'd</b>","we would <b>or</b> we had","We'd better go. We'd already paid."],
     ["<b>would've</b>",B,B],
     ["<b>should've</b>",B,B]],
    note="Four cells are empty on purpose."), 620)
S["qb02-f7"]=lambda: f_chart([("played once",41),("played twice",56),("three times",62),
    ("five times",64),("read aloud slowly",90)], unit="words of 9, x10")
S["qb02-f8"]=lambda: f_icons([("planter","one potted word"),("park","tidy rows"),
    ("tree","no rows at all"),("signal","a ribbon with two faint breaks"),
    ("tally","one syllable larger"),("thread","a small word squeezed flat")],3)
S["qb02-f9"]=lambda: f_realia(doc("Transcript extract &middot; four seconds",
    "Speech units marked | &middot; prominent syllable in bold &middot; compressed words in gray",
    "<p style='font-size:17px;line-height:2.1'>"
    "| it's just <b>DOWN</b> at the end <span style='color:#9a968f'>of the</span> corridor | "
    "<b>SEC</b>ond door <span style='color:#9a968f'>on the</span> <b>LEFT</b> |</p>"
    "<p style='color:#6b6861;font-size:13px'>Nine words. Two said clearly. Five of the nine are "
    "words a first-year student knows, and they are the five that disappear.</p>",
    "Our own transcript, written for this book. The marking convention is ours."), 600)
S["qb02-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("yusuf",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("note",360,196,0.24),("computer",490,142,0.42),
     ("headset",450,198,0.22),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"FOUR SECONDS",[("heard","4 of 9"),("knew","9 of 9")]),
    clockat=(680,44,22,17,0))
S["qb02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Transcript 1", None,
        "<p style='font-size:15px'>it &middot; is &middot; just &middot; down &middot; at &middot; "
        "the &middot; end &middot; of &middot; the</p>"
        "<p style='color:#6b6861;font-size:13px'>Nine words in equal type. This is not what a "
        "listener receives.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Transcript 2", None,
        "<p style='font-size:15px'><span style='color:#9a968f'>it's just</span> <b>DOWN</b> "
        "<span style='color:#9a968f'>at the</span> <b>END</b> <span style='color:#9a968f'>of "
        "the</span></p>"
        "<p style='color:#6b6861;font-size:13px'>Two words large, seven squeezed. Closer to what "
        "arrives.</p>"), w)[0:3],
    w=900, h=270)
S["qb02-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I listened to a conversation five times and I still did not understand it. My vocabulary "
        "is not good enough yet.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>On <b>18 February</b> I took four seconds of a real conversation &mdash; nine words "
        "&mdash; and played it five times, writing what I heard. I got <b>four</b> the first time and "
        "<b>six</b> by the fifth. Then I read the transcript: I already knew all nine words, and the "
        "five I missed were <i>a</i>, <i>of</i>, <i>to</i>, <i>have</i> and <i>the</i>. A book "
        "published in 2013 separates single careful words, textbook connected speech and spontaneous "
        "speech, and says the grammar words are the ones compressed inside real speech. That is a way "
        "of describing what happened, not a finding, and it offers no timetable. From this week: four "
        "seconds a day, five playings, then the transcript.</p>"), w)[0:3],
    w=920, h=330)
S["qb02-f13"]=lambda: f_realia(form("Note planner",
    [("The clip and the date",""),("Words heard the first time",""),("Words heard by the fifth",""),
     ("Which words I missed",""),("What the three categories are",""),
     ("My daily routine","")]), 540)
S["qb02-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("yusuf",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("mei",365,176,{"seated":True}),("hana",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("nour",590,170,{}),("junseo",655,172,{}),
     ("ines",720,170,{}),("marek",785,172,{}),("samira",845,170,{}),
     ("oksana",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("headset",350,198,0.24),
     ("printer",430,196,0.3),("note",560,198,0.22),("table",650,0,1.0),
     ("recorder",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,228,114,"GREENHOUSE, GARDEN, JUNGLE",[("taught","two"),("met","the third")]),
    clockat=(284,34,22,11,0))
S["qb02-f15"]=lambda: f_chart([("course recordings",6),("films with subtitles",2),
    ("podcasts",1),("real conversations",1),("almost none",1)])
S["qb02-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Four thousand words, and four of nine",
    table_html(["","Count"],
      [["Words learned in sixteen months","about 4,000"],
       ["Words heard from four seconds, first playing","4 of 9"],
       ["Words heard by the fifth playing","6 of 9"],
       ["Of the five missed, how many he already knew","5"]])
    + "<p><b>A vocabulary notebook</b> with four thousand entries, and nothing in it is wrong.</p>"
    "<p><i>The five words he missed are five of the commonest words in English.</i></p>",
    "Ten o'clock. He can read an academic page with a dictionary and write a reasonable essay."),
    620)

# ---------------- Unit 3 ----------------
S["qb03-f1"]=lambda: f_icons([("tally","a full strong vowel"),
    ("signal","the same vowel, tiny"),("scissors","a consonant dropped"),
    ("thread","two words joined at the seam"),("timer","uneven gaps"),
    ("today","even beats"),("quotemark","a flat vowel symbol"),
    ("podium","a stressed syllable, tall"),("data","an unstressed syllable, flat"),
    ("review","two similar-sounding words"),("book","a dictionary open at elision"),
    ("library","a spine dated 1977"),("notebook","a spine dated 1990"),
    ("stars","a tick"),("noentry","a cross"),("magnifier","a footnote")],4)
S["qb03-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("nour",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("library",390,196,0.26),("board",102,86,0.8),
     ("quotemark",470,198,0.2),("window",790,56,0.94)],
    board=(656,22,228,116,"THE SAME SENTENCE TWICE",[("in full","nine words"),("at speed","three")]),
    clockat=(606,44,22,10,0))
S["qb03-f3"]=lambda: f_icons([("tally","to, said in full"),("signal","to, flattened"),
    ("quotemark","of, almost only a v"),("thread","and, often just an n"),
    ("data","was, as w'z"),("review","can, as k'n")],3)
S["qb03-f4"]=lambda: f_realia(tbl("Team research &middot; the six in real speech", None,
    ["The word","Heard strong","Heard weak","Where I was listening","The clip"],
    br(6,5),
    note="The word that was never strong: ______________________"), 680)
S["qb03-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Listening class",
    "The words that are there and not there &middot; page 1 of 1",
    "<p><b>The source.</b> Gillian Brown, <i>Listening to Spoken English</i>, Longman, <b>1977</b>; "
    "second edition <b>1990</b>. Printed here in our own words.</p>"
    "<p>This book was written for teachers whose students had learned English carefully and could "
    "not follow anybody speaking it. Its answer is a description &mdash; detailed, patient and "
    "unwelcome &mdash; of what actually happens to English when people talk.</p>"
    "<p><b>English has a rhythm.</b> Stressed syllables arrive at fairly regular intervals, and "
    "everything between them is squeezed to fit. The words that get squeezed are the <b>function "
    "words</b>: articles, prepositions, auxiliaries, conjunctions, pronouns. They carry grammar, not "
    "news, so they lose their full vowel and take a short flat one instead.</p>"
    + table_html(["The word","Said alone","Inside a sentence"],
      [["<b>to</b>","<i>too</i>","a flat vowel: <i>g'ta meeting</i>"],
       ["<b>of</b>","<i>ov</i>","almost only a <i>v</i>: <i>a lot'v people</i>"],
       ["<b>and</b>","<i>and</i>","often just <i>n</i>: <i>bread'n butter</i>"],
       ["<b>was</b>","<i>woz</i>","<i>w'z</i>: <i>it w'z late</i>"],
       ["<b>can</b>","<i>can</i>","<i>k'n</i>: <i>I k'n come</i>"]])
    + "<p><b>Two further things happen.</b> <b>Elision</b> is a sound disappearing altogether: the "
    "<i>t</i> in <i>next week</i>, the <i>d</i> in <i>old man</i>, a whole unstressed vowel in the "
    "middle of a word. <b>Assimilation</b> is a sound changing to fit the one beside it, so that "
    "<i>ten bikes</i> starts to sound like <i>tem bikes</i>. Neither is carelessness. Both happen in "
    "the speech of careful, educated people, at normal speed, every day.</p>"
    "<p><b>The consequence students resist.</b> If a function word has been flattened, you very often "
    "<b>cannot hear which one it was</b>. You recover it from the rest of the sentence. Good "
    "listeners are not people who hear every sound. They are people who need fewer of them.</p>"
    "<p><b>What a description can and cannot do.</b> This is a description, built mainly on one "
    "variety &mdash; educated southern British English of the period &mdash; and written before large "
    "spoken corpora. The second edition revised it; it did not replace it. Other varieties do some of "
    "this differently and the book does not claim to cover them. <b>No rule here is absolute:</b> how "
    "much is elided depends on the speaker, the speed and the style. And it is a description of the "
    "language, not a method for teaching it.</p>",
    "Our summary of a published book. The center's copy is on the shelf; the chapters on weak forms "
    "are the ones to read."), 620)
S["qb03-f6"]=lambda: f_realia(tbl("What you could not hear", None,
    ["What was flattened","How you recover it","An example"],
    [["<b>a or the</b>","from whether it has been mentioned before",
      "<i>There's a form&hellip;</i> then <i>&hellip;bring the form</i>"],
     ["<b>to or too</b>","from the word after it","<i>to the office</i> / <i>too late</i>"],
     ["<b>and or an</b>","from what follows","<i>bread and butter</i> / <i>an office</i>"],
     ["<b>of</b>","from the noun pattern","<i>a lot of people</i>, never <i>a lot people</i>"],
     ["<b>was or is</b>",B,B],
     ["<b>can or can't</b>",B,B]],
    note="Four cells are empty on purpose."), 640)
S["qb03-f7"]=lambda: f_chart([("for",9),("and",8),("to",7),("of",5),("a",3),("was",2)],
    unit="of 11 listeners")
S["qb03-f8"]=lambda: f_icons([("tally","a large vowel beside a tiny one"),
    ("scissors","a final consonant struck through"),("thread","two words joined"),
    ("today","even beats, words squeezed between"),("quotemark","a flat vowel"),
    ("magnifier","not carelessness")],3)
S["qb03-f9"]=lambda: f_realia(doc("Transcript extract &middot; fifty-two words",
    "Weak forms in gray &middot; elided sounds struck through",
    "<p style='font-size:16px;line-height:2.1'>"
    "so <span style='color:#9a968f'>if you</span> go <span style='color:#9a968f'>to the</span> "
    "desk <span style='color:#9a968f'>at the</span> en<s>d</s> <span style='color:#9a968f'>of "
    "the</span> corridor <span style='color:#9a968f'>and</span> ask <span style='color:#9a968f'>for "
    "a</span> form <span style='color:#9a968f'>they'll</span> give <span style='color:#9a968f'>you "
    "one</span> &mdash; <span style='color:#9a968f'>it w'z</span> nex<s>t</s> week "
    "<span style='color:#9a968f'>but they've</span> move<s>d</s> it</p>"
    "<p style='color:#6b6861;font-size:13px'>Thirty-one of these fifty-two words were never said in "
    "full. Five sounds are struck through.</p>",
    "Our own transcript, written for this book. The marking convention is ours."), 620)
S["qb03-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("nour",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("note",360,196,0.24),("computer",490,142,0.42),
     ("form",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"A OR THE",[("first mention","a"),("mentioned","the")]),
    clockat=(680,44,22,17,20))
S["qb03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Transcript 1", None,
        "<p style='font-size:15px'>so if you go to the desk at the end of the corridor and ask for a "
        "form&hellip;</p>"
        "<p style='color:#6b6861;font-size:13px'>Every word in full, in even type.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Transcript 2", None,
        "<p style='font-size:15px'>so <span style='color:#9a968f'>if you</span> go "
        "<span style='color:#9a968f'>to the</span> desk <span style='color:#9a968f'>at the</span> "
        "en<s>d</s> <span style='color:#9a968f'>of the</span> corridor&hellip;</p>"
        "<p style='color:#6b6861;font-size:13px'>The same words. Nine of them faint, one sound "
        "gone.</p>"), w)[0:3],
    w=900, h=270)
S["qb03-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I lost six marks in Part 2 because the speaker was unclear and spoke too fast. It was not "
        "a fair recording.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>In the practice paper on <b>25 February</b> I lost six marks in Part 2. Five of the six "
        "were small grammar words: <i>a</i> written as <i>the</i>, <i>of</i> left out twice, "
        "<i>was</i> written as <i>is</i>, <i>can</i> written as <i>can't</i>. A description published "
        "in 1977 explains that function words lose their full vowel in connected speech, and that "
        "sounds are dropped or changed depending on speaker, speed and style &mdash; so no rule about "
        "it is absolute, and it was written about one variety of English. In four of my five cases the "
        "right word was recoverable from the sentence. So this is grammar under pressure, not hearing, "
        "and I am doing four seconds of dictation a day.</p>"), w)[0:3],
    w=920, h=330)
S["qb03-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the part",""),("How many marks lost",""),("Which were small words",""),
     ("What happened to each sound",""),("How many were recoverable",""),
     ("My daily routine","")]), 540)
S["qb03-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("nour",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("yusuf",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("samira",590,170,{}),("ines",655,172,{}),
     ("marek",720,170,{}),("hana",785,172,{}),("oksana",845,170,{}),
     ("junseo",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("note",350,198,0.24),
     ("printer",430,196,0.3),("flashcard",560,198,0.24),("table",650,0,1.0),
     ("library",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,232,114,"THERE AND NOT THERE",[("to, of, and","flattened"),("good listeners","need fewer")]),
    clockat=(290,34,22,12,0))
S["qb03-f15"]=lambda: f_chart([("a or the",4),("of",2),("to",1),("was or is",2),
    ("can or can't",2)])
S["qb03-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Six papers, the same pattern",
    table_html(["Paper","Marks lost in Part 2","How many were small words","Recoverable"],
      [["1","7","6","5"],["2","5","4","3"],["3","6","5","4"],
       ["4","4","4","3"],["5","7","6","5"],["6","6","5","4"]])
    + "<p><b>A card</b> of six strong and weak forms.</p>"
    "<p><i>She is a careful student with good grammar. Under time pressure she writes what she heard "
    "rather than what the sentence needs.</i></p>",
    "Nine o'clock. Thirty-five marks in six papers, thirty of them small words, twenty-four of them "
    "recoverable from the sentence."), 640)
