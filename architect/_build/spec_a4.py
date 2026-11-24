# -*- coding: utf-8 -*-
"""Keystone Book 1 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · MUST, SHOULD, MAY ----------------
S["a10-f1"]=lambda: f_icons([("stamp","MUST, in capitals"),("scales","SHOULD, with a scale"),
    ("door","MAY, with two open doors"),("quotemark","a boxed paragraph"),
    ("proof","a requirement"),("review","a recommendation"),
    ("signpost","an option, two paths"),("handshake","two systems working together"),
    ("essay","a lowercase must"),("handsup","reading a requirement aloud")], cols=5)
S["a10-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("mei",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,4,5))
S["a10-f3"]=lambda: f_icons([("stamp","MUST: no choice"),("noentry","MUST NOT: forbidden"),
    ("scales","SHOULD: a reason needed"),("review","SHOULD NOT: discouraged"),
    ("signpost","MAY: free"),("handshake","working together either way")], cols=3)
S["a10-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The page","How many musts","How many are real","Is there a boxed paragraph"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The must that is a preference: ______________________"), 600)
S["a10-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 10",
    "Platform team &middot; requirement keywords &middot; page 1 of 1",
    "<p><b>The documents.</b> RFC 2119 is called Key words for use in RFCs to Indicate "
    "Requirement Levels. It was published in March 1997. It was updated in May 2017 by RFC 8174. "
    "The update added one thing. The special meanings apply only to words in capital letters. "
    "Together the two are known as BCP 14.</p>"
    + table_html(["Keyword","Also written","Meaning"],
      [["<b>MUST</b>","REQUIRED, SHALL","an absolute requirement"],
       ["<b>MUST NOT</b>","SHALL NOT","an absolute prohibition"],
       ["<b>SHOULD</b>","RECOMMENDED","see below"],
       ["<b>SHOULD NOT</b>","NOT RECOMMENDED","the same, in reverse"],
       ["<b>MAY</b>","OPTIONAL","truly optional"]])
    + "<p><b>The middle level.</b> SHOULD means there may be good reasons to ignore an item in "
    "some cases. But the full implications must be understood and weighed first. So SHOULD is not "
    "a polite MUST. It is permission to differ, if you know what you are doing. A team that "
    "ignores a SHOULD and cannot say why has not followed the document.</p>"
    "<p><b>Optional does not mean ignorable.</b> If an item is optional, one system may include it "
    "and another may leave it out. Each still has to work with the other. That obligation falls on "
    "both sides.</p>"
    "<p><b>Use the strong words sparingly.</b> The document says so in those words. They are for "
    "things needed to make systems work together, or to stop harm. A requirement that makes one "
    "engineer's preference binding is a misuse of the word. If everything is a MUST, your reader "
    "cannot find the three that matter.</p>",
    "Source: RFC 2119, March 1997, and RFC 8174, May 2017, together BCP 14. The documents do not "
    "confer standards status, do not test anything, and do not choose requirement levels for an "
    "author."), 580)
S["a10-f6"]=lambda: f_realia(tbl("Word study","Modals of obligation",
    ["Modal","Strength","Example"],
    [["must","no choice","The request <b>must</b> include the code."],
     ["must not","forbidden","The extension <b>must not</b> go there."],
     ["should","strong advice","The client <b>should</b> log the code."],
     ["should not","discouraged","You <b>should not</b> retry a client error."],
     ["may","free choice","&nbsp;"],["need not","not required","&nbsp;"]]), 600)
S["a10-f7"]=lambda: f_chart([("MUST",31),("SHOULD",4),("MAY",1),
    ("lowercase must",17)], unit="uses")
S["a10-f8"]=lambda: f_icons([("stamp","no alternative"),("noentry","a crossed-out path"),
    ("scales","a reason written beside it"),("review","a scale tipped away"),
    ("signpost","two equal paths"),("handshake","one option missing, still working")], cols=3)
S["a10-f9"]=lambda: f_realia(doc("Interface document &middot; section 4 &middot; conformance",
    "Platform team &middot; revised 18 May",
    "<p><b>Keywords.</b> The key words MUST, MUST NOT, SHOULD, SHOULD NOT and MAY in this "
    "document are to be interpreted as described in BCP 14, and only when they appear in capital "
    "letters.</p>"
    + table_html(["","Requirement","What breaks without it"],
      [["4.1","Every amount <b>MUST</b> carry a currency code.","the amount cannot be read"],
       ["4.2","Payloads <b>MUST</b> be encoded in UTF-8.","the two systems disagree about bytes"],
       ["4.3","A withdrawn country code <b>MUST NOT</b> be accepted.","we would guess the country"]]),
    "Three requirements. Recommendations and options follow. Our own obligations are section 5."),
    580)
S["a10-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("mei",400,172,{})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("essay",385,194,0.26),
     ("note",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,4,0))
S["a10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Section A", None,
        "<p>Thirty-one numbered requirements, all in capitals.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Section B", None,
        "<p>The keyword paragraph, at the top.<br>"
        "Three requirements, each with a reason.<br>"
        "Nine recommendations.<br>One option, supported both ways.</p>"), w)[0:3],
    w=920, h=300)
S["a10-f12"]=lambda: f_realia(doc("Two sections", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Section 1</b><br>"
    "Eleven capitalized requirements. No paragraph at the top. No reasons.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Section 2</b><br>"
    "The keyword paragraph, naming BCP 14. Three requirements, each with what breaks without it. "
    "Three recommendations, with an invitation to say what was skipped. One option.</p>",
    "One of these was implemented in nine days. The other was called unusable."))
S["a10-f13"]=lambda: f_realia(form("Conformance planner",
    [("The keyword paragraph",""),("Requirements, with reasons",""),("Recommendations",""),
     ("Options",""),("What the service owes the caller",""),("Not in this section","")]), 520)
S["a10-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("mei",195,172,{}),
     ("priya",280,176,{"seated":True}),("tomas",360,172,{"seated":True}),
     ("oksana",435,176,{"seated":True}),("lars",520,170,{}),("ines",595,172,{}),
     ("grace",665,170,{}),("marek",735,172,{}),("chiamaka",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("linh",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,4,30))
S["a10-f15"]=lambda: f_chart([("none",3),("one to three",4),("four to ten",6),
    ("more than ten",9),("I do not know",4)])
S["a10-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("note",395,194,0.24),
     ("quotemark",460,196,0.22),("pen",525,200,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,5,0))

# ---------------- Unit 11 · The Reader's Language ----------------
S["a11-f1"]=lambda: f_icons([("flashcard","a two-letter tag"),("essay","a script part added"),
    ("worldmap","a region part added"),("application","a list of preferences"),
    ("archive","a registry of subtags"),("quotemark","two writing systems"),
    ("calendar","a date written two ways"),("messages","a drop-down of translations"),
    ("signpost","a fallback to a shorter tag"),("handsup","two tags compared")], cols=5)
S["a11-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("hana",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,10,40))
S["a11-f3"]=lambda: f_icons([("flashcard","the language part"),("essay","the script part"),
    ("worldmap","the region part"),("signpost","falling back"),
    ("application","the reader's ordered list"),("magnifier","matching what we have")], cols=3)
S["a11-f4"]=lambda: f_realia(tbl("Team research", None,
    ["How we choose","Do we read the list","How we fall back","Do we use the country"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="Where we guess: ______________________"), 600)
S["a11-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 11",
    "Platform team &middot; language tags &middot; page 1 of 1",
    "<p><b>The documents.</b> BCP 47 is made of two documents. RFC 5646 is called Tags for "
    "Identifying Languages and was published in September 2009. RFC 4647 is about matching tags. "
    "The subtags live in the IANA Language Subtag Registry, which is updated as new ones are "
    "added.</p>"
    + table_html(["Part","Length","Taken from"],
      [["<b>language</b>","2 or 3 letters","the ISO language code standards"],
       ["<b>script</b>","4 letters","the ISO script code standard"],
       ["<b>region</b>","2 letters, or 3 digits","the country codes, or a UN area code"]])
    + "<p><b>Four examples.</b> The tag en is English, with nothing said about script or region. "
    "The tag en-GB is English as written in one region. The tag zh-Hant is one language in one "
    "script. The tag sr-Latn-RS has all three parts.</p>"
    "<p><b>More parts means narrower.</b> A longer tag is more specific. It is not more correct. "
    "Suppose a reader asks for en-GB and we only have en. We give them the English we have. The "
    "language is the part that matters most. The region is a refinement. Removing the last part is "
    "called falling back.</p>"
    "<p><b>The reader sends a list.</b> A browser does not send one language. It sends the reader's "
    "ordered list of preferences. Their order is the answer to the question. We walk down their "
    "list, not ours.</p>"
    "<p><b>What a tag does not tell us.</b> It is not the reader's country. The region part names a "
    "variety of a language. It is not a currency and it is not a date format. And it is not a "
    "translation. A country is not a language and a language is not a country.</p>",
    "Source: BCP 47 &mdash; RFC 5646, September 2009, and RFC 4647 &mdash; with subtags in the "
    "IANA Language Subtag Registry. Tags are compared without regard to case. The documents supply "
    "no translations and no locale formatting data."), 580)
S["a11-f6"]=lambda: f_realia(tbl("Word study","Possessives",
    ["Form","Example","Note"],
    [["&rsquo;s","the <b>reader&rsquo;s</b> language","one reader"],
     ["s&rsquo;","the <b>readers&rsquo;</b> languages","more than one"],
     ["of","the order <b>of</b> the list","for things, often"],
     ["its / it&rsquo;s","&nbsp;","&nbsp;"]]), 600)
S["a11-f7"]=lambda: f_chart([("the first language",6140),("the second",2210),
    ("the third",980),("the fourth",420),("the fifth",180),
    ("languages we do not have",760)], unit="visitors")
S["a11-f8"]=lambda: f_icons([("flashcard","a language part"),("essay","a script part"),
    ("worldmap","a region part"),("signpost","a long tag falling back"),
    ("application","walking down the list"),("magnifier","compared with what we have")], cols=3)
S["a11-f9"]=lambda: f_realia(tbl("Language note",
    "Interface document, section 11.1",
    ["",""],
    [["<b>How we choose</b>","the reader's own ordered list of preferences"],
     ["<b>How we fall back</b>","remove the last subtag: en-GB becomes en"],
     ["<b>What we never use</b>","the country the request came from"],
     ["<b>When nothing matches</b>","our default, and one line saying so"]],
    note="Their order, not ours."), 540)
S["a11-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("hana",400,172,{})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("essay",385,194,0.26),
     ("note",450,194,0.24),("worldmap",650,96,0.7),("lamp",180,140,0.42)],
    clockat=(140,46,22,11,0))
S["a11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Rule A", None,
        "<p>Choose the language from the country the request came from.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Rule B", None,
        "<p>Walk down the reader's preference list.<br>"
        "Remove the last subtag to fall back.<br>"
        "Keep going down their list.<br>"
        "If nothing matches, show a notice naming the language.</p>"), w)[0:3],
    w=920, h=300)
S["a11-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The language is chosen from the reader's country.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Steps</b> their list, in their order; fall back by removing the last subtag; then the next "
    "tag on their list. <b>If nothing matches</b> our default, with one line saying which language "
    "this is. <b>Never</b> the country of the request.</p>",
    "One of these telephoned a bank at six in the morning."))
S["a11-f13"]=lambda: f_realia(form("Language-note planner",
    [("Where the answer comes from",""),("The numbered steps",""),("The notice",""),
     ("Case comparison",""),("What we never use",""),("Not in this note","")]), 520)
S["a11-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("hana",195,172,{}),
     ("linh",280,176,{"seated":True}),("mei",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("tomas",520,170,{}),("lars",595,172,{}),
     ("ines",665,170,{}),("grace",735,172,{}),("marek",805,170,{}),
     ("oksana",865,172,{}),("ravi",920,170,{}),("junseo",960,174,{}),("chiamaka",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,0))
S["a11-f15"]=lambda: f_chart([("the reader's list",5),("the reader's country",8),
    ("an account setting",4),("one language only",4),("I do not know",5)])
S["a11-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",315,194,0.24),("essay",365,194,0.24),
     ("essay",415,194,0.24),("computer",560,142,0.4),("pen",480,200,0.2),
     ("lamp",180,140,0.42)],
    clockat=(120,46,22,3,0))

# ---------------- Unit 12 · Who Is Reading This? ----------------
S["a12-f1"]=lambda: f_icons([("note","a one-page summary"),("meeting","named people"),
    ("handsup","a question beside each name"),("magnifier","one diagram, three frames"),
    ("pen","a decision with a reason"),("chain","two diagrams linked"),
    ("archive","a thick unread document"),("essay","a thin read document"),
    ("review","a reader pointing at one question"),("board","a name at the top of a page")],
    cols=5)
S["a12-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("mei",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("note",395,196,0.22),
     ("archive",640,150,0.5),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,1,10))
S["a12-f3"]=lambda: f_icons([("idcard","a named stakeholder"),("handsup","a concern as a question"),
    ("magnifier","a viewpoint that frames it"),("board","a view of our system"),
    ("pen","a decision with its reason"),("chain","a correspondence")], cols=3)
S["a12-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The reader","Their question","Where the answer is","How long it takes to find"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The reader we forgot: ______________________"), 600)
S["a12-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 12",
    "Platform team &middot; architecture descriptions &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO/IEC/IEEE 42010 is called Architecture description. The edition we "
    "use carries the year 2022. It is the second edition. It replaced the one from 2011, which "
    "grew out of a document from 2000. It is about the description of an architecture. It is not "
    "about what makes an architecture good.</p>"
    + table_html(["Idea","In one line"],
      [["<b>stakeholder</b>","a person or group with an interest in the system"],
       ["<b>concern</b>","something a stakeholder needs the description to address"],
       ["<b>viewpoint</b>","a way of looking at a system, chosen to address concerns"],
       ["<b>view</b>","what you get when a viewpoint is applied to your system"]])
    + "<p><b>The rule that changes documents.</b> A description identifies the stakeholders and "
    "their concerns. Each concern is framed by at least one viewpoint. So nothing in the "
    "description exists without a reader and a question. Read that backwards and it is a test. For "
    "every section, who asked for it? For every reader, which section answers them?</p>"
    "<p><b>Decisions and reasons.</b> The standard provides for recording decisions with their "
    "rationale. That means the reasons, the alternatives, and what was accepted as a result. A "
    "recorded reason is the only part of a decision that survives the team.</p>"
    "<p><b>What the standard does not do.</b> It does not give you a set of viewpoints. It does not "
    "name a notation or a tool. It does not define a process. And it does not say whether your "
    "architecture is good. A clear description of a poor design is a clear description.</p>",
    "Source: ISO/IEC/IEEE 42010:2022, Software, systems and enterprise &mdash; Architecture "
    "description, second edition, replacing the 2011 edition: stakeholders, concerns, architecture "
    "viewpoints and views; the requirement that each concern be framed; and the provisions for "
    "decisions with rationale and for correspondences between views."), 580)
S["a12-f6"]=lambda: f_realia(tbl("The grammar of Book 1", None,
    ["Unit","Grammar"],
    [["1","present simple; <i>on</i>, <i>in</i>, <i>at</i>"],
     ["2","telling the time; <i>there is / there are</i>"],["3","&nbsp;"],
     ["4","comparatives"],["5","&nbsp;"],["6","<i>have to</i> and <i>must</i>"],
     ["7","&nbsp;"],["8","the zero conditional"],["9","&nbsp;"],
     ["10","modals of obligation"],["11","&nbsp;"]]), 560)
S["a12-f7"]=lambda: f_chart([("background",41),("components",18),("data",14),
    ("security",8),("operations",8),("summary",1)], unit="pages")
S["a12-f8"]=lambda: f_icons([("idcard","a named reader"),("handsup","a concern as a question"),
    ("magnifier","a viewpoint"),("board","a view"),
    ("pen","a decision with a reason"),("essay","a thin document beside a thick one")], cols=3)
S["a12-f9"]=lambda: f_realia(doc("Payments platform &middot; architecture summary",
    "Platform team &middot; one page &middot; 1 June",
    table_html(["Reader","Their question","Where"],
      [["security","where does personal data go?","p. 12"],
       ["operations","what happens when one part fails?","p. 24"],
       ["integration engineers","what does the interface promise?","p. 31"],
       ["the person who joins next year","why is it like this?","<b>below</b>"]])
    + table_html(["Decision","Why"],
      [["one currency-code service","five lists had gone out of step"],
       ["amounts as whole minor units","floating point lost fractions over millions of rows"],
       ["version numbers from the change","a rename shipped as a minor version broke four teams"]]),
    "Decisions whose reasons are unknown: nineteen. They are listed in section 9 and marked. "
    "Not covered: cost, staffing, the removal schedule for older interface versions."), 600)
S["a12-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("mei",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("archive",300,150,0.5),("note",390,196,0.22),
     ("note",440,196,0.22),("computer",600,142,0.42),("lamp",180,140,0.42)],
    clockat=(140,46,22,1,30))
S["a12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Opening A", None,
        "<p>This document describes the architecture of the system.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Opening B", None,
        "<p><b>Four readers, four questions.</b><br>"
        "security &mdash; where does personal data go? &mdash; p. 12<br>"
        "operations &mdash; what happens when one part fails? &mdash; p. 24<br>"
        "integration &mdash; what does the interface promise? &mdash; p. 31<br>"
        "next year's engineer &mdash; why is it like this? &mdash; below<br>"
        "Everything else here is background.</p>"), w)[0:3],
    w=920, h=300)
S["a12-f12"]=lambda: f_realia(doc("Two openings", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Opening 1</b><br>"
    "A paragraph of general description. No readers. No page numbers.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Opening 2</b><br>"
    "Four readers, each with a question and a page number. Three decisions, each with a reason. "
    "Nineteen decisions marked as reasons unknown. A line naming what is not covered.</p>",
    "The ninety pages were the same in both. Three teams said the document had got better."))
S["a12-f13"]=lambda: f_realia(form("One-page summary planner",
    [("Four readers and their questions",""),("Where each answer lives",""),
     ("Three decisions, with reasons",""),("How many reasons are unknown",""),
     ("What is not covered",""),("Which sections are background","")]), 520)
S["a12-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("mei",195,172,{}),
     ("tomas",280,176,{"seated":True}),("priya",360,172,{"seated":True}),
     ("lars",435,176,{"seated":True}),("oksana",520,170,{}),("ines",595,172,{}),
     ("grace",665,170,{}),("marek",735,172,{}),("chiamaka",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("linh",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("archive",330,170,0.4),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,2,0))
S["a12-f15"]=lambda: f_chart([("named by role",5),("named by name",2),("not named",10),
    ("no document",4),("I do not know",5)])
S["a12-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("archive",310,160,0.42),("note",390,196,0.22),
     ("essay",445,194,0.26),("logsheet",510,194,0.26),("lamp",180,140,0.42)],
    clockat=(120,46,22,5,0))
