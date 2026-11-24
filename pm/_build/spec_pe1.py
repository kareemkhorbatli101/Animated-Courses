# -*- coding: utf-8 -*-
"""Throughline Book 5 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["pe00-f1"]=lambda: f_realia(tbl("Six things you brought from Book 4",
    "One example each, from a project meeting",
    ["What you have","An example"],
    [["Abstract nouns into people","<b>Who</b> telephones <b>whom</b>, how often?"],
     ["<i>Must … unless</i>","It <b>must</b> be escalated <b>unless</b> it is within tolerance."],
     ["<i>Over</i>, not instead of","Working software <b>over</b> comprehensive documentation."],
     ["Hedging","It <b>is claimed that</b> most projects fail."],
     ["<i>Any one of which</i>","Four criteria, <b>any one of which</b> stops the project."],
     ["<i>By</i> + gerund","Urgency was created <b>by showing</b> people real figures."]],
    note="Six boxes. This book asks the one question that ends up in a contract: how much, for what, "
    "and who is obliged by it?"), 580)
S["pe00-f2"]=lambda: f_realia(doc("Taped inside a notebook",
    "Four questions to ask any number",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;A number of what, exactly?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Design, land, connection charges, spares, client "
    "staff, tax? A price without a boundary is not a price.</span><br>"
    "<b>2 &nbsp;How accurate is it, and who says so?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>A single figure with no range is a guess wearing a "
    "suit.</span><br>"
    "<b>3 &nbsp;Which year's money, over what period?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Three million today and three million in year "
    "twelve are different amounts.</span><br>"
    "<b>4 &nbsp;Who is obliged by it, and from when?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>A number in a report obliges nobody.</span></p>",
    "Four questions. The fourth one is the one with a date attached."), 620)
S["pe00-f3"]=lambda: f_panels(
    lambda w,h: f_realia(doc("What travels","One figure",
      "<p style='font-size:22px;text-align:center'><b>14 million</b></p>"
      "<p style='font-size:12px;color:#6b6861'>In the board pack. Quoted all year. Understood as "
      "the price.</p>"), 380),
    lambda w,h: f_realia(doc("What was prepared","The same figure",
      "<p><b>14 million, +30 % / −15 %</b>, at a <b>class 4</b> level of definition, prepared "
      "in <b>March</b> in <b>this year's</b> money by <b>O. Bondar</b>, <b>excluding</b> land, "
      "connection charges and client staff.</p>"), 380),
    w=820, h=320, lt="A NUMBER", rt="AN ESTIMATE")
S["pe00-f4"]=lambda: f_realia(doc("Two ways of answering one question",
    "“Will it cost more than we said?”",
    "<p style='font-size:15px'><b>“We are confident that the budget is adequate.”</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Cannot be wrong. Worth nothing.</p>"
    "<p style='font-size:15px'><b>“14.2 at class 4, plus thirty minus fifteen, excluding land "
    "and connection charges, prepared in March in this year's money; at 4 per cent escalation the "
    "same scope is 15.4 at the midpoint of construction.”</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Can be checked, challenged and disproved by anybody "
    "with an afternoon.</p>"), 600)

# ---------------- Unit 1 ----------------
S["pe01-f1"]=lambda: f_icons([("note","a sketch on one sheet"),
    ("spreadsheet","a drawing set, part complete"),("folder","a full design package"),
    ("tally","a single figure on a slide"),("scales","the same figure with a range"),
    ("clipboard","five classes"),("coins","a contingency allowance"),("data","a soil report"),
    ("card","a reference project"),("padlock","a budget line locked")], cols=5)
S["pe01-f2"]=lambda: f_scene(760,380,
    people=[("oksana",200,172,{}),("anders",290,170,{})],
    props=[("desk",400,0,1.0),("note",470,150,0.24),("folder",570,150,0.28),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"FIVE CLASSES",
      [("widest","5"),("narrowest","1")]),
    clockat=(360,34,22,8,20))
S["pe01-f3"]=lambda: f_icons([("note","class 5 · a sketch"),
    ("spreadsheet","class 4 · a sketch set"),("clipboard","class 3 · a third complete"),
    ("folder","class 2 · nearly complete"),("proof","class 1 · tendered"),
    ("scales","five ranges in one table")], cols=3)
S["pe01-f4"]=lambda: f_realia(tbl("Team research","Four numbers and their classes",
    ["The figure","How much was defined","The range issued with it","What it was later used for"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the figure that became a budget.</b>"), 660)
S["pe01-f5"]=lambda: f_realia(doc("Lindhurst · cost engineering note 1",
    "Five classes, one missing step",
    "<p><b>The document.</b> <b>AACE International Recommended Practice No. 18R-97</b>, <i>Cost "
    "Estimate Classification System</i>, <b>first issued 1997</b> and revised since. A "
    "<b>recommended practice</b>, not a standard.</p>"
    + table_html(["Class","Project definition","Typical use"],
      [["<b>5</b>","<b>0 – 2 %</b>","screening, concept"],
       ["<b>4</b>","1 – 15 %","study, feasibility"],
       ["<b>3</b>","10 – 40 %","<b>budget authorization</b>"],
       ["<b>2</b>","30 – 75 %","control, bid"],
       ["<b>1</b>","65 – 100 %","check estimate, tender"]])
    + table_html(["Class","Low","High"],
      [["<b>5</b>","−20 % to −50 %","<b>+30 % to +100 %</b>"],
       ["4","−15 % to −30 %","+20 % to +50 %"],
       ["3","−10 % to −20 %","+10 % to +30 %"],
       ["2","−5 % to −15 %","+5 % to +20 %"],
       ["1","−3 % to −10 %","+3 % to +15 %"]])
    + "<p style='border:1.5px solid #2f6b6b;padding:8px'><b>March, year one.</b> A figure requested "
    "in <b>two days</b> with nothing designed. <b>12 million issued at class 5</b>, range "
    "<b>6 to 24</b>, with six exclusions. <b>The board pack carried the figure and not the range</b>: "
    "the template had one cell. <b>The 12 became the budget</b> at the gate where the practice places "
    "a <b>class 3</b> estimate. <b>Outcome: 16.1 — inside the issued range.</b></p>"
    "<p><b>The ranges are typical, not guarantees.</b> They assume contingency is included and "
    "reference data of reasonable quality. <b>Our reference project was in another country with "
    "different ground.</b> On the practice's own terms <b>our real range was wider than the printed "
    "one</b>, and I did not say so in March.</p>",
    "Source: AACE International Recommended Practice No. 18R-97, Cost Estimate Classification "
    "System — As Applied in Engineering, Procurement, and Construction for the Process "
    "Industries, first issued 1997 and revised subsequently. A recommended practice rather than a "
    "standard; estimates are classified by degree of project definition; the accuracy ranges are "
    "typical and depend on reference data quality, contingency and systemic risks; it contains no "
    "cost data."), 640)
S["pe01-f6"]=lambda: f_realia(tbl("Word study","Ranges and accuracy",
    ["Structure","What it states","Example"],
    [["<i>plus … minus</i>","an asymmetric range",
      "12 million, <b>plus 100 per cent, minus 50</b>."],
     ["<i>between … and</i>","the outer bounds","<b>Between</b> 6 <b>and</b> 24 million."],
     ["<i>of the order of</i>","a magnitude, not a figure","<b>Of the order of</b> 12 million."],
     ["<i>no better than</i>","the limit of the claim",
      "Accuracy <b>no better than</b> plus or minus 30 per cent."],
     ["<i>to within</i>","",""],["<i>at a confidence interval of</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pe01-f7"]=lambda: f_chart([("class 5 (0–2 % defined)",150),("class 4",80),
    ("class 3",50),("class 2",35),("class 1",25)], unit="per cent spread")
S["pe01-f8"]=lambda: f_icons([("note","a one-page sketch"),
    ("spreadsheet","a part-complete set"),("folder","a complete design"),
    ("tally","a figure on a slide"),("scales","the figure with a range"),
    ("form","a basis of estimate")], cols=3, numbered=False)
S["pe01-f9"]=lambda: f_realia(doc("Basis of estimate · pumping station, concept",
    "12 million · class 5 · range 6 to 24",
    table_html(["",""],
      [["Level of definition","<b>under 2 per cent</b> — a site plan and a flow figure"],
       ["Class","<b>5</b> (screening and concept)"],
       ["Typical range","<b>−50 % to +100 %</b>"],
       ["Range in figures","<b>6.0 to 24.0</b>"],
       ["Money year","<b>this year</b>, unescalated"],
       ["Method","<b>stochastic</b>: one reference project, factored"],
       ["Prepared in","<b>two days</b>"]])
    + "<p><b>Excluded.</b> Land. Connection charges. Client staff time. Tax of any kind. Escalation "
    "beyond the current year. Decommissioning of the existing plant.</p>"
    "<p style='font-size:15px'><b>THIS FIGURE MAY NOT BE USED TO SET A BUDGET.</b></p>",
    "Prepared by O. Bondar, 14 March. A class 3 estimate takes about five weeks and halves the "
    "range."), 620)
S["pe01-f10"]=lambda: f_scene(860,400,
    people=[("oksana",110,174,{}),("okonjo",320,176,{"seated":True}),
     ("anders",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("form",250,148,0.24),("spreadsheet",360,148,0.24),
     ("invoice",520,150,0.24),("shelf",760,92,0.5)],
    board=(40,18,230,120,"INSIDE THE RANGE",[("issued","12"),("outcome","16.1")]),
    clockat=(700,34,22,9,0))
S["pe01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Sheet A","One cell",
      "<p style='font-size:22px;text-align:center'><b>12.0</b></p>"
      "<p style='font-size:12px;color:#6b6861'>No class. No range. No exclusions.</p>"), 380),
    lambda w,h: f_realia(doc("Sheet B","Seven lines",
      "<p><b>12.0</b> · class <b>5</b> · under <b>2 %</b> defined · <b>−50 % to "
      "+100 %</b> · <b>6.0 to 24.0</b> · this year's money · <b>six exclusions</b>."
      "</p>"), 380),
    w=820, h=300, lt="A FIGURE", rt="AN ESTIMATE")
S["pe01-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","March, year one",
      "<p><i>Estimated cost: 12 million.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Became the budget at the authorization gate.</p>"),
      380),
    lambda w,h: f_realia(doc("After","The same March",
      "<p><i>12 million, class 5, range 6 to 24; may not be used to set a budget; a class 3 "
      "estimate takes five weeks.</i></p>"), 380),
    w=820, h=300, lt="WHAT WENT", rt="WHAT SHOULD HAVE")
S["pe01-f13"]=lambda: f_realia(form("Basis-of-estimate planner",
    [("The figure",""),("Level of definition and class",""),
     ("Range, in per cent and in figures",""),("What is excluded",""),
     ("Money year and method",""),("What the figure may not be used for","")],
    note="Six boxes. Hand it to a partner; they ask what it excludes."), 560)
S["pe01-f14"]=lambda: f_scene(1000,450,
    people=[("oksana",60,176,{}),("anders",135,172,{}),("okonjo",210,176,{"seated":True}),
     ("nkemelu",290,172,{"seated":True}),("hana",370,176,{"seated":True}),
     ("wei",445,172,{}),("lars",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("form",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"INSIDE THE RANGE",[("issued","12"),("outcome","16.1")]),
    clockat=(278,34,22,9,0))
S["pe01-f15"]=lambda: f_chart([("yes, a range",4),("yes, a figure and a contingency",7),
    ("no, one figure",13),("I never saw the estimate",6),("we do not estimate",2)])
S["pe01-f16"]=lambda: f_realia(doc("On a desk in March, two years later",
    "What was on it at six o'clock",
    "<p><b>A one-page basis of estimate</b> from year one.</p>"
    "<p><b>A board pack</b> open at a page with one cell.</p>"
    "<p><b>A five-bar range chart</b>, with a point marked inside the widest bar.</p>"
    "<p><b>A final account</b> reading 16.1.</p>"
    "<p><b>A note of three sentences.</b> <i>The estimate was correct and the budget was wrong, and "
    "they were the same number, which is the only interesting fact in this file. A template with one "
    "cell for a cost deletes the range every time and nobody has to intend it, so the range must be "
    "in the same sentence as the figure or it does not travel. My own fault is smaller and real: the "
    "printed range assumes decent reference data and mine came from another country, so I should "
    "have written a wider range than the table gave me and I wrote the table's.</i></p>",
    "Six o'clock. Twelve issued, six to twenty-four, sixteen point one."), 620)

# ---------------- Unit 2 ----------------
S["pe02-f1"]=lambda: f_icons([("container","one finished unit"),
    ("racking","forty-six units in a row"),("review","a falling curve"),
    ("tally","a doubling marked"),("timer","a stopwatch and a pair of hands"),
    ("pallet","identical steel plates"),("noentry","a break in production"),
    ("meeting","a crew replaced"),("form","a bid sheet, one rate"),
    ("invoice","a lower competitor bid")], cols=5)
S["pe02-f2"]=lambda: f_scene(760,380,
    people=[("oksana",200,172,{}),("lars",290,170,{})],
    props=[("desk",400,0,1.0),("form",470,150,0.24),("container",570,148,0.26),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"DOUBLINGS",
      [("first unit","180 h"),("forty-sixth","73 h")]),
    clockat=(360,34,22,7,50))
S["pe02-f3"]=lambda: f_icons([("container","the first unit · 180 h"),
    ("crate","the second · 153 h"),("pallet","the fourth · 130 h"),
    ("review","the curve flattening"),("noentry","a break of eleven weeks"),
    ("racking","steel, which does not learn")], cols=3)
S["pe02-f4"]=lambda: f_realia(tbl("Team research","What do you build more than once?",
    ["The repeated task","How many a year","The first one's hours","The most recent one's hours"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>what we charge for the tenth one.</b>"), 660)
S["pe02-f5"]=lambda: f_realia(doc("Lindhurst · cost engineering note 2",
    "Forty-six identical kiosks",
    "<p><b>The paper.</b> <b>T. P. Wright</b>, <i>Factors Affecting the Cost of Airplanes</i>, "
    "<b>Journal of the Aeronautical Sciences, February 1936</b>. Labor per unit falls by a roughly "
    "constant percentage <b>each time cumulative output doubles</b> — about <b>twenty per "
    "cent</b> in his airframe data, an <b>eighty per cent curve</b>.</p>"
    + table_html(["Cumulative units","Hours for that unit","Cumulative average"],
      [["<b>1</b>","<b>180</b>","180"],["<b>2</b>","153","167"],["<b>4</b>","130","148"],
       ["<b>8</b>","111","131"],["<b>16</b>","94","116"],["<b>32</b>","80","103"],
       ["<b>46</b>","<b>73</b>","<b>96</b>"]])
    + "<p><b>Our bid: 180 × 46 = 8,280 hours.</b> One rate, forty-six times. <b>The curve gives "
    "about 4,400.</b> We lost the tender and the gap was mostly this.</p>"
    + table_html(["On the thirty-unit job we did win","Hours"],
      [["Priced at the first-unit rate","<b>8,280</b>"],
       ["Predicted by an 85 % curve","<b>4,400</b>"],
       ["<b>Actually used</b>","<b>5,150</b>"]])
    + "<p style='border:1.5px solid #2f6b6b;padding:8px'><b>The 750-hour difference is explained.</b> "
    "Production was <b>interrupted for eleven weeks</b> and <b>four of six fitters changed</b>. The "
    "curve assumes <b>continuity</b>. <b>About 700 of those hours were re-learning.</b></p>"
    "<p><b>Material does not follow it</b>: forty-six kiosks need forty-six kiosks' worth of steel. "
    "<b>Price anything we build more than eight times on a stated curve</b>, with the rate taken "
    "from our own timesheets.</p>",
    "Source: T. P. Wright, Factors Affecting the Cost of Airplanes, Journal of the Aeronautical "
    "Sciences, February 1936. An empirical relationship observed in airframe manufacture between "
    "cumulative output and labor per unit; the improvement percentage is an observation from that "
    "industry and period rather than a constant; it concerns direct labor on repeated identical "
    "units and not material; and it presumes continuity of production."), 640)
S["pe02-f6"]=lambda: f_realia(tbl("Word study","Proportional change",
    ["Structure","What it states","Example"],
    [["<i>for every doubling</i>","the interval of change",
      "<b>For every doubling</b> of output, hours fall by 15 per cent."],
     ["<i>falls by</i>","the size of the reduction","It <b>falls by</b> 15 per cent."],
     ["<i>falls to</i>","the remaining proportion",
      "It <b>falls to</b> 85 per cent of the previous figure."],
     ["<i>each successive</i>","the pattern across units",
      "<b>Each successive</b> unit is cheaper than the last."],
     ["<i>by a factor of</i>","",""],["<i>on a curve of</i>","",""]],
    note="Two rows left empty on purpose. <b>Falls by 85 leaves fifteen; falls to 85 leaves "
    "eighty-five.</b>"), 640)
S["pe02-f7"]=lambda: f_line([("1",180),("2",153),("4",130),("8",111),("16",94),("24",85),
    ("32",80),("40",75),("46",73)], w=620, h=240, unit="hours per unit")
S["pe02-f8"]=lambda: f_icons([("container","a first unit on a bench"),
    ("racking","forty-six in a row"),("review","a falling curve"),
    ("tally","a doubling on an axis"),("noentry","a break in the line"),
    ("pallet","a pile of steel")], cols=3, numbered=False)
S["pe02-f9"]=lambda: f_realia(tbl("Labor build-up · forty-six kiosks",
    "85 per cent curve · first unit 180 hours · priced on continuous production",
    ["Unit","Hours","Cumulative total","Cumulative average","Note"],
    [["1","<b>180</b>","180","180","first of type"],
     ["2","153","333","167","one doubling"],
     ["4","130","592","148","two doublings"],
     ["8","111","1,046","131","three"],
     ["16","94","1,853","116","four"],
     ["32","80","3,290","103","five"],
     ["<b>46</b>","<b>73</b>","<b>4,411</b>","<b>96</b>","—"]],
    note="<b>Priced on continuous production.</b> Rate taken from our own timesheets on the "
    "thirty-unit job."), 700)
S["pe02-f10"]=lambda: f_scene(860,400,
    people=[("oksana",110,174,{}),("lars",320,176,{"seated":True}),
     ("bah",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("form",250,148,0.24),("timesheet",360,148,0.24),
     ("envelope",520,150,0.24),("shelf",760,92,0.5)],
    board=(40,18,230,120,"EIGHTY-FIVE PER CENT",
      [("bid hours","8,280"),("curve hours","4,400")]),
    clockat=(700,34,22,8,0))
S["pe02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Sheet A","One rate, forty-six times",
      "<p><b>180 × 46 = 8,280 hours.</b></p>"
      "<p style='font-size:12px;color:#6b6861'>Easy to check in two seconds. Lost the tender.</p>"),
      380),
    lambda w,h: f_realia(doc("Sheet B","A curve and a condition",
      "<p><b>First unit 180 · 85 % curve · cumulative average 96 · about 4,400 "
      "hours.</b></p><p><b>Continuity clause:</b> if production is interrupted for more than two "
      "weeks, the remaining units revert to a rate two doublings back.</p>"), 380),
    w=820, h=300, lt="MULTIPLIED", rt="CURVED")
S["pe02-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","The bid",
      "<p><i>46 units at 180 hours each.</i></p>"), 380),
    lambda w,h: f_realia(doc("After","The build-up",
      "<p><i>Hours fall to 85 per cent of the previous figure for every doubling; cumulative average "
      "96 hours; rate from our own timesheets; continuity priced.</i></p>"), 380),
    w=820, h=300, lt="A MULTIPLICATION", rt="A METHOD")
S["pe02-f13"]=lambda: f_realia(form("Build-up planner",
    [("The first unit's hours",""),("The curve rate, and where it came from",""),
     ("The hours at each doubling",""),("The cumulative average and total",""),
     ("What does not follow the curve",""),("The continuity condition","")],
    note="Six boxes. Hand it to a partner; they ask what happens if production stops."), 560)
S["pe02-f14"]=lambda: f_scene(1000,450,
    people=[("oksana",60,176,{}),("lars",135,172,{}),("bah",210,176,{"seated":True}),
     ("nkemelu",290,172,{"seated":True}),("anders",370,176,{"seated":True}),
     ("wei",445,172,{}),("hana",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("container",548,196,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"THE SAME 46 UNITS",
      [("multiplied","8,280"),("curved","4,400")]),
    clockat=(278,34,22,8,0))
S["pe02-f15"]=lambda: f_chart([("yes, formally",3),("informally",6),("no",14),
    ("we build nothing twice",5),("I do not know",4)])
S["pe02-f16"]=lambda: f_realia(doc("On a desk in April",
    "What was on it at six o'clock",
    "<p><b>A bid sheet</b> repeating one rate forty-six times.</p>"
    "<p><b>A labor build-up</b> showing the doublings.</p>"
    "<p><b>A timesheet summary</b> reading 5,150.</p>"
    "<p><b>A letter withdrawing access</b> for eleven weeks.</p>"
    "<p><b>A journal from 1936.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The men on the bench have been telling us this for "
    "twenty years in the sentence the first one was a nightmare, and nobody had written it into a "
    "price. The curve is not a discount and I will not present it as one: it is a statement about "
    "continuous work by a stable crew, and continuity belongs to the client, so it has to appear in "
    "the contract as a condition with a price attached. Our rate came from our own timesheets rather "
    "than a 1936 paper about airframes, which is the only reason I am willing to defend it in a "
    "commercial review.</i></p>",
    "Six o'clock. Eight thousand two hundred and eighty, four thousand four hundred, five thousand "
    "one hundred and fifty."), 620)

# ---------------- Unit 3 ----------------
S["pe03-f1"]=lambda: f_icons([("coins","a capital cost, one tall bar"),
    ("tally","thirty small annual bars"),("boiler","a maintenance visit"),
    ("scaffolding","a refurbishment at year fifteen"),("recycle","disposal at the end"),
    ("calculator","a discount rate"),("statement","a present-value figure"),
    ("calendar","a thirty-year period"),("badge","a design life of twenty years"),
    ("odometer","an energy meter")], cols=5)
S["pe03-f2"]=lambda: f_scene(760,380,
    people=[("oksana",200,172,{}),("okonjo",290,170,{})],
    props=[("desk",400,0,1.0),("calculator",470,150,0.24),("statement",570,150,0.24),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"TWO PROFILES",
      [("A: capital","1.8"),("B: capital","2.6")]),
    clockat=(360,34,22,2,25))
S["pe03-f3"]=lambda: f_icons([("coins","a cheap pump, high running cost"),
    ("tally","a dearer pump, low running cost"),("calculator","discounting a distant year"),
    ("scaffolding","a refurbishment at year fifteen"),("recycle","a disposal cost"),
    ("statement","two present-value totals")], cols=3)
S["pe03-f4"]=lambda: f_realia(tbl("Team research","Four decisions and their horizons",
    ["The decision","The period it was judged over","The discount rate used",
     "The design life of what was bought"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the gap between the two periods.</b>"), 660)
S["pe03-f5"]=lambda: f_realia(doc("Lindhurst · cost engineering note 3",
    "Two pumps, thirty years",
    "<p><b>The standard.</b> <b>ISO 15686-5:2017</b>, <i>Buildings and constructed assets — "
    "Service life planning — Part 5: Life-cycle costing</i>, <b>second edition</b>, replacing "
    "<b>2008</b>.</p>"
    + table_html(["","What it contains"],
      [["<b>life-cycle cost</b>","construction, <b>operation</b>, <b>maintenance</b>, "
        "<b>end of life</b>"],
       ["<b>whole-life cost</b>","the LCC <b>plus</b> non-construction costs, <b>income</b> and "
        "<b>externalities</b>"]])
    + "<p><b>It requires you to state</b> the period of analysis, the discount rate and whether "
    "figures are real or nominal, the cost categories included and excluded, and the assumed service "
    "lives.</p>"
    + table_html(["Basis","Option A","Option B","Winner"],
      [["<b>3 years</b> (the capital budget)","<b>2.4</b>","3.0","<b>A by 0.6</b>"],
       ["10 years at 3.5 %","<b>3.55</b>","3.66","<b>A by 0.11</b>"],
       ["15 years at 3.5 %","4.22","<b>4.07</b>","<b>B by 0.15</b>"],
       ["<b>30 years at 3.5 %</b>","5.66","<b>4.95</b>","<b>B by 0.71</b>"],
       ["30 years at 10 %","<b>3.78</b>","3.81","<b>A by 0.03</b>"]])
    + "<p style='border:1.5px solid #2f6b6b;padding:8px'><b>Correction to my first issue, against my "
    "own recommendation.</b> A <b>mid-life refurbishment at year 15 of about 0.340</b> was in A's "
    "maintenance line and <b>omitted from B's</b>. <b>Including it in both reduces B's thirty-year "
    "advantage from 0.71 to about 0.50.</b> <b>B still wins; I was wrong by about 0.20 in my own "
    "favor.</b></p>"
    "<p><b>Excluded:</b> land, client staff time, tax, income, residual value — and "
    "<b>emissions</b>, so <b>this is a life-cycle cost and not a whole-life cost</b>. B uses about "
    "forty per cent less energy, so pricing emissions would <b>widen</b> B's advantage.</p>",
    "Source: ISO 15686-5:2017, Buildings and constructed assets — Service life planning — "
    "Part 5: Life-cycle costing, second edition, replacing the 2008 edition. It distinguishes "
    "life-cycle cost from whole-life cost and requires the period of analysis, discount rate, basis "
    "and inclusions and exclusions to be stated; it contains no cost data and sets no rate, period or "
    "service life; and it presents life-cycle costing as a means of comparing options rather than of "
    "forecasting actual future expenditure."), 640)
S["pe03-f6"]=lambda: f_realia(tbl("Word study","Long horizons",
    ["Structure","What it states","Example"],
    [["<i>over a period of</i>","the horizon",
      "<b>Over a period of</b> thirty years, B is cheaper."],
     ["<i>by year …</i>","a point inside it",
      "<b>By year 12</b> the running costs have paid the difference."],
     ["<i>in present-value terms</i>","that figures are discounted",
      "Cheaper by 0.71 <b>in present-value terms</b>."],
     ["<i>at a real discount rate of</i>","the rate, inflation removed",
      "<b>At a real discount rate of</b> 3.5 per cent."],
     ["<i>over the life of</i>","",""],["<i>is expected to</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pe03-f7"]=lambda: f_line([("yr 0",1800),("yr 3",2400),("yr 6",2950),("yr 9",3460),
    ("yr 12",3930),("yr 15",4700),("yr 20",5080),("yr 25",5400),("yr 30",5660)],
    w=620, h=240, unit="option A, cumulative present value")
S["pe03-f8"]=lambda: f_icons([("coins","a tall capital bar"),
    ("tally","thirty small annual bars"),("scaffolding","year fifteen"),
    ("calculator","a discount rate"),("statement","two totals"),
    ("badge","a nameplate: twenty years")], cols=3, numbered=False)
S["pe03-f9"]=lambda: f_realia(doc("Life-cycle cost · pump options A and B",
    "Period 30 years · 3.5 % real · this year's money",
    table_html(["","A","B"],
      [["Capital","<b>1.8</b>","<b>2.6</b>"],
       ["Annual operating and maintenance","<b>0.210</b>","<b>0.128</b>"],
       ["Refurbishment, year 15","0.340","<b>0.340</b> (added, second issue)"],
       ["<b>30 years at 3.5 % real</b>","5.66","<b>5.16</b>"],
       ["3 years, undiscounted","<b>2.4</b>","3.0"],
       ["Crossover","","<b>about year 12</b>"]])
    + "<p><b>Assumed service life:</b> pump nameplate <b>20 years</b>; station <b>50 years</b>.</p>"
    "<p><b>Excluded:</b> land, client staff, tax, income, residual value, <b>emissions</b>.</p>"
    "<p style='font-size:15px'><b>THIS IS A LIFE-CYCLE COST AND NOT A WHOLE-LIFE COST.</b></p>",
    "The period of analysis and the discount rate are policy, not arithmetic. At 10 per cent real "
    "the two options are within 0.03 of each other."), 620)
S["pe03-f10"]=lambda: f_scene(860,400,
    people=[("oksana",110,174,{}),("okonjo",320,176,{"seated":True}),
     ("hana",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("statement",250,148,0.24),("badge",360,150,0.24),
     ("calendar",520,150,0.24),("shelf",760,92,0.5)],
    board=(40,18,230,120,"WHICH PERIOD?",[("budget","3 yr"),("asset","50 yr")]),
    clockat=(700,34,22,2,30))
S["pe03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Summary A","Two totals",
      "<p><b>A: 2.4 · B: 3.0</b></p>"
      "<p style='font-size:12px;color:#6b6861'>No period. No rate. No exclusions.</p>"), 380),
    lambda w,h: f_realia(doc("Summary B","Five bases",
      "<p>Three years, ten, fifteen, thirty at 3.5 %, thirty at 10 % — with the crossover at "
      "about <b>year 12</b> and <b>six exclusions</b>.</p>"), 380),
    w=820, h=300, lt="A TOTAL", rt="A COMPARISON")
S["pe03-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","First issue",
      "<p><i>Option B is cheaper by 0.71 over thirty years.</i></p>"), 380),
    lambda w,h: f_realia(doc("After","Second issue",
      "<p><i>Option B is cheaper by 0.50 over thirty years, the refurbishment at year 15 now being "
      "in both profiles. I was wrong by 0.20 in the direction I was arguing.</i></p>"), 380),
    w=820, h=300, lt="0.71", rt="0.50")
S["pe03-f13"]=lambda: f_realia(form("Life-cycle cost planner",
    [("The period of analysis",""),("The discount rate: real or nominal?",""),
     ("Capital and annual costs, both options",""),("The crossover year",""),
     ("What is excluded, and which way it runs",""),("The correction, if any","")],
    note="Six boxes. Hand it to a partner; they ask what is excluded."), 560)
S["pe03-f14"]=lambda: f_scene(1000,450,
    people=[("oksana",60,176,{}),("okonjo",135,172,{}),("hana",210,176,{"seated":True}),
     ("anders",290,172,{"seated":True}),("nkemelu",370,176,{"seated":True}),
     ("wei",445,172,{}),("lars",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("calculator",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"WHICH PERIOD?",[("budget","3 yr"),("asset","50 yr")]),
    clockat=(278,34,22,2,30))
S["pe03-f15"]=lambda: f_chart([("one to three years",12),("five to ten",8),
    ("more than twenty",3),("the life of the asset",2),("nobody has ever said",9)])
S["pe03-f16"]=lambda: f_realia(doc("On a desk in June",
    "What was on it at six o'clock",
    "<p><b>A five-row comparison.</b></p>"
    "<p><b>A pump nameplate photograph</b> reading twenty years.</p>"
    "<p><b>A maintenance schedule</b> with a refurbishment at year fifteen.</p>"
    "<p><b>A three-year capital budget.</b></p>"
    "<p><b>A crossing-lines chart.</b></p>"
    "<p><b>A note of three sentences.</b> <i>Two numbers decide this and neither of them is mine: "
    "the period of analysis and the discount rate, which is why a standard containing no cost data "
    "spends its pages insisting that both be stated. My own error was worth two hundred thousand and "
    "ran in the direction of my recommendation, which is the direction nobody forgives, so it is in "
    "the second paragraph rather than an appendix. The station will run for fifty years and the "
    "budget runs for three, and until those two numbers belong to the same person we will keep buying "
    "the cheaper pump and paying for it in a different cost center.</i></p>",
    "Six o'clock. Three years says A; thirty years says B; they cross at year twelve."), 620)
