# -*- coding: utf-8 -*-
"""Book 6 figure specs, Units 4 to 6."""
from figgen import *
S={}

# ---------------- Unit 4 ----------------
S["z04-f1"]=lambda: f_icons([("walkroute","a fork in the road"),("envelope","an unopened letter"),
    ("living","two houses, one in outline"),("ticket","a ticket crossed out"),
    ("camera","a figure missing"),("map","a route erased"),("calendar","a year circled"),
    ("chair","an empty chair"),("key","a key that doesn't fit"),("door","a door with no handle")],
    cols=5)
S["z04-f2"]=lambda: f_scene(840,400, people=[("ahmad",280,180,{"seated":True}),
    ("linh",430,170,{"seated":True})],
    props=[("table",230,250,1.5),("cafe",300,196,0.42),("cafe",360,196,0.42),
    ("computer",470,196,0.45),("fridge",660,0,1.35),("lamp",120,110,0.55)],
    window_=(540,56,120,96), panelbg="#242c38", floorbg="#30394a")
S["z04-f3"]=lambda: f_icons([("today","imagining it calmly"),("tired","unable to sleep"),
    ("balance","comparing two lives"),("happy","telling it with pride"),
    ("angry","telling it with bitterness"),("noentry","refusing to discuss it")], cols=3)
S["z04-f4"]=lambda: f_realia(tbl("","Two versions of one alternative",
    ["The version I imagine","What would also have happened"],
    [["",""],["",""],["",""],["",""],["",""],["",""]],
    note="<b>Who is not in it:</b>"), 500)
S["z04-f5"]=lambda: f_realia(doc("Portmere Civic Forum · reading group note",
    "What people say about trust, and what that does and does not tell us",
    "<p><b>The headline.</b> Across the countries surveyed, roughly <b>four in ten people say "
    "they trust their national government</b>, and a similar share say they do not.</p>"
    "<p><b>The part that does the work.</b> Trust is consistently <b>higher in local government "
    "than in national government</b>, in almost every country surveyed. People who have recently "
    "had a successful dealing with a public service report higher trust than those who have "
    "not.</p>"
    "<p><b>What it does not establish.</b> Whether good service produces trust, or trusting "
    "people experience the same service as better, or some third thing produces both. The survey "
    "asks both questions of the same person at the same moment.</p>"
    "<p><b>Method.</b> A single cross-sectional interview per respondent; no respondent is "
    "followed through a transaction.</p>",
    "Figures: OECD, <i>Survey on Drivers of Trust in Public Institutions</i>."))
S["z04-f6"]=lambda: f_realia(tbl("Word study","How much cause is being claimed?",
    ["Phrase","Claims a cause?","Use it when"],
    [["is associated with","no","two things move together"],
     ["goes together with","no","the same, less formally"],
     ["predicts","no","one forecasts the other statistically"],
     ["contributes to","partly","it is one of several causes"],
     ["drives","mostly","it is the main cause"],
     ["causes","yes","the mechanism is established"]]), 520)
S["z04-f7"]=lambda: f_chart([("Switzerland · local",71),("Switzerland · national",57),
    ("Netherlands · local",62),("Netherlands · national",41),
    ("Portugal · local",48),("Portugal · national",33),
    ("Colombia · local",29),("Colombia · national",34)],
    unit="percent reporting trust · Colombia is the exception", w=560)
S["z04-f8"]=lambda: f_icons([("bus","a train leaving"),("signature","a contract signed"),
    ("clinic","a hospital corridor"),("window","a plane window"),
    ("shutter","a shop closed"),("handshake","parting at a gate")], cols=3)
