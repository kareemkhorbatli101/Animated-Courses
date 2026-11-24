# -*- coding: utf-8 -*-
"""Keystone Book 5 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · Guidance Is Not Requirements ----------------
S["e04-f1"]=lambda: f_icons([("essay","a requirements document"),("book","a guidance document"),
    ("clipboard","an auditor turning away"),("recycle","a risk process"),
    ("star","a list of objectives"),("archive","a list of risk sources"),
    ("timetable","a life cycle with stages"),("thread","a mapping between documents"),
    ("quotemark","a principle"),("noentry","no certificate available")], cols=5)
S["e04-f2"]=lambda: f_scene(920,420, people=[("hana",330,176,{"seated":True}),
     ("tomas",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,11,40))
S["e04-f3"]=lambda: f_icons([("barrier","establishing the context"),
    ("magnifier","risk identification"),("calculator","risk analysis"),
    ("balance","risk evaluation"),("bandage","risk treatment"),
    ("timer","monitoring and review")], cols=3)
S["e04-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The document","Shall or should","Auditable","Who decided to treat it as binding"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one nobody chose:"), 620)
S["e04-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 15",
    "Machine-learning group &middot; guidance against requirements &middot; page 1 of 1",
    "<p><b>The document.</b> ISO/IEC 23894, guidance on risk management for artificial "
    "intelligence, dated 2023. It follows the structure of the general risk management standard: "
    "principles, framework, process. It applies that structure to AI.</p>"
    + table_html(["","A requirements document","This document"],
      [["the verb","<b>shall</b>","<b>should</b>, <b>can</b>, <b>may</b>"],
       ["what an auditor does","tests each requirement","<b>nothing</b>"],
       ["certification","available","<b>not available</b>"],
       ["what you can claim","conformity, within a scope","<b>that you used it</b>"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>Why that is not a weakness.</b> "
    "A requirements document can tell you that a risk assessment shall be performed. It cannot tell "
    "you what an AI risk source looks like, because requirements have to be testable and knowing "
    "what to worry about is not. The annexes here are the valuable part: objectives an organization "
    "may hold, and risk sources specific to AI systems.</p>"
    "<p><b>The process, in six stages.</b> Establishing the context; identification; analysis; "
    "evaluation; treatment; and monitoring and review throughout. Evaluation is the stage we were "
    "missing. We identified risks and treated the loudest ones, with no written criteria for which "
    "mattered.</p>"
    "<p><b>What it cannot do.</b> It cannot be certified against. It requires nothing. It does not "
    "say how much risk is acceptable, and it is explicit that this is the organization's own "
    "decision. A reasonable organization can depart from any part of it with a reason.</p>",
    "Source: ISO/IEC 23894:2023, Information technology &mdash; Artificial intelligence &mdash; "
    "Guidance on risk management. It provides guidance, not requirements: it uses should, can and "
    "may rather than shall, no certification exists against it, and it does not determine what "
    "level of risk is acceptable."), 580)
S["e04-f6"]=lambda: f_realia(tbl("Word study","Guidance verbs and their strength",
    ["Verb","Strength","An auditor","Example"],
    [["shall","a requirement","tests it","A risk assessment <b>shall</b> be performed."],
     ["should","a recommendation","notes it","Criteria <b>should</b> be documented."],
     ["may","permission","ignores it","The process <b>may</b> run quarterly."],
     ["can","possibility","ignores it","Opacity <b>can</b> be a risk source."],
     ["is recommended","&nbsp;","&nbsp;","&nbsp;"],
     ["is advisable","&nbsp;","&nbsp;","&nbsp;"]]), 640)
S["e04-f7"]=lambda: f_matrix(["a requirements document","this guidance"],
    [("shall",["41","0"]),("should",["2","96"]),("may",["1","18"]),("can",["0","37"])])
S["e04-f8"]=lambda: f_icons([("barrier","the context"),("magnifier","a risk identified"),
    ("calculator","a risk analyzed"),("essay","criteria written down"),
    ("bandage","a treatment chosen"),("calendar","a review in the diary")], cols=3)
S["e04-f9"]=lambda: f_realia(tbl("Method page &middot; the verbs",
    "Machine-learning group &middot; section 4.1",
    ["The sentence","Verb","Checked by","How often"],
    [["The register shall be reviewed, entry by entry.","<b>shall</b>","Hana Sato","monthly"],
     ["No system shall enter production without a register entry.","<b>shall</b>",
      "the platform team","every release"],
     ["A model should be evaluated on deployment-period data.","<b>should</b>",
      "&mdash; <i>tell me if you cannot</i>","&mdash;"],
     ["Criteria should be applied before a treatment is chosen.","<b>should</b>","&mdash;","&mdash;"],
     ["A team may run the process quarterly.","<b>may</b>","&mdash;","&mdash;"]],
    note="Four unchecked requirements in the previous revision; three are now recommendations with "
    "a route for reporting a departure, and one has an owner."), 700)
S["e04-f10"]=lambda: f_scene(960,430, people=[("hana",300,176,{"seated":True}),
     ("nour",390,172,{}),("tomas",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",385,196,0.24),
     ("note",455,194,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,12,0))
S["e04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page A", None,
        "<p>Eight rules. All of them say shall.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page B", None,
        "<p>Two requirements, each with a named checker and a frequency.<br>"
        "Five recommendations, each with a route for reporting a departure.<br>"
        "One permission.</p>"), w)[0:3],
    w=920, h=300)
S["e04-f12"]=lambda: f_realia(doc("Two method pages", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 1</b><br>"
    "Eight rules, all saying shall.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 2</b><br>"
    "Two requirements with checkers, five recommendations with a departure route, and one "
    "permission.</p>",
    "A new engineer who finds that three of four identical rules are decorative reads the fourth "
    "the same way."), 600)
S["e04-f13"]=lambda: f_realia(form("Method planner",
    [("What it is based on",""),("The requirements, with checkers",""),
     ("The recommendations, with a departure route",""),("The permissions",""),
     ("What changed and why",""),("The hardest page","")]), 520)
S["e04-f14"]=lambda: f_scene(980,440,
    people=[("hana",55,176,{}),("tomas",115,176,{"seated":True}),("nour",195,172,{}),
     ("mei",280,176,{"seated":True}),("chiamaka",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("adeel",665,170,{}),("oksana",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("lars",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,1,0))
S["e04-f15"]=lambda: f_chart([("a documentation rule",7),("a testing rule",5),
    ("a review rule",6),("an approval rule",3),("nothing is written down",4)])
S["e04-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",318,196,0.24),("note",388,194,0.24),
     ("book",456,196,0.22),("clipboard",524,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 5 · What the Model Is Not For ----------------
S["e05-f1"]=lambda: f_icons([("form","a one-page form"),("star","intended use"),
    ("noentry","out-of-scope use"),("family","groups and conditions"),
    ("scales","a metric with a threshold"),("folder","evaluation data"),
    ("data","training data"),("tally","results by group"),
    ("quotemark","caveats"),("handsup","one blank section")], cols=5)
S["e05-f2"]=lambda: f_scene(920,420, people=[("hana",330,176,{"seated":True}),
     ("junseo",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("form",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,2,20))
S["e05-f3"]=lambda: f_icons([("refnumber","model details"),("star","intended use"),
    ("family","factors"),("scales","metrics"),("folder","evaluation data"),
    ("quotemark","caveats")], cols=3)
S["e05-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The model","What it was evaluated for","What it is used for now","Who decided"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The use nobody authorized:"), 620)
S["e05-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 16",
    "Machine-learning group &middot; model documentation &middot; page 1 of 1",
    "<p><b>The source.</b> A paper proposing model cards for model reporting, presented at a "
    "fairness and transparency conference in 2019. It is a proposal in a research paper. There is "
    "no standard, no required format and no verification mechanism.</p>"
    + table_html(["Section","What goes in it"],
      [["model details","who built it, when, the version"],
       ["<b>intended use</b>","the primary intended uses and users"],
       ["<b>out-of-scope use</b>","the applications it should not be used for"],
       ["factors","the groups and conditions performance may vary across"],
       ["metrics","the measures, the decision thresholds, how variation was handled"],
       ["evaluation data","what the reported numbers were produced on"],
       ["training data","what it learned from, as far as that can be stated"],
       ["quantitative analyses","results reported separately by group"],
       ["caveats","what a reader should know before relying on it"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>The section that stays "
    "empty.</b> Eight sections describe what you built. Out-of-scope use restricts what other "
    "people may do with it. That is not a writing task. It is a conversation with whoever is "
    "already doing it.</p>"
    "<p><b>What it cost us.</b> Our delay model was trained and evaluated on one region, one "
    "freight type, two years of data. Its page did not say so. A second team used its output in "
    "staffing decisions for four months. Nobody did anything wrong. The page described what the "
    "model does, so a reader concluded that it does that generally.</p>"
    "<p><b>What the form cannot do.</b> It cannot verify anything. Nobody checks a model card. "
    "Reporting results by group needs group labels, which we do not hold for two of our four "
    "models.</p>",
    "Source: Margaret Mitchell and colleagues, Model Cards for Model Reporting, ACM Conference on "
    "Fairness, Accountability, and Transparency, 2019. It proposes a short documentation page with "
    "nine sections. It is a research proposal: no standard, no required format, no verification "
    "mechanism, and the disaggregated reporting it recommends depends on group labels that may be "
    "unavailable or unlawful to collect."), 580)
S["e05-f6"]=lambda: f_realia(tbl("Word study","Intended use and scope",
    ["Structure","What it does","Example"],
    [["is intended for","states the use it was built for","It <b>is intended for</b> freight delay prediction."],
     ["is not intended to","gives up a use on purpose","It <b>is not intended to</b> support staffing."],
     ["was not evaluated on","names a factual gap","It <b>was not evaluated on</b> passenger services."],
     ["should not be used to","a restriction with a reason","It <b>should not be used to</b> rank drivers."],
     ["falls outside the scope of","&nbsp;","&nbsp;"],
     ["is designed to","&nbsp;","&nbsp;"]]), 600)
S["e05-f7"]=lambda: f_chart([("model details",4),("intended use",4),("out-of-scope use",1),
    ("factors",3),("metrics",4),("caveats",2)], unit="of four pages")
S["e05-f8"]=lambda: f_icons([("refnumber","a version and a date"),("star","one intended use"),
    ("noentry","two uses crossed out"),("family","three group labels"),
    ("scales","a metric with a threshold"),("quotemark","two caveats")], cols=3)
S["e05-f9"]=lambda: f_realia(doc("Model documentation &middot; freight delay predictor v4.2",
    "Machine-learning group &middot; page 1 of 2 &middot; 15 April",
    "<p><b>Intended use.</b> Predicting arrival delay for one freight type on the eastern region "
    "network, for planning, used by two named planning teams.</p>"
    "<p><b>Out-of-scope use.</b> It was not evaluated on passenger services, on data from outside "
    "that region, or on any question about an individual person. Performance under those conditions "
    "is unknown. It is not assumed to be similar. It should not be used to support decisions about "
    "individual members of staff.</p>"
    "<p><b>Who may authorize an exception.</b> Chiamaka Obi, in writing, stating that performance "
    "on that question has not been measured.</p>"
    + table_html(["Metric","Figure","Conditions"],
      [["mean absolute error","8.4 min","eastern region, one freight type, two years"],
       ["alert threshold","22 min","planning alert"],
       ["smallest sub-region","+3.1 min","same period"]])), 580)
S["e05-f10"]=lambda: f_scene(960,430, people=[("hana",300,176,{"seated":True}),
     ("chiamaka",390,172,{}),("junseo",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("timetable",385,196,0.22),
     ("form",452,196,0.24),("note",520,194,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,2,30))
S["e05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page A", None,
        "<p>The model predicts arrival delay. Accuracy 8.4 minutes.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page B", None,
        "<p>Intended use, with its region and freight type.<br>"
        "Not evaluated on: three things.<br>Performance there: unknown.<br>"
        "Should not be used to decide about individuals.<br>"
        "Exception: Chiamaka Obi, in writing.</p>"), w)[0:3],
    w=920, h=300)
S["e05-f12"]=lambda: f_realia(doc("Two pages", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 1</b><br>"
    "What the model predicts, and one accuracy figure.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 2</b><br>"
    "The intended use with conditions, three out-of-scope sentences, the figure with its region and "
    "period, and an exception route.</p>",
    "A page that says only what a model does is read as a permission to use it anywhere."), 600)
S["e05-f13"]=lambda: f_realia(form("Page planner",
    [("Model details",""),("Intended use, with conditions",""),
     ("The three out-of-scope sentences",""),("Metrics, with conditions",""),
     ("What cannot be disaggregated",""),("When this page expires","")]), 520)
S["e05-f14"]=lambda: f_scene(980,440,
    people=[("hana",55,176,{}),("chiamaka",115,176,{"seated":True}),("junseo",195,172,{}),
     ("mei",280,176,{"seated":True}),("adeel",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("tomas",665,170,{}),("oksana",735,172,{}),("yusuf",805,170,{}),
     ("nour",865,172,{}),("samira",920,170,{}),("lars",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("timetable",330,198,0.22),
     ("printer",430,196,0.3),("form",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,3,0))
S["e05-f15"]=lambda: f_chart([("yes, in writing",3),("one model only",5),("no",9),
    ("we have no models",4),("I do not know",4)])
S["e05-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("form",318,196,0.24),("timetable",386,196,0.22),
     ("note",452,194,0.24),("essay",520,196,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 6 · Fifty Questions About the Data ----------------
S["e06-f1"]=lambda: f_icons([("data","a dataset with a document"),("archive","seven question groups"),
    ("quotemark","one instance"),("tally","a sampling process"),
    ("signature","a consent form"),("family","two annotators"),
    ("washup","a cleaning step"),("transfer","a dataset distributed"),
    ("calendar","a maintenance schedule"),("handsup","an answer marked unknown")], cols=5)
S["e06-f2"]=lambda: f_scene(920,420, people=[("yusuf",330,176,{"seated":True}),
     ("hana",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("notebook",462,196,0.22),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,11,10))
S["e06-f3"]=lambda: f_icons([("coins","motivation and funding"),("spreadsheet","composition"),
    ("tally","collection"),("washup","preprocessing"),
    ("application","uses"),("calendar","maintenance")], cols=3)
S["e06-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The dataset","Who created it","Still here","The first unknown"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The answer that left with somebody:"), 620)
S["e06-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 17",
    "Data group &middot; dataset documentation &middot; page 1 of 1",
    "<p><b>The source.</b> A paper proposing datasheets for datasets, first circulated in 2018 and "
    "later published in a journal in 2021. It proposes a document that travels with a dataset, "
    "organized as groups of questions rather than as a form. It is a research proposal. Nobody "
    "verifies an answer.</p>"
    + table_html(["Group","One of its questions"],
      [["<b>motivation</b>","why the dataset was created, and who funded it"],
       ["<b>composition</b>","what the instances represent, and whether any are missing"],
       ["<b>collection process</b>","how the data was acquired, by whom, over what period"],
       ["<b>preprocessing</b>","what was done to the raw data, and whether it was kept"],
       ["<b>uses</b>","what it has been used for, and what it should not be used for"],
       ["<b>distribution</b>","who it has been given to, and on what terms"],
       ["<b>maintenance</b>","who supports it, and whether it will be updated"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>The nine answers that do not "
    "exist.</b> We completed this for one dataset: the historical freight movements table, in daily "
    "use since 2019. It took three weeks and four interviews. Nine questions could not be answered "
    "at all. We do not know how the original sample was drawn. We do not know whether the people in "
    "it were informed. The engineer who built the first version left in 2021.</p>"
    "<p><b>Why that is the result.</b> Each of the nine now reads unknown, with one sentence saying "
    "why. A reconstructed answer would have been plausible, unverifiable, and indistinguishable "
    "from a fact within six months.</p>"
    "<p><b>What it changed.</b> Two of the nine are now visible to the four teams that train on "
    "this table. One of them has stopped a proposed new use.</p>",
    "Source: Timnit Gebru and colleagues, Datasheets for Datasets, first circulated 2018 and "
    "published in Communications of the ACM in 2021. It proposes that a dataset be accompanied by a "
    "document answering questions on motivation, composition, collection, preprocessing, uses, "
    "distribution and maintenance. It is a research proposal, not a standard: no required format, "
    "no verification, and some questions may be unanswerable for existing datasets."), 580)
S["e06-f6"]=lambda: f_realia(tbl("Word study","Indirect questions",
    ["Direct","Indirect"],
    [["How was the data acquired?","We do not know <b>how the data was acquired</b>."],
     ["Did they give consent?","We cannot say <b>whether they gave consent</b>."],
     ["Who labeled the hard cases?","No record says <b>who labeled the hard cases</b>."],
     ["Will it be updated?","The note states <b>whether it will be updated</b>."],
     ["Was the raw data kept?","&nbsp;"],
     ["What does one row represent?","&nbsp;"]],
    note="Inside an indirect question: subject before verb, no auxiliary, and whether rather than "
    "if in anything formal."), 620)
S["e06-f7"]=lambda: f_part("Fifty questions, four kinds of answer",
    [("from a written document",6,"#2f6b4f"),("from an interview",31,"#1d6f8c"),
     ("approximately",4,"#b05a1e"),("unknown",9,"#7a4a86")])
S["e06-f8"]=lambda: f_icons([("coins","a funder"),("spreadsheet","a table of rows"),
    ("tally","a sampling diagram"),("signature","a consent question"),
    ("family","two annotators"),("calendar","an empty schedule")], cols=3)
S["e06-f9"]=lambda: f_realia(tbl("Dataset document &middot; extract",
    "Data group &middot; historical freight movements table",
    ["The question","The answer","Source","Date"],
    [["Why was it created?","to forecast depot load","interview","Mar"],
     ["What does one row represent?","one movement, one leg","document","Mar"],
     ["How was the sample drawn?","<b>unknown</b>","&mdash;","&mdash;"],
     ["Were the people informed?","<b>unknown</b>","&mdash;","&mdash;"],
     ["Who labeled ambiguous cases?","<b>unknown</b>","&mdash;","&mdash;"],
     ["Who maintains it now?","the data group","document","Apr"]],
    note="Nine unknowns in all; two were answered within a week of circulation, by people who "
    "recognized their own work."), 700)
S["e06-f10"]=lambda: f_scene(960,430, people=[("yusuf",300,176,{"seated":True}),
     ("hana",390,172,{}),("chiamaka",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",385,196,0.24),
     ("notebook",452,196,0.22),("note",520,194,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,11,30))
S["e06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Document A", None,
        "<p>The dataset is documented and well understood.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Document B", None,
        "<p>41 of 50 questions answered.<br>Nine unknown, each with a reason.<br>"
        "What would answer each one.<br>31 answers from people, 6 from documents.<br>"
        "Four people carry the provenance; one retires next year.</p>"), w)[0:3],
    w=920, h=300)
S["e06-f12"]=lambda: f_realia(doc("Two documents", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Document 1</b><br>"
    "The dataset is well understood.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Document 2</b><br>"
    "Nine unknowns with reasons, what would answer each, and where the answers came from.</p>",
    "Nobody has ever acted on a nominalized deficiency. A question, phrased as a question, comes "
    "back answered."), 600)
S["e06-f13"]=lambda: f_realia(form("Document planner",
    [("What this is",""),("What it cost",""),("Where the answers came from",""),
     ("The unknowns, as questions",""),("What would answer each",""),
     ("The finding not in the question list","")]), 520)
S["e06-f14"]=lambda: f_scene(980,440,
    people=[("yusuf",55,176,{}),("hana",115,176,{"seated":True}),("chiamaka",195,172,{}),
     ("priya",280,176,{"seated":True}),("mei",360,172,{"seated":True}),
     ("adeel",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("tomas",665,170,{}),("oksana",735,172,{}),("nour",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("marek",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,198,0.24),
     ("printer",430,196,0.3),("notebook",500,198,0.22),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,0))
S["e06-f15"]=lambda: f_chart([("a written document",3),("an interview, still here",9),
    ("an interview, they have left",5),("a guess",4),("nowhere at all",4)])
S["e06-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",318,196,0.24),("notebook",386,196,0.22),
     ("note",452,194,0.24),("stamp",520,198,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
