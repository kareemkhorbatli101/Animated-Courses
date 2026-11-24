# -*- coding: utf-8 -*-
"""Throughline Book 6 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["pf00-f1"]=lambda: f_realia(tbl("Six things you brought from Book 5",
    "One example each, from a review meeting",
    ["What you have","An example"],
    [["A class and a range","12 million at class 5: <b>between</b> 6 <b>and</b> 24."],
     ["<i>Falls to</i>, not <i>falls by</i>","Hours <b>fall to</b> 85 per cent at every doubling."],
     ["A period and a rate","<b>Over a period of</b> 30 years <b>at a real rate of</b> 3.5 %."],
     ["A switching value","<b>Were it to fall by</b> 23 per cent, the result would be zero."],
     ["A time bar","<b>Within</b> 21 days <b>of</b> becoming aware, <b>failing which</b>…"],
     ["The fourth column","A balance sheet <b>is not</b> a risk register."]],
    note="Six boxes. This book asks the question none of the others answer: what happens when "
    "everything was done correctly and the thing still failed?"), 580)
S["pf00-f2"]=lambda: f_realia(doc("Taped inside a notebook",
    "Four questions to ask after a failure",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;What did people know at the time?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Not what you know now. The information available on "
    "the day, in the form it arrived.</span><br>"
    "<b>2 &nbsp;Which decision, taken by whom, would have had to be different?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Without a decision and a person, you have a story "
    "about bad luck.</span><br>"
    "<b>3 &nbsp;What defenses existed, and which were working?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Most failures pass through barriers that were "
    "present and not working.</span><br>"
    "<b>4 &nbsp;Who is accountable, as distinct from responsible?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Several people do things. One person answers for "
    "the whole.</span></p>",
    "Four questions. Do not accept “it was obvious” as an answer to the first."), 620)
S["pf00-f3"]=lambda: f_realia(tbl("Reasonable and wrong",
    "The same five situations, twice",
    ["How it looks afterwards","How it looked on the day"],
    [["they ignored a clear warning","one of forty-one items on a weekly log"],
     ["the trend was obvious","four readings, two of them disputed"],
     ["nobody was willing to stop the job","stopping cost a known amount; carrying on cost an "
      "unknown one"],
     ["the procedure was not followed","the procedure contradicted the method statement"],
     ["a reckless decision","a decision that eleven similar decisions had survived"]],
    note="The right-hand column is not an excuse. It is what was in front of somebody, and <b>nobody "
    "can be instructed to notice the obvious in advance.</b>"), 640)
S["pf00-f4"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Finding A","Nine words",
      "<p><i>The team failed to escalate a known risk.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Assigns blame. Changes nothing.</p>"), 380),
    lambda w,h: f_realia(doc("Finding B","Sixty words",
      "<p><i>The reading was item 29 of 41 on the weekly plant log on 3 and 10 March. No threshold "
      "existed at which a log item required escalation, and the log's owner had no authority to stop "
      "work. A threshold of two consecutive readings would have made escalation automatic and is now "
      "in the procedure, owned by W. Zhao, from 1 May.</i></p>"), 380),
    w=820, h=320, lt="BLAME", rt="A CHANGE")

# ---------------- Unit 1 ----------------
S["pf01-f1"]=lambda: f_icons([("book","an essay from 1967"),("pipe","a buried culvert"),
    ("note","a sketch of an invented solution"),("racking","the same detail on four jobs"),
    ("folder","a business case"),("noentry","a project abandoned"),
    ("tally","twenty-three projects sorted"),("magnifier","a 2016 critique"),
    ("data","a ground investigation left incomplete"),("podium","a sponsor quoting a book")],
    cols=5)
S["pf01-f2"]=lambda: f_scene(760,380,
    people=[("nkemelu",200,172,{}),("anders",290,170,{})],
    props=[("desk",400,0,1.0),("tally",470,150,0.22),("book",580,150,0.26),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"TWENTY-THREE PROJECTS",
      [("benevolent","3"),("malevolent","9")]),
    clockat=(360,34,22,8,20))
S["pf01-f3"]=lambda: f_icons([("pipe","a difficulty larger than expected"),
    ("note","an idea better than expected"),("balance","the two cancelling"),
    ("noentry","a difficulty with no idea"),("handshake","no surprises at all"),
    ("podium","a description used as a policy")], cols=3)
S["pf01-f4"]=lambda: f_realia(tbl("Team research","Sort four projects",
    ["The project","Were the difficulties larger?","Was there an unforeseen solution?",
     "Which outcome?"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the project we tell the story about.</b>"), 660)
S["pf01-f5"]=lambda: f_realia(doc("Lindhurst · project office note 1",
    "Twenty-three projects, six years",
    "<p><b>The essay.</b> <b>A. O. Hirschman</b>, <i>The Principle of the Hiding Hand</i>, <b>The "
    "Public Interest, Winter 1967</b>, and the book of the same year setting out his observations of "
    "<b>eleven development projects</b>.</p>"
    "<p><b>The observation, in two parts.</b> People <b>underestimate the difficulties</b> a project "
    "will encounter, and they also <b>underestimate their own ingenuity</b> in dealing with them. "
    "<b>Where the two errors are of similar size, they cancel.</b></p>"
    + table_html(["Difficulties","Ingenuity","Outcome"],
      [["underestimated","<b>underestimated by about as much</b>",
        "<b>the benevolent case: completed, often better</b>"],
       ["underestimated","<b>not underestimated</b>",
        "<b>the malevolent case: overrun, descope or abandonment</b>"],
       ["about right","about right","no surprise either way"]])
    + "<p style='border:1.5px solid #3b3b5c;padding:8px'><b>One genuine case in our files.</b> "
    "<b>The depot, 2019.</b> A <b>buried culvert</b>, on <b>no drawing</b> held by us, the client or "
    "the utility. The team invented a <b>cantilevered slab detail</b> rather than divert it. <b>The "
    "detail has been used on four later jobs and saved about 1.2 million.</b> <b>Had the culvert been "
    "known at tender we would have priced a diversion and the detail would not exist.</b></p>"
    + table_html(["Twenty-three completed projects, six years","Count"],
      [["<b>Benevolent</b> — difficulties and ingenuity both underestimated","<b>3</b>"],
       ["<b>Malevolent</b> — difficulties underestimated, no offsetting idea","<b>9</b>"],
       ["Neither — no surprise either way","<b>11</b>"]])
    + "<p><b>Three to one against.</b> A <b>2016</b> critique tested the principle against a much "
    "larger sample and argued that the benevolent form is <b>rare</b>.</p>"
    "<p><b>The misuse.</b> A paper of <b>2023</b> cited the hiding hand as a reason to begin "
    "construction <b>before the ground investigation was complete</b>. <b>The essay forecloses that: "
    "a difficulty cannot be hidden from oneself on purpose.</b></p>",
    "Source: A. O. Hirschman, The Principle of the Hiding Hand, The Public Interest, Winter 1967, and "
    "Development Projects Observed of the same year, based on observation of eleven development "
    "projects. The principle is presented as observed and providential rather than as a planning "
    "rule; its author states that difficulties cannot deliberately be concealed from oneself; and it "
    "reports no frequency or sample frame. A 2016 critique by B. Flyvbjerg and C. Sunstein argues "
    "from a substantially larger sample that the benevolent form is rare."), 640)
S["pf01-f6"]=lambda: f_realia(tbl("Word study","Concession and counter-claim",
    ["Structure","What it does","Example"],
    [["<i>granted that</i>","concedes before disagreeing",
      "<b>Granted that</b> the mechanism is real, it cannot be planned."],
     ["<i>while it is true that</i>","concedes a fact",
      "<b>While it is true that</b> it happened here, it happened once."],
     ["<i>even so</i>","introduces the counter-claim",
      "<b>Even so</b>, nine cases ran the other way."],
     ["<i>which does not mean that</i>","blocks the wrong inference",
      "It works sometimes, <b>which does not mean that</b> you may rely on it."],
     ["<i>that said</i>","",""],["<i>to be fair</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pf01-f7"]=lambda: f_part("Twenty-three completed projects",
    [("benevolent: both underestimated",3,"#4a6b3b"),
     ("malevolent: difficulty only",9,"#7a3b2f"),
     ("no surprise either way",11,"#3b3b5c")])
S["pf01-f8"]=lambda: f_icons([("book","an essay from 1967"),("pipe","a buried culvert"),
    ("note","an invented detail"),("racking","four later jobs"),
    ("tally","three against nine"),("magnifier","a 2016 article")], cols=3, numbered=False)
S["pf01-f9"]=lambda: f_realia(tbl("Project outcome tally · six years",
    "Twenty-three projects in three blocks",
    ["Block","Project","The difficulty underestimated","The solution, and its reuse"],
    [["<b>benevolent</b>","depot, 2019","a culvert on no drawing",
      "<b>cantilevered slab · 4 later jobs · ~1.2m</b>"],
     ["<b>benevolent</b>","harbor wall, 2021","rock head 2 m higher than bored",
      "<b>a pinning method · 2 later jobs</b>"],
     ["<b>benevolent</b>","depot extension, 2022","an unrecorded duct bank",
      "<b>a cable re-route now standard</b>"],
     ["malevolent","nine projects","various","<b>none arrived</b>"],
     ["neither","eleven projects","—","—"]],
    note="<b>The three in the first block are the three we talk about.</b> All three are in the "
    "capability statement; none of the nine is."), 700)
S["pf01-f10"]=lambda: f_scene(860,400,
    people=[("nkemelu",110,174,{}),("okonjo",320,176,{"seated":True}),
     ("anders",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("pipe",250,148,0.24),("note",360,150,0.22),
     ("magnifier",520,150,0.2),("shelf",760,92,0.5)],
    board=(40,18,230,120,"WHICH STORIES",[("benevolent","3"),("in the brochure","3")]),
    clockat=(700,34,22,9,0))
S["pf01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Paragraph A","An authority",
      "<p><i>The principle of the hiding hand supports commencing construction in advance of the "
      "completion of ground investigation.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>The essay forecloses this and says so.</p>"), 380),
    lambda w,h: f_realia(doc("Paragraph B","Its own argument",
      "<p><i>Starting early saves eleven weeks. The ground risk is unquantified because we have "
      "chosen not to quantify it. The decision is the sponsor's.</i></p>"), 380),
    w=820, h=300, lt="BORROWED", rt="OWNED")
S["pf01-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A","A principle and a recommendation",
      "<p>Cites a 1967 essay. Recommends starting early. No count of any kind.</p>"), 380),
    lambda w,h: f_realia(doc("Note B","A concession and a count",
      "<p>Concedes the instance in full, with dates and figures. <b>3 of 23 benevolent, 9 "
      "malevolent.</b> States what the source does not authorize.</p>"), 380),
    w=820, h=300, lt="ONE SIDE", rt="BOTH SIDES")
S["pf01-f13"]=lambda: f_realia(form("Disagreement planner",
    [("The claim being made",""),("The strongest evidence for it",""),("Your concession",""),
     ("Your counter-claim",""),("The count on both sides",""),
     ("What the source does not authorize","")],
    note="Six boxes. Hand it to a partner; they ask what you have conceded."), 560)
S["pf01-f14"]=lambda: f_scene(1000,450,
    people=[("nkemelu",60,176,{}),("anders",135,172,{}),("okonjo",210,176,{"seated":True}),
     ("hana",290,172,{"seated":True}),("wei",370,176,{"seated":True}),
     ("oksana",445,172,{}),("priya",520,176,{"seated":True}),("sofia",595,170,{}),
     ("bah",660,172,{}),("nour",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("magnifier",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"WHICH STORIES DO WE TELL",
      [("benevolent","3"),("malevolent","9")]),
    clockat=(278,34,22,9,0))
S["pf01-f15"]=lambda: f_chart([("yes, and it was decisive",4),("yes, a small one",9),
    ("no",11),("we met no surprises",3),("I do not know",5)])
S["pf01-f16"]=lambda: f_realia(doc("On a desk in February",
    "What was on it at six o'clock",
    "<p><b>A 2019 photograph</b> of a culvert in an excavation.</p>"
    "<p><b>A slab detail drawing</b>, since used four times.</p>"
    "<p><b>A tally</b> of twenty-three projects in three blocks.</p>"
    "<p><b>A 2023 paper</b> with one paragraph marked.</p>"
    "<p><b>A 2016 journal article.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The mechanism is real and I can date ours to week nine "
    "of 2019, which is why I have written the instance out in full before disagreeing with the use "
    "made of it. A description of something that sometimes happens becomes a permission in a single "
    "sentence of a board paper, written by somebody acting in good faith, and the only defense I know "
    "is to count both sides and name who is deciding. Three of our twenty-three are in the brochure "
    "and nine are in a spreadsheet, and the spreadsheet is the half that predicts next year.</i></p>",
    "Six o'clock. Three, nine, eleven."), 620)

# ---------------- Unit 2 ----------------
S["pf02-f1"]=lambda: f_icons([("book","a book from 1978"),("archive","official inquiry reports"),
    ("calendar","seventeen months, nine marks"),("boiler","a sensor replaced three times"),
    ("firealarm","an alarm suppressed"),("form","a commissioning waiver"),
    ("note","a drawing not updated"),("meeting","seven people, seven pieces"),
    ("magnifier","a review assembling them"),("magnifier","two marks with question marks")],
    cols=5)
S["pf02-f2"]=lambda: f_scene(760,380,
    people=[("wei",200,172,{}),("nkemelu",290,170,{})],
    props=[("desk",400,0,1.0),("logsheet",470,150,0.24),("calendar",580,150,0.24),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"SEVENTEEN MONTHS",
      [("signals","9"),("max held by one","3")]),
    clockat=(360,34,22,10,10))
S["pf02-f3"]=lambda: f_icons([("handshake","a notionally normal start"),
    ("calendar","the incubation period"),("firealarm","a precipitating event"),
    ("danger","the onset"),("firstaid","rescue and salvage"),
    ("review","a full readjustment of beliefs")], cols=3)
S["pf02-f4"]=lambda: f_realia(tbl("Team research","Four things that do not fit",
    ["What does not fit","Where it is recorded","Who holds a related piece",
     "What would have to exist for them to meet"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the system that holds only one of the pieces.</b>"), 660)
S["pf02-f5"]=lambda: f_realia(doc("Lindhurst · quality note 2",
    "The Calder control failure of 14 June",
    "<p><b>The book.</b> <b>B. A. Turner</b>, <i>Man-Made Disasters</i>, <b>first published 1978</b>, "
    "second edition <b>1997</b> with <b>N. Pidgeon</b>. Turner examined <b>official accident inquiry "
    "reports</b> and concluded that large failures have a <b>long preparatory phase</b>.</p>"
    + table_html(["Stage",""],
      [["<b>I</b>","a notionally normal starting point"],
       ["<b>II</b>","<b>the incubation period</b> — events at odds with accepted beliefs about "
        "the hazards accumulate, unnoticed"],
       ["<b>III</b>","a <b>precipitating event</b>"],["<b>IV</b>","the <b>onset</b>"],
       ["<b>V</b>","rescue and salvage"],["<b>VI</b>","<b>full cultural readjustment</b>"]])
    + "<p><b>A failure of foresight rather than of care:</b> the information is usually present and "
    "<b>distributed among people none of whom holds enough of it.</b></p>"
    + table_html(["#","The signal","Where it lived","Who held it"],
      [["1","sensor replaced <b>3× in 14 months</b>","maintenance","fitter"],
       ["2","plant log item, twice","weekly log","log owner"],
       ["3","<i>recurring fault, cause unknown</i>","maintenance","supervisor"],
       ["4","<b>telemetry alarm suppressed</b>, Feb","telemetry","control engineer"],
       ["5","<b>commissioning waiver</b>, 2022","project file","project manager"],
       ["6","drawing <b>never updated</b>","drawing register","technician"],
       ["7","a <b>verbal instruction</b>","a notebook","shift leader"],
       ["8","a <b>query never answered</b>","an email thread of 41","<b>nobody</b>"],
       ["9","a <b>training gap</b>","handover file","operations"]])
    + "<p><b>7 people held at least one. No one held more than 3.</b> Four systems, a notebook and an "
    "email thread. <b>Assembling them afterwards took 6 weeks.</b></p>"
    "<p style='border:1.5px solid #3b3b5c;padding:8px'><b>And two signals that led nowhere.</b> A "
    "valve that <b>stuck twice and then stopped</b>; an <b>unexplained pressure reading</b> that "
    "never recurred. <b>Neither has anything to do with 14 June, and both stay in this note.</b> "
    "<b>The incubation period is identified by its ending</b>, and a report printing only the nine "
    "would say the failure was obvious. <b>It was assemblable.</b></p>",
    "Source: B. A. Turner, Man-Made Disasters, first published 1978, second edition 1997 with N. "
    "Pidgeon. Derived from official accident inquiry reports; describes a staged sequence in which "
    "discrepant events accumulate during an incubation period before a precipitating event; "
    "characterizes such failures as failures of foresight arising from information distributed among "
    "parties none of whom holds enough of it. It is a sociological account rather than a predictive "
    "method, inherits the framing of the reports it draws on, and offers no means of identifying an "
    "incubation period from within one."), 660)
S["pf02-f6"]=lambda: f_realia(tbl("Word study","Hindsight and the narrative past",
    ["Structure","What it does","Example"],
    [["<i>by then</i>","fixes a point in the build-up",
      "<b>By then</b> the sensor had been replaced three times."],
     ["<i>as it turned out</i>","marks what only the ending revealed",
      "<b>As it turned out</b>, two of the eleven meant nothing."],
     ["<i>with hindsight</i>","labels the view from after",
      "<b>With hindsight</b> the pattern is plain."],
     ["<i>at the time</i>","restores the view from inside",
      "<b>At the time</b> it was one of forty-one log items."],
     ["<i>what nobody knew was that</i>","",""],["<i>had</i> + past participle","",""]],
    note="Two rows left empty on purpose. <b>The pair must appear in the same paragraph.</b>"), 640)
S["pf02-f7"]=lambda: f_timeline([(0.0,"month 0","sensor 1st replacement"),
    (0.35,"month 6","log items"),(0.55,"month 10","alarm suppressed"),
    (0.72,"month 13","query unanswered"),(1.0,"month 17","14 June")], 1.0, w=620)
S["pf02-f8"]=lambda: f_icons([("boiler","a sensor replaced"),("firealarm","an alarm suppressed"),
    ("form","a waiver left open"),("note","a drawing not updated"),
    ("notebook","a notebook entry"),("email","an unanswered query")], cols=3, numbered=False)
S["pf02-f9"]=lambda: f_realia(tbl("Signal table · seventeen months",
    "Eleven discrepant events · nine in the chain, two not",
    ["#","Signal","System","Holder","Chain?"],
    [["1","sensor replaced 3×","maintenance","fitter","<b>yes</b>"],
     ["2","plant log item, twice","weekly log","log owner","<b>yes</b>"],
     ["3","<i>cause unknown</i>","maintenance","supervisor","<b>yes</b>"],
     ["4","alarm suppressed","telemetry","control engineer","<b>yes</b>"],
     ["5","waiver of 2022 open","project file","project manager","<b>yes</b>"],
     ["6","drawing not updated","drawing register","technician","<b>yes</b>"],
     ["7","verbal instruction","a notebook","shift leader","<b>yes</b>"],
     ["8","query unanswered","email thread of 41","<b>nobody</b>","<b>yes</b>"],
     ["9","training gap","handover file","operations","<b>yes</b>"],
     ["10","valve stuck twice, then stopped","maintenance","fitter","<b>no</b>"],
     ["11","unexplained pressure reading","telemetry","control engineer","<b>no</b>"]],
    note="<b>Eleven things did not fit and no mechanism compared them.</b>"), 700)
S["pf02-f10"]=lambda: f_scene(860,400,
    people=[("wei",110,174,{}),("nkemelu",320,176,{"seated":True}),
     ("bah",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("logsheet",250,148,0.24),("firealarm",360,148,0.22),
     ("form",520,150,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"ONE VALVE, THREE NAMES",
      [("systems","4"),("names","3")]),
    clockat=(700,34,22,10,30))
S["pf02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report A","Nine warnings",
      "<p>Nine signals in date order, under the heading <i>warnings not acted upon</i>. No systems "
      "named.</p>"
      "<p style='font-size:12px;color:#6b6861'>Recommendation: greater vigilance.</p>"), 380),
    lambda w,h: f_realia(doc("Report B","Eleven signals",
      "<p>Eleven, with the system and holder of each, and the two that led nowhere marked.</p>"
      "<p style='font-size:12px;color:#6b6861'>Recommendation: one query across four systems.</p>"),
      380),
    w=820, h=300, lt="OBVIOUS", rt="ASSEMBLABLE")
S["pf02-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("With hindsight","A straight line",
      "<p>Nine signals, seventeen months, rising to a single event.</p>"), 380),
    lambda w,h: f_realia(doc("At the time","Four systems",
      "<p>Nine items in four systems, a notebook and an email thread, held by seven people, none "
      "holding more than three — and two more that meant nothing.</p>"), 380),
    w=820, h=300, lt="AFTER", rt="INSIDE")
S["pf02-f13"]=lambda: f_realia(form("Review planner",
    [("The signals",""),("Where each lived",""),("Who held each",""),
     ("Which formed the chain",""),("The view at the time",""),
     ("The one mechanism recommended","")],
    note="Six boxes. Hand it to a partner; they ask what the view was on the day."), 560)
S["pf02-f14"]=lambda: f_scene(1000,450,
    people=[("wei",60,176,{}),("nkemelu",135,172,{}),("bah",210,176,{"seated":True}),
     ("anders",290,172,{"seated":True}),("okonjo",370,176,{"seated":True}),
     ("hana",445,172,{}),("oksana",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("nour",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("logsheet",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"WHICH WORD",
      [("obvious","✕"),("assemblable","✓")]),
    clockat=(278,34,22,10,30))
S["pf02-f15"]=lambda: f_chart([("yes, formally",4),("informally",8),("no",10),
    ("only after real failures",9),("I do not know",4)])
S["pf02-f16"]=lambda: f_realia(doc("On a desk in July",
    "What was on it at six o'clock",
    "<p><b>A seventeen-month timeline</b> with eleven marks, two of them outlined.</p>"
    "<p><b>Three documents</b> naming one circuit in three different ways.</p>"
    "<p><b>A suppressed-alarm log</b> with a review date.</p>"
    "<p><b>A commissioning waiver</b> from 2022.</p>"
    "<p><b>A book from 1978.</b></p>"
    "<p><b>A note of three sentences.</b> <i>Everybody in this story did something defensible and the "
    "sum was nearly an incident, which is the sentence people find hardest because it leaves nobody "
    "to be annoyed with. I kept the two signals that led nowhere because the incubation period is "
    "identified by its ending, and nine signals printed in a straight line would have produced a "
    "recommendation about vigilance, which has never improved anything anywhere. The failure lived "
    "between four systems and three names for one valve, and a query that compares them is four days "
    "of work against seventeen months of nobody being able to see it.</i></p>",
    "Six o'clock. Eleven signals, nine in the chain, four systems, three names."), 640)

# ---------------- Unit 3 ----------------
S["pf03-f1"]=lambda: f_icons([("book","a book from 1984"),("dashboard","a two-by-two chart"),
    ("signpost","machines each feeding the next"),("chain","parts interacting sideways"),
    ("container","a buffer tank"),("noentry","no slack at all"),
    ("firealarm","a hand on a trip switch"),("phone","a call to a duty manager"),
    ("form","a procedure with two instructions"),("magnifier","a paper disputing it")], cols=5)
S["pf03-f2"]=lambda: f_scene(760,380,
    people=[("wei",200,172,{}),("bah",290,170,{})],
    props=[("desk",400,0,1.0),("dashboard",470,146,0.26),("form",580,150,0.22),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"TWO DIMENSIONS",
      [("control system","complex, tight"),("civil works","linear, loose")]),
    clockat=(360,34,22,5,45))
S["pf03-f3"]=lambda: f_icons([("signpost","linear and loose"),("timer","linear and tight"),
    ("chain","complex and loose"),("danger","complex and tight"),
    ("container","a disturbance absorbed"),("noentry","a disturbance propagating")], cols=3)
S["pf03-f4"]=lambda: f_matrix(["loosely coupled","tightly coupled"],
    [("linear interactions",["a works yard","an assembly line"]),
     ("complex interactions",["a design office","THE DANGEROUS QUADRANT"])])
S["pf03-f5"]=lambda: f_realia(doc("Lindhurst · quality note 3",
    "Where our systems sit, and one procedural conflict",
    "<p><b>The book.</b> <b>C. Perrow</b>, <i>Normal Accidents: Living with High-Risk "
    "Technologies</i>, <b>1984</b>, second edition <b>1999</b>. In certain systems serious accidents "
    "are <b>normal</b> — <b>inherent in how the system is built</b> rather than caused by "
    "carelessness.</p>"
    + table_html(["","Loosely coupled","Tightly coupled"],
      [["<b>Linear</b>","a works yard: slack everywhere","an assembly line: no slack, visible order"],
       ["<b>Complex</b>","a design office: odd effects, but time",
        "<b>the dangerous quadrant: unforeseen interaction and no time</b>"]])
    + table_html(["System","Interactions","Coupling"],
      [["the <b>civil works</b>","<b>linear</b> — excavate, pour, cure, backfill",
        "<b>loose</b> — weeks of float"],
       ["the <b>control system</b>","<b>complex</b> — telemetry, interlocks, pumps, tariff "
        "logic, standby set","<b>tight</b> — seconds, <b>no manual fallback since 2021</b>"]])
    + "<p style='border:1.5px solid #3b3b5c;padding:8px'><b>The conflict.</b> A <b>tightly "
    "coupled</b> system needs a <b>centralized</b> response, because a disturbance crosses everything "
    "at once. A <b>complexly interacting</b> system needs a <b>local</b> one, because nobody at the "
    "top can diagnose an interaction nobody foresaw. <b>A system that is both needs both, and they "
    "contradict.</b></p>"
    "<p><b>14 June, 05:40.</b> The procedure reads: <b>notify the duty manager; trip if "
    "instructed.</b> <b>The operator tripped and telephoned afterwards.</b> He had <b>two disagreeing "
    "readings</b>, a <b>valve position unknown</b> with a pump running, and <b>thirty to forty "
    "seconds</b>. <b>The breach was correct.</b></p>"
    + table_html(["The bounded exception",""],
      [["<b>1</b>","trip <b>without authority</b> in <b>four named conditions</b>"],
       ["<b>2</b>","notify <b>within 10 minutes</b> — afterwards"],
       ["<b>3</b>","<b>never a disciplinary matter</b>, whatever the cause proves to be"],
       ["<b>4</b>","<b>reviewed within 5 working days</b>, for the conditions not the person"]])
    + "<p><b>An unnecessary trip costs about 40 and an afternoon. A trip one minute late costs the "
    "station.</b></p>",
    "Source: C. Perrow, Normal Accidents: Living with High-Risk Technologies, 1984, second edition "
    "1999. The book classifies systems by interactive complexity and coupling and argues that in "
    "systems that are both, accidents arising from unanticipated interactions of multiple failures "
    "are a normal consequence of the design. Classification of a particular system is a matter of "
    "judgment; the framework offers no probability of accident; and its central claim has been "
    "contested by researchers of high-reliability organizations."), 660)
S["pf03-f6"]=lambda: f_realia(tbl("Word study","Inevitability and degree",
    ["Structure","How strong","Example"],
    [["<i>is liable to</i>","possible, and in the nature of the thing",
      "Such a system <b>is liable to</b> fail in ways nobody modeled."],
     ["<i>is bound to</i>","strongest; avoid unless you mean it",
      "With no fallback, a disturbance <b>is bound to</b> propagate."],
     ["<i>given</i>","states the condition",
      "<b>Given</b> two disagreeing readings, he had no diagnosis."],
     ["<i>inherent in</i>","locates the cause in the design",
      "The conflict is <b>inherent in</b> the system."],
     ["<i>to the extent that</i>","",""],["<i>not so much … as</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pf03-f7"]=lambda: f_matrix(["loose coupling","tight coupling"],
    [("linear",["a works yard","an assembly line"]),
     ("complex",["a design office","our control system"])])
S["pf03-f8"]=lambda: f_icons([("signpost","a line of machines"),("chain","interacting parts"),
    ("container","a buffer tank"),("noentry","no buffer"),
    ("firealarm","a trip switch"),("phone","a call to a duty manager")],
    cols=3, numbered=False)
S["pf03-f9"]=lambda: f_realia(doc("Bounded exception · emergency trip authority",
    "Control system: interactively complex and tightly coupled",
    "<p><b>The operator may trip the plant without authority in the following four conditions:</b></p>"
    + table_html(["#","Condition"],
      [["<b>1</b>","<b>disagreeing primary readings</b>"],
       ["<b>2</b>","<b>unknown valve position</b> with a pump running"],
       ["<b>3</b>","an <b>unexplained standby start</b>"],
       ["<b>4</b>","<b>loss of telemetry</b> exceeding 10 seconds"]])
    + "<p><b>Notification: within 10 minutes, afterwards.</b></p>"
    "<p style='font-size:15px'><b>A TRIP UNDER THESE CONDITIONS IS NEVER A DISCIPLINARY MATTER, "
    "WHATEVER THE CAUSE PROVES TO HAVE BEEN.</b></p>"
    "<p><b>Reviewed within five working days, for the conditions and not the person.</b></p>"
    "<p style='font-size:15px'><b>UNNECESSARY TRIP: ABOUT 40 AND AN AFTERNOON. &nbsp; TRIP ONE "
    "MINUTE LATE: THE STATION.</b></p>",
    "The two requirements of this plant — centralized and local response — cannot both be "
    "met in forty seconds. This is a property of the design, not a defect in drafting."), 620)
S["pf03-f10"]=lambda: f_scene(860,400,
    people=[("wei",110,174,{}),("bah",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("logsheet",250,148,0.24),("form",360,150,0.22),
     ("spreadsheet",520,150,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"FORTY SECONDS",[("call rings for","15 s"),("time available","40 s")]),
    clockat=(700,34,22,6,0))
S["pf03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Procedure A","Notify, then trip",
      "<p><i>Notify the duty manager; trip if instructed.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>The call does not fit inside forty seconds.</p>"),
      380),
    lambda w,h: f_realia(doc("Procedure B","Four conditions",
      "<p>Trip without authority in four named conditions; notify within ten minutes; <b>never a "
      "disciplinary matter.</b></p>"), 380),
    w=820, h=300, lt="CENTRAL", rt="BOUNDED")
S["pf03-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Finding A","A breach",
      "<p><i>The operator failed to follow the emergency procedure.</i></p>"), 380),
    lambda w,h: f_realia(doc("Finding B","A conflict",
      "<p><i>The trip breached the procedure and was correct. The plant requires a centralized and a "
      "local response in the same forty seconds, which is a property of its design.</i></p>"), 380),
    w=820, h=300, lt="A PERSON", rt="A DESIGN")
S["pf03-f13"]=lambda: f_realia(form("Conflict planner",
    [("The system's interactions",""),("Its coupling",""),("What each requires",""),
     ("The time actually available",""),("The bounded exception",""),
     ("The two costs side by side","")],
    note="Six boxes. Hand it to a partner; they ask what it costs to be wrong."), 560)
S["pf03-f14"]=lambda: f_scene(1000,450,
    people=[("wei",60,176,{}),("bah",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("sofia",290,172,{"seated":True}),("anders",370,176,{"seated":True}),
     ("okonjo",445,172,{}),("hana",520,176,{"seated":True}),("oksana",595,170,{}),
     ("priya",660,172,{}),("nour",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("firealarm",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"BOTH, IN ONE MINUTE",
      [("centralized","✓"),("local","✓")]),
    clockat=(278,34,22,6,0))
S["pf03-f15"]=lambda: f_chart([("yes, and it is written down",3),("yes, in practice",8),
    ("no",12),("I have never had to",6),("I do not know",4)])
S["pf03-f16"]=lambda: f_realia(doc("On a desk in August",
    "What was on it at six o'clock",
    "<p><b>A trip log</b> timed 05:40.</p>"
    "<p><b>An open procedure</b> at the emergency section.</p>"
    "<p><b>A two-by-two chart</b> with one system marked.</p>"
    "<p><b>A costing sheet</b> showing forty thousand against a replacement station.</p>"
    "<p><b>A book from 1984.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The two requirements are both correct and they conflict "
    "in the same minute, which is a property of what we have built rather than a defect in anybody's "
    "drafting, and saying so is the only way the next version of the procedure does not swing to the "
    "opposite error. The clause everybody will argue about is the one removing the disciplinary "
    "consequence, and without it the authority is decoration, because at twenty to six a person "
    "weighs forty thousand against a difficult conversation and the conversation wins. The only "
    "recommendation in my note that addresses the design rather than the response is to restore the "
    "manual fallback, and it is the one least likely to be funded.</i></p>",
    "Six o'clock. Forty seconds, four conditions, two costs."), 640)
