# -*- coding: utf-8 -*-
"""Clearline Book 4 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["r00-f1"]=lambda: f_realia(tbl("What you already have","Six structures, one example each",
    ["Structure","Example"],
    [["Present perfect continuous","We'<b>ve been running</b> at 90% <b>since</b> March."],
     ["The passive","The rate <b>was reopened</b> when fuel moved 11%."],
     ["Reported speech","He said he <b>would</b> confirm by four."],
     ["Second conditional","If the line <b>stopped</b>, we <b>would</b> lose about 90,000."],
     ["Cause and result","Prices rose, <b>so</b> the margin fell."],
     ["Non-defining clause","Ines, <b>who audits now</b>, wrote the finding."]],
    note="None of this is new. What changes at this level is that the decision is partly yours."),
    540)
S["r00-f2"]=lambda: f_realia(doc("Taped inside a folder", None,
    "<p style='font-size:16px;line-height:1.7'><b>1 &middot; Say the scope.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>0.18 euros a kWh &mdash; for businesses using "
    "500 to 2,000 MWh a year.</span></p>"
    "<p style='font-size:16px;line-height:1.7'><b>2 &middot; Say the counter-example.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>Investment rose 6%. In these countries it fell "
    "5%.</span></p>"
    "<p style='font-size:16px;line-height:1.7'><b>3 &middot; Say what you are not claiming.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>I am not saying the figure is wrong. I am saying "
    "we cannot trace it.</span></p>"
    "<p style='font-size:16px;line-height:1.7'><b>4 &middot; Write down the decision date.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>Not the deadline &mdash; the day you find out "
    "whether you were right.</span></p>",
    "Four habits. The first one is the fifth part of every figure in this book."), 520)

# ---------------- Unit 1 · The Business Case ----------------
S["r01-f1"]=lambda: f_icons([("essay","a business case"),("data","costs and benefits"),
    ("calendar","payback"),("stars","above break-even"),("signature","approval"),
    ("spreadsheet","assumptions"),("review","three scenarios"),("bank","the cost of money"),
    ("balance","annual savings"),("meeting","one line, two views")], cols=5)
S["r01-f2"]=lambda: f_scene(920,430, people=[("chiamaka",290,172,{}),
    ("marek",470,180,{"seated":True}),("okonjo",560,182,{"seated":True}),
    ("paula",650,170,{"seated":True})],
    board=(760,24,150,120,"AC-C09",[("ask","400,000"),("payback","2y 7m")]),
    props=[("table",420,250,1.4),("essay",350,196,0.36),("pen",520,200,0.2)])
S["r01-f3"]=lambda: f_icons([("worried","a benefit with no source"),("tally","a missing cost line"),
    ("pricetag","one fragile price"),("transfer","claimed somewhere else"),
    ("review","counted twice"),("note","only one scenario")], cols=3)
S["r01-f4"]=lambda: f_realia(tbl("","If the assumption is ten percent out",
    ["The assumption","The answer if it is right","The answer if it is 10% out"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>The one I am least sure about:</b>"), 520)
S["r01-f5"]=lambda: f_realia(doc("Arvo Components &middot; business case AC-C09",
    "compressor and lighting replacement &middot; C. Obi &middot; 14 March",
    table_html(["Cost","Amount"],
      [["Capital &mdash; compressors, lighting, installation","384,000"],
       ["Operating &mdash; maintenance contract, years 1&ndash;5","16,000"],
       ["<b>Total</b>","<b>400,000</b>"]])
    + table_html(["Annual benefit","Amount","Source"],
      [["Electricity","98,000","our own meter data, 12 months, at today's price"],
       ["Maintenance avoided","34,000",
        "our contract, <b>less 18,000 already claimed in AC-C07</b>"],
       ["Downtime avoided","<i>not quantified</i>","&mdash;"]])
    + "<p><b>Payback.</b> Central case <b>2 years 7 months</b>. If electricity rises 10%: 2y 1m. "
    "If it falls 10%: 3y 4m. <b>Our hurdle is three years.</b></p>"
    "<p style='background:#fff3cf'><b>The assumption I am least sure about.</b> The electricity "
    "price in year three. Nobody knows it.<br>"
    "<b>What this case does not claim.</b> A downtime saving, although I believe there is one.</p>",
    "Approved ______________ &nbsp;&nbsp; Date ______________ &nbsp;&nbsp; "
    "Conditions ______________"))
S["r01-f6"]=lambda: f_realia(tbl("Word study","Passive reporting, and what it hides",
    ["Pattern","Example","What it hides"],
    [["<b>it is estimated that</b>","<b>It is estimated that</b> savings will be 98,000.",
      "who estimated it"],
     ["<b>X is expected to</b>","Payback <b>is expected to</b> be 2y 7m.","who expects it"],
     ["<b>X is said to</b>","The contract <b>is said to</b> be renewable.","who said it"],
     ["<b>X is thought to have</b>","The seal <b>is thought to have</b> failed.","who thinks so"],
     ["<b>X is reported as</b>","The rate <b>is reported as</b> 6.49%.","by whom, and when"]],
    note="Use the structure <b>and</b> name the source in the same sentence: <i>we estimate, from "
    "our own meter data, that&hellip;</i>"), 540)
S["r01-f7"]=lambda: f_chart([("if electricity rises 10%",25),("central case",31),
    ("if electricity falls 10%",40)],
    unit="months to payback &mdash; the hurdle is 36 months, which the low case does not meet",
    w=520)
S["r01-f8"]=lambda: f_icons([("bank","the capital figure"),("tally","a small operating line"),
    ("transfer","claimed elsewhere"),("data","three payback bars"),
    ("spreadsheet","the assumptions"),("magnifier","one sentence")], cols=3)
S["r01-f9"]=lambda: f_realia(tbl("Arvo Components &middot; approval form",
    "AC-C09 &middot; 400,000",
    ["Assumption","Confidence"],
    [["Electricity price, years 2&ndash;5","<b>low</b>"],
     ["Maintenance contract renewed on current terms","medium"],
     ["Installation in one shutdown","high"],
     ["No change to shift patterns","high"]],
    note="<b>Sensitivity:</b> payback 2y 1m to 3y 4m. &nbsp; "
    "<b>Conditions of approval:</b> (1) review in October against the actual electricity price; "
    "(2) if the low case has arrived, stop the lighting half. &nbsp; "
    "<b>Approver's comment:</b> “approving this because of the two paragraphs where you told "
    "me what's wrong with it”"), 540)
S["r01-f10"]=lambda: f_scene(900,420, people=[("marek",320,180,{"seated":True}),
    ("chiamaka",450,172,{"seated":True})],
    props=[("desk",200,0,1.35),("essay",290,205,0.36),("computer",400,145,0.5),
    ("archive",560,0,0.55),("pen",360,208,0.2)])
S["r01-f11"]=lambda: f_realia(tbl("Two cases","The same project",
    ["One figure","Three scenarios"],
    [["<b>Payback 2 years 1 month</b><br>Electricity saving 98,000<br>Maintenance 52,000<br>"
      "<b>Downtime 30,000</b><br>&mdash;<br><br><i>No assumptions table. Every benefit "
      "quantified, including the one nobody measures.</i>",
      "<b>Payback 2y 7m (range 2y 1m – 3y 4m)</b><br>Electricity 98,000 &mdash; our meters<br>"
      "Maintenance 34,000 &mdash; <b>net of 18,000 claimed elsewhere</b><br>"
      "Downtime <b>not quantified</b><br>Four named assumptions<br>"
      "<i>Weakest assumption named. Hurdle failure stated.</i>"]]), 540)
S["r01-f12"]=lambda: f_realia(doc("Two business cases", None,
    "<p><b>A.</b> Payback is two years and one month. Annual savings total 180,000 across "
    "electricity, maintenance and avoided downtime. The investment comfortably meets the "
    "company's three-year hurdle and we recommend approval.</p>"
    "<p style='font-size:12px;color:#6b6861'>One figure, no sources, no assumptions, and a "
    "downtime number somebody invented.</p>"
    "<p style='margin-top:14px'><b>B.</b> Payback <b>2 years 7 months</b>, range <b>2y 1m to 3y "
    "4m</b>, driven almost entirely by the electricity price. Electricity saving 98,000 from our "
    "own meters over twelve months; maintenance 34,000, <b>net of 18,000 already claimed in "
    "AC-C07</b>. <b>The low case does not meet our three-year hurdle.</b> <b>The assumption I am "
    "least sure about</b> is the electricity price in year three. <b>This case does not claim a "
    "downtime saving</b>, although I believe there is one: nobody records what a failure costs us, "
    "so any figure would be my guess.</p>"))
S["r01-f13"]=lambda: f_realia(form("One-page case planner",
    [("The ask &mdash; one figure, and what it buys",""),
     ("Costs, including the small items",""),("Benefits, each with its source",""),
     ("Payback in three scenarios, against the hurdle",""),
     ("What the answer depends on &mdash; four at most",""),
     ("<b>The assumption I am least sure about</b>",""),
     ("<b>What this case does not claim</b>","")]), 520)
S["r01-f14"]=lambda: f_scene(1000,450, people=[("chiamaka",150,172,{}),
    ("marek",250,180,{"seated":True}),("okonjo",340,182,{"seated":True}),
    ("paula",430,170,{"seated":True}),("hanna",520,172,{"seated":True}),
    ("nour",610,168,{"seated":True}),("yara",700,172,{"seated":True}),
    ("wei",790,170,{}),("ines",870,172,{}),("ravi",950,176,{})],
    props=[("table",300,250,1.6),("essay",380,196,0.32),("cafe",860,205,0.5),
    ("archive",80,0,0.6),("flipchart",220,46,0.8),("computer",470,196,0.36)],
    board=(560,20,170,110,"PAYBACK",[("hurdle","3 years"),("low case","3y 4m")]))
S["r01-f15"]=lambda: f_chart([("my manager",7),("a committee",6),("the finance department",5),
    ("I do not know",3),("the owner",2)])
S["r01-f16"]=lambda: f_scene(880,420, people=[],
    props=[("desk",240,0,1.3),("essay",300,205,0.36),("computer",420,145,0.5),
    ("note",520,210,0.24),("crane",720,0,0.55)],
    window_=(630,56,120,96), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 2 · Saying No ----------------
S["r02-f1"]=lambda: f_icons([("messages","a full inbox"),("inventory","four things circled"),
    ("calendar","no gaps"),("meeting","a gentle no"),("timer","the hours"),
    ("tray","in and out"),("handsup","a flat palm"),("notebook","a blocked diary"),
    ("coat","leaving on time"),("note","a short note")], cols=5)
S["r02-f2"]=lambda: f_scene(900,420, people=[("nour",330,168,{"seated":True}),
    ("okonjo",480,182,{})],
    props=[("desk",200,0,1.35),("essay",280,205,0.36),("calendar",640,110,0.55),
    ("computer",400,145,0.48)])
S["r02-f3"]=lambda: f_icons([("worried","nodding anyway"),("notebook","squeezing it in"),
    ("messages","“I'll try”"),("lamp","doing it in the evening"),
    ("tray","half-done work"),("speechbubble","telling everybody else")], cols=3)
S["r02-f4"]=lambda: f_realia(tbl("","What did each yes displace?",
    ["#","What I agreed to","What this displaced"],
    [[str(i),"",""] for i in range(1,6)],
    note="<b>Who has not been told:</b>"), 500)
S["r02-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; people operations &middot; workload note",
    "N. Khalil to D. Okonjo &middot; Thursday 14 May",
    table_html(["Current commitment","Days","Fixed?"],
      [["Warehouse recruitment &mdash; closes Friday","3","yes"],
       ["Grievance, case 2026-04","4","<b>yes, legally</b>"],
       ["Induction rewrite &mdash; two teams waiting","4","no"],
       ["<b>New: pay benchmarking exercise</b>","<b>11</b>","&mdash;"]])
    + "<p><b>The arithmetic.</b> Eleven working days left; fourteen days of committed work; the "
    "benchmarking adds eleven.</p>"
    "<p><b>What it would displace.</b> Either the induction rewrite entirely, or the grievance, "
    "which I am not willing to move: the clock is statutory.</p>"
    "<p style='background:#fff3cf'><b>Two smaller versions.</b> (1) <b>Two days</b> &mdash; the "
    "three roles you are worried about, against published sector data, limitations on the page. "
    "(2) <b>Four days</b> &mdash; as above plus our own exit data.</p>",
    "Which of those is more use to you?"))
S["r02-f6"]=lambda: f_realia(tbl("Word study","Degrees of refusal",
    ["Form","Strength","Example"],
    [["<b>I'd rather not</b>","a preference","I'<b>d rather not</b> take it on this month."],
     ["<b>I'm not able to</b>","capacity","I'<b>m not able to</b> do both."],
     ["<b>I won't be able to</b>","capacity, in the future","I <b>won't be able to</b> finish by Friday."],
     ["<b>I can't</b>","plain, sounds absolute","I <b>can't</b> move the grievance."],
     ["<b>That isn't possible</b>","about the task, not you","<b>That isn't possible</b> in eleven days."],
     ["<b>I'm not willing to</b>","a decision","I'<b>m not willing to</b> move the grievance."]],
    note="<i>I can't</i> invites somebody to find a way. <i>I'm not willing to</i> ends it &mdash; "
    "so use it about twice a year."), 540)
S["r02-f7"]=lambda: f_chart([("difficult customers (services)",56),("time pressure",43),
    ("participation in designing measures, 2019",61),
    ("participation in designing measures, 2024",55)],
    unit="% of establishments &mdash; reported by employers about their own workplace, not by the "
    "people doing the work", w=540)
S["r02-f8"]=lambda: f_icons([("inventory","four items, with days"),("calendar","eleven days"),
    ("tray","two pushed out"),("clock","a statutory clock"),
    ("essay","two shorter versions"),("handsup","a choice")], cols=3)
S["r02-f9"]=lambda: f_realia(tbl("Commitment list &middot; N. Khalil","May",
    ["Task","Days","Who asked","Fixed?"],
    [["Warehouse recruitment","3","Holm","yes"],
     ["Grievance 2026-04","4","statutory","<b>yes</b>"],
     ["Induction rewrite","4","Zhang, Menon","no"],
     ["Pay benchmarking","11","Okonjo","&mdash;"],
     ["Exit interviews (3)","1","&mdash;","no"],
     ["Contract variations (2)","1","Lindqvist","no"],
     ["Shift-pattern consultation","2","Holm","no"],
     ["Induction delivery, two new starters","1","&mdash;","yes"],
     ["<b>Total</b>","<b>27</b>","","<b>11 working days available</b>"]],
    note="<b>What I have not told anybody:</b> the induction rewrite has already slipped twice."),
    540)
S["r02-f10"]=lambda: f_scene(900,420, people=[("nour",300,168,{}),
    ("okonjo",470,182,{"seated":True}),("marek",700,180,{}),("yara",780,172,{})],
    props=[("desk",380,0,1.3),("essay",250,150,0.3),("computer",430,145,0.48),
    ("door",620,80,0.9)])
S["r02-f11"]=lambda: f_realia(tbl("Two versions of one request","Nine seconds, or a page",
    ["As asked, standing up","As written down"],
    [["“Can you do me a pay benchmarking exercise? Thanks.”<br><br>"
      "<i>Nine seconds. No purpose, no scope, no deadline. Eleven days of work.</i>",
      "<b>Purpose:</b> find out whether pay is why we keep losing warehouse supervisors.<br>"
      "<b>Scope:</b> three roles.<br><b>Deadline:</b> before the June pay round.<br>"
      "<b>Decision it supports:</b> whether to re-band those three roles.<br><br>"
      "<i>Two days of work.</i>"]]), 540)
S["r02-f12"]=lambda: f_realia(doc("Two replies", None,
    "<p><b>A.</b> Things are extremely busy at the moment but I'll do my best to fit it in. I may "
    "need to work on it in the evenings. I'll let you know how I get on.</p>"
    "<p style='font-size:12px;color:#6b6861'>No number, no displacement, no question. The sender "
    "has agreed to something and nobody knows what.</p>"
    "<p style='margin-top:14px'><b>B.</b> I can't take this on as asked. <b>It is eleven days; I "
    "have eleven working days left and fourteen days of committed work.</b> It would displace "
    "either the induction rewrite or the grievance, and I'm not willing to move the grievance "
    "&mdash; the clock is statutory. Two versions I can do without displacing anything: two days "
    "(three roles, published data) ready Tuesday, or four days (plus our own exit data) ready next "
    "Thursday. <b>Which is more use to you?</b></p>"))
S["r02-f13"]=lambda: f_realia(form("Refusal planner",
    [("The plain no",""),("The arithmetic &mdash; a total",""),("What it would displace",""),
     ("What I will not move, and why",""),("Two smaller versions, with dates",""),
     ("<b>The one question that changes the answer</b>","")]), 520)
S["r02-f14"]=lambda: f_scene(1000,450, people=[("nour",150,168,{}),("okonjo",240,182,{}),
    ("marek",340,180,{"seated":True}),("yara",430,172,{"seated":True}),
    ("ines",520,172,{"seated":True}),("hanna",610,172,{}),("wei",700,170,{}),
    ("ravi",790,176,{}),("sofia",870,172,{}),("chiamaka",950,172,{})],
    props=[("desk",100,0,1.2),("computer",190,140,0.45),("flipchart",80,46,0.8),
    ("printer",640,205,0.48),("lamp",760,120,0.45),("cafe",900,205,0.48),
    ("calendar",470,20,0.5),("coat",560,130,0.4)])
S["r02-f15"]=lambda: f_chart([("only with a reason",7),("yes, to colleagues only",6),
    ("yes, to anybody",4),("no",4),("I have never tried",2)])
S["r02-f16"]=lambda: f_scene(860,410, people=[],
    props=[("desk",240,0,1.3),("essay",300,205,0.36),("calendar",150,110,0.5),
    ("computer",430,145,0.5),("door",680,80,0.9)],
    window_=(600,56,110,96))

# ---------------- Unit 3 · Costing It ----------------
S["r03-f1"]=lambda: f_icons([("pricetag","a price"),("calculator","a calculator"),
    ("pallet","a pallet"),("balance","an uneven split"),("spreadsheet","a column of figures"),
    ("thermostat","a meter"),("invoice","invoices"),("scales","one item weighed"),
    ("data","fixed and variable"),("meeting","one figure, two views")], cols=5)
S["r03-f2"]=lambda: f_scene(900,420, people=[("marek",330,180,{"seated":True}),
    ("paula",470,170,{})],
    props=[("desk",200,0,1.35),("essay",270,205,0.32),("essay",350,208,0.32),
    ("essay",430,205,0.32),("computer",550,145,0.48)])
S["r03-f3"]=lambda: f_icons([("carton","direct materials"),("warehouse","the building"),
    ("invoice","the rent"),("stars","volume up"),
    ("sad","volume down"),("review","three answers")], cols=3)
S["r03-f4"]=lambda: f_realia(tbl("","What does the price have to cover?",
    ["What we charge","The direct cost","What else the price must cover"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>The volume this assumes:</b>"), 520)
S["r03-f5"]=lambda: f_realia(tbl("Lindmark Freight &middot; cost per outbound pallet",
    "<b>volume assumed: 214,000 pallets a year</b> &middot; M. Dolny &middot; 2 April",
    ["Cost line","Direct","+ overhead, planned","+ overhead, last year"],
    [["Pick and wrap labor","0.61","0.61","0.61"],
     ["Consumables","0.18","0.18","0.18"],
     ["Carrier charge","0.59","0.59","0.59"],
     ["Building, heat, light","&mdash;","0.11","0.17"],
     ["Planning and admin","&mdash;","0.07","0.11"],
     ["Insurance","&mdash;","0.03","0.04"],
     ["Finance and IT","&mdash;","0.02","0.04"],
     ["<b>Total per pallet</b>","<b>1.38</b>","<b>1.61</b>","<b>1.74</b>"],
     ["<i>Use this one for</i>","one extra pallet on a truck already going","<b>a quote</b>",
      "a warning about falling volume"]],
    note="Nothing has become more expensive. There is simply less to divide the overhead by."),
    560)
S["r03-f6"]=lambda: f_realia(tbl("Word study","Quantity expressions",
    ["Expression","Example","Notes"],
    [["<b>per</b>","1.61 <b>per</b> pallet &middot; 0.18 <b>per</b> kWh","the clearest"],
     ["<b>out of</b>","19 <b>out of</b> 27 member states","for counts, not rates"],
     ["<b>in every</b>","one <b>in every</b> nine pallets is a part load","easy to picture"],
     ["<b>a ratio: X to Y</b>","direct to total is 1.38 <b>to</b> 1.61","precise, hard to hear"],
     ["<b>as a share of</b>","electricity is 8% <b>of the overhead</b>","say <i>of what</i>, always"],
     ["<b>per thousand</b>","2.4 damages <b>per thousand</b> pallets","for small rates"]],
    note="“Electricity is eight percent” is meaningless. Of the overhead, of total cost "
    "and of the price are three different claims."), 540)
S["r03-f7"]=lambda: f_chart([("direct only",1.38),("+ overhead at planned volume",1.61),
    ("+ overhead at last year's volume",1.74)],
    unit="cost per pallet &mdash; the direct portion is identical in all three; only the divisor "
    "changes", w=520)
S["r03-f8"]=lambda: f_icons([("tally","the volume, at the top"),("spreadsheet","three totals"),
    ("essay","a quotation"),("truck","one extra pallet"),
    ("sad","volume falling"),("noentry","do not quote this one")], cols=3)
S["r03-f9"]=lambda: f_realia(doc("Lindmark Freight &middot; quotation",
    "Ostberg Retail &middot; valid 30 days &middot; ref Q-4471",
    table_html(["Line","Description","Qty","Unit","Total"],
      [["1","Outbound pallet handling and carriage","214,000","1.49","318,860"],
       ["2","Part-load surcharge","est. 9,000","0.34","3,060"],
       ["3","Weekend dispatch, on request","as required","41.00","&mdash;"]])
    + "<p style='background:#fff3cf'><b>This price assumes a contracted volume of 260,000 pallets "
    "a year.</b> Below 240,000 the unit price reverts to 1.61, reviewed quarterly. This condition "
    "is in the body of this quotation and not in the terms on the reverse, deliberately.</p>",
    "Signed ______________ &nbsp;&nbsp; Date ______________"))
S["r03-f10"]=lambda: f_scene(900,420, people=[("marek",310,180,{"seated":True}),
    ("paula",420,170,{"seated":True}),("okonjo",520,182,{"seated":True})],
    props=[("table",390,250,1.4),("essay",350,196,0.34),("calculator",450,200,0.28),
    ("essay",520,200,0.3)],
    board=(740,24,160,110,"214,000",[("per year","assumed")]))
S["r03-f11"]=lambda: f_realia(tbl("Two costing sheets","The same operation",
    ["One total","Three columns"],
    [["<b>Cost per pallet: 1.61</b><br><br>"
      "<i>No volume line. Nothing to say which question it answers. Somebody will quote it at "
      "180,000 pallets and we will lose money on everything.</i>",
      "<b>Volume assumed: 214,000 a year</b><br>Direct <b>1.38</b> &mdash; one extra pallet<br>"
      "+ overhead <b>1.61</b> &mdash; <b>any quotation</b><br>"
      "+ overhead at last year's volume <b>1.74</b> &mdash; a warning<br><br>"
      "<i>Each total labeled with its question.</i>"]]), 540)
S["r03-f12"]=lambda: f_realia(doc("Two costing notes", None,
    "<p><b>A.</b> Our cost per outbound pallet is 1.61.</p>"
    "<p style='font-size:12px;color:#6b6861'>One sentence, no volume, no breakdown. In November a "
    "contract was won at 1.42 on the strength of it.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>Volume assumed: 214,000 pallets a year.</b> Direct "
    "<b>1.38</b> &mdash; use for one extra pallet on a truck already going. With overhead "
    "<b>1.61</b> &mdash; use for <b>any quotation</b>. With overhead at last year's volume "
    "<b>1.74</b> &mdash; use for a warning about falling volume. <b>Do not quote 1.38 to a "
    "customer.</b> It does not carry the building, the planning team, the insurance or finance. "
    "<b>What this note does not tell you:</b> the cost of a part-load pallet, which is higher. "
    "Come and ask.</p>"))
S["r03-f13"]=lambda: f_realia(form("Costing planner",
    [("<b>Volume assumed</b>",""),("Figure 1 &mdash; and what it is for",""),
     ("Figure 2 &mdash; and what it is for",""),("Figure 3 &mdash; and what it is for",""),
     ("<b>Do not quote</b>",""),("If volume rises",""),
     ("What this note does not tell you","")]), 520)
S["r03-f14"]=lambda: f_scene(1000,450, people=[("marek",150,180,{"seated":True}),
    ("paula",240,170,{"seated":True}),("okonjo",330,182,{"seated":True}),
    ("chiamaka",430,172,{}),("anders",520,182,{}),("yara",610,172,{}),
    ("wei",700,170,{}),("ines",790,172,{}),("nour",870,168,{}),("ravi",950,176,{})],
    props=[("table",200,250,1.3),("spreadsheet",300,140,0.4),("pallet",560,0,0.7),
    ("crate",640,0,0.7),("thermostat",840,120,0.4),("clipboard",740,150,0.36),
    ("flipchart",90,46,0.8)],
    board=(400,20,150,110,"PALLETS",[("per month","17,800")]))
S["r03-f15"]=lambda: f_chart([("roughly",7),("yes but not what is in it",6),
    ("yes and what is in it",4),("we do not measure it",3),("no",2)])
S["r03-f16"]=lambda: f_scene(880,420, people=[],
    props=[("desk",240,0,1.3),("essay",300,205,0.36),("data",420,110,0.45),
    ("computer",470,145,0.48),("pallet",720,0,0.65)],
    window_=(620,56,120,96))
