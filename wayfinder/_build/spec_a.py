# -*- coding: utf-8 -*-
"""Figure specs, Starting Point to Unit 6."""
from figgen import *
S={}
def P(w,h,**kw): return lambda W,H: f_scene(W,H,**kw)

# ---------------- Starting Point ----------------
S["u00-f1"]=lambda: f_scene(760,380, people=[("nkemelu",150,186,{}),("lucia",330,176,{}),
    ("ahmad",430,180,{}),("nadia",530,176,{})],
    board=(500,36,236,110,"ROOM 4",[("Group","2"),("Teacher","Ms Nkemelu")]),
    props=[("computer",60,196,0.7)], clockat=(240,96,30,9,0), plant_=700)
S["u00-f2"]=lambda: f_icons([("book","book"),("notebook","notebook"),("pen","pen"),("pencil","pencil"),
    ("bag","bag"),("chair","chair"),("table","table"),("board","board")], cols=4)
S["u00-f3"]=lambda: f_icons([("computer","turn on your camera"),("phone","turn off your microphone"),
    ("email","put it in the chat"),("teacher","raise your hand")], cols=4, numbered=False, cell=150)

# ---------------- Unit 1 ----------------
S["u01-f1"]=lambda: f_icons([("firstname","first name"),("lastname","last name"),("country","country"),
    ("address","address"),("phone","phone number"),("email","email"),("student","student"),
    ("teacher","teacher")], cols=4)
S["u01-f2"]=lambda: f_scene(780,400, behind=[("oyelaran",566,170,{})], people=[("yusuf",120,186,{}),
    ("nadia",230,178,{}),("ahmad",330,180,{})],
    board=(506,40,250,120,"PORTMERE LANGUAGE CENTER",[("Group 1","Room 2"),("Group 2","Room 4")]),
    counter_=(438,226,342,124), clockat=(64,86,27,8,40))
S["u01-f3"]=lambda: f_icons([("book","book"),("notebook","notebook"),("pen","pen"),("pencil","pencil"),
    ("bag","bag"),("chair","chair"),("table","table"),("board","board"),("computer","computer")], cols=5)
S["u01-f4"]=lambda: f_realia(screen("Arrival form &middot; scanned from passport",
    [("First name","RAHMAN"),("Last name","NADIA"),("Country","")], flags=(0,1)), 400)
S["u01-f5"]=lambda: f_realia(doc("Portmere Language Center &middot; Fenner Street &middot; Ground floor",
    "Your First Week",
    "<p>Welcome to Portmere Language Center!</p><ol>"
    "<li><b>Come to the front desk.</b> Say your name. Spell it slowly.</li>"
    "<li><b>Get your student card.</b> Look at your name on the card. Is it correct?</li>"
    "<li><b>Find your group.</b> Your group is on the board. Group 1 is in Room 2. Group 2 is in Room 4.</li></ol>"
    "<p>Ask questions. Your teacher is here to help you. Every student has questions in week one.</p>",
    "<b>front desk</b> &mdash; the desk at the door &middot; <b>student card</b> &mdash; a card with your name and photo &middot; <b>group</b> &mdash; your class"))
S["u01-f6"]=lambda: f_realia(form("Portmere Language Center &mdash; Arrival form",
    [("First name","Nadia"),("Last name","Rahman"),("Country","Iran"),("Date of birth","4 November 2002"),
     ("Address","12 Fenner Street, Apartment 4B"),("Phone","7700 418 206"),("Email","n.rahman@mail.example"),
     ("Group / Room","2 / 4"),("Emergency contact",""),("Signature","")],
    "Please check your form before you sign it."))
S["u01-f7"]=lambda: f_count([("board",1,"board"),("computer",2,"computers"),("chair",3,"chairs"),
    ("pen",4,"pens"),("bag",1,"bag"),("notebook",1,"notebook")])
S["u01-f8"]=lambda: f_realia(tbl("Portmere Language Center","Class list",
    ["Group 1 &middot; Room 2","Group 2 &middot; Room 4"],
    [["Linh Pham","Nadia Rahman"],["Marco Ferrero","Ahmad Sultani"],["Aisha Bello","Lucia Moreno"],
     ["Jun Park","?&nbsp;&nbsp;Kowalczyk"]]), 460)
