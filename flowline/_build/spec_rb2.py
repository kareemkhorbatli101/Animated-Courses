# -*- coding: utf-8 -*-
"""Flowline Book 2 figure specs, Units 4 to 6."""
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
S["rb04-f1"]=lambda: f_icons([("stamp","an inquiry"),("meeting","a commission"),
    ("note","a finding"),("thread","a cause"),("signature","a decision"),
    ("balance","a margin"),("chain","a centralizer"),("crate","cement"),
    ("recycle","to circulate"),("transfer","to displace"),
    ("thermostat","a negative test"),("barrier","to divert"),
    ("worldmap","systematic"),("timetable","a sequence"),
    ("dashboard","pressure"),("clipboard","management")],4)
S["rb04-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("yusuf",405,180,{"seated":True}),
     ("samira",485,180,{"seated":True}),("ahmad",565,180,{"seated":True}),
     ("haddad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("book",715,198,0.22)],
    board=(30,24,214,110,"NINE DEFENSIBLE AFTERNOONS",[("not","a villain"),("nine","decisions"),("one","failure")]),
    clockat=(262,36,22,10,30))
S["rb04-f3"]=lambda: f_icons([("barcode","two casing design options"),
    ("chain","a string with few centralizers"),("recycle","a well not fully circulated"),
    ("crate","a foamed cement sample"),
    ("thermostat","a negative test with two different readings"),
    ("note","nine decisions, each one arguable")],3)
S["rb04-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six public inquiries, any industry",
    ["The inquiry","The event","The year","Who set it up","The main finding, in one line"],
    blankrows(6,5),
    note="The box at the foot: the two reports that blamed different things for the same event. One "
    "line only in the last column."), 640)
S["rb04-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: nine decisions, and what an inquiry concluded about them",
    "<p style='font-size:12px;color:#6b6861'>Source: National Commission on the BP Deepwater Horizon "
    "Oil Spill and Offshore Drilling, <i>Deep Water</i>, Report to the President, January 2011. In "
    "our own words.</p>"
    "<p>On 20 April 2010 a well in deep water blew out. <b>Eleven people were killed.</b></p>"
    "<p>Nothing about that well is like our wells. We are reading it for the shape of the thing.</p>"
    "<p>The report traced the blowout to a <b>series of identifiable decisions</b>: the casing design "
    "for the final string, the number of centralizers, the circulation before cementing, the kind of "
    "cement, whether a log was run to check it, <b>how a negative pressure test was interpreted</b>, "
    "how deep the heavy fluid was displaced, how closely the well was watched, and where the flow was "
    "sent when it reached the rig.</p>"
    "<p>Two things matter more than the list. <b>Almost every decision had an argument behind it</b>, "
    "and the report observes that many of the choices which increased risk also saved time and "
    "therefore money. And <b>no single one of them explains the outcome</b>: the report's conclusion "
    "is that the mistakes revealed systematic failures in risk management, traced back to a failure "
    "of management.</p>"
    "<p><b>The sixth decision is the one to learn.</b> A negative pressure test removes the pressure "
    "holding the well down and watches for anything coming back. The readings did not fit, an "
    "explanation was adopted, and the operation continued. The information existed, in the room, on a "
    "gauge.</p>"
    "<p>It is not a finding of legal liability, the commission said it had no power to compel "
    "testimony, and other investigations reached conclusions that overlap and are not identical.</p>",
    "A reader who has only read one investigation of this event has read one of them."), 580)