S["z04-f9"]=lambda: f_realia(doc("Kestrel Analytics · 14 Harbour Row, Northgate",
    "Offer of employment",
    "<p>4 March 2015</p>"
    "<p>Dear Mr Siddiq,</p>"
    "<p>Following your interview on 26 February, I am pleased to offer you the post of "
    "<b>Senior Analyst</b>, reporting to the Head of Data.</p>"
    "<p><b>Salary:</b> 41,500 per annum.<br><b>Start date:</b> 1 June 2015.<br>"
    "<b>Relocation allowance:</b> up to 4,000, on production of receipts.</p>"
    "<p>Please confirm your acceptance in writing by 20 March.</p>",
    "<i>In the margin, in pen:</i> &nbsp; <b>said no, 14th</b>"))
S["z04-f10"]=lambda: f_scene(840,400, people=[("ahmad",280,180,{"seated":True,"smile":False}),
    ("linh",430,170,{"seated":True})],
    props=[("table",230,250,1.5),("computer",330,186,0.5),("statement",400,200,0.45),
    ("fridge",660,0,1.35),("lamp",120,110,0.55),("lamp",580,110,0.5)],
    window_=(520,56,110,90), panelbg="#242c38", floorbg="#30394a")
S["z04-f11"]=lambda: f_realia(tbl("Two timelines","One life",
    ["As it happened","The alternative"],
    [["2015 turned the job down<br>2016 moved three streets<br>2017 <b>Leila born</b><br>"
      "2019 changed employer<br>2021 father ill<br>2023 promotion<br>2025 ______<br>2026 ______",
      "2015 took the job<br>2015 moved city<br>2016 <b>first winter alone</b><br>"
      "2018 new manager<br>2020 department restructured<br>2023 <b>house with stairs</b><br>"
      "2025 ______<br>2026 ______"]]), 540)
S["z04-f12"]=lambda: f_realia(doc("Two paragraphs, one decision", None,
    "<p><b>A.</b> I turned down a job in another city in 2015. I would have been running a "
    "department by now. I would have had a house with stairs in it and a walk to work along the "
    "river. I think about it about once a month.</p>"
    "<p style='font-size:12px;color:#6b6861'>Only what was lost. No bad weather on the other "
    "road. Nobody in it but the writer.</p>"
    "<p style='margin-top:14px'><b>B.</b> I turned it down, and what I gave up was a department "
    "and a river. What I got was eleven years here and a daughter who would not exist in the "
    "other version &mdash; not somewhere else: somebody else. I would also have had a manager I "
    "would have hated and two years of being new at thirty-eight.</p>"
    "<p style='font-size:12px;color:#6b6861'>Names a trade-off and one person on each side.</p>"))
S["z04-f13"]=lambda: f_realia(tbl("","Two roads",
    ["1","2","3","4"],
    [["<b>The life I have</b>","","",""],["","","",""],
     ["<b>The life I imagine</b>","","",""],["","","",""],
     ["<i>what would also have happened</i>","","",""]]), 540)
S["z04-f14"]=lambda: f_scene(960,430, people=[("nadia",200,174,{}),("tomas",270,180,{}),
    ("mei",340,166,{}),("priya",410,172,{}),("adeel",490,180,{}),("oksana",560,172,{}),
    ("linh",640,172,{}),("samira",710,172,{}),("hana",780,166,{}),("lucia",850,172,{}),
    ("bah",120,176,{}),("ahmad",920,180,{})],
    props=[("departureboard",40,30,1.3),("suitcase",300,0,0.62),("suitcase",350,0,0.58),
    ("bench",600,0,1.3),("cafe",760,120,0.5),("phone",900,140,0.45)],
    panelbg="#3a3730", floorbg="#4a463c")
S["z04-f15"]=lambda: f_chart([("a few times a year",10),("monthly",8),
    ("almost never",5),("almost daily",3),("I'd rather not say",2)])
S["z04-f16"]=lambda: f_scene(860,410, people=[("grace",250,172,{"seated":True}),
    ("tomas",560,180,{"seated":True,"smile":False})],
    props=[("sofa",480,0,1.5),("table",330,250,1.2),("cafe",360,206,0.42),
    ("cafe",410,206,0.42),("camera",260,150,0.5),("curtains",700,46,1.0)],
    window_=(120,56,120,96))