S["u01-f9"]=lambda: f_scene(640,370, behind=[("oyelaran",430,170,{})], people=[("nadia",220,178,{"look":2})],
    counter_=(330,206,300,120), props=[("computer",470,150,0.55)],
    board=(466,34,150,74,None,[("Group 2","Room 4")]))
S["u01-f10"]=lambda: f_realia(screen("Sign in",[("Last name",""),("First name",""),("Group","")]),380)
S["u01-f11"]=lambda: f_realia(doc("Portmere Language Center","NADIA RAHMAN",
    "<p style='text-align:center;margin:0'>Group 2 &middot; Room 4</p>"
    "<p style='text-align:center;font-size:11px;letter-spacing:.14em;text-transform:uppercase;"
    "border-top:1px solid #c9c7c0;padding-top:8px;margin:10px 0 0'>Student</p>"), 300)
S["u01-f12"]=lambda: f_panels(
    P(0,0,people=[("nadia",120,180,{})], props=[("phone",170,120,0.5),("door",250,150,0.9)], floor=0.80),
    P(0,0,people=[("nadia",120,160,{"seated":True}),("lucia",230,158,{"seated":True}),("nkemelu",320,168,{})],
      board=(220,28,150,66,None,[("Room","4")]), props=[("notebook",90,170,0.5)], floor=0.80),
    lt="8:35", rt="9:05")
S["u01-f13"]=lambda: f_scene(780,380, people=[("nkemelu",640,176,{}),("nadia",150,166,{"seated":True}),
    ("lucia",250,164,{"seated":True}),("ahmad",400,168,{"seated":True}),("mei",500,162,{"seated":True})],
    board=(560,34,200,96,"GROUP 2",[("Room","4")]), props=[("table",100,248,0.9),("table",350,248,0.9),
    ("chair",660,250,0.7),("bag",60,280,0.6)], window_=(40,50,140,100), floor=0.78)
S["u01-f14"]=lambda: f_chart([("Vietnam",4),("Iran",3),("Colombia",2),("Afghanistan",2),("Poland",1)])
S["u01-f15"]=lambda: f_scene(640,360, behind=[("priya",420,170,{})], people=[("mei",220,172,{"smile":False})],
    counter_=(330,198,300,120), props=[("card",200,150,0.5),("computer",460,160,0.5)],
    board=(430,30,180,70,"LIBRARY",[("Issue desk","")]))

# ---------------- Unit 2 ----------------
S["u02-f1"]=lambda: f_icons([("happy","happy"),("sad","sad"),("tired","tired"),("worried","worried"),
    ("fine","fine"),("sick","sick"),("nervous","nervous"),("cold","cold"),("hot","hot")], cols=5)
S["u02-f2"]=lambda: f_scene(780,390, people=[("mei",150,172,{"smile":False}),("yusuf",400,184,{"seated":True}),
    ("lucia",490,170,{"seated":True}),("ahmad",580,176,{"seated":True}),("nkemelu",690,172,{})],
    props=[("clinic",40,60,0.7),("chair",380,250,0.7),("chair",470,250,0.7),("chair",560,250,0.7)],
    clockat=(240,90,28,8,10), board=(560,34,190,80,"WAITING",[("Please","sign in")]))
S["u02-f3"]=lambda: f_icons([("form","form"),("clinic","clinic"),("doctor","doctor"),("queue","queue"),
    ("card","card"),("envelope","envelope")], cols=3)
S["u02-f4"]=lambda: f_realia(screen("Sign in &middot; how bad is the pain?",
    [("Pain, 1 to 10","6"),("Translate","How much is the pain?")], btn="NEXT", flags=(1,)), 400)
