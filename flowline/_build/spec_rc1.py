# -*- coding: utf-8 -*-
"""Flowline Book 3 figure specs, Starting Point to Unit 3."""
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
S["rc00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each, from Books 1 and 2",
    ["What you have","An example"],
    [["A grade","heavy and sour &middot; 24 degrees API &middot; under one per cent sulfur"],
     ["A unit","a barrel &middot; a cubic meter &middot; corrected to a stated base"],
     ["A barrier","the mud, then the stack &middot; primary and secondary"],
     ["An estimate","a permeability from five plugs &middot; a range, not a figure"],
     ["A definition","where the pump ends &middot; what counts as a failure"],
     ["A certainty level","proved &middot; probable &middot; possible"]],
    note="Six boxes. This book adds the English of a document that governs a pipe, and of the "
    "sentence in each one where its own authors say what it does not cover."), 580)
S["rc00-f2"]=lambda: f_icons([("thermostat","two gauges, two different numbers"),
    ("boiler","a pump station making up the difference"),
    ("barcode","a rough internal wall, magnified"),
    ("utilitybill","the power bill, for as long as the line runs")],4)
S["rc00-f3"]=lambda: f_realia(tbl("Two lines, as matters of public record",
    "Named because a course about this industry here would be strange without them",
    ["The line","What it is, as a matter of record"],
    [["the Kirkuk&ndash;Banias pipeline","a crude oil line running from northern Iraq across Syria to the Mediterranean coast at Banias, built in the 1950s"],
     ["the Arab Gas Pipeline","a regional natural gas pipeline system connecting several countries, with a section crossing Syria"]],
    note="This book says nothing about the current condition, ownership, capacity or operation of "
    "either of them. Every engineering idea in the next twelve units applies to a line like them."),
    600)
S["rc00-f4"]=lambda: f_process(["a design code","flow regime","friction","two-phase flow","pumps",
    "inspection","external corrosion","material selection","an international standard","tanks",
    "ships","a management system"], w=740)

# ---------------- Unit 1 ----------------
S["rc01-f1"]=lambda: f_icons([("book","a code"),("certificate","a standard"),
    ("map","scope"),("thread","to apply"),("noentry","to exclude"),
    ("barrier","a boundary"),("pencil","design"),("calculator","a factor"),
    ("scales","yield strength"),("magnifier","wall thickness"),
    ("balance","allowable"),("water","a hydrostatic test"),
    ("torch","a weld"),("eye","to inspect"),("container","a terminal"),
    ("transfer","a delivery point")],4)
S["rc01-f2"]=lambda: f_scene(760,400,
    people=[("adeel",110,176,{}),("omar",320,180,{"seated":True}),("yusuf",405,180,{"seated":True}),
     ("samira",485,180,{"seated":True}),("nour",565,180,{"seated":True}),
     ("ahmad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("book",715,198,0.2)],
    board=(30,24,214,110,"SOMEBODY DREW THIS LINE",[("one side","pipeline"),("other side","plant"),("in 1986","on a drawing")]),
    clockat=(262,36,22,9,0))
S["rc01-f3"]=lambda: f_icons([("scales","a specified minimum yield strength"),
    ("calculator","a design factor applied to it"),
    ("magnifier","a calculated minimum wall thickness"),
    ("water","a hydrostatic test above operating pressure"),
    ("clipboard","an inspection record"),("note","a floor, not a ceiling")],3)
S["rc01-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six scope sections, read and nothing else",
    ["The document","What it applies to","What it excludes","The edition","A surprising exclusion"],
    blankrows(6,5),
    note="The box at the foot: the exclusion nobody at our site knew about. Read only the scope "
    "section; it is the most important page in any code."), 640)
S["rc01-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: what the code on the shelf covers",
    "<p style='font-size:12px;color:#6b6861'>Source: ASME B31.4, <i>Pipeline Transportation Systems "
    "for Liquids and Slurries</i>, one of the codes in the ASME B31 Code for Pressure Piping. In our "
    "own words.</p>"
    "<p>A design code says, for a stated pressure and a stated steel, how thick the pipe has to be, "
    "how it must be welded and inspected, how it must be tested, and what has to be done to it in "
    "service.</p>"
    "<p><b>What this one covers.</b> Liquid pipeline systems: the line, and the pump stations, tank "
    "farms, terminals and delivery points along it.</p>"
    "<p><b>How the thickness comes out.</b> Steel is bought to a <b>specified minimum yield "
    "strength</b>. The code does not let you design to that figure; it applies a <b>design "
    "factor</b> below one. In this code the factor for most of the pipeline length is <b>0.72</b>, so "
    "the design sits at about seventy-two per cent of the specified minimum yield.</p>"
    "<p>That margin is not spare capacity. It is the room the line will need for a dent, a scratch "
    "from a digger, thirty years of internal corrosion, a weld that was acceptable rather than "
    "perfect.</p>"
    "<p><b>Where the scope ends.</b> It does <b>not</b> cover piping inside refineries and process "
    "plants: that is a different code with a <b>lower</b> factor, because people stand next to the "
    "pipe all day. It does not cover gas pipelines. So somebody has to draw a line on a drawing and "
    "say: this side is pipeline, that side is plant.</p>",
    "A code is a minimum, for a new system. It does not say your forty-year-old line is fit today, "
    "and it does not make anybody competent."), 580)
