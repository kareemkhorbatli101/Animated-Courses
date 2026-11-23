# -*- coding: utf-8 -*-
"""Book 3 figure specs, Units 5 to 8."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

# ---------------- Unit 5 ----------------
S["w05-f1"]=lambda: f_icons([("induction","induction"),("cupboard","locker"),("hivis","vest"),
    ("scanner","scanner"),("timesheet","timesheet"),("teacher","supervisor"),("breakroom","break room"),
    ("idcard","badge"),("timetable","rota"),("danger","safety briefing")], cols=5)
S["w05-f2"]=lambda: f_scene(840,410, people=[("bah",700,176,{}),("samira",150,172,{"seated":True}),
    ("yusuf",250,186,{"seated":True}),("tomas",350,180,{"seated":True}),("ahmad",450,180,{"seated":True}),
    ("mei",540,166,{"seated":True}),("oskar",610,180,{}),("linh",180,172,{}),("grace",300,174,{})],
    board=(500,26,250,110,"TODAY",[("1 PPE","3 Report"),("2 Walkways","4 Breaks")]),
    props=[("breakroom",60,210,0.55),("clock",60,50,0.4)])
S["w05-f3"]=lambda: f_icons([("meeting","ask a question"),("teacher","show somebody how"),
    ("scanner","lend something"),("form","check a form"),("danger","point at a sign"),
    ("notebook","write it down")], cols=3)
S["w05-f4"]=lambda: f_realia(tbl("Timesheet app","This week",
    ["Day","Start","Finish","Break"],
    [["Mon","06:00","14:00","30 min"],["Tue","06:00","14:00","30 min"],
     ["Wed","06:00","14:00","<b>30 min</b>"],["Thu","06:00","14:00","30 min"],
     ["Fri","06:00","14:00","<b>30 min</b>"]],
    note="Handwritten beside it: <i>Wed and Fri &mdash; break worked, goods-in short-staffed.</i>"), 460)
S["w05-f5"]=lambda: f_realia(doc("Northgate Distribution · Induction, page 1",
    "Your first week on the floor",
    "<p><b>1. PPE.</b> A high-visibility vest and safety boots at all times beyond the yellow line. "
    "Gloves for anything with a sharp edge. We issue them; you do not buy them.</p>"
    "<p><b>2. The floor.</b> Walkways are marked in yellow and must stay clear. If a forklift is "
    "moving, it has right of way. Make eye contact with the driver before you cross.</p>"
    "<p><b>3. Reporting.</b> Tell your supervisor the same day about anything that nearly went "
    "wrong, even if nobody was hurt and nothing broke.</p>"
    "<p><b>4. Breaks.</b> Thirty minutes unpaid on a shift over six hours. If you work through a "
    "break, write it on your timesheet that day. Nobody will chase you for it.</p>",
    "<b>Near misses.</b> A near miss is an accident that did not happen this time. We record about "
    "forty a month and we would rather have more, not fewer. Reporting one is never held against "
    "you, and we do not record who was involved unless you ask us to."))
S["w05-f6"]=lambda: f_realia(tbl("Week ending 19 May","Timesheet · S. Haddad",
    ["Day","Start","Finish","Break","Hours","Notes"],
    [["Mon","06:00","14:00","30","7.5","&nbsp;"],["Tue","06:00","14:00","30","7.5","&nbsp;"],
     ["Wed","06:00","14:30","30","8.0","&nbsp;"],["Thu","06:00","14:00","30","7.5","&nbsp;"],
     ["Fri","06:00","14:30","30","8.0","&nbsp;"],
     ["<b>Total</b>","","","","<b>38.5</b>","&nbsp;"]], numcols=(3,4)), 560)
S["w05-f7"]=lambda: f_scene(860,420, people=[("tomas",120,180,{"cloth":"amberish"}),
    ("yusuf",230,186,{"cloth":"amberish"}),("ahmad",330,180,{}),("samira",430,172,{"cloth":"amberish"}),
    ("oskar",760,180,{"cloth":"amberish","smile":False})],
    props=[("forklift",520,190,0.7),("warehouse",40,50,0.5),("timesheet",650,60,0.4),
    ("danger",330,60,0.4),("wetfloor",640,210,0.5),("queue",180,60,0.4)])
S["w05-f8"]=lambda: f_realia(tbl("Induction checklist","S. Haddad · week 1",
    ["","Item","Done"],
    [["1","Site tour","&#10003;"],["2","PPE issued","&#10003;"],["3","Fire exits","&#10003;"],
     ["4","Walkways and forklifts","&#10003;"],["5","Scanner training","&#10003;"],
     ["6","Timesheet system","&#10003;"],["7","Breaks and the rota","&#10003;"],
     ["8","Manual handling","&nbsp;"],["9","Goods-in desk cover","&nbsp;"],
     ["10","Reporting a near miss","&nbsp;"]],
    note="Supervisor signature: _______________________   Date: ___________"), 470)
S["w05-f9"]=lambda: f_scene(780,400, behind=[("samira",250,172,{"cloth":"amberish"})],
    people=[("oskar",520,180,{})],
    counter_=(150,214,320,124),
    props=[("scanner",200,150,0.45),("phone",560,170,0.4),("warehouse",650,60,0.5),
    ("forklift",690,210,0.5)])
S["w05-f10"]=lambda: f_realia(tbl("","Timesheet",["Day","Start","Finish","Break","Hours","Notes"],
    [["Mon","","","","",""],["Tue","","","","",""],["Wed","","","","",""],["Thu","","","","",""],
     ["Fri","","","","",""],["<b>Total</b>","","","","",""]]), 560)
S["w05-f11"]=lambda: f_realia(doc("Timesheet · notes column", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:18px;line-height:2'>"
    "Wed 15 May &mdash; break worked<br>goods-in short-staffed<br>S.H.</p>"), 330)
S["w05-f12"]=lambda: f_panels(
    P(people=[("samira",130,172,{"smile":False,"seated":True}),("bah",300,176,{})],
      props=[("breakroom",40,200,0.5),("notebook",190,190,0.3),("board",330,60,0.45)], floor=0.82),
    P(behind=[("samira",120,172,{"cloth":"amberish"})], people=[("oskar",280,180,{})],
      counter_=(60,210,190,110), props=[("scanner",100,150,0.4)], floor=0.82),
    lt="Monday", rt="Friday")
S["w05-f13"]=lambda: f_scene(880,420, people=[("samira",110,172,{"cloth":"amberish"}),
    ("tomas",200,180,{"cloth":"amberish"}),("yusuf",290,186,{"cloth":"amberish"}),
    ("ahmad",380,180,{"cloth":"amberish"}),("mei",470,166,{"cloth":"amberish"}),
    ("linh",560,172,{"cloth":"amberish"}),("bah",790,176,{}),("oskar",680,180,{})],
    board=(600,22,240,100,"SHIFT 06:00",[("1 PPE","3 Report"),("2 Walkways","4 Breaks")]),
    props=[("forklift",240,215,0.55),("timesheet",40,50,0.42),("warehouse",120,50,0.45)])
S["w05-f14"]=lambda: f_chart([("one helpful colleague",11),("writing things down",8),
    ("watching",6),("asking a lot",5),("nothing helped",2)])
S["w05-f15"]=lambda: f_scene(820,400, floor=0.80, panelbg="#242c38", floorbg="#30394a",
    behind=[("ahmad",250,180,{"cloth":"amberish","smile":False})],
    people=[("oskar",580,180,{})], counter_=(150,214,300,124),
    props=[("form",208,150,0.4),("warehouse",660,66,0.5),("forklift",700,0,0.55)],
    clockat=(60,56,22,23,10))

# ---------------- Unit 6 ----------------
S["w06-f1"]=lambda: f_icons([("sim","SIM card"),("data","data"),("form","contract"),
    ("utilitybill","bill"),("wifi","wifi"),("signal","signal"),("voicemail","voicemail"),
    ("messages","messages"),("router","router"),("topup","top-up")], cols=5)
S["w06-f2"]=lambda: f_scene(820,400, behind=[("hana",560,166,{})], people=[("linh",250,172,{})],
    counter_=(440,216,330,124),
    props=[("phone",300,160,0.4),("utilitybill",200,170,0.35),("computer",500,150,0.4),
    ("sim",70,55,0.45),("pricetag",150,55,0.4)])
S["w06-f3"]=lambda: f_icons([("computer","video call"),("messages","group message"),
    ("phone","missed call"),("voicemail","voicemail"),("email","email"),
    ("messages","read, not answered")], cols=3)
S["w06-f4"]=lambda: f_realia(doc("Linkwave · your plan", None,
    tags([("40 GB","allowance",None),("11 GB","actually used","average of 6 months")])+
    "<p style='margin-top:14px'><b>You pay for 40. You use 11.</b></p>"
    "<table style='width:100%;margin-top:10px;font-size:13px'>"
    "<tr><td>Plan A &mdash; 40 GB</td><td align='right'><b>28.00</b></td></tr>"
    "<tr><td>Plan B &mdash; 20 GB</td><td align='right'>19.00</td></tr>"
    "<tr><td>Plan C &mdash; 10 GB</td><td align='right'>14.00</td></tr></table>"), 450)
S["w06-f5"]=lambda: f_realia(tbl("Linkwave · compare","Three plans",
    ["","Plan A","Plan B","Plan C"],
    [["Data","40 GB","20 GB","10 GB"],["Monthly","28.00","19.00","14.00"],
     ["Term","24 months","12 months","1 month"],
     ["At the end","rolls on","rolls on","&mdash;"],
     ["Exit fee","full balance","2 months","none"],
     ["Over the year","336.00","228.00","168.00"]], numcols=(1,2,3),
    note="Prices may rise once a year. The rise is set out in the contract, not here."), 520)
S["w06-f6"]=lambda: f_realia(tbl("Linkwave · 1–30 April","Bill for L. Pham",
    ["Item","Amount"],
    [["Plan A, monthly charge","28.00"],["Call to a number outside the allowance (14 min)","8.40"],
     ["Picture messages (3)","1.20"],["Late payment fee","5.00"],
     ["<b>Total</b>","<b>42.60</b>"]], numcols=(1,),
    note="Used this month: data 11 GB of 40 &middot; minutes 210 of unlimited &middot; messages 340"), 470)
S["w06-f7"]=lambda: f_realia(screen("Flat 2 · group",
    [("Ana, 18:42","no hot water again"),("Linh, 18:51","mine too"),
     ("Ana, 19:02","has anyone told him"),("Tomás, 22:15","emailed the landlord, 48 hr rule"),
     ("Ana, 22:16","thank you")], btn=None, flags=(2,)), 460)
S["w06-f8"]=lambda: f_scene(780,390, behind=[("hana",520,166,{})], people=[("linh",250,172,{})],
    counter_=(400,214,340,124),
    props=[("phone",300,155,0.4),("utilitybill",190,170,0.35),("computer",460,150,0.4),
    ("data",60,55,0.45)])
S["w06-f9"]=lambda: f_realia(tbl("","Compare three plans",["","Plan 1","Plan 2","Plan 3"],
    [["Data","","",""],["Monthly","","",""],["Term","","",""],["Exit fee","","",""],
     ["Over the year","","",""]]), 480)
S["w06-f10"]=lambda: f_realia(doc("To: E. Caruso · 14 November","Boiler · Flat 2",
    "<p>Dear Mr Caruso,</p>"
    "<p>The boiler stopped on <b>Tuesday 12 November</b>. There has been no hot water since then. "
    "Four of us live in the flat.</p>"
    "<p>We have reset it twice using the instructions on the front, and checked that the pressure "
    "gauge is in the green. It restarts and stops again within a minute.</p>"
    "<p>Could you tell us <b>when an engineer will come</b>? I understand heating and hot water "
    "fall under the 24-hour category in the agreement.</p>",
    "T. Alvarez · Flat 2, 12 Market Street · 14 November, 22:15"))
S["w06-f11"]=lambda: f_panels(
    P(floor=0.82, panelbg="#242c38", floorbg="#30394a",
      people=[("linh",140,172,{"smile":False})],
      props=[("phone",232,158,0.42),("cooker",312,0,0.6),("messages",36,44,0.38)]),
    P(behind=[("hana",290,166,{})], people=[("linh",130,172,{})],
      counter_=(220,208,160,110), props=[("card",160,158,0.33)], floor=0.82),
    lt="Tuesday, 23:00", rt="Saturday")

S["w06-f12"]=lambda: f_scene(880,410, behind=[("hana",600,166,{}),("grace",700,174,{})],
    people=[("linh",120,172,{}),("priya",210,172,{}),("mei",300,166,{}),("ahmad",390,180,{}),
    ("lucia",470,172,{}),("tomas",770,180,{})],
    counter_=(540,216,320,124),
    props=[("phone",60,50,0.4),("sim",150,50,0.4),("pricetag",240,50,0.4),("router",330,50,0.4)])
S["w06-f13"]=lambda: f_chart([("video call",10),("messages",8),("voice call",5),
    ("voice notes",4),("rarely",3)], unit="students")
S["w06-f14"]=lambda: f_scene(790,400, floor=0.80, panelbg="#242c38", floorbg="#30394a",
    people=[("bah",270,176,{"smile":False,"seated":True})],
    props=[("table",200,0,1.2),("computer",236,176,0.5),("essay",388,192,0.3),
    ("notebook",452,196,0.3)], clockat=(92,62,24,23,40))

# ---------------- Unit 7 ----------------
S["w07-f1"]=lambda: f_icons([("pan","pan"),("choppingboard","chopping board"),("knife","knife"),
    ("jug","measuring jug"),("tin","tin"),("packet","packet"),("portion","portion"),
    ("fridge","fridge"),("cooker","oven"),("timer","timer")], cols=5)
S["w07-f2"]=lambda: f_scene(840,400, people=[("tomas",300,180,{}),("mei",620,166,{"seated":True})],
    counter_=(120,214,330,124),
    props=[("packet",170,150,0.4),("tin",240,155,0.35),("mealkit",60,55,0.5),
    ("table",560,250,1.1),("receipt",600,200,0.3),("bag",700,205,0.4),("cooker",760,215,0.6)])
S["w07-f3"]=lambda: f_icons([("packet","a kilo"),("packet","500 grams"),("jug","a liter"),
    ("portion","half a packet"),("spoon","two tablespoons"),("portion","a handful")], cols=3)
S["w07-f4"]=lambda: f_realia(doc("The same dinner for two", None,
    tags([("11.00","meal kit · 20 min",None),("4.20","market · 35 min","and four meals' worth left")])+
    "<p style='margin-top:14px'>The kit costs <b>2.6 times</b> as much and saves <b>15 minutes</b>.</p>"
    "<p style='font-size:12px;color:#6b6861'>Whether that is worth it depends on which you have "
    "less of.</p>"), 450)
S["w07-f5"]=lambda: f_realia(doc("Portmere City Council · Food and waste, leaflet 4",
    "Dates on food: what they mean",
    "<p>Two different dates appear on food sold here, and only one of them is about safety.</p>"
    "<p><b>Use by</b> is a safety date. After it, food may be unsafe even if it looks and smells "
    "normal. It appears on meat, fish and ready meals. Do not eat food after its use-by date. You "
    "can freeze it up to the date and use it later.</p>"
    "<p><b>Best before</b> is a quality date. After it, food is still safe but may have lost "
    "flavor or texture. It appears on rice, pasta, tins and biscuits. A tin a year past its best "
    "before date is not dangerous; it is only less good.</p>"
    "<p><b>Three things that help:</b> keep the fridge at or below 5 degrees; put new shopping "
    "behind the old; freeze bread on the day you buy it.</p>",
    "Worldwide, households throw away about <b>79 kilos of food per person</b> each year &mdash; "
    "631 million tonnes, or 60 per cent of all the food that is wasted "
    "(UN Environment Programme, <i>Food Waste Index Report 2024</i>). A large part of it goes "
    "because of a date on a packet, not because anything was wrong with it."))
S["w07-f6"]=lambda: f_realia(doc("Freshline meal kit · card 12","Chickpea and tomato stew",
    "<p><b>Serves 2 &middot; 20 minutes</b></p>"
    "<table style='width:100%;font-size:13px'>"
    "<tr><td>1 tin chickpeas (400 g)</td><td>1 onion</td></tr>"
    "<tr><td>1 tin chopped tomatoes (400 g)</td><td>2 cloves garlic</td></tr>"
    "<tr><td>2 tablespoons oil</td><td>1 teaspoon cumin</td></tr>"
    "<tr><td>200 ml water</td><td>a handful of parsley</td></tr></table>"
    "<ol><li>Chop the onion and the garlic.</li>"
    "<li>Heat the oil in a pan. Cook the onion for 5 minutes.</li>"
    "<li>Add the garlic and the cumin. Cook for 1 minute.</li>"
    "<li>Add the tomatoes, the chickpeas and the water. Simmer for 12 minutes.</li>"
    "<li>Take it off the heat. Add the parsley.</li></ol>",
    "Per portion: 410 kcal &middot; protein 16 g &middot; salt 1.1 g"))
S["w07-f7"]=lambda: f_icons([("packet","chickpeas"),("tin","chopped tomatoes"),("onion","onion"),
    ("packet","garlic"),("jug","oil, 2 tbsp"),("packet","cumin"),("jug","water, 200 ml"),
    ("portion","parsley"),("choppingboard","board"),("notebook","recipe card")], cols=5)
S["w07-f8"]=lambda: f_realia(tbl("Marrow &amp; Son","Today",
    ["Item","Price"],[["Onions, per kg","1.20"],["Tomatoes, per kg","2.40"],
    ["Garlic, each","0.30"],["Parsley, bunch","&nbsp;"],["Chickpeas, tin","0.65"],
    ["Potatoes, per kg &mdash; <b>END OF DAY</b>","0.80"],
    ["Peppers, 3 for &mdash; <b>END OF DAY</b>","1.00"]], numcols=(1,)), 430)
S["w07-f9"]=lambda: f_scene(800,400, behind=[("hana",560,166,{})], people=[("mei",270,166,{})],
    counter_=(430,218,340,122),
    props=[("phone",320,160,0.4),("onion",470,160,0.35),("tomato",530,160,0.35),
    ("shopping",150,230,0.5),("pricetag",70,55,0.42)])
S["w07-f10"]=lambda: f_realia(tbl("","Shopping list",["Amount","Item","Price"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],
     ["<b>Total</b>","",""]], note="Left over after this meal:"), 440)
S["w07-f11"]=lambda: f_realia(tbl("Two receipts","Same dinner",
    ["Freshline","Marrow &amp; Son"],
    [["Meal kit, chickpea stew &nbsp;&nbsp; <b>11.00</b>",
      "1 onion &nbsp; 0.25<br>2 garlic &nbsp; 0.60<br>1 tin tomatoes &nbsp; 0.70<br>"
      "1 tin chickpeas &nbsp; 0.65<br>parsley &nbsp; 0.80<br>oil (part of 1.20 bottle) &nbsp; 1.20<br>"
      "<b>4.20</b>"]]), 500)
S["w07-f12"]=lambda: f_panels(
    P(behind=[("hana",290,166,{})], people=[("mei",130,166,{})],
      counter_=(220,210,160,110), props=[("phone",160,150,0.35),("onion",250,150,0.3)], floor=0.82),
    P(people=[("mei",150,166,{"seated":True})],
      props=[("table",110,230,1.1),("portion",170,185,0.35),("book",260,195,0.3)],
      floor=0.82, panelbg="#2c3440"),
    lt="11 a.m.", rt="9 p.m.")
S["w07-f13"]=lambda: f_scene(900,420, behind=[("hana",250,166,{}),("bah",600,176,{})],
    people=[("mei",120,166,{}),("lucia",400,172,{}),("priya",480,172,{}),("tomas",700,180,{}),
    ("ahmad",780,180,{}),("linh",840,172,{})],
    counter_=(180,222,220,118),
    props=[("shopping",60,240,0.45),("pricetag",330,55,0.4),("onion",230,160,0.3),
    ("tomato",290,160,0.3),("sun",820,50,0.5)])
S["w07-f14"]=lambda: f_chart([("under 20 minutes",9),("20 to 40",8),("40 to 60",5),
    ("over an hour",3)], unit="students")
S["w07-f15"]=lambda: f_scene(800,400, floor=0.80, panelbg="#242c38", floorbg="#30394a",
    people=[("oskar",290,180,{"smile":False})],
    counter_=(150,214,300,124),
    props=[("packet",206,148,0.4),("fridge",600,0,0.65),("bins",690,0,0.5),
    ("receipt",352,152,0.3)], clockat=(72,58,22,23,0))

# ---------------- Unit 8 ----------------
S["w08-f1"]=lambda: f_icons([("fall","a fall"),("cut","a cut"),("burn","a burn"),("sprain","a sprain"),
    ("bruise","a bruise"),("bump","a bang on the head"),("nosebleed","a nosebleed"),
    ("sick","feeling sick"),("thermometer","a temperature"),("rash","a rash")], cols=5)
S["w08-f2"]=lambda: f_scene(880,420, behind=[("haddad",640,186,{})],
    people=[("yusuf",150,186,{"seated":True}),("hana",230,166,{"seated":True}),
    ("mei",330,166,{"seated":True}),("lucia",410,172,{"seated":True}),
    ("priya",490,172,{"seated":True}),("oskar",790,180,{"seated":True}),
    ("linh",840,172,{"seated":True}),("ahmad",80,180,{"seated":True})],
    counter_=(560,220,290,120),
    props=[("chair",120,230,0.6),("chair",300,230,0.6),("chair",450,230,0.6),
    ("waitscreen",380,45,0.55),("triage",600,150,0.4)])
S["w08-f3"]=lambda: f_icons([("triage","triage desk"),("waitscreen","waiting screen"),
    ("xray","X-ray"),("bandage","bandage"),("sling","sling"),("discharge","discharge letter")], cols=3)
S["w08-f4"]=lambda: f_realia(tbl("Portmere health service","Where to go",
    ["Service","For","Typical wait"],
    [["Pharmacy","coughs, rashes, advice","minutes"],
     ["Phone line 111","not sure where to go","20 min on the phone"],
     ["Urgent care","cuts, sprains, suspected breaks","2 to 5 hours"],
     ["Emergency department","chest pain, heavy bleeding, breathing","seen by priority"]],
    note="<b>A suspected broken bone goes to urgent care</b>, not to the emergency department, "
    "unless the bone has come through the skin or the limb is badly out of shape."), 520)
S["w08-f5"]=lambda: f_realia(doc("Portmere Urgent Care · waiting-room notice",
    "Why the order changes",
    "<p>You will not be seen in the order you arrived. A nurse assesses everybody shortly after "
    "they arrive and sorts them into four groups.</p>"
    "<p><b>1 Immediate</b> &mdash; a threat to life. Seen at once.<br>"
    "<b>2 Very urgent</b> &mdash; seen within about ten minutes.<br>"
    "<b>3 Urgent</b> &mdash; seen within about an hour.<br>"
    "<b>4 Standard</b> &mdash; most people here. Seen when the urgent groups allow.</p>"
    "<p>Somebody who arrived after you may be seen before you. That is the system working, not "
    "the system failing. If you feel worse while you are waiting, tell the desk. Being reassessed "
    "is normal and nobody will mind.</p>",
    "<b>Please bring:</b> a list of any medicines you take, the name of your doctor, and, for a "
    "child, their date of birth. If you need an interpreter, say so at the desk."))
S["w08-f6"]=lambda: f_realia(doc("Portmere Urgent Care · 22 September","Discharge letter",
    "<p><b>Patient:</b> Amira Yusuf &middot; <b>DOB:</b> 14.03.2015 &middot; <b>Seen:</b> 19:40</p>"
    "<p><b>What happened:</b> Fell from a wall at about 14:00. Landed on the left arm. No loss of "
    "consciousness. No head injury.</p>"
    "<p><b>What was done:</b> Examination, X-ray of the left forearm.</p>"
    "<p><b>Result:</b> No fracture. Soft tissue injury to the left wrist.</p>"
    "<ol><li>Sling for comfort, three to four days. Not longer.</li>"
    "<li>Pain relief as on the packet, for her weight, not her age.</li>"
    "<li>Move the fingers and elbow normally from tomorrow.</li>"
    "<li>Back to school as soon as she is comfortable.</li></ol>",
    "<b>Come back</b> if the pain is worse after 48 hours, if the hand becomes pale or cold, or if "
    "she cannot move her fingers. A copy has gone to your doctor."))
S["w08-f7"]=lambda: f_icons([("fall","off a wall"),("burn","at the cooker"),("sprain","on a step"),
    ("cut","a finger"),("nosebleed","a nosebleed"),("tired","dizzy standing up"),
    ("bump","on a shelf"),("thermometer","in bed")], cols=4)
S["w08-f8"]=lambda: f_realia(tbl("Urgent care","Now waiting",
    ["Priority","Waiting"],[["1 Immediate","0"],["2 Very urgent","1"],["3 Urgent","&nbsp;"],
    ["4 Standard","19"]], numcols=(1,),
    note="Estimated wait for priority 4: <b>3 h 50</b> &middot; Last updated 19:05"), 400)
S["w08-f9"]=lambda: f_scene(800,400, behind=[("nkemelu",520,176,{})],
    people=[("yusuf",240,186,{}),("hana",320,150,{})],
    counter_=(420,218,340,122),
    props=[("computer",480,150,0.4),("waitscreen",80,50,0.5),("form",290,165,0.3)])
S["w08-f10"]=lambda: f_realia(tbl("","Information card",["",""],
    [["Name and date of birth",""],["What happened, and when",""],["Head injury? yes / no",""],
     ["Last food and drink",""],["Medicines",""],["Allergies",""]]), 440)
S["w08-f11"]=lambda: f_realia(doc("A folded sheet of paper", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:18px;line-height:1.9'>"
    "Amira Yusuf, 14.03.2015<br>fell off a wall, about 2 p.m., left arm<br>"
    "no bang on the head<br>last food 8 a.m.<br>no medicines<br>no allergies</p>"), 340)
S["w08-f12"]=lambda: f_panels(
    P(people=[("yusuf",140,186,{"seated":True,"smile":False}),("hana",260,150,{"seated":True})],
      props=[("car",40,180,0.9),("form",190,185,0.3)], floor=0.84),
    P(people=[("yusuf",160,186,{"seated":True}),("hana",230,150,{"seated":True})],
      props=[("chair",120,225,0.6),("sling",300,170,0.4),("waitscreen",40,45,0.4)], floor=0.84),
    lt="15:10", rt="19:40")
S["w08-f13"]=lambda: f_scene(900,430, behind=[("haddad",660,186,{}),("nkemelu",760,176,{})],
    people=[("yusuf",110,186,{"seated":True}),("hana",180,150,{"seated":True}),
    ("mei",260,166,{"seated":True}),("lucia",340,172,{"seated":True}),
    ("priya",420,172,{"seated":True}),("ahmad",500,180,{}),("linh",560,172,{}),
    ("oskar",840,180,{"seated":True})],
    counter_=(600,222,280,118),
    props=[("chair",90,235,0.6),("chair",240,235,0.6),("chair",390,235,0.6),
    ("waitscreen",300,42,0.5),("jobnotice",60,45,0.4),("cashmachine",870,190,0.45)])
S["w08-f14"]=lambda: f_chart([("urgent care",9),("pharmacy",7),("emergency department",6),
    ("phone line",4),("don't know",3)], unit="students")
S["w08-f15"]=lambda: f_scene(800,400, people=[("nadia",260,174,{"smile":False}),
    ("oyelaran",400,170,{"seated":True}),("nkemelu",560,176,{})],
    props=[("form",480,165,0.35),("clinic",80,55,0.5),("chair",380,225,0.6)], floor=0.84)
