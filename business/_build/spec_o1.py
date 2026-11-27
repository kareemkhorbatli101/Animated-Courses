# -*- coding: utf-8 -*-
"""Clearline Book 1 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

S["o00-f1"]=lambda: f_realia(doc("Lindmark Freight · Ostberg", None,
    "<table style='width:100%;font-size:13px'>"
    "<tr><td style='width:34%;vertical-align:top'>"
    "<div style='border:2px solid #111;border-radius:6px;padding:10px;text-align:center'>"
    "<div style='font-size:11px;letter-spacing:1px;color:#6b6861'>LINDMARK FREIGHT</div>"
    "<div style='margin:8px 0;font-size:34px'>&#128100;</div>"
    "<div style='font-size:17px'><b>Yara</b></div>"
    "<div style='font-size:17px'><b>HADDAD</b></div>"
    "<div style='font-size:12px;margin-top:4px'>Operations coordinator</div>"
    "<div style='font-size:12px;color:#6b6861'>Operations &middot; ext. 4412</div></div></td>"
    "<td style='width:8%'></td>"
    "<td style='width:34%;vertical-align:top'>"
    "<div style='border:2px dashed #999;border-radius:6px;padding:10px;text-align:center'>"
    "<div style='font-size:11px;letter-spacing:1px;color:#6b6861'>VISITOR</div>"
    "<div style='margin:14px 0;border-bottom:1px solid #999;height:1px'></div>"
    "<div style='font-size:12px;color:#6b6861'>name</div>"
    "<div style='margin:14px 0;border-bottom:1px solid #999;height:1px'></div>"
    "<div style='font-size:12px;color:#6b6861'>date</div></div></td></tr></table>"))
S["o00-f2"]=lambda: f_realia(tbl("Numbers at work","You see it, you say it",
    ["You see","You say"],
    [["1,250","one thousand two hundred and fifty &middot; <i>or</i> twelve fifty"],
     ["3.5","three point five"],["48 %","forty-eight percent"],
     ["09:45","nine forty-five &middot; oh nine forty-five"],
     ["PO-4417","P O four four one seven"],
     ["+44 20 7946 0102","plus four four &middot; two oh &middot; seven nine four six &middot; oh one oh two"],
     ["<b>03/04/2026</b>","<b>&#9888; two different days. Write <i>3 April 2026</i>.</b>"]]), 540)

# ---------------- Unit 1 ----------------
S["o01-f1"]=lambda: f_icons([("headset","a coordinator"),("clipboard","a supervisor"),
    ("doctor","a technician"),("cashier","a receptionist"),("spreadsheet","an assistant"),
    ("hivis","a driver"),("meeting","a manager"),("iron","an engineer"),
    ("badge","a colleague"),("folder","a buyer")], cols=5)
S["o01-f2"]=lambda: f_scene(920,420, people=[("yara",330,172,{}),
    ("marek",150,180,{"seated":True}),("nour",240,168,{"seated":True}),
    ("wei",470,170,{"seated":True}),("hanna",560,172,{"seated":True}),
    ("ines",650,172,{"seated":True})],
    board=(740,20,170,110,"WHO'S WHO",[("Yara","ops"),("Anders","wh")]),
    props=[("desk",110,0,1.3),("computer",180,150,0.5),("computer",500,150,0.5),
    ("window",760,150,0.9)])
S["o01-f3"]=lambda: f_icons([("meeting","asking"),("worried","not knowing"),
    ("folder","passing it on"),("note","writing it down"),
    ("handshake","introducing"),("email","forwarding")], cols=3)
S["o01-f4"]=lambda: f_realia(tbl("","Who does what here?",
    ["Name","Ask me about"],
    [["","" ],["",""],["",""],["",""],["",""],["",""],["",""],["",""]],
    note="Is anybody the person to ask about two things? Is anything nobody's?"), 460)
S["o01-f5"]=lambda: f_realia(tbl("Lindmark Freight · Ostberg site",
    "Who's who &middot; updated 4 November",
    ["Name","Job","Dept","Ext.","Ask me about"],
    [["Daniel Okonjo","Site manager","Management","4400","anything, but ask the others first"],
     ["Yara Haddad","Operations coordinator","Operations","4412","bookings, customs papers"],
     ["Anders Holm","Warehouse supervisor","Warehouse","4420","pallets, space, forklifts"],
     ["Wei Zhang","Transport planner","Operations","4415","trucks, drivers, routes"],
     ["Marek Dolny","Finance assistant","Finance","4430","invoices, purchase orders"],
     ["Nour Khalil","People operations","People","4440","contracts, holiday, training"],
     ["Hanna Lindqvist","Contracts officer","Legal","4450","terms, insurance, claims"],
     ["Paula Moreau","Account manager","Sales","4460","prices, new customers"],
     ["Lars Brandt","Night supervisor","Warehouse","4421","nights, security"],
     ["Ines Costa","Customs clerk","Operations","4413","import papers, duty"],
     ["Tomas Ek","Technician","Maintenance","4470","machines, repairs"]],
    note="Eleven of us on this site."), 580)
S["o01-f6"]=lambda: f_realia(tbl("Word study","Verb and person",
    ["Verb","Person","Example"],
    [["to manage","a manager","She <b>manages</b> the site."],
     ["to supervise","",""],["to coordinate","",""],["to assist","",""],
     ["to drive","",""],["to buy","",""]]), 460)
S["o01-f7"]=lambda: f_chart([("Operations",3),("Warehouse",2),("Finance",1),("People",1),
    ("Legal",1),("Sales",1),("Maintenance",1),("Management",1)],
    unit="people on the Ostberg site", w=480)
S["o01-f8"]=lambda: f_icons([("iron","a broken machine"),("pallet","a pallet in the wrong place"),
    ("invoice","an invoice with a question"),("form","a holiday request"),
    ("cashier","a customer at a counter"),("truck","a truck at the gate")], cols=3)
S["o01-f9"]=lambda: f_realia(tbl("Reception · visitor sign-in","Monday 16 November",
    ["In","Name","Company","Visiting","Badge","Out"],
    [["08:40","K. Alvarsson","Nordkap Foods","P. Moreau","V-21","11:10"],
     ["09:05","T. Virtanen","Harbour Mutual","M. Dolny","V-22","10:30"],
     ["09:20","R. Sousa","","A. Holm","V-23","12:00"],
     ["09:55","L. Weber","Juno Textiles","Y. Haddad","V-24","13:40"],
     ["10:15","D. Farah","Arvo Components","Y. Haddad","V-25","11:45"],
     ["10:50","S. Nilsen","Terrace Hotels","N. Khalil","V-26","11:20"],
     ["","","","","",""]],
    note="All visitors must be met at reception."), 580)
S["o01-f10"]=lambda: f_scene(900,420, people=[("yara",300,172,{}),("anders",420,180,{})],
    props=[("racking",60,0,1.5),("forklift",700,0,1.35),("clipboard",470,130,0.5),
    ("pallet",180,0,0.9),("board",780,40,0.7)])
S["o01-f11"]=lambda: f_realia(tbl("Two staff lists","Same company",
    ["March","November"],
    [["Okonjo &middot; 4400<br>Haddad &middot; <b>4408</b><br>Holm &middot; 4420<br>"
      "Zhang &middot; 4415<br>Dolny &middot; <b>4431</b><br><b>Svensson &middot; 4450</b><br>"
      "Moreau &middot; 4460",
      "Okonjo &middot; 4400<br>Haddad &middot; <b>4412</b><br>Holm &middot; 4420<br>"
      "Zhang &middot; 4415<br>Dolny &middot; <b>4430</b><br><b>Lindqvist &middot; 4450</b><br>"
      "Moreau &middot; 4460<br><b>Costa &middot; 4413</b>"]]), 500)
S["o01-f12"]=lambda: f_realia(doc("Two introductions", None,
    "<p><b>A.</b> Hello everyone. My name is Yara Haddad and I have just joined the company. I am "
    "looking forward to working with you all.</p>"
    "<p style='font-size:12px;color:#6b6861'>Three lines. No job, no department, no number.</p>"
    "<p style='margin-top:14px'><b>B.</b> Hello everyone. I am Yara Haddad, the new operations "
    "coordinator. I am the person to ask about bookings and customs papers. I am <b>not</b> the "
    "person to ask about pallets — that is Anders, on 4420. My extension is 4412.</p>"
    "<p style='font-size:12px;color:#6b6861'>Four lines. A job, a department, one thing that is "
    "mine and one that is not, and a number.</p>"))
S["o01-f13"]=lambda: f_realia(form("About me", [("Name",""),("Job title",""),("Department",""),
    ("I am the person to ask about",""),("I am <b>not</b> the person to ask about",""),
    ("Extension and hours","")]), 480)
S["o01-f14"]=lambda: f_scene(960,430, behind=[("ines",760,172,{}),("nour",830,168,{})],
    people=[("karin",150,172,{"seated":True}),("ravi",230,176,{"seated":True}),
    ("omar",310,176,{"seated":True}),("sofia",400,172,{}),("marek",470,180,{}),
    ("paula",550,170,{}),("lars",620,180,{}),("wei",900,170,{}),("yara",120,172,{})],
    counter_=(700,228,220,112),
    on_counter=[("computer",750,0.42),("badge",850,0.4)],
    props=[("chair",190,0,0.75),("suitcase",260,0,0.6),("board",40,30,0.7),
    ("lift",940,100,1.0)], clockat=(460,46,22,9,10))
S["o01-f15"]=lambda: f_chart([("10 to 49",8),("2 to 9",6),("50 to 249",5),
    ("250 or more",3),("I work alone",2),("I don't work yet",1)])
S["o01-f16"]=lambda: f_scene(840,400, people=[("yara",280,172,{"seated":True,"smile":False})],
    props=[("desk",220,0,1.4),("computer",290,146,0.5),("email",400,196,0.45),
    ("chair",560,0,0.8)], window_=(640,56,130,96), clockat=(100,46,22,16,40))

# ---------------- Unit 2 ----------------
S["o02-f1"]=lambda: f_icons([("warehouse","a factory"),("cashier","a shop"),
    ("racking","a warehouse"),("truck","a truck"),("desk","an office"),
    ("bloodtest","a laboratory"),("ship","a ship"),("receipt","a receipt"),
    ("dashboard","a screen of numbers"),("iron","a repair")], cols=5)
S["o02-f2"]=lambda: f_scene(860,410, people=[("sofia",300,172,{"seated":True}),
    ("karin",420,172,{"seated":True})],
    board=(620,24,210,120,"WHAT WE DO",[("1 Numbers","3 For whom"),("2 Meaning","4 Not us")]),
    props=[("table",240,250,1.6),("computer",310,196,0.45),("essay",400,200,0.45)],
    window_=(100,50,120,96))
S["o02-f3"]=lambda: f_icons([("carton","a product"),("iron","a service"),
    ("cafe","a product and a service"),("cashier","a customer"),
    ("truck","a supplier"),("pricetag","a price")], cols=3)
S["o02-f4"]=lambda: f_realia(tbl("","What does this company actually do?",
    ["What the website says","What it actually does"],
    [["",""],["",""],["",""]],
    note="<b>Words that tell you nothing:</b>"), 500)
S["o02-f5"]=lambda: f_realia(doc("Lindmark Freight · Ostberg · November 2026",
    "Company profile",
    "<p><b>What we do.</b> We move other companies' goods. We do not make anything and we do not "
    "sell anything. A customer gives us a box, a pallet or a container, and we get it to where it "
    "has to be, with the right papers.</p>"
    "<p style='font-size:19px;text-align:center;margin:12px 0'><b>11</b> staff &nbsp;&middot;&nbsp; "
    "<b>1</b> warehouse &nbsp;&middot;&nbsp; <b>4,000</b> m&sup2; &nbsp;&middot;&nbsp; "
    "<b>6</b> trucks</p>"
    "<p><b>Our services.</b> Sea freight &middot; Air freight &middot; Road transport &middot; "
    "Warehousing &middot; Customs documents &middot; Insurance</p>"
    "<p><b>Who we work for.</b> Factories, importers and shops. Our smallest customer sends one "
    "pallet a month. Our largest sends forty containers a year. We do not work for the public.</p>"
    "<p><b>Why sea.</b> About <b>80 percent</b> of the world's trade in goods travels by sea.</p>",
    "Figure: UNCTAD, <i>Review of Maritime Transport 2025</i>."))
S["o02-f6"]=lambda: f_realia(tbl("Word study","The -s that changes everything",
    ["","I / you / we / they","he / she / it"],
    [["make","make","mak<b>es</b>"],["sell","",""],["buy","",""],
     ["supply","","suppl<b>ies</b>"],["go","",""],["do","",""]]), 460)
S["o02-f7"]=lambda: f_part("How the world's goods travel",
    [("by sea", 80, BLUE), ("road, rail and air", 20, AMBER)], w=500)
S["o02-f8"]=lambda: f_icons([("bread","a bakery"),("iron","a repair workshop"),
    ("computer","a software office"),("park","a farm"),
    ("ship","a shipping office"),("hotel","a hotel")], cols=3)
S["o02-f9"]=lambda: f_realia(doc("Ostberg Trade Fair · stand 4C",
    "Corvid Analytics",
    "<p><i>We take your numbers and tell you what they mean.</i></p>"
    "<p>&bull; Monthly reporting &nbsp; &bull; One-off reviews<br>"
    "&bull; Data clean-up &nbsp; &bull; Training for your own team</p>"
    "<p><b>Stand 4C</b> &middot; hall 2, by the north door</p>"
    "<p>Ask for <b>Sofia Reyes</b> (account manager) or <b>Petra Lund</b> (analyst).</p>",
    "We are here on Tuesday and Wednesday only."))
S["o02-f10"]=lambda: f_scene(900,420, people=[("sofia",330,172,{}),("karin",430,172,{}),
    ("ravi",760,176,{}),("paula",840,170,{})],
    props=[("table",250,250,1.5),("board",120,30,0.9),("flipchart",620,60,0.9),
    ("folder",400,140,0.45)])
S["o02-f11"]=lambda: f_realia(tbl("Two profiles","Same page, different company",
    ["Arvo Components","Corvid Analytics"],
    [["Makes small metal parts<br><b>42 staff</b><br>Sea freight &mdash;<br>"
      "<b>Machining</b><br><b>Heat treatment</b><br>Training &mdash;<br>Sells to 6 countries",
      "Works with other companies' numbers<br><b>20 staff</b><br>Sea freight &mdash;<br>"
      "<b>Monthly reporting</b><br><b>Data clean-up</b><br>Training &#10003;<br>"
      "Works in 3 countries"]]), 500)
S["o02-f12"]=lambda: f_realia(doc("Two descriptions", None,
    "<p><b>A.</b> Arvo Components is a leading provider of integrated fastening solutions, "
    "delivering value through innovation and a customer-centric approach across a diverse range "
    "of industrial sectors.</p>"
    "<p style='font-size:12px;color:#6b6861'>Four lines. No number. Could be any company.</p>"
    "<p style='margin-top:14px'><b>B.</b> We make small metal parts: screws, bolts and fasteners. "
    "We have made them in Ostberg since 1998. We sell to other factories in six countries. We do "
    "not sell to the public.</p>"
    "<p style='font-size:12px;color:#6b6861'>Four sentences. A date, a number, a customer type, "
    "and one thing they do not do.</p>"))
S["o02-f13"]=lambda: f_realia(form("Four sentences", [("What we make or do",""),
    ("Who we sell to",""),("One number",""),("What we do <b>not</b> do","")]), 460)
S["o02-f14"]=lambda: f_scene(980,440, behind=[("sofia",120,172,{}),("paula",760,170,{})],
    people=[("karin",250,172,{}),("ravi",330,176,{}),("omar",410,176,{}),
    ("marek",560,180,{}),("hanna",630,172,{}),("wei",850,170,{}),
    ("ida",920,170,{}),("lars",480,180,{})],
    counter_=(60,232,160,108), 
    on_counter=[("flashcard",110,0.4)],
    props=[("flipchart",700,50,0.85),("table",540,250,1.3),("camera",300,130,0.45),
    ("map",200,40,0.6),("suitcase",390,0,0.6)])
S["o02-f15"]=lambda: f_chart([("a service",9),("a product",7),("both",5),
    ("I don't work yet",2),("neither",1)])
S["o02-f16"]=lambda: f_scene(840,400, people=[("sofia",280,172,{"seated":True,"smile":False})],
    props=[("desk",220,0,1.4),("essay",300,180,0.5),("pen",400,196,0.4),
    ("flashcard",640,120,0.55),("lamp",120,120,0.55)],
    window_=(540,56,110,90), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 3 ----------------
S["o03-f1"]=lambda: f_icons([("clock","six o'clock"),("calendar","a week"),
    ("night","arriving in the dark"),("morning","leaving in daylight"),
    ("timesheet","clocking in"),("canteen","a break"),
    ("shutter","closed"),("cafe","a tea break"),
    ("timetable","a timetable"),("phone","two time zones")], cols=5)
S["o03-f2"]=lambda: f_scene(880,420, people=[("anders",300,180,{}),("ida",390,170,{})],
    counter_=(600,232,240,108),
    on_counter=[("cafe",650,0.42),("cafe",720,0.42)],
    props=[("phone",460,140,0.5),("window",120,50,1.0)],
    panelbg="#242c38", floorbg="#30394a")
S["o03-f3"]=lambda: f_icons([("morning","Monday morning"),("canteen","Wednesday lunchtime"),
    ("night","Friday evening"),("picnic","the weekend"),
    ("calendar","the first of the month"),("shutter","a public holiday")], cols=3)
S["o03-f4"]=lambda: f_realia(tbl("","When is everybody free?",
    ["Hour","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    [["06:00","","","","","","",""],["08:00","","","","","","",""],
     ["10:00","","","","","","",""],["12:00","","","","","","",""],
     ["14:00","","","","","","",""],["16:00","","","","","","",""],
     ["18:00","","","","","","",""],["20:00","","","","","","",""]],
    note="Shade the hours you are at work. Find one hour when all three of you are free."), 560)
S["o03-f5"]=lambda: f_realia(tbl("Lindmark Freight · warehouse rota","Week 46",
    ["","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    [["Anders Holm","E","E","E","E","E","&ndash;","&ndash;"],
     ["Lars Brandt","N","N","N","&ndash;","&ndash;","N","&ndash;"],
     ["Petra Nowak","L","L","&ndash;","L","L","E","&ndash;"],
     ["Omar Said","&ndash;","L","L","E","E","&ndash;","&ndash;"],
     ["Ida Berg","E","&ndash;","E","N","N","&ndash;","&ndash;"],
     ["Tomas Ek","&ndash;","&ndash;","&ndash;","&ndash;","E","&ndash;","&ndash;"]],
    note="E = early 06:00&ndash;14:00 &middot; L = late 14:00&ndash;22:00 &middot; "
    "N = night 22:00&ndash;06:00 &nbsp;&nbsp; <i>In pen:</i> <b>Ida &mdash; please swap Thu/Fri "
    "with Omar? A.H.</b>"), 580)
S["o03-f6"]=lambda: f_realia(tbl("Word study","at, on, in",
    ["at","on","in"],
    [["<b>at</b> six o'clock","<b>on</b> Monday","<b>in</b> the morning"],
     ["<b>at</b> night","<b>on</b> 4 November","<b>in</b> November"],
     ["<b>at</b> lunchtime","<b>on</b> Friday evening","<b>in</b> 2026"],
     ["<b>at</b> the weekend","<b>on</b> the weekend","<b>in</b> two hours"],
     ["","",""],["","",""]],
    note="No preposition before <i>today, tomorrow, next week, every day</i>."), 480)
S["o03-f7"]=lambda: f_chart([("Bhutan",54.5),("Sudan",50.8),("Lesotho",50.2),
    ("Congo",48.7),("United Arab Emirates",48.4),("Yemen",25.9)],
    unit="average hours actually worked per week, 2025", w=520)
S["o03-f8"]=lambda: f_icons([("clock","+2 hours"),("clock730","+3 hours"),
    ("clock1215","+6 hours"),("timer","+8 hours"),
    ("today","+9 hours"),("night","+12 hours")], cols=3)
S["o03-f9"]=lambda: f_realia(doc("Calendar invitation",
    "Weekly operations call",
    "<p><b>Tuesday 24 November</b> &nbsp; <b>09:00 &ndash; 09:40</b> (Ostberg time)</p>"
    "<p><b>Where:</b> online</p>"
    "<p><b>Invited:</b><br>"
    "Y. Haddad &#10003;<br>A. Holm &#10003;<br>W. Zhang &#10003;<br>"
    "J. Park &nbsp;<i>not accepted</i><br>I. Costa &nbsp;<i>not accepted</i></p>",
    "If this time does not work for you, say so before Friday."))
S["o03-f10"]=lambda: f_scene(860,410, people=[("yara",300,172,{"seated":True})],
    props=[("desk",230,0,1.4),("computer",300,146,0.5),("notebook",400,196,0.45),
    ("headset",360,130,0.45)], window_=(620,56,140,100))
S["o03-f11"]=lambda: f_realia(tbl("Two rotas","Week 45 and week 46",
    ["Week 45","Week 46"],
    [["Holm &nbsp; E E E E E<br>Brandt &nbsp; N N N &ndash; &ndash;<br>"
      "Nowak &nbsp; L L <b>L</b> L L<br>Said &nbsp; &ndash; L L <b>L</b> E<br>"
      "Berg &nbsp; E &ndash; E N N<br><b>Ek &nbsp; &ndash; &ndash; E &ndash; E</b>",
      "Holm &nbsp; E E E E E<br>Brandt &nbsp; N N N &ndash; &ndash;<br>"
      "Nowak &nbsp; L L <b>&ndash;</b> L L<br>Said &nbsp; &ndash; L L <b>E</b> E<br>"
      "Berg &nbsp; E &ndash; E N N<br><b>&mdash;</b>"]]), 520)
S["o03-f12"]=lambda: f_realia(doc("Two meeting notes", None,
    "<p><b>A.</b> The call moves to Tuesday at nine. See you then.</p>"
    "<p style='font-size:12px;color:#6b6861'>One time. Whose nine?</p>"
    "<p style='margin-top:14px'><b>B.</b> From next week the call is on <b>Tuesday</b>, "
    "<b>09:00 Ostberg / 15:00 Juno</b>. Forty minutes. If Tuesday does not work, tell me before "
    "Friday and I will move it. After Friday it stays.</p>"
    "<p style='font-size:12px;color:#6b6861'>Two times with the places named, a length, and what "
    "to do if it does not work.</p>"))
S["o03-f13"]=lambda: f_realia(form("Meeting note", [("Day",""),("My time / their time",""),
    ("How long",""),("If it does not work for you","")],
    note="Who cannot make it:"), 460)
S["o03-f14"]=lambda: f_scene(960,440, people=[("anders",180,180,{}),("ida",250,170,{}),
    ("omar",320,176,{}),("lars",400,180,{}),("petra" if False else "nour",470,168,{}),
    ("wei",560,170,{}),("marek",640,180,{}),("ines",720,172,{}),
    ("yara",820,172,{}),("hanna",900,172,{})],
    props=[("timesheet",60,120,0.6),("timetable",120,40,0.6),("clipboard",430,126,0.45),
    ("pallet",860,0,0.8),("door",40,96,1.2)],
    clockat=(700,46,22,14,0))
S["o03-f15"]=lambda: f_chart([("8 to 9",8),("7 to 8",6),("before 7",4),
    ("9 to 10",4),("it changes",2),("after 10",1)])
S["o03-f16"]=lambda: f_scene(840,400, people=[("junseo",280,174,{"seated":True,"smile":False})],
    props=[("desk",220,0,1.4),("computer",290,146,0.5),("phone",400,196,0.45),
    ("cafe",450,200,0.4)], clockat=(110,46,22,22,30),
    window_=(620,56,120,96), panelbg="#242c38", floorbg="#30394a")
