# -*- coding: utf-8 -*-
"""Keystone Book 4 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · Processes, Not a Method ----------------
S["d10-f1"]=lambda: f_icons([("handshake","a contract agreed"),("clipboard","a project plan"),
    ("danger","a risk register"),("folder","a configuration record"),
    ("essay","a requirements document"),("board","an architecture definition"),
    ("chain","an integration step"),("proof","a verification test"),
    ("transfer","handed to operations"),("recycle","a system disposed of")], cols=5)
S["d10-f2"]=lambda: f_scene(920,420, people=[("grace",330,176,{"seated":True}),
     ("nour",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("clipboard",395,194,0.26),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,10,20))
S["d10-f3"]=lambda: f_icons([("handshake","agreement processes"),
    ("councilbuilding","organizational project-enabling"),
    ("clipboard","technical management"),("board","technical processes"),
    ("tally","a declared subset"),("note","a tailoring decision")], cols=3)
S["d10-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The project","The weakest group","The missing process","Would anybody notice?"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one we found by reading a list:"), 620)
S["d10-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 46",
    "Platform team &middot; life cycle processes &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO/IEC/IEEE 15288 covers the processes in the life of a system. The "
    "current edition carries the year 2023. The previous one, 2015, defined thirty processes, and "
    "it is the edition most of our existing documents reference.</p>"
    + table_html(["Group","What it covers","Examples"],
      [["<b>agreement</b>","buying and supplying","acquisition, supply"],
       ["<b>organizational project-enabling</b>","what the company provides to every project",
        "infrastructure, portfolio, quality, knowledge management"],
       ["<b>technical management</b>","running the work",
        "planning, risk, <b>decision management</b>, configuration, "
        "<b>information management</b>, measurement"],
       ["<b>technical</b>","doing the work",
        "requirements, <b>architecture definition</b>, design, integration, verification, "
        "transition, operation, <b>disposal</b>"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>Tailoring, and what "
    "conformance means.</b> The standard expects tailoring. A two-person team does not perform a "
    "portfolio management process. So a conformance claim is not we do all thirty. It is a claim "
    "against a declared set, and a claim without a declaration attached means nothing.</p>"
    "<p><b>Why the list is worth reading anyway.</b> It gives thirty names that mean the same thing "
    "in two companies. And it tells you what you are not doing. We found that we had no decision "
    "management process and no information management process by reading a list, rather than by it "
    "going wrong.</p>"
    "<p><b>What the standard does not do.</b> It prescribes no order. It prescribes no life cycle "
    "model. It names outcomes rather than documents, so nothing in it requires a document with a "
    "particular title. And it does not say how to perform any process, because that is a method.</p>",
    "Source: ISO/IEC/IEEE 15288, Systems and software engineering &mdash; System life cycle "
    "processes, in the edition of 2023 and, for older references, the 2015 edition which defined "
    "thirty processes in four groups. The standard is a process reference: tailoring is expected, "
    "conformance is claimed against a declared and tailored process set, and it prescribes no life "
    "cycle model, no order, no documents and no methods."), 580)
S["d10-f6"]=lambda: f_realia(tbl("Word study","Reference and cohesion",
    ["Reference word","What it points to","Example"],
    [["this + noun","the thing just named","<b>This declaration</b> is what we conform to."],
     ["these + noun","the things just listed","<b>These four groups</b> cover the whole life."],
     ["such + noun","a thing of that kind","<b>Such a claim</b> means nothing on its own."],
     ["the former / the latter","the first / second of two","<b>The latter</b> is the better reason."],
     ["the above","&nbsp;","&nbsp;"],
     ["respectively","&nbsp;","&nbsp;"]]), 600)
S["d10-f7"]=lambda: f_chart([("performed and named",15),("performed but unnamed",6),
    ("not performed, not needed",5),("not performed, needed",2),
    ("nobody knows",2)], unit="processes")
S["d10-f8"]=lambda: f_icons([("handshake","an agreement"),("councilbuilding","an enabling process"),
    ("clipboard","a project controlled"),("board","technical work"),
    ("tally","a declared subset"),("note","a tailoring note")], cols=3)
S["d10-f9"]=lambda: f_realia(tbl("Declaration &middot; life cycle processes",
    "Platform team &middot; section 10.1 &middot; fifteen of thirty",
    ["Process","Group","Performed","Tailoring note"],
    [["acquisition","agreement","yes","one supplier, one contract template"],
     ["infrastructure management","enabling","yes","provided centrally; we do not plan it"],
     ["<b>portfolio management</b>","enabling","<b>no</b>","four people; nothing to balance"],
     ["risk management","technical management","yes","a register, reviewed monthly"],
     ["<b>decision management</b>","technical management","<b>no</b>",
      "<b>we record decisions; no process is declared</b>"],
     ["architecture definition","technical","yes","four diagram levels, section 4.1"]],
    note="We conform to this declaration, not to the standard. Two rows say no, with reasons, "
    "which is the part that took longest to get approved."), 680)
S["d10-f10"]=lambda: f_scene(960,430, people=[("nour",300,176,{"seated":True}),
     ("mei",390,172,{}),("grace",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("clipboard",385,194,0.26),
     ("note",455,194,0.24),("folder",520,196,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,10,30))
S["d10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Statement A", None,
        "<p>The company complies with the life cycle standard.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Statement B", None,
        "<p>Fifteen of thirty processes declared.<br>A tailoring note for each.<br>"
        "Two declared as not performed, with reasons.<br>"
        "We conform to this declaration, not to the standard.</p>"), w)[0:3],
    w=920, h=300)
S["d10-f12"]=lambda: f_realia(doc("Two statements", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Statement 1</b><br>"
    "We comply with the standard.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Statement 2</b><br>"
    "The declared set, the tailoring notes, the two processes declared as not performed, and what "
    "the claim is against.</p>",
    "Only the second one can be audited. The first one cannot even be checked."), 580)
S["d10-f13"]=lambda: f_realia(form("Conformance-note planner",
    [("What you claim",""),("The declared set, by group",""),
     ("Why tailoring is not a weakness",""),("The gaps, stated plainly",""),
     ("How they were found",""),("What the standard does not require","")]), 520)
S["d10-f14"]=lambda: f_scene(980,440,
    people=[("nour",55,176,{}),("grace",115,176,{"seated":True}),("mei",195,172,{}),
     ("adeel",280,176,{"seated":True}),("tomas",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("chiamaka",595,172,{}),
     ("lars",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("marek",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("clipboard",330,198,0.24),
     ("printer",430,196,0.3),("folder",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,11,0))
S["d10-f15"]=lambda: f_chart([("yes",2),("informally",7),("no",9),
    ("I do not know what that is",4),("we record decisions, no process",3)])
S["d10-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("clipboard",320,194,0.26),("folder",392,196,0.24),
     ("essay",460,196,0.24),("note",528,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,0))

# ---------------- Unit 11 · Four Things the License Asks ----------------
S["d11-f1"]=lambda: f_icons([("essay","a license file at the root"),
    ("refnumber","a one-line label in a header"),("note","a notice file"),
    ("stamp","a changed-by line on a file"),("quotemark","a copyright line"),
    ("certificate","a patent clause"),("danger","a disclaimer of warranty"),
    ("packet","a package being distributed"),("councilbuilding","used only inside"),
    ("door","a lawyer's door")], cols=5)
S["d11-f2"]=lambda: f_scene(920,420, people=[("grace",330,176,{"seated":True}),
     ("chiamaka",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,10,0))
S["d11-f3"]=lambda: f_icons([("refnumber","a one-line label"),("archive","a list of labels"),
    ("noentry","a deprecated label, replaced"),("essay","the license text"),
    ("note","attribution notices"),("door","a legal question")], cols=3)
S["d11-f4"]=lambda: f_realia(tbl("Team research", None,
    ["What we ship","License copy included","Notice file carried","Changed files marked"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The question for legal:"), 620)
S["d11-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 47",
    "Platform team &middot; license conditions &middot; page 1 of 1",
    "<p><b>The license.</b> The Apache License, Version 2.0, dated January 2004. It is permissive. "
    "It grants use, reproduction and distribution, in source or object form, with or without "
    "modification, including in something you sell.</p>"
    + table_html(["#","The condition on redistribution"],
      [["1","Give recipients a copy of the license."],
       ["2","Mark any file you changed, with a prominent notice."],
       ["3","Retain the copyright, patent, trademark and attribution notices that were there, "
        "except those that do not pertain to the derivative work."],
       ["4","If the work includes a NOTICE file, carry its attribution notices into what you "
        "distribute."]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>When they apply.</b> These are "
    "conditions on distribution. A project you run only inside your own company may not trigger "
    "them at all. Whether what you do counts as distribution is a legal question, and this note "
    "does not answer it.</p>"
    "<p><b>What the license does not ask.</b> It does not require you to publish your own source. "
    "It does not require a payment. It does not prohibit commercial use. You may add your own "
    "terms for your own modifications, so long as the work itself still complies.</p>"
    "<p><b>Short identifiers.</b> A short label is a standard identifier from a published list. A "
    "label is not a license, and shipping the label is not shipping the license. Some labels are "
    "deprecated. And a label records what somebody believed, which is evidence of an intention "
    "rather than proof of a legal position.</p>"
    "<p><b>Not legal advice.</b> Nothing in this note is legal advice. It is a reading of a license "
    "text by engineers, written so that our legal colleagues know exactly what we ship.</p>",
    "Source: the Apache License, Version 2.0, January 2004, Section 4 (Redistribution), which "
    "permits reproduction and distribution provided that four conditions are met. Short license "
    "identifiers come from a published license list and are labels rather than license texts or "
    "determinations. The license text does not define what counts as distribution in any given "
    "arrangement, and nothing here is legal advice."), 580)
S["d11-f6"]=lambda: f_realia(tbl("Word study","Conditions and provisos",
    ["Phrase","What it does","Example"],
    [["provided that","attaches a condition to a permission",
      "You may distribute, <b>provided that</b> you include the license."],
     ["so long as","the condition must keep holding",
      "Add your own terms, <b>so long as</b> the work complies."],
     ["unless","names the exception","Notices are retained <b>unless</b> they do not pertain."],
     ["in which case","the consequence of the exception",
      "This may not be distribution, <b>in which case</b> nothing applies."],
     ["on condition that","&nbsp;","&nbsp;"],
     ["subject to","&nbsp;","&nbsp;"]]), 600)
S["d11-f7"]=lambda: f_chart([("license file included",11),("notice file carried",4),
    ("changed files marked",0),("all four met",0),
    ("notices retained",38)], unit="of 41 components")
S["d11-f8"]=lambda: f_icons([("essay","a license file"),("stamp","a marked modified file"),
    ("quotemark","a retained copyright header"),("note","a notice file carried"),
    ("refnumber","a label in a header"),("door","a one-page question")], cols=3)
S["d11-f9"]=lambda: f_realia(tbl("Component list &middot; third-party",
    "Platform team &middot; section 11.1 &middot; eleven of forty-one",
    ["Component","Identifier","License file","Changed files marked","Notice carried"],
    [["queue client","Apache-2.0","<b>yes</b>","no","yes"],
     ["metrics agent","Apache-2.0","no","no","no"],
     ["date library","MIT","<b>yes</b>","no","&mdash;"],
     ["parser","Apache-2.0","no","<b>n/a</b>","no"],
     ["template engine","BSD-3-Clause","no","no","&mdash;"]],
    note="One question for legal, not forty-one. The fourth row is marked not applicable because "
    "we have not changed it, which is a claim somebody should check."), 700)
S["d11-f10"]=lambda: f_scene(960,430, people=[("chiamaka",300,176,{"seated":True}),
     ("grace",390,172,{}),("oksana",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",385,196,0.24),
     ("note",455,194,0.24),("clipboard",520,194,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,3,30))
S["d11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Question A", None,
        "<p>Are we allowed to use open source?</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Question B", None,
        "<p>Forty-one components, listed with identifiers.<br>"
        "One of four conditions met reliably.<br>"
        "Eleven license files of forty-one; no changed files marked.<br>"
        "One question: does hosting count as distribution?</p>"), w)[0:3],
    w=920, h=300)
S["d11-f12"]=lambda: f_realia(doc("Two pages", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 1</b><br>"
    "A three-line email asking whether the company may use open source.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Page 2</b><br>"
    "A component table, the four conditions, what is met, and one question.</p>",
    "The first page takes three weeks and comes back as a request for the second one."), 580)
S["d11-f13"]=lambda: f_realia(form("Brief planner",
    [("Why this page exists",""),("What we ship",""),("The conditions",""),
     ("The state today",""),("What we do regardless",""),("The one question","")]), 520)
S["d11-f14"]=lambda: f_scene(980,440,
    people=[("chiamaka",55,176,{}),("grace",115,176,{"seated":True}),("oksana",195,172,{}),
     ("mei",280,176,{"seated":True}),("adeel",360,172,{"seated":True}),
     ("nour",435,176,{"seated":True}),("ines",520,170,{}),("tomas",595,172,{}),
     ("lars",665,170,{}),("priya",735,172,{}),("ravi",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("marek",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,4,0))
S["d11-f15"]=lambda: f_chart([("a lawyer",4),("a manager",3),("an engineer guessing",9),
    ("nobody",5),("I do not know",4)])
S["d11-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("clipboard",318,194,0.24),("essay",388,196,0.24),
     ("note",455,194,0.24),("door",780,60,0.8),("lamp",180,140,0.42)],
    clockat=(120,46,22,5,0))

# ---------------- Unit 12 · Six Processes, and the Record ----------------
S["d12-f1"]=lambda: f_icons([("councilbuilding","a body setting direction"),
    ("clipboard","a plan being managed"),("pencil","a first concept"),
    ("balance","a concept judged against criteria"),("board","worked out in detail"),
    ("handshake","a team given what it needs"),("essay","a decision record"),
    ("archive","a superseded record"),("tally","a declared process set"),
    ("shelf","a shelf of records")], cols=5)
S["d12-f2"]=lambda: f_scene(920,420, people=[("mei",330,176,{"seated":True}),
     ("nour",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,0))
S["d12-f3"]=lambda: f_icons([("book","a working example"),("form","a template"),
    ("clipboard","a review checklist"),("headset","somebody to ask"),
    ("folder","a shared library"),("board","a diagram nobody uses")], cols=3)
S["d12-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The decision","The criteria","What was built to help teams","The record"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The process we skipped:"), 620)
S["d12-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 48",
    "Platform team &middot; architecture processes &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO/IEC/IEEE 42020, Architecture processes. The edition we hold "
    "carries the year 2019. Like the life cycle standard in note 46, it is a process reference "
    "rather than a method.</p>"
    + table_html(["Process","What it covers","Here"],
      [["<b>architecture governance</b>","setting direction and holding work to it",
        "a board, quarterly"],
       ["<b>architecture management</b>","planning and running the architecture work",
        "one architect, informally"],
       ["<b>architecture conceptualization</b>","forming candidate architectures","done well"],
       ["<b>architecture evaluation</b>","judging candidates against criteria",
        "done; criteria rarely written"],
       ["<b>architecture elaboration</b>","working the chosen one out in detail","done well"],
       ["<b>architecture enablement</b>","equipping those who must use it",
        "<b>not performed</b>"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>The one we do not perform.</b> "
    "Enablement gives the teams a working example, a template, a checklist and somebody to ask. "
    "Because nobody owns it, its absence does not look like a failure. It looks like six teams "
    "independently asking the same question.</p>"
    "<p><b>What it cost.</b> Four teams built the same adapter. The architecture was correct the "
    "whole time, and unusable without somebody to read it aloud. That somebody left in March. One "
    "week of work last year would have prevented three of the four.</p>"
    "<p><b>What carries all six.</b> Every one of these processes produces decisions. A decision "
    "not written down is a decision that will be taken again, differently, by somebody who does "
    "not know it was taken.</p>",
    "Source: ISO/IEC/IEEE 42020, Software, systems and enterprise &mdash; Architecture processes, "
    "in the edition held, dated 2019, which defines six architecture processes: governance, "
    "management, conceptualization, evaluation, elaboration and enablement. Like its life cycle "
    "companion it expects tailoring and prescribes no order, no document set and no method, and it "
    "does not specify how any process is to be performed."), 580)
S["d12-f6"]=lambda: f_realia(tbl("Word study","Eleven structures, in unit order",
    ["Unit","Structure","Example"],
    [["1","past simple / past perfect","We chose it because we <b>had already committed</b>."],
     ["2","cause and result","Four teams, <b>which is why</b> there are four services."],
     ["3","imperatives","<b>Store</b> configuration outside the code."],
     ["4","levels of detail","<b>At the container level</b>, three things talk to the store."],
     ["5","noun phrases","the <b>verifiability</b> of each requirement"],
     ["6","second conditional","<b>If</b> the network <b>were</b> reliable, this would be simpler."],
     ["7","third conditional","<b>If we had compensated</b>, the charge would have been reversed."],
     ["8","impossibility","It <b>cannot be guaranteed</b> in an asynchronous system."],
     ["9","metaphor markers","&nbsp;"],
     ["10","reference and cohesion","&nbsp;"],
     ["11","conditions and provisos","&nbsp;"]]), 640)
S["d12-f7"]=lambda: f_chart([("governance",3),("management",2),("conceptualization",5),
    ("evaluation",3),("elaboration",5),("enablement",0)], unit="out of five")
S["d12-f8"]=lambda: f_icons([("essay","a dated record"),("archive","a superseded stamp"),
    ("quotemark","alternatives, with reasons"),("balance","a cost written down"),
    ("magnifier","a named reader"),("shelf","a record taken down two years later")], cols=3)
S["d12-f9"]=lambda: f_realia(doc("ADR-061 &middot; Build an enablement kit for the service pattern",
    "Status: accepted &middot; 14 April &middot; supersedes nothing",
    "<p><b>Context.</b> Four teams have each built their own adapter for the same pattern. The "
    "pattern has been documented since 2023. The architect who could explain it left in March, and "
    "three of the four adapters were written after that.</p>"
    "<p><b>Decision.</b> One working example, one template, one review checklist, and a named "
    "contact. One week of one person's time. Enablement is added to our declared process set with "
    "that person as its owner.</p>"
    "<p><b>Alternatives.</b> A longer document, which nobody opened the last time. A training "
    "session, which does not survive the people in the room.</p>"
    "<p><b>Consequences.</b> Somebody must maintain the example, and it will be wrong within a "
    "year unless they do. A wrong example is worse than none. This commits us to a recurring cost "
    "for something nobody presents.</p>"
    "<p><b>Who will read this.</b> The next engineer who finds four adapters and assumes they are "
    "missing something, which happened twice in January.</p>"), 560)
S["d12-f10"]=lambda: f_scene(960,430, people=[("mei",300,176,{"seated":True}),
     ("nour",385,172,{}),("chiamaka",460,176,{"seated":True}),("grace",540,170,{})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",380,196,0.24),
     ("note",448,194,0.24),("board",600,146,0.46),("window",830,56,0.9)],
    clockat=(120,44,22,10,0))
S["d12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Record A", None,
        "<p>Context, and the decision.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Record B", None,
        "<p>Context, with a past perfect.<br>The decision.<br>"
        "Two alternatives, with a reason against each.<br>"
        "Three consequences, one against our own proposal.<br>"
        "A named future reader.</p>"), w)[0:3],
    w=920, h=300)
S["d12-f12"]=lambda: f_realia(doc("Two records", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Record 1</b><br>"
    "A context and a decision.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Record 2</b><br>"
    "The same, plus alternatives with reasons, a consequence against itself, and a named reader.</p>",
    "One of these is a sales document. The other one is evidence."), 580)
S["d12-f13"]=lambda: f_realia(form("Decision-record planner",
    [("Context",""),("Decision",""),("Alternatives considered, with reasons",""),
     ("Consequences, including one against yourself",""),("Who will read this, and when",""),
     ("Not in this record","")]), 520)
S["d12-f14"]=lambda: f_scene(980,440,
    people=[("mei",55,176,{}),("nour",115,176,{"seated":True}),("chiamaka",195,172,{}),
     ("grace",280,176,{"seated":True}),("adeel",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("tomas",595,172,{}),
     ("lars",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("marek",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,198,0.24),
     ("printer",430,196,0.3),("shelf",700,120,0.5),("cafe",840,198,0.38),
     ("table",620,0,0.9)],
    clockat=(250,34,22,5,0))
S["d12-f15"]=lambda: f_chart([("governance",3),("management",4),("conceptualization",1),
    ("evaluation",4),("elaboration",2),("enablement",11)])
S["d12-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",318,196,0.24),("clipboard",388,194,0.24),
     ("note",456,194,0.24),("shelf",700,120,0.46),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
