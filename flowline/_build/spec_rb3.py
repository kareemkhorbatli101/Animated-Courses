# -*- coding: utf-8 -*-
"""Flowline Book 2 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]
TICK = "<b style='color:#2f6b3a'>&#10003;</b>"
CROSS = "<b style='color:#8a2f2f'>&#10007;</b>"

# ---------------- Unit 7 ----------------
S["rb07-f1"]=lambda: f_icons([("data","a rate falling over years"),
    ("data","the same data as a straight line on semi-log paper"),
    ("data","an exponential curve"),("data","a hyperbolic curve"),
    ("data","a harmonic curve"),("tally","a decline exponent"),
    ("timer","an initial decline rate"),("barrier","an economic limit"),
    ("calculator","cumulative production"),("crane","a workover rig"),
    ("key","a choke being changed"),("engine","a new well nearby"),
    ("thread","a forecast extended"),("certificate","a reserves figure"),
    ("magnifier","a fitted line with scatter"),("note","nothing changes")],4)
S["rb07-f2"]=lambda: f_scene(760,400,
    people=[("bah",110,176,{}),("omar",320,180,{"seated":True}),("haddad",405,180,{}),
     ("nadia",490,180,{"seated":True}),("samira",570,180,{"seated":True}),
     ("ahmad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("data",710,196,0.24)],
    board=(30,24,214,110,"ONE DATA SET, THREE FUTURES",[("exponential","smallest"),("hyperbolic","middle"),("harmonic","largest")]),
    clockat=(262,36,22,12,0))
S["rb07-f3"]=lambda: f_icons([("data","a constant percentage drop each year"),
    ("data","a drop that gets gentler"),("data","a drop that gets much gentler"),
    ("data","a straight line on semi-logarithmic paper"),
    ("thread","three curves diverging at the right"),
    ("note","one data set, three futures")],3)
S["rb07-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published forecasts of anything",
    ["The forecast","What it was for","The year it was made","The year it was for","Did it turn out right"],
    blankrows(6,5),
    note="The box at the foot: the forecast that was wrong for an interesting reason. Was the method "
    "bad, or did something change?"), 640)
S["rb07-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the line through the past",
    "<p style='font-size:12px;color:#6b6861'>Source: J. J. Arps, \"Analysis of Decline Curves\", "
    "<i>Transactions of the AIME</i>, 1945. In our own words.</p>"
    "<p>A well's rate falls over time. Arps set out three shapes the fall can take.</p>"
    "<p><b>Exponential:</b> the same percentage of the current rate every year. The smallest total, "
    "and a <b>straight line on semi-logarithmic paper</b>.</p>"
    "<p><b>Hyperbolic:</b> the percentage fall itself gets smaller. In between.</p>"
    "<p><b>Harmonic:</b> flattest of all, a long tail, the largest total, and the one to be most "
    "careful with.</p>"
    "<p>Once you have a curve you can extend it to next year, and add up the area under it down to "
    "the <b>economic limit</b> to get a total. A very large share of the industry's reserve figures "
    "come from exactly that.</p>"
    "<p><b>The problem is at the left-hand end.</b> Early data fits all three shapes. They separate "
    "later, and later is the part being forecast.</p>"
    "<p><b>What the curves assume.</b> Arps was explicit: these are empirical equations for fitting "
    "observed data, not derived from reservoir physics. They assume the well is produced the same way "
    "throughout, that nothing is done to it, and that nothing changes in the reservoir around it.</p>"
    "<p>Read that list again. Every item on it is something an operating company does on purpose, "
    "several times a year, and the forecast is usually not redone.</p>",
    "A hyperbolic fit pushed too far implies infinite oil from a finite reservoir. That is a sign the "
    "fit has stopped being physics."), 580)
S["rb07-f6"]=lambda: f_realia(tbl("Word study",
    "How confident is it?",
    ["The phrase","How confident","An example"],
    [["will","confident, or a decision","The well will decline."],
     ["is going to","confident, from present evidence","At this rate it is going to hit the limit in 2031."],
     ["is likely to","probable, not certain","It is likely to flatten next year."],
     ["may","possible, no commitment","It may decline faster if we drill the infill well."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>should</i> and <i>on current trend</i>. One hedge is enough."),
    640)
S["rb07-f7"]=lambda: f_line([("0",1000),("1",866),("2",750),("3",650),("4",563),
    ("5",488),("6",422),("7",366),("8",317),("9",274),("10",238)],
    unit="bbl/d", dashed_from=3)
S["rb07-f8"]=lambda: f_icons([("data","a straight line on semi-logarithmic paper"),
    ("data","a curve that flattens"),("crane","a well with a workover rig on it"),
    ("engine","a new well drilled nearby"),("key","a choke changed at a month end"),
    ("magnifier","is the forecast still valid?")],3)
S["rb07-f9"]=lambda: f_realia(tbl("Well forecast sheet &mdash; Tell Sahra 14",
    "Forecast made 2022 &middot; eight years of actuals against it",
    ["Year","Actual, bbl/d","Forecast, bbl/d","Difference"],
    [["1","486","486","0"],["2","418","419","&minus;1"],
     ["3","361","360","+1"],["4","<b>402</b>","310","<b>+92 (workover)</b>"],
     ["5","344","267","+77"],["6","<b>361</b>","230","<b>+131 (workover)</b>"],
     ["7","288","198","+90"],["8","212","248","&minus;36"]], numcols=(0,1,2,3),
    note="Two workovers were done after the fit was made. The forecast was never redone, and year "
    "eight is being compared with a line that describes a different well."), 620)
S["rb07-f10"]=lambda: f_scene(800,400,
    people=[("bah",200,180,{}),("haddad",430,182,{"seated":True}),("omar",530,180,{"seated":True})],
    props=[("desk",400,0,1.0),("logsheet",470,196,0.24),("board",120,96,0.56),
     ("data",700,196,0.26)],
    clockat=(70,40,22,13,0))
S["rb07-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Sheet A",None,
    "<p>One forecast line. Remaining reserves 1.6 million barrels. Economic limit around 2031.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Sheet B",None,
    "<p>Three fitted curves with their totals: exponential 1.6 million to 2031, hyperbolic 2.1 to "
    "2035, harmonic 2.9 and no date. The assumption behind each. The dates of two workovers in the "
    "history. The date the fit was made.</p>",None),380)[0:3],
    800,300,"One line and one number","Three fits, two dates and an assumption")
S["rb07-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Well 14 remaining reserves 1.6 million barrels. Decline about 14 per cent. Expect economic "
    "limit around 2031.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Fitted to the last three years, excluding the four months after the June workover. "
    "Exponential 13.8 per cent a year, 1.6 million barrels to an economic limit of 40 a day, 2031. "
    "Hyperbolic 2.1 million. Harmonic 2.9 and no date I will write down. All three assume <b>no "
    "further intervention and no new wells</b>; one infill well is in next year's plan.</p>",
    None),380)[0:3],
    800,300,"A number","A number, its fit, its period and its assumption")
S["rb07-f13"]=lambda: f_realia(form("Plan your forecast note",
    [("The well and the date of the fit",BLANK),("The data fitted, and anything excluded",BLANK),
     ("The fit type and the rate",BLANK),("The total and the economic limit",BLANK),
     ("The assumption",BLANK),("What would make it invalid",BLANK)],
    note="Six boxes. The last one is a list of things your own company does every year."), 560)
S["rb07-f14"]=lambda: f_scene(1000,450,
    people=[("bah",60,176,{}),("haddad",130,172,{"seated":True}),("omar",205,176,{"seated":True}),
     ("nour",290,172,{}),("nadia",365,176,{"seated":True}),("samira",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("yusuf",590,170,{}),("lars",655,172,{}),
     ("ida",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("adeel",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("logsheet",350,198,0.22),
     ("data",420,196,0.24),("timetable",550,198,0.22),("table",650,0,1.0),
     ("map",860,196,0.24),("shelf",930,96,0.5)],
    board=(40,22,206,112,"A LINE THROUGH THE PAST",[("assuming","no intervention"),("we do","two a year"),("so","redo it")]),
    clockat=(262,34,22,15,0))
S["rb07-f15"]=lambda: f_chart([("always",2),("sometimes",5),("never",8),
    ("I do not know",5),("we have no forecast",3)], unit="operators")
S["rb07-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A number that travelled alone",
    "<p><b>A forecast sheet from three years ago</b> with two undated workovers inside its "
    "history.</p>"
    "<p><b>A monthly report</b> comparing the actual rate against that forecast.</p>"
    "<p><b>Three diverging curves</b> on graph paper.</p>"
    "<p><b>A financing document</b> with one reserves figure in it and no assumption beside it.</p>"
    "<p><i>Production is above the forecast and the reserves are below the figure, because the infill "
    "well is producing oil that was going to come up this well. Both are true, and no document in the "
    "company says so.</i></p>",
    "Seven o'clock. The assumption was written down, in an appendix, and the number left without "
    "it."), 600)

# ---------------- Unit 8 ----------------
S["rb08-f1"]=lambda: f_icons([("container","a horizontal separator"),
    ("boiler","a vertical separator"),("barrier","an inlet diverter"),
    ("square","the gravity settling space"),("thread","a mist extractor pad"),
    ("tray","the liquid collection section"),("wall","a weir plate"),
    ("tin","the oil outlet"),("water","the water outlet"),
    ("cloud","the gas outlet"),("thermostat","a level controller"),
    ("thermostat","a pressure controller"),("rain","liquid carried out with the gas"),
    ("spoon","gas carried out with the liquid"),("jug","a foaming sample"),
    ("certificate","a nameplate")],4)
S["rb08-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("samira",405,180,{"seated":True}),
     ("ahmad",485,180,{"seated":True}),("nadia",565,180,{"seated":True}),
     ("wei",650,180,{})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("certificate",715,198,0.2)],
    board=(30,24,214,110,"FOUR JOBS, ONE DRUM",[("1 primary","2 settling"),("3 mist","4 collection"),("all need","time")]),
    clockat=(262,36,22,12,30))
S["rb08-f3"]=lambda: f_icons([("barrier","the stream hitting a diverter"),
    ("rain","droplets falling through gas"),("thread","a mist pad catching the last droplets"),
    ("tray","liquid sitting in the bottom section"),
    ("wall","a weir: oil over, water behind"),("note","four jobs, one drum")],3)
S["rb08-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six pressure vessel nameplates",
    ["The vessel","Design flow rate","Design pressure","Year on the nameplate","What it handles today"],
    blankrows(6,5),
    note="The box at the foot: the vessel furthest from what it was built for. How many are handling "
    "more than the plate says?"), 640)
S["rb08-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: what happens inside the drum",
    "<p style='font-size:12px;color:#6b6861'>Source: American Petroleum Institute, Specification 12J, "
    "<i>Specification for Oil and Gas Separators</i>. In our own words.</p>"
    "<p>A separator has nothing moving inside it. It works by slowing the stream down and giving "
    "gravity time. Everything that goes wrong with one goes wrong because it did not get the "
    "time.</p>"
    "<p><b>1 Primary separation:</b> the stream hits a diverter, loses velocity, and most of the "
    "liquid falls out at once.</p>"
    "<p><b>2 Gravity settling:</b> in the open space, remaining droplets fall out of the gas.</p>"
    "<p><b>3 Mist extraction:</b> a pad catches the smallest droplets before the gas leaves.</p>"
    "<p><b>4 Liquid collection:</b> liquid sits in the bottom, gas rises out of it, and in a "
    "three-phase vessel oil and water separate and leave by different outlets.</p>"
    "<p><b>Retention time</b> is the heart of it: how long the liquid stays in the vessel.</p>"
    "<p><b>Carry-over</b> is liquid leaving with the gas, which damages compressors. "
    "<b>Carry-under</b> is gas leaving with the liquid, which makes the metering wrong.</p>"
    "<p>The sizing assumes you know the inlet conditions. They were known on the day the vessel was "
    "ordered. Twenty years later they are all different, and nothing on the nameplate changes.</p>"
    "<p><b>A nameplate records an intention, not a capability today.</b></p>",
    "A foaming crude occupies the vessel with foam rather than liquid, and the calculated retention "
    "time no longer exists."), 580)
S["rb08-f6"]=lambda: f_realia(tbl("Word study",
    "The relative word and what it refers to",
    ["The word","What it refers to","An example"],
    [["which","a thing","The pad which catches the droplets is fouled."],
     ["that","a thing, in a defining clause","The vessel that we installed in 1986 is overloaded."],
     ["who","a person","The operator who lowered the level is on nights."],
     ["where","a place","The settling section is the part where the droplets fall out."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>whose</i> and a comma plus <i>which</i>. A clause with commas never "
    "takes <i>that</i>."), 640)
S["rb08-f7"]=lambda: f_realia(tbl("Separator V-201, operating level",
    "Design level against the level it is run at",
    ["","Design","As run"],
    [["Liquid level above the bottom","1,100 mm","<b>800 mm</b>"],
     ["Liquid volume held","14.6 m3","<b>7.9 m3</b>"],
     ["Oil retention time at today's rate","about 3.0 minutes","<b>about 1.6 minutes</b>"],
     ["Gas space above the liquid","the design value","larger"],
     ["Who gains","&mdash;","compression: fewer carry-under complaints"],
     ["Who pays","&mdash;","the laboratory: oil above its water specification"]],
    note="One lever, two consequences, two buildings. Lowering the level solves a gas problem and "
    "creates an oil problem in a different department."), 600)
S["rb08-f8"]=lambda: f_icons([("rain","liquid in a compressor suction"),
    ("container","a flare knock-out drum filling up"),("iron","a pump losing suction"),
    ("calculator","a metered volume that does not match the tank"),
    ("pipe","a gas line with liquid slugs"),("magnifier","which failure is this?")],3)
S["rb08-f9"]=lambda: f_realia(tbl("Separator performance sheet &mdash; V-201",
    "Nameplate 1986 against today",
    ["","Nameplate, 1986","Today"],
    [["Liquid rate","4,000 bbl/d","<b>5,200 bbl/d</b>"],
     ["Gas rate","60,000 m3/d","<b>71,000 m3/d</b>"],
     ["Water cut","8 per cent","<b>34 per cent</b>"],
     ["Operating pressure","19 bar","<b>14 bar</b>"],
     ["Operating level","1,100 mm","<b>800 mm</b>"]],
    note="Four of the five are outside the nameplate column. The level is the only one of these that "
    "anybody adjusted."), 600)
S["rb08-f10"]=lambda: f_scene(800,400,
    people=[("nour",180,180,{}),("samira",300,176,{}),("omar",600,180,{})],
    props=[("container",450,180,0.46),("logsheet",230,198,0.22),("railings",130,170,0.4),
     ("thermostat",690,196,0.24)],
    clockat=(60,40,22,13,0))
S["rb08-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>Export oil water content is 2.1 per cent against a target of 0.5. Separator V-201 not "
    "performing. Request a demulsifier trial.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>Nameplate against today in two columns. The level was lowered 300 millimeters in September "
    "2021, recorded in the instrument log, to reduce carry-under complaints. Retention time before: "
    "3.0 minutes. After: 1.6. Export oil has been above target since early 2022.</p>",
    None),380)[0:3],
    800,300,"A symptom and a purchase","A cause, with its date")
S["rb08-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Export oil water content is 2.1 per cent against a target of 0.5. Separator V-201 not "
    "performing. Request a demulsifier trial.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Nameplate 1986 and today, five rows each. The level change with its date and its reason. "
    "Retention time 3.0 minutes before, 1.6 after. <b>Two options:</b> raise the level, which costs "
    "nothing and returns the carry-under problem to compression; or add gas handling. Measure both "
    "for two weeks before anybody buys chemical.</p>",None),380)[0:3],
    800,300,"One option, and it costs money","Two options, and a measurement first")
S["rb08-f13"]=lambda: f_realia(form("Plan your separator note",
    [("The vessel and its nameplate figures",BLANK),("Today's figures",BLANK),
     ("What has been changed, when and why",BLANK),("Retention time before and after",BLANK),
     ("Two options, with their costs",BLANK),("What you would measure to decide",BLANK)],
    note="Six boxes. If the third is blank, the instrument log will fill it."), 560)
S["rb08-f14"]=lambda: f_scene(1000,450,
    people=[("nour",60,176,{}),("samira",130,172,{}),("omar",205,176,{}),
     ("wei",290,172,{}),("ahmad",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("haddad",515,176,{}),("bah",590,170,{}),("lars",655,172,{}),
     ("ida",720,170,{}),("yusuf",785,172,{}),("tomas",845,170,{}),
     ("adeel",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("container",345,180,0.4),
     ("thermostat",430,196,0.22),("jug",555,198,0.2),("table",650,0,1.0),
     ("certificate",860,198,0.2),("shelf",930,96,0.5)],
    board=(40,22,206,112,"ONE LEVER, TWO BUILDINGS",[("lower it","gas gains"),("lower it","oil loses"),("page","with both")]),
    clockat=(262,34,22,16,0))
S["rb08-f15"]=lambda: f_chart([("yes, all of them",3),("some of them",6),
    ("I know where the plate is",5),("the plate is unreadable",4),("I have never looked",5)],
    unit="operators")
S["rb08-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "One entry in an instrument log, from 2021",
    "<p><b>A separator performance sheet</b> with two columns, four of five rows outside the "
    "nameplate.</p>"
    "<p><b>An instrument log</b> open at September 2021, one entry circled.</p>"
    "<p><b>A laboratory trend</b> of export oil water content, rising from early 2022.</p>"
    "<p><b>A quotation</b> for demulsifier chemical. The fourth one.</p>"
    "<p><i>The change was recorded, with a reason. It solved a real problem for the compression team "
    "that week, and nobody has complained since.</i></p>",
    "Seven o'clock. Three chemical trials were run and nobody read the log."), 600)

# ---------------- Unit 9 ----------------
S["rb09-f1"]=lambda: f_icons([("water","produced water"),("recycle","disposal"),
    ("transfer","injection"),("iron","an injection pump"),
    ("engine","an injection wellhead"),("wall","casing and cement"),
    ("padlock","a packer"),("container","the annulus"),
    ("thermostat","an annulus pressure gauge"),("certificate","a pressure test"),
    ("magnifier","a cement bond log"),("form","a permit"),
    ("barrier","a maximum pressure limit"),("logsheet","a monitoring report"),
    ("crate","a plugged and abandoned well"),("tap" if False else "jug","a village water well")],4)
S["rb09-f2"]=lambda: f_scene(760,400,
    people=[("yusuf",110,176,{}),("omar",320,180,{"seated":True}),("nour",405,180,{"seated":True}),
     ("samira",485,180,{"seated":True}),("tomas",565,180,{}),("ahmad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("water",710,196,0.24)],
    board=(30,24,214,110,"THE BIGGEST STREAM",[("water","78 per cent"),("oil","22 per cent"),("where","back underground")]),
    clockat=(262,36,22,13,0))
S["rb09-f3"]=lambda: f_icons([("wall","casing and cement past a shallow aquifer"),
    ("padlock","a packer, with the annulus monitored"),
    ("barrier","a gauge with a maximum marked"),("logsheet","a monitoring report filed"),
    ("crate","a well being plugged with cement"),
    ("note","four things the paperwork asks")],3)
S["rb09-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published produced water figures",
    ["The field or country","Oil produced","Water produced","The ratio","The source"],
    blankrows(6,5),
    note="Calculate the fourth column. The box at the foot: the highest water-to-oil ratio we could "
    "find, and what it implies about that operation's real business."), 620)
S["rb09-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the second well, and what a published rulebook asks of it",
    "<p style='font-size:12px;color:#6b6861'>Source: the Underground Injection Control program of "
    "the United States Environmental Protection Agency, Class II rules at 40 CFR Parts 144 and 146. "
    "In our own words.</p>"
    "<p><b>Why another country's regulation?</b> Because it is published, detailed and free, and it "
    "is the clearest public account anywhere of what a produced water injection well is supposed to "
    "do. <b>It is not the law here.</b></p>"
    "<p>The purpose of the program is narrow: it protects <b>underground sources of drinking "
    "water</b>. Everything in it follows from that.</p>"
    "<p><b>Authorization:</b> somebody outside the company has to agree the well may exist.</p>"
    "<p><b>Construction:</b> casing and cement that isolate the injection zone from every shallow "
    "water-bearing layer.</p>"
    "<p><b>Mechanical integrity:</b> demonstrated by test, in two parts. <b>Internal</b> &mdash; no "
    "significant leak in casing, tubing or packer. <b>External</b> &mdash; no significant movement of "
    "fluid upward beside the wellbore. A well can pass one and fail the other.</p>"
    "<p><b>A maximum injection pressure</b>, so the injection does not fracture the confining layer "
    "and open a path upward.</p>"
    "<p><b>Monitoring and records</b>, so a change can be noticed by somebody.</p>"
    "<p>A well that passes shows no significant leak, <b>by the test applied, on the day of the "
    "test</b>. It is not a certificate that fifty-year-old casing is sound.</p>",
    "An oil well has an economic life. An injection well's duty not to leak does not end when the "
    "field does."), 580)
S["rb09-f6"]=lambda: f_realia(tbl("Word study",
    "What the word does in a rule",
    ["The word","What it does","An example"],
    [["shall","creates an obligation, older drafting","The owner shall demonstrate mechanical integrity."],
     ["must","creates an obligation, plainer","The well must be cased and cemented."],
     ["may not","creates a prohibition","The injection pressure may not exceed the maximum."],
     ["is required to","an obligation, in the passive","The operator is required to report monthly."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>is prohibited from</i> and <i>may</i>. The last one grants a power, "
    "and is not the opposite of <i>may not</i>."), 640)
S["rb09-f7"]=lambda: f_matrix(["Internal test","External test","Injection pressure vs maximum"],
    [("Injection well 1",[TICK,TICK,"118 of 147 bar"]),
     ("Injection well 2",[TICK,TICK,"141 of 147 bar &mdash; <b>96 per cent</b>"]),
     ("Injection well 3",[TICK,CROSS,"102 of 138 bar"]),
     ("Injection well 4",[TICK,TICK,"88 of 150 bar"]),
     ("Injection well 5",[TICK,TICK,"121 of 160 bar"]),
     ("Injection well 6",[TICK,TICK,"94 of 147 bar"])], 660)
S["rb09-f8"]=lambda: f_icons([("wall","casing cemented past a shallow aquifer"),
    ("thermostat","a packer with a gauge on the annulus"),
    ("magnifier","a log being run outside the casing"),
    ("barrier","a gauge with a red maximum"),("logsheet","a monthly report"),
    ("note","which requirement is this?")],3)
S["rb09-f9"]=lambda: f_realia(tbl("Injection well 2 &mdash; monthly record, March",
    "Permitted maximum injection pressure 147 bar",
    ["Day","Volume, m3/d","Injection pressure, bar","Annulus pressure, bar"],
    [["20","4,100","141","4"],["21","4,100","141","4"],["22","4,080","141","5"],
     ["23","4,100","141","5"],["24","4,110","141","6"],["25","4,090","141","7"],
     ["26","4,100","142","8"],["27","4,100","141","9"],
     ["28","4,100","141","<b>11</b>"]], numcols=(0,1,2,3),
    note="The annulus pressure should be at or near zero and steady. The annulus line is the "
    "integrity line."), 620)
S["rb09-f10"]=lambda: f_scene(800,400,
    people=[("yusuf",180,180,{}),("tomas",300,176,{}),("omar",600,180,{})],
    props=[("iron",450,184,0.4),("logsheet",230,198,0.22),("railings",130,170,0.4),
     ("thermostat",690,196,0.24)],
    clockat=(60,40,22,14,0))
S["rb09-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>Injection well 2 is operating within permitted limits. Integrity tests are current. No issues "
    "this month.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>Volume 4,100 cubic meters a day. Injection pressure 141 of a permitted 147. Annulus pressure, "
    "last nine days: 4, 4, 5, 5, 6, 7, 8, 9, 11 bar. Internal test passed 3 March, before this trend "
    "began. External log from 2019.</p>",None),380)[0:3],
    800,300,"Compliant","Compliant, and nine numbers")
S["rb09-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Injection well 2 is operating within permitted limits. Integrity tests are current. No issues "
    "this month.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Nine annulus readings in full. 141 bar against a permitted 147, so almost no margin. Internal "
    "test 3 March, external log 2019. <b>Injection stopped 14:20</b>, superintendent informed. The "
    "water has two destinations for 48 hours: the second well at about 1,400 cubic meters a day, or "
    "reduced production. Both cost money and one of them does not involve a shallow aquifer.</p>",
    None),380)[0:3],
    800,300,"A status","A status, an action and two options")
S["rb09-f13"]=lambda: f_realia(form("Plan your injection well note",
    [("The volume and the period",BLANK),("The injection pressure, against the permitted maximum",BLANK),
     ("The annulus readings, in full",BLANK),("The date of each integrity test",BLANK),
     ("What you have done",BLANK),("The options, with their costs",BLANK)],
    note="Six boxes. The third is a list of numbers, not a summary of them."), 560)
S["rb09-f14"]=lambda: f_scene(1000,450,
    people=[("yusuf",60,176,{}),("tomas",130,172,{}),("omar",205,176,{}),
     ("nour",290,172,{}),("samira",365,176,{"seated":True}),("ahmad",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("haddad",590,170,{}),("bah",655,172,{}),
     ("lars",720,170,{}),("ida",785,172,{}),("wei",845,170,{}),
     ("adeel",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("thermostat",350,196,0.22),
     ("iron",420,186,0.34),("water",550,196,0.22),("table",650,0,1.0),
     ("map",860,196,0.24),("shelf",930,96,0.5)],
    board=(40,22,206,112,"THE BIGGEST STREAM",[("78","water"),("22","oil"),("duty","forever")]),
    clockat=(262,34,22,16,0))
S["rb09-f15"]=lambda: f_chart([("a named injection well",6),("reinjection somewhere",5),
    ("a pit or pond",2),("I do not know",7),("we do not make much",3)], unit="operators")
S["rb09-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A rising annulus and a village eleven kilometers away",
    "<p><b>An injection well monthly record</b> with nine rising annulus readings.</p>"
    "<p><b>An internal integrity test certificate</b> dated eleven days before the trend began.</p>"
    "<p><b>An external log</b> from six years earlier.</p>"
    "<p><b>A production report</b> showing the field shut back for two days.</p>"
    "<p><b>A village map</b> with shallow water wells marked on it.</p>"
    "<p><i>The investigation found a tubing leak above the packer. Both tests were current under the "
    "rules the company follows.</i></p>",
    "Seven o'clock. Nobody will ever be able to say whether anything reached the village water."),
    620)
