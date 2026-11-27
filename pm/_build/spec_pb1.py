# -*- coding: utf-8 -*-
"""Throughline Book 2 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["pb00-f1"]=lambda: f_realia(tbl("Six things you brought from Book 1",
    "One example each, from a planning meeting",
    ["What you have","An example"],
    [["Part and whole","The branch <b>is divided into</b> four packages."],
     ["Accountable for","Ebele <b>is accountable for</b> the result."],
     ["Comparatives","Faster is <b>more expensive</b>."],
     ["Modals of priority","It <b>must</b> be in the first handover."],
     ["Will and by","It <b>will be</b> finished <b>by</b> the 8th."],
     ["The passive","The money <b>has been spent</b>."]],
    note="Six boxes. This book adds the one sentence Book 1 did not teach: when will it be "
    "finished, and how do you know?"), 580)
S["pb00-f2"]=lambda: f_realia(doc("One date", "What is it resting on?",
    "<p style='font-size:20px;text-align:center'><b>14 June</b></p>"
    + table_html(["What the date rests on","What that means"],
      [["<b>1 Somebody did it before</b>","you finished this work, measured it, kept the number"],
       ["<b>2 Somebody who will do it agreed</b>","the person holding the tool said the date out "
        "loud"],
       ["<b>3 Arithmetic</b>","the work was broken down, added up, and the sum is the date"],
       ["<b>4 Somebody needs it</b>","the contract, the season or the client needs that day"]]),
    "Take one box away and the date is a wish. The fourth is not an estimate at all: it is a "
    "requirement wearing an estimate's clothes, and it is more than half the dates in most "
    "plans."), 620)
S["pb00-f3"]=lambda: f_panels(
    lambda w,h: f_realia(doc("An estimate", None,
        "<p style='font-size:17px;line-height:1.95'>&ldquo;Between <b>10</b> and <b>16</b> weeks, "
        "most likely <b>12</b>.&rdquo;</p>"
        "<p style='font-size:13px;line-height:1.8'>It can be wrong without anybody breaking a "
        "word.<br>It gets better with data.<br>It belongs to the person doing the work.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("A promise", None,
        "<p style='font-size:17px'>&ldquo;The <b>14th of June</b>.&rdquo;</p>"
        "<p style='font-size:13px;line-height:1.8'>It cannot be wrong without that.<br>"
        "It gets kept, or it does not.<br>It belongs to whoever signed.</p>"
        "<p style='font-size:12px'>Signed: ____________________</p>"), w)[0:3],
    w=880, h=280, lt="&nbsp;", rt="Whose name is on it?")
S["pb00-f4"]=lambda: f_realia(doc("Two answers to the same question", None,
    "<p><b>&ldquo;Twelve weeks.&rdquo;</b></p>"
    "<p style='color:#6b6861;font-size:13px'>Two words. It hides the one thing the listener needs, "
    "which is what the speaker is worried about.</p>"
    "<p><b>&ldquo;Ten weeks if the valves are early, twelve if they come as ordered, sixteen if "
    "they slip. I would sign thirteen.&rdquo;</b></p>"
    "<p style='color:#6b6861;font-size:13px'>Four times as long and about ten times as useful: a "
    "best case, a most likely, a worst case, and the number the speaker will stand behind.</p>",
    "The last clause is the only part anybody can act on."), 580)

# ---------------- Unit 1 ----------------
S["pb01-f1"]=lambda: f_icons([("walkroute","two tasks joined by an arrow"),
    ("chain","the longest route through a network"),("timer","spare time: float"),
    ("danger","no spare time at all"),("spreadsheet","two routes through one network"),
    ("clock","a duration on a task"),("truck","waiting for a delivery"),
    ("signature","waiting for a signature"),("barcode","the route redrawn"),
    ("book","a paper from 1959")],4)
S["pb01-f2"]=lambda: f_scene(920,420, people=[("oskar",330,172,{}),("nkemelu",420,172,{})],
    props=[("computer",150,138,0.56),("desk",250,0,1.2),("note",480,196,0.24),
     ("window",810,56,0.92)],
    board=(680,22,200,112,"THE FILE",[("activities","61"),("critical","14"),("orphans","9")]),
    clockat=(600,44,22,8,20))
S["pb01-f3"]=lambda: f_icons([("wall","concrete must cure before loading"),
    ("walkroute","a crew's preferred order"),("truck","waiting for a supplier"),
    ("timer","float: a gap after a task"),("deadline","a date imposed from outside"),
    ("spreadsheet","the network redrawn")],3)
S["pb01-f4"]=lambda: f_realia(tbl("Team research", None,
    ["What cannot start until what","Is it physical","Who put it there",
     "What if you broke it"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The dependency that is only a habit: ______________________"), 660)
S["pb01-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 1",
    "Project office &middot; the critical path &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> The critical path method was developed at <b>DuPont</b> from "
    "about <b>1957</b> by <b>Morgan R. Walker</b>, with <b>James E. Kelley Jr.</b> of Remington "
    "Rand. Their paper was presented at the <b>Eastern Joint Computer Conference</b> in "
    "<b>December 1959</b>, and every planning tool sold today still does the arithmetic in it.</p>"
    "<p><b>What it does.</b> You give it activities, a duration for each, and what each one cannot "
    "start until. It returns the <b>longest route</b> through the network. That route is the "
    "critical path, and its length is the shortest the project can be. Everything off it has "
    "<b>float</b>.</p>"
    + table_html(["Chidi's first schedule",""],
      [["activities","<b>61</b>"],["on the critical path","<b>14</b>"],
       ["with no predecessor at all","<b>9</b>"],["duration returned","<b>34 weeks</b>"]])
    + "<p><b>The nine.</b> An activity with no predecessor starts on <b>day one</b>. So the file "
    "showed site clearance, the valve order, the training plan and <b>the as-built drawings</b> all "
    "starting in week one. Nobody believed that. <b>The file said what it had been told, and it had "
    "been told nothing about those nine.</b> Given predecessors, the project moved from "
    "<b>34 weeks to 39</b> and the critical path left the pipework entirely.</p>"
    + table_html(["Activity","Float","Watched weekly?"],
      [["yard fencing","<b>41 days</b>","<b>yes, every week</b>"],
       ["valve delivery","<b>0 days</b>","no"],
       ["panel wiring","<b>2 days</b>","no"]])
    + "<p><b>We spent a year watching the fence.</b> It was outside the window. It could have been "
    "two months late without moving the handover by a day.</p>"
    "<p><b>What the method does not do.</b> It takes <b>one number</b> per activity and asks "
    "nothing about where it came from. It models <b>no uncertainty</b>. In its original form it "
    "says nothing about <b>who is available</b>. And <b>critical</b> means <i>has no float</i>, not "
    "<i>risky</i>.</p>",
    "Source: J. E. Kelley Jr. and M. R. Walker, Critical-Path Planning and Scheduling, "
    "Proceedings of the Eastern Joint Computer Conference, December 1959, from work begun at "
    "DuPont around 1957. The method computes the longest route from the durations and dependencies "
    "it is given; it treats each duration as a single fixed number, models no uncertainty, took no "
    "account of resource availability in its original form, and makes no judgment about whether "
    "the dependencies it is given are real."), 620)
S["pb01-f6"]=lambda: f_realia(tbl("Saying what depends on what", None,
    ["Structure","What it says","Example"],
    [["<b>cannot start until</b>","a hard order",
      "Wiring <b>cannot start until</b> the panel is on site."],
     ["<b>depends on</b>","one needs the other",
      "The test <b>depends on</b> the valve delivery."],
     ["<b>as soon as</b>","immediately after",
      "We pour <b>as soon as</b> the inspector signs."],
     ["<b>once</b>","after a condition is met",
      "<b>Once</b> the slab is cured, loading can begin."],
     ["<b>before</b>","&nbsp;","&nbsp;"],
     ["<b>not until</b>","&nbsp;","&nbsp;"]],
    note="After <b>until</b>, <b>once</b> and <b>as soon as</b>, English uses the present for "
    "future meaning."), 620)
S["pb01-f7"]=lambda: f_chart([("a predecessor that was agreed",29),
    ("a predecessor the planner assumed",14),("an imposed contract date",6),
    ("nothing at all: day one by default",9),("unknown",3)], unit="activities")
S["pb01-f8"]=lambda: f_icons([("walkroute","two tasks, one arrow"),
    ("chain","the longest chain"),("timer","a gap of float"),
    ("danger","no gap at all"),("truck","the supplier's van"),
    ("signature","a signature on a drawing")],3)
S["pb01-f9"]=lambda: f_realia(tbl("Schedule extract",
    "Nine of sixty-one rows, with the last two columns added by hand",
    ["Activity","Days","Predecessor","Float","On path","Duration agreed by"],
    [["Site clearance","10","<b>&mdash;</b>","0","<b>yes</b>","J. Oyelaran"],
     ["Pour the base","12","clearance","0","<b>yes</b>","J. Oyelaran"],
     ["Valve order","5","<b>&mdash;</b>","<b>0</b>","<b>yes</b>","<b>nobody</b>"],
     ["Valve delivery","20","valve order","<b>0</b>","<b>yes</b>","O. Nasser"],
     ["Pipework","26","base","4","no","W. Zhao"],
     ["Panel wiring","19","pipework","2","no","K. Lind"],
     ["Yard fencing","15","<b>&mdash;</b>","<b>41</b>","no","A. Saleh"],
     ["Training plan","8","<b>&mdash;</b>","33","no","<b>nobody</b>"],
     ["As-built drawings","14","<b>&mdash;</b>","12","no","<b>nobody</b>"]],
    numcols=(1,3),
    note="<b>Three rows with no predecessor start on day one.</b> One of them is the writing of "
    "the as-built drawings."), 700)
S["pb01-f10"]=lambda: f_scene(960,440, people=[("oskar",290,172,{}),
     ("nkemelu",400,176,{"seated":True}),("omar",520,172,{})],
    props=[("computer",130,138,0.52),("desk",240,0,1.2),("note",390,196,0.22),
     ("spreadsheet",470,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,112,"TOTALS",[("was","34 wk"),("now","39 wk"),("added","0")]),
    clockat=(610,44,22,8,30))
S["pb01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Extract, as saved", None, ["Activity","Predecessor"],
      [["Valve order","&mdash;"],["Training plan","&mdash;"],["As-built drawings","&mdash;"],
       ["Yard fencing","&mdash;"],["Spares schedule","&mdash;"]],
      note="Total: <b>34 weeks</b>. Nine rows like these start on day one."), w)[0:3],
    lambda w,h: f_realia(tbl("Extract, repaired", None, ["Activity","Predecessor","Agreed by"],
      [["Valve order","drawing 1.2-04 approved","O. Nasser"],
       ["Training plan","commissioning starts","N. Haddad"],
       ["As-built drawings","pipework complete","W. Zhao"],
       ["Yard fencing","base poured","A. Saleh"],
       ["Spares schedule","valve delivery","O. Nasser"]],
      note="Total: <b>39 weeks</b>. Nothing was added; five weeks were found."), w)[0:3],
    w=960, h=280)
S["pb01-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note, as sent", None,
        "<p><b>The schedule has been revised to 39 weeks.</b></p>"
        "<p style='color:#6b6861;font-size:13px'>Seven words. The reader learns that something "
        "happened and nothing about what.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note, rewritten", None,
        "<p style='line-height:1.85'><b>34 &rarr; 39 weeks.</b> Nothing has got worse.<br>"
        "<b>Nine</b> of 61 activities had no predecessor.<br>"
        "Valves <b>cannot be ordered until</b> drawing 1.2-04 <b>is approved</b> &mdash; week 9.<br>"
        "Lead time <b>four weeks</b>, so they arrive week 17.<br>"
        "<b>Either</b> 38,000 to expedite, <b>or</b> approve week 39.</p>"), w)[0:3],
    w=940, h=270)
S["pb01-f13"]=lambda: f_realia(form("Schedule note planner",
    [("The old number and the new one",""),("What was wrong",""),
     ("The chain, in one sentence",""),("The arithmetic",""),("What you are asking for",""),
     ("One thing for the file","")]), 520)
S["pb01-f14"]=lambda: f_scene(1000,450,
    people=[("ida",60,176,{}),("oskar",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("omar",290,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("wei",445,172,{}),("lars",520,176,{"seated":True}),("karin",595,170,{}),
     ("ines",660,172,{}),("ravi",725,170,{}),("sofia",790,172,{}),
     ("junseo",850,170,{}),("mei",910,172,{}),("tomas",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("note",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,210,112,"34 OR 39",[("orphans","9"),("found","5 wk")]),
    clockat=(272,34,22,9,0))
S["pb01-f15"]=lambda: f_chart([("a predecessor somebody agreed",6),
    ("a predecessor the planner assumed",8),("a date from the contract",7),
    ("the software's default",4),("I do not know",5)])
S["pb01-f16"]=lambda: f_realia(doc("On a desk in March",
    "What was on it at five o'clock",
    "<p><b>The list.</b> Sixty-one rows; <b>nine</b> marked.</p>"
    "<p><b>The network.</b> The heavy chain redrawn through <b>procurement</b>.</p>"
    "<p><b>A lead-time note.</b> Four weeks, <b>from approval</b>, not from order.</p>"
    "<p><b>A weekly agenda.</b> The word <i>fence</i> on it <b>eleven</b> times.</p>"
    "<p><b>A note of three sentences.</b> <i>Nobody hid those five weeks; they were in Omar's lead "
    "times and in my own head and in nobody's file. The arithmetic from 1959 is perfect and it "
    "cannot ask the one question that matters, which is whether a dependency is real or just "
    "unspoken. We watch the fence because it is outside the window, and we will keep watching it "
    "unless somebody puts zero-float items on the agenda by rule.</i></p>",
    "Five o'clock. Thirty-nine weeks, and the agenda rewritten by float instead of by "
    "visibility."), 600)

# ---------------- Unit 2 ----------------
S["pb02-f1"]=lambda: f_icons([("note","one number on a card"),
    ("flashcard","three numbers: best, likely, worst"),("calculator","a formula with weights"),
    ("scales","a bell-shaped curve"),("timetable","a range between two points"),
    ("spreadsheet","a wide spread and a narrow one"),("chain","three chains meeting"),
    ("archive","a file of finished projects"),("danger","an actual outside the range"),
    ("book","a report from 1958")],4)
S["pb02-f2"]=lambda: f_scene(920,420, people=[("karin",330,176,{"seated":True}),
     ("nkemelu",425,176,{"seated":True})],
    props=[("desk",250,0,1.22),("computer",150,138,0.52),("flashcard",390,196,0.24),
     ("window",810,56,0.92)],
    board=(680,22,200,112,"THE CARD",[("best","10"),("likely","12"),("worst","16"),
      ("actual","19")]),
    clockat=(600,44,22,9,40))
S["pb02-f3"]=lambda: f_icons([("spreadsheet","a wide range and a narrow one"),
    ("note","a worst case as a story"),("archive","a finished package, recorded"),
    ("danger","an actual outside the range"),("chain","three chains meeting"),
    ("tally","forty-four finished packages")],3)
S["pb02-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The work","Most likely","The worst case as a story","The number the story gives"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The gap between the two worst cases: ______________________"), 660)
S["pb02-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 2",
    "Project office &middot; three-point estimates &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> PERT was built in <b>1958</b> by the <b>Special Projects "
    "Office</b> of the <b>US Navy</b>, with Booz Allen Hamilton and Lockheed, for the "
    "<b>Polaris</b> missile program. The <i>PERT Summary Report, Phase 1</i> is dated <b>July "
    "1958</b>.</p>"
    "<p style='text-align:center;font-size:18px'><b>expected time = (a + 4m + b) &divide; 6</b></p>"
    "<p><b>Where the weights came from.</b> The report assumed a particular shape of probability "
    "curve and chose weights that could be worked out <b>by hand</b>, in 1958, by a room of people "
    "with slide rules. <b>It was a convenience that fitted the mathematics of the day, not a "
    "measurement of how projects behave.</b></p>"
    + table_html(["The pipework package","Weeks"],
      [["optimistic","<b>10</b>"],["most likely","<b>12</b>"],["pessimistic","<b>16</b>"],
       ["expected, by the formula","<b>12.3</b>"],["<b>what it actually took</b>","<b>19</b>"]])
    + "<p>The formula also returns a spread: with 10 and 16 as the ends, the standard deviation is "
    "<b>one week</b>. <b>The overrun was seven times that.</b> The arithmetic was not wrong. The "
    "<b>16</b> was.</p>"
    "<p><b>Karin's file.</b> Thirty years of finished packages. For <b>44</b> of them a "
    "three-point estimate was recorded at the start. The actual came in <b>above the stated "
    "pessimistic number</b> in <b>19</b> &mdash; more than two in five. <b>Not one of those 19 was "
    "run by a careless person</b>: in every case the pessimistic number had been made the same "
    "way, by taking the most likely and adding a bit.</p>"
    "<p><b>One more thing the formula does not do.</b> Where <b>three</b> chains must all arrive "
    "before a milestone, each with a <b>90 percent</b> chance, the milestone's chance is about "
    "<b>73 percent</b>. PERT computes the spread along one path; <b>reality merges paths</b>.</p>",
    "Source: PERT Summary Report, Phase 1, Special Projects Office, Bureau of Naval Weapons, "
    "Department of the Navy, July 1958, developed for the Polaris program with Booz Allen Hamilton "
    "and Lockheed. The three-point weights follow from an assumed distribution chosen for ease of "
    "hand computation, not from measurement; the method models the spread along a single path and "
    "does not account for merging paths; and the claim that PERT itself saved time on Polaris was "
    "questioned in H. M. Sapolsky, The Polaris System Development, Harvard University Press, "
    "1972."), 620)
S["pb02-f6"]=lambda: f_realia(tbl("Ranges and approximation", None,
    ["Structure","What it does","Example"],
    [["<b>between &hellip; and</b>","gives both ends","<b>Between</b> ten <b>and</b> sixteen."],
     ["<b>about</b>","one number, loosely","<b>About</b> twelve weeks."],
     ["<b>at best / at worst</b>","names the ends","Ten <b>at best</b>, sixteen <b>at worst</b>."],
     ["<b>up to</b>","the top end only","<b>Up to</b> sixteen weeks."],
     ["<b>no earlier than</b>","&nbsp;","&nbsp;"],
     ["<b>give or take</b>","&nbsp;","&nbsp;"]],
    note="A range needs a condition on <b>each end</b>, or it is two numbers and a shrug."), 620)
S["pb02-f7"]=lambda: f_chart([("below the optimistic",2),
    ("between optimistic and most likely",6),
    ("between most likely and pessimistic",14),("above the pessimistic",19),
    ("not recorded",3)], unit="packages")
S["pb02-f8"]=lambda: f_icons([("note","one number"),("flashcard","three numbers"),
    ("spreadsheet","a wide range"),("timetable","a narrow range"),
    ("quotemark","a worst case as a story"),("chain","a merge point")],3)
S["pb02-f9"]=lambda: f_realia(tbl("Estimate sheet",
    "Six packages. The last column is the one that does the work.",
    ["Package","Best","Likely","Worst","Expected","The story behind the worst case"],
    [["Pipework","10","12","16","12.3","<b>&mdash;</b>"],
     ["Commissioning","5","6","11","7.0","seals fail: 3 weeks to replace, then retest"],
     ["Panel build","7","8","9","8.0","supplier's second shift unavailable"],
     ["Harbour survey","3","4","8","4.5","two tide windows missed"],
     ["Training","2","3","4","3.0","<b>&mdash;</b>"],
     ["Handover","1","2","6","2.5","client's engineer unavailable for a month"]],
    numcols=(1,2,3,4),
    note="<b>A worst case with no story is the middle with a margin on it.</b> Two rows on this "
    "page are that, and one of them is the pipework."), 720)
S["pb02-f10"]=lambda: f_scene(960,440, people=[("karin",300,176,{"seated":True}),
     ("nkemelu",400,176,{"seated":True}),("linh",520,172,{})],
    props=[("desk",240,0,1.2),("computer",130,138,0.5),("flashcard",370,196,0.22),
     ("form",460,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,112,"THE FILE",[("packages","44"),("over worst","19")]),
    clockat=(610,44,22,10,0))
S["pb02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Card 1", None,
        "<p style='font-size:34px;text-align:center'><b>6</b></p>"
        "<p style='text-align:center;font-size:13px'>weeks</p>"
        "<p style='color:#6b6861;font-size:13px'>The number that can be said without "
        "flinching.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Card 2", None, ["","Weeks","Condition"],
      [["best","5","engineer on site week 30"],
       ["likely","6","engineer week 31, first test passes"],
       ["<b>worst</b>","<b>11</b>","<b>seals fail: 3 weeks, then retest</b>"],
       ["expected","7.0","&nbsp;"],
       ["<b>I would sign</b>","<b>7</b>","&nbsp;"]]), w)[0:3],
    w=940, h=280)
S["pb02-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Estimate, as sent", None,
        "<p><b>Approximately six weeks.</b></p>"), w)[0:3],
    lambda w,h: f_realia(doc("Estimate, rewritten", None,
        "<p style='line-height:1.85'><b>5</b> at best &mdash; engineer on site week 30.<br>"
        "<b>6</b> most likely.<br>"
        "<b>11</b> at worst &mdash; <b>the seals fail: three weeks to replace, then a "
        "retest</b>.<br>Expected <b>7.0</b>. <b>I would sign 7.</b><br>"
        "<b>What would narrow it:</b> a confirmed date from the client's engineer.</p>"), w)[0:3],
    w=940, h=270)
S["pb02-f13"]=lambda: f_realia(form("Estimate planner",
    [("The optimistic number, and its condition",""),("The most likely",""),
     ("The pessimistic, as a story",""),("The expected figure",""),
     ("The number you would sign",""),("What would narrow the range","")]), 520)
S["pb02-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("karin",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("linh",290,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("ahmad",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("sofia",725,170,{}),("mei",790,172,{}),
     ("junseo",850,170,{}),("oskar",910,172,{}),("wei",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("flashcard",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,210,112,"WHAT IT TOOK",[("packages","44"),("over worst","19")]),
    clockat=(272,34,22,10,0))
S["pb02-f15"]=lambda: f_chart([("one number",11),
    ("one number and a word like approximately",7),("two numbers",3),
    ("three numbers",4),("it depends who is asking",5)])
S["pb02-f16"]=lambda: f_realia(doc("On a desk in April",
    "What was on it at five o'clock",
    "<p><b>The estimate card.</b> <b>10 / 12 / 16</b>, with <b>19</b> written beside it in pen.</p>"
    "<p><b>The file.</b> Forty-four rows; <b>nineteen</b> marked.</p>"
    "<p><b>The form.</b> One estimate box.</p>"
    "<p><b>A page from a 1972 book</b>, on whether the method saved any time at all.</p>"
    "<p><b>A note of three sentences.</b> <i>The formula is honest about what it assumes and it has "
    "never pretended to know anything about seals. The weak number has always been the third one, "
    "because a worst case is a story about failure and nobody wants to be the person who writes "
    "that story down about their own work. Forty-four rows did what eleven years of good "
    "intentions never did, which is to make me stop adding a bit to twelve.</i></p>",
    "Five o'clock. The formula is 67 years old and the sixteen was four hours old."), 600)

# ---------------- Unit 3 ----------------
S["pb03-f1"]=lambda: f_icons([("timer","a task inside a fixed box of time"),
    ("timetable","work stretching to fill the time"),("note","a round number on a plan"),
    ("deadline","finished in the last two days"),("folder","a thin report growing thick"),
    ("desk","more desks than before"),("envelope","two officials passing paper"),
    ("ship","a fleet getting smaller"),("stamp","a postcard, all day"),
    ("book","a magazine from 1955")],4)
S["pb03-f2"]=lambda: f_scene(920,420, people=[("hanna",330,172,{}),("nadia",420,172,{})],
    props=[("shelf",150,100,0.6),("desk",250,0,1.2),("folder",400,196,0.3),
     ("note",470,198,0.2),("window",810,56,0.92)],
    board=(680,22,200,112,"THE PACK",[("2022","4 pp"),("now","31 pp"),("team","12 &rarr; 8")]),
    clockat=(600,44,22,4,20))
S["pb03-f3"]=lambda: f_icons([("deadline","finished in the last two days"),
    ("note","a round number, circled"),("note","a four-page report"),
    ("folder","a thirty-one-page report"),("desk","a team of twelve becoming eight"),
    ("envelope","work made for each other")],3)
S["pb03-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The task","The duration given","Days of real work in it","What the rest is"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The roundest number in our plan: ______________________"), 660)
S["pb03-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 3",
    "Project office &middot; work and the time available &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> <i>Parkinson's Law</i> appeared in <b>The Economist</b> on "
    "<b>19 November 1955</b>. The author, <b>C. Northcote Parkinson</b>, was a <b>naval "
    "historian</b>. It later opened his book, published in <b>1958</b>.</p>"
    "<p style='text-align:center;font-size:17px'><b>Work expands so as to fill the time available "
    "for its completion.</b></p>"
    "<p><b>What the column was actually about.</b> Not tasks. <b>Office staff.</b> His evidence was "
    "the British Admiralty between <b>1914</b> and <b>1928</b>.</p>"
    + table_html(["","1914","1928"],
      [["capital ships","<b>62</b>","<b>20</b>"],
       ["officers and men","<b>146,000</b>","<b>100,000</b>"],
       ["Admiralty officials","<b>about 2,000</b>","<b>about 3,569</b>"]])
    + "<p><b>The fleet got smaller and the office got bigger</b>, and he put the growth in "
    "officials at <b>78 percent</b>. His two reasons: an official wants to <b>multiply "
    "subordinates, not rivals</b>, and <b>officials make work for each other</b>.</p>"
    "<p><b>What it is not.</b> It is <b>satire</b>, in a weekly magazine, by a historian, with real "
    "statistics in it. <b>It is not a measured law of how long work takes</b>, and the elderly lady "
    "spending all day on one postcard is an illustration, not data.</p>"
    "<p><b>Our own version.</b> Our monthly pack was <b>4 pages in 2022</b> and is <b>31 pages</b> "
    "now. Over the same three years the team went from <b>12 people to 8</b>. Each page was added "
    "by somebody sensible, after a question nobody could answer. <b>Not one page has ever been "
    "removed. Pages read by the board: six.</b></p>"
    "<p><b>And the honest other half.</b> We shortened <b>three</b> timeboxes last year. <b>Two "
    "finished on time and well.</b> The third was the harbour survey: it came back thin and we paid "
    "for a second visit in October. <b>Squeezing did not make that work faster. It made it worse, "
    "and twice.</b></p>",
    "Source: C. Northcote Parkinson, Parkinson's Law, The Economist, 19 November 1955; later the "
    "opening chapter of Parkinson's Law: The Pursuit of Progress, John Murray, 1958. It is a "
    "satirical essay by a naval historian whose evidence concerns the growth of administrative "
    "staff, not the duration of tasks; it offers no measurement of project work, and it does not "
    "claim that work can be completed in any period chosen for it."), 620)
S["pb03-f6"]=lambda: f_realia(tbl("The zero conditional and tendency", None,
    ["Structure","What it says","Example"],
    [["<b>if</b> + present, present","always true",
      "<b>If</b> you give it four weeks, it <b>takes</b> four weeks."],
     ["<b>tends to</b>","a tendency, not a rule","Work <b>tends to</b> fill the time."],
     ["<b>usually</b>","most of the time","The pack <b>usually</b> grows in March."],
     ["<b>whenever</b>","every time","<b>Whenever</b> a question is asked, a page is added."],
     ["<b>as a rule</b>","&nbsp;","&nbsp;"],
     ["<b>generally</b>","&nbsp;","&nbsp;"]],
    note="Using <i>will</i> in the second half turns a general truth into a prediction about one "
    "case."), 620)
S["pb03-f7"]=lambda: f_line([("2022",4),("2023",12),("2024",23),("2025",31)],
    unit="pages in the monthly pack")
S["pb03-f8"]=lambda: f_icons([("timer","a task in a fixed box"),
    ("note","a round number"),("deadline","a last-minute finish"),
    ("note","a thin report"),("folder","a thick report"),
    ("desk","a shrinking team")],3)
S["pb03-f9"]=lambda: f_realia(tbl("Audit of the monthly pack",
    "Eleven of thirty-one pages. The last column was the hard one to fill in.",
    ["Page","What is on it","Who asked for it","Added","Who reads it"],
    [["3","Programme summary","the board","2022","the board"],
     ["4","Milestone table","the board","2022","the board"],
     ["7","Cost against budget","L. Tran","2022","the board"],
     ["9","Risk top five","E. Okonjo","2023","the board"],
     ["11&ndash;19","Supplier order tables","O. Nasser","2023","O. Nasser"],
     ["20&ndash;24","Quality and test records","W. Zhao","2024","<b>the client's engineer</b>"],
     ["25","Training status","HR","2024","<b>&mdash;</b>"],
     ["26","Site photographs","nobody remembers","2024","<b>&mdash;</b>"],
     ["27","Carbon summary","a tender question","2025","<b>&mdash;</b>"],
     ["28","Social value table","a tender question","2025","<b>&mdash;</b>"],
     ["29","Lessons log","a previous audit","2025","<b>&mdash;</b>"]],
    note="<b>Five pages have no reader and nobody has ever asked to remove one.</b> Pages 20 to 24 "
    "are read by somebody nobody here knew was reading them."), 720)
S["pb03-f10"]=lambda: f_scene(960,440, people=[("nadia",290,172,{}),
     ("hanna",400,176,{"seated":True}),("omar",700,172,{})],
    props=[("desk",240,0,1.2),("folder",360,196,0.3),("note",440,198,0.2),
     ("computer",520,138,0.44),("door",760,74,0.88),("window",110,56,0.78)],
    board=(560,22,190,112,"PAGES",[("read","6"),("printed","31")]),
    clockat=(215,44,22,4,30))
S["pb03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Plan row, as written", None,
        "<p><b>Harbour survey &mdash; 4 weeks.</b></p>"
        "<p style='color:#6b6861;font-size:13px'>A tidy number. Nobody can defend it and nobody "
        "can attack it.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Plan row, broken down", None, ["","Days"],
      [["diving and recording","<b>12</b>"],["tide window, no dive possible","<b>3</b>"],
       ["waiting for the harbour inspector","<b>4</b>"],
       ["mobilization and demobilization","<b>1</b>"],
       ["<b>total working days</b>","<b>20</b>"]],
      note="<b>If it is cut to three weeks, the second dive goes.</b> That is what happened in "
      "October."), w)[0:3],
    w=940, h=280)
S["pb03-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note, as sent", None,
        "<p><b>The survey takes four weeks.</b></p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note, rewritten", None,
        "<p style='line-height:1.85'><b>12</b> days of diving and recording.<br>"
        "<b>8</b> days of named waiting: tide window (3), harbour inspector (4), mobilization "
        "(1).<br><b>Total 20 working days &mdash; four weeks, calculated.</b><br>"
        "<b>If shortened to three weeks, the second dive goes</b>, as in October, when we paid for "
        "a second visit.</p>"), w)[0:3],
    w=940, h=270)
S["pb03-f13"]=lambda: f_realia(form("Duration planner",
    [("Days of real work",""),("Days of waiting, with a name on each",""),("The total",""),
     ("What gets thinner if it is shortened",""),("What happened last time",""),
     ("The one compression that costs nothing","")]), 520)
S["pb03-f14"]=lambda: f_scene(1000,450,
    people=[("ida",60,176,{}),("hanna",135,172,{}),("nadia",210,176,{"seated":True}),
     ("omar",290,172,{"seated":True}),("nkemelu",370,176,{"seated":True}),
     ("wei",445,172,{}),("lars",520,176,{"seated":True}),("karin",595,170,{}),
     ("ines",660,172,{}),("ravi",725,170,{}),("sofia",790,172,{}),
     ("junseo",850,170,{}),("mei",910,172,{}),("oskar",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("folder",548,198,0.24),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,210,118,"WHICH PAGE?",[("printed","31"),("read","6"),("no reader","5")]),
    clockat=(272,34,22,5,0))
S["pb03-f15"]=lambda: f_chart([("under five pages",4),("five to fifteen",8),
    ("sixteen to thirty",7),("over thirty",5),("we do not have one",3)])
S["pb03-f16"]=lambda: f_realia(doc("On a desk in May",
    "What was on it at five o'clock",
    "<p><b>Two packs.</b> Four pages from 2022; thirty-one from this year.</p>"
    "<p><b>A page audit.</b> Five empty cells in the <i>who reads it</i> column.</p>"
    "<p><b>An invoice</b> for a second harbour survey, October.</p>"
    "<p><b>A magazine page from 1955.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The 1955 column is a joke about naval office staff "
    "with real statistics in it, and we quote it at the welders instead of at ourselves. Nobody "
    "here adds a page to look busy; they add it because a question frightened them once and a page "
    "is the cheapest insurance against it ever happening again. Until removing a page is as easy as "
    "adding one, the pack will only ever grow, whatever any of us believes about Parkinson.</i></p>",
    "Five o'clock. Thirty-one pages, six read, and one survey paid for twice."), 600)
