# -*- coding: utf-8 -*-
"""Clearline Book 2 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · Reading the Contract ----------------
S["p04-f1"]=lambda: f_icons([("essay","a contract"),("magnifier","a clause"),
    ("calendar","thirty days"),("handshake","agreement"),("stamp","dated"),
    ("balance","two sides"),("scissors","a deleted sentence"),
    ("signature","two signatures"),("clock","a time limit"),("envelope","notice")], cols=5)
S["p04-f2"]=lambda: f_scene(920,430, people=[("hanna",300,172,{}),
    ("okonjo",450,182,{"seated":True}),("marek",540,180,{"seated":True}),
    ("paula",630,170,{"seated":True}),("yara",720,172,{"seated":True})],
    board=(760,24,150,110,"CLAUSE 11.3",[("notice","4 months"),("renewal","automatic")]),
    props=[("table",420,250,1.4),("essay",350,196,0.4),("computer",600,196,0.4)])
S["p04-f3"]=lambda: f_icons([("essay","shall"),("note","may"),("clock","within"),
    ("noentry","unless"),("worried","reasonable — ?"),
    ("timer","promptly — ?")], cols=3)
S["p04-f4"]=lambda: f_realia(tbl("Twenty minutes, three rows","Read it as the person who has to do it",
    ["What it says","Where it is","What it means for me"],
    [["Payment terms","",""],["Notice period","",""],["One obligation on us","",""]],
    note="Set a timer. Twenty minutes is enough for three rows and more than most people spend."),
    520)
S["p04-f5"]=lambda: f_realia(doc("Supply agreement &middot; Lindmark Freight and Harbour Mutual",
    "page 3 of 14 &middot; agreement ref LF-HM-2026",
    "<p><b>11. Term and termination</b></p>"
    "<p>11.1 This Agreement commences on the <b>Commencement Date</b> and continues for an "
    "initial period of twelve months.</p>"
    "<p>11.2 Thereafter it renews automatically for successive periods of twelve months unless "
    "terminated under clause 11.3.</p>"
    "<p style='background:#fff3cf'>11.3 Either party may terminate by giving not less than "
    "<b>four months'</b> written notice, served by registered post and quoting this clause, "
    "such notice to expire on an anniversary of the Commencement Date.</p>"
    "<p><b>12. Payment</b></p>"
    "<p style='background:#fff3cf'>12.1 The Customer shall pay each invoice within "
    "<b>thirty days of the date of invoice</b>. Interest accrues on overdue sums at 4% above "
    "base rate.</p>"
    "<p>12.2 The Supplier may suspend the Services if any sum is outstanding for more than "
    "sixty days, having first given fourteen days' written warning.</p>",
    "Two shaded clauses. Together they decide when you must pay and when you can leave."))
S["p04-f6"]=lambda: f_realia(tbl("Word study","Six words, by strength",
    ["Word","What it does","In a clause"],
    [["<i>shall</i> / <i>must</i>","obligation &mdash; no choice",
      "The Customer <b>shall</b> pay within thirty days."],
     ["<i>have to</i>","obligation from outside","We <b>have to</b> keep it for five years."],
     ["<i>should</i>","advice &mdash; <b>not</b> a promise",
      "The Supplier <b>should</b> endeavour to deliver."],
     ["<i>may</i>","permission, for them not you",
      "The Supplier <b>may</b> suspend the Services."],
     ["<i>needn't</i>","not necessary","You <b>needn't</b> countersign."],
     ["<i>don't have to</i>","not necessary","We <b>don't have to</b> accept a part shipment."]],
    note="A clause with <i>should</i> in it has promised you nothing at all."), 540)
S["p04-f7"]=lambda: f_part("57 days from invoice to payment",
    [("36 days agreed",36,BLUE),("21 days after the deadline",21,AMBER)], w=520)
S["p04-f8"]=lambda: f_icons([("calendar","thirty days"),("signature","the signature page"),
    ("timer","“promptly”"),("fireexit","how we get out"),
    ("balance","who carries the risk"),("handshake","agreed — and read?")], cols=3)
S["p04-f9"]=lambda: f_realia(tbl("Contract summary &middot; made in-house",
    "LF-HM-2026 &middot; one page, by H. Lindqvist",
    ["Question","Answer","Clause"],
    [["What we must do","Pay each invoice 30 days from invoice date","12.1"],
     ["What they must do","Supply to the specification in Schedule 1","4.2"],
     ["How long we have","30 days, from the <b>invoice</b> date, not delivery","12.1"],
     ["How long they have","14 days' warning before suspending","12.2"],
     ["How either side gets out","4 months' notice, registered post, on an anniversary","11.3"],
     ["<b>What is unclear</b>",
      "<b>“reasonable endeavours” in 4.4 &mdash; nobody can price it</b>","<b>4.4</b>"]],
    note="Six rows. It took forty minutes and it has been read by everybody since."), 560)
S["p04-f10"]=lambda: f_scene(900,420, people=[("hanna",300,172,{}),
    ("okonjo",480,182,{"seated":True}),("marek",580,180,{"seated":True,"smile":False})],
    props=[("table",420,250,1.4),("essay",350,196,0.42),("computer",520,196,0.42)])
S["p04-f11"]=lambda: f_realia(tbl("One clause, two draftings","Clause 12.1",
    ["Their draft","Ours"],
    [["“within thirty days”<br><br>"
      "11.3 &mdash; notice “at any time”<br>"
      "4.4 &mdash; “reasonable endeavours”",
      "“within thirty days <b>of the date of invoice</b>”<br><br>"
      "11.3 &mdash; notice <b>to expire on an anniversary</b><br>"
      "4.4 &mdash; <b>“within 2 working days”</b>"]],
    note="Thirty days from <i>what</i>? Delivery and invoice can be eleven days apart."), 520)
S["p04-f12"]=lambda: f_realia(doc("Two internal notes on the same contract", None,
    "<p><b>A.</b> I've looked at the Harbour Mutual contract. It seems fairly standard. The "
    "payment terms are about a month and there is a notice period if we want to end it. I don't "
    "see anything unusual.</p>"
    "<p style='font-size:12px;color:#6b6861'>No clause numbers. Nothing anybody can act on.</p>"
    "<p style='margin-top:14px'><b>B.</b> Two clauses need changing before we sign.</p>"
    "<p><b>12.1</b> says payment “within thirty days” with no starting point. Their "
    "invoices are dated on despatch, which for us is up to eleven days before delivery. "
    "Ask for: <i>“within thirty days of delivery”</i>.</p>"
    "<p><b>11.3</b> requires four months' notice expiring on an anniversary. In practice that "
    "means the real decision date is <b>eight months</b> before we want to leave. Ask for: "
    "<i>“three months' notice, expiring at any time”</i>. If they refuse, we must "
    "diarise the decision date, and I have.</p>"))
S["p04-f13"]=lambda: f_realia(tbl("","Clause planner",
    ["Clause no. and what it says","In plain words","What it means for us",
     "The exact words I would ask for"],
    [["","","",""],["","","",""]]), 540)
S["p04-f14"]=lambda: f_scene(1000,450, people=[("hanna",150,172,{"seated":True}),
    ("okonjo",240,182,{"seated":True}),("marek",330,180,{"seated":True}),
    ("yara",420,172,{"seated":True}),("paula",530,170,{}),("nour",620,168,{}),
    ("sofia",710,172,{}),("wei",800,170,{}),("ines",890,172,{}),("ravi",960,176,{})],
    props=[("table",200,250,1.5),("essay",280,196,0.4),("cafe",600,205,0.6),
    ("computer",760,140,0.45),("door",60,80,0.9)],
    board=(480,24,160,100,"PAGE 3",[("12.1","30 days"),("11.3","4 months")]))
S["p04-f15"]=lambda: f_chart([("the money parts",8),("the first page",5),
    ("all of it",4),("I do not remember",3),("none of it",2)])
S["p04-f16"]=lambda: f_scene(860,410, people=[("hanna",300,172,{"seated":True,"smile":False})],
    props=[("desk",220,0,1.3),("essay",300,200,0.44),("computer",400,150,0.5),
    ("invoice",480,205,0.4),("lamp",150,120,0.55)],
    window_=(640,56,140,96), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 5 · Quality and Complaints ----------------
S["p05-f1"]=lambda: f_icons([("carton","a crushed corner"),("magnifier","a visible mark"),
    ("form","non-conformance"),("danger","quarantined"),("review","a seal checked"),
    ("truck","goods returned"),("invoice","a credit note"),("signature","a rejection"),
    ("packet","a replacement"),("meeting","inspected together")], cols=5)
S["p05-f2"]=lambda: f_scene(900,420, people=[("ravi",330,176,{})],
    props=[("desk",180,0,1.3),("carton",250,0,0.6),("carton",430,0,0.6),
    ("tray",520,205,0.55),("camera",600,200,0.4)],
    board=(740,24,160,110,"FROM THE CUSTOMER",[("photo","crushed corner")]))
S["p05-f3"]=lambda: f_icons([("iron","a manufacturing fault"),("truck","transport damage"),
    ("carton","the wrong item"),("late","a late delivery"),
    ("racking","their own storage"),("review","two people, two theories")], cols=3)
S["p05-f4"]=lambda: f_process(["complaint received","acknowledged, same day",
    "evidence gathered","cause found","replacement sent","change made"], w=640)
S["p05-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; credit note",
    "CN-0912 &middot; against invoice 4471 &middot; 18 March 2026",
    table_html(["Qty","Description","Amount"],
      [["120","Carton 180&times;180&times;240 &mdash; damaged in transit","(165.60)"]])
    + "<p><b>Reason</b> 120 cartons of 4,000 crushed on one corner. Cause: single-corner "
    "stacking on the inbound trailer, confirmed by the loading photographs.</p>"
    "<p><b>Replacement</b> 120 cartons despatched 18 March, no charge, arriving 20 March.</p>",
    "This credit will be applied to your next statement. No action is needed from you."))
S["p05-f6"]=lambda: f_realia(tbl("Word study","The passive, six tenses",
    ["Tense","Example","The auxiliary"],
    [["present simple","The batch <b>is</b> inspected on arrival.","<i>is / are</i>"],
     ["present continuous","The cartons <b>are being</b> replaced today.","<i>are being</i>"],
     ["past simple","120 cartons <b>were</b> damaged in transit.","<i>was / were</i>"],
     ["present perfect","A credit note <b>has been</b> issued.","<i>has been</i>"],
     ["future","The replacement <b>will be</b> despatched today.","<i>will be</i>"],
     ["modal","The load <b>must be</b> corner-stacked.","<i>must be</i>"]]), 520)
S["p05-f7"]=lambda: f_part("One hundred invoices in Europe",
    [("paid late",19,AMBER),("never paid",5,PLUM),("paid on time",76,BLUE)], w=540)
S["p05-f8"]=lambda: f_icons([("carton","a crushed carton"),("flashcard","the wrong color"),
    ("truck","a late van"),("packet","a missing part"),
    ("barcode","a label on the wrong product"),("iron","a machine that stopped")], cols=3)
S["p05-f9"]=lambda: f_realia(form("Customer complaint &middot; received by R. Menon",
    [("Customer","Harbour Mutual"),("Order reference","PO-5512 / inv 4471"),
     ("Date received","16 March 2026, 09:40"),
     ("The problem","120 of 4,000 cartons crushed on one corner. Noticed at goods-in, "
      "not on the delivery note. Photographs attached (3)."),
     ("Photograph ref","HM-160326-a/b/c"),
     ("What the customer wants","&#9744; refund &nbsp; <b>&#9745; replacement</b> &nbsp; "
      "&#9744; credit against next order"),
     ("Signature","R. Menon")],
    note="Taken by telephone and read back to the customer before it was filed."), 540)
S["p05-f10"]=lambda: f_scene(900,420, people=[("ravi",300,176,{}),("sofia",650,172,{})],
    props=[("desk",180,0,1.3),("carton",260,0,0.6),("computer",430,150,0.5),
    ("camera",520,200,0.38)])
S["p05-f11"]=lambda: f_realia(tbl("Two replies","The same 120 cartons",
    ["Explains whose fault it was","Leads with the fix"],
    [["Three paragraphs on the carrier's loading practice, our inspection regime and "
      "the difficulty of proving when damage occurs&hellip;<br><br>"
      "&hellip;we would of course be happy to discuss a replacement.<br><br>"
      "<i>The customer reads 180 words before anything happens.</i>",
      "<b>120 replacement cartons left here this morning and arrive on Thursday.</b> "
      "A credit note for 165.60 is attached.<br><br>"
      "The cause was single-corner stacking on the inbound trailer. From Monday every "
      "inbound pallet is photographed at the dock before it is broken down.<br><br>"
      "<i>The fix, the money, the cause, the change. Sixty words.</i>"]]), 540)
S["p05-f12"]=lambda: f_realia(doc("Two complaint replies", None,
    "<p><b>A.</b> Thank you for your email. As you will appreciate, damage of this kind can "
    "occur at several points in the chain, and it is not always possible to establish "
    "responsibility with certainty. Our own inspection procedures are robust and the carrier has "
    "its own obligations&hellip; We would of course be happy to discuss a resolution.</p>"
    "<p style='font-size:12px;color:#6b6861'>Four sentences, no action, and the customer is now "
    "an opponent.</p>"
    "<p style='margin-top:14px'><b>B.</b> 120 replacement cartons were despatched this morning "
    "and will reach you on Thursday 20 March. Credit note CN-0912 for 165.60 is attached; no "
    "action is needed from you.</p>"
    "<p>The cause was corner stacking on the inbound trailer. From Monday 24 March every inbound "
    "pallet is photographed at the dock before it is broken down, so that damage is attributed "
    "the day it arrives rather than three weeks later.</p>"
    "<p>I am sorry you had to find this at goods-in. If any of the replacements are marked, "
    "photograph them and call me directly.</p>"))
S["p05-f13"]=lambda: f_realia(tbl("","Reply planner",
    ["What is true","What I have already done","The cause, in one sentence","What is changing"],
    [["","","",""],["","","",""]],
    note="<b>What I am NOT going to say:</b>"), 520)
S["p05-f14"]=lambda: f_scene(1000,450, people=[("ravi",150,176,{}),("anders",250,182,{}),
    ("yara",350,172,{}),("marek",450,180,{"seated":True}),("nour",540,168,{}),
    ("wei",630,170,{}),("ines",720,172,{}),("sofia",810,172,{}),
    ("okonjo",900,182,{}),("chiamaka",960,172,{})],
    props=[("desk",100,0,1.2),("carton",300,0,0.6),("carton",390,0,0.6),
    ("camera",480,196,0.36),("printer",700,205,0.5),("pallet",850,0,0.7),
    ("danger",580,120,0.5)])
S["p05-f15"]=lambda: f_chart([("it is investigated",7),("it is replaced",6),
    ("money is returned",4),("nothing happens",3),("we do not get complaints",2)])
S["p05-f16"]=lambda: f_scene(860,410, people=[("ravi",300,176,{"seated":True,"smile":False})],
    props=[("desk",220,0,1.3),("essay",290,200,0.42),("camera",380,205,0.34),
    ("computer",460,150,0.5),("carton",620,0,0.55)],
    clockat=(160,60,20,18,10), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 6 · Keeping Records ----------------
S["p06-f1"]=lambda: f_icons([("notebook","a logbook"),("clipboard","a clipboard"),
    ("signature","a signature"),("timer","a timestamp"),("archive","a filing drawer"),
    ("folder","a shared folder"),("data","a backup"),("scissors","a shredder"),
    ("stamp","an audit sticker"),("carton","archive boxes")], cols=5)
S["p06-f2"]=lambda: f_scene(900,420, people=[("nour",330,168,{})],
    props=[("notebook",250,200,0.45),("clipboard",470,130,0.5),("door",640,80,0.95),
    ("wall",760,60,0.9)])
S["p06-f3"]=lambda: f_icons([("note","legible"),("worried","illegible"),
    ("pen","initials only"),("signature","a full name"),
    ("form","a blank box"),("flashback","a different pen, two days later")], cols=3)
S["p06-f4"]=lambda: f_realia(tbl("","What does the record actually answer?",
    ["What the record holds","What it answers","What it cannot answer"],
    [["","",""],["","",""],["","",""]],
    note="<b>One column I would add:</b>"), 520)
S["p06-f5"]=lambda: f_realia(tbl("Brightwell Pharma &middot; store 3 temperature log",
    "acceptable range <b>2 &ndash; 8 &deg;C</b> &middot; retain 5 years",
    ["Date","Time","Reading","Action taken","Signature"],
    [["01 Mar","07:10","4.1","&mdash;","R.M."],["02 Mar","07:05","4.0","&mdash;","R.M."],
     ["03 Mar","07:15","4.2","&mdash;","R.M."],["04 Mar","07:20","3.9","&mdash;","T.E."],
     ["05 Mar","07:05","4.1","&mdash;","R.M."],
     ["06 Mar","07:10","<b>9.2</b>","<b></b>","R.M."],
     ["07 Mar","07:00","4.4","&mdash;","R.M."],["08 Mar","07:25","4.3","&mdash;","T.E."],
     ["09 Mar","07:10","4.0","&mdash;","R.M."],
     ["10 Mar","07:05","<b>8.8</b>","<b></b>","R.M."],
     ["11 Mar","07:15","4.2","&mdash;","R.M."],["12 Mar","07:10","4.1","&mdash;","R.M."],
     ["13 Mar","07:05","<b>9.0</b>","<b></b>","T.E."],
     ["14 Mar","07:20","4.2","&mdash;","R.M."]],
    note="Three readings are outside the range. The action column is empty for all three."), 560)
S["p06-f6"]=lambda: f_realia(tbl("Word study","Defining relative clauses",
    ["Word","Refers to","Example"],
    [["<i>who</i>","a person","The technician <b>who</b> signed it has left."],
     ["<i>which</i>","a thing","The reading <b>which</b> was out of range."],
     ["<i>that</i>","a person or a thing","The entry <b>that</b> nobody initialled."],
     ["<i>whose</i>","possession","The shift <b>whose</b> log is missing."]],
    note="No second subject: <i>the person <s>who he</s> signed it</i>."), 500)
S["p06-f7"]=lambda: f_chart([("government to business, average",62),
    ("business to business, average",61)],
    unit="days, as reported by suppliers &mdash; the average hides a spread of 20 to 120", w=520)
S["p06-f8"]=lambda: f_icons([("signature","a squiggle"),("form","a blank cell"),
    ("pen","different ink"),("notebook","a logbook on a shelf"),
    ("folder","two files, one name"),("calendar","a date with no year")], cols=3)
S["p06-f9"]=lambda: f_realia(doc("Brightwell Pharma &middot; internal audit",
    "store 3 &middot; 19 March 2026 &middot; auditor: I. Costa",
    "<p>1. Who is responsible for the daily reading? <i>R. Menon, or T. Ek on his days off.</i></p>"
    "<p>2. What is the acceptable range? <i>2 to 8 &deg;C.</i></p>"
    "<p>3. How many readings in March were outside it? <b>&mdash;</b></p>"
    "<p>4. What action was taken on each? ______________</p>"
    "<p>5. Who was told? ______________</p>"
    "<p>6. Where is the product that was in the store at the time? ______________</p>"
    "<p>7. How long is this log retained? <i>Five years.</i></p>"
    "<p>8. Who checks the log, and how often? ______________</p>",
    "Eight questions. Three answered, one answered with a dash, four not answered at all."))
S["p06-f10"]=lambda: f_scene(900,420, people=[("nour",320,168,{}),("ines",450,172,{})],
    props=[("desk",200,0,1.3),("notebook",290,200,0.42),("computer",400,150,0.5),
    ("door",660,80,0.95)])
S["p06-f11"]=lambda: f_realia(tbl("Two log pages","Store 3, the same fortnight",
    ["As it was kept","As it should be kept"],
    [["06 Mar &mdash; 9.2 &mdash; <i>(blank)</i> &mdash; R.M.<br>"
      "10 Mar &mdash; 8.8 &mdash; <i>(blank)</i> &mdash; R.M.<br>"
      "13 Mar &mdash; 9.0 &mdash; <i>(blank)</i> &mdash; T.E.",
      "06 Mar &mdash; 9.2 &mdash; <b>door found ajar; closed; reading 4.3 at 07:40; "
      "Menon informed</b> &mdash; <b>MENON</b><br>"
      "10 Mar &mdash; 8.8 &mdash; <b>as 06 Mar; maintenance call raised M-3312</b> &mdash; "
      "<b>MENON</b><br>"
      "13 Mar &mdash; 9.0 &mdash; <b>door seal replaced; Okonjo informed</b> &mdash; "
      "<b>EK</b>"]],
    note="Same readings. One page is a record; the other is a row of numbers."), 540)
S["p06-f12"]=lambda: f_realia(doc("Two file notes", None,
    "<p><b>A.</b> Stock was moved to store 2.</p>"
    "<p style='font-size:12px;color:#6b6861'>Six words. Which stock, when, by whom, and is it "
    "still there?</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>File note &mdash; written 19 March 2026, about "
    "events of 6 March.</b></p>"
    "<p>On 6 March at about 07:10 the store 3 reading was 9.2 &deg;C, above the 2&ndash;8 range. "
    "The door was found ajar. I closed it and the reading was 4.3 at 07:40. I moved the four "
    "affected pallets to store 2 the same morning. I did not record any of this in the action "
    "column at the time, and I did not tell anybody.</p>"
    "<p>I am writing this thirteen days late, before an audit, which is the worst possible time "
    "to write it. The product is in store 2, bays 4 to 7, and has not shipped.</p>"))
S["p06-f13"]=lambda: f_realia(tbl("","File-note planner",
    ["Written on","The event and its date","What was done","What was NOT done","What changes"],
    [["","","","",""],["","","","",""]],
    note="&#9744; I have said in the note that it is being written late."), 540)
S["p06-f14"]=lambda: f_scene(1000,450, people=[("nour",150,168,{}),("ravi",240,176,{}),
    ("ines",340,172,{}),("tomas",440,176,{}),("anders",540,182,{}),
    ("marek",630,180,{}),("yara",720,172,{}),("wei",810,170,{}),
    ("hanna",890,172,{}),("okonjo",960,182,{})],
    props=[("notebook",200,196,0.42),("clipboard",300,130,0.45),("archive",480,0,0.7),
    ("folder",600,140,0.45),("carton",700,0,0.6),("printer",830,205,0.5),
    ("door",60,80,0.9)],
    board=(380,24,150,100,"STORE 3",[("range","2 – 8 °C")]))
S["p06-f15"]=lambda: f_chart([("the important things",8),("everything is recorded",5),
    ("only what the law requires",4),("I do not know",3),("almost nothing",2)])
S["p06-f16"]=lambda: f_scene(860,410, people=[("nour",300,168,{"seated":True,"smile":False})],
    props=[("desk",220,0,1.3),("notebook",290,200,0.42),("form",380,205,0.4),
    ("computer",470,150,0.5),("lamp",150,120,0.55)],
    clockat=(640,60,20,18,40), panelbg="#242c38", floorbg="#30394a")