S["u02-f5"]=lambda: f_realia(doc("Fenner Street Walk-in Clinic","Opening hours",
    table_html(["Day","Open"],[["Monday&ndash;Friday","8:00 a.m. &ndash; 6:00 p.m."],
    ["Saturday","9:00 a.m. &ndash; 1:00 p.m."],["Sunday","Closed"]])+
    "<p style='margin-top:12px'>Sign in at the screen by the door. Then sit down and wait. We see urgent "
    "patients first, so please wait for your name.</p><p>Closed? Go to Portmere General Hospital, Quay Road.</p>",
    "<b>sign in</b> &mdash; write your name on the screen &middot; <b>urgent</b> &mdash; very bad, and now"))
S["u02-f6"]=lambda: f_realia(screen("Sign in &middot; patient details",
    [("Family name","CHEN"),("Given name","Mei Lin"),("Date of birth","12 March 2004"),
     ("Problem today","Sore throat"),("Pain, 1 to 10","6"),("Registered here?","")], btn="NEXT"), 400)
S["u02-f7"]=lambda: f_count([("tired",1,"tired"),("worried",1,"worried"),("cold",1,"cold"),
    ("fine",1,"fine"),("sick",1,"sick"),("nervous",1,"nervous")])
S["u02-f8"]=lambda: f_realia(tbl("Fenner Street Walk-in Clinic","Now seeing",
    ["Patient","Room"],[["1","Room 1"],["2","Room 3"],["3","Room 1"],["4","Room 2"],["5","&nbsp;"]],
    note="PLEASE WAIT FOR YOUR NAME"), 420)
S["u02-f9"]=lambda: f_scene(640,370, behind=[("haddad",430,174,{})], people=[("mei",220,172,{"smile":False})],
    counter_=(330,206,300,120), props=[("computer",470,152,0.55),("card",210,150,0.4)])
S["u02-f10"]=lambda: f_realia(screen("Sign in",[("Family name",""),("Given name",""),
    ("Date of birth",""),("Problem today","")], btn="NEXT"), 380)
S["u02-f11"]=lambda: f_realia(form("Fenner Street Walk-in Clinic &mdash; Appointment",
    [("Patient","Mei Lin Chen"),("Doctor","Dr S. Haddad"),("Date","Thursday 14 March"),
     ("Time","11:20 a.m."),("Room","2")], "Please arrive 10 minutes early."))
S["u02-f12"]=lambda: f_panels(
    P(0,0,people=[("mei",120,170,{"smile":False})], props=[("clinic",230,110,0.7)], floor=0.80),
    P(0,0,people=[("mei",120,166,{"seated":True}),("nkemelu",250,168,{})],
      props=[("water",50,170,0.45),("notebook",190,180,0.45)], floor=0.80),
    lt="8:10", rt="10:00")
S["u02-f13"]=lambda: f_scene(780,380, people=[("mei",120,172,{}),("yusuf",330,182,{"seated":True}),
    ("lucia",420,168,{"seated":True}),("ahmad",510,174,{"seated":True}),("tomas",600,176,{"seated":True}),
    ("haddad",700,172,{})], props=[("chair",310,252,0.65),("chair",400,252,0.65),("chair",490,252,0.65),
    ("chair",580,252,0.65),("clinic",40,70,0.6)], clockat=(230,92,28,8,30))
S["u02-f14"]=lambda: f_chart([("tired",6),("fine",4),("worried",2),("sick",1)])
S["u02-f15"]=lambda: f_scene(640,360, people=[("ahmad",230,178,{"smile":False}),("nadia",340,172,{}),
    ("lucia",430,170,{}),("tomas",520,176,{})], props=[("computer",120,150,0.6)],
    board=(430,30,180,70,"SIGN IN",[("Family name","first")]))

# ---------------- Unit 3 ----------------
S["u03-f1"]=lambda: f_icons([("clock","nine o'clock"),("clock730","half past seven"),
    ("clock1215","quarter past twelve"),("morning","morning"),("night","night"),("early","early"),
    ("late","late"),("shift","shift board")], cols=4)
S["u03-f2"]=lambda: f_scene(780,390, people=[("yusuf",190,186,{})],
    props=[("timetable",60,120,0.75),("bus",520,150,1.5),("busstop",300,120,0.8)],
    clockat=(690,90,30,9,20), floor=0.80, panelbg="#dfe6ee")
