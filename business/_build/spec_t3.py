# -*- coding: utf-8 -*-
"""Clearline Book 6 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · The Index and the Promise ----------------
S["t07-f1"]=lambda: f_icons([("clipboard","a forwarder's questionnaire"),("square","six panels, one score"),
    ("worldmap","rating other countries"),("magnifier","one line of a factsheet"),
    ("transfer","a proxy standing in"),("timer","a stopwatch and a container"),
    ("barrier","a customs counter"),("spreadsheet","a ranking table"),
    ("noentry","not for diagnosis"),("meeting","one score, two purposes")], cols=5)
S["t07-f2"]=lambda: f_scene(940,430, people=[("paula",300,166,{}),("mei",500,178,{"seated":True})],
    board=(760,24,170,120,"LPI 2023",[("economies","139"),("components","6")]),
    props=[("desk",420,252,1.3),("essay",350,206,0.3),("computer",480,202,0.36),
           ("note",560,208,0.2)])
S["t07-f3"]=lambda: f_icons([("signpost","designed purpose"),("transfer","actual use"),
    ("balance","a proxy"),("timer","a direct measurement"),
    ("noentry","not a diagnostic tool"),("essay","a contractual promise")], cols=3)
S["t07-f4"]=lambda: f_realia(tbl("","Team research &middot; designed for what?",
    ["The measure","Designed to do","Used to do","The direct measurement"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>Do we already hold it?</b>"), 560)
S["t07-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; note on the corridor reliability page",
    "M. Chow &middot; 24 January &middot; the second table is what I want on the page instead",
    table_html(["What the index is, by design",""],
      [["Coverage, international edition","<b>139 economies</b>"],
       ["Structure","<b>six components</b>, combined by principal components analysis"],
       ["Input","<b>perception ratings</b> by professionals rating up to <b>eight overseas markets</b>"],
       ["2023 change","own-country questions removed; speed-of-trade indicators added"],
       ["Publisher's data portal","lists <b>171 economies</b> for the overall series"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:10px 12px;font-size:13.5px;"
      "font-style:italic'>It is not considered a diagnostic tool, but rather a general metric about the "
      "efficiency of supply chains.</p>"
    + table_html(["Our proposal promises","What the index supports"],
      [["“this corridor clears in 2&ndash;3 days”","a <b>national</b> average, not a corridor"],
       ["“reliability is high on this route”","<b>what professionals believe</b> about a country"],
       ["“benchmarked against 139 economies”","true, and about the country"]])
    + table_html(["Corridor, our consignments, 24 months","Figure"],
      [["Median clearance, port of entry","<b>31 hours</b>"],["90th percentile","<b>96 hours</b>"],
       ["Worst month in the period","median <b>74 hours</b>"],["Consignments in the sample","<b>1,480</b>"]])
    + "<p style='font-size:13.5px'><b>A median of 31 hours with a 90th percentile of 96 describes what "
      "the customer is buying.</b> A national index score does not.</p>",
    "Source: World Bank, Connecting to Compete 2023, its factsheet and data portal. The clearance "
    "figures are Lindmark's own. Published respondent counts differ between sources: 652 professionals "
    "in 115 countries in one, nearly 1,000 in another."), 570)
S["t07-f6"]=lambda: f_realia(tbl("Word study","Purpose and fitness",
    ["Form","Example","Describes"],
    [["is designed to","The index <b>is designed to</b> benchmark national environments.","design"],
     ["is intended as","It <b>is intended as</b> a general metric.","design"],
     ["is not designed to","It <b>is not designed to</b> predict one corridor.","design, negative"],
     ["for the purpose of","cited <b>for the purpose of</b> country comparison","use"],
     ["with a view to + -ing","collected <b>with a view to</b> pricing","use, forward"],
     ["so as to / so as not to","printed <b>so as not to</b> invite a question","use"],
     ["serves as a proxy for","The score <b>serves as a proxy for</b> data we do not have.","use"]],
    note="<i>With a view to</i> always takes <i>-ing</i>. Never write <i>for to</i>."), 560)
S["t07-f7"]=lambda: f_chart([("median, our corridor",31),("75th percentile",48),
    ("worst month, median",74),("90th percentile",96)],
    unit="hours to clearance, our consignments, 1,480 over 24 months")
S["t07-f8"]=lambda: f_icons([("square","six components, one score"),("magnifier","a highlighted factsheet line"),
    ("spreadsheet","a promise table"),("data","a distribution with a tail"),
    ("essay","a contract clause"),("balance","two respondent counts")], cols=3)
S["t07-f9"]=lambda: f_realia(doc("Proposal page, two versions", None,
    "<div style='border:1px solid #d8d4cb;padding:10px;margin-bottom:12px;font-size:13.5px'>"
    "<b>Corridor reliability.</b> This economy scores 3.6 on the Logistics Performance Index. "
    "<b>Clearance: 2&ndash;3 days.</b></div>"
    "<div style='border:2px solid #6d3b6e;padding:10px'>"
    + table_html(["Our consignments, this corridor, 24 months","Hours"],
      [["Median","<b>31</b>"],["75th percentile","48"],["<b>90th percentile</b>","<b>96</b>"],
       ["Worst month, median","74"],["Sample","1,480 consignments"]])
    + "<p style='font-size:12.5px;color:#6b6861'>The index <b>was designed to</b> benchmark national "
      "logistics environments. It <b>was not designed to</b> predict one corridor; its factsheet says "
      "it is not a diagnostic tool.</p></div>",
    "World Bank, Connecting to Compete 2023, and Lindmark's own consignment records"), 560)
S["t07-f10"]=lambda: f_scene(980,440, people=[("paula",290,166,{}),("mei",430,168,{}),
    ("wei",610,180,{"seated":True}),("marek",700,178,{"seated":True})],
    board=(790,20,170,140,"31 / 96",[("median","31h"),("90th","96h")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("note",520,206,0.2),
           ("computer",620,206,0.28)])
S["t07-f11"]=lambda: f_realia(tbl("Two proposal pages","An index, or our own data",
    ["","Page A","Page B"],
    [["Headline","a national score","our median and tail"],
     ["Promise","2–3 days","a distribution, with a sample size"],
     ["The index","used as a diagnosis","kept for its designed purpose, in one line"],
     ["Verifiable","no","every figure, from our records"]],
    note="A customer's logistics manager reads factsheets. That is their job."), 540)
S["t07-f12"]=lambda: f_realia(doc("Two proposal pages", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> This economy scores highly on the Logistics Performance Index, benchmarked against "
    "139 economies. Clearance on this corridor: two to three days.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> Clearance at the port of entry for <b>our own "
    "consignments</b> on this corridor, <b>1,480 consignments over 24 months</b>: median <b>31 "
    "hours</b>, 75th percentile <b>48</b>, <b>90th percentile 96</b>, worst month median <b>74</b>. "
    "<b>We print the tail because the customer is planning around the bad week.</b> The index places "
    "this economy in the upper band of the 139 it covers; <b>it was designed to benchmark national "
    "environments and was not designed to predict one corridor</b>, and its factsheet states that it "
    "is not a diagnostic tool. <b>The only figures here that describe your consignments are ours.</b></p>",
    "Replace a proxy with a direct measure <i>and its spread</i>. A median alone is a new proxy in "
    "better clothes."), 560)
S["t07-f13"]=lambda: f_realia(tbl("","Fitness-for-purpose planner",
    ["Box","Yours"],
    [["What we measure, and over what",""],["The median and the tail",""],
     ["Why we print the tail",""],["The external measure, in its designed role",""],
     ["What we therefore do not claim",""],["Any citation caution",""]],
    note="The publisher's statement about what its measure is <i>not</i> for is the most reliable "
         "sentence in the document."), 520)
S["t07-f14"]=lambda: f_scene(1140,480, people=[("mei",280,164,{}),("paula",450,180,{"seated":True}),
    ("marek",540,178,{"seated":True}),("wei",630,180,{"seated":True}),
    ("sofia",720,178,{"seated":True}),("yara",860,172,{}),("anders",960,174,{})],
    board=(930,20,180,130,"31 / 96",[("median","31h"),("tail","96h")]),
    props=[("table",430,262,1.9),("essay",360,206,0.3),("flipchart",80,150,0.9),
           ("worldmap",150,34,0.34),("archive",1060,232,0.3)])
S["t07-f15"]=lambda: f_chart([("direct measure with spread",4),("direct measure only",7),
    ("a proxy",9),("no figures quoted",3),("don't know",2)], unit="students")
S["t07-f16"]=lambda: f_scene(920,430, people=[("mei",300,170,{"seated":True})],
    board=(680,20,230,150,"THIS YEAR",[("median","26h"),("90th","140h")]),
    props=[("desk",400,252,1.2),("computer",470,200,0.42),("essay",330,204,0.3),
           ("email",120,206,0.24)])

# ---------------- Unit 8 · The Target and the Delivery ----------------
S["t08-f1"]=lambda: f_icons([("signature","a signed pledge"),("calendar","a 24-month window"),
    ("stamp","a validation stamp"),("noentry","commitment removed"),
    ("dashboard","two very different counts"),("data","target and actual diverging"),
    ("envelope","a submission"),("clock","five minutes to a deadline"),
    ("spreadsheet","well-known names"),("meeting","one dashboard, two readings")], cols=5)
S["t08-f2"]=lambda: f_scene(920,430, people=[("priya",300,166,{}),("marek",520,180,{"seated":True})],
    board=(700,20,210,150,"COUNTS",[("validated","10,051"),("or committed","12,647")]),
    props=[("desk",400,252,1.3),("essay",340,206,0.3),("computer",470,202,0.36),
           ("calendar",570,196,0.26)])
S["t08-f3"]=lambda: f_icons([("signature","a commitment made"),("stamp","a target validated"),
    ("dashboard","two different counts"),("noentry","a commitment removed"),
    ("envelope","a submission in progress"),("certificate","a reinstatement")], cols=3)
S["t08-f4"]=lambda: f_realia(tbl("","Team research &middot; committed, or delivered?",
    ["The commitment","When made, and by when","Delivered?","How it is described now"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The honest sentence:</b>"), 560)
S["t08-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; board paper: our emissions target commitment",
    "P. Raman &middot; 3 October &middot; the tense in paragraph three is deliberate",
    table_html(["","Count"],
      [["Companies with <b>validated</b> targets","<b>10,051</b>"],
       ["Companies with targets <b>or commitments</b>","<b>12,647</b>"],
       ["<b>The difference</b>","about <b>2,600</b> that have promised and <b>have yet to deliver</b>"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:10px 12px;font-size:13.5px'>"
      "A company that does not submit targets within <b>24 months</b> of its commitment is given the "
      "status <b>“commitment removed”</b>. The status is <b>reversible</b>: a company returns "
      "to validated status on successful validation of its targets.</p>"
    + "<p style='font-size:13.5px'><b>What happened to those who missed.</b> In one year <b>239 major "
      "global companies</b> had commitments removed. <b>As at July of the following year, 17 of the 239 "
      "had had net-zero targets validated since removal, and 14 had had near-term targets "
      "validated.</b></p>"
    + "<p style='font-size:13.5px'><b>Our own position.</b> Lindmark <b>committed 22 months ago</b>. "
      "The submission <b>has been drafted</b>. Scope 3 data <b>remains incomplete</b> for two of four "
      "business lines. <b>We have yet to submit.</b> The window <b>closes in nine weeks</b>.</p>"
    + "<p style='font-size:13.5px'><b>What I will not write.</b> <b>I will not describe this project as "
      "“on track”.</b> Nothing with a deadline in nine weeks and no submission is on "
      "track.</p>",
    "Source: Science Based Targets initiative target dashboard and Trend Tracker, and its commitment "
    "and target statuses document."), 570)
S["t08-f6"]=lambda: f_realia(tbl("Word study","Forms for what has not happened",
    ["Form","Example","Leaves it open?"],
    [["have yet to + bare verb","We <b>have yet to submit</b>.","yes — expected, not done"],
     ["has not yet + participle","We <b>have not yet submitted</b>.","yes, flatter"],
     ["has still not + participle","They <b>have still not submitted</b>.","yes, with impatience"],
     ["has since been + participle","The commitment <b>has since been removed</b>.","reports what followed"],
     ["had not been + participle by","<b>Had not been validated by</b> July.","closes at a stated date"],
     ["did not + bare verb","They <b>did not submit</b>.","closed; finished"]],
    note="<i>Have yet to submit</i> — never <i>have yet submitted</i> or <i>have yet to submitting</i>."), 560)
S["t08-f7"]=lambda: f_chart([("validated targets",10051),("targets or commitments",12647)],
    unit="companies — the difference is about 2,600 that have yet to deliver")
S["t08-f8"]=lambda: f_icons([("dashboard","two counts, bracketed"),("noentry","a defined status"),
    ("tally","a small follow-up count"),("envelope","a drafted submission"),
    ("calendar","nine weeks"),("review","a crossed-out phrase")], cols=3)
S["t08-f9"]=lambda: f_realia(doc("Board paper page", None,
    "<div style='display:flex;gap:30px;margin:4px 0'>"
    "<div><div style='font:700 26px Bricolage Grotesque,sans-serif'>10,051</div>"
    "<div style='font-size:12px;color:#6b6861'>validated</div></div>"
    "<div><div style='font:700 26px Bricolage Grotesque,sans-serif'>12,647</div>"
    "<div style='font-size:12px;color:#6b6861'>targets or commitments</div></div>"
    "<div style='align-self:center;font-size:13px'><b>≈ 2,600 have yet to deliver</b></div></div>"
    + table_html(["Option","What it means","Consequence"],
      [["Submit on current data","two lines estimated","queries; possible rejection"],
       ["Request more time","if the policy permits","status uncertain"],
       ["Allow removal","status published","reversible; 17 of 239 is the benchmark"]])
    + "<p style='font-size:13.5px'>The submission <b>has been drafted</b>. Scope 3 <b>remains "
      "incomplete</b> for two of four lines. <b>We have yet to submit.</b> Nine weeks.</p>"
    "<p style='font-size:14px'><b>What I will not write: that this project is “on track”.</b></p>",
    "SBTi dashboard and Trend Tracker; commitment and target statuses, v1.1"), 560)
S["t08-f10"]=lambda: f_scene(980,440, people=[("marek",280,168,{"seated":True}),
    ("priya",440,166,{}),("lars",610,180,{"seated":True}),("grace",700,178,{"seated":True})],
    board=(790,20,170,140,"24 MONTHS",[("elapsed","22"),("left","9 weeks")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("calendar",520,196,0.24),
           ("note",600,206,0.2)])
S["t08-f11"]=lambda: f_realia(tbl("Two status pages","On track, or three sentences",
    ["","Page A","Page B"],
    [["Indicator","green, “on track”","three perfect-aspect sentences"],
     ["Deadline","not shown","closes in nine weeks"],
     ["The published rule","&mdash;","window, status, reversibility"],
     ["Follow-up for those who missed","&mdash;","17 of 239, as at July"]],
    note="One of these is signed nine weeks before a deadline that will be missed."), 540)
S["t08-f12"]=lambda: f_realia(doc("Two status papers", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> The emissions target project is on track. Budget line approval is requested.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> The dashboard lists <b>10,051</b> companies with "
    "validated targets and <b>12,647</b> with targets or commitments. A company that does not submit "
    "within <b>24 months</b> is given the status <b>commitment removed</b>, which is published and "
    "reversible. In one year <b>239 major companies</b> were given it; <b>as at July of the following "
    "year, 17 had had net-zero targets validated since and 14 near-term targets</b>. Lindmark "
    "<b>committed 22 months ago</b>; the submission <b>has been drafted</b>; scope 3 <b>remains "
    "incomplete</b> for two of four lines; <b>we have yet to submit</b>; the window <b>closes in nine "
    "weeks</b>. <b>I will not describe this as on track.</b></p>",
    "Write the sentence beginning <i>what I will not write</i>. Boards remember who wrote it."), 560)
S["t08-f13"]=lambda: f_realia(tbl("","Status-paper planner",
    ["Box","Yours"],
    [["The two counts and their difference",""],["The published rule",""],
     ["What happened to those who missed, with an <i>as at</i> date",""],
     ["Our own position, in the perfect aspect",""],["The options, with consequences",""],
     ["What I will not write",""]],
    note="Commitment language has no object in the world."), 520)
S["t08-f14"]=lambda: f_scene(1140,480, people=[("priya",280,164,{}),("marek",450,180,{"seated":True}),
    ("lars",540,178,{"seated":True}),("grace",630,180,{"seated":True}),
    ("yara",720,178,{"seated":True}),("nour",860,172,{}),("ines",960,174,{})],
    board=(930,20,180,130,"HAVE YET TO",[("drafted","yes"),("submitted","no")]),
    props=[("table",430,262,1.9),("essay",360,206,0.3),("flipchart",80,150,0.9),
           ("calendar",1055,196,0.24),("folder",1045,232,0.28)])
S["t08-f15"]=lambda: f_chart([("with a date and a measure",4),("as on track",9),
    ("as committed",7),("not reported",3),("don't know",2)], unit="students")
S["t08-f16"]=lambda: f_scene(920,430, people=[("priya",300,170,{"seated":True})],
    board=(680,20,230,150,"DECISION",[("accepted","3 lines"),("declined","1 line")]),
    props=[("desk",400,252,1.2),("computer",470,200,0.42),("essay",330,204,0.3),
           ("note",120,208,0.22)])

# ---------------- Unit 9 · Longer Routes, Same Cargo ----------------
S["t09-f1"]=lambda: f_icons([("ship","a short route"),("worldmap","a long route round a continent"),
    ("scales","a tonnage scale"),("data","weight times distance"),
    ("canal","a canal with no traffic"),("coast","a cape with a queue"),
    ("pricetag","cost per tonne rising"),("balance","flat demand"),
    ("transfer","a chain of causes"),("meeting","two percentages, two readings")], cols=5)
S["t09-f2"]=lambda: f_scene(940,430, people=[("mei",300,166,{}),("marek",520,180,{"seated":True})],
    board=(700,20,230,150,"2024",[("volume","+2.2%"),("tonne-miles","+5.9%")]),
    props=[("desk",420,252,1.3),("essay",350,206,0.3),("computer",480,202,0.36),
           ("worldmap",120,34,0.42)])
S["t09-f3"]=lambda: f_icons([("scales","the cargo"),("ship","the short route"),
    ("worldmap","the long route"),("data","the same weight, further"),
    ("canal","a canal in low use"),("balance","two measures diverging")], cols=3)
S["t09-f4"]=lambda: f_realia(tbl("","Team research &middot; what explains the change?",
    ["The figure","What changed in it","What changed in the mix","What each explanation requires"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>Which response is available to us?</b>"), 560)
S["t09-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; note on the sea-freight cost per tonne",
    "M. Chow &middot; 16 August &middot; the two units are the whole explanation",
    table_html(["","Figure"],
      [["Seaborne trade growth, 2024, <b>by volume</b>","<b>2.2%</b>"],
       ["Seaborne trade growth, 2024, <b>in tonne-miles</b>","<b>5.9%</b> &mdash; close to <b>three times</b>"],
       ["Projected 2025, volume","about <b>0.5%</b>"],
       ["Projected 2025, tonne-miles","<b>0.3%</b>"],
       ["Expected 2026&ndash;2030, annual","about <b>2%</b>"],
       ["Canal tonnage, as at mid-2025","about <b>70% below 2023 levels</b>"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:10px 12px;font-size:13.5px;"
      "font-style:italic'>The rise in tonne-miles reflects growing fragility in supply chains rather "
      "than robust trade expansion.</p>"
    + table_html(["If the cause is …","The response is …","Available?"],
      [["<b>Demand</b> &mdash; a tightening market","commercial: renegotiate, accept margin","<b>no</b> &mdash; volume is flat"],
       ["<b>Distance</b> &mdash; rerouting","operational: routing, service, transit promises","<b>yes</b>"],
       ["<b>Composition</b> &mdash; our mix shifted","analytical: restate by lane","<b>yes, partly this</b>"]])
    + "<p style='font-size:13.5px'><b>Rerouting accounts for about two thirds of our 11% rise.</b> About "
      "a third is a <b>composition effect</b>: long-lane tonnage rose from <b>31% to 44%</b>, so the "
      "average moved <b>even on lanes whose own cost did not</b>. <b>Nothing got dearer. The weight "
      "moved to the expensive end.</b></p>",
    "Source: UNCTAD, Review of Maritime Transport 2025 (24 September 2025). The 11%, the 3,500 extra "
    "nautical miles and the lane shares are Lindmark's own."), 570)
S["t09-f6"]=lambda: f_realia(tbl("Word study","Attribution verbs, by how much causation they claim",
    ["Form","Example","Causation claimed"],
    [["is attributable to","The gap <b>is attributable to</b> rerouting.","strong, and defensible"],
     ["is explained by","The rise <b>is explained by</b> distance.","strong"],
     ["arises from / stems from","The cost <b>arises from</b> the longer route.","strong, formal"],
     ["reflects","The figure <b>reflects</b> growing fragility.","moderate — a sign of, not a result of"],
     ["accounts for","Rerouting <b>accounts for</b> about two thirds of the rise.","a quantified share"],
     ["is associated with","Longer routes <b>are associated with</b> higher cost.","weak; no causal claim"]],
    note="<i>Accounts for</i> is checkable. <i>Is due to</i> is not."), 560)
S["t09-f7"]=lambda: f_chart([("volume, 2024",2.2),("tonne-miles, 2024",5.9),
    ("volume, 2025 proj.",0.5),("tonne-miles, 2025 proj.",0.3)],
    unit="percent — the 2024 gap is distance, not demand")
S["t09-f8"]=lambda: f_icons([("balance","two bars of different heights"),("quotemark","a quoted reading"),
    ("spreadsheet","three candidate causes"),("stars","a tick against one"),
    ("data","two mix shares"),("email","a rate renegotiation")], cols=3)
S["t09-f9"]=lambda: f_realia(doc("Operations note page", None,
    "<div style='display:flex;gap:26px;margin:4px 0'>"
    "<div><div style='font:700 30px Bricolage Grotesque,sans-serif'>+2.2%</div>"
    "<div style='font-size:12px;color:#6b6861'>volume, 2024</div></div>"
    "<div><div style='font:700 30px Bricolage Grotesque,sans-serif'>+5.9%</div>"
    "<div style='font-size:12px;color:#6b6861'>tonne-miles, 2024</div></div>"
    "<div style='align-self:center;font-size:13px'><b>distance, not demand</b></div></div>"
    + table_html(["Cause","Share of our 11%","Response available?"],
      [["Rerouting","about two thirds","yes — operational"],
       ["Our own mix (31% → 44% long lanes)","about one third","yes — analytical"],
       ["Market rate movement","about three points","attempted for nine months"]])
    + "<p style='font-size:13px;color:#6b6861'>Canal tonnage about 70% below 2023 levels, mid-2025. "
      "Eastbound lane: about 3,500 additional nautical miles a sailing.</p>"
    "<p style='font-size:14px'><b>Nothing got dearer. The weight moved to the expensive end.</b></p>",
    "UNCTAD, Review of Maritime Transport 2025, and Lindmark's own lane data"), 560)
S["t09-f10"]=lambda: f_scene(1000,440, people=[("marek",280,168,{"seated":True}),
    ("mei",440,166,{}),("yara",610,180,{"seated":True}),("wei",700,178,{"seated":True})],
    board=(810,20,170,150,"2.2 / 5.9",[("volume","+2.2%"),("t-miles","+5.9%")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("archive",520,208,0.3),
           ("worldmap",120,34,0.4)])
S["t09-f11"]=lambda: f_realia(tbl("Two management pack pages","One average, or by lane",
    ["","Page A","Page B"],
    [["Cost per tonne","one average, up 11%","six lanes, each with its own figure"],
     ["Explanation","market commentary","attribution with shares"],
     ["Mix","not shown","31% → 44% long lanes"],
     ["Composition effect","absorbed into the average","separated, about one third"]],
    note="A single average will do this to you again."), 540)
S["t09-f12"]=lambda: f_realia(doc("Two notes on a cost rise", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> Sea-freight cost per tonne is up eleven percent. The market has tightened. We are "
    "renegotiating rates.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> Seaborne trade grew <b>2.2% by volume</b> in 2024 and "
    "<b>5.9% in tonne-miles</b>. Nobody shipped three times as much of anything: tonne-miles are weight "
    "times distance, and vessels that used the canal are routing round the cape &mdash; canal tonnage "
    "about <b>70% below 2023 levels</b>. <b>Rerouting accounts for about two thirds</b> of our 11%; "
    "about <b>a third is a composition effect</b> (long lanes 31% → 44%), where <b>no individual "
    "lane's cost rose</b>; market movement accounts for about <b>three points</b>, which is what nine "
    "months of renegotiation has recovered.</p>",
    "Give a share to every cause, including the one you are dismissing."), 560)
S["t09-f13"]=lambda: f_realia(tbl("","Attribution planner",
    ["Box","Yours"],
    [["The two measures and their rates",""],["The publisher's reading",""],
     ["Candidate causes and what each requires",""],["Which responses are available",""],
     ["The composition effect, with both shares",""],["What has been attempted instead",""]],
    note="A composition effect is not a cause and should never be written as one."), 520)
S["t09-f14"]=lambda: f_scene(1140,480, people=[("mei",280,164,{}),("marek",450,180,{"seated":True}),
    ("yara",540,178,{"seated":True}),("wei",630,180,{"seated":True}),
    ("paula",720,178,{"seated":True}),("anders",860,172,{}),("okonjo",960,174,{})],
    board=(930,20,180,130,"NOT DEMAND",[("volume","+2.2%"),("t-miles","+5.9%")]),
    props=[("table",430,262,1.9),("essay",360,206,0.3),("flipchart",80,150,0.9),
           ("worldmap",150,34,0.34),("archive",1060,232,0.3)])
S["t09-f15"]=lambda: f_chart([("we check the mix routinely",3),("checked once",6),
    ("never checked",9),("one average only",5),("don't know",2)], unit="students")
S["t09-f16"]=lambda: f_scene(920,430, people=[("mei",300,170,{"seated":True}),("marek",690,172,{})],
    board=(680,20,230,150,"SIX MONTHS ON",[("canal","recovering"),("cost","−7 pts")]),
    props=[("desk",400,252,1.2),("computer",470,200,0.42),("essay",330,204,0.3),
           ("note",120,208,0.22)])
