# -*- coding: utf-8 -*-
"""Clearline Book 6 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · A Guideline Is Not a Law ----------------
S["t10-f1"]=lambda: f_icons([("essay","a guideline with no seal"),("chair","one empty chair"),
    ("door","an open door, nobody pushed"),("folder","accepted for further examination"),
    ("handshake","agreement, inside a dotted circle"),("note","a published statement"),
    ("data","cases reaching agreement"),("envelope","a refusal letter"),
    ("spotlight","a reputational spotlight"),("meeting","whether to attend")], cols=5)
S["t10-f2"]=lambda: f_scene(920,430, people=[("hanna",300,166,{}),("yara",520,180,{"seated":True})],
    board=(700,20,210,150,"OUTCOMES",[("all cases","24%"),("mediated","57%")]),
    props=[("desk",400,252,1.3),("essay",340,206,0.3),("essay",362,204,0.3),
           ("computer",470,202,0.34)])
S["t10-f3"]=lambda: f_icons([("essay","non-binding guidelines"),("envelope","an invitation"),
    ("folder","a case accepted"),("meeting","mediation taking place"),
    ("note","a published statement"),("chair","a refusal to engage")], cols=3)
S["t10-f4"]=lambda: f_realia(tbl("","Team research &middot; what can it actually do?",
    ["The instrument","Binding or not","What the body may do","What it publishes"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What declining would cost:</b>"), 560)
S["t10-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; note to the board: the specific instance",
    "H. Lindqvist &middot; 12 November &middot; one page",
    "<p style='font-size:13.5px'><b>What is alleged.</b> <b>It is alleged that</b> three shifts of "
    "agency staff at a subcontracted warehouse worked without the rest breaks required by local "
    "law.</p>"
    + table_html(["It may","It may not"],
      [["decide whether to <b>accept</b> the complaint","<b>compel</b> us to attend"],
       ["offer <b>good offices</b> and, with agreement, mediate","<b>order</b> disclosure"],
       ["<b>publish a final statement</b>","<b>award</b> compensation or impose a penalty"],
       ["make <b>recommendations</b>","<b>enforce</b> anything in any court"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:10px 12px;font-size:13.5px'>"
      "<b>The guidelines are non-binding. We are expected to engage in good faith. We are not obliged "
      "to.</b></p>"
    + table_html(["","Figure"],
      [["Cases closed, most recent year","<b>52</b>, of which <b>32 (58%)</b> accepted for further examination"],
       ["Agreement, <b>all concluded cases</b>","<b>24%</b>"],
       ["Agreement, <b>where mediation occurred</b>","<b>57%</b>"],
       ["Same figure, previous year","<b>73%</b>"],
       ["Year before (41 instances closed)","<b>36%</b>"]])
    + "<p style='font-size:13.5px'><b>The figure that decides my advice.</b> <b>Refusal to engage was "
      "the commonest reason no agreement was reached &mdash; 64% of the cases without agreement.</b> "
      "<b>If we decline, we are electing to be that 64%.</b></p>"
    + "<p style='font-size:13.5px'><b>The guidelines are not law. The rest breaks are.</b></p>",
    "Source: OECD annual reports on the activity of National Contact Points for Responsible Business "
    "Conduct, and the accompanying data annexes."), 570)
S["t10-f6"]=lambda: f_realia(tbl("Word study","Modality, from obligation to permission",
    ["Form","Example","Creates an obligation?"],
    [["is required to / shall","The employer <b>shall</b> provide rest breaks.","yes, in law"],
     ["is expected to","Enterprises <b>are expected to</b> engage in good faith.","no — a standard of conduct"],
     ["should","Enterprises <b>should</b> respect human rights.","no — normative"],
     ["is encouraged to","Parties <b>are encouraged to</b> use mediation.","no — weaker than <i>should</i>"],
     ["is invited to","The company <b>is invited to</b> attend on 4 February.","no — a request"],
     ["may","The contact point <b>may</b> publish recommendations.","a power, not a duty"],
     ["has no power to","The contact point <b>has no power to</b> compel attendance.","an express limit"]],
    note="<i>Not obliged to</i> and <i>not expected to</i> are completely different positions."), 560)
S["t10-f7"]=lambda: f_chart([("mediated cases, 2 years ago",36),("mediated cases, last year",73),
    ("mediated cases, this year",57),("all concluded cases, this year",24)],
    unit="percent reaching agreement — samples of a few dozen cases; not averaged")
S["t10-f8"]=lambda: f_icons([("essay","an unsealed guideline"),("spreadsheet","may and may not"),
    ("data","three rates, small samples"),("note","a published statement"),
    ("chair","an empty chair"),("balance","two sentences about a company")], cols=3)
S["t10-f9"]=lambda: f_realia(doc("Legal note page", None,
    table_html(["It may","It may not"],
      [["accept the complaint","compel attendance"],["mediate, with agreement","order disclosure"],
       ["publish a final statement","award compensation"],["make recommendations","enforce in court"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:9px 12px;font-size:13.5px'>"
      "<b>Non-binding. Expected to engage. Not obliged to.</b></p>"
    + table_html(["Year","Agreement where mediation occurred","Instances closed"],
      [["Most recent","57%","52"],["Previous","73%","—"],["Year before","36%","41"]])
    + "<div style='display:flex;gap:14px;margin-top:10px'>"
      "<div style='border:1px solid #b9b7b0;padding:8px;font-size:12.5px;flex:1'><b>If we engage:</b> "
      "Lindmark participated; what was discussed; whether agreement was reached.</div>"
      "<div style='border:2px solid #6d3b6e;padding:8px;font-size:12.5px;flex:1'><b>If we decline:</b> "
      "Lindmark declined to engage.</div></div>"
    "<p style='font-size:12.5px;color:#6b6861;margin-top:8px'>There is no third version in which no "
    "statement is published.</p>",
    "OECD annual reports on National Contact Point activity"), 560)
S["t10-f10"]=lambda: f_scene(1000,440, people=[("yara",280,166,{}),("hanna",430,168,{}),
    ("grace",610,180,{"seated":True}),("marek",700,178,{"seated":True}),
    ("nour",790,180,{"seated":True})],
    board=(820,20,160,140,"EITHER WAY",[("engage","participated"),("decline","declined")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("envelope",520,206,0.2),
           ("computer",620,206,0.28)])
S["t10-f11"]=lambda: f_realia(tbl("Two notes","Compulsion only, or the whole position",
    ["","Note A","Note B"],
    [["Answers","can they make us? no","may and may not, in two columns"],
     ["Rates","&mdash;","three years, with sample sizes"],
     ["What is published","&mdash;","both alternative sentences"],
     ["The binding law","&mdash;","last paragraph, and the first item"]],
    note="One of these answers the question the board should be asking."), 540)
S["t10-f12"]=lambda: f_realia(doc("Two notes on a voluntary process", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> The guidelines are non-binding and the body cannot compel our attendance. We "
    "recommend not engaging.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> The body <b>may</b> accept the complaint, offer good "
    "offices, publish a final statement and make recommendations. It <b>has no power to</b> compel "
    "attendance, order disclosure, award anything or enforce anything. <b>We are expected to engage in "
    "good faith. We are not obliged to.</b> Agreement was reached in <b>24%</b> of all concluded cases "
    "and <b>57%</b> of mediated ones, against 73% and 36% in the two previous years on samples of a few "
    "dozen; <b>I have not averaged them</b>. <b>Refusal to engage was the commonest reason for failure "
    "— 64%.</b> A statement is published either way. <b>The guidelines are not law. The rest "
    "breaks are.</b></p>",
    "End a note about a voluntary process with the part that is not voluntary."), 560)
S["t10-f13"]=lambda: f_realia(tbl("","Soft-law planner",
    ["Box","Yours"],
    [["What is alleged",""],["What the body may do",""],["What it may not do",""],
     ["Published outcomes, with sample sizes",""],["What gets published either way",""],
     ["The part that is not voluntary",""]],
    note="Read what the body publishes before you read what it can decide."), 520)
S["t10-f14"]=lambda: f_scene(1140,480, people=[("hanna",280,164,{}),("yara",450,180,{"seated":True}),
    ("grace",540,178,{"seated":True}),("nour",630,180,{"seated":True}),
    ("marek",720,178,{"seated":True}),("ines",860,172,{}),("adeel",960,174,{})],
    board=(930,20,180,130,"NOT LAW",[("guidelines","non-binding"),("breaks","law")]),
    props=[("table",430,262,1.9),("essay",360,206,0.3),("flipchart",80,150,0.9),
           ("timesheet",1055,206,0.22),("envelope",1075,196,0.18)])
S["t10-f15"]=lambda: f_chart([("yes, by investors or customers",4),("yes, internally only",6),
    ("probably not",8),("never been named",4),("don't know",2)], unit="students")
S["t10-f16"]=lambda: f_scene(920,430, people=[("hanna",300,170,{"seated":True})],
    board=(680,20,230,150,"STATEMENT",[("agreed","2 of 4"),("refused","2 of 4")]),
    props=[("desk",400,252,1.2),("computer",470,200,0.42),("essay",330,204,0.3),
           ("invoice",120,206,0.24)])

# ---------------- Unit 11 · Wages, Productivity and the Gap ----------------
S["t11-f1"]=lambda: f_icons([("data","two lines separating"),("shopping","a basket of goods"),
    ("balance","nominal beside real"),("timer","output per hour"),
    ("salary","a pay slip"),("tally","a percentage point"),
    ("scales","a ratio"),("spreadsheet","deciles"),
    ("review","a low-pay threshold"),("meeting","one chart, two ends")], cols=5)
S["t11-f2"]=lambda: f_scene(920,430, people=[("nour",300,166,{}),("marek",520,180,{"seated":True})],
    board=(700,20,210,150,"1999–2024",[("productivity","+29%"),("real wages","+15%")]),
    props=[("desk",400,252,1.3),("essay",340,206,0.3),("computer",470,202,0.36),
           ("salary",560,208,0.22)])
S["t11-f3"]=lambda: f_icons([("data","a common starting point"),("change","divergence"),
    ("review","the accumulated gap"),("euro","a nominal figure"),
    ("balance","the same figure, deflated"),("spreadsheet","the bottom of the distribution")], cols=3)
S["t11-f4"]=lambda: f_realia(tbl("","Team research &middot; have the two lines moved together?",
    ["The output measure","Its change","The pay measure","Its change"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>For every unit of output, how much reached pay?</b>"), 560)
S["t11-f5"]=lambda: f_realia(doc("Lindmark Group &middot; pay round paper, page 1",
    "N. Khalil &middot; 14 November",
    "<p style='font-size:14px'><b>What this paper is not.</b> <b>This is not an argument for a larger "
    "pay envelope.</b> The figures below describe twenty-five years and cannot be addressed in one pay "
    "round. They are here because they explain <b>how four percent will be heard</b>.</p>"
    + table_html(["","Change, 1999 to 2024"],
      [["<b>Productivity</b>, high-income countries","<b>+29%</b>"],
       ["<b>Real wages</b>","about <b>+15%</b>"],
       ["<b>The gap</b>","<b>14 percentage points, accumulated over 25 years</b>"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:10px 12px;font-size:13.5px'>"
      "<b>For every two percent of additional output per hour over that period, a little under one per "
      "cent has reached pay.</b> Both figures are positive; the divergence is the finding.</p>"
    + table_html(["Global real wage growth",""],
      [["2022","<b>−0.9%</b>"],["2023","<b>+1.8%</b>"],
       ["2024, preliminary","<b>+2.7%</b> &mdash; the largest gain in more than 15 years"],
       ["2024, excluding China","<b>+2.3%</b>"]])
    + "<p style='font-size:13.5px'>Wage inequality has <b>narrowed in about two thirds of countries "
      "since 2000</b>. Close to <b>22%</b> of wage workers in low-income countries are low-paid. "
      "<b>Men earn more than women in every country income group and across the entire wage "
      "distribution</b> &mdash; not only on average.</p>"
    + "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:9px 12px;font-size:13.5px'>"
      "<b>A move from 4% to 5% is a rise of one percentage point, not a rise of one percent. It costs "
      "25% more than it sounds.</b> The management pack has reported this the wrong way twice.</p>",
    "Source: ILO, Global Wage Report 2024–25, for all external figures."), 570)
S["t11-f6"]=lambda: f_realia(tbl("Word study","Proportion and ratio",
    ["Form","Example"],
    [["for every X, Y","<b>For every</b> 2% of extra output, a little under 1% reached pay."],
     ["twice / half as fast as","Output grew <b>about twice as fast as</b> pay."],
     ["a gap of X points opened between","<b>A gap of 14 points opened between</b> the two over 25 years."],
     ["half as much again","Output rose <b>half as much again</b> as pay."],
     ["the ratio of X to Y","<b>The ratio of</b> productivity growth <b>to</b> wage growth is about 2 to 1."],
     ["X per Y","output <b>per</b> hour; cost <b>per</b> tonne"]],
    note="<i>Twice as fast as</i> compares rates. <i>Twice as much as</i> compares quantities."), 560)
S["t11-f7"]=lambda: f_line([("1999",0),("2005",8),("2010",14),("2015",20),("2020",25),("2024",29)],
    w=580, h=250, unit="cumulative growth, percent — productivity reaches 29; real wages reach about 15", ymin=-1)
S["t11-f8"]=lambda: f_icons([("note","this is not a claim for money"),("data","two diverging lines"),
    ("scales","a for-every ratio"),("tally","three recent years"),
    ("spreadsheet","the bottom decile"),("calculator","one point, twenty-five percent")], cols=3)
S["t11-f9"]=lambda: f_realia(doc("Pay paper page", None,
    "<p style='font-size:14px'><b>This paper is not a request for a larger envelope.</b></p>"
    + table_html(["1999 to 2024","Change"],
      [["Productivity, high-income countries","+29%"],["Real wages","about +15%"],
       ["<b>The gap</b>","<b>14 percentage points</b>"]])
    + "<p style='font-size:13.5px'><b>For every 2% of additional output per hour, a little under 1% "
      "reached pay.</b></p>"
    + table_html(["Recent global real wage growth",""],
      [["2022","−0.9%"],["2023","+1.8%"],["2024 (prelim.)","+2.7%"],["2024 ex-China","+2.3%"]])
    + "<p style='font-size:12.5px;color:#6b6861'>Inequality narrowed in about two thirds of countries "
      "since 2000. About 22% of wage workers in low-income countries are low-paid. Men earn more than "
      "women across the entire distribution.</p>"
    "<div style='border:2px solid #6d3b6e;padding:8px 12px;font-size:13.5px'><b>4% to 5% = one "
    "percentage point = 25% more money.</b></div>",
    "ILO, Global Wage Report 2024–25"), 560)
S["t11-f10"]=lambda: f_scene(1000,440, people=[("nour",280,166,{}),("marek",440,180,{"seated":True}),
    ("grace",530,178,{"seated":True}),("lars",620,180,{"seated":True}),
    ("yara",710,178,{"seated":True})],
    board=(820,20,160,140,"29 / 15",[("output","+29%"),("pay","+15%")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("calculator",520,206,0.2),
           ("computer",620,206,0.28)])
S["t11-f11"]=lambda: f_realia(tbl("Two pay papers","One figure, or the context",
    ["","Paper A","Paper B"],
    [["Opens with","four percent and a market comparison","what the paper is not"],
     ["The long view","&mdash;","29 against 15, gap in points"],
     ["Inconvenient figures","omitted","included at the same weight"],
     ["Arithmetic","one percent","one point, and 25% more money"]],
    note="One of these is read by the whole workforce."), 540)
S["t11-f12"]=lambda: f_realia(doc("Two pay papers", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> We propose four percent, which is in line with the market. Real wages are growing "
    "globally and the offer is competitive.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> <b>This is not a request for a larger envelope.</b> In "
    "high-income countries productivity rose <b>29%</b> between 1999 and 2024 and real wages rose about "
    "<b>15%</b>: <b>a gap of 14 percentage points has opened since 1999</b>, and <b>for every 2% of "
    "additional output per hour a little under 1% reached pay</b>. The recent picture is better and is "
    "in this paper deliberately: real wages fell 0.9% in 2022, recovered 1.8% in 2023 and were about "
    "2.7% in 2024 &mdash; 2.3% excluding China. <b>Four to five percent is one percentage point and "
    "25% more money</b>, and the pack has said it the wrong way twice.</p>",
    "Put the figure that weakens your case in your own paper, in the same type size."), 560)
S["t11-f13"]=lambda: f_realia(tbl("","Divergence planner",
    ["Box","Yours"],
    [["What this paper is not",""],["The long comparison, gap in points",""],
     ["A <i>for every</i> sentence",""],["The recent picture",""],
     ["The distribution figures",""],["The arithmetic correction",""]],
    note="A gap opening for twenty-five years cannot be closed in one pay round."), 520)
S["t11-f14"]=lambda: f_scene(1140,480, people=[("nour",280,164,{}),("marek",450,180,{"seated":True}),
    ("grace",540,178,{"seated":True}),("lars",630,180,{"seated":True}),
    ("yara",720,178,{"seated":True}),("ines",860,172,{}),("priya",960,174,{})],
    board=(930,20,180,130,"1 PT = 25%",[("output","+29%"),("pay","+15%")]),
    props=[("table",430,262,1.9),("essay",360,206,0.3),("flipchart",80,150,0.9),
           ("calculator",1060,200,0.2),("tray",1045,234,0.3)])
S["t11-f15"]=lambda: f_chart([("always points",3),("always percent",6),("we mix the two",10),
    ("never noticed",4),("nobody checks",2)], unit="students")
S["t11-f16"]=lambda: f_scene(920,430, people=[("nour",300,170,{"seated":True})],
    board=(680,20,230,150,"THE THREAD",[("replies","about 400"),("about","the 14 points")]),
    props=[("desk",400,252,1.2),("computer",470,200,0.42),("essay",330,204,0.3),
           ("note",120,208,0.22)])

# ---------------- Unit 12 · The Long View ----------------
S["t12-f1"]=lambda: f_icons([("data","a curve rising to a peak"),("review","a fan of possible paths"),
    ("folder","current policies"),("archive","high ambition"),
    ("truck","a freight multiplier"),("calendar","a 2050 diary page"),
    ("essay","two editions, two multipliers"),("noentry","a single number crossed out"),
    ("thermostat","a policy lever"),("meeting","one chart, two horizons")], cols=5)
S["t12-f2"]=lambda: f_scene(940,430, people=[("wei",300,166,{}),("yara",520,180,{"seated":True})],
    board=(700,20,230,150,"2100",[("central","10.2bn"),("95%","9.0–11.4")]),
    props=[("desk",420,252,1.3),("folder",350,208,0.26),("folder",372,206,0.26),
           ("computer",480,202,0.36)])
S["t12-f3"]=lambda: f_icons([("data","a projection"),("review","a prediction interval"),
    ("folder","one scenario"),("archive","another scenario"),
    ("thermostat","a policy lever"),("calendar","two vintages")], cols=3)
S["t12-f4"]=lambda: f_realia(tbl("","Team research &middot; projection or scenario?",
    ["The figure","Projection or scenario","Its range or assumptions","What it decides"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What would move it most?</b>"), 560)
S["t12-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; network strategy brief: the 2050 question",
    "W. Zhang &middot; 28 November &middot; two sections, two different kinds of sentence",
    "<p style='font-size:13.5px'><b>Section 1 &mdash; the projection. This has a range and no policy "
    "in it.</b></p>"
    + table_html(["","Figure"],
      [["World population, 2024","<b>8.2 billion</b>"],
       ["Projected peak","<b>about 10.3 billion</b>, in the <b>mid-2080s</b>"],
       ["Projected 2100","<b>about 10.2 billion</b>"],
       ["<b>Published 95% interval around 2100</b>","<b>9.0 to 11.4 billion</b>"],
       ["Movement between editions","the 2100 figure is about <b>6% lower</b> &mdash; some <b>700 million fewer people</b>"]])
    + "<p style='font-size:13.5px'><b>Section 2 &mdash; the scenarios. These have policy in them and "
      "no probability.</b></p>"
    + table_html(["","Figure"],
      [["Worldwide freight tonne-kilometers, 2019–2050, <b>current ambition</b>","<b>roughly double</b>"],
       ["The same measure, an <b>earlier edition</b>, <b>current policies</b>","a factor of <b>2.6</b>"],
       ["A <b>high-ambition regional</b> scenario","2050 demand about <b>11% lower</b>"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:10px 12px;font-size:13.5px'>"
      "<b>Different editions, baseline years and policy assumptions. There is no average of them that "
      "means anything.</b> <b>A scenario is not a forecast. A figure that policy can move by 11% is, by "
      "construction, not a prediction of anything.</b></p>"
    + "<p style='font-size:13.5px'><b>What I am not providing: a 2050 number.</b> <b>Were a single "
      "figure to be entered in the strategy, it would be quoted for twenty-five years without its "
      "interval or its scenario</b>, and I would rather be asked for it twice than supply it once.</p>",
    "Sources: UN DESA, World Population Prospects 2024, for the population figures and the interval. "
    "ITF Transport Outlook, 2023 and 2021 editions, for the freight scenarios — kept separate "
    "because they are separate."), 570)
S["t12-f6"]=lambda: f_realia(tbl("Word study","Scenario expressions",
    ["Form","Example","Claims"],
    [["under a scenario in which","<b>Under a scenario in which</b> policies tighten, demand is 11% lower.","consequence, not likelihood"],
     ["on current policies","<b>On current policies</b>, activity rises by a factor of 2.6.","consequence of inaction"],
     ["were X to hold","<b>Were the current ambition to hold</b>, tonne-kilometers <b>would</b> double.","consequence, hypothetical"],
     ["on the assumption that","<b>On the assumption that</b> fuel prices stay in range …","a named input"],
     ["in the central case","<b>In the central case</b> the peak falls in the mid-2080s.","the likeliest of a set"],
     ["all else equal","<b>All else equal</b>, a longer route raises cost per tonne.","one variable isolated"]],
    note="Scenario sentences use <i>would</i>, not <i>will</i>. The inverted <i>were X to hold</i> "
         "takes no <i>if</i>."), 560)
S["t12-f7"]=lambda: f_line([("2024",8.2),("2040",9.3),("2060",10.0),("2085",10.3),("2100",10.2)],
    w=600, h=260, unit="world population, billions — 95% interval around 2100: 9.0 to 11.4", mark=3, ymin=7.5)
S["t12-f8"]=lambda: f_icons([("review","a curve with a fan"),("folder","two scenario folders"),
    ("noentry","averaging crossed out"),("change","a reversible investment"),
    ("data","a single number crossed out"),("calendar","a next-vintage date")], cols=3)
S["t12-f9"]=lambda: f_realia(doc("Strategy brief page", None,
    "<p style='font-size:13.5px'><b>1 &middot; The projection</b> &mdash; probabilistic, no policy.</p>"
    + table_html(["","Figure"],
      [["2024","8.2 billion"],["Peak","about 10.3 billion, mid-2080s"],["2100","about 10.2 billion"],
       ["<b>95% interval, 2100</b>","<b>9.0 to 11.4 billion</b>"],["Moved between editions","about 6% lower"]])
    + "<p style='font-size:13.5px'><b>2 &middot; The scenarios</b> &mdash; conditional, no probability.</p>"
    + table_html(["","Figure"],
      [["2019–2050, current ambition","roughly double"],["Earlier edition, current policies","×2.6"],
       ["High-ambition regional","about 11% lower"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:9px 12px;font-size:13px'>"
      "<b>No average of these means anything.</b> A figure policy can move by 11% is, by construction, "
      "not a prediction.</p>"
    + table_html(["Instrument","Decides"],
      [["The projection, with its interval","capacity: how much, and how reversibly"],
       ["The scenarios","policy exposure: which assumptions we are betting on"],
       ["Neither","a single number for 2050"]]),
    "UN DESA, World Population Prospects 2024; ITF Transport Outlook, 2023 and 2021 editions"), 560)
S["t12-f10"]=lambda: f_scene(1000,440, people=[("lars",280,168,{"seated":True}),
    ("wei",440,166,{}),("grace",610,180,{"seated":True}),("yara",700,178,{"seated":True}),
    ("marek",790,180,{"seated":True})],
    board=(820,20,160,150,"9.0–11.4",[("peak","10.3bn"),("2100","10.2bn")]),
    props=[("table",400,252,1.5),("folder",340,208,0.26),("folder",362,206,0.26),
           ("note",520,206,0.2)])
S["t12-f11"]=lambda: f_realia(tbl("Two strategy pages","One figure, or two sections",
    ["","Page A","Page B"],
    [["2050 demand","one large figure","no single figure"],
     ["Range","&mdash;","95% interval, 9.0 to 11.4 billion"],
     ["Scenarios","merged into a trend","two editions, kept apart"],
     ["Recommendation","build","build the 15-year assets, lease the 40-year ones"]],
    note="One of these is quoted back at you in 2035."), 540)
S["t12-f12"]=lambda: f_realia(doc("Two strategy briefs", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> Freight demand will roughly double by 2050 and world population will reach ten "
    "point two billion. The strategy is built on these figures.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> World population <b>is projected to</b> peak at about "
    "<b>10.3 billion in the mid-2080s</b> and to ease to about <b>10.2 billion by 2100</b>, with a "
    "published <b>95% interval of 9.0 to 11.4 billion</b>; the 2100 figure <b>has been revised about 6% "
    "lower</b> between editions. <b>Were the current ambition scenario to hold</b>, worldwide "
    "tonne-kilometers <b>would</b> roughly double between 2019 and 2050; <b>on current policies</b> an "
    "earlier edition gives a factor of <b>2.6</b>; <b>under a high-ambition scenario</b> 2050 demand "
    "<b>would be about 11% lower</b>. <b>There is no average of these that means anything.</b> "
    "<b>I am not providing a 2050 number.</b></p>",
    "Keep <i>would</i> for scenario consequences and <i>is projected to</i> for likelihood."), 560)
S["t12-f13"]=lambda: f_realia(tbl("","Long-horizon planner",
    ["Box","Yours"],
    [["The projection, with its interval and vintage movement",""],
     ["The scenarios, with editions and assumptions",""],["Why they may not be combined",""],
     ["What each instrument decides",""],["What you are not providing",""],
     ["The next vintage review",""]],
    note="A projection answers <i>how likely?</i> A scenario answers <i>what would follow if?</i>"), 520)
S["t12-f14"]=lambda: f_scene(1140,480, people=[("wei",280,164,{}),("lars",450,180,{"seated":True}),
    ("yara",540,178,{"seated":True}),("grace",630,180,{"seated":True}),
    ("marek",720,178,{"seated":True}),("adeel",860,172,{}),("mei",960,174,{})],
    board=(930,20,180,130,"WOULD",[("peak","10.3bn"),("interval","2.4bn")]),
    props=[("table",430,262,1.9),("folder",360,208,0.26),("folder",382,206,0.26),
           ("flipchart",80,150,0.9),("essay",1060,206,0.26)])
S["t12-f15"]=lambda: f_chart([("a projection with a range",3),("a projection with no range",6),
    ("a scenario",4),("a single number of unknown origin",9),("none",3)], unit="students")
S["t12-f16"]=lambda: f_scene(920,430, people=[("wei",300,170,{"seated":True})],
    board=(680,20,230,150,"2035",[("quoted","4 documents"),("source","none")]),
    props=[("desk",400,252,1.2),("computer",470,200,0.42),("essay",330,204,0.3),
           ("folder",120,210,0.26)])
