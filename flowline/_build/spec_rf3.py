# -*- coding: utf-8 -*-
"""Flowline Book 6 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Unit 7 ----------------
S["rf07-f1"]=lambda: f_icons([("data","a scatter with a downward line"),
    ("table","a table of countries"),("tally","a growth rate column"),
    ("balance","a resource exports share"),("signpost","an exchange rate rising"),
    ("shutter","a closing textile factory"),("storm","revenue swinging violently"),
    ("spreadsheet","a budget built on the peaks"),("queue","a queue for a permit"),
    ("lecture","a half-empty lecture hall"),("savings","a sovereign fund statement"),
    ("invoice","borrowing against future production"),
    ("worldmap","two countries, same resource, different outcomes"),
    ("review","an institutions index"),("logsheet","a regression output"),
    ("note","the measure may be the outcome")],4)
S["rf07-f2"]=lambda: f_scene(820,420,
    people=[("bah",120,176,{}),("omar",340,180,{"seated":True}),("nadia",420,180,{"seated":True}),
     ("haddad",500,176,{}),("nour",580,180,{"seated":True}),
     ("yusuf",660,180,{"seated":True}),("samira",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("data",780,196,0.2)],
    board=(24,22,216,112,"MEASURED / ASSUMED",[("exports","over GDP"),("vs","in the ground"),("?","the arrow")]),
    clockat=(258,34,22,9,0))
S["rf07-f3"]=lambda: f_icons([("signpost","a currency rising, a factory closing"),
    ("storm","a budget built on a revenue peak"),("queue","a queue for a permit"),
    ("lecture","a half-empty classroom"),("invoice","a loan against future production"),
    ("note","five mechanisms, and only some are about geology")],3)
S["rf07-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six resource-exporting countries",
    ["The country","The resource","Share of exports","What happened to growth","What else changed"],
    blankrows(6,5),
    note="The fifth column makes the exercise honest. The box at the foot: the two with the same "
    "resource and different outcomes."), 680)
S["rf07-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the biggest claim in this subject",
    "<p style='font-size:12px;color:#6b6861'>Sources: Richard M. Auty, <i>Sustaining Development in "
    "Mineral Economies: The Resource Curse Thesis</i>, Routledge, 1993; and Jeffrey D. Sachs and "
    "Andrew M. Warner, NBER Working Paper 5398, 1995. In our own words.</p>"
    "<p><b>The claim.</b> The phrase comes from the 1993 book; the famous result from the 1995 working "
    "paper. Across a large sample of countries over roughly two decades, economies with a <b>higher "
    "share of natural resource exports in gross domestic product</b> grew more slowly, and the "
    "relationship survived <b>controlling for</b> initial income, trade openness and investment.</p>"
    "<p><b>That should be stated fairly before it is argued with.</b> It was a measured association, "
    "published with its method, which is why it has been argued about productively for thirty "
    "years.</p>"
    "<p><b>Five proposed mechanisms, which are explanations rather than findings:</b> <b>exchange rate "
    "appreciation</b> crowding out other tradable sectors; <b>volatility</b>, where expenditure built "
    "on good years must be cut in bad ones; <b>rent-seeking</b>, where a large capturable stream "
    "rewards competing over producing; <b>human capital</b>, where the perceived return to education "
    "falls; and <b>debt</b> taken on in a good year and serviced in a bad one.</p>"
    "<p><b>FOUR OBJECTIONS, AND THEY ARE NOT FROM THE INDUSTRY.</b></p>"
    "<p><b>One: the measure may be partly the outcome.</b> Resource exports <b>as a share of the "
    "economy</b> falls when other sectors grow and rises when nothing else develops, so the variable "
    "may measure <b>failure at everything else</b>. Several later studies using <b>subsoil wealth per "
    "person</b> found the relationship weakened or reversed. This is the most serious objection and it "
    "is a measurement objection.</p>"
    "<p><b>Two: the period.</b> Extending or shifting the window changes results.</p>"
    "<p><b>Three: institutions appear to decide the sign.</b> On that account there is no curse and no "
    "blessing; there is a <b>multiplier</b>.</p>"
    "<p><b>Four: the counterexamples are not marginal</b>, and <i>they are exceptions</i> is not an "
    "account.</p>"
    "<p><b>And the method.</b> Cross-country regression establishes <b>association</b>, not "
    "<b>direction</b>. The authors knew it. It gets lost the moment the result becomes a sentence.</p>"
    "<p><b>What survives all of this, and it is not small.</b> That resource revenue is <b>volatile</b>, "
    "that volatility is damaging when budgets are built on peaks, and that this is manageable with "
    "instruments that exist. <b>The curse is contested. The volatility is arithmetic.</b></p>",
    "Read the paper, read two of the objections, and then decide what you think."), 580)
S["rf07-f6"]=lambda: f_realia(tbl("Word study",
    "Correlation and causation",
    ["The phrase","What it claims","An example"],
    [["is associated with","they move together","Higher resource dependence is associated with slower growth."],
     ["is correlated with","the same, statistically","The two variables are negatively correlated."],
     ["controlling for","other factors held constant","Controlling for initial income and trade openness."],
     ["does not establish that","blocks the leap","It does not establish that resources caused the slower growth."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>the direction of causation is</i> and <i>a plausible mechanism "
    "is</i>."), 700)
S["rf07-f7"]=lambda: f_matrix(["Exports as a share of the economy","Subsoil wealth per person","Same rank?"],
    [("Country A",["very high","moderate","<b>no</b>"]),
     ("Country B",["moderate","very high","<b>no</b>"]),
     ("Country C",["high","low","<b>no</b>"]),
     ("Country D",["low","high","<b>no</b>"]),
     ("<b>Moves when other sectors grow?</b>",["<b>yes</b>","<b>no</b>","&mdash;"])], 680)
S["rf07-f8"]=lambda: f_icons([("signpost","a currency strengthening"),
    ("spreadsheet","a budget built on a peak"),("queue","a queue for a permit"),
    ("lecture","a half-empty classroom"),("invoice","a loan on future production"),
    ("magnifier","which mechanism, and who could change it?")],3)
S["rf07-f9"]=lambda: f_realia(tbl("Ministry paper extract",
    "One sentence, one citation",
    ["","Entry"],
    [["The sentence","<b>resource-rich countries grow one percentage point more slowly</b>"],
     ["The footnote","one working paper, <b>1995</b>"],
     ["Objections stated","<b>none</b>"],
     ["Measure named","<b>no</b>"],
     ["Period named","<b>no</b>"],
     ["Policy drawn from it","diversification"]],
    note="<b>One citation, thirty years old, no objection stated.</b>"), 600)
S["rf07-f10"]=lambda: f_scene(800,400,
    people=[("bah",180,180,{}),("nadia",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("desk",260,0,1.0),("logsheet",340,198,0.2),("book",230,198,0.2),
     ("table",580,0,0.9),("data",700,196,0.22)],
    clockat=(60,40,22,11,0))
S["rf07-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Note A",None,
    "<p>International evidence demonstrates that resource-rich countries grow approximately one "
    "percentage point more slowly. Diversification is essential.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note B",None,
    "<p>The <b>result</b>, with what was measured and controlled for. The <b>strongest objection</b>. "
    "The <b>institutions</b> account. The writer's own position with a hedge. <b>The part nobody "
    "disputes</b>, with two bank statements. And a proposal attached to that part.</p>",None),380)[0:3],
    800,300,"A sentence","A result and an objection")
S["rf07-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Not this",None,
    "<p>Research proves resources harm growth. The curse has been debunked. We will avoid the "
    "curse.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("This",None,
    "<p>A 1995 study found higher dependence <b>associated with</b> slower growth, controlling for "
    "several factors; <b>the measure was resource exports as a share of the economy</b>. The "
    "measurement objection is serious and later work using subsoil wealth found it weakened. <b>Two of "
    "the five mechanisms we can act on</b>: volatility, and capability.</p>",None),380)[0:3],
    800,300,"Both directions overstated","Stated, objected, acted on")
S["rf07-f13"]=lambda: f_realia(form("Plan your briefing",
    [("The result, with its measure and method",BLANK),("The strongest objection",BLANK),
     ("What the institutions account says",BLANK),("Your own position, with a hedge",BLANK),
     ("The undisputed part",BLANK),("A proposal attached to that part",BLANK)],
    note="Six boxes. No sentence claiming the question is settled in either direction."), 560)
S["rf07-f14"]=lambda: f_scene(1000,450,
    people=[("bah",60,176,{}),("nadia",130,172,{}),("omar",205,176,{}),
     ("haddad",290,172,{}),("nour",365,176,{}),("yusuf",440,172,{"seated":True}),
     ("samira",515,176,{"seated":True}),("yara",590,170,{}),("ahmad",655,172,{}),
     ("adeel",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("wei",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("data",350,196,0.22),
     ("logsheet",420,198,0.2),("statement",550,198,0.2),("table",650,0,1.0),
     ("book",860,198,0.2),("flipchart",930,194,0.2)],
    board=(40,22,206,112,"THE MEASURE?",[("exports/GDP","a ratio"),("subsoil","a stock"),("x3","our swing")]),
    clockat=(262,34,22,12,0))
S["rf07-f15"]=lambda: f_chart([("volatility",8),("exchange rate effects",3),
    ("rent-seeking",6),("education and capability",5),("none of them",2)], unit="operators")
S["rf07-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A sentence, a footnote and two bank statements",
    "<p><b>A ministry paper</b> open at one bold sentence with one footnote from 1995.</p>"
    "<p><b>Two journal articles</b> arguing the opposite way.</p>"
    "<p><b>A book from 1993</b> where the phrase comes from.</p>"
    "<p><b>Two bank statements</b> showing receipts swinging by a factor of three.</p>"
    "<p><b>A draft savings rule.</b></p>"
    "<p><i>The measure behind the sentence may be partly the outcome it is trying to explain. The bank "
    "statements are not disputed by anybody at all.</i></p>",
    "Seven o'clock. Argue about the curse in the evening; work on the volatility on Monday."), 620)

# ---------------- Unit 8 ----------------
S["rf08-f1"]=lambda: f_icons([("queue","a very large workforce at a mine gate"),
    ("truck","a coal train on a single line"),("bottleneck","a loading hopper at a chokepoint"),
    ("meeting","a union meeting hall"),("note","a strike notice"),
    ("councilbuilding","a parliament building"),("vote","a voting queue"),
    ("engine","an oil field with a small crew"),("pipe","a pipeline across empty ground"),
    ("ship","a tanker on an open route"),("dashboard","a pumping station with three people"),
    ("worldmap","alternative shipping routes"),("bank","a ministry of finance"),
    ("data","an economic statistics publication"),("book","a historian's bookshelf"),
    ("note","an argument, not a measurement")],4)
S["rf08-f2"]=lambda: f_scene(820,420,
    people=[("bah",120,176,{}),("omar",340,180,{"seated":True}),("nadia",420,180,{"seated":True}),
     ("tomas",500,180,{"seated":True}),("nour",580,180,{"seated":True}),
     ("yusuf",660,180,{"seated":True}),("samira",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("book",780,198,0.2)],
    board=(24,22,216,112,"COAL / OIL",[("thousands","a chokepoint"),("a few","three routes"),("leverage","lost")]),
    clockat=(258,34,22,10,30))
S["rf08-f3"]=lambda: f_icons([("data","a measured correlation"),
    ("logsheet","a chain of historical reasoning"),("worldmap","a counterexample"),
    ("archive","a document in an archive"),("signpost","a chain of events"),
    ("note","two kinds of claim, and you test them differently")],3)
S["rf08-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six arguments",
    ["The argument","Who makes it","What kind of claim","What would make it wrong","One published objection"],
    blankrows(6,5),
    note="The fourth is the test. The box at the foot: the one nothing could falsify."), 680)
S["rf08-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: an argument about the shape of an energy system",
    "<p style='font-size:12px;color:#6b6861'>Source: Timothy Mitchell, <i>Carbon Democracy: Political "
    "Power in the Age of Oil</i>, Verso, 2011. In our own words. <b>This is a work of political "
    "argument and history. It is contested.</b></p>"
    "<p><b>What it argues.</b> That the political arrangements we call modern democracy, where they "
    "first took hold, were shaped in part by the <b>material properties of coal</b> &mdash; and that "
    "the shift to <b>oil</b> altered those properties.</p>"
    "<p><b>The coal half, in four steps.</b> <b>One:</b> coal was produced by very large workforces, "
    "concentrated in a few places, doing work that could not be closely supervised. <b>Two:</b> it "
    "moved along <b>narrow fixed channels</b> &mdash; rail, canal, specific loading points &mdash; so "
    "a whole economy's energy passed through a few physical bottlenecks. <b>Three:</b> that combination "
    "gave those workforces the capacity to <b>halt an entire economy</b>. <b>Four:</b> on this "
    "account, that capacity is part of how mass political rights came to be conceded &mdash; <b>won by "
    "people who had become able to interrupt something</b>.</p>"
    "<p><b>The oil half.</b> Oil is produced by <b>far smaller workforces</b> and flows through "
    "pipelines and across oceans along routes that can be <b>re-routed</b>. The same capacity to "
    "interrupt does not exist in the same way.</p>"
    "<p><b>WHAT KIND OF CLAIM THIS IS.</b> <b>An argument, not a measurement</b>: a chain of reasoning "
    "supported by historical material, tested by whether the steps follow and the cases fit. <b>It is "
    "contested in print</b> by historians and political scientists: that it weights material form over "
    "ideas and institutions; that the history is more varied; that oil workers have exercised "
    "considerable leverage in some countries and periods.</p>"
    "<p><b>It is not the claim it is usually reported as making.</b> Not that oil causes dictatorship. "
    "Not that coal produces democracy. A claim about <b>capacities</b>, and about consequences nobody "
    "intended. <b>And it is not predictive.</b></p>"
    "<p><b>The honest reason it is in this course is not that it is right.</b> It is that you will be "
    "handed an argument of this kind, and the professional skill is to state it <b>at its "
    "strongest</b>, say what kind of claim it is, name one objection, and only then say what you "
    "think.</p>",
    "Read it, and read one review that disagrees with it."), 580)
S["rf08-f6"]=lambda: f_realia(tbl("Word study",
    "Attributing an argument",
    ["The phrase","What it does","An example"],
    [["the argument runs that","reports a chain of reasoning","The argument runs that physical form shaped political capacity."],
     ["on this account","inside somebody else's framework","On this account, the shift to oil weakened that leverage."],
     ["the author contends that","attributes, without endorsing","The author contends that the concessions were won rather than granted."],
     ["the claim is not that X but that Y","corrects a misreading","The claim is not that oil causes dictatorship but that a capacity was lost."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>critics object that</i> and <i>at its strongest the argument is</i>."), 720)
S["rf08-f7"]=lambda: f_matrix(["Coal","Oil"],
    [("Workforce",["very large","far smaller"]),
     ("Concentration",["gathered in a few places","dispersed"]),
     ("How it moves",["rail, canal, fixed loading points","pipeline, tanker, many routes"]),
     ("Alternative routes",["few","many"]),
     ("People needed to interrupt it",["<b>many, acting together</b>","<b>few, and more easily bypassed</b>"]),
     ("<b>Who holds leverage</b>",["<b>the workforce</b>","<b>not the workforce</b>"]),
     ("<i>Rows 1 to 5</i>",["<i>description</i>","<i>description</i>"]),
     ("<b>Row 6</b>",["<b>the argument</b>","<b>the argument</b>"])], 660)
S["rf08-f8"]=lambda: f_icons([("queue","a mine workforce at a gate"),
    ("truck","a single rail line"),("engine","a small oil field crew"),
    ("worldmap","three shipping routes"),("note","a sentence about who holds leverage"),
    ("magnifier","description or argument?")],3)
S["rf08-f9"]=lambda: f_realia(tbl("A circulated summary",
    "Sent to about forty people",
    ["","Entry"],
    [["Heading","<i>summary for discussion</i>"],
     ["How the argument is stated","<b>one sentence, overstated</b>"],
     ["Author named","<b>no</b>"],
     ["Objection stated","<b>none</b>"],
     ["Conclusion drawn","about one country, which the book does not draw"]],
    note="<b>No author, no objection, one conclusion.</b>"), 600)
S["rf08-f10"]=lambda: f_scene(800,400,
    people=[("bah",180,180,{}),("nadia",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("desk",260,0,1.0),("book",340,198,0.2),("note",230,198,0.2),
     ("table",580,0,0.9),("review",700,198,0.2)],
    clockat=(60,40,22,11,0))
S["rf08-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Note A",None,
    "<p>This book proves that oil-producing countries cannot sustain democratic politics.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Note B",None,
    "<p>The argument <b>at its strongest</b>, in two sentences. <b>What kind of claim</b> it is. "
    "<b>One published objection</b>, attributed. And partial agreement with a reason: the first three "
    "steps strong, the fourth too tidy.</p>",None),380)[0:3],
    800,300,"One sentence","Four moves")
S["rf08-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Not this",None,
    "<p>The book proves oil damages democracy. Everyone accepts this now. Our country is a case of "
    "it.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("This",None,
    "<p><b>The argument runs that</b> the physical form of coal gave workforces leverage over a flow, "
    "and that the shift to oil weakened that capacity. <b>It is an argument, not a measurement.</b> "
    "<b>Critics object that</b> it gives too little weight to ideas, movements and institutions.</p>",
    None),380)[0:3],
    800,300,"Three claims","One argument, fairly")
S["rf08-f13"]=lambda: f_realia(form("Plan your note",
    [("The argument at its strongest, in two sentences",BLANK),("What kind of claim it is",BLANK),
     ("One published objection",BLANK),("Your own view, with a hedge",BLANK),
     ("What the argument does not claim",BLANK),("What you would withdraw or correct",BLANK)],
    note="Six boxes. If a reader can tell your side from the first box, rewrite it."), 560)
S["rf08-f14"]=lambda: f_scene(1000,450,
    people=[("bah",60,176,{}),("nadia",130,172,{}),("omar",205,176,{}),
     ("tomas",290,172,{}),("nour",365,176,{}),("yusuf",440,172,{"seated":True}),
     ("samira",515,176,{"seated":True}),("haddad",590,170,{}),("yara",655,172,{}),
     ("ahmad",720,170,{}),("adeel",785,172,{}),("ida",845,170,{}),
     ("lars",905,172,{}),("wei",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("note",350,198,0.2),
     ("book",420,198,0.2),("worldmap",550,196,0.22),("table",650,0,1.0),
     ("flipchart",860,194,0.2),("review",930,198,0.2)],
    board=(40,22,206,112,"AT ITS STRONGEST",[("coal","chokepoints"),("oil","routes"),("step 4","circled")]),
    clockat=(262,34,22,12,0))
S["rf08-f15"]=lambda: f_chart([("the environment",6),("corruption",5),
    ("whether the country benefits",7),("working conditions",3),
    ("whether the industry has a future",3)], unit="operators")
S["rf08-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A summary sent to forty people",
    "<p><b>A book</b> open with four markers in it.</p>"
    "<p><b>A printed review</b> that disagrees with it.</p>"
    "<p><b>A circulated one-sentence summary</b> with no author on it.</p>"
    "<p><b>A four-step list</b> with the fourth step circled and a question mark beside it.</p>"
    "<p><b>A map</b> with pipeline and shipping routes.</p>"
    "<p><i>The book is serious. The objections to it are serious. The summary overstates the argument "
    "and draws a conclusion the book does not draw.</i></p>",
    "Seven o'clock. The person who circulated it meant well and will be embarrassed."), 620)

# ---------------- Unit 9 ----------------
S["rf09-f1"]=lambda: f_icons([("container","a fixed tank of a known size"),
    ("water","a tap drawing from it"),("calendar","a calendar of years"),
    ("bank","an interest rate on a statement"),("signpost","a price rising at that rate"),
    ("balance","a price rising more slowly"),("engine","a wellhead producing faster"),
    ("dashboard","a reservoir pressure gauge falling"),("tally","a recovery factor"),
    ("star","a new discovery"),("computer","a technology improvement"),
    ("note","a political risk notice"),("spreadsheet","a budget deficit"),
    ("savings","a sovereign fund deposit"),("baby","a generation born later"),
    ("note","the stock is not fixed")],4)
S["rf09-f2"]=lambda: f_scene(820,420,
    people=[("bah",120,176,{}),("omar",340,180,{"seated":True}),("nadia",420,180,{"seated":True}),
     ("haddad",500,176,{}),("nour",580,180,{"seated":True}),
     ("yusuf",660,180,{"seated":True}),("samira",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("container",780,192,0.2)],
    board=(24,22,216,112,"EIGHT ASSUMPTIONS",[("ticked","2"),("crossed","6"),("step one","survives")]),
    clockat=(258,34,22,9,0))
S["rf09-f3"]=lambda: f_icons([("container","a fixed stock of known size"),
    ("tally","a constant cost per barrel"),("data","a perfectly informed market"),
    ("noentry","no new discoveries"),("noentry","no technology change"),
    ("note","eight assumptions, and the model says so itself")],3)
S["rf09-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six accelerations or restraints",
    ["The field or country","What was accelerated","Why","What happened to ultimate recovery","Who decided"],
    blankrows(6,5),
    note="The fourth is hard and the fifth is harder. The box at the foot: the one where the reason "
    "was a budget."), 680)
S["rf09-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: how fast a finite thing should be used up",
    "<p style='font-size:12px;color:#6b6861'>Source: Harold Hotelling, \"The Economics of Exhaustible "
    "Resources\", <i>Journal of Political Economy</i>, 1931. In our own words.</p>"
    "<p><b>The reasoning, in four steps.</b> <b>One:</b> a unit left in the ground is an <b>asset</b>. "
    "<b>Two:</b> any asset you hold has to earn a <b>return</b>. <b>Three:</b> the return on a unit "
    "left in the ground is the <b>rise in its net price</b>. <b>Four:</b> therefore, if an owner is "
    "indifferent between now and later, the net price must be rising <b>at the rate of interest</b>. "
    "If it rises faster, hold; if more slowly, produce now.</p>"
    "<p><b>What the model assumes, and the paper says so:</b> a known fixed stock; no new discoveries; "
    "no technical change; constant extraction cost; perfect capital markets; a known demand curve; no "
    "uncertainty; no political risk.</p>"
    "<p><b>WHAT THE MODEL ABSTRACTS FROM.</b> <b>The stock is not fixed:</b> reserves are an economic "
    "category, growing with price and technology. <b>Prices have not behaved as the rule predicts</b> "
    "&mdash; the best-known empirical problem, and not in dispute. <b>Extraction is constrained by "
    "capacity</b>, and producing faster than a reservoir tolerates reduces <b>ultimate recovery</b>: "
    "you do not get the barrels later, you do not get them at all. <b>The model has no reservoir in "
    "it.</b> And it is <b>silent on who owns it</b> &mdash; a state, a generation not yet born, a "
    "budget deficit this year, a government with four years and a thirty-year asset.</p>"
    "<p><b>So why is it indispensable?</b> Because step one survives all of it. <b>A barrel produced "
    "this year is a barrel that cannot be produced in twenty years</b>, and almost every argument "
    "about production rates anywhere is an argument about that sentence without anybody saying it. The "
    "model is a <b>benchmark</b>, not a prediction: it tells you what question you are answering when "
    "you set a rate.</p>",
    "The rule is almost never satisfied. The question it poses cannot be avoided. Both are true, and "
    "holding both is what it means to use a model properly."), 580)
S["rf09-f6"]=lambda: f_realia(tbl("Word study",
    "Assumptions and models",
    ["The phrase","What it does","An example"],
    [["assuming","names an assumption briefly","Assuming a known and fixed stock."],
     ["on the assumption that","the same, formally","On the assumption that extraction cost does not change."],
     ["the model abstracts from","what is left out deliberately","The model abstracts from reservoir behavior entirely."],
     ["in the absence of","a condition that is not met","In the absence of new discoveries."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>the result is sensitive to</i> and <i>the model is not intended "
    "to</i>."), 700)
S["rf09-f7"]=lambda: f_realia(tbl("Two profiles, twenty-five years",
    "One steady, one accelerated",
    ["","Steady","Accelerated"],
    [["Years 1 to 5","moderate","<b>high</b>"],
     ["Years 6 to 15","moderate","falling"],
     ["Years 16 to 25","moderate","low"],
     ["<b>Produced in the first five years</b>","less","<b>more</b>"],
     ["<b>Produced in total</b>","<b>more</b>","less"],
     ["Why","within the reservoir's tolerance","drawdown reduces ultimate recovery"],
     ["Who prefers it","a thirty-year owner","<b>a budget with a gap this year</b>"],
     ["Who pays for it","&mdash;","<b>whoever is here in year twenty</b>"]],
    note="The barrels are not deferred. A proportion of them are <b>lost</b>."), 640)
S["rf09-f8"]=lambda: f_icons([("star","reserves that grew when the price rose"),
    ("tally","cost per barrel rising as a field declines"),("engine","a new discovery"),
    ("computer","a technology that lowered cost"),("councilbuilding","a political change"),
    ("magnifier","does the assumption hold, and does it matter?")],3)
S["rf09-f9"]=lambda: f_realia(tbl("Acceleration proposal",
    "Deir field",
    ["","Entry"],
    [["The request","raise the rate for <b>three years</b>"],
     ["Revenue figure given","<b>yes, for those three years</b>"],
     ["Ultimate recovery figure","<b>not on the front page</b>"],
     ["Reservoir engineer's note","attached: <b>a probable reduction in recovery</b>"],
     ["Reason stated","<b>a budget shortfall</b>"]],
    note="<b>Three years in, twenty years out, one figure given.</b>"), 600)
S["rf09-f10"]=lambda: f_scene(800,400,
    people=[("bah",180,180,{}),("nadia",300,176,{}),("haddad",620,180,{"seated":True})],
    props=[("desk",260,0,1.0),("logsheet",340,198,0.2),("data",230,196,0.22),
     ("table",580,0,0.9),("spreadsheet",700,198,0.2)],
    clockat=(60,40,22,11,0))
S["rf09-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Proposal A",None,
    "<p>Production optimization will enhance near-term fiscal outcomes. Recommended for approval.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Proposal B",None,
    "<p><b>Years 1 to 3:</b> the revenue figure. <b>Over 25 years:</b> a probable reduction in ultimate "
    "recovery, with its uncertainty. <b>The barrels are lost, not deferred.</b> One assumption stated. "
    "And who gains and who pays.</p>",None),380)[0:3],
    800,300,"One figure","Two figures, two periods")
S["rf09-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Not this",None,
    "<p>Accelerating production will increase revenue. Reserves are 400 million barrels. We can "
    "produce at any rate.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("This",None,
    "<p>Accelerating raises revenue <b>in years 1 to 3</b> and is likely to <b>reduce ultimate "
    "recovery</b>. Reserves are 400 million <b>at current prices and current technology</b>, and the "
    "figure moves with both. The reservoir has a <b>maximum efficient rate</b>; above it, the barrels "
    "are <b>lost</b>.</p>",None),380)[0:3],
    800,300,"Three claims","Three qualified claims")
S["rf09-f13"]=lambda: f_realia(form("Plan your proposal review",
    [("The request, and whether the need is real",BLANK),("The near-term figure with its period",BLANK),
     ("The long-term figure with its period and uncertainty",BLANK),
     ("One assumption stated",BLANK),("What you are not arguing",BLANK),
     ("Three requests",BLANK)],
    note="Six boxes. No figure without a period attached."), 560)
S["rf09-f14"]=lambda: f_scene(1000,450,
    people=[("bah",60,176,{}),("nadia",130,172,{}),("haddad",205,176,{}),
     ("omar",290,172,{}),("nour",365,176,{}),("yusuf",440,172,{"seated":True}),
     ("samira",515,176,{"seated":True}),("yara",590,170,{}),("ahmad",655,172,{}),
     ("adeel",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("wei",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("data",350,196,0.22),
     ("dashboard",420,196,0.2),("logsheet",550,198,0.2),("table",650,0,1.0),
     ("savings",860,198,0.2),("baby",930,196,0.18)],
    board=(40,22,206,112,"NOT LATER, NOT AT ALL",[("4 steps","the rule"),("6 of 8","crossed"),("lost","not deferred")]),
    clockat=(262,34,22,12,0))
S["rf09-f15"]=lambda: f_chart([("yes, and I know why",2),("yes, but not why",4),
    ("no",6),("I assumed it was technical",8),("we have no field",1)], unit="operators")
S["rf09-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A real shortfall and a reservoir",
    "<p><b>An acceleration proposal</b> with one revenue figure on its front page.</p>"
    "<p><b>An attachment</b> giving a probable reduction in ultimate recovery.</p>"
    "<p><b>Two production profiles</b> on one sheet, with cumulative totals.</p>"
    "<p><b>A reservoir pressure chart.</b></p>"
    "<p><b>A budget page</b> showing a real shortfall this year.</p>"
    "<p><i>The hospital it would fund is real. The people asking are not doing anything improper. A "
    "proportion of the barrels will not be produced later; they will not be produced at all.</i></p>",
    "Seven o'clock. The gain falls in this budget period and the cost falls on whoever is here in "
    "twenty years."), 620)
