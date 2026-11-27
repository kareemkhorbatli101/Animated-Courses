# -*- coding: utf-8 -*-
"""Flowline Book 1 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Starting Point ----------------
S["ra00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each, from an ordinary working day",
    ["What you have","An example"],
    [["A region","the northeast &middot; Deir ez-Zor &middot; Hasakah"],
     ["A grade","heavy and sour &middot; light and sweet"],
     ["A refinery","Homs &middot; Banias"],
     ["A pipeline","the Arab Gas Pipeline &middot; the Kirkuk&ndash;Banias line"],
     ["A unit","a barrel &middot; a cubic meter &middot; a tonne"],
     ["A company","the Syrian Petroleum Company"]],
    note="Six boxes. This book adds the English of a published document: its number, its edition, "
    "and the line that says what it does not cover."), 580)
S["ra00-f2"]=lambda: f_icons([("map","The northeast: Hasakah, al-Jazira. Heavy and sour."),
    ("signpost","The center-east: Deir ez-Zor. Light and sweet."),
    ("cloud","Gas: the Palmyra area, and gas that comes up with the oil."),
    ("ship","The coast: Banias. Where crude is loaded.")],4)
S["ra00-f3"]=lambda: f_realia(tbl("Two refineries, two dates",
    "What is published about each one",
    ["Where","Opened","Nameplate capacity"],
    [["Homs","1959","about 107,000 barrels a day"],
     ["Banias","1979","about 133,000 barrels a day"],
     ["Together","&mdash;","about 240,000 barrels a day"]], numcols=(2,),
    note="Nameplate capacity is what a plant was built to do. It is not what it did last Tuesday."),
    560)
S["ra00-f4"]=lambda: f_realia(doc("What the published figures say",
    "Three periods, three figures, and one honest sentence",
    "<p><b>Peak production:</b> around <b>600,000 barrels a day</b> in the mid-1990s.</p>"
    "<p><b>Before 2011:</b> around <b>385,000 barrels a day</b> in 2010.</p>"
    "<p><b>After 2011:</b> a small fraction of that, and the published figures diverge sharply.</p>"
    "<p style='color:#6b6861;font-size:13px'>Different bodies count different things over "
    "different years. This book gives the figure, the year and the kind of source, and where "
    "sources differ it says so.</p>",
    "An operator who can say the figures disagree and here is why is more use than one who has "
    "memorized the wrong one."), 580)

# ---------------- Unit 1 ----------------
S["ra01-f1"]=lambda: f_icons([("pipe","crude oil"),("cloud","natural gas"),("water","water"),
    ("jug","condensate"),("engine","a well"),("pipe","a well stream"),("tin","a fluid"),
    ("thermometer","a phase"),("chain","associated"),("spoon","dissolved"),
    ("water","produced water"),("crate","formation water"),("crate","sand"),("packet","salt"),
    ("bloodtest","a sample"),("container","a separator")],4)
S["ra01-f2"]=lambda: f_scene(760,400,
    people=[("nour",120,176,{}),("omar",330,180,{"seated":True}),
     ("samira",420,180,{"seated":True}),("ahmad",505,180,{"seated":True}),
     ("yusuf",590,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",60,90,0.6),("tin",650,198,0.3),("clipboard",690,196,0.26)],
    board=(40,24,210,110,"THREE THINGS COME UP",[("oil","and gas"),("water","and sand"),("all three","at once")]),
    clockat=(268,36,22,9,0))
S["ra01-f3"]=lambda: f_icons([("container","a separator: three streams out"),
    ("pipe","gas off the top"),("water","water out of the bottom"),
    ("tin","oil out of the middle"),("bloodtest","a sample bottle"),
    ("logsheet","what the log records")],3)
S["ra01-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Four crude grades, from any published source",
    ["The grade","Degrees API","Percent sulfur","Where it is produced","Our source"],
    blankrows(6,5),
    note="Fill the last column first. A figure with no source is a rumor with a decimal point."),
    600)
S["ra01-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for new operators: the words for what comes up",
    "<p style='font-size:12px;color:#6b6861'>Source: API, <i>Manual of Petroleum Measurement "
    "Standards</i>, Chapter 1, <i>Vocabulary</i>. In our own words.</p>"
    "<p>Three things come up the well. Oil, gas and water. Sand comes up too.</p>"
    "<p>We call all of it the <b>well stream</b>. One pipe. Many things in it.</p>"
    "<p>Gas that comes up with oil is <b>associated</b> gas. Some gas is <b>dissolved</b> in the "
    "oil. It comes out when the pressure drops.</p>"
    "<p>Water from the rock is <b>formation water</b>. Water we take out at the plant is "
    "<b>produced water</b>. They are not the same word.</p>"
    "<p>The standard gives these words for measurement. A drilling office may use a word in "
    "another way. The standard says so.</p>",
    "Say the word the standard says. Then say what you mean by it."), 580)
S["ra01-f6"]=lambda: f_realia(tbl("Word study",
    "One word, one meaning, one example",
    ["The word","What it means","An example"],
    [["associated","gas that comes up with the oil","The field has a lot of associated gas."],
     ["dissolved","in the oil until the pressure drops","Dissolved gas comes out in the separator."],
     ["formation water","water from the rock","The formation water is very salty."],
     ["produced water","water taken out at the plant","Produced water goes to the injection well."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty. Fill them with your partner."), 580)
S["ra01-f7"]=lambda: f_part("What comes up a mature well",
    [("water",78,"#3d6b8a"),("oil",19,"#7a3b1f"),("gas and other",3,"#b08a3a")])
S["ra01-f8"]=lambda: f_icons([("pipe","the well stream"),("container","the separator"),
    ("cloud","gas"),("tin","oil"),("water","water"),("crate","sand")],3)
S["ra01-f9"]=lambda: f_realia(form("Daily well sheet &mdash; Tell Sahra 14",
    [("Date","12 March"),("Gross liquid","1,420 barrels"),("Water cut","78 percent"),
     ("Net oil","312 barrels"),("Gas","41,000 cubic meters"),("Sand",BLANK),
     ("Sample taken","yes &mdash; 09:40"),("Signed","O. Dabbagh")],
    note="One line is blank. Nobody weighed the sand, and the sheet does not pretend otherwise."),
    560)
S["ra01-f10"]=lambda: f_scene(800,400,
    people=[("omar",140,180,{}),("haddad",250,176,{}),("samira",420,182,{"seated":True})],
    props=[("desk",390,0,1.0),("logsheet",470,196,0.26),("container",620,190,0.4),
     ("pipe",700,196,0.3),("clipboard",180,200,0.24)],
    clockat=(60,40,22,10,30))
S["ra01-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Sheet A",None,
    "<p>Well 14. Produced a lot of liquid today. Mostly water. Some gas. Sand again.</p>", None),380)[0:3],
    lambda w,h: f_realia(doc("Sheet B",None,
    "<p>Well 14, 12 March. Gross liquid 1,420 barrels. Water cut 78 percent. "
    "Net oil 312 barrels. Gas 41,000 cubic meters. Sand present, not quantified. "
    "Sample 09:40.</p>", None),380)[0:3],
    800,300,"Four words and a feeling","Six figures and a time")
S["ra01-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>The well is making a lot of water now. More than before. We should look at it.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Well 14 water cut rose from 71 to 78 percent between January and March. "
    "Net oil fell from 402 to 312 barrels a day. Sand is present in the sample. "
    "Requesting a sand check.</p>",None),380)[0:3],
    800,300,"No figures","Four figures and a request")
S["ra01-f13"]=lambda: f_realia(form("Plan your well note",
    [("The well",BLANK),("The date",BLANK),("Gross liquid",BLANK),("Water cut",BLANK),
     ("Net oil",BLANK),("One thing that changed",BLANK)],
    note="Six boxes. Fill the last one last, and say what should follow from it."), 540)
S["ra01-f14"]=lambda: f_scene(1000,450,
    people=[("nour",60,176,{}),("omar",130,172,{"seated":True}),("samira",205,176,{"seated":True}),
     ("ahmad",290,172,{}),("yusuf",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("adeel",515,176,{"seated":True}),("bah",590,170,{}),("haddad",655,172,{}),
     ("yara",720,170,{}),("lars",785,172,{}),("ida",845,170,{}),
     ("wei",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("container",350,190,0.36),
     ("pipe",430,196,0.3),("bloodtest",560,198,0.22),("table",650,0,1.0),
     ("logsheet",860,198,0.24),("shelf",930,96,0.5)],
    board=(40,22,206,112,"ONE PIPE, MANY THINGS",[("oil","gas"),("water","sand"),("all of it","the well stream")]),
    clockat=(262,34,22,17,0))
S["ra01-f15"]=lambda: f_chart([("oil",4),("gas",3),("water",8),("sand",2),("all four",5)],
    unit="operators")
S["ra01-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "One well, two sheets, and a word nobody wrote",
    "<p><b>A daily sheet</b> for Tell Sahra 14, with the sand line blank for eleven days.</p>"
    "<p><b>A sample bottle</b> with a finger of sand in the bottom of it.</p>"
    "<p><b>A pump repair invoice</b> from the week before, for an impeller worn through.</p>"
    "<p><b>A glass of tea</b> going cold.</p>"
    "<p><i>Nobody wrote down the sand, because there was no box for a quantity and nobody had a "
    "way to measure it.</i></p>",
    "Seven o'clock. The sand was in the bottle the whole time, and in the pump."), 600)

# ---------------- Unit 2 ----------------
S["ra02-f1"]=lambda: f_icons([("tin","a barrel"),("crate","a cubic meter"),("jug","a liter"),
    ("jug","a gallon"),("scales","a tonne"),("container","a volume"),("scales","a mass"),
    ("balance","a density"),("tally","gross"),("calculator","net"),("calculator","a factor"),
    ("pencil","to correct"),("thermometer","a reference"),("book","a convention"),
    ("transfer","to convert"),("spreadsheet","a conversion")],4)
S["ra02-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("nadia",410,180,{"seated":True}),
     ("samira",495,180,{"seated":True}),("ahmad",580,180,{"seated":True})],
    props=[("desk",295,0,1.0),("board",50,90,0.62),("calculator",660,198,0.26),
     ("thermometer",700,196,0.28)],
    board=(30,24,214,110,"SAME OIL, TWO NUMBERS",[("60 F","the US base"),("15 C","the metric base"),("both","correct")]),
    clockat=(262,36,22,10,0))
S["ra02-f3"]=lambda: f_icons([("tin","42 US gallons: one barrel"),
    ("jug","about 159 liters"),("crate","about 0.159 cubic meters"),
    ("calculator","one cubic meter: about 6.29 barrels"),
    ("thermometer","60 degrees Fahrenheit is about 15.56 Celsius"),
    ("book","two bases, both published")],3)
S["ra02-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published volumes, and the base each one used",
    ["The figure","The unit","The reference temperature","Where we found it"],
    blankrows(6,4),
    note="If the source does not say the temperature, write that. An uncorrected volume is a "
    "volume at whatever the day was like."), 600)
S["ra02-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for new operators: the barrel, the cubic meter, and why both are right",
    "<p style='font-size:12px;color:#6b6861'>Source: API, <i>Manual of Petroleum Measurement "
    "Standards</i>, Chapter 11.1, published jointly as ASTM D1250 and IP 200. In our own words.</p>"
    "<p>A barrel is <b>42 US gallons</b>. That is a definition. It is not about a drum.</p>"
    "<p>42 US gallons is about <b>159 liters</b>. That is about <b>0.159 cubic meters</b>.</p>"
    "<p>One cubic meter is about <b>6.29 barrels</b>.</p>"
    "<p>Oil gets bigger when it gets warm. So we say the volume <b>at a reference "
    "temperature</b>.</p>"
    "<p>The US base is <b>60 degrees Fahrenheit</b>. The metric base is <b>15 degrees "
    "Celsius</b>. These are not the same. 60 Fahrenheit is about 15.56 Celsius.</p>"
    "<p>So two people can correct the same oil to two bases. Both are right. The numbers "
    "differ.</p>",
    "Say the figure. Then say the base. A volume with no base is half a number."), 580)
S["ra02-f6"]=lambda: f_realia(tbl("Word study",
    "The word in front of a figure, and what it promises",
    ["The word","What it promises","An example"],
    [["exactly","a definition","A barrel is exactly 42 US gallons."],
     ["about","an estimate","About 159 liters."],
     ["just under","slightly less","Just under 0.16 cubic meters."],
     ["just over","slightly more","Just over six barrels."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty. Do not put <i>about</i> in front of a definition."), 580)
S["ra02-f7"]=lambda: f_line([("0 C",1.009),("10 C",1.004),("15 C",1.000),("20 C",0.996),
    ("30 C",0.987),("40 C",0.979)], unit="factor", mark="15 C")
S["ra02-f8"]=lambda: f_icons([("tin","a gross volume"),("calculator","a correction factor"),
    ("spreadsheet","a net volume"),("thermometer","the temperature at the time"),
    ("balance","the density"),("book","the published table")],3)
S["ra02-f9"]=lambda: f_realia(tbl("Tank 2 ticket &mdash; Sahra central processing facility",
    "One tank, one transfer, two bases",
    ["What","Figure"],
    [["Gross observed volume","2,418 barrels"],["Temperature at gauging","31 degrees Celsius"],
     ["Density at 15 degrees Celsius","0.8721"],["Volume corrected to 60 degrees Fahrenheit","2,379 barrels"],
     ["Volume corrected to 15 degrees Celsius","2,376 barrels"],
     ["Difference between the two","3 barrels"]],
    note="Three barrels. Nobody is wrong. The ticket says which base it used, which is the only "
    "thing that makes the difference harmless."), 580)
S["ra02-f10"]=lambda: f_scene(800,400,
    people=[("nadia",150,180,{}),("omar",260,176,{}),("haddad",430,182,{"seated":True})],
    props=[("desk",400,0,1.0),("calculator",480,196,0.26),("spreadsheet",540,196,0.26),
     ("thermometer",640,194,0.3),("tin",710,192,0.34)],
    clockat=(70,40,22,11,15))
S["ra02-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Ticket A",None,
    "<p>2,418 barrels. Tank 2. Loaded today.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Ticket B",None,
    "<p>Gross observed 2,418 barrels at 31 degrees Celsius. Density 0.8721 at 15 degrees "
    "Celsius. Net 2,376 barrels corrected to 15 degrees Celsius. Table used: the published "
    "one named on the back.</p>",None),380)[0:3],
    800,300,"One figure, no base","A figure, a base and a table")
S["ra02-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>We sent about 2,400 barrels. Their figure is lower than ours. I do not know why.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>We corrected to 60 degrees Fahrenheit and got 2,379 barrels. They corrected to 15 degrees "
    "Celsius and got 2,376. The three barrel difference is the two bases, not a loss. Both "
    "figures are on the ticket.</p>",None),380)[0:3],
    800,300,"A difference and a shrug","A difference and its cause")
S["ra02-f13"]=lambda: f_realia(form("Plan your conversion note",
    [("The volume",BLANK),("The unit",BLANK),("The temperature at the time",BLANK),
     ("The base you corrected to",BLANK),("The table you used",BLANK),
     ("What you would say if asked where the figure came from",BLANK)],
    note="Six boxes. The last one is the one Samir asks."), 540)
S["ra02-f14"]=lambda: f_scene(1000,450,
    people=[("nadia",60,176,{}),("omar",130,172,{"seated":True}),("nour",205,176,{"seated":True}),
     ("samira",290,172,{}),("ahmad",365,176,{"seated":True}),("yusuf",440,172,{"seated":True}),
     ("adeel",515,176,{"seated":True}),("bah",590,170,{}),("haddad",655,172,{}),
     ("yara",720,170,{}),("lars",785,172,{}),("ida",845,170,{}),
     ("wei",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("calculator",350,198,0.24),
     ("thermometer",420,196,0.28),("tin",550,192,0.34),("table",650,0,1.0),
     ("spreadsheet",860,198,0.24),("shelf",930,96,0.5)],
    board=(40,22,206,112,"TWO BASES",[("60 F","2,379 bbl"),("15 C","2,376 bbl"),("difference","3 bbl")]),
    clockat=(262,34,22,16,0))
S["ra02-f15"]=lambda: f_chart([("barrels",9),("cubic meters",6),("tonnes",3),
    ("liters",2),("all of them",4)], unit="operators")
S["ra02-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Two tickets, one cargo, three barrels apart",
    "<p><b>Our ticket:</b> 2,379 barrels, corrected to 60 degrees Fahrenheit.</p>"
    "<p><b>Their ticket:</b> 2,376 barrels, corrected to 15 degrees Celsius.</p>"
    "<p><b>An email</b> from the buyer with the word <i>discrepancy</i> in the subject line.</p>"
    "<p><b>The published table</b>, open at the page that explains both bases.</p>"
    "<p><i>Three barrels, repeated over a year of cargoes, is a number somebody will eventually "
    "call a loss.</i></p>",
    "Nine o'clock. Nobody made an error. Nobody wrote the base on the first ticket either."), 600)

# ---------------- Unit 3 ----------------
S["ra03-f1"]=lambda: f_icons([("engine","a wellhead"),("engine","a christmas tree"),
    ("container","a casing head"),("pipe","a tubing head"),("chain","a hanger"),
    ("pipe","a spool"),("barcode","a flange"),("thread","a gasket"),
    ("padlock","a master valve"),("key","a wing valve"),("torch","a swab valve"),
    ("bottleneck","a choke"),("magnifier","a bore"),("certificate","a rating"),
    ("timer","a handwheel"),("pencil","a stem")],4)
S["ra03-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("ahmad",410,180,{"seated":True}),
     ("samira",495,180,{"seated":True}),("adeel",580,180,{"seated":True})],
    props=[("desk",295,0,1.0),("board",50,90,0.62),("engine",650,188,0.42),
     ("certificate",710,198,0.24)],
    board=(30,24,214,110,"A RATING IS NOT PERMISSION",[("5,000 psi","what it can hold"),("today","what it has"),("the gap","the paperwork")]),
    clockat=(262,36,22,9,30))
S["ra03-f3"]=lambda: f_icons([("container","the casing head: the bottom"),
    ("pipe","the tubing head: above it"),("engine","the tree: on top"),
    ("padlock","the master valve: shut it and everything above is dead"),
    ("key","the wing valve: the one you work with"),
    ("bottleneck","the choke: it sets the rate")],3)
S["ra03-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six wellheads, and what each nameplate says",
    ["The well","Rated working pressure","Product specification level","Material class","Temperature class"],
    blankrows(6,5),
    note="Where a nameplate is unreadable, write unreadable. That is a finding, not a gap."), 620)
S["ra03-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for new operators: the parts of a wellhead, and what a rating means",
    "<p style='font-size:12px;color:#6b6861'>Source: API Specification 6A, identical to ISO 10423, "
    "<i>Wellhead and christmas tree equipment</i>. In our own words.</p>"
    "<p>At the bottom is the <b>casing head</b>. Above it is the <b>tubing head</b>. On top is the "
    "<b>tree</b>.</p>"
    "<p>The tree has valves. The <b>master valve</b> is the lowest one. Shut it and everything "
    "above it is dead. The <b>wing valve</b> is the one you use every day. The <b>choke</b> sets "
    "how fast the well flows.</p>"
    "<p>Every part has a <b>rated working pressure</b>. The ratings go 2,000, 3,000, 5,000, "
    "10,000, 15,000 and 20,000 pounds per square inch.</p>"
    "<p>The nameplate also gives a <b>material class</b> and a <b>temperature class</b>.</p>"
    "<p>Here is the part people forget. <b>A rating is not permission.</b> It says what the part "
    "was built to hold when it was new. It does not say the part is fit today.</p>"
    "<p>The standard says what equipment must be able to do. It is not a maintenance book.</p>",
    "Read the nameplate. Then ask when it was last tested, and who signed."), 580)
S["ra03-f6"]=lambda: f_realia(tbl("Word study",
    "Position in the direction of flow",
    ["The word","What it means","An example"],
    [["upstream of","before, in the direction of flow","The master valve is upstream of the choke."],
     ["downstream of","after, in the direction of flow","The choke is downstream of the wing valve."],
     ["consists of","whole, then the parts","The wellhead consists of three sections."],
     ["part of","one piece of a whole","The gasket is part of the flange joint."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Upstream is about flow, not height. Something downstream can be higher and nearer."),
    600)
S["ra03-f7"]=lambda: f_chart([("2,000 psi",1),("3,000 psi",4),("5,000 psi",9),
    ("10,000 psi",3),("15,000 psi",1)], unit="wellheads")
S["ra03-f8"]=lambda: f_icons([("padlock","the master valve"),("key","the wing valve"),
    ("torch","the swab valve"),("bottleneck","the choke"),("barcode","a flange joint"),
    ("certificate","the nameplate")],3)
S["ra03-f9"]=lambda: f_realia(form("Wellhead nameplate &mdash; Tell Sahra 14",
    [("Manufacturer","(stamped, partly illegible)"),("Rated working pressure","5,000 psi"),
     ("Product specification level","PSL 2"),("Material class","EE"),
     ("Temperature class","P to U"),("Serial number","(illegible)"),
     ("Date of manufacture","1987"),("Last pressure test",BLANK)],
    note="Two lines are illegible and one is blank. The rating is still 5,000 psi, and that is "
    "still not permission."), 560)
S["ra03-f10"]=lambda: f_scene(800,400,
    people=[("ahmad",150,180,{}),("omar",255,176,{}),("haddad",420,182,{"seated":True})],
    props=[("desk",395,0,1.0),("certificate",470,196,0.24),("engine",600,186,0.44),
     ("bottleneck",690,194,0.3),("clipboard",190,200,0.24)],
    clockat=(65,40,22,14,0))
S["ra03-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Record A",None,
    "<p>Wellhead on 14 is a 5,000. Looks fine. No problems reported.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Record B",None,
    "<p>Tell Sahra 14: rated 5,000 psi, PSL 2, material class EE, manufactured 1987. "
    "Serial number illegible. No pressure test record found since 2016. "
    "Recommend the record be found or the test repeated before the next intervention.</p>",
    None),380)[0:3],
    800,300,"A rating and an opinion","A rating and a question")
S["ra03-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>The wellhead is rated well above our pressure, so there is nothing to worry about.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>The wellhead is rated 5,000 psi and the well flows at 1,850 psi. The rating is "
    "comfortable. The last test on record is from 2016 and the serial number is illegible, so we "
    "cannot tie the certificate to this body. I have asked for the file.</p>",None),380)[0:3],
    800,300,"The rating as reassurance","The rating as one fact of several")
S["ra03-f13"]=lambda: f_realia(form("Plan your wellhead note",
    [("The well",BLANK),("The rated working pressure",BLANK),("The flowing pressure today",BLANK),
     ("What the nameplate does not say",BLANK),("The last test on record",BLANK),
     ("What you are asking for",BLANK)],
    note="Six boxes. The fourth is the one that makes the note worth writing."), 540)
S["ra03-f14"]=lambda: f_scene(1000,450,
    people=[("ahmad",60,176,{}),("omar",130,172,{"seated":True}),("nour",205,176,{"seated":True}),
     ("samira",290,172,{}),("adeel",365,176,{"seated":True}),("yusuf",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("bah",590,170,{}),("haddad",655,172,{}),
     ("yara",720,170,{}),("lars",785,172,{}),("ida",845,170,{}),
     ("wei",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("engine",345,184,0.44),
     ("certificate",430,198,0.22),("bottleneck",555,194,0.3),("table",650,0,1.0),
     ("padlock",860,198,0.22),("shelf",930,96,0.5)],
    board=(40,22,206,112,"THREE SECTIONS, ONE TREE",[("casing head","the bottom"),("tubing head","the middle"),("the tree","on top")]),
    clockat=(262,34,22,15,30))
S["ra03-f15"]=lambda: f_chart([("the master valve",7),("the wing valve",5),("the choke",6),
    ("the flange joint",3),("the gasket",3)], unit="operators")
S["ra03-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A rating, a date and a missing file",
    "<p><b>A nameplate photograph:</b> 5,000 psi, PSL 2, class EE, 1987. The serial number is "
    "worn away.</p>"
    "<p><b>A pressure test certificate</b> from 2016, for a wellhead whose serial number does not "
    "match anything anybody can read.</p>"
    "<p><b>A work order</b> for an intervention next week.</p>"
    "<p><b>A glass of tea</b> going cold.</p>"
    "<p><i>The rating is comfortable. The rating has always been comfortable. The question is "
    "whether this body is the one the certificate is about.</i></p>",
    "Eight o'clock. Much equipment in a mature oil province is older than its paperwork."), 600)
