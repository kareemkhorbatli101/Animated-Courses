# -*- coding: utf-8 -*-
"""Flowline Book 4 figure specs, Starting Point to Unit 3."""
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
S["rd00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each, from Books 1 to 3",
    ["What you have","An example"],
    [["A grade","heavy and sour &middot; 24 degrees API &middot; four percent sulfur"],
     ["A unit","a barrel &middot; a cubic meter &middot; corrected to a stated base"],
     ["A code","a scope page &middot; a design factor &middot; an edition"],
     ["A tolerance","plus or minus ten percent &middot; at eighty percent confidence"],
     ["A boundary","where the pump ends &middot; where the pipeline code stops"],
     ["A joint document","signed by two people &middot; with a dash where a tick would lie"]],
    note="Six boxes. This book adds the English of money, and of the test, method or boundary that "
    "defines every number in it."), 580)
S["rd00-f2"]=lambda: f_realia(tbl("One barrel, five levels",
    "Roughly, from the top of the column down",
    ["What leaves","What it becomes"],
    [["gas","fuel for the plant, or liquefied and sold"],
     ["the lightest liquid","gasoline range"],
     ["next","kerosene and jet range"],
     ["next","diesel and gas oil range"],
     ["what will not boil","fuel oil, bitumen, or feed for another unit"]],
    note="That is the whole of distillation, and it has not changed in principle in a hundred years. "
    "What has changed is everything that happens to the pieces afterwards."), 580)
S["rd00-f3"]=lambda: f_part("One barrel in, several products out",
    [("gasoline range",34,"#8a6a1a"),("diesel and gas oil",29,"#7a3b1f"),
     ("kerosene and jet",14,"#3d4a7a"),("fuel oil and residue",18,"#4a4a4a"),
     ("gas",5,"#2f6b3a")])
S["rd00-f4"]=lambda: f_realia(tbl("Two refineries, as a matter of record",
    "Nameplate is what a plant was built to do",
    ["Where","Opened","Published nameplate capacity"],
    [["Homs","1959","about 107,000 barrels a day"],
     ["Banias","1979","about 133,000 barrels a day"]], numcols=(1,),
    note="Published figures for any country come from compilations whose provenance differs. Unit 7 "
    "is about exactly that, and this book gives the figure, the year and the kind of source every "
    "time."), 600)

# ---------------- Unit 1 ----------------
S["rd01-f1"]=lambda: f_icons([("jug","a distillation flask"),("pipe","a condenser"),
    ("container","a graduated cylinder"),("thermometer","a thermometer"),
    ("boiler","a heater with a control"),("rain","the first drop"),
    ("tally","the cylinder at ten"),("balance","at fifty"),
    ("tally","at ninety"),("spoon","the residue"),
    ("logsheet","a recorded temperature table"),("data","a distillation curve"),
    ("table","two laboratory benches"),("spreadsheet","a precision table"),
    ("certificate","a specification sheet"),("note","what the method says it is")],4)
S["rd01-f2"]=lambda: f_scene(760,400,
    people=[("yara",110,176,{}),("omar",320,180,{"seated":True}),("nour",405,180,{"seated":True}),
     ("samira",485,180,{"seated":True}),("haddad",565,180,{}),("nadia",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("jug",715,198,0.2)],
    board=(30,24,214,110,"SAME OPERATOR, TWO LABS",[("r","narrow"),("R","wider"),("one in five","outside")]),
    clockat=(262,36,22,9,0))
S["rd01-f3"]=lambda: f_process(["100 mL|into the flask","thermometer|at depth",
    "heater|at a set rate","first drop|IBP recorded","readings|every 5 mL",
    "residue|and loss"], w=720)
S["rd01-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six specification limits",
    ["The product","The property","The limit","The test method and edition","Reproducibility at that point"],
    blankrows(6,5),
    note="The fourth and fifth columns are the point of the exercise. The box at the foot: the limit "
    "with no method named beside it."), 660)
