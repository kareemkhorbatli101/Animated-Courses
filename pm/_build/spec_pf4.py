# -*- coding: utf-8 -*-
"""Throughline Book 6 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 ----------------
S["pf10-f1"]=lambda: f_icons([("archive","a report dated January 2007"),
    ("review","an injury rate falling"),("padlock","a protective system operating"),
    ("pipe","a small loss of containment"),("clipboard","overdue safety-critical work"),
    ("firealarm","a suppressed alarm past review"),("timetable","a leading indicator"),
    ("flashback","a lagging indicator"),("tally","one figure on a slide"),
    ("dashboard","five figures instead")], cols=5)
S["pf10-f2"]=lambda: f_scene(760,380,
    people=[("wei",200,172,{}),("okonjo",290,170,{})],
    props=[("desk",400,0,1.0),("review",470,148,0.24),("dashboard",580,148,0.24),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"ONE NUMBER, SIX YEARS",
      [("from","2.1"),("to","0.4")]),
    clockat=(360,34,22,11,10))
S["pf10-f3"]=lambda: f_icons([("wetfloor","a personal injury"),("pipe","a process release"),
    ("flashback","a lagging count"),("clipboard","a leading count"),
    ("padlock","a protective activation"),("tally","one number alone")], cols=3)
S["pf10-f4"]=lambda: f_realia(tbl("Team research","What your number covers",
    ["The measure","What it counts","What would not appear in it",
     "The leading indicator to add"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the event our figures cannot see.</b>"), 660)
S["pf10-f5"]=lambda: f_realia(doc("Lindhurst · quality note 10",
    "One safety number, two subjects",
    "<p><b>The report.</b> <i>The Report of the BP U.S. Refineries Independent Safety Review "
    "Panel</i>, <b>January 2007</b>, produced by a panel commissioned after a <b>fatal explosion at "
    "one of the company's refineries in 2005</b>. <b>The panel was not the accident "
    "investigation</b>; that was conducted separately. <b>Its task was to examine corporate safety "
    "oversight and safety culture at five refineries.</b></p>"
    "<p><b>Its central finding, in our words.</b> The company had emphasized <b>personal safety</b>, "
    "measured by injury rates, and had <b>not given commensurate attention to process safety</b>. "
    "<b>Good personal safety figures had been taken as an indication that process safety was also "
    "sound</b>, and <b>leading and lagging process safety indicators were not effectively "
    "used.</b></p>"
    + table_html(["","What it is about","How it is measured"],
      [["<b>personal safety</b>","whether <b>individuals</b> are hurt","injury and frequency rates"],
       ["<b>process safety</b>","whether the plant <b>releases what it is holding</b>, in a way that "
        "can harm <b>many people at once</b>","losses of containment, protective activations, "
        "near-misses with catastrophic potential"]])
    + "<p style='border:1.5px solid #3b3b5c;padding:8px'><b>Our own position, in this order "
    "deliberately.</b> <b>Our lost-time injury frequency rate has fallen from 2.1 to 0.4 over six "
    "years. Fourteen fewer people were hurt last year than six years ago. That is real.</b> <b>And it "
    "is our only safety number.</b> <b>Our most serious event of last year was the near-miss of 14 "
    "June. Nobody was hurt. It therefore does not appear in the injury rate and could not "
    "have.</b></p>"
    + table_html(["#","Indicator","Type","Now"],
      [["1","<b>overdue safety-critical maintenance items</b>","<b>leading</b>","<b>31</b>"],
       ["2","<b>suppressed alarms open beyond review date</b>","<b>leading</b>","<b>4</b>"],
       ["3","<b>losses of containment</b>, any size","lagging","<b>6</b> in 12 months, all small"],
       ["4","<b>protective system activations</b>","lagging","<b>3</b>"],
       ["5","<b>near-misses with catastrophic potential</b>","lagging","<b>1</b>"]])
    + "<p><b>Not one of these describes a disaster and all five are precursors.</b> <b>None has ever "
    "been reported to the board, and all five were available in systems we already own.</b></p>"
    "<p><b>No targets.</b> <b>A target on indicator 5 would reduce that number within a quarter by "
    "reducing reporting.</b> <b>Report each figure and its direction, and nothing else.</b></p>",
    "Source: The Report of the BP U.S. Refineries Independent Safety Review Panel, January 2007, "
    "which examined the corporate safety oversight, safety culture and process safety management "
    "systems of five of one company's refineries following a fatal explosion in 2005 and was not the "
    "investigation of that accident. It found an emphasis on personal safety not matched by "
    "commensurate attention to process safety, and ineffective use of leading and lagging process "
    "safety indicators. It states that its findings may not be applicable to other facilities or "
    "companies, and it had no authority to implement its ten recommendations."), 660)
S["pf10-f6"]=lambda: f_realia(tbl("Word study","Distinguishing two measures",
    ["Structure","What it does","Example"],
    [["<i>measures … but not</i>","names the boundary of a figure",
      "It <b>measures</b> individual harm <b>but not</b> process risk."],
     ["<i>is not a proxy for</i>","refuses a substitution",
      "An injury rate <b>is not a proxy for</b> process safety."],
     ["<i>says nothing about</i>","states the silence",
      "The figure <b>says nothing about</b> containment."],
     ["<i>the two are not substitutes</i>","blocks the trade",
      "Both are needed; <b>the two are not substitutes</b>."],
     ["<i>covers only</i>","",""],["<i>tells you about</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pf10-f7"]=lambda: f_line([("yr 1",21),("yr 2",17),("yr 3",14),("yr 4",10),("yr 5",7),
    ("yr 6",4)], w=620, h=240, unit="injury frequency rate ×10")
S["pf10-f8"]=lambda: f_icons([("wetfloor","a slip on a wet floor"),("pipe","a pressure release"),
    ("review","a falling injury rate"),("clipboard","overdue maintenance"),
    ("firealarm","a suppressed alarm"),("padlock","a protective device operating")],
    cols=3, numbered=False)
S["pf10-f9"]=lambda: f_realia(doc("Board annex · safety reporting",
    "First revision in six years",
    "<p style='font-size:15px'><b>LOST-TIME INJURY FREQUENCY RATE: 2.1 → 0.4 OVER SIX YEARS. "
    "FOURTEEN FEWER PEOPLE WERE HURT LAST YEAR THAN SIX YEARS AGO. THAT IMPROVEMENT IS REAL AND "
    "NOTHING BELOW QUALIFIES IT.</b></p>"
    "<p><b>It measures personal safety. It does not measure process safety, and it is not a proxy "
    "for it.</b> <b>Our most serious event of last year could not appear in it, because nobody was "
    "hurt.</b></p>"
    + table_html(["#","Indicator","Type","Now","Direction"],
      [["1","overdue <b>safety-critical</b> maintenance","<b>leading</b>","<b>31</b>","↑"],
       ["2","<b>suppressed alarms</b> beyond review","<b>leading</b>","<b>4</b>","↑"],
       ["3","<b>losses of containment</b>, any size","lagging","<b>6</b> / 12 mo","level"],
       ["4","<b>protective system activations</b>","lagging","<b>3</b>","↑"],
       ["5","<b>near-misses with catastrophic potential</b>","lagging","<b>1</b>","n/a"]])
    + "<p style='font-size:15px'><b>NO TARGET IS PROPOSED FOR ANY OF THE FIVE.</b></p>"
    "<p><b>All five were available in systems we already own and took four days to assemble.</b></p>",
    "A target on indicator 5 would reduce that number within a quarter by reducing reporting. Report "
    "each figure and its direction, with no commentary."), 640)
S["pf10-f10"]=lambda: f_scene(860,400,
    people=[("wei",110,174,{}),("okonjo",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("review",250,148,0.24),("dashboard",360,148,0.22),
     ("clipboard",520,150,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"ONE WORD, TWO SUBJECTS",
      [("personal","0.4"),("process","never measured")]),
    clockat=(700,34,22,11,30))
S["pf10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Annex A","One figure",
      "<p>The injury rate and a six-year trend. Nothing else.</p>"), 380),
    lambda w,h: f_realia(doc("Annex B","Six figures",
      "<p>The same figure conceded in full, then five process indicators with types, values, "
      "directions — and <b>no targets.</b></p>"), 380),
    w=820, h=300, lt="ONE SUBJECT", rt="TWO SUBJECTS")
S["pf10-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("What the number shows","Six years",
      "<p>2.1 to 0.4. Fourteen fewer people hurt last year than six years ago.</p>"), 380),
    lambda w,h: f_realia(doc("What it cannot show","14 June",
      "<p>A pump started against a closed valve, no manual fallback since 2021, stopped by an "
      "interlock. <b>Nobody hurt, therefore invisible.</b></p>"), 380),
    w=820, h=300, lt="REAL", rt="INVISIBLE")
S["pf10-f13"]=lambda: f_realia(form("Indicator planner",
    [("The existing measure and what it covers",""),("What it does not cover",""),
     ("The event it could not have shown",""),("Two leading indicators",""),
     ("Three lagging indicators",""),("Why no target is proposed","")],
    note="Six boxes. Hand it to a partner; they ask what the figure could not have shown."), 560)
S["pf10-f14"]=lambda: f_scene(1000,450,
    people=[("wei",60,176,{}),("okonjo",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("anders",290,172,{"seated":True}),("hana",370,176,{"seated":True}),
     ("bah",445,172,{}),("oksana",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("nour",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("clipboard",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"ONE WORD, TWO SUBJECTS",
      [("personal","measured"),("process","not")]),
    clockat=(278,34,22,11,30))
S["pf10-f15"]=lambda: f_chart([("several",4),("two",6),("one",15),("none",3),
    ("I do not know",5)])
S["pf10-f16"]=lambda: f_realia(doc("On a desk in December",
    "What was on it at six o'clock",
    "<p><b>A six-year injury-rate chart.</b></p>"
    "<p><b>A one-page annex</b> with five indicators.</p>"
    "<p><b>A maintenance report</b> listing thirty-one overdue safety-critical items.</p>"
    "<p><b>A report dated January 2007.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The number that improved is real and I will say so in my "
    "first sentence and never qualify it, because the people who produced that improvement are in the "
    "room and an argument about measurement is lost the moment it sounds like an argument about them. "
    "The strongest evidence for a new indicator is never a hypothetical: it is the worst thing that "
    "actually happened last year, which hurt nobody and therefore left no mark on the only number "
    "anybody sees. I will give up almost anything in this annex except the absence of targets, "
    "because a target on reported near-misses buys a better slide and a worse plant within one "
    "quarter.</i></p>",
    "Six o'clock. Two point one to nought point four, and five numbers nobody has seen."), 640)

# ---------------- Unit 11 ----------------
S["pf11-f1"]=lambda: f_icons([("book","a book from 2007"),("inventory","two sets of questions"),
    ("statement","a rule book"),("noentry","a sanction"),
    ("handshake","being asked what you need"),("form","a report being filled in"),
    ("review","a reporting line falling"),("logsheet","a test record with a gap"),
    ("envelope","a memo marked out of remit"),("danger","a dismissal letter")], cols=5)
S["pf11-f2"]=lambda: f_scene(760,380,
    people=[("wei",200,172,{}),("nour",290,170,{})],
    props=[("desk",400,0,1.0),("review",470,148,0.24),("form",580,150,0.22),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"THREE YEARS",
      [("year 1","41"),("year 3","4")]),
    clockat=(360,34,22,4,10))
S["pf11-f3"]=lambda: f_icons([("statement","which rule"),("noentry","who broke it"),
    ("firstaid","who is hurt"),("handshake","what do they need"),
    ("badge","whose obligation"),("form","a report made without hesitation")], cols=3)
S["pf11-f4"]=lambda: f_realia(tbl("Team research","Four reports",
    ["What was reported","What happened to the report","What happened to the person",
     "What the next person learned"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the thing nobody reports any more.</b>"), 660)
S["pf11-f5"]=lambda: f_realia(doc("Lindhurst · quality note 11",
    "Forty-one, nine, four",
    "<p><b>The book.</b> <b>S. Dekker</b>, <i>Just Culture</i>, first published <b>2007</b>, with "
    "later editions. It is <b>an argument</b>, not a standard: nothing in it can be audited, and it "
    "is <b>contested</b> by people who hold that accountability requires consequences.</p>"
    + table_html(["<b>Retributive</b>","<b>Restorative</b>"],
      [["Which rule was broken?","<b>Who is hurt?</b>"],
       ["Who broke it?","<b>What do they need?</b>"],
       ["How serious was the breach?","<b>Whose obligation is it to meet that need?</b>"],
       ["What sanction follows?",""]])
    + "<p><b>The second set is not the soft version.</b> <b>An obligation is a demand, usually on the "
    "organization, and usually more expensive than a reprimand.</b></p>"
    + table_html(["Year","Reports received"],
      [["<b>1</b>","<b>41</b>"],["<b>2</b>","<b>9</b>"],["<b>3</b>","<b>4</b>"]])
    + "<p><b>Between year one and year two, one person was disciplined following a report</b> — "
    "not for reporting, but for something the report revealed about his own work. <b>The decision was "
    "procedurally correct and I can find no fault in how it was taken.</b> <b>Every person on that "
    "site drew the obvious conclusion, and they were not wrong to.</b></p>"
    "<p style='border:1.5px solid #3b3b5c;padding:8px'><b>The report that went nowhere.</b> <b>Eleven "
    "months before 14 June, N. Haddad reported that the standby interlock's test record had a gap: "
    "one annual test with no signature.</b> <b>She was told it was outside her remit. It was.</b> "
    "<b>The interlock is the device that stopped the event on 14 June.</b> <b>Nothing whatever "
    "happened to her</b> — no sanction, no acknowledgment, no reply. <b>That is worse than a "
    "sanction, because a sanction at least tells you that somebody read it.</b></p>"
    "<p><b>And where I will not pretend the argument reaches.</b> <b>In 2019 a test record was "
    "deliberately falsified and the person responsible was dismissed. I supported that then and I "
    "support it now.</b> <b>The book does not draw that line for me, and says itself that such lines "
    "are drawn by somebody rather than discovered.</b></p>",
    "Source: S. Dekker, Just Culture, first published 2007, with subsequent editions. It "
    "distinguishes a retributive response to failure — which rule was broken, by whom, how "
    "seriously, and what sanction follows — from a restorative response, which asks who is hurt, "
    "what they need, and whose obligation it is to meet that need, and argues that the boundary "
    "between acceptable and unacceptable behavior is drawn by particular parties rather than "
    "discovered. It is an argument rather than a standard, offers no test of culpability, and is "
    "contested."), 660)
S["pf11-f6"]=lambda: f_realia(tbl("Word study","Blame and explanation",
    ["Structure","What it does","Example"],
    [["<i>was in a position to</i>","states what somebody could actually see",
      "She <b>was in a position to</b> see the gap in the record."],
     ["<i>had no means of</i>","states what they could not",
      "He <b>had no means of</b> knowing the three documents matched."],
     ["<i>the question is not who but what</i>","redirects the inquiry",
      "<b>The question is not who</b> suppressed the alarm <b>but what</b> made it unbearable."],
     ["<i>whose obligation is it</i>","assigns the repair",
      "<b>Whose obligation is it</b> to give him a usable system?"],
     ["<i>rather than asking … we asked</i>","",""],["<i>holds accountable</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pf11-f7"]=lambda: f_chart([("year 1",41),("year 2",9),("year 3",4)], unit="reports received")
S["pf11-f8"]=lambda: f_icons([("statement","a rule book"),("noentry","a sanction letter"),
    ("firstaid","who is hurt"),("handshake","what is needed"),
    ("badge","whose obligation"),("form","a report form")], cols=3, numbered=False)
S["pf11-f9"]=lambda: f_realia(doc("Reply to report R-417",
    "Eleven months late, and the three questions answered",
    "<p><b>Your report of 12 July last year was correct.</b> The standby interlock's test record "
    "contains <b>one annual test with no signature</b>. <b>That interlock is the device that "
    "prevented the event of 14 June, and nobody replied to you for seventeen months.</b></p>"
    "<p><b>On remit.</b> <b>You were told the interlock was outside your remit, and that was "
    "accurate.</b> <b>What it means is that our remit boundaries are wrong, not that your judgment "
    "was.</b></p>"
    + table_html(["Question","Answer"],
      [["<b>Who is hurt?</b>","<b>Nobody.</b> The event injured no one and the interlock worked."],
       ["<b>What is needed?</b>","<b>A signed annual test record</b>, and <b>a route for reports that "
        "cross remits.</b>"],
       ["<b>Whose obligation is it?</b>","<b>Mine</b>, for both, <b>by 1 September</b>."]])
    + "<p><b>What I am not going to write:</b> that this would have prevented the near-miss. <b>It "
    "would not: the interlock worked.</b> <b>What a reply would have done is let you argue with "
    "somebody in August of last year instead of telling two colleagues not to bother.</b></p>"
    "<p><b>Reports to this line: 41, then 9, then 4.</b></p>",
    "One change to the procedure: every report receives a written reply within ten working days, from "
    "a named person, even where the reply is that nothing will be done and why."), 640)
S["pf11-f10"]=lambda: f_scene(860,400,
    people=[("wei",110,174,{}),("okonjo",320,176,{"seated":True}),
     ("nour",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("review",250,148,0.24),("envelope",360,152,0.2),
     ("logsheet",520,150,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"WHICH SET DO WE ASK",
      [("retributive","4 questions"),("restorative","3")]),
    clockat=(700,34,22,4,30))
S["pf11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("System A","A status",
      "<p><i>R-417: closed. Out of remit.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>No reply was sent to anybody.</p>"), 380),
    lambda w,h: f_realia(doc("System B","A reply",
      "<p>A named replier, a date, the three questions answered, and an obligation accepted with an "
      "owner.</p>"), 380),
    w=820, h=300, lt="FILED", rt="ANSWERED")
S["pf11-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("First set","Four questions",
      "<p>Which rule? Who broke it? How serious? What sanction?</p>"
      "<p style='font-size:12px;color:#6b6861'>Cost: one person's month. Result: a closed case.</p>"),
      380),
    lambda w,h: f_realia(doc("Second set","Three questions",
      "<p>Who is hurt? What do they need? Whose obligation is it?</p>"
      "<p style='font-size:12px;color:#6b6861'>Cost: the organization's money and time. Result: an "
      "obligation somebody must discharge.</p>"), 380),
    w=820, h=300, lt="CHEAPER", rt="DEARER")
S["pf11-f13"]=lambda: f_realia(form("Reply planner",
    [("The report and its date",""),("Was it correct?",""),
     ("What the reporter was in a position to see",""),("Who is hurt",""),
     ("What is needed",""),("Whose obligation it is, with a date","")],
    note="Six boxes. Hand it to a partner; they ask who accepted the obligation."), 560)
S["pf11-f14"]=lambda: f_scene(1000,450,
    people=[("wei",60,176,{}),("nour",135,172,{}),("okonjo",210,176,{"seated":True}),
     ("nkemelu",290,172,{"seated":True}),("anders",370,176,{"seated":True}),
     ("hana",445,172,{}),("bah",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("oksana",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("form",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"WHICH SET DO WE ASK",
      [("year 1","41"),("year 3","4")]),
    clockat=(278,34,22,4,30))
S["pf11-f15"]=lambda: f_chart([("yes without hesitating",5),("yes reluctantly",10),("no",6),
    ("it would depend who saw it",11),("I have done so and regret it",2)])
S["pf11-f16"]=lambda: f_realia(doc("On a desk in December",
    "What was on it at six o'clock",
    "<p><b>A three-year report chart.</b></p>"
    "<p><b>A report</b> dated eleven months before a near-miss.</p>"
    "<p><b>A memo</b> marked out of remit.</p>"
    "<p><b>An interlock test record</b> with one unsigned line.</p>"
    "<p><b>A dismissal file from 2019.</b></p>"
    "<p><b>A note of three sentences.</b> <i>One correct disciplinary decision and seventeen months "
    "of silence did the same work in the same direction, and the silence is the part nobody counted. "
    "The restorative questions are not the soft option: a reprimand costs one person a bad month and "
    "whose obligation is it cost me a signed test record, a cross-remit reporting route and my own "
    "time until September. I supported the 2019 dismissal and I will not pretend the argument I am "
    "quoting draws that line for me, because it says itself that such lines are drawn by people and "
    "not found.</i></p>",
    "Six o'clock. Forty-one, nine, four."), 640)

# ---------------- Unit 12 ----------------
S["pf12-f1"]=lambda: f_icons([("book","an essay from 1967"),("calendar","a seventeen-month timeline"),
    ("dashboard","a coupling chart"),("barrier","layers with holes"),
    ("archive","a commission report"),("review","a drifting line"),
    ("folder","a sample from a population"),("signature","a delegation"),
    ("clipboard","an obligation register"),("inventory","two sets of questions")], cols=5)
S["pf12-f2"]=lambda: f_scene(760,380,
    people=[("hana",200,172,{}),("okonjo",290,170,{})],
    props=[("desk",400,0,1.0),("clipboard",470,150,0.24),("form",580,150,0.22),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"FOUR CHANNELS",
      [("at head office","140 people"),("on a station","6")]),
    clockat=(360,34,22,3,20))
S["pf12-f3"]=lambda: f_icons([("envelope","receiving"),("magnifier","assessing"),
    ("handshake","addressing"),("stamp","concluding"),
    ("padlock","protecting"),("noentry","the limit of anonymity")], cols=3)
S["pf12-f4"]=lambda: f_realia(tbl("Team research","Four routes",
    ["The route","Who receives it","Who would know in practice",
     "Where the protection comes from"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>the route nobody would use.</b>"), 660)
S["pf12-f5"]=lambda: f_realia(doc("Lindhurst · governance note 12",
    "One page of accountabilities",
    "<p><b>The guidelines.</b> <b>ISO 37002:2021</b>, <i>Whistleblowing management systems — "
    "Guidelines</i>. Four stages — <b>receiving, assessing, addressing and concluding</b> — "
    "resting on <b>trust, impartiality and protection</b>. They are <b>guidelines</b>: <b>nothing can "
    "be certified against them</b>, and they state that they do not address the <b>legal "
    "requirements</b> of any jurisdiction.</p>"
    + table_html(["Channel","Receives","Anonymous in practice?"],
      [["named line","H. Sato, compliance","<b>no, and not intended to be</b>"],
       ["named line, second route","a non-executive director","<b>no</b>"],
       ["<b>electronic channel, no identity</b>","compliance, without identity",
        "<b>at head office (140 people), yes. On a station with 6 staff, no</b>"],
       ["external provider","an organization outside ours","<b>yes, and the most expensive</b>"]])
    + "<p style='border:1.5px solid #3b3b5c;padding:8px'><b>A report about a shift pattern on a "
    "station with six staff is not anonymous, whatever our system promises.</b> So the policy says "
    "it: <b>“anonymity depends on the size of the group your report concerns; on a small site, "
    "assume you can be identified.”</b> <b>That sentence costs nothing and is the only reason "
    "the external line will be used by the people who most need it.</b></p>"
    + table_html(["#","What we took","Accountable","What the document does not claim"],
      [["1","counting both sides of a success story","C. Nkemelu","<b>not a planning rule</b>"],
       ["2","a cross-system query on one identifier","W. Zhao","<b>no detection from inside</b>"],
       ["3","the bounded exception, four conditions","W. Zhao","<b>a classification, not a "
        "probability</b>"],
       ["4","immediate cause separated from conditions","W. Zhao","<b>a metaphor, not a "
        "measurement</b>"],
       ["5","the four-block report format","W. Zhao","<b>not a finding of liability</b>"],
       ["6","drifts separated from bad standards","A. Holm","<b>one case; contested</b>"],
       ["7","sample size in every audit header","W. Zhao","<b>guidance; no sample size "
        "prescribed</b>"],
       ["8","one accountable name, no column","E. Okonjo","<b>no structures, no legal duties</b>"],
       ["9","commitments in the obligation register","H. Sato","<b>certifies the system, not "
        "compliance</b>"],
       ["10","five process indicators, no targets","W. Zhao","<b>may not apply elsewhere</b>"],
       ["11","a written reply within ten days","W. Zhao","<b>an argument; contested</b>"],
       ["<b>12</b>","four channels with their limits printed","<b>H. Sato</b>","<b>creates no legal "
        "protection; cannot create trust</b>"]])
    + "<p><b>E. Okonjo remains accountable for all twelve.</b> <b>Publishing a table does not move "
    "accountability.</b></p>"
    "<p><b>The fourth column is the whole of six books.</b> <b>Not a budget. Not a whole-life cost. "
    "Not an argument. Silent on title. Not a risk register. Not a population. Not compliance. Not "
    "process safety. And not anonymity on a site of six.</b></p>",
    "Source: ISO 37002:2021, Whistleblowing management systems — Guidelines, which provides "
    "guidelines for a whistleblowing management system based on trust, impartiality and protection, "
    "covering the receiving, assessing, addressing and concluding of reports of wrongdoing. It is "
    "guidelines rather than requirements, is not intended for certification, creates no legal rights "
    "or protections, and does not address the specific legal requirements of any jurisdiction."), 680)
S["pf12-f6"]=lambda: f_realia(tbl("Word study","Eleven structures, one per unit",
    ["Unit","Structure","Example"],
    [["1","concession","<b>Granted that</b> the mechanism is real…"],
     ["2","hindsight","<b>With hindsight</b> the nine form a line; <b>at the time</b>, nine items."],
     ["3","inevitability","<b>Given</b> the coupling, a response <b>is liable to</b> be wrong."],
     ["4","layered causation","<b>The immediate cause</b> was a lapse; four conditions existed."],
     ["5","findings","<b>It was found that</b>…; <b>we were unable to determine</b>…"],
     ["6","disputing an account","<b>The difficulty with that account is</b>…"],
     ["7","audit findings","<b>On the evidence sampled</b>…"],
     ["8","accountability","She <b>may delegate</b> and <b>remains accountable</b>."],
     ["9","",""],["10","",""],["11","",""]],
    note="Three rows left empty on purpose."), 660)
S["pf12-f7"]=lambda: f_realia(tbl("Twelve rows, four columns",
    "Thirty-six readings, one column",
    ["What we took","From what","Who is accountable","What it does not claim"],
    [["the specific practice","the document, with its date","one name","the sentence the document "
      "prints about itself"],
     ["…","…","…","<b>the one everybody drops</b>"]],
    note="<b>The fourth column has been the subject of all six books.</b>"), 640)
S["pf12-f8"]=lambda: f_icons([("envelope","a report received"),("magnifier","a report assessed"),
    ("stamp","a case concluded"),("padlock","a protection measure"),
    ("noentry","a small site where anonymity fails"),("clipboard","a twelve-row table")],
    cols=3, numbered=False)
S["pf12-f9"]=lambda: f_realia(doc("Reporting policy · extract",
    "Four channels, what each cannot do, and one keepable promise",
    table_html(["Channel","Anonymous in practice"],
      [["named line to compliance","<b>no, and not intended to be</b>"],
       ["named line to a non-executive director","<b>no</b>"],
       ["electronic channel, no identity","<b>yes at head office; on a site of 6, assume not</b>"],
       ["external provider","<b>yes</b>"]])
    + "<p><b>Anonymity depends on the size of the group your report concerns.</b> <b>On a small site, "
    "assume you can be identified, and use the external provider if that matters to you.</b></p>"
    "<p><b>Legal protection comes from the law where you work, not from this policy.</b> The "
    "applicable law for each of our <b>eleven locations</b> is listed overleaf; <b>for two of them we "
    "state that no statutory protection can be promised.</b></p>"
    + table_html(["Stage","Within"],
      [["receiving","<b>2 working days</b> — acknowledgment"],
       ["assessing","<b>10 working days</b> — written reply"],
       ["addressing","as agreed in the reply"],
       ["concluding","<b>a written outcome, always</b>"]])
    + "<p style='font-size:15px'><b>EVERY REPORT RECEIVES A WRITTEN REPLY WITHIN TEN WORKING DAYS, "
    "FROM A NAMED PERSON, EVEN WHERE THE REPLY IS THAT NOTHING WILL BE DONE AND WHY.</b></p>",
    "This is the only promise in the document entirely within our control. Reports to the previous "
    "line: 41, then 9, then 4."), 660)
S["pf12-f10"]=lambda: f_scene(860,400,
    people=[("hana",110,174,{}),("okonjo",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("form",250,148,0.22),("clipboard",360,150,0.24),
     ("review",520,148,0.22),("shelf",760,92,0.5)],
    board=(40,18,230,120,"THE MEASURE OF ALL OF IT",
      [("year 1","41"),("year 3","4")]),
    clockat=(700,34,22,3,30))
S["pf12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Policy A","Reassurance",
      "<p><i>All reports are treated in the strictest confidence and may be made "
      "anonymously.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>True of the software. False of a week on a site of "
      "six.</p>"), 380),
    lambda w,h: f_realia(doc("Policy B","Limits and one promise",
      "<p>Four channels with their practical limits, the applicable law by location, and <b>a written "
      "reply within ten working days.</b></p>"), 380),
    w=820, h=300, lt="ASSURANCES", rt="A PROMISE")
S["pf12-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Document A","One paragraph",
      "<p>Confidentiality promised. No channels distinguished. No law named. No reply "
      "commitment.</p>"), 380),
    lambda w,h: f_realia(doc("Document B","One page",
      "<p>Four channels with limits, eleven locations with their law, one reply commitment, and "
      "<b>twelve accountability rows with a fourth column.</b></p>"), 380),
    w=820, h=300, lt="A PARAGRAPH", rt="A PAGE")
S["pf12-f13"]=lambda: f_realia(form("Final planner",
    [("The channels",""),("What each cannot do",""),("Where the protection comes from",""),
     ("The one promise entirely within your control",""),("The accountability rows",""),
     ("The fourth column for each","")],
    note="Six boxes. Hand it to a partner; they ask what each channel cannot do."), 560)
S["pf12-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("okonjo",135,172,{}),("nkemelu",210,176,{"seated":True}),
     ("wei",290,172,{"seated":True}),("anders",370,176,{"seated":True}),
     ("nour",445,172,{}),("oksana",520,176,{"seated":True}),("sofia",595,170,{}),
     ("priya",660,172,{}),("bah",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("clipboard",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"THE MEASURE OF ALL OF IT",
      [("year 1","41"),("year 3","4")]),
    clockat=(278,34,22,3,30))
S["pf12-f15"]=lambda: f_chart([("yes",4),("only the external one",11),("no",8),
    ("we have no route",3),("it would depend on the subject",8)])
S["pf12-f16"]=lambda: f_realia(doc("On a desk in December",
    "The last desk of six books",
    "<p><b>A draft policy</b> with four channels.</p>"
    "<p><b>A site plan</b> showing a station with six staff.</p>"
    "<p><b>A list of eleven locations</b> with the applicable law against each.</p>"
    "<p><b>A twelve-row accountability table</b> with its fourth column filled.</p>"
    "<p><b>A three-year report chart.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The sentence telling people on small sites to assume "
    "they can be identified is the one that will be removed in review, and it is the only sentence in "
    "the document that will make anybody on a small site believe the others. Six books have arrived "
    "at the same column — the one where a document says what it does not claim — and in "
    "almost every story somebody had used a true document for the adjacent purpose in perfectly good "
    "faith. The thing none of the twelve documents can give us is the willingness of one person to "
    "write something down about somebody they will see on Tuesday, and the only measure of it we have "
    "is forty-one, nine, four.</i></p>",
    "Six o'clock. Twelve rows, four columns, and one column that has been the subject of all of "
    "it."), 660)
