# -*- coding: utf-8 -*-
"""Foreign Service English Book 5 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · A Model Law Is Not a Treaty ----------------
S["k07-f1"]=lambda: f_icons([("essay","a model law"),("book","a national statute book"),
    ("meeting","a drafting committee"),("magnifier","two texts compared"),
    ("logsheet","a list of jurisdictions"),("podium","an award on the bench"),
    ("chair","three chairs for a tribunal"),("calendar","later amendments"),
    ("handsup","a legislature voting"),("handshake","model and enactment compared")], cols=5)
S["k07-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("essay",310,194,0.24),("book",375,192,0.3),
     ("logsheet",450,196,0.24),("computer",600,142,0.44),("window",815,56,0.98)],
    clockat=(140,46,22,11,0))
S["k07-f3"]=lambda: f_icons([("essay","a model published"),("pen","a bill drafted"),
    ("pencil","a provision modified"),("stamp","the bill enacted"),
    ("magnifier","compared clause by clause"),("logsheet","recorded as based on")], cols=3)
S["k07-f4"]=lambda: f_realia(tbl("","Based on, and not the same",
    ["The model","Who published it","What was modified","What a reader wrongly assumes"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The difference that mattered:</b>"), 580)
S["k07-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Delegation note 7 &middot; a text with no parties",
    "<p><b>Two kinds of international text, and the difference matters in every sentence.</b></p>"
    + table_html(["","A convention","A model law"],
      [["<b>Parties</b>","yes; a state accedes or ratifies","<b>none</b>"],
       ["<b>Entry into force</b>","on a stated condition","<b>not applicable</b>"],
       ["<b>Depositary</b>","yes, with a published record","<b>none</b>"],
       ["<b>Obligation</b>","binding on parties","<b>none; it is recommended</b>"],
       ["<b>Uniformity</b>","one text, subject to reservations","<b>as many texts as "
        "enactments</b>"]])
    + table_html(["",""],
      [["<b>UNCITRAL Model Law on International Commercial Arbitration</b>","adopted <b>1985</b>"],
       ["<b>Amended</b>","<b>2006</b>, including on interim measures and the form of the "
        "arbitration agreement"]])
    + "<p><b>What it is.</b> A legislative text <b>recommended to States</b> for incorporation in "
    "their own law. The Commission has recommended that States give favorable consideration to it "
    "when enacting or revising legislation in this field. <b>The recommendation is the whole of its "
    "legal force.</b></p>"
    "<p><b>The published list.</b> The adopting body publishes a list of <b>jurisdictions that have "
    "enacted legislation based on</b> the Model Law &mdash; on the order of <b>ninety States</b>, "
    "and a larger number of jurisdictions. <b>That figure carries the date of the page.</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What <i>based on</i> covers.</b> A state's "
    "legislation may follow the Model Law <b>almost word for word</b>; <b>in substance, with "
    "modifications</b>; in <b>structure</b> only, with its central provisions changed; or it may "
    "have been enacted <b>before the 2006 amendments</b> and never revised. <b>All four appear on "
    "the same list, described in the same three words.</b></p>"
    "<p><b>What to check, for any state that matters to you.</b> <b>The enacted text</b>; <b>which "
    "version</b> it was based on; and <b>what it modified</b>. <b>The list tells you none of the "
    "three.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the UNCITRAL Model Law on International "
    "Commercial Arbitration, adopted in 1985 and amended in 2006; the Commission's recommendation "
    "that States give favorable consideration to it; and the Commission's published list of "
    "jurisdictions that have enacted legislation based on it, which describes the legislation as "
    "based on, not identical to, the Model Law.</p>"))
S["k07-f6"]=lambda: f_realia(tbl("Word study","Degrees of conformity",
    ["Degree","Form"],
    [["closest","<b>in terms identical to</b> the Model Law"],
     ["","<b>closely modeled on</b> the Model Law"],
     ["the published phrase","<b>based on</b> the Model Law"],
     ["","following it <b>in substance</b>, <b>with modifications</b>"],
     ["furthest","<b>departing from</b> the Model Law in [respect]"],
     ["when you have not looked","<b>it has not been established whether</b>"]]), 560)
S["k07-f7"]=lambda: f_part("All four described as <i>based on</i>",
    [("word for word",22,GREEN),("in substance",30,BLUE),("structure only",20,AMBER),
     ("pre-2006 text",18,PLUM)])
S["k07-f8"]=lambda: f_icons([("essay","a model published"),("pen","a bill drafted"),
    ("pencil","a provision modified"),("stamp","enacted"),
    ("magnifier","compared"),("logsheet","recorded as based on")], cols=3)
S["k07-f9"]=lambda: f_realia(tbl("Comparison sheet &middot; model and enactment", None,
    ["The model provision","The enacted provision"],
    [["an interim measure ordered by an arbitral tribunal shall be recognized and enforced",
      "<u>[no corresponding provision]</u>"],
     ["the arbitration agreement shall be in writing",
      "the arbitration agreement shall be in writing <u>and signed by the parties</u>"],
     ["a request may be made to a court for an interim measure",
      "a request may be made to <u>the competent court of the seat</u>"]],
    note="<b>What we may say:</b> <i>based on</i> &mdash; from the published list &middot; "
    "<i>in substance, with modifications</i> &mdash; having read it &middot; <i>in terms identical "
    "to</i> &mdash; having compared it clause by clause.<br>"
    "<b>The list says <i>based on</i>, and so do we.</b>"), 600)
S["k07-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("omar",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("essay",295,194,0.24),("book",355,192,0.3),
     ("logsheet",430,196,0.24),("computer",540,142,0.4),("window",805,56,0.96)],
    clockat=(140,46,22,4,15))
S["k07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Advice A", None,
        "<p>Astrand is a Model Law jurisdiction, so interim measures ordered by a tribunal are "
        "enforceable there.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Advice B", None,
        "<p>A model law <b>has no parties</b>. Astrand <b>has enacted legislation based on</b> it. "
        "Your question turns on the <b>2006</b> provisions; <b>whether the enacted text reproduces "
        "them has not been established</b>. <b>The enacted text can be obtained and compared</b> — "
        "two working days.</p>"), w)[0:3],
    w=920, h=300)
S["k07-f12"]=lambda: f_realia(doc("Two advice notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Astrand is a Model Law jurisdiction, so the interim measure would be enforced.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1</b> What the instrument is: a text recommended to States; no parties, no entry into force, "
    "no depositary.<br><b>2</b> What the list says: legislation <b>based on</b> the Model Law, as at "
    "the date of the page.<br><b>3</b> Which version matters: the 2006 provisions on interim "
    "measures.<br><b>4</b> <b>Not established</b> whether the enacted text reproduces them. The list "
    "is accurate and does not answer your question.<br>"
    "<b>5</b> We will obtain and compare the enacted text and advise within two working days.</p>",
    "The phrase <i>Model Law jurisdiction</i> is harmless in a brochure and meaningless in a note "
    "from a ministry."))
S["k07-f13"]=lambda: f_realia(form("Advice planner",
    [("1 &nbsp;What the instrument is",""),("2 &nbsp;What the published source records",""),
     ("3 &nbsp;Which version or detail matters here",""),
     ("4 &nbsp;What has not been established",""),
     ("5 &nbsp;What we propose, and by when","")]), 520)
S["k07-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("bah",200,172,{}),
     ("nadia",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("essay",150,194,0.22),("printer",560,198,0.4),
     ("shelf",425,120,0.42),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(285,26,220,100,"CONFORMITY",
      [("identical",""),("closely modeled",""),("based on","&larr;"),("in substance","")]),
    clockat=(240,30,22,4,0))
S["k07-f15"]=lambda: f_chart([("the same text",6),("closely modeled",4),
    ("drawn from with changes",5),("structure only",2),("I had not thought about it",5)])
S["k07-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("magnifier",320,196,0.22),("book",390,192,0.28),
     ("essay",460,194,0.24),("envelope",530,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,11,0))

# ---------------- Unit 8 · A Year's Notice ----------------
S["k08-f1"]=lambda: f_icons([("envelope","a notification with a seal"),("stamp","a date stamp"),
    ("calendar","twelve months later"),("book","a final article"),
    ("invoice","an outstanding invoice"),("folder","a case file with a date"),
    ("podium","a courtroom bench"),("logsheet","a withdrawal footnote"),
    ("essay","a newspaper front page"),("handshake","announcement and receipt compared")],
    cols=5)
S["k08-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("book",315,192,0.3),("stamp",390,198,0.2),
     ("envelope",450,194,0.24),("calendar",650,70,0.48),("window",815,56,0.98)],
    clockat=(140,46,22,2,45))
S["k08-f3"]=lambda: f_icons([("podium","an announcement"),("signature","a notification signed"),
    ("stamp","received and stamped"),("calendar","twelve months counted"),
    ("certificate","taking effect"),("folder","a case file still open")], cols=3)
S["k08-f4"]=lambda: f_realia(tbl("","The date people use and the date that counts",
    ["The event","Dates available","The date the rule uses","The date people quote"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>Where the two have diverged:</b>"), 580)
S["k08-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Delegation note 8 &middot; a withdrawal clause",
    table_html(["",""],
      [["<b>Rome Statute of the International Criminal Court</b>","adopted <b>17 July 1998</b>"],
       ["<b>Entered into force</b>","<b>1 July 2002</b>"],
       ["<b>States Parties</b>","about <b>125</b>, on the Court's own page, which carries its "
        "date"]])
    + "<p style='border:1px solid #d9d4c9;padding:9px'><b>(1)</b> A State Party may, <b>by written "
    "notification addressed to the Secretary-General of the United Nations</b>, withdraw from the "
    "Statute. The withdrawal <b>shall take effect one year after the date of receipt of the "
    "notification</b>, unless the notification specifies a later date.</p>"
    "<p><b>(2), in outline.</b> A State is <b>not discharged</b> from the obligations arising "
    "<b>while it was a Party</b>. This includes <b>financial obligations which may have "
    "accrued</b>. The withdrawal does <b>not affect cooperation</b> in investigations and "
    "proceedings <b>commenced prior to the effective date</b>. Nor does it prejudice the "
    "<b>continued consideration</b> of any matter already before the Court.</p>"
    + table_html(["What survives","Why"],
      [["obligations arising while the state was a party","the clause says they are not discharged"],
       ["financial obligations already accrued","named expressly, to end an obvious argument"],
       ["cooperation in proceedings commenced before the effective date","the clause preserves it"],
       ["matters already under consideration","their continued consideration is not prejudiced"]])
    + table_html(["The four dates",""],
      [["the <b>announcement</b>","political; not in the clause"],
       ["the date on the <b>notification</b>","not the trigger"],
       ["the <b>date of receipt</b>","<b>the trigger</b>"],
       ["the <b>effective date</b>","<b>one year after receipt</b>, or later if specified"]])
    + "<p><b>Two withdrawals have taken effect</b> under this clause, each one year after receipt. "
    "<b>This note does not name the states concerned</b>: the records are published, and a ministry "
    "has no business summarizing another state's reasons.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Rome Statute of the International Criminal "
    "Court, adopted 17 July 1998 and in force from 1 July 2002, Article 127; and the Court's own "
    "published figure for States Parties, which carries the date of that page.</p>"))
S["k08-f6"]=lambda: f_realia(tbl("Word study","Temporal precision",
    ["Form","What it fixes","Example"],
    [["one year after the date of receipt","the trigger and the interval",
      "takes effect <b>one year after the date of receipt</b>"],
     ["with effect from","the date something begins","<b>with effect from</b> 17 March"],
     ["prior to the date on which","a boundary in the past",
      "commenced <b>prior to the date on which</b> it became effective"],
     ["while it was a Party","a window of liability","obligations arising <b>while it was a "
      "Party</b>"],
     ["unless the notification specifies a later date","an exception to the interval","&nbsp;"],
     ["as at","the date information is true","&nbsp;"]]), 620)
S["k08-f7"]=lambda: f_timeline([(0.05,"announcement","not the trigger"),
    (0.20,"notification","not the trigger"),(0.35,"receipt","the trigger"),
    (0.92,"+ one year","effective date")], 0.35, w=660)
S["k08-f8"]=lambda: f_icons([("podium","an announcement"),("signature","signed"),
    ("stamp","received"),("calendar","twelve months"),
    ("certificate","taking effect"),("folder","a file still open")], cols=3)
S["k08-f9"]=lambda: f_realia(form("Dates card &middot; withdrawal",
    [("1 &nbsp;Announcement",""),("2 &nbsp;Date on the notification",""),
     ("3 &nbsp;<b>Date of receipt &mdash; the trigger</b>",""),
     ("4 &nbsp;<b>Effective date &mdash; one year later</b>",""),
     ("<b>What survives:</b> obligations arising while a Party",""),
     ("financial obligations accrued",""),
     ("cooperation in proceedings commenced earlier",""),
     ("continued consideration of matters already before the Court","")],
    note="<b>Print the date with its derivation.</b>"), 560)
S["k08-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("omar",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("book",300,192,0.3),("stamp",375,198,0.2),
     ("computer",470,142,0.42),("calendar",650,70,0.46),("window",805,56,0.96)],
    clockat=(140,46,22,5,15))
S["k08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Line A", None,
        "<p>The State left the Statute in 2017 and is no longer bound by it.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Line B", None,
        "<p>The withdrawal took effect on <b>[date]</b>, <b>being one year after the date of "
        "receipt</b> of the written notification. The State <b>is not discharged</b> from "
        "obligations arising while it was a Party, including <b>financial obligations accrued</b>; "
        "and proceedings <b>commenced before that date are unaffected</b>.</p>"), w)[0:3],
    w=920, h=300)
S["k08-f12"]=lambda: f_realia(doc("Two press lines", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Line 1</b><br>"
    "The State withdrew in the year it announced its withdrawal and is no longer bound by anything "
    "in the Statute.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Line 2</b><br>"
    "<b>1</b> The date, with its derivation: one year after the date of receipt.<br>"
    "<b>2</b> What ends: with effect from that date, the State is not a Party.<br>"
    "<b>3</b> What does not end: obligations arising while a Party; accrued financial obligations; "
    "cooperation in proceedings commenced earlier; continued consideration of matters already "
    "before the Court.<br><b>4</b> We do not name States or characterize reasons.<br>"
    "<b>5</b> A question about a particular day is answered in writing, from the record.</p>",
    "One of these is wrong by up to a year and wrong about what was left behind."))
S["k08-f13"]=lambda: f_realia(form("Line-to-take planner",
    [("1 &nbsp;The date, with its derivation",""),("2 &nbsp;What ends",""),
     ("3 &nbsp;What does not end",""),("4 &nbsp;What this ministry does not do",""),
     ("5 &nbsp;What will be answered in writing","")]), 520)
S["k08-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("bah",200,172,{}),
     ("nadia",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,192,0.26),("printer",560,198,0.4),
     ("folder",410,196,0.22),("folder",450,196,0.22),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    board=(290,26,215,104,"FOUR DATES",
      [("announcement",""),("notification",""),("receipt","&larr;"),("+ 1 year","")]),
    clockat=(240,30,22,5,0))
S["k08-f15"]=lambda: f_chart([("the announcement",8),("the notification",5),
    ("one year after receipt",3),("immediately",2),("I had not thought about it",4)])
S["k08-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("note",395,194,0.24),
     ("logsheet",460,196,0.24),("stamp",530,198,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,11,30))

# ---------------- Unit 9 · Unless Either State Notifies ----------------
S["k09-f1"]=lambda: f_icons([("certificate","a judgment with a seal"),("barrier","an enforcement counter"),
    ("archive","a depositary's register"),("envelope","a notification letter"),
    ("calendar","a twelve-month window"),("review","a grid of states"),
    ("handshake","two flags with a line between"),("logsheet","a column of dates"),
    ("magnifier","a grid read with a ruler"),("square","one cell checked")], cols=5)
S["k09-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("book",315,192,0.3),("review",390,196,0.28),
     ("logsheet",460,196,0.24),("computer",600,142,0.44),("window",815,56,0.98)],
    clockat=(140,46,22,9,20))
S["k09-f3"]=lambda: f_icons([("stamp","ratifying"),("logsheet","a list growing"),
    ("calendar","a period opening"),("envelope","a notification sent"),
    ("square","a cell left blank"),("review","a cell shaded")], cols=3)
S["k09-f4"]=lambda: f_realia(tbl("","The thing the list cannot show",
    ["The list","What it shows","The second fact needed","Where that fact lives"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The question I answered from the list:</b>"), 580)
S["k09-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Delegation note 9 &middot; a convention with two axes",
    table_html(["",""],
      [["<b>Convention on the Recognition and Enforcement of Foreign Judgments in Civil or "
        "Commercial Matters</b>, concluded at The Hague","<b>2 July 2019</b>"],
       ["<b>Entered into force</b>","<b>1 September 2023</b>"]])
    + "<p><b>What it does.</b> It provides for the recognition and enforcement of judgments in civil "
    "or commercial matters between the States for which it has effect, on the grounds the Convention "
    "sets out, subject to its exclusions and its grounds for refusal.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'>The Convention <b>shall have effect between two "
    "Contracting States only if <u>neither of them has notified the depositary regarding the "
    "other</u></b>. Where no such notification is made, the Convention has effect between the two "
    "States from a date calculated from the end of the period during which a notification could "
    "have been made.</p>"
    + table_html(["","The question","Where the answer is"],
      [["<b>1</b>","Is each State a Contracting State?","the party list"],
       ["<b>2</b>","Has either State notified the depositary regarding the other?",
        "the depositary's record of notifications"]])
    + "<p><b>A list cannot answer the second question.</b> Two States may each appear on the party "
    "list and have <b>no treaty relationship with each other</b>, while the Convention continues to "
    "have effect between every other pair. <b>The picture is a grid, and the party list is one edge "
    "of it.</b></p>"
    "<p><b>Why a convention is built this way.</b> Recognizing another State's judgments requires a "
    "confidence a State may extend to some and not others. A convention that forced the whole "
    "package would attract fewer parties. <b>The mechanism buys parties at the price of "
    "simplicity</b>, and the price falls on whoever answers a question about a particular pair.</p>"
    "<p><b>What to write.</b> <i>Both States are Contracting States. Whether the Convention has "
    "effect between them depends on whether either has notified the depositary regarding the other, "
    "which must be checked on the depositary's record.</i></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Convention on the Recognition and "
    "Enforcement of Foreign Judgments in Civil or Commercial Matters, concluded at The Hague on 2 "
    "July 2019 and in force from 1 September 2023; and its article providing that the Convention has "
    "effect between two Contracting States only in the absence of a notification by either "
    "regarding the other.</p>"))
S["k09-f6"]=lambda: f_realia(tbl("Word study","Negative conditions",
    ["Form","What it requires","Example"],
    [["only if neither","that <i>both</i> have refrained","has effect <b>only if neither</b> has "
      "notified"],
     ["unless","that one thing has not happened","applies <b>unless</b> either has notified"],
     ["in the absence of","the non-occurrence of an act","<b>in the absence of</b> a notification"],
     ["provided that no","the same, in a proviso","&nbsp;"],
     ["failing which","the consequence of not acting","&nbsp;"],
     ["save where","an exception where it did happen","&nbsp;"]]), 620)
S["k09-f7"]=lambda: f_matrix(["Astrand","Perenne","Marovia","Valmora"],
    [("Astrand",["&mdash;","&#9632;","&#9632;","blank"]),
     ("Perenne",["&#9632;","&mdash;","&#9632;","&#9632;"]),
     ("Marovia",["&#9632;","&#9632;","&mdash;","&#9632;"]),
     ("Valmora",["blank","&#9632;","&#9632;","&mdash;"])])
S["k09-f8"]=lambda: f_icons([("stamp","ratifying"),("logsheet","a list growing"),
    ("calendar","a period opening"),("envelope","a notification"),
    ("square","a blank cell"),("review","a shaded cell")], cols=3)
S["k09-f9"]=lambda: f_realia(tbl("Relations extract", "as at 11 October",
    ["","Astrand","Perenne","Marovia","Valmora","Kesteland","Sable Isles"],
    [["Astrand","&mdash;","&#9632;","&#9632;","","&#9632;","&#9632;"],
     ["Perenne","&#9632;","&mdash;","&#9632;","&#9632;","","&#9632;"],
     ["Marovia","&#9632;","&#9632;","&mdash;","&#9632;","&#9632;","&#9632;"],
     ["Valmora","","&#9632;","&#9632;","&mdash;","&#9632;",""],
     ["Kesteland","&#9632;","","&#9632;","&#9632;","&mdash;","&#9632;"],
     ["Sable Isles","&#9632;","&#9632;","&#9632;","","&#9632;","&mdash;"]],
    note="<b>&#9632;</b> the Convention has effect as between those two States &middot; a blank "
    "cell means <b>one of them has notified the depositary regarding the other</b>, and all six are "
    "Contracting States.<br><b>The party list is the edge of this grid, not the answer.</b>"), 600)
S["k09-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("omar",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("book",300,192,0.3),("review",375,196,0.28),
     ("computer",490,142,0.4),("logsheet",450,196,0.22),("window",805,56,0.96)],
    clockat=(140,46,22,9,45))
S["k09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Advice A", None,
        "<p>Both States are parties to the 2019 Convention, <b>so</b> a judgment given in Astrand is "
        "enforceable in Perenne under it.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Advice B", None,
        "<p><b>1</b> Both are Contracting States.<br><b>2</b> The Convention has effect <b>as "
        "between them</b>, on the depositary's record <b>as at 11 October</b>.<br>"
        "<b>3</b> Whether this judgment falls within the Convention, and whether any ground for "
        "refusal applies, are <b>matters for the court</b>.</p>"), w)[0:3],
    w=920, h=300)
S["k09-f12"]=lambda: f_realia(doc("Two advice notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Both States are parties, so the judgment is enforceable.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1</b> The instrument, with its dates.<br>"
    "<b>2</b> Two questions, with their sources: the party list, and the depositary's record of "
    "notifications.<br><b>3</b> What the record shows, <b>as at 11 October</b>.<br>"
    "<b>4</b> What is left to the court seised of the application.<br>"
    "<b>5</b> Re-check the record before acting on this note after three months.</p>",
    "The word <i>so</i> in the first note is a whole sentence of reasoning in two letters."))
S["k09-f13"]=lambda: f_realia(form("Advice planner",
    [("1 &nbsp;The instrument, with its dates",""),("2 &nbsp;Question one, and its source",""),
     ("Question two, and its source",""),("3 &nbsp;What the record shows, with its date",""),
     ("4 &nbsp;What is left to another body",""),("5 &nbsp;When to re-check","")]), 520)
S["k09-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("bah",200,172,{}),
     ("nadia",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("review",150,196,0.24),("printer",560,198,0.4),
     ("book",425,192,0.26),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(290,26,215,104,"FIVE BY FIVE",
      [("diagonal","crossed"),("blank cells","2"),("parties","all")]),
    clockat=(240,30,22,9,30))
S["k09-f15"]=lambda: f_chart([("yes, always",7),("usually",5),("only for some conventions",3),
    ("no",2),("I had not thought about it",5)])
S["k09-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("essay",385,194,0.26),
     ("review",455,196,0.26),("pen",530,198,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,12,0))
