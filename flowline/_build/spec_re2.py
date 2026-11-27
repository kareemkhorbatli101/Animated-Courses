# -*- coding: utf-8 -*-
"""Flowline Book 5 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Unit 4 ----------------
S["re04-f1"]=lambda: f_icons([("note","a blank sheet at the start of a project"),
    ("pencil","a concept sketch"),("map","a plot layout with two options"),
    ("stairwell","a hierarchy of five steps"),("noentry","a vessel removed"),
    ("container","a smaller inventory"),("magnifier","a gas detector"),
    ("padlock","a shutdown valve"),("wall","a firewall"),
    ("fireexit","an escape route"),("barcode","a bow-tie diagram"),
    ("barrier","a barrier as a vertical bar"),("table","a risk matrix"),
    ("tally","a quantified risk figure"),("calculator","a cost estimate"),
    ("note","what decision does this number change")],4)
S["re04-f2"]=lambda: f_scene(820,420,
    people=[("yusuf",120,176,{}),("omar",340,180,{"seated":True}),("samira",420,180,{"seated":True}),
     ("wei",500,180,{"seated":True}),("adeel",580,180,{"seated":True}),
     ("nour",660,180,{"seated":True}),("nadia",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("pencil",780,198,0.2)],
    board=(24,22,216,112,"FIVE STEPS",[("eliminate","cheapest"),("detect","buyable"),("mitigate","last")]),
    clockat=(258,34,22,10,0))
S["re04-f3"]=lambda: f_icons([("noentry","a vessel deleted from a drawing"),
    ("container","a smaller vessel, less inventory"),("magnifier","a gas detector on a frame"),
    ("padlock","a shutdown valve closing"),("wall","a firewall between two areas"),
    ("note","five levels, and only the bottom two change the drawing")],3)
S["re04-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six barriers",
    ["The hazard","The barrier","Which level","What tests or maintains it","What would tell you it had failed"],
    blankrows(6,5),
    note="The box at the foot: the one with nothing in the last column."), 660)
S["re04-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the document that tells you which method to use",
    "<p style='font-size:12px;color:#6b6861'>Source: ISO 17776:2016, <i>Petroleum and natural gas "
    "industries &mdash; Offshore production installations &mdash; Major accident hazard management "
    "during the design of new installations</i>. In our own words.</p>"
    "<p><b>What kind of document this is.</b> Not a method. A standard about <b>choosing and using "
    "methods</b> during <b>design</b>. It will not tell you how to run a study. It will tell you what "
    "to think about when deciding which study, when, and how much effort it deserves.</p>"
    "<p><b>The hierarchy.</b> <b>Eliminate</b> the hazard if you can. If not, <b>prevent</b> the "
    "event. Then <b>detect</b> it early. Then <b>control</b> it. Then <b>mitigate</b> the harm. The "
    "order matters because the higher levels depend on equipment working and assumptions holding, and "
    "the lowest depends on nothing, because the hazard is not there.</p>"
    "<p><b>An eliminated hazard needs no maintenance, no testing, no procedure, no competent person "
    "and no permit.</b> That is the whole argument for inherently safer design, and it is almost "
    "always made too late to act on.</p>"
    "<p><b>Barriers, drawn as a diagram.</b> Put the loss of control in the middle. Threats on the "
    "left, consequences on the right, barriers as vertical bars between them. The useful questions "
    "the shape forces: how many barriers are there really, are any two of them the same thing wearing "
    "two hats, who maintains each, <b>what tests it</b>, and <b>what would tell you it had "
    "failed</b>.</p>"
    "<p><b>Proportionate effort.</b> Screen first, then choose a technique for each group. A "
    "qualitative study may be enough. A quantified assessment may be needed where a decision depends "
    "on a number, or where options must be compared.</p>"
    "<p><b>WHAT THE STANDARD DOES NOT GIVE YOU.</b> A <b>threshold</b> &mdash; those come from "
    "national regulators. A <b>method</b> &mdash; it names techniques and teaches none. <b>Existing "
    "plant</b> &mdash; its scope is the design of new offshore installations. And it cannot solve the "
    "central problem, which it states honestly: the decisions that matter most are available only at "
    "the beginning, when the least is known.</p>",
    "By the time you have the information to be certain, the vessel is bought and <i>eliminate</i> is "
    "off the list."), 580)
S["re04-f6"]=lambda: f_realia(tbl("Word study",
    "Selecting and justifying",
    ["The phrase","What it does","An example"],
    [["we selected","names the choice","We selected a qualitative study for the utility systems."],
     ["on the basis that","gives the ground","On the basis that no decision depends on a number."],
     ["in preference to","names what you did not choose","In preference to a quantified assessment."],
     ["was considered and rejected on the grounds that","records the rejection","It was rejected on the grounds that the options do not differ."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>is appropriate where</i> and <i>is not warranted where</i>."), 700)
S["re04-f7"]=lambda: f_realia(tbl("Barrier diagram &mdash; loss of containment of sour gas",
    "Four bars drawn on the threat side",
    ["Side","Item","Note"],
    [["threat","corrosion","inspection program"],
     ["threat","overpressure","relief device"],
     ["threat","mechanical impact","barrier protection"],
     ["threat","operator error during isolation","procedure and permit"],
     ["<b>barrier 2</b>","<b>high level trip</b>","<b>same transmitter as barrier 4</b>"],
     ["<b>barrier 4</b>","<b>high level alarm</b>","<b>same transmitter as barrier 2</b>"],
     ["consequence","toxic exposure","the one that governs the response"],
     ["consequence","fire","&mdash;"],
     ["consequence","escalation to the adjacent vessel","about equipment, not people"]],
    note="Four bars drawn. <b>Two of them are one instrument.</b> So there are three."), 640)
S["re04-f8"]=lambda: f_icons([("noentry","a vessel removed from a layout"),
    ("container","a line redesigned to hold less"),("magnifier","a gas detector"),
    ("padlock","an emergency shutdown valve"),("wall","a firewall"),
    ("note","which level?")],3)
S["re04-f9"]=lambda: f_realia(tbl("Method selection record",
    "Deir gas conditioning skid &middot; concept stage",
    ["System","Technique chosen","The ground"],
    [["Inlet separation","qualitative study","conventional design, no option comparison"],
     ["Glycol contactor","qualitative study + barrier review","sour gas, near an occupied building"],
     ["Regeneration","qualitative study","conventional design"],
     ["Utilities","qualitative study","low hazard"],
     ["Flare and relief","qualitative study","follows a published standard"],
     ["Export metering","qualitative study","no process hazard"],
     ["<b>Rejected</b>","<b>full quantified assessment</b>","<b>the only live decision is the contactor distance</b>"],
     ["<b>Rejected</b>","<b>consequence modeling study</b>","<b>would not change the layout options</b>"]],
    note="<b>What we did not choose, and why.</b> Screening criteria: sour gas inventory, and "
    "proximity to a normally occupied building."), 660)
S["re04-f10"]=lambda: f_scene(800,400,
    people=[("yusuf",180,180,{}),("wei",300,176,{}),("samira",620,180,{"seated":True})],
    props=[("desk",260,0,1.0),("pencil",340,198,0.2),("table",580,0,0.9),
     ("note",660,198,0.2),("barcode",230,198,0.2)],
    clockat=(60,40,22,11,0))
S["re04-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Record A",None,
    "<p>Techniques used: a qualitative hazard study on all nine systems.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Record B",None,
    "<p>The techniques, the <b>screening criteria</b>, <b>what was rejected and why</b>, and a note on "
    "<b>barrier independence</b>: four bars drawn, two of them one transmitter.</p>",None),380)[0:3],
    800,300,"What we did","What we did, and did not")
S["re04-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Appropriate risk assessment methodologies have been applied in line with good practice. Risks "
    "are considered to be as low as reasonably practicable.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p><b>Screening:</b> nine systems against two criteria. <b>Selected:</b> a qualitative study for "
    "all nine, <b>on the basis that</b> no option comparison depends on a number; a barrier review "
    "for the sour gas system <b>in preference to</b> a quantified assessment. <b>Rejected:</b> a full "
    "quantified assessment, <b>on the grounds that</b> the only live decision is a separation "
    "distance better answered now for nothing. <b>Already found:</b> four bars, two of them one "
    "transmitter, so three.</p>",None),380)[0:3],
    800,300,"In line with good practice","With the ground for each choice")
S["re04-f13"]=lambda: f_realia(form("Plan your method selection",
    [("The systems and the screening criteria",BLANK),("The technique selected, with its ground",BLANK),
     ("What was rejected, with its reason",BLANK),("Any barrier independence finding",BLANK),
     ("What you are not claiming",BLANK),("Two requests",BLANK)],
    note="Six boxes. Both requests must still be cheap at this stage."), 560)
S["re04-f14"]=lambda: f_scene(1000,450,
    people=[("yusuf",60,176,{}),("wei",130,172,{}),("samira",205,176,{}),
     ("omar",290,172,{}),("adeel",365,176,{}),("nour",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("haddad",590,170,{}),("ahmad",655,172,{}),
     ("yara",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("pencil",350,198,0.2),
     ("barcode",420,198,0.2),("thermostat",550,196,0.2),("table",650,0,1.0),
     ("note",860,198,0.2),("map",930,196,0.22)],
    board=(40,22,206,112,"WHAT DOES IT CHANGE?",[("eliminate","now"),("4 bars","3 barriers"),("12 weeks","for what?")]),
    clockat=(262,34,22,12,0))
S["re04-f15"]=lambda: f_chart([("yes, and I can name it",3),("yes, I think so",5),
    ("no",6),("I do not know",5),("we have never had one",2)], unit="engineers")
S["re04-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Eleven weeks old, and a vessel that costs a rubber to move",
    "<p><b>A method selection record</b>, three pages.</p>"
    "<p><b>A concept sketch</b> with a contactor fifteen meters from a control room.</p>"
    "<p><b>A bow-tie</b> with four bars, two of them joined by a pencil line to one transmitter.</p>"
    "<p><b>A consultant's proposal</b> for twelve weeks of quantified assessment.</p>"
    "<p><b>A change order from a previous project</b>, for the same move, at a hundred times the "
    "cost.</p>"
    "<p><i>The information needed to be confident about the right distance will exist in about "
    "eighteen months. The decision is available today.</i></p>",
    "Seven o'clock. The cheap decisions are the early ones, and the early ones are made with the "
    "least information."), 620)

# ---------------- Unit 5 ----------------
S["re05-f1"]=lambda: f_icons([("form","a permit in triplicate"),
    ("tray","a permit tray on a wall"),("tray","a second tray in another room"),
    ("engine","a pump with a maintenance tag"),("shutter","a relief valve replaced by a blank"),
    ("certificate","a recertification label"),("meeting","a shift handover"),
    ("logsheet","a handover log book"),("timer","a suspended permit"),
    ("signature","a signature box"),("padlock","an isolation certificate"),
    ("dashboard","a control room at night"),("badge","a shift supervisor"),
    ("note","an empty cross-reference box"),("book","an inquiry in two volumes"),
    ("note","one hundred and sixty-seven")],4)
S["re05-f2"]=lambda: f_scene(860,430,
    people=[("yusuf",120,176,{}),("omar",340,180,{"seated":True}),("ahmad",420,180,{}),
     ("samira",500,180,{"seated":True}),("haddad",580,176,{}),
     ("nadia",660,180,{"seated":True}),("nour",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("tray",790,198,0.2),
     ("dashboard",760,194,0.2)],
    board=(24,22,216,112,"TWO PERMITS, ONE PUMP",[("P-212","suspended"),("P-212","PSV off"),("cross-ref","empty")]),
    clockat=(258,34,22,6,45))
S["re05-f3"]=lambda: f_icons([("logsheet","a handover log with four headings"),
    ("timer","a suspended permit"),("engine","equipment with two permits"),
    ("speechbubble","a verbal briefing"),("note","a blank cross-reference box"),
    ("note","four things, and the fourth is the one that is lost")],3)
S["re05-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six permits",
    ["The equipment","The work","Permit status","Another permit on the same equipment?","Where the two are filed"],
    blankrows(6,5),
    note="The box at the foot: two permits, two rooms."), 660)
S["re05-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the night that rewrote every permit form in the industry",
    "<p style='font-size:12px;color:#6b6861'>Source: <i>The Public Inquiry into the Piper Alpha "
    "Disaster</i>, report by the Hon. Lord Cullen, presented to Parliament and published by HMSO, "
    "1990, in two volumes. In our own words, and nothing is attributed to it that it does not "
    "say.</p>"
    "<p><b>What the document is.</b> A public inquiry into the destruction of an offshore production "
    "platform in the North Sea on <b>6 July 1988</b>, in which <b>167 people died</b>. It published "
    "its findings and <b>106 recommendations</b>, and led in that country to a different regulatory "
    "approach.</p>"
    "<p><b>The part this unit is about.</b> Work was in progress on one of two condensate injection "
    "pumps. Separately, a <b>pressure safety valve</b> on that pump had been <b>removed</b> for "
    "recertification, under a <b>different permit</b>. That work was not completed during the day. At "
    "the <b>shift handover</b>, the state of it was <b>not effectively communicated</b> to the "
    "oncoming shift. Later that evening, with the other pump unavailable, the pump was "
    "<b>started</b>.</p>"
    "<p><b>Findings on the system include</b> that permits were <b>not consistently "
    "cross-referenced</b> where more than one affected the same equipment; that permits were held in "
    "a way that did not bring related permits together; that the handover did not reliably transfer "
    "the status of <b>incomplete</b> work; and that the system as operated depended on <b>informal "
    "communication</b> rather than on the documentation.</p>"
    "<p><b>The rest of the report is about escalation.</b> Firewalls designed to resist fire rather "
    "than explosion. Continued supply from <b>pipeline risers</b>. The position of the accommodation. "
    "<b>The initiating event killed very few people. The escalation killed almost everybody.</b></p>"
    "<p><b>WHAT THE REPORT IS AND IS NOT.</b> One event, one installation, the regime of that time. "
    "<b>Not a criminal proceeding; it does not establish individual liability.</b> Its recommendations "
    "are addressed to one industry in one country. What travels is the <b>mechanism</b>: two permits, "
    "two places, one handover, one conclusion that existed in nobody's hands.</p>",
    "The report produced better forms everywhere. A cross-reference box is only as good as the thirty "
    "seconds somebody spends on it."), 580)
S["re05-f6"]=lambda: f_realia(tbl("Word study",
    "Responsibility",
    ["The structure","What it does","An example"],
    [["was responsible for","names a duty","The issuing authority was responsible for cross-referencing."],
     ["it was found that","reports a finding impersonally","It was found that the status was not effectively communicated."],
     ["the inquiry concluded that","reports a conclusion with its source","The inquiry concluded that the system depended on informal communication."],
     ["no one had","the gap, stated plainly","No one had both permits in front of them."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>it was nobody's job to</i> and <i>rested on informal "
    "communication</i>."), 700)
S["re05-f7"]=lambda: f_matrix(["Permit A","Permit B"],
    [("Equipment",["P-212","P-212"]),
     ("Work",["overhaul, mechanical","relief valve removed for recertification"]),
     ("Status",["suspended until tomorrow","in progress, not complete"]),
     ("Blank flange fitted?",["not stated","<b>yes</b>"]),
     ("<b>Cross-reference</b>",["<b>empty</b>","<b>empty</b>"]),
     ("Filed in",["mechanical tray, workshop","valves tray, instrument room"])], 660)
S["re05-f8"]=lambda: f_icons([("form","issued, work in progress"),
    ("timer","suspended overnight"),("padlock","cancelled, returned to service"),
    ("note","an empty cross-reference box"),("engine","two permits on one pump"),
    ("magnifier","which state, and who holds it?")],3)
S["re05-f9"]=lambda: f_realia(tbl("Shift handover log",
    "Outgoing to night shift &middot; 19:00",
    ["Section","Entry"],
    [["1 &middot; Plant state","normal, train 2 at 86 percent"],
     ["2 &middot; Changed since 14:00","PSV-212 removed at 16:10, permit 4471, not complete"],
     ["3 &middot; Suspended or incomplete","permit 4468 suspended to 07:00; permit 4471 as above"],
     ["<b>4 &middot; Must not happen this shift</b>","<b>&mdash; empty &mdash;</b>"],
     ["Open permits","eleven, two of them on P-212"]],
    note="<b>Eleven permits, four sections, one empty.</b>"), 620)
S["re05-f10"]=lambda: f_scene(800,400,
    people=[("yusuf",180,180,{}),("haddad",300,176,{}),("ahmad",600,180,{}),
     ("samira",680,180,{})],
    props=[("desk",260,0,1.0),("logsheet",340,198,0.2),("form",420,198,0.2),
     ("form",470,198,0.2),("dashboard",230,194,0.2)],
    clockat=(60,40,22,7,0))
S["re05-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Log A",None,
    "<p>Plant state normal. Eleven permits open. P-212 under maintenance. Nothing significant to "
    "report.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Log B",None,
    "<p>The same, plus the <b>suspended and incomplete</b> section with <b>both P-212 permits "
    "cross-referenced</b>, and a fourth section containing one instruction: <b>do not start "
    "P-212</b>.</p>",None),380)[0:3],
    800,300,"Facts","Facts, and a conclusion")
S["re05-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Handover 19:00. Plant state normal. Eleven permits open. P-212 under maintenance. Nothing "
    "significant to report.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p><b>Changed since 14:00:</b> PSV-212 removed at 16:10, permit 4471, <b>not complete</b>; blank "
    "flange fitted; valve in the workshop. <b>Suspended:</b> permit 4468, overhaul, to 07:00. <b>Both "
    "permits are now cross-referenced and both are in this room.</b> A tag is fitted at the pump. "
    "<b>Must not happen this shift: do not start P-212.</b> If P-211 trips, reduce rate. Samira will "
    "confirm the tag at midnight.</p>",None),380)[0:3],
    800,300,"Nothing significant","Six words that are the whole handover")
S["re05-f13"]=lambda: f_realia(form("Plan your handover",
    [("Plant state",BLANK),("What changed since the last handover",BLANK),
     ("What is suspended or incomplete",BLANK),("Any equipment with more than one permit",BLANK),
     ("One instruction beginning do not",BLANK),("Who will confirm it during the shift",BLANK)],
    note="Six boxes. The fifth must follow from the ones above it."), 560)
S["re05-f14"]=lambda: f_scene(1000,450,
    people=[("yusuf",60,176,{}),("haddad",130,172,{}),("ahmad",205,176,{}),
     ("samira",290,172,{}),("omar",365,176,{}),("nour",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("adeel",590,170,{}),("yara",655,172,{}),
     ("wei",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("tray",350,198,0.2),
     ("tray",400,198,0.2),("form",550,198,0.2),("table",650,0,1.0),
     ("certificate",860,198,0.2),("book",930,198,0.2)],
    board=(40,22,206,112,"WHO HOLDS IT?",[("permit A","correct"),("permit B","correct"),("together","do not start")]),
    clockat=(262,34,22,8,0))
S["re05-f15"]=lambda: f_chart([("yes, always",3),("usually",5),("no",6),
    ("I do not know",4),("we have no permit system",3)], unit="supervisors")
S["re05-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Two correct pieces of paper in two rooms",
    "<p><b>Two permits</b> for the same pump, both correctly completed, both cross-reference boxes "
    "empty.</p>"
    "<p><b>A handover log</b> with its fourth section blank.</p>"
    "<p><b>A relief valve</b> with a recertification tag on it.</p>"
    "<p><b>A blank flange</b>, where the valve used to be.</p>"
    "<p><b>A mimic panel photograph</b> showing a stopped pump with a suspended permit against it.</p>"
    "<p><i>Everyone who filled in a form did what their form required. Nobody held both forms at the "
    "same time.</i></p>",
    "Seven o'clock. The conclusion lived in nobody's hands."), 620)

# ---------------- Unit 6 ----------------
S["re06-f1"]=lambda: f_icons([("map","a space with three boundaries"),
    ("footprints","a dot moving inside it"),("signpost","efficiency pressure"),
    ("walk","least effort"),("logsheet","a sampling frequency reduced"),
    ("clipboard","four rounds crossed to two"),("pallet","a spare pump not replaced"),
    ("balance","a tolerance widened"),("padlock","a bypass left in"),
    ("firealarm","an alarm limit raised"),("note","a cost saving memo"),
    ("coins","a performance bonus"),("barrier","an unmarked edge"),
    ("racking","defenses with the top one gone"),("timer","and nothing happening"),
    ("note","nothing happened, so nothing is wrong")],4)
S["re06-f2"]=lambda: f_scene(820,420,
    people=[("yusuf",120,176,{}),("omar",340,180,{"seated":True}),("samira",420,180,{"seated":True}),
     ("adeel",500,180,{"seated":True}),("nour",580,180,{"seated":True}),
     ("nadia",660,180,{"seated":True}),("ahmad",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("map",780,196,0.2)],
    board=(24,22,216,112,"THREE EDGES",[("money","a report"),("workload","a resignation"),("safety","nothing")]),
    clockat=(258,34,22,8,30))
S["re06-f3"]=lambda: f_icons([("signpost","a cost reduction target"),
    ("walk","a shorter route"),("coins","a monthly profit report"),
    ("note","a resignation letter"),("barrier","a dotted edge, nothing coming back"),
    ("note","two pushes, one direction")],3)
S["re06-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six changes nobody decided",
    ["What changed","When","Who approved it","The reason","Looked at together with the others?"],
    blankrows(6,5),
    note="The fifth column will say no six times. The box at the foot: none of these was a decision "
    "about safety."), 660)
S["re06-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: why a plant moves when nobody moves it",
    "<p style='font-size:12px;color:#6b6861'>Source: Jens Rasmussen, \"Risk management in a dynamic "
    "society: a modeling problem\", <i>Safety Science</i>, 1997. In our own words.</p>"
    "<p><b>The central picture.</b> The way a plant actually operates is a point inside a space with "
    "<b>three boundaries</b>. The boundary of <b>economic failure</b>: go too far and the operation is "
    "not viable. The boundary of <b>unacceptable workload</b>: go too far and the people cannot do "
    "it. And the <b>safety</b> boundary: go past it and you lose control.</p>"
    "<p><b>The two gradients.</b> A <b>management gradient towards efficiency</b> &mdash; cheaper, "
    "faster, fewer people. And an <b>individual gradient towards least effort</b> &mdash; the way that "
    "is easiest, which is usually also quickest. <b>Neither is misconduct.</b> The first is how an "
    "organization survives; the second is how a person survives thirty years of shift work.</p>"
    "<p><b>Both point the same way</b>, towards the safety boundary, and <b>there is no gradient "
    "pointing back</b>, because nothing rewards you for keeping a margin you never needed.</p>"
    "<p><b>Why the movement is invisible.</b> The first two boundaries give <b>feedback</b>: a monthly "
    "report, a resignation. <b>The safety boundary gives none until it is crossed</b>, because "
    "<b>defense in depth</b> means losing one protection produces <b>no observable consequence</b>. "
    "The plant keeps running. The margin is gone and the evidence that it is gone is nothing "
    "happening.</p>"
    "<p><b>What follows practically.</b> If the boundary gives no feedback, <b>construct</b> the "
    "feedback. Decide what the margin is, write down where it is, measure whether you still have it, "
    "and make the <b>loss of a protection a reportable event in itself</b>.</p>"
    "<p><b>WHAT THE PAPER DOES NOT DO.</b> It is <b>not a method</b>: no procedure, no forms. It "
    "<b>does not tell you where the boundary is</b> &mdash; only that it is unmarked. It <b>predicts "
    "nothing</b> about any particular plant. And it does not excuse anybody from noticing.</p>",
    "Risk cannot be managed by looking at one level. Government, regulator, company, plant, staff and "
    "the work all interact."), 580)
S["re06-f6"]=lambda: f_realia(tbl("Word study",
    "Gradual change",
    ["The structure","What it does","An example"],
    [["gradually","slow movement, no single step","Sampling has gradually become less frequent."],
     ["increasingly","a growing tendency","Bypasses are increasingly left in overnight."],
     ["over time","a period, not a moment","Over time, the rounds have gone from four to two."],
     ["little by little","emphasizes the smallness of each step","Little by little, the margin has gone."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>each one on its own</i> and <i>cumulatively</i>. Those two are the "
    "whole unit."), 700)
S["re06-f7"]=lambda: f_realia(tbl("Twelve changes, five years",
    "Every reason is a reason you would accept",
    ["","What changed","Why"],
    [["1","sampling weekly to monthly","results consistently well inside limits"],
     ["2","night rounds four to two","a vacancy that was not filled"],
     ["3","spare pump not replaced","long lead time, standby never needed"],
     ["4","a tolerance widened one percent","a supplier could not meet the old one"],
     ["5","bypass permitted overnight","the shift change disrupted the work"],
     ["6","alarm limit raised three percent","the alarm activated in normal operation"],
     ["7","quarterly test to six-monthly","three years of clear results"],
     ["8","one fire pump out for overhaul","the other was available"],
     ["9","drawing update deferred","the project team demobilized"],
     ["10","a vacancy left open","a recruitment freeze"],
     ["11","contractor supervision reduced","the crews were experienced"],
     ["12","an audit postponed a quarter","a turnaround"]],
    note="<b>No safety assessment was required for any of the twelve, because each one was below the "
    "threshold.</b>"), 660)
S["re06-f8"]=lambda: f_icons([("signpost","a cost reduction target"),
    ("walk","a crew doing a job the short way"),("coins","a monthly financial report"),
    ("note","a resignation letter"),("racking","a protection removed, the plant still running"),
    ("magnifier","which boundary, which gradient?")],3)
S["re06-f9"]=lambda: f_realia(tbl("Change register extract",
    "Hasakah &middot; five years",
    ["","Entry"],
    [["Changes recorded","twelve"],
     ["Assessment required","<b>none &mdash; all below threshold</b>"],
     ["Approvers","<b>nine different people</b>"],
     ["Reviewed together","<b>never</b>"],
     ["Protection count 2019","three independent protections"],
     ["Protection count now","<b>one</b>"],
     ["Incidents in the period","<b>none</b>"]],
    note="<b>Twelve approvals, no decision.</b>"), 600)
S["re06-f10"]=lambda: f_scene(800,400,
    people=[("yusuf",180,180,{}),("haddad",300,176,{}),("adeel",620,180,{"seated":True})],
    props=[("desk",260,0,1.0),("logsheet",340,198,0.2),("table",580,0,0.9),
     ("racking",700,192,0.22),("spreadsheet",230,198,0.2)],
    clockat=(60,40,22,10,0))
S["re06-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Register A",None,
    "<p>Twelve changes, in date order, across five pages of a register, each with its approval.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Register B",None,
    "<p>The same twelve on <b>one page</b>, with a <b>protection count</b> at the top: <b>three in "
    "2019, one now</b>.</p>",None),380)[0:3],
    800,300,"Five pages","One page")
S["re06-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>There has been a gradual erosion of operating standards at Hasakah over recent years and risk "
    "has increased. A review is recommended.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p><b>Twelve changes</b> on one sheet with dates and approvers. <b>Each one on its own was "
    "reasonable</b>, approved by a competent person, below the assessment threshold. Nine approvers; "
    "<b>nobody has seen them on one page before, including me</b>. <b>Protection count: three in 2019, "
    "one today.</b> No incident has occurred &mdash; and with one protection carrying the system that "
    "is a weaker statement than it was with three. <b>I am not suggesting any decision was wrong.</b> "
    "Requesting: review the twelve as one proposal; make the loss of a protection reportable.</p>",
    None),380)[0:3],
    800,300,"Erosion","Twelve changes and a protection count")
S["re06-f13"]=lambda: f_realia(form("Plan your drift note",
    [("The changes, with dates and approvers",BLANK),("Each one on its own was reasonable",BLANK),
     ("The protection count then and now",BLANK),
     ("What the absence of incidents does and does not tell you",BLANK),
     ("What you are not suggesting",BLANK),("Two requests",BLANK)],
    note="Six boxes. The concession comes before the finding."), 560)
S["re06-f14"]=lambda: f_scene(1000,450,
    people=[("yusuf",60,176,{}),("haddad",130,172,{}),("adeel",205,176,{}),
     ("samira",290,172,{}),("omar",365,176,{}),("nour",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("ahmad",590,170,{}),("yara",655,172,{}),
     ("wei",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("logsheet",350,198,0.2),
     ("racking",420,192,0.22),("clipboard",550,198,0.2),("table",650,0,1.0),
     ("pallet",860,198,0.2),("book",930,198,0.2)],
    board=(40,22,206,112,"NOBODY DECIDED THIS",[("3 in 2019","protections"),("1 now","protections"),("0","incidents")]),
    clockat=(262,34,22,11,0))
S["re06-f15"]=lambda: f_chart([("yes, and I can name them",3),("yes, roughly",5),
    ("no",6),("I did not know they were counted",6),("we have no main hazard",1)], unit="operators")
S["re06-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Twelve approvals and no decision",
    "<p><b>A single sheet</b> with twelve numbered changes, nine approver names and five years of "
    "dates.</p>"
    "<p><b>A protection status list</b> showing one of three remaining.</p>"
    "<p><b>A rounds sheet</b> with four crossed through and two written in.</p>"
    "<p><b>A photograph of an empty pallet</b> in a store, where a spare pump used to stand.</p>"
    "<p><b>A five-year incident record</b> showing none.</p>"
    "<p><i>Nobody removed two protections. Two protections were, at different times, for different "
    "sensible reasons, allowed to become unavailable and not restored.</i></p>",
    "Seven o'clock. If somebody had done something wrong we would have a thing to fix."), 620)
