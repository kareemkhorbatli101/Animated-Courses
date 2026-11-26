# -*- coding: utf-8 -*-
"""Flowline Book 1 figure specs, Units 10 to 12."""
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
S["ra10-f1"]=lambda: f_icons([("dashboard","a gauge"),("clock","a dial"),
    ("tally","a needle"),("magnifier","a reading"),("thermostat","pressure"),
    ("thermometer","temperature"),("water","a level"),("window","a sight glass"),
    ("tray","innage"),("container","outage"),("square","a datum"),
    ("signpost","a reference point"),("thread","a tape"),("key","a bob"),
    ("logsheet","a log"),("data","a trend")],4)
S["ra10-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("samira",410,180,{"seated":True}),
     ("nadia",495,180,{"seated":True}),("ahmad",580,180,{"seated":True})],
    props=[("desk",295,0,1.0),("board",50,90,0.62),("container",650,186,0.42),
     ("thread",720,198,0.22)],
    board=(30,24,214,110,"TWO ARROWS, ONE TANK",[("up","innage"),("down","outage"),("both","correct")]),
    clockat=(262,36,22,11,30))
S["ra10-f3"]=lambda: f_icons([("dashboard","a pressure gauge, with its unit on the face"),
    ("thermometer","a thermometer in a well"),("window","a sight glass with a level in it"),
    ("thread","a tape and bob on the datum plate"),
    ("scanner","a transmitter with a calibration label"),
    ("logsheet","the log the reading ends up in")],3)
S["ra10-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six gauges on your own plant",
    ["The gauge","What it measures","The unit","Where it is mounted","Date on the calibration label"],
    blankrows(6,5),
    note="The box at the foot: the gauge with no label at all, and what you write in a log when "
    "you read it."), 640)
S["ra10-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for new operators: what a level reading is a reading of",
    "<p style='font-size:12px;color:#6b6861'>Source: API, <i>Manual of Petroleum Measurement "
    "Standards</i>, Chapter 3, <i>Tank Gauging</i>. In our own words.</p>"
    "<p>A level is not a number. It is a <b>distance between two points</b>. Most of the standard "
    "is about fixing those two points.</p>"
    "<p>The <b>datum plate</b> is a plate on the tank bottom, under the hatch. The bob touches "
    "it.</p>"
    "<p>The <b>reference gauge point</b> is a mark at the hatch. Every outage is measured down "
    "from it.</p>"
    "<p><b>Innage</b> is the depth of liquid, measured <b>up</b> from the datum plate. "
    "<b>Outage</b> is the empty space, measured <b>down</b> from the mark.</p>"
    "<p>Both are right. They are not the same. In a twelve meter tank, 4.6 meters of innage and "
    "4.6 meters of outage are about seven and a half meters of oil apart. <b>Write which one you "
    "used.</b></p>"
    "<p>A level is not a volume either. The tank's own <b>capacity table</b> turns one into the "
    "other. Two tanks the same size have different tables, because steel is not made to the "
    "nearest liter.</p>"
    "<p>The standard assumes a current table, a sound datum plate and calibrated equipment.</p>",
    "A zero can mean an empty line, a shut valve or a dead gauge. Find out which."), 580)
