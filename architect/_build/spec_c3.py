# -*- coding: utf-8 -*-
"""Keystone Book 3 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · Counting Weaknesses ----------------
S["c07-f1"]=lambda: f_icons([("computer","code with one line highlighted"),("archive","a list of identifiers"),
    ("tally","a counter of occurrences"),("dashboard","four gauges"),
    ("thread","a weakness across three files"),("timer","a scan running overnight"),
    ("calculator","a count divided by a size"),("padlock","a sealed binary"),
    ("essay","a report with a zero"),("handsup","two readings of one zero")], cols=5)
S["c07-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("oksana",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,11,20))
S["c07-f3"]=lambda: f_icons([("dashboard","the reliability measure"),("padlock","the security measure"),
    ("timer","the performance efficiency measure"),("iron","the maintainability measure"),
    ("thread","a weakness across components"),("calculator","a count against a size")], cols=3)
S["c07-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The check","What it counts","What it does not cover","The last figure and the code size"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The code nothing reads: ______________________"), 600)
S["c07-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 31",
    "Platform team &middot; automated code measures &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO/IEC 5055:2021, Automated source code quality measures, was "
    "published in 2021. It specifies four measures. Each one is computed by a tool, from source "
    "code, by counting occurrences of a published list of weaknesses.</p>"
    + table_html(["Measure","An example of what it counts"],
      [["<b>reliability</b>","a resource opened on one path and never released"],
       ["<b>security</b>","input used in a query without being neutralized"],
       ["<b>performance efficiency</b>","a query issued inside a loop over a result set"],
       ["<b>maintainability</b>","a module with a very large number of dependencies"]])
    + "<p><b>Where the weaknesses come from.</b> They are drawn from a public enumeration of known "
    "software weaknesses, each with its own identifier. So the measures are not opinions. Every "
    "counted item is a named pattern on a published list, which anybody can look up.</p>"
    "<p><b>Two kinds of weakness.</b> Some sit inside one function and are easy for a tool to see. "
    "Others span several components, and those are the expensive ones. The standard deliberately "
    "includes the second kind, which is what distinguishes it from a style checker.</p>"
    "<p><b>What a count of zero means.</b> None of the weaknesses on that list was detected by that "
    "tool in the source code it could read. Three conditions, all of them real. So a zero is "
    "genuine work and a narrow claim. It says nothing about whether the software does what anybody "
    "wanted. It says nothing about a design decision that will cost you in two years. And it says "
    "nothing about the libraries you did not write.</p>"
    "<p><b>A count needs a size.</b> Four hundred occurrences in ten thousand lines and four "
    "hundred in two million are different situations. A count on its own is not comparable with "
    "anything, including last quarter's count of the same code after it grew.</p>",
    "Source: ISO/IEC 5055:2021. The measures count specified weaknesses in readable source code: "
    "they do not assess functional correctness, design quality, components not available in source "
    "form, or the severity of any weakness in a particular deployment."), 580)
S["c07-f6"]=lambda: f_realia(tbl("Word study","Agents and instruments",
    ["Structure","What it names","Example"],
    [["by + a person or body","the agent","The list was published <b>by</b> a standards body."],
     ["by + a tool","the agent, loosely","The weaknesses are detected <b>by</b> the scanner."],
     ["using","the instrument","We measured the code <b>using</b> the scanner."],
     ["with","the instrument, informally","counted <b>with</b> a static analyzer"],
     ["by means of","&nbsp;","&nbsp;"],["automatically","&nbsp;","&nbsp;"]]), 600)
S["c07-f7"]=lambda: f_part("What the scanner can read",
    [("our own source",40,"#7a4a86"),("vendored libraries",22,"#b05a1e"),
     ("generated code",8,"#1d6f8c"),("third-party binaries",18,"#2f6b4f"),
     ("managed services",12,"#6b6861")])
S["c07-f8"]=lambda: f_icons([("computer","a highlighted line"),("archive","a weakness list"),
    ("tally","a counter"),("dashboard","four gauges"),
    ("thread","a weakness across files"),("calculator","a count beside a size")], cols=3)
S["c07-f9"]=lambda: f_realia(tbl("Measurement note &middot; automated code measures",
    "Monthly &middot; figures for March",
    ["Measure","Occurrences","Code size","Per 100k lines"],
    [["reliability","<b>212</b>","480,000","<b>44</b>"],
     ["security","<b>0</b>","480,000","<b>0</b>"],
     ["performance efficiency","<b>97</b>","480,000","<b>20</b>"],
     ["maintainability","<b>0</b>","480,000","<b>0</b>"]],
    note="Forty percent of what runs is in this number."), 600)
S["c07-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("oksana",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("clipboard",385,194,0.24),
     ("note",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,12,0))
S["c07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report A", None,
        "<p>Four measures. Four zeros.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Report B", None,
        "<p>Four counts with the code size.<br>The scope, and what it excludes.<br>"
        "The proportion of what runs.<br>A note on what the measures do not cover.</p>"), w)[0:3],
    w=920, h=300)
S["c07-f12"]=lambda: f_realia(doc("Two reports", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Report 1</b><br>"
    "Four figures, one of them zero.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Report 2</b><br>"
    "The same four with the code size, the scope, the tool, the list, the proportion of what runs "
    "and a note on what is not covered.</p>",
    "A year of zero findings covered about two fifths of the product."))
S["c07-f13"]=lambda: f_realia(form("Measurement-note planner",
    [("How the figures are produced",""),("The counts with sizes",""),
     ("The scope, and what it excludes",""),("What a zero means",""),
     ("Count against size",""),("What no automatic measure will see","")]), 520)
S["c07-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("oksana",195,172,{}),
     ("tomas",280,176,{"seated":True}),("priya",360,172,{"seated":True}),
     ("marek",435,176,{"seated":True}),("mei",520,170,{}),("karin",595,172,{}),
     ("lars",665,170,{}),("ines",735,172,{}),("grace",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("chiamaka",960,174,{}),("samira",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("clipboard",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,30))
S["c07-f15"]=lambda: f_chart([("our own source only",11),("source and vendored code",5),
    ("almost everything",2),("nothing scans it",4),("I do not know",5)])
S["c07-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("clipboard",390,194,0.24),
     ("calculator",460,198,0.2),("note",525,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,2,0))

# ---------------- Unit 8 · Severity Is Not Risk ----------------
S["c08-f1"]=lambda: f_icons([("tally","a score out of ten"),("barrier","a five-band ladder"),
    ("door","a door reachable from outside"),("padlock","the same door behind a gate"),
    ("crate","a component never called"),("coins","a record of high value"),
    ("router","an automatic attack tool"),("queue","a patch waiting"),
    ("spreadsheet","a list reordered"),("handsup","which to fix first")], cols=5)
S["c08-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("oksana",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("note",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,3,10))
S["c08-f3"]=lambda: f_icons([("tally","the base score"),("router","with threat information"),
    ("crate","with our environment"),("coins","with the value of the asset"),
    ("note","a note that changes no number"),("spreadsheet","a list reordered by risk")], cols=3)
S["c08-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The finding","The score","Reachable","What is behind it"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one we would fix first: ______________________"), 600)
S["c08-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 32",
    "Platform team &middot; scoring vulnerabilities &middot; page 1 of 1",
    "<p><b>The specification.</b> CVSS version 4.0 was published in November 2023 by the "
    "organization that maintains it, succeeding version 3.1 from 2019. It produces a number from "
    "0.0 to 10.0 and a band: none, low, medium, high, critical.</p>"
    + table_html(["Group","What it describes","Usually filled in?"],
      [["<b>base</b>","the vulnerability <b>itself</b>","<b>always</b>"],
       ["<b>threat</b>","whether a working exploit exists","sometimes"],
       ["<b>environmental</b>","what is true in <b>your</b> deployment","<b>rarely</b>"],
       ["<b>supplemental</b>","extra information","<b>changes no number</b>"]])
    + "<p><b>The sentence that matters.</b> The specification states that the base score represents "
    "the severity of the vulnerability as such. Consumers are expected to use the threat and "
    "environmental metrics to produce something that reflects their own situation.</p>"
    "<p><b>So a base score is a property of the weakness</b>, like the hardness of a metal. Risk is "
    "a property of your system. It depends on whether anything can reach the vulnerable part, "
    "whether an attack exists, and what is behind it. A ten in a library you ship and never call "
    "can be less urgent than a six on your sign-in page.</p>"
    "<p><b>Why the base score is the one everybody uses.</b> Because it arrives. It comes in a "
    "feed, with the finding, already computed. The environmental metrics have to be filled in by "
    "somebody who knows your deployment, and that person is busy. The default is not chosen. It is "
    "the one that requires no work.</p>"
    "<p><b>What version 4.0 added.</b> A clearer treatment of exploit maturity, and a new "
    "supplemental group which deliberately does not change the score. That decision is worth "
    "noticing. The authors added information teams need without letting it move a number, because "
    "a number that moves for several reasons stops meaning anything.</p>",
    "Source: the Common Vulnerability Scoring System, version 4.0, November 2023. The score is a "
    "measure of severity: it is not a probability, and it does not consider exposure, reachability, "
    "asset value or remediation capacity."), 580)
S["c08-f6"]=lambda: f_realia(tbl("Word study","Probability",
    ["Expression","How likely","Example"],
    [["almost certainly","very high","It will <b>almost certainly</b> be attempted."],
     ["likely / probable","more likely than not","Exploitation is <b>likely</b> within a month."],
     ["possible","it could happen","It is <b>possible</b> that the component is reachable."],
     ["unlikely","less likely than not","Exploitation here is <b>unlikely</b>."],
     ["may well","&nbsp;","&nbsp;"],["cannot be ruled out","&nbsp;","&nbsp;"]]), 600)
S["c08-f7"]=lambda: f_matrix(["by score","by risk"],
    [("sign-in parameter, 6.4",["7th","1st"]),("upload handler, 8.1",["3rd","2nd"]),
     ("date library, 9.8",["1st","7th"]),("report export, 9.1",["2nd","5th"])])
S["c08-f8"]=lambda: f_icons([("tally","a base score alone"),("router","a published exploit"),
    ("crate","an unreachable component"),("coins","a high-value record"),
    ("note","a supplemental note"),("spreadsheet","a reordered list")], cols=3)
S["c08-f9"]=lambda: f_realia(tbl("Triage note &middot; open findings",
    "Security and platform &middot; fortnight beginning 18 March",
    ["Finding","Base","Reachable?","Exploit in use?","Behind it","Our judgment"],
    [["sign-in parameter","<b>6.4</b>","<b>yes, unauthenticated</b>","<b>yes</b>",
      "customer contact details","<b>likely &mdash; first</b>"],
     ["upload handler","8.1","yes, authenticated","no","document store","possible &mdash; second"],
     ["date library","<b>9.8</b>","<b>no</b>","no","&mdash;",
      "<b>unlikely while nothing calls it &mdash; seventh</b>"]],
    note="The score is one of four inputs."), 640)
S["c08-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("oksana",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("clipboard",385,194,0.24),
     ("note",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,3,30))
S["c08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("List A", None,
        "<p>Eleven findings, sorted by base score.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("List B", None,
        "<p>The same eleven, with three columns added by hand:<br>"
        "reachable, exploit in use, what is behind it.<br>"
        "A different order, and a judgment with two reasons on the top two.</p>"), w)[0:3],
    w=920, h=300)
S["c08-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Findings with their scores, in order.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "The same findings with reachability, exploit status, what is behind each one, a judgment and "
    "the condition that would change it.</p>",
    "One of these put a nine in dead code ahead of a six on the front door."))
S["c08-f13"]=lambda: f_realia(form("Triage planner",
    [("How the list is ordered",""),("The findings with four inputs each",""),
     ("Two judgments written out",""),("Why the extra columns are yours",""),
     ("What you are not claiming",""),("Capacity","")]), 520)
S["c08-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("oksana",195,172,{}),
     ("karin",280,176,{"seated":True}),("lars",360,172,{"seated":True}),
     ("mei",435,176,{"seated":True}),("tomas",520,170,{}),("priya",595,172,{}),
     ("ines",665,170,{}),("grace",735,172,{}),("marek",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("chiamaka",960,174,{}),("samira",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("clipboard",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,4,0))
S["c08-f15"]=lambda: f_chart([("by score",12),("by score and reachability",4),
    ("by what is behind it",2),("whatever is newest",5),("I do not know",4)])
S["c08-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("spreadsheet",320,194,0.24),("clipboard",390,194,0.24),
     ("note",460,194,0.24),("pen",525,200,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,8,0))

# ---------------- Unit 9 · Ninety-Three Controls ----------------
S["c09-f1"]=lambda: f_icons([("archive","controls in four groups"),("certificate","a certificate with a scope"),
    ("clipboard","ticks and crosses"),("review","an auditor"),
    ("form","a risk assessment"),("noentry","a control marked not applicable"),
    ("recycle","a management cycle"),("address","one office of four"),
    ("crate","a product with a question mark"),("handsup","two readings of a certificate")],
    cols=5)
S["c09-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("oksana",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("certificate",395,194,0.24),
     ("clipboard",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,4,40))
S["c09-f3"]=lambda: f_icons([("meeting","organizational controls"),("student","people controls"),
    ("door","physical controls"),("computer","technological controls"),
    ("noentry","an exclusion with a reason"),("certificate","a narrow scope")], cols=3)
S["c09-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The organization","The standard and edition","The scope line","Does it cover what we use"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one whose scope surprised us: ______________________"), 600)
S["c09-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 33",
    "Platform team &middot; certification and controls &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO/IEC 27001:2022 was published in October 2022, replacing the 2013 "
    "edition. It sets out the requirements for an information security management system. That is a "
    "set of processes, not a set of software.</p>"
    + table_html(["Theme","Controls"],
      [["<b>organizational</b>","<b>37</b>"],["<b>people</b>","<b>8</b>"],
       ["<b>physical</b>","<b>14</b>"],["<b>technological</b>","<b>34</b>"],
       ["<b>total</b>","<b>93</b>"]])
    + "<p><b>What changed from 2013.</b> The earlier edition had 114 controls in fourteen clauses. "
    "The 2022 edition has 93 in four themes, with eleven new controls and many of the old ones "
    "merged. A smaller number is not a weaker standard. The reduction is mostly "
    "consolidation.</p>"
    "<p><b>The statement of applicability.</b> The standard requires an organization to determine "
    "the controls it needs from its own risk assessment. It must then compare that list with Annex "
    "A, to verify that no necessary control has been omitted. And it must produce a document "
    "recording which controls apply, which do not, and a justification for each inclusion and "
    "exclusion.</p>"
    "<p><b>So Annex A is a reference set, not a compulsory checklist.</b> A control may be excluded, "
    "and the exclusion must be written down with a reason. That document is where the real "
    "information is, and it is almost never the document a customer asks for.</p>"
    "<p><b>What is certified, and how much of it.</b> The certificate covers a management system "
    "within a scope that the organization itself defines. A scope may be an entire company, or one "
    "function in one office. The scope is stated on the certificate, usually in a single line that "
    "nobody reads.</p>",
    "Source: ISO/IEC 27001:2022, published October 2022. Certification covers a management system "
    "within a scope defined by the organization; it does not certify any product, does not require "
    "every Annex A control, and makes no guarantee about outcomes."), 580)
S["c09-f6"]=lambda: f_realia(tbl("Word study","Exception and applicability",
    ["Structure","What it does","Example"],
    [["unless","the condition that changes it","All apply <b>unless</b> excluded in writing."],
     ["except where","an exception by situation","applies <b>except where</b> the data is public"],
     ["with the exception of","the exception itself","all four, <b>with the exception of</b> physical"],
     ["subject to","makes it conditional","certified, <b>subject to</b> annual audit"],
     ["where applicable","&nbsp;","&nbsp;"],["not applicable","&nbsp;","&nbsp;"]]), 600)
S["c09-f7"]=lambda: f_chart([("the whole company",1),("one business unit",1),
    ("one office",1),("one function in one office",1)], unit="certificates")
S["c09-f8"]=lambda: f_icons([("archive","a control group"),("certificate","a scope line"),
    ("clipboard","ticks and crosses"),("review","an auditor"),
    ("noentry","a control not applicable"),("address","one office shaded")], cols=3)
S["c09-f9"]=lambda: f_realia(tbl("Supplier note &middot; certification evidence",
    "Security and procurement &middot; reviewed 24 March",
    ["Supplier","Standard and edition","Scope, as written","Service we buy inside it?"],
    [["A","<b>ISO/IEC 27001:2022</b>","\"all operations of the company\"","<b>yes</b>"],
     ["B","ISO/IEC 27001:2022","\"the platform engineering function\"","<b>yes</b>"],
     ["C","ISO/IEC 27001:<b>2013</b>","\"all information services\"",
      "yes &mdash; <b>but superseded</b>"],
     ["D","ISO/IEC 27001:2022","\"the customer support function at the named office\"","<b>no</b>"]],
    note="The scope line is the whole of the certificate."), 640)
S["c09-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("oksana",400,172,{"seated":True})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("certificate",385,194,0.24),
     ("clipboard",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,5,0))
S["c09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Record A", None,
        "<p>Supplier D: certified. Certificate on file, dated.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Record B", None,
        "<p>Standard and edition.<br>The scope line, quoted word for word.<br>"
        "Whether the service we buy is inside it.<br>"
        "The count of exclusions and their themes.</p>"), w)[0:3],
    w=920, h=300)
S["c09-f12"]=lambda: f_realia(doc("Two records", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Record 1</b><br>"
    "Supplier certified; certificate dated and filed.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Record 2</b><br>"
    "The standard, the edition, the quoted scope, whether the service is covered, and the "
    "exclusions by count and theme.</p>",
    "One of these described a support desk nobody used, for four years."))
S["c09-f13"]=lambda: f_realia(form("Supplier-note planner",
    [("The four fields per supplier",""),("What you ask for",""),("The fallback question",""),
     ("What you do not claim",""),("How a gap is described",""),("Not in this note","")]), 520)
S["c09-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("oksana",195,172,{}),
     ("grace",280,176,{"seated":True}),("mei",360,172,{"seated":True}),
     ("karin",435,176,{"seated":True}),("tomas",520,170,{}),("priya",595,172,{}),
     ("lars",665,170,{}),("ines",735,172,{}),("marek",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("chiamaka",960,174,{}),("samira",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("certificate",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,5,30))
S["c09-f15"]=lambda: f_chart([("the product",7),("the company",9),
    ("a management system within a scope",4),("I am not sure",5),("never seen one",2)])
S["c09-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("certificate",320,194,0.24),("essay",390,194,0.26),
     ("clipboard",460,194,0.24),("note",525,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
