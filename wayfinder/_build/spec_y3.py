# -*- coding: utf-8 -*-
"""Book 5 figure specs, Units 7 to 9."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

# ---------------- Unit 7 ----------------
S["y07-f1"]=lambda: f_icons([("spreadsheet","a budget"),("dashboard","allocations"),
    ("savings","a reserve"),("statement","a quotation"),("timer","contingency"),
    ("overdraft","a deficit"),("petition","a grant application"),("calendar","recurring"),
    ("coins","one-off"),("vote","a vote")], cols=5)
S["y07-f2"]=lambda: f_scene(920,420, people=[("priya",760,172,{}),
    ("lucia",140,172,{"seated":True}),("ahmad",210,180,{"seated":True}),
    ("oksana",280,172,{"seated":True}),("mei",350,166,{"seated":True}),
    ("linh",420,172,{"seated":True}),("adeel",490,180,{"seated":True}),
    ("samira",560,172,{"seated":True})],
    board=(600,20,170,130,"11,000",[("Roof","9,000"),("Heating","6,000"),("Lighting","2,000"),
    ("Club","1,100/yr")]),
    props=[("table",100,250,2.4)])
S["y07-f3"]=lambda: f_icons([("danger","the roof"),("radiator","the heating"),
    ("lamp","the lighting"),("school","the club"),("statement","a quotation"),
    ("balance","the balance")], cols=3)
S["y07-f4"]=lambda: f_realia(tbl("","Where the money goes",
    ["Line","Amount","Recurring or one-off","Who decides"],
    [["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]],
    note="The reserve and its rules:"), 540)
S["y07-f5"]=lambda: f_realia(doc("Portmere Advice Center · winter briefing for volunteers",
    "Nine point two per cent",
    "<p>Every October we are asked how many people cannot heat their homes. There is a figure, it "
    "is reliable, and it needs three sentences of explanation before it is any use to anybody on "
    "a doorstep.</p>"
    "<p><b>The figure.</b> In 2024, <b>9.2 per cent</b> of people in the EU said they were unable "
    "to keep their home adequately warm &mdash; about forty-one million people. It is <b>down 1.4 "
    "percentage points</b> from 10.6 per cent in 2023.</p>"
    "<p><b>The first sentence.</b> It fell. That is good news and it is smaller news than it "
    "looks, because the 2023 figure was a peak driven by an energy price shock, and a fall from a "
    "peak is not the same as an improvement on normal.</p>"
    "<p><b>The second sentence.</b> In Bulgaria and Greece the figure is <b>19.0 per cent</b> "
    "&mdash; one person in five. A single European average describes nobody's street.</p>"
    "<p><b>The third sentence.</b> It is <b>self-reported</b>, and <i>adequately</i> is whatever "
    "the person answering thinks it means. Somebody heating one room and calling that adequate is "
    "counted as warm.</p>",
    "Figures: Eurostat, inability to keep home adequately warm, 2024 data."))
S["y07-f6"]=lambda: f_realia(tbl("Word study","Money nouns and their verbs",
    ["Noun","Verb","Followed by"],
    [["allocation","to allocate","… to"],["expenditure","to spend","… on"],
     ["contribution","to contribute","… to"],["subsidy","to subsidize","—"],
     ["reimbursement","to reimburse","… for"]]), 460)
S["y07-f7"]=lambda: f_chart([("Bulgaria",19.0),("Greece",19.0),("Lithuania",18.0),
    ("Spain",17.5),("EU average",9.2)],
    unit="per cent unable to keep the home adequately warm, 2024", w=540)
S["y07-f8"]=lambda: f_icons([("danger","a bucket under a drip"),("school","children in a hall"),
    ("radiator","a cold radiator"),("lamp","a dark stairwell"),
    ("board","a flip chart"),("vote","a show of hands")], cols=3)
S["y07-f9"]=lambda: f_realia(doc("Market Street Residents' Association","Budget paper — 14 November",
    "<p><b>Balance available: 11,000.</b></p>"
    "<table style='width:100%;font-size:13px'>"
    "<tr><td><b>Option</b></td><td align='right'><b>Cost</b></td><td><b>If not funded</b></td></tr>"
    "<tr><td>Roof repair</td><td align='right'>9,000</td><td>four more winters of ingress</td></tr>"
    "<tr><td>Heating, hall</td><td align='right'>6,000</td><td>hall unusable Dec–Feb</td></tr>"
    "<tr><td>Stairwell lighting</td><td align='right'>2,000</td><td>unlit stairs</td></tr>"
    "<tr><td>Saturday club</td><td align='right'>1,100 / yr</td><td>closes in March</td></tr>"
    "</table>"
    "<p style='margin-top:10px'><b>Reserve:</b> 1,500. Constitution, clause 7: <i>the reserve may "
    "be applied only to emergencies.</i></p>"
    "<p><b>Recommendation:</b> &nbsp;</p>",
    "Decisions require a simple majority of those present. Quorum: seven."))
S["y07-f10"]=lambda: f_scene(920,420, people=[("priya",750,172,{}),
    ("lucia",150,172,{"seated":True}),("ahmad",220,180,{"seated":True}),
    ("oksana",290,172,{"seated":True}),("mei",360,166,{"seated":True}),
    ("linh",430,172,{"seated":True}),("adeel",500,180,{"seated":True}),
    ("samira",570,172,{})],
    board=(600,20,170,130,"11,000",[("Roof","9,000"),("Heating","6,000"),("Lighting","2,000"),
    ("Club","1,100/yr")]),
    props=[("table",110,250,2.2),("clipboard",640,185,0.62)])
S["y07-f11"]=lambda: f_realia(tbl("Two cards","Costings and rules",
    ["The costings","The constitution"],
    [["Balance 11,000<br>Roof 9,000<br>Heating 6,000<br>Lighting 2,000<br>Club 1,100/yr<br>"
      "Reserve ______",
      "Clause 7: reserve for emergencies only<br>Clause 9: simple majority of those present<br>"
      "Clause 11: quorum of seven<br>Clause 12: recurring commitments need a 2-year plan<br>"
      "Quorum tonight: ______"]]), 520)
S["y07-f12"]=lambda: f_realia(doc("Market Street Residents' Association","To all residents",
    "<p>At the meeting on 14 November the association had 11,000 available and four things it "
    "needed:</p>"
    "<p>Roof repair &nbsp; 9,000<br>Heating to the hall &nbsp; 6,000<br>Stairwell lighting "
    "&nbsp; 2,000<br>Saturday club &nbsp; 1,100 a year</p>"
    "<p><b>The meeting voted to fund the roof and the stairwell lighting. The Saturday club will "
    "close in March.</b></p>"
    "<p>We considered funding the roof and the club and rejected it, because the club meets in "
    "the hall and the hall will not be heated. We considered using the reserve and rejected it by "
    "one vote, on the grounds that a slow emergency now leaves nothing for a fast one later. Seven "
    "of the eleven who voted have offered to help write to the parents.</p>",
    "Questions to P. Raghavan, flat 12, or at the January meeting."))
S["y07-f13"]=lambda: f_realia(tbl("","Decision paper",
    ["Option","Cost","If not funded"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="What we considered and rejected:<br><br>Who to contact:"), 500)
S["y07-f14"]=lambda: f_scene(920,430, people=[("hana",250,166,{}),("nkemelu",330,176,{}),
    ("lucia",420,172,{}),("priya",820,172,{}),("oksana",880,172,{})],
    props=[("table",120,250,1.6),("table",520,250,1.6),("bins",60,0,1.35),
    ("radiator",700,0,1.2),("board",620,40,0.6),("danger",160,50,0.52)])
S["y07-f15"]=lambda: f_chart([("the building",10),("the children",9),("the heating",6),
    ("keep the reserve",4),("the lighting",2)])
S["y07-f16"]=lambda: f_scene(840,410, people=[("oyelaran",280,170,{"smile":False,"seated":True})],
    props=[("table",220,250,1.5),("envelope",300,196,0.52),("envelope",360,196,0.52),
    ("notebook",440,200,0.52),("fridge",680,0,1.35)],
    window_=(600,60,130,100), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 8 ----------------
S["y08-f1"]=lambda: f_icons([("receipt","a receipt"),("qualification","a warranty"),
    ("packet","a returns label"),("form","a fault report"),("refnumber","a serial number"),
    ("folder","a delivery note"),("transfer","a refund"),("crate","a replacement"),
    ("engine","a repair"),("essay","terms in small type")], cols=5)
S["y08-f2"]=lambda: f_scene(840,400, people=[("linh",280,172,{"smile":False})],
    props=[("washup" if "washup" in ICON else "fridge",150,0,1.3),("phone",360,180,0.52),
    ("essay",440,185,0.52),("cooker",640,0,1.35),("window",700,60,1.0)])
S["y08-f3"]=lambda: f_icons([("calendar","a returns window"),("timer","the statutory period"),
    ("essay","the small line"),("phone","the call"),("form","the claim"),
    ("engine","the inspection")], cols=3)
S["y08-f4"]=lambda: f_realia(tbl("","The policy and the law",
    ["","Their policy","The law"],
    [["The period","",""],["The remedy","",""],["Who proves it","",""],["Any charge","",""]],
    note="Which one the script quotes:"), 480)
S["y08-f5"]=lambda: f_realia(doc("Portmere Advice Center · consumer briefing, sheet 4",
    "Sixty-six per cent of whom?",
    "<p>A large consumer survey was published this year and three of its figures are already being "
    "quoted at us across this desk. Two of them are usable. The third is the one everybody "
    "quotes.</p>"
    "<p><b>The usable ones.</b> <b>Seventy per cent</b> of consumers agree that retailers and "
    "service providers respect consumer rights. Problems with online purchases are reported as "
    "<b>over sixty per cent more likely</b> than with buying in person, and <b>45 per cent</b> of "
    "consumers say they have encountered an online scam.</p>"
    "<p><b>The one we cannot use.</b> The published summaries say that unfair practices were "
    "common, with <b>fake reviews at 66 per cent</b> and misleading discounting at 61 per cent. "
    "Sixty-six per cent of what? Of all consumers surveyed? Of consumers who shop online? Of "
    "consumers who reported encountering any unfair practice at all? The summaries we can reach "
    "do not say.</p>"
    "<p><b>Why this is not pedantry.</b> If the base is all consumers, the problem is universal. "
    "If the base is people who already reported something unfair, the figure is a ranking and "
    "says nothing about how many people that is.</p>"
    "<p><b>What we do.</b> We quote the first two and not the third. When somebody quotes it at "
    "us, we ask what it is a percentage of, and so far nobody has known.</p>",
    "Figures: European Commission, <i>Consumer Conditions Scoreboard 2025</i>."))
S["y08-f6"]=lambda: f_realia(tbl("Word study","-ed and -ing adjectives",
    ["Verb","-ed — how a person feels","-ing — what a thing is like"],
    [["frustrate","frustrated","frustrating"],["confuse","confused","confusing"],
     ["disappoint","disappointed","disappointing"],["interest","interested","interesting"],
     ["worry","worried","worrying"]]), 500)
S["y08-f7"]=lambda: f_chart([("agree retailers respect rights",70),
    ("fake reviews — base not stated",66),("misleading discounting — base not stated",61),
    ("have met an online scam",45)], unit="per cent · two of these have a stated base", w=580)
S["y08-f8"]=lambda: f_icons([("fridge","a machine with its door open"),("phone","on hold"),
    ("essay","small type"),("engine","an engineer"),
    ("transfer","a refund"),("envelope","posting a letter")], cols=3)
S["y08-f9"]=lambda: f_realia(doc("Freshline Home · Returns and faults", None,
    "<p style='font-size:20px'><b>Returns within 30 days</b></p>"
    "<ul style='font-size:13px'>"
    "<li>Unused and in original packaging</li>"
    "<li>Proof of purchase required</li>"
    "<li>Large items: collection charge may apply</li></ul>"
    "<p style='margin-top:10px'><b>Faulty goods.</b> If an item develops a fault within the "
    "returns period, contact us and we will arrange a repair, replacement or refund at our "
    "discretion.</p>"
    "<p style='font-size:10.5px;color:#6b6861;margin-top:14px'>Section 9. Nothing in these terms "
    "affects your statutory rights.</p>"))
S["y08-f10"]=lambda: f_scene(820,400, people=[("linh",280,172,{"seated":True})],
    props=[("table",220,250,1.4),("computer",270,180,0.52),("essay",400,196,0.52),
    ("phone",470,200,0.52),("notebook",540,200,0.52)], window_=(640,60,130,100))
S["y08-f11"]=lambda: f_realia(tbl("Two documents","The policy and the law",
    ["The retailer's policy","Statutory rights, in plain language"],
    [["Returns: 30 days<br>Unused, original packaging<br>Faulty: repair, replacement or refund "
      "<b>at our discretion</b><br>Collection charge may apply<br>Period: ______",
      "Goods must be of satisfactory quality when sold<br>Remedy: repair or replacement first<br>"
      "Burden of proof shifts after six months<br>No charge for a fault present at sale<br>"
      "Period: years, not weeks"]]), 540)
S["y08-f12"]=lambda: f_realia(doc("L. Pham · order FR-4471-09","Faulty washing machine",
    "<p>Dear Freshline,</p>"
    "<p>Order FR-4471-09, delivered 8 January. The machine failed on 29 March, eleven weeks after "
    "delivery.</p>"
    "<p>I rang on 29 March and was told your returns policy is thirty days. I am not relying on "
    "your returns policy. Section 9 of your own terms states that nothing in them affects my "
    "statutory rights, and I am relying on those: the machine was not of satisfactory quality "
    "when it was sold to me.</p>"
    "<p>I am asking for a repair, or a replacement if a repair is not possible. Please confirm by "
    "<b>12 April</b> which you will arrange and when.</p>"
    "<p>If I do not hear by then I will refer the matter to the ombudsman.</p>",
    "L. Pham · 2 April · call reference TW-20119"))
S["y08-f13"]=lambda: f_realia(tbl("","Complaint planner",["",""],
    [["<b>What I bought and when</b>",""],["<b>What went wrong and when</b>",""],
     ["<b>The sentence in their own terms</b>",""],["<b>The remedy I want</b>",""],
     ["<b>What I will do if refused</b>",""]]), 470)
S["y08-f14"]=lambda: f_scene(920,430, behind=[("grace",700,174,{}),("hana",780,166,{})],
    people=[("linh",140,172,{}),("adeel",210,180,{}),("oksana",280,172,{}),
    ("mei",350,166,{}),("tomas",420,180,{}),("lucia",490,172,{"seated":True}),
    ("samira",560,172,{"seated":True})],
    counter_=(650,230,250,110),
    props=[("crate",80,0,0.9),("jobnotice",60,40,0.6),("chair",460,0,0.8),
    ("padlock",860,55,0.6)])
S["y08-f15"]=lambda: f_chart([("got what I asked for",9),("got something less",8),
    ("got nothing",5),("gave up",4),("never complained",3)])
S["y08-f16"]=lambda: f_scene(840,410, behind=[("bah",280,176,{"smile":False})],
    people=[("oksana",600,172,{})],
    counter_=(150,230,300,110),
    on_counter=[("crate",210,0.5),("receipt",330,0.4)],
    props=[("shutter",720,70,1.0),("jobnotice",60,45,0.6)],
    panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 9 ----------------
S["y09-f1"]=lambda: f_icons([("clock","three in the morning"),("timetable","a rota"),
    ("cafe","coffee"),("phone","a phone by the bed"),("walkroute","a walk"),
    ("queue","a waiting room"),("medicine","a prescription"),("meeting","counselling"),
    ("notebook","a journal"),("padlock","a locked bicycle")], cols=5)
S["y09-f2"]=lambda: f_scene(820,400, people=[("yusuf",280,186,{"smile":False,"seated":True})],
    props=[("bed",180,0,1.6),("phone",400,196,0.52),("lamp",470,170,0.62),
    ("window",620,60,1.0)], clockat=(100,55,24,3,14),
    panelbg="#1f2733", floorbg="#2b333d")
S["y09-f3"]=lambda: f_icons([("phone","phone out of the room"),("bed","a dark room"),
    ("cafe","late caffeine"),("walkroute","an evening walk"),
    ("timetable","rotating shifts"),("window","a cool room")], cols=3)
S["y09-f4"]=lambda: f_realia(tbl("","Whose advice, and to whom?",
    ["Recommendation","I can do this alone","Somebody else has to act"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="Who the advice is addressed to:"), 540)
S["y09-f5"]=lambda: f_realia(doc("Portmere Occupational Health Partnership · briefing note 2",
    "Twelve billion days",
    "<p>This is the figure that appears on every poster in every staff room, and most of the "
    "people quoting it could not tell you what it counts.</p>"
    "<p><b>The figure.</b> An estimated <b>12 billion working days</b> are lost every year to "
    "depression and anxiety, at a cost put at about <b>one trillion US dollars</b> a year in lost "
    "productivity. Separately, <b>15 per cent of working-age adults</b> were estimated to have a "
    "mental disorder in 2019.</p>"
    "<p><b>What it is built from.</b> It is a modeled estimate: prevalence data, employment data "
    "and assumptions about days lost per case, combined. Nobody counted twelve billion days.</p>"
    "<p><b>The date.</b> The underlying work was published in <b>2022</b> and the prevalence "
    "figure refers to <b>2019</b>. It is the current official figure and it is not a figure for "
    "this year.</p>"
    "<p><b>What it does not tell you.</b> It does not tell you how many of those days were caused "
    "by work. A poster that puts this number under the heading <i>workplace stress</i> has made a "
    "claim the figure does not support.</p>"
    "<p><b>What we use it for.</b> One thing only: to establish scale.</p>",
    "Figures: WHO and ILO, <i>Mental health at work</i>."))
S["y09-f6"]=lambda: f_realia(tbl("Word study","Advice, by weight",
    ["Phrase","Weight","Appropriate from"],
    [["You must …","an instruction","somebody with authority"],
     ["You'd better …","advice with a consequence","a friend, or a warning"],
     ["You ought to …","advice with a moral edge","a peer"],
     ["You should …","ordinary advice","anybody"],
     ["Have you thought about …?","a suggestion","anybody, safely"]]), 500)
S["y09-f7"]=lambda: f_part("One hundred working-age adults, 2019",
    [("estimated to have a mental disorder",15.0,ACCENT),("not",85.0,"#b9b7b0")], w=560)
S["y09-f8"]=lambda: f_icons([("phone","charging in the hall"),("bed","a dark bedroom"),
    ("timetable","a rota on the fridge"),("walkroute","a walk at dusk"),
    ("clinic","a doctor's room"),("form","a half-filled form")], cols=3)
S["y09-f9"]=lambda: f_realia(form("Northgate Distribution · Occupational health referral",
    [("Employee",""),("Role and shift pattern",""),("Reason for referral",""),
     ("Workplace factors","&#9633; workload &nbsp; &#9633; shift pattern &nbsp; "
      "&#9633; relationships &nbsp; &#9633; environment"),
     ("Consent to share the report with the employer","&#9633; yes &nbsp; &#9633; no"),
     ("Signed","")],
    note="The employer receives the clinician's recommendations, not the clinical detail."), 470)
S["y09-f10"]=lambda: f_scene(820,400, people=[("yusuf",270,186,{"seated":True}),
    ("nkemelu",460,176,{"seated":True})],
    props=[("desk",410,195,1.35),("timetable",360,170,0.6),("computer",470,150,0.52),
    ("clinic",70,50,0.6)], window_=(640,60,130,100))
S["y09-f11"]=lambda: f_realia(tbl("Two documents","Eleven recommendations, one rota",
    ["Sleep hygiene leaflet","The rota"],
    [["1 Phone out of the room<br>2 Dark room<br>3 Cool room<br>4 No caffeine after 2 p.m.<br>"
      "5 Same bedtime daily<br>6 Daylight in the morning<br>…<br>11 ______",
      "Weeks 1–3 &nbsp; nights, 22:00–06:00<br>Weeks 4–6 &nbsp; earlies, 06:00–14:00<br>"
      "Weeks 7–9 &nbsp; lates, 14:00–22:00<br>Rotation: every three weeks<br>"
      "Recommendations impossible under this rota: ______"]]), 540)
S["y09-f12"]=lambda: f_realia(doc("Portmere Occupational Health","Report to employer",
    "<p><b>Employee:</b> Y. Osman &middot; <b>Date:</b> 2 December</p>"
    "<p><b>Findings.</b> Reports five hours' sleep on working nights and seven when not working. "
    "Onset coincides with the introduction of a three-week rotating pattern in April. Has "
    "implemented all available individual measures without effect.</p>"
    "<p style='border:2px solid #0b0b0b;padding:10px;margin:10px 0'><b>Recommendation:</b> a "
    "fixed shift pattern rather than a rotating one, reviewed in six months.</p>"
    "<p>Shift pattern is the principal modifiable factor and is not within the employee's "
    "control. No clinical detail is disclosed in this report.</p>",
    "Consent to share this report with the employer: given, named. Y. Osman, 2 December."))
S["y09-f13"]=lambda: f_realia(tbl("","What I tried",
    ["Recommendation","Tried?","For how long","What changed"],
    [["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]],
    note="The one that isn't mine to change:"), 520)
S["y09-f14"]=lambda: f_scene(920,430, people=[("yusuf",150,186,{"seated":True}),
    ("samira",220,172,{"seated":True}),("hana",290,166,{"seated":True}),
    ("linh",360,172,{"seated":True}),("nadia",470,174,{}),("oksana",540,172,{}),
    ("mei",610,166,{}),("adeel",680,180,{}),("bah",860,176,{"seated":True})],
    props=[("chair",130,0,0.8),("chair",270,0,0.8),("chair",840,0,0.8),
    ("board",60,40,0.6),("cafe",760,0,0.9),("window",740,60,1.0)],
    clockat=(420,45,24,7,5))
S["y09-f15"]=lambda: f_chart([("five to six",9),("six to seven",8),("under five",6),
    ("seven to eight",5),("over eight",1)], unit="students, hours on a work night")
S["y09-f16"]=lambda: f_scene(840,410, people=[("oksana",300,172,{"smile":False,"seated":True})],
    props=[("car",220,0,1.9),("warehouse",640,60,0.6),("busstop",760,0,1.35)],
    panelbg="#242c38", floorbg="#30394a", floor=0.84)