S["ra10-f6"]=lambda: f_realia(tbl("Word study",
    "The pattern, and what follows it",
    ["The pattern","What follows it","An example"],
    [["rose to","the new value","The level rose to 4.4 meters."],
     ["rose by","the size of the change","The level rose by 1.3 meters."],
     ["fell to","the new value","The pressure fell to 12 bar."],
     ["fell by","the size of the change","The pressure fell by 4 bar."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>held steady at</i> and <i>climbed from &hellip; to</i>. One "
    "letter separates <i>by</i> and <i>to</i>, and about three meters of oil."), 600)
S["ra10-f7"]=lambda: f_line([("06",14.2),("07",14.2),("08",14.1),("09",14.2),
    ("10",15.0),("11",16.4),("12",17.9),("13",12.1),("14",11.8),
    ("15",11.9),("16",11.8),("17",11.8)], unit="bar", mark="12")
S["ra10-f8"]=lambda: f_icons([("pipe","an empty line, and a gauge at zero"),
    ("padlock","a shut isolation valve, and a gauge at zero"),
    ("noentry","a failed gauge, at zero"),("tally","a bent needle"),
    ("water","a gauge with liquid behind the glass"),
    ("magnifier","which zero is this?")],3)
S["ra10-f9"]=lambda: f_realia(tbl("Hourly log &mdash; separator skid A, 12 March",
    "Twelve hours, four columns",
    ["Hour","Separator pressure, bar","Separator temperature, C","Tank 2 level, m"],
    [["06:00","14.2","47","3.1"],["07:00","14.2","47","3.2"],
     ["08:00","14.1","48","3.4"],["09:00","14.2","48","3.5"],
     ["10:00","<b>0</b>","48","3.7"],["11:00","<b>0</b>","49","3.9"],
     ["12:00","<b>0</b>","49","4.1"],["13:00","<b>0</b>","49","4.2"],
     ["14:00","11.8","48","4.4"],["15:00","11.9","48","4.4"]], numcols=(1,2,3),
    note="Four hours of zero, with four sets of initials beside them. The separator was running "
    "the whole time."), 620)
S["ra10-f10"]=lambda: f_scene(800,400,
    people=[("omar",150,180,{}),("samira",260,176,{}),("haddad",420,182,{})],
    props=[("desk",400,0,1.0),("logsheet",470,196,0.24),("dashboard",580,190,0.34),
     ("padlock",660,198,0.2),("container",720,186,0.4)],
    clockat=(60,40,22,12,0))
S["ra10-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Sheet A",None,
    "<p>10:00 &nbsp;0<br>11:00 &nbsp;0<br>12:00 &nbsp;0<br>13:00 &nbsp;0</p>"
    "<p>Four initials. Four correct readings of a gauge.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Sheet B",None,
    "<p>10:00 &nbsp;0 &mdash; <i>gauge isolation valve found closed, reported</i><br>"
    "11:00 &nbsp;n/a &mdash; <i>awaiting instrument tech</i><br>"
    "12:00 &nbsp;n/a<br>13:00 &nbsp;11.9 &mdash; <i>valve reopened 13:40, reading restored</i></p>",
    None),380)[0:3],
    800,300,"Four zeros","One zero and a cause")
S["ra10-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Entry 1",None,
    "<p>14.2 &nbsp; 47 &nbsp; 3.1</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Entry 2",None,
    "<p>Separator pressure 14.2 bar gauge. Separator temperature 47 degrees Celsius. Tank 2 "
    "level 3.1 meters innage from the datum plate, manual tape. Tank 2 automatic gauge reads 3.0; "
    "the difference is 0.1 and I have noted it rather than chosen one.</p>",None),380)[0:3],
    800,300,"Three bare figures","Three figures, their units and one disagreement")
S["ra10-f13"]=lambda: f_realia(form("Plan your log entry",
    [("The time",BLANK),("Each reading, with its unit",BLANK),
     ("The reference point for each",BLANK),("The direction of change",BLANK),
     ("Anything that did not look right",BLANK),("Who I told",BLANK)],
    note="Six boxes. The fifth one is the box that turns a log into a record."), 540)
S["ra10-f14"]=lambda: f_scene(1000,450,
    people=[("omar",60,176,{}),("samira",130,172,{}),("nadia",205,176,{}),
     ("nour",290,172,{}),("ahmad",365,176,{"seated":True}),("yusuf",440,172,{"seated":True}),
     ("adeel",515,176,{"seated":True}),("haddad",590,170,{}),("lars",655,172,{}),
     ("ida",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("dashboard",345,190,0.32),
     ("padlock",420,198,0.2),("container",545,184,0.42),("table",650,0,1.0),
     ("logsheet",860,198,0.22),("shelf",930,96,0.5)],
    board=(40,22,206,112,"WHAT IS A ZERO?",[("empty line","maybe"),("shut valve","maybe"),("dead gauge","maybe")]),
    clockat=(262,34,22,12,0))
S["ra10-f15"]=lambda: f_chart([("nothing",6),("the unit",5),("the calibration date",3),
    ("the last reading",7),("all of them",2)], unit="operators")
S["ra10-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Four zeros, four initials, four hours",
    "<p><b>A log sheet</b> with four consecutive zeros in the pressure column, each with a set of "
    "initials beside it.</p>"
    "<p><b>A pressure gauge</b> lying on its side, with the small isolation valve beneath it "
    "closed.</p>"
    "<p><b>A work order</b> raised at 13:45 to reopen the valve.</p>"
    "<p><b>A glass of tea</b> going cold.</p>"
    "<p><i>Four operators read the gauge correctly and wrote down what it said. Nobody asked what "
    "a zero on a running separator could possibly mean.</i></p>",
    "Seven o'clock. A log full of correct readings and no information in it at all."), 600)

