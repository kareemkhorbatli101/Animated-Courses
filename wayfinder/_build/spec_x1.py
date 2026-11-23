# -*- coding: utf-8 -*-
"""Book 4 figure specs, Starting Point to Unit 3."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

S["x00-f1"]=lambda: f_scene(880,410, people=[("nkemelu",780,176,{}),
    ("nadia",140,174,{"seated":True}),("tomas",230,180,{"seated":True}),
    ("mei",320,166,{"seated":True}),("lucia",410,172,{"seated":True}),
    ("priya",500,172,{"seated":True}),("ahmad",590,180,{"seated":True}),
    ("adeel",180,180,{}),("linh",280,172,{}),("oksana",370,172,{})],
    board=(540,22,240,110,"ON THE BOARD",[("Everybody in the group","were")]),
    props=[("table",100,250,2.6),("book",640,214,0.52)])
S["x00-f2"]=lambda: f_process(["DECIDE|the stem","decision|noun","decisive|adjective",
    "decisively|adverb"], w=700)

# ---------------- Unit 1 ----------------
S["x01-f1"]=lambda: f_icons([("calendar","semester"),("qualification","credit"),
    ("lecture","lecture"),("meeting","seminar"),("teacher","tutor"),("deadline","deadline"),
    ("book","handbook"),("plagiarism","plagiarism"),("library","reading list"),
    ("studentservices","student services")], cols=5)
S["x01-f2"]=lambda: f_scene(900,410, behind=[("grace",700,174,{}),("nkemelu",790,176,{})],
    people=[("nadia",330,174,{}),("linh",400,172,{}),("adeel",468,180,{}),("mei",534,166,{}),
    ("tomas",596,180,{})],
    counter_=(640,232,250,108),
    on_counter=[("computer",690,0.5),("form",790,0.46)],
    board=(60,40,220,130,"NOTICES",[("Enrolment","week 1"),("Tutorials","FULL"),("Fees","see us")]),
    props=[("phone",286,150,0.42),("timetable",120,196,0.6)])
S["x01-f3"]=lambda: f_icons([("teacher","personal tutor"),("meeting","module leader"),
    ("studentservices","student services"),("library","library desk"),
    ("volunteer","union adviser"),("form","course administrator")], cols=3)
S["x01-f4"]=lambda: f_realia(tbl("","Map your institution",
    ["","Who decides","Which form","Where it goes","How long"],
    [["THE DECISION I NEED","","","",""],["","","","",""],["","","","",""],["","","","",""]]), 540)
S["x01-f5"]=lambda: f_realia(doc("Northside College · Guide for returning and part-time students",
    "So you are coming back to study",
    "<p>You are not unusual. Across the wealthier countries, about <b>two adults in every five</b> "
    "take part in some kind of education or training in a given year. Most adults are studying "
    "something. What is unusual is how little any institution explains itself to the people it "
    "has just admitted, and that is what this section is for.</p>"
    "<p><b>Terms and credits.</b> The year is divided into two semesters of fifteen weeks. Each "
    "module you pass is worth credits. You need 120 credits for the year, and you must pass the "
    "mandatory modules &mdash; you cannot replace them with optional ones you happen to find "
    "easier.</p>"
    "<p><b>Who decides what.</b> Your personal tutor is responsible for you, not for any one "
    "subject. Your module leader marks your work. Only the course administrator can change what "
    "is on your timetable, and only student services can change what is on your record.</p>"
    "<p><b>Extensions.</b> Apply <i>before</i> the deadline. A retrospective extension is possible "
    "but you must show that you could not have applied in time, which is a higher bar than being "
    "busy. Work handed in late without an extension is capped at the pass mark.</p>"
    "<p><b>The thing nobody tells you.</b> Roughly half of all adults did not take part in any "
    "learning last year and did not want to. One in four says something was in the way. If you "
    "are reading this, you are already past the hardest part, which is deciding.</p>",
    "Figures: OECD, <i>Trends in Adult Learning</i>, 2025."))
S["x01-f6"]=lambda: f_realia(tbl("Word study","Prefixes that reverse or repeat",
    ["Prefix","Means","Stem","New word"],
    [["re-","again","sit","resit"],["un-","not","available","unavailable"],
     ["mis-","wrongly","understand","misunderstand"],["dis-","the opposite of","agree","disagree"],
     ["over-","too much","run","overrun"]]), 480)
S["x01-f7"]=lambda: f_chart([("highest country",58),("upper range",46),("average",40),
    ("aged 55 to 65",26),("lowest country",13)], unit="per cent of adults", w=500)
S["x01-f8"]=lambda: f_icons([("pen","writing quickly"),("book","reading carefully"),
    ("jobnotice","a badly printed notice"),("lamp","a bright study room"),
    ("lecture","a nearly empty hall"),("meeting","speaking confidently")], cols=3)
S["x01-f9"]=lambda: f_realia(tbl("Northside College","Student services",
    ["Service","Hours","Booking"],
    [["Enrolment and records","Mon–Fri 09:00–16:00","walk-in"],
     ["Finance","Mon, Wed, Fri 10:00–15:00","appointment only"],
     ["Disability support","Tue, Thu 10:00–15:00","appointment only"],
     ["Careers","Mon–Fri 09:00–16:00","walk-in"],
     ["International advice","Wed 13:00–16:00","appointment only"]],
    note="<b>Bring:</b> your student card, or photographic ID and your student number."), 500)
S["x01-f10"]=lambda: f_scene(820,400, behind=[("grace",560,174,{}),("nkemelu",660,176,{})],
    people=[("nadia",250,174,{}),("linh",730,172,{}),("adeel",790,180,{})],
    counter_=(460,218,340,122),
    props=[("phone",300,158,0.52),("computer",520,150,0.52),("timetable",200,165,0.6)],
    clockat=(80,55,24,16,20))
S["x01-f11"]=lambda: f_realia(tbl("Two documents","The clash",
    ["Timetable","Shift rota"],
    [["Mon 09:00 Lecture<br>Tue 11:00 Seminar<br><b>Thu 09:00 Seminar</b><br>Fri 14:00 Lab",
      "Mon off<br>Tue 14:00–22:00<br><b>Thu 07:00–15:00</b><br>Sat 07:00–15:00"]]), 500)
S["x01-f12"]=lambda: f_realia(form("Northside College · Seminar group change",
    [("Name",""),("Student number",""),("Current group",""),("Requested group",""),
     ("Reason",""),("Evidence enclosed",""),("Tutor approval","")],
    note="Changes cannot be made after the end of week 3."), 460)
S["x01-f13"]=lambda: f_realia(tbl("","Study planner",
    ["What I need","Who decides it","Which form","How long"],
    [["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],
     ["","","",""],["","","",""],["","","",""]]), 520)
S["x01-f14"]=lambda: f_scene(920,430, behind=[("grace",640,174,{}),("nkemelu",730,176,{}),
    ("oyelaran",820,170,{})],
    people=[("nadia",120,174,{}),("linh",190,172,{}),("adeel",260,180,{}),("mei",330,166,{}),
    ("tomas",400,180,{}),("lucia",470,172,{}),("priya",540,172,{}),
    ("yusuf",880,186,{"seated":True})],
    counter_=(600,222,300,118),
    props=[("portal",60,180,0.6),("jobnotice",60,45,0.6),("board",160,45,0.6),
    ("printer",300,215,1.35)])
S["x01-f15"]=lambda: f_chart([("asked another student",11),("worked it out alone",8),
    ("read the handbook",4),("was told by staff",3),("still don't know",2)])
S["x01-f16"]=lambda: f_scene(800,400, people=[("oyelaran",260,170,{"smile":False,"seated":True})],
    props=[("chair",230,230,0.75),("form",330,190,0.52),("coat",150,195,0.62)],
    sign_=(500,60,290,42,"NEXT OPEN MONDAY 09:00",MUTED,13), floor=0.84)

# ---------------- Unit 2 ----------------
S["x02-f1"]=lambda: f_icons([("bus","coach trip"),("museum","gallery"),("walkroute","trail"),
    ("swimming","leisure center"),("shopping","market"),("cinema","screening"),
    ("picnic","picnic"),("concert","venue"),("ticket","admission"),("rain","forecast")], cols=5)
S["x02-f2"]=lambda: f_scene(880,410, people=[("priya",760,172,{}),
    ("nadia",140,174,{"seated":True}),("tomas",230,180,{"seated":True}),
    ("mei",320,166,{"seated":True}),("lucia",410,172,{"seated":True}),
    ("ahmad",500,180,{"seated":True}),("linh",190,172,{}),("adeel",280,180,{}),
    ("oksana",370,172,{})],
    board=(540,20,200,120,"WHERE?",[("COAST","CITY"),("coach 60","free"),("8 seats","museum")]),
    props=[("table",100,250,2.4)])
S["x02-f3"]=lambda: f_icons([("bus","coach"),("museum","gallery"),("coast","coast"),
    ("cinema","foyer"),("shopping","stall"),("meeting","hall")], cols=3)
S["x02-f4"]=lambda: f_realia(tbl("","What it really costs",
    ["",""],[["Admission",""],["Concession",""],["Booking fee",""],["Travel there",""],
    ["Travel back",""],["Food",""],["<b>What it really costs</b>","<b></b>"]]), 400)
S["x02-f5"]=lambda: f_realia(doc("Portmere Review · Numbers we repeat without checking",
    "The fifteen-hour day that nobody has",
    "<p>You will have seen the figure. People in wealthy countries, it is said, have around "
    "<b>fifteen hours a day</b> for leisure and personal care. It gets repeated in articles about "
    "work-life balance, usually followed by a sentence about how we should be happier than we "
    "are.</p>"
    "<p>The figure is real and it is not what it sounds like. The category is called <i>leisure "
    "and personal care</i>, and the second half of that name is doing most of the work. Personal "
    "care includes sleeping. It also includes eating, washing and getting dressed. Bundled "
    "together with actual leisure, the aggregate comes to about fifteen hours in a twenty-four "
    "hour day.</p>"
    "<p>Take out sleep, at a conservative seven hours, and eating and washing, at around two, and "
    "what is left is nearer <b>five or six hours</b> &mdash; and that is before you subtract "
    "commuting, childcare and the forty minutes most people spend on jobs around the house.</p>"
    "<p>The figures vary between countries by about two hours, from just over fourteen to about "
    "sixteen and a half. That is a smaller spread than you would expect, and it is smaller than "
    "the difference between two people living on the same street.</p>"
    "<p>None of this means the statistic is dishonest. It means it is an aggregate, and an "
    "aggregate answers a question nobody asked.</p>",
    "Figures: OECD Time Use Database, country data to 2024."))
S["x02-f6"]=lambda: f_realia(tbl("Word study","Suffixes that make nouns",
    ["Suffix","Added to","Stem","New word"],
    [["-ment","a verb","enjoy","enjoyment"],["-ion","a verb","decide","decision"],
     ["-ness","an adjective","tired","tiredness"],["-ity","an adjective","able","ability"],
     ["-ance","a verb","attend","attendance"]]), 480)
S["x02-f7"]=lambda: f_part("One day, 24 hours",
    [("sleep",7.0,"#9aa2a9"),("eating and personal care",2.0,"#b9b7b0"),
     ("paid work",8.0,"#5c86b0"),("commuting",1.0,"#8a8a86"),
     ("housework and care",1.7,"#aeb6bd"),("FREE",4.3,ACCENT)], w=560)
S["x02-f8"]=lambda: f_icons([("bus","a packed coach"),("museum","an empty room"),
    ("queue","a long queue"),("coast","a quiet beach"),("meeting","a small hall"),
    ("shopping","closing time")], cols=3)
S["x02-f9"]=lambda: f_realia(doc("Portmere Coaches · quotation 4471","Saturday 12 April",
    "<table style='width:100%;font-size:13px'>"
    "<tr><td>Destination</td><td align='right'>Coast &mdash; return</td></tr>"
    "<tr><td>Seats</td><td align='right'>16</td></tr>"
    "<tr><td>Departure</td><td align='right'>09:00, Fenner Street</td></tr>"
    "<tr><td>Return</td><td align='right'>17:30</td></tr>"
    "<tr><td><b>Total</b></td><td align='right'><b>60.00</b></td></tr>"
    "<tr><td>Deposit, non-refundable</td><td align='right'>20.00</td></tr></table>"
    "<p style='font-size:12px;margin-top:10px'>Cancellation: the deposit is retained if notice is "
    "given less than 48 hours before departure. The price is per coach, not per passenger.</p>",
    "<span class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:16px'>48 hrs</span>"))
S["x02-f10"]=lambda: f_scene(900,420, people=[("priya",780,172,{}),
    ("nadia",140,174,{"seated":True}),("tomas",230,180,{"seated":True}),
    ("mei",320,166,{"seated":True}),("lucia",410,172,{"seated":True}),
    ("ahmad",500,180,{"seated":True}),("linh",190,172,{}),("adeel",280,180,{})],
    board=(560,20,200,120,"WHERE?",[("COAST","CITY"),("4","4")]),
    props=[("table",100,250,2.4),("phone",430,196,0.52)])
S["x02-f11"]=lambda: f_realia(tbl("Two cards","Coast and city",
    ["The coast","The city"],
    [["Coach 60.00 for 16 seats<br>Admission free<br>Food: bring your own<br><b>Risk:</b> "
      "weather, and the deposit is gone at 48 hours",
      "Travel free, 20 minutes on foot<br>Gallery free on the first Thursday<br>Food: each person "
      "pays<br><b>Risk:</b> nobody is committed to anything"]]), 520)
S["x02-f12"]=lambda: f_realia(doc("Fenner Street Community Center","SATURDAY — THE COAST",
    "<p style='font-size:16px'><b>Meet 08:45, Fenner Street. Coach leaves 09:00.</b></p>"
    "<p>Back by six. Bring a coat and something to eat. Free &mdash; the center is paying.</p>"
    "<p style='font-size:12px;color:#6b6861'>Take a tab if you are coming. If it rains we are "
    "still going.</p>"
    "<p style='letter-spacing:6px;font-size:13px'>&#9633; &#9633; &#9633; &#9633; &#9988; &#9988;</p>"))
S["x02-f13"]=lambda: f_realia(tbl("","Two options, compared",
    ["","Option 1","Option 2"],
    [["Cost per person","",""],["Travel time","",""],["What could go wrong","",""],
     ["Who wants it","",""],["<b>What people would mind least</b>","",""]]), 460)
S["x02-f14"]=lambda: f_scene(920,430, behind=[("hana",700,166,{})],
    people=[("priya",120,172,{}),("nadia",190,174,{"seated":True}),
    ("tomas",260,180,{"seated":True}),("mei",330,166,{"seated":True}),
    ("lucia",420,172,{}),("ahmad",490,180,{}),("linh",560,172,{}),("adeel",870,180,{}),
    ("oksana",820,172,{})],
    counter_=(640,222,230,118),
    props=[("chair",180,240,0.7),("chair",300,240,0.7),("coat",60,200,0.62),
    ("museum",60,45,0.6),("rain",380,42,0.6)])
S["x02-f15"]=lambda: f_chart([("a walk",12),("a market",9),("a gallery",7),
    ("a trip out of the city",5),("staying at home",4)])
S["x02-f16"]=lambda: f_scene(800,400, people=[("bah",270,176,{"smile":False,"seated":True})],
    props=[("table",200,250,1.35),("phone",250,196,0.52),("calendar",390,186,0.6),
    ("bag",560,205,0.62),("chair",580,235,0.7)], window_=(620,56,140,100))

# ---------------- Unit 3 ----------------
S["x03-f1"]=lambda: f_icons([("folder","shared drive"),("ticket","ticket"),
    ("notebook","version"),("computer","login"),("spreadsheet","spreadsheet"),
    ("calendar","invite"),("archive","archive"),("dashboard","dashboard"),
    ("padlock","credentials"),("form","handover")], cols=5)
S["x03-f2"]=lambda: f_scene(900,410, people=[("mei",250,166,{"seated":True}),
    ("grace",380,174,{"seated":True}),("tomas",520,180,{"seated":True}),
    ("adeel",640,180,{"seated":True}),("linh",760,172,{"seated":True}),
    ("oksana",860,172,{"seated":True})],
    props=[("desk",200,190,1.35),("computer",250,152,0.52),("desk",340,190,1.35),
    ("desk",480,190,1.35),("desk",600,190,1.35),("desk",720,190,1.35),
    ("board",60,45,0.6),("spreadsheet",150,45,0.6)])
S["x03-f3"]=lambda: f_icons([("folder","duplicate"),("queue","queue"),("padlock","restricted"),
    ("email","announcement"),("note","password note"),("teacher","demonstration")], cols=3)
S["x03-f4"]=lambda: f_realia(tbl("","The training gap",
    ["What I was given","What I still cannot do","Who actually knows"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="How they learned it:"), 520)
S["x03-f5"]=lambda: f_realia(doc("Linkwave Business Systems · internal · circulated to all staff",
    "Rollout plan, phase 2",
    "<p>From <b>1 November</b> the new records system replaces the legacy database. The legacy "
    "system will remain readable until <b>31 January</b> and will then be archived. Nothing will "
    "be lost.</p>"
    "<p><b>Why we are doing this.</b> The legacy system is fourteen years old. It cannot be "
    "accessed from outside the building, it does not support two-factor login, and the company "
    "that built it stopped supporting it in 2022. Every month we keep it is a month of borrowed "
    "time.</p>"
    "<p><b>What changes for you.</b> Records are organized by client rather than by date. "
    "Permissions are set by role, not by individual, which means you will have access to "
    "everything your role needs and nothing it does not. Search is faster and it searches inside "
    "documents.</p>"
    "<p><b>Training.</b> A one-hour introductory session will be offered twice in the week "
    "beginning 4 November. Attendance is encouraged. Recordings will be made available. Staff who "
    "require additional support should speak to their line manager.</p>"
    "<p><b>A note on expectations.</b> Across wealthy countries, around <b>one adult in four</b> "
    "lacks the most basic digital skills, and a further one in seven can perform only basic "
    "functions on a computer. We do not know our own figure. We have never measured it.</p>",
    "Figures: OECD, <i>Digital Economy Outlook 2024</i>, \"Skills for the digital age\"."))
S["x03-f6"]=lambda: f_realia(tbl("Word study","Prefixes of number and degree",
    ["Prefix","Means","Stem","New word"],
    [["multi-","many","user","multi-user"],["under-","not enough","trained","undertrained"],
     ["co-","together with","worker","co-worker"],["pre-","before","install","pre-install"],
     ["semi-","half, partly","automatic","semi-automatic"]]), 480)
S["x03-f7"]=lambda: f_part("One hundred adults",
    [("lack the most basic digital skills",25.0,ACCENT),
     ("basic functions only",14.0,"#8ab0dd"),("able to do more",61.0,"#b9b7b0")], w=560)
S["x03-f8"]=lambda: f_icons([("computer","two search screens"),("folder","two folder trees"),
    ("queue","a full queue, an empty one"),("padlock","one extra step"),
    ("concert","a loud office, a quiet one"),("board","one clear board, one full")], cols=3)
S["x03-f9"]=lambda: f_realia(doc("Linkwave Support · ticket LW-21884","Access to Admin folder",
    "<table style='width:100%;font-size:13px'>"
    "<tr><td>Raised by</td><td align='right'>M. Chen</td></tr>"
    "<tr><td>Priority</td><td align='right'>Normal</td></tr>"
    "<tr><td>Status</td><td align='right'><b>Open</b></td></tr>"
    "<tr><td>Assigned to</td><td align='right'>Service Desk (unallocated)</td></tr></table>"
    "<p style='margin-top:10px;font-size:13px'><b>Updates</b><br>"
    "Tue 09:12 &nbsp; Ticket raised<br>"
    "Tue 16:40 &nbsp; Acknowledged, awaiting manager approval<br>"
    "Thu 11:02 &nbsp; Manager contacted<br>"
    "Mon 08:55 &nbsp; Awaiting manager approval</p>",
    "Open 6 days. Target for Normal priority: 2 working days."))
S["x03-f10"]=lambda: f_scene(800,390, people=[("mei",260,166,{"seated":True}),
    ("grace",400,174,{"seated":True}),("tomas",680,180,{})],
    props=[("desk",210,190,1.35),("computer",260,152,0.52),("desk",350,190,1.35),
    ("phone",450,185,0.52),("folder",560,180,0.52),("printer",730,215,1.35)])
S["x03-f11"]=lambda: f_realia(tbl("Two folders","Which is the real one?",
    ["Folder one","Folder two"],
    [["Q3 report.xlsx &nbsp; 14 Oct<br>Q3 report FINAL.xlsx &nbsp; 14 Oct<br>"
      "Q3 report final v2.xlsx &nbsp; 14 Oct<br>Q3 FINAL USE THIS.xlsx &nbsp; 14 Oct<br>"
      "Q3 draft.xlsx &nbsp; 2 Oct<br>&#128274; Q3 master.xlsx &nbsp; 11 Nov",
      "Rota Nov.xlsx &nbsp; 28 Oct<br>Rota Nov (1).xlsx &nbsp; 28 Oct<br>"
      "Rota Nov AMENDED.xlsx &nbsp; 3 Nov<br>Rota Nov amended.xlsx &nbsp; 3 Nov<br>"
      "&#128274; Rota live.xlsx &nbsp; 12 Nov<br>Rota old.xlsx &nbsp; 1 Sep"]]), 540)
S["x03-f12"]=lambda: f_realia(doc("Handover · the things nobody writes down", None,
    "<table style='width:100%;font-size:13px'>"
    "<tr><td><b>Task</b></td><td><b>When</b></td><td><b>Who</b></td></tr>"
    "<tr><td>Stock reconciliation</td><td>3rd Tuesday</td><td>you</td></tr>"
    "<tr><td>Client report</td><td>monthly, by the 5th</td><td>you</td></tr>"
    "<tr><td>Rota publication</td><td>Friday, for Monday</td><td>supervisor</td></tr>"
    "<tr><td>Archive sweep</td><td>quarterly</td><td>nobody, currently</td></tr>"
    "<tr><td>Access requests</td><td>as they arise</td><td>G. Okafor</td></tr>"
    "<tr><td>Printer toner</td><td>when it goes pale</td><td>whoever notices</td></tr></table>"
    "<p style='margin-top:10px'><b>Not written down anywhere:</b> search does not look inside "
    "scanned documents, so nothing from before 2021 is findable. G. Okafor can unlock Admin. "
    "H. Bakri can unlock Finance. Nobody can unlock Archive.</p>",
    "<b>The real current file lives in Admin, not in the folder with FINAL in its name.</b>"))
S["x03-f13"]=lambda: f_realia(tbl("","My handover page",
    ["Task","When","Who"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="Not written down anywhere:<br><br>Where the real file lives:"), 480)
S["x03-f14"]=lambda: f_scene(920,430, people=[("mei",120,166,{"seated":True}),
    ("grace",200,174,{}),("tomas",280,180,{}),("adeel",420,180,{"seated":True}),
    ("linh",500,172,{}),("oksana",580,172,{}),("priya",700,172,{"seated":True}),
    ("yusuf",790,186,{}),("bah",870,176,{})],
    props=[("desk",80,190,1.35),("computer",130,152,0.52),("desk",380,190,1.35),
    ("desk",660,190,1.35),("board",160,45,0.6),("printer",320,215,1.35),
    ("dashboard",60,45,0.6)])
S["x03-f15"]=lambda: f_chart([("a colleague showed me",13),("I worked it out",9),
    ("a written guide",4),("a training session",3),("I still can't use it",2)])
S["x03-f16"]=lambda: f_scene(800,400, people=[("hana",270,166,{"smile":False,"seated":True})],
    props=[("desk",220,190,1.35),("computer",270,152,0.52),("spreadsheet",390,178,0.6),
    ("lamp",180,170,0.62),("note",470,190,0.52)], panelbg="#242c38", floorbg="#30394a",
    clockat=(80,55,22,18,10))
