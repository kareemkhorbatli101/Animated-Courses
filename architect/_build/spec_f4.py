# -*- coding: utf-8 -*-
"""Keystone Book 6 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · Readable in Fifty Years ----------------
S["f10-f1"]=lambda: f_icons([("crate","a submission package"),("archive","an archival package"),
    ("transfer","a dissemination package"),("book","representation information"),
    ("thread","a provenance history"),("padlock","a fixity check"),
    ("key","access rights"),("family","a designated community"),
    ("portal","ingest"),("calendar","a preservation plan")], cols=5)
S["f10-f2"]=lambda: f_scene(920,420, people=[("paula",330,176,{"seated":True}),
     ("mei",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,2,10))
S["f10-f3"]=lambda: f_icons([("thread","provenance"),("quotemark","context"),
    ("refnumber","reference"),("padlock","fixity"),
    ("key","access rights"),("book","a format specification")], cols=3)
S["f10-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The file","Its year","Can it be opened today","What 2040 would need"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one whose format is already gone:"), 640)
S["f10-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 26",
    "Records &middot; preservation, continued from note 25 &middot; page 1 of 1",
    "<p><b>The model.</b> ISO 14721, the Open Archival Information System reference model, in the "
    "second edition of 2012; it has been revised since, and a citation should be checked against "
    "the current edition. It is a reference model: it defines concepts and functions and prescribes "
    "no technology.</p>"
    + table_html(["Description","What it answers","Us"],
      [["<b>provenance</b>","where it came from and what was done to it","<b>thin</b>"],
       ["<b>context</b>","why it exists and what it relates to","<b>thin</b>"],
       ["<b>reference</b>","how it is identified","most objects"],
       ["<b>fixity</b>","has it changed","<b>all objects</b>"],
       ["<b>access rights</b>","who may see it","most objects"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>The declaration that decides "
    "everything.</b> The model requires an archive to name a designated community and to make its "
    "holdings independently understandable to that community. That is a declaration, not a fact, and "
    "every other judgment depends on it. We have never made it. Our own engineers in 2026 and an "
    "auditor in 2034 are different communities, and the second will not have anybody here to "
    "ask.</p>"
    "<p><b>What would have had to be true.</b> Two of the four formats written in 2019 require a "
    "component we no longer license. For those files to be readable now, the format specification "
    "would have had to be stored beside them, or a working reader would have had to be preserved, or "
    "the files would have had to be converted while the license still ran. Any one of the three "
    "would have been sufficient. None was done.</p>"
    "<p><b>We could have known.</b> The format was already proprietary in 2019 and the license was "
    "already annual. Somebody would have had to spend about a week writing down what the format was. "
    "Nobody was asked to, which is not the same sentence as nobody could have known.</p>",
    "Source: ISO 14721, the Open Archival Information System (OAIS) reference model, second edition "
    "2012, since revised. It defines information packages, preservation description information and "
    "representation information, and requires an archive to declare a designated community. It is a "
    "reference model: it prescribes no technology or formats, offers no certification, and does not "
    "determine what should be preserved."), 580)
S["f10-f6"]=lambda: f_realia(tbl("Word study","Modal perfects",
    ["Form","What it claims about the past","Example"],
    [["would have had to","a necessary condition, unmet",
      "The specification <b>would have had to be</b> stored beside the file."],
     ["could have","a real possibility, not taken",
      "<b>We could have</b> converted it in 2019."],
     ["should have been","an obligation, unmet",
      "It <b>should have been</b> converted before the license lapsed."],
     ["must have been","a deduction about the past",
      "Somebody <b>must have been</b> renewing that license annually."],
     ["need not have been","&nbsp;","&nbsp;"],
     ["would have needed to be","&nbsp;","&nbsp;"]],
    note="Could not have known asserts an impossibility. Was not asked to find out describes an "
    "absence of instruction, which is a management fact with a name attached."), 660)
S["f10-f7"]=lambda: f_matrix(["how complete","how hard"],
    [("provenance",["thin","hard"]),("context",["thin","hard"]),
     ("reference",["most","moderate"]),("fixity",["all","easy"]),
     ("access rights",["most","moderate"])])
S["f10-f8"]=lambda: f_icons([("thread","a provenance chain"),("quotemark","a context note"),
    ("refnumber","an identifier"),("padlock","a fixity value"),
    ("key","an access rights line"),("book","a specification beside a file")], cols=3)
S["f10-f9"]=lambda: f_realia(tbl("Preservation page &middot; four 2019 formats",
    "Records &middot; section 10.1",
    ["Format","Year written","Readable today","What would have been needed"],
    [["tabular export","2019","<b>yes</b>","&mdash;"],
     ["report bundle","2019","<b>no</b>","the specification, a reader, or a conversion"],
     ["signed archive","2019","<b>yes</b>","&mdash;"],
     ["chart container","2019","<b>no</b>","the specification, a reader, or a conversion"]],
    note="Our designated community, from today: a competent auditor or engineer in 2040, with no "
    "access to anybody who has worked here. Any one of three measures would have been enough."),
    700)
S["f10-f10"]=lambda: f_scene(960,430, people=[("paula",300,176,{"seated":True}),
     ("mei",385,172,{}),("yusuf",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("receipt",385,196,0.22),
     ("note",452,194,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,2,30))
S["f10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Statement A", None,
        "<p>The archive is preserved and intact.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Statement B", None,
        "<p>Stored and checksummed: integrity proven.<br>"
        "Two of four 2019 formats cannot be opened.<br>"
        "Three measures, any one sufficient; none done.<br>"
        "Designated community: an auditor in 2040.</p>"), w)[0:3],
    w=920, h=300)
S["f10-f12"]=lambda: f_realia(doc("Two preservation statements", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Statement 1</b><br>"
    "The archive is preserved and intact.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Statement 2</b><br>"
    "Storage separated from readability, two unreadable formats named, three measures listed, and a "
    "community declared.</p>",
    "Nobody could have known has no name in it, which is exactly why it is the sentence everybody "
    "reaches for."), 620)
S["f10-f13"]=lambda: f_realia(form("Preservation planner",
    [("The model, and what it does not do",""),("What you can prove",""),
     ("What you cannot read",""),("What would have had to be true",""),
     ("The sentence you refuse to write",""),("The community you declare","")]), 520)
S["f10-f14"]=lambda: f_scene(980,440,
    people=[("paula",55,176,{}),("mei",115,176,{"seated":True}),("yusuf",195,172,{}),
     ("lucia",280,176,{"seated":True}),("hana",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("chiamaka",665,170,{}),("oksana",735,172,{}),("tomas",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("archive",330,198,0.22),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,3,0))
S["f10-f15"]=lambda: f_chart([("our own engineers",6),("a future auditor",3),("a customer",2),
    ("a regulator",2),("we have never declared one",10)])
S["f10-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("computer",310,142,0.42),("receipt",390,196,0.22),
     ("note",456,194,0.24),("essay",522,196,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 11 · Three Suppliers Deep ----------------
S["f11-f1"]=lambda: f_icons([("chain","a chain of four suppliers"),
    ("essay","a contract between two"),("transfer","a clause passed downwards"),
    ("form","a tier-one questionnaire"),("barrier","a sub-tier with no contact"),
    ("crate","a component with no provenance"),("signature","an attestation signed"),
    ("clipboard","acquisition language"),("security","a visibility boundary"),
    ("note","what cannot be seen, written down")], cols=5)
S["f11-f2"]=lambda: f_scene(920,420, people=[("lucia",330,176,{"seated":True}),
     ("oksana",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,4,10))
S["f11-f3"]=lambda: f_icons([("councilbuilding","the enterprise level"),
    ("clipboard","the project level"),("truck","the operational level"),
    ("transfer","a flow-down clause"),("signature","an attestation"),
    ("security","a visibility boundary")], cols=3)
S["f11-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The component","The tier-one supplier","Who is behind them","How we know"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="Where our visibility stops:"), 640)
S["f11-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 27",
    "Platform team &middot; supply chain visibility &middot; page 1 of 1",
    "<p><b>The publication.</b> NIST Special Publication 800-161, Revision 1, on cybersecurity "
    "supply chain risk management practices, May 2022. It is guidance. It describes practices at "
    "three levels, supplies acquisition language, and provides a set of controls adapted for supply "
    "chain purposes.</p>"
    "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>What it concedes.</b> While the "
    "publication is long and detailed, it does not claim to solve the central problem, which is that "
    "an organization has a contract with its suppliers and none with its suppliers' suppliers. "
    "Notwithstanding every practice in it, visibility below the first tier rests on obligations "
    "travelling downwards through agreements you will never see. A document that conceded less would "
    "be less useful to us.</p>"
    + table_html(["","Count"],
      [["tier-one suppliers under contract","<b>11</b>"],
       ["contracts containing a flow-down clause","<b>9</b>"],
       ["suppliers asked whether they flowed it down","9"],
       ["suppliers who answered","<b>6</b>"],
       ["answers we can verify","<b>0</b>"]])
    + "<p><b>What a flow-down clause achieves.</b> It obliges our supplier to impose an equivalent "
    "obligation on its own suppliers. Granted that the clause is enforceable against our supplier, "
    "it gives us no relationship with anybody further down, and therefore no right to ask, inspect "
    "or audit. We believe four of the six without reservation, on the basis of six years of dealing "
    "with them, which is a judgment and not evidence.</p>"
    "<p><b>Why say that at all.</b> Albeit less reassuring than the alternative, it is the only "
    "version a customer can rely on. A claim about four tiers is not believed by anybody who has "
    "tried to make one.</p>",
    "Source: NIST Special Publication 800-161, Revision 1, Cybersecurity Supply Chain Risk "
    "Management Practices for Systems and Organizations, May 2022. It is guidance, describing "
    "practices at enterprise, mission and operational levels. It creates no obligation, confers no "
    "right of audit over sub-tier suppliers, and acknowledges that visibility below the first tier "
    "depends on contractual flow-down the acquirer cannot verify."), 580)
S["f11-f6"]=lambda: f_realia(tbl("Word study","Concessive subordination",
    ["Connector","How much it concedes","Example"],
    [["while","a lot, neutrally",
      "<b>While</b> nine contracts carry the clause, we can verify nothing."],
     ["notwithstanding","formally, and dismisses it",
      "<b>Notwithstanding</b> every practice in it, visibility stops at tier one."],
     ["albeit","a qualification, compactly",
      "<b>Albeit</b> less reassuring, it is the only reliable version."],
     ["granted that","accepts the opponent's point",
      "<b>Granted that</b> the clause binds our supplier, it binds nobody below."],
     ["even though","&nbsp;","&nbsp;"],
     ["for all that","&nbsp;","&nbsp;"]],
    note="Concede in the subordinate clause and conclude in the main one. The subordinate clause is "
    "forgiven; the main clause is quoted."), 660)
S["f11-f7"]=lambda: f_chart([("clause and an answer",6),("clause, no answer",3),
    ("no clause",2),("sub-tier suppliers known by name",0)], unit="of eleven")
S["f11-f8"]=lambda: f_icons([("essay","a contract"),("transfer","a clause travelling down"),
    ("form","a tier-one answer"),("barrier","a sub-tier with no contact"),
    ("signature","an attestation letter"),("security","a visibility boundary")], cols=3)
S["f11-f9"]=lambda: f_realia(tbl("Supplier page &middot; eleven tier-one suppliers",
    "Platform team &middot; section 11.1",
    ["Supplier","Contract","Flow-down clause","Attestation","Verified"],
    [["S-01","2019","<b>yes</b>","<b>received</b>","&mdash;"],
     ["S-02","2021","<b>yes</b>","<b>received</b>","&mdash;"],
     ["S-03","2020","<b>yes</b>","none","&mdash;"],
     ["S-04","2018","<b>no</b>","&mdash;","&mdash;"],
     ["S-05","2022","<b>yes</b>","<b>received</b>","&mdash;"],
     ["S-06","2023","<b>no</b>","&mdash;","&mdash;"]],
    note="Eleven seen, zero verified. The last column is empty for every row and will stay empty: "
    "below tier one we hold no contractual relationship."), 700)
S["f11-f10"]=lambda: f_scene(960,430, people=[("lucia",300,176,{"seated":True}),
     ("hana",385,172,{}),("oksana",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",385,196,0.24),
     ("note",452,194,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,4,30))
S["f11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Answer A", None,
        "<p>Full supply chain assurance, all tiers.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Answer B", None,
        "<p>11 tier-one suppliers; 9 flow-down clauses.<br>"
        "6 attestations; 0 verified.<br>"
        "Below tier one: no contract, no right to ask.<br>"
        "Three names and a renewal date each.</p>"), w)[0:3],
    w=920, h=300)
S["f11-f12"]=lambda: f_realia(doc("Two supply chain answers", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Answer 1</b><br>"
    "Full supply chain assurance, all tiers.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Answer 2</b><br>"
    "Counts, a visibility sentence, a judgment declared as one, and three names with renewal "
    "dates.</p>",
    "A page of concessions with no action in it is not honesty; it is modesty, and nobody buys that "
    "either."), 620)
S["f11-f13"]=lambda: f_realia(form("Response planner",
    [("What you can show",""),("The limit, stated plainly",""),
     ("A judgment declared as one",""),("Why you are not claiming more",""),
     ("The gaps, with names and dates",""),("The source of your method","")]), 520)
S["f11-f14"]=lambda: f_scene(980,440,
    people=[("lucia",55,176,{}),("oksana",115,176,{"seated":True}),("hana",195,172,{}),
     ("mei",280,176,{"seated":True}),("tomas",360,172,{"seated":True}),
     ("adeel",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("chiamaka",665,170,{}),("paula",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("chain",330,198,0.22),
     ("printer",430,196,0.3),("essay",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,5,0))
S["f11-f15"]=lambda: f_chart([("at our own systems",6),("at tier one",8),("at tier two",2),
    ("one sub-tier supplier",1),("we have never asked",6)])
S["f11-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("chain",316,196,0.22),("essay",386,196,0.24),
     ("note",452,194,0.24),("calendar",518,194,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 12 · 90.93 and 95.99 ----------------
S["f12-f1"]=lambda: f_icons([("form","a proposal registered"),("essay","a committee draft"),
    ("messages","an inquiry draft circulating"),("signature","a final draft approved"),
    ("book","a published standard"),("magnifier","a periodic review"),
    ("proof","confirmed and kept"),("pencil","marked to be revised"),
    ("noentry","withdrawn"),("note","an amendment attached")], cols=5)
S["f12-f2"]=lambda: f_scene(920,420, people=[("lucia",330,176,{"seated":True}),
     ("hana",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,0))
S["f12-f3"]=lambda: f_icons([("magnifier","under review"),("proof","confirmed"),
    ("pencil","to be revised"),("archive","superseded"),
    ("noentry","withdrawn"),("note","amended")], cols=3)
S["f12-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The document","The edition cited","Its status now","When last checked"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one nobody has ever checked:"), 640)
S["f12-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 28",
    "Platform team &middot; the status of everything we cite &middot; page 1 of 1",
    "<p><b>The system.</b> Standards bodies publish a stage code for every document: a number pair "
    "showing where it stands in its life. The codes are public, and what they describe is a process "
    "position rather than a judgment of quality.</p>"
    + table_html(["Code","Meaning"],
      [["<b>60.60</b>","published and current"],
       ["<b>90.20</b>","under periodic review"],
       ["<b>90.92</b>","to be revised or amended"],
       ["<b>90.93</b>","<b>reviewed and confirmed &mdash; still current</b>"],
       ["<b>95.99</b>","<b>withdrawn &mdash; no longer published</b>"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>The two that cause errors.</b> "
    "What 90.93 does not mean is out of date. It means a committee examined the document, decided "
    "that no change was needed, and set a new review date. Nor does 95.99 mean wrong. What it means "
    "for a citation is narrow and absolute: you cannot conform to a document that is no longer "
    "published.</p>"
    "<p><b>Our four standing answers, checked for the first time.</b> Two cite editions that have "
    "been superseded. One claims conformance with a standard withdrawn in 2021, which is not a "
    "sentence at all. And one current standard was removed from an answer last year by somebody who "
    "read 90.93 as expired.</p>"
    "<p><b>What we have built instead.</b> A register with four columns and one that matters: the "
    "document, the edition we cite, its status code, and the date the code was checked, with the "
    "name of whoever checked it. Granted that this is administrative work of the dullest kind, it is "
    "the only part of our governance that will still be true in five years without anybody thinking "
    "about it.</p>",
    "Source: the harmonized stage codes published by the international standards bodies, in which "
    "60.60 denotes a published standard, 90.93 a standard reviewed and confirmed as current, and "
    "95.99 a withdrawn standard. The codes describe a document's position in its life cycle and are "
    "not a judgment of quality; a confirmed standard is current, and a withdrawn standard cannot be "
    "conformed to."), 580)
S["f12-f6"]=lambda: f_realia(tbl("Word study","Eleven structures, in unit order",
    ["Unit","Structure","Example"],
    [["1","cleft","<b>What the list does not tell you is</b> whether you are affected."],
     ["2","layered attribution","<b>Our supplier states that</b> the code is not present."],
     ["3","heavy noun phrase, unpacked","every 15 minutes, three properties, blocks new sessions"],
     ["4","participle clause","<b>Having read</b> the framework, we answer four practices none."],
     ["5","scope quantifier","<b>Seven of eleven</b> fully, three in part, one not at all."],
     ["6","inversion","<b>Rarely does</b> a company's history match the published order."],
     ["7","obligation language","<b>Where</b> ICT provides output, <b>it shall provide</b> an alternative."],
     ["8","discourse markers","<b>To that end</b>, a four-line reply sits in the handbook."],
     ["9","quantified range","&nbsp;"],
     ["10","modal perfect","&nbsp;"],
     ["11","concessive subordination","&nbsp;"]]), 660)
S["f12-f7"]=lambda: f_chart([("published and current",23),("confirmed",4),("superseded",3),
    ("withdrawn",1),("never checked before June",19)], unit="of 31 cited documents")
S["f12-f8"]=lambda: f_icons([("book","a document with its edition and code"),
    ("signature","a date and an initial"),("noentry","a withdrawn standard"),
    ("proof","a confirmed standard"),("note","an amendment attached"),
    ("spreadsheet","a register row, filled")], cols=3)
S["f12-f9"]=lambda: f_realia(tbl("Register of citations",
    "Platform team &middot; owner: Lucia Ferrara &middot; next check in twelve months",
    ["Document","Edition cited","Status","Checked","By"],
    [["a component list format","2021","60.60","6 June","L.F."],
     ["an exploitability format","2.0, 2022","60.60","6 June","L.F."],
     ["a privacy framework","2011","<b>superseded</b>","6 June","L.F."],
     ["a records standard","2016","<b>90.93 confirmed</b>","6 June","L.F."],
     ["an older security standard","2013","<b>95.99 withdrawn</b>","6 June","L.F."],
     ["an archival reference model","2012","<b>superseded</b>","6 June","L.F."]],
    note="Nineteen more rows, none checked before June. An empty check cell looks exactly like a "
    "register that is current, which is the whole problem one layer up."), 720)
S["f12-f10"]=lambda: f_scene(960,430, people=[("lucia",300,176,{"seated":True}),
     ("hana",385,172,{}),("nour",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",385,196,0.24),
     ("spreadsheet",452,196,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,9,30))
S["f12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Register A", None,
        "<p>Documents and editions.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Register B", None,
        "<p>Documents and editions.<br>A status code per row.<br>"
        "A check date and initials.<br>Nineteen rows marked unchecked.</p>"), w)[0:3],
    w=920, h=300)
S["f12-f12"]=lambda: f_realia(doc("Two registers", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Register 1</b><br>"
    "Documents and editions.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Register 2</b><br>"
    "Status codes, check dates and initials, with nineteen rows marked unchecked.</p>",
    "The last column is the one that makes the others true, and the first one anybody tidying up "
    "will delete."), 620)
S["f12-f13"]=lambda: f_realia(form("Register planner",
    [("Why the register exists",""),("The columns",""),("What the first pass found",""),
     ("The two findings that matter",""),("What the register is not",""),
     ("The owner and the next check date","")]), 520)
S["f12-f14"]=lambda: f_scene(980,440,
    people=[("lucia",55,176,{}),("hana",115,176,{"seated":True}),("nour",195,172,{}),
     ("mei",280,176,{"seated":True}),("chiamaka",360,172,{"seated":True}),
     ("paula",435,176,{"seated":True}),("yusuf",520,170,{}),("grace",595,172,{}),
     ("tomas",665,170,{}),("oksana",735,172,{}),("adeel",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("ines",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("spreadsheet",330,198,0.24),
     ("printer",430,196,0.3),("essay",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,5,0))
S["f12-f15"]=lambda: f_chart([("this year",3),("last year",4),("more than two years ago",5),
    ("never",9),("we have no register",2)])
S["f12-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("spreadsheet",316,196,0.24),("essay",386,196,0.24),
     ("note",452,194,0.24),("book",518,196,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
