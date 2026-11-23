# -*- coding: utf-8 -*-
"""Book 2 figure specs, Units 5 to 8."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

# ---------------- Unit 5 ----------------
S["v05-f1"]=lambda: f_icons([("trafficlights","traffic lights"),("corner","corner"),
    ("crossing","crossing"),("roundabout","roundabout"),("bridge","bridge"),("square","square"),
    ("busstop","bus stop"),("map","map")], cols=4)
S["v05-f2"]=lambda: f_scene(800,390, people=[("tomas",250,180,{"smile":False})],
    props=[("trafficlights",430,150,0.8),("crossing",560,250,0.9),("bridge",680,120,0.7),
    ("phone",330,150,0.45),("door",120,140,0.9)], floor=0.80, panelbg="#dfe6ee")
S["v05-f3"]=lambda: f_icons([("corner","go straight on"),("crossing","turn left"),
    ("trafficlights","turn right"),("roundabout","go past"),("bridge","cross the road"),
    ("map","take the second left")], cols=3)
S["v05-f4"]=lambda: f_realia(doc("The app and the street", None,
    "<p><b>The app's route:</b> straight through the block. 4 minutes.</p>"
    "<p style='color:#c9452c'><b>On the ground:</b> a locked gate with a NO ENTRY sign.</p>"
    "<p><b>The real route:</b> round the block. 11 minutes.</p>"
    "<p style='font-size:12px;color:#6b6861'>The app has not been told about the gate. Nobody tells "
    "an app about a gate.</p>"), 430)
S["v05-f5"]=lambda: f_realia(doc("For deliveries and visitors","Access notes &middot; 14 Market Square",
    "<p>The main entrance is on <b>Market Square</b>, between the pharmacy and the bakery.</p>"
    "<p>After <b>6:00 p.m.</b> the main entrance is locked. Use the <b>rear entrance</b> on Bridge "
    "Lane: go past the pharmacy, turn right at the corner, and the door is halfway down on the "
    "left. It is blue and it is not marked.</p>"
    "<p>The gate code is on the delivery note. Do not write it on the door.</p>"
    "<p><b>Do not park</b> on Bridge Lane between 4 and 7 p.m. The street is a bus route and you "
    "will be fined.</p>", "<b>rear</b> &mdash; the back &middot; <b>access</b> &mdash; how you get in"))
S["v05-f6"]=lambda: f_scene(680,340, floor=0.97, panelbg="#eef1ec",
    props=[("square",40,40,0.75),("pharmacy",220,40,0.7),("cafe",380,40,0.7),
    ("bridge",40,170,0.7),("busstop",220,165,0.7),("crossing",340,190,0.8)],
    sign_=(520,150,110,54,"BLUE DOOR",ACCENT,13))
S["v05-f7"]=lambda: f_icons([("crossing","1"),("busstop","2"),("cafe","3"),("phone","4"),
    ("bicycle" if "bicycle" in ICON else "bus","5"),("supermarket","6"),("map","7"),("walk","8")],
    cols=4, numbered=False)
S["v05-f8"]=lambda: f_realia(form("Delivery note &mdash; Portmere",
    [("Customer","M. Achebe"),("Address","14 Market Square"),("Gate code","4 7 _ _"),
     ("Access","Rear entrance, Bridge Lane. Blue door, 2nd on left."),
     ("For","&nbsp;"),("Signature","")]))
S["v05-f9"]=lambda: f_scene(720,380, people=[("tomas",230,180,{"smile":False}),("lucia",540,140,{})],
    props=[("door",430,140,1.0),("phone",320,150,0.45),("bridge",640,100,0.55)],
    floor=0.80, panelbg="#dfe6ee")
S["v05-f10"]=lambda: f_scene(680,340, floor=0.97, panelbg="#eef1ec",
    props=[("library",40,30,0.6),("bank",180,30,0.6),("postoffice",320,30,0.6),
    ("pharmacy",460,30,0.6),("supermarket",40,160,0.6),("school",180,160,0.6),
    ("park",320,160,0.6),("cafe",460,160,0.6)],
    sign_=(560,150,100,54,"START",ACCENT,14))
S["v05-f11"]=lambda: f_realia(doc("Written on the back of a receipt", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:17px;line-height:2'>"
    "1. Out of this door, turn right<br>2. Past the <u>canteen</u><br>3. Across the car park<br>"
    "4. Gray building<br><br>Door is BLUE. No number.</p>"), 340)
S["v05-f12"]=lambda: f_panels(
    P(people=[("tomas",130,180,{"smile":False})], props=[("phone",230,130,0.5),("door",320,140,0.9)],
      floor=0.82, panelbg="#dfe6ee"),
    P(people=[("tomas",120,180,{}),("priya",250,170,{})], props=[("door",330,140,0.9)], floor=0.82),
    lt="18:40", rt="18:52")
S["v05-f13"]=lambda: f_scene(820,400, people=[("tomas",140,180,{}),("nadia",260,174,{}),
    ("mei",360,166,{}),("yusuf",470,186,{}),("lucia",700,172,{})],
    props=[("trafficlights",590,140,0.7),("crossing",240,270,0.85),("busstop",760,120,0.6),
    ("cafe",60,60,0.5)], floor=0.80, panelbg="#dfe6ee")
S["v05-f14"]=lambda: f_chart([("map app",11),("ask somebody",6),("written directions",4),("I know the city",3)])
S["v05-f15"]=lambda: f_scene(700,380, people=[("ahmad",250,180,{"smile":False})],
    props=[("school",420,70,0.8),("phone",180,150,0.45),("door",560,140,0.95)],
    clockat=(100,80,24,7,40), floor=0.82, panelbg="#2c3440")

# ---------------- Unit 6 ----------------
S["v06-f1"]=lambda: f_icons([("washup","wash up"),("laundry","do the laundry"),("bins","take out the bins"),
    ("vacuum","vacuum"),("iron","iron"),("shopping","do the shopping"),("cook","cook"),
    ("lecture","study"),("shift","shift"),("teacher","lecture")], cols=5)
S["v06-f2"]=lambda: f_scene(800,390, people=[("mei",220,166,{}),("priya",560,172,{}),("grace",660,174,{})],
    props=[("shift",400,80,0.7),("door",80,140,1.0),("carer",740,150,0.5)], clockat=(300,80,26,7,0))
S["v06-f3"]=lambda: f_icons([("shift","shift"),("teacher","lecture"),("studentcard","placement"),
    ("timetable","timetable"),("salary","payslip"),("calendar","planner")], cols=3)
S["v06-f4"]=lambda: f_realia(doc("Last week &middot; two counts", None,
    tags([("31","hours &middot; the app",None),("34","hours &middot; my own note",None)])+
    "<p style='margin-top:14px'>The app takes 30 minutes off every shift for a break. On two shifts "
    "the break was not taken.</p>"
    "<p style='font-size:12px;color:#6b6861'>2 shifts &times; 30 min + 2 hours unrecorded = the "
    "difference.</p>"), 430)
S["v06-f5"]=lambda: f_realia(doc("Portmere General Hospital &middot; Student placements",
    "Shifts, breaks and hours",
    "<p>The rota <b>will</b> be published <b>two weeks</b> in advance. Once it is published it does "
    "not change without your agreement.</p>"
    "<p>You <b>may</b> swap a shift with another student. Both of you <b>must</b> tell your "
    "supervisor before the swap, not after.</p>"
    "<p>On a shift of six hours or more you <b>must</b> take a <b>30-minute</b> break. The break is "
    "unpaid. If you cannot take it, write it on your sheet that day.</p>"
    "<p>Record your hours <b>on the day</b>. We cannot pay for hours that appear three weeks later "
    "with no note.</p>", "Questions: ask your supervisor, not another student."))
S["v06-f6"]=lambda: f_realia(tbl("Portmere General","Two-week pattern",
    ["","M","T","W","T","F","S","S"],
    [["Week 1","E","E","E","&mdash;","L","&mdash;","N"],
     ["Week 2","N","&mdash;","E","L","L","?","&mdash;"]],
    note="E = early 07:00&ndash;15:00 &middot; L = late 14:00&ndash;22:00 &middot; N = night"), 460)
S["v06-f7"]=lambda: f_icons([("shift","1"),("teacher","2"),("laundry","3"),("shopping","4"),
    ("carer","5"),("bed","6"),("cafe","7")], cols=4, numbered=True)
S["v06-f8"]=lambda: f_realia(tbl("Staff room","This week",
    ["","Mon","Tue","Wed","Thu","Fri"],
    [["Early","Chen","Chen","Khan","Chen","Khan"],
     ["Late","Khan","Abara","Chen","<b>SWAP?</b>","&nbsp;"]],
    note="Two shifts are being swapped. One block is empty."), 470)
S["v06-f9"]=lambda: f_scene(720,380, people=[("mei",250,166,{}),("grace",430,174,{})],
    props=[("shift",540,70,0.75),("notebook",330,170,0.4),("table",180,250,0.8)])
S["v06-f10"]=lambda: f_realia(tbl("","Week planner",["","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    [["Morning","","","","","","",""],["Afternoon","","","","","","",""],
     ["Evening","","","","","","",""]]), 500)
S["v06-f11"]=lambda: f_realia(tbl("Portmere General","Weekly hours",
    ["Day","Start","Finish","Break","Total"],
    [["Mon","07:00","15:00","30","7.5"],["Tue","07:00","15:00","<b>not taken</b>","8.0"],
     ["Wed","07:00","15:00","30","7.5"],["Fri","14:00","22:00","<b>not taken</b>","8.0"],
     ["Sat","09:00","13:00","&mdash;","4.0"],["","","","<b>Total</b>","<b>35.0</b>"]],
    numcols=(3,4), note="Signed: M. Chen"), 470)
S["v06-f12"]=lambda: f_panels(
    P(people=[("mei",150,166,{"smile":False})], props=[("shift",260,70,0.6)], floor=0.82),
    P(people=[("mei",130,166,{"seated":True}),("ahmad",240,180,{"seated":True})],
      props=[("desk",190,190,0.7),("notebook",210,170,0.4)], floor=0.82),
    lt="Mon", rt="Thu")
S["v06-f13"]=lambda: f_scene(820,400, people=[("mei",140,166,{}),("grace",250,174,{}),
    ("ahmad",360,180,{}),("priya",500,172,{}),("yusuf",620,186,{}),("tomas",730,180,{})],
    props=[("shift",420,60,0.6),("table",180,255,0.9),("carer",80,150,0.45)],
    clockat=(300,70,24,2,50))
S["v06-f14"]=lambda: f_chart([("35 to 45",8),("20 to 35",7),("over 45",5),("under 20",4)],
    unit="students")
S["v06-f15"]=lambda: f_scene(700,380, people=[("yusuf",250,186,{"smile":False,"seated":True})],
    props=[("table",190,255,1.2),("lecture",230,180,0.4),("phone",340,190,0.4),("timetable",540,80,0.6)],
    clockat=(110,80,24,12,0))

# ---------------- Unit 7 ----------------
S["v07-f1"]=lambda: f_icons([("cash","cash"),("bankcard","card"),("bank","bank"),("coins","coins"),
    ("receipt","receipt"),("pricetag","price"),("sale","sale"),("salary","payslip")], cols=4)
S["v07-f2"]=lambda: f_scene(800,390, behind=[("tomas",600,180,{})],
    people=[("priya",200,172,{}),("nadia",310,174,{})],
    counter_=(470,222,330,124), props=[("laundry",500,150,0.5),("pricetag",690,150,0.45)],
    sign_=(120,54,220,42,"12 A MONTH",ACCENT,15))
S["v07-f3"]=lambda: f_icons([("laundry","washing machine"),("bed","bed"),("phone","phone"),
    ("bus","bicycle"),("cooker","cooker"),("computer","laptop")], cols=3)
S["v07-f4"]=lambda: f_realia(doc("The same washing machine, two offers", None,
    tags([("280","today, in cash",None),("12","a month &times; 30","total 360")])+
    "<p style='margin-top:14px'>30 &times; 12 = <b>360</b>. The cash price is <b>280</b>.</p>"
    "<p style='font-size:12px;color:#6b6861'>The difference is 80. The total is printed at the "
    "bottom, in the smallest type on the card.</p>"), 430)
S["v07-f5"]=lambda: f_realia(doc("Quay Road Electrical","Washing machine &middot; 8 kg",
    "<p style='font-family:Bricolage Grotesque,sans-serif;font-size:30px;font-weight:800;margin:4px 0'>"
    "12 a month</p><p><i>No payment today</i></p>"
    "<p>30 monthly payments of 12. <b>Total payable 360.</b> Cash price 280.</p>"
    "<p>If you miss a payment, a fee of 15 is added and we may ask for the full balance.</p>"
    "<p>You must be over 18 and have a bank account in this country. We will check whether you have "
    "borrowed before.</p>", "<b>instalment</b> &mdash; one monthly payment &middot; "
    "<b>total payable</b> &mdash; everything you will pay in the end"))
S["v07-f6"]=lambda: f_realia(tbl("Kestrel Logistics","Payslip &middot; October",
    ["","","Year to date"],
    [["Hours","152","1,364"],["Gross pay","1,478.40","13,276.00"],
     ["&nbsp;&nbsp;Tax","&minus;196.00","&minus;1,760.00"],
     ["&nbsp;&nbsp;Insurance","&minus;88.70","&minus;796.00"],
     ["&nbsp;&nbsp;Uniform","&minus;12.00","&minus;48.00"],
     ["<b>Net pay</b>","<b>1,181.70</b>","<b>10,672.00</b>"]], numcols=(1,2)), 460)
S["v07-f7"]=lambda: f_icons([("pricetag","1"),("coins","2"),("calendar","3"),("sale","4"),
    ("receipt","5"),("bankcard","6")], cols=3, numbered=False)
S["v07-f8"]=lambda: f_realia(form("Quay Road Electrical &mdash; Price card",
    [("Item","Washing machine 8 kg"),("Cash price","280"),("Monthly","12"),("Months","30"),
     ("Total payable",""),("Deposit","")]))
S["v07-f9"]=lambda: f_scene(720,380, behind=[("tomas",480,180,{})],
    people=[("priya",230,172,{}),("nadia",330,174,{})],
    counter_=(390,216,320,122), props=[("phone",260,152,0.42),("pricetag",560,150,0.42)])
S["v07-f10"]=lambda: f_realia(tbl("","Compare two offers",["","Offer A","Offer B"],
    [["Pay today","",""],["Monthly","",""],["Months","",""],["Total","",""],
     ["Which is cheaper?","",""]]), 420)
S["v07-f11"]=lambda: f_realia(doc("Monthly budget", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:16px;line-height:1.95'>"
    "In &mdash; 1,181<br>rent &mdash; 420<br>bills &mdash; 95<br>food &mdash; 160<br>"
    "bus &mdash; 58<br>phone &mdash; 14<br><u>washing machine &mdash; 12?</u><br>"
    "<b>left &mdash; 422</b></p>"), 340)
S["v07-f12"]=lambda: f_panels(
    P(behind=[("tomas",260,180,{})], people=[("priya",120,172,{})], counter_=(200,200,180,104),
      props=[("phone",140,150,0.4)], floor=0.82),
    P(people=[("priya",110,172,{}),("nadia",200,174,{}),("mei",290,166,{})],
      props=[("laundry",360,200,0.6),("table",160,250,0.9),("cash",190,215,0.35)], floor=0.82),
    lt="Tue", rt="30th")
S["v07-f13"]=lambda: f_scene(820,400, behind=[("tomas",650,180,{})],
    people=[("priya",130,172,{}),("nadia",230,174,{}),("yusuf",340,186,{}),("lucia",440,172,{})],
    counter_=(520,220,300,124), props=[("laundry",550,150,0.45),("cooker",60,230,0.6),
    ("sale",290,60,0.5)])
S["v07-f14"]=lambda: f_chart([("save first",9),("pay monthly",7),("buy second-hand",5),("borrow from family",3)])
S["v07-f15"]=lambda: f_scene(700,380, people=[("oksana" if "oksana" in CAST else "priya",250,172,{"smile":False,"seated":True})],
    props=[("table",190,255,1.2),("salary",220,180,0.38),("salary",300,180,0.38),
    ("phone",390,190,0.4)], clockat=(110,80,24,11,0))

# ---------------- Unit 8 ----------------
S["v08-f1"]=lambda: f_icons([("rice","rice"),("bread","bread"),("eggs","eggs"),("milk","milk"),
    ("cheese","cheese"),("chicken","chicken"),("fish","fish"),("tomato","tomatoes"),
    ("onion","onions"),("apple","apples"),("banana","bananas"),("water","water")], cols=6)
S["v08-f2"]=lambda: f_scene(820,400, people=[("linh" if "linh" in CAST else "lucia",180,172,{}),
    ("nadia",330,174,{}),("priya",520,172,{}),("mei",690,166,{})],
    props=[("cooker",110,200,0.8),("table",420,255,1.0),("fridge",760,160,0.85),
    ("onion",390,218,0.35),("rice",470,218,0.35)])
S["v08-f3"]=lambda: f_icons([("water","bottle"),("bag","bag"),("rice","box"),("cheese","tin"),
    ("bread","packet"),("milk","carton")], cols=3)
S["v08-f4"]=lambda: f_realia(doc("Two cereal boxes", None,
    tags([("22 g","sugar per 100 g","Box A"),("7 g","sugar per 30 g serving","Box B")])+
    "<p style='margin-top:14px'>Box B per 100 g: 7 &divide; 30 &times; 100 = <b>23.3 g</b>.</p>"
    "<p style='font-size:12px;color:#6b6861'>Box B looked like a third of Box A. It has slightly "
    "more. A serving is whatever the company decides it is.</p>"), 440)
S["v08-f5"]=lambda: f_realia(doc("Portmere Community Kitchen &middot; Quay Road","Eating well on less",
    "<ol><li><b>Cook once, eat three times.</b> A pot of rice and beans takes forty minutes and "
    "feeds you three evenings.</li>"
    "<li><b>Buy the whole thing.</b> A whole chicken costs about half as much per kilo as the "
    "pieces. It takes ten minutes to cut up and the bones make soup.</li>"
    "<li><b>Frozen vegetables are not worse.</b> They are picked and frozen the same day, they cost "
    "less, and none of them go bad in your fridge on Thursday.</li>"
    "<li><b>Write the list at home.</b> People who shop with a list spend about a fifth less.</li></ol>",
    "Free cooking sessions, Tuesdays at 6, no booking. Bring nothing."))
S["v08-f6"]=lambda: f_realia(doc("Portmere Community Kitchen","Rice and beans &middot; for 6",
    table_html(["Ingredient","Amount","Cost"],
    [["Rice","1 kg","1.80"],["Beans, dried","500 g","1.10"],["Onions","3","0.60"],
     ["Tomatoes, tinned","2 tins","1.40"],["Chicken, whole","1.4 kg","5.46"],
     ["Oil, salt, spices","&mdash;","0.60"]])+
    "<ol><li>Soak the beans overnight.</li><li>Cut the onions and the chicken.</li>"
    "<li>Cook the chicken 15 minutes.</li><li>Add everything else and the water.</li>"
    "<li>40 minutes. Don't look at it.</li></ol>",
    "<b>Total 10.96 &middot; 1.83 per person</b>"))
S["v08-f7"]=lambda: f_count([("rice",1,"rice"),("eggs",2,"eggs"),("milk",1,"milk"),
    ("tomato",4,"tomatoes"),("onion",3,"onions"),("cheese",1,"cheese")])
S["v08-f8"]=lambda: f_realia(tbl("Shopping","List",["","Item","Amount","Price"],
    [["&#10003;","Rice","2 kg","3.40"],["&#10003;","Beans","500 g","1.10"],
     ["&#10003;","Chicken","1.4 kg","5.46"],["&#9744;","Tomatoes","2 tins","1.40"],
     ["&#9744;","Onions","?","&nbsp;"],["&#9744;","Oil","?","&nbsp;"],
     ["&#9744;","Bread","1","1.20"],["","","<b>Total</b>","<b>&nbsp;</b>"]], numcols=(3,)), 440)
S["v08-f9"]=lambda: f_scene(720,380, behind=[("oskar",480,176,{})],
    people=[("nadia",240,174,{}),("mei",340,166,{})],
    counter_=(400,212,310,122), props=[("chicken",430,160,0.45),("chicken",580,160,0.35)])
S["v08-f10"]=lambda: f_realia(tbl("","Shopping list",["Item","Quantity","Price"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],
     ["","",""],["","",""],["<b>Total</b>","","&nbsp;"]], numcols=(2,)), 420)
S["v08-f11"]=lambda: f_realia(tbl("This week","Meals",["Day","Meal"],
    [["Mon","Rice and beans"],["Tue","<i>leftovers</i>"],["Wed","Eggs and bread"],
     ["Thu","Pasta"],["Fri","<i>leftovers</i>"],["Sat","Soup from the bones"],
     ["Sun","Everyone cooks"]], note="<b>Shop: 28.40 &middot; 4.05 a day</b>"), 400)
S["v08-f12"]=lambda: f_panels(
    P(behind=[("oskar",260,176,{})], people=[("nadia",120,174,{})], counter_=(200,198,180,104),
      props=[("chicken",210,152,0.4)], floor=0.82),
    P(people=[("nadia",110,174,{"seated":True}),("mei",190,166,{"seated":True}),
      ("priya",270,170,{"seated":True}),("tomas",350,180,{})],
      props=[("table",150,235,1.3)], floor=0.82),
    lt="Saturday", rt="Sunday")
S["v08-f13"]=lambda: f_scene(820,400, people=[("priya",150,172,{}),("linh" if "linh" in CAST else "lucia",260,172,{}),
    ("nadia",390,174,{}),("mei",520,166,{"seated":True}),("tomas",640,180,{}),("yusuf",750,186,{})],
    props=[("cooker",90,200,0.75),("table",450,255,1.1),("shoppinglist",330,215,0.35),
    ("bread",600,215,0.35)])
S["v08-f14"]=lambda: f_chart([("25 to 40",9),("40 to 60",6),("under 25",5),("over 60",3)], unit="students")
S["v08-f15"]=lambda: f_scene(700,380, people=[("samira" if "samira" in CAST else "mei",230,166,{"smile":False})],
    props=[("fridge",400,150,1.0),("jobnotice",150,170,0.4),("phone",560,180,0.4)], floor=0.82)
