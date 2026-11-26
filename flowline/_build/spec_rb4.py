# -*- coding: utf-8 -*-
"""Flowline Book 2 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]
TICK = "<b style='color:#2f6b3a'>&#10003;</b>"
CROSS = "<b style='color:#8a2f2f'>&#10007;</b>"

# ---------------- Unit 10 ----------------
S["rb10-f1"]=lambda: f_icons([("engine","a turbine meter"),("iron","a positive displacement meter"),
    ("scanner","a coriolis meter"),("pipe","a bidirectional pipe prover"),
    ("container","a small volume prover"),("jug","a tank prover"),
    ("transfer","a master meter in series"),("water","a water draw calibration"),
    ("certificate","a meter factor certificate"),("tally","five consecutive runs"),
    ("thermometer","a temperature correction"),("thermostat","a pressure correction"),
    ("timetable","a calculation sequence"),("calculator","a rounding rule"),
    ("form","a custody transfer ticket"),("balance","two tickets, two totals")],4)
S["rb10-f2"]=lambda: f_scene(760,400,
    people=[("nadia",110,176,{}),("omar",320,180,{"seated":True}),("yara",405,180,{}),
     ("samira",490,180,{"seated":True}),("ahmad",570,180,{"seated":True}),
     ("haddad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("calculator",715,198,0.2)],
    board=(30,24,214,110,"SAME READINGS, TWO ANSWERS",[("2,385","our order"),("2,376","their order"),("nine","barrels")]),
    clockat=(262,36,22,13,30))
S["rb10-f3"]=lambda: f_icons([("pipe","a sphere launched into a prover"),
    ("tally","the meter counting as it travels"),("barrier","the sphere arriving"),
    ("logsheet","five runs recorded"),("balance","the five agreeing within a tolerance"),
    ("note","five runs, one factor, and the conditions")],3)
S["rb10-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six meter proving certificates",
    ["The meter","The factor","Date proved","Flow rate proved at","Flow rate it runs at now"],
    blankrows(6,5),
    note="Compare the last two columns. The box at the foot: the meter proved at a rate it has never "
    "run at since."), 640)
S["rb10-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: checking the counter, and agreeing the arithmetic",
    "<p style='font-size:12px;color:#6b6861'>Source: API, <i>Manual of Petroleum Measurement "
    "Standards</i>, Chapter 4, <i>Proving Systems</i>, and Chapter 12, <i>Calculation of Petroleum "
    "Quantities</i>. In our own words.</p>"
    "<p><b>A meter counts. It does not measure.</b> A turbine meter counts blade passes. Something "
    "has to turn the count into a volume, and that something is found by experiment: the <b>meter "
    "factor</b>.</p>"
    "<p><b>Chapter 4 is about finding it.</b> You pass a known volume through the meter from a "
    "<b>prover</b> and compare. The prover's volume is <b>traceable</b> back to a recognized "
    "standard. You repeat the run; if the runs agree within a tolerance you calculate a factor; and "
    "you record it <b>with the conditions it was found at</b>. If the runs do not agree you do not "
    "have a factor &mdash; you have a problem to find.</p>"
    "<p><b>Chapter 12 is about the arithmetic afterwards:</b> the order of the steps, the rounding "
    "rules, how many digits to carry. That sounds like housekeeping. It is the reason two companies "
    "can compute the same cargo and agree.</p>"
    "<p>The same raw readings give slightly different answers depending on the order and where you "
    "round. Each is defensible; only one is the agreed one. Over twenty years that is a transfer of "
    "value in one direction, invisible to both parties, because both tickets look correct.</p>"
    "<p>Chapter 12 does not improve a measurement. <b>A perfectly computed quantity from a badly "
    "proved meter is a precise wrong number</b>, and nobody argues with those.</p>",
    "A meter factor belongs to its conditions, and neither chapter says how often to prove."), 580)
S["rb10-f6"]=lambda: f_realia(tbl("Word study",
    "Conditions",
    ["The word","What it does","An example"],
    [["unless","states the one exception","Do not issue a factor unless the runs agree."],
     ["provided that","allows something on a condition","The factor may be used provided that the rate is in range."],
     ["as long as","the same, more conversational","It holds as long as the flow stays near the proving rate."],
     ["only if","a strong single condition","Accept the run only if it is consecutive."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>in case</i> and <i>otherwise</i>. The negative is already inside "
    "<i>unless</i>."), 640)
S["rb10-f7"]=lambda: f_matrix(["Prover volume, bbl","Meter indicated, bbl","Factor"],
    [("Run 1",["19.9412","19.8994","1.0021"]),
     ("Run 2",["19.9408","19.8988","1.0021"]),
     ("Run 3",["19.9410","19.8994","1.0021"]),
     ("Run 4",["19.9411","<b>19.8617</b>","<b>1.0040</b>"]),
     ("Run 5",["19.9409","19.8991","1.0021"])], 620)
S["rb10-f8"]=lambda: f_icons([("engine","a meter at its proving rate"),
    ("bottleneck","the same meter at a third of that rate"),
    ("certificate","a certificate two years old"),("tally","five consecutive runs in agreement"),
    ("noentry","four runs with a gap in the middle"),
    ("magnifier","does the factor apply?")],3)
S["rb10-f9"]=lambda: f_realia(tbl("Custody transfer ticket &mdash; batch 114",
    "18 March &middot; Sahra to Banias",
    ["What","Figure"],
    [["Gross indicated volume","2,418 barrels"],["Temperature at the meter","31.0 degrees Celsius"],
     ["Density at 15 degrees Celsius","0.8721"],["Pressure at the meter","12 bar"],
     ["Temperature correction factor","0.9857"],["Pressure correction factor","1.0004"],
     ["Meter factor","1.0021"],["Net standard volume","<b>2,385 barrels</b>"],
     ["Calculation standard and edition","named on the reverse"]],
    note="The meter factor has no conditions printed beside it. Six extra characters would prevent an "
    "argument that is otherwise unwinnable."), 600)
S["rb10-f10"]=lambda: f_scene(800,400,
    people=[("nadia",180,180,{"seated":True}),("yara",310,176,{}),("omar",620,180,{})],
    props=[("desk",150,0,1.0),("form",230,198,0.22),("form",290,198,0.22),
     ("board",480,96,0.52),("certificate",700,198,0.2)],
    clockat=(60,40,22,15,0))
S["rb10-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Ticket A",None,
    "<p>Batch 114. Net standard volume <b>2,376 barrels</b>.</p>"
    "<p>Nothing else.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Ticket B",None,
    "<p>Gross indicated 2,418 barrels at 31.0 degrees Celsius; density 0.8721 at 15; each correction "
    "in the order applied; meter factor 1.0021 <b>proved 3 February at 1,100 barrels an hour</b>; net "
    "2,385 barrels; calculation standard and edition named.</p>",None),380)[0:3],
    800,300,"A total","A total you can take apart")
S["rb10-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Their ticket for batch 114 is nine barrels below ours. Recommend we raise a shortfall claim "
    "and withhold acceptance.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Both tickets carry <b>identical</b> raw figures. Ours 2,385, theirs 2,376, a difference of "
    "9 barrels or 0.38 per cent. No measurement differs: we corrected for temperature before applying "
    "the factor and rounded once; they applied the factor first and rounded twice. Our ticket names "
    "one edition of the calculation standard and theirs an earlier one. <b>No shortfall claim until "
    "that is settled.</b></p>",None),380)[0:3],
    800,300,"An accusation","A cause, and no accusation")
S["rb10-f13"]=lambda: f_realia(form("Plan your metering note",
    [("The batch and the date",BLANK),("The raw figures from both tickets",BLANK),
     ("Whether they match",BLANK),("The two net volumes and the difference",BLANK),
     ("The likely cause",BLANK),("What you are asking for before any claim",BLANK)],
    note="Six boxes. Fill the third before you write anything in the fifth."), 560)
S["rb10-f14"]=lambda: f_scene(1000,450,
    people=[("nadia",60,176,{"seated":True}),("yara",130,172,{}),("omar",205,176,{}),
     ("nour",290,172,{}),("samira",365,176,{"seated":True}),("ahmad",440,172,{"seated":True}),
     ("haddad",515,176,{}),("bah",590,170,{}),("lars",655,172,{}),
     ("ida",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("adeel",905,172,{}),("yusuf",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("form",350,198,0.2),
     ("pipe",420,196,0.24),("certificate",550,198,0.2),("table",650,0,1.0),
     ("calculator",860,198,0.2),("shelf",930,96,0.5)],
    board=(40,22,206,112,"SAME READINGS, TWO ANSWERS",[("order","matters"),("rounding","matters"),("raw","first")]),
    clockat=(262,34,22,17,0))
S["rb10-f15"]=lambda: f_chart([("yes, on the ticket",2),("yes, on the certificate only",7),
    ("I do not know",6),("no",4),("we have no factor",2)], unit="operators")
S["rb10-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Nineteen years of correct tickets",
    "<p><b>Two custody transfer tickets</b> side by side, with identical raw figures and totals nine "
    "barrels apart.</p>"
    "<p><b>A proving certificate</b> from two years ago, for a flow rate three times the current "
    "one.</p>"
    "<p><b>A sale contract page</b> naming a calculation standard and no edition.</p>"
    "<p><b>A calculator.</b></p>"
    "<p><i>Both companies are honest. Both are arithmetically correct. The difference is about four "
    "tenths of one per cent, always in the same direction, and nobody has ever raised it.</i></p>",
    "Seven o'clock. Every ticket on both sides looks right."), 600)

# ---------------- Unit 11 ----------------
S["rb11-f1"]=lambda: f_icons([("iron","a pump, boundary including the motor"),
    ("engine","the same pump, boundary excluding it"),
    ("worldmap","a nine-level hierarchy"),("form","a failure record"),
    ("magnifier","a failure mode"),("thread","a failure cause"),
    ("tally","a failure mechanism"),("noentry","a critical failure"),
    ("dashboard","degraded performance"),("eye","an incipient crack"),
    ("clipboard","a corrective work order"),("timetable","a preventive schedule"),
    ("clock","downtime"),("calculator","man-hours"),
    ("crate","a spare part"),("data","two charts from two sites")],4)
S["rb11-f2"]=lambda: f_scene(760,400,
    people=[("wei",110,176,{}),("omar",320,180,{"seated":True}),("ahmad",405,180,{"seated":True}),
     ("samira",485,180,{"seated":True}),("nadia",565,180,{"seated":True}),
     ("tomas",650,180,{})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("iron",715,194,0.24)],
    board=(30,24,214,110,"WHERE DOES THE PUMP END?",[("with motor","eleven"),("without","six"),("same","work orders")]),
    clockat=(262,36,22,14,0))
S["rb11-f3"]=lambda: f_icons([("noentry","a pump that has stopped"),
    ("dashboard","a pump at reduced flow"),("eye","a crack found at inspection"),
    ("iron","a seized bearing"),("jug","a lubrication failure"),
    ("note","three questions, three answers")],3)
S["rb11-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published reliability figures",
    ["The equipment","The figure quoted","Who published it","What counted as a failure","Where the boundary was"],
    blankrows(6,5),
    note="The last two columns are the point of the exercise. The box at the foot: the figure whose "
    "definitions we could not find."), 660)
S["rb11-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: counting failures so that the count means something",
    "<p style='font-size:12px;color:#6b6861'>Source: ISO 14224:2016, <i>Petroleum, petrochemical and "
    "natural gas industries &mdash; Collection and exchange of reliability and maintenance data for "
    "equipment</i>. In our own words.</p>"
    "<p>This standard exists because reliability data from different places could not be put "
    "together. Each site named its equipment differently, drew its edges somewhere else, and counted "
    "different events as failures. The data was real and the comparisons were nonsense.</p>"
    "<p><b>A taxonomy:</b> nine levels, from the industry down to the individual part, so that "
    "everybody fills the same box with the same kind of thing.</p>"
    "<p><b>A boundary:</b> a drawing that says what is inside the equipment unit. Is the driver part "
    "of the pump? The lubrication system? There is no universally right answer. There is only a "
    "written one.</p>"
    "<p><b>A definition of failure:</b> the termination of the ability of an item to perform a "
    "<b>required function</b>. Read the last two words: a pump at half flow has failed if it was "
    "required to deliver full flow, and not if it was not.</p>"
    "<p><b>Three different questions.</b> The <b>mode</b> is how it showed itself. The "
    "<b>mechanism</b> is the physical process. The <b>cause</b> is why. Most work orders record the "
    "mode, sometimes the mechanism, and almost never the cause &mdash; which is the only one that "
    "tells you how to stop it happening again.</p>"
    "<p>It sets no target and no acceptable failure rate, and it does not do the analysis. It makes "
    "comparison <b>possible</b>, not <b>automatic</b>.</p>",
    "The standard says the quality of the data depends on the competence and motivation of the people "
    "recording it. It cannot make somebody write the cause at the end of a long shift."), 580)
S["rb11-f6"]=lambda: f_realia(tbl("Word study",
    "Defining a term",
    ["The form","How formal","An example"],
    [["is defined as","formal, in a standard","Failure is defined as the loss of a required function."],
     ["counts as","plain, and very useful","A pump at half flow counts as a failure here."],
     ["is treated as","plain, slightly hedged","The motor is treated as part of the pump."],
     ["by … we mean","explaining your own usage","By <i>critical</i> we mean it stopped."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>for the purposes of</i> and <i>in other words</i>."), 660)
S["rb11-f7"]=lambda: f_matrix(["Motor inside the boundary","Motor outside it"],
    [("WO 4412 impeller wear",[TICK,TICK]),("WO 4455 motor bearing",[TICK,"&mdash;"]),
     ("WO 4471 seal leak",[TICK,TICK]),("WO 4498 motor winding",[TICK,"&mdash;"]),
     ("WO 4502 coupling bolt",[TICK,TICK]),("WO 4530 motor fan",[TICK,"&mdash;"]),
     ("WO 4561 pump bearing",[TICK,TICK]),("WO 4588 motor overload",[TICK,"&mdash;"]),
     ("WO 4601 casing gasket",[TICK,TICK]),("WO 4633 motor terminal",[TICK,"&mdash;"]),
     ("WO 4660 impeller wear",[TICK,TICK]),
     ("<b>TOTAL</b>",["<b>11</b>","<b>6</b>"])], 620)
S["rb11-f8"]=lambda: f_icons([("noentry","a pump stopped completely"),
    ("dashboard","a pump at reduced flow"),("eye","a crack with no effect yet"),
    ("timer","a valve that closes slowly"),("data","a bearing with rising vibration"),
    ("magnifier","how bad is this failure?")],3)
S["rb11-f9"]=lambda: f_realia(tbl("Failure record &mdash; pump P-104",
    "Sahra train A &middot; 14 March",
    ["Field","Entry"],
    [["Hierarchy","installation / processing plant / crude pumping system / equipment unit"],
     ["Boundary reference","drawing BD-07: driver and lubrication inside; strainer outside"],
     ["Date and time","14 March, 03:20"],
     ["Detection method","operator on rounds, high vibration alarm"],
     ["Failure mode","pump stopped"],
     ["Failure mechanism","inboard bearing seized"],
     ["Failure cause","<b>to be confirmed</b>"],
     ["Classification","critical"],["Downtime","31 hours"],["Man-hours","14"]],
    note="The empty field is the only one that prevents a repeat. It is also the only one that takes "
    "thought at the end of a long shift."), 600)
S["rb11-f10"]=lambda: f_scene(800,400,
    people=[("wei",180,180,{}),("ahmad",300,176,{}),("omar",620,180,{})],
    props=[("table",420,0,0.9),("iron",470,194,0.22),("iron",520,194,0.22),
     ("iron",570,194,0.22),("logsheet",690,198,0.22),("racking",120,170,0.42)],
    clockat=(60,40,22,15,0))
S["rb11-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("History A",None,
    "<p>June 2023, bearing replaced, 12 man-hours. November 2023, bearing replaced, 14. May 2024, "
    "bearing replaced, 13. October 2024, bearing replaced, 15.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("History B",None,
    "<p>The same four, each with the mode, the mechanism, and the cause field as actually filled in: "
    "blank, blank, <i>bearing failure</i>, blank. With a note: <b>all four bearings are on the bench "
    "and have worn identically.</b></p>",None),380)[0:3],
    800,300,"Four repairs","Four repairs and zero investigations")
S["rb11-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Record 1",None,
    "<p>P-104 failed 14 March. Bearing replaced. Pump returned to service 15 March. 14 "
    "man-hours.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Record 2",None,
    "<p>Hierarchy and <b>boundary drawing BD-07</b>. Mode: pump stopped. Mechanism: inboard bearing "
    "seized. <b>Cause: under investigation</b> &mdash; oil sample sent 15 March; initial suspicion "
    "lubricant grade, because all four previous bearings have worn identically (work orders June "
    "2023, November 2023, May 2024, October 2024). Critical. 31 hours. <b>Fifth</b> identical failure "
    "in eighteen months and the first with the cause field filled in.</p>",None),380)[0:3],
    800,300,"A repair","A repair and an investigation")
S["rb11-f13"]=lambda: f_realia(form("Plan your failure record",
    [("The equipment and its boundary reference",BLANK),("The mode",BLANK),
     ("The mechanism",BLANK),("The cause, or an honest unknown with a date",BLANK),
     ("The classification and the downtime",BLANK),("Any previous identical failures",BLANK)],
    note="Six boxes. Check that the fourth is not the second said again."), 560)
S["rb11-f14"]=lambda: f_scene(1000,450,
    people=[("wei",60,176,{}),("ahmad",130,172,{}),("omar",205,176,{}),
     ("tomas",290,172,{}),("samira",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("nour",515,176,{}),("haddad",590,170,{}),("lars",655,172,{}),
     ("ida",720,170,{}),("bah",785,172,{}),("yusuf",845,170,{}),
     ("adeel",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("iron",350,196,0.2),
     ("logsheet",420,198,0.22),("worldmap",550,196,0.22),("table",650,0,1.0),
     ("data",860,196,0.22),("racking",930,166,0.4)],
    board=(40,22,206,112,"WHERE DOES THE PUMP END?",[("mode","how"),("mechanism","what"),("cause","why")]),
    clockat=(262,34,22,17,0))
S["rb11-f15"]=lambda: f_chart([("always",2),("usually",4),("sometimes",6),
    ("almost never",8),("there is no cause field",3)], unit="operators")
S["rb11-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Two sites, two boundaries, one project",
    "<p><b>Four identical worn bearings</b> in a row.</p>"
    "<p><b>A failure history</b> with four blank cause fields.</p>"
    "<p><b>Two reliability charts</b> from two sites: 0.6 failures per pump per year and 1.9.</p>"
    "<p><b>A boundary drawing</b> that was never issued.</p>"
    "<p><i>Site A's boundary excluded the driver, the lubrication system and the local panel. Site B's "
    "included all three. Nobody checked. Site B spent two years improving something it was already "
    "better at.</i></p>",
    "Seven o'clock. Both sites said they followed the same standard, and both were telling the "
    "truth."), 620)

# ---------------- Unit 12 ----------------
S["rb12-f1"]=lambda: f_icons([("tin","Unit 1: a core plug"),("container","Unit 2: a tank"),
    ("racking","Unit 3: a stack"),("timetable","Unit 4: a timeline"),
    ("data","Unit 5: a bending curve"),("cloud","Unit 6: a lightened column"),
    ("data","Unit 7: a declining curve"),("boiler","Unit 8: a separator"),
    ("engine","Unit 9: an injection wellhead"),("pipe","Unit 10: a prover"),
    ("iron","Unit 11: four worn bearings"),("worldmap","a classification pyramid"),
    ("calculator","a probability curve"),("pricetag","a price assumption"),
    ("stamp","a project approval"),("calendar","as of a date")],4)
S["rb12-f2"]=lambda: f_scene(760,400,
    people=[("bah",110,176,{}),("omar",300,180,{"seated":True}),("nadia",378,180,{"seated":True}),
     ("samira",452,180,{"seated":True}),("ahmad",526,180,{"seated":True}),
     ("haddad",600,180,{"seated":True}),("yusuf",672,180,{"seated":True})],
    props=[("desk",288,0,1.0),("board",50,90,0.62),("calculator",725,198,0.18)],
    board=(30,24,214,110,"NOT A QUESTION ABOUT ROCK",[("in place","almost all"),("reserves","one corner"),("decided by","a project")]),
    clockat=(262,36,22,16,0))
S["rb12-f3"]=lambda: f_icons([("tally","the 90 per cent point: proved"),
    ("balance","the 50 per cent point: proved plus probable"),
    ("star","the 10 per cent point: plus possible"),
    ("stamp","a project approved for development"),
    ("noentry","a project on hold"),("note","three numbers, all honest")],3)
S["rb12-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published reserve figures",
    ["Company or country","The reserves figure","The year","System or rule reported under","Price assumption stated?"],
    blankrows(6,5),
    note="The fourth column decides whether they are comparable. The box at the foot: the figure that "
    "changed most between two years, and what caused it."), 660)
S["rb12-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: what a company is allowed to say it has",
    "<p style='font-size:12px;color:#6b6861'>Source: the <i>Petroleum Resources Management "
    "System</i>, published by SPE, the World Petroleum Council, AAPG and SPEE; 2018 revision. In our "
    "own words.</p>"
    "<p>Start with everything down there. Almost none of it will ever be produced.</p>"
    "<p><b>Reserves</b> are discovered, recoverable, <b>commercial</b> and remaining, as of a stated "
    "date. <b>Contingent resources</b> are discovered and recoverable but not yet commercial. "
    "<b>Prospective resources</b> are not yet discovered.</p>"
    "<p><b>Read that again.</b> There are four conditions. Only the first two are about rock.</p>"
    "<p><i>Commercial</i> asks four things. Is there a project? Is there a market? Does it pay at "
    "the price we assume? Will it start soon?</p>"
    "<p><b>So reserves belong to a project, not to a reservoir.</b> Two firms can hold the same rock "
    "and report different reserves. Both are honest.</p>"
    "<p><b>Proved</b> means there is at least a 90 per cent chance we will get that much or more. "
    "<b>Proved plus probable</b> is the 50 per cent level. <b>Plus possible</b> is the 10 per cent "
    "level. These are about the estimate. They are not about the rock.</p>"
    "<p><b>A reserve figure can fall with no oil moving.</b> The price we assume drops. A board puts "
    "a job off. A permit runs out. The oil moves to contingent resources. Nothing underground has "
    "changed.</p>",
    "A set of guidelines, not a reporting regulation. Securities regulators have their own differing "
    "definitions, so one field can honestly carry two numbers."), 580)
S["rb12-f6"]=lambda: f_realia(tbl("Word study",
    "Degrees of certainty",
    ["The expression","How certain","An example"],
    [["at least a 90 per cent probability","the conservative end","At least a 90 per cent probability of 41 million barrels."],
     ["as likely as not","the middle","58 million is as likely to be exceeded as not."],
     ["unlikely to be exceeded","the optimistic end","79 million is unlikely to be exceeded."],
     ["between … and …","a range, with both ends","Between 41 and 79 million barrels."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>is expected to</i> and <i>cannot be ruled out</i>."), 680)
S["rb12-f7"]=lambda: f_matrix(["Discovered","Recoverable now","Commercial today"],
    [("Oil already produced",[TICK,TICK,"&mdash; produced"]),
     ("Pool A, project on production",[TICK,TICK,TICK]),
     ("Pool B, project approved",[TICK,TICK,TICK]),
     ("Pool C, project deferred",[TICK,TICK,CROSS]),
     ("Pool D, no market",[TICK,TICK,CROSS]),
     ("Prospect E, undrilled",[CROSS,CROSS,CROSS])], 640)
S["rb12-f8"]=lambda: f_icons([("engine","oil flowing from a producing well"),
    ("stamp","a discovered pool with an approved project"),
    ("noentry","a discovered pool with the project deferred"),
    ("barrier","a discovered pool with no market"),
    ("map","an undrilled prospect"),("magnifier","which class is this?")],3)
S["rb12-f9"]=lambda: f_realia(tbl("Reserves summary &mdash; Tell Sahra",
    "Effective 31 December &middot; Petroleum Resources Management System, 2018 revision",
    ["","Million barrels","Last year","Change"],
    [["Proved","41","46","<b>&minus;5</b>"],
     ["Proved plus probable","58","63","&minus;5"],
     ["Proved plus probable plus possible","79","84","&minus;5"],
     ["Price and cost basis","board, November","board, previous November","<b>lower</b>"],
     ["Project status","on production; 3 infill wells no longer economic","on production; 3 infill wells economic","&mdash;"],
     ["Oil produced from the affected area","<b>none</b>","&mdash;","&mdash;"]],
    note="The fall is entirely in the price line. The three infill wells have moved to contingent "
    "resources and would return if the assumption were restored."), 620)
S["rb12-f10"]=lambda: f_scene(800,400,
    people=[("bah",180,180,{"seated":True}),("haddad",430,176,{}),("omar",660,180,{})],
    props=[("desk",150,0,1.0),("logsheet",230,198,0.22),("board",500,96,0.56),
     ("notebook",720,198,0.2)],
    clockat=(60,40,22,17,0))
S["rb12-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Summary A",None,
    "<p>Proved reserves for Tell Sahra are <b>41 million barrels</b>, down from 46 million last "
    "year.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Summary B",None,
    "<p>All three certainty levels with their probabilities. The effective date. The system. The "
    "price and cost assumptions and the development plan assumed. The project status. And one line "
    "above the table: <b>the fall is the price assumption and no oil was produced from the affected "
    "area.</b></p>",None),380)[0:3],
    800,300,"One figure and a fall","A figure, its date, its system and its cause")
S["rb12-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Proved reserves for Tell Sahra are 41 million barrels, down from 46 million last year.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p><b>Proved reserves fell by 5 million barrels. No oil was produced from the affected area, and "
    "the cause is the price assumption.</b> Effective 31 December, under the Petroleum Resources "
    "Management System, 2018 revision. Proved 41 &mdash; at least 90 per cent probability of being "
    "equalled or exceeded. Plus probable 58. Plus possible 79. Three infill wells no longer economic; "
    "the 5 million has moved to contingent resources and would return. Those wells have moved three "
    "times in eight years.</p>",None),380)[0:3],
    800,300,"The number","The cause, then the number")
S["rb12-f13"]=lambda: f_realia(form("Plan your reserves note",
    [("The one-line explanation of any change",BLANK),("The field and the effective date",BLANK),
     ("The system used",BLANK),("The three levels, with their probabilities",BLANK),
     ("The assumptions",BLANK),("Where any moved quantity has gone",BLANK)],
    note="Six boxes, and the first one is first for a reason: if they read one line, that is the "
    "line."), 560)
S["rb12-f14"]=lambda: f_scene(1000,450,
    people=[("bah",60,176,{"seated":True}),("haddad",130,172,{}),("omar",205,176,{}),
     ("nour",290,172,{}),("nadia",365,176,{"seated":True}),("samira",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("yusuf",590,170,{}),("lars",655,172,{}),
     ("ida",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("adeel",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("logsheet",350,198,0.22),
     ("worldmap",420,196,0.22),("tin",550,196,0.2),("table",650,0,1.0),
     ("map",860,196,0.24),("shelf",930,96,0.5)],
    board=(40,22,206,112,"FROM RESERVOIR TO TANK",[("41","proved"),("58","plus probable"),("79","plus possible")]),
    clockat=(262,34,22,18,0))
S["rb12-f15"]=lambda: f_chart([("Darcy and permeability",3),("the material balance",6),
    ("the nine decisions",2),("the decline curve",5),("reserves",7)], unit="operators")
S["rb12-f16"]=lambda: f_realia(doc("On a desk at the end of the course",
    "One honest figure, and five weak inputs",
    "<p><b>The book</b>, open at the contents page.</p>"
    "<p><b>A reserves summary</b> with the proved figure circled: 41 million barrels.</p>"
    "<p><b>A core plug</b> on a stand &mdash; five like it, from one well.</p>"
    "<p><b>A pressure history</b> with two missing years, the two the trend changed.</p>"
    "<p><b>A decline curve</b> with two undated workovers inside it.</p>"
    "<p><b>A meter proving certificate</b> from a flow rate no longer used.</p>"
    "<p><b>A failure history</b> with blank cause fields.</p>"
    "<p><i>Every one of those inputs was the best available. The figure was produced honestly and is "
    "almost certainly the right order of magnitude.</i></p>",
    "Seven o'clock. The question is not whether 41 million is right. It is how to write it so that a "
    "reader knows both things at once."), 620)