S["rd01-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the oldest test in the specification",
    "<p style='font-size:12px;color:#6b6861'>Source: ASTM D86, <i>Standard Test Method for "
    "Distillation of Petroleum Products and Liquid Fuels at Atmospheric Pressure</i>. In our own "
    "words.</p>"
    "<p>Every fuel specification has a boiling range in it, and every boiling range comes from this "
    "test. A hundred milliliters goes into a flask of a specified size. A thermometer is fitted at a "
    "<b>specified depth</b>. The condenser bath is held at a <b>specified temperature</b>. The heater "
    "is brought up at a <b>specified rate</b>.</p>"
    "<p>The <b>initial boiling point</b> is the temperature when the first drop leaves the condenser. "
    "Temperatures are then recorded at stated volumes collected, and the <b>recovery</b>, "
    "<b>residue</b> and <b>loss</b> are reported.</p>"
    "<p><b>What the result is a property of.</b> The test is <b>empirical</b>. The temperatures are "
    "not the true boiling points of the molecules; they are vapor temperatures in that apparatus "
    "under that heating rate. For process design the result has to be <b>converted</b> by "
    "correlation.</p>"
    "<p><b>The precision section.</b> <b>Repeatability</b> is how much two results from the same "
    "operator may differ while both being correct. <b>Reproducibility</b> is how much two "
    "laboratories may differ, and it is always wider. Both vary along the curve: the fifty percent "
    "point is the most reproducible, the initial and final boiling points the least.</p>",
    "A result inside a limit by less than the reproducibility is inside the limit and inside the "
    "noise. Most specification disputes are two correct results from one sample."), 580)
S["rd01-f6"]=lambda: f_realia(tbl("Word study",
    "Describing a procedure",
    ["The form","What it is for","An example"],
    [["is measured into","the sample and the vessel","A hundred milliliters is measured into the flask."],
     ["is fitted at","a position","The thermometer is fitted at a specified depth."],
     ["is held at","a controlled condition","The condenser bath is held at a specified temperature."],
     ["is brought up at","a controlled rate","The heater is brought up at a specified rate."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>is recorded when</i> and <i>is reported as</i>. A procedure is "
    "almost all passive and almost all present simple."), 680)
S["rd01-f7"]=lambda: f_line([("IBP",168),("10",201),("20",223),("30",244),("40",264),
    ("50",286),("60",308),("70",328),("80",343),("90",354),("FBP",371)],
    unit="deg C", mark=9)
S["rd01-f8"]=lambda: f_icons([("tally","a result well inside a limit"),
    ("balance","just inside, with a wide error bar crossing it"),
    ("balance","just outside, with the bar crossing back"),
    ("noentry","well outside"),("magnifier","a result with no method named"),
    ("note","what would you write?")],3)
S["rd01-f9"]=lambda: f_realia(tbl("Certificate of quality &mdash; batch 2214, gas oil",
    "11 May &middot; 8,400 cubic meters",
    ["Property","Result","Limit","Method and edition"],
    [["Density at 15 C","0.8391","0.820 to 0.845","as named"],
     ["Sulfur, mg/kg","412","max 500","as named"],
     ["Flash point, C","68","min 56","as named"],
     ["Pour point, C","&minus;9","max &minus;6","as named"],
     ["50 percent recovered, C","286","&mdash;","as named"],
     ["90 percent recovered, C","<b>354</b>","<b>max 357</b>","as named"]],
    numcols=(1,2),
    note="Five results are clear. The sixth is inside by three degrees, and the method's stated "
    "reproducibility at the ninety percent point is about four."), 640)
S["rd01-f10"]=lambda: f_scene(800,400,
    people=[("yara",180,180,{}),("haddad",300,176,{}),("omar",620,180,{})],
    props=[("table",150,0,0.95),("certificate",230,198,0.2),("spreadsheet",290,198,0.2),
     ("jug",560,194,0.24),("thermometer",700,196,0.22)],
    clockat=(60,40,22,10,0))
S["rd01-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Certificate A",None,
    "<p>Six properties, six results, six limits.</p>"
    "<p>All inside. On specification.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Certificate B",None,
    "<p>The same six, each with its <b>method</b>, its <b>edition</b>, its limit, and its "
    "<b>reproducibility</b>. A note against the ninety percent point: <i>inside by 3 degrees against "
    "a reproducibility of 4</i>.</p>",None),380)[0:3],
    800,300,"On specification","On specification, and one result in the noise")
