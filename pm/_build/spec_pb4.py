# -*- coding: utf-8 -*-
"""Throughline Book 2 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 ----------------
S["pb10-f1"]=lambda: f_icons([("folder","six projects under one heading"),
    ("handshake","an output being handed over"),("water","an outcome, afterwards"),
    ("tally","a benefit measured a year later"),("chain","two projects, one control system"),
    ("spreadsheet","four unrelated projects"),("meeting","one board meeting instead of six"),
    ("calendar","a measurement date"),("quotemark","an empty benefit statement"),
    ("book","a standard from 2022")],4)
S["pb10-f2"]=lambda: f_scene(940,430, people=[("nadia",300,172,{}),("oyelaran",400,172,{})],
    props=[("desk",250,0,1.2),("note",460,196,0.24),("folder",530,198,0.26),
     ("window",830,56,0.9)],
    board=(680,22,210,118,"NORTHGATE",[("projects","6"),("real links","2"),("benefits","0")]),
    clockat=(600,44,22,9,20))
S["pb10-f3"]=lambda: f_icons([("handshake","an output"),("water","an outcome"),
    ("tally","a measured benefit"),("chain","a real interdependency"),
    ("folder","a folder of projects"),("badge","a named benefit owner")],3)
S["pb10-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The grouping","Why they are grouped","The real interdependency",
     "The benefit, with a number and a date"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The grouping that is only a folder: ______________________"), 700)
S["pb10-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 10",
    "Project office &middot; what a programme is for &middot; page 1 of 1",
    "<p><b>The standard.</b> <b>ISO 21503</b>, <i>Project, programme and portfolio management "
    "&mdash; Guidance on programme management</i>, dated <b>2022</b>. <b>Second edition</b>, "
    "replacing the <b>2017</b> one. It is <b>guidance</b> and <b>not for certification</b>.</p>"
    + table_html(["Three words it keeps apart","&nbsp;"],
      [["<b>output</b>","the thing a project hands over: a pump station"],
       ["<b>outcome</b>","the change that follows: water reaches the estate at pressure"],
       ["<b>benefit</b>","the measurable good: pressure above the contract minimum, all year"]])
    + "<p><b>Why projects are grouped.</b> The guidance describes a programme as projects managed "
    "together <b>in order to achieve outcomes and benefits the components could not achieve "
    "separately</b>. The words doing the work are <b>could not</b>.</p>"
    + table_html(["Northgate, honestly","&nbsp;"],
      [["component projects","<b>6</b>"],
       ["that share a real interdependency","<b>2</b> (one control system)"],
       ["that have no link except the meeting","<b>4</b>"],
       ["written benefit statements","<b>0</b>"]])
    + "<p><b>Why it was created.</b> <b>Six board papers became one, and six monthly meetings "
    "became one.</b> That is a real saving and a good reason. <b>It is not the reason in the "
    "guidance</b>, and for two years nobody had written the guidance's reason down at all.</p>"
    "<p><b>The benefit, rewritten in one afternoon.</b> Before: <i>better water supply in the "
    "north of the county.</i> After: <i>pressure maintained above the contract minimum at the "
    "Ridgeway estate for twelve consecutive months, measured from twelve months after the last "
    "component closes.</i> <b>Which is 2029.</b></p>"
    "<p><b>The programme will not exist in 2029.</b> So the benefit now carries a <b>named "
    "owner in the client's organization</b>, and that name was the hardest line in the document to "
    "get agreed.</p>"
    "<p><b>What the guidance does not do.</b> It does not say <b>when</b> a group of projects "
    "should be a programme, or how many components it should have. It prescribes <b>no structure, "
    "no roles and no method</b>, gives <b>no way of measuring</b> a benefit, and cannot help with "
    "the real problem: <b>benefits usually arrive after everybody who promised them has gone.</b></p>"
    "<p><b>And the four.</b> They stayed in the folder, with one board paper, because the saving is "
    "genuine. <b>They are now described as a folder and not as a programme.</b></p>",
    "Source: ISO 21503:2022, Project, programme and portfolio management &mdash; Guidance on "
    "programme management, second edition, replacing the 2017 edition. It is guidance, not "
    "requirements, and is not intended for certification: it prescribes no programme structure, "
    "roles, size or method, offers no threshold for when work should be managed as a programme, "
    "and provides no method for measuring benefits."), 620)
S["pb10-f6"]=lambda: f_realia(tbl("Purpose clauses", None,
    ["Structure","What it does","Example"],
    [["<b>to</b> + verb","the simplest purpose",
      "They were grouped <b>to</b> share one control system."],
     ["<b>in order to</b>","a formal purpose","<b>In order to</b> achieve a shared benefit."],
     ["<b>so that</b> + clause","purpose with a new subject",
      "<b>So that</b> the board sees one paper."],
     ["<b>for</b> + noun","purpose as a thing","Grouped <b>for</b> efficiency, not for a benefit."],
     ["<b>so as to</b>","&nbsp;","&nbsp;"],
     ["<b>with the aim of</b>","&nbsp;","&nbsp;"]],
    note="<b>For</b> takes a noun, never a verb: <i>for efficiency</i>, not <i>for to save "
    "time</i>."), 640)
S["pb10-f7"]=lambda: f_part("Six component projects",
    [("share a control system",2,"#4a6b3b"),("share a supplier only",1,"#b07a1e"),
     ("no link at all",3,"#6b6861")])
S["pb10-f8"]=lambda: f_icons([("folder","six boxes, one heading"),
    ("chain","two boxes joined"),("handshake","an output handed over"),
    ("water","an outcome arriving"),("tally","a benefit with a number"),
    ("badge","a named owner elsewhere")],3)
S["pb10-f9"]=lambda: f_realia(tbl("Programme sheet",
    "Six components. Four of them have nothing in the fourth column.",
    ["Component","Output","Outcome it serves","Interdependency","Benefit","Benefit owner"],
    [["North reservoir controls","control system","pressure held at Ridgeway",
      "<b>shared system</b>","pressure benefit","client asset manager"],
     ["Ridgeway pumping station","pump station","pressure held at Ridgeway",
      "<b>shared system</b>","pressure benefit","client asset manager"],
     ["Depot lighting","new lighting","safer yard at night","<b>&mdash;</b>","&mdash;",
      "&mdash;"],
     ["Harbour survey","survey report","informed renewal plan","<b>&mdash;</b>","&mdash;",
      "&mdash;"],
     ["Valve replacements","42 valves","fewer interruptions","<b>&mdash;</b>","&mdash;",
      "&mdash;"],
     ["Depot move","one depot","lower running cost","<b>&mdash;</b>","&mdash;","&mdash;"]],
    note="<b>One real interdependency, one benefit, one name.</b> The other four are a folder "
    "with a shared board paper, and that is worth having."), 740)
S["pb10-f10"]=lambda: f_scene(960,440, people=[("okonjo",290,172,{}),
     ("nadia",400,176,{"seated":True}),("oyelaran",520,172,{})],
    props=[("desk",240,0,1.2),("note",370,196,0.22),("folder",460,198,0.26),
     ("window",850,56,0.88)],
    board=(690,22,200,118,"2029",[("benefit","pressure"),("measured by","client")]),
    clockat=(200,44,22,10,0))
S["pb10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Front page, 2023", None,
        "<p style='font-size:17px'><b>The Northgate Programme</b></p>"
        "<p style='font-size:13px'>North reservoir controls &middot; Ridgeway pumping station "
        "&middot; depot lighting &middot; harbour survey &middot; valve replacements &middot; "
        "depot move</p>"
        "<p><i>Aim: to deliver a better water supply in the north of the county.</i></p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("Front page, revised", None,
        "<p style='font-size:15px'><b>Programme: two projects</b> &mdash; shared control system, "
        "commissioned once. <b>Saving: nine weeks, one mobilization.</b></p>"
        "<p style='font-size:15px'><b>Folder: four projects</b> &mdash; one board paper, no "
        "interdependency.</p>"
        "<p style='font-size:13px'><b>Benefit:</b> pressure above the contract minimum at Ridgeway "
        "for twelve consecutive months, <b>2029</b>. <b>Measured by the client's asset "
        "manager.</b></p>"), w)[0:3],
    w=960, h=300)
S["pb10-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Definition, as written", None,
        "<p>Six projects managed as one programme <b>for</b> improved water supply in the "
        "north.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Definition, rewritten", None,
        "<p>Two projects managed together <b>so that</b> one shared control system is commissioned "
        "<b>once</b> &mdash; nine weeks and one mobilization.</p>"
        "<p>Four grouped <b>for</b> one board paper, described as a <b>folder</b>.</p>"
        "<p><b>Benefit:</b> pressure above the contract minimum at Ridgeway, twelve consecutive "
        "months, <b>2029</b>, measured by a <b>named</b> person in the client's operating plan.</p>"
        ), w)[0:3],
    w=940, h=280)
S["pb10-f13"]=lambda: f_realia(form("Programme planner",
    [("Why it exists",""),("The real interdependency",""),("What it is for",""),
     ("The benefit, as a number",""),("The date it is measured",""),
     ("Whose document the owner's name sits in","")]), 520)
S["pb10-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("okonjo",135,172,{}),("nadia",210,176,{"seated":True}),
     ("oyelaran",290,172,{"seated":True}),("nkemelu",370,176,{"seated":True}),
     ("sofia",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("oskar",910,172,{}),("linh",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("note",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,118,"WHO IN 2029?",[("benefit","pressure"),("owner","client"),
      ("in","their plan")]),
    clockat=(278,34,22,10,0))
S["pb10-f15"]=lambda: f_chart([("a number and a date",4),("a sentence only",9),
    ("nothing written",8),("I do not know",5),("we have no programme",3)])
S["pb10-f16"]=lambda: f_realia(doc("On a desk in July",
    "What was on it at five o'clock",
    "<p><b>The front page.</b> Two linked projects; four in a folder.</p>"
    "<p><b>The client's operating plan</b>, open at a page where <b>one name</b> is written.</p>"
    "<p><b>A benefit sentence</b> ending in <b>2029</b>.</p>"
    "<p><b>A page from a 2022 standard.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The word programme attracts a budget and a sponsor, "
    "which is the real reason folders get called programmes, and nobody doing it is lying. The "
    "guidance asks a harder question instead: name the benefit as a number with a date, and name "
    "the person who will measure it, who is usually in another organization and has to agree. We "
    "lost a budget code and gained one name in somebody else's plan, and in 2029 that name is the "
    "only reason anybody will be able to say whether this worked.</i></p>",
    "Five o'clock. Two projects, nine weeks, and one name in a client's plan."), 600)

# ---------------- Unit 11 ----------------
S["pb11-f1"]=lambda: f_icons([("meeting","a board choosing between proposals"),
    ("spreadsheet","a list of eighteen projects"),("scales","capacity against demand"),
    ("note","a scoring sheet with weights"),("noentry","a project stopped"),
    ("timer","a project postponed"),("star","a strategic objective"),
    ("folder","one manager, five files"),("review","a portfolio review"),
    ("book","a standard from 2022")],4)
S["pb11-f2"]=lambda: f_scene(940,430, people=[("hanna",300,172,{}),("okonjo",400,172,{})],
    props=[("computer",130,138,0.54),("desk",250,0,1.2),("spreadsheet",460,196,0.22),
     ("window",830,56,0.9)],
    board=(690,22,200,118,"NEXT YEAR",[("demand","22"),("capacity","16"),("short","6")]),
    clockat=(610,44,22,11,20))
S["pb11-f3"]=lambda: f_icons([("scales","demand above capacity"),
    ("note","an invented weight"),("noentry","a decision to stop"),
    ("tired","a project that drifted to a halt"),("folder","five files, one manager"),
    ("star","a strategic objective")],3)
S["pb11-f4"]=lambda: f_realia(tbl("Team research", None,
    ["How many projects","How many people","The last one stopped","Why it stopped"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The project everybody knows should stop: ______________________"), 680)
S["pb11-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 11",
    "Project office &middot; what we are not going to do &middot; page 1 of 1",
    "<p><b>The standard.</b> <b>ISO 21504</b>, <i>Project, programme and portfolio management "
    "&mdash; Guidance on portfolio management</i>, dated <b>2022</b>. <b>Second edition</b>, "
    "replacing the <b>2015</b> one. It is <b>guidance</b> and <b>not for certification</b>.</p>"
    "<p><b>What it is about.</b> Not managing projects. <b>Choosing them</b>: selecting and "
    "prioritizing components, <b>balancing</b> the portfolio against <b>capacity</b>, aligning it "
    "with <b>strategic objectives</b>, and deciding whether each component should <b>continue</b> "
    "or <b>stop</b>.</p>"
    + table_html(["The number nobody had calculated","Person-years, next year"],
      [["what the <b>18</b> current projects need","<b>about 22</b>"],
       ["what we <b>have</b>","<b>16</b>"],["<b>shortfall</b>","<b>6</b>"]])
    + "<p>And <b>four</b> further proposals are waiting for the November board.</p>"
    + table_html(["Where the load sits","&nbsp;"],
      [["project managers","<b>11</b>"],["<b>two</b> of them hold","<b>five projects each</b>"],
       ["those ten projects account for","<b>seven of our nine late projects</b>"]])
    + "<p><b>Most of our lateness is in ten projects held by two people.</b> Neither has ever said "
    "they are overloaded, and both would say the same thing if asked today.</p>"
    "<p><b>Three projects in six years.</b> <b>None of the three was stopped at a portfolio "
    "review.</b> All three stopped because the <b>sponsor left</b> and nobody took them over. One "
    "had been running for <b>fourteen months</b> past the point where everybody involved privately "
    "agreed it should end. <b>That is not a portfolio. That is a queue with a leak in it.</b></p>"
    "<p><b>The scoring model.</b> The weights were chosen in <b>2021 by three people in an "
    "afternoon</b> and have not been reviewed. <b>Last year's top-ranked proposal was the one whose "
    "sponsor filled in the form best.</b> The project may well be excellent; <b>the ranking "
    "measured the form.</b></p>"
    "<p><b>What the guidance does not do.</b> It prescribes <b>no selection method, no scoring "
    "model, no weights and no number of components</b>. It says the portfolio should align with "
    "strategic objectives but <b>cannot tell you what yours are</b>. It assumes <b>capacity can be "
    "known</b>. And <b>it offers nothing on the hardest part</b>: the meeting where somebody's "
    "project is stopped while they are in the room.</p>",
    "Source: ISO 21504:2022, Project, programme and portfolio management &mdash; Guidance on "
    "portfolio management, second edition, replacing the 2015 edition. It is guidance, not "
    "requirements, and not intended for certification: it prescribes no selection or "
    "prioritization method, no scoring model or weights, and no portfolio size; it requires "
    "alignment with strategic objectives without defining them; and it offers no guidance on the "
    "organizational consequences of terminating a component."), 620)
S["pb11-f6"]=lambda: f_realia(tbl("Quantifiers", None,
    ["Quantifier","What it goes with","Example"],
    [["<b>most of</b>","+ the + plural","<b>Most of the</b> lateness is in ten projects."],
     ["<b>half of</b>","+ the + plural","<b>Half of the</b> proposals were withdrawn."],
     ["<b>none of</b>","+ the + plural, singular verb",
      "<b>None of the</b> three <b>was</b> stopped on purpose."],
     ["<b>a few</b>","+ plural, no <i>the</i>","<b>A few</b> managers carry most of the load."],
     ["<b>all but two</b>","&nbsp;","&nbsp;"],
     ["<b>each</b>","&nbsp;","&nbsp;"]],
    note="<b>Fewer</b> counts things; <b>less</b> measures quantity: fewer projects, less "
    "capacity."), 640)
S["pb11-f7"]=lambda: f_chart([("manager A",5),("manager B",5),("manager C",2),
    ("manager D",2),("the other seven, between them",4)], unit="projects held")
S["pb11-f8"]=lambda: f_icons([("scales","two bars of unequal height"),
    ("note","a scoring sheet"),("noentry","a project stopped at a meeting"),
    ("tired","a project drifting to a halt"),("folder","five files"),
    ("spreadsheet","a slide with two numbers")],3)
S["pb11-f9"]=lambda: f_realia(tbl("Portfolio sheet",
    "Ten of eighteen components, with next year's demand",
    ["Project","Manager","Person-years","Score","Late","Recommendation"],
    [["Harbour pump station","C. Nkemelu","2.1","74","no","continue"],
     ["Ridgeway pumping","A","1.8","81","<b>yes</b>","continue"],
     ["North reservoir controls","A","1.4","79","<b>yes</b>","continue"],
     ["Depot move","A","1.2","52","<b>yes</b>","<b>defer</b>"],
     ["Valve replacements","A","0.9","61","no","continue"],
     ["Depot lighting","A","0.4","38","<b>yes</b>","<b>stop</b>"],
     ["Harbour survey","B","0.6","44","no","continue"],
     ["Training refresh","B","0.8","31","<b>yes</b>","<b>stop</b>"],
     ["Carbon reporting","B","1.1","57","<b>yes</b>","continue"],
     ["Framework renewal","B","1.5","88","no","continue"]],
    numcols=(2,3),
    note="<b>Total across all eighteen: about 22 person-years against 16 available.</b> Three "
    "recommendations say stop or defer, and none has ever been accepted."), 740)
S["pb11-f10"]=lambda: f_scene(960,440, people=[("hanna",290,172,{}),
     ("okonjo",400,176,{"seated":True}),("nkemelu",520,176,{"seated":True})],
    props=[("computer",120,138,0.5),("desk",240,0,1.2),("spreadsheet",370,196,0.22),
     ("note",460,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,118,"STOPPED",[("in 6 years","3"),("at a review","0")]),
    clockat=(200,44,22,12,0))
S["pb11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Slide 1", None, ["Project","Status"],
      [["Harbour pump station","green"],["Ridgeway pumping","amber"],
       ["North reservoir controls","amber"],["Depot move","amber"],
       ["&hellip; and fourteen more","&nbsp;"]],
      note="Eighteen rows of status. No capacity number anywhere."), w)[0:3],
    lambda w,h: f_realia(doc("Slide 2", None,
        "<p style='font-size:22px'><b>22</b> &nbsp;&nbsp; <b>16</b></p>"
        "<p style='font-size:13px'>person-years needed &nbsp;&middot;&nbsp; available</p>"
        "<p><b>Seven of our nine late projects are held by two of our eleven managers.</b></p>"
        "<p style='font-size:13px'><b>1</b> add capacity &nbsp;<b>2</b> stop something "
        "&nbsp;<b>3</b> be six short on purpose</p>"), w)[0:3],
    w=960, h=280)
S["pb11-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Paper, as written", None,
        "<p>Eighteen projects are in progress. Resources are stretched and the team continues to "
        "prioritize effectively.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Paper, rewritten", None,
        "<p><b>22</b> person-years needed; <b>16</b> available. With the four November proposals, "
        "<b>26</b>.</p>"
        "<p><b>Two of eleven managers hold five each</b>; those ten projects hold <b>seven of nine "
        "late</b>.</p>"
        "<p><b>Three options: add capacity, stop something, or be six short on purpose and minute "
        "it.</b></p>"), w)[0:3],
    w=940, h=270)
S["pb11-f13"]=lambda: f_realia(form("Portfolio planner",
    [("Demand, in person-years",""),("Capacity",""),("Where it is already failing",""),
     ("How projects have actually ended here",""),("Three options",""),
     ("The recommendation","")]), 520)
S["pb11-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("hanna",135,172,{}),("okonjo",210,176,{"seated":True}),
     ("nkemelu",290,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("priya",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("oskar",910,172,{}),("linh",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("folder",548,198,0.24),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"NOT GOING TO DO",[("22","16")]),
    clockat=(278,34,22,12,0))
S["pb11-f15"]=lambda: f_chart([("yes, at a review",2),("yes, but informally",5),
    ("only when a sponsor left",8),("never",9),("I do not know",4)])
S["pb11-f16"]=lambda: f_realia(doc("On a desk in July",
    "What was on it at five o'clock",
    "<p><b>The paper.</b> One page; two numbers at the top.</p>"
    "<p><b>A chart</b> of eleven managers; two of them holding five files each.</p>"
    "<p><b>A 2021 scoring sheet</b>, weights unchanged.</p>"
    "<p><b>A page from a 2022 standard.</b></p>"
    "<p><b>A note of three sentences.</b> <i>Nobody here has ever refused to stop a project; we "
    "have simply never held the meeting where stopping one is on the agenda with a name on it. The "
    "two numbers took me a week to produce and they are the only thing in this paper the board "
    "cannot argue with, which is why the paper is one page. If the board picks option three and "
    "writes it down, I will count that as a success, because being six short on purpose in November "
    "is a different company from being six short by accident in March.</i></p>",
    "Five o'clock. Twenty-two and sixteen, and a third option written down."), 600)

# ---------------- Unit 12 ----------------
S["pb12-f1"]=lambda: f_icons([("chain","a chain of dependent tasks"),
    ("flashcard","three numbers on a card"),("note","a round number on a plan"),
    ("archive","a shelf of finished jobs"),("coins","a percentage added"),
    ("megaphone","ten people, many lines"),("timetable","a block of buffer"),
    ("folder","a plan's contents page"),("calendar","a benefit with a date"),
    ("scales","demand against capacity")],4)
S["pb12-f2"]=lambda: f_scene(920,420, people=[("nkemelu",330,176,{"seated":True})],
    props=[("desk",250,0,1.22),("note",380,196,0.26),("folder",470,198,0.3),
     ("timetable",545,198,0.2),("spreadsheet",610,198,0.18),("window",810,56,0.92)],
    board=(680,22,200,118,"TWO PAGES",[("page 1","numbers"),("page 2","what we do not know")]),
    clockat=(170,44,22,8,20))
S["pb12-f3"]=lambda: f_icons([("chain","the chain in one sentence"),
    ("flashcard","a range with conditions"),("timetable","a buffer and its rule"),
    ("scales","the capacity figure"),("badge","an assumption with a name"),
    ("calendar","a confirmation date")],3)
S["pb12-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The saying","Can it be tested","What it excuses","What to say instead"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The saying we use most often: ______________________"), 680)
S["pb12-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 12",
    "Project office &middot; two pages, and one quotation to be careful of &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> <b>Douglas R. Hofstadter</b> published <i>G&ouml;del, Escher, "
    "Bach: An Eternal Golden Braid</i> with Basic Books in <b>1979</b>. It is a book about "
    "mathematics, music and mind, and in it he states, as a joke about his own work:</p>"
    "<p style='text-align:center;font-size:17px'><b>It always takes longer than you expect, even "
    "when you take into account Hofstadter's Law.</b></p>"
    "<p><b>Why it is true and useless.</b> It is <b>self-referential</b> and therefore <b>cannot be "
    "disproved</b>. If a project overruns, the law is confirmed. If a project finishes early, the "
    "law is not refuted. <b>A statement nothing can contradict tells you nothing about what to do on "
    "Monday</b>, and this one is quoted in meetings as a reason not to try.</p>"
    + table_html(["Source","What it lets you do"],
      [["critical path, <b>1959</b>","find what cannot start until what"],
       ["PERT, <b>1958</b>","give three numbers and a spread"],
       ["Parkinson, <b>1955</b>","split a duration into work and named waiting"],
       ["planning fallacy, <b>1994</b>","ask how long the last four took"],
       ["reference class forecasting, <b>2006</b>","place your project on a distribution"],
       ["optimism bias guidance, <b>2003</b>","start at an upper bound and argue it down"],
       ["Brooks, <b>1975</b>","ask whether two pieces would need to agree"],
       ["critical chain, <b>1997</b>","hold the safety at the end, with a no-blame rule"],
       ["plan content, <b>2019</b>","be told fourteen questions you would not have asked"],
       ["programme guidance, <b>2022</b>","name a benefit, a date and an owner"],
       ["portfolio guidance, <b>2022</b>","put demand and capacity on one slide"]])
    + "<p><b>Every one of those can be wrong</b>, which is what makes them worth having. <b>The "
    "1979 law cannot be wrong, which is what makes it worthless in a plan</b> &mdash; and it is "
    "better written than any of them.</p>"
    + table_html(["The two pages","&nbsp;"],
      [["<b>Page 1</b>","the <b>chain</b> &middot; the <b>range</b> with a condition at each end "
        "&middot; the <b>reference class</b> and its median &middot; the <b>uplift</b> and why it "
        "was reduced &middot; the <b>buffer</b> and the rule about blame &middot; the "
        "<b>capacity</b>"],
       ["<b>Page 2</b>","every <b>assumption</b>, with the <b>name</b> of whoever must confirm it "
        "and the <b>date</b> they will"]])
    + "<p><b>Why page two is the one people read.</b> It has never been longer than <b>eleven "
    "lines</b>. On the first version, <b>four</b> of the eleven had <b>no name</b>; two were "
    "confirmed within a week of somebody being asked, and <b>one turned out to be false</b> &mdash; "
    "the valve lead time. <b>The sixty-one-page plan still exists, is still true, and is read by "
    "nobody.</b></p>",
    "Source: D. R. Hofstadter, G&ouml;del, Escher, Bach: An Eternal Golden Braid, Basic Books, "
    "1979, where the law is stated as a self-referential joke within a book about mathematics and "
    "mind. It is not a study, offers no method and no measurement, and is unfalsifiable by "
    "construction: no observation can contradict it, and it therefore provides no guidance for "
    "action."), 640)
S["pb12-f6"]=lambda: f_realia(tbl("The eleven structures of this book", None,
    ["Unit","Structure","Example"],
    [["1","<i>cannot start until</i>","Wiring <b>cannot start until</b> the panel arrives."],
     ["2","ranges","<b>Between</b> five <b>and</b> eleven weeks."],
     ["3","the zero conditional",
      "<b>If</b> you give it four weeks, it <b>takes</b> four weeks."],
     ["4","reported speech","He <b>said</b> it <b>would</b> take six weeks."],
     ["5","comparatives with data","22 per cent <b>higher than</b> approved."],
     ["6","<i>by</i> and <i>to</i>","It increases <b>by</b> 44 per cent, <b>to</b> 3.46."],
     ["7","<i>the more &hellip; the more</i>","<b>The more</b> people, <b>the more</b> links."],
     ["8","the first conditional","<b>If</b> we cut them, we <b>will</b> need a buffer."],
     ["9","modals for documents","&nbsp;"],
     ["10","purpose clauses","&nbsp;"],
     ["11","quantifiers","&nbsp;"]],
    note="Three rows are empty on purpose."), 640)
S["pb12-f7"]=lambda: f_chart([("confirmed, with a name",6),("named, not yet confirmed",2),
    ("no name at all",1),("found to be false",1),("withdrawn",1)], unit="assumptions")
S["pb12-f8"]=lambda: f_icons([("chain","the chain in one sentence"),
    ("flashcard","a range with conditions"),("scales","a median on a distribution"),
    ("coins","an uplift being reduced"),("timetable","a buffer with a rule"),
    ("badge","an assumption with a name and a date")],3)
S["pb12-f9"]=lambda: f_realia(doc("Plan on two pages &middot; Harbour pump station",
    "Page one is arithmetic. Page two is the deliverable.",
    table_html(["PAGE ONE","&nbsp;"],
      [["<b>1 chain</b>","Commissioning <b>cannot start until</b> the pressure test <b>passes</b> "
        "&mdash; week 19."],
       ["<b>2 range</b>","<b>5</b> at best, <b>7</b> most likely, <b>11</b> at worst if the seals "
        "fail. <b>I would sign 7.</b>"],
       ["<b>3 class</b>","<b>19</b> finished stations, median <b>+22%</b>; excluding two with one "
        "borehole, <b>+12%</b>."],
       ["<b>4 money</b>","<b>2.40 &rarr; by 44% &rarr; to 3.46</b>; reduced <b>to 12%: 2.70</b>. "
        "<b>Not contingency.</b>"],
       ["<b>5 buffer</b>","<b>22</b> weeks of tasks + <b>9</b> weeks of buffer. <b>A missed "
        "fifty-fifty estimate is buffer used, no name.</b>"],
       ["<b>6 capacity</b>","<b>18</b> projects need <b>22</b> person-years; <b>16</b> "
        "available."]])
    + table_html(["PAGE TWO &mdash; what we do not know","Who confirms","By"],
      [["Client engineer on site week 30","<b>S. Marchetti</b>","<b>confirmed 9 July</b>"],
       ["No rock above the chamber base","W. Zhao","<b>confirmed, 4 boreholes</b>"],
       ["Valves four weeks <b>from approval</b>","O. Nasser","<b>confirmed 14 May</b>"],
       ["Drawing 1.2-04 approved week 9","E. Okonjo","<b>not yet</b>"],
       ["Harbour inspector available in June","N. Haddad","<b>not yet</b>"]]),
    "<b>Eleven lines in all; six confirmed.</b> When this page was first written, four lines had no "
    "name at all, and one of them was false: the valve lead time runs from approval, not from "
    "order. <b>That was the five weeks.</b>"), 740)
S["pb12-f10"]=lambda: f_scene(960,440, people=[("nkemelu",300,176,{"seated":True}),
     ("nadia",390,172,{}),("sofia",490,176,{"seated":True})],
    props=[("desk",240,0,1.2),("note",360,196,0.26),("folder",620,198,0.3),
     ("window",850,56,0.86)],
    board=(40,24,215,118,"SOURCES",[("can be wrong","11"),("cannot","1")]),
    clockat=(700,44,22,9,0))
S["pb12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The project file", None,
        "<p><b>Sixty-one pages.</b> Fourteen sections.</p>"
        "<p style='font-size:13px;line-height:1.85'>Scope &middot; Schedule &middot; Cost &middot; "
        "Organization &middot; External dependencies &middot; Risk &middot; Change control &middot; "
        "Measurement &middot; Quality &middot; Decisions &middot; Procurement &middot; "
        "Configuration &middot; Communications &middot; Closure</p>"
        "<p style='color:#6b6861;font-size:13px'>All of it true. Read by nobody.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("The two pages", None,
        "<p style='line-height:1.85'><b>Chain</b> week 19.<br>"
        "<b>Range</b> 5 / 7 / 11; sign 7.<br>"
        "<b>Class</b> 19 stations, +12%.<br>"
        "<b>Money</b> 2.70, not contingency.<br>"
        "<b>Buffer</b> 9 weeks, no name on a miss.<br>"
        "<b>Capacity</b> 22 needed, 16 available.</p>"
        "<p><b>Page two:</b> eleven assumptions, each with a name and a date.</p>"), w)[0:3],
    w=960, h=320)
S["pb12-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Contents page", None,
        "<p style='font-size:13px;line-height:1.9'>1 Introduction &middot; 2 Background &middot; "
        "3 Scope &middot; 4 Schedule &middot; 5 Cost &middot; 6 Organization &middot; "
        "7 Dependencies &middot; 8 Risk &middot; 9 Change &middot; 10 Measurement &middot; "
        "11 Quality &middot; 12 Decisions &middot; 13 Procurement &middot; 14 Closure</p>"
        "<p style='color:#6b6861;font-size:13px'>No names. No dates against anything.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(tbl("Page two", None, ["Assumption","Who","By"],
      [["Client engineer week 30","S. Marchetti","9 Jul &#10003;"],
       ["No rock above chamber base","W. Zhao","&#10003;"],
       ["Valves 4 weeks from approval","O. Nasser","14 May &#10003;"],
       ["Drawing approved week 9","E. Okonjo","not yet"],
       ["Inspector available June","N. Haddad","not yet"]]), w)[0:3],
    w=960, h=280)
S["pb12-f13"]=lambda: f_realia(form("Two-page planner",
    [("1 The chain",""),("2 The range",""),("3 The class",""),("4 The money",""),
     ("5 The buffer",""),("6 The capacity",""),
     ("Page two: assumption, who confirms, by when","")],
    note="One number in every page-one box; one name and one date on every page-two line."), 540)
S["pb12-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("nkemelu",135,172,{}),("nadia",210,176,{"seated":True}),
     ("sofia",290,172,{"seated":True}),("okonjo",370,176,{"seated":True}),
     ("karin",445,172,{}),("oskar",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("hanna",790,172,{}),
     ("junseo",850,170,{}),("priya",910,172,{}),("linh",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("note",548,198,0.2),("table",645,0,1.0),("folder",700,198,0.26),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,215,118,"TWELVE SOURCES",[("checkable","11"),("not","1")]),
    clockat=(278,34,22,9,0))
S["pb12-f15"]=lambda: f_chart([("the chain",3),("the range",4),
    ("the class of finished jobs",11),("the money",2),("the buffer",5),("the capacity",9)])
S["pb12-f16"]=lambda: f_realia(doc("On a desk at the end of the day",
    "Everything this book has been about, in one pile",
    "<p><b>Two signed sheets</b> in the middle.</p>"
    "<p><b>Around them:</b> a network diagram &middot; an estimate card with three numbers &middot; "
    "a duration split into work and waiting &middot; four finished panel durations &middot; a "
    "nineteen-row reference class &middot; a guidance table of percentages &middot; a diagram of "
    "forty-five links &middot; a buffer gauge &middot; a plan contents page &middot; a benefit "
    "sentence ending in 2029 &middot; two bars of unequal height.</p>"
    "<p><b>A note of three sentences.</b> <i>The long plan is still true and still unread, and I "
    "have stopped treating that as a failure of the readers. Everything useful I learned this year "
    "is on two sheets, and the only page anybody argues with is the one that admits what we do not "
    "know. The best-written source in my whole list is the one I took out, because a sentence "
    "nothing can contradict is the most comfortable thing anybody can say at the end of a hard "
    "meeting.</i></p>",
    "Five o'clock. Two pages, eleven assumptions, six names."), 620)
