# -*- coding: utf-8 -*-
"""Book 6 figure specs, Starting Point to Unit 3."""
from figgen import *
S={}

S["z00-f1"]=lambda: f_scene(920,430, people=[("nkemelu",800,176,{}),
    ("nadia",120,174,{"seated":True}),("tomas",190,180,{"seated":True}),
    ("mei",260,166,{"seated":True}),("lucia",330,172,{"seated":True}),
    ("priya",400,172,{"seated":True}),("ahmad",470,180,{"seated":True}),
    ("adeel",160,180,{}),("linh",240,172,{}),("oksana",320,172,{}),("samira",400,172,{})],
    board=(560,18,215,140,"ONE CLAIM, EIGHT WAYS",
        [("1 It is.","5 It may be."),("2 It must be.","6 It could be."),
         ("3 It appears.","7 Possibly."),("4 It suggests.","8 Not ruled out.")]),
    props=[("table",90,250,2.4),("notebook",150,196,0.5)])
S["z00-f2"]=lambda: f_realia(tbl("Academic word families","Four columns, and two gaps",
    ["Verb","Noun","Adjective","Adverb"],
    [["substantiate","substantiation","substantive","substantively"],
     ["infer","inference","inferential","—"],
     ["qualify","qualification","qualified","—"],
     ["attribute","attribution","attributable","—"],
     ["hedge","hedging","hedged","—"]],
    note="Two rows have no adverb at all. That is normal, and it is worth noticing."), 520)

# ---------------- Unit 1 ----------------
S["z01-f1"]=lambda: f_icons([("today","a timeline"),("flashback","a flashback"),
    ("meeting","two figures"),("envelope","a letter opened"),("suitcase","a suitcase"),
    ("calendar","a date circled"),("door","a door"),("window","a window at night"),
    ("bus","a bus arriving"),("notebook","writing it down")], cols=5)
S["z01-f2"]=lambda: f_scene(960,430, people=[("nadia",830,176,{}),
    ("linh",110,172,{"seated":True}),("mei",205,166,{"seated":True}),
    ("adeel",300,180,{"seated":True}),("oksana",395,172,{"seated":True}),
    ("samira",490,172,{"seated":True}),("lucia",585,172,{"seated":True}),
    ("tomas",680,180,{"seated":True})],
    props=[("chair",40,0,0.75),("chair",750,0,0.75)],
    window_=(690,40,120,96))
S["z01-f3"]=lambda: f_icons([("meeting","one listener"),("microphone","a room"),
    ("scissors","a detail cut"),("happy","a laugh"),("worried","no laugh"),
    ("walk","afterwards")], cols=3)
S["z01-f4"]=lambda: f_realia(tbl("","Two tellings",
    ["The version I tell","What actually happened"],
    [["",""],["",""],["",""],["",""],["",""],["",""]],
    note="<b>What the first version leaves out:</b>"), 500)
S["z01-f5"]=lambda: f_realia(doc("Portmere Civic Forum · briefing for community organizations",
    "Sixty-three countries have already turned",
    "<p>We are asked about population more often than about anything except housing, usually in "
    "the form of a sentence beginning <i>everyone says</i>. The underlying figures are published "
    "and they do not say what that sentence usually says.</p>"
    "<p><b>The headline that is not a headline.</b> World population stood at about "
    "<b>8.2 billion in 2024</b>, is projected to peak at around <b>10.3 billion in the "
    "mid-2080s</b>, and then to decline slowly to about <b>10.2 billion</b> by 2100.</p>"
    "<p><b>The figure nobody quotes.</b> Population has <b>already peaked in 63 countries and "
    "areas</b>, including China, Germany, Japan and Russia. In 126 others it is projected to go "
    "on rising through 2054.</p>"
    "<p><b>What changed in ten years.</b> The projection for 2100 is about <b>700 million "
    "lower</b> &mdash; six percent &mdash; than the one made a decade earlier.</p>"
    "<p><b>Assumptions.</b> Fertility, mortality and migration, each stated separately in the "
    "source and each revised when the data moves.</p>",
    "Figures: UN DESA, <i>World Population Prospects 2024</i>."))
