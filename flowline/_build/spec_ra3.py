# -*- coding: utf-8 -*-
"""Flowline Book 1 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]
TICK = "<b style='color:#2f6b3a'>&#10003;</b>"
CROSS = "<b style='color:#8a2f2f'>&#10007;</b>"

# ---------------- Unit 7 ----------------
S["ra07-f1"]=lambda: f_icons([("danger","hydrogen sulfide"),("eye","sour"),
    ("water","sweet"),("pills","toxic"),("tally","a concentration"),
    ("calculator","parts per million"),("barrier","a limit"),("firealarm","an alarm"),
    ("thermometer","a detector"),("dashboard","a monitor"),("firstaid","an escape set"),
    ("signpost","a muster point"),("stairwell","a cellar"),("water","a sump"),
    ("container","to collect"),("fireexit","to evacuate")],4)
S["ra07-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("yusuf",410,180,{}),
     ("samira",495,180,{"seated":True}),("ahmad",580,180,{"seated":True})],
    props=[("desk",295,0,1.0),("board",50,90,0.62),("thermometer",660,196,0.28),
     ("firstaid",705,198,0.24)],
    board=(30,24,214,110,"THE SMELL GOES AWAY",[("a fraction","you smell it"),("100 ppm","you do not"),("worse","no warning")]),
    clockat=(262,36,22,10,0))
S["ra07-f3"]=lambda: f_icons([("eye","a fraction of a part per million: you smell it"),
    ("firealarm","around ten parts per million: a common limit"),
    ("noentry","around a hundred: you stop smelling it"),
    ("emergency","several hundred and more: rapid collapse"),
    ("stairwell","it collects low, in cellars and sumps"),
    ("firstaid","it kills the person who goes in after you")],3)
S["ra07-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six published exposure limits, from six bodies",
    ["The source","The jurisdiction or body","The limit","The averaging period","The year"],
    blankrows(6,5),
    note="The box at the foot: the two limits that differ most, and the reason the documents give."),
    640)
S["ra07-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for new operators: the smell you must not trust",
    "<p style='font-size:12px;color:#6b6861'>Source: API Recommended Practice 49, on operations "
    "involving hydrogen sulfide. In our own words.</p>"
    "<p>Hydrogen sulfide is in our crude. It is heavier than air, so it sits low: in cellars, "
    "sumps, pits and bunds.</p>"
    "<p>Here is the shape of the danger.</p>"
    "<p><b>A fraction of a part per million.</b> You can smell it. Rotten eggs.</p>"
    "<p><b>Around ten parts per million.</b> A common exposure limit. You can still smell it.</p>"
    "<p><b>Around a hundred parts per million.</b> <b>You stop being able to smell it.</b></p>"
    "<p><b>Several hundred and above.</b> One or two breaths and a person goes down.</p>"
    "<p>Read the third line again. The warning you were born with switches off as the danger gets "
    "worse. Your nose is not a detector. The thing on your collar is.</p>"
    "<p>And this gas kills rescuers. Most people who die from it go in after somebody.</p>"
    "<p>Limits are set by regulators and differ from place to place. This document does not set "
    "them.</p>",
    "If somebody is down, do not go in. Raise the alarm and stay out."), 580)
S["ra07-f6"]=lambda: f_realia(tbl("Word study",
    "The form, and what it says",
    ["The form","What it says","An example"],
    [["can","you are able to","You can smell it at a very low level."],
     ["cannot","you are not able to","You cannot smell it at a hundred parts per million."],
     ["may","it is possible","The level may rise when the wind drops."],
     ["must not","it is forbidden","You must not enter to rescue anybody."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>could</i> and <i>is able to</i>. In a warning, say which meaning "
    "of <i>can</i> you mean."), 600)
S["ra07-f7"]=lambda: f_chart([("head height, 1.7 m",2),("chest, 1.3 m",6),
    ("knee, 0.5 m",24),("floor, 0.1 m",71)], unit="ppm")
S["ra07-f8"]=lambda: f_icons([("eye","a faint smell"),("firealarm","an alarm sounding"),
    ("noentry","no smell at all"),("emergency","somebody on the ground"),
    ("stairwell","a gas layer at floor level"),("magnifier","which level is this?")],3)
S["ra07-f9"]=lambda: f_realia(tbl("Sour service area notice &mdash; Mureij gathering station",
    "Four fixed detectors, two wind socks, one muster point",
    ["Position","What it covers","Low alarm","High alarm"],
    [["D-1, separator skid west","the skid and the walkway","10 ppm","20 ppm"],
     ["D-2, separator skid east","the skid and the drain","10 ppm","20 ppm"],
     ["D-3, tank bund","the bund floor","10 ppm","20 ppm"],
     ["D-4, pump house","the pump house, low level","10 ppm","20 ppm"],
     ["Wind socks","north gate and tank bund","&mdash;","&mdash;"],
     ["Muster point","north gate, upwind of the skid","&mdash;","&mdash;"]],
    note="Muster upwind. The wind sock is not decoration; it is the instruction that tells you "
    "which way to walk."), 600)
S["ra07-f10"]=lambda: f_scene(800,400,
    people=[("omar",150,180,{}),("yusuf",260,176,{}),("samira",420,182,{})],
    props=[("desk",400,0,1.0),("thermometer",470,196,0.28),("stairwell",600,160,0.5),
     ("barrier",700,194,0.3),("firstaid",190,200,0.22)],
    clockat=(60,40,22,11,0))
S["ra07-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("On the belt",None,
    "<p>Monitor clipped at belt height, about 1.1 meters. Reading 6 parts per million. "
    "No alarm.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("On a lanyard in the hatch",None,
    "<p>Same monitor, lowered two meters into the cellar. Reading 71 parts per million. "
    "High alarm. Same gas, same minute, same instrument.</p>",None),380)[0:3],
    800,300,"Six parts per million","Seventy-one parts per million")
S["ra07-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Report 1",None,
    "<p>There was a smell near the tank bund this morning. It went away.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report 2",None,
    "<p>09:15, tank bund. Faint smell at the hatch for about ten seconds, then nothing. "
    "Readings on monitor 118: 2 ppm at head height, 6 at chest, 24 at knee, 71 at the floor of "
    "the cellar on a lanyard. Wind light from the southwest. I did not enter. Area roped off, "
    "HSE informed 09:20, fixed detector D-3 reading 4 ppm at the time.</p>",None),380)[0:3],
    800,300,"A smell that went away","Four readings and four heights")
S["ra07-f13"]=lambda: f_realia(form("Plan your gas report",
    [("The time and place",BLANK),("What I smelled, and for how long",BLANK),
     ("Each reading and its height",BLANK),("The wind direction",BLANK),
     ("What I did",BLANK),("Who I told, and when",BLANK)],
    note="Six boxes. The third box is the one that makes the first box useful."), 540)
S["ra07-f14"]=lambda: f_scene(1000,450,
    people=[("omar",60,176,{}),("yusuf",130,172,{}),("samira",205,176,{}),
     ("nour",290,172,{}),("ahmad",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("adeel",515,176,{"seated":True}),("haddad",590,170,{}),("lars",655,172,{}),
     ("ida",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("stairwell",345,150,0.46),
     ("thermometer",430,196,0.26),("wind",550,192,0.3),("table",650,0,1.0),
     ("firstaid",860,198,0.22),("shelf",930,96,0.5)],
    board=(40,22,206,112,"IT SITS LOW",[("floor","71 ppm"),("chest","6 ppm"),("your nose","useless")]),
    clockat=(262,34,22,15,0))
S["ra07-f15"]=lambda: f_chart([("on the collar",5),("on the belt",9),("in a pocket",4),
    ("on a lanyard",3),("I was not issued one",1)], unit="operators")
S["ra07-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Four readings, four heights, and a hatch nobody went into",
    "<p><b>A personal monitor</b> on a lanyard, and a gas report with four readings written at "
    "four heights.</p>"
    "<p><b>A vertical chart of the cellar:</b> 2 ppm at head height and 71 at the floor.</p>"
    "<p><b>A photograph</b> of the fixed detector D-3, mounted at two meters.</p>"
    "<p><b>A glass of tea</b> going cold.</p>"
    "<p><i>The fixed detector is at two meters because that is where a person's head is. The gas "
    "is at the floor because that is where gas heavier than air goes. Both facts are correct, "
    "and together they are a trap.</i></p>",
    "Eight o'clock. The monitor on your collar measures the air at your collar, and nothing "
    "else."), 600)

# ---------------- Unit 8 ----------------
S["ra08-f1"]=lambda: f_icons([("form","a permit"),("stamp","to issue"),
    ("signature","to sign"),("noentry","to withdraw"),("padlock","an isolation"),
    ("padlock","a lock"),("pricetag","a tag"),("barcode","a blank"),
    ("thermometer","a gas test"),("water","a drain"),("handshake","hand-back"),
    ("scissors","to cancel"),("badge","an authority"),("meeting","a work party"),
    ("certificate","valid"),("timer","a time limit")],4)
S["ra08-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("ahmad",410,180,{"seated":True}),
     ("samira",495,180,{"seated":True}),("yusuf",580,180,{"seated":True})],
    props=[("desk",295,0,1.0),("board",50,90,0.62),("form",660,198,0.26),("padlock",705,198,0.22)],
    board=(30,24,214,110,"FOUR BOXES, FOUR QUESTIONS",[("three","signed"),("one","empty"),("so","nobody starts")]),
    clockat=(262,36,22,10,30))
S["ra08-f3"]=lambda: f_icons([("stamp","the issuing authority: may this work happen?"),
    ("padlock","the isolating authority: is the energy gone?"),
    ("meeting","the performing authority: do my people know?"),
    ("dashboard","the area authority: does this clash with anything?"),
    ("handshake","hand-back: is the plant mine again?"),
    ("timer","a time limit: when does this stop being true?")],3)
S["ra08-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six permits on your own board",
    ["The permit number","The work","The equipment","The time limit","Which boxes are signed"],
    blankrows(6,5),
    note="The box at the foot: the permit you would not have started on, and the box that stopped "
    "you."), 640)
S["ra08-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for new operators: the four questions a permit answers",
    "<p style='font-size:12px;color:#6b6861'>Source: Health and Safety Executive (United "
    "Kingdom), HSG250, <i>Guidance on permit-to-work systems</i>, 2005. In our own words.</p>"
    "<p>A permit is not paperwork. It is four people answering four different questions, in "
    "writing, before anybody touches anything.</p>"
    "<p><b>The issuing authority</b> answers: may this work happen at all?</p>"
    "<p><b>The isolating authority</b> answers: is the energy gone, and how do I know?</p>"
    "<p><b>The performing authority</b> answers: do my people know what they are doing?</p>"
    "<p><b>The area authority</b> answers: does this clash with anything else?</p>"
    "<p>Four signatures. Four different questions. One missing signature means one unanswered "
    "question, and you do not know which.</p>"
    "<p>At the end there is a <b>hand-back</b>. The work is finished, the plant comes back. "
    "A permit that is never handed back is a job nobody has closed.</p>"
    "<p>This is guidance, not law. It is written for one country. And it says plainly that a "
    "permit system is only as good as the discipline people give it.</p>",
    "Read the boxes before you read the work. The boxes are the permit."), 580)
S["ra08-f6"]=lambda: f_realia(tbl("Word study",
    "The word, and what it fixes in time",
    ["The word","What it fixes","An example"],
    [["before","something must come first","Before you break the joint, check the isolation."],
     ["after","something comes second","After the gas test, sign the permit."],
     ["until","an end point","Do not start until the permit is signed."],
     ["once","a trigger","Once the work is finished, hand it back."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>as soon as</i> and <i>while</i>. One is a trigger and one is a "
    "period."), 600)
S["ra08-f7"]=lambda: f_matrix(["Issuing","Isolating","Performing","Area","Time limit"],
    [("4468 instrument work",[TICK,TICK,TICK,TICK,"08:00 to 16:00"]),
     ("4471 hot work, pump house",[TICK,CROSS,TICK,TICK,"08:00 to 16:00"]),
     ("4472 tank entry",[TICK,TICK,TICK,TICK,"08:00 to 12:00"]),
     ("4474 line break",[TICK,TICK,TICK,CROSS,"10:00 to 18:00"]),
     ("4475 valve change",[TICK,TICK,TICK,TICK,"<b>none written</b>"]),
     ("4476 scaffolding",[TICK,TICK,TICK,TICK,"08:00 to 16:00"])], 660)
S["ra08-f8"]=lambda: f_icons([("padlock","a lock going onto a valve"),
    ("meeting","a work party being briefed"),("dashboard","a control room desk and an area plan"),
    ("signature","a form being signed and handed over"),
    ("handshake","a hand-back at the end"),("noentry","a permit withdrawn")],3)
S["ra08-f9"]=lambda: f_realia(tbl("Permit to work 4471",
    "Hot work &middot; pump house &middot; 12 March",
    ["Section","What it says"],
    [["Equipment","Pump P-104 discharge spool"],
     ["Work","Cut and replace a 4 inch spool. Welding."],
     ["Hazards ticked","flammable liquid &middot; hydrogen sulfide &middot; hot surfaces &middot; confined access"],
     ["Isolations","suction valve locked shut &middot; discharge valve locked shut &middot; drain opened and drained"],
     ["Gas test","09:05, 0 ppm hydrogen sulfide, 0 percent lower explosive limit"],
     ["Time limit","08:00 to 16:00, 12 March"],
     ["Issuing authority","S. Haddad, signed 08:40"],
     ["Isolating authority","<b>not signed</b>"],
     ["Performing authority","A. Sweid, signed 08:55"],
     ["Area authority","S. Qassab, signed 08:45"]],
    note="Three signatures and a gas test. The isolating authority's box is empty, so nobody has "
    "written down that the energy is gone."), 620)
S["ra08-f10"]=lambda: f_scene(800,400,
    people=[("ahmad",150,180,{}),("omar",255,176,{}),("haddad",420,182,{"seated":True})],
    props=[("desk",395,0,1.0),("form",470,198,0.24),("pen",530,200,0.2),
     ("board",600,100,0.52),("padlock",720,198,0.22)],
    clockat=(65,40,22,12,0))
S["ra08-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Permit A",None,
    "<p>4471. Four signatures. Three isolations listed, each signed for. Gas test 09:05. "
    "Time limit 08:00 to 16:00.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Permit B",None,
    "<p>4471. Four signatures. Three isolations listed. The isolation signature box is empty and "
    "the gas test line reads <i>satisfactory</i> with no figure and no time. Same job, same "
    "day.</p>",None),380)[0:3],
    800,300,"Signed for, with figures","Signed off, without them")
S["ra08-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>I did not start on 4471 because the permit was not right.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>08:58, permit 4471, hot work on P-104 discharge spool. The isolating authority box is "
    "unsigned. I checked the valves myself: suction locked, discharge locked, drain open. The "
    "plant state is correct, and nobody has written that down or signed for it. Reported to "
    "S. Haddad 09:00. Before a start: the isolating authority signs, or re-verifies and "
    "signs.</p>",None),380)[0:3],
    800,300,"A refusal","A refusal, a check and a way forward")
S["ra08-f13"]=lambda: f_realia(form("Plan your permit refusal note",
    [("The time",BLANK),("The permit number and the work",BLANK),("The box that is missing",BLANK),
     ("What the plant state actually is",BLANK),("Who I told",BLANK),
     ("What must happen before a start",BLANK)],
    note="Six boxes. The fourth one is why a refusal is not an accusation."), 540)
S["ra08-f14"]=lambda: f_scene(1000,450,
    people=[("ahmad",60,176,{"seated":True}),("haddad",130,172,{}),("omar",205,176,{}),
     ("nour",290,172,{}),("samira",365,176,{"seated":True}),("yusuf",440,172,{}),
     ("nadia",515,176,{"seated":True}),("adeel",590,170,{}),("lars",655,172,{}),
     ("ida",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("form",350,198,0.22),
     ("padlock",420,198,0.2),("pricetag",550,198,0.2),("table",650,0,1.0),
     ("handshake",860,198,0.22),("shelf",930,96,0.5)],
    board=(40,22,206,112,"FOUR AUTHORITIES",[("issuing","may it?"),("isolating","is it dead?"),("area","does it clash?")]),
    clockat=(262,34,22,16,0))
S["ra08-f15"]=lambda: f_chart([("the isolation signature",7),("the gas test figure",6),
    ("the time limit",5),("the hand-back",4),("the area authority",2)], unit="operators")
S["ra08-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "One empty box, and five ways a system goes quiet",
    "<p><b>Permit 4471</b>, open, with the isolating authority box empty.</p>"
    "<p><b>A photograph of the permit board</b> with six permits on it, two of them from last "
    "week.</p>"
    "<p><b>A padlock and a tag</b> that were both correctly fitted by somebody who then went to "
    "another job.</p>"
    "<p><b>A list of five ways a permit system degrades,</b> copied out by hand.</p>"
    "<p><i>Every valve was in the right position. The plant was safe. The document said nothing "
    "about it, and a document that says nothing is the one thing a permit may never do.</i></p>",
    "Nine o'clock. The isolation was real. The record of it was not."), 600)

# ---------------- Unit 9 ----------------
S["ra09-f1"]=lambda: f_icons([("meeting","a briefing"),("clipboard","a toolbox talk"),
    ("handsup","a work party"),("note","a task"),("danger","a hazard"),
    ("padlock","a control"),("fireexit","an escape route"),("signpost","a muster point"),
    ("megaphone","to brief"),("magnifier","to check"),("signature","to confirm"),
    ("speechbubble","to repeat back"),("board","a framework"),("square","an element"),
    ("thread","a system"),("timetable","a routine")],4)
S["ra09-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("ahmad",410,180,{"seated":True}),
     ("samira",495,180,{"seated":True}),("yusuf",580,180,{"seated":True})],
    props=[("desk",295,0,1.0),("board",50,90,0.62),("board",650,110,0.5),("megaphone",720,198,0.24)],
    board=(30,24,214,110,"TEN BOXES, ONE MOUTH",[("the framework","ten elements"),("the briefing","five minutes"),("where","not in the document")]),
    clockat=(262,36,22,11,0))
S["ra09-f3"]=lambda: f_icons([("note","the job, said plainly"),
    ("danger","a hazard, pointed at"),("padlock","a control, named"),
    ("fireexit","the escape route, indicated"),("speechbubble","a question answered back"),
    ("magnifier","any questions? checks nothing")],3)
S["ra09-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six briefings you have been given",
    ["The briefing","Did it say the job","Did it name the hazards","Did it name the controls","Did it give the escape route"],
    blankrows(6,5),
    note="The box at the foot: the column with the most crosses in it. In most teams it is the "
    "last one."), 640)
S["ra09-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for new operators: five minutes before the job",
    "<p style='font-size:12px;color:#6b6861'>Source: International Association of Oil and Gas "
    "Producers, Report 510, <i>Operating Management System Framework</i>, 2014. In our own "
    "words.</p>"
    "<p>This report is a framework. It has fundamentals and elements: leadership, risk "
    "assessment, competence, plant integrity, and more.</p>"
    "<p>Here is an honest thing. <b>The report has no section on toolbox talks.</b> We are not "
    "going to pretend it does.</p>"
    "<p>So why read it before a briefing? Because the briefing is where a lot of the framework "
    "arrives in one person's mouth in five minutes.</p>"
    "<p>A briefing says five things.</p>"
    "<p><b>1</b> The job, and what is <b>not</b> in the job.<br>"
    "<b>2</b> The hazards, named.<br>"
    "<b>3</b> The controls, named.<br>"
    "<b>4</b> What to do if it goes wrong, and where to go.<br>"
    "<b>5</b> Who is doing what.</p>"
    "<p>Then check. Not <i>any questions?</i> Nobody says yes to that. Ask instead: <b>what will "
    "you do if the alarm sounds? Who is isolating this line? Tell me the first thing you will "
    "do.</b></p>",
    "A framework is a shape. A briefing is where it touches a person."), 580)
S["ra09-f6"]=lambda: f_realia(tbl("Word study",
    "The question, and what it gets you",
    ["The question","What it gets you","An example"],
    [["do you understand?","a nod","Everybody nodded, and two of them had not heard."],
     ["what will you do if?","a plan","What will you do if the alarm sounds?"],
     ["tell me back","a voice","Tell me back what you will do first."],
     ["show me where","a finger and a direction","Show me where you will go."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>who</i> and <i>why</i>. Both answers contain information. A nod "
    "does not."), 600)
S["ra09-f7"]=lambda: f_matrix(["The job","The hazards","The controls","The escape route","Who does what"],
    [("Monday, pump change",[TICK,TICK,TICK,CROSS,TICK]),
     ("Tuesday, valve change",[TICK,TICK,TICK,CROSS,TICK]),
     ("Wednesday, scaffolding",[TICK,TICK,CROSS,CROSS,TICK]),
     ("Thursday, line break",[TICK,TICK,TICK,CROSS,TICK]),
     ("Friday, instrument work",[TICK,CROSS,TICK,CROSS,TICK]),
     ("Saturday, tank entry",[TICK,TICK,TICK,TICK,TICK])], 660)
S["ra09-f8"]=lambda: f_icons([("note","the job described"),("danger","a hazard pointed at"),
    ("padlock","a control named"),("fireexit","a route indicated"),
    ("handsup","a hand raised"),("magnifier","which of the five is missing?")],3)
S["ra09-f9"]=lambda: f_realia(tbl("Task risk assessment &mdash; pump P-104 spool change",
    "12 March &middot; permit 4471 &middot; four hazards",
    ["Hazard","Control","Residual risk"],
    [["Flammable liquid in the spool","drained, flushed, gas tested 09:05","low"],
     ["Hydrogen sulfide in the line","drained, monitors worn, bund detector live","low"],
     ["Hot work ignition source","welding screens, fire watch, extinguisher","medium"],
     ["Confined access at the pump skid","two-person rule, escape route kept clear","low"]],
    note="Four names and four signatures underneath. A blank box at the foot headed <i>what we "
    "briefed that is not on this sheet</i>, and it is the escape route."), 620)
S["ra09-f10"]=lambda: f_scene(800,400,
    people=[("ahmad",120,180,{}),("omar",200,176,{}),("samira",280,180,{}),
     ("yusuf",360,176,{}),("lars",600,180,{})],
    props=[("desk",480,0,0.9),("clipboard",540,198,0.24),("engine",660,186,0.42),
     ("iron",730,196,0.26)],
    clockat=(60,40,22,7,0))
S["ra09-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Briefing A",None,
    "<p>We are changing the spool on P-104. It is isolated. Watch out for the gas. Wear your "
    "monitors. Any questions?</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Briefing B",None,
    "<p>We are cutting and replacing the 4 inch discharge spool on P-104. We are not touching the "
    "suction side. Hazards: flammable liquid, hydrogen sulfide, hot work, tight access. Controls: "
    "both valves locked, drain open, gas test 09:05, screens and fire watch, escape to the north "
    "gate upwind. Ahmad cuts, Omar fire watch, Samira monitors. Omar, what will you do if the "
    "alarm sounds? Ahmad, who is isolating? Samira, tell me the first thing you will do.</p>",
    None),380)[0:3],
    800,300,"Four lines and a nod","Five things and three named questions")
S["ra09-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Record 1",None,
    "<p>Toolbox talk given 07:00. Four attended. All understood.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Record 2",None,
    "<p>07:00, P-104 spool change, permit 4471. Briefed: scope and exclusion, four hazards, four "
    "controls, escape to the north gate, and roles. Questions asked: Omar on the alarm "
    "(answered, go north gate), Ahmad on isolation (answered, both valves, Haddad), Samira on "
    "first action (answered, check the bund detector). Omar's first answer was the south gate and "
    "was corrected before we started.</p>",None),380)[0:3],
    800,300,"All understood","One answer that was wrong, and fixed")
S["ra09-f13"]=lambda: f_realia(form("Plan your briefing record",
    [("The time and the job",BLANK),("The scope, including what is excluded",BLANK),
     ("The hazards",BLANK),("The controls",BLANK),("The emergency arrangements",BLANK),
     ("The questions I asked, and the answers",BLANK)],
    note="Six boxes. The last one is the only evidence that the first five arrived."), 540)
S["ra09-f14"]=lambda: f_scene(1000,450,
    people=[("ahmad",60,176,{}),("omar",115,172,{}),("samira",170,176,{}),
     ("yusuf",225,172,{}),("nour",290,176,{}),("haddad",370,172,{}),
     ("nadia",450,176,{}),("adeel",520,170,{}),("lars",600,172,{}),
     ("ida",670,170,{}),("wei",745,172,{}),("tomas",815,170,{}),
     ("bah",885,172,{}),("yara",950,174,{})],
    props=[("desk",330,0,0.9),("clipboard",400,198,0.22),("engine",490,186,0.38),
     ("megaphone",580,198,0.22),("table",700,0,0.9),("fireexit",870,196,0.24),
     ("signpost",930,194,0.26)],
    clockat=(40,34,22,7,0))
S["ra09-f15"]=lambda: f_chart([("any questions?",11),("a signature",6),
    ("a named question",2),("repeat back",1),("it does not end, it stops",4)], unit="operators")
S["ra09-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Three questions, three answers, and one that was wrong",
    "<p><b>A briefing record</b> with three questions written in and three answers written "
    "beside them.</p>"
    "<p><b>A task risk assessment</b> with four hazard rows and four signatures.</p>"
    "<p><b>A framework diagram</b> with ten boxes, and no box for a briefing.</p>"
    "<p><b>A glass of tea</b> going cold.</p>"
    "<p><i>Omar said the south gate. The wind was from the southwest, so the south gate was "
    "downwind of the skid. He had sat through the briefing, nodded, and would have walked into "
    "it.</i></p>",
    "Seven o'clock. <i>Any questions?</i> would have found none of that."), 600)
