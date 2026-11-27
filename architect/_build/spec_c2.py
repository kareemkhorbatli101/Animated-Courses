# -*- coding: utf-8 -*-
"""Keystone Book 3 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · The Part That Will Not Divide ----------------
S["c04-f1"]=lambda: f_icons([("cook","one worker on a job"),("meeting","four workers on one job"),
    ("spreadsheet","a bar split in two"),("timer","a curve flattening"),
    ("barrier","a ceiling"),("crate","a bigger job, more workers"),
    ("clock","an unchanged stopwatch"),("thread","coordination arrows"),
    ("coins","cost rising"),("handsup","pointing at the flat part")], cols=5)
S["c04-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("marek",420,172,{})],
    props=[("desk",240,0,1.25),("dashboard",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,2,5))
S["c04-f3"]=lambda: f_icons([("spreadsheet","the sequential part"),("barrier","the ceiling"),
    ("crate","a fixed job, more workers"),("racking","a growing job, more workers"),
    ("thread","coordination growing"),("danger","speed-up falling")], cols=3)
S["c04-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The job","The sequential fraction","The ceiling","Does the job grow"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one where adding workers made it slower: ______________________"), 600)
S["c04-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 28",
    "Platform team &middot; speed-up and scaling &middot; page 1 of 1",
    "<p><b>The two papers.</b> Gene Amdahl, Validity of the single processor approach to achieving "
    "large scale computing capabilities, in the proceedings of a conference in 1967. And John "
    "Gustafson, Reevaluating Amdahl's Law, in Communications of the ACM, 1988. Twenty-one years "
    "apart, and they are usually quoted against each other.</p>"
    "<p><b>The 1967 result.</b> If a fraction of a job cannot be shared out, that fraction takes "
    "the same time however many workers you add. So the speed-up has a ceiling. The ceiling is one "
    "divided by the sequential fraction.</p>"
    + table_html(["Sequential part","Ceiling on speed-up"],
      [["<b>1 in 100</b>","<b>100 times</b>"],["<b>1 in 20</b>","<b>20 times</b>"],
       ["<b>1 in 10</b>","<b>10 times</b>"],["<b>1 in 5</b>","<b>5 times</b>"]])
    + "<p><b>And you reach the ceiling slowly.</b> With a sequential part of one twentieth, sixteen "
    "workers give you about nine times the speed of one worker. That is a little over half the "
    "ceiling, for sixteen times the hardware.</p>"
    "<p><b>The 1988 answer.</b> The later paper does not dispute the arithmetic. It disputes the "
    "question. The 1967 result assumes the problem stays the same size while the machine grows. In "
    "practice, says the later paper, nobody buys a bigger machine to do yesterday's work faster. "
    "They do a bigger job in the same time. If the problem grows with the machine, the sequential "
    "part becomes a smaller share of a larger whole, and the achievable speed-up is close to "
    "linear.</p>"
    "<p><b>So the two papers answer two different questions.</b> The question you are being asked "
    "decides which one applies. <i>Will this report finish sooner?</i> is the first. <i>Can we "
    "handle ten times the customers?</i> is the second.</p>",
    "Sources: Amdahl, AFIPS conference proceedings, 1967; Gustafson, Communications of the ACM, "
    "1988. Neither paper models coordination overhead, cost, or the distribution of completion "
    "times."), 580)
S["c04-f6"]=lambda: f_realia(tbl("Word study","Multiples and factors",
    ["Expression","What it says","Example"],
    [["twice as fast as","two times the speed","It is <b>twice as fast as</b> the old job."],
     ["n times faster","n times the speed","Sixteen workers are <b>nine times faster</b> than one."],
     ["by a factor of","a multiplier, formally","It improved <b>by a factor of</b> nine."],
     ["half the time","a divided duration","It takes <b>half the time</b>."],
     ["a third of","&nbsp;","&nbsp;"],["tenfold","&nbsp;","&nbsp;"]]), 600)
S["c04-f7"]=lambda: f_line([(1,1),(2,1.9),(4,3.5),(8,6.1),(16,9.1),(32,12.5),(64,15.4)],
    w=620, h=250, unit="times", mark=16)
S["c04-f8"]=lambda: f_icons([("spreadsheet","a bar with a sequential part"),("barrier","a curve under a ceiling"),
    ("crate","a fixed job"),("racking","a growing job"),
    ("thread","coordination multiplying"),("danger","a falling curve")], cols=3)
S["c04-f9"]=lambda: f_realia(tbl("Scaling note &middot; the nightly settlement job",
    "Figures for March",
    ["",""],
    [["<b>The question</b>","more, not sooner"],
     ["<b>Total run time</b>","4 h 00"],
     ["<b>The stage that cannot be shared</b>","the final merge, <b>1 h 10</b>"],
     ["<b>Sequential fraction</b>","about 29 percent"],
     ["<b>Ceiling, fixed job</b>","about 3.4 times"],
     ["<b>Measured with twice the workers</b>","1.05 times"]],
    note="The merge takes exactly as long as before."), 560)
S["c04-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{}),
     ("marek",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("board",620,96,0.9),("spreadsheet",300,194,0.24),
     ("essay",370,194,0.26),("lamp",180,140,0.42),("dashboard",470,142,0.4)],
    clockat=(140,46,22,2,30))
S["c04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Plan A", None,
        "<p>The workers will be doubled.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Plan B", None,
        "<p>The question: more, not sooner.<br>Sequential fraction: 29 percent.<br>"
        "Ceiling: about 3.4 times.<br>Measured: 1.05 times for twice the hardware.<br>"
        "The stage that cannot be shared: the final merge.</p>"), w)[0:3],
    w=920, h=300)
S["c04-f12"]=lambda: f_realia(doc("Two plans", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Plan 1</b><br>"
    "Double the worker count on the nightly job.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Plan 2</b><br>"
    "The question, the run time, the sequential stage with its duration, the ceiling, the measured "
    "speed-up and its cost.</p>",
    "One of these bought twice the hardware for eleven minutes out of four hours."))
S["c04-f13"]=lambda: f_realia(form("Scaling-note planner",
    [("The question being answered",""),("The run time",""),("The sequential stage and fraction",""),
     ("The ceiling",""),("The measured speed-up and its cost",""),
     ("What the arithmetic does not tell you","")]), 520)
S["c04-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("marek",195,172,{}),
     ("tomas",280,176,{"seated":True}),("chiamaka",360,172,{"seated":True}),
     ("karin",435,176,{"seated":True}),("mei",520,170,{}),("priya",595,172,{}),
     ("lars",665,170,{}),("ines",735,172,{}),("grace",805,170,{}),
     ("oksana",865,172,{}),("ravi",920,170,{}),("junseo",960,174,{}),("samira",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("spreadsheet",330,196,0.22),
     ("dashboard",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,3,0))
S["c04-f15"]=lambda: f_chart([("proportionally faster",2),("a little faster",11),
    ("no change",5),("slower",3),("we have never tried",6)])
S["c04-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("spreadsheet",320,194,0.24),("board",560,100,0.6),
     ("invoice",395,194,0.24),("note",460,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,0))

# ---------------- Unit 5 · Pick Two, and Then Pick Again ----------------
S["c05-f1"]=lambda: f_icons([("router","two groups, a broken link"),("clock","an old value returned"),
    ("noentry","no answer at all"),("timer","waiting for agreement"),
    ("spreadsheet","two copies disagreeing"),("tally","three of five agreeing"),
    ("essay","a theorem on a page"),("podium","a keynote in 2000"),
    ("proof","a normal day"),("handsup","pick two, crossed out")], cols=5)
S["c05-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("priya",420,172,{})],
    props=[("desk",240,0,1.25),("dashboard",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,11,40))
S["c05-f3"]=lambda: f_icons([("clock","a partition: answer anyway"),("noentry","a partition: refuse"),
    ("signal","normally: answer fast"),("timer","normally: wait for agreement"),
    ("tally","a quorum"),("thread","resolving a conflict")], cols=3)
S["c05-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The store","During a partition","On a normal day","Who chose it"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one nobody has tested: ______________________"), 600)
S["c05-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 29",
    "Platform team &middot; consistency and partitions &middot; page 1 of 1",
    "<p><b>Three publications.</b> The claim was presented as a conjecture in a keynote in 2000. It "
    "was proved by Seth Gilbert and Nancy Lynch in ACM SIGACT News in 2002. And a further trade-off "
    "was added by Daniel Abadi in IEEE Computer in 2012.</p>"
    + table_html(["Word","The formal definition"],
      [["<b>consistency</b>","every operation appears to happen at a single instant, in one order"],
       ["<b>availability</b>","<b>every</b> request received by a <b>non-failing</b> node must "
        "produce a response"],
       ["<b>partition tolerance</b>","the network is allowed to lose arbitrarily many messages"]])
    + "<p><b>Read the second definition again.</b> Availability here means every request gets a "
    "response. It is not a percentage and it is not a service-level target. A system that answers "
    "99.99 percent of requests is not available in this sense. The word in the theorem and the "
    "word on your dashboard are different words that happen to be spelled the same.</p>"
    "<p><b>What the result says.</b> In an asynchronous network, no system can guarantee both "
    "consistency and availability in all runs, including those in which messages are lost. So the "
    "slogan is misleading in one way. A partition is not a property you choose. It is an event that "
    "happens to you. What you choose is what your system does while one is happening.</p>"
    "<p><b>The 2012 addition.</b> The later paper observes that partitions are rare, and that a "
    "system makes a second trade-off all the rest of the time. It can answer quickly from one "
    "replica, or wait for several to agree and answer more slowly. Latency against consistency, on "
    "every request of every normal day.</p>",
    "Sources: the 2000 keynote conjecture; Gilbert and Lynch, ACM SIGACT News, 2002; Abadi, IEEE "
    "Computer, 2012. The results describe what is possible; they recommend nothing, quantify "
    "nothing, and do not address conflict resolution."), 580)
S["c05-f6"]=lambda: f_realia(tbl("Word study","Concession and trade-off",
    ["Structure","What it does","Example"],
    [["although","concedes a point","<b>Although</b> it is faster, the value may be stale."],
     ["while","contrasts two halves","<b>While</b> one replica answers, the others may disagree."],
     ["whereas","contrasts two subjects","One store refuses, <b>whereas</b> the other answers."],
     ["at the expense of","names what is given up","speed <b>at the expense of</b> consistency"],
     ["in exchange for","&nbsp;","&nbsp;"],["the trade-off is","&nbsp;","&nbsp;"]]), 600)
S["c05-f7"]=lambda: f_chart([("normal operation",525591),("partitions",9)], unit="minutes")
S["c05-f8"]=lambda: f_icons([("clock","a stale answer"),("noentry","a refusal"),
    ("signal","a fast single-replica read"),("timer","a slower quorum read"),
    ("tally","three of five"),("thread","two conflicting records")], cols=3)
S["c05-f9"]=lambda: f_realia(tbl("Consistency note",
    "Data document, section 5.2",
    ["","Orders","Catalog"],
    [["<b>during a partition</b>","<b>refuses writes</b> on the minority side",
      "<b>accepts writes</b> on both sides"],
     ["<b>a normal read</b>","waits for <b>three of five</b> replicas",
      "answers from the <b>nearest</b> replica"],
     ["<b>what that costs</b>","about <b>12 ms</b> per read","a value up to <b>two seconds</b> old"],
     ["<b>chosen by</b>","Priya, data, March 2024","Priya, data, March 2024"]],
    note="Two sentences per store, and we had neither."), 600)
S["c05-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("priya",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("dashboard",300,142,0.44),("essay",385,194,0.26),
     ("note",450,194,0.24),("router",640,150,0.4),("lamp",180,140,0.42)],
    clockat=(140,46,22,12,0))
S["c05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Description A", None,
        "<p>The store is eventually consistent and highly available.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Description B", None,
        "<p>Partition: refuses writes on the minority side.<br>"
        "Staleness bound: two seconds.<br>Normal read: three of five replicas.<br>"
        "Cost: about 12 ms.<br>Chosen by Priya, March 2024.</p>"), w)[0:3],
    w=920, h=300)
S["c05-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The store is eventually consistent and available.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "The partition behavior, the normal read behavior, two numbers, the conflict rule and the "
    "owner.</p>",
    "Sixty-one records pointed at nothing, and there was no rule for them."))
S["c05-f13"]=lambda: f_realia(form("Consistency-note planner",
    [("Partition behavior",""),("Normal read behavior",""),("The two numbers",""),
     ("Why the stores differ",""),("The conflict rule",""),("Not in this note","")]), 520)
S["c05-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("priya",195,172,{}),
     ("tomas",280,176,{"seated":True}),("lars",360,172,{"seated":True}),
     ("karin",435,176,{"seated":True}),("mei",520,170,{}),("ines",595,172,{}),
     ("grace",665,170,{}),("marek",735,172,{}),("oksana",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("chiamaka",960,174,{}),("samira",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("router",330,190,0.3),
     ("dashboard",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,30))
S["c05-f15"]=lambda: f_chart([("answers anyway",6),("refuses",4),
    ("it depends on a setting",3),("one region only",5),("I do not know",8)])
S["c05-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",315,194,0.24),("essay",370,194,0.24),
     ("logsheet",440,194,0.26),("note",510,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,1,0))

# ---------------- Unit 6 · Four Numbers and a Survey ----------------
S["c06-f1"]=lambda: f_icons([("calendar","deployment marks"),("clock","commit to release"),
    ("spreadsheet","failed changes"),("timer","a restoration"),
    ("tally","four cluster bars"),("form","a questionnaire"),
    ("dashboard","a scatter plot"),("signpost","cause, with a question mark"),
    ("essay","two reports, two years"),("handsup","a league table argument")], cols=5)
S["c06-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("grace",420,172,{})],
    props=[("desk",240,0,1.25),("dashboard",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,4,10))
S["c06-f3"]=lambda: f_icons([("calendar","how often we deploy"),("clock","how long a change takes"),
    ("spreadsheet","how many changes fail"),("timer","how long to restore"),
    ("tally","the four groups"),("essay","boundaries that move")], cols=3)
S["c06-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The measure","Do we have it","How it is measured","Which way it is moving"],
    [["deployment frequency","&nbsp;","&nbsp;","&nbsp;"],
     ["lead time for changes","&nbsp;","&nbsp;","&nbsp;"],
     ["change failure rate","&nbsp;","&nbsp;","&nbsp;"],
     ["time to restore","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that would catch us: ______________________"), 600)
S["c06-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 30",
    "Platform team &middot; delivery measures &middot; page 1 of 1",
    "<p><b>The sources.</b> The four measures were set out in Accelerate, published in 2018 by "
    "Nicole Forsgren, Jez Humble and Gene Kim. The book draws on the annual State of DevOps "
    "research programme, which has run since 2014 and publishes a report most years.</p>"
    + table_html(["Measure","What it asks"],
      [["<b>deployment frequency</b>","how often do changes reach production?"],
       ["<b>lead time for changes</b>","how long from code committed to code running?"],
       ["<b>change failure rate</b>","what proportion of changes need a fix afterwards?"],
       ["<b>time to restore service</b>","how long to recover when something breaks?"]])
    + "<p><b>Two of them are about speed and two about stability.</b> The central published finding "
    "is that these do not trade off against each other: the groups that deploy most often also "
    "recover fastest. That result contradicts the belief most organizations operate on.</p>"
    "<p><b>Where the numbers come from.</b> The figures are self-reported survey responses from "
    "people who chose to answer a survey about software delivery. The four performance groups are "
    "produced by cluster analysis of that year's answers. So the boundaries move between years. A "
    "team can move from one group to the next without changing anything it does.</p>"
    "<p><b>What follows from that.</b> The research reports associations and argues for predictive "
    "relationships using statistical modeling. It is not a controlled experiment, and the authors "
    "say so. The honest sentence is that teams with these characteristics tend to have those "
    "outcomes. This does not make the finding weak. It makes it a different shape, and the shape "
    "decides what you may do with it.</p>"
    "<p><b>Three of the four can be improved dishonestly.</b> Deploy a trivial change hourly and "
    "your frequency rises. Measure lead time from the final approval and it falls. Define failure "
    "narrowly and your failure rate drops. Time to restore is the one that resists this, because "
    "the customer is the clock.</p>",
    "Sources: Forsgren, Humble and Kim, Accelerate, 2018, and the annual State of DevOps reports "
    "from 2014 onwards. The data is self-reported and the respondents self-selected; the measures "
    "describe a delivery system rather than any individual."), 580)
S["c06-f6"]=lambda: f_realia(tbl("Word study","Correlation and cause",
    ["Expression","How strong","Example"],
    [["is associated with","they occur together",
      "Frequent deployment <b>is associated with</b> faster recovery."],
     ["correlates with","the same, statistically","The two <b>correlate</b> strongly."],
     ["predicts","one estimates the other","Lead time <b>predicts</b> failure rate in the model."],
     ["tends to","usually, not always","Such teams <b>tend to</b> recover faster."],
     ["leads to","&nbsp;","&nbsp;"],["causes","&nbsp;","&nbsp;"]]), 600)
S["c06-f7"]=lambda: f_line([(1,240),(4,180),(11,90),(22,60),(32,28),(41,22)],
    w=620, h=250, unit="min to restore")
S["c06-f8"]=lambda: f_icons([("calendar","deployment marks"),("clock","a commit-to-release clock"),
    ("spreadsheet","a failure proportion"),("timer","a restoration stopwatch"),
    ("tally","four cluster bars"),("dashboard","a trend line")], cols=3)
S["c06-f9"]=lambda: f_realia(tbl("Delivery note &middot; the payments group",
    "Engineering management &middot; quarterly",
    ["Measure","This quarter","Last quarter","How it is produced"],
    [["deployment frequency","<b>32 real changes a week</b>","11",
      "pipeline; configuration-only excluded"],
     ["lead time for changes","<b>9 hours</b>","4 days","pipeline, commit to running"],
     ["change failure rate","<b>14%</b>","8%","counted against the written definition"],
     ["time to restore","<b>22 minutes</b>","24 minutes","from the first alert"]],
    note="All four, or none."), 620)
S["c06-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("grace",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("dashboard",300,142,0.44),("essay",385,194,0.26),
     ("note",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,4,30))
S["c06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report A", None,
        "<p>Deployment frequency: up four times.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Report B", None,
        "<p>Four lines over four quarters.<br>Three improving, one worsening.<br>"
        "The definition of failure printed beneath.<br>No performance group quoted.</p>"), w)[0:3],
    w=920, h=300)
S["c06-f12"]=lambda: f_realia(doc("Two reports", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Report 1</b><br>"
    "One rising figure, and a performance group label.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Report 2</b><br>"
    "Four figures with last quarter's beside them, how each is produced, the failure definition, "
    "and a line on what is not being claimed.</p>",
    "Nine of forty-one deployments existed to be counted."))
S["c06-f13"]=lambda: f_realia(form("Delivery-note planner",
    [("The four measures, this period and last",""),("How each is produced",""),
     ("The definition of failure",""),("What got worse",""),("What you are not claiming",""),
     ("Not in this note","")]), 520)
S["c06-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("grace",195,172,{}),
     ("marek",280,176,{"seated":True}),("tomas",360,172,{"seated":True}),
     ("karin",435,176,{"seated":True}),("mei",520,170,{}),("priya",595,172,{}),
     ("lars",665,170,{}),("ines",735,172,{}),("oksana",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("chiamaka",960,174,{}),("samira",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("spreadsheet",330,196,0.22),
     ("dashboard",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,5,0))
S["c06-f15"]=lambda: f_chart([("all four",4),("two or three",7),("one",9),
    ("none",4),("I do not know",3)])
S["c06-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("logsheet",320,194,0.26),("dashboard",470,142,0.4),
     ("note",390,194,0.24),("essay",545,194,0.26),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
