# -*- coding: utf-8 -*-
"""Keystone Book 5 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · Quality, Extended ----------------
S["e10-f1"]=lambda: f_icons([("archive","a quality model as a tree"),("data","adapting to new data"),
    ("danger","unusual input"),("thermostat","a user stopping a system"),
    ("board","a published description"),("stamp","a stored decision corrected"),
    ("scales","two systems compared"),("scales","a scale with no numbers"),
    ("star","a target chosen by a person"),("meeting","two engineers arguing about better")],
    cols=5)
S["e10-f2"]=lambda: f_scene(920,420, people=[("tomas",330,176,{"seated":True}),
     ("hana",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,10,0))
S["e10-f3"]=lambda: f_icons([("scales","accuracy on the main case"),("danger","robustness"),
    ("data","adaptability"),("thermostat","controllability"),
    ("stamp","intervenability"),("board","transparency")], cols=3)
S["e10-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The comparison","The word used","Where A was stronger","Where B was stronger"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The characteristic nobody measured:"), 620)
S["e10-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 49",
    "Machine-learning group &middot; comparing two models &middot; page 1 of 1",
    "<p><b>The document.</b> ISO/IEC 25059, dated 2023: a quality model for AI systems, published "
    "as an extension of the product quality model this series met in an earlier book. It extends "
    "that model rather than replacing it.</p>"
    + table_html(["Characteristic","What it covers for us"],
      [["<b>functional adaptability</b>","whether the system still works as conditions change"],
       ["<b>robustness</b>","whether behavior stays acceptable under unusual input"],
       ["<b>user controllability</b>","whether a user can intervene or stop the operation"],
       ["<b>intervenability</b>","whether a person can correct a stored outcome"],
       ["<b>transparency</b>","what is published about the system"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>What it still does not "
    "contain.</b> No measures. No targets. No thresholds. That silence is deliberate: a number "
    "printed in a standard would be wrong for almost every reader. What the model provides is names. "
    "That sounds thin until you have sat through a three-week argument about which of two models is "
    "better, a word that cannot be true or false.</p>"
    + table_html(["","Model A","Model B"],
      [["accuracy, main case","<b>8.4 min mean error</b>","9.1 min, worse by 0.7 min"],
       ["robustness","returns a value, silently wrong","<b>rejects and recovers</b>"],
       ["adaptability","retrained in 6 weeks","<b>retrained in 2 weeks</b>"],
       ["controllability","no user-facing stop","<b>a stop, under a second</b>"],
       ["intervenability","<b>no route</b>","an override, logged"],
       ["transparency","one internal page","a published page, dated"]])
    + "<p><b>What else fell out of it.</b> Nobody had ever measured intervenability for either "
    "model, because we had no word for it. The answer for A is that there is no route at all.</p>",
    "Source: ISO/IEC 25059:2023, SQuaRE &mdash; Quality model for AI systems, which extends the "
    "product quality model with AI-specific characteristics. Like the model it extends, it provides "
    "a vocabulary only: no measures, no targets, no thresholds, and no guidance on which "
    "characteristics should be prioritized."), 580)
S["e10-f6"]=lambda: f_realia(tbl("Word study","Precise comparison",
    ["Structure","How precise","Example"],
    [["marginally","small, direction given","B is <b>marginally</b> less accurate."],
     ["substantially","large, direction given","A is <b>substantially</b> less robust."],
     ["by + figure","exact","less accurate <b>by 0.7 minutes</b>"],
     ["no less &hellip; than","a floor, not a ranking","B is <b>no less robust than</b> A."],
     ["at least as","&nbsp;","&nbsp;"],
     ["relative to","&nbsp;","&nbsp;"]]), 600)
S["e10-f7"]=lambda: f_matrix(["model A","model B"],
    [("accuracy, main case",["8.4 min","9.1 min"]),
     ("robustness",["silently wrong","recovers"]),
     ("adaptability",["6 weeks","2 weeks"]),
     ("controllability",["none","under 1 s"]),
     ("intervenability",["no route","logged override"]),
     ("transparency",["internal page","published, dated"])])
S["e10-f8"]=lambda: f_icons([("scales","a mean error figure"),("danger","a rejected input"),
    ("calendar","a retraining calendar"),("thermostat","an off switch"),
    ("stamp","a corrected record"),("board","a published dated page")], cols=3)
S["e10-f9"]=lambda: f_realia(doc("Comparison note &middot; delay models A and B",
    "Machine-learning group &middot; section 10.1",
    "<p><b>One honest floor.</b> On adaptability we have one retraining data point each. B is at "
    "least as adaptable as A. We are not claiming more than that, and a second data point would "
    "change the sentence.</p>"
    "<p><b>The decision, and what we are accepting.</b> We choose B and accept being less accurate "
    "by 0.7 minutes of mean error. For a planning horizon of two hours that is immaterial. If the "
    "horizon changes to twenty minutes, this decision should be revisited, and this sentence is "
    "why.</p>"
    "<p><b>Who chose the priority.</b> The standard names the characteristics and says nothing about "
    "which matter. The order &mdash; robustness, then intervenability, then accuracy &mdash; was "
    "chosen by this group in April. It is a judgment, not a finding.</p>",
    "The word better does not appear on this page."), 580)
S["e10-f10"]=lambda: f_scene(960,430, people=[("tomas",300,176,{"seated":True}),
     ("priya",385,172,{}),("hana",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",385,196,0.24),
     ("note",452,194,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,10,30))
S["e10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page A", None,
        "<p>Model B is better. Mean error 9.1 minutes.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page B", None,
        "<p>Six characteristics, one per row.<br>A figure or a behavior in every cell.<br>"
        "One honest floor, with its evidence.<br>"
        "The decision, and the 0.7 minutes accepted.</p>"), w)[0:3],
    w=920, h=300)
S["e10-f12"]=lambda: f_realia(doc("Two comparison pages", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 1</b><br>"
    "One model is better. One number.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 2</b><br>"
    "Six rows, an honest floor for the unquantified one, and a decision naming the accepted "
    "cost.</p>",
    "Better supplies no characteristic, no direction and no size, which is why two people can both "
    "use it truthfully and disagree."), 620)
S["e10-f13"]=lambda: f_realia(form("Comparison planner",
    [("Why this page exists",""),("The characteristics as rows",""),
     ("The figures or behaviors",""),("The honest floor",""),
     ("The decision, and what is accepted",""),("Who chose the priority","")]), 520)
S["e10-f14"]=lambda: f_scene(980,440,
    people=[("tomas",55,176,{}),("priya",115,176,{"seated":True}),("hana",195,172,{}),
     ("mei",280,176,{"seated":True}),("chiamaka",360,172,{"seated":True}),
     ("adeel",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("nour",665,170,{}),("oksana",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("lars",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,11,0))
S["e10-f15"]=lambda: f_chart([("robustness",4),("adaptability",3),("controllability",5),
    ("intervenability",9),("transparency",3)])
S["e10-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",316,196,0.24),("note",386,194,0.24),
     ("board",456,146,0.44),("clipboard",536,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,5,0))

# ---------------- Unit 11 · Measured on What, Exactly ----------------
S["e11-f1"]=lambda: f_icons([("spreadsheet","a confusion matrix"),("scissors","a data split"),
    ("thermostat","a threshold"),("scales","a precision figure"),
    ("magnifier","a recall figure"),("tally","results by group"),
    ("recycle","cross-validation folds"),("tally","class imbalance"),
    ("essay","a reporting page"),("board","one number on a slide")], cols=5)
S["e11-f2"]=lambda: f_scene(920,420, people=[("hana",330,176,{"seated":True}),
     ("marek",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("spreadsheet",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,8,40))
S["e11-f3"]=lambda: f_icons([("data","the dataset and its period"),("scissors","the split"),
    ("thermostat","the threshold"),("scales","the chosen metric"),
    ("tally","the breakdown by group"),("balance","the baseline")], cols=3)
S["e11-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The figure","Measured on","The period","The baseline"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one nobody can source:"), 620)
S["e11-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 50",
    "Machine-learning group &middot; reporting a classifier &middot; page 1 of 1",
    "<p><b>The document.</b> ISO/IEC TS 4213, dated 2022: a technical specification on the "
    "assessment of machine learning classification performance. A TS is published for use but is "
    "not a full International Standard. It is subject to review. It covers classification only.</p>"
    "<p><b>What it asks you to report with a figure.</b> Not a target, a set of conditions: the "
    "dataset with its period; how the data was split; the threshold at which a score became a "
    "prediction; which metric was chosen, and that it was a choice; the breakdown across groups; "
    "and the baseline.</p>"
    + table_html(["","predicted yes","predicted no"],
      [["<b>actually yes</b>","<b>26</b>","<b>37</b>"],
       ["<b>actually no</b>","43","<b>4,094</b>"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>The figure that was true and "
    "useless.</b> A slide in February carried 98.1 percent accuracy. The figure was correctly "
    "computed. The class it is meant to find occurs in about 1.5 percent of cases. A classifier "
    "that answers no to everything scores 98.5 percent on this data and finds nothing. That is the "
    "baseline, and it is higher than the figure on the slide.</p>"
    "<p><b>The honest sentence.</b> Recall 41 percent, precision 38 percent, at a threshold of "
    "0.5, on a held-out set of 4,200 cases from the last two quarters, against a majority-class "
    "baseline of 98.5 percent accuracy. That sentence stopped a rollout.</p>"
    "<p><b>What the document does not decide.</b> It does not tell us which metric to use. That "
    "depends on what being wrong costs in each direction, which is ours. It sets no acceptable "
    "level. It cannot supply a breakdown we have no labels for.</p>",
    "Source: ISO/IEC TS 4213:2022, Information technology &mdash; Artificial intelligence &mdash; "
    "Assessment of machine learning classification performance. It is a technical specification, "
    "not a full International Standard, and is subject to review; it addresses classification "
    "assessment and reporting, and does not prescribe which metric to use, any acceptable level, or "
    "methods for tasks other than classification."), 580)
S["e11-f6"]=lambda: f_realia(tbl("Word study","Reporting measurement",
    ["Structure","What it adds","Example"],
    [["measured on","the data and its period","<b>Measured on</b> 4,200 held-out cases."],
     ["at a threshold of","where a score became a decision","Recall 41 percent <b>at a threshold of</b> 0.5."],
     ["disaggregated by","the breakdown","<b>Disaggregated by</b> sub-region."],
     ["against a baseline of","the comparison","<b>Against a baseline of</b> 98.5 percent."],
     ["averaged over","&nbsp;","&nbsp;"],
     ["as of","&nbsp;","&nbsp;"]]), 600)
S["e11-f7"]=lambda: f_chart([("reported accuracy",98.1),("majority-class baseline",98.5),
    ("recall",41.0)], unit="percent")
S["e11-f8"]=lambda: f_icons([("spreadsheet","a confusion matrix"),("scissors","a data split"),
    ("thermostat","a threshold"),("scales","a metric name"),
    ("tally","a breakdown"),("balance","a baseline")], cols=3)
S["e11-f9"]=lambda: f_realia(tbl("Results sheet &middot; escalation classifier v3",
    "Machine-learning group &middot; as of 14 April",
    ["Metric","Figure","Threshold","Measured on","Baseline"],
    [["<b>recall</b>","41 percent","0.5","4,200 held-out cases, two quarters",
      "<b>98.5 percent accuracy</b>"],
     ["precision","38 percent","0.5","same","&mdash;"],
     ["accuracy","98.1 percent","0.5","same","<b>98.5 percent</b>"],
     ["recall, smallest sub-region","35 percent","0.5","same","&mdash;"]],
    note="The baseline is 98.5 percent: what answering no to everything achieves. Computing it "
    "took four minutes and it stopped a rollout."), 700)
S["e11-f10"]=lambda: f_scene(960,430, people=[("marek",300,176,{"seated":True}),
     ("hana",385,172,{}),("ines",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("board",380,146,0.46),
     ("spreadsheet",460,196,0.24),("note",528,194,0.24),("window",830,56,0.9)],
    clockat=(120,44,22,9,0))
S["e11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page A", None,
        "<p>Accuracy 98.1 percent.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page B", None,
        "<p>Recall, chosen because missing an escalation costs more.<br>"
        "41 percent at a threshold of 0.5.<br>4,200 held-out cases, two quarters.<br>"
        "Baseline 98.5 percent accuracy.<br>Smallest sub-region 6 points worse. As of 14 April."
        "</p>"), w)[0:3],
    w=920, h=300)
S["e11-f12"]=lambda: f_realia(doc("Two result pages", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 1</b><br>"
    "One accuracy figure.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 2</b><br>"
    "The metric with its reason, the figure with its threshold and data, the baseline, a breakdown, "
    "and a date.</p>",
    "An undated figure never becomes wrong. It stops being true, and nothing on the slide changes."),
    620)
S["e11-f13"]=lambda: f_realia(form("Results planner",
    [("The correction, if any",""),("The metric, and why",""),
     ("The figures, with conditions",""),("The baseline",""),
     ("The breakdown, and what is missing",""),("What you do about what you miss","")]), 520)
S["e11-f14"]=lambda: f_scene(980,440,
    people=[("marek",55,176,{}),("hana",115,176,{"seated":True}),("ines",195,172,{}),
     ("mei",280,176,{"seated":True}),("chiamaka",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("adeel",520,170,{}),("grace",595,172,{}),
     ("tomas",665,170,{}),("oksana",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("spreadsheet",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,10,0))
S["e11-f15"]=lambda: f_chart([("the baseline",10),("the threshold",4),
    ("the dataset and period",5),("the breakdown",3),("a date",2)])
S["e11-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("board",316,146,0.44),("spreadsheet",396,196,0.24),
     ("essay",464,196,0.24),("note",532,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,5,0))

# ---------------- Unit 12 · Twelve Risks and a Page ----------------
S["e12-f1"]=lambda: f_icons([("speechbubble","a confident wrong answer"),("padlock","a privacy leak"),
    ("powercut","an environmental cost"),("stars","identical outputs"),
    ("handsup","over-trusting a machine answer"),("worldmap","a corrupted information environment"),
    ("scam","a security weakness"),("certificate","an intellectual property question"),
    ("chain","a supply chain of components"),("essay","a one-page handover")], cols=5)
S["e12-f2"]=lambda: f_scene(920,420, people=[("hana",330,176,{"seated":True}),
     ("chiamaka",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,0))
S["e12-f3"]=lambda: f_icons([("speechbubble","a fluent wrong answer, quoted"),
    ("worldmap","contradictory public claims"),("powercut","a power meter"),
    ("stars","near-identical outputs"),("thread","an unknown training source"),
    ("signature","a named owner")], cols=3)
S["e12-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The feature","The risk","In a register","Who would be asked"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one with no owner:"), 620)
S["e12-f5"]=lambda: f_realia(doc("Meridian &middot; governance note 21",
    "Machine-learning group &middot; the generative profile &middot; page 1 of 1",
    "<p><b>The document.</b> NIST AI 600-1, a generative artificial intelligence profile, released "
    "in July 2024 as a companion to the voluntary framework this book opened with. According to its "
    "own framing it is voluntary, offers suggested actions rather than requirements, and does not "
    "claim to be exhaustive.</p>"
    + table_html(["Risk","In our register before?"],
      [["<b>confabulation</b>","<b>no &mdash; we called it accuracy</b>"],
       ["dangerous or hateful content","yes"],
       ["data privacy","yes"],
       ["<b>environmental impact</b>","<b>no</b>"],
       ["harmful bias and homogenization","partly"],
       ["human-AI configuration","partly"],
       ["<b>information integrity</b>","<b>no</b>"],
       ["information security","yes"],
       ["intellectual property","yes, as a legal question"],
       ["<b>value chain and component integration</b>","<b>no</b>"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>What a profile is.</b> A "
    "profile applies a framework to a particular kind of system. It requires nothing. Its actions "
    "are suggested. It states that it is not exhaustive. Its value is the rows we would not have "
    "drawn: four of the twelve were absent from a register we had thought complete.</p>"
    "<p><b>Confabulation.</b> We had this as accuracy, in the quality section. It is an operational "
    "problem of a different kind. A wrong answer that sounds uncertain gets checked. A wrong answer "
    "that sounds certain gets quoted. It is now its own entry.</p>"
    "<p><b>The other three.</b> What our outputs do to the information environment our customers "
    "read. What our inference workload costs in energy, which we cannot state. And what three of our "
    "dependencies were trained on, which we cannot establish.</p>",
    "Source: NIST AI 600-1, Artificial Intelligence Risk Management Framework: Generative "
    "Artificial Intelligence Profile, released July 2024 as a companion to the AI RMF. It is "
    "voluntary, offers suggested actions rather than requirements, states that its list of risks is "
    "not exhaustive, and does not prioritize risks for any organization."), 580)
S["e12-f6"]=lambda: f_realia(tbl("Word study","Eleven structures, in unit order",
    ["Unit","Structure","Example"],
    [["1","hedged attribution","<b>According to</b> its own framing, it is voluntary."],
     ["2","commencement","The prohibitions <b>apply from</b> February 2025."],
     ["3","passive, agent restored","<b>Hana Sato</b> maintains the register, monthly."],
     ["4","guidance verbs","A model <b>should</b> be evaluated on deployment-period data."],
     ["5","intended use","It <b>was not evaluated on</b> anything about individuals."],
     ["6","indirect questions","We cannot establish <b>how the sample was drawn</b>."],
     ["7","definitions","Bias means a measured difference, <b>and not</b> unfairness."],
     ["8","cautious claims","Adversarial testing <b>may reduce</b> susceptibility."],
     ["9","rights and safeguards","&nbsp;"],
     ["10","precise comparison","&nbsp;"],
     ["11","reporting measurement","&nbsp;"]]), 640)
S["e12-f7"]=lambda: f_chart([("already in the register",5),("there under another name",2),
    ("added after reading the profile",4),("not applicable",1)], unit="of twelve risks")
S["e12-f8"]=lambda: f_icons([("book","a document with its date and status"),
    ("scales","a figure with four conditions"),("noentry","an out-of-scope section"),
    ("teacher","a route to a named human"),("handsup","an unknown, as a question"),
    ("signature","a handover with a named owner")], cols=3)
S["e12-f9"]=lambda: f_realia(doc("Handover page &middot; escalation classifier v3",
    "One page &middot; as of 28 April &middot; accountable: Chiamaka Obi",
    "<p><b>Who this page is for.</b> Somebody who did not build this system and will be asked about "
    "it by a customer, an auditor or a regulator, without the people who built it in the room.</p>"
    "<p><b>What it is for.</b> Planning support in the eastern region, one freight type, two named "
    "planning teams.</p>"
    "<p><b>What it is not for.</b> It was not evaluated on passenger services, on any other region, "
    "or on any question about an individual person. Performance there is unknown. It should not be "
    "used to support decisions about individual staff.</p>"
    "<p><b>How good it is.</b> Recall 41 percent at a threshold of 0.5, on 4,200 held-out cases "
    "from two quarters, against a baseline of 98.5 percent accuracy, as of 14 April.</p>"
    "<p><b>What we cannot establish.</b> What three of our dependencies were trained on. What the "
    "inference workload costs in energy. Whether the people in the training table were informed.</p>",
    "A page with no name at the foot is a description, not a handover."), 580)
S["e12-f10"]=lambda: f_scene(960,430, people=[("hana",300,176,{"seated":True}),
     ("chiamaka",385,172,{}),("nour",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",385,196,0.24),
     ("note",452,194,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,9,30))
S["e12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page A", None,
        "<p>Three sections. No name at the foot.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page B", None,
        "<p>What it is. What it is for. What it is not for.<br>"
        "How good it is, with conditions and a date.<br>"
        "What we cannot establish.<br>Accountable: a named person.</p>"), w)[0:3],
    w=920, h=300)
S["e12-f12"]=lambda: f_realia(doc("Two handover pages", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 1</b><br>"
    "Three sections, no name.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 2</b><br>"
    "Six sections including what we cannot establish, and a named person with a date at the "
    "foot.</p>",
    "Write the handover page for the system you would least like to inherit, and put the name of "
    "the person who will be asked at the foot."), 620)
S["e12-f13"]=lambda: f_realia(form("Handover planner",
    [("Who this page is for",""),("What it is",""),("What it is for, and not for",""),
     ("How good it is, with conditions",""),("What we cannot establish",""),
     ("Who is accountable","")]), 520)
S["e12-f14"]=lambda: f_scene(980,440,
    people=[("hana",55,176,{}),("chiamaka",115,176,{"seated":True}),("nour",195,172,{}),
     ("mei",280,176,{"seated":True}),("yusuf",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("tomas",665,170,{}),("oksana",735,172,{}),("adeel",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("marek",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,5,0))
S["e12-f15"]=lambda: f_chart([("confabulation",7),("information integrity",5),
    ("environmental impact",4),("the value chain",6),("we have no register",3)])
S["e12-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",316,196,0.24),("board",386,146,0.44),
     ("note",464,194,0.24),("clipboard",532,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
