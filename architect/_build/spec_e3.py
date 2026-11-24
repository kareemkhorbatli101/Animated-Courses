# -*- coding: utf-8 -*-
"""Keystone Book 5 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · Words That Had to Be Agreed ----------------
S["e07-f1"]=lambda: f_icons([("book","a dictionary entry"),("speechbubble","one word, two meanings"),
    ("quotemark","a numbered definition"),("note","for the purposes of this document"),
    ("timetable","a life cycle with stages"),("noentry","the everyday meaning set aside"),
    ("archive","a glossary at the back"),("essay","a contract clause"),
    ("thread","two standards cross-referencing"),("meeting","everybody agreeing, nobody agreeing")],
    cols=5)
S["e07-f2"]=lambda: f_scene(920,420, people=[("hana",330,176,{"seated":True}),
     ("priya",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,50))
S["e07-f3"]=lambda: f_icons([("engine","autonomy"),("board","transparency"),
    ("speechbubble","explainability"),("danger","robustness"),
    ("balance","bias as a measured difference"),("application","a model, as an artifact")],
    cols=3)
S["e07-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The word","What team A means","What team B means","When the difference showed"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that cost something:"), 620)
S["e07-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 18",
    "Machine-learning group &middot; terminology &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO/IEC 22989, artificial intelligence concepts and terminology, "
    "dated 2022. It contains definitions and the stages of an AI system life cycle. It contains no "
    "requirements and nothing to conform to.</p>"
    + table_html(["Term","Why we needed it defined"],
      [["<b>AI system</b>","our contracts use it; two of them use it for the model alone"],
       ["<b>model</b>","an artifact, not the system that serves it"],
       ["<b>autonomy</b>","operation without a person initiating each action"],
       ["<b>transparency</b>","what is published about a system"],
       ["<b>explainability</b>","the degree to which a reason can be given for an output"],
       ["<b>bias</b>","a systematic difference, not a synonym for unfairness"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>What a definition settles.</b> "
    "It settles what a word means inside a document that adopts it. That is considerable. It "
    "settles nothing about how anybody speaks. A customer who writes <i>fully autonomous</i> is not "
    "using the standard's sense, and replying with it answers a question they did not ask.</p>"
    "<p><b>The three words that cost us a quarter.</b> Two teams designed to two senses of autonomy "
    "and agreed for forty minutes in a review. A customer asked for transparency and received six "
    "explanations of individual outputs. A report said a model was biased; one reader understood a "
    "measured difference and another a moral claim about the company.</p>"
    "<p><b>What it does not do.</b> It measures nothing. It does not say which property we should "
    "want. It cannot stop a word meaning something else to the person reading our page. Only a line "
    "on that page can do that.</p>",
    "Source: ISO/IEC 22989:2022, Information technology &mdash; Artificial intelligence &mdash; "
    "Artificial intelligence concepts and terminology. It provides definitions and life cycle "
    "stages; it specifies no requirements, prescribes no measurements, and its definitions hold for "
    "the purposes of documents that adopt them rather than governing ordinary usage."), 580)
S["e07-f6"]=lambda: f_realia(tbl("Word study","Stipulative definitions",
    ["Structure","What it does","Example"],
    [["for the purposes of this document","limits it to one page",
      "<b>For the purposes of this document</b>, autonomy means&hellip;"],
     ["is defined as","formal, often citing a source","Bias <b>is defined as</b> a systematic difference."],
     ["means","the plainest form","Here, <i>model</i> <b>means</b> the trained artifact."],
     ["refers to","points rather than fixes","<i>Transparency</i> <b>refers to</b> published information."],
     ["as used here","&nbsp;","&nbsp;"],
     ["is not to be confused with","&nbsp;","&nbsp;"]]), 620)
S["e07-f7"]=lambda: f_chart([("all terms defined",2),("some defined",5),
    ("a glossary, not referenced",4),("no definitions",6),
    ("definitions that contradict another document",2)], unit="documents")
S["e07-f8"]=lambda: f_icons([("engine","acting with nobody present"),("board","a published description"),
    ("speechbubble","a reason for one output"),("danger","unusual input"),
    ("balance","a measured difference"),("application","an artifact and its service")], cols=3)
S["e07-f9"]=lambda: f_realia(doc("Design note &middot; definitions, before anything else",
    "Machine-learning group &middot; section 7.1",
    "<p><b>Autonomy</b> means operation without human initiation of each action, <b>and not</b> the "
    "system's selection among available options. <i>Readers from the product team arrive with the "
    "second sense; that is the collision, and it is deliberate.</i></p>"
    "<p><b>Transparency</b> means published information about the system, <b>and not</b> an "
    "explanation of any individual output, which is explainability. <i>A customer asked us for the "
    "first and received four weeks of the second.</i></p>"
    "<p><b>Bias</b> means a measured systematic difference between groups, with a number, <b>and "
    "not</b> a claim that an outcome is unfair. <i>The second claim may follow; it needs its own "
    "sentence and its own evidence.</i></p>"
    "<p><b>Where we depart.</b> All three are adopted from a terminology standard, with one "
    "departure: we exclude scheduled triggers from autonomy. That departure is ours and anybody may "
    "argue with it.</p>",
    "Three definitions, not eleven. A page with eleven reads as a legal document and gets skimmed."),
    600)
S["e07-f10"]=lambda: f_scene(960,430, people=[("tomas",300,176,{"seated":True}),
     ("priya",385,172,{}),("hana",460,176,{"seated":True}),("mei",540,170,{})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("board",380,146,0.46),
     ("essay",460,196,0.24),("note",530,194,0.24),("window",830,56,0.9)],
    clockat=(120,44,22,10,0))
S["e07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Opening A", None,
        "<p>A project description. The word autonomy appears twice.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Opening B", None,
        "<p>Three definitions.<br>Each with an and not clause.<br>"
        "Each with a note on which readers will differ.<br>"
        "One stated departure from the standard.</p>"), w)[0:3],
    w=920, h=300)
S["e07-f12"]=lambda: f_realia(doc("Two openings", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Opening 1</b><br>"
    "A project description using one word twice.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Opening 2</b><br>"
    "Three definitions, each with an and not clause and a note about departures.</p>",
    "A definition without an and not is read as agreeing with whatever the reader already "
    "believed."), 600)
S["e07-f13"]=lambda: f_realia(form("Definitions planner",
    [("Why this page comes first",""),("The two or three words",""),("The positive half",""),
     ("The negative half",""),("Who will arrive with another sense",""),
     ("Where you depart from a standard","")]), 520)
S["e07-f14"]=lambda: f_scene(980,440,
    people=[("hana",55,176,{}),("priya",115,176,{"seated":True}),("tomas",195,172,{}),
     ("mei",280,176,{"seated":True}),("chiamaka",360,172,{"seated":True}),
     ("adeel",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("nour",665,170,{}),("oksana",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("lars",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,198,0.24),
     ("printer",430,196,0.3),("archive",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,11,0))
S["e07-f15"]=lambda: f_chart([("autonomy",6),("transparency",7),("bias",4),
    ("real-time",5),("something else",3)])
S["e07-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",316,196,0.24),("board",384,146,0.44),
     ("note",462,194,0.24),("archive",528,196,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 8 · A Report That Calls Itself a Report ----------------
S["e08-f1"]=lambda: f_icons([("book","a report marked informative"),("board","a transparency measure"),
    ("speechbubble","an explanation of one output"),("thermostat","a controllability switch"),
    ("danger","an adversarial input"),("data","poisoned training data"),
    ("scam","a stolen copy of a model"),("padlock","a privacy measure"),
    ("proof","a resilience test"),("bandage","a mitigation that reduces, not removes")], cols=5)
S["e08-f2"]=lambda: f_scene(920,420, people=[("oksana",330,176,{"seated":True}),
     ("hana",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("book",395,196,0.22),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,3,40))
S["e08-f3"]=lambda: f_icons([("danger","an adversarial input"),("data","data poisoning"),
    ("scam","model stealing"),("padlock","a privacy leak"),
    ("board","a published description"),("thermostat","a human override")], cols=3)
S["e08-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The measure","The risk it reduces","By how much","What it does not do"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one described as a guarantee:"), 620)
S["e08-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 19",
    "Machine-learning group &middot; threats and mitigations &middot; page 1 of 1",
    "<p><b>The document.</b> ISO/IEC TR 24028, an overview of trustworthiness in artificial "
    "intelligence, dated 2020. TR means technical report. In standards language it is informative. "
    "It contains no requirements and nothing can be certified against it. It surveys.</p>"
    + table_html(["Threat","What it is","What people do"],
      [["adversarial inputs","inputs crafted to make a model wrong",
        "adversarial testing <b>may reduce</b> susceptibility"],
       ["data poisoning","corrupting what the model learns from",
        "provenance controls <b>can help</b>; detection is hard"],
       ["model stealing","reconstructing a model by querying it",
        "rate limits <b>tend to</b> raise the cost"],
       ["information leakage","an output revealing training data",
        "privacy techniques <b>may reduce</b> exposure"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>What informative buys you.</b> "
    "A requirements document can only require what is testable. A report can say <i>this may "
    "help</i>, which for most measures in this field is the true statement. That caution is the "
    "content, not a weakness. A reader who turns <i>may reduce</i> into <i>ensures</i> has produced "
    "a sentence the report does not contain.</p>"
    "<p><b>How we use it.</b> We took its threat list and asked what we do and what that achieves. "
    "The honest answers are cautious, so we pair every cautious sentence with a flat one about "
    "ourselves. Adversarial testing may reduce susceptibility and guarantees nothing. We run it "
    "quarterly, and two of the last four runs changed a threshold.</p>"
    "<p><b>What it does not do.</b> It sets no requirements. It does not rank the mitigations. It is "
    "a 2020 snapshot of a field that moves quickly.</p>",
    "Source: ISO/IEC TR 24028:2020, Information technology &mdash; Artificial intelligence &mdash; "
    "Overview of trustworthiness in artificial intelligence. It is a technical report: informative, "
    "with no requirements and nothing to certify against. It surveys approaches, pitfalls, threats "
    "and mitigations, and does not establish the effectiveness of, or rank, any measure."), 580)
S["e08-f6"]=lambda: f_realia(tbl("Word study","Cautious claims",
    ["Structure","How much it claims","Example"],
    [["may reduce","possible effect, size unknown","Adversarial training <b>may reduce</b> susceptibility."],
     ["can help to","capability, not a result","Provenance controls <b>can help to</b> detect poisoning."],
     ["tends to","a general tendency","Rate limiting <b>tends to</b> raise the cost."],
     ["does not guarantee","the limit, outright","It <b>does not guarantee</b> robustness."],
     ["is associated with","&nbsp;","&nbsp;"],
     ["there is some evidence that","&nbsp;","&nbsp;"]]), 620)
S["e08-f7"]=lambda: f_chart([("eliminates",1),("prevents",2),("reduces",0),
    ("may reduce",1),("effect unknown",0)], unit="internal claims")
S["e08-f8"]=lambda: f_icons([("danger","a crafted input"),("data","poisoned records"),
    ("scam","repeated querying"),("padlock","a leaked detail"),
    ("board","a published description"),("thermostat","a human override")], cols=3)
S["e08-f9"]=lambda: f_realia(tbl("Measures note &middot; four controls",
    "Machine-learning group &middot; section 8.1",
    ["Measure","What it may do","What it does not guarantee","What we do, and what it earned"],
    [["adversarial testing","may reduce susceptibility","that no crafted input succeeds",
      "quarterly; <b>two of four runs changed a threshold</b>"],
     ["provenance controls","can help detect poisoned records","detection at all",
      "<b>all eleven datasets; evidence earned: none</b>"],
     ["rate limiting","tends to raise the cost of extraction","that a determined attacker fails",
      "both public endpoints; one attempt abandoned"],
     ["output coarsening","some evidence it reduces leakage","that no record can be inferred",
      "<b>not implemented; deferred on utility grounds</b>"]],
    note="Three of these four were previously described as eliminating or preventing a risk, and "
    "all three over-claims were in internal documents."), 720)
S["e08-f10"]=lambda: f_scene(960,430, people=[("oksana",300,176,{"seated":True}),
     ("hana",385,172,{}),("nour",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",385,196,0.24),
     ("note",452,194,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,4,0))
S["e08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Description A", None,
        "<p>Our provenance controls eliminate data poisoning.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Description B", None,
        "<p>May help detect poisoned records.<br>Does not guarantee detection at all.<br>"
        "Applied to eleven datasets since 2024.<br>"
        "Evidence earned: none. We have never detected any.</p>"), w)[0:3],
    w=920, h=300)
S["e08-f12"]=lambda: f_realia(doc("Two descriptions", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Description 1</b><br>"
    "The control eliminates the risk.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Description 2</b><br>"
    "A cautious claim, the limit, the practice with its frequency, and an evidence line &mdash; one "
    "of which is empty.</p>",
    "An empty evidence line is uncomfortable in a meeting and is the most useful thing in the "
    "document."), 600)
S["e08-f13"]=lambda: f_realia(form("Measures planner",
    [("Where this comes from",""),("The cautious claim",""),("The limit",""),
     ("What we do, and how often",""),("The evidence earned",""),
     ("What this revision changed","")]), 520)
S["e08-f14"]=lambda: f_scene(980,440,
    people=[("oksana",55,176,{}),("hana",115,176,{"seated":True}),("nour",195,172,{}),
     ("mei",280,176,{"seated":True}),("chiamaka",360,172,{"seated":True}),
     ("adeel",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("tomas",665,170,{}),("priya",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("lars",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,5,0))
S["e08-f15"]=lambda: f_chart([("eliminates",4),("prevents",6),("reduces",7),
    ("may reduce",3),("nothing is written down",5)])
S["e08-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",316,196,0.24),("note",386,194,0.24),
     ("board",456,146,0.44),("book",536,196,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 9 · A Decision Made About a Person ----------------
S["e09-f1"]=lambda: f_icons([("application","a decision with nobody present"),
    ("handsup","a person asking for a review"),("signature","a contract"),
    ("form","a consent form"),("noentry","a refused application"),
    ("teacher","a human reviewer"),("speechbubble","a point of view"),
    ("petition","a decision contested"),("padlock","a special category"),
    ("board","information about the logic")], cols=5)
S["e09-f2"]=lambda: f_scene(920,420, people=[("hana",330,176,{"seated":True}),
     ("ines",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,3,10))
S["e09-f3"]=lambda: f_icons([("signature","contract necessity"),("councilbuilding","authorization by law"),
    ("form","explicit consent"),("teacher","human intervention"),
    ("speechbubble","expressing a point of view"),("petition","contesting a decision")], cols=3)
S["e09-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The decision","What the person in the loop does","The effect on the individual",
     "The route to a human"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one with no route at all:"), 640)
S["e09-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 20",
    "Machine-learning group &middot; automated decisions about people &middot; page 1 of 1",
    "<p><b>The provision.</b> Article 22 of Regulation (EU) 2016/679, the general data protection "
    "regulation, which has applied since 2018. The article is short. This note is a reading of it by "
    "engineers and is not legal advice.</p>"
    "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>The right, in plain terms.</b> A "
    "person has the right not to be subject to a decision based solely on automated processing, "
    "including profiling, which produces legal effects concerning them or similarly significantly "
    "affects them. Both conditions must be satisfied for the right to engage.</p>"
    + table_html(["The exception","In plain terms"],
      [["<b>contract</b>","necessary for entering into or performing a contract"],
       ["<b>law</b>","authorized by law, with suitable safeguards"],
       ["<b>explicit consent</b>","the person has explicitly agreed"]])
    + table_html(["Safeguard","What it means in a system"],
      [["<b>human intervention</b>","a route to a person who can actually change the outcome"],
       ["<b>a point of view</b>","somewhere for the person to say something, read by somebody"],
       ["<b>contesting</b>","a defined way to challenge it, with an answer"]])
    + "<p><b>The two words that decide everything.</b> Our credit-limit model is reviewed by a "
    "person who approves 94 of every 100 decisions in under four seconds. Whether that is meaningful "
    "human involvement is a legal question about our process. I can describe the process. I cannot "
    "classify it.</p>"
    "<p><b>What we have.</b> None of the three safeguards. Three customers have complained through a "
    "general inbox in two years and all three were answered by whoever opened the email. Nothing in "
    "this note is legal advice.</p>",
    "Source: Article 22 of Regulation (EU) 2016/679, applicable since 2018, providing a right not "
    "to be subject to a decision based solely on automated processing producing legal effects or "
    "similarly significantly affecting the person; with three exceptions, and minimum safeguards "
    "including human intervention, expressing a point of view and contesting the decision. Whether "
    "the article applies is a legal question on the facts, and nothing here is legal advice."), 580)
S["e09-f6"]=lambda: f_realia(tbl("Word study","Rights, exceptions and safeguards",
    ["Structure","What it does","Example"],
    [["shall have the right not to be subject to","a right as protection from something",
      "A person <b>shall have the right not to be subject to</b> it."],
     ["save where","an exception, formally","&hellip;<b>save where</b> it is necessary for a contract."],
     ["unless","the plainer exception","The right applies <b>unless</b> an exception applies."],
     ["at a minimum","sets a floor","<b>At a minimum</b>, a route to a human."],
     ["subject to","&nbsp;","&nbsp;"],
     ["is entitled to","&nbsp;","&nbsp;"]]), 620)
S["e09-f7"]=lambda: f_chart([("a named reviewer with authority",0),("a general inbox",1),
    ("an informal route",0),("nothing at all",3)], unit="automated decisions")
S["e09-f8"]=lambda: f_icons([("application","a machine decision"),("signature","a contract"),
    ("form","a consent form"),("teacher","a reviewer with authority"),
    ("speechbubble","a written statement"),("petition","a dated answer")], cols=3)
S["e09-f9"]=lambda: f_realia(tbl("Process description &middot; the credit-limit decision",
    "Machine-learning group &middot; section 9.1",
    ["Step","Who acts","How long","What they can change"],
    [["score produced","the model","&mdash;","&mdash;"],
     ["review","one reviewer, four fields on screen",
      "<b>94 of last 100 in under 4 seconds</b>","the limit; <b>done twice this year</b>"],
     ["decision sent","an automated letter","same day","&mdash;"],
     ["complaint","<b>a general inbox</b>","answered within a day","<b>nothing</b>"]],
    note="Ninety-four of a hundred, under four seconds. I can describe this; a lawyer classifies "
    "it. Nothing here is legal advice."), 680)
S["e09-f10"]=lambda: f_scene(960,430, people=[("hana",300,176,{"seated":True}),
     ("ines",385,172,{}),("chiamaka",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",385,196,0.24),
     ("email",450,196,0.22),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,3,30))
S["e09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Description A", None,
        "<p>A human reviews every decision, and customers may complain.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Description B", None,
        "<p>Model output, then one reviewer with four fields.<br>"
        "94 of 100 in under four seconds.<br>Limit changed twice this year.<br>"
        "Complaint route: a general inbox that can change nothing.</p>"), w)[0:3],
    w=920, h=300)
S["e09-f12"]=lambda: f_realia(doc("Two pages", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 1</b><br>"
    "A human reviews every decision and customers may complain.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 2</b><br>"
    "The process with timings, what the reviewer can change, how often, the three safeguards marked "
    "absent, and one question for a lawyer.</p>",
    "Replace every adjective about your process with a number. A lawyer can use the second page in "
    "an hour."), 620)
S["e09-f13"]=lambda: f_realia(form("Brief planner",
    [("What we need",""),("The process, with numbers",""),("The two words",""),
     ("The three safeguards, and what we have",""),("What we are doing regardless",""),
     ("What is not our judgment","")]), 520)
S["e09-f14"]=lambda: f_scene(980,440,
    people=[("hana",55,176,{}),("ines",115,176,{"seated":True}),("chiamaka",195,172,{}),
     ("mei",280,176,{"seated":True}),("adeel",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("grace",520,170,{}),("nour",595,172,{}),
     ("tomas",665,170,{}),("oksana",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("marek",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("email",330,198,0.22),
     ("printer",430,196,0.3),("essay",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,4,0))
S["e09-f15"]=lambda: f_chart([("a named person with authority",2),("a manager if asked",5),
    ("a general inbox",6),("nobody",7),("I do not know",5)])
S["e09-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",316,196,0.24),("email",384,196,0.22),
     ("note",450,194,0.24),("clipboard",518,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
