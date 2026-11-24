# -*- coding: utf-8 -*-
"""Throughline Book 4 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["pd00-f1"]=lambda: f_realia(tbl("Six things you brought from Book 3",
    "One example each, from a review meeting",
    ["What you have","An example"],
    [["<i>For every</i>","<b>For every</b> 100 we spend <b>we get</b> 78 of work."],
     ["<i>As of</i>","Seven weeks behind, <b>as of</b> 30 June."],
     ["<i>Whereas</i>","The money index recovers, <b>whereas</b> the time index does not."],
     ["The passive with modals","It <b>should be reviewed</b> before the gate."],
     ["<i>Only if</i>","It is traceable <b>only if</b> somebody collected it."],
     ["Indirect effects","A measure <b>leads people to</b> work on the measure."]],
    note="Six boxes. This book asks a different question: whose method is this, which edition, and "
    "what does it say it does not cover?"), 580)
S["pd00-f2"]=lambda: f_realia(doc("Taped inside a notebook",
    "Four questions to ask any method",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;Who publishes it?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>A standards body, a certification company, a "
    "consultancy, or seventeen people in a room.</span><br>"
    "<b>2 &nbsp;Which edition is in front of you?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Editions change shape. Procedures do not follow "
    "them.</span><br>"
    "<b>3 &nbsp;What does it claim to be?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>A standard, a guide, a manifesto, a practitioner "
    "account, or a report with an unpublished method.</span><br>"
    "<b>4 &nbsp;What does it say it does not cover?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Printed in the document. Almost never read."
    "</span></p>",
    "Four questions, and the fourth is the one that does the work."), 620)
S["pd00-f3"]=lambda: f_panels(
    lambda w,h: f_realia(doc("On the left","Thirteen pages",
      "<p><b>The document itself.</b> Thirteen pages, free to download, with its own date on the "
      "cover and a paragraph saying what it does not cover.</p>"), 380),
    lambda w,h: f_realia(doc("On the right","Everything built on it",
      "<p><b>A folder of course notes.</b> <b>A certificate.</b> <b>An examination paper.</b> "
      "<b>An invoice.</b></p><p>None of these is the document, and all of them will be quoted as "
      "though they were.</p>"), 380),
    w=820, h=320, lt="THE DOCUMENT", rt="NOT THE DOCUMENT")
S["pd00-f4"]=lambda: f_realia(doc("Two ways of answering one question",
    "“Which method do you use?”",
    "<p style='font-size:15px'><b>“We follow the standard.”</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Cannot be checked. Cannot be wrong. Worth "
    "nothing.</p>"
    "<p style='font-size:15px'><b>“The 2021 edition. We have adopted four things, tailored "
    "two, and rejected one because no action follows from it in our procedures.”</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Checkable against our own files in an afternoon. "
    "That is the whole difference, and it is what this book teaches.</p>"), 600)

# ---------------- Unit 1 ----------------
S["pd01-f1"]=lambda: f_icons([("book","a guide, 7th edition"),("spreadsheet","49 process boxes"),
    ("clipboard","12 principles"),("dashboard","8 performance domains"),("folder","112 pages of procedure"),
    ("form","a page marked orphaned"),("card","a membership card"),("certificate","a certificate"),
    ("speechbubble","an abstract noun"),("student","the same idea, with a person in it")], cols=5)
S["pd01-f2"]=lambda: f_scene(760,380,
    people=[("nkemelu",210,172,{}),("anders",300,170,{})],
    props=[("shelf",60,90,0.55),("book",120,150,0.3),("desk",400,0,1.0),
     ("folder",470,150,0.3),("form",560,150,0.26)],
    board=(430,20,260,110,"TWO EDITIONS",[("6th: processes","49"),("7th: principles","12")]),
    clockat=(380,34,22,9,20))
S["pd01-f3"]=lambda: f_icons([("odometer","stewardship"),("meeting","engagement"),("tally","value"),
    ("form","tailoring"),("timetable","adaptability"),("chain","complexity")], cols=3)
S["pd01-f4"]=lambda: f_realia(tbl("Team research","Six nouns, four rows, one uncomfortable box",
    ["The abstract noun","The sentence with a person in it","What changes on Monday","Who"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the noun nobody at the table could translate.</b>"), 640)
S["pd01-f5"]=lambda: f_realia(doc("Lindhurst · project office note 1",
    "A guide that changed shape between editions",
    "<p><b>The document.</b> A body-of-knowledge guide, <b>7th edition, 2021</b>, published by a "
    "professional association.</p>"
    + table_html(["6th edition, 2017","7th edition, 2021"],
      [["<b>49 processes</b>","<b>12 principles</b>"],
       ["5 process groups","<b>8 performance domains</b>"],
       ["10 knowledge areas","a section on tailoring"],
       ["inputs, tools, outputs","outcomes"]])
    + "<p><b>Our procedure is 112 pages and quotes process numbers from the sixth edition.</b> "
    "<b>71 of those pages now refer to a structure the guide no longer uses.</b> Nothing in them "
    "became wrong; 71 things lost their parent.</p>"
    "<p><b>The Monday test.</b> Of the twelve principles, <b>three</b> change what somebody does on "
    "Monday. We have said which three and why.</p>",
    "Source: a body-of-knowledge guide, 7th edition, 2021. It presents principles and performance "
    "domains rather than a process set, expects tailoring, and states that it is not a methodology "
    "and does not prescribe how to perform any activity."), 620)
S["pd01-f6"]=lambda: f_realia(tbl("Word study","Abstract noun → a sentence with a person in it",
    ["The noun","The sentence","What changes"],
    [["stewardship","Somebody checks the meter and signs for the reading.","a name on a log"],
     ["engagement","The plant manager is called every Thursday.","a weekly call"],
     ["tailoring","We write down what we left out, and why.","one page"],
     ["governance","Three named people decide spending over a threshold.","a decision rule"],
     ["adaptability","",""],["complexity","",""]],
    note="Two rows left empty on purpose."), 620)
S["pd01-f7"]=lambda: f_part("112 pages of company procedure",
    [("still mapped to the current structure",29,"#4a6b3b"),
     ("describing processes no longer in the guide",71,"#b07a1e"),
     ("always local to us",12,"#5c3b7a")])
S["pd01-f8"]=lambda: f_icons([("book","an edition number"),("spreadsheet","49 processes"),
    ("clipboard","12 principles"),("speechbubble","an abstract noun"),("student","a person in it"),
    ("form","a one-page record")], cols=3, numbered=False)
S["pd01-f9"]=lambda: f_realia(tbl("Method record · control system programme",
    "Eight rows, two of them saying not used",
    ["Element","Decision","Reason","Edition","Owner"],
    [["Stewardship","<b>adopted</b>","meter log signed by name","7th, 2021","C. Nkemelu"],
     ["Tailoring","<b>adopted</b>","this page is the evidence","7th, 2021","C. Nkemelu"],
     ["Value","<b>adopted</b>","one benefit owner named","7th, 2021","E. Okonjo"],
     ["Stakeholders","tailored","weekly call, not a plan","7th, 2021","W. Zhao"],
     ["Systems thinking","tailored","two systems, not nine","7th, 2021","A. Holm"],
     ["Leadership","tailored","no change to line management","7th, 2021","E. Okonjo"],
     ["Complexity","<b>not used</b>","no action follows from it here","7th, 2021","A. Holm"],
     ["Quality","<b>not used</b>","covered by our own 9001 system","7th, 2021","H. Sato"]],
    note="<b>The 112 pages stay. They stop pretending to be the method.</b>"), 680)
S["pd01-f10"]=lambda: f_scene(860,400,
    people=[("anders",120,174,{}),("nkemelu",330,176,{"seated":True}),
     ("hana",470,176,{"seated":True})],
    props=[("table",200,0,1.1),("book",250,146,0.28),("folder",380,150,0.3),
     ("form",520,152,0.26),("shelf",760,92,0.5)],
    board=(40,20,230,112,"ON THE TABLE",[("procedure pp.","112"),("new record pp.","1")]),
    clockat=(700,34,22,10,0))
S["pd01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Document A","112 pages",
      "<p>Headings numbered with process numbers from a superseded edition. Correct sentences, "
      "orphaned structure.</p>"), 380),
    lambda w,h: f_realia(doc("Document B","One page, eight rows",
      "<p>Each row: the element, adopted or tailored or not used, the reason, the edition, the "
      "owner.</p>"), 380),
    w=820, h=300, lt="WHAT WE HAD", rt="WHAT WE ADDED")
S["pd01-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","A procedure page",
      "<p><i>Stakeholder engagement shall be undertaken in accordance with 13.1.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Three abstract nouns and a dead cross-reference."
      "</p>"), 380),
    lambda w,h: f_realia(doc("After","A method record row",
      "<p><i>The plant manager is telephoned every Thursday by W. Zhao; the call is logged.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>A person, an action, a frequency, a record.</p>"),
      380),
    w=820, h=300, lt="ABSTRACT", rt="ACTIONABLE")
S["pd01-f13"]=lambda: f_realia(form("Method record planner",
    [("The document and its edition",""),("What is adopted",""),("What is tailored",""),
     ("What is not used as written",""),("The reason for each",""),("The owner",""),], 
    note="Six boxes. Hand it to a partner; they ask which edition."), 560)
S["pd01-f14"]=lambda: f_scene(1000,450,
    people=[("nkemelu",60,176,{}),("anders",135,172,{}),("wei",210,176,{"seated":True}),
     ("hana",290,172,{"seated":True}),("okonjo",370,176,{"seated":True}),
     ("sofia",445,172,{}),("oskar",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("hanna",910,172,{}),("ahmad",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("folder",548,198,0.22),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"ON MONDAY?",[("principles","12"),("that change work","3")]),
    clockat=(278,34,22,10,0))
S["pd01-f15"]=lambda: f_chart([("the current edition",5),("the previous one",9),
    ("two or more editions old",7),("it names no edition",8),
    ("we have no written procedure",3)])
S["pd01-f16"]=lambda: f_realia(doc("On a desk in January",
    "What was on it at five o'clock",
    "<p><b>Two editions of the same guide</b>, one visibly thicker.</p>"
    "<p><b>A procedure of 112 pages</b>, with 71 flagged.</p>"
    "<p><b>A list of twelve principles</b>, three of them ticked.</p>"
    "<p><b>One new page of eight rows.</b></p>"
    "<p><b>A note of three sentences.</b> <i>Nothing in the 112 pages became untrue when the "
    "edition changed; 71 pages simply lost their parent, and nobody noticed for four years because "
    "nobody reads a procedure forwards. Three principles of twelve change what somebody does on "
    "Monday, and I would rather defend three than recite twelve. The one page is the method; the "
    "112 pages are how we happen to work, which is a different and smaller claim.</i></p>",
    "Five o'clock. Two editions, 71 orphaned pages, and one page that can be checked."), 600)

# ---------------- Unit 2 ----------------
S["pd02-f1"]=lambda: f_icons([("book","a manual, 7th edition"),("clipboard","7 principles"),
    ("timetable","7 practices"),("signpost","7 processes"),("barrier","a stage boundary"),
    ("scales","a tolerance band"),("firealarm","an exception report"),("folder","a business case"),
    ("certificate","14 certificates"),("form","a page marked tailored")], cols=5)
S["pd02-f2"]=lambda: f_scene(760,380,
    people=[("anders",200,172,{}),("nkemelu",290,170,{})],
    props=[("desk",400,0,1.0),("folder",470,150,0.3),("form",570,152,0.26),
     ("shelf",60,92,0.5)],
    board=(410,18,290,120,"SEVEN, SEVEN, SEVEN",
      [("principles applied","5"),("practices","7"),("processes","7")]),
    clockat=(360,34,22,10,40))
S["pd02-f3"]=lambda: f_icons([("clipboard","seven principles"),("timetable","seven practices"),
    ("signpost","seven processes"),("scales","a tolerance band"),("firealarm","an exception report"),
    ("folder","a business case at a boundary")], cols=3)
S["pd02-f4"]=lambda: f_realia(tbl("Team research","Four rows, and one box at the foot",
    ["The dimension","The tolerance","Who set it","What happens when it is exceeded"],
    [["time","","",""],["cost","","",""],["scope","","",""],["quality","","",""]],
    note="At the foot: <b>the project with no tolerance at all.</b>"), 640)
S["pd02-f5"]=lambda: f_realia(doc("Lindhurst · project office note 2",
    "A method of sevens, and the two we do not apply",
    "<p><b>The document.</b> A structured project management method, <b>7th edition, 2023</b>, "
    "published by the company that owns and certifies it.</p>"
    + table_html(["Seven principles","Seven practices","Seven processes"],
      [["ensure continued business justification","business case","starting up a project"],
       ["learn from experience","organizing","directing a project"],
       ["defined roles and responsibilities","plans","initiating a project"],
       ["manage by stages","quality","controlling a stage"],
       ["<b>manage by exception</b>","<b>risk</b>","managing product delivery"],
       ["focus on products","issues","managing a stage boundary"],
       ["tailor to suit the project","progress","closing a project"]])
    + "<p><b>Applied here: five of seven principles.</b> <b>Manage by exception</b> cannot be "
    "applied, because <b>there is no written tolerance anywhere in the programme</b>: not for time, "
    "cost, scope or quality. <b>Learn from experience</b> is claimed and has no record behind it."
    "</p>"
    "<p><b>The business case was written in 2019 and updated once.</b> The method requires it to be "
    "maintained through every stage. Nobody had read that clause.</p>",
    "Source: a structured project management method, 7th edition, 2023, published by the "
    "organization that certifies it. The method requires all of its principles to be applied for a "
    "project to be run using its name, expects tailoring to be recorded, and does not prescribe "
    "tolerance values, which are set by those governing the project."), 640)
S["pd02-f6"]=lambda: f_realia(tbl("Word study","Rules and their exceptions",
    ["Structure","What it does","Example"],
    [["<i>must … unless</i>","states the rule and its one exception",
      "It <b>must</b> be escalated <b>unless</b> it is within tolerance."],
     ["<i>only if</i>","narrows the permission",
      "He may approve it <b>only if</b> the variance is under 5 per cent."],
     ["<i>provided that</i>","names the condition",
      "It may proceed <b>provided that</b> the case is current."],
     ["<i>where … applies</i>","limits the scope",
      "<b>Where</b> the threshold <b>applies</b>, three signatures are needed."],
     ["<i>in which case</i>","",""],["<i>failing that</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pd02-f7"]=lambda: f_part("Seven principles",
    [("applied",5,"#4a6b3b"),("not applied",2,"#b07a1e")])
S["pd02-f8"]=lambda: f_icons([("clipboard","a ring of seven"),("scales","a tolerance band"),
    ("firealarm","an exception report"),("folder","a business case"),
    ("certificate","a certificate"),("form","a tender page")], cols=3, numbered=False)
S["pd02-f9"]=lambda: f_realia(tbl("Method claim sheet","Seven rows, two of them saying no",
    ["Principle","Applied","Evidence","Gap","Owner"],
    [["continued business justification","<b>no</b>","case of 2019, updated once",
      "no stage review of the case","E. Okonjo"],
     ["learn from experience","<b>no</b>","none","no lessons record","A. Holm"],
     ["defined roles","yes","org chart, signed","—","E. Okonjo"],
     ["manage by stages","yes","four boundaries held","—","C. Nkemelu"],
     ["manage by exception","<b>no</b>","<b>no written tolerance</b>",
      "set four tolerances","E. Okonjo"],
     ["focus on products","yes","23 product descriptions","—","W. Zhao"],
     ["tailor to suit","yes","this sheet","—","C. Nkemelu"]],
    note="<b>The name needs all seven.</b>"), 680)
S["pd02-f10"]=lambda: f_scene(860,400,
    people=[("anders",110,174,{}),("okonjo",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("form",250,148,0.26),("folder",380,150,0.3),
     ("spreadsheet",520,150,0.24),("shelf",760,92,0.5)],
    board=(40,20,230,112,"TOLERANCES",[("dimensions","4"),("written down","0")]),
    clockat=(700,34,22,11,0))
S["pd02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Tender answer A","One sentence",
      "<p><i>Delivery will be managed using the named method.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>True of nobody and checkable by nobody.</p>"), 380),
    lambda w,h: f_realia(doc("Tender answer B","Seven rows",
      "<p>Five principles applied with evidence. Two gaps, each with an owner and a date.</p>"
      "<p style='font-size:12px;color:#6b6861'>Lost us one bid. Won us the next.</p>"), 380),
    w=820, h=300, lt="WHAT WE WROTE", rt="WHAT WE WRITE NOW")
S["pd02-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","The tender paragraph",
      "<p><i>The project will be delivered in accordance with the method throughout.</i></p>"),
      380),
    lambda w,h: f_realia(doc("After","The claim sheet",
      "<p>Seven rows, evidence in five, two gaps, two owners, two dates.</p>"
      "<p><b>Four tolerances to be set by 14 April.</b></p>"), 380),
    w=820, h=300, lt="A CLAIM", rt="A CLAIM WITH A DATE")
S["pd02-f13"]=lambda: f_realia(form("Claim sheet planner",
    [("The method and its edition",""),("Principles applied, with evidence",""),("The gaps",""),
     ("The owner of each gap",""),("The date each is closed",""),
     ("What the tender may say meanwhile","")],
    note="Six boxes. Hand it to a partner; they ask what the tender may claim today."), 560)
S["pd02-f14"]=lambda: f_scene(1000,450,
    people=[("anders",60,176,{}),("nkemelu",135,172,{}),("okonjo",210,176,{"seated":True}),
     ("wei",290,172,{"seated":True}),("hana",370,176,{"seated":True}),
     ("sofia",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("certificate",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"THE CERTIFICATE",[("people certified","14"),("tolerances written","0")]),
    clockat=(278,34,22,11,0))
S["pd02-f15"]=lambda: f_chart([("yes, in days and per cent",4),("yes, vaguely",6),
    ("no",12),("I do not know what one is",7),("we report everything",3)])
S["pd02-f16"]=lambda: f_realia(doc("On a desk in February",
    "What was on it at five o'clock",
    "<p><b>Three rings of seven</b>, with two of the first crossed through.</p>"
    "<p><b>A tender page</b> claiming the method by name.</p>"
    "<p><b>A tolerance sheet</b> with four empty cells.</p>"
    "<p><b>A business case dated 2019</b>, updated once.</p>"
    "<p><b>Fourteen certificates</b> in a folder.</p>"
    "<p><b>A note of three sentences.</b> <i>We have fourteen people certified in a method we "
    "apply five-sevenths of, and the two we skip are the two that would have told us something we "
    "did not want to hear. Without a written tolerance nothing can be an exception, so every "
    "variance arrives as a judgment call and the sponsor hears about it last. Four numbers would "
    "fix it and they take an afternoon, which is why it is embarrassing that they are still "
    "blank.</i></p>",
    "Five o'clock. Fourteen certificates, four empty cells."), 620)

# ---------------- Unit 3 ----------------
S["pd03-f1"]=lambda: f_icons([("form","four value statements"),("balance","tipping slightly"),
    ("meeting","people talking"),("computer","working software"),("folder","a specification"),
    ("statement","a contract"),("timetable","a plan being changed"),("signature","17 signatures"),
    ("note","a training brochure"),("wall","a concrete pour")], cols=5)
S["pd03-f2"]=lambda: f_scene(760,380,
    people=[("nkemelu",210,172,{}),("wei",300,170,{})],
    props=[("desk",400,0,1.0),("form",470,150,0.26),("folder",570,150,0.28),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"FOUR STATEMENTS",
      [("the word between","over"),("the fifth sentence","circled")]),
    clockat=(360,34,22,2,20))
S["pd03-f3"]=lambda: f_icons([("balance","“over” — tipping slightly"),
    ("noentry","“instead of” — one side gone"),("folder","a manual never written"),
    ("pipe","an engineer who cannot start a pump"),("computer","a screen changed weekly"),
    ("wall","a pour that cannot change")], cols=3)
S["pd03-f4"]=lambda: f_realia(tbl("Team research","Four people, four answers",
    ["Who I asked","What they said agile means","Which statement that is",
     "What is not in the document"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the answer furthest from the text.</b>"), 640)
S["pd03-f5"]=lambda: f_realia(doc("Lindhurst · project office note 3",
    "Sixty-eight words, and the sentence everybody drops",
    "<p><b>The document.</b> A manifesto for software development, <b>February 2001</b>, "
    "<b>17 signatories</b>, <b>68 words</b> in its four statements.</p>"
    + table_html(["Valued more","Over"],
      [["individuals and interactions","processes and tools"],
       ["working software","comprehensive documentation"],
       ["customer collaboration","contract negotiation"],
       ["responding to change","following a plan"]])
    + "<p style='border:1.5px solid #b07a1e;padding:8px'><b>“That is, while there is value in "
    "the items on the right, we value the items on the left more.”</b> This sentence is in the "
    "document. It is almost never quoted.</p>"
    "<p><b>What happened here.</b> Four handover manuals were dropped in 2021 on the grounds that "
    "the manifesto deprecates documentation. It does not. <b>40,000 pages to rewrite</b>, and a "
    "maintenance engineer who could not start a pump.</p>"
    "<p><b>How much of this project can iterate: 30 per cent.</b> The rest is concrete, cable and "
    "commissioning.</p>",
    "Source: a manifesto for software development, February 2001, signed by seventeen people. It "
    "consists of four value statements and a sentence stating that the items on the right have "
    "value; it is addressed to software development, and it prescribes no practice, role, document "
    "or method."), 640)
S["pd03-f6"]=lambda: f_realia(tbl("Word study","Saying which you value more",
    ["Structure","What it says","Example"],
    [["<i>over</i>","valued more, not instead of",
      "Working software <b>over</b> comprehensive documentation."],
     ["<i>rather than</i>","a choice between two",
      "Talk to the engineer <b>rather than</b> email the form."],
     ["<i>more than</i>","a comparison of degree",
      "We value the left-hand items <b>more than</b> the right."],
     ["<i>prefer to</i>","a stated preference",
      "We <b>prefer to</b> show a working panel."],
     ["<i>in preference to</i>","",""],["<i>not instead of</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pd03-f7"]=lambda: f_part("One project by value",
    [("can respond to change weekly",30,"#4a6b3b"),
     ("can change up to a point",22,"#b07a1e"),
     ("cannot change once begun",48,"#7a3b2f")])
S["pd03-f8"]=lambda: f_icons([("form","four statements"),("balance","tipping slightly"),
    ("folder","a handover manual"),("computer","a screen changed"),
    ("wall","a concrete pour"),("signature","17 signatures")], cols=3, numbered=False)
S["pd03-f9"]=lambda: f_realia(tbl("Tender response · question 14",
    "Four statements, and what we will not claim",
    ["Statement","How far it transfers","What we will do","What we will not claim"],
    [["individuals over processes","<b>fully</b>","engineer speaks to engineer, weekly",
      "—"],
     ["working software over documentation","<b>partly</b>","a working panel at each boundary",
      "that we will drop handover manuals"],
     ["collaboration over negotiation","<b>fully</b>","joint change log, one page",
      "—"],
     ["responding to change over a plan","<b>30 per cent</b>",
      "iterate the control logic monthly","that concrete can iterate"]],
    note="<b>The fourth statement is about software and we have none.</b>"), 680)
S["pd03-f10"]=lambda: f_scene(860,400,
    people=[("wei",110,174,{}),("lucia",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("folder",250,148,0.3),("folder",330,148,0.3),
     ("spreadsheet",520,150,0.24),("shelf",760,92,0.5)],
    board=(40,18,230,120,"OVER, NOT INSTEAD OF",
      [("manuals dropped","4"),("pages to rewrite","40,000")]),
    clockat=(700,34,22,2,30))
S["pd03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Answer A","One sentence",
      "<p><i>The bidder will adopt an agile approach.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Which of the four? How far? At what cost to "
      "whom?</p>"), 380),
    lambda w,h: f_realia(doc("Answer B","Four rows and a percentage",
      "<p>The document, its date, the four statements, how far each transfers, and <b>30 per "
      "cent</b>.</p>"), 380),
    w=820, h=300, lt="UNCHECKABLE", rt="CHECKABLE")
S["pd03-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","The promise",
      "<p><i>We will work in an agile way throughout the project.</i></p>"), 380),
    lambda w,h: f_realia(doc("After","The answer",
      "<p>Four rows. <b>30 per cent</b> of the work can change weekly. One sentence on what the "
      "document does not claim — and one on the four manuals we should not have dropped.</p>"),
      380),
    w=820, h=300, lt="A PROMISE", rt="AN ANSWER")
S["pd03-f13"]=lambda: f_realia(form("Response planner",
    [("The document and its date",""),("The four statements",""),("How far each transfers",""),
     ("Per cent of your work that can change",""),("What it costs the client",""),
     ("One thing you got wrong","")],
    note="Six boxes. The last one is the one that is believed."), 560)
S["pd03-f14"]=lambda: f_scene(1000,450,
    people=[("wei",60,176,{}),("nkemelu",135,172,{}),("lucia",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("anders",370,176,{"seated":True}),
     ("hana",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("folder",548,198,0.22),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"OVER, NOT INSTEAD OF",
      [("can iterate","30%"),("cannot","70%")]),
    clockat=(278,34,22,3,0))
S["pd03-f15"]=lambda: f_chart([("short iterations",8),("no documentation",6),
    ("a daily meeting",9),("changing scope freely",5),("being reasonable",4)])
S["pd03-f16"]=lambda: f_realia(doc("On a desk in March",
    "What was on it at five o'clock",
    "<p><b>One printed page of sixty-eight words</b>, with the fifth sentence underlined.</p>"
    "<p><b>Four handover manuals</b>, newly printed, dated this year.</p>"
    "<p><b>An invoice</b> for rewriting them.</p>"
    "<p><b>A pie chart</b> with thirty per cent shaded.</p>"
    "<p><b>A note of three sentences.</b> <i>The document is sixty-eight words long and the "
    "sentence that protects documentation is in it, which means our 2021 decision was not a "
    "misreading of the manifesto but a decision we made and then attributed to a manifesto. Thirty "
    "per cent of this project can respond to change weekly and the other seventy is concrete, so "
    "promising a client an agile project is a promise about less than a third of what they are "
    "buying. I would rather hand over four manuals and one percentage than a word that means six "
    "different things to the six people in the room.</i></p>",
    "Five o'clock. Sixty-eight words, four reprinted manuals, thirty per cent."), 620)
