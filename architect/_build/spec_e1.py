# -*- coding: utf-8 -*-
"""Keystone Book 5 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["e00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each from an architecture review",
    ["What you have","An example"],
    [["The past perfect","We chose it because we <b>had already committed</b> to the platform."],
     ["Cause and result","Four teams, <b>which is why</b> there are four services."],
     ["The second conditional","<b>If</b> the network <b>were</b> reliable, retries would be unnecessary."],
     ["Impossibility","Both <b>cannot be guaranteed</b> in an asynchronous system."],
     ["Conditions and provisos","You may redistribute, <b>provided that</b> four conditions are met."],
     ["Reference words","<b>This declaration</b> is what we conform to."]],
    note="Six boxes. This book adds the English of careful claims: whose claim it is, what date it "
    "binds, what it was measured on, and what the document cannot do."), 580)
S["e00-f2"]=lambda: f_realia(tbl("Four kinds of authority", None,
    ["The kind","Who can hold you to it","If you ignore it"],
    [["<b>A voluntary framework</b>","nobody","nothing, formally"],
     ["<b>A regulation</b>","a regulator, on a date fixed in law","enforcement"],
     ["<b>A management system standard</b>",
      "an auditor you hired, within a scope you declared","you lose a certificate"],
     ["<b>A paper proposing a form</b>","nobody at all",
      "nothing &mdash; and yet everyone uses it"]],
    note="An arrow at the foot points to one box: they are not interchangeable. The second row is "
    "the only one with a date in it."), 640)
S["e00-f3"]=lambda: f_realia(doc("Taped inside a laptop lid",
    "One sentence, three blanks",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>This document is a __________ , dated __________ ,<br>"
    "and it does not __________ .</b></p>"
    "<p style='font-size:12px;color:#6b6861;line-height:1.8'>"
    "&hellip;a voluntary framework, dated January 2023, and it does not create any obligation.<br>"
    "&hellip;a regulation, in force since August 2024, and it does not apply all at once.<br>"
    "&hellip;a management system standard, dated 2023, and it does not certify a model.<br>"
    "&hellip;a paper proposing a form, from 2019, and it does not define a required format.</p>",
    "Three blanks. The third one is the one nobody fills in."), 560)
S["e00-f4"]=lambda: f_realia(tbl("Two ways of answering a customer", None,
    ["What gets said","What can be shown"],
    [["We follow the AI framework.",
      "We use its four functions to organize our own register."],
     ["We are compliant with the regulation.",
      "These obligations apply to us from these dates."],
     ["We are certified.",
      "Certified against this declared scope, by this body, in this year."]],
    note="An arrow at the foot points to one box: one of these can be checked. Nothing in the left "
    "column is a lie, and not one line survives a second question."), 600)

# ---------------- Unit 1 · A Framework Nobody Can Require ----------------
S["e01-f1"]=lambda: f_icons([("book","a published framework"),("recycle","four functions"),
    ("logsheet","a risk register"),("worldmap","where a system is used"),
    ("scales","a measurement"),("clipboard","a risk being managed"),
    ("councilbuilding","a governing body"),("archive","seven characteristics"),
    ("form","a customer questionnaire"),("board","a slide claiming compliance")], cols=5)
S["e01-f2"]=lambda: f_scene(920,420, people=[("chiamaka",330,176,{"seated":True}),
     ("hana",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,0))
S["e01-f3"]=lambda: f_icons([("proof","valid and reliable"),("firstaid","safe"),
    ("padlock","secure and resilient"),("signature","accountable and transparent"),
    ("speechbubble","explainable"),("balance","fair, with bias managed")], cols=3)
S["e01-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The claim","Where it was made","Could it be shown","The honest version"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that would not survive a second question:"), 620)
S["e01-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 12",
    "Machine-learning group &middot; the risk framework &middot; page 1 of 1",
    "<p><b>The document.</b> A risk management framework for artificial intelligence, version 1.0, "
    "released by a national standards institute in January 2023. A companion playbook of "
    "suggestions came with it. It is not written for any one industry.</p>"
    + table_html(["Function","What the framework describes it as covering"],
      [["<b>GOVERN</b>","the culture, policies and accountability that cut across the rest"],
       ["<b>MAP</b>","the context: where the system is used, by whom, and what it affects"],
       ["<b>MEASURE</b>","analyzing, assessing and tracking the identified risks"],
       ["<b>MANAGE</b>","acting on them: prioritizing, responding, recovering, communicating"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>What it says about itself.</b> "
    "Its authors describe it as voluntary. It is not a checklist and not a compliance mechanism. It "
    "creates no obligations. So the sentence <i>we comply with the framework</i> has no meaning. "
    "What we can say is narrower and more useful: we use its four functions to organize our own "
    "register, and here is the register.</p>"
    "<p><b>The characteristics it associates with trustworthiness.</b> Valid and reliable; safe; "
    "secure and resilient; accountable and transparent; explainable; privacy-enhanced; and fair, "
    "with harmful bias managed. Seven in all. The framework is explicit that they involve "
    "trade-offs.</p>"
    "<p><b>How we use it.</b> As four section headings. Our register has those four names. The "
    "governing section was empty for five months, because it is the only one that needs a person "
    "named rather than a task done.</p>",
    "Source: the AI Risk Management Framework (AI RMF 1.0), released January 2023 with a companion "
    "playbook. It is voluntary, non-sector-specific and use-case agnostic; it describes four core "
    "functions and characteristics associated with trustworthiness; it is explicitly not a "
    "checklist and not a compliance mechanism, creates no obligation, and states that the "
    "characteristics involve trade-offs."), 580)
S["e01-f6"]=lambda: f_realia(tbl("Word study","Hedged attribution",
    ["Structure","What it commits you to","Example"],
    [["according to","nothing; you are reporting","<b>According to</b> the framework, four functions."],
     ["X states / describes","the document's own words","The framework <b>states that</b> it is voluntary."],
     ["it characterizes X as","their framing, not yours","It <b>characterizes</b> fairness <b>as</b> a trade-off."],
     ["the authors note","an observation they made","<b>The authors note</b> that it is not a checklist."],
     ["is said to","&nbsp;","&nbsp;"],
     ["reportedly","&nbsp;","&nbsp;"]]), 600)
S["e01-f7"]=lambda: f_chart([("govern",9),("map",18),("measure",21),("manage",13),
    ("none of the four",0)], unit="register entries")
S["e01-f8"]=lambda: f_icons([("councilbuilding","a person named"),("worldmap","where it is used"),
    ("scales","a measurement"),("clipboard","a risk prioritized"),
    ("archive","seven characteristics"),("form","one answer rewritten")], cols=3)
S["e01-f9"]=lambda: f_realia(doc("Questionnaire response &middot; item 14",
    "Machine-learning group &middot; approved 18 March",
    "<p><b>Your question.</b> <i>Does your organization comply with the AI risk management "
    "framework?</i></p>"
    "<p>The framework is, according to its own early pages, voluntary. Its authors state that it is "
    "not a checklist and not a compliance mechanism. For that reason the word <i>comply</i> has no "
    "application to it, and we will not use it.</p>"
    + table_html(["Section","Entries","Owner"],
      [["govern","<b>9</b>","head of the machine-learning group"],
       ["map","18","each system's architect"],
       ["measure","21","the model risk lead"],
       ["manage","13","the head of the group"]])
    + "<p><b>What we do not claim.</b> We do not claim conformity, compliance or certification "
    "against this framework, because none of those are available for it.</p>"), 580)
S["e01-f10"]=lambda: f_scene(960,430, people=[("hana",300,176,{"seated":True}),
     ("chiamaka",390,172,{}),("grace",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("form",385,196,0.24),
     ("note",455,194,0.24),("logsheet",520,196,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,9,30))
S["e01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Answer A", None,
        "<p>We comply with the AI risk management framework.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Answer B", None,
        "<p>Voluntary framework, version 1.0, January 2023.<br>"
        "Four function names used as our register's sections.<br>"
        "61 entries, reviewed monthly, named owner.<br>"
        "We do not describe ourselves as compliant.</p>"), w)[0:3],
    w=920, h=300)
S["e01-f12"]=lambda: f_realia(doc("Two answers", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Answer 1</b><br>"
    "One sentence claiming compliance.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Answer 2</b><br>"
    "The framework with its version and date, what was borrowed, what we do, and what we do not "
    "claim.</p>",
    "Only one of these is safe on somebody else's slide."), 580)
S["e01-f13"]=lambda: f_realia(form("Response planner",
    [("The question asked",""),("What the document is",""),("What you borrowed",""),
     ("What you do, flatly",""),("Where you are weakest",""),("What you do not claim","")]), 520)
S["e01-f14"]=lambda: f_scene(980,440,
    people=[("hana",55,176,{}),("chiamaka",115,176,{"seated":True}),("mei",195,172,{}),
     ("yusuf",280,176,{"seated":True}),("adeel",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("tomas",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("logsheet",330,198,0.24),
     ("printer",430,196,0.3),("form",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,10,0))
S["e01-f15"]=lambda: f_chart([("govern",11),("map",4),("measure",3),("manage",2),
    ("we do none of them",5)])
S["e01-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("form",320,196,0.24),("logsheet",390,196,0.24),
     ("board",460,146,0.44),("note",540,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,5,0))

# ---------------- Unit 2 · Four Dates, One Regulation ----------------
S["e02-f1"]=lambda: f_icons([("book","a journal of record"),("calendar","five marked dates"),
    ("noentry","a prohibited practice"),("certificate","a conformity mark"),
    ("speechbubble","a transparency notice"),("application","a general-purpose model"),
    ("fine","a penalty notice"),("engine","software inside a product"),
    ("clipboard","a standard being drafted"),("door","a lawyer's door")], cols=5)
S["e02-f2"]=lambda: f_scene(920,420, people=[("hana",330,176,{"seated":True}),
     ("adeel",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("calendar",395,194,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,10,20))
S["e02-f3"]=lambda: f_icons([("noentry","a prohibited practice"),
    ("application","a general-purpose model"),("certificate","a technical file"),
    ("speechbubble","a transparency notice"),("fine","a penalty"),
    ("engine","an embedded product")], cols=3)
S["e02-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The system","Provider or deployer","The likely category","Who decided"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The facts a lawyer would need:"), 620)
S["e02-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 13",
    "Machine-learning group &middot; commencement dates &middot; page 1 of 1",
    "<p><b>The instrument.</b> Regulation (EU) 2024/1689, on artificial intelligence. It is a "
    "Regulation, so it is directly applicable in the member states. No national law has to be "
    "passed for it to have effect. It was published in July 2024 and entered into force on 1 "
    "August 2024.</p>"
    "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>Force is not application.</b> "
    "The text was binding law from 1 August 2024. Its own provisions say that different parts "
    "become applicable on different dates. A provision that is in force but not yet applicable "
    "requires nothing of you today. That one distinction accounts for most of the confusion in our "
    "own emails.</p>"
    + table_html(["Applicable from","What becomes applicable"],
      [["<b>2 February 2025</b>","the general provisions and the prohibited practices"],
       ["<b>2 August 2025</b>","general-purpose AI models, governance, notifying authorities, "
        "most penalties"],
       ["<b>2 August 2026</b>","the general body, including most high-risk duties"],
       ["<b>2 August 2027</b>","high-risk systems that are safety components of regulated "
        "products"]])
    + "<p><b>Which row we are in.</b> That depends on two things we have not written down. The "
    "category of each system, and whether we are the provider or the deployer. We operate eleven "
    "systems and have classified none of them. Every date above is, for us, currently "
    "decorative.</p>"
    "<p><b>What it does not do for us.</b> It does not tell us which system is high-risk. It gives "
    "us no technical specification. The supporting standards were still being developed as this was "
    "written. Nothing in this note is legal advice.</p>",
    "Source: Regulation (EU) 2024/1689 laying down harmonized rules on artificial intelligence, "
    "published July 2024 and in force from 1 August 2024, with provisions applicable in stages on "
    "2 February 2025, 2 August 2025, 2 August 2026 and 2 August 2027. It classifies no particular "
    "system for you, provides no technical specifications, and nothing here is legal advice."),
    580)
S["e02-f6"]=lambda: f_realia(tbl("Word study","Future time and commencement",
    ["Expression","What it fixes","Example"],
    [["enters into force","when the text becomes binding law",
      "It <b>entered into force on</b> 1 August 2024."],
     ["applies from","when a provision must be followed",
      "The prohibitions <b>apply from</b> 2 February 2025."],
     ["with effect from","a change taking hold","The policy applies <b>with effect from</b> April."],
     ["as of","a state beginning on a date","<b>As of</b> August 2025, that chapter applies."],
     ["no later than","&nbsp;","&nbsp;"],
     ["until","&nbsp;","&nbsp;"]]), 600)
S["e02-f7"]=lambda: f_timeline([(0.04,"Jul 2024","published"),(0.16,"1 Aug 2024","in force"),
    (0.36,"2 Feb 2025","prohibitions"),(0.56,"2 Aug 2025","models, governance"),
    (0.78,"2 Aug 2026","the general body"),(0.95,"2 Aug 2027","embedded products")],
    nowx=0.62, w=940)
S["e02-f8"]=lambda: f_icons([("book","a publication date"),("noentry","a prohibition"),
    ("application","a general-purpose model"),("certificate","a technical file"),
    ("speechbubble","a notice"),("engine","a production line")], cols=3)
S["e02-f9"]=lambda: f_realia(tbl("Classification sheet","Machine-learning group &middot; eleven systems",
    ["System","Provider or deployer","Category","Applicable from","Confirmed by"],
    [["delay predictor","<b>deployer</b>","&nbsp;","&nbsp;","legal"],
     ["escalation classifier","<b>deployer</b>","&nbsp;","&nbsp;","legal"],
     ["route optimizer","provider","&nbsp;","&nbsp;","legal"],
     ["summary generator","deployer","&nbsp;","&nbsp;","legal"],
     ["staff roster helper","deployer","&nbsp;","&nbsp;","legal"]],
    note="Eleven descriptions, one hour of a lawyer's time. The category column is empty for every "
    "row and has been for eighteen months."), 700)
S["e02-f10"]=lambda: f_scene(960,430, people=[("hana",300,176,{"seated":True}),
     ("chiamaka",390,172,{}),("nour",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("email",385,196,0.22),
     ("calendar",450,194,0.24),("note",520,194,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,11,0))
S["e02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>We are subject to the regulation and must comply.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p>In force since 1 August 2024.<br>Four applicable dates, with their provisions.<br>"
        "Our own dates, in a separate column.<br>"
        "Eleven systems, none classified.</p>"), w)[0:3],
    w=920, h=300)
S["e02-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "We are subject to the regulation and must comply.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "The entry into force, four applicable dates, our own deadlines in a separate column, and the "
    "missing classification.</p>",
    "A table that mixes their dates with yours is the most dangerous page in a compliance file."),
    600)
S["e02-f13"]=lambda: f_realia(form("Board-note planner",
    [("The correction",""),("Force against application",""),("Their dates",""),
     ("What has not been decided",""),("Our own dates",""),("Why it is a week of work","")]), 520)
S["e02-f14"]=lambda: f_scene(980,440,
    people=[("hana",55,176,{}),("adeel",115,176,{"seated":True}),("chiamaka",195,172,{}),
     ("nour",280,176,{"seated":True}),("mei",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("tomas",665,170,{}),("oksana",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("lars",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("calendar",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,0))
S["e02-f15"]=lambda: f_chart([("yes, in writing",2),("partly",5),("no",8),
    ("we have no AI systems",3),("I do not know",7)])
S["e02-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("email",315,196,0.22),("calendar",385,194,0.24),
     ("essay",455,196,0.24),("note",525,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 3 · A System, Not a Model ----------------
S["e03-f1"]=lambda: f_icons([("certificate","a certificate on a wall"),
    ("barrier","a declared scope"),("clipboard","an auditor's checklist"),
    ("signature","a signed policy"),("star","a set of objectives"),
    ("folder","documented information"),("magnifier","an internal audit"),
    ("meeting","a management review"),("bandage","a corrective action"),
    ("application","a model, outside the boundary")], cols=5)
S["e03-f2"]=lambda: f_scene(920,420, people=[("hana",330,176,{"seated":True}),
     ("mei",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("certificate",395,194,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,0))
S["e03-f3"]=lambda: f_icons([("worldmap","the context of the organization"),
    ("signature","leadership"),("clipboard","planning"),("family","support"),
    ("engine","operation"),("magnifier","performance evaluation")], cols=3)
S["e03-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The certificate","The standard and year","The scope line","The wrong conclusion"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one quoted without its scope:"), 620)
S["e03-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 14",
    "Machine-learning group &middot; the management system standard &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO/IEC 42001, an artificial intelligence management system standard, "
    "dated 2023. It is the first certifiable one in this area. It follows the clause structure an "
    "auditor will already know from other management system standards.</p>"
    + table_html(["Clause","What is required"],
      [["<b>context</b>","the organization's role and its interested parties"],
       ["<b>leadership</b>","a policy, assigned responsibilities, commitment from top management"],
       ["<b>planning</b>","objectives, risk assessment, treatment of identified risks"],
       ["<b>support</b>","competent people, awareness, communication, documented information"],
       ["<b>operation</b>","the controls the organization has determined to be applicable"],
       ["<b>performance evaluation</b>","monitoring, internal audit, management review"],
       ["<b>improvement</b>","nonconformity and continual improvement"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>What a certificate says.</b> "
    "An accredited body examined the management system of a named organization, inside a scope the "
    "organization declared, and found it to conform. It says nothing about the accuracy, fairness "
    "or safety of any model. Two organizations can hold it and run models of very different "
    "quality.</p>"
    "<p><b>The passive, and the question it hides.</b> The standard says <i>shall be established</i> "
    "and <i>shall be reviewed</i>. That is correct drafting: it cannot know our organization chart. "
    "It is useless as an internal instruction. Our version of each clause names a person.</p>"
    "<p><b>Where we are.</b> We have a policy, a register and a risk method. We have never run an "
    "internal audit. The management review has happened once, informally. Both gaps are in clause "
    "nine, which is the clause an auditor opens first.</p>",
    "Source: ISO/IEC 42001:2023, Information technology &mdash; Artificial intelligence &mdash; "
    "Management system. It specifies requirements for an AI management system and is certifiable. "
    "Certification covers the management system within a scope the organization declares; it does "
    "not assess, measure or certify any model's accuracy, fairness, safety or performance."), 580)
S["e03-f6"]=lambda: f_realia(tbl("Word study","The passive of obligation",
    ["The standard's sentence","The hidden question","Our version"],
    [["An AI policy <b>shall be established</b>.","by whom?","<b>Chiamaka Obi</b> owns it."],
     ["Responsibilities <b>shall be assigned</b>.","by whom, to whom?",
      "<b>Top management</b>, each March."],
     ["Documented information <b>shall be maintained</b>.","who keeps it?",
      "<b>Hana Sato</b> maintains the register."],
     ["Internal audits <b>shall be conducted</b>.","who, how often?",
      "<b>Quality</b>, twice a year."],
     ["Objectives <b>shall be monitored</b>.","&nbsp;","&nbsp;"],
     ["Nonconformities <b>shall be corrected</b>.","&nbsp;","&nbsp;"]]), 620)
S["e03-f7"]=lambda: f_chart([("context",4),("leadership",4),("planning",5),("support",3),
    ("operation",4),("performance evaluation",1),("improvement",2)], unit="out of five")
S["e03-f8"]=lambda: f_icons([("certificate","a scope line"),("signature","a signed policy"),
    ("star","objectives"),("folder","a document register"),
    ("magnifier","an audit report"),("application","a model, outside the scope")], cols=3)
S["e03-f9"]=lambda: f_realia(tbl("Assignment table","Machine-learning group &middot; eleven requirements",
    ["The standard's requirement","Owner","Frequency","Evidence"],
    [["An AI policy shall be established.","Chiamaka Obi","each March","signed policy"],
     ["Documented information shall be maintained.","Hana Sato","monthly","register"],
     ["Risks shall be identified.","Hana Sato","monthly","61 entries"],
     ["Internal audits shall be conducted.","<b>vacancy</b>","&mdash;","<b>none ever</b>"],
     ["Competence shall be ensured.","<b>vacancy</b>","&mdash;","<b>none</b>"]],
    note="Two vacancies, found in a rewriting exercise rather than an audit. Nobody refused them; "
    "a passive sentence can be approved by a room in which nobody thinks it is about them."), 700)
S["e03-f10"]=lambda: f_scene(960,430, people=[("hana",300,176,{"seated":True}),
     ("mei",390,172,{}),("grace",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("clipboard",385,194,0.24),
     ("certificate",455,196,0.24),("note",520,194,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,9,30))
S["e03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Description A", None,
        "<p>Certified AI.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Description B", None,
        "<p>Certified against ISO/IEC 42001:2023.<br>Issued by an accredited body.<br>"
        "Scope: the machine-learning group and four named systems.<br>"
        "Covers the management system.<br>No model was assessed or certified.</p>"), w)[0:3],
    w=920, h=300)
S["e03-f12"]=lambda: f_realia(doc("Two descriptions", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Description 1</b><br>"
    "Certified AI.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Description 2</b><br>"
    "The standard, the body, the year, the scope line in full, and what was not assessed.</p>",
    "Agree the wording before you hold the certificate. Afterwards it is written by whoever needs "
    "it most urgently."), 600)
S["e03-f13"]=lambda: f_realia(form("Certificate-note planner",
    [("Why the note exists now",""),("The agreed description",""),
     ("The clauses and the evidence",""),("The vacancies, and how found",""),
     ("What you are asking for",""),("What is not in the note","")]), 520)
S["e03-f14"]=lambda: f_scene(980,440,
    people=[("hana",55,176,{}),("mei",115,176,{"seated":True}),("grace",195,172,{}),
     ("chiamaka",280,176,{"seated":True}),("adeel",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("nour",595,172,{}),
     ("tomas",665,170,{}),("oksana",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("marek",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("clipboard",330,198,0.24),
     ("printer",430,196,0.3),("certificate",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,10,0))
S["e03-f15"]=lambda: f_chart([("this year",4),("last year",3),("more than two years ago",5),
    ("never",9),("I do not know",4)])
S["e03-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("clipboard",318,194,0.24),("essay",388,196,0.24),
     ("certificate",456,196,0.24),("note",524,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,5,0))
