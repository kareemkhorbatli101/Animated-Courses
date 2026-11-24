# -*- coding: utf-8 -*-
"""Keystone Book 6 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · Bought Against, Not Followed ----------------
S["f07-f1"]=lambda: f_icons([("essay","a tender document"),("refnumber","a numbered clause"),
    ("proof","a supported feature"),("balance","supported with exceptions"),
    ("noentry","not applicable, with a reason"),("signature","a self-declared report"),
    ("computer","keyboard operation"),("speechbubble","captions on a video"),
    ("headset","a support service"),("clipboard","a procurement officer scoring")], cols=5)
S["f07-f2"]=lambda: f_scene(920,420, people=[("lucia",330,176,{"seated":True}),
     ("samira",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,3,20))
S["f07-f3"]=lambda: f_icons([("proof","supported"),("balance","supported with exceptions"),
    ("noentry","not supported"),("quotemark","not applicable, with a justification"),
    ("book","documentation"),("headset","a support service")], cols=3)
S["f07-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The feature","Tested by anybody","The honest answer","The exception in six words"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The clause we would mark not supported:"), 660)
S["f07-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 23",
    "Platform team &middot; accessibility in procurement &middot; page 1 of 1",
    "<p><b>The standard.</b> EN 301 549, accessibility requirements for ICT products and services, "
    "produced jointly by the three European standards organizations; the version most tenders cite "
    "is 3.2.1, of March 2021, and later versions exist. It was developed in response to a European "
    "Commission mandate and is written into public procurement.</p>"
    "<p><b>Why it reaches us.</b> We sell to no public body. Our customers do, so they are asked for "
    "it, and they ask us. Not one of our contracts requires this standard directly; four require us "
    "to answer against it.</p>"
    + table_html(["Area","What it addresses"],
      [["functional performance","what a user with a given limitation must be able to do"],
       ["generic requirements","closed functionality, biometrics, preservation of information"],
       ["<b>web content</b>","incorporates content criteria at the first two levels"],
       ["non-web documents and software","the same ideas outside a browser"],
       ["<b>documentation and support services</b>","manuals, help, and the people who answer the "
        "telephone"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>The shape of a "
    "requirement.</b> Where ICT provides a particular feature, it shall also provide something "
    "else. The obligation is conditional. That is why the response form permits not applicable as "
    "an answer, and why a not applicable without a justification is worthless. At no point does the "
    "standard test anything: a conformance report is self-declared.</p>"
    "<p><b>Where we are.</b> The web clauses are mostly answerable from earlier work. The clauses we "
    "fail are documentation and support services. Our manuals are not navigable by a screen reader, "
    "and nobody has ever tested our help desk. Our honest answer there is not supported, and this is "
    "the first year we will write it.</p>",
    "Source: EN 301 549, Accessibility requirements for ICT products and services, produced by CEN, "
    "CENELEC and ETSI following a European Commission mandate; the widely cited version is 3.2.1 of "
    "March 2021, and later versions exist. Its requirements are conditional in form, and conformance "
    "is self-declared by the supplier: the standard itself tests nothing and verifies nothing."),
    580)
S["f07-f6"]=lambda: f_realia(tbl("Word study","Obligation language",
    ["Structure","Who it binds","Example"],
    [["Where ICT &hellip; , it shall &hellip;","the product, conditionally",
      "<b>Where ICT provides</b> visual output, <b>it shall provide</b> a text alternative."],
     ["The supplier shall provide &hellip;","you, directly",
      "<b>The supplier shall provide</b> a conformance report."],
     ["It shall be demonstrated that &hellip;","you, with evidence",
      "<b>It shall be demonstrated that</b> each function is keyboard operable."],
     ["shall not","a prohibition","Information <b>shall not</b> be conveyed by color alone."],
     ["is required to","&nbsp;","&nbsp;"],
     ["where applicable","&nbsp;","&nbsp;"]]), 640)
S["f07-f7"]=lambda: f_chart([("supported",164),("supported with exceptions",27),
    ("not supported",9),("not applicable, justified",14)], unit="clauses")
S["f07-f8"]=lambda: f_icons([("computer","keyboard-only operation"),
    ("speechbubble","a caption"),("quotemark","a text alternative"),
    ("book","an accessible manual"),("headset","a help desk operator"),
    ("noentry","not applicable, with a reason")], cols=3)
S["f07-f9"]=lambda: f_realia(tbl("Conformance extract",
    "Platform team &middot; answered against version 3.2.1 of March 2021",
    ["Clause","Answer","The exception, in six words","Tested by"],
    [["text alternatives","<b>supported with exceptions</b>",
      "four chart types in reporting","S. Aziz"],
     ["keyboard operation","supported","&mdash;","S. Aziz"],
     ["captions","supported","&mdash;","M. Nowak"],
     ["documentation format","<b>not supported</b>","manuals not screen-reader navigable","&mdash;"],
     ["support service request","<b>not supported</b>","<b>never tested, rather than failed</b>",
      "&mdash;"],
     ["two-way voice","not applicable","product has no voice functionality","&mdash;"]],
    note="Nine not supported, all of them documentation and support. A page of unbroken supported is "
    "read as a page nobody checked."), 720)
S["f07-f10"]=lambda: f_scene(960,430, people=[("lucia",300,176,{"seated":True}),
     ("samira",385,172,{}),("marek",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",385,196,0.24),
     ("note",452,194,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,3,30))
S["f07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report A", None,
        "<p>Supported. Two hundred times.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Report B", None,
        "<p>164 supported.<br>27 supported with exceptions, each named in six words.<br>"
        "9 not supported, all in documentation and support.<br>"
        "Answered against 3.2.1 of March 2021.</p>"), w)[0:3],
    w=920, h=300)
S["f07-f12"]=lambda: f_realia(doc("Two conformance reports", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Report 1</b><br>"
    "Supported, for every clause.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Report 2</b><br>"
    "Three values, named exceptions of about six words, nine grouped failures, and a version "
    "line.</p>",
    "Never tested is a different answer from failed, and only one of them has a date attached."),
    620)
S["f07-f13"]=lambda: f_realia(form("Report planner",
    [("The version answered against",""),("What the report is not",""),
     ("The counts by answer value",""),("The grouped failures, with owners and dates",""),
     ("One exception in six words",""),("What you are not doing","")]), 520)
S["f07-f14"]=lambda: f_scene(980,440,
    people=[("lucia",55,176,{}),("samira",115,176,{"seated":True}),("marek",195,172,{}),
     ("mei",280,176,{"seated":True}),("hana",360,172,{"seated":True}),
     ("adeel",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("chiamaka",665,170,{}),("paula",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("oksana",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,4,0))
S["f07-f15"]=lambda: f_chart([("yes, formally",3),("yes, once",5),("no",9),
    ("there is no product",2),("I do not know",4)])
S["f07-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",316,196,0.24),("note",386,194,0.24),
     ("headset",452,196,0.22),("book",518,196,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 8 · Somebody Has Found Something ----------------
S["f08-f1"]=lambda: f_icons([("essay","a researcher's report"),("email","a general inbox"),
    ("board","a published policy"),("portal","a file at a known address"),
    ("messages","an acknowledgment sent"),("key","a secure channel"),
    ("timetable","a coordination timeline"),("stamp","an advisory published"),
    ("signature","a credit line"),("door","a legal threat")], cols=5)
S["f08-f2"]=lambda: f_scene(920,420, people=[("oksana",330,176,{"seated":True}),
     ("marek",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("email",395,196,0.22),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,10))
S["f08-f3"]=lambda: f_icons([("address","a point of contact"),("key","a secure channel"),
    ("timer","a stated response interval"),("barrier","a scope statement"),
    ("signature","a credit line"),("handshake","a good-faith statement")], cols=3)
S["f08-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The company","The published route","The file at the known address","Who reads it first"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one with no route at all:"), 660)
S["f08-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 24",
    "Platform team &middot; receiving a report from outside &middot; page 1 of 1",
    "<p><b>The documents.</b> ISO/IEC 29147, vulnerability disclosure, second edition, 2018, which "
    "gives guidelines on receiving reports and publishing advisories; and RFC 9116, April 2022, "
    "which specifies a plain-text file at a known web address so that a finder can discover where to "
    "send a report.</p>"
    + table_html(["Element","Why"],
      [["a <b>point of contact</b>","so a report does not arrive in a sales inbox"],
       ["a <b>secure channel</b>","so it can be sent without being readable in transit"],
       ["a <b>stated response interval</b>","so the finder knows whether to wait"],
       ["a <b>scope statement</b>","so they know which systems you want reports about"],
       ["<b>credit</b> arrangements","because most finders want their name on the advisory"],
       ["a <b>good-faith statement</b>","so that helping us is not legally frightening"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>The first ninety minutes.</b> "
    "A report arrives. The single factor that most determines the next six months is whether a human "
    "acknowledges it quickly. To that end, our handbook now contains a four-line acknowledgment that "
    "any member of the support team may send without approval. In which connection, it contains one "
    "further instruction: say nothing whatsoever about legality in a first reply. Conversely, a "
    "single sentence about unauthorized access converts somebody who was helping us into somebody "
    "with a grievance and an audience.</p>"
    "<p><b>What we have.</b> We publish no policy, no contact and no file at the known address. "
    "Three reports have reached us in two years, all three through a sales inbox, and the fastest "
    "acknowledgment took eleven days. That said, all three finders waited for us, which was luck "
    "rather than process.</p>",
    "Source: ISO/IEC 29147:2018, Information technology &mdash; Security techniques &mdash; "
    "Vulnerability disclosure, second edition, which provides guidelines for receiving reports and "
    "publishing advisories; and RFC 9116, April 2022, which defines a plain-text file at a "
    "well-known location for security contact information. The first is guidance and sets no "
    "timeline; neither covers the internal handling of a report."), 580)
S["f08-f6"]=lambda: f_realia(tbl("Word study","Discourse markers",
    ["Marker","What it signals","Example"],
    [["to that end","an action serving the point just made",
      "<b>To that end</b>, the handbook contains a four-line reply."],
     ["in which connection","a related second point",
      "<b>In which connection</b>, it also forbids legal language."],
     ["conversely","the opposite case",
      "<b>Conversely</b>, one legal sentence creates a grievance."],
     ["that said","a concession to what you just argued",
      "<b>That said</b>, all three finders waited for us."],
     ["more importantly","&nbsp;","&nbsp;"],
     ["in practice","&nbsp;","&nbsp;"]],
    note="A marker must name a relation. If you cannot say which, delete it and the paragraph "
    "improves."), 640)
S["f08-f7"]=lambda: f_timeline([(0.05,"a report arrives","the sales inbox"),
    (0.32,"11 days","acknowledgment"),(0.68,"40 days","a fix"),
    (0.9,"publication","coordinated")], nowx=0.1, w=940)
S["f08-f8"]=lambda: f_icons([("address","a published contact"),("key","a public key"),
    ("timer","a stated interval"),("barrier","a scope statement"),
    ("signature","a credit line"),("handshake","a good-faith statement")], cols=3)
S["f08-f9"]=lambda: f_realia(doc("Security report policy &middot; one page",
    "Platform team &middot; to be published at the known address",
    "<p><b>1 Contact.</b> A named security address, with a public key published beside it, and a "
    "plain-text file at the known web address carrying both.</p>"
    "<p><b>2 What happens, and when.</b> We acknowledge within one hour in working hours and within "
    "twelve hours otherwise. Any member of the support team may send that acknowledgment without "
    "approval, and it says nothing about legality.</p>"
    "<p><b>3 Our interval.</b> A substantive reply within 72 hours; a remediation plan within ten "
    "working days; publication coordinated with you. The guideline we follow sets no timeline.</p>"
    "<p><b>4 Scope, credit and good faith.</b> The products and domains listed below; two systems "
    "are out of scope and named. We credit you in the form you choose. Good-faith testing within "
    "scope will not be met with legal action from us.</p>",
    "A company with no published route has already answered the question of whether it wants "
    "reports, and nobody here ever decided that."), 600)
S["f08-f10"]=lambda: f_scene(960,430, people=[("oksana",300,176,{"seated":True}),
     ("hana",385,172,{}),("marek",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("email",385,196,0.22),
     ("essay",452,196,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,9,30))
S["f08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Reply A", None,
        "<p>We will investigate and respond in due course. Please note that testing our systems is "
        "unauthorized.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Reply B", None,
        "<p>Thank you. We have received this.<br>A named engineer is looking at it today.<br>"
        "We will write again by Thursday.<br>Nothing about legality.</p>"), w)[0:3],
    w=920, h=300)
S["f08-f12"]=lambda: f_realia(doc("Two policy pages", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 1</b><br>"
    "We take security seriously.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 2</b><br>"
    "Six headed sections: contact, channel, interval, scope, credit and good faith.</p>",
    "Almost everything that follows a report is decided in the first ninety minutes, and the "
    "deciding factor is whether a human replied."), 620)
S["f08-f13"]=lambda: f_realia(form("Policy planner",
    [("Why this page exists",""),("Contact and channel",""),("What happens, and when",""),
     ("Your interval",""),("Scope and credit",""),("Good faith","")]), 520)
S["f08-f14"]=lambda: f_scene(980,440,
    people=[("oksana",55,176,{}),("marek",115,176,{"seated":True}),("hana",195,172,{}),
     ("mei",280,176,{"seated":True}),("lucia",360,172,{"seated":True}),
     ("adeel",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("chiamaka",665,170,{}),("paula",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("email",330,198,0.22),
     ("printer",430,196,0.3),("essay",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,10,0))
S["f08-f15"]=lambda: f_chart([("a published security address",4),("a general inbox",8),
    ("a salesperson",3),("social media",2),("nowhere",6)])
S["f08-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("email",316,196,0.22),("essay",384,196,0.24),
     ("note",452,194,0.24),("messages",518,196,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 9 · How Long Must This Exist ----------------
S["f09-f1"]=lambda: f_icons([("receipt","a record of a transaction"),
    ("email","a record received"),("signature","authenticity"),
    ("padlock","integrity"),("folder","usability"),
    ("balance","appraisal"),("calendar","a retention period"),
    ("stamp","a disposal authority"),("bins","a record destroyed"),
    ("archive","transferred to an archive")], cols=5)
S["f09-f2"]=lambda: f_scene(920,420, people=[("paula",330,176,{"seated":True}),
     ("lucia",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("spreadsheet",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,10,0))
S["f09-f3"]=lambda: f_icons([("signature","authenticity"),("clock","reliability"),
    ("padlock","integrity"),("folder","usability"),
    ("balance","appraisal"),("stamp","a disposal authority")], cols=3)
S["f09-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The record","How long","From what event","Who set it"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The row with no trigger event:"), 640)
S["f09-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 25",
    "Records &middot; retention and what a record is &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO 15489-1, records management, part 1, concepts and principles, "
    "second edition, 2016. It defines a record as information created, received and maintained as "
    "evidence and as an asset, in pursuance of legal obligations or in the transaction of business. "
    "This note is not legal advice.</p>"
    + table_html(["Characteristic","What it means","Us"],
      [["<b>authenticity</b>","it is what it purports to be","met"],
       ["<b>reliability</b>","made at the time, by somebody in a position to know","met"],
       ["<b>integrity</b>","complete and unaltered","met &mdash; every object is checksummed"],
       ["<b>usability</b>","locatable, retrievable, readable",
        "<b>failed for two of four 2019 formats</b>"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>Integrity without "
    "usability.</b> We can prove that a 2019 file has not changed and we cannot open it. A record "
    "that cannot be read cannot be used as evidence, which is the only reason anybody kept it.</p>"
    "<p><b>Retention, and the column nobody filled in.</b> The standard does not give retention "
    "periods and says so: they derive from legal and business requirements in each jurisdiction. "
    "Fourteen record types. Every row has a duration. Eleven have no trigger event. Seven years "
    "appears nine times, and seven years from creation, from the end of the contract, from the end "
    "of the financial year in which the contract ended, and from the last transaction are four "
    "different dates &mdash; up to eleven years apart for a long-standing customer.</p>"
    "<p><b>What this means in one sentence.</b> We have a retention schedule that cannot be "
    "executed, and we have been describing ourselves as compliant with it for four years.</p>",
    "Source: ISO 15489-1:2016, Information and documentation &mdash; Records management &mdash; Part "
    "1: Concepts and principles, second edition. It defines records and the characteristics of "
    "authoritative records, and the processes of appraisal, retention and disposition. It does not "
    "specify retention periods, which derive from legal and business requirements, and nothing here "
    "is legal advice."), 580)
S["f09-f6"]=lambda: f_realia(tbl("Word study","Quantified ranges",
    ["Expression","What it fixes","Example"],
    [["no fewer than","a floor","Kept for <b>no fewer than</b> seven years."],
     ["up to and including","an inclusive ceiling","Applies to records <b>up to and including</b> 2019."],
     ["between &hellip; inclusive","both ends","<b>Between</b> 2015 <b>and</b> 2019 <b>inclusive</b>."],
     ["from the end of","the trigger, precisely",
      "Seven years <b>from the end of</b> the financial year in which the contract ended."],
     ["not later than","&nbsp;","&nbsp;"],
     ["for a minimum of","&nbsp;","&nbsp;"]],
    note="A duration is not a period. A period needs a trigger event and, where two rules collide, "
    "both a floor and a ceiling."), 640)
S["f09-f7"]=lambda: f_timeline([(0.08,"from creation","earliest"),
    (0.45,"from contract end","+4 years"),(0.62,"from the financial year end","+4 years, +months"),
    (0.95,"from the last transaction","latest")], nowx=0.08, w=940)
S["f09-f8"]=lambda: f_icons([("signature","a verified origin"),("clock","made at the time"),
    ("padlock","an unchanged file"),("noentry","a file that will not open"),
    ("balance","an appraisal list"),("stamp","a signed disposal authority")], cols=3)
S["f09-f9"]=lambda: f_realia(tbl("Schedule extract","Records &middot; fourteen record types",
    ["Record type","Duration","Trigger event","Floor or ceiling","Owner"],
    [["customer records","7 years","<b>trigger unknown &mdash; asked legal 12 May</b>","&mdash;",
      "P. Reis"],
     ["contracts","10 years","<b>trigger unknown &mdash; asked legal 12 May</b>","&mdash;","P. Reis"],
     ["access logs","1 year","from the date of the entry","<b>no fewer than</b>","P. Reis"],
     ["tax records","7 years","<b>from the end of</b> the financial year","<b>no fewer than</b>",
      "finance"],
     ["incident records","7 years","<b>trigger unknown &mdash; asked legal 12 May</b>","&mdash;",
      "P. Reis"]],
    note="Eleven of fourteen rows have no trigger event. An empty cell looks finished; a cell with a "
    "question and a date in it is an open item."), 720)
S["f09-f10"]=lambda: f_scene(960,430, people=[("paula",300,176,{"seated":True}),
     ("lucia",385,172,{}),("yusuf",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("spreadsheet",385,196,0.24),
     ("note",452,194,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,10,30))
S["f09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Schedule A", None,
        "<p>A duration in every row. No trigger column.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Schedule B", None,
        "<p>Durations and trigger events.<br>Floors and ceilings.<br>Owners.<br>"
        "Eleven cells holding a question and the date it was asked.</p>"), w)[0:3],
    w=920, h=300)
S["f09-f12"]=lambda: f_realia(doc("Two retention schedules", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Schedule 1</b><br>"
    "Durations only.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Schedule 2</b><br>"
    "Durations, triggers, floors and ceilings, owners, and questions with dates where the answer is "
    "not ours.</p>",
    "For four years we have described ourselves as compliant with a document that cannot be executed "
    "by anybody."), 620)
S["f09-f13"]=lambda: f_realia(form("Records-note planner",
    [("What the standard does not do",""),("The finding, counted",""),
     ("Why a duration is not a period",""),("What you changed today",""),
     ("The precision you will use",""),("The second problem","")]), 520)
S["f09-f14"]=lambda: f_scene(980,440,
    people=[("paula",55,176,{}),("lucia",115,176,{"seated":True}),("yusuf",195,172,{}),
     ("mei",280,176,{"seated":True}),("hana",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("chiamaka",665,170,{}),("oksana",735,172,{}),("tomas",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("spreadsheet",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,11,0))
S["f09-f15"]=lambda: f_chart([("creation",4),("the end of the contract",5),
    ("the end of the financial year",3),("the last transaction",2),("nobody knows",9)])
S["f09-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("spreadsheet",316,196,0.24),("note",386,194,0.24),
     ("folder",452,196,0.22),("calendar",518,194,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
