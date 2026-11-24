# -*- coding: utf-8 -*-
"""Throughline Book 1 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 ----------------
S["pa07-f1"]=lambda: f_icons([("walkroute","four stages in a line"),
    ("barrier","a gate between two stages"),("star","a milestone"),
    ("meeting","a decision at a gate"),("calendar","one date circled"),
    ("signature","a stage signed off"),("folder","a forty-page document"),
    ("timer","two days to read it"),("refnumber","a document number"),
    ("book","two editions, nine years apart")],4)
S["pa07-f2"]=lambda: f_scene(900,420, people=[("haddad",300,172,{}),("okonjo",400,172,{})],
    props=[("board",120,78,0.8),("table",460,0,1.08),("folder",530,196,0.26),
     ("window",800,56,0.92)],
    board=(700,22,190,112,"FOUR STAGES",[("start-up","gate 1"),("design","gate 2"),
      ("build","gate 3")]),
    clockat=(650,44,22,10,0))
S["pa07-f3"]=lambda: f_icons([("note","start-up"),("clipboard","design"),
    ("crane","build"),("handshake","handover"),
    ("barrier","a gate, three ways out"),("calendar","a milestone")],3)
S["pa07-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The project","The stages","Where the gate is","Who decides"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The gate where nobody could say no: ______________________"), 640)
S["pa07-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 7",
    "Project office &middot; stages and gates &middot; page 1 of 1",
    "<p><b>Two documents, one number.</b> <b>ISO 21500:2021</b> is <i>Context and concepts</i>. "
    "<b>ISO 21500:2012</b> was a different document, with a different job. The number alone names "
    "nothing. <b>The edition is part of the citation.</b></p>"
    + table_html(["Stage","Ends with","Gate decided by"],
      [["<b>1 start-up</b>","the brief","the sponsor"],
       ["<b>2 design</b>","the drawings","the board"],
       ["<b>3 build</b>","the tests","the board"],
       ["<b>4 handover</b>","the manuals","the client"]])
    + "<p><b>A gate has three answers.</b> <b>Go.</b> <b>Stop.</b> <b>Go with conditions</b> "
    "&mdash; and the third one is only an answer if it carries a <b>date</b> and a <b>name</b>."
    "</p>"
    "<p><b>What went wrong at gate 2.</b> The design document was <b>forty pages</b>. It arrived "
    "<b>two days</b> before the meeting. The board had <b>eleven</b> pages read between them. The "
    "date was met and the decision was not made.</p>"
    "<p><b>So one date became three.</b> <b>Finished by the 8th. Circulated by the 10th. Decided "
    "on the 17th.</b> If the work is late, the gate moves. We do not keep the gate and shorten "
    "the reading.</p>",
    "Source: ISO 21500:2021, Project, programme and portfolio management &mdash; Context and "
    "concepts. The same number named a different document in 2012, so the edition is part of the "
    "citation. It is guidance on concepts and contains no requirements, no stages and no gate "
    "criteria."), 600)
S["pa07-f6"]=lambda: f_realia(tbl("Promises and deadlines", None,
    ["The structure","What it says","An example"],
    [["<b>will</b>","a promise","I <b>will</b> circulate it."],
     ["<b>will not</b>","a promise not to","We <b>will not</b> shorten the reading."],
     ["<b>by</b>","a deadline","Circulated <b>by</b> the 10th."],
     ["<b>on</b>","a fixed day","Decided <b>on</b> the 17th."],
     ["<b>going to</b>","&nbsp;","&nbsp;"],
     ["present simple, for a timetable","&nbsp;","&nbsp;"]],
    note="<b>by</b> the 10th and <b>on</b> the 17th are two different promises, and a gate needs "
    "both."), 620)
S["pa07-f7"]=lambda: f_chart([("continue",21),("continue with changes",9),("stop",3),
    ("postponed to the next meeting",6),("no decision recorded",2)], unit="gate decisions")
S["pa07-f8"]=lambda: f_icons([("walkroute","four stages"),("barrier","a gate"),
    ("calendar","a diamond on a date"),("signature","a stage signed"),
    ("meeting","three ways out of a gate"),("refnumber","a document number")],3)
S["pa07-f9"]=lambda: f_realia(doc("Stage plan &middot; pump station",
    "Four stages. Three dates each. One name.",
    table_html(["Stage","Finished by","Circulated by","Decided on","Who decides"],
      [["<b>1 start-up</b>","12 Jan","14 Jan","21 Jan","G. Okonjo"],
       ["<b>2 design</b>","8 Jun","10 Jun","17 Jun","the board"],
       ["<b>3 build</b>","4 Sep","6 Sep","13 Sep","the board"],
       ["<b>4 handover</b>","20 Sep","22 Sep","26 Sep","the client"]])
    + "<p><b>Milestones:</b> first concrete <b>4 Mar</b> &middot; pumps on site <b>18 Mar</b> "
    "&middot; witness test begins <b>6 Sep</b>.</p>",
    "<b>If the work is late, the gate moves.</b> Last June we kept the gate and shortened the "
    "reading, and the board approved forty pages on the strength of eleven."), 660)
S["pa07-f10"]=lambda: f_scene(940,430, people=[("haddad",290,172,{}),
     ("okonjo",400,176,{"seated":True}),("marek",520,176,{"seated":True})],
    props=[("board",100,76,0.72),("table",250,0,1.2),("folder",380,196,0.28),
     ("note",470,198,0.2),("computer",545,142,0.4),("window",830,56,0.9)],
    board=(720,22,190,112,"GATE 2",[("pages","40"),("read","11"),("days","2")]),
    clockat=(680,44,22,10,30))
S["pa07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Stage plan, as written", None, ["Stage","Gate"],
      [["start-up","21 Jan"],["design","17 Jun"],["build","13 Sep"],
       ["handover","26 Sep"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Stage plan, rewritten", None,
      ["Stage","Finished","Circulated","Decided","Who"],
      [["start-up","12 Jan","14 Jan","21 Jan","G. Okonjo"],
       ["design","8 Jun","10 Jun","17 Jun","board"],
       ["build","4 Sep","6 Sep","13 Sep","board"],
       ["handover","20 Sep","22 Sep","26 Sep","client"]]), w)[0:3],
    w=960, h=270)
S["pa07-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("One date", None,
        "<p><b>Design gate: 17 June.</b></p>"
        "<p style='color:#6b6861;font-size:13px'>Which means the document can arrive on the "
        "16th, and in June it did.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Three dates", None,
        "<p><b>Finished by 8 June.</b><br><b>Circulated by 10 June.</b><br>"
        "<b>Decided on 17 June.</b><br>"
        "<b>Decided by:</b> the board, four named members.</p>"
        "<p style='color:#6b6861;font-size:13px'>Seven days to read forty pages. If the work is "
        "late, the gate moves.</p>"), w)[0:3],
    w=900, h=260)
S["pa07-f13"]=lambda: f_realia(form("Gate planner",
    [("The finish date",""),("The circulation date",""),("The gate date",""),
     ("Who decides",""),("The three answers",""),("The rule if the work is late","")]), 520)
S["pa07-f14"]=lambda: f_scene(1000,450,
    people=[("hanna",60,176,{}),("haddad",135,172,{}),("okonjo",210,176,{"seated":True}),
     ("marek",290,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("wei",445,172,{}),("lars",520,176,{"seated":True}),("karin",595,170,{}),
     ("ines",660,172,{}),("ravi",725,170,{}),("sofia",790,172,{}),
     ("junseo",850,170,{}),("mei",910,172,{}),("tomas",960,174,{})],
    props=[("desk",95,0,1.1),("board",155,84,0.66),("computer",335,142,0.4),
     ("printer",430,196,0.3),("folder",548,198,0.24),("table",645,0,1.0),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,200,112,"THREE DATES",[("finished","8th"),("circulated","10th"),
      ("decided","17th")]),
    clockat=(258,34,22,11,0))
S["pa07-f15"]=lambda: f_chart([("over a week",4),("three to seven days",6),
    ("one or two days",9),("the papers arrive at the meeting",5),
    ("we have no gates",3)])
S["pa07-f16"]=lambda: f_realia(doc("On a desk in June",
    "What was on it at five o'clock",
    "<p><b>The design document.</b> <b>Forty pages</b>; the cover sheet dated the <b>15th</b>, "
    "for a meeting on the <b>17th</b>.</p>"
    "<p><b>The new plan.</b> One page, <b>three dates</b> per stage.</p>"
    "<p><b>A note.</b> <b>Eleven pages</b> read between four people.</p>"
    "<p><b>A note of three sentences.</b> <i>The board did not fail to read it; they were given "
    "two days and they are not slow readers. A gate that is met on the date and unread is worse "
    "than a gate that moves, because it produces a decision with a signature on it and nothing "
    "behind it. From now on the work being late moves the gate, and I will be the one who says so "
    "out loud.</i></p>",
    "Five o'clock. Three dates per stage, and a rule about which one moves."), 580)

# ---------------- Unit 8 ----------------
S["pa08-f1"]=lambda: f_icons([("spreadsheet","a register of five rows"),
    ("worried","an uncertain event"),("note","an objective, one line"),
    ("scales","how likely"),("calendar","the effect on a date"),
    ("badge","an owner's name"),("firstaid","an action to reduce it"),
    ("happy","a good surprise"),("danger","a matrix of squares"),
    ("book","guidelines, not requirements")],4)
S["pa08-f2"]=lambda: f_scene(900,420, people=[("nadia",320,176,{"seated":True}),
     ("yara",420,176,{"seated":True})],
    props=[("table",250,0,1.22),("spreadsheet",385,196,0.24),("board",110,80,0.74),
     ("window",800,56,0.92)],
    board=(700,22,190,112,"REGISTER",[("rows","61"),("one word","22")]),
    clockat=(640,44,22,9,20))
S["pa08-f3"]=lambda: f_icons([("worried","what might happen"),("scales","how likely"),
    ("calendar","the effect on a date"),("badge","an owner"),
    ("firstaid","an action, weekly"),("happy","a good surprise")],3)
S["pa08-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The row as written","What might happen","How likely","The effect"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The row that is only one word: ______________________"), 640)
S["pa08-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 8",
    "Project office &middot; what might happen &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO 31000 is dated <b>2018</b>. It is <b>guidelines</b>. It is "
    "<b>not</b> for certification. Its definition of risk is one line: <b>the effect of "
    "uncertainty on objectives</b>.</p>"
    "<p><b>Two things in that line.</b> An <b>effect</b> can be good or bad. And it is on an "
    "<b>objective</b>, so a risk with no objective attached is not a risk; it is a worry.</p>"
    + table_html(["A risk needs","Our row"],
      [["<b>what might happen</b>","the racking supplier misses the March delivery"],
       ["<b>how likely</b>","likely &mdash; he has missed two of four dates this year"],
       ["<b>the effect</b>","the September handover moves by about three weeks"]])
    + "<p><b>What we found.</b> Our register had <b>61 rows</b>. <b>Twenty-two</b> of them were "
    "<b>one word</b>: <i>weather</i>, <i>suppliers</i>, <i>staff</i>. The board asked for the top "
    "five and we could not give them one, because you cannot rank single words.</p>"
    "<p><b>The matrix.</b> We used a five-by-five grid of colors. It is <b>not in ISO 31000 at "
    "all</b>. Ours was copied from a <b>2019 training course</b> and nobody here knows who drew "
    "it.</p>"
    "<p><b>One more thing.</b> An effect can be <b>good</b>. In March the harbour closed early "
    "and gave us nine free days. It was <b>the first good surprise written into the register in "
    "six years</b>.</p>",
    "Source: ISO 31000:2018, Risk management &mdash; Guidelines. It gives guidelines and is not "
    "intended for certification; it contains no risk matrix, no scoring scheme and no thresholds, "
    "and it does not tell you how many rows a register should have."), 600)
S["pa08-f6"]=lambda: f_realia(tbl("How certain?", None,
    ["The word","How certain","An example"],
    [["<b>will</b>","certain","The pumps <b>will</b> arrive on the 18th."],
     ["<b>is likely to</b>","probable","He <b>is likely to</b> miss March."],
     ["<b>may</b> / <b>might</b>","possible","It <b>might</b> cost three weeks."],
     ["<b>probably not</b>","improbable","The harbour <b>probably will not</b> close."],
     ["<b>will not</b>","&nbsp;","&nbsp;"],
     ["<b>possibly</b>","&nbsp;","&nbsp;"]],
    note="A register full of <i>may</i> and no evidence is a list of feelings."), 600)
S["pa08-f7"]=lambda: f_chart([("all three parts written",14),("two parts",17),
    ("one part",8),("only a single word",22),("no owner",19)], unit="rows")
S["pa08-f8"]=lambda: f_icons([("worried","what might happen"),("scales","how likely"),
    ("calendar","the effect on a date"),("badge","an owner"),
    ("firstaid","a weekly action"),("happy","a good surprise")],3)
S["pa08-f9"]=lambda: f_realia(doc("Risk register &middot; extract",
    "Five rows, written in three parts each",
    table_html(["What might happen","How likely","Effect","Owner","Action"],
      [["The racking supplier misses the March delivery","<b>likely</b> &mdash; 2 of 4 dates "
        "missed this year","handover moves ~3 weeks","K. Lind","call weekly; second quote by "
        "14 Mar"],
       ["The harbour inspector is unavailable in June","<b>possible</b>","testing slips to July",
        "N. Haddad","book both the 4th and the 11th"],
       ["Wet autumn floods the yard","<b>unlikely</b> &mdash; twice in 20 years",
        "two weeks lost","W. Zhao","open the overflow route by 1 Oct"],
       ["Two packages order the same fittings","<b>happened</b> &mdash; now an issue",
        "4,000 spent twice","J. Oyelaran","exclusion lines on all 12 cards"],
       ["<b>The harbour closes early for dredging</b>","<b>possible</b>",
        "<b>nine days gained</b>","N. Haddad","<b>have a crew ready to take them</b>"]]),
    "<b>The last row is a good surprise.</b> It was the first one anybody had written in this "
    "register in six years, and the standard's own definition has allowed it all along."), 700)
S["pa08-f10"]=lambda: f_scene(940,430, people=[("nadia",290,172,{}),
     ("yara",400,176,{"seated":True}),("marek",520,176,{"seated":True})],
    props=[("table",240,0,1.2),("computer",370,142,0.42),("spreadsheet",460,196,0.24),
     ("note",540,198,0.2),("window",830,56,0.9)],
    board=(720,22,190,112,"THE MATRIX",[("in ISO 31000","no"),("from","a 2019 course")]),
    clockat=(680,44,22,9,30))
S["pa08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Register, as kept", None, ["Row"],
      [["weather"],["suppliers"],["staff"],["access"],["permits"],["ground conditions"],
       ["client decisions"],["delivery"]],
      note="Eight rows, eight words. Nothing here can be ranked, owned or acted "
      "on."), w)[0:3],
    lambda w,h: f_realia(tbl("Register, rewritten", None, ["What might happen","Likely","Owner"],
      [["Racking supplier misses March","likely","K. Lind"],
       ["Inspector unavailable in June","possible","N. Haddad"],
       ["Wet autumn floods the yard","unlikely","W. Zhao"],
       ["Same fittings ordered twice","happened","J. Oyelaran"],
       ["<b>Harbour closes early &mdash; 9 days gained</b>","possible","N. Haddad"]]), w)[0:3],
    w=960, h=280)
S["pa08-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Row, as written", None,
        "<p><b>Pump delays.</b></p>"), w)[0:3],
    lambda w,h: f_realia(doc("Row, rewritten", None,
        "<p><b>What might happen:</b> the racking supplier misses the March delivery.<br>"
        "<b>How likely:</b> likely &mdash; he has missed <b>two of four</b> dates this year.<br>"
        "<b>Effect:</b> the <b>September handover</b> moves by about <b>three weeks</b>.<br>"
        "<b>Owner:</b> K. Lind. <b>Action:</b> call weekly; second quote by <b>14 March</b>.</p>"
        ), w)[0:3],
    w=920, h=250)
S["pa08-f13"]=lambda: f_realia(form("Risk planner",
    [("What might happen",""),("How likely, with evidence",""),
     ("The effect, on which objective",""),("The owner",""),("The action, and when",""),
     ("One good surprise","")]), 520)
S["pa08-f14"]=lambda: f_scene(1000,450,
    people=[("ida",60,176,{}),("nadia",135,172,{}),("yara",210,176,{"seated":True}),
     ("marek",290,172,{"seated":True}),("haddad",370,176,{"seated":True}),
     ("wei",445,172,{}),("oyelaran",520,176,{"seated":True}),("karin",595,170,{}),
     ("ines",660,172,{}),("ravi",725,170,{}),("sofia",790,172,{}),
     ("junseo",850,170,{}),("mei",910,172,{}),("nkemelu",960,174,{})],
    props=[("desk",95,0,1.1),("board",155,84,0.66),("computer",335,142,0.4),
     ("printer",430,196,0.3),("spreadsheet",548,198,0.22),("table",645,0,1.0),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,200,112,"61 ROWS",[("three parts","14"),("one word","22"),("good news","1")]),
    clockat=(258,34,22,10,0))
S["pa08-f15"]=lambda: f_chart([("none",6),("a few",9),("about half",5),("nearly all",3),
    ("we have no register",4)])
S["pa08-f16"]=lambda: f_realia(doc("On a desk in May",
    "What was on it at five o'clock",
    "<p><b>The register.</b> Sixty-one rows; <b>twenty-two</b> marked, each one a single "
    "word.</p>"
    "<p><b>A five-by-five matrix.</b> Printed in color, with <i>2019 course</i> written on it in "
    "pencil.</p>"
    "<p><b>One row written out in full.</b> Three parts, an owner, an action and a date.</p>"
    "<p><b>A note of three sentences.</b> <i>The board asked for the top five risks and I could "
    "not give them one, which was not their fault and not the register's; you cannot rank the "
    "word weather. The matrix we have trusted for six years is not in the standard at all, and "
    "nobody here can tell me who drew it. The good news row in March is the first one anybody has "
    "written in six years, and the definition allowed it the whole time.</i></p>",
    "Five o'clock. One row in full, and a question about where the matrix came from."), 580)

# ---------------- Unit 9 ----------------
S["pa09-f1"]=lambda: f_icons([("handshake","a polite first meeting"),
    ("angry","two people disagreeing"),("flipchart","agreeing a way of working"),
    ("meeting","a team working smoothly"),("deadline","a last day"),
    ("badge","a new member joining"),("note","five one-line rules"),
    ("signature","six initials"),("book","a 1965 paper"),
    ("review","a review of fifty studies")],4)
S["pa09-f2"]=lambda: f_scene(960,440, people=[("nadia",300,172,{"seated":True}),
     ("priya",385,172,{"seated":True}),("lars",465,176,{"seated":True}),
     ("wei",545,172,{"seated":True}),("sofia",625,176,{"seated":True}),
     ("ravi",705,172,{"seated":True})],
    props=[("flipchart",95,70,0.74),("table",330,0,1.1),("note",430,196,0.2),
     ("window",840,56,0.88)],
    board=(760,22,180,118,"FOUR WORDS",[("forming","&nbsp;"),("storming","&nbsp;"),("norming","&nbsp;"),("performing","&nbsp;")]),
    clockat=(660,44,22,2,10))
S["pa09-f3"]=lambda: f_icons([("handshake","a polite first meeting"),
    ("angry","an argument"),("flipchart","rules on a flip chart"),
    ("meeting","a team working"),("deadline","a last day"),
    ("badge","a new member joining")],3)
S["pa09-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The team","When the first disagreement was","Were rules agreed","Were they written down"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The team that never argued: ______________________"), 660)
S["pa09-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 9",
    "Project office &middot; a new team &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> <b>Bruce W. Tuckman</b> published <i>Developmental sequence "
    "in small groups</i> in the <b>Psychological Bulletin</b> in <b>1965</b>. It is a "
    "<b>review</b> of about <b>fifty</b> studies. A fifth stage, <b>adjourning</b>, was added by "
    "<b>Tuckman and Jensen in 1977</b>.</p>"
    + table_html(["Stage","What it looks like here"],
      [["<b>forming</b>","polite; everybody agrees; nothing is decided"],
       ["<b>storming</b>","the first real disagreement, out loud"],
       ["<b>norming</b>","the rules get written down"],
       ["<b>performing</b>","the work goes faster than the plan"]])
    + "<p><b>What the paper was not.</b> Most of the groups in it were <b>therapy and laboratory "
    "groups</b>, not project teams. Tuckman did not claim otherwise. The four words are useful "
    "and they are not a law.</p>"
    "<p><b>What happened here.</b> <b>Two weeks</b> of politeness. Then a <b>two-hour "
    "argument</b> on <b>1 April</b> about who could move a date. It was the most useful two hours "
    "of the project.</p>"
    "<p><b>What came out of it.</b> <b>Five rules</b>, one line each, on one page, with a date "
    "and <b>six initials</b>. Nobody has looked at the page since and everybody can say what is "
    "on it.</p>"
    "<p><b>One more thing.</b> In July <b>one new joiner</b> put a different team back about "
    "<b>two days</b> into stage two. That is a cost of hiring that no plan has a line for.</p>",
    "Source: Bruce W. Tuckman, Developmental sequence in small groups, Psychological Bulletin, "
    "1965; the fifth stage was added in Tuckman and Jensen, 1977. It is a review of about fifty "
    "studies, most of them therapy and laboratory groups rather than project teams, and it does "
    "not say how long a stage lasts or how to move a team through one."), 600)
S["pa09-f6"]=lambda: f_realia(tbl("Sequencing", None,
    ["The word","Where it goes","An example"],
    [["<b>first</b>","the beginning","<b>First</b> we were polite."],
     ["<b>then</b>","the next thing","<b>Then</b> we argued for two hours."],
     ["<b>after that</b>","later again","<b>After that</b> we wrote five rules."],
     ["<b>finally</b>","the end","<b>Finally</b> the work got faster."],
     ["<b>next</b>","&nbsp;","&nbsp;"],
     ["<b>once</b>","&nbsp;","&nbsp;"]],
    note="<b>once</b> introduces a condition in time: <i>once the rules were written</i>."), 600)
S["pa09-f7"]=lambda: f_chart([("one afternoon",2),("under a week",1),
    ("two to four weeks",3),("over a month",1),("it never visibly happened",2)],
    unit="new teams")
S["pa09-f8"]=lambda: f_icons([("handshake","a polite meeting"),("angry","an argument"),
    ("flipchart","rules being written"),("meeting","a team working"),
    ("deadline","a last day"),("badge","a new member")],3)
S["pa09-f9"]=lambda: f_realia(doc("Team agreement &middot; pump station",
    "Five rules, one line each. One page.",
    "<p style='font-size:16px;line-height:1.9'>"
    "<b>1</b> &nbsp;A date moves only with the agreement of the package owner <b>and</b> the "
    "manager.<br>"
    "<b>2</b> &nbsp;<b>Late</b> means <b>three working days</b> past the date on the card. Before "
    "that, it is not late.<br>"
    "<b>3</b> &nbsp;Every package has <b>one</b> owner. If two people think it is theirs, it is "
    "nobody's until Friday.<br>"
    "<b>4</b> &nbsp;A disagreement that is not settled in the meeting goes to the manager "
    "<b>the same day</b>.<br>"
    "<b>5</b> &nbsp;Anything a new joiner is told verbally gets written on this page within a "
    "<b>week</b>.</p>",
    "<b>Agreed in the room, 4 April. Reviewed when somebody joins.</b> Six initials at the foot. "
    "Nobody has read it since and everybody can recite rule 2."), 640)
S["pa09-f10"]=lambda: f_scene(940,430, people=[("nadia",290,172,{}),
     ("priya",390,176,{"seated":True}),("marek",510,176,{"seated":True})],
    props=[("flipchart",85,74,0.6),("table",330,0,1.18),("note",420,196,0.22),
     ("notebook",490,198,0.24),("window",830,56,0.9)],
    board=(720,22,190,118,"FOUR WORDS",[("forming","2 wk"),("storming","2 hr"),
      ("norming","1 page"),("performing","&nbsp;")]),
    clockat=(670,44,22,2,30))
S["pa09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The team page we had", None,
        "<p><b>Pump station team</b></p>"
        "<p>N. Haddad &middot; W. Zhao &middot; J. Oyelaran &middot; K. Lind &middot; P. Rao "
        "&middot; S. Ferreira</p>"
        "<p style='color:#6b6861;font-size:13px'>Six names and a title. Everything else was in "
        "six different heads.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("The team page we have", None,
        "<p style='line-height:1.8'><b>1</b> A date moves with the owner <b>and</b> the "
        "manager.<br><b>2</b> Late means <b>three working days</b>.<br>"
        "<b>3</b> One owner per package.<br>"
        "<b>4</b> Unsettled disagreements go up the <b>same day</b>.<br>"
        "<b>5</b> What a joiner is told verbally is written here within a <b>week</b>.</p>"
        "<p style='color:#6b6861;font-size:13px'>4 April. Six initials.</p>"), w)[0:3],
    w=940, h=290)
S["pa09-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page, as written", None,
        "<p><b>Pump station team</b> &mdash; six names.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page, rewritten", None,
        "<p><b>Five rules, one line each.</b> Agreed <b>4 April</b>, six initials.</p>"
        "<p><b>New joiners:</b> the page is read together on the first morning, and anything they "
        "are told verbally is added to it within a week.</p>"), w)[0:3],
    w=900, h=240)
S["pa09-f13"]=lambda: f_realia(form("Agreement planner",
    [("Who decides what",""),("What <i>late</i> means, in days",""),
     ("What happens when a date moves",""),("One owner per package",""),
     ("How disagreements end",""),("What happens when somebody joins","")]), 520)
S["pa09-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("nadia",135,172,{}),("priya",210,176,{"seated":True}),
     ("marek",290,172,{"seated":True}),("lars",370,176,{"seated":True}),
     ("wei",445,172,{}),("sofia",520,176,{"seated":True}),("karin",595,170,{}),
     ("ines",660,172,{}),("ravi",725,170,{}),("haddad",790,172,{}),
     ("junseo",850,170,{}),("mei",910,172,{}),("oskar",960,174,{})],
    props=[("desk",95,0,1.1),("flipchart",150,72,0.6),("computer",335,142,0.4),
     ("printer",430,196,0.3),("note",548,198,0.22),("table",645,0,1.0),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,200,118,"THE ARGUMENT",[("date","1 April"),("length","2 hours"),
      ("rules","5")]),
    clockat=(258,34,22,3,0))
S["pa09-f15"]=lambda: f_chart([("the first meeting",3),("within two weeks",8),
    ("after a month",6),("never",7),("I joined later",4)])
S["pa09-f16"]=lambda: f_realia(doc("On a desk in April",
    "What was on it at five o'clock",
    "<p><b>The team agreement.</b> Five rules, one page, <b>six initials</b>, dated the "
    "<b>4th</b>.</p>"
    "<p><b>A flip chart sheet.</b> Four words down the left; the <b>second</b> one circled.</p>"
    "<p><b>A new staff pass.</b> Issued in <b>July</b>, for a different team.</p>"
    "<p><b>A note of three sentences.</b> <i>I spent two weeks being pleased that nobody argued "
    "and then two hours wishing they had done it sooner. The five rules took forty minutes to "
    "write and have ended about a dozen arguments since, none of which happened. One new face in "
    "July put another team back two days, which is a real cost of hiring that I have never seen a "
    "line for in any plan.</i></p>",
    "Five o'clock. Five rules, six initials, and a page nobody needs to read twice."), 580)
