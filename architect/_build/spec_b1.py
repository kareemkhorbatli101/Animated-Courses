# -*- coding: utf-8 -*-
"""Keystone Book 2 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["b00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each from an integration engineer's working day",
    ["What you have","An example"],
    [["The present simple","The service <b>returns</b> a code in the two hundreds."],
     ["The present passive","The field <b>is validated</b> before the record is stored."],
     ["Countable and uncountable","<b>How many</b> fields? <b>How much</b> data?"],
     ["Comparatives","This format is <b>more precise than</b> the old one."],
     ["Modals of obligation","The amount <b>MUST</b> carry a currency code."],
     ["The zero conditional","<b>If</b> the first digit <b>is</b> four, the request was wrong."]],
    note="Six boxes. This book adds the English of agreement: what a document promises, what it "
    "does not, and who is obliged."), 580)
S["b00-f2"]=lambda: f_realia(tbl("What an interface promises", None,
    ["","What the other side gets","What it costs you"],
    [["<b>1 What the fields are</b>","they can write code once",
      "you cannot rename one quietly"],
     ["<b>2 What happens on failure</b>","they can handle it without asking you",
      "you must describe failure as carefully as success"],
     ["<b>3 How long it will last</b>","they can plan their quarter",
      "you must announce an ending, early"]],
    note="Somebody you will never meet, depending on you. The third promise is the one teams "
    "forget, and it is written in a date."), 600)
S["b00-f3"]=lambda: f_realia(doc("Taped inside a laptop lid",
    "Four questions that stop most of the trouble",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;Is that the description or the service?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before anybody says <i>the API supports it</i>."
    "</span><br><b>2 &nbsp;What happens to a field you did not mention?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before a schema goes into a document.</span><br>"
    "<b>3 &nbsp;Is that safe, or idempotent, or neither?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before a client retries anything.</span><br>"
    "<b>4 &nbsp;Who is obliged by this, and by when?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before a date in a header is read as a "
    "commitment.</span></p>",
    "Four questions. Each of them is a whole unit of this book."), 560)
S["b00-f4"]=lambda: f_realia(tbl("Two sides of one document", None,
    ["The side that writes it","The side that reads it"],
    [["knows what was meant","knows only what was written"],
     ["can see the code","can see the document"],
     ["remembers the reason","has to guess the reason"]],
    note="The same sentence, two readings. Every argument in this book happens in that gap."), 580)

# ---------------- Unit 1 · A Description Is Not a Service ----------------
S["b01-f1"]=lambda: f_icons([("essay","paths listed on a page"),("portal","generated documentation"),
    ("spreadsheet","field names and types"),("quotemark","an example response"),
    ("address","a server address"),("logsheet","an operation and a verb"),
    ("thread","a block referenced twice"),("megaphone","a notification sent out"),
    ("handsup","a document and a service"),("magnifier","two readers, one page")], cols=5)
S["b01-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("mei",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("waitscreen",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,20))
S["b01-f3"]=lambda: f_icons([("refnumber","the format version"),("note","the information block"),
    ("essay","the paths"),("thread","the components"),
    ("megaphone","outbound notifications"),("magnifier","one schema, used twice")], cols=3)
S["b01-f4"]=lambda: f_realia(tbl("Team research", None,
    ["Where the document is","Written or generated","When it last changed","What checks it"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one nobody checks: ______________________"), 600)
S["b01-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 13",
    "Platform team &middot; interface descriptions &middot; page 1 of 1",
    "<p><b>The specification.</b> The OpenAPI Specification, version 3.1.0, was released in "
    "February 2021. It describes how to write down what an interface looks like. The document can "
    "be read by people and by programs.</p>"
    + table_html(["Part","What it is"],
      [["the <b>version</b> of the format","which rules this document follows"],
       ["<b>info</b>","title, description, and the version of your interface"],
       ["<b>servers</b>","where the running systems are"],
       ["<b>paths</b>","the addresses, each with its operations"],
       ["<b>components</b>","blocks defined once and referenced"],
       ["<b>webhooks</b>","notifications the service sends out"]])
    + "<p><b>What changed in this version.</b> Three things matter in daily work. The schema rules "
    "are now the same rules as the separate schema specification of 2020-12. Before this version "
    "they were nearly the same, and the small differences cost teams whole afternoons. A document "
    "may also declare which schema dialect it uses. And paths is no longer required.</p>"
    "<p><b>A description is not an implementation.</b> This is the sentence to remember. The "
    "specification describes a format for a document. It does not run anything. It does not test "
    "anything. A valid document can describe an interface that has never existed, and the tools "
    "will produce beautiful documentation for a service that is not there.</p>"
    "<p><b>What we do.</b> The document is generated from the code. The generated document is "
    "checked against the running service every night. And the words <i>the API supports</i> are "
    "reserved for things that answer a request.</p>",
    "Source: the OpenAPI Specification version 3.1.0, released February 2021. The specification "
    "defines a description format only: it does not implement, test, enforce, version or generate "
    "anything."), 580)
S["b01-f6"]=lambda: f_realia(tbl("Word study","Simple and continuous",
    ["Form","What it is for","Example"],
    [["present simple","what is always true","The service <b>returns</b> a list."],
     ["present continuous","what is happening now","We <b>are adding</b> the operation."],
     ["a state verb","no continuous form","The document <b>contains</b> nine paths."],
     ["a temporary situation","a continuous form","The test system <b>is running</b> an older "
      "version."]]), 600)
S["b01-f7"]=lambda: f_chart([("generated and checked nightly",1),("generated, not checked",3),
    ("written by hand, current",2),("written by hand, out of date",2),("none",1)],
    unit="interfaces")
S["b01-f8"]=lambda: f_icons([("refnumber","a version string"),("note","an information block"),
    ("essay","a list of paths"),("thread","a components section"),
    ("megaphone","an outbound notification"),("magnifier","one schema, two places")], cols=3)
S["b01-f9"]=lambda: f_realia(tbl("Interface note &middot; our description",
    "Interface document, section 1.1",
    ["",""],
    [["<b>Where it comes from</b>","generated from the running code; never edited by hand"],
     ["<b>When it is published</b>","every night, and on every release"],
     ["<b>What verifies it</b>","a nightly job asks the running service and compares"],
     ["<b>Who is told</b>","every change appears in the nightly change log"]],
    note="The service is what runs."), 540)
S["b01-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("mei",400,172,{})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("essay",385,194,0.26),
     ("note",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,10,0))
S["b01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Documentation page A", None,
        "<p>One operation, with fields and an example response. No date.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Documentation page B", None,
        "<p>The same operation, with fields and an example.<br>"
        "<b>Last verified against the running service:</b> 2 February, 02:14.<br>"
        "<b>unverified</b> &mdash; marked beside one path</p>"), w)[0:3],
    w=920, h=300)
S["b01-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The interface document is published at the usual address.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Generated</b> from the release branch, never by hand. <b>Published</b> nightly. "
    "<b>Verified</b> against the running service each night. <b>Markers</b> verified, unverified, "
    "mismatch. <b>Phrases</b> the service answers; the description includes.</p>",
    "One of these cost a customer two weeks of work."))
S["b01-f13"]=lambda: f_realia(form("Interface-note planner",
    [("Where the document comes from",""),("When it is published",""),("What verifies it",""),
     ("The markers, and what they mean",""),("The phrases we use",""),("Not in this note","")]), 520)
S["b01-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("mei",195,172,{}),
     ("haddad",280,176,{"seated":True}),("tomas",360,172,{"seated":True}),
     ("ravi",435,176,{"seated":True}),("priya",520,170,{}),("lars",595,172,{}),
     ("ines",665,170,{}),("grace",735,172,{}),("marek",805,170,{}),
     ("oksana",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("anders",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,11,0))
S["b01-f15"]=lambda: f_chart([("generated and checked",4),("generated, not checked",8),
    ("written by hand",6),("no document",3),("I do not know",5)])
S["b01-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("logsheet",390,194,0.26),
     ("email",460,196,0.22),("note",530,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,0))

# ---------------- Unit 2 · Everything Else Is Allowed ----------------
S["b02-f1"]=lambda: f_icons([("essay","a schema with properties"),("proof","a record passing"),
    ("noentry","a record failing"),("crate","an extra field accepted"),
    ("star","a required field"),("refnumber","a type beside a field"),
    ("thread","a block referenced"),("quotemark","the dialect line"),
    ("note","a note, not a rule"),("handsup","two readers, one extra field")], cols=5)
S["b02-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("priya",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("form",395,194,0.24),
     ("proof",460,196,0.22),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,11,10))
S["b02-f3"]=lambda: f_icons([("essay","a property"),("star","a required field"),
    ("crate","an unmentioned field"),("noentry","the keyword that forbids extras"),
    ("danger","an assertion that fails"),("note","an annotation that only notes")], cols=3)
S["b02-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The schema","Extras allowed or forbidden","How many required","Which dialect"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that surprised us: ______________________"), 600)
S["b02-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 14",
    "Platform team &middot; schemas and validation &middot; page 1 of 1",
    "<p><b>The specification.</b> The schema specification we use is dated 2020-12. It was "
    "published in December 2020. Our interface description format aligns with exactly this "
    "version.</p>"
    "<p><b>It is a draft.</b> This matters and is often left out. The document is an expired "
    "Internet draft. It is not an RFC and not an International Standard. It is still the version "
    "that tools implement, so it works like a standard without being one. Write the date, not the "
    "word <i>standard</i>.</p>"
    + table_html(["Group","Examples","What it does"],
      [["identity","the dialect line, an identifier, a reference","says which rules apply"],
       ["applicators","properties, items","says where other rules apply"],
       ["assertions","type, required, minimum","<b>can fail</b> a record"],
       ["annotations","title, description, examples","attach information; fail nothing"]])
    + "<p><b>The default that surprises everybody.</b> A schema is a set of constraints. A field "
    "the schema does not mention is not constrained, so it is allowed. Listing four properties "
    "does not forbid a fifth. If you want the fifth forbidden, there is a keyword for that, and "
    "you have to write it yourself.</p>"
    "<p><b>The same is true of required.</b> Listing a property does not make it required. The "
    "required keyword is separate. It takes a list of names. Nothing in a schema is implied, and "
    "that is the most useful sentence in this unit.</p>"
    "<p><b>Format is a note, not a rule.</b> There is a keyword for saying that a string is a "
    "date. In this version it is an annotation by default. A validator may check it and is not "
    "obliged to. So a field marked as a date may hold anything.</p>",
    "Source: JSON Schema: A Media Type for Describing JSON Documents, the 2020-12 draft of "
    "December 2020, and its validation companion. The documents are expired Internet drafts and "
    "are not standards-track specifications."), 580)
S["b02-f6"]=lambda: f_realia(tbl("Word study","Articles",
    ["Article","When","Example"],
    [["a / an","one of several; first mention","We wrote <b>a</b> schema for the event."],
     ["the","the one we both know","<b>The</b> schema in section 4 forbids extras."],
     ["no article + plural","things in general","<b>Schemas</b> do not imply anything."],
     ["no article + uncountable","things in general","<b>Data</b> arrives at the edge."]]), 600)
S["b02-f7"]=lambda: f_chart([("extras forbidden",4),("extras allowed on purpose",3),
    ("extras allowed by accident",11),("no schema at all",1)], unit="schemas")
S["b02-f8"]=lambda: f_icons([("essay","a property"),("star","required"),
    ("crate","an unmentioned field"),("noentry","the forbidding keyword"),
    ("danger","an assertion failing"),("note","an annotation")], cols=3)
S["b02-f9"]=lambda: f_realia(tbl("Schema note &middot; shipment",
    "Interface document, section 2.3",
    ["",""],
    [["<b>Dialect</b>","2020-12, an expired draft; we name the date"],
     ["<b>Extras</b>","forbidden on payments; dropped on received events; why, in each case"],
     ["<b>Required</b>","three of six, in a separate keyword"],
     ["<b>Only notes</b>","the format keyword on three fields is not asserted"]],
    note="Nothing here is implied."), 540)
S["b02-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("priya",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("form",385,194,0.24),
     ("spreadsheet",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,2,30))
S["b02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Schema note A", None,
        "<p>Four properties. A required list.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Schema note B", None,
        "<p>Four properties. A required list.<br>Dialect: 2020-12.<br>"
        "Extras forbidden since 14 March, because a field we do not read must not reach "
        "storage.<br>The format keyword is a note, not a rule.<br>"
        "Meaning is checked in the service.</p>"), w)[0:3],
    w=920, h=300)
S["b02-f12"]=lambda: f_realia(doc("Two schema notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Records are validated against the schema.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Dialect</b> 2020-12, an expired draft. <b>Extras</b> forbidden on payments, dropped on "
    "received events, with a reason for each. <b>Required</b> three of six. <b>Only notes</b> the "
    "format keyword. <b>Meaning</b> checked in the service.</p>",
    "One of these let a customer's test marker into a payment database for six months."))
S["b02-f13"]=lambda: f_realia(form("Schema-note planner",
    [("The dialect, and its date",""),("Properties and the required list",""),
     ("Extras, with a reason, per interface",""),("Keywords that are only notes",""),
     ("What the service checks instead",""),("Not in this note","")]), 520)
S["b02-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("priya",195,172,{}),
     ("mei",280,176,{"seated":True}),("marek",360,172,{"seated":True}),
     ("tomas",435,176,{"seated":True}),("lars",520,170,{}),("ines",595,172,{}),
     ("grace",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("haddad",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("linh",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("form",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,3,0))
S["b02-f15"]=lambda: f_chart([("rejected",4),("accepted and kept",9),
    ("accepted and dropped",3),("no schema",2),("I do not know",8)])
S["b02-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("form",320,194,0.24),("note",390,194,0.24),
     ("essay",455,194,0.26),("pen",525,200,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,0))

# ---------------- Unit 3 · Neither Safe Nor Idempotent ----------------
S["b03-f1"]=lambda: f_icons([("transfer","a whole record replaced"),("pen","part of a record changed"),
    ("note","instructions in a small document"),("tally","one request, two results"),
    ("refnumber","a version marker"),("key","a conditional request"),
    ("noentry","a half-applied change"),("logsheet","the formats a server accepts"),
    ("recycle","a retry going round twice"),("balance","a balance changed twice")], cols=5)
S["b03-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("lars",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("logsheet",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,1,25))
S["b03-f3"]=lambda: f_icons([("eye","a read: safe"),("transfer","a replacement: idempotent"),
    ("pen","a partial change: neither"),("refnumber","a version marker"),
    ("proof","all or nothing"),("logsheet","the formats accepted")], cols=3)
S["b03-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The operation","Safe","Idempotent","Retried by our client"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The dangerous one: ______________________"), 600)
S["b03-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 15",
    "Platform team &middot; partial updates &middot; page 1 of 1",
    "<p><b>The document.</b> RFC 5789, PATCH Method for HTTP, was published in March 2010. It "
    "adds one method to the protocol. The method asks that a set of changes be applied to a "
    "resource. The changes travel in the request as a patch document.</p>"
    + table_html(["Method","Safe","Idempotent"],
      [["a read","<b>yes</b>","yes"],["a full replacement","no","<b>yes</b>"],
       ["a partial change","<b>no</b>","<b>no</b>"]])
    + "<p><b>The sentence to quote.</b> The specification says plainly that this method is neither "
    "safe nor idempotent. A partial change describes what to do to whatever is there now. So "
    "applying it twice applies it twice. <i>Add fifty</i> applied twice adds a hundred.</p>"
    "<p><b>The remedy is in the same place.</b> A request can be made idempotent by using a "
    "conditional request. The client sends the version it expects. The server applies the change "
    "only if the resource is still at that version. The second attempt then fails clearly instead "
    "of succeeding quietly.</p>"
    "<p><b>All or nothing.</b> The server must apply the whole set of changes atomically. It must "
    "never leave a resource half changed. If one instruction cannot be applied, none of them is."
    "</p>"
    "<p><b>The format is somebody else's document.</b> This surprises people. The specification "
    "does not define a patch document format at all. It defines the method. The instructions "
    "inside the request have their own media type, published separately. A server supports "
    "whichever formats it chooses, and there is a response header that says which.</p>",
    "Source: RFC 5789, PATCH Method for HTTP, March 2010. The document does not define any patch "
    "document format."), 580)
S["b03-f6"]=lambda: f_realia(tbl("Word study","The present perfect",
    ["Form","What it is for","Example"],
    [["present perfect","a past action with a result now","The change <b>has been applied</b>."],
     ["past simple","a finished time","We <b>sent</b> it at nine."],
     ["perfect + since","a period up to now","It <b>has been failing since</b> Tuesday."],
     ["question","has it happened?","<b>Has</b> the record <b>been updated</b>?"]]), 600)
S["b03-f7"]=lambda: f_chart([("applied once",4120),("refused: version moved",186),
    ("applied twice",1),("failed, no change",54)], unit="changes")
S["b03-f8"]=lambda: f_icons([("eye","a read"),("transfer","a replacement twice, one result"),
    ("pen","a partial change twice, doubled"),("refnumber","a version marker"),
    ("noentry","refused: the version moved"),("proof","applied completely")], cols=3)
S["b03-f9"]=lambda: f_realia(tbl("Operations note &middot; changing a record",
    "Interface document, section 3.4",
    ["",""],
    [["<b>Safe</b>","reads only"],
     ["<b>Idempotent</b>","full replacement, delete"],
     ["<b>Version marker</b>","required on a partial change from 14 March"],
     ["<b>Our client retries</b>","reads and replacements freely; partial changes only with a "
      "marker"]],
    note="A timeout is not a failure."), 540)
S["b03-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("lars",400,172,{})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("logsheet",385,194,0.26),
     ("note",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,2,30))
S["b03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Client setting A", None,
        "<p>Retry every method three times after a timeout.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Client setting B", None,
        "<p>Retry reads and replacements freely.<br>"
        "Retry a partial change only when a version marker is present.<br>"
        "Otherwise read the record and report what was found.</p>"), w)[0:3],
    w=920, h=300)
S["b03-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Partial updates are supported.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Classified</b> every operation, safe and idempotent marked. <b>Version marker</b> required "
    "from 14 March. <b>A timeout</b> means the client stopped waiting, not that nothing happened. "
    "<b>Atomic</b> all or nothing.</p>",
    "One of these left a credit limit fifty too high for six days."))
S["b03-f13"]=lambda: f_realia(form("Operations-note planner",
    [("The operations table",""),("The version marker rule, with a date",""),("Why",""),
     ("What a timeout means",""),("All or nothing",""),("Not in this note","")]), 520)
S["b03-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("lars",195,172,{}),
     ("anders",280,176,{"seated":True}),("mei",360,172,{"seated":True}),
     ("marek",435,176,{"seated":True}),("tomas",520,170,{}),("priya",595,172,{}),
     ("ines",665,170,{}),("grace",735,172,{}),("oksana",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("haddad",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("logsheet",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,3,0))
S["b03-f15"]=lambda: f_chart([("yes",9),("no",4),("only with a version marker",3),
    ("no partial changes",4),("I do not know",6)])
S["b03-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("logsheet",320,194,0.26),("balance",390,196,0.22),
     ("email",455,196,0.22),("note",525,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
