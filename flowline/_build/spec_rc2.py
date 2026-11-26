# -*- coding: utf-8 -*-
"""Flowline Book 3 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]
TICK = "<b style='color:#2f6b3a'>&#10003;</b>"
CROSS = "<b style='color:#8a2f2f'>&#10007;</b>"

# ---------------- Unit 4 ----------------
S["rc04-f1"]=lambda: f_icons([("pipe","gas above, liquid below"),
    ("water","waves on the liquid surface"),("tin","a slug filling the pipe"),
    ("spoon","bubbles through the liquid"),("cloud","liquid as a mist in the gas"),
    ("stairwell","a pipe on an upward slope"),("stairwell","a downward slope"),
    ("balance","a holdup fraction"),("calculator","a gas and liquid rate pair"),
    ("container","an acrylic test loop"),("magnifier","an inclinometer"),
    ("boiler","a slug arriving at a separator"),("firealarm","a level alarm"),
    ("map","a flow regime map"),("data","a correlation curve"),
    ("note","five hundred and eighty-four tests")],4)
S["rc04-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("samira",405,180,{"seated":True}),
     ("adeel",490,180,{}),("nadia",570,180,{"seated":True}),("ahmad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("pipe",715,198,0.2)],
    board=(30,24,214,110,"THE GAS GOES FASTER",[("so","liquid piles up"),("uphill","worst"),("rate change","a surge")]),
    clockat=(262,36,22,10,30))
S["rc04-f3"]=lambda: f_icons([("pipe","a smooth interface between gas and liquid"),
    ("water","waves on the interface"),("tin","a slug filling the pipe"),
    ("jug","a frothy plug"),("spoon","bubbles dispersed in liquid"),
    ("note","three groups, several patterns, one correlation")],3)
S["rc04-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six lines carrying more than one phase",
    ["The line","What is in it","Its length","Does it rise and fall","Any surge?"],
    blankrows(6,5),
    note="The box at the foot: the line with the worst profile. The profile of a line decides how "
    "much liquid it holds."), 620)
S["rc04-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: two things in one pipe",
    "<p style='font-size:12px;color:#6b6861'>Source: H. D. Beggs and J. P. Brill, \"A Study of "
    "Two-Phase Flow in Inclined Pipes\", Journal of Petroleum Technology, 1973. In our own words.</p>"
    "<p>Gas and liquid in the same pipe arrange themselves into patterns, and which pattern you get "
    "changes the pressure drop and what arrives at the far end.</p>"
    "<p><b>Segregated:</b> the two phases in layers, gas above and liquid below, smooth or wavy. "
    "<b>Intermittent:</b> bodies of liquid filling the pipe, separated by gas. <b>Distributed:</b> "
    "one phase carried through the other, as bubbles or as a mist.</p>"
    "<p>Which group you are in depends on the gas rate, the liquid rate, the diameter, the fluid "
    "properties and &mdash; the paper's main contribution &mdash; <b>the angle of the pipe</b>.</p>"
    "<p><b>Liquid holdup.</b> The gas moves faster than the liquid, so the liquid spends longer in "
    "the pipe, and at any moment there is <b>more liquid in the line than the flow rates would "
    "suggest</b>. On a line that rises and falls it collects in the low points.</p>"
    "<p><b>Why that matters on a Tuesday.</b> Raise the gas rate and the stored liquid is swept out "
    "ahead of it and arrives as one body. That is a surge: a level alarm, a separator at full, and "
    "possibly liquid reaching equipment built for gas.</p>"
    "<p><b>What was actually tested.</b> <b>Air and water</b>, not oil and gas. Pipes of about one "
    "and one and a half inches, not twelve. A short laboratory loop, not fourteen kilometers at "
    "fifty bar. <b>584 tests</b> across a range of inclinations.</p>",
    "Two accepted methods can give holdup figures that differ by a large factor. A holdup number "
    "with no method named beside it is not a number."), 580)
S["rc04-f6"]=lambda: f_realia(tbl("Word study",
    "Classification under conditions",
    ["The phrase","What it does","An example"],
    [["depending on whether","two alternatives, with a yes or no","The regime changes depending on whether the pipe rises or falls."],
     ["depending on","several alternatives","It depends on the gas rate, the liquid rate and the angle."],
     ["whichever","the one that applies","Use whichever correlation your company standard names."],
     ["according to","by a stated source","The regime is segregated according to this method."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>in which case</i> and <i>either … or</i>. <i>According to this "
    "method</i> is three words that protect you."), 680)
S["rc04-f7"]=lambda: f_matrix(["This method","The other method"],
    [("Regime at the current rate",["intermittent","segregated"]),
     ("Liquid inventory at the low rate, m3",["<b>94</b>","<b>61</b>"]),
     ("Liquid inventory at the high rate, m3",["31","24"]),
     ("Volume swept out on a rate change, m3",["<b>63</b>","<b>37</b>"]),
     ("Which we used",["<b>this one</b>","&mdash;"]),
     ("Why",["being wrong this way costs an hour","being wrong the other way fills a separator"])], 660)
S["rc04-f8"]=lambda: f_icons([("pipe","a smooth interface"),("water","waves"),
    ("tin","a slug filling the pipe"),("spoon","bubbles through the liquid"),
    ("cloud","a mist in fast gas"),("magnifier","which group, and by which method?")],3)
S["rc04-f9"]=lambda: f_realia(tbl("Line profile and holdup &mdash; Sahra inlet line",
    "14.2 km &middot; four low points &middot; 86 m total elevation change",
    ["Gas rate","Liquid inventory, m3","Comment"],
    [["low, current","<b>94</b>","liquid collecting in all four low points"],
     ["medium","58","two low points still holding"],
     ["high","<b>31</b>","mostly swept through"]], numcols=(1,),
    note="Method named at the foot of the sheet. The inventory at the low rate is three times the "
    "inventory at the high rate, and the difference is what arrives when the rate is raised."), 620)
S["rc04-f10"]=lambda: f_scene(800,400,
    people=[("nour",180,180,{}),("haddad",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("desk",560,0,1.0),("logsheet",640,196,0.24),("board",120,96,0.56),
     ("data",420,196,0.24)],
    clockat=(60,40,22,11,0))
S["rc04-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>Liquid inventory in the inlet line: <b>94 cubic meters</b>.</p>"
    "<p>Nothing else.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>94 cubic meters by the 1973 inclined correlation; 61 by a second accepted method. Inventory "
    "at three rates for each. <b>I used the larger figures.</b> Recommended step-up: raise the rate "
    "in three stages over an hour, recording the separator level at each.</p>",None),380)[0:3],
    800,300,"One figure","Two methods and a procedure")
S["rc04-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Separator V-301 is alarming on high level repeatedly. Request level controller tuning and "
    "review of alarm setpoint.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Four alarms, four times. <b>Each within ten minutes of a rate increase</b>, with the four "
    "rate change times given. Inventory 94 at the low rate and 31 at the high, by a named method; a "
    "second method gives 61 and 24. <b>This is stored liquid being swept out, not a controller "
    "fault.</b> Raise the rate in three steps over an hour and record the level. No instrument work "
    "until that has been tried.</p>",None),380)[0:3],
    800,300,"A request for instrument work","A cause, and a free test")
S["rc04-f13"]=lambda: f_realia(form("Plan your two-phase note",
    [("The event times",BLANK),("What happened shortly before each",BLANK),
     ("The line profile in one sentence",BLANK),("The inventory at two rates, with the method",BLANK),
     ("The second method's figures",BLANK),("What you propose to try first",BLANK)],
    note="Six boxes. If the second is blank, the trend screen will fill it."), 560)
S["rc04-f14"]=lambda: f_scene(1000,450,
    people=[("nour",60,176,{}),("haddad",130,172,{}),("omar",205,176,{"seated":True}),
     ("samira",290,172,{"seated":True}),("adeel",365,176,{}),("nadia",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("yusuf",590,170,{}),("ida",655,172,{}),
     ("lars",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("logsheet",350,198,0.22),
     ("data",420,196,0.24),("pipe",550,196,0.22),("table",650,0,1.0),
     ("boiler",860,190,0.3),("map",930,196,0.22)],
    board=(40,22,206,112,"THE GAS GOES FASTER",[("94 m3","at low rate"),("31 m3","at high"),("63 m3","arrives at once")]),
    clockat=(262,34,22,13,0))
S["rc04-f15"]=lambda: f_chart([("yes and we knew why",3),("yes and nobody explained it",7),
    ("I have heard of one",5),("no",4),("I did not know that happened",3)], unit="operators")
S["rc04-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Four alarms, four tunings, one screen",
    "<p><b>A separator level trend</b> with four sharp peaks, each with a rate change marked just "
    "before it.</p>"
    "<p><b>Two correlation printouts</b> giving holdup figures that differ by half.</p>"
    "<p><b>A work order</b> for level controller tuning, signed three times.</p>"
    "<p><b>An elevation profile</b> with four low points.</p>"
    "<p><i>Three competent technicians tuned a controller that was not faulty. The controller is now "
    "tuned worse than when it started.</i></p>",
    "Seven o'clock. The information was on the same screen, on the same day, in the same room."),
    600)

# ---------------- Unit 5 ----------------
S["rc05-f1"]=lambda: f_icons([("iron","a centrifugal pump"),("timer","an impeller"),
    ("container","a casing"),("pencil","a shaft"),("barcode","a bearing"),
    ("thread","a seal"),("stairwell","head"),("data","a falling pump curve"),
    ("data","a rising system curve"),("square","the point where they cross"),
    ("star","the best efficiency point"),("barrier","the preferred region"),
    ("noentry","the minimum flow line"),("jug","a suction vessel and its level"),
    ("thermometer","vapor pressure"),("crate","cavitation damage on a vane")],4)
S["rc05-f2"]=lambda: f_scene(760,400,
    people=[("wei",110,176,{}),("omar",320,180,{"seated":True}),("ahmad",405,180,{"seated":True}),
     ("samira",490,180,{"seated":True}),("nour",570,180,{}),("haddad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("iron",710,192,0.26)],
    board=(30,24,214,110,"WHERE THEY CROSS",[("the pump","falls"),("the system","rises"),("the crossing","is where it runs")]),
    clockat=(262,36,22,11,0))
S["rc05-f3"]=lambda: f_icons([("data","a falling head curve"),
    ("star","an efficiency curve with a peak"),("noentry","a minimum flow line"),
    ("barrier","a preferred operating region"),
    ("stairwell","a required suction head curve rising with flow"),
    ("note","four lines on one sheet")],3)
S["rc05-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six pumps",
    ["The pump","Flow it was bought for","Flow it runs at now","How often it fails","What fails on it"],
    blankrows(6,5),
    note="Compare the second and third columns. The box at the foot: the pump furthest from its design "
    "flow. Is there a pattern?"), 640)
S["rc05-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the curve, the crossing point, and the thing at the inlet",
    "<p style='font-size:12px;color:#6b6861'>Source: API Standard 610, <i>Centrifugal Pumps for "
    "Petroleum, Petrochemical and Natural Gas Industries</i>, published as an identical ISO standard. "
    "In our own words.</p>"
    "<p><b>The crossing point.</b> A pump gives less head as the flow rises: its curve falls. The "
    "system needs more head as the flow rises: that curve climbs. <b>A pump runs where the two curves "
    "cross</b>, and nowhere else.</p>"
    "<p><b>The preferred region.</b> The standard sets a region around the pump's most efficient flow "
    "and expects the rated point to sit within a band of it. The reason is not efficiency; it is "
    "<b>force</b>. Away from that region the pressure around the impeller is uneven, the shaft is "
    "pushed sideways, and the bearings and the seal take a load they were not sized for.</p>"
    "<p><b>Below a minimum flow</b> the liquid recirculates inside the casing, heats up and "
    "vibrates.</p>"
    "<p><b>The thing at the inlet.</b> A pump cannot pull. The pressure available at the inlet above "
    "the liquid's boiling pressure is the <b>net positive suction head available</b>; what the pump "
    "needs is the <b>required</b>. Available must exceed required, with a margin.</p>"
    "<p><b>How the required figure is defined.</b> By a test, whose criterion is the suction "
    "condition at which the pump's head has <b>already fallen by about three per cent</b>. So a pump "
    "at exactly the required figure is cavitating slightly, all day.</p>",
    "A purchase specification. It says nothing about the pump you already have, or whether the flow "
    "it was bought for still exists."), 580)
S["rc05-f6"]=lambda: f_realia(tbl("Word study",
    "Sufficiency",
    ["The phrase","What it says","An example"],
    [["enough","the amount reaches what is needed","There is enough suction head."],
     ["not enough","it falls short","There is not enough margin."],
     ["too + adjective","beyond an acceptable limit","The flow is too low for this pump."],
     ["sufficient","the same as <i>enough</i>, formal","Sufficient margin has been demonstrated."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>barely enough</i> and <i>more than enough</i>. The two words never "
    "go together: never <i>too enough</i>."), 680)
S["rc05-f7"]=lambda: f_line([("60",64),("100",62),("148",59),("200",56),("240",52),
    ("295",46),("340",38),("380",29),("410",19)], unit="m head", mark="295")
S["rc05-f8"]=lambda: f_icons([("stairwell","a vessel high above a pump"),
    ("balance","a vessel almost level with it"),("pipe","a long suction line with four bends"),
    ("thermometer","a hot liquid near its boiling point"),
    ("star","a pump at its best efficiency point"),("magnifier","is there enough?")],3)
S["rc05-f9"]=lambda: f_realia(tbl("Pump P-210 &mdash; datasheet and history",
    "Crude export booster",
    ["","Figure"],
    [["Rated flow","310 m3/h"],["Best efficiency flow","295 m3/h"],
     ["Actual operating flow","<b>148 m3/h</b>"],
     ["Minimum continuous stable flow","92 m3/h"],
     ["Available suction head at this flow","4.1 m"],
     ["Required suction head at this flow","3.8 m"],
     ["Margin","<b>0.3 m</b>"],
     ["Mechanical seals replaced since 2014","<b>11</b>"],
     ["Mean interval","11 months"],
     ["Failure pattern","identical on all eleven faces"]],
    note="The seal is the symptom. Three flows on one line explain eleven failures in four seconds, "
    "and almost no maintenance record contains them."), 600)
S["rc05-f10"]=lambda: f_scene(800,400,
    people=[("wei",180,180,{}),("ahmad",300,176,{}),("omar",620,180,{})],
    props=[("table",150,0,0.95),("iron",230,196,0.2),("iron",280,196,0.2),
     ("iron",330,196,0.2),("data",560,196,0.24),("racking",700,170,0.4)],
    clockat=(60,40,22,12,0))
S["rc05-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>Eleven mechanical seal replacements since 2014, with dates and costs.</p>"
    "<p>Recommendation: trial an upgraded seal.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>The same eleven, beside the three flows: rated 310, best efficiency 295, <b>actual 148</b>. "
    "Suction margin 0.3 meters, and the required figure is defined at a three per cent head drop. "
    "Recommendation: trim the impeller to the actual duty.</p>",None),380)[0:3],
    800,300,"Eleven failures","Eleven failures and a cause")
S["rc05-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Pump P-210 has had repeated mechanical seal failures. Request we trial an upgraded seal from "
    "a different supplier.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Rated 310, best efficiency 295, actual <b>148</b> &mdash; about fifty per cent of best "
    "efficiency. Eleven seals since 2014, mean interval eleven months, all worn identically. Margin "
    "0.3 meters. <b>The seal is the symptom; the flow is the cause.</b> Trim the impeller at the next "
    "planned shutdown; it also recovers power we throw away across a control valve. <b>A better seal "
    "would last longer and fail.</b></p>",None),380)[0:3],
    800,300,"A better component","A condition, and what it costs to fix")
S["rc05-f13"]=lambda: f_realia(form("Plan your pump note",
    [("The pump and its duty",BLANK),("The three flows",BLANK),
     ("The failure history and its interval",BLANK),("The suction head figures and the margin",BLANK),
     ("The cause, in one sentence",BLANK),("The recommendation and what it needs",BLANK)],
    note="Six boxes. If the fifth names a component rather than a condition, rewrite it."), 560)
S["rc05-f14"]=lambda: f_scene(1000,450,
    people=[("wei",60,176,{}),("ahmad",130,172,{}),("omar",205,176,{}),
     ("nour",290,172,{}),("samira",365,176,{"seated":True}),("haddad",440,172,{}),
     ("nadia",515,176,{"seated":True}),("adeel",590,170,{}),("ida",655,172,{}),
     ("lars",720,170,{}),("yusuf",785,172,{}),("tomas",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("iron",350,196,0.2),
     ("data",420,196,0.24),("timer",550,198,0.2),("table",650,0,1.0),
     ("thermostat",860,196,0.22),("racking",930,166,0.4)],
    board=(40,22,206,112,"WHERE THEY CROSS",[("310","bought for"),("295","best efficiency"),("148","runs at")]),
    clockat=(262,34,22,13,0))
S["rc05-f15"]=lambda: f_chart([("on the wall",2),("in a folder I can find",5),
    ("somebody has it",6),("I have never seen one",6),("I did not know pumps had one",3)],
    unit="operators")
S["rc05-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Eleven successes and one question nobody owned",
    "<p><b>Eleven mechanical seal faces</b> in a row, all worn identically.</p>"
    "<p><b>A pump curve sheet</b> with the best efficiency point and the actual flow far apart.</p>"
    "<p><b>Eleven closed work orders</b> in a stack.</p>"
    "<p><b>An invoice</b> for an upgraded seal trial.</p>"
    "<p><b>A control valve</b> throttled to twenty per cent open for a decade.</p>"
    "<p><i>Every replacement was done properly and every work order was closed on time. On the "
    "reliability figures this is a well-maintained machine with a seal problem.</i></p>",
    "Seven o'clock. The field makes less oil than it did in 1998 and nobody has changed the pump."),
    620)

# ---------------- Unit 6 ----------------
S["rc06-f1"]=lambda: f_icons([("container","an inspection tool with sensors"),
    ("pipe","a launcher barrel"),("pipe","a receiver barrel"),
    ("padlock","a magnet assembly against the wall"),("scanner","an ultrasonic sensor"),
    ("thread","a caliper arm"),("crate","a dent in a pipe"),
    ("magnifier","a patch of metal loss"),("torch","a weld anomaly"),
    ("data","a signal peak in a data trace"),("logsheet","a feature list"),
    ("balance","a tolerance"),("tally","a confidence percentage"),
    ("iron","an excavation with a pit gauge"),("spreadsheet","reported against measured"),
    ("note","the absence of a feature")],4)
S["rc06-f2"]=lambda: f_scene(760,400,
    people=[("adeel",110,176,{}),("omar",320,180,{"seated":True}),("tomas",405,180,{}),
     ("samira",490,180,{"seated":True}),("nour",570,180,{"seated":True}),
     ("ahmad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("magnifier",715,198,0.2)],
    board=(30,24,214,110,"ONE FIGURE, THEN A RANGE",[("32%","reported"),("+/- 10","tolerance"),("22 to 42","the truth")]),
    clockat=(262,36,22,11,30))
S["rc06-f3"]=lambda: f_icons([("noentry","a sensor over a shallow pit: no signal"),
    ("data","a sensor over a deep pit: a clear signal"),
    ("magnifier","a feature detected but wrongly identified"),
    ("balance","a feature sized too small"),
    ("iron","a dig confirming a deeper pit than reported"),
    ("note","detection, identification, sizing, and silence")],3)
S["rc06-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six inspection reports, any kind",
    ["The asset","What was inspected","Deepest feature reported","Tolerance quoted","Verification dig?"],
    blankrows(6,5),
    note="The fourth and fifth columns are the point of the exercise. The box at the foot: the report "
    "with no tolerance on it."), 640)
S["rc06-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the machine inside the pipe, and what its report says",
    "<p style='font-size:12px;color:#6b6861'>Source: API Standard 1163, <i>In-line Inspection Systems "
    "Qualification</i>, read alongside API RP 1160. In our own words.</p>"
    "<p>An inspection tool travels inside the pipeline, carried by the product, with sensors against "
    "the wall. Weeks later you get a <b>feature list</b>: a position, a type and a depth for each "
    "thing it found.</p>"
    "<p><b>The standard is about the whole system</b>, not the machine: the tool, the procedures, the "
    "software, the analysts and the validation, qualified together. A perfect tool with a poor analyst "
    "produces a poor report.</p>"
    "<p><b>Three numbers behind every depth.</b> A <b>tolerance</b> &mdash; how close the reported "
    "depth is expected to be. A <b>confidence</b> &mdash; commonly eighty per cent, which means about "
    "one feature in five may fall outside the band, and when one does, the tool has performed to "
    "specification. And a <b>detection threshold</b>, below which a feature is not reliably reported "
    "at all.</p>"
    "<p>So <i>thirty-two per cent</i> is really <i>an estimate of thirty-two, expected to lie between "
    "about twenty-two and forty-two, four times out of five</i>. For a decision, use <b>the top of "
    "the range</b>.</p>"
    "<p><b>The verification dig</b> is the only way to know whether the tool performed on your pipe. "
    "It is the step most often reduced when a schedule tightens.</p>"
    "<p><b>And the empty part of the report.</b> The absence of a feature from a report is <b>not "
    "evidence of the absence of a feature from the pipe</b>.</p>",
    "A clean report is good news. It is not the same as a clean pipe, and the difference has killed "
    "people."), 580)
S["rc06-f6"]=lambda: f_realia(tbl("Word study",
    "Reporting with tolerance",
    ["The phrase","What it adds","An example"],
    [["reported as","it is a report, not a measurement","The feature is reported as 32 per cent."],
     ["sized at","the analysis gave it this size","It is sized at 32 per cent wall loss."],
     ["within plus or minus","the band","Within plus or minus 10 per cent of wall thickness."],
     ["at a confidence of","how often the band holds","At a confidence of 80 per cent."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>no feature was reported</i> and <i>below the detection "
    "threshold</i>."), 680)
S["rc06-f7"]=lambda: f_matrix(["Reported depth","Measured depth","Difference"],
    [("Feature at km 2.1",["21%","24%","+3 inside"]),
     ("Feature at km 4.4",["26%","22%","&minus;4 inside"]),
     ("Feature at km 6.3",["32%","<b>39%</b>","<b>+7 inside</b>"]),
     ("Feature at km 7.8",["18%","19%","+1 inside"]),
     ("Feature at km 12.6",["24%","<b>35%</b>","<b>+11 outside</b>"]),
     ("Feature at km 13.9",["29%","<b>42%</b>","<b>+13 outside</b>"])], 640)
S["rc06-f8"]=lambda: f_icons([("balance","a reported feature with a tolerance"),
    ("noentry","a reported feature with no tolerance"),
    ("note","a blank section with a note explaining poor data"),
    ("square","a blank section with no note"),
    ("iron","a dig confirming a reported depth"),
    ("magnifier","what does this tell you?")],3)
S["rc06-f9"]=lambda: f_realia(tbl("Inspection summary &mdash; export line 12, run 8 March",
    "Magnetic flux leakage &middot; depth within plus or minus 10 per cent of wall thickness at 80 per cent confidence",
    ["Position, km","Type","Reported depth","Upper bound"],
    [["6.3","metal loss","32%","<b>42%</b>"],["12.6","metal loss","29%","39%"],
     ["4.4","metal loss","26%","36%"],["13.9","metal loss","24%","34%"],
     ["2.1","metal loss","21%","31%"],["7.8","metal loss","18%","28%"],
     ["<b>9.1 to 11.0</b>","<b>poor data</b>","<b>&mdash;</b>","<b>&mdash;</b>"]],
    note="Action limit 40 per cent. One feature crosses it at its upper bound. 1.9 kilometers were "
    "not effectively inspected, including the wadi crossing."), 620)
S["rc06-f10"]=lambda: f_scene(800,400,
    people=[("adeel",180,180,{}),("tomas",300,176,{}),("haddad",620,180,{})],
    props=[("desk",120,0,1.0),("logsheet",200,196,0.24),("map",540,194,0.28),
     ("board",440,96,0.5),("container",700,190,0.3)],
    clockat=(60,40,22,12,0))
S["rc06-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Summary A",None,
    "<p>Ten deepest features, with reported depths: 32, 29, 26, 24, 21, 18 per cent and four "
    "below.</p>"
    "<p>Deepest 32 per cent. Limit 40.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Summary B",None,
    "<p>The same ten with the <b>upper bound</b> beside each: 42, 39, 36, 34, 31, 28. The tolerance "
    "and confidence quoted. And the poor-data sections with their lengths and locations: <b>1.9 km, "
    "kilometers 9.1 to 11.0, the wadi crossing</b>.</p>",None),380)[0:3],
    800,300,"None cross the limit","One crosses the limit, and 1.9 km is blank")
S["rc06-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>The 2025 in-line inspection of export line 12 is complete. Deepest feature 32 per cent wall "
    "loss, below our 40 per cent limit. No further action required.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Specification quoted. Deepest feature <b>reported 32, upper bound 42</b>, against a 40 per "
    "cent limit &mdash; so it crosses at its upper bound and is an action. <b>1.9 kilometers "
    "classified as poor data</b>, kilometers 9.1 to 11.0, the wettest ground on the route. Plan: "
    "excavate six features and measure by hand. <b>If more than two fall outside the tolerance we "
    "will not use the remainder of the report.</b></p>",None),380)[0:3],
    800,300,"No further action","An action, a blank and a rejection criterion")
S["rc06-f13"]=lambda: f_realia(form("Plan your inspection note",
    [("The tool and the run date",BLANK),("The performance specification",BLANK),
     ("The deepest feature: reported, upper bound, action limit",BLANK),
     ("The poor-data lengths and locations",BLANK),("The verification plan",BLANK),
     ("The criterion for rejecting the report",BLANK)],
    note="Six boxes. Say what is in that part of the line."), 560)
S["rc06-f14"]=lambda: f_scene(1000,450,
    people=[("adeel",60,176,{}),("tomas",130,172,{}),("omar",205,176,{}),
     ("haddad",290,172,{}),("samira",365,176,{"seated":True}),("nour",440,172,{}),
     ("ahmad",515,176,{"seated":True}),("nadia",590,170,{}),("ida",655,172,{}),
     ("lars",720,170,{}),("wei",785,172,{}),("yusuf",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("container",345,190,0.3),
     ("logsheet",430,198,0.22),("map",550,194,0.24),("table",650,0,1.0),
     ("magnifier",860,198,0.2),("iron",930,194,0.22)],
    board=(40,22,206,112,"A BLANK IS NOT A RESULT",[("1.9 km","not inspected"),("the wadi","wettest ground"),("the report","says nothing")]),
    clockat=(262,34,22,14,0))
S["rc06-f15"]=lambda: f_chart([("always",2),("sometimes",5),("only the engineers",6),
    ("never",7),("I had not thought of it",4)], unit="operators")
S["rc06-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "One number on a summary, and an appendix nobody printed",
    "<p><b>An inspection summary</b> with a clean headline: deepest feature 32 per cent, limit 40.</p>"
    "<p><b>An appendix page</b> listing 1.9 kilometers of poor data at the wadi crossing.</p>"
    "<p><b>A map</b> with that section shaded.</p>"
    "<p><b>A feature list</b> with reported depths and no upper bound column.</p>"
    "<p><i>The vendor's report was honest and complete. The summary that went to the committee had "
    "one number on it. The feature was never dug up and the wadi crossing was never re-run.</i></p>",
    "Seven o'clock. Four years later there is still no information about that 1.9 kilometers."),
    620)
