# -*- coding: utf-8 -*-
"""Keystone Book 3 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · Four Principles, Three Levels ----------------
S["c10-f1"]=lambda: f_icons([("quotemark","a text alternative"),("computer","keyboard only"),
    ("form","a clear label"),("portal","two browsers"),
    ("square","a focus outline"),("walk","a drag with an alternative"),
    ("signpost","help in the same place"),("badge","three level badges"),
    ("tally","one step ticked of four"),("handsup","is it accessible?")], cols=5)
S["c10-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("samira",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,2,20))
S["c10-f3"]=lambda: f_icons([("quotemark","perceivable"),("computer","operable"),
    ("form","understandable"),("portal","robust"),
    ("square","a visible focus"),("noentry","a process failing at one step")], cols=3)
S["c10-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The page","Keyboard only","Focus visible","Part of a process"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The step that breaks the chain: ______________________"), 600)
S["c10-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 34",
    "Platform team &middot; accessibility conformance &middot; page 1 of 1",
    "<p><b>The document.</b> The Web Content Accessibility Guidelines, version 2.2, became a W3C "
    "Recommendation on 5 October 2023. It builds on version 2.1 without replacing its "
    "structure.</p>"
    + table_html(["Principle","Means","A guideline under it"],
      [["<b>perceivable</b>","it can be sensed","provide text alternatives"],
       ["<b>operable</b>","it can be used","make everything keyboard accessible"],
       ["<b>understandable</b>","it can be made sense of","make text readable"],
       ["<b>robust</b>","it keeps working","be compatible with assistive technology"]])
    + "<p><b>Three levels.</b> Each criterion sits at A, double A or triple A. Double A is the level "
    "most policies and contracts refer to. The guidelines themselves say that triple A is not "
    "intended as a general requirement for entire sites, because some criteria cannot be satisfied "
    "for all kinds of content.</p>"
    "<p><b>What version 2.2 changed.</b> It adds nine new success criteria. Among them are "
    "requirements about keyboard focus not being hidden, alternatives to dragging, minimum target "
    "size, consistent help, not having to enter the same information twice, and authentication "
    "that does not depend on remembering something. It also removes one criterion that had become "
    "obsolete.</p>"
    "<p><b>What conformance attaches to.</b> A claim is made for a full page. A page that meets the "
    "criteria except in one region does not conform. And a claim is made for a complete process. If "
    "a task takes a person through several pages, all of them must conform at the claimed level. So "
    "<i>our product conforms</i> is not a sentence this document supports.</p>"
    "<p><b>And what it does not promise.</b> The guidelines state plainly that meeting them will "
    "not address every user need for every disability. Automated checking covers a minority of the "
    "criteria. And a conformance claim describes a version on a date, while content changes "
    "daily.</p>",
    "Source: Web Content Accessibility Guidelines 2.2, W3C Recommendation of 5 October 2023."), 580)
S["c10-f6"]=lambda: f_realia(tbl("Word study","-able adjectives",
    ["Verb","Adjective","Noun"],
    [["perceive","<b>perceivable</b>","perception"],
     ["operate","<b>operable</b>","operation"],
     ["understand","<b>understandable</b>","understanding"],
     ["access","<b>accessible</b>","<b>accessibility</b>"],
     ["read","&nbsp;","&nbsp;"],["maintain","&nbsp;","&nbsp;"]]), 600)
S["c10-f7"]=lambda: f_chart([("by an automated tool",17),("by a person inspecting",21),
    ("by a keyboard-only user",9),("by a screen-reader user",7),("not tested",32)],
    unit="criteria")
S["c10-f8"]=lambda: f_icons([("quotemark","a text alternative"),("computer","keyboard operation"),
    ("form","a labelled form"),("portal","two assistive tools"),
    ("square","a focus outline"),("noentry","a failing step")], cols=3)
S["c10-f9"]=lambda: f_realia(tbl("Conformance note &middot; accessibility",
    "Published 4 March &middot; covers release 7.2",
    ["","Level","Tested","Date"],
    [["the twelve pages in appendix A","<b>AA</b>","31 by tool, <b>19 by a person</b>","4 March"],
     ["the sign-up process (3 pages)","<b>AA</b>",
      "completed <b>with a keyboard</b> and <b>a screen reader</b>","4 March"],
     ["the payment process (4 pages)","<b>does not conform</b>","&mdash;","4 March"]],
    note="A process is only as conformant as its worst step."), 620)
S["c10-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("samira",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("essay",385,194,0.26),
     ("note",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,2,30))
S["c10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Statement A", None,
        "<p>The product is accessible at the middle level.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Statement B", None,
        "<p>Twelve named pages and the sign-up process, at AA.<br>"
        "Tested 4 March, on release 7.2.<br>"
        "31 criteria by tool, 19 by a person.<br>"
        "The payment process does not conform: step three.</p>"), w)[0:3],
    w=920, h=300)
S["c10-f12"]=lambda: f_realia(doc("Two statements", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Statement 1</b><br>"
    "The product is accessible, at a named level.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Statement 2</b><br>"
    "The pages and processes, the level, the date, the testing methods with counts, the known "
    "exceptions and what is not claimed.</p>",
    "A customer entered her card details before reaching the step that failed."))
S["c10-f13"]=lambda: f_realia(form("Conformance-note planner",
    [("What conforms, and at what level",""),("The processes",""),("How each was tested",""),
     ("The exceptions",""),("What you do not claim",""),("Not in this note","")]), 520)
S["c10-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("samira",195,172,{}),
     ("junseo",280,176,{"seated":True}),("ines",360,172,{"seated":True}),
     ("mei",435,176,{"seated":True}),("karin",520,170,{}),("tomas",595,172,{}),
     ("priya",665,170,{}),("lars",735,172,{}),("grace",805,170,{}),
     ("marek",865,172,{}),("oksana",920,170,{}),("ravi",960,174,{}),("chiamaka",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,3,0))
S["c10-f15"]=lambda: f_chart([("by somebody who uses one",2),("by a developer",6),
    ("only automated checks",9),("no",5),("I do not know",4)])
S["c10-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("computer",470,142,0.4),
     ("note",390,194,0.24),("clipboard",545,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,0))

# ---------------- Unit 11 · Fifteen Things Data Can Be ----------------
S["c11-f1"]=lambda: f_icons([("noentry","a wrong value"),("form","a missing field"),
    ("spreadsheet","two records disagreeing"),("review","a source with a note"),
    ("clock","an old value"),("padlock","a locked record"),
    ("timer","a slow retrieval"),("thread","a chain of changes"),
    ("recycle","a backup restored"),("handsup","one dataset, two problems")], cols=5)
S["c11-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("priya",420,172,{})],
    props=[("desk",240,0,1.25),("spreadsheet",310,194,0.24),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("computer",600,142,0.42)],
    clockat=(130,46,22,12,50))
S["c11-f3"]=lambda: f_icons([("noentry","inaccuracy"),("form","incompleteness"),
    ("spreadsheet","inconsistency"),("timer","poor accessibility"),
    ("padlock","confidentiality"),("recycle","recoverability")], cols=3)
S["c11-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The complaint","The characteristic","Inherent or system-dependent","The owner"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that has no owner: ______________________"), 600)
S["c11-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 35",
    "Data team &middot; the data quality model &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO/IEC 25012:2008 is the data quality model in the same series as the "
    "product quality model of Unit 1. It defines fifteen characteristics, each with a definition, "
    "and groups them in a way that is the most useful part of the document.</p>"
    + table_html(["Group","Characteristics"],
      [["<b>inherent</b> &mdash; of the data itself",
        "<b>accuracy</b>, <b>completeness</b>, <b>consistency</b>, <b>credibility</b>, "
        "<b>currentness</b>"],
       ["<b>both</b>, depending on viewpoint",
        "accessibility, compliance, confidentiality, efficiency, precision, traceability, "
        "understandability"],
       ["<b>system-dependent</b> &mdash; of the system",
        "<b>availability</b>, <b>portability</b>, <b>recoverability</b>"]])
    + "<p><b>The division that settles arguments.</b> An inherent characteristic belongs to the "
    "data wherever it is held. If a date of birth is wrong, it is wrong in the database, in the "
    "export, in the backup and on paper. No change of technology affects it.</p>"
    "<p><b>A system-dependent characteristic is a property of the thing holding the data.</b> "
    "Recoverability, availability and portability are about the system, not the values. So <i>the "
    "data is bad</i> can mean two completely different kinds of problem, with two completely "
    "different owners. You cannot make a value accurate by buying faster storage, and you cannot "
    "make a slow query accurate.</p>"
    "<p><b>Two characteristics people confuse.</b> Accuracy is whether the value is right. "
    "Precision is how finely it is recorded. A weight recorded to three decimal places that is "
    "wrong in the first digit is precise and inaccurate.</p>"
    "<p><b>Two more that get overlooked.</b> Currentness: the data was right and is now old. And "
    "traceability: you cannot tell how a value came to be what it is, which is the characteristic "
    "that makes every other investigation slow.</p>",
    "Source: ISO/IEC 25012:2008, Software engineering &mdash; SQuaRE &mdash; Data quality model. "
    "The standard defines a vocabulary: it provides no thresholds, no measures and no priorities."),
    580)
S["c11-f6"]=lambda: f_realia(tbl("Word study","Parallel lists",
    ["Structure","The rule","Example"],
    [["both &hellip; and","the same form on each side","<b>both</b> accurate <b>and</b> complete"],
     ["either &hellip; or","the same form on each side",
      "<b>either</b> inherent <b>or</b> system-dependent"],
     ["neither &hellip; nor","the same form, no second negative",
      "<b>neither</b> accurate <b>nor</b> current"],
     ["not only &hellip; but also","&nbsp;","&nbsp;"],
     ["a plain list","every item the same form","&nbsp;"]]), 600)
S["c11-f7"]=lambda: f_chart([("completeness",31),("consistency",22),("currentness",14),
    ("accuracy",11),("traceability",8)], unit="complaints")
S["c11-f8"]=lambda: f_icons([("noentry","a wrong value"),("form","an empty field"),
    ("spreadsheet","two disagreeing systems"),("timer","a slow retrieval"),
    ("thread","a chain of changes"),("recycle","a restored backup")], cols=3)
S["c11-f9"]=lambda: f_realia(tbl("Data note &middot; customer records",
    "Review of 25 March",
    ["The complaint","Characteristic","Group","Owner","Estimate"],
    [["40% of records have no country","<b>completeness</b>","<b>inherent</b>","product (the form)",
      "<b>one-line change</b>"],
     ["our totals disagree with finance","<b>consistency</b>","<b>inherent</b>","architecture",
      "<b>a quarter</b>"],
     ["the nightly export takes 9 hours","<b>efficiency</b>","<b>system-dependent</b>","platform",
      "<b>an afternoon</b>"],
     ["3,000 addresses cannot be traced","<b>traceability</b>","both, ours","data team",
      "<b>not recoverable</b>"]],
    note="Nobody has ever finished a project called fix the data."), 640)
S["c11-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("priya",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("spreadsheet",385,194,0.24),
     ("essay",450,194,0.26),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,1,0))
S["c11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Proposal A", None,
        "<p>Project: fix customer data. Two quarters, four people.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Proposal B", None,
        "<p>Four items.<br>Each with a characteristic and a group.<br>"
        "Each with an owner and an estimate.<br>"
        "One marked not recoverable.</p>"), w)[0:3],
    w=920, h=300)
S["c11-f12"]=lambda: f_realia(doc("Two documents", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Document 1</b><br>"
    "A project proposal with a general title.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Document 2</b><br>"
    "Four complaints with a characteristic, a group, an owner and an estimate for each.</p>",
    "Three of the four were finished inside a quarter."))
S["c11-f13"]=lambda: f_realia(form("Data-note planner",
    [("The complaints",""),("The characteristic for each",""),("The group",""),
     ("The owner",""),("The estimate",""),("What has not been assessed","")]), 520)
S["c11-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("priya",195,172,{}),
     ("chiamaka",280,176,{"seated":True}),("karin",360,172,{"seated":True}),
     ("mei",435,176,{"seated":True}),("tomas",520,170,{}),("lars",595,172,{}),
     ("ines",665,170,{}),("grace",735,172,{}),("marek",805,170,{}),
     ("oksana",865,172,{}),("ravi",920,170,{}),("junseo",960,174,{}),("samira",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("spreadsheet",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,1,30))
S["c11-f15"]=lambda: f_chart([("wrong values",5),("missing fields",8),
    ("systems disagreeing",6),("hard to get at",4),("all of these at once",4)])
S["c11-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("spreadsheet",390,194,0.24),
     ("note",460,194,0.24),("pen",525,200,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,3,0))

# ---------------- Unit 12 · Source, Stimulus, Response, Measure ----------------
S["c12-f1"]=lambda: f_icons([("board","six labelled boxes"),("student","a person as a source"),
    ("messages","a burst of requests"),("calendar","a normal day and a peak day"),
    ("folder","one component highlighted"),("timer","a measured response"),
    ("tree","a tree of scenarios"),("clipboard","a list of risks"),
    ("scales","a tradeoff"),("handsup","one sentence, written together")], cols=5)
S["c12-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("karin",420,172,{})],
    props=[("desk",240,0,1.25),("board",620,96,0.9),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("computer",310,142,0.44)],
    clockat=(130,46,22,11,10))
S["c12-f3"]=lambda: f_icons([("student","the source"),("messages","the stimulus"),
    ("calendar","the environment"),("folder","the artifact"),
    ("proof","the response"),("timer","the response measure")], cols=3)
S["c12-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The requirement","Parts present","Parts missing","Testable as written"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one with two parts: ______________________"), 600)
S["c12-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 36",
    "Platform team &middot; scenarios and evaluation &middot; page 1 of 1",
    "<p><b>The sources.</b> The six-part scenario is set out in Software Architecture in Practice by "
    "Len Bass, Paul Clements and Rick Kazman. The evaluation method built on it, the Architecture "
    "Tradeoff Analysis Method, was published as a technical report by the Software Engineering "
    "Institute in 2000.</p>"
    + table_html(["Part","Question it answers","Example"],
      [["<b>source</b>","who or what?","a customer"],
       ["<b>stimulus</b>","what happened?","opens their order list"],
       ["<b>environment</b>","in what state?","at month end, four times normal load"],
       ["<b>artifact</b>","affecting what?","the order service"],
       ["<b>response</b>","what does it do?","returns the first page"],
       ["<b>response measure</b>","how do we know?","<b>under 2 s for 95% of requests</b>"]])
    + "<p><b>Why six.</b> Each part is there because leaving it out has caused a real argument. "
    "Without an environment, a figure met on a quiet Tuesday is quoted against a month-end "
    "complaint. Without an artifact, nobody knows which team owns it. Without a response measure, "
    "the requirement cannot be failed, and a requirement that cannot be failed has no "
    "content.</p>"
    "<p><b>What an evaluation produces.</b> The method brings stakeholders together, collects "
    "scenarios, ranks them in a utility tree, and examines how the architecture handles the most "
    "important ones. Its output is not a score. It is four lists: risks, non-risks, sensitivity "
    "points and tradeoff points.</p>"
    "<p><b>There is no pass, no fail and no number out of ten.</b> That is deliberate. An "
    "architecture is not good or bad in itself. It is good or bad for a set of prioritized "
    "scenarios, and the priorities belong to the stakeholders rather than to the architect.</p>"
    "<p><b>The expensive part is the room.</b> The method requires the people who care about the "
    "qualities to be present and to rank the scenarios themselves. That is its real cost, and it is "
    "also where most of its value comes from.</p>",
    "Sources: the six-part quality attribute scenario as set out in Software Architecture in "
    "Practice by Bass, Clements and Kazman; and the Architecture Tradeoff Analysis Method, "
    "published as a Software Engineering Institute technical report in 2000."), 580)
S["c12-f6"]=lambda: f_realia(tbl("The grammar of Book 3", None,
    ["Unit","Grammar"],
    [["1","classifying and defining"],["2","percentages and approximation"],["3","&nbsp;"],
     ["4","multiples and factors"],["5","&nbsp;"],["6","correlation and cause"],["7","&nbsp;"],
     ["8","probability and certainty"],["9","&nbsp;"],["10","-able adjectives"],["11","&nbsp;"]]),
    560)
S["c12-f7"]=lambda: f_chart([("two parts",19),("three parts",7),("four parts",2),
    ("five parts",1),("six parts",2)], unit="requirements")
S["c12-f8"]=lambda: f_icons([("student","a source"),("messages","a stimulus"),
    ("calendar","an environment"),("folder","an artifact"),
    ("proof","a response"),("timer","a response measure")], cols=3)
S["c12-f9"]=lambda: f_realia(doc("Quality scenarios &middot; order and payment",
    "Platform team &middot; reviewed with stakeholders 26 March",
    "<p><b>1</b> &nbsp;<b>When</b> the month-end batch runs and load reaches four times normal, "
    "<b>a customer</b> opening <b>their order list</b> receives <b>the first page</b> from <b>the "
    "order service</b> in <b>under 2 s for 95% of requests</b>. &mdash; <i>high / medium</i></p>"
    "<p><b>2</b> &nbsp;<b>When</b> one region is unreachable, <b>a customer</b> submitting <b>a "
    "payment</b> receives <b>a confirmation or a clear refusal</b> from <b>the payment service</b> "
    "within <b>5 s, for 100% of requests</b>. &mdash; <i>high / high</i></p>"
    "<p><b>3</b> &nbsp;<b>When</b> a new optional field is required, <b>one engineer</b> adds it to "
    "<b>the order schema</b> and ships it <b>within one working day</b>, touching <b>one "
    "service</b>. &mdash; <i>medium / low</i></p>"
    + table_html(["The tradeoff point",""],
      [["scenarios 1 and 2 compete at month end","<b>payments win</b>; the order list degrades to "
        "a cached page up to two minutes old"],
       ["agreed by","Ines (product) and Lars (operations), 26 March"]]),
    "If it cannot be failed, it is not a requirement."), 600)
S["c12-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{}),
     ("karin",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("board",620,96,0.9),("essay",300,194,0.26),
     ("clipboard",370,194,0.24),("lamp",180,140,0.42),("computer",470,142,0.4)],
    clockat=(140,46,22,11,30))
S["c12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Sheet A", None,
        "<p>Four short statements, two parts each.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Sheet B", None,
        "<p>Three six-part scenarios.<br>A priority against each.<br>"
        "A named owner for each measure.<br>One tradeoff point, with the names of who agreed it.</p>"),
        w)[0:3],
    w=920, h=300)
S["c12-f12"]=lambda: f_realia(doc("Two documents", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Document 1</b><br>"
    "Four two-part requirements.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Document 2</b><br>"
    "Three six-part scenarios with priorities, measures and owners, plus a list of tradeoff "
    "points.</p>",
    "Two of these requirements had contradicted each other for two years."))
S["c12-f13"]=lambda: f_realia(form("Scenario planner",
    [("Source",""),("Stimulus",""),("Environment",""),
     ("Artifact",""),("Response",""),("Response measure","")]), 520)
S["c12-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("karin",195,172,{}),
     ("ines",280,176,{"seated":True}),("lars",360,172,{"seated":True}),
     ("mei",435,176,{"seated":True}),("tomas",520,170,{}),("priya",595,172,{}),
     ("grace",665,170,{}),("marek",735,172,{}),("oksana",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("chiamaka",960,174,{}),("samira",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,0))
S["c12-f15"]=lambda: f_chart([("yes",2),("with interpretation",8),("no",9),
    ("we have none written",4),("I do not know",4)])
S["c12-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("board",560,100,0.6),("essay",320,194,0.26),
     ("essay",385,194,0.26),("clipboard",455,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,1,0))
