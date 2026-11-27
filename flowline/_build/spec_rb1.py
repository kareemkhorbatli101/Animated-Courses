# -*- coding: utf-8 -*-
"""Flowline Book 2 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]
TICK = "<b style='color:#2f6b3a'>&#10003;</b>"
CROSS = "<b style='color:#8a2f2f'>&#10007;</b>"

# ---------------- Starting Point ----------------
S["rb00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each, from Book 1",
    ["What you have","An example"],
    [["A grade","heavy and sour &middot; light and sweet &middot; 24 degrees API"],
     ["A unit","a barrel &middot; a cubic meter &middot; corrected to 15 degrees Celsius"],
     ["A wellhead part","the master valve &middot; the choke &middot; upstream of"],
     ["A role","who reports to whom &middot; who may stop a job"],
     ["A permit box","the isolating authority &middot; the hand-back"],
     ["A gauge reading","innage &middot; outage &middot; a zero that means three things"]],
    note="Six boxes. This book adds the English of an estimate: what it was calculated from, and how "
    "much smaller that was than the thing it describes."), 580)
S["rb00-f2"]=lambda: f_icons([("crate","sandstone: oil sits in the spaces between grains"),
    ("barcode","connected pores: the oil can get out"),
    ("padlock","isolated pores: the oil is there and stays there"),
    ("magnifier","a core plug, about the size of a thumb")],4)
S["rb00-f3"]=lambda: f_realia(tbl("The measurement and the answer",
    "Two objects, and the distance between them",
    ["What it is","How big"],
    [["The core plug the permeability was measured on","about 25 millimeters across"],
     ["The core it was cut from","one point in one well"],
     ["The interval the figure is applied to","15 meters of rock"],
     ["The field the figure ends up describing","about 12 kilometers long"]],
    note="This is not a mistake. It is the only thing anybody can do, and it is why this book keeps "
    "printing the same sentence: a model is not a measurement."), 580)
S["rb00-f4"]=lambda: f_process(["the rock","the well","the wellhead","inflow","lift","decline",
    "separation","water disposal","metering","failure data","what we may claim"], w=720)

# ---------------- Unit 1 ----------------
S["rb01-f1"]=lambda: f_icons([("crate","sandstone"),("wall","limestone"),
    ("magnifier","a pore"),("tally","a grain"),("container","porosity"),
    ("barcode","permeability"),("pipe","a core"),("tin","a plug"),
    ("data","a gradient"),("balance","a difference"),("jug","viscosity"),
    ("water","to flow"),("timer","a rate"),("square","an area"),
    ("thread","laminar"),("storm","turbulent")],4)
S["rb01-f2"]=lambda: f_scene(760,400,
    people=[("bah",110,176,{}),("omar",320,180,{"seated":True}),("samira",405,180,{"seated":True}),
     ("ahmad",485,180,{"seated":True}),("nadia",565,180,{"seated":True}),
     ("yusuf",645,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("pipe",700,196,0.26)],
    board=(30,24,214,110,"FOUR THINGS DECIDE THE FLOW",[("pressure","area"),("permeability","up"),("viscosity","down")]),
    clockat=(262,36,22,9,0))
S["rb01-f3"]=lambda: f_icons([("square","a bigger flow area: more flow"),
    ("balance","a bigger pressure difference: more flow"),
    ("jug","a thicker fluid: less flow"),("pipe","a longer sample: less flow"),
    ("barcode","a better connected rock: more flow"),
    ("note","four things, one law")],3)
S["rb01-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published permeabilities",
    ["The rock type","The permeability","The unit","The source","Laboratory or well test"],
    blankrows(6,5),
    note="The box at the foot: the figure we trust least, and why. Watch the units."), 620)
S["rb01-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the oldest equation on the site",
    "<p style='font-size:12px;color:#6b6861'>Source: Henry Darcy, <i>Les Fontaines Publiques de la "
    "Ville de Dijon</i>, Paris, 1856. The experiments are in an appendix. In our own words.</p>"
    "<p>Darcy was the town engineer of Dijon. The town wanted clean water, and clean water meant "
    "sand filters. He packed an iron tube with sand, put a gauge at each end, and measured.</p>"
    "<p>He found that the flow rate was <b>proportional to the pressure difference</b> and "
    "<b>proportional to the area</b>, and that it depended on the sand. Later work added the fluid: "
    "flow is <b>inversely proportional to the viscosity</b>.</p>"
    "<p>The unit of permeability is named after him. A darcy is large, so reservoir rock is usually "
    "given in <b>millidarcies</b>.</p>"
    "<p><b>What he was not measuring.</b> He used water: one fluid. In a reservoir, oil, gas and "
    "water move through the same pores and get in each other's way.</p>"
    "<p>He used slow flow. The law holds while the flow is <b>laminar</b>. Near a wellbore it can "
    "become turbulent, and then the simple law under-predicts the pressure you need.</p>"
    "<p>He used loose, uniform sand. Reservoir rock is cemented, layered and cracked.</p>"
    "<p>And he measured <b>one sample</b>. Our maps cover twelve kilometers.</p>",
    "The law is empirical. It was found by measurement, not derived. That is a good reason to trust "
    "it and no reason to use it where he did not test it."), 580)
S["rb01-f6"]=lambda: f_realia(tbl("Word study",
    "Active, passive, and why you would choose it",
    ["Active","Passive","Why choose the passive"],
    [["The laboratory measures the permeability.","The permeability is measured in the laboratory.","the number matters, not who measured it"],
     ["A technician cut the plug.","The plug was cut from the core.","nobody cares which technician"],
     ["We packed the tube with sand.","The tube was packed with sand.","the method, described once"],
     ["Engineers assume laminar flow.","Laminar flow is assumed.","the assumption is the point"],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty. The passive hides who did something: honest in a method, dishonest in "
    "an account of a decision."), 640)
S["rb01-f7"]=lambda: f_line([("0",0),("1",42),("2",84),("3",126),("4",167),
    ("5",204),("6",233),("7",252),("8",263)], unit="rate", mark="6")
S["rb01-f8"]=lambda: f_icons([("barcode","a 310 millidarcy sandstone"),
    ("padlock","a 2 millidarcy tight sandstone"),("wall","a fractured limestone"),
    ("crate","a core with a clay layer across it"),
    ("magnifier","a plug with isolated pores"),("note","which would you drill?")],3)
S["rb01-f9"]=lambda: f_realia(tbl("Core analysis report &mdash; Tell Sahra 21",
    "1,864 to 1,879 meters &middot; received 11 March",
    ["Depth, m","Porosity, percent","Permeability, mD","Direction"],
    [["1,866","21","310","horizontal"],["1,868","19","260","horizontal"],
     ["1,870","18","240","horizontal"],["1,871","9","<b>2</b>","horizontal"],
     ["1,874","18","210","horizontal"],["1,877","17","180","horizontal"]], numcols=(0,1,2),
    note="Measured with gas at ambient laboratory conditions. The plug at 1,871 meters is from a "
    "clay layer and is not representative of the interval."), 600)
S["rb01-f10"]=lambda: f_scene(800,400,
    people=[("bah",150,180,{"seated":True}),("omar",265,176,{}),("haddad",430,182,{})],
    props=[("desk",120,0,1.0),("spreadsheet",200,196,0.24),("tin",560,194,0.3),
     ("magnifier",640,198,0.22),("shelf",720,100,0.5)],
    clockat=(60,40,22,10,0))
S["rb01-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Summary A",None,
    "<p>Tell Sahra 21, 1,864 to 1,879 meters. Average permeability <b>200 millidarcies</b>. "
    "Porosity 17 percent.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Summary B",None,
    "<p>Six plugs. Range 2 to 310 millidarcies. Median 240. Average of five, <b>excluding the "
    "2 millidarcy plug from the clay layer at 1,871 meters, 240</b>. Measured with gas, ambient "
    "conditions, one well.</p>",None),380)[0:3],
    800,300,"One average","A range, a median and an exclusion with its reason")
S["rb01-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Core analysis back from the laboratory. Permeability averages 200 millidarcies. Porosity "
    "about 18 percent. Looks like a reasonable interval.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Six plugs from Tell Sahra 21, 1,864 to 1,879 meters, gas, ambient. 2, 180, 210, 240, 260 and "
    "310 millidarcies. The 2 is a clay layer we would not complete in and is excluded; average of "
    "the five is 240, median 240. Five thumb-sized samples from one well: enough to size a test, not "
    "enough to set a field rate.</p>",None),380)[0:3],
    800,300,"Two figures and an adjective","Every figure, and what it is not good enough for")
S["rb01-f13"]=lambda: f_realia(form("Plan your core analysis note",
    [("The well and the depths",BLANK),("The number of samples",BLANK),
     ("The method and the conditions",BLANK),("The figures and their range",BLANK),
     ("Anything excluded, and why",BLANK),("What the figure is not good enough for",BLANK)],
    note="Six boxes. The last one is the one somebody will want deleted."), 560)
S["rb01-f14"]=lambda: f_scene(1000,450,
    people=[("bah",60,176,{}),("omar",130,172,{}),("nour",205,176,{}),
     ("samira",290,172,{"seated":True}),("ahmad",365,176,{"seated":True}),
     ("nadia",440,172,{"seated":True}),("yusuf",515,176,{"seated":True}),
     ("adeel",590,170,{}),("haddad",655,172,{}),("yara",720,170,{}),
     ("lars",785,172,{}),("ida",845,170,{}),("wei",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("tin",350,194,0.28),
     ("pipe",420,196,0.26),("magnifier",550,198,0.2),("table",650,0,1.0),
     ("racking",860,170,0.44),("shelf",930,96,0.5)],
    board=(40,22,206,112,"ONE THUMB, TWELVE KILOMETERS",[("the plug","25 mm"),("the field","12 km"),("the gap","the uncertainty")]),
    clockat=(262,34,22,11,0))
S["rb01-f15"]=lambda: f_chart([("core analysis",7),("a well test",4),("a model",5),
    ("I do not know",6),("we do not use one",2)], unit="operators")
S["rb01-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "One figure, four pages away from its footnote",
    "<p><b>A core analysis report</b> with six rows and one circled.</p>"
    "<p><b>A field development plan</b> whose first page reads <i>reservoir permeability: 240 mD</i> "
    "and nothing else.</p>"
    "<p><b>A graph</b> of a straight line that bends at the top.</p>"
    "<p><b>A core plug</b> on a stand.</p>"
    "<p><i>The appendix about five thumb-sized samples existed. Nobody printed it, and the wells came "
    "in at about a third of the expected rate.</i></p>",
    "Seven o'clock. Nobody lied at any stage, and the figure stopped being a core measurement "
    "somewhere between page forty and page one."), 600)

# ---------------- Unit 2 ----------------
S["rb02-f1"]=lambda: f_icons([("cloud","a drive"),("data","depletion"),
    ("container","a gas cap"),("water","an aquifer"),("wind","to expand"),
    ("tally","to deplete"),("padlock","to shut in"),("data","to decline"),
    ("spoon","solution gas"),("thermometer","the bubble point"),
    ("balance","compressibility"),("stairwell","gravity drainage"),
    ("calculator","cumulative"),("tally","a recovery factor"),
    ("transfer","voidage"),("scales","a balance")],4)
S["rb02-f2"]=lambda: f_scene(760,400,
    people=[("bah",110,176,{}),("omar",320,180,{"seated":True}),("nadia",405,180,{"seated":True}),
     ("samira",485,180,{"seated":True}),("haddad",565,180,{}),("yusuf",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("container",700,190,0.34)],
    board=(30,24,214,110,"ONE TANK, FIVE PUSHES",[("solution gas","gas cap"),("water","compaction"),("gravity","no map in here")]),
    clockat=(262,36,22,9,30))
S["rb02-f3"]=lambda: f_icons([("spoon","gas coming out of solution and expanding"),
    ("container","a gas cap expanding downward"),("water","an aquifer pushing up"),
    ("wall","the rock closing as pressure falls"),
    ("stairwell","oil draining down a steep layer"),
    ("note","five pushes, five recovery factors")],3)
S["rb02-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published recovery factors",
    ["The field","The drive mechanism","The recovery factor","The year of the estimate","The source"],
    blankrows(6,5),
    note="The box at the foot: the two estimates for the same field that disagreed. A recovery factor "
    "can change without any oil moving."), 620)
S["rb02-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: what pushes the oil, and the equation that tells you which",
    "<p style='font-size:12px;color:#6b6861'>Source: L. P. Dake, <i>Fundamentals of Reservoir "
    "Engineering</i>, Elsevier, 1978. In our own words.</p>"
    "<p>Oil does not rise on its own. Something pushes it, and the push comes from inside the "
    "reservoir until somebody puts something in from outside.</p>"
    "<p><b>Solution gas:</b> gas coming out of the oil as pressure falls. Rising gas-oil ratio, "
    "falling pressure, and it does not last.</p>"
    "<p><b>Gas cap:</b> free gas above the oil, expanding down. Gas breakthrough in the upper "
    "wells.</p>"
    "<p><b>Water:</b> an aquifer below, pushing up. Rising water cut, and a water plant you may not "
    "have built.</p>"
    "<p><b>Compaction:</b> the rock closing as the fluid pressure drops.</p>"
    "<p><b>Gravity drainage:</b> oil draining down a steep layer. Slow, and can recover a great "
    "deal.</p>"
    "<p><b>The material balance</b> treats the whole reservoir as a <b>single tank with one average "
    "pressure</b>. Put in everything produced and injected, and the pressure history, and it tells "
    "you how much oil was there and which drive is working.</p>"
    "<p>It contains <b>no geometry</b>. No map, no thickness, no well location. It cannot tell you "
    "where to drill.</p>"
    "<p>It needs an average reservoir pressure, which means shutting a well in: the information is "
    "for next year and the lost production is today.</p>",
    "A textbook, not a standard. The recovery factors anybody quotes from this subject are typical "
    "ranges, not predictions about your field."), 580)
S["rb02-f6"]=lambda: f_realia(tbl("Word study",
    "What the form says about time",
    ["The form","What it says about time","An example"],
    [["has fallen","it started before and the result is now","Pressure has fallen by 40 bar."],
     ["fell","finished, at a time you can name","Pressure fell 40 bar between 2019 and 2022."],
     ["has been producing","it started before and is still going","The field has been producing for eleven years."],
     ["has not yet been measured","it has not happened, and it still could","The pressure has not yet been measured this year."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>has produced since</i> and <i>had already fallen</i>."), 640)
S["rb02-f7"]=lambda: f_line([("y1",220),("y2",208),("y3",196),("y4",186),
    ("y5",182),("y6",0),("y7",0),("y8",180),("y9",179),
    ("y10",178),("y11",178)], unit="bar", mark="y5")
S["rb02-f8"]=lambda: f_icons([("spoon","rising gas-oil ratio, falling pressure"),
    ("water","rising water cut, pressure flattening"),
    ("container","gas breaking through in an upper well"),
    ("data","pressure falling steeply, no gas increase"),
    ("stairwell","oil draining down a dipping layer"),
    ("magnifier","which drive is dominant?")],3)
S["rb02-f9"]=lambda: f_realia(tbl("Annual reservoir summary &mdash; Tell Sahra",
    "Eleven years &middot; two pressure surveys missing",
    ["Year","Cumulative oil, Mbbl","Cumulative water, Mbbl","Average pressure, bar"],
    [["1","1.9","0.2","220"],["2","4.1","0.6","208"],["3","6.6","1.3","196"],
     ["4","9.4","2.4","186"],["5","12.5","3.9","182"],
     ["6","15.8","5.8","<b>no survey</b>"],["7","19.2","8.1","<b>no survey</b>"],
     ["8","22.4","10.7","180"],["9","25.3","13.6","179"],
     ["10","28.0","16.8","178"],["11","30.4","20.1","178"]], numcols=(0,1,2),
    note="The two empty cells are the two years the trend changed. The field was at peak rate and no "
    "well was shut in."), 620)
S["rb02-f10"]=lambda: f_scene(800,400,
    people=[("bah",150,180,{"seated":True}),("haddad",265,176,{}),("omar",600,180,{})],
    props=[("desk",120,0,1.0),("spreadsheet",200,196,0.24),("board",480,100,0.56),
     ("data",700,196,0.26)],
    clockat=(60,40,22,12,0))
S["rb02-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Summary A",None,
    "<p>Eleven pressure figures, one for every year. Years six and seven are printed in italics.</p>"
    "<p>No note anywhere says what the italics mean.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Summary B",None,
    "<p>Nine pressure figures. Years six and seven are blank, each with a note: <i>no survey; field "
    "at peak rate; cost of a four-day shut-in judged too high at the time</i>.</p>",None),380)[0:3],
    800,300,"Two numbers that are not measurements","Two blanks with a reason")
S["rb02-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Reservoir pressure is now 178 bar. Depletion continues but aquifer support looks reasonable. "
    "Recovery should be good.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Pressure has fallen from 220 bar at start-up in 2015 to 178, measured in February. The fall "
    "was steep to year four and almost flat since, while production continued, which points to water "
    "drive becoming dominant; water cut has risen from 8 to 34 percent. No survey for years six and "
    "seven. The aquifer is therefore a range, three to nine times the oil volume.</p>",None),380)[0:3],
    800,300,"One figure and three adjectives","A history, its evidence and a range")
S["rb02-f13"]=lambda: f_realia(form("Plan your reservoir note",
    [("The pressure then and now, with dates",BLANK),("What has been produced",BLANK),
     ("Which drive, and the evidence",BLANK),("What is missing from the history",BLANK),
     ("The estimate, as a range",BLANK),("What would narrow it, and what it costs",BLANK)],
    note="Six boxes. The fourth one costs production to fill."), 560)
S["rb02-f14"]=lambda: f_scene(1000,450,
    people=[("bah",60,176,{"seated":True}),("haddad",130,172,{}),("omar",205,176,{}),
     ("nour",290,172,{}),("nadia",365,176,{"seated":True}),("samira",440,172,{"seated":True}),
     ("yusuf",515,176,{"seated":True}),("ahmad",590,170,{}),("adeel",655,172,{}),
     ("yara",720,170,{}),("lars",785,172,{}),("ida",845,170,{}),
     ("wei",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.22),
     ("container",420,190,0.32),("water",550,196,0.24),("table",650,0,1.0),
     ("data",860,198,0.22),("shelf",930,96,0.5)],
    board=(40,22,206,112,"ONE TANK, FIVE PUSHES",[("which","is dominant?"),("needs","pressure"),("has","no map")]),
    clockat=(262,34,22,14,0))
S["rb02-f15"]=lambda: f_chart([("yes",2),("mostly",5),("there are gaps",9),
    ("I do not know",4),("we do not measure it",3)], unit="operators")
S["rb02-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Two italic figures and a project that was deferred",
    "<p><b>An annual reservoir summary</b> with two italic pressure figures where the surveys should "
    "be.</p>"
    "<p><b>A monthly production report</b> showing the target met in both of those years.</p>"
    "<p><b>A graph</b> of pressure against cumulative production, with a smooth line drawn straight "
    "through the gap.</p>"
    "<p><b>A water injection scheme drawing</b>, stamped <i>deferred</i>.</p>"
    "<p><i>The smooth line made the aquifer look twice as strong as the range allowed. The pressure "
    "is now falling again.</i></p>",
    "Seven o'clock. The engineer who drew the line was being helpful."), 600)

# ---------------- Unit 3 ----------------
S["rb03-f1"]=lambda: f_icons([("barrier","a preventer"),("racking","a stack"),
    ("scissors","a ram"),("timer","annular"),("knife","to shear"),
    ("padlock","to close"),("wall","a barrier"),("water","primary"),
    ("security","secondary"),("pipe","a choke line"),("transfer","a kill line"),
    ("fusebox","a manifold"),("boiler","an accumulator"),
    ("handsup","a function test"),("thermostat","a pressure test"),
    ("jug","drilling fluid")],4)
S["rb03-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("ida",405,180,{}),
     ("yusuf",490,180,{"seated":True}),("ahmad",570,180,{"seated":True}),
     ("samira",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("jug",710,198,0.24)],
    board=(30,24,214,110,"TWO BARRIERS, NOT EQUAL",[("primary","the mud"),("secondary","the stack"),("order","matters")]),
    clockat=(262,36,22,10,0))
S["rb03-f3"]=lambda: f_icons([("engine","the wellhead connection at the bottom"),
    ("scissors","the ram preventers"),("timer","the annular preventer above them"),
    ("pipe","the choke and kill outlets"),("boiler","the accumulator and control panel"),
    ("note","bottom to top, and the order matters")],3)
S["rb03-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published test intervals, for safety-critical equipment",
    ["The equipment","The test type","The interval","The source document","The year"],
    blankrows(6,5),
    note="The box at the foot: the interval we could not find written down anywhere. A standard and a "
    "company procedure are not the same authority."), 620)
S["rb03-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the stack, and what it is for",
    "<p style='font-size:12px;color:#6b6861'>Source: API Standard 53, <i>Blowout Prevention "
    "Equipment Systems for Drilling Wells</i>, 2012 edition. In our own words.</p>"
    "<p>Two barriers, and they are not equal. The <b>primary</b> barrier is the column of drilling "
    "fluid in the hole and its weight. It works all the time, quietly, while nothing is happening. "
    "The <b>secondary</b> barrier is the preventer stack, and it works only once the primary barrier "
    "has already failed.</p>"
    "<p>That is the whole philosophy. The stack is not the plan. It is what is left of the plan.</p>"
    "<p><b>Pipe rams</b> close around one particular pipe size. <b>Blind rams</b> close on an open "
    "hole. <b>Blind-shear rams</b> cut what is across them and then seal. The <b>annular</b> closes "
    "around almost anything, including nothing. A <b>choke line</b> routes flow out under control; a "
    "<b>kill line</b> lets heavy fluid be pumped back in.</p>"
    "<p>An <b>accumulator</b> stores pressure so the stack can be operated without a pump running, "
    "and there are control panels in more than one place, because the nearest one is the one you may "
    "not be able to reach.</p>"
    "<p>A <b>function test</b> shows the equipment moves. A <b>pressure test</b> shows it seals. They "
    "are not the same and they are done at different intervals.</p>"
    "<p><b>A passed pressure test proves that equipment held that pressure, from that direction, in "
    "that configuration, on that day.</b></p>",
    "An equipment standard. It is not a well control procedure and it is not about well design."),
    580)
S["rb03-f6"]=lambda: f_realia(tbl("Word study",
    "What the word assumes",
    ["The word","What it assumes","An example"],
    [["if","it may or may not happen","If the well flows, the stack is shut in."],
     ["when","it will happen, at some point","When the test is finished, sign the record."],
     ["unless","it will happen, except in one case","Do not open it unless the pressure is bled off."],
     ["as soon as","immediately after","As soon as the alarm sounds, stop the pumps."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>in case</i> and <i>provided that</i>. One is a precaution and one is "
    "a condition."), 640)
S["rb03-f7"]=lambda: f_matrix(["Last function test","Last pressure test","Test pressure","Result"],
    [("Lower pipe rams",["yesterday","1 March","5,000 psi","passed"]),
     ("Blind rams",["yesterday","1 March","5,000 psi","passed"]),
     ("Lower annular",["yesterday","1 March","3,500 psi","passed"]),
     ("Upper annular",["yesterday","<b>9 days overdue</b>","&mdash;","<b>not tested</b>"]),
     ("Choke valves",["yesterday","1 March","5,000 psi","passed"]),
     ("Kill valves",["yesterday","1 March","5,000 psi","passed"])], 660)
S["rb03-f8"]=lambda: f_icons([("pipe","drill pipe of one size across the stack"),
    ("container","an open hole with nothing in it"),("iron","an irregular tool across the stack"),
    ("thread","a wireline across the stack"),("racking","a thick-walled collar across the stack"),
    ("magnifier","which preventer, and will it seal?")],3)
S["rb03-f9"]=lambda: f_realia(tbl("Rig daily report extract &mdash; Tell Sahra 21",
    "12 March &middot; contractor rig 4",
    ["Section","What it says"],
    [["Barrier status, primary","hole full; fluid weight 1.28; trip tank level steady 6 hours"],
     ["Barrier status, secondary","stack: see test table below"],
     ["Stack tests","5 of 6 components pressure tested 1 March; upper annular 9 days overdue"],
     ["Function tests","all 6 components, yesterday, all passed"],
     ["Accumulator pre-charge","low end of range; recharge time measured 11 minutes"],
     ["Shear ram qualification","5 inch pipe"],
     ["Pipe in hole","6 and a half inch collar across the rams at present"]],
    note="The fluid weight line is the barrier line. Read it before anything else on the page."),
    620)
S["rb03-f10"]=lambda: f_scene(800,400,
    people=[("ida",150,180,{}),("yusuf",260,176,{}),("omar",600,180,{})],
    props=[("desk",120,0,1.0),("logsheet",200,196,0.24),("clipboard",280,198,0.22),
     ("racking",500,170,0.44),("engine",680,186,0.4)],
    clockat=(60,40,22,11,0))
S["rb03-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>Barriers intact. Stack tested and in order. Accumulator fine. No issues to report this "
    "morning.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>Primary: hole full, fluid 1.28, level steady 6 hours. Secondary: 5 of 6 pressure tested 1 "
    "March to 5,000 psi from below; upper annular 9 days overdue with a passed function test only. "
    "Shear rams qualified for 5 inch; 6 and a half inch collar in the hole; no shear evidence for "
    "this configuration.</p>",None),380)[0:3],
    800,300,"Four sentences, no figures","Two barriers, separately, with figures")
S["rb03-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Stack tested, all good. Barriers intact.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Primary barrier first, with a figure. Then each secondary component with the <b>type</b> of "
    "test and its date. Then the one overdue item and what it still has on record. Then the one thing "
    "the records do not cover, said plainly. Then who was told, and when.</p>",None),380)[0:3],
    800,300,"The word tested","Six things, in order")
S["rb03-f13"]=lambda: f_realia(form("Plan your barrier status note",
    [("The primary barrier, with its figure",BLANK),("The secondary barrier, component by component",BLANK),
     ("The test type and date for each",BLANK),("Anything overdue",BLANK),
     ("Anything the records do not cover",BLANK),("Who was told, and when",BLANK)],
    note="Six boxes. The fifth is the hardest and the only one that cannot be faked."), 560)
S["rb03-f14"]=lambda: f_scene(1000,450,
    people=[("ida",60,176,{}),("yusuf",130,172,{}),("omar",205,176,{}),
     ("nour",290,172,{}),("ahmad",365,176,{"seated":True}),("samira",440,172,{"seated":True}),
     ("haddad",515,176,{}),("bah",590,170,{}),("lars",655,172,{}),
     ("nadia",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("adeel",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("racking",345,166,0.42),
     ("boiler",430,190,0.3),("fusebox",555,194,0.26),("table",650,0,1.0),
     ("jug",860,198,0.22),("shelf",930,96,0.5)],
    board=(40,22,206,112,"THE MUD IS THE BARRIER",[("primary","the fluid"),("secondary","the stack"),("famous","the stack")]),
    clockat=(262,34,22,12,0))
S["rb03-f15"]=lambda: f_chart([("always",3),("usually",5),("sometimes",7),
    ("almost never",6),("I have never looked",3)], unit="operators")
S["rb03-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "One word, and a collar nobody mentioned",
    "<p><b>A rig daily report</b> with the word <i>tested</i> circled.</p>"
    "<p><b>A pipe tally</b> with a 6 and a half inch collar size highlighted.</p>"
    "<p><b>A shear ram qualification certificate</b> for 5 inch pipe.</p>"
    "<p><b>A photograph of the stack</b>, the most photographed object in the industry.</p>"
    "<p><i>Every component had a current function test. One pressure test was nine days overdue. "
    "Nothing went wrong, the well was finished, and the rig moved off.</i></p>",
    "Seven o'clock. Nothing going wrong is not evidence that the decision was good."), 600)
