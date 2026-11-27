# -*- coding: utf-8 -*-
"""Keystone Book 2 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · How Long Is It Good For? ----------------
S["b04-f1"]=lambda: f_icons([("crate","a response stored"),("transfer","the same response again"),
    ("clock","an age"),("proof","fresh"),
    ("magnifier","stale"),("queue","one shared store, three readers"),
    ("padlock","one private store"),("logsheet","a directive in a header"),
    ("recycle","a check with the server"),("pricetag","an old price on a screen")], cols=5)
S["b04-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("marek",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("logsheet",395,194,0.26),
     ("pricetag",460,196,0.22),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,3,50))
S["b04-f3"]=lambda: f_icons([("timer","an explicit lifetime"),("quotemark","no lifetime given"),
    ("recycle","checked before reuse"),("noentry","not to be stored"),
    ("padlock","not for a shared store"),("magnifier","fresh, then stale")], cols=3)
S["b04-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The response","Its directives","How long it may be reused","Could a shared cache store it"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that says nothing: ______________________"), 600)
S["b04-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 16",
    "Platform team &middot; caching &middot; page 1 of 1",
    "<p><b>The document.</b> RFC 9111, HTTP Caching, was published in June 2022. It replaced a "
    "document from 2014. It describes what a cache may store, how long it may reuse what it "
    "stored, and when it must check with the server first.</p>"
    "<p><b>Fresh and stale.</b> A cache may reuse a stored response while it is fresh. A response "
    "is fresh while its age is less than its freshness lifetime. After that it is stale, and "
    "reusing it then is a different question with its own rules.</p>"
    + table_html(["Directive","What it does"],
      [["<b>max-age</b>","gives the freshness lifetime, in seconds"],
       ["<b>no-store</b>","the response must not be stored at all"],
       ["<b>no-cache</b>","it may be stored, but not reused without checking first"],
       ["<b>private</b>","a shared cache must not store it; a private one may"]])
    + "<p><b>The two that are confused.</b> The second and third of those are not two spellings of "
    "one idea. One forbids storage. The other permits storage and forbids reuse without "
    "validation. A team that wants nothing kept anywhere, and writes the second one, has stored "
    "the response in every cache on the path.</p>"
    "<p><b>What silence means.</b> This is the sentence that matters most. If a response carries no "
    "explicit expiration, a cache may assign a heuristic expiration time of its own. So saying "
    "nothing is not the same as saying no. The response may be reused for a period you did not "
    "choose and cannot predict.</p>"
    "<p><b>Caches you do not own.</b> A response may be stored in the customer's network, in a "
    "browser, or in something between the two of you. You cannot clear those. Everything you "
    "control is in the response itself, before it leaves.</p>",
    "Source: RFC 9111, HTTP Caching, June 2022, replacing the 2014 specification. The document "
    "specifies cache behavior; it does not choose a policy for your service."), 580)
S["b04-f6"]=lambda: f_realia(tbl("Word study","Modals of possibility",
    ["Modal","What it expresses","Example"],
    [["can","ability, or a general possibility","A cache <b>can</b> store this."],
     ["may","permission, or a real possibility","A cache <b>may</b> reuse it for a minute."],
     ["might","a weaker possibility","The copy <b>might</b> be stale."],
     ["could","a possibility, often raised","A proxy <b>could</b> be holding it."],
     ["must not","prohibition","&nbsp;"],["may not","not permitted","&nbsp;"]]), 600)
S["b04-f7"]=lambda: f_chart([("an explicit lifetime",9),("no-store",4),("no-cache",6),
    ("private",3),("nothing at all",19)], unit="responses")
S["b04-f8"]=lambda: f_icons([("timer","a lifetime in a header"),("quotemark","no lifetime"),
    ("recycle","a check before reuse"),("noentry","must not be stored"),
    ("padlock","refused by a shared store"),("magnifier","fresh beside stale")], cols=3)
S["b04-f9"]=lambda: f_realia(tbl("Caching note",
    "Interface document, section 4.2",
    ["Response","Lifetime","Directive","Chosen by"],
    [["price list","<b>30 seconds</b>","shared caches may store","product, 22 February"],
     ["account balance","0","<b>check before reuse</b>","platform"],
     ["authentication reply","&mdash;","<b>must not be stored</b>","security"],
     ["published rate card","<b>1 hour</b>","shared caches may store","product"]],
    note="Silence is a lifetime chosen by strangers."), 600)
S["b04-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("marek",400,172,{})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("logsheet",385,194,0.26),
     ("worldmap",650,96,0.7),("lamp",180,140,0.42),("pricetag",450,196,0.2)],
    clockat=(140,46,22,4,0))
S["b04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Response A", None,
        "<p>Header lines, and no caching directive at all.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Response B", None,
        "<p>An explicit lifetime of thirty seconds.<br>"
        "A field naming which request headers select it.<br>"
        "A note that a shared cache may store it.</p>"), w)[0:3],
    w=920, h=300)
S["b04-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Prices are not cached.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "Four responses, each with a lifetime, a directive written in words, and the name of whoever "
    "chose it. A line saying what we can clear and what we cannot.</p>",
    "One of these was repeated for two days during an incident, truthfully, to no effect."))
S["b04-f13"]=lambda: f_realia(form("Caching-note planner",
    [("Each response, with its lifetime",""),("The directive, in words",""),("Who chose it",""),
     ("Which request headers select it",""),("What we can and cannot clear",""),
     ("Not in this note","")]), 520)
S["b04-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("marek",195,172,{}),
     ("ines",280,176,{"seated":True}),("mei",360,172,{"seated":True}),
     ("tomas",435,176,{"seated":True}),("lars",520,170,{}),("priya",595,172,{}),
     ("grace",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("junseo",865,172,{}),("hana",920,170,{}),("haddad",960,174,{}),("anders",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("logsheet",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,4,30))
S["b04-f15"]=lambda: f_chart([("an explicit lifetime",5),("a directive forbidding storage",3),
    ("a directive requiring a check",4),("nothing",9),("I do not know",5)])
S["b04-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("logsheet",320,194,0.26),("worldmap",420,120,0.6),
     ("email",390,196,0.22),("note",520,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,7,0))

# ---------------- Unit 5 · Five Parts and a Fragment ----------------
S["b05-f1"]=lambda: f_icons([("address","five labeled parts"),("refnumber","a scheme"),
    ("worldmap","a host name"),("signpost","a path of segments"),
    ("magnifier","a query of two pairs"),("scissors","the part after the hash"),
    ("barcode","a percent-encoded character"),("handsup","two addresses compared"),
    ("portal","a browser bar"),("quotemark","two readers disagreeing")], cols=5)
S["b05-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("ines",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,40))
S["b05-f3"]=lambda: f_icons([("refnumber","the scheme"),("worldmap","the authority"),
    ("signpost","the path"),("magnifier","the query"),
    ("scissors","the fragment, cut off"),("barcode","a percent-encoded character")], cols=3)
S["b05-f4"]=lambda: f_realia(tbl("Team research", None,
    ["Scheme","Authority","Path","Query","Fragment"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that holds something it should not: ______________________"), 620)
S["b05-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 17",
    "Platform team &middot; addresses &middot; page 1 of 1",
    "<p><b>The document.</b> RFC 3986, Uniform Resource Identifier (URI): Generic Syntax, was "
    "published in January 2005. It replaced a document from 1998 and has not been replaced since. "
    "It defines the syntax of an address: what the parts are, which characters may appear where, "
    "and how to compare two addresses.</p>"
    + table_html(["Part","Introduced by","Compared"],
      [["<b>scheme</b>","&mdash;","<b>without regard to case</b>"],
       ["<b>authority</b>","a double slash","the host without regard to case"],
       ["<b>path</b>","a slash","<b>with</b> regard to case"],
       ["<b>query</b>","a question mark","with regard to case"],
       ["<b>fragment</b>","a hash sign","<b>never sent</b>"]])
    + "<p><b>The part that never arrives.</b> The fragment is separated from the rest of the "
    "address before the address is dereferenced. In practice the client keeps it and the server "
    "never receives it. So a value placed there is invisible to your service and fully visible in "
    "the browser, in the history, and to anything running in the page. Teams have put tokens there "
    "to keep them out of server logs. The effect is the opposite of the intention.</p>"
    "<p><b>Characters.</b> A small set may appear anywhere: letters, digits and four punctuation "
    "marks. Others are reserved, because they have a job in the syntax. A reserved character used "
    "as data must be percent-encoded. A slash inside a segment is encoded, or it becomes a new "
    "segment.</p>"
    "<p><b>Comparing two addresses.</b> The document gives a ladder of methods, from cheapest to "
    "most expensive. It also states the principle plainly: a false negative is better than a false "
    "positive. It is better to think two addresses differ when they do not than to treat two "
    "different things as one.</p>",
    "Source: RFC 3986, Uniform Resource Identifier (URI): Generic Syntax, January 2005. The "
    "document defines syntax only, and no syntactic test can determine whether two addresses "
    "identify the same resource."), 580)
S["b05-f6"]=lambda: f_realia(tbl("Word study","Relative clauses",
    ["Type","Punctuation","Example"],
    [["defining","<b>no commas</b>","The part <b>that</b> is sent last is the query."],
     ["non-defining","<b>commas</b>","The fragment, <b>which</b> is never sent, holds a heading."],
     ["with whose","either","A segment <b>whose</b> value contains a slash is encoded."],
     ["pronoun left out","no commas","The value we put there never arrives."]]), 600)
S["b05-f7"]=lambda: f_chart([("filters",61),("page sizes",24),("sort orders",18),
    ("identifiers",42),("tokens or other secrets",3)], unit="query values")
S["b05-f8"]=lambda: f_icons([("refnumber","a scheme"),("worldmap","an authority with a port"),
    ("signpost","three segments"),("magnifier","two query pairs"),
    ("scissors","a fragment"),("barcode","a percent-encoded character")], cols=3)
S["b05-f9"]=lambda: f_realia(tbl("Address note",
    "Interface document, section 5.1",
    ["Part","May hold","Must never hold"],
    [["<b>scheme</b>","one scheme, lower case","&mdash;"],
     ["<b>authority</b>","the host, and a port if not the default","credentials"],
     ["<b>path</b>","what the thing is: identifiers","anything secret"],
     ["<b>query</b>","how you want it: filters, page size","anything secret, unless excluded "
      "from the log"],
     ["<b>fragment</b>","a position inside the response","<b>anything our service needs</b>"]],
    note="The fragment never reaches us."), 600)
S["b05-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("oksana",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("essay",385,194,0.26),
     ("note",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,10,0))
S["b05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Link design A", None,
        "<p>The token goes after the hash sign, to keep it out of the access log.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Link design B", None,
        "<p>The token goes in the request.<br>That field is excluded from the log.<br>"
        "The token lives for one hour.<br>"
        "The note says which of the five parts may hold what.</p>"), w)[0:3],
    w=920, h=300)
S["b05-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Identifiers go in the URL.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "A row for each of the five parts, with what it may hold and what it must never hold. A line "
    "on case. A line on encoding. A line on how two addresses are compared.</p>",
    "One of these let a password reset token into every browser history for a year."))
S["b05-f13"]=lambda: f_realia(form("Address-note planner",
    [("The five parts, and what each may hold",""),("Case rules",""),("Encoding",""),
     ("Comparison",""),("Where secrets go",""),("Not in this note","")]), 520)
S["b05-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("oksana",195,172,{}),
     ("ines",280,176,{"seated":True}),("mei",360,172,{"seated":True}),
     ("junseo",435,176,{"seated":True}),("tomas",520,170,{}),("priya",595,172,{}),
     ("lars",665,170,{}),("grace",735,172,{}),("marek",805,170,{}),
     ("ravi",865,172,{}),("hana",920,170,{}),("haddad",960,174,{}),("linh",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,11,0))
S["b05-f15"]=lambda: f_chart([("filters",8),("identifiers",7),("page sizes",4),
    ("something sensitive",2),("I do not know",5)])
S["b05-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("logsheet",390,194,0.26),
     ("note",455,194,0.24),("pen",520,200,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,8,0))

# ---------------- Unit 6 · Who Says So, and Which One ----------------
S["b06-f1"]=lambda: f_icons([("envelope","four labeled fields"),("megaphone","a producer sending"),
    ("headset","a consumer receiving"),("tally","the same message twice"),
    ("address","a source name"),("refnumber","an event type"),
    ("clock","a timestamp"),("crate","the data inside"),
    ("queue","messages out of order"),("magnifier","two identical messages")], cols=5)
S["b06-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("ravi",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("envelope",395,196,0.22),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,3,5))
S["b06-f3"]=lambda: f_icons([("star","a required field"),("note","an optional field"),
    ("thread","the pair that identifies an event"),("refnumber","the envelope's own version"),
    ("crate","the data and its content type"),("essay","the transport document, outside")], cols=3)
S["b06-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The stream","What identifies an event","Can a duplicate be recognized",
     "What is promised about order"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that promises nothing: ______________________"), 600)
S["b06-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 18",
    "Platform team &middot; event envelopes &middot; page 1 of 1",
    "<p><b>The specification.</b> CloudEvents, version 1.0.2, is published by a working group "
    "under the Cloud Native Computing Foundation. It describes a small envelope: a set of named "
    "fields that travel with an event, whatever the event is about and whatever carries it.</p>"
    + table_html(["Field","What it holds"],
      [["the <b>spec version</b>","which version of this envelope is in use"],
       ["the <b>source</b>","where the event happened, written as an address"],
       ["the <b>type</b>","what kind of event it is"],
       ["the <b>id</b>","which event this is, within that source"]])
    + "<p><b>Four more may be there.</b> A timestamp, the content type of the data, a reference to "
    "the schema of the data, and a subject. The subject is a short name for the thing the event is "
    "about. It is useful to a consumer that must decide whether to care before reading the data."
    "</p>"
    "<p><b>The pair that does the real work.</b> The specification requires a producer to make the "
    "combination of source and id unique for each distinct event. That is the whole mechanism, and "
    "it is enough. A consumer that has seen a pair before knows it is looking at a copy. The "
    "specification notes that consequence directly.</p>"
    "<p><b>What is not here.</b> Nothing in this document says an event arrives, arrives once, or "
    "arrives at all. Nothing promises an order. How an event travels over a particular protocol is "
    "a separate binding document for each one. Even the way the whole event is written down is a "
    "separate format document. And what your type names mean is yours to write.</p>",
    "Source: the CloudEvents specification, version 1.0.2, published by the CloudEvents working "
    "group under the Cloud Native Computing Foundation. The specification defines no transport, no "
    "delivery or ordering guarantee, no data format and no authorization model."), 580)
S["b06-f6"]=lambda: f_realia(tbl("Word study","Reporting verbs",
    ["Verb","What it suggests","Example"],
    [["says","neutral","The specification <b>says that</b> the id must be unique."],
     ["states","formal, on the record","It <b>states that</b> order is not addressed."],
     ["requires","an obligation","It <b>requires</b> producers <b>to</b> make the pair unique."],
     ["notes","a consequence, in passing","It <b>notes that</b> a consumer may treat it as a copy."],
     ["claims","the writer may doubt it","&nbsp;"],["warns","a risk","&nbsp;"]]), 600)
S["b06-f7"]=lambda: f_chart([("handled once",2480),("recognized as a duplicate",40),
    ("handled twice",4),("rejected as malformed",11)], unit="events")
S["b06-f8"]=lambda: f_icons([("star","required"),("note","optional"),
    ("thread","source and id together"),("recycle","a duplicate discarded"),
    ("essay","the transport document"),("refnumber","a dotted event type")], cols=3)
S["b06-f9"]=lambda: f_realia(tbl("Event note &middot; shipment events",
    "Interface document, section 6.2",
    ["",""],
    [["<b>Required fields</b>","spec version, source, type, id"],
     ["<b>What identifies an event</b>","the source and the id, together; not the timestamp"],
     ["<b>Delivery</b>","at least once &mdash; a copy may arrive more than once"],
     ["<b>Order</b>","not promised, within or across sources"],
     ["<b>Duplicates</b>","the consumer's job; handled pairs kept for 72 hours"]],
    note="At least once means more than once."), 560)
S["b06-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("ravi",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("envelope",385,196,0.22),
     ("essay",445,194,0.26),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,3,30))
S["b06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Consumer A", None,
        "<p>Events are identified by their timestamp.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Consumer B", None,
        "<p>Events are identified by the source and the id together.<br>"
        "Handled pairs are kept for 72 hours.<br>"
        "The number comes from the transport's own documentation.</p>"), w)[0:3],
    w=920, h=300)
S["b06-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Events are published to a queue.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "The four required fields. The pair that identifies an event. The delivery promise in plain "
    "words. How long handled pairs are kept, and why that number. What is not promised.</p>",
    "One of these led a training pipeline to read the same event four times."))
S["b06-f13"]=lambda: f_realia(form("Event-note planner",
    [("The required fields",""),("What identifies an event",""),
     ("The delivery promise, in plain words",""),("How long handled pairs are kept, and why",""),
     ("What is not in the envelope",""),("Not in this note","")]), 520)
S["b06-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("ravi",195,172,{}),
     ("chiamaka",280,176,{"seated":True}),("mei",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("tomas",520,170,{}),("lars",595,172,{}),
     ("ines",665,170,{}),("grace",735,172,{}),("marek",805,170,{}),
     ("oksana",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("haddad",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("envelope",330,198,0.2),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,4,0))
S["b06-f15"]=lambda: f_chart([("source and identifier",5),("an identifier alone",6),
    ("a timestamp",4),("we do not identify them",3),("I do not know",5)])
S["b06-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("envelope",315,196,0.2),("envelope",360,196,0.2),
     ("essay",430,194,0.26),("note",500,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,10,0))
