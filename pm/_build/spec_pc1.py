# -*- coding: utf-8 -*-
"""Throughline Book 3 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["pc00-f1"]=lambda: f_realia(tbl("Six things you brought from Book 2",
    "One example each, from a progress meeting",
    ["What you have","An example"],
    [["Dependency","Commissioning <b>cannot start until</b> the test <b>passes</b>."],
     ["Ranges","Seven weeks, <b>at worst</b> eleven."],
     ["Comparatives with data","Twenty-two percent <b>higher than</b> the gate figure."],
     ["<i>By</i> and <i>to</i>","It rose <b>by</b> 44 percent, <b>to</b> 3.46 million."],
     ["<i>The more &hellip; the more</i>","<b>The more</b> people, <b>the more</b> links."],
     ["Quantifiers","<b>None of</b> the three <b>was</b> stopped on purpose."]],
    note="Six boxes. This book asks the next question: how do you know where you are, and what do "
    "you do about it?"), 580)
S["pc00-f2"]=lambda: f_realia(doc("Forty-one percent", "Of what?",
    "<p style='font-size:24px;text-align:center'><b>41%</b></p>"
    + table_html(["What it might mean","What it actually measures"],
      [["<b>1 Time has passed</b>","the calendar, and nothing else"],
       ["<b>2 Money has been spent</b>","the account, and nothing else"],
       ["<b>3 Tasks have been ticked</b>","how many boxes, not how big they were"],
       ["<b>4 Work has been completed</b>","<b>the only one of the four that is progress</b>"]]),
    "Most reports mean the first or the second and are read as the fourth. Nobody is lying: the "
    "number simply does not say which one it is."), 620)
S["pc00-f3"]=lambda: f_realia(doc("Taped inside a notebook",
    "Three questions a percentage cannot answer",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;Percent of what?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Of the money, the time, the tasks, or the "
    "work?</span><br>"
    "<b>2 &nbsp;Measured how, and by whom?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>The person who measures it is usually the person "
    "being measured.</span><br>"
    "<b>3 &nbsp;Compared with what was planned by now?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>41 percent is good news or bad news, and the "
    "figure alone cannot say which.</span></p>",
    "The third question is the whole of Unit 1. A number with no plan beside it is a fact without "
    "a verdict."), 580)
S["pc00-f4"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report 1", None,
        "<p style='font-size:17px'><b>41 percent complete. Amber.</b></p>"
        "<p style='color:#6b6861;font-size:13px'>Five words. It cannot be wrong, which is the "
        "problem Book 2 ended on.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Report 2", None,
        "<p style='line-height:1.9'>Work completed: <b>41 percent</b>.<br>"
        "Planned by now: <b>52</b>.<br>Spent: <b>53</b>.<br>"
        "<b>We are behind and overspending, and the two have different causes.</b></p>"
        "<p style='color:#6b6861;font-size:13px'>Three times as long, and checkable line by "
        "line.</p>"), w)[0:3],
    w=880, h=280, lt="&nbsp;", rt="Which one can you argue with?")

# ---------------- Unit 1 ----------------
S["pc01-f1"]=lambda: f_icons([("spreadsheet","the planned value curve"),
    ("coins","money actually spent"),("pipe","work actually completed"),
    ("scales","a variance between two curves"),("calculator","a ratio, as a decimal"),
    ("cash","the budget at completion"),("danger","a forecast past the budget"),
    ("tally","a package measured by quantity"),("clipboard","a package scored by its owner"),
    ("book","a standard from 2018")],4)
S["pc01-f2"]=lambda: f_scene(920,420, people=[("linh",330,176,{"seated":True}),
     ("nkemelu",425,176,{"seated":True})],
    props=[("desk",250,0,1.22),("computer",150,138,0.54),("note",390,196,0.22),
     ("window",810,56,0.92)],
    board=(680,22,200,118,"THIS MONTH",[("planned","1.40"),("earned","1.11"),("actual","1.43")]),
    clockat=(600,44,22,9,20))
S["pc01-f3"]=lambda: f_icons([("pipe","meters of pipe laid"),
    ("scales","half at the start, half at the end"),("padlock","nothing until finished"),
    ("clipboard","a percentage written in by hand"),("spreadsheet","two curves diverging"),
    ("danger","a forecast crossing the budget")],3)
S["pc01-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The package","How progress is measured","Who produces the figure",
     "Could anybody check it"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The package nobody can verify: ______________________"), 680)
S["pc01-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 1",
    "Project office &middot; earned value &middot; page 1 of 1",
    "<p><b>The standard.</b> <b>ISO 21508</b>, <i>Earned value management in project and programme "
    "management</i>, dated <b>2018</b>. It is <b>guidance</b> and <b>not for certification</b>.</p>"
    + table_html(["Three numbers","","This month"],
      [["<b>planned value</b>","the value of the work that <b>should</b> have been done by now",
        "<b>1.40 m</b>"],
       ["<b>earned value</b>","the value of the work <b>actually</b> completed","<b>1.11 m</b>"],
       ["<b>actual cost</b>","the money <b>actually</b> spent","<b>1.43 m</b>"]])
    + table_html(["Two indices","","Say it like this"],
      [["<b>cost index</b>","1.11 &divide; 1.43 = <b>0.78</b>",
        "for every <b>100</b> we spend we get <b>78</b> of work"],
       ["<b>schedule index</b>","1.11 &divide; 1.40 = <b>0.79</b>",
        "for every <b>100</b> of planned work we have done <b>79</b>"]])
    + "<p><b>The forecast.</b> Budget <b>2.70 m</b> divided by the cost index gives about "
    "<b>3.48 m</b>. <b>That is within 20,000 of the figure the published optimism-bias upper bound "
    "gave us last year before we argued it down.</b> Nobody has yet decided whether that is a "
    "coincidence.</p>"
    "<p><b>Where the 1.11 comes from.</b> Earned value is only as good as the measurement of "
    "physical progress, and <b>the standard does not tell you how to measure it</b>. Of our "
    "<b>38</b> packages: <b>19</b> by <b>quantity</b>, <b>5</b> on a <b>fifty-fifty</b> rule, "
    "<b>14</b> by <b>a percentage written in by the person doing the work</b>. Where both existed, "
    "<b>the self-scored figure averaged 12 points higher</b>. <b>Not one of those fourteen people "
    "was being dishonest</b>: somebody at eighty percent of the difficulty of a job is genuinely at "
    "ninety percent of the thinking.</p>"
    "<p><b>One number that is not a problem.</b> The schedule index is in <b>money</b>. At the end "
    "of any project, finished or late, earned value equals planned value and <b>the schedule index "
    "returns to 1.00</b>. A project eleven weeks late reports a perfect schedule index on its last "
    "day. <b>That is a property of the measure</b>, and Unit 2 is the repair.</p>"
    "<p><b>What the standard does not do.</b> <b>No thresholds</b> &mdash; nothing says 0.78 "
    "requires action. <b>No method</b> for measuring physical progress. And it assumes a "
    "<b>baseline worth comparing with</b>: an index against a plan nobody believed is arithmetic "
    "about a fiction.</p>",
    "Source: ISO 21508:2018, Earned value management in project and programme management. It gives "
    "guidance on applying earned value management and is not intended for certification: it "
    "prescribes no thresholds for action, no method for measuring physical progress, and no "
    "particular reporting frequency, and its results depend entirely on the quality of the "
    "performance measurement baseline."), 620)
S["pc01-f6"]=lambda: f_realia(tbl("Ratios and indices", None,
    ["Structure","What it does","Example"],
    [["<b>for every &hellip; we get</b>","turns an index into a sentence",
      "<b>For every</b> 100 we spend <b>we get</b> 78 of work."],
     ["<b>per</b>","one unit against another","0.78 of work <b>per</b> unit of cost."],
     ["<b>divided by</b>","names the arithmetic","Earned value <b>divided by</b> actual cost."],
     ["<b>a ratio of</b>","formal","<b>A ratio of</b> 0.78."],
     ["<b>out of</b>","&nbsp;","&nbsp;"],
     ["<b>as a percentage of</b>","&nbsp;","&nbsp;"]],
    note="An index is a ratio with the units canceled out, so it needs a sentence to mean "
    "anything."), 640)
S["pc01-f7"]=lambda: f_line([("m1",0.22),("m3",0.62),("m5",0.95),("m7",1.11),("m9",1.34),
    ("m12",1.60)], unit="earned value, millions")
S["pc01-f8"]=lambda: f_icons([("spreadsheet","the planned curve"),("coins","actual cost"),
    ("pipe","earned value"),("scales","the gap between two curves"),
    ("calculator","a decimal index"),("tally","meters of pipe counted")],3)
S["pc01-f9"]=lambda: f_realia(tbl("Earned value report &middot; extract",
    "Nine of thirty-eight packages. The last column is the one that matters.",
    ["Work package","Budget","Planned","Earned","Actual","How progress is measured"],
    [["Site clearance","0.08","0.08","0.08","0.09","quantity: area cleared"],
     ["Base and chamber","0.42","0.42","0.40","0.47","quantity: cubic meters"],
     ["Inlet pipework","0.31","0.26","0.19","0.28","quantity: meters laid"],
     ["Pump installation","0.36","0.22","0.14","0.21","quantity: pumps set"],
     ["Control panel","0.19","0.12","0.09","0.13","<b>self-reported</b>"],
     ["Loop checks","0.11","0.04","0.02","0.03","quantity: loops tested"],
     ["Operating procedures","0.07","0.05","0.05","0.06","<b>self-reported</b>"],
     ["Training material","0.05","0.03","0.03","0.04","<b>self-reported</b>"],
     ["As-built drawings","0.09","0.04","0.02","0.03","<b>self-reported</b>"]],
    numcols=(1,2,3,4),
    note="<b>Fourteen of thirty-eight packages score themselves</b>, and where a quantity count "
    "also existed the self-scored figure ran about twelve points higher."), 720)
S["pc01-f10"]=lambda: f_scene(960,440, people=[("linh",290,176,{"seated":True}),
     ("nkemelu",400,172,{}),("grace",520,176,{"seated":True})],
    props=[("desk",240,0,1.2),("computer",120,138,0.5),("note",370,196,0.22),
     ("tally",460,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,112,"FORECAST",[("budget / 0.78","3.48"),("last year","3.46")]),
    clockat=(610,44,22,10,0))
S["pc01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report 1", None,
        "<p style='font-size:18px'><b>41% complete &middot; AMBER</b></p>"
        "<p style='color:#6b6861;font-size:13px'>No method, no base figures, no "
        "forecast.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Report 2", None, ["","&nbsp;"],
      [["planned / earned / actual","1.40 / <b>1.11</b> / 1.43"],
       ["cost index","for every 100 spent we get <b>78</b>"],
       ["schedule index","<b>79</b> of every 100 planned"],
       ["forecast","<b>3.48 m</b>, at today's index"],
       ["measured by","19 quantity &middot; 5 fifty-fifty &middot; <b>14 self-reported</b>"]]),
      w)[0:3],
    w=960, h=280)
S["pc01-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Monthly report, as issued", None,
        "<p><b>41 percent complete. Status: amber.</b></p>"), w)[0:3],
    lambda w,h: f_realia(doc("Monthly report, rewritten", None,
        "<p style='line-height:1.85'>Planned <b>1.40</b>, earned <b>1.11</b>, actual <b>1.43</b>, "
        "as of 30 September.<br>"
        "<b>For every 100 we spend we get 78 of work.</b><br>"
        "Forecast <b>3.48 m</b> &mdash; <b>assuming today's index continues</b>.<br>"
        "<b>19 packages counted, 5 on a rule, 14 self-reported.</b></p>"), w)[0:3],
    w=940, h=270)
S["pc01-f13"]=lambda: f_realia(form("Performance report planner",
    [("Planned value",""),("Earned value",""),("Actual cost",""),
     ("The two indices, as sentences",""),("The forecast and its assumption",""),
     ("How progress was measured","")]), 520)
S["pc01-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("linh",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("grace",290,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("wei",445,172,{}),("oskar",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("hanna",910,172,{}),("ahmad",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("tally",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"FOR EVERY 100",[("we get","78"),("planned","79")]),
    clockat=(278,34,22,10,0))
S["pc01-f15"]=lambda: f_chart([("counted quantities",6),
    ("a fifty-fifty or milestone rule",4),("a percentage from the person doing the work",11),
    ("time or money spent",7),("we do not measure it",3)])
S["pc01-f16"]=lambda: f_realia(doc("On a desk in October",
    "What was on it at five o'clock",
    "<p><b>The report.</b> Thirty-eight rows; <b>fourteen</b> highlighted.</p>"
    "<p><b>A quantity sheet.</b> Meters of pipe laid, counted by somebody who is not laying it.</p>"
    "<p><b>Two figures on one sheet.</b> <b>3.48</b> and <b>3.46</b>, from two unrelated "
    "methods.</p>"
    "<p><b>A page from a 2018 standard.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The arithmetic in this report took four minutes and is "
    "not in question; everything uncertain happened before the division. Fourteen people wrote "
    "honest answers to a question nobody had asked them precisely, which is how a procedure that is "
    "eighty percent solved becomes ninety percent reported. I have put the method beside every "
    "row, and from next month six of those fourteen will have something a stranger can "
    "count.</i></p>",
    "Five o'clock. The arithmetic was never the problem."), 600)

# ---------------- Unit 2 ----------------
S["pc02-f1"]=lambda: f_icons([("spreadsheet","a curve with a line read across it"),
    ("signpost","the point on the time axis"),("timer","the gap to today"),
    ("calculator","a decimal index"),("calendar","weeks elapsed"),
    ("deadline","a longer forecast duration"),("scales","an index drifting to one"),
    ("timetable","an index staying flat"),("book","a newsletter from 2003"),
    ("chain","the critical chain beside it")],4)
S["pc02-f2"]=lambda: f_scene(920,420, people=[("oskar",330,172,{}),("nkemelu",425,172,{})],
    props=[("computer",150,138,0.56),("desk",250,0,1.2),("note",470,196,0.22),
     ("window",810,56,0.92)],
    board=(680,22,200,118,"IN WEEKS",[("earned","22.5"),("elapsed","30"),("behind","7.5")]),
    clockat=(600,44,22,9,40))
S["pc02-f3"]=lambda: f_icons([("spreadsheet","reading across to the curve"),
    ("signpost","dropping a line to the axis"),("timer","the gap in weeks"),
    ("scales","a money index returning to one"),("timetable","a time index staying low"),
    ("chain","the chain that explains it")],3)
S["pc02-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The report","Does it give lateness","In money or weeks","Who could check it"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The report that gives no figure at all: ______________________"), 680)
S["pc02-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 2",
    "Project office &middot; lateness in weeks &middot; page 1 of 1",
    "<p><b>Where it comes from.</b> <b>Walt Lipke</b> published <i>Schedule is Different</i> in "
    "<b>The Measurable News</b> in <b>2003</b>. It is a <b>practitioners' newsletter</b>, not a "
    "standard, and the technique is called <b>earned schedule</b>.</p>"
    "<p><b>The method, in one sentence.</b> Take today's <b>earned value</b>, find the point on the "
    "<b>planned curve</b> where the plan reached that figure, and read the <b>date</b>.</p>"
    + table_html(["","&nbsp;"],
      [["earned value today","<b>1.11 m</b>"],
       ["the plan reached 1.11 m at","<b>week 22.5</b> &larr; the earned schedule"],
       ["time actually elapsed","<b>week 30</b> &larr; the actual time"],
       ["<b>schedule variance, in time</b>","<b>&minus;7.5 weeks</b>"],
       ["<b>time index</b>","22.5 &divide; 30 = <b>0.75</b>"],
       ["<b>forecast duration</b>","39 &divide; 0.75 = <b>about 52 weeks</b>"]])
    + "<p><b>Why this exists at all.</b> The money-based schedule index on this project is "
    "<b>0.79</b>. On the <b>last day</b> of any project &mdash; early, on time or eleven weeks late "
    "&mdash; earned value equals planned value, so that index equals <b>1.00</b>. <b>A project that "
    "finishes thirteen weeks late reports a perfect schedule index on the day it finishes.</b> The "
    "time index does not do this.</p>"
    "<p><b>What it still cannot see.</b> <b>Which activities are late</b> &mdash; not one word; it "
    "is a whole-project measure. It rests on the same two things as the money figures: a baseline "
    "worth comparing with, and an honest measurement of physical progress. <b>If the 1.11 is twelve "
    "points high, so is the week 22.5.</b> And it assumes today's rate continues: on this project "
    "the valves arrive in week 17 and the chain afterwards is faster, so <b>our own view is 47 "
    "weeks, not 52</b> &mdash; and that view comes from the schedule, not from this arithmetic.</p>"
    "<p><b>What the technique is not.</b> A published technique with case reports behind it rather "
    "than a standard. <b>There is no requirement anywhere to use it.</b> It makes the lateness of a "
    "whole project visible in weeks, and it does that one job.</p>",
    "Source: W. Lipke, Schedule is Different, The Measurable News, 2003. It is a technique "
    "published in a practitioners' newsletter rather than a standard; it derives time measures from "
    "earned value data and therefore inherits the quality of the performance measurement baseline "
    "and of the physical progress measurement; it is a whole-project measure and identifies no "
    "individual late activity; and its duration forecast assumes that present performance "
    "continues."), 620)
S["pc02-f6"]=lambda: f_realia(tbl("Progress in time", None,
    ["Structure","What it does","Example"],
    [["<b>as of</b>","fixes the date of a figure","<b>As of</b> 30 September, earned 1.11 m."],
     ["<b>to date</b>","everything up to now","Spent <b>to date</b>: 1.43 m."],
     ["<b>behind by</b>","gives the gap","<b>Behind by</b> seven and a half weeks."],
     ["<b>ahead of</b>","the opposite","Two weeks <b>ahead of</b> the baseline."],
     ["<b>so far</b>","&nbsp;","&nbsp;"],
     ["<b>elapsed</b>","&nbsp;","&nbsp;"]],
    note="A figure with no date attached cannot be checked against anything."), 640)
S["pc02-f7"]=lambda: f_line([("m3",0.91),("m5",0.86),("m7",0.79),("m9",0.84),("m11",0.91),
    ("m13",1.00)], unit="the money schedule index, by month")
S["pc02-f8"]=lambda: f_icons([("spreadsheet","a line read across"),
    ("signpost","a line dropped to the axis"),("timer","a gap of weeks"),
    ("scales","a money index rising to one"),("timetable","a time index staying flat"),
    ("chain","one link marked on a chain")],3)
S["pc02-f9"]=lambda: f_realia(tbl("Schedule performance note",
    "Six measures, and what each one covers",
    ["Measure","Value","How derived","What it covers","What it cannot say"],
    [["earned value","1.11 m","sum of package earned values","the whole project",
      "which package is behind"],
     ["earned schedule","week 22.5","read across the baseline curve","the whole project",
      "which activity"],
     ["actual time","week 30","the calendar","the whole project","&mdash;"],
     ["variance in time","&minus;7.5 weeks","22.5 &minus; 30","the whole project",
      "whose work it is"],
     ["time index","0.75","22.5 &divide; 30","the whole project","the cause"],
     ["forecast duration","52 weeks","39 &divide; 0.75","the whole project",
      "<b>the valve delivery, which makes it 47</b>"]],
    note="<b>One number for the alarm, another for the address.</b> The address on this project is "
    "the valve chain, weeks 9 to 17."), 720)
S["pc02-f10"]=lambda: f_scene(960,440, people=[("oskar",290,172,{}),
     ("sofia",400,176,{"seated":True}),("nkemelu",520,176,{"seated":True})],
    props=[("computer",120,138,0.5),("desk",240,0,1.2),("note",370,196,0.22),
     ("chain",460,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,112,"TWO VIEWS",[("arithmetic","52 wk"),("schedule","47 wk")]),
    clockat=(200,44,22,10,0))
S["pc02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1", None,
        "<p><b>Schedule performance index: 0.79.</b></p>"
        "<p style='color:#6b6861;font-size:13px'>In money. No weeks anywhere on the page, and the "
        "figure improves as the project gets later.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2", None,
        "<p style='line-height:1.85'><b>Behind by 7.5 weeks</b>, as of 30 September.<br>"
        "Earned schedule <b>week 22.5</b>; elapsed <b>week 30</b>.<br>"
        "Time index <b>0.75</b>.<br><b>52 weeks</b> at today's rate; <b>47</b> on the schedule.<br>"
        "<b>It names no activity. The address is the valve chain.</b></p>"), w)[0:3],
    w=960, h=290)
S["pc02-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note, as sent", None,
        "<p><b>SPI 0.79.</b></p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note, rewritten", None,
        "<p style='line-height:1.85'>Earned <b>1.11</b>; plan reached it at <b>week 22.5</b>; "
        "<b>30</b> weeks elapsed.<br><b>Behind by 7.5 weeks.</b><br>"
        "<b>52</b> at today's rate, <b>47</b> on the schedule &mdash; the difference is one "
        "delivery.<br><b>Eight packages are self-scored, so 7.5 is probably an "
        "understatement.</b></p>"), w)[0:3],
    w=940, h=270)
S["pc02-f13"]=lambda: f_realia(form("Schedule note planner",
    [("Earned value to date",""),("The week the plan reached it",""),("Weeks elapsed",""),
     ("The gap",""),("The two forecasts, with the reason",""),
     ("The weakness of your own figure","")]), 520)
S["pc02-f14"]=lambda: f_scene(1000,450,
    people=[("hanna",60,176,{}),("oskar",135,172,{}),("sofia",210,176,{"seated":True}),
     ("nkemelu",290,172,{"seated":True}),("linh",370,176,{"seated":True}),
     ("nadia",445,172,{}),("wei",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("grace",910,172,{}),("ahmad",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("note",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,118,"THE LAST DAY",[("money index","1.00"),("time index","0.75")]),
    clockat=(278,34,22,11,0))
S["pc02-f15"]=lambda: f_chart([("yes, every month",3),("sometimes",6),
    ("only in money",8),("only as a color",7),("we avoid the word",4)])
S["pc02-f16"]=lambda: f_realia(doc("On a desk in October",
    "What was on it at five o'clock",
    "<p><b>A curve printout</b> with a horizontal line read across it and a vertical line dropped "
    "to week <b>22.5</b>.</p>"
    "<p><b>A sheet of two forecasts.</b> <b>52</b> and <b>47</b>.</p>"
    "<p><b>A critical chain printout</b> with the valve link circled.</p>"
    "<p><b>A page from a 2003 newsletter.</b></p>"
    "<p><b>A note of three sentences.</b> <i>This took three lines of arithmetic on numbers the cost "
    "report already had, and nobody here had done it for eleven years because the old measure got "
    "better as we got later. The number names no activity, so anybody using it to blame the "
    "pipework team is misusing it, and I have written that sentence above the figure rather than "
    "below it. Fourteen of our packages are self-scored and ran twelve points high, which means "
    "seven and a half weeks is the optimistic version.</i></p>",
    "Five o'clock. Three lines of arithmetic, eleven years late."), 600)

# ---------------- Unit 3 ----------------
S["pc03-f1"]=lambda: f_icons([("danger","a grid of colored squares"),
    ("meeting","people writing ideas on cards"),("envelope","a questionnaire to experts"),
    ("scales","a bow tie with barriers"),("chain","a fault tree"),
    ("note","a scenario in six lines"),("spreadsheet","options scored against criteria"),
    ("calculator","a simulation's spread"),("clipboard","a checklist"),
    ("book","a standard from 2019")],4)
S["pc03-f2"]=lambda: f_scene(940,430, people=[("ida",300,172,{}),("nadia",395,172,{})],
    props=[("board",110,80,0.74),("desk",250,0,1.2),("note",460,196,0.22),
     ("window",830,56,0.9)],
    board=(690,22,200,118,"ONE RISK",[("matrix","rank 4"),("bow tie","rank 1")]),
    clockat=(610,44,22,2,20))
S["pc03-f3"]=lambda: f_icons([("danger","a score on a grid"),
    ("scales","a bow tie with one barrier"),("note","a written scenario"),
    ("coins","two options priced"),("meeting","a workshop"),
    ("envelope","a round of expert opinions")],3)
S["pc03-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The risk","The technique","What it asks for","What it does not ask about"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="What the matrix cannot see: ______________________"), 680)
S["pc03-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 3",
    "Project office &middot; ways of assessing a risk &middot; page 1 of 1",
    "<p><b>The standard.</b> <b>IEC 31010</b>, <i>Risk management &mdash; Risk assessment "
    "techniques</i>, dated <b>2019</b>. It is the <b>second edition</b> and replaced "
    "<b>ISO/IEC 31010:2009</b>. <b>Note the change of prefix</b>: the number stayed and the "
    "publisher designation did not, which is a small lesson in citing the edition and not the "
    "number.</p>"
    + table_html(["What you want to do","Techniques described include"],
      [["draw views out of people","brainstorming, structured interviews, <b>Delphi</b>"],
       ["find what could go wrong",
        "checklists, <b>scenario analysis</b>, failure mode analysis"],
       ["find causes","<b>fault tree</b>, cause-and-effect analysis"],
       ["understand consequences","event tree, <b>bow tie</b>"],
       ["judge significance","consequence/likelihood <b>matrix</b>"],
       ["choose between options","cost-benefit analysis, multi-criteria analysis"]])
    + "<p><b>A correction to something we wrote in Book 1.</b> We said the five-by-five matrix was "
    "not in the risk management guidelines, and that was true: ISO 31000 contains no matrix. <b>The "
    "matrix is in this standard</b>, described as one technique among many, <b>with its limitations "
    "stated</b>. So we were right that it is not a requirement, and <b>wrong to think it was the "
    "only tool on the shelf</b>. It took us eleven years to open the shelf.</p>"
    "<p><b>One risk, four techniques.</b> <b>The matrix:</b> racking supplier misses the March "
    "delivery &mdash; likelihood <b>3</b>, consequence <b>3</b>, score <b>9</b>, <b>ranked "
    "fourth</b>. <b>A bow tie</b>, in forty minutes: <b>one barrier</b> &mdash; a weekly telephone "
    "call &mdash; and <b>no recovery control whatever</b>. <b>A scenario</b>, six lines: racking in "
    "May, fit-out stands down three weeks, handover to November, the client's commissioning "
    "engineer then unavailable until January.</p>"
    + table_html(["Two options, priced","Cost","What it buys"],
      [["second supplier, quoted","<b>4,000</b>","a recovery control"],
       ["nothing","0","an exposure the scenario puts near <b>60,000</b>"]])
    + "<p><b>The matrix ranked it fourth and the bow tie ranked it first</b>, and neither technique "
    "was wrong: they were answering different questions. <b>We paid the 4,000.</b></p>"
    "<p><b>What the standard will not do.</b> It <b>will not choose a technique for you</b>: it "
    "gives attributes and <b>no decision rule</b>. Several techniques need <b>data or "
    "specialists</b> we do not have. It is guidance, not for certification, and it states plainly "
    "that <b>risk assessment supports a decision and does not make one</b>.</p>",
    "Source: IEC 31010:2019, Risk management &mdash; Risk assessment techniques, second edition, "
    "replacing ISO/IEC 31010:2009. It describes techniques and their attributes, strengths and "
    "limitations without prescribing which to use; many techniques require data or expertise that "
    "may not be available; it is guidance rather than requirements and is not intended for "
    "certification; and it states that risk assessment supports decision-making rather than "
    "replacing it."), 620)
S["pc03-f6"]=lambda: f_realia(tbl("Contrast and comparison", None,
    ["Structure","What it does","Example"],
    [["<b>whereas</b>","joins two contrasting clauses",
      "The matrix ranks, <b>whereas</b> the bow tie counts barriers."],
     ["<b>while</b>","the same, slightly softer",
      "<b>While</b> the matrix is quick, it asks only two questions."],
     ["<b>unlike</b>","+ noun","<b>Unlike</b> the matrix, a bow tie shows controls."],
     ["<b>by contrast</b>","starts a new sentence",
      "<b>By contrast</b>, a scenario is written in words."],
     ["<b>both &hellip; and</b>","&nbsp;","&nbsp;"],
     ["<b>neither &hellip; nor</b>","&nbsp;","&nbsp;"]],
    note="<b>Whereas</b> and <b>while</b> join clauses; <b>unlike</b> takes a noun."), 640)
S["pc03-f7"]=lambda: f_chart([("risk 1: 3 barriers, 2 recovery",5),
    ("risk 2: 2 barriers, 1 recovery",3),("risk 3: 2 barriers, 1 recovery",3),
    ("risk 5: 3 barriers, 1 recovery",4),("racking: 1 barrier, 0 recovery",1)],
    unit="controls in place")
S["pc03-f8"]=lambda: f_icons([("danger","a colored grid"),("scales","a bow tie"),
    ("chain","a fault tree"),("note","a written scenario"),
    ("coins","two priced options"),("meeting","a workshop with cards")],3)
S["pc03-f9"]=lambda: f_realia(tbl("Risk sheet &middot; top five",
    "One row moves from fourth to first when a second technique is used",
    ["Risk","Score","Matrix rank","Barriers","Recovery controls","Revised rank"],
    [["Ground conditions worse than survey","16","1","3","2","2"],
     ["Client's engineer unavailable","12","2","2","1","3"],
     ["Harbour inspector unavailable in June","12","3","2","1","4"],
     ["<b>Racking supplier misses March</b>","<b>9</b>","<b>4</b>","<b>1</b>","<b>0</b>",
      "<b>1</b>"],
     ["Wet autumn floods the yard","9","5","3","1","5"]],
    numcols=(1,2,3,4,5),
    note="<b>Two techniques, two ranks, and neither of them wrong.</b> The matrix ranks by "
    "likelihood and consequence; it has no way of asking how many things stand between us and the "
    "event."), 720)
S["pc03-f10"]=lambda: f_scene(960,440, people=[("ida",290,172,{}),
     ("nkemelu",400,176,{"seated":True}),("okonjo",520,172,{})],
    props=[("board",100,78,0.7),("desk",240,0,1.2),("spreadsheet",370,196,0.2),
     ("coins",460,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,112,"ASKED FOR",[("second supplier","4,000"),("exposure","60,000")]),
    clockat=(200,44,22,2,30))
S["pc03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Assessment 1 &middot; the register row", None,
      ["","&nbsp;"],
      [["risk","racking supplier misses March"],["likelihood","3"],["consequence","3"],
       ["score","9"],["rank","<b>4 of 61</b>"]],
      note="Correct, and silent about controls."), w)[0:3],
    lambda w,h: f_realia(doc("Assessment 2 &middot; three more techniques", None,
        "<p style='line-height:1.85'><b>Bow tie:</b> one barrier (a weekly call), <b>no recovery "
        "control</b>.<br><b>Scenario:</b> racking in May &rarr; fit-out stands down 3 weeks &rarr; "
        "handover November &rarr; client's engineer unavailable to January.<br>"
        "<b>Options priced:</b> second supplier <b>4,000</b>; doing nothing, exposure near "
        "<b>60,000</b>.</p>"), w)[0:3],
    w=960, h=280)
S["pc03-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note, as written", None,
        "<p><b>Racking delivery: score 9, rank 4. Being managed.</b></p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note, rewritten", None,
        "<p style='line-height:1.85'>Matrix: <b>9</b>, rank <b>4</b>.<br>"
        "Bow tie: <b>one barrier, no recovery control</b> &mdash; <b>unlike</b> the other four in "
        "the top five.<br>Scenario: handover to <b>November</b>, engineer to <b>January</b>.<br>"
        "<b>4,000 against an exposure near 60,000. I am asking for the 4,000.</b></p>"), w)[0:3],
    w=940, h=270)
S["pc03-f13"]=lambda: f_realia(form("Risk planner",
    [("The matrix score and rank",""),("The barrier count",""),
     ("The recovery control count",""),("The scenario, in six lines",""),
     ("Two options, priced",""),("What each technique is for","")]), 520)
S["pc03-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("ida",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("wei",445,172,{}),("oskar",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("hanna",910,172,{}),("ahmad",960,174,{})],
    props=[("desk",95,0,1.1),("board",155,84,0.64),("computer",335,140,0.4),
     ("printer",430,196,0.3),("spreadsheet",548,198,0.2),("table",645,0,1.0),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,215,112,"BETWEEN US AND THIS",[("barriers","1"),("recovery","0")]),
    clockat=(278,34,22,3,0))
S["pc03-f15"]=lambda: f_chart([("one",12),("two",7),("three",3),("more than three",2),
    ("none",4)])
S["pc03-f16"]=lambda: f_realia(doc("On a desk in March",
    "What was on it at five o'clock",
    "<p><b>Four diagrams of one risk.</b> A grid, a bow tie with one barrier, a branching tree and "
    "a priced table.</p>"
    "<p><b>A register of sixty-one rows.</b></p>"
    "<p><b>A quotation for four thousand.</b></p>"
    "<p><b>A page from a 2019 standard.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The matrix did its job correctly and still led us to "
    "the wrong decision, because we asked it a question it is not built to answer. We kept it for "
    "eleven years because it fits on a page and produces a number, and a number travels through an "
    "organization whereas a diagram needs somebody to carry it. One afternoon a quarter is what it "
    "costs to stop finding this out in March.</i></p>",
    "Five o'clock. Two techniques, two ranks, and four thousand spent."), 600)
