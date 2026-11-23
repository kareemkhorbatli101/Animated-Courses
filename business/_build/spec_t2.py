# -*- coding: utf-8 -*-
"""Clearline Book 6 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · The Investor-State Claim ----------------
S["t04-f1"]=lambda: f_icons([("certificate","a treaty with two seals"),("noentry","a canceled permit"),
    ("meeting","a panel of three"),("archive","a bundle of pleadings"),
    ("stamp","a registry stamp"),("balance","a state and a company"),
    ("envelope","a sealed award"),("note","a discontinuance"),
    ("data","cases by sector"),("essay","two reports, two totals")], cols=5)
S["t04-f2"]=lambda: f_scene(940,430, people=[("hanna",300,166,{}),("lars",520,180,{"seated":True})],
    board=(760,24,170,120,"ICSID FY26",[("new","60"),("admin.","363")]),
    props=[("desk",420,252,1.3),("essay",350,206,0.3),("essay",372,204,0.3),
           ("certificate",560,208,0.24)])
S["t04-f3"]=lambda: f_icons([("stamp","a registration"),("meeting","a tribunal constituted"),
    ("envelope","an award rendered"),("handshake","a case discontinued"),
    ("certificate","a treaty as basis of consent"),("data","the sectors involved")], cols=3)
S["t04-f4"]=lambda: f_realia(tbl("","Team research &middot; fact or allegation?",
    ["Common ground","Our allegation","How it was written down"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>What the other side would quote:</b>"), 540)
S["t04-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; note to the board: the terminal concession",
    "H. Lindqvist &middot; 2 July &middot; two sections, two registers, for a reason",
    "<p style='font-size:13.5px'><b>1 &middot; Common ground.</b> The concession under which our 30% "
    "joint venture operates the bonded terminal <b>was canceled by decree on 11 June</b>. The decree "
    "<b>was published</b>. The joint venture <b>has been denied access</b> since <b>14 June</b>. "
    "<b>None of this is disputed.</b></p>"
    "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:10px 12px;font-size:13.5px'>"
    "<b>2 &middot; What would be alleged.</b> <b>It would be alleged that</b> the cancellation "
    "constitutes an expropriation without compensation. <b>The joint venture would contend that</b> the "
    "state failed to accord fair and equitable treatment. <b>We would submit that</b> the treaty "
    "confers jurisdiction. <b>Nothing in this section is a statement of fact by me.</b></p>"
    + table_html(["","Figure"],
      [["New registrations, fiscal year just ended","<b>60</b> &mdash; 57 Convention, 3 Additional Facility"],
       ["The same year, in several firm summaries","<b>57</b> &mdash; Additional Facility omitted"],
       ["Previous year","<b>67</b>"],
       ["Registered since 1972","<b>1,118</b>"],
       ["Administered during the year","<b>363</b> &mdash; the most in its history"],
       ["Concluded","<b>83</b> &mdash; <b>37% settled or discontinued, 63% decided</b>"],
       ["Treaties as basis of consent","<b>62%</b>"],
       ["Oil and gas / mining, new cases","<b>25% / 18%</b>"]])
    + "<p style='font-size:13.5px'><b>A bonded terminal is in neither of the two largest sectors</b>, "
      "so those percentages describe other people's cases. <b>No average duration is published and I am "
      "not supplying one.</b></p>",
    "Source: ICSID Caseload Statistics for the fiscal year ended 30 June 2026 and the 2026 Annual "
    "Report. The 57 appears in secondary summaries of the same statistics."), 570)
S["t04-f6"]=lambda: f_realia(tbl("Word study","Pleading verbs, by what they commit you to",
    ["Verb","What it does","Example"],
    [["allege","asserts something not yet established","<b>It is alleged that</b> the state expropriated the asset."],
     ["claim","the same, less formal; also <i>demand</i>","The investor <b>claims</b> compensation."],
     ["contend","puts a position forward in argument","The joint venture <b>would contend that</b> no notice was given."],
     ["maintain","holds a position against resistance","The state <b>maintains</b> the decree was lawful."],
     ["submit","offers a proposition to a decision-maker","<b>We would submit that</b> jurisdiction is established."],
     ["plead","formally files a case or defense","The respondent has yet to <b>plead</b>."],
     ["state / record","reports undisputed fact","The decree <b>was published</b> on 11 June."]],
    note="<i>Alleges</i> says you have not proved it. <i>States</i> says it is not in dispute."), 560)
S["t04-f7"]=lambda: f_part("83 concluded proceedings",
    [("decided by a tribunal — 63%",63,BLUE),("settled or discontinued — 37%",37,AMBER)])
S["t04-f8"]=lambda: f_icons([("certificate","a published decree"),("barrier","access denied"),
    ("archive","a pleading bundle"),("essay","two totals"),
    ("data","a sector pie"),("timer","duration, not published")], cols=3)
S["t04-f9"]=lambda: f_realia(doc("Advice note page", None,
    "<p style='font-size:13.5px'><b>Common ground.</b> Canceled by decree, 11 June. Decree published. "
    "Access denied since 14 June.</p>"
    "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:9px 12px;font-size:13px'>"
    "<b>What would be alleged.</b> Expropriation without compensation. Failure to accord fair and "
    "equitable treatment. Jurisdiction under the treaty. <b>Nothing here is a statement of fact by "
    "me.</b></p>"
    + table_html(["","Figure"],
      [["New registrations","60 (57 + 3)"],["Same year, firm summaries","57"],
       ["Administered","363"],["Concluded","83"],["Settled or discontinued","37%"],
       ["Treaties as basis of consent","62%"]])
    + "<p style='font-size:12.5px;color:#6b6861'>A bonded terminal is in neither largest sector. No "
      "average duration is published and none is supplied here.</p>",
    "ICSID Caseload Statistics, fiscal year ended 30 June 2026"), 560)
S["t04-f10"]=lambda: f_scene(980,440, people=[("lars",280,168,{"seated":True}),
    ("hanna",440,166,{}),("grace",610,180,{"seated":True}),("adeel",700,178,{"seated":True})],
    board=(790,20,170,140,"37 / 63",[("settled","37%"),("decided","63%")]),
    props=[("table",400,252,1.5),("certificate",340,204,0.26),("essay",520,206,0.28),
           ("essay",542,204,0.28)])
S["t04-f11"]=lambda: f_realia(tbl("Two notes","Fact, or two registers",
    ["","Note A","Note B"],
    [["Our case","written as fact","written in pleading verbs"],
     ["Disclaiming line","none","after the pleading section"],
     ["Conflicting figure","one version","both, with the reason"],
     ["Duration","estimated","refused"]],
    note="One of these may be obtained by the other side in disclosure."), 540)
S["t04-f12"]=lambda: f_realia(doc("Two dispute notes", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> The state expropriated the terminal on 11 June without notice or compensation. "
    "Arbitration takes about two years. Recommended: file.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> <b>It is common ground that</b> the concession was "
    "canceled by decree on 11 June, that the decree was published, and that access has been denied "
    "since 14 June. <b>It would be alleged that</b> the cancellation constitutes an expropriation. "
    "<b>We would submit that</b> the treaty confers jurisdiction. <b>Nothing in that section is a "
    "statement of fact by me.</b> Sixty new registrations were made in the year just ended &mdash; 57 "
    "under the Convention and 3 under the Additional Facility Rules; <b>several firm summaries report "
    "57</b>. <b>No average duration is published and I am not supplying one.</b></p>",
    "Keep two registers apart. Mixing them does not strengthen your case; it makes your document "
    "evidence."), 560)
S["t04-f13"]=lambda: f_realia(tbl("","Dispute note planner",
    ["Box","Yours"],
    [["Common ground, with dates",""],["What would be alleged",""],
     ["The disclaiming line",""],["Published caseload",""],
     ["What the statistics do not describe",""],["What has not yet happened",""]],
    note="Absence that is stated is information. Absence that is silent is a trap."), 520)
S["t04-f14"]=lambda: f_scene(1140,480, people=[("hanna",280,164,{}),("lars",450,180,{"seated":True}),
    ("grace",540,178,{"seated":True}),("adeel",630,180,{"seated":True}),
    ("marek",720,178,{"seated":True}),("yara",860,172,{}),("ines",960,174,{})],
    board=(930,20,180,130,"60 / 57",[("same year","two totals"),("admin.","363")]),
    props=[("table",430,262,1.9),("essay",360,206,0.3),("flipchart",80,150,0.9),
           ("certificate",1060,206,0.24),("phone",1080,196,0.18)])
S["t04-f15"]=lambda: f_chart([("as allegation",5),("as fact",8),("verbally only",6),
    ("nothing recorded",4),("don't know",3)], unit="students")
S["t04-f16"]=lambda: f_scene(920,430, people=[("hanna",300,170,{"seated":True})],
    board=(680,20,230,150,"SETTLED",[("months","14"),("of value","60%")]),
    props=[("desk",400,252,1.2),("computer",470,200,0.42),("email",330,206,0.24),
           ("archive",120,212,0.3)])

# ---------------- Unit 5 · Compliance and Effect ----------------
S["t05-f1"]=lambda: f_icons([("clipboard","every box ticked"),("padlock","a lock in an open wall"),
    ("balance","paper against outcome"),("worldmap","a list of countries"),
    ("book","recommendation forty"),("thermostat","a scoring dial"),
    ("magnifier","a method note"),("note","an assumption in brackets"),
    ("danger","a risk map"),("meeting","one score, two conclusions")], cols=5)
S["t05-f2"]=lambda: f_scene(920,430, people=[("oksana",300,166,{}),("adeel",520,180,{"seated":True})],
    board=(700,20,210,150,"DECADE",[("compliance","+12 pts"),("effect","low")]),
    props=[("desk",400,252,1.3),("essay",340,206,0.3),("computer",470,202,0.36),
           ("note",560,208,0.2)])
S["t05-f3"]=lambda: f_icons([("book","rules all ticked"),("danger","the problem continuing"),
    ("change","compliance rising"),("balance","effectiveness flat"),
    ("note","an assumption in the method"),("worldmap","leaving a list, not reassessed")], cols=3)
S["t05-f4"]=lambda: f_realia(tbl("","Team research &middot; does it work, or does it exist?",
    ["The control","Does it exist","Does it work","What evidence would show it"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What I would recommend:</b>"), 560)
S["t05-f5"]=lambda: f_realia(doc("Lindmark Group &middot; counterparty screening report, page 4",
    "O. Levchenko &middot; 18 September &middot; the recommendation is at the foot and both parts are unwelcome",
    table_html(["","Figure"],
      [["Global average risk score, this edition","<b>5.28</b> on a 0&ndash;10 scale, 10 highest risk"],
       ["Previous edition","<b>5.30</b>"],
       ["The publisher's own description","<b>“statistically insignificant”</b>"]])
    + table_html(["","Direction over the decade"],
      [["<b>Technical compliance</b> &mdash; are the rules in place?","<b>improved about 12 percentage points since 2013</b>"],
       ["<b>Effectiveness</b> &mdash; does the system reduce the problem?","<b>remains at a low level</b>"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:10px 12px;font-size:13.5px'>"
      "<b>The assumption inside the score.</b> Evaluation data from the standard-setting body is "
      "<b>35%</b> of the total. <b>That body does not reassess the effectiveness of a jurisdiction "
      "after it leaves the increased-monitoring list</b>, so <b>the index assumes the graduate reached "
      "at least a moderate level</b>. This is stated by the publisher.</p>"
    + "<p style='font-size:13.5px'><b>Recommendation.</b> <b>I recommend that the screening threshold "
      "remain unchanged</b>; and <b>that any counterparty in a jurisdiction which has left the list "
      "within three years be reviewed individually</b>. <b>I further recommend that this paragraph be "
      "read aloud at the committee.</b></p>",
    "Source: Basel AML Index 2025, 14th public edition, for the scores, the weighting and the statement "
    "on reassessment; the 2024 edition for the decade comparison."), 570)
S["t05-f6"]=lambda: f_realia(tbl("Word study","Triggers that take the bare verb",
    ["Trigger","Example"],
    [["recommend that","I recommend that the threshold <b>remain</b> unchanged."],
     ["propose that","I propose that the review <b>be</b> conducted individually."],
     ["require that","The policy requires that each counterparty <b>be</b> screened annually."],
     ["insist that","The committee insisted that the paragraph <b>be</b> read aloud."],
     ["request that","We request that the report <b>include</b> the method note."],
     ["it is essential that","It is essential that the assumption <b>be</b> stated."],
     ["the recommendation that","the recommendation that the threshold <b>remain</b> unchanged"]],
    note="No <i>-s</i>, no <i>to</i>. The negative is <i>that it not be changed</i>."), 560)
S["t05-f7"]=lambda: f_line([("2013",0),("2016",4),("2019",7),("2022",10),("2025",12)],
    w=560, h=250, unit="technical compliance improvement, percentage points — effectiveness remains low throughout", ymin=-1)
S["t05-f8"]=lambda: f_icons([("clipboard","a ticked checklist"),("danger","a continuing problem"),
    ("change","two lines diverging"),("note","a bracketed assumption"),
    ("balance","a threshold held"),("megaphone","a paragraph read aloud")], cols=3)
S["t05-f9"]=lambda: f_realia(doc("Compliance report page", None,
    "<div style='display:flex;gap:30px;margin:4px 0'>"
    "<div><div style='font:700 32px Bricolage Grotesque,sans-serif'>5.28</div>"
    "<div style='font-size:12px;color:#6b6861'>this edition</div></div>"
    "<div><div style='font:700 32px Bricolage Grotesque,sans-serif;color:#6b6861'>5.30</div>"
    "<div style='font-size:12px;color:#6b6861'>previous</div></div>"
    "<div style='align-self:center;font-size:13px;font-style:italic'>“statistically "
    "insignificant” &mdash; the publisher</div></div>"
    + table_html(["Measure","Over the decade"],
      [["Technical compliance ↑","about +12 percentage points"],
       ["Effectiveness →","remains low"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:9px 12px;font-size:13px'>"
      "Evaluation data is 35% of the score. Effectiveness is <b>not reassessed</b> after a jurisdiction "
      "leaves the list, so the index <b>assumes</b> at least a moderate level.</p>"
    "<p style='font-size:14px'><b>I recommend that the threshold remain unchanged.</b><br>"
    "<b>I recommend that recent graduations be reviewed individually.</b></p>",
    "Basel AML Index 2025 &middot; 14th public edition"), 560)
S["t05-f10"]=lambda: f_scene(1000,440, people=[("adeel",270,168,{"seated":True}),
    ("oksana",430,166,{}),("marek",600,180,{"seated":True}),("grace",690,178,{"seated":True}),
    ("lars",780,180,{"seated":True})],
    board=(820,20,160,140,"5.30 → 5.28",[("compliance","+12"),("effect","flat")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("note",520,206,0.2),
           ("computer",620,206,0.28)])
S["t05-f11"]=lambda: f_realia(tbl("Two report pages","One score, or two measures",
    ["","Page A","Page B"],
    [["Headline","score improved","score, with the publisher's phrase"],
     ["Measures","one","compliance and effectiveness, separately"],
     ["The assumption","&mdash;","stated, with the cases it affects"],
     ["Recommendation","relax the threshold","hold it; review graduations individually"]],
    note="One of these is on file if a counterparty turns out badly."), 540)
S["t05-f12"]=lambda: f_realia(doc("Two compliance reports", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> The global average risk score improved from 5.30 to 5.28. Risk has fallen. We "
    "propose relaxing the screening threshold accordingly.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> The score moved from 5.30 to 5.28 &mdash; a change the "
    "publisher calls <b>statistically insignificant</b>. <b>Technical compliance</b> improved about 12 "
    "percentage points since 2013; <b>effectiveness remains at a low level</b>. Evaluation data is 35% "
    "of the score, and effectiveness is <b>not reassessed</b> after a jurisdiction leaves the "
    "increased-monitoring list, so the index <b>assumes</b> at least a moderate level. <b>I recommend "
    "that the threshold remain unchanged</b> and <b>that recent graduations be reviewed "
    "individually</b>. <b>I have no evidence either way</b> that our screening has prevented "
    "anything.</p>",
    "<i>I have no evidence either way</i> is a complete and professional sentence."), 560)
S["t05-f13"]=lambda: f_realia(tbl("","Compliance-and-effect planner",
    ["Box","Yours"],
    [["The headline with the publisher's own description",""],["Compliance and effect, as two rows",""],
     ["The assumption inside the score",""],["What you can and cannot demonstrate",""],
     ["The recommendation, in the subjunctive",""],["What you want read aloud",""]],
    note="Any score built from several inputs contains at least one assumption."), 520)
S["t05-f14"]=lambda: f_scene(1140,480, people=[("oksana",280,164,{}),("adeel",450,180,{"seated":True}),
    ("marek",540,178,{"seated":True}),("grace",630,180,{"seated":True}),
    ("lars",720,178,{"seated":True}),("hanna",860,172,{}),("ines",960,174,{})],
    board=(930,20,180,130,"EXISTS/WORKS",[("compliance","+12"),("effect","low")]),
    props=[("table",430,262,1.9),("essay",360,206,0.3),("flipchart",80,150,0.9),
           ("archive",1060,232,0.3),("megaphone",1050,200,0.2)])
S["t05-f15"]=lambda: f_chart([("we measure both",4),("existence only",10),("outcomes only",3),
    ("neither",5),("don't know",3)], unit="students")
S["t05-f16"]=lambda: f_scene(920,430, people=[("oksana",300,170,{"seated":True})],
    board=(680,20,230,150,"REVIEWS",[("cleared","10"),("declined","1")]),
    props=[("desk",400,252,1.2),("computer",470,200,0.42),("invoice",330,206,0.24),
           ("note",120,208,0.22)])

# ---------------- Unit 6 · Governance with Error Bars ----------------
S["t06-f1"]=lambda: f_icons([("data","a bar with an error line"),("balance","two overlapping brackets"),
    ("tally","a percentile scale"),("archive","thirty-five sources"),
    ("worldmap","over two hundred economies"),("change","a recalculated history"),
    ("review","a confidence band"),("magnifier","a visible tolerance"),
    ("spreadsheet","two bars almost equal"),("meeting","which bar is taller?")], cols=5)
S["t06-f2"]=lambda: f_scene(920,430, people=[("wei",300,166,{}),("grace",520,180,{"seated":True})],
    board=(700,20,210,150,"64 / 60",[("A","53–75"),("B","49–71")]),
    props=[("desk",400,252,1.3),("essay",340,206,0.3),("computer",470,202,0.38),
           ("note",560,208,0.2)])
S["t06-f3"]=lambda: f_icons([("archive","many sources, one number"),("tally","a percentile"),
    ("data","an estimate with its error"),("balance","two intervals overlapping"),
    ("change","a recalculated history"),("review","a band, not a rank")], cols=3)
S["t06-f4"]=lambda: f_realia(tbl("","Team research &middot; how precise is it?",
    ["The two things compared","The gap","The published margin","Distinguishable?"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What question the measure can answer:</b>"), 560)
S["t06-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; hub site note",
    "W. Zhang &middot; 9 May &middot; one page, and the overlap is the finding",
    table_html(["","Estimate","90% interval, approx."],
      [["Country A, government effectiveness","<b>64th percentile</b>","<b>53 to 75</b>"],
       ["Country B, government effectiveness","<b>60th percentile</b>","<b>49 to 71</b>"],
       ["<b>The gap</b>","<b>4 points</b>","<b>the intervals overlap by 22 points</b>"]])
    + "<p style='font-size:13.5px'><b>What the indicator is.</b> An aggregate of <b>35 cross-country "
      "data sources</b> from <b>more than 30 organizations</b>, covering <b>over 200 economies since "
      "1996</b>. Every estimate is published <b>with a standard error</b>.</p>"
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:10px 12px;font-size:13.5px;"
      "font-style:italic'>A 90 per cent confidence interval for the governance estimate is given by the "
      "estimate plus or minus 1.64 times the standard error. These margins of error should be "
      "considered when comparing governance across countries and over time.</p>"
    + "<p style='font-size:13.5px'><b>On these data, A and B cannot be distinguished on government "
      "effectiveness.</b> <b>I am not saying the indicator is unreliable; I am saying it is not precise "
      "enough for this comparison.</b> What can be said: <b>both are in the upper half and neither is "
      "in the top quartile</b> &mdash; and that removed two countries from the long list.</p>"
    + "<p style='font-size:13.5px'><b>One thing about the trend chart.</b> The 2025 release included "
      "<b>methodological revisions, with history recalculated back to 1996</b>. The March chart is "
      "<b>not comparable</b> and is withdrawn. The data portal lists <b>216 economies</b> overall and "
      "<b>214</b> for government effectiveness.</p>",
    "Source: World Bank, Worldwide Governance Indicators, 2025 update. Interval half-widths are "
    "approximate, derived from the published standard errors."), 570)
S["t06-f6"]=lambda: f_realia(tbl("Word study","Quantified uncertainty",
    ["Phrase","Example"],
    [["within the margin of error","The four-point gap is <b>within the margin of error</b>."],
     ["indistinguishable on these data","The two countries are <b>indistinguishable on these data</b>."],
     ["the intervals overlap","<b>The intervals overlap</b> by 22 points."],
     ["not materially different","The two are <b>not materially different</b> on this measure."],
     ["cannot be ranked on these data","The candidates <b>cannot be ranked on these data</b>."],
     ["a gap of X against a margin of Y","<b>A gap of 4 points against a margin of 11.</b>"]],
    note="<i>On these data</i> turns a claim about the world into a claim about the instrument."), 560)
S["t06-f7"]=lambda: f_matrix(["Country A","Country B"],
    [("Estimate (percentile)",["64","60"]),
     ("90% interval",["53–75","49–71"]),
     ("In the upper half?",["yes","yes"]),
     ("In the top quartile?",["no","no"]),
     ("Can they be ranked?",["not on these data","not on these data"])], w=560)
S["t06-f8"]=lambda: f_icons([("data","two bars with overlapping errors"),("archive","thirty-five sources"),
    ("quotemark","the publisher's guidance"),("noentry","an arrow crossed out"),
    ("balance","a band bracket"),("change","an old chart, superseded")], cols=3)
S["t06-f9"]=lambda: f_realia(doc("Site selection page", None,
    table_html(["","Estimate","90% interval"],
      [["Country A","64th percentile","53 to 75"],["Country B","60th percentile","49 to 71"]])
    + "<p style='font-size:13.5px'>Gap <b>4 points</b>. Overlap <b>22 points</b>.</p>"
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:9px 12px;font-size:13px;"
      "font-style:italic'>… the estimate plus or minus 1.64 times the standard error … these "
      "margins should be considered when comparing …</p>"
    "<p style='font-size:14px'><b>On these data, A and B cannot be distinguished.</b></p>"
    "<div style='border:2px solid #6d3b6e;padding:8px 12px;font-size:13.5px;display:inline-block'>"
    "Both in the upper half. Neither in the top quartile. <b>This survives the margins of error.</b></div>"
    "<p style='font-size:12px;color:#6b6861;margin-top:10px'>The March trend chart is withdrawn: "
    "history has been recalculated back to 1996.</p>",
    "World Bank, Worldwide Governance Indicators, 2025 update"), 560)
S["t06-f10"]=lambda: f_scene(980,440, people=[("yara",280,166,{}),("wei",420,168,{}),
    ("grace",610,180,{"seated":True}),("marek",700,178,{"seated":True})],
    board=(790,20,170,150,"OVERLAP",[("gap","4"),("margin","11")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("note",520,206,0.2),
           ("computer",620,206,0.28)])
S["t06-f11"]=lambda: f_realia(tbl("Two slides","An arrow, or error bars",
    ["","Slide A","Slide B"],
    [["Bars","two, with an arrow to the taller","two, with long error brackets"],
     ["Overlap","not shown","22 points, shown"],
     ["Band lines","&mdash;","upper half and top quartile"],
     ["Decision criteria","&mdash;","three, listed"]],
    note="One of these is being used to commit to a twelve-year lease."), 540)
S["t06-f12"]=lambda: f_realia(doc("Two site notes", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> Country A is at the 64th percentile for government effectiveness and country B at "
    "the 60th. A is better governed and is recommended.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> A stands at the 64th percentile with an approximate "
    "90% interval of 53 to 75; B at the 60th, interval 49 to 71. <b>The gap is 4 points and the "
    "intervals overlap by 22.</b> The indicator aggregates 35 cross-country sources over more than 200 "
    "economies and publishes a standard error with every estimate. <b>On these data, A and B cannot be "
    "distinguished.</b> <b>I am not saying the indicator is unreliable; I am saying it is not precise "
    "enough for this comparison.</b> Both are in the upper half; neither is in the top quartile; that "
    "removed two candidates. The decision will rest on berth availability, our own customs clearance "
    "times and whether a night shift can be staffed.</p>",
    "When you remove somebody's conclusion, say what their figures did buy."), 560)
S["t06-f13"]=lambda: f_realia(tbl("","Uncertainty planner",
    ["Box","Yours"],
    [["Both estimates with their intervals",""],["What the instrument is",""],
     ["The publisher's guidance, quoted",""],["What cannot be said, with <i>on these data</i>",""],
     ["The band statement that survives",""],["What the decision will rest on instead",""]],
    note="The error bar is not a disclaimer. It is the most informative number on the page."), 520)
S["t06-f14"]=lambda: f_scene(1140,480, people=[("wei",280,164,{}),("yara",450,180,{"seated":True}),
    ("grace",540,178,{"seated":True}),("marek",630,180,{"seated":True}),
    ("mei",720,178,{"seated":True}),("hanna",860,172,{}),("adeel",960,174,{})],
    board=(930,20,180,130,"4 / 11",[("gap","4 points"),("margin","11")]),
    props=[("table",430,262,1.9),("essay",360,206,0.3),("flipchart",80,150,0.9),
           ("worldmap",150,34,0.34),("phone",1080,196,0.18)])
S["t06-f15"]=lambda: f_chart([("published and used",3),("published and ignored",9),
    ("not published",8),("we do not compare",3),("never asked",2)], unit="students")
S["t06-f16"]=lambda: f_scene(920,430, people=[("wei",300,170,{"seated":True})],
    board=(680,20,230,150,"15 MONTHS ON",[("clearance","worse"),("berths","withdrawn")]),
    props=[("desk",400,252,1.2),("computer",470,200,0.42),("essay",330,204,0.3),
           ("note",120,208,0.22)])
