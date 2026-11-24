# -*- coding: utf-8 -*-
"""Throughline Book 6 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 ----------------
S["pf04-f1"]=lambda: f_icons([("book","a book from 1997"),("barrier","layers with holes"),
    ("noentry","the holes in line"),("firealarm","an error at a panel"),
    ("note","a designer years earlier"),("timer","a dormant condition"),
    ("boiler","two identical sensors"),("padlock","an interlock operating"),
    ("form","a maintenance decision"),("clipboard","four holes, four names")], cols=5)
S["pf04-f2"]=lambda: f_scene(760,380,
    people=[("wei",200,172,{}),("nkemelu",290,170,{})],
    props=[("desk",400,0,1.0),("barrier",470,148,0.24),("clipboard",580,150,0.24),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"SEVEN LAYERS",
      [("holed","4"),("intact","1")]),
    clockat=(360,34,22,11,20))
S["pf04-f3"]=lambda: f_icons([("firealarm","a slip at a panel"),("flashback","a lapse"),
    ("note","a mistake in a plan"),("form","a routine violation"),
    ("timer","a latent condition"),("boiler","two identical devices")], cols=3)
S["pf04-f4"]=lambda: f_realia(tbl("Team research","Four defenses",
    ["The defense","What it stops","Its state today",
     "The reasonable decision that opened the hole"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the defense nobody has tested this year.</b>"), 660)
S["pf04-f5"]=lambda: f_realia(doc("Lindhurst · quality note 4",
    "The Calder near-miss by defense",
    "<p><b>The book.</b> <b>J. Reason</b>, <i>Managing the Risks of Organizational Accidents</i>, "
    "<b>1997</b>, developing the account of error in <b>1990</b>.</p>"
    + table_html(["",""],
      [["<b>an active failure</b>","an unsafe act by somebody <b>in direct contact</b>: a "
        "<b>slip</b> or <b>lapse</b>, a <b>mistake</b>, or a <b>violation</b>"],
       ["<b>a latent condition</b>","something created <b>earlier</b>, which <b>lies dormant</b> "
        "and contributes only in combination"]])
    + "<p><b>Defenses are drawn as layers with holes.</b> An accident requires the holes <b>to line "
    "up at one moment.</b></p>"
    + table_html(["#","Defense","State","Why"],
      [["1","sensor redundancy","<b>degraded</b>","<b>two sensors of the same model</b>: one failure "
        "mode bought twice"],
       ["2","telemetry alarm","<b>holed</b>","<b>suppressed in February</b>, review date in an "
        "absence week"],
       ["3","weekly plant log review","<b>holed</b>","<b>no escalation threshold</b>; no stopping "
        "authority"],
       ["4","commissioning sign-off","<b>holed</b>","<b>a waiver of 2022, never closed</b>"],
       ["5","drawing register","<b>holed</b>","<b>two modifications behind</b>, for years"],
       ["6","operator training","<b>degraded</b>","<b>handover pack omitted the bypass</b>"],
       ["7","<b>standby interlock</b>","<b>intact — and it is why nothing happened</b>",
        "installed 2019, tested annually, <b>never modified</b>"]])
    + "<p><b>The only defense that worked is the only one nobody has discussed since 2021.</b> It "
    "appears in no meeting minute, improvement plan or risk report.</p>"
    "<p><b>The one active failure.</b> <b>A pump started against a closed valve at 05:20</b> — a "
    "<b>lapse</b>, and the only unsafe act in the sequence.</p>"
    "<p style='border:1.5px solid #3b3b5c;padding:8px'><b>Three of the four holes were opened by "
    "reasonable decisions</b>, each with a record. <b>The fourth — no escalation threshold — "
    "was never proposed, refused or reviewed.</b> <b>An absence has no author and therefore no "
    "advocate</b>, which is why four earlier reviews of this plant did not mention it. <b>They were "
    "not poor reviews. There was nobody to interview.</b></p>"
    "<p><b>And the seven layers are my choice.</b> Five or eleven would have been as defensible; "
    "redraw the lines and the number of holes changes. <b>The model is a device for thinking. The "
    "deliverable is the table, with an owner against each hole.</b></p>",
    "Source: J. Reason, Managing the Risks of Organizational Accidents, 1997, developing Human Error, "
    "1990. It distinguishes active failures by those in direct contact with a system from latent "
    "conditions created earlier in design, construction, maintenance or management, and represents "
    "defenses as successive layers whose holes must align for an accident to occur. The "
    "representation is an organizing metaphor rather than a quantitative model: it specifies no "
    "number of layers, no method of counting holes, no probabilities and no order of priority among "
    "remedies."), 660)
S["pf04-f6"]=lambda: f_realia(tbl("Word study","Layered causation",
    ["Structure","What it does","Example"],
    [["<i>the immediate cause</i>","names what happened last",
      "<b>The immediate cause</b> was a pump started against a closed valve."],
     ["<i>a contributing condition</i>","names something already there",
      "<b>A contributing condition</b> was an alarm suppressed in February."],
     ["<i>lay dormant until</i>","shows the waiting","The waiver <b>lay dormant until</b> June."],
     ["<i>combined with</i>","shows the conjunction",
      "The suppression, <b>combined with</b> the open waiver…"],
     ["<i>was itself a consequence of</i>","",""],["<i>which in turn</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pf04-f7"]=lambda: f_part("Seven defenses on 14 June",
    [("holed",4,"#7a3b2f"),("degraded",2,"#b07a1e"),("intact",1,"#4a6b3b")])
S["pf04-f8"]=lambda: f_icons([("firealarm","a suppressed alarm"),("form","an open waiver"),
    ("note","an outdated drawing"),("logsheet","a log with no threshold"),
    ("boiler","two identical sensors"),("padlock","an interlock operating")],
    cols=3, numbered=False)
S["pf04-f9"]=lambda: f_realia(tbl("Defense table · 14 June",
    "Seven defenses · four holed, two degraded, one intact",
    ["#","Defense","State","Explanation","Remedy owner"],
    [["1","sensor redundancy","<b>degraded</b>","same model, same batch","M. Bah"],
     ["2","telemetry alarm","<b>holed</b>","suppressed Feb, review date missed","control engineer"],
     ["3","weekly plant log","<b>holed</b>","<b>no threshold ever proposed</b>","<b>W. Zhao</b>"],
     ["4","commissioning sign-off","<b>holed</b>","waiver of 2022 unclosed","project manager"],
     ["5","drawing register","<b>holed</b>","two modifications behind","technician"],
     ["6","operator training","<b>degraded</b>","handover pack omitted the bypass","operations"],
     ["7","<b>standby interlock</b>","<b>intact</b>","installed 2019, never modified","—"]],
    note="<b>The intact one has not been discussed since 2021.</b>"), 700)
S["pf04-f10"]=lambda: f_scene(860,400,
    people=[("wei",110,174,{}),("nkemelu",320,176,{"seated":True}),
     ("bah",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("barrier",250,148,0.24),("boiler",360,150,0.22),
     ("padlock",520,150,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"WHICH HOLES HAVE AUTHORS",
      [("decisions","3"),("absences","1")]),
    clockat=(700,34,22,11,30))
S["pf04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report A","A cause and a name",
      "<p><i>Cause: operator error. Recommendation: reinforce the importance of care at shift "
      "end.</i></p>"), 380),
    lambda w,h: f_realia(doc("Report B","A cause and four conditions",
      "<p>An immediate cause, four contributing conditions with owners, one marked as an absence, and "
      "the defense that worked.</p>"), 380),
    w=820, h=300, lt="CARE", rt="CONDITIONS")
S["pf04-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","One sentence",
      "<p><i>The cause was a lapse by the operator at 05:20.</i></p>"), 380),
    lambda w,h: f_realia(doc("After","Two sentences",
      "<p><i>The immediate cause was a lapse at 05:20. Four contributing conditions were already "
      "present, three of them created by reasonable decisions.</i></p>"), 380),
    w=820, h=300, lt="A PERSON", rt="A SEQUENCE")
S["pf04-f13"]=lambda: f_realia(form("Defense planner",
    [("The immediate cause",""),("The contributing conditions",""),
     ("Which of them is an absence",""),("The defense that worked",""),
     ("The remedy owners",""),("What the diagram is not","")],
    note="Six boxes. Hand it to a partner; they ask what saved you."), 560)
S["pf04-f14"]=lambda: f_scene(1000,450,
    people=[("wei",60,176,{}),("nkemelu",135,172,{}),("bah",210,176,{"seated":True}),
     ("anders",290,172,{"seated":True}),("okonjo",370,176,{"seated":True}),
     ("hana",445,172,{}),("oksana",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("nour",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("padlock",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"DECISION OR ABSENCE",
      [("with authors","3"),("without","1")]),
    clockat=(278,34,22,11,30))
S["pf04-f15"]=lambda: f_chart([("this year",6),("in the last three years",8),
    ("longer ago",5),("never as far as I know",9),("I do not know what it is",3)])
S["pf04-f16"]=lambda: f_realia(doc("On a desk in September",
    "What was on it at six o'clock",
    "<p><b>A seven-layer diagram</b> with four aligned holes.</p>"
    "<p><b>Two identical sensors</b> from one batch.</p>"
    "<p><b>A suppressed-alarm log</b> with a review date.</p>"
    "<p><b>An interlock certificate</b> showing annual tests since 2019.</p>"
    "<p><b>A book from 1997.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The immediate cause has a time, a place and a person, "
    "and the four conditions behind it have none of those, which is why reports name the operator and "
    "recommend care, and why nothing then changes. The hole that matters is the one nobody authored: "
    "an absence has no advocate and no opponent, so four competent earlier reviews walked past it "
    "because there was nobody to interview. The device that saved us was installed in 2019 and has "
    "not been mentioned in a meeting since 2021, which is what a working defense looks like from the "
    "inside and is exactly why it will be the first thing removed for convenience.</i></p>",
    "Six o'clock. Four holes, three decisions, one absence, one device."), 640)

# ---------------- Unit 5 ----------------
S["pf05-f1"]=lambda: f_icons([("archive","a report in several volumes"),
    ("form","a terms-of-reference page"),("clipboard","a numbered finding"),
    ("note","a recommendation"),("boiler","a technical cause"),
    ("chain","a chain of communication"),("envelope","a written recommendation"),
    ("thermometer","a temperature figure"),("signature","an appendix in one name"),
    ("magnifier","a statement of what could not be determined")], cols=5)
S["pf05-f2"]=lambda: f_scene(760,380,
    people=[("wei",200,172,{}),("anders",290,170,{})],
    props=[("table",400,0,1.0),("archive",470,148,0.24),("clipboard",580,150,0.24),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"FOUR SECTIONS",
      [("findings","separate"),("recommendations","addressed")]),
    clockat=(360,34,22,3,10))
S["pf05-f3"]=lambda: f_icons([("form","terms of reference"),("clipboard","findings"),
    ("note","recommendations"),("signature","a personal appendix"),
    ("magnifier","unable to determine"),("badge","a named recipient")], cols=3)
S["pf05-f4"]=lambda: f_realia(tbl("Team research","Four reports",
    ["The report","Findings separate from recommendations?","Recipients named?",
     "What it says it could not determine"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the sentence no report of ours contains.</b>"), 660)
S["pf05-f5"]=lambda: f_realia(doc("Lindhurst · quality note 5",
    "How a public report is built",
    "<p><b>The document.</b> The <i>Report of the Presidential Commission on the Space Shuttle "
    "Challenger Accident</i>, <b>submitted in June 1986</b>, on the loss of the vehicle and its crew "
    "of seven on <b>28 January 1986</b>. <b>This note is about its structure. It is not a summary of "
    "the accident, which is not ours to summarize.</b></p>"
    + table_html(["Section","What it is","Why separate"],
      [["<b>terms of reference</b>","what the commission was asked to do",
        "everything outside them is <b>beyond its mandate</b>, and it says so"],
       ["<b>findings</b>","what it concluded happened",
        "a finding can be <b>right or wrong</b>; it is not a demand"],
       ["<b>recommendations</b>","what should be done, and <b>by whom</b>",
        "a recommendation can be <b>accepted or refused</b>; it is not an accusation"],
       ["<b>appendices</b>","material, and views held by <b>individual members in their own "
        "names</b>","a member may go <b>further</b> than the collective text"]])
    + "<p><b>The technical cause and the decision process are treated separately.</b> The report "
    "identifies the <b>failure of a pressure seal in a joint</b>, attributing it to a <b>design "
    "unacceptably sensitive to a number of factors</b>, temperature among them. <b>Then, as a "
    "distinct matter, it addresses the decision to launch.</b></p>"
    "<p style='border:1.5px solid #3b3b5c;padding:8px'><b>What it records about that decision is a "
    "statement about information.</b> Those who took it <b>did not have before them</b> the recent "
    "history of problems with the joint, the contractor's <b>written recommendation against launching "
    "below a stated temperature</b>, or a clear account of the <b>engineers' concerns</b>. <b>That is "
    "a reviewable finding and it is the kind we almost never write.</b></p>"
    "<p><b>Nine recommendations, each with a recipient.</b> <b>A recommendation with no recipient is "
    "a wish, and most of ours have no recipient.</b></p>"
    "<p><b>An appendix in one member's own name</b> set out <b>estimates of failure probability made "
    "within one organization that differed by orders of magnitude</b> between engineering and "
    "management levels. <b>The figures are not the lesson. The gap is.</b></p>"
    "<p><b>And the sentence I most want us to learn:</b> the report <b>states where it could not reach "
    "a conclusion.</b> <b>An investigation that concludes everything has concluded too much.</b></p>",
    "Source: Report of the Presidential Commission on the Space Shuttle Challenger Accident, "
    "submitted June 1986, concerning the loss of the vehicle and its crew on 28 January 1986. The "
    "report sets out terms of reference, findings, nine recommendations addressed to named "
    "recipients, and appendices including observations published by individual members in their own "
    "names. It was charged with determining the probable cause and recommending corrective action; it "
    "is not a determination of legal liability, it states where it was unable to reach conclusions, "
    "and it was produced within a few months of the event on the evidence then available."), 660)
S["pf05-f6"]=lambda: f_realia(tbl("Word study","Findings and recommendations",
    ["Structure","What it does","Example"],
    [["<i>it was found that</i>","states a conclusion about fact",
      "<b>It was found that</b> the alarm had been suppressed in February."],
     ["<i>in our view</i>","marks a judgment, not a fact",
      "<b>In our view</b> the threshold should be two readings."],
     ["<i>the evidence does not support</i>","rejects a proposition carefully",
      "<b>The evidence does not support</b> a sensor fault."],
     ["<i>we recommend that</i>","proposes action, to somebody",
      "<b>We recommend that</b> operations set a threshold by 1 May."],
     ["<i>we were unable to determine</i>","",""],["<i>beyond the terms of this review</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pf05-f7"]=lambda: f_panels(
    lambda w,h: f_realia(doc("A public report","Four sections",
      "<p><b>1</b> terms of reference<br><b>2</b> findings<br><b>3</b> recommendations, with "
      "recipients<br><b>4</b> appendices, in individual names</p>"), 380),
    lambda w,h: f_realia(doc("Our report","One list",
      "<p>Twenty-two numbered items in which a fact, an opinion, a demand and a grievance are "
      "typographically identical.</p>"), 380),
    w=820, h=300, lt="FOUR", rt="ONE")
S["pf05-f8"]=lambda: f_icons([("form","terms of reference"),("clipboard","a numbered finding"),
    ("note","a recommendation with a recipient"),("signature","an appendix in one name"),
    ("magnifier","unable to determine"),("logsheet","an undivided list")],
    cols=3, numbered=False)
S["pf05-f9"]=lambda: f_realia(doc("Review cover sheet · 14 June",
    "Four blocks · six findings · four recommendations · two matters undetermined",
    "<p><b>Terms of reference.</b> To establish the sequence of events of 14 June and recommend "
    "changes. <b>Commercial liability, disciplinary matters and the conduct of individuals are beyond "
    "its terms.</b></p>"
    + table_html(["#","Finding"],
      [["<b>F1</b>","<b>No escalation threshold existed</b> on the weekly plant log."],
       ["<b>F2</b>","The log owner <b>had no authority to stop work.</b>"],
       ["<b>F3</b>","A telemetry alarm was <b>suppressed in February</b>."],
       ["<b>F4</b>","A waiver issued in <b>2022 remained open</b>."],
       ["<b>F5</b>","The two primary sensors were of the <b>same model and batch</b>."],
       ["<b>F6</b>","The <b>standby interlock operated as designed.</b>"]])
    + table_html(["#","Recommendation","To","By"],
      [["R1","escalation threshold, two readings, with stopping authority","operations","1 May"],
       ["R2","replace one primary sensor with a different model","M. Bah","30 June"],
       ["R3","close or re-justify every waiver older than 12 months","project office","30 June"],
       ["R4","enter the standby interlock in the risk report","A. Holm","1 May"]])
    + "<p><b>Matters we were unable to determine.</b> <b>U1:</b> who authorized the bypass in 2021 "
    "— the notebook does not name its author and two people recollect differently. <b>U2:</b> "
    "whether the February suppression was reviewed — the record carries a signature and no "
    "date.</p>",
    "Opinions are marked as such throughout. An unsupported name would make this a report about one "
    "person, and F1 would never be discussed."), 640)
S["pf05-f10"]=lambda: f_scene(860,400,
    people=[("wei",110,174,{}),("nkemelu",320,176,{"seated":True}),
     ("anders",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("archive",250,148,0.24),("logsheet",360,150,0.22),
     ("card",520,152,0.2),("shelf",760,92,0.5)],
    board=(40,18,230,120,"TWO NUMBERS, ONE EVENT",
      [("maintenance","1 / year"),("risk register","1 / 15 years")]),
    clockat=(700,34,22,3,30))
S["pf05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Format A","One list",
      "<p>Twenty-two items. No recipients. No dates. No section headings.</p>"), 380),
    lambda w,h: f_realia(doc("Format B","Four blocks",
      "<p>Terms of reference, six findings, four recommendations with recipients and dates, two "
      "matters undetermined.</p>"), 380),
    w=820, h=300, lt="A LIST", rt="A REPORT")
S["pf05-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Mixed","One sentence, two kinds of claim",
      "<p><i>It was found that the threshold should be two readings.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Cannot be answered at all.</p>"), 380),
    lambda w,h: f_realia(doc("Separated","Two sentences",
      "<p><i>It was found that no threshold existed. In our view two consecutive readings would be "
      "appropriate.</i></p>"), 380),
    w=820, h=300, lt="UNANSWERABLE", rt="ANSWERABLE")
S["pf05-f13"]=lambda: f_realia(form("Report planner",
    [("The terms of reference, and what lies outside",""),("The findings",""),
     ("The views, marked as views",""),("The recommendations, with recipients and dates",""),
     ("The matters undetermined",""),("The reason each one is printed","")],
    note="Six boxes. Hand it to a partner; they ask what you could not determine."), 560)
S["pf05-f14"]=lambda: f_scene(1000,450,
    people=[("wei",60,176,{}),("anders",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("hana",370,176,{"seated":True}),
     ("oksana",445,172,{}),("bah",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("nour",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("archive",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"TWO NUMBERS, ONE EVENT",
      [("per year","1"),("per 15 years","1")]),
    clockat=(278,34,22,3,30))
S["pf05-f15"]=lambda: f_chart([("yes",3),("no",14),("I have not looked",8),
    ("we have no formal reports",4),("our reports conclude everything",6)])
S["pf05-f16"]=lambda: f_realia(doc("On a desk in September",
    "What was on it at six o'clock",
    "<p><b>A draft cover sheet</b> in four blocks.</p>"
    "<p><b>Several volumes</b> of a 1986 report.</p>"
    "<p><b>A company report</b> of twenty-two undivided items.</p>"
    "<p><b>A card</b> bearing two very different failure frequencies.</p>"
    "<p><b>A note of three sentences.</b> <i>A finding printed beside a demand reads as an "
    "accusation, so the recipient argues about the finding and never reaches the recommendation, and "
    "I have watched that happen in four meetings. The two things I could not determine are in the "
    "report because the alternative is a name I cannot support, and a report containing an "
    "unsupported name becomes a report about that person while the one finding that would have "
    "changed the morning goes undiscussed. The oldest lesson in that 1986 document is the simplest: "
    "an investigation that concludes everything has concluded too much.</i></p>",
    "Six o'clock. Four blocks, six findings, two matters undetermined."), 640)

# ---------------- Unit 6 ----------------
S["pf06-f1"]=lambda: f_icons([("book","a book from 1996"),("archive","a report from 1986"),
    ("magnifier","an anomaly observed"),("note","recorded as within expectations"),
    ("review","a line drifting from a limit"),("review","a sequence of five steps"),
    ("meeting","two departments, two parts"),("form","a 2018 policy stating two"),
    ("logsheet","a register showing nineteen"),("stamp","a re-baselining decision")], cols=5)
S["pf06-f2"]=lambda: f_scene(760,380,
    people=[("wei",200,172,{}),("anders",290,170,{})],
    props=[("desk",400,0,1.0),("logsheet",470,150,0.24),("form",580,150,0.22),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"TWO TO NINETEEN",
      [("policy limit","2"),("approvals","17")]),
    clockat=(360,34,22,11,40))
S["pf06-f3"]=lambda: f_icons([("firealarm","a signal of danger"),("stamp","an acknowledgment"),
    ("magnifier","a review of evidence"),("note","an act of normalization"),
    ("handshake","proceeding"),("review","the sequence repeating")], cols=3)
S["pf06-f4"]=lambda: f_realia(tbl("Team research","Four drifts",
    ["The standard","Where it is written","The position now","Was the drift justified?"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the standard that was wrong when it was written.</b>"), 660)
S["pf06-f5"]=lambda: f_realia(doc("Lindhurst · project office note 6",
    "Nineteen waivers, and what a drift is",
    "<p><b>The study.</b> <b>D. Vaughan</b>, <i>The Challenger Launch Decision</i>, <b>1996</b> "
    "— a study of a decision an official commission had examined in <b>1986</b>, drawing on that "
    "commission's archive and on interviews.</p>"
    + table_html(["","What it says"],
      [["<b>The commission's account</b>","the decision was <b>flawed</b>; those taking it <b>did "
        "not have</b> the joint's recent history, a written recommendation against launch, or a clear "
        "account of the engineers' concerns"],
       ["<b>The study's account</b>","each incremental acceptance was <b>reasonable inside the "
        "organization's technical culture</b>; the standard of <b>acceptable performance drifted</b> "
        "while people <b>conformed</b>"],
       ["<b>What the study does not argue</b>","<b>that anybody lied</b> or traded lives against "
        "schedule — it <b>rejects</b> that explanation"]])
    + "<p><b>A dispute about the kind of cause, not about anybody's honesty.</b> <b>One account is a "
    "story about rule-breaking; the other about rule-following.</b></p>"
    + table_html(["Its mechanism, repeating",""],
      [["<b>1</b>","a <b>signal of potential danger</b>"],
       ["<b>2</b>","an <b>official act</b> acknowledging escalated risk"],
       ["<b>3</b>","the <b>evidence is reviewed</b>"],
       ["<b>4</b>","an <b>official act</b> recording the risk as <b>acceptable</b>"],
       ["<b>5</b>","work <b>proceeds</b> — and the absence of harm becomes the evidence for the "
        "next cycle"]])
    + table_html(["#","Standard, and where","Now","Justified?"],
      [["1","open waivers at handover: <b>2</b> (2018)","<b>19</b>","<b>no — a finding</b>"],
       ["2","sensor replacement: once in 5 years (2019)","<b>annually</b>",
        "<b>no — a finding</b>"],
       ["3","drawing register current (procedure)","<b>two modifications behind</b>",
        "<b>no — a finding</b>"],
       ["4","permit audit <b>monthly</b> (2017, site of 40)","<b>quarterly</b>",
        "<b>yes — site now 11</b>"],
       ["5","<b>100 %</b> witness testing (2016)","<b>20 %</b>",
        "<b>yes — never once met</b>"]])
    + "<p style='border:1.5px solid #3b3b5c;padding:8px'><b>Seventeen approvals and no decision.</b> "
    "I have read <b>all seventeen</b> approvals that took the number from two to nineteen. <b>Each "
    "was granted by somebody with authority, with a reason recorded, and I cannot find one I would "
    "have refused on the day it was put.</b> <b>Nobody ever decided that nineteen was "
    "acceptable.</b></p>"
    "<p><b>Items 4 and 5 are not findings</b> and must not be printed under the same heading. <b>A "
    "drift is a deviation only if what it drifted from was right.</b></p>",
    "Source: D. Vaughan, The Challenger Launch Decision: Risky Technology, Culture, and Deviance at "
    "NASA, 1996. The study reinterprets a decision examined by an official commission in 1986, "
    "drawing on that commission's archive and on interviews, and argues that incremental acceptances "
    "of anomalies were reasonable within the organization's technical culture rather than knowing "
    "violations. It is a study of one organization and one decision, offers no threshold or detection "
    "method for drift, and its reinterpretation of the earlier account is contested."), 660)
S["pf06-f6"]=lambda: f_realia(tbl("Word study","Disputing an account",
    ["Structure","What it does","Example"],
    [["<i>the account offered was</i>","states the other explanation fairly",
      "<b>The account offered was</b> weak discipline in the project office."],
     ["<i>on that reading</i>","works through its consequences",
      "<b>On that reading</b>, the remedy is a second signature."],
     ["<i>the difficulty with that account is</i>","objects without accusing",
      "<b>The difficulty with that account is</b> that all seventeen were properly approved."],
     ["<i>a better account is</i>","proposes the alternative",
      "<b>A better account is</b> that each decision is a point and nobody sees the line."],
     ["<i>she does not argue that</i>","",""],["<i>neither explanation requires</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pf06-f7"]=lambda: f_line([("2018",2),("2019",5),("2020",8),("2021",11),("2022",14),
    ("2023",17),("now",19)], w=620, h=240, unit="open waivers at handover")
S["pf06-f8"]=lambda: f_icons([("firealarm","a signal"),("stamp","an acknowledgment"),
    ("magnifier","a review"),("note","an act recording acceptability"),
    ("handshake","work proceeding"),("review","a line past a limit")], cols=3, numbered=False)
S["pf06-f9"]=lambda: f_realia(tbl("Drift register · five standards",
    "Three findings and two corrections, printed separately",
    ["#","Standard","Set","Now","Approvals","Judgment"],
    [["1","open waivers at handover: 2","2018 policy","<b>19</b>","<b>17</b>","<b>drift</b>"],
     ["2","sensor replacement: once in 5 years","2019 spec","<b>annually</b>","—",
      "<b>drift</b>"],
     ["3","drawing register current at handover","procedure","<b>2 behind</b>","—",
      "<b>drift</b>"],
     ["4","permit audit monthly","2017, site of 40","<b>quarterly</b>","—",
      "<b>standard wrong</b>"],
     ["5","100 % witness testing of valves","2016","<b>20 %</b>","—",
      "<b>standard wrong</b>"]],
    note="<b>Seventeen approvals, none of them to accept nineteen.</b>"), 700)
S["pf06-f10"]=lambda: f_scene(860,400,
    people=[("wei",110,174,{}),("anders",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("logsheet",250,148,0.24),("form",360,150,0.22),
     ("book",520,150,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"WHO CHOSE NINETEEN",[("decisions","17"),("for nineteen","0")]),
    clockat=(700,34,22,12,0))
S["pf06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Extract A","A count",
      "<p><i>Open waivers: 19.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>No limit shown. No trend.</p>"), 380),
    lambda w,h: f_realia(doc("Extract B","A count and a limit",
      "<p><i>Open waivers: 19. Policy limit: 2. Six-year trend: 2, 5, 8, 11, 14, 17, 19.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Two columns. No new decision required.</p>"), 380),
    w=820, h=300, lt="A POINT", rt="A LINE")
S["pf06-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Register A","One heading",
      "<p>Five drifts under the heading <i>normalization of deviance</i>.</p>"
      "<p style='font-size:12px;color:#6b6861'>Two of them are standards that were never met.</p>"),
      380),
    lambda w,h: f_realia(doc("Register B","Two groups",
      "<p><b>Group A:</b> three drifts from sound standards. <b>Group B:</b> two standards that were "
      "wrong when written, for re-baselining.</p>"), 380),
    w=820, h=300, lt="ONE HEADING", rt="TWO REMEDIES")
S["pf06-f13"]=lambda: f_realia(form("Drift planner",
    [("The standard and where it is written",""),("The position now",""),
     ("The number of approvals",""),("Was the standard sound?",""),("The remedy",""),
     ("The one control that makes the slope visible","")],
    note="Six boxes. Hand it to a partner; they ask whether the standard was ever met."), 560)
S["pf06-f14"]=lambda: f_scene(1000,450,
    people=[("wei",60,176,{}),("anders",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("hana",370,176,{"seated":True}),
     ("oksana",445,172,{}),("bah",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("nour",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("logsheet",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"WHICH OF THE TWO",
      [("a drift","3"),("a bad standard","2")]),
    clockat=(278,34,22,12,0))
S["pf06-f15"]=lambda: f_chart([("yes, several things",12),("one thing",7),("no",4),
    ("I have not been here five years",6),("I do not know",3)])
S["pf06-f16"]=lambda: f_realia(doc("On a desk in October",
    "What was on it at six o'clock",
    "<p><b>A waiver register</b> of nineteen rows.</p>"
    "<p><b>A 2018 policy</b> open at a limit of two.</p>"
    "<p><b>A 2021 review</b> recommending a second signature.</p>"
    "<p><b>A drift register</b> split into two groups.</p>"
    "<p><b>A book from 1996.</b></p>"
    "<p><b>A note of three sentences.</b> <i>Every one of the seventeen approvals was correct and I "
    "would have granted all of them, which is the finding rather than my defense of anybody, because "
    "the only thing wrong here is a sum that nobody owns. Tightening individual approval added work "
    "to the part of the process that was functioning and the number rose by eight, so the control I "
    "want is two columns in a monthly report and no new decision of any kind. Two of the five "
    "movements are standards that were wrong when written, and printing them beside the other three "
    "would let somebody dismiss the whole register, which is why the label everybody wants me to use "
    "is the one I will not.</i></p>",
    "Six o'clock. Two to nineteen, seventeen approvals, three findings."), 640)