S["rb04-f6"]=lambda: f_realia(tbl("Word study",
    "Where the sequencer sits",
    ["The sequencer","Where it sits","An example"],
    [["first","the opening event","First the casing was run."],
     ["then","the next event","Then the cement was pumped."],
     ["after that","the next event, with a pause","After that, no log was run."],
     ["by the time","a later point, looking back","By the time the test was run, the cement had set."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>meanwhile</i> and <i>finally</i>. One is simultaneous and one is "
    "last."), 640)
S["rb04-f7"]=lambda: f_timeline([(0.00,"1","casing"),(0.125,"2","centralizers"),
    (0.25,"3","circulation"),(0.375,"4","cement"),(0.50,"5","no log"),
    (0.625,"6","THE TEST"),(0.75,"7","displacement"),(0.875,"8","monitoring"),
    (1.00,"9","diversion")], 0.625, w=700)
S["rb04-f8"]=lambda: f_icons([("barcode","a casing design with two options"),
    ("chain","a string with too few centralizers"),
    ("recycle","a well that was not fully circulated"),
    ("thermostat","a gauge with an unexpected reading"),
    ("dashboard","a monitoring screen nobody is watching"),
    ("magnifier","which decision is this?")],3)
S["rb04-f9"]=lambda: f_realia(tbl("Negative pressure test record",
    "One evening &middot; two attempts",
    ["Attempt","Bled-off volume","Pressure returned","Returns at surface"],
    [["1, 20:02","to zero","<b>14 bar over 8 minutes</b>","none observed"],
     ["2, 20:41, via kill line","to zero","<b>held at zero</b>","none observed"]],
    note="Explanation adopted: the first reading came from fluid trapped in the line. The two "
    "attempts do not agree, and the record below the table has one signature on it."), 600)
S["rb04-f10"]=lambda: f_scene(800,400,
    people=[("nour",200,180,{"seated":True}),("omar",330,176,{}),("haddad",430,180,{})],
    props=[("table",160,0,1.0),("form",250,198,0.22),("board",560,96,0.56)],
    clockat=(70,40,22,11,0))
S["rb04-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Record A",None,
    "<p>Negative test carried out. Result discussed and accepted. Proceeded with displacement.</p>"
    "<p>One signature.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Record B",None,
    "<p>Both attempts, both readings, both times. A line saying the attempts do not agree. The "
    "explanation adopted and by whom. The name and role of the person who did not accept it. The "
    "decision, and that 52 minutes passed between the first reading and it.</p>",None),380)[0:3],
    800,300,"A conclusion","The readings, then the conclusion")
S["rb04-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Record 1",None,
    "<p>Negative test carried out. Result discussed and accepted. Proceeded with displacement.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Record 2",None,
    "<p>First attempt 20:02: bled to zero, 14 bar returned over eight minutes, expected nil. Second "
    "attempt 20:41 via the kill line: held at zero. <b>The two attempts do not agree.</b> "
    "Explanation adopted: trapped fluid in the line, proposed by the night supervisor. <b>Not "
    "accepted by</b> the assistant driller, recorded. Decision: proceed. 52 minutes from first "
    "reading to decision.</p>",None),380)[0:3],
    800,300,"One line and a signature","Figures, times, a dissent and a duration")
S["rb04-f13"]=lambda: f_realia(form("Plan your test record",
    [("Each attempt, with its figures and times",BLANK),("Whether the attempts agree",BLANK),
     ("The explanation adopted, and by whom",BLANK),("Anybody who did not accept it",BLANK),
     ("The decision",BLANK),("Who holds a copy",BLANK)],
    note="Six boxes. A blank fourth box is information too, and it is not the same as nobody having "
    "doubted."), 560)
S["rb04-f14"]=lambda: f_scene(1000,450,
    people=[("nour",60,176,{"seated":True}),("omar",130,172,{"seated":True}),
     ("haddad",205,176,{}),("yusuf",290,172,{}),("samira",365,176,{"seated":True}),
     ("ahmad",440,172,{"seated":True}),("ida",515,176,{}),("bah",590,170,{}),
     ("lars",655,172,{}),("nadia",720,170,{}),("wei",785,172,{}),
     ("tomas",845,170,{}),("adeel",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("form",350,198,0.2),
     ("book",420,198,0.2),("flipchart",545,170,0.4),("table",650,0,1.0),
     ("window",860,80,0.5),("note",930,198,0.2)],
    board=(40,22,206,112,"THE INFORMATION ARRIVED HERE",[("before","five decisions"),("point six","the test"),("after","three more")]),
    clockat=(262,34,22,15,0))
S["rb04-f15"]=lambda: f_chart([("it was investigated",2),("it was written down",3),
    ("it was explained to me",7),("nothing happened",5),("I have never said it",6)],
    unit="operators")
S["rb04-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Nine decisions, and a rig that was behind schedule",
    "<p><b>An inquiry report</b> open at a page with one sentence underlined: that the failures were "
    "systematic.</p>"
    "<p><b>A negative pressure test record</b> with two attempts that do not agree.</p>"
    "<p><b>A timeline</b> with nine points on it.</p>"
    "<p><b>A cost report</b> showing the days the rig was behind schedule.</p>"
    "<p><i>Every decision was made by somebody competent who expected to be at work the following "
    "week.</i></p>",
    "Seven o'clock. If each decision was defensible, the question of who is responsible is the whole "
    "of the report."), 600)