S["rd01-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Batch 2214 meets specification on all properties. Certificate issued. The buyer's claim that "
    "the batch is off specification is rejected.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Five results clear; the sixth inside by three degrees against a stated reproducibility of "
    "four, so a second laboratory may correctly report above the limit. The buyer reports 358. "
    "<b>Both can be correct.</b> Our contract names no umpire laboratory &mdash; a contract gap, not "
    "a quality one. Recommend blending to 350.</p>",None),380)[0:3],
    800,300,"A rejection","A precision statement and a contract gap")
S["rd01-f13"]=lambda: f_realia(form("Plan your quality note",
    [("The batch and the certificate date",BLANK),("How many results are clear",BLANK),
     ("The closest result, with its limit",BLANK),
     ("The method and its reproducibility at that point",BLANK),
     ("What the other laboratory reported",BLANK),("What you recommend for blending",BLANK)],
    note="Six boxes. Say where you found the figure in the fourth."), 560)
S["rd01-f14"]=lambda: f_scene(1000,450,
    people=[("yara",60,176,{}),("omar",130,172,{}),("nour",205,176,{}),
     ("haddad",290,172,{}),("samira",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("yusuf",590,170,{}),("adeel",655,172,{}),
     ("tomas",720,170,{}),("wei",785,172,{}),("ida",845,170,{}),
     ("lars",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("jug",350,198,0.2),
     ("container",415,198,0.2),("certificate",550,198,0.2),("table",650,0,1.0),
     ("thermometer",860,196,0.22),("phone",930,198,0.2)],
    board=(40,22,206,112,"TELL ME WHICH TEST",[("354","our result"),("358","theirs"),("4 deg","the method")]),
    clockat=(262,34,22,11,0))
S["rd01-f15"]=lambda: f_chart([("yes",2),("I know it exists",6),("no",8),
    ("I did not know there was one",5),("I do not use test methods",2)], unit="operators")
S["rd01-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A sensible margin that was a coin toss",
    "<p><b>Our certificate:</b> 354 degrees against a limit of 357.</p>"
    "<p><b>The buyer's certificate:</b> 358.</p>"
    "<p><b>A printed precision table</b> with four degrees highlighted at the ninety percent "
    "point.</p>"
    "<p><b>A blending worksheet</b> with the target set at 355.</p>"
    "<p><b>A contract page</b> with no umpire laboratory named.</p>"
    "<p><i>Three batches in three years have been rejected by buyers whose laboratories reported above "
    "the limit. All three times, both laboratories were right.</i></p>",
    "Seven o'clock. A result inside a limit by less than the reproducibility is not a margin."), 620)

# ---------------- Unit 2 ----------------
S["rd02-f1"]=lambda: f_icons([("book","a thick textbook open at a chart"),
    ("data","a scatter with a line through it"),("spreadsheet","a nomograph"),
    ("calculator","a slide rule"),("balance","a correlation coefficient"),
    ("notebook","a rule of thumb"),("logsheet","a crude assay report"),
    ("container","a column sized from a chart"),("pricetag","a cost index"),
    ("racking","units with different cost weights"),("tally","a complexity figure"),
    ("computer","a modern process simulator"),("crate","a 1958 catalyst"),
    ("crate","a modern catalyst"),("certificate","two specifications, two eras"),
    ("note","a line through somebody else's data")],4)
S["rd02-f2"]=lambda: f_scene(760,400,
    people=[("yara",110,176,{}),("omar",320,180,{"seated":True}),("adeel",405,180,{}),
     ("nour",490,180,{"seated":True}),("nadia",570,180,{"seated":True}),
     ("haddad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("book",715,198,0.2)],
    board=(30,24,214,110,"WHOSE DATA, WHAT RANGE?",[("the line","drawn"),("the points","measured"),("the band","the spread")]),
    clockat=(262,36,22,9,30))
S["rd02-f3"]=lambda: f_icons([("data","a chart giving a figure in four seconds"),
    ("notebook","a rule of thumb on a page"),("logsheet","a full calculation"),
    ("computer","a simulator run"),("thermostat","a measurement on the plant"),
    ("note","three kinds of answer, three kinds of use")],3)
S["rd02-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six rules of thumb people actually use",
    ["The rule of thumb","What it estimates","Claimed accuracy","Where it came from","Used for what here"],
    blankrows(6,5),
    note="The third and fourth columns will be hard. The box at the foot: the one nobody can source "
    "&mdash; and whether that makes it useless."), 660)
S["rd02-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the book of charts",
    "<p style='font-size:12px;color:#6b6861'>Source: W. L. Nelson, <i>Petroleum Refinery "
    "Engineering</i>, McGraw-Hill, fourth edition, 1958. In our own words.</p>"
    "<p>For most of the twentieth century this was the book. An engineer who needed a boiling point, "
    "a density, a heat duty, a vessel size or a cost opened it, found the chart, read the number and "
    "carried on.</p>"
    "<p><b>What a correlation is.</b> Somebody measures a quantity on a number of samples, plots the "
    "results against something easier to measure, and draws a line. Anybody can then read a value "
    "off it. <b>The line is as good as the data under it, over the range the data covers, and no "
    "better.</b></p>"
    "<p>Nelson's charts are built from other people's measurements, and the book <b>names them</b>. "
    "Each chart carries its sources, and the text says how closely the points fell to the line. That "
    "is unusual then and unusual now.</p>"
    "<p><b>Three kinds of answer.</b> A <b>rule of thumb</b> decides whether an idea is worth "
    "pursuing. A <b>chart</b> sizes a first pass. A <b>calculation</b> is a design, with its "
    "assumptions recorded.</p>"
    "<p><b>What has not aged:</b> thermodynamics, balances, hydrocarbon property relationships, the "
    "arithmetic of a yield. <b>What has aged completely:</b> catalysts, product specifications, "
    "metallurgy, instrumentation, energy costs.</p>"
    "<p><b>And the hardest part:</b> the book does not mark the boundary between those two lists, "
    "because in 1958 nobody could.</p>",
    "A modern simulator gives eight decimal places from correlations fitted to measurements. It has "
    "not escaped this problem. It has made it harder to see."), 580)
S["rd02-f6"]=lambda: f_realia(tbl("Word study",
    "Hedging a generalization",
    ["The phrase","How much it claims","An example"],
    [["approximately","a figure, not exact","Approximately 340 degrees."],
     ["typically","the usual case, over many examples","Gas oils typically fall in this range."],
     ["of the order of","the right factor of ten","The duty is of the order of ten megawatts."],
     ["within about","a stated accuracy","The chart is good to within about five percent."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>broadly</i> and <i>at best</i>. <i>Approximately 340</i> and <i>of "
    "the order of 340</i> are very different claims."), 680)
S["rd02-f7"]=lambda: f_matrix(["Density","Measured value","Chart value","Difference"],
    [("Sample 1",["0.79","318","316","&minus;2"]),
     ("Sample 2",["0.82","331","330","&minus;1"]),
     ("Sample 3",["0.85","344","343","&minus;1"]),
     ("Sample 4",["0.88","358","356","&minus;2"]),
     ("Sample 5",["0.91","374","370","&minus;4"]),
     ("<b>Our stream</b>",["<b>0.94</b>","<b>&mdash;</b>","<b>385</b>","<b>extrapolation</b>"])], 660)
S["rd02-f8"]=lambda: f_icons([("data","a figure read off a chart in four seconds"),
    ("notebook","a rule of thumb"),("logsheet","a three-page calculation"),
    ("computer","a simulator output to eight decimal places"),
    ("thermostat","a measurement on the plant"),
    ("magnifier","which kind of answer, and what for?")],3)
S["rd02-f9"]=lambda: f_realia(tbl("Screening study &mdash; heat recovery on the crude preheat train",
    "14 May &middot; all figures screening grade",
    ["Estimate","Value","Method","Stated accuracy"],
    [["Heat duty","about 10 MW","published chart","about 5 percent"],
     ["Exchanger area","of the order of 400 m2","same source","about 20 percent"],
     ["Installed cost","of the order of 12 million","published cost index, from 2019","about 30 percent"],
     ["Payback","between two and four years","from the above","wide"],
     ["Stream density","0.94","measured","&mdash;"]],
    note="The chart was fitted over densities of 0.78 to 0.92. Our stream is 0.94, so the duty is an "
    "extrapolation. No figure on this page is good enough to order anything with."), 640)
S["rd02-f10"]=lambda: f_scene(800,400,
    people=[("yara",180,180,{}),("haddad",430,180,{"seated":True}),("omar",540,180,{})],
    props=[("desk",400,0,1.0),("logsheet",480,196,0.22),("book",200,196,0.24),
     ("table",150,0,0.9),("computer",700,192,0.26)],
    clockat=(60,40,22,10,0))
S["rd02-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Study A",None,
    "<p>Heat duty 9.64 MW. Exchanger area 412 m2. Cost 11.83 million. Payback 2.7 years.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Study B",None,
    "<p>Heat duty <b>about 10 MW</b>, from a chart good to about five percent, <b>extrapolated</b> "
    "beyond its fitted density range. Area <b>of the order of 400 m2</b>. Cost <b>of the order of 12 "
    "million</b>, from an index brought forward from 2019. Payback <b>two to four years</b>.</p>",
    None),380)[0:3],
    800,300,"Four figures to two decimals","Four figures rounded, with their accuracies")
S["rd02-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Screening study complete. Heat duty 9.64 MW, exchanger area 412 m2, estimated cost 11.83 "
    "million, payback 2.7 years. Recommend proceeding to procurement.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>All figures are <b>screening grade</b>. Each one with its method and its stated accuracy; the "
    "duty flagged as an <b>extrapolation</b>. <b>No figure on this page is good enough to order "
    "anything with.</b> They are good enough to decide whether to commission a four-week study with "
    "measured stream data, and that is what I recommend.</p>",None),380)[0:3],
    800,300,"Proceed to procurement","Proceed to a study")
