# -*- coding: utf-8 -*-
"""Throughline Book 5 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 ----------------
S["pe07-f1"]=lambda: f_icons([("container","loaded at the factory gate"),
    ("ship","goods crossing the ship's rail"),("truck","a road from port to site"),
    ("barrier","a customs post"),("certificate","an insurance certificate"),
    ("crate","a damaged transformer"),("form","a purchase order, three letters"),
    ("noentry","where risk passes"),("statement","a bill of lading"),
    ("stamp","a receipt at a named place")], cols=5)
S["pe07-f2"]=lambda: f_scene(760,380,
    people=[("hana",200,172,{}),("lars",290,170,{})],
    props=[("desk",400,0,1.0),("worldmap",470,146,0.3),("form",580,150,0.24),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"RISK PASSES",
      [("at the rail","yes"),("at the site","no")]),
    clockat=(360,34,22,9,40))
S["pe07-f3"]=lambda: f_icons([("container","at the works"),
    ("truck","handed to the carrier"),("ship","on board"),
    ("stamp","delivered at a named place"),("crate","delivered and unloaded"),
    ("barrier","delivered with duties paid")], cols=3)
S["pe07-f4"]=lambda: f_realia(tbl("Team research","Four orders",
    ["The term used","The place named","The version named","Where risk passed"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the leg nobody insured.</b>"), 660)
S["pe07-f5"]=lambda: f_realia(doc("Lindhurst · commercial note 7",
    "Three transformers, one road",
    "<p><b>The rules.</b> The <b>Incoterms 2020</b> rules, published by the <b>International Chamber "
    "of Commerce</b>, in force from <b>1 January 2020</b>, replacing the <b>2010</b> edition. "
    "<b>Eleven rules in two families.</b></p>"
    + table_html(["For any mode of transport","For sea and inland waterway only"],
      [["<b>EXW</b> ex works","<b>FAS</b> free alongside ship"],
       ["<b>FCA</b> free carrier","<b>FOB</b> free on board"],
       ["<b>CPT</b> carriage paid to","<b>CFR</b> cost and freight"],
       ["<b>CIP</b> carriage and insurance paid to","<b>CIF</b> cost, insurance and freight"],
       ["<b>DAP</b> delivered at place",""],
       ["<b>DPU</b> delivered at place unloaded",""],
       ["<b>DDP</b> delivered duty paid",""]])
    + "<p>Each rule settles <b>who arranges</b> carriage and insurance, <b>who pays</b> which costs, "
    "and <b>where risk passes</b>. <b>The three letters must be followed by a named place and the "
    "edition year.</b></p>"
    "<p style='border:1.5px solid #2f6b6b;padding:8px'><b>Our purchase order said “CIF "
    "site”.</b> CIF is a <b>sea and inland waterway</b> rule: the seller delivers <b>when the "
    "goods are on board</b> and <b>risk passes at the port of shipment</b>; the place named after it "
    "is a <b>destination port</b>. <b>Our site is 40 km inland.</b> A transformer was <b>damaged on "
    "the road between the port and the site</b> — risk having passed on board, some 1,900 km "
    "earlier. The seller's cover under CIF is the <b>minimum level</b>, for the <b>sea leg</b>. "
    "<b>Loss: 186. Uninsured. Entirely ours. The supplier complied exactly.</b></p>"
    + table_html(["Fourteen purchase orders",""],
      [["Named a rule with <b>no version year</b>","<b>9</b>"],
       ["Used a <b>sea rule for an inland delivery</b>","<b>4</b>"],
       ["Said <b>“DDP, duties excluded”</b>","<b>1</b>"],
       ["Named no place at all","<b>2</b>"]])
    + "<p><b>What the rules do not deal with.</b> <b>Ownership or title.</b> <b>The price or payment "
    "terms.</b> <b>The law applicable</b> to the contract, or the forum for disputes. <b>Remedies for "
    "breach.</b> <b>Sanctions, prohibitions or tariffs.</b> <b>They are incorporated into a contract "
    "of sale and are not one.</b></p>",
    "Source: the Incoterms 2020 rules, published by the International Chamber of Commerce, in force "
    "from 1 January 2020 and replacing the 2010 edition. They allocate the arrangement of carriage "
    "and insurance, the division of costs and the point at which risk passes; they are incorporated "
    "into a contract of sale and are not themselves one; and they do not deal with the transfer of "
    "ownership, the price or payment terms, the applicable law, dispute resolution, remedies for "
    "breach, sanctions, prohibitions or tariffs. Nothing here is legal advice."), 640)
S["pe07-f6"]=lambda: f_realia(tbl("Word study","Scope limitation",
    ["Structure","What it does","Example"],
    [["<i>covers … but not</i>","draws the boundary",
      "It <b>covers</b> the sea leg <b>but not</b> the road leg."],
     ["<i>says nothing about</i>","names the gap",
      "The rule <b>says nothing about</b> payment terms."],
     ["<i>is silent on</i>","the formal version",
      "The rules <b>are silent on</b> the transfer of title."],
     ["<i>only to the extent that</i>","limits a liability",
      "Insured <b>only to the extent that</b> the minimum cover applies."],
     ["<i>as far as … is concerned</i>","",""],["<i>subject to</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pe07-f7"]=lambda: f_process(["factory","port of loading","on board · RISK PASSES",
    "port of discharge","road, 40 km · DAMAGE","site"], w=680)
S["pe07-f8"]=lambda: f_icons([("container","a factory gate"),("truck","handed to a carrier"),
    ("ship","a ship's rail"),("crate","a lorry on a road"),
    ("barrier","a customs post"),("certificate","an insurance certificate")],
    cols=3, numbered=False)
S["pe07-f9"]=lambda: f_realia(doc("Purchase order · delivery block",
    "Delivered at Place — Calder valley site, compound gate — Incoterms 2020",
    table_html(["",""],
      [["<b>Risk</b>","passes when the goods are <b>at our disposal on the arriving vehicle</b> at "
        "the named place"],
       ["<b>Carriage</b>","arranged and paid by the <b>seller</b>, to the named place"],
       ["<b>Unloading</b>","<b>ours</b>"],
       ["<b>Export clearance</b>","<b>seller</b>"],
       ["<b>Import clearance and duties</b>","<b>ours</b>"],
       ["<b>Insurance</b>","seller to the named place; <b>we carry separate cover for unloading and "
        "on-site handling</b>"]])
    + "<p style='font-size:15px'><b>TITLE AND PAYMENT TERMS ARE DEALT WITH IN THE CONDITIONS OF "
    "CONTRACT, NOT HERE.</b></p>",
    "Replacing “CIF site”. A rule, a named place and an edition year on every order; and "
    "for an inland destination, only a rule from the any-mode family."), 620)
S["pe07-f10"]=lambda: f_scene(860,400,
    people=[("hana",110,174,{}),("lars",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("form",250,148,0.24),("crate",360,148,0.26),
     ("certificate",520,150,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"CIF SITE",
      [("rule ends at","a port"),("our site","40 km inland")]),
    clockat=(700,34,22,10,0))
S["pe07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Block A","Three letters and a word",
      "<p style='font-size:20px;text-align:center'><b>CIF site</b></p>"
      "<p style='font-size:12px;color:#6b6861'>No port. No version. A journey the rule does not "
      "reach.</p>"), 380),
    lambda w,h: f_realia(doc("Block B","A rule, a place, a year",
      "<p><b>Delivered at Place — Calder valley site, compound gate — Incoterms 2020</b>, "
      "with a risk line and an insurance line.</p>"), 380),
    w=820, h=300, lt="INCOMPLETE", rt="COMPLETE")
S["pe07-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","The order",
      "<p><i>CIF site. Three transformers.</i></p>"), 380),
    lambda w,h: f_realia(doc("After","The amendment",
      "<p><i>Delivered at Place, named place, Incoterms 2020; risk passes on the arriving vehicle; "
      "and four matters this term does not deal with.</i></p>"), 380),
    w=820, h=300, lt="186 LOST", rt="NOTHING LOST")
S["pe07-f13"]=lambda: f_realia(form("Delivery-term planner",
    [("The rule",""),("The named place",""),("The version year",""),
     ("Where risk passes",""),("Who pays for each leg",""),
     ("What the term does not deal with","")],
    note="Six boxes. Hand it to a partner; they ask which leg is uninsured."), 560)
S["pe07-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("lars",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("oksana",370,176,{"seated":True}),
     ("bah",445,172,{}),("anders",520,176,{"seated":True}),("sofia",595,170,{}),
     ("wei",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("certificate",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"NOT COVERED",
      [("title, price","✕"),("law, remedies","✕")]),
    clockat=(278,34,22,10,0))
S["pe07-f15"]=lambda: f_chart([("yes, always",3),("sometimes",7),("no",12),
    ("we use no delivery terms",5),("I have never looked",8)])
S["pe07-f16"]=lambda: f_realia(doc("On a desk in November",
    "What was on it at six o'clock",
    "<p><b>A purchase order</b> reading CIF site.</p>"
    "<p><b>A photograph</b> of a damaged transformer on a low-loader.</p>"
    "<p><b>An insurance certificate</b> covering a sea leg only.</p>"
    "<p><b>A template drop-down list</b> of three terms, with no years.</p>"
    "<p><b>A note of three sentences.</b> <i>Three letters settle carriage, cost and the point where "
    "risk passes, and they are silent on ownership, payment, governing law and remedies, which are "
    "the four things anybody ever argues about. A delivery term can be wrong for eleven months with "
    "no symptom, because nothing goes wrong while nothing goes wrong, and then the whole error "
    "arrives at once on a wet road in our own country. The fix was two lines in a template and the "
    "deletion of a drop-down list, and it took an afternoon, which is the part I find hardest to "
    "write down.</i></p>",
    "Six o'clock. Nine orders with no year, four with a sea rule inland, one hundred and eighty-six "
    "thousand."), 620)

# ---------------- Unit 8 ----------------
S["pe08-f1"]=lambda: f_icons([("envelope","four sealed tenders"),("spreadsheet","a price schedule"),
    ("folder","a quality submission"),("scales","a scoring sheet with weights"),
    ("stars","four identical full marks"),("noentry","a useless criterion"),
    ("tally","a weighted total"),("clipboard","a ranked list"),
    ("note","a previous tender copied"),("signature","an award recommendation")], cols=5)
S["pe08-f2"]=lambda: f_scene(760,380,
    people=[("lars",200,172,{}),("okonjo",290,170,{})],
    props=[("desk",400,0,1.0),("spreadsheet",470,150,0.24),("envelope",570,152,0.22),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"THE WEIGHTING",
      [("price","90%"),("quality","10%")]),
    clockat=(360,34,22,3,5))
S["pe08-f3"]=lambda: f_icons([("spreadsheet","price only"),("badge","price and preferences"),
    ("scales","price and quality"),("clipboard","price, quality and preferences"),
    ("signature","a weighting chosen"),("note","a weighting inherited")], cols=3)
S["pe08-f4"]=lambda: f_realia(tbl("Team research","Four weightings",
    ["The weighting","Who chose it","The spread of prices",
     "Could quality change the answer?"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the criterion everybody passed.</b>"), 660)
S["pe08-f5"]=lambda: f_realia(doc("Lindhurst · procurement note 8",
    "The control system tender",
    "<p><b>The standard.</b> <b>ISO 10845-1:2020</b>, <i>Construction procurement — Part 1: "
    "Processes, methods and procedures</i>, which sets out how an organization establishes a "
    "procurement system intended to be <b>fair, equitable, transparent, competitive and "
    "cost-effective</b>.</p>"
    + table_html(["Method","What is scored"],
      [["<b>1</b>","the <b>financial offer</b> only"],
       ["<b>2</b>","the financial offer and <b>preferences</b>"],
       ["<b>3</b>","the financial offer and <b>quality</b>"],
       ["<b>4</b>","the financial offer, <b>quality</b> and <b>preferences</b>"]])
    + "<p><b>We used method 3. The standard gives the method and the arithmetic; the employer gives "
    "the weighting and the criteria.</b></p>"
    + table_html(["Bidder","Price (rel.)","Quality /100","Weighted total"],
      [["<b>W</b>","<b>100.0</b>","69","<b>96.9</b>"],["X","97.8","73","95.3"],
       ["Y","95.6","84","94.4"],["Z","94.1","<b>91</b>","94.0"]])
    + "<p><b>The prices spanned about six per cent; the quality scores spanned twenty-two points.</b> "
    "<b>At a ten per cent weighting, 22 points of quality move a total by 2.2; six per cent of price "
    "moves it by 5.4.</b> <b>The quality submission was arithmetically incapable of changing the "
    "result</b>, and we spent <b>eleven weeks</b> on it.</p>"
    "<p style='border:1.5px solid #2f6b6b;padding:8px'><b>Twenty dead points.</b> One criterion worth "
    "<b>20 of the 100</b> asked whether the bidder has a health and safety policy. <b>All four scored "
    "full marks.</b> <b>With those points removed, the effective quality weighting was 8 per cent, "
    "not 10.</b></p>"
    + table_html(["Bidder","at 90/10","at 70/30"],
      [["<b>W</b>","<b>96.9</b>","79.3"],["X","95.3","90.4"],["Y","94.4","92.1"],
       ["<b>Z</b>","94.0","<b>92.2</b>"]])
    + "<p><b>At seventy-thirty the ranking reverses almost completely.</b> <b>The weighting chose the "
    "winner, and it was carried over from the invitation to tender for a supply of pipe.</b></p>",
    "Source: ISO 10845-1:2020, Construction procurement — Part 1: Processes, methods and "
    "procedures, which specifies processes, methods and procedures for a procurement system intended "
    "to be fair, equitable, transparent, competitive and cost-effective, including methods of "
    "evaluating tender offers. The standard does not prescribe an organization's procurement policy, "
    "its weightings or its evaluation criteria, and does not address the terms of any resulting "
    "contract."), 640)
S["pe08-f6"]=lambda: f_realia(tbl("Word study","Weighting and evaluation",
    ["Structure","What it states","Example"],
    [["<i>weighted at</i>","the proportion","Quality is <b>weighted at</b> 10 per cent."],
     ["<i>carries … points</i>","the allocation inside a part",
      "The method statement <b>carries 30 points</b>."],
     ["<i>accounts for</i>","the share of the total",
      "Price <b>accounts for</b> ninety per cent of the award."],
     ["<i>on a weighting of</i>","the pair of proportions",
      "<b>On a weighting of</b> 70/30, the ranking reverses."],
     ["<i>discriminates between</i>","",""],["<i>all other things being equal</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pe08-f7"]=lambda: f_chart([("W · at 90/10",969),("X · at 90/10",953),
    ("Y · at 90/10",944),("Z · at 90/10",940),("Z · at 70/30",922),
    ("Y · at 70/30",921),("X · at 70/30",904),("W · at 70/30",793)],
    unit="weighted total ×10")
S["pe08-f8"]=lambda: f_icons([("envelope","four sealed tenders"),
    ("spreadsheet","a price schedule"),("folder","a quality submission"),
    ("scales","a scoring sheet"),("stars","four full marks"),
    ("clipboard","a ranked list")], cols=3, numbered=False)
S["pe08-f9"]=lambda: f_realia(doc("Evaluation summary · control system tender",
    "Method 3 · weighting 90 per cent price, 10 per cent quality",
    table_html(["Bidder","Price (rel.)","Quality /100","90/10","70/30"],
      [["<b>W</b>","<b>100.0</b>","69","<b>96.9</b>","79.3"],
       ["X","97.8","73","95.3","90.4"],["Y","95.6","84","94.4","92.1"],
       ["Z","94.1","<b>91</b>","94.0","<b>92.2</b>"]])
    + "<p><b>Criteria that discriminated:</b> 2 of 6. <b>One criterion worth 20 points: all four "
    "scored full marks.</b> <b>Effective quality weighting: 8 per cent.</b></p>"
    "<p style='font-size:15px'><b>THE WEIGHTING WAS NOT CHOSEN FOR THIS TENDER.</b></p>",
    "Carried over from the invitation to tender for a supply of pipe. Our own design-services "
    "weighting is 70/30."), 620)
S["pe08-f10"]=lambda: f_scene(860,400,
    people=[("lars",110,174,{}),("okonjo",320,176,{"seated":True}),
     ("hana",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("envelope",250,150,0.22),("scales",360,148,0.24),
     ("note",520,150,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"WHO CHOSE THIS",
      [("used","90/10"),("our policy","70/30")]),
    clockat=(700,34,22,3,30))
S["pe08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Recommendation A","Best value",
      "<p><i>Bidder W offered the best value overall and is recommended for award.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Unanswerable by an unsuccessful bidder.</p>"), 380),
    lambda w,h: f_realia(doc("Recommendation B","With the arithmetic",
      "<p><b>Six per cent cheaper; quality weighted at 10 per cent; 22 points of quality moved the "
      "totals by 2.2; at 70/30 the ranking reverses.</b></p>"), 380),
    w=820, h=300, lt="A VERDICT", rt="AN EXPLANATION")
S["pe08-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","One paragraph",
      "<p><i>Following a thorough evaluation, W is recommended.</i></p>"), 380),
    lambda w,h: f_realia(doc("After","Two weightings in one table",
      "<p>Four bidders, both weightings, the dead criterion named, and where the weighting came "
      "from.</p>"), 380),
    w=820, h=300, lt="THOROUGH", rt="CHECKABLE")
S["pe08-f13"]=lambda: f_realia(form("Evaluation planner",
    [("The method",""),("The weighting, and who set it",""),("The spread of prices",""),
     ("The spread of quality scores",""),("Which criteria discriminated",""),
     ("The result at a second weighting","")],
    note="Six boxes. Hand it to a partner; they ask which criterion everybody passed."), 560)
S["pe08-f14"]=lambda: f_scene(1000,450,
    people=[("lars",60,176,{}),("okonjo",135,172,{}),("hana",210,176,{"seated":True}),
     ("nkemelu",290,172,{"seated":True}),("oksana",370,176,{"seated":True}),
     ("anders",445,172,{}),("wei",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("scales",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"WHO CHOSE THIS",
      [("used","90/10"),("policy","70/30")]),
    clockat=(278,34,22,3,30))
S["pe08-f15"]=lambda: f_chart([("yes",4),("no",11),("I do not know",10),
    ("we do not score quality",5),("we have never checked",5)])
S["pe08-f16"]=lambda: f_realia(doc("On a desk in January",
    "What was on it at seven o'clock",
    "<p><b>Four tender summaries.</b></p>"
    "<p><b>A scoring sheet</b> with a weighting at the top.</p>"
    "<p><b>A page from the previous pipe tender</b>, the same weighting circled.</p>"
    "<p><b>A design-services policy</b> showing seventy-thirty.</p>"
    "<p><b>Two ranked lists</b> with reversed orders.</p>"
    "<p><b>A note of three sentences.</b> <i>I am not claiming the wrong firm won, because a "
    "weighting is a judgment about what matters and not a measurement, and the firm we appointed has "
    "performed perfectly well. I am claiming that nobody in that room could have told you why it "
    "won, and that the honest answer — six per cent cheaper — is not the basis we "
    "published to four companies who each spent real money answering it. Re-running the same scores "
    "at our own design weighting took twenty minutes, which is the whole of my case and also the "
    "reason nobody ever does it.</i></p>",
    "Seven o'clock. Ninety-ten, seventy-thirty, twenty dead points."), 620)

# ---------------- Unit 9 ----------------
S["pe09-f1"]=lambda: f_icons([("book","a guidance document"),("signature","a clause saying shall"),
    ("note","a clause saying should"),("scales","a threshold on a form"),
    ("certificate","a certificate of recycled content"),("badge","an emissions plate"),
    ("stamp","a quarterly declaration"),("stars","marks for a recommendation"),
    ("truck","eleven hire firms, two compliant"),("calendar","a percentage with a date")],
    cols=5)
S["pe09-f2"]=lambda: f_scene(760,380,
    people=[("hana",200,172,{}),("lars",290,170,{})],
    props=[("desk",400,0,1.0),("book",470,150,0.24),("note",570,150,0.22),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"WHICH WORD",
      [("should","6"),("shall","0")]),
    clockat=(360,34,22,4,20))
S["pe09-f3"]=lambda: f_icons([("scales","a threshold figure"),
    ("certificate","the means of proof"),("noentry","a consequence"),
    ("stars","a scored recommendation"),("truck","two suppliers of eleven"),
    ("calendar","a percentage with a date")], cols=3)
S["pe09-f4"]=lambda: f_realia(tbl("Team research","Four clauses",
    ["The clause","Shall or should","The threshold and proof","The consequence"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the clause that has never been enforced.</b>"), 660)
S["pe09-f5"]=lambda: f_realia(doc("Lindhurst · commercial note 9",
    "Six clauses and no obligations",
    "<p><b>The document.</b> <b>ISO 20400:2017</b>, <i>Sustainable procurement — Guidance</i>. "
    "<b>It states of itself that it is not a management system standard and that it is not intended "
    "for certification</b>, and it is written in the language of recommendations throughout.</p>"
    + table_html(["Clause","Wording begins","Scored?"],
      [["S1","the supplier <b>should</b> demonstrate a commitment to sustainable practice",
        "<b>yes, 10 points</b>"],
       ["S2","the supplier <b>should</b> minimize waste","<b>yes, 5</b>"],
       ["S3","the supplier <b>should</b> consider the whole life of materials","no"],
       ["S4","the supplier <b>should</b> engage its supply chain on labor conditions",
        "<b>yes, 10</b>"],
       ["S5","the supplier <b>should</b> reduce emissions where practicable","<b>yes, 5</b>"],
       ["S6","the supplier <b>should</b> promote local employment","no"]])
    + "<p><b>Clauses using <i>shall</i>: 0. Using <i>should</i>: 6. Carrying marks: 4, worth 30 of "
    "100 quality points. Ever enforced: 0.</b></p>"
    + table_html(["A requirement needs","Example"],
      [["<b>a threshold</b>","<b>not less than 90 per cent</b> recycled content"],
       ["<b>a means of proof</b>","<b>a mill certificate with each delivery</b>"],
       ["<b>a consequence</b>","<b>failing which the delivery is rejected</b>"]])
    + "<p style='border:1.5px solid #2f6b6b;padding:8px'><b>My own drafting error.</b> I wrote: <i>all "
    "diesel plant shall meet the named emissions stage.</i> <b>Of the eleven plant hire firms in this "
    "region, two can comply.</b> <b>An unachievable requirement is waived at the first refusal, and a "
    "requirement waived once is gone.</b> <b>Rewritten after eleven telephone calls: not less than 60 "
    "per cent of plant hours, rising to 90 per cent from month 18, evidenced by hire records, failing "
    "which the hours are not certified.</b></p>",
    "Source: ISO 20400:2017, Sustainable procurement — Guidance. It provides guidance on "
    "integrating sustainability within procurement; states that it is not a management system "
    "standard and is not intended for certification; is written as recommendations rather than "
    "requirements; and does not establish thresholds, metrics, targets or definitions of sustainable "
    "goods and services."), 640)
S["pe09-f6"]=lambda: f_realia(tbl("Word study","Guidance and requirement",
    ["Word","What it creates","Example"],
    [["<i>shall</i>","an obligation that can be breached",
      "The supplier <b>shall</b> provide a mill certificate."],
     ["<i>should</i>","a recommendation that cannot",
      "The supplier <b>should</b> minimize waste."],
     ["<i>may</i>","a permission","The engineer <b>may</b> inspect the records."],
     ["<i>is encouraged to</i>","nothing enforceable",
      "The supplier <b>is encouraged to</b> report annually."],
     ["<i>must be able to demonstrate</i>","",""],["<i>failing which</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pe09-f7"]=lambda: f_chart([("S1 · marks, no obligation",10),
    ("S4 · marks, no obligation",10),("S2 · marks, no obligation",5),
    ("S5 · marks, no obligation",5),("S3 · no marks",0),
    ("S6 · no marks",0)], unit="quality marks")
S["pe09-f8"]=lambda: f_icons([("book","a guidance page"),("signature","a shall clause"),
    ("note","a should clause"),("scales","a threshold"),
    ("certificate","a certificate"),("stamp","a quarterly declaration")],
    cols=3, numbered=False)
S["pe09-f9"]=lambda: f_realia(tbl("Requirement schedule S · replacing S1 to S6",
    "Three requirements, each in four parts",
    ["#","Obligation","Threshold","Proof","Consequence"],
    [["S1","reinforcement <b>shall</b> contain recycled content","<b>not less than 90 %</b>",
      "<b>mill certificate with each delivery</b>","<b>delivery rejected</b>"],
     ["S2","plant hours <b>shall</b> be worked by plant at the named stage",
      "<b>60 %</b>, rising to <b>90 % from month 18</b>",
      "<b>hire records with each application</b>","<b>those hours not certified</b>"],
     ["S3","the supplier <b>shall</b> appoint a named individual for labor conditions",
      "<b>one named person, in writing</b>","<b>quarterly signed declaration</b>",
      "<b>no further application certified</b>"]],
    note="<b>Thresholds taken from eleven telephone calls, not from preference.</b> Nine of eleven "
    "suppliers can meet 60 per cent of hours now; seven can reach 90 per cent within eighteen "
    "months."), 700)
S["pe09-f10"]=lambda: f_scene(860,400,
    people=[("hana",110,174,{}),("lars",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("book",250,148,0.24),("note",360,150,0.22),
     ("truck",520,148,0.24),("shelf",760,92,0.5)],
    board=(40,18,230,120,"FOUR PARTS",
      [("marks given","30"),("obligations","0")]),
    clockat=(700,34,22,4,30))
S["pe09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Set A","Six recommendations",
      "<p>Six clauses beginning <i>the supplier should</i>, four of them carrying marks.</p>"
      "<p style='font-size:12px;color:#6b6861'>Nothing a supplier is obliged to do.</p>"), 380),
    lambda w,h: f_realia(doc("Set B","Three requirements",
      "<p>Three clauses with a threshold, a means of proof, a consequence and a note on how many "
      "suppliers can comply.</p>"), 380),
    w=820, h=300, lt="SHOULD", rt="SHALL")
S["pe09-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","All plant",
      "<p><i>All diesel plant on site shall meet the named emissions stage.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Two of eleven firms can comply.</p>"), 380),
    lambda w,h: f_realia(doc("After","A percentage and a date",
      "<p><i>Not less than 60 per cent of plant hours, rising to 90 per cent from month 18, "
      "evidenced by hire records.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Nine of eleven can comply now.</p>"), 380),
    w=820, h=300, lt="WAIVED", rt="ENFORCED")
S["pe09-f13"]=lambda: f_realia(form("Requirement planner",
    [("The obligation",""),("The threshold",""),("The means of proof",""),
     ("The consequence",""),("How many suppliers can comply",""),
     ("The date of any rising threshold","")],
    note="Six boxes. Hand it to a partner; they ask how many suppliers can comply."), 560)
S["pe09-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("lars",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("bah",290,172,{"seated":True}),("okonjo",370,176,{"seated":True}),
     ("oksana",445,172,{}),("anders",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("truck",548,196,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"WHICH WORD DID WE USE",
      [("shall","✓"),("should","✕")]),
    clockat=(278,34,22,4,30))
S["pe09-f15"]=lambda: f_chart([("yes, more than once",2),("once",4),("never",15),
    ("we have no such clause",6),("I do not know",8)])
S["pe09-f16"]=lambda: f_realia(doc("On a desk in March",
    "What was on it at six o'clock",
    "<p><b>A guidance document</b> open at a page of recommendations.</p>"
    "<p><b>Standard conditions</b> with six clauses marked <i>should</i>.</p>"
    "<p><b>An evaluation sheet</b> awarding thirty marks.</p>"
    "<p><b>A list of eleven hire firms</b> with two ticked.</p>"
    "<p><b>A rewritten schedule</b> of three requirements.</p>"
    "<p><b>A note of three sentences.</b> <i>The guidance document was honest about itself on its "
    "first page and we pasted its recommendations into a contract, which is the entire failure and it "
    "belongs to us rather than to the standard. Awarding thirty marks for undertakings nobody can "
    "breach is the part a bidder would be entitled to complain about, because four companies paid "
    "people to write answers we had no means of testing. My own draft required something two "
    "suppliers in eleven could do, and sixty per cent that is enforced is worth more than a hundred "
    "per cent that is waived in week three, which took me eleven telephone calls to "
    "understand.</i></p>",
    "Six o'clock. Six clauses, thirty marks, two suppliers of eleven."), 620)