S["z01-f6"]=lambda: f_realia(tbl("Word study","Verbs of change",
    ["Verb","Direction","Speed","Takes"],
    [["surge","up","fast","— / by"],["climb","up","steady","to / by"],
     ["plateau","neither","—","at"],["taper","down","slow","off / to"],
     ["slump","down","fast","to / by"],["edge down","down","slow","to / by"]]), 500)
S["z01-f7"]=lambda: f_line([("2024",8.2),("2040",9.2),("2060",10.0),("2085",10.3),("2100",10.2)],
    w=600, unit="world population, billions · the older projection ended about 0.7 higher",
    mark=3, ymin=7.5)
S["z01-f8"]=lambda: f_icons([("stairwell","a stairwell"),("bus","a bus at night"),
    ("door","an office doorway"),("envelope","a letter opened"),
    ("phone","a hand on a phone"),("walk","walking away")], cols=3)
S["z01-f9"]=lambda: f_realia(doc("Portmere College · speaker's brief",
    "Welcome session, Tuesday, 4.30 p.m.",
    "<p><b>Audience.</b> Eighteen students who arrived last month. Most are under 25. Four have "
    "asked to bring a friend.</p>"
    "<p><b>Length.</b> Twelve minutes, then eight minutes of questions.</p>"
    "<p><b>We would like you to cover:</b> what the first month was like; one practical thing "
    "you wish you had known; who to ask for help.</p>"
    "<p><b>Please avoid</b> anything that might leave the room feeling worse than when they came "
    "in. We have had feedback about this before.</p>",
    "Questions will be taken from the floor. There is no microphone; the room is small."))
S["z01-f10"]=lambda: f_scene(860,410, people=[("nadia",300,174,{}),("grace",400,174,{})],
    props=[("door",640,90,1.5),("chair",760,0,0.75),("clipboard",430,130,0.5),
    ("jobnotice",120,60,0.6)])
S["z01-f11"]=lambda: f_realia(tbl("Two accounts","Same week",
    ["The short version","The long version"],
    [["Arrived on the Sunday.<br>Started on the Monday.<br>The meeting on the fourth day.<br>"
      "Got the bus home.<br>It was fine by the second week.<br>______",
      "Arrived on the Sunday.<br>Started on the Monday.<br>Understood a third of the meeting.<br>"
      "<b>Sat in the stairwell for an hour.</b><br>A man came down and sat two steps below.<br>"
      "Got the bus home.<br>It was not fine by the second week.<br>______"]]), 540)
S["z01-f12"]=lambda: f_realia(doc("Two openings", None,
    "<p><b>A.</b> The first week was chaos, obviously. Nobody really knew what was going on and "
    "everybody was in the same boat, which helped in a way although it didn't feel like it at "
    "the time.</p>"
    "<p style='font-size:12px;color:#6b6861'>Three lines. No number. Could have been written by "
    "somebody who wasn't there.</p>"
    "<p style='margin-top:14px'><b>B.</b> I'd been sitting in the stairwell for about an hour "
    "when somebody came down.</p>"
    "<p style='font-size:12px;color:#6b6861'>One line. A duration and a place. Could not have "
    "been written by anybody else.</p>"))
S["z01-f13"]=lambda: f_realia(tbl("","Narrative planner",
    ["1","2","3","4","5","6"],
    [["","","","","",""],
     ["<i>shade the ones you usually cut</i>","","","","",""]],
    note="<b>The detail that stops the room:</b>"), 540)
S["z01-f14"]=lambda: f_scene(1040,440, people=[("nadia",500,174,{}),
    ("linh",415,172,{}),("mei",585,166,{}),("adeel",670,180,{}),
    ("tomas",120,180,{}),("oksana",205,172,{}),("samira",290,172,{}),
    ("priya",790,172,{}),("lucia",875,172,{}),("ahmad",960,180,{})],
    props=[("table",120,250,1.5),("jug",170,196,0.45),("chair",30,0,0.75)],
    window_=(700,40,130,92), panelbg="#2b3340", floorbg="#39404c")
