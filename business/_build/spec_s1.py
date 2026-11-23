# -*- coding: utf-8 -*-
"""Clearline Book 5 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["s00-f1"]=lambda: f_realia(tbl("What you already have","Six structures, one example each",
    ["Structure","Example"],
    [["Hedging","The figure <b>appears to</b> have stabilized, <b>although</b> the quarter is short."],
     ["Reporting verbs","The report <b>acknowledges that</b> the estimates changed method."],
     ["Passive of revision","The total <b>was revised</b> from 9.6 to 9.5 trillion."],
     ["Unreal conditional","<b>Had we known</b> the term was ninety days, we <b>would have</b> priced it differently."],
     ["Un-nominalizing","<i>Following the implementation of the policy</i> &rarr; <b>after we applied the policy</b>"],
     ["Concession","<b>Granted</b>, the sample is small. <b>Even so</b>, the direction is consistent."]],
    note="None of this is new. What changes at this level is that somebody intends to check you."),
    540)
S["s00-f2"]=lambda: f_realia(doc("Taped inside a folder", None,
    "<p style='font-size:16px;line-height:1.7'><b>1 &middot; The figure and its qualification travel together.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>Growth 3.1% &mdash; assuming the strait reopens in March "
    "and oil averages 96 dollars.</span></p>"
    "<p style='font-size:16px;line-height:1.7'><b>2 &middot; Say what would change your mind.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>I'd drop this if the volume forecast were cut again.</span></p>"
    "<p style='font-size:16px;line-height:1.7'><b>3 &middot; Find the weakness in your own case first.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>If you don't raise it, the person who does owns the "
    "meeting.</span></p>",
    "Three rules. The first one is why this book exists."), 520)
S["s00-f3"]=lambda: f_part("52.4% covered by at least one benefit",
    [("covered by at least one benefit",52,BLUE),("not covered at all",48,AMBER)])

# ---------------- Unit 1 · The Forecast ----------------
S["s01-f1"]=lambda: f_icons([("data","a projection"),("note","a footnote"),("balance","an assumption"),
    ("pricetag","oil at 96 dollars"),("canal","a shipping strait"),("calendar","March"),
    ("review","an upward revision"),("magnifier","the small print"),
    ("tally","a baseline"),("meeting","two readings, one page")], cols=5)
S["s01-f2"]=lambda: f_scene(920,430, people=[("yara",300,170,{}),("marek",500,180,{"seated":True})],
    board=(750,24,160,112,"WORLD OUTPUT",[("2026","3.1%"),("2027","3.4%")]),
    props=[("desk",430,250,1.3),("essay",360,196,0.34),("note",560,200,0.22),("computer",640,214,0.34)],
    clockat=(70,56,18,10,0))
S["s01-f3"]=lambda: f_icons([("data","the headline figure"),("spreadsheet","the country table"),
    ("review","the uncertainty band"),("note","the technical assumptions"),
    ("calendar","the vintage"),("change","the revision from last time")], cols=3)
S["s01-f4"]=lambda: f_realia(tbl("","Team research &middot; what is under the number?",
    ["The forecast","Who published it, and when","What it assumes"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>What would change our plan:</b>"), 540)
S["s01-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; capacity note for the board",
    "Y. Haddad &middot; 14 November &middot; one page",
    table_html(["","2026","2027"],
      [["<b>World output</b>","<b>3.1%</b>","<b>3.4%</b>"],
       ["Advanced economies","2.1%","1.8%"],
       ["Emerging and developing","3.7%","4.4%"],
       ["United States","2.3%","2.3%"],
       ["China","4.5%","4.0%"],
       ["<b>Headline inflation, world</b>","<b>4.7%</b>","<b>4.1%</b>"]])
    + "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:10px 12px;font-size:13.5px'>"
      "<b>What this rests on.</b> The projections <b>assume that the Strait of Hormuz reopens in March "
      "2027</b>, and <b>assume an average oil price of 96 dollars a barrel in 2026 and 87 in 2027</b>. "
      "Both assumptions are published by the forecaster.</p>"
    + "<p style='font-size:13.5px'><b>One assumption, counted twice.</b> The plan adds two vehicles on "
      "the 3.4% and a night shift on falling fuel. Both come from the same two sentences.</p>",
    "Source: IMF, <i>World Economic Outlook</i>, October 2026, including the technical "
    "assumptions in the statistical annex. The growth figures and the assumptions are from the same "
    "publication."), 560)
S["s01-f6"]=lambda: f_realia(tbl("Word study","Six ways to name an assumption",
    ["Form","Example","Register"],
    [["assuming (that)","<b>Assuming</b> the strait reopens in March, fuel falls.","neutral, spoken"],
     ["on the assumption that","built <b>on the assumption that</b> demand grows","neutral, written"],
     ["subject to","<b>subject to</b> the oil price holding","formal"],
     ["contingent on","<b>contingent on</b> the March reopening","formal"],
     ["predicated on","<b>predicated on</b> one sentence","formal, emphatic"],
     ["provided (that)","<b>provided</b> volumes hold","conditional"]],
    note="The heavy ones are memorable. <i>Assuming</i> is forgettable, which is the problem."), 540)
S["s01-f7"]=lambda: f_line([("2026 (Oct)",3.1),("2027 (Apr est.)",3.2),("2027 (Oct)",3.4)],
    w=560, h=250, unit="world output, per cent — 2027 revised up from 3.2 to 3.4", mark=2, ymin=2.8)
S["s01-f8"]=lambda: f_icons([("data","the headline"),("note","the footnote"),("canal","the strait"),
    ("pricetag","falling fuel"),("shift","the night shift"),("truck","a four-year lease")], cols=3)
S["s01-f9"]=lambda: f_realia(doc("One slide", None,
    "<div style='font:700 46px Bricolage Grotesque,sans-serif;text-align:center;margin:6px 0'>3.4%</div>"
    "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:9px 12px;font-size:13.5px;margin:0'>"
    "<b>This assumes</b> the Strait of Hormuz reopens in March 2027, and oil averaging 87 dollars.</p>"
    + table_html(["Decision","Depends on","Reversible?"],
      [["Night shift","demand growth","yes &mdash; 8 weeks"],
       ["Two vehicles","demand <i>and</i> fuel","no &mdash; 4 years"],
       ["Review","the March reopening","the date we find out"]]),
    "IMF, World Economic Outlook, October 2026 &middot; technical annex"), 540)
S["s01-f10"]=lambda: f_scene(980,440, people=[("lars",270,168,{"seated":True}),
    ("yara",430,166,{}),("marek",600,178,{"seated":True})],
    board=(790,24,170,120,"HORMUZ",[("assumed","March 27"),("oil 2027","$87")]),
    props=[("table",390,250,1.5),("essay",330,200,0.32),("note",520,206,0.2),
           ("worldmap",700,36,0.4),("pen",640,206,0.18)])
S["s01-f11"]=lambda: f_realia(tbl("Two slides","Same figure, one condition",
    ["","Slide A","Slide B"],
    [["Headline","3.4% growth","3.4% growth"],
     ["Assumption shown","&mdash;","directly beneath, in bold"],
     ["Decisions","three, listed","paired with the assumption each needs"],
     ["Review date","&mdash;","second week of March, ringed"]],
    note="A is quicker to read. B is the one you can still defend in April."), 540)
S["s01-f12"]=lambda: f_realia(doc("Two capacity notes", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First note.</b> Growth will be 3.4 per cent in 2027. We therefore add two vehicles and a "
    "night shift, and expect fuel to fall. Approval requested for both.</p>"
    "<p style='font-size:13.5px'><b>Second note.</b> World output is projected at 3.4 per cent in 2027 "
    "by the IMF, October 2026, revised up from 3.2 in April. <b>The projections assume the Strait of "
    "Hormuz reopens in March 2027 and oil averages 87 dollars.</b> Our two reasons to expand are not "
    "independent: both follow from that assumption. Approve the night shift (reversible in eight weeks); "
    "defer the vehicles (four-year lease) to the second week of March.</p>",
    "One of these was quoted back to its author in March. It was not the second one."), 560)
S["s01-f13"]=lambda: f_realia(tbl("","Capacity note planner",
    ["Box","Yours"],
    [["The figure, and whose it is",""],["What it assumes, in their words",""],
     ["Where one assumption is counted twice",""],["Reversible / irreversible",""],
     ["The recommendation",""],["The date you will know",""]],
    note="If the last box is empty, it is not a plan."), 520)
S["s01-f14"]=lambda: f_scene(1120,470, people=[("yara",300,166,{}),("marek",470,180,{"seated":True}),
    ("lars",560,180,{"seated":True}),("chiamaka",650,178,{"seated":True}),
    ("paula",740,180,{"seated":True}),("wei",880,172,{}),("tomas",980,174,{})],
    board=(940,20,165,118,"3.4%",[("assumes","Mar 2027"),("oil","$87")]),
    props=[("table",430,262,1.8),("essay",360,206,0.3),("worldmap",160,34,0.4),
           ("flipchart",80,150,0.9),("note",560,212,0.18),("jug",820,206,0.26)])
S["s01-f15"]=lambda: f_chart([("read the assumptions",4),("know roughly",7),
    ("never looked",9),("no forecast used",3),("don't know which",2)], unit="students")
S["s01-f16"]=lambda: f_scene(900,420, people=[("yara",300,170,{"seated":True})],
    board=(700,24,170,118,"MARCH",[("strait","still closed"),("2027","2.6%")]),
    props=[("desk",400,252,1.2),("computer",470,200,0.42),("essay",330,204,0.3),
           ("note",560,208,0.2),("truck",120,208,0.5)],
    window_=(60,40,120,90))

# ---------------- Unit 2 · The Case Against Your Own Case ----------------
S["s02-f1"]=lambda: f_icons([("balance","a trade-off"),("wall","a gap in the wall"),
    ("handsup","an objection"),("essay","one paragraph in bold"),
    ("change","two directions"),("chain","the weak link"),
    ("magnifier","pointing at your own page"),("data","barriers reported"),
    ("note","a caveat"),("handshake","agreed anyway")], cols=5)
S["s02-f2"]=lambda: f_scene(900,430, people=[("chiamaka",250,168,{})],
    board=(560,24,320,150,"FOR / AGAINST",[("for","3 lines"),("against","7 lines")]),
    props=[("table",380,256,1.2),("folder",330,208,0.3),("computer",470,206,0.36)],
    window_=(60,40,110,90))
S["s02-f3"]=lambda: f_icons([("padlock","money"),("jobnotice","people"),
    ("utilitybill","energy cost"),("cloud","uncertainty"),
    ("rights","regulation"),("racking","bought and unusable")], cols=3)
S["s02-f4"]=lambda: f_realia(tbl("","Team research &middot; the objection you have not said",
    ["The proposal","The strongest objection","Material or not"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>What would answer it:</b>"), 540)
S["s02-f5"]=lambda: f_realia(doc("Arvo Components &middot; investment proposal, with its own counter-case",
    "C. Obi &middot; 3 February &middot; the second paragraph is the one to read",
    "<p style='font-size:13.5px'><b>The request.</b> Two million euros for four automated finishing "
    "cells, over eighteen months.</p>"
    "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:10px 12px;font-size:13.5px'>"
    "<b>The strongest objection, which I am raising myself.</b> Across the EU, <b>52 per cent of firms "
    "report skills shortages as a major barrier to investment</b> &mdash; a larger share than report "
    "any constraint on finance. We do not have a finance problem.</p>"
    + table_html(["Barrier reported as major","Figure"],
      [["<b>Skills shortages, EU firms</b>","<b>52%</b>"],
       ["Skills shortages, Malta","76%"],
       ["Energy costs, Malta","84%"],
       ["Uncertainty about the future, Malta","77%"],
       ["Skills shortages, Denmark","67%"],
       ["Skills, energy, uncertainty &mdash; Germany","each around 9 firms in 10"]])
    + table_html(["Would answer it","Would not"],
      [["Two engineers hired <b>before</b> delivery","A higher budget"],
       ["A training clause in the contract","A faster delivery date"],
       ["One cell, not four","Assuming we recruit later"]])
    + "<p style='font-size:13.5px'><b>Revised request.</b> One cell and two engineers now, 640,000 "
      "euros. The remaining three cells in eighteen months, subject to the engineers being in post.</p>",
    "Source: EIB Investment Survey 2025 and EIB Investment Report 2025/2026, March 2026. No EU-wide "
    "2026 figure had been published at the time of writing."), 570)
S["s02-f6"]=lambda: f_realia(tbl("Word study","Concession, by strength and register",
    ["Form","Example","Note"],
    [["although / even though","<b>Although</b> the case is sound, the engineers are not hired.","neutral"],
     ["while / whereas","<b>While</b> finance is available, skills are not.","contrast, written"],
     ["granted / admittedly","<b>Granted</b>, the sample is a year old.","spoken, concedes first"],
     ["albeit","a strong case, <b>albeit</b> a smaller one","formal, takes a phrase"],
     ["for all","<b>For all</b> its detail, the survey has no 2026 figure.","formal"],
     ["much as","<b>Much as</b> I want four cells, I am asking for one.","spoken, personal"],
     ["even if","<b>Even if</b> the budget doubled, we could not staff it.","hypothetical"]],
    note="<i>Even though</i> concedes a fact. <i>Even if</i> dismisses a hypothetical."), 560)
S["s02-f7"]=lambda: f_chart([("Malta: energy costs",84),("Malta: uncertainty",77),
    ("Malta: skills",76),("Denmark: skills",67),("EU: skills",52)], unit="per cent of firms reporting a major barrier")
S["s02-f8"]=lambda: f_icons([("data","the request"),("danger","the objection, in bold"),
    ("spreadsheet","what would answer it"),("tally","the barrier figures"),
    ("chair","the vacant post"),("signature","a smaller figure, signed")], cols=3)
S["s02-f9"]=lambda: f_realia(doc("Proposal page", None,
    "<div style='font:700 30px Bricolage Grotesque,sans-serif;margin:4px 0'>2,000,000 &euro;</div>"
    "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:9px 12px;font-size:13.5px;margin:0'>"
    "<b>The strongest objection.</b> 52% of EU firms report skills shortages as a major barrier to "
    "investment. Equipment does not solve it.</p>"
    + table_html(["Would answer it","Would not"],
      [["Engineers before delivery","A larger budget"],["Training clause in contract","A faster date"],
       ["One cell","Recruiting later"]])
    + "<div style='font:700 24px Bricolage Grotesque,sans-serif;margin-top:8px'>640,000 &euro; "
      "<span style='font-size:12px;font-weight:400;color:#6b6861'>subject to both engineers in post</span></div>",
    "EIB Investment Survey 2025 &middot; March 2026"), 540)
S["s02-f10"]=lambda: f_scene(980,440, people=[("lars",280,168,{"seated":True}),
    ("chiamaka",440,166,{}),("paula",600,178,{"seated":True}),("marek",690,180,{"seated":True})],
    board=(800,24,160,116,"BARRIERS",[("skills EU","52%"),("finance","lower")]),
    props=[("table",400,252,1.5),("essay",340,202,0.32),("pen",530,206,0.18),
           ("data",640,208,0.26)])
S["s02-f11"]=lambda: f_realia(tbl("Two proposals","With and without a counter-case",
    ["","Proposal A","Proposal B"],
    [["Request","2,000,000","640,000"],
     ["Objections raised","none","one, in paragraph two, in bold"],
     ["What would answer it","&mdash;","two columns"],
     ["Condition","none","engineers in post; else withdrawn"]],
    note="A is easier to approve. B is easier to deliver."), 540)
S["s02-f12"]=lambda: f_realia(doc("Two proposals", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> Four finishing cells, two million euros. Benefits: throughput up 22%, scrap down 9%, "
    "payback 3 years 4 months. Recommended for approval.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> One cell and two maintenance engineers, 640,000 euros. "
    "<b>The strongest objection to this proposal is mine to raise:</b> 52 per cent of EU firms report "
    "skills shortages as a major barrier to investment, and our Ostberg maintenance vacancy has been "
    "open nine months. Even if the full two million were approved today, that constraint would not "
    "move. The same survey reports intangible investment growing and most vulnerable to uncertainty "
    "&mdash; an argument for training before machines. If the engineers are refused, I withdraw the "
    "cell as well.</p>",
    "The helpful figure and the damaging one get the same number of words. Readers feel the imbalance "
    "even when they cannot name it."), 560)
S["s02-f13"]=lambda: f_realia(tbl("","Proposal planner",
    ["Box","Yours"],
    [["The request",""],["The strongest objection",""],["Material? Why?",""],
     ["Would answer it / would not",""],["The figure that helps, at equal weight",""],
     ["The revised conditional request",""]],
    note="If the objection box is the shortest, start again."), 520)
S["s02-f14"]=lambda: f_scene(1120,470, people=[("chiamaka",290,166,{}),("lars",460,180,{"seated":True}),
    ("paula",550,178,{"seated":True}),("marek",640,180,{"seated":True}),
    ("nour",730,178,{"seated":True}),("ines",870,172,{}),("wei",970,174,{})],
    board=(930,20,170,118,"52%",[("EU skills","major"),("finance","lower")]),
    props=[("table",420,262,1.8),("essay",350,206,0.3),("flipchart",80,150,0.9),
           ("chair",1050,236,0.5),("jobnotice",1055,200,0.2),("data",560,210,0.24)])
S["s02-f15"]=lambda: f_chart([("yes, it helped",8),("yes, it hurt",3),
    ("no, but wanted to",7),("no, and would not",4),("never had a proposal",3)], unit="students")
S["s02-f16"]=lambda: f_scene(920,430, people=[("chiamaka",280,170,{"seated":True}),("anders",700,172,{})],
    board=(700,20,0,0,"",[]),
    props=[("desk",390,250,1.2),("computer",460,200,0.4),("essay",330,204,0.3),
           ("jobnotice",120,150,0.34),("racking",820,210,0.5)],
    window_=(60,40,110,90))

# ---------------- Unit 3 · Two Horizons ----------------
S["s03-f1"]=lambda: f_icons([("magnifier","a horizon"),("spreadsheet","a risk register"),
    ("change","a riser"),("storm","extreme weather"),
    ("messages","misinformation"),("padlock","cyber insecurity"),
    ("computer","adverse AI outcomes"),("barrier","trade barriers"),
    ("signpost","near and far"),("clipboard","a perception survey")], cols=5)
S["s03-f2"]=lambda: f_scene(920,430, people=[("wei",300,168,{}),("sofia",520,180,{"seated":True})],
    board=(640,20,270,160,"TWO YEARS / TEN",[("AI 2y","30th"),("AI 10y","5th")]),
    props=[("table",400,254,1.3),("computer",470,204,0.38),("note",350,206,0.2)])
S["s03-f3"]=lambda: f_icons([("arm","the near horizon"),("signpost","the far horizon"),
    ("spreadsheet","this year's top three"),("data","the ten-year top three"),
    ("change","the big riser"),("calendar","two planning cycles")], cols=3)
S["s03-f4"]=lambda: f_realia(tbl("","Team research &middot; the ten-year column",
    ["The risk","Position over two years","Position over ten"],
    [["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="<b>The biggest riser:</b>"), 540)
S["s03-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; ten-year risk briefing",
    "W. Zhang &middot; 2 February &middot; one page, and the arrow is the point",
    table_html(["Rank","Over two years","Over ten years"],
      [["1","<b>Geoeconomic confrontation</b>","<b>Extreme weather events</b>"],
       ["2","<b>Misinformation and disinformation</b>","&mdash;"],
       ["4","&mdash;","<b>Misinformation and disinformation</b>"],
       ["5","&mdash;","<b>Adverse outcomes of AI technologies</b>"],
       ["6","<b>Cyber insecurity</b>","&mdash;"],
       ["30","<b>Adverse outcomes of AI technologies</b>","&mdash;"]])
    + "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:10px 12px;font-size:13.5px'>"
      "<b>The gap.</b> Adverse outcomes of AI technologies is ranked <b>30th over two years and 5th over "
      "ten</b> &mdash; the largest riser between the horizons. Misinformation is the only risk in the "
      "top five of both lists.</p>"
    + "<p style='font-size:13.5px'><b>What this evidence is.</b> A perception survey of more than 1,300 "
      "leaders and experts. It records what informed people <b>expect</b>. It does not measure "
      "probability.</p>",
    "Source: World Economic Forum, Global Risks Report 2026, published 14 January 2026, 21st edition, "
    "drawing on the Global Risks Perception Survey of over 1,300 leaders and experts. Rankings are of "
    "respondents' expectations, not of measured probability."), 570)
S["s03-f6"]=lambda: f_realia(tbl("Word study","Near future and far future",
    ["Horizon","Forms","Example"],
    [["Near, confident","is set to &middot; is due to","Tariffs <b>are set to</b> rise in March."],
     ["Near, qualified","is projected to &middot; is likely to","Volumes <b>are projected to</b> fall 2%."],
     ["Far, possible","may well &middot; could &middot; might","Liability rules <b>may well</b> change by 2033."],
     ["Far, cumulative","will have &middot; will have been","By 2036 we <b>will have been</b> operating a decade under them."],
     ["Far, framed","by then &middot; within the decade","<b>Within the decade</b>, insurers will have repriced it."]],
    note="<i>Is set to</i> claims a schedule, and looks foolish at ten years."), 550)
S["s03-f7"]=lambda: f_matrix(["2 years","10 years"],
    [("Geoeconomic confrontation",["1","\u2014"]),("Extreme weather",["\u2014","1"]),
     ("Misinformation",["2","4"]),("Adverse AI outcomes",["30","5"]),
     ("Cyber insecurity",["6","\u2014"])], w=520)
S["s03-f8"]=lambda: f_icons([("spreadsheet","two ranked lists"),("change","the thread between"),
    ("clipboard","a questionnaire"),("calendar","an 18-month cycle"),
    ("essay","one sentence in a template"),("today","a date ten years out")], cols=3)
S["s03-f9"]=lambda: f_realia(tbl("Risk register","A column has been added",
    ["Risk","Likelihood","Impact","Horizon"],
    [["<b>AI liability in the chain</b>","low","high","<b>10 years</b>"],
     ["Fuel price volatility","high","medium","2 years"],
     ["Depot lease renewal","certain","medium","2 years"],
     ["Single-customer concentration","medium","high","2 years"],
     ["Extreme weather at depots","medium","high","10 years"]],
    note="Three rows moved down the moment the fourth column appeared."), 540)
S["s03-f10"]=lambda: f_scene(960,440, people=[("yara",300,166,{}),("wei",420,168,{}),
    ("marek",620,180,{"seated":True})],
    board=(740,20,220,150,"2y / 10y",[("AI 2y","30th"),("AI 10y","5th")]),
    props=[("desk",430,252,1.3),("computer",500,202,0.38),("essay",350,206,0.3)],
    window_=(60,36,120,100))
S["s03-f11"]=lambda: f_realia(tbl("Two registers","One list, or two",
    ["","Register A","Register B"],
    [["Sorting","likelihood × impact","horizon, then likelihood × impact"],
     ["Top item","fuel price volatility","depends which list you read"],
     ["Ten-year risks","bottom of one list","top of a second list"],
     ["Monthly meeting","runs from it","runs from the two-year list only"]],
    note="B is not a better register. It is two registers, which is what the survey does."), 540)
S["s03-f12"]=lambda: f_realia(doc("Two briefings", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> Our top risks are trade barriers, misinformation and cyber. AI risk is 30th and not "
    "material. Recommended: a program of work on the top three, budget to follow.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> Two lists, not one. Over two years: geoeconomic "
    "confrontation first, misinformation second, cyber sixth. Over ten: extreme weather first, "
    "misinformation fourth, adverse AI outcomes fifth &mdash; <b>30th over two years, the largest riser "
    "in the survey</b>. This is a perception survey of over 1,300 people and records expectations, not "
    "probability. For the next two years I propose nothing. For the next ten, one 38-word clause in the "
    "contract template, now, while it is free. <b>It may well go the other way.</b> Revisit February "
    "2028.</p>",
    "Match the size of the request to the quality of the evidence."), 560)
S["s03-f13"]=lambda: f_realia(tbl("","Briefing planner",
    ["Box","Yours"],
    [["The two-year list",""],["The ten-year list",""],["The biggest riser",""],
     ["What kind of evidence this is",""],["The one cheap change now",""],
     ["The revisit date and owner",""]],
    note="A perception survey buys a sentence, not a program."), 520)
S["s03-f14"]=lambda: f_scene(1120,470, people=[("wei",280,166,{}),("yara",450,180,{"seated":True}),
    ("marek",540,178,{"seated":True}),("sofia",630,180,{"seated":True}),
    ("hanna",720,178,{"seated":True}),("tomas",860,172,{}),("ines",960,174,{})],
    board=(920,20,180,130,"2y / 10y",[("riser","30 → 5"),("top 10y","weather")]),
    props=[("table",420,262,1.8),("essay",350,206,0.3),("flipchart",80,150,0.9),
           ("worldmap",150,34,0.34),("archive",1060,232,0.32),("computer",560,208,0.3)])
S["s03-f15"]=lambda: f_chart([("12 months",6),("2 years",9),("5 years",5),
    ("10 years or more",2),("no register",3)], unit="students")
S["s03-f16"]=lambda: f_scene(900,420, people=[("wei",300,170,{"seated":True})],
    board=(680,20,220,150,"2y / 10y",[("clause","invoked once"),("flood","two depots")]),
    props=[("desk",390,250,1.2),("computer",460,200,0.4),("essay",330,204,0.3),
           ("flood",120,214,0.42)],
    window_=(60,40,110,90))
