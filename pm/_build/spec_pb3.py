# -*- coding: utf-8 -*-
"""Throughline Book 2 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 ----------------
S["pb07-f1"]=lambda: f_icons([("desk","one person working alone"),
    ("meeting","six people, fifteen links"),("megaphone","ten people, forty-five links"),
    ("induction","a new joiner being trained"),("spreadsheet","work split four ways"),
    ("chain","work that cannot be split"),("railings","three crews on a fence"),
    ("clipboard","one drawing, four people"),("deadline","a late schedule"),
    ("book","a book from 1975")],4)
S["pb07-f2"]=lambda: f_scene(940,430, people=[("bah",300,172,{}),
     ("nkemelu",400,176,{"seated":True}),("nadia",520,172,{})],
    props=[("desk",240,0,1.2),("computer",130,138,0.5),("clipboard",370,196,0.24),
     ("window",830,56,0.9)],
    board=(690,22,200,118,"PAIRS",[("6 people","15"),("10 people","45"),("15 people","105")]),
    clockat=(610,44,22,3,20))
S["pb07-f3"]=lambda: f_icons([("railings","three crews on a fence"),
    ("clipboard","one drawing, four arguers"),("induction","two days of a colleague's time"),
    ("meeting","fifteen links"),("megaphone","forty-five links"),
    ("desk","one task, one person")],3)
S["pb07-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The job","People before and after","Did it get faster","Would the work split"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The job where adding people made it worse: ______________________"), 680)
S["pb07-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 7",
    "Project office &middot; adding people &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> <b>Frederick P. Brooks Jr.</b> published <i>The Mythical "
    "Man-Month</i> with Addison-Wesley in <b>1975</b>. He had managed the development of a large "
    "operating system, and the book is a set of <b>essays from that experience</b>. An anniversary "
    "edition in <b>1995</b> added further chapters. <b>The book is about software, and it says so on "
    "every page.</b></p>"
    "<p style='text-align:center;font-size:17px'><b>Adding manpower to a late software project "
    "makes it later.</b></p>"
    + table_html(["Why","&nbsp;"],
      [["<b>1 the work must be divided</b>","and some of it cannot be"],
       ["<b>2 the new people must be trained</b>","by the people who are already behind"],
       ["<b>3 everybody must talk to everybody</b>","and that grows far faster than the head "
        "count"]])
    + table_html(["People","Links between them"],
      [["3","<b>3</b>"],["6","<b>15</b>"],["10","<b>45</b>"],["15","<b>105</b>"]])
    + "<p><b>What happened on the drawings.</b> The package was <b>three weeks late</b> with "
    "<b>six</b> people on it. <b>Four</b> were added. The six already there spent most of the first "
    "week explaining which revision was current and why the chamber had been redesigned in March. "
    "The package slipped a further <b>two weeks</b>. <b>Nobody added was weak</b>; two were the best "
    "detailers in the company.</p>"
    "<p><b>And the fence.</b> The same month, the yard fencing was given <b>three crews</b> instead "
    "of one and finished in <b>a third</b> of the time, almost exactly as expected. <b>Nobody "
    "building a fence needs to know what another crew decided.</b></p>"
    "<p><b>This is the distinction the book is actually about.</b> Not <i>people never help</i>, "
    "but: <b>work that partitions without communication behaves completely differently from work "
    "that does not.</b></p>"
    "<p><b>The unit itself is the problem.</b> A <b>man-month</b> treats people and months as "
    "interchangeable. For a fence that is nearly true. For a drawing package it is not true at all, "
    "and the author's point is that <b>the unit hides the difference</b>.</p>"
    "<p><b>What the book does not do.</b> It is <b>essays from experience</b>, not a measured "
    "study, and it concerns <b>software development</b> of the 1960s and 1970s. It gives <b>no "
    "formula</b> for team size and <b>no measurement</b> of training cost.</p>",
    "Source: F. P. Brooks Jr., The Mythical Man-Month: Essays on Software Engineering, "
    "Addison-Wesley, 1975; anniversary edition 1995. It is a set of essays drawn from the author's "
    "experience of large software development, not a controlled study; its claims are stated for "
    "software projects; it offers no formula for team size or training cost; and its own argument "
    "applies only to work that cannot be partitioned without communication."), 620)
S["pb07-f6"]=lambda: f_realia(tbl("The more, the more", None,
    ["Structure","What it says","Example"],
    [["<b>the more &hellip; the more</b>","two things rise together",
      "<b>The more</b> people, <b>the more</b> links."],
     ["<b>the more &hellip; the less</b>","one rises, one falls",
      "<b>The more</b> people, <b>the less</b> each produces."],
     ["<b>twice as many &hellip; as</b>","a multiple","<b>Twice as many</b> links <b>as</b> before."],
     ["<b>the fewer &hellip; the faster</b>","both fall",
      "<b>The fewer</b> handovers, <b>the faster</b> it goes."],
     ["<b>as many &hellip; as</b>","&nbsp;","&nbsp;"],
     ["<b>three times as long as</b>","&nbsp;","&nbsp;"]],
    note="Both halves take <b>the</b> + comparative, and neither half takes <i>will</i>."), 640)
S["pb07-f7"]=lambda: f_line([("3",3),("6",15),("10",45),("15",105)],
    unit="communication links by team size")
S["pb07-f8"]=lambda: f_icons([("desk","one person alone"),("meeting","six, joined"),
    ("megaphone","ten, joined"),("induction","a new joiner being taught"),
    ("railings","three crews on a fence"),("clipboard","one task, one owner")],3)
S["pb07-f9"]=lambda: f_realia(tbl("Staffing note",
    "Six tasks. The last column decides everything.",
    ["Task","People now","Proposed","Links before","Links after","Does it partition?"],
    [["Chamber drawing package","6","10","<b>15</b>","<b>45</b>","<b>no</b>"],
     ["Yard fencing","1 crew","3 crews","0","0","<b>yes</b>"],
     ["Panel schedules","1","1","0","0","yes"],
     ["Valve survey","2","4","1","6","yes"],
     ["Commissioning procedure","3","6","3","15","<b>no</b>"],
     ["As-built drawings","2","3","1","3","yes"]],
    numcols=(3,4),
    note="<b>Two of these six should be cut up, not staffed up.</b> Both are the ones where two "
    "pieces would have to agree with each other."), 720)
S["pb07-f10"]=lambda: f_scene(960,440, people=[("bah",290,172,{}),
     ("nadia",400,176,{"seated":True}),("nkemelu",520,176,{"seated":True})],
    props=[("computer",120,138,0.5),("desk",240,0,1.2),("clipboard",370,196,0.24),
     ("railings",640,196,0.3),("window",850,56,0.88)],
    board=(690,22,200,112,"15 &rarr; 45",[("added","4"),("slip","2 wk")]),
    clockat=(200,44,22,3,30))
S["pb07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Proposal 1", None,
        "<p><b>Add four detailers on Monday.</b></p>"
        "<p style='font-size:13px'>Six people become ten. Pairs who may need to agree: <b>15 "
        "&rarr; 45</b>. About <b>eight days</b> of existing detailers' time spent "
        "explaining.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Proposal 2", None,
        "<p><b>Six people, two weeks, finishing 3 July.</b></p>"
        "<p style='font-size:13px'>And take the <b>panel schedules</b> away as a whole task with "
        "<b>one owner</b>. Handover: <b>half a day</b>.</p>"
        "<p style='color:#6b6861;font-size:13px'>Subtracting a task, not adding a person.</p>"
        ), w)[0:3],
    w=940, h=280)
S["pb07-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note, as sent", None,
        "<p><b>We are accepting four extra detailers and will recover the package.</b></p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("Note, rewritten", None,
        "<p style='line-height:1.85'>Six people become ten: <b>15 pairs become 45</b>.<br>"
        "Each new person costs about <b>two days</b> of a detailer who is already behind.<br>"
        "<b>Fastest honest version: six people, two weeks, 3 July.</b><br>"
        "<b>What I would accept:</b> one owner for the panel schedules, taken off this "
        "package.</p>"), w)[0:3],
    w=940, h=270)
S["pb07-f13"]=lambda: f_realia(form("Staffing planner",
    [("People now",""),("People proposed",""),("Pairs before and after",""),
     ("The training cost per person",""),("The fastest honest version",""),
     ("The one change you would accept","")]), 520)
S["pb07-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("bah",135,172,{}),("nadia",210,176,{"seated":True}),
     ("nkemelu",290,172,{"seated":True}),("wei",370,176,{"seated":True}),
     ("ahmad",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("oskar",910,172,{}),("linh",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("clipboard",548,198,0.22),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,118,"WOULD THEY AGREE?",[("fence","no"),("drawing","yes"),
      ("so","cut it up")]),
    clockat=(278,34,22,4,0))
S["pb07-f15"]=lambda: f_chart([("it helped a lot",3),("it helped a little",6),
    ("it made no difference",7),("it made things worse",9),("nobody was ever added",4)])
S["pb07-f16"]=lambda: f_realia(doc("On a desk in June",
    "What was on it at five o'clock",
    "<p><b>Two diagrams.</b> <b>Fifteen</b> links; <b>forty-five</b> links.</p>"
    "<p><b>A revision log</b>, open at the March chamber change.</p>"
    "<p><b>A photograph of a finished fence</b>, built by three crews in a third of the time.</p>"
    "<p><b>A page from a 1975 book.</b></p>"
    "<p><b>A note of three sentences.</b> <i>I did not refuse those four people because I am proud; "
    "I refused them because fifteen pairs becoming forty-five is arithmetic and eight days of my "
    "detailers' time is a price I cannot pay this month. The 1975 book is about software and it "
    "says so, and the half nobody quotes is the half that got me three crews on the fence. The test "
    "is ten seconds long: would two pieces of this work ever need to agree with each other?</i></p>",
    "Five o'clock. One refusal, one offer, and a ten-second test."), 600)

# ---------------- Unit 8 ----------------
S["pb08-f1"]=lambda: f_icons([("timetable","a task with a tail of safety"),
    ("scissors","the safety cut off"),("archive","the safety collected at the end"),
    ("chain","a feeding buffer at a merge"),("deadline","work done in the last days"),
    ("spreadsheet","three things at once"),("happy","an early finish, unreported"),
    ("danger","a late finish, passed on"),("scales","a buffer part used"),
    ("book","a book from 1997")],4)
S["pb08-f2"]=lambda: f_scene(940,430, people=[("oskar",300,172,{}),("ahmad",400,172,{})],
    props=[("computer",130,138,0.54),("desk",250,0,1.2),("note",460,196,0.22),
     ("window",830,56,0.9)],
    board=(690,22,200,118,"BUFFER",[("tasks","22 wk"),("buffer","9 wk"),("used","78%")]),
    clockat=(610,44,22,11,20))
S["pb08-f3"]=lambda: f_icons([("timer","safety used quietly"),
    ("happy","an early finish not passed on"),("danger","lateness traveling"),
    ("deadline","a late start"),("scales","a buffer three quarters used"),
    ("padlock","a task that cannot be cut")],3)
S["pb08-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The task","My normal estimate","My fifty-fifty estimate","The difference"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="What we would do with all the differences added together: ______________________"), 680)
S["pb08-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 8",
    "Project office &middot; safety and buffers &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> <b>Eliyahu M. Goldratt</b> published <i>Critical Chain</i> with "
    "North River Press in <b>1997</b>. <b>It is a novel</b> &mdash; the argument is carried by "
    "characters in a business school &mdash; and it applies his theory of constraints to "
    "projects.</p>"
    "<p><b>The argument.</b> Every task estimate contains <b>safety</b>, because each person is "
    "judged on their own date. That safety is then wasted, for three reasons:</p>"
    + table_html(["","&nbsp;"],
      [["<b>student syndrome</b>","with slack in the task, work starts late"],
       ["<b>multitasking</b>","three tasks at once means none finishes early"],
       ["<b>asymmetry</b>","an early finish is not passed on; lateness always travels"]])
    + "<p><b>The remedy.</b> <b>Cut each estimate</b> to roughly a <b>fifty-fifty</b> figure. "
    "<b>Aggregate</b> the removed safety into one <b>project buffer</b> at the end, with "
    "<b>feeding buffers</b> where other chains join. Then <b>manage buffer consumption</b> instead "
    "of task dates.</p>"
    + table_html(["Our trial, one package","Weeks"],
      [["the eleven estimates as given","<b>38</b>"],["the same eleven, cut","<b>22</b>"],
       ["project buffer","<b>9</b>"],["<b>planned total</b>","<b>31</b>"],
       ["<b>what it actually took</b>","<b>29</b>"]])
    + "<p><b>Seven of the eleven tasks overran their cut estimate</b>, which the method expects: a "
    "fifty-fifty estimate is meant to be missed about half the time. <b>Buffer consumption at the "
    "end: 78 percent.</b></p>"
    "<p><b>Student syndrome, measured.</b> Of <b>19</b> tasks with two weeks or more of slack, "
    "<b>14</b> had no hours booked in the first week.</p>"
    "<p><b>What went wrong, which matters more than the result.</b> Telling a welder his eight "
    "weeks is now four, and that this is <i>aggressive but achievable</i>, sounds exactly like "
    "being squeezed. <b>Two of our welders refused to give a fifty-fifty number at all</b>, and "
    "their question had no answer: <b>what happens to me when I miss it?</b> One task could not be "
    "cut: the <b>witness test</b>, which has a contractual date.</p>"
    "<p><b>What the book does not do.</b> It is a <b>novel</b>; its evidence is story and case "
    "report. The <b>fifty-per-cent cut</b> is a rule of thumb with no study behind it. Buffer "
    "management needs <b>honest remaining durations</b>. And it says nothing about <b>contracts</b>, "
    "where a task date is a promise somebody can be sued over.</p>",
    "Source: E. M. Goldratt, Critical Chain, North River Press, 1997. It is a business novel "
    "applying the theory of constraints to project management; its support is anecdotal and "
    "case-based rather than experimental; the fifty-per-cent reduction is a rule of thumb rather "
    "than a measured figure; buffer management depends on honest reporting of remaining durations; "
    "and it does not address tasks whose dates are contractual commitments."), 620)
S["pb08-f6"]=lambda: f_realia(tbl("The first conditional", None,
    ["Structure","What it says","Example"],
    [["<b>if</b> + present, <b>will</b>","a real future condition",
      "<b>If</b> we cut the estimates, we <b>will</b> need a buffer."],
     ["<b>unless</b>","if not","It will not work <b>unless</b> the buffer is protected."],
     ["<b>as long as</b>","a condition that must hold",
      "Fine, <b>as long as</b> nobody is blamed for a miss."],
     ["<b>provided that</b>","a formal condition",
      "<b>Provided that</b> the test date is excluded."],
     ["<b>in case</b>","a precaution","Keep two weeks <b>in case</b> the seals fail."],
     ["<b>even if</b>","&nbsp;","&nbsp;"]],
    note="<i>In case</i> is not <i>if</i>, and never takes <i>will</i> either."), 640)
S["pb08-f7"]=lambda: f_chart([("the eleven estimates as given",38),("the same eleven, cut",22),
    ("project buffer",9),("planned total",31),("actual",29)], unit="weeks")
S["pb08-f8"]=lambda: f_icons([("timetable","a task with its safety tail"),
    ("scissors","the safety cut off"),("archive","one block at the end"),
    ("chain","a feeding buffer at a merge"),("scales","a gauge at 78 percent"),
    ("padlock","a contractual date")],3)
S["pb08-f9"]=lambda: f_realia(tbl("Buffer report",
    "Eleven tasks. No task on this page is reported as late.",
    ["Task","Cut estimate","Days used","Days remaining","Finished","Chain"],
    [["Mark out and set up","5 d","5","0","yes","main"],
     ["Weld the inlet run","15 d","19","0","yes","main"],
     ["Weld the outlet run","15 d","14","0","yes","main"],
     ["Support steelwork","10 d","12","0","yes","feeding"],
     ["Pressure test 1","4 d","4","0","yes","main"],
     ["Repair and retest","0 d","8","0","yes","main"],
     ["Pipework to pumps","12 d","15","0","yes","main"],
     ["Panel wiring","9 d","9","0","yes","feeding"],
     ["Loop checks","6 d","6","0","yes","main"],
     ["Witness test","10 d","10","0","yes","<b>contractual</b>"],
     ["Handover pack","5 d","2","<b>3</b>","no","main"]],
    numcols=(2,3),
    note="<b>Buffer consumption: 78 percent of nine weeks.</b> Seven of the eleven overran their "
    "cut estimate, which is what a fifty-fifty figure is designed to do."), 720)
S["pb08-f10"]=lambda: f_scene(960,440, people=[("oskar",290,172,{}),
     ("ahmad",400,176,{"seated":True}),("nkemelu",520,176,{"seated":True})],
    props=[("computer",120,138,0.5),("desk",240,0,1.2),("note",370,196,0.22),
     ("signature",460,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,118,"38 &rarr; 29",[("cut","22"),("buffer","9"),("used","78%")]),
    clockat=(200,44,22,11,30))
S["pb08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Plan 1 &middot; safe estimates", None, ["Task","Weeks"],
      [["weld the inlet run","6"],["weld the outlet run","6"],["support steelwork","4"],
       ["pipework to pumps","5"],["&hellip; and seven more","17"],
       ["<b>total</b>","<b>38</b>"]],
      note="No buffer. Every week of safety will be spent, because nobody hands an early finish "
      "back."), w)[0:3],
    lambda w,h: f_realia(tbl("Plan 2 &middot; cut, with a buffer", None, ["","Weeks"],
      [["eleven tasks at fifty-fifty","<b>22</b>"],["project buffer","<b>9</b>"],
       ["<b>planned total</b>","<b>31</b>"]],
      note="<b>A missed fifty-fifty estimate is reported as buffer used, with no name "
      "attached.</b> Signed before any estimate was collected."), w)[0:3],
    w=960, h=280)
S["pb08-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Plan extract, as issued", None,
        "<p>Eleven tasks, <b>38 weeks</b>. Each task carries its own contingency.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Plan extract, rewritten", None,
        "<p><b>Rule, signed 2 June, before estimates were collected:</b> a missed fifty-fifty "
        "estimate is reported as <b>buffer used, with no name attached</b>.</p>"
        "<p>Eleven tasks cut to <b>22 weeks</b>, plus a <b>9-week</b> buffer. <b>Planned total "
        "31.</b> The <b>witness test</b> is contractual and was <b>not cut</b>.</p>"), w)[0:3],
    w=940, h=270)
S["pb08-f13"]=lambda: f_realia(form("Buffer planner",
    [("The estimates as given",""),("The fifty-fifty figures",""),("The buffer",""),
     ("The planned total",""),("The rule about missed estimates",""),
     ("What must not be cut","")]), 520)
S["pb08-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("oskar",135,172,{}),("ahmad",210,176,{"seated":True}),
     ("nkemelu",290,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("wei",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("bah",910,172,{}),("linh",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("signature",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"BUFFER, NOT BLAME",[("used","78%"),("late tasks","0")]),
    clockat=(278,34,22,12,0))
S["pb08-f15"]=lambda: f_chart([("yes, immediately",4),("yes, eventually",6),
    ("no",8),("there would be no point",9),("I never finish early",2)])
S["pb08-f16"]=lambda: f_realia(doc("On a desk in June",
    "What was on it at five o'clock",
    "<p><b>A sheet of five figures.</b> <b>38</b> &middot; <b>22</b> &middot; <b>9</b> &middot; "
    "<b>31</b> &middot; <b>29</b>.</p>"
    "<p><b>A signed single sentence</b>, dated before them.</p>"
    "<p><b>A gauge</b> drawn at <b>78 percent</b>.</p>"
    "<p><b>A tally.</b> Nineteen slack tasks; <b>fourteen</b> with no hours in week one.</p>"
    "<p><b>A note of three sentences.</b> <i>The arithmetic took an afternoon and it is not the "
    "reason this worked. It worked because two welders asked what happens to them when they miss, "
    "and because we wrote the answer down before we asked for a single number rather than after the "
    "first miss. The book is a novel and the fifty-per-cent figure is somebody's rule of thumb, so "
    "what we have is one package, measured, written down, including the part where we were told "
    "no.</i></p>",
    "Five o'clock. Nine weeks saved, seven tasks missed, and nobody reported late."), 600)

# ---------------- Unit 9 ----------------
S["pb09-f1"]=lambda: f_icons([("folder","a thick project plan"),
    ("note","a contents page of fourteen sections"),("clipboard","a section with detail in it"),
    ("quotemark","a section of one sentence"),("star","a required item, present"),
    ("danger","a required item, missing"),("magnifier","an auditor checking"),
    ("walkroute","a life cycle of processes"),("refnumber","two editions, two numbers"),
    ("book","a standard from 2019")],4)
S["pb09-f2"]=lambda: f_scene(920,420, people=[("wei",330,176,{"seated":True}),
     ("nkemelu",425,176,{"seated":True})],
    props=[("desk",250,0,1.22),("folder",385,196,0.3),("note",465,198,0.2),
     ("window",810,56,0.92)],
    board=(680,22,200,112,"THE AUDIT",[("sections","14 / 14"),("blank","4")]),
    clockat=(600,44,22,9,20))
S["pb09-f3"]=lambda: f_icons([("star","a sentence with shall in it"),
    ("note","a sentence with should in it"),("flashcard","a sentence with may in it"),
    ("clipboard","a filled section"),("quotemark","an empty section"),
    ("magnifier","a complete contents list")],3)
S["pb09-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The section","How long it is","What is in it","What would make it useful"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The section that has been one sentence for two years: ______________________"), 680)
S["pb09-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 9",
    "Project office &middot; what the plan must contain &middot; page 1 of 1",
    "<p><b>The standard.</b> <b>ISO/IEC/IEEE 16326</b>, <i>Systems and software engineering &mdash; "
    "Life cycle processes &mdash; Project management</i>, dated <b>2019</b>. It is the second "
    "edition and <b>replaced the 2009 one</b>. It specifies the <b>content of a project management "
    "plan</b>.</p>"
    + table_html(["What it asks a plan to cover","&nbsp;"],
      [["<b>1</b>","the project's <b>scope</b> and what is <b>excluded</b>"],
       ["<b>2</b>","the <b>schedule</b>, with its assumptions"],
       ["<b>3</b>","<b>cost</b> and how it is controlled"],
       ["<b>4</b>","<b>organization</b>: who holds which role"],
       ["<b>5</b>","<b>external dependencies</b>"],
       ["<b>6</b>","<b>risk management</b>"],
       ["<b>7</b>","<b>configuration management</b> and change control"],
       ["<b>8</b>","<b>measurement</b>: what will be counted"],
       ["<b>9</b>","<b>quality assurance</b>"],
       ["<b>10</b>","<b>decision management</b>: who decides what, and how"]])
    + "<p><b>Standards language.</b> <b>Shall</b> marks a requirement. <b>Should</b> marks a "
    "recommendation. <b>May</b> marks permission. The three words carry the whole weight of the "
    "document.</p>"
    + table_html(["Our plan, audited in March","&nbsp;"],
      [["pages","<b>61</b>"],["required sections present","<b>14 of 14</b>"],
       ["sections that are <b>one sentence</b> long","<b>3</b>"],
       ["sections blank for <b>two years</b>","<b>4</b>"]])
    + "<p><b>The plan conformed.</b> Every heading was there. One of the four blanks was "
    "<b>external dependencies</b>, and what should have been in it was: the valve order cannot be "
    "placed until drawing 1.2-04 is approved; the lead time is four weeks; the pressure test "
    "therefore cannot begin before week seventeen. <b>That is the five weeks we found in the "
    "spring. We had the heading and not the content, and a heading is not a warning.</b></p>"
    "<p><b>What the standard cannot do.</b> It specifies <b>what a plan must say</b>, not whether "
    "what it says is <b>true</b>. It sets <b>no length, no format and no level of detail</b>. It is "
    "written for <b>systems and software</b> projects and must be <b>tailored</b>. And "
    "<b>conformance is a statement about a document</b>.</p>"
    "<p><b>Which is still worth having.</b> A required heading is a <b>question somebody has to "
    "answer out loud</b>. Four of ours went unanswered for two years &mdash; but <b>without the "
    "standard the question would not have been on the page at all</b>.</p>",
    "Source: ISO/IEC/IEEE 16326:2019, Systems and software engineering &mdash; Life cycle "
    "processes &mdash; Project management, second edition, replacing the 2009 edition. It specifies "
    "the content of a project management plan and gives guidance on the project processes of the "
    "life cycle standards it accompanies. It prescribes no length, format, tool or level of detail; "
    "it is written for systems and software projects and requires tailoring for others; and "
    "conformance concerns the content of the document, not the accuracy or realism of the plan it "
    "describes."), 620)
S["pb09-f6"]=lambda: f_realia(tbl("Modals for documents", None,
    ["Modal","What it means","Example"],
    [["<b>shall</b>","a requirement","The plan <b>shall</b> identify external dependencies."],
     ["<b>should</b>","a recommendation","The plan <b>should</b> state its assumptions."],
     ["<b>may</b>","permission","The plan <b>may</b> be issued in parts."],
     ["<b>shall not</b>","a prohibition","It <b>shall not</b> omit the decision roles."],
     ["<b>is to be</b>","&nbsp;","&nbsp;"],
     ["<b>need not</b>","&nbsp;","&nbsp;"]],
    note="<b>Need not</b> and <b>shall not</b> are opposites, not variants."), 640)
S["pb09-f7"]=lambda: f_chart([("over five pages",2),("two to five pages",5),
    ("one page",3),("a paragraph",1),("one sentence or blank",3)], unit="sections")
S["pb09-f8"]=lambda: f_icons([("note","a contents page of fourteen"),
    ("clipboard","a filled section"),("quotemark","a blank section"),
    ("star","shall"),("flashcard","may"),("badge","an owner beside a heading")],3)
S["pb09-f9"]=lambda: f_realia(tbl("Plan audit",
    "Fourteen sections. Four have no owner and no content.",
    ["No.","Title","Present","Length","Owner","Last changed"],
    [["1","Scope and exclusions","yes","6 pp","N. Rahimi","Feb"],
     ["2","Schedule and assumptions","yes","9 pp","O. Lindqvist","Mar"],
     ["3","Cost control","yes","7 pp","L. Tran","Feb"],
     ["4","Organization and roles","yes","4 pp","N. Rahimi","Jan"],
     ["5","External dependencies","yes","<b>&mdash;</b>","<b>&mdash;</b>","<b>2023</b>"],
     ["6","Risk management","yes","5 pp","I. Berg","Mar"],
     ["7","Change control","yes","3 pp","H. Virtanen","Feb"],
     ["8","Measurement","yes","<b>1 sentence</b>","<b>&mdash;</b>","2024"],
     ["9","Quality assurance","yes","6 pp","W. Zhao","Mar"],
     ["10","Decision management","yes","<b>1 sentence</b>","<b>&mdash;</b>","2023"],
     ["11","Procurement","yes","5 pp","O. Nasser","Feb"],
     ["12","Configuration management","yes","<b>&mdash;</b>","<b>&mdash;</b>","<b>2023</b>"],
     ["13","Communications","yes","2 pp","H. Virtanen","Jan"],
     ["14","Closure","yes","1 p","N. Rahimi","Jan"]],
    note="<b>Conformance: fourteen of fourteen. Content: four of fourteen missing.</b> One of the "
    "four held the five weeks."), 740)
S["pb09-f10"]=lambda: f_scene(960,440, people=[("wei",290,172,{}),
     ("nkemelu",400,176,{"seated":True}),("okonjo",700,172,{})],
    props=[("desk",240,0,1.2),("folder",360,196,0.3),("note",450,198,0.2),
     ("envelope",560,198,0.2),("door",760,74,0.88),("window",110,56,0.78)],
    board=(560,22,190,112,"SECTION 5",[("heading","yes"),("content","no")]),
    clockat=(215,44,22,10,0))
S["pb09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Audit report 1", None,
        "<p style='font-size:18px'><b>Conformance achieved.</b></p>"
        "<p>Fourteen of fourteen required sections present. Signed, January.</p>"
        "<p style='color:#6b6861;font-size:13px'>Entirely true. Tells nobody anything.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(tbl("Audit report 2", None, ["Section","State","Owner","By"],
      [["5 External dependencies","<b>blank since 2023</b>","W. Zhao","14 Jul"],
       ["8 Measurement","<b>one sentence</b>","H. Virtanen","21 Jul"],
       ["10 Decision management","<b>one sentence</b>","N. Rahimi","14 Jul"],
       ["12 Configuration management","<b>blank since 2023</b>","H. Virtanen","28 Jul"]],
      note="Conformance achieved. <b>It is not finished.</b>"), w)[0:3],
    w=960, h=280)
S["pb09-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report, as written", None,
        "<p><b>The plan conforms.</b></p>"), w)[0:3],
    lambda w,h: f_realia(doc("Report, rewritten", None,
        "<p><b>The plan conforms</b> to ISO/IEC/IEEE 16326:2019, tailored and recorded as "
        "tailored.</p>"
        "<p style='font-size:17px'><b>It is not finished.</b></p>"
        "<p>Four sections blank or one sentence long, each now with an owner and a date. Section 5 "
        "should have held the valve lead time: <b>that was the five weeks</b>.</p>"), w)[0:3],
    w=940, h=270)
S["pb09-f13"]=lambda: f_realia(form("Audit planner",
    [("The standard and its edition",""),("Sections present",""),
     ("Sections blank or thin",""),("What the worst blank would have said",""),
     ("Owners and dates",""),("What conformance does not prove","")]), 520)
S["pb09-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("wei",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("hanna",370,176,{"seated":True}),
     ("nadia",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("oskar",910,172,{}),("linh",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("folder",548,198,0.26),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,118,"NOT A WARNING",[("sections","14"),("blank","4"),("cost","5 wk")]),
    clockat=(278,34,22,10,0))
S["pb09-f15"]=lambda: f_chart([("yes, several people",3),("yes, one person",6),
    ("only the writer",9),("nobody",7),("there is no plan document",4)])
S["pb09-f16"]=lambda: f_realia(doc("On a desk in July",
    "What was on it at five o'clock",
    "<p><b>The plan.</b> Sixty-one pages, open at its contents page.</p>"
    "<p><b>The audit.</b> Fourteen rows; <b>four</b> with a dash in the length column.</p>"
    "<p><b>A printed email</b> about valve lead times, dated April.</p>"
    "<p><b>A page from a 2019 standard.</b></p>"
    "<p><b>A note of three sentences.</b> <i>I signed a conformance statement that was entirely "
    "true and told nobody anything, and I would sign it again, because the requirement a standard "
    "can test is whether a subject is addressed and not whether the answer is any good. What the "
    "standard did was put fourteen questions on our page, of which we would have thought of four by "
    "ourselves. The failure was ours and it was findable in an afternoon, which is the most useful "
    "thing I can say about having the headings at all.</i></p>",
    "Five o'clock. Fourteen headings, four owners newly written in."), 600)
