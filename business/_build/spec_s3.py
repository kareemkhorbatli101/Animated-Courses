# -*- coding: utf-8 -*-
"""Clearline Book 5 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · A Ranking Is an Argument ----------------
S["s07-f1"]=lambda: f_icons([("square","79 tiles, one tile"),("podium","three positions"),
    ("spreadsheet","a row up five places"),("thermostat","a weighting dial"),
    ("worldmap","139 economies"),("data","bars with error bars"),
    ("magnifier","the methodology note"),("country","a new entrant"),
    ("change","many inputs, one arrow"),("meeting","two people, one slide")], cols=5)
S["s07-f2"]=lambda: f_scene(920,430, people=[("chiamaka",310,176,{"seated":True}),("ravi",760,172,{})],
    board=(640,20,250,150,"GII 2026",[("UAE","25th ↑ 5"),("of","139")]),
    props=[("desk",410,252,1.3),("computer",480,202,0.38),("essay",350,206,0.3),
           ("note",560,208,0.2)])
S["s07-f3"]=lambda: f_icons([("square","many indicators, one score"),("review","normalization"),
    ("thermostat","weighting"),("spreadsheet","the resulting rank"),
    ("balance","two countries almost level"),("country","a new row at the bottom")], cols=3)
S["s07-f4"]=lambda: f_realia(tbl("","Team research &middot; what is in the index?",
    ["The index","How many inputs","What we use it for","What movement we would believe"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What band are we in?</b>"), 560)
S["s07-f5"]=lambda: f_realia(doc("Arvo Components &middot; location note: the new engineering team",
    "C. Obi &middot; 12 October &middot; one page, and the box is the point",
    table_html(["Rank","Economy"],
      [["1","<b>Switzerland</b> &mdash; 16th consecutive year"],["2","Sweden"],
       ["3","United States"],["4","Republic of Korea"],["5","Singapore"],
       ["7","Kingdom of the Netherlands"],["16","Canada"],["18","Austria"],
       ["20","Australia"],["24","New Zealand"],
       ["<b>25</b>","<b>United Arab Emirates &mdash; up 5 places</b>"],
       ["62","Kuwait"],["70","Costa Rica"],["74","Bhutan &mdash; <b>entering the index</b>"]])
    + "<p style='font-size:13.5px'>Europe holds <b>14 of the top 25</b>. The index covers "
      "<b>139 economies</b> and is built from <b>79 indicators</b>.</p>"
    + "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:10px 12px;font-size:13.5px'>"
      "<b>What a five-place move is evidence of.</b> Built from 79 indicators and covering 139 "
      "economies, this index places countries in <b>bands</b> reliably and <b>positions</b> precisely "
      "only at the top. Near the middle a five-place movement can come from a small change in two or "
      "three inputs, from improved statistical reporting, or from the entry or exit of other economies. "
      "<b>All three are real. None is the claim the arrow is making.</b></p>"
    + table_html(["Good for","Not good for"],
      [["Which band a country is in","Year-on-year movement in the middle"],
       ["Comparing bands across regions","Treating a rank as a percentage"],
       ["Identifying new entrants' starting band","Inferring a cause from a position"]])
    + "<p style='font-size:13.5px'><b>A note on the coverage figure.</b> The published count is "
      "<b>139</b>; one of the publisher's own pages gives <b>about 140</b>. That rounding is a fair "
      "guide to the precision with which the ranks are meant to be read.</p>",
    "Source: WIPO, Global Innovation Index 2026, press release 29 September 2026. Ranks, indicator "
    "count and coverage are the publisher's own."), 570)
S["s07-f6"]=lambda: f_realia(tbl("Word study","Participle clauses",
    ["Form","Example","Meaning"],
    [["-ing (active)","<b>Covering</b> 139 economies, the index places countries in bands.","which covers"],
     ["-ed (passive)","<b>Built</b> from 79 indicators, it is precise only at the top.","which is built"],
     ["having + -ed","<b>Having risen</b> five places, the UAE is now 25th.","after it rose"],
     ["having been + -ed","<b>Having been</b> revised, the figure now reads 101.","after being revised"],
     ["with + noun + -ing","<b>With Europe holding</b> 14 of the top 25, the band is crowded.","adds a second subject"]],
    note="<i>Built from 79 indicators, we should not over-read it</i> says <b>we</b> are built from "
         "79 indicators. That is the commonest error in formal English writing."), 560)
S["s07-f7"]=lambda: f_chart([("Switzerland",1),("Sweden",2),("United States",3),
    ("Korea, Rep.",4),("Singapore",5),("Netherlands",7),("Canada",16),("Austria",18),
    ("Australia",20),("New Zealand",24),("United Arab Emirates",25)],
    unit="rank of 139 — the top five are spaced, the twenties are stacked", w=500)
S["s07-f8"]=lambda: f_icons([("square","79 tiles forming one"),("spreadsheet","a crowded middle"),
    ("balance","the top-25 band"),("country","a new entrant"),
    ("note","four criteria on a card"),("worldmap","a shortlist of three")], cols=3)
S["s07-f9"]=lambda: f_realia(doc("Location shortlist", None,
    "<div style='font:700 15px Bricolage Grotesque,sans-serif;letter-spacing:.06em;"
    "text-transform:uppercase;color:#8a5a1e'>Top twenty-five band</div>"
    "<p style='font-size:15px;margin:6px 0 12px'>Austria &middot; Singapore &middot; "
    "United Arab Emirates <span style='font-size:11.5px;color:#6b6861'>(alphabetical — no order "
    "implied)</span></p>"
    + table_html(["Our criterion","Austria","Singapore","UAE"],
      [["Engineering salary index","118","141","126"],
       ["Visa processing, published","6 weeks","3 weeks","4 weeks"],
       ["Existing customers","2","1","7"],
       ["Direct flights to Ostberg","daily","none","daily"]])
    + "<p style='font-size:12.5px;color:#6b6861'>The index covers 139 economies using 79 indicators. "
      "<b>None of the four criteria above is in it.</b></p>"
    "<p style='font-size:11.5px;color:#6b6861'>* Published coverage: 139 economies. One publisher page: "
    "about 140.</p>",
    "WIPO, Global Innovation Index 2026 &middot; 29 September 2026"), 560)
S["s07-f10"]=lambda: f_scene(980,440, people=[("yara",290,166,{}),("chiamaka",420,168,{}),
    ("marek",620,180,{"seated":True}),("paula",710,178,{"seated":True})],
    board=(790,20,170,150,"RANKS",[("top 5","spaced"),("20s","stacked")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("note",520,206,0.2),
           ("computer",600,206,0.3)])
S["s07-f11"]=lambda: f_realia(tbl("Two slides","An arrow, or a band",
    ["","Slide A","Slide B"],
    [["Headline","one country, ↑ 5","three countries, top-25 band"],
     ["Order","implied by the arrow","alphabetical, explicitly"],
     ["Our own criteria","&mdash;","four, with figures"],
     ["Index described","“the agency”","139 economies, 79 indicators"]],
    note="One of these is being used to spend two million euros."), 540)
S["s07-f12"]=lambda: f_realia(doc("Two location notes", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> The UAE has risen five places to 25th in the Global Innovation Index, an improvement "
    "of roughly ten per cent in its business environment. Recommended as the site for the new team.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> The index ranks 139 economies using 79 indicators. "
    "<b>Built from 79 indicators, it is reliable about bands and loose about individual places.</b> "
    "I would believe Switzerland first for a 16th consecutive year, and Europe holding 14 of the top 25. "
    "<b>Having entered at 74th</b>, Bhutan has a starting band and no direction. The slide's claim of a "
    "ten per cent improvement is not supported: a five-place move there can come from two or three "
    "indicators, from better reporting, or from other economies moving. Shortlist: three economies in "
    "the top-25 band, alphabetical. Decide on engineering salary, visa processing, existing customers "
    "and flights &mdash; <b>none of which is in the index</b>.</p>",
    "When you decline somebody's figure, say what you would believe from the same source."), 560)
S["s07-f13"]=lambda: f_realia(tbl("","Index planner",
    ["Box","Yours"],
    [["What the index is made of",""],["What I would believe from it",""],
     ["The claim being made, and whether it holds",""],
     ["A guide to intended precision",""],["Our own criteria",""],["The shortlist, on bands",""]],
    note="If your criteria are all in the index, you have not chosen any."), 520)
S["s07-f14"]=lambda: f_scene(1120,470, people=[("chiamaka",290,166,{}),("yara",450,180,{"seated":True}),
    ("marek",540,178,{"seated":True}),("paula",630,180,{"seated":True}),
    ("ravi",720,178,{"seated":True}),("wei",860,172,{}),("nour",960,174,{})],
    board=(920,20,180,130,"TOP 25",[("139","economies"),("79","indicators")]),
    props=[("table",420,262,1.8),("essay",350,206,0.3),("flipchart",80,150,0.9),
           ("worldmap",150,34,0.34),("note",1055,206,0.22),("computer",560,208,0.28)])
S["s07-f15"]=lambda: f_chart([("know the indicator count",3),("know roughly",6),
    ("never looked",10),("no index used",4),("didn't know it was composite",3)], unit="students")
S["s07-f16"]=lambda: f_scene(900,420, people=[("chiamaka",300,170,{"seated":True})],
    board=(660,20,230,150,"18 MONTHS ON",[("posts filled","11"),("visa","9 weeks")]),
    props=[("desk",390,250,1.2),("computer",460,200,0.4),("essay",330,204,0.3),
           ("boardingpass",120,206,0.26),("passport",150,208,0.24)],
    window_=(60,40,100,86))

# ---------------- Unit 8 · The Dispute ----------------
S["s08-f1"]=lambda: f_icons([("meeting","two parties and a third"),("archive","case files"),
    ("rights","a hammer on a document"),("timer","an hourglass with no figures"),
    ("essay","a clause ringed"),("scales","money against time"),
    ("calendar","an unknown number of months"),("envelope","an award"),
    ("stamp","a fast-track stamp"),("handshake","counsel conferring")], cols=5)
S["s08-f2"]=lambda: f_scene(920,430, people=[("hanna",310,170,{"seated":True})],
    board=(680,20,220,150,"ICC 2025",[("new","894"),("pending","1,869")]),
    props=[("desk",400,252,1.3),("computer",470,202,0.38),("essay",330,206,0.3),
           ("note",540,208,0.2)])
S["s08-f3"]=lambda: f_icons([("tally","new cases"),("spreadsheet","pending cases"),
    ("envelope","awards approved"),("data","cases by sector"),
    ("euro","the average amount in dispute"),("timer","duration, unpublished")], cols=3)
S["s08-f4"]=lambda: f_realia(tbl("","Team research &middot; the figure nobody publishes",
    ["The decision","The figure that would settle it","Is it published","What we use instead"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What the substitute cannot tell us:</b>"), 560)
S["s08-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; advice on the Teval claim",
    "H. Lindqvist &middot; 18 April &middot; one page",
    "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:10px 12px;font-size:13.5px'>"
    "<b>The figure I do not have, first.</b> <b>How long an arbitration takes is not in the published "
    "statistics.</b> The institution publishes case counts, values, sectors and award types. I am not "
    "going to supply a duration from memory and let it become a number in a board minute.</p>"
    + table_html(["","Figure"],
      [["New cases registered","<b>894</b> &mdash; 881 Arbitration Rules, 13 Appointing Authority Rules"],
       ["Pending at year end","<b>1,869</b> &mdash; a record, against <b>1,789</b>"],
       ["New cases the previous year","<b>841</b>"],
       ["Draft awards approved","<b>607</b> &mdash; 444 final, 118 partial, 45 by consent"],
       ["New expedited cases","<b>169</b>, up from <b>152</b>"],
       ["Construction and engineering","<b>246 cases, 28%</b>"],
       ["Energy","<b>128 cases, 15%</b> &mdash; together <b>43%</b>"],
       ["Average amount in dispute","<b>just over 50m dollars</b>, down from <b>130m</b>"]])
    + "<p style='font-size:13.5px'><b>What I can infer.</b> Pending rose by 80 while new cases rose by "
      "53. <b>The stock is building faster than the inflow.</b> That is consistent with longer cases, and "
      "equally with slower tribunal constitution or more complex matters. <b>It is an inference from two "
      "numbers and I am labelling it as mine.</b></p>"
    + "<p style='font-size:13.5px'><b>Recommendation.</b> <b>Were we to arbitrate</b>, I would apply for "
      "the expedited procedure at the outset. Before that, one settlement approach at 5.5 million.</p>",
    "Source: ICC Dispute Resolution statistics for 2025. All counts, values and sector shares are the "
    "institution's own published figures. No average duration appears in them."), 570)
S["s08-f6"]=lambda: f_realia(tbl("Word study","Hypothetical structures",
    ["Form","Example","Register"],
    [["if + past","<b>If we arbitrated</b>, we would tie up 9 million.","neutral"],
     ["if + were to","<b>If we were to arbitrate</b>, I would seek expedition.","more tentative"],
     ["inversion: were we to","<b>Were we to arbitrate</b>, I would seek expedition.","formal, written"],
     ["suppose / supposing","<b>Suppose</b> the tribunal took three years.","spoken, inviting"],
     ["had + subject + participle","<b>Had we known</b> the seat, we would have priced it.","formal, past"],
     ["if it had not been for","<b>If it had not been for</b> the clause, we would be in court.","emphatic"]],
    note="Inversion replaces <i>if</i>. You cannot keep both."), 560)
S["s08-f7"]=lambda: f_line([("previous year, new",841),("previous year, pending",1789),
    ("this year, new",894),("this year, pending",1869)],
    w=600, h=260, unit="cases — the stock is building faster than the inflow", mark=3, ymin=700)
S["s08-f8"]=lambda: f_icons([("timer","an empty box with a question mark"),("spreadsheet","a table of counts"),
    ("data","two rising lines"),("euro","9m against 50m"),
    ("stamp","a fast-track stamp"),("handshake","a figure lower than the claim")], cols=3)
S["s08-f9"]=lambda: f_realia(doc("Advice note page", None,
    "<div style='border:2px dashed #8a5a1e;padding:10px 12px;margin-bottom:10px'>"
    "<b style='font:700 14px Bricolage Grotesque,sans-serif'>THE FIGURE I DO NOT HAVE</b><br>"
    "<span style='font-size:13.5px'>Duration. It is not in the published statistics, and it is the "
    "board's question.</span></div>"
    + table_html(["","Figure"],
      [["New cases","894"],["Pending","1,869 (record)"],["Awards approved","607"],
       ["Expedited","169, up from 152"],["Construction &amp; engineering","246 (28%)"],
       ["Average amount in dispute","just over 50m"]])
    + "<p style='font-size:13.5px'><i>My inference, labelled as mine:</i> the stock is building faster "
      "than the inflow.</p>"
    "<div style='border:2px solid #8a5a1e;padding:8px 12px;font:600 15px Bricolage Grotesque,sans-serif;"
    "display:inline-block'>Settle at 5,500,000 &euro; &middot; then file with expedition</div>"
    "<p style='font-size:14px;margin-top:10px'><b>The decision is the board's. My advice is the 5.5.</b></p>",
    "ICC Dispute Resolution statistics for 2025 &middot; no duration published, and I have not supplied one"), 540)
S["s08-f10"]=lambda: f_scene(980,440, people=[("lars",280,168,{"seated":True}),
    ("hanna",440,166,{}),("marek",620,180,{"seated":True}),("ines",710,178,{"seated":True})],
    board=(790,20,170,150,"894 / 1,869",[("new","+53"),("pending","+80")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("note",520,206,0.2),
           ("timer",600,204,0.22)])
S["s08-f11"]=lambda: f_realia(tbl("Two advice notes","A duration, or a gap",
    ["","Note A","Note B"],
    [["Opens with","“arbitration takes about two years”","the figure I do not have"],
     ["Source of the duration","not stated","none — withheld deliberately"],
     ["Inference","presented as fact","labelled as the author's"],
     ["Recommendation","proceed","one settlement approach, then expedition"]],
    note="One of these is on file if the case runs four years."), 540)
S["s08-f12"]=lambda: f_realia(doc("Two advice notes", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> Arbitration takes about two years. Our claim is strong. Recommended: file and run the "
    "full procedure, with costs budgeted at 400,000 euros.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> <b>How long an arbitration takes is not in the published "
    "statistics.</b> They give 894 new cases, 1,869 pending &mdash; a record &mdash; 607 awards approved, "
    "169 expedited cases, construction and engineering at 28 per cent, and an average amount in dispute "
    "just over 50 million dollars. Pending rose by 80 while new cases rose by 53: <b>the stock is "
    "building faster than the inflow, which is my inference and not a duration.</b> Our claim is 9 "
    "million, so we are a small case and expedition is available. <b>Were we to arbitrate</b> I would "
    "apply for it at the outset. <b>Had we negotiated the seat</b> in 2023 I could answer precisely. "
    "<b>The decision is the board's; my advice is one approach at 5.5 million.</b></p>",
    "Write <i>I have not supplied one</i> in the source line. Absence that is stated is information."), 560)
S["s08-f13"]=lambda: f_realia(tbl("","Advice planner",
    ["Box","Yours"],
    [["The figure I do not have",""],["What is published",""],
     ["My inference, labelled as mine",""],["What bears on the decision",""],
     ["The recommendation",""],["What I will not supply",""]],
    note="Advice with a hole in it still has to reach a recommendation."), 520)
S["s08-f14"]=lambda: f_scene(1120,470, people=[("hanna",290,166,{}),("lars",450,180,{"seated":True}),
    ("marek",540,178,{"seated":True}),("ines",630,180,{"seated":True}),
    ("yara",720,178,{"seated":True}),("paula",860,172,{}),("tomas",960,174,{})],
    board=(920,20,180,130,"DURATION?",[("new","894"),("pending","1,869")]),
    props=[("table",420,262,1.8),("essay",350,206,0.3),("flipchart",80,150,0.9),
           ("archive",1060,232,0.32),("timer",560,206,0.22),("phone",1070,196,0.2)])
S["s08-f15"]=lambda: f_chart([("duration or time",10),("cost",6),("failure rate",4),
    ("demand",3),("we have all we need",2)], unit="students")
S["s08-f16"]=lambda: f_scene(900,420, people=[("hanna",300,170,{"seated":True})],
    board=(660,20,230,150,"SETTLED",[("at","6.1m €"),("weeks","11")]),
    props=[("desk",390,250,1.2),("computer",460,200,0.4),("essay",330,204,0.3),
           ("calendar",120,200,0.3),("handshake",150,210,0.22)])

# ---------------- Unit 9 · One Institution, Two Numbers ----------------
S["s09-f1"]=lambda: f_icons([("essay","two covers, one publisher"),("folder","a scenario label"),
    ("calendar","two end dates"),("tally","a baseline"),
    ("change","two different multipliers"),("note","a reference footnote"),
    ("magnifier","two pages held together"),("data","a slice of final energy"),
    ("today","two publication months"),("meeting","two documents, one nod")], cols=5)
S["s09-f2"]=lambda: f_scene(920,430, people=[("tomas",310,176,{"seated":True}),("wei",640,170,{})],
    board=(700,20,210,150,"SHARE",[("WEO","23%"),("Elec 26","21%")]),
    props=[("desk",400,252,1.3),("essay",340,206,0.3),("essay",362,204,0.3),
           ("calculator",470,206,0.22),("computer",540,204,0.32)])
S["s09-f3"]=lambda: f_icons([("essay","two publications"),("folder","two scenarios"),
    ("calendar","two horizons"),("tally","two baselines"),
    ("change","two multipliers"),("noentry","do not average them")], cols=3)
S["s09-f4"]=lambda: f_realia(tbl("","Team research &middot; which publication?",
    ["The figure","Publication and month","Scenario or horizon","Does another version exist"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>Which horizon matches our decision?</b>"), 560)
S["s09-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; depot electrification case, first page",
    "T. Ek, with W. Zhang &middot; 7 May &middot; the table is the whole argument",
    table_html(["","Flagship outlook","Electricity report"],
      [["Published","<b>autumn 2026</b>","<b>February 2026</b>"],
       ["Scenario","<b>stated policies</b>","&mdash;"],
       ["Electricity's share, start","<b>23% today</b>","<b>21% in 2025</b>"],
       ["Electricity's share, end","<b>nearly 30% by 2035</b>","<b>24% by 2030</b>"],
       ["Demand growth vs total energy","<b>over 4 times faster</b>","<b>at least 2.5 times as fast</b>"],
       ["Renewables and nuclear","&mdash;","<b>about 50% of generation by 2030</b>"]])
    + "<p style='font-size:13.5px'>A <b>mid-year update</b> from the same institution reports demand "
      "growth of <b>3.6% in 2026</b> and <b>3.8% in 2027</b>, after <b>3% in 2025</b>.</p>"
    + "<p style='background:#f3ead8;border-left:4px solid #8a5a1e;padding:10px 12px;font-size:13.5px'>"
      "<b>Why both are correct.</b> Different publications, scenarios, baseline years and horizons &mdash; "
      "2035 against 2030. <b>Neither figure is a correction of the other.</b></p>"
    + "<p style='font-size:13.5px'><b>What we did first, and why it was wrong.</b> Our first draft "
      "averaged 23 and 21 and wrote <s>22 per cent</s>. <b>22 per cent is the only figure on this page "
      "that no publication supports.</b></p>"
    + "<p style='font-size:13.5px'><b>What we are citing.</b> The depot asset has a <b>fifteen-year "
      "life</b>, so this is a <b>2035-horizon</b> decision: the flagship outlook, stated policies "
      "scenario, autumn 2026.</p>",
    "Sources: IEA, World Energy Outlook 2026 (stated policies scenario); IEA, Electricity 2026, "
    "February 2026; IEA Electricity Mid-Year Update, July 2026. All three are the same institution's."), 570)
S["s09-f6"]=lambda: f_realia(tbl("Word study","Markers of contrast, reconciliation and precision",
    ["Group","Markers","Example"],
    [["Contrast","by contrast &middot; conversely &middot; on the other hand",
      "<b>By contrast</b>, the electricity report uses 2025."],
     ["Reconciliation","that said &middot; then again &middot; at the same time",
      "<b>That said</b>, neither figure corrects the other."],
     ["Precision","strictly speaking &middot; in fact &middot; more precisely",
      "<b>Strictly speaking</b>, the multipliers measure different periods."],
     ["Concession to point","admittedly &middot; granted &middot; it is true that",
      "<b>Admittedly</b> the gap looks like an error."],
     ["Consequence","accordingly &middot; on that basis &middot; it follows that",
      "<b>Accordingly</b>, we cite the 2035 horizon."]],
    note="They are adverbials, not conjunctions. A comma before them is a splice."), 560)
S["s09-f7"]=lambda: f_matrix(["Flagship outlook","Electricity report"],
    [("Published",["autumn 2026","February 2026"]),
     ("Share, start",["23% today","21% in 2025"]),
     ("Share, end",["nearly 30% by 2035","24% by 2030"]),
     ("Multiplier",["over 4×","at least 2.5×"]),
     ("Averaged figure",["22% — in no publication","22% — in no publication"])], w=560)
S["s09-f8"]=lambda: f_icons([("essay","two report covers"),("calendar","two end dates"),
    ("noentry","averaging crossed out"),("racking","a fifteen-year asset"),
    ("note","a footnote marker"),("quotemark","a full citation")], cols=3)
S["s09-f9"]=lambda: f_realia(doc("Business case, first page", None,
    table_html(["","Flagship","Electricity report"],
      [["Month","autumn 2026","February 2026"],["Scenario","stated policies","&mdash;"],
       ["Start","23% today","21% in 2025"],["End","nearly 30% by 2035","24% by 2030"],
       ["Multiplier","over 4×","at least 2.5×"]])
    + "<p style='font-size:13.5px'><s>22 per cent (averaged)</s> &mdash; <i>left crossed out so the "
      "next person to do this arithmetic finds it already done.</i></p>"
    "<div style='border:2px solid #8a5a1e;padding:9px 12px;font-size:13.5px'><b>Cited figure:</b> "
    "23 per cent today rising to nearly 30 per cent by 2035 &mdash; IEA, World Energy Outlook 2026, "
    "stated policies scenario, autumn 2026. <b>Chosen because the asset has a fifteen-year life.</b></div>"
    "<p style='font-size:11.5px;color:#6b6861'>* IEA, Electricity 2026, February 2026: 21% in 2025 "
    "rising to 24% by 2030, at least 2.5 times as fast. Shorter horizon, lower baseline.</p>",
    "Three publications, one institution, three right answers to three different questions"), 560)
S["s09-f10"]=lambda: f_scene(980,440, people=[("marek",280,168,{"seated":True}),
    ("tomas",440,166,{}),("wei",560,168,{}),("sofia",700,180,{"seated":True})],
    board=(790,20,170,150,"23 / 21",[("2035","nearly 30"),("2030","24")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("calculator",520,206,0.2),
           ("computer",620,206,0.3)])
S["s09-f11"]=lambda: f_realia(tbl("Two first pages","Averaged, or cited",
    ["","Page A","Page B"],
    [["The figure","22% (averaged)","23% → nearly 30% by 2035"],
     ["Attribution","“the agency”","institution, publication, month, scenario"],
     ["The other figure","not mentioned","footnoted with its own citation"],
     ["Checkable","no","in under a minute"]],
    note="One of these meets a board member who has read the other report."), 540)
S["s09-f12"]=lambda: f_realia(doc("Two business case pages", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> According to the agency, electricity is 22 per cent of final energy consumption and "
    "rising fast. The depot should be electrified.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> The flagship outlook, stated policies scenario, autumn "
    "2026, gives electricity rising from 23 per cent of final energy consumption today to nearly 30 per "
    "cent by 2035, with demand growing over four times faster than total energy. The February "
    "electricity report gives 21 per cent in 2025 rising to 24 by 2030, at least 2.5 times as fast. "
    "<b>Strictly speaking</b> the multipliers measure different periods. <b>Neither corrects the "
    "other.</b> Our first draft averaged them to 22 per cent &mdash; a figure no publication supports. "
    "The asset has a fifteen-year life, so <b>accordingly</b> we cite the 2035 horizon. The July "
    "mid-year update's 3.6 and 3.8 per cent growth rates belong in the operating budget.</p>",
    "Leave your own wrong working visible, crossed out, with a line saying why."), 560)
S["s09-f13"]=lambda: f_realia(tbl("","Two-figure planner",
    ["Box","Yours"],
    [["Both figures, with their publications",""],["Why they differ",""],
     ["What you are not doing",""],["What chose your figure",""],
     ["The other figure, stated deliberately",""],["Where the newest numbers belong",""]],
    note="Nine words of citation make the difference between a figure and a rumour."), 520)
S["s09-f14"]=lambda: f_scene(1120,470, people=[("wei",290,166,{}),("tomas",450,180,{"seated":True}),
    ("marek",540,178,{"seated":True}),("sofia",630,180,{"seated":True}),
    ("yara",720,178,{"seated":True}),("ravi",860,172,{}),("anders",960,174,{})],
    board=(920,20,180,130,"23 / 21",[("horizons","2035 / 2030"),("avg","crossed out")]),
    props=[("table",420,262,1.8),("essay",350,206,0.3),("essay",372,204,0.3),
           ("flipchart",80,150,0.9),("calculator",1060,206,0.2),("racking",1040,236,0.4)])
S["s09-f15"]=lambda: f_chart([("publication and month",4),("institution only",11),
    ("don't know the source",5),("internal figures only",3),("never checked",2)], unit="students")
S["s09-f16"]=lambda: f_scene(900,420, people=[("tomas",300,170,{"seated":True})],
    board=(660,20,230,150,"REVISED",[("2035","lower"),("bays built","4 of 8")]),
    props=[("desk",390,250,1.2),("computer",460,200,0.4),("essay",330,204,0.3),
           ("racking",120,214,0.42)],
    window_=(60,40,100,86))
