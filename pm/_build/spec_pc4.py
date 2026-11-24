# -*- coding: utf-8 -*-
"""Throughline Book 3 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 ----------------
S["pc10-f1"]=lambda: f_icons([("noentry","a supply interrupted"),
    ("clock","two hours"),("calendar","two days"),
    ("pipe","a standby pump starting"),("padlock","a seized valve, 2016"),
    ("meeting","a tabletop exercise"),("clipboard","a business impact analysis"),
    ("shelf","a plan on a shelf"),("note","a test report"),
    ("book","a standard from 2019")],4)
S["pc10-f2"]=lambda: f_scene(940,430, people=[("nkemelu",300,172,{}),("sofia",395,172,{})],
    props=[("board",110,80,0.76),("desk",250,0,1.2),("clipboard",460,196,0.22),
     ("window",830,56,0.9)],
    board=(690,22,200,118,"TWO CLOCKS",[("their RTO","2 hours"),("our window","2 days")]),
    clockat=(610,44,22,9,40))
S["pc10-f3"]=lambda: f_icons([("shelf","a plan being read"),
    ("meeting","a plan being exercised"),("pipe","a forty-minute start"),
    ("padlock","a seized valve"),("chain","an unlisted dependency"),
    ("note","an exercise report")],3)
S["pc10-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The service","How long it can be down","Where the figure is written",
     "When the plan was last exercised"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The plan nobody has ever tested: ______________________"), 700)
S["pc10-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 10",
    "Project office &middot; two hours and two days &middot; page 1 of 1",
    "<p><b>The standard.</b> <b>ISO 22301</b>, <i>Security and resilience &mdash; Business "
    "continuity management systems &mdash; Requirements</i>, dated <b>2019</b>. It is the "
    "<b>second edition</b>, replacing the <b>2012</b> one, and it is a <b>requirements standard</b> "
    "that can be <b>certified against</b>.</p>"
    "<p><b>What it asks for.</b> A <b>business impact analysis</b> that establishes how long each "
    "activity can be disrupted; <b>continuity strategies</b> and <b>plans</b>; and &mdash; the "
    "requirement that matters here &mdash; that the plans be <b>exercised and tested</b>.</p>"
    + table_html(["Two numbers that had never met",""],
      [["the client's <b>recovery time objective</b> for that estate, set by their board in "
        "<b>2022</b>","<b>2 hours</b>"],
       ["our <b>changeover window</b> in the approved method statement","<b>2 days</b>"]])
    + "<p><b>A factor of twenty-four.</b> Both documents were correct. Both were approved by the "
    "right people. <b>They lived in two organizations and had never been read side by side.</b></p>"
    + table_html(["The exercise &mdash; six people, one table, two hours","&nbsp;"],
      [["<b>1</b>","the standby pump can be running <b>within 40 minutes</b> &mdash; better than "
        "anybody expected"],
       ["<b>2</b>","<b>the valve that isolates the old main is seized.</b> Last operated "
        "<b>2016</b>"],
       ["<b>3</b>","the operator who knows the manual start sequence <b>is not on the call-out "
        "list</b>"]])
    + "<p><b>Finding 2 makes finding 1 irrelevant.</b> Until the valve is freed, the forty minutes "
    "cannot begin. <b>The plan reads perfectly and would have passed any review</b>, because a "
    "review reads a document and <b>an exercise asks a document to be true</b>.</p>"
    + table_html(["What we changed","&nbsp;"],
      [["the valve freed and operated","<b>no later than 14 April</b>, then <b>annually</b>"],
       ["the changeover in <b>two stages</b>","each restoring supply <b>within 2 hours</b>"],
       ["the operator added to the call-out list","<b>within 5 working days</b>"],
       ["the plan exercised","<b>at least once a year</b>, with a written report"]])
    + "<p><b>What the standard does not do.</b> It <b>does not set any recovery time objective</b>: "
    "the two hours is the client's figure. It prescribes <b>no solution</b>. <b>It does not cover "
    "the project's own delivery risk.</b> And a <b>certificate</b> proves the system exists and is "
    "operated, <b>not that any plan will work</b>: ours read perfectly for six years with a seized "
    "valve in the middle of it.</p>",
    "Source: ISO 22301:2019, Security and resilience &mdash; Business continuity management "
    "systems &mdash; Requirements, second edition, replacing the 2012 edition. It specifies "
    "requirements for a management system and may be certified against; it does not set recovery "
    "time objectives or prescribe continuity solutions, which follow from the organization's own "
    "business impact analysis; it does not address project delivery risk; and certification "
    "concerns the existence and operation of the system rather than the effectiveness of any "
    "individual plan."), 620)
S["pc10-f6"]=lambda: f_realia(tbl("Time-bound targets", None,
    ["Structure","What it does","Example"],
    [["<b>within</b>","inside a period","Supply restored <b>within</b> two hours."],
     ["<b>no later than</b>","a hard deadline","The valve freed <b>no later than</b> 14 April."],
     ["<b>by</b>","a deadline, less formal","Added to the list <b>by</b> Friday."],
     ["<b>for up to</b>","a maximum duration","The standby can run <b>for up to</b> 72 hours."],
     ["<b>at least</b>","&nbsp;","&nbsp;"],
     ["<b>every</b>","&nbsp;","&nbsp;"]],
    note="<b>Within</b> two hours is a limit; <b>in</b> two hours is a promise of a time."), 640)
S["pc10-f7"]=lambda: f_chart([("the recovery time objective",2),
    ("the standby start time",0.7),("freeing a seized valve",6),
    ("the approved changeover window",48)], unit="hours")
S["pc10-f8"]=lambda: f_icons([("clock","two hours"),("calendar","two days"),
    ("pipe","a standby pump starting"),("padlock","a seized valve"),
    ("phone","a call-out list"),("note","an exercise report")],3)
S["pc10-f9"]=lambda: f_realia(doc("Exercise report &middot; supply continuity",
    "11 March, 14:00&ndash;16:00 &middot; six participants",
    table_html(["","Finding","Owner","By"],
      [["<b>1</b>","the standby pump can be running <b>within 40 minutes</b> &mdash; better than "
        "expected","A. Saleh","&mdash;"],
       ["<b>2</b>","<b>the isolation valve on the old main is seized; last operated 2016</b>",
        "A. Saleh","<b>14 April</b>"],
       ["<b>3</b>","the operator who knows the manual start sequence is <b>not on the call-out "
        "list</b>","H. Virtanen","<b>within 5 working days</b>"]])
    + table_html(["The commitment","&nbsp;"],
      [["valve freed and operated","<b>no later than 14 April</b>, then at least once a year"],
       ["changeover","in <b>two stages</b>, each restoring supply <b>within two hours</b>"],
       ["cost","about <b>11,000</b> and one additional weekend"],
       ["next exercise","<b>before the end of April</b>"]]),
    "<b>The plan read perfectly for six years.</b> It says the valve <i>will be closed when the "
    "plan is invoked</i>, which is a sentence and not a maintenance task."), 700)
S["pc10-f10"]=lambda: f_scene(960,440, people=[("nkemelu",290,172,{}),
     ("sofia",400,176,{"seated":True}),("ahmad",520,176,{"seated":True})],
    props=[("board",100,78,0.72),("desk",240,0,1.2),("clipboard",370,196,0.22),
     ("padlock",460,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,112,"THE VALVE",[("last turned","2016"),("to free","6 hours")]),
    clockat=(200,44,22,10,0))
S["pc10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Plan, reviewed three times", None,
        "<p><b>Continuity plan, 2019.</b> Reviewed 2020, 2022, 2024.</p>"
        "<p style='font-size:13px'>Step 4: <i>the isolation valve on the old main will be closed.</i>"
        "</p>"
        "<p style='color:#6b6861;font-size:13px'>It reads perfectly. No test record anywhere.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("Plan, exercised once", None,
        "<p><b>Exercise 11 March.</b> Three findings, three owners, two dates.</p>"
        "<p style='font-size:13px'><b>Step 4 cannot be performed:</b> the valve has not turned "
        "since 2016. Six hours to free; three days to replace.</p>"), w)[0:3],
    w=940, h=280)
S["pc10-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Document 1", None,
        "<p><b>Continuity plan.</b> Three review signatures. No test record.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Document 2", None,
        "<p><b>Exercise report.</b> 11 March, 14:00&ndash;16:00, six names.</p>"
        "<p style='font-size:13px'>Three findings. Four dated commitments. <b>Next exercise before "
        "the end of April.</b></p>"), w)[0:3],
    w=900, h=240)
S["pc10-f13"]=lambda: f_realia(form("Exercise planner",
    [("The objective, and whose it is",""),("Our own assumption",""),
     ("The date and the participants",""),("The findings, in order",""),
     ("The dated commitments",""),("The next exercise date","")]), 520)
S["pc10-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("nkemelu",135,172,{}),("sofia",210,176,{"seated":True}),
     ("ahmad",290,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("wei",445,172,{}),("oskar",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("hanna",910,172,{}),("grace",960,174,{})],
    props=[("desk",95,0,1.1),("board",155,84,0.64),("computer",335,140,0.4),
     ("printer",430,196,0.3),("clipboard",548,198,0.2),("table",645,0,1.0),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,215,112,"NEVER MET",[("2 hours","2 days")]),
    clockat=(278,34,22,10,0))
S["pc10-f15"]=lambda: f_chart([("yes, this year",2),("yes, once",5),
    ("only reviewed",11),("never",5),("we have no plan",2)])
S["pc10-f16"]=lambda: f_realia(doc("On a desk in March",
    "What was on it at five o'clock",
    "<p><b>A business impact analysis and a method statement</b>, side by side for the first "
    "time.</p>"
    "<p><b>An exercise report</b> with three findings.</p>"
    "<p><b>A photograph of a seized valve</b> with a 2016 maintenance tag.</p>"
    "<p><b>A page from a 2019 standard.</b></p>"
    "<p><b>A note of three sentences.</b> <i>Two correct documents in two organizations differed by "
    "a factor of twenty-four, and no amount of care inside either one would have found it &mdash; "
    "it takes one table. A review reads a document and an exercise asks the document to be true, "
    "and the whole of our exercise was six people, a clock, and somebody saying and then what after "
    "every line. If the valve will not free, we will know on the fifteenth of April instead of at "
    "two in the morning in October, which is the only thing I have actually bought for eleven "
    "thousand.</i></p>",
    "Five o'clock. Two numbers on one table, at last."), 600)

# ---------------- Unit 11 ----------------
S["pc11-f1"]=lambda: f_icons([("dashboard","a measure on a dashboard"),
    ("deadline","the same measure with a target line"),("scissors","an order split in two"),
    ("noentry","an order refused at a counter"),("queue","difficult orders getting older"),
    ("scales","a median marked on a spread"),("spreadsheet","a long tail"),
    ("salary","a bonus letter"),("book","a 1975 conference paper"),
    ("note","a 1997 journal article")],4)
S["pc11-f2"]=lambda: f_scene(940,430, people=[("anders",300,172,{}),("nkemelu",395,172,{})],
    props=[("computer",130,138,0.54),("desk",250,0,1.2),("dashboard",460,196,0.2),
     ("window",830,56,0.9)],
    board=(690,22,200,118,"DISPATCH",[("median","11 &rarr; 6"),("90th","14 &rarr; 23")]),
    clockat=(610,44,22,2,20))
S["pc11-f3"]=lambda: f_icons([("scissors","splitting an order"),
    ("noentry","refusing a late order"),("happy","taking the easy one first"),
    ("queue","the hard one waiting"),("scales","an improving median"),
    ("spreadsheet","a lengthening tail")],3)
S["pc11-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The measure","What improving it makes people do","What gets worse","Who sees that"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The thing that got worse while the number improved: ______________________"), 700)
S["pc11-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 11",
    "Project office &middot; what a measure does to people &middot; page 1 of 1",
    "<p><b>The sentence everybody quotes.</b></p>"
    "<p style='text-align:center;font-size:17px'><b>When a measure becomes a target, it ceases to "
    "be a good measure.</b></p>"
    "<p><b>It is almost always called Goodhart's law. It was not written by Goodhart.</b> That "
    "phrasing comes from the anthropologist <b>Marilyn Strathern</b>, in an article about <b>audit "
    "in British universities</b> published in the <b>European Review</b> in <b>1997</b>, where she "
    "was summarizing Goodhart's idea.</p>"
    "<p><b>What Goodhart actually wrote.</b> <b>Charles Goodhart</b>, an economist, in a paper on "
    "monetary management given in <b>1975</b>, put it much more narrowly: <b>any observed "
    "statistical regularity will tend to collapse once pressure is placed upon it for control "
    "purposes</b>. <b>He was writing about monetary aggregates.</b> A third version, closer to the "
    "popular one, was published by <b>Donald Campbell</b> in <b>1979</b>.</p>"
    "<p><b>Why the difference matters.</b> Goodhart's version is <b>narrow and testable</b>. The "
    "popular version is <b>broad and almost unfalsifiable</b> &mdash; no observation could "
    "contradict it &mdash; and <b>taken alone it is an excuse to measure nothing</b>.</p>"
    + table_html(["Year","The measure","What improved","What it led people to do"],
      [["<b>2021</b>","orders dispatched <b>per day</b>","count <b>+18 per cent</b> in two months",
        "<b>split orders in two</b>"],
       ["<b>2023</b>","<b>on-time</b> dispatch percentage","<b>81 &rarr; 96 per cent</b>",
        "<b>refuse late orders</b>; 14 per cent moved to the next day"],
       ["<b>2025</b>","<b>median</b> days from order to dispatch","<b>11 &rarr; 6 days</b>",
        "<b>take the easy orders first</b>"]])
    + "<p><b>The 2025 measure is ours.</b> <i>Days from order to dispatch, counted weekly</i> is "
    "the measure this course recommended in Book 2. <b>It did exactly what it was designed to "
    "do</b>: the median fell from eleven days to six. <b>And the ninetieth percentile rose from "
    "fourteen days to twenty-three.</b> The nine hardest orders each week now wait almost three "
    "weeks. <b>Nobody at the depot was instructed to do this, and nobody did anything "
    "dishonest.</b></p>"
    "<p><b>What we are doing about it.</b> Not abandoning the measure. <b>Reporting the median and "
    "the ninetieth percentile together, every week, on the same line.</b> One number can be gamed "
    "quietly; <b>two numbers in opposite directions cannot.</b></p>"
    "<p><b>What neither source will do for you.</b> Goodhart's paper is about <b>monetary "
    "policy</b>; Strathern's article is about <b>university audit</b> and is a critique, not a "
    "method. <b>Neither says which measure to use.</b></p>",
    "Sources: C. A. E. Goodhart, Problems of Monetary Management: The U.K. Experience, 1975, in "
    "which the claim is that an observed statistical regularity tends to collapse when pressure is "
    "placed on it for control purposes; and M. Strathern, \"Improving ratings\": audit in the "
    "British University system, European Review, 1997, which is the origin of the popular phrasing "
    "usually attributed to Goodhart. A related formulation was published by D. T. Campbell in 1979. "
    "Goodhart's claim concerns monetary aggregates and Strathern's article is a critique of audit "
    "practice; neither addresses project measurement, neither offers a remedy, and the popular "
    "phrasing is broad enough that no observation would contradict it."), 640)
S["pc11-f6"]=lambda: f_realia(tbl("Indirect effects", None,
    ["Structure","What it does","Example"],
    [["<b>leads people to</b>","names the behavior",
      "The target <b>leads people to</b> split orders."],
     ["<b>end up</b> + <i>-ing</i>","an unintended result",
      "They <b>end up taking</b> the easy orders first."],
     ["<b>has the effect of</b> + <i>-ing</i>","a formal version",
      "It <b>has the effect of</b> lengthening the tail."],
     ["<b>is treated as</b>","how a thing is used","A measure <b>is treated as</b> a target."],
     ["<b>so &hellip; that</b>","&nbsp;","&nbsp;"],
     ["<b>turn into</b>","&nbsp;","&nbsp;"]],
    note="These structures describe what happened <b>without accusing anybody</b>, which is why "
    "they are the right grammar for this subject."), 660)
S["pc11-f7"]=lambda: f_line([("2021",14),("2022",14),("2023",16),("2024",19),("2025",23)],
    unit="ninetieth percentile, days to dispatch")
S["pc11-f8"]=lambda: f_icons([("scissors","a split order"),("noentry","a refused order"),
    ("happy","an easy order taken first"),("queue","a hard order waiting"),
    ("scales","a median line"),("spreadsheet","a long tail")],3)
S["pc11-f9"]=lambda: f_realia(tbl("Measure review",
    "Four measures in four years. All four were met.",
    ["Year","The measure","What improved","By how much","What it led people to do","What got worse"],
    [["2021","orders dispatched per day","the count","<b>+18%</b> in 2 months",
      "split orders in two","nothing measured; the work was identical"],
     ["2022","orders per day, with a split check","the count","+3%","nothing much",
      "it lasted one month"],
     ["2023","on-time dispatch percentage","on-time","<b>81 &rarr; 96</b>","refuse late orders",
      "<b>14% of orders moved to the next day</b>"],
     ["2025","median days to dispatch","the median","<b>11 &rarr; 6</b>",
      "take the easy orders first","<b>ninetieth percentile 14 &rarr; 23</b>"]],
    note="<b>The 2025 measure is the one this course recommended.</b> It is the best of the four "
    "and it still did this."), 740)
S["pc11-f10"]=lambda: f_scene(960,440, people=[("anders",290,172,{}),
     ("nkemelu",400,176,{"seated":True}),("hanna",520,176,{"seated":True})],
    props=[("computer",120,138,0.5),("desk",240,0,1.2),("dashboard",370,196,0.2),
     ("book",460,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,112,"ALL FOUR",[("were met","yes"),("cost","each")]),
    clockat=(200,44,22,3,0))
S["pc11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Dashboard 1", None,
        "<p style='font-size:30px;text-align:center'><b>6</b></p>"
        "<p style='text-align:center'>median days to dispatch &nbsp;&darr;</p>"
        "<p style='color:#6b6861;font-size:13px'>One number, falling. Nothing on the page can "
        "contradict it.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Dashboard 2", None,
        "<p style='font-size:22px;text-align:center'><b>6</b> &nbsp;|&nbsp; <b>23</b></p>"
        "<p style='text-align:center;font-size:13px'>median &nbsp;&middot;&nbsp; ninetieth "
        "percentile</p>"
        "<p style='color:#6b6861;font-size:13px'>Two numbers, one line. They cannot both be "
        "improved by resequencing.</p>"), w)[0:3],
    w=920, h=270)
S["pc11-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Review, as written", None,
        "<p><b>Dispatch performance has improved by 45 per cent.</b> Median days from order to "
        "dispatch have fallen from 11 to 6.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Review, rewritten", None,
        "<p><b>The measure worked:</b> median <b>11 &rarr; 6</b> in nine months, and nobody worked "
        "harder.</p>"
        "<p><b>Ninetieth percentile 14 &rarr; 23.</b> The measure <b>led people to</b> resequence "
        "the work. <b>Nobody instructed it and nobody hid it.</b></p>"
        "<p><b>From Monday both numbers go on the same line.</b></p>"), w)[0:3],
    w=940, h=270)
S["pc11-f13"]=lambda: f_realia(form("Measure planner",
    [("The measure",""),("What improved, and by how much",""),("What got worse",""),
     ("What the measure led people to do",""),("The second number you will add",""),
     ("What the famous sentence actually says","")]), 520)
S["pc11-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("anders",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("hanna",290,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("grace",445,172,{}),("oskar",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("linh",910,172,{}),("wei",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("dashboard",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,118,"WHO WROTE IT",[("1975","Goodhart"),("1997","Strathern")]),
    clockat=(278,34,22,3,0))
S["pc11-f15"]=lambda: f_chart([("a count",6),("a percentage",9),
    ("an average or median",7),("a color",3),("nothing formally",4)])
S["pc11-f16"]=lambda: f_realia(doc("On a desk in December",
    "What was on it at five o'clock",
    "<p><b>Three dashboards</b>, from 2021, 2023 and 2025.</p>"
    "<p><b>A chart</b> with one line falling and one rising.</p>"
    "<p><b>A 1975 conference paper</b> and a <b>1997 journal article</b>.</p>"
    "<p><b>A note of three sentences.</b> <i>All four measures were met, which is the part nobody "
    "believes, and no one at that depot did anything I would not have done with forty orders and "
    "one number on the wall. The best measure in this whole course distorted the work within nine "
    "months, so the lesson is not to find a better measure but to put a second one beside it that "
    "moves the other way. And the famous sentence is by the wrong author in its famous form, which "
    "matters, because the version everybody quotes is an argument for measuring nothing at "
    "all.</i></p>",
    "Five o'clock. Two numbers on one line, from Monday."), 600)

# ---------------- Unit 12 ----------------
S["pc12-f1"]=lambda: f_icons([("spreadsheet","three curves"),
    ("clock","weeks behind"),("scales","a bow tie with barriers"),
    ("clipboard","a process record with empty boxes"),("form","a four-column framework"),
    ("walkroute","an if-then chain"),("archive","a joint register"),
    ("note","a lessons template"),("chain","a measurement chain"),
    ("tally","a median beside a tail")],4)
S["pc12-f2"]=lambda: f_scene(920,420, people=[("nkemelu",330,176,{"seated":True})],
    props=[("desk",250,0,1.22),("note",380,196,0.26),("archive",470,198,0.26),
     ("spreadsheet",545,198,0.18),("form",605,198,0.2),("window",810,56,0.92)],
    board=(680,22,200,118,"ONE PAGE",[("lines","12"),("read in","90 sec")]),
    clockat=(170,44,22,8,20))
S["pc12-f3"]=lambda: f_icons([("calculator","an index as a sentence"),
    ("clock","a gap in weeks"),("scales","a barrier count"),
    ("clipboard","an empty box"),("badge","a benefit with an owner"),
    ("tally","a measure with its pair")],3)
S["pc12-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The review","How long it takes","What it looks at","What it never looks at"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The input nobody has ever brought: ______________________"), 700)
S["pc12-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 12",
    "Project office &middot; one page a month &middot; page 1 of 1",
    "<p><b>The twelve lines.</b></p>"
    + table_html(["","&nbsp;"],
      [["<b>1</b>","planned value, earned value, actual cost, with the date they are as of"],
       ["<b>2</b>","both indices <b>as sentences</b>"],
       ["<b>3</b>","the gap <b>in weeks</b>, with its own weakness named"],
       ["<b>4</b>","the top risk, its <b>barrier count</b> and its <b>recovery control count</b>"],
       ["<b>5</b>","the <b>empty boxes</b> on the project process record"],
       ["<b>6</b>","the benefit, its indicator, its source of verification and its <b>owner</b>"],
       ["<b>7</b>","the <b>assumptions</b> still unconfirmed, with a name and a date"],
       ["<b>8</b>","<b>capacity</b>: person-years needed against available"],
       ["<b>9</b>","the <b>joint register</b>: rows in conflict with the other organization"],
       ["<b>10</b>","lessons <b>closed by a document change</b> this month"],
       ["<b>11</b>","every measure with its <b>second number</b>"],
       ["<b>12</b>","what each figure's <b>method</b> and <b>collector</b> are"]])
    + "<p><b>One page. Twelve lines. Nothing on it is new; all of it came from the eleven units "
    "before this one.</b></p>"
    "<p><b>And now the certificate in the corridor.</b> We are certified to a quality management "
    "system standard dated <b>2015</b>. Its clause on <b>performance evaluation</b> requires the "
    "organization to determine <b>what</b> it monitors, <b>how</b>, <b>when</b>, and when results "
    "are <b>analyzed</b>. It then lists what a <b>management review shall consider</b>: the status "
    "of previous actions; changes in external and internal issues; <b>customer satisfaction</b>; "
    "<b>the extent to which objectives have been met</b>; process performance and conformity; "
    "nonconformities and corrective actions; <b>monitoring and measurement results</b>; audit "
    "results; the performance of external providers; the adequacy of resources; the effectiveness "
    "of actions on risks and opportunities; and opportunities for improvement.</p>"
    "<p><b>Our management review took twenty minutes and considered three of them</b>: audit "
    "results, nonconformities, and opportunities for improvement. <b>For eleven years. Certified "
    "throughout.</b> <b>The audits were not negligent</b>: they checked that a review had been "
    "held, that it had minutes and that actions were tracked. <b>All of that was true. Twenty "
    "minutes is a review.</b></p>"
    "<p><b>What changed.</b> <b>The review is now fifty minutes and considers nine of the "
    "inputs.</b> Three remain weak: customer satisfaction is still one person's impression. <b>We "
    "did not build the one page to satisfy the standard</b> &mdash; we built it over eleven units "
    "for our own reasons. <b>It turned out to supply most of what the standard had been asking for "
    "since 2015.</b></p>"
    "<p><b>What the standard specifies and what it leaves open.</b> It specifies <b>what must be "
    "considered</b> and <b>not the format, not the length, and not the measures</b>. It requires "
    "reviews <b>at planned intervals</b> and names <b>no interval</b>. And a <b>certificate</b> "
    "proves the system exists and is operated &mdash; <b>which ours did, for eleven years, in "
    "twenty minutes a quarter.</b></p>",
    "Source: ISO 9001:2015, Quality management systems &mdash; Requirements, clause 9 (performance "
    "evaluation), which requires the organization to determine what is monitored and measured and "
    "lists the inputs a management review must consider. It specifies no format, length, frequency "
    "or particular measures; it addresses the management system rather than individual projects; "
    "and certification concerns the existence and operation of that system."), 640)
S["pc12-f6"]=lambda: f_realia(tbl("The eleven structures of this book", None,
    ["Unit","Structure","Example"],
    [["1","ratios and indices","<b>For every</b> 100 we spend <b>we get</b> 78 of work."],
     ["2","progress in time","<b>As of</b> 30 September, behind <b>by</b> 7.5 weeks."],
     ["3","contrast","The matrix ranks, <b>whereas</b> the bow tie counts barriers."],
     ["4","the passive with modals","The plan <b>should be reviewed</b> before issue."],
     ["5","cause and effect","Old mains <b>result in</b> a failed purpose."],
     ["6","<i>if &hellip; then</i>","<b>If</b> the station exists, <b>then</b> pressure is held."],
     ["7","shared obligation","<b>Each party shall</b> name a person."],
     ["8","the present perfect","We <b>have recorded</b> 212 lessons <b>since</b> 2019."],
     ["9","relative clauses","&nbsp;"],
     ["10","time-bound targets","&nbsp;"],
     ["11","indirect effects","&nbsp;"]],
    note="Three rows are empty on purpose."), 660)
S["pc12-f7"]=lambda: f_chart([("considered in detail",6),("mentioned",3),
    ("brought but not discussed",0),("never brought",3),("not applicable",0)],
    unit="required review inputs")
S["pc12-f8"]=lambda: f_icons([("spreadsheet","three curves"),("clock","weeks behind"),
    ("scales","a bow tie"),("clipboard","an empty box"),
    ("badge","a benefit with a name"),("tally","two numbers on one line")],3)
S["pc12-f9"]=lambda: f_realia(doc("Monthly report &middot; month 9",
    "Twelve lines. A method and a collector against every figure.",
    table_html(["","&nbsp;","Method &middot; collector"],
      [["<b>1</b>","<b>As of 30 November:</b> planned <b>1.82 m</b>, earned <b>1.54 m</b>, actual "
        "<b>1.88 m</b>","accounts &middot; L. Tran"],
       ["<b>2</b>","<b>For every 100 we spend we get 82 of work</b>; <b>85</b> of every 100 planned "
        "is done","derived &middot; L. Tran"],
       ["<b>3</b>","<b>Behind by 4.5 weeks.</b> *8 packages self-scored, so probably an "
        "<b>understatement</b>","earned schedule &middot; O. Lindqvist"],
       ["<b>4</b>","Top risk: racking. <b>Two barriers, one recovery control</b> since March",
        "bow tie &middot; I. Berg"],
       ["<b>5</b>","Process record: <b>two empty boxes</b>; line 3 reconciled <b>11 weeks</b>",
        "process record &middot; W. Zhao"],
       ["<b>6</b>","Benefit: pressure above contract minimum, <b>monthly from the client's log</b>, "
        "<b>2029</b>, their asset manager","client's log"],
       ["<b>7</b>","<b>Two assumptions unconfirmed</b>: June inspector; 2026 allocation",
        "page two &middot; named"],
       ["<b>8</b>","Capacity: <b>22 person-years needed, 16 available</b>",
        "project office &middot; H. Virtanen"],
       ["<b>9</b>","Joint register: <b>66 rows, no conflicts open</b>",
        "joint register &middot; E. Caruso"],
       ["<b>10</b>","Lessons closed by a document change: <b>2</b>",
        "templates &middot; H. Virtanen"],
       ["<b>11</b>","Dispatch: <b>median 6 days, ninetieth percentile 23 days</b>",
        "depot system &middot; J. Weber"],
       ["<b>12</b>","*Customer satisfaction: <b>one person's impression. No method, no "
        "collector.</b>","&mdash;"]]),
    "<b>Ninety seconds, read aloud, every month.</b> Two lines carry an asterisk because they are "
    "weak, and they say so."), 760)
S["pc12-f10"]=lambda: f_scene(960,440, people=[("nkemelu",300,176,{"seated":True}),
     ("grace",390,176,{"seated":True}),("hanna",500,172,{})],
    props=[("desk",240,0,1.2),("note",360,196,0.26),("certificate",640,120,0.5),
     ("window",850,56,0.86)],
    board=(40,24,215,118,"INPUTS",[("listed","12"),("brought","3"),("now","9")]),
    clockat=(700,44,22,9,0))
S["pc12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The four-page pack", None,
        "<p><b>Four pages. Fourteen charts. A status color on the front.</b></p>"
        "<p style='color:#6b6861;font-size:13px'>No methods, no collectors, and two numbers whose "
        "origin nobody can name.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("The one page", None,
        "<p><b>Twelve lines.</b> Each with a figure, a method and a collector.</p>"
        "<p style='font-size:13px'><b>Two asterisks</b>, for the two lines that are weak.</p>"
        "<p style='color:#6b6861;font-size:13px'>Ninety seconds, read aloud.</p>"), w)[0:3],
    w=920, h=260)
S["pc12-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Pack, page one", None,
        "<p style='font-size:20px'><b>AMBER</b></p>"
        "<p style='font-size:13px'>Fourteen charts overleaf. Commentary on page four.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(tbl("One page", None, ["Line","Figure","Method"],
      [["1","1.82 / 1.54 / 1.88","accounts"],["2","82 per 100","derived"],
       ["3","&minus;4.5 weeks *","earned schedule"],["4","2 barriers, 1 recovery","bow tie"],
       ["11","6 and 23 days","depot system"],["12","impression *","<b>none</b>"]]), w)[0:3],
    w=940, h=270)
S["pc12-f13"]=lambda: f_realia(form("One-page planner",
    [("Line 1: the three values",""),("Line 2: the indices as sentences",""),
     ("Line 3: the gap in weeks",""),("Line 4: the top risk and its controls",""),
     ("Line 11: the measure and its second number",""),
     ("Line 12: the weakest figure, and why","")],
    note="A method and a collector against every figure; an asterisk on every weak line."), 540)
S["pc12-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("nkemelu",135,172,{}),("grace",210,176,{"seated":True}),
     ("hanna",290,172,{"seated":True}),("okonjo",370,176,{"seated":True}),
     ("linh",445,172,{}),("oskar",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("nadia",910,172,{}),("wei",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("note",548,198,0.2),("table",645,0,1.0),("certificate",700,120,0.42),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,215,112,"TWELVE INPUTS",[("ticked","9")]),
    clockat=(278,34,22,9,0))
S["pc12-f15"]=lambda: f_chart([("the three values",3),("the gap in weeks",7),
    ("the barrier count",4),("the benefit owner",9),("the capacity figure",6),
    ("the second number",5)])
S["pc12-f16"]=lambda: f_realia(doc("On a desk at the end of the day",
    "Everything this book has been about, in one pile",
    "<p><b>One signed sheet of twelve lines</b> in the middle.</p>"
    "<p><b>Around it:</b> three curves &middot; a clock showing weeks &middot; a bow tie &middot; a "
    "process record with empty boxes &middot; a four-column framework &middot; an if-then chain "
    "&middot; a joint register &middot; a lessons template &middot; a measurement chain &middot; a "
    "median beside a long tail &middot; a framed certificate.</p>"
    "<p><b>A note of three sentences.</b> <i>The clause is two pages long, it has been in the "
    "standard since 2015, and nobody here had read past its headings, including me. Everything "
    "useful in this book was already printed in a document somebody owned, and the work was reading "
    "the limits their own authors had stated rather than quoting the titles. Two lines on my page "
    "have asterisks on them, and those two are the reason anybody believes the other ten.</i></p>",
    "Five o'clock. Twelve lines, ninety seconds, two asterisks."), 620)
