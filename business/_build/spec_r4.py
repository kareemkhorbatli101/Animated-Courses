# -*- coding: utf-8 -*-
"""Clearline Book 4 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · Starting and Closing Things ----------------
S["r10-f1"]=lambda: f_icons([("jobnotice","a new sign"),("invoice","a first order"),
    ("star","a launch"),("shelf","discontinued"),("receipt","a final invoice"),
    ("iron","a machine covered"),("envelope","a customer letter"),
    ("spreadsheet","a write-down"),("archive","records archived"),
    ("handshake","a last day")], cols=5)
S["r10-f2"]=lambda: f_scene(900,420, people=[("chiamaka",330,172,{}),
    ("anders",620,182,{}),("tomas",700,176,{})],
    props=[("clipboard",280,150,0.34),("iron",430,0,0.6),("shelf",520,0,0.6),
    ("racking",820,40,0.85)],
    board=(140,24,160,110,"DL OUTPUT",[("to zero","31 Mar")]))
S["r10-f3"]=lambda: f_icons([("envelope","a dated letter"),("form","a last-time buy"),
    ("essay","spares to 2031"),("iron","the machine covered"),
    ("archive","records archived"),("meeting","telling the eleven")], cols=3)
S["r10-f4"]=lambda: f_realia(tbl("","How things end",
    ["What ended","Who was told first","What was left unfinished"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>What we would do differently:</b>"), 520)
S["r10-f5"]=lambda: f_realia(tbl("Arvo Components &middot; DL range closure plan",
    "decision 3 October &middot; last production 31 March &middot; C. Obi",
    ["Task","Owner","By"],
    [["<b>Tell the eleven people whose work changes, in a room, first</b>","C. Obi",
      "<b>Tue 7 Oct</b>"],
     ["Letter to the four customers: 12 months' notice, dated","P. Moreau","10 Oct"],
     ["Last-time buy open","P. Moreau","2 Jan &ndash; 28 Feb"],
     ["Spares commitment to 2031, in writing","H. Lindqvist","10 Oct"],
     ["Residual stock written down over three quarters","M. Dolny","Q4&ndash;Q2"],
     ["Machine cleaned, covered, recorded; records archived with a note","A. Holm","30 Apr"]],
    note="<b>What we commit to after closure:</b> spares until 2031; technical answers by email "
    "for two years; a named person for each of the four customers, not a shared inbox. &nbsp; "
    "<b>The records:</b> archived with a note saying what they are &mdash; in nine years somebody "
    "will ask."), 560)
S["r10-f6"]=lambda: f_realia(tbl("Word study","Verb + <i>-ing</i> or <i>to</i>",
    ["Group","Verbs","Example"],
    [["<b>+ -ing</b>","avoid, consider, involve, risk, delay, suggest",
      "We <b>considered keeping</b> the line open."],
     ["<b>+ to-infinitive</b>","decide, agree, refuse, arrange, aim, promise, manage",
      "We <b>decided to close</b> it."],
     ["<b>+ object + to</b>","ask, tell, allow, require, remind",
      "We <b>asked them to place</b> a final order."],
     ["<b>both, same meaning</b>","begin, start, continue",
      "We <b>began winding</b> / <b>began to wind</b> it down."],
     ["<b>both, different meaning</b>","remember, forget, stop, go on",
      "We <b>stopped making</b> it. / We <b>stopped to make</b> a note."]],
    note="<i>We stopped making it</i> means production ended. <i>We stopped to make it</i> means "
    "you paused in order to make it. In a closure notice that is the entire message."), 540)
S["r10-f7"]=lambda: f_chart([("birth rate, 2024",10.4),("death rate, 2024",9.2),
    ("five-year survival — born 2014, trading 2019",45.0)],
    unit="per cent &mdash; the first two are for 2024; the third follows businesses born a decade "
    "earlier. Different vintages, kept apart on purpose", w=540)
S["r10-f8"]=lambda: f_icons([("meeting","eleven chairs"),("envelope","a dated letter"),
    ("form","two dates on an order"),("shelf","spares, 2031"),
    ("iron","a machine under cover"),("archive","a labelled box")], cols=3)
S["r10-f9"]=lambda: f_realia(doc("Arvo Components &middot; to our DL range customers",
    "10 October",
    "<p><b>We are stopping production of the DL range on 31 March.</b> You have twelve months' "
    "notice from the date of this letter.</p>"
    + table_html(["","Dates"],
      [["Last-time buy opens","2 January"],["Last-time buy closes","28 February"],
       ["Last production","31 March"],["Spares available until","<b>2031</b>"]])
    + "<p><b>Spares.</b> We will supply spares until 2031 and answer technical questions by email "
    "for two years. You have a named person, not a shared inbox: see below.</p>"
    "<p>We are stopping a profitable line because the machine needs 80,000 of work within two "
    "years and the volume no longer justifies it. I would rather tell you that than imply the "
    "range was failing.</p>",
    "C. Obi &middot; direct +44 20 7946 0193 &middot; named contact for your account"))
S["r10-f10"]=lambda: f_scene(920,430, people=[("chiamaka",260,172,{}),
    ("tomas",400,176,{"seated":True}),("anders",480,182,{"seated":True}),
    ("oksana",560,172,{"seated":True}),("lucia",640,170,{"seated":True}),
    ("oskar",720,176,{"seated":True})],
    props=[("chair",800,210,0.65),("note",300,150,0.24),("table",860,250,0.9)],
    board=(120,24,150,110,"DL OUTPUT",[("to zero","31 Mar")]))
S["r10-f11"]=lambda: f_realia(tbl("Two closure letters","The same news",
    ["Background first","The date first"],
    [["“As you will be aware, the market for this product category has changed considerably "
      "over the last three years, and we have been reviewing our portfolio&hellip; "
      "<b>(paragraph four)</b> &hellip; production will therefore cease on 31 March.”<br><br>"
      "<i>The news is in the fourth paragraph.</i>",
      "<b>We are stopping production of the DL range on 31 March.</b><br>"
      "Twelve months' notice. Last-time buy 2 January to 28 February. Spares until 2031. "
      "A named contact, direct line below.<br><br><i>Three sentences, then the reason.</i>"]]), 540)
S["r10-f12"]=lambda: f_realia(doc("Two closure plans", None,
    "<p><b>A.</b> Tasks: notify customers; run down stock; decommission the machine; archive "
    "records; reassign staff. Target: end of Q1.</p>"
    "<p style='font-size:12px;color:#6b6861'>No order of telling, no dates, nothing committed "
    "after closure, and “reassign staff” doing a great deal of work.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>Order of telling:</b> (1) the eleven people whose "
    "work changes, in a room, by me, Tuesday 7 October; (2) the four customers, dated letters, "
    "Friday 10 October; (3) everybody else internally, the same Friday; (4) nothing public until "
    "all three are done. <b>I delayed step 1 by three weeks and two of the eleven had already "
    "heard.</b> <b>After closure:</b> spares to 2031, technical answers for two years, a named "
    "person per customer. <b>What has no procedure:</b> telling the eleven people.</p>"))
S["r10-f13"]=lambda: f_realia(form("Closure planner",
    [("The decision, and why &mdash; including why now",""),
     ("<b>The order of telling, with dates</b>",""),("What customers get",""),
     ("The money &mdash; stock, write-downs, over how long",""),
     ("The physical and the records",""),("What we commit to afterwards",""),
     ("<b>What has no procedure</b>","")]), 520)
S["r10-f14"]=lambda: f_scene(1000,450, people=[("chiamaka",150,172,{}),("anders",240,182,{}),
    ("tomas",330,176,{}),("lucia",420,170,{}),("oskar",510,176,{}),
    ("marek",600,180,{}),("paula",690,170,{}),("yara",780,172,{}),
    ("hanna",860,172,{}),("nour",950,168,{})],
    props=[("iron",100,0,0.6),("shelf",200,0,0.55),("archive",400,0,0.55),
    ("carton",480,0,0.5),("clipboard",620,150,0.34),("cafe",900,205,0.46),
    ("desk",740,0,1.0)],
    board=(290,20,150,110,"OUTPUT",[("to zero","31 Mar")]))
S["r10-f15"]=lambda: f_chart([("by email to everybody",7),("in a meeting",5),
    ("we heard from outside",5),("by a notice",3),("it has not happened",2)])
S["r10-f16"]=lambda: f_scene(900,420, people=[],
    props=[("iron",260,0,0.65),("shelf",400,0,0.55),("racking",820,40,0.85),
    ("archive",520,0,0.5),("door",700,80,0.9)],
    board=(120,24,150,110,"DL / C LINE",[("DL","0"),("C","running")]))

# ---------------- Unit 11 · Measuring What You Promise ----------------
S["r11-f1"]=lambda: f_icons([("scales","a parcel weighed"),("tally","a counter"),
    ("timer","a stopwatch"),("sizechart","a target line"),("review","two shapes"),
    ("clock","on time"),("balance","a weight label"),("inventory","a count label"),
    ("spreadsheet","a definition cell"),("meeting","one figure, two readings")], cols=5)
S["r11-f2"]=lambda: f_scene(900,420, people=[("wei",330,170,{"seated":True})],
    props=[("desk",200,0,1.35),("computer",260,145,0.5),("computer",420,145,0.5),
    ("essay",520,208,0.3),("note",580,210,0.22)])
S["r11-f3"]=lambda: f_icons([("calendar","on the promised day"),("clock","within the window"),
    ("carton","complete first time"),("tray","complete eventually"),
    ("scales","by weight"),("inventory","by order count")], cols=3)
S["r11-f4"]=lambda: f_realia(tbl("","Four ways to measure one promise",
    ["","The measure","What it would show"],
    [["<b>The promise</b>","",""],["1","",""],["2","",""],["3","",""],["4","",""]],
    note="<b>Which one is in the contract:</b>"), 520)
S["r11-f5"]=lambda: f_realia(doc("Lindmark Freight and Ostberg Retail &middot; schedule 2 (revised)",
    "for signature &middot; review date 1 April",
    "<p><b>2.1 Definition.</b> “Delivery performance” means <b>the number of orders "
    "delivered on the promised day</b> divided by <b>the number of orders despatched in the same "
    "month</b>, expressed as a percentage. <b>Orders canceled by the customer are excluded from "
    "both.</b></p>"
    "<p><b>2.2 The commitment.</b> A <b>twelve per cent relative improvement</b> on the baseline of "
    "78.4 per cent, measured monthly and assessed on a three-month average.</p>"
    "<p><b>2.3 What this clause does not measure.</b></p>"
    + table_html(["Measure","Against baseline"],
      [["On the promised day <i>(the commitment)</i>","<b>+14%</b>"],
       ["Within a two-day window","+11%"],
       ["Complete first time, nothing to follow","<b>flat</b>"],
       ["By weight delivered on time","<b>−3%</b>"]])
    + "<p><b>2.4 Why the last two are worse.</b> The improvement came partly from splitting "
    "deliveries. That helps the first two measures and hurts the third, and the fourth falls "
    "because heavy items are the ones most often split.</p>",
    "<b>Tolerance:</b> a single month more than 4 points below the three-month average triggers a "
    "review, not a breach."))
S["r11-f6"]=lambda: f_realia(tbl("Word study","Nominalized, and with verbs",
    ["Nominalized","With verbs and actors"],
    [["<b>The implementation of the revised definition</b> will take place in April.",
      "<b>We will start using</b> the new definition in April."],
     ["There has been an <b>improvement in delivery performance</b>.",
      "<b>We delivered</b> 14 per cent more orders on the promised day."],
     ["<b>The splitting of deliveries</b> has had an <b>impact on completeness</b>.",
      "<b>We split more deliveries</b>, so <b>fewer orders arrived complete</b>."],
     ["<b>A review of the measurement methodology</b> is required.",
      "<b>Somebody has to decide which of the four measures counts.</b>"]],
    note="Nominalize to <b>define</b> a thing. Un-nominalize to <b>describe</b> what happened. If "
    "you cannot tell who did it, rewrite it."), 540)
S["r11-f7"]=lambda: f_chart([("number of items",38),("tonnage",-16)],
    unit="% change, international parcel post &mdash; more parcels, each lighter. Both measure the "
    "same traffic", w=520)
S["r11-f8"]=lambda: f_icons([("calendar","the promised day"),("clock","a two-day window"),
    ("carton","one complete delivery"),("tray","two part deliveries"),
    ("scales","a weighing scale"),("spreadsheet","numerator over denominator")], cols=3)
S["r11-f9"]=lambda: f_realia(doc("Lindmark Freight &middot; service report, October",
    "for Ostberg Retail &middot; W. Zhang &middot; one page",
    "<p style='font-size:34px;font-weight:700;margin:4px 0'>+14%</p>"
    "<p style='font-size:14px;margin-top:-4px'>orders delivered on the promised day, against the "
    "78.4% baseline &mdash; <b>this is the commitment measure</b></p>"
    + table_html(["Not the commitment","Against baseline"],
      [["Within a two-day window","+11%"],["Complete first time","<b>flat</b>"],
       ["By weight delivered on time","<b>−3%</b>"]])
    + "<p><b>Why.</b> <b>We hit the promised day by splitting more orders.</b> More of your orders "
    "arrive in two deliveries instead of one, so <i>complete first time</i> has not improved, and "
    "because we split the heavy items most often, <i>weight on time</i> has gone backwards.</p>",
    "<b>I propose</b> defining the measure in schedule 2 &mdash; numerator, denominator, "
    "exclusions, period, baseline &mdash; and choosing which of the four is the commitment."))
S["r11-f10"]=lambda: f_scene(900,420, people=[("wei",330,170,{"seated":True}),
    ("oksana",450,172,{"seated":True})],
    props=[("table",390,250,1.4),("essay",350,196,0.3),("computer",460,196,0.36),
    ("note",520,200,0.22)])
S["r11-f11"]=lambda: f_realia(tbl("Two reports","The same month",
    ["One figure","Four measures"],
    [["<b>Delivery performance +14%</b><br><br>"
      "<i>No definition. The customer's own figure, by weight, says −3%, and neither of you "
      "knows why you disagree.</i>",
      "<b>Commitment: on the promised day +14%</b> against 78.4<br>"
      "Within a window +11%<br><b>Complete first time: flat</b><br>"
      "<b>By weight on time: −3%</b><br>"
      "<i>Plus one paragraph on splitting, and a proposed definition.</i>"]]), 540)
S["r11-f12"]=lambda: f_realia(doc("Two monthly reports", None,
    "<p><b>A.</b> There has been an improvement in delivery performance of 14 per cent this month, "
    "reflecting the operational changes implemented earlier in the year.</p>"
    "<p style='font-size:12px;color:#6b6861'>No actor, no definition, no mention of the two "
    "measures that got worse. Nobody did anything in this sentence.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>We delivered 14 per cent more orders on the promised "
    "day</b> than the 78.4 per cent baseline &mdash; that is the commitment measure. Within a "
    "two-day window, +11 per cent. <b>Complete first time: flat. By weight on time: −3 per "
    "cent.</b> <b>We hit the promised day by splitting more orders</b>, which is why the last two "
    "are worse. Your October figure is by weight and it is right; mine is by order count and it is "
    "also right. <b>Same data, two denominators.</b></p>"))
S["r11-f13"]=lambda: f_realia(form("Report planner",
    [("<b>The commitment measure</b> &mdash; and the baseline",""),
     ("Not the commitment: measure 1",""),("Not the commitment: measure 2",""),
     ("Not the commitment: measure 3",""),
     ("<b>The trade-off, in plain verbs, with me as the actor</b>",""),
     ("Your figures and mine",""),("What I propose","")]), 520)
S["r11-f14"]=lambda: f_scene(1000,450, people=[("wei",150,170,{}),("yara",240,172,{}),
    ("marek",330,180,{"seated":True}),("ines",420,172,{"seated":True}),
    ("oksana",520,172,{}),("anders",610,182,{}),("tomas",700,176,{}),
    ("nour",790,168,{}),("paula",870,170,{}),("okonjo",950,182,{})],
    props=[("desk",100,0,1.2),("spreadsheet",190,140,0.4),("flipchart",470,46,0.8),
    ("scales",640,196,0.3),("clipboard",730,150,0.32),("printer",830,205,0.44),
    ("carton",590,0,0.5)],
    board=(290,20,160,110,"TWO CHARTS",[("tonnage","−16%"),("items","+38%")]))
S["r11-f15"]=lambda: f_chart([("only the headline figure",7),("partly",6),
    ("I have never read one",4),("not at all",3),("fully defined",2)])
S["r11-f16"]=lambda: f_scene(880,420, people=[],
    props=[("desk",240,0,1.3),("essay",300,205,0.32),("computer",420,145,0.5),
    ("note",520,210,0.22),("spreadsheet",150,110,0.4)],
    window_=(630,56,110,96))

# ---------------- Unit 12 · What We Report and Why ----------------
S["r12-f1"]=lambda: f_icons([("essay","a published report"),("book","a standard"),
    ("balance","a materiality grid"),("warehouse","a scope boundary"),
    ("stamp","assurance"),("sizechart","a target with a date"),
    ("calendar","a baseline year"),("refnumber","a footnote"),
    ("worldmap","jurisdictions"),("meeting","two readings")], cols=5)
S["r12-f2"]=lambda: f_scene(920,430, people=[("paula",300,170,{"seated":True}),
    ("hanna",400,172,{"seated":True}),("okonjo",500,182,{"seated":True})],
    props=[("table",390,250,1.4),("essay",350,196,0.3),("book",460,200,0.24)],
    board=(760,24,160,120,"DONE / STARTED",[("done","2"),("started","4")]))
S["r12-f3"]=lambda: f_icons([("iron","completed, with a date"),("scaffolding","under way"),
    ("form","ordered"),("essay","proposed"),
    ("calendar","targeted"),("worried","no date at all")], cols=3)
S["r12-f4"]=lambda: f_realia(tbl("","Done or started?",
    ["Done","Under way","Ordered","Proposed","Intended"],
    [["","","","",""],["","","","",""],["","","","",""],["","","","",""]],
    note="<b>The verb our statement uses for all five:</b>"), 540)
S["r12-f5"]=lambda: f_realia(tbl("Arvo Components &middot; first sustainability statement, extract",
    "voluntary &middot; reporting year to 31 December",
    ["What","State","Date","Evidence"],
    [["Compressor replacement, main site","<b>completed</b>","June","metered, 12 months"],
     ["Lighting, Ostberg site","<b>completed</b>","September","metered, 3 months"],
     ["Metering at two further sites","<b>under way</b>","due March","purchase order"],
     ["Heat recovery unit","<b>ordered, not installed</b>","due Q3","purchase order"],
     ["Fleet review","<b>proposed</b>","board paper, January","&mdash;"],
     ["30% energy reduction","<b>intended</b>","by 2032","<b>no plan attached yet</b>"]],
    note="<b>Boundary.</b> These figures cover the main site and Ostberg. <b>They exclude our two "
    "leased sites in Spain</b>, which are not separately metered &mdash; about 18% of floor area "
    "and an unknown share of energy use. &nbsp; <b>What this statement does not cover:</b> "
    "suppliers' emissions, water, and waste other than packaging."), 560)
S["r12-f6"]=lambda: f_realia(tbl("Word study","Commitment, weakest to strongest",
    ["Form","What it claims","Evidence it needs"],
    [["<b>we are exploring</b>","almost nothing","a meeting"],
     ["<b>we intend to</b>","a decision, no plan","a decision somewhere"],
     ["<b>we aim to</b>","a target","a target with a date"],
     ["<b>we expect to</b>","a forecast","a reason for the forecast"],
     ["<b>we have committed to</b>","money or a contract","a signed order or a budget line"],
     ["<b>we have + done</b>","a completed fact","evidence, and a date"]],
    note="Each step up needs evidence the step below does not. If you cannot produce the "
    "right-hand column, move down one row."), 540)
S["r12-f7"]=lambda: f_chart([("“on the journey”",50),("adopted",21),
    ("adopted in full, unmodified",0)],
    unit="jurisdictions &mdash; the first counts intention, the second enactment, and the third "
    "nobody publishes, because adoption is frequently partial", w=540)
S["r12-f8"]=lambda: f_icons([("iron","finished, dated"),("scaffolding","half-finished"),
    ("form","a purchase order"),("essay","a board paper"),
    ("calendar","a target year"),("map","two sites outside the line")], cols=3)
S["r12-f9"]=lambda: f_realia(tbl("Review comments on draft 3",
    "H. Lindqvist &middot; six comments",
    ["#","The phrase in the draft","Proposed replacement","Evidence required"],
    [["1","“we are reducing energy use across our operations”",
      "six separate sentences, one per state","&mdash;"],
     ["2","“we have installed a heat recovery unit”",
      "“we have committed to” &mdash; it is ordered","purchase order"],
     ["3","“energy use fell 9 per cent”",
      "add “at the two metered sites”","meter readings"],
     ["4","“we will reduce energy use by 30%”","“we aim to”","a plan"],
     ["5","“our program of improvement”",
      "“two completed projects and a plan for four more”","&mdash;"],
     ["6","“group-wide”","name the sites, and the ones excluded","floor-area figures"]],
    note="<b>Claims I would remove entirely:</b> “industry-leading”; “on track”."),
    560)
S["r12-f10"]=lambda: f_scene(920,430, people=[("paula",290,170,{"seated":True}),
    ("hanna",390,172,{"seated":True}),("okonjo",490,182,{"seated":True})],
    props=[("table",390,250,1.4),("essay",350,196,0.3),("book",470,200,0.24),
    ("pen",420,200,0.18)],
    board=(760,24,160,120,"DONE / INTENDED",[("done","2"),("intended","4")]))
S["r12-f11"]=lambda: f_realia(tbl("Two statements","The same company",
    ["Three sentences","Six sentences"],
    [["We are reducing energy use across our operations. We are investing in efficient equipment. "
      "We are committed to a 30 per cent reduction.<br><br>"
      "<i>One verb for five different states. No dates. No boundary. Every sentence true and none "
      "of them checkable.</i>",
      "We <b>replaced</b> the compressors in June and the lighting in September &mdash; both "
      "metered.<br>We <b>expect to</b> finish metering two more sites by March.<br>"
      "We <b>have committed to</b> a heat recovery unit; it is ordered.<br>"
      "We <b>intend to</b> review the fleet.<br>We <b>aim to</b> cut energy use 30% by 2032.<br>"
      "<b>Boundary: two of four sites, 82% of floor area.</b>"]]), 540)
S["r12-f12"]=lambda: f_realia(doc("Two statements", None,
    "<p><b>A.</b> We are reducing energy use across our operations. We are investing in more "
    "efficient equipment at our sites. We are committed to a 30 per cent reduction by 2032.</p>"
    "<p style='font-size:12px;color:#6b6861'>Three sentences in one tense covering two finished "
    "projects, one half-finished, one ordered, one proposed and a target. All true, none "
    "checkable.</p>"
    "<p style='margin-top:14px'><b>B.</b> We <b>replaced</b> the compressors in <b>June</b> and the "
    "lighting in <b>September</b>; both are metered and measured energy use at those two sites "
    "<b>fell 9 per cent</b> against the 2024 baseline. We <b>expect to</b> finish metering two "
    "further sites <b>by March</b>. We <b>have committed to</b> a heat recovery unit, due Q3; it "
    "is <b>ordered and not installed</b>, and no saving from it is in any figure above. We "
    "<b>intend to</b> review the fleet. We <b>aim to</b> cut energy use 30 per cent by 2032; "
    "<b>there is no detailed plan behind that figure yet</b>, which is why this sentence says "
    "<i>aim</i>.</p>"))
S["r12-f13"]=lambda: f_realia(form("Statement planner",
    [("What we have done &mdash; with dates and evidence",""),("What is under way",""),
     ("What we have committed to",""),("What we intend",""),
     ("<b>The boundary &mdash; what is in, what is out, how big the out is</b>",""),
     ("The standard, and whether we are required to use it",""),
     ("<b>What this does not cover</b>","")]), 520)
S["r12-f14"]=lambda: f_scene(1000,450, people=[("paula",150,170,{"seated":True}),
    ("hanna",240,172,{"seated":True}),("okonjo",330,182,{"seated":True}),
    ("marek",430,180,{}),("chiamaka",520,172,{}),("ines",610,172,{}),
    ("nour",700,168,{}),("ravi",790,176,{}),("yara",870,172,{}),("wei",950,170,{})],
    props=[("table",200,250,1.3),("essay",280,196,0.3),("book",380,196,0.22),
    ("thermostat",560,140,0.34),("printer",660,205,0.44),("map",760,120,0.36),
    ("carton",860,0,0.5),("cafe",930,205,0.44)],
    board=(430,20,170,110,"DONE / INTENDED",[("moving","between")]))
S["r12-f15"]=lambda: f_chart([("a page on the website",7),("nothing",6),
    ("a short statement",4),("I do not know",4),("a full report",2)])
S["r12-f16"]=lambda: f_scene(880,420, people=[],
    props=[("desk",240,0,1.3),("essay",300,205,0.32),("form",380,208,0.26),
    ("computer",460,145,0.48),("thermostat",150,110,0.36)],
    window_=(630,56,110,96))
