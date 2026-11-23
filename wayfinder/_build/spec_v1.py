# -*- coding: utf-8 -*-
"""Book 2 figure specs, Starting Point to Unit 4."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

S["v00-f1"]=lambda: f_scene(800,390, people=[("nkemelu",700,176,{}),("nadia",140,172,{"seated":True}),
    ("ahmad",250,178,{"seated":True}),("lucia",360,172,{"seated":True}),("mei",470,166,{"seated":True}),
    ("priya",580,170,{"seated":True})],
    board=(520,30,230,96,"ROOM 7",[("Access","English")]),
    props=[("table",180,250,0.9),("table",420,250,0.9),("computer",70,160,0.5)])

# ---------------- Unit 1 ----------------
S["v01-f1"]=lambda: f_icons([("student","student"),("teacher","teacher"),("carer","nurse"),
    ("warehouse","warehouse worker"),("cafe","café worker"),("cleaner","cleaner"),
    ("driver","driver"),("carer","carer")], cols=4)
S["v01-f2"]=lambda: f_scene(800,400, behind=[("oyelaran",580,170,{})],
    people=[("nadia",180,174,{}),("ahmad",290,180,{}),("lucia",390,172,{})],
    counter_=(460,226,340,128), board=(600,30,190,86,"COURSES",[("Nursing","Room 7")]),
    props=[("application",500,164,0.42)], clockat=(90,80,26,7,0))
S["v01-f3"]=lambda: f_icons([("application","application"),("studentcard","student card"),
    ("lecture","course"),("deadline","deadline"),("reference","reference"),
    ("qualification","qualification")], cols=3)
S["v01-f4"]=lambda: f_realia(screen("Enrollment &middot; occupation",
    [("Choose one","Student / Employed / Unemployed / Retired"),
     ("Nadia works 2 mornings and studies 4 evenings",""),("You can tick one","")],
    btn="NEXT", flags=(0,)), 430)
S["v01-f5"]=lambda: f_realia(doc("Northside Technical College &middot; Evening program",
    "Nursing Access &middot; Part-time",
    "<p><b>Starts</b> 5 October. <b>Length</b> one year, two evenings a week, 6:00&ndash;9:00 p.m.</p>"
    "<p><b>Entry requirements</b></p><ol><li>English at Level A2 or above. We test you here; the test is free.</li>"
    "<li>One reference from an employer, a teacher or a volunteer supervisor.</li>"
    "<li>Proof of address.</li></ol>"
    "<p>You do <b>not</b> need a qualification from this country. You do <b>not</b> need experience "
    "in a hospital. Many of our students start with neither.</p>"
    "<p><b>To enroll:</b> come to the desk in Building 2 before <b>30 September</b>.</p>",
    "<b>enroll</b> &mdash; put your name on a course &middot; <b>reference</b> &mdash; a letter about you"))
S["v01-f6"]=lambda: f_realia(tbl("Northside Technical College","Monday evening &middot; Room 7",
    ["Name","Occupation","Evening"],
    [["N. Rahman","Café worker / student","Mon &amp; Wed"],["A. Sultani","Warehouse","Mon &amp; Wed"],
     ["L. Pham","Carer","Mon &amp; Wed"],["O. Kovalenko","&nbsp;","Mon &amp; Wed"],
     ["A. Khan","Driver","Mon &amp; Wed"],["S. Haddad","Cleaner","Mon only"],
     ["M. Chen","Nursing student","Mon &amp; Wed"],["T. Alcaraz","Café supervisor","Mon only"]]), 480)
S["v01-f7"]=lambda: f_icons([("application","1"),("lecture","2"),("studentcard","3"),("deadline","4"),
    ("phone","5"),("reference","6"),("teacher","7"),("student","8")], cols=4, numbered=False)
S["v01-f8"]=lambda: f_realia(tbl("Northside Technical College","Courses &middot; Building 2",
    ["Course","Evenings","Room","Starts"],
    [["Nursing Access","Mon &amp; Wed","7","5 October"],["Business Level 1","Tue &amp; Thu","12","1 October"],
     ["English A2","Mon &amp; Wed","7","&nbsp;"],["Forklift","Saturday","Yard","12 October"],
     ["Computing","Tue","9","8 October"]]), 470)
S["v01-f9"]=lambda: f_scene(680,370, behind=[("oyelaran",460,172,{})], people=[("nadia",230,174,{})],
    counter_=(360,208,310,122), props=[("application",390,158,0.4),("computer",560,152,0.42)])
S["v01-f10"]=lambda: f_realia(form("Northside Technical College &mdash; Enrollment",
    [("Name",""),("Date of birth",""),("Address",""),("Occupation",""),("Course",""),
     ("Reference &mdash; name",""),("Reference &mdash; role",""),("Signature","")]))
S["v01-f11"]=lambda: f_realia(doc("The Market Café, Portmere","Reference",
    "<p>I have been Nadia Rahman's supervisor for six months.</p>"
    "<p>She arrives when she says she will and she has never once left a problem for the next "
    "shift to find. She asks when she is not sure, which is rarer than it should be.</p>"
    "<p>I would employ her again without hesitating.</p>",
    "G. Abara &middot; Supervisor &middot; 21 September"))
S["v01-f12"]=lambda: f_panels(
    P(behind=[("grace",250,172,{})], people=[("nadia",110,174,{})], counter_=(190,202,180,104),
      props=[("cafe",210,154,0.35)], floor=0.82),
    P(behind=[("oyelaran",250,170,{})], people=[("nadia",110,174,{})], counter_=(190,202,180,104),
      props=[("application",200,152,0.35)], floor=0.82),
    lt="Sept 3", rt="Sept 21")
S["v01-f13"]=lambda: f_scene(820,400, behind=[("oyelaran",600,170,{})],
    people=[("nadia",120,174,{}),("ahmad",215,180,{}),("lucia",305,172,{}),("mei",395,166,{}),
    ("priya",700,170,{}),("tomas",760,178,{})],
    counter_=(480,224,340,128), board=(620,28,190,84,"COURSES",[("Nursing","Room 7")]),
    props=[("application",510,160,0.38),("jobnotice",60,70,0.5)])
S["v01-f14"]=lambda: f_chart([("for work",9),("for a course",7),("because I live here",5),("for my family",3)])
S["v01-f15"]=lambda: f_scene(680,370, behind=[("oyelaran",460,172,{})], people=[("priya",230,170,{"smile":False})],
    counter_=(360,208,310,122), props=[("qualification",250,150,0.4),("deadline",560,150,0.42)])

# ---------------- Unit 2 ----------------
S["v02-f1"]=lambda: f_icons([("lecture","lecture"),("desk","desk"),("deadline","deadline"),
    ("studentcard","student card"),("canteen","canteen"),("printer","printer"),
    ("library","library"),("map","noticeboard")], cols=4)
S["v02-f2"]=lambda: f_scene(780,390, people=[("ahmad",230,180,{"smile":False}),("lucia",520,172,{}),
    ("mei",600,166,{})], props=[("map",60,64,0.8),("door",680,140,1.0),("jobnotice",390,70,0.55)],
    clockat=(300,80,26,6,30))
S["v02-f3"]=lambda: f_icons([("teacher","ask"),("map","map"),("student","classmate"),
    ("phone","call"),("notebook","write it down"),("computer","show")], cols=3)
S["v02-f4"]=lambda: f_realia(screen("English test &middot; email",
    [("Line 1","The test is on Thursday at 6:00 p.m."),
     ("Lines 2&ndash;10","[long paragraph and a link]"),
     ("Line 11","Room 12, Building 3")], btn=None, flags=(2,)), 440)
S["v02-f5"]=lambda: f_realia(doc("Northside Technical College &middot; Student handbook, page 11",
    "Attendance",
    "<p>You <b>must</b> attend <b>80%</b> of your classes. That is four evenings in five.</p>"
    "<p>If you cannot come, <b>notify us before the class</b>, not after. A message is enough. You "
    "do not need a reason.</p>"
    "<p>After <b>three</b> absences without a message, your tutor will contact you. After "
    "<b>six</b>, your place on the course is reviewed.</p>"
    "<p>We know you work. We know buses are late and children get sick. <b>Tell us and it is fine. "
    "Say nothing and it is not.</b></p>",
    "<b>notify</b> &mdash; tell somebody officially &middot; <b>review</b> &mdash; look at again"))
S["v02-f6"]=lambda: f_realia(tbl("Room 7","Evening timetable",
    ["Day","Class","Time","Tutor","Room"],
    [["Monday","English A2","18:00&ndash;21:00","Nkemelu","7"],
     ["Tuesday","&mdash;","","",""],
     ["Wednesday","English A2","18:00&ndash;21:00","Nkemelu","7"],
     ["Thursday","Test","18:00","Oyelaran","<b>12 &middot; Bldg 3</b>"],
     ["Friday","&mdash;","","",""]]), 520)
S["v02-f7"]=lambda: f_icons([("jobnotice","1"),("deadline","2"),("lecture","3"),("map","4"),
    ("studentcard","5"),("printer","6"),("canteen","7"),("door","8")], cols=4, numbered=False)
S["v02-f8"]=lambda: f_realia(form("Northside Technical College &mdash; Room 12",
    [("Class","English A2 &middot; test"),("Tutor","A. Oyelaran"),("Time","18:00"),
     ("Note","THIS CLASS HAS MOVED"),("New building",""),("New room","")]))
S["v02-f9"]=lambda: f_scene(700,370, behind=[("priya",470,170,{})], people=[("ahmad",230,180,{})],
    counter_=(370,208,320,122), props=[("map",400,154,0.4),("phone",260,154,0.4),("notebook",580,158,0.35)])
S["v02-f10"]=lambda: f_scene(660,330, floor=0.96, panelbg="#eef1ec",
    props=[("school",50,30,0.7),("school",210,30,0.7),("library",370,30,0.7),
    ("canteen",50,165,0.7),("printer",210,165,0.7),("busstop",370,160,0.7)],
    sign_=(500,150,100,56,"YOU",ACCENT,15))
S["v02-f11"]=lambda: f_realia(doc("Message to a tutor", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:16px;line-height:1.9'>"
    "Hello Ms Nkemelu,<br><br>This is Linh Pham from Monday English.<br>"
    "I can't come tonight &mdash; my shift changed at four.<br>"
    "I'll get the notes from Adeel and do the writing task.<br><br>Sorry for the short notice.<br>Linh</p>"), 400)
S["v02-f12"]=lambda: f_panels(
    P(people=[("ahmad",130,180,{"smile":False})], props=[("phone",230,130,0.5),("door",320,140,0.9)], floor=0.82),
    P(people=[("ahmad",130,180,{"seated":True})], props=[("desk",230,180,0.8),("notebook",250,160,0.4)],
      clockat=(330,60,22,5,55), floor=0.82),
    lt="5:40", rt="5:55")
S["v02-f13"]=lambda: f_scene(820,390, behind=[("priya",640,170,{})],
    people=[("ahmad",130,180,{}),("lucia",230,172,{}),("mei",320,166,{}),("nadia",410,174,{}),
    ("tomas",740,178,{})], counter_=(540,214,280,120),
    props=[("map",60,60,0.6),("jobnotice",250,60,0.5),("door",470,140,0.9)], clockat=(380,70,24,5,40))
S["v02-f14"]=lambda: f_chart([("email",10),("a classmate",8),("noticeboard",6),("the tutor",5),("the website",3)],
    unit="students who use it")
S["v02-f15"]=lambda: f_scene(680,370, people=[("mei",250,166,{"smile":False})],
    props=[("door",400,120,1.1),("phone",170,150,0.45),("jobnotice",520,110,0.5)],
    clockat=(100,80,24,6,10))

# ---------------- Unit 3 ----------------
S["v03-f1"]=lambda: f_icons([("happy","friendly"),("tired","busy"),("fine","quiet"),("angry","loud"),
    ("worried","careful"),("student","organized"),("teacher","patient"),("nervous","short"),
    ("carer","tall"),("sick","funny")], cols=5)
S["v03-f2"]=lambda: f_scene(800,390, people=[("priya",160,172,{}),("mei",390,166,{"seated":True}),
    ("lucia",600,172,{}),("nadia",710,174,{})],
    props=[("washup",90,196,0.8),("table",350,250,1.0),("shopping",560,220,0.55),
    ("fridge",730,160,0.85),("rug",250,280,0.5)])
S["v03-f3"]=lambda: f_icons([("laundry","rota"),("bins","bins"),("washup","washing up"),
    ("iron","laundry"),("shopping","shopping"),("key","keys")], cols=3)
S["v03-f4"]=lambda: f_realia(screen("Group message &middot; 4 people",
    [("Priya","Bins tonight, it's my week"),("Mei","Thanks!"),
     ("+44 7700 900 118 &mdash; no name","Hi all &mdash; landlord needs 40 each for the boiler by tonight. Send it to me."),
     ("Linh","?")], btn=None, flags=(2,)), 440)
S["v03-f5"]=lambda: f_realia(doc("12 Fenner Street &middot; Apartment 4B","House agreement",
    "<ol><li><b>Shared spaces</b> are the kitchen, the bathroom and the hall. Each person cleans "
    "the kitchen for one week in four. The rota is on the fridge.</li>"
    "<li><b>Bins</b> go out on Tuesday night. Whoever is on the kitchen rota that week does it.</li>"
    "<li><b>Guests</b> are fine. A guest who stays more than three nights is not a guest, and the "
    "other tenants should be asked first.</li>"
    "<li><b>Noise</b> &mdash; after eleven at night, use headphones.</li></ol>"
    "<p>This is not a legal document. It is four people agreeing in advance, so that nobody has to "
    "have the conversation twice.</p>",
    "Signed: &nbsp;M. Chen &nbsp;&nbsp; P. Raghavan &nbsp;&nbsp; ________ &nbsp;&nbsp; ________"))
S["v03-f6"]=lambda: f_realia(tbl("Apartment 4B","Kitchen rota",
    ["Week","Kitchen","Bins","Done"],
    [["1","Nadia","Nadia","&#10003;"],["2","Linh","Linh","&nbsp;"],["3","Mei","Mei","&#10003;"],
     ["4","Priya","Priya","&#10003;"],["5","&nbsp;","&nbsp;","&nbsp;"]],
    note="Linh added in August, different pen."), 440)
S["v03-f7"]=lambda: f_count([("key",3,"keys"),("bag",1,"bicycle"),("computer",1,"laptop"),
    ("plant" if "plant" in ICON else "park",2,"plants"),("bed",1,"suitcase"),("concert",1,"guitar")])
S["v03-f8"]=lambda: f_realia(screen("Apartment 4B &middot; bins",
    [("Nadia, 18:04","Whose week is it?"),("Mei, 18:11","Not mine, I did last week"),
     ("Priya, 18:40","I'll do it, I'm in"),("Linh, 21:02","Was there a rota this whole time?")],
    btn=None), 430)
S["v03-f9"]=lambda: f_scene(700,370, people=[("nadia",250,174,{"seated":True}),("linh" if "linh" in CAST else "mei",430,168,{"seated":True})],
    props=[("table",280,250,1.2),("laundry",150,230,0.5),("fridge",600,170,0.8)], window_=(520,60,120,96))
S["v03-f10"]=lambda: f_realia(tbl("","Rota",["Week","Kitchen","Bins","Bathroom","Hall"],
    [["1","","","",""],["2","","","",""],["3","","","",""],["4","","","",""]]), 440)
S["v03-f11"]=lambda: f_realia(doc("On the kitchen table", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:17px;line-height:2'>"
    "Linh &mdash;<br>Bins done. Tuesday is mine from now on.<br>"
    "A parcel came for you, it's under the stairs.<br><br>Priya, 19:40</p>"), 340)
S["v03-f12"]=lambda: f_panels(
    P(people=[("mei",120,166,{}),("priya",220,170,{}),("nadia",310,174,{})],
      props=[("bag",60,230,0.5),("door",360,140,0.9)], floor=0.82),
    P(people=[("mei",110,166,{"seated":True}),("priya",200,170,{"seated":True}),
      ("nadia",290,174,{"seated":True})], props=[("table",160,230,1.2),("fridge",350,160,0.7)], floor=0.82),
    lt="August", rt="October")
S["v03-f13"]=lambda: f_scene(820,390, people=[("linh" if "linh" in CAST else "lucia",140,172,{}),
    ("priya",300,172,{}),("mei",480,166,{"seated":True}),("nadia",680,174,{})],
    props=[("bins",80,220,0.6),("washup",250,200,0.75),("table",440,250,1.0),
    ("fridge",740,160,0.85),("laundry",600,210,0.5)])
S["v03-f14"]=lambda: f_chart([("shared equally",8),("me",6),("my partner",4),("my mother",3),("nobody",2)])
S["v03-f15"]=lambda: f_scene(700,370, people=[("tomas",200,180,{"smile":False})],
    props=[("washup",330,190,0.9),("door",560,130,1.0),("cinema",600,70,0.45)], clockat=(90,70,24,12,0))

# ---------------- Unit 4 ----------------
S["v04-f1"]=lambda: f_icons([("sofa","sofa"),("bed","bed"),("table","table"),("chair","chair"),
    ("lamp","lamp"),("shelf","shelf"),("wardrobe","wardrobe"),("mirror","mirror"),
    ("curtains","curtains"),("rug","rug")], cols=5)
S["v04-f2"]=lambda: f_scene(780,390, people=[("yusuf",300,186,{}),("mei",430,140,{})],
    props=[("radiator",640,230,0.8),("door",100,140,1.0)], window_=(450,60,170,120), floor=0.78)
S["v04-f3"]=lambda: f_icons([("cupboard","cupboard"),("fridge","fridge"),("cooker","cooker"),
    ("shower","shower"),("radiator","radiator"),("window","window")], cols=3)
S["v04-f4"]=lambda: f_realia(doc("Two listings, one building", None,
    tags([("FURNISHED","bed &middot; wardrobe &middot; desk",None),
          ("PART FURNISHED","bed only","the same room")])+
    "<p style='margin-top:14px'>Neither listing says what <i>furnished</i> means. The photographs "
    "are of the same room.</p>"), 430)
S["v04-f5"]=lambda: f_realia(doc("Available 1 November","2-bedroom apartment &middot; Market Street",
    table_html(["",""],[["Rent","640 a month"],["Deposit","640 (one month)"],
    ["Floor","Second, no elevator"],["Included","Cooker, fridge, curtains"],
    ["Part furnished","One double bed, one wardrobe"]])+
    "<p style='margin-top:12px'>Heating and water are <b>not</b> included. There is a shared garden "
    "at the back. The kitchen has no cupboards above the sink; the previous tenant took them.</p>"
    "<p>An <b>inventory</b> is signed on the day you move in. What is on the inventory on day one "
    "is what you must leave on the last day.</p>",
    "<b>part furnished</b> &mdash; some furniture, not all"))
S["v04-f6"]=lambda: f_realia(tbl("Market Street","Inventory",
    ["Room","Item","Condition"],
    [["Kitchen","Cooker","Good"],["Kitchen","Fridge","Mark on door"],
     ["Kitchen","Cupboards above sink","<b>NONE</b>"],["Living room","Curtains","Good"],
     ["Bedroom 1","Double bed","Good"],["Bedroom 1","Wardrobe","Handle broken"],
     ["Bathroom","Shower","Good"],["Hall","Light fitting","&nbsp;"]],
    note="Signed by both parties on the day of entry."), 460)
S["v04-f7"]=lambda: f_icons([("bed","1"),("lamp","2"),("shelf","3"),("wardrobe","4"),
    ("mirror","5"),("rug","6"),("curtains","7"),("chair","8")], cols=4, numbered=False)
S["v04-f8"]=lambda: f_realia(tbl("Moving day","Checklist",["","Task","Time"],
    [["&#10003;","Collect van","08:00"],["&#10003;","Load boxes","08:30"],
     ["&#10003;","Read meter at old place","&nbsp;"],["&#10003;","Sign inventory","11:00"],
     ["&#10003;","Unload","11:30"],["&#9744;","Photograph kitchen wall",""],
     ["&#9744;","Check heating works",""],["&#9744;","Return keys",""]]), 440)
S["v04-f9"]=lambda: f_scene(720,380, people=[("yusuf",260,186,{}),("caruso",440,184,{})],
    props=[("cooker",120,200,0.8),("phone",330,160,0.4)], window_=(540,60,140,110), floor=0.80)
S["v04-f10"]=lambda: f_realia(tbl("","Inventory",["Room","Item","How many","Condition"],
    [["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]],
    note="Signed: ____________   ____________"), 460)
S["v04-f11"]=lambda: f_realia(doc("What we still need", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:17px;line-height:2'>"
    "sofa &mdash; 120<br>cupboards &mdash; ?<br><s>new cooker</s> &mdash; one came with it<br>"
    "rug &mdash; 25<br>lamp &mdash; 12<br><s>curtains</s> &mdash; included<br><br>"
    "<b>so far: 157</b></p>"), 340)
S["v04-f12"]=lambda: f_panels(
    P(people=[("yusuf",150,186,{})], props=[("radiator",300,210,0.6)], window_=(200,50,110,80), floor=0.80),
    P(people=[("yusuf",120,186,{}),("mei",230,140,{"seated":True})],
      props=[("sofa",200,200,0.8),("lamp",320,200,0.6),("rug",240,250,0.5)], floor=0.80),
    lt="Viewing", rt="3 weeks")
S["v04-f13"]=lambda: f_scene(820,400, people=[("yusuf",230,186,{}),("tomas",330,180,{}),
    ("priya",540,172,{}),("mei",640,140,{})],
    props=[("sofa",420,210,0.7),("bag",150,280,0.5),("door",720,140,1.0)], floor=0.78)
S["v04-f14"]=lambda: f_chart([("storage",9),("a table",6),("a desk",5),("a washing machine",4),("space",3)])
S["v04-f15"]=lambda: f_scene(700,370, people=[("lucia",250,172,{"smile":False,"seated":True})],
    props=[("bed",390,210,0.9),("door",580,130,1.0),("application",180,180,0.4)], floor=0.82)
