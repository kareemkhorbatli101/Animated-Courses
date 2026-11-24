# -*- coding: utf-8 -*-
"""Keystone Book 1 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · Two Letters for a Country ----------------
S["a07-f1"]=lambda: f_icons([("address","a code on a label"),("form","a three-letter code"),
    ("spreadsheet","a table of codes"),("noentry","a code crossed out"),
    ("calendar","a code added, with a date"),("archive","a reserved list"),
    ("worldmap","codes on a map"),("application","a drop-down of names"),
    ("essay","a dated page"),("handsup","two lists compared")], cols=5)
S["a07-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("oksana",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("spreadsheet",395,194,0.24),
     ("essay",460,194,0.26),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,2,50))
S["a07-f3"]=lambda: f_icons([("refnumber","two letters"),("idcard","three letters"),
    ("tally","three digits"),("calendar","a code assigned"),
    ("noentry","a code withdrawn"),("archive","a code reserved")], cols=3)
S["a07-f4"]=lambda: f_realia(tbl("Team research", None,
    ["Where the list is","How many entries","When it changed","Who owns it"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="Lists nobody owns: ______________________"), 600)
S["a07-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 7",
    "Platform team &middot; country codes &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO 3166-1 gives codes for the names of countries and certain other "
    "territories. The current edition was published in 2020. The list itself is maintained by the "
    "ISO 3166 Maintenance Agency. Changes are published as they are agreed. So they do not arrive "
    "on a date you can plan around.</p>"
    + table_html(["Form","Example","Used for"],
      [["alpha-2","<b>GB</b>, <b>JP</b>, <b>BR</b>","most systems"],
       ["alpha-3","<b>GBR</b>, <b>JPN</b>, <b>BRA</b>","where two letters are not enough"],
       ["numeric","<b>826</b>, <b>392</b>, <b>076</b>","systems that carry digits only"]])
    + "<p><b>Three verbs.</b> A code is assigned to an entry. A code is withdrawn when the entry "
    "changes. A withdrawn code is then reserved, so that it is not given to another country at "
    "once. Two reserved codes matter in daily work. UK and EU are reserved at the request of "
    "bodies that need them. So UK is not the code for the United Kingdom. The code is GB.</p>"
    "<p><b>The list changes.</b> Codes have been withdrawn and new ones assigned inside the "
    "working life of most systems. Names change more often than codes do. A name is not an "
    "identifier. So we store the code and display the name, and we take the name from the "
    "list.</p>"
    "<p><b>What a country code does not tell you.</b> It is not a language. It is not a currency. "
    "It is not a tax rule or an address format. And it is not a statement about politics. The "
    "names are taken from sources outside the standard, and the standard does not decide what a "
    "country is.</p>",
    "Source: ISO 3166-1, Codes for the representation of names of countries and their "
    "subdivisions &mdash; Part 1: Country codes, 2020 edition, maintained by the ISO 3166 "
    "Maintenance Agency. Subdivisions are Part 2 and formerly used codes are Part 3."), 580)
S["a07-f6"]=lambda: f_realia(tbl("Word study","The present passive",
    ["Active","Passive","Who does it"],
    [["The agency assigns a code.","A code <b>is assigned</b>.","the agency"],
     ["The agency withdraws a code.","A code <b>is withdrawn</b>.","the agency"],
     ["The agency reserves the code.","&nbsp;","&nbsp;"],
     ["The agency publishes the changes.","&nbsp;","&nbsp;"]]), 600)
S["a07-f7"]=lambda: f_chart([("in the central service",1),("in one application",4),
    ("in a spreadsheet",3),("in a hand-typed drop-down",6),("unknown",2)], unit="lists")
S["a07-f8"]=lambda: f_icons([("calendar","assigned, with a date"),("noentry","withdrawn"),
    ("archive","reserved"),("data","the code stored"),
    ("application","the name displayed"),("handsup","two lists disagreeing")], cols=3)
S["a07-f9"]=lambda: f_realia(tbl("List note",
    "Interface document, section 7.1",
    ["",""],
    [["<b>Where the list lives</b>","one country service; no application keeps a copy"],
     ["<b>The date of our copy</b>","on that service's status page"],
     ["<b>What is stored</b>","the alpha-2 code"],
     ["<b>What is displayed</b>","the name, taken from the list at display time"]],
    note="The name is not the identifier."), 540)
S["a07-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("oksana",400,172,{})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("spreadsheet",385,194,0.24),
     ("archive",640,150,0.5),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,3,0))
S["a07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Message A", None,
        "<p>Unknown country code.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Message B", None,
        "<p>The code CS was withdrawn in 2006.<br>"
        "It is on the reserved list.<br>The current code is RS.<br>"
        "Change field 4 of your export.</p>"), w)[0:3],
    w=920, h=300)
S["a07-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Country codes are validated against our list.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Source</b> ISO 3166-1, not edited by us. <b>Date of our copy</b> on the status page. "
    "<b>Stored</b> the alpha-2 code. <b>Displayed</b> the name from the list. "
    "<b>Withdrawn today</b> rejected, with the year and the current code. "
    "<b>Already stored</b> unchanged.</p>",
    "One of these cost two companies three days."))
S["a07-f13"]=lambda: f_realia(form("List-note planner",
    [("The source, and the date of our copy",""),("Stored and displayed",""),
     ("Where the list lives",""),("A withdrawn code arriving today",""),
     ("What a code does not give us",""),("Not in this note","")]), 520)
S["a07-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("oksana",195,172,{}),
     ("mei",280,176,{"seated":True}),("ravi",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("tomas",520,170,{}),("lars",595,172,{}),
     ("ines",665,170,{}),("grace",735,172,{}),("marek",805,170,{}),
     ("chiamaka",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("linh",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("spreadsheet",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,4,0))
S["a07-f15"]=lambda: f_chart([("one service",4),("one application",5),("a spreadsheet",3),
    ("a hand-typed drop-down",8),("I do not know",6)])
S["a07-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("spreadsheet",320,194,0.24),("archive",390,180,0.4),
     ("note",470,194,0.24),("pen",530,200,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,0))

# ---------------- Unit 8 · If the First Digit Is Four ----------------
S["a08-f1"]=lambda: f_icons([("messages","a request leaving"),("refnumber","a three-digit answer"),
    ("tally","five numbered classes"),("proof","a tick beside 200"),
    ("signpost","an arrow to a new address"),("handsup","a refusal"),
    ("danger","a broken server"),("timer","wait and try again"),
    ("archive","a registry page"),("magnifier","a code looked up together")], cols=5)
S["a08-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("marek",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("logsheet",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,11,25))
S["a08-f3"]=lambda: f_icons([("timer","one: in progress"),("proof","two: success"),
    ("signpost","three: redirection"),("handsup","four: client error"),
    ("danger","five: server error"),("magnifier","an unknown code, handled by class")], cols=3)
S["a08-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The code","The class","Whose mistake","What the caller should do"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one we use wrongly: ______________________"), 600)
S["a08-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 8",
    "Platform team &middot; status codes &middot; page 1 of 1",
    "<p><b>The document.</b> RFC 9110 is called HTTP Semantics. It was published in June 2022. It "
    "replaced a group of documents from 2014. Those replaced one from 1999. The five classes have "
    "not changed in all that time.</p>"
    + table_html(["First digit","Class","Meaning"],
      [["<b>1</b>","informational","the request arrived; work goes on"],
       ["<b>2</b>","successful","the request worked"],
       ["<b>3</b>","redirection","more is needed to finish it"],
       ["<b>4</b>","<b>client</b> error","the request was wrong"],
       ["<b>5</b>","<b>server</b> error","the server failed"]])
    + "<p><b>The rule about unknown codes.</b> A client has to understand the class. It may treat "
    "a code it does not know as the first code of that class. So a code in the four hundreds that "
    "nobody has seen is handled like 400. This is why new codes can be added. A client written "
    "years ago keeps working.</p>"
    "<p><b>Five behaviors, not fifty.</b> Write the five first, by class. Add an exact code only "
    "where your own logic really differs. A client with a list of codes fails on the next one. A "
    "client with five classes and a log line keeps running and tells you something useful.</p>"
    "<p><b>Two names that mislead.</b> The code 401 is called Unauthorized. It means the server "
    "does not know who you are. The code 403 means the server knows you and refuses. Teams swap "
    "these two all the time, and the person who suffers is the one reading the log.</p>",
    "Source: RFC 9110, HTTP Semantics, June 2022, which replaced the 2014 specifications; the "
    "five status classes; and the status code registry maintained by IANA. The document does not "
    "define error body formats or your retry policy."), 580)
S["a08-f6"]=lambda: f_realia(tbl("Word study","The zero conditional",
    ["If / When&hellip;","&hellip;then (present simple)"],
    [["<b>If</b> the first digit <b>is</b> 2,","the request <b>succeeds</b>."],
     ["<b>If</b> the first digit <b>is</b> 4,","the client <b>made</b> the mistake."],
     ["<b>If</b> the first digit <b>is</b> 5,","the server <b>failed</b>."],
     ["<b>When</b> the code <b>is</b> unknown,","&nbsp;"],
     ["<b>If</b> the response <b>has</b> no code,","&nbsp;"]]), 600)
S["a08-f7"]=lambda: f_chart([("two",8421),("three",312),("four",488),("five",37),
    ("unknown",14)], unit="responses")
S["a08-f8"]=lambda: f_icons([("proof","a two"),("signpost","a three"),
    ("handsup","a four"),("danger","a five"),
    ("timer","wait, then retry"),("magnifier","unknown, handled by class")], cols=3)
S["a08-f9"]=lambda: f_realia(tbl("Response note",
    "Interface document, section 8.1",
    ["First digit","What our client does"],
    [["<b>1</b>","ignore; the response is not final"],
     ["<b>2</b>","read the body; the request succeeded"],
     ["<b>3</b>","follow the new address, up to five times"],
     ["<b>4</b>","do not retry; surface it"],
     ["<b>5</b>","retry with a wait, up to three times"]],
    note="Log the code. Handle the class."), 540)
S["a08-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("marek",400,172,{})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("logsheet",385,194,0.26),
     ("note",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,12,0))
S["a08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Client A", None,
        "<p>Eleven exact codes.<br>Anything else: fail.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Client B", None,
        "<p>Five classes, one behavior each.<br>"
        "An unknown code is the first of its class.<br>"
        "The log line: the code, the class, the body.</p>"), w)[0:3],
    w=920, h=300)
S["a08-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Eleven codes, each with what it does.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Five classes</b>, one behavior each. <b>Unknown code</b> handled as the first of its "
    "class; not an alert. <b>Log line</b> the exact code, the class, the first line of the body. "
    "<b>Two exact branches</b> 401 and 409, with a reason.</p>",
    "One of these broke at nine in the morning when a service became more precise."))
S["a08-f13"]=lambda: f_realia(form("Response-note planner",
    [("The five classes and their behaviors",""),("Unknown codes",""),("The log line",""),
     ("Exact codes, with reasons",""),("What the tests assert on",""),
     ("Not in this note","")]), 520)
S["a08-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("marek",195,172,{}),
     ("mei",280,176,{"seated":True}),("tomas",360,172,{"seated":True}),
     ("lars",435,176,{"seated":True}),("priya",520,170,{}),("ines",595,172,{}),
     ("grace",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("chiamaka",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("linh",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("logsheet",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,1,0))
S["a08-f15"]=lambda: f_chart([("handles the class",5),("logs and fails",7),("crashes",4),
    ("has never happened",3),("I do not know",7)])
S["a08-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("note",320,194,0.24),("logsheet",390,194,0.26),
     ("essay",460,194,0.26),("pen",530,200,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,0))

# ---------------- Unit 9 · Three Numbers and a Promise ----------------
S["a09-f1"]=lambda: f_icons([("refnumber","three numbers, two dots"),("chain","a broken link"),
    ("crate","a new box added"),("bandage","a small repair"),
    ("tally","a zero at the front"),("flashcard","a label reading alpha"),
    ("essay","a release note"),("padlock","a published interface"),
    ("logsheet","a dated changelog"),("handsup","reading a version together")], cols=5)
S["a09-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("grace",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,2,30))
S["a09-f3"]=lambda: f_icons([("chain","the first number breaks"),("crate","the second adds"),
    ("bandage","the third fixes"),("tally","zero promises nothing"),
    ("flashcard","a pre-release comes first"),("magnifier","which one is later")], cols=3)
S["a09-f4"]=lambda: f_realia(tbl("Team research", None,
    ["From","To","What changed","Was the number right"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one we got wrong: ______________________"), 600)
S["a09-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 9",
    "Platform team &middot; version numbers &middot; page 1 of 1",
    "<p><b>The specification.</b> Semantic Versioning 2.0.0 describes a version number of three "
    "parts. They are written with dots between them. Each part is a number. Each one is raised for "
    "one reason only.</p>"
    + table_html(["Part","Raise it when","Then"],
      [["<b>MAJOR</b>","you make an <b>incompatible</b> change","the two lower parts go to 0"],
       ["<b>MINOR</b>","you <b>add</b> something and break nothing","the last part goes to 0"],
       ["<b>PATCH</b>","you <b>fix</b> something and break nothing","nothing else changes"]])
    + "<p><b>The promise.</b> A version number tells somebody what will happen when they upgrade. "
    "If only the last number rises, their code will keep working. If the first number rises, "
    "something will break. The reader has been warned by the number alone. They did not have to "
    "read anything.</p>"
    "<p><b>Zero is special.</b> A version that begins with zero means that anything may change at "
    "any time. The public interface is not to be considered stable. So 0.9.4 does not mean nearly "
    "finished. It means no promises. Version 1.0.0 is the moment the promise starts.</p>"
    "<p><b>You have to declare your public interface.</b> The three numbers describe changes to an "
    "interface you have written down. If you have not written it down, the numbers mean nothing. "
    "Nobody can say whether a change was compatible, including you.</p>",
    "Source: Semantic Versioning 2.0.0: the three parts and the rule for each; the meaning of a "
    "major version of zero; the lower precedence of pre-release versions; and the requirement that "
    "the public interface be declared. The specification enforces nothing: the promise is kept by "
    "people."), 580)
S["a09-f6"]=lambda: f_realia(tbl("Word study","Sequence words",
    ["Sequence word","Example"],
    [["First","<b>First</b> we decide whether anything breaks."],
     ["Then","<b>Then</b> we choose the number."],
     ["After that","<b>After that</b> we write the release note."],
     ["Next","&nbsp;"],["Finally","&nbsp;"]]), 600)
S["a09-f7"]=lambda: f_chart([("patch releases",64),("minor releases",21),
    ("major releases",2),("wrongly numbered",5)], unit="releases")
S["a09-f8"]=lambda: f_icons([("chain","the first number, with a break"),("crate","the second, with a box"),
    ("bandage","the third, with a repair"),("tally","a version beginning with zero"),
    ("flashcard","a pre-release"),("magnifier","build information ignored")], cols=3)
S["a09-f9"]=lambda: f_realia(tbl("Release note &middot; 3.0.0",
    "Published 11 May",
    ["",""],
    [["<b>Changed</b>","two response fields renamed; old names removed"],
     ["<b>Added</b>","one optional request field"],
     ["<b>Fixed</b>","rounding in one report total"],
     ["<b>Why 3.0.0</b>","this breaks callers, so the first number rises"]],
    note="Something will break. Four teams have been written to."), 540)
S["a09-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("grace",400,172,{})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("essay",385,194,0.26),
     ("note",445,194,0.24),("note",495,194,0.24),("lamp",180,140,0.42)],
    clockat=(140,46,22,9,30))
S["a09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Release note A &middot; 2.5.0", None,
        "<p>Three changes. One field added. Two fields renamed. One total corrected.</p>"),
        w)[0:3],
    lambda w,h: f_realia(doc("Release note B &middot; 3.0.0", None,
        "<p><b>Something will break.</b><br>Two fields renamed: old names removed.<br>"
        "Anyone reading them by name stops working.<br>"
        "Upgrade: change the names, test, deploy.<br>"
        "2.5.1 is available without the renames.</p>"), w)[0:3],
    w=920, h=300)
S["a09-f12"]=lambda: f_realia(doc("Two release notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "2.5.0 &mdash; three changes, listed.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "3.0.0 &mdash; <b>something will break.</b> Two fields renamed. Who is affected: every caller "
    "reading them. Upgrade steps, in order. Why the first number rose. What is public, and what is "
    "not.</p>",
    "Four teams upgrade automatically on a minor version, because that is what the number means."))
S["a09-f13"]=lambda: f_realia(form("Release-note planner",
    [("The version, and whether anything breaks",""),("Changed, added, fixed",""),
     ("Who is affected",""),("The upgrade steps, in order",""),("What is public",""),
     ("Not in this note","")]), 520)
S["a09-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("grace",195,172,{}),
     ("mei",280,176,{"seated":True}),("chiamaka",360,172,{"seated":True}),
     ("tomas",435,176,{"seated":True}),("priya",520,170,{}),("lars",595,172,{}),
     ("ines",665,170,{}),("marek",735,172,{}),("oksana",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("linh",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("note",330,198,0.2),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,3,30))
S["a09-f15"]=lambda: f_chart([("below 1.0.0",7),("1 point something",6),("2 or higher",5),
    ("no version numbers",3),("I do not know",5)])
S["a09-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("note",310,194,0.22),("note",355,194,0.22),
     ("note",400,194,0.22),("note",445,194,0.22),("essay",510,194,0.26),
     ("lamp",180,140,0.42)],
    clockat=(120,46,22,8,0))
