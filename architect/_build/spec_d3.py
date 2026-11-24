# -*- coding: utf-8 -*-
"""Keystone Book 4 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · What You Cannot Undo ----------------
S["d07-f1"]=lambda: f_icons([("walkroute","five steps in a row"),
    ("back","an undo step under each one"),("flashback","undoing in reverse"),
    ("waitscreen","a visible intermediate state"),("barrier","a step with no undo"),
    ("email","an email already sent"),("transfer","money already moved"),
    ("bandage","a compensation that failed"),("stamp","an approval on a correction"),
    ("signpost","the irreversible step, ordered last")], cols=5)
S["d07-f2"]=lambda: f_scene(920,420, people=[("ravi",330,176,{"seated":True}),
     ("priya",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,12,20))
S["d07-f3"]=lambda: f_icons([("walkroute","steps committed separately"),
    ("back","an undo beneath each"),("flashback","undoing in reverse"),
    ("waitscreen","an intermediate state, visible"),("barrier","no undo exists"),
    ("bandage","a retried compensation")], cols=3)
S["d07-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The flow","Steps","How many have an undo","The step that cannot be undone"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one we have never tested:"), 620)
S["d07-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 43",
    "Platform team &middot; long transactions &middot; page 1 of 1",
    "<p><b>The paper.</b> Hector Garcia-Molina and Kenneth Salem wrote it. It appeared at ACM "
    "SIGMOD in 1987. A long transaction becomes a sequence of short ones. Each short one commits "
    "on its own. Each one has a compensating transaction written for it.</p>"
    + table_html(["Step","Its compensation","Tested?"],
      [["1 reserve stock","release the reservation","yes"],
       ["2 take payment","refund the payment","yes"],
       ["3 allocate a courier","cancel the allocation","no"],
       ["4 send the confirmation email","<b>none exists</b>","&mdash;"],
       ["5 mark the order dispatched","reopen the order","no"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>Compensation is not "
    "rollback.</b> A rollback is the database undoing work nobody saw. A compensation is a new "
    "action, written by you, applied to a world that has already seen the first one. It can fail. "
    "It has to be retried. And some steps have no compensation at all.</p>"
    "<p><b>The ordering rule.</b> Put the step you cannot undo last. We had the email at position "
    "four, and four hundred customers were told their order had shipped before the courier step "
    "failed. Moving two lines would have prevented all of it.</p>"
    "<p><b>What the paper assumes.</b> It assumes the compensations exist. For a step that cannot "
    "be compensated it offers ordering advice and nothing more, because there is nothing more to "
    "offer.</p>",
    "Source: Hector Garcia-Molina and Kenneth Salem, Sagas, ACM SIGMOD, 1987. A long transaction "
    "is a sequence of steps, each with a compensating transaction; recovery runs compensations "
    "backward or completes forward. The paper assumes compensations exist and does not address "
    "steps that cannot be compensated beyond ordering them last."), 580)
S["d07-f6"]=lambda: f_realia(tbl("Word study","The third conditional",
    ["The unreal past condition","The unreal past consequence"],
    [["<b>If</b> we <b>had put</b> the email last","nobody <b>would have been</b> told"],
     ["<b>If</b> the compensation <b>had been</b> tested","it <b>would not have</b> failed twice"],
     ["<b>Had we ordered</b> the steps differently","the correction <b>would not have been</b> needed"],
     ["<b>If</b> we <b>had known</b> the courier limit","&nbsp;"],
     ["<b>If</b> somebody <b>had asked</b>","&nbsp;"]]), 600)
S["d07-f7"]=lambda: f_part("Seven steps, four kinds of ending",
    [("a written, tested compensation",3,"#2f6b4f"),("a written, untested one",2,"#b05a1e"),
     ("no compensation",1,"#7a4a86"),("irreversible",1,"#6b6861")])
S["d07-f8"]=lambda: f_icons([("walkroute","separate commits"),("back","an undo each"),
    ("flashback","in reverse"),("waitscreen","a visible middle state"),
    ("barrier","no undo"),("bandage","a retried compensation")], cols=3)
S["d07-f9"]=lambda: f_realia(tbl("Flow note &middot; order dispatch",
    "Platform team &middot; section 7.1",
    ["Step","Compensation","Tested","Irreversible"],
    [["1 reserve stock","release reservation","yes","no"],
     ["2 take payment","refund","yes","no"],
     ["3 allocate courier","cancel allocation","<b>no</b>","no"],
     ["4 confirmation email","<b>none</b>","&mdash;","<b>yes</b>"],
     ["5 mark dispatched","reopen order","<b>no</b>","no"]],
    note="Step 4 moves to position five this week. Two of the four compensations have never been "
    "run outside a test that was written by the person who wrote the compensation."), 660)
S["d07-f10"]=lambda: f_scene(960,430, people=[("ravi",300,176,{"seated":True}),
     ("priya",390,172,{}),("grace",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",385,196,0.24),
     ("email",455,196,0.22),("note",520,194,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,12,30))
S["d07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Flow A", None,
        "<p>Five steps, in order, with their endpoints.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Flow B", None,
        "<p>The same five steps.<br>A compensation for each, or none.<br>"
        "Tested or not, marked.<br>The irreversible one marked, and moved last.<br>"
        "Why the order is what it is.</p>"), w)[0:3],
    w=920, h=300)
S["d07-f12"]=lambda: f_realia(doc("Two flow documents", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Document 1</b><br>"
    "Five steps.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Document 2</b><br>"
    "Five steps with compensations, tested marks, irreversibility marks, and a sentence about the "
    "order.</p>",
    "The second document would have been one page and four hundred emails shorter."), 580)
S["d07-f13"]=lambda: f_realia(form("Flow planner",
    [("The steps, in order",""),("The compensation for each",""),("Tested or not",""),
     ("Irreversible or not",""),("Why the order is what it is",""),
     ("What is accepted as unfixable","")]), 520)
S["d07-f14"]=lambda: f_scene(980,440,
    people=[("ravi",55,176,{}),("priya",115,176,{"seated":True}),("grace",195,172,{}),
     ("mei",280,176,{"seated":True}),("adeel",360,172,{"seated":True}),
     ("lars",435,176,{"seated":True}),("ines",520,170,{}),("chiamaka",595,172,{}),
     ("tomas",665,170,{}),("oksana",735,172,{}),("nour",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("marek",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,198,0.24),
     ("printer",430,196,0.3),("email",500,198,0.22),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,1,0))
S["d07-f15"]=lambda: f_chart([("earlier steps are undone",5),("it is left half done",7),
    ("a person fixes it",6),("it cannot fail",1),("I do not know",4)])
S["d07-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,196,0.24),("email",390,196,0.22),
     ("note",455,194,0.24),("stamp",520,198,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,5,0))

# ---------------- Unit 8 · No Protocol Can Promise It ----------------
S["d08-f1"]=lambda: f_icons([("handshake","five machines, one agreed value"),
    ("barrier","one machine stopped, no sign why"),("timer","a delay with no limit"),
    ("clock","a clock crossed out"),("waitscreen","a protocol still waiting"),
    ("proof","eight pages of proof"),("signal","a message that may arrive"),
    ("balance","safety against liveness"),("square","a random choice"),
    ("handsup","the word impossible")], cols=5)
S["d08-f2"]=lambda: f_scene(920,420, people=[("oksana",330,176,{"seated":True}),
     ("lars",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("proof",395,194,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,4,50))
S["d08-f3"]=lambda: f_icons([("handshake","the same answer everywhere"),
    ("waitscreen","no answer yet"),("timer","an unbounded delay"),
    ("barrier","a silent crash"),("clock","a timeout"),("square","a random choice")], cols=3)
S["d08-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The system","What it agrees on","When it cannot","How long it waits"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one nobody can answer:"), 620)
S["d08-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 44",
    "Platform team &middot; what cannot be promised &middot; page 1 of 1",
    "<p><b>The paper.</b> Fischer, Lynch and Paterson, in the Journal of the ACM, 1985. In an "
    "asynchronous system with one faulty process, no deterministic protocol guarantees both "
    "agreement and termination. It is a proof, not an engineering opinion.</p>"
    + table_html(["What is kept","What is lost"],
      [["<b>safety</b> &mdash; nobody decides two different values",
        "<b>liveness</b> &mdash; a decision may not arrive"],
       ["the cluster does not contradict itself","the cluster may simply not answer"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>It stops; it does not lie.</b> "
    "This is the sentence worth memorizing. A correct consensus protocol under a long network "
    "pause is doing the right thing by waiting. The nineteen minutes of unavailability in March "
    "were not a bug in the cluster.</p>"
    "<p><b>What a timeout buys.</b> A timeout adds an assumption about delay that the model does "
    "not have. What you buy with it is a shorter wait, not certainty. Four weeks were spent tuning "
    "ours to remove an uncertainty that cannot be removed.</p>"
    "<p><b>What the result does not say.</b> The model assumes no bound at all on message delay, "
    "which is stronger than any real network. The proof says nothing about randomized protocols, "
    "nothing about failure detectors, and nothing about how long real clusters take.</p>",
    "Source: Michael J. Fischer, Nancy A. Lynch and Michael S. Paterson, Impossibility of "
    "Distributed Consensus with One Faulty Process, Journal of the ACM, 1985. In an asynchronous "
    "model with one faulty process no deterministic protocol guarantees both agreement and "
    "termination; what is lost is liveness, not safety. The model assumes unbounded message delay "
    "and the result addresses neither randomized protocols nor real-world timings."), 580)
S["d08-f6"]=lambda: f_realia(tbl("Word study","Impossibility and limits",
    ["Structure","How absolute","Example"],
    [["cannot be guaranteed","a proof, not a budget","Both <b>cannot be guaranteed</b> here."],
     ["no X can","absolute, with a scope","<b>No deterministic protocol can</b> do both."],
     ["it is impossible to","absolute","<b>It is impossible to</b> distinguish the two cases."],
     ["there is no way to","informal, absolute","<b>There is no way to</b> tell slow from stopped."],
     ["has not yet","&nbsp;","&nbsp;"],
     ["does not mean","&nbsp;","&nbsp;"]]), 600)
S["d08-f7"]=lambda: f_timeline([(0.08,"normal","leader elected"),
    (0.3,"the pause begins","no leader"),(0.76,"the pause ends","leader elected")],
    nowx=0.53, w=900)
S["d08-f8"]=lambda: f_icons([("handshake","one agreed value"),("waitscreen","still waiting"),
    ("timer","unbounded delay"),("barrier","a silent crash"),("clock","a timeout"),
    ("square","a random choice")], cols=3)
S["d08-f9"]=lambda: f_realia(tbl("Agreement note &middot; the metadata cluster",
    "Platform team &middot; section 8.1",
    ["Question","Our answer"],
    [["What does it agree on?","which node holds the write lease"],
     ["What assumption have we added?","a message arrives within 1.5 seconds"],
     ["What happens when that fails?","no lease is granted; writes are refused"],
     ["How long does it wait?","until a majority responds; in March, 19 minutes"]],
    note="Safety was kept throughout. No node held two leases and no write was accepted twice. "
    "What we lost was liveness, which is what the 1985 result says we would lose."), 620)
S["d08-f10"]=lambda: f_scene(960,430, people=[("oksana",300,176,{"seated":True}),
     ("lars",390,172,{}),("mei",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("dashboard",300,142,0.42),("essay",385,196,0.24),
     ("proof",455,196,0.22),("note",520,194,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,5,0))
S["d08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report A", None,
        "<p>Cluster failure. Nineteen minutes of unavailability.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Report B", None,
        "<p>Safety kept: no two leases, no double write.<br>"
        "Liveness lost: 19 minutes, no decision.<br>"
        "The assumption we added: 1.5 seconds.<br>"
        "A proof from 1985 says this cannot be removed.<br>"
        "What a shorter timeout buys: a shorter wait.</p>"), w)[0:3],
    w=920, h=300)
S["d08-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The cluster provides consensus.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "What it agrees on, the assumption it relies on, what happens when that fails, and how long it "
    "waits.</p>",
    "Only one of these tells an on-call engineer what they are looking at."), 580)
S["d08-f13"]=lambda: f_realia(form("Agreement-note planner",
    [("What the system agrees on",""),("Safety: what cannot happen",""),
     ("Liveness: what may not arrive",""),("The assumption you added",""),
     ("What happens when it fails",""),("What to do when there is no decision","")]), 520)
S["d08-f14"]=lambda: f_scene(980,440,
    people=[("oksana",55,176,{}),("lars",115,176,{"seated":True}),("mei",195,172,{}),
     ("nour",280,176,{"seated":True}),("adeel",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("tomas",665,170,{}),("chiamaka",735,172,{}),("ravi",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("marek",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("dashboard",330,146,0.4),
     ("printer",430,196,0.3),("proof",500,198,0.22),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,5,30))
S["d08-f15"]=lambda: f_chart([("waits",6),("refuses requests",5),("serves stale data",4),
    ("has never happened",2),("I do not know",6)])
S["d08-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("dashboard",315,142,0.4),("essay",395,196,0.24),
     ("proof",462,196,0.22),("note",530,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 9 · The Metaphor That Got Reversed ----------------
S["d09-f1"]=lambda: f_icons([("book","a program shipped to learn"),
    ("iron","a structure reshaped afterwards"),("coins","a sum borrowed"),
    ("overdraft","interest accumulating"),("calendar","a repayment schedule"),
    ("bank","a creditor"),("handsup","the phrase used loosely"),
    ("spreadsheet","an attempt to price a code base"),
    ("quotemark","a correction published later"),("essay","four sentences instead")], cols=5)
S["d09-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("chiamaka",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("spreadsheet",395,196,0.24),
     ("note",465,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,11,20))
S["d09-f3"]=lambda: f_icons([("book","shipped in order to learn"),
    ("iron","reshaped after learning"),("danger","shipped knowing it is wrong"),
    ("overdraft","harder to change each month"),("calendar","a repayment with no date"),
    ("bank","an empty creditor box")], cols=3)
S["d09-f4"]=lambda: f_realia(tbl("Team research", None,
    ["Where the phrase was used","What was actually done","Which reading","A date?"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that meant nothing at all:"), 620)
S["d09-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 45",
    "Platform team &middot; a metaphor, read twice &middot; page 1 of 1",
    "<p><b>The source.</b> Ward Cunningham, in an experience report at OOPSLA in 1992. He later "
    "corrected the common reading in public, and said he had never been in favor of writing code "
    "poorly. Both the report and the correction are short.</p>"
    + table_html(["What he described","What the phrase is used for here"],
      [["shipping in order to learn","shipping something known to be wrong"],
       ["then consolidating what was learned","ordinary untidy code"],
       ["a deliberate, dated choice","anything anybody dislikes"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>Where the comparison "
    "breaks.</b> There is no principal. There is no rate. There is no schedule and there is no "
    "creditor. One board paper tried to put a figure on ours and was withdrawn, because the "
    "spreadsheet needed four numbers that do not exist.</p>"
    "<p><b>Four sentences that replace it.</b> What we did. What we now know. What reshaping would "
    "cost, in weeks. Who is paying until then. We asked four people in one room what the phrase "
    "meant and got four answers, which is a sign that it is doing no work.</p>"
    "<p><b>What the metaphor is good for.</b> Explaining a decision to somebody who does not write "
    "software. That is what it was for in 1992. It is a way of agreeing without specifying, and in "
    "a plan that is a defect rather than a feature.</p>",
    "Source: Ward Cunningham, The WyCash Portfolio Management System, an experience report at "
    "OOPSLA 1992, and his later public correction. The metaphor describes shipping to learn and "
    "then consolidating; it has no principal, no rate, no schedule and no creditor, and provides "
    "no way to compute any quantity."), 580)
S["d09-f6"]=lambda: f_realia(tbl("Word study","Metaphor and literal language",
    ["Marker","What it signals","Example"],
    [["in effect","a figure of speech, flagged","<b>In effect</b>, we are paying for it monthly."],
     ["so to speak","the same, informal","The invoice module is mortgaged, <b>so to speak</b>."],
     ["strictly speaking","the literal correction","<b>Strictly speaking</b>, there is no principal."],
     ["the metaphor breaks down at","names the failure point",
      "<b>The metaphor breaks down at</b> the schedule."],
     ["what we actually mean is","&nbsp;","&nbsp;"],
     ["literally","&nbsp;","&nbsp;"]]), 600)
S["d09-f7"]=lambda: f_chart([("shipping to learn, then reshaping",2),
    ("shipping something known to be wrong",5),("ordinary untidy code",11),
    ("a decision we would repeat",1),("nobody could say",7)], unit="uses of the phrase")
S["d09-f8"]=lambda: f_icons([("book","shipping to learn"),("iron","reshaping after"),
    ("danger","knowingly wrong"),("overdraft","harder each month"),
    ("calendar","no repayment date"),("bank","no creditor")], cols=3)
S["d09-f9"]=lambda: f_realia(tbl("Plan entry &middot; the invoice module",
    "Platform team &middot; section 9.1 &middot; no metaphor used",
    ["What we did","What we now know","What reshaping costs","Who pays until then"],
    [["shipped one table for three invoice types, in 2023",
      "the three types need different rules","3 weeks, 41 rows migrated",
      "two support staff, about 6 hours a week"],
     ["kept the old column names","four of them now mean something else",
      "1 week","every new engineer, in their first month"],
     ["skipped the reconciliation report","we cannot prove the totals match",
      "2 weeks","finance, at every month end"],
     ["left one manual step","it is done by one person","4 days","that one person"]],
    note="Four rows, four weeks, and four groups of people named. The previous version of this "
    "entry was five words long and contained a metaphor."), 680)
S["d09-f10"]=lambda: f_scene(960,430, people=[("adeel",300,176,{"seated":True}),
     ("chiamaka",390,172,{}),("grace",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("note",385,194,0.24),
     ("note",430,194,0.24),("spreadsheet",500,196,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,11,30))
S["d09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Entry A", None,
        "<p>Pay down technical debt in the invoice module.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Entry B", None,
        "<p>What we did: one table for three invoice types.<br>"
        "What we now know: they need different rules.<br>"
        "Reshaping: 3 weeks, 41 rows migrated.<br>"
        "Who pays until then: two support staff, 6 hours a week.</p>"), w)[0:3],
    w=920, h=300)
S["d09-f12"]=lambda: f_realia(doc("Two plan entries", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Entry 1</b><br>"
    "The module, and the phrase.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Entry 2</b><br>"
    "What was done, what is now known, the cost in weeks and rows, and who is affected until "
    "then.</p>",
    "The first entry can be approved by anybody. The second can be argued with."), 580)
S["d09-f13"]=lambda: f_realia(form("Plan-entry planner",
    [("What we did",""),("What we now know",""),("What reshaping costs",""),
     ("Who is paying until then",""),("What part of the comparison holds",""),
     ("Where it breaks down","")]), 520)
S["d09-f14"]=lambda: f_scene(980,440,
    people=[("adeel",55,176,{}),("chiamaka",115,176,{"seated":True}),("grace",195,172,{}),
     ("mei",280,176,{"seated":True}),("nour",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("tomas",595,172,{}),
     ("lars",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("marek",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("note",330,198,0.22),
     ("printer",430,196,0.3),("spreadsheet",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,0))
S["d09-f15"]=lambda: f_chart([("shipping to learn, then fixing",4),
    ("knowingly shipping something bad",5),("any old code",8),
    ("a decision we would repeat",1),("nobody agrees",5)])
S["d09-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("note",310,194,0.22),("note",355,194,0.22),
     ("essay",425,196,0.24),("spreadsheet",495,196,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,3,0))
