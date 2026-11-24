# -*- coding: utf-8 -*-
"""Keystone Book 4 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["d00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each from an architecture review",
    ["What you have","An example"],
    [["The first conditional","<b>If</b> we add a cache, the write path <b>will</b> get longer."],
     ["Concession","<b>Although</b> it is slower, it is far easier to replace."],
     ["Correlation and cause","Failures <b>rose with</b> traffic. That is not a cause."],
     ["Probability","A retry storm <b>is likely</b> under partial failure."],
     ["Exception","This applies <b>except where</b> the client is offline."],
     ["Parallel lists","build, run, and release &mdash; three stages, three verbs."]],
    note="Six boxes. This book adds the English of the record: the order of events, the alternative "
    "you rejected, the cost you accepted, and the reader who was not there."), 580)
S["d00-f2"]=lambda: f_realia(tbl("Four questions a record has to answer", None,
    ["","Who asks it","Without the answer"],
    [["<b>1 What had we already committed to?</b>","the engineer who inherits it",
      "the decision looks arbitrary"],
     ["<b>2 What else did we consider, and why not?</b>","the person proposing it again",
      "the same argument, from the start"],
     ["<b>3 What becomes harder because of this?</b>","whoever meets the cost",
      "a surprise with your name on it"],
     ["<b>4 Who will read this, and when?</b>","you, writing it",
      "a page written for the room"]],
    note="An arrow at the foot points to one box: a reader who was not in the room."), 640)
S["d00-f3"]=lambda: f_realia(doc("Taped inside a laptop lid",
    "Four questions, and each of them is a unit of this book",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;What had we already committed to?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before the context section says <i>we chose</i>."
    "</span><br><b>2 &nbsp;What else did we consider, and why not?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before somebody proposes it again in two years."
    "</span><br><b>3 &nbsp;What becomes harder because of this?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before the consequences list contains only "
    "benefits.</span><br><b>4 &nbsp;Who will read this, and when?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before you write for the people in the room."
    "</span></p>",
    "Four questions. None of them is about what you decided."), 560)
S["d00-f4"]=lambda: f_realia(tbl("The same decision, two documents", None,
    ["Written for now","Written for later"],
    [["We will use the queue.","We chose the queue in March 2024."],
     ["Everyone agrees.","We rejected two alternatives, named here, for these reasons."],
     ["It is faster.","It is faster to write and harder to debug, and here is who pays."]],
    note="An arrow at the foot points to one box: the same decision, two documents. Only one of "
    "them survives the people who wrote it."), 580)

# ---------------- Unit 1 · Five Headings and a Status ----------------
S["d01-f1"]=lambda: f_icons([("essay","one page, five headings"),("folder","a numbered folder"),
    ("stamp","status: accepted"),("archive","status: superseded"),("note","a context paragraph"),
    ("clipboard","a decision in one sentence"),("balance","two costs listed"),
    ("calendar","a date on every page"),("quotemark","three rejected options"),
    ("magnifier","a reader two years later")], cols=5)
S["d01-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("nour",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,194,0.26),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,20))
S["d01-f3"]=lambda: f_icons([("refnumber","a title with a number"),("stamp","a status line"),
    ("note","context, two constraints marked"),("clipboard","the decision, in bold"),
    ("balance","consequences, one marked a cost"),("archive","a superseded stamp")], cols=3)
S["d01-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The decision","Written down","Rejected options named","Consequences named"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that looks arbitrary now:"), 620)
S["d01-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 37",
    "Platform team &middot; the decision record &middot; page 1 of 1",
    "<p><b>The source.</b> The form comes from a short post by Michael Nygard. It is dated "
    "November 2011. It was never a standard. It spread because people found it useful.</p>"
    + table_html(["Heading","One line each"],
      [["<b>Title</b>","a number and a short name"],
       ["<b>Status</b>","proposed, accepted, or superseded by a later number"],
       ["<b>Context</b>","what was true, and what we had already committed to"],
       ["<b>Decision</b>","one sentence, in the active voice"],
       ["<b>Consequences</b>","what gets easier, and what gets harder"]])
    + "<p><b>The status field does the work.</b> A record is never edited and never deleted. When "
    "a decision changes, a new record is written. The old one gets a new status. The wrong "
    "reasoning stays on the shelf, because it is evidence.</p>"
    "<p><b>Why that matters here.</b> We found a record from 2019 with no consequences section. "
    "Four people had defended the decision in turn. None of them had taken it. The reason was in "
    "nobody's head and on nobody's page.</p>"
    "<p><b>What the form does not give you.</b> It does not say what to decide. It does not say "
    "how to decide. It does not say which decisions deserve a page. One engineer proposed it, and "
    "the only authority it has is that it works.</p>",
    "Source: Michael Nygard, Documenting Architecture Decisions, November 2011, a blog post. It "
    "proposes a short record per decision with five headings, and a status field; a record is "
    "superseded rather than edited. It prescribes no process, no approval and no scope."), 580)
S["d01-f6"]=lambda: f_timeline([(0.14,"we had already committed","past perfect"),
    (0.62,"we chose the queue","past simple"),
    (0.92,"the record is read","future")], nowx=0.62, w=900)
S["d01-f7"]=lambda: f_chart([("in the repository",6),("in a wiki",9),("in meeting notes",14),
    ("in a chat message",21),("nowhere",37)], unit="decisions")
S["d01-f8"]=lambda: f_icons([("refnumber","a numbered title"),("stamp","a status line"),
    ("note","context with constraints"),("clipboard","the decision sentence"),
    ("balance","consequences, a cost marked"),("archive","superseded")], cols=3)
S["d01-f9"]=lambda: f_realia(doc("ADR-038 &middot; Use the shared queue for order events",
    "Status: accepted &middot; 4 February &middot; supersedes nothing",
    "<p><b>Context.</b> Three teams were already sending order events by direct call. We had "
    "committed to the platform's queue in 2023 for billing. Two of the three teams had shipped "
    "before this record was written.</p>"
    "<p><b>Decision.</b> Order events go on the shared queue.</p>"
    "<p><b>Consequences.</b> Writing a producer gets easier. Debugging a lost event gets harder, "
    "and the on-call engineer meets that cost first. Two teams must change code they shipped last "
    "month.</p>"
    "<p><b>Who will read this.</b> The next engineer who asks why order events are not a direct "
    "call. Probably within two years, probably in their first month.</p>"),
    560)
S["d01-f10"]=lambda: f_scene(960,430, people=[("mei",300,176,{"seated":True}),
     ("nour",390,172,{}),("adeel",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("folder",380,194,0.26),
     ("essay",450,194,0.26),("note",520,194,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,10,0))
S["d01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Record A", None,
        "<p>We will use the shared queue. It is faster to write, it scales, and the platform team "
        "supports it.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Record B", None,
        "<p>ADR-038, accepted 4 February.<br>Two prior commitments named.<br>"
        "The decision in one sentence.<br>Two costs, and who meets them.<br>"
        "The reader: a stranger in their first month.</p>"), w)[0:3],
    w=920, h=300)
S["d01-f12"]=lambda: f_realia(doc("Two records", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Record 1</b><br>"
    "A decision, and three benefits.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Record 2</b><br>"
    "Five headings. Two prior commitments in the context, two costs in the consequences, and a "
    "named future reader.</p>",
    "One of these can be read by somebody who was not there."), 580)
S["d01-f13"]=lambda: f_realia(form("Record planner",
    [("The numbered title",""),("Status and date",""),("Context: prior commitments",""),
     ("The decision, one sentence",""),("Consequences: easier / harder",""),
     ("Who will read this, and when","")]), 520)
S["d01-f14"]=lambda: f_scene(980,440,
    people=[("nour",55,176,{}),("adeel",115,176,{"seated":True}),("mei",195,172,{}),
     ("tomas",280,176,{"seated":True}),("lars",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("marek",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("chiamaka",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("folder",330,198,0.24),
     ("printer",430,196,0.3),("essay",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,11,0))
S["d01-f15"]=lambda: f_chart([("in the repository",4),("in a wiki",5),("in meeting notes",6),
    ("in a chat message",7),("nowhere",3)])
S["d01-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("folder",390,196,0.24),
     ("note",460,194,0.24),("archive",530,196,0.26),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,0))

# ---------------- Unit 2 · The Shape of the Organization ----------------
S["d02-f1"]=lambda: f_icons([("board","four boxes on a chart"),("application","the same four, in software"),
    ("speechbubble","two teams, one line between them"),("barrier","two teams, no line"),
    ("handshake","a clean interface"),("chain","a brittle one"),
    ("calendar","an early choice, three years ago"),("archive","a chart nobody uses"),
    ("magnifier","a boundary nobody chose"),("signpost","a reporting line")], cols=5)
S["d02-f2"]=lambda: f_scene(920,420, people=[("tomas",330,176,{"seated":True}),
     ("chiamaka",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("board",400,150,0.5),
     ("note",470,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,10,50))
S["d02-f3"]=lambda: f_icons([("speechbubble","they talk daily; one component"),
    ("barrier","they never speak; a brittle interface"),
    ("calendar","an early organizational choice"),("square","a fragmented design"),
    ("signpost","a boundary that is organizational"),("application","one that is technical")],
    cols=3)
S["d02-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The interface","The two teams","How often they talk","Would it exist?"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that is purely organizational:"), 620)
S["d02-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 38",
    "Platform team &middot; boundaries &middot; page 1 of 1",
    "<p><b>The article.</b> Melvin Conway wrote it in April 1968. It appeared in Datamation. It is "
    "six pages long. It is quoted far more often than it is read.</p>"
    "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>The claim.</b> A system design "
    "copies the communication structure of the organization that produced it. Not the chart. The "
    "structure: who actually talks to whom.</p>"
    + table_html(["What is true of the teams","What shows up in the design"],
      [["two teams talk every day","one component, or a simple boundary"],
       ["two teams never speak","an interface that is thin and brittle"],
       ["work was split three ways in 2019","three parts, still, in 2026"]])
    + "<p><b>Why the chart is the wrong document.</b> A chart shows reporting lines. The structure "
    "is a pattern of conversations. The two often differ. Our own chart was redrawn in 2021. The "
    "design still has the shape of the 2019 one.</p>"
    "<p><b>What the article does not say.</b> It offers no remedy. It names no measure. It does "
    "not claim that a reorganization gives you a better design. It is an observation about how "
    "work gets divided, and that is all.</p>",
    "Source: Melvin E. Conway, How Do Committees Invent?, Datamation, April 1968. The paper "
    "observes that a design mirrors the communication structure of the producing organization. It "
    "offers no remedy, no measurement, and no claim about reorganizing."), 580)
S["d02-f6"]=lambda: f_realia(tbl("Word study","Cause and result",
    ["Structure","What it does","Example"],
    [["because","gives the cause","It has four parts <b>because</b> there were four teams."],
     ["because of","cause, as a preposition","<b>Because of</b> the split, the boundary stayed."],
     ["as a result","gives the result","Two teams never met. <b>As a result</b>, the interface is thin."],
     ["which is why","result, attached","Four teams, <b>which is why</b> there are four services."],
     ["owing to","&nbsp;","&nbsp;"],
     ["result in","&nbsp;","&nbsp;"]]), 600)
S["d02-f7"]=lambda: f_matrix(["the organization","the system"],
    [("three boxes / three components",["yes","yes"]),
     ("two lines / two interfaces",["yes","yes"]),
     ("redrawn in 2021",["yes","no"]),
     ("split made in 2019",["archived","still visible"])])
S["d02-f8"]=lambda: f_icons([("speechbubble","talking; one component"),
    ("barrier","silent; two components"),("calendar","an early choice"),
    ("square","a fragmented design"),("signpost","organizational"),
    ("application","technical")], cols=3)
S["d02-f9"]=lambda: f_realia(tbl("Boundary note &middot; three interfaces",
    "Platform team &middot; section 2.1",
    ["The interface","Who owned each side","Created","Technical or organizational?"],
    [["orders &rarr; billing","orders team / finance platform","2019","<b>organizational</b>"],
     ["catalog &rarr; search","one team, both sides","2022","technical"],
     ["billing &rarr; reporting","finance platform / data team","2019","<b>organizational</b>"]],
    note="Two of the three exist because two groups reported to different people in 2019. One of "
    "those groups no longer exists."), 640)
S["d02-f10"]=lambda: f_scene(960,430, people=[("tomas",300,176,{"seated":True}),
     ("chiamaka",390,172,{}),("grace",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("board",300,146,0.5),("application",390,196,0.26),
     ("note",460,194,0.24),("archive",520,196,0.26),("window",820,56,0.96)],
    clockat=(120,44,22,11,0))
S["d02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>The orders service talks to billing over a message queue.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p>orders &rarr; billing, created 2019.<br>Owned by two teams under two directors.<br>"
        "Kind: organizational.<br>Could go if one team owned both sides.<br>"
        "One of those teams no longer exists.</p>"), w)[0:3],
    w=920, h=300)
S["d02-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Three interfaces, with their protocols.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "The same three, with the teams who owned each side, the date, the kind, and what a "
    "reorganization would change.</p>",
    "One of these tells you which boundaries are not about software."), 580)
S["d02-f13"]=lambda: f_realia(form("Boundary-note planner",
    [("Why the note exists",""),("The interfaces, owners, dates",""),("The kind of each",""),
     ("Which could go",""),("What a reorganization changes",""),
     ("The one you are not proposing to change","")]), 520)
S["d02-f14"]=lambda: f_scene(980,440,
    people=[("chiamaka",55,176,{}),("tomas",115,176,{"seated":True}),("grace",195,172,{}),
     ("mei",280,176,{"seated":True}),("adeel",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("nour",595,172,{}),
     ("marek",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("lars",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("application",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,0))
S["d02-f15"]=lambda: f_chart([("yes, closely",8),("partly",7),("no",2),
    ("never compared them",6),("I do not know the chart",3)])
S["d02-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("board",320,146,0.5),("application",400,196,0.26),
     ("archive",470,196,0.26),("note",540,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,3,0))

# ---------------- Unit 3 · Config in the Environment ----------------
S["d03-f1"]=lambda: f_icons([("folder","one repository, three deployments"),
    ("clipboard","dependencies, declared"),("key","config held outside the code"),
    ("container","a database, attached"),("application","build and run, separate"),
    ("stars","identical processes"),("logsheet","logs as a stream"),
    ("timer","a process that starts fast"),("square","development and production alike"),
    ("quotemark","twelve short instructions")], cols=5)
S["d03-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("tomas",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("clipboard",395,194,0.26),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,3,20))
S["d03-f3"]=lambda: f_icons([("folder","one codebase, many deployments"),
    ("clipboard","declared dependencies"),("key","config outside the code"),
    ("application","build, release, run"),("stars","identical stateless processes"),
    ("logsheet","logs as a stream")], cols=3)
S["d03-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The application","Where config lives","Stateless?","What happens to logs"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The instruction we break without knowing:"), 620)
S["d03-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 39",
    "Platform team &middot; the twelve instructions &middot; page 1 of 1",
    "<p><b>The source.</b> It is a method, published in 2011 by Adam Wiggins. It has twelve short "
    "instructions. Each one is an imperative. It was written for one kind of platform, and it says "
    "so.</p>"
    + table_html(["#","In short"],
      [["1","One codebase, many deployments"],["2","Declare your dependencies"],
       ["3","<b>Keep config in the environment</b>"],["4","Treat backing services as attached"],
       ["5","<b>Separate build, release and run</b>"],["6","Run as stateless processes"],
       ["7","Export services by binding a port"],["8","Scale out by process"],
       ["9","<b>Start fast and shut down cleanly</b>"],["10","Keep environments alike"],
       ["11","Treat logs as a stream"],["12","Run admin tasks as one-off processes"]])
    + "<p><b>Three of them assume a deployment model.</b> Numbers 3, 5 and 9 only make sense if a "
    "platform starts and stops your processes for you. On a long-lived machine, a file of config "
    "is not a sin. The method knows this. It is opinionated on purpose.</p>"
    "<p><b>A departure is not a defect.</b> We break number 3 on two applications. The reason is "
    "good, it is written down, and the cost is one extra step at release. That is a departure. A "
    "defect is the same thing with nobody's name on it.</p>"
    "<p><b>Why this matters in a review.</b> Two internal documents quote these instructions as "
    "rules. The original text calls them opinions. Neither author of our documents had read it.</p>",
    "Source: The Twelve-Factor App, Adam Wiggins, first published 2011. It is an opinionated "
    "method, dated by design, and it assumes a particular deployment model; three of its "
    "instructions are assumptions rather than rules once that model changes."), 580)
S["d03-f6"]=lambda: f_realia(tbl("Word study","Imperatives and recommendations",
    ["Form","How strong","Example"],
    [["bare imperative","the method's voice","<b>Store</b> config in the environment."],
     ["never + imperative","a prohibition","<b>Never</b> commit a secret."],
     ["should","a recommendation","You <b>should</b> separate build from run."],
     ["it is recommended","formal, agentless","It <b>is recommended that</b> logs be streamed."],
     ["prefer","&nbsp;","&nbsp;"],
     ["consider","&nbsp;","&nbsp;"]]), 600)
S["d03-f7"]=lambda: f_chart([("all twelve",1),("nine to eleven",4),("six to eight",7),
    ("three to five",5),("fewer than three",2)], unit="applications")
S["d03-f8"]=lambda: f_icons([("folder","one codebase"),("clipboard","declared dependencies"),
    ("key","config outside"),("application","build and run separate"),
    ("stars","stateless processes"),("logsheet","logs as a stream")], cols=3)
S["d03-f9"]=lambda: f_realia(tbl("Platform note &middot; departures",
    "Platform team &middot; section 3.1",
    ["Instruction","Followed?","The departure","The reason"],
    [["3 &middot; config in the environment","<b>no</b>, two apps",
      "a mounted file, read at start","a long-lived machine with no platform"],
     ["5 &middot; separate build and run","<b>no</b>, one app",
      "templating at start-up","a vendor image we cannot rebuild"],
     ["9 &middot; start fast","<b>no</b>, one app","a 90-second warm cache",
      "a cold start costs a customer more"]],
    note="Three departures, three reasons, one accepted cost each. The other nine instructions we "
    "follow, and nobody has had to write that down."), 650)
S["d03-f10"]=lambda: f_scene(960,430, people=[("tomas",300,176,{"seated":True}),
     ("adeel",390,172,{}),("mei",470,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("spreadsheet",385,196,0.26),
     ("clipboard",455,194,0.26),("note",520,194,0.24),("window",820,56,0.96)],
    clockat=(120,44,22,3,30))
S["d03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>The team follows the twelve-factor methodology.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p>Three departures, by instruction number.<br>What we do instead, in one line each.<br>"
        "The reason for each.<br>The cost we accepted.<br>"
        "Three of the twelve assume a platform we do not have.</p>"), w)[0:3],
    w=920, h=300)
S["d03-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The team follows the methodology.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "Four departures with the instruction number, the alternative, the reason, and the cost "
    "accepted.</p>",
    "The second one can be argued with, which is the point of writing it."), 580)
S["d03-f13"]=lambda: f_realia(form("Platform-note planner",
    [("What you record",""),("The departures, by number",""),("The reason for each",""),
     ("The cost accepted",""),("The instructions that assume a model",""),
     ("What you are not claiming","")]), 520)
S["d03-f14"]=lambda: f_scene(980,440,
    people=[("tomas",55,176,{}),("adeel",115,176,{"seated":True}),("mei",195,172,{}),
     ("chiamaka",280,176,{"seated":True}),("lars",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("marek",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("spreadsheet",330,198,0.24),
     ("printer",430,196,0.3),("clipboard",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,4,0))
S["d03-f15"]=lambda: f_chart([("in the environment",7),("in a secrets service",6),
    ("in a file in the repository",5),("in the code",2),("I do not know",4)])
S["d03-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("spreadsheet",320,196,0.26),("clipboard",395,194,0.26),
     ("note",465,194,0.24),("essay",535,196,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,5,0))