S["rc01-f6"]=lambda: f_realia(tbl("Word study",
    "Scope",
    ["The phrase","What it does","An example"],
    [["applies to","states what is covered","This code applies to liquid pipeline systems."],
     ["does not apply to","states what is not","It does not apply to piping within refineries."],
     ["excludes","the same, more directly","The scope excludes gas pipelines."],
     ["is within the scope of","puts one item inside","The pump station is within the scope of this code."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>for the purposes of this code</i> and <i>is covered by</i>."), 660)
S["rc01-f7"]=lambda: f_realia(tbl("Export line 12, from end to end",
    "Which code applies where",
    ["Section","Length","Code that applies"],
    [["Tank farm manifold to the boundary flange","40 m","plant piping code"],
     ["Boundary flange to pump station 1","3.2 km","<b>pipeline code</b>"],
     ["Pump station 1","&mdash;","<b>pipeline code</b>"],
     ["Pump station 1 to the terminal boundary flange","10.9 km","<b>pipeline code</b>"],
     ["Terminal boundary flange onward","60 m","plant piping code"]],
    note="Two boundaries, both at a flange, both decided by an engineer on a drawing at design. The "
    "pipe does not know which code it was designed to."), 600)
S["rc01-f8"]=lambda: f_icons([("map","a buried cross-country line"),
    ("boiler","a pipe inside a process unit"),("iron","a pump station on the route"),
    ("cloud","a gas line"),("container","a pipe inside a tank farm manifold"),
    ("magnifier","which code?")],3)
S["rc01-f9"]=lambda: f_realia(tbl("Line list extract &mdash; revision 4",
    "Six lines &middot; two of them meet at a flange",
    ["Line","Fluid","Design pressure","Steel","Wall, mm","Code"],
    [["12-CR-001","crude","62 bar","as certified","<b>8.0</b>","pipeline"],
     ["12-CR-002","crude","62 bar","as certified","<b>9.5</b>","plant"],
     ["08-WI-004","produced water","78 bar","as certified","7.1","pipeline"],
     ["06-GL-011","lift gas","96 bar","as certified","6.4","plant"],
     ["12-CR-007","crude","62 bar","as certified","8.0","pipeline"],
     ["04-DR-022","drains","10 bar","as certified","3.9","plant"]],
    numcols=(2,4),
    note="Lines 001 and 002 carry the same fluid at the same pressure in the same steel, and have "
    "different thicknesses. These two lines meet at a flange."), 640)
S["rc01-f10"]=lambda: f_scene(800,400,
    people=[("adeel",180,180,{}),("yusuf",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("desk",560,0,1.0),("logsheet",640,196,0.24),("table",120,0,0.9),
     ("map",200,196,0.26),("pencil",420,198,0.18)],
    clockat=(60,40,22,10,0))
S["rc01-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Extract A",None,
    "<p>12-CR-001, crude, 62 bar, wall thickness <b>8.0 millimeters</b>.</p>"
    "<p>Nothing else.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Extract B",None,
    "<p>12-CR-001, crude, 62 bar. Code: pipeline liquids code, <b>1998 edition</b>, design factor "
    "<b>0.72</b>. Calculated minimum <b>7.1</b>. Specified <b>8.0</b>. Lowest reading at the 2021 "
    "inspection <b>7.4</b>.</p>",None),380)[0:3],
    800,300,"One thickness","Three thicknesses, an edition and a factor")
S["rc01-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Export line 12 is designed and constructed in accordance with the applicable pipeline code. "
    "Wall thickness is adequate and the line has been hydrostatically tested.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>12 inch, 14.2 kilometers. Pipeline liquids code, 1998 edition, factor 0.72. Calculated 7.1, "
    "specified 8.0, last measured 7.4. Tested to 1.25 times operating pressure in <b>2003</b>; "
    "nothing since. Scope boundary at the north manifold flange, <b>drawn 1986</b>; two buildings "
    "constructed inside it in 2011 and 2014; requesting a review on that basis.</p>",None),380)[0:3],
    800,300,"Compliant","Compliant, with dates")
S["rc01-f13"]=lambda: f_realia(form("Plan your design basis note",
    [("The line, its size and length",BLANK),("The code, edition and design factor",BLANK),
     ("The three wall thicknesses",BLANK),("The test date and pressure",BLANK),
     ("The scope boundary and when it was drawn",BLANK),("Anything that has changed since",BLANK)],
    note="Six boxes. The last one is the one somebody has to be told about."), 560)
S["rc01-f14"]=lambda: f_scene(1000,450,
    people=[("adeel",60,176,{}),("yusuf",130,172,{}),("omar",205,176,{"seated":True}),
     ("nour",290,172,{}),("samira",365,176,{"seated":True}),("ahmad",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("haddad",590,170,{}),("ida",655,172,{}),
     ("lars",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("book",350,198,0.2),
     ("map",420,196,0.24),("magnifier",550,198,0.2),("table",650,0,1.0),
     ("window",860,80,0.5),("signpost",930,194,0.24)],
    board=(40,22,206,112,"SOMEBODY DREW THIS LINE",[("1986","correct then"),("2011","a building"),("2014","another")]),
    clockat=(262,34,22,11,0))
S["rc01-f15"]=lambda: f_chart([("yes",3),("I know where to look",5),("somebody knows",6),
    ("no",6),("I did not know editions changed",4)], unit="operators")
S["rc01-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A boundary that was right, and a village that arrived",
    "<p><b>A 1986 drawing</b> with a dashed boundary line, and two buildings added in a different pen "
    "with 2011 and 2014 beside them.</p>"
    "<p><b>A line list</b> showing a 0.72 design factor.</p>"
    "<p><b>A hydrostatic test record</b> from 2003.</p>"
    "<p><b>A thickness reading</b> of 7.4 millimeters against a calculated minimum of 7.1.</p>"
    "<p><i>Eleven people now work within twenty meters of a line designed for a route with nobody on "
    "it. No permit was breached and the drawing has not been looked at since 1986.</i></p>",
    "Seven o'clock. Nobody did anything wrong, and nobody has asked the question either."), 600)

# ---------------- Unit 2 ----------------
S["rc02-f1"]=lambda: f_icons([("thread","a straight thread of dye"),
    ("storm","the dye broken up"),("pen","a dye injection needle"),
    ("jug","a tank feeding the tube"),("wind","velocity"),
    ("magnifier","a diameter"),("scales","density"),("spoon","viscosity"),
    ("calculator","a ratio whose units cancel"),("tally","two thousand"),
    ("tally","four thousand"),("barrier","the transitional band"),
    ("noentry","a sharp, disturbed inlet"),("water","a smooth inlet"),
    ("quotemark","a bench of 1883"),("pipe","a modern pipeline")],4)
S["rc02-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("adeel",405,180,{}),
     ("samira",490,180,{"seated":True}),("yara",570,180,{"seated":True}),
     ("ahmad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("jug",715,198,0.2)],
    board=(30,24,214,110,"A NUMBER WITH NO UNITS",[("below 2,000","laminar"),("above 4,000","turbulent"),("between","nobody promises")]),
    clockat=(262,36,22,9,30))
S["rc02-f3"]=lambda: f_icons([("wind","velocity: pushes the number up"),
    ("magnifier","diameter: up"),("scales","density: up"),
    ("spoon","viscosity: down"),("calculator","the four combined, units cancelling"),
    ("note","four quantities, one number")],3)
S["rc02-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six flows, anywhere",
    ["The fluid","The pipe size","The velocity","Which regime","How we decided"],
    blankrows(6,5),
    note="The box at the foot: the one we could not classify. A river, a tap, a hose, a line &mdash; "
    "all of them count."), 620)
S["rc02-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the experiment behind every pressure drop calculation",
    "<p style='font-size:12px;color:#6b6861'>Source: Osborne Reynolds, Philosophical Transactions of "
    "the Royal Society, 1883. In our own words.</p>"
    "<p>Reynolds led a glass tube out of a tank of still water and put a fine thread of dye into the "
    "mouth of it.</p>"
    "<p>At low flow the thread ran the whole length <b>as a straight line</b>. The water moved in "
    "smooth parallel layers and nothing crossed between them. He called it <b>direct</b>; we call it "
    "<b>laminar</b>.</p>"
    "<p>As he raised the flow, the thread suddenly <b>broke up</b> and mixed through the tube. He "
    "called it <b>sinuous</b>; we call it <b>turbulent</b>.</p>"
    "<p>The great result is what decides which one you get: the <b>velocity</b>, the <b>diameter</b> "
    "and the <b>density</b> push it toward turbulent, and the <b>viscosity</b> pushes it back. "
    "Combined in the right way they give a quantity with <b>no units at all</b>.</p>"
    "<p>A number with no units can be compared across completely different situations. A glass tube "
    "in 1883 and a twelve inch line of crude today, at the same value, are in the same kind of "
    "flow.</p>"
    "<p><b>Below about 2,000</b> laminar; <b>above about 4,000</b> turbulent; between them a "
    "transitional band where no careful engineer will promise a figure.</p>"
    "<p><b>What the experiment could not settle.</b> The transition was <b>not a sharp line</b>. "
    "Reynolds found it depended on how disturbed the water was at the inlet, and with a very smooth "
    "entry laminar flow could be sustained far above 2,000.</p>",
    "Water, one tube, one laboratory. The two numbers in every textbook are conventions built on a "
    "real observation, not constants of nature."), 580)
S["rc02-f6"]=lambda: f_realia(tbl("Word study",
    "Thresholds",
    ["The phrase","What it says about the boundary","An example"],
    [["below","on the low side","Below about 2,000 the flow is laminar."],
     ["above","on the high side","Above about 4,000 it is turbulent."],
     ["between … and …","the band itself","Between 2,000 and 4,000 it may be either."],
     ["once","at the moment it crosses","Once the flow becomes turbulent, the friction rises sharply."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>at around</i> and <i>in the region of</i>. <i>At 2,000</i> and "
    "<i>at around 2,000</i> are different claims, and only one of them is supported by the paper."),
    660)
S["rc02-f7"]=lambda: f_part("Where six real flows sit",
    [("laminar",1,"#3d4a7a"),("transitional",0,"#b08a3a"),("turbulent",5,"#7a3b1f")])
S["rc02-f8"]=lambda: f_icons([("thread","a thin thread of dye running straight"),
    ("storm","a dye thread breaking up"),("spoon","honey being poured"),
    ("canal","a wide river"),("jug","a cold heavy crude in a narrow line"),
    ("magnifier","which regime?")],3)
S["rc02-f9"]=lambda: f_realia(tbl("Flow calculation sheet &mdash; export line 12",
    "Four inputs, each with its source",
    ["Input","Value","Where it came from"],
    [["Internal diameter","303.2 mm","the line list"],
     ["Flow","5,200 bbl/d","the custody meter, March average"],
     ["Density","872 kg/m3","measured on the export blend, March"],
     ["Viscosity","9 cSt at 40 C","<b>a 2019 laboratory report on a sample from well 7</b>"],
     ["Result","about 86,000","comfortably turbulent"]],
    note="The viscosity is the figure with the least evidence behind it, and it is the only one not "
    "measured on this fluid."), 620)
S["rc02-f10"]=lambda: f_scene(800,400,
    people=[("nour",180,180,{}),("yara",300,176,{}),("omar",620,180,{})],
    props=[("desk",150,0,1.0),("logsheet",230,196,0.24),("quotemark",300,198,0.2),
     ("dashboard",540,190,0.3),("jug",700,198,0.22)],
    clockat=(60,40,22,10,0))
S["rc02-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Sheet A",None,
    "<p>Diameter 303.2 mm. Flow 5,200 bbl/d. Density 872. Viscosity 9 cSt.</p>"
    "<p>Result: about 86,000. Turbulent.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Sheet B",None,
    "<p>The same four inputs, each with its source. The laboratory range for the viscosity, 9 to 24 "
    "centistokes. And the answer at both ends of that range: <b>86,000 and 32,000 &mdash; both "
    "comfortably turbulent</b>.</p>",None),380)[0:3],
    800,300,"Four numbers and an answer","Four sources and a range")
S["rc02-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Export line 12 flow is turbulent. Reynolds number approximately 86,000.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Every input with its source. The viscosity identified as the weakest, from a 2019 report on "
    "another well. Result 86,000; recalculated at 24 centistokes, 32,000. <b>The conclusion does not "
    "depend on the weak input in this case, and I have said so rather than leaving it to be "
    "assumed.</b></p>",None),380)[0:3],
    800,300,"An answer","An answer and its weakest input")