# ---------------- Unit 5 ----------------
S["z05-f1"]=lambda: f_icons([("scaffolding","scaffolding"),("lift","a taped notice"),
    ("roadworks","a pavement dug open"),("roof","a roof retiled"),
    ("tripod","a window measured"),("boiler","an inspection tag"),
    ("pipe","a pipe replaced"),("wall","a wall rendered"),
    ("magnifier","a survey carried out"),("certificate","a completion certificate")], cols=5)
S["z05-f2"]=lambda: f_scene(880,420, people=[("grace",250,172,{}),("oksana",370,172,{}),
    ("linh",470,172,{}),("adeel",600,180,{})],
    props=[("lift",80,100,1.3),("jobnotice",150,80,0.55),("bag",330,0,0.6),
    ("baby",520,140,0.5),("phone",640,140,0.45),("stairwell",760,120,1.0)],
    window_=(700,46,130,100))
S["z05-f3"]=lambda: f_icons([("lift","a lift notice"),("roadworks","a road sign"),
    ("shutter","a shop sign"),("statement","a letter"),
    ("computer","a screen message"),("form","a form")], cols=3)
S["z05-f4"]=lambda: f_realia(tbl("","Find the agent",
    ["The notice as written","The same in the active voice","Who would have to agree to it"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]]), 560)
S["z05-f5"]=lambda: f_realia(doc("Portmere Civic Forum · note for the housing group",
    "One in four, and what gets done about it",
    "<p><b>The figure.</b> According to United Nations statistics for 2024, about "
    "<b>1.16 billion urban residents &mdash; almost one in four of the world's urban population "
    "&mdash; live in slums or informal settlements</b>. UN-Habitat rounds this to 1.1 billion; "
    "the rounding is a house style, not a disagreement.</p>"
    "<p><b>Why two positions are both arguable.</b> The <i>share</i> has fallen in most regions "
    "over two decades. The <i>number</i> has risen, because cities have grown faster than "
    "conditions have improved.</p>"
    "<p><b>How the work gets done.</b> Mostly by incremental upgrading: water and sanitation "
    "connected, paths surfaced and drained, electricity brought in, and &mdash; least visible and "
    "most important &mdash; some form of tenure recognized.</p>"
    "<p><b>Who does it.</b> A ministry, a municipality, contractors, a development bank, and a "
    "residents' association with no formal standing that does most of the organizing.</p>",
    "Figures: UN DESA, SDG Goal 11 indicator reporting, 2024 data; UN-Habitat."))
S["z05-f6"]=lambda: f_realia(tbl("Word study","Getting work done",
    ["Verb","Noun","Usual subject","Doer named?"],
    [["commission","commission","an owner or authority","usually"],
     ["contract out","contracting out","an authority","rarely"],
     ["carry out","—","a contractor","sometimes"],
     ["sign off","sign-off","a named officer","always"],
     ["defer","deferral","a committee","almost never"],
     ["decommission","decommissioning","an owner","rarely"]]), 520)
S["z05-f7"]=lambda: f_chart([("sub-Saharan Africa",51),("central and southern Asia",29),
    ("eastern and south-eastern Asia",24),("Latin America and the Caribbean",20),
    ("northern Africa and western Asia",17)],
    unit="percent of the urban population in slums or informal settlements", w=560)
S["z05-f8"]=lambda: f_icons([("roadworks","dug, no sign"),("padlock","a locked meter cupboard"),
    ("stairwell","half painted"),("scaffolding","no company name"),
    ("walkroute","a new path"),("crate","a skip with a permit")], cols=3)
S["z05-f9"]=lambda: f_realia(form("Portmere Housing · works order",
    [("Reference","WO-24-11407"),("Date raised","9 November"),
     ("Property","Cranbourne House, lift, floors G–10"),
     ("Works","Attend, diagnose and repair passenger lift.<br>Parts to be ordered as required."),
     ("Contractor","Harwell Lifts Ltd"),("Priority","Routine"),
     ("Target date","29 November"),("Signed off","")],
    note="Delays of more than five working days must be reported to the area team."), 480)