S["rd02-f13"]=lambda: f_realia(form("Plan your screening note",
    [("What grade the figures are",BLANK),("Each figure with its method",BLANK),
     ("The stated accuracy of each method",BLANK),("Anything outside a fitted range",BLANK),
     ("What the figures are good enough for",BLANK),("What you recommend next",BLANK)],
    note="Six boxes. Say how you knew the range in the fourth."), 560)
S["rd02-f14"]=lambda: f_scene(1000,450,
    people=[("yara",60,176,{}),("omar",130,172,{}),("adeel",205,176,{}),
     ("nour",290,172,{}),("haddad",365,176,{}),("nadia",440,172,{"seated":True}),
     ("samira",515,176,{"seated":True}),("ahmad",590,170,{}),("wei",655,172,{}),
     ("ida",720,170,{}),("tomas",785,172,{}),("lars",845,170,{}),
     ("bah",905,172,{}),("yusuf",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("book",350,198,0.2),
     ("data",420,196,0.24),("computer",550,192,0.26),("table",650,0,1.0),
     ("notebook",860,198,0.2),("logsheet",930,198,0.2)],
    board=(40,22,206,112,"WHOSE DATA?",[("the chart","a compilation"),("the range","0.78 to 0.92"),("ours","0.94")]),
    clockat=(262,34,22,12,0))
S["rd02-f15"]=lambda: f_chart([("always",2),("usually",4),("sometimes",7),
    ("never",5),("I had not thought about it",5)], unit="engineers")
S["rd02-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Two extra decimal places and an exchanger",
    "<p><b>A screening study</b> with 9.64 printed on it.</p>"
    "<p><b>The original chart</b>, its caption naming eleven crudes measured in the 1940s and a stated "
    "accuracy of five percent.</p>"
    "<p><b>A spreadsheet printout</b> where the rounding was lost.</p>"
    "<p><b>A purchase order</b> for an exchanger sized at 9.6 megawatts.</p>"
    "<p><i>The study said <b>approximately 10, good to about five percent</b>, and the word "
    "<b>extrapolation</b> was on the page. The real duty, when it was finally measured, was 12.</i></p>",
    "Seven o'clock. A spreadsheet cannot represent <i>about</i>."), 620)

