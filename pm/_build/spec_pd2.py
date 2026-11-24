# -*- coding: utf-8 -*-
"""Throughline Book 4 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 ----------------
S["pd04-f1"]=lambda: f_icons([("book","a 13-page document"),("badge","3 role badges"),
    ("calendar","5 events"),("clipboard","3 artifacts"),("board","a board and a goal card"),
    ("proof","a definition of done"),("meeting","a short daily meeting"),
    ("computer","a review with a working product"),("note","a retrospective"),
    ("handsup","four people, one badge")], cols=5)
S["pd04-f2"]=lambda: f_scene(760,380,
    people=[("linh",200,172,{}),("nkemelu",290,170,{})],
    props=[("desk",400,0,1.0),("book",470,150,0.28),("badge",570,152,0.26),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"FIVE EVENTS",
      [("held","3"),("crossed through","2")]),
    clockat=(360,34,22,9,20))
S["pd04-f3"]=lambda: f_icons([("timer","a sprint, a fixed box"),("meeting","planning"),
    ("handsup","a short daily meeting"),("computer","a review"),("note","a retrospective"),
    ("proof","a definition of done")], cols=3)
S["pd04-f4"]=lambda: f_realia(tbl("Team research","Four teams, four rows",
    ["The team","Events held","Accountabilities held","What is missing"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the part that is always missing.</b>"), 640)
S["pd04-f5"]=lambda: f_realia(doc("Lindhurst · project office note 4",
    "Thirteen pages that refuse to be tailored",
    "<p><b>The document.</b> A guide to a development framework, <b>November 2020</b>, by its two "
    "authors, <b>13 pages</b>.</p>"
    + table_html(["3 accountabilities","5 events","3 artifacts (+3 commitments)"],
      [["product owner","the sprint","product backlog — <i>goal</i>"],
       ["developers","sprint planning","sprint backlog — <i>sprint goal</i>"],
       ["scrum master","daily meeting","increment — <i>definition of done</i>"],
       ["","review",""],
       ["","retrospective",""]])
    + "<p style='border:1.5px solid #b07a1e;padding:8px'><b>This is the one document in this book "
    "that refuses tailoring.</b> It states that its elements are <b>indivisible</b>: implementing "
    "only parts of it is permitted, but the result <b>may not be called by its name</b>.</p>"
    "<p><b>Our subcontractor holds 7 of the 11.</b> Absent: <b>the review</b>, <b>the "
    "retrospective</b>, <b>a single product owner</b> (a committee of four holds the badge) and "
    "<b>a definition of done</b>.</p>",
    "Source: a guide to a development framework, November 2020, by its two authors. The guide "
    "describes a framework that is deliberately incomplete, states that its elements are "
    "indivisible and that implementing only parts of it is not the framework it names, and "
    "prescribes no technique, tool, metric or document."), 640)
S["pd04-f6"]=lambda: f_realia(tbl("Word study","The present simple for rules",
    ["Structure","What it does","Example"],
    [["the present simple","states a rule, not a habit",
      "The review <b>is held</b> at the end of the sprint."],
     ["<i>each</i> + singular","makes the rule apply every time",
      "<b>Each</b> sprint <b>ends</b> with a review."],
     ["<i>there is</i> / <i>there are</i>","states what exists",
      "<b>There is</b> one product owner."],
     ["<i>is responsible for</i>","assigns the accountability",
      "The owner <b>is responsible for</b> ordering the backlog."],
     ["<i>may not</i>","",""],["<i>is required</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pd04-f7"]=lambda: f_part("Eleven defined elements",
    [("present",7,"#4a6b3b"),("missing",4,"#b07a1e")])
S["pd04-f8"]=lambda: f_icons([("book","13 pages"),("badge","three badges"),
    ("calendar","five events, two crossed out"),("proof","a definition of done"),
    ("handsup","four people, one badge"),("wall","an empty retrospective wall")],
    cols=3, numbered=False)
S["pd04-f9"]=lambda: f_realia(tbl("Framework audit · subcontractor",
    "Eleven rows, four of them saying no",
    ["Element","Present","Who holds it","What its absence hides"],
    [["product owner","<b>no</b>","a committee of four","nobody can order the backlog"],
     ["developers","yes","the team of nine","—"],
     ["scrum master","yes","L. Tran","—"],
     ["the sprint","yes","two weeks, fixed","—"],
     ["sprint planning","yes","Monday, 2 hours","—"],
     ["daily meeting","yes","15 minutes","—"],
     ["<b>review</b>","<b>no</b>","—","<b>nobody outside sees the increment</b>"],
     ["<b>retrospective</b>","<b>no</b>","—","<b>the same fault recurs quietly</b>"],
     ["product backlog","yes","in the tool","—"],
     ["sprint backlog","yes","in the tool","—"],
     ["<b>definition of done</b>","<b>no</b>","—","<b>“done” means four things</b>"]],
    note="<b>Removing the part hides the problem, not the problem itself.</b>"), 700)
S["pd04-f10"]=lambda: f_scene(860,400,
    people=[("linh",110,174,{}),("hana",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("book",250,148,0.28),("badge",360,150,0.26),
     ("form",520,150,0.26),("shelf",760,92,0.5)],
    board=(40,18,230,120,"FIVE EVENTS",[("held","3"),("not held","2")]),
    clockat=(700,34,22,10,0))
S["pd04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Description A","The name",
      "<p><i>Delivery is managed using the framework.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Seven of eleven elements. The guide says this may "
      "not be called by its name.</p>"), 380),
    lambda w,h: f_realia(doc("Description B","Eleven rows and three lines",
      "<p>Seven present, four absent. Then three lines describing what the team actually does, "
      "<b>without the name</b>: two-week cycles, a daily meeting, and a demonstration to the "
      "client every second cycle.</p>"), 380),
    w=820, h=300, lt="THE NAME", rt="THE PRACTICE")
S["pd04-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","A page of benefits",
      "<p><i>Our agile delivery framework ensures rapid feedback and continuous improvement.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>There is no feedback event and no improvement "
      "event.</p>"), 380),
    lambda w,h: f_realia(doc("After","An audit and two options",
      "<p>Eleven rows, four absences, three lines of practice.</p>"
      "<p><b>Option 1:</b> add the four elements. <b>Option 2:</b> stop using the name.</p>"), 380),
    w=820, h=300, lt="A CLAIM", rt="A CHOICE")
S["pd04-f13"]=lambda: f_realia(form("Audit planner",
    [("The document and its date",""),("The elements it defines",""),("Which are present",""),
     ("Who holds each",""),("What each absence hides",""),("The two options","")],
    note="Six boxes. Hand it to a partner; they ask which name you may use."), 560)
S["pd04-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("nkemelu",135,172,{}),("hana",210,176,{"seated":True}),
     ("wei",290,172,{"seated":True}),("anders",370,176,{"seated":True}),
     ("junseo",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("badge",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"WHAT THE ABSENCE HIDES",
      [("elements","11"),("absent","4")]),
    clockat=(278,34,22,10,0))
S["pd04-f15"]=lambda: f_chart([("the retrospective",11),("the definition of done",8),
    ("a single owner",7),("the review",5),("nothing is missing",2)])
S["pd04-f16"]=lambda: f_realia(doc("On a desk in April",
    "What was on it at five o'clock",
    "<p><b>A document of thirteen pages</b>, open at the paragraph on indivisibility.</p>"
    "<p><b>An eleven-row audit</b> with four absences.</p>"
    "<p><b>A badge</b> carrying four names.</p>"
    "<p><b>A blank definition-of-done sheet.</b></p>"
    "<p><b>A note of three sentences.</b> <i>Every method in this book expects to be tailored "
    "except this one, which is thirteen pages long and says in plain words that its parts are "
    "indivisible. Four of the eleven elements are missing here and all four are the ones that let "
    "somebody outside the team see what is true, which is unlikely to be a coincidence. The honest "
    "choice is to add them or to stop using the name, and I do not much mind which, as long as we "
    "stop claiming a thing we hold seven elevenths of.</i></p>",
    "Five o'clock. Seven of eleven, and a badge with four names on it."), 620)

# ---------------- Unit 5 ----------------
S["pd05-f1"]=lambda: f_icons([("dashboard","three areas"),("clipboard","29 elements"),
    ("star","a key indicator"),("speechbubble","what they did"),
    ("handshake","a colleague confirms it"),("qualification","four levels"),
    ("form","a self-assessment"),("review","three uneven arms"),
    ("folder","a strategy document"),("student","a manager who says little")], cols=5)
S["pd05-f2"]=lambda: f_scene(760,380,
    people=[("okonjo",200,172,{}),("samira",290,170,{})],
    props=[("desk",400,0,1.0),("form",470,150,0.26),("clipboard",570,152,0.26),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"THREE AREAS",
      [("practice","3.9"),("people","3.2"),("perspective","2.1")]),
    clockat=(360,34,22,11,20))
S["pd05-f3"]=lambda: f_icons([("folder","perspective · a strategy"),
    ("meeting","people · two colleagues"),("timetable","practice · a schedule"),
    ("form","a form filled in quickly"),("interview","a colleague interviewed"),
    ("review","one short arm")], cols=3)
S["pd05-f4"]=lambda: f_realia(tbl("Team research","Four rows, and one uncomfortable box",
    ["The element","What I did","Who could confirm it","When"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the element with no evidence.</b>"), 640)
S["pd05-f5"]=lambda: f_realia(doc("Lindhurst · project office note 5",
    "Twenty-nine elements, and the area nobody could speak to",
    "<p><b>The document.</b> An individual competence baseline, <b>version 4, 2015</b>, published "
    "by a project management association.</p>"
    + table_html(["Area","Elements","Our average self-score"],
      [["<b>Perspective</b> — strategy, governance, compliance, power, culture","<b>5</b>",
        "<b>2.1</b>"],
       ["<b>People</b> — self-reflection, integrity, communication, relationships, leadership, "
        "teamwork, conflict, resourcefulness, negotiation, results","<b>10</b>","<b>3.2</b>"],
       ["<b>Practice</b> — design, requirements, scope, time, organization, quality, finance, "
        "resources, procurement, plan and control, risk, stakeholders, change, select and balance",
        "<b>14</b>","<b>3.9</b>"]])
    + "<p><b>Eleven people were assessed. Nine could not state the organization's strategy in two "
    "sentences</b> — including the person running the exercise.</p>"
    "<p style='border:1.5px solid #b07a1e;padding:8px'><b>M. Bah wrote “fine” in nine "
    "boxes and scored himself tenth of eleven.</b> On colleague evidence — three interviews, "
    "one of them with a client — <b>he moved to second</b>. The self-assessment measured "
    "willingness to claim.</p>",
    "Source: an individual competence baseline, version 4, 2015. It describes competence elements "
    "and key competence indicators for individuals, is not a methodology and does not describe how "
    "to manage a project, and provides no scoring scheme: assessment schemes are the business of "
    "the certifying bodies that use it."), 640)
S["pd05-f6"]=lambda: f_realia(tbl("Word study","Claiming competence",
    ["Structure","What it claims","Example"],
    [["<i>can</i>","a bare capability","She <b>can</b> run a tender."],
     ["<i>be able to</i>","the same, with a context",
      "He <b>is able to</b> chair a meeting of forty."],
     ["<i>know how to</i>","knowledge, not evidence","I <b>know how to</b> build a schedule."],
     ["<i>has shown that</i>","evidence, with a date behind it",
      "She <b>has shown that</b> she can hold a difficult meeting — March, with the client."],
     ["<i>demonstrate</i>","",""],["<i>be assessed as</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pd05-f7"]=lambda: f_chart([("practice (14 elements)",39),("people (10 elements)",32),
    ("perspective (5 elements)",21)], unit="tenths")
S["pd05-f8"]=lambda: f_icons([("clipboard","a list of elements"),("star","a key indicator"),
    ("speechbubble","describing the work"),("handshake","a colleague confirms"),
    ("review","one short arm"),("folder","a strategy document")], cols=3, numbered=False)
S["pd05-f9"]=lambda: f_realia(tbl("Competence record · M. Bah",
    "Eight rows, two of them claims",
    ["Element","The claim","Evidence","Month","Witness"],
    [["negotiation","closed a supply dispute","settled at 8 per cent, no claim","March",
      "the client"],
     ["conflict","chaired a meeting of two hostile teams","both signed the minute","March",
      "W. Zhao"],
     ["teamwork","rebuilt a team of nine after a resignation","no leavers since","Jan–Jun",
      "A. Holm"],
     ["stakeholders","weekly call with the plant","24 logged calls","Jan–Jun","the plant"],
     ["risk","moved two risks to owners who acted","2 closed","May","E. Okonjo"],
     ["time","recovered four weeks of float","4 weeks","April","the schedule"],
     ["strategy (perspective)","<i>knows how to align work to it</i>","<b>—</b>","—",
      "<b>—</b>"],
     ["governance (perspective)","<i>understands the structure</i>","<b>—</b>","—",
      "<b>—</b>"]],
    note="<b>Two rows are claims and the rest are records.</b>"), 700)
S["pd05-f10"]=lambda: f_scene(860,400,
    people=[("anders",110,174,{}),("samira",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("form",250,148,0.26),("form",330,148,0.26),
     ("note",520,150,0.24),("shelf",760,92,0.5)],
    board=(40,18,230,120,"NINE OF ELEVEN",
      [("could state it","2"),("could not","9")]),
    clockat=(700,34,22,12,0))
S["pd05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Record A","A self-assessment",
      "<p><i>Negotiation: 4. Conflict: 4. Teamwork: fine. Strategy: 2.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Measures willingness to claim.</p>"), 380),
    lambda w,h: f_realia(doc("Record B","An evidence record",
      "<p>Eight rows. Each one: what was done, the month, the outcome in numbers, and a witness "
      "who is not the person being assessed.</p>"), 380),
    w=820, h=300, lt="A SCORE", rt="A RECORD")
S["pd05-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","Scores and adjectives",
      "<p><i>Communication: strong. Leadership: good. Negotiation: fine.</i></p>"), 380),
    lambda w,h: f_realia(doc("After","Eight rows",
      "<p><i>Settled a supply dispute at 8 per cent with no claim, March, confirmed by the "
      "client.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Same person. Second of eleven, not tenth.</p>"),
      380),
    w=820, h=300, lt="ADJECTIVES", rt="EVIDENCE")
S["pd05-f13"]=lambda: f_realia(form("Competence planner",
    [("The element",""),("What was done",""),("The month",""),("The outcome in numbers",""),
     ("The witness",""),("The assessed position","")],
    note="Six boxes. Hand it to a partner; they ask who would confirm it."), 560)
S["pd05-f14"]=lambda: f_scene(1000,450,
    people=[("anders",60,176,{}),("samira",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("bah",290,172,{"seated":True}),("okonjo",370,176,{"seated":True}),
     ("wei",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("form",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"WHAT HAVE YOU SEEN",
      [("self-scores","11"),("witnesses","3")]),
    clockat=(278,34,22,12,0))
S["pd05-f15"]=lambda: f_chart([("yes, in two sentences",3),("roughly",7),
    ("I know where it is written",9),("no",10),("we have none",4)])
S["pd05-f16"]=lambda: f_realia(doc("On a desk in May",
    "What was on it at five o'clock",
    "<p><b>Eleven self-assessment forms</b>, one with the word <i>fine</i> written nine times.</p>"
    "<p><b>Interview notes from three colleagues</b>, one of them a client.</p>"
    "<p><b>A chart with one short arm</b>: perspective, 2.1.</p>"
    "<p><b>A list of twenty-nine elements.</b></p>"
    "<p><b>A note of three sentences.</b> <i>A self-assessment measures how willing somebody is to "
    "claim, and the man who wrote “fine” nine times turned out to be the second most "
    "competent person in the room once three colleagues were asked. Nine of eleven of us could not "
    "state the strategy in two sentences and I was one of the nine, which is why the perspective "
    "arm is short and why it is the only honest number on the chart. From now on a claim needs a "
    "month, an outcome and somebody who is not me.</i></p>",
    "Five o'clock. Twenty-nine elements, three witnesses, one short arm."), 620)

# ---------------- Unit 6 ----------------
S["pd06-f1"]=lambda: f_icons([("tally","a famous percentage"),("chain","three citations"),
    ("envelope","method not published"),("form","a questionnaire"),
    ("magnifier","a sample of unknown size"),("proof","three strict conditions"),
    ("book","a peer-reviewed journal"),("signature","two authors"),
    ("archive","a bid library"),("folder","44 finished projects")], cols=5)
S["pd06-f2"]=lambda: f_scene(760,380,
    people=[("nkemelu",200,172,{}),("oksana",290,170,{})],
    props=[("desk",400,0,1.0),("computer",470,146,0.34),("book",580,150,0.26),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"THE CHAIN",
      [("steps back","3"),("primary source","?")]),
    clockat=(360,34,22,3,20))
S["pd06-f3"]=lambda: f_icons([("form","a tender paragraph"),("note","a white paper"),
    ("book","a textbook"),("envelope","the 1994 report, sealed"),
    ("magnifier","a journal article"),("folder","our own 44 projects")], cols=3)
S["pd06-f4"]=lambda: f_realia(tbl("Team research","Four figures, four trails",
    ["The figure","What the document cites","How many steps back","Where the trail stops"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the figure nobody can trace at all.</b>"), 640)
S["pd06-f5"]=lambda: f_realia(doc("Lindhurst · project office note 6",
    "A number in fourteen of our own tenders",
    "<p><b>The source.</b> An industry report on project outcomes, <b>first published in 1994</b>. "
    "Its <b>sampling method, questionnaire and definitions have never been published.</b></p>"
    + table_html(["What our bids said","What can be checked"],
      [["“Most projects fail”","<b>unverifiable</b> — no published method"],
       ["“Only a third succeed”","<b>unverifiable</b> — success undefined"],
       ["cited to a white paper","which cites a textbook"],
       ["which cites the 1994 report","<b>whose method is not published</b>"]])
    + "<p><b>The peer-reviewed literature.</b> Two papers question the figures and what the "
    "definitions do to them: one in <b>Information and Software Technology, 2006</b>, one in "
    "<b>IEEE Software, 2010</b>. <b>Neither says the projects went well.</b> Both say the number "
    "cannot be checked.</p>"
    "<p><b>Our own 44 completed projects.</b> <b>9</b> met their original time, cost and scope. "
    "<b>41</b> were delivered and accepted by the client. <b>3</b> were canceled. <b>Both halves "
    "or neither.</b></p>",
    "Source: an industry report on project outcomes first published in 1994, whose sampling "
    "method, questionnaire and success definitions have not been published; and two peer-reviewed "
    "critiques, Information and Software Technology (2006) and IEEE Software (2010), which "
    "question the figures and the effect of the definitions used. Neither critique asserts that "
    "the projects concerned succeeded."), 640)
S["pd06-f6"]=lambda: f_realia(tbl("Word study","Hedging a claim",
    ["Structure","How strong","Example"],
    [["<i>it is claimed that</i>","reports a claim, endorses nothing",
      "<b>It is claimed that</b> most projects fail."],
     ["<i>according to</i>","names the claimant",
      "<b>According to</b> a 1994 report, a third succeed."],
     ["<i>reportedly</i>","weakest; use with care","The sample was <b>reportedly</b> large."],
     ["<i>cannot be verified</i>","states what you checked",
      "The method <b>cannot be verified</b>; it is unpublished."],
     ["<i>has been questioned</i>","",""],["<i>is widely quoted</i>","",""]],
    note="Two rows left empty on purpose. <b>Cannot be verified is not the same as not true.</b>"),
    640)
S["pd06-f7"]=lambda: f_part("Our own 44 completed projects",
    [("met original time, cost and scope",9,"#4a6b3b"),
     ("delivered and accepted after replanning",32,"#b07a1e"),
     ("canceled",3,"#7a3b2f")])
S["pd06-f8"]=lambda: f_icons([("tally","a percentage on a slide"),("chain","a citation chain"),
    ("envelope","a sealed method"),("proof","a strict definition"),
    ("book","a journal page"),("folder","our own 44")], cols=3, numbered=False)
S["pd06-f9"]=lambda: f_realia(tbl("Bid library note","Four claims, four trails",
    ["The claim","What our text cites","Steps to primary","Method published"],
    [["“Most projects fail”","a consultancy white paper","<b>3</b>","<b>no</b>"],
     ["“Only a third succeed”","a textbook, 2nd ed","<b>2</b>","<b>no</b>"],
     ["“Overruns average 45 per cent”","a conference slide","<b>3</b>","<b>no</b>"],
     ["“Two thirds are challenged”","our own earlier bid","<b>4</b>","<b>no</b>"]],
    note="<b>Fourteen responses, three steps, nobody had read it.</b>"), 680)
S["pd06-f10"]=lambda: f_scene(860,400,
    people=[("oksana",110,174,{}),("nkemelu",320,176,{"seated":True}),
     ("anders",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("form",250,148,0.26),("book",350,148,0.26),
     ("folder",520,150,0.26),("shelf",760,92,0.5)],
    board=(40,18,230,120,"BOTH HALVES OR NEITHER",
      [("strict definition","9"),("accepted by client","41")]),
    clockat=(700,34,22,4,0))
S["pd06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Paragraph A","A famous percentage",
      "<p><i>Most projects of this kind fail.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>No date, no source, no definition. In fourteen of "
      "our tenders.</p>"), 380),
    lambda w,h: f_realia(doc("Paragraph B","Two of our own figures",
      "<p><i>Of our last 44 completed projects, 9 met their original time, cost and scope and 41 "
      "were delivered and accepted by the client.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Both halves, with the definition beside each.</p>"),
      380),
    w=820, h=300, lt="UNVERIFIABLE", rt="OURS")
S["pd06-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","The opening line",
      "<p><i>Industry research shows that most projects fail.</i></p>"), 380),
    lambda w,h: f_realia(doc("After","The replacement",
      "<p>Two figures of our own with their definitions, the citation chain written out, and one "
      "sentence: <i>the widely quoted figure cannot be verified, because its method has not been "
      "published.</i></p>"), 380),
    w=820, h=300, lt="A CLAIM", rt="A CHECKABLE CLAIM")
S["pd06-f13"]=lambda: f_realia(form("Statistic planner",
    [("The claim",""),("The chain of citations",""),("Is the method published?",""),
     ("What the peer-reviewed literature says",""),("Your own figures",""),
     ("The definitions beside them","")],
    note="Six boxes. Hand it to a partner; they ask how many steps back you got."), 560)
S["pd06-f14"]=lambda: f_scene(1000,450,
    people=[("oksana",60,176,{}),("nkemelu",135,172,{}),("anders",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("wei",370,176,{"seated":True}),
     ("hana",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("archive",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"BOTH HALVES OR NEITHER",
      [("strict","9"),("accepted","41")]),
    clockat=(278,34,22,4,0))
S["pd06-f15"]=lambda: f_chart([("yes, to the primary source",2),("yes, part way",6),
    ("no",13),("I quote no statistics",8),("I did not know you could",4)])
S["pd06-f16"]=lambda: f_realia(doc("On a desk in June",
    "What was on it at five o'clock",
    "<p><b>Fourteen tender responses</b>, one paragraph highlighted in each.</p>"
    "<p><b>A citation chain</b> of three steps, ending in a question mark.</p>"
    "<p><b>Two journal articles</b>, 2006 and 2010.</p>"
    "<p><b>A sheet reading 9 and 41, out of 44.</b></p>"
    "<p><b>A note of three sentences.</b> <i>We quoted a number at clients fourteen times and "
    "nobody in this office had ever read the document it came from, which took me three steps and "
    "one afternoon to establish. The number may be right and it cannot be checked, and those are "
    "different statements, so the honest sentence is that the method has not been published rather "
    "than that the figure is false. Our own two figures are nine and forty-one out of forty-four, "
    "and I will print both halves or neither, because printing only the forty-one would make me "
    "the person I have just spent an afternoon tracing.</i></p>",
    "Five o'clock. Three steps, two critiques, two figures of our own."), 620)
