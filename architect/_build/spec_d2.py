# -*- coding: utf-8 -*-
"""Keystone Book 4 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · Four Levels, One Title, One Date ----------------
S["d04-f1"]=lambda: f_icons([("worldmap","one box, users and neighbors"),
    ("container","deployable units inside one boundary"),
    ("application","parts inside one unit"),("folder","classes inside one part"),
    ("quotemark","a key beside a diagram"),("calendar","a date in the corner"),
    ("magnifier","zooming in one level"),("board","fourteen boxes, no key"),
    ("barrier","a boundary drawn and labeled"),("handsup","the word architecture, alone")],
    cols=5)
S["d04-f2"]=lambda: f_scene(920,420, people=[("priya",330,176,{"seated":True}),
     ("chiamaka",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("board",400,148,0.5),
     ("note",470,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,2,10))
S["d04-f3"]=lambda: f_icons([("worldmap","system in context"),("container","deployable units"),
    ("application","parts of one unit"),("folder","code"),("quotemark","a key"),
    ("calendar","a title and a date")], cols=3)
S["d04-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The diagram","Which level","Title, key, date","Could a stranger read it?"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that mixes two levels:"), 620)
S["d04-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 40",
    "Platform team &middot; diagrams &middot; page 1 of 1",
    "<p><b>The model.</b> Four levels of diagram, proposed by Simon Brown and published from 2011 "
    "onwards. Each level is a separate picture for a separate audience. Each one answers a "
    "different question, and no diagram answers two.</p>"
    + table_html(["Level","The question it answers"],
      [["<b>1 Context</b>","Who uses the system, and what does it talk to?"],
       ["<b>2 Container</b>","What are the separately deployable things?"],
       ["<b>3 Component</b>","What is inside one of them?"],
       ["<b>4 Code</b>","What is inside one component?"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>The overloaded word.</b> "
    "Container here means a separately deployable unit. It does not mean an image, a runtime or a "
    "cluster. The model predates the common use of the word, and a reader who knows the other "
    "meaning will read your picture wrongly unless the key says which one you mean.</p>"
    "<p><b>Three lines decide whether a diagram survives.</b> A title naming the system and the "
    "level. A key defining what a box is and what a line is. A date. We have forty-nine diagrams "
    "and nine carry all three.</p>"
    "<p><b>What the model does not give you.</b> No notation. No tool. No rule about which "
    "diagrams are worth keeping. It is deliberately independent of all three, which is why the key "
    "has to do the work on every page.</p>",
    "Source: the C4 model, Simon Brown, published from 2011 onwards: four levels of diagram "
    "&mdash; context, container, component and code &mdash; each for a separate audience, with a "
    "title, a key and a date on every one. The model prescribes no notation and no tool, and the "
    "word container is defined narrowly as a separately deployable unit."), 580)
S["d04-f6"]=lambda: f_realia(tbl("Word study","Levels of detail",
    ["Expression","What it does","Example"],
    [["at this level","fixes the altitude","<b>At this level</b>, a box is a deployable unit."],
     ["one level down","promises a next picture","<b>One level down</b>, the parts are named."],
     ["zoom in","moves to more detail","<b>Zooming in</b> on billing gives three components."],
     ["omit","states an absence","The reporting path <b>is omitted</b> here."],
     ["expand","&nbsp;","&nbsp;"],
     ["shows","&nbsp;","&nbsp;"]]), 600)
S["d04-f7"]=lambda: f_chart([("a title",31),("a key",14),("a date",12),("all three",9),
    ("none of the three",11)], unit="diagrams")
S["d04-f8"]=lambda: f_icons([("worldmap","context"),("container","containers"),
    ("application","components"),("folder","code"),("quotemark","a key"),
    ("calendar","a title and date")], cols=3)
S["d04-f9"]=lambda: f_realia(tbl("Diagram standard","Platform team &middot; section 4.1",
    ["Level","What a box means here"],
    [["<b>Context</b>","a system, ours or somebody else's"],
     ["<b>Container</b>","one separately deployable thing"],
     ["<b>Component</b>","a part inside one container, not deployed alone"],
     ["<b>Code</b>","a class or a module"]],
    note="Every diagram carries three things: a title naming the system and the level, a key "
    "defining boxes and lines, and a date. One level per diagram. Say what you left out."), 600)
S["d04-f10"]=lambda: f_scene(960,430, people=[("priya",300,176,{"seated":True}),
     ("chiamaka",390,172,{}),("tomas",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("board",300,146,0.52),("computer",390,142,0.42),
     ("note",465,194,0.24),("essay",525,196,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,2,30))
S["d04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Diagram A", None,
        "<p>Fourteen boxes of four shapes. No key, no title, no date.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Diagram B", None,
        "<p>Context level, payments platform.<br>Four boxes, one key.<br>"
        "A box is a system; a line is a request.<br>Dated 11 March.<br>"
        "Reporting path omitted, and said so.</p>"), w)[0:3],
    w=920, h=300)
S["d04-f12"]=lambda: f_realia(doc("Two captions", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Caption 1</b><br>"
    "Architecture of the payments platform.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Caption 2</b><br>"
    "Payments platform, container level, 11 March. A box is a separately deployable unit. The "
    "reporting path and the batch job are omitted. One level down, billing has three components.</p>",
    "The second caption is four lines long and replaces a meeting."), 580)
S["d04-f13"]=lambda: f_realia(form("Diagram-note planner",
    [("The levels, and what a box means at each",""),("The three things every diagram carries",""),
     ("One level per diagram",""),("The omissions, stated",""),
     ("Which word needs defining",""),("What you are not standardizing","")]), 520)
S["d04-f14"]=lambda: f_scene(980,440,
    people=[("priya",55,176,{}),("chiamaka",115,176,{"seated":True}),("tomas",195,172,{}),
     ("mei",280,176,{"seated":True}),("adeel",360,172,{"seated":True}),
     ("nour",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("marek",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("lars",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("application",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,3,0))
S["d04-f15"]=lambda: f_chart([("yes",5),("no",7),("there is no main diagram",4),
    ("a key but no date",3),("I do not know",5)])
S["d04-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("board",320,146,0.5),("application",400,196,0.24),
     ("note",470,194,0.24),("essay",540,196,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,0))

# ---------------- Unit 5 · Verifiable, or It Is Not a Requirement ----------------
S["d05-f1"]=lambda: f_icons([("clipboard","a numbered statement"),("chain","two demands in one"),
    ("magnifier","an ambiguous word circled"),("timer","a test beside a requirement"),
    ("barrier","two requirements in conflict"),("signpost","a source named"),
    ("quotemark","the word shall"),("balance","a feasibility question"),
    ("handsup","the word intuitive"),("essay","an open-questions list")], cols=5)
S["d05-f2"]=lambda: f_scene(920,420, people=[("ines",330,176,{"seated":True}),
     ("marek",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("clipboard",395,194,0.26),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,10,40))
S["d05-f3"]=lambda: f_icons([("chain","two demands in one"),("handsup","an unmeasurable adjective"),
    ("timer","nothing to test against"),("barrier","two in conflict"),
    ("signpost","no source"),("essay","an open question, written down")], cols=3)
S["d05-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The requirement","How it would be verified","One demand or two","The ambiguous word"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one nobody can verify:"), 620)
S["d05-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 41",
    "Platform team &middot; requirements &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO/IEC/IEEE 29148:2018 covers requirements engineering. It lists "
    "characteristics of a well-formed requirement, and characteristics of a requirement set. The "
    "two lists are different, and the second one is the one people skip.</p>"
    + table_html(["Characteristic","In short"],
      [["necessary","remove it and something is lost"],
       ["appropriate","at the right level for this document"],
       ["unambiguous","one reading only"],
       ["complete","needs nothing else to be understood"],
       ["singular","one demand, not two joined by and"],
       ["feasible","achievable within the constraints"],
       ["<b>verifiable</b>","somebody can show whether it is met"],
       ["correct","it is really what is needed"],
       ["conforming","it follows the agreed pattern"]])
    + "<p><b>Verifiable is the one that does the work.</b> If nobody can say how a requirement "
    "would be checked, it is not a requirement. It is a hope with a number on it. We had nineteen "
    "statements in one document, and eleven of them could not be verified by any means we could "
    "name.</p>"
    "<p><b>The open-questions list.</b> Some needs are real and not yet verifiable. Those belong on "
    "a list of open questions, with an owner and a date. They do not belong in the requirements "
    "section, where they look settled.</p>"
    "<p><b>What the standard does not give you.</b> It does not tell you how to elicit a "
    "requirement. It does not prioritize. It does not write your verification. And it does not "
    "help with a need that nobody knows how to measure yet.</p>",
    "Source: ISO/IEC/IEEE 29148:2018, Systems and software engineering &mdash; Life cycle "
    "processes &mdash; Requirements engineering. It gives characteristics of individual "
    "requirements and of requirement sets. It provides no elicitation method, no prioritization "
    "and no verification procedures."), 580)
S["d05-f6"]=lambda: f_realia(tbl("Word study","Nominalization",
    ["The nominalized version","The verb version"],
    [["the <b>verifiability</b> of each requirement","each requirement <b>can be verified</b>"],
     ["the <b>completeness</b> of the set","the set <b>is complete</b>"],
     ["<b>no decision has been taken</b>","&nbsp;"],
     ["the <b>prioritization</b> of the list","&nbsp;"]],
    note="The noun lets you ask about the quality. The verb says who does it. The second row is "
    "shorter by two words; the third hides the person, which is sometimes the point."), 600)
S["d05-f7"]=lambda: f_chart([("unverifiable",11),("not singular",7),("ambiguous",9),
    ("in conflict with another",3),("no fault found",8)], unit="statements")
S["d05-f8"]=lambda: f_icons([("chain","two demands"),("handsup","an adjective"),
    ("timer","nothing to test"),("barrier","a conflict"),("signpost","no source"),
    ("essay","an open question")], cols=3)
S["d05-f9"]=lambda: f_realia(doc("Requirements &middot; section 5.1",
    "Four of twelve &middot; each with an actor, an obligation and a condition",
    "<p><b>R-07.</b> The <b>order service</b> shall accept a submitted order within 400 ms at the "
    "95th percentile, measured at the gateway, under 200 orders per second.</p>"
    "<p><b>R-08.</b> The <b>order service</b> shall reject an order with an unknown product code, "
    "returning a 422 response.</p>"
    "<p><b>R-09.</b> The <b>billing service</b> shall record a charge exactly once for each "
    "accepted order, verified by a reconciliation report run daily.</p>"
    "<p><b>R-10.</b> The <b>operator</b> shall be able to cancel an order before dispatch, in one "
    "action, within the admin console.</p>"
    "<p><b>Open questions.</b> Eleven, each with an owner and a date. Two of them were previously "
    "written as requirements and could not be verified by anybody.</p>"), 560)
S["d05-f10"]=lambda: f_scene(960,430, people=[("ines",300,176,{"seated":True}),
     ("marek",390,172,{}),("nour",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("clipboard",385,194,0.26),
     ("note",455,194,0.24),("essay",520,196,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,11,0))
S["d05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page A", None,
        "<p>Eight requirements. Three contain the word and. Two use unmeasurable adjectives.</p>"),
        w)[0:3],
    lambda w,h: f_realia(doc("Page B", None,
        "<p>Twelve numbered requirements.<br>An actor in each.<br>"
        "A measurable condition in each.<br>A verification method named.<br>"
        "Eleven open questions, with owners.</p>"), w)[0:3],
    w=920, h=300)
S["d05-f12"]=lambda: f_realia(doc("Two pages", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 1</b><br>"
    "Four requirements, with adjectives and conjunctions.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 2</b><br>"
    "Four requirements, each with an actor, one demand, a measurable condition and a verification "
    "method.</p>",
    "The second page is longer and shorter at the same time: more words, fewer meanings."), 580)
S["d05-f13"]=lambda: f_realia(form("Requirement planner",
    [("The actor",""),("The obligation word",""),("The action",""),
     ("The measurable condition",""),("How it is verified",""),("What it is traced to","")]), 520)
S["d05-f14"]=lambda: f_scene(980,440,
    people=[("ines",55,176,{}),("marek",115,176,{"seated":True}),("nour",195,172,{}),
     ("mei",280,176,{"seated":True}),("adeel",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("chiamaka",520,170,{}),("grace",595,172,{}),
     ("tomas",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("lars",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("clipboard",330,198,0.24),
     ("printer",430,196,0.3),("essay",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,0))
S["d05-f15"]=lambda: f_chart([("yes",3),("with interpretation",8),("no",6),
    ("we have none written",4),("I do not know",3)])
S["d05-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("clipboard",320,194,0.26),("essay",390,196,0.24),
     ("note",460,194,0.24),("timer",525,198,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,0))

# ---------------- Unit 6 · Eight Things We Assume ----------------
S["d06-f1"]=lambda: f_icons([("barrier","a message lost in transit"),("timer","a delay, measured"),
    ("pipe","a narrower link than expected"),("eye","a message read in the middle"),
    ("signal","a network redrawn overnight"),("invoice","a bill for traffic"),
    ("router","two administrators, two rules"),("square","machines that are not alike"),
    ("waitscreen","a retry storm"),("clipboard","eight short statements")], cols=5)
S["d06-f2"]=lambda: f_scene(920,420, people=[("lars",330,176,{"seated":True}),
     ("ravi",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("clipboard",395,194,0.26),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,4,10))
S["d06-f3"]=lambda: f_icons([("barrier","a lost message"),("timer","a delay in milliseconds"),
    ("pipe","a saturated link"),("eye","an intercepted message"),
    ("signal","a redrawn network"),("invoice","a bill for traffic")], cols=3)
S["d06-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The integration","The assumption relied on","What happens when it fails","Written down?"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The assumption nobody has written down:"), 620)
S["d06-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 42",
    "Platform team &middot; eight assumptions &middot; page 1 of 1",
    "<p><b>The list.</b> Eight statements, usually attributed to L. Peter Deutsch around 1994, "
    "with a later addition associated with James Gosling. It was never published as a paper. The "
    "attribution is uncertain and the eighth item came from somebody else.</p>"
    + table_html(["The assumption","What it costs when it fails"],
      [["the network is reliable","a lost message treated as a refusal"],
       ["latency is zero","a design that chats where it should batch"],
       ["bandwidth is infinite","a payload that is fine until it is not"],
       ["the network is secure","a message read in the middle"],
       ["the topology does not change","an address that was true last night"],
       ["there is one administrator","two sets of rules, no owner"],
       ["transport cost is zero","a bill nobody forecast"],
       ["the network is homogeneous","one dialect per vendor"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>The ninth one.</b> Our own "
    "incidents point at a ninth assumption, which is that somebody else has already thought about "
    "this. It is nobody's fault in particular, and it is the one that produces the longest "
    "outages.</p>"
    "<p><b>What the list does not do.</b> It is a list, not a theory. It explains nothing, measures "
    "nothing and prescribes nothing. It is useful for exactly one purpose, which is to be read "
    "aloud over a design before anybody writes the error handling.</p>",
    "Source: the fallacies of distributed computing, attributed to L. Peter Deutsch around 1994 "
    "with later additions associated with James Gosling, circulated and extended by others since. "
    "It is a list rather than a theory, its attribution is uncertain, it was never published as a "
    "paper, and the eighth item was added later by somebody else."), 580)
S["d06-f6"]=lambda: f_realia(tbl("Word study","The second conditional",
    ["The unreal condition","The consequence"],
    [["<b>If</b> the network <b>were</b> reliable","retries <b>would be</b> unnecessary"],
     ["<b>If</b> latency <b>were</b> zero","this design <b>would be</b> simpler"],
     ["<b>Were</b> bandwidth infinite","we <b>would not</b> batch"],
     ["<b>If</b> the topology <b>did not</b> change","&nbsp;"],
     ["<b>If</b> there <b>were</b> one administrator","&nbsp;"]]), 600)
S["d06-f7"]=lambda: f_chart([("the network is reliable",9),("the topology does not change",6),
    ("bandwidth is infinite",4),("one administrator",3),
    ("the network is homogeneous",2)], unit="incidents")
S["d06-f8"]=lambda: f_icons([("barrier","a lost message"),("timer","a delay"),
    ("pipe","a saturated link"),("eye","an intercepted message"),
    ("signal","a redrawn network"),("invoice","a bill for traffic")], cols=3)
S["d06-f9"]=lambda: f_realia(tbl("Integration note &middot; the order feed",
    "Platform team &middot; section 6.1",
    ["The assumption","Relied on?","When it fails","What the code does"],
    [["the network is reliable","<b>yes</b>","a charge is sent twice",
      "retries with a limit, and an idempotency key"],
     ["latency is zero","no","&mdash;","one batched call, not forty"],
     ["the topology does not change","<b>yes</b>","connections refused for nine minutes",
      "<b>nothing &mdash; this is the gap</b>"],
     ["transport cost is zero","<b>yes</b>","a bill nobody forecast","no limit set"]],
    note="Two of the four are relied on with nothing in the code behind them. Both are now risks "
    "with owners, which they were not last week."), 660)
S["d06-f10"]=lambda: f_scene(960,430, people=[("lars",300,176,{"seated":True}),
     ("ravi",390,172,{}),("chiamaka",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("dashboard",300,142,0.42),("clipboard",385,194,0.26),
     ("note",455,194,0.24),("essay",520,196,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,4,30))
S["d06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>A call to the pricing endpoint, with its payload and expected response.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p>The same call.<br>Three of the eight assumptions relied on.<br>"
        "What happens when each fails.<br>What the code does about it.<br>"
        "Two gaps, now risks with owners.</p>"), w)[0:3],
    w=920, h=300)
S["d06-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The endpoint, the payload and the expected response.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "The same, plus the assumptions relied on, the failure behavior of each, and the two gaps.</p>",
    "The first note describes a success. The second describes a system."), 580)
S["d06-f13"]=lambda: f_realia(form("Integration-note planner",
    [("The eight assumptions",""),("Which you rely on",""),("What happens when each fails",""),
     ("What the code does",""),("Which risks are recorded",""),
     ("Which you have not handled","")]), 520)
S["d06-f14"]=lambda: f_scene(980,440,
    people=[("lars",55,176,{}),("ravi",115,176,{"seated":True}),("chiamaka",195,172,{}),
     ("mei",280,176,{"seated":True}),("adeel",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("tomas",665,170,{}),("oksana",735,172,{}),("nour",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("marek",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("dashboard",330,146,0.4),
     ("printer",430,196,0.3),("clipboard",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,5,0))
S["d06-f15"]=lambda: f_chart([("retries with a limit",6),("retries forever",4),
    ("fails immediately",3),("waits for ever",3),("I do not know",8)])
S["d06-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("dashboard",315,142,0.4),("essay",395,196,0.24),
     ("clipboard",462,194,0.26),("note",530,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
