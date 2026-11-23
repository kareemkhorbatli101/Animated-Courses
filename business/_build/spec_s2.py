# -*- coding: utf-8 -*-
"""Clearline Book 5 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · When the Forecast Was Wrong ----------------
S["s04-f1"]=lambda: f_icons([("star","outside the center ring"),("data","a trend extended"),
    ("storm","a storm over a coast"),("danger","a burning hillside"),
    ("insurance","an insurance certificate"),("mirror","the rear-view mirror"),
    ("change","a figure replaced"),("spreadsheet","a budget line"),
    ("balance","a range, not a point"),("review","two reports compared")], cols=5)
S["s04-f2"]=lambda: f_scene(920,430, people=[("marek",300,178,{"seated":True}),
    ("ines",450,176,{"seated":True})],
    board=(720,24,180,120,"INSURED LOSS",[("projected","145bn"),("recorded","107bn")]),
    props=[("desk",400,252,1.3),("essay",340,206,0.3),("note",520,208,0.2),
           ("spreadsheet",600,208,0.24)])
S["s04-f3"]=lambda: f_icons([("data","the trend"),("star","the point projection"),
    ("balance","the range"),("tally","the outturn"),
    ("change","many small events"),("storm","one very large event")], cols=3)
S["s04-f4"]=lambda: f_realia(tbl("","Team research &middot; the miss you remember",
    ["What was projected","What happened","What changed afterwards"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>Was the forecast the problem?</b>"), 540)
S["s04-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; internal audit note: the 2025 insurance decision",
    "I. Costa &middot; 11 March &middot; four pages, summarized on one",
    table_html(["","What we planned on","What occurred"],
      [["Insured nat-cat losses, 2025","<b>“on trend to 145bn”</b>","<b>about 107bn</b>"],
       ["Events","not stated","<b>190</b>"],
       ["Including man-made","not stated","about <b>118bn</b>"],
       ["Economic losses","not stated","<b>220bn</b>"],
       ["Share insured","not stated","about <b>49%</b> &mdash; highest in the series"],
       ["Secondary perils' share","not stated","<b>92%</b>"],
       ["Largest insured wildfire on record","not foreseen","<b>Los Angeles, about 40bn</b>"]])
    + "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:10px 12px;font-size:13.5px'>"
      "<b>What the projection actually said.</b> The earlier publication described losses as "
      "<b>“on trend to” 145 billion dollars</b>. Our budget paper quoted it as <i>will be</i>. "
      "<b>That error is ours, not the forecaster's.</b></p>"
    + "<p style='font-size:13.5px'><b>Conclusion.</b> <b>The decision was sound and the number was "
      "wrong.</b> Deferring the deductible increase cost an estimated 240,000 euros. On the information "
      "available in March 2025 I would have advised the same thing.</p>",
    "Sources: Swiss Re Institute, sigma 1/2025 (projection) and sigma 1/2026, March 2026 (outturn). A "
    "separate Swiss Re publication gives 88 per cent for wildfire, severe convective storm and flood "
    "together, which is a narrower definition than the 92 per cent above."), 570)
S["s04-f6"]=lambda: f_realia(tbl("Word study","Past modals, by what they claim",
    ["Form","Claim","Example"],
    [["must have","near-certain, inferred","They <b>must have</b> built it from the trend."],
     ["can't have","impossible","They <b>can't have</b> known about the January fires."],
     ["may / might have","possible","We <b>might have</b> paid less with a wider range."],
     ["needn't have","done, and unnecessary","We <b>needn't have</b> deferred the deductible."],
     ["didn't need to","the need never arose","We <b>didn't need to</b> raise the provision."],
     ["should have","not done, and ought to be","We <b>should have</b> quoted the words exactly."],
     ["would have had to","a condition in the past","Losses <b>would have had to</b> double."]],
    note="<i>Needn't have</i> is an admission. <i>Didn't need to</i> is a description."), 560)
S["s04-f7"]=lambda: f_line([("2020",121),("2021",125),("2022",132),("2023",118),
    ("2024",144),("2025 proj.",145),("2025 actual",107)],
    w=600, h=260, unit="insured nat-cat losses, bn USD — six years above 100bn", mark=6, ymin=90)
S["s04-f8"]=lambda: f_icons([("quotemark","a quoted phrase"),("data","the outturn"),
    ("tally","the variance"),("balance","theirs, ours, nobody's"),
    ("euro","a cost in a box"),("review","a widened range")], cols=3)
S["s04-f9"]=lambda: f_realia(doc("Audit note page", None,
    table_html(["What we planned on","What occurred"],
      [["“on trend to 145bn”","about 107bn"],["&mdash;","190 events"],["&mdash;","49% insured"]])
    + "<p style='font-size:13.5px'><b>Finding 1</b> &mdash; <i>ours</i>: we wrote <b>will be</b> where "
      "they wrote <b>on trend to</b>.<br><b>Finding 2</b> &mdash; <i>nobody's</i>: the year came in "
      "below trend.<br><b>Finding 3</b> &mdash; <i>ours</i>: we planned against a point, not a range.</p>"
    "<div style='border:2px solid #8a5a1e;padding:8px 12px;font:600 15px Bricolage Grotesque,sans-serif;"
    "display:inline-block'>240,000 &euro; <span style='font-size:11px;font-weight:400;color:#6b6861'>"
    "&mdash; my estimate, labelled as one</span></div>"
    "<p style='font-size:14px;margin-top:10px'><b>The decision was sound and the number was wrong.</b></p>",
    "sigma 1/2025 and sigma 1/2026"), 540)
S["s04-f10"]=lambda: f_scene(980,440, people=[("lars",280,168,{"seated":True}),
    ("ines",450,166,{}),("marek",620,180,{"seated":True})],
    board=(790,24,170,124,"SIX YEARS",[("all above","100bn"),("2025","107bn")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("note",520,206,0.2),
           ("spreadsheet",620,208,0.24)])
S["s04-f11"]=lambda: f_realia(tbl("Two notes","Blame, or method",
    ["","Note A","Note B"],
    [["Opens with","the forecaster was wrong","the forecaster's exact words"],
     ["The hedge","paraphrased","quoted"],
     ["Findings","one","four, labelled by owner"],
     ["Recommendation","drop the source","widen the range, keep the source"]],
    note="One of these is on file when the next renewal comes."), 540)
S["s04-f12"]=lambda: f_realia(doc("Two variance notes", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> We planned on 145 billion and the outturn was 107. The forecast was out by 26 per "
    "cent. Recommendation: discontinue use of this source.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> The publication described losses as <b>“on trend "
    "to 145 billion dollars”</b>. Our paper wrote <i>will be</i>; that substitution is ours. The "
    "outturn was about 107 billion across 190 events, a variance of roughly 26 per cent against the "
    "figure we used, and the sixth consecutive year above 100 billion. The same source also reported, "
    "correctly, that about 49 per cent of economic losses were insured &mdash; the highest share in its "
    "records &mdash; and that 92 per cent of insured catastrophe losses came from secondary perils. "
    "<b>The decision was sound and the number was wrong.</b></p>",
    "Quote the hedge. Replacing it with <i>will be</i> is the most expensive editing decision in "
    "business writing."), 560)
S["s04-f13"]=lambda: f_realia(tbl("","Variance-note planner",
    ["Box","Yours"],
    [["What was published, in their words",""],["What we wrote",""],["What occurred",""],
     ["What the source got right that we did not use",""],
     ["The cost, and whose decision it was",""],["What changes",""]],
    note="If the last box is empty, this is a complaint, not a note."), 520)
S["s04-f14"]=lambda: f_scene(1120,470, people=[("ines",290,166,{}),("lars",460,180,{"seated":True}),
    ("marek",550,178,{"seated":True}),("yara",640,180,{"seated":True}),
    ("hanna",730,178,{"seated":True}),("sofia",870,172,{}),("tomas",970,174,{})],
    board=(930,20,170,124,"107 / 145",[("projected","145bn"),("recorded","107bn")]),
    props=[("table",420,262,1.8),("essay",350,206,0.3),("flipchart",80,150,0.9),
           ("archive",1060,232,0.32),("spreadsheet",560,210,0.24),("insurance",200,200,0.24)])
S["s04-f15"]=lambda: f_chart([("nothing happened",9),("the range was widened",4),
    ("the source was dropped",3),("somebody was blamed",5),("nobody noticed",4)], unit="students")
S["s04-f16"]=lambda: f_scene(900,420, people=[("ines",300,170,{"seated":True}),("marek",650,172,{})],
    board=(680,20,210,140,"RANGE",[("100–150","planned"),("outturn","above")]),
    props=[("desk",390,250,1.2),("computer",460,200,0.4),("essay",330,204,0.3),
           ("insurance",120,206,0.3)])

# ---------------- Unit 5 · Average, Median and the One You Mean ----------------
S["s05-f1"]=lambda: f_icons([("scales","one pan much larger"),("tally","the middle one marked"),
    ("data","one enormous bar"),("worldmap","eleven countries"),
    ("balance","the center of the line"),("review","measuring spread"),
    ("country","one flag among many"),("spreadsheet","a tally sheet"),
    ("change","a divided whole"),("meeting","two readings, one page")], cols=5)
S["s05-f2"]=lambda: f_scene(920,430, people=[("nour",300,168,{}),("marek",520,180,{"seated":True})],
    board=(700,24,200,130,"OECD",[("weighted","4.9%"),("median","5.7%")]),
    props=[("desk",410,252,1.3),("computer",480,202,0.38),("folder",350,208,0.3),
           ("folder",372,206,0.3)])
S["s05-f3"]=lambda: f_icons([("data","the big member dominates"),("tally","the middle member"),
    ("balance","flat"),("change","rising"),
    ("review","wide dispersion"),("signpost","one group, two directions")], cols=3)
S["s05-f4"]=lambda: f_realia(tbl("","Team research &middot; weighted or not?",
    ["The group figure","Weighted by what","Who dominates it","What the median would show"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>Which question are we answering?</b>"), 560)
S["s05-f5"]=lambda: f_realia(doc("Lindmark Group &middot; labor market note for the pay round",
    "N. Khalil &middot; 20 July &middot; one page, and the two arrows point different ways",
    table_html(["Measure","Figure","Direction"],
      [["<b>OECD-wide unemployment rate</b>, May 2026","<b>4.9%</b>",
        "<b>flat</b> &mdash; at or below 5.0% for over four years"],
       ["<b>Median rate across OECD countries</b>, May 2026","<b>5.7%</b>",
        "<b>up from 5.4%</b> a year earlier"]])
    + "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:10px 12px;font-size:13.5px'>"
      "<b>Which question each answers.</b> The 4.9% is <b>weighted by the size of each labor market</b>: "
      "what is happening across the OECD as a population? The 5.7% is the <b>middle country</b> with "
      "size ignored: what is happening in a typical member country? <b>Neither is more honest.</b></p>"
    + table_html(["","Figure"],
      [["Employment growth, projected","<b>0.3%</b> in 2026, <b>0.6%</b> in 2027"],
       ["Average annual real wage growth","<b>2.2%</b> in Q1 2026, against <b>2.7%</b> a year earlier"],
       ["Real wages below their level five years ago","in about <b>one third</b> of OECD countries"]])
    + "<p style='font-size:13.5px'><b>Eleven country managers.</b> <b>None of them lives in the "
      "weighted average.</b> Nine publish a national rate, two of which are above the median and four "
      "below. Two publish nothing comparable, and I will say so.</p>",
    "Source: OECD Employment Outlook 2026, July 2026. Country-level detail is from national "
    "statistical offices and is not harmonized with the OECD figures."), 570)
S["s05-f6"]=lambda: f_realia(tbl("Word study","Relative clauses with quantifiers",
    ["Form","Example"],
    [["two of which","Eleven countries, <b>two of which</b> are above the median."],
     ["most of which","Nine national rates, <b>most of which</b> are published monthly."],
     ["none of which","Four measures, <b>none of which</b> I have combined."],
     ["half of whom","Eleven managers, <b>half of whom</b> have read the headline."],
     ["a third of whom","600 staff, <b>a third of whom</b> are in one country."],
     ["the largest of which","Three markets, <b>the largest of which</b> is Germany."],
     ["the figure for which","Two countries, <b>the figure for which</b> is not comparable."]],
    note="<i>Of them</i> cannot do this job: it makes a comma splice."), 560)
S["s05-f7"]=lambda: f_chart([("A",3.1),("B",3.8),("C",4.2),("D",4.6),("E",5.1),
    ("F",5.5),("G",5.9),("H",6.4),("I",7.2)], unit="our nine national rates, per cent — weighted 4.9, median 5.7")
S["s05-f8"]=lambda: f_icons([("scales","a weighted scale"),("tally","the middle marked"),
    ("balance","flat"),("change","rising"),
    ("review","a widening spread"),("spreadsheet","eleven names, nine ticks")], cols=3)
S["s05-f9"]=lambda: f_realia(doc("Pay paper page", None,
    "<div style='display:flex;gap:28px;margin:6px 0'>"
    "<div><div style='font:700 34px Bricolage Grotesque,sans-serif'>4.9%</div>"
    "<div style='font-size:12px;color:#6b6861'>weighted &middot; flat</div></div>"
    "<div><div style='font:700 34px Bricolage Grotesque,sans-serif'>5.7%</div>"
    "<div style='font-size:12px;color:#6b6861'>median &middot; up from 5.4</div></div></div>"
    "<p style='font-size:13px;margin:4px 0'><b>4.9%</b> answers: across the OECD as a population.<br>"
    "<b>5.7%</b> answers: in a typical member country.</p>"
    + table_html(["Country","National rate","Above / below median"],
      [["1 – 9","published","2 above, 4 below, 3 at"],
       ["10","<i>no comparable figure</i>",""],
       ["11","<i>no comparable figure</i>",""]])
    + "<p style='font-size:14px'><b>Envelope on the group figure. Split on national figures.</b></p>",
    "OECD Employment Outlook 2026 &middot; national offices for country rows"), 540)
S["s05-f10"]=lambda: f_scene(980,440, people=[("nour",300,166,{}),("marek",470,180,{"seated":True}),
    ("paula",560,178,{"seated":True}),("lars",650,180,{"seated":True})],
    board=(800,24,160,130,"PAY ROUND",[("weighted","4.9%"),("median","5.7%")]),
    props=[("table",410,252,1.5),("essay",345,202,0.3),("computer",530,206,0.32),
           ("folder",620,208,0.24)])
S["s05-f11"]=lambda: f_realia(tbl("Two pay papers","One figure, or two",
    ["","Paper A","Paper B"],
    [["Group measures","one","two, with directions"],
     ["Weighting named","no","yes"],
     ["Country rows","none","eleven, two marked unknown"],
     ["Envelope and split","one percentage for all","separated"]],
    note="B is longer. B is also readable aloud to eleven managers."), 540)
S["s05-f12"]=lambda: f_realia(doc("Two pay papers", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> OECD unemployment is 4.9 per cent and flat. The labor market is stable. "
    "Recommended: a uniform 2.4 per cent uplift in all eleven countries.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> The OECD-wide rate was 4.9 per cent in May, weighted by "
    "labor market size. The median across member countries rose from 5.4 to 5.7. Both are in the same "
    "report and they answer different questions. <b>Taken together they say the group is becoming less "
    "alike.</b> Real wage growth 2.2 per cent, down from 2.7 &mdash; growing and slowing. In about a "
    "third of OECD countries real wages remain below their level five years ago. Eleven countries, none "
    "of which is the weighted average: nine publish a comparable rate, two above the median and four "
    "below; <b>for two I am recording that I do not know.</b> One envelope, sized on 4.9. Eleven "
    "allocations, made on national figures.</p>",
    "Write the two figures as two sentences with no conjunction. <i>But</i> tells the reader which one "
    "you believe."), 560)
S["s05-f13"]=lambda: f_realia(tbl("","Group-figure planner",
    ["Box","Yours"],
    [["The decision this is for",""],["The two summaries, with directions",""],
     ["What each one answers",""],["What the spread is doing",""],
     ["Our own members, listed",""],["Which figure for which decision",""]],
    note="One figure cannot do two jobs."), 520)
S["s05-f14"]=lambda: f_scene(1120,470, people=[("nour",290,166,{}),("marek",460,180,{"seated":True}),
    ("paula",550,178,{"seated":True}),("lars",640,180,{"seated":True}),
    ("ines",730,178,{"seated":True}),("sofia",870,172,{}),("junseo",970,174,{})],
    board=(930,20,175,130,"4.9 / 5.7",[("weighted","flat"),("median","up")]),
    props=[("table",420,262,1.8),("essay",350,206,0.3),("flipchart",80,150,0.9),
           ("worldmap",150,34,0.34),("folder",1055,230,0.3),("phone",1070,196,0.2)])
S["s05-f15"]=lambda: f_chart([("weighted, know by what",5),("weighted, don't know by what",8),
    ("unweighted",3),("no group figure",4),("never thought about it",6)], unit="students")
S["s05-f16"]=lambda: f_scene(900,420, people=[("nour",300,170,{"seated":True})],
    board=(680,20,210,140,"ELEVEN",[("9 defensible","✓"),("2 by default","?")]),
    props=[("desk",390,250,1.2),("computer",460,200,0.4),("email",330,206,0.24),
           ("folder",120,210,0.3)],
    window_=(60,40,110,90))

# ---------------- Unit 6 · The Changing Denominator ----------------
S["s06-f1"]=lambda: f_icons([("tray","two baskets, different counts"),("review","a longer ruler"),
    ("spreadsheet","rows added at the bottom"),("data","a break in the line"),
    ("change","a figure restated"),("camera","the same street, two years"),
    ("tally","a growing sample"),("euro","a changing total"),
    ("magnifier","brackets around part of a chart"),("meeting","charts of different widths")], cols=5)
S["s06-f2"]=lambda: f_scene(920,430, people=[("paula",300,168,{}),("ines",470,170,{})],
    board=(680,20,230,150,"COVERAGE",[("2024","50"),("2025","101")]),
    props=[("desk",400,252,1.3),("computer",470,202,0.38),("essay",340,206,0.3),
           ("essay",362,204,0.3)])
S["s06-f3"]=lambda: f_icons([("spreadsheet","the sample grows"),("essay","the definition changes"),
    ("review","the instrument changes"),("country","a new member enters"),
    ("note","a figure restated"),("data","two different widths")], cols=3)
S["s06-f4"]=lambda: f_realia(tbl("","Team research &middot; has the sample moved?",
    ["The index","Coverage then","Coverage now","Comparable or not"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What a like-for-like comparison would need:</b>"), 560)
S["s06-f5"]=lambda: f_realia(doc("Lindmark Group &middot; market-entry note: what the index can and cannot tell us",
    "I. Costa &middot; 4 June &middot; one page, and the second table is the useful one",
    table_html(["Edition","Economies covered"],
      [["2024, inaugural","<b>50</b>"],
       ["2025, described by the publisher as an <b>interim edition</b>","<b>101</b>"],
       ["2026 tranche, planned","a further <b>62</b>"],
       ["Eventual coverage, as stated","<b>about 170</b> on one of the publisher's pages; "
        "<b>about 180</b> on another"]])
    + "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:10px 12px;font-size:13.5px'>"
      "<b>What cannot be said.</b> No movement in rank between the two editions is a finding about a "
      "country. A market that was 40th of 50 and is 52nd of 101 has moved from about the 80th "
      "percentile to the 51st &mdash; an improvement &mdash; while appearing to fall twelve places. "
      "<b>Both the rise and the fall are artefacts of the denominator.</b></p>"
    + table_html(["","What it gives you","What it costs"],
      [["Rank <b>with this year's total</b>","an honest position","no trend"],
       ["Only the economies in <b>both</b> editions","a real like-for-like comparison","a smaller sample, stated"],
       ["The underlying <b>scores</b>","comparable whoever else is in the table","less vivid on a slide"]])
    + "<p style='font-size:13.5px'><b>On the published totals.</b> 50 plus 62 is 112, not 101, and the "
      "target is given two ways. The publisher is building the series in tranches and says so. <b>I note "
      "it because anybody who checks our slide will find it.</b></p>",
    "Source: World Bank, Business Ready (B-READY) 2024 and 2025, and the published plan for the 2026 "
    "tranche. Coverage figures are the publisher's own."), 570)
S["s06-f6"]=lambda: f_realia(tbl("Word study","Comparison phrases, strongest claim first",
    ["Phrase","What it promises"],
    [["on a like-for-like basis","same members, same definitions, both periods"],
     ["on a constant sample of 50","same members, and you have said how many"],
     ["on a comparable basis","definitions aligned; weaker than like-for-like"],
     ["as reported","the figure as published at the time"],
     ["as restated","the figure republished on the new basis"],
     ["not directly comparable","an explicit refusal to compare"]],
    note="<i>On a like-for-like basis</i> with nothing after it is a claim with no content."), 540)
S["s06-f7"]=lambda: f_matrix(["2024 edition","2025 edition"],
    [("Economies in the table",["50","101"]),
     ("Our market's rank",["40th","52nd"]),
     ("Percentile",["about 80th","about 51st"]),
     ("Apparent movement",["—","down 12 places"]),
     ("Real finding",["—","none: the denominator moved"])], w=540)
S["s06-f8"]=lambda: f_icons([("spreadsheet","two tables, two depths"),("balance","a percentile scale"),
    ("tally","a score out of 100"),("note","a footnote marker"),
    ("noentry","an arrow crossed out"),("data","a figure with its denominator")], cols=3)
S["s06-f9"]=lambda: f_realia(doc("The slide, before and after", None,
    "<p style='font-size:13.5px;text-decoration:line-through;color:#8d8a83'>"
    "Market A &#8599;&nbsp;&nbsp;Market B &#8599;&nbsp;&nbsp;Market C &#8599;&nbsp;&nbsp;"
    "<i>three markets getting easier</i></p>"
    + table_html(["Market","Score / 100","Coverage"],
      [["A","61","101 economies"],["B","58","101 economies"],["C","49","101 economies"]])
    + "<p style='font-size:13.5px'><b>On a constant sample of 50, two of the three improved.</b></p>"
    "<p style='font-size:11.5px;color:#6b6861'>* 50 + 62 = 112, not 101; eventual coverage given as "
    "about 170 on one publisher page and about 180 on another. The series is being built in tranches.</p>",
    "B-READY 2024, 2025 and the 2026 plan"), 540)
S["s06-f10"]=lambda: f_scene(980,440, people=[("paula",290,166,{}),("ines",420,168,{}),
    ("sofia",620,180,{"seated":True}),("marek",710,178,{"seated":True})],
    board=(800,20,165,150,"50 → 101",[("rank","40 → 52"),("pct","80 → 51")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("computer",520,204,0.34),
           ("flipchart",80,152,0.8)])
S["s06-f11"]=lambda: f_realia(tbl("Two slides","Arrows, or scores",
    ["","Slide A","Slide B"],
    [["Headline","three upward arrows","three scores out of 100"],
     ["Coverage shown","no","yes — 101 economies"],
     ["Comparison","implied trend","constant sample of 50, stated"],
     ["Footnote","none","the published totals that do not reconcile"]],
    note="A survives eleven minutes. B survives the board's analyst."), 540)
S["s06-f12"]=lambda: f_realia(doc("Two market notes", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> Three of our markets have improved in the World Bank's business environment "
    "assessment, two of them by more than ten places. Market entry is recommended in all three.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> The inaugural edition covered 50 economies; the 2025 "
    "edition, which the publisher calls an interim edition, covers 101; a further 62 are planned. "
    "<b>No movement in rank between the two editions is a finding about a country</b>: a market at 40th "
    "of 50 and 52nd of 101 has risen from the 80th percentile to the 51st while appearing to fall twelve "
    "places. Use the scores. State the coverage. <b>On a constant sample of 50, two of our three markets "
    "improved.</b> 50 plus 62 is 112, not 101, and I have put that in our footnote. <b>I am not saying "
    "the index is unreliable</b> &mdash; it is the best comparable assessment available.</p>",
    "End a note like this with <i>what I am not saying</i>. Readers assume you are attacking the "
    "source, and will defend it instead of hearing you."), 560)
S["s06-f13"]=lambda: f_realia(tbl("","Comparison planner",
    ["Box","Yours"],
    [["Coverage, edition by edition",""],["What cannot be said, with the arithmetic",""],
     ["What can be said instead, and its cost",""],["Untidiness in the published figures",""],
     ["The recommendation",""],["What I am not saying",""]],
    note="The last box is the one most writers leave out."), 520)
S["s06-f14"]=lambda: f_scene(1120,470, people=[("ines",290,166,{}),("paula",450,180,{"seated":True}),
    ("sofia",540,178,{"seated":True}),("marek",630,180,{"seated":True}),
    ("lars",720,178,{"seated":True}),("chiamaka",860,172,{}),("wei",960,174,{})],
    board=(920,20,180,130,"50 / 101",[("added","51 economies"),("target","170 or 180")]),
    props=[("table",420,262,1.8),("essay",350,206,0.3),("flipchart",80,150,0.9),
           ("worldmap",150,34,0.34),("archive",1060,232,0.32),("computer",560,208,0.28)])
S["s06-f15"]=lambda: f_chart([("ranks",9),("scores",4),("both",5),
    ("no index",5),("don't know which",3)], unit="students")
S["s06-f16"]=lambda: f_scene(900,420, people=[("paula",300,170,{"seated":True}),("ines",680,172,{})],
    board=(660,20,230,150,"COMPETITOR",[("brochure","3 arrows"),("press","repeated")]),
    props=[("desk",390,250,1.2),("computer",460,200,0.4),("essay",330,204,0.3),
           ("note",120,208,0.26)])
