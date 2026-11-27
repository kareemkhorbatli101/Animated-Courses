# -*- coding: utf-8 -*-
"""Clearline Book 4 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · Paying Across Borders ----------------
S["r04-f1"]=lambda: f_icons([("transfer","a transfer form"),("change","two currencies"),
    ("statement","a fee line"),("chain","three banks"),("calendar","a value date"),
    ("bankapp","mobile money"),("receipt","less than was sent"),("data","a rate board"),
    ("bankcard","a card"),("meeting","checking together")], cols=5)
S["r04-f2"]=lambda: f_scene(900,420, people=[("marek",330,180,{"seated":True})],
    props=[("desk",200,0,1.35),("essay",270,205,0.32),("essay",350,208,0.32),
    ("computer",470,145,0.5),("pen",420,210,0.2)])
S["r04-f3"]=lambda: f_icons([("bank","the sending fee"),("data","the rate spread"),
    ("chain","an intermediary's cut"),("bank","the receiving charge"),
    ("calendar","a weekend"),("worried","no explanation")], cols=3)
S["r04-f4"]=lambda: f_realia(tbl("","Sent against arrived",
    ["What we send","What arrives","The difference","Who bears it"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>Who checks this:</b>"), 520)
S["r04-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; payment reconciliation, supplier KE-204",
    "M. Dolny &middot; 7 May &middot; eleven months compared line by line",
    table_html(["","Amount"],
      [["Sent, per month","4,000"],["Our bank's disclosed fee","12"],
       ["<b>Arrived, per month</b>","<b>3,841</b>"],
       ["<b>Difference</b>","<b>159, or about 4.0%</b>"]])
    + table_html(["Where it goes","About"],
      [["Rate spread &mdash; our bank's rate against the market rate that morning","96"],
       ["Intermediary bank in a third country","33"],
       ["Receiving bank's charge and the disclosed fee","30"]])
    + "<p><b>Over a year:</b> about 1,900. The supplier has been pricing to cover it, so we have "
    "been paying it twice &mdash; once as a deduction and once inside their price.</p>",
    "Only the third line appears on our own statement, which is why it took eleven months to find."))
S["r04-f6"]=lambda: f_realia(tbl("Word study","The future perfect",
    ["Pattern","Use","Example"],
    [["<b>will have + participle</b>","finished before a future point",
      "The funds <b>will have cleared</b> by Friday."],
     ["<b>by the time + present</b>","names that point",
      "<b>By the time</b> it arrives, three banks <b>will have taken</b> a share."],
     ["<b>won't have</b>","not finished by then","It <b>won't have cleared</b> before Monday."],
     ["<b>will have been + -ing</b>","how long, at that point",
      "By June we'<b>ll have been paying</b> this for a year."],
     ["compare: <b>will</b>","simply later","It <b>will clear</b> on Tuesday."]],
    note="<i>By the time</i> takes the <b>present</b>: <i>by the time it arrives</i>, never "
    "<i>by the time it will arrive</i>."), 540)
S["r04-f7"]=lambda: f_chart([("sent",4000),("rate spread",-96),("intermediary",-33),
    ("fees",-30),("arrived",3841)],
    unit="one monthly payment &mdash; the published global average for a 200-dollar personal "
    "transfer is 6.49%, which is a different measurement", w=540)
S["r04-f8"]=lambda: f_icons([("review","two statements"),("data","two rates"),
    ("chain","a third bank"),("calendar","five days, then two"),
    ("invoice","a different currency"),("handshake","agreed")], cols=3)
S["r04-f9"]=lambda: f_realia(form("Payment instruction &middot; KE-204",
    [("Beneficiary","Wambui Packaging Ltd"),("Beneficiary currency","KES"),
     ("Amount and currency to send","<b>KES equivalent of 4,000 &mdash; sent in KES, not EUR</b>"),
     ("Charges","&#9744; all borne by sender &nbsp; <b>&#9745; shared</b> &nbsp; "
      "&#9744; all borne by beneficiary"),
     ("Value date","Tuesday 12th"),("Reference","INV KE-204-0592"),
     ("Route","visible-fee route, not correspondent chain")],
    note="Under the option selected, intermediary charges are borne by the sender. Previously "
    "they were deducted from the beneficiary, which is where the 33 went."), 540)
S["r04-f10"]=lambda: f_scene(900,420, people=[("marek",320,180,{"seated":True})],
    props=[("desk",210,0,1.35),("computer",290,145,0.58),("essay",430,208,0.3),
    ("calculator",500,210,0.26),("note",560,212,0.2)])
S["r04-f11"]=lambda: f_realia(tbl("Two statements","One payment",
    ["Sender's statement","Receiver's statement"],
    [["Payment out &mdash; 4,000<br>Transfer fee &mdash; 12<br>&mdash;<br>&mdash;<br>"
      "<b>Total debited 4,012</b><br><br><i>Three figures that are not here.</i>",
      "Credit received &mdash; <b>3,841</b><br>Correspondent charge &mdash; 33<br>"
      "Receiving charge &mdash; 18<br>FX applied &mdash; rate and date shown<br>"
      "<b>Nothing showing the spread, which is the largest part.</b>"]]), 540)
S["r04-f12"]=lambda: f_realia(doc("Two emails", None,
    "<p><b>A.</b> Your statement does not agree with our payment records. Please explain the "
    "discrepancy and confirm the correct balance.</p>"
    "<p style='font-size:12px;color:#6b6861'>Two lines, and it starts from fault. The reply will "
    "be a defense.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>We send 4,000. You receive 3,841.</b> The gap is 159 "
    "a month, about 4.0 percent, and about 1,900 a year. Where it goes, as far as we can trace "
    "it: about 96 rate spread, 33 an intermediary bank, 30 disclosed fees. <b>Only the last line "
    "appears on our statement</b>, which is why it took eleven months. From the June payment: we "
    "pay in your currency, you invoice in it, and we use a visible-fee route. <b>I am not asking "
    "you to reduce your price and I am not going back over the eleven months.</b></p>"))
S["r04-f13"]=lambda: f_realia(form("Reconciliation planner",
    [("What we sent",""),("What arrived",""),("Deduction 1",""),("Deduction 2",""),
     ("Deduction 3",""),("What I propose &mdash; three lines and a date",""),
     ("<b>What I am not asking for</b>","")]), 520)
S["r04-f14"]=lambda: f_scene(1000,450, people=[("marek",150,180,{"seated":True}),
    ("nour",240,168,{"seated":True}),("ines",330,172,{"seated":True}),
    ("hanna",430,172,{}),("yara",520,172,{}),("okonjo",610,182,{}),
    ("paula",700,170,{}),("sofia",790,172,{}),("wei",870,170,{}),("chiamaka",950,172,{})],
    props=[("desk",100,0,1.2),("computer",190,140,0.45),("calculator",260,196,0.26),
    ("printer",640,205,0.48),("invoice",760,150,0.36),("cafe",900,205,0.48)],
    board=(400,20,170,110,"RATES",[("EUR/KES","two rates")]))
S["r04-f15"]=lambda: f_chart([("I do not know",7),("we do",6),("the supplier does",4),
    ("we share them",3),("we do not pay abroad",2)])
S["r04-f16"]=lambda: f_scene(860,410, people=[],
    props=[("desk",240,0,1.3),("essay",300,205,0.32),("essay",370,208,0.32),
    ("receipt",440,210,0.26),("computer",510,145,0.48),("calendar",150,110,0.5)],
    window_=(640,56,110,96))

# ---------------- Unit 5 · Reporting Up ----------------
S["r05-f1"]=lambda: f_icons([("coins","money"),("scales","quantity"),
    ("pricetag","price up"),("carton","more boxes"),("review","two shapes"),
    ("magnifier","a footnote"),("data","a revised forecast"),("calendar","a quarter"),
    ("essay","a report"),("meeting","two lines, one page")], cols=5)
S["r05-f2"]=lambda: f_scene(920,430, people=[("paula",280,170,{}),
    ("okonjo",460,182,{"seated":True}),("marek",550,180,{"seated":True}),
    ("hanna",640,172,{"seated":True}),("yara",720,172,{"seated":True})],
    board=(780,24,140,120,"VALUE / VOLUME",[("+14%","value"),("3.3%","volume")]),
    props=[("table",420,250,1.4),("note",350,196,0.26)])
S["r05-f3"]=lambda: f_icons([("pricetag","the same thing, dearer"),("carton","twice as many"),
    ("scales","price up, quantity flat"),("stars","fewer units, more money"),
    ("sad","more units, less money"),("data","two lines crossing")], cols=3)
S["r05-f4"]=lambda: f_realia(tbl("","Money or things?",
    ["The figure","Money or things","The decision it is used for"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>Is it the right measure for that decision?</b>"), 520)
S["r05-f5"]=lambda: f_realia(doc("Arvo Components &middot; market note for the board",
    "P. Moreau &middot; 20 October &middot; one slide",
    table_html(["","Figure","What it counts"],
      [["Commercial services trade, Q1 2026","<b>+14% year on year</b>","<b>value</b> &mdash; money"],
       ["Commercial services trade, Q2 2026","about +10%","value &mdash; money"],
       ["Services trade, 2025","9.56 trillion dollars, up 8%","value &mdash; money"],
       ["<b>Volume forecast, 2026</b>","<b>3.3%, cut from 4.8%</b>",
        "<b>volume</b> &mdash; activity"],
       ["Volume growth, 2025, actual","5.3%","volume &mdash; activity"],
       ["Fastest in 2026","Europe 4.6%, Asia 4.0%, Africa 3.1%","volume"]])
    + "<p style='background:#fff3cf'><b>Value counts money, volume counts activity, and prices are "
    "the gap.</b> Our capacity decision is a volume decision, so the number that matters is "
    "<b>3.3 percent, cut from 4.8</b> &mdash; not the 14 percent.</p>",
    "WTO, Global Trade Outlook and Statistics, October 2026 update. Both figures are from this one "
    "publication, four pages apart."))
S["r05-f6"]=lambda: f_realia(tbl("Word study","Reporting verbs, by what they commit you to",
    ["Group","Verbs","Example"],
    [["<b>neutral</b>","say, state, report, note","The update <b>reports that</b> value rose 14%."],
     ["<b>cautious</b>","suggest, indicate, estimate","The data <b>suggest that</b> price is most of it."],
     ["<b>strong</b>","show, demonstrate, confirm",
      "The table <b>shows that</b> volume growth was revised down."],
     ["<b>conceding</b>","acknowledge, concede, admit",
      "They <b>acknowledge that</b> travel disruption affected Q2."],
     ["<b>attributing</b>","attribute X to Y","They <b>attribute</b> the slowdown <b>to</b> disruption."]],
    note="Choose the verb for the evidence, not for the effect. A strong verb on a weak inference "
    "is the commonest unintentional dishonesty in professional writing."), 540)
S["r05-f7"]=lambda: f_chart([("value, Q1 2026",14.0),("value, Q2 2026",10.0),
    ("volume, 2025 actual",5.3),("volume, 2026 forecast",3.3)],
    unit="% &mdash; value counts money, volume counts activity, prices are the gap. The 2026 "
    "volume forecast was cut from 4.8%", w=540)
S["r05-f8"]=lambda: f_icons([("coins","a money chart"),("scales","a quantity chart"),
    ("data","a crossed-out forecast"),("pricetag","the price"),
    ("stamp","a date"),("magnifier","one sentence")], cols=3)
S["r05-f9"]=lambda: f_realia(doc("Arvo Components &middot; board paper, extract",
    "capacity decision &middot; P. Moreau &middot; 20 October",
    "<p style='font-size:38px;font-weight:700;margin:4px 0'>3.3%</p>"
    "<p style='font-size:15px;margin-top:-4px'><b>volume</b> growth forecast for 2026, "
    "<b>cut from 4.8%</b></p>"
    "<p style='font-size:13px;color:#6b6861'>The same publication reports services trade up "
    "<b>14 percent in value</b> year on year in Q1 and about 10 percent in Q2.</p>"
    "<p style='background:#fff3cf'><b>Value counts money. Volume counts activity. Prices are the "
    "gap.</b></p>"
    "<p><b>This paper supports one decision:</b> whether to lease two additional vehicles. That is "
    "a volume decision.</p>",
    "WTO Global Trade Outlook and Statistics, October 2026 update. The volume forecast has already "
    "moved once this year, by 1.5 points in three months."))
S["r05-f10"]=lambda: f_scene(900,420, people=[("okonjo",330,182,{"seated":True}),
    ("paula",470,170,{"seated":True})],
    props=[("table",400,250,1.4),("note",360,196,0.26),("pen",440,200,0.2)],
    board=(730,24,170,120,"TWO CHARTS",[("value","+14%"),("volume","3.3%")]))
S["r05-f11"]=lambda: f_realia(tbl("Two slides","The same publication",
    ["Value first","Volume first"],
    [["<b>Our market grew 14%</b><br><span style='font-size:11px'>services trade, Q1</span><br><br>"
      "<i>No label, no date, no mention of the volume cut. In March, two vehicles sit in the "
      "yard.</i>",
      "<b>3.3% volume growth forecast, cut from 4.8%</b><br>"
      "<span style='font-size:11px'>WTO, October 2026 update</span><br>"
      "Value growth was +14% in Q1 &mdash; money, not activity.<br>"
      "<i>Value counts money. Volume counts activity. Prices are the gap.</i>"]]), 540)
S["r05-f12"]=lambda: f_realia(doc("Two market notes", None,
    "<p><b>A.</b> Our market grew by 14 percent, the strongest figure for several years, which "
    "supports the planned capacity increase.</p>"
    "<p style='font-size:12px;color:#6b6861'>No label, no date, and the wrong measure for the "
    "decision in question.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>Services trade volume growth for 2026 is forecast at "
    "3.3 percent, revised down from 4.8.</b> Actual volume growth in 2025 was 5.3 percent. "
    "<b>Volume growth is slowing.</b> The same publication reports trade up <b>14 percent in "
    "value</b> in Q1 and about 10 percent in Q2. <b>Value counts money. Volume counts activity. "
    "Prices are the gap.</b> Both figures are from the October 2026 update. The capacity decision "
    "is a volume decision.</p>"))
S["r05-f13"]=lambda: f_realia(form("Market-note planner",
    [("The figure the decision needs &mdash; labeled",""),("The other figure &mdash; labeled",""),
     ("The difference, in three short sentences",""),
     ("What the change is attributed to, and by whom",""),
     ("The recommendation, and why it is cautious",""),("The publication date","")]), 520)
S["r05-f14"]=lambda: f_scene(1000,450, people=[("paula",160,170,{}),
    ("okonjo",280,182,{"seated":True}),("marek",370,180,{"seated":True}),
    ("hanna",460,172,{"seated":True}),("yara",550,172,{"seated":True}),
    ("nour",640,168,{"seated":True}),("chiamaka",730,172,{"seated":True}),
    ("ravi",820,176,{}),("wei",890,170,{}),("ines",960,172,{})],
    props=[("table",300,250,1.6),("note",380,196,0.26),("computer",470,196,0.36),
    ("cafe",860,205,0.5),("essay",80,110,0.3),("flipchart",220,46,0.8)],
    board=(560,20,170,110,"VALUE / VOLUME",[("circled","volume")]))
S["r05-f15"]=lambda: f_chart([("value",8),("I do not know",6),("both",4),
    ("volume",3),("we do not report growth",2)])
S["r05-f16"]=lambda: f_scene(880,420, people=[],
    props=[("desk",240,0,1.3),("note",300,208,0.24),("computer",400,145,0.5),
    ("essay",490,210,0.3),("pallet",700,0,0.65),("crate",780,0,0.7)],
    window_=(620,56,110,96))

# ---------------- Unit 6 · Gifts, Favors and the Line ----------------
S["r06-f1"]=lambda: f_icons([("ticket","two tickets"),("key","a hotel card"),
    ("bag","a gift bag"),("canteen","dinner for four"),("badge","a paid badge"),
    ("form","a declaration"),("notebook","a register"),("essay","a policy"),
    ("phone","a call to a manager"),("noentry","politely refused")], cols=5)
S["r06-f2"]=lambda: f_scene(900,420, people=[("ravi",330,176,{"seated":True})],
    props=[("desk",200,0,1.35),("envelope",280,208,0.26),("ticket",350,210,0.22),
    ("computer",450,145,0.5),("form",540,210,0.28)])
S["r06-f3"]=lambda: f_icons([("canteen","a working lunch"),("bag","a bottle at the end"),
    ("ticket","tickets"),("hotel","a weekend with travel"),
    ("application","a job for a relative"),("cash","a payment to speed things up")], cols=3)
S["r06-f4"]=lambda: f_realia(tbl("","Where is the line?",
    ["Clearly fine","&rarr;","&rarr;","&rarr;","&rarr;","&rarr;","Clearly not"],
    [["a coffee","a working lunch","a bottle of wine","a dinner for two","tickets worth 400",
      "a weekend with travel","a job for your nephew"],
     ["","","","","","",""]],
    note="Draw the line. <b>What would move it:</b> the value, the timing, or who is offering?"),
    560)
S["r06-f5"]=lambda: f_realia(tbl("Brightwell Pharma &middot; gifts and hospitality register",
    "extract &middot; 2026 &middot; maintained by H. Lindqvist",
    ["Date","From","What","Value","Outcome","Action"],
    [["14 Feb","carrier","lunch, 3 people","60","accepted","registered"],
     ["2 Mar","lab supplier","calendar and pens","15","accepted","below threshold"],
     ["19 Apr","packaging supplier","<b>2 tickets, hotel, travel</b>","<b>about 400</b>",
      "<b>accepted, half paid by us</b>",
      "<b>registered; R. Menon recused from the September review</b>"],
     ["11 May","recruiter","dinner, 2 people","110","declined","registered"],
     ["3 Jun","customer","bottle of wine","25","accepted","below threshold"],
     ["20 Jul","contractor","<b>cash, 50, to expedite a permit</b>","<b>50</b>",
      "<b>declined and reported</b>","<b>escalated to the board</b>"]],
    note="<b>Threshold 100.</b> Anything above it is declared whether accepted or declined. Cash "
    "is never accepted, at any value, for any reason."), 560)
S["r06-f6"]=lambda: f_realia(tbl("Word study","Looking back at what should have happened",
    ["Form","Did it happen?","Example"],
    [["<b>should have + participle</b>","no, and it was a mistake","I <b>should have</b> declared it."],
     ["<b>shouldn't have + participle</b>","yes, and it was a mistake",
      "I <b>shouldn't have</b> accepted it."],
     ["<b>was supposed to</b>","no &mdash; an expectation unmet",
      "I <b>was supposed to</b> register it within a week."],
     ["<b>wasn't supposed to</b>","it was against the rule","He <b>wasn't supposed to</b> offer cash."],
     ["<b>needn't have + participle</b>","yes, and it was unnecessary",
      "I <b>needn't have</b> worried; it was 15."]],
    note="<i>I needn't have declared it</i> means you did. <i>I didn't need to declare it</i> "
    "means you did not. They say opposite things about whether anything happened."), 540)
S["r06-f7"]=lambda: f_chart([("Denmark, highest",89),("global average, 2025",42),
    ("global average, 2024",43),("South Sudan and Somalia",9)],
    unit="score out of 100 &mdash; the index measures PERCEPTIONS of public-sector corruption; "
    "122 of 182 countries score under 50", w=540)
S["r06-f8"]=lambda: f_icons([("ticket","two tickets"),("notebook","a register entry"),
    ("invoice","half the hotel"),("meeting","telling your manager"),
    ("transfer","the review handed over"),("noentry","cash pushed back")], cols=3)
S["r06-f9"]=lambda: f_realia(doc("Brightwell Pharma &middot; gifts and hospitality policy",
    "version 3 &middot; H. Lindqvist &middot; one page",
    "<p><b>Definitions.</b> <i>Gift</i>: anything of value given with nothing expected in return. "
    "<i>Hospitality</i>: anything consumed or used with the giver present. <i>Live commercial "
    "process</i>: a tender, review or renewal under way or due within six months.</p>"
    "<p>1. A gift over <b>100</b> <b>must</b> be declared, whether accepted or declined.<br>"
    "2. Hospitality over <b>150</b> <b>must</b> be declared on the same basis.<br>"
    "3. Cash <b>must never</b> be accepted, at any value, for any reason.<br>"
    "4. A facilitation payment <b>must never</b> be offered or paid, and any request for one "
    "<b>must</b> be reported.<br>"
    "5. Where the giver is in a live commercial process with you, you <b>must</b> declare it and "
    "<b>shall</b> be recused from that process.<br>"
    "6. Every declaration <b>shall</b> be recorded in the register within seven days.</p>"
    "<p><b>If you are unsure:</b> H. Lindqvist, extension 4450, before you accept rather than "
    "after.</p>",
    "<b>What this policy does not cover:</b> political donations, sponsorship, and charitable "
    "giving, which are in the finance delegations."))
S["r06-f10"]=lambda: f_scene(900,420, people=[("ravi",330,176,{}),("lars",470,180,{})],
    props=[("cafe",290,205,0.3),("envelope",400,208,0.24),("badge",560,150,0.3)],
    board=(720,24,170,110,"NOVAK PACKAGING",[("stand","4C")]))
S["r06-f11"]=lambda: f_realia(tbl("Two policies","The same subject",
    ["Three rules","Six rules"],
    [["1. Gifts must be declared.<br>2. Cash must not be accepted.<br>"
      "3. Staff should use their judgment.<br><br>"
      "<i>No figure. No mention of hospitality. No recusal. Nobody to ask.</i>",
      "Gifts over <b>100</b>; hospitality over <b>150</b>; cash never; facilitation payments never "
      "and reported; <b>recusal</b> where the giver is in a live process; register within seven "
      "days.<br><b>Ask H. Lindqvist, ext. 4450, before you accept.</b><br>"
      "<i>Plus a line on what the policy does not cover.</i>"]]), 540)
S["r06-f12"]=lambda: f_realia(doc("Two register entries", None,
    "<p><b>A.</b> 19 April &mdash; hospitality, supplier, accepted.</p>"
    "<p style='font-size:12px;color:#6b6861'>An auditor's first three questions: what was it, what "
    "was it worth, and were you in a process with them?</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>19 April &mdash; entry 2026-14.</b> Two tickets to the "
    "Ostberg Classic on 11 May, one hotel night and rail travel, from K. Novak of Novak Packaging, "
    "worked with since 2020. <b>Estimated 400</b> in total &mdash; tickets 240 from the printed "
    "face value, hotel 120, travel 40. Accepted; <b>Novak invoiced Brightwell for half the hotel "
    "and half the tickets</b>. Declared to H. Lindqvist the same morning, manager told in person. "
    "<b>Action: R. Menon recused from the September Novak contract review; I. Costa to conduct "
    "it.</b></p>"))
S["r06-f13"]=lambda: f_realia(form("Declaration planner",
    [("What was offered, and by whom",""),("Estimated value &mdash; and how I estimated it",""),
     ("What I did",""),("<b>Any decision this touches, and what I did about it</b>",""),
     ("What I should have done differently",""),
     ("One recommendation about the policy","")]), 520)
S["r06-f14"]=lambda: f_scene(1000,450, people=[("ravi",150,176,{}),("lars",240,180,{}),
    ("ines",340,172,{}),("nour",430,168,{}),("hanna",520,172,{}),
    ("marek",610,180,{}),("paula",700,170,{}),("sofia",790,172,{}),
    ("yara",870,172,{}),("okonjo",950,182,{})],
    props=[("badge",100,140,0.34),("envelope",200,196,0.22),("cafe",380,205,0.48),
    ("notebook",470,200,0.28),("bag",640,0,0.5),("essay",860,110,0.3),
    ("desk",730,0,1.0)],
    board=(260,24,150,110,"CODE OF CONDUCT",[("gifts","over 100")]))
S["r06-f15"]=lambda: f_chart([("yes but nobody writes in it",7),("I do not know",6),
    ("yes and it is used",4),("no",3),("we are not allowed to accept anything",2)])
S["r06-f16"]=lambda: f_scene(860,410, people=[],
    props=[("desk",240,0,1.3),("notebook",300,205,0.3),("essay",390,208,0.32),
    ("computer",470,145,0.48),("signature",550,210,0.22)],
    window_=(630,56,110,96))