S["z05-f10"]=lambda: f_scene(880,420, people=[("grace",260,172,{}),("adeel",420,180,{}),
    ("linh",580,172,{})],
    props=[("lift",80,100,1.3),("jobnotice",150,80,0.55),("petition",190,120,0.55),
    ("clipboard",470,130,0.5),("baby",640,150,0.45),("pen",330,150,0.45)],
    window_=(720,46,120,96))
S["z05-f11"]=lambda: f_realia(tbl("Two works orders","Same building",
    ["WO-24-11407 · lift","WO-24-11388 · stairwell light"],
    [["Raised <b>9 November</b><br>Harwell Lifts Ltd<br>Priority <b>routine</b><br>"
      "Target <b>29 November</b><br>Signed off: ______",
      "Raised <b>2 August</b><br>Portmere Direct Labor<br>Priority <b>low</b><br>"
      "Target <b>31 October</b><br>Signed off: <b>—</b>"]]), 540)
S["z05-f12"]=lambda: f_realia(doc("Two notices", None,
    "<p><b>A.</b> The lift has been taken out of service. A contractor has been appointed. Parts "
    "are being awaited. Residents are asked to be patient.</p>"
    "<p style='font-size:12px;color:#6b6861'>Four sentences. No name, no date, no number.</p>"
    "<p style='margin-top:14px'><b>B.</b> The lift is out of service. Harwell Lifts inspected it "
    "on 8 November; parts are being shipped from Italy and are due on the 29th. Queries: "
    "D. Oyelaran, extension 4412.</p>"
    "<p style='font-size:12px;color:#6b6861'>Same facts. One company, two dates, one extension. "
    "Two of its three sentences are still passive, and that is fine.</p>"))
S["z05-f13"]=lambda: f_realia(tbl("","Letter frame",
    ["",""],
    [["<b>What has happened, and when</b>",""],["<b>What the document does not say</b>",""],
     ["<b>What I was told in person</b>",""],["<b>The two things I am asking for</b>",""],
     ["<i>who would have to agree</i>",""]]), 500)
S["z05-f14"]=lambda: f_scene(960,440, people=[("bah",180,176,{}),("nkemelu",250,176,{}),
    ("oyelaran",320,176,{}),("linh",470,172,{}),("samira",540,172,{}),
    ("mei",620,166,{}),("lucia",690,172,{}),("hana",760,166,{}),("ahmad",830,180,{}),
    ("priya",900,172,{}),("adeel",120,180,{})],
    props=[("car",380,0,1.5),("scaffolding",40,60,1.1),("crate",860,239,1.2),
    ("jobnotice",600,50,0.6),("barrier",440,258,1.0),("vacuum",120,140,0.5)],
    floor=0.80)
S["z05-f15"]=lambda: f_chart([("I know neither",10),("I know the company",7),
    ("nothing has been repaired",5),("I don't know if it was",3),("I know the person",2)])
S["z05-f16"]=lambda: f_scene(880,420, people=[("oyelaran",280,174,{}),
    ("tomas",560,180,{"seated":True})],
    props=[("desk",480,0,1.4),("computer",540,150,0.5),("timetable",640,196,0.5),
    ("helmet",120,140,0.5),("helmet",180,140,0.5),("shelf",100,70,0.8),("map",360,50,0.7)],
    window_=(720,50,130,100))

# ---------------- Unit 6 ----------------
S["z06-f1"]=lambda: f_icons([("park","a strip of grass"),("square","a square with benches"),
    ("stairwell","a stepped path"),("canal","a towpath"),
    ("tree","a railway cutting"),("car","a car park with weeds"),
    ("goalposts","a playing field"),("busstop","a verge"),
    ("planter","a courtyard garden"),("railings","a rooftop with planters")], cols=5)
