# -*- coding: utf-8 -*-
"""Clearline Book 1 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 ----------------
S["o07-f1"]=lambda: f_icons([("stars","on track"),("timer","in progress"),
    ("noentry","canceled"),("flashback","behind schedule"),("padlock","on hold"),
    ("worried","pending"),("handsup","waiting for somebody"),("truck","on its way"),
    ("crane","loading"),("stamp","completed")], cols=5)
S["o07-f2"]=lambda: f_scene(900,420, people=[("wei",330,170,{}),("yara",440,172,{}),
    ("okonjo",540,182,{})],
    board=(620,20,250,150,"MORNING BOARD",
        [("2201 on track","2204 ON HOLD"),("2202 on track","2210 DELAYED"),
         ("2203 on track","2211 on track")]),
    props=[("desk",80,0,1.2),("computer",140,150,0.5),("cafe",250,196,0.38),
    ("window",100,46,0.0 if False else 0.9)])
S["o07-f3"]=lambda: f_icons([("truck","every morning at six"),("crane","right now"),
    ("calendar","usually"),("today","today"),
    ("clock","always"),("timer","at the moment")], cols=3)
S["o07-f4"]=lambda: f_realia(tbl("","Ninety seconds",
    ["Job","Status","Next step","Who"],
    [["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]],
    note="Time it. Did the listener understand the status of every job?"), 500)
S["o07-f5"]=lambda: f_realia(tbl("Lindmark Freight · morning board","As at 08:15, 13 November",
    ["Job","Customer","Status","Next step","Who"],
    [["2201","Arvo","On track","Loading now","Anders"],
     ["2202","Arvo","On track","Leaves 09:00","Wei"],
     ["2203","Sable &amp; Finch","On track","Customs cleared","Ines"],
     ["2204","Brightwell","<b>On hold</b>","Waiting for paperwork","Ines"],
     ["2205","Juno","On track","On its way, ETA Thu","Yara"],
     ["2206","Arvo","On track","Booked","Wei"],
     ["2207","Sable &amp; Finch","On track","Delivered 07:40","Anders"],
     ["2208","Brightwell","On track","Loading 11:00","Anders"],
     ["2209","Corvid","On track","Confirmed","Paula"],
     ["2210","Juno","<b>Delayed</b>","Driver sick, re-planning","Wei"],
     ["2211","Arvo","On track","Unloading now","Anders"]],
    note="Nine on track. One on hold. One delayed. <b>More than 96 per cent of the world's "
    "population is covered by a mobile broadband network; about 3 billion subscriptions — one "
    "third — are 5G</b> (ITU, Facts and Figures 2025)."), 560)
S["o07-f6"]=lambda: f_realia(tbl("Word study","Spelling the -ing form",
    ["Rule","Examples","Your turn"],
    [["add <b>-ing</b>","work &rarr; working &middot; wait &rarr; waiting","load &rarr; ______"],
     ["drop the <b>e</b>","leave &rarr; leaving &middot; arrive &rarr; arriving","move &rarr; ______"],
     ["double the last letter","plan &rarr; planning &middot; stop &rarr; stopping","ship &rarr; ______"]]),
    480)
S["o07-f7"]=lambda: f_part("Mobile broadband, worldwide",
    [("covered by a network", 96, BLUE), ("not covered", 4, AMBER)], w=500)
S["o07-f8"]=lambda: f_icons([("crane","being loaded"),("truck","stopped"),
    ("essay","paperwork waiting"),("headset","on the phone to find out"),
    ("racking","an empty bay"),("signature","signed for")], cols=3)
S["o07-f9"]=lambda: f_realia(doc("Lindmark Freight · daily stand-up",
    "08:15 &middot; ten minutes &middot; standing",
    "<p style='font-size:17px'><b>1. What moved?</b><br><b>2. What is stuck?</b><br>"
    "<b>3. What do you need?</b></p>"
    "<p><b>No problem-solving in the meeting.</b> If something needs solving, say so and the two "
    "people involved stay behind.</p>",
    "Problems go to the person who owns the job, not to the room."))
S["o07-f10"]=lambda: f_scene(940,430, people=[("okonjo",200,182,{}),("wei",290,170,{}),
    ("anders",380,180,{}),("ines",470,172,{}),("yara",560,172,{})],
    board=(660,20,250,150,"BOARD",
        [("on track 9","on hold 1"),("delayed 1","&nbsp;"),("2210 Juno","driver sick")]),
    props=[("cafe",150,196,0.38),("desk",80,0,1.0)],
    clockat=(120,46,22,8,15))
S["o07-f11"]=lambda: f_realia(tbl("Two boards","Morning and afternoon",
    ["08:15","14:00"],
    [["2201 on track<br>2204 <b>on hold</b><br>2205 on track<br>2207 delivered<br>"
      "2210 <b>delayed</b><br>2211 unloading<br>&mdash;",
      "2201 <b>delivered</b><br>2204 <b>cleared</b><br>2205 on track<br>2207 delivered<br>"
      "2210 <b>on its way</b><br>2211 unloading<br><b>2212 new &mdash; booked</b>"]]), 500)
S["o07-f12"]=lambda: f_realia(doc("Two updates", None,
    "<p><b>A.</b> All fine this morning, nothing to report.</p>"
    "<p style='font-size:12px;color:#6b6861'>Nothing to act on, and probably not true.</p>"
    "<p style='margin-top:14px'><b>B.</b> Eleven jobs. Nine on track. 2204 is on hold &mdash; "
    "customs paperwork, Ines is chasing. 2210 is delayed &mdash; driver sick, I am re-planning. "
    "I will update at 10:00.</p>"
    "<p style='font-size:12px;color:#6b6861'>The number that is fine, the two that are not, and "
    "when you will hear again.</p>"))
S["o07-f13"]=lambda: f_realia(form("Update", [("How many are fine",""),
    ("The exceptions, and why",""),("What I am doing now",""),
    ("When I will write again","")]), 460)
S["o07-f14"]=lambda: f_scene(980,450, people=[("anders",180,180,{}),("omar",250,176,{}),
    ("lars",320,180,{}),("wei",430,170,{}),("okonjo",500,182,{}),("ida",570,170,{}),
    ("yara",640,172,{}),("ines",710,172,{}),("marek",790,180,{}),("hanna",870,172,{})],
    props=[("truck",40,0,1.4),("truck",700,0,1.3),("forklift",930,0,1.1),
    ("flipchart",380,50,0.8),("clipboard",240,126,0.45),("barrier",120,217,0.9)],
    floor=0.80)
S["o07-f15"]=lambda: f_chart([("a written update",8),("a daily meeting",7),
    ("a shared board",5),("only when asked",4),("we don't",1)])
S["o07-f16"]=lambda: f_scene(860,410, people=[("wei",290,170,{"seated":True,"smile":False})],
    props=[("desk",230,0,1.4),("computer",300,146,0.5),("phone",390,196,0.4),
    ("note",440,196,0.4)], window_=(620,56,140,100), clockat=(110,46,22,16,40))

# ---------------- Unit 8 ----------------
S["o08-f1"]=lambda: f_icons([("truck","arriving"),("clock","late"),
    ("stamp","stamped"),("carton","opened"),("signature","signed"),
    ("iron","stopped"),("phone","a call made"),("note","a note left"),
    ("meeting","a meeting"),("calendar","a day crossed out")], cols=5)
S["o08-f2"]=lambda: f_scene(880,410, people=[("ines",300,172,{"seated":True})],
    props=[("desk",230,0,1.4),("essay",300,146,0.45),("essay",370,146,0.45),
    ("stamp",440,196,0.4),("board",80,40,0.75),("container",660,0,0.9)],
    window_=(560,50,110,90))
S["o08-f3"]=lambda: f_icons([("today","first"),("flashback","then"),
    ("calendar","after that"),("timer","at the same time"),
    ("stamp","finally"),("morning","the next day")], cols=3)
S["o08-f4"]=lambda: f_realia(tbl("","Timeline",
    ["#","What happened","Time"],
    [["1","",""],["2","",""],["3","",""],["4","",""],["5","",""],["6","",""]],
    note="<b>The step where it could have stopped:</b>"), 460)
S["o08-f5"]=lambda: f_realia(doc("Lindmark Freight · incident report",
    "Ref INC-0412 &middot; raised 13 November",
    "<p><b>What happened.</b><br>"
    "Monday 9 November, 14:20 &mdash; container LMRU 442180 arrived. Paperwork left at reception.<br>"
    "Monday to Wednesday &mdash; no action. The papers were not collected.<br>"
    "Wednesday 11 November, 15:40 &mdash; the envelope was found during an unrelated search.<br>"
    "Wednesday 11 November, 16:05 &mdash; the declaration was read. It covers a different "
    "consignment.<br>"
    "Thursday 12 November &mdash; the container was still in the yard, not cleared.</p>"
    "<p><b>What we know.</b> The declaration does not match the container. It has not cleared "
    "customs. It has been in the yard for four days.</p>"
    "<p><b>What we do not know.</b> Whether the correct declaration exists. Whether the supplier "
    "sent the wrong one.</p>"
    "<p><b>Actions.</b> Supplier contacted 13 Nov (IC). Reception collection checked daily from "
    "16 Nov (AH).</p>"
    "<p><b>Not in this report:</b> who was on reception, and who was on holiday. Neither changes "
    "what we do next.</p>"
    "<p><b>For scale.</b> Sea trade reached <b>12,720 million tons in 2024</b>, up "
    "<b>2.2 per cent</b>, against an average of 1.8 per cent over the previous decade.</p>",
    "Figures: UNCTAD, <i>Review of Maritime Transport 2025</i>."))
S["o08-f6"]=lambda: f_realia(tbl("Word study","Regular and irregular",
    ["Regular (+ -ed)","Irregular"],
    [["arrive &rarr; arrived","find &rarr; <b>found</b>"],
     ["check &rarr; checked","send &rarr; <b>sent</b>"],
     ["report &rarr; reported","read &rarr; <b>read</b> (said &ldquo;red&rdquo;)"],
     ["contact &rarr; ______","leave &rarr; ______"],
     ["cover &rarr; ______","take &rarr; ______"],
     ["clear &rarr; ______","write &rarr; ______"]]), 460)
S["o08-f7"]=lambda: f_chart([("2024, measured",2.2),("2013–2023 average",1.8),
    ("2025, forecast",0.5)],
    unit="world sea trade, per cent growth", w=480)
S["o08-f8"]=lambda: f_icons([("carton","a spilled box"),("truck","a closed gate"),
    ("iron","a warning light"),("door","a door left open"),
    ("barcode","a wrong label"),("meeting","an empty meeting room")], cols=3)
S["o08-f9"]=lambda: f_realia(tbl("Lindmark Freight · goods-in log","Week 46",
    ["Date","Time","Carrier","Reference","Cond.","Signed","Notes"],
    [["9 Nov","14:20","Baltic Line","LMRU 442180","&#10003;","<b>&mdash;</b>","papers to reception"],
     ["9 Nov","16:05","Nordfreight","NF-7781","&#10003;","LB",""],
     ["10 Nov","07:50","Own vehicle","AV-1140","&#10003;","AH",""],
     ["10 Nov","11:30","Baltic Line","SF-0210","&#10003;","AH","2 cartons damp"],
     ["11 Nov","08:15","Nordfreight","NF-7790","&#10003;","OS",""],
     ["11 Nov","14:40","Own vehicle","AV-1141","&#10003;","AH",""],
     ["12 Nov","09:05","Baltic Line","JT-0882","&#10003;","IB",""],
     ["12 Nov","15:20","Nordfreight","BP-5500","&#10003;","AH","on hold"]],
    note="Every delivery must be signed for on arrival."), 580)
S["o08-f10"]=lambda: f_scene(880,410, people=[("okonjo",300,182,{"seated":True}),
    ("ines",450,172,{"seated":True})],
    props=[("desk",240,0,1.5),("essay",330,150,0.45),("cafe",400,200,0.38),
    ("curtains",680,40,0.9),("calendar",120,50,0.65)],
    window_=(660,50,130,96))
S["o08-f11"]=lambda: f_realia(tbl("Two reports","Same events",
    ["With names","Without names"],
    [["<b>Marta</b> was on holiday and <b>Petra</b> did not empty the tray. "
      "<b>Ines</b> found the envelope on Wednesday. The container arrived on Monday.",
      "On Monday 9 November at 14:20 a container arrived and the paperwork was left at "
      "reception. The papers were not collected. On Wednesday at 15:40 the envelope was found "
      "during an unrelated search."]]), 520)
S["o08-f12"]=lambda: f_realia(doc("Two first paragraphs", None,
    "<p><b>A.</b> Petra did not collect the customs paperwork from reception on Monday or "
    "Tuesday, which is why the container has not cleared.</p>"
    "<p style='font-size:12px;color:#6b6861'>Begins with a person. Could not be read aloud with "
    "her in the room.</p>"
    "<p style='margin-top:14px'><b>B.</b> On Monday 9 November at 14:20 a container arrived and "
    "the driver left the customs paperwork at reception. The papers were not collected.</p>"
    "<p style='font-size:12px;color:#6b6861'>Begins with a date and a time. The same facts.</p>"))
S["o08-f13"]=lambda: f_realia(form("Report", [("What happened, and when",""),
    ("Where it broke",""),("What I did",""),("What I do not know",""),
    ("What I have left out, and why","")]), 480)
S["o08-f14"]=lambda: f_scene(980,450, people=[("anders",220,180,{}),("ines",290,172,{}),
    ("omar",360,176,{}),("lars",430,180,{}),("yara",540,172,{}),("wei",610,170,{}),
    ("marek",690,180,{}),("ida",760,170,{}),("hanna",840,172,{}),("okonjo",920,182,{})],
    props=[("container",40,0,1.3),("forklift",160,0,1.1),("table",480,250,1.3),
    ("clipboard",330,126,0.45),("camera",780,130,0.45),("jobnotice",120,46,0.55)],
    floor=0.80)
S["o08-f15"]=lambda: f_chart([("we talk about it",8),("we write a report",6),
    ("we change something",4),("nothing happens",4),("I don't know",2)])
S["o08-f16"]=lambda: f_scene(860,410, people=[("ines",300,172,{"smile":False})],
    props=[("door",640,96,1.3),("essay",370,130,0.5),("board",80,40,0.8),
    ("calendar",180,50,0.6)])

# ---------------- Unit 9 ----------------
S["o09-f1"]=lambda: f_icons([("suitcase","a suitcase"),("boardingpass","a boarding pass"),
    ("departureboard","arrivals"),("car","a taxi"),("hotel","a hotel"),
    ("bus","a train"),("clipboard","an itinerary"),("badge","a visitor badge"),
    ("meeting","a meeting room"),("handshake","meeting somebody")], cols=5)
S["o09-f2"]=lambda: f_scene(860,410, people=[("paula",300,170,{"seated":True})],
    props=[("desk",230,0,1.4),("computer",300,146,0.5),("clipboard",390,196,0.45),
    ("calendar",120,50,0.65),("coat",640,130,0.5)],
    window_=(560,56,110,90))
S["o09-f3"]=lambda: f_icons([("computer","booking"),("suitcase","packing"),
    ("timer","waiting"),("hotel","arriving"),
    ("meeting","meeting"),("car","leaving")], cols=3)
S["o09-f4"]=lambda: f_realia(tbl("","One-day itinerary",
    ["Time","What happens","Where","Who meets you"],
    [["06:00","","",""],["09:00","","",""],["12:00","","",""],
     ["15:00","","",""],["18:00","","",""],["21:00","","",""]],
    note="<b>What is not on this sheet:</b>"), 520)
S["o09-f5"]=lambda: f_realia(tbl("Visit — K. Alvarsson, Nordkap Foods",
    "Thursday 19 November &middot; host: P. Moreau",
    ["Time","What","Where","Who"],
    [["14:10","Flight NK 318 lands","Terminal 2","&mdash;"],
     ["14:40","Met at arrivals","Terminal 2, gate hall","Paula"],
     ["15:30","Check in, leave bag","Terrace Hotel, Harbour Road","&mdash;"],
     ["16:00","Meeting: supply agreement","Lindmark, meeting room 2","Paula, Hanna, Daniel"],
     ["17:30","Site tour","Warehouse","Anders"],
     ["19:00","Dinner","&mdash;","Paula"],
     ["06:40","Flight NK 319 departs (Friday)","Terminal 2","&mdash;"]],
    note="If anything changes: Paula +44 7700 900 118 &middot; Reception +44 20 7946 0100. "
    "<b>There were about 690 million international tourist arrivals between January and June "
    "2026</b> (UN Tourism)."), 560)
S["o09-f6"]=lambda: f_realia(tbl("Word study","going to, will, and the present continuous",
    ["","Use it for","Example"],
    [["<b>be going to</b>","a plan you already have","I'<b>m going to</b> meet her at two."],
     ["","something you can see coming","Look at that queue &mdash; we'<b>re going to</b> be late."],
     ["<b>will</b>","a decision made as you speak","I'<b>ll</b> drive you."],
     ["","an offer or a promise","I'<b>ll</b> call you when I land."],
     ["<b>present continuous</b>","a fixed arrangement","She'<b>s landing</b> at 14:10."]]), 500)
S["o09-f7"]=lambda: f_chart([("Jan–Jun 2026",690),("Jan–Jun 2025",687)],
    unit="million international tourist arrivals · Q1 +2%, Q2 −1%", w=480)
S["o09-f8"]=lambda: f_icons([("departureboard","arrivals, with a name card"),("hotel","the hotel desk"),
    ("canteen","a restaurant table"),("car","a taxi"),
    ("meeting","a meeting room"),("boardingpass","an early departure")], cols=3)
S["o09-f9"]=lambda: f_realia(doc("Terrace Hotels · booking confirmation",
    "Reference TH-884201",
    "<p><b>Guest:</b> K. Alvarsson<br>"
    "<b>Hotel:</b> Terrace Hotel Ostberg, 14 Harbour Road<br>"
    "<b>Check in:</b> Thursday 19 November, from 15:00<br>"
    "<b>Check out:</b> Friday 20 November, by 11:00<br>"
    "<b>Room:</b> single, quiet side<br>"
    "<b>Rate:</b> 118.00 euros per night, breakfast included</p>"
    "<p><b>Cancellation:</b> free of charge until 18:00 on Wednesday 18 November. After that, "
    "one night is charged.</p>",
    "Reception is staffed 24 hours. Early departures: please tell reception the night before."))
S["o09-f10"]=lambda: f_scene(980,440, behind=[("paula",330,170,{})],
    people=[("karin",430,172,{}),("ravi",120,176,{}),("hanna",200,172,{}),
    ("ines",700,172,{}),("marek",780,180,{}),("wei",860,170,{}),("nour",930,168,{})],
    props=[("departureboard",540,30,1.2),("barrier",300,217,1.0),
    ("suitcase",470,0,0.6),("badge",380,130,0.4)])
S["o09-f11"]=lambda: f_realia(tbl("Two itineraries","Before and after a delay",
    ["Original","Revised"],
    [["<b>14:10</b> lands<br><b>14:40</b> met at arrivals<br><b>15:30</b> hotel<br>"
      "<b>16:00</b> meeting<br><b>17:30</b> site tour<br><b>19:00</b> dinner",
      "<b>16:20</b> lands<br><b>16:50</b> met at arrivals<br><b>17:40</b> hotel<br>"
      "<b>18:30</b> meeting<br><b>&mdash;</b> site tour <b>dropped</b><br>"
      "<b>20:30</b> dinner"]]), 500)
S["o09-f12"]=lambda: f_realia(doc("Two travel notes", None,
    "<p><b>A.</b> 14:10 lands. 15:30 hotel. 16:00 meeting. 19:00 dinner.</p>"
    "<p style='font-size:12px;color:#6b6861'>Four times. No names, no number, nothing about "
    "delays.</p>"
    "<p style='margin-top:14px'><b>B.</b> 14:10 your flight lands, Terminal 2. 14:40 I meet you "
    "in arrivals &mdash; I'll have a card with your name. 16:00 meeting with me, Hanna and "
    "Daniel. 19:00 dinner. My mobile is +44 7700 900 118. If the flight is late, the meeting can "
    "move to six.</p>"
    "<p style='font-size:12px;color:#6b6861'>A name beside each time, a phone number, and what "
    "happens if it goes wrong.</p>"))
S["o09-f13"]=lambda: f_realia(tbl("","Travel note",
    ["Time","What","Who meets you"],
    [["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="<b>My number:</b> ______________ &nbsp;&nbsp; <b>If it goes wrong:</b>"), 480)
S["o09-f14"]=lambda: f_scene(980,440, people=[("paula",200,170,{}),("ravi",270,176,{}),
    ("hanna",340,172,{}),("karin",470,172,{}),("marek",550,180,{}),
    ("ines",630,172,{}),("nour",710,168,{}),("wei",790,170,{}),
    ("lars",860,180,{}),("ida",930,170,{})],
    props=[("departureboard",60,30,1.3),("barrier",150,217,0.9),("suitcase",420,0,0.6),
    ("suitcase",500,0,0.55),("car",600,0,1.2),("badge",240,126,0.4)])
S["o09-f15"]=lambda: f_chart([("never",9),("once or twice a year",6),
    ("every few months",4),("monthly",3),("most weeks",2)])
S["o09-f16"]=lambda: f_scene(880,420, behind=[("ida",700,170,{})],
    people=[("karin",300,172,{"seated":True,"smile":False})],
    counter_=(620,232,240,108),
    props=[("sofa",230,0,1.4),("phone",360,140,0.45),("coat",420,130,0.5),
    ("rain",120,60,0.6)], clockat=(110,46,22,22,30),
    panelbg="#242c38", floorbg="#30394a")