S["z01-f15"]=lambda: f_chart([("I have a fixed version",11),
    ("I tell it differently each time",7),("I've only told one person",5),
    ("I don't tell it",3),("I'd rather not",2)])
S["z01-f16"]=lambda: f_scene(820,400, people=[("hana",280,172,{"seated":True,"smile":False})],
    props=[("table",220,250,1.5),("computer",290,176,0.52),("phone",420,196,0.5),
    ("chair",560,0,0.8),("lamp",120,120,0.6)],
    window_=(640,60,140,100), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 2 ----------------
S["z02-f1"]=lambda: f_icons([("walkroute","a fork in the path"),("dashboard","a forecast"),
    ("balance","the odds"),("signature","a contract signed"),("calendar","a long calendar"),
    ("data","a shaded range"),("deadline","a date crossed out"),("vote","a hand on a button"),
    ("queue","numbered steps"),("envelope","do not open until")], cols=5)
S["z02-f2"]=lambda: f_scene(880,410, people=[("priya",230,172,{"seated":True}),
    ("tomas",320,180,{"seated":True}),("adeel",410,180,{"seated":True}),
    ("oksana",700,172,{})],
    board=(560,18,215,120,"MARCH?",[("1 Review","3 Grant"),("2 Rooms","4 ?")]),
    props=[("table",180,250,2.2),("computer",260,196,0.5),("spreadsheet",350,196,0.5),
    ("jug",470,200,0.45)], clockat=(100,52,22,16,20))
S["z02-f3"]=lambda: f_realia(tbl("How sure?","Match the phrase to the position",
    ["","Phrase"],
    [["near certain &nbsp;&#9633;","It's bound to"],["&#9633;","almost certainly"],
     ["&#9633;","in all likelihood"],["&#9633;","probably"],["&#9633;","it could well"],
     ["&#9633;","there's an outside chance"],["&#9633;","it's conceivable"],
     ["barely possible &nbsp;&#9633;","I'd be astonished if"]]), 460)
S["z02-f4"]=lambda: f_realia(tbl("","Four predictions, four confidences",
    ["Prediction","My %","My reason","What would change my mind"],
    [["","","",""],["","","",""],["","","",""]],
    note="<b>The one we would act on:</b>"), 540)
S["z02-f5"]=lambda: f_realia(doc("Portmere Adult Learning Service · briefing note for tutors",
    "What adults can actually do, and where it is going",
    "<p>In December 2024 the OECD published the second cycle of its adult skills survey, which "
    "tested about <b>160,000 adults aged 16 to 65 across 31 countries and economies</b>.</p>"
    "<p><b>The headline figure.</b> Between <b>18% and 19% of adults scored at or below the "
    "lowest proficiency level</b> in literacy and numeracy. At that level an adult can read brief "
    "texts and find a single piece of information, but struggles to compare two sources.</p>"
    "<p><b>The direction.</b> Average literacy declined in a majority of the countries taking "
    "part in both cycles. Numeracy was more mixed. In Finland, Denmark, Norway and Switzerland "
    "results were stable or improved.</p>"
    "<p><b>The part that will shape our timetable.</b> The gap between the highest and lowest "
    "performers within countries widened in most places.</p>",
    "Figures: OECD, <i>Survey of Adult Skills</i> (PIAAC Cycle 2), published December 2024. "
    "Sample: about 160,000 adults."))
S["z02-f6"]=lambda: f_realia(tbl("Word study","Verb, noun, person, adjective",
    ["Verb","Noun","Person","Adjective"],
    [["forecast","forecast","forecaster","—"],["predict","","",""],["project","","",""],
     ["anticipate","","—",""],["speculate","speculation","speculator","speculative"],
     ["estimate","","",""]]), 480)
S["z02-f7"]=lambda: f_chart([("Finland",11),("Denmark",13),("Norway",14),("Switzerland",15),
    ("participating average",18),("Portugal",23),("Chile",29),("Lithuania",19)],
    unit="percent at or below the lowest literacy level", w=540)
S["z02-f8"]=lambda: f_icons([("envelope","a bid posted"),("statement","a letter arrives"),
    ("tripod","a room measured"),("meeting","a class of eight"),
    ("lecture","a class of thirty"),("noentry","a closed door")], cols=3)
S["z02-f9"]=lambda: f_realia(tbl("Portmere Adult Learning · planning grid",
    "Proposed actions, next twelve months",
    ["Action","By when","Who","Depends on","Confidence"],
    [["Extend beginner provision","Sept","PS","funding","85%"],
     ["Evening session pilot","Jan","TK","room","60%"],
     ["Second tutor post","Apr","AM","the above","40%"],
     ["Move to Fenner Street","2027","—","the grant",""]],
    note="One cell is blank. It was left blank on purpose."), 560)
S["z02-f10"]=lambda: f_scene(880,410, people=[("oksana",620,172,{}),
    ("priya",230,172,{"seated":True}),("tomas",320,180,{"seated":True})],
    board=(560,18,215,130,"CONFIDENCE",
        [("review 85","grant 40"),("rooms 60","intake ?")]),
    props=[("table",180,250,2.2),("jug",420,200,0.45)],
    clockat=(100,52,22,17,20), panelbg="#2b3340", floorbg="#39404c")
S["z02-f11"]=lambda: f_realia(tbl("Two grids","Same plan",
    ["Grid A","Grid B"],
    [["Extend provision &mdash; <b>Sept</b> &mdash; 85%<br>Evening pilot &mdash; <b>Jan</b> "
      "&mdash; 60%<br>Second tutor &mdash; <b>Apr</b> &mdash; 40%<br>Move &mdash; 2027 &mdash; —",
      "Extend provision &mdash; <b>Sept</b><br>Evening pilot &mdash; <b>March</b><br>"
      "Second tutor &mdash; <b>June</b><br>Move &mdash; <b>2026</b>"]]), 540)
S["z02-f12"]=lambda: f_realia(doc("Two planning paragraphs", None,
    "<p><b>A.</b> Demand will rise. The funding will come through. We will have the second post "
    "by April and we will be running the evening pilot in January. The move will happen in "
    "2027.</p>"
    "<p style='font-size:12px;color:#6b6861'>Five uses of <i>will</i>. No confidence given. "
    "Nothing named that it depends on.</p>"
    "<p style='margin-top:14px'><b>B.</b> Demand will almost certainly rise &mdash; ninety per "
    "cent, on a published measurement. The evening pilot could well run in January; that depends "
    "on the room, and I would put it at sixty. There is an outside chance of a second post by "
    "April.</p>"
    "<p style='font-size:12px;color:#6b6861'>Three graded forms. One dependency named.</p>"))
S["z02-f13"]=lambda: f_realia(tbl("","Planning-note frame",
    ["Claim","Confidence","What it rests on","What would change my mind"],
    [["","","",""],["","","",""],["","","",""]],
    note="<b>What I am not claiming:</b>"), 560)
S["z02-f14"]=lambda: f_scene(940,430, people=[("priya",150,172,{}),("tomas",220,180,{}),
    ("adeel",290,180,{}),("oksana",360,172,{}),("mei",430,166,{}),
    ("linh",560,172,{"seated":True}),("samira",630,172,{"seated":True}),
    ("lucia",700,172,{"seated":True}),("ahmad",820,180,{}),("hana",890,166,{}),
    ("nadia",760,174,{})],
    board=(40,24,200,130,"MARCH",[("review 85","grant 40"),("rooms 60","post 40")]),
    props=[("desk",520,0,1.3),("computer",580,150,0.5),("jug",840,196,0.45),
    ("window",280,46,1.0)], panelbg="#2b3340", floorbg="#39404c")
S["z02-f15"]=lambda: f_chart([("70 to 90",9),("over 90",7),("40 to 70",6),
    ("I won't give a number",4),("under 40",2)])
S["z02-f16"]=lambda: f_scene(840,400, people=[("yusuf",280,180,{"seated":True,"smile":False}),
    ("bah",700,176,{})],
    props=[("desk",220,0,1.4),("spreadsheet",290,170,0.5),("pen",400,196,0.45),
    ("calendar",120,50,0.7)], window_=(560,56,130,96))

# ---------------- Unit 3 ----------------
S["z03-f1"]=lambda: f_icons([("magnifier","a magnifying glass"),("proppeddoor","a propped door"),
    ("clock","6:40"),("footprints","footprints"),("key","a key on a hook"),
    ("logsheet","a torn log"),("meeting","two disagreeing"),("inventory","one line ticked"),
    ("camera","the missing photograph"),("pen","putting down the pen")], cols=5)
S["z03-f2"]=lambda: f_scene(900,410, people=[("priya",180,172,{"seated":True}),
    ("adeel",275,180,{"seated":True}),("oksana",370,172,{"seated":True}),
    ("tomas",465,180,{"seated":True})],
    counter_=(680,232,210,108),
    on_counter=[("jug",720,0.4),("cafe",810,0.42)],
    props=[("table",140,250,2.0),("logsheet",120,120,0.5),("phone",580,130,0.5)])
S["z03-f3"]=lambda: f_icons([("proppeddoor","door → somebody left"),("rain","wet prints → rain"),
    ("bins","full bin → missed collection"),("cupboard","unlocked → a theft"),
    ("clock","6:40 → the early shift"),("car","empty lot → a closure")], cols=3)
S["z03-f4"]=lambda: f_realia(tbl("","Observation and inference",
    ["What the scene shows","What people add"],
    [["",""],["",""],["",""],["",""],["",""],["",""]],
    note="<b>The one extra fact that would settle it:</b>"), 500)
S["z03-f5"]=lambda: f_realia(doc("Portmere Energy Forum · note for the reading group",
    "Two numbers for one report",
    "<p>A member asked why she had seen two different figures for the renewable share of world "
    "electricity in 2030 &mdash; <b>43%</b> in one place and <b>&ldquo;almost 45%&rdquo;</b> in "
    "another. Both come from summaries of the same report.</p>"
    "<p><b>What has been measured.</b> Renewables supplied about <b>32% of global electricity "
    "generation in 2024</b> and about <b>34% in 2025</b>, against roughly <b>23% a decade "
    "earlier</b>.</p>"
    "<p><b>Four things that could explain the gap.</b> Rounding; different scenarios in the same "
    "document; whether large hydropower is counted; or one summary written from a later revision. "
    "We do not know which.</p>"
    "<p><b>The trap underneath.</b> Capacity is what a solar farm produces at noon in June. "
    "Generation is what it produced over the year. The two words are used interchangeably almost "
    "everywhere and they are not the same thing.</p>",
    "Figures: IEA, <i>Renewables 2025</i> and <i>Global Energy Review 2026</i>. Both 2030 figures "
    "reproduced as published."))
S["z03-f6"]=lambda: f_realia(tbl("Word study","How strong is the claim?",
    ["Expression","Strength","Suits evidence that is …"],
    [["It is clear that","strongest","documented and uncontested"],
     ["The evidence indicates","strong","measured, from more than one source"],
     ["It appears that","moderate","consistent but incomplete"],
     ["This is consistent with","weak","compatible, not probative"],
     ["It cannot be ruled out that","weakest","absent"]]), 520)
S["z03-f7"]=lambda: f_line([("2015",23),("2020",28),("2024",32),("2025",34),("2030",44)],
    w=600, unit="renewable share of global electricity generation, percent · "
    "2030 given as 43 in one summary and almost 45 in another",
    dashed_from=3, ymin=15)
S["z03-f8"]=lambda: f_icons([("tray","a half-eaten meal"),("car","an engine running"),
    ("brokenwindow","a window open in the rain"),("coat","two coats, one hook"),
    ("phone","charging, unattended"),("lamp","a light behind a blind")], cols=3)
S["z03-f9"]=lambda: f_realia(tbl("Cranbourne House · access log","Week beginning 6th",
    ["Time","Door","Name","Signed","Note"],
    [["06:30","side","L. Pham","LP",""],["07:55","main","D. Oyelaran","DO","door secure"],
     ["06:40","side","","",""],["<s>06:15</s>","<s>side</s>","<s>—</s>","<s>—</s>","<s>entered in error</s>"],
     ["07:10","main","T. Kowalski","TK",""],["08:02","main","A. Haddad","AH",""],
     ["","","","",""],["","","","",""]],
    note="Propped doors must be reported to the duty officer on the day."), 560)
S["z03-f10"]=lambda: f_scene(880,410, people=[("priya",270,172,{}),("adeel",360,180,{}),
    ("oksana",450,172,{})],
    counter_=(640,232,230,108),
    on_counter=[("jug",690,0.4),("cafe",780,0.42)],
    props=[("logsheet",180,130,0.55),("key",540,130,0.5),("door",820,96,1.3)])
S["z03-f11"]=lambda: f_realia(tbl("Two logs","Same week",
    ["Main door","Side door"],
    [["06:30 &mdash; L. Pham<br>07:10 &mdash; T. Kowalski<br><b>07:55 &mdash; D. Oyelaran</b><br>"
      "08:02 &mdash; A. Haddad<br>______",
      "06:30 &mdash; L. Pham<br>06:40 &mdash; <b>(no name)</b><br>07:10 &mdash; T. Kowalski<br>"
      "07:55 &mdash; D. Oyelaran<br>______"]]), 520)
S["z03-f12"]=lambda: f_realia(doc("Two incident notes", None,
    "<p><b>A.</b> The side door was propped open on Tuesday morning by a member of the cleaning "
    "team who wanted to avoid carrying a key. This has happened before and should be addressed "
    "with the contractor.</p>"
    "<p style='font-size:12px;color:#6b6861'>Names a person, a motive and a history. Evidence "
    "for all three: none.</p>"
    "<p style='margin-top:14px'><b>B.</b> A photograph timed 06:40 shows the side door held open "
    "by a fire extinguisher. The door was secure at 07:55. The log for that morning has one entry "
    "with a time and no name. <i>Inference, not established:</i> the cleaning shift, which begins "
    "at 06:30, could have been in the building. <i>Not known:</i> anybody's whereabouts.</p>"
    "<p style='font-size:12px;color:#6b6861'>Three observations, one inference marked as such, "
    "one unknown.</p>"))
S["z03-f13"]=lambda: f_realia(tbl("","Incident frame",
    ["",""],
    [["<b>What we have</b>",""],["<b>What follows</b> &mdash; supported",""],
     ["&nbsp;&nbsp;&nbsp; &mdash; inferred",""],
     ["<b>What we do not have</b>",""],["<b>What I would act on</b>",""]]), 500)
S["z03-f14"]=lambda: f_scene(1040,440, people=[("priya",210,172,{}),("adeel",295,180,{}),
    ("oksana",380,172,{}),("tomas",465,180,{}),("mei",560,166,{}),("linh",645,172,{}),
    ("ahmad",730,180,{}),("samira",815,172,{}),("hana",900,166,{}),
    ("bah",125,176,{})],
    props=[("proppeddoor",20,0,1.2),("clipboard",520,126,0.48),("jobnotice",960,46,0.65),
    ("bench",970,0,1.1)], panelbg="#2b3340", floorbg="#39404c")
S["z03-f15"]=lambda: f_chart([("about a person's motive",12),("about a cause",8),
    ("about who was responsible",6),("about a time",3),("I can't think of one",2)])
S["z03-f16"]=lambda: f_scene(860,410, people=[("samira",260,172,{"seated":True,"smile":False}),
    ("nkemelu",700,176,{})],
    props=[("desk",200,0,1.4),("logsheet",280,170,0.5),("phone",390,196,0.45),
    ("printer",640,0,1.1)], clockat=(100,52,22,18,10),
    window_=(520,56,120,96), panelbg="#242c38", floorbg="#30394a")
