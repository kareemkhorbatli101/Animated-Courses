# -*- coding: utf-8 -*-
"""Flowline Book 4 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Unit 7 ----------------
S["rd07-f1"]=lambda: f_icons([("certificate","a nameplate riveted to a vessel"),
    ("data","a design drawing from 1959"),("logsheet","a debottlenecking drawing"),
    ("pipe","a fouled heat exchanger"),("scaffolding","a turnaround"),
    ("calendar","outage weeks shaded"),("tally","a monthly throughput figure"),
    ("balance","a utilization percentage"),("book","a published statistical bulletin"),
    ("table","a table of refinery capacities"),("data","two figures, one country"),
    ("envelope","a direct communication letter"),("note","a secondary source estimate"),
    ("worldmap","a world total"),("quotemark","a footnote in small type"),
    ("note","four numbers, one table")],4)
S["rd07-f2"]=lambda: f_scene(760,400,
    people=[("yara",110,176,{}),("omar",320,180,{"seated":True}),("nour",405,180,{"seated":True}),
     ("samira",485,180,{"seated":True}),("haddad",565,180,{}),("nadia",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("book",715,198,0.2)],
    board=(30,24,214,110,"FOUR CAPACITIES",[("nameplate","107"),("sustainable","112"),("available","93")]),
    clockat=(262,36,22,12,0))
S["rd07-f3"]=lambda: f_icons([("certificate","a nameplate figure"),
    ("logsheet","a modified plant, a higher rate"),("calendar","a turnaround, weeks out of a year"),
    ("noentry","an unplanned outage"),("tally","a monthly throughput record"),
    ("note","four numbers, and only one is a design figure")],3)
S["rd07-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published capacity figures",
    ["The plant or country","The figure","The year it refers to","The publication","Does it say where it got it?"],
    blankrows(6,5),
    note="The box at the foot: the two publications that disagreed about the same plant. Write down "
    "both figures and both years."), 660)
S["rd07-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: four numbers, all called capacity",
    "<p style='font-size:12px;color:#6b6861'>Source: the <i>Annual Statistical Bulletin</i> published "
    "by the Organization of the Petroleum Exporting Countries. In our own words.</p>"
    "<p>Somebody asks how big the refinery is. There are four honest answers.</p>"
    "<p><b>Nameplate capacity</b> is what the plant was designed and built to do. It is on a plate, "
    "and it has a year on it. <b>Current maximum sustainable capacity</b> is what it can hold today, "
    "after modifications, and it is often <b>higher</b> than nameplate. <b>Available capacity</b> is "
    "that figure less the weeks lost to a turnaround and to unplanned outages. <b>Actual "
    "throughput</b> is what went through.</p>"
    "<p><b>Utilization</b> is throughput divided by capacity, so there are three different "
    "utilizations for one plant, and all three are honest. <b>A utilization figure with no "
    "denominator named means nothing at all.</b></p>"
    "<p><b>Where a published figure comes from.</b> A bulletin like this one gathers data from member "
    "countries by <b>direct communication</b> and fills the gaps from <b>secondary sources</b>. It "
    "says which is which, usually in a footnote. Two compilations can print different figures for the "
    "same plant in the same year, and neither is wrong: they asked different people, or the same "
    "people in a different month.</p>",
    "A published figure needs four facts before you quote it: the number, the year, the publication, "
    "and whether the publication says where it got it."), 580)
S["rd07-f6"]=lambda: f_realia(tbl("Word study",
    "Attributing a figure",
    ["The phrase","What it attaches to the figure","An example"],
    [["according to","the publication","According to the bulletin, capacity is 133,000 b/d."],
     ["as reported by","who reported it","As reported by the operator in 2019."],
     ["the figure given for","the year","The figure given for 2019 is 133,000."],
     ["as supplied by","the source of the data","As supplied by the member country."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>estimated by</i> and <i>on the basis of</i>. <i>Reported</i> and "
    "<i>estimated</i> are not the same claim."), 680)
S["rd07-f7"]=lambda: f_chart([("nameplate, 1959",107),("current sustainable",112),
    ("available this year",93),("actual throughput",86)], unit="thousand b/d")
S["rd07-f8"]=lambda: f_icons([("certificate","a nameplate on a vessel"),
    ("logsheet","a debottlenecking drawing"),("scaffolding","a turnaround"),
    ("noentry","an unplanned outage"),("tally","a monthly throughput record"),
    ("magnifier","which capacity is this?")],3)
S["rd07-f9"]=lambda: f_realia(tbl("Capacity summary &mdash; Mureij refinery, this year",
    "All three utilizations are honest",
    ["What it is","Figure, thousand b/d","When it was established"],
    [["Nameplate capacity","107","1959, from the design"],
     ["Current maximum sustainable","112","2018, after the debottleneck"],
     ["Available this year","93","a nine-week turnaround and two outages"],
     ["Actual throughput","86","the twelve monthly records"],
     ["Utilization on nameplate","80 per cent","denominator: 107"],
     ["Utilization on sustainable","77 per cent","denominator: 112"],
     ["Utilization on available","92 per cent","denominator: 93"]],
    note="The published bulletin prints 107 for this plant, with a footnote. Four facts before you "
    "quote it: <b>the number, the year, the publication, and where it got it.</b>"), 640)
S["rd07-f10"]=lambda: f_scene(800,400,
    people=[("yara",180,180,{}),("haddad",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("table",150,0,0.95),("book",230,198,0.2),("spreadsheet",420,198,0.2),
     ("table",580,0,0.9),("logsheet",660,198,0.2)],
    clockat=(60,40,22,1,0))
S["rd07-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Annual report A",None,
    "<p>Capacity: 107,000 barrels a day. Utilization: 80 per cent.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Annual report B",None,
    "<p><b>Four capacities</b>, each with the date it was established. <b>Three utilizations</b>, each "
    "with its denominator named and the question it answers. And the <b>provenance</b> of the "
    "published figure: the number, the year, the publication, and what its footnote says.</p>",
    None),380)[0:3],
    800,300,"One capacity, one utilization","Four capacities, three utilizations")
S["rd07-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Refinery capacity is 107,000 barrels a day and utilization this year was 80 per cent.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Nameplate 107, from 1959. Current sustainable 112, since 2018. Available 93, after a "
    "nine-week turnaround. Throughput 86. <b>Utilization on nameplate 80 per cent</b> &mdash; which "
    "answers <i>how does the plant compare with its design</i>. <b>Utilization on available 92 per "
    "cent</b> &mdash; which answers <i>did we run the plant well when we had it</i>. Those are "
    "different questions. The published figure is 107 for 2019, from a bulletin whose footnote names "
    "secondary sources.</p>",None),380)[0:3],
    800,300,"One figure","Two questions")
S["rd07-f13"]=lambda: f_realia(form("Plan your capacity note",
    [("Nameplate, with its year",BLANK),("Current sustainable, and how it was established",BLANK),
     ("Available, and what was subtracted",BLANK),("Actual throughput",BLANK),
     ("Each utilization, with its denominator and its question",BLANK),
     ("The published figure, with its four facts",BLANK)],
    note="Six boxes. The fifth is the one that takes two sentences."), 560)
S["rd07-f14"]=lambda: f_scene(1000,450,
    people=[("yara",60,176,{}),("omar",130,172,{}),("nour",205,176,{}),
     ("haddad",290,172,{}),("samira",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("adeel",590,170,{}),("wei",655,172,{}),
     ("tomas",720,170,{}),("ida",785,172,{}),("lars",845,170,{}),
     ("yusuf",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.2),
     ("book",420,198,0.2),("certificate",550,198,0.2),("table",650,0,1.0),
     ("calendar",860,198,0.2),("data",930,196,0.22)],
    board=(40,22,206,112,"WHICH DENOMINATOR?",[("107","80 per cent"),("112","77 per cent"),("93","92 per cent")]),
    clockat=(262,34,22,2,0))
S["rd07-f15"]=lambda: f_chart([("always",3),("usually",4),("sometimes",6),
    ("never",7),("we do not quote utilization",3)], unit="operators")
S["rd07-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Eighty per cent of what?",
    "<p><b>A capacity summary</b> with four figures and three utilizations.</p>"
    "<p><b>An annual report</b> quoting one utilization and naming no denominator.</p>"
    "<p><b>A published bulletin</b> open at a footnote that says <i>secondary sources</i>.</p>"
    "<p><b>A photograph of a nameplate</b> dated 1959.</p>"
    "<p><b>An investor's letter</b> asking why utilization fell when throughput rose.</p>"
    "<p><i>Throughput did rise. The denominator was changed from nameplate to sustainable between the "
    "two reports, and nobody said so, because neither report said which it was using.</i></p>",
    "Seven o'clock. Both numbers were right, and the trend between them was invented."), 620)

# ---------------- Unit 8 ----------------
S["rd08-f1"]=lambda: f_icons([("hot","a hot stream needing cooling"),
    ("cold","a cold stream needing heating"),("pipe","a heat exchanger between them"),
    ("boiler","a furnace burning fuel"),("wind","a cooler rejecting heat to air"),
    ("data","two composite curves"),("bottleneck","the curves at their closest"),
    ("thermometer","the minimum approach"),("tally","a hot utility target"),
    ("balance","a cold utility target"),("racking","a network of exchangers"),
    ("pipe","a long pipe run between two units"),("map","a plot plan with distances"),
    ("shutter","a fouled exchanger"),("note","a stream nobody listed"),
    ("note","a target, not a prediction")],4)
S["rd08-f2"]=lambda: f_scene(760,400,
    people=[("yara",110,176,{}),("omar",320,180,{"seated":True}),("adeel",405,180,{}),
     ("nour",490,180,{"seated":True}),("samira",570,180,{"seated":True}),
     ("nadia",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("data",715,196,0.22)],
    board=(30,24,214,110,"THE PINCH",[("hot curve","above"),("cold curve","below"),("closest","20 deg")]),
    clockat=(262,36,22,12,30))
S["rd08-f3"]=lambda: f_process(["list the streams|start and end temperatures",
    "draw|two composite curves","choose|a minimum approach",
    "locate|the pinch","read off|two utility targets",
    "the hard part|is the first step"], w=720)
S["rd08-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six heat recovery projects",
    ["The plant","What heat was recovered","Energy saved","What it cost","The main difficulty"],
    blankrows(6,5),
    note="The box at the foot: the difficulty that was not thermodynamic. Most of them will not be."), 660)
S["rd08-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the number the plant could use if everything were possible",
    "<p style='font-size:12px;color:#6b6861'>Source: B. Linnhoff and E. Hindmarsh, \"The pinch design "
    "method for heat exchanger networks\", <i>Chemical Engineering Science</i>, 1983. In our own "
    "words.</p>"
    "<p>A refinery has streams that must be cooled and streams that must be heated. Any heat you move "
    "from the first group to the second is fuel you do not burn and cooling you do not pay for.</p>"
    "<p>The method is four steps. <b>List every stream</b> with its start temperature, its end "
    "temperature and its heat duty. <b>Draw the two composite curves</b>, one for all the hot streams "
    "together and one for all the cold. <b>Choose a minimum temperature approach</b>, because heat "
    "will not flow across no difference. <b>Read off two numbers</b>: the least heating the process "
    "can need, and the least cooling.</p>"
    "<p>The point where the curves come closest is the <b>pinch</b>. It is the bottleneck of the whole "
    "network, and no amount of extra exchanger area moves it.</p>"
    "<p><b>What the method cannot see.</b> It cannot see <b>distance</b>: two streams four hundred "
    "meters apart are one line on the diagram and a very expensive pipe on the plot. It cannot see "
    "fouling, control, start-up, or the fact that one of the streams only runs half the time. And the "
    "<b>minimum approach is a choice</b>, usually made years ago by somebody who is no longer here.</p>",
    "The two numbers are <b>targets</b>. A target is what is possible if every match can be made. The "
    "trouble starts when somebody copies it into a budget."), 580)
S["rd08-f6"]=lambda: f_realia(tbl("Word study",
    "Targets and what they claim",
    ["The phrase","What it claims","An example"],
    [["the theoretical minimum","what thermodynamics allows","The theoretical minimum is 41 MW."],
     ["a target rather than a prediction","not a forecast","This is a target rather than a prediction."],
     ["achievable in principle","if every match can be made","Achievable in principle, at 20 degrees."],
     ["as close as","the best realistic approach","As close as 48 MW, on six matches."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>within about</i> and <i>in practice</i>. <i>Possible</i> and "
    "<i>achievable</i> are not the same word."), 680)
S["rd08-f7"]=lambda: f_line([("0",96),("20",104),("40",128),("60",158),("80",196),
    ("100",238),("120",272),("140",296),("160",312),("180",322),("200",330)],
    unit="deg C", mark=6, dashed_from=7)
S["rd08-f8"]=lambda: f_icons([("pipe","two streams a few meters apart"),
    ("map","two streams four hundred meters apart"),("timer","an intermittent stream"),
    ("crane","a stream on a unit added later"),("shutter","two streams that would foul"),
    ("magnifier","can this match be made?")],3)
S["rd08-f9"]=lambda: f_realia(tbl("Energy study &mdash; crude and vacuum units, 28 May",
    "Minimum approach taken as 20 degrees, from the 1975 design basis",
    ["","Figure","Note"],
    [["Theoretical minimum heating","41 MW","at a 20 degree approach"],
     ["Current actual heating","58 MW","twelve-month average"],
     ["The gap","<b>17 MW</b>","<b>a target</b>"],
     ["Match 1","2.1 MW","same unit, 14 m"],
     ["Match 2","3.4 MW","same unit, 31 m"],
     ["Match 3","4.0 MW","210 m, across the road"],
     ["Match 4","3.2 MW","260 m"],
     ["Match 5","2.6 MW","380 m, and intermittent"],
     ["Match 6","1.7 MW","410 m, both streams fouling"]],
    note="<b>The target assumes all six can be made.</b> Four of the six are over two hundred meters."), 640)
S["rd08-f10"]=lambda: f_scene(800,400,
    people=[("yara",180,180,{}),("haddad",620,180,{"seated":True}),("omar",300,176,{})],
    props=[("table",150,0,0.95),("map",230,196,0.22),("table",580,0,0.9),
     ("spreadsheet",660,198,0.2),("data",430,196,0.22)],
    clockat=(60,40,22,1,0))
S["rd08-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Study A",None,
    "<p>Energy saving identified: 17 MW.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Study B",None,
    "<p>Theoretical target <b>41 MW</b>, at a <b>20 degree approach chosen in 1975</b>. Current actual "
    "<b>58 MW</b>. Gap <b>17 MW, a target</b>. Six candidate matches with their distances, four of "
    "them over two hundred meters. Realistically pipeable: <b>5.5 MW</b>.</p>",None),380)[0:3],
    800,300,"One saving figure","A target, and what can be piped")
S["rd08-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>The study identifies 17 MW of energy saving. Recommend including in next year's budget.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Target 41 MW at a 20 degree approach; actual 58; gap <b>17 MW, which is a target and not a "
    "saving</b>. Match by match, with distances: two inside a unit, four across the plot, one "
    "intermittent, one fouling on both sides. <b>What can realistically be piped is 5.5 MW.</b> And "
    "one sentence: the approach temperature was chosen in 1975 and is worth revisiting before "
    "anything is budgeted.</p>",None),380)[0:3],
    800,300,"A saving","A target and an achievable figure")
S["rd08-f13"]=lambda: f_realia(form("Plan your energy note",
    [("The theoretical target, with its approach temperature",BLANK),
     ("The current actual",BLANK),("The gap, labeled as a target",BLANK),
     ("Each candidate match, with its distance",BLANK),
     ("Which matches can be piped, and what they are worth",BLANK),
     ("One sentence about when the approach was chosen",BLANK)],
    note="Six boxes. The third box is the one that gets misread, so write the word <i>target</i> in "
    "it."), 560)
S["rd08-f14"]=lambda: f_scene(1000,450,
    people=[("yara",60,176,{}),("omar",130,172,{}),("adeel",205,176,{}),
     ("nour",290,172,{}),("haddad",365,176,{}),("samira",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("ahmad",590,170,{}),("wei",655,172,{}),
     ("ida",720,170,{}),("tomas",785,172,{}),("lars",845,170,{}),
     ("yusuf",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.2),
     ("map",420,196,0.22),("data",550,196,0.22),("table",650,0,1.0),
     ("pipe",860,194,0.2),("boiler",930,192,0.22)],
    board=(40,22,206,112,"A TARGET, NOT A PROMISE",[("41","possible"),("58","actual"),("5.5","pipeable")]),
    clockat=(262,34,22,2,0))
S["rd08-f15"]=lambda: f_chart([("yes, I saw it happen",7),("yes, I think so",5),
    ("no",4),("I do not know",4),("we do not set targets",3)], unit="engineers")
S["rd08-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Seventeen megawatts that moved from one page to another",
    "<p><b>An energy study</b> with a seventeen megawatt gap, labeled <i>a target</i>.</p>"
    "<p><b>A budget page</b> where the same seventeen appears under <i>savings</i>.</p>"
    "<p><b>A plot plan</b> showing four of the six matches more than two hundred meters apart.</p>"
    "<p><b>A 1975 design basis sheet</b> with a twenty degree approach written on it in pencil.</p>"
    "<p><b>A photograph of a full pipe rack</b> with no space on it.</p>"
    "<p><i>The study said <b>target</b> in bold on its first page. The budget said <b>saving</b>. "
    "Nobody changed a number; a word was dropped between two documents.</i></p>",
    "Seven o'clock. Three years of reporting against a figure that was never a forecast."), 620)

# ---------------- Unit 9 ----------------
S["rd09-f1"]=lambda: f_icons([("thermostat","a relief valve on a vessel"),
    ("shutter","a rupture disc"),("noentry","a closed outlet valve"),
    ("hot","a fire under a vessel"),("water","a cooling water pump stopped"),
    ("dashboard","a control valve failed open"),("pipe","a ruptured exchanger tube"),
    ("sun","a blocked-in line in the sun"),("powercut","a power failure"),
    ("wind","an instrument air failure"),("racking","a flare header"),
    ("container","a knock-out drum"),("table","scenarios with relief loads"),
    ("tally","the largest load, circled"),("timer","a depressuring valve"),
    ("note","the one nobody wrote down")],4)
S["rd09-f2"]=lambda: f_scene(760,400,
    people=[("yara",110,176,{}),("omar",320,180,{"seated":True}),("nour",405,180,{}),
     ("samira",485,180,{"seated":True}),("haddad",565,180,{}),("nadia",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("thermostat",715,196,0.2)],
    board=(30,24,214,110,"SIZED FOR THE LIST",[("8 cases","loads"),("fire","largest"),("line 9","blank")]),
    clockat=(262,36,22,1,0))
S["rd09-f3"]=lambda: f_icons([("noentry","an outlet shut, the inlet still flowing"),
    ("hot","a fire beneath a vessel"),("water","a cooling water pump stopped"),
    ("dashboard","a control valve failed fully open"),("pipe","a tube ruptured between two sides"),
    ("note","eight ordinary failures, one largest number")],3)
S["rd09-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six relief devices on this site",
    ["The vessel","The device","Set pressure","The governing case","Scenario list last reviewed"],
    blankrows(6,5),
    note="The box at the foot: the oldest review date on the sheet. Then look at what has been built "
    "since."), 660)
S["rd09-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the valve is sized for a list of accidents",
    "<p style='font-size:12px;color:#6b6861'>Source: API Standard 521, <i>Pressure-relieving and "
    "Depressuring Systems</i>, which is also published as an identical international standard. In our "
    "own words.</p>"
    "<p>A relief valve is not sized for the worst thing that could happen. It is sized for the largest "
    "of a <b>list</b> of things somebody decided could happen.</p>"
    "<p>The standard sets out the causes to consider. An outlet <b>blocked in</b> while the inlet keeps "
    "flowing. <b>Fire</b> under the vessel. <b>Cooling lost</b>. A control valve <b>failed open</b>. "
    "A heat exchanger tube <b>ruptured</b> between a high pressure side and a low one. Power or "
    "instrument air gone. Thermal expansion in a blocked-in line in the sun.</p>"
    "<p>Each cause gives a <b>relief load</b>. The largest is the <b>governing case</b>, and that is "
    "what the device is sized for. For most vessels the fire case governs. Some causes are set aside "
    "as not credible, <b>with a reason recorded</b>.</p>"
    "<p><b>What the system cannot protect against.</b> It cannot protect against a cause that is not "
    "on the list, and it cannot protect against two credible causes arriving <b>at the same "
    "time</b>, unless somebody considered that combination. The standard is explicit about this.</p>"
    "<p>And so the dangerous document is not the valve record. It is the <b>date</b> on which the "
    "scenario list was last reviewed, measured against everything built since.</p>",
    "Testing a valve proves the valve opens at its set pressure. It proves nothing about whether the "
    "list it was sized from still describes the plant."), 580)
S["rd09-f6"]=lambda: f_realia(tbl("Word study",
    "Scenarios and assumptions",
    ["The phrase","What it does","An example"],
    [["in the event of","names the cause","In the event of a blocked outlet, the load is 24 t/h."],
     ["assuming","states an assumption","Assuming the inlet valve stays open."],
     ["on the assumption that","the same, more formally","On the assumption that cooling is lost."],
     ["the governing case is","names the largest","The governing case is fire."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>is not considered</i> and <i>simultaneously</i>. The second of those "
    "is where most of the argument lives."), 680)
S["rd09-f7"]=lambda: f_matrix(["Relief load, t/h","Status","Last reviewed"],
    [("Blocked outlet",["24","credible","1979"]),
     ("Fire",["<b>41</b>","<b>governing</b>","1979"]),
     ("Loss of cooling",["31","credible","1979"]),
     ("Control valve failed open",["19","credible","1979"]),
     ("Tube rupture",["27","credible","1979"]),
     ("Power failure",["22","credible","1979"]),
     ("Instrument air failure",["&mdash;","not credible: dual supply","1979"]),
     ("Thermal expansion",["&mdash;","not credible: no blocked-in run","1979"]),
     ("<b>&mdash;</b>",["<b>?</b>","<b>&mdash;</b>","<b>&mdash;</b>"])], 640)
S["rd09-f8"]=lambda: f_icons([("noentry","an outlet shut, inlet flowing"),
    ("hot","a fire under a vessel"),("water","cooling lost"),
    ("dashboard","a control valve failed open"),("sun","a blocked-in line in the sun"),
    ("magnifier","which case governs here?")],3)
S["rd09-f9"]=lambda: f_realia(tbl("Relief device record &mdash; V-204, device PSV-204A",
    "Set pressure 14.5 bar g",
    ["Scenario","Relief load, t/h","Note"],
    [["Blocked outlet","24","credible"],
     ["Fire","<b>41</b>","<b>governing case</b>"],
     ["Loss of cooling","31","credible"],
     ["Control valve failed open","19","credible"],
     ["Tube rupture","27","credible"],
     ["Power failure","22","credible"],
     ["Instrument air failure","&mdash;","not credible, dual supply"],
     ["Required capacity","41 t/h","from the governing case"],
     ["Installed capacity","46 t/h","pop tested, certificate current"],
     ["Scenario list last reviewed","<b>1979</b>","&mdash;"],
     ["Changes since","three","new unit 1991, new unit 2004, bunded area 2016"]],
    note="<b>Three changes, no review.</b> The valve is in perfect order."), 660)
S["rd09-f10"]=lambda: f_scene(800,400,
    people=[("yara",180,180,{}),("nour",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("table",150,0,0.95),("map",230,196,0.22),("table",580,0,0.9),
     ("logsheet",660,198,0.2),("thermostat",430,196,0.2)],
    clockat=(60,40,22,2,0))
S["rd09-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Record A",None,
    "<p>PSV-204A. Set pressure 14.5 bar g. Pop tested; certificate current.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Record B",None,
    "<p>The same, plus <b>seven scenarios</b> with their relief loads, the <b>governing case</b> "
    "marked, <b>required 41</b> against <b>installed 46</b>, the <b>date the scenario list was "
    "reviewed</b>, and the <b>three plant changes</b> made since that date.</p>",None),380)[0:3],
    800,300,"Set pressure and test date","And the list it was sized from")
S["rd09-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>All four relief devices on the unit have been pop tested this quarter. Certificates are "
    "current. The unit is compliant.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>The test confirms each device opens at its set pressure, and nothing else. Governing case: "
    "<b>fire, 41 t/h</b>. Required 41, installed 46. <b>The scenario list was last reviewed in "
    "1979.</b> Since then: a unit in 1991, a unit in 2004, and in 2016 a bunded area eighteen meters "
    "from V-204 where a drain used to run. The third of those may change the <b>fire case</b>, which "
    "is the governing one. <b>One request:</b> a scenario review for this unit, with the changes "
    "listed.</p>",None),380)[0:3],
    800,300,"Tested and compliant","Tested, and sized for a 1979 plant")
S["rd09-f13"]=lambda: f_realia(form("Plan your relief note",
    [("What the test confirmed, and what it did not",BLANK),
     ("The governing case, with its load",BLANK),("Required and installed capacity",BLANK),
     ("The date the scenario list was reviewed",BLANK),
     ("Every plant change since, and which assumption it may affect",BLANK),
     ("One request",BLANK)],
    note="Six boxes. One request, not three."), 560)
S["rd09-f14"]=lambda: f_scene(1000,450,
    people=[("yara",60,176,{}),("nour",130,172,{}),("omar",205,176,{}),
     ("haddad",290,172,{}),("samira",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("adeel",590,170,{}),("wei",655,172,{}),
     ("tomas",720,170,{}),("ida",785,172,{}),("lars",845,170,{}),
     ("yusuf",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("logsheet",350,198,0.2),
     ("map",420,196,0.22),("thermostat",550,196,0.2),("table",650,0,1.0),
     ("racking",860,192,0.22),("container",930,196,0.2)],
    board=(40,22,206,112,"SIZED FOR THE LIST",[("1979","reviewed"),("1991","a unit"),("2016","a bund")]),
    clockat=(262,34,22,3,0))
S["rd09-f15"]=lambda: f_chart([("yes, within five years",3),("yes, but longer ago",5),
    ("no",6),("I did not know there were lists",7),("we have no relief devices",2)], unit="operators")
S["rd09-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Four current certificates and a list from 1979",
    "<p><b>A relief device record</b> with a scenario list reviewed in 1979.</p>"
    "<p><b>A plot plan</b> with three newer units and a bunded area drawn in a different pen.</p>"
    "<p><b>Four pop test certificates</b>, all current, all in order.</p>"
    "<p><b>A scenario list</b> with a blank row at the foot and a question mark against it.</p>"
    "<p><b>A photograph of a relief valve</b>, clean, tagged, tested.</p>"
    "<p><i>Everything that was checked was correct. What was never checked again was the list the "
    "checking was against.</i></p>",
    "Seven o'clock. The bund holds liquid eighteen meters from a vessel whose fire case was calculated "
    "when that ground was a drain."), 620)
