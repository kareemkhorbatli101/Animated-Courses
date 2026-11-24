# -*- coding: utf-8 -*-
"""Keystone Book 6 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · Practices, Tasks and Examples ----------------
S["f04-f1"]=lambda: f_icons([("family","roles and training"),("engine","a build environment"),
    ("archive","source archived with a checksum"),("board","a design review"),
    ("magnifier","a code review"),("proof","an automated test"),
    ("email","a report from outside"),("stamp","a fix released"),
    ("note","a root cause recorded"),("form","a nineteen-row form")], cols=5)
S["f04-f2"]=lambda: f_scene(920,420, people=[("tomas",330,176,{"seated":True}),
     ("hana",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("form",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,20))
S["f04-f3"]=lambda: f_icons([("family","prepare the organization"),("engine","protect the software"),
    ("board","produce well-secured software"),("email","respond to vulnerabilities"),
    ("archive","archived releases"),("note","a received report")], cols=3)
S["f04-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The practice","What we actually do","The evidence","The honest answer"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one where the honest answer is nothing:"), 640)
S["f04-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 54",
    "Platform team &middot; the development framework &middot; page 1 of 1",
    "<p><b>The publication.</b> NIST Special Publication 800-218, the Secure Software Development "
    "Framework, version 1.1, February 2022. It is guidance, organized as four groups containing "
    "nineteen practices. Each practice has tasks, and each task has implementation examples the "
    "document itself calls notional.</p>"
    + table_html(["Group","What it covers","Practices"],
      [["<b>Prepare the Organization</b>","roles, training, toolchain, requirements","5"],
       ["<b>Protect the Software</b>","build environments, archived releases, provenance","3"],
       ["<b>Produce Well-Secured Software</b>","design, review, testing, defaults","9"],
       ["<b>Respond to Vulnerabilities</b>","receiving reports, fixing, root causes","3"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>The word doing the work.</b> The "
    "examples are notional. That single adjective is why the framework cannot be answered with "
    "ticks: it states an outcome and declines to prescribe the means. There is no required order, no "
    "priority and no maturity model, so any one-to-five level you are shown has been added by "
    "whoever is showing it to you.</p>"
    "<p><b>Our answers.</b> Nine full, six partial, four none. The four we do not do at all: nobody "
    "is named as able to authorize a release; archived releases carry no integrity information; no "
    "route exists for an outsider to report a vulnerability; and root causes are not recorded.</p>"
    "<p><b>Why none rather than partial.</b> Having read several hundred of these questionnaires, "
    "our customer's procurement team can tell the difference between a company that has looked and "
    "one that has not. Everybody writes partial, so the word has stopped carrying information. Four "
    "honest zeros, each with a date, is the answer that gets read.</p>",
    "Source: NIST Special Publication 800-218, Secure Software Development Framework (SSDF) Version "
    "1.1, February 2022. It defines four groups of practices with tasks and notional implementation "
    "examples. It is guidance: it prescribes no tools or techniques, specifies no order or priority, "
    "provides no maturity model, and offers no certification."), 580)
S["f04-f6"]=lambda: f_realia(tbl("Word study","Participle clauses",
    ["Form","What it condenses","Example"],
    [["Having + past participle","a completed earlier action",
      "<b>Having read</b> the questionnaire, we answered four practices none."],
     ["present participle","a simultaneous action",
      "<b>Naming</b> an owner, we found that four people could release."],
     ["past participle","a passive state","<b>Asked</b> for evidence, we produced two of four."],
     ["Given + noun","a condition","<b>Given</b> no integrity information, we cannot demonstrate it."],
     ["Being + participle","&nbsp;","&nbsp;"],
     ["Once + participle","&nbsp;","&nbsp;"]],
    note="A participle clause takes its subject from the main clause. Having reviewed the practices, "
    "four had no owner leaves the practices reviewing themselves."), 640)
S["f04-f7"]=lambda: f_part("Nineteen practices, four answers",
    [("answered fully",9,"#2f6b4f"),("answered in part",6,"#1d6f8c"),
     ("answered none",4,"#7a4a86"),("not applicable",0,"#6b6861")])
S["f04-f8"]=lambda: f_icons([("family","roles named"),("engine","a hardened build"),
    ("archive","a checksummed release"),("board","a design review"),
    ("email","a received report"),("note","a root cause written down")], cols=3)
S["f04-f9"]=lambda: f_realia(tbl("Answer sheet &middot; four of nineteen",
    "Platform team &middot; for Alba Health procurement",
    ["Practice","Answer","What is true today","Owner and date"],
    [["authorizing a release","<b>none</b>","nobody named; four people can in practice",
      "T. Novak, 30 June"],
     ["archived release integrity","<b>none</b>","no checksums; we cannot show what we shipped",
      "T. Novak, 31 July"],
     ["receiving external reports","<b>none</b>","no route exists for a researcher",
      "O. Melnyk, 30 June"],
     ["recording root causes","<b>none</b>","fixes recorded; the reason is not",
      "H. Sato, 30 Sept"]],
    note="Nine, six, four &mdash; and the four have dates. A zero with no date is a liability; a "
    "zero with an owner and a date is a plan."), 700)
S["f04-f10"]=lambda: f_scene(960,430, people=[("lucia",300,176,{"seated":True}),
     ("tomas",385,172,{}),("hana",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("form",385,196,0.24),
     ("note",452,194,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,10,0))
S["f04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Answer A", None,
        "<p>Partially implemented. Nineteen times.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Answer B", None,
        "<p>Nine implemented with evidence.<br>Six in part.<br>"
        "Four not implemented, each named.<br>An owner and a date for each of the four.</p>"),
        w)[0:3],
    w=920, h=300)
S["f04-f12"]=lambda: f_realia(doc("Two questionnaire answers", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Answer 1</b><br>"
    "Partially implemented, nineteen times.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Answer 2</b><br>"
    "Counts, four named zeros with owners and dates, and a line on what the framework does not "
    "provide.</p>",
    "Nineteen partially implemented rows and nineteen blank rows tell the reader the same thing."),
    620)
S["f04-f13"]=lambda: f_realia(form("Response planner",
    [("What the document is",""),("The counts",""),("The zeros, with owners and dates",""),
     ("Why not partial",""),("One thing you would rather say than be asked",""),
     ("What is not in the response","")]), 520)
S["f04-f14"]=lambda: f_scene(980,440,
    people=[("tomas",55,176,{}),("hana",115,176,{"seated":True}),("lucia",195,172,{}),
     ("mei",280,176,{"seated":True}),("oksana",360,172,{"seated":True}),
     ("adeel",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("chiamaka",665,170,{}),("paula",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("form",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,11,0))
S["f04-f15"]=lambda: f_chart([("one named person",4),("a named team",5),
    ("anybody with access",7),("nobody knows",5),("we have no releases",2)])
S["f04-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("form",316,196,0.24),("note",386,194,0.24),
     ("essay",452,196,0.24),("archive",520,196,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 5 · Eleven Principles, One Framework ----------------
S["f05-f1"]=lambda: f_icons([("signature","consent given"),("quotemark","a stated purpose"),
    ("barrier","collection limited"),("spreadsheet","a minimized record"),
    ("calendar","a retention period"),("stamp","a record corrected"),
    ("board","a notice shown openly"),("handsup","a person requesting access"),
    ("teacher","a named accountable person"),("padlock","a security control")], cols=5)
S["f05-f2"]=lambda: f_scene(920,420, people=[("lucia",330,176,{"seated":True}),
     ("yusuf",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("form",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,2,10))
S["f05-f3"]=lambda: f_icons([("quotemark","purpose legitimacy"),("barrier","collection limitation"),
    ("spreadsheet","data minimization"),("calendar","retention limitation"),
    ("board","openness and notice"),("handsup","individual access")], cols=3)
S["f05-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The sentence","The quantifier","What it hides","The counted version"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that hides a zero:"), 640)
S["f05-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 22",
    "Data group &middot; the privacy framework &middot; page 1 of 1",
    "<p><b>The framework.</b> ISO/IEC 29100, a privacy framework, first published in 2011, with a "
    "second edition carrying 2024. It is high-level: it names principles and defines roles. It "
    "implements nothing and requires nothing. This note is not legal advice.</p>"
    + table_html(["#","Principle","Us"],
      [["1","consent and choice","full"],
       ["2","purpose legitimacy and specification","full"],
       ["3","collection limitation","<b>part</b> &mdash; three forms collect unused fields"],
       ["4","data minimization","<b>part</b>"],
       ["5","<b>use, retention and disclosure limitation</b>","<b>none for four datasets</b>"],
       ["6","accuracy and quality","full"],
       ["7","openness, transparency and notice","full"],
       ["8","individual participation and access","<b>part</b> &mdash; 14 working days"],
       ["9","accountability","full"],
       ["10","information security","full"],
       ["11","privacy compliance","full"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>Three phrases we have "
    "removed.</b> Last year's response said we generally observe all eleven principles. Across "
    "eleven items, generally can mean one serious failure or eleven trivial ones, and a reader "
    "cannot tell which. It also said retained only where appropriate. Appropriate as judged by "
    "whom, against what? And access requests are answered in most cases, which concedes a gap "
    "without saying how many or which.</p>"
    "<p><b>Where most is still allowed.</b> One place: most of the fields on three forms are used, "
    "and the unused ones are listed in the annex. The quantifier is acceptable because the exception "
    "is enumerated two lines later.</p>",
    "Source: ISO/IEC 29100, Information technology &mdash; Security techniques &mdash; Privacy "
    "framework, first published 2011, with a second edition carrying 2024. It sets out eleven "
    "privacy principles. It is a high-level framework: it specifies no requirements, prescribes no "
    "implementation, maps to no jurisdiction's law, and its terminology is its own."), 580)
S["f05-f6"]=lambda: f_realia(tbl("Word study","Scope quantifiers",
    ["Quantifier","What it conceals","The counted version"],
    [["generally","which items are not covered","seven of eleven fully, three in part, one not at all"],
     ["where appropriate","who judges, against what","for datasets containing personal information"],
     ["in most cases","how many are not","in 94 of 101 requests; the seven are listed"],
     ["as necessary","necessary for what","where the stated purpose requires it"],
     ["few, if any","&nbsp;","&nbsp;"],
     ["in all but two cases","&nbsp;","&nbsp;"]]), 620)
S["f05-f7"]=lambda: f_part("Eleven principles",
    [("observed fully",7,"#2f6b4f"),("observed in part",3,"#1d6f8c"),
     ("not observed",1,"#7a4a86")])
S["f05-f8"]=lambda: f_icons([("signature","consent"),("quotemark","a stated purpose"),
    ("barrier","a limited collection"),("calendar","a retention date"),
    ("board","a published notice"),("handsup","an access request answered")], cols=3)
S["f05-f9"]=lambda: f_realia(doc("Privacy answer &middot; eleven principles",
    "Data group &middot; for Alba Health procurement &middot; not legal advice",
    "<p><b>Our answer, counted.</b> Seven of eleven observed fully; three in part; one not at "
    "all.</p>"
    "<p><b>The zero, named.</b> Four datasets have no retention limit of any kind. One is the "
    "historical freight movements table, in daily use since 2019, about which we also cannot "
    "establish how the original sample was drawn.</p>"
    "<p><b>Three phrases removed from this answer.</b> Generally, across eleven items, cannot "
    "distinguish one serious failure from eleven trivial ones. Where appropriate supplies no "
    "criterion and no judge. In most cases concedes a gap and conceals its size; it was seven of a "
    "hundred and one.</p>"
    "<p><b>A separate question.</b> Our legal obligations. The framework maps to no jurisdiction, "
    "and nothing in this response is legal advice.</p>",
    "A quantifier whose exception appears nowhere in the document is hiding something, whatever its "
    "author intended."), 600)
S["f05-f10"]=lambda: f_scene(960,430, people=[("lucia",300,176,{"seated":True}),
     ("paula",385,172,{}),("yusuf",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("form",385,196,0.24),
     ("note",452,194,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,2,30))
S["f05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Answer A", None,
        "<p>We generally observe all eleven principles.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Answer B", None,
        "<p>Seven fully, three in part, one not at all.<br>"
        "The one is retention: four datasets, no limit.<br>"
        "Three vague phrases removed, and why.<br>"
        "The legal question, separated.</p>"), w)[0:3],
    w=920, h=300)
S["f05-f12"]=lambda: f_realia(doc("Two privacy answers", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Answer 1</b><br>"
    "We generally observe all eleven principles.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Answer 2</b><br>"
    "Counted, with the zero named, four datasets listed, and the removed phrases declared.</p>",
    "Nobody wrote the twenty-two words intending to conceal a zero. Counting eleven items requires "
    "eleven answers, and generally is available in the meantime."), 620)
S["f05-f13"]=lambda: f_realia(form("Response planner",
    [("What the framework is",""),("The counted answer",""),("The zero, named",""),
     ("The phrases removed, and why",""),("The quantifier you kept",""),
     ("What is a separate question","")]), 520)
S["f05-f14"]=lambda: f_scene(980,440,
    people=[("lucia",55,176,{}),("paula",115,176,{"seated":True}),("yusuf",195,172,{}),
     ("mei",280,176,{"seated":True}),("hana",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("chiamaka",665,170,{}),("oksana",735,172,{}),("tomas",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("form",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,3,0))
S["f05-f15"]=lambda: f_chart([("retention",10),("minimization",4),("individual access",5),
    ("accountability",3),("openness",2)])
S["f05-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("form",316,196,0.24),("spreadsheet",386,196,0.24),
     ("note",452,194,0.24),("calendar",518,194,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 6 · An Awareness Document ----------------
S["f06-f1"]=lambda: f_icons([("tally","a ranked list of ten"),("data","a contributed dataset"),
    ("form","an industry survey"),("archive","a weakness category"),
    ("door","a door left open"),("pipe","untrusted input reaching a command"),
    ("thermostat","a misconfiguration"),("iron","an outdated component"),
    ("logsheet","a missing log"),("essay","a contract clause")], cols=5)
S["f06-f2"]=lambda: f_scene(920,420, people=[("oksana",330,176,{"seated":True}),
     ("hana",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,10,50))
S["f06-f3"]=lambda: f_icons([("door","broken access control"),("pipe","injection"),
    ("board","insecure design"),("thermostat","misconfiguration"),
    ("engine","excessive agency"),("handsup","overreliance on an output")], cols=3)
S["f06-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The list","How it was ranked","Our own top item","Why"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one we adopted without asking:"), 640)
S["f06-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 55",
    "Platform team &middot; two ranked lists &middot; page 1 of 1",
    "<p><b>The documents.</b> The widely cited web application top ten of 2021, and its companion "
    "for applications built on large language models, first published in 2023 and since revised with "
    "different names and a different order. Both are awareness documents. Nowhere does either claim "
    "to be a standard, and neither offers certification.</p>"
    + table_html(["#","Category","Derived from"],
      [["1","broken access control","contributed data"],
       ["2","cryptographic failures","contributed data"],
       ["3","injection","contributed data"],
       ["4","<b>insecure design</b>","<b>industry survey</b>"],
       ["5","security misconfiguration","contributed data"],
       ["6","vulnerable and outdated components","contributed data"],
       ["7","identification and authentication failures","contributed data"],
       ["8","software and data integrity failures","contributed data"],
       ["9","<b>security logging and monitoring failures</b>","contributed data"],
       ["10","<b>server-side request forgery</b>","<b>industry survey</b>"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>What a ranking means.</b> The "
    "order reflects what the contributing organizations tested and found. It does not reflect what "
    "is most likely to happen to us. Rarely does a company's own incident history match the "
    "published order, and ours does not: our two customer-visible incidents in three years were both "
    "logging and monitoring failures, which sits at position nine. Not until we put our own "
    "incidents beside the list did anybody notice that.</p>"
    "<p><b>What we have committed to.</b> All ten categories of each list, in our own priority "
    "order, with the order written down and one sentence of reasoning beside each. A contract clause "
    "asking for compliance with an awareness document cannot be satisfied as written.</p>",
    "Source: the OWASP Top 10:2021 for web application security risks, in which eight of the ten "
    "categories were derived from contributed data and two from an industry survey; and the OWASP "
    "Top 10 for Large Language Model Applications, first published 2023 and subsequently revised. "
    "Both are awareness documents: neither is a standard, neither offers certification, and the "
    "ranking reflects contributed data rather than any organization's risk."), 580)
S["f06-f6"]=lambda: f_realia(tbl("Word study","Inversion",
    ["Inverted form","What it resists","Example"],
    [["Not until &hellip; did","being skimmed",
      "<b>Not until</b> we compared our incidents <b>did</b> anybody notice."],
     ["Only after &hellip; did","the same, with sequence",
      "<b>Only after</b> the revision <b>did</b> the names change."],
     ["Rarely does &hellip;","a general assumption",
      "<b>Rarely does</b> a company's history match the order."],
     ["Nowhere does &hellip;","an assumed claim",
      "<b>Nowhere does</b> it claim to be a standard."],
     ["At no point &hellip;","&nbsp;","&nbsp;"],
     ["So &hellip; was","&nbsp;","&nbsp;"]],
    note="One inverted sentence on a page is emphasis. Three is a style, and a reader stops hearing "
    "any of them."), 640)
S["f06-f7"]=lambda: f_matrix(["published position","our own order"],
    [("logging and monitoring",["9","1"]),("broken access control",["1","2"]),
     ("outdated components",["6","3"]),("injection",["3","4"]),
     ("misconfiguration",["5","5"]),("insecure design",["4","6"])])
S["f06-f8"]=lambda: f_icons([("door","a record reached by changing a number"),
    ("pipe","untrusted input"),("board","a design flaw"),
    ("thermostat","a default password"),("engine","a model acting alone"),
    ("handsup","an output trusted without checking")], cols=3)
S["f06-f9"]=lambda: f_realia(tbl("Priority page &middot; our order, not theirs",
    "Platform team &middot; section 6.1",
    ["Our order","Category","Published position","Reasoning"],
    [["1","logging and monitoring failures","<b>9</b>",
      "<b>both of our incidents; 9 days to detection in one</b>"],
     ["2","broken access control","1","highest prevalence in the data; our surface is wide"],
     ["3","vulnerable and outdated components","6","we now have a component list, with 14 unknowns"],
     ["4","injection","3","covered by review; no incident in four years"],
     ["5","security misconfiguration","5","unchanged"]],
    note="All ten, our order, reasoning beside each. Eight of the ten published positions came from "
    "contributed data and two from a survey."), 700)
S["f06-f10"]=lambda: f_scene(960,430, people=[("oksana",300,176,{"seated":True}),
     ("hana",385,172,{}),("lucia",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",385,196,0.24),
     ("note",452,194,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,11,0))
S["f06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Response A", None,
        "<p>Accepted: the supplier shall be compliant with the top ten.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Response B", None,
        "<p>It is an awareness document; compliance is not available.<br>"
        "Eight positions from contributed data, two from a survey.<br>"
        "All ten, in our documented order, with reasoning.<br>"
        "Which version, as at which date?</p>"), w)[0:3],
    w=920, h=300)
S["f06-f12"]=lambda: f_realia(doc("Two contract responses", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Response 1</b><br>"
    "The clause is accepted as drafted.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Response 2</b><br>"
    "The document type, the source of the ranking, the company's own order, and a version "
    "question.</p>",
    "Reading a ranked list feels like learning something; comparing it with your own incidents feels "
    "like homework."), 620)
S["f06-f13"]=lambda: f_realia(form("Response planner",
    [("The clause as drafted",""),("What kind of document it is",""),
     ("Where the ranking came from",""),("Your own order, with reasoning",""),
     ("What you propose to commit to",""),("One question back","")]), 520)
S["f06-f14"]=lambda: f_scene(980,440,
    people=[("oksana",55,176,{}),("hana",115,176,{"seated":True}),("lucia",195,172,{}),
     ("mei",280,176,{"seated":True}),("tomas",360,172,{"seated":True}),
     ("adeel",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("chiamaka",665,170,{}),("paula",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,0))
S["f06-f15"]=lambda: f_chart([("access control",5),("injection",3),("misconfiguration",6),
    ("logging and monitoring",8),("outdated components",2)])
S["f06-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",316,196,0.24),("tally",386,196,0.22),
     ("note",452,194,0.24),("logsheet",518,196,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