# ---------------- Unit 5 ----------------
S["rb05-f1"]=lambda: f_icons([("dashboard","reservoir pressure"),("thermostat","bottomhole pressure"),
    ("balance","drawdown: the gap between them"),("data","a straight line"),
    ("data","a curve"),("thermometer","the bubble point"),
    ("spoon","gas forming in the pores"),("bottleneck","oil getting past the gas"),
    ("key","a choke being opened"),("engine","a flowing wellhead"),
    ("tally","a productivity index"),("calculator","a dimensionless axis"),
    ("computer","a computer of 1968"),("quotemark","a journal page"),
    ("barrier","skin damage round the wellbore"),("note","twenty-one cases")],4)
S["rb05-f2"]=lambda: f_scene(760,400,
    people=[("bah",110,176,{}),("omar",320,180,{"seated":True}),("samira",405,180,{"seated":True}),
     ("nadia",485,180,{"seated":True}),("haddad",565,180,{}),("ahmad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("data",710,196,0.24)],
    board=(30,24,214,110,"ONE BUBBLE POINT, TWO SHAPES",[("above","a straight line"),("below","a curve"),("why","gas in the pores")]),
    clockat=(262,36,22,11,0))
S["rb05-f3"]=lambda: f_icons([("data","a straight line through two points"),
    ("noentry","the same line extended past the bubble point: wrong"),
    ("data","the real curve, bending below it"),
    ("bottleneck","gas bubbles blocking the pore throats"),
    ("key","one well at two drawdowns"),
    ("note","one straight line, one curve, one bubble point")],3)
S["rb05-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six well tests",
    ["The well","Reservoir pressure","Flowing pressure","The rate","The drawdown"],
    blankrows(6,5),
    note="Calculate the last column. The box at the foot: the two wells where the same drawdown gave "
    "very different rates."), 620)
S["rb05-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: how much more you get when you pull harder",
    "<p style='font-size:12px;color:#6b6861'>Source: J. V. Vogel, \"Inflow Performance Relationships "
    "for Solution-Gas Drive Wells\", <i>Journal of Petroleum Technology</i>, 1968. In our own "
    "words.</p>"
    "<p>A well flows because the reservoir pressure is higher than the pressure at the bottom of the "
    "well. The difference is the <b>drawdown</b>.</p>"
    "<p><b>Above the bubble point it is a straight line.</b> Only liquid moves in the rock. Double "
    "the drawdown, double the rate. The slope is the productivity index.</p>"
    "<p><b>Below the bubble point it is not.</b> Gas comes out of solution <b>in the pores</b>, takes "
    "up space the oil was using, and the rock's relative permeability to oil falls. Each extra bar of "
    "drawdown buys less oil than the bar before it.</p>"
    "<p><b>The more you pull, the less each extra bar gives you.</b> That is the whole result.</p>"
    "<p>Vogel plotted his curves <b>dimensionlessly</b> and cases that looked very different "
    "collapsed onto nearly one curve. That curve is what engineers have used ever since.</p>"
    "<p><b>Twenty-one computed cases.</b> The curve was not drawn from field measurements. It came "
    "from twenty-one hypothetical reservoir cases, calculated on the computers of 1968, and Vogel "
    "said so and described them.</p>"
    "<p>It is for <b>solution-gas drive</b>, it assumes a well with <b>no significant damage</b>, and "
    "its maximum rate is at <b>zero</b> bottomhole pressure &mdash; a construct, not an operating "
    "point.</p>",
    "If a well underperforms the curve, the first question is not about the rock."), 580)