S["rc02-f13"]=lambda: f_realia(form("Plan your calculation note",
    [("The line and its internal diameter, with the source",BLANK),
     ("The flow and velocity, with the source",BLANK),("The density, with the source",BLANK),
     ("The viscosity, with the source",BLANK),("The answer and the regime",BLANK),
     ("The answer at the other end of the weakest range",BLANK)],
    note="Six boxes. Say how old the figure in the fourth box is."), 560)
S["rc02-f14"]=lambda: f_scene(1000,450,
    people=[("nour",60,176,{}),("yara",130,172,{}),("omar",205,176,{}),
     ("adeel",290,172,{}),("samira",365,176,{"seated":True}),("ahmad",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("haddad",590,170,{}),("ida",655,172,{}),
     ("lars",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("bah",905,172,{}),("yusuf",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("jug",350,198,0.2),
     ("logsheet",420,198,0.22),("quotemark",550,198,0.2),("table",650,0,1.0),
     ("thermometer",860,196,0.22),("shelf",930,96,0.5)],
    board=(40,22,206,112,"A NUMBER WITH NO UNITS",[("1883","a glass tube"),("today","a 12 inch line"),("same value","same flow")]),
    clockat=(262,34,22,12,0))
S["rc02-f15"]=lambda: f_chart([("always",2),("usually",4),("sometimes",7),
    ("never",5),("I had not thought about it",6)], unit="operators")
S["rc02-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "One figure, eleven calculations, no source",
    "<p><b>A flow calculation sheet</b> with the viscosity input circled.</p>"
    "<p><b>A 2019 laboratory report</b> for a sample from a different well.</p>"
    "<p><b>A spreadsheet printout</b> showing the same viscosity figure in eleven other "
    "calculations.</p>"
    "<p><b>A glass tube</b> with a dye needle.</p>"
    "<p><i>It was entered by somebody who knew exactly where it came from and wrote it in the next "
    "cell. Six years and four spreadsheets later, the source has gone.</i></p>",
    "Seven o'clock. Ten of the eleven conclusions do not depend on it. One does."), 600)

# ---------------- Unit 3 ----------------
S["rc03-f1"]=lambda: f_icons([("data","a chart with curved lines"),
    ("calculator","a friction factor"),("water","a smooth internal surface"),
    ("barcode","a rough internal surface"),("magnifier","a roughness height"),
    ("pipe","a pipe diameter"),("balance","the ratio of the two"),
    ("thread","the laminar straight line"),("barrier","the shaded critical zone"),
    ("data","curves going flat on the right"),("thermostat","a gauge at each end"),
    ("fusebox","a pump power meter"),("pipe","a new clean pipe section"),
    ("crate","a corroded pipe section"),("spoon","a deposit layer inside"),
    ("note","the chart is right, the input is a guess")],4)
S["rc03-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("tomas",405,180,{}),
     ("adeel",490,180,{}),("samira",570,180,{"seated":True}),
     ("ahmad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("data",715,196,0.2)],
    board=(30,24,214,110,"THE CURVES GO FLAT",[("laminar","regime only"),("transition","both"),("turbulent","roughness only")]),
    clockat=(262,36,22,10,0))
S["rc03-f3"]=lambda: f_icons([("thread","the laminar straight line"),
    ("barrier","the shaded critical zone"),("data","the transition zone, still sloping"),
    ("data","the fully turbulent zone, flat"),("barcode","a magnified rough surface"),
    ("note","three regions, two inputs, one that matters most")],3)
S["rc03-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published roughness values",
    ["The material","The published value","The units","The condition it assumes","The source"],
    blankrows(6,5),
    note="The fourth column is the one to be careful with. The box at the foot: the condition none of "
    "our pipes are in."), 640)
S["rc03-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the chart on the wall",
    "<p style='font-size:12px;color:#6b6861'>Source: Lewis F. Moody, \"Friction Factors for Pipe "
    "Flow\", Transactions of the ASME, 1944. In our own words.</p>"
    "<p>To work out how much pressure a pipe takes out of a fluid you need one number: the "
    "<b>friction factor</b>. Moody put it on a single chart an engineer could read in ten "
    "seconds.</p>"
    "<p><b>Two inputs.</b> The flow regime, from Unit 2. And the <b>relative roughness</b>: the "
    "height of the bumps inside the pipe divided by the diameter. The same bumps matter more in a "
    "small pipe, which is why it is a ratio.</p>"
    "<p><b>In laminar flow</b> the factor depends only on the regime; the roughness has no effect at "
    "all. <b>In the transition</b> it depends on both. <b>In fully turbulent flow</b> the curves go "
    "flat and it depends only on the <b>roughness</b>.</p>"
    "<p>Almost every line on a production site runs in that last region.</p>"
    "<p><b>Moody named his sources.</b> The chart is a compilation of other people's measurements, "
    "and he said whose work it was and what each piece contributed.</p>"
    "<p><b>The input nobody measures.</b> The published value for commercial steel is for pipe that "
    "is <b>new and clean</b>. Nobody measures the roughness of a pipe in service, so the value used "
    "for a line that has carried crude, water and sand for twenty-seven years is the value for pipe "
    "that came off a mill.</p>",
    "The chart is accurate and the number you put into it is an assumption. Compare the calculation "
    "with the gauges at each end: that comparison is free."), 580)
S["rc03-f6"]=lambda: f_realia(tbl("Word study",
    "Dependence",
    ["The phrase","What it claims","An example"],
    [["depends on","one thing is decided by another","The friction factor depends on the roughness."],
     ["varies with","it changes as the other changes","The pressure drop varies with the flow rate."],
     ["is a function of","the same, more formally","The factor is a function of two inputs."],
     ["is independent of","the other thing has no effect","In fully turbulent flow it is independent of the regime."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>is proportional to</i> and <i>is unaffected by</i>. The first is a "
    "much stronger claim than <i>depends on</i>."), 660)
S["rc03-f7"]=lambda: f_matrix(["Roughness, mm","Friction factor","Calculated drop, bar"],
    [("New, clean commercial steel",["0.045","0.0148","3.1"]),
     ("Moderately roughened",["0.090","0.0176","3.7"]),
     ("Our line, implied by the gauges",["<b>0.180</b>","<b>0.0210</b>","<b>4.4</b>"])], 640)
S["rc03-f8"]=lambda: f_icons([("spoon","a very slow flow of a thick fluid"),
    ("wind","a fast flow in a large line"),("pipe","a new pipe"),
    ("crate","a heavily corroded pipe"),("jug","a pipe with a wax layer inside"),
    ("magnifier","which curve are we on?")],3)
S["rc03-f9"]=lambda: f_realia(tbl("Pressure drop comparison &mdash; export line 12",
    "Calculated against measured, at 5,200 barrels a day",
    ["","Calculated","Measured"],
    [["Inlet pressure","&mdash;","48.2 bar"],["Outlet pressure","&mdash;","43.8 bar"],
     ["Pressure drop","<b>3.1 bar</b>","<b>4.4 bar</b>"],
     ["Roughness used","0.045 mm (new, clean)","&mdash;"],
     ["Roughness implied","&mdash;","<b>about 0.18 mm</b>"]],
    note="The implied roughness is four times the value we assumed. That difference is the only "
    "routine measurement anybody makes of the inside of this pipeline."), 600)
S["rc03-f10"]=lambda: f_scene(800,400,
    people=[("nour",180,180,{}),("tomas",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("desk",560,0,1.0),("logsheet",640,196,0.24),("board",120,96,0.56),
     ("data",420,196,0.24)],
    clockat=(60,40,22,11,0))
S["rc03-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>Calculated pressure drop at current flow: <b>3.1 bar</b>.</p>"
    "<p>Nothing else.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>Calculated 3.1, measured 4.4, implied roughness about 0.18 millimeters against an assumed "
    "0.045. And the same three figures for each of the last six years: implied roughness 0.07, 0.09, "
    "0.11, 0.13, 0.16, 0.18 &mdash; <b>rising steadily, not a step</b>.</p>",None),380)[0:3],
    800,300,"One month, one figure","Six years, and a trend")
S["rc03-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Export line 12 pressure drop calculates at 3.1 bar at current flow. Measured drop is 4.4 bar. "
    "Calculation to be reviewed.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Calculated 3.1 using 0.045 millimeters, <b>the published figure for new, clean commercial "
    "steel</b>. Measured 4.4. Implied roughness about 0.18. Six-year trend rising steadily. Two "
    "causes would produce this: general internal corrosion, which is removing wall, or a deposit, "
    "which is not. A cleaning run separates them and is cheaper.</p>",None),380)[0:3],
    800,300,"The calculation to be reviewed","Two causes and a way to tell them apart")
