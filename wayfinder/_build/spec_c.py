# -*- coding: utf-8 -*-
"""Figure specs, Units 9 to 12."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

# ---------------- Unit 9 ----------------
S["u09-f1"]=lambda: f_icons([("shirt","shirt"),("trousers","trousers"),("shoes","shoes"),("coat","coat"),
    ("hat","hat"),("uniform","uniform"),("gloves","gloves"),("scarf","scarf")], cols=4)
S["u09-f2"]=lambda: f_scene(780,390, behind=[("tomas",540,180,{})], people=[("nadia",200,174,{})],
    counter_=(430,222,350,122), props=[("cafe",470,162,0.45),("rain",80,70,0.7),("coat",700,150,0.5)],
    window_=(60,150,150,110))
S["u09-f3"]=lambda: f_icons([("sun","sunny"),("rain","rainy"),("snow","snowy"),("wind","windy"),
    ("cloud","cloudy"),("sizechart","size chart")], cols=3)
S["u09-f4"]=lambda: f_realia(doc("Two ways to say the same size", None,
    tags([("92","S &middot; chest in cm",None),("100","M &middot; chest in cm",None),
          ("108","L &middot; chest in cm",None)])+
    "<p style='margin-top:14px'>The online page gives only <b>S, M, L</b> &mdash; and a line that "
    "says <i>sizes may vary</i>.</p>"), 430)
S["u09-f5"]=lambda: f_realia(doc("Portmere Workwear &middot; Quay Road","Returns",
    "<p>You can exchange or return any item within <b>28 days</b>.</p>"
    "<p>Bring your <b>receipt</b>. No receipt, no refund.</p>"
    "<p>The item must be <b>unworn</b>, with the label still on it.</p>"
    "<p><b>Sale items:</b> exchange only. We do not give money back on sale items.</p>",
    "<b>exchange</b> &mdash; change it for a different one &middot; <b>unworn</b> &mdash; you have not worn it"))
S["u09-f6"]=lambda: f_realia(tbl("Portmere Workwear","Size chart &middot; centimetres",
    ["Size","Chest","Waist","Sleeve"],[["S","92","78","62"],["M","100","86","64"],
    ["L","108","94","66"],["XL","112","102","68"]], numcols=(1,2,3),
    note="Measure over the shirt you will wear underneath."), 440)
S["u09-f7"]=lambda: f_icons([("coat","1"),("uniform","2"),("scarf","3"),("hat","4"),
    ("gloves","5"),("shirt","6"),("shoes","7"),("trousers","8")], cols=4, numbered=False)
S["u09-f8"]=lambda: f_realia(doc("The Market Café &middot; staff notice","Uniform",
    "<ol><li>Wear the café shirt and dark trousers.</li><li>No open shoes on the floor.</li>"
    "<li>Ask Grace for a different size.</li>"
    "<li>New shirts arrive on &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.</li></ol>"), 420)
S["u09-f9"]=lambda: f_scene(680,370, behind=[("priya",460,172,{})], people=[("tomas",220,180,{})],
    counter_=(350,212,310,120), props=[("shirt",390,158,0.45),("receipt",280,150,0.35),
    ("sizechart",560,60,0.55)])
S["u09-f10"]=lambda: f_realia(tbl("","Size chart",["Size","Chest","Waist","Sleeve"],
    [["S","","",""],["M","","",""],["L","","",""],["XL","","",""]]), 400)
S["u09-f11"]=lambda: f_realia(form("Label, inside the collar",
    [("Size","L"),("Chest","108 cm"),("Wash","40 degrees"),("Do not","tumble dry"),
     ("Material","65% cotton, 35% polyester")]))
S["u09-f12"]=lambda: f_panels(
    P(behind=[("tomas",250,180,{"cloth":"sand"})], counter_=(190,206,190,100),
      props=[("rain",40,70,0.55),("cafe",210,158,0.35)], floor=0.82),
    P(behind=[("tomas",250,180,{})], counter_=(190,206,190,100),
      props=[("sun",40,66,0.55),("coat",330,150,0.4)], floor=0.82),
    lt="March", rt="April")
S["u09-f13"]=lambda: f_scene(800,380, behind=[("tomas",560,180,{}),("grace",660,174,{})],
    people=[("nadia",140,174,{}),("mei",250,166,{}),("ahmad",360,180,{})],
    counter_=(460,220,340,122), props=[("rain",70,66,0.6),("coat",80,170,0.45),("cafe",500,160,0.4)],
    window_=(170,140,120,96))
S["u09-f14"]=lambda: f_chart([("rainy",5),("sunny",4),("cold",3),("hot",2),("snowy",1)])
S["u09-f15"]=lambda: f_scene(660,360, people=[("yusuf",230,184,{"smile":False,"seated":True})],
    props=[("bed",120,210,1.0),("shoes",340,210,0.55),("bag",430,200,0.5),("receipt",490,206,0.35)],
    floor=0.84)

# ---------------- Unit 10 ----------------
S["u10-f1"]=lambda: f_icons([("kitchen","kitchen"),("bathroom","bathroom"),("bedroom","bedroom"),
    ("living","living room"),("window","window"),("door","door"),("bed","bed"),("fridge","fridge")], cols=4)
S["u10-f2"]=lambda: f_scene(760,380, people=[("nadia",180,172,{"seated":True})],
    props=[("bed",420,200,1.1),("table",160,250,0.9),("chair",280,230,0.7),("bag",100,286,0.5),
    ("radiator",560,230,0.9),("coat",660,150,0.5)], window_=(430,60,150,110), floor=0.80)
S["u10-f3"]=lambda: f_icons([("bed","in"),("table","on"),("bag","under"),("door","next to"),
    ("window","behind"),("chair","between")], cols=3)
S["u10-f4"]=lambda: f_realia(doc("Room to rent &middot; four photographs", None,
    "<div style='display:flex;gap:6px;flex-wrap:wrap'>"
    + "".join("<div style='flex:1 1 44%%;height:68px;background:#ebebe8;border:1px solid #c9c7c0;"
      "display:flex;align-items:center;justify-content:center;font-size:11px;color:#8a8780'>%s</div>"%t
      for t in ["same wall","same wall","same wall","the window"]) + "</div>"
    "<p style='margin-top:12px'><b>Bills included.</b> Which bills? It does not say.</p>"
    "<p style='font-size:12px;color:#6b6861'>No photograph of the kitchen. No photograph of the bathroom.</p>"), 420)
S["u10-f5"]=lambda: f_realia(doc("E. Caruso, landlord","Repairs at 12 Fenner Street",
    "<p><b>To report a repair, write to me.</b> A note under my door or an email. Please do not "
    "telephone in the evening.</p>"
    "<p><b>Urgent</b> (no water, no heating, no electricity, a door that will not lock): "
    "<b>2 working days</b>.</p>"
    "<p><b>Everything else</b> (a tap, a handle, a light): <b>14 working days</b>.</p>"
    "<p>Put the <b>date</b> and your <b>room number</b> on every note. Without those I cannot start.</p>",
    "<b>working days</b> &mdash; Monday to Friday, not weekends"))
S["u10-f6"]=lambda: f_realia(form("Room to rent &mdash; 12 Fenner Street",
    [("Address","12 Fenner Street, Apartment 4B"),("Rent","420 a month"),("Deposit","420"),
     ("Included","water, heating"),("Room size","9 square metres"),("Floor","Second"),
     ("Sharing with","two others")]))
S["u10-f7"]=lambda: f_count([("bed",1,"bed"),("chair",2,"chairs"),("bag",1,"bag"),
    ("window",1,"window"),("coat",2,"coats"),("radiator",1,"radiator")])
S["u10-f8"]=lambda: f_realia(tbl("12 Fenner Street","Repair log",["Date","Room","Problem","Done"],
    [["3 Oct","2A","Tap drips","17 Oct"],["11 Oct","1B","Light out","15 Oct"],
     ["2 Nov","3A","Window won't close","6 Nov"],["5 Nov","4B","No heating","&mdash;"],
     ["","","",""]]), 460)
S["u10-f9"]=lambda: f_scene(660,370, people=[("nadia",230,172,{}),("caruso",430,186,{})],
    props=[("door",520,130,1.1),("form",300,176,0.35)], floor=0.82)
S["u10-f10"]=lambda: f_realia(tbl("","Repair log",["Date","Room","Problem","Done"],
    [["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]]), 440)
S["u10-f11"]=lambda: f_realia(doc("Note under the door", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:16px;line-height:1.9'>"
    "5 November<br>Room 4B<br><br>The radiator in my room is cold.<br>It has been cold since October."
    "<br><br>Nadia Rahman</p>"), 330)
S["u10-f12"]=lambda: f_panels(
    P(people=[("nadia",130,172,{"seated":True,"smile":False})],
      props=[("table",90,230,1.0),("radiator",250,200,0.6),("coat",320,130,0.45)], floor=0.82),
    P(people=[("nadia",130,172,{"seated":True})],
      props=[("table",90,230,1.0),("radiator",250,200,0.6),("bag",310,230,0.45)], floor=0.82),
    lt="Mon", rt="Wed")
S["u10-f14"]=lambda: f_scene(800,380, people=[("priya",170,172,{}),("mei",380,166,{"seated":True}),
    ("nadia",620,174,{})], props=[("kitchen",90,200,0.8),("table",330,250,1.0),
    ("door",690,140,1.0),("form",640,120,0.4),("bag",300,290,0.45)])
S["u10-f13"]=lambda: f_chart([("shared flat",7),("with family",3),("room in a house",2),("studio",1)])
S["u10-f15"]=lambda: f_scene(660,360, people=[("mei",250,166,{"smile":False})],
    props=[("radiator",380,200,0.9),("table",140,250,0.9),("phone",180,210,0.4)], floor=0.82)

# ---------------- Unit 11 ----------------
S["u11-f1"]=lambda: f_icons([("library","library"),("postoffice","post office"),("clinic","clinic"),
    ("bank","bank"),("busstop","bus stop"),("supermarket","supermarket"),("park","park"),
    ("school","school"),("pharmacy","pharmacy")], cols=5)
S["u11-f2"]=lambda: f_scene(800,390, behind=[("priya",560,170,{})],
    people=[("nadia",160,174,{}),("yusuf",270,184,{}),("ahmad",370,178,{})],
    counter_=(450,214,350,124), props=[("computer",490,156,0.45),("jobnotice",700,60,0.55)],
    sign_=(120,48,230,40,"FREE INTERNET",BLUE,14))
S["u11-f3"]=lambda: f_icons([("book","borrow"),("computer","computer"),("jobnotice","print"),
    ("school","free class"),("map","noticeboard"),("form","help with forms")], cols=3)
S["u11-f4"]=lambda: f_realia(doc("Two answers on the same day", None,
    "<p><b>The web page says:</b> Thursday 9:00 &ndash; 19:00.</p>"
    "<p style='color:#c9452c'><b>The paper notice on the door says:</b> This week only &mdash; "
    "closing at 17:00. Roof repairs.</p>"
    "<p style='font-size:12px;color:#6b6861'>Somebody taped the paper one up this morning.</p>"), 420)
S["u11-f5"]=lambda: f_realia(tbl("Portmere City Library &middot; Quay Road","Services",
    ["Service","When","Book?"],
    [["Borrow books","Mon&ndash;Sat, all day","No"],["Free internet (1 hour)","Mon&ndash;Sat, all day","No"],
     ["Printing","Mon&ndash;Sat, until 18:30","No"],["Help with forms","Tue &amp; Thu, 14:00&ndash;16:00","Yes"],
     ["English conversation","Thursday, 18:00&ndash;19:00","Just come"]],
    note="<b>To join:</b> bring proof of your address. A letter or a bill with your name on it is enough."), 500)
S["u11-f6"]=lambda: f_realia(tbl("Portmere City Council","Services",
    ["Service","Where","Hours","Online?"],
    [["Housing desk","Quay Road","10:00&ndash;14:00","No &mdash; IN PERSON ONLY"],
     ["Council tax","Quay Road","9:00&ndash;16:00","Yes"],
     ["Bins and recycling","&mdash;","&mdash;","Yes"],
     ["Register an address","Market Street","9:00&ndash;13:00","Yes"]]), 520)
S["u11-f7"]=lambda: f_icons([("jobnotice","1"),("computer","2"),("book","3"),("map","4"),
    ("form","5"),("teacher","6"),("queue","7"),("door","8")], cols=4, numbered=False)
S["u11-f8"]=lambda: f_realia(doc("Portmere City Library","Noticeboard",
    "<p><b>Cleaner wanted</b> &mdash; 6 hours a week, evenings. 12.40 an hour.</p>"
    "<p><b>Warehouse assistant</b> &mdash; Kestrel Logistics. Ask for Grace.</p>"
    "<p><b>Room to rent</b> &mdash; 12 Fenner Street. 420 a month.</p>"
    "<p style='opacity:.45'><b>Free English conversation</b> &mdash; "
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; at &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>(covered)</i></p>"
    "<p><b>Lost cat</b> &mdash; grey, answers to nothing.</p>"), 440)
S["u11-f9"]=lambda: f_scene(680,370, behind=[("priya",460,170,{})], people=[("nadia",230,174,{})],
    counter_=(360,210,310,120), props=[("map",390,158,0.4),("computer",570,154,0.4)])
S["u11-f10"]=lambda: f_scene(640,330, floor=0.96, panelbg="#eef1ec",
    props=[("library",60,40,0.7),("postoffice",230,40,0.7),("bank",400,40,0.7),
    ("pharmacy",60,170,0.7),("supermarket",230,170,0.7),("park",400,170,0.7)],
    sign_=(520,160,90,56,"YOU",ACCENT,15))
S["u11-f11"]=lambda: f_realia(form("Portmere City Library &mdash; Membership",
    [("Member","Nadia Rahman"),("Number","PCL 40 2219"),("Issued","3 October"),
     ("Internet","1 hour a day"),("Proof of address","Seen")]))
S["u11-f12"]=lambda: f_panels(
    P(people=[("nadia",130,174,{})], props=[("jobnotice",240,140,0.5),("coins",300,190,0.35)], floor=0.82),
    P(behind=[("yusuf",250,182,{})], people=[("nadia",110,174,{})], counter_=(190,206,190,100),
      props=[("envelope",210,160,0.4)], clockat=(330,60,24,5,20), floor=0.82),
    lt="4:40", rt="5:20")
S["u11-f13"]=lambda: f_scene(820,390, behind=[("priya",580,170,{})],
    people=[("nadia",120,174,{}),("yusuf",220,184,{}),("mei",310,166,{}),("ahmad",400,178,{}),
    ("lucia",700,172,{})], counter_=(470,214,350,124),
    props=[("computer",500,156,0.42),("jobnotice",740,56,0.5),("book",60,230,0.45)],
    clockat=(160,70,24,4,0), sign_=(250,44,220,38,"FREE INTERNET",BLUE,13))
S["u11-f14"]=lambda: f_chart([("supermarket",13),("bus stop",11),("pharmacy",8),("library",6),
    ("park",5),("bank",4)], unit="students who use it")
S["u11-f15"]=lambda: f_scene(660,360, people=[("hana",250,170,{"smile":False})],
    props=[("door",390,120,1.1),("timetable",500,110,0.55),("bag",170,280,0.45)], floor=0.84)

# ---------------- Unit 12 ----------------
S["u12-f1"]=lambda: f_icons([("cafe","café worker"),("warehouse","warehouse"),("cleaner","cleaner"),
    ("driver","driver"),("cook","cook"),("cashier","cashier"),("carer","carer"),
    ("security","security guard")], cols=4)
S["u12-f2"]=lambda: f_scene(780,390, people=[("grace",300,174,{"seated":True}),("yusuf",450,184,{})],
    props=[("table",260,250,1.1),("form",300,208,0.4),("form",370,208,0.4),("forklift",640,180,0.7)],
    window_=(560,60,180,110))
S["u12-f3"]=lambda: f_icons([("lift","lift"),("driver","drive"),("cook","cook"),("cleaner","clean"),
    ("coins","count"),("computer","use a computer")], cols=3)
S["u12-f4"]=lambda: f_realia(screen("Application &middot; experience",
    [("Experience (in this country only)",""),("Ahmad's experience","11 years, Herat"),
     ("Where does it go?","")], btn="NEXT", flags=(0,)), 420)
S["u12-f5"]=lambda: f_realia(doc("Kestrel Logistics, Portmere Logistics Park",
    "Warehouse Assistant &middot; 2 positions",
    "<p><b>Hours:</b> Monday&ndash;Friday, 06:00&ndash;14:00.</p>"
    "<p><b>Essential:</b> You can lift 15 kg. You can read numbers and labels in English. "
    "You can work in a team.</p>"
    "<p><b>Desirable:</b> Forklift certificate. Night-shift experience.</p>"
    "<p><b>To apply:</b> come to the gate office with proof of your right to work. Ask for Grace.</p>",
    "We train the forklift. We do not train the lifting."))
S["u12-f6"]=lambda: f_realia(form("Kestrel Logistics &mdash; Application",
    [("Name","Ahmad Sultani"),("Address","12 Fenner Street"),("Right to work","Yes &mdash; seen"),
     ("Experience here","None"),("Can lift 15 kg &#10003;","Can read labels &#10003;"),
     ("Team work &#10003;","Forklift &#9744;"),("Available","Early &#10003;  Late &#10003;"),
     ("Anything else","")]))
S["u12-f7"]=lambda: f_realia(tbl("Kestrel Logistics","Who can do what",
    ["","Lift","Drive","Cook","Computer","3 languages"],
    [["1","&#10003;","&#10003;","&#10007;","&#10007;","&#10003;"],
     ["2","&#10007;","&#10007;","&#10003;","&#10003;","&#10003;"],
     ["3","&#10003;","&#10007;","&#10007;","&#10003;","&#10007;"],
     ["4","&#10003;","&#10003;","&#10003;","&#10007;","&#10003;"],
     ["5","&#10007;","&#10007;","&#10003;","&#10003;","&#10007;"],
     ["6","&#10003;","&#10007;","&#10003;","&#10003;","&#10003;"]]), 520)
S["u12-f8"]=lambda: f_realia(tbl("Kestrel Logistics","Shift rota",
    ["","Mon","Tue","Wed","Thu","Fri"],
    [["Early","Grace","Grace","Grace","?","Grace"],
     ["Late","Yusuf","Adeel","Yusuf","Adeel","?"]],
    note="Changes? Ask Grace at the gate office."), 480)
S["u12-f9"]=lambda: f_scene(700,370, people=[("grace",300,174,{"seated":True}),("ahmad",180,180,{"seated":True})],
    props=[("table",200,250,1.2),("form",250,206,0.4),("forklift",560,190,0.6)],
    window_=(480,56,180,110))
S["u12-f10"]=lambda: f_realia(tbl("","What I can do",["Skill","Yes","Not yet"],
    [["Lift 15 kg","",""],["Read labels","",""],["Work in a team","",""],["Drive a forklift","",""],
     ["Use a computer","",""],["Cook","",""],["Clean","",""],["Count money","",""]]), 420)
S["u12-f11"]=lambda: f_realia(doc("What I can do", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:17px;line-height:2'>"
    "&#10003; lift 15 kg<br>&#10003; read labels<br>&#10003; use a computer<br>&#10003; work in a team"
    "<br>? forklift &mdash; course in March<br><s>drive</s> &mdash; licence not accepted here</p>"), 330)
S["u12-f12"]=lambda: f_panels(
    P(people=[("ahmad",140,180,{"seated":True}),("grace",260,174,{})],
      props=[("table",110,230,1.1),("form",170,190,0.4)], floor=0.80),
    P(people=[("ahmad",130,180,{"cloth":"amberish"}),("yusuf",240,184,{"cloth":"amberish"})],
      props=[("warehouse",20,90,0.5),("jobnotice",300,160,0.4)], floor=0.80),
    lt="Friday", rt="Monday")
S["u12-f13"]=lambda: f_scene(820,390, people=[("yusuf",150,184,{"cloth":"amberish"}),
    ("tomas",250,180,{"cloth":"amberish"}),("grace",420,174,{}),("ahmad",540,180,{"cloth":"amberish"}),
    ("mei",660,166,{"cloth":"amberish"})],
    props=[("forklift",720,190,0.7),("warehouse",40,60,0.55)],
    board=(300,30,220,90,"SHIFT",[("Early","06:00")]), clockat=(180,74,24,6,0))
S["u12-f14"]=lambda: f_chart([("cook",12),("use a computer",10),("lift heavy boxes",7),
    ("speak three languages",6),("care for children",5),("drive",4)], unit="students who can")
S["u12-f15"]=lambda: f_scene(660,360, people=[("yusuf",230,184,{"smile":False,"seated":True})],
    props=[("table",170,250,1.2),("jobnotice",240,196,0.4),("form",330,200,0.4),("card",420,206,0.35)],
    floor=0.80)