S["z06-f2"]=lambda: f_scene(960,420, people=[("samira",330,172,{}),("bah",700,176,{}),
    ("linh",795,166,{}),("mei",890,160,{})],
    props=[("railings",40,120,1.0),("tree",130,0,1.5),("tree",215,0,1.35),
    ("tripod",420,140,0.6),("footprints",530,286,0.8),("bench",600,0,1.1)],
    floor=0.80, panelbg="#dfe8ec", floorbg="#cbd8c7")
S["z06-f3"]=lambda: f_icons([("signpost","named, with railings"),("footprints","a worn path"),
    ("map","amenity on the plan"),("form","residual on the next"),
    ("bench","a bench installed"),("shutter","hoarded off")], cols=3)
S["z06-f4"]=lambda: f_realia(tbl("","Describe it so it can be found",
    ["","Three sentences"],
    [["<b>1</b>",""],["<i>the relative clause I used</i>",""],
     ["<b>2</b>",""],["<i>the relative clause I used</i>",""],
     ["<b>3</b>",""],["<i>the relative clause I used</i>",""]],
    note="<b>Which would be hardest to defend:</b>"), 520)
S["z06-f5"]=lambda: f_realia(doc("Portmere Civic Forum · note for the Ferry Lane group",
    "Thirty percent, since 1990",
    "<p><b>The figure.</b> UN-Habitat's <i>World Cities Report 2024</i> states that urban green "
    "space has declined by <b>nearly 30 percent since 1990</b>. That is a global aggregate, "
    "across cities of all sizes, over thirty-four years.</p>"
    "<p><b>What it does not say.</b> It does not say that thirty percent of parks have been "
    "built on. Green space here includes verges, sports grounds, cemeteries, allotments, river "
    "banks and the kind of unnamed strip most cities do not record at all.</p>"
    "<p><b>Why that matters.</b> A space with a name, railings and a register entry is hard to "
    "lose, because losing it requires a decision somebody has to defend. A strip that appears on "
    "one plan as amenity and on the next as residual can be lost without anybody deciding.</p>"
    "<p><b>Distribution.</b> Provision per person is uneven within cities, and access matters as "
    "much as area. Most measurement systems count the area and not the distance.</p>",
    "Figures: UN-Habitat, <i>World Cities Report 2024</i>. Baseline year 1990; method unchanged "
    "across the period as published."))
S["z06-f6"]=lambda: f_realia(tbl("Word study","Compound adjectives for places",
    ["Compound","Means","Fits"],
    [["tree-lined","with trees along both sides","an avenue"],
     ["south-facing","turned towards the sun","the north end of the strip"],
     ["well-used","used more than it looks","the worn path"],
     ["overlooked","visible from windows above","the strip behind the terrace"],
     ["poorly-lit","without adequate lighting","the cut-through"],
     ["fenced-off","enclosed and inaccessible","the old depot"],
     ["step-free","reachable without steps","the new ramp"],
     ["purpose-built","built for this use","the square"]]), 520)
S["z06-f7"]=lambda: f_chart([("Ferry Lane",1.8),("Dock End",3.4),("Marsh Road",5.1),
    ("Cranbourne",7.9),("city average",12.0),("Northgate",18.5),("Linwood",26.0),
    ("Haversham",41.0)],
    unit="square meters of green space per person", w=540)
S["z06-f8"]=lambda: f_icons([("canal","a towpath under a bridge"),("square","a dry fountain"),
    ("stairwell","a stepped lane"),("busstop","a wide verge"),
    ("planter","a walled garden"),("railings","a flat roof with chairs")], cols=3)
S["z06-f9"]=lambda: f_realia(doc("Portmere City Council · planning application notice",
    "Application 24/0718",
    "<p><b>Site:</b> Land to the rear of 14&ndash;46 Ferry Lane, Portmere.</p>"
    "<p><b>Proposal:</b> Erection of six dwellings with associated access and parking.</p>"
    "<p><b>Comments must be received by:</b> 3 December.</p>"
    "<p>Plans may be viewed at portmere.example/planning, quoting the reference above.</p>",
    "Comments must relate to planning matters. Comments on the identity or circumstances of the "
    "applicant cannot be taken into account."))