S["rb05-f6"]=lambda: f_realia(tbl("Word study",
    "Patterns of proportion",
    ["The pattern","What it says","An example"],
    [["the more … the more","they rise together","The more drawdown, the more oil &mdash; above the bubble point."],
     ["the more … the less","one rises as the other falls","The more you pull, the less each extra bar gives you."],
     ["the harder … the worse","with adjectives","The harder you pull, the worse the oil's path becomes."],
     ["twice as much … as","a factor","Twice as much drawdown gives twice as much oil, above the bubble point."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>half as much</i> and <i>for every</i>."), 640)
S["rb05-f7"]=lambda: f_line([("0.0",1.00),("0.1",0.98),("0.2",0.95),("0.3",0.91),
    ("0.4",0.85),("0.5",0.78),("0.6",0.70),("0.7",0.60),("0.8",0.49),
    ("0.9",0.36),("1.0",0.00)], unit="p ratio", dashed_from=5)
S["rb05-f8"]=lambda: f_icons([("engine","a well above the bubble point"),
    ("spoon","a well below it"),("barrier","a well with a damaged zone"),
    ("water","a water drive well"),("container","a gas cap well"),
    ("magnifier","does Vogel's curve apply here?")],3)
S["rb05-f9"]=lambda: f_realia(tbl("Four-point well test &mdash; Tell Sahra 14",
    "14 March &middot; reservoir pressure 178 bar &middot; bubble point 142 bar",
    ["Choke","Flowing pressure, bar","Oil, bbl/d","Gas-oil ratio","Water cut, %"],
    [["24","154","318","340","31"],["28","146","376","355","32"],
     ["32","138","412","380","33"],["40","121","<b>437</b>","<b>530</b>","34"]],
    numcols=(0,1,2,3,4),
    note="Between the third and fourth points the oil rose 6 percent and the gas-oil ratio rose "
    "39 percent."), 620)
S["rb05-f10"]=lambda: f_scene(800,400,
    people=[("omar",180,180,{"seated":True}),("bah",430,176,{}),("haddad",650,180,{})],
    props=[("desk",150,0,1.0),("logsheet",230,196,0.24),("board",500,96,0.56),
     ("dashboard",700,190,0.3)],
    clockat=(60,40,22,11,30))
S["rb05-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Summary A",None,
    "<p>Choke 24: 318 barrels a day. Choke 28: 376. Choke 32: 412. Choke 40: 437.</p>"
    "<p>Best rate 437 at the 40.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Summary B",None,
    "<p>Each point with its oil rate, its gas-oil ratio, its drawdown, and the increase in oil and "
    "gas from the point before it as a percentage. Between 32 and 40: oil up 6 percent, gas up "
    "39.</p>",None),380)[0:3],
    800,300,"Four rates","Four rates, four gas figures and the increments")
S["rb05-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Tested 14 at four chokes. Best rate 437 barrels a day at the 40. Recommend running at the "
    "40.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Reservoir pressure 178, bubble point 142. All four points with rate, ratio and flowing "
    "pressure. The points fall on a bending curve, as expected below the bubble point. Recommend the "
    "32: the extra 25 barrels a day at the 40 costs about 150 thousand cubic meters of gas a month to "
    "a flare we are already over-using, and the deeper drawdown reduces tomorrow's inflow. Mostly "
    "reversible. Mostly.</p>",None),380)[0:3],
    800,300,"The best rate","The best rate, its cost and a recommendation")
S["rb05-f13"]=lambda: f_realia(form("Plan your well test note",
    [("The reservoir pressure and the bubble point",BLANK),("Each test point, with three figures",BLANK),
     ("The shape of the points",BLANK),("The increment between the last two",BLANK),
     ("The recommendation",BLANK),("What the recommendation costs",BLANK)],
    note="Six boxes. Somebody will want the last one left out."), 560)
