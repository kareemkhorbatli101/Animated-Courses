# -*- coding: utf-8 -*-
"""Throughline Book 6 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 ----------------
S["pf07-f1"]=lambda: f_icons([("book","a standard revised in 2018"),
    ("clipboard","an audit plan"),("folder","twelve records of hundreds"),
    ("inventory","an interview list"),("student","somebody not on the list"),
    ("noentry","a nonconformity"),("handshake","conformity"),
    ("note","an opportunity for improvement"),("magnifier","a statement of uncertainty"),
    ("archive","an earlier report with no findings")], cols=5)
S["pf07-f2"]=lambda: f_scene(760,380,
    people=[("wei",200,172,{}),("anders",290,170,{})],
    props=[("table",400,0,1.0),("folder",470,150,0.26),("archive",580,148,0.24),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"THE SAMPLE",
      [("examined","12"),("population","231")]),
    clockat=(360,34,22,9,20))
S["pf07-f3"]=lambda: f_icons([("handshake","a record meeting a requirement"),
    ("noentry","a record failing one"),("note","a suggestion for improvement"),
    ("folder","a sample from a population"),("barrier","a scope boundary"),
    ("magnifier","what was not examined")], cols=3)
S["pf07-f4"]=lambda: f_realia(tbl("Team research","Four audits",
    ["The audit","Notice given","Sample size out of what population",
     "Who was not interviewed"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the person whose practice no audit has ever seen.</b>"), 660)
S["pf07-f5"]=lambda: f_realia(doc("Lindhurst · audit note 7",
    "The waiver process",
    "<p><b>The standard.</b> <b>ISO 19011:2018</b>, <i>Guidelines for auditing management "
    "systems</i>, <b>third edition</b>, replacing <b>2011</b>. It is <b>guidance</b>: you cannot be "
    "certified against it.</p>"
    "<p><b>Its principles</b> include <b>integrity</b>, <b>fair presentation</b>, <b>due professional "
    "care</b>, <b>confidentiality</b>, <b>independence</b>, a <b>risk-based approach</b> — and "
    "the <b>evidence-based approach</b>, which is what this note is about.</p>"
    "<p style='border:1.5px solid #3b3b5c;padding:8px'><b>The sentence nobody quotes.</b> Audit "
    "evidence is based on <b>samples of the information available</b>; there is therefore <b>an "
    "element of uncertainty in auditing</b>; and <b>those acting upon audit conclusions should be "
    "aware of this uncertainty.</b> <b>That is not a disclaimer. It is a requirement on the reader, "
    "and our reports have never passed it on.</b></p>"
    + table_html(["","2022","this audit"],
      [["Notice given","14 days","<b>10 days</b>"],
       ["Records in the population","198","<b>231</b>"],
       ["<b>Records examined</b>","<b>5</b>","<b>12</b>"],
       ["Period they came from","<b>one month</b>","<b>six months, spread</b>"],
       ["People interviewed","3, all on the list","<b>5, including 1 not on the list</b>"],
       ["<b>Findings</b>","<b>none</b>","<b>3 nonconformities, 2 opportunities</b>"],
       ["Sample size stated?","<b>no</b>","<b>yes</b>"]])
    + "<p><b>The 2022 report was accurate and incomplete, and it did not say which.</b> <b>For three "
    "years it has been cited as evidence that the waiver process is sound.</b></p>"
    "<p><b>How the findings were made.</b> One <b>from the sample</b>: a waiver with no expiry date. "
    "<b>Two from an unscheduled question</b> to a fitter <b>not on the interview list</b>, who keeps "
    "paper copies in a drawer <b>because the system logs him out after four minutes and he works in "
    "gloves.</b></p>"
    "<p><b>What I will not write.</b> <b>Three of twelve is not twenty-five per cent of two hundred "
    "and thirty-one.</b> <b>The report says: on the evidence sampled, three of twelve did not meet "
    "the criteria; the sample does not support a reliable estimate for the population.</b> A larger "
    "sample of <b>40 records across 12 months</b> is recommended.</p>"
    "<p><b>Not examined.</b> Records before 2021. Commercial justification. Any site other than "
    "Calder. <b>The subcontractor's own records.</b></p>",
    "Source: ISO 19011:2018, Guidelines for auditing management systems, third edition, replacing the "
    "2011 edition. It provides guidance on auditing, including the evidence-based approach, under "
    "which audit conclusions are based on samples of the available information and therefore carry an "
    "element of uncertainty of which those acting on the conclusions should be aware. It is guidance "
    "rather than requirements, prescribes no sample size or sampling method, and addresses management "
    "system auditing."), 660)
S["pf07-f6"]=lambda: f_realia(tbl("Word study","The language of findings",
    ["Structure","What it does","Example"],
    [["<i>on the evidence sampled</i>","limits the claim to what was seen",
      "<b>On the evidence sampled</b>, three of twelve failed."],
     ["<i>the sample does not support</i>","refuses an inference",
      "<b>The sample does not support</b> an estimate for the population."],
     ["<i>a nonconformity was raised against</i>","names the requirement, not the person",
      "<b>A nonconformity was raised against</b> clause 4.3."],
     ["<i>an opportunity for improvement</i>","marks a suggestion as not a failure",
      "A four-minute timeout is <b>an opportunity for improvement</b>."],
     ["<i>this audit did not examine</i>","",""],["<i>no conclusion is drawn as to</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pf07-f7"]=lambda: f_part("The population of 231 waiver records",
    [("examined and conforming",9,"#4a6b3b"),("examined and failing",3,"#7a3b2f"),
     ("not examined",219,"#3b3b5c")])
S["pf07-f8"]=lambda: f_icons([("clipboard","an audit plan"),("folder","twelve folders"),
    ("inventory","an interview list"),("student","somebody not on it"),
    ("noentry","a finding against a clause"),("magnifier","what was not examined")],
    cols=3, numbered=False)
S["pf07-f9"]=lambda: f_realia(doc("Internal audit report · waiver process",
    "Header, findings, opportunities, exclusions",
    table_html(["",""],
      [["<b>Scope</b>","waiver issue, approval, expiry and closure at <b>Calder only</b>"],
       ["<b>Criteria</b>","procedure QP-11 clauses 4.1 to 4.9; the <b>2018 waiver policy</b>"],
       ["<b>Notice given</b>","<b>10 days</b>"],
       ["<b>Population</b>","<b>231</b> records, 2021 to date"],
       ["<b>Sample</b>","<b>12</b> records, across <b>six months</b>"],
       ["<b>Interviews</b>","<b>5</b>, of whom <b>1 not on the interview list</b>"]])
    + table_html(["#","Nonconformity","Against"],
      [["<b>N1</b>","one record carried <b>no expiry date</b>","<b>clause 4.3</b>"],
       ["<b>N2</b>","<b>two records closed on paper and open in the system</b>","<b>clause 4.7</b>"],
       ["<b>N3</b>","<b>one waiver exists only on paper</b>","<b>clause 4.2</b>"]])
    + "<p><b>O1:</b> the system logs a user out after four minutes and the fitters work in gloves. "
    "<b>O2:</b> the waiver form has no field for the person accepting the risk.</p>"
    "<p style='font-size:15px'><b>THE SAMPLE DOES NOT SUPPORT A POPULATION ESTIMATE.</b></p>"
    "<p><b>Not examined:</b> records before 2021; commercial justification; other sites; the "
    "subcontractor's own records.</p>",
    "N2 and N3 were identified through an unscheduled question to a person not on the interview "
    "list. A larger sample of 40 records across 12 months is recommended and will take three days."),
    640)
S["pf07-f10"]=lambda: f_scene(860,400,
    people=[("wei",110,174,{}),("anders",320,176,{"seated":True}),
     ("bah",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("folder",250,148,0.26),("archive",360,148,0.22),
     ("inventory",520,150,0.2),("shelf",760,92,0.5)],
    board=(40,18,230,120,"OUT OF HOW MANY",[("2022","5"),("now","12")]),
    clockat=(700,34,22,9,30))
S["pf07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report A","Findings only",
      "<p><i>No nonconformities were identified. The process is operating effectively.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Five records, one month, not stated.</p>"), 380),
    lambda w,h: f_realia(doc("Report B","Header first",
      "<p>Scope, criteria, notice, population, sample, sampling basis — then findings against "
      "clauses, then exclusions.</p>"), 380),
    w=820, h=300, lt="A VERDICT", rt="A SAMPLE")
S["pf07-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("2022","No findings",
      "<p>Five records. All from November. The month after a project office review. No sample size "
      "stated.</p>"), 380),
    lambda w,h: f_realia(doc("Now","Three findings",
      "<p>Twelve records across six months. Two findings from a question that was not on the "
      "schedule.</p>"), 380),
    w=820, h=300, lt="ACCURATE", rt="ALSO ACCURATE")
S["pf07-f13"]=lambda: f_realia(form("Audit planner",
    [("The scope and criteria",""),("The notice given",""),("The population and sample",""),
     ("The findings, against clauses",""),("The opportunities for improvement",""),
     ("What was not examined","")],
    note="Six boxes. Hand it to a partner; they ask what you will not examine."), 560)
S["pf07-f14"]=lambda: f_scene(1000,450,
    people=[("wei",60,176,{}),("anders",135,172,{}),("bah",210,176,{"seated":True}),
     ("nkemelu",290,172,{"seated":True}),("hana",370,176,{"seated":True}),
     ("okonjo",445,172,{}),("oksana",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("nour",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("folder",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"OUT OF HOW MANY",[("sampled","12"),("population","231")]),
    clockat=(278,34,22,9,30))
S["pf07-f15"]=lambda: f_chart([("yes",5),("no",13),("I have not read it",9),
    ("we have no audits",4),("I did not know it should",4)])
S["pf07-f16"]=lambda: f_realia(doc("On a desk in November",
    "What was on it at six o'clock",
    "<p><b>Twelve record folders.</b></p>"
    "<p><b>A 2022 audit report</b> with no sample size.</p>"
    "<p><b>An interview list</b> of three names.</p>"
    "<p><b>A drawer of paper copies.</b></p>"
    "<p><b>A standard</b> open at the evidence-based approach.</p>"
    "<p><b>A note of three sentences.</b> <i>Both reports are accurate about what they examined and "
    "only one of them says what that was, which is the whole difference between assurance and a "
    "slide. If I give the board a percentage it will outlive the twelve records that produced it by "
    "about three years, so the refusal has to arrive with a larger sample attached or it reads as "
    "evasion. The drawer is the best thing in my report and it exists because a system logs a man out "
    "in four minutes, so if I wrote it up as his failure I would have bought an empty drawer and a "
    "silent site for the next ten years.</i></p>",
    "Six o'clock. Twelve of two hundred and thirty-one, and no point estimate."), 640)

# ---------------- Unit 8 ----------------
S["pf08-f1"]=lambda: f_icons([("book","a standard published in 2021"),
    ("meeting","a governing body"),("note","a statement of purpose"),
    ("signature","a delegation of authority"),("podium","answering in public"),
    ("clipboard","sixty-one activities"),("noentry","eleven empty rows"),
    ("handsup","four names in one column"),("inventory","one word, five meanings"),
    ("chain","an escalation route")], cols=5)
S["pf08-f2"]=lambda: f_scene(760,380,
    people=[("anders",200,172,{}),("okonjo",290,170,{})],
    props=[("desk",400,0,1.0),("clipboard",470,150,0.24),("signature",580,150,0.22),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"SIXTY-ONE ACTIVITIES",
      [("nobody accountable","11"),("four accountable","1")]),
    clockat=(360,34,22,2,10))
S["pf08-f3"]=lambda: f_icons([("note","purpose"),("tally","value generation"),
    ("timetable","strategy"),("magnifier","oversight"),
    ("podium","giving an account"),("signature","a delegation of authority only")], cols=3)
S["pf08-f4"]=lambda: f_realia(tbl("Team research","Four activities",
    ["The activity","Who is responsible","Who answers for the outcome","Where it is written"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the activity nobody answers for.</b>"), 660)
S["pf08-f5"]=lambda: f_realia(doc("Lindhurst · governance note 8",
    "Sixty-one activities, one word",
    "<p><b>The standard.</b> <b>ISO 37000:2021</b>, <i>Governance of organizations — "
    "Guidance</i>. It is <b>guidance</b>: <b>nothing in it can be certified against</b>, and it "
    "prescribes <b>no board structure and no legal duties</b>.</p>"
    "<p><b>Its definition.</b> Governance is the system by which the whole organization is "
    "<b>directed, controlled and held accountable</b> in order to achieve its <b>purpose</b> over the "
    "long term.</p>"
    "<p><b>Its principles.</b> <b>Purpose</b> is primary. On it rest <b>value generation</b>, "
    "<b>strategy</b>, <b>oversight</b> and <b>accountability</b>; around them sit stakeholder "
    "engagement, leadership, data and decisions, risk governance, social responsibility, and "
    "viability over time.</p>"
    + table_html(["","Can it be delegated?"],
      [["<b>responsibility</b> — the obligation to <b>carry out</b> a task","<b>yes</b>"],
       ["<b>accountability</b> — the obligation to <b>answer for an outcome</b>","<b>no</b>"]])
    + "<p><b>A governing body may delegate authority; it remains accountable.</b> <b>Two people "
    "cannot both answer for one outcome</b>, because when the question is asked in public only one "
    "answer can be given.</p>"
    + table_html(["Names in the accountability column","Activities"],
      [["<b>0</b>","<b>11</b>"],["1","<b>45</b>"],["2","4"],["<b>4</b>","<b>1</b>"]])
    + "<p style='border:1.5px solid #3b3b5c;padding:8px'><b>The eleven blank rows are not eleven "
    "activities for which nobody answers.</b> <b>They are eleven activities for which the sponsor "
    "answers without having been told</b> — because accountability for the programme has not "
    "gone anywhere: <b>it cannot.</b></p>"
    + table_html(["Where the word appears","What it is taken to mean"],
      [["the delivery procedure","the <b>owner of the task</b>"],
       ["the waiver form","the <b>signatory</b>"],
       ["the budget manual","the <b>budget holder</b>"],
       ["the incident procedure","the person who will be <b>criticized</b>"],
       ["meeting terms of reference","the person who <b>reports</b>"]])
    + "<p><b>Five jobs, often five people, and four of them already have words of their own.</b> "
    "<b>The fifth sense has driven out the standard's meaning.</b></p>"
    "<p><b>The row with four names was an honest attempt</b>: it records a genuinely joint decision "
    "with the client. <b>The fix is not to choose one name but to write *joint decision*, name the "
    "two bodies, and name the escalation route</b> — which did not exist.</p>",
    "Source: ISO 37000:2021, Governance of organizations — Guidance, the first international "
    "standard giving guidance on the governance of organizations. It defines governance as the system "
    "by which the whole organization is directed, controlled and held accountable in order to achieve "
    "its purpose, with purpose as the primary principle, and distinguishes the delegation of "
    "authority from accountability for outcomes. It is guidance rather than requirements, is not "
    "intended for certification, and prescribes no governance structures, board composition or legal "
    "duties."), 660)
S["pf08-f6"]=lambda: f_realia(tbl("Word study","Accountability",
    ["Structure","What it states","Example"],
    [["<i>is accountable for</i>","who answers for the outcome",
      "The sponsor <b>is accountable for</b> all sixty-one activities."],
     ["<i>is responsible for</i>","who carries out the task",
      "The project office <b>is responsible for</b> the register."],
     ["<i>may delegate</i>","what can be handed on",
      "She <b>may delegate</b> authority to approve waivers."],
     ["<i>remains accountable</i>","what cannot",
      "She <b>remains accountable</b> for the waiver position."],
     ["<i>answers for</i>","",""],["<i>reports to</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pf08-f7"]=lambda: f_chart([("one name",45),("nobody",11),("two names",4),
    ("four names",1)], unit="activities")
S["pf08-f8"]=lambda: f_icons([("meeting","a governing body"),("note","a statement of purpose"),
    ("signature","a delegation being signed"),("podium","answering in public"),
    ("noentry","a blank accountability column"),("chain","an escalation route")],
    cols=3, numbered=False)
S["pf08-f9"]=lambda: f_realia(doc("Accountability sheet · Calder programme",
    "One accountable person · no accountability column at activity level",
    "<p style='font-size:15px'><b>ACCOUNTABLE FOR THIS PROGRAMME: E. OKONJO, FOR ALL SIXTY-ONE "
    "ACTIVITIES. THIS HAS NOT MOVED AND CANNOT BE MOVED.</b></p>"
    + table_html(["Activity group","Responsible","Consulted","Informed"],
      [["waiver approval up to stated value","project office","commercial","sponsor"],
       ["waiver approval above that value","<b>sponsor</b>","commercial, client","board"],
       ["plant log and escalation","operations","quality","project office"],
       ["drawing register","technical","site","project office"],
       ["<i>(remaining 49 activities overleaf)</i>","","",""]])
    + "<p><b>Joint decisions.</b> <b>The interface decision with the client</b> is taken jointly by "
    "the programme board and the client's delivery group. <b>If they do not agree within 10 working "
    "days, the matter escalates to the Lindhurst board and the client's director of operations.</b></p>"
    "<p><b>There is no accountability column at activity level, and that is deliberate.</b> The "
    "previous chart had one; <b>eleven of its sixty-one rows were blank and one carried four "
    "names.</b></p>",
    "Authority has been delegated in several places. Accountability has not been delegated anywhere, "
    "because it is not a thing that can be."), 640)
S["pf08-f10"]=lambda: f_scene(860,400,
    people=[("anders",110,174,{}),("okonjo",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("clipboard",250,148,0.24),("inventory",360,150,0.2),
     ("signature",520,150,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"WHICH ONE MOVES",
      [("authority","✓"),("accountability","✕")]),
    clockat=(700,34,22,2,30))
S["pf08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Chart A","An accountability column",
      "<p>Sixty-one rows. <b>Eleven blanks. One row with four names.</b></p>"
      "<p style='font-size:12px;color:#6b6861'>Every blank is a quiet transfer upwards.</p>"), 380),
    lambda w,h: f_realia(doc("Sheet B","One name in the header",
      "<p>Responsible, consulted and informed at activity level. One accountable name, once, for the "
      "whole. A joint-decision block with an escalation route.</p>"), 380),
    w=820, h=300, lt="A COLUMN", rt="A HEADER")
S["pf08-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Half a delegation","One clause",
      "<p><i>I have delegated authority to approve waivers up to a stated value.</i></p>"), 380),
    lambda w,h: f_realia(doc("A whole delegation","Two clauses",
      "<p><i>I have delegated authority to approve waivers up to a stated value, and I remain "
      "accountable for the waiver position.</i></p>"), 380),
    w=820, h=300, lt="INCOMPLETE", rt="COMPLETE")
S["pf08-f13"]=lambda: f_realia(form("Accountability planner",
    [("Who is accountable for the whole",""),("What authority has been delegated",""),
     ("What remains",""),("Any joint decisions",""),("The escalation route for each",""),
     ("Which other words replace the loose uses","")],
    note="Six boxes. Hand it to a partner; they ask what you still answer for."), 560)
S["pf08-f14"]=lambda: f_scene(1000,450,
    people=[("anders",60,176,{}),("okonjo",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("hana",290,172,{"seated":True}),("wei",370,176,{"seated":True}),
     ("oksana",445,172,{}),("bah",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("nour",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("signature",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"WHICH ONE MOVES",
      [("authority","moves"),("accountability","does not")]),
    clockat=(278,34,22,2,30))
S["pf08-f15"]=lambda: f_chart([("the owner of the task",9),("the signatory",5),
    ("the budget holder",4),("the person who will be criticized",12),
    ("the person who answers for the outcome",5)])
S["pf08-f16"]=lambda: f_realia(doc("On a desk in November",
    "What was on it at six o'clock",
    "<p><b>A sixty-one row chart</b> with eleven blank rows.</p>"
    "<p><b>A glossary</b> showing one word with five meanings.</p>"
    "<p><b>A delegation of authority</b> signed a year earlier.</p>"
    "<p><b>A new one-page sheet</b> with one name in the header.</p>"
    "<p><b>A standard published in 2021.</b></p>"
    "<p><b>A note of three sentences.</b> <i>A blank in an accountability column does not mean nobody "
    "answers; it means the sponsor answers and has not been told, which she then discovers in a "
    "meeting in front of other people. Nobody volunteers for that column while one of our own "
    "procedures uses the word to mean the person who will be criticized, and they are right not to, "
    "so the repair is vocabulary rather than courage. I have not corrected the row with four names, "
    "because it was the only honest entry on the chart: it recorded a genuinely joint decision, and "
    "what it was missing was an escalation route, which now exists.</i></p>",
    "Six o'clock. Eleven blanks, one word, five meanings."), 640)

# ---------------- Unit 9 ----------------
S["pf09-f1"]=lambda: f_icons([("book","a standard published in 2021"),
    ("clipboard","a register with two columns"),("statement","a law"),
    ("certificate","a permit"),("signature","a contract clause"),
    ("form","a tender with a promise"),("note","a code of practice"),
    ("noentry","an obligation with no owner"),("stamp","a certificate with a cover note"),
    ("danger","three breaches")], cols=5)
S["pf09-f2"]=lambda: f_scene(760,380,
    people=[("hana",200,172,{}),("sofia",290,170,{})],
    props=[("desk",400,0,1.0),("clipboard",470,150,0.24),("form",580,150,0.22),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"ONE HUNDRED AND FORTY-SEVEN",
      [("requirements","92"),("commitments","55")]),
    clockat=(360,34,22,3,40))
S["pf09-f3"]=lambda: f_icons([("statement","a statutory requirement"),
    ("certificate","a permit condition"),("signature","a binding contract clause"),
    ("note","a code adopted voluntarily"),("form","a promise in a tender"),
    ("badge","an obligation with an owner")], cols=3)
S["pf09-f4"]=lambda: f_realia(tbl("Team research","Four promises",
    ["The promise","Where it is written","Who owns it now","Is it being met?"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the promise nobody has read since we won the job.</b>"), 660)
S["pf09-f5"]=lambda: f_realia(doc("Lindhurst · compliance note 9",
    "The first obligation register",
    "<p><b>The standard.</b> <b>ISO 37301:2021</b>, <i>Compliance management systems — "
    "Requirements with guidance for use</i>. Unlike most documents in this series it is a "
    "<b>requirements</b> standard: <b>an organization can be certified against it.</b> It replaced a "
    "<b>guidance</b> standard of <b>2014</b>.</p>"
    + table_html(["A compliance obligation is either",""],
      [["a <b>requirement</b>","something the organization <b>must</b> comply with: statute, "
        "regulation, permit condition, binding contract clause"],
       ["a <b>commitment</b>","something it <b>has chosen</b> to comply with: a code of practice, a "
        "standard it says it works to, a promise it has made"]])
    + table_html(["Our first register",""],
      [["<b>Requirements</b> (compulsory)","<b>92</b>"],
       ["<b>Commitments</b> (voluntary)","<b>55</b>"],
       ["Obligations with a named owner","<b>86</b>"],
       ["<b>Owned by somebody who has never seen the register</b>","<b>61</b>"]])
    + table_html(["Where the 55 came from","Count"],
      [["codes of practice adopted by the board","14"],
       ["standards named in our quality policy","11"],
       ["agreements with neighbors","7"],
       ["<b>promises made in tender documents</b>","<b>23</b>"]])
    + "<p style='border:1.5px solid #3b3b5c;padding:8px'><b>The twenty-three are the finding.</b> "
    "Written by <b>bid writers, over six years, in good faith</b>, <b>none of whom knew they were "
    "creating an obligation.</b> <b>There is no mechanism by which a sentence in a tender becomes an "
    "entry in any register</b>: the bid is written, the work is won, the bid is archived — <b>and "
    "the client keeps a copy.</b></p>"
    + table_html(["Three being breached now","The position"],
      [["a <b>four-week rolling look-ahead</b>","<b>two weeks since March</b>"],
       ["a <b>monthly environmental return</b>","<b>discontinued in year two</b>"],
       ["a <b>named site liaison officer</b>","<b>currently nobody</b>"]])
    + "<p><b>None is serious and nobody had noticed.</b> <b>A commitment we drafted ourselves is "
    "harder to explain than a requirement imposed on us, because the wording is ours.</b></p>"
    "<p><b>One sentence for the certificate.</b> <b>A certificate against this standard states that "
    "our compliance management system meets the standard's requirements. It does not state that we "
    "are compliant.</b></p>",
    "Source: ISO 37301:2021, Compliance management systems — Requirements with guidance for use, "
    "a requirements standard against which a compliance management system may be certified, replacing "
    "the guidance standard of 2014. It defines compliance obligations as comprising requirements an "
    "organization must comply with and commitments it chooses to comply with, and requires them to be "
    "identified, assessed and managed. It does not identify any organization's obligations, does not "
    "grade them, and certification attests to the management system rather than to actual "
    "compliance."), 660)
S["pf09-f6"]=lambda: f_realia(tbl("Word study","Obligations and their origins",
    ["Structure","Where it comes from","Example"],
    [["<i>is required by</i>","law, regulation, permit",
      "We <b>are required by</b> the permit to sample weekly."],
     ["<i>is bound by</i>","a contract","We <b>are bound by</b> clause 14 to report monthly."],
     ["<i>has undertaken to</i>","our own promise",
      "We <b>have undertaken to</b> maintain a four-week look-ahead."],
     ["<i>has committed to</i>","our own adoption of a code",
      "We <b>have committed to</b> the code of practice."],
     ["<i>falls to</i>","",""],["<i>is obliged to</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pf09-f7"]=lambda: f_part("147 compliance obligations",
    [("requirements, imposed",92,"#3b3b5c"),
     ("commitments from codes, standards, agreements",32,"#4a6b3b"),
     ("commitments from tender documents",23,"#7a3b2f")])
S["pf09-f8"]=lambda: f_icons([("statement","a statute"),("certificate","a permit"),
    ("signature","a contract clause"),("form","a tender promise"),
    ("badge","an obligation with an owner"),("stamp","a certificate with a cover note")],
    cols=3, numbered=False)
S["pf09-f9"]=lambda: f_realia(tbl("Obligation register · extract",
    "Six columns · three rows not met",
    ["#","Obligation","Type","Source","Owner","Met?"],
    [["1","weekly effluent sampling","<b>requirement</b>","discharge permit, cond. 7","quality",
      "<b>yes</b>"],
     ["2","monthly progress report","<b>requirement</b>","contract, clause 14","project office",
      "<b>yes</b>"],
     ["3","<b>four-week rolling look-ahead</b>","<b>commitment</b>",
      "<b>our tender, March yr 1, s.6</b>","planner","<b>no</b>"],
     ["4","<b>monthly environmental return</b>","<b>commitment</b>",
      "<b>our tender, March yr 1, s.9</b>","quality","<b>no</b>"],
     ["5","<b>named site liaison officer</b>","<b>commitment</b>",
      "<b>our tender, March yr 1, s.11</b>","<b>H. Sato, interim</b>","<b>no</b>"],
     ["6","adopted code of practice","commitment","board minute, yr 2","H. Sato","yes"]],
    note="<b>Sixty-one owners have never seen this page.</b>"), 700)
S["pf09-f10"]=lambda: f_scene(860,400,
    people=[("hana",110,174,{}),("sofia",320,176,{"seated":True}),
     ("wei",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("clipboard",250,148,0.24),("form",360,150,0.22),
     ("archive",520,148,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"IMPOSED AND CHOSEN",[("imposed","92"),("chosen","55")]),
    clockat=(700,34,22,4,0))
S["pf09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Register A","Legal only",
      "<p>Statutes, permits and contract clauses. Three columns. <b>No commitments.</b></p>"), 380),
    lambda w,h: f_realia(doc("Register B","Both kinds",
      "<p>Requirements and commitments together, with a <b>source column that includes tender "
      "documents</b>, an owner, and whether each is met.</p>"), 380),
    w=820, h=300, lt="IMPOSED", rt="ALL OF IT")
S["pf09-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The bid, year one","A sentence to win work",
      "<p><i>We will exceed the requirement by maintaining a four-week rolling look-ahead.</i></p>"),
      380),
    lambda w,h: f_realia(doc("The register, year six","An obligation",
      "<p><i>We have undertaken to maintain a four-week rolling look-ahead. Source: our tender, "
      "March year one, section 6. Owner: the planner. Met: no.</i></p>"), 380),
    w=820, h=300, lt="MARKETING", rt="AN OBLIGATION")
S["pf09-f13"]=lambda: f_realia(form("Register planner",
    [("The obligation",""),("Requirement or commitment?",""),("The source, with a section",""),
     ("The owner",""),("Is it met?",""),("The date last checked","")],
    note="Six boxes. Hand it to a partner; they ask where each one is written."), 560)
S["pf09-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("sofia",135,172,{}),("wei",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("anders",370,176,{"seated":True}),
     ("nkemelu",445,172,{}),("oksana",520,176,{"seated":True}),("bah",595,170,{}),
     ("priya",660,172,{}),("nour",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("stamp",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"IMPOSED AND CHOSEN",[("imposed","92"),("chosen","55")]),
    clockat=(278,34,22,4,0))
S["pf09-f15"]=lambda: f_chart([("yes and I have seen it",4),("yes somewhere",7),("no",11),
    ("I do not know",8),("only for legal requirements",5)])
S["pf09-f16"]=lambda: f_realia(doc("On a desk in November",
    "What was on it at six o'clock",
    "<p><b>An obligation register</b> of one hundred and forty-seven rows.</p>"
    "<p><b>An archived tender</b> from year one, three paragraphs highlighted.</p>"
    "<p><b>The client's copy</b> of the same tender.</p>"
    "<p><b>A draft certificate cover note.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The obligations we created ourselves are the ones nobody "
    "tracks and the ones hardest to explain away, because somebody else drafted a clause and we "
    "drafted the promise. A bid is written to win work by people whose job ends when it is won, the "
    "bid is archived by year, and the client keeps a copy in the folder they open during a dispute, "
    "and nothing in between turns a sentence into a register entry. I want one line on the cover of "
    "any certificate we obtain, stating that it certifies the system and not our compliance, because "
    "we could be certified next month with three breaches outstanding and somebody will quote it as "
    "the other thing within a year.</i></p>",
    "Six o'clock. Ninety-two imposed, fifty-five chosen, twenty-three from tenders."), 640)