# ---------------- Unit 11 ----------------
S["ra11-f1"]=lambda: f_icons([("hot","a flare"),("roof","a stack"),("hot","a flame"),
    ("candle","a pilot"),("torch","to burn"),("wind","to vent"),
    ("timetable","routine"),("timer","non-routine"),("barrier","a relief valve"),
    ("pipe","a header"),("recycle","to recover"),("transfer","to reinject"),
    ("cloud","associated gas"),("container","a volume"),("calculator","an estimate"),
    ("signature","an initiative")],4)
S["ra11-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("yusuf",410,180,{"seated":True}),
     ("samira",495,180,{"seated":True}),("nadia",580,180,{"seated":True})],
    props=[("desk",295,0,1.0),("board",50,90,0.62),("hot",660,194,0.3),("camera",710,198,0.22)],
    board=(30,24,214,110,"THREE REASONS, ONE TARGET",[("safety","nobody stops it"),("non-routine","sometimes"),("routine","the target")]),
    clockat=(262,36,22,12,0))
S["ra11-f3"]=lambda: f_icons([("barrier","a relief valve lifting into the header"),
    ("timer","a plant being depressurized for maintenance"),
    ("engine","a wellhead with gas and nowhere to send it"),
    ("pipe","a gas pipeline that does not exist here"),
    ("transfer","a reinjection compressor"),
    ("note","three reasons, one target")],3)
S["ra11-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published flaring figures",
    ["The country","The flaring volume","The year","The source","Measured or estimated"],
    blankrows(6,5),
    note="The box at the foot: the two figures that disagreed most. Almost none of them came from "
    "a meter."), 640)
S["ra11-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for new operators: why the stack is lit, and who is counting",
    "<p style='font-size:12px;color:#6b6861'>Source: the World Bank's <i>Zero Routine Flaring by "
    "2030</i> initiative, launched 2015, and the annual <i>Global Gas Flaring Tracker Report</i>. "
    "In our own words.</p>"
    "<p>There are three reasons a flare burns.</p>"
    "<p><b>Safety flaring.</b> A relief valve lifts. A plant has to be let down in a hurry. The "
    "gas must go somewhere, and a flame is better than a cloud.</p>"
    "<p><b>Non-routine flaring.</b> Start-up, shutdown, maintenance, a compressor trip.</p>"
    "<p><b>Routine flaring.</b> Gas comes up with the oil every day and there is nowhere to put "
    "it.</p>"
    "<p><b>Only the third one is the target.</b> Nobody is asking for the first to stop. A flare "
    "is a safety device.</p>"
    "<p>Routine flaring happens because using the gas needs a pipeline, a plant, a power station "
    "or a compressor. Each one is an investment. Where the oil is worth more, the gas gets "
    "burned.</p>"
    "<p>The reported world total has been about 140 to 150 billion cubic meters a year for over "
    "ten years. It has not fallen much.</p>"
    "<p>The initiative is <b>voluntary</b>. The volumes are <b>satellite estimates</b>, not meter "
    "readings.</p>",
    "A volume figure says nothing about how cleanly the gas burned."), 580)
