# -*- coding: utf-8 -*-
"""Throughline Book 5 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 ----------------
S["pe04-f1"]=lambda: f_icons([("statement","a cash flow with a negative total"),
    ("tally","the same project with benefits added"),("pricetag","a shadow price"),
    ("form","a willingness-to-pay survey"),("calendar","a thirty-year reference period"),
    ("calculator","a discount rate"),("scales","a sensitivity test"),
    ("magnifier","a switching value"),("worldmap","a study from another country"),
    ("meeting","a decision maker with two results")], cols=5)
S["pe04-f2"]=lambda: f_scene(760,380,
    people=[("oksana",200,172,{}),("sofia",290,170,{})],
    props=[("desk",400,0,1.0),("statement",470,150,0.24),("calculator",570,150,0.24),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"ONE PROJECT",
      [("financial","−6.2"),("economic","+14.8")]),
    clockat=(360,34,22,11,10))
S["pe04-f3"]=lambda: f_icons([("statement","tariffs and operating costs"),
    ("walk","time savings and avoided illness"),("pricetag","a shadow price"),
    ("form","a survey form"),("magnifier","a line crossing zero"),
    ("worldmap","a study carried across a border")], cols=3)
S["pe04-f4"]=lambda: f_realia(tbl("Team research","Four unpriced benefits",
    ["The unpriced benefit","Who receives it","How it could be valued",
     "What the figure would rest on"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the benefit we claim and never measure.</b>"), 660)
S["pe04-f5"]=lambda: f_realia(doc("Lindhurst · appraisal note 4",
    "The Calder valley water scheme",
    "<p><b>The guide.</b> The <b>Guide to Cost-Benefit Analysis of Investment Projects</b>, "
    "published by the <b>European Commission</b>, <b>December 2014</b>, as the appraisal tool for "
    "major projects under its cohesion policy for <b>2014–2020</b>.</p>"
    + table_html(["","What it counts","Our result"],
      [["<b>Financial analysis</b>","money into and out of the project's own account",
        "<b>FNPV −6.2</b>"],
       ["<b>Economic analysis</b>","effects on everybody, with shadow prices and monetized effects",
        "<b>ENPV +14.8</b>"]])
    + "<p><b>Both are correct.</b> A negative financial result with a positive economic one is the "
    "<b>ordinary case for public infrastructure</b>: <b>were the financial result positive, a "
    "commercial operator would build it unaided.</b></p>"
    + table_html(["","Used","Source"],
      [["Financial discount rate","<b>4 % real</b>","the guide's benchmark"],
       ["Social discount rate","<b>5 % real</b>","the guide's benchmark"],
       ["Reference period","<b>30 years</b>","its indicative period for water and sanitation"],
       ["Conversion factors","national","our own statistics office"]])
    + table_html(["Input","Switching value"],
      [["Capital cost","<b>+61 %</b>"],["Operating cost","+94 %"],
       ["Social discount rate","7.8 %"],["Time savings per household","−38 %"],
       ["<b>Willingness to pay, water quality</b>","<b>−23 %</b>"]])
    + "<p style='border:1.5px solid #2f6b6b;padding:8px'><b>The weak point carries most of the "
    "case.</b> The willingness-to-pay figure is <b>transferred from a study in another country</b>, "
    "adjusted for income and household size as the guide's method allows. <b>Were it to fall by 23 "
    "percent, the economic net present value would be zero.</b> <b>No survey has been carried out "
    "here. One would cost about 40,000 and take eleven weeks</b> — a quarter of one percent of "
    "the capital cost.</p>"
    "<p><b>The counterfactual is not neutral.</b> Without the scheme, <b>two boreholes are expected "
    "to fail within eight to twelve years</b>, after which tankering begins. <b>Most of the economic "
    "benefit is the avoidance of that, not anything new.</b></p>",
    "Source: European Commission, Guide to Cost-Benefit Analysis of Investment Projects: Economic "
    "Appraisal Tool for Cohesion Policy 2014–2020, December 2014. Its discount rates and sector "
    "reference periods are benchmarks from which a justified departure is permitted; shadow prices "
    "and conversion factors depend on national data not supplied in it; and it presents cost-benefit "
    "analysis as one input to a decision, with distributional and strategic considerations outside "
    "the monetized result."), 640)
S["pe04-f6"]=lambda: f_realia(tbl("Word study","Appraisal conditionals",
    ["Structure","What it does","Example"],
    [["<i>were it to fall by</i>","tests one input",
      "<b>Were it to fall by</b> 23 percent, the result would be zero."],
     ["<i>if … were</i>","states a hypothetical",
      "<b>If</b> the rate <b>were</b> 8 percent, the gain would disappear."],
     ["<i>on the assumption that</i>","names the assumption",
      "<b>On the assumption that</b> demand grows at 1.2 percent."],
     ["<i>at a rate of</i>","states the rate used",
      "Discounted <b>at a rate of</b> 5 percent real."],
     ["<i>the switching value is</i>","",""],["<i>all other things being equal</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pe04-f7"]=lambda: f_chart([("willingness to pay",23),("time savings",38),
    ("social discount rate",56),("capital cost",61),("operating cost",94)],
    unit="percent to zero")
S["pe04-f8"]=lambda: f_icons([("statement","a negative financial total"),
    ("tally","a positive economic total"),("pricetag","a shadow price"),
    ("form","a survey form"),("magnifier","a line crossing zero"),
    ("worldmap","a borrowed study")], cols=3, numbered=False)
S["pe04-f9"]=lambda: f_realia(doc("Appraisal summary · Calder valley water scheme",
    "Two results, one project",
    table_html(["","Result","Rate","Period"],
      [["<b>Financial</b>","<b>FNPV −6.2</b>","4 % real","30 years"],
       ["<b>Economic</b>","<b>ENPV +14.8</b>","<b>5 % real</b>","30 years"]])
    + table_html(["Input","Switching value"],
      [["Capital cost","+61 %"],["Operating cost","+94 %"],["Social discount rate","7.8 %"],
       ["Time savings per household","−38 %"],
       ["<b>Willingness to pay</b>","<b>−23 %</b>"]])
    + "<p><b>Counterfactual.</b> Two boreholes expected to fail within <b>eight to twelve years</b>; "
    "most of the benefit counted is the avoidance of tankering.</p>"
    "<p style='font-size:15px'><b>NO LOCAL WILLINGNESS-TO-PAY SURVEY HAS BEEN CARRIED OUT.</b></p>",
    "Prepared by O. Bondar, 2 October. A survey would cost about 40,000 and take eleven weeks."),
    620)
S["pe04-f10"]=lambda: f_scene(860,400,
    people=[("oksana",110,174,{}),("sofia",320,176,{"seated":True}),
     ("okonjo",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("statement",250,148,0.24),("magnifier",360,150,0.22),
     ("invoice",520,150,0.24),("shelf",760,92,0.5)],
    board=(40,18,230,120,"ONE BORROWED NUMBER",
      [("switching value","−23%"),("survey cost","40k")]),
    clockat=(700,34,22,11,15))
S["pe04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Summary A","One figure",
      "<p><b>Net present value: +14.8 million. Recommendation: proceed.</b></p>"
      "<p style='font-size:12px;color:#6b6861'>Which net present value? At what rate? Over what "
      "period?</p>"), 380),
    lambda w,h: f_realia(doc("Summary B","Two results and five switching values",
      "<p><b>−6.2 financially at 4 % real; +14.8 economically at 5 % real; thirty years.</b></p>"
      "<p>Five switching values, the weakest being <b>−23 %</b> on a transferred figure.</p>"),
      380),
    w=820, h=300, lt="A VERDICT", rt="AN APPRAISAL")
S["pe04-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","The opening line",
      "<p><i>The scheme has a strongly positive net present value.</i></p>"), 380),
    lambda w,h: f_realia(doc("After","The same scheme",
      "<p><i>Economically +14.8 at 5 percent real over thirty years; financially −6.2 at 4 per "
      "cent; most of the gain is avoided borehole failure; one transferred figure has a switching "
      "value of −23 percent.</i></p>"), 380),
    w=820, h=300, lt="ONE NUMBER", rt="FOUR SENTENCES")
S["pe04-f13"]=lambda: f_realia(form("Appraisal planner",
    [("The financial result and its rate",""),("The economic result and its rate",""),
     ("The reference period",""),("What the benefit consists of",""),
     ("The switching values",""),("The weakest number, and where it came from","")],
    note="Six boxes. Hand it to a partner; they ask for the switching value."), 560)
S["pe04-f14"]=lambda: f_scene(1000,450,
    people=[("oksana",60,176,{}),("sofia",135,172,{}),("okonjo",210,176,{"seated":True}),
     ("priya",290,172,{"seated":True}),("anders",370,176,{"seated":True}),
     ("nkemelu",445,172,{}),("hana",520,176,{"seated":True}),("lars",595,170,{}),
     ("wei",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("invoice",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"TWO RESULTS",
      [("financial","−6.2"),("economic","+14.8")]),
    clockat=(278,34,22,11,15))
S["pe04-f15"]=lambda: f_chart([("yes, formally",3),("roughly",8),("no",12),
    ("we do not appraise",6),("I do not know",5)])
S["pe04-f16"]=lambda: f_realia(doc("On a desk in October",
    "What was on it at seven o'clock",
    "<p><b>An appraisal summary</b> with two results.</p>"
    "<p><b>A tornado chart</b> with one very long bar.</p>"
    "<p><b>A survey quotation</b> for forty thousand.</p>"
    "<p><b>A borehole condition report</b> dated 14 August.</p>"
    "<p><b>A note of three sentences.</b> <i>The weakest number in a fourteen-million decision is "
    "one that nobody here has ever been asked, and it would take a quarter of one percent of the "
    "capital cost and eleven weeks to replace it with a real one. I have put the switching value in "
    "the summary rather than the annex, because a reader who finds it for themselves stops believing "
    "the rest of the document, and they are right to. If the survey is refused I want the refusal "
    "recorded as a decision, because at the moment it is a deadline, and a deadline has never once "
    "been wrong in writing.</i></p>",
    "Seven o'clock. Minus six point two, plus fourteen point eight, minus twenty-three percent."),
    620)

# ---------------- Unit 5 ----------------
S["pe05-f1"]=lambda: f_icons([("logsheet","a site diary entry, 4 March"),
    ("envelope","a notice dated 9 April"),("calendar","twenty-eight days marked"),
    ("book","a standard form of contract"),("note","particular conditions"),
    ("signature","the engineer's determination"),("folder","a detailed claim"),
    ("meeting","a dispute board of three"),("timer","a clock running"),
    ("noentry","a claim stamped lapsed")], cols=5)
S["pe05-f2"]=lambda: f_scene(760,380,
    people=[("hana",200,172,{}),("nkemelu",290,170,{})],
    props=[("desk",400,0,1.0),("logsheet",470,150,0.24),("envelope",570,152,0.22),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"TWO DATES",
      [("diary","4 Mar"),("notice","9 Apr")]),
    clockat=(360,34,22,8,55))
S["pe05-f3"]=lambda: f_icons([("envelope","notice within 28 days"),
    ("folder","a detailed claim within 84"),("signature","a determination"),
    ("note","a period shortened by amendment"),("logsheet","a diary entry that triggers a notice"),
    ("noentry","a lapsed claim")], cols=3)
S["pe05-f4"]=lambda: f_realia(tbl("Team research","Four notice periods",
    ["What must be done","Within how long","From what event","What happens if it is late"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the period nobody on site knows.</b>"), 660)
S["pe05-f5"]=lambda: f_realia(doc("Lindhurst · commercial note 5",
    "One claim, thirty-six days",
    "<p><b>The form.</b> <b>FIDIC Conditions of Contract for Construction, Second Edition, 2017</b>, "
    "published by the <b>International Federation of Consulting Engineers</b>, replacing the first "
    "edition of <b>1999</b>. Written for works <b>designed by the employer</b>.</p>"
    + table_html(["Step","Period","Running from"],
      [["<b>Notice of claim</b>","<b>no later than 28 days</b>",
        "the date the party <b>became aware, or should have become aware</b>"],
       ["<b>Fully detailed claim</b>","<b>84 days</b>","the same date"],
       ["<b>Agreement or determination</b>","a further defined period",
        "receipt of the fully detailed claim"]])
    + table_html(["On the Calder contract",""],
      [["Foreman's diary entry, unforeseeable ground","<b>4 March</b>"],
       ["Notice of claim issued","<b>9 April</b>"],
       ["Days elapsed","<b>36</b>"],
       ["Period in the printed form","<b>28</b>"],
       ["<b>Period in our contract</b>","<b>21</b>"],
       ["Claim value","<b>1.34</b>"],
       ["Outcome","<b>time-barred</b>"]])
    + "<p style='border:1.5px solid #2f6b6b;padding:8px'><b>The number in the book was not the number "
    "in our contract.</b> The <b>particular conditions</b> at appendix page 4 amend the notice period "
    "from <b>28 days to 21</b>, and <b>they prevail</b>. <b>Nobody in the delivery team knew</b>: the "
    "site instruction pack quoted 28 days, copied from a previous contract. <b>We were not eight days "
    "late. We were fifteen days outside a period nobody on site had been told about.</b></p>"
    + table_html(["Twelve months of claim events",""],
      [["Claim events","<b>14</b>"],["Notified inside the period","<b>3</b>"],
       ["Notified late","<b>11</b> — median <b>41 days</b>"],
       ["<b>Of those, events with no substantive claim</b>","<b>2</b>"],
       ["<b>Realistic exposure</b>","<b>9 events, about 2.1</b>"]])
    + "<p><b>The change.</b> <b>Six categories of site diary entry generate a notice within seven "
    "days</b>, drafted by one named person. <b>Nine events since; nine notices inside the period; one "
    "claim of 0.21 recovered.</b></p>",
    "Source: FIDIC Conditions of Contract for Construction, Second Edition, 2017, published by the "
    "International Federation of Consulting Engineers, replacing the 1999 first edition. It is a "
    "standard form intended to be completed and amended by Particular Conditions, which prevail over "
    "the printed General Conditions; its printed periods are frequently amended in practice; it is "
    "written for works designed by the employer; and nothing here is legal advice or a substitute for "
    "the contract signed."), 640)
S["pe05-f6"]=lambda: f_realia(tbl("Word study","Time-bar obligations",
    ["Structure","What it does","Example"],
    [["<i>within … days of</i>","sets the length","<b>Within 21 days of</b> becoming aware."],
     ["<i>no later than</i>","sets the outer limit","<b>No later than</b> 25 March."],
     ["<i>the period runs from</i>","fixes the start",
      "<b>The period runs from</b> the date of awareness."],
     ["<i>failing which</i>","states the consequence",
      "<b>Failing which</b>, the entitlement is lost."],
     ["<i>shall be deemed</i>","",""],["<i>unless … within</i>","",""]],
    note="Two rows left empty on purpose. <b>A time bar needs a length, a trigger and a "
    "consequence.</b>"), 640)
S["pe05-f7"]=lambda: f_timeline([(0.0,"4 Mar","diary entry"),
    (0.58,"25 Mar","day 21 · ours"),(0.78,"1 Apr","day 28 · printed"),
    (1.0,"9 Apr","day 36 · notice issued")], 0.58, w=600)
S["pe05-f8"]=lambda: f_icons([("logsheet","a diary entry"),("envelope","a notice form"),
    ("calendar","a period marked"),("note","particular conditions"),
    ("signature","a determination"),("noentry","a lapsed claim")], cols=3, numbered=False)
S["pe05-f9"]=lambda: f_realia(doc("Notice of claim · Calder contract",
    "Ground conditions, chainage 1,420",
    "<p><b>1.</b> This is a <b>notice of claim</b> under the claims clause of the contract.</p>"
    "<p><b>2.</b> The contractor <b>became aware on 4 March</b> of ground conditions at chainage "
    "1,420, recorded in the site diary of that date, <b>which the contractor considers to be "
    "unforeseeable</b> within the meaning of the contract.</p>"
    "<p><b>3.</b> A <b>fully detailed claim</b>, with substantiation and quantification, will be "
    "submitted <b>within the period provided by the contract</b>.</p>"
    "<p><b>4. All rights are reserved.</b> Nothing in this notice limits the contractor's "
    "entitlement.</p>"
    "<p style='font-size:12px;color:#6b6861'>Delivered by hand and by email to the address at "
    "appendix page 2. Period: <b>21 days</b> from 4 March; last day <b>25 March</b>; this notice is "
    "three days old.</p>",
    "A notice is not an argument. Its only job is to exist, in writing, inside the period, delivered "
    "as the contract requires."), 620)
S["pe05-f10"]=lambda: f_scene(860,400,
    people=[("hana",110,174,{}),("nkemelu",320,176,{"seated":True}),
     ("bah",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("logsheet",250,148,0.24),("note",360,150,0.22),
     ("envelope",520,152,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"WHICH NUMBER IS OURS",
      [("printed","28"),("agreed","21")]),
    clockat=(700,34,22,9,0))
S["pe05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Pack A","Twenty-eight days",
      "<p><i>Notices of claim must be submitted within 28 days.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>No clause number, no source. Copied from the "
      "previous job.</p>"), 380),
    lambda w,h: f_realia(doc("Pack B","Twenty-one days",
      "<p><i>Notice within 21 days of awareness — particular conditions, appendix page 4.</i></p>"
      "<p>Six diary categories that trigger a notice within seven days.</p>"), 380),
    w=820, h=300, lt="THE BOOK", rt="THE CONTRACT")
S["pe05-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Notice A","Three paragraphs of argument",
      "<p><i>We have encountered difficult ground and consider that we are entitled to additional "
      "time and cost, as discussed at the site meeting…</i></p>"
      "<p style='font-size:12px;color:#6b6861'>No date of awareness anywhere.</p>"), 380),
    lambda w,h: f_realia(doc("Notice B","Four numbered lines",
      "<p>The clause. The event and <b>the date of awareness</b>. The next step. The reservation of "
      "rights.</p>"), 380),
    w=820, h=300, lt="AN ARGUMENT", rt="A NOTICE")
S["pe05-f13"]=lambda: f_realia(form("Notice planner",
    [("The clause",""),("The event and location",""),("The date of awareness",""),
     ("The next step and its period",""),("The reservation of rights",""),
     ("How and where it must be delivered","")],
    note="Six boxes. Hand it to a partner; they ask what date the period runs from."), 560)
S["pe05-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("nkemelu",135,172,{}),("bah",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("anders",370,176,{"seated":True}),
     ("lars",445,172,{}),("oksana",520,176,{"seated":True}),("sofia",595,170,{}),
     ("wei",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("logsheet",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"WHICH NUMBER IS OURS",
      [("printed","28"),("ours","21")]),
    clockat=(278,34,22,9,0))
S["pe05-f15"]=lambda: f_chart([("yes, exactly",4),("roughly",9),("no",13),
    ("I have no contract",3),("I did not know there was one",5)])
S["pe05-f16"]=lambda: f_realia(doc("On a desk in April",
    "What was on it at six o'clock",
    "<p><b>A site diary</b> open at the fourth of March.</p>"
    "<p><b>A notice</b> dated the ninth of April.</p>"
    "<p><b>Particular conditions</b> open at appendix page four.</p>"
    "<p><b>A site instruction pack</b> quoting twenty-eight days.</p>"
    "<p><b>A note of three sentences.</b> <i>The clock started in a foreman's handwriting and the "
    "obligation belonged to me, and no amount of training closes a gap of two people and three "
    "weeks, so the trigger had to become mechanical. Our own instruction pack carried a number from "
    "a different contract, which is the kind of error nobody can see because it looks like "
    "competence. I am reporting nine events and 2.1 million rather than eleven and a larger figure, "
    "because two of the eleven had nothing behind them and I would rather the board argued about our "
    "notices than about my arithmetic.</i></p>",
    "Six o'clock. Twenty-eight, twenty-one, thirty-six."), 620)

# ---------------- Unit 6 ----------------
S["pe06-f1"]=lambda: f_icons([("meeting","an early warning raised"),
    ("logsheet","a register with an action column"),("timetable","a programme stamped accepted"),
    ("noentry","a programme not accepted"),("envelope","a compensation event notice"),
    ("invoice","a quotation, three weeks"),("scales","target against actual"),
    ("handshake","pain and gain shared"),("pipe","a utility diversion"),
    ("crane","a crane resequenced")], cols=5)
S["pe06-f2"]=lambda: f_scene(760,380,
    people=[("hana",200,172,{}),("bah",290,170,{})],
    props=[("desk",400,0,1.0),("logsheet",470,150,0.24),("timetable",570,150,0.24),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"THE REGISTER",
      [("entries","31"),("changed the plan","4")]),
    clockat=(360,34,22,7,20))
S["pe06-f3"]=lambda: f_icons([("meeting","a warning with no solution"),
    ("logsheet","an entry with an owner"),("timetable","an accepted programme"),
    ("envelope","notified within eight weeks"),("invoice","a quotation within three"),
    ("signature","a reply within two")], cols=3)
S["pe06-f4"]=lambda: f_realia(tbl("Team research","Four warnings nobody has given",
    ["What I know","How long I have known","What it could affect",
     "Why I have not raised it"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the one we are all waiting for somebody else to say.</b>"), 660)
S["pe06-f5"]=lambda: f_realia(doc("Lindhurst · commercial note 6",
    "Fourteen months on a target contract",
    "<p><b>The contract.</b> The <b>NEC4 Engineering and Construction Contract</b>, published "
    "<b>June 2017</b> by the <b>Institution of Civil Engineers</b>. Two things about it are unlike "
    "any other form we use.</p>"
    "<p><b>First, the tense.</b> It is written in the <b>present tense</b>, in short clauses: "
    "<i>the contractor notifies the project manager</i>, <i>the project manager replies within two "
    "weeks</i>. <b>It describes what the parties do on Tuesday.</b></p>"
    "<p><b>Second, the word <i>could</i>.</b> Each party notifies the other of any matter "
    "<b>which could</b> increase the total of the prices, delay completion, delay a key date or "
    "impair performance in use. <b>Could. Not <i>will</i>. Not <i>once you have a solution</i>.</b></p>"
    + table_html(["Step","Period"],
      [["early warning","<b>as soon as either party becomes aware</b>"],
       ["notifying a compensation event","<b>within 8 weeks</b> of becoming aware"],
       ["submitting a quotation","<b>3 weeks</b>"],
       ["the project manager's reply","<b>2 weeks</b>"]])
    + "<p style='border:1.5px solid #2f6b6b;padding:8px'><b>The Calder trench.</b> The site team knew "
    "in <b>week 3</b> that the utility diversion had to finish before the trench reached chainage "
    "800. <b>It was raised in week 14.</b> <b>In week 3: eleven weeks of float and three options. In "
    "week 14: none and one.</b> <b>Outcome: six weeks, about 420</b>, of which <b>210</b> is ours at "
    "the share percentages. <b>Nobody had a solution, and the habit of this industry is that you do "
    "not raise a problem until you can propose the answer.</b></p>"
    + table_html(["Fourteen months",""],
      [["Early warnings given","<b>31</b> — 19 by us, 12 by the project manager"],
       ["Led to a change in the plan","<b>4</b>"],
       ["Recorded, nothing done","<b>27</b>"]])
    + "<p><b>Four of thirty-one looks like failure until the four are priced: one was a crane "
    "sequencing change that saved about 380.</b> And <b>we had no accepted programme for eleven "
    "weeks</b>, so three compensation events were assessed against nothing.</p>",
    "Source: the NEC4 Engineering and Construction Contract, published June 2017 by the Institution "
    "of Civil Engineers. The contract is written in the present tense and designed to be actively "
    "administered within short stated periods; its option clauses and contract data substantially "
    "determine what is agreed; compensation event assessment depends on an accepted programme; and "
    "nothing here is legal advice or a substitute for the contract signed."), 640)
S["pe06-f6"]=lambda: f_realia(tbl("Word study","The contract present tense",
    ["Structure","What it does","Example"],
    [["the present simple","states what happens, not what shall happen",
      "The contractor <b>notifies</b> the project manager."],
     ["<i>replies within</i>","attaches a period to a party",
      "The project manager <b>replies within</b> two weeks."],
     ["<i>if</i> + present","states the consequence",
      "<b>If</b> it <b>is</b> a compensation event, he <b>instructs</b> a quotation."],
     ["<i>does not</i>","the negative obligation",
      "The contractor <b>does not</b> proceed without an instruction."],
     ["<i>is treated as</i>","",""],["<i>gives an early warning of</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pe06-f7"]=lambda: f_part("Thirty-one early warnings",
    [("recorded, no action",27,"#b07a1e"),("changed the plan",4,"#4a6b3b")])
S["pe06-f8"]=lambda: f_icons([("meeting","an early warning"),("logsheet","a register entry"),
    ("timetable","an accepted programme"),("envelope","a compensation event"),
    ("invoice","a quotation"),("scales","target and actual")], cols=3, numbered=False)
S["pe06-f9"]=lambda: f_realia(tbl("Early warning register · extract",
    "Thirty-one entries · four with an action and a closure date",
    ["#","Date","What it could affect","Owner","Action agreed","Closed"],
    [["3","wk 6","the prices","both","crane resequenced","wk 9"],
     ["7","wk 11","completion","us","—","—"],
     ["11","wk 17","a key date","PM","—","—"],
     ["14","wk 22","the prices","us","order brought forward","wk 24"],
     ["19","wk 29","performance in use","PM","—","—"],
     ["23","wk 36","completion","both","sequence changed","wk 38"],
     ["27","wk 44","the prices","us","—","—"],
     ["31","wk 51","completion","both","access rescheduled","wk 53"]],
    note="<b>Four of thirty-one changed the plan. One of the four saved about 380.</b>"), 700)
S["pe06-f10"]=lambda: f_scene(860,400,
    people=[("hana",110,174,{}),("nkemelu",320,176,{"seated":True}),
     ("bah",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("logsheet",250,148,0.24),("timetable",360,148,0.24),
     ("note",520,150,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"COULD, NOT WILL",
      [("week 3 float","11 wk"),("week 14 float","0")]),
    clockat=(700,34,22,7,30))
S["pe06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Extract A","No owners",
      "<p>Entries with a date and a description. No owner column, no action column.</p>"
      "<p style='font-size:12px;color:#6b6861'>A filing system.</p>"), 380),
    lambda w,h: f_realia(doc("Extract B","Owners and float",
      "<p>An owner, an action, a closure date — and <b>the float available on the day the entry "
      "was raised</b>.</p>"), 380),
    w=820, h=300, lt="A LIST", rt="A REGISTER")
S["pe06-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Warning A","A paragraph",
      "<p><i>We have some concerns about the diversion and will bring a proposal to the next monthly "
      "meeting.</i></p>"), 380),
    lambda w,h: f_realia(doc("Warning B","Four numbered lines",
      "<p>What it is. The matter, using <b>could</b>, with a date. <b>We do not have a proposed "
      "solution.</b> A meeting on Thursday.</p>"), 380),
    w=820, h=300, lt="A CONCERN", rt="A WARNING")
S["pe06-f13"]=lambda: f_realia(form("Early warning planner",
    [("The matter",""),("What it could affect",""),("The date it was first known",""),
     ("The float available today",""),("Whether a solution exists",""),
     ("The meeting proposed","")],
    note="Six boxes. Hand it to a partner; they ask how much float is left."), 560)
S["pe06-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("bah",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("anders",290,172,{"seated":True}),("lars",370,176,{"seated":True}),
     ("okonjo",445,172,{}),("oksana",520,176,{"seated":True}),("sofia",595,170,{}),
     ("wei",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("logsheet",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"THE WORD IN THE CLAUSE",
      [("could","✓"),("will","✕")]),
    clockat=(278,34,22,7,30))
S["pe06-f15"]=lambda: f_chart([("yes, formally",4),("informally",9),("no",11),
    ("it would be career-limiting",6),("I have never tried",4)])
S["pe06-f16"]=lambda: f_realia(doc("On a desk in week fourteen",
    "What was on it at six o'clock",
    "<p><b>An early warning register</b> of thirty-one rows.</p>"
    "<p><b>A programme</b> stamped not accepted.</p>"
    "<p><b>A compensation event assessment</b> with a blank baseline.</p>"
    "<p><b>A sketch of three sequences</b>, two crossed out.</p>"
    "<p><b>A note of three sentences.</b> <i>Nobody concealed anything: five people knew in week "
    "three and all five were behaving professionally by the standards they were trained in, which is "
    "never to bring a problem without an answer. The clause asks for the problem alone and says "
    "could rather than will, and until somebody senior gives a warning in public with no solution "
    "attached, it will stay a route with no motive. The eleven weeks without an accepted programme "
    "were mutual and they are worse, because they turned three pieces of arithmetic into four months "
    "of argument and chasing the document was nobody's job.</i></p>",
    "Six o'clock. Thirty-one warnings, four actions, eleven weeks."), 620)
