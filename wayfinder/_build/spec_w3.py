# -*- coding: utf-8 -*-
"""Book 3 figure specs, Units 9 to 12."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

# ---------------- Unit 9 ----------------
S["w09-f1"]=lambda: f_icons([("bankcard","bank card"),("statement","statement"),("balance","balance"),
    ("directdebit","direct debit"),("overdraft","overdraft"),("fine","a fee"),
    ("transfer","transfer"),("cashmachine","cash machine"),("bankapp","app"),
    ("savings","savings")], cols=5)
S["w09-f2"]=lambda: f_scene(840,400, people=[("adeel",230,180,{"seated":True}),
    ("grace",420,174,{"seated":True}),("lucia",660,172,{}),("tomas",740,180,{})],
    props=[("desk",350,195,1.0),("statement",300,170,0.32),("computer",420,155,0.4),
    ("bank",60,50,0.5),("waitscreen",560,45,0.45)])
S["w09-f3"]=lambda: f_icons([("bankcard","declined"),("fine","unexpected fee"),
    ("directdebit","missed direct debit"),("transfer","paid twice"),
    ("bankapp","a subscription"),("receipt","refund not arrived")], cols=3)
S["w09-f4"]=lambda: f_realia(tbl("Tidewell Bank","Statement extract · July",
    ["Date","Description","Out","In","Balance"],
    [["27","Rent, standing order","560.00","","-4.10"],
     ["28","&nbsp;","","","-4.10"],
     ["29","Wages, Kestrel Logistics","","1,142.00","1,137.90"],
     ["30","<b>Unarranged overdraft fee</b>","<b>32.00</b>","","1,105.90"]],
    numcols=(2,3,4),
    note="Charged under section 7.4 of the account terms. The balance was below zero for "
    "<b>two days</b>."), 540)
S["w09-f5"]=lambda: f_realia(doc("Tidewell Bank · Help","If something has gone wrong",
    "<p>If a charge looks wrong to you, say so. Most complaints are settled by the first person "
    "who reads them.</p>"
    "<p><b>1.</b> Tell us what happened, when, and what it cost. One page is plenty. Say what you "
    "would like us to do &mdash; a refund, a change to a date, an explanation.</p>"
    "<p><b>2.</b> We must acknowledge you promptly and give you a final answer within "
    "<b>eight weeks</b>. You will be given a reference number. Keep it.</p>"
    "<p><b>3.</b> If you are not satisfied with our final answer, or eight weeks pass without one, "
    "you can take the complaint to the <b>financial ombudsman</b>, free of charge. Our answer "
    "does not end the matter.</p>",
    "Some charges are correct and will not be refunded. Some correct charges are refunded anyway, "
    "once, as a goodwill gesture &mdash; usually for a first mistake. Asking costs you nothing."))
S["w09-f6"]=lambda: f_realia(tbl("Tidewell Bank · 1–31 July","A. Rahim · current account",
    ["Date","Description","Out","In","Balance"],
    [["01","Opening balance","","","318.40"],
     ["02","Linkwave, monthly","28.00","","290.40"],
     ["04","Freshline","41.20","","249.20"],
     ["08","StreamBox, monthly","9.99","","239.21"],
     ["11","Cash machine, Quay Rd","60.00","","179.21"],
     ["15","Northgate Distribution","","486.00","665.21"],
     ["18","Portmere Council, tax","109.31","","555.90"],
     ["22","Marrow &amp; Son","22.00","","533.90"],
     ["27","Rent, standing order","538.00","","-4.10"],
     ["28","&nbsp;","","","-4.10"],
     ["29","Wages, Kestrel Logistics","","1,142.00","1,137.90"],
     ["30","Unarranged overdraft fee","32.00","","1,105.90"]],
    numcols=(2,3,4)), 560)
S["w09-f7"]=lambda: f_realia(screen("Tidewell · Current account",
    [("Balance","1,105.90"),("30 Jul · Overdraft fee","32.00"),
     ("29 Jul · Kestrel Logistics","+1,142.00"),("27 Jul · Rent","538.00"),
     ("22 Jul · Marrow & Son","")], btn="DISPUTE A PAYMENT", flags=(4,)), 450)
S["w09-f8"]=lambda: f_scene(780,390, people=[("adeel",250,180,{"seated":True}),
    ("grace",450,174,{"seated":True})],
    props=[("desk",380,195,0.95),("statement",330,168,0.3),("computer",450,150,0.4),
    ("note",220,180,0.28)], window_=(600,56,130,100))
S["w09-f9"]=lambda: f_realia(form("Tidewell Bank · Complaint",
    [("What happened",""),("When",""),("What it cost",""),("What I would like",""),
     ("Account number",""),("Reference","")]), 440)
S["w09-f10"]=lambda: f_realia(doc("A slip of paper", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:18px;line-height:2'>"
    "1. refund the 32<br>2. move the rent to the 30th<br>"
    "3. what would an arranged overdraft have cost?</p>"), 340)
S["w09-f11"]=lambda: f_panels(
    P(people=[("adeel",140,180,{"seated":True,"smile":False})],
      props=[("table",100,230,1.1),("computer",150,185,0.42),("statement",250,195,0.28)], floor=0.82),
    P(people=[("adeel",140,180,{"seated":True}),("grace",280,174,{"seated":True})],
      props=[("desk",220,190,0.9),("refnumber",180,165,0.3)], floor=0.82),
    lt="Tuesday night", rt="Thursday")
S["w09-f12"]=lambda: f_scene(880,410, people=[("adeel",130,180,{"seated":True}),
    ("grace",260,174,{"seated":True}),("lucia",400,172,{}),("mei",470,166,{}),("tomas",540,180,{}),
    ("priya",650,172,{}),("nadia",730,174,{}),("bah",820,176,{})],
    props=[("desk",200,190,0.9),("cashmachine",600,180,0.55),("cashmachine",690,180,0.55),
    ("bank",50,45,0.45),("jobnotice",790,55,0.4)])
S["w09-f13"]=lambda: f_chart([("never",8),("when something looks wrong",7),
    ("monthly",6),("weekly",4)], unit="students")
S["w09-f14"]=lambda: f_scene(820,410, floor=0.82, panelbg="#1f2733", floorbg="#2b333d",
    litwins=[(740,96,56,46)],
    people=[("oksana",270,172,{"smile":False})],
    props=[("cashmachine",160,0,0.8),("car",560,0,1.0),("phone",392,176,0.38)])

S["w10-f1"]=lambda: f_icons([("idcard","ID card"),("form","registration form"),
    ("utilitybill","proof of address"),("refnumber","reference number"),
    ("appointment","appointment"),("councilbuilding","council office"),("portal","portal login"),
    ("passport","passport"),("utilitybill","utility bill"),("stamp","stamped receipt")], cols=5)
S["w10-f2"]=lambda: f_scene(880,410, behind=[("nkemelu",640,176,{})],
    people=[("oksana",240,172,{}),("lucia",400,172,{"seated":True}),("mei",470,166,{"seated":True}),
    ("priya",540,172,{"seated":True}),("tomas",770,180,{}),("ahmad",830,180,{}),
    ("linh",100,172,{"seated":True}),("adeel",170,180,{"seated":True})],
    counter_=(560,220,300,120),
    props=[("ticketmachine",40,170,0.6),("form",300,160,0.32),("chair",380,230,0.6),
    ("chair",520,230,0.6)],
    sign_=(300,24,250,40,"SERVICES 1–4",MUTED,13))
S["w10-f3"]=lambda: f_cycle(["library card|needs proof|of address","proof of address|needs a council|letter",
    "the letter|needs an|appointment","the appointment|needs a portal|account",
    "the account|needs a code|posted to you","the code|needs a|registered address"], w=560)
S["w10-f4"]=lambda: f_realia(tbl("Portmere City Council","Proof of address",
    ["Accepted","Not accepted"],
    [["Tenancy agreement signed by both parties","A letter addressed to a previous tenant"],
     ["Utility bill, last three months","A bank statement printed at home"],
     ["Council tax bill","A delivery confirmation"],
     ["Letter from your employer on headed paper","A letter you have opened and resealed"],
     ["Bank statement posted to you","&nbsp;"],
     ["Letter from a school or college","&nbsp;"]]), 540)
S["w10-f5"]=lambda: f_realia(doc("Portmere City Council · New residents",
    "Four things to do in your first month",
    "<p><b>1. Register your address.</b> Online or at the Quay Road office. You will need proof of "
    "address and photographic identity. You will be given a reference number; everything else asks "
    "for it.</p>"
    "<p><b>2. Council tax.</b> Every household pays it. <b>Full-time students are exempt</b>, and "
    "a household of one adult pays 25 percent less. Neither discount is applied automatically &mdash; "
    "you have to claim it, and it can be backdated.</p>"
    "<p><b>3. Register with a doctor.</b> You do not need proof of address or immigration status to "
    "register. A practice that refuses you on those grounds is wrong, and you may say so.</p>"
    "<p><b>4. The library.</b> Free, and it is also where you will find free internet access, "
    "printing at cost, and a weekly session where somebody will help you with forms.</p>",
    "<b>If you cannot prove your address</b>, come to the desk anyway and say so. There is a "
    "procedure for it. It is slower, and it exists."))
S["w10-f6"]=lambda: f_realia(form("Portmere City Council · Registration",
    [("Family name","OKSANA ·  KOVAL"),("Date of birth","11.06.1994"),
     ("Address","Flat 3, 9 Bridge Lane"),("Moved in","4 September"),
     ("Proof enclosed","&#10003; tenancy agreement"),("Photo ID","&#10003; passport"),
     ("Council tax status",""),("Signature","")],
    note="I declare that the information above is correct."), 460)
S["w10-f7"]=lambda: f_process(["move in","register|your address","get a council|letter",
    "apply for a|library card","register with|a doctor","claim the|tax exemption"],
    w=760, loop=(3,1))
S["w10-f8"]=lambda: f_realia(tbl("Quay Road office","Now serving",
    ["Service","Ticket","Waiting"],
    [["1 Registration","A-214","6"],["2 Council tax","B-087","4"],
     ["3 Housing","&nbsp;","11"],["4 General","D-156","2"]], numcols=(2,),
    note="Estimated wait: <b>45 minutes</b>"), 420)
S["w10-f9"]=lambda: f_scene(800,400, behind=[("nkemelu",540,176,{})],
    people=[("oksana",250,172,{})],
    counter_=(430,218,340,122),
    props=[("stamp",480,150,0.35),("form",330,165,0.32),("refnumber",90,50,0.45),
    ("passport",200,175,0.3)])
S["w10-f10"]=lambda: f_realia(tbl("","Arrival checklist",
    ["Task","Who for","What to bring","By when","Done"],
    [["","","","",""],["","","","",""],["","","","",""],["","","","",""],
     ["","","","",""],["","","","",""],["","","","",""],["","","","",""]]), 540)
S["w10-f11"]=lambda: f_realia(doc("Arrival checklist", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:17px;line-height:2'>"
    "&#10003; register address &mdash; tenancy + passport<br>"
    "&#10003; portal account &mdash; code came in 6 days<br>"
    "&#10003; council letter &mdash; ref PM-4471<br>"
    "&#10003; library card &mdash; council letter<br>"
    "&#10003; doctor &mdash; nothing needed!<br>"
    "? council tax exemption &mdash; <u>student letter, by 31 Oct</u><br>"
    "? school place for Dariya &mdash; <u>apply by 15 Jan</u><br>"
    "&nbsp;&nbsp; bank account &mdash; waiting on the council letter</p>"), 400)
S["w10-f12"]=lambda: f_panels(
    P(people=[("oksana",140,172,{"smile":False,"seated":True})],
      props=[("table",100,230,1.1),("computer",150,185,0.42),("portal",250,160,0.35),
      ("form",300,200,0.3)], floor=0.82),
    P(behind=[("nkemelu",290,176,{})], people=[("oksana",130,172,{})],
      counter_=(220,212,160,108), props=[("stamp",250,152,0.3),("studentcard",170,160,0.3)],
      floor=0.82),
    lt="at home", rt="Quay Road")
S["w10-f13"]=lambda: f_scene(900,420, behind=[("nkemelu",600,176,{}),("grace",700,174,{}),
    ("bah",790,176,{})],
    people=[("oksana",120,172,{}),("lucia",200,172,{"seated":True}),("mei",270,166,{"seated":True}),
    ("priya",340,172,{"seated":True}),("ahmad",410,180,{"seated":True}),("linh",480,172,{}),
    ("tomas",850,180,{})],
    counter_=(560,222,330,118),
    props=[("ticketmachine",40,165,0.6),("chair",180,235,0.6),("chair",320,235,0.6),
    ("waitscreen",300,40,0.5),("computer",60,45,0.35)])
S["w10-f14"]=lambda: f_chart([("proof of address",11),("registering with a doctor",7),
    ("bank account",6),("school place",4),("council tax",3)], unit="students")
S["w10-f15"]=lambda: f_scene(780,400, behind=[("oyelaran",520,170,{"smile":False})],
    people=[("bah",250,176,{"smile":False})],
    counter_=(400,218,340,122),
    props=[("envelope",320,160,0.32),("form",470,150,0.3),("councilbuilding",70,50,0.45)])

# ---------------- Unit 11 ----------------
S["w11-f1"]=lambda: f_icons([("storm","storm"),("powercut","power cut"),("torch","torch"),
    ("candle","candles"),("fallentree","fallen tree"),("flood","flooded road"),
    ("emergencycall","emergency number"),("firealarm","fire alarm"),("firstaid","first-aid kit"),
    ("radio","radio")], cols=5)
S["w11-f2"]=lambda: f_scene(820,420, floor=0.80, panelbg="#1f2733", floorbg="#2b333d",
    branch=(90, 336, 470),
    litwins=[(260,66,58,46),(640,104,52,42),(730,88,58,46)],
    people=[("caruso",528,184,{})],
    props=[("door",486,110,0.95),("phone",566,244,0.3),
    ("rain",386,26,0.5),("rain",772,32,0.45)])

S["w11-f3"]=lambda: f_icons([("fusebox","check the fuse box"),("phone","phone a neighbor"),
    ("door","go outside and look"),("candle","light candles"),("car","charge from a car"),
    ("housemate","knock on a door")], cols=3)
S["w11-f4"]=lambda: f_realia(doc("Three screens, 20:31", None,
    "<p><b>1. portmerepower.example &mdash; </b><span style='color:#b23b2e'>this page cannot be "
    "reached</span></p>"
    "<p><b>2. social media, 11 minutes ago &mdash; </b>&ldquo;whole of Bridge Lane out, tree down "
    "on the wire by the bridge&rdquo;</p>"
    "<p><b>3. text alert from your supplier, 20:29 &mdash; </b>&ldquo;We know about the fault "
    "affecting PM4 9. Engineers are on site. Estimated restoration <b>01:30</b>. Reply HELP if you "
    "need priority support.&rdquo;</p>",
    "The company's own website is down because the company's area has no power. The alert still "
    "arrived, because it goes out over the phone network."))
S["w11-f5"]=lambda: f_realia(doc("Portmere Power · In a power cut",
    "What to do, and what to leave alone",
    "<p><b>Call 105.</b> It is free. It works from a mobile. It reaches your network operator, "
    "wherever you live. You do not need your account number.</p>"
    "<p><b>The priority services register</b> is free. You can join it if anyone in the house "
    "needs electricity for medical equipment. You can also join if they are over sixty, have a "
    "disability, or have a young child. People on the register are called first. Some are "
    "visited. Nobody checks your immigration status to put you on it.</p>"
    "<p><b>Three warnings.</b> Never touch a fallen cable. Never touch anything near one, not "
    "even a wet fence. Assume it is live. Stay back the length of a bus. Never run a generator "
    "or a barbecue indoors. Never leave a candle burning in an empty room.</p>",
    "If you are off supply for longer than the standard set for your area, you may be owed "
    "compensation automatically. You do not have to ask, but it is worth checking that you got it."))
S["w11-f6"]=lambda: f_realia(tbl("Bridge Lane · 14 November","Incident timeline",
    ["Time","What happened","Reported by"],
    [["20:18","Lights flickered twice, then went out","&mdash;"],
     ["20:22","Street lights out as far as the bridge","a neighbor, by phone"],
     ["20:26","First call to 105","T. Alvarez"],
     ["20:31","Text alert: fault known, engineers on site","the supplier"],
     ["21:40","Fault located &mdash; branch across the overhead line","engineers"],
     ["23:15","Branch cleared; line tested","engineers"],
     ["01:10","Supply restored to 180 properties","&mdash;"],
     ["02:40","Remaining 14 properties restored","&mdash;"]]), 540)
S["w11-f7"]=lambda: f_realia(screen("Portmere Power · Status",
    [("Area","PM4 9"),("Streets affected","Bridge Ln, Market St, Quay Rd, Fenner St"),
     ("Estimated restoration","01:30"),("Cause",""),("Last updated","20:29")],
    btn=None, flags=(3,)), 450)
S["w11-f8"]=lambda: f_scene(880,420, floor=0.80, panelbg="#1f2733", floorbg="#2b333d",
    branch=(30, 336, 330, 180, 20),
    litwins=[(700,84,56,46),(800,92,52,42)],
    people=[("yusuf",300,186,{}),("oskar",452,180,{"cloth":"amberish"}),("caruso",760,184,{})],
    props=[("car",560,0,1.5),("door",716,112,0.9),("torch",352,232,0.42)])

S["w11-f9"]=lambda: f_realia(tbl("","Incident timeline",["Time","What happened","Who saw it"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]]), 500)
S["w11-f10"]=lambda: f_realia(doc("The back of an envelope", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:18px;line-height:2.1'>"
    "8.18 &mdash; lights went twice, then out<br>"
    "8.22 &mdash; street lights out to the bridge<br>"
    "8.26 &mdash; called 105, answered in 40 sec<br>"
    "9.40 &mdash; van arrived, branch on the wire</p>"), 360)
S["w11-f11"]=lambda: f_panels(
    P(floor=0.82, panelbg="#1f2733", floorbg="#2b333d",
      beams=[(150,170,0.9,0.4,140,30)],
      people=[("yusuf",120,186,{"smile":False})],
      props=[("cooker",250,0,0.62),("pan",276,168,0.3),("torch",152,172,0.36)]),
    P(floor=0.82, panelbg="#1f2733", floorbg="#2b333d",
      beams=[(170,172,0.7,0.3,130,28)],
      people=[("yusuf",140,186,{})],
      props=[("door",252,112,0.85),("torch",172,174,0.36)]),
    lt="20:20", rt="20:35")

S["w11-f12"]=lambda: f_scene(960,440, floor=0.80, panelbg="#1f2733", floorbg="#2b333d",
    branch=(410, 352, 350, 200, 24),
    litwins=[(60,76,56,46),(900,70,56,46)],
    people=[("oskar",250,180,{"cloth":"amberish"}),("bah",312,176,{"cloth":"amberish"}),
    ("yusuf",530,186,{}),("caruso",590,184,{}),
    ("lucia",820,172,{}),("priya",874,172,{}),("oyelaran",926,170,{})],
    props=[("car",64,0,1.5),("torch",566,236,0.5),("torch",856,236,0.48),
    ("door",760,108,0.88)])

S["w11-f13"]=lambda: f_chart([("a torch",12),("candles",9),("a radio",3),("water",3),
    ("nothing",6)], unit="students")
S["w11-f14"]=lambda: f_scene(800,430, floor=0.84, panelbg="#1f2733", floorbg="#2b333d",
    stairs_=(250, 361, 300, 30, 6, 1),
    beams=[(430,250,-0.9,0.5,200,34)],
    people=[("oyelaran",612,150,{"smile":False,"floor":181}),("ahmad",400,174,{"floor":271})],
    props=[("wheelchair",648,126,0.62),("torch",438,236,0.46),("door",86,120,0.88)])

S["w12-f1"]=lambda: f_icons([("park","park"),("museum","museum"),("shopping","market"),
    ("swimming","swimming pool"),("library","library"),("cinema","cinema"),
    ("walkroute","walking route"),("football","football pitch"),("festival","festival"),
    ("cafe","café")], cols=5)
S["w12-f2"]=lambda: f_scene(880,410, people=[("nkemelu",780,176,{}),
    ("linh",160,172,{}),("nadia",240,174,{}),("priya",320,172,{}),("mei",400,166,{}),
    ("lucia",480,172,{}),("ahmad",560,180,{}),("adeel",630,180,{}),("oksana",100,172,{}),
    ("tomas",700,180,{})],
    board=(280,20,330,120,"WHERE?",[("1 museum","6 pool"),("2 hill walk","7 cinema"),
    ("3 market","8 café")]),
    props=[("clock",60,45,0.4)])
S["w12-f3"]=lambda: f_icons([("queue","crowded / empty"),("queue","short / long queue"),
    ("pricetag","dear / cheap"),("walk","near / far"),("door","open / closed"),
    ("concert","busy / quiet")], cols=3)
S["w12-f4"]=lambda: f_realia(doc("Portmere Leisure Center · reviews", None,
    "<p style='font-size:28px;font-weight:800;margin:0'>4.6 <span style='font-size:14px;"
    "font-weight:400;color:#6b6861'>from 820 reviews</span></p>"
    "<table style='width:100%;font-size:12px;margin-top:10px'>"
    "<tr><td>5 star</td><td style='width:70%'><div style='height:9px;background:#ab7200;"
    "width:74%'></div></td><td align='right'>608</td></tr>"
    "<tr><td>4 star</td><td><div style='height:9px;background:#ab7200;width:14%'></div></td>"
    "<td align='right'>114</td></tr>"
    "<tr><td>3 star</td><td><div style='height:9px;background:#b9b7b0;width:3%'></div></td>"
    "<td align='right'>25</td></tr>"
    "<tr><td>2 star</td><td><div style='height:9px;background:#b9b7b0;width:2%'></div></td>"
    "<td align='right'>16</td></tr>"
    "<tr><td>1 star</td><td><div style='height:9px;background:#b9b7b0;width:7%'></div></td>"
    "<td align='right'>57</td></tr></table>"
    "<p style='margin-top:12px'><b>&ldquo;Clean, warm, and the staff know your name.&rdquo;</b> "
    "&mdash; last week</p>"
    "<p><b>&ldquo;Closed all summer with no notice. Useless.&rdquo;</b> &mdash; three years ago</p>",
    "Most of the one-star reviews are dated within the same fortnight, three years ago."))
S["w12-f5"]=lambda: f_realia(doc("Portmere City Council · What's on","Five things to do this month",
    "<p><b>Harbour Museum</b> &middot; Quay Road &middot; Tue–Sun, 10–17 &middot; <b>Free</b>. "
    "The fishing gallery is the one people come back for. No booking.</p>"
    "<p><b>Portmere Leisure Center</b> &middot; Fenner Street &middot; daily, 06:30–21:30 &middot; "
    "swim <b>5.20</b>, concession <b>3.10</b>. Booking needed at weekends.</p>"
    "<p><b>The Hill walk</b> &middot; behind the hospital &middot; always open &middot; "
    "<b>free</b>. Forty minutes up, twenty down, and the whole harbour at the top.</p>"
    "<p><b>Saturday market</b> &middot; Fenner Street &middot; Sat, 08–14 &middot; <b>free</b> to "
    "walk through. Cheapest produce in the city after one o'clock.</p>"
    "<p><b>Palace Cinema</b> &middot; Bridge Lane &middot; <b>9.80</b>, concession <b>6.50</b>, "
    "and <b>4.00 all day Tuesday</b>.</p>",
    "<b>Free days:</b> the museum runs a free late opening on the first Thursday. The leisure "
    "center is free for under-16s during school holidays. Neither is advertised well."))
S["w12-f6"]=lambda: f_realia(tbl("Five activities","Compared",
    ["","Cost","Travel","How long","Crowded","Booking"],
    [["Museum","0","15 min","2 h","quiet","no"],
     ["Hill walk","<b>0</b>","<b>10 min</b>","1 h","very quiet","no"],
     ["Swimming","3.10","20 min","1 h","busy","at weekends"],
     ["Market","0","15 min","1 h","very busy","no"],
     ["Cinema","4.00","25 min","2 h","quiet","no"]],
    note="<b>Cheapest and nearest:</b> the hill walk. It was the last thing anybody suggested."), 560)
S["w12-f7"]=lambda: f_realia(tbl("Room 7 · whiteboard","Nine suggestions",
    ["","Cost","Travel","Votes"],
    [["1 Museum","0","15","5"],["2 Hill walk","0","10","<b>7</b>"],
     ["3 Market","0","15","<b>6</b>"],["4 Swimming","3.10","20","4"],
     ["5 Cinema","4.00","25","<b>6</b>"],["6 Café","3.50","10","3"],
     ["7 Beach","0","55","2"],["8 Football","2.00","30","2"],
     ["9 Library","0","12","1"]], numcols=(1,2,3)), 450)
S["w12-f8"]=lambda: f_realia(tbl("Portmere Leisure Center","Prices",
    ["Activity","Peak","Off-peak","Concession"],
    [["Swim","5.20","4.10","3.10"],["Gym","7.40","5.90","4.40"],
     ["Badminton, per court","12.00","9.00","&nbsp;"],
     ["Class","8.00","6.50","4.80"],["Sauna","4.00","4.00","3.00"]],
    numcols=(1,2,3),
    note="Peak: weekdays 07–09 and 17–21, and all weekend. Concession: students, over-65s, "
    "under-16s, anyone on income support."), 500)
S["w12-f9"]=lambda: f_scene(800,400, behind=[("grace",540,174,{})],
    people=[("linh",250,172,{}),("mei",650,166,{}),("priya",720,172,{})],
    counter_=(430,218,330,122),
    props=[("studentcard",320,165,0.3),("computer",480,150,0.4),("pricetag",80,50,0.45),
    ("swimming",160,50,0.45)])
S["w12-f10"]=lambda: f_realia(tbl("","Class list",
    ["Activity","Cost","Travel","How long","Votes"],
    [["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],
     ["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]]), 500)
S["w12-f11"]=lambda: f_realia(doc("Room 7 · the finished list", None,
    "<p class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:17px;line-height:2'>"
    "<u>1 museum &mdash; free, 15 min</u><br>"
    "<u>2 hill walk &mdash; free, 10 min</u><br>"
    "<u>3 market &mdash; free, 15 min</u><br>"
    "4 swimming &mdash; 3.10, 20 min<br>"
    "5 cinema &mdash; 4.00 Tue, 25 min<br>"
    "6 café &mdash; 3.50? ask<br>"
    "7 football &mdash; 2.00? ask<br>"
    "8 library &mdash; free, 12 min<br>"
    "<s>9 beach &mdash; closed in winter</s></p>"), 380)
S["w12-f12"]=lambda: f_panels(
    P(people=[("nkemelu",300,176,{}),("linh",130,172,{}),("nadia",200,174,{})],
      board=(220,24,150,90,"WHERE?",[("1 museum",""),("2 ?","")]), floor=0.82),
    P(people=[("nkemelu",320,176,{}),("linh",110,172,{}),("nadia",175,174,{}),
      ("priya",240,172,{})],
      board=(160,16,210,110,"WHERE?",[("1 museum","5"),("2 hill walk","7"),("3 market","6")]),
      props=[("phone",80,165,0.3)], floor=0.82),
    lt="10:40", rt="11:20")
S["w12-f13"]=lambda: f_scene(900,440, floor=0.72, skyline=(0,196,900,78),
    people=[("linh",150,172,{}),("nadia",214,174,{}),
    ("ahmad",470,180,{}),("hana",524,150,{}),
    ("priya",700,172,{}),("mei",828,166,{})],
    props=[("bench",330,0,1.0),("walkroute",56,44,0.62),("sun",812,36,0.52),
    ("phone",738,244,0.32),("park",250,0,0.55)])

S["w12-f14"]=lambda: f_chart([("weekly",6),("monthly",8),("a few times a year",9),
    ("almost never",7)], unit="students")
S["w12-f15"]=lambda: f_scene(760,390, people=[("bah",260,176,{"smile":False,"seated":True})],
    props=[("table",190,250,1.2),("phone",250,195,0.35),("notebook",360,195,0.3),
    ("coat",600,195,0.5),("chair",570,230,0.7)],
    window_=(540,56,150,110))