S["ra11-f6"]=lambda: f_realia(tbl("Word study",
    "Which half comes first",
    ["The word","Which half comes first","An example"],
    [["because","the result, then the reason","The gas is flared because there is no pipeline."],
     ["so","the reason, then the result","There is no pipeline, so the gas is flared."],
     ["since","the reason, then the result","Since there is no pipeline, the gas is flared."],
     ["as a result","the reason, then the result","There is no pipeline. As a result, the gas is flared."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>therefore</i> and <i>that is why</i>. Not <i>because of there "
    "is</i>."), 620)
S["ra11-f7"]=lambda: f_line([("y1",142),("y2",145),("y3",147),("y4",143),
    ("y5",148),("y6",145),("y7",144),("y8",150),("y9",142),
    ("y10",144),("y11",148),("y12",148)], unit="bcm", mark="y5")
S["ra11-f8"]=lambda: f_icons([("barrier","a relief valve lifting"),
    ("timer","a plant being depressurized"),("engine","a wellhead with no outlet"),
    ("iron","a compressor with a missing part"),("camera","a bright spot from orbit"),
    ("magnifier","which kind is this?")],3)
S["ra11-f9"]=lambda: f_realia(tbl("Flaring log &mdash; Sahra central processing facility, 12 March",
    "Twelve hours, four columns",
    ["Hour","Estimated rate, cubic meters a day","Reason code","Kind"],
    [["06:00","4,000","PL-01 pilot and purge","routine"],
     ["07:00","4,000","PL-01 pilot and purge","routine"],
     ["08:00","4,000","PL-01 pilot and purge","routine"],
     ["09:00","6,200","RV-12 relief lift 09:40","safety"],
     ["10:00","48,000","C-202 off line","non-routine"],
     ["11:00","48,000","C-202 off line","non-routine"],
     ["12:00","48,000",BLANK,BLANK],
     ["13:00","48,000","C-202 off line","non-routine"]], numcols=(1,),
    note="One hour has no reason and no kind. C-202 has been off line since 14 March of last "
    "year, and the word <i>non-routine</i> has not changed since."), 620)
S["ra11-f10"]=lambda: f_scene(800,400,
    people=[("samira",150,180,{"seated":True}),("haddad",260,176,{}),("nour",430,182,{})],
    props=[("desk",120,0,1.0),("logsheet",200,196,0.24),("dashboard",560,190,0.34),
     ("board",640,100,0.5),("hot",740,194,0.28)],
    clockat=(60,40,22,13,0))
S["ra11-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Log A",None,
    "<p>Every hour of the month coded <b>non-routine</b>, reason C-202 off line. 744 hours. "
    "One reason, repeated.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Log B",None,
    "<p>First week coded non-routine, reason C-202 trip. From the eighth, coded <b>routine</b>, "
    "with a note: outage no longer temporary, impeller on order, superintendent informed.</p>",
    None),380)[0:3],
    800,300,"A trip that never ended","A trip that became normal, in writing")
S["ra11-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>The flare was bigger today than yesterday. The compressor is still down. Coded as "
    "non-routine like last month.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>09:40 to 18:00: second-stage compressor C-202 off line, unavailable since 14 March, "
    "awaiting impeller. Associated gas routed to the flare header. Estimated rate 48,000 cubic "
    "meters a day, from the separator gas meter, not from the flare. Coded <b>routine</b> from "
    "today, changed from non-routine: the outage is no longer temporary. Superintendent informed. "
    "Part order reference requested.</p>",None),380)[0:3],
    800,300,"The size, with no reason","A reason, a source and a change of code")
S["ra11-f13"]=lambda: f_realia(form("Plan your flaring note",
    [("The hours",BLANK),("The cause",BLANK),("The kind",BLANK),
     ("The estimated rate, and its source",BLANK),("What changed since last time",BLANK),
     ("Who was told",BLANK)],
    note="Six boxes. The fifth one is the box that puts a part on an order."), 540)
S["ra11-f14"]=lambda: f_scene(1000,450,
    people=[("samira",60,176,{"seated":True}),("omar",130,172,{"seated":True}),
     ("nour",205,176,{}),("haddad",290,172,{}),("yusuf",365,176,{}),
     ("nadia",440,172,{"seated":True}),("adeel",515,176,{"seated":True}),
     ("ahmad",590,170,{}),("lars",655,172,{}),("ida",720,170,{}),
     ("wei",785,172,{}),("tomas",845,170,{}),("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("logsheet",350,198,0.22),
     ("dashboard",420,192,0.3),("hot",555,192,0.28),("table",650,0,1.0),
     ("iron",860,198,0.22),("shelf",930,96,0.5)],
    board=(40,22,206,112,"THREE REASONS, ONE TARGET",[("safety","keep it"),("non-routine","sometimes"),("routine","stop it")]),
    clockat=(262,34,22,18,0))
S["ra11-f15"]=lambda: f_chart([("waste",8),("pollution",7),("a safety device",2),
    ("a sign the plant is working",4),("they do not think about it",3)], unit="answers")
S["ra11-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A trip in March, and a word that did not move",
    "<p><b>A flaring log</b> with three hours coded routine and a date in March circled.</p>"
    "<p><b>A photograph of the flare</b> taken from the road.</p>"
    "<p><b>A line chart of world flaring volume,</b> broadly flat for twelve years.</p>"
    "<p><b>A spare impeller</b>, still in its crate.</p>"
    "<p><i>The impeller was in the stores the whole time, waiting for a shutdown window. For "
    "eight months the word in the log said temporary.</i></p>",
    "Seven o'clock. Nobody lied. Changing a word changes nothing physical, and it is the only "
    "thing that puts a part on an order."), 600)