S["u03-f3"]=lambda: f_icons([("bus","bus"),("busstop","bus stop"),("timetable","timetable"),
    ("shift","shift board"),("clock","clock"),("map","map")], cols=3)
S["u03-f4"]=lambda: f_realia(screen("Bus 14 &middot; two answers",
    [("App says","arrives in 2 minutes"),("Paper timetable says","next 14 at 9:20"),
     ("Time now","9:46")], btn=None, flags=(0,)), 400)
S["u03-f5"]=lambda: f_realia(tbl("Portmere Transit","Bus 14 &middot; Fenner Street &rarr; Logistics Park",
    ["","Mon&ndash;Fri","Saturday","Sunday"],
    [["First bus","05:20","06:20","08:20"],["Last bus","00:40","00:40","22:40"],
     ["Every","20 min","30 min","60 min"]], numcols=(1,2,3),
    note="Journey time 35 minutes. On Sunday the 14 does not stop at Quay Road."), 500)
S["u03-f6"]=lambda: f_realia(tbl("Kestrel Logistics","Shift board &middot; this week",
    ["Name","Start","Finish"],[["Grace Abara","06:00","14:00"],["Tomás Alcaraz","08:00","16:00"],
    ["Yusuf Dalmar","22:00","06:00"],["Adeel Khan","14:00","22:00"],["Linh Pham","06:00","14:00"]],
    numcols=(1,2)), 460)
S["u03-f7"]=lambda: f_icons([("clock","1"),("clock730","2"),("clock1215","3"),("early","4"),
    ("late","5"),("morning","6"),("night","7"),("shift","8")], cols=4, numbered=False)
S["u03-f8"]=lambda: f_realia(doc("Portmere Transit","Sunday service",
    table_html(["",""],[["First bus","08:20"],["Last bus","&nbsp;"],["Every","60 minutes"]]),
    "No stop at Quay Road on Sunday."), 400)
S["u03-f9"]=lambda: f_scene(680,370, people=[("yusuf",180,184,{}),("bah",470,176,{})],
    props=[("bus",400,120,1.4),("timetable",70,130,0.6)], floor=0.80, panelbg="#dfe6ee")
S["u03-f10"]=lambda: f_realia(tbl("","Timetable",["","Mon&ndash;Fri","Saturday","Sunday"],
    [["First bus","","",""],["Last bus","","",""],["Every","","",""]]), 460)
S["u03-f11"]=lambda: f_realia(form("Kestrel Logistics &mdash; Shift slip",
    [("Name","Yusuf Dalmar"),("Date","Sunday 9 March"),("Start","22:00"),("Finish","06:00"),
     ("Break","30 minutes"),("Supervisor","")], "Signed slips go in the gate office box."))
S["u03-f12"]=lambda: f_panels(
    P(0,0,people=[("yusuf",120,180,{})], props=[("timetable",220,110,0.6),("busstop",30,110,0.6)], floor=0.82),
    P(0,0,people=[("yusuf",110,180,{}),("grace",240,172,{})], props=[("warehouse",20,110,0.6),("shift",290,120,0.55)], floor=0.82),
    lt="9:30", rt="10:10")
S["u03-f13"]=lambda: f_scene(800,380, people=[("yusuf",150,184,{}),("lucia",260,172,{}),("mei",350,166,{}),
    ("ahmad",440,178,{}),("tomas",530,178,{})],
    props=[("busstop",60,110,0.75),("bus",640,150,1.4),("timetable",700,70,0.5)],
    clockat=(240,80,26,9,20), floor=0.80, panelbg="#dfe6ee")
S["u03-f14"]=lambda: f_chart([("bus",6),("walk",4),("bike",2),("car",1)])
S["u03-f15"]=lambda: f_scene(640,360, people=[("mei",250,172,{"smile":False})],
    props=[("busstop",120,120,0.8),("timetable",380,120,0.7),("phone",470,160,0.5)],
    floor=0.80, panelbg="#2c3440")
