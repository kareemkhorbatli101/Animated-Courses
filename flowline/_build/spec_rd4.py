# -*- coding: utf-8 -*-
"""Flowline Book 4 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Unit 10 ----------------
S["rd10-f1"]=lambda: f_icons([("boiler","a furnace stack with a fuel meter"),
    ("hot","a flare"),("wind","a vent to atmosphere"),
    ("magnifier","a gas detector at a flange"),("truck","a vehicle"),
    ("fusebox","a purchased electricity meter"),("data","a fifty per cent holding"),
    ("certificate","an operating agreement"),("map","a boundary around part of a group"),
    ("table","an emission factor"),("calculator","a mass balance"),
    ("thermostat","a measured stack analyzer"),("balance","an uncertainty range"),
    ("review","a year-on-year comparison"),("note","a restatement note"),
    ("note","the boundary moved, the molecules did not")],4)
S["rd10-f2"]=lambda: f_scene(760,400,
    people=[("yara",110,176,{}),("omar",320,180,{"seated":True}),("nour",405,180,{"seated":True}),
     ("samira",485,180,{"seated":True}),("haddad",565,180,{}),("nadia",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("map",715,196,0.22)],
    board=(30,24,214,110,"ONE GROUP, TWO LINES",[("three boxes","1.84"),("four boxes","2.41"),("same","molecules")]),
    clockat=(262,36,22,1,30))
S["rd10-f3"]=lambda: f_icons([("boiler","fuel burned in a furnace"),
    ("hot","gas burned in a flare"),("wind","gas vented unburned"),
    ("magnifier","a leaking flange"),("truck","a vehicle"),
    ("fusebox","purchased electricity, and it is not yours directly")],3)
S["rd10-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six reported emissions totals",
    ["The company","The reported total","The year","Boundary basis stated?","Uncertainty given?"],
    blankrows(6,5),
    note="The box at the foot: the one with no boundary basis stated. Then ask what its total "
    "means."), 660)
S["rd10-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the line round the company decides the number",
    "<p style='font-size:12px;color:#6b6861'>Source: the <i>Petroleum industry guidelines for "
    "reporting greenhouse gas emissions</i>, second edition, 2011, published jointly by IPIECA, API "
    "and IOGP. In our own words.</p>"
    "<p>Before you can add up emissions you have to draw a line round what counts as the company. "
    "There are two usual lines, and they give different totals for the same set of plants.</p>"
    "<p>On an <b>equity share basis</b>, you count your percentage of every operation you have a share "
    "in. On an <b>operational control basis</b>, you count <b>all</b> of what you operate and "
    "<b>none</b> of what you do not. A group with a half share in a plant it does not operate reports "
    "that plant on the first basis and not on the second.</p>"
    "<p>The sources themselves are ordinary: fuel burned, gas flared, gas vented, leaks from flanges "
    "and seals, vehicles, and purchased electricity, which is somebody else's combustion and is "
    "reported separately.</p>"
    "<p><b>Almost nothing is weighed.</b> Combustion is fuel metered and multiplied by a published "
    "<b>emission factor</b>. Flaring is estimated. Venting is estimated. Leaks are estimated from "
    "counts and factors, or surveyed with a detector. Two of these categories usually carry most of "
    "the uncertainty of the whole inventory, and the guidelines say so.</p>"
    "<p><b>And so a fall in the total has two possible causes.</b> Fewer molecules, or a different "
    "line. When the line moves, the honest thing is to <b>restate</b> the earlier year and compare "
    "like with like.</p>",
    "The guidelines are a reporting method, not a target and not a law. They tell you how to count; "
    "they do not tell you what the number should be."), 580)
S["rd10-f6"]=lambda: f_realia(tbl("Word study",
    "Boundaries",
    ["The phrase","What it does","An example"],
    [["within the boundary","what counts","The compressor station is within the boundary."],
     ["outside the boundary","what does not","The jointly owned plant is outside the boundary."],
     ["attributable to","whose it is","Emissions attributable to our share."],
     ["excluded from","what was left out, and said so","Excluded from this total: purchased power."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>on an equity share basis</i> and <i>on an operational control "
    "basis</i>. Those two phrases are the whole unit."), 680)
S["rd10-f7"]=lambda: f_matrix(["Our share","We operate it","Equity basis","Control basis"],
    [("Mureij refinery",["100 per cent","yes","in","in"]),
     ("Deir field",["100 per cent","yes","in","in"]),
     ("Hasakah station",["60 per cent","yes","0.6 of it","all of it"]),
     ("Banias terminal",["50 per cent","no","0.5 of it","<b>out</b>"]),
     ("Homs joint plant",["25 per cent","no","0.25 of it","<b>out</b>"]),
     ("<b>Total, Mt CO2e</b>",["&mdash;","&mdash;","<b>2.41</b>","<b>1.84</b>"])], 660)
S["rd10-f8"]=lambda: f_icons([("boiler","a plant we operate and wholly own"),
    ("container","a plant we operate and half own"),("map","a plant we half own and do not operate"),
    ("fusebox","purchased electricity"),("truck","a contractor's trucks"),
    ("magnifier","inside or outside, and on which basis?")],3)
S["rd10-f9"]=lambda: f_realia(tbl("Emissions inventory summary &mdash; last year",
    "Reported on an operational control basis",
    ["Source category","Mt CO2e","How it was quantified","Uncertainty"],
    [["Stationary combustion","1.21","metered fuel &times; published factor","low"],
     ["Flaring","<b>0.33</b>","<b>estimated</b>","<b>wide</b>"],
     ["Venting","<b>0.18</b>","<b>estimated</b>","<b>wide</b>"],
     ["Fugitive leaks","0.07","counts and factors, part surveyed","moderate"],
     ["Mobile sources","0.03","fuel purchased","low"],
     ["Purchased electricity","0.02","supplier factor, reported separately","low"],
     ["<b>Total</b>","<b>1.84</b>","&mdash;","&mdash;"],
     ["On an equity share basis","2.41","the same sources, a different line","&mdash;"],
     ["Previous year as first reported","2.14","on the equity basis","&mdash;"],
     ["Previous year restated","1.88","on this year's basis","&mdash;"]],
    note="<b>Two of the six carry most of the uncertainty.</b> The fall from 2.14 to 1.84 is 14 per "
    "cent. The fall from 1.88 to 1.84 is 2 per cent, and it is the honest one."), 660)
S["rd10-f10"]=lambda: f_scene(800,400,
    people=[("yara",180,180,{}),("haddad",620,180,{"seated":True}),("omar",300,176,{})],
    props=[("table",150,0,0.95),("spreadsheet",230,198,0.2),("table",580,0,0.9),
     ("review",660,198,0.2),("map",430,196,0.22)],
    clockat=(60,40,22,2,0))
S["rd10-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>Group emissions: 1.84 Mt CO2e, a fall of 14 per cent on the previous year.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>1.84 Mt CO2e, <b>on an operational control basis</b>; 2.41 on an equity share basis. Six "
    "categories with their methods and uncertainty bands, two of them wide. Previous year <b>restated "
    "to 1.88</b> on this basis. <b>The real fall is 2 per cent; the other 12 points are an asset "
    "sale.</b></p>",None),380)[0:3],
    800,300,"A fourteen per cent fall","A two per cent fall and a boundary change")
S["rd10-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Emissions fell 14 per cent last year, to 1.84 million tonnes. A strong result.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>1.84 Mt CO2e on an <b>operational control basis</b>, 2.41 on an <b>equity share basis</b>. Six "
    "categories, with <b>flaring and venting carrying most of the uncertainty</b> and both estimated "
    "rather than measured. The headline 14 per cent includes the sale of a half share in the terminal; "
    "<b>restated like for like, the fall is 2 per cent</b>. I would not put the 14 in a press "
    "release.</p>",None),380)[0:3],
    800,300,"A strong result","A restatement")
S["rd10-f13"]=lambda: f_realia(form("Plan your emissions note",
    [("The total, with its basis",BLANK),("The figure on the other basis",BLANK),
     ("Each category, with its method",BLANK),("Which categories carry most of the uncertainty",BLANK),
     ("Any change, split into real and boundary",BLANK),("The restated comparison",BLANK)],
    note="Six boxes. The fifth is the one a reader will go to first."), 560)
S["rd10-f14"]=lambda: f_scene(1000,450,
    people=[("yara",60,176,{}),("omar",130,172,{}),("nour",205,176,{}),
     ("haddad",290,172,{}),("samira",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("adeel",590,170,{}),("wei",655,172,{}),
     ("tomas",720,170,{}),("ida",785,172,{}),("lars",845,170,{}),
     ("yusuf",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.2),
     ("map",420,196,0.22),("review",550,198,0.2),("table",650,0,1.0),
     ("magnifier",860,198,0.2),("boiler",930,192,0.22)],
    board=(40,22,206,112,"ALMOST NOTHING IS WEIGHED",[("combustion","metered"),("flaring","estimated"),("venting","estimated")]),
    clockat=(262,34,22,3,0))
S["rd10-f15"]=lambda: f_chart([("yes",3),("somebody knows",5),("no",6),
    ("we do not report emissions",3),("I did not know there was a choice",6)], unit="operators")
S["rd10-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Fourteen per cent, twelve of it a signature",
    "<p><b>An emissions inventory</b> showing a fall of fourteen per cent.</p>"
    "<p><b>A note</b> showing that twelve points of it was the sale of a half share.</p>"
    "<p><b>A press release</b> quoting the fourteen.</p>"
    "<p><b>A restated previous year</b>, on the same basis, showing a fall of two per cent.</p>"
    "<p><b>A gas detector</b> at a flange, which is where the uncertain categories live.</p>"
    "<p><i>Nobody did anything wrong with a number. The boundary moved and the comparison did "
    "not.</i></p>",
    "Seven o'clock. The molecules did not know the asset had been sold."), 620)

# ---------------- Unit 11 ----------------
S["rd11-f1"]=lambda: f_icons([("truck","an orange plate with four digits"),
    ("hot","a flammable liquid label"),("danger","a corrosive label"),
    ("danger","a toxic label"),("container","a gas cylinder label"),
    ("table","a nine-class chart"),("refnumber","a four-digit UN number"),
    ("note","a proper shipping name"),("barcode","a packing group"),
    ("thermometer","a flash point apparatus"),("boiler","a boiling point apparatus"),
    ("thermostat","a hydrogen sulfide analyzer"),("form","a transport document"),
    ("signature","a consignor signing"),("helmet","a firefighter reading a plate"),
    ("note","four digits, ninety seconds")],4)
S["rd11-f2"]=lambda: f_scene(760,400,
    people=[("yara",110,176,{}),("omar",320,180,{"seated":True}),("nour",405,180,{}),
     ("samira",485,180,{"seated":True}),("haddad",565,180,{}),("nadia",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("truck",715,192,0.2)],
    board=(30,24,214,110,"BENCH TO ROADSIDE",[("a result","the lab"),("a class","the office"),("4 digits","the plate")]),
    clockat=(262,36,22,2,0))
S["rd11-f3"]=lambda: f_icons([("hot","a flammable liquid"),("container","a gas under pressure"),
    ("danger","a corrosive substance"),("danger","a toxic substance"),
    ("wind","an oxidizing substance"),
    ("note","nine classes, and most of what we ship is in one of them")],3)
S["rd11-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six products we move",
    ["The product","UN number","Proper shipping name","Class","Packing group"],
    blankrows(6,5),
    note="The box at the foot: the one with a subsidiary hazard. That is the one that changes what a "
    "first responder does."), 660)
S["rd11-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: four digits a firefighter reads in ninety seconds",
    "<p style='font-size:12px;color:#6b6861'>Source: the UN <i>Recommendations on the Transport of "
    "Dangerous Goods &mdash; Model Regulations</i>, and the European agreement on the international "
    "carriage of dangerous goods by road, which gives them force for road transport. In our own "
    "words.</p>"
    "<p>Dangerous goods are sorted into <b>nine classes</b>. Each substance gets a <b>four-digit UN "
    "number</b>, a <b>proper shipping name</b> that is not a trade name, a class, and usually a "
    "<b>packing group</b>, which says how severe the hazard is within that class.</p>"
    "<p>A substance can have a <b>subsidiary hazard</b> as well as its main one. A flammable liquid "
    "that is also toxic carries two labels, and the second one changes the response: how far back to "
    "stand, what breathing protection to wear, which way to approach.</p>"
    "<p><b>Who classifies.</b> The <b>consignor</b> does. Not the carrier, not the driver, not the "
    "firefighter. The classification rests on laboratory results: flash point, boiling point, and for "
    "our products the <b>hydrogen sulfide</b> content.</p>"
    "<p><b>And the classification has a date.</b> The crude a plant handles changes over years. A "
    "classification determined on a sample from 1998 describes the product of 1998. The system has no "
    "mechanism that tells you when a classification has gone stale; a person has to ask.</p>",
    "The regulations classify a substance, which is why they cannot classify your particular cargo. "
    "That is the consignor's job, from current test data, and it is a legal responsibility."), 580)
S["rd11-f6"]=lambda: f_realia(tbl("Word study",
    "Classifying and assigning",
    ["The phrase","What it does","An example"],
    [["is classified as","gives the class","It is classified as a flammable liquid."],
     ["is assigned to","gives the group","It is assigned to packing group II."],
     ["bears the number","gives the UN number","It bears the number 1267."],
     ["is allocated","the formal verb for both","A shipping name is allocated to the substance."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>falls within</i> and <i>carries a subsidiary hazard</i>. The last one "
    "is the sentence that matters at a roadside."), 680)
S["rd11-f7"]=lambda: f_panels(lambda w,h: f_realia(doc("The plate as it is",None,
    "<p><b>1267</b> over a hazard identification number.</p>"
    "<p>One diamond: <b>flammable liquid</b>.</p>"
    "<p><i>Stand back, no ignition sources, foam.</i></p>",None),380)[0:3],
    lambda w,h: f_realia(doc("The plate if the subsidiary hazard applies",None,
    "<p>The same four digits, and a <b>second diamond: toxic</b>.</p>"
    "<p><i>A larger exclusion distance, breathing apparatus, approach from upwind.</i></p>"
    "<p><b>This is the one that changes what they do.</b></p>",None),380)[0:3],
    800,300,"One diamond","Two diamonds")
S["rd11-f8"]=lambda: f_icons([("container","a crude oil"),
    ("pipe","a gasoline"),("truck","a gas oil"),
    ("container","a liquefied gas"),("danger","a caustic solution"),
    ("magnifier","which class, which number, which group?")],3)
S["rd11-f9"]=lambda: f_realia(tbl("Transport document and classification record &mdash; road tanker 14",
    "Consignor: Jazira Petroleum Operations &middot; 29 May",
    ["","Entry"],
    [["Product","crude oil, Deir blend"],
     ["UN number","1267"],
     ["Proper shipping name","petroleum crude oil"],
     ["Class","3, flammable liquid"],
     ["Packing group","as determined"],
     ["Subsidiary hazard","<b>none recorded</b>"],
     ["Classification determined","<b>1998</b>"],
     ["Flash point it rested on","as tested, 1998"],
     ["Hydrogen sulfide it rested on","<b>as tested, 1998</b>"],
     ["Hydrogen sulfide, laboratory report this May","<b>about five times that figure</b>"]],
    note="<b>The classification is from 1998 and the gas has risen five times.</b> Whether a "
    "subsidiary hazard now applies is not for a note to decide."), 640)
S["rd11-f10"]=lambda: f_scene(800,400,
    people=[("yara",180,180,{}),("nour",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("table",150,0,0.95),("logsheet",230,198,0.2),("table",580,0,0.9),
     ("form",660,198,0.2),("thermostat",430,196,0.2)],
    clockat=(60,40,22,3,0))
S["rd11-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Record A",None,
    "<p>UN 1267. Petroleum crude oil. Class 3. Packing group as determined.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Record B",None,
    "<p>The same four entries, plus the <b>date the classification was determined</b>, the <b>test "
    "figures it rested on</b>, the <b>current test figures</b>, and a note on whether a <b>subsidiary "
    "hazard</b> may now apply and who has to decide that.</p>",None),380)[0:3],
    800,300,"Four entries","Four entries and a date")
S["rd11-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Tanker 14 is correctly placarded and the transport document is complete. The load is "
    "compliant.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>UN 1267, petroleum crude oil, class 3, with its packing group and no subsidiary hazard "
    "recorded. <b>Classification determined in 1998</b>, on a flash point and a hydrogen sulfide "
    "figure from that year. <b>This May's laboratory report gives about five times that gas "
    "figure.</b> A toxic subsidiary hazard may now apply. <b>I am not claiming it does.</b> The "
    "consignor has to reclassify from current data, and I am asking for that review before the next "
    "loading.</p>",None),380)[0:3],
    800,300,"Compliant","Compliant against a 1998 sample")
S["rd11-f13"]=lambda: f_realia(form("Plan your classification note",
    [("The full classification",BLANK),("The date it was determined",BLANK),
     ("The test figures it rested on",BLANK),("The current test figures",BLANK),
     ("What may now apply",BLANK),("Who has to decide",BLANK)],
    note="Six boxes. In the fifth, write <i>may</i>, not <i>does</i>."), 560)
S["rd11-f14"]=lambda: f_scene(1000,450,
    people=[("yara",60,176,{}),("nour",130,172,{}),("omar",205,176,{}),
     ("haddad",290,172,{}),("samira",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("adeel",590,170,{}),("wei",655,172,{}),
     ("tomas",720,170,{}),("ida",785,172,{}),("lars",845,170,{}),
     ("yusuf",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("truck",350,192,0.2),
     ("thermometer",420,196,0.2),("form",550,198,0.2),("table",650,0,1.0),
     ("thermostat",860,196,0.2),("logsheet",930,198,0.2)],
    board=(40,22,206,112,"FOUR DIGITS, 90 SECONDS",[("1267","the number"),("class 3","flammable"),("toxic?","the question")]),
    clockat=(262,34,22,4,0))
S["rd11-f15"]=lambda: f_chart([("yes",2),("somebody knows",4),("no",6),
    ("I did not know they had a date",8),("we do not ship dangerous goods",2)], unit="operators")
S["rd11-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A plate that is correct for a product we stopped making",
    "<p><b>A transport document</b> with four digits on it, correctly entered.</p>"
    "<p><b>A classification record</b> dated 1998.</p>"
    "<p><b>A laboratory report</b> from this May, with a hydrogen sulfide figure five times "
    "higher.</p>"
    "<p><b>A photograph of an orange plate</b> with one diamond above it.</p>"
    "<p><b>A note</b> of who signs as consignor, and what that signature means.</p>"
    "<p><i>Every document agrees with every other document. All of them describe a sample taken "
    "before most of the drivers were born.</i></p>",
    "Seven o'clock. The firefighter has ninety seconds and reads what we wrote."), 620)

# ---------------- Unit 12 ----------------
S["rd12-f1"]=lambda: f_icons([("jug","a distillation flask"),("data","a chart from a textbook"),
    ("crate","a catalyst pellet"),("book","a published directive"),
    ("engine","a knock test engine"),("pipe","a bunker manifold"),
    ("certificate","a nameplate"),("bottleneck","two composite curves"),
    ("thermostat","a relief valve"),("map","an emissions boundary"),
    ("truck","an orange plate"),("dashboard","a price screen"),
    ("container","three barrels in, three out"),("barcode","a benchmark crude label"),
    ("balance","a differential"),("note","one number, eleven definitions")],4)
S["rd12-f2"]=lambda: f_scene(900,420,
    people=[("yara",90,176,{}),("omar",300,180,{"seated":True}),("nour",380,180,{"seated":True}),
     ("samira",455,180,{"seated":True}),("nadia",530,180,{"seated":True}),
     ("ahmad",605,180,{"seated":True}),("haddad",680,176,{}),("adeel",745,180,{"seated":True}),
     ("wei",810,180,{"seated":True}),("ida",862,176,{}),("tomas",884,180,{"seated":True})],
    props=[("desk",280,0,1.05),("board",40,88,0.66),("dashboard",862,196,0.2)],
    board=(24,22,216,112,"THE SPREAD",[("3 in","crude"),("2 + 1 out","products"),("and not","5 things")]),
    clockat=(254,34,22,4,0))
S["rd12-f3"]=lambda: f_icons([("ship","a benchmark crude cargo"),
    ("container","the crude we actually buy, at a differential"),
    ("dashboard","a published product price"),("receipt","the price actually realized"),
    ("utilitybill","an energy bill"),
    ("note","five reasons your margin is not the spread")],3)
S["rd12-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published figures",
    ["The figure","What it measures","Who publishes it","What it assumes","Operating costs included?"],
    blankrows(6,5),
    note="The box at the foot: the one most often mistaken for a margin. Expect more than one "
    "candidate."), 660)
S["rd12-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the last number in the book",
    "<p style='font-size:12px;color:#6b6861'>Source: the glossary and explanatory notes of the US "
    "Energy Information Administration on the refinery crack spread. In our own words.</p>"
    "<p>A <b>crack spread</b> is a simple indicator. Take three barrels of a <b>benchmark crude</b>, "
    "assume they become two barrels of gasoline and one of distillate, price all four at published "
    "quotations, and take the difference. It is published daily, it is easy to calculate, and everyone "
    "quotes it.</p>"
    "<p><b>What it assumes, against what a plant has.</b> It assumes the <b>benchmark crude</b>; we buy "
    "a different crude at a <b>differential</b>. It assumes a <b>two-to-one yield</b>; our units give "
    "what they give. It assumes <b>published prices</b>; we realize what we negotiate. It includes "
    "<b>no operating cost</b>; we burn fuel, buy power and pay people. It includes <b>no "
    "transport</b>; our cargoes travel.</p>"
    "<p>So a published spread and a plant's own margin can move in opposite directions in the same "
    "month, with nobody at fault.</p>"
    "<p><b>What it is good for.</b> It is a fast, public, comparable indicator of whether refining is "
    "worth doing this week. That is a real and useful thing. It is not a forecast of your margin, and "
    "it was never meant to be.</p>",
    "The indicator is honestly labeled by the agency that publishes it. The misuse happens downstream, "
    "in a board paper, where the label does not travel with the number."), 580)
S["rd12-f6"]=lambda: f_realia(tbl("Word study",
    "Explaining a market figure",
    ["The phrase","What it does","An example"],
    [["it is an indicator of","what it is","It is an indicator of refining economics."],
     ["it assumes","the assumption","It assumes a two-to-one yield."],
     ["it ignores","what is left out","It ignores operating cost and transport."],
     ["our margin differs because","the bridge","Our margin differs because of the crude differential."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>it is published daily whereas</i> and <i>as an approximation</i>. "
    "The first of those is the whole reason it gets quoted."), 680)
S["rd12-f7"]=lambda: f_line([("Jun",7.1),("Jul",7.6),("Aug",8.2),("Sep",6.9),
    ("Oct",6.4),("Nov",7.0),("Dec",7.8),("Jan",8.4),("Feb",7.9),
    ("Mar",6.2),("Apr",6.8),("May",7.3)], unit="published spread, a barrel", mark=9)
S["rd12-f8"]=lambda: f_icons([("dashboard","a published spread figure"),
    ("balance","a plant's realized margin"),("barcode","a crude differential"),
    ("data","a yield slate"),("utilitybill","an energy bill"),
    ("magnifier","which number is this, and what does it include?")],3)
S["rd12-f9"]=lambda: f_realia(tbl("Monthly margin reconciliation &mdash; May",
    "Five lines between a published number and ours",
    ["","A barrel","Who owns the line"],
    [["Published crack spread","7.30","nobody here"],
     ["Crude differential, our crude against the benchmark","&minus;1.85","crude purchasing"],
     ["Yield, our slate against two-to-one","&minus;0.60","operations and the units"],
     ["Realized prices against quotations","&minus;0.45","sales"],
     ["Operating cost","&minus;1.95","the plant"],
     ["Transport","&minus;0.30","logistics"],
     ["<b>Our realized margin</b>","<b>2.15</b>","<b>all of us</b>"]],
    note="Arithmetic check: 7.30 less 1.85, 0.60, 0.45, 1.95 and 0.30 leaves 2.15. <b>One of these "
    "lines can be acted on this quarter.</b>"), 640)
S["rd12-f10"]=lambda: f_scene(800,400,
    people=[("yara",180,180,{}),("haddad",620,180,{}),("omar",300,176,{})],
    props=[("table",150,0,0.95),("spreadsheet",230,198,0.2),("table",580,0,0.9),
     ("dashboard",660,196,0.22),("receipt",430,198,0.2)],
    clockat=(60,40,22,4,0))
S["rd12-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>Our margin was 2.15 a barrel against a published spread of 7.30. <b>Underperformance of "
    "5.15.</b></p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>Published spread 7.30. <b>Five reconciliation lines</b> with figures and owners: crude "
    "differential, yield, realized prices, operating cost, transport. Our margin 2.15. <b>The "
    "arithmetic closes.</b> One line is actionable this quarter.</p>",None),380)[0:3],
    800,300,"Underperformance of 5.15","Five lines, and one of them actionable")
S["rd12-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>The refinery's margin of 2.15 a barrel compares poorly with the published crack spread of "
    "7.30. The plant is underperforming the market by 5.15.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>The published spread is <b>an indicator</b>: three barrels of a benchmark crude we do not buy, "
    "a two-to-one yield we do not make, quoted prices we do not realize, and <b>no operating cost and "
    "no transport at all</b>. Five lines bridge it to our 2.15, each with an owner, and the "
    "arithmetic closes. <b>Four of the five are structural this quarter. The fifth, energy in "
    "operating cost, is the heat integration work in Unit 8.</b></p>",None),380)[0:3],
    800,300,"Underperformance","A bridge, and one thing to do")
S["rd12-f13"]=lambda: f_realia(form("Plan your margin note",
    [("The published figure",BLANK),("Your own figure",BLANK),
     ("The five reconciliation lines, with figures",BLANK),("Who owns each line",BLANK),
     ("Which line is actionable",BLANK),
     ("One sentence saying what the published figure is and is not",BLANK)],
    note="Six boxes. The last one is the sentence this whole book has been teaching."), 560)
S["rd12-f14"]=lambda: f_scene(1000,450,
    people=[("yara",60,176,{}),("omar",130,172,{}),("haddad",205,176,{}),
     ("nour",290,172,{}),("samira",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("adeel",590,170,{}),("wei",655,172,{}),
     ("tomas",720,170,{}),("ida",785,172,{}),("lars",845,170,{}),
     ("yusuf",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.2),
     ("dashboard",420,196,0.22),("data",550,196,0.22),("table",650,0,1.0),
     ("map",860,196,0.22),("book",930,198,0.2)],
    board=(40,22,206,112,"THE DEFINITION TRAVELS",[("7.30","the indicator"),("5 lines","the bridge"),("2.15","ours")]),
    clockat=(262,34,22,5,0))
S["rd12-f15"]=lambda: f_chart([("a test result",4),("a capacity figure",5),
    ("an emissions total",3),("a target",6),("a market figure",7)], unit="operators")
S["rd12-f16"]=lambda: f_realia(doc("On a desk at the end of the course",
    "Six numbers, and not one of them wrong",
    "<p><b>The book</b>, open at the contents page.</p>"
    "<p><b>A margin reconciliation</b> with five lines and an arithmetic check.</p>"
    "<p><b>A board paper</b> calling the difference underperformance.</p>"
    "<p><b>A distillation certificate</b> with a result inside a limit by less than the "
    "reproducibility.</p>"
    "<p><b>A capacity figure</b> with no denominator, an <b>emissions total</b> with no basis, and an "
    "<b>energy target</b> with no approach temperature.</p>"
    "<p><i>Every number on this desk is correct. Not one of them carries its definition, and that is "
    "the whole of this book.</i></p>",
    "Seven o'clock, and the tea is cold again. Book 5 is about how organizations manage to know all "
    "of this and still be surprised."), 620)
