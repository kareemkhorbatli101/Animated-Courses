# -*- coding: utf-8 -*-
"""Throughline Book 1 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["pa00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each, from an ordinary project meeting",
    ["What you have","An example"],
    [["The present simple","The job <b>starts</b> on Monday."],
     ["The past simple","We <b>finished</b> the drawings in March."],
     ["Numbers","<b>Eleven</b> of the <b>twenty-nine</b> have no end date."],
     ["Dates","<b>on</b> the 4th &middot; <b>in</b> June &middot; <b>by</b> Friday"],
     ["<i>There is</i> and <i>there are</i>","<b>There are</b> four packages in that branch."],
     ["Questions","<b>Who</b> decides? <b>When</b> will it be finished?"]],
    note="Six boxes. This book adds the English of a published document: its edition, its date, "
    "and the line that says what it does not cover."), 580)
S["pa00-f2"]=lambda: f_panels(
    lambda w,h: f_realia(doc("A project", None,
        "<p style='font-size:17px;line-height:2.0'>It has a <b>start</b>.<br>"
        "It has an <b>end</b>.<br>It has a <b>result</b> that did not exist before.<br>"
        "The team has a <b>last day</b>.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Ordinary work", None,
        "<p style='font-size:17px;line-height:2.0'>It <b>began</b> before you arrived.<br>"
        "It has <b>no end date</b>, and needs none.<br>"
        "The result is <b>the same thing again</b>, well done.<br>"
        "The team <b>stays</b>.</p>"), w)[0:3],
    w=880, h=260, lt="&nbsp;", rt="One of these has a last day")
S["pa00-f3"]=lambda: f_realia(doc("Taped inside a notebook",
    "Four questions, and who asks each one",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;What are we making?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>The person who has to build it.</span><br>"
    "<b>2 &nbsp;When will it be finished?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>The client, and everybody waiting.</span><br>"
    "<b>3 &nbsp;What will it cost?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>The person who signs for the money.</span><br>"
    "<b>4 &nbsp;Who decides?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Everybody, on the first bad day.</span>"
    "</p>",
    "Four questions. A project that can answer all four in one page rarely goes quiet for a "
    "month."), 560)
S["pa00-f4"]=lambda: f_realia(doc("Two answers to question two", None,
    "<p><b>&ldquo;Soon.&rdquo;</b></p>"
    "<p style='color:#6b6861;font-size:13px'>One word. Three people leave the room with three "
    "different dates in their heads, and all of them think they agreed.</p>"
    "<p><b>&ldquo;The 14th, if the pumps arrive by the 7th. Wei is chasing them and will know on "
    "Friday.&rdquo;</b></p>"
    "<p style='color:#6b6861;font-size:13px'>A date. A condition. A name. A day when the "
    "condition will be answered.</p>",
    "The second answer is longer by eighteen words and shorter by about three weeks."), 560)

# ---------------- Unit 1 ----------------
S["pa01-f1"]=lambda: f_icons([("calendar","a project: a start and an end"),
    ("folder","three projects in one boundary"),("warehouse","many of them at once"),
    ("pipe","a deliverable: a pump station"),("badge","a stakeholder"),
    ("coins","a benefit, after the work ends"),("note","an objective, one line"),
    ("deadline","a temporary team, with a last day"),("desk","a permanent team"),
    ("book","a page of definitions")],4)
S["pa01-f2"]=lambda: f_scene(900,420, people=[("nadia",330,176,{"seated":True}),
     ("marek",430,172,{"seated":True})],
    props=[("table",250,0,1.25),("note",390,196,0.24),("board",120,86,0.72),
     ("folder",470,196,0.24),("window",790,56,0.94)],
    board=(700,22,190,110,"WHAT WE CALL IT",[("project","ends"),("programme","related"),("portfolio","chosen")]),
    clockat=(640,44,22,9,20))
S["pa01-f3"]=lambda: f_icons([("note","one project, one objective"),
    ("handshake","two projects, one aim"),("meeting","a board choosing between four"),
    ("pipe","a deliverable handed over"),("coins","a benefit, six months later"),
    ("deadline","a team on its last day")],3)
S["pa01-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The work","Its name","Has an end date","Project, programme or neither"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one nobody can classify: ______________________"), 620)
S["pa01-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 1",
    "Project office &middot; what we call things &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO 21506 is dated <b>2018</b>. It is a <b>vocabulary</b>. It gives "
    "the words and nothing else. It does not give a method. It does not give a process.</p>"
    + table_html(["Term","Roughly what it says"],
      [["<b>a project</b>","temporary work, with a start and an end, for an objective"],
       ["<b>a programme</b>","<b>related</b> projects, managed together for a benefit"],
       ["<b>a portfolio</b>","a <b>collection</b> of work, chosen and compared together"]])
    + "<p><b>What we found.</b> Our register has <b>29 projects</b> on it. <b>Eleven</b> of them "
    "have no end date. They are not late. They are not projects. They are ordinary work with a "
    "project name on it.</p>"
    "<p><b>Why it matters.</b> Every month we report <b>29 projects</b> and <b>14 late</b>. "
    "Eleven of the 29 can never be finished, so they can never be late. The number is wrong in "
    "both directions and nobody is lying.</p>"
    "<p><b>What we changed.</b> The report is now <b>two tables</b>. One holds 18 projects with "
    "dates. One holds 11 pieces of work with owners. Nothing was stopped. Nothing was renamed to "
    "look better.</p>",
    "Source: ISO 21506:2018, Project, programme and portfolio management &mdash; Vocabulary. It "
    "defines terms for use in that family of standards. It contains no requirements, no process "
    "and no method, and it does not say what your company should call its own work."), 600)
S["pa01-f6"]=lambda: f_realia(tbl("One and many", None,
    ["One","Many","An example"],
    [["a project","projects","The portfolio <b>has</b> 29 <b>projects</b>."],
     ["a programme","programmes","Two <b>programmes</b> share one team."],
     ["a portfolio","portfolios","Each region <b>has</b> one <b>portfolio</b>."],
     ["a deliverable","deliverables","The package <b>has</b> four <b>deliverables</b>."],
     ["an objective","&nbsp;","&nbsp;"],
     ["a person","&nbsp;","&nbsp;"]],
    note="Two rows are empty on purpose."), 600)
S["pa01-f7"]=lambda: f_chart([("projects with an end date",18),
    ("projects with no end date",11),("parts of a programme",6),
    ("running work called a project",11),("nobody is sure",3)],
    unit="pieces of work")
S["pa01-f8"]=lambda: f_icons([("calendar","one project, one end date"),
    ("folder","three inside one boundary"),("meeting","a board, four proposals"),
    ("pipe","a deliverable handed over"),("deadline","a last day"),
    ("desk","a permanent team")],3)
S["pa01-f9"]=lambda: f_realia(tbl("Portfolio list &middot; extract",
    "Twelve of twenty-nine rows, as the register held them in February",
    ["The work","End date","One objective","What it actually is"],
    [["Pump station rebuild","26 Sep","yes","a project"],
     ["Depot lighting","14 Mar","yes","a project"],
     ["Site safety","&mdash;","&mdash;","<b>ordinary work</b>"],
     ["Calder phase 2","30 Apr","yes","a project"],
     ["Supplier management","&mdash;","&mdash;","<b>ordinary work</b>"],
     ["Water main renewal","8 Nov","yes","a project"],
     ["Training","&mdash;","&mdash;","<b>ordinary work</b>"],
     ["Pipework survey","19 Jun","yes","a project"],
     ["Depot move","12 Dec","yes","a project"],
     ["Quality improvement","&mdash;","&mdash;","<b>ordinary work</b>"],
     ["Valve replacement","3 Aug","yes","a project"],
     ["Harbour inspection","21 Feb","yes","a project"]],
    note="<b>Twelve pieces of work, four renamed.</b> Nothing was stopped and nobody was "
    "criticized."), 640)
S["pa01-f10"]=lambda: f_scene(940,430, people=[("nadia",300,172,{}),
     ("marek",400,176,{"seated":True}),("grace",520,172,{})],
    props=[("table",230,0,1.2),("computer",370,142,0.44),("folder",470,196,0.24),
     ("note",520,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"THE REGISTER",[("rows","29"),("no end date","11")]),
    clockat=(680,44,22,9,30))
S["pa01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Monthly report &middot; front page", None,
        "<p style='font-size:20px'><b>29 projects</b><br><b>14 late</b></p>"
        "<p style='color:#6b6861;font-size:13px'>Both numbers are wrong, and neither is a lie.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("Monthly report &middot; front page, rewritten", None,
        "<p><b>Table 1 &mdash; 18 projects</b><br>"
        "<span style='font-size:13px'>each with a start, an end and an objective</span></p>"
        "<p><b>Table 2 &mdash; 11 pieces of ordinary work</b><br>"
        "<span style='font-size:13px'>each with an owner, and no end date, because none is "
        "needed</span></p>"), w)[0:3],
    w=900, h=280)
S["pa01-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Entry, as written", None,
        "<p><b>Depot move</b> &mdash; in progress.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Entry, rewritten", None,
        "<p><b>Depot move.</b> One objective: all four teams working from the north depot. "
        "<b>Starts</b> 6 Jan, <b>ends</b> 12 Dec. Team of <b>nine</b>, of whom <b>two</b> are "
        "full time.</p>"), w)[0:3],
    w=900, h=240)
S["pa01-f13"]=lambda: f_realia(form("Register entry planner",
    [("What it is",""),("The objective, in one line",""),("The dates",""),
     ("The team",""),("The sponsor",""),("What this entry does not say","")]), 520)
S["pa01-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("nadia",130,172,{"seated":True}),("marek",205,176,{"seated":True}),
     ("grace",290,172,{}),("tomas",365,176,{"seated":True}),("priya",440,172,{"seated":True}),
     ("lars",515,176,{"seated":True}),("oksana",590,170,{}),("ines",655,172,{}),
     ("ravi",720,170,{}),("chiamaka",785,172,{}),("junseo",845,170,{}),
     ("mei",905,172,{}),("wei",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("computer",330,142,0.4),
     ("printer",430,196,0.3),("folder",560,198,0.22),("table",650,0,1.0),
     ("cafe",860,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,200,112,"THREE WORDS",[("project","one aim"),("programme","related"),("portfolio","compared")]),
    clockat=(255,34,22,10,0))
S["pa01-f15"]=lambda: f_chart([("fewer than five",4),("five to twenty",9),
    ("more than twenty",6),("I do not know",5),("we do not count them",2)])
S["pa01-f16"]=lambda: f_realia(doc("On a desk in March",
    "What was on it at five o'clock",
    "<p><b>The old front page.</b> <b>29 projects</b>, the number circled in pen.</p>"
    "<p><b>The new front page.</b> Two tables: <b>18</b> and <b>11</b>.</p>"
    "<p><b>A single sheet.</b> Five projects, and <b>one</b> written aim between them.</p>"
    "<p><b>A note of three sentences.</b> <i>Nobody put the eleven on that list to cheat. They "
    "were put there because a project gets attention and ordinary work does not. The repair is "
    "not a better definition; it is giving the ordinary work a name people are willing to "
    "say.</i></p>",
    "Five o'clock. The register is now two tables and the work is exactly the same work."), 580)

# ---------------- Unit 2 ----------------
S["pa02-f1"]=lambda: f_icons([("timetable","five bars"),("calendar","a time axis"),
    ("today","a start date"),("deadline","an end date"),
    ("spreadsheet","two bars overlapping"),("walkroute","two bars, one after the other"),
    ("timer","a bar made longer"),("signpost","the line marking today"),
    ("star","a milestone"),("flipchart","a printed chart with pen marks")],4)
S["pa02-f2"]=lambda: f_scene(900,420, people=[("tomas",300,172,{}),("nadia",390,176,{})],
    props=[("flipchart",150,66,0.8),("table",430,0,1.1),("note",520,196,0.24),
     ("pen",560,198,0.3),("window",800,56,0.92)],
    board=(700,22,190,110,"THE CHART",[("bars","31"),("agreed","20")]),
    clockat=(650,44,22,11,10))
S["pa02-f3"]=lambda: f_icons([("timetable","one bar on its own"),
    ("spreadsheet","two bars overlapping"),("walkroute","two bars end to end"),
    ("star","a diamond for a milestone"),("signpost","a vertical line for today"),
    ("timer","a bar made longer in pen")],3)
S["pa02-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The task","The start date","The end date","Who agreed the dates"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The bar nobody agreed: ______________________"), 620)
S["pa02-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 2",
    "Project office &middot; the bar chart &middot; page 1 of 1",
    "<p><b>Where the chart comes from.</b> <b>Karol Adamiecki</b> drew a work chart in "
    "<b>1896</b> and called it a <i>harmonogram</i>. <b>Henry Gantt</b> published his charts "
    "between about <b>1910 and 1919</b>. Our software is about a hundred years younger than the "
    "idea.</p>"
    + table_html(["What a bar shows","What it does not show"],
      [["a start and an end","whether anybody agreed them"],
       ["how long the work takes","what it depends on"],
       ["which bars overlap","who is doing both at once"]])
    + "<p><b>What we found.</b> Our chart has <b>31 bars</b>. We asked who agreed each one. "
    "<b>Eleven</b> of the 31 came from last year's plan or from nobody at all. We wrote a "
    "<b>question mark</b> beside each of those eleven in pen.</p>"
    "<p><b>The client asked for the date for testing.</b> The honest answer was not a date. It "
    "was: <b>June</b>, no day agreed, two inspectors needed, and we will know on <b>Friday</b>. "
    "The client took that answer. He had been given three dates before and all three moved.</p>"
    "<p><b>The rule now.</b> A bar with no condition written under it is <b>a wish</b>. The pen "
    "mark stays until a person has agreed the date.</p>",
    "Source: Karol Adamiecki's harmonogram, 1896, and Henry Gantt's charts, published about "
    "1910&ndash;1919. Neither inventor gave the chart the meaning we hang on it now: a bar is a "
    "drawing of an intention, and the chart has no way of showing a condition."), 600)
S["pa02-f6"]=lambda: f_realia(tbl("Prepositions of time", None,
    ["The word","What it goes with","An example"],
    [["<b>on</b>","a day or a date","<b>on</b> Monday &middot; <b>on</b> the 4th"],
     ["<b>in</b>","a month, a season, a year","<b>in</b> June &middot; <b>in</b> 2027"],
     ["<b>at</b>","a clock time","<b>at</b> nine &middot; <b>at</b> half past two"],
     ["<b>by</b>","a deadline","finished <b>by</b> Friday"],
     ["<b>from &hellip; to</b>","&nbsp;","&nbsp;"],
     ["<b>for</b>","&nbsp;","&nbsp;"]],
    note="<b>by</b> Friday is a deadline. <b>until</b> Friday is a period. They are not the same "
    "promise."), 600)
S["pa02-f7"]=lambda: f_chart([("agreed with the person doing the work",12),
    ("agreed with a supplier",5),("taken from last year's plan",7),
    ("nobody agreed them",4),("unknown",3)], unit="bars")
S["pa02-f8"]=lambda: f_icons([("timetable","one bar, both ends marked"),
    ("spreadsheet","two overlapping bars"),("walkroute","two bars end to end"),
    ("star","a diamond"),("signpost","a today line"),
    ("worried","a bar with a question mark")],3)
S["pa02-f9"]=lambda: f_realia(tbl("Schedule extract",
    "Eight of thirty-one rows, with the last column added in pen",
    ["Task","Start","End","Days","Who agreed it"],
    [["Pour the base","4 Mar","15 Mar","12","J. Oyelaran"],
     ["Deliver the pumps","18 Mar","22 Mar","5","<b>?</b>"],
     ["Install the pumps","25 Mar","12 Apr","19","J. Oyelaran"],
     ["Pipework","1 Apr","26 Apr","26","<b>?</b>"],
     ["Electrical","15 Apr","3 May","19","K. Lind"],
     ["Commission","6 May","17 May","12","K. Lind"],
     ["Testing","3 Jun","14 Jun","12","<b>?</b>"],
     ["Handover","24 Jun","24 Jun","1","client"]],
    numcols=(3,),
    note="<b>Three dates nobody agreed.</b> Two of them are the two the client asks about every "
    "month."), 640)
S["pa02-f10"]=lambda: f_scene(940,430, people=[("tomas",290,172,{}),
     ("marek",400,176,{"seated":True}),("omar",530,172,{})],
    props=[("table",230,0,1.2),("flipchart",90,76,0.6),("computer",370,142,0.42),
     ("note",470,198,0.2),("notebook",560,196,0.26),("window",830,56,0.9)],
    board=(720,22,190,110,"THE DATE",[("asked","3 times"),("agreed","0")]),
    clockat=(690,44,22,11,30))
S["pa02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Extract, as printed", None, ["Task","Start","End"],
      [["Deliver the pumps","18 Mar","22 Mar"],["Pipework","1 Apr","26 Apr"],
       ["Testing","3 Jun","14 Jun"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Extract, with the pen marks", None,
      ["Task","Start","End","Agreed by"],
      [["Deliver the pumps","18 Mar","22 Mar","<b>? &mdash; supplier not asked</b>"],
       ["Pipework","1 Apr","26 Apr","<b>? &mdash; from last year's plan</b>"],
       ["Testing","3 Jun","14 Jun","<b>? &mdash; needs two inspectors</b>"]]), w)[0:3],
    w=940, h=260)
S["pa02-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Message, as sent", None,
        "<p><b>Testing is in June.</b></p>"), w)[0:3],
    lambda w,h: f_realia(doc("Message, rewritten", None,
        "<p>Testing is <b>in June</b>. <b>No day is agreed yet.</b> The rule is <b>two "
        "inspectors on site at the same time</b>. The condition is the harbour inspector, who is "
        "free <b>on the 4th</b> and <b>on the 11th</b>. I will confirm <b>on Friday</b>.</p>"
        ), w)[0:3],
    w=900, h=250)
S["pa02-f13"]=lambda: f_realia(form("Date-note planner",
    [("The month",""),("What is not agreed",""),("The rule",""),("The condition",""),
     ("When you will know",""),("What the note does not say","")]), 520)
S["pa02-f14"]=lambda: f_scene(1000,450,
    people=[("ida",60,176,{}),("tomas",135,172,{}),("nadia",210,176,{"seated":True}),
     ("marek",290,172,{"seated":True}),("omar",370,176,{"seated":True}),
     ("priya",445,172,{}),("lars",520,176,{"seated":True}),("karin",595,170,{}),
     ("ines",660,172,{}),("ravi",725,170,{}),("sofia",790,172,{}),
     ("junseo",850,170,{}),("mei",910,172,{}),("wei",960,174,{})],
    props=[("desk",95,0,1.1),("flipchart",150,70,0.62),("computer",340,142,0.4),
     ("printer",430,196,0.3),("table",640,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,200,112,"THE CHART",[("bars","31"),("question marks","11")]),
    clockat=(262,34,22,11,0))
S["pa02-f15"]=lambda: f_chart([("a planner",7),("the project manager",11),
    ("everybody",3),("nobody",4),("we have no chart",2)])
S["pa02-f16"]=lambda: f_realia(doc("On a desk in April",
    "What was on it at five o'clock",
    "<p><b>The printed chart.</b> Thirty-one bars; <b>eleven</b> with a question mark in pen.</p>"
    "<p><b>A diary.</b> Two inspectors pencilled in for <b>the 4th</b> and <b>the 11th of "
    "June</b>.</p>"
    "<p><b>A note of four lines.</b> June &middot; no day agreed &middot; two inspectors needed "
    "&middot; answer on Friday.</p>"
    "<p><b>A note of three sentences.</b> <i>The client did not want a date. He wanted to know "
    "which date he could plan around, which is a different question. Three dates have moved "
    "already, and each one cost us more trust than the delay cost him money.</i></p>",
    "Five o'clock. Eleven question marks, and the first honest answer in three months."), 580)

# ---------------- Unit 3 ----------------
S["pa03-f1"]=lambda: f_icons([("folder","a tree three levels deep"),
    ("board","the whole project in one box"),("spreadsheet","a second level of four"),
    ("clipboard","the lowest box: a work package"),("refnumber","a number like 1.2.3"),
    ("note","a short description"),("badge","one owner"),
    ("worried","a box still too big"),("book","a dictionary page"),
    ("timetable","the tree beside the bar chart")],4)
S["pa03-f2"]=lambda: f_scene(900,420, people=[("wei",300,172,{}),("oyelaran",395,176,{})],
    props=[("board",130,80,0.78),("table",450,0,1.1),("note",520,196,0.24),
     ("clipboard",560,198,0.26),("window",800,56,0.92)],
    board=(700,22,190,112,"THE TREE",[("level 1","the whole"),("level 2","4 branches"),("level 3","12 packages")]),
    clockat=(660,44,22,10,0))
S["pa03-f3"]=lambda: f_icons([("board","the whole project, one box"),
    ("folder","the second level: four boxes"),("spreadsheet","the lowest level: twelve"),
    ("refnumber","one box, one number and name"),("badge","one box, one owner"),
    ("scissors","one box cut into four")],3)
S["pa03-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The package","The owner","Can you say if it is half done","Should it be cut again"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that is too big: ______________________"), 620)
S["pa03-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 3",
    "Project office &middot; breaking the work down &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO 21511 is dated <b>2018</b>. It is <b>guidance</b> on work "
    "breakdown structures. It tells you what one is. It does not tell you how many levels to "
    "have. It does not tell you how big a package may be.</p>"
    + table_html(["Level","On this project"],
      [["<b>1</b>","the whole pump station"],
       ["<b>2</b>","four branches: civil, mechanical, electrical, handover"],
       ["<b>3</b>","twelve work packages, each with one owner"]])
    + "<p><b>How big is small enough?</b> The standard will not answer that. Our answer is "
    "simple. A package is small enough when <b>somebody can be wrong about it in under a "
    "month</b>.</p>"
    "<p><b>Why we chose that.</b> One package, <b>pumps</b>, ran for <b>four months</b>. It was "
    "reported as <b>fine</b> for <b>eleven weeks</b>. Nobody was lying. The package was so big "
    "that <i>fine</i> was the only honest word available.</p>"
    "<p><b>The other thing we found.</b> Two packages both included <b>the same pipework</b>. "
    "Two owners, two plans, one set of pipes. It was found in week nine by a man ordering "
    "fittings twice.</p>"
    "<p><b>So every card now has two lines.</b> What is <b>included</b>, and what is <b>not "
    "included</b>. The second line is the one that saves money.</p>",
    "Source: ISO 21511:2018, Work breakdown structures for project and programme management. It "
    "is guidance, not requirements: it fixes no number of levels, no package size and no "
    "numbering scheme, and it does not say what belongs in your project."), 600)
S["pa03-f6"]=lambda: f_realia(tbl("Part and whole", None,
    ["The structure","Which way it points","An example"],
    [["<b>consists of</b>","whole &rarr; parts","Level 1 <b>consists of</b> four branches."],
     ["<b>is divided into</b>","whole &rarr; parts","The branch <b>is divided into</b> three."],
     ["<b>contains</b>","whole &rarr; parts","Civil <b>contains</b> four packages."],
     ["<b>is part of</b>","part &rarr; whole","Pipework <b>is part of</b> mechanical."],
     ["<b>belongs to</b>","&nbsp;","&nbsp;"],
     ["<b>is made up of</b>","&nbsp;","&nbsp;"]],
    note="A package that belongs to two branches has two owners, and two owners is none."), 600)
S["pa03-f7"]=lambda: f_chart([("under two weeks",3),("two to four weeks",4),
    ("one to two months",3),("over two months",2),("nobody can say",2)],
    unit="packages")
S["pa03-f8"]=lambda: f_icons([("folder","three levels"),("refnumber","one box, one number"),
    ("badge","one box, one owner"),("scissors","one box cut into four"),
    ("note","a dictionary card"),("timetable","the tree and the bar chart")],3)
S["pa03-f9"]=lambda: f_realia(doc("Dictionary extract &middot; four cards",
    "One card per work package. The last line is the one that matters.",
    table_html(["No.","Name","Owner","Included","<b>Not included</b>"],
      [["1.2.1","<b>Lay</b> the inlet pipework","W. Zhao",
        "inlet pipes, supports, valves to the chamber wall",
        "<b>pipework inside the chamber</b>"],
       ["1.2.2","<b>Install</b> the pumps","J. Oyelaran",
        "pumps, mounts, couplings","<b>the pipework to them</b>"],
       ["1.3.1","<b>Wire</b> the control panel","K. Lind",
        "panel, cabling, terminations","<b>the panel enclosure</b>"],
       ["1.4.1","<b>Hand over</b> the station","N. Haddad",
        "tests, drawings, manuals","<b>the two-year inspections</b>"]]),
    "<b>Two packages used to include the same pipework.</b> It was found in week nine, by a man "
    "ordering the same fittings twice."), 680)
S["pa03-f10"]=lambda: f_scene(940,430, people=[("wei",300,172,{}),
     ("oyelaran",410,176,{"seated":True}),("marek",530,176,{"seated":True})],
    props=[("board",110,80,0.74),("table",250,0,1.2),("clipboard",390,196,0.26),
     ("note",470,198,0.2),("notebook",560,196,0.24),("window",830,56,0.9)],
    board=(720,22,190,110,"PUMPS",[("was","1 box"),("now","4 packages")]),
    clockat=(690,44,22,10,30))
S["pa03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The tree we had", None,
        "<p><b>1 &nbsp;Pump station</b><br>"
        "&nbsp;&nbsp;<b>1.1</b> Civil<br>"
        "&nbsp;&nbsp;&nbsp;&nbsp;1.1.1 <i>Civil</i><br>"
        "&nbsp;&nbsp;<b>1.2</b> Mechanical<br>"
        "&nbsp;&nbsp;&nbsp;&nbsp;1.2.1 <i>Pumps</i> &mdash; four months</p>"
        "<p style='color:#6b6861;font-size:13px'>Two branches contain one box of the same name. "
        "That is a list with indents, not a structure.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("The tree we have", None,
        "<p><b>1 &nbsp;Pump station</b> &mdash; four branches, twelve packages<br>"
        "&nbsp;&nbsp;<b>1.2</b> Mechanical<br>"
        "&nbsp;&nbsp;&nbsp;&nbsp;1.2.1 Lay the inlet pipework &mdash; W. Zhao<br>"
        "&nbsp;&nbsp;&nbsp;&nbsp;1.2.2 Install the pumps &mdash; J. Oyelaran<br>"
        "&nbsp;&nbsp;&nbsp;&nbsp;1.2.3 Couple and align &mdash; J. Oyelaran<br>"
        "&nbsp;&nbsp;&nbsp;&nbsp;1.2.4 Test the set &mdash; W. Zhao</p>"
        "<p style='color:#6b6861;font-size:13px'>One owner each, and one exclusion line "
        "each.</p>"), w)[0:3],
    w=940, h=300)
S["pa03-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Card, as written", None,
        "<p><b>Pumps</b><br>Owner: J. Oyelaran</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Card, rewritten", None,
        "<p><b>1.2.2 &nbsp;Install the pumps</b><br>"
        "Branch: mechanical &middot; Owner: <b>J. Oyelaran</b><br>"
        "<b>Included:</b> the four pumps, the mounts, the couplings.<br>"
        "<b>Not included:</b> <b>the pipework to them</b> (1.2.1, W. Zhao).</p>"), w)[0:3],
    w=900, h=250)
S["pa03-f13"]=lambda: f_realia(form("Package card planner",
    [("The number",""),("The name, beginning with a verb",""),("The branch it belongs to",""),
     ("The owner",""),("What is included",""),("What is not included","")]), 520)
S["pa03-f14"]=lambda: f_scene(1000,450,
    people=[("hanna",60,176,{}),("wei",135,172,{}),("oyelaran",210,176,{"seated":True}),
     ("marek",290,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("haddad",445,172,{}),("lars",520,176,{"seated":True}),("karin",595,170,{}),
     ("ines",660,172,{}),("ravi",725,170,{}),("sofia",790,172,{}),
     ("junseo",850,170,{}),("mei",910,172,{}),("nkemelu",960,174,{})],
    props=[("desk",95,0,1.1),("board",155,86,0.68),("computer",335,142,0.4),
     ("printer",430,196,0.3),("clipboard",545,198,0.24),("table",645,0,1.0),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,200,110,"CUT IT UP",[("one box","4 months"),("four packages","3 weeks")]),
    clockat=(258,34,22,11,0))
S["pa03-f15"]=lambda: f_chart([("a written tree",6),("a list of tasks",10),
    ("a bar chart only",7),("in somebody's head",4),("nothing written down",2)])
S["pa03-f16"]=lambda: f_realia(doc("On a desk in March",
    "What was on it at five o'clock",
    "<p><b>The tree.</b> One box crossed out, <b>four</b> new boxes drawn beside it.</p>"
    "<p><b>Two dictionary cards.</b> The same pipework underlined on <b>both</b>.</p>"
    "<p><b>A weekly report.</b> The word <b>fine</b>, eleven times down one column.</p>"
    "<p><b>A note of three sentences.</b> <i>Nobody on this project lied to me once. A package "
    "four months long gives an honest person only one word to use, and that word is fine. If I "
    "want a different answer I have to cut the work, not question the people.</i></p>",
    "Five o'clock. Twelve packages, twelve owners, and twelve lines saying what is not "
    "included."), 580)
