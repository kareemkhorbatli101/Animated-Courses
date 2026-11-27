# -*- coding: utf-8 -*-
"""Clearline Book 4 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · Writing the Policy ----------------
S["r07-f1"]=lambda: f_icons([("essay","a policy"),("refnumber","a clause"),
    ("note","definitions"),("transfer","a request and a decision"),("form","a form"),
    ("calendar","a response deadline"),("handsup","an appeal"),
    ("notebook","a register"),("stamp","a review date"),("meeting","two readings")], cols=5)
S["r07-f2"]=lambda: f_scene(900,420, people=[("hanna",330,172,{"seated":True})],
    props=[("desk",200,0,1.35),("essay",280,205,0.34),("note",370,208,0.3),
    ("computer",460,145,0.48)],
    board=(740,24,160,110,"REQUESTS",[("3 years","2")]))
S["r07-f3"]=lambda: f_icons([("computer","nobody opens it"),("worried","no named decision maker"),
    ("form","no address to send it to"),("clock","no deadline"),
    ("sad","refused with no reason"),("handsup","nobody asks")], cols=3)
S["r07-f4"]=lambda: f_realia(tbl("","Can you actually use it?",
    ["The policy","Who decides?","By when?","Against what?","What if no?"],
    [["","","","",""],["","","","",""],["","","","",""],["","","","",""]],
    note="<b>How many have all four:</b>"), 540)
S["r07-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; flexible working policy",
    "version 2 &middot; H. Lindqvist &middot; effective 1 June &middot; review 1 June next year",
    "<p><b>Definitions.</b> <i>Flexible working</i>: a change to when, where or how long you work. "
    "<i>Decision maker</i>: your own line manager. <i>Working days</i>: excluding weekends and "
    "public holidays at your location.</p>"
    "<p>1. Any employee with six months' service <b>may</b> apply, on the form at Annex A, up to "
    "twice a year.<br>"
    "2. The decision maker <b>shall</b> respond <b>in writing within 21 days</b>.<br>"
    "3. A request <b>shall</b> be assessed against <b>these four criteria only</b>: coverage of "
    "the work; effect on colleagues; cost; whether the arrangement can be measured.<br>"
    "4. If a request is refused, the response <b>must</b> state which of the four criteria it "
    "fails, and why. <b>A refusal that does not do so is a breach of this policy.</b><br>"
    "5. The employee <b>may</b> request review by the site manager within <b>10 working days</b>; "
    "the site manager <b>shall</b> respond within a further <b>10</b>.<br>"
    "6. Every decision, granted or refused, <b>shall</b> be recorded in the register, with the "
    "criterion cited for each refusal.</p>",
    "<b>What this policy does not cover:</b> pay; permanent contract changes; employees with under "
    "six months' service, whose requests a manager <b>may</b> grant informally and <b>shall</b> "
    "record."))
S["r07-f6"]=lambda: f_realia(tbl("Word study","The modals of rules",
    ["Modal","Means","Example"],
    [["<b>may</b>","permission &mdash; the reader is allowed","Any employee <b>may</b> apply."],
     ["<b>shall</b>","obligation on the organization",
      "The manager <b>shall</b> respond within 21 days."],
     ["<b>must</b>","obligation, usually on the reader",
      "The response <b>must</b> state the criterion."],
     ["<b>will</b>","a statement of what happens","The decision <b>will</b> be recorded."],
     ["<b>should</b>","advice &mdash; <b>no obligation at all</b>",
      "Managers <b>should</b> consider the request fairly."]],
    note="A clause that says <i>should</i> has promised nothing and cannot be breached. If you "
    "mean it, write <i>shall</i> with a number of days beside it."), 540)
S["r07-f7"]=lambda: f_chart([("the law as written",67),("its enforcement",53),
    ("the systems behind it",47)],
    unit="score out of 100, same subject, three measurements &mdash; the twenty-point gap is the "
    "finding, and an average of the three would hide it", w=520)
S["r07-f8"]=lambda: f_icons([("note","definitions"),("form","a form with an address"),
    ("calendar","twenty-one days"),("inventory","four criteria, closed"),
    ("handsup","an appeal route"),("notebook","the register")], cols=3)
S["r07-f9"]=lambda: f_realia(tbl("Flexible working &middot; decisions register",
    "first six months",
    ["Date","Team","Requested","Decision","Criterion","Appealed?"],
    [["7 Jun","warehouse","4-day week","granted","&mdash;","&mdash;"],
     ["14 Jun","finance","later start","granted","&mdash;","&mdash;"],
     ["2 Jul","warehouse","compressed hours","<b>refused</b>","<b>2</b>","no"],
     ["19 Jul","operations","home 2 days","granted","&mdash;","&mdash;"],
     ["3 Aug","warehouse","shift swap","<b>refused</b>","<b>2</b>","<b>yes</b>"],
     ["21 Aug","quality","later start","granted","&mdash;","&mdash;"],
     ["9 Sep","warehouse","4-day week","<b>refused</b>","<b>2</b>","no"],
     ["28 Sep","people ops","home 1 day","granted","&mdash;","&mdash;"],
     ["11 Oct","transport","earlier finish","granted","&mdash;","&mdash;"]],
    note="Three refusals, all criterion 2 (effect on colleagues), three of them from the same "
    "team. That tells you something about the criterion, or about the team."), 560)
S["r07-f10"]=lambda: f_scene(900,420, people=[("hanna",310,172,{"seated":True}),
    ("nour",410,168,{"seated":True}),("okonjo",510,182,{"seated":True})],
    props=[("table",390,250,1.4),("essay",350,196,0.32),("notebook",450,200,0.26),
    ("pen",400,200,0.18)])
S["r07-f11"]=lambda: f_realia(tbl("Two policies","Three years apart",
    ["Four lines","One page"],
    [["“Requests for flexible working will be considered on a case-by-case basis. Decisions "
      "will take account of operational requirements. Managers should consult their teams. This "
      "policy will be reviewed periodically.”<br><br>"
      "<i>Two requests in three years. Nothing here can be breached.</i>",
      "Six numbered clauses. A definitions box. <b>Who decides</b> (your line manager), "
      "<b>by when</b> (21 days, in writing), <b>against what</b> (four criteria, closed list), "
      "<b>what if no</b> (a criterion must be named; review by the site manager within 10 working "
      "days). A register. A review <b>date</b>."]]), 540)
S["r07-f12"]=lambda: f_realia(doc("Two policies", None,
    "<p><b>A.</b> Requests for flexible working will be considered on a case-by-case basis. "
    "Decisions will take account of operational requirements. Managers should consult their teams. "
    "This policy will be reviewed periodically.</p>"
    "<p style='font-size:12px;color:#6b6861'>Four reasonable sentences. No role, no number, no "
    "route, and nothing anybody could breach. Used twice in three years.</p>"
    "<p style='margin-top:14px'><b>B.</b> “Any employee with six months' service <b>may</b> "
    "apply on the form at Annex A. The decision maker <b>shall</b> respond in writing within 21 "
    "days. A request <b>shall</b> be assessed against these four criteria only. If a request is "
    "refused, the response <b>must</b> state which criterion it fails. The employee <b>may</b> "
    "request review by the site manager within 10 working days. Every decision <b>shall</b> be "
    "recorded in the register.”</p>"))
S["r07-f13"]=lambda: f_realia(form("Policy planner",
    [("Definitions &mdash; three terms at most",""),("Eligibility &mdash; who, and from when",""),
     ("The route &mdash; a form, a named recipient, a number of days",""),
     ("The criteria &mdash; a closed list",""),("The refusal rule",""),
     ("The appeal &mdash; to whom, within how long",""),("The register",""),
     ("What it does not cover",""),("The review date &mdash; a date, not “periodically”",
      "")]), 520)
S["r07-f14"]=lambda: f_scene(1000,450, people=[("hanna",150,172,{"seated":True}),
    ("nour",240,168,{"seated":True}),("okonjo",330,182,{"seated":True}),
    ("yara",430,172,{}),("anders",520,182,{}),("marek",610,180,{}),
    ("wei",700,170,{}),("ines",790,172,{}),("ravi",870,176,{}),("sofia",950,172,{})],
    props=[("table",200,250,1.3),("essay",280,196,0.3),("form",400,196,0.28),
    ("computer",560,140,0.42),("printer",660,205,0.46),("coat",760,130,0.4),
    ("cafe",900,205,0.46)],
    board=(430,20,150,110,"POLICY v2",[("effective","1 June")]))
S["r07-f15"]=lambda: f_chart([("yes but I would have to ask",7),("probably not",6),
    ("yes and I know how",4),("there is no policy",3),("no",2)])
S["r07-f16"]=lambda: f_scene(880,420, people=[],
    props=[("desk",240,0,1.3),("notebook",300,205,0.3),("note",390,208,0.26),
    ("computer",470,145,0.48),("data",150,110,0.42)],
    window_=(630,56,110,96))

# ---------------- Unit 8 · When Something Is Attacked ----------------
S["r08-f1"]=lambda: f_icons([("padlock","a locked screen"),("scanner","a red light"),
    ("clipboard","paper instead"),("clock","a timeline"),("phone","a phone tree"),
    ("data","a pulled cable"),("archive","a backup"),("note","a short statement"),
    ("truck","a customer waiting"),("flipchart","the sequence")], cols=5)
S["r08-f2"]=lambda: f_scene(900,420, people=[("tomas",330,176,{})],
    props=[("desk",210,0,1.3),("scanner",280,205,0.3),("clipboard",400,150,0.36),
    ("pen",450,208,0.18),("truck",760,0,0.5)],
    board=(620,24,170,110,"SYSTEM STATUS",[("scanners","error")]),
    panelbg="#242c38", floorbg="#30394a")
S["r08-f3"]=lambda: f_icons([("scanner","a scanner fails"),("waitscreen","a reboot"),
    ("headset","the help desk"),("form","priority: low"),
    ("clipboard","paper picking"),("meeting","told at eleven")], cols=3)
S["r08-f4"]=lambda: f_realia(tbl("","The first hour",
    ["Time","What happened","Who was told"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="Draw a line where the word <b>incident</b> was first used."), 520)
S["r08-f5"]=lambda: f_realia(tbl("Lindmark Freight &middot; incident IR-2026-07 &middot; timeline",
    "prepared by T. Ek and the IT provider &middot; issued 3 days after the event",
    ["Time","What happened","Who had been told"],
    [["04:50","Two scanners stop reading","shift supervisor"],
     ["05:05","Scanners rebooted; no change","&mdash;"],
     ["05:20","Help desk called; logged as hardware, <b>priority low</b>","help desk"],
     ["05:40","Four more scanners stop","shift supervisor"],
     ["06:10","Supervisor told it is “probably a network problem”","&mdash;"],
     ["06:15","<b>Warehouse begins picking from paper</b>","&mdash;"],
     ["08:30","Day shift starts; paper picking continues","warehouse manager"],
     ["09:15","Finance system refuses a login","finance"],
     ["10:40","A file on the shared drive will not open","one user"],
     ["<b>11:30</b>","<b>Three facts connected; declared an incident</b>","IT, site manager"],
     ["11:45","Affected systems isolated","all"],
     ["13:10","Restore begun from the 05:00 restore point","all"],
     ["16:40","Scanners operating; finance still down","all"],
     ["18:20","All systems restored; paper records being keyed in","all"]],
    note="<b>Root cause:</b> credential compromise through a reused password on a supplier portal. "
    "Not hardware and not the network. <b>The gap: 6 hours 40 minutes.</b>"), 560)
S["r08-f6"]=lambda: f_realia(tbl("Word study","The past perfect",
    ["Pattern","Use","Example"],
    [["<b>had + participle</b>","earlier than another past point",
      "By 11:30 the warehouse <b>had been</b> on paper for six hours."],
     ["<b>past simple</b>","the reference point itself",
      "At 11:30 somebody <b>connected</b> the three facts."],
     ["<b>had been + -ing</b>","how long, up to that point",
      "They <b>had been picking</b> from paper since 06:15."],
     ["<b>by the time + past simple</b>","names the reference point",
      "<b>By the time</b> anybody <b>called</b> it an incident&hellip;"],
     ["<b>had already / hadn't yet</b>","&mdash;",
      "The 05:00 restore point <b>had already</b> been overwritten."]],
    note="You only need the past perfect when you tell a story out of order. In a timeline running "
    "forwards, the past simple is enough."), 540)
S["r08-f7"]=lambda: f_part("The incident, in two parts",
    [("treated as three unrelated faults — 6h 40m",400,AMBER),
     ("technical response — under 7h",410,BLUE)], w=540)
S["r08-f8"]=lambda: f_icons([("scanner","a red light"),("form","a low-priority ticket"),
    ("clipboard","paper in use"),("chain","three tickets joined"),
    ("data","unplugged"),("calendar","the restore point")], cols=3)
S["r08-f9"]=lambda: f_realia(doc("Incident IR-2026-07 &middot; summary",
    "severity 2 &middot; duration 13h 30m &middot; issued 3 days after the event",
    "<p><b>The finding, first.</b> Three unrelated-looking faults in three systems were reported "
    "to three places and nobody put them together for <b>six hours and forty minutes</b>. The "
    "technical response after that point took under seven hours and was competent.</p>"
    "<p><b>Timeline.</b> 04:50 scanners stop &middot; 05:20 logged as hardware, low priority "
    "&middot; 06:15 paper picking begins &middot; 09:15 finance login fails &middot; 10:40 a file "
    "will not open &middot; <b>11:30 declared</b> &middot; 18:20 restored.</p>"
    "<p><b>Root cause.</b> A reused password on a supplier portal. Not hardware, not the network.</p>"
    "<p><b>What we could not recover.</b> About six hours of keyed data, re-entered from paper.</p>"
    + table_html(["Action","Owner","By"],
      [["Rule: two unrelated faults within 2 hours reviewed together","IT provider","10 days"],
       ["A named escalation route from the warehouse","D. Okonjo","14 days"],
       ["Supplier-portal credentials rotated and unique","IT provider","7 days"],
       ["Paper workaround rehearsed quarterly, timed","T. Ek","next quarter"]]),
    "<b>What this report does not explain:</b> how the credential was obtained. We know where it "
    "was valid; we do not know how it was taken, and we may never."))
S["r08-f10"]=lambda: f_scene(920,420, people=[("tomas",290,176,{}),
    ("oksana",420,172,{"seated":True}),("ines",510,172,{"seated":True}),
    ("okonjo",600,182,{"seated":True})],
    props=[("table",400,250,1.4),("essay",360,196,0.3),("computer",470,196,0.36)],
    board=(760,24,150,120,"THREE TICKETS",[("scanners","finance"),("file","?")]))
S["r08-f11"]=lambda: f_realia(tbl("Two reports","The same incident",
    ["Fourteen times","A finding and a timeline"],
    [["04:50 &middot; 05:05 &middot; 05:20 &middot; 05:40 &middot; 06:10 &middot; 06:15 &middot; "
      "08:30 &middot; 09:15 &middot; 10:40 &middot; 11:30 &middot; 11:45 &middot; 13:10 &middot; "
      "16:40 &middot; 18:20<br><br><i>Root cause on the last page. Most readers stopped at "
      "06:15.</i>",
      "<b>Finding:</b> three faults, three places, nobody connected them for 6h 40m. The "
      "technical response was competent.<br>Then the fourteen times.<br>Then the cost.<br>"
      "Then four actions with owners and dates."]]), 540)
S["r08-f12"]=lambda: f_realia(doc("Two incident reports", None,
    "<p><b>A.</b> 04:50 two scanners stopped reading. 05:05 the devices were rebooted. 05:20 a "
    "call was made to the help desk&hellip; <i>(eleven more rows)</i> &hellip; Root cause: "
    "credential compromise via a supplier portal.</p>"
    "<p style='font-size:12px;color:#6b6861'>The analysis is on the last page. The reader has to "
    "do it themselves, and most will not.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>Three unrelated-looking faults were reported to three "
    "places and nobody put them together for six hours and forty minutes.</b> The technical "
    "response after 11:30 took under seven hours and was competent. The gap was not a technical "
    "failure; it was a reporting structure with no route for “two odd things at "
    "once”. <i>Timeline follows.</i> <b>What earlier detection would not have changed:</b> "
    "the attacker had been on the file server since the previous Tuesday.</p>"))
S["r08-f13"]=lambda: f_realia(form("Incident planner",
    [("<b>The finding, in one sentence</b>",""),("The timeline &mdash; past simple, in order",""),
     ("Root cause &mdash; and what it was <b>not</b>",""),("What it cost",""),
     ("<b>What earlier detection would not have changed</b>",""),
     ("Actions &mdash; owners and dates",""),("What this report does not explain","")]), 520)
S["r08-f14"]=lambda: f_scene(1000,450, people=[("tomas",150,176,{}),("anders",240,182,{}),
    ("yara",330,172,{}),("oksana",430,172,{}),("marek",520,180,{}),
    ("nour",610,168,{}),("ines",700,172,{}),("wei",790,170,{}),
    ("sofia",870,172,{}),("okonjo",950,182,{})],
    props=[("clipboard",100,150,0.36),("scanner",200,196,0.26),("data",400,140,0.42),
    ("flipchart",560,46,0.8),("printer",700,205,0.46),("carton",840,0,0.55),
    ("racking",930,40,0.85)],
    clockat=(300,56,22,11,30), panelbg="#2b3340", floorbg="#39404c")
S["r08-f15"]=lambda: f_chart([("only IT",7),("a supervisor",5),("nobody knows",5),
    ("anybody",3),("only a director",2)])
S["r08-f16"]=lambda: f_scene(880,420, people=[],
    props=[("desk",240,0,1.3),("essay",310,110,0.3),("note",380,208,0.26),
    ("computer",460,145,0.48),("truck",740,0,0.55)],
    window_=(620,56,110,96))

# ---------------- Unit 9 · The Investment Decision ----------------
S["r09-f1"]=lambda: f_icons([("worldmap","arrows of different sizes"),("data","one bar below"),
    ("warehouse","under construction"),("signature","a contract"),("transfer","a transfer"),
    ("stars","a dotted projection"),("balance","risk against return"),
    ("map","a pin on a map"),("pipe","a conduit"),("meeting","one chart, two views")], cols=5)
S["r09-f2"]=lambda: f_scene(920,430, people=[("paula",290,170,{}),
    ("okonjo",470,182,{"seated":True}),("marek",560,180,{"seated":True}),
    ("hanna",650,172,{"seated":True})],
    board=(770,24,150,120,"FDI",[("world","+6%"),("LMIC","−5%")]),
    props=[("table",420,250,1.4),("essay",350,196,0.32)])
S["r09-f3"]=lambda: f_icons([("stars","the world rose"),("sad","one group fell"),
    ("pipe","conduit flows"),("tally","fewer projects, more money"),
    ("bank","one deal moves the total"),("data","two directions")], cols=3)
S["r09-f4"]=lambda: f_realia(tbl("","Four answers to one question",
    ["","The figure"],
    [["<b>The headline</b>",""],["Narrowed to a group",""],["With something removed",""],
     ["Counted differently",""]],
    note="<b>Which one matters for our decision:</b>"), 500)
S["r09-f5"]=lambda: f_realia(doc("Arvo Components &middot; proposal AC-I03, stage one",
    "P. Moreau &middot; 8 September &middot; 180,000 and a decision point",
    table_html(["The market","Figure"],
      [["Global foreign direct investment, last year",
        "<b>+6%</b>, to 1.6 trillion dollars &mdash; ending two years of decline"],
       ["Developing economies","+2%"],
       ["<b>Lower-middle-income countries &mdash; where we would be</b>","<b>−5%</b>"],
       ["Excluding conduit flows through European financial centers","+4%, not 6%"],
       ["Announced development-linked projects, first half of this year","about <b>−25%</b>"]])
    + "<p><b>Why we would go anyway.</b> Not the market. <b>Two of our four largest customers have "
    "moved production there</b> and will buy locally whether we are there or not &mdash; about "
    "<b>310,000 a year of existing business</b>. The market figure is about the country; the "
    "310,000 is about our order book.</p>"
    "<p style='background:#fff3cf'><b>The trigger.</b> Stage one is <b>180,000</b> and eighteen "
    "months. <b>Unless</b> we have <b>140,000</b> of local orders by <b>month 15</b>, stage two "
    "does not proceed and we <b>exit</b> for about 40,000 of write-off. <b>Provided that</b> the "
    "140,000 arrives, stage two is a further 420,000 and comes back to this board.</p>",
    "<b>What we are not asking you to believe:</b> any forecast about that country."))
S["r09-f6"]=lambda: f_realia(tbl("Word study","Four connectors",
    ["Connector","Means","Example"],
    [["<b>unless</b>","if &hellip; not &mdash; a stopping condition",
      "<b>Unless</b> we have 140,000 by month 15, we exit."],
     ["<b>provided that</b>","only on this condition",
      "<b>Provided that</b> it arrives, stage two proceeds."],
     ["<b>as long as</b>","the same, less formal","<b>As long as</b> the orders hold, we continue."],
     ["<b>in case</b>","a precaution, <b>beforehand</b>",
      "We'll keep the lease short <b>in case</b> we exit."],
     ["<b>if</b>","a condition","<b>If</b> we exit, we write off 40,000."]],
    note="<i>In case</i> is not <i>if</i>. An umbrella taken <i>in case</i> it rains is taken "
    "before you know."), 540)
S["r09-f7"]=lambda: f_chart([("global",6),("excluding conduit flows",4),
    ("developing economies",2),("lower-middle-income — where we would be",-5),
    ("announced development projects",-25)],
    unit="% change, all from the same two publications &mdash; the highlighted line is the one "
    "this decision is in", w=540)
S["r09-f8"]=lambda: f_icons([("sad","a bar below the line"),("worldmap","two customers moved"),
    ("coins","310,000 a year"),("bank","stage one"),
    ("calendar","month fifteen"),("fireexit","exit, 40,000")], cols=3)
S["r09-f9"]=lambda: f_realia(form("Approval record &middot; AC-I03",
    [("Reference and amount","AC-I03 &mdash; <b>180,000, stage one only</b>"),
     ("Summary","A first stage in a market whose investment flows fell 5%. "
      "Reason: two major customers have moved production there."),
     ("<b>Trigger</b>","<b>Unless</b> local orders reach <b>140,000</b> by <b>month 15</b>, "
      "stage two does not proceed and the project <b>exits</b>."),
     ("<b>What the board has NOT approved</b>","Stage two (420,000). Any forecast about the "
      "country. Any discretion at month 15 &mdash; the trigger decides."),
     ("Signatures","______________ &nbsp;&nbsp; ______________"),
     ("Review date","month 15")]), 540)
S["r09-f10"]=lambda: f_scene(920,430, people=[("paula",270,170,{}),
    ("okonjo",450,182,{"seated":True}),("marek",540,180,{"seated":True}),
    ("hanna",630,172,{"seated":True}),("yara",710,172,{"seated":True})],
    board=(780,24,140,120,"FIVE BARS",[("one","below")]),
    props=[("table",420,250,1.4),("essay",350,196,0.3),("pen",490,200,0.18)])
S["r09-f11"]=lambda: f_realia(tbl("Two proposals","The same market",
    ["Global figure first, full amount","Regional figure first, staged"],
    [["<b>Global investment rose 6%.</b> We propose to invest 600,000 in a new operation.<br><br>"
      "<i>No trigger. No mention of the −5%. The board approves a forecast.</i>",
      "<b>Investment in these countries fell 5%.</b> We propose to invest anyway: two of our four "
      "largest customers have moved there, about 310,000 a year of existing business.<br>"
      "<b>Stage one 180,000.</b> <b>Unless</b> 140,000 of local orders by <b>month 15</b>, we "
      "<b>exit</b>.<br><i>The board approves a first stage and a stopping rule.</i>"]]), 540)
S["r09-f12"]=lambda: f_realia(doc("Two proposals", None,
    "<p><b>A.</b> Global foreign direct investment rose 6 percent last year to 1.6 trillion "
    "dollars, ending two years of decline. We propose a new operation in the region, at a total "
    "cost of 600,000, and expect it to be self-funding within three years.</p>"
    "<p style='font-size:12px;color:#6b6861'>The one figure that supports it, and nothing that "
    "does not. No stopping rule.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>Investment flows into lower-middle-income countries "
    "&mdash; the group this proposal is in &mdash; fell 5 percent.</b> Globally flows rose 6 per "
    "cent; excluding conduit flows, 4. I am proposing to invest anyway, because two of our four "
    "largest customers moved production there and represent about 310,000 a year of existing "
    "business. <b>The real comparison is 180,000 now against 310,000 a year from 2028.</b> "
    "<b>Unless we have 140,000 of local orders by month 15, we exit.</b></p>"))
S["r09-f13"]=lambda: f_realia(form("Staged-proposal planner",
    [("<b>The figure against me</b> &mdash; with its source",""),
     ("Why we would go anyway &mdash; a fact about us",""),("The real comparison",""),
     ("Stage one &mdash; a figure and a length of time",""),
     ("<b>The trigger &mdash; a figure, a date and an action</b>",""),
     ("Stage two &mdash; and that it comes back",""),
     ("What I am not asking you to believe","")]), 520)
S["r09-f14"]=lambda: f_scene(1000,450, people=[("paula",160,170,{}),
    ("okonjo",280,182,{"seated":True}),("marek",370,180,{"seated":True}),
    ("hanna",460,172,{"seated":True}),("yara",550,172,{"seated":True}),
    ("nour",640,168,{"seated":True}),("chiamaka",730,172,{}),
    ("ravi",820,176,{}),("wei",890,170,{}),("ines",960,172,{})],
    props=[("table",300,250,1.6),("essay",380,196,0.3),("computer",470,196,0.34),
    ("flipchart",220,46,0.8),("archive",80,0,0.55)],
    board=(560,20,180,110,"WORLD MAP",[("five bars","one below")]))
S["r09-f15"]=lambda: f_chart([("sometimes",7),("never",6),("only for large projects",4),
    ("I do not know",3),("always",2)])
S["r09-f16"]=lambda: f_scene(880,420, people=[],
    props=[("desk",240,0,1.3),("note",300,208,0.24),("essay",380,210,0.3),
    ("computer",460,145,0.48),("truck",720,0,0.5),("warehouse",800,0,0.5)],
    window_=(620,56,110,96))
