# -*- coding: utf-8 -*-
"""Clearline Book 1 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 ----------------
S["o10-f1"]=lambda: f_icons([("folder","passing a folder"),("transfer","swapping"),
    ("door","holding a door"),("form","a tick box"),("calendar","a day off"),
    ("worried","saying no"),("carton","carrying boxes"),("queue","letting somebody go first"),
    ("phone","handing over a call"),("note","a note on a keyboard")], cols=5)
S["o10-f2"]=lambda: f_scene(880,410, people=[("nour",300,168,{"seated":True}),
    ("anders",620,180,{})],
    props=[("desk",230,0,1.4),("computer",300,146,0.5),("form",390,196,0.45),
    ("door",700,96,1.3),("timetable",100,46,0.6)])
S["o10-f3"]=lambda: f_icons([("stars","yes"),("balance","yes, if"),
    ("worried","maybe"),("noentry","no"),
    ("calendar","not this week"),("transfer","something else instead")], cols=3)
S["o10-f4"]=lambda: f_realia(tbl("","How do people ask?",
    ["The exact words","Question or instruction?","Deadline given?"],
    [["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="<b>The one I could have refused:</b>"), 520)
S["o10-f5"]=lambda: f_realia(doc("Lindmark Freight · internal request", None,
    "<p><b>From:</b> A. Holm, Warehouse &nbsp;&nbsp; <b>Date:</b> 16 November</p>"
    "<p><b>What I am asking for:</b> Two days of cover on the early shift, Thursday and "
    "Friday.</p>"
    "<p><b>By when do you need an answer:</b> Tuesday midday. After that I have to ask the "
    "agency, which costs 340 euros a day.</p>"
    "<p><b>Why:</b> Ida is on nights and cannot do both. Omar has asked for Thursday off and I "
    "have already said yes.</p>"
    "<p><b>Approval:</b> &#9744; Supervisor &nbsp; &#9745; Department head &nbsp; "
    "&#9744; Site manager</p>"
    "<p><b>If this is refused, what would you do instead:</b> Run Thursday with three people "
    "instead of four and move the Brightwell load to Friday. It would work. It would be a long "
    "day.</p>"
    "<p><b>Who is available?</b> Across the world, <b>12.4 per cent</b> of young people who want "
    "work cannot find it &mdash; about <b>67 million</b> people aged 15 to 24.</p>",
    "Figures: ILO, <i>Global Employment Trends for Youth 2026</i>, published August 2026."))
S["o10-f6"]=lambda: f_realia(tbl("Word study","Asking at three levels",
    ["Form","How direct","Use it with"],
    [["Send me the file.","very direct","a close colleague, in a hurry"],
     ["Can you send me the file?","direct","most colleagues"],
     ["Could you send me the file?","polite","anybody"],
     ["Would you mind sending me the file?","more polite","a favor, or somebody senior"],
     ["I was wondering if you could &hellip;","most polite","a big favor, or bad timing"],
     ["Any chance you could &hellip;?","informal","a friend at work"]]), 520)
S["o10-f7"]=lambda: f_chart([("young people who want work and cannot find it",12.4),
    ("everybody, all ages",4.9)],
    unit="per cent unemployed · the youth figure is about 67 million people", w=500)
S["o10-f8"]=lambda: f_icons([("carton","a heavy box"),("noentry","a closed door"),
    ("signature","a form to sign"),("computer","two screens, one person"),
    ("truck","a flat tire"),("queue","a queue outside")], cols=3)
S["o10-f9"]=lambda: f_realia(form("Lindmark Freight · holiday request",
    [("Name","A. Holm"),("From","Monday 14 December"),("To","Friday 18 December"),
     ("Working days","5"),("Cover arranged with","O. Said"),
     ("Manager approval",""),("Date of request","9 December")],
    note="Requests must be made fourteen days in advance."), 470)
S["o10-f10"]=lambda: f_scene(880,410, people=[("nour",300,168,{"seated":True}),
    ("anders",440,180,{})],
    props=[("desk",230,0,1.4),("computer",310,146,0.5),("timetable",390,196,0.45),
    ("pen",490,196,0.4),("board",80,40,0.75)],
    window_=(660,56,130,96))
S["o10-f11"]=lambda: f_realia(tbl("Two requests","Same favor",
    ["Short","Full"],
    [["Can you find me cover for Thursday and Friday?",
      "Could you find me cover on the early shift for <b>Thursday 19</b> and "
      "<b>Friday 20 November</b>?<br><br>One person, <b>06:00&ndash;14:00</b>, both days.<br><br>"
      "<b>I need an answer by Tuesday midday</b> &mdash; after that I have to book the agency at "
      "340 euros a day.<br><br>If you can only do one, take Thursday. If you can do neither, just "
      "say so and I'll run Friday with three."]]), 520)
S["o10-f12"]=lambda: f_realia(doc("Two requests", None,
    "<p><b>A.</b> Can you look at this when you get a chance?</p>"
    "<p style='font-size:12px;color:#6b6861'>No size, no date, no reason. It goes to the bottom "
    "of the pile.</p>"
    "<p style='margin-top:14px'><b>B.</b> Could you look at this before Thursday midday? It is "
    "about twenty minutes. I need it by then because the quotation goes out on Friday. If you "
    "can't, tell me and I'll ask Hanna &mdash; she is slower but she is free.</p>"
    "<p style='font-size:12px;color:#6b6861'>A size, a deadline, a reason, and a way out.</p>"))
S["o10-f13"]=lambda: f_realia(form("Request", [("What I am asking for",""),
    ("How big it is",""),("By when",""),("Why that date",""),
    ("What I will do if the answer is no","")]), 480)
S["o10-f14"]=lambda: f_scene(980,440, people=[("marek",150,180,{"seated":True}),
    ("sofia",240,172,{}),("paula",320,170,{}),("nour",430,168,{}),
    ("hanna",500,172,{}),("ravi",580,176,{}),("wei",660,170,{}),
    ("ines",740,172,{}),("yara",820,172,{}),("okonjo",910,182,{})],
    board=(40,24,190,110,"TODAY",[("asked","15"),("done","11")]),
    props=[("desk",110,0,1.1),("carton",370,0,0.65),("cafe",700,196,0.38),
    ("printer",270,0,0.9),("headset",190,130,0.4)])
S["o10-f15"]=lambda: f_chart([("no with a reason",8),("an alternative instead",6),
    ("I say yes and regret it",5),("a direct no",3),("I avoid answering",2)])
S["o10-f16"]=lambda: f_scene(880,420, people=[("anders",290,180,{"seated":True,"smile":False})],
    props=[("desk",230,0,1.4),("phone",330,140,0.45),("timetable",400,196,0.45),
    ("truck",680,0,1.2)], clockat=(110,46,22,16,20),
    window_=(560,50,110,90))

# ---------------- Unit 11 ----------------
S["o11-f1"]=lambda: f_icons([("worldmap","rerouted"),("barrier","a closed gate"),
    ("calendar","a new date"),("carton","a damaged box"),("stamp","rejected"),
    ("queue","a line of trucks"),("danger","a warning"),("phone","a missed call"),
    ("crane","standing still"),("storm","bad weather")], cols=5)
S["o11-f2"]=lambda: f_scene(880,410, people=[("yara",300,172,{"seated":True}),
    ("wei",430,170,{})],
    props=[("desk",230,0,1.4),("computer",300,146,0.5),("worldmap",370,130,0.5),
    ("timetable",420,196,0.45),("ship",680,0,0.9)],
    window_=(600,56,110,90))
S["o11-f3"]=lambda: f_icons([("handshake","a short apology"),("microphone","a long apology"),
    ("noentry","blaming somebody else"),("flipchart","explaining"),
    ("boardingpass","offering something"),("computer","saying nothing")], cols=3)
S["o11-f4"]=lambda: f_realia(tbl("","How late is late?",
    ["What happened","When we were told","What they offered"],
    [["","",""],["","",""],["","",""]],
    note="<b>Would you use them again?</b>"), 500)
S["o11-f5"]=lambda: f_realia(doc("Lindmark Freight · 17 November",
    "Notice to customers — shipment JT-0994",
    "<p><b>What has happened.</b> Your shipment left Juno on 6 November on schedule. On "
    "10 November the vessel was rerouted and is now sailing the long way round. This added about "
    "<b>nine days</b> to the voyage.</p>"
    "<p><b>What this means for you.</b> The shipment will now arrive in Ostberg on "
    "<b>28 November</b>, not 19 November. We can confirm the 28th; we could not confirm the 19th "
    "after the 10th, and we should have told you then.</p>"
    "<p><b>What we are doing.</b> We have booked a slot for immediate customs clearance on "
    "arrival, and we will deliver the same day rather than the next working day.</p>"
    "<p><b>What we are offering.</b><br>"
    "1. Air freight, at our cost, for up to 200 kg of whichever items you need first.<br>"
    "2. No storage charges on this consignment.</p>"
    "<p><b>Contact:</b> Y. Haddad, direct line +44 20 7946 0112. I will call you on Thursday "
    "whether or not there is news.</p>"
    "<p>As of May 2025, transits through the Suez Canal were about <b>70 per cent below</b> their "
    "2023 average.</p>",
    "Figures: UNCTAD, <i>Review of Maritime Transport 2025</i>."))
S["o11-f6"]=lambda: f_realia(tbl("Word study","Cause and effect",
    ["Word","Pattern","Example"],
    [["because","because + clause","It is late <b>because</b> the ship was rerouted."],
     ["so","clause, so clause","The ship was rerouted, <b>so</b> it is late."],
     ["as a result","sentence. As a result, &hellip;",""],
     ["due to","due to + noun",""],
     ["therefore","sentence. Therefore, &hellip;",""]]), 500)
S["o11-f7"]=lambda: f_chart([("2023 average",100),("May 2025",30)],
    unit="Suez Canal transits, 2023 average = 100 · about 70 per cent below", w=460)
S["o11-f8"]=lambda: f_icons([("truck","a late van"),("iron","a red light"),
    ("racking","an empty shelf"),("calendar","a canceled meeting"),
    ("carton","a short delivery"),("phone","an unanswered call")], cols=3)
S["o11-f9"]=lambda: f_realia(doc("From: k.brandt@nordkap.example",
    "Re: JT-0994 — where is it?",
    "<p>Yara,</p>"
    "<p>Our production plan has the valves arriving on the 19th. Today is the 17th and the "
    "tracking page still says &ldquo;in transit&rdquo;.</p>"
    "<p><u>I would have planned differently if I had known last week.</u></p>"
    "<p>I need two things:</p>"
    "<p>1. A date you can actually commit to.<br>"
    "2. Something for the line, this week, even if it is only part of the order.</p>",
    "Please reply by the end of the day. K. Brandt"))
S["o11-f10"]=lambda: f_scene(880,410, people=[("yara",300,172,{"seated":True}),
    ("wei",600,170,{})],
    props=[("desk",230,0,1.4),("computer",300,146,0.5),("headset",370,130,0.45),
    ("worldmap",450,130,0.45),("essay",420,196,0.42)],
    clockat=(110,46,22,14,30), window_=(680,56,120,96))
S["o11-f11"]=lambda: f_realia(tbl("Two notices","Same shipment",
    ["Notice A","Notice B"],
    [["We <b>expect</b> delivery on 28 November.<br>Customs clearance will be arranged.<br>"
      "We apologize for any inconvenience.<br>&mdash;",
      "The shipment <b>will arrive</b> on 28 November. We can <b>confirm</b> that date.<br>"
      "We <b>have booked</b> immediate customs clearance.<br>"
      "<b>Air freight at our cost</b>, up to 200 kg.<br>"
      "<b>No storage charges</b> on this consignment."]]), 520)
S["o11-f12"]=lambda: f_realia(doc("Two messages", None,
    "<p><b>A.</b> Thank you for your patience. As you may know, conditions on the main shipping "
    "route have been difficult for some time, and carriers across the industry have been "
    "affected. In light of this, your shipment will now arrive on 28 November.</p>"
    "<p style='font-size:12px;color:#6b6861'>The bad news is in line four.</p>"
    "<p style='margin-top:14px'><b>B.</b> Your shipment will arrive on <b>28 November</b>, not "
    "19 November. That is nine days late and I am sorry.</p>"
    "<p style='font-size:12px;color:#6b6861'>Line one.</p>"))
S["o11-f13"]=lambda: f_realia(form("Bad news", [("The bad news, in one line",""),
    ("The cause",""),("My part in it",""),("What I can offer",""),
    ("When I will be in touch again","")]), 480)
S["o11-f14"]=lambda: f_scene(980,450, people=[("lars",180,180,{}),("omar",250,176,{}),
    ("anders",320,180,{}),("ida",390,170,{}),("wei",460,170,{}),
    ("ines",570,172,{}),("marek",650,180,{}),("yara",730,172,{}),
    ("hanna",810,172,{}),("okonjo",900,182,{})],
    props=[("truck",40,0,1.3),("truck",640,0,1.2),("barrier",120,224,1.0),
    ("jobnotice",540,50,0.6),("cafe",830,130,0.4)],
    floor=0.82, panelbg="#9fa9ae", floorbg="#8e979b")
S["o11-f15"]=lambda: f_chart([("I find out myself",8),("the company tells me",6),
    ("I ask and then they tell me",5),("it depends",3),("I never find out",2)])
S["o11-f16"]=lambda: f_scene(860,410, people=[("yara",290,172,{"seated":True,"smile":False})],
    props=[("desk",230,0,1.4),("computer",300,146,0.5),("essay",390,196,0.45),
    ("chair",560,0,0.8),("lamp",120,120,0.55)],
    window_=(640,56,120,96), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 12 ----------------
S["o12-f1"]=lambda: f_icons([("inventory","a list with ticks"),("calendar","a date in red"),
    ("folder","handing over"),("timer","a deadline"),("signature","signing off"),
    ("handshake","agreeing"),("email","an inbox"),("note","a note pinned up"),
    ("clock","a next step"),("door","leaving")], cols=5)
S["o12-f2"]=lambda: f_scene(900,420, people=[("yara",300,172,{}),("okonjo",390,182,{}),
    ("marek",470,180,{}),("hanna",550,172,{})],
    props=[("flipchart",680,46,0.95),("table",200,250,1.3),("essay",270,196,0.42)],
    window_=(100,50,110,90))
S["o12-f3"]=lambda: f_icons([("signature","one owner"),("handsup","three owners"),
    ("worried","no owner"),("calendar","a date"),
    ("timer","no date"),("stamp","done")], cols=3)
S["o12-f4"]=lambda: f_realia(tbl("","Action list",
    ["What","Who","By when","Done"],
    [["","","",""],["","","",""],["","","",""],
     ["","","",""],["","","",""],["","","",""]],
    note="<b>How many of these actually happened?</b>"), 500)
S["o12-f5"]=lambda: f_realia(doc("Lindmark Freight · staff briefing, 20 November",
    "Two numbers, one report",
    "<p>We were asked how many people in the world work without a contract. Here is what we "
    "found, and why it is not a simple answer.</p>"
    "<table style='width:100%;font-size:13px;text-align:center;margin:10px 0'>"
    "<tr><td style='border:2px solid #111;border-radius:6px;padding:10px'>"
    "<div style='font-size:26px'><b>2.1 billion</b></div>"
    "<div style='font-size:12px;color:#6b6861'>workers expected in informal jobs in 2026</div></td>"
    "<td style='width:6%'></td>"
    "<td style='border:2px solid #111;border-radius:6px;padding:10px'>"
    "<div style='font-size:26px'><b>51.1 %</b></div>"
    "<div style='font-size:12px;color:#6b6861'>of all employment in 2025</div></td></tr></table>"
    "<p>One news report described the 2.1 billion as &ldquo;around 60 per cent&rdquo; of the "
    "world's 3.6 billion workers.</p>"
    "<p><b>These are not the same measurement.</b> 2.1 billion out of 3.6 billion is about 58 per "
    "cent, not 51.1. One is a <b>share of employment</b>, the other is a <b>count of workers</b>, "
    "over slightly different years. Neither is wrong.</p>"
    "<p><b>What we will put in writing.</b> One figure, what it counts, and the year: "
    "<i>&ldquo;About 2.1 billion workers are expected to be in informal employment in 2026 "
    "(ILO).&rdquo;</i> We will not write &ldquo;around 60 per cent&rdquo;, because we did not "
    "count it.</p>",
    "Figures: ILO, January 2026 release; UN Geneva summary of the same release."))
S["o12-f6"]=lambda: f_realia(tbl("Word study","will and going to",
    ["","<i>will</i>","<i>be going to</i>"],
    [["A promise","I'<b>ll</b> call you Thursday.","&mdash;"],
     ["An offer","I'<b>ll</b> carry that.","&mdash;"],
     ["Decided as you speak","Fine, I'<b>ll</b> do it.","&mdash;"],
     ["A plan you already had","&mdash;","I'<b>m going to</b> send the figures."],
     ["Something you can see coming","&mdash;","That lorry <b>is going to</b> be late."]]), 500)
S["o12-f7"]=lambda: f_chart([("count of workers, 2026",58),("share of employment, 2025",51.1)],
    unit="per cent · the same subject, measured two ways — not comparable", w=500)
S["o12-f8"]=lambda: f_icons([("email","nineteen messages"),("flipchart","three lines"),
    ("calendar","a cut-off"),("handsup","one hand up"),
    ("inventory","a list with two ticks"),("meeting","an empty room")], cols=3)
S["o12-f9"]=lambda: f_realia(tbl("Juno meeting · actions","20 November · next review Friday",
    ["Action","Owner","Due","Status"],
    [["Figures to Juno","Yara","Thu 26 Nov, midday","open"],
     ["Call Juno about the pallet charge","<b>Marek / Hanna</b>","Wed 25 Nov","open"],
     ["Check the reception tray each morning","Anders","<b>&mdash;</b>","open"],
     ["Circulate the new rota","Nour","Fri 27 Nov","done"]],
    note="Next review: Friday."), 540)
S["o12-f10"]=lambda: f_scene(940,430, people=[("okonjo",200,182,{}),("yara",290,172,{}),
    ("marek",380,180,{"seated":True}),("hanna",470,172,{"seated":True}),
    ("wei",560,170,{})],
    props=[("flipchart",700,46,0.95),("table",350,250,1.4),("computer",420,196,0.42),
    ("phone",500,200,0.38)])
S["o12-f11"]=lambda: f_realia(tbl("Two action lists","Same meeting",
    ["Complete","Incomplete"],
    [["Figures to Juno &mdash; <b>Yara</b> &mdash; <b>Thu 26 Nov</b><br>"
      "Call Juno &mdash; <b>Marek</b> &mdash; <b>Wed 25 Nov</b><br>"
      "Check the tray &mdash; <b>Anders</b> &mdash; <b>from Mon 23 Nov</b><br>"
      "Circulate the rota &mdash; <b>Nour</b> &mdash; <b>Fri 27 Nov</b>",
      "Figures to Juno &mdash; <b>______</b> &mdash; Thu 26 Nov<br>"
      "Call Juno &mdash; Marek &mdash; <b>______</b><br>"
      "Check the tray &mdash; <b>______</b> &mdash; from Mon 23 Nov<br>"
      "Circulate the rota &mdash; Nour &mdash; Fri 27 Nov"]]), 520)
S["o12-f12"]=lambda: f_realia(doc("Two emails", None,
    "<p><b>A.</b> Thanks everyone for a useful meeting. As discussed, we agreed that the figures "
    "would be sent across to Juno at some point before the end of next week, and Marek or Hanna "
    "is going to pick up the pallet charge question, and Anders mentioned he would keep an eye on "
    "the tray situation&hellip;</p>"
    "<p style='font-size:12px;color:#6b6861'>Eleven lines. The actions are inside the sentences.</p>"
    "<p style='margin-top:14px'><b>B.</b> Three actions from this morning.<br>"
    "1. <b>Figures to Juno</b> &mdash; Yara &mdash; <b>Thursday 26 November, midday</b><br>"
    "2. <b>Call Juno about the pallet charge</b> &mdash; Marek &mdash; <b>Wednesday 25 "
    "November</b><br>"
    "3. <b>Check the reception tray each morning</b> &mdash; Anders &mdash; <b>from Monday "
    "23 November</b><br>"
    "If any line is wrong, reply to this email only.</p>"
    "<p style='font-size:12px;color:#6b6861'>Four lines. One owner, one date, one subject.</p>"))
S["o12-f13"]=lambda: f_realia(tbl("","Email planner",
    ["What","Who","By when"],
    [["","",""],["","",""],["","",""]],
    note="<b>Subject line:</b> ______________ &nbsp;&nbsp; "
    "<b>What happens if nobody replies:</b>"), 480)
S["o12-f14"]=lambda: f_scene(980,450, people=[("yara",200,172,{"seated":True}),
    ("okonjo",280,182,{"seated":True}),("hanna",360,172,{"seated":True}),
    ("marek",470,180,{}),("wei",540,170,{}),("nour",620,168,{}),
    ("ines",700,172,{}),("paula",780,170,{}),("sofia",860,172,{}),("ravi",930,176,{})],
    props=[("flipchart",120,46,0.8),("table",180,250,1.4),("computer",500,150,0.45),
    ("carton",660,0,0.65),("crate",720,217,0.8),("coat",440,130,0.5)],
    clockat=(300,46,22,17,20), panelbg="#2b3340", floorbg="#39404c")
S["o12-f15"]=lambda: f_chart([("nothing is written",8),("somebody writes actions",6),
    ("we photograph the board",4),("somebody writes minutes",3),
    ("we don't have meetings",2)])
S["o12-f16"]=lambda: f_scene(840,400, people=[("yara",280,172,{"seated":True,"smile":False})],
    props=[("table",220,250,1.4),("computer",290,186,0.5),("essay",390,200,0.42),
    ("phone",440,200,0.38),("lamp",120,120,0.55)],
    window_=(620,56,130,96), panelbg="#242c38", floorbg="#30394a")