# ---------------- Unit 3 ----------------
S["rd03-f1"]=lambda: f_icons([("boiler","a thermal cracking coil"),
    ("container","a catalytic reactor with a bed of pellets"),
    ("crate","a clay mineral"),("crate","an acid-treated pellet"),
    ("thread","a straight-chain molecule"),("barcode","a branched molecule"),
    ("crate","a coked pellet"),("hot","a regenerator burning coke off"),
    ("timer","a cyclic valve arrangement"),("wind","a fluidized bed of powder"),
    ("pipe","a standpipe carrying catalyst"),("recycle","a cyclone separator"),
    ("tin","an aviation fuel drum"),("certificate","a commemorative plaque"),
    ("book","a history book"),("note","obsolete in five years")],4)
S["rd03-f2"]=lambda: f_scene(760,400,
    people=[("yara",110,176,{}),("omar",320,180,{"seated":True}),("ahmad",405,180,{"seated":True}),
     ("wei",490,180,{}),("samira",570,180,{"seated":True}),("nour",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("container",715,190,0.24)],
    board=(30,24,214,110,"CYCLIC OR CONTINUOUS",[("fixed bed","it stops"),("fluid bed","it does not"),("same","chemistry")]),
    clockat=(262,36,22,10,0))
S["rd03-f3"]=lambda: f_icons([("thread","a long straight molecule entering a hot coil"),
    ("thread","broken into straight pieces"),
    ("crate","the molecule on an acid catalyst site"),
    ("barcode","broken into branched pieces"),
    ("tin","two gasolines with different octane numbers"),
    ("note","heat alone, or heat and a catalyst")],3)
S["rd03-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six inventions that were superseded",
    ["The invention","What it did","First used","What replaced it","How long it lasted"],
    blankrows(6,5),
    note="The box at the foot: the shortest life. How many were beaten by better science, and how "
    "many by a better way of doing the same thing?"), 640)
