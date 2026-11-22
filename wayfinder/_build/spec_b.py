# -*- coding: utf-8 -*-
"""Figure specs, Units 4 to 8."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

# ---------------- Unit 4 ----------------
S["u04-f1"]=lambda: f_icons([("calendar","calendar"),("day","day"),("month","month"),
    ("appointment","appointment"),("birthday","birthday"),("today","today"),("early","early"),
    ("late","late")], cols=4)
S["u04-f2"]=lambda: f_scene(780,390, people=[("nkemelu",660,174,{}),("lucia",180,172,{"seated":True}),
    ("nadia",300,170,{"seated":True}),("ahmad",420,176,{"seated":True})],
    board=(520,34,236,112,"MARCH",[("Dentist","Thu 3"),("Office","Fri 4")]),
    props=[("table",140,250,0.9),("notebook",200,214,0.42),("calendar",60,80,0.75)])
S["u04-f3"]=lambda: f_icons([("calendar","calendar"),("today","today"),("appointment","appointment"),
    ("birthday","birthday"),("early","early"),("late","late")], cols=3)
S["u04-f4"]=lambda: f_realia(screen("Two reminders, one appointment",
    [("Text message","Your appointment: 03/04 at 15:30"),("Paper card","Thursday 3 April, 3:30 p.m."),
     ("So which month?","")], btn=None, flags=(0,)), 420)
S["u04-f5"]=lambda: f_realia(doc("Fenner Street Dental Practice","Your appointment",
    "<p>Please arrive <b>10 minutes early</b>. Please bring your card.</p>"
    "<p>To cancel or change, call us <b>one day before</b>. There is no charge.</p>"
    "<p>If you do not come, and you do not call, there <b>is</b> a charge.</p>",
    "Open Monday to Friday, 9:00 &ndash; 5:30. Closed on public holidays."))
S["u04-f6"]=lambda: f_realia(form("Fenner Street Dental Practice &mdash; Appointment card",
    [("Patient","Lucia Moreno"),("Day","Thursday"),("Date","3 April"),("Time","3:30 p.m."),
     ("Room","2"),("Next appointment","")], "Please arrive 10 minutes early."))
S["u04-f7"]=lambda: f_icons([("tooth","Thu 3 &middot; dentist"),("birthday","Sat 5 &middot; birthday"),
    ("book","Mon 7 &middot; class"),("bus","Tue 8 &middot; travel"),("appointment","Fri 4 &middot; office"),
    ("calendar","Sun 6 &middot; closed")], cols=3, numbered=True, cell=150)
S["u04-f8"]=lambda: f_realia(tbl("Northside Technical College","Office hours",
    ["Day","Open"],[["Monday","9:00 &ndash; 12:00"],["Tuesday","9:00 &ndash; 16:00"],
    ["Wednesday","9:00 &ndash; 13:00"],["Thursday","9:00 &ndash; 16:00"],["Friday","9:00 &ndash; 12:00"]],
    note="CLOSED &mdash; public holiday, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"), 420)
S["u04-f9"]=lambda: f_scene(680,370, behind=[("oyelaran",470,172,{})], people=[("lucia",230,172,{})],
    counter_=(350,206,300,120), props=[("calendar",540,54,0.7),("notebook",380,176,0.4)])
S["u04-f10"]=lambda: f_realia(tbl("","This week",["","Mon","Tue","Wed","Thu","Fri"],
    [["9:00","","&#10007;","","",""],["12:00","","","","",""],["15:00","","","&#10007;","",""]]), 460)
S["u04-f11"]=lambda: f_realia(form("Northside Technical College &mdash; Note for a student",
    [("To","Lucia Moreno"),("Date","Friday 4 April"),("Time","9:00 a.m."),("Room","Office 1"),
     ("Please bring","your passport and your arrival form")]))
S["u04-f12"]=lambda: f_panels(
    P(people=[("lucia",120,172,{"smile":False})], props=[("busstop",30,106,0.6),("phone",190,140,0.5)], floor=0.82),
    P(behind=[("oyelaran",260,170,{})], people=[("lucia",120,172,{})],
      counter_=(200,196,170,100), props=[("calendar",300,40,0.55)], floor=0.82),
    lt="8:50", rt="9:05")
S["u04-f13"]=lambda: f_scene(780,380, behind=[("oyelaran",560,172,{})],
    people=[("lucia",150,172,{}),("nadia",250,170,{}),("ahmad",350,176,{})],
    counter_=(450,214,330,120), props=[("calendar",80,70,0.85)], clockat=(300,84,27,9,5),
    board=(600,30,160,74,"MARCH",[("Office","open")]))
S["u04-f14"]=lambda: f_chart([("March",4),("July",3),("May",2),("November",2),("January",1)])
S["u04-f15"]=lambda: f_scene(660,360, people=[("ahmad",250,178,{"smile":False})],
    props=[("door",110,120,1.0),("calendar",420,100,0.7)], floor=0.84)

# ---------------- Unit 5 ----------------
S["u05-f1"]=lambda: f_icons([("coins","coins"),("note","note"),("pricetag","price"),("sale","sale"),
    ("receipt","receipt"),("bankcard","card"),("cash","cash"),("change","change")], cols=4)
S["u05-f2"]=lambda: f_scene(800,390, behind=[("hana",600,168,{})],
    people=[("nadia",180,176,{}),("tomas",300,180,{})],
    counter_=(430,218,370,124), props=[("apple",450,160,0.5),("tomato",530,160,0.5),
    ("onion",610,160,0.5),("banana",690,160,0.5),("pricetag",470,120,0.4)],
    sign_=(120,54,220,42,"MARROW & SON",ACCENT,16))
S["u05-f3"]=lambda: f_icons([("apple","apple"),("banana","banana"),("tomato","tomato"),
    ("onion","onion"),("pricetag","price tag"),("receipt","receipt")], cols=3)
S["u05-f4"]=lambda: f_realia(doc("Marrow & Son &middot; the same box, two labels", None,
    tags([("3.00","a kilo &middot; old label",None),("2.20","a kilo &middot; new label","3.00")])+
    "<p style='margin-top:14px'><b>AFTER 12</b> &mdash; and it is half past twelve.</p>"), 420)
S["u05-f5"]=lambda: f_realia(doc("Marrow & Son &middot; Saturday market, Portmere","Price board",
    table_html(["",""],[["Apples","2.50 a kilo"],["Bananas","0.40 each"],["Tomatoes","3.00 a kilo"],
    ["Onions","4 for 1.00"]])+
    "<p style='margin-top:12px'><b>After 12:00</b> &mdash; everything on this board is <b>20% off</b>.</p>"
    "<p>Cash or card. No change under 0.05.</p>",
    "<b>a kilo</b> &mdash; for 1000 grams &middot; <b>each</b> &mdash; for one"))
S["u05-f6"]=lambda: f_realia(tbl("Marrow & Son","Receipt",["Item","Qty","Price"],
    [["Tomatoes","2 kg","4.40"],["Apples","1 kg","2.00"],["Bananas","4","1.60"],["Onions","4","0.80"],
     ["Subtotal","","8.80"],["After 12 &minus;20%","","&minus;1.76"],["<b>Total</b>","","<b>7.04</b>"],
     ["Cash","","10.00"],["Change","","2.96"]], numcols=(1,2)), 440)
S["u05-f7"]=lambda: f_count([("apple",3,"apples"),("tomato",2,"tomatoes"),("onion",4,"onions"),
    ("banana",1,"banana"),("cheese",1,"cheese"),("eggs",1,"eggs")])
S["u05-f8"]=lambda: f_realia(doc("Marrow & Son","Today's offers",
    tags([("2.00","apples, a kilo","2.50"),("0.30","bananas, each","0.40"),("?","onions, 4 for",None)])+
    "<p style='margin-top:14px'>Offer ends at <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>.</p>"), 440)
S["u05-f9"]=lambda: f_scene(680,370, behind=[("hana",470,168,{})], people=[("nadia",220,176,{})],
    counter_=(350,212,300,120), props=[("tomato",380,166,0.45),("receipt",560,160,0.4),
    ("coins",600,166,0.4)])
S["u05-f10"]=lambda: f_realia(tbl("","Price board",["Item","Price"],
    [["","",],["","",],["","",],["","",],["","",],["","",]], note="Offer:"), 400)
S["u05-f11"]=lambda: f_realia(doc("Shopping list", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:17px;line-height:2'>"
    "&#10003; tomatoes &mdash; 2 kg<br>&#10003; apples &mdash; 1 kg<br>&#10003; bananas &mdash; 4<br>"
    "&nbsp;&nbsp;&nbsp;onions<br>&nbsp;&nbsp;&nbsp;rice<br>&nbsp;&nbsp;&nbsp;milk</p>"
    "<p style='font-family:Bricolage Grotesque,cursive;font-size:17px'>"
    "Total <s>8.80</s> &nbsp;<b>7.04</b></p>"), 320)
S["u05-f12"]=lambda: f_panels(
    P(behind=[("hana",250,168,{})], people=[("nadia",110,176,{"smile":False})],
      counter_=(190,200,180,100), props=[("pricetag",210,158,0.4)], floor=0.82),
    P(behind=[("hana",250,168,{})], people=[("nadia",110,176,{})],
      counter_=(190,200,180,100), props=[("bag",200,152,0.45),("receipt",300,156,0.35)], floor=0.82),
    lt="11:40", rt="12:30")
S["u05-f13"]=lambda: f_part("How the class pays",[("cash",6,"#2a78d6"),("card",9,"#eb6834"),("phone",3,"#1baf7a")])
S["u05-f14"]=lambda: f_scene(800,380, behind=[("hana",560,168,{}),("tomas",700,176,{})],
    people=[("nadia",140,176,{}),("mei",250,166,{}),("ahmad",350,178,{})],
    counter_=(450,216,350,124), props=[("apple",470,160,0.45),("tomato",540,160,0.45),
    ("onion",610,160,0.45)], clockat=(120,80,27,12,0),
    sign_=(300,46,250,40,"AFTER 12 — 20% OFF",ACCENT,14))
S["u05-f15"]=lambda: f_scene(660,360, behind=[("tomas",430,176,{})], people=[("lucia",200,172,{"smile":False}),
    ("mei",290,166,{}),("ahmad",120,178,{})], counter_=(340,214,320,116),
    props=[("cashier",470,150,0.5),("receipt",370,160,0.35)])

# ---------------- Unit 6 ----------------
S["u06-f1"]=lambda: f_icons([("mother","mother"),("father","father"),("sister","sister"),
    ("brother","brother"),("baby","baby"),("grandmother","grandmother"),("grandfather","grandfather"),
    ("family","family"),("housemate","housemates")], cols=5)
S["u06-f2"]=lambda: f_scene(780,390, people=[("priya",180,172,{}),("mei",380,166,{"seated":True}),
    ("nadia",620,176,{})], props=[("cooker",100,196,0.8),("table",330,250,0.9),("computer",400,206,0.45),
    ("fridge",700,160,0.9),("door",560,150,0.9),("family",706,176,0.3)])
S["u06-f3"]=lambda: f_icons([("family","family"),("housemate","housemate"),("emergency","emergency contact"),
    ("phone","phone number"),("card","card"),("firstname","name")], cols=3)
S["u06-f4"]=lambda: f_realia(screen("Emergency contact &middot; relationship",
    [("Choose one","mother / father / husband / wife / son / daughter"),
     ("Your contact is","Priya &mdash; a housemate"),("This box is required","")], btn="SAVE", flags=(0,)), 430)
S["u06-f5"]=lambda: f_realia(doc("Portmere Language Center &middot; Student handbook, page 4",
    "Your emergency contact",
    "<p>Every student gives us <b>one name and one number</b>. We call this person only if something "
    "happens to you here.</p><p>Choose somebody who:</p><ol><li>answers the phone</li>"
    "<li>is awake when you are in class</li><li>speaks a language we can use</li></ol>"
    "<p>Tell that person you have given us their name. Many people do not know.</p>",
    "<b>awake</b> &mdash; not sleeping &middot; <b>reach</b> &mdash; speak to somebody by phone"))
S["u06-f6"]=lambda: f_realia(form("Portmere Language Center &mdash; Emergency contact",
    [("Student","Nadia Rahman"),("Contact name","Priya Raghavan"),("Relationship",""),
     ("Phone","7700 902 115"),("Second phone","&mdash;"),("Best time to call","Any time")]))
S["u06-f7"]=lambda: f_icons([("grandfather","1"),("grandmother","2"),("father","3"),("mother","4"),
    ("brother","5"),("sister","6"),("baby","7"),("housemate","8")], cols=4, numbered=False)
S["u06-f8"]=lambda: f_realia(doc("12 Fenner Street &middot; hallway board", None,
    "<p><b>Bins</b> &mdash; Tuesday night. Green box Thursday.</p>"
    "<p><b>Landlord</b> &mdash; E. Caruso, ground floor. Write, don't call after 6.</p>"
    "<p><b>Clinic</b> &mdash; Fenner Street, opens 8:00.</p>"
    "<p style='opacity:.5'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> &mdash; "
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>(torn)</i></p>"), 420)
S["u06-f9"]=lambda: f_scene(660,370, people=[("nadia",230,172,{"seated":True}),("priya",420,170,{"seated":True})],
    props=[("table",250,252,1.1),("form",300,206,0.4),("pen",390,210,0.35)], window_=(500,60,120,96))
S["u06-f10"]=lambda: f_realia(form("Emergency contact",
    [("Student",""),("Contact name",""),("Relationship",""),("Phone",""),("Best time to call",""),
     ("Signature","")]))
S["u06-f11"]=lambda: f_realia(doc("On the fridge", None,
    "<p style='text-align:center'><b>Tabriz, 2023</b></p>"
    "<p style='text-align:center;font-family:Bricolage Grotesque,cursive;font-size:16px'>"
    "Maman &middot; Baba &middot; Nadia &middot; Sara</p>"), 300)
S["u06-f12"]=lambda: f_panels(
    P(people=[("nadia",140,172,{"smile":False})], props=[("table",90,230,1.0),("form",150,190,0.4)], floor=0.78),
    P(people=[("nadia",110,172,{}),("priya",240,170,{})],
      props=[("table",90,230,1.1),("form",150,190,0.4),("phone",250,188,0.35)], floor=0.78),
    lt="Tue", rt="Wed")
S["u06-f13"]=lambda: f_scene(800,380, people=[("priya",160,172,{}),("mei",400,166,{"seated":True}),
    ("nadia",640,176,{})], props=[("cooker",90,190,0.8),("table",340,246,1.0),("phone",430,200,0.4),
    ("fridge",720,150,0.9),("emergency",630,70,0.6),("family",700,70,0.5)])
S["u06-f14"]=lambda: f_chart([("housemates",6),("family",4),("alone",2),("host family",1)])
S["u06-f15"]=lambda: f_scene(680,360, behind=[("haddad",450,174,{})], people=[("yusuf",230,180,{"smile":False})],
    counter_=(360,210,310,114), props=[("clinic",80,90,0.6),("phone",280,160,0.45)])

# ---------------- Unit 7 ----------------
S["u07-f1"]=lambda: f_icons([("bread","bread"),("rice","rice"),("milk","milk"),("eggs","eggs"),
    ("tomato","tomatoes"),("onion","onions"),("chicken","chicken"),("fish","fish"),("cheese","cheese"),
    ("water","water")], cols=5)
S["u07-f2"]=lambda: f_scene(780,390, people=[("tomas",250,180,{})],
    props=[("supermarket",60,70,0.7),("rice",430,150,0.6),("milk",520,150,0.6),("bread",610,150,0.6),
    ("shoppinglist",330,186,0.42)], sign_=(420,46,250,40,"RICE & PASTA",CLOTH["navy"],15))
S["u07-f3"]=lambda: f_icons([("water","bottle"),("bag","bag"),("rice","box"),("cheese","tin"),
    ("coins","kilo"),("bread","packet")], cols=3)
S["u07-f4"]=lambda: f_realia(doc("Two packets of rice", None,
    tags([("1.40","500 g",None),("5.20","2 kg",None)])+
    "<p style='margin-top:14px'>Which is cheaper <b>for one kilo</b>? The shelf label says, in very "
    "small print.</p>"), 400)
S["u07-f5"]=lambda: f_realia(doc("Marrow & Son &middot; a note for new customers",
    "Buy for the week, not for the day",
    "<ol><li><b>Make a list at home.</b> People with a list buy less and throw away less.</li>"
    "<li><b>Buy fresh food for two days, not seven.</b> Vegetables do not wait for you.</li>"
    "<li><b>Frozen is not worse.</b> Frozen peas are picked and frozen on the same day.</li></ol>"
    "<p>Come after four o'clock on Saturday. We sell the last boxes cheap, because on Sunday we are "
    "closed and the food is not.</p>",
    "<b>fresh</b> &mdash; picked a short time ago &middot; <b>waste</b> &mdash; throw away food you could eat"))
S["u07-f6"]=lambda: f_realia(form("Freshline &mdash; Rice, long grain",
    [("Weight","2 kg"),("Price","5.20"),("Price per kilo","2.60"),("Use by","20 of this month"),
     ("Contains","rice"),("Cook","1 cup rice, 2 cups water, 12 minutes")]))
S["u07-f7"]=lambda: f_count([("apple",3,"apples"),("rice",1,"rice"),("eggs",2,"eggs"),
    ("milk",2,"milk"),("tomato",4,"tomatoes"),("cheese",1,"cheese")])
S["u07-f8"]=lambda: f_realia(tbl("Freshline","Shelf labels",["Product","Price","Per kilo"],
    [["Rice 2 kg","5.20","2.60"],["Pasta 1 kg","1.90","1.90"],["Flour 1.5 kg","2.10","1.40"],
     ["Oats 500 g","1.35","&nbsp;"]], numcols=(1,2)), 440)
S["u07-f9"]=lambda: f_scene(680,370, behind=[("grace",460,172,{})], people=[("tomas",220,180,{})],
    counter_=(350,212,300,120), props=[("rice",380,160,0.45),("rice",560,164,0.35),("computer",500,150,0.4)])
S["u07-f10"]=lambda: f_realia(tbl("","Shopping list",["Item","Amount","Price"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],
     ["<b>Total</b>","","&nbsp;"]], numcols=(2,)), 420)
S["u07-f11"]=lambda: f_realia(doc("Recipe card","Rice with chicken &middot; for 4",
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:16px;line-height:1.9'>"
    "1 kg chicken &middot; 2 onions &middot; 400 g rice<br>a little oil &middot; salt &middot; water</p>"
    "<ol><li>Cut the onions.</li><li>Cook the chicken.</li><li>Add the rice and the water.</li>"
    "<li>Wait 20 minutes.</li></ol>", "Serves four."))
S["u07-f12"]=lambda: f_panels(
    P(people=[("tomas",130,180,{"smile":False})], props=[("rice",230,130,0.55),("supermarket",20,90,0.5)], floor=0.80),
    P(people=[("tomas",100,180,{}),("nadia",200,172,{"seated":True}),("mei",280,166,{"seated":True})],
      props=[("table",160,230,1.1),("chicken",230,196,0.4)], floor=0.80),
    lt="Sat", rt="Sun")
S["u07-f13"]=lambda: f_scene(800,380, people=[("tomas",180,180,{}),("nadia",330,174,{}),
    ("mei",470,166,{}),("yusuf",610,184,{})],
    props=[("rice",80,140,0.5),("milk",700,140,0.5),("shoppinglist",380,196,0.4),
    ("supermarket",730,60,0.5)], sign_=(300,44,250,38,"RICE & PASTA",CLOTH["navy"],14))
S["u07-f14"]=lambda: f_chart([("most days",5),("every day",4),("at the weekend",3),("twice a week",2),("never",1)])
S["u07-f15"]=lambda: f_scene(660,360, people=[("lucia",240,172,{"smile":False})],
    props=[("fridge",400,110,1.1),("receipt",130,180,0.4),("shoppinglist",120,120,0.4)])

# ---------------- Unit 8 ----------------
S["u08-f1"]=lambda: f_icons([("head","head"),("arm","arm"),("leg","leg"),("stomach","stomach"),
    ("back","back"),("tooth","tooth"),("eye","eye"),("throat","throat")], cols=4)
S["u08-f2"]=lambda: f_scene(780,390, behind=[("oskar",560,176,{})], people=[("mei",240,166,{"smile":False})],
    counter_=(450,218,330,124), props=[("medicine",480,160,0.45),("pills",660,164,0.4),
    ("pharmacy",60,80,0.7)], sign_=(180,52,230,40,"ASK THE PHARMACIST",AQUA,14))
S["u08-f3"]=lambda: f_icons([("pills","pills"),("medicine","medicine"),("spoon","spoon"),
    ("thermometer","thermometer"),("jobnotice","label"),("form","prescription")], cols=3)
S["u08-f4"]=lambda: f_realia(screen("The box and the phone do not agree",
    [("The box says","Twice a day, after food"),("The phone says","Three times a day"),
     ("Who do you ask?","")], btn=None, flags=(1,)), 420)
S["u08-f5"]=lambda: f_realia(doc("Fenner Pharmacy, Portmere","Throat relief &middot; 100 ml",
    "<p><b>Adults:</b> one 5 ml spoon, <b>twice a day</b>, after food.<br>"
    "<b>Children 6&ndash;12:</b> half a spoon, twice a day.<br><b>Not for children under 6.</b></p>"
    "<p><b>Do not take more than 2 doses in 24 hours.</b></p>"
    "<p>If your throat is not better after <b>3 days</b>, see a doctor.</p>",
    "<b>dose</b> &mdash; how much you take at one time &middot; Keep out of reach of children."))
S["u08-f6"]=lambda: f_realia(form("Fenner Street Walk-in Clinic &mdash; Prescription",
    [("Patient","Mei Lin Chen"),("Date","12 March"),("Medicine","Throat relief 100 ml"),
     ("Dose","5 ml, twice a day, after food"),("Days","5"),("Doctor","Dr S. Haddad"),
     ("Repeat? &#9744;","")]))
S["u08-f7"]=lambda: f_icons([("head","1"),("throat","2"),("stomach","3"),("back","4"),
    ("tooth","5"),("arm","6"),("sick","7"),("thermometer","8")], cols=4, numbered=False)
S["u08-f8"]=lambda: f_realia(doc("Fenner Pharmacy","Ask the pharmacist &mdash; no appointment",
    "<ol><li>Colds, coughs and sore throats</li><li>Headaches and small pains</li>"
    "<li>Cuts and burns</li><li>What your medicine does</li></ol>"
    "<p style='margin-top:10px'>Monday&ndash;Friday 9:00&ndash;18:00. "
    "Saturday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;. Sunday closed.</p>"), 420)
S["u08-f9"]=lambda: f_scene(680,370, behind=[("oskar",460,176,{})], people=[("mei",220,166,{"smile":False})],
    counter_=(350,214,310,120), props=[("medicine",380,162,0.4),("phone",250,150,0.4),("pills",560,166,0.35)])
S["u08-f10"]=lambda: f_realia(form("Medicine label",
    [("Name",""),("Adult dose",""),("How often",""),("Most in 24 hours","")]))
S["u08-f11"]=lambda: f_realia(doc("On the bathroom mirror", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:17px;line-height:2'>"
    "Throat medicine &mdash; 8 a.m. and 8 p.m.<br>"
    "M &#10003; &nbsp; T &#10003; &nbsp; W &#10003; &nbsp; T &#9744; &nbsp; F &#9744;</p>"), 320)
S["u08-f12"]=lambda: f_panels(
    P(people=[("mei",130,166,{"smile":False,"seated":True})],
      props=[("bed",70,180,1.0),("medicine",250,180,0.45),("water",310,180,0.4)], floor=0.84),
    P(people=[("mei",130,166,{})], props=[("notebook",250,170,0.45),("clinic",300,90,0.5)], floor=0.84),
    lt="Mon", rt="Thu")
S["u08-f13"]=lambda: f_scene(800,380, behind=[("oskar",580,176,{})],
    people=[("mei",160,166,{}),("lucia",270,172,{}),("yusuf",380,184,{})],
    counter_=(470,218,330,124), props=[("medicine",500,162,0.4),("pills",680,166,0.35),
    ("pharmacy",60,80,0.6)], sign_=(180,52,230,40,"ASK THE PHARMACIST",AQUA,14))
S["u08-f14"]=lambda: f_chart([("once a year",5),("twice a year",4),("never",3),("more often",2)])
S["u08-f15"]=lambda: f_scene(660,360, people=[("priya",240,170,{"smile":False,"seated":True})],
    props=[("table",180,250,1.2),("medicine",250,196,0.4),("pills",330,200,0.35),
    ("water",410,196,0.35),("phone",470,200,0.35)], floor=0.80)
