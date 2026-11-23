# -*- coding: utf-8 -*-
"""Clearline Book 2 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · Money Matters ----------------
S["p10-f1"]=lambda: f_icons([("invoice","an invoice"),("calendar","a due date"),
    ("statement","a bank statement"),("envelope","a reminder"),("receipt","a credit note"),
    ("phone","a call"),("cash","a cash drawer"),("essay","a loan agreement"),
    ("spreadsheet","overdue amounts"),("noentry","a delivery held back")], cols=5)
S["p10-f2"]=lambda: f_scene(900,420, people=[("marek",330,180,{"seated":True})],
    props=[("desk",190,0,1.35),("computer",250,145,0.55),("essay",450,205,0.4),
    ("calculator",530,205,0.35),("window",760,150,0.9)])
S["p10-f3"]=lambda: f_icons([("address","the wrong address"),("refnumber","no order number"),
    ("signature","no signature on the note"),("calendar","a holiday"),
    ("overdraft","their own cash problem"),("tally","counted on fingers")], cols=3)
S["p10-f4"]=lambda: f_realia(tbl("","Why was it late?",
    ["Our mistake","Their choice"],
    [["",""],["",""],["",""],["",""],["",""]],
    note="<b>Cheapest to fix:</b>"), 500)
S["p10-f5"]=lambda: f_realia(tbl("Lindmark Freight &middot; aged debt",
    "28 February &middot; terms 30 days &middot; average time to payment 41 days",
    ["Customer","Invoiced","Not yet due","1&ndash;30 over","30+ over"],
    [["Ostberg Retail","42,100","28,400","13,700","&mdash;"],
     ["Vandermeer","11,250","11,250","&mdash;","&mdash;"],
     ["Harbour Mutual","8,900","&mdash;","4,200","<b>4,700</b>"],
     ["Juno Textiles","19,600","12,000","7,600","&mdash;"],
     ["Teval Transport","6,400","&mdash;","&mdash;","<b>6,400</b>"],
     ["Salas Transport","14,300","9,100","5,200","&mdash;"],
     ["Sable &amp; Finch","3,750","3,750","&mdash;","&mdash;"],
     ["Terrace Hotels","22,800","14,000","5,300","3,500"],
     ["<b>Total</b>","<b>129,100</b>","<b>78,500</b>","<b>36,000</b>","<b>14,600</b>"]],
    note="39 per cent of the ledger is overdue. Two customers are wholly over 30 days."), 560)
S["p10-f6"]=lambda: f_realia(tbl("Word study","The first conditional",
    ["<i>if</i> + present simple","&rarr;","the result"],
    [["If they pay late,","&rarr;","we <b>will</b> use the overdraft."],
     ["If the order number is missing,","&rarr;","they <b>won't</b> pay it."],
     ["If we chase earlier,","&rarr;","we <b>might</b> collect sooner."],
     ["If it isn't paid by Friday,","&rarr;","<b>put</b> the account on hold."],
     ["<b>Unless</b> February is settled,","&rarr;","we <b>won't</b> deliver."]],
    note="The comma appears only when the <i>if</i> clause comes first. No <i>will</i> inside "
    "the <i>if</i> clause."), 520)
S["p10-f7"]=lambda: f_chart([("United States",29),("United Kingdom",21),("Europe",18),
    ("Netherlands",12)],
    unit="days of delay BEYOND AGREED TERMS &mdash; terms differ by country, so these bars "
    "are not directly comparable", w=540)
S["p10-f8"]=lambda: f_icons([("phone","a call and a list"),("invoice","a missing field"),
    ("calendar","the eighteenth"),("noentry","a delivery stopped"),
    ("overdraft","the overdraft"),("handshake","a payment plan")], cols=3)
S["p10-f9"]=lambda: f_realia(doc("Lindmark Freight &middot; reminder",
    "Invoice 4471 &middot; 13,700 &middot; due 14 February",
    "<p>Dear Mr Ostberg,</p>"
    "<p>Invoice 4471 for 13,700 was due on 14 February and is now 28 days overdue. I have had no "
    "query, so I am writing in case something is stopping it rather than assuming it has been "
    "overlooked.</p>"
    "<p>1. The invoice quotes your order number <b>PO-88431</b> &mdash; if that is not the "
    "current number, tell me and I will reissue it today.<br>"
    "2. It was sent to accounts@ostbergretail.example &mdash; if invoices should go elsewhere, "
    "I will change it on the account.</p>"
    "<p><b>If payment is not received by Friday 22 March, the account will go on hold</b> and I "
    "will need to confirm each delivery with you individually until it clears. I can take it off "
    "hold the same day you pay.</p>"
    "<p>Of the invoices we chased last half-year, about a third were held up by a missing order "
    "number on <b>our</b> documents. If that is what has happened, it is our mistake and I will "
    "fix it within the hour.</p>"
    "<p>Marek Dolny &bull; Credit control &bull; direct <b>+44 20 7946 0148</b></p>",
    "A payment date is all I need."))
S["p10-f10"]=lambda: f_scene(900,420, people=[("marek",300,180,{"seated":True}),
    ("okonjo",560,182,{})],
    props=[("desk",190,0,1.35),("computer",250,145,0.52),("essay",420,205,0.4),
    ("headset",490,205,0.34),("folder",640,150,0.4)])
S["p10-f11"]=lambda: f_realia(tbl("Same month, two sorts","Which three do you call first?",
    ["Sorted by name","Sorted by amount overdue"],
    [["Harbour Mutual &mdash; 4,700<br>Juno Textiles &mdash; 7,600<br>"
      "Ostberg Retail &mdash; 13,700<br>Sable &amp; Finch &mdash; 0<br>"
      "Salas Transport &mdash; 5,200<br>Terrace Hotels &mdash; 8,800<br>"
      "Teval Transport &mdash; 6,400<br>Vandermeer &mdash; 0",
      "<b>Ostberg Retail &mdash; 13,700</b><br>Terrace Hotels &mdash; 8,800<br>"
      "Juno Textiles &mdash; 7,600<br>Teval Transport &mdash; 6,400<br>"
      "Salas Transport &mdash; 5,200<br>Harbour Mutual &mdash; 4,700<br>"
      "Sable &amp; Finch &mdash; 0<br>Vandermeer &mdash; 0"]],
    note="Same totals. One list tells you what to do this morning."), 540)
S["p10-f12"]=lambda: f_realia(doc("Two reminders", None,
    "<p><b>A.</b> Dear Sir or Madam, We note that our invoice remains unpaid. We would be "
    "grateful for your early attention to this matter. Yours faithfully.</p>"
    "<p style='font-size:12px;color:#6b6861'>No invoice number, no amount, no date, no "
    "consequence. It will be filed.</p>"
    "<p style='margin-top:14px'><b>B.</b> Invoice 4471, 13,700, due 14 February, 28 days "
    "overdue. Two things to check at your end: the order number we quoted (PO-88431) and the "
    "address we sent it to. <b>If payment is not received by Friday 22 March the account goes on "
    "hold.</b> About a third of the invoices we chase are held up by a missing order number on "
    "our own documents &mdash; if that is the case here, tell me and I will reissue within the "
    "hour. Direct line +44 20 7946 0148. A payment date is all I need.</p>"))
S["p10-f13"]=lambda: f_realia(form("Reminder planner",
    [("Invoice number",""),("Amount",""),("Due date",""),("Days overdue",""),
     ("Two things for the customer to check","1. ______________  2. ______________"),
     ("The consequence, with a date",""),
     ("<b>What might be our own mistake</b>","")]), 520)
S["p10-f14"]=lambda: f_scene(1000,450, people=[("marek",150,180,{"seated":True}),
    ("nour",240,168,{"seated":True}),("ines",330,172,{"seated":True}),
    ("hanna",430,172,{}),("yara",520,172,{}),("okonjo",610,182,{}),
    ("paula",700,170,{}),("sofia",790,172,{}),("wei",880,170,{}),("chiamaka",960,172,{})],
    props=[("desk",100,0,1.2),("computer",180,140,0.45),("printer",470,205,0.5),
    ("spreadsheet",600,135,0.5),("cash",760,205,0.38),("carton",870,0,0.55)],
    board=(260,24,160,100,"THIS MONTH",[("overdue","39%"),("on hold","2")]))
S["p10-f15"]=lambda: f_chart([("30 days",9),("60 days",5),("14 days",3),
    ("payment in advance",2),("90 days or more",2)])
S["p10-f16"]=lambda: f_scene(880,420, people=[("marek",300,180,{"seated":True,"smile":False})],
    props=[("desk",220,0,1.3),("essay",290,205,0.4),("computer",400,145,0.5),
    ("door",700,80,0.9),("truck",790,0,0.55)],
    clockat=(160,60,20,18,20), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 11 · Safety at Work ----------------
S["p11-f1"]=lambda: f_icons([("helmet","a hard hat"),("hivis","a vest"),
    ("shoes","safety boots"),("gloves","gloves"),("fireexit","a fire door"),
    ("firealarm","an extinguisher"),("walkroute","an exit route"),
    ("wetfloor","a wet floor"),("firstaid","a first-aid box"),
    ("form","an accident report")], cols=5)
S["p11-f2"]=lambda: f_scene(900,420, people=[("junseo",420,172,{}),("anders",680,182,{})],
    props=[("proppeddoor",330,0,0.95),("crate",470,0,0.6),("racking",120,40,0.9),
    ("wall",800,60,0.85)], panelbg="#2b3340", floorbg="#39404c")
S["p11-f3"]=lambda: f_icons([("proppeddoor","a wedged door"),("cloud","smoke in a corridor"),
    ("pallet","a blocked route"),("essay","a printed rule"),
    ("induction","a signed induction"),("handsup","being shown the reason")], cols=3)
S["p11-f4"]=lambda: f_realia(tbl("","The rule everybody breaks",
    ["The rule","Why people break it","What would make it easy"],
    [["","",""],["","",""],["","",""],["","",""]]), 520)
S["p11-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; site induction, Ostberg",
    "issue 7 &middot; page 2 of 4",
    "<p><b>You must</b><br>"
    "1. wear a high-visibility vest everywhere beyond the blue line;<br>"
    "2. wear safety boots in the racking bay and on the loading dock;<br>"
    "3. wear a hard hat in the racking bay;<br>"
    "4. report every incident <b>and every near miss</b> on the day it happens;<br>"
    "5. walk in the marked walkways when a forklift is moving.</p>"
    "<p><b>You must not</b><br>"
    "6. prop open any fire door, at any time, for any reason;<br>"
    "7. block an emergency route, even for a minute;<br>"
    "8. operate a forklift without a current license;<br>"
    "9. move a load you cannot see over.</p>"
    "<p><b>You need not</b> wear a hard hat in the office, the packing bay or the corridor, and "
    "you need not wear gloves for carton handling unless the carton is damaged.</p>"
    "<p style='background:#fff3cf'><b>Why the fire door matters.</b> FD-3 holds smoke on one "
    "side of the building for about thirty minutes. The emergency route from the packing bay, "
    "where four people work, runs along the corridor on the far side. Held open, the door does "
    "the opposite of its job.</p>",
    "Signed ______________ &nbsp;&nbsp; Date ______________ &nbsp;&nbsp; "
    "Inducted by ______________"))
S["p11-f6"]=lambda: f_realia(tbl("Word study","Four meanings, four forms",
    ["Meaning","Form","Example"],
    [["necessary","<i>must</i> / <i>have to</i>","You <b>must</b> wear a vest."],
     ["not necessary","<i>needn't</i> / <i>don't have to</i>",
      "You <b>needn't</b> wear a hat here."],
     ["forbidden","<i>mustn't</i> / <i>not allowed to</i>",
      "You <b>mustn't</b> prop the door."],
     ["allowed","<i>can</i> / <i>may</i>","You <b>can</b> use the side gate."]],
    note="<i>Mustn't</i> and <i>needn't</i> are the pair everybody confuses. Never on a sign."),
    520)
S["p11-f7"]=lambda: f_part("2.93 million work-related deaths a year",
    [("from disease",2.6,BLUE),("from accidents",0.33,AMBER)], w=540)
S["p11-f8"]=lambda: f_icons([("proppeddoor","a propped fire door"),
    ("pallet","a pallet in the walkway"),("forklift","no vest on a forklift"),
    ("racking","stacked above head height"),("wetfloor","a spill, no sign"),
    ("carton","a load you can't see over")], cols=3)
S["p11-f9"]=lambda: f_realia(form("Near-miss report NM-2024-031",
    [("Date and time","12 March, 14:20"),("Place","Corridor C, fire door FD-3"),
     ("What happened","FD-3 found wedged open with a wooden block while a loaded trolley was "
      "taken through. Open about four minutes. No injury."),
     ("What could have happened",
      "FD-3 holds smoke out of corridor C for ~30 min. Corridor C is the emergency route from "
      "the packing bay, where four people work."),
     ("Immediate action","Wedge removed. Trolley taken through at an angle by two people."),
     ("<b>Root cause</b>","<b>Carelessness.</b>"),
     ("<b>Action to prevent it</b>","")],
    note="Two words in the root cause box. Nothing at all in the box below it."), 540)
S["p11-f10"]=lambda: f_scene(920,420, people=[("anders",330,182,{}),("junseo",480,172,{})],
    props=[("proppeddoor",240,0,0.95),("clipboard",390,150,0.4),("crate",560,0,0.6),
    ("essay",700,120,0.4),("racking",820,40,0.85)],
    panelbg="#2b3340", floorbg="#39404c")
S["p11-f11"]=lambda: f_realia(tbl("Two reports","The same four minutes",
    ["Cause: human error","Cause: a dimension mismatch"],
    [["<b>Root cause</b> carelessness<br><b>Action</b> staff reminded<br>"
      "<b>Owner</b> &mdash;<br><b>By</b> &mdash;<br><br>"
      "<i>It happened again in six weeks.</i>",
      "<b>Root cause</b> doorway 900 mm, trolley 920 mm. The job cannot be done by one person "
      "without propping the door. Known since March 2023.<br>"
      "<b>Action</b> order two 850 mm trolleys (about 200 euros each)<br>"
      "<b>Owner</b> A. Holm<br><b>By</b> 22 Mar"]],
    note="One report blames a person. The other buys a trolley."), 540)
S["p11-f12"]=lambda: f_realia(doc("Two near-miss reports", None,
    "<p><b>A.</b> Fire door found propped. Cause: carelessness. Action: staff reminded of the "
    "rule.</p>"
    "<p style='font-size:12px;color:#6b6861'>Twelve words. Nothing has changed, so it will "
    "happen again.</p>"
    "<p style='margin-top:14px'><b>B.</b> FD-3 wedged open about four minutes while a loaded "
    "trolley was taken through. <b>Root cause:</b> the doorway is 900 mm and the trolley is "
    "920 mm; the job cannot be done by one person without propping the door. The mismatch has "
    "existed since the trolleys were bought in March 2023 and has been known to the writer of "
    "this report since then. <b>Contributing cause:</b> the induction states the rule for FD-3 "
    "and not its purpose; two inductions were delivered to this employee without the reason being "
    "given.</p>"
    + table_html(["Action","Owner","By"],
      [["Order two 850 mm trolleys (about 200 euros each)","A. Holm","22 Mar"],
       ["Add the purpose of each fire door to the induction","A. Holm","29 Mar"],
       ["Measure every door and trolley on site; list mismatches","Y. Haddad","5 Apr"]])))
S["p11-f13"]=lambda: f_realia(form("Near-miss planner",
    [("What happened",""),("What could have happened",""),("Immediate action",""),
     ("Root cause &mdash; why?","1. ______________"),
     ("&nbsp;&nbsp;&nbsp;why?","2. ______________"),
     ("&nbsp;&nbsp;&nbsp;why?","3. ______________"),
     ("Contributing cause",""),
     ("Actions &mdash; what / who / by when","")],
    note="Keep asking <i>why</i> until you reach something you can buy, build or measure."), 520)
S["p11-f14"]=lambda: f_scene(1000,450, people=[("anders",150,182,{}),("junseo",250,172,{}),
    ("nour",350,168,{}),("ravi",450,176,{}),("yara",540,172,{}),
    ("tomas",630,176,{}),("ines",720,172,{}),("wei",810,170,{}),
    ("marek",890,180,{}),("okonjo",960,182,{})],
    props=[("forklift",100,0,0.8),("walkroute",300,205,0.5),("racking",560,40,0.95),
    ("fireexit",680,100,0.5),("wetfloor",760,205,0.4),("firstaid",860,120,0.42),
    ("pallet",420,0,0.7)],
    board=(200,24,150,100,"SAFETY",[("near misses","19"),("injuries","0")]),
    panelbg="#2b3340", floorbg="#39404c")
S["p11-f15"]=lambda: f_chart([("on the job, by a colleague",8),("a talk",5),
    ("a talk plus a walk round",4),("a written document only",3),("no training",2)])
S["p11-f16"]=lambda: f_scene(880,420, people=[],
    props=[("fireexit",330,110,0.55),("crate",220,0,0.6),("crate",300,0,0.6),
    ("crate",700,0,0.7),("racking",820,40,0.85),("essay",420,110,0.4)],
    panelbg="#2b3340", floorbg="#39404c")

# ---------------- Unit 12 · Looking Back, Looking Forward ----------------
S["p12-f1"]=lambda: f_icons([("calendar","the year ends"),("stars","a rise"),
    ("sad","a fall"),("essay","a report"),("invoice","a year of invoices"),
    ("handshake","a contract"),("warehouse","a new site"),
    ("carton","somebody leaving"),("certificate","training"),
    ("inventory","ticks and crosses")], cols=5)
S["p12-f2"]=lambda: f_scene(900,420, people=[("paula",330,170,{"seated":True})],
    props=[("desk",190,0,1.35),("essay",260,205,0.4),("essay",370,205,0.4),
    ("computer",470,145,0.5),("pen",550,208,0.28),("window",760,150,0.9)])
S["p12-f3"]=lambda: f_icons([("review","56% and 55.0%"),("calendar","months apart"),
    ("note","different methods"),("data","an unlabelled axis"),
    ("magnifier","the footnote"),("pen","a sentence underneath")], cols=3)
S["p12-f4"]=lambda: f_realia(tbl("","The year in three numbers",
    ["","The number","Where it came from"],
    [["Rose","",""],["Fell","",""],["<b>Not sure</b>","",""]],
    note="<b>What I would write beside the uncertain one:</b>"), 500)
S["p12-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; the year in review",
    "draft for the board &middot; P. Moreau &middot; 11 December",
    "<p><b>1. What we set out to do.</b> Cut average days-to-payment below 36; hold carton cost "
    "flat; renew or replace the Ostberg lease without a gap.</p>"
    "<p><b>2. What happened.</b></p>"
    + table_html(["","Target","Result"],
      [["Average days to payment","under 36","<b>34</b>"],
       ["Carton unit cost","1.38 flat","<b>1.38</b>"],
       ["Ostberg lease","no gap","<b>notice served, new site from July</b>"]])
    + "<p><b>3. What we learned.</b> The policy worked and the exception did not exist. Both of "
    "those are findings.</p>"
    "<p style='background:#fff3cf'><b>4. The market, and a problem with it.</b> Two 2026 reports "
    "give different answers for the same measure. One puts digitally delivered services at "
    "<b>56 per cent</b> of global services exports, growing <b>7.1 per cent</b> a year. The other "
    "puts the share at <b>55.0 per cent</b> and the growth at <b>10.0 per cent</b>. The shares "
    "agree. The growth rates do not: over five years they differ by roughly a fifth of the "
    "market. I have planned on 7.1 per cent because it is the more conservative figure, and I am "
    "recording here that the planning figure was a choice.</p>",
    "Sources: both reports named in full in Annex A. Neither has been adjusted."))
S["p12-f6"]=lambda: f_realia(tbl("Word study","Background and event",
    ["Pattern","Use","Example"],
    [["<b>was / were + -ing</b>","the longer background",
      "We <b>were chasing</b> earlier all year."],
     ["<b>past simple</b>","the shorter, completed event","We <b>lost</b> one customer."],
     ["<i>while</i> + continuous","one crosses the other",
      "<b>While</b> we <b>were chasing</b>, we <b>lost</b> a customer."],
     ["<i>when</i> + simple","the background at that moment",
      "<b>When</b> they <b>went</b> on hold, they <b>were waiting</b> to be paid."],
     ["two continuous","two long things at once",
      "While the invoices <b>were being checked</b>, the error rate <b>was falling</b>."]]), 520)
S["p12-f7"]=lambda: f_line([("now",100),("yr 1",107.1),("yr 2",114.7),("yr 3",122.9),
    ("yr 4",131.6),("yr 5",141.0)], w=560,
    unit="index, today = 100 &mdash; at 7.1% a year it reaches 141; at 10.0% it reaches 161",
    mark=("yr 5","141 against 161"), ymin=90)
S["p12-f8"]=lambda: f_icons([("stars","a target crossed"),("inventory","an empty slot"),
    ("warehouse","a new site"),("crate","two narrow trolleys"),
    ("data","a tall near-miss bar"),("calendar","January")], cols=3)
S["p12-f9"]=lambda: f_realia(doc("Lindmark Freight &middot; board paper",
    "the year, and next year &middot; one page &middot; annex attached",
    table_html(["","Target","Result"],
      [["Days to payment","under 36","34"],["Carton cost","1.38","1.38"],
       ["Lease","no gap","new site from July"]])
    + "<p><b>What we did not plan.</b> While we were fixing the invoice process the order-number "
    "error rate fell by about two thirds. In the same period we lost one customer: Salas "
    "Transport went on hold automatically in July, under the rule we wrote, while they were "
    "themselves waiting to be paid by a third party.</p>"
    "<p><b>What we learned.</b> A policy with no exception is easier to defend and harder to live "
    "with. The figure that improved most was the one nobody set a target for.</p>"
    "<p style='background:#fff3cf'><b>Next year.</b> Two 2026 reports give the share as 56% and "
    "55.0% &mdash; effectively the same &mdash; and the growth as <b>7.1%</b> and <b>10.0%</b>, "
    "which is not. Planned on 7.1%.</p>",
    "<b>Review point:</b> June, against our own order book, which by then will be better "
    "evidence than either report."))
S["p12-f10"]=lambda: f_scene(920,430, people=[("paula",280,170,{}),
    ("okonjo",470,182,{"seated":True}),("hanna",560,172,{"seated":True}),
    ("marek",650,180,{"seated":True})],
    props=[("table",420,250,1.4),("essay",380,196,0.4),("computer",520,196,0.4)],
    board=(760,24,150,110,"FIVE YEARS",[("7.1%","141"),("10.0%","161")]))
S["p12-f11"]=lambda: f_realia(tbl("Two versions of one page","The same year",
    ["Four sections","Three sections"],
    [["1 what we set out to do<br>2 what happened<br>"
      "<b>3 what we did not plan &mdash; incl. Salas</b><br>"
      "4 what we learned<br><b>+ two percentages, and the choice named</b>",
      "1 what we set out to do<br>2 what happened<br>3 what we learned<br>"
      "<i>no Salas paragraph</i><br><b>one percentage, presented as a fact</b>"]],
    note="The second page is shorter, cleaner, and will be wrong in June without anybody "
    "knowing why."), 540)
S["p12-f12"]=lambda: f_realia(doc("Two one-page reviews", None,
    "<p><b>A.</b> A strong year. All three targets were achieved, collections improved markedly, "
    "and the new site is secured. The market for digitally delivered services stands at 56 per "
    "cent and is growing at over seven per cent a year, which positions us well.</p>"
    "<p style='font-size:12px;color:#6b6861'>One percentage, no setback, nothing anybody can "
    "check.</p>"
    "<p style='margin-top:14px'><b>B.</b> Three targets, three results: 34 days against under 36; "
    "1.38 against 1.38; notice served in March and the new site occupied from July. While we were "
    "fixing the invoice process the order-number error rate fell by about two thirds &mdash; a "
    "better result than the policy itself. In the same period we lost one customer, under our own "
    "rule, and I would write the rule again. Next year's growth is given as 7.1 per cent by one "
    "report and 10.0 by another; I have planned on 7.1 and will review in June against our own "
    "order book.</p>"))
S["p12-f13"]=lambda: f_realia(tbl("","One-page review planner",
    ["","Target","Result"],
    [["","",""],["","",""],["","",""]],
    note="<b>What we did not plan:</b> ______________ &nbsp;&bull;&nbsp; "
    "<b>What we learned:</b> ______________ &nbsp;&bull;&nbsp; "
    "<b>Next year, with a figure:</b> ______________ &nbsp;&bull;&nbsp; "
    "<b>When I will check whether I was wrong:</b>"), 520)
S["p12-f14"]=lambda: f_scene(1000,450, people=[("paula",150,170,{}),
    ("okonjo",250,182,{"seated":True}),("hanna",340,172,{"seated":True}),
    ("marek",430,180,{"seated":True}),("yara",520,172,{"seated":True}),
    ("nour",610,168,{}),("anders",700,182,{}),("wei",790,170,{}),
    ("ines",870,172,{}),("ravi",960,176,{})],
    props=[("table",200,250,1.5),("computer",300,196,0.4),("carton",640,0,0.55),
    ("carton",720,0,0.55),("cafe",830,205,0.55),("essay",480,196,0.36)],
    board=(560,20,170,110,"THE YEAR",[("targets","3 / 3"),("next year","7.1%")]),
    window_=(900,56,90,96))
S["p12-f15"]=lambda: f_chart([("a little better",8),("about the same",6),
    ("much better than last year",4),("a little worse",3),("much worse",2)])
S["p12-f16"]=lambda: f_scene(860,410, people=[],
    props=[("desk",240,0,1.3),("essay",310,205,0.42),("note",420,208,0.3),
    ("calendar",140,110,0.55),("truck",700,0,0.5)],
    window_=(620,56,130,96), panelbg="#242c38", floorbg="#30394a")
