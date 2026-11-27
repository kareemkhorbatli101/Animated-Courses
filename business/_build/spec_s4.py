# -*- coding: utf-8 -*-
"""Clearline Book 5 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · Revised by the Publisher ----------------
S["s10-f1"]=lambda: f_icons([("essay","same title, two dates"),("change","a figure replaced"),
    ("stamp","preliminary"),("certificate","final"),
    ("calendar","one month of twelve"),("clock","a timestamp"),
    ("folder","a version tab"),("data","one month standing alone"),
    ("worldmap","52 jurisdictions"),("meeting","two editions, one table")], cols=5)
S["s10-f2"]=lambda: f_scene(920,430, people=[("sofia",300,168,{}),("marek",500,176,{"seated":True})],
    board=(700,20,210,150,"FX TURNOVER",[("30 Sep","9.6tn"),("Dec","9.5tn")]),
    props=[("desk",400,252,1.3),("computer",470,202,0.4),("essay",340,206,0.3),
           ("calendar",600,196,0.26)])
S["s10-f3"]=lambda: f_icons([("stamp","preliminary"),("certificate","final"),
    ("change","the figure revised"),("tally","the growth rate revised"),
    ("calendar","one month measured"),("worldmap","52 reporting jurisdictions")], cols=3)
S["s10-f4"]=lambda: f_realia(tbl("","Team research &middot; which version is in your document?",
    ["The figure","Which release","Revised since","Does our document say"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What nine words would repair it:</b>"), 560)
S["s10-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; hedging policy, amendment to the figure on page 2",
    "M. Dolny, with S. Reyes &middot; 14 January &middot; one page",
    table_html(["The same figure, in two documents","Value","Change on the previous survey"],
      [["<b>As published 30 September</b>, preliminary release","<b>9.6 trillion dollars a day</b>","<b>+28%</b>"],
       ["<b>As published in the December quarterly review</b>, final data","<b>9.5 trillion dollars a day</b>","<b>+27%</b>"]])
    + "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:10px 12px;font-size:13.5px'>"
      "<b>Neither figure is an error.</b> The difference is about <b>1 percent</b> of the total and one "
      "percentage point of the growth rate. <b>For our purposes the difference is immaterial. The "
      "absence of a version is not.</b></p>"
    + "<p style='font-size:13.5px'><b>What the survey measures.</b> Turnover in <b>a single month "
      "&mdash; April &mdash; once every three years</b>, across <b>52 reporting jurisdictions</b>. It is "
      "a <b>daily average for that month</b>. <b>It is not an annual figure.</b></p>"
    + table_html(["","April 2025","Previous survey"],
      [["<b>Spot</b>","<b>3.0tn a day &mdash; 31% of turnover</b>","28%"],
       ["<b>Outright forwards</b>","<b>1.8tn a day &mdash; 19%</b>","15%"]])
    + "<p style='font-size:13.5px'><b>The repair.</b> Two figures, two dates, no choice made. If we "
      "print one figure and a reader finds the other, the question will not be about 1 percent.</p>",
    "Source: BIS Triennial Central Bank Survey 2025: preliminary release of 30 September 2025 and final "
    "data in the BIS Quarterly Review, December 2025. Both figures are the same institution's."), 570)
S["s10-f6"]=lambda: f_realia(tbl("Word study","The language of versions",
    ["Phrase","Example"],
    [["as published on","9.6 trillion <b>as published on</b> 30 September."],
     ["as published in","9.5 trillion <b>as published in</b> the December review."],
     ["as at","The figure <b>as at</b> 30 September was 9.6 trillion."],
     ["as reported in","<b>As reported in</b> the preliminary release, turnover rose 28%."],
     ["has since been revised","The figure <b>has since been revised</b> to 9.5 trillion."],
     ["now stands at","The final figure <b>now stands at</b> 9.5 trillion."],
     ["superseded by","The preliminary release is <b>superseded by</b> the December data."]],
    note="<i>As at</i> fixes a measurement point. <i>As of</i> also means <i>from now on</i>."), 560)
S["s10-f7"]=lambda: f_part("April 2025 turnover, 9.5tn a day",
    [("spot 3.0tn — 31%",31,BLUE),("outright forwards 1.8tn — 19%",19,AMBER),
     ("everything else — 50%",50,PLUM)])
S["s10-f8"]=lambda: f_icons([("essay","two covers, two dates"),("change","a figure replaced"),
    ("calendar","one month shaded"),("worldmap","52 markers"),
    ("quotemark","a drafted sentence"),("today","two dates side by side")], cols=3)
S["s10-f9"]=lambda: f_realia(doc("Policy amendment page", None,
    table_html(["Document","Figure","Change"],
      [["Preliminary release, 30 September","9.6tn a day","+28%"],
       ["Quarterly review, December","9.5tn a day","+27%"]])
    + "<p style='font-size:13.5px'><b>The 1 percent is immaterial. The missing version is not.</b></p>"
    "<div style='border:2px solid #8a5a1e;padding:10px 12px;font-size:13px;font-style:italic'>"
    "“Global foreign exchange turnover averaged 9.6 trillion dollars a day in April 2025 as "
    "published in the preliminary release of 30 September 2025, and 9.5 trillion as published in the "
    "December 2025 quarterly review. The survey measures a single month every three years across 52 "
    "jurisdictions.”</div>"
    "<p style='font-size:12.5px;color:#6b6861;margin-top:10px'>Spot 3.0tn, 31% of turnover against 28%. "
    "Outright forwards 1.8tn, 19% against 15%. Our exposure is forward-weighted.</p>",
    "BIS Triennial Central Bank Survey 2025 &middot; preliminary and final"), 560)
S["s10-f10"]=lambda: f_scene(980,440, people=[("lars",280,168,{"seated":True}),
    ("marek",440,166,{}),("sofia",600,180,{"seated":True}),("ines",690,178,{"seated":True})],
    board=(790,20,170,150,"9.6 / 9.5",[("Sep","+28%"),("Dec","+27%")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("calendar",520,196,0.24),
           ("note",600,206,0.2)])
S["s10-f11"]=lambda: f_realia(tbl("Two policy pages","Dated, or undated",
    ["","Page A","Page B"],
    [["The figure","9.6tn a day","9.6tn (30 Sep) and 9.5tn (Dec)"],
     ["Version named","no","both"],
     ["What the survey measures","not stated","one month, every three years, 52 jurisdictions"],
     ["Breakdown","&mdash;","spot 31%, forwards 19%"]],
    note="One of these is being read by an auditor."), 540)
S["s10-f12"]=lambda: f_realia(doc("Two amendments", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> Page 2 to be updated: global foreign exchange turnover is 9.5 trillion dollars a day. "
    "Previous figure superseded.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> Turnover averaged 9.6 trillion dollars a day in April "
    "2025, up 28 percent, <b>as published in the preliminary release of 30 September 2025</b>; the "
    "December quarterly review gives 9.5 trillion, up 27 percent, as final data. <b>The 1 percent is "
    "immaterial for sizing our limit. The absence of a version note is not.</b> The survey measures one "
    "month &mdash; April &mdash; every three years across 52 jurisdictions; the next observation is in "
    "2028. Spot 3.0 trillion, 31 percent against 28; outright forwards 1.8 trillion, 19 percent "
    "against 15. <b>Our exposure is forward-weighted, so the forwards share is the part that bears on "
    "our policy and the part nobody quotes.</b> Three other documents quote the September figure: all "
    "four to be amended identically.</p>",
    "Draft the replacement wording in full, in quotation marks. Whoever makes the change is not you."), 560)
S["s10-f13"]=lambda: f_realia(tbl("","Amendment planner",
    ["Box","Yours"],
    [["Both versions, with their documents",""],["Material / immaterial",""],
     ["What the measurement actually is",""],["The breakdown that bears on your decision",""],
     ["The exact replacement wording",""],["Why you are not choosing",""]],
    note="Write the exact words. It removes the only step where this can go wrong."), 520)
S["s10-f14"]=lambda: f_scene(1120,470, people=[("marek",290,166,{}),("lars",450,180,{"seated":True}),
    ("sofia",540,178,{"seated":True}),("ines",630,180,{"seated":True}),
    ("hanna",720,178,{"seated":True}),("yara",860,172,{}),("nour",960,174,{})],
    board=(920,20,180,130,"9.6 / 9.5",[("Sep","prelim"),("Dec","final")]),
    props=[("table",420,262,1.8),("essay",350,206,0.3),("essay",372,204,0.3),
           ("flipchart",80,150,0.9),("calendar",1055,196,0.24),("folder",1045,232,0.3)])
S["s10-f15"]=lambda: f_chart([("yes, with a date",4),("edition but no date",6),
    ("institution only",9),("no source at all",4),("never looked",3)], unit="students")
S["s10-f16"]=lambda: f_scene(900,420, people=[("sofia",300,170,{"seated":True}),("marek",660,172,{})],
    board=(660,20,230,150,"NEXT SURVEY",[("April","unusual?"),("total","higher")]),
    props=[("desk",390,250,1.2),("computer",460,200,0.4),("essay",330,204,0.3),
           ("calendar",120,200,0.3),("folder",150,212,0.26)])

# ---------------- Unit 11 · Not Comparable with Itself ----------------
S["s11-f1"]=lambda: f_icons([("roof","a roof over some"),("certificate","a legal seal"),
    ("queue","just over half shaded"),("review","a ruler replaced"),
    ("data","a line with a break"),("worldmap","fifty countries"),
    ("bankcard","a benefits card"),("envelope","an empty pension envelope"),
    ("magnifier","a note on comparability"),("meeting","two editions compared")], cols=5)
S["s11-f2"]=lambda: f_scene(920,430, people=[("nour",310,170,{"seated":True})],
    board=(680,20,220,150,"COVERAGE",[("2015","42.8%"),("now","52.4%")]),
    props=[("desk",400,252,1.3),("computer",470,202,0.38),("essay",330,206,0.3),
           ("folder",550,208,0.26),("folder",572,206,0.26)])
S["s11-f3"]=lambda: f_icons([("roof","effective coverage"),("certificate","legal coverage"),
    ("worried","the entirely unprotected"),("data","a series break"),
    ("spreadsheet","more data later"),("change","country revisions")], cols=3)
S["s11-f4"]=lambda: f_realia(tbl("","Team research &middot; has the method changed?",
    ["The series","From when","Has the method changed","Does anyone say so"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What the chart should show:</b>"), 560)
S["s11-f5"]=lambda: f_realia(doc("Lindmark Group &middot; benefits policy brief: the four new markets",
    "N. Khalil &middot; 9 September &middot; the box in the middle is the publisher's sentence, not mine",
    table_html(["The current global picture","Figure"],
      [["Population covered by <b>at least one</b> benefit","<b>52.4%</b> &mdash; first time above half"],
       ["People <b>entirely unprotected</b>","<b>3.8 billion</b>"],
       ["Working-age population <b>legally covered</b> by comprehensive systems","<b>33.8%</b>"],
       ["Effective coverage in the <b>50 countries most vulnerable to climate change</b>","about <b>25%</b>"]])
    + "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:10px 12px;font-size:13.5px;"
      "font-style:italic'>These estimates are not strictly comparable with those of the previous "
      "report, owing to methodological enhancements, extended data availability and country "
      "revisions.</p>"
    + "<p style='font-size:13.5px'><b>The decade.</b> The earlier figure was <b>42.8% in 2015</b> &mdash; "
      "9.6 points lower. <b>We cannot say how much of that is extended protection and how much is "
      "improved measurement</b>, and neither can the publisher. <b>Beyond the direction, I am not "
      "drawing a line on a chart.</b> My first draft did; I have removed it.</p>"
    + table_html(["Market","State provision we can rely on","What we provide"],
      [["A","pension and sickness","nothing additional"],
       ["B","sickness only","pension top-up"],
       ["C","sickness only, in practice patchy","pension top-up and private medical"],
       ["D","effectively none; among the 50 most vulnerable","full package, costed separately"]])
    + "<p style='font-size:13.5px'><b>One group principle:</b> no employee's household falls below the "
      "local subsistence threshold on our sick pay.</p>",
    "Source: ILO, World Social Protection Report 2024–26. All figures are the publisher's own, as "
    "is the quoted sentence on comparability. Country-level provision is from local counsel."), 570)
S["s11-f6"]=lambda: f_realia(tbl("Word study","Formal connectors, in plain words",
    ["Connector","Plain meaning","Example"],
    [["whereby","by means of which","a scheme <b>whereby</b> employees receive a top-up"],
     ["insofar as","to the extent that","<b>Insofar as</b> direction is concerned, it is upwards"],
     ["to the extent that","as far as","comparable <b>to the extent that</b> methods are unchanged"],
     ["in respect of","about, concerning","a provision <b>in respect of</b> sick pay"],
     ["notwithstanding","despite","<b>Notwithstanding</b> the break, the direction holds"],
     ["thereby","and in that way","extending cover and <b>thereby</b> raising effective coverage"]],
    note="<i>Whereby</i> means <i>by means of which</i> and nothing else."), 560)
S["s11-f7"]=lambda: f_line([("2015",42.8),("— series break —",47.0),("now",52.4)],
    w=560, h=250, unit="coverage by at least one benefit, percent — not strictly comparable across the break",
    dashed_from=0, mark=2, ymin=38)
S["s11-f8"]=lambda: f_icons([("quotemark","a quotation box"),("data","a line with a gap"),
    ("noentry","a trend line crossed out"),("certificate","a seal over a third"),
    ("folder","four country folders"),("note","one principle on a card")], cols=3)
S["s11-f9"]=lambda: f_realia(doc("Policy brief page", None,
    table_html(["","Figure"],
      [["At least one benefit","52.4%"],["Entirely unprotected","3.8bn"],
       ["Legally covered, comprehensive","33.8%"],["50 most vulnerable countries","about 25%"]])
    + "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:9px 12px;font-size:13px;"
      "font-style:italic;margin:0'>Not strictly comparable with the previous report &mdash; "
      "methodological enhancements, extended data availability and country revisions. "
      "<span style='font-style:normal'>(the publisher's sentence)</span></p>"
    "<p style='font-size:13.5px;text-decoration:line-through;color:#8d8a83;margin-top:10px'>"
    "Coverage has risen ten points in a decade.</p>"
    "<p style='font-size:12.5px;color:#6b6861;margin-top:-6px'>Removed, not deleted: the share "
    "attributable to better measurement rather than extended protection is unknowable from this report.</p>"
    + table_html(["Market","Package"],
      [["A","nothing additional"],["B","pension top-up"],["C","top-up + private medical"],
       ["D","full package, costed separately"]])
    + "<p style='font-size:14px'><b>No employee's household falls below the local subsistence threshold "
      "on our sick pay.</b></p>",
    "ILO, World Social Protection Report 2024–26"), 560)
S["s11-f10"]=lambda: f_scene(980,440, people=[("lars",280,168,{"seated":True}),
    ("nour",440,166,{}),("hanna",600,180,{"seated":True}),("ines",690,178,{"seated":True})],
    board=(790,20,170,150,"52.4%",[("2015","42.8%"),("break","method")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("folder",500,208,0.24),
           ("folder",522,206,0.24),("note",600,206,0.2)])
S["s11-f11"]=lambda: f_realia(tbl("Two briefs","A trend line, or a caveat",
    ["","Brief A","Brief B"],
    [["Opens with","a ten-point rise over a decade","the current figures"],
     ["The caveat","&mdash;","quoted, in a box"],
     ["The trend claim","on page one","struck through, with a reason"],
     ["Standards","one group standard","four packages and one principle"]],
    note="One of these was quoted externally. It was not the second one."), 540)
S["s11-f12"]=lambda: f_realia(doc("Two benefits briefs", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> Global social protection coverage has risen by nearly ten points in a decade to 52.4 "
    "percent. Our group standard should therefore be a single supplementary package in all four "
    "markets.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> 52.4 percent of the world's population is covered by at "
    "least one benefit; 3.8 billion are entirely unprotected; 33.8 percent of the working-age "
    "population is legally covered by comprehensive systems; in the 50 most vulnerable countries "
    "effective coverage is about 25 percent. <b>The publisher states that these estimates are not "
    "strictly comparable with those of the previous report.</b> <b>Insofar as</b> direction is "
    "concerned, coverage has risen; the split between real extension and better measurement is "
    "unknowable from this report. The policy turns on <b>33.8 percent legally covered</b>, because "
    "legal coverage is what an employer cannot create, whereas effective coverage is what a scheme "
    "<b>whereby</b> employees receive what the state does not can affect. Four markets, four packages, "
    "one principle.</p>",
    "Strike a claim through rather than deleting it, and write your reason beside it."), 560)
S["s11-f13"]=lambda: f_realia(tbl("","Series-break planner",
    ["Box","Yours"],
    [["The current figures",""],["The publisher's caveat, quoted",""],
     ["What you claim about the trend",""],["What you removed, and why",""],
     ["The figure the decision turns on",""],["Your own rows, sourced separately",""]],
    note="Quote the caveat. Any rewording leans the way your argument does."), 520)
S["s11-f14"]=lambda: f_scene(1120,470, people=[("nour",290,166,{}),("lars",450,180,{"seated":True}),
    ("hanna",540,178,{"seated":True}),("ines",630,180,{"seated":True}),
    ("marek",720,178,{"seated":True}),("paula",860,172,{}),("okonjo",960,174,{})],
    board=(920,20,180,130,"52.4%",[("break","stated"),("legal","33.8%")]),
    props=[("table",420,262,1.8),("folder",350,208,0.26),("folder",372,206,0.26),
           ("flipchart",80,150,0.9),("essay",1050,206,0.26),("phone",1070,196,0.2)])
S["s11-f15"]=lambda: f_chart([("yes, and we show it",3),("yes, and we do not",7),
    ("no",4),("don't know",9),("no long-run series",3)], unit="students")
S["s11-f16"]=lambda: f_scene(900,420, people=[("nour",300,170,{"seated":True})],
    board=(660,20,230,150,"THRESHOLD",[("national","×1"),("municipal","×2.5")]),
    props=[("desk",390,250,1.2),("computer",460,200,0.42),("essay",330,204,0.3),
           ("messages",120,200,0.28),("spreadsheet",150,212,0.24)])

# ---------------- Unit 12 · The Hard Conversation ----------------
S["s12-f1"]=lambda: f_icons([("chair","two chairs turned in"),("clipboard","a questionnaire"),
    ("recycle","a wheel of seven"),("queue","four fifths shaded"),
    ("envelope","two resignation letters"),("handsup","a hand held up"),
    ("notebook","one question written down"),("door","a door closed from inside"),
    ("clock","forty-five minutes"),("worldmap","thirty-five countries")], cols=5)
S["s12-f2"]=lambda: f_scene(900,430, people=[("nour",330,172,{"seated":True}),
    ("anders",560,174,{"seated":True})],
    props=[("table",440,262,0.9),("notebook",400,214,0.26),("envelope",470,216,0.2),
           ("envelope",492,214,0.2),("essay",520,216,0.24)],
    window_=(70,40,110,90))
S["s12-f3"]=lambda: f_icons([("recycle","seven dimensions"),("timer","workload"),
    ("signpost","autonomy"),("handshake","recognition"),
    ("stairwell","prospects"),("clipboard","a face-to-face interview")], cols=3)
S["s12-f4"]=lambda: f_realia(tbl("","Team research &middot; the question nobody asked",
    ["Who left","The recorded reason","The likely reason","The question that would have found it"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>Who could have asked it:</b>"), 560)
S["s12-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; preparation note before a conversation",
    "N. Khalil &middot; 3 March &middot; for me, not for circulation",
    table_html(["The survey I have",""],
      [["Interviews","<b>more than 36,600</b>, face to face, about <b>45 minutes</b> each"],
       ["Countries","<b>35</b>, including all <b>27</b> member states"],
       ["Structure","<b>seven dimensions</b> of job quality"],
       ["Headline","<b>more than 80%</b> find their work useful and experience the feeling of work well done"],
       ["Publication","first findings <b>3 September 2025</b>; overview <b>14 April 2026</b>"]])
    + "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:10px 12px;font-size:13.5px'>"
      "<b>What this survey cannot tell me.</b> Anything about <b>eleven people in the Ostberg depot</b>, "
      "two of whom have resigned in five weeks. <b>A population estimate is not evidence about a "
      "team.</b></p>"
    + table_html(["Leading &mdash; do not ask","Open &mdash; ask this"],
      [["Is the handover a problem?","Can you tell me how the handover works now?"],
       ["Don't you think they left over pay?","What do you think they would say if I weren't the one asking?"],
       ["Would more money have kept them?","What would have had to be different in October?"],
       ["Are you overloaded?","Walk me through last Tuesday."]])
    + "<p style='font-size:13.5px'><b>Three phrases I need.</b> <i>I could be wrong about this.</i> "
      "&middot; <i>It may be that…</i> &middot; <i>What I'm hearing is… have I got that "
      "right?</i></p>"
    + "<p style='font-size:13.5px'><b>What I am not going to do.</b> Decide what this is about before "
      "the conversation, then ask questions until I get there.</p>",
    "Source: Eurofound, European Working Conditions Survey 2024 — first findings 3 September 2025, "
    "overview and highlights 14 April 2026. Nothing in this note about the Ostberg depot comes from "
    "that survey."), 570)
S["s12-f6"]=lambda: f_realia(tbl("Word study","Tentative and distancing language",
    ["Function","Language","Example"],
    [["Soften a claim","it may be that &middot; I wonder whether","<b>It may be that</b> the handover is part of it."],
     ["Check understanding","what I'm hearing is … have I got that right?","<b>What I'm hearing is</b> the rota changed in October."],
     ["Leave room","I could be wrong &middot; correct me if I've misread this","<b>I could be wrong about this.</b>"],
     ["Invite a reframing","would it be fair to say &middot; how would you put it","<b>Would it be fair to say</b> nobody asked?"],
     ["Separate your view","my reading is &middot; from where I sit","<b>From where I sit</b> it looks like workload."],
     ["Hold without deciding","I'd want to understand &middot; before I form a view","<b>I'd want to understand</b> October first."]],
    note="A conclusion is expensive to disagree with, which is why people stop telling you things."), 560)
S["s12-f7"]=lambda: f_cycle(["job content","workload","autonomy","prospects",
    "recognition","social environment","working time"], w=520)
S["s12-f8"]=lambda: f_icons([("chair","two chairs angled in"),("notebook","questions written down"),
    ("speechbubble","one echoed in other words"),("note","a question in pencil"),
    ("timetable","a rota redrawn"),("door","a door with no glass")], cols=3)
S["s12-f9"]=lambda: f_realia(doc("Preparation note page", None,
    table_html(["The survey",""],
      [["Interviews","36,600+, 45 minutes each"],["Countries","35"],
       ["Dimensions","seven"],["Headline","more than 80% find their work useful"]])
    + "<div style='border:2px dashed #8a5a1e;padding:9px 12px;font-size:13px;margin:8px 0'>"
      "<b>What this cannot tell me:</b> anything about eleven people in one depot.</div>"
    + table_html(["Leading","Open"],
      [["Is the rota the problem?","How is the rota set now?"],
       ["Are you overloaded?","Walk me through last Tuesday."],
       ["Would money have kept them?","What would have had to be different in October?"]])
    + "<p style='font-size:13px;font-style:italic'>“I could be wrong about this.” &middot; "
      "“It may be that…” &middot; “What I'm hearing is… have I got that "
      "right?”</p>"
    "<p style='font-size:14px'><b>What I am not going to do:</b> decide first, then ask until I get "
    "there.</p>",
    "Eurofound, European Working Conditions Survey 2024"), 560)
S["s12-f10"]=lambda: f_scene(900,430, people=[("nour",330,172,{"seated":True}),
    ("anders",570,174,{"seated":True})],
    props=[("table",450,264,0.9),("notebook",400,216,0.26),("envelope",480,218,0.2),
           ("envelope",502,216,0.2),("essay",530,218,0.24),("door",80,150,0.8)])
S["s12-f11"]=lambda: f_realia(tbl("Two preparation notes","A conclusion, or seven dimensions",
    ["","Note A","Note B"],
    [["At the top","a conclusion: “it's pay”","seven dimensions to ask about"],
     ["Questions","three, all pointing at it","four open, written out"],
     ["Phrases","&mdash;","three tentative ones, quoted"],
     ["Commitment","&mdash;","not to decide the outcome first"]],
    note="One of these produces the answer it started with."), 540)
S["s12-f12"]=lambda: f_realia(doc("Two conversation records", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> Spoke to A. Holm. Two coordinators left over pay. Action: review coordinator salary "
    "band at the next cycle.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> Asked, in order: how the handover works now; when it "
    "changed; a walk through last Tuesday; how many Tuesdays like that; what has been asked for since "
    "October, and of whom. <b>I did not open with the resignations, and I have recorded that "
    "deliberately.</b> His words: the overlap was halved from 30 minutes to 15 in October; on a normal "
    "Tuesday a coordinator starts about forty minutes behind; <b>most Tuesdays are like that</b>; he "
    "asked operations twice and was asked for a cost, which is a quarter of a person. <b>My hypothesis, "
    "labeled as one: it may be that what they left over was the asking rather than the fifteen "
    "minutes. I could be wrong.</b> Changing: a paid 15-minute overlap on both sides, from my budget, "
    "three months. <b>What would show I was wrong:</b> misroutes per week, from this week.</p>",
    "Write down what would show you were wrong, with a measure and a date, in the same note as your "
    "hypothesis."), 560)
S["s12-f13"]=lambda: f_realia(tbl("","Conversation-record planner",
    ["Box","Yours"],
    [["Why I am writing this",""],["What I asked, in order",""],
     ["What they said, in their words",""],["My hypothesis, labeled as one",""],
     ["What I am changing, and from whose budget",""],["What would show I was wrong",""]],
    note="A hypothesis with no falsifying measure is a preference."), 520)
S["s12-f14"]=lambda: f_scene(1120,470, people=[("nour",180,172,{"seated":True}),
    ("anders",270,174,{"seated":True}),("wei",420,172,{"seated":True}),
    ("sofia",510,174,{"seated":True}),("ines",660,180,{"seated":True}),
    ("marek",750,178,{"seated":True}),("hanna",900,172,{}),("paula",1000,174,{})],
    board=(930,20,170,120,"80%+",[("useful","more than 80%"),("teams","not this")]),
    props=[("table",620,264,1.3),("notebook",600,216,0.24),("flipchart",80,150,0.9),
           ("timetable",1060,206,0.22),("chair",360,250,0.5)])
S["s12-f15"]=lambda: f_chart([("my manager",7),("people operations",4),("a colleague",3),
    ("nobody has asked",8),("in a survey only",4)], unit="students")
S["s12-f16"]=lambda: f_scene(900,420, people=[("nour",300,170,{"seated":True})],
    board=(660,20,230,150,"MISROUTES",[("fell","about half"),("then","leveled")]),
    props=[("desk",390,250,1.2),("computer",460,200,0.42),("essay",330,204,0.3),
           ("timetable",120,200,0.28),("note",150,212,0.22)])