S["rd03-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the process that made the barrel worth more",
    "<p style='font-size:12px;color:#6b6861'>Source: the National Historic Chemical Landmark "
    "designation of the Houdry process for catalytic cracking, made by the American Chemical Society "
    "in 1996. In our own words.</p>"
    "<p><b>The problem, around 1930.</b> Distillation separates a barrel but does not change it. If a "
    "crude holds only a small fraction of gasoline-range molecules, that is all you get.</p>"
    "<p><b>Thermal cracking</b> was the first answer: heat the heavy fractions until the large "
    "molecules break. It worked, and the gasoline was poor, because heat breaks molecules more or less "
    "at random and the pieces are mostly <b>straight chains</b>, which knock badly.</p>"
    "<p><b>Catalytic cracking</b> was the second. An acid-treated clay cracked the same molecules at a "
    "<b>lower temperature</b> and the pieces came out <b>branched</b>. Branched molecules resist "
    "knocking, so the gasoline was of much higher octane, from the same crude, for less heat.</p>"
    "<p><b>The first commercial unit ran in 1937.</b></p>"
    "<p><b>And then the problem.</b> The catalyst <b>fouls</b>: coke deposits on it in minutes. In a "
    "<b>fixed bed</b> that means stopping, with valves, timers and several beds taking turns.</p>"
    "<p><b>Fluid catalytic cracking</b>, commercialized in <b>1942</b>, made the catalyst behave like "
    "a liquid: a powder flowing continuously from reactor to regenerator and back. Nothing stops. "
    "Within a few years it was the standard, and it still is.</p>",
    "A commemoration is written to celebrate, and celebration selects. The engineering is not in "
    "dispute; the popular account is a simplification."), 580)
