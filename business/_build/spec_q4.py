# -*- coding: utf-8 -*-
"""Clearline Book 3 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · The Audit ----------------
S["q10-f1"]=lambda: f_icons([("clipboard","a checklist"),("folder","the records"),
    ("magnifier","examining"),("meeting","the auditor and you"),("certificate","a certificate"),
    ("form","a non-conformance"),("chain","traced back"),("calendar","the audit date"),
    ("signature","a signed finding"),("archive","closed out")], cols=5)
S["q10-f2"]=lambda: f_scene(900,420, people=[("ines",320,172,{"seated":True}),
    ("ravi",450,176,{"seated":True})],
    props=[("table",390,250,1.4),("computer",350,196,0.4),("folder",470,196,0.34),
    ("essay",540,200,0.3)],
    board=(740,24,160,110,"ISO 9001",[("certificate","valid")]))
S["q10-f3"]=lambda: f_icons([("signature","signed and dated"),("computer","no date on it"),
    ("speechbubble","“we always do it”"),("note","a figure from a slide"),
    ("email","somebody remembers"),("essay","a cited page")], cols=3)
S["q10-f4"]=lambda: f_realia(tbl("","Trace one number",
    ["The figure","Where we got it","Where they got it","The primary source"],
    [["","","",""],["","","",""],["","","",""]],
    note="<b>Where the chain breaks:</b>"), 540)
S["q10-f5"]=lambda: f_realia(doc("Brightwell Pharma &middot; internal audit IA-2026-03",
    "scope: QMS, document control, data integrity &middot; auditor I. Costa &middot; 14 April",
    "<p><b>Finding 1 &mdash; observation</b> (not a non-conformance).</p>"
    "<p>A figure presented as fact in the opening slide of the management review could not be "
    "traced to a primary source, and a conflicting figure for the preceding year exists in the "
    "public domain.</p>"
    "<p><b>The figure.</b> “1,474,118 valid ISO 9001:2015 certificates worldwide, 2024.”</p>"
    "<p><b>Evidence examined.</b> (1) The slide; source line “ISO Survey 2024”. "
    "(2) A third-party infographic citing IAF CertSearch: 1,474,118 for 2024 and "
    "<b>1,250,243</b> for 2023. (3) A second third-party page, also citing the ISO Survey: "
    "<b>837,978</b> for 2023.</p>"
    "<p style='background:#fff3cf'><b>What could not be examined.</b> The ISO Survey results. "
    "ISO's own page states the survey is produced and hosted on IAF CertSearch and that results "
    "are obtained by logging in; no public table was available to the auditor.</p>"
    "<p><b>Requirement.</b> Figures presented in management review shall be traceable to a source "
    "held on file.</p>",
    "<b>Corrective action:</b> by 30 April, obtain the primary data or re-present the figure with "
    "its limitation stated. &nbsp; Agreed ______________"))
S["q10-f6"]=lambda: f_realia(tbl("Word study","Past habit",
    ["Form","Covers","Example"],
    [["<b>used to + verb</b>","states <b>and</b> repeated actions",
      "We <b>used to</b> keep the log on paper."],
     ["<b>would + verb</b>","repeated actions <b>only</b>",
      "Every Friday he <b>would</b> check the gauge."],
     ["<b>didn't use to</b>","negative &mdash; no <i>d</i>",
      "We <b>didn't use to</b> record the reason."],
     ["<b>Did you use to &hellip;?</b>","question &mdash; no <i>d</i>",
      "<b>Did you use to</b> sign each page?"],
     ["<b>not <i>would</i> for states</b>","&#10007;",
      "He <s>would</s> <b>used to</b> be the manager."]],
    note="Habit in <i>used to</i>, a single event in the past simple. Mixing them changes the "
    "claim."), 540)
S["q10-f7"]=lambda: f_chart([("2024",1474118),("2023 — source A",1250243),
    ("2023 — source B",837978)],
    unit="valid ISO 9001 certificates &mdash; which of the two 2023 figures is the baseline? "
    "Neither could be verified", w=560)
S["q10-f8"]=lambda: f_icons([("signature","a signed record"),("note","a figure, no source"),
    ("review","two conflicting pages"),("padlock","a login screen"),
    ("refnumber","a clause number"),("form","a dated action")], cols=3)
S["q10-f9"]=lambda: f_realia(doc("Brightwell Pharma &middot; audit plan IA-2026-03",
    "scope: QMS clauses 7.5, 8.5, 9.3 &middot; 14&ndash;15 April &middot; auditor I. Costa",
    table_html(["Time","Session","Who","Room"],
      [["09:00","Opening meeting","R. Menon, plant manager","Room 1"],
       ["09:30","Document control","R. Menon","Room 1"],
       ["11:00","Line walk and operator interviews","shift team","Production"],
       ["13:30","Batch record sampling","R. Menon","Room 1"],
       ["15:00","Management review inputs","R. Menon","Room 1"],
       ["16:30","Closing meeting","all","Room 1"]])
    + "<p><b>Sampling.</b> 12 batch records of 214, selected by random number generated in front "
    "of the auditee. Four training records, four calibration certificates, chosen the same way.</p>",
    "Findings are categorised as non-conformance or observation, stated at the closing meeting, "
    "and issued in writing within five working days with an agreed action date."))
S["q10-f10"]=lambda: f_scene(900,420, people=[("ines",320,172,{"seated":True}),
    ("ravi",440,176,{"seated":True})],
    props=[("table",390,250,1.4),("computer",350,196,0.4),("folder",470,196,0.32),
    ("padlock",540,200,0.26)],
    board=(730,24,170,120,"FINDINGS BY YEAR",[("2024","3"),("2025","2")]))
S["q10-f11"]=lambda: f_realia(tbl("Two slides","The same figure",
    ["As presented","As re-presented"],
    [["<b>1,474,118</b><br>valid ISO 9001 certificates worldwide, 2024<br>"
      "<span style='font-size:11px'>Source: ISO Survey 2024</span><br><br>"
      "<i>Untraceable, and it looks like a fact.</i>",
      "<b>1,474,118</b><br>valid ISO 9001 certificates worldwide, 2024<br>"
      "<span style='font-size:11px'>Reported from the ISO Survey via IAF CertSearch. The primary "
      "data is not publicly accessible. Two secondary sources give 2023 as 1,250,243 and 837,978, "
      "so we cannot say whether this is growth or a change in counting.</span>"]]), 540)
S["q10-f12"]=lambda: f_realia(doc("Two findings", None,
    "<p><b>A.</b> Document control was found to be inadequate.</p>"
    "<p style='font-size:12px;color:#6b6861'>One adjective, no evidence, nothing anybody can fix "
    "or dispute.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>Statement of fact.</b> The opening slide of the "
    "management review of 11 March presented a figure as fact, sourced on the slide as "
    "“ISO Survey 2024”. <b>Evidence.</b> (1) the slide; (2) an infographic giving 2023 "
    "as 1,250,243; (3) a second page giving 2023 as 837,978. <b>What could not be examined.</b> "
    "The survey itself, which is behind a login. <b>What this finding does not assert.</b> That "
    "the figure is wrong; that the presenter was careless; that any batch or regulatory record is "
    "affected &mdash; 12 of 214 batch records were sampled and were complete and traceable.</p>"))
S["q10-f13"]=lambda: f_realia(form("Finding planner",
    [("Statement of fact &mdash; no adjectives",""),("Evidence &mdash; numbered and dated",""),
     ("What could not be examined",""),("The problem, in one sentence",""),
     ("<b>What this does not assert</b>",""),
     ("Corrective action &mdash; owner and date","")]), 520)
S["q10-f14"]=lambda: f_scene(1000,450, people=[("ines",150,172,{"seated":True}),
    ("oksana",240,172,{"seated":True}),("ravi",340,176,{}),("tomas",430,176,{}),
    ("anders",520,182,{}),("nour",610,168,{}),("marek",700,180,{}),
    ("yara",790,172,{}),("okonjo",870,182,{}),("hanna",950,172,{})],
    props=[("table",300,250,1.4),("folder",370,196,0.32),("computer",460,140,0.42),
    ("archive",80,0,0.6),("padlock",640,140,0.3),("certificate",860,110,0.4),
    ("camera",740,196,0.26)])
S["q10-f15"]=lambda: f_chart([("some",8),("I have never tried",6),("most",4),
    ("none",3),("all of them",1)])
S["q10-f16"]=lambda: f_scene(900,420, people=[("ravi",250,176,{}),
    ("okonjo",470,182,{"seated":True}),("paula",560,170,{"seated":True}),
    ("marek",650,180,{"seated":True})],
    board=(740,24,170,130,"1,474,118",[("2023 A","1,250,243"),("2023 B","837,978")]),
    props=[("podium",150,0,0.8),("essay",200,120,0.3),("table",500,250,1.3)])

# ---------------- Unit 11 · Travel and the Site Visit ----------------
S["q11-f1"]=lambda: f_icons([("boardingpass","a boarding pass"),("passport","a passport"),
    ("key","a hotel key card"),("car","a taxi"),("badge","a visitor badge"),
    ("shoes","safety shoes"),("meeting","a factory meeting"),("helmet","a plant tour"),
    ("card","a business card"),("essay","an itinerary")], cols=5)
S["q11-f2"]=lambda: f_scene(900,420, people=[("chiamaka",330,172,{}),("tomas",480,176,{})],
    props=[("desk",200,0,1.3),("notebook",290,205,0.3),("helmet",430,200,0.28),
    ("hivis",540,150,0.4),("door",680,80,0.95)],
    board=(750,24,150,110,"SAFETY",[("vest","beyond the line")]))
S["q11-f3"]=lambda: f_icons([("camera","no photographs"),("shoes","shoes off"),
    ("card","two hands"),("clock","ten minutes early"),
    ("handsup","ask the operator"),("canteen","the long lunch")], cols=3)
S["q11-f4"]=lambda: f_realia(tbl("","The unwritten rule",
    ["The unwritten rule","How a visitor would find out","What happens if they get it wrong"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>The one I would put in writing:</b>"), 540)
S["q11-f5"]=lambda: f_realia(doc("Arvo Components &middot; visit briefing",
    "supplier audit visit &middot; 14&ndash;15 May &middot; prepared after the February visit",
    table_html(["Time","What"],
      [["09:50","met at reception by T. Baptista &mdash; <b>be early, not on time</b>"],
       ["10:00","opening meeting, 30 min, with the plant manager"],
       ["10:30","line walk &mdash; <b>safety shoes required</b>, bring your own"],
       ["12:30","<b>lunch with the production team &mdash; do not decline this</b>"],
       ["14:00","document review"],["16:00","closing meeting"]])
    + "<p><b>Before you go.</b> Invitation letter for the visa &middot; safety shoes &middot; "
    "business cards &middot; <b>no camera</b>.</p>"
    "<p><b>On site.</b> Do not photograph anything. Ask the operators, not only the managers. "
    "Offer and receive cards with both hands. Ask your host at the end what you should have done "
    "differently.</p>"
    "<p style='background:#fff3cf'><b>Flying, in two sentences that both have to be said.</b> In "
    "2025 the accident rate <b>improved</b>: 1.32 per million flights, down from 1.42 &mdash; "
    "though still above the five-year average of 1.27. The number killed <b>rose</b>: 394 on-board "
    "fatalities against 244. 51 accidents in 38.7 million flights.</p>",
    "IATA Annual Safety Report 2025, published 9 March 2026. Both sentences are from the same "
    "report."))
S["q11-f6"]=lambda: f_realia(tbl("Word study","Articles",
    ["Use","Right","Wrong"],
    [["<b>a / an</b> &mdash; one of many, and jobs","She is <b>an</b> engineer.","She is engineer."],
     ["<b>the</b> &mdash; already known, or the only one","<b>The</b> plant manager met us.",
      "Plant manager met us."],
     ["<b>no article</b> &mdash; plurals in general","<b>Operators</b> know more than managers think.",
      "The operators know more&hellip; <i>(in general)</i>"],
     ["<b>no article</b> &mdash; uncountable in general","<b>Safety</b> comes first.",
      "The safety comes first."],
     ["<b>no article</b> &mdash; most place names","We flew to <b>Porto</b>.","&hellip; to the Porto."]],
    note="First mention <i>a</i>, after that <i>the</i>. That one rule fixes most of the rest."),
    540)
S["q11-f7"]=lambda: f_chart([("accident rate 2024",1.42),("accident rate 2025",1.32),
    ("five-year average",1.27)],
    unit="accidents per million flights &mdash; and in the same year on-board fatalities rose "
    "from 244 to 394. Both from the same report", w=540)
S["q11-f8"]=lambda: f_icons([("camera","no photographs"),("shoes","safety shoes"),
    ("canteen","six places at lunch"),("card","two hands"),
    ("handsup","asking the operator"),("clock","ten to ten")], cols=3)
S["q11-f9"]=lambda: f_realia(tbl("Arvo Components &middot; expenses claim",
    "C. Obi &middot; Porto, 14&ndash;15 May &middot; supplier audit",
    ["Date","Description","Amount"],
    [["13 May","Flight, Ostberg&ndash;Porto, return","284.40"],
     ["14 May","Airport transfer","38.00"],
     ["14 May","Hotel, 1 night","117.50"],
     ["14 May","<b>Dinner with supplier (3 people)</b>","<b>96.20 &mdash; receipt missing</b>"],
     ["15 May","Taxi to plant","14.00"],
     ["15 May","Per diem, 2 days at 28.00","56.00"],
     ["<b>Total</b>","","<b>606.10</b>"]],
    note="<b>Approver's query:</b> “Dinner &mdash; no receipt, and policy says hospitality "
    "for suppliers needs prior approval. Explain, and I'll pay it.”"), 540)
S["q11-f10"]=lambda: f_scene(900,420, people=[("chiamaka",330,172,{"seated":True}),
    ("tomas",440,176,{"seated":True})],
    props=[("table",390,250,1.4),("notebook",350,196,0.3),("cafe",450,200,0.3),
    ("badge",520,200,0.22)],
    window_=(700,56,140,96))
S["q11-f11"]=lambda: f_realia(tbl("Two briefings","The same visit",
    ["Times and names","Times, rules and a question"],
    [["09:50 reception<br>10:00 opening meeting<br>10:30 line walk<br>12:30 lunch<br>"
      "14:00 documents<br>16:00 close<br><br><i>Everything a calendar can tell you.</i>",
      "The same six times, plus:<br><b>Bring</b> safety shoes, cards, invitation letter<br>"
      "<b>Do not</b> photograph anything<br><b>Do not decline</b> the lunch &mdash; it is the "
      "visit<br><b>Ask</b> the operators, not only the managers<br>"
      "<b>At the end, ask:</b> what should I have done differently today?"]]), 540)
S["q11-f12"]=lambda: f_realia(doc("Two visit reports", None,
    "<p><b>A.</b> Met the plant manager and the quality manager. Toured the production area. "
    "Reviewed documentation. Discussed lead times and capacity. A productive visit.</p>"
    "<p style='font-size:12px;color:#6b6861'>Nobody learns anything from this, including the "
    "writer in six months.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>Verified:</b> calibration current on all four lines; "
    "traceability from a random carton to the raw material certificate in three documents. "
    "<b>Learned, not in any document:</b> line 2 is the line to trust; line 4 is nine months old "
    "and the operators dislike it; <b>scheduling is done in Lisbon, by capacity, on Fridays, and "
    "nobody there has visited the plant</b>. <b>What I got wrong:</b> photographed a gauge in a "
    "controlled area; nearly declined the lunch; handed a card over one-handed.</p>"))
S["q11-f13"]=lambda: f_realia(form("Visit report planner",
    [("Purpose",""),("What I verified",""),
     ("<b>What I learned that is not written down</b>",""),("<b>What I got wrong</b>",""),
     ("Actions &mdash; owners and dates",""),("What this report cannot tell you","")]), 520)
S["q11-f14"]=lambda: f_scene(1000,450, people=[("chiamaka",150,172,{}),("marek",240,180,{}),
    ("tomas",330,176,{}),("lucia",420,170,{}),("caruso",510,176,{}),
    ("linh",600,170,{}),("bah",690,176,{}),("grace",780,170,{}),
    ("samira",860,172,{}),("yusuf",950,176,{})],
    props=[("hivis",100,140,0.4),("racking",560,40,0.9),("canteen",700,205,0.5),
    ("clipboard",840,150,0.38),("camera",470,196,0.26),("desk",200,0,1.1)],
    board=(260,24,150,110,"NO CAMERAS",[("controlled","area")]),
    panelbg="#2b3340", floorbg="#39404c")
S["q11-f15"]=lambda: f_chart([("once or twice a year",7),("never",6),("every few months",5),
    ("monthly",3),("weekly",1)])
S["q11-f16"]=lambda: f_scene(860,410, people=[],
    props=[("desk",240,0,1.3),("essay",300,205,0.36),("email",390,210,0.26),
    ("computer",470,145,0.5),("shoes",250,208,0.24)],
    window_=(630,56,120,96))

# ---------------- Unit 12 · The Appraisal ----------------
S["q12-f1"]=lambda: f_icons([("form","a review form"),("inventory","three ticks, one cross"),
    ("meeting","the conversation"),("essay","a development plan"),
    ("certificate","training"),("spreadsheet","a pay band table"),
    ("speechbubble","feedback"),("envelope","a promotion letter"),
    ("calendar","a review date"),("pen","writing a goal")], cols=5)
S["q12-f2"]=lambda: f_scene(900,420, people=[("ravi",330,176,{"seated":True}),
    ("okonjo",450,182,{"seated":True})],
    props=[("table",390,250,1.4),("essay",350,196,0.34),("note",460,200,0.24),
    ("cafe",520,200,0.3)],
    clockat=(740,60,22,10,20))
S["q12-f3"]=lambda: f_icons([("inventory","eleven items"),("tally","one with a figure"),
    ("data","it held for a year"),("flashback","March"),
    ("handsup","listening"),("essay","two lines of plan")], cols=3)
S["q12-f4"]=lambda: f_realia(tbl("","The year in one figure",
    ["The figure","What the chart would show"],
    [["",""],["",""],["",""]],
    note="<b>What my manager would ask about instead:</b>"), 520)
S["q12-f5"]=lambda: f_realia(doc("Brightwell Pharma &middot; annual review summary",
    "R. Menon, quality manager &middot; period to 31 March &middot; prepared by the postholder",
    table_html(["Objective","Result"],
      [["Reduce deviation rate below 1.5%",
        "<b>0.8%</b> &mdash; change implemented February, held 13 months"],
       ["Close all open audit findings","9 of 10 closed; 1 open, due 30 April"],
       ["Train two calibration backups","2 trained, <b>neither has worked alone</b>"],
       ["Host the external audit","Completed; one observation, no non-conformances"]])
    + "<p style='background:#fff3cf'><b>What went wrong, and what I did.</b> On 11 March a batch "
    "was released against a calibration certificate that had expired four days earlier. I found it "
    "during a routine check, reported it within two hours, and recalled the batch before it left "
    "the customer's goods-in. No product reached a patient. <b>It is now a hard stop in the "
    "release step</b>, implemented 19 March.</p>"
    "<p><b>Development plan.</b> 1. Shadow H. Lindqvist on the next regulatory submission. "
    "2. Attend the May course.</p>",
    "Employers expect 39% of core skills to change by 2030 &mdash; down from 44% in 2023 &mdash; "
    "and 63% name skill gaps as the biggest barrier. WEF Future of Jobs Report 2025."))
S["q12-f6"]=lambda: f_realia(tbl("Word study","Result or occasion?",
    ["Tense","Use","Example"],
    [["<b>present perfect</b>","a result that still stands",
      "I'<b>ve halved</b> the deviation rate."],
     ["<b>past simple</b>","a finished event, with a time","The change <b>went</b> in in February."],
     ["<b>present perfect + since</b>","continuing","It <b>has held since</b> February."],
     ["<b>past simple + finished time</b>","one occasion","I <b>reported</b> it on 11 March."],
     ["<b>present perfect</b>","experience, no time given","I'<b>ve hosted</b> two external audits."]],
    note="A finished time expression forces the past simple. <i>I've reported it on 11 March</i> "
    "is wrong."), 540)
S["q12-f7"]=lambda: f_line([("Jan",1.6),("Feb",0.9),("Mar",0.8),("Apr",0.8),("May",0.7),
    ("Jun",0.9),("Jul",0.8),("Aug",0.8),("Sep",0.7),("Oct",0.8),("Nov",0.8),("Dec",0.8)],
    w=560, unit="% deviation rate &mdash; target 1.5; one incident in March, reported in two hours",
    mark=("Feb","the change went in"), ymin=0)
S["q12-f8"]=lambda: f_icons([("data","flat and low"),("flashback","one marker in March"),
    ("essay","two lines of plan"),("spreadsheet","two pay bands"),
    ("book","the May course"),("handshake","the end of the meeting")], cols=3)
S["q12-f9"]=lambda: f_realia(tbl("Development plan","R. Menon &middot; year to 31 March",
    ["The gap","How it will be closed","Who will help","By when"],
    [["No experience of a regulatory submission","Shadow one end to end","H. Lindqvist","Q3"],
     ["No trained backup who has worked alone","Each backup does 4 releases alone","A. Holm","Nov"],
     ["<i>Presenting to the board</i> <b>(repeated from last year)</b>","&mdash;","&mdash;",
      "<b>&mdash;</b>"]],
    note="<b>What I will stop doing:</b> writing long lists of achievements. Last year I listed "
    "eleven things and nine of them were context."), 540)
S["q12-f10"]=lambda: f_scene(900,420, people=[("ravi",330,176,{"seated":True}),
    ("okonjo",460,182,{"seated":True})],
    props=[("table",400,250,1.4),("essay",360,196,0.34),("data",450,196,0.3),
    ("note",520,200,0.22),("cafe",570,200,0.28)],
    clockat=(740,60,22,10,20))
S["q12-f11"]=lambda: f_realia(tbl("Two summaries","The same year",
    ["Eleven bullets","Four objectives"],
    [["&bull; improvements were delivered<br>&bull; procedures were updated<br>"
      "&bull; training was provided<br>&bull; the audit was supported<br>"
      "&bull; <i>(seven more, all passive)</i><br><br>"
      "<i>No dates, no figures, nothing that failed.</i>",
      "<b>Deviation rate 1.6% &rarr; 0.8%</b> &mdash; change went in February, held 13 months<br>"
      "9 of 10 findings closed<br><b>Backups: 2 trained, neither has worked alone &mdash; not "
      "met</b><br>External audit: one observation<br>"
      "<b>March incident:</b> found, reported in 2 hours, hard stop since the 19th<br>"
      "Plan: shadow a submission, May course"]]), 540)
S["q12-f12"]=lambda: f_realia(doc("Two year summaries", None,
    "<p><b>A.</b> Significant improvements were delivered across the quality system this year. "
    "Procedures were updated, training was provided, the external audit was supported and "
    "continuous improvement was maintained throughout the period.</p>"
    "<p style='font-size:12px;color:#6b6861'>Eleven bullets of this. No figures, no dates, nothing "
    "that failed, nobody's name.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>The one thing.</b> I have halved the deviation rate, "
    "from 1.6 to 0.8 percent. The change went in in February and the rate has held below 1.0 in "
    "every month since. <b>Not met:</b> “train two calibration backups” &mdash; two "
    "trained, neither has done a release alone, so in practice I have no backup; I recorded this "
    "as achieved in my draft and that was wrong. <b>What went wrong:</b> three sentences about "
    "11 March. <b>The gap, named by me:</b> I have never run a regulatory submission.</p>"))
S["q12-f13"]=lambda: f_realia(form("One-page year planner",
    [("<b>The one thing</b> &mdash; a figure and a date",""),
     ("Objectives, with honest results",""),
     ("What went wrong &mdash; in exactly three sentences",""),
     ("What I want",""),("<b>The gap, named by me</b>",""),
     ("What I will stop doing","")]), 520)
S["q12-f14"]=lambda: f_scene(1000,450, people=[("ravi",150,176,{"seated":True}),
    ("okonjo",230,182,{"seated":True}),("nour",330,168,{"seated":True}),
    ("ines",410,172,{"seated":True}),("hanna",500,172,{}),("marek",580,180,{}),
    ("yara",670,172,{}),("wei",750,170,{}),("paula",840,170,{}),("chiamaka",940,172,{})],
    props=[("table",280,250,1.3),("essay",350,196,0.3),("printer",620,205,0.48),
    ("spreadsheet",780,135,0.4),("cafe",900,205,0.48),("chair",460,210,0.6),
    ("calendar",110,110,0.5)])
S["q12-f15"]=lambda: f_chart([("a form to complete",8),("a real conversation",5),
    ("nothing happens",4),("a conversation about pay",3),("we do not have them",2)])
S["q12-f16"]=lambda: f_scene(860,410, people=[],
    props=[("desk",240,0,1.3),("essay",300,205,0.36),("computer",420,145,0.5),
    ("data",530,208,0.3),("spreadsheet",150,110,0.42)],
    window_=(640,56,120,96))
