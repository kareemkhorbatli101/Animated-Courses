# -*- coding: utf-8 -*-
"""Flowline Book 3 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]
TICK = "<b style='color:#2f6b3a'>&#10003;</b>"
CROSS = "<b style='color:#8a2f2f'>&#10007;</b>"

# ---------------- Unit 10 ----------------
S["rc10-f1"]=lambda: f_icons([("container","a welded storage tank"),
    ("roof","a floating roof"),("torch","a shell plate weld"),
    ("wall","a bund wall"),("thermostat","a level gauge"),
    ("firealarm","a high level alarm"),("firealarm","a high-high alarm"),
    ("barrier","an independent level switch"),("padlock","an automatic shutdown valve"),
    ("dashboard","a control room screen"),("phone","an operator on the telephone"),
    ("timer","a stopwatch"),("calculator","a fill rate"),
    ("balance","a volume between two levels"),("rain","a tank overflowing at the rim"),
    ("note","the subtraction nobody does")],4)
S["rc10-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("samira",405,180,{"seated":True}),
     ("yusuf",490,180,{"seated":True}),("haddad",570,180,{}),("ahmad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("container",715,190,0.26)],
    board=(30,24,214,110,"SEVEN AGAINST ELEVEN",[("110 m3","above the alarm"),("900 m3/h","fill rate"),("7 min","you have")]),
    clockat=(262,36,22,13,30))
S["rc10-f3"]=lambda: f_icons([("eye","an operator watching the level"),
    ("firealarm","a high alarm"),("barrier","a high-high from an independent device"),
    ("padlock","an automatic valve closing"),("wall","a bund holding a spill"),
    ("note","four layers and a wall")],3)
S["rc10-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six tanks, and one division",
    ["The tank","Volume above the high-high, m3","Max fill rate, m3/h","Time that gives you","Time to stop the fill"],
    blankrows(6,5),
    note="Do the division. The box at the foot: the tank where the second number is bigger than the "
    "first."), 660)
S["rc10-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the tank, and the seven minutes",
    "<p style='font-size:12px;color:#6b6861'>Source: API Standard 650, <i>Welded Tanks for Oil "
    "Storage</i>, read alongside API RP 2350, <i>Overfill Protection for Storage Tanks in Petroleum "
    "Facilities</i>. In our own words.</p>"
    "<p><b>Two documents, two halves.</b> API 650 is about <b>building</b> the tank: plates, bottom, "
    "roof, welding, testing, fittings. It is not about filling it, and a perfectly built tank will "
    "overflow exactly as readily as a badly built one. API RP 2350 is about <b>not overfilling</b> "
    "it, and treats overfill protection as a <b>system</b>: levels, alarms, written procedures, "
    "response times and people.</p>"
    "<p><b>The layers.</b> The operator watching the level. The high level alarm. The high-high alarm "
    "from an <b>independent</b> device. Automatic shutdown. And then the <b>bund</b>, which prevents "
    "nothing and contains what has already come out.</p>"
    "<p><b>Why <i>independent</i> matters most.</b> If the high and high-high alarms are both driven "
    "from one transmitter, a frozen transmitter silences both. Two alarms from one instrument are one "
    "layer wearing two hats, and on paper they look like two.</p>"
    "<p><b>The arithmetic.</b> Take the volume between the high-high alarm and the overflow point. "
    "Divide it by the maximum fill rate. That is the <b>time you have</b>. Now find out how long it "
    "takes, on the worst shift of the week, from the alarm to the flow stopping.</p>"
    "<p><b>If the second number is larger than the first, the alarm is not a protection.</b> It is a "
    "record of the moment the overflow became certain.</p>",
    "Neither document tells you your own volumes, fill rate or response time. Those are your numbers "
    "and you have to go and get them."), 580)
S["rc10-f6"]=lambda: f_realia(tbl("Word study",
    "Layers and failure",
    ["The phrase","What it does","An example"],
    [["in the event that","introduces a failure case","In the event that the high alarm is missed, the high-high sounds."],
     ["fails to","names the failure precisely","If the operator fails to respond within four minutes…"],
     ["in which case","gives the consequence","…in which case the shutdown valve closes."],
     ["as a last resort","the final layer","As a last resort, the bund contains the spill."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>if that fails</i> and <i>on its own</i>. <i>As a last resort</i> is "
    "doing a lot of work; ask what it admits."), 680)
S["rc10-f7"]=lambda: f_realia(tbl("Tank 2 &mdash; the subtraction",
    "Maximum fill rate 900 cubic meters an hour",
    ["Level","Volume above it, m3","Time to overflow at max rate"],
    [["Working level","640","42 minutes"],
     ["High level alarm","310","20 minutes"],
     ["High-high level alarm","<b>110</b>","<b>7 minutes 20 seconds</b>"],
     ["Critical level","40","2 minutes 40 seconds"],
     ["<b>Measured time to stop the fill</b>","<b>&mdash;</b>","<b>11 minutes (drill, 12 March)</b>"]],
    note="Available seven minutes, measured eleven. On these figures the high-high alarm records the "
    "moment an overflow becomes certain."), 600)
S["rc10-f8"]=lambda: f_icons([("container","a high-high alarm with twenty minutes above it"),
    ("timer","one with three minutes"),("noentry","two alarms from one transmitter"),
    ("padlock","an independent switch wired to a valve"),
    ("firealarm","a silenced alarm on a panel"),
    ("magnifier","protection or decoration?")],3)
S["rc10-f9"]=lambda: f_realia(tbl("Overfill protection assessment &mdash; tank 2",
    "Four layers, and which instrument drives each",
    ["Layer","Driven by","Independent?"],
    [["Operator watching the level","a person on rounds","&mdash;"],
     ["High level alarm","transmitter LT-204",CROSS],
     ["High-high level alarm","<b>transmitter LT-204</b>",CROSS],
     ["Automatic shutdown","<b>none fitted</b>",CROSS],
     ["Bund","&mdash;","not a layer"]],
    note="Two of the four layers are the same instrument. Loop drawing E-0412. A frozen transmitter "
    "reads a steady level, which is indistinguishable from a tank that is not filling."), 600)
S["rc10-f10"]=lambda: f_scene(800,400,
    people=[("nour",180,180,{}),("samira",300,176,{}),("haddad",620,180,{})],
    props=[("desk",120,0,1.0),("logsheet",200,196,0.24),("spreadsheet",260,196,0.22),
     ("dashboard",540,190,0.3),("firealarm",700,198,0.2)],
    clockat=(60,40,22,14,0))
S["rc10-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Summary A",None,
    "<p>Tank 2 has high and high-high level alarms and a bund. Overfill protection is considered "
    "adequate.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Summary B",None,
    "<p>Volumes above each level, the maximum fill rate, three calculated times, the measured drill "
    "time of <b>eleven minutes</b>, and which instrument drives which alarm &mdash; <b>both from "
    "LT-204</b>.</p>",None),380)[0:3],
    800,300,"Two alarms and a bund","Two numbers and one transmitter")
S["rc10-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Tank 2 has high and high-high level alarms and a bund. Overfill protection is considered "
    "adequate. Operators are aware of the response procedure.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>110 cubic meters above the high-high alarm; maximum fill rate 900 an hour; <b>available time "
    "7 minutes 20 seconds</b>. Measured in the drill of 12 March: <b>11 minutes</b>. Both alarms "
    "driven from <b>LT-204</b>, loop drawing E-0412, so one layer and not two. The bund is not "
    "counted. Request: <b>one independent level switch wired directly to close the inlet valve</b>, "
    "and a repeat of the drill.</p>",None),380)[0:3],
    800,300,"Considered adequate","Seven against eleven")
S["rc10-f13"]=lambda: f_realia(form("Plan your overfill note",
    [("The volume above the high-high alarm",BLANK),("The maximum fill rate",BLANK),
     ("The available time",BLANK),("The measured response time, with the drill date",BLANK),
     ("Which instrument drives which alarm",BLANK),("One request",BLANK)],
    note="Six boxes. If the fourth is empty, say what it would take to fill it."), 560)
S["rc10-f14"]=lambda: f_scene(1000,450,
    people=[("nour",60,176,{}),("samira",130,172,{}),("omar",205,176,{}),
     ("haddad",290,172,{}),("yusuf",365,176,{}),("ahmad",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("adeel",590,170,{}),("ida",655,172,{}),
     ("lars",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.22),
     ("container",425,190,0.28),("timer",550,198,0.2),("table",650,0,1.0),
     ("wall",860,190,0.26),("thermostat",930,196,0.2)],
    board=(40,22,206,112,"SEVEN AGAINST ELEVEN",[("available","7 min"),("measured","11 min"),("so","not a protection")]),
    clockat=(262,34,22,16,0))
S["rc10-f15"]=lambda: f_chart([("yes for all of them",2),("yes for some",4),
    ("no",8),("I have never seen the figure",6),("we have no high-high alarm",3)], unit="operators")
S["rc10-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Four boxes on a drawing and one transmitter",
    "<p><b>An overfill assessment</b> with seven minutes and eleven minutes circled.</p>"
    "<p><b>A loop drawing</b> showing two alarms branching from one transmitter.</p>"
    "<p><b>A protection drawing</b> showing them as separate boxes.</p>"
    "<p><b>A drill record</b> from March.</p>"
    "<p><b>A bund drain valve</b>, in good condition.</p>"
    "<p><i>Everybody on the site would describe the tank as protected, and they would be describing "
    "the drawing accurately. In eighteen years it has never overflowed.</i></p>",
    "Seven o'clock. An overfill is not a frequent event anywhere, which is why history is not "
    "evidence."), 620)

# ---------------- Unit 11 ----------------
S["rc11-f1"]=lambda: f_icons([("ship","a tanker alongside"),("container","a terminal"),
    ("bridge","a jetty"),("fusebox","a manifold"),("crane","a loading arm"),
    ("chain","to moor"),("thread","a mooring line"),("stairwell","a gangway"),
    ("form","a checklist with two signature boxes"),("handshake","to agree"),
    ("meeting","jointly"),("spreadsheet","a cargo plan"),
    ("calculator","an agreed maximum rate"),("timer","topping off"),
    ("firealarm","an emergency stop"),("cloud","inert")],4)
S["rc11-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("ida",405,180,{}),
     ("haddad",490,180,{}),("samira",570,180,{"seated":True}),
     ("yusuf",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("form",715,198,0.2)],
    board=(30,24,214,110,"SIGNED BY BOTH",[("ship","one column"),("terminal","another"),("both","the third")]),
    clockat=(262,36,22,14,0))
S["rc11-f3"]=lambda: f_icons([("spreadsheet","a cargo plan with volumes per tank"),
    ("calculator","an agreed maximum rate"),("timer","a topping-off procedure"),
    ("firealarm","an emergency stop test"),("phone","a radio check between two people"),
    ("note","four agreements before the hose")],3)
S["rc11-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six activities where two organizations share a hazard",
    ["The activity","The two parties","The document both sign","What each is responsible for","If they disagree?"],
    blankrows(6,5),
    note="The last column is the test. The box at the foot: the one with no joint document at all, and "
    "what the two sides rely on instead."), 660)
S["rc11-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: two organizations and one hose",
    "<p style='font-size:12px;color:#6b6861'>Source: the <i>International Safety Guide for Oil "
    "Tankers and Terminals</i>, sixth edition, 2020, published jointly by the International Chamber "
    "of Shipping, the Oil Companies International Marine Forum and the International Association of "
    "Ports and Harbors. In our own words.</p>"
    "<p>A tanker at a terminal is the only place in this industry where <b>two separate firms hold "
    "two ends of one hazard</b>. Neither is in charge of the other. There is no shared manager and no "
    "shared procedure. Often there is no shared first language.</p>"
    "<p><b>The ship/shore safety checklist</b> is a list of items. Each one is marked as the ship's "
    "job, the terminal's job, or <b>both</b>. A person from each side signs it before the hose goes "
    "on. Some items must be agreed. Some must be checked again later.</p>"
    "<p>Almost nothing on it is news to either side. <b>The point is to make the agreement plain, "
    "written and signed</b>, item by item, by named people, before anything is joined up.</p>"
    "<p><b>Four things must be agreed, not assumed.</b> The cargo plan and the top rate. The "
    "topping-off steps. The emergency stop, and who may call it. And how they will talk to each "
    "other, in what language, with what backup. The other three rest on the last one.</p>"
    "<p><b>Either side may stop the transfer.</b> That is the only real power either side has over "
    "the other, and it costs both of them money to use.</p>"
    "<p><b>The item everybody ticks</b> is the emergency stop. To find out how long it takes to stop "
    "the flow, you have to stop the flow.</p>",
    "A guide, not law, though much of its content appears in terminal regulations and charter terms. "
    "It cannot make a representative who has been awake for nineteen hours read forty items "
    "carefully."), 580)
S["rc11-f6"]=lambda: f_realia(tbl("Word study",
    "Joint responsibility",
    ["The phrase","What it establishes","An example"],
    [["it was agreed that","a decision made by both","It was agreed that the maximum rate would be 1,400 cubic meters an hour."],
     ["both parties","an obligation on each","Both parties confirmed the communications check."],
     ["neither party may","a prohibition on each","Neither party may increase the rate without the other's agreement."],
     ["jointly","done together","The checklist was completed jointly."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>shall be agreed before</i> and <i>at the request of either "
    "party</i>."), 680)
S["rc11-f7"]=lambda: f_matrix(["Ship","Terminal","Both","Status"],
    [("Moorings adequate for the tide",[TICK,"&mdash;","&mdash;","checked, signed"]),
     ("Hoses and arms in good order",["&mdash;",TICK,"&mdash;","checked, signed"]),
     ("Scuppers plugged",[TICK,"&mdash;","&mdash;","checked, signed"]),
     ("Cargo plan and maximum rate",["&mdash;","&mdash;",TICK,"agreed, signed"]),
     ("Topping-off procedure",["&mdash;","&mdash;",TICK,"agreed, signed"]),
     ("Communications and backup",["&mdash;","&mdash;",TICK,"checked, signed"]),
     ("Fire-fighting equipment ready",[TICK,TICK,"&mdash;","checked, signed"]),
     ("<b>Emergency stop: time to stop flow</b>",["&mdash;",TICK,"&mdash;","<b>ticked, time &mdash;</b>"])], 700)
S["rc11-f8"]=lambda: f_icons([("chain","mooring lines"),("crane","a hose in good order"),
    ("water","scuppers plugged on a deck"),("calculator","an agreed maximum rate"),
    ("phone","a radio check"),("magnifier","ship, terminal or both?")],3)
S["rc11-f9"]=lambda: f_realia(tbl("Ship/shore safety checklist &mdash; berth 2",
    "Tanker <i>Northern Pearl</i> &middot; 18 April &middot; S. Haddad (terminal) and Captain O. Lindgren (ship)",
    ["Item","Responsibility","Re-check times","Status"],
    [["Moorings","ship","21:00, 00:00, 03:00","initialed by both"],
     ["Hoses and arms","terminal","21:00, 00:00, 03:00","initialed by both"],
     ["Scuppers plugged","ship","21:00, 00:00, 03:00","initialed by both"],
     ["Cargo plan and max rate 1,400 m3/h","both","&mdash;","agreed 18:40"],
     ["Topping off at 400 m3/h from 90 per cent","both","&mdash;","agreed 18:40"],
     ["Communications, channel 12","both","&mdash;","confirmed 18:35"],
     ["<b>Emergency stop response time</b>","terminal","&mdash;","<b>dash: no measured figure</b>"]],
    note="Signed at 18:40 by both representatives, both copies held. Three re-checks were done. The "
    "dash on the last item was initialed by both."), 640)
S["rc11-f10"]=lambda: f_scene(800,400,
    people=[("haddad",180,180,{}),("ida",420,180,{"seated":True}),("omar",620,180,{})],
    props=[("desk",390,0,1.0),("form",470,198,0.2),("window",120,80,0.56),
     ("ship",260,180,0.3),("crane",700,176,0.3)],
    clockat=(60,40,22,15,0))
S["rc11-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Checklist A",None,
    "<p>Every box ticked. Two signatures.</p>"
    "<p>Nothing recorded as unknown.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Checklist B",None,
    "<p>Eleven ticks, <b>one dash with a written reason</b>, the three re-check times filled in, and "
    "two signatures. The dash is on the emergency stop response time, and both representatives "
    "initialed it.</p>",None),380)[0:3],
    800,300,"Complete, and one item unchecked","Eleven checked and one honest gap")
S["rc11-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Record 1",None,
    "<p>Cargo transfer completed without incident. Checklist completed and signed. Rates as agreed. "
    "Communications good throughout.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Record 2",None,
    "<p>Signed <b>at 18:40 by S. Haddad for the terminal and Captain O. Lindgren for the ship</b>. "
    "Maximum 1,400 cubic meters an hour, reduced to 400 for topping off from 90 per cent. Channel 12, "
    "confirmed 18:35, mobile numbers as backup. Re-checks at 21:00, 00:00 and 03:00. <b>Item 9 "
    "recorded as a dash: we hold no measured figure and I declined to estimate one.</b> Suspended "
    "23:10 at the terminal's request; resumed 23:48 after both parties confirmed.</p>",
    None),380)[0:3],
    800,300,"No incident","Two names, six times and one dash")
S["rc11-f13"]=lambda: f_realia(form("Plan your transfer record",
    [("Who signed and when",BLANK),("The agreed rates, including topping off",BLANK),
     ("The communications arrangement",BLANK),("The re-checks, with times",BLANK),
     ("Anything recorded as a dash, with its reason",BLANK),
     ("Any suspension, at whose request, and the resumption condition",BLANK)],
    note="Six boxes. Say whether you would have written a dash."), 560)
S["rc11-f14"]=lambda: f_scene(1000,450,
    people=[("haddad",60,176,{"seated":True}),("ida",130,172,{}),("omar",205,176,{}),
     ("nour",290,172,{}),("samira",365,176,{"seated":True}),("yusuf",440,172,{}),
     ("nadia",515,176,{"seated":True}),("ahmad",590,170,{}),("adeel",655,172,{}),
     ("lars",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("form",350,198,0.2),
     ("window",420,80,0.5),("phone",550,198,0.2),("table",650,0,1.0),
     ("firealarm",860,198,0.2),("chain",930,196,0.22)],
    board=(40,22,206,112,"SIGNED BY BOTH",[("neither","is in charge"),("either","may stop it"),("the dash","is honest")]),
    clockat=(262,34,22,17,0))
S["rc11-f15"]=lambda: f_chart([("yes and it is recorded",2),("yes but nobody wrote it down",5),
    ("no",8),("I do not know",5),("we have no emergency stop",3)], unit="operators")
S["rc11-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Three years of ticks on one item",
    "<p><b>A completed ship/shore checklist</b> with every box ticked and two signatures.</p>"
    "<p><b>A second checklist</b> from the same berth three years earlier, also with every box "
    "ticked.</p>"
    "<p><b>A photograph of the emergency stop button</b>, which both parties know the location of.</p>"
    "<p><b>A stopwatch</b> that has never been used.</p>"
    "<p><b>A note of a captain's request</b> for the figure, in writing.</p>"
    "<p><i>Nobody has lied. Both sides were competent, the transfers all went well, and the documents "
    "are a model of compliance.</i></p>",
    "Seven o'clock. Measuring the time means stopping a transfer, and a customer asking gets it "
    "scheduled where an engineer asking gets a meeting."), 620)

# ---------------- Unit 12 ----------------
S["rc12-f1"]=lambda: f_icons([("book","Unit 1: a scope page"),("thread","Unit 2: a dye thread"),
    ("data","Unit 3: a friction chart"),("tin","Unit 4: a slug"),
    ("iron","Unit 5: a pump curve"),("container","Unit 6: an inspection tool"),
    ("barrier","Unit 7: a lifted coating"),("torch","Unit 8: a hard band at a weld"),
    ("map","Unit 9: location classes"),("roof","Unit 10: four level lines"),
    ("form","Unit 11: two signatures"),("recycle","ten elements in a circle"),
    ("review","plan, do, check, act"),("archive","a filing cabinet"),
    ("signature","a leadership signature"),("note","not one of these is steel")],4)
S["rc12-f2"]=lambda: f_scene(760,400,
    people=[("adeel",110,176,{}),("omar",300,180,{"seated":True}),("nour",378,180,{"seated":True}),
     ("yusuf",452,180,{"seated":True}),("samira",526,180,{"seated":True}),
     ("haddad",600,180,{"seated":True}),("tomas",672,180,{"seated":True})],
    props=[("desk",288,0,1.0),("board",50,90,0.62),("archive",725,190,0.24)],
    board=(30,24,214,110,"ORGANIZATIONAL",[("eleven","failures"),("technical","none"),("behind all","element one")]),
    clockat=(262,36,22,16,0))
S["rc12-f3"]=lambda: f_icons([("signature","a leader signing a policy"),
    ("meeting","a public meeting with landowners"),("spreadsheet","a risk register"),
    ("book","an operating procedure"),("clipboard","an incident investigation"),
    ("note","ten elements, and the first decides the other nine")],3)
S["rc12-f4"]=lambda: f_realia(tbl("Team research sheet",
    "The eleven failures of this book",
    ["Unit","What went wrong","Which element","One change that would have caught it"],
    blankrows(11,4),
    note="Fill the first two columns from memory. The box at the foot: the element that appears most "
    "often."), 660)
S["rc12-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the document that says it was not the weld",
    "<p style='font-size:12px;color:#6b6861'>Source: API Recommended Practice 1173, <i>Pipeline "
    "Safety Management System Requirements</i>, first edition 2015. In our own words.</p>"
    "<p><b>Where it came from.</b> It was developed after a series of serious pipeline incidents, in "
    "which the investigating authority kept reaching the same conclusion: the immediate technical "
    "cause was real, and behind it sat organizational failures &mdash; information that existed and "
    "did not travel, warnings received and not acted on, roles nobody held, and measures of success "
    "that rewarded the wrong thing.</p>"
    "<p><b>Ten elements</b>, arranged as a cycle of planning, doing, checking and improving: "
    "leadership and management commitment; stakeholder engagement; risk management; operational "
    "controls; incident investigation and lessons learned; safety assurance; management review and "
    "continuous improvement; emergency preparedness and response; competence, awareness and training; "
    "and documentation and record keeping.</p>"
    "<p><b>Element one is first for a reason.</b> Everything else costs money, production or "
    "somebody's time on a day when they have something more urgent. A risk register nobody senior "
    "reads is a spreadsheet. <b>Element one is the only element that makes the other nine real.</b></p>"
    "<p><b>How a management system fails.</b> A documentation system grows inside it. Element ten is "
    "essential and is the easiest to do well, because it can be done by writing. An organization "
    "under pressure produces the documents, passes the audit, and changes nothing about how it behaves "
    "at two in the morning. <b>Nobody decides to do this.</b></p>"
    "<p><b>The test.</b> Can you name one decision in the last year that was made differently because "
    "of the system? If not, there is a documentation system.</p>",
    "A voluntary recommended practice, written to be scalable. It cannot make anybody care."), 580)
S["rc12-f6"]=lambda: f_realia(tbl("Word study",
    "Undoing a nominalization",
    ["Nominalized","Said with a verb"],
    [["An investigation was undertaken.","<b>Yusuf investigated it.</b>"],
     ["The implementation of a review process has commenced.","<b>We have started reviewing it.</b>"],
     ["Verification of the response time was not performed.","<b>Nobody measured the response time.</b>"],
     ["There was a failure of communication.","<b>Two people did not tell each other.</b>"],
     [BLANK,BLANK],[BLANK,BLANK]],
    note="Two rows are empty. The plain version is shorter and names somebody, and only one of those "
    "two features explains why the long one gets written."), 620)
S["rc12-f7"]=lambda: f_matrix(["What went wrong","Technical?","Element"],
    [("Unit 1",["a boundary nobody reviewed","no","4"]),
     ("Unit 2",["a figure that lost its source","no","10"]),
     ("Unit 3",["six years of data nobody subtracted","no","6"]),
     ("Unit 4",["three tunings of a sound controller","no","5"]),
     ("Unit 5",["eleven seals, one cause","no","6"]),
     ("Unit 6",["a blank read as a clean result","no","6"]),
     ("Unit 7",["two reports, two filing systems","no","10"]),
     ("Unit 8",["a weld with no record","no","4"]),
     ("Unit 9",["a village nobody was asked to notice","no","2"]),
     ("Unit 10",["seven minutes against eleven","no","6"]),
     ("Unit 11",["a tick where a dash belonged","no","4"])], 700)
S["rc12-f8"]=lambda: f_icons([("signature","a leader taking a shutdown decision"),
    ("meeting","a meeting with landowners"),("spreadsheet","a risk register being read"),
    ("book","a procedure followed at night"),("clipboard","a finding being funded"),
    ("magnifier","which element is this?")],3)
S["rc12-f9"]=lambda: f_realia(tbl("Management system self-assessment",
    "Two columns, and only the second one is the assessment",
    ["Element","Documented","A decision changed in the last year"],
    [["1 Leadership and commitment",TICK,"<b>yes &mdash; Samir stopped injection on well 2</b>"],
     ["2 Stakeholder engagement",TICK,"&mdash;"],
     ["3 Risk management",TICK,"&mdash;"],
     ["4 Operational controls",TICK,"&mdash;"],
     ["5 Incident investigation",TICK,"&mdash;"],
     ["6 Safety assurance",TICK,"<b>yes &mdash; Wei got a shutdown for P-210</b>"],
     ["7 Management review",TICK,"&mdash;"],
     ["8 Emergency preparedness",TICK,"&mdash;"],
     ["9 Competence and training",TICK,"&mdash;"],
     ["10 Documentation",TICK,"<b>yes &mdash; Ida wrote a dash instead of a figure</b>"]],
    note="Ten documented. Three with evidence of a changed decision. Seven without, and those seven "
    "are the work."), 660)
S["rc12-f10"]=lambda: f_scene(800,400,
    people=[("adeel",200,180,{}),("yusuf",430,180,{"seated":True}),("haddad",530,180,{"seated":True})],
    props=[("table",400,0,1.0),("spreadsheet",480,198,0.22),("archive",120,186,0.3),
     ("board",600,96,0.5)],
    clockat=(70,40,22,16,0))
S["rc12-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>A pipeline safety management system has been implemented across the organization. All ten "
    "elements are documented and periodic management review is undertaken.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>Ten documented. <b>Three</b> with evidence of a changed decision, each named with the person "
    "who made it. <b>Seven</b> without, named specifically: the village at kilometer nine, the 2009 "
    "weld, the 1.9 kilometers of poor data, the emergency stop timing on seven of nine tanks. "
    "<b>Those are next year's work, and they are in four different filing systems.</b></p>",
    None),380)[0:3],
    800,300,"Implemented","Three, seven, and four filing systems")
S["rc12-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>A pipeline safety management system has been implemented across the organization. All ten "
    "elements are documented and periodic management review is undertaken. Continuous improvement "
    "mechanisms are embedded.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>All ten documented. For <b>three</b> I can name a decision in the last twelve months: Samir "
    "stopped injection when Omar reported a rising annulus; Wei got a shutdown approved after eleven "
    "seals; Ida wrote a dash and a captain requested the measurement. For the other <b>seven</b> I "
    "cannot name one. Proposal: one page listing the four open items, with a name against each, "
    "reviewed monthly. <b>Not a new system &mdash; a column.</b></p>",None),380)[0:3],
    800,300,"No people in it","Four names and a column")
S["rc12-f13"]=lambda: f_realia(form("Plan your self-assessment note",
    [("How many elements are documented",BLANK),("How many changed a decision",BLANK),
     ("The decisions named, with the people who made them",BLANK),
     ("The gaps, named specifically",BLANK),("Where the gaps are currently filed",BLANK),
     ("One proposal, with a name against it",BLANK)],
    note="Six boxes. If the third is empty, say so out loud."), 560)
S["rc12-f14"]=lambda: f_scene(1000,450,
    people=[("adeel",60,176,{"seated":True}),("yusuf",130,172,{"seated":True}),
     ("haddad",205,176,{"seated":True}),("nour",290,172,{}),("omar",365,176,{}),
     ("samira",440,172,{"seated":True}),("ahmad",515,176,{"seated":True}),
     ("nadia",590,170,{}),("tomas",655,172,{}),("wei",720,170,{}),
     ("ida",785,172,{}),("lars",845,170,{}),("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.22),
     ("archive",420,188,0.26),("recycle",550,198,0.2),("table",650,0,1.0),
     ("window",860,80,0.5),("map",930,196,0.22)],
    board=(40,22,206,112,"NOT THE WELD",[("eleven","failures"),("none","technical"),("ten","elements")]),
    clockat=(262,34,22,17,0))
S["rc12-f15"]=lambda: f_chart([("yes and I can name it",3),("yes but I cannot name it",6),
    ("no",7),("I do not know",4),("we have no system",3)], unit="operators")
S["rc12-f16"]=lambda: f_realia(doc("On a desk at the end of the course",
    "An audit passed, and four findings in four filing systems",
    "<p><b>The book</b>, open at the contents page.</p>"
    "<p><b>A ten-element self-assessment</b> with ten ticks in the first column and three entries in "
    "the second.</p>"
    "<p><b>Four findings</b> from four different filing systems: the village at kilometer nine, the "
    "2009 weld, the 1.9 kilometers of poor data, the emergency stop timing.</p>"
    "<p><b>An audit certificate.</b></p>"
    "<p><b>A stopwatch</b> that has never been used.</p>"
    "<p><i>Nothing on paper was false. Everybody involved was competent and most of them were "
    "overworked. Each finding is somebody's job and nobody's priority, and each would be found in an "
    "afternoon by anybody who looked.</i></p>",
    "Seven o'clock. Name one thing you are going to go and look at, and one person you are going to "
    "tell."), 620)
