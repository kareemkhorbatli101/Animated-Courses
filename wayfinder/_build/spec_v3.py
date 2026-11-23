# -*- coding: utf-8 -*-
"""Book 2 figure specs, Units 9 to 12."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

# ---------------- Unit 9 ----------------
S["v09-f1"]=lambda: f_icons([("head","headache"),("throat","sore throat"),("sick","cough"),
    ("thermometer","temperature"),("stomach","stomach ache"),("back","backache"),
    ("arm","rash"),("nervous","dizzy"),("tired","tired"),("firstaid","cut")], cols=5)
S["v09-f2"]=lambda: f_scene(760,380, people=[("yusuf",230,186,{"seated":True,"smile":False}),
    ("haddad",470,180,{"seated":True})],
    props=[("desk",400,200,0.9),("computer",430,168,0.45),("firstaid",640,80,0.5)],
    clockat=(120,80,26,4,10))
S["v09-f3"]=lambda: f_icons([("appointment","appointment"),("form","prescription"),
    ("queue","waiting room"),("thermometer","blood pressure"),("medicine","medicine"),
    ("reference","sick note")], cols=3)
S["v09-f4"]=lambda: f_realia(screen("Search &middot; back pain",
    [("1 &middot; Ad","Portmere Spine Clinic &mdash; book today"),
     ("2 &middot; Ad","The mattress that ends back pain"),
     ("3 &middot; Ad","Three supplements doctors won't tell you about"),
     ("4","Portmere Health Service &mdash; back pain")], btn=None, flags=(0,1,2)), 440)
S["v09-f5"]=lambda: f_realia(doc("Portmere Health Service &middot; Leaflet 14","Back pain",
    "<p>Most back pain improves within <b>six weeks</b> without treatment. Resting completely "
    "usually makes it worse.</p>"
    "<ol><li><b>Keep moving.</b> Short walks, often. Do not stay in bed.</li>"
    "<li><b>Use heat</b> for the first few days, 15 minutes at a time.</li>"
    "<li><b>Carry less on one side.</b> A bag on one shoulder every day is a cause, not a "
    "coincidence.</li></ol>"
    "<p><b>See a doctor if:</b> the pain goes down your leg &middot; you have a temperature "
    "&middot; you cannot control your bladder &middot; the pain wakes you at night.</p>",
    "<b>Bring to your appointment:</b> when it started, what makes it worse, what you have already tried."))
S["v09-f6"]=lambda: f_realia(form("Portmere Health Center &mdash; Appointment",
    [("Patient","Y. Dalmar"),("Date","Tuesday 14 November"),("Time","4:00 p.m."),
     ("Clinic","Dr S. Haddad, Room 3"),("Please bring","your card, a list of medicines, your questions"),
     ("Arrive","10 minutes early"),("To cancel","call 7700 904 220")]))
S["v09-f7"]=lambda: f_icons([("head","1"),("throat","2"),("back","3"),("stomach","4"),
    ("sick","5"),("firstaid","6"),("nervous","7"),("tired","8")], cols=4, numbered=False)
S["v09-f8"]=lambda: f_realia(tbl("Portmere Health Center","Now seeing",
    ["Patient","Room"],[["1","Room 2"],["2","Room 1"],["3","Room 3"],["4","&nbsp;"]],
    note="Approximate waiting time: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"), 420)
S["v09-f9"]=lambda: f_scene(720,380, people=[("yusuf",250,186,{"seated":True}),("haddad",470,180,{"seated":True})],
    props=[("desk",410,200,0.9),("form",330,172,0.35),("computer",450,168,0.42)])
S["v09-f10"]=lambda: f_realia(tbl("","Before my appointment",["",""],
    [["What is the problem?",""],["When did it start?",""],["What makes it worse?",""],
     ["What have I already tried?",""]]), 420)
S["v09-f11"]=lambda: f_realia(doc("Folded in a pocket", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:18px;line-height:2.1'>"
    "lower back<br>since August<br>worse when I lift<br><s>sometimes my leg</s></p>"), 320)
S["v09-f12"]=lambda: f_panels(
    P(people=[("yusuf",130,186,{"seated":True,"smile":False}),("mei",250,166,{"seated":True})],
      props=[("queue",200,200,0.5)], clockat=(330,60,22,4,10), floor=0.82),
    P(people=[("yusuf",140,186,{})], props=[("warehouse",30,80,0.5),("computer",280,170,0.45)], floor=0.82),
    lt="Tue", rt="+1 week")
S["v09-f13"]=lambda: f_scene(820,400, behind=[("priya",660,170,{})],
    people=[("yusuf",130,186,{"seated":True}),("mei",230,166,{"seated":True}),
    ("lucia",330,172,{"seated":True}),("ahmad",430,180,{"seated":True}),("tomas",560,180,{})],
    counter_=(560,214,260,120), props=[("queue",180,230,0.55),("firstaid",60,70,0.5)],
    clockat=(300,70,24,4,0))
S["v09-f14"]=lambda: f_chart([("only when it's serious",10),("after a week or two",6),
    ("straight away",4),("almost never",3)])
S["v09-f15"]=lambda: f_scene(720,380, people=[("ahmad",260,180,{"smile":False})],
    props=[("busstop",120,120,0.75),("clinic",520,70,0.65),("bag",180,290,0.45)],
    clockat=(650,80,24,7,30), floor=0.82, panelbg="#dfe6ee")

# ---------------- Unit 10 ----------------
S["v10-f1"]=lambda: f_icons([("jobnotice","advertisement"),("application","application"),
    ("cv","CV"),("interview","interview"),("reference","reference"),("experience","experience"),
    ("qualification","qualification"),("salary","contract")], cols=4)
S["v10-f2"]=lambda: f_scene(780,390, people=[("ahmad",230,180,{"seated":True}),
    ("grace",490,174,{"seated":True}),("priya",610,172,{"seated":True})],
    props=[("desk",420,200,1.0),("cv",350,172,0.35),("cv",520,172,0.35)],
    window_=(60,60,150,110))
S["v10-f3"]=lambda: f_icons([("interview","handshake"),("deadline","question"),("cv","CV"),
    ("notebook","notes"),("clock","twenty minutes"),("email","follow-up")], cols=3)
S["v10-f4"]=lambda: f_realia(tbl("Kestrel Logistics","Team Leader &middot; requirements",
    ["","Requirement","Ahmad"],
    [["<b>E</b>","12 months' warehouse experience","&#10003;"],
     ["<b>E</b>","Spoken English for safety instructions","&#10003;"],
     ["<b>E</b>","Forklift certificate","&#10003;"],
     ["<b>E</b>","Right to work here","&#10003;"],
     ["<b>D</b>","Experience training others","&#10003;"],
     ["<b>D</b>","A second language","&#10003;"],
     ["<b>D</b>","Scheduling experience","&#10007;"],
     ["<b>D</b>","Degree in logistics","&#10007;"]],
    note="<b>E</b> = essential &middot; <b>D</b> = desirable. He has all four essentials."), 470)
S["v10-f5"]=lambda: f_realia(doc("Kestrel Logistics, Portmere Logistics Park",
    "Team Leader &middot; Warehouse",
    "<p><b>Hours</b> Monday&ndash;Friday, 06:00&ndash;14:00. <b>Pay</b> 14.20 an hour, rising to "
    "15.00 after probation.</p>"
    "<p>You will run a team of six on the morning shift, check deliveries against notes, and train "
    "new staff.</p>"
    "<p><b>Essential:</b> 12 months' warehouse experience &middot; spoken English for safety "
    "instructions &middot; forklift certificate &middot; the right to work here.</p>"
    "<p><b>Desirable:</b> experience training others &middot; a second language &middot; "
    "scheduling experience.</p>"
    "<p><b>Probation</b> is three months. <b>Internal applicants welcome.</b></p>",
    "<b>Closing date</b> 14 February. Interviews the following week."))
S["v10-f6"]=lambda: f_realia(doc("A. Sultani &middot; 12 Fenner Street, Portmere","CV",
    "<p style='font-size:13px'>Warehouse operative with eleven years' engineering experience "
    "abroad. Forklift certified. Three languages.</p>"+
    table_html(["Dates","Role"],
    [["2024&ndash;now","Warehouse operative &middot; Kestrel Logistics<br>"
      "<span style='font-size:12px'>Scanning, deliveries, training two new staff</span>"],
     ["<b>2022&ndash;2024</b>","<b>&mdash; (moved countries, language study)</b>"],
     ["2011&ndash;2022","Mechanical engineer &middot; Herat<br>"
      "<span style='font-size:12px'>Drawings, parts ordering, managed six people</span>"]]),
    "Languages: Dari, Pashto, English (A2) &middot; References on request"))
S["v10-f7"]=lambda: f_icons([("teacher","1"),("carer","2"),("cook","3"),("driver","4"),
    ("student","5"),("cleaner","6"),("warehouse","7"),("cashier","8")], cols=4, numbered=False)
S["v10-f8"]=lambda: f_realia(tbl("Kestrel Logistics","Interviews &middot; 21 February",
    ["Time","Candidate","Role"],
    [["09:00","L. Novak","Team Leader"],["09:40","A. Khan","Team Leader"],
     ["10:20","R. Osei","Team Leader"],["&nbsp;","A. Sultani","Team Leader"],
     ["12:00","D. Ferreira","Team Leader"]]), 440)
S["v10-f9"]=lambda: f_scene(740,390, people=[("ahmad",240,180,{"seated":True}),
    ("grace",480,174,{"seated":True}),("priya",600,172,{"seated":True})],
    props=[("desk",420,200,1.0),("cv",350,172,0.35),("notebook",300,176,0.3)],
    window_=(60,60,140,100))
S["v10-f10"]=lambda: f_realia(form("CV",
    [("Name",""),("Contact",""),("Summary",""),("Job 1 &middot; dates",""),("Job 2 &middot; dates",""),
     ("Job 3 &middot; dates",""),("Education",""),("Languages","")]))
S["v10-f11"]=lambda: f_realia(doc("A small notebook", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:17px;line-height:2.1'>"
    "1. September &mdash; pallet in wrong aisle<br>"
    "2. not me, but I found it &amp; told Grace<br>"
    "3. ASK: who trains the trainer?</p>"), 340)
S["v10-f12"]=lambda: f_panels(
    P(people=[("ahmad",140,180,{"seated":True})], props=[("chair",250,210,0.6),("notebook",220,190,0.35)],
      floor=0.82),
    P(people=[("ahmad",120,180,{"cloth":"amberish"}),("yusuf",230,186,{"cloth":"amberish"}),
      ("tomas",320,180,{"cloth":"amberish"})], props=[("warehouse",30,80,0.5)], floor=0.82),
    lt="21 Feb", rt="+2 weeks")
S["v10-f13"]=lambda: f_scene(800,390, people=[("ahmad",150,180,{"seated":True}),
    ("lucia",250,172,{"seated":True}),("oyelaran",350,170,{"seated":True}),
    ("mei",450,166,{"seated":True}),("grace",640,174,{})],
    props=[("chair",130,250,0.6),("door",700,140,1.0),("cv",180,200,0.3)])
S["v10-f14"]=lambda: f_chart([("trade",7),("teacher",6),("healthcare",5),("office work",5),
    ("student",4),("agriculture",3)])
S["v10-f15"]=lambda: f_scene(720,380, people=[("oksana" if "oksana" in CAST else "priya",250,172,{"smile":False,"seated":True})],
    props=[("table",190,255,1.2),("computer",230,170,0.5),("cv",360,185,0.35)], window_=(540,60,130,100))

# ---------------- Unit 11 ----------------
S["v11-f1"]=lambda: f_icons([("fireexit","fire exit"),("noentry","no entry"),("danger","danger"),
    ("wetfloor","wet floor"),("firstaid","first aid"),("helmet","hard hat"),
    ("hivis","high-vis vest"),("emergencycall","emergency number")], cols=4)
S["v11-f2"]=lambda: f_scene(820,400, people=[("ahmad",220,180,{"cloth":"amberish"}),
    ("yusuf",600,186,{"cloth":"amberish"})],
    props=[("wetfloor",350,230,0.65),("forklift",700,210,0.6),("door",80,140,1.0),
    ("fireexit",120,60,0.5),("danger",470,70,0.45)])
S["v11-f3"]=lambda: f_icons([("wetfloor","spill"),("noentry","blocked exit"),("danger","broken ladder"),
    ("emergencycall","trailing cable"),("lift","heavy load"),("night","poor light")], cols=3)
S["v11-f4"]=lambda: f_realia(doc("The sign and the door", None,
    "<p><b>Above the door:</b> a green fire exit sign.</p>"
    "<p style='color:#c9452c'><b>In front of the door:</b> three pallets and a stack of boxes.</p>"
    "<p>Time to move them in an emergency: <b>about four minutes</b>.</p>"
    "<p style='font-size:12px;color:#6b6861'>Everybody has walked past this since Monday. The sign "
    "is still making a promise the building is not keeping.</p>"), 440)
S["v11-f5"]=lambda: f_realia(doc("Kestrel Logistics &middot; Read this every time you read it",
    "Safety on the floor",
    "<ol><li><b>High-visibility vests</b> are worn by everybody past the yellow line. No "
    "exceptions, including visitors and including managers.</li>"
    "<li><b>Walkways</b> stay clear. If you put something in a walkway, you move it before you "
    "leave.</li>"
    "<li><b>Report a hazard the same day.</b> Tell your supervisor and write it in the book. Do not "
    "wait to see whether somebody else does it.</li>"
    "<li><b>If the alarm sounds</b>, stop, leave by the nearest exit and go to the assembly point "
    "in the north car park. Do not finish what you are doing.</li>"
    "<li><b>Nobody is ever in trouble for reporting something.</b> People have been in trouble for "
    "not reporting it.</li></ol>",
    "<b>hazard</b> &mdash; something that could hurt somebody"))
S["v11-f6"]=lambda: f_realia(tbl("Kestrel Logistics","Hazard book",
    ["Date","Location","Hazard","Reported by","Action","Closed"],
    [["2 Nov","Aisle 4","Spill, no sign","T. Alcaraz","Sign out, mopped","2 Nov"],
     ["6 Nov","Yard door","Light not working","Y. Dalmar","Bulb replaced","8 Nov"],
     ["9 Nov","Aisle 6","Exit blocked, 3 pallets","A. Sultani","&nbsp;","&nbsp;"],
     ["11 Nov","Stockroom","Ladder foot damaged","G. Abara","Taken out of use","11 Nov"]]), 520)
S["v11-f7"]=lambda: f_icons([("noentry","1"),("wetfloor","2"),("emergencycall","3"),("hivis","4"),
    ("danger","5"),("lift","6"),("fireexit","7"),("night","8")], cols=4, numbered=False)
S["v11-f8"]=lambda: f_realia(doc("Kestrel Logistics","Fire action",
    "<ol><li>Stop what you are doing.</li><li>Leave by the nearest exit.</li>"
    "<li>Do not use the lift.</li><li>Go to the assembly point and wait.</li></ol>"
    "<p><b>Assembly point:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; car park</p>"
    "<p><b>Emergency number:</b> 112</p>"
    "<p><b>Fire marshal:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>"), 420)
S["v11-f9"]=lambda: f_scene(760,390, people=[("ahmad",250,180,{"cloth":"amberish"}),
    ("lucia",450,172,{})], props=[("hivis",600,180,0.5),("forklift",680,215,0.55),
    ("danger",120,70,0.45)])
S["v11-f10"]=lambda: f_realia(tbl("","Hazard book",["Date","Time","Location","Hazard","Reported by","Action"],
    [["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]]), 540)
S["v11-f11"]=lambda: f_realia(form("Kestrel Logistics &mdash; Hazard entry",
    [("Date","9 November"),("Time","06:20"),("Location","Aisle 6, fire exit"),
     ("Hazard","Three pallets and a stack of boxes in front of the fire exit. There since Monday."),
     ("Reported by","A. Sultani"),("Action","Moved same day. Yellow box painted 11 Nov."),
     ("Closed","11 November &middot; G. Abara")]))
S["v11-f12"]=lambda: f_panels(
    P(people=[("yusuf",120,186,{"cloth":"amberish"}),("tomas",230,180,{"cloth":"amberish"})],
      props=[("door",320,140,0.9),("noentry",340,60,0.4)], floor=0.82),
    P(props=[("door",200,140,0.9),("fireexit",220,60,0.45)],
      sign_=(90,210,180,44,"KEEP CLEAR",AMBER,13), floor=0.82),
    lt="Monday", rt="Thursday")
S["v11-f13"]=lambda: f_scene(840,400, people=[("ahmad",140,180,{"cloth":"amberish"}),
    ("yusuf",250,186,{"cloth":"amberish"}),("grace",370,174,{"cloth":"amberish"}),
    ("tomas",480,180,{"cloth":"amberish"}),("lucia",640,172,{})],
    props=[("wetfloor",570,240,0.55),("forklift",740,215,0.55),("fireexit",80,60,0.45),
    ("hivis",760,80,0.4)])
S["v11-f14"]=lambda: f_chart([("think so",9),("know exactly",7),("no",5),("never looked",3)])
S["v11-f15"]=lambda: f_scene(740,390, people=[("tomas",420,180,{"cloth":"amberish"}),
    ("ahmad",190,180,{"cloth":"amberish","smile":False})],
    props=[("danger",560,70,0.5),("door",100,140,0.95),("lift",640,200,0.55)])

# ---------------- Unit 12 ----------------
S["v12-f1"]=lambda: f_icons([("cinema","cinema"),("football","football"),("museum","museum"),
    ("swimming","swimming"),("picnic","picnic"),("concert","concert"),("beach","beach"),
    ("walk","walk")], cols=4)
S["v12-f2"]=lambda: f_scene(800,390, people=[("nadia",200,174,{"seated":True}),
    ("priya",320,172,{"seated":True}),("mei",430,166,{"seated":True}),
    ("linh" if "linh" in CAST else "lucia",540,172,{"seated":True})],
    props=[("table",320,255,1.3),("computer",360,200,0.45),("timetable",640,80,0.55)],
    window_=(70,60,130,100))
S["v12-f3"]=lambda: f_icons([("studentcard","ticket"),("jobnotice","listing"),("sun","forecast"),
    ("timetable","timetable"),("map","map"),("bag","bag")], cols=3)
S["v12-f4"]=lambda: f_realia(doc("Harbour Museum", None,
    "<p style='font-family:Bricolage Grotesque,sans-serif;font-size:26px;font-weight:800;"
    "color:#c9452c;margin:4px 0'>FREE &mdash; first Saturday</p>"
    "<p style='font-size:12px;color:#6b6861'>Free entry to the permanent collection <b>only</b>. "
    "The <i>Ships and Cities</i> exhibition is 12, booking advised.</p>"
    "<p style='margin-top:12px'>The word <i>free</i> is true. The word <i>only</i> is small.</p>"), 430)
S["v12-f5"]=lambda: f_realia(doc("Portmere Community Pages","What's on this Saturday",
    "<p><b>Harbour Museum</b> &middot; 10:00&ndash;17:00 &middot; Quay Road<br>"
    "Free entry to the permanent collection, first Saturday of the month. The <i>Ships and Cities</i> "
    "exhibition is 12, booking advised.</p>"
    "<p><b>Market Square Food Market</b> &middot; 09:00&ndash;14:00 &middot; Market Square<br>"
    "Free. All ages. Cash and card.</p>"
    "<p><b>Film: afternoon screening</b> &middot; 14:30 &middot; Community Center, Quay Road<br>"
    "3, pay at the door. Subtitled. Doors 14:00.</p>"
    "<p><b>Family swim</b> &middot; 11:00&ndash;13:00 &middot; Northside Pool<br>"
    "2 adults, children free. No booking. Bring a lock for the locker.</p>",
    "<b>booking advised</b> &mdash; you should book, or you may not get in"))
S["v12-f6"]=lambda: f_realia(tbl("Portmere Transit","Saturday &middot; Fenner St &harr; Quay Road",
    ["Out","Back"],
    [["08:20","11:10"],["09:20","12:10"],["10:20","14:10"],["11:20","16:10"],
     ["12:20","<b>19:00 &mdash; last</b>"]], numcols=(0,1),
    note="Journey 25 minutes. No service after 19:00 on Saturdays."), 400)
S["v12-f7"]=lambda: f_icons([("bed","1"),("busstop","2"),("museum","3"),("shopping","4"),
    ("picnic","5"),("swimming","6"),("cinema","7"),("bus","8")], cols=4, numbered=False)
S["v12-f8"]=lambda: f_realia(tbl("Saturday","The plan",["Time","What","Cost"],
    [["09:20","Bus to Quay Road","2.40"],["&nbsp;","&nbsp;","&nbsp;"],
     ["13:00","Market Square &mdash; meet","&mdash;"],["&nbsp;","&nbsp;","&nbsp;"],
     ["14:30","Film","3.00"],["19:00","<b>LAST BUS</b>","2.40"]], numcols=(2,)), 420)
S["v12-f9"]=lambda: f_scene(820,400, people=[("nadia",180,174,{}),("priya",290,172,{}),
    ("mei",390,166,{}),("linh" if "linh" in CAST else "lucia",500,172,{})],
    props=[("shopping",640,215,0.6),("sun",700,60,0.6),("square",60,70,0.55),("bag",230,285,0.4)],
    counter_=(600,226,220,118))
S["v12-f10"]=lambda: f_realia(tbl("","Saturday planner",["Time","Where","Cost"],
    [["09:00","",""],["10:00","",""],["11:00","",""],["12:00","",""],["13:00","",""],
     ["14:00","",""],["16:00","",""],["18:00","",""],["<b>Total</b>","","&nbsp;"]], numcols=(2,)), 420)
S["v12-f11"]=lambda: f_realia(doc("Friday night", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:17px;line-height:2'>"
    "<s>beach &mdash; too far</s><br><u>museum &mdash; free!</u><br>"
    "<s>concert &mdash; 22 each</s><br><u>market &mdash; free</u><br>"
    "<s>swimming &mdash; forgot towels</s><br><s>stay in</s></p>"), 330)
S["v12-f12"]=lambda: f_panels(
    P(people=[("nadia",110,174,{"seated":True}),("priya",190,172,{"seated":True}),
      ("mei",270,166,{"seated":True}),("linh" if "linh" in CAST else "lucia",350,172,{"seated":True})],
      props=[("table",180,235,1.2),("computer",220,195,0.4)], floor=0.82),
    P(people=[("nadia",110,174,{"seated":True}),("priya",190,172,{"seated":True}),
      ("mei",270,166,{"seated":True})], props=[("bus",300,150,1.1),("bag",150,230,0.4)],
      floor=0.82, panelbg="#2c3440"),
    lt="Friday", rt="19:00")
S["v12-f13"]=lambda: f_scene(840,400, people=[("nadia",120,174,{}),("priya",210,172,{}),
    ("mei",300,166,{}),("linh" if "linh" in CAST else "lucia",390,172,{}),
    ("tomas",520,180,{}),("yusuf",620,186,{}),("ahmad",720,180,{})],
    props=[("shopping",460,230,0.5),("sun",780,60,0.55),("square",50,70,0.5),
    ("concert",680,80,0.45)], clockat=(250,70,24,1,0))
S["v12-f14"]=lambda: f_chart([("rest",9),("see people",7),("catch up on jobs",6),
    ("go somewhere",5),("study",3)])
S["v12-f15"]=lambda: f_scene(740,390, people=[("yusuf",280,186,{"smile":False,"seated":True}),
    ("lucia",560,172,{}),("tomas",650,180,{})],
    props=[("chair",250,235,0.7),("park",90,80,0.6),("phone",360,195,0.4),("walk",470,195,0.5)],
    floor=0.84)
