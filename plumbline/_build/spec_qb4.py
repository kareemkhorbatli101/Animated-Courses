# -*- coding: utf-8 -*-
"""Plumbline Book 2 figure specs, Units 11 and 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 11 ----------------
S["qb11-f1"]=lambda: f_icons([("proof","a single score"),
    ("balance","the same score with a bracket"),("review","two halves of a test"),
    ("data","two lines rising together"),("form","items with ticks and crosses"),
    ("spreadsheet","a long test and a short one"),("tally","a spread"),
    ("scales","a scale nearly level"),("calculator","a formula"),
    ("library","a journal cover dated 1951"),("notebook","a cover dated 2004"),
    ("danger","a warning"),("book","a dictionary open at reliability"),
    ("stars","a tick"),("noentry","a cross"),("magnifier","a footnote")],4)
S["qb11-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("hana",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("proof",390,196,0.24),("board",94,86,0.88),
     ("calculator",470,198,0.2),("window",790,56,0.94)],
    board=(632,22,252,124,"A NUMBER WITH A WIDTH",[("printed","one"),("you have","a range")]),
    clockat=(582,44,22,15,0))
S["qb11-f3"]=lambda: f_icons([("proof","a narrow bracket"),("balance","a wide bracket"),
    ("spreadsheet","a long test"),("form","a short test"),
    ("review","two halves compared"),("magnifier","every score has a width")],3)
S["qb11-f4"]=lambda: f_realia(tbl("Team research &middot; your own spread", None,
    ["The date","The paper","My raw score of 40","My highest so far","My lowest so far"],
    br(8,5),
    note="The width of my own spread: ______________________"), 700)
S["qb11-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Listening class",
    "How much a score would move if you sat another one &middot; page 1 of 1",
    "<p><b>The source.</b> L. J. Cronbach, <i>Coefficient alpha and the internal structure of "
    "tests</i>, Psychometrika, <b>1951</b>. Printed here in our own words.</p>"
    "<p>A score has two parts: the thing you are trying to measure, and <b>accident</b>. Accident "
    "includes the particular questions on that paper, whether you slept, and whether the one word you "
    "did not know happened to be the one the question turned on.</p>"
    + table_html(["The idea","In plain English"],
      [["<b>Reliability</b>","how much of a score is the thing you want and how much is accident"],
       ["<b>The standard error of measurement</b>","the width of the band round any one person's "
        "score"],
       ["<b>A score is an estimate</b>","if the same person sat an equivalent paper next week, the "
        "number would move"]])
    + "<p>Before 1951 there were several ways of estimating this, mostly by splitting a test in half "
    "and comparing the halves &mdash; but a test can be split in half in very many ways and each split "
    "gives a different answer. This paper brought them together in a <b>single coefficient</b>, and "
    "showed that it is equivalent to the average of all the possible split-half correlations. That "
    "coefficient is the one every testing organization in the world has reported since.</p>"
    "<p><b>What it is for, from a candidate's point of view.</b> Once you know how reliable a set of "
    "scores is, you can work out the width of the band round any one score. Every number on every "
    "result form in the world has such a band, whether or not it is printed, and knowing that is the "
    "difference between <i>I am a 6</i> and <i>I scored 6 on that paper, and I might not next "
    "time</i>.</p>"
    "<p><b>A coefficient its own author came to distrust.</b> Three things in this paper are regularly "
    "misquoted. It is <b>not a property of a test</b>: it is a property of a particular set of items "
    "answered by a particular group of people, so <i>this test has a reliability of&hellip;</i> is "
    "already loose. It is <b>not a measure of whether a test measures one thing</b>; that is the "
    "commonest misunderstanding of the paper and it has been pointed out for seventy years. And it "
    "<b>rises with the number of items</b>: add more questions and the figure goes up, whether or not "
    "the questions are any good.</p>"
    "<p>The author was uneasy about all of this. <b>Cronbach wrote critically about how his coefficient "
    "had come to be used</b>, in work published after his death, in <b>2004</b>. A measure whose "
    "inventor spent fifty years qualifying it is a measure to quote carefully. And this paper contains "
    "<b>no figure for any examination</b>: it gives a method.</p>",
    "Our summary of a published paper. The useful sentence is the one about the width."), 620)
S["qb11-f6"]=lambda: f_realia(tbl("Hedging a figure", None,
    ["The hedge","How strong it is","An example"],
    [["<b>about</b>","ordinary, neutral","I scored about 25."],
     ["<b>roughly</b>","a little looser","Roughly a quarter of the class."],
     ["<b>around</b>","the same as <i>about</i>","Around half a band either way."],
     ["<b>within half a band</b>","precise about the width",
      "My true level is probably within half a band of 6."],
     ["<b>give or take</b>",B,B],
     ["<b>probably</b>",B,B]],
    note="Four cells are empty on purpose. A hedge should narrow a claim, not empty it."), 640)
S["qb11-f7"]=lambda: f_line([("p1",23),("p2",26),("p3",24),("p4",28),("p5",25),("p6",25)],
    unit="raw score of 40", w=600, ymin=20, mark=(3,"the one she believes"))
S["qb11-f8"]=lambda: f_icons([("proof","a single score"),("balance","the same with a bracket"),
    ("review","two halves of a test"),("spreadsheet","a long test and a short one"),
    ("calculator","a formula"),("magnifier","items and a group, not a test")],3)
S["qb11-f9"]=lambda: f_realia(tbl("Score record &middot; six practices",
    "Hana Sato &middot; February to April &middot; bands from an indicative table",
    ["Date","Raw score of 40","Band, indicatively"],
    [["14 Feb","23","6"],["28 Feb","26","6.5"],["14 Mar","24","6"],
     ["28 Mar","28","6.5"],["11 Apr","25","6"],["25 Apr","25","6"],
     ["<b>mean</b>","<b>25.2</b>","&mdash;"],["<b>range</b>","<b>23 to 28</b>","&mdash;"]],
    note="One number is printed and a range is what you have. The band column comes from a table "
    "published as a guide, so it is the weakest column on this page."), 600)
S["qb11-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("hana",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("proof",360,196,0.24),("computer",490,142,0.42),
     ("calculator",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"SIX MORNINGS",[("best","28"),("mean","25.2")]),
    clockat=(680,44,22,16,15))
S["qb11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Record 1", None,
        "<p>23, 26, 24, 28, 25, 25<br><b>mean 25.2 &middot; range 5</b></p>"
        "<p style='color:#6b6861;font-size:13px'>A wide spread. One morning will give one number out "
        "of it.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Record 2", None,
        "<p>26, 25, 26, 24, 26, 25<br><b>mean 25.3 &middot; range 2</b></p>"
        "<p style='color:#6b6861;font-size:13px'>The same average and less than half the width. The "
        "second student is in a better position.</p>"), w)[0:3],
    w=900, h=270)
S["qb11-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>My best Listening score is 28 out of 40, so I am ready to take the test. I will book for "
        "next Saturday.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>My six practice Listening raw scores since February are <b>23, 26, 24, 28, 25, 25</b>: an "
        "average of just over 25 and a spread of five marks. The 28 is my best morning, not my level. "
        "A paper published in 1951 brought the earlier split-half methods into one coefficient and "
        "made it routine to estimate how much of a score is signal; from that you get the width of "
        "the band round any one score. The coefficient belongs to a set of items answered by a group "
        "rather than to a test, it does not show that a test measures one thing, it rises simply "
        "because a test is longer, and its own author wrote critically about its use in work published "
        "in 2004. So: I am a 25 with a width, and the way to move the range is to remove the two "
        "habits I can name.</p>"), w)[0:3],
    w=940, h=350)
S["qb11-f13"]=lambda: f_realia(form("Note planner",
    [("My six scores",""),("My average",""),("My spread",""),("What reliability is",""),
     ("Three misuses of the coefficient",""),("The two habits I will remove","")]), 560)
S["qb11-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("hana",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("mei",365,176,{"seated":True}),("ines",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("nour",590,170,{}),("marek",655,172,{}),
     ("samira",720,170,{}),("junseo",785,172,{}),("oksana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("proof",350,198,0.24),
     ("printer",430,196,0.3),("tally",560,198,0.24),("table",650,0,1.0),
     ("library",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,236,116,"A NUMBER WITH A WIDTH",[("mean","25.2"),("range","5")]),
    clockat=(296,34,22,16,0))
S["qb11-f15"]=lambda: f_chart([("my highest",6),("my most recent",2),("my average",1),
    ("my lowest",0),("I do not keep them",2)])
S["qb11-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "One fee, one morning, and a five-mark width",
    table_html(["","Figure"],
      [["Six practice scores","23, 26, 24, 28, 25, 25"],
       ["Average","25.2"],["Width of the spread","5 marks"],
       ["Raw score that would reach band 6, indicatively","about 23"],
       ["Test fees she can afford","one"],
       ["Named habits that cost marks","two, both unchanged"]])
    + "<p><b>A booking page</b>, open.</p>"
    "<p><i>She believes the 28. Everybody believes their highest score, including the people who know "
    "better.</i></p>",
    "Eight o'clock. The morning will give her one number out of a range five marks wide."), 640)

# ---------------- Unit 12 ----------------
S["qb12-f1"]=lambda: f_icons([("headset","a four-box paper"),("thread","a ribbon of sound"),
    ("signal","a tiny flattened word"),("scissors","a boundary in the wrong place"),
    ("meeting","a word onset with candidates"),("recycle","a loop"),
    ("signpost","a signpost with three arms"),("podium","a tall syllable"),
    ("worldmap","speech bubbles in several places"),("transfer","a five-step cycle"),
    ("balance","a score with a bracket"),("spreadsheet","a conversion table"),
    ("phone","a number in groups"),("pen","a spelled name"),
    ("calendar","a date written two ways"),("note","one routine")],4)
S["qb12-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("mei",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("note",390,196,0.24),("board",92,86,0.9),
     ("spreadsheet",470,198,0.22),("window",790,56,0.94)],
    board=(626,22,258,126,"ELEVEN SOURCES, ONE TABLE",[("eleven","about hearing"),("one","a guide")]),
    clockat=(576,44,22,15,30))
S["qb12-f3"]=lambda: f_icons([("phone","a number in groups of digits"),
    ("pen","a name spelled letter by letter"),("calendar","a date as a figure and a word"),
    ("form","a plural with its s circled"),("quotemark","a capital at the start of a name"),
    ("magnifier","four marks a paper, every paper")],3)
S["qb12-f4"]=lambda: f_realia(tbl("Team research &middot; the eleven, in one line each", None,
    ["Unit","The source","What it gives you","What it does not cover"],
    br(11,4),
    note="The one we would keep if we could keep one: ______________________"), 680)
S["qb12-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; one page for a new Listening student",
    "Everything in Book 2, and the line under each of it &middot; page 1 of 1",
    "<p><b>The sources.</b> Eleven published documents, papers and books, consulted between <b>11 "
    "February and 22 April</b>. Each is named in full in the back of this book. The indicative table "
    "below is published by the test owners. Printed here in our own words.</p>"
    "<p><b>The paper.</b> Four parts, ten questions each, played once. Parts 1 and 2 everyday, Parts 3 "
    "and 4 academic. <i>The published guide says which question types may appear, not which will.</i></p>"
    "<p><b>The sound.</b> Speech is a stream, not a row of words. There are three kinds: single "
    "careful words, textbook connected speech, and real spontaneous speech &mdash; and you were taught "
    "the first two. <i>The three names are a teaching device, not a finding.</i></p>"
    "<p><b>The small words.</b> Function words lose their full vowel; sounds are dropped and changed. "
    "You often cannot hear which small word it was, and you recover it from the sentence. <i>How much "
    "disappears depends on the speaker, the speed and the style, so no rule is absolute.</i></p>"
    "<p><b>Mishearing.</b> What you hear instead is nearly always real English with the same rhythm, "
    "and the commonest error is the right sounds cut in the wrong place. <i>A collection of noticed "
    "errors cannot say how often they happen.</i></p>"
    "<p><b>Recognition.</b> You narrow the possible words from the first sounds, and usually know the "
    "word before it ends. <i>A laboratory model, revised by its own first author in 1987.</i></p>"
    "<p><b>Writing it down.</b> Speech-based material fades in a few seconds, and writing is itself a "
    "speech-based task, so a long answer costs you the next one. <i>A model revised for twenty-six "
    "years, with a fourth part added in 2000.</i></p>"
    "<p><b>The shape of a lecture.</b> Sentences that announce a section help; small joining words do "
    "not. <i>One study, modest effects, and it cannot tell you what your lecturer will do.</i></p>"
    "<p><b>Stress.</b> Most content words begin loud, so a loud syllable is probably a word beginning "
    "&mdash; except in words like <i>result</i>. <i>A count of a vocabulary is not a fact about an "
    "ear.</i></p>"
    "<p><b>Accents.</b> The published material says a range of accents is used. One study found accent "
    "effects small and uneven. <i>Its authors ask readers not to generalize.</i></p>"
    "<p><b>Being taught to listen.</b> Predict, listen, compare before you check, find the cause, "
    "listen again and reflect. <i>One term, intact classes, one teacher, and a subgroup result that "
    "has yet to be repeated.</i></p>"
    "<p><b>The number.</b> Every score has a width. <i>The coefficient behind that is a property of "
    "items and a group, not of a test, and its own author wrote critically about its use.</i></p>"
    + table_html(["Raw score of 40","Near band, as a rough guide"],
      [["about 30","7"],["about 23","6"],["about 16","5"]])
    + "<p><b>What the table is not.</b> It is described as <b>indicative</b>. The number of correct "
    "answers that reaches a band is worked out <b>for each version of the test</b>, so this is not "
    "the table used on your paper. It tells you nothing about the width round your own score. And it "
    "cannot be used backwards: a practice score of 23 is not a band 6, it is 23 answers on one set of "
    "questions on one morning.</p>",
    "A review page. Nothing here replaces the eleven sources; read them, and write down the dates."),
    640)
S["qb12-f6"]=lambda: f_realia(tbl("Numbers, dates and spelling", None,
    ["What you hear","What you write","The trap"],
    [["<i>thirteen</i> / <i>thirty</i>","13 / 30","the stress is the only difference"],
     ["<i>double four</i>","44","<i>double</i> means the digit twice"],
     ["<i>oh seven</i>","07","<i>oh</i> is zero in a number string"],
     ["<i>the third of May</i>","3 May","avoid 3/5 in an international paper"],
     ["a name spelled aloud",B,B],
     ["<i>two forms</i>",B,B]],
    note="Four cells are empty on purpose. These six traps are worth four or five marks a paper to "
    "almost everybody."), 640)
S["qb12-f7"]=lambda: f_chart([("how I write answers",4),("what I do in the thirty seconds",3),
    ("how I review",2),("what I believe about accents",1),("nothing yet",1)])
S["qb12-f8"]=lambda: f_icons([("headset","a four-box paper"),("thread","a ribbon of sound"),
    ("meeting","a word onset with candidates"),("recycle","a loop"),
    ("signpost","a signpost"),("balance","a score with a bracket")],3)
S["qb12-f9"]=lambda: f_realia(tbl("Personal routine &middot; one week",
    "Mei Lin &middot; 110 minutes of listening and 20 of drill",
    ["Day","What I do","Minutes","Which part it serves"],
    [["Monday","two Part 3 recordings, full five-step cycle with a partner","50","3"],
     ["Tuesday","numbers and spelling drill","5","all"],
     ["Wednesday","one lecture, headings in the first forty seconds; drill","25","4"],
     ["Thursday","four seconds of real speech, five playings, then the transcript; drill","15",
      "2 and 3"],
     ["Friday","one full paper under time","35","all"],
     ["Saturday","review the week's errors by reason","15","all"],
     ["Sunday","nothing","0","&mdash;"]],
    note="One hundred and ten minutes a week, not one paper a day. Scores so far 23 to 28; this "
    "routine is built on 25, not 28."), 680)
S["qb12-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("mei",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("note",360,196,0.24),("computer",490,142,0.42),
     ("proof",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"TWELVE WEEKS",[("Parts 3 and 4","only"),("drill","5 min")]),
    clockat=(680,44,22,16,0))
S["qb12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Routine 1", None,
        "<p>One practice paper a day. Key checked immediately. Seven papers a week.</p>"
        "<p style='color:#6b6861;font-size:13px'>Four months of this bought two marks.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Routine 2", None,
        "<p>One full cycle, two part-specific sessions, one timed paper, a five-minute daily drill, "
        "one review session.</p>"
        "<p style='color:#6b6861;font-size:13px'>Two hours ten a week, and every row serves a named "
        "part.</p>"), w)[0:3],
    w=900, h=280)
S["qb12-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page 1", None,
        "<p>Listen every day. Do practice tests. Learn more vocabulary. Watch films in English. Do "
        "not panic.</p>"
        "<p style='color:#6b6861;font-size:13px'>Five sentences, and not one of them can be "
        "checked.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page 2", None,
        "<p>Monday: Part 3, two recordings, full cycle with a partner, 50 min. Tuesday: numbers and "
        "spelling, 5. Wednesday: Part 4, one lecture, headings in the first forty seconds, 20; drill, "
        "5. Thursday: four seconds of real speech, five playings, then the transcript, 10; drill, 5. "
        "Friday: one full paper under time, 35. Saturday: review the week's errors by reason, 15. "
        "Sunday: nothing. <b>Total 110 minutes of listening and 20 of drill.</b> My scores are 23 to "
        "28 on six papers; this routine is built on 25, not 28, and I do not know how wide my spread "
        "will be in June. The table that turns forty marks into a band is published as a guide, so I "
        "am counting marks and not bands.</p>"), w)[0:3],
    w=940, h=380)
S["qb12-f13"]=lambda: f_realia(form("One-page planner",
    [("My part scores",""),("My weakest part",""),("The cycle day",""),("The drill",""),
     ("The real-speech minutes",""),("The timed paper",""),("My spread",""),
     ("The sentence at the foot","")]), 560)
S["qb12-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("mei",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("grace",365,176,{"seated":True}),("hana",440,172,{"seated":True}),
     ("tomas",515,176,{"seated":True}),("nour",590,170,{}),("junseo",655,172,{}),
     ("ines",720,170,{}),("marek",785,172,{}),("samira",845,170,{}),
     ("oksana",905,172,{}),("yusuf",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("note",350,198,0.24),
     ("printer",430,196,0.3),("spreadsheet",560,198,0.24),("table",650,0,1.0),
     ("bag",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,248,118,"FORTY MARKS, ONE BAND, ONE GUIDE",[("count","marks"),("not","bands")]),
    clockat=(310,34,22,9,0))
S["qb12-f15"]=lambda: f_chart([("read the gaps in the thirty seconds",3),
    ("write two-word answers",4),("run the cycle weekly",2),
    ("drill numbers and spelling",1),("I am not sure yet",1)])
S["qb12-f16"]=lambda: f_realia(doc("On a desk in the morning",
    "Nineteen to twenty-seven in twelve weeks",
    table_html(["","At the start","Now"],
      [["Part 1","9 of 10","9 of 10"],["Part 2","7 of 10","8 of 10"],
       ["Part 3","2 of 10","5 of 10"],["Part 4","1 of 10","5 of 10"],
       ["<b>Total</b>","<b>19</b>","<b>27</b>"],
       ["Longest answer written","six words","two words"],
       ["Gaps read in the thirty seconds","none","all"],
       ["Minutes of drill a day","0","5"]])
    + "<p><b>An indicative conversion table</b> with one row circled: about 23 is near band 6.</p>"
    "<p><i>Her spread is 23 to 28, and she still believes she needs more vocabulary.</i></p>",
    "Eight o'clock. Part 1 did not move. The two academic parts doubled."), 680)
