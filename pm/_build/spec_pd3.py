# -*- coding: utf-8 -*-
"""Throughline Book 4 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 ----------------
S["pd07-f1"]=lambda: f_icons([("review","a spiral drawn outwards"),
    ("dashboard","four activities on one turn"),("scaffolding","a quick prototype"),
    ("proof","a risk retired"),("meeting","a review at the end of a turn"),
    ("cash","a commitment for the next turn"),("tally","cumulative cost"),
    ("noentry","a cycle with no review"),("book","a paper from 1988"),
    ("note","a second paper, 2000")], cols=5)
S["pd07-f2"]=lambda: f_scene(760,380,
    people=[("nkemelu",200,172,{}),("wei",290,170,{})],
    props=[("desk",400,0,1.0),("scaffolding",470,146,0.3),("book",580,150,0.26),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"FOUR TURNS",
      [("with a review","2"),("laps","2")]),
    clockat=(360,34,22,9,40))
S["pd07-f3"]=lambda: f_icons([("clipboard","objectives and alternatives"),
    ("scaffolding","risks and a prototype"),("computer","develop and verify"),
    ("meeting","a review and a commitment"),("noentry","a lap with no decision"),
    ("proof","a risk retired in week three")], cols=3)
S["pd07-f4"]=lambda: f_realia(tbl("Team research","Four frightening questions",
    ["The question","When it will be answered","Cheapest way next week",
     "What being wrong costs then"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the question nobody wants to ask early.</b>"), 660)
S["pd07-f5"]=lambda: f_realia(doc("Lindhurst · project office note 7",
    "Risks first, then round again",
    "<p><b>The document.</b> B. W. Boehm, <i>A Spiral Model of Software Development and "
    "Enhancement</i>, <b>IEEE Computer, May 1988</b>. A <b>risk-driven</b> process model.</p>"
    + table_html(["On every turn","What it means"],
      [["<b>1</b> objectives, alternatives, constraints","what are we trying to do, and how else?"],
       ["<b>2</b> identify and resolve risks","often by building a <b>prototype</b>"],
       ["<b>3</b> develop and verify","the next version of the product"],
       ["<b>4</b> review and commit","somebody funds the next turn"]])
    + "<p>The spiral is drawn outwards because <b>the radius is cumulative cost</b>.</p>"
    "<p style='border:1.5px solid #b07a1e;padding:8px'><b>Cycle one.</b> Could the new controller "
    "read the plant's <b>2004 protocol</b>? <b>Prototyped in week three. It failed. Two days, one "
    "engineer, about 900.</b> The same discovery in <b>month nine</b>, inside a built panel with "
    "the plant shut down, was afterwards costed at <b>about 60,000</b>.</p>"
    + table_html(["Cycle","Risk resolved","Review and commitment"],
      [["1 protocol","<b>yes — failed, cheaply</b>","<b>yes</b>"],
       ["2 loop logic","yes","<b>yes</b>"],
       ["3 graphics","<b>no risk identified</b>","<b>no</b>"],
       ["4 reports","<b>none set</b>","<b>no</b>"]])
    + "<p><b>A turn with no decision at the end is a lap.</b> Two of our four were laps, because "
    "the contract bought the whole scope at signature and left nothing to commit.</p>",
    "Source: B. W. Boehm, A Spiral Model of Software Development and Enhancement, IEEE Computer, "
    "May 1988; with the same author's 2000 paper setting out the model's invariants and naming "
    "processes that use its name without them. The model is written for software development and "
    "enhancement, depends on risk assessment expertise, and its author noted that its steps "
    "required further elaboration and that it fits awkwardly with fixed-price acquisition."), 640)
S["pd07-f6"]=lambda: f_realia(tbl("Word study","Iteration",
    ["Structure","What it says","Example"],
    [["<i>on each pass</i>","what happens every turn","<b>On each pass</b> we rank the risks again."],
     ["<i>each time</i>","the same, more informal",
      "<b>Each time</b>, somebody funds the next turn."],
     ["<i>at the end of every cycle</i>","fixes the moment",
      "<b>At the end of every cycle</b> there is a review."],
     ["<i>until</i>","when the repetition stops",
      "We go round <b>until</b> the risks are small enough."],
     ["<i>successively</i>","",""],["<i>round again</i>","",""]],
    note="Two rows left empty on purpose. <b>Without <i>until</i>, a description of iteration has "
    "no stopping rule.</b>"), 640)
S["pd07-f7"]=lambda: f_chart([("a prototype in week 3",900),("a bench test in month 4",4200),
    ("a factory test in month 7",17000),("inside the built panel, month 9",60000)],
    unit="cost")
S["pd07-f8"]=lambda: f_icons([("review","a spiral"),("dashboard","four activities"),
    ("scaffolding","a prototype"),("meeting","a review and a decision"),
    ("noentry","a lap"),("proof","a risk retired")], cols=3, numbered=False)
S["pd07-f9"]=lambda: f_realia(tbl("Cycle record · control system",
    "Four turns, two of them laps",
    ["Cycle","Objective","Risk resolved","Verified","Review and commitment"],
    [["1 protocol","can the controller read the 2004 protocol?",
      "<b>yes — week 3, failed, 900</b>","yes","<b>yes</b>"],
     ["2 loop logic","can the field wiring carry the new loops?","yes — 14 loops bench-tested",
      "yes","<b>yes</b>"],
     ["3 graphics","build the operator screens","<b>no risk identified</b>","yes","<b>no</b>"],
     ["4 reports","build the reporting set","<b>none set</b>","yes","<b>no</b>"]],
    note="<b>Two cycles and two laps.</b>"), 700)
S["pd07-f10"]=lambda: f_scene(860,400,
    people=[("nkemelu",110,174,{}),("okonjo",320,176,{"seated":True}),
     ("wei",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("scaffolding",250,146,0.28),("invoice",360,150,0.26),
     ("spreadsheet",520,150,0.24),("shelf",760,92,0.5)],
    board=(40,18,230,120,"ONE QUESTION, TWO PRICES",
      [("week 3","900"),("month 9","60,000")]),
    clockat=(700,34,22,10,0))
S["pd07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Plan A","Design and build",
      "<p>One sequence. The protocol question is answered in <b>month nine</b>, inside the built "
      "panel, with the plant shut down.</p>"), 380),
    lambda w,h: f_realia(doc("Plan B","Four turns",
      "<p>The protocol first. Each turn ends with a review. <b>The frightening question is "
      "answered in week three, for 900.</b></p>"), 380),
    w=820, h=300, lt="MONTH NINE", rt="WEEK THREE")
S["pd07-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Record A","Four deliverables",
      "<p>Protocol driver. Loop logic. Graphics. Reports. All delivered.</p>"
      "<p style='font-size:12px;color:#6b6861'>Reads as a report.</p>"), 380),
    lambda w,h: f_realia(doc("Record B","Four turns, two laps",
      "<p>Each with the risk resolved, the verification, and whether anybody committed to the "
      "next turn. <b>Two rows say no.</b></p>"
      "<p style='font-size:12px;color:#6b6861'>Reads as a method.</p>"), 380),
    w=820, h=300, lt="DELIVERABLES", rt="DECISIONS")
S["pd07-f13"]=lambda: f_realia(form("Cycle planner",
    [("The objective of the turn",""),("The risk to be resolved",""),
     ("What will be built to resolve it",""),("How it will be verified",""),
     ("Who reviews it",""),("What they commit to","")],
    note="Six boxes. Hand it to a partner; they ask what happens at the end of the turn."), 560)
S["pd07-f14"]=lambda: f_scene(1000,450,
    people=[("nkemelu",60,176,{}),("wei",135,172,{}),("okonjo",210,176,{"seated":True}),
     ("anders",290,172,{"seated":True}),("hana",370,176,{"seated":True}),
     ("sofia",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("scaffolding",548,196,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"THE SAME QUESTION",
      [("week 3","900"),("month 9","60,000")]),
    clockat=(278,34,22,10,0))
S["pd07-f15"]=lambda: f_chart([("in the first month",4),("in the first quarter",7),
    ("halfway through",6),("near the end",11),("it has never been asked",5)])
S["pd07-f16"]=lambda: f_realia(doc("On a desk in July",
    "What was on it at five o'clock",
    "<p><b>A four-turn spiral</b>, two turns marked with a review.</p>"
    "<p><b>A failed prototype board.</b></p>"
    "<p><b>An invoice for 900</b> and <b>a costing sheet for 60,000</b>.</p>"
    "<p><b>A journal from 1988</b> and <b>a paper from 2000</b>.</p>"
    "<p><b>A note of three sentences.</b> <i>The ordering is the whole of the method and it is "
    "free: the frightening question first, answered as cheaply as possible, which bought us "
    "fifty-nine thousand in week three and a failed prototype I had to defend to a sponsor. Two of "
    "our four turns were laps, not because anybody lacked discipline but because a fixed-price "
    "contract leaves nothing to decide at the end of a turn, which the author said himself in "
    "1988. If we want the rest of the model we have to price two exploratory turns separately in "
    "the next bid, and nine hundred against sixty thousand is an argument a client can "
    "follow.</i></p>",
    "Five o'clock. Two cycles, two laps, and one question with two prices."), 620)

# ---------------- Unit 8 ----------------
S["pd08-f1"]=lambda: f_icons([("meeting","a team from outside"),("timetable","six review points"),
    ("interview","an interview"),("folder","documents handed over"),
    ("trafficlights","delivery confidence"),("danger","do now"),("deadline","do by"),
    ("note","recommended"),("envelope","a sealed report"),
    ("student","a manager with no copy")], cols=5)
S["pd08-f2"]=lambda: f_scene(760,380,
    people=[("hana",170,172,{}),("nkemelu",250,170,{}),("okonjo",330,174,{"seated":True})],
    props=[("table",400,0,1.0),("folder",470,150,0.28),("envelope",580,152,0.24),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"THE REVIEW",
      [("from outside","3"),("sealed to","1")]),
    clockat=(360,34,22,9,0))
S["pd08-f3"]=lambda: f_icons([("barrier","a review point before the money"),
    ("meeting","an independent team"),("interview","fourteen interviews"),
    ("folder","forty-one documents, ours"),("trafficlights","a confidence rating"),
    ("clipboard","three bands")], cols=3)
S["pd08-f4"]=lambda: f_realia(tbl("Team research","Four days inside your project",
    ["Documents we would send","Documents we would leave out","People we would offer",
     "People we would not"],
    [["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>what the review would therefore not see.</b>"), 660)
S["pd08-f5"]=lambda: f_realia(doc("Lindhurst · project office note 8",
    "The four days in March",
    "<p><b>The process.</b> A <b>gateway review</b> process published by a government commerce "
    "office in <b>2007</b> and now operated by that country's infrastructure and projects "
    "authority. <b>Six review points, 0 to 5</b>, each held <b>before</b> a decision.</p>"
    + table_html(["Point","What is reviewed"],
      [["<b>0</b>","strategic assessment"],["<b>1</b>","business justification"],
       ["<b>2</b>","delivery strategy, including procurement"],
       ["<b>3</b>","<b>the investment decision</b>"],["<b>4</b>","readiness for service"],
       ["<b>5</b>","operations and benefits"]])
    + "<p><b>We were reviewed at point 3</b>, four weeks before the contract was to be signed.</p>"
    + table_html(["Band","Meaning","Ours"],
      [["<b>critical — do now</b>","before anything else proceeds","<b>2</b>"],
       ["<b>essential — do by</b>","by a stated date","<b>5</b>"],
       ["<b>recommended</b>","worth doing; no date","<b>4</b>"]])
    + "<p><b>Rating: amber.</b> Deliverable, with significant issues requiring management "
    "attention.</p>"
    "<p style='border:1.5px solid #b07a1e;padding:8px'><b>What the review saw.</b> <b>4 days. 14 "
    "interviews of 61 people. 41 documents — which we selected. 0 site visits.</b> Nobody "
    "lied, and nobody sent the supplier performance file either.</p>"
    "<p><b>What it did.</b> A reviewer <b>on her third day</b> found that we were about to buy "
    "against a <b>2021 specification</b> with <b>three interfaces that no longer exist</b>. Eleven "
    "of us had worked on it for two years.</p>",
    "Source: the gateway review process published by a government commerce office in 2007 and now "
    "operated by that country's infrastructure and projects authority. The process describes itself "
    "as a short, independent, confidential review held at defined points before key decisions; its "
    "reports are addressed to the senior responsible owner; the review team recommends and holds no "
    "decision-making authority; and each review is a point-in-time assessment based on the "
    "documents made available and the interviews conducted in the review period."), 640)
S["pd08-f6"]=lambda: f_realia(tbl("Word study","Strength of recommendation",
    ["Phrase","Strength","Example"],
    [["<i>it is critical that</i>","strongest; before anything else",
      "<b>It is critical that</b> an owner is named for the benefits."],
     ["<i>the project must not proceed until</i>","a bar, not advice",
      "<b>The project must not proceed until</b> the specification is reissued."],
     ["<i>it is essential that</i>","strong, with a date",
      "<b>It is essential that</b> the interfaces are re-checked <b>by 14 April</b>."],
     ["<i>we recommend that</i>","ordinary strength",
      "<b>We recommend that</b> the registers are merged."],
     ["<i>consideration should be given to</i>","",""],["<i>it would be advisable to</i>","",""]],
    note="Two rows left empty on purpose. <b>A date is what turns advice into an obligation.</b>"),
    640)
S["pd08-f7"]=lambda: f_chart([("days on site",4),("people interviewed (of 61)",14),
    ("documents read, selected by us",41),("site visits (of 3 sites)",0)], unit="count")
S["pd08-f8"]=lambda: f_icons([("barrier","a review point"),("meeting","an independent team"),
    ("interview","an interview"),("envelope","a confidential report"),
    ("trafficlights","a rating"),("clipboard","three bands")], cols=3, numbered=False)
S["pd08-f9"]=lambda: f_realia(tbl("Recommendation list · point 3",
    "Rating: amber · eleven recommendations in three bands",
    ["#","Recommendation","Band","Date"],
    [["1","name an owner for the benefits before handover","<b>critical</b>","—"],
     ["2","do not proceed to contract until the 2021 specification is reissued","<b>critical</b>",
      "—"],
     ["3","re-check the three missing interfaces","<b>essential</b>","<b>14 April</b>"],
     ["4","reissue the operating concept","<b>essential</b>","<b>28 April</b>"],
     ["5","confirm the commissioning window with the plant","<b>essential</b>","<b>6 May</b>"],
     ["6","agree the acceptance criteria in writing","<b>essential</b>","<b>13 May</b>"],
     ["7","appoint a second signatory for change","<b>essential</b>","<b>20 May</b>"],
     ["8","merge the two risk registers","recommended","—"],
     ["9","shorten the monthly report","recommended","—"],
     ["10","publish the schedule assumptions","recommended","—"],
     ["11","review the training plan","recommended","—"]],
    note="<b>Report issued to the senior responsible owner.</b>"), 700)
S["pd08-f10"]=lambda: f_scene(860,400,
    people=[("anders",110,174,{}),("hana",320,176,{"seated":True}),
     ("okonjo",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("clipboard",250,148,0.26),("envelope",350,150,0.24),
     ("folder",520,150,0.26),("shelf",760,92,0.5)],
    board=(40,18,230,120,"ELEVEN",[("critical","2"),("essential","5")]),
    clockat=(700,34,22,2,30))
S["pd08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("List A","Eleven items",
      "<p>No bands. No dates. In the order they came up in the closing meeting.</p>"
      "<p style='font-size:12px;color:#6b6861'>A sponsor cannot tell what to do first.</p>"), 380),
    lambda w,h: f_realia(doc("List B","Three bands",
      "<p><b>2 critical. 5 essential, each with a date. 4 recommended.</b></p>"
      "<p style='font-size:12px;color:#6b6861'>The grading is the report, for our purposes.</p>"),
      380),
    w=820, h=300, lt="UNGRADED", rt="GRADED")
S["pd08-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A","The review went well",
      "<p><i>The review was positive and the rating was amber.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>In two years, only the word <i>amber</i> survives."
      "</p>"), 380),
    lambda w,h: f_realia(doc("Note B","Rating with its evidence base",
      "<p><b>Amber.</b> 11 recommendations in three bands. <b>4 days, 14 of 61 people, 41 "
      "documents selected by us, no site visits.</b> The operating model was outside the terms of "
      "reference, which we wrote.</p>"), 380),
    w=820, h=300, lt="A RATING", rt="A RATING THAT TRAVELS")
S["pd08-f13"]=lambda: f_realia(form("Review planner",
    [("The rating",""),("Recommendations by band",""),("Days on site",""),
     ("Who was interviewed, and who chose them",""),
     ("Which documents were sent, and who selected them",""),
     ("What was outside the terms of reference","")],
    note="Six boxes. Hand it to a partner; they ask what the review did not see."), 560)
S["pd08-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("ida",135,172,{}),("oskar",210,176,{}),
     ("nkemelu",290,172,{"seated":True}),("okonjo",370,176,{"seated":True}),
     ("anders",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("envelope",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"TWO, FIVE, FOUR",
      [("critical","2"),("essential","5")]),
    clockat=(278,34,22,2,30))
S["pd08-f15"]=lambda: f_chart([("an internal audit team",6),("a project office",8),
    ("the client",5),("an external reviewer",4),("nobody at all",12)])
S["pd08-f16"]=lambda: f_realia(doc("On a desk in March",
    "What was on it at six o'clock",
    "<p><b>A recommendation list</b> in three blocks.</p>"
    "<p><b>A sealed envelope</b>, addressed to the sponsor.</p>"
    "<p><b>A 2021 specification</b> with three interfaces circled.</p>"
    "<p><b>A sheet reading 14 of 61.</b></p>"
    "<p><b>An unopened supplier performance file.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The instrument worked, and what made it work was its "
    "placement rather than its depth: four days of outside attention before the money, instead of "
    "an audit after it. Our document set was assembled by us, the operating model was outside terms "
    "of reference that we wrote, and the supplier performance file sat in a drawer, so the silence "
    "in that report is largely ours. Next time we send the file we would not choose, and I would "
    "like to read the report about my own project, which I am told I may not.</i></p>",
    "Six o'clock. Four days, three outsiders, one decision changed."), 620)

# ---------------- Unit 9 ----------------
S["pd09-f1"]=lambda: f_icons([("barrier","a gate"),("proof","a yes-or-no checklist"),
    ("scales","a weighted scoring sheet"),("handshake","go"),("noentry","kill"),
    ("timer","hold"),("container","a deliverable"),("form","a gate with no criteria"),
    ("tally","31 passes, 0 stops"),("flipchart","four new questions")], cols=5)
S["pd09-f2"]=lambda: f_scene(760,380,
    people=[("nkemelu",200,172,{}),("anders",290,170,{})],
    props=[("desk",400,0,1.0),("spreadsheet",470,148,0.26),("flipchart",580,142,0.3),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"FOUR YEARS AT GATE 3",
      [("reviewed","31"),("stopped","0")]),
    clockat=(360,34,22,11,15))
S["pd09-f3"]=lambda: f_icons([("proof","a yes-or-no checklist"),
    ("scales","a weighted scoring sheet"),("trafficlights","go, kill or hold"),
    ("container","the deliverables"),("star","a threshold"),
    ("barrier","a tollgate where all pass")], cols=3)
S["pd09-f4"]=lambda: f_realia(tbl("Team research","Four must-meet questions",
    ["The question","Who answers it","The document that proves it","How many would fail it"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the question we would not dare to ask.</b>"), 660)
S["pd09-f5"]=lambda: f_realia(doc("Lindhurst · project office note 9",
    "What a gate is for",
    "<p><b>The article.</b> R. G. Cooper, <i>Stage-Gate Systems: A New Tool for Managing New "
    "Products</i>, <b>Business Horizons, May–June 1990</b>.</p>"
    + table_html(["Kind of criterion","How it is answered","What it can do"],
      [["<b>must-meet</b>","<b>yes or no</b>","<b>any single no stops the project</b>"],
       ["<b>should-meet</b>","scored and weighted","a total against a threshold"]])
    + "<p><b>Our gate three, as it stood: 14 criteria, all should-meet. Zero must-meet.</b></p>"
    + table_html(["Four years at gate 3","Count"],
      [["projects reviewed","<b>31</b>"],["go","<b>31</b>"],["hold","0"],["recycle","0"],
       ["<b>kill</b>","<b>0</b>"]])
    + "<p><b>With no must-meet criterion there is no arithmetic that produces a stop.</b> A total "
    "can be low and still be a total.</p>"
    + table_html(["The four we added","Answered yes or no, from a document"],
      [["<b>1</b>","named sponsor, budget confirmed <b>in writing</b>?"],
       ["<b>2</b>","specification <b>less than two years old</b>?"],
       ["<b>3</b>","<b>operating owner</b> agreed in writing to accept it?"],
       ["<b>4</b>","<b>one person named</b> for the benefits?"]])
    + "<p><b>Of the next eleven: 9 go, 2 stopped</b> — one on criterion 2, one on criterion 3. "
    "<b>The second was mine.</b></p>",
    "Source: R. G. Cooper, Stage-Gate Systems: A New Tool for Managing New Products, Business "
    "Horizons, May–June 1990. The article is a practitioner account addressed to new product "
    "development and argues for the system it describes rather than reporting a controlled trial; "
    "its gates depend on decision-makers who are willing and able to kill projects, a condition the "
    "system itself cannot create. The author has subsequently written about the degeneration of "
    "gates into tollgates."), 640)
S["pd09-f6"]=lambda: f_realia(tbl("Word study","Criteria and conditions",
    ["Structure","What it does","Example"],
    [["<i>all of the following</i>","makes a list compulsory",
      "The project must meet <b>all of the following</b>."],
     ["<i>any one of which</i>","makes a single failure fatal",
      "Four criteria, <b>any one of which</b> stops the project."],
     ["<i>unless</i>","names the exception",
      "No project proceeds <b>unless</b> the owner has agreed."],
     ["<i>provided that</i>","names the condition",
      "It may proceed <b>provided that</b> the specification is current."],
     ["<i>fails to meet</i>","",""],["<i>at least</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pd09-f7"]=lambda: f_part("The same gate, before and after",
    [("four years: 31 reviewed, 31 passed",31,"#b07a1e"),
     ("after the change: 9 passed",9,"#4a6b3b"),
     ("after the change: 2 stopped",2,"#7a3b2f")])
S["pd09-f8"]=lambda: f_icons([("barrier","a gate"),("proof","a checklist"),
    ("scales","a weighted score"),("noentry","a kill decision"),("timer","a hold decision"),
    ("form","a tollgate")], cols=3, numbered=False)
S["pd09-f9"]=lambda: f_realia(tbl("Gate three record · project 42",
    "Decision: hold · fails must-meet criterion 3",
    ["#","Must-meet criterion","Answer","Evidence"],
    [["1","named sponsor, budget confirmed in writing","<b>yes</b>","memo, 3 Feb"],
     ["2","specification less than two years old","<b>yes</b>","issued November last year"],
     ["3","<b>operating owner has agreed in writing</b>","<b>no</b>","<b>no document exists</b>"],
     ["4","one person named for the benefits","<b>yes</b>","named in the case"]],
    note="<b>Should-meet total 71, threshold 60. The score is not what stopped it.</b>"), 680)
S["pd09-f10"]=lambda: f_scene(860,400,
    people=[("anders",110,174,{}),("wei",320,176,{"seated":True}),
     ("okonjo",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("clipboard",250,148,0.26),("spreadsheet",350,148,0.24),
     ("folder",520,150,0.26),("shelf",760,92,0.5)],
    board=(40,18,230,120,"GATE 3",[("reviewed","31"),("stopped","0")]),
    clockat=(700,34,22,11,15))
S["pd09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Sheet A","Fourteen scored criteria",
      "<p>Each scored 1–10, weighted, totalled against a threshold of 60.</p>"
      "<p style='font-size:12px;color:#6b6861'>A 2021 specification scores badly and still "
      "passes.</p>"), 380),
    lambda w,h: f_realia(doc("Sheet B","Four questions above the fourteen",
      "<p>Yes or no, <b>any one of which</b> is sufficient to stop the project.</p>"
      "<p style='font-size:12px;color:#6b6861'>A 2021 specification fails criterion 2.</p>"), 380),
    w=820, h=300, lt="RANKS", rt="REFUSES")
S["pd09-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Record A","Fourteen criteria, total 71, go",
      "<p>No criterion in the sheet can produce the word <i>no</i>.</p>"), 380),
    lambda w,h: f_realia(doc("Record B","Four above, one marked no, hold",
      "<p><b>Decision: hold.</b> Condition for go: a written acceptance from the operating owner. "
      "<b>Three weeks.</b></p>"), 380),
    w=820, h=300, lt="GO", rt="HOLD")
S["pd09-f13"]=lambda: f_realia(form("Gate planner",
    [("Four must-meet criteria, and the document that proves each",""),
     ("The should-meet total and threshold",""),("The decision",""),
     ("The criterion that failed",""),("The condition for go",""),
     ("The cost of discovering it later","")],
    note="Six boxes. Hand it to a partner; they ask which single answer could stop it."), 560)
S["pd09-f14"]=lambda: f_scene(1000,450,
    people=[("nkemelu",60,176,{}),("anders",135,172,{}),("okonjo",210,176,{"seated":True}),
     ("hana",290,172,{"seated":True}),("wei",370,176,{"seated":True}),
     ("sofia",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("flipchart",548,190,0.22),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"ANY ONE OF WHICH",
      [("reviewed","31"),("stopped","0")]),
    clockat=(278,34,22,11,15))
S["pd09-f15"]=lambda: f_chart([("more than once",3),("once",5),("never",14),
    ("we have no gates",6),("I do not know",5)])
S["pd09-f16"]=lambda: f_realia(doc("On a desk in May",
    "What was on it at seven o'clock",
    "<p><b>A gate record</b> with four yes-or-no criteria, one marked no.</p>"
    "<p><b>A scoring sheet totalling 71</b>, threshold 60.</p>"
    "<p><b>A wall chart reading 31 and 0.</b></p>"
    "<p><b>A specification dated 2021.</b></p>"
    "<p><b>A journal from 1990.</b></p>"
    "<p><b>A note of three sentences.</b> <i>A gate that cannot produce the word no is a review "
    "meeting with a stronger name, and ours was one for four years without anybody deciding that it "
    "should be. The scoring sheet was not the problem: scoring ranks projects well and refuses "
    "nothing, and we had simply built half of what the 1990 article describes. I wrote the "
    "criterion that stopped my own project, which cost me an unpleasant week and is the only reason "
    "anybody accepted the other three.</i></p>",
    "Seven o'clock. Thirty-one of thirty-one, then nine of eleven."), 620)