# ---------------- Unit 12 ----------------
S["ra12-f1"]=lambda: f_icons([("tin","Unit 1: the barrel"),("thermometer","Unit 2: sixty degrees"),
    ("engine","Unit 3: the wellhead"),("shift","Unit 4: the shift rota"),
    ("note","Unit 5: nine rules"),("gloves","Unit 6: the gloves"),
    ("danger","Unit 7: the detector"),("form","Unit 8: the permit"),
    ("meeting","Unit 9: the briefing"),("dashboard","Unit 10: the gauge"),
    ("hot","Unit 11: the flare"),("logsheet","Unit 12: the handover"),
    ("data","two lines on a chart"),("tally","a counted event"),
    ("star","a tick"),("noentry","a cross")],4)
S["ra12-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",300,180,{"seated":True}),("samira",380,180,{"seated":True}),
     ("ahmad",455,180,{"seated":True}),("yusuf",530,180,{"seated":True}),
     ("nadia",605,180,{"seated":True})],
    props=[("desk",285,0,1.0),("board",50,90,0.62),("book",680,198,0.24),("data",720,196,0.24)],
    board=(30,24,214,110,"TWO COLUMNS",[("already happened","certain"),("likely next","uncertain"),("which","do you count?")]),
    clockat=(262,36,22,16,0))
S["ra12-f3"]=lambda: f_icons([("tally","a counted release"),
    ("note","a near miss recorded"),("deadline","an overdue inspection"),
    ("certificate","a training record"),("inventory","a backlog list"),
    ("timer","late and certain, early and uncertain")],3)
S["ra12-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published numbers, and what each one hides",
    ["The number","Leading or lagging","Where it came from","What it does not tell you"],
    blankrows(6,4),
    note="The box at the foot: the number that impressed us least. The fourth column is the hard "
    "one, and it is the only one that matters."), 620)
S["ra12-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for new operators: what gets counted, and what counting cannot do",
    "<p style='font-size:12px;color:#6b6861'>Source: International Association of Oil and Gas "
    "Producers, Report 456, <i>Process safety &mdash; recommended practice on key performance "
    "indicators</i>, revised 2018. In our own words.</p>"
    "<p>There are four <b>tiers</b> of indicator. The first two count events. The last two count "
    "the state of the system that is meant to stop them.</p>"
    "<p><b>Tier 1.</b> A loss of containment of greater consequence.<br>"
    "<b>Tier 2.</b> A loss of containment of lesser consequence.<br>"
    "<b>Tier 3.</b> A challenge to a safety system: a relief valve lifting, a trip, an alarm.<br>"
    "<b>Tier 4.</b> Operating discipline: overdue inspections, failed tests, permit quality.</p>"
    "<p>Tiers 1 and 2 are <b>lagging</b>. Certain, and about the past. Tiers 3 and 4 are "
    "<b>leading</b>. Uncertain, and about what is coming.</p>"
    "<p>Tier 1 counts are given as a <b>rate</b>: events per million hours worked. A rate without "
    "its hours is not a number.</p>"
    "<p>Now the part to remember. <b>A plant can report no Tier 1 events for years and be in "
    "serious trouble.</b> A refinery that killed fifteen people in 2005 had excellent personal "
    "injury figures first.</p>"
    "<p>The tiers rest on <b>thresholds</b>, and a person estimating a quantity knows where the "
    "threshold is.</p>",
    "Tier 4 counts the paperwork nobody enjoys. That is why it is useful and why it is "
    "unpopular."), 580)
