# -*- coding: utf-8 -*-
"""Foreign Service English Book 4 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · The Nineteenth of March, 1815 ----------------
S["j10-f1"]=lambda: f_icons([("chair","chairs with name cards in order"),
    ("door","two people hesitating at a door"),("note","a dated notification"),
    ("archive","a card index of dates"),("table","a seating plan"),
    ("queue","a receiving line"),("logsheet","a list in order"),
    ("badge","a dean's badge"),("certificate","a final act with seals"),
    ("handshake","a list and a card index compared")], cols=5)
S["j10-f2"]=lambda: f_scene(920,420, people=[("hana",330,176,{}),("omar",430,172,{"seated":True})],
    props=[("desk",240,0,1.25),("logsheet",315,196,0.26),("archive",390,194,0.28),
     ("table",560,0,0.9),("window",815,56,0.98)],
    clockat=(140,46,22,8,30))
S["j10-f3"]=lambda: f_icons([("note","a notification arrives"),("pen","a date written on a card"),
    ("archive","a card filed in order"),("printer","a list printed"),
    ("table","a plan drawn"),("queue","a line standing in order")], cols=3)
S["j10-f4"]=lambda: f_realia(tbl("","The useful arbitrary rule",
    ["The rule","What makes it arbitrary","What argument it prevents",
     "What a better rule would cost"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The rule I would not change:</b>"), 580)
S["j10-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Protocol note 10 &middot; precedence",
    "<p><b>On 19 March 1815</b>, a regulation on the relative rank of diplomatic agents was "
    "<b>annexed to the Final Act of the Congress of Vienna</b>. It did two things.</p>"
    + table_html(["",""],
      [["<b>1</b>","it divided heads of mission into <b>classes</b>"],
       ["<b>2</b>","it provided that, <b>within each class</b>, precedence should run <b>by the "
        "date of the official notification of arrival</b>"]])
    + "<p style='border:1px solid #d9d4c9;padding:9px'><b>What it was invented to stop.</b> Before "
    "it, precedence was argued from the dignity, antiquity or power of the state represented. The "
    "arguments were real. They delayed negotiations and produced incidents at ceremonies. <b>It was "
    "the arbitrariness of the new rule that made it work.</b> A date cannot be argued about by two "
    "ministries that disagree about everything else.</p>"
    "<p><b>What is in force today.</b> The 1815 regulation <b>is not the instrument in force</b>. "
    "Modern practice rests on the law of diplomatic relations as it now stands, and on each state's "
    "own rules. <b>What has survived is the principle</b>: classes, and within a class, order by "
    "the date on which arrival was officially notified. <b>Rarely has a short annex outlived its "
    "congress so completely.</b></p>"
    "<p><b>Why a protocol department cares.</b> Because the principle makes the department's work "
    "possible. One input &mdash; a date &mdash; produces the list of heads of mission, the seating "
    "plan and the receiving line. None of the three can be argued with. <b>Only by recording the "
    "date correctly</b> does any of it hold.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the R&egrave;glement on the relative rank of "
    "diplomatic agents annexed to the Final Act of the Congress of Vienna, 19 March 1815. The "
    "instrument in force today is the modern law of diplomatic relations; the 1815 text is cited "
    "here as the origin of the principle and not as applicable law.</p>"))
S["j10-f6"]=lambda: f_realia(tbl("Word study","Ordinary order and fronted",
    ["Ordinary","Fronted"],
    [["The arbitrariness made it work.","<b>It was the arbitrariness that</b> made it work."],
     ["A short annex has rarely outlived its congress.",
      "<b>Rarely has</b> a short annex outlived its congress."],
     ["It holds only if the date is recorded correctly.",
      "<b>Only by recording the date correctly does</b> it hold."],
     ["We have never changed this rule.",""],
     ["The principle is what survived.",""],
     ["The date decides precedence.",""]]), 560)
S["j10-f7"]=lambda: f_process(["the date of notification",
    "the list of heads of mission &middot; the seating plan &middot; the receiving line"], w=620)
S["j10-f8"]=lambda: f_icons([("note","a notification"),("pen","a date on a card"),
    ("archive","cards in order"),("printer","a printed list"),
    ("table","a seating plan"),("queue","a receiving line")], cols=3)
S["j10-f9"]=lambda: f_realia(tbl("Precedence list &middot; heads of mission",
    "One input: the date of the official notification of arrival",
    ["Head of mission","Date notified",""],
    [["Astrand","14 February","&#9679;"],["Perenne","14 February","&#9679;"],
     ["Marovia","2 March",""],["Valmora","19 March",""],
     ["Kesteland","6 April",""],["Sable Isles","28 April",""]],
    note="<b>One input.</b> &#9679; two notifications bear the same date.<br>"
    "<b>If two dates are identical:</b> apply the standing rule in the protocol instructions, "
    "<b>by reading it</b>, and record on the file that it has been read."), 580)
S["j10-f10"]=lambda: f_scene(940,430, people=[("hana",320,176,{}),
     ("omar",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("logsheet",305,196,0.26),("archive",380,194,0.28),
     ("table",560,0,0.9),("window",805,56,0.96)],
    clockat=(140,46,22,8,30))
S["j10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Seating plan A", None,
        "<p>Astrand &middot; Marovia &middot; Perenne &middot; Valmora<br>"
        "<span style='font-size:12px;color:#6b6861'>pencil note: by size</span></p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Seating plan B", None, ["Mission","Date notified"],
        [["Astrand","14 February"],["Perenne","14 February"],["Marovia","2 March"],
         ["Valmora","19 March"]],
        note="For the two identical dates, the standing rule in the instructions applies."),
        w)[0:3],
    w=920, h=300)
S["j10-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Under the 1815 Regulation, precedence runs by the date of notification.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Within each class, precedence runs by the date on which arrival was officially "
    "notified.</b> Nothing else is relevant. The applicable law is the modern law of diplomatic "
    "relations, together with this instruction. <b>The Regulation of 19 March 1815 is not the "
    "instrument in force</b> and is not to be cited as such. Where two notifications bear the same "
    "date, the standing rule applies, <b>and the officer applies it by reading it</b>.</p>",
    "The first cites an 1815 annex as the law. The second tells the story and applies the "
    "instruction."))
S["j10-f13"]=lambda: f_realia(form("Instruction planner",
    [("1 &nbsp;The rule",""),("2 &nbsp;The instrument in force",""),
     ("3 &nbsp;The origin, for explanation only",""),("4 &nbsp;The record, and on what day",""),
     ("5 &nbsp;Identical dates",""),("6 &nbsp;What an officer may not do","")]), 520)
S["j10-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("hana",200,172,{}),
     ("nadia",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("bah",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("logsheet",150,196,0.24),("printer",560,198,0.4),
     ("archive",425,194,0.26),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(290,26,215,108,"ONE INPUT",
      [("the date","&darr;"),("the list",""),("the seating plan",""),("the receiving line","")]),
    clockat=(240,30,22,9,0))
S["j10-f15"]=lambda: f_chart([("the size of the state",6),("the age of the relationship",5),
    ("the date of notification",4),("alphabetical order",3),("I had not thought about it",4)])
S["j10-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("table",330,0,0.7),("archive",470,194,0.26),
     ("envelope",545,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,0))

# ---------------- Unit 11 · Three Instruments, One Subject ----------------
S["j11-f1"]=lambda: f_icons([("shelf","a convention and three files"),
    ("note","a protocol clipped to a convention"),("calendar","a date on a cover"),
    ("logsheet","a party list"),("stamp","a depositary stamp"),
    ("form","a reference request"),("square","an empty cell"),
    ("quotemark","a footnote marker"),("pencil","a number crossed out"),
    ("signature","a verification note")], cols=5)
S["j11-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("book",300,192,0.24),("book",340,192,0.24),
     ("book",380,192,0.24),("notebook",450,196,0.26),("shelf",620,120,0.5),
     ("window",815,56,0.98)],
    clockat=(140,46,22,12,0))
S["j11-f3"]=lambda: f_icons([("form","a request filled in"),("door","a request handed over"),
    ("printer","a party list printed"),("pen","the printout dated"),
    ("square","a cell left empty"),("signature","a verification initialled")], cols=3)
S["j11-f4"]=lambda: f_realia(tbl("","One subject, several instruments",
    ["The subject","How many documents","What a hurried reader merges",
     "What the merger would cost"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The merger I have seen made:</b>"), 580)
S["j11-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Reference note 11 &middot; cultural property in armed conflict",
    "<p><b>The subject.</b> The protection of cultural property in the event of armed conflict is "
    "governed, at the level of the instruments we are concerned with here, by three separate "
    "texts.</p>"
    + table_html(["",""],
      [["<b>1</b>","the Convention of <b>1954</b>"],
       ["<b>2</b>","the <b>First Protocol</b>, of the same year"],
       ["<b>3</b>","the <b>Second Protocol</b>, of <b>1999</b>"]])
    + "<p><b>Each has its own list of parties.</b> A state may be party to the Convention and not "
    "to the First Protocol. A state may be party to the Convention and the First Protocol and not "
    "to the Second. The three lists overlap and none of them contains the others.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What we do not write.</b> We do not add the "
    "three lists together. <b>We do not write a single figure for the whole subject.</b> We do not "
    "write that a state is party to <i>the 1954 instruments</i> when we have checked only one of "
    "them. And we do not state any of the three figures from memory.</p>"
    "<p><b>What we write instead.</b> Until each figure has been verified against the depositary's "
    "own record and the printout dated, the drafter writes this:</p>"
    "<p style='background:#f2efe8;padding:9px'><i>Participation in the Convention of 1954, in the "
    "First Protocol of 1954 and in the Second Protocol of 1999 is recorded separately in respect of "
    "each instrument; the figures are being verified against the depositary's record and will be "
    "inserted.</i></p>"
    "<p><b>Why this unit has no figure in it.</b> Because the discipline being taught is the one "
    "that operates before the figure arrives. Every other unit in this book shows a published count "
    "and says what it does not show. <b>This one shows the sentence you write when you do not yet "
    "have a count at all.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Convention for the Protection of Cultural "
    "Property in the Event of Armed Conflict, done at The Hague on 14 May 1954, with its First "
    "Protocol of the same date and its Second Protocol of 26 March 1999. Participation figures are "
    "published by the depositary in respect of each instrument separately and are deliberately not "
    "reproduced here.</p>"))
S["j11-f6"]=lambda: f_realia(tbl("Word study","Who did the work, and what I write",
    ["Who did the work","What I write"],
    [["The reference section checked the list.","We <b>had the list checked</b>."],
     ["The librarian dated the printout.","We <b>had the printout dated</b>."],
     ["Nobody has checked it yet.","It <b>has not been checked</b> yet."],
     ["Legal Affairs is verifying the figures.","The figures <b>are being verified</b>."],
     ["Somebody must confirm the third list.",""],
     ["The section printed it for us.",""]]), 560)
S["j11-f7"]=lambda: f_matrix(["1954","First Prot.","Second Prot."],
    [("own list of parties",["yes","yes","yes"]),
     ("contains the others",["no","no","no"]),
     ("may be added to the rest",["no","no","no"]),
     ("printed in this unit",["no","no","no"])])
S["j11-f8"]=lambda: f_icons([("form","a reference request"),("door","handed over"),
    ("pen","a dated printout"),("square","an empty cell"),
    ("quotemark","a footnote marker"),("signature","a verification line")], cols=3)
S["j11-f9"]=lambda: f_realia(tbl("Figures note &middot; cultural property instruments", None,
    ["Instrument","Parties","Printout dated"],
    [["Convention, 1954","[figure]","12 November"],
     ["First Protocol, 1954","[figure]","12 November"],
     ["Second Protocol, 1999","<sup>1</sup>","&mdash;"]],
    note="<sup>1</sup> <i>Not verified at the date of this note. The figure has been requested from "
    "the reference section and will be inserted when the dated printout is received.</i><br>"
    "<b>Verified:</b> Reference Section / Legal Affairs, 12 November. <b>Outstanding:</b> one "
    "row."), 580)
S["j11-f10"]=lambda: f_scene(940,430, people=[("hana",320,176,{}),
     ("omar",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("book",295,192,0.24),("book",335,192,0.24),
     ("book",375,192,0.24),("review",445,196,0.26),("window",805,56,0.96)],
    clockat=(140,46,22,5,0))
S["j11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Figures note A", None,
        "<p>The three instruments, taken together, have approximately 130 parties.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Figures note B", None, ["Instrument","Parties","Dated"],
        [["Convention 1954","[figure]","12 Nov"],["First Protocol","[figure]","12 Nov"],
         ["Second Protocol","<sup>1</sup>","&mdash;"]],
        note="<sup>1</sup> not verified; requested; will be inserted. <b>Checked by:</b> Reference "
        "Section."), w)[0:3],
    w=920, h=300)
S["j11-f12"]=lambda: f_realia(doc("Two figures notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The three instruments, taken together, have approximately 130 parties.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Participation is recorded separately in respect of each instrument.</b> Convention 1954: "
    "[figure], printout dated 12 November. First Protocol 1954: [figure], printout dated 12 "
    "November. Second Protocol 1999: <sup>1</sup>.<br>"
    "<span style='font-size:12px'><sup>1</sup> not verified at the date of this note; requested; "
    "will be inserted.</span><br>"
    "<b>We had the first two lists checked by the Reference Section and had each printout "
    "dated.</b></p>",
    "<i>Taken together</i> performs an addition no depositary has performed."))
S["j11-f13"]=lambda: f_realia(form("Figures note planner",
    [("1 &nbsp;Scope, and the separate-instruments sentence",""),
     ("2 &nbsp;The table, with a date column",""),
     ("3 &nbsp;How the figures were obtained",""),
     ("4 &nbsp;What must not be written",""),
     ("5 &nbsp;Outstanding, with a time","")]), 520)
S["j11-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("bah",200,172,{}),
     ("hana",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("nadia",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,192,0.22),("printer",560,198,0.4),
     ("shelf",425,120,0.42),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(290,26,215,108,"THREE LISTS",
      [("1954 Convention",""),("First Protocol",""),("Second Protocol",""),("no total","")]),
    clockat=(240,30,22,5,0))
S["j11-f15"]=lambda: f_chart([("yes, and it was caught",5),("yes, and it was not caught",3),
    ("no",6),("I don't know",3),("I have been asked to and refused",5)])
S["j11-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("review",320,196,0.26),("archive",395,194,0.26),
     ("note",470,194,0.24),("pen",540,198,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,10,0))

# ---------------- Unit 12 · The Depositary's Own Notes ----------------
S["j12-f1"]=lambda: f_icons([("book","a thick status volume"),("review","columns of dates"),
    ("quotemark","footnote markers"),("note","a headnote in small type"),
    ("calendar","as at a date"),("logsheet","participants beside parties"),
    ("essay","a reservation in full"),("pen","an objection beneath it"),
    ("square","a disclaimer paragraph"),("magnifier","the notes before the table")], cols=5)
S["j12-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("hana",430,172,{})],
    props=[("desk",240,0,1.25),("book",310,192,0.34),("notebook",390,196,0.24),
     ("book",460,192,0.3),("shelf",630,120,0.5),("window",815,56,0.98)],
    clockat=(140,46,22,11,0))
S["j12-f3"]=lambda: f_icons([("note","a note verbale in the third person"),
    ("quotemark","a phrase of compliments"),("pen","a has-the-honour clause"),
    ("folder","an enclosure line"),("essay","an assurance of consideration"),
    ("stamp","a date and seal, no signature")], cols=3)
S["j12-f4"]=lambda: f_realia(tbl("","The notes above the table",
    ["The table","What the publisher says it records","As at what date",
     "What it does not imply"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The note I had never read:</b>"), 580)
S["j12-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Reference note 12 &middot; reading a depositary's status tables",
    "<p><b>The source.</b> The United Nations publishes, through its Treaty Section, the status of "
    "the multilateral treaties deposited with the Secretary-General, together with <b>notes on how "
    "treaty actions are recorded</b>. The notes, not the tables, are the subject of this note.</p>"
    "<p><b>1 The table is current only as at a stated date.</b> The published status carries the "
    "date to which it is current. A figure taken from it must be quoted with that date.</p>"
    "<p><b>2 A recorded action carries its own date.</b> Ratification, acceptance, approval and "
    "accession are <b>recorded with the date of deposit</b> of the instrument. The date of deposit "
    "is not the date of entry into force for that state, which the notes explain separately.</p>"
    "<p><b>3 Accession and ratification have the same legal effect.</b> A state which accedes "
    "becomes a party as fully as one which ratifies. <b>A table that lists both is not listing two "
    "classes of party.</b></p>"
    "<p><b>4 Some columns include signatories.</b> Where a column is headed <b>participant</b>, it "
    "may include states that have signed without becoming parties. <b>Counting a participant "
    "column gives a figure that is not the number of parties.</b></p>"
    "<p><b>5 Reservations, declarations and objections are reproduced.</b> The notes record them "
    "with their dates, and the text of each. A state's name therefore tells you less than the entry "
    "under its name.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The disclaimer.</b> The published status "
    "also carries language to the effect that <b>the inclusion of an entity in these tables does "
    "not imply any position on questions of status or recognition</b>. A drafter who quotes a table "
    "has quoted that too.</p>"
    "<p><b>Why this is the last reading in this book.</b> Every other unit asked what a figure did "
    "not show. <b>This one shows that the publisher said so first</b>, in smaller type, above the "
    "table.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the United Nations Treaty Collection's "
    "published status of multilateral treaties deposited with the Secretary-General, and the Treaty "
    "Section's published notes on how treaty actions are recorded. No figure is quoted here: the "
    "practice described, not any count, is the subject.</p>"))
S["j12-f6"]=lambda: f_realia(tbl("Review &middot; the eleven devices",
    "Match the device to the fragment",
    ["Device","Example"],
    [["qualifying marker","<b>insofar as</b> the two counts are made on the same basis"],
     ["fronting","<b>It is the date that</b> decides precedence"],
     ["negative adverb + inversion","<b>Rarely has</b> a short annex outlived its congress"],
     ["passive causative","We <b>had the lists checked</b> by the Reference Section"],
     ["passive of verification","The figure <b>has not been verified</b>"],
     ["impersonal reporting","<b>It is understood that</b> the figure is provisional"],
     ["concession","<b>While</b> the figure is published, it counts documents"],
     ["refusal to supply","The figure <b>could not officially be stated</b>"],
     ["separate instruments","recorded separately <b>in respect of</b> each instrument"],
     ["as-at dating","the figure <b>as at</b> 12 November"],
     ["honest absence","the cell <b>is left empty</b>, with a footnote"]]), 620)
S["j12-f7"]=lambda: f_process(["the headnote","the as-at date","the disclaimer","the table"],
    w=640)
S["j12-f8"]=lambda: f_realia(doc("Note No. 412/2", None,
    "<p>The Ministry of Foreign Affairs and Expatriates <b>presents its compliments</b> to the "
    "Embassy of Astrand <b>and has the honour to</b> transmit a corrected figure in respect of the "
    "participation referred to in the Ministry's note No. 398/2 of 4 November.</p>"
    "<p><b>The corrected figure, with the date to which it is current and the source from which it "
    "is taken, is enclosed herewith.</b></p>"
    "<p>The Ministry <b>avails itself of this opportunity to renew to</b> the Embassy of Astrand "
    "<b>the assurances of its highest consideration.</b></p>"
    "<p>Damascus, 14 November &nbsp; <i>[seal]</i></p>"
    + table_html(["Enclosure",""],
      [["<b>Figure</b>","169 parties"],
       ["<b>Column</b>","parties, as distinct from the participant column"],
       ["<b>As at</b>","12 November"],["<b>Source</b>","the depositary's published status"],
       ["<b>Checked by</b>","Reference Section, printout dated 12 November"]]),
    "The figure given in note No. 398/2 was taken from the participant column, which includes "
    "states that have signed without becoming parties."))
S["j12-f9"]=lambda: f_scene(940,430, people=[("omar",320,176,{"seated":True}),
     ("hana",420,172,{})],
    props=[("desk",230,0,1.25),("book",300,192,0.34),("folder",380,194,0.24),
     ("note",450,194,0.24),("book",520,192,0.28),("window",805,56,0.96)],
    clockat=(140,46,22,11,0))
S["j12-f10"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>We would like to inform you that we regret an error in our previous note, which arose "
        "because our reference section had not yet printed the current list, and we apologize for "
        "any confusion caused within your Embassy.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p>The Ministry <b>presents its compliments</b> and <b>has the honour to</b> transmit a "
        "corrected figure. <b>Enclosed herewith.</b> The Ministry <b>avails itself</b> of this "
        "opportunity to renew the assurances of its highest consideration.</p>"), w)[0:3],
    w=920, h=300)
S["j12-f11"]=lambda: f_realia(doc("Two documents", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Document 1</b><br>"
    "We would like to inform the Embassy that an error occurred in our note of 4 November. The "
    "figure was taken from the wrong column because the current list had not been printed by our "
    "reference section, and we would like to apologize for the confusion.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Document 2</b><br>"
    "The Ministry <b>presents its compliments</b> to the Embassy of Astrand <b>and has the honour "
    "to</b> transmit a corrected figure in respect of its note No. 398/2 of 4 November. <b>The "
    "corrected figure, with the date to which it is current and its source, is enclosed "
    "herewith.</b> The Ministry <b>avails itself of this opportunity to renew</b> the assurances of "
    "its highest consideration.<br><br>"
    "<b>Enclosure</b> &mdash; figure 169 parties &middot; column: parties, not participant "
    "&middot; as at 12 November &middot; source: the depositary's published status &middot; checked "
    "by the Reference Section, printout dated 12 November.</p>",
    "The first is in the first person and has no enclosure. The second can be answered in one "
    "line."))
S["j12-f12"]=lambda: f_realia(form("Note verbale planner",
    [("Reference number",""),("The opening formula",""),("The act, in one line",""),
     ("The enclosure line",""),("The closing formula",""),
     ("<b>Enclosure</b> &mdash; figure",""),("column",""),("as at",""),("source",""),
     ("checked by","")]), 520)
S["j12-f13"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("hana",200,172,{}),
     ("bah",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("nadia",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,192,0.3),("printer",560,198,0.4),
     ("shelf",425,120,0.42),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(285,24,220,112,"A STATUS PAGE",
      [("headnote",""),("as at","date"),("disclaimer",""),("the table","")]),
    clockat=(240,30,22,4,0))
S["j12-f14"]=lambda: f_chart([("read the notes above the table",7),("quote the as-at date",6),
    ("name who checked it",4),("write the sentence instead of the figure",3),
    ("refuse to merge lists",2)])
S["j12-f15"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("folder",320,194,0.24),("essay",395,194,0.26),
     ("book",465,192,0.3),("pen",540,198,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,0))
S["j12-f16"]=lambda: f_realia(doc("Four things",
    "Printed on a card",
    "<p style='font-size:17px;line-height:2.0'>"
    "<b>1 &nbsp;Read the notes above the table.</b><br>"
    "<b>2 &nbsp;Quote the date to which it is current.</b><br>"
    "<b>3 &nbsp;Count the right column.</b><br>"
    "<b>4 &nbsp;Say who checked it.</b></p>"
    "<p style='font-size:13px;color:#6b6861'>And when a figure cannot be stated, write the sentence "
    "instead.</p>"))
