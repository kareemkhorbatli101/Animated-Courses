# -*- coding: utf-8 -*-
"""Keystone Book 3 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["c00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each from a reliability review",
    ["What you have","An example"],
    [["The present perfect","The service <b>has been</b> slow <b>since</b> Tuesday."],
     ["Modals of possibility","A cache <b>may</b> be holding an older copy."],
     ["Relative clauses","The part <b>that</b> we cannot parallelize is the write."],
     ["The first conditional","<b>If</b> we add two servers, the queue <b>will</b> shorten."],
     ["Reported speech","The report <b>states that</b> the figure is self-reported."],
     ["Linking words","The score is high. <b>However</b>, our exposure is small."]],
    note="Six boxes. This book adds the English of measurement: the denominator, the assumption, "
    "and the sentence in which authors say what their work does not cover."), 580)
S["c00-f2"]=lambda: f_realia(tbl("Four things a quality argument needs", None,
    ["","What it answers","Without it"],
    [["<b>1 A quantity</b>","how much, how many, how often","<i>slow</i>, <i>unreliable</i>, <i>good</i>"],
     ["<b>2 A unit</b>","of what &mdash; requests, seconds, users, lines",
      "a number nobody can reproduce"],
     ["<b>3 A period</b>","over what time &mdash; an hour, a month, a year",
      "two true figures that disagree"],
     ["<b>4 A condition</b>","under what load, for which users, in which region",
      "an average that describes nobody"]],
    note="Now it can be checked. The fourth is usually missing and the third is usually wrong."),
    620)
S["c00-f3"]=lambda: f_realia(doc("Taped inside a laptop lid",
    "Four questions that end most arguments",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;Over what period, and measured where?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before a number of nines reaches a document.</span>"
    "<br><b>2 &nbsp;Compared with what?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before <i>faster</i> or <i>improved</i> reaches a "
    "slide.</span><br><b>3 &nbsp;Is that severity or risk?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before a score decides what gets fixed first."
    "</span><br><b>4 &nbsp;What response measure would settle it?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before an untestable requirement enters a plan."
    "</span></p>",
    "Four questions, and each of them is a unit of this book."), 560)
S["c00-f4"]=lambda: f_realia(tbl("Two kinds of source", None,
    ["A standard","A paper"],
    [["gives agreed vocabulary","gives a result and its assumptions"],
     ["has an edition and a date","has authors and a year"],
     ["says what is out of scope","says what it holds only if"]],
    note="Both have limits, and both say so. Half this book is standards and half is papers, and "
    "the honest reader treats them the same way."), 580)

# ---------------- Unit 1 · Nine Words for Good ----------------
S["c01-f1"]=lambda: f_icons([("board","nine boxes"),("folder","one box opened"),
    ("clipboard","a checklist"),("timer","a stopwatch and a chart"),
    ("padlock","a lock beside a record"),("iron","a wrench beside a module"),
    ("wheelchair","a ramp beside a doorway"),("danger","a warning triangle"),
    ("handshake","two systems exchanging data"),("handsup","the word good crossed out")], cols=5)
S["c01-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("karin",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,10,20))
S["c01-f3"]=lambda: f_icons([("folder","a characteristic and its parts"),("timer","performance efficiency"),
    ("padlock","security"),("iron","maintainability"),
    ("wheelchair","interaction capability"),("danger","safety")], cols=3)
S["c01-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The system","Strongest characteristic","Weakest","Who decided"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The trade nobody remembers making: ______________________"), 600)
S["c01-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 25",
    "Platform team &middot; the quality model &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO/IEC 25010:2023 is the second edition of the product quality model "
    "in the SQuaRE series. It was published in November 2023. It replaced the 2011 edition. It "
    "gives a vocabulary: nine characteristics, each divided into sub-characteristics, each "
    "defined.</p>"
    + table_html(["Characteristic","One of its sub-characteristics"],
      [["<b>functional suitability</b>","functional correctness"],
       ["<b>performance efficiency</b>","capacity"],
       ["<b>compatibility</b>","interoperability"],
       ["<b>interaction capability</b>","learnability"],
       ["<b>reliability</b>","<b>availability</b>"],
       ["<b>security</b>","non-repudiation"],
       ["<b>maintainability</b>","testability"],
       ["<b>flexibility</b>","scalability"],
       ["<b>safety</b>","fail safe"]])
    + "<p><b>What changed in 2023.</b> Usability became interaction capability. It gained "
    "sub-characteristics for inclusivity and user engagement. Portability became flexibility. It "
    "now includes scalability. Until 2023 that word had no home in the model at all. And safety "
    "was added as a ninth characteristic.</p>"
    "<p><b>Availability is a sub-characteristic, not a characteristic.</b> It sits under "
    "reliability. This matters in a meeting. A team that reports availability as its quality figure "
    "has reported one part of one of nine characteristics, and the sentence sounds much broader "
    "than it is.</p>"
    "<p><b>The model does not measure.</b> There is no number anywhere in it. Measurement is a "
    "separate part of the same series, and choosing what to measure is a separate activity again. "
    "So the model cannot tell you that your system is good. It can tell you that you and your "
    "colleague are arguing about two different characteristics, which is more often the real "
    "problem.</p>",
    "Source: ISO/IEC 25010:2023, Systems and software engineering &mdash; SQuaRE &mdash; Product "
    "quality model, second edition. The standard defines a vocabulary: it provides no measures, no "
    "targets, no thresholds and no priorities."), 580)
S["c01-f6"]=lambda: f_realia(tbl("Word study","Classifying and defining",
    ["Structure","What it does","Example"],
    [["consist of","names the whole set","The model <b>consists of</b> nine characteristics."],
     ["be divided into","names the parts","Each <b>is divided into</b> sub-characteristics."],
     ["fall under","places one item","Availability <b>falls under</b> reliability."],
     ["be defined as","gives a meaning","Capacity <b>is defined as</b> a maximum limit."],
     ["comprise","the whole takes the parts","&nbsp;"],
     ["include","some, not all","&nbsp;"]]), 600)
S["c01-f7"]=lambda: f_chart([("a sub-characteristic",11),("a characteristic",17),
    ("a vague adjective",48),("a number with no unit",9),("nothing at all",5)], unit="comments")
S["c01-f8"]=lambda: f_icons([("board","nine boxes"),("folder","one box opened into four"),
    ("timer","a stopwatch and a gauge"),("padlock","a lock and a record"),
    ("wheelchair","a ramp and a doorway"),("danger","a warning triangle")], cols=3)
S["c01-f9"]=lambda: f_realia(tbl("Quality note &middot; the payments service",
    "Review of 3 March",
    ["Characteristic","Sub-characteristic","Now","Target","Target owner"],
    [["reliability","availability","99.94%","<b>99.9%</b>","Ines, product, Jan 2024"],
     ["reliability","recoverability","<b>40 s</b>","under 60 s","Karin, reliability"],
     ["performance efficiency","time behavior","183 ms","under 200 ms","Ines, product"],
     ["maintainability","testability","71% of paths","<b>owner unknown</b>","&nbsp;"]],
    note="No number in the model, so every number here is ours."), 620)
S["c01-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("karin",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("essay",385,194,0.26),
     ("note",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,11,0))
S["c01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Summary A", None,
        "<p>The service has good quality, with some performance problems.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Summary B", None,
        "<p>Recoverability improved: 6 min to 40 s.<br>"
        "Time behavior worse: median up 11 ms.<br>"
        "Modularity improved: four services became two.<br>"
        "Each target has an owner, or is marked unknown.</p>"), w)[0:3],
    w=920, h=300)
S["c01-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The service meets our quality bar.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "Four characteristics with a sub-characteristic, a figure, a target and an owner each; plus a "
    "line naming the characteristics nobody reports on.</p>",
    "One of these had a target that nobody could renegotiate for four years."))
S["c01-f13"]=lambda: f_realia(form("Quality-note planner",
    [("Characteristics we report on",""),("The sub-characteristic for each",""),
     ("The figure and the target",""),("The owner",""),
     ("Characteristics we do not report on",""),("Not in this note","")]), 520)
S["c01-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("karin",195,172,{}),
     ("mei",280,176,{"seated":True}),("ines",360,172,{"seated":True}),
     ("grace",435,176,{"seated":True}),("tomas",520,170,{}),("priya",595,172,{}),
     ("lars",665,170,{}),("marek",735,172,{}),("oksana",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("samira",960,174,{}),("chiamaka",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,0))
S["c01-f15"]=lambda: f_chart([("reliability",11),("performance efficiency",5),("security",4),
    ("maintainability",1),("nothing specific",6)])
S["c01-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("note",390,194,0.24),
     ("board",560,100,0.6),("pen",455,200,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,5,0))

# ---------------- Unit 2 · What Three Nines Buys You ----------------
S["c02-f1"]=lambda: f_icons([("tally","a percentage"),("calendar","a year with a small block"),
    ("month","a month with a smaller block"),("day","a week"),
    ("timer","a restart measured"),("router","a measuring point at the edge"),
    ("address","a measuring point at a customer"),("spreadsheet","one customer far below"),
    ("essay","a contract figure"),("handsup","one number, two readings")], cols=5)
S["c02-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("karin",420,172,{})],
    props=[("desk",240,0,1.25),("dashboard",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,25))
S["c02-f3"]=lambda: f_icons([("calendar","a year: nearly nine hours"),("month","a month: 43 minutes"),
    ("day","a week: ten minutes"),("router","measured inside"),
    ("address","measured at the customer"),("spreadsheet","an average hiding one customer")],
    cols=3)
S["c02-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The figure","The period","The measuring point","Average or per customer"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one nobody can explain: ______________________"), 600)
S["c02-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 26",
    "Platform team &middot; availability &middot; page 1 of 1",
    "<p><b>The document.</b> ITU-T Recommendation E.800, Definitions of terms related to quality "
    "of service, in its version of September 2008, defines the vocabulary of this unit. It is a "
    "definitions document. It gives careful meanings and no targets whatsoever.</p>"
    + table_html(["Term","What the definition says"],
      [["<b>availability</b>","the ability to be in a state to perform a required function <b>at a "
        "given instant</b>, or at any instant <b>within a given time interval</b>"],
       ["<b>reliability</b>","the ability to perform a required function <b>under given "
        "conditions for a given time interval</b>"]])
    + "<p><b>So the period is part of the definition.</b> Both definitions contain a time interval. "
    "A figure quoted without one is not a quantity. It is a mood.</p>"
    "<p><b>The clause that is always omitted.</b> The definition of availability ends by assuming "
    "that the external resources, if required, are provided. Read that twice. The figure describes "
    "the item on the assumption that everything it depends on is working. A service that is "
    "unavailable because its network is down may be perfectly available by this definition, and "
    "completely unavailable to the customer.</p>"
    "<p><b>The arithmetic.</b> A year is 8,760 hours, so one tenth of one percent is 8.76 hours: "
    "about eight hours and three quarters. A thirty-day month is 720 hours, so the same percentage "
    "is 43.2 minutes. A week is 168 hours, so it is about ten minutes. The same percentage, three "
    "promises, differing by a factor of about fifty.</p>"
    "<p><b>And an average can hide a total outage.</b> If one customer in two hundred is "
    "unavailable for a whole day, the average barely moves. That customer's own availability for "
    "the year is about 99.7 percent, which is below three nines and far below what they were "
    "told.</p>",
    "Source: ITU-T Recommendation E.800, September 2008 version. The Recommendation defines terms; "
    "it sets no targets, prescribes no measurement point and does not define what counts as an "
    "outage for a particular service."), 580)
S["c02-f6"]=lambda: f_realia(tbl("Word study","Approximation",
    ["Expression","How exact","Example"],
    [["exactly","the figure itself","<b>exactly</b> 8.76 hours"],
     ["about / around","close, either way","<b>about</b> nine hours"],
     ["just under","slightly less","<b>just under</b> nine hours"],
     ["a little over","slightly more","<b>a little over</b> forty minutes"],
     ["nearly","&nbsp;","&nbsp;"],["roughly","&nbsp;","&nbsp;"]]), 600)
S["c02-f7"]=lambda: f_chart([("most customers",99.98),("the next group",99.95),
    ("the published average",99.94),("one customer",99.70)], unit="percent")
S["c02-f8"]=lambda: f_icons([("calendar","a year"),("month","a month"),
    ("day","a week"),("router","inside our network"),
    ("address","at the customer"),("spreadsheet","one low bar")], cols=3)
S["c02-f9"]=lambda: f_realia(tbl("Availability note &middot; the payments service",
    "Published monthly &middot; figures for October",
    ["",""],
    [["<b>The figure</b>","99.94 percent"],
     ["<b>The period</b>","a calendar month, not a year"],
     ["<b>The measuring point</b>","our own edge, not the customer's office"],
     ["<b>What counts as down</b>","any minute in which more than one percent of requests failed"],
     ["<b>Worst customer</b>","99.7 percent"],
     ["<b>Longest single outage</b>","7 hours 20 minutes, 14 October"]],
    note="The average is not a promise to anybody."), 560)
S["c02-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("karin",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("dashboard",300,142,0.44),("essay",385,194,0.26),
     ("calendar",450,192,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,9,30))
S["c02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Statement A", None,
        "<p>We provide 99.9 percent availability.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Statement B", None,
        "<p>99.9 percent, monthly, per customer.<br>Measured at our edge.<br>"
        "Down = a minute with over 1% failures.<br>"
        "Average 99.94; worst customer 99.7.<br>Longest single outage 7 h 20.</p>"), w)[0:3],
    w=920, h=300)
S["c02-f12"]=lambda: f_realia(doc("Two statements", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Statement 1</b><br>"
    "Annual availability: 99.94 percent.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Statement 2</b><br>"
    "The figure, the period, the measuring point, the definition of down, the average, the worst "
    "customer and the longest single outage.</p>",
    "One of these was true all year while a customer lost a working day."))
S["c02-f13"]=lambda: f_realia(form("Availability-note planner",
    [("The figure",""),("The period",""),("The measuring point",""),
     ("What counts as down",""),("Worst customer and longest outage",""),
     ("What we do not measure","")]), 520)
S["c02-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("karin",195,172,{}),
     ("lars",280,176,{"seated":True}),("grace",360,172,{"seated":True}),
     ("mei",435,176,{"seated":True}),("tomas",520,170,{}),("priya",595,172,{}),
     ("ines",665,170,{}),("marek",735,172,{}),("oksana",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("samira",960,174,{}),("chiamaka",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("calendar",330,196,0.22),
     ("dashboard",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,10,0))
S["c02-f15"]=lambda: f_chart([("a year",9),("a month",7),("a week",1),
    ("we have no figure",3),("I do not know",7)])
S["c02-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("essay",385,194,0.26),
     ("calculator",455,198,0.2),("note",520,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,7,0))

# ---------------- Unit 3 · Arrivals, Time and Queue ----------------
S["c03-f1"]=lambda: f_icons([("messages","requests arriving"),("tally","how many are inside"),
    ("timer","how long one stays"),("queue","a queue waiting"),
    ("cashier","one item handled"),("spreadsheet","arrivals per second"),
    ("danger","a queue growing"),("proof","a stable system"),
    ("noentry","an overloaded system"),("board","three letters")], cols=5)
S["c03-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("tomas",420,172,{})],
    props=[("desk",240,0,1.25),("dashboard",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,2,50))
S["c03-f3"]=lambda: f_icons([("messages","the arrival rate"),("tally","the number inside"),
    ("timer","the time each one spends"),("calculator","the relationship"),
    ("proof","a stable system"),("danger","an overloaded system")], cols=3)
S["c03-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The service","Arrivals per second","Average time inside","The number that results"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that does not add up: ______________________"), 600)
S["c03-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 27",
    "Platform team &middot; queues and capacity &middot; page 1 of 1",
    "<p><b>The paper.</b> John D. C. Little, A Proof for the Queuing Formula, published in the "
    "journal Operations Research in 1961. It gives one relationship, usually written L equals "
    "lambda times W.</p>"
    + table_html(["Symbol","What it is","A unit"],
      [["<b>L</b>","the average number <b>inside the system</b>","requests"],
       ["<b>&lambda;</b>","the average <b>arrival rate</b>","requests <b>per second</b>"],
       ["<b>W</b>","the average <b>time inside</b>","seconds"]])
    + "<p><b>The relationship.</b> The average number inside equals the arrival rate multiplied by "
    "the average time each item spends inside. If you know two of the three, you know the third. In "
    "most systems two of them are easy to measure and the third is the one everybody argues "
    "about.</p>"
    "<p><b>Worked both ways.</b> Two hundred requests per second, each spending fifty "
    "milliseconds inside, gives ten requests inside on average. Now run it backwards. You observe "
    "thirty requests inside at two hundred per second. Then the time inside is 0.15 seconds. You "
    "have just measured latency without timing anything.</p>"
    "<p><b>What it assumes, and it is very little.</b> The result needs the system to be "
    "stationary: not drifting over the period you measure, with the averages existing. It assumes "
    "nothing about how arrivals are distributed, nothing about how long service takes, and nothing "
    "about the order in which waiting items are handled. It is an identity, not a model.</p>"
    "<p><b>And nothing at all about an overloaded system.</b> If arrivals exceed what the system "
    "can handle, there is no steady state. The queue grows for as long as the load continues, and "
    "the averages the result relies on do not exist. The law does not break on your worst day. It "
    "stops applying, which is more dangerous, because the arithmetic still looks as if it "
    "works.</p>",
    "Source: John D. C. Little, A Proof for the Queuing Formula, Operations Research, 1961. The "
    "result concerns long-run averages: it says nothing about percentiles or variance, and it "
    "requires a stationary system."), 580)
S["c03-f6"]=lambda: f_realia(tbl("Word study","Rates and proportions",
    ["Expression","What it gives","Example"],
    [["per","a rate","two hundred requests <b>per</b> second"],
     ["a rate of","the same, as a noun phrase","<b>a rate of</b> two hundred a second"],
     ["on average","an average, not a maximum","<b>on average</b>, ten are inside"],
     ["for every","a proportion","<b>for every</b> hundred requests, three fail"],
     ["out of","&nbsp;","&nbsp;"],["one in","&nbsp;","&nbsp;"]]), 600)
S["c03-f7"]=lambda: f_line([(0,40),(1,80),(2,140),(3,200),(4,280),(5,420),(6,700),(7,1200)],
    w=620, h=250, unit="inside", dashed_from=5, mark=5)
S["c03-f8"]=lambda: f_icons([("messages","arriving at a rate"),("tally","a counter"),
    ("timer","one item timed"),("calculator","the three multiplied"),
    ("proof","a level queue"),("danger","a queue climbing")], cols=3)
S["c03-f9"]=lambda: f_realia(tbl("Capacity note &middot; the checkout service",
    "Figures for the week of 11 March",
    ["","Figure","How we know"],
    [["arrival rate","<b>200 a second</b>","measured at the edge"],
     ["number in flight","<b>30</b>, on average","reported by the connection pool"],
     ["time inside","<b>150 ms</b>, on average","<b>derived</b>: 30 &divide; 200"]],
    note="Past the stability line, the average is not about anything."), 580)
S["c03-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{}),
     ("tomas",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("board",620,96,0.9),("calculator",300,198,0.2),
     ("essay",370,194,0.26),("lamp",180,140,0.42),("dashboard",470,142,0.4)],
    clockat=(140,46,22,3,0))
S["c03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Dashboard A", None,
        "<p>One latency figure.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Dashboard B", None,
        "<p>Arrivals per second.<br>The number in flight.<br>The average time inside.<br>"
        "A vertical line at the point of instability.</p>"), w)[0:3],
    w=920, h=300)
S["c03-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Average latency: 150 milliseconds.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "All three quantities with units, how each is known, the derivation, the point of instability, "
    "and a line about percentiles.</p>",
    "One of these settled a three-week argument in four minutes."))
S["c03-f13"]=lambda: f_realia(form("Capacity-note planner",
    [("The three numbers, with units",""),("How each is known",""),("The derivation",""),
     ("The point of instability",""),("What the result does not tell you",""),
     ("The sanity check","")]), 520)
S["c03-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("tomas",195,172,{}),
     ("karin",280,176,{"seated":True}),("lars",360,172,{"seated":True}),
     ("mei",435,176,{"seated":True}),("priya",520,170,{}),("ines",595,172,{}),
     ("grace",665,170,{}),("marek",735,172,{}),("oksana",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("samira",960,174,{}),("chiamaka",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("calculator",330,198,0.2),
     ("dashboard",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,4,0))
S["c03-f15"]=lambda: f_chart([("arrivals per second",8),("average time inside",9),
    ("the number in flight",3),("all three",2),("none",5)])
S["c03-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("calculator",390,198,0.2),
     ("dashboard",470,142,0.4),("note",545,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
