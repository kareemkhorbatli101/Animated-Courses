# -*- coding: utf-8 -*-
"""Flowline Book 6 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Unit 4 ----------------
S["rf04-f1"]=lambda: f_icons([("barrier","a customs post with the barrier down"),
    ("container","a container of casing on a trailer"),("timer","a demurrage clock running"),
    ("handsup","a hand held out"),("noentry","a cash envelope, crossed through"),
    ("receipt","a receipt book"),("idcard","an intermediary with two cards"),
    ("invoice","a consultancy invoice with no description"),
    ("logsheet","a ledger with a false entry crossed through"),
    ("book","a company policy document"),("phone","a reporting telephone line"),
    ("notebook","a written record with a date and a time"),
    ("archive","a criminal statute book"),("meeting","a courtroom"),
    ("review","a peer review report"),("note","do not decide this alone")],4)
S["rf04-f2"]=lambda: f_scene(820,420,
    people=[("nadia",110,176,{}),("yusuf",180,176,{}),("omar",380,180,{"seated":True}),
     ("bah",460,180,{"seated":True}),("haddad",540,180,{"seated":True}),
     ("nour",620,180,{"seated":True}),("samira",700,180,{"seated":True})],
    props=[("desk",360,0,1.0),("board",40,88,0.64),("notebook",780,198,0.2)],
    board=(24,22,216,112,"WHAT YOU DO",[("say no","say why"),("write it","now"),("report it","today")]),
    clockat=(290,34,22,10,30))
S["rf04-f3"]=lambda: f_icons([("speechbubble","I would have to ask"),
    ("book","explaining a company rule"),("notebook","a note written in a vehicle"),
    ("phone","a call to a reporting line"),("meeting","a manager escalating"),
    ("note","four steps, and none of them is a decision you make yourself")],3)
S["rf04-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published policies",
    ["The organization","What it prohibits","What it says about small payments","Who you report to","Can the channel be used anonymously?"],
    blankrows(6,5),
    note="The fourth and fifth are the ones that matter at a barrier. The box at the foot: the one "
    "with no channel named."), 680)
S["rf04-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the document behind the four steps",
    "<p style='font-size:12px;color:#6b6861'>Source: the Convention on Combating Bribery of Foreign "
    "Public Officials in International Business Transactions, adopted under the Organization for "
    "Economic Co-operation and Development, 1997. In our own words. <b>This is not legal advice and "
    "does not state the law of any country.</b></p>"
    "<p><b>What kind of document this is.</b> A treaty between states. <b>It does not itself make "
    "anything a crime.</b> It obliges each <b>Party</b> to make it a criminal offense <b>under its own "
    "law</b> to bribe a foreign public official, and to back that up with enforcement and "
    "cooperation.</p>"
    "<p><b>What the offense is.</b> Intentionally <b>offering, promising or giving</b> any <b>undue "
    "advantage</b> &mdash; money, or anything else of value &mdash; to a <b>foreign public "
    "official</b>, directly or <b>through intermediaries</b>, for that official or a third party, so "
    "that the official acts or refrains from acting, in order to obtain or retain business.</p>"
    "<p><b>Three things most people get wrong.</b> It covers <b>offering and promising</b>, not only "
    "paying. It covers payments <b>through intermediaries</b>. And the advantage <b>need not be "
    "money</b>.</p>"
    "<p><b>What Parties undertake to do.</b> Effective penalties. <b>Liability of legal persons</b> "
    "&mdash; companies, not only people. Measures on <b>accounting</b>: no off-the-books accounts, no "
    "false entries, no recording of non-existent expenditure. Mutual legal assistance. And <b>peer "
    "monitoring</b>, published, which is the main reason it has teeth.</p>"
    "<p><b>Why the accounting provisions are the practical ones.</b> Very few of these cases are made "
    "by somebody witnessing a payment. They are made from <b>documents</b>. <b>The books are the "
    "evidence</b>, in both directions: they are how wrongdoing is proved, and a complete honest record "
    "is how an innocent person is cleared.</p>"
    "<p><b>On small payments.</b> The fact that a payment is small, or customary, or was <b>demanded "
    "rather than offered</b>, does not of itself make it lawful.</p>"
    "<p><b>WHAT IT DOES NOT DO.</b> It does not state the law that applies to you. It addresses the "
    "<b>supply side</b>, not the demand. It is about <b>foreign</b> public officials. Enforcement "
    "<b>varies enormously</b> and its own peer reviews say so by name. <b>And it cannot help you at a "
    "barrier</b> &mdash; that is what the four steps are for.</p>",
    "Read your own company's policy, and find out tonight who you would telephone."), 580)
S["rf04-f6"]=lambda: f_realia(tbl("Word study",
    "Prohibition",
    ["The structure","What it does","An example"],
    [["it is an offense to","the prohibition, impersonal","It is an offense to offer an undue advantage to a foreign public official."],
     ["no payment shall be made","a company rule","No payment shall be made other than against an invoice."],
     ["irrespective of whether","removes an excuse","Irrespective of whether the payment was demanded or offered."],
     ["it is not a defense that","removes an argument","It is not a defense that the payment was customary."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>under no circumstances</i> and <i>I am not able to</i>."), 700)
S["rf04-f7"]=lambda: f_realia(doc("Contemporaneous record",
    "Written in the vehicle, twenty minutes after",
    "<p><b>Date and time of the conversation:</b> 14 March, 09:20.<br>"
    "<b>Place:</b> the customs post, north of Hasakah.<br>"
    "<b>Present:</b> the writer; one official; one other person, not named by either.<br>"
    "<b>What was asked for:</b> <i>a payment to release the three trailers the same afternoon</i>.<br>"
    "<b>Exactly what I said:</b> <i>I am not able to do that. I would have to ask.</i><br>"
    "<b>What happened next:</b> the official shrugged; I returned to the vehicle.<br>"
    "<b>Time this note was written:</b> <b>09:40</b>.<br>"
    "<b>Reported to:</b> the operations manager at 10:05; the company channel at 10:20.</p>"
    "<p><b>I made no payment and I promised nothing.</b></p>",
    "The words used, not a summary. A summary written three weeks later is worth very little."), 600)
S["rf04-f8"]=lambda: f_icons([("speechbubble","saying you must ask"),
    ("book","explaining a company rule"),("notebook","a time written down"),
    ("phone","a call being made"),("invoice","an invoice with no description, refused"),
    ("note","which step, and what do you not do?")],3)
S["rf04-f9"]=lambda: f_realia(tbl("Incident summary",
    "Hasakah crossing &middot; 14 March",
    ["","Entry"],
    [["What was asked","<i>a payment to release three trailers the same afternoon</i>"],
     ["What was said in reply","<i>I am not able to do that. I would have to ask.</i>"],
     ["Payment made","<b>none</b>"],
     ["Anything promised","<b>nothing</b>"],
     ["Delay","<b>48 hours</b>"],
     ["Outcome","released 16 March, <b>no payment made</b>"],
     ["Reported","10:05 to the manager; 10:20 to the channel"]],
    note="<b>The delay cost us two days and nothing else.</b>"), 620)
S["rf04-f10"]=lambda: f_scene(800,400,
    people=[("nadia",180,180,{}),("yusuf",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("desk",260,0,1.0),("notebook",340,198,0.2),("table",580,0,0.9),
     ("timer",690,196,0.2),("receipt",230,198,0.2)],
    clockat=(60,40,22,11,0))
S["rf04-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>A local issue arose at the crossing which was resolved appropriately through the usual "
    "channels.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>The demand and the reply <b>in quoted words</b>. <b>No payment made and nothing promised.</b> "
    "Both report times. The outcome. The <b>demurrage cost</b>, reported here because it is the cost of "
    "handling it correctly.</p>",None),380)[0:3],
    800,300,"Resolved","Quoted, timed and costed")
S["rf04-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Not this",None,
    "<p>There was an attempt at extortion and our agent dealt with the local issues. The delay was "
    "unavoidable.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("This",None,
    "<p>At 09:20 I was asked for a payment to release three trailers. I said I was not able to do that "
    "and would have to ask. <b>No payment, nothing promised.</b> <b>Our agent was not involved</b> "
    "&mdash; and if one had been, the Convention and our policy would treat a payment by that agent as "
    "ours.</p>",None),380)[0:3],
    800,300,"Interpretation","Quotation")
S["rf04-f13"]=lambda: f_realia(form("Plan your report",
    [("The time, date and place",BLANK),("What was asked, in the words used",BLANK),
     ("What you said, in the words used",BLANK),("No payment made, nothing promised",BLANK),
     ("When and to whom you reported",BLANK),("One request",BLANK)],
    note="Six boxes. No interpretation of anybody's motive."), 560)
S["rf04-f14"]=lambda: f_scene(1000,460,
    people=[("omar",80,176,{}),("ahmad",150,172,{}),("wei",215,176,{}),
     ("nadia",330,172,{}),("yusuf",400,176,{}),("nour",470,172,{"seated":True}),
     ("samira",540,176,{"seated":True}),("haddad",610,170,{}),("bah",675,172,{}),
     ("yara",740,170,{}),("adeel",800,172,{}),("ida",855,170,{}),
     ("tomas",910,172,{}),("lars",960,174,{})],
    props=[("barrier",40,0,1.0),("container",180,192,0.22),("notebook",250,198,0.2),
     ("desk",320,0,1.05),("board",400,88,0.6),("phone",560,198,0.2),
     ("table",700,0,1.0),("idcard",900,198,0.2),("timer",960,196,0.2)],
    board=(282,22,200,108,"DO NOT DECIDE ALONE",[("say no","say why"),("write it","report it"),("5th","crossed out")]),
    clockat=(500,34,22,12,0))
S["rf04-f15"]=lambda: f_chart([("yes, I know the number",3),("yes, I would have to look",7),
    ("no",4),("we have no channel",2),("I do not know",6)], unit="operators")
S["rf04-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Nothing was paid, and it cost two days",
    "<p><b>A handwritten record</b> with a time at the top and a time at the foot.</p>"
    "<p><b>A demurrage calculation</b> for forty-eight hours.</p>"
    "<p><b>A release note</b> dated two days later, with no payment.</p>"
    "<p><b>A company policy</b> with the reporting channel on page nineteen.</p>"
    "<p><b>An identity card</b> with a blank back.</p>"
    "<p><i>Somebody said no, at a barrier, alone, with a clock running. It took eleven minutes at a "
    "desk to find the number.</i></p>",
    "Seven o'clock. At a barrier, eleven minutes is not a channel."), 620)

# ---------------- Unit 5 ----------------
S["rf05-f1"]=lambda: f_icons([("dashboard","a national employee in a control room"),
    ("badge","an expatriate specialist"),("lecture","a training classroom"),
    ("logsheet","an apprenticeship logbook"),("crate","a locally registered importer"),
    ("crane","a local workshop fabricating steel"),("cook","a catering kitchen"),
    ("security","a security gate"),("truck","a transport fleet"),
    ("form","a pre-qualification form"),("barcode","one contract split into four"),
    ("note","a tender with a local content requirement"),
    ("data","a spend pie chart"),("tally","a headcount chart"),
    ("balance","a value retained diagram"),("note","sixty-eight percent of what")],4)
S["rf05-f2"]=lambda: f_scene(820,420,
    people=[("nadia",120,176,{}),("omar",340,180,{"seated":True}),("bah",420,180,{"seated":True}),
     ("haddad",500,176,{}),("nour",580,180,{"seated":True}),
     ("samira",660,180,{"seated":True}),("ahmad",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("data",780,196,0.2)],
    board=(24,22,216,112,"68 PER CENT",[("agency","34"),("services","25"),("makes things","9")]),
    clockat=(258,34,22,9,0))
S["rf05-f3"]=lambda: f_icons([("tally","nationals against a total workforce"),
    ("data","spend with local suppliers"),("balance","value added, net of imports"),
    ("crate","a locally registered company with an imported crate"),
    ("crane","a workshop making a structure from local steel"),
    ("note","three bases, three answers, one contract")],3)
S["rf05-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published local content figures",
    ["The company or country","The figure","Basis stated?","Is local defined?","Does a local importer count?"],
    blankrows(6,5),
    note="The third and fourth decide whether the figure means anything. The box at the foot: the two "
    "that are not comparable."), 680)
S["rf05-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the word local, and what it is doing",
    "<p style='font-size:12px;color:#6b6861'>Source: <i>Local content: a guidance document for the oil "
    "and gas industry</i>, IPIECA, second edition 2016. In our own words.</p>"
    "<p><b>What the idea is.</b> This industry spends very large sums in places that often have little "
    "other industry. <b>Local content</b> is the attempt to make that spending build something "
    "durable: employment, suppliers that survive the field, and skills that stay.</p>"
    "<p><b>Why it is harder than it sounds.</b> Every word has to be defined before a figure means "
    "anything. <b>What does local mean geographically?</b> The country, the province, the district? A "
    "company from the capital is national and is not local to the community that sees the flare. "
    "<b>What makes a company local?</b> Registration is the easiest test and the weakest: a locally "
    "registered company may be wholly foreign owned, employ three people, and exist to import goods "
    "and add a margin.</p>"
    "<p><b>Three bases, and they give very different numbers.</b> <b>Headcount</b>: the share of the "
    "workforce who are nationals. <b>Spend</b>: the share of procurement paid to local companies. "
    "<b>Value retained</b>: the value actually added in the country, net of imported content.</p>"
    "<p><b>A spend basis counts the whole invoice.</b> If a locally registered company imports a pump "
    "for a hundred and sells it for a hundred and ten, a spend basis records a hundred and ten. The "
    "value added was ten. <b>Both figures are correct and they differ by a factor of eleven.</b></p>"
    "<p><b>What the guidance recommends.</b> <b>Plan early</b>, because capability takes years. "
    "<b>Unbundle</b>: four smaller packages may each be winnable locally. <b>Help suppliers "
    "pre-qualify</b> &mdash; most fail on paperwork, not capability. <b>Pay on time</b>: the single "
    "most effective measure available, costing nothing but working capital. And <b>measure something "
    "meaningful, and say which</b>.</p>"
    "<p><b>WHAT GUIDANCE CANNOT DO.</b> It is not a standard and not law; each country defines "
    "<i>local</i> differently. <b>It cannot make a target meaningful</b>: a spend-basis target can be "
    "met by routing purchases through an intermediary, which builds nothing and is the target working "
    "exactly as written. It cannot make figures comparable. <b>And it cannot create demand that "
    "outlasts the field.</b></p>",
    "A supplier that exists only to serve one operator has not been developed; it has been employed."), 580)
S["rf05-f6"]=lambda: f_realia(tbl("Word study",
    "Defining and measuring",
    ["The phrase","What it does","An example"],
    [["for the purposes of this report","defines a word for one document","For the purposes of this report, local means registered and majority owned here."],
     ["measured as","states the method","Measured as the proportion of procurement spend."],
     ["on a spend basis","names the basis","On a spend basis, the figure is 68 percent."],
     ["excludes","says what is left out","Excludes the imported content of goods resold by local companies."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>is not necessarily</i> and <i>expressed as a proportion of</i>."), 700)
S["rf05-f7"]=lambda: f_realia(tbl("Breaking sixty-eight into four",
    "Share counted as local, and value actually added",
    ["Component","Counted as local","Value added here"],
    [["Goods bought from locally registered importers","<b>34</b>","the margin only: about <b>3</b>"],
     ["Catering, security, transport, accommodation","<b>25</b>","nearly all of it: about <b>23</b>"],
     ["Local fabrication, from imported steel","<b>7</b>","about <b>4</b>"],
     ["Local manufacture, from local materials","<b>2</b>","<b>2</b>"],
     ["<b>Total counted as local content</b>","<b>68</b>","&mdash;"],
     ["<b>Total value retained, approximately</b>","&mdash;","<b>32</b>"]],
    note="About <b>9 points</b> of our spend reaches somebody in this country who <b>makes</b> "
    "something."), 640)
S["rf05-f8"]=lambda: f_icons([("dashboard","a national employee in a control room"),
    ("invoice","an invoice from a local importer"),("crane","a workshop making a structure"),
    ("cook","a catering contract"),("balance","a value-added calculation"),
    ("note","which basis would flatter this, and which would be honest?")],3)
S["rf05-f9"]=lambda: f_realia(tbl("Procurement review",
    "This year",
    ["","Entry"],
    [["Four largest contracts","all won by international contractors"],
     ["Could have been unbundled","<b>two of the four</b>"],
     ["Standard payment terms","<b>90 days</b>"],
     ["Local bidders","six"],
     ["Failed pre-qualification","<b>five</b>"],
     ["Reasons for failure","documentation, certification, insurance, audited accounts"],
     ["Failed on capability","<b>none</b>"]],
    note="<b>Five of the six failed on paperwork.</b>"), 620)
S["rf05-f10"]=lambda: f_scene(800,400,
    people=[("nadia",180,180,{}),("haddad",300,176,{}),("bah",620,180,{"seated":True})],
    props=[("desk",260,0,1.0),("data",340,196,0.22),("form",230,198,0.2),
     ("table",580,0,0.9),("invoice",690,198,0.2)],
    clockat=(60,40,22,11,0))
S["rf05-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Statement A",None,
    "<p>Local content performance for the year was 68 percent, exceeding our target of 60 per "
    "cent.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Statement B",None,
    "<p>The <b>definition</b> used. <b>Three bases:</b> 68 on spend, 81 on headcount, about 32 on value "
    "retained. The <b>four components</b> with value added beside each. The <b>pre-qualification "
    "failures by reason</b>. And the <b>payment terms</b>.</p>",None),380)[0:3],
    800,300,"One figure","A definition and three bases")
S["rf05-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Not this",None,
    "<p>Local content is 68 percent. We support local suppliers. Local capability is limited.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("This",None,
    "<p>On a <b>spend basis 68</b>; on a <b>value retained basis about 32</b>. Six local suppliers bid; "
    "<b>five failed pre-qualification on documentation, not capability</b>. Our terms are <b>90 "
    "days</b>. Two of our four largest packages were specified so that no local contractor could "
    "bid.</p>",None),380)[0:3],
    800,300,"Three claims","Three facts")
S["rf05-f13"]=lambda: f_realia(form("Plan your local content note",
    [("Your definition of local",BLANK),("The figure on each basis",BLANK),
     ("The breakdown by component, with value added",BLANK),
     ("The pre-qualification record, by reason",BLANK),("The payment terms",BLANK),
     ("Three requests, none of them a target",BLANK)],
    note="Six boxes. No figure without its basis."), 560)
S["rf05-f14"]=lambda: f_scene(1000,460,
    people=[("ahmad",70,176,{}),("wei",140,172,{}),("tomas",205,176,{}),
     ("nadia",330,172,{}),("haddad",400,176,{}),("nour",470,172,{"seated":True}),
     ("samira",540,176,{"seated":True}),("bah",610,170,{}),("omar",675,172,{}),
     ("yusuf",740,170,{}),("yara",800,172,{}),("ida",855,170,{}),
     ("adeel",910,172,{}),("lars",960,174,{})],
    props=[("crane",40,0,0.9),("racking",170,192,0.22),("desk",320,0,1.05),
     ("board",400,88,0.6),("data",560,196,0.22),("table",700,0,1.0),
     ("form",900,198,0.2),("barcode",960,198,0.2)],
    board=(282,22,200,108,"68, OF WHICH 9",[("agency","34"),("services","25"),("makes","9")]),
    clockat=(500,34,22,12,0))
S["rf05-f15"]=lambda: f_chart([("thirty days or less",2),("sixty days",4),
    ("ninety days",7),("longer",3),("I do not know",6)], unit="operators")
S["rf05-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A target met exactly as written",
    "<p><b>An annual report page</b> with sixty-eight percent on it.</p>"
    "<p><b>A four-part breakdown</b> with nine circled.</p>"
    "<p><b>A pre-qualification failure list</b>: five of six on paperwork.</p>"
    "<p><b>A payment terms page</b> reading ninety days.</p>"
    "<p><b>A photograph of a workshop</b> with one machine in it.</p>"
    "<p><i>The figure is correct, the target was set in good faith, and no definition of</i> local "
    "<i>has ever been published by this company.</i></p>",
    "Seven o'clock. A workshop that waits three months to be paid cannot buy a second machine."), 620)

# ---------------- Unit 6 ----------------
S["rf06-f1"]=lambda: f_icons([("form","a reporting template"),("calendar","a payment schedule"),
    ("logsheet","a government receipt ledger"),("balance","two figures with a gap"),
    ("desk","an independent administrator"),("table","a reconciliation table"),
    ("barrier","a materiality threshold line"),("meeting","a multi-stakeholder meeting"),
    ("petition","a civil society representative"),("idcard","a beneficial ownership register"),
    ("book","a published contract"),("data","production and export data"),
    ("transfer","a subnational transfer"),("review","a validation report"),
    ("timer","data two years old"),("note","published is not spent well")],4)
S["rf06-f2"]=lambda: f_scene(820,420,
    people=[("nadia",120,176,{}),("omar",340,180,{"seated":True}),("bah",420,180,{"seated":True}),
     ("haddad",500,176,{}),("nour",580,180,{"seated":True}),
     ("yusuf",660,180,{"seated":True}),("samira",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("table",780,198,0.2)],
    board=(24,22,216,112,"PAID DEC, RECEIVED JAN",[("five","match"),("one","differs"),("8 days","a year end")]),
    clockat=(258,34,22,9,30))
S["rf06-f3"]=lambda: f_icons([("invoice","a company disclosing payments"),
    ("logsheet","a government disclosing receipts"),("desk","an administrator comparing them"),
    ("meeting","a group agreeing what is in scope"),("book","a published contract"),
    ("note","four requirements, and the third is the hard one")],3)
S["rf06-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published disclosures",
    ["The country","Year reported","How old the data is","Materiality threshold","Contracts published?"],
    blankrows(6,5),
    note="The third column is the one nobody expects. The box at the foot: the most recent data "
    "anybody could find."), 680)
S["rf06-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: what may be published, and who decides",
    "<p style='font-size:12px;color:#6b6861'>Source: the EITI Standard, Extractive Industries "
    "Transparency Initiative, 2023 edition. In our own words.</p>"
    "<p><b>What it is.</b> A standard a <b>country</b> chooses to implement. It establishes a "
    "<b>multi-stakeholder group</b> &mdash; government, companies and civil society &mdash; and "
    "publishes, every year, what companies paid the state and what the state says it received, "
    "reconciled by an <b>independent administrator</b>.</p>"
    "<p><b>The core idea was once radical.</b> A payment has two ends. Publish both, from both sides, "
    "and let anybody compare them.</p>"
    "<p><b>What gets disclosed beyond the payments:</b> the legal and fiscal framework; <b>licenses</b> "
    "and how they were awarded; <b>contracts</b>, now required for agreements from a stated date; "
    "<b>beneficial ownership</b>; state participation; production and export data; revenue allocations "
    "and <b>subnational transfers</b>.</p>"
    "<p><b>What the reconciliation actually finds.</b> <b>Most differences are boring</b>, and that is "
    "the most useful thing to know about the process. They are caused by <b>timing</b> &mdash; paid "
    "before a cut-off, received after it &mdash; by <b>exchange rates</b>, by <b>gross against "
    "net</b>, and by classification. A reconciliation that finds a few timing differences and nothing "
    "else is a good result and reads as dull.</p>"
    "<p>Differences that cannot be explained by any of those are stated as <b>unreconciled "
    "differences</b>, without asserting a cause.</p>"
    "<p><b>Materiality.</b> The group agrees a <b>threshold</b>. That is a practical necessity and also "
    "a decision about what becomes <b>invisible</b>.</p>"
    "<p><b>WHAT DISCLOSURE DOES NOT DO.</b> It is <b>voluntary at country level</b>. It covers what is "
    "<b>in scope</b>. <b>A reconciliation is not an audit</b>: it compares two reported figures and "
    "verifies neither. The data is <b>a year or two old</b>. It cannot create the <b>third chair</b> "
    "where civil space is constrained. <b>And disclosure is not accountability</b> &mdash; publishing "
    "what was paid tells nobody whether it was spent well. <b>Transparency is a precondition. It was "
    "never the thing itself.</b></p>",
    "Find out whether your own country publishes, and how old the latest data is."), 580)
S["rf06-f6"]=lambda: f_realia(tbl("Word study",
    "Disclosure",
    ["The phrase","What it does","An example"],
    [["is disclosed","states that something was published","Six payment streams are disclosed for the year."],
     ["is reported as","reports a figure without adopting it","The payment is reported as having been made on 27 December."],
     ["was reconciled against","names the comparison","Our figure was reconciled against the government receipt."],
     ["remains unreconciled","the honest residue","A difference of one stream remains unreconciled."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>falls below the materiality threshold</i> and <i>is outside the "
    "agreed scope</i>."), 700)
S["rf06-f7"]=lambda: f_realia(tbl("Reconciliation",
    "Six streams, five exact",
    ["Payment stream","Company","Government","Difference","Explanation"],
    [["Royalty","as stated","as stated","<b>nil</b>","&mdash;"],
     ["Profit oil share","as stated","as stated","<b>nil</b>","&mdash;"],
     ["Income tax","as stated","as stated","<b>nil</b>","&mdash;"],
     ["Surface rental","as stated","as stated","<b>nil</b>","&mdash;"],
     ["Training levy","as stated","as stated","<b>nil</b>","&mdash;"],
     ["<b>Signature bonus installment</b>","<b>paid 27 Dec</b>","<b>received 4 Jan</b>","<b>a difference</b>","<b>timing, cut-off</b>"],
     ["<i>Social payment to a district</i>","&mdash;","&mdash;","&mdash;","<b>below the threshold</b>"]],
    note="Five exact matches, independently reported from both sides, did not exist ten years ago."), 680)
S["rf06-f8"]=lambda: f_icons([("calendar","a payment crossing a year end"),
    ("balance","two currencies at different rates"),("tally","a gross figure and a net figure"),
    ("folder","one payment under two headings"),("barrier","a figure below a threshold"),
    ("magnifier","which cause, and can it be explained?")],3)
S["rf06-f9"]=lambda: f_realia(tbl("Reporting pack",
    "Year and template version",
    ["","Entry"],
    [["Streams completed","six"],
     ["Beneficial ownership","<b>one entry incomplete</b>"],
     ["Requested from the partner","<b>twice, on dates recorded</b>"],
     ["Contracts","<b>one unpublished, pending a confidentiality review</b>"],
     ["Latest published year","<b>two years ago</b>"]],
    note="<b>Two gaps and a two-year lag.</b>"), 600)
S["rf06-f10"]=lambda: f_scene(800,400,
    people=[("nadia",180,180,{}),("haddad",300,176,{}),("bah",620,180,{"seated":True})],
    props=[("desk",260,0,1.0),("table",340,198,0.2),("idcard",230,198,0.2),
     ("table",580,0,0.9),("logsheet",690,198,0.2)],
    clockat=(60,40,22,11,0))
S["rf06-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Summary A",None,
    "<p>Transparency obligations for the reporting year have been discharged in accordance with the "
    "requirements.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Summary B",None,
    "<p><b>Five exact matches.</b> <b>One difference, with both dates.</b> One stream <b>below the "
    "threshold</b>, mentioned because its absence is a rule. <b>One incomplete ownership entry</b>, with "
    "the dates requested. And the <b>age of the data</b>.</p>",None),380)[0:3],
    800,300,"Discharged","Five, one, one and a date")
S["rf06-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Not this",None,
    "<p>The reconciliation was successful. Money appears to be missing in one stream. All payments are "
    "disclosed.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("This",None,
    "<p>Five of six reconciled exactly. The sixth differs by a payment <b>made on 27 December and "
    "received on 4 January</b>; the difference <b>is consistent with a cut-off date difference</b>, and "
    "<b>no conclusion is drawn</b> as to whether any amount is missing. One social payment <b>falls "
    "below the materiality threshold</b>.</p>",None),380)[0:3],
    800,300,"Successful, and missing","Both dates, and no conclusion")
S["rf06-f13"]=lambda: f_realia(form("Plan your disclosure note",
    [("The streams reported and reconciled",BLANK),("Each difference, with both dates",BLANK),
     ("Anything below the threshold",BLANK),("Any incomplete entry, with request dates",BLANK),
     ("The age of the data",BLANK),("What you are not concluding",BLANK)],
    note="Six boxes. No assertion that an amount is missing."), 560)
S["rf06-f14"]=lambda: f_scene(1000,450,
    people=[("nadia",60,176,{}),("haddad",130,172,{}),("bah",205,176,{}),
     ("omar",290,172,{}),("nour",365,176,{}),("yusuf",440,172,{"seated":True}),
     ("samira",515,176,{"seated":True}),("yara",590,170,{}),("ahmad",655,172,{}),
     ("adeel",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("wei",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("table",350,198,0.2),
     ("idcard",420,198,0.2),("meeting",550,194,0.2),("table",650,0,1.0),
     ("barrier",860,196,0.2),("timer",930,198,0.2)],
    board=(40,22,206,112,"TWO ENDS OF A PAYMENT",[("company","reports"),("state","reports"),("8 days","apart")]),
    clockat=(262,34,22,12,0))
S["rf06-f15"]=lambda: f_chart([("yes, and I have read it",2),("yes, and I have not",5),
    ("no",5),("I do not know",7),("published but very late",3)], unit="operators")
S["rf06-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "The table is right and the headline is wrong",
    "<p><b>A reconciliation table</b> with five nil differences and one row showing two dates.</p>"
    "<p><b>A reporting pack</b> with an incomplete beneficial ownership entry.</p>"
    "<p><b>A materiality threshold line</b> excluding a district social payment.</p>"
    "<p><b>A report cover</b> dated twenty-two months earlier.</p>"
    "<p><b>A newspaper cutting</b> with the word <i>missing</i> in the headline.</p>"
    "<p><i>Five of six streams match exactly, which is a real achievement. The sixth differs by eight "
    "days across a year end, and both figures are audited and correct.</i></p>",
    "Seven o'clock. The correction never travels as far as the original."), 620)
