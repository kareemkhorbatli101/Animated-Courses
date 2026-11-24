# -*- coding: utf-8 -*-
"""Throughline Book 1 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 ----------------
S["pa04-f1"]=lambda: f_icons([("signature","a sponsor signing"),
    ("meeting","a project board of four"),("clipboard","a manager with a plan"),
    ("helmet","a team member doing the work"),("folder","an organization chart"),
    ("badge","one person, two role cards"),("magnifier","an assurance reviewer"),
    ("note","a limit written down"),("phone","a decision asked for by telephone"),
    ("cv","a job description")],4)
S["pa04-f2"]=lambda: f_scene(900,420, people=[("nadia",320,176,{"seated":True}),
     ("okonjo",430,176,{"seated":True})],
    props=[("table",250,0,1.22),("note",390,196,0.24),("pen",450,198,0.3),
     ("window",800,56,0.92)],
    board=(700,22,190,112,"FOUR BOXES",[("sponsor","?"),("board","4"),("manager","1")]),
    clockat=(640,44,22,9,40))
S["pa04-f3"]=lambda: f_icons([("signature","a sponsor signs"),("meeting","a board votes"),
    ("clipboard","a manager plans"),("helmet","a team member builds"),
    ("magnifier","a reviewer reads"),("badge","one person, two cards")],3)
S["pa04-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The project","The sponsor","Who decides above the limit","Is the limit written down"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The project with no named sponsor: ______________________"), 640)
S["pa04-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 4",
    "Project office &middot; who does what &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO 21502 is dated <b>2020</b>. It is <b>guidance</b> on managing a "
    "project. It names roles. It does not say who at this company holds them.</p>"
    + table_html(["Role","What the role is for"],
      [["<b>the sponsor</b>","answers for the money and the result"],
       ["<b>the project board</b>","decides above the manager's limit"],
       ["<b>the project manager</b>","runs the work day by day"],
       ["<b>the package owner</b>","is responsible for one package"]])
    + "<p><b>Two words, and the difference.</b> You are <b>responsible for</b> work you do. You "
    "are <b>accountable for</b> a result you answer for. A person can share the first. Nobody can "
    "share the second.</p>"
    "<p><b>What we found.</b> We have <b>18</b> projects. <b>Six</b> of them name a "
    "<b>department</b> as sponsor. A department cannot be asked a question. In 2023 one of those "
    "six waited <b>four weeks</b> for a decision, because three people each thought one of the "
    "others owned it.</p>"
    "<p><b>So every project now has a limit in numbers.</b> The manager decides up to "
    "<b>20,000</b> and <b>two weeks</b>. Above that, a <b>named</b> person decides, and the board "
    "meets monthly. A limit with no number in it is a limit nobody can use.</p>",
    "Source: ISO 21502:2020, Project, programme and portfolio management &mdash; Guidance on "
    "project management. It is guidance, not requirements: it describes roles and practices "
    "without prescribing an organizational structure, and it does not name who in your "
    "organization holds any role."), 600)
S["pa04-f6"]=lambda: f_realia(tbl("Four structures for roles", None,
    ["The structure","What it means","An example"],
    [["<b>be responsible for</b>","you do the work",
      "W. Zhao <b>is responsible for</b> the pipework."],
     ["<b>be accountable for</b>","you answer for the result",
      "G. Okonjo <b>is accountable for</b> the station."],
     ["<b>report to</b>","you tell this person",
      "The owners <b>report to</b> the manager."],
     ["<b>approve</b>","you say yes, up to a limit",
      "She may <b>approve</b> up to 20,000."],
     ["<b>own</b>","&nbsp;","&nbsp;"],
     ["<b>delegate</b>","&nbsp;","&nbsp;"]],
    note="A department can be responsible. Only a person can be accountable."), 620)
S["pa04-f7"]=lambda: f_chart([("a named sponsor who attends the board",7),
    ("a named sponsor who has never attended",3),
    ("a department named instead of a person",6),("no sponsor at all",1),
    ("nobody is sure",1)], unit="projects")
S["pa04-f8"]=lambda: f_icons([("signature","a signature"),("meeting","a board"),
    ("clipboard","a manager with a plan"),("helmet","a team member"),
    ("magnifier","a reviewer"),("badge","two role cards, one person")],3)
S["pa04-f9"]=lambda: f_realia(doc("Role sheet &middot; pump station",
    "One page. Four boxes. One name in each.",
    table_html(["Role","Who","Answers for","May decide alone"],
      [["<b>Sponsor</b>","G. Okonjo","the result and the money",
        "anything up to <b>120,000</b>"],
       ["<b>Board</b>","four named members","the decision to continue",
        "anything; <b>meets monthly</b>"],
       ["<b>Manager</b>","N. Haddad","the plan and the reporting",
        "<b>20,000</b> and <b>two weeks</b>"],
       ["<b>Package owners</b>","twelve named people","one package each",
        "<b>2,000</b> within their package"]]),
    "<b>The sponsor box was empty for nine weeks.</b> Nobody noticed until a decision worth "
    "31,000 had to be made and there was no one to ask."), 660)
S["pa04-f10"]=lambda: f_scene(940,430, people=[("nadia",300,172,{}),
     ("okonjo",410,176,{"seated":True}),("marek",530,176,{"seated":True})],
    props=[("table",240,0,1.2),("note",380,196,0.24),("computer",470,142,0.42),
     ("folder",560,198,0.22),("window",830,56,0.9)],
    board=(720,22,190,110,"SPONSORS",[("named","10"),("a department","6")]),
    clockat=(680,44,22,10,0))
S["pa04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Role sheet, as written", None, ["Role","Who"],
      [["Sponsor","Operations"],["Board","the management team"],
       ["Manager","N. Haddad"],["Owners","the site team"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Role sheet, rewritten", None,
      ["Role","Who","May decide alone"],
      [["Sponsor","<b>G. Okonjo</b>","up to 120,000"],
       ["Board","<b>four named members</b>","above that, monthly"],
       ["Manager","<b>N. Haddad</b>","20,000 and two weeks"],
       ["Owners","<b>twelve named people</b>","2,000 in their package"]]), w)[0:3],
    w=940, h=270)
S["pa04-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Role box, as written", None,
        "<p><b>Sponsor:</b> Operations.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Role box, rewritten", None,
        "<p><b>Sponsor: G. Okonjo.</b><br>"
        "<b>Accountable for</b> the result and the money.<br>"
        "<b>Reports to</b> the board, monthly.<br>"
        "<b>May decide alone</b> up to <b>120,000</b> and <b>six weeks</b>.</p>"), w)[0:3],
    w=900, h=240)
S["pa04-f13"]=lambda: f_realia(form("Role planner",
    [("The sponsor",""),("The board, and when it meets",""),("The project manager",""),
     ("The package owners",""),("The limits, in numbers",""),
     ("What the sheet does not say","")]), 520)
S["pa04-f14"]=lambda: f_scene(1000,450,
    people=[("ida",60,176,{}),("nadia",135,172,{}),("okonjo",210,176,{"seated":True}),
     ("marek",290,172,{"seated":True}),("haddad",370,176,{"seated":True}),
     ("wei",445,172,{}),("oyelaran",520,176,{"seated":True}),("karin",595,170,{}),
     ("ines",660,172,{}),("ravi",725,170,{}),("sofia",790,172,{}),
     ("junseo",850,170,{}),("mei",910,172,{}),("nkemelu",960,174,{})],
    props=[("desk",95,0,1.1),("board",155,86,0.66),("computer",335,142,0.4),
     ("printer",430,196,0.3),("note",548,198,0.22),("table",645,0,1.0),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,200,112,"ONE NAME EACH",[("named","10"),("a department","6"),("nobody","1")]),
    clockat=(258,34,22,10,0))
S["pa04-f15"]=lambda: f_chart([("a named person I have met",8),
    ("a named person I have never met",5),("a department",7),("nobody",3),
    ("I do not know",4)])
S["pa04-f16"]=lambda: f_realia(doc("On a desk in March",
    "What was on it at five o'clock",
    "<p><b>The role sheet.</b> Four boxes; the <b>sponsor</b> box empty.</p>"
    "<p><b>A printed list.</b> Eighteen projects; <b>six</b> marked.</p>"
    "<p><b>A note.</b> A <b>31,000</b> decision, taken on the <b>14th</b>, by somebody who later "
    "said they had assumed it was theirs to take.</p>"
    "<p><b>A note of three sentences.</b> <i>Six of our projects name a department as sponsor and "
    "all six are run by people doing their best. A department has no diary and cannot be asked a "
    "question, so the question waits. Four weeks of waiting cost us more than any wrong answer "
    "would have.</i></p>",
    "Five o'clock. One name per box, and a number beside each name."), 580)

# ---------------- Unit 5 ----------------
S["pa05-f1"]=lambda: f_icons([("board","a triangle with three corners"),
    ("calendar","time"),("cash","cost"),("pipe","scope"),
    ("spreadsheet","two plans side by side"),("timer","a corner pulled out"),
    ("scales","a trade-off"),("coins","what it costs to go faster"),
    ("tired","unpaid hours"),("star","value, and where it is not")],4)
S["pa05-f2"]=lambda: f_scene(940,430, people=[("ida",250,172,{}),
     ("marek",420,176,{"seated":True}),("sofia",500,176,{"seated":True}),
     ("ravi",580,176,{"seated":True})],
    props=[("flipchart",90,70,0.78),("table",390,0,1.1),("note",470,196,0.22),
     ("window",830,56,0.9)],
    board=(700,22,200,112,"THE TRIANGLE",[("time","&nbsp;"),("cost","&nbsp;"),("scope","&nbsp;")]),
    clockat=(650,44,22,2,30))
S["pa05-f3"]=lambda: f_icons([("calendar","time"),("cash","cost"),
    ("pipe","scope: what is delivered"),("spreadsheet","two plans compared"),
    ("scales","one corner out, one in"),("coins","a benefit, afterwards")],3)
S["pa05-f4"]=lambda: f_realia(tbl("Team research", None,
    ["What was asked for","Which corner moved","Who decided","What it cost"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The time nobody admitted a corner had moved: ______________________"), 640)
S["pa05-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 5",
    "Project office &middot; the three corners &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> The triangle of <b>time, cost and quality</b> was drawn by "
    "<b>Martin Barnes</b> in <b>1969</b>, for a course on project cost. It is sixty years old and "
    "it is on a wall in almost every project office in the world.</p>"
    + table_html(["If this is asked for","Then one of these moves"],
      [["<b>faster</b>","the cost goes up, or the scope goes down"],
       ["<b>cheaper</b>","it takes longer, or less is delivered"],
       ["<b>more</b>","it costs more, or it takes longer"]])
    + "<p><b>What we found.</b> We looked at <b>22</b> requests to go faster. In <b>7</b> of them "
    "a corner moved and <b>nobody wrote it down</b>. The scope went down quietly, or the people "
    "worked longer, and the plan still showed three corners in the same place.</p>"
    "<p><b>The corner that is not on the drawing.</b> On one project the answer was "
    "<b>eleven unpaid Saturdays</b>. The date held. The cost held. The scope held. A good "
    "engineer left in May and we have not replaced her yet.</p>"
    "<p><b>The rule now.</b> An answer to <i>can you go faster</i> is <b>two options with "
    "numbers</b>, not a yes. And its author later said the triangle was never meant to be the "
    "whole of the job.</p>",
    "Source: Martin Barnes's time&ndash;cost&ndash;quality triangle, 1969. Its author later said "
    "the triangle was never meant to describe the whole of a project manager's job, and it has no "
    "corner for the people who absorb the difference."), 600)
S["pa05-f6"]=lambda: f_realia(tbl("Comparatives", None,
    ["The word","Its comparative","An example"],
    [["fast","<b>faster</b>","Option 1 is <b>faster</b> and 40,000 dearer."],
     ["cheap","<b>cheaper</b>","Option 2 is <b>cheaper</b> and six weeks longer."],
     ["expensive","<b>more expensive</b>","Faster is always <b>more expensive</b>."],
     ["good","<b>better</b>","The second answer is <b>better</b> and longer."],
     ["easy","&nbsp;","&nbsp;"],
     ["late","&nbsp;","&nbsp;"]],
    note="<b>less</b> scope &middot; <b>fewer</b> features. One is uncountable, the other is "
    "not."), 600)
S["pa05-f7"]=lambda: f_chart([("the cost went up",6),("the scope went down quietly",5),
    ("the date did not move at all",4),("people worked unpaid hours",5),
    ("nobody recorded anything",2)], unit="requests")
S["pa05-f8"]=lambda: f_icons([("calendar","time"),("cash","cost"),("pipe","scope"),
    ("spreadsheet","two plans"),("scales","a corner pulled out"),
    ("worried","a benefit with a question mark")],3)
S["pa05-f9"]=lambda: f_realia(doc("Options sheet &middot; &ldquo;can you finish six weeks early?&rdquo;",
    "One page. Two real options and one that is not an option.",
    table_html(["Option","Time","Cost","Scope"],
      [["<b>1 &nbsp;Add a second crew</b>","<b>&minus;6 weeks</b>","<b>+40,000</b>",
        "unchanged"],
       ["<b>2 &nbsp;Hand over in two stages</b>","<b>&minus;6 weeks</b> for stage 1",
        "+4,000","<b>stage 2 moves to November</b>"],
       ["<b>3 &nbsp;The team absorbs it</b>","<b>unknown</b>","<b>unknown</b>",
        "unchanged on paper"]]),
    "<b>Option 3 is what happened last time.</b> Eleven unpaid Saturdays, and an engineer who "
    "resigned in May. It is on the sheet so that somebody has to choose it out loud."), 660)
S["pa05-f10"]=lambda: f_scene(940,430, people=[("ida",270,172,{}),
     ("okonjo",400,176,{"seated":True}),("marek",520,176,{"seated":True})],
    props=[("flipchart",90,74,0.62),("table",330,0,1.2),("note",420,196,0.24),
     ("computer",490,142,0.4),("window",830,56,0.9)],
    board=(720,22,190,110,"ASK FOR",[("two options","with numbers"),("not","a yes")]),
    clockat=(680,44,22,2,30))
S["pa05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Answer 1", None,
        "<p><b>&ldquo;We'll absorb it. The team will do its best.&rdquo;</b></p>"
        "<p style='color:#6b6861;font-size:13px'>Eleven words. No corner moved on paper, so "
        "nobody decided anything, so nobody can be asked about it later.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Answer 2", None,
        "<p><b>Option 1.</b> Six weeks earlier. <b>+40,000</b>. Scope unchanged.<br>"
        "<b>Option 2.</b> Stage 1 six weeks earlier. <b>+4,000</b>. Stage 2 in November.<br>"
        "<b>I recommend option 2</b>, because the client needs the inlet and not the "
        "landscaping.</p>"), w)[0:3],
    w=920, h=270)
S["pa05-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Reply, as sent", None,
        "<p><b>We will do our best.</b></p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Reply, rewritten", None, ["","Time","Cost","Scope"],
      [["<b>Option 1</b>","&minus;6 wk","+40,000","same"],
       ["<b>Option 2</b>","&minus;6 wk (stage 1)","+4,000","stage 2 in Nov"]],
      note="I recommend option 2. You need the inlet in September; the landscaping can "
      "wait."), w)[0:3],
    w=920, h=250)
S["pa05-f13"]=lambda: f_realia(form("Options planner",
    [("The request",""),("Why it is really three requests",""),("Option 1, in four lines",""),
     ("Option 2, in four lines",""),("What you recommend, and why",""),
     ("What you will not offer","")]), 520)
S["pa05-f14"]=lambda: f_scene(1000,450,
    people=[("ida",60,176,{}),("okonjo",135,172,{}),("nadia",210,176,{"seated":True}),
     ("marek",290,172,{"seated":True}),("sofia",370,176,{"seated":True}),
     ("ravi",445,172,{}),("lars",520,176,{"seated":True}),("karin",595,170,{}),
     ("ines",660,172,{}),("wei",725,170,{}),("hanna",790,172,{}),
     ("junseo",850,170,{}),("mei",910,172,{}),("tomas",960,174,{})],
    props=[("desk",95,0,1.1),("flipchart",150,72,0.6),("computer",335,142,0.4),
     ("printer",430,196,0.3),("note",548,198,0.22),("table",645,0,1.0),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,200,112,"WHICH CORNER?",[("cost","6"),("scope","5"),("people","5")]),
    clockat=(258,34,22,3,0))
S["pa05-f15"]=lambda: f_chart([("cost",6),("time",5),("scope quietly",7),
    ("unpaid hours",6),("nobody admits one moved",3)])
S["pa05-f16"]=lambda: f_realia(doc("On a desk in May",
    "What was on it at five o'clock",
    "<p><b>The options sheet.</b> Two real options; one row with <b>unknown</b> in two cells.</p>"
    "<p><b>A time sheet.</b> <b>Eleven Saturdays</b>, none of them paid, none of them in the "
    "plan.</p>"
    "<p><b>A letter of resignation.</b> Four lines, polite, giving a month's notice.</p>"
    "<p><b>A note of three sentences.</b> <i>Every corner of the triangle held and we still lost "
    "the best engineer on the job. The thing that moved was not on the drawing, and that is not a "
    "fault in the drawing, which is sixty years old and was never meant to carry this. It is a "
    "fault in us for asking a question whose only honest answer was a number we did not want to "
    "write down.</i></p>",
    "Five o'clock. Two options, both with numbers, and a third printed so that choosing it has to "
    "be said out loud."), 580)

# ---------------- Unit 6 ----------------
S["pa06-f1"]=lambda: f_icons([("shoppinglist","a list with four labels"),
    ("star","must"),("note","should"),("flashcard","could"),
    ("deadline","won't, this time"),("timer","a fixed box of time"),
    ("folder","a next-time list"),("scissors","dropping something"),
    ("tally","counting the musts"),("handshake","agreeing out loud")],4)
S["pa06-f2"]=lambda: f_scene(940,430, people=[("nadia",260,172,{}),("priya",350,172,{}),
     ("lars",450,172,{})],
    props=[("board",90,66,0.86),("table",520,0,1.05),("flashcard",580,196,0.26),
     ("window",830,56,0.9)],
    board=(700,22,200,118,"THE WALL",[("must","41"),("should","0"),("could","0"),("won't","0")]),
    clockat=(650,44,22,4,10))
S["pa06-f3"]=lambda: f_icons([("star","a must, with a reason under it"),
    ("note","a should"),("flashcard","a could"),
    ("deadline","a won't, with a date"),("timer","a fixed timebox"),
    ("folder","the next-time list")],3)
S["pa06-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The requirement","My first answer","Does it still work without it","My second answer"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one I could not let go of: ______________________"), 640)
S["pa06-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 6",
    "Project office &middot; putting things in order &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> <b>MoSCoW</b> was written by <b>Dai Clegg</b> in "
    "<b>1994</b>. It was later carried by the <b>DSDM</b> framework. Four groups, and the capital "
    "letters are the four words.</p>"
    + table_html(["Group","What it means"],
      [["<b>must have</b>","the release cannot ship without it"],
       ["<b>should have</b>","it hurts to leave it out, but we can"],
       ["<b>could have</b>","nice, and nobody will stop work for it"],
       ["<b>won't have this time</b>","agreed out loud, with a date"]])
    + "<p><b>What we found.</b> Our list had <b>41</b> requirements. <b>All 41</b> were marked "
    "<b>must</b>. That is not a priority list. It is a list.</p>"
    + table_html(["After one afternoon","Count"],
      [["must","<b>9</b>"],["should","<b>14</b>"],["could","<b>11</b>"],
       ["won't, this time","<b>7</b>"]])
    + "<p><b>The question that did it.</b> Not <i>is this important</i>. Everything is important. "
    "The question was: <b>does the station still work without it on the first day?</b> Nine "
    "things failed that test.</p>"
    "<p><b>The fourth group is the useful one.</b> Every <b>won't</b> carries a <b>date</b> and a "
    "<b>name</b>. Without those two things it is a <i>not yet</i>, and a <i>not yet</i> is never "
    "reopened by anybody.</p>",
    "Source: MoSCoW prioritization, described by Dai Clegg in 1994 and later carried by the DSDM "
    "framework. It orders requirements and does not tell you how many must-haves a release can "
    "hold, nor what to do when a stakeholder refuses to move one."), 600)
S["pa06-f6"]=lambda: f_realia(tbl("Modals of priority", None,
    ["The modal","How strong","An example"],
    [["<b>must</b>","no choice","It <b>must</b> be in the first release."],
     ["<b>should</b>","strong, not absolute","It <b>should</b> be in, if we can."],
     ["<b>could</b>","optional","It <b>could</b> go in at the end."],
     ["<b>will not</b>","agreed out, with a date","It <b>will not</b> be in this time."],
     ["<b>must not</b>","&nbsp;","&nbsp;"],
     ["<b>do not have to</b>","&nbsp;","&nbsp;"]],
    note="<b>must not</b> forbids. <b>do not have to</b> permits. Mixing them up on a safety "
    "requirement is the most expensive grammar error in this book."), 620)
S["pa06-f7"]=lambda: f_part("Forty-one requirements, after one afternoon",
    [("must",9,"#7a3b2f"),("should",14,"#4a6b3b"),("could",11,"#b07a1e"),
     ("won't, this time",7,"#6b6861")])
S["pa06-f8"]=lambda: f_icons([("star","a must, with a reason"),("note","a should"),
    ("flashcard","a could"),("deadline","a won't, with a date"),
    ("timer","a fixed timebox"),("folder","the next-time list")],3)
S["pa06-f9"]=lambda: f_realia(doc("Priority list &middot; extract",
    "Nine musts, and the reason printed beside each one",
    table_html(["Must have","Why it cannot wait"],
      [["Inlet pipework commissioned","no water enters the station without it"],
       ["Pumps aligned and tested","the pumps are the station"],
       ["Control panel wired and proved","nothing can be switched on"],
       ["Emergency stop proved","we may not hand over without it"],
       ["Overflow route open","a wet winter floods the yard"],
       ["Flow meter calibrated","the client's permit requires a reading"],
       ["As-built drawings issued","the maintenance team cannot find anything"],
       ["Operating manual issued","the operators have not seen the plant"],
       ["Two-week witness test","written into the contract, clause 14"]]),
    "<b>Fourteen shoulds, eleven coulds, seven won'ts.</b> Every <i>won't</i> carries a date and "
    "a name. The first one is already back on the list for March."), 660)
S["pa06-f10"]=lambda: f_scene(940,430, people=[("nadia",270,172,{}),
     ("priya",370,172,{}),("marek",500,176,{"seated":True})],
    props=[("board",80,62,0.8),("table",430,0,1.1),("computer",490,142,0.4),
     ("flashcard",560,196,0.24),("window",830,56,0.9)],
    board=(700,22,200,118,"AFTER",[("must","9"),("should","14"),("could","11"),("won't","7")]),
    clockat=(650,44,22,4,30))
S["pa06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The list we had", None,
        "<p style='font-size:17px'><b>41 requirements</b><br>"
        "<b>41 marked must</b></p>"
        "<p style='color:#6b6861;font-size:13px'>Nothing was wrong with any single row. Together "
        "they told the team nothing at all about what to build first.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("The list we have", None, ["Group","Count","Each row carries"],
      [["must","<b>9</b>","a reason"],["should","<b>14</b>","&mdash;"],
       ["could","<b>11</b>","&mdash;"],["won't, this time","<b>7</b>",
        "<b>a date and a name</b>"]]), w)[0:3],
    w=920, h=270)
S["pa06-f12"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Five rows, as written", None, ["Requirement","Priority"],
      [["Emergency stop proved","must"],["Flow meter calibrated","must"],
       ["Second access door","must"],["Yard lighting upgraded","must"],
       ["Signage renewed","must"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Five rows, rewritten", None, ["Requirement","Group","With it"],
      [["Emergency stop proved","<b>must</b>","cannot hand over without it"],
       ["Flow meter calibrated","<b>must</b>","the permit needs a reading"],
       ["Second access door","<b>should</b>","&mdash;"],
       ["Yard lighting upgraded","<b>could</b>","&mdash;"],
       ["Signage renewed","<b>won't</b>","<b>March, K. Lind</b>"]]), w)[0:3],
    w=940, h=260)
S["pa06-f13"]=lambda: f_realia(form("Priority planner",
    [("The question you asked",""),("The musts, with reasons",""),("The shoulds",""),
     ("The coulds",""),("The won'ts, with dates and names",""),
     ("What the list depends on","")]), 520)
S["pa06-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("nadia",135,172,{}),("priya",210,176,{"seated":True}),
     ("marek",290,172,{"seated":True}),("lars",370,176,{"seated":True}),
     ("wei",445,172,{}),("okonjo",520,176,{"seated":True}),("karin",595,170,{}),
     ("ines",660,172,{}),("ravi",725,170,{}),("sofia",790,172,{}),
     ("junseo",850,170,{}),("mei",910,172,{}),("oskar",960,174,{})],
    props=[("desk",95,0,1.1),("board",155,84,0.66),("computer",335,142,0.4),
     ("printer",430,196,0.3),("flashcard",548,198,0.22),("table",645,0,1.0),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,200,118,"41 &rarr; 9",[("must","9"),("should","14"),("could","11"),
      ("won't","7")]),
    clockat=(258,34,22,5,0))
S["pa06-f15"]=lambda: f_chart([("under a quarter",5),("about half",7),("nearly all",8),
    ("all of them",4),("we do not prioritize",3)])
S["pa06-f16"]=lambda: f_realia(doc("On a desk in May",
    "What was on it at five o'clock",
    "<p><b>The list.</b> Forty-one rows; most of the first column crossed out and rewritten in "
    "three others.</p>"
    "<p><b>Seven cards.</b> One <i>won't</i> each, with a <b>date</b> and a <b>name</b> on "
    "every one.</p>"
    "<p><b>A printed email.</b> Three lines from the client, agreeing to all seven.</p>"
    "<p><b>A note of three sentences.</b> <i>Nobody wrote forty-one musts to be difficult; every "
    "single one of them was genuinely important to somebody who had to live with it. What we had "
    "never done was ask a different question, which is whether the station works on the first day "
    "without it. Nine failed that test and the afternoon it took us was the cheapest afternoon of "
    "the year.</i></p>",
    "Five o'clock. Nine musts, each with a reason, and seven things agreed out loud with a date "
    "on them."), 580)
