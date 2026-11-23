# -*- coding: utf-8 -*-
"""Book 4 figure specs, Units 10 to 12."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

# ---------------- Unit 10 ----------------
S["x10-f1"]=lambda: f_icons([("brokenwindow","a broken window"),("shutter","a shutter"),
    ("firealarm","smoke alarm"),("fireexit","fire door"),("danger","hazard"),
    ("firstaid","first aid"),("form","incident form"),("refnumber","reference number"),
    ("camera","camera"),("torch","torch")], cols=5)
S["x10-f2"]=lambda: f_scene(840,410, floor=0.80, panelbg="#1f2733", floorbg="#2b333d",
    litwins=[(600,96,54,44)],
    beams=[(330,214,-0.8,0.5,160,32)],
    people=[("priya",250,172,{}),("lucia",360,172,{})],
    props=[("brokenwindow",120,130,0.75),("shutter",470,120,0.8),("torch",312,198,0.62),
    ("phone",222,160,0.52)])
S["x10-f3"]=lambda: f_icons([("window","looking out"),("pen","writing it down"),
    ("phone","calling"),("brokenwindow","the scene"),("camera","an empty bracket"),
    ("meeting","comparing accounts")], cols=3)
S["x10-f4"]=lambda: f_process(["it happens","who you|tell","what you|write",
    "where it|goes","what|changes"], w=760)
S["x10-f5"]=lambda: f_realia(doc("Portmere Business Watch · review note 3",
    "Incident review: Fenner Street, 14 November",
    "<p><b>What is recorded.</b> At 23:20 a rear pane was broken at number 14. Four residents "
    "report hearing it. One account was written at 23:22; the others were given to officers after "
    "00:30, by which time the four had spoken to one another. The camera bracket at the corner "
    "has held no camera since March.</p>"
    "<p><b>What is observed.</b> Three of the four accounts mention a dark car. The written "
    "account does not. Where accounts are taken after witnesses have conferred, detail converges; "
    "this is well established and is not evidence of dishonesty. We therefore treat the "
    "contemporaneous note as the stronger record, while noting it is also the shortest.</p>"
    "<p><b>What we conclude, and what we do not.</b> We conclude that entry was forced at the "
    "rear and that the street lighting outage two doors away is relevant. We do not conclude "
    "anything about a vehicle. Attributing an incident to a described car on the basis of "
    "accounts given after discussion is how a street ends up watching for the wrong thing for a "
    "year.</p>"
    "<p><b>Context for members.</b> Harm at work remains common: survey data for 2025 indicate "
    "that <b>16 per cent of the global workforce</b> reported experiencing serious harm at work "
    "in the previous two years, down from 18 per cent in 2023 and 19 per cent in 2021. Falling, "
    "slowly. Recording things properly is part of why.</p>",
    "Figures: ILO / World Risk Poll data, reported by ILOSTAT, 2025."))
S["x10-f6"]=lambda: f_realia(tbl("Word study","-ment and -ence",
    ["Verb","Noun","Suffix"],
    [["state","statement","-ment"],["occur","occurrence","-ence"],
     ["assess","assessment","-ment"],["confer","conference","-ence"],
     ["require","requirement","-ment"]],
    note="The choice is not predictable. It has to be learned word by word."), 460)
S["x10-f7"]=lambda: f_timeline([(0.00,"23:18","quiet"),(0.14,"23:20","glass heard"),
    (0.22,"23:22","note written"),(0.40,"23:26","first call"),
    (0.62,"23:52","officers arrive"),(0.80,"00:30","witnesses confer"),
    (1.00,"00:45","accounts taken")], 0.22, w=820)
S["x10-f8"]=lambda: f_icons([("brokenwindow","glass on a pavement"),("pen","writing a time"),
    ("phone","a call"),("torch","a torch beam"),("meeting","two neighbors"),
    ("shutter","a shutter coming down")], cols=3)
S["x10-f9"]=lambda: f_realia(form("Portmere Business Watch · Incident report",
    [("Date",""),("Time",""),("Location",""),
     ("What happened, in your own words",""),("Who else was present",""),
     ("Was anyone hurt?  yes / no",""),("Signature",""),("Date signed","")],
    note="This form goes to the Watch coordinator and, on request, to your insurer. "
         "It is not a statement to the police."), 470)
S["x10-f10"]=lambda: f_scene(860,400, behind=[("hana",220,166,{})],
    people=[("priya",480,172,{}),("grace",660,174,{})],
    counter_=(110,230,260,110),
    on_counter=[("folder",150,0.5),("statement",230,0.48)],
    props=[("brokenwindow",450,70,0.8),("shutter",760,76,0.9),("envelope",600,150,0.46)])
S["x10-f11"]=lambda: f_realia(tbl("Two notes","Where they differ",
    ["Written at 23:22","Given at 00:38"],
    [["23:20 &nbsp; glass, rear of no. 14<br>23:22 &nbsp; wrote this<br>"
      "23:24 &nbsp; dark car going north<br>&nbsp;<br>(no description of driver)",
      "______ &nbsp; glass, rear of no. 14<br>at the same time &nbsp; a dark car<br>"
      "two men, possibly<br>&nbsp;<br>(spoke to neighbors first)"]]), 520)
S["x10-f12"]=lambda: f_realia(doc("The back of an envelope", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:18px;line-height:2'>"
    "23.20 &mdash; glass, back of 14<br>"
    "23.22 &mdash; writing this<br>"
    "23.24 &mdash; dark car, going north<br>"
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<s>blue</s> &mdash; not sure<br>"
    "P. Raghavan, 14 Nov</p>"), 380)
S["x10-f13"]=lambda: f_realia(tbl("","Incident note",
    ["Time","What happened"],
    [["",""],["",""],["",""],["",""],["",""],["",""]],
    note="What I was not sure about:<br><br>Signed: ______________  Date: __________"), 460)
S["x10-f14"]=lambda: f_scene(920,430, people=[("priya",140,172,{}),("lucia",210,172,{}),
    ("hana",280,166,{}),("grace",420,174,{}),("caruso",490,184,{}),
    ("oskar",620,180,{"cloth":"amberish"}),("tomas",760,180,{}),("mei",830,166,{}),
    ("adeel",890,180,{})],
    props=[("shutter",60,120,0.7),("brokenwindow",330,120,0.62),("car",680,0,1.35),
    ("bins",560,0,1.35),("camera",820,60,0.6)], floor=0.82)
S["x10-f15"]=lambda: f_chart([("look out of a window",12),("call somebody",8),
    ("do nothing and listen",6),("go outside",4),("write down the time",1)])
S["x10-f16"]=lambda: f_scene(840,410, people=[("adeel",300,180,{"smile":False})],
    props=[("crate",180,215,0.62),("crate",180,160,0.62),("crate",250,215,0.62),
    ("form",380,180,0.52),("warehouse",60,50,0.6),("forklift",680,0,1.35)],
    window_=(600,70,150,90))

# ---------------- Unit 11 ----------------
S["x11-f1"]=lambda: f_icons([("envelope","offer"),("stamp","conditional"),
    ("calendar","deadline"),("form","acceptance"),("timer","deferral"),
    ("savings","bursary"),("key","accommodation"),("map","two cities"),
    ("essay","appeal"),("noentry","withdrawal")], cols=5)
S["x11-f2"]=lambda: f_scene(820,400, people=[("mei",320,166,{"smile":False})],
    counter_=(90,232,320,108),
    on_counter=[("envelope",150,0.5),("phone",240,0.46)],
    props=[("calendar",580,80,0.66),("crate",700,0,0.75),("door",780,96,1.1)])
S["x11-f3"]=lambda: f_icons([("envelope","the deadline"),("form","the choice"),
    ("messages","the message not sent"),("map","the distance"),
    ("door","the people here"),("statement","the money")], cols=3)
S["x11-f4"]=lambda: f_realia(tbl("","What the letter commits you to",
    ["What it commits you to","What can still change","Who actually decides"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="The sentence with no person in it:"), 520)
S["x11-f5"]=lambda: f_realia(doc("Northside University · Admissions · reference ADM-30817",
    "Offer of a place",
    "<p><b>1.</b> Your application has been considered and a place has been offered to you on "
    "the program named above, commencing in September.</p>"
    "<p><b>2. Conditions.</b> This offer is made conditional upon the award of the grade "
    "specified in Annexe A. Where a condition has already been satisfied, the offer will be "
    "treated as unconditional, although no separate notification is issued.</p>"
    "<p><b>3. Acceptance.</b> Your response must be received <b>within 28 days</b>. If no "
    "response is received, the offer lapses and the place may be allocated to another "
    "applicant.</p>"
    "<p><b>4. Deferral.</b> A request to defer entry by one year may be granted at our discretion "
    "in exceptional circumstances. Deferral requests are considered by the admissions panel and "
    "the decision is final, notwithstanding any subsequent change in your circumstances.</p>"
    "<p><b>5. Financial support.</b> Eligibility for the maintenance bursary is assessed "
    "separately and will be confirmed after acceptance. Applicants are advised not to make "
    "financial commitments before confirmation has been received.</p>"
    "<p><b>Note for applicants moving to study.</b> There were around <b>304 million "
    "international migrants</b> in 2024, about <b>3.7 per cent</b> of the world's population, and "
    "nearly double the figure for 1990. Nobody moves easily. Most people who move, manage.</p>",
    "Figures: UN DESA Population Division, <i>International Migrant Stock 2024</i>."))
S["x11-f6"]=lambda: f_realia(tbl("Word study","The participle as an adjective",
    ["Verb","Participle","Used as an adjective"],
    [["condition","conditioned / conditional","a conditional offer"],
     ["confirm","confirmed","a confirmed place"],
     ["accept","accepted","an accepted application"],
     ["defer","deferred","a deferred entry"],
     ["complete","completed","a completed form"]]), 470)
S["x11-f7"]=lambda: f_line([("1990",154),("2000",173),("2010",221),("2020",281),("2024",304)],
    w=640, unit="international migrants, millions", ymin=100)
S["x11-f8"]=lambda: f_icons([("shelf","reaching a high shelf"),("key","a key that won't fit"),
    ("phone","asking on the phone"),("timetable","a canceled service"),
    ("pen","signing"),("form","being handed something")], cols=3)
S["x11-f9"]=lambda: f_realia(form("Northside University · Response to offer",
    [("Reference","ADM-30817"),("Name",""),
     ("I accept this offer  &#9633;",""),("I decline this offer  &#9633;",""),
     ("I request a deferral  &#9633;  reason:",""),("Signature",""),("Date","")],
    note="Return by post or through the applicant portal. Responses received after 28 days "
         "cannot be guaranteed."), 470)
S["x11-f10"]=lambda: f_scene(820,400, people=[("mei",280,166,{"seated":True}),
    ("oyelaran",430,170,{"seated":True})],
    props=[("table",230,250,1.4),("envelope",300,196,0.52),("phone",400,200,0.52)],
    window_=(620,60,150,110), panelbg="#242c38", floorbg="#30394a")
S["x11-f11"]=lambda: f_realia(tbl("Two documents","The deadlines",
    ["The offer","The bursary"],
    [["Response within <b>28 days</b><br>Deferral at our discretion<br>"
      "Bursary assessed <b>after</b> acceptance<br>Place may be reallocated<br>Reference ADM-30817",
      "Applications close <b>______</b><br>Assessed on household income<br>"
      "Confirmed <b>8 to 10 weeks</b> after applying<br>Cannot be backdated<br>Reference ______"]]),
    520)
S["x11-f12"]=lambda: f_realia(doc("M. Chen · reference ADM-30817","Request to defer entry",
    "<p>I am writing to request deferral of my place by one year, to September next.</p>"
    "<p>My mother's treatment ends in March and I am her named contact. The maintenance bursary "
    "is assessed after acceptance and confirmed eight to ten weeks later, which falls after the "
    "date by which I must commit to accommodation. I have no way of knowing, before I commit, "
    "whether I can afford the year.</p>"
    "<p>In the intervening year I will remain in employment at Linkwave and will complete the "
    "statistics module I have already begun.</p>"
    "<p>I am asking for deferral to September, with the offer held on the same conditions.</p>",
    "I can supply evidence of any of the above on request. M. Chen · 14 November"))
S["x11-f13"]=lambda: f_realia(tbl("","The decision",
    ["What I know","What I would have to find out"],
    [["",""],["",""],["",""],["",""],["",""]],
    note="What I have been offered: &nbsp;&nbsp;&nbsp; Decide by: <br><br>Who could tell me:"), 480)
S["x11-f14"]=lambda: f_scene(920,430, people=[("mei",150,166,{}),("oyelaran",220,170,{}),
    ("linh",380,172,{}),("adeel",440,180,{}),("oksana",500,172,{}),
    ("bah",640,176,{}),("priya",760,172,{}),("tomas",820,180,{}),
    ("yusuf",890,186,{"seated":True})],
    props=[("crate",100,215,0.62),("crate",250,215,0.62),("bench",860,0,1.35),
    ("timetable",580,60,0.6),("clock",60,50,0.6)], floor=0.84)
S["x11-f15"]=lambda: f_chart([("a parent",10),("a partner",8),("a friend",7),
    ("nobody for a while",5),("everybody at once",2)])
S["x11-f16"]=lambda: f_scene(840,410, people=[("adeel",250,180,{"smile":False}),
    ("caruso",650,184,{})],
    props=[("door",420,110,1.35),("envelope",300,185,0.52),("cooker",740,0,1.35),
    ("table",600,250,1.35),("lamp",560,160,0.62)], floor=0.84)

# ---------------- Unit 12 ----------------
S["x12-f1"]=lambda: f_icons([("form","tenancy agreement"),("radiator","repair request"),
    ("salary","payslip"),("timetable","rota"),("essay","grievance"),
    ("idcard","union card"),("councilbuilding","advice center"),("envelope","written warning"),
    ("stamp","tribunal"),("padlock","in confidence")], cols=5)
S["x12-f2"]=lambda: f_scene(880,410, people=[("lucia",250,172,{"seated":True}),
    ("adeel",330,180,{"seated":True}),("oksana",410,172,{"seated":True})],
    props=[("chair",230,240,0.7),("chair",310,240,0.7),("chair",390,240,0.7),
    ("table",560,250,1.35),("form",600,196,0.52),("door",760,110,1.35),
    ("councilbuilding",60,45,0.6)])
S["x12-f3"]=lambda: f_icons([("door","an informal word"),("email","an email"),
    ("form","a form"),("meeting","a meeting"),("envelope","a written decision"),
    ("councilbuilding","an external body")], cols=3)
S["x12-f4"]=lambda: f_process(["raise it|informally","put it|in writing","use the|process",
    "a meeting","go|outside"], w=760)
S["x12-f5"]=lambda: f_realia(doc("Portmere Advice Center · leaflet 2",
    "Knowing it and using it",
    "<p><b>Rights are not self-executing.</b> Almost nothing in this leaflet happens "
    "automatically. A repair obligation does not repair anything. An entitlement does not pay "
    "anybody. Every right described here becomes real only when a named person asks for it, in a "
    "prescribed way, within a time limit. That is not a flaw in the system; it is the system.</p>"
    "<p><b>Order matters more than argument.</b> Raise it informally. If that fails, put it in "
    "writing, dated, factual, one page. Then use the internal process. Only then go outside. A "
    "complaint that skips a stage is usually returned, and the time it took to return it comes "
    "out of your time limit, not theirs.</p>"
    "<p><b>Retaliation.</b> Being treated worse because you complained is unlawful in most of the "
    "situations covered here, and it is also hard to prove and slow to remedy. We say this plainly "
    "because leaflets that do not say it are read by people who then feel foolish. Keep dates. "
    "Keep copies. Tell somebody at the time.</p>"
    "<p><b>Why housing comes first in this leaflet.</b> Across the EU in 2024, <b>8.2 per cent</b> "
    "of people lived in households spending 40 per cent or more of disposable income on housing. "
    "For non-nationals from outside the EU the figure was <b>18.8 per cent</b>, against <b>7.6 "
    "per cent</b> for nationals. If you are reading this as a migrant tenant, the gap is not your "
    "imagination.</p>",
    "Figures: Eurostat, <i>Living conditions in Europe &mdash; housing</i>, and "
    "<i>Migrant integration statistics</i>, 2024 data."))
S["x12-f6"]=lambda: f_realia(tbl("Word study","Formal twins",
    ["Everyday","Formal","Used in"],
    [["put up with","tolerate","a complaint"],["ask for","request","a request"],
     ["go over","review","a review"],["put off","postpone","a letter"],
     ["find out","ascertain","a report"]]), 440)
S["x12-f7"]=lambda: f_chart([("non-EU nationals",18.8),("other EU citizens",16.1),
    ("nationals",7.6)], unit="per cent spending 40%+ of income on housing · EU average 8.2",
    w=560)
S["x12-f8"]=lambda: f_icons([("radiator","a cold radiator"),("timetable","a late rota"),
    ("salary","a queried payslip"),("danger","a damp patch"),
    ("door","a closed office door"),("envelope","posting it")], cols=3)
S["x12-f9"]=lambda: f_realia(form("Northgate Distribution · Grievance",
    [("Name and payroll number",""),("What happened, with dates",""),
     ("What I have already done",""),("What I am asking for",""),
     ("I wish to be accompanied  yes / no",""),("Signature",""),("Date","")],
    note="This form goes to your line manager's manager. If the grievance concerns that "
         "person, send it to HR instead."), 470)
S["x12-f10"]=lambda: f_scene(800,390, people=[("nkemelu",450,176,{"seated":True}),
    ("lucia",260,172,{"seated":True})],
    props=[("table",350,250,1.35),("form",400,196,0.52),("notebook",480,200,0.52),
    ("chair",230,230,0.7),("chair",430,230,0.7)], window_=(630,56,130,100))
S["x12-f11"]=lambda: f_realia(tbl("Two records","Has the timescale been broken?",
    ["The tenancy clause","The messages"],
    [["<b>5. Repairs.</b> The landlord shall repair the structure, the heating and the water "
      "supply.<br>Emergencies: <b>24 hours</b>.<br>Everything else: <b>14 days</b>.<br>"
      "The tenant must report within <b>48 hours</b>.",
      "14 Oct &nbsp; \"Heating's stopped\"<br>15 Oct &nbsp; \"I'll send someone\"<br>"
      "29 Oct &nbsp; \"Any news?\"<br>30 Oct &nbsp; \"This week for sure\"<br>"
      "______ &nbsp; \"Still nothing\""]]), 540)
S["x12-f12"]=lambda: f_realia(doc("L. Pham · Flat 2, 12 Market Street",
    "Repair to the heating · Flat 2",
    "<p>Dear Mr Caruso,</p>"
    "<p>I am writing to request a repair to the heating at the above address.</p>"
    "<p>14 October &mdash; reported by text, no heating.<br>"
    "15 October &mdash; you replied that somebody would be sent.<br>"
    "29 October &mdash; I asked again; you replied that it would be done that week.<br>"
    "11 November &mdash; no engineer has attended and there is no heating.</p>"
    "<p>Clause 5 of the tenancy agreement gives fourteen days for repairs that are not "
    "emergencies. Twenty-eight days have passed.</p>"
    "<p>I would be grateful if you could confirm, in writing by <b>Friday 15 November</b>, the "
    "date on which an engineer will attend.</p>"
    "<p>If I do not hear by then I will contact the council's housing standards team.</p>",
    "L. Pham · 11 November"))
S["x12-f13"]=lambda: f_realia(tbl("","Letter planner",["",""],
    [["<b>What I am raising</b>",""],["Date 1",""],["Date 2",""],["Date 3",""],["Date 4",""],
     ["<b>What I am asking for</b>",""],
     ["<b>What I will do if I do not hear</b>",""]]), 480)
S["x12-f14"]=lambda: f_scene(920,430, behind=[("grace",700,174,{})],
    people=[("lucia",140,172,{"seated":True}),("adeel",210,180,{"seated":True}),
    ("oksana",280,172,{"seated":True}),("mei",350,166,{"seated":True}),
    ("linh",420,172,{}),("yusuf",490,186,{}),("priya",820,172,{}),("hana",880,166,{})],
    counter_=(640,226,180,114),
    props=[("chair",120,240,0.65),("chair",260,240,0.65),("chair",400,240,0.65),
    ("door",550,110,1.35),("jobnotice",60,45,0.6),("councilbuilding",160,45,0.6)])
S["x12-f15"]=lambda: f_chart([("said nothing",11),("mentioned it informally",9),
    ("put it in writing",5),("used a formal process",3),("went outside",1)])
S["x12-f16"]=lambda: f_scene(840,410, people=[("priya",270,172,{"smile":False}),
    ("mei",700,166,{}),("linh",760,172,{})],
    props=[("door",430,110,1.35),("envelope",330,185,0.52),("window",560,70,0.9),
    ("jobnotice",60,50,0.6)], floor=0.84)
