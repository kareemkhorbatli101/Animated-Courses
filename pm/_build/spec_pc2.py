# -*- coding: utf-8 -*-
"""Throughline Book 3 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 ----------------
S["pc04-f1"]=lambda: f_icons([("scales","a concrete cube being crushed"),
    ("camera","a weld being photographed"),("thermometer","a pressure gauge"),
    ("refnumber","a drawing revision letter"),("walkroute","a process as a chain of steps"),
    ("clipboard","a review with a checklist"),("certificate","a certificate on a wall"),
    ("archive","a file of test records"),("danger","a defect written up"),
    ("book","a standard from 2017")],4)
S["pc04-f2"]=lambda: f_scene(920,420, people=[("wei",330,172,{}),("nadia",425,172,{})],
    props=[("shelf",150,100,0.6),("desk",250,0,1.2),("archive",400,196,0.26),
     ("note",470,198,0.2),("window",810,56,0.92)],
    board=(680,22,200,112,"TWO FILES",[("product","311"),("process","2")]),
    clockat=(600,44,22,8,20))
S["pc04-f3"]=lambda: f_icons([("scales","a crushed cube and its certificate"),
    ("camera","a weld radiograph"),("thermometer","a pressure test sheet"),
    ("refnumber","a drawing register"),("signature","a reviewed plan"),
    ("archive","a lessons log")],3)
S["pc04-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The record","What it records","Product or process","What would be missed without it"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The thing nothing records: ______________________"), 680)
S["pc04-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 4",
    "Project office &middot; two kinds of quality &middot; page 1 of 1",
    "<p><b>The standard.</b> <b>ISO 10006</b>, <i>Quality management &mdash; Guidelines for quality "
    "management in projects</i>, dated <b>2017</b>. It is the <b>third edition</b> and replaced the "
    "<b>2003</b> one. It is <b>guidance</b>, and <b>it cannot be certified against</b>.</p>"
    + table_html(["The product","The project's processes"],
      [["the station, the welds, the panel","planning, reviewing, purchasing, communicating"],
       ["a cube <b>is crushed</b>","a plan <b>is reviewed</b> before issue"],
       ["a weld <b>is radiographed</b>","a drawing register <b>is kept</b> current"],
       ["a joint <b>is pressure tested</b>","lessons <b>are read</b> before the next project"]])
    + "<p><b>The guidance covers both</b>, and says the second affects the first.</p>"
    "<p><b>What we have, and what we do not.</b> <b>311</b> product test records this year: "
    "complete, indexed, traceable to a batch and a date. We looked at <b>nine finished "
    "projects</b>. <b>All nine</b> had complete product records. <b>Two</b> had any record at all "
    "of whether the project processes worked. <b>There is nothing wrong with the 311. The gap is "
    "that none of them is about us.</b></p>"
    "<p><b>The most expensive defect of last year.</b> Not a weld. <b>A drawing issued at revision "
    "B while the site was working to revision A.</b> The pipe centers moved <b>140 millimeters</b> "
    "and nobody found out for <b>eleven days</b>: about <b>26,000</b> and four days of delay. "
    "<b>Every physical thing built in those eleven days passed every test it was given, because "
    "each one was built correctly to the wrong drawing.</b> The process that failed is <b>document "
    "control</b>, and the guidance names it.</p>"
    "<p><b>What the certificate downstairs does and does not say.</b> It is for a <b>quality "
    "management system</b> under a different standard, and it is real. <b>It says nothing about "
    "this document.</b> This guidance is <b>not a certification standard</b>, is not a management "
    "system standard, and <b>does not describe how to manage a project</b>. <b>So nobody can give "
    "us a badge for the thing we actually need to fix</b>, which may be why we have not fixed "
    "it.</p>"
    "<p><b>What we are adding.</b> One page per project: what <b>should be reviewed</b>, by "
    "<b>whom</b>, and <b>when it was</b>. <b>Eleven lines.</b> Not a system &mdash; a record of "
    "whether the things we already believe we do were actually done.</p>",
    "Source: ISO 10006:2017, Quality management &mdash; Guidelines for quality management in "
    "projects, third edition, replacing the 2003 edition. It is guidance, not requirements, and is "
    "not intended for certification or for use as a quality management system standard; it does "
    "not specify product quality requirements and does not describe how to manage a project, which "
    "other documents cover."), 620)
S["pc04-f6"]=lambda: f_realia(tbl("The passive with modals", None,
    ["Structure","What it says","Example"],
    [["<b>should be</b> + participle","a recommendation",
      "The plan <b>should be reviewed</b> before issue."],
     ["<b>must be</b> + participle","a requirement","Every revision <b>must be recorded</b>."],
     ["<b>can be</b> + participle","a possibility",
      "The register <b>can be checked</b> in five minutes."],
     ["<b>has to be</b> + participle","an external requirement",
      "It <b>has to be approved</b> by the client."],
     ["<b>is to be</b> + participle","&nbsp;","&nbsp;"],
     ["<b>need not be</b> + participle","&nbsp;","&nbsp;"]],
    note="Modal + <b>be</b> + past participle. Never <i>should reviewed</i> and never <i>should be "
    "review</i>."), 640)
S["pc04-f7"]=lambda: f_chart([("complete product records only",7),
    ("product records plus a plan review",1),("product records plus a lessons log",0),
    ("both process records",1),("neither",0)], unit="finished projects")
S["pc04-f8"]=lambda: f_icons([("scales","a crushed cube"),("camera","a weld radiograph"),
    ("thermometer","a pressure gauge"),("refnumber","a revision box"),
    ("signature","a reviewed plan"),("certificate","a certificate on a wall")],3)
S["pc04-f9"]=lambda: f_realia(doc("Project process record",
    "Eleven lines. Beside each one a name and a date, or an empty box.",
    table_html(["","What should happen","Who","When it did"],
      [["1","The plan <b>should be reviewed</b> by the sponsor before issue","E. Okonjo",
        "<b>14 Feb</b>"],
       ["2","Every drawing revision <b>must be recorded</b> on the day of issue","H. Virtanen",
        "ongoing"],
       ["3","The drawing register <b>should be reconciled</b> weekly against site copies","W. Zhao",
        "<b>&mdash;</b>"],
       ["4","The previous project's lessons <b>should be read</b> before the first gate",
        "C. Nkemelu","<b>9 Jan</b>"],
       ["5","Purchase specifications <b>should be checked</b> against the current revision",
        "O. Nasser","11 of 14"],
       ["6","The risk register <b>should be reviewed</b> monthly with the sponsor","I. Berg",
        "<b>&mdash;</b>"],
       ["7","Change requests <b>must be answered</b> within five working days","N. Rahimi",
        "ongoing"],
       ["8","The joint register <b>should be reconciled</b> with the client monthly","E. Caruso",
        "<b>&mdash;</b>"],
       ["9","Progress measurement methods <b>must be stated</b> on the report","L. Tran",
        "<b>4 Oct</b>"],
       ["10","The continuity plan <b>should be exercised</b> annually","A. Saleh",
        "<b>&mdash;</b>"],
       ["11","Closure records <b>must be issued</b> within 20 working days","N. Rahimi","&mdash;"]]),
    "<b>The empty boxes are the page.</b> Four of them, in the first month, and line 3 is the one "
    "that cost 26,000 in October."), 700)
S["pc04-f10"]=lambda: f_scene(960,440, people=[("wei",290,172,{}),
     ("nkemelu",400,176,{"seated":True}),("grace",520,176,{"seated":True})],
    props=[("desk",240,0,1.2),("refnumber",360,196,0.22),("note",450,198,0.2),
     ("archive",560,198,0.22),("window",850,56,0.88)],
    board=(690,22,200,112,"OCTOBER",[("rev B issued","site on A"),("days","11")]),
    clockat=(200,44,22,9,0))
S["pc04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The product file", None,
        "<p><b>311 test records.</b></p>"
        "<p style='font-size:13px;line-height:1.85'>Concrete cubes &middot; weld radiographs "
        "&middot; pressure tests &middot; dimensional checks &middot; calibration certificates "
        "&middot; material certificates</p>"
        "<p style='color:#6b6861;font-size:13px'>Complete, indexed, traceable. The best file in "
        "the company.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("The process page", None,
        "<p><b>Eleven lines.</b> Each one a passive statement, a name, and a date or an empty "
        "box.</p>"
        "<p style='font-size:13px'><b>Four boxes empty this month.</b> One of them is the drawing "
        "register.</p>"), w)[0:3],
    w=940, h=280)
S["pc04-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page 1 &middot; the index", None,
        "<p style='font-size:13px;line-height:1.9'>Section 1 concrete &middot; 2 reinforcement "
        "&middot; 3 welds &middot; 4 coatings &middot; 5 pressure tests &middot; 6 electrical "
        "&middot; 7 instruments &middot; 8 calibration</p>"
        "<p><b>Total: 311 records.</b></p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page 2 &middot; the eleven lines", None,
        "<p style='line-height:1.85'>1 The plan <b>should be reviewed</b> &mdash; E. Okonjo, 14 "
        "Feb<br>2 Revisions <b>must be recorded</b> &mdash; H. Virtanen, ongoing<br>"
        "3 The register <b>should be reconciled</b> weekly &mdash; <b>empty</b><br>"
        "4 Lessons <b>should be read</b> &mdash; C. Nkemelu, 9 Jan</p>"), w)[0:3],
    w=940, h=270)
S["pc04-f13"]=lambda: f_realia(form("Process record planner",
    [("What should be reviewed",""),("Who by",""),("When it was",""),
     ("What must be recorded",""),("What can be checked by somebody else",""),
     ("The strength you will open with","")]), 520)
S["pc04-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("wei",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("grace",290,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("ahmad",445,172,{}),("oskar",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("hanna",910,172,{}),("linh",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("archive",548,198,0.22),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,118,"WRONG DRAWING",[("records","311"),("about us","2")]),
    clockat=(278,34,22,9,0))
S["pc04-f15"]=lambda: f_chart([("a signed review record",3),("a lessons log",5),
    ("minutes of meetings",8),("nothing written",9),("product records only",7)])
S["pc04-f16"]=lambda: f_realia(doc("On a desk in October",
    "What was on it at five o'clock",
    "<p><b>Two drawings of one pipe run</b>, with different revision letters.</p>"
    "<p><b>A thick file</b> of 311 test records.</p>"
    "<p><b>A one-page process record</b> with four empty boxes.</p>"
    "<p><b>A framed certificate</b>, for a different standard.</p>"
    "<p><b>A note of three sentences.</b> <i>We test the concrete to four decimal places and we "
    "test none of the things we believe about how we work. The register could have been reconciled "
    "in twenty minutes on any Tuesday, and the reason nobody did is not carelessness but that "
    "nobody had ever written down that it should be. Eleven lines, and four of the boxes will be "
    "empty in the first month, and those four boxes are the only part of this page that will change "
    "anything.</i></p>",
    "Five o'clock. Three hundred and eleven records about the concrete."), 600)

# ---------------- Unit 5 ----------------
S["pc05-f1"]=lambda: f_icons([("spreadsheet","a four-by-four table"),
    ("tree","a tree of problems"),("star","the same tree as objectives"),
    ("tally","an indicator as a number"),("archive","a named source"),
    ("note","an assumption in a box"),("walkroute","four if-then steps rising"),
    ("danger","a risk outside your control"),("form","a funding application"),
    ("book","guidelines from 2004")],4)
S["pc05-f2"]=lambda: f_scene(940,430, people=[("nkemelu",300,172,{}),("oyelaran",395,172,{})],
    props=[("board",110,80,0.76),("desk",250,0,1.2),("note",460,196,0.22),
     ("window",830,56,0.9)],
    board=(690,22,200,118,"COLUMN 4",[("before","4 lines"),("after","9 lines"),("false","1")]),
    clockat=(610,44,22,11,40))
S["pc05-f3"]=lambda: f_icons([("crane","activities, at the foot"),
    ("pipe","results, above them"),("water","the purpose"),
    ("star","the overall objective"),("walkroute","the rising logic"),
    ("note","an assumption beside each arrow")],3)
S["pc05-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The assumption","Who could confirm it","By when",
     "What happens to the purpose if it is false"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The assumption nobody has tested: ______________________"), 700)
S["pc05-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 5",
    "Project office &middot; the logical framework &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> The <b>European Commission</b> published <i>Project Cycle "
    "Management Guidelines</i> in <b>March 2004</b>, as volume one of its <i>Aid Delivery "
    "Methods</i>. It describes the project cycle and the <b>logical framework approach</b>: an "
    "analysis &mdash; stakeholders, a <b>problem tree</b>, objectives, strategy &mdash; and then "
    "the one-page <b>matrix</b>.</p>"
    + table_html(["","Intervention logic","Indicators","Source","Assumptions"],
      [["<b>overall objective</b>","fewer supply interruptions","interruptions per year",
        "client's annual return","&nbsp;"],
       ["<b>purpose</b>","pressure held at Ridgeway","above contract minimum, 12 months",
        "client's network log","<b>the estate mains can take the pressure</b>"],
       ["<b>results</b>","a working station and controls","witness test; handover accepted",
        "test certificate","<b>the client's engineer is available from week 30</b>"],
       ["<b>activities</b>","build, install, commission, hand over","milestones met","the schedule",
        "<b>the racking supplier delivers</b>"]])
    + "<p><b>The logic runs upwards, with an *if* at every step.</b> Activities <b>lead to</b> "
    "results; results <b>lead to</b> the purpose; the purpose <b>contributes to</b> the overall "
    "objective &mdash; in each case <b>only if the assumption beside it holds</b>. The fourth "
    "column is the <i>if</i>.</p>"
    "<p><b>What our fourth column said before we rewrote it.</b> <i>Stakeholders remain supportive. "
    "Weather conditions are normal. Funding continues. Suppliers deliver as agreed.</i> <b>Four "
    "entries, all true, none of them checkable, none with a name beside it.</b> Rewritten, there "
    "were <b>nine</b>, each with a person and a date. <b>Six were confirmed inside a fortnight.</b> "
    "<b>And one was false:</b> <i>the estate's existing mains can take the increased pressure.</i> "
    "<b>Nobody had asked.</b> Two sections must be replaced first: about <b>90,000</b>, and not in "
    "our scope. <b>Without that line we would have built a perfect station and the water would not "
    "have reached the houses.</b></p>"
    + table_html(["Indicators, rewritten",""],
      [["improved water supply",
        "pressure above the contract minimum at Ridgeway, <b>monthly</b>, from the <b>client's "
        "network log</b>"],
       ["successful delivery",
        "<b>witness test passed</b> and <b>handover note signed</b>, from the test certificate"]])
    + "<p><b>An indicator with no source of verification is an opinion with a number in it.</b></p>"
    "<p><b>What the guidelines do not do.</b> They are written for the Commission's <b>external "
    "assistance</b> projects, not engineering contracts. They give <b>no way of telling whether an "
    "indicator is genuinely verifiable</b>. The matrix shows <b>one logic</b> and hides the "
    "alternatives. And the guidelines themselves <b>warn</b> that a matrix filled in to satisfy a "
    "funder becomes a <b>bureaucratic requirement</b> rather than a tool for thinking.</p>",
    "Source: European Commission, Aid Delivery Methods, Volume 1: Project Cycle Management "
    "Guidelines, March 2004. The guidelines are written for the Commission's external assistance "
    "programmes rather than for commercial projects; they state that the logical framework is an "
    "aid to thinking and warn against its mechanical or bureaucratic application; they require "
    "indicators to be objectively verifiable without providing a test of verifiability; and the "
    "matrix presents a single chosen logic without showing the alternatives considered."), 640)
S["pc05-f6"]=lambda: f_realia(tbl("Cause and effect", None,
    ["Structure","What it does","Example"],
    [["<b>leads to</b>","cause &rarr; effect, between nouns",
      "Commissioning <b>leads to</b> handover."],
     ["<b>results in</b>","the same, more formal","Low pressure <b>results in</b> complaints."],
     ["<b>so that</b>","purpose, with a clause",
      "We replace the mains <b>so that</b> pressure holds."],
     ["<b>because of</b>","+ noun","Delayed <b>because of</b> the racking."],
     ["<b>as a result</b>","&nbsp;","&nbsp;"],
     ["<b>due to</b>","&nbsp;","&nbsp;"]],
    note="<b>Because of</b> and <b>due to</b> take a noun; <b>because</b> takes a clause."), 640)
S["pc05-f7"]=lambda: f_process(["activities","results","purpose","overall objective"])
S["pc05-f8"]=lambda: f_icons([("spreadsheet","a four-column table"),("tree","a problem tree"),
    ("tally","an indicator with a number"),("archive","a named source"),
    ("note","an assumption with a name and a date"),("danger","a step in the logic failing")],3)
S["pc05-f9"]=lambda: f_realia(tbl("Logical framework &middot; fourth column, rewritten",
    "Nine assumptions. The first row is the one the purpose rests on.",
    ["Row","Assumption","Who confirms","By","State"],
    [["purpose","<b>the estate's mains can carry the increased pressure</b>",
      "client's network engineer","9 Mar","<b>FALSE</b>"],
     ["purpose","the 12-month measurement comes from the client's own log","S. Marchetti","9 Mar",
      "confirmed"],
     ["result","the client's commissioning engineer is on site from week 30","S. Marchetti","9 Mar",
      "confirmed"],
     ["result","no more than four tide windows lost in October","harbour log","&mdash;",
      "<b>open</b>"],
     ["result","the witness test can be booked within two weeks","N. Haddad","2 Mar","confirmed"],
     ["activity","the racking arrives by 14 March","O. Nasser","4 Mar","confirmed"],
     ["activity","the panel supplier holds his quoted lead time","O. Nasser","4 Mar","confirmed"],
     ["activity","site access is available on Saturdays","A. Saleh","&mdash;","<b>open</b>"],
     ["objective","the client's annual return records interruptions by cause","P. Rao","11 Mar",
      "confirmed"]],
    note="<b>One assumption came back false in a week</b>, and it is the one the whole purpose row "
    "was resting on: about 90,000 of work, in the client's scope."), 740)
S["pc05-f10"]=lambda: f_scene(960,440, people=[("nkemelu",290,172,{}),
     ("sofia",400,176,{"seated":True}),("oyelaran",520,176,{"seated":True})],
    props=[("board",100,78,0.72),("desk",240,0,1.2),("envelope",370,196,0.2),
     ("coins",460,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,112,"ONLY IF",[("mains","2 sections"),("cost","90,000")]),
    clockat=(200,44,22,12,0))
S["pc05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Framework 1", None,
        "<p><b>Assumptions:</b></p>"
        "<p style='line-height:1.9'>Stakeholders remain supportive.<br>Weather conditions are "
        "normal.<br>Funding continues.<br>Suppliers deliver as agreed.</p>"
        "<p style='color:#6b6861;font-size:13px'>All true. None checkable. No names.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Framework 2", None, ["Assumption","Who","State"],
      [["<b>mains can carry the pressure</b>","network engineer","<b>FALSE</b>"],
       ["measurement from the client's log","S. Marchetti","confirmed"],
       ["engineer on site week 30","S. Marchetti","confirmed"],
       ["four tide windows at most","harbour log","open"],
       ["racking by 14 March","O. Nasser","confirmed"]],
      note="Nine lines; six confirmed in a fortnight."), w)[0:3],
    w=960, h=290)
S["pc05-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Definition, as written", None,
        "<p>The project will deliver a pump station, leading to an improved water supply in the "
        "north of the county, assuming stakeholders remain supportive.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Definition, rewritten", None,
        "<p style='line-height:1.85'>The station <b>leads to</b> pressure at the estate &mdash; "
        "<b>only if</b> two sections of the client's main are replaced (<b>90,000</b>, their "
        "scope).<br><b>As a result</b>, the station alone <b>results in</b> a perfect handover and "
        "no water at the houses.<br>Indicator: pressure above the contract minimum, <b>monthly</b>, "
        "from the <b>client's log</b>.</p>"), w)[0:3],
    w=940, h=270)
S["pc05-f13"]=lambda: f_realia(form("Framework planner",
    [("The activities",""),("The results",""),("The purpose",""),
     ("The indicator and its source",""),("The assumptions, with names and dates",""),
     ("The one the purpose depends on","")]), 520)
S["pc05-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("nkemelu",135,172,{}),("sofia",210,176,{"seated":True}),
     ("oyelaran",290,172,{"seated":True}),("okonjo",370,176,{"seated":True}),
     ("priya",445,172,{}),("oskar",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("hanna",910,172,{}),("wei",960,174,{})],
    props=[("desk",95,0,1.1),("board",155,84,0.64),("computer",335,140,0.4),
     ("printer",430,196,0.3),("envelope",548,198,0.2),("table",645,0,1.0),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,215,112,"ONLY IF",[("assumptions","9"),("false","1")]),
    clockat=(278,34,22,12,0))
S["pc05-f15"]=lambda: f_chart([("yes, all of them",2),("yes, some",6),
    ("written but unchecked",12),("we do not write them",4),("I do not know",3)])
S["pc05-f16"]=lambda: f_realia(doc("On a desk in March",
    "What was on it at five o'clock",
    "<p><b>The four-column table</b>, with the fourth column rewritten in nine lines and one marked "
    "with a cross.</p>"
    "<p><b>A network engineer's email</b>, four days old.</p>"
    "<p><b>A quotation for ninety thousand.</b></p>"
    "<p><b>A page from 2004 guidelines.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The old fourth column could not be wrong, which is "
    "worse than being wrong, because nothing that cannot fail can warn anybody. The guidelines we "
    "borrowed this table from were written for development projects and they say plainly that a "
    "matrix filled in for a funder becomes a form rather than a way of thinking, and ours had been "
    "a form for two years. Four days of somebody else's time is what it cost to find the one line "
    "the whole purpose was resting on.</i></p>",
    "Five o'clock. Nine assumptions, six confirmed, one false."), 600)

# ---------------- Unit 6 ----------------
S["pc06-f1"]=lambda: f_icons([("cash","money and people as inputs"),
    ("crane","activities"),("pipe","a finished station as an output"),
    ("water","water at pressure as an outcome"),("spreadsheet","fewer interruptions"),
    ("walkroute","four arrows between five boxes"),("note","an if-then pair"),
    ("quotemark","a theory in one sentence"),("tally","causes of interruption"),
    ("book","a guide from 2004")],4)
S["pc06-f2"]=lambda: f_scene(940,430, people=[("priya",300,172,{}),("nkemelu",395,172,{})],
    props=[("board",110,80,0.76),("desk",250,0,1.2),("note",460,196,0.22),
     ("window",830,56,0.9)],
    board=(690,22,200,118,"FOUR ARROWS",[("sound","1, 2"),("conditional","3"),("false","4")]),
    clockat=(610,44,22,3,20))
S["pc06-f3"]=lambda: f_icons([("cash","inputs"),("crane","activities"),
    ("pipe","an output"),("water","an outcome"),
    ("spreadsheet","an impact"),("worried","the arrow nobody checked")],3)
S["pc06-f4"]=lambda: f_realia(form("Chain planner",
    [("Resources",""),("Activities",""),("Outputs",""),("Outcomes",""),("Impact",""),
     ("The arrow nobody has checked","")],
    note="One if-then sentence under each arrow, and the data that would test it."), 540)
S["pc06-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 6",
    "Project office &middot; the chain of ifs &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> The <b>W. K. Kellogg Foundation</b> published its <i>Logic "
    "Model Development Guide</i> in <b>2004</b>. It is a <b>practical guide for programme planning "
    "and evaluation</b>, written for <b>non-profit programmes</b>, and sets out five boxes read "
    "from left to right: <b>resources &rarr; activities &rarr; outputs &rarr; outcomes &rarr; "
    "impact</b>.</p>"
    "<p><b>Every arrow is an *if &hellip; then*.</b> The guide's point is that the arrows, not the "
    "boxes, carry the argument: <b>the model makes a theory visible so that other people can "
    "disagree with it.</b></p>"
    + table_html(["","The sentence","State"],
      [["<b>1</b>","<b>If</b> we spend 2.70 m and assign 11 people, <b>then</b> we build and "
        "commission the station","sound"],
       ["<b>2</b>","<b>If</b> we commission it, <b>then</b> the station and controls exist and are "
        "accepted","sound"],
       ["<b>3</b>","<b>If</b> the station exists, <b>then</b> pressure is held at the estate",
        "<b>true only with 90,000 of mains work</b>"],
       ["<b>4</b>","<b>If</b> pressure is held, <b>then</b> supply interruptions fall",
        "<b>FALSE as written</b>"]])
    + "<p><b>Arrow four.</b> We looked at the client's own interruption log for three years. "
    "<b>Sixty-one percent of interruptions were bursts on the old mains.</b> Bursts are not caused "
    "by low pressure; if anything, <b>higher pressure makes them slightly more likely</b>. Another "
    "<b>22 percent</b> were planned shutdowns and <b>nine percent</b> were failures at the old "
    "pumping station &mdash; <b>which this project does replace</b>. <b>So the project reduces "
    "about nine percent of the cause and may marginally increase sixty-one percent of it.</b></p>"
    "<p><b>And yet the project should be built.</b> The estate has had <b>no firefighting "
    "pressure</b> since <b>2019</b>. The fire service has written to the client <b>twice</b>, in "
    "<b>2021</b> and <b>2023</b>. <b>That is a real benefit, it is attributable to this project, "
    "and nobody had written it down</b> &mdash; because the chain we had written already looked "
    "complete. <b>A model that looks complete stops people looking.</b></p>"
    "<p><b>What the guide does not do.</b> It is a <b>foundation's practical guide</b> for "
    "programmes, not a project standard. It helps you <b>display</b> a theory and <b>does not test "
    "it</b>; it says plainly that <b>outcomes are often influenced by things outside the "
    "programme's control</b>; and it warns against models that are no more than a <b>list of "
    "activities with arrows added</b>.</p>",
    "Source: W. K. Kellogg Foundation, Logic Model Development Guide: Using Logic Models to Bring "
    "Together Planning, Evaluation, and Action, 2004. It is a practical guide written for "
    "non-profit programme planning and evaluation rather than a project management standard; the "
    "model displays the author's own theory of change and provides no test of it; the guide notes "
    "that outcomes are frequently affected by factors outside the programme's control; and it warns "
    "against models that amount to a list of activities."), 620)
S["pc06-f6"]=lambda: f_realia(tbl("If-then chains", None,
    ["Structure","What it says","Example"],
    [["<b>if &hellip; then</b>","one link in a chain",
      "<b>If</b> the station exists, <b>then</b> pressure is held."],
     ["<b>only if</b>","a necessary condition",
      "Pressure is held <b>only if</b> the mains are replaced."],
     ["<b>provided that</b>","a formal condition","<b>Provided that</b> the mains work is done."],
     ["<b>unless</b>","if not",
      "Interruptions will not fall <b>unless</b> the mains are renewed."],
     ["<b>in which case</b>","&nbsp;","&nbsp;"],
     ["<b>which means that</b>","&nbsp;","&nbsp;"]],
    note="Writing <i>if</i> where you mean <i>only if</i> makes a chain look stronger than it "
    "is."), 640)
S["pc06-f7"]=lambda: f_part("Three years of supply interruptions, by cause",
    [("bursts on the old mains",61,"#5c3b7a"),("planned shutdowns",22,"#4a6b3b"),
     ("old pumping station failures",9,"#b07a1e"),("other",8,"#6b6861")])
S["pc06-f8"]=lambda: f_icons([("cash","inputs"),("crane","activities"),("pipe","an output"),
    ("water","an outcome"),("spreadsheet","an impact"),
    ("worried","an arrow with a question mark")],3)
S["pc06-f9"]=lambda: f_realia(doc("Logic model &middot; arrow four corrected",
    "Five boxes, four arrows, and one sentence replaced",
    table_html(["","The arrow, as a sentence","Tested against"],
      [["<b>1</b>","<b>If</b> 2.70 m and 11 people, <b>then</b> the station is built and "
        "commissioned","the schedule and the cost report"],
       ["<b>2</b>","<b>If</b> it is commissioned, <b>then</b> the station and controls exist and "
        "are accepted","the witness test and handover note"],
       ["<b>3</b>","<b>If</b> the station exists, <b>then</b> pressure is held &mdash; <b>only "
        "if</b> the client's mains work (<b>90,000</b>) is done",
        "the network engineer's confirmation, 9 Mar"],
       ["<b>4</b>","<s><b>If</b> pressure is held, <b>then</b> interruptions fall</s> "
        "<b>FALSE</b>","<b>the client's three-year interruption log</b>"],
       ["<b>4 (new)</b>","<b>If</b> pressure is held, <b>then</b> the estate has <b>firefighting "
        "pressure</b> for the first time since <b>2019</b>",
        "the fire service's letters of 2021 and 2023"]]),
    "<b>The project addresses nine percent of the measured cause and may add slightly to "
    "sixty-one.</b> The new arrow is attributable to this project alone, whereas <i>fewer "
    "interruptions</i> was also claimed by two other projects in the same programme."), 720)
S["pc06-f10"]=lambda: f_scene(960,440, people=[("priya",290,172,{}),
     ("nkemelu",400,176,{"seated":True}),("okonjo",520,172,{})],
    props=[("board",100,78,0.72),("desk",240,0,1.2),("spreadsheet",370,196,0.2),
     ("envelope",460,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,118,"THE LOG",[("bursts","61%"),("shutdowns","22%"),("old station","9%")]),
    clockat=(200,44,22,4,0))
S["pc06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Model 1", None,
        "<p style='line-height:1.9'>If 2.70 m &rarr; build.<br>If build &rarr; station.<br>"
        "If station &rarr; pressure.<br>If pressure &rarr; fewer interruptions.</p>"
        "<p style='color:#6b6861;font-size:13px'>Four arrows, no data source under any of "
        "them.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Model 2", None,
        "<p style='line-height:1.85'>Arrow 1 &mdash; the schedule.<br>Arrow 2 &mdash; the witness "
        "test.<br>Arrow 3 &mdash; <b>only if</b> 90,000 of mains work.<br>"
        "Arrow 4 &mdash; <b>false</b>: 61 percent of interruptions are bursts.<br>"
        "<b>New arrow 4:</b> firefighting pressure, first time since 2019.</p>"), w)[0:3],
    w=960, h=290)
S["pc06-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The case, as submitted", None,
        "<p>The project will reduce supply interruptions at the Ridgeway estate and improve "
        "resilience for the community.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("The case, corrected", None,
        "<p>It addresses the <b>nine percent</b> of interruptions caused by the old pumping "
        "station, and <b>may add slightly</b> to the sixty-one percent caused by bursts.</p>"
        "<p><b>It restores firefighting pressure to an estate that has had none since 2019</b>, "
        "about which the fire service has written twice. <b>Nothing else in the programme restores "
        "it.</b></p>"), w)[0:3],
    w=940, h=280)
S["pc06-f13"]=lambda: f_realia(form("Arrow planner",
    [("The five boxes",""),("Arrow 1, as a sentence",""),("Arrow 2, as a sentence",""),
     ("Arrow 3, as a sentence",""),("Arrow 4, as a sentence",""),
     ("The data that would test each","")]), 540)
S["pc06-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("priya",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("sofia",370,176,{"seated":True}),
     ("oyelaran",445,172,{}),("oskar",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("hanna",910,172,{}),("wei",960,174,{})],
    props=[("desk",95,0,1.1),("board",155,84,0.64),("computer",335,140,0.4),
     ("printer",430,196,0.3),("spreadsheet",548,198,0.2),("table",645,0,1.0),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,215,112,"AS A SENTENCE",[("arrows","4"),("false","1")]),
    clockat=(278,34,22,4,0))
S["pc06-f15"]=lambda: f_chart([("yes, with data",3),("somebody looked",6),
    ("no",11),("there is no last arrow",4),("I do not know",3)])
S["pc06-f16"]=lambda: f_realia(doc("On a desk in March",
    "What was on it at five o'clock",
    "<p><b>A five-box diagram</b> with the fourth arrow crossed out.</p>"
    "<p><b>A three-year interruption log.</b></p>"
    "<p><b>A bar chart</b> showing <b>sixty-one percent</b>.</p>"
    "<p><b>Two letters from a fire service</b>, 2021 and 2023.</p>"
    "<p><b>A note of three sentences.</b> <i>We quoted a false sentence for two years and so did I, "
    "and the log that disproves it takes twenty minutes to read. An arrow drawn between two boxes "
    "cannot be wrong, which is why writing each one out as a full sentence is the whole of this "
    "method and the diagram is just the furniture. The better case was available in 2021 and we did "
    "not find it because our diagram already looked finished.</i></p>",
    "Five o'clock. Nine percent claimed honestly, and a better case found."), 600)