S["ra12-f6"]=lambda: f_realia(tbl("Word study",
    "The phrase, and what it hands over",
    ["The phrase","What it hands over","An example"],
    [["as of now","the state at this moment","As of now, C-202 is off line."],
     ["still open","something unfinished","Permit 4471 is still open."],
     ["changed since","what moved on your shift","Tank 2 changed since 06:00: 3.1 up to 4.4."],
     ["left for you","what you hand on deliberately","I have left the second sample for you."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>watch</i> and <i>I do not know</i>. A handover needs the second "
    "one more than almost any other conversation does."), 620)
S["ra12-f7"]=lambda: f_line([("1",44),("2",58),("3",71),("4",86),("5",103),
    ("6",118),("7",137),("8",155),("9",174),("10",193),("11",208),("12",221)],
    unit="overdue", mark="11")
S["ra12-f8"]=lambda: f_icons([("tally","a counted release: Tier 1"),
    ("barrier","a relief valve lifting: Tier 3"),("deadline","an overdue inspection: Tier 4"),
    ("bandage","an injury record: lagging"),("noentry","a failed function test: Tier 4"),
    ("magnifier","leading or lagging?")],3)
S["ra12-f9"]=lambda: f_realia(form("Shift handover &mdash; Sahra central processing facility",
    [("As of now","reduced rate, 11,000 barrels a day since 02:00; C-202 off line"),
     ("Changed since 06:00","tank 2 rose by 1.3 meters, to 4.4; tank 1 unchanged at 2.0"),
     ("Still open","permit 4471, hot work, pump house, performing authority A. Sweid"),
     ("Left for you","the second lab sample for tank 2; the C-202 part order reference"),
     ("Watch","second-stage discharge temperature: rose twice overnight, to 118 then 121"),
     ("I do not know",BLANK)],
    note="Five boxes filled and one blank. A blank last box is not the same as nothing to "
    "report."), 600)
S["ra12-f10"]=lambda: f_scene(800,400,
    people=[("omar",150,180,{"seated":True}),("samira",270,176,{}),("haddad",430,182,{})],
    props=[("desk",120,0,1.0),("logsheet",200,196,0.24),("data",560,192,0.3),
     ("dashboard",640,190,0.32),("tray",730,198,0.22)],
    clockat=(60,40,22,14,0))
S["ra12-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Sheet A",None,
    "<p>Quiet shift. Nothing to report. Tank levels normal. Permit still open from yesterday. "
    "Flare normal.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Sheet B",None,
    "<p>As of now: reduced rate, 11,000 barrels a day since 02:00. Changed since 06:00: tank 2 "
    "rose by 1.3 meters, to 4.4. Still open: permit 4471, A. Sweid. Left for you: the second lab "
    "sample. Watch: discharge temperature, 118 then 121. I do not know why the flare was brighter "
    "at 03:00.</p>",None),380)[0:3],
    800,300,"The word normal, four times","Four figures, two times and one gap")
S["ra12-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Handover 1",None,
    "<p>Quiet shift. Nothing to report.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Handover 2",None,
    "<p>Six parts, in order: the state with a rate and a time; what changed with two figures; "
    "every open permit with its number and its performing authority; what is left deliberately; "
    "one thing to watch and the reason; and one honest <i>I do not know</i> with what to ask and "
    "whom to ask.</p>",None),380)[0:3],
    800,300,"The absence of a handover","The six parts")
S["ra12-f13"]=lambda: f_realia(form("Plan your handover",
    [("As of now",BLANK),("Changed since",BLANK),("Still open",BLANK),
     ("Left for you",BLANK),("Watch",BLANK),("I do not know",BLANK)],
    note="If the last box is blank, say so out loud. The gap is there either way."), 540)
S["ra12-f14"]=lambda: f_scene(1000,450,
    people=[("omar",60,176,{"seated":True}),("samira",130,172,{}),("nour",205,176,{}),
     ("haddad",290,172,{}),("yusuf",365,176,{}),("ahmad",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("adeel",590,170,{}),("lars",655,172,{}),
     ("ida",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("logsheet",350,198,0.22),
     ("data",420,192,0.28),("form",550,198,0.2),("table",650,0,1.0),
     ("thermometer",860,196,0.24),("shelf",930,96,0.5)],
    board=(40,22,206,112,"ONE SHIFT, START TO FINISH",[("leading","four items"),("lagging","four items"),("a rate","needs hours")]),
    clockat=(262,34,22,16,0))
S["ra12-f15"]=lambda: f_chart([("the barrel and the cubic meter",6),("the wellhead",3),
    ("the permit",5),("the gauge",4),("the flare",2)], unit="operators")
S["ra12-f16"]=lambda: f_realia(doc("On a desk at the end of the course",
    "An accurate award, and three numbers nobody sent upward",
    "<p><b>The book</b>, open at the contents page.</p>"
    "<p><b>A handover sheet</b> with all six boxes filled.</p>"
    "<p><b>A trend</b> with a flat low line and a climbing one.</p>"
    "<p><b>A safety award</b> for three years without a lost-time injury.</p>"
    "<p><b>A permit</b> closed without a hand-back signature.</p>"
    "<p><i>The overdue inspection list grew from forty to two hundred and twenty. Four permits "
    "were closed without a hand-back. The detector calibration backlog was never reported upward "
    "because there was no box for it on the form.</i></p>",
    "Seven o'clock. Nobody falsified anything, and the award was accurate. Accurate is not the "
    "same word as true."), 620)
