# -*- coding: utf-8 -*-
"""Throughline Book 5 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 ----------------
S["pe10-f1"]=lambda: f_icons([("pipe","a pumping station"),("folder","an organizational plan"),
    ("clipboard","a strategic asset management plan"),("clipboard","a set of objectives"),
    ("timetable","a plan of actions"),("boiler","a maintenance crew at work"),
    ("badge","a condition grade"),("odometer","an energy meter"),
    ("noentry","a broken link"),("railings","a handrail being fitted")], cols=5)
S["pe10-f2"]=lambda: f_scene(760,380,
    people=[("priya",200,172,{}),("sofia",290,170,{})],
    props=[("desk",400,0,1.0),("folder",470,150,0.24),("clipboard",570,150,0.24),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"FOUR LEVELS",
      [("actions","31"),("reach the top","4")]),
    clockat=(360,34,22,1,10))
S["pe10-f3"]=lambda: f_icons([("folder","the organizational plan"),
    ("clipboard","the strategic plan"),("inventory","the objectives"),
    ("timetable","the actions"),("chain","a complete chain"),
    ("noentry","a chain with two links missing")], cols=3)
S["pe10-f4"]=lambda: f_realia(tbl("Team research","Four actions up the chain",
    ["The action","The objective it serves","The plan that objective serves",
     "Where the chain stops"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the work that serves something nobody wrote down.</b>"), 660)
S["pe10-f5"]=lambda: f_realia(doc("Lindhurst · benefits note 10",
    "The Calder station, two years after handover",
    "<p><b>The standard.</b> <b>ISO 55000:2014</b>, <i>Asset management — Overview, principles "
    "and terminology</i>. It provides the <b>overview, the principles and the vocabulary</b>; the "
    "requirements sit in a companion standard. Its four fundamentals are <b>value, alignment, "
    "leadership</b> and <b>assurance</b>.</p>"
    + table_html(["Level","Ours says"],
      [["<b>organizational plan</b>","<b>reduce unplanned interruptions by 30 % by 2030</b>"],
       ["strategic asset management plan","maintain the asset base in a serviceable condition"],
       ["<b>asset management objective</b>","<b>condition grade 2 or better on 98 % of assets</b>"],
       ["<b>asset management plan</b>","<b>replace pumps on a 12-year cycle</b>"]])
    + table_html(["Break","Why"],
      [["<b>objective ↛ plan</b>","<b>a condition grade is not an interruption.</b> A grade 2 "
        "asset can fail in service; a grade 3 asset may run for a decade"],
       ["<b>action ↛ objective</b>","<b>a 12-year cycle does not improve a condition grade.</b> "
        "It replaces good pumps and keeps bad ones until their year"]])
    + table_html(["Thirty-one actions, traced upwards",""],
      [["Trace to an <b>objective</b>","<b>9</b>"],
       ["Trace to the <b>organizational plan</b>","<b>4</b>"],
       ["Trace to <b>nothing written down</b>","<b>22</b>"]])
    + "<p style='border:1.5px solid #2f6b6b;padding:8px'><b>The twenty-two are not waste.</b> Two of "
    "them are obviously right. <b>A handrail on the inlet chamber stair</b> appears in no plan at any "
    "level and <b>should be fitted this month</b>. <b>Traceability is a test of our writing, not of "
    "the value of the work.</b> The finding is not <i>stop the twenty-two</i> but <b>we cannot tell "
    "which of the twenty-two are the handrail and which are habit.</b></p>"
    "<p><b>The benefit nobody records.</b> In year one we chose the dearer pump <b>because it uses "
    "less energy</b>. <b>There is no energy objective anywhere in the asset management plan.</b> "
    "<b>Metered over eleven months: 38 percent below the option we did not buy, about 84 a year.</b> "
    "<b>It has an owner now, because it has me.</b></p>",
    "Source: ISO 55000:2014, Asset management — Overview, principles and terminology. The "
    "standard provides an overview of asset management, its principles — value, alignment, "
    "leadership and assurance — and its vocabulary; requirements are specified in a separate "
    "standard. It does not specify financial, accounting or technical requirements for managing "
    "specific asset types and prescribes no intervention, replacement or condition-assessment "
    "method."), 640)
S["pe10-f6"]=lambda: f_realia(tbl("Word study","Chains of derivation",
    ["Structure","What it does","Example"],
    [["<i>flows from</i>","links a level to the one above",
      "The objective <b>flows from</b> the organizational plan."],
     ["<i>is derived from</i>","states the origin formally",
      "The action <b>is derived from</b> the objective."],
     ["<i>in support of</i>","states the purpose",
      "Fitted <b>in support of</b> the safety objective."],
     ["<i>which in turn</i>","continues the chain",
      "…the objective, <b>which in turn</b> serves the plan."],
     ["<i>is aligned with</i>","",""],["<i>traceable to</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pe10-f7"]=lambda: f_part("Thirty-one actions in the plan",
    [("traceable to the organizational plan",4,"#4a6b3b"),
     ("traceable to an objective only",5,"#2f6b6b"),
     ("traceable to nothing written down",22,"#b07a1e")])
S["pe10-f8"]=lambda: f_icons([("folder","an organizational plan"),("inventory","an objective"),
    ("timetable","an action"),("badge","a condition grade"),
    ("odometer","an energy meter"),("railings","a handrail")], cols=3, numbered=False)
S["pe10-f9"]=lambda: f_realia(tbl("Traceability sheet · Calder station",
    "Thirty-one actions · extract of ten",
    ["Action","Derived from","Flows to","Status"],
    [["replace pumps, 12-year cycle","—","—","<b>none</b>"],
     ["record condition grades annually","condition objective","—","partial"],
     ["replace failed valve seats","condition objective","interruption target","<b>complete</b>"],
     ["clean wet well quarterly","—","—","<b>none</b>"],
     ["test standby generator monthly","condition objective","interruption target","<b>complete</b>"],
     ["repaint inlet screens","—","—","<b>none</b>"],
     ["replace telemetry batteries","condition objective","interruption target","<b>complete</b>"],
     ["<b>fit handrail, inlet chamber stair</b>","<b>—</b>","<b>—</b>","<b>none</b>"],
     ["calibrate flow meters","condition objective","—","partial"],
     ["review pump curves","—","interruption target","<b>complete</b>"]],
    note="<b>Energy: metered 38 percent below the option not bought, about 84 a year. No objective "
    "refers to it.</b>"), 700)
S["pe10-f10"]=lambda: f_scene(860,400,
    people=[("priya",110,174,{}),("sofia",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("folder",250,148,0.24),("clipboard",360,148,0.24),
     ("odometer",520,150,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"HOW FAR UP",[("actions","31"),("to the top","4")]),
    clockat=(700,34,22,1,30))
S["pe10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Plan A","Thirty-one actions",
      "<p>A list of actions with frequencies. No objective column.</p>"
      "<p style='font-size:12px;color:#6b6861'>Every one of them sensible.</p>"), 380),
    lambda w,h: f_realia(doc("Plan B","The same actions, traced",
      "<p>Each action with the objective it is derived from, the plan it flows to, and a status: "
      "<b>complete, partial or none</b>.</p>"), 380),
    w=820, h=300, lt="A LIST", rt="A CHAIN")
S["pe10-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A","Aligned",
      "<p><i>The asset management plan is aligned with the organizational objectives.</i></p>"),
      380),
    lambda w,h: f_realia(doc("Note B","Two breaks named",
      "<p><b>4 of 31 traceable to the top. The objective does not flow from the plan; the action is "
      "not derived from the objective.</b> And a metered benefit of <b>38 percent</b> with no "
      "objective at all.</p>"), 380),
    w=820, h=300, lt="ALIGNED", rt="DERIVED")
S["pe10-f13"]=lambda: f_realia(form("Traceability planner",
    [("The action",""),("The objective it is derived from",""),("The plan that flows to",""),
     ("Where the chain breaks",""),("The benefit claimed in the business case",""),
     ("Who measures it now","")],
    note="Six boxes. Hand it to a partner; they ask who measures the benefit."), 560)
S["pe10-f14"]=lambda: f_scene(1000,450,
    people=[("priya",60,176,{}),("sofia",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("anders",290,172,{"seated":True}),("hana",370,176,{"seated":True}),
     ("okonjo",445,172,{}),("oksana",520,176,{"seated":True}),("lars",595,170,{}),
     ("wei",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("odometer",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"HOW FAR UP",[("actions","31"),("to the top","4")]),
    clockat=(278,34,22,1,30))
S["pe10-f15"]=lambda: f_chart([("yes, exactly",3),("roughly",11),("no",9),
    ("we have no written objectives",5),("the objective was withdrawn",2)])
S["pe10-f16"]=lambda: f_realia(doc("On a desk in May",
    "What was on it at six o'clock",
    "<p><b>Four plan documents</b> in a stack.</p>"
    "<p><b>A four-box chain</b> with two links marked broken.</p>"
    "<p><b>An energy meter log</b> covering eleven months.</p>"
    "<p><b>A photograph of an unguarded stair.</b></p>"
    "<p><b>A sheet reading four of thirty-one.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The chain breaks in the middle and the work on either "
    "side of the break is perfectly sensible, which is why two years passed without anybody noticing, "
    "and people go on doing good things in support of objectives they have never read. I will not let "
    "my own count be used as a list of cancellations, because one of the twenty-two untraceable "
    "actions is a handrail and the finding is that we cannot yet tell handrails from habit. The "
    "expensive item is not the broken chain but the silence: a benefit nobody measures is treated as "
    "non-existent at the next decision, and this one turned out to be larger than the business case "
    "claimed.</i></p>",
    "Six o'clock. Four of thirty-one, two breaks, eighty-four thousand a year."), 620)

# ---------------- Unit 11 ----------------
S["pe11-f1"]=lambda: f_icons([("clipboard","six labeled criteria"),
    ("pipe","a completed scheme, two years on"),("water","a tap instead of a tanker"),
    ("noentry","a failed borehole"),("worldmap","two schemes, one aquifer"),
    ("statement","a tariff below cost"),("calendar","a subsidy review date"),
    ("stars","an outcome achieved"),("scales","an outcome partly achieved"),
    ("magnifier","a criterion that cannot be assessed")], cols=5)
S["pe11-f2"]=lambda: f_scene(760,380,
    people=[("priya",200,172,{}),("sofia",290,170,{})],
    props=[("desk",400,0,1.0),("clipboard",470,150,0.24),("worldmap",570,146,0.28),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"SIX CRITERIA",
      [("the new one","coherence"),("found","2 schemes")]),
    clockat=(360,34,22,9,20))
S["pe11-f3"]=lambda: f_icons([("magnifier","relevance"),("worldmap","coherence"),
    ("stars","effectiveness"),("scales","efficiency"),
    ("water","impact"),("calendar","sustainability")], cols=3)
S["pe11-f4"]=lambda: f_realia(tbl("Team research","Six questions, one project",
    ["The criterion","The judgment","The evidence","Can it be assessed?"],
    [["relevance","","",""],["coherence","","",""],["effectiveness","","",""],
     ["efficiency","","",""],["impact","","",""],["sustainability","","",""]],
    note="At the foot: <b>the question none of us thought to ask.</b>"), 660)
S["pe11-f5"]=lambda: f_realia(doc("Lindhurst · evaluation note 11",
    "Calder valley water scheme, two years after handover",
    "<p><b>The criteria.</b> The evaluation criteria of the <b>Development Assistance Committee of "
    "the OECD</b>, <b>as revised in 2019</b>. The earlier set had <b>five</b>; the revision produced "
    "<b>six</b>, adding <b>coherence</b>.</p>"
    + table_html(["Criterion","The question","Our judgment"],
      [["<b>relevance</b>","was it the right intervention, and is it still?",
        "<b>strong, and stronger than claimed</b>"],
       ["<b>coherence</b>","how does it fit with other interventions here?",
        "<b>a serious finding</b>"],
       ["<b>effectiveness</b>","were the objectives achieved?",
        "<b>4 of 5 achieved, 1 partly</b>"],
       ["<b>efficiency</b>","were they achieved economically?","<b>no</b>"],
       ["<b>impact</b>","what wider difference was made?","<b>measured and positive</b>"],
       ["<b>sustainability</b>","will the benefits continue?","<b>cannot be assessed</b>"]])
    + "<p><b>Relevance:</b> the appraisal rested on two boreholes failing within <b>eight to twelve "
    "years</b>. <b>One failed in year two.</b> The counterfactual was nearer than we claimed.</p>"
    "<p><b>Effectiveness and impact:</b> four of five outcomes achieved; the fifth <b>partly: 31 per "
    "cent against a target of 50</b>. <b>41 households</b> tankered in August of year one were not "
    "tankered in year two.</p>"
    "<p><b>Efficiency: no.</b> <b>16.1 delivered against a figure of 12</b> that had become the "
    "budget. The explanation is sound and <b>an explanation is not a defense</b>.</p>"
    "<p><b>Sustainability: cannot be assessed.</b> The tariff does not recover operating cost; the "
    "gap is a subsidy; <b>the subsidy is reviewed in 2027</b>. <b>A score of three out of five would "
    "be a guess with a number in front of it.</b></p>"
    "<p style='border:1.5px solid #2f6b6b;padding:8px'><b>Coherence — the criterion added in "
    "2019, and the one that found something.</b> <b>Our scheme and a scheme 20 km away, approved 14 "
    "months later, abstract from the same aquifer. Neither application refers to the other.</b> Each "
    "organization followed its own procedure correctly and <b>the two procedures do not overlap "
    "anywhere</b>. <b>Combined licensed abstraction exceeds our own recharge figure by about 18 per "
    "cent in a dry year.</b> <b>This is a flag, not a conclusion.</b></p>"
    "<p><b>One thing I did badly:</b> I applied all six criteria mechanically, in order, with equal "
    "effort — <b>which the 2019 guidance warns against.</b></p>",
    "Source: the evaluation criteria of the Development Assistance Committee of the OECD, as revised "
    "in 2019, which define six criteria — relevance, coherence, effectiveness, efficiency, "
    "impact and sustainability — and set out principles for their use. They are intended for the "
    "evaluation of development interventions; they are not indicators and prescribe no measurement "
    "method; they carry no weighting; and the accompanying guidance states that they should be "
    "applied thoughtfully rather than as a checklist."), 660)
S["pe11-f6"]=lambda: f_realia(tbl("Word study","Evaluative judgment",
    ["Structure","What it does","Example"],
    [["<i>on the criterion of</i>","names the test",
      "<b>On the criterion of</b> efficiency, the scheme performs badly."],
     ["<i>judged against</i>","names the standard",
      "<b>Judged against</b> its own five outcomes, four were achieved."],
     ["<i>to the extent that</i>","limits the claim",
      "Effective <b>to the extent that</b> the outcomes were measured."],
     ["<i>partly achieved</i>","states a partial result",
      "<b>Partly achieved</b>: 31 percent against a target of 50."],
     ["<i>cannot be assessed because</i>","",""],["<i>on balance</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pe11-f7"]=lambda: f_chart([("relevance",5),("impact",4),("effectiveness",4),
    ("coherence",1),("efficiency",0)], unit="out of five")
S["pe11-f8"]=lambda: f_icons([("noentry","a failed borehole"),
    ("worldmap","two schemes, one aquifer"),("stars","outcomes achieved"),
    ("statement","a cost overrun"),("water","a household with a tap"),
    ("calendar","a subsidy review date")], cols=3, numbered=False)
S["pe11-f9"]=lambda: f_realia(doc("Evaluation summary · Calder valley scheme, year 2",
    "Four positive, one negative, one unassessable",
    table_html(["Criterion","Judgment","Evidence"],
      [["<b>relevance</b>","<b>strong</b>","a borehole predicted to fail in 8–12 years failed "
        "in <b>year 2</b>"],
       ["<b>coherence</b>","<b>adverse finding</b>","see the flag below"],
       ["<b>effectiveness</b>","<b>4 of 5 achieved</b>","the fifth <b>partly: 31 % against a 50 % "
        "target</b>"],
       ["<b>efficiency</b>","<b>no</b>","<b>16.1 against a figure of 12</b>"],
       ["<b>impact</b>","<b>positive, measured</b>","<b>41 households</b>, Aug yr 1 → none, Aug "
        "yr 2"],
       ["<b>sustainability</b>","<b>cannot be assessed</b>","tariff below cost; subsidy reviewed "
        "<b>2027</b>"]])
    + "<p style='border:1.5px solid #2f6b6b;padding:8px'><b>Flag for a hydrologist, jointly "
    "instructed.</b> Two schemes, <b>20 km apart</b>, approved <b>14 months</b> apart, abstracting "
    "from the same aquifer; <b>neither application refers to the other</b>; combined abstraction "
    "exceeds our recharge figure by about <b>18 percent in a dry year</b>. <b>A flag, not a "
    "conclusion: I can read two licenses and a recharge assessment and that is the limit of my "
    "competence.</b></p>",
    "Applied in order, with equal effort, which was a mistake: the criteria are not a checklist."),
    640)
S["pe11-f10"]=lambda: f_scene(860,400,
    people=[("priya",110,174,{}),("sofia",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("note",250,148,0.22),("worldmap",360,146,0.26),
     ("statement",520,150,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"THE SIDEWAYS QUESTION",
      [("schemes","2"),("aquifer","1")]),
    clockat=(700,34,22,9,30))
S["pe11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Summary A","One verdict",
      "<p><b>Overall success rating: 78 percent.</b></p>"
      "<p style='font-size:12px;color:#6b6861'>Six questions compressed into one number.</p>"),
      380),
    lambda w,h: f_realia(doc("Summary B","Six criteria",
      "<p>Four positive, <b>one negative and undefended</b>, <b>one refused with a reason</b>, and a "
      "flag for a specialist.</p>"), 380),
    w=820, h=300, lt="A NUMBER", rt="FINDINGS")
S["pe11-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","Sustainability: 3 / 5",
      "<p style='font-size:12px;color:#6b6861'>Will be quoted for five years without its "
      "reasoning.</p>"), 380),
    lambda w,h: f_realia(doc("After","Cannot be assessed",
      "<p><i>Cannot be assessed, because the tariff does not recover operating cost and the subsidy "
      "is reviewed in 2027.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Names the missing evidence and who will hold it.</p>"),
      380),
    w=820, h=300, lt="A GUESS", rt="A FINDING")
S["pe11-f13"]=lambda: f_realia(form("Evaluation planner",
    [("The criterion",""),("The question it asks",""),("Your judgment",""),
     ("The evidence",""),("Can it be assessed?",""),("What would be needed if not","")],
    note="Six boxes. Hand it to a partner; they ask which criterion you cannot assess."), 560)
S["pe11-f14"]=lambda: f_scene(1000,450,
    people=[("priya",60,176,{}),("sofia",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("hana",370,176,{"seated":True}),
     ("anders",445,172,{}),("oksana",520,176,{"seated":True}),("lars",595,170,{}),
     ("wei",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("worldmap",548,196,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"THE SIDEWAYS QUESTION",
      [("criteria","6"),("looks sideways","1")]),
    clockat=(278,34,22,9,30))
S["pe11-f15"]=lambda: f_chart([("relevance",2),("coherence",5),("effectiveness",6),
    ("efficiency",12),("sustainability",9)])
S["pe11-f16"]=lambda: f_realia(doc("On a desk in July",
    "What was on it at seven o'clock",
    "<p><b>Two abstraction applications</b> side by side.</p>"
    "<p><b>A map</b> of a single aquifer.</p>"
    "<p><b>An evaluation summary</b> of six rows, one of them an open outline.</p>"
    "<p><b>A tariff schedule</b> with 2027 circled.</p>"
    "<p><b>A borehole condition report.</b></p>"
    "<p><b>A note of three sentences.</b> <i>Five of these criteria look at us and only coherence "
    "looks sideways, which is why it found the thing nobody knew and why it was worth adding in 2019. "
    "I refused to score sustainability because a number outlives its reasoning by about five years "
    "and the question turns on a decision nobody has taken. My own error was working through all six "
    "in order with equal effort, which the guidance warns against, and four of my six paragraphs are "
    "worth very little.</i></p>",
    "Seven o'clock. Six criteria, one addition, two schemes, one aquifer."), 620)

# ---------------- Unit 12 ----------------
S["pe12-f1"]=lambda: f_icons([("scales","an estimate with a range"),
    ("review","a falling learning curve"),("calendar","a thirty-year cost profile"),
    ("magnifier","a switching value"),("envelope","a notice within a period"),
    ("meeting","an early warning with no solution"),("ship","three letters and a named place"),
    ("spreadsheet","a weighting at the head of a sheet"),
    ("certificate","a requirement with four parts"),("chain","a chain with a break")], cols=5)
S["pe12-f2"]=lambda: f_scene(760,380,
    people=[("hana",200,172,{}),("oksana",290,170,{})],
    props=[("desk",400,0,1.0),("spreadsheet",470,150,0.24),("statement",570,150,0.22),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"ONE WORD",
      [("cost report","1.90"),("accounts","0.34")]),
    clockat=(360,34,22,4,20))
S["pe12-f3"]=lambda: f_icons([("flashback","a past event"),
    ("signature","a present obligation"),("scales","a probable outflow"),
    ("calculator","a reliable estimate"),("note","a disclosed contingency"),
    ("noentry","a future loss, not provided for")], cols=3)
S["pe12-f4"]=lambda: f_realia(tbl("Team research","One word, two meanings",
    ["The word","What we mean","What they mean","What the difference is worth"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the word we have never checked.</b>"), 660)
S["pe12-f5"]=lambda: f_realia(doc("Lindhurst · money note 12",
    "One page of money decisions",
    "<p><b>The standard.</b> <b>IAS 37</b>, <i>Provisions, Contingent Liabilities and Contingent "
    "Assets</i>. It governs <b>what appears in financial statements</b>, and it is the reason the "
    "word <i>provision</i> cannot be used for a project contingency.</p>"
    + table_html(["","Test"],
      [["<b>1</b>","there is a <b>present obligation</b> arising from a <b>past event</b>"],
       ["<b>2</b>","an <b>outflow of resources is probable</b> — more likely than not"],
       ["<b>3</b>","the amount can be <b>estimated reliably</b>"]])
    + "<p><b>Our 1.9 million fails test 1, which is the one nobody expects.</b> <b>A project "
    "contingency is money for the future. A provision is a consequence of the past.</b></p>"
    + table_html(["",""],
      [["Project contingency in the cost report","<b>1.90</b>"],
       ["Provision recognized in the accounts","<b>0.34</b>"],
       ["<b>Gap</b>","<b>1.56</b>"],
       ["Years during which each side assumed the other held it","<b>3</b>"]])
    + table_html(["Real, and not a provision","Treatment"],
      [["the <b>aquifer finding</b>","a <b>contingent liability</b> — <b>disclosed in a note, "
        "not recognized</b>"],
       ["<b>operating losses</b> after the 2027 review","<b>nothing may be set aside at all</b>"]])
    + "<p><b>The accounts are not a risk register.</b> A thing can be probable, expensive and "
    "entirely absent from a balance sheet, correctly.</p>"
    "<p><b>And eleven documents, with the useful sentence about each one:</b> a class 5 estimate is "
    "<b>not a budget</b>; a learning curve does <b>not cover material</b>; a life-cycle cost is "
    "<b>not a whole-life cost</b>; an appraisal is <b>not a decision</b>; a printed period is "
    "<b>not your period</b>; a contract is <b>not self-administering</b>; a delivery term is "
    "<b>silent on title</b>; a procurement standard is <b>not a policy</b>; guidance is "
    "<b>not certifiable</b>; an overview standard contains <b>no requirements</b>; criteria are "
    "<b>not indicators</b>.</p>",
    "Source: IAS 37, Provisions, Contingent Liabilities and Contingent Assets, issued by the "
    "international accounting standard-setter. A provision is recognized only where a present "
    "obligation arises from a past event, an outflow is probable and the amount can be estimated "
    "reliably; contingent liabilities are disclosed rather than recognized; provisions for future "
    "operating losses are prohibited. It is a financial reporting standard and not a project risk "
    "management method. Nothing here is accounting, tax, legal or financial advice."), 660)
S["pe12-f6"]=lambda: f_realia(tbl("Word study","Eleven structures, one per unit",
    ["Unit","Structure","Example"],
    [["1","ranges and accuracy","<b>Between</b> 6 <b>and</b> 24 million."],
     ["2","proportional change","<b>For every doubling</b>, hours <b>fall to</b> 85 percent."],
     ["3","long horizons","<b>Over a period of</b> 30 years, <b>at a real rate of</b> 3.5 %."],
     ["4","appraisal conditionals","<b>Were it to fall by</b> 23 percent…"],
     ["5","time bars","<b>Within</b> 21 days <b>of</b> becoming aware, <b>failing which</b>…"],
     ["6","the contract present tense","The contractor <b>notifies</b>."],
     ["7","scope limitation","It <b>is silent on</b> payment."],
     ["8","weighting","Quality <b>weighted at</b> 10 percent."],
     ["9","requirement and recommendation","<b>Shall</b>, not less than 90 %, <b>failing which</b>."],
     ["10","",""],["11","",""]],
    note="Two rows left empty on purpose."), 660)
S["pe12-f7"]=lambda: f_part("One word, two meanings",
    [("recognized provision",34,"#4a6b3b"),("the gap nobody held",156,"#b07a1e")])
S["pe12-f8"]=lambda: f_icons([("scales","an estimate with a range"),
    ("envelope","a contract notice"),("spreadsheet","a weighting"),
    ("certificate","a requirement in four parts"),("chain","a chain of plans"),
    ("statement","a balance sheet with a note")], cols=3, numbered=False)
S["pe12-f9"]=lambda: f_realia(tbl("Money register · Calder programme",
    "Twelve decisions · four columns · the fourth is the one that was missing",
    ["#","The number","The document","What it is not"],
    [["1","<b>12</b> at class 5, range 6–24; outcome <b>16.1</b>","estimate classification",
      "<b>not a budget-quality estimate</b>"],
     ["2","<b>4,400</b> hours on an 85 % curve","the 1936 learning-curve paper",
      "<b>not applicable to material</b>"],
     ["3","pump B, <b>+0.50</b> over 30 years at 3.5 % real","life-cycle costing, 2017",
      "<b>not a whole-life cost</b>"],
     ["4","<b>ENPV +14.8</b>; switching value <b>−23 %</b>","the 2014 appraisal guide",
      "<b>not a decision</b>"],
     ["5","<b>1.34</b> time-barred at day 36; period <b>21</b>","the 2017 construction contract",
      "<b>not the printed 28 days</b>"],
     ["6","<b>210</b> our share of a <b>420</b> delay","the 2017 engineering contract",
      "<b>not self-administering</b>"],
     ["7","<b>186</b> uninsured on a road leg","the 2020 delivery-term rules",
      "<b>silent on title and payment</b>"],
     ["8","award at <b>90/10</b>, reversing at <b>70/30</b>","the procurement standard, 2020",
      "<b>not a policy</b>"],
     ["9","<b>60 %</b> of plant hours, <b>90 %</b> at month 18","sustainable procurement guidance",
      "<b>not certifiable</b>"],
     ["10","<b>38 %</b> energy saving, about <b>84</b> a year","asset management, 2014",
      "<b>not a requirement</b>"],
     ["11","one criterion <b>unassessable</b>","the 2019 evaluation criteria",
      "<b>not indicators</b>"],
     ["<b>12</b>","<b>contingency 1.90 · provision 0.34 · gap 1.56</b>","<b>IAS 37</b>",
      "<b>not a risk register</b>"]],
    note="<b>Every row carries a named owner and a date in the full register.</b>"), 740)
S["pe12-f10"]=lambda: f_scene(860,400,
    people=[("hana",110,174,{}),("okonjo",320,176,{"seated":True}),
     ("oksana",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("spreadsheet",250,148,0.24),("statement",360,150,0.22),
     ("note",520,150,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"ONE WORD, TWO MEANINGS",
      [("contingency","1.90"),("provision","0.34")]),
    clockat=(700,34,22,4,30))
S["pe12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report A","One figure",
      "<p><b>Provision: 1.9 million.</b></p>"
      "<p style='font-size:12px;color:#6b6861'>Correct as a contingency. Wrong as a word.</p>"),
      380),
    lambda w,h: f_realia(doc("Report B","A reconciliation",
      "<p><b>Contingency 1.90 · recognized provision 0.34 · gap 1.56</b>, plus one item "
      "<b>disclosed and not recognized</b> and one that <b>may not be provided for at all</b>.</p>"),
      380),
    w=820, h=300, lt="ONE WORD", rt="FOUR ITEMS")
S["pe12-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Register A","Three columns",
      "<p>The number, the document, the owner.</p>"), 380),
    lambda w,h: f_realia(doc("Register B","Four columns",
      "<p>The number, the document, the owner — and <b>what it is not</b>, with a "
      "reconciliation at the foot.</p>"), 380),
    w=820, h=300, lt="THREE", rt="FOUR")
S["pe12-f13"]=lambda: f_realia(form("Money register planner",
    [("The number",""),("The governing document and edition",""),("The owner and date",""),
     ("What the number is not",""),("What is recognized",""),("What is only disclosed","")],
    note="Six boxes. Hand it to a partner; they ask what each number is not."), 560)
S["pe12-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("oksana",135,172,{}),("okonjo",210,176,{"seated":True}),
     ("nkemelu",290,172,{"seated":True}),("anders",370,176,{"seated":True}),
     ("priya",445,172,{}),("lars",520,176,{"seated":True}),("sofia",595,170,{}),
     ("wei",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("statement",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"ONE WORD, TWO MEANINGS",
      [("contingency","1.90"),("provision","0.34")]),
    clockat=(278,34,22,4,30))
S["pe12-f15"]=lambda: f_chart([("yes",3),("no",10),("partly",4),("I do not know",9),
    ("nobody has ever asked",8)])
S["pe12-f16"]=lambda: f_realia(doc("On a desk in December",
    "What was on it at six o'clock",
    "<p><b>A one-page money register</b> with four columns.</p>"
    "<p><b>A cost report</b> showing a contingency.</p>"
    "<p><b>Draft accounts</b> showing a provision.</p>"
    "<p><b>A note</b> disclosing a contingent liability.</p>"
    "<p><b>A reconciliation</b> with a shaded gap.</p>"
    "<p><b>A note of three sentences.</b> <i>Eleven documents in this programme and the useful "
    "sentence about every one of them turned out to be what it does not claim, which is why the "
    "fourth column exists and why I would write it before the other three. Two honest documents and "
    "one shared word hid one and a half million for three years, and the failure was not arithmetic "
    "but vocabulary, which no audit of either document would ever have found. Our balance sheet "
    "contains none of our largest risks and is entirely correct to contain none of them, and "
    "understanding why took me longer than anything else in this file.</i></p>",
    "Six o'clock. Contingency one point nine, provision nought point three four, gap one point five "
    "six."), 640)
