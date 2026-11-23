# -*- coding: utf-8 -*-
"""Clearline Book 3 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["q00-f1"]=lambda: f_realia(tbl("What you already have","Six structures, one example each",
    ["Structure","Example"],
    [["Present perfect","I'<b>ve sent</b> the revised quote."],
     ["Present perfect continuous","We'<b>ve been waiting</b> for their drawing <b>since</b> Tuesday."],
     ["Past simple + a time","The batch <b>arrived</b> on the ninth."],
     ["The passive","The gauge <b>is calibrated</b> every six months."],
     ["<i>must</i> / <i>have to</i>","We <b>have to</b> keep the record for five years."],
     ["First conditional","If they pay late, we <b>will</b> be on the overdraft."]],
    note="None of this is new. The three habits that follow are."), 540)
S["q00-f2"]=lambda: f_realia(doc("Taped inside a notebook", None,
    "<p style='font-size:17px;line-height:1.9'>"
    "&bull; I don't know, and I'll find out by Thursday.<br>"
    "&bull; Two sources disagree, and I've used the lower one.<br>"
    "&bull; That figure is from 2023.<br>"
    "&bull; I saw it, but I wouldn't call it a test.<br>"
    "&bull; I can't answer that in this meeting.</p>",
    "Five sentences. Nobody who uses them sounds less competent."), 500)

# ---------------- Unit 1 · The Brief ----------------
S["q01-f1"]=lambda: f_icons([("essay","a brief"),("signature","a signed scope"),
    ("calendar","a milestone"),("spreadsheet","a budget"),("meeting","stakeholders"),
    ("inventory","names and roles"),("sizechart","a target"),("form","a change request"),
    ("trafficlights","a status report"),("handshake","the end")], cols=5)
S["q01-f2"]=lambda: f_scene(920,420, people=[("chiamaka",300,172,{}),
    ("marek",470,180,{"seated":True}),("anders",560,182,{"seated":True}),
    ("paula",650,170,{"seated":True})],
    board=(740,24,170,120,"IMPROVE",[("faster?","cheaper?"),("reliable?","visible?")]),
    props=[("flipchart",150,46,0.9),("table",420,250,1.4),("phone",600,200,0.3)])
S["q01-f3"]=lambda: f_icons([("clock","faster"),("coins","cheaper"),
    ("review","more reliable"),("dashboard","easier to track"),
    ("happy","a happier customer"),("worried","nobody has said which")], cols=3)
S["q01-f4"]=lambda: f_realia(tbl("","Define the word",
    ["The word","What it would have to mean","How you would measure it"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>Who has to sign this:</b>"), 520)
S["q01-f5"]=lambda: f_realia(doc("Arvo Components &middot; project brief AC-P14",
    "issued 3 February &middot; sponsor P. Moreau &middot; budget 80,000 &middot; report by 30 April",
    "<p><b>Objective.</b> To improve our logistics performance, reduce avoidable cost, and give "
    "our customers a better experience of dealing with us.</p>"
    "<p><b>Stakeholders.</b> P. Moreau (commercial), M. Dolny (finance), A. Holm (warehouse).</p>"
    "<p><b>How success will be measured.</b></p>"
    "<div style='border:1px dashed #b9b7b0;border-radius:6px;height:86px;"
    "display:flex;align-items:center;justify-content:center;color:#9a9892;font-size:13px'>"
    "(this section is blank)</div>",
    "Four lines of objective. Three different projects. No measurement."))
S["q01-f6"]=lambda: f_realia(tbl("Word study","Present perfect continuous",
    ["Pattern","Use","Example"],
    [["<b>have / has been + -ing</b>","it started before now and still goes on",
      "We'<b>ve been waiting</b> for the drawing."],
     ["<b>for</b> + a length","how long","<b>for</b> eleven days &middot; <b>for</b> two years"],
     ["<b>since</b> + a point","when it started",
      "<b>since</b> Monday &middot; <b>since</b> February"],
     ["<b>How long have you been &hellip;?</b>","asking",
      "<b>How long have you been</b> working on it?"]],
    note="Monday &rarr;&rarr;&rarr; now. Eleven days across the band."), 520)
S["q01-f7"]=lambda: f_chart([("2023",4.1),("2018",4.0)],
    unit="average service score of the top ten economies, out of 5 &mdash; 139 economies ranked, "
    "much of the index from a survey of logistics professionals", w=520)
S["q01-f8"]=lambda: f_icons([("flipchart","one word, four arrows"),("calendar","eleven days"),
    ("spreadsheet","one budget, four projects"),("form","a blank measurement box"),
    ("signature","one page to sign"),("data","the plan begins")], cols=3)
S["q01-f9"]=lambda: f_realia(tbl("Arvo Components &middot; scope agreement AC-P14",
    "one objective &middot; 14 February",
    ["In scope","Out of scope"],
    [["Order release","A customer tracking page (&asymp; 140,000)"],
     ["Picking sequence","Renegotiating carrier rates"],
     ["Carrier booking","The warehouse extension"],
     ["The despatch cut-off time","Anything requiring new software"]],
    note="<b>Objective:</b> 95% of orders despatched within 5 working days. "
    "<b>Baseline:</b> 22% currently take 8 days or more. <b>Target date:</b> 30 April. "
    "&nbsp; Sponsor ______________ (signed) &nbsp; Project manager ______________"), 540)
S["q01-f10"]=lambda: f_scene(900,420, people=[("paula",330,170,{"seated":True}),
    ("chiamaka",470,172,{})],
    props=[("desk",200,0,1.35),("essay",280,205,0.4),("pen",360,208,0.26),
    ("folder",540,150,0.42)],
    board=(720,24,170,110,"AC-P14",[("week","3 of 12")]))
S["q01-f11"]=lambda: f_realia(tbl("Two briefs","The same project",
    ["Four lines","Ten lines"],
    [["Improve our logistics performance, reduce avoidable cost and give customers a better "
      "experience.<br>Budget 80,000.<br>Report by 30 April.<br><br>"
      "<i>How success will be measured: (blank)</i>",
      "<b>Objective</b> 95% despatched within 5 working days<br>"
      "<b>Baseline</b> 22% take 8 days or more &mdash; our own records, 1,841 orders<br>"
      "<b>Target</b> by 30 April, held four weeks<br>"
      "<b>Out of scope</b> tracking page, carrier rates, the extension<br>"
      "<b>Not promising</b> a lower average lead time"]]), 540)
S["q01-f12"]=lambda: f_realia(doc("Two briefs", None,
    "<p><b>A.</b> Improve our logistics performance, reduce avoidable cost and give our customers "
    "a better experience of dealing with us.</p>"
    "<p style='font-size:12px;color:#6b6861'>Three verbs, no numbers, no measurement. In April "
    "this page cannot say whether anybody succeeded.</p>"
    "<p style='margin-top:14px'><b>B.</b> Make our despatch lead time consistent: 95 per cent of "
    "orders despatched within five working days, measured weekly, by 30 April and held for four "
    "consecutive weeks. Baseline: our own despatch records, 1 August to 31 January, 1,841 orders "
    "&mdash; median 5 days, but 22 per cent took 8 days or more. Excluded: a customer tracking "
    "page, carrier rate renegotiation, the warehouse extension, anything needing new software. "
    "<b>This will not reduce cost this year and will not make us faster on average.</b></p>"))
S["q01-f13"]=lambda: f_realia(form("One-page scope planner",
    [("Objective",""),("Baseline &mdash; and its source",""),("Target &mdash; and its date",""),
     ("In scope",""),("Out of scope",""),("Why this one",""),
     ("<b>What I am not promising</b>","")]), 520)
S["q01-f14"]=lambda: f_scene(1000,450, people=[("chiamaka",160,172,{}),
    ("paula",260,170,{"seated":True}),("marek",350,180,{"seated":True}),
    ("anders",440,182,{"seated":True}),("yara",530,172,{"seated":True}),
    ("nour",620,168,{}),("wei",710,170,{}),("sofia",800,172,{}),
    ("okonjo",880,182,{}),("ravi",960,176,{})],
    props=[("table",240,250,1.6),("flipchart",80,46,0.85),("computer",320,196,0.4),
    ("cafe",680,205,0.55),("carton",860,0,0.55),("calendar",520,20,0.5)],
    board=(560,20,170,110,"SCOPE",[("in","4 items"),("out","4 items")]))
S["q01-f15"]=lambda: f_chart([("a conversation",8),("an email",5),
    ("a written brief, no measurements",4),("they just appear",4),
    ("a written brief with measurements",2)])
S["q01-f16"]=lambda: f_scene(880,420, people=[],
    props=[("desk",240,0,1.3),("essay",310,205,0.42),("pen",400,210,0.26),
    ("computer",470,145,0.5),("calendar",150,110,0.52),("pallet",700,0,0.6)],
    window_=(620,56,130,96), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 2 · Negotiating ----------------
S["q02-f1"]=lambda: f_icons([("meeting","two sides, one document"),("pricetag","a price"),
    ("calendar","ninety days"),("balance","the trade"),("handshake","agreement"),
    ("change","a concession"),("padlock","what cannot move"),
    ("inventory","two in, two out"),("clock","the deadline"),("signature","signed")], cols=5)
S["q02-f2"]=lambda: f_scene(900,420, people=[("hanna",300,172,{"seated":True}),
    ("marek",390,180,{"seated":True}),("oksana",560,172,{"seated":True})],
    props=[("table",380,250,1.5),("essay",330,196,0.38),("notebook",430,200,0.34),
    ("computer",520,196,0.4)])
S["q02-f3"]=lambda: f_icons([("bank","the bank said no"),("overdraft","their cash runs out"),
    ("envelope","credit insurance refused"),("essay","a rule from head office"),
    ("data","the exchange rate"),("worried","they simply cannot")], cols=3)
S["q02-f4"]=lambda: f_realia(tbl("","Tactic or limit?",
    ["What they refused","Probably a tactic","Probably a real limit"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>The question that would tell them apart:</b>"), 520)
S["q02-f5"]=lambda: f_realia(doc("Trade finance: the gap",
    "summary for the Lindmark finance committee &middot; 4 March",
    "<p style='font-size:40px;font-weight:700;margin:6px 0'>2.5 trillion dollars</p>"
    "<p style='font-size:13px;color:#6b6861;margin-top:-6px'>the gap between the trade finance "
    "businesses ask for and the trade finance they receive, 2025</p>"
    + table_html(["","Figure"],
      [["2015","1.5 trillion"],["2023","2.5 trillion"],["2025","2.5 trillion &mdash; unchanged"],
       ["As a share of global trade","about 10%, down from 10.6%"],
       ["Rejected &mdash; small and medium firms","41%"],
       ["Rejected &mdash; large and mid-cap firms","40%"]])
    + "<p style='background:#fff3cf'><b>Limitations, as the ADB itself states them.</b> "
    "The gap may be partly cyclical. It is not only about access. Commodity and energy prices "
    "have fallen since 2023. That may have cut how much working capital companies need. No "
    "single dataset of trade finance demand and supply exists. So the figure rests on a survey "
    "and a model, not on counted deals.</p>",
    "9th edition, released January 2026 &middot; more than 110 providers, up to a third of the "
    "market"))
S["q02-f6"]=lambda: f_realia(tbl("Word study","Four ways to attach a condition",
    ["Connector","Means","Example"],
    [["<b>if</b>","on this condition","We'll agree <b>if</b> you fix the price for a year."],
     ["<b>unless</b>","if &hellip; not","We can't agree <b>unless</b> the price is fixed."],
     ["<b>as long as</b>","only on this condition",
      "Forty-five days, <b>as long as</b> the order is firm."],
     ["<b>provided that</b>","the same, more formal",
      "<b>Provided that</b> volumes hold, we can offer two per cent."]],
    note="<i>unless</i> is already negative. <i>Unless the price doesn't hold</i> says the "
    "opposite of what you mean."), 520)
S["q02-f7"]=lambda: f_line([("2015",1.5),("2023",2.5),("2025",2.5)], w=540,
    unit="trillion dollars &mdash; a survey-based estimate; as a share of trade it fell from "
    "10.6% to about 10%", mark=("2025","unchanged"), ymin=0)
S["q02-f8"]=lambda: f_icons([("calendar","14 days or 90"),("pricetag","two per cent"),
    ("pallet","4,000 or 10,000"),("signature","firm for a year"),
    ("bank","the bank's rule"),("change","what we trade")], cols=3)
S["q02-f9"]=lambda: f_realia(tbl("Lindmark Freight &middot; negotiation plan",
    "supplier terms &middot; prepared before the meeting, not during it",
    ["What we want","What it is worth to us","What we can give","What that costs us"],
    [["Cash out later in the quarter","about 900 a month in overdraft charges",
      "A firm twelve-month order","flexibility if volumes fall"],
     ["90-day terms","(the lever, not the need)","Payment in 14 days","cash leaves earlier"],
     ["Price held for a year","about 4,000","Move three more lines to them","supplier concentration"],
     ["","","",""]],
    note="<b>Walk-away point:</b> no agreement if the price rises above 1.42. &nbsp; "
    "<b>What we think they cannot change:</b> their bank facility, which covers 30-day invoices "
    "only."), 560)
S["q02-f10"]=lambda: f_scene(920,420, people=[("hanna",300,172,{}),
    ("oksana",480,172,{"seated":True}),("marek",570,180,{"seated":True})],
    props=[("table",400,250,1.5),("essay",350,196,0.38),("spreadsheet",520,140,0.42),
    ("cafe",620,200,0.4)])
S["q02-f11"]=lambda: f_realia(tbl("Two plans","The same deal",
    ["One column","Four columns"],
    [["<b>What we want</b><br>90-day terms<br>a lower price<br>a firm rate<br><br>"
      "<i>Nothing about what we can give, or what it costs us.</i>",
      "<b>What we want</b> &mdash; cash later in the quarter<br>"
      "<b>Worth</b> &mdash; about 900 a month<br>"
      "<b>What we can give</b> &mdash; a firm year; payment in 14 days<br>"
      "<b>What that costs us</b> &mdash; cash leaves earlier<br>"
      "<b>They cannot change</b> &mdash; their 30-day bank facility"]]), 540)
S["q02-f12"]=lambda: f_realia(doc("Two emails", None,
    "<p><b>A.</b> Further to my previous two emails, I must again request ninety-day payment "
    "terms. I would be grateful if you would reconsider your position as a matter of urgency.</p>"
    "<p style='font-size:12px;color:#6b6861'>The third version of the same request, slightly "
    "firmer. It will get the same answer slightly faster.</p>"
    "<p style='margin-top:14px'><b>B.</b> I have asked three times and you have said no three "
    "times, so I'll ask something more useful: <b>what would ninety-day terms cost you?</b> "
    "If it's a bank facility or credit insurance, tell me and I'll stop raising it. Two "
    "alternatives, either of which works for us: sixty days as long as our order is firm for "
    "twelve months; or payment within fourteen days against a discount &mdash; we'd accept "
    "anything from 1.5 per cent. <b>I am not asking you to hold stock and not asking for a price "
    "reduction on top.</b></p>"))
S["q02-f13"]=lambda: f_realia(tbl("","Negotiation planner",
    ["What we want","What it is worth to us","What we can give","What that costs us"],
    [["","","",""],["","","",""],["","","",""]],
    note="<b>Walk-away point:</b> ______________ &nbsp;&bull;&nbsp; "
    "<b>What I think they cannot change:</b>"), 540)
S["q02-f14"]=lambda: f_scene(1000,450, people=[("hanna",180,172,{"seated":True}),
    ("marek",270,180,{"seated":True}),("oksana",400,172,{"seated":True}),
    ("lars",490,180,{"seated":True}),("okonjo",600,182,{}),("yara",690,172,{}),
    ("nour",780,168,{}),("wei",860,170,{}),("paula",930,170,{}),("ines",980,172,{})],
    props=[("table",300,250,1.5),("essay",350,196,0.36),("calculator",450,200,0.3),
    ("flipchart",90,46,0.85),("folder",630,150,0.38),("cafe",900,205,0.5)])
S["q02-f15"]=lambda: f_chart([("deadlines",7),("price",6),("payment terms",5),
    ("scope of work",4),("nothing",2)])
S["q02-f16"]=lambda: f_scene(880,420, people=[],
    props=[("desk",240,0,1.3),("signature",320,208,0.3),("computer",420,145,0.5),
    ("essay",520,208,0.34),("truck",720,0,0.5)],
    window_=(620,56,120,96), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 3 · Presenting Numbers ----------------
S["q03-f1"]=lambda: f_icons([("data","a bar chart"),("stars","a rising line"),
    ("balance","a pie"),("tally","one large number"),("pricetag","a percentage"),
    ("sizechart","a baseline"),("spreadsheet","a table"),("review","two bars compared"),
    ("magnifier","the axis label"),("handsup","pointing at one bar")], cols=5)
S["q03-f2"]=lambda: f_scene(920,420, people=[("chiamaka",280,172,{}),
    ("marek",440,180,{"seated":True}),("okonjo",530,182,{"seated":True}),
    ("paula",620,170,{"seated":True}),("yara",700,172,{"seated":True})],
    board=(760,24,150,110,"22%",[("of orders","8 days+")]),
    props=[("table",420,250,1.4),("note",350,196,0.3),("essay",820,205,0.34)])
S["q03-f3"]=lambda: f_icons([("tally","exactly"),("balance","about"),
    ("sizechart","just under"),("stars","just over"),
    ("data","somewhere between"),("worried","we don't know")], cols=3)
S["q03-f4"]=lambda: f_realia(tbl("","One number each",
    ["The figure","Compared with","Where it came from"],
    [["","",""],["","",""],["","",""]],
    note="<b>The one we remembered:</b>"), 520)
S["q03-f5"]=lambda: f_realia(doc("Slide 1 of 4 &mdash; the only one with a number on it",
    "Arvo Components management meeting &middot; 9 March",
    "<p style='font-size:46px;font-weight:700;margin:4px 0'>3.7 million</p>"
    "<p style='font-size:16px;margin-top:-4px'>patent applications filed worldwide in 2024 "
    "&mdash; a record, up 4.9%</p>"
    + table_html(["Office","Applications, 2024"],
      [["CNIPA (China)","about 1,800,000 &mdash; <b>up 9%</b>"],
       ["USPTO (United States)","603,194"],["JPO (Japan)","306,855"],
       ["KIPO (Republic of Korea)","246,245"],["EPO (Europe)","fifth"]])
    + "<p>Asia's offices received roughly <b>seven in every ten</b> applications. Designs about "
    "1.22 million, up 2.6%. Trademarks flat.</p>"
    "<p style='background:#fff3cf'><b>The honest sentence.</b> “World filings rose 4.9 per "
    "cent” and “China filed 9 per cent more” are nearly the same fact in two "
    "costumes.</p>",
    "WIPO, World Intellectual Property Indicators 2025, published 12 November 2025, for 2024"))
S["q03-f6"]=lambda: f_realia(tbl("Word study","How near is near?",
    ["Expression","Means","Example"],
    [["<b>about / around / roughly</b>","near it, either side","<b>about</b> 3.7 million"],
     ["<b>just under / nearly</b>","a little less","<b>just under</b> four million"],
     ["<b>just over / more than</b>","a little more","<b>just over</b> 600,000"],
     ["<b>well over</b>","a lot more","<b>well over</b> a million"],
     ["<b>seven in ten</b>","a proportion, said simply","<b>seven in ten</b> applications"],
     ["<b>a percentage point</b>","the gap between two percentages",
      "up 6.5 <b>percentage points</b>"]],
    note="13.5% &rarr; 20% is a rise of <b>6.5 points</b> and about <b>48 per cent</b>. Both are "
    "true. Say which you mean."), 540)
S["q03-f7"]=lambda: f_chart([("CNIPA (China)",1800000),("USPTO",603194),("JPO",306855),
    ("KIPO",246245)],
    unit="patent applications, 2024 &mdash; Asia received about seven in ten of the world total",
    w=540)
S["q03-f8"]=lambda: f_icons([("tally","one figure"),("spreadsheet","nine figures"),
    ("data","a long tail"),("review","one dominant bar"),
    ("magnifier","the source line"),("handsup","a question")], cols=3)
S["q03-f9"]=lambda: f_realia(tbl("Presentation plan","Four slides, six minutes",
    ["Slide","What is on it"],
    [["1","The question this answers &mdash; one line"],
     ["2","<b>22%</b> &mdash; one figure, one label, one source line"],
     ["3","The long tail &mdash; one chart"],
     ["4","What I'm asking for &mdash; two days of analyst time"]],
    note="<b>The sentence I will say twice:</b> twenty-two per cent of our orders take eight days "
    "or more. &nbsp; <b>Questions I expect:</b> where is it from; why now; what about the median."),
    520)
S["q03-f10"]=lambda: f_scene(900,420, people=[("chiamaka",300,172,{}),
    ("marek",520,180,{"seated":True})],
    board=(720,24,170,120,"SLIDE 3",[("figures","9"),("charts","3")]),
    props=[("table",440,250,1.4),("timer",470,196,0.3),("essay",560,196,0.34),
    ("essay",640,205,0.3)])
S["q03-f11"]=lambda: f_realia(tbl("Two slides","The same data",
    ["Nine figures","One figure"],
    [["Lead time by product group, by carrier, by month; median 4.6; mean 5.3; P90 9.1; "
      "22.4% over 8 days; 1,841 orders; 11 over 20 days; 38% customer-caused<br><br>"
      "<i>The room remembers nothing.</i>",
      "<b>22%</b><br>of our orders take eight days or more<br>"
      "<span style='font-size:11px;color:#6b6861'>our own despatch records, 1,841 orders, "
      "Aug&ndash;Jan</span><br><br><i>The room remembers one thing.</i>"]]), 540)
S["q03-f12"]=lambda: f_realia(doc("Two summaries", None,
    "<p><b>A.</b> Median lead time is 4.6 days against a published 5; the mean is 5.3; P90 is "
    "9.1; 22.4 per cent of 1,841 orders exceeded 8 days; eleven exceeded 20; carrier B accounts "
    "for 31 per cent of the tail; October was the worst month at 29 per cent.</p>"
    "<p style='font-size:12px;color:#6b6861'>Eleven figures in six lines. Nothing to take away.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>Twenty-two per cent</b> of our orders take eight "
    "working days or more to despatch, against a published lead time of five. That is from our "
    "own despatch records &mdash; every order between August and January, not a sample. "
    "<b>What it does not show</b> is why, and it does not separate orders delayed by us from "
    "orders delayed by a customer's paperwork.</p>"))
S["q03-f13"]=lambda: f_realia(form("One-page number planner",
    [("<b>The figure</b>",""),("What it is of",""),("What it is compared with",""),
     ("Where it came from",""),("<b>What it does not show</b>",""),
     ("What I am asking for",""),("What goes in the appendix","")]), 520)
S["q03-f14"]=lambda: f_scene(1000,450, people=[("chiamaka",150,172,{}),
    ("okonjo",280,182,{"seated":True}),("paula",370,170,{"seated":True}),
    ("marek",460,180,{"seated":True}),("yara",550,172,{"seated":True}),
    ("nour",640,168,{"seated":True}),("ravi",730,176,{"seated":True}),
    ("wei",820,170,{}),("sofia",900,172,{}),("ines",960,172,{})],
    board=(200,20,150,110,"22%",[("of orders","8 days+")]),
    props=[("table",320,250,1.6),("computer",420,196,0.38),("note",520,200,0.26),
    ("cafe",860,205,0.5),("flipchart",80,46,0.8)])
S["q03-f15"]=lambda: f_chart([("a monthly report",7),("an email",6),("a dashboard",5),
    ("a presentation",3),("word of mouth",3)])
S["q03-f16"]=lambda: f_scene(880,420, people=[],
    props=[("table",380,250,1.5),("essay",430,196,0.36),("cafe",520,200,0.36),
    ("flipchart",160,46,0.9),("chair",650,210,0.7)],
    board=(740,24,150,110,"22%",[("","")]),
    panelbg="#242c38", floorbg="#30394a")