S["rb05-f14"]=lambda: f_scene(1000,450,
    people=[("omar",60,176,{"seated":True}),("bah",130,172,{}),("haddad",205,176,{}),
     ("nour",290,172,{}),("samira",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("ahmad",515,176,{"seated":True}),("yusuf",590,170,{}),("lars",655,172,{}),
     ("ida",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("adeel",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("logsheet",350,198,0.22),
     ("data",420,196,0.24),("dashboard",550,190,0.3),("table",650,0,1.0),
     ("hot",860,194,0.24),("shelf",930,96,0.5)],
    board=(40,22,206,112,"TWENTY-ONE COMPUTED CASES",[("the more","you pull"),("the less","each bar gives"),("said so","on page one")]),
    clockat=(262,34,22,13,0))
S["rb05-f15"]=lambda: f_chart([("the oil rate",8),("the gas-oil ratio",4),
    ("the flowing pressure",5),("the flare capacity",2),("nothing, I just open it",4)],
    unit="operators")
S["rb05-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A month-end choke change that lasted eleven months",
    "<p><b>A four-point well test sheet</b> with the fourth row circled.</p>"
    "<p><b>A monthly production report</b> with the target met.</p>"
    "<p><b>A flaring log</b> with a rising estimate.</p>"
    "<p><b>A bending curve</b> with a straight dashed line drawn through it.</p>"
    "<p><i>The well stayed at that choke for eleven months, because nobody set a date to review it. "
    "By the end of the year its rate at that choke was lower than its rate at the smaller choke had "
    "been.</i></p>",
    "Seven o'clock. One extra barrel of oil, four extra barrels' worth of gas, and no review date."),
    600)

# ---------------- Unit 6 ----------------
S["rb06-f1"]=lambda: f_icons([("engine","a dead well"),("jug","a heavy column"),
    ("cloud","a lightened column"),("key","a gas lift valve"),
    ("pipe","the gas injection line"),("boiler","a compressor"),
    ("container","the annulus"),("data","a gradient curve"),
    ("bottleneck","a choke bean"),("balance","a pressure drop"),
    ("wind","sonic flow"),("data","a performance curve with a peak"),
    ("quotemark","a chart drawn by hand in the 1950s"),("iron","a pump"),
    ("calculator","an injection rate meter"),("note","more gas, less oil")],4)
S["rb06-f2"]=lambda: f_scene(760,400,
    people=[("bah",110,176,{}),("omar",320,180,{"seated":True}),("wei",405,180,{}),
     ("ahmad",490,180,{"seated":True}),("samira",570,180,{"seated":True}),
     ("haddad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("boiler",710,190,0.3)],
    board=(30,24,214,110,"MAKE THE COLUMN LIGHTER",[("lighter","rate up"),("faster","friction up"),("between","a peak")]),
    clockat=(262,36,22,11,30))
S["rb06-f3"]=lambda: f_icons([("jug","a heavy column, high pressure at the bottom"),
    ("cloud","a lightened column, lower pressure"),
    ("key","gas entering through a valve"),
    ("storm","friction rising in a fast column"),
    ("data","a curve with a peak"),("note","two effects pulling against each other")],3)
S["rb06-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six methods of artificial lift",
    ["The method","What energy it uses","What it needs at surface","Where it is common","The source"],
    blankrows(6,5),
    note="The box at the foot: the method nobody in our team had heard of. Which needs most surface "
    "equipment, and which least?"), 640)
S["rb06-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: making the column lighter",
    "<p style='font-size:12px;color:#6b6861'>Source: W. E. Gilbert, \"Flowing and Gas-lift Well "
    "Performance\", in <i>Drilling and Production Practice</i>, API, 1954. In our own words.</p>"
    "<p>A well flows if the reservoir pressure beats everything in the way: the weight of the fluid "
    "in the tubing, the friction, and the pressure at the wellhead. As a field ages the fluid gets "
    "heavier and the reservoir cannot lift it.</p>"
    "<p><b>Gas lift adds gas to the tubing</b> so the column becomes lighter. The pressure at the "
    "bottom falls, the drawdown increases, and the well produces.</p>"
    "<p><b>But two things happen at once.</b> The column gets lighter, which pushes the rate "
    "<b>up</b>. The flow gets faster, so friction rises, which pushes it <b>down</b>.</p>"
    "<p>At low injection rates the first effect wins. There is a <b>peak</b> &mdash; an optimum "
    "injection rate &mdash; and past it <b>more gas gives you less oil</b> while the compressor burns "
    "the same fuel or more.</p>"
    "<p>Gilbert's paper gave engineers <b>gradient curves</b> for working out the pressure at any "
    "depth, and an empirical relationship for a wellhead choke that holds while the flow is "
    "<b>critical</b> &mdash; taken in practice to be while the downstream pressure is below about "
    "seventy percent of the upstream.</p>"
    "<p><b>Drawn by hand from field data</b>, in the 1950s, for particular tubing sizes and fluids, "
    "in field units. Empirical, and he did not claim otherwise.</p>",
    "A well with a leaking valve can look lifted on paper and be lifting nothing. The giveaway is "
    "the injection pressure, not the oil rate."), 580)
S["rb06-f6"]=lambda: f_realia(tbl("Word study",
    "Purpose",
    ["The form","What follows it","An example"],
    [["to","a verb","We inject gas to lighten the column."],
     ["in order to","a verb, more formal","Gas is injected in order to reduce the bottomhole pressure."],
     ["so that","a clause with a subject","We inject gas so that the reservoir can lift the fluid."],
     ["for","a noun","The compressor is there for the injection gas."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>so as to</i> and <i>the point of … is to</i>. Never <i>for "
    "lighten</i>."), 640)
S["rb06-f7"]=lambda: f_line([("12",198),("15",232),("18",261),("20",274),("22",281),
    ("25",290),("27",276),("29",258),("31",244),("33",231)],
    unit="bbl/d", mark="25")
S["rb06-f8"]=lambda: f_icons([("balance","steady injection pressure, steady oil"),
    ("data","rising injection pressure, falling oil"),
    ("water","injection gas going into the formation"),
    ("key","a valve leaking at the wrong depth"),
    ("noentry","a well past the peak on the curve"),
    ("magnifier","what is this well doing?")],3)
S["rb06-f9"]=lambda: f_realia(tbl("Gas lift well sheet &mdash; Tell Sahra 9",
    "Six months &middot; injection pressure steady at 68 bar throughout",
    ["Month","Injection, 1000 m3/d","Oil, bbl/d","Water cut, %","Gas-oil ratio"],
    [["January","18","261","41","620"],["February","22","281","41","710"],
     ["March","25","<b>290</b>","42","790"],["April","27","276","42","860"],
     ["May","29","258","43","940"],["June","31","<b>244</b>","43","1,020"]],
    numcols=(1,2,3,4),
    note="The injection rate has risen every month and the oil has fallen for the last three."),
    620)
S["rb06-f10"]=lambda: f_scene(800,400,
    people=[("wei",180,180,{}),("bah",320,176,{}),("omar",440,180,{})],
    props=[("boiler",560,180,0.44),("logsheet",230,198,0.22),("railings",120,170,0.4),
     ("calculator",680,198,0.22)],
    clockat=(60,40,22,12,0))
S["rb06-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>January 261. February 281. March 290. April 276. May 258. June 244 barrels a day.</p>"
    "<p>Oil is falling. Injection at maximum.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>Each month with the oil rate, the injection rate, the injection pressure and the barrels of "
    "oil per thousand cubic meters injected: 14.5, 12.8, 11.6, 10.2, 8.9, 7.9. March is the "
    "peak.</p>",None),380)[0:3],
    800,300,"The output only","The output, the input and the ratio")
S["rb06-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Well 9 oil is down again, 244 barrels a day. Injection at maximum. Request additional "
    "compression capacity for this well.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Six months of both rates. Injection pressure steady at 68 bar, so the valve appears to be "
    "passing at the design depth. <b>The oil peaked in March and has fallen for three months while "
    "the injection has risen every month.</b> Proposal: step down to 27, 24, 21, one week each, "
    "recording the oil daily. Cost: nothing, and it frees compression for well 12. If the oil falls "
    "at every step I was wrong and I will write that here.</p>",None),380)[0:3],
    800,300,"A purchase request","A free test, and what would disprove it")
