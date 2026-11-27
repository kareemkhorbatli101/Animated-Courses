# -*- coding: utf-8 -*-
"""Flowline Book 6 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Unit 10 ----------------
S["rf10-f1"]=lambda: f_icons([("scaffolding","a disused platform"),
    ("crane","a jacket being cut at the seabed"),("ship","a topside on a barge"),
    ("wall","a concrete gravity base"),("container","a well plugged with cement"),
    ("noentry","a wellhead cut below ground"),("pipe","a pipeline flushed and capped"),
    ("walkroute","a right of way being restored"),("tree","a site cleared back to soil"),
    ("spoon","a soil sample from a restored site"),("spreadsheet","an abandonment cost estimate"),
    ("padlock","a funding security letter"),("invoice","a cost recovery line"),
    ("archive","a register of derogations"),("petition","a public consultation notice"),
    ("note","certain cost, invisible benefit")],4)
S["rf10-f2"]=lambda: f_scene(820,420,
    people=[("nadia",120,176,{}),("omar",340,180,{"seated":True}),("bah",420,180,{"seated":True}),
     ("haddad",500,176,{}),("nour",580,180,{"seated":True}),
     ("yusuf",660,180,{"seated":True}),("adeel",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("spreadsheet",780,198,0.2)],
    board=(24,22,216,112,"INVENTORY / CLAUSE",[("140 wells","60 km"),("clause 24.2","2 paragraphs"),("between","nothing")]),
    clockat=(258,34,22,9,30))
S["rf10-f3"]=lambda: f_icons([("container","wells plugged and cut below ground"),
    ("washup","facilities cleaned and made safe"),("crane","structures and lines removed"),
    ("spoon","the site restored and sampled"),("walk","a monitoring visit years later"),
    ("note","four stages and a fifth that never ends")],3)
S["rf10-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six decommissioning obligations",
    ["The asset","The obligation","Estimate?","Fund?","Who bears it after cost recovery"],
    blankrows(6,5),
    note="The last column needs Unit 1. The box at the foot: the ones with no estimate."), 680)
S["rf10-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the steel at the end",
    "<p style='font-size:12px;color:#6b6861'>Source: OSPAR Decision 98/3 on the Disposal of Disused "
    "Offshore Installations, OSPAR Commission, 1998. In our own words. <b>It applies to the "
    "North-East Atlantic maritime area and does not apply here.</b></p>"
    "<p><b>What it does.</b> For the maritime area it covers, the <b>dumping</b> of disused offshore "
    "installations, and the <b>leaving of them wholly or partly in place</b>, <b>is prohibited</b>. "
    "The structure of the rule is the lesson: it starts from a <b>prohibition</b> and then allows "
    "narrow procedural exceptions, rather than judging each case on its merits.</p>"
    "<p><b>The derogations.</b> A Party may, <b>by way of derogation</b>, permit something to remain "
    "&mdash; for specified categories only, and after an <b>assessment</b>, <b>consultation with the "
    "other Parties</b>, and the issue of a <b>permit</b> stating conditions. Derogations are "
    "<b>recorded</b>. Leaving something in place is therefore possible, visible, documented and "
    "comparatively rare.</p>"
    "<p><b>Why it was adopted in that form.</b> It followed a period of substantial public controversy "
    "in the mid-1990s about a proposed deep-water disposal. The drafting consequence is the point: the "
    "Commission did not write a better assessment method. It <b>reversed the default</b> &mdash; a "
    "choice available to anybody writing an obligation about anything.</p>"
    "<p><b>The four stages of the work</b>, offshore or onshore: <b>plug the wells</b>; <b>clean and "
    "make safe</b>; <b>remove</b>; <b>restore and verify</b>. And then <b>monitor</b>, because a "
    "plugged well is a set of barriers and barriers have a service life.</p>"
    "<p><b>WHAT IT DOES NOT COVER.</b> It is <b>regional</b> and does not apply here. <b>It does not "
    "settle the environmental comparison</b>: there are circumstances in which a structure left in "
    "place provides habitat and complete removal does damage, and the Decision takes a <b>presumption "
    "against</b> as a matter of policy. <b>And it says nothing about who pays.</b></p>"
    "<p><b>So here is the question it does not ask.</b> Decommissioning costs are, under very many "
    "agreements, <b>recoverable</b>. They come out of production <b>before profit oil is divided</b>, "
    "so the fiscal system decides who bears them: <b>if the state's share of profits is high, the "
    "state bears most of the bill</b>, even though every invoice is paid by a company. And the "
    "obligation falls due <b>at the end of a field's life, when there is little production left to "
    "recover it from</b>.</p>",
    "A cost recoverable in principle and unrecoverable in practice lands somewhere."), 580)
S["rf10-f6"]=lambda: f_realia(tbl("Word study",
    "Obligation and derogation",
    ["The phrase","What it does","An example"],
    [["is prohibited","the rule, flatly","The leaving of a disused installation in place is prohibited."],
     ["shall not be","the same, in a document's voice","Installations shall not be dumped at sea."],
     ["by way of derogation","opens the narrow exception","By way of derogation, a permit may be issued for certain categories."],
     ["may be permitted where","states the condition","It may be permitted where exceptional circumstances arise."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>subject to an assessment and consultation</i> and <i>there is a "
    "presumption against</i>."), 720)
S["rf10-f7"]=lambda: f_realia(tbl("First abandonment estimate",
    "Deir field &middot; all figures plus or minus about half",
    ["Item","Basis","Range"],
    [["140 wells, plug and abandon","a unit rate per well, from published benchmarks","wide"],
     ["60 km of flowline","two cases, both priced","wide"],
     ["Two stations, clean and remove","tonnage and a unit rate","wide"],
     ["Site restoration and verification","area and a unit rate","wide"],
     ["<b>Total</b>","<b>the sum of four wide numbers</b>","<b>&plusmn; about half</b>"],
     ["Recoverable under the contract","<b>yes, as a cost</b>","&mdash;"],
     ["<b>Who bears it after the fiscal split</b>","<b>mostly the state, at our take</b>","&mdash;"],
     ["<b>Timing problem</b>","<b>falls due when production is nearly over</b>","&mdash;"]],
    note="<b>A bad estimate beats no estimate.</b>"), 640)
S["rf10-f8"]=lambda: f_icons([("container","cement barriers set in a well"),
    ("pipe","a line being flushed"),("crane","a structure cut and lifted"),
    ("spoon","soil sampled on a cleared site"),("walk","a monitoring visit twenty years later"),
    ("magnifier","which stage, and when does it end?")],3)
S["rf10-f9"]=lambda: f_realia(tbl("Liability summary",
    "Deir field",
    ["","Entry"],
    [["Inventory","140 wells, 60 km of flowline, two stations, ~400 t of steel"],
     ["First estimate","attached, <b>&plusmn; about 50 percent</b>"],
     ["Cost recovery","recoverable under clause 9"],
     ["Who bears it after the split","<b>mostly the state, at our take</b>"],
     ["Fund","<b>none exists</b>"],
     ["Residual liability","<b>not addressed in the agreement</b>"],
     ["Monitoring beyond abandonment","<b>no provision</b>"]],
    note="<b>Certain, large, unfunded, and not in anybody's objectives.</b>"), 620)
S["rf10-f10"]=lambda: f_scene(800,400,
    people=[("nadia",180,180,{}),("bah",300,176,{}),("haddad",620,180,{"seated":True})],
    props=[("desk",260,0,1.0),("spreadsheet",340,198,0.2),("book",230,198,0.2),
     ("table",580,0,0.9),("invoice",700,198,0.2)],
    clockat=(60,40,22,11,0))
S["rf10-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Statement A",None,
    "<p>Decommissioning liabilities are being managed in accordance with the agreement and an "
    "appropriate provision will be established at the relevant time.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Statement B",None,
    "<p>The <b>inventory</b>. A <b>first estimate</b> with its basis and range. The <b>cost recovery "
    "position</b>. The <b>fiscal split</b>, and who bears it. And <b>the timing problem</b>, which is "
    "more serious than the amount.</p>",None),380)[0:3],
    800,300,"In due course","An inventory and a range")
S["rf10-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Not this",None,
    "<p>Abandonment will be addressed in due course. The cost is uncertain so no figure is given. The "
    "company will meet its obligations.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("This",None,
    "<p>140 wells, 60 km of flowline and two stations. <b>No estimate and no fund exist</b>; a first "
    "estimate is attached at &plusmn;50 percent, <b>given anyway, with its basis</b>. The cost is "
    "<b>recoverable under clause 9</b>; after the fiscal split <b>most of it is borne by the "
    "state</b>; every invoice is still paid by us.</p>",None),380)[0:3],
    800,300,"In due course","Three sentences of arithmetic")
S["rf10-f13"]=lambda: f_realia(form("Plan your liability note",
    [("The inventory",BLANK),("The first estimate, with basis and range",BLANK),
     ("The recovery arithmetic in three sentences",BLANK),("The timing problem",BLANK),
     ("What the agreement does not contain",BLANK),("Three requests",BLANK)],
    note="Six boxes. The third must reach a named bearer."), 560)
S["rf10-f14"]=lambda: f_scene(1000,460,
    people=[("ahmad",70,176,{}),("wei",140,172,{}),("yara",205,176,{}),
     ("nadia",330,172,{}),("bah",400,176,{}),("nour",470,172,{"seated":True}),
     ("yusuf",540,176,{"seated":True}),("haddad",610,170,{}),("omar",675,172,{}),
     ("samira",740,170,{}),("adeel",800,172,{}),("ida",855,170,{}),
     ("tomas",910,172,{}),("lars",960,174,{})],
    props=[("noentry",40,192,0.2),("spoon",160,198,0.2),("desk",320,0,1.05),
     ("board",400,88,0.6),("spreadsheet",560,198,0.2),("table",700,0,1.0),
     ("padlock",900,198,0.2),("flipchart",955,194,0.2)],
    board=(282,22,200,108,"THE ONLY CERTAIN COST",[("140 wells","certain"),("estimate","none"),("fund","none")]),
    clockat=(500,34,22,12,0))
S["rf10-f15"]=lambda: f_chart([("yes, and it is funded",1),("yes, and it is not funded",3),
    ("no",6),("I do not know",8),("we have no obligation",2)], unit="operators")
S["rf10-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Twenty years left, and no number",
    "<p><b>A first abandonment estimate</b> with a plus or minus fifty percent range across it.</p>"
    "<p><b>A two-paragraph abandonment clause.</b></p>"
    "<p><b>A fiscal waterfall</b> with the cost recovery line circled.</p>"
    "<p><b>A photograph of a cut wellhead</b> below ground level.</p>"
    "<p><b>A note</b> reading <i>sixty years</i>, with a question mark.</p>"
    "<p><i>Nobody disputes that the wells will need plugging. The cost is recoverable, so most of it "
    "is borne by the state &mdash; and it falls due when there is almost nothing left to recover it "
    "from.</i></p>",
    "Seven o'clock. Nobody has ever been promoted for publishing a decommissioning estimate."), 620)

# ---------------- Unit 11 ----------------
S["rf11-f1"]=lambda: f_icons([("book","a national development strategy"),
    ("petition","a public consultation"),("map","a geological survey"),
    ("note","a licensing round notice"),("spreadsheet","a tax schedule"),
    ("review","an environmental and social assessment"),
    ("councilbuilding","a state-owned enterprise"),("storm","a revenue volatility chart"),
    ("savings","a savings fund statement"),("bridge","a public investment project"),
    ("crane","a local supplier workshop"),("bank","an international company"),
    ("archive","international standards on a shelf"),("security","a home-government regulator"),
    ("chain","a chain of twelve links"),("note","in order, and nobody starts at the beginning")],4)
S["rf11-f2"]=lambda: f_scene(820,420,
    people=[("nadia",120,176,{}),("omar",340,180,{"seated":True}),("bah",420,180,{"seated":True}),
     ("haddad",500,176,{}),("nour",580,180,{"seated":True}),
     ("yusuf",660,180,{"seated":True}),("samira",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("chain",780,196,0.2)],
    board=(24,22,216,112,"TWELVE LINKS",[("green","4"),("amber","3"),("blank","5")]),
    clockat=(258,34,22,10,0))
S["rf11-f3"]=lambda: f_icons([("note","what the resource is for"),
    ("handshake","how rights are awarded"),("spreadsheet","how it is taxed"),
    ("savings","how revenue is managed"),("bridge","how it is spent"),
    ("note","five decisions, and each one limits the next")],3)
S["rf11-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six precepts",
    ["The precept","What it recommends","Who would own it here","Does that body exist?","Could anything start this year?"],
    blankrows(6,5),
    note="The fourth column is the one that matters. The box at the foot: the ones with no owner."), 680)
S["rf11-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: twelve recommendations, in order",
    "<p style='font-size:12px;color:#6b6861'>Source: the <i>Natural Resource Charter</i>, second "
    "edition 2014, Natural Resource Governance Institute. In our own words.</p>"
    "<p><b>What it is.</b> Twelve <b>precepts</b> covering the whole sequence of decisions a country "
    "faces when it has a resource. Not a standard, not a treaty, not a ranking.</p>"
    "<p><b>The organizing idea is the chain.</b> The decisions are <b>sequential</b>, and each one "
    "<b>constrains</b> the ones after it. A badly allocated license cannot be fixed by good taxation. "
    "A good fiscal system cannot survive volatility with no rule. A well-managed fund is wasted by poor "
    "spending. <b>Most failures attributed to corruption or bad luck are traceable to an earlier "
    "decision nobody revisits.</b></p>"
    "<p><b>The twelve, grouped.</b> <b>The foundation:</b> what the resource is <b>for</b>, and "
    "<b>accountability</b> with an informed public. <b>Getting it out:</b> exploration; how <b>rights</b> "
    "are allocated; <b>taxation</b> robust across prices; <b>local effects</b>; and <b>state-owned "
    "enterprises</b>. <b>Managing the money:</b> <b>volatility</b>, with a published rule rather than a "
    "discretion; and <b>spending</b>, constrained by <b>absorptive capacity</b>. <b>The wider "
    "setting:</b> the <b>private sector</b>; <b>international companies</b>; <b>international "
    "standards</b>; and <b>home governments and the international community</b>.</p>"
    "<p><b>The most useful idea is not a precept.</b> It is to read the chain <b>backwards</b>: start "
    "from what is going wrong and walk up to the decision that made it inevitable. That is available "
    "to anybody, in any country, this afternoon.</p>"
    "<p><b>WHAT A FRAMEWORK CANNOT DO.</b> It is not law and nobody is assessed against it. <b>It "
    "cannot sequence itself for you</b>: twelve recommendations, and a country has capacity for a few. "
    "It can tell you that a savings rule without a credible oversight body will be suspended in the "
    "first bad year; it cannot tell you whether to build the body or write the rule first. It is "
    "written from a <b>stated position</b>. <b>And it assumes you can start at the beginning, which "
    "almost nobody can</b> &mdash; for a country decades into production it is not a plan but a <b>map "
    "of where the constraints came from</b>.</p>",
    "Color in your own chain: what could start this year, what has no owner, and what is political."), 580)
S["rf11-f6"]=lambda: f_realia(tbl("Word study",
    "Recommending and sequencing",
    ["The phrase","What it does","An example"],
    [["should","a recommendation, not an obligation","Rights should be allocated competitively, with disclosed criteria."],
     ["it is recommended that","the same, more formal","It is recommended that a savings rule be published rather than left to discretion."],
     ["before X can be done, Y must","names a dependency","Before a savings rule can hold, an oversight body must exist."],
     ["the precondition for","the dependency as a noun","The precondition for credible spending is absorptive capacity."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>in sequence</i> and <i>where capacity is limited, begin with</i>."), 720)
S["rf11-f7"]=lambda: f_realia(tbl("The chain, colored",
    "Twelve precepts, three colors",
    ["Precept","Owner here","Exists?","Start this year?"],
    [["1 &middot; what it is for","the government, politically","&mdash;","<b>no: political</b>"],
     ["2 &middot; accountability","a ministry and an audit office","partly","<b>yes, in part</b>"],
     ["3 &middot; exploration and allocation","the ministry","yes","future rounds only"],
     ["4 &middot; taxation","the ministry and finance","yes","<b>no: already signed</b>"],
     ["5 &middot; local effects","the operator and a regulator","<b>the regulator does not</b>","<b>yes: our half</b>"],
     ["6 &middot; state enterprise mandate","the government","yes","no: political"],
     ["7 &middot; volatility and saving","finance","<b>a rule exists; oversight does not</b>","<b>yes: publish the formula</b>"],
     ["8 &middot; public investment","finance","yes","no: capacity"],
     ["9 &middot; private sector","several","partly","<b>yes: procurement and terms</b>"],
     ["10 &middot; international companies","the operators","yes","<b>yes: us</b>"],
     ["11 &middot; international standards","the government","yes","partly"],
     ["12 &middot; the international community","others","&mdash;","no"]],
    note="<b>Four could start this year, and one of the four is entirely ours.</b>"), 660)
S["rf11-f8"]=lambda: f_icons([("spreadsheet","a budget that cannot be sustained"),
    ("walkroute","a region with nothing to show"),("balance","a figure nobody can reproduce"),
    ("crane","a supplier that cannot bid"),("padlock","an obligation with no fund"),
    ("magnifier","walk up the chain: which decision made this inevitable?")],3)
S["rf11-f9"]=lambda: f_realia(tbl("Comment on a draft national strategy",
    "Mapped against twelve precepts",
    ["","Count"],
    [["Could be started this year","<b>four</b>"],
     ["Need a body that does not exist","<b>three</b>"],
     ["Political choices","<b>five</b>"],
     ["Precepts the operator could act on alone","<b>two actions, under precept 10</b>"],
     ["Precept with no owner at all","<b>5, local effects: no regulator</b>"]],
    note="<b>Four now, and one of them is ours.</b>"), 600)
S["rf11-f10"]=lambda: f_scene(800,400,
    people=[("nadia",180,180,{}),("bah",300,176,{}),("haddad",620,180,{"seated":True})],
    props=[("desk",260,0,1.0),("chain",340,196,0.2),("book",230,198,0.2),
     ("table",580,0,0.9),("note",700,198,0.2)],
    clockat=(60,40,22,11,0))
S["rf11-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Comment A",None,
    "<p>We welcome the draft strategy, which aligns with international good practice in resource "
    "governance.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Comment B",None,
    "<p>The <b>colored chain</b> with three counts. The precepts we <b>decline</b> to comment on. The "
    "ones that are <b>arithmetic</b>. The one with <b>no owner</b>. And the precept <b>we own</b>, with "
    "three commitments that need nobody's permission.</p>",None),380)[0:3],
    800,300,"We welcome it","Four now, three without an owner")
S["rf11-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Not this",None,
    "<p>We support the twelve precepts. A savings rule should be established. Local content is being "
    "improved.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("This",None,
    "<p><b>Four of twelve could start this year; three need a body that does not exist; five are "
    "political and we have no view we are entitled to express.</b> A savings rule exists with <b>no "
    "published formula and no oversight body</b>, and in the last downturn it was suspended. <b>Precept "
    "nine is within our control and we have not acted on it.</b></p>",None),380)[0:3],
    800,300,"Three endorsements","Three counts and an admission")
S["rf11-f13"]=lambda: f_realia(form("Plan your comment",
    [("The colored chain, with three counts",BLANK),("The precepts you decline to comment on",BLANK),
     ("The ones that are arithmetic",BLANK),("The one with no owner",BLANK),
     ("The precept you own",BLANK),("What you commit to",BLANK)],
    note="Six boxes. At least two commitments must need nobody's permission."), 560)
S["rf11-f14"]=lambda: f_scene(1000,450,
    people=[("nadia",60,176,{}),("bah",130,172,{}),("haddad",205,176,{}),
     ("omar",290,172,{}),("nour",365,176,{}),("yusuf",440,172,{"seated":True}),
     ("samira",515,176,{"seated":True}),("yara",590,170,{}),("ahmad",655,172,{}),
     ("adeel",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("wei",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("chain",350,196,0.2),
     ("book",420,198,0.2),("savings",550,198,0.2),("table",650,0,1.0),
     ("invoice",860,198,0.2),("note",930,198,0.2)],
    board=(40,22,206,112,"FOUR NOW, ONE IS OURS",[("green","4"),("no owner","3"),("political","5")]),
    clockat=(262,34,22,12,0))
S["rf11-f15"]=lambda: f_chart([("how rights are awarded",4),("taxation",5),
    ("revenue management",7),("spending",6),("private sector development",3)], unit="operators")
S["rf11-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Fifty years in, and not at the beginning",
    "<p><b>A colored chain</b> of twelve links: four green, three amber, five blank.</p>"
    "<p><b>A draft national strategy</b>, competently written, addressing eleven of the twelve.</p>"
    "<p><b>A savings rule</b> with no formula on it.</p>"
    "<p><b>An absorptive capacity note</b> with a question mark.</p>"
    "<p><b>A procurement page</b> reading ninety days.</p>"
    "<p><i>One of the four green links needs nobody's permission at all &mdash; the conduct of the "
    "operating companies themselves &mdash; and nothing has happened on it in nine years.</i></p>",
    "Seven o'clock. The link that needs no permission is the one nothing has happened on."), 620)

# ---------------- Unit 12 ----------------
S["rf12-f1"]=lambda: f_icons([("container","a barrel with four claims"),
    ("spreadsheet","a waterfall of deductions"),("book","a bound agreement"),
    ("data","three interests and a pass mark"),("handsup","a hand declined at a barrier"),
    ("crane","a workshop with one machine"),("balance","two figures side by side"),
    ("logsheet","a scatter plot with a line"),("bottleneck","a chokepoint and a sea route"),
    ("water","a fixed tank with a tap"),("noentry","a cut wellhead"),
    ("chain","a chain of twelve links"),("signpost","a decision chain in five boxes"),
    ("note","a short list of three things"),("quotemark","a hedge in a sentence"),
    ("note","probably, and here is why")],4)
S["rf12-f2"]=lambda: f_scene(920,430,
    people=[("nadia",90,176,{}),("bah",160,176,{}),("omar",330,180,{"seated":True}),
     ("haddad",405,180,{"seated":True}),("nour",480,180,{"seated":True}),
     ("yusuf",555,180,{"seated":True}),("samira",630,180,{"seated":True}),
     ("yara",700,176,{}),("ahmad",765,180,{"seated":True}),
     ("adeel",830,180,{"seated":True}),("tomas",884,180,{"seated":True})],
    props=[("desk",310,0,1.05),("board",40,88,0.66),("book",884,198,0.2)],
    board=(24,22,216,112,"CONTESTED / ARITHMETIC",[("five","argue"),("six","work"),("Monday","the rest")]),
    clockat=(272,34,22,4,0))
S["rf12-f3"]=lambda: f_icons([("quotemark","a claim at its strongest"),
    ("handsup","the objection to it"),("handshake","a concession granted"),
    ("book","evidence attributed to its source"),("note","a provisional conclusion"),
    ("note","five moves, in that order, every time")],3)
S["rf12-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six contested questions",
    ["The question","The strongest version of one side","The strongest version of the other","What is not disputed","What you would do first"],
    blankrows(6,5),
    note="The fourth column is where the work is. The box at the foot: the one where the fourth column "
    "was longest."), 700)
S["rf12-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the last document in the course",
    "<p style='font-size:12px;color:#6b6861'>Source: <i>Escaping the Resource Curse</i>, edited by "
    "Macartan Humphreys, Jeffrey D. Sachs and Joseph E. Stiglitz, Columbia University Press, 2007. In "
    "our own words.</p>"
    "<p><b>What it is.</b> An edited volume: chapters by different authors on how resource wealth is "
    "handled, and on what can be done differently. Its title is a deliberate reply to the literature "
    "in Unit 7.</p>"
    "<p><b>The central claim, and it is a claim about agency.</b> The outcomes associated with resource "
    "wealth are <b>not destiny</b>. They result from <b>decisions</b>, the decisions can be identified, "
    "and most are made in a <b>sequence</b> in which each one constrains the next.</p>"
    "<p><b>The decisions it concentrates on.</b> <b>How rights are awarded</b> &mdash; several chapters "
    "argue for <b>competition</b>, because a negotiated award depends on information and expertise the "
    "state usually does not have. <b>How the fiscal system is designed</b>, with attention to "
    "<b>robustness</b> across prices rather than optimality at one price. <b>How revenue is "
    "managed</b>, with the repeated observation that <b>a rule without an institution does not survive "
    "a downturn</b>. <b>How it is spent</b>, where <b>spending capacity is often the binding "
    "constraint rather than money</b>. And <b>who can see any of it</b>.</p>"
    "<p><b>WHAT A BOOK OF ESSAYS CANNOT DO.</b> It is <b>not a single argument</b>; its chapters do not "
    "fully agree. It <b>does not settle</b> the empirical question &mdash; though it adds that this may "
    "matter less than it seems, since if outcomes depend on decisions, the right response is to improve "
    "the decisions whichever way the correlation falls. Its authors have a <b>stated position</b>. "
    "<b>And it cannot make the sequence available to you</b>: for a reader thirty years in, the honest "
    "advice is smaller &mdash; fix what is still open, document what is not, and do not pretend the "
    "earlier decisions can be unmade.</p>"
    "<p><b>So the question this course ends with is not whether this industry is good or bad for a "
    "country.</b> It is: <b>of the decisions still open to you, in your job, this year, which ones "
    "affect whether the money and the barrels and the land leave anything behind?</b></p>",
    "None of it escapes anything on its own. All of it is available on Monday."), 580)
S["rf12-f6"]=lambda: f_realia(tbl("Word study",
    "Conceding and qualifying",
    ["The structure","What it does","An example"],
    [["I accept that","concedes a real point","I accept that the measurement objection is serious."],
     ["the strongest objection is","names the best counter-argument","The strongest objection is that the measure may be the outcome."],
     ["on the evidence I have seen","limits your claim to your evidence","On the evidence I have seen, probably yes."],
     ["provisionally","marks a position as open to revision","Provisionally, the institutions account is closer."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>I would change my mind if</i> and <i>what I would do first is</i>."), 720)
S["rf12-f7"]=lambda: f_realia(tbl("Two columns",
    "Five decided over decades, six decided this week",
    ["Contested","Arithmetic"],
    [["whether resource wealth slows growth","a percentage needs its denominator"],
     ["whether energy systems shape political forms","an obligation needs a date and an owner"],
     ["whether a depletion path can be calculated","a payment demand needs a contemporaneous record"],
     ["whether transparency improves outcomes","a local content figure needs a definition and a basis"],
     ["what the resource is ultimately for","a discrepancy needs both dates"],
     ["&mdash;","<b>decommissioning is certain and needs an estimate</b>"],
     ["<i>decided over decades, by others</i>","<i>decided this week, by you</i>"]],
    note="Every item on the right is available without settling anything on the left."), 660)
S["rf12-f8"]=lambda: f_icons([("balance","a percentage with no denominator"),
    ("worldmap","whether a country benefits"),("calendar","an obligation with no date"),
    ("councilbuilding","what the resource is for"),("spreadsheet","an estimate that does not exist"),
    ("magnifier","contested or arithmetic?")],3)
S["rf12-f9"]=lambda: f_realia(tbl("Six things I can do",
    "With the unit each came from, and who else has to agree",
    ["What","From","Who else has to agree"],
    [["Write the denominator beside every percentage","Unit 1","<b>nobody</b>"],
     ["Keep an obligation register with dates and owners","Unit 2","<b>nobody</b>"],
     ["Write a contemporaneous record of any demand","Unit 4","<b>nobody</b>"],
     ["State the definition and basis of every local content figure","Unit 5","<b>nobody</b>"],
     ["Move small-supplier payment terms to thirty days","Unit 5","the finance function"],
     ["Publish a first decommissioning estimate with its range","Unit 10","a manager"]],
    note="<b>Four of six need nobody's permission.</b>"), 640)
S["rf12-f10"]=lambda: f_scene(800,400,
    people=[("nadia",180,180,{}),("bah",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("desk",260,0,1.0),("note",340,198,0.2),("table",580,0,0.9),
     ("book",700,198,0.2),("spreadsheet",230,198,0.2)],
    clockat=(60,40,22,4,30))
S["rf12-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Answer A",None,
    "<p>This industry has been a net benefit to the country. The resource curse is a theory with little "
    "relevance here.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Answer B",None,
    "<p>The <b>narrower question</b>, named. The <b>strongest argument against</b>. What the writer "
    "<b>accepts</b>. A <b>provisional</b> answer with a hedge. <b>What would change their mind</b>, "
    "specifically. And <b>three things that need nobody's permission</b>.</p>",None),380)[0:3],
    800,300,"A verdict","Five moves and three actions")
S["rf12-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Not this",None,
    "<p>Oil has been a disaster for this region. Our industry benefits the country. I am just an "
    "engineer. Everything depends on governance.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("This",None,
    "<p>The evidence is <b>contested</b> and the measurement objection is serious; what is not "
    "contested is that our revenue swung threefold twice in a decade. <b>Probably better off, on the "
    "evidence I have seen</b>, and I would change my mind if the value retained figure stayed in single "
    "digits. <b>I have no view I am entitled to express on what the resource is for. I have complete "
    "standing on a figure with no denominator.</b></p>",None),380)[0:3],
    800,300,"Four claims","One careful position")
S["rf12-f13"]=lambda: f_realia(form("Plan your answer",
    [("The question you are actually answering",BLANK),
     ("The strongest argument against your view",BLANK),("What you accept",BLANK),
     ("Your provisional answer, with a hedge",BLANK),("What would change your mind",BLANK),
     ("Three things you would do first",BLANK)],
    note="Six boxes. This one is not invented."), 560)
S["rf12-f14"]=lambda: f_scene(1000,460,
    people=[("nadia",60,176,{}),("bah",130,172,{}),("omar",205,176,{}),
     ("haddad",290,172,{}),("nour",365,176,{}),("yusuf",440,172,{"seated":True}),
     ("samira",515,176,{"seated":True}),("yara",590,170,{}),("ahmad",655,172,{}),
     ("adeel",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("wei",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("note",350,198,0.2),
     ("book",420,198,0.2),("book",455,198,0.2),("table",650,0,1.0),
     ("spreadsheet",860,198,0.2),("handshake",930,198,0.2)],
    board=(40,22,206,112,"CONTESTED / ARITHMETIC",[("five","left"),("six","right"),("Monday","the rest")]),
    clockat=(262,34,22,5,0))
S["rf12-f15"]=lambda: f_chart([("a denominator beside every percentage",7),
    ("an obligation register",4),("a contemporaneous record",5),
    ("a published estimate",3),("stating what would change my mind",5)], unit="operators")
S["rf12-f16"]=lambda: f_realia(doc("On a desk at the end of the series",
    "Nothing fixed, and fourteen people who know",
    "<p><b>Six books</b>, stacked, the sixth open at its contents page.</p>"
    "<p><b>A two-column review table.</b></p>"
    "<p><b>A six-item list</b> with four rows reading <i>nobody</i>.</p>"
    "<p><b>A decommissioning estimate</b> with a wide range.</p>"
    "<p><b>A percentage</b> with its denominator written beside it in pen.</p>"
    "<p><b>A page headed</b> <i>what would change my mind</i>, with three lines on it.</p>"
    "<p><i>The take figure still cannot be reproduced. Three obligations still have no date. The "
    "liability is still unfunded. Nobody has been promoted for any of it and nobody will be.</i></p>",
    "Seven o'clock, and the tea is cold. There is no Book 7. There is a Monday."), 620)
