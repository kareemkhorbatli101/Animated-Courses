# -*- coding: utf-8 -*-
"""Book 3 figure specs, Starting Point to Unit 4."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

S["w00-f1"]=lambda: f_scene(820,400, people=[("nkemelu",720,176,{}),("nadia",140,174,{"seated":True}),
    ("ahmad",250,180,{"seated":True}),("lucia",360,172,{"seated":True}),("mei",470,166,{"seated":True}),
    ("priya",580,170,{"seated":True})],
    board=(520,28,230,100,"TENSES",[("was / were","did"),("going to","")]),
    props=[("table",190,255,0.9),("table",430,255,0.9)])

# ---------------- Unit 1 ----------------
S["w01-f1"]=lambda: f_icons([("flashcard","flashcards"),("essay","notes"),("lecture","reading list"),
    ("meeting","study group"),("studyapp","revise"),("pen","highlight"),("deadline","timer"),
    ("application","assignment"),("calendar","deadline"),("library","library")], cols=5)
S["w01-f2"]=lambda: f_scene(800,390, people=[("nadia",230,174,{"seated":True}),
    ("adeel" if "adeel" in CAST else "ahmad",450,178,{"seated":True}),("mei",600,166,{"seated":True})],
    props=[("desk",190,180,0.9),("computer",250,160,0.45),("desk",420,180,0.9),("desk",570,180,0.9),
    ("library",60,60,0.55)], clockat=(700,80,26,8,5))
S["w01-f3"]=lambda: f_icons([("phone","phone"),("concert","noise"),("tired","tired"),
    ("shift","shift"),("baby","interruption"),("calendar","no time")], cols=3)
S["w01-f4"]=lambda: f_realia(tbl("Study app","This week",["","Hours"],
    [["App open, no activity","6"],["Flashcards","2"],["Reading","1"],["Timer left running","2"],
     ["<b>Total shown</b>","<b>11</b>"],["<b>Actually studied</b>","<b>3</b>"]], numcols=(1,)), 400)
S["w01-f5"]=lambda: f_realia(doc("Northside Technical College · Study skills, handout 2",
    "Three things that work",
    "<p>Most people revise by reading their notes again. It feels productive and it is the weakest "
    "method we know of.</p>"
    "<ol><li><b>Test yourself instead of re-reading.</b> Close the book and write down what you "
    "remember. That discomfort is the learning.</li>"
    "<li><b>Spread it out.</b> Four twenty-minute sessions across a week beat one eighty-minute "
    "session the night before.</li>"
    "<li><b>Mix the topics.</b> Moving between three topics in one session feels worse and works "
    "better.</li></ol>",
    "<b>The one that does not work:</b> highlighting. It feels like studying. It is coloring."))
S["w01-f6"]=lambda: f_realia(tbl("Weekly study plan","Planned and actual",
    ["Day","Planned","Actual"],[["Mon","40","0"],["Tue","40","25"],["Wed","40","0"],
    ["Thu","40","0"],["Fri","40","95"],["Sat","40","40"],["Sun","40","20"],
    ["<b>Total</b>","<b>280</b>","<b>180</b>"]], numcols=(1,2)), 400)
S["w01-f7"]=lambda: f_realia(tbl("Northside · Tutorials","Book a slot",
    ["Day","Time","Tutor","Status"],
    [["Monday","16:00","Dr Marsh","FULL"],["Tuesday","11:00","Ms Nkemelu","FULL"],
     ["Wednesday","14:30","Dr Marsh","FULL"],["Thursday","&nbsp;","Dr Marsh","<b>FREE</b>"],
     ["Friday","10:00","Ms Nkemelu","FULL"]]), 450)
S["w01-f8"]=lambda: f_scene(720,380, people=[("nadia",250,174,{"seated":True}),("nkemelu",470,176,{"seated":True})],
    props=[("desk",400,195,0.95),("essay",330,170,0.35),("notebook",250,180,0.3)],
    window_=(560,56,130,100))
S["w01-f9"]=lambda: f_realia(tbl("","Study planner",["Day","Planned","Actual","What I did"],
    [["Mon","","",""],["Tue","","",""],["Wed","","",""],["Thu","","",""],["Fri","","",""],
     ["Sat","","",""],["Sun","","",""]]), 460)
S["w01-f10"]=lambda: f_realia(doc("Nursing Access · Assignment 1","Patient handover",
    "<p><b>Describe</b> and <b>evaluate</b> one method of patient handover.</p>"
    "<p>1,200 words. Due <b>9 October, 17:00</b>.</p>"
    "<p><b>The marker is looking for:</b></p><ol><li>A clear description of one method</li>"
    "<li>Evidence that it works, or does not</li><li>Your own judgement, stated</li>"
    "<li>Three sources</li></ol>",
    "Both instruction words carry marks. Most students answer only the first."))
S["w01-f11"]=lambda: f_panels(
    P(people=[("nadia",130,174,{"seated":True,"smile":False})],
      props=[("table",90,235,1.0),("lecture",230,190,0.4),("phone",290,200,0.35)],
      clockat=(330,55,22,11,0), floor=0.82),
    P(people=[("nadia",130,174,{"seated":True})],
      props=[("desk",200,185,0.8),("flashcard",250,170,0.35)], clockat=(330,55,22,7,0), floor=0.82),
    lt="11 p.m.", rt="7 a.m.")
S["w01-f12"]=lambda: f_scene(820,400, people=[("nadia",130,174,{"seated":True}),
    ("adeel" if "adeel" in CAST else "ahmad",240,180,{"seated":True}),("mei",350,166,{"seated":True}),
    ("priya",470,172,{"seated":True}),("lucia",600,172,{"seated":True}),("tomas",720,180,{})],
    props=[("desk",90,185,0.85),("desk",200,185,0.85),("desk",310,185,0.85),("desk",430,185,0.85),
    ("library",50,50,0.5)], clockat=(660,70,24,8,5))
S["w01-f13"]=lambda: f_chart([("read it again",9),("write notes",7),("test myself",4),
    ("with somebody",3),("don't revise",2)])
S["w01-f14"]=lambda: f_scene(740,390, people=[("yusuf",250,186,{"seated":True,"smile":False})],
    props=[("table",190,255,1.2),("computer",230,180,0.45),("lecture",350,190,0.35),
    ("phone",430,200,0.35),("bed",600,220,0.6)], clockat=(110,80,24,12,0))

# ---------------- Unit 2 ----------------
S["w02-f1"]=lambda: f_icons([("festival","fair"),("shopping","stall"),("jobnotice","poster"),
    ("studentcard","ticket"),("volunteer","volunteer"),("concert","stage"),("door","entrance"),
    ("picnic","marquee"),("firstaid","first aid"),("map","site map")], cols=5)
S["w02-f2"]=lambda: f_scene(800,390, people=[("priya",250,172,{}),("nkemelu",390,176,{"seated":True}),
    ("caruso",500,184,{"seated":True}),("oyelaran",610,170,{"seated":True}),("bah",710,176,{"seated":True})],
    props=[("table",430,255,1.3),("map",300,195,0.35),("sun",80,60,0.5)])
S["w02-f3"]=lambda: f_icons([("sun","sunny"),("rain","showers"),("wind","windy"),
    ("storm","storm"),("cloud","cloudy"),("umbrella","forecast")], cols=3)
S["w02-f4"]=lambda: f_realia(doc("The same Saturday, two apps", None,
    tags([("30%","chance of rain · app A",None),("30%","chance of rain · app B",None)])+
    "<p style='margin-top:14px'>App A shows a <b>sun</b>. App B shows <b>rain</b>. The number is "
    "identical.</p><p style='font-size:12px;color:#6b6861'>The number is the forecast. The picture "
    "is a decision somebody made.</p>"), 430)
S["w02-f5"]=lambda: f_realia(doc("Saturday 12 April · 11:00–16:00","Fenner Street Spring Fair",
    "<p>Thirty stalls, live music from one o'clock, and a children's area in the hall. Entry is "
    "free; stalls are in aid of the Portmere Food Project.</p>"
    "<p><b>Accessible:</b> step-free entry at the hall. Accessible toilet inside. Assistance dogs "
    "welcome. If you need anything else, tell us in advance.</p>"
    "<p><b>In the event of heavy rain</b> the outdoor stalls will move into the hall. The music "
    "will still happen. We will post a decision on the noticeboard and online <b>by nine o'clock "
    "on Saturday morning</b>, so nobody travels for nothing.</p>",
    "<b>Volunteers:</b> two hours each, any time between ten and five. No experience needed."))
S["w02-f6"]=lambda: f_realia(tbl("Saturday 12 April","Hourly forecast",
    ["Hour","Temp","Rain","Wind"],
    [["09:00","8","20%","12"],["11:00","10","30%","14"],["13:00","12","35%","18"],
     ["14:00","12","<b>70%</b>","24"],["15:00","11","<b>65%</b>","26"],["17:00","10","25%","16"]],
    numcols=(1,2,3)), 440)
S["w02-f7"]=lambda: f_realia(tbl("Spring Fair","Volunteer rota",
    ["Time","Job","Name"],
    [["10–11","Setting up","P. Raghavan"],["11–1","Entrance","A. Khan"],
     ["11–1","Refreshments","&nbsp;"],["1–3","Entrance","L. Pham"],
     ["1–3","Children's area","M. Chen"],["3–5","Entrance","&nbsp;"],
     ["3–5","Refreshments","S. Haddad"],["5–6","Clearing up","everybody"]],
    note="Questions: ask Priya."), 440)
S["w02-f8"]=lambda: f_scene(760,390, behind=[("priya",470,172,{})], people=[("lucia",240,172,{})],
    counter_=(380,208,330,120), props=[("picnic",580,150,0.5),("cloud",90,60,0.55),
    ("map",410,152,0.35)])
S["w02-f9"]=lambda: f_realia(tbl("","Volunteer rota",["Time","Job","Name","Contact"],
    [["10–11","","",""],["11–1","","",""],["1–3","","",""],["3–5","","",""],["5–6","","",""]],
    note="If it rains:"), 440)
S["w02-f10"]=lambda: f_realia(doc("Saturday 12 April","FENNER STREET SPRING FAIR",
    "<p style='font-size:17px'><b>11:00 – 16:00 · Fenner Street and the Community Hall</b></p>"
    "<p>Thirty stalls · live music from 1 · children's area · refreshments all day</p>"
    "<p><b>Free entry.</b> In aid of the Portmere Food Project.</p>",
    "If it rains we move into the hall. Decision posted by 9 a.m. · Volunteers wanted: tell Priya"))
S["w02-f11"]=lambda: f_panels(
    P(people=[("priya",140,172,{"smile":False}),("tomas",260,180,{})],
      props=[("picnic",330,200,0.5),("cloud",40,50,0.5)], floor=0.82),
    P(people=[("priya",120,172,{}),("lucia",210,172,{}),("mei",290,166,{}),("ahmad",360,180,{})],
      props=[("shopping",60,215,0.45),("concert",330,80,0.45)], floor=0.82),
    lt="9 a.m.", rt="2 p.m.")
S["w02-f12"]=lambda: f_scene(840,400, people=[("priya",120,172,{}),("lucia",220,172,{}),
    ("mei",310,166,{}),("ahmad",400,180,{}),("tomas",500,180,{}),("nadia",590,174,{}),
    ("yusuf",690,186,{}),("oyelaran",780,170,{})],
    props=[("shopping",60,220,0.45),("concert",430,70,0.45),("firstaid",760,60,0.4),
    ("rain",180,55,0.4)])
S["w02-f13"]=lambda: f_chart([("work",8),("rest",7),("family",5),("go somewhere",4),("study",3)])
S["w02-f14"]=lambda: f_scene(760,390, people=[("oksana" if "oksana" in CAST else "priya",250,172,{"smile":False}),
    ("lucia",520,172,{}),("ahmad",610,180,{})],
    props=[("door",380,130,1.0),("shopping",160,250,0.5),("rain",90,55,0.5),("umbrella",660,150,0.45)],
    floor=0.84)

# ---------------- Unit 3 ----------------
S["w03-f1"]=lambda: f_icons([("radiator","radiator"),("window","window"),("shower","shower"),
    ("cupboard","cupboard"),("kitchen","shared kitchen"),("bins","bike store"),
    ("danger","damp"),("cooker","boiler"),("timesheet","meter"),("key","key")], cols=5)
S["w03-f2"]=lambda: f_scene(820,390, props=[("radiator",140,230,0.8),("window",230,100,0.9),
    ("cooker",330,230,0.7),("danger",190,90,0.4),
    ("radiator",560,230,0.8),("window",650,100,0.9),("cooker",750,230,0.7)],
    sign_=(100,30,180,36,"FLAT 1",MUTED,13))
S["w03-f3"]=lambda: f_icons([("danger","damp"),("washup","dripping tap"),("window","window won't close"),
    ("key","broken lock"),("shower","no hot water"),("concert","noise")], cols=3)
S["w03-f4"]=lambda: f_realia(doc("Two flats, one budget", None,
    tags([("560","a month · bills included",None),("520","a month · plus bills","bills ~70")])+
    "<p style='margin-top:14px'>520 + 70 = <b>590</b>. The one that looks cheaper is thirty a "
    "month dearer.</p>"), 430)
S["w03-f5"]=lambda: f_realia(doc("12 Market Street, Flat 2","Tenancy agreement · extract",
    "<p><b>3. Rent</b> is due on the first of the month. The tenant is liable for rent until the "
    "tenancy ends, whether or not they are living there.</p>"
    "<p><b>4. Notice.</b> Either side may end the tenancy with <b>one month's notice in "
    "writing</b>. A text message is not writing.</p>"
    "<p><b>5. Repairs.</b> The landlord must repair the structure, the heating and the water "
    "supply. Emergencies: <b>24 hours</b>. Everything else: <b>14 days</b>. The tenant must report "
    "a problem within <b>48 hours</b>.</p>"
    "<p><b>6. Not permitted:</b> smoking inside, subletting, pets without written permission, or "
    "changing the locks.</p>",
    "<b>7. Deposit</b> held by a protection scheme, returned within 10 days."))
S["w03-f6"]=lambda: f_realia(tbl("Two flats","Compared",["","Flat A","Flat B"],
    [["Rent","520","560"],["Bills","~70","included"],["Deposit","520","560"],
     ["Rooms","2","1"],["To college","35 min","15 min"],["Boiler","19 years","2 years"],
     ["Problems","damp, old boiler","none seen"],
     ["<b>Real monthly</b>","<b>590</b>","<b>560</b>"]], numcols=(1,2)), 440)
S["w03-f7"]=lambda: f_realia(tbl("Quay Road Lettings","Saturday viewings",
    ["Time","Address","Rent","Note"],
    [["09:30","2 Market St","520","damp?"],["10:15","14 Bridge Ln","&nbsp;","2nd floor"],
     ["11:00","7 Fenner St","560","BILLS?"],["12:00","3 Quay Rd","640","no lift"],
     ["13:00","19 Market St","495","shared kitchen"]], numcols=(2,)), 450)
S["w03-f8"]=lambda: f_scene(760,390, people=[("lucia",250,172,{}),("caruso",450,184,{}),
    ("ahmad",620,180,{})], props=[("cooker",350,220,0.75),("window",600,80,0.8),
    ("key",180,160,0.35)])
S["w03-f9"]=lambda: f_realia(tbl("","Compare two places",["","Place 1","Place 2"],
    [["Rent","",""],["Bills","",""],["Deposit","",""],["Rooms","",""],["Travel time","",""],
     ["Problems","",""],["<b>Real monthly</b>","",""]]), 420)
S["w03-f10"]=lambda: f_realia(doc("To: E. Caruso","Repair · kitchen tap",
    "<p>Dear Mr Caruso,</p>"
    "<p>The kitchen tap in Flat 2 has been dripping since Tuesday 14th. It is not urgent.</p>"
    "<p>I am reporting it within 48 hours as the agreement asks. I understand this is the "
    "fourteen-day category.</p>"
    "<p>Could you confirm by email when somebody will come?</p>",
    "L. Pham · Flat 2 · 16 October"))
S["w03-f11"]=lambda: f_panels(
    P(people=[("lucia",130,172,{"smile":False})], props=[("window",240,90,0.8),("danger",300,70,0.35),
      ("notebook",200,195,0.3)], floor=0.82),
    P(people=[("lucia",120,172,{}),("ahmad",230,180,{})], props=[("cooker",320,205,0.65),
      ("phone",260,160,0.35)], floor=0.82),
    lt="Flat A", rt="Flat B")
S["w03-f12"]=lambda: f_scene(820,400, behind=[("priya",600,172,{}),("oyelaran",700,170,{})],
    people=[("lucia",140,172,{}),("ahmad",240,180,{}),("mei",340,166,{}),("tomas",440,180,{})],
    counter_=(520,216,300,124), props=[("jobnotice",60,60,0.5),("computer",550,152,0.4)])
S["w03-f13"]=lambda: f_chart([("cost",10),("distance",7),("warmth",5),("space",4),("who you live with",3)])
S["w03-f14"]=lambda: f_scene(760,390, people=[("mei",250,166,{"smile":False,"seated":True})],
    props=[("bed",420,215,0.9),("danger",180,80,0.45),("phone",330,190,0.35),("radiator",600,230,0.7)],
    floor=0.82)

# ---------------- Unit 4 ----------------
S["w04-f1"]=lambda: f_icons([("teacher","train"),("reference","check"),("lift","repair"),
    ("driver","deliver"),("cashier","serve"),("meeting","manage"),("cleaner","clean"),
    ("coins","count"),("calendar","organize"),("deadline","solve")], cols=5)
S["w04-f2"]=lambda: f_scene(800,390, people=[("ahmad",260,180,{"seated":True}),("priya",420,172,{})],
    props=[("desk",210,190,0.9),("computer",260,165,0.5),("cv",370,180,0.3),("library",60,55,0.5)],
    clockat=(690,75,24,7,20))
S["w04-f3"]=lambda: f_icons([("computer","job board"),("cv","CV"),("essay","cover letter"),
    ("studyapp","filter"),("flashcard","saved"),("application","application")], cols=3)
S["w04-f4"]=lambda: f_realia(screen("Job search · 11 results",
    [("Filter","within 5 km"),("Filter","full time"),("Filter","posted in the last 7 days"),
     ("Hidden by these filters","184 jobs")], btn=None, flags=(1,)), 430)
S["w04-f5"]=lambda: f_realia(doc("Northgate Distribution · Portmere Logistics Park",
    "Warehouse Team Member · part time",
    "<p>24 hours a week · 12.60 an hour · evenings and Saturdays</p>"
    "<p><b>What you will do</b></p><ol>"
    "<li>Check deliveries against notes and record any differences</li>"
    "<li>Pick and pack orders using a handheld scanner</li>"
    "<li>Keep walkways clear and report hazards the same day</li>"
    "<li>Train new starters once you are confident</li>"
    "<li>Cover the goods-in desk when needed</li></ol>"
    "<p><b>What we need:</b> lift 15 kg · read numbers and labels in English · work in a team · "
    "right to work here.</p>"
    "<p><b>We train</b> the scanner and the forklift.</p>",
    "<b>Closing date</b> 28 April. We reply to everybody, including people we do not interview."))
S["w04-f6"]=lambda: f_realia(tbl("The same two years","Two ways to write it",
    ["Version 1","Version 2"],
    [["Warehouse operative<br>2022–2024",
      "<b>Warehouse operative · 2022–2024</b><br>"
      "&bull; Checked deliveries against notes and recorded differences<br>"
      "&bull; Packed about <b>200 orders a day</b><br>"
      "&bull; Trained <b>2</b> new starters<br>"
      "&bull; Covered goods-in when the supervisor was away"]]), 500)
S["w04-f7"]=lambda: f_realia(tbl("Brightpath","Search results",
    ["Title","Employer","Pay","Distance"],
    [["Warehouse Team Member","Northgate","12.60","3 km &nbsp;<b>SAVED</b>"],
     ["Cleaner, evenings","Portmere NHS","12.20","5 km"],
     ["Kitchen assistant","The Market Café","&nbsp;","2 km"],
     ["Delivery driver","Kestrel","13.80","4 km &nbsp;<b>SAVED</b>"],
     ["Care assistant","Verdant Care","12.90","6 km"],
     ["Stock controller","Freshline","14.10","9 km"]]), 480)
S["w04-f8"]=lambda: f_scene(740,390, people=[("ahmad",260,180,{"seated":True}),("grace",480,174,{"seated":True})],
    props=[("desk",410,195,0.95),("cv",340,170,0.3)], window_=(580,56,130,100))
S["w04-f9"]=lambda: f_realia(tbl("","One job on a CV",["",""],
    [["Job title",""],["Employer",""],["Dates",""],["&bull; I …",""],["&bull; I …",""],
     ["&bull; I …",""],["&bull; I …",""]], note="At least two lines must contain a number."), 420)
S["w04-f10"]=lambda: f_realia(tbl("Before and after","Same job, two CVs",
    ["",""],[["<b>Before</b>","Warehouse operative, 2022–2024"],
    ["<b>After</b>","Checked deliveries · packed 200 orders a day · trained 2 starters · covered goods-in"]]), 480)
S["w04-f11"]=lambda: f_panels(
    P(people=[("ahmad",140,180,{"seated":True,"smile":False})],
      props=[("desk",200,190,0.8),("computer",250,165,0.45),("cv",330,190,0.28)], floor=0.82),
    P(people=[("ahmad",140,180,{"seated":True}),("grace",280,174,{"seated":True})],
      props=[("desk",230,190,0.9),("cv",270,170,0.28)], floor=0.82),
    lt="April", rt="May")
S["w04-f12"]=lambda: f_scene(820,400, people=[("ahmad",130,180,{"seated":True}),
    ("lucia",230,172,{"seated":True}),("mei",330,166,{"seated":True}),("nadia",430,174,{"seated":True}),
    ("priya",580,172,{}),("tomas",680,180,{})],
    props=[("desk",90,190,0.85),("desk",190,190,0.85),("desk",290,190,0.85),("desk",390,190,0.85),
    ("jobnotice",760,55,0.5),("printer",520,215,0.5)], clockat=(500,65,22,7,15))
S["w04-f13"]=lambda: f_chart([("healthcare",8),("trade",6),("education",5),("retail",4),
    ("office",3),("agriculture",2)])
S["w04-f14"]=lambda: f_scene(760,390, people=[("oksana" if "oksana" in CAST else "priya",250,172,{"smile":False,"seated":True})],
    props=[("table",190,255,1.2),("computer",230,180,0.45),("qualification",370,190,0.3),
    ("cv",450,195,0.28)], window_=(580,60,130,100))
