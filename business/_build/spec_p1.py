# -*- coding: utf-8 -*-
"""Clearline Book 2 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["p00-f1"]=lambda: f_realia(tbl("Four tenses you already have","One example each",
    ["Tense","Example","When"],
    [["Present simple","I <b>work</b> in operations.","routine, always, usually"],
     ["Present continuous","I'<b>m covering</b> for Yara this week.","now, around now"],
     ["Past simple","We <b>sent</b> it on Tuesday.","a finished event with a time"],
     ["<i>going to</i>","I'<b>m going to</b> call them at four.","a plan you already have"]],
    note="Four boxes. Most working English is in these four."), 540)
S["p00-f2"]=lambda: f_realia(doc("Taped to a monitor", None,
    "<p style='font-size:17px;line-height:1.9'>"
    "&bull; Sorry, could you say that again?<br>"
    "&bull; Let me read that back to you.<br>"
    "&bull; Do you mean X or Y?<br>"
    "&bull; Can I check one thing?<br>"
    "&bull; I'd rather ask now than guess.<br>"
    "&bull; Can you put that in writing?</p>",
    "Six sentences. Nobody who uses them sounds less competent."), 480)

# ---------------- Unit 1 · Getting It Right ----------------
S["p01-f1"]=lambda: f_icons([("essay","a drawing"),("scales","a micrometer"),
    ("packet","a sample"),("flashcard","a color card"),("certificate","a certificate"),
    ("gloves","a finish"),("sizechart","a tolerance band"),("stamp","a batch number"),
    ("balance","a weight"),("review","two parts compared")], cols=5)
S["p01-f2"]=lambda: f_scene(900,420, people=[("ravi",330,176,{})],
    props=[("desk",170,0,1.3),("essay",250,150,0.5),("tray",470,205,0.6),
    ("scales",540,200,0.5),("lamp",640,120,0.55),("window",760,150,0.9)])
S["p01-f3"]=lambda: f_icons([("essay","a missing dimension"),("handsup","nodding, not agreeing"),
    ("pen","written on in pen"),("archive","an old sample in a drawer"),
    ("note","“as before”"),("review","two fingers, two places")], cols=3)
S["p01-f4"]=lambda: f_realia(tbl("","What do I actually know?",
    ["#","The step","How do I know this?"],
    [[str(i),"",""] for i in range(1,9)],
    note="<b>The step I nearly forgot:</b>"), 500)
S["p01-f5"]=lambda: f_realia(doc("Arvo Components &middot; part specification",
    "AC-2214 &middot; rev C &middot; 4 February 2026",
    "<p><b>Material</b> 6082-T6 aluminium &nbsp;&bull;&nbsp; <b>Finish</b> anodised, clear "
    "&nbsp;&bull;&nbsp; <b>General tolerance</b> &plusmn;0.1 mm</p>"
    + table_html(["Dim.","Nominal","Tolerance"],
      [["A","84.00","&plusmn;0.05"],["B","62.00","&plusmn;0.10"],["C","41.50","&plusmn;0.10"],
       ["D","28.00","&plusmn;0.10"],["E","19.20","&plusmn;0.05"],["F","12.00","&plusmn;0.10"],
       ["G","9.50","&plusmn;0.10"],["H","6.00","&plusmn;0.05"],["J","4.20","&plusmn;0.10"],
       ["K","3.00","&plusmn;0.10"],["L","1.60","<b>&mdash;</b>"]])
    + "<p><b>Notes.</b> 1. Burr-free. 2. Mark batch number on face A. "
    "3. First article to be approved before bulk production.</p>"
    "<p><b>Approved</b> R. Menon &nbsp;&nbsp;&nbsp; <b>Customer approval</b> "
    "______________</p>",
    "Eleven dimensions. One has no tolerance, and nobody has noticed for three revisions."))
S["p01-f6"]=lambda: f_realia(tbl("Word study","Comparative and superlative",
    ["Adjective","Comparative","Superlative"],
    [["cheap","cheaper","the cheapest"],["heavy","heavier","the heaviest"],
     ["accurate","more accurate","the most accurate"],["reliable","","" ],
     ["good","better",""],["bad","","the worst"]]), 480)
S["p01-f7"]=lambda: f_line([("2016",6.7),("2018",6.7),("2020",6.7),("2022",6.7),
    ("2024",6.7),("2025",8.3)], w=560, unit="% growth in world services exports",
    mark=("2025", "8.3% in 2025"), ymin=0)
S["p01-f8"]=lambda: f_icons([("essay","which dimension?"),("packet","a sample in a bag"),
    ("flashcard","a color card"),("balance","a weight on a scale"),
    ("carton","one part set aside"),("review","rev C and rev D")], cols=3)
S["p01-f9"]=lambda: f_realia(tbl("Brightwell Pharma &middot; first-article inspection",
    "AC-2214 &middot; batch 7741 &middot; 11 February 2026",
    ["Dim.","Specified","Measured","Result"],
    [["A","84.00 &plusmn;0.05","84.02","pass"],["B","62.00 &plusmn;0.10","62.04","pass"],
     ["C","41.50 &plusmn;0.10","41.47","pass"],["D","28.00 &plusmn;0.10","27.95","pass"],
     ["E","19.20 &plusmn;0.05","19.18","pass"],["F","12.00 &plusmn;0.10","12.01","pass"],
     ["G","9.50 &plusmn;0.10","9.52","pass"],["H","6.00 &plusmn;0.05","6.03","pass"],
     ["J","4.20 &plusmn;0.10","4.18","pass"],["K","3.00 &plusmn;0.10","3.01","pass"],
     ["<b>L</b>","<b>&mdash;</b>","<b>2.10</b>","<b>?</b>"]],
    note="<b>Conclusion</b> &nbsp; &#9744; approved for bulk &nbsp;&nbsp; "
    "&#9744; hold &mdash; one dimension cannot be judged"), 540)
S["p01-f10"]=lambda: f_scene(900,420, people=[("ravi",300,176,{}),("chiamaka",640,172,{})],
    props=[("desk",160,0,1.3),("computer",240,150,0.5),("essay",420,150,0.45),
    ("window",760,150,0.9)])
S["p01-f11"]=lambda: f_realia(tbl("Two revisions","AC-2214",
    ["Revision C","Revision D"],
    [["A 84.00 &plusmn;0.05<br>B 62.00 &plusmn;0.10<br>E 19.20 &plusmn;0.05<br>"
      "L 2.10 <b>(no tolerance)</b><br>&mdash;<br>Note 3: first article to be approved",
      "A 84.00 &plusmn;0.05<br>B 62.00 <b>&plusmn;0.05</b><br>E 19.20 &plusmn;0.05<br>"
      "L 2.10 <b>&plusmn;0.10</b><br><b>M 0.80 &plusmn;0.05 (new)</b><br>"
      "<b>Note 3 deleted</b>"]]), 520)
S["p01-f12"]=lambda: f_realia(doc("Two notes about the same batch", None,
    "<p><b>A.</b> The parts are wrong. Please send replacements as soon as possible.</p>"
    "<p style='font-size:12px;color:#6b6861'>Eleven words. Nobody can act on it.</p>"
    "<p style='margin-top:14px'><b>B.</b> Batch 7741, AC-2214. Ten of eleven dimensions are "
    "inside tolerance (report attached). Dimension L measures 2.10 mm; rev C gives no tolerance "
    "for L, so I cannot pass or fail it. Two questions: what is the intended tolerance on L, and "
    "may we hold the batch rather than scrap it while you answer? I propose rev D adds "
    "L 2.10 &plusmn;0.10.</p>"
    "<p style='font-size:12px;color:#6b6861'>Sixty-two words, two questions, one proposal.</p>"))
S["p01-f13"]=lambda: f_realia(tbl("","Planner",
    ["What is correct","What is wrong","Where the gap is","What I will change"],
    [["","","",""],["","","",""]],
    note="<b>Who pays:</b>"), 520)
S["p01-f14"]=lambda: f_scene(1000,450, people=[("ravi",160,176,{}),("chiamaka",250,172,{}),
    ("marek",350,180,{"seated":True}),("anders",450,182,{}),("nour",540,168,{}),
    ("yara",630,172,{}),("wei",720,170,{}),("paula",810,170,{}),("sofia",900,172,{}),
    ("okonjo",960,182,{})],
    props=[("desk",100,0,1.2),("essay",300,140,0.45),("tray",500,215,0.6),
    ("carton",600,0,0.6),("racking",860,40,0.9),("window",700,56,0.9)])
S["p01-f15"]=lambda: f_chart([("a measurement",7),("a number",6),("a time",5),
    ("a word",3),("nothing has to be exact",2)])
S["p01-f16"]=lambda: f_scene(860,410, people=[("chiamaka",300,172,{"seated":True,"smile":False})],
    props=[("desk",220,0,1.3),("computer",300,150,0.52),("packet",420,200,0.42),
    ("chair",520,210,0.7),("lamp",150,120,0.55)],
    window_=(640,56,130,96), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 2 · The Order Book ----------------
S["p02-f1"]=lambda: f_icons([("spreadsheet","a purchase order"),("invoice","a quotation"),
    ("signature","signing"),("email","confirmed"),("pen","a line rewritten"),
    ("form","a delivery note"),("calendar","a date moved"),("carton","a part delivery"),
    ("stamp","canceled"),("review","two versions")], cols=5)
S["p02-f2"]=lambda: f_scene(900,420, people=[("chiamaka",330,172,{"seated":True})],
    props=[("desk",180,0,1.35),("computer",250,150,0.5),("computer",430,150,0.5),
    ("essay",560,200,0.42),("window",750,150,0.9)])
S["p02-f3"]=lambda: f_icons([("tally","a quantity changed"),("calendar","a date moved"),
    ("pricetag","a price altered"),("note","a line added"),
    ("scissors","a line deleted"),("address","an address replaced")], cols=3)
S["p02-f4"]=lambda: f_realia(tbl("","Which copy is the newest?",
    ["The document","How you know it is the newest","How you would find out it was old"],
    [["","",""],["","",""],["","",""]],
    note="<b>The one with no version at all:</b>"), 520)
S["p02-f5"]=lambda: f_realia(doc("Kjeldsen Board &middot; order acknowledgement",
    "Your order PO-5512 &middot; our ref KB-9043 &middot; <b>rev B</b>",
    table_html(["Line","Part","Qty","Price","Delivery"],
      [["1","Carton 180&times;180&times;240","4,000","1.38","3 Mar"],
       ["2","Pallet wrap, 20 &micro;m","60 rolls","11.40","3 Mar"],
       ["3","Edge protector, 1 m","2,000","0.42","<b>17 Mar</b>"]])
    + "<p><b>Prices</b> hold for 30 days from this acknowledgement. "
    "<b>Line 3</b> is on a longer lead time than requested.</p>",
    "Please confirm within two working days. Silence is taken as acceptance."))
S["p02-f6"]=lambda: f_realia(tbl("Word study","The third form",
    ["Verb","Past simple","Past participle"],
    [["send","sent","sent"],["place","placed","placed"],["confirm","confirmed","confirmed"],
     ["take","took","taken"],["write","wrote","written"],["give","gave",""],
     ["receive","",""],["cancel","",""]],
    note="The present perfect uses the <b>third</b> form, not the second."), 480)
S["p02-f7"]=lambda: f_chart([("digitally delivered services, 2025",6.1),
    ("digitally delivered services, 2024",5.7),("commercial services, 2024",6.8),
    ("commercial services, 2025",4.6)],
    unit="% projected volume growth &mdash; one rising, one falling", w=520)
S["p02-f8"]=lambda: f_icons([("tally","4,000 becomes 3,600"),("calendar","the third or the tenth"),
    ("note","a fourth line"),("email","the word URGENT"),
    ("pallet","a part-filled pallet"),("phone","calling while reading")], cols=3)
S["p02-f9"]=lambda: f_realia(tbl("Arvo Components &middot; change request",
    "PO-5512 &middot; current revision B &middot; requested 19 February",
    ["What is changing","From","To"],
    [["Line 1 quantity","4,000","<b>3,600</b>"],
     ["Line 3 delivery","17 Mar","<b>3 Mar, or split</b>"],
     ["Delivery address","Dock 2","<b>Dock 4</b>"]],
    note="<b>Reason</b> Customer reduced their own forecast. &nbsp; "
    "<b>Approved</b> C. Obi &nbsp; <b>Who must be told</b> goods-in, finance, the carrier"), 540)
S["p02-f10"]=lambda: f_scene(900,420, people=[("chiamaka",320,172,{"seated":True})],
    props=[("desk",180,0,1.35),("computer",260,150,0.52),("essay",440,200,0.42),
    ("headset",520,200,0.4),("window",750,150,0.9)])
S["p02-f11"]=lambda: f_realia(tbl("Two versions","PO-5512",
    ["Revision B","Revision C"],
    [["1 &mdash; carton &mdash; <b>4,000</b> &mdash; 3 Mar<br>"
      "2 &mdash; wrap &mdash; 60 &mdash; 3 Mar<br>"
      "3 &mdash; edge protector &mdash; 2,000 &mdash; <b>17 Mar</b><br>&mdash;",
      "1 &mdash; carton &mdash; <b>3,600</b> &mdash; 3 Mar<br>"
      "2 &mdash; wrap &mdash; 60 &mdash; 3 Mar<br>"
      "3 &mdash; edge protector &mdash; 2,000 &mdash; <b>3 Mar (split 1,000/1,000)</b><br>"
      "<b>4 &mdash; tape, 48 mm &mdash; 40 rolls &mdash; 3 Mar (new)</b>"]]), 520)
S["p02-f12"]=lambda: f_realia(doc("Two emails, two subject lines", None,
    "<p style='font-size:12px;color:#6b6861'>Subject: <b>PO-5512</b></p>"
    "<p>Please see attached.</p>"
    "<p style='font-size:12px;color:#6b6861'>The fourth email in the thread with this subject. "
    "Nobody can tell which attachment is current.</p>"
    "<p style='margin-top:16px;font-size:12px;color:#6b6861'>Subject: "
    "<b>PO-5512 rev C &mdash; one line added, qty on line 1 reduced</b></p>"
    "<p>Three changes, all on the attached rev C:<br>"
    "1. Line 1 quantity 4,000 &rarr; 3,600<br>"
    "2. Line 3 split 1,000 on 3 Mar, 1,000 on 17 Mar<br>"
    "3. New line 4: tape, 48 mm, 40 rolls<br>"
    "Nothing else has changed. Please acknowledge rev C by Thursday midday.</p>"))
S["p02-f13"]=lambda: f_realia(tbl("","Email planner",
    ["The subject line","What has changed","What has NOT changed","What I want you to do"],
    [["","","",""],["","","",""]],
    note="<b>If it is already too late:</b>"), 520)
S["p02-f14"]=lambda: f_scene(1000,450, people=[("chiamaka",150,172,{"seated":True}),
    ("marek",240,180,{"seated":True}),("yara",330,172,{"seated":True}),
    ("nour",420,168,{}),("anders",520,182,{}),("wei",610,170,{}),
    ("sofia",700,172,{}),("ravi",790,176,{}),("paula",880,170,{}),("okonjo",960,182,{})],
    props=[("desk",100,0,1.2),("computer",180,140,0.45),("printer",460,205,0.55),
    ("racking",700,40,0.95),("pallet",840,0,0.7),("scanner",580,200,0.4)])
S["p02-f15"]=lambda: f_chart([("a version number",7),("a date",6),
    ("it is in one place only",4),("somebody tells me",3),("I do not know",3)])
S["p02-f16"]=lambda: f_scene(880,420, people=[("anders",330,182,{"smile":False})],
    props=[("racking",540,40,1.0),("clipboard",250,200,0.45),("scanner",410,200,0.4),
    ("crate",620,0,0.75),("pallet",720,0,0.7)], panelbg="#2b3340", floorbg="#39404c")

# ---------------- Unit 3 · Chasing ----------------
S["p03-f1"]=lambda: f_icons([("email","a flagged email"),("calendar","a reminder"),
    ("phone","three missed calls"),("door","knocking"),("inventory","one line unticked"),
    ("deadline","a deadline passing"),("envelope","a second reminder"),
    ("meeting","asking in person"),("notebook","a diary note"),
    ("messages","four messages, one subject")], cols=5)
S["p03-f2"]=lambda: f_scene(900,420, people=[("marek",330,180,{"seated":True})],
    props=[("desk",180,0,1.35),("computer",260,150,0.52),("essay",450,200,0.42),
    ("calendar",640,110,0.6),("window",760,150,0.9)])
S["p03-f3"]=lambda: f_icons([("calendar","not due yet"),("deadline","due and passed"),
    ("note","no deadline at all"),("email","a reply that is not an answer"),
    ("tally","half an answer"),("worried","silence")], cols=3)
S["p03-f4"]=lambda: f_realia(tbl("","Who do you chase, and how?",
    ["Name","A colleague","A customer","A supplier","My manager"],
    [["","","","",""],["","","","",""],["","","","",""]],
    note="<b>The longest anybody has waited:</b>"), 520)
S["p03-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; payment reminder",
    "Our ref LF-4471/2 &middot; 14 March 2026",
    table_html(["Invoice","Date","Amount","Days overdue"],
      [["4471","14 Feb 2026","13,700","<b>28</b>"]])
    + "<p>We have had no query on this invoice, so I am writing in case something is holding it "
    "up rather than assuming it has been overlooked. Two things worth checking: the order number "
    "we quoted (PO-88431), and the address we sent it to.</p>"
    "<p><b>If payment is not received by Friday 22 March the account will go on hold.</b> "
    "I would rather not do that, and I can lift it the same day you pay.</p>"
    "<p><b>Payment</b> IBAN on the invoice &bull; quote invoice 4471 as the reference</p>"
    "<p>Marek Dolny &bull; Credit control &bull; direct +44 20 7946 0148</p>"))
S["p03-f6"]=lambda: f_realia(tbl("Word study","Four words about time",
    ["Word","Where it sits","Example"],
    [["<i>already</i>","earlier than expected","I've <b>already</b> sent it."],
     ["<i>yet</i>","at or after the expected point","I haven't had it <b>yet</b>."],
     ["<i>still</i>","continuing, and you are not pleased","They <b>still</b> haven't replied."],
     ["<i>so far</i>","up to now","Two replies <b>so far</b>."]]), 500)
S["p03-f7"]=lambda: f_part("51 days to be paid, on average",
    [("32 days of agreed terms",32,BLUE),("19 days of delay",19,AMBER)], w=520)
S["p03-f8"]=lambda: f_icons([("invoice","small, two days late"),("overdraft","large, thirty days late"),
    ("note","no deadline given"),("email","answers a different question"),
    ("waitscreen","a silent inbox"),("door","the manager's door")], cols=3)
S["p03-f9"]=lambda: f_realia(tbl("Lindmark Freight &middot; aged debt","28 February",
    ["Customer","Invoice","Amount","Current","1&ndash;30","31&ndash;60","60+"],
    [["Ostberg Retail","4471","13,700","&mdash;","<b>13,700</b>","&mdash;","&mdash;"],
     ["Juno Textiles","4480","7,600","&mdash;","7,600","&mdash;","&mdash;"],
     ["Harbour Mutual","4402","8,900","&mdash;","4,200","&mdash;","<b>4,700</b>"],
     ["Sable &amp; Finch","4495","3,750","3,750","&mdash;","&mdash;","&mdash;"],
     ["Teval Transport","4388","6,400","&mdash;","&mdash;","&mdash;","<b>6,400</b>"],
     ["Terrace Hotels","4466","8,800","&mdash;","5,300","3,500","&mdash;"],
     ["<b>Total</b>","","<b>49,150</b>","<b>3,750</b>","<b>30,800</b>","<b>3,500</b>",
      "<b>11,100</b>"]]), 560)
S["p03-f10"]=lambda: f_scene(900,420, people=[("marek",320,180,{"seated":True})],
    props=[("desk",180,0,1.35),("essay",420,200,0.42),("computer",250,150,0.5),
    ("headset",500,200,0.4)], clockat=(680,60,22,11,15))
S["p03-f11"]=lambda: f_realia(tbl("Two reminders","Invoice 4471",
    ["No date, no consequence","A date and a consequence"],
    [["Just following up on the below.<br>Let me know when you get a chance.<br>"
      "Thanks in advance!<br><br><i>No amount. No date. No consequence. "
      "Three exclamation marks of hope.</i>",
      "Invoice 4471, 13,700, due 14 February, 28 days overdue.<br>"
      "Is anything stopping it being paid?<br>"
      "<b>If it is not received by Friday 22 March the account goes on hold.</b><br>"
      "If the order number is wrong, that is our error and I will reissue today.<br>"
      "<i>Amount, date, question, consequence, way out.</i>"]]), 540)
S["p03-f12"]=lambda: f_realia(doc("Two reminder emails", None,
    "<p><b>A.</b> Hi &mdash; just checking in on the invoice. Hope all is well. Let me know!</p>"
    "<p style='font-size:12px;color:#6b6861'>Three lines. No amount, no date, nothing to answer.</p>"
    "<p style='margin-top:14px'><b>B.</b> Invoice 4471 for 13,700 was due on 14 February and is "
    "28 days overdue. I have called twice and emailed once; I have had no query, so I assume "
    "something is holding it up. Please either pay by <b>Friday 22 March</b> or tell me today "
    "what is blocking it. If payment has not arrived by Friday the account will go on hold until "
    "it does.</p>"
    "<p style='font-size:12px;color:#6b6861'>Amount, due date, days overdue, what I have done, "
    "what I want, by when, and what happens if not.</p>"))
S["p03-f13"]=lambda: f_realia(tbl("","Reminder planner",
    ["The fact, with a number","What I have already done","What I am asking for",
     "By when","If nothing happens"],
    [["","","","",""],["","","","",""]],
    note="<b>The easier option I can offer:</b>"), 540)
S["p03-f14"]=lambda: f_scene(1000,450, people=[("marek",150,180,{"seated":True}),
    ("nour",240,168,{"seated":True}),("hanna",330,172,{"seated":True}),
    ("yara",430,172,{}),("okonjo",520,182,{}),("wei",610,170,{}),
    ("paula",700,170,{}),("sofia",790,172,{}),("ines",880,172,{}),("chiamaka",960,172,{})],
    props=[("desk",100,0,1.2),("computer",180,140,0.45),("printer",470,205,0.55),
    ("spreadsheet",620,140,0.5),("calendar",860,100,0.6),("cafe",740,205,0.6)])
S["p03-f15"]=lambda: f_chart([("three days",7),("a week",6),("one day",4),
    ("two weeks",3),("I do not chase",3)])
S["p03-f16"]=lambda: f_scene(860,410, people=[("marek",300,180,{"seated":True,"smile":False})],
    props=[("desk",220,0,1.3),("essay",300,200,0.44),("phone",390,205,0.36),
    ("computer",470,150,0.5),("door",700,80,0.9)],
    clockat=(160,60,20,18,10), panelbg="#242c38", floorbg="#30394a")
