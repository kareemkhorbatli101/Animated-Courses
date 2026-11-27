# -*- coding: utf-8 -*-
"""Keystone Book 2 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · The Reader and the Writer ----------------
S["b07-f1"]=lambda: f_icons([("pen","a record written"),("eye","the same record read"),
    ("crate","a field in only one schema"),("note","a default filling a gap"),
    ("danger","an error where no default exists"),("thread","an old name kept as an alias"),
    ("balance","a number read as a wider type"),("folder","a file carrying its schema"),
    ("archive","a year-old record"),("handsup","two versions of one schema")], cols=5)
S["b07-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("priya",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,12,10))
S["b07-f3"]=lambda: f_icons([("crate","the writer has an extra field"),("note","a default fills a gap"),
    ("danger","no default, an error"),("thread","an alias matches a rename"),
    ("balance","a number widened"),("folder","a file carrying its schema")], cols=3)
S["b07-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The change","Default value","What reads the old data","What happened"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that failed at night: ______________________"), 600)
S["b07-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 19",
    "Platform team &middot; schema resolution &middot; page 1 of 1",
    "<p><b>The specification.</b> The Apache Avro specification is published with each release of "
    "the project. It includes a section called Schema Resolution. That section describes what "
    "happens when data written with one schema is read with another.</p>"
    "<p><b>The two schemas.</b> Data is written with the writer's schema. It is read with the "
    "reader's schema. The writer's schema always travels with the data, so the reader can always "
    "work out what the bytes mean. The question is never what these bytes are. It is what they "
    "mean to me.</p>"
    + table_html(["Case","Outcome"],
      [["the <b>writer</b> wrote a field the reader does not have","the value is <b>ignored</b>"],
       ["the <b>reader</b> has a field the writer did not write, <b>with</b> a default",
        "the <b>default is used</b>"],
       ["the same, with <b>no</b> default","<b>an error is signaled</b>"],
       ["the field was renamed, and the old name is an alias","it is <b>matched</b>"]])
    + "<p><b>The case that fails.</b> Read the third row again, because it is the only one that "
    "stops a program. The danger is not in the data. It is in the reader. A field added to a "
    "reader's schema without a default makes every record older than the field unreadable by that "
    "reader.</p>"
    "<p><b>And notice who is affected.</b> The team that added the field has new data and sees "
    "nothing wrong. The failure appears in whatever reads history: a monthly report, a backfill, a "
    "training job, an audit. The gap between the change and the failure can be weeks, and the two "
    "will not look related.</p>"
    "<p><b>Numbers can widen.</b> A value written as a small integer may be read as a larger one, "
    "or as a floating-point number. Widening is allowed and narrowing is not.</p>",
    "Source: the Apache Avro specification, Schema Resolution section, as published with the "
    "project's releases. The specification does not define schema versioning, compatibility "
    "checking or a registry."), 580)
S["b07-f6"]=lambda: f_realia(tbl("Word study","The first conditional",
    ["If + present","will / may + verb"],
    [["<b>If</b> you <b>add</b> a field with a default,","old records <b>will</b> still read."],
     ["<b>If</b> you <b>add</b> one without a default,","the reader <b>will fail</b> on old records."],
     ["<b>If</b> the writer <b>sends</b> an extra field,","the reader <b>will ignore</b> it."],
     ["<b>If</b> you <b>rename</b> a field without an alias,","&nbsp;"],
     ["<b>If</b> nothing <b>reads</b> old data,","&nbsp;"]]), 600)
S["b07-f7"]=lambda: f_chart([("added with a default",38),("added without one",6),
    ("renamed with an alias",4),("renamed without one",2),("removed",3)], unit="changes")
S["b07-f8"]=lambda: f_icons([("crate","an extra field ignored"),("note","a default filling a gap"),
    ("danger","an error, no default"),("thread","an alias matching"),
    ("balance","a number widened"),("folder","a file with its schema")], cols=3)
S["b07-f9"]=lambda: f_realia(tbl("Schema note &middot; changing a schema",
    "Data document, section 7.1",
    ["Change","Rule","In the same change"],
    [["<b>add</b> a field","<b>it must have a default</b>",
      "one sentence saying what <b>absent</b> means"],
     ["<b>remove</b> a field","readers that still want it need a default",
      "a note of which readers want it"],
     ["<b>rename</b> a field","the reader must keep the old name as an alias","both names"],
     ["<b>change</b> a type","<b>widening only</b>","the two types, written out"]],
    note="Every field gets a default."), 600)
S["b07-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("priya",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("logsheet",385,194,0.26),
     ("essay",450,194,0.26),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,12,0))
S["b07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Change A", None,
        "<p>A field is added. No default value.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Change B", None,
        "<p>The same field is added, with a default.<br>"
        "One sentence says what absence means.<br>"
        "A test reads a record written a year earlier.</p>"), w)[0:3],
    w=920, h=300)
S["b07-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Schema changes must be backwards compatible.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "A rule for adding, removing, renaming and retyping a field. The default requirement. One "
    "sentence per field about what absence means. The test that must run.</p>",
    "One of these stopped a monthly job a third of the way through, at two in the morning."))
S["b07-f13"]=lambda: f_realia(form("Schema-change planner",
    [("The four kinds of change",""),("The default requirement",""),("What absence means",""),
     ("The test that must pass",""),("Who chooses the default",""),("Not in this note","")]), 520)
S["b07-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("priya",195,172,{}),
     ("chiamaka",280,176,{"seated":True}),("mei",360,172,{"seated":True}),
     ("tomas",435,176,{"seated":True}),("lars",520,170,{}),("marek",595,172,{}),
     ("ines",665,170,{}),("grace",735,172,{}),("oksana",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("linh",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("logsheet",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,1,0))
S["b07-f15"]=lambda: f_chart([("yes",6),("some",8),("no",4),("we do not use schemas",2),
    ("I do not know",3)])
S["b07-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("logsheet",320,194,0.26),("essay",390,194,0.26),
     ("note",455,194,0.24),("pen",520,200,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,2,0))

# ---------------- Unit 8 · This Will Stop Working ----------------
S["b08-f1"]=lambda: f_icons([("logsheet","a header with a date"),("calendar","a date circled ahead"),
    ("signpost","a link to an announcement"),("proof","a service answering"),
    ("noentry","the same service after the date"),("transfer","a migration to a new path"),
    ("timer","a notice period"),("email","a customer reading a message"),
    ("essay","an announcement with a plan"),("handsup","a date nobody had seen")], cols=5)
S["b08-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("grace",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("calendar",460,192,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,10,55))
S["b08-f3"]=lambda: f_icons([("essay","the announcement"),("logsheet","the date in every response"),
    ("signpost","a link to the plan"),("timer","the notice period"),
    ("transfer","the named replacement"),("noentry","the day after")], cols=3)
S["b08-f4"]=lambda: f_realia(tbl("Team research", None,
    ["What we want to retire","Who still uses it","How much notice they need","What they move to"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one nobody dares switch off: ______________________"), 600)
S["b08-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 20",
    "Platform team &middot; announcing an ending &middot; page 1 of 1",
    "<p><b>The document.</b> RFC 8594, The Sunset HTTP Response Header Field, was published in May "
    "2019. Its status is Informational. That word is doing real work. The document is not "
    "standards-track. It registers a way of saying something, so that everybody who wants to say "
    "it says it the same way.</p>"
    + table_html(["","What it is"],
      [["the <b>header field</b>","a date, saying when the resource is <b>expected</b> to become "
        "unresponsive"],
       ["the <b>link relation</b>","a named link to a resource with more information"]])
    + "<p><b>What the date means.</b> It says the resource is likely to become unresponsive at that "
    "point. Read that carefully. It is a statement of expectation, not a contract. The date may "
    "move, in either direction. The header on tomorrow's response is tomorrow's expectation.</p>"
    "<p><b>The silence rule.</b> The absence of the header means nothing at all. It does not mean "
    "the resource will keep answering. It does not mean no ending is planned. It means nobody has "
    "put a date in a header. This is the opposite of how people read it.</p>"
    "<p><b>What the document does not define.</b> Any obligation: nobody must send the header, "
    "honor the date or give notice of any length. What happens afterwards. The reason, which "
    "belongs on the linked page. A migration. And any notice period at all: three days and three "
    "years are equally conforming.</p>"
    "<p><b>So why use it?</b> Because it puts a date where a machine can find it, on every "
    "response. In six months somebody who has never read your announcement will point a tool at "
    "your service, and the date will be there. The header is for the person who was not listening "
    "when you announced it, which eventually is everybody.</p>",
    "Source: RFC 8594, The Sunset HTTP Response Header Field, May 2019, an Informational document. "
    "The document creates no obligation and recommends no notice period."), 580)
S["b08-f6"]=lambda: f_realia(tbl("Word study","Future forms",
    ["Form","What it expresses","Example"],
    [["will","a prediction or a promise","The path <b>will</b> stop answering."],
     ["going to","an intention","We <b>are going to</b> retire it."],
     ["present continuous","a fixed arrangement, with a time",
      "We <b>are switching</b> it off on 30 June."],
     ["present simple","a timetable","The notice period <b>starts</b> on 1 April."]]), 600)
S["b08-f7"]=lambda: f_chart([("an email",3),("an announcement page",2),("a header",1),
    ("a conversation",1),("when it stopped working",4)], unit="endings")
S["b08-f8"]=lambda: f_icons([("essay","an announcement"),("logsheet","a header with a date"),
    ("signpost","a link to a plan"),("timer","a notice period"),
    ("transfer","a named replacement"),("noentry","a refusal after the date")], cols=3)
S["b08-f9"]=lambda: f_realia(tbl("Retirement note",
    "Interface document, section 8.3",
    ["",""],
    [["<b>What is ending</b>","the old shipment path"],
     ["<b>The date</b>","30 June"],
     ["<b>The replacement</b>","the new shipment path, open from 1 April"],
     ["<b>Who has been told</b>","four named teams, with a reply requested"]],
    note="No header means nothing."), 540)
S["b08-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("grace",400,172,{})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("email",385,196,0.22),
     ("essay",450,194,0.26),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,11,30))
S["b08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Announcement A", None,
        "<p>The path is being retired in five weeks. Sent to one address on file.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Announcement B", None,
        "<p>The replacement opens on 1 April.<br>The old path is retired on 30 June.<br>"
        "You have four months, our policy minimum.<br>"
        "A reply is requested, by name.<br>The date is in every response until then.</p>"),
        w)[0:3],
    w=920, h=300)
S["b08-f12"]=lambda: f_realia(doc("Two announcements", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Announcement 1</b><br>"
    "A date and a path.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Announcement 2</b><br>"
    "The replacement first. The date. The notice period in months. What happens after. Who has "
    "been told, and a reply requested. Where the date appears in every response.</p>",
    "One of these went to a mailbox belonging to somebody who left in 2023."))
S["b08-f13"]=lambda: f_realia(form("Announcement planner",
    [("The replacement",""),("What is ending, and when",""),("The notice period",""),
     ("What happens after",""),("Who is told, and how a reply is requested",""),
     ("Not in this message","")]), 520)
S["b08-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("grace",195,172,{}),
     ("anders",280,176,{"seated":True}),("mei",360,172,{"seated":True}),
     ("ines",435,176,{"seated":True}),("tomas",520,170,{}),("priya",595,172,{}),
     ("lars",665,170,{}),("marek",735,172,{}),("oksana",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("haddad",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("email",330,198,0.2),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,0))
S["b08-f15"]=lambda: f_chart([("an email",7),("an announcement page",3),("a header",2),
    ("a conversation",4),("when it stopped working",6)])
S["b08-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("email",320,196,0.22),("essay",385,194,0.26),
     ("phone",455,196,0.22),("note",520,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,8,0))

# ---------------- Unit 9 · Seven Claims, All Optional ----------------
S["b09-f1"]=lambda: f_icons([("idcard","a token in three blocks"),("note","a claim and its value"),
    ("stamp","an issuer"),("student","a subject named"),
    ("signpost","an intended recipient"),("clock","an expiry time"),
    ("signature","a signature block"),("magnifier","a token decoded and readable"),
    ("timer","two clocks, slightly apart"),("handsup","what does it prove?")], cols=5)
S["b09-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("oksana",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("idcard",395,196,0.22),
     ("essay",460,194,0.26),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,4,20))
S["b09-f3"]=lambda: f_icons([("stamp","the issuer"),("student","the subject"),
    ("signpost","the audience"),("clock","the expiry time"),
    ("timer","the not-before time"),("refnumber","the identifier of one token")], cols=3)
S["b09-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The claim","In our tokens","Checked by our code","What it means to us"],
    [["issuer","&nbsp;","&nbsp;","&nbsp;"],["subject","&nbsp;","&nbsp;","&nbsp;"],
     ["audience","&nbsp;","&nbsp;","&nbsp;"],["expiry","&nbsp;","&nbsp;","&nbsp;"],
     ["not before","&nbsp;","&nbsp;","&nbsp;"],["issued at","&nbsp;","&nbsp;","&nbsp;"],
     ["identifier","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one we assume: ______________________"), 600)
S["b09-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 21",
    "Platform team &middot; tokens and claims &middot; page 1 of 1",
    "<p><b>The document.</b> RFC 7519, JSON Web Token, was published in May 2015. It defines a "
    "compact way of carrying a set of claims between two parties. A claim is a named "
    "statement.</p>"
    + table_html(["Claim","Meaning","Required?"],
      [["<b>issuer</b>","who made the token","<b>optional</b>"],
       ["<b>subject</b>","who the token is about","<b>optional</b>"],
       ["<b>audience</b>","who the token is intended for","<b>optional</b>"],
       ["<b>expiration time</b>","after which it must not be accepted","<b>optional</b>"],
       ["<b>not before</b>","before which it must not be accepted","<b>optional</b>"],
       ["<b>issued at</b>","when it was made","<b>optional</b>"],
       ["<b>identifier</b>","a name for this one token","<b>optional</b>"]])
    + "<p><b>Read the third column again.</b> The document says, of every one of the seven, that "
    "using it is optional. A token with no expiry, no audience and no issuer is a conforming "
    "token. Every security property you associate with these claims comes from a decision somebody "
    "made in your code.</p>"
    "<p><b>Two claims do have teeth, when present.</b> The expiration time carries an instruction: "
    "the token must not be accepted on or after that time. A little leeway is allowed for clock "
    "skew, and the document suggests keeping it small. The audience carries another: if it is "
    "present, the party processing the token must identify itself with one of its values, and must "
    "reject the token otherwise.</p>"
    "<p><b>Times are seconds, not strings.</b> The three time claims are counted in seconds from "
    "the start of 1970, in universal time. Not a formatted date and not milliseconds. That mistake "
    "produces a token valid for fifty thousand years.</p>"
    "<p><b>What is somewhere else.</b> Nothing here maps a claim to a permission. How a token is "
    "signed, and which algorithms exist, are separate documents. And the claims are encoded, not "
    "encrypted: anybody holding the token can read them.</p>",
    "Source: RFC 7519, JSON Web Token, May 2015. Signature, encryption and algorithm definitions "
    "are separate documents."), 580)
S["b09-f6"]=lambda: f_realia(tbl("Word study","Gerunds and infinitives",
    ["Pattern","Verbs","Example"],
    [["verb + -ing","avoid, consider, involve, risk",
      "We <b>avoid accepting</b> a token with no expiry."],
     ["verb + to","decide, fail, refuse, need, expect",
      "We <b>decided to reject</b> tokens with no audience."],
     ["preposition + -ing","before, without, after, for",
      "<b>Without verifying</b> the signature, nothing is proved."],
     ["to + verb = purpose","&mdash;","We check the audience <b>to stop</b> reuse."]]), 600)
S["b09-f7"]=lambda: f_chart([("signature verified",9),("expiry checked",9),("audience checked",2),
    ("issuer checked",5),("none of these",0)], unit="services")
S["b09-f8"]=lambda: f_icons([("stamp","an issuer"),("student","a subject"),
    ("signpost","an audience"),("clock","an expiry"),
    ("signature","a signature"),("magnifier","a readable, decoded token")], cols=3)
S["b09-f9"]=lambda: f_realia(tbl("Token note",
    "Security document, section 9.2",
    ["","Check","Why"],
    [["1","the <b>signature</b>, expected algorithm, trusted key","unaltered, and we know who made it"],
     ["2","the <b>expiry</b>, in the future","<b>to stop</b> an old token being replayed"],
     ["3","the <b>audience</b>, naming this service","<b>to stop</b> a token issued elsewhere"],
     ["4","the <b>issuer</b>, on our list","to know whose assertions these are"]],
    note="Encoded is not encrypted."), 600)
S["b09-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("oksana",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("idcard",385,196,0.22),
     ("essay",450,194,0.26),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,4,30))
S["b09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Checks A", None,
        "<p>Verify the signature. Check the expiry.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Checks B", None,
        "<p>Verify the signature, with an expected algorithm.<br>Check the expiry.<br>"
        "Check the audience names this service.<br>Reject a token with no audience claim.<br>"
        "Allow sixty seconds of skew, and no more.</p>"), w)[0:3],
    w=920, h=300)
S["b09-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Tokens are verified on every request.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "Four numbered checks, each with a purpose. The claims we require although they are optional. "
    "The skew we allow. Where the claim mapping lives. A line saying the claims are readable by "
    "anyone holding the token.</p>",
    "One of these let a token issued for one service be accepted by another for two years."))
S["b09-f13"]=lambda: f_realia(form("Token-note planner",
    [("The checks in order, with a purpose each",""),("Which claims we require",""),
     ("The skew allowed",""),("How times are represented",""),
     ("Where the claim mapping lives",""),("Not in this note","")]), 520)
S["b09-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("oksana",195,172,{}),
     ("mei",280,176,{"seated":True}),("lars",360,172,{"seated":True}),
     ("tomas",435,176,{"seated":True}),("priya",520,170,{}),("ines",595,172,{}),
     ("grace",665,170,{}),("marek",735,172,{}),("ravi",805,170,{}),
     ("chiamaka",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("haddad",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("idcard",330,198,0.2),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,5,0))
S["b09-f15"]=lambda: f_chart([("the signature",8),("the expiry",7),("the audience",2),
    ("the issuer",4),("I do not know",4)])
S["b09-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("idcard",315,196,0.2),("idcard",360,196,0.2),
     ("essay",430,194,0.26),("note",500,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,7,0))
