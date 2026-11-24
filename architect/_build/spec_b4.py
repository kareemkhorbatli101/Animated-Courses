# -*- coding: utf-8 -*-
"""Keystone Book 2 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · A Name Is Not a Promise ----------------
S["b10-f1"]=lambda: f_icons([("flashcard","a type and a subtype"),("archive","a registry page"),
    ("form","a registration form"),("refnumber","a subtype with a suffix"),
    ("badge","a company prefix"),("padlock","a private name"),
    ("note","a parameter"),("tally","one label, two contents"),
    ("noentry","a label refused"),("handsup","two engineers, one name")], cols=5)
S["b10-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("tomas",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,2,20))
S["b10-f3"]=lambda: f_icons([("flashcard","a standards-tree name"),("badge","a company prefix"),
    ("idcard","a personal name"),("padlock","a private, unregistered name"),
    ("refnumber","a name with a syntax suffix"),("note","a parameter")], cols=3)
S["b10-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The label","Which tree","Suffix","Registered"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one we invented on a Friday: ______________________"), 600)
S["b10-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 22",
    "Platform team &middot; media types &middot; page 1 of 1",
    "<p><b>The document.</b> RFC 6838, Media Type Specifications and Registration Procedures, was "
    "published in January 2013. It is a Best Current Practice, which is a kind of standards-track "
    "document about process rather than about bytes. It says how a media type is named, who may "
    "name one, and how it gets into the public registry.</p>"
    "<p><b>A label has two parts and sometimes more.</b> A type before the slash, a subtype after "
    "it, and optional parameters after a semicolon. The type and subtype are compared without "
    "regard to case, and so are the parameter names.</p>"
    + table_html(["Tree","Prefix","Who may register"],
      [["<b>standards</b>","none","needs standards-body approval or a formal review"],
       ["<b>vendor</b>","a company prefix","the company behind the format"],
       ["<b>personal</b>","a personal prefix","an individual"],
       ["<b>unregistered</b>","a private prefix","<b>nobody registers it</b>: private use only"]])
    + "<p><b>So a company does not invent a name in the standards tree.</b> A format belonging to "
    "one company belongs in the vendor tree, with that company's name in it. That is not a "
    "formality. It is what stops two companies registering the same obvious word.</p>"
    "<p><b>The suffix.</b> A subtype name may end in a plus sign and the name of the underlying "
    "syntax. Those suffixes are registered too. The value is large: a tool that has never heard of "
    "your type can see the suffix and know how to parse the bytes. The suffix says how to open the "
    "box. It says nothing about what is in it.</p>"
    "<p><b>Registration is a procedure, not an inspection.</b> An applicant fills in a template, "
    "the request is reviewed, and the name goes in the registry. Nobody tests your software, and "
    "registration means nothing about whether an implementation conforms.</p>",
    "Source: RFC 6838, Media Type Specifications and Registration Procedures, January 2013, a Best "
    "Current Practice document. Registration records a name and a specification; it does not "
    "evaluate or certify any implementation."), 580)
S["b10-f6"]=lambda: f_realia(tbl("Word study","Compounds and word families",
    ["Compound noun","Means"],
    [["a <b>media type</b>","the label on a message"],
     ["a <b>registration procedure</b>","the steps for adding a name"],
     ["a <b>syntax suffix</b>","the part naming the underlying syntax"],
     ["register &middot; registration &middot; registered &middot; a registrant",
      "one word family, in fours"],
     ["specify &middot; specification &middot; specified","&nbsp;"],
     ["conform &middot; conformance &middot; conformant","&nbsp;"]]), 600)
S["b10-f7"]=lambda: f_chart([("registered in the vendor tree",2),
    ("company prefix, unregistered",9),("no prefix at all",3),
    ("generic names used for everything",4),("with a syntax suffix",11)], unit="labels")
S["b10-f8"]=lambda: f_icons([("flashcard","a standards-tree name"),("badge","a vendor-tree name"),
    ("idcard","a personal name"),("padlock","a private name"),
    ("refnumber","a name with a suffix"),("note","a parameter")], cols=3)
S["b10-f9"]=lambda: f_realia(tbl("Naming note &middot; our media types",
    "Interface document, section 10.1",
    ["Label","Tree","Suffix","Registered"],
    [["shipment payload","<b>vendor</b>, our prefix","yes","yes"],
     ["payment request","<b>vendor</b>, our prefix","yes","yes"],
     ["internal queue message","<b>unregistered</b>, private","yes","<b>no, and never</b>"],
     ["legacy report","<b>standards tree</b>, no prefix","<b>no</b>","<b>no &mdash; a fault</b>"]],
    note="The label describes the bytes, not the content."), 600)
S["b10-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("tomas",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("archive",640,150,0.5),
     ("essay",385,194,0.26),("note",450,194,0.24),("lamp",180,140,0.42)],
    clockat=(140,46,22,3,0))
S["b10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Label A", None,
        "<p>A bare, obvious subtype name. No prefix. No suffix.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Label B", None,
        "<p>A company prefix.<br>A descriptive subtype.<br>A syntax suffix.<br>"
        "The schema named beside it.</p>"), w)[0:3],
    w=920, h=300)
S["b10-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Our format has a media type.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "Each label with its tree, whether it has a suffix, whether it is registered, and the schema. "
    "One row marked as a fault. A line saying what the label does not prove.</p>",
    "Two customers independently chose the same obvious word."))
S["b10-f13"]=lambda: f_realia(form("Naming-note planner",
    [("Each label, with its tree",""),("Suffix present",""),("Registered or not",""),
     ("The schema",""),("What a label does not prove",""),("Not in this note","")]), 520)
S["b10-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("tomas",195,172,{}),
     ("ravi",280,176,{"seated":True}),("mei",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("lars",520,170,{}),("ines",595,172,{}),
     ("grace",665,170,{}),("marek",735,172,{}),("oksana",805,170,{}),
     ("chiamaka",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("haddad",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("archive",330,170,0.4),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,3,30))
S["b10-f15"]=lambda: f_chart([("yes",5),("no",8),("a generic label",6),
    ("we do not set one",2),("I do not know",4)])
S["b10-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("logsheet",315,194,0.24),("logsheet",365,194,0.24),
     ("archive",440,170,0.4),("note",520,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 11 · Four Fields and a Link ----------------
S["b11-f1"]=lambda: f_icons([("essay","an error body, four lines"),("flashcard","a short title"),
    ("note","a longer explanation"),("refnumber","a status beside a title"),
    ("address","an address for a kind of problem"),("idcard","an address for one occurrence"),
    ("portal","a documentation page"),("crate","an extra field"),
    ("logsheet","a matching log line"),("handsup","two readers, two conclusions")], cols=5)
S["b11-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("ines",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("logsheet",460,194,0.26),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,5,10))
S["b11-f3"]=lambda: f_icons([("address","the type, for a program"),("flashcard","the title, short"),
    ("refnumber","the status, advisory"),("note","the detail, for a person"),
    ("idcard","the instance, this occurrence"),("crate","an extension field")], cols=3)
S["b11-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The error","What it contains","Can a program route it","Can we find the occurrence"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that is only prose: ______________________"), 600)
S["b11-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 23",
    "Platform team &middot; error bodies &middot; page 1 of 1",
    "<p><b>The document.</b> RFC 9457, Problem Details for HTTP APIs, was published in July 2023. "
    "It replaced RFC 7807 from March 2016. It defines a small document for describing a failure, "
    "carried under its own media type.</p>"
    + table_html(["Member","Audience","What it holds"],
      [["<b>type</b>","<b>a program</b>","an address identifying the <b>kind</b> of problem"],
       ["<b>title</b>","a person","a short name for that kind, the same every time"],
       ["<b>status</b>","a program","the status code, <b>advisory</b>"],
       ["<b>detail</b>","<b>a person</b>","an explanation of <b>this</b> occurrence"],
       ["<b>instance</b>","both","an address identifying <b>this one</b> occurrence"]])
    + "<p><b>Two audiences, and the rule that follows.</b> The type is the stable identifier. A "
    "client that must behave differently for two kinds of failure should look at the type. The "
    "detail is written for a person, and the document is direct about the consequence: consumers "
    "should not parse the detail for information.</p>"
    "<p><b>That division is what buys you ten years of better wording.</b> Give a client only "
    "prose, and your sentences become part of your interface. Nobody intended that, and nobody "
    "wrote it down.</p>"
    "<p><b>The type is an address, and it need not answer.</b> It identifies a kind of problem. "
    "Fetching it is not required, and a client should not go and fetch it automatically. Where it "
    "does answer, it should return documentation a person can read.</p>"
    "<p><b>The instance is the cheapest thing on the page.</b> An address identifying this single "
    "failure. With it, a customer's screenshot becomes a line in a log. Without it, somebody "
    "searches by time and hopes.</p>",
    "Source: RFC 9457, Problem Details for HTTP APIs, July 2023, replacing RFC 7807 of March 2016. "
    "The document defines a format and does not determine an error taxonomy, a status code, a "
    "reporting strategy or any wording."), 580)
S["b11-f6"]=lambda: f_realia(tbl("Word study","Linking words",
    ["Linking word","What it does","Example"],
    [["however","contrast, new sentence","The type is stable. <b>However</b>, the detail is not."],
     ["therefore","consequence, formal","The detail changes. <b>Therefore</b>, do not parse it."],
     ["because","reason, same sentence","We send an instance <b>because</b> it finds the log line."],
     ["although","contrast, same sentence",
      "<b>Although</b> the status is in the body, it is advisory."],
     ["in addition","adding","&nbsp;"],["that is","restating","&nbsp;"]]), 600)
S["b11-f7"]=lambda: f_chart([("a stable type",9),("a title",14),("an occurrence identifier",0),
    ("a field name where relevant",6),("prose only",22)], unit="error kinds")
S["b11-f8"]=lambda: f_icons([("address","a type address"),("flashcard","a short title"),
    ("refnumber","a status code"),("note","a detail sentence"),
    ("idcard","an occurrence address"),("crate","an extension field")], cols=3)
S["b11-f9"]=lambda: f_realia(tbl("Error note",
    "Interface document, section 11.2",
    ["Member","For","May it change?"],
    [["<b>type</b>","<b>a program</b>","<b>never</b> &mdash; it is the identifier"],
     ["<b>title</b>","a person, briefly","never, except for translation"],
     ["<b>status</b>","a program","matches the response; advisory"],
     ["<b>detail</b>","<b>a person</b>","<b>yes, whenever we can make it clearer</b>"],
     ["<b>instance</b>","both","per occurrence, always present"]],
    note="Route on the type, read the detail."), 600)
S["b11-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("ines",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("essay",385,194,0.26),
     ("note",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,5,0))
S["b11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Error body A", None,
        "<p>A status code and a sentence.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Error body B", None,
        "<p>A type address.<br>A short title.<br>A status.<br>A detail sentence.<br>"
        "An occurrence address.<br>A field name in an extension.</p>"), w)[0:3],
    w=920, h=300)
S["b11-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Errors return a status and a message.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "The five members, what each holds, and whether it may change. The extensions we send. How many "
    "problem types we have, and who decided them. What the format does not decide.</p>",
    "One of these made four integrations depend on an English sentence."))
S["b11-f13"]=lambda: f_realia(form("Error-note planner",
    [("The five members and their audiences",""),("Which may change",""),
     ("The extensions you send",""),("The occurrence identifier",""),
     ("How many types you have",""),("Not in this note","")]), 520)
S["b11-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("ines",195,172,{}),
     ("oksana",280,176,{"seated":True}),("lars",360,172,{"seated":True}),
     ("mei",435,176,{"seated":True}),("tomas",520,170,{}),("priya",595,172,{}),
     ("grace",665,170,{}),("marek",735,172,{}),("ravi",805,170,{}),
     ("chiamaka",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("haddad",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,5,30))
S["b11-f15"]=lambda: f_chart([("a stable identifier",4),("the status code",7),
    ("the message text",6),("it does not",4),("I do not know",4)])
S["b11-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("logsheet",390,194,0.26),
     ("note",455,194,0.24),("pen",520,200,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,7,0))

# ---------------- Unit 12 · Same Meaning, Different Wire ----------------
S["b12-f1"]=lambda: f_icons([("essay","a message as text lines"),("data","the same message in frames"),
    ("thread","streams sharing one connection"),("spreadsheet","a compressed field table"),
    ("flashcard","a field name in lower case"),("router","one transport, then another"),
    ("timer","a page load"),("handsup","two documents, one meaning"),
    ("transfer","a deployment switch"),("magnifier","two versions compared")], cols=5)
S["b12-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("mei",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("router",460,196,0.22),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,11,10))
S["b12-f3"]=lambda: f_icons([("logsheet","a method, unchanged"),("refnumber","a status code, unchanged"),
    ("timer","a caching directive, unchanged"),("flashcard","a field name in lower case"),
    ("thread","several streams, one connection"),("router","one meaning, two transports")], cols=3)
S["b12-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The change","Did the meaning change","Which document","Who was told"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that went in the wrong document: ______________________"), 600)
S["b12-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 24",
    "Platform team &middot; protocol versions &middot; page 1 of 1",
    "<p><b>The documents.</b> RFC 9113, HTTP/2, and RFC 9114, HTTP/3, were both published in June "
    "2022. The first replaced a document from 2015. Each describes a way of expressing messages on "
    "a connection. Each one says that the meaning of those messages is defined elsewhere.</p>"
    + table_html(["What changed","What did not"],
      [["messages are carried in <b>binary frames</b>","the <b>methods</b>"],
       ["several <b>streams</b> share one connection","the <b>status codes</b> and their classes"],
       ["field names are <b>compressed</b>","the <b>caching</b> rules"],
       ["the newer version runs over a different <b>transport</b>","<b>field names</b> and what they mean"],
       ["&nbsp;","<b>everything your interface document says</b>"]])
    + "<p><b>One rule reaches a developer.</b> Field names must be in lower case. A message with an "
    "upper-case field name is malformed and is treated as an error. A library does this for you. "
    "Somebody's log parser, test fixture or hand-written request does not. It is the one line of "
    "these documents that will cost your team an afternoon.</p>"
    "<p><b>Why the versions exist.</b> Several exchanges on one connection, and smaller headers. "
    "Both are real, and both are about how fast and how many. Neither is about what a message "
    "means.</p>"
    "<p><b>Why it matters that nothing else changed.</b> It means an interface can outlive the way "
    "it travels. Your document describing methods, status codes, schemas, caching, tokens and "
    "errors is as true on the new version as on the old. That is deliberate design, and it is why "
    "a protocol can be modernized without the world rewriting its documentation.</p>",
    "Source: RFC 9113, HTTP/2, and RFC 9114, HTTP/3, both June 2022. Both documents define message "
    "expression only; the semantics of methods, status codes, header fields, caching and content "
    "are defined in separate specifications."), 580)
S["b12-f6"]=lambda: f_realia(tbl("The grammar of Book 2", None,
    ["Unit","Grammar"],
    [["1","present simple and present continuous"],["2","articles"],["3","&nbsp;"],
     ["4","modals of possibility"],["5","&nbsp;"],["6","reported speech"],["7","&nbsp;"],
     ["8","future forms"],["9","&nbsp;"],["10","compound nouns"],["11","&nbsp;"]]), 560)
S["b12-f7"]=lambda: f_chart([("the interface document",12),("the operations document",14),
    ("both",2),("neither",8),("a chat message only",4)], unit="changes")
S["b12-f8"]=lambda: f_icons([("logsheet","a method unchanged"),("refnumber","a status code unchanged"),
    ("timer","a caching directive unchanged"),("flashcard","a lower-case field name"),
    ("thread","several streams"),("router","two transports, one meaning")], cols=3)
S["b12-f9"]=lambda: f_realia(doc("Payments interface &middot; the contract",
    "Platform team &middot; one page &middot; 25 March",
    table_html(["What we promise",""],
      [["the fields in section 3","not renamed or removed inside a major version"],
       ["the nine problem types","a client may route on them; they never change"],
       ["amounts","a whole number of minor units, with a currency code"],
       ["four months' notice","before anything that requires you to change code"]])
    + table_html(["What we do not promise",""],
      [["the wording of any message","the detail is rewritten whenever we can improve it"],
       ["field order, or anything not in section 3","including our internal identifiers"],
       ["ordering of events","not within a source and not across sources"],
       ["a single request's speed","several on one connection is a deployment property"],
       ["that no cache holds an older copy","we publish lifetimes; we cannot clear their equipment"]]),
    "If it is not on this page or in a numbered section, we have not promised it."), 600)
S["b12-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("mei",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("note",300,196,0.22),("essay",365,194,0.26),
     ("computer",600,142,0.42),("lamp",180,140,0.42),("archive",450,170,0.38)],
    clockat=(140,46,22,12,0))
S["b12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Announcement A", None,
        "<p>The protocol is changing. Please retest everything.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Announcement B", None,
        "<p>We move to the newer version on 2 June.<br>"
        "Same methods, same codes, same fields, same caching rules.<br>"
        "One rule: field names must be lower case.<br>"
        "This is in the operations document.</p>"), w)[0:3],
    w=920, h=300)
S["b12-f12"]=lambda: f_realia(doc("Two pages", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 1</b><br>"
    "A list of endpoints.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 2</b><br>"
    "What we promise. What we do not promise. Where each promise is written. How it changes, with "
    "dates.</p>",
    "The second list is longer than the first, and that is the point."))
S["b12-f13"]=lambda: f_realia(form("Contract planner",
    [("What we promise",""),("What we do not promise",""),("Where each one is written",""),
     ("How it changes, with a notice period",""),("Operational changes",""),
     ("Not in this contract","")]), 520)
S["b12-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("mei",195,172,{}),
     ("grace",280,176,{"seated":True}),("ines",360,172,{"seated":True}),
     ("tomas",435,176,{"seated":True}),("priya",520,170,{}),("lars",595,172,{}),
     ("marek",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("chiamaka",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("haddad",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("archive",330,170,0.4),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,1,0))
S["b12-f15"]=lambda: f_chart([("the operations document",4),("the interface document",6),
    ("both",2),("nowhere",9),("I do not know",4)])
S["b12-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("note",310,196,0.22),("archive",370,170,0.4),
     ("essay",450,194,0.26),("logsheet",520,194,0.26),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
