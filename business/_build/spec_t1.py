# -*- coding: utf-8 -*-
"""Clearline Book 6 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["t00-f1"]=lambda: f_realia(tbl("What you already have","Six structures, one example each",
    ["Structure","Example"],
    [["Cleft sentence","<b>It is the March assumption that</b> the whole plan turns on."],
     ["Concession and hold","<b>Granted</b>, the sample is small. <b>Even so</b>, I would act on it."],
     ["Passive of revision","The figure <b>has since been revised</b> to 9.5 trillion."],
     ["Quantifier clause","Eleven countries, <b>none of which</b> is the weighted average."],
     ["Like-for-like","<b>On a constant sample of 50</b>, two of the three improved."],
     ["Citation to publication","the flagship outlook, <b>stated policies scenario, autumn 2026</b>"]],
    note="At this level the work is no longer finding a better number. It is leading on the one you have."),
    540)
S["t00-f2"]=lambda: f_realia(doc("Taped inside a board folder", None,
    "<p style='font-size:15px;line-height:1.7'><b>1 &middot; Name what the instrument measures.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>An effective tax rate computed from the code is not "
    "money that left the company.</span></p>"
    "<p style='font-size:15px;line-height:1.7'><b>2 &middot; Say what it cannot distinguish.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>Four points apart on a margin of eleven. On these data "
    "they cannot be ranked.</span></p>"
    "<p style='font-size:15px;line-height:1.7'><b>3 &middot; Decide anyway, and say what you are not "
    "resting on.</b><br><span style='font-size:13px;color:#6b6861'>I am not resting this on the index "
    "position. I am resting it on visas and two existing customers.</span></p>"
    "<p style='font-size:15px;line-height:1.7'><b>4 &middot; Record when it is next republished.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>Some of them restate history when they arrive.</span></p>",
    "Four rules. Every instrument in this book publishes its own limits."), 530)
S["t00-f3"]=lambda: f_part("One score, three readings",
    [("technical compliance, improved",12,BLUE),("effectiveness, unchanged",1,AMBER),
     ("the rest of the score",22,PLUM)])

# ---------------- Unit 1 · The Mandate ----------------
S["t01-f1"]=lambda: f_icons([("meeting","a table with named places"),("essay","terms of reference"),
    ("handsup","a vote"),("spreadsheet","two tiers"),
    ("data","29 per cent"),("rights","a gavel, unused"),
    ("clipboard","reserved matters"),("transfer","delegated authority"),
    ("podium","a shareholders' meeting"),("signature","two signatures")], cols=5)
S["t01-f2"]=lambda: f_scene(940,430, people=[("yara",300,166,{}),("grace",470,180,{"seated":True}),
    ("adeel",640,172,{})],
    board=(770,24,160,120,"BOARD / MGMT",[("reserved","€2m+"),("delegated","below")]),
    props=[("table",420,252,1.4),("essay",350,204,0.32),("essay",372,202,0.32),
           ("folder",560,206,0.26)])
S["t01-f3"]=lambda: f_icons([("spreadsheet","oversight above execution"),("padlock","reserved matters"),
    ("transfer","delegated authority"),("handsup","a shareholder vote"),
    ("meeting","a one-tier board"),("door","a two-tier board")], cols=3)
S["t01-f4"]=lambda: f_realia(tbl("","Team research &middot; who actually decides?",
    ["The decision","Who decides in practice","Who decides on paper","If they differ"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The sentence that fixes it:</b>"), 560)
S["t01-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; board terms of reference, draft 4",
    "Y. Haddad, with G. Mensah &middot; 11 February &middot; every verb now has a subject",
    "<p style='font-size:13.5px'><b>Reserved to the board.</b> <b>It is for the board</b> to approve "
    "the annual budget; to approve any commitment above two million euros; to appoint and remove the "
    "managing director; to approve the remuneration policy; and to approve any related-party "
    "transaction.</p>"
    "<p style='font-size:13.5px'><b>Delegated.</b> <b>It falls to the managing director</b> to approve "
    "commitments below two million euros, to settle claims below five hundred thousand, and to set "
    "terms of employment below executive level &mdash; reporting each to the board at its next "
    "meeting.</p>"
    + table_html(["","Figure"],
      [["Women on boards, 52-jurisdiction average, 2024","<b>29%</b> &mdash; up from <b>22% in 2019</b>"],
       ["Board <b>chair</b> positions","<b>lags behind</b> the board average"],
       ["Jurisdictions requiring disclosure of board gender composition","<b>65%</b>"],
       ["Jurisdictions requiring a vote on remuneration","approximately <b>three quarters</b>"],
       ["Switzerland thresholds","<b>30%</b> board of directors, <b>20%</b> management board"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:10px 12px;font-size:13.5px'>"
      "<b>Our target.</b> 30% women on the board by 2029. <b>It is not enough to say that 30 is above "
      "the 29 per cent average</b>: an average is not an argument. Our last four board searches "
      "produced long lists that were <b>38% women</b>.</p>"
    + "<p style='font-size:13.5px'><b>What should not be inferred.</b> <b>It should not be inferred "
      "that</b> a target is a quota. <b>It is not for this document</b> to set an executive target.</p>",
    "Source: OECD, Corporate Governance Factbook 2025, covering 52 jurisdictions. The 38% long-list "
    "figure is Lindmark's own and covers four searches, which is a small sample."), 570)
S["t01-f6"]=lambda: f_realia(tbl("Word study","<i>it</i>-structures, by function",
    ["Function","Form","Example"],
    [["Allocate a duty","it is for X to &middot; it falls to X to","<b>It is for the board to</b> approve the budget."],
     ["Leave open","it remains for X to","<b>It remains for</b> the committee <b>to</b> decide how."],
     ["Block an inference","it should not be inferred that","<b>It should not be inferred that</b> a target is a quota."],
     ["Evaluate","it would be wrong to","<b>It would be wrong to</b> read 29 as a target."],
     ["Report a position","it is accepted that","<b>It is accepted that</b> chair representation lags."],
     ["Postpone a long subject","it is … that","<b>It is</b> surprising <b>that</b> no jurisdiction requires it."]],
    note="The great virtue of <i>it is for X to</i> is that the duty cannot be written without naming X."), 560)
S["t01-f7"]=lambda: f_chart([("Women on boards, 2019",22),("Women on boards, 2024",29),
    ("Board chair positions",11),("Switzerland: board threshold",30),
    ("Switzerland: management board",20)], unit="per cent — 52 jurisdictions; the chair figure is indicative only")
S["t01-f8"]=lambda: f_icons([("padlock","reserved matters"),("transfer","a threshold on delegation"),
    ("spreadsheet","comparative data"),("meeting","an open question"),
    ("noentry","a crossed-out inference"),("calendar","a review date")], cols=3)
S["t01-f9"]=lambda: f_realia(doc("Terms of reference page", None,
    "<p style='font-size:13.5px'><b>1.</b> It is for the board to approve the annual budget.<br>"
    "<b>2.</b> It is for the board to approve any commitment above 2,000,000 euros.<br>"
    "<b>3.</b> It is for the board to appoint and remove the managing director.<br>"
    "<b>4.</b> It is for the board to approve the remuneration policy.</p>"
    + table_html(["Delegated to","Up to","Reports"],
      [["Managing director","2,000,000 &euro;","next scheduled meeting"],
       ["Managing director","500,000 &euro; (claims)","next scheduled meeting"],
       ["Managing director","below executive level (terms)","annually"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:9px 12px;font-size:13px'>"
      "<b>What should not be inferred.</b> That a target is a quota. That the company is subject to a "
      "disclosure obligation. That this document sets an executive target.</p>"
    "<p style='font-size:12.5px;color:#6b6861'>Review: it falls to the general counsel to bring this "
    "document back in February 2028.</p>",
    "OECD, Corporate Governance Factbook 2025 &middot; 52 jurisdictions"), 560)
S["t01-f10"]=lambda: f_scene(980,440, people=[("lars",280,168,{"seated":True}),
    ("yara",440,166,{}),("grace",610,180,{"seated":True}),("adeel",700,178,{"seated":True})],
    board=(790,20,170,150,"BOARD / MGMT",[("reserved","budget, MD"),("delegated","‹ €2m")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("pen",520,206,0.18),
           ("essay",362,200,0.3)])
S["t01-f11"]=lambda: f_realia(tbl("Two drafts","With and without named actors",
    ["","Draft A","Draft B"],
    [["Duties","“a decision will be taken”","“it is for the board to”"],
     ["Thresholds","none","2,000,000 and 500,000 euros"],
     ["Reporting obligation","none","next scheduled meeting"],
     ["Blocked inferences","none","three, in a box"]],
    note="One of these is in force when a two-million-euro commitment goes wrong."), 540)
S["t01-f12"]=lambda: f_realia(doc("Two terms of reference drafts", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> A decision will be taken on commitments above two million euros. Approval will be "
    "obtained prior to signature. The matter of board composition shall be considered, with a target "
    "of 30% in line with international practice.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> <b>It is for the board to</b> approve any commitment "
    "above 2,000,000 euros. <b>It falls to the managing director to</b> approve commitments below that "
    "figure, reporting each at the next meeting. The board adopts a target of 30% women among its own "
    "members by 2029; <b>it should not be inferred that this derives from the 52-jurisdiction average "
    "of 29%</b> &mdash; the argument is that our last four long lists were 38% women. <b>It would be "
    "wrong to build a nine-year target on four searches</b>, which is why the figure is 30.</p>",
    "Eleven sentences in the first draft impose a duty on nobody. The test: if this does not happen, "
    "who has failed?"), 560)
S["t01-f13"]=lambda: f_realia(tbl("","Terms of reference planner",
    ["Box","Yours"],
    [["Reserved matters",""],["Delegated authority, threshold, reporting",""],
     ["Comparative data and your own argument",""],["What the document does not decide",""],
     ["What should not be inferred",""],["Review date and owner",""]],
    note="A duty with no bearer is unenforceable."), 520)
S["t01-f14"]=lambda: f_scene(1140,480, people=[("yara",280,164,{}),("lars",450,180,{"seated":True}),
    ("grace",540,178,{"seated":True}),("adeel",630,180,{"seated":True}),
    ("marek",720,178,{"seated":True}),("hanna",810,180,{"seated":True}),
    ("ines",930,172,{}),("nour",1020,174,{})],
    board=(940,20,180,130,"29% / 22%",[("2024","29%"),("2019","22%")]),
    props=[("table",430,262,1.9),("essay",360,206,0.3),("flipchart",80,150,0.9),
           ("jug",860,206,0.24),("folder",1090,232,0.28)])
S["t01-f15"]=lambda: f_chart([("written, names a role",5),("written but passive",8),
    ("custom only",6),("nobody knows",4),("no written delegation",3)], unit="students")
S["t01-f16"]=lambda: f_scene(920,430, people=[("yara",300,170,{"seated":True}),("adeel",690,172,{})],
    board=(680,20,230,150,"TWO CONTRACTS",[("1,940,000","approved"),("410,000","approved")]),
    props=[("desk",400,252,1.2),("computer",470,200,0.42),("essay",330,204,0.3),
           ("note",120,206,0.24)])

# ---------------- Unit 2 · Trust You Did Not Earn ----------------
S["t02-f1"]=lambda: f_icons([("studyapp","a questionnaire on a screen"),("timer","thirty minutes"),
    ("queue","a sample inside a crowd"),("balance","a scale of trust"),
    ("essay","a logo on a cover"),("speechbubble","two sources"),
    ("magnifier","base: employees only"),("calendar","a fieldwork window"),
    ("stairwell","a ladder of institutions"),("meeting","one slide, two readings")], cols=5)
S["t02-f2"]=lambda: f_scene(920,430, people=[("nour",310,176,{"seated":True}),("anders",620,170,{})],
    props=[("desk",400,252,1.3),("essay",340,206,0.3),("computer",470,202,0.38),
           ("note",540,208,0.2)],
    board=(700,24,200,120,"78%",[("base","employees"),("countries","28")]))
S["t02-f3"]=lambda: f_icons([("queue","a sample"),("clipboard","a self-report"),
    ("essay","a commissioned study"),("stairwell","institutions ranked"),
    ("worried","not about us"),("calendar","a fieldwork window")], cols=3)
S["t02-f4"]=lambda: f_realia(tbl("","Team research &middot; whose figure is it?",
    ["The figure","Who produced it","Who was asked","Our own equivalent"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>Do we publish ours?</b>"), 560)
S["t02-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; note on the trust slide",
    "N. Khalil &middot; 7 March &middot; the second table is the one I am asking for",
    table_html(["Trust in …","Figure"],
      [["<b>My employer</b>, among employees","<b>78%</b> &mdash; trusted in <b>27 of 28</b> countries"],
       ["Business","<b>64%</b>"],["NGOs","<b>58%</b>"],["Media","<b>54%</b>"],["Government","<b>53%</b>"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:10px 12px;font-size:13.5px'>"
      "<b>What this is and is not.</b> An annual barometer <b>commissioned by a communications firm</b>, "
      "from <b>30-minute online interviews, 23 October to 18 November 2025</b>, across <b>28 "
      "countries</b>. <b>Self-reported.</b> The 78% was asked <b>only of employees</b>, so it is not a "
      "general-population figure, and <b>it says nothing about Lindmark</b>.</p>"
    + table_html(["","Figure"],
      [["“I trust my employer”, 28-country barometer","<b>78%</b>"],
       ["“I trust my employer”, <b>Lindmark staff survey</b>, 71% response","<b>61%</b>"],
       ["<b>The gap</b>","<b>17 points, and nobody has yet asked why</b>"]])
    + "<p style='font-size:13.5px'><b>Two further findings.</b> <b>Seven in ten</b> are unwilling or "
      "hesitant to trust somebody with different values or information sources. <b>Two thirds of "
      "employees</b> worry tariffs will hurt their employer.</p>",
    "Source: 2026 Edelman Trust Barometer, global report, 28 countries, fieldwork 23 October to 18 "
    "November 2025. The 61% is Lindmark's own staff survey and is not comparable in method."), 570)
S["t02-f6"]=lambda: f_realia(tbl("Word study","Attribution, from strongest to weakest claim",
    ["Form","Example","What the writer takes on"],
    [["X reports that","The barometer <b>reports that</b> trust stands at 78%.","accuracy of quotation only"],
     ["according to X","<b>According to</b> the barometer, business stands at 64%.","the same, more distant"],
     ["on X's own account","<b>On the publisher's own account</b>, the base is employees.","their claim about themselves"],
     ["as measured by X","trust <b>as measured by</b> a 28-country online survey","names the instrument"],
     ["X is said to","The index <b>is said to</b> be comparable.","distance, often doubt"],
     ["reportedly","Trust has <b>reportedly</b> risen.","clear doubt — unsuitable for a board paper"]],
    note="You may not borrow the authority of a figure while declining responsibility for it."), 560)
S["t02-f7"]=lambda: f_chart([("My employer (barometer)",78),("Business",64),("NGOs",58),
    ("Media",54),("Government",53),("Our own staff survey",61)],
    unit="per cent — different base, different method; the 17-point gap is to the first bar")
S["t02-f8"]=lambda: f_icons([("data","a large percentage"),("magnifier","small type beneath"),
    ("queue","a sample in a crowd"),("balance","two bars, two shades"),
    ("review","a gap bracketed"),("note","a question on a noticeboard")], cols=3)
S["t02-f9"]=lambda: f_realia(doc("Two versions of one slide", None,
    "<div style='border:1px solid #d8d4cb;padding:10px;margin-bottom:12px'>"
    "<div style='font:700 40px Bricolage Grotesque,sans-serif;text-align:center'>78%</div>"
    "<div style='text-align:center;font-size:13px;color:#6b6861'>trust their employer</div></div>"
    "<div style='border:2px solid #6d3b6e;padding:10px'>"
    "<div style='font:700 34px Bricolage Grotesque,sans-serif'>78% <span style='font-size:13px;"
    "font-weight:400;color:#6b6861'>of employees, 28 countries, commissioned online survey, "
    "fieldwork Oct–Nov 2025</span></div>"
    "<div style='font:700 28px Bricolage Grotesque,sans-serif;color:#6b6861;margin-top:6px'>61% "
    "<span style='font-size:13px;font-weight:400'>Lindmark staff survey, 71% response, different "
    "method</span></div>"
    "<div style='font-size:14px;margin-top:8px'><b>The gap is 17 points. We have not yet asked why.</b>"
    "</div></div>",
    "2026 Edelman Trust Barometer, and Lindmark's own November staff survey"), 560)
S["t02-f10"]=lambda: f_scene(960,440, people=[("anders",290,168,{"seated":True}),
    ("nour",450,166,{}),("yara",620,180,{"seated":True}),("marek",710,178,{"seated":True})],
    board=(790,20,170,130,"78 / 61",[("barometer","78%"),("ours","61%")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("phone",520,206,0.18),
           ("essay",362,200,0.3)])
S["t02-f11"]=lambda: f_realia(tbl("Two slides","Sourced, or not",
    ["","Slide A","Slide B"],
    [["Figure","78%","78%"],
     ["Producer and base","&mdash;","commissioned survey, employees only"],
     ["Our own figure","&mdash;","61%, different method"],
     ["The gap","&mdash;","17 points, stated"]],
    note="Four hundred people filled in the survey that produced the 61."), 540)
S["t02-f12"]=lambda: f_realia(doc("Two internal notes", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> Seventy-eight per cent of employees trust their employer. Good news for all of us.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> The 2026 barometer <b>reports</b> trust in “my "
    "employer” at 78% among employees, ahead of business (64%), NGOs (58%), media (54%) and "
    "government (53%), in 27 of 28 countries. It is <b>commissioned</b>, <b>self-reported</b>, and the "
    "employer question has a base of <b>employees only</b>. <b>It says nothing about Lindmark.</b> Our "
    "own November survey puts trust in Lindmark as an employer at 61% on a 71% response rate, measured "
    "by a different instrument. <b>The gap is 17 points and we have not yet asked why.</b></p>",
    "The risk is not that staff disbelieve the 78%. It is that they conclude management believes "
    "something untrue about them."), 560)
S["t02-f13"]=lambda: f_realia(tbl("","Attribution planner",
    ["Box","Yours"],
    [["The figure, quoted accurately",""],["Producer, base, method, dates",""],
     ["What it says nothing about",""],["Our own equivalent and its method",""],
     ["The gap, and whether anybody has asked",""],["The risk being managed",""]],
    note="Three questions: who produced it, who was asked, what exactly were they asked."), 520)
S["t02-f14"]=lambda: f_scene(1140,480, people=[("nour",280,164,{}),("anders",450,180,{"seated":True}),
    ("yara",540,178,{"seated":True}),("marek",630,180,{"seated":True}),
    ("sofia",720,178,{"seated":True}),("paula",860,172,{}),("okonjo",960,174,{})],
    board=(930,20,180,130,"78 / 61",[("gap","17 points"),("asked","not yet")]),
    props=[("table",430,262,1.9),("essay",360,206,0.3),("flipchart",80,150,0.9),
           ("phone",1070,196,0.2),("folder",1050,232,0.28)])
S["t02-f15"]=lambda: f_chart([("named source and base",4),("named source only",7),
    ("neither",9),("no figures",3),("never read them",3)], unit="students")
S["t02-f16"]=lambda: f_scene(920,430, people=[("nour",300,170,{"seated":True})],
    board=(680,20,230,150,"THIS YEAR",[("trust","66%"),("response","54%")]),
    props=[("desk",400,252,1.2),("computer",470,200,0.42),("essay",330,204,0.3),
           ("note",120,208,0.22)])

# ---------------- Unit 3 · Where We Pay Tax ----------------
S["t03-f1"]=lambda: f_icons([("form","a tax return"),("data","a statutory rate"),
    ("calculator","a different rate"),("worldmap","sixty jurisdictions"),
    ("archive","anonymized group reports"),("signpost","forward from the code"),
    ("statement","backward from a payment"),("balance","law against cash"),
    ("tally","a minimum-rate threshold"),("meeting","two similar percentages")], cols=5)
S["t03-f2"]=lambda: f_scene(920,430, people=[("marek",310,176,{"seated":True}),("adeel",600,170,{})],
    board=(700,24,200,130,"RATES",[("2000","28.0%"),("2025","21.2%")]),
    props=[("desk",400,252,1.3),("essay",340,206,0.3),("computer",470,202,0.36),
           ("note",540,208,0.2)])
S["t03-f3"]=lambda: f_icons([("book","a rate written in law"),("statement","tax actually paid"),
    ("spreadsheet","tax in the accounts"),("signpost","forward-looking"),
    ("mirror","backward-looking"),("balance","two rates, one name")], cols=3)
S["t03-f4"]=lambda: f_realia(tbl("","Team research &middot; define it before you use it",
    ["The term","The written definition","Forward or backward","What it excludes"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What it therefore cannot tell us:</b>"), 560)
S["t03-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; board paper: our tax position",
    "M. Dolny, with A. Rahim &middot; 4 April &middot; page one is definitions, and that is deliberate",
    "<p style='font-size:13.5px'><b>1 &middot; Definitions, for the purposes of this paper.</b><br>"
    "<b>(a) “Our ETR” means</b> tax accrued in the group accounts over accounting profit "
    "before tax. <b>Backward-looking</b>; <b>excludes</b> cash timing differences.<br>"
    "<b>(b) “The OECD ETR series” means</b> the effective tax rate indicators for <b>105 "
    "jurisdictions, 2017&ndash;2025</b>. <b>Forward-looking</b>, computed from the tax code; <b>does "
    "not mean</b> tax paid or accrued by any company.<br>"
    "<b>(c) “Statutory rate” means</b> the headline rate in law, before base adjustment.<br>"
    "<b>(d) “CbCR data” means</b> anonymized, aggregated country-by-country data on almost "
    "<b>9,400 groups</b> in <b>over 60 jurisdictions</b>.</p>"
    + table_html(["Figure","Value","Type"],
      [["Our ETR, group accounts","<b>18.4%</b>","<b>backward-looking</b>"],
       ["OECD statutory average, 2025","<b>21.2%</b>","law, not outcome"],
       ["OECD statutory average, 2000","<b>28.0%</b>","law, not outcome"],
       ["OECD ETR series coverage","105 jurisdictions","<b>forward-looking</b>"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:10px 12px;font-size:13.5px;"
      "font-style:italic'>The effective tax rate indicators are forward-looking policy measures. They "
      "are not realized tax payments and should not be read as actual tax paid.</p>"
    + "<p style='font-size:13.5px'><b>It does not follow</b> from any gap between them that we pay "
      "more or less tax than anybody. <b>They may not be subtracted, ranked or placed in one "
      "column.</b></p>",
    "Source: OECD, Corporate Tax Statistics 2026 (July 2026). The 18.4% is Lindmark's own, from the "
    "audited group accounts."), 570)
S["t03-f6"]=lambda: f_realia(tbl("Word study","Formulas for stipulative definition",
    ["Formula","Example","Register"],
    [["for the purposes of this paper, X means","<b>For the purposes of this paper, “our ETR” means</b> tax accrued over profit.","board paper"],
     ["X is taken to mean","“Jurisdiction” <b>is taken to mean</b> a taxing jurisdiction.","neutral formal"],
     ["X shall be construed as","“Group” <b>shall be construed as</b> including branches.","contractual"],
     ["X means A and does not include B","“Tax paid” <b>means</b> cash remitted <b>and does not include</b> accruals.","precise, preferred"],
     ["X excludes","The figure <b>excludes</b> cash timing differences.","short, useful"],
     ["save that","all commitments, <b>save that</b> intra-group transfers are excluded","formal exception"]],
    note="The negative half does more work than the positive half, and most writers leave it out."), 560)
S["t03-f7"]=lambda: f_line([("2000",28.0),("2010",24.5),("2020",21.9),("2025",21.2)],
    w=560, h=250, unit="OECD average statutory rate, per cent — our 18.4% ETR is a different measure", ymin=18)
S["t03-f8"]=lambda: f_icons([("clipboard","a definitions block"),("balance","forward and backward"),
    ("quotemark","a quoted limitation"),("noentry","a subtraction crossed out"),
    ("note","a blocked inference"),("archive","an earlier draft, superseded")], cols=3)
S["t03-f9"]=lambda: f_realia(doc("Board paper page one", None,
    "<p style='font-size:13px'><b>(a)</b> “Our ETR” <b>means</b> tax accrued over accounting "
    "profit; <b>does not include</b> timing differences. <i>Backward-looking.</i><br>"
    "<b>(b)</b> “OECD ETR series” <b>means</b> indicators computed from the tax code; "
    "<b>does not mean</b> tax paid. <i>Forward-looking.</i><br>"
    "<b>(c)</b> “Statutory rate” <b>means</b> the headline rate in law.<br>"
    "<b>(d)</b> “CbCR data” <b>means</b> anonymized aggregated data on almost 9,400 groups.</p>"
    + table_html(["Figure","Value","Type"],
      [["Our ETR","18.4%","backward-looking"],["Statutory average 2025","21.2%","law"],
       ["Statutory average 2000","28.0%","law"],["ETR series","105 jurisdictions","forward-looking"]])
    + "<p style='background:#efe3ef;border-left:4px solid #6d3b6e;padding:9px 12px;font-size:13px;"
      "font-style:italic'>… forward-looking policy measures … not realized tax payments.</p>"
    "<p style='font-size:14px'><b>It does not follow that we pay more or less tax than comparable "
    "groups.</b></p>",
    "OECD, Corporate Tax Statistics 2026"), 560)
S["t03-f10"]=lambda: f_scene(960,440, people=[("adeel",290,166,{}),("marek",450,180,{"seated":True}),
    ("hanna",610,178,{"seated":True}),("yara",700,180,{"seated":True})],
    board=(780,20,180,140,"28 → 21.2",[("statutory","falling"),("ours","18.4%")]),
    props=[("table",400,252,1.5),("essay",340,202,0.3),("essay",362,200,0.3),
           ("note",520,206,0.2)])
S["t03-f11"]=lambda: f_realia(tbl("Two first pages","Table first, or definitions first",
    ["","Page A","Page B"],
    [["Opens with","two percentages in one table","four numbered definitions"],
     ["Figures typed","no","forward / backward / law"],
     ["Publisher's limitation","&mdash;","quoted"],
     ["Conclusion","we are at the conservative end","it does not follow that …"]],
    note="One of these gets quoted by somebody outside the company."), 540)
S["t03-f12"]=lambda: f_realia(doc("Two board paper pages", None,
    "<p style='font-size:13.5px;border-bottom:1px solid #d8d4cb;padding-bottom:10px'>"
    "<b>First.</b> Our effective tax rate is 18.4%. The international effective tax rate is lower. "
    "Lindmark therefore sits at the conservative end of international practice.</p>"
    "<p style='font-size:13.5px'><b>Second.</b> <b>For the purposes of this paper, “our ETR” "
    "means</b> tax accrued over accounting profit and <b>does not include</b> timing differences; it is "
    "<b>backward-looking</b>. <b>“The OECD ETR series” means</b> indicators computed from the "
    "tax code for 105 jurisdictions and <b>does not mean</b> tax paid by any company; it is "
    "<b>forward-looking</b>. The publisher states that they are <i>not realized tax payments</i>. "
    "<b>It does not follow from any gap between them that we pay more or less tax than comparable "
    "groups.</b> Draft 1 concluded otherwise; that conclusion has been withdrawn.</p>",
    "Attach the superseded draft and say what was wrong with it. Somebody has already read it."), 560)
S["t03-f13"]=lambda: f_realia(tbl("","Definitions planner",
    ["Box","Yours"],
    [["Definitions, each with a negative half",""],["Each figure typed",""],
     ["The publisher's limitation, quoted",""],["What does not follow",""],
     ["Any carve-out that must be stated",""],["What an earlier draft claimed",""]],
    note="Shared names are the most productive source of error in financial writing."), 520)
S["t03-f14"]=lambda: f_scene(1140,480, people=[("marek",280,164,{}),("adeel",450,180,{"seated":True}),
    ("hanna",540,178,{"seated":True}),("yara",630,180,{"seated":True}),
    ("grace",720,178,{"seated":True}),("ines",860,172,{}),("lars",960,174,{})],
    board=(930,20,180,130,"18.4 / 21.2",[("ours","accounts"),("theirs","the code")]),
    props=[("table",430,262,1.9),("essay",360,206,0.3),("flipchart",80,150,0.9),
           ("archive",1060,232,0.3),("calculator",1050,200,0.2)])
S["t03-f15"]=lambda: f_chart([("defined with exclusions",4),("defined without exclusions",6),
    ("understood but unwritten",9),("defined differently by two teams",5),("don't know",2)], unit="students")
S["t03-f16"]=lambda: f_scene(920,430, people=[("marek",300,170,{"seated":True}),("adeel",690,172,{})],
    board=(680,20,230,150,"QUOTED",[("press","conservative end"),("source","none")]),
    props=[("desk",400,252,1.2),("computer",470,200,0.42),("essay",330,204,0.3),
           ("archive",120,212,0.3)])