S["rc03-f13"]=lambda: f_realia(form("Plan your hydraulic note",
    [("The line and the flow",BLANK),("The calculated drop and the roughness assumed",BLANK),
     ("The measured drop",BLANK),("The implied roughness",BLANK),
     ("The trend over several years",BLANK),("The two possible causes and what tells them apart",BLANK)],
    note="Six boxes. Say whether yours is a trend or a step."), 560)
S["rc03-f14"]=lambda: f_scene(1000,450,
    people=[("nour",60,176,{}),("tomas",130,172,{}),("omar",205,176,{"seated":True}),
     ("adeel",290,172,{}),("samira",365,176,{"seated":True}),("ahmad",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("haddad",590,170,{}),("ida",655,172,{}),
     ("lars",720,170,{}),("wei",785,172,{}),("bah",845,170,{}),
     ("yara",905,172,{}),("yusuf",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("data",350,196,0.24),
     ("pipe",425,196,0.22),("crate",550,194,0.24),("table",650,0,1.0),
     ("fusebox",860,196,0.22),("thermostat",930,196,0.2)],
    board=(40,22,206,112,"THE INPUT IS A GUESS",[("assumed","0.045 mm"),("implied","0.18 mm"),("free","compare the gauges")]),
    clockat=(262,34,22,12,0))
S["rc03-f15"]=lambda: f_chart([("every month",2),("occasionally",4),
    ("only after a problem",7),("never",8),("no gauges at both ends",3)], unit="operators")
S["rc03-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Six years of data and one missing column",
    "<p><b>A six-year table</b> of calculated and measured pressure drops, with the implied roughness "
    "rising in every row from 0.07 to 0.18 millimeters.</p>"
    "<p><b>A published roughness table</b> with the words <i>new</i> and <i>clean</i> in small type "
    "under the values.</p>"
    "<p><b>A pump power trend</b> rising, put down to pump wear.</p>"
    "<p><b>Two pipe samples</b>, one new and one corroded.</p>"
    "<p><i>Both numbers were recorded every month, on the same sheet, by people doing their jobs "
    "properly. Nobody worked the roughness backwards, because the sheet did not ask for it.</i></p>",
    "Seven o'clock. The booster pump is drawing eighteen per cent more power than in 2019 at the same "
    "flow."), 620)