S["rb06-f13"]=lambda: f_realia(form("Plan your gas lift note",
    [("The well and the method",BLANK),("Both rates for each period",BLANK),
     ("The injection pressure",BLANK),("Where the peak appears to be",BLANK),
     ("What you propose, and what it costs",BLANK),("What would show you were wrong",BLANK)],
    note="Six boxes. Most reports do not have the last one."), 560)
S["rb06-f14"]=lambda: f_scene(1000,450,
    people=[("wei",60,176,{}),("bah",130,172,{}),("omar",205,176,{}),
     ("nour",290,172,{}),("ahmad",365,176,{"seated":True}),("samira",440,172,{"seated":True}),
     ("haddad",515,176,{}),("nadia",590,170,{}),("lars",655,172,{}),
     ("ida",720,170,{}),("yusuf",785,172,{}),("tomas",845,170,{}),
     ("adeel",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("boiler",345,184,0.36),
     ("logsheet",430,198,0.22),("calculator",555,198,0.2),("table",650,0,1.0),
     ("key",860,198,0.2),("shelf",930,96,0.5)],
    board=(40,22,206,112,"TWO EFFECTS, ONE PEAK",[("lighter","up"),("friction","down"),("past it","worse")]),
    clockat=(262,34,22,14,0))
S["rb06-f15"]=lambda: f_chart([("yes, every month",3),("sometimes",4),
    ("only the output",9),("I do not know",4),("we have no meter",3)], unit="operators")
S["rb06-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Three months of raising the gas because the oil was falling",
    "<p><b>A six-month gas lift sheet</b> with the injection column rising and the oil column "
    "falling.</p>"
    "<p><b>A performance curve</b> with a peak in March and a cross well to the right of it.</p>"
    "<p><b>A compressor fuel bill.</b></p>"
    "<p><b>A request for additional compression.</b></p>"
    "<p><i>Each decision was made by a competent operator, on the evidence of a falling oil rate, "
    "using the only lever available.</i></p>",
    "Seven o'clock. A step-down test costs nothing, and nobody runs one."), 600)