S["rd03-f6"]=lambda: f_realia(tbl("Word study",
    "A process history",
    ["The form","What it does","An example"],
    [["was developed","the invention, impersonally","The process was developed in the 1930s."],
     ["was commercialized","the first commercial use","It was commercialized in 1937."],
     ["was superseded by","what replaced it","It was superseded by fluid catalytic cracking."],
     ["within about","how long it lasted","It was superseded within about five years."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>had already</i> and <i>by the time</i>. A process history is almost "
    "all passive, and that is worth noticing."), 680)
S["rd03-f7"]=lambda: f_timeline([(0.00,"1920s","thermal cracking"),
    (0.34,"1937","first fixed bed"),(0.48,"1942","fluid cracking"),
    (0.62,"late 1940s","fluid is standard"),(1.00,"1996","the plaque")], 0.41, w=720)
S["rd03-f8"]=lambda: f_icons([("boiler","a hot coil with no catalyst"),
    ("container","a bed of pellets with valves above and below"),
    ("wind","a powder flowing between two vessels"),
    ("crate","a coked pellet"),("hot","a regenerator burning coke"),
    ("magnifier","which process, and what year?")],3)
S["rd03-f9"]=lambda: f_realia(tbl("Unit comparison",
    "The chemistry is identical in both columns",
    ["","Fixed bed","Fluid bed"],
    [["Catalyst condition after minutes","coked","coked"],
     ["How regeneration is done","in place, cyclically","continuously, in a second vessel"],
     ["Does the unit stop?","<b>yes</b>","<b>no</b>"],
     ["Mechanical complexity","valves, timers, several beds","standpipes, slide valves, cyclones"],
     ["Year commercialized","1937","1942"],
     ["How long it was the standard","about five years","to the present"]],
    note="One of these columns won, and the reason is not chemistry."), 620)
S["rd03-f10"]=lambda: f_scene(800,400,
    people=[("yara",180,180,{}),("haddad",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("table",560,0,0.95),("logsheet",640,196,0.22),("certificate",200,198,0.2),
     ("container",420,190,0.26),("book",120,196,0.22)],
    clockat=(60,40,22,11,0))
S["rd03-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("History A",None,
    "<p>Catalytic cracking was a revolutionary invention which transformed the petroleum industry and "
    "played a decisive role in the Second World War.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("History B",None,
    "<p>The same events with <b>years</b>: 1937, 1942, the late 1940s, 1996. What was superseded and "
    "when. Why &mdash; the catalyst fouls, so a fixed bed stops. And one sentence separating the "
    "engineering from the popular account.</p>",None),380)[0:3],
    800,300,"A paragraph of celebration","The same events, with dates")
S["rd03-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Catalytic cracking was a revolutionary invention which transformed the industry and played a "
    "decisive role in the Second World War. Its inventor is commemorated at the site of the first "
    "commercial unit.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>The problem around 1930. Thermal cracking and what it gave. Catalytic cracking and what it "
    "gave, with the year. Why the fixed bed had to stop. Fluid cracking and its year. <b>The chemistry "
    "is not in dispute; the account in which one process decided a war is a simplification.</b> And "
    "the lesson: superseded in five years by a better way of handling a solid.</p>",None),380)[0:3],
    800,300,"A celebration","A history you can learn from")
S["rd03-f13"]=lambda: f_realia(form("Plan your process history",
    [("The problem",BLANK),("The first solution, with its year",BLANK),
     ("What it gave",BLANK),("Why it was superseded",BLANK),
     ("What replaced it, with its year",BLANK),("One sentence separating engineering from story",BLANK)],
    note="Six boxes. In the fourth, say whether it was chemistry or mechanics."), 560)
S["rd03-f14"]=lambda: f_scene(1000,450,
    people=[("yara",60,176,{}),("omar",130,172,{}),("ahmad",205,176,{}),
     ("wei",290,172,{}),("nour",365,176,{}),("samira",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("haddad",590,170,{}),("adeel",655,172,{}),
     ("tomas",720,170,{}),("ida",785,172,{}),("lars",845,170,{}),
     ("bah",905,172,{}),("yusuf",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("crate",350,198,0.2),
     ("container",420,190,0.26),("certificate",550,198,0.2),("table",650,0,1.0),
     ("book",860,198,0.2),("tin",930,196,0.2)],
    board=(40,22,206,112,"BRANCHED RESISTS KNOCKING",[("straight","poor"),("branched","good"),("the catalyst","did it")]),
    clockat=(262,34,22,12,0))
S["rd03-f15"]=lambda: f_chart([("yes and everybody tells it",6),("yes but only older staff",5),
    ("I have heard several versions",4),("no",3),("I have never asked",4)], unit="operators")
S["rd03-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A plaque for the first thing and none for the second",
    "<p><b>A photograph of a commemorative plaque</b>, unveiled in 1996 for a process first "
    "commercialized in 1937.</p>"
    "<p><b>A photograph of a modern fluid cracking unit</b>, the thing that beat it.</p>"
    "<p><b>A timeline</b> showing five years between the two commercial start-ups.</p>"
    "<p><b>A coked catalyst pellet.</b></p>"
    "<p><b>A history book</b> open at a page with two different accounts of the same event.</p>"
    "<p><i>Everything on the plaque is true. The process it commemorates had been superseded by 1947, "
    "by a better way of moving a powder, invented by a different group in a different company.</i></p>",
    "Seven o'clock. There is no plaque for that."), 620)
