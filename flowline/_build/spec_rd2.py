# -*- coding: utf-8 -*-
"""Flowline Book 4 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Unit 4 ----------------
S["rd04-f1"]=lambda: f_icons([("councilbuilding","a parliamentary chamber"),
    ("book","a published directive"),("archive","a national statute book"),
    ("calendar","a date circled"),("pipe","a fuel pump nozzle"),
    ("tally","a sulfur content in mg/kg"),("data","a benzene limit"),
    ("noentry","lead, crossed out"),("barcode","an aromatics limit"),
    ("table","parameter, unit, limit, method"),("timer","a transitional period"),
    ("ship","a tanker crossing a border"),("certificate","a product certificate for export"),
    ("boiler","a refinery hydrotreater"),("worldmap","a market map"),
    ("note","it does not apply here, and it decides what we make")],4)
S["rd04-f2"]=lambda: f_scene(760,400,
    people=[("yara",110,176,{}),("omar",320,180,{"seated":True}),("nour",405,180,{"seated":True}),
     ("samira",485,180,{"seated":True}),("haddad",565,180,{}),("nadia",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("calendar",715,198,0.2)],
    board=(30,24,214,110,"THE LIMIT FALLS",[("date 1","350"),("date 2","50"),("date 3","10")]),
    clockat=(262,36,22,10,30))
S["rd04-f3"]=lambda: f_icons([("note","a parameter name"),("scales","a unit of measurement"),
    ("tally","a maximum limit"),("balance","a minimum limit"),
    ("certificate","a named test method with its edition"),
    ("note","four columns, and a limit alone is not a specification")],3)
S["rd04-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six fuel specifications in force somewhere",
    ["The market","The fuel","The sulfur limit","In force from","Test method named?"],
    blankrows(6,5),
    note="The box at the foot: the tightest and the loosest. The gap between them is a refinery "
    "project."), 660)
S["rd04-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: somebody else's law, and why it decides what we make",
    "<p style='font-size:12px;color:#6b6861'>Source: Directive 98/70/EC of the European Parliament "
    "and of the Council relating to the quality of petrol and diesel fuels, as amended. In our own "
    "words.</p>"
    "<p>A fuel specification can come from three places. A <b>buyer</b> can write one into a "
    "contract. A <b>standards body</b> can publish one. And a <b>legislature</b> can make one the "
    "law. The third kind is the one you cannot negotiate.</p>"
    "<p>This directive is the European law on road fuel quality. It sets limits on <b>sulfur</b>, "
    "<b>benzene</b>, <b>aromatics</b>, <b>lead</b> and a number of other parameters, and for each one "
    "it names the <b>test method</b>. A limit with no method beside it is not a specification, "
    "because two laboratories can disagree and both be right.</p>"
    "<p><b>The dates matter as much as the figures.</b> The sulfur limit for diesel came down in "
    "steps, each step with a date from which it applied. Some member states were allowed a "
    "<b>transitional period</b>. So the question <i>what is the limit</i> has no answer without a "
    "date and a place.</p>"
    "<p><b>Why we read it here.</b> It does not apply to us. It applies to the market we want to sell "
    "into. If our gas oil holds more sulfur than the limit, we can sell it somewhere else, at a lower "
    "price, or we can build a <b>hydrotreater</b>. A hydrotreater takes about four years. The "
    "directive gave notice in years, not months, and that was deliberate.</p>",
    "Read the amendments, not the original. A directive is amended many times, and the figure you "
    "remember may be two editions old."), 580)
S["rd04-f6"]=lambda: f_realia(tbl("Word study",
    "Deadlines and phasing",
    ["The phrase","What it fixes","An example"],
    [["by","the last acceptable date","By 1 January the limit is 10 mg/kg."],
     ["with effect from","the date a rule starts","With effect from that date, the lower limit applies."],
     ["no later than","an outer deadline","Member states shall comply no later than that date."],
     ["from that date","everything after it","From that date, the old grade cannot be sold."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>until</i> and <i>during a transitional period</i>. <i>By</i> and "
    "<i>from</i> are not the same date."), 680)
S["rd04-f7"]=lambda: f_timeline([(0.00,"the directive","as first made"),
    (0.30,"first step","sulfur down"),(0.62,"second step","10 mg/kg"),
    (0.84,"transition","some member states"),(1.00,"now","one limit")], 0.62, w=720)
S["rd04-f8"]=lambda: f_icons([("ship","a cargo exported to that market"),
    ("truck","a cargo sold domestically"),("worldmap","a cargo sold to a third country"),
    ("boiler","a fuel for marine use"),("radiator","a fuel for a power station"),
    ("magnifier","does this specification apply?")],3)
S["rd04-f9"]=lambda: f_realia(tbl("Export specification comparison &mdash; gas oil, 18 May",
    "One crude, three specifications, one plant",
    ["Parameter","Domestic","Export A","Export B","Method"],
    [["Sulfur, mg/kg","max 500","<b>max 50</b>","<b>max 10</b>","as named"],
     ["Density at 15 C","0.820 to 0.860","0.820 to 0.845","0.820 to 0.845","as named"],
     ["Cetane index, min","46","46","46","as named"],
     ["Flash point, C, min","56","56","56","as named"],
     ["Water, mg/kg, max","200","200","200","as named"],
     ["Ash, per cent, max","0.01","0.01","0.01","as named"],
     ["Pour point, C, max","&minus;6","&minus;6","&minus;9","as named"],
     ["Appearance","clear","clear","clear","visual"]],
    note="Two rows differ by a factor of fifty. The rest are the same. <b>One crude, three "
    "specifications, one plant.</b>"), 680)
S["rd04-f10"]=lambda: f_scene(800,400,
    people=[("yara",180,180,{}),("omar",300,176,{}),("haddad",620,180,{})],
    props=[("table",150,0,0.95),("table",580,0,0.9),("spreadsheet",230,198,0.2),
     ("form",660,198,0.2),("worldmap",430,196,0.24)],
    clockat=(60,40,22,11,0))
S["rd04-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Nomination A",None,
    "<p>Product: gas oil. Volume: 8,400 cubic meters. Destination: as advised.</p>"
    "<p>Three lines.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Nomination B",None,
    "<p>The same three lines, plus: <b>governing specification</b>, with its market and its sulfur "
    "limit named; and a tick-box, <i>certificate checked against the governing specification</i>, "
    "initialed and dated.</p>",None),380)[0:3],
    800,300,"Product, volume, destination","And which specification governs")
S["rd04-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Cargo 2214 is on specification. Loading may proceed.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Sulfur 412 mg/kg. <b>Domestic limit 500: compliant. Export A limit 50: not compliant. Export "
    "B limit 10: not compliant.</b> The cargo can be sold domestically and into neither export "
    "market. The nomination carries no governing specification line, which is how this came to the "
    "jetty. The export option means hydrotreating, and that is a project, not a decision.</p>",
    None),380)[0:3],
    800,300,"On specification","On specification for where?")
S["rd04-f13"]=lambda: f_realia(form("Plan your cargo note",
    [("The cargo and the certificate date",BLANK),("The governing result and its test method",BLANK),
     ("Every market, with its limit",BLANK),("Where it can and cannot go",BLANK),
     ("What is missing from the paperwork",BLANK),("What the export option would require",BLANK)],
    note="Six boxes. In the third, give the date each limit came into force."), 560)
S["rd04-f14"]=lambda: f_scene(1000,450,
    people=[("yara",60,176,{}),("omar",130,172,{}),("nour",205,176,{}),
     ("haddad",290,172,{}),("samira",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("adeel",590,170,{}),("wei",655,172,{}),
     ("tomas",720,170,{}),("ida",785,172,{}),("lars",845,170,{}),
     ("yusuf",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.2),
     ("form",420,198,0.2),("certificate",550,198,0.2),("table",650,0,1.0),
     ("worldmap",860,196,0.24),("boiler",930,192,0.22)],
    board=(40,22,206,112,"ON SPEC FOR WHERE?",[("500","domestic"),("50","export A"),("10","export B")]),
    clockat=(262,34,22,12,0))
S["rd04-f15"]=lambda: f_chart([("always",3),("usually",4),("only for exports",6),
    ("never",6),("we only have one market",4)], unit="operators")
S["rd04-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A cargo on specification, and nowhere to send it",
    "<p><b>A cargo nomination</b> with no line for the governing specification.</p>"
    "<p><b>A certificate of quality</b> reading 500 mg/kg sulfur.</p>"
    "<p><b>A three-column comparison</b> showing limits of 10, 50 and 500.</p>"
    "<p><b>A chartering confirmation</b> for a ship already on her way.</p>"
    "<p><b>A hydrotreater project outline</b>, four years and a number nobody wants to read out.</p>"
    "<p><i>The cargo met the only limit anybody at the jetty had ever been told about. The ship was "
    "chartered for a port where that limit has not applied for years.</i></p>",
    "Seven o'clock. Freight both ways, demurrage, and a cargo back in the tank it came from."), 620)

# ---------------- Unit 5 ----------------
S["rd05-f1"]=lambda: f_icons([("engine","a single-cylinder test engine"),
    ("signal","a knock sensor and detector"),("tin","the hundred reference"),
    ("tin","the zero reference"),("container","a burette blending the two"),
    ("dashboard","a compression ratio dial"),("timer","600 rev/min"),
    ("timer","900 rev/min"),("hot","an inlet mixture heater"),
    ("data","a knocking pressure trace"),("pipe","a pump labeled 95"),
    ("pipe","a pump labeled 91"),("tally","a sensitivity figure"),
    ("computer","a modern engine control unit"),("thermostat","a knock sensor on a modern block"),
    ("note","the engine says so")],4)
S["rd05-f2"]=lambda: f_scene(760,400,
    people=[("yara",110,176,{}),("omar",320,180,{"seated":True}),("nour",405,180,{"seated":True}),
     ("ahmad",485,180,{"seated":True}),("samira",565,180,{}),("nadia",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("engine",715,192,0.22)],
    board=(30,24,214,110,"SAME FUEL",[("research","600, cool"),("motor","900, heated"),("95","and 86")]),
    clockat=(262,36,22,11,0))
S["rd05-f3"]=lambda: f_process(["sample runs|in the test engine",
    "compression raised|until knock","two references|blended",
    "blend runs|same conditions","blend adjusted|until it knocks the same",
    "the answer|is the blend"], w=720)
S["rd05-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six numbers on six pumps",
    ["The country","The number on the pump","Which convention","Under the other convention","The source"],
    blankrows(6,5),
    note="The box at the foot: the two that are the same fuel. Expect an argument about them."), 660)
S["rd05-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the number is a comparison, not a measurement",
    "<p style='font-size:12px;color:#6b6861'>Source: ASTM D2699, <i>Research Octane Number of Spark-"
    "Ignition Engine Fuel</i>, and ASTM D2700, <i>Motor Octane Number of Spark-Ignition Engine "
    "Fuel</i>. In our own words.</p>"
    "<p>Octane number is not a property you can weigh. It is the answer to a question: <b>which "
    "reference blend knocks the same as this fuel, in this engine, under these conditions?</b></p>"
    "<p>The engine is a single cylinder with an <b>adjustable compression ratio</b> and a knock "
    "detector. Two reference fuels define the scale: one is called a hundred, the other zero. The "
    "sample is run and the compression raised until knock is detected. A blend of the two references "
    "is then adjusted until it knocks the same. <b>The octane number of the fuel is the percentage of "
    "the first reference in that blend.</b></p>"
    "<p><b>Two conditions, two numbers.</b> The research method runs at the lower engine speed with a "
    "cool inlet. The motor method runs faster with a <b>heated</b> inlet, which is more severe, so the "
    "motor number of the same fuel is always lower. The difference is called <b>sensitivity</b>.</p>"
    "<p><b>And here is where customers get angry.</b> Some markets label a pump with the research "
    "number. Others label it with the average of the two, often called the antiknock index. A fuel "
    "labeled 95 in one country and 91 in another can be <b>the same fuel</b>.</p>",
    "The method defines the scale, so the scale cannot be checked against anything outside it. Both "
    "conventions were settled long before most of the engines now using them existed."), 580)
S["rd05-f6"]=lambda: f_realia(tbl("Word study",
    "Contrast",
    ["The word","How it joins the two halves","An example"],
    [["whereas","a direct opposition","The research number is 95, whereas the motor number is 86."],
     ["while","a contrast, more loosely","While the fuel is the same, the labels differ."],
     ["by contrast","a new sentence","By contrast, the motor method heats the inlet."],
     ["on the other hand","a second side","On the other hand, the index is an average."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>the former and the latter</i> and <i>however</i>. <i>Whereas</i> "
    "joins two clauses in one sentence; <i>however</i> starts a new one."), 680)
S["rd05-f7"]=lambda: f_matrix(["Research number","Motor number","Index","Sensitivity"],
    [("Fuel 1",["91","83","87","8"]),
     ("Fuel 2",["93","84","88.5","9"]),
     ("<b>Fuel 3</b>",["<b>95</b>","<b>86</b>","<b>91</b>","<b>9</b>"]),
     ("Fuel 4",["98","88","93","10"])], 620)
S["rd05-f8"]=lambda: f_icons([("engine","the lower speed, a cool inlet"),
    ("hot","the higher speed, a heated inlet"),("pipe","a pump in Europe"),
    ("pipe","a pump in North America"),("tally","a fuel with a large sensitivity"),
    ("magnifier","which number is this?")],3)
S["rd05-f9"]=lambda: f_realia(tbl("Certificate of quality &mdash; gasoline, batch 2301",
    "22 May &middot; one fuel, three labels, all correct",
    ["Property","Result","Method","Sold as"],
    [["Research octane number","95.2","as named","95 in market A"],
     ["Motor octane number","86.1","as named","&mdash;"],
     ["Antiknock index (calculated)","90.7","from the two above","91 in market B"],
     ["Sensitivity","9.1","from the two above","&mdash;"],
     ["Density at 15 C","0.7461","as named","&mdash;"],
     ["Benzene, per cent","0.8","as named","&mdash;"]],
    numcols=(1,),
    note="Three figures, three labels, one fuel. <b>All correct.</b>"), 640)
S["rd05-f10"]=lambda: f_scene(800,400,
    people=[("yara",180,180,{}),("haddad",620,180,{}),("omar",300,176,{})],
    props=[("table",150,0,0.95),("certificate",230,198,0.2),("pipe",430,194,0.22),
     ("pipe",490,194,0.22),("table",580,0,0.9),("note",660,198,0.2)],
    clockat=(60,40,22,12,0))
S["rd05-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Certificate A",None,
    "<p>Octane: 91.</p><p>One figure.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Certificate B",None,
    "<p>Research octane number <b>95.2</b>, by its named method. Motor octane number <b>86.1</b>, by "
    "its named method. Antiknock index <b>90.7</b>, calculated. Sensitivity <b>9.1</b>. And the grade "
    "label used in each of three markets.</p>",None),380)[0:3],
    800,300,"One number","Three numbers and two methods")
S["rd05-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Our gasoline is 91 octane. The customer's claim that it is lower grade than the 95 he bought "
    "last year is incorrect; the specification has not changed.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Research 95.2, motor 86.1, index 90.7, with both methods named. <b>Two conventions:</b> one "
    "market labels the pump with the research number, the other with the index. <b>The 95 he bought "
    "last year and the 91 he has now are the same fuel.</b> One sentence to send him, and a "
    "recommendation that our certificates carry all three figures from now on.</p>",None),380)[0:3],
    800,300,"A rebuttal","An explanation")
S["rd05-f13"]=lambda: f_realia(form("Plan your octane note",
    [("The batch and the date",BLANK),("The research number, with its method",BLANK),
     ("The motor number, with its method",BLANK),("The index and the sensitivity",BLANK),
     ("Which convention each label uses",BLANK),("Your one-sentence reply",BLANK)],
    note="Six boxes. The sixth has to be one sentence."), 560)
S["rd05-f14"]=lambda: f_scene(1000,450,
    people=[("yara",60,176,{}),("ahmad",130,172,{}),("omar",205,176,{}),
     ("nour",290,172,{}),("samira",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("haddad",515,176,{}),("adeel",590,170,{}),("wei",655,172,{}),
     ("ida",720,170,{}),("tomas",785,172,{}),("lars",845,170,{}),
     ("yusuf",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("engine",350,192,0.22),
     ("container",420,198,0.2),("certificate",550,198,0.2),("table",650,0,1.0),
     ("data",860,196,0.22),("computer",930,192,0.24)],
    board=(40,22,206,112,"THE ENGINE SAYS SO",[("research","95.2"),("motor","86.1"),("index","90.7")]),
    clockat=(262,34,22,1,0))
S["rd05-f15"]=lambda: f_chart([("yes, and which was which",3),("yes, not the difference",5),
    ("no",7),("I thought it was one number",6),("I do not deal with fuels",2)], unit="operators")
S["rd05-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Two numbers chosen seventy years ago",
    "<p><b>A certificate</b> with three octane figures on it.</p>"
    "<p><b>Two photographs of pumps</b>, one labeled 95 and one 91, in two countries.</p>"
    "<p><b>A complaint letter</b> accusing us of downgrading the product.</p>"
    "<p><b>A photograph of a single-cylinder engine</b> with a hand wheel on the cylinder head.</p>"
    "<p><b>A note</b>: two conventions, both settled before the war, neither wrong.</p>"
    "<p><i>The customer had bought the same fuel twice and been told two different numbers, both "
    "correctly.</i></p>",
    "Seven o'clock. Nobody lied to him, and he is still right to be annoyed."), 620)

# ---------------- Unit 6 ----------------
S["rd06-f1"]=lambda: f_icons([("ship","a bunker barge alongside"),
    ("pipe","a bunker manifold connection"),("container","a sample bottle at the manifold"),
    ("thermostat","a viscosity measurement"),("scales","a density measurement"),
    ("hot","a flash point apparatus"),("cold","a pour point test"),
    ("water","a water content test"),("pan","an ash crucible"),
    ("data","a vanadium analysis"),("magnifier","catalyst fines under a microscope"),
    ("engine","a scored fuel pump plunger"),("shutter","a blocked sediment filter"),
    ("barcode","a grade designation in letters and a number"),
    ("book","a statutory sulfur limit"),("note","free from")],4)
S["rd06-f2"]=lambda: f_scene(760,400,
    people=[("yara",110,176,{}),("omar",320,180,{"seated":True}),("haddad",405,180,{}),
     ("nour",490,180,{"seated":True}),("samira",570,180,{"seated":True}),
     ("nadia",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("container",715,198,0.2)],
    board=(30,24,214,110,"TWELVE ROWS AND TWO",[("12 rows","figures"),("1 row","free from"),("1 row","shall not contain")]),
    clockat=(262,36,22,11,30))
S["rd06-f3"]=lambda: f_icons([("barcode","letters for a distillate grade"),
    ("barcode","letters for a residual grade"),("tally","a number: the maximum viscosity"),
    ("thermometer","fifty degrees"),("jug","a thin fuel and a thick one"),
    ("note","the letters say the family, the number says the viscosity")],3)
S["rd06-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six grade designations",
    ["The designation","Distillate or residual","Max viscosity","Three other limits","Statutory sulfur limit for that trade"],
    blankrows(6,5),
    note="The box at the foot: the limit that is not in the specification at all. It is in a "
    "convention, and it is the one that gets ships detained."), 660)
S["rd06-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the two rows with no numbers in them",
    "<p style='font-size:12px;color:#6b6861'>Source: ISO 8217, <i>Petroleum products &mdash; Fuels "
    "(class F) &mdash; Specifications of marine fuels</i>. In our own words.</p>"
    "<p>A ship buys fuel by <b>grade designation</b>: a group of letters and a number. The letters say "
    "which family the fuel belongs to, distillate or residual. The number is the <b>maximum "
    "viscosity</b> at a stated temperature. So one short code carries a whole table.</p>"
    "<p>The table has about twelve numbered rows: viscosity, density, flash point, pour point, water, "
    "ash, sulfur, sediment, metals, and more. Each row has a unit, a limit, a direction and a named "
    "test method. Most limits are maxima. <b>Flash point is a minimum</b>, because a low flash point "
    "is the dangerous one.</p>"
    "<p><b>And then there are two rows with no numbers at all.</b> The fuel shall be <b>free from</b> "
    "any material that makes it unfit for use, and it shall <b>not contain</b> added substances or "
    "chemical waste that harm the ship, the crew or the engine. There is no limit and no test method, "
    "because the drafters could not name every possible contaminant in advance.</p>"
    "<p><b>What protects you is the sample.</b> A sample taken continuously throughout the delivery, "
    "sealed, numbered and signed by both sides. Without it, the two rows with no numbers cannot be "
    "argued at all.</p>",
    "The standard is a technical specification, not law. The statutory sulfur limit for a given sea "
    "area comes from a convention, and it can be lower than the figure in the grade table."), 580)
S["rd06-f6"]=lambda: f_realia(tbl("Word study",
    "Which way a limit runs",
    ["The phrase","Which way it limits","An example"],
    [["maximum","not above","Ash, 0.100 per cent maximum."],
     ["minimum","not below","Flash point, 60 degrees minimum."],
     ["not more than","not above","Water shall be not more than 0.50 per cent."],
     ["not less than","not below","The flash point shall be not less than 60 degrees."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>shall be free from</i> and <i>shall not contain</i>. Those two have "
    "no number, and that is the point of the lesson."), 680)
S["rd06-f7"]=lambda: f_matrix(["Unit","Limit","Direction","Method"],
    [("Viscosity at 50 C",["mm2/s","380","max","as named"]),
     ("Density at 15 C",["kg/m3","991","max","as named"]),
     ("<b>Flash point</b>",["C","<b>60</b>","<b>min</b>","as named"]),
     ("Pour point, summer",["C","30","max","as named"]),
     ("Water",["per cent","0.50","max","as named"]),
     ("Ash",["per cent","0.100","max","as named"]),
     ("Sediment, potential",["per cent","0.10","max","as named"]),
     ("Vanadium",["mg/kg","350","max","as named"]),
     ("<i>Free from</i>",["&mdash;","&mdash;","&mdash;","&mdash;"]),
     ("<i>Shall not contain</i>",["&mdash;","&mdash;","&mdash;","&mdash;"])], 660)
S["rd06-f8"]=lambda: f_icons([("thermostat","a viscosity figure"),("hot","a flash point figure"),
    ("water","a water content figure"),("cold","a pour point figure"),
    ("magnifier","a catalyst fines figure"),("note","maximum or minimum?")],3)
S["rd06-f9"]=lambda: f_realia(tbl("Bunker delivery note &mdash; m.v. Qamishli, Banias, 24 May",
    "Grade as ordered &middot; 740 metric tons",
    ["Characteristic","Result","Limit","Method"],
    [["Viscosity at 50 C, mm2/s","371","max 380","as named"],
     ["Density at 15 C, kg/m3","988.4","max 991","as named"],
     ["Flash point, C","<b>63</b>","<b>min 60</b>","as named"],
     ["Water, per cent","0.31","max 0.50","as named"],
     ["Ash, per cent","0.062","max 0.100","as named"],
     ["Sulfur, per cent","2.91","max 3.50","as named"],
     ["Sediment, potential, per cent","0.07","max 0.10","as named"],
     ["Vanadium, mg/kg","288","max 350","as named"],
     ["<i>Free from material unfit for use</i>","signed","&mdash;","&mdash;"],
     ["<i>Shall not contain added substances</i>","signed","&mdash;","&mdash;"],
     ["Sample seals","three, numbered","&mdash;","&mdash;"]],
    note="<b>The sample is the only thing that survives the argument.</b>"), 660)
S["rd06-f10"]=lambda: f_scene(800,400,
    people=[("yara",180,180,{}),("omar",300,176,{}),("haddad",620,180,{})],
    props=[("table",150,0,0.95),("form",230,198,0.2),("container",410,198,0.2),
     ("table",580,0,0.9),("certificate",660,198,0.2),("ship",740,190,0.2)],
    clockat=(60,40,22,12,0))
S["rd06-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Delivery note A",None,
    "<p>Ten results. Two signatures. Delivered.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Delivery note B",None,
    "<p>The same ten, with the <b>grade designation spelled out</b> and every <b>test method</b> "
    "named. The two clauses in words, with a signature against each. The <b>sampling arrangement</b> "
    "&mdash; continuous, at the manifold, throughout &mdash; and the <b>seal numbers</b> of three "
    "retained samples.</p>",None),380)[0:3],
    800,300,"Ten results","Ten results, two clauses and three seals")
S["rd06-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>740 tons delivered to m.v. Qamishli. All results within specification. Delivery note signed by "
    "both parties.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>740 tons, grade spelled out. <b>Closest result:</b> sediment at 0.07 against 0.10. "
    "<b>Flash point is a minimum</b>, not a maximum, and is clear at 63. The two clauses in words "
    "were signed by both sides, which means we have warranted something no test on this note "
    "measures. Sampling was continuous at the manifold; three seals, numbered. <b>And separately:</b> "
    "the statutory sulfur limit where she is trading is lower than the limit in the grade table.</p>",
    None),380)[0:3],
    800,300,"Within specification","Within specification, and what we warranted")
S["rd06-f13"]=lambda: f_realia(form("Plan your bunker note",
    [("The quantity and the grade, spelled out",BLANK),("The closest result to its limit",BLANK),
     ("Which characteristic is a minimum",BLANK),("The two clauses, and what signing them means",BLANK),
     ("The sampling arrangement, with seal numbers",BLANK),("The statutory point, in its own box",BLANK)],
    note="Six boxes. The sixth is separate because it comes from a different document."), 560)
S["rd06-f14"]=lambda: f_scene(1000,450,
    people=[("yara",60,176,{}),("omar",130,172,{}),("haddad",205,176,{}),
     ("nour",290,172,{}),("samira",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("adeel",590,170,{}),("wei",655,172,{}),
     ("tomas",720,170,{}),("ida",785,172,{}),("lars",845,170,{}),
     ("yusuf",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("pipe",350,194,0.2),
     ("container",420,198,0.2),("thermostat",550,196,0.2),("table",650,0,1.0),
     ("magnifier",860,198,0.2),("form",930,198,0.2),("ship",980,190,0.18)],
    board=(40,22,206,112,"FREE FROM",[("12 rows","numbers"),("2 rows","words"),("3 seals","numbered")]),
    clockat=(262,34,22,1,0))
S["rd06-f15"]=lambda: f_chart([("always, and sealed",4),("sometimes",5),
    ("only in disputes",6),("never",4),("I do not know",4)], unit="operators")
S["rd06-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Every number inside its limit, and the pumps are scored",
    "<p><b>A bunker delivery note</b> with every numerical result inside its limit.</p>"
    "<p><b>An engineer's report</b> from three weeks later: fuel pump plungers scored, filters "
    "blocking.</p>"
    "<p><b>A microscope slide</b> with catalyst fines on it.</p>"
    "<p><b>A sample bottle</b> taken at the start of the delivery and not throughout.</p>"
    "<p><b>A specification page</b> with two rows in words and no numbers.</p>"
    "<p><i>The two rows in words were the ones that mattered, and the sample that could have proved "
    "them was not taken in the way the standard describes.</i></p>",
    "Seven o'clock. The fuel met every limit on the page it was sold against."), 620)
