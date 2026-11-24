# -*- coding: utf-8 -*-
"""Throughline Book 2 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 ----------------
S["pb04-f1"]=lambda: f_icons([("calendar","a date predicted in February"),
    ("deadline","finishing in May"),("note","a prediction written and kept"),
    ("happy","the best case"),("worried","the worst case"),
    ("danger","an actual beyond the worst case"),("archive","a file of past jobs"),
    ("magnifier","the view from inside one plan"),("worldmap","the view from outside"),
    ("book","a journal from 1994")],4)
S["pb04-f2"]=lambda: f_scene(920,420, people=[("karin",330,176,{"seated":True}),
     ("nkemelu",425,176,{"seated":True})],
    props=[("desk",250,0,1.22),("note",385,196,0.24),("book",460,198,0.24),
     ("window",810,56,0.92)],
    board=(680,22,200,112,"THE FILE",[("dates stated","30"),("met","9")]),
    clockat=(600,44,22,11,10))
S["pb04-f3"]=lambda: f_icons([("magnifier","one plan, studied in detail"),
    ("archive","a shelf of finished files"),("envelope","a prediction sealed"),
    ("star","a met prediction"),("danger","a missed prediction"),
    ("scales","one person, two answers")],3)
S["pb04-f4"]=lambda: f_realia(tbl("Team research", None,
    ["What I said, and when","What I said the worst case was","What actually happened",
     "What I would say now"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The prediction nobody wrote down: ______________________"), 680)
S["pb04-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 4",
    "Project office &middot; why the first number is always short &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> <b>Roger Buehler</b>, <b>Dale Griffin</b> and <b>Michael "
    "Ross</b> published <i>Exploring the &ldquo;planning fallacy&rdquo;</i> in the <b>Journal of "
    "Personality and Social Psychology</b> in <b>1994</b>. The name is older: <b>Kahneman and "
    "Tversky</b> used it in <b>1979</b>.</p>"
    "<p><b>What they did.</b> They asked students to predict when they would finish a real piece "
    "of work &mdash; their thesis &mdash; and also for a best case and a worst case. Then they "
    "recorded what happened.</p>"
    + table_html(["","Days, on average"],
      [["if everything went <b>as well as possible</b>","<b>about 27</b>"],
       ["their <b>realistic</b> prediction","<b>about 34</b>"],
       ["if everything went <b>as badly as possible</b>","<b>about 49</b>"],
       ["<b>what it actually took</b>","<b>about 55</b>"]])
    + "<p><b>Read the last two rows again.</b> The average actual was longer than the average "
    "<b>worst case</b>. About <b>three in ten</b> finished by the date they themselves had "
    "predicted.</p>"
    "<p><b>What the paper suggests is happening.</b> People predict by building a story about "
    "<b>this</b> task &mdash; the steps, the plan, the week ahead &mdash; rather than by asking "
    "what happened the last four times. The first is the <b>inside view</b>; the second is the "
    "<b>outside view</b>, and it is almost never used because it feels like ignoring everything you "
    "know about your own job.</p>"
    "<p><b>Our own thirty.</b> The estimator's file holds <b>30</b> dates stated <b>in writing</b> "
    "for packages that later finished. <b>Nine</b> were met. The average overrun on the other "
    "twenty-one was <b>38 per cent</b>. Of the <b>17</b> with a stated worst case, <b>11</b> took "
    "longer than that worst case.</p>"
    "<p><b>The one thing that changed anybody's answer.</b> Two questions, one afternoon, the same "
    "eight people. <i>How long will the control panel take?</i> &mdash; average <b>five weeks</b>. "
    "<i>How long did the last four control panels take?</i> &mdash; average <b>eight weeks</b>. "
    "<b>Nobody changed their mind. They answered a different question.</b></p>"
    "<p><b>What the paper does not do.</b> The participants were <b>students</b>, mostly on "
    "<b>academic work</b>, predicting <b>their own single task</b>. It measures the error and "
    "<b>does not tell you what number to use instead</b>.</p>",
    "Source: R. Buehler, D. Griffin and M. Ross, Exploring the \"planning fallacy\": Why people "
    "underestimate their task completion times, Journal of Personality and Social Psychology, "
    "1994; the term was introduced by D. Kahneman and A. Tversky in 1979. The study measured "
    "individuals predicting their own academic tasks, not project teams; its explanation in terms "
    "of inside and outside views is an interpretation; and it offers no corrected figure to use in "
    "place of a prediction."), 620)
S["pb04-f6"]=lambda: f_realia(tbl("Reporting what somebody said", None,
    ["Direct","Reported","The change"],
    [["&ldquo;It <b>will</b> take six weeks.&rdquo;","He said it <b>would</b> take six weeks.",
      "<i>will</i> &rarr; <i>would</i>"],
     ["&ldquo;It <b>is</b> finished.&rdquo;","She said it <b>was</b> finished.",
      "present &rarr; past"],
     ["&ldquo;We <b>can</b> start Monday.&rdquo;","They said they <b>could</b> start Monday.",
      "<i>can</i> &rarr; <i>could</i>"],
     ["&ldquo;I <b>have</b> finished.&rdquo;","He said he <b>had</b> finished.",
      "perfect &rarr; past perfect"],
     ["&ldquo;It <b>may</b> slip.&rdquo;","&nbsp;","&nbsp;"],
     ["&ldquo;We <b>must</b> order today.&rdquo;","&nbsp;","&nbsp;"]],
    note="<b>Said</b> takes no person; <b>told</b> needs one."), 640)
S["pb04-f7"]=lambda: f_chart([("met the date",9),("overran by under 10 per cent",5),
    ("by 10 to 30 per cent",8),("by over 30 per cent",8),("no date recorded",4)],
    unit="predictions")
S["pb04-f8"]=lambda: f_icons([("note","a prediction being written"),
    ("star","a date met"),("danger","a date missed"),
    ("magnifier","one plan studied closely"),("archive","finished files"),
    ("scales","one person, two numbers")],3)
S["pb04-f9"]=lambda: f_realia(tbl("Extract from the estimator's file",
    "Eight of thirty rows. The ticks are the met dates.",
    ["Package","Date stated","Stated by","Worst case given","What happened","Overrun"],
    [["Depot lighting","14 Mar","A. Saleh","28 Mar","11 Mar &nbsp;&#10003;","&mdash;"],
     ["Pipework","8 Jun","W. Zhao","22 Jun","19 Jul","<b>38%</b>"],
     ["Control panel","2 Feb","K. Lind","16 Feb","9 Mar","<b>51%</b>"],
     ["Harbour survey","30 Apr","N. Haddad","&mdash;","28 Apr &nbsp;&#10003;","&mdash;"],
     ["Design package","12 Feb","C. Nkemelu","26 Feb","29 Apr","<b>83%</b>"],
     ["Valve replacement","3 Aug","O. Nasser","17 Aug","21 Aug","<b>13%</b>"],
     ["Training","9 Sep","HR","&mdash;","2 Nov","<b>61%</b>"],
     ["Commissioning","26 Sep","N. Rahimi","10 Oct","14 Oct","<b>19%</b>"]],
    note="<b>Nine of thirty were met, and eleven of the seventeen with a stated worst case beat "
    "that worst case.</b>"), 720)
S["pb04-f10"]=lambda: f_scene(960,440, people=[("karin",290,176,{"seated":True}),
     ("nkemelu",390,176,{"seated":True}),("sofia",520,172,{})],
    props=[("desk",240,0,1.2),("computer",130,138,0.5),("flashcard",360,196,0.22),
     ("book",440,198,0.22),("envelope",580,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,112,"TWO ANSWERS",[("will take","5 wk"),("last four","8 wk")]),
    clockat=(610,44,22,11,0))
S["pb04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1 &middot; from the plan", None,
        "<p><b>Five weeks.</b></p>"
        "<p style='font-size:13px;line-height:1.8'>Two weeks for the build, one for the loom, one "
        "for factory testing, one for delivery and installation. Every step is "
        "defensible.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Note 2 &middot; from the file", None, ["Panel","Weeks"],
      [["Calder depot, 2023","<b>7</b>"],["Northgate pumps, 2024","<b>8</b>"],
       ["Harbour inlet, 2024","<b>8</b>"],["Pennine substation, 2025","<b>9</b>"],
       ["<b>average</b>","<b>8</b>"]],
      note="<b>If eight is too long, tell me which of those four was unusual.</b>"), w)[0:3],
    w=940, h=280)
S["pb04-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Justified from the plan", None,
        "<p>Build 2 weeks, loom 1, factory test 1, delivery and install 1. <b>Total five "
        "weeks.</b></p>"
        "<p style='color:#6b6861;font-size:13px'>My plan has said five weeks three times.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("Justified from the file", None,
        "<p>The last four panels took <b>7, 8, 8 and 9</b> weeks. <b>Average 8.</b></p>"
        "<p><b>I am putting eight in the schedule.</b> In February I said the design would take six "
        "weeks; it took eleven.</p>"
        "<p><b>If you want five, tell me which of those four was unusual.</b></p>"), w)[0:3],
    w=940, h=270)
S["pb04-f13"]=lambda: f_realia(form("Duration note planner",
    [("What my plan says",""),("Four finished durations",""),("The average",""),
     ("What I said last time, and what happened",""),("What I am using",""),
     ("The question back","")]), 520)
S["pb04-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("karin",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("sofia",290,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("linh",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("wei",790,172,{}),
     ("junseo",850,170,{}),("oskar",910,172,{}),("ahmad",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("archive",548,198,0.22),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,210,118,"THE LAST FOUR",[("7","8"),("8","9"),("average","8")]),
    clockat=(272,34,22,11,0))
S["pb04-f15"]=lambda: f_chart([("written down and checked afterwards",3),
    ("written down and never looked at",9),("said out loud only",8),
    ("I do not remember",5),("we do not state dates",2)])
S["pb04-f16"]=lambda: f_realia(doc("On a desk in May",
    "What was on it at five o'clock",
    "<p><b>A printed February email.</b> <i>Six weeks.</i></p>"
    "<p><b>The file.</b> Thirty stated dates; <b>nine</b> ticked.</p>"
    "<p><b>Two cards.</b> <b>Five weeks</b> and <b>eight weeks</b>, from the same eight people on "
    "the same afternoon.</p>"
    "<p><b>A page from a 1994 journal.</b></p>"
    "<p><b>A note of three sentences.</b> <i>Nobody in those thirty rows was careless and two of "
    "them were the best engineers I have worked with. The first question anybody asks produces a "
    "number out of somebody's imagination, and the second produces one out of the records, and both "
    "feel equally honest to the person answering. Judgment still has one job, which is to tell me "
    "which of the last four was unusual, and that is the only part of this I cannot do with a "
    "spreadsheet.</i></p>",
    "Five o'clock. The plan says five and the file says eight."), 600)

# ---------------- Unit 5 ----------------
S["pb05-f1"]=lambda: f_icons([("archive","a shelf of finished projects"),
    ("folder","a set of similar projects"),("scales","a distribution with a median"),
    ("spreadsheet","two bars compared"),("note","forecast beside outturn"),
    ("coins","a percentage added"),("timetable","a railway"),
    ("bridge","a bridge"),("roadworks","a road"),("book","a journal from 2006")],4)
S["pb05-f2"]=lambda: f_scene(940,430, people=[("priya",300,172,{}),("nkemelu",395,172,{})],
    props=[("computer",130,138,0.54),("desk",250,0,1.2),("note",460,196,0.24),
     ("window",830,56,0.9)],
    board=(690,22,200,118,"19 STATIONS",[("median","+22%"),("without 2","+12%"),
      ("prudent","+38%")]),
    clockat=(610,44,22,2,20))
S["pb05-f3"]=lambda: f_icons([("folder","choosing the class"),
    ("scales","drawing the distribution"),("star","placing your project"),
    ("scissors","excluding an outlier"),("coins","adding an uplift"),
    ("note","forecast against outturn")],3)
S["pb05-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The work","The class I would use","How many projects","The one I would exclude"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="What excluding it does to the answer: ______________________"), 680)
S["pb05-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 5",
    "Project office &middot; forecasting from the past &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> <b>Bent Flyvbjerg</b> published <i>From Nobel Prize to Project "
    "Management: Getting Risks Right</i> in the <b>Project Management Journal</b> in <b>August "
    "2006</b>, building on work in economics and psychology that won the <b>Nobel Prize in "
    "economics in 2002</b>.</p>"
    + table_html(["The three steps",""],
      [["<b>1</b>","identify a <b>reference class</b> of past, similar projects"],
       ["<b>2</b>","establish how their outcomes were <b>distributed</b>"],
       ["<b>3</b>","place <b>your</b> project on that distribution"]])
    + "<p><b>Why it was thought necessary.</b> An earlier study with Holm and Buhl examined "
    "<b>258</b> transport projects in <b>20</b> countries over about <b>70 years</b>.</p>"
    + table_html(["Type","Average cost overrun"],
      [["rail","<b>44.7 per cent</b>"],["bridges and tunnels","<b>33.8 per cent</b>"],
       ["roads","<b>20.4 per cent</b>"]])
    + "<p><b>The inaccuracy had not improved over seventy years.</b> Demand forecasts were no "
    "better: for rail, actual passenger numbers were on average about <b>half</b> of those "
    "forecast.</p>"
    "<p><b>Error, or lie.</b> The author separates <b>optimism</b>, a genuine mistake that this "
    "method corrects, from <b>strategic misrepresentation</b>: a figure made deliberately "
    "attractive so that a decision is taken. <b>Reference class forecasting does nothing about the "
    "second</b>, because somebody willing to misrepresent a cost is also willing to choose a "
    "flattering class.</p>"
    "<p><b>Our nineteen.</b> Lindhurst has finished <b>19</b> pump stations in about twelve years "
    "and knows what each finally cost. Median overrun against the approved figure: <b>22 per "
    "cent</b>. <b>Two</b> hit unexpected rock and overran by more than <b>90 per cent</b>; exclude "
    "them and the median falls to <b>12 per cent</b>, treat them as ordinary members and a prudent "
    "figure is nearer <b>38</b>. <b>The method is arithmetic after step one. Step one is an "
    "argument.</b></p>"
    "<p><b>What it needs, and cannot do.</b> <b>Enough finished projects with real outturns "
    "recorded</b> &mdash; which most organizations do not have. It gives a <b>distribution, not a "
    "cause</b>. And the <b>choice of class</b> changes the answer, so the method moves the judgment "
    "rather than removing it.</p>",
    "Source: B. Flyvbjerg, From Nobel Prize to Project Management: Getting Risks Right, Project "
    "Management Journal, August 2006; the overrun figures are from B. Flyvbjerg, M. S. Holm and S. "
    "Buhl, Underestimating Costs in Public Works Projects: Error or Lie?, Journal of the American "
    "Planning Association, 2002. The method requires a reference class of comparable completed "
    "projects with recorded outturns; it produces a distribution rather than an explanation; the "
    "selection of the class remains a judgment; and its author states explicitly that it does not "
    "address deliberate misrepresentation."), 620)
S["pb05-f6"]=lambda: f_realia(tbl("Comparing with data", None,
    ["Structure","What it does","Example"],
    [["<b>higher than</b>","one number against another","Rail is <b>higher than</b> roads."],
     ["<b>22 per cent higher than</b>","gives the size of the gap",
      "<b>22 per cent higher than</b> approved."],
     ["<b>twice as &hellip; as</b>","a multiple",
      "Rail overran <b>twice as</b> much <b>as</b> roads."],
     ["<b>compared with</b>","sets two figures side by side",
      "44.7 per cent, <b>compared with</b> 20.4."],
     ["<b>by a factor of</b>","&nbsp;","&nbsp;"],
     ["<b>the same as</b>","&nbsp;","&nbsp;"]],
    note="A percentage with no base is not a number. <i>Higher than what?</i>"), 640)
S["pb05-f7"]=lambda: f_chart([("under 5 per cent",3),("5 to 20 per cent",6),
    ("20 to 40 per cent",6),("40 to 90 per cent",2),("over 90 per cent",2)],
    unit="finished stations")
S["pb05-f8"]=lambda: f_icons([("folder","a set of similar projects"),
    ("scales","a distribution with a median"),("star","your project placed on it"),
    ("scissors","two projects excluded"),("coins","an uplift written on a figure"),
    ("note","forecast beside outturn")],3)
S["pb05-f9"]=lambda: f_realia(tbl("Reference class sheet",
    "Nine of nineteen finished stations, with the two exclusions marked",
    ["Project","Year","Approved","Outturn","Overrun","In the class"],
    [["Calder inlet","2014","1.80","2.02","12%","yes"],
     ["Northgate A","2015","2.10","2.44","16%","yes"],
     ["Harbour north","2016","1.95","3.78","<b>94%</b>","<b>no &mdash; rock, 1 borehole</b>"],
     ["Pennine lift","2017","2.40","2.69","12%","yes"],
     ["Sorrel east","2018","1.70","2.11","24%","yes"],
     ["Ridgeway old","2019","2.20","4.31","<b>96%</b>","<b>no &mdash; rock, 1 borehole</b>"],
     ["Calder west","2021","2.55","2.86","12%","yes"],
     ["Northgate B","2023","2.60","3.15","21%","yes"],
     ["Harbour south","2024","2.45","2.72","11%","yes"]],
    numcols=(1,2,3),
    note="<b>Median 22 per cent in the class of nineteen; 12 per cent without these two.</b> Both "
    "exclusions had one borehole; this project has four."), 720)
S["pb05-f10"]=lambda: f_scene(960,440, people=[("priya",290,172,{}),
     ("nkemelu",400,176,{"seated":True}),("okonjo",520,172,{})],
    props=[("computer",130,138,0.5),("desk",240,0,1.2),("note",370,196,0.22),
     ("spreadsheet",460,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,118,"THE CHOICE",[("with 2","+38%"),("without","+12%"),
      ("difference","600k")]),
    clockat=(610,44,22,2,30))
S["pb05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Forecast 1", None,
        "<p style='font-size:22px'><b>2.40 million</b></p>"
        "<p>Plus a contingency of <b>10 per cent</b>.</p>"
        "<p style='color:#6b6861;font-size:13px'>There is no past in this document.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("Forecast 2", None,
        "<p style='line-height:1.85'>Approved: <b>2.40</b>.<br>"
        "Class: <b>19</b> finished stations; median <b>+22%</b>.<br>"
        "Excluding two with one borehole each: <b>+12%</b>.<br>"
        "<b>Recommended: 2.70.</b><br>"
        "<b>If the four boreholes miss a rock shelf, this is a 90-per-cent project.</b></p>"
        ), w)[0:3],
    w=940, h=280)
S["pb05-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Forecast, as submitted", None,
        "<p><b>2.40 million, with a ten per cent contingency.</b></p>"), w)[0:3],
    lambda w,h: f_realia(doc("Forecast, rebuilt", None,
        "<p><b>2.70 million.</b> Nineteen finished stations, median <b>22 per cent above</b> "
        "approval; <b>two excluded</b> (one borehole each against our four), giving <b>12 per "
        "cent</b>.</p>"
        "<p><b>Risk carried by the exclusion:</b> a missed rock shelf makes this a 90-per-cent "
        "project, and we will have argued ourselves out of the warning.</p>"), w)[0:3],
    w=940, h=270)
S["pb05-f13"]=lambda: f_realia(form("Forecast planner",
    [("The approved figure",""),("The class, and its size",""),("The median",""),
     ("The exclusion, and its argument",""),("What the exclusion costs if it is wrong",""),
     ("What you are not claiming","")]), 520)
S["pb05-f14"]=lambda: f_scene(1000,450,
    people=[("hanna",60,176,{}),("priya",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("karin",370,176,{"seated":True}),
     ("linh",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("wei",790,172,{}),
     ("junseo",850,170,{}),("oskar",910,172,{}),("nadia",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("spreadsheet",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,210,118,"WHICH 19?",[("12%","22%"),("38%","?")]),
    clockat=(272,34,22,3,0))
S["pb05-f15"]=lambda: f_chart([("yes, in minutes",3),("yes, with effort",8),
    ("only for recent projects",7),("no",6),("we do not record outturns",4)])
S["pb05-f16"]=lambda: f_realia(doc("On a desk in May",
    "What was on it at five o'clock",
    "<p><b>The nineteen-row list.</b> Two rows circled.</p>"
    "<p><b>A borehole log.</b> One hole on each of the two old projects; <b>four</b> on this "
    "one.</p>"
    "<p><b>A sheet of three figures.</b> <b>12</b>, <b>22</b>, <b>38</b> per cent.</p>"
    "<p><b>A journal page from 2006.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The arithmetic in this method is trivial and the only "
    "decision that matters is which projects count, which is why it should be written in one "
    "sentence that somebody else can attack. An exclusion without its own stated risk is just a way "
    "of getting the number you wanted with a method's name on it. And none of this works at all in "
    "three years' time unless somebody writes down what each project finally cost on the day it "
    "finishes.</i></p>",
    "Five o'clock. One decision about two projects, six hundred thousand either way."), 600)

# ---------------- Unit 6 ----------------
S["pb06-f1"]=lambda: f_icons([("coins","a percentage added to a figure"),
    ("spreadsheet","a bar rising to a new level"),("note","a table of percentages"),
    ("councilbuilding","a standard building"),("crane","an unusual one"),
    ("padlock","money that may not be spent"),("cash","a contingency being spent"),
    ("book","published guidance"),("tally","a study of fifty projects"),
    ("scales","an upper bound, argued down")],4)
S["pb06-f2"]=lambda: f_scene(920,420, people=[("nkemelu",330,176,{"seated":True}),
     ("okonjo",430,176,{"seated":True})],
    props=[("desk",250,0,1.22),("note",385,196,0.24),("calculator",455,198,0.24),
     ("window",810,56,0.92)],
    board=(680,22,200,118,"UPPER BOUNDS",[("standard","44%"),("non-standard","66%"),
      ("difference","530k")]),
    clockat=(600,44,22,9,20))
S["pb06-f3"]=lambda: f_icons([("scales","an upper bound with an arrow down"),
    ("archive","evidence placed beside it"),("coins","a reduced percentage"),
    ("padlock","an uplift outside the budget"),("cash","a contingency being spent"),
    ("note","a project being relabeled")],3)
S["pb06-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The estimate","Standard or non-standard","The percentage I would add",
     "The evidence that would reduce it"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The project we would be tempted to call standard: ______________________"), 680)
S["pb06-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 6",
    "Project office &middot; adding a number on purpose &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> A government treasury publishes <b>supplementary guidance on "
    "optimism bias</b> alongside its appraisal green book. It was first issued in <b>2003</b> and "
    "rests on a <b>2002</b> review of <b>fifty</b> large public procurement projects carried out "
    "for it by consulting engineers.</p>"
    "<p><b>What it requires.</b> That an appraisal <b>adjust explicitly</b> for optimism bias, "
    "using <b>empirically based</b> percentages, applied to <b>capital costs</b>, <b>works "
    "duration</b> and <b>benefits</b> &mdash; all three.</p>"
    + table_html(["Project type","Upper bound, capital cost"],
      [["standard buildings","<b>24 per cent</b>"],["non-standard buildings","<b>51 per cent</b>"],
       ["standard civil engineering","<b>44 per cent</b>"],
       ["non-standard civil engineering","<b>66 per cent</b>"],
       ["equipment and development","<b>200 per cent</b>"]])
    + "<p>For <b>works duration</b> the upper bounds are lower: about <b>4 per cent</b> for "
    "standard buildings and <b>20 per cent</b> for standard civil engineering.</p>"
    "<p><b>How they are meant to be used.</b> You <b>start at the upper bound</b> and <b>reduce it "
    "only with evidence</b> that the causes of overrun have been managed. <b>An uplift is not a "
    "number you invent; it is a number you argue down.</b></p>"
    + table_html(["On this project",""],
      [["engineer's estimate","<b>2.40 million</b>"],
       ["standard civil engineering, 44 per cent","<b>3.46 million</b>"],
       ["our own nineteen stations, median 22 per cent","<b>2.93 million</b>"],
       ["<b>the figure in the paper</b>","<b>2.70 million</b>"]])
    + "<p><b>The word that is worth half a million.</b> Non-standard is <b>66 per cent</b>, not 44 "
    "&mdash; about <b>530,000</b> on this estimate. The chamber design is new to us, so <b>an "
    "honest person could call it either</b>. The word is argued at the gate and <b>minuted</b>.</p>"
    "<p><b>An uplift is not a contingency.</b> A contingency sits <b>inside</b> the budget and is "
    "<b>meant to be spent</b>. An uplift corrects a forecast known to be low: <b>it funds "
    "nothing</b>. <b>We spent one once</b>, in 2021, because the paper said <i>allowance</i>.</p>"
    "<p><b>What it does not do.</b> It is <b>appraisal</b> guidance, not delivery management; the "
    "percentages come from <b>fifty projects, one country, around 2002</b>; it does not replace risk "
    "analysis; and <b>it cannot tell you whether your project is standard</b>.</p>",
    "Source: supplementary guidance on optimism bias issued with a government treasury's appraisal "
    "green book, first published in 2003, based on a 2002 review of fifty large public procurement "
    "projects. The percentages are upper bounds intended as a starting point, to be reduced only "
    "where evidence of mitigation exists; they derive from one country's public projects of that "
    "period; the guidance addresses appraisal rather than delivery, does not replace risk "
    "analysis, and offers no test for whether a project is standard."), 620)
S["pb06-f6"]=lambda: f_realia(tbl("Percentages and increases", None,
    ["Structure","What it does","Example"],
    [["<b>increase by</b>","the size of the change","Costs <b>increase by</b> 44 per cent."],
     ["<b>increase to</b>","the new level","Costs <b>increase to</b> 3.46 million."],
     ["<b>rise from &hellip; to</b>","both levels",
      "It <b>rises from</b> 2.40 <b>to</b> 2.70 million."],
     ["<b>an uplift of</b>","names the adjustment","<b>An uplift of</b> 22 per cent."],
     ["<b>add &hellip; to</b>","&nbsp;","&nbsp;"],
     ["<b>reduce from &hellip; to</b>","&nbsp;","&nbsp;"]],
    note="<b>By</b> is the change; <b>to</b> is the level. In a board paper the mistake is "
    "expensive."), 640)
S["pb06-f7"]=lambda: f_chart([("engineer's estimate",240),
    ("non-standard upper bound",398),("standard upper bound",346),
    ("our own median",293),("the figure in the paper",270)], unit="x10,000")
S["pb06-f8"]=lambda: f_icons([("coins","a percentage added"),
    ("spreadsheet","a bar at a new level"),("note","a table of percentages"),
    ("scales","an upper bound argued down"),("padlock","money that may not be spent"),
    ("stamp","a project relabeled")],3)
S["pb06-f9"]=lambda: f_realia(tbl("Uplift sheet",
    "Five estimates. The empty cell is the largest reduction on the page.",
    ["Project type","Upper bound","Reduction claimed","Evidence","Figure used","Agreed by"],
    [["standard civil engineering","44%","to 12%","19 stations; 4 boreholes","2.70","E. Okonjo"],
     ["standard buildings","24%","to 18%","6 finished depots","0.84","E. Okonjo"],
     ["non-standard civil","66%","to 40%","2 similar chambers","1.22","E. Okonjo"],
     ["equipment and development","200%","<b>to 35%</b>","<b>&mdash;</b>","0.47","<b>&mdash;</b>"],
     ["standard civil engineering","44%","none claimed","&mdash;","1.15","L. Tran"]],
    note="<b>One row has no evidence and it is the largest reduction on the page.</b> It is also "
    "the only row nobody has signed."), 720)
S["pb06-f10"]=lambda: f_scene(960,440, people=[("nkemelu",290,176,{"seated":True}),
     ("okonjo",400,172,{}),("linh",520,172,{})],
    props=[("desk",240,0,1.2),("note",360,196,0.22),("calculator",450,198,0.22),
     ("archive",580,198,0.22),("window",850,56,0.88)],
    board=(690,22,200,118,"2021",[("uplift","180k"),("spent","174k"),("word","allowance")]),
    clockat=(610,44,22,10,0))
S["pb06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Board paper, 2021", None,
        "<p style='font-size:20px'><b>2.58 million</b></p>"
        "<p style='font-size:13px'>&hellip; including an <b>allowance</b> of 180,000.</p>"
        "<p style='color:#6b6861;font-size:13px'>174,000 of it was spent on a switchgear change, "
        "properly approved. Five people read past the gap.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Board paper, now", None, ["","&nbsp;"],
      [["<b>1 base</b>","2.40 million"],["<b>2 upper bound</b>","44% &rarr; <b>to</b> 3.46"],
       ["<b>3 reduction</b>","to 12% on 19 stations &rarr; <b>2.70</b>"],
       ["<b>4 warning</b>","<b>the 300,000 is not contingency and may not be spent</b>"]]),
      w)[0:3],
    w=960, h=280)
S["pb06-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Paper, as written", None,
        "<p><b>2.58 million, allowance included.</b></p>"), w)[0:3],
    lambda w,h: f_realia(doc("Paper, rewritten", None,
        "<p style='line-height:1.85'>Base <b>2.40</b>.<br>"
        "Upper bound increases it <b>by 44 per cent, to 3.46</b>.<br>"
        "Reduced <b>from 44 to 12 per cent</b> on nineteen finished stations and four "
        "boreholes: <b>2.70</b>.<br>"
        "<b>The 300,000 is not contingency and may not be spent.</b></p>"), w)[0:3],
    w=940, h=270)
S["pb06-f13"]=lambda: f_realia(form("Uplift planner",
    [("The base figure",""),("The upper bound, and its source",""),("The reduction",""),
     ("The evidence for it",""),("What it costs if the evidence is wrong",""),
     ("The warning","")]), 520)
S["pb06-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("nkemelu",135,172,{}),("okonjo",210,176,{"seated":True}),
     ("linh",290,172,{"seated":True}),("priya",370,176,{"seated":True}),
     ("karin",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("wei",790,172,{}),
     ("junseo",850,170,{}),("oskar",910,172,{}),("nadia",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("calculator",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,210,118,"ONE WORD",[("standard","44%"),("non-standard","66%"),
      ("worth","530k")]),
    clockat=(272,34,22,10,0))
S["pb06-f15"]=lambda: f_chart([("a published percentage",4),("a company percentage",6),
    ("a round number somebody chose",9),("nothing",5),("it gets cut instead",7)])
S["pb06-f16"]=lambda: f_realia(doc("On a desk in June",
    "What was on it at five o'clock",
    "<p><b>The guidance table.</b> Two rows circled: <b>standard</b> and <b>non-standard</b>.</p>"
    "<p><b>A calculation sheet.</b> <b>2.40</b> &middot; <b>3.46</b> &middot; <b>2.93</b> &middot; "
    "<b>2.70</b>.</p>"
    "<p><b>A 2021 file</b>, open at a page where an uplift of 180,000 was spent.</p>"
    "<p><b>A borehole log.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The published percentage comes from fifty projects in "
    "another country two decades ago and it is still the most useful number in my paper, because it "
    "is the one I have to argue away from in front of people who can check the argument. The two "
    "ways this method fails are both quiet: a project gets called standard because one word is "
    "cheaper than a meeting, and an uplift gets spent because it looks exactly like money. I have "
    "written the warning twice and I still expect to have the 2021 conversation again one "
    "day.</i></p>",
    "Five o'clock. Two words on a table, five hundred and thirty thousand between them."), 600)
