# -*- coding: utf-8 -*-
"""Flowline Book 5 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Starting Point ----------------
S["re00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each, from Books 1 to 4",
    ["What you have","An example"],
    [["A hazard","pressure &middot; gas &middot; a hot surface &middot; a confined space"],
     ["A barrier","a relief valve &middot; a shutdown system &middot; a bund &middot; a permit"],
     ["A number with its definition","354 degrees, by a named method, reproducible to four"],
     ["A document with a scope page","the standard says what it does not cover"],
     ["A tolerance with a confidence","plus or minus ten percent, at eighty percent confidence"],
     ["A signature with a date","two names on a checklist, and a dash where a tick would lie"]],
    note="Every one of those six appears in an accident report, and usually all six at once."), 580)
S["re00-f2"]=lambda: f_realia(tbl("The four shapes of a bad day",
    "What it looks like afterwards",
    ["The shape","Afterwards"],
    [["A violation","somebody did a thing they knew was wrong"],
     ["<b>A drift</b>","<b>nothing was decided; everything moved, slowly, for good reasons</b>"],
     ["<b>A stale assumption</b>","<b>the hardware was fine; the paper it was sized from was old</b>"],
     ["Two at once","each failure was on somebody's list, and never on one list"]],
    note="Nearly every investigation in this book found the second or the third, and almost none "
    "found the first on its own."), 580)
S["re00-f3"]=lambda: f_timeline([(0.00,"1931","a book"),(0.46,"1988","an inquiry"),
    (0.58,"1997","a paper"),(0.72,"2005","an investigation"),
    (0.86,"2011","an assessment"),(1.00,"2014","a book")], 0.58, w=720)
S["re00-f4"]=lambda: f_icons([("signature","who signed"),("note","what they were signing"),
    ("speechbubble","what they had been told"),
    ("magnifier","whether the conversation happened"),
    ("folder","what a filing system can check"),
    ("note","the paper is the evidence, not the protection")],3)

# ---------------- Unit 1 ----------------
S["re01-f1"]=lambda: f_icons([("data","a triangle with three bands"),
    ("barcode","a row of falling dominoes"),("folder","an insurance claim file"),
    ("firstaid","a first-aid box"),("logsheet","a lost-time injury record"),
    ("note","a near-miss report card"),("clipboard","an observation card"),
    ("walk","an observation round"),("tally","a frequency rate on a board"),
    ("balance","a severity figure"),("book","a 1931 book"),
    ("archive","a cabinet of employer reports"),("form","tick boxes"),
    ("thermostat","a relief valve with a backlog tag"),("pipe","a leaking flange"),
    ("note","many reports and no dataset")],4)
S["re01-f2"]=lambda: f_scene(800,420,
    people=[("yusuf",120,176,{}),("omar",340,180,{"seated":True}),("samira",420,180,{"seated":True}),
     ("nour",500,180,{"seated":True}),("ahmad",580,180,{"seated":True}),
     ("adeel",660,180,{"seated":True}),("nadia",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("data",760,196,0.2)],
    board=(24,22,216,112,"1 / 29 / 300",[("cards","1,140"),("lost time","0"),("backlog","38")]),
    clockat=(258,34,22,9,0))
S["re01-f3"]=lambda: f_icons([("data","three bands by severity"),
    ("barcode","five dominoes falling"),("balance","eighty-eight, ten and two"),
    ("folder","an insurance claim folder"),("form","a cause box on a report"),
    ("note","three claims, one of them about people")],3)
S["re01-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six safety figures on a wall",
    ["The figure","Where it is displayed","What it counts","What it is said to predict","Can anybody show you the data?"],
    blankrows(6,5),
    note="The box at the foot: the one with no data behind it."), 660)
S["re01-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the triangle on the wall, and where it came from",
    "<p style='font-size:12px;color:#6b6861'>Source: H. W. Heinrich, <i>Industrial Accident "
    "Prevention: A Scientific Approach</i>, McGraw-Hill, 1931. In our own words.</p>"
    "<p><b>What the book is.</b> The first attempt to study industrial accidents as a body of data "
    "rather than as a series of misfortunes. It is enormously influential, and that is true whether "
    "or not it is right.</p>"
    "<p><b>Three claims have survived.</b> The <b>ratio</b>: a few major injuries, more minor ones, "
    "many events with no injury at all. Drawn as a triangle, that is the diagram on the wall. The "
    "<b>sequence</b>: an accident is one event in a chain of five, so you can intervene earlier. The "
    "<b>proportion</b>: most accidents were attributed to the <b>unsafe acts of persons</b>.</p>"
    "<p><b>WHAT CANNOT BE CHECKED.</b> The figures came from insurers' records and employers' reports "
    "of the 1920s. <b>The underlying data was never published in a form anybody can re-examine.</b> "
    "There is no dataset, no list of plants, no coding manual. That does not make the claims false. "
    "It makes them <b>unverifiable</b>, which is a different thing: a figure repeated for ninety "
    "years has been repeated rather than reproduced.</p>"
    "<p>The proportion has a second problem. Each cause was taken from a <b>box on a form</b>, "
    "completed in an era in which the expected answer was the worker.</p>"
    "<p><b>WHAT THE RATIO DOES NOT MEASURE.</b> It is about cuts, falls and crush injuries. <b>It is "
    "not about explosions, fires or releases</b>, which are rare and have different causes. A plant "
    "can drive its minor injury rate down for years and allow the conditions for a catastrophe, "
    "because the two are produced by different things.</p>",
    "Unit 2 is an investigation into a case where exactly that happened."), 580)
S["re01-f6"]=lambda: f_realia(tbl("Word study",
    "Attributing a claim",
    ["The phrase","What it does","An example"],
    [["according to","names the source","According to the 1931 book, the ratio is about 300 to 1."],
     ["is attributed to","reports a cause without owning it","The majority were attributed to unsafe acts."],
     ["it is often claimed that","marks a claim as a claim","It is often claimed that minor injuries predict major ones."],
     ["the figure originates in","gives the origin","The figure originates in insurance records of the 1920s."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>there is no published data behind</i> and <i>is widely repeated "
    "rather than reproduced</i>."), 680)
S["re01-f7"]=lambda: f_realia(tbl("Performance board",
    "Five figures in large type, two at the foot",
    ["What is counted","This year"],
    [["Observation cards submitted","1,140"],
     ["Near misses reported","96"],
     ["First-aid cases","11"],
     ["Lost-time injuries","0"],
     ["Days since the last lost-time injury","612"],
     ["<i>Relief valve inspections overdue</i>","<b>38</b>"],
     ["<i>Isolation audit</i>","<b>overdue since March</b>"]],
    note="Five figures count things that happened to people. Two count things that were not done to "
    "equipment. The typeface is the other way round."), 600)
S["re01-f8"]=lambda: f_icons([("logsheet","a lost-time injury record"),
    ("thermostat","an overdue relief valve inspection"),("note","a count of near misses"),
    ("clipboard","an outstanding audit action"),("calendar","a days-since board"),
    ("magnifier","leading or lagging?")],3)
S["re01-f9"]=lambda: f_realia(doc("Monthly safety report",
    "Five figures ticked, two at the foot",
    "<p><b>Lost-time injuries 0 &#10003; &middot; Recordable rate best on record &#10003; &middot; "
    "Observation cards 1,140 &#10003; &middot; Near misses 96 &#10003; &middot; Days since injury 612 "
    "&#10003;</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Relief valve inspections overdue: 38. Isolation audit: "
    "overdue since March.</p>"
    "<p><i>Overall safety performance is excellent.</i></p>",
    "Five people figures and two equipment figures."), 580)
S["re01-f10"]=lambda: f_scene(800,400,
    people=[("yusuf",180,180,{}),("haddad",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("table",150,0,0.95),("logsheet",230,198,0.2),("table",580,0,0.9),
     ("spreadsheet",660,198,0.2),("data",430,196,0.22)],
    clockat=(60,40,22,10,0))
S["re01-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>Five people figures. A green tick beside each.</p><p><i>Safety performance is "
    "excellent.</i></p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>The same five, and <b>the two equipment figures in the same type size</b>. The near-miss "
    "<b>action closure</b> count: 4 of 96 changed something, 2 closed. <b>No conclusion "
    "sentence.</b></p>",None),380)[0:3],
    800,300,"Five figures and a conclusion","Seven figures and no conclusion")
S["re01-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Safety performance for the year is excellent. 612 days without a lost-time injury. The safety "
    "pyramid shows that this level of hazard reporting prevents serious incidents.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p><b>Counted on people:</b> 612 days, 11 first-aid cases, 1,140 cards, 96 near misses &mdash; "
    "the best record this site has had, and it was earned. <b>Counted on plant:</b> 38 inspections "
    "overdue, an audit outstanding since March, 11 reports with no action. <b>Of 96 reports, 4 "
    "changed something.</b> The ratio <b>is attributed to</b> a 1931 study; <b>there is no published "
    "dataset behind it</b>. <b>I am not claiming our record is false. I am claiming it is not "
    "evidence about the plant.</b></p>",None),380)[0:3],
    800,300,"Excellent","Excellent, and not evidence about the plant")
S["re01-f13"]=lambda: f_realia(form("Plan your safety note",
    [("What was counted on people",BLANK),("What was counted on plant",BLANK),
     ("The near-miss action closure figure",BLANK),("The provenance of any displayed ratio",BLANK),
     ("What you are not claiming",BLANK),("One request",BLANK)],
    note="Six boxes. The fifth is the one that keeps you in the room."), 560)
S["re01-f14"]=lambda: f_scene(1000,450,
    people=[("yusuf",60,176,{}),("samira",130,172,{}),("omar",205,176,{}),
     ("nour",290,172,{}),("haddad",365,176,{}),("nadia",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("adeel",590,170,{}),("yara",655,172,{}),
     ("wei",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("data",350,196,0.22),
     ("clipboard",420,198,0.2),("logsheet",550,198,0.2),("table",650,0,1.0),
     ("book",860,198,0.2),("thermostat",930,196,0.2)],
    board=(40,22,206,112,"WHAT DOES IT COUNT?",[("people","five"),("plant","two"),("type size","the other way")]),
    clockat=(262,34,22,11,0))
S["re01-f15"]=lambda: f_chart([("yes, and I know the data",2),("yes, and I do not",7),
    ("no",4),("I have never looked",6),("we display nothing",3)], unit="operators")
S["re01-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Six hundred and twelve days, and thirty-eight inspections",
    "<p><b>A monthly safety report</b> with five ticked figures.</p>"
    "<p><b>A maintenance backlog printout</b> with thirty-eight overdue relief valve inspections.</p>"
    "<p><b>An isolation audit</b> overdue since March.</p>"
    "<p><b>Eleven near-miss reports</b> with empty action boxes.</p>"
    "<p><b>A photograph of a painted triangle</b>, there since before anybody in the room arrived.</p>"
    "<p><i>Nobody falsified anything. The injury record is the best in the site's history, and it is "
    "in a different report from everything else on this desk.</i></p>",
    "Seven o'clock. The two sets of figures went to two different meetings."), 620)

# ---------------- Unit 2 ----------------
S["re02-f1"]=lambda: f_icons([("container","a tower with a level gauge"),
    ("water","a level indicator reading low"),("wind","a vent to atmosphere"),
    ("jug","a liquid level in a sight glass"),("cloud","a vapor cloud at ground level"),
    ("crate","a parked portable building"),("engine","an idling vehicle"),
    ("firealarm","an unlit alarm lamp"),("logsheet","a startup procedure"),
    ("racking","a maintenance backlog"),("note","a budget reduction memo"),
    ("book","an investigation report"),("review","a review panel report"),
    ("data","a falling injury rate"),("tally","a rising event count"),
    ("note","two different things with one word")],4)
S["re02-f2"]=lambda: f_scene(800,420,
    people=[("yusuf",120,176,{}),("omar",340,180,{"seated":True}),("samira",420,180,{"seated":True}),
     ("nour",500,180,{"seated":True}),("ahmad",580,180,{"seated":True}),
     ("adeel",660,180,{"seated":True}),("nadia",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("container",760,190,0.22)],
    board=(24,22,216,112,"ONE WORD, TWO SUBJECTS",[("personal","frequent"),("process","rare"),("safety","circled")]),
    clockat=(258,34,22,9,30))
S["re02-f3"]=lambda: f_icons([("data","a falling injury frequency"),
    ("tally","a rising count of releases"),("racking","an overdue inspection list"),
    ("clipboard","an unclosed audit action"),("thermostat","a near miss about a level instrument"),
    ("note","a good year on one axis says nothing about the other")],3)
S["re02-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six safety metrics",
    ["The metric","What it counts","Personal or process","Who sees it monthly","Has it ever changed a decision?"],
    blankrows(6,5),
    note="The box at the foot: the one that changed something."), 660)
S["re02-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the year the injury figures were good",
    "<p style='font-size:12px;color:#6b6861'>Sources: the US Chemical Safety and Hazard Investigation "
    "Board report into the BP Texas City refinery explosion and fire of 23 March 2005, published "
    "2007; and <i>The Report of the BP U.S. Refineries Independent Safety Review Panel</i>, January "
    "2007. In our own words.</p>"
    "<p><b>What happened, as the investigation describes it.</b> A unit was being started up. A tower "
    "was filled far beyond the level intended. Liquid went out of a vent stack that discharged <b>to "
    "atmosphere</b>. A heavier-than-air cloud formed at ground level and exploded. <b>Fifteen people "
    "were killed.</b> Most of those killed were in or near <b>portable office buildings</b> placed "
    "close to the unit.</p>"
    "<p><b>Findings about the mechanisms, as published,</b> include level indication that did not "
    "show what was in the tower; a high-level alarm that did not function as intended; no automatic "
    "action to stop the filling; a vent arrangement discharging to atmosphere; and <b>occupied "
    "buildings sited near a unit being started up</b>, without a hazard review that asked whether "
    "they should be there.</p>"
    "<p><b>Findings about the organization, as published,</b> include cost and staffing reductions "
    "affecting maintenance, a backlog of overdue work, internal warnings not acted on, and &mdash; "
    "repeatedly &mdash; <b>the use of personal injury rates as the measure of safety "
    "performance</b>.</p>"
    "<p><b>What the review panel added.</b> That personal injury rates are <b>not an adequate "
    "measure</b> of process safety performance, that process safety needs its own leadership, metrics "
    "and expertise, and that a good injury record can <b>coexist</b> with serious process safety "
    "deficiencies.</p>"
    "<p><b>WHAT THESE DOCUMENTS DO NOT DO.</b> They are <b>not law</b>. They are about one event at "
    "one site and one company's refineries. <b>The panel's remit was management systems and culture, "
    "not the cause of the accident.</b> And neither is a judgment of individual blame.</p>",
    "What travels is the mechanism. The conclusion does not."), 580)
S["re02-f6"]=lambda: f_realia(tbl("Word study",
    "Contrast",
    ["The structure","What it does","An example"],
    [["although + clause","two facts that sit badly together","Although the injury rate fell, the inspection backlog grew."],
     ["despite + noun","the same, more compact","Despite a record injury year, the audit actions were open."],
     ["even though + clause","stronger, more surprised","Even though the alarm had failed before, it was not replaced."],
     ["at the same time","two things in one period","At the same time, maintenance spending was reduced."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>whereas</i> and <i>nevertheless</i>."), 680)
S["re02-f7"]=lambda: f_matrix(["Personal","Process"],
    [("Row 1",["recordable rate &mdash; best on record","losses of containment &mdash; 7, up from 4"]),
     ("Row 2",["lost-time injuries &mdash; zero","safety system activations &mdash; 19"]),
     ("Row 3",["severity rate &mdash; improved","overdue inspections &mdash; 38"]),
     ("Row 4",["observation cards &mdash; 1,140","overdue audit actions &mdash; 23"]),
     ("Row 5",["days since last injury &mdash; 612","unreviewed building siting &mdash; 4"]),
     ("<b>Reported to</b>",["<b>the same meeting</b>","<b>in a different document</b>"])], 660)
S["re02-f8"]=lambda: f_icons([("cut","a hand injury from a tool"),
    ("pipe","a small release from a flange"),("fall","a fall from a ladder"),
    ("firealarm","a shutdown system activation"),("bandage","a cut requiring a dressing"),
    ("magnifier","personal or process?")],3)
S["re02-f9"]=lambda: f_realia(tbl("Monthly report extract",
    "Two sheets, one agenda",
    ["Sheet","What is on it","Status"],
    [["Sheet 1","five personal safety figures","all green"],
     ["Sheet 2","losses of containment, activations, backlogs, actions","three amber, two red"],
     ["Sheet 2, last line","four occupied buildings within fifty meters","<b>no review</b>"],
     ["On the agenda","<b>sheet 1</b>","&mdash;"]],
    note="<b>The second sheet is not on the agenda.</b>"), 620)
S["re02-f10"]=lambda: f_scene(800,400,
    people=[("yusuf",180,180,{}),("haddad",300,176,{}),("samira",620,180,{})],
    props=[("table",150,0,0.95),("logsheet",230,198,0.2),("map",430,196,0.22),
     ("table",580,0,0.9),("spreadsheet",660,198,0.2)],
    clockat=(60,40,22,10,0))
S["re02-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>The personal safety table, all green, and one conclusion: performance is improving.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>Both tables <b>on one page</b>. The siting line: four occupied buildings within fifty meters, "
    "no review. The <b>twice-failed transmitter</b> on T-402. And one sentence saying what the writer "
    "is not claiming.</p>",None),380)[0:3],
    800,300,"One table","Both tables, one page")
S["re02-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Safety performance continues to improve. Best injury rate in the site's history. Process "
    "safety is managed within the management system.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p><b>Personal:</b> best on record, and the team earned it. <b>Process:</b> containment losses 4 "
    "to 7, 19 activations, 38 inspections overdue, 23 actions open. <b>Although</b> the personal "
    "figures are the best we have had, <b>the process figures moved the other way in the same "
    "period</b>. Two named items: the T-402 alarm and transmitter, failed twice; four cabins within "
    "fifty meters with no siting review. <b>I am not claiming this site is any site in any published "
    "investigation. I am claiming I cannot answer the siting question.</b></p>",None),380)[0:3],
    800,300,"Improving","Improving on one axis")
S["re02-f13"]=lambda: f_realia(form("Plan your two-axis note",
    [("The personal figures, with credit given",BLANK),("The process figures",BLANK),
     ("One contrast sentence",BLANK),("Two specific named items",BLANK),
     ("What you are not claiming",BLANK),("One request",BLANK)],
    note="Six boxes. Two items, not the whole backlog."), 560)
S["re02-f14"]=lambda: f_scene(1000,450,
    people=[("yusuf",60,176,{}),("samira",130,172,{}),("omar",205,176,{}),
     ("haddad",290,172,{}),("nour",365,176,{}),("nadia",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("adeel",590,170,{}),("yara",655,172,{}),
     ("wei",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("map",350,196,0.22),
     ("thermostat",420,196,0.2),("spreadsheet",550,198,0.2),("table",650,0,1.0),
     ("book",860,198,0.2),("container",930,190,0.22)],
    board=(40,22,206,112,"TWO SUBJECTS, ONE WORD",[("personal","green"),("process","amber"),("50 m","four cabins")]),
    clockat=(262,34,22,11,0))
S["re02-f15"]=lambda: f_chart([("personal only",8),("both",4),("process only",1),
    ("I do not know",5),("we have no monthly report",4)], unit="operators")
S["re02-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Both sheets, and both of them true",
    "<p><b>A monthly report</b> open at a green personal safety table.</p>"
    "<p><b>A second sheet</b> with seven losses of containment and thirty-eight overdue "
    "inspections.</p>"
    "<p><b>A site plan</b> with four cabins inside a fifty meter circle.</p>"
    "<p><b>A level transmitter</b> with two failure tags on it.</p>"
    "<p><b>A published investigation report</b>, open at a page about metrics.</p>"
    "<p><i>Nobody hid either sheet. They are in two different documents going to two different "
    "meetings, and each one is correct.</i></p>",
    "Seven o'clock. The cabins have been there eleven years, and every project that put them there "
    "was approved."), 620)

# ---------------- Unit 3 ----------------
S["re03-f1"]=lambda: f_icons([("logsheet","a drawing on a table"),
    ("meeting","a team of six around it"),("pipe","a node marked on a pipe"),
    ("noentry","a card reading no or none"),("tally","a card reading more"),
    ("balance","a card reading less"),("recycle","a card reading reverse"),
    ("signal","a flow arrow"),("dashboard","a pressure gauge"),
    ("thermometer","a temperature indicator"),("water","a level gauge"),
    ("magnifier","a composition analyzer"),("note","a deviation column"),
    ("danger","a consequence column"),("padlock","a safeguard column"),
    ("note","sixty-one actions, forty-four closed")],4)
S["re03-f2"]=lambda: f_scene(860,430,
    people=[("wei",110,172,{}),("yusuf",300,180,{"seated":True}),("samira",380,180,{"seated":True}),
     ("ahmad",460,180,{"seated":True}),("omar",540,180,{"seated":True}),
     ("yara",620,180,{"seated":True}),("nadia",700,180,{"seated":True})],
    props=[("desk",280,0,1.05),("board",40,88,0.64),("logsheet",790,198,0.2),
     ("computer",760,192,0.22)],
    board=(24,22,216,112,"SEVEN GUIDE WORDS",[("no","more"),("less","as well as"),("reverse","other than")]),
    clockat=(252,34,22,9,0))
S["re03-f3"]=lambda: f_icons([("noentry","no flow"),("tally","more pressure"),
    ("balance","less level"),("recycle","reverse flow"),
    ("pipe","as well as: two streams"),
    ("note","seven short words, every parameter, one node at a time")],3)
S["re03-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six actions from a real study",
    ["The deviation","The consequence","The safeguard relied on","The action raised","Closed, and how"],
    blankrows(6,5),
    note="The box at the foot: the one closed as <i>no action required</i>."), 660)
S["re03-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: a structured way of imagining failure",
    "<p style='font-size:12px;color:#6b6861'>Sources: Trevor Kletz, <i>HAZOP and HAZAN</i>, "
    "Institution of Chemical Engineers, 1983 and later editions; and IEC 61882, <i>Hazard and "
    "operability studies &mdash; Application guide</i>. In our own words.</p>"
    "<p><b>The two things in the title are different.</b> A hazard and operability study is a way of "
    "<b>finding</b> what could go wrong. A hazard analysis estimates <b>how likely and how bad</b>. "
    "They are separate activities, and confusing them is a mistake. <b>Finding is not "
    "quantifying.</b></p>"
    "<p><b>How a study works.</b> A drawing is divided into <b>nodes</b>, each small enough to have "
    "one <b>design intention</b>, stated in plain words. The team then applies <b>guide words</b> to "
    "each parameter of that intention: flow, pressure, temperature, level, composition. Seven guide "
    "words: <b>no, more, less, as well as, part of, reverse, other than</b>.</p>"
    "<p>Each combination gives a <b>deviation</b>, and for each one the team asks four questions: "
    "what could cause it, what would happen, what already protects us, and what action is "
    "required.</p>"
    "<p><b>Why guide words at all?</b> A team asked <i>what could go wrong</i> says what it "
    "remembers. A team asked <i>what if there were reverse flow</i> has to think about reverse flow. "
    "The guide word makes experienced people <b>search instead of recall</b>.</p>"
    "<p><b>WHAT THE METHOD CANNOT FIND.</b> A hazard <b>nobody in the room knows about</b>, and no "
    "amount of rigor removes that. <b>The composition of the team is the single biggest determinant "
    "of quality</b>, and it is usually decided by who was available. It cannot find what the drawing "
    "gets wrong, and checking the drawing against the plant is tedious and frequently skipped. And a "
    "study is a <b>photograph</b>: plants are modified.</p>"
    "<p><b>And the study protects nobody until the actions are done.</b> The most common failure of "
    "the method is in <b>follow-up</b>. An action closed as <i>no action required</i> with no reason "
    "recorded has been deleted, not answered.</p>",
    "Go and find the action list from the last study at your site, and count the closures."), 580)
S["re03-f6"]=lambda: f_realia(tbl("Word study",
    "Hypothesizing",
    ["The structure","What it does","An example"],
    [["if + past simple","an imagined case","If the discharge valve were shut, the pump would deadhead."],
     ["suppose","invites the team in","Suppose the strainer blocked during startup."],
     ["in the event that","formal, for a worksheet","In the event that cooling is lost, the temperature rises."],
     ["would be expected to","a predicted consequence, hedged","The relief valve would be expected to lift."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>could conceivably</i> and <i>it is not credible that</i>."), 680)
S["re03-f7"]=lambda: f_realia(tbl("Hazard study worksheet",
    "Node 4 &middot; injection pump discharge to the manifold",
    ["Deviation","Cause","Consequence","Safeguard","Action"],
    [["no flow","discharge valve shut","pump deadheads, overheats","recirculation line, <b>per drawing</b>","<b>confirm the line exists on the plant</b>"],
     ["more pressure","blocked outlet","relief lifts to atmosphere","PSV-411","confirm governing case"],
     ["reverse flow","pump trip, well pressure","contaminated water to the pump","non-return valve","prove the valve shuts"],
     ["as well as","produced water carryover","corrosion downstream","sample point","add to sampling schedule"],
     ["other than","wrong chemical delivered","unknown reaction","labeling at delivery","review delivery procedure"],
     ["less flow","partly blocked strainer","injection rate falls","flow indication","none &mdash; operability only"]],
    note="Three of these actions can be closed from a desk. Three cannot."), 680)
S["re03-f8"]=lambda: f_icons([("recycle","a reversed flow arrow"),
    ("dashboard","a pressure gauge above its range"),("water","a level gauge at zero"),
    ("pipe","two streams joining"),("crate","a drum of the wrong liquid"),
    ("magnifier","which guide word?")],3)
S["re03-f9"]=lambda: f_realia(tbl("Study close-out summary",
    "Hasakah injection skid &middot; drawing revision 4, dated 2011",
    ["","Figure"],
    [["Actions raised","61"],
     ["Closed","44"],
     ["Open","8"],
     ["<b>Closed as <i>no action required</i></b>","<b>9, no reason recorded</b>"],
     ["Drawing revision used","<b>2011</b>"],
     ["Modifications since","three, none marked up"]],
    note="<b>Nine deletions and a drawing fourteen years old.</b>"), 600)
S["re03-f10"]=lambda: f_scene(800,400,
    people=[("wei",180,176,{}),("samira",300,180,{"seated":True}),("omar",620,180,{})],
    props=[("desk",260,0,1.0),("logsheet",340,198,0.2),("table",580,0,0.9),
     ("note",660,198,0.2),("spreadsheet",230,198,0.2)],
    clockat=(60,40,22,11,0))
S["re03-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Worksheet A",None,
    "<p>Node 4, <i>no flow</i>.</p><p>Safeguard: <b>recirculation line, per drawing</b>.</p>"
    "<p>Action: closed.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Worksheet B",None,
    "<p>Node 4, <i>no flow</i>.</p><p>Safeguard: <b>not found on plant</b>; blanked flange "
    "photographed 14 May.</p><p>Action: open, with a named owner and a date.</p>",None),380)[0:3],
    800,300,"Per drawing","Found, or not found, on the plant")
S["re03-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>The HAZOP has been completed and closed out. All identified hazards have been addressed. "
    "Residual actions are being progressed.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p><b>61 raised; 44 closed, 8 open, 9 closed as <i>no action required</i> with no reason on the "
    "line.</b> Performed on <b>drawing revision 4, dated 2011</b>; three modifications since, none "
    "marked up. <b>Node 4:</b> the recorded safeguard <b>does not exist on the plant</b> &mdash; a "
    "blanked flange, photographed. <b>I am not saying the study was done badly.</b> Requesting: the 9 "
    "reopened; two days of field verification; the drawing marked up.</p>",None),380)[0:3],
    800,300,"Closed out","Closed out, against a 2011 drawing")
S["re03-f13"]=lambda: f_realia(form("Plan your study note",
    [("The action counts",BLANK),("The closures with no reason",BLANK),
     ("The drawing revision, and what changed since",BLANK),
     ("One specific node finding, with evidence",BLANK),
     ("What you are not saying",BLANK),("Up to three requests",BLANK)],
    note="Six boxes. Each request needs somebody who could start on Monday."), 560)
S["re03-f14"]=lambda: f_scene(1000,450,
    people=[("wei",60,172,{}),("yusuf",130,176,{}),("samira",205,172,{}),
     ("ahmad",290,176,{}),("omar",365,172,{}),("yara",440,176,{"seated":True}),
     ("nadia",515,172,{"seated":True}),("nour",590,176,{}),("haddad",655,170,{}),
     ("adeel",720,172,{}),("ida",785,170,{}),("tomas",845,172,{}),
     ("lars",905,170,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("logsheet",350,198,0.2),
     ("computer",420,192,0.22),("pipe",550,194,0.2),("table",650,0,1.0),
     ("note",860,198,0.2),("spreadsheet",930,198,0.2)],
    board=(40,22,206,112,"SEARCH, DO NOT RECALL",[("7 words","the method"),("the drawing","2011"),("the plant","today")]),
    clockat=(262,34,22,12,0))
S["re03-f15"]=lambda: f_chart([("all closed with reasons",2),("mostly closed",5),
    ("I do not know",7),("there was no action list",3),("we have never had a study",4)], unit="engineers")
S["re03-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Sixty-one actions and a drawing from 2011",
    "<p><b>A close-out summary</b> showing sixty-one actions and forty-four closed.</p>"
    "<p><b>A worksheet row</b> reading <i>safeguard: recirculation line, per drawing</i>.</p>"
    "<p><b>A photograph of a blanked flange</b> where that line used to come off.</p>"
    "<p><b>A drawing revision box</b> dated 2011.</p>"
    "<p><b>A list of three modifications</b> made since, none of them marked up.</p>"
    "<p><i>A competent chairperson, a full team, the right method, and a safeguard that had been cut "
    "out of the plant before the study took place.</i></p>",
    "Seven o'clock. Nine discussions happened and none of them was written down."), 620)
