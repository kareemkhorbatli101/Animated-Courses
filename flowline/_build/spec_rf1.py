# -*- coding: utf-8 -*-
"""Flowline Book 6 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Starting Point ----------------
S["rf00-f1"]=lambda: f_realia(tbl("One barrel, four claims",
    "None of the four is a natural fact",
    ["Who has a claim","On what basis"],
    [["Whoever spent the money","costs have to come back before anybody has a profit"],
     ["The state","the resource belongs to the country, in almost every system"],
     ["The companies","they took the risk of drilling something that might have been empty"],
     ["Everybody else","roads, schools, a currency, a generation that will not have this barrel"]],
    note="The four shares are negotiated, not natural. Unit 1 is the arithmetic."), 580)
S["rf00-f2"]=lambda: f_realia(doc("The sentence this book exists to teach",
    None,
    "<p style='font-size:19px;text-align:center;line-height:1.5'><b>The terms are not natural facts.<br>"
    "They were negotiated.</b></p>"
    "<p style='text-align:center'><b>by whom &middot; when &middot; under what conditions &middot; "
    "with what information</b></p>"
    "<p>A royalty rate, a cost recovery ceiling, a profit share, a local content target, a "
    "decommissioning obligation. All of them were argued over by people with opposing interests who "
    "were all acting reasonably, and almost all of them were settled <b>at a particular moment</b>.</p>",
    "Terms agreed in a year of low prices do not look like terms agreed in a year of high ones."), 580)
S["rf00-f3"]=lambda: f_realia(tbl("Four things that take decades",
    "And two that do not",
    ["What","Roughly how long"],
    [["Finding it and proving it","years, sometimes a decade"],
     ["Building it","three to six years"],
     ["Producing it at plateau","five to fifteen years"],
     ["Declining, and then taking it away","decades, and the last part is all cost"],
     ["<b>A career</b>","<b>thirty-five years</b>"],
     ["<b>A political term</b>","<b>four or five</b>"]],
    note="The decisions that matter most are taken on the fourth line and paid for on the fifth."), 580)
S["rf00-f4"]=lambda: f_realia(tbl("What is contested, and said so",
    "Four claims, and what is disputed about each",
    ["The claim","What is disputed"],
    [["Resource wealth tends to slow growth","the measure, the period, the countries, and whether institutions change the answer"],
     ["Oil shapes the political system of the country that has it","it is an argument from history, not a measured finding"],
     ["A finite resource should be depleted along a price path","the assumptions are almost never met in practice"],
     ["Publishing payments improves what happens to them","disclosure is not the same as accountability"]],
    note="Two of the twelve units are the argument, printed with its objections."), 600)

# ---------------- Unit 1 ----------------
S["rf01-f1"]=lambda: f_icons([("container","a barrel at a wellhead"),
    ("tally","a royalty off the top"),("invoice","a stack of cost invoices"),
    ("barrier","a ceiling across the stack"),("recycle","a carry-forward into next year"),
    ("jug","a pool of profit oil"),("signpost","a split two ways"),
    ("stairwell","a sliding scale in three steps"),("form","a tax return"),
    ("certificate","a signature bonus document"),("map","a ring fence round one field"),
    ("calendar","a depreciation schedule"),("balance","a government take percentage"),
    ("crate","an entitlement barrel"),("table","a comparison of ten countries"),
    ("note","sixty-two per cent of what")],4)
S["rf01-f2"]=lambda: f_scene(820,420,
    people=[("nadia",120,176,{}),("omar",340,180,{"seated":True}),("bah",420,180,{"seated":True}),
     ("haddad",500,176,{}),("yusuf",580,180,{"seated":True}),
     ("samira",660,180,{"seated":True}),("nour",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("calculator",780,198,0.2)],
    board=(24,22,216,112,"100 BARRELS",[("royalty","10"),("cost oil","50"),("take","77.6")]),
    clockat=(258,34,22,9,0))
S["rf01-f3"]=lambda: f_icons([("crate","the company owns it at the wellhead"),
    ("councilbuilding","the state owns it and shares profit oil"),
    ("receipt","a service agreement paying a fee"),
    ("table","a hybrid: a royalty inside a sharing contract"),
    ("spreadsheet","a comparison of the three"),
    ("note","two families, and almost every real contract is a mixture")],3)
S["rf01-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six sets of published fiscal terms",
    ["The country or contract","Royalty","Cost recovery ceiling","Profit split","Year agreed"],
    blankrows(6,5),
    note="The last column matters more than it looks. The box at the foot: the two agreed in the same "
    "year."), 660)
S["rf01-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: who gets what out of a hundred barrels",
    "<p style='font-size:12px;color:#6b6861'>Source: Daniel Johnston, <i>International Petroleum "
    "Fiscal Systems and Production Sharing Contracts</i>, PennWell, 1994. In our own words.</p>"
    "<p><b>Two families.</b> In a <b>concessionary</b> system the company takes <b>title</b> at the "
    "wellhead and pays a <b>royalty</b> and <b>income tax</b>. In a <b>contractual</b> system the "
    "<b>state keeps title</b>; the contractor recovers <b>costs</b> out of production and takes a "
    "share of what is left.</p>"
    "<p><b>The difference is not the one people think.</b> Title matters. But <b>whether a government "
    "ends up with more depends on the numbers inside the system</b>, not on which family it belongs "
    "to.</p>"
    "<p><b>The order of operations.</b> Out of gross production: <b>royalty</b>, off the top, before "
    "any cost; <b>cost oil</b>, up to a stated <b>ceiling</b>; anything above the ceiling <b>carried "
    "forward</b>; what remains is <b>profit oil</b>, divided; and the contractor pays <b>income "
    "tax</b> on its share.</p>"
    "<p><b>The split is rarely a single number.</b> It moves on a <b>sliding scale</b>, so <i>the "
    "split</i> has no answer without a condition attached.</p>"
    "<p><b>Take and entitlement are not the same.</b> <b>Take</b> is the government's share of "
    "<b>profits</b>. <b>Entitlement</b> is the share of the <b>volume</b> a party may lift. A "
    "contractor can have a large entitlement and a small take, because most of its entitlement is "
    "<b>cost oil</b>, which is not income.</p>"
    "<p><b>WHAT A TAKE FIGURE DOES NOT TELL YOU.</b> Its <b>denominator</b>. The <b>production rate</b> "
    "on a sliding scale. The <b>cost level</b>, which decides whether the ceiling binds. Whether "
    "bonuses and obligations are included. And <b>it says nothing about timing</b>: a high take with "
    "fast cost recovery can be worth more than a low take with slow recovery.</p>",
    "Published in 1994. The mechanics have not changed; the illustrative country data is thirty years "
    "old."), 580)
S["rf01-f6"]=lambda: f_realia(tbl("Word study",
    "Shares and conditions",
    ["The phrase","What it does","An example"],
    [["up to a maximum of","a ceiling","Cost oil is recoverable up to a maximum of 50 per cent of gross."],
     ["whichever is the lower","two limits, and the binding one","Actual costs or the ceiling, whichever is the lower."],
     ["after deduction of","the order of operations","Profit oil is calculated after deduction of royalty and cost oil."],
     ["net of","the same, more compact","The contractor's share is stated net of income tax."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>in the event that production exceeds</i> and <i>on a sliding scale "
    "from X to Y</i>."), 700)
S["rf01-f7"]=lambda: f_realia(tbl("Waterfall worksheet",
    "One hundred barrels of gross production",
    ["Step","Barrels"],
    [["Gross production","100"],
     ["less royalty at 10 per cent","&minus;10"],
     ["available","90"],
     ["less cost oil &mdash; costs 55, <b>ceiling 50</b>","&minus;50"],
     ["<b>carried forward</b>","<b>5</b>"],
     ["<b>profit oil</b>","<b>40</b>"],
     ["state share, 60 per cent","24"],
     ["contractor share, 40 per cent","16"],
     ["less income tax at 30 per cent of 16","&minus;4.8"],
     ["<b>state total</b>","<b>38.8</b>"],
     ["<b>contractor net</b>","<b>11.2</b>"],
     ["Take, against profit of 50","<b>77.6 per cent</b>"],
     ["State share of gross revenue","<b>38.8 per cent</b>"],
     ["State entitlement of volume","<b>34 per cent</b>"],
     ["Contractor entitlement of volume","<b>66 per cent</b>"]],
    note="All four percentages are correct. They have four different denominators."), 620)
S["rf01-f8"]=lambda: f_icons([("tally","a deduction off the top"),
    ("invoice","invoices against a ceiling"),("recycle","an amount carried forward"),
    ("signpost","a pool divided two ways"),("form","tax on one of the two shares"),
    ("magnifier","which step, and what comes next?")],3)
S["rf01-f9"]=lambda: f_realia(tbl("Comparison extract",
    "A published international comparison, with our own figures beside it",
    ["","Figure"],
    [["Published government take for this country","<b>62 per cent</b>"],
     ["Denominator stated?","<b>no</b>"],
     ["Production rate stated?","<b>no</b>"],
     ["Cost level stated?","<b>no</b>"],
     ["Our terms, at a lower cost level","75.7 per cent of profits"],
     ["Our terms, at current costs","77.6 per cent of profits"],
     ["Our terms, above 25,000 b/d (75:25 tranche)","85 per cent of profits"]],
    note="<b>Sixty-two is not in the range.</b> That indicates a different definition, not an error."), 620)
S["rf01-f10"]=lambda: f_scene(800,400,
    people=[("nadia",180,180,{}),("bah",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("desk",260,0,1.0),("spreadsheet",340,198,0.2),("table",580,0,0.9),
     ("pencil",660,198,0.2),("calculator",230,198,0.2)],
    clockat=(60,40,22,10,0))
S["rf01-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Note A",None,
    "<p>Government take under the agreement is 62 per cent, which is competitive by international "
    "standards.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note B",None,
    "<p>The <b>waterfall</b> per 100 barrels. <b>Four percentages with four denominators:</b> 77.6 of "
    "profits, 38.8 of gross revenue, 34 of volume to the state, 66 to the contractor. <b>Range across "
    "the tranches: 75.7 to 85.</b> And one sentence on what the published figure does not state.</p>",
    None),380)[0:3],
    800,300,"One figure","Four denominators and a range")
S["rf01-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Headline",None,
    "<p><b>62 per cent.</b></p><p>Competitive by international standards. The state's share of "
    "production has been maximized.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Defensible",None,
    "<p><b>77.6 per cent of profits</b> at current costs; <b>38.8 per cent of gross revenue</b>; state "
    "<b>entitlement 34 per cent of volume</b>. <b>Across the tranches, 75.7 to 85.</b> The published "
    "62 states no denominator, no rate and no cost level, and is not in our range &mdash; which "
    "indicates a different definition rather than an error.</p>",None),380)[0:3],
    800,300,"What a government announces","What you can defend")
S["rf01-f13"]=lambda: f_realia(form("Plan your fiscal note",
    [("The waterfall per hundred barrels",BLANK),("The state total and contractor net",BLANK),
     ("The four percentages, with their denominators",BLANK),
     ("The range across the tranches",BLANK),("What a published figure does not state",BLANK),
     ("One recommendation",BLANK)],
    note="Six boxes. No percentage anywhere without its denominator."), 560)
S["rf01-f14"]=lambda: f_scene(1000,450,
    people=[("nadia",60,176,{}),("bah",130,172,{}),("omar",205,176,{}),
     ("haddad",290,172,{}),("yusuf",365,176,{}),("samira",440,172,{"seated":True}),
     ("nour",515,176,{"seated":True}),("yara",590,170,{}),("ahmad",655,172,{}),
     ("adeel",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("wei",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.2),
     ("table",420,198,0.2),("pencil",550,198,0.2),("table",650,0,1.0),
     ("stairwell",860,194,0.2),("phone",930,198,0.2)],
    board=(40,22,206,112,"PER CENT OF WHAT?",[("77.6","profits"),("38.8","revenue"),("34","volume")]),
    clockat=(262,34,22,12,0))
S["rf01-f15"]=lambda: f_chart([("yes, I have read them",2),("yes, a summary only",4),
    ("no",6),("I did not know there were any",5),("they are confidential",5)], unit="operators")
S["rf01-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A figure in circulation",
    "<p><b>A waterfall worksheet</b> with four percentages at the foot.</p>"
    "<p><b>A published comparison table</b> printing sixty-two per cent, with no methodology note.</p>"
    "<p><b>A board paper</b> quoting sixty-two.</p>"
    "<p><b>A note of a telephone call</b> to somebody who left two years ago.</p>"
    "<p><b>A pencil.</b></p>"
    "<p><i>The figure cannot be reproduced from the terms it describes, on any definition anybody here "
    "can construct. The methodology note was an internal document.</i></p>",
    "Seven o'clock. The number is in two public statements and the last person who could explain it "
    "has gone."), 620)

# ---------------- Unit 2 ----------------
S["rf02-f1"]=lambda: f_icons([("book","a bound agreement, sixty pages"),
    ("map","a contract area outlined"),("calendar","exploration and production periods"),
    ("recycle","half an area given back"),("logsheet","a minimum work program"),
    ("truck","a seismic crew"),("padlock","a stability clause"),
    ("councilbuilding","a governing law clause"),("meeting","an arbitration clause"),
    ("stamp","a confidentiality stamp"),("handshake","an assignment clause"),
    ("storm","a force majeure clause"),("tin","a domestic supply obligation"),
    ("student","a training obligation with a number"),("magnifier","audit rights"),
    ("note","the money is eleven pages")],4)
S["rf02-f2"]=lambda: f_scene(820,420,
    people=[("nadia",120,176,{}),("omar",340,180,{"seated":True}),("bah",420,180,{"seated":True}),
     ("haddad",500,176,{}),("yusuf",580,180,{"seated":True}),
     ("nour",660,180,{"seated":True}),("samira",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("book",780,198,0.2)],
    board=(24,22,216,112,"SIXTY PAGES",[("definitions","23"),("money","11"),("the rest","26")]),
    clockat=(258,34,22,9,30))
S["rf02-f3"]=lambda: f_icons([("map","the parties and the area"),
    ("calendar","the phases and their durations"),("logsheet","the work obligations"),
    ("spreadsheet","the fiscal terms"),("meeting","the administration and decisions"),
    ("padlock","the protections and exits")],3)
S["rf02-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six clauses",
    ["The clause","Which part","What it obliges","Who it protects","Without it?"],
    blankrows(6,5),
    note="The box at the foot: the one nobody could explain."), 660)
S["rf02-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: what is actually in a petroleum agreement",
    "<p style='font-size:12px;color:#6b6861'>Source: Jenik Radon, \"The ABCs of Petroleum Contracts\", "
    "in <i>Covering Oil: A Reporter's Guide to Energy and Development</i>, Open Society Institute and "
    "Revenue Watch Institute, 2005. In our own words.</p>"
    "<p><b>What the document is.</b> A <b>primer</b>, written so that somebody who is not a lawyer "
    "could pick up an agreement and understand what they were looking at. That makes it the clearest "
    "short account available, and it was published from the position that these documents <b>should be "
    "readable by the public</b>.</p>"
    "<p><b>Six parts.</b> The <b>parties and the area</b>, usually by coordinates. The <b>phases</b>: "
    "an exploration period, <b>relinquishment</b> of part of the area, development, and a long "
    "production period. The <b>work obligations</b> &mdash; seismic, <b>commitment wells</b>, spend, by "
    "date &mdash; which is what the state is really buying. The <b>fiscal terms</b>. The "
    "<b>administration</b>: committees, approvals, reporting, <b>audit rights</b>. And the "
    "<b>protections and exits</b>, which is where disputes are decided.</p>"
    "<p><b>Four clauses decide what happens when it goes wrong.</b> <b>Stabilization</b>, protecting "
    "the agreed terms against later changes in law, or requiring the economic balance to be restored "
    "&mdash; the most politically contested clause in the industry, because it constrains a sovereign "
    "legislature by contract. <b>Governing law and arbitration</b>: which law, and where a dispute "
    "goes. <b>Confidentiality</b>: whether the agreement may be published. <b>Assignment</b>: whether "
    "a party may transfer its interest, and to whom.</p>"
    "<p><b>And the ones everybody forgets:</b> force majeure, a <b>domestic supply obligation</b>, "
    "<b>training obligations</b> with a number in them, and <b>abandonment</b>, which in older "
    "agreements is two paragraphs.</p>"
    "<p><b>WHAT A PRIMER IS NOT.</b> Not a legal text: the operative words in any agreement are that "
    "agreement's. It describes practice <b>as at 2005</b>. It is written from a <b>stated "
    "position</b>, which is legitimate and is not neutrality. <b>And no agreement is typical.</b></p>",
    "Go and find out whether the agreement governing the field you work on is public."), 580)
S["rf02-f6"]=lambda: f_realia(tbl("Word study",
    "Reporting what an agreement provides",
    ["The phrase","What it does","An example"],
    [["the agreement provides that","reports a term neutrally","The agreement provides that half the area is relinquished."],
     ["under clause N","points at the text","Under clause 4.3, relinquishment occurs at the end of the period."],
     ["the contractor shall","an obligation, in the document's voice","The contractor shall drill two commitment wells."],
     ["subject to","a condition on an obligation","Subject to approval of the work program."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>for the avoidance of doubt</i> and <i>notwithstanding</i>."), 700)
S["rf02-f7"]=lambda: f_realia(tbl("Clause map",
    "Eleven clauses, and three with nothing in the last column",
    ["Clause","What it does","Protects","Diarized?"],
    [["2.1","the contract area, by coordinates","both","&mdash;"],
     ["<b>4.3</b>","<b>half the area relinquished at the end of the exploration period</b>","<b>the state</b>","<b>no</b>"],
     ["5.2","two commitment wells by a stated date","the state","yes"],
     ["9.1","cost recovery ceiling at 50 per cent","both","yes"],
     ["12.4","stabilization of the economic balance","the contractor","&mdash;"],
     ["14.1","governing law","both","&mdash;"],
     ["14.6","international arbitration, three arbitrators","both","&mdash;"],
     ["17.2","confidentiality of the agreement","historically the contractor","&mdash;"],
     ["19.3","assignment, with state consent","the state","&mdash;"],
     ["<b>22.1</b>","<b>training obligation, a stated number per year</b>","<b>the state</b>","<b>no</b>"],
     ["<b>24.2</b>","<b>abandonment, two paragraphs, no fund</b>","<b>neither, in practice</b>","<b>no</b>"]],
    note="Two of the three undiarized obligations run in favor of the state."), 660)
S["rf02-f8"]=lambda: f_icons([("map","a map with coordinates"),
    ("calendar","a phase diagram with dates"),("logsheet","two wells and a seismic figure"),
    ("tally","a royalty percentage"),("meeting","a committee approving a budget"),
    ("magnifier","which part, and who does it protect?")],3)
S["rf02-f9"]=lambda: f_realia(tbl("Obligation register",
    "Seven obligations",
    ["Clause","The obligation","Status"],
    [["5.2","two commitment wells","on track"],
     ["9.1","cost recovery within the ceiling","on track"],
     ["14.6","arbitration provisions maintained","on track"],
     ["17.2","confidentiality","on track"],
     ["<b>4.3</b>","<b>relinquish half the area</b>","<b>18 months away, not diarized</b>"],
     ["<b>22.1</b>","<b>a stated number of trainees per year</b>","<b>no report for any year since 2019</b>"],
     ["<b>24.2</b>","<b>abandonment</b>","<b>no fund, no estimate</b>"]],
    note="Five on track with owners and dates. <b>Three gaps.</b>"), 620)
S["rf02-f10"]=lambda: f_scene(800,400,
    people=[("nadia",180,180,{}),("haddad",300,176,{}),("bah",620,180,{})],
    props=[("desk",260,0,1.0),("book",340,198,0.2),("logsheet",230,198,0.2),
     ("table",580,0,0.9),("map",680,196,0.22)],
    clockat=(60,40,22,11,0))
S["rf02-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Summary A",None,
    "<p>Contractual obligations are being managed within the compliance framework.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Summary B",None,
    "<p><b>Seven obligations by clause number</b>, each with a <b>due date</b> and an <b>owner</b>. "
    "<b>Three gaps</b>, named: clause 4.3 in 18 months, clause 22.1 with no report since 2019, clause "
    "24.2 with no fund.</p>",None),380)[0:3],
    800,300,"Within the framework","Seven clauses and three gaps")
S["rf02-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Contractual obligations under the agreement are being managed within the compliance framework "
    "and the agreement provides adequate protection for our interests.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p><b>Four of seven on track.</b> <b>Clause 4.3:</b> half the area relinquished in ~18 months, "
    "our choice which half, <b>in no calendar</b>, and the appraisal needed would take two years. "
    "<b>Clause 22.1:</b> no report since 2019. <b>Clause 24.2:</b> no fund, no estimate, no "
    "methodology. <b>I am reading 12.4 as a balance-restoration provision rather than a freeze; that "
    "is my reading and a lawyer should confirm it.</b></p>",None),380)[0:3],
    800,300,"Managed","Three gaps and one reading")
S["rf02-f13"]=lambda: f_realia(form("Plan your compliance note",
    [("How many obligations tracked, and how many on track",BLANK),
     ("Each gap, with its clause number and date",BLANK),
     ("What you cannot determine, and why",BLANK),("Any reading marked as your own",BLANK),
     ("Three requests",BLANK),("Who would own each",BLANK)],
    note="Six boxes. No clause referred to without its number."), 560)
S["rf02-f14"]=lambda: f_scene(1000,450,
    people=[("nadia",60,176,{}),("haddad",130,172,{}),("bah",205,176,{}),
     ("omar",290,172,{}),("yusuf",365,176,{}),("nour",440,172,{"seated":True}),
     ("samira",515,176,{"seated":True}),("yara",590,170,{}),("ahmad",655,172,{}),
     ("adeel",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("wei",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("book",350,198,0.2),
     ("logsheet",420,198,0.2),("map",550,196,0.22),("table",650,0,1.0),
     ("calendar",860,198,0.2),("student",930,196,0.2)],
    board=(40,22,206,112,"60 PAGES, 11 OF MONEY",[("definitions","23"),("clause 4.3","18 months"),("clause 24.2","2 paragraphs")]),
    clockat=(262,34,22,12,0))
S["rf02-f15"]=lambda: f_chart([("yes, and I have read it",2),("yes, and I have not",4),
    ("no, it is confidential",6),("I do not know",7),("we have no such agreement",1)], unit="operators")
S["rf02-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A date known for nine years",
    "<p><b>A bound agreement</b> open at clause 4.3.</p>"
    "<p><b>An obligation register</b> with three rows highlighted.</p>"
    "<p><b>A map of the contract area</b> with no dividing line drawn on it yet.</p>"
    "<p><b>A calendar</b> with a date circled eighteen months ahead.</p>"
    "<p><b>A training record file</b> with four years missing.</p>"
    "<p><i>Choosing which half to keep requires about two years of appraisal that has not started. The "
    "date has been in the agreement since it was signed.</i></p>",
    "Seven o'clock. Nobody has broken anything."), 620)

# ---------------- Unit 3 ----------------
S["rf03-f1"]=lambda: f_icons([("data","three companies with percentages"),
    ("badge","an operator's badge"),("meeting","a non-operator at the table"),
    ("table","a voting table with a pass mark"),("logsheet","a work program and budget"),
    ("invoice","a cash call notice"),("transfer","a bank transfer"),
    ("noentry","a default notice"),("engine","a well drilled at one party's risk"),
    ("form","a non-consent election"),("map","an area of mutual interest"),
    ("handshake","an assignment with a pre-emption right"),("door","a withdrawal notice"),
    ("padlock","a decommissioning security letter"),("book","a model form with brackets"),
    ("note","a starting point, not a contract")],4)
S["rf03-f2"]=lambda: f_scene(820,420,
    people=[("nadia",120,176,{}),("omar",340,180,{"seated":True}),("bah",420,180,{"seated":True}),
     ("haddad",500,176,{}),("wei",580,180,{"seated":True}),
     ("nour",660,180,{"seated":True}),("yusuf",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("data",780,196,0.2)],
    board=(24,22,216,112,"PASS MARK 65",[("A 40","in every pair"),("B+C","60, fails"),("A+C","65, passes")]),
    clockat=(258,34,22,10,0))
S["rf03-f3"]=lambda: f_icons([("noentry","a partner that will not pay"),
    ("handsup","a partner that will not approve"),("engine","one party drilling alone"),
    ("handshake","a partner selling its interest"),("door","a partner walking away"),
    ("note","four disputes, and three are about money arriving late")],3)
S["rf03-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six joint ventures",
    ["The venture","The interests","The operator","Pass mark","Is one party in every winning combination?"],
    blankrows(6,5),
    note="The last column needs arithmetic, not research. The box at the foot: the one with a party "
    "that cannot be outvoted."), 680)
S["rf03-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the agreement between the companies",
    "<p style='font-size:12px;color:#6b6861'>Source: the Model International Operating Agreement "
    "published by the Association of International Petroleum Negotiators, 2012 form. In our own "
    "words.</p>"
    "<p><b>What it is for.</b> Where two or more companies hold an interest in the same contract area, "
    "they need an agreement between <b>themselves</b>, separate from the agreement with the state.</p>"
    "<p><b>Operator and non-operators.</b> One party is appointed <b>operator</b> and does the work: "
    "it contracts, drills, operates and issues the bills. The others pay their share and vote. <b>The "
    "operator does not own the venture and is not the boss of the others</b>; it acts under "
    "instructions from a committee.</p>"
    "<p><b>Participating interests.</b> Each party pays that percentage of costs, takes that "
    "percentage of production, and votes with that percentage.</p>"
    "<p><b>The pass mark.</b> Decisions are taken by weighted vote against a stated <b>pass mark</b>. "
    "<b>The arithmetic of the pass mark against the actual interests decides who really controls the "
    "venture</b>, and it is often not what the headline percentages suggest.</p>"
    "<p><b>Cash calls and default.</b> The committee approves a work program and budget; the operator "
    "issues <b>cash calls</b> in advance. A party that does not pay is in <b>default</b>, and the "
    "procedure escalates: interest, a notice, <b>suspension of rights</b> including the vote and the "
    "entitlement to production, the others covering the shortfall, and ultimately <b>forfeiture</b>. "
    "The provisions are severe on purpose, because one party's failure stops the work for "
    "everybody.</p>"
    "<p><b>Sole risk.</b> Where the committee will not approve something, a party may be permitted to "
    "do it <b>at its own risk and cost</b>; those who did not participate have no share unless they "
    "buy in on stated, usually penal, terms.</p>"
    "<p><b>The operator's liability.</b> Normally <b>not liable</b> to the others except for <b>gross "
    "negligence or wilful misconduct</b> &mdash; one of the most heavily negotiated phrases in the "
    "industry, defined in the agreement itself.</p>"
    "<p><b>WHAT A MODEL FORM IS NOT.</b> <b>Not a contract</b>: a starting point, published with "
    "bracketed alternatives. <b>It does not bind the state.</b> It is a practitioners' publication, so "
    "its defaults reflect the parties who were in the room. <b>And it cannot make a venture work</b>: "
    "everything in it is a procedure for a disagreement.</p>",
    "A joint venture using these procedures regularly is a joint venture in trouble, whatever the "
    "drafting."), 580)
S["rf03-f6"]=lambda: f_realia(tbl("Word study",
    "Rights and obligations",
    ["The structure","What it does","An example"],
    [["shall","an obligation","Each party shall pay its share within thirty days."],
     ["may","a permission","The non-defaulting parties may cover the shortfall."],
     ["is entitled to","a right","The operator is entitled to charge interest on late payment."],
     ["is obliged to","an obligation, from the other side","A withdrawing party is obliged to meet its share of decommissioning."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>unless otherwise agreed</i> and <i>at its sole risk and "
    "expense</i>."), 700)
S["rf03-f7"]=lambda: f_realia(tbl("Voting arithmetic",
    "Interests: A 40, B 35, C 25 &middot; pass mark 65 per cent",
    ["Combination","Total","Passes?"],
    [["A alone","40","no"],
     ["B alone","35","no"],
     ["C alone","25","no"],
     ["B + C","<b>60</b>","<b>no</b>"],
     ["A + C","<b>65</b>","<b>yes, exactly</b>"],
     ["A + B","75","yes"],
     ["A + B + C","100","yes"]],
    numcols=(1,),
    note="<b>A is in every passing combination.</b> B and C together cannot pass anything at all."), 600)
S["rf03-f8"]=lambda: f_icons([("noentry","a party that has not paid by the due date"),
    ("handsup","a party voting against a well"),("engine","one party drilling alone"),
    ("handshake","a party selling its interest"),("door","a party walking away from a late-life field"),
    ("magnifier","which procedure, and who may do what?")],3)
S["rf03-f9"]=lambda: f_realia(tbl("Joint venture status",
    "Month end",
    ["","Entry"],
    [["Interests","A 40, B 35, C 25"],
     ["Pass mark","65 per cent"],
     ["Cash call status","<b>Party C, 19 days overdue</b>"],
     ["Default stage","<b>interest accruing; no notice served</b>"],
     ["Steps to forfeiture","<b>five; we are at one</b>"],
     ["Sole risk election","A in; B and C out"],
     ["Area of mutual interest","one query outstanding"],
     ["Next week","<b>appraisal well vote</b>"]],
    note="<b>Nineteen days, no notice, and a vote next week.</b> A and B hold 75, so the well passes "
    "either way."), 620)
S["rf03-f10"]=lambda: f_scene(800,400,
    people=[("nadia",180,180,{}),("haddad",300,176,{}),("bah",620,180,{"seated":True})],
    props=[("desk",260,0,1.0),("logsheet",340,198,0.2),("table",580,0,0.9),
     ("data",700,196,0.22),("invoice",230,198,0.2)],
    clockat=(60,40,22,11,0))
S["rf03-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Note A",None,
    "<p>Party C is in default. The operator is taking appropriate action in respect of the outstanding "
    "receivable.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note B",None,
    "<p><b>19 days overdue. Interest accruing under clause 8.4. No notice served. Forfeiture is step "
    "five of five.</b> The vote next week passes <b>with or without</b> a suspension, because A and B "
    "hold 75 against a 65 pass mark.</p>",None),380)[0:3],
    800,300,"In default","Nineteen days, step one")
S["rf03-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Board paper A",None,
    "<p>A partner is in default and the operator is enforcing the agreement.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Board paper B",None,
    "<p><b>A 40, B 35, C 25; pass mark 65; A is in every passing combination.</b> C is <b>19 days "
    "overdue</b>; interest accruing; <b>no notice served</b>. The appraisal vote passes either way, so "
    "<b>a suspension next week would change no outcome and would be read as using a procedure to make "
    "a point</b>. That is a judgment about a twenty-year relationship, marked as mine. Recommending: "
    "serve nothing; one call to C's finance function.</p>",None),380)[0:3],
    800,300,"Enforcing","Naming the step")
S["rf03-f13"]=lambda: f_realia(form("Plan your joint venture note",
    [("The interests and the pass mark arithmetic",BLANK),
     ("The days overdue and the step, with its clause",BLANK),
     ("The voting outcome with and without suspension",BLANK),
     ("One judgment, marked as a judgment",BLANK),("One recommendation",BLANK),
     ("What a board paper should say",BLANK)],
    note="Six boxes, and no use of the bare phrase <i>in default</i>."), 560)
S["rf03-f14"]=lambda: f_scene(1000,450,
    people=[("nadia",60,176,{}),("haddad",130,172,{}),("wei",205,176,{}),
     ("bah",290,172,{}),("omar",365,176,{}),("nour",440,172,{"seated":True}),
     ("yusuf",515,176,{"seated":True}),("samira",590,170,{}),("yara",655,172,{}),
     ("ahmad",720,170,{}),("adeel",785,172,{}),("ida",845,170,{}),
     ("tomas",905,172,{}),("lars",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("invoice",350,198,0.2),
     ("book",420,198,0.2),("map",550,196,0.22),("table",650,0,1.0),
     ("phone",860,198,0.2),("form",930,198,0.2)],
    board=(40,22,206,112,"EVERY WINNING PAIR",[("A+B","75")  ,("A+C","65"),("B+C","60")]),
    clockat=(262,34,22,12,0))
S["rf03-f15"]=lambda: f_chart([("yes, and the pass mark too",2),("yes, the interests only",5),
    ("no",6),("I did not know there were partners",4),("we have no partners",3)], unit="operators")
S["rf03-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Nineteen days, and twenty years",
    "<p><b>A joint venture status note</b> with a cash call nineteen days overdue.</p>"
    "<p><b>A voting table</b> with all seven combinations and two exactly at the pass mark.</p>"
    "<p><b>A default clause</b> with five numbered steps.</p>"
    "<p><b>An appraisal well proposal</b> for a vote next week.</p>"
    "<p><b>A model agreement</b> open at a page of bracketed alternatives.</p>"
    "<p><i>Every step in the default procedure is lawful and clearly drafted. The vote passes whether "
    "or not anybody is suspended.</i></p>",
    "Seven o'clock. Three companies expect to hold this field together for about twenty years."), 620)