S["z06-f10"]=lambda: f_scene(880,420, behind=[("oyelaran",640,176,{})],
    people=[("samira",330,172,{}),("tomas",160,180,{})],
    counter_=(520,228,300,112),
    on_counter=[("computer",580,0.45),("map",700,0.45)],
    props=[("folder",300,150,0.5),("shelf",60,60,0.8),("barrier",230,217,1.0)],
    clockat=(100,46,22,10,30))
S["z06-f11"]=lambda: f_realia(tbl("Two site plans","Same strip",
    ["1996 local plan","2011 local plan"],
    [["Shaded <b>green</b>, labeled <b>amenity</b><br>Ferry Lane terrace: 14&ndash;46<br>"
      "<b>Footpath marked</b> across the strip<br>Depot to the north: <b>in use</b><br>"
      "Bus route along Marsh Road",
      "Shaded <b>gray</b>, labeled <b>residual</b><br>Ferry Lane terrace: 14&ndash;46<br>"
      "<b>No footpath marked</b><br>Depot to the north: <b>vacant</b><br>"
      "Bus route <b>removed</b>"]]), 560)
S["z06-f12"]=lambda: f_realia(doc("Two descriptions, one strip", None,
    "<p><b>A.</b> It is a lovely bit of green behind our houses and everybody uses it. The "
    "children play there and the trees are beautiful in spring. It would be a terrible shame to "
    "lose it.</p>"
    "<p style='font-size:12px;color:#6b6861'>No measurement. Nothing a stranger could check.</p>"
    "<p style='margin-top:14px'><b>B.</b> The land is 104 meters long and between 9 and 14 wide. "
    "Two mature limes stand at the northern end; they appear on the 1962 Ordnance Survey sheet "
    "and are older than the terrace. A path crosses it diagonally, worn to bare earth along its "
    "whole length.</p>"
    "<p style='font-size:12px;color:#6b6861'>Three measurements, two dates, one named "
    "feature.</p>"))
S["z06-f13"]=lambda: f_realia(tbl("","Description planner",
    ["",""],
    [["<b>Sketch</b>","<i>draw it here</i>"],["Length",""],["Width",""],["Features",""],
     ["<b>Evidence of use</b>",""],["<b>What the document calls it</b>",""],
     ["<b>The one thing I am asking for</b>",""]]), 500)
S["z06-f14"]=lambda: f_scene(960,440, people=[("samira",200,172,{}),("bah",270,176,{}),
    ("linh",340,166,{}),("priya",410,172,{}),("mei",520,160,{}),("hana",580,160,{}),
    ("grace",680,172,{}),("tomas",750,180,{}),("oksana",820,172,{}),("lucia",890,172,{}),
    ("adeel",130,180,{})],
    props=[("tree",40,0,1.5),("tree",110,0,1.35),("table",240,250,1.2),
    ("clipboard",300,150,0.5),("bench",620,0,1.1),("tripod",470,130,0.55),
    ("camera",860,130,0.45)], floor=0.80, panelbg="#dfe8ec", floorbg="#cbd8c7")
S["z06-f15"]=lambda: f_chart([("a space with no name",10),("a named park",8),
    ("only a street",5),("a private garden",3),("nothing within ten minutes",2)])
S["z06-f16"]=lambda: f_scene(960,440, people=[("nkemelu",640,176,{}),("grace",720,172,{}),
    ("oyelaran",800,176,{}),("samira",120,172,{}),
    ("linh",250,172,{"seated":True}),("mei",320,166,{"seated":True}),
    ("adeel",390,180,{"seated":True}),("oksana",460,172,{"seated":True}),
    ("lucia",530,172,{"seated":True}),("ahmad",600,180,{"seated":True})],
    board=(820,20,120,110,"24/0718",[("site","plan")]),
    props=[("table",620,250,1.6),("jug",700,196,0.42),("chair",220,0,0.75),
    ("folder",150,140,0.5)], window_=(300,30,150,80))
