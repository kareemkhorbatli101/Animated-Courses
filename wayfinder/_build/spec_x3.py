# -*- coding: utf-8 -*-
"""Book 4 figure specs, Units 7 to 9."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

# ---------------- Unit 7 ----------------
S["x07-f1"]=lambda: f_icons([("bankcard","bank card"),("twofactor","two-factor"),
    ("frozen","frozen"),("statement","transactions"),("directdebit","direct debit"),
    ("transfer","chargeback"),("savings","standing order"),("padlock","secure"),
    ("messages","a message"),("refnumber","reference")], cols=5)
S["x07-f2"]=lambda: f_scene(820,400, people=[("lucia",330,172,{"smile":False})],
    counter_=(80,232,330,108),
    on_counter=[("phone",150,0.5),("tin",230,0.45)],
    props=[("cooker",560,0,1.1),("coat",720,150,0.62),("chair",690,0,0.9)],
    clockat=(60,52,22,8,0))
S["x07-f3"]=lambda: f_icons([("timer","urgency"),("phone","a number to call"),
    ("bankapp","a convincing logo"),("messages","a wrong address"),
    ("sim","a request for a code"),("danger","pressure")], cols=3)
S["x07-f4"]=lambda: f_realia(tbl("","What my bank actually promises",
    ["",""],[["What they never ask for",""],["The reporting deadline",""],
    ["When they refuse",""],["Where I found this",""]]), 440)
S["x07-f5"]=lambda: f_realia(doc("Tidewell Bank · customer information · section 9",
    "Unauthorized payments: our policy",
    "<p><b>9.1 What we will never do.</b> We will never telephone you and ask you to read out a "
    "security code, move money to a \"safe account\", or install software so that we can help "
    "you. No genuine member of our staff will ever ask for any of these, in any circumstances.</p>"
    "<p><b>9.2 Reporting.</b> Tell us as soon as you become aware of a payment you did not "
    "authorize. You must report it <b>within thirteen months</b> of the payment date. We will "
    "normally provide a provisional refund <b>by the end of the next working day</b> after you "
    "report it, and we will then investigate.</p>"
    "<p><b>9.3 When we may not refund.</b> We may decline where you have acted with gross "
    "negligence, or where you authorized the payment yourself, even if you were deceived into "
    "doing so. In practice the second of these is the harder case, and it is the most common "
    "one.</p>"
    "<p><b>9.4 Scale.</b> We say this because customers often assume they are unusual. They are "
    "not. In 2025 global losses to financial fraud were estimated at <b>USD 442 billion</b>, and "
    "schemes using artificial intelligence were around <b>four and a half times more "
    "profitable</b> than conventional ones. This is an industry, not a run of bad luck.</p>"
    "<p><b>9.5 If you disagree with us.</b> You may refer the matter to the financial ombudsman "
    "free of charge. Our final answer does not end the matter.</p>",
    "Figures: INTERPOL, <i>2nd Global Financial Fraud Threat Assessment</i>, 2026."))
S["x07-f6"]=lambda: f_realia(tbl("Word study","Prefixes of opposition and wrongness",
    ["Prefix","Means","Stem","New word"],
    [["un-","not, reversed","authorized","unauthorized"],
     ["mis-","wrongly","lead","mislead"],["counter-","against","measure","countermeasure"],
     ["anti-","opposed to","fraud","anti-fraud"],["de-","removing","activate","deactivate"]]), 490)
S["x07-f7"]=lambda: f_process(["the payment|happens","you|notice","you|report it",
    "provisional|refund","the bank|investigates","the bank|decides"], w=800, loop=(5,2))
S["x07-f8"]=lambda: f_icons([("phone","an unknown number"),("timer","a countdown"),
    ("bankapp","an app notification"),("bankcard","the number on the card"),
    ("portal","an address bar"),("padlock","hanging up")], cols=3)
S["x07-f9"]=lambda: f_realia(form("Tidewell Bank · Disputed transaction",
    [("Account number",""),("Transaction date",""),("Transaction amount",""),
     ("Date you became aware",""),("What happened",""),("Have you reported it to us by phone?",""),
     ("Signature",""),("Reference","PM-77410")],
    note="I declare that the information given is true to the best of my knowledge."), 470)
S["x07-f10"]=lambda: f_scene(820,400, people=[("grace",470,174,{"seated":True}),
    ("lucia",260,172,{})],
    props=[("desk",420,195,1.35),("statement",390,168,0.52),("computer",470,150,0.52),
    ("phone",320,180,0.52),("notebook",220,185,0.52),("bank",70,50,0.6)])
S["x07-f11"]=lambda: f_realia(tbl("Two records","Which came first?",
    ["Transactions","Messages"],
    [["07:48 &nbsp; Card payment &nbsp; 12.40<br>08:31 &nbsp; <b>Transfer out &nbsp; 418.00</b><br>"
      "08:34 &nbsp; Account frozen<br>08:52 &nbsp; Card payment declined<br>"
      "09:10 &nbsp; ______ &nbsp; 0.00",
      "07:52 &nbsp; \"A payment of 418 has been attempted\"<br>"
      "07:54 &nbsp; \"You have 11 minutes to stop this\"<br>"
      "07:55 &nbsp; call placed to number in message<br>"
      "08:30 &nbsp; code received by text<br>______ &nbsp; call ends"]]), 540)
S["x07-f12"]=lambda: f_realia(doc("L. Pham · Flat 2, 12 Market Street",
    "Complaint · reference PM-77410",
    "<p>At 07:52 on Tuesday 11 November I received a message naming this bank and a payment of "
    "418.00. At 07:55 I called the number in the message. At 08:30 I read out a code that arrived "
    "by text. At 08:31 a transfer of 418.00 left my account. I reported it to you at 08:34, three "
    "minutes later.</p>"
    "<p>Your section 9.1 states that no member of your staff will ever ask for a security code. "
    "The caller was not your staff. Section 9.2 gives thirteen months to report; I reported within "
    "three minutes.</p>"
    "<p>I am asking for the 418.00 to be refunded and for a written explanation of how the sender "
    "was able to display your name.</p>",
    "L. Pham · 11 November · enclosures: screenshot of message, call log"))
S["x07-f13"]=lambda: f_realia(tbl("","Incident record",
    ["Time","What happened"],
    [["",""],["",""],["",""],["",""],["",""],["",""]],
    note="Amount: &nbsp;&nbsp;&nbsp; Reference: &nbsp;&nbsp;&nbsp; Who I spoke to:"), 460)
S["x07-f14"]=lambda: f_scene(920,430, behind=[("grace",560,174,{}),("nkemelu",650,176,{})],
    people=[("lucia",120,172,{}),("adeel",190,180,{}),("mei",260,166,{}),
    ("tomas",330,180,{}),("oyelaran",780,170,{}),("bah",850,176,{}),("priya",890,172,{})],
    counter_=(500,222,220,118),
    props=[("cashmachine",60,0,1.35),("cashmachine",160,0,1.35),("bank",60,45,0.6),
    ("jobnotice",420,45,0.6),("padlock",760,55,0.6)])
S["x07-f15"]=lambda: f_chart([("open the app",12),("call the number on the card",8),
    ("ignore it",5),("ask somebody",4),("call the number in the message",2)])
S["x07-f16"]=lambda: f_scene(820,410, people=[("caruso",260,184,{"smile":False,"seated":True}),
    ("lucia",620,172,{})],
    props=[("chair",230,235,0.8),("phone",320,186,0.52),("notebook",360,200,0.52),
    ("door",730,110,1.35),("bag",660,205,0.62),("lamp",120,170,0.62)], floor=0.84)

# ---------------- Unit 8 ----------------
S["x08-f1"]=lambda: f_icons([("discharge","referral"),("clinic","outpatient"),
    ("queue","waiting list"),("doctor","consultant"),("bloodtest","blood test"),
    ("xray","scan"),("medicine","prescription"),("appointment","follow-up"),
    ("thermometer","symptom"),("form","information leaflet")], cols=5)
S["x08-f2"]=lambda: f_scene(900,410, people=[("tomas",250,180,{}),("hana",700,166,{}),
    ("nkemelu",790,176,{})],
    counter_=(660,220,240,120),
    props=[("clinic",60,45,0.6),("waitscreen",200,42,0.6),("triage",420,45,0.6),
    ("queue",560,205,0.62),("chair",120,235,0.7)])
S["x08-f3"]=lambda: f_icons([("jobnotice","department sign"),("portal","check-in screen"),
    ("bloodtest","blood tests"),("xray","imaging"),("pharmacy","pharmacy"),
    ("triage","reception")], cols=3)
S["x08-f4"]=lambda: f_realia(tbl("","How long is the wait?",
    ["","Published wait","What people say","Where I found this"],
    [["Routine","","",""],["Urgent","","",""],["Emergency","","",""]]), 520)
S["x08-f5"]=lambda: f_realia(doc("Portmere Health Partnership · patient information, sheet 7",
    "Moving more, when moving more is difficult",
    "<p>The guideline is <b>150 minutes of moderate activity a week</b>, or 75 minutes of "
    "vigorous activity, or a mixture. Moderate means you can talk but not sing. That is the whole "
    "test.</p>"
    "<p><b>How common is it not to meet it?</b> About <b>31 per cent of adults worldwide</b> "
    "&mdash; roughly <b>1.8 billion people</b> &mdash; do not. That share has risen from 23.4 per "
    "cent in 2000 to 31.3 per cent in 2022, and on current trends it is projected to reach about "
    "35 per cent by 2030.</p>"
    "<p><b>Who is most affected.</b> Inactivity is more common among women, at 34 per cent "
    "against 29 per cent for men. It increases with age and with the hours a job requires you to "
    "sit. Most of the change over twenty years has come from work and transport becoming more "
    "sedentary, not from people choosing to exercise less.</p>"
    "<p><b>What we advise, and why it is unimpressive.</b> We do not recommend joining anything. "
    "We recommend finding the fifteen minutes that already exist in your day and walking during "
    "them, ten times a week. People who begin with a plan that requires a gym, a bag and a change "
    "of clothes stop within six weeks at rates we no longer find surprising.</p>"
    "<p><b>If you are waiting for an appointment,</b> this is the single most useful thing you "
    "can do in the meantime, and it is free, and nobody has to approve it.</p>",
    "Figures: World Health Organization, 2024."))
S["x08-f6"]=lambda: f_realia(tbl("Word study","-ity and -ness",
    ["Adjective","Noun","Which suffix?"],
    [["active","activity","-ity"],["fit","fitness","-ness"],["able","ability","-ity"],
     ["tired","tiredness","-ness"],["severe","severity","-ity"]]), 440)
S["x08-f7"]=lambda: f_line([("2000",23.4),("2010",26.3),("2022",31.3),("2030",35.0)],
    w=620, unit="per cent of adults not meeting the guideline · dashed = projection",
    dashed_from=2, ymin=20)
S["x08-f8"]=lambda: f_icons([("walk","stairs, with a pause"),("bed","sleeping badly"),
    ("bag","walking with a bag"),("danger","declining a cigarette"),
    ("desk","a long time sitting"),("tired","slightly out of breath")], cols=3)
S["x08-f9"]=lambda: f_realia(doc("Portmere Hospital · Appointments","Your appointment",
    "<table style='width:100%;font-size:13px'>"
    "<tr><td>Patient</td><td align='right'>T. Alvarez</td></tr>"
    "<tr><td>Number</td><td align='right'>PM 4 417 092</td></tr>"
    "<tr><td><b>Date</b></td><td align='right'><b>Tuesday 19 November</b></td></tr>"
    "<tr><td><b>Time</b></td><td align='right'><b>14:20</b></td></tr>"
    "<tr><td>Department</td><td align='right'>Cardiology Outpatients</td></tr>"
    "<tr><td>Where</td><td align='right'>Map reference C4</td></tr></table>"
    "<p style='margin-top:10px'><b>Please bring</b> a list of your medicines and this letter. If "
    "you cannot attend, give us <b>at least two working days'</b> notice.</p>",
    "Please arrive 15 minutes before your appointment time for check-in."))
S["x08-f10"]=lambda: f_scene(800,390, people=[("nkemelu",430,176,{"seated":True}),
    ("tomas",250,180,{"seated":True})],
    props=[("desk",380,195,1.35),("computer",430,150,0.52),("form",330,170,0.52),
    ("chair",220,230,0.75),("clinic",70,50,0.6)], window_=(640,56,130,100))
S["x08-f11"]=lambda: f_realia(tbl("Two letters","What differs?",
    ["Letter of 3 September","Letter of 28 October"],
    [["Date &nbsp; Tue 19 November<br>Time &nbsp; 14:20<br>"
      "Dept &nbsp; <b>Cardiology Outpatients</b><br>Map &nbsp; C4<br>Bring &nbsp; medicines list<br>"
      "Notice to cancel &nbsp; ______",
      "Date &nbsp; Tue 19 November<br>Time &nbsp; 14:20<br>"
      "Dept &nbsp; <b>Ambulatory Care, Level 2</b><br>Map &nbsp; ______<br>"
      "Bring &nbsp; medicines list<br>Notice to cancel &nbsp; 2 working days"]]), 540)
S["x08-f12"]=lambda: f_realia(doc("Dr A. Haddad · Quay Road Practice","Referral",
    "<p><b>To:</b> Cardiology Outpatients, Portmere Hospital<br>"
    "<b>Re:</b> Tomás Alvarez, DOB 02.07.1981, PM 4 417 092</p>"
    "<p><b>Reason for referral:</b> exertional breathlessness, six months, now limiting at work.</p>"
    "<p>Mr Alvarez reports breathlessness on climbing two flights, which was not present a year "
    "ago. No chest pain. Ex-smoker, stopped 2023, twenty a day for eighteen years. Blood pressure "
    "148/92 on two readings three weeks apart.</p>"
    "<p><b>Current medication:</b> none.</p>"
    "<p><b>Already tried:</b> lifestyle advice; he has independently begun walking 50 minutes a "
    "day since June, with symptomatic improvement.</p>"
    "<p>Grateful for your assessment.</p>",
    "Routine referral · 14 March"))
S["x08-f13"]=lambda: f_realia(tbl("","Before and after",
    ["What I used to do","What I have been doing"],
    [["",""],["",""],["",""],["",""],["",""],["",""]],
    note="The real reason it changed:"), 460)
S["x08-f14"]=lambda: f_scene(920,430, behind=[("nkemelu",760,176,{})],
    people=[("tomas",120,180,{"seated":True}),("lucia",190,172,{"seated":True}),
    ("mei",260,166,{"seated":True}),("adeel",330,180,{"seated":True}),
    ("hana",400,166,{"seated":True}),("oksana",470,172,{}),("yusuf",540,186,{}),
    ("bah",870,176,{"seated":True})],
    counter_=(700,226,200,114),
    props=[("chair",100,240,0.65),("chair",240,240,0.65),("chair",380,240,0.65),
    ("waitscreen",300,42,0.6),("tray",600,205,0.62),("clinic",60,45,0.6)])
S["x08-f15"]=lambda: f_chart([("60 to 150",9),("under 60",8),("150 to 300",6),
    ("over 300",3),("don't know",5)], unit="students, minutes a week")
S["x08-f16"]=lambda: f_scene(800,400, people=[("grace",270,174,{"smile":False,"seated":True})],
    props=[("chair",240,235,0.75),("phone",330,186,0.52),("envelope",400,196,0.52),
    ("timetable",620,90,0.6),("bag",180,200,0.62),("uniform",120,185,0.62)], floor=0.84)

# ---------------- Unit 9 ----------------
S["x09-f1"]=lambda: f_icons([("odometer","odometer"),("notebook","service history"),
    ("form","registration"),("qualification","roadworthiness"),("tyre","tread"),
    ("danger","warning light"),("insurance","insurance"),("jobnotice","private sale"),
    ("receipt","receipt"),("engine","engine")], cols=5)
S["x09-f2"]=lambda: f_scene(880,410, people=[("ahmad",470,180,{}),("caruso",630,184,{})],
    props=[("car",180,0,1.8),("engine",250,120,0.62),("folder",690,180,0.52),
    ("torch",520,200,0.62),("bins",820,0,1.35),("door",790,110,1.35)], floor=0.82)
S["x09-f3"]=lambda: f_icons([("notebook","service stamps"),("form","registration"),
    ("qualification","certificate"),("receipt","garage receipt"),
    ("statement","history report"),("note","the seller's note")], cols=3)
S["x09-f4"]=lambda: f_realia(tbl("","What the check covers",
    ["What it covers","What it does not","How I would find out"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="Cost of the check:"), 520)
S["x09-f5"]=lambda: f_realia(doc("Portmere Motor Data · reference PMD-77214",
    "Vehicle history report",
    "<p><b>Summary.</b> No record of insurance write-off. No record of theft. No outstanding "
    "finance recorded. One previous keeper. Roadworthiness certificate current, expires in four "
    "months. <b>One item flagged for attention: a mileage discrepancy.</b></p>"
    "<table style='width:100%;font-size:13px;margin-top:8px'>"
    "<tr><td><b>Year</b></td><td align='right'><b>Recorded reading</b></td></tr>"
    "<tr><td>2021</td><td align='right'>48,900</td></tr>"
    "<tr><td>2022</td><td align='right'>61,400</td></tr>"
    "<tr><td>2023</td><td align='right'>74,100</td></tr>"
    "<tr><td>2024</td><td align='right'><b>69,800</b></td></tr>"
    "<tr><td>2025</td><td align='right'>83,200</td></tr>"
    "<tr><td>Today, declared</td><td align='right'>91,000</td></tr></table>"
    "<p style='margin-top:8px'>The 2024 reading is lower than the 2023 reading by 4,300. A "
    "reading cannot fall. Either one entry is a keying error, or the instrument has been altered, "
    "and this report cannot tell you which.</p>"
    "<p><b>What this report does not cover.</b> We hold recorded data only. We cannot tell you "
    "the mechanical condition of the vehicle, whether it has been repaired after an unclaimed "
    "accident, whether the service history is genuine, or whether the seller is entitled to sell "
    "it. A clean report is the absence of certain records, which is not the same as the absence "
    "of certain events.</p>",
    "A flagged discrepancy is indicative, not conclusive. Ask the seller and watch what happens."))
S["x09-f6"]=lambda: f_realia(tbl("Word study","Compound nouns",
    ["First noun","Second noun","Compound","Stress on"],
    [["service","history","service history","first"],["write","off","write-off","first"],
     ["road","worthiness","roadworthiness","first"],["trade","in","trade-in","first"],
     ["break","down","breakdown","first"]]), 490)
S["x09-f7"]=lambda: f_line([("2021",48.9),("2022",61.4),("2023",74.1),("2024",69.8),
    ("2025",83.2),("now",91.0)], w=700, unit="recorded odometer reading, thousands",
    mark=3, ymin=40)
S["x09-f8"]=lambda: f_icons([("tyre","a worn tire"),("notebook","a gap in the book"),
    ("danger","a warning light"),("engine","a clean engine bay"),("car","a dented panel"),
    ("key","one key, not two")], cols=3)
S["x09-f9"]=lambda: f_realia(doc("Private sale receipt", None,
    "<p><b>Seller:</b> E. Caruso, 9 Quay Road, Portmere<br>"
    "<b>Buyer:</b> A. Rahim, 14 Bridge Lane, Portmere</p>"
    "<p><b>Vehicle:</b> panel van, registration PM19 XKT, odometer 91,000 at sale</p>"
    "<p><b>Price:</b> 1,800.00 &nbsp;&nbsp; <b>Date:</b> 16 November</p>"
    "<p style='margin-top:12px'><b>Sold as seen, tried and approved.</b></p>"
    "<p style='margin-top:14px'>Seller ______________________ &nbsp;&nbsp; "
    "Buyer ______________________</p>",
    "The seller states that the 2024 odometer entry is a keying error and that the instrument has "
    "never been altered."))
S["x09-f10"]=lambda: f_scene(880,410, people=[("ahmad",450,180,{}),("caruso",620,184,{}),
    ("oyelaran",820,170,{})],
    props=[("car",160,0,1.8),("folder",400,170,0.52),("phone",520,182,0.52),
    ("plant",790,0,0.62) if "plant" in ICON else ("bins",790,0,1.35)], floor=0.82)
S["x09-f11"]=lambda: f_realia(tbl("Two documents","Advert and report",
    ["The advertisement","The report"],
    [["2016 panel van<br>91,000 miles<br><b>Full service history</b><br>"
      "<b>One owner from new</b><br>Never been in an accident<br>Price ______",
      "Nine years old<br>91,000 declared<br><b>Stamps 2016–2023 only</b><br>"
      "<b>One previous keeper</b><br>No record of a write-off<br>Flag: mileage ______"]]), 520)
S["x09-f12"]=lambda: f_realia(doc("For sale · PM19 XKT", None,
    "<p style='font-size:17px'><b>2016 panel van &mdash; 1,850 ono</b></p>"
    "<ul style='font-size:13px'>"
    "<li>91,000 miles</li><li>Full service history</li><li>One owner from new</li>"
    "<li>Roadworthiness certificate until March</li><li>Drives perfectly</li>"
    "<li>Any inspection welcome</li></ul>"
    "<p style='margin-top:10px'><b>No timewasters.</b> Phone only, after 6.</p>"))
S["x09-f13"]=lambda: f_realia(tbl("","Claims and proof",
    ["What they said","How I could check it","What I actually did"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]]), 520)
S["x09-f14"]=lambda: f_scene(920,430, people=[("caruso",120,184,{}),("bah",200,176,{}),
    ("ahmad",380,180,{}),("lucia",450,172,{}),("mei",510,166,{}),("hana",560,166,{}),
    ("tomas",700,180,{}),("linh",760,172,{}),("adeel",870,180,{})],
    props=[("car",260,0,1.5),("car",600,0,1.5),("car",820,0,1.35),
    ("jobnotice",60,45,0.6),("studentservices",60,185,1.35)], floor=0.84)
S["x09-f15"]=lambda: f_chart([("whether it works",13),("how it looks",9),
    ("the paperwork",6),("the seller's manner",5),("nothing",2)])
S["x09-f16"]=lambda: f_scene(820,410, people=[("bah",270,176,{"smile":False}),
    ("linh",620,172,{}),("hana",680,150,{})],
    props=[("car",380,0,1.5),("notebook",330,185,0.52),("jobnotice",180,120,0.6),
    ("door",760,110,1.35)], floor=0.84)
