# -*- coding: utf-8 -*-
"""Flowline Book 1 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]
TICK = "<b style='color:#2f6b3a'>&#10003;</b>"
CROSS = "<b style='color:#8a2f2f'>&#10007;</b>"

# ---------------- Unit 4 ----------------
S["ra04-f1"]=lambda: f_icons([("engine","an operator"),("dashboard","a control room operator"),
    ("radio","a shift supervisor"),("clipboard","a superintendent"),("iron","a mechanic"),
    ("fusebox","an electrician"),("scanner","a technician"),("hivis","a contractor"),
    ("badge","an employee"),("shift","a shift"),("timetable","a roster"),
    ("logsheet","a handover"),("meeting","a crew"),("thread","to report to"),
    ("handsup","to be responsible for"),("signature","to authorize")],4)
S["ra04-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("yusuf",410,180,{"seated":True}),
     ("ahmad",495,180,{"seated":True}),("lars",580,180,{})],
    props=[("desk",295,0,1.0),("board",50,90,0.62),("clipboard",660,198,0.26),
     ("hivis",700,194,0.3)],
    board=(30,24,214,110,"TWO EMPLOYERS, ONE PLANT",[("company","ten boxes"),("contractor","four boxes"),("one line","the interface")]),
    clockat=(262,36,22,8,30))
S["ra04-f3"]=lambda: f_icons([("engine","an operator at a valve"),
    ("signature","a supervisor signing a sheet"),("iron","a mechanic with a pump apart"),
    ("scanner","a technician at a transmitter"),("hivis","an HSE officer with a camera"),
    ("thread","the one line that joins two columns")],3)
S["ra04-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Your own site, in your own words",
    ["The role","The title used here","Who they report to","Who may instruct them","Employer"],
    blankrows(8,5),
    note="The box at the foot: the two titles that mean different things at two sites fifty "
    "kilometers apart."), 640)
S["ra04-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for new operators: who you take an instruction from",
    "<p style='font-size:12px;color:#6b6861'>Source: International Association of Oil and Gas "
    "Producers, Report 423, <i>HSE management &mdash; guidelines for working together in a "
    "contract environment</i>. In our own words.</p>"
    "<p>On this site, much of the work is done by people employed by somebody else. That is "
    "normal. It makes one problem. Two sets of rules, two sets of supervisors, one piece of "
    "plant.</p>"
    "<p>The guidelines call a contract a set of <b>phases</b>: planning, selection, "
    "pre-mobilization, execution and final evaluation.</p>"
    "<p>The idea at the center is the <b>interface</b>. That is the written place where the two "
    "systems meet. Where they differ, the difference is written down first. That paper is the "
    "<b>bridging document</b>.</p>"
    "<p>For you it comes down to three lines.</p>"
    "<p><b>You take instructions from your own line.</b></p>"
    "<p><b>A permit crosses the interface. A conversation does not.</b></p>"
    "<p><b>Everybody may stop a job.</b></p>"
    "<p>This is guidance, not a standard. It does not define job titles, and it does not cover "
    "pay or contract terms.</p>",
    "Learn your own site's chart. Do not learn a list of words."), 580)
S["ra04-f6"]=lambda: f_realia(tbl("Word study",
    "The phrase, and what it says about authority",
    ["The phrase","What it says about authority","An example"],
    [["reports to","the line you take instructions from","Samira reports to the maintenance supervisor."],
     ["is responsible for","the thing you must look after","She is responsible for the instruments."],
     ["is accountable for","the thing you will be asked about","The superintendent is accountable for the permit."],
     ["may instruct","who can tell you to do something","Only your own supervisor may instruct you."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty. One of them is <i>may stop</i>, and the answer is everybody."), 620)
S["ra04-f7"]=lambda: f_matrix(["Employer","Reports to","May instruct an operator","May stop a job"],
    [("Operator",["company","shift supervisor",CROSS,TICK]),
     ("Shift supervisor",["company","superintendent",TICK,TICK]),
     ("Superintendent",["company","operations manager",TICK,TICK]),
     ("Contractor welder",["contractor","contractor supervisor",CROSS,TICK]),
     ("Contractor supervisor",["contractor","contractor manager",CROSS,TICK]),
     ("HSE officer",["company","HSE manager",CROSS,TICK])], 640)
S["ra04-f8"]=lambda: f_icons([("signature","a supervisor signing a permit"),
    ("handsup","an HSE officer raising a hand"),("hivis","a contractor's welder asking"),
    ("engine","an operator at a valve"),("clipboard","a superintendent at a chart"),
    ("logsheet","a handover between two shifts")],3)
S["ra04-f9"]=lambda: f_realia(form("Shift handover &mdash; Mureij gathering station",
    [("Outgoing","O. Dabbagh"),("Incoming","S. Qassab"),("Date and shift","12 March, 06:00 to 18:00"),
     ("Plant status","both trains running, reduced rate"),
     ("Outstanding permit 1","4471, hot work, pump house, performing authority A. Sweid"),
     ("Outstanding permit 2","4468, instrument work, closed 14:20"),
     ("Requests received","one, from the contractor supervisor, in writing, 11:15"),
     ("What I did about it","referred to the shift supervisor; not actioned")],
    note="The last two lines are the ones that make this a handover and not a diary."), 580)
S["ra04-f10"]=lambda: f_scene(800,400,
    people=[("omar",140,180,{}),("lars",250,176,{}),("haddad",420,182,{"seated":True})],
    props=[("desk",390,0,1.0),("logsheet",470,196,0.26),("dashboard",600,190,0.36),
     ("hivis",700,194,0.3),("clipboard",180,200,0.24)],
    clockat=(60,40,22,12,0))
S["ra04-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Request A",None,
    "<p>The contractor asked us to open something in the pump house. I said I would look at "
    "it.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Request B",None,
    "<p>11:15. L. Eriksen, contractor HSE lead, asked for the 4 inch drain on line 12 to be "
    "opened for a hot work gas test. Referred to shift supervisor S. Haddad at 11:20. "
    "Not actioned by me.</p>",None),380)[0:3],
    800,300,"No time, no name, no line","A time, a name, a line, an outcome")
S["ra04-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Somebody from the contractor asked for a valve to be opened. I was not sure so I did "
    "nothing.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>L. Eriksen, contractor HSE lead, asked at 11:15 for the drain on line 12 to be opened. "
    "The request crosses the interface, so I referred it to S. Haddad rather than acting on it. "
    "Haddad informed 11:20. No valve was moved.</p>",None),380)[0:3],
    800,300,"The right action, unrecorded","The right action, and why")
S["ra04-f13"]=lambda: f_realia(form("Plan your request log",
    [("The time",BLANK),("Who asked",BLANK),("Their employer",BLANK),
     ("What they asked for",BLANK),("Which line or item",BLANK),("What I did about it",BLANK)],
    note="Six boxes. The third one is the one that decides what the sixth one should say."), 540)
S["ra04-f14"]=lambda: f_scene(1000,450,
    people=[("omar",60,176,{"seated":True}),("samira",130,172,{"seated":True}),
     ("haddad",205,176,{}),("nour",290,172,{}),("yusuf",365,176,{}),
     ("ahmad",440,172,{"seated":True}),("nadia",515,176,{"seated":True}),
     ("adeel",590,170,{}),("lars",655,172,{}),("ida",720,170,{}),
     ("wei",785,172,{}),("tomas",845,170,{}),("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("logsheet",350,198,0.24),
     ("hivis",420,194,0.28),("clipboard",550,198,0.22),("table",650,0,1.0),
     ("signature",860,198,0.22),("shelf",930,96,0.5)],
    board=(40,22,206,112,"THE INTERFACE",[("company","ten boxes"),("contractor","four"),("between","one line")]),
    clockat=(262,34,22,12,0))
S["ra04-f15"]=lambda: f_chart([("yes, I have seen it written",4),("yes, I was told",7),
    ("I think so",6),("no",3),("never asked",2)], unit="operators")
S["ra04-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "One request, two employers, one line on a chart",
    "<p><b>A handover sheet</b> with a written request clipped to it, timed 11:15.</p>"
    "<p><b>An organization chart</b> with two columns and one line between them.</p>"
    "<p><b>A contract cover page</b> with the words <i>bridging document to be agreed</i> and no "
    "attachment behind it.</p>"
    "<p><b>A glass of tea</b> going cold.</p>"
    "<p><i>The bridging document was to be agreed at pre-mobilization. Mobilization happened in "
    "a hurry, and the sentence stayed a sentence.</i></p>",
    "Seven o'clock. Everybody behaved well. The interface exists only as a promise."), 600)

# ---------------- Unit 5 ----------------
S["ra05-f1"]=lambda: f_icons([("note","a rule"),("padlock","a control"),
    ("noentry","to bypass"),("key","to override"),("container","a confined space"),
    ("padlock","isolation"),("torch","hot work"),("signature","a permit"),
    ("danger","the line of fire"),("crane","a lift"),("pallet","a load"),
    ("chain","a harness"),("barrier","an anchor point"),("stamp","to authorize"),
    ("magnifier","to verify"),("emergency","a fatality")],4)
S["ra05-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("yusuf",410,180,{"seated":True}),
     ("ahmad",495,180,{"seated":True}),("samira",580,180,{"seated":True})],
    props=[("desk",295,0,1.0),("board",50,90,0.62),("note",660,198,0.26),("padlock",700,198,0.24)],
    board=(30,24,214,110,"EIGHTEEN BECAME NINE",[("2013","eighteen rules"),("2018","nine rules"),("why","so they fit in a head")]),
    clockat=(262,36,22,9,0))
S["ra05-f3"]=lambda: f_icons([("padlock","a lock on an isolation point"),
    ("signature","a permit in a hand"),("chain","a harness clipped to an anchor"),
    ("barrier","a barrier around a lift"),("torch","a welding screen"),
    ("note","nine is not the number of ways to be killed")],3)
S["ra05-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Nine rules, and one real incident for each",
    ["The rule","The activity it covers","Why it is on the card","An incident we found","The year"],
    blankrows(9,5),
    note="The box at the foot: the rule you could find no incident for, and what you think that "
    "means."), 640)
S["ra05-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for new operators: nine rules, and where they came from",
    "<p style='font-size:12px;color:#6b6861'>Source: International Association of Oil and Gas "
    "Producers, Report 459, <i>Life-Saving Rules</i>. Eighteen rules in 2013; nine in the 2018 "
    "revision. In our own words.</p>"
    "<p>Nobody sat in an office and decided what would be wise. The rules come from "
    "<b>counting deaths</b>. A few activities kept coming up year after year.</p>"
    "<p>The nine are: bypassing safety controls, confined space, driving, energy isolation, hot "
    "work, line of fire, safe mechanical lifting, work authorization, and working at height.</p>"
    "<p>The first set had eighteen. The revision cut it to nine. The reason is simple. A set small "
    "enough to remember is worth more than a set long enough to defend.</p>"
    "<p>So learn this. <b>Nine is not the number of ways to be killed here.</b> It is the number "
    "of rules somebody judged a person could carry.</p>"
    "<p>These rules are about <b>people</b>: a fall, a vehicle, a lift, a confined space. They are "
    "not about plant blowing up. A site can keep all nine rules on the day it destroys itself.</p>"
    "<p>The data comes from the association's member companies. Work nobody reports is not in "
    "it.</p>",
    "A rule says what must be true. It does not say how. That is the procedure's job."), 580)
S["ra05-f6"]=lambda: f_realia(tbl("Word study",
    "The form, and what it does",
    ["The form","What it does","An example"],
    [["the bare imperative","an instruction","Verify the isolation."],
     ["must","a strong obligation","You must have a valid permit."],
     ["must not","a prohibition","You must not bypass a safety control."],
     ["do not","a plain prohibition","Do not stand under a suspended load."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>never</i> and <i>always</i>. Both are absolute, and both are "
    "used sparingly for exactly that reason."), 600)
S["ra05-f7"]=lambda: f_chart([("driving",19),("line of fire",14),("work authorization",11),
    ("energy isolation",8),("hot work",6),("lifting",5),("working at height",4),
    ("confined space",2),("bypassing controls",2)], unit="reports")
S["ra05-f8"]=lambda: f_icons([("padlock","a lock removed from an isolation point"),
    ("danger","somebody in front of a pressurized flange"),("torch","a welding arc near a drain"),
    ("crane","a load swinging over a walkway"),("noentry","a confined space with nobody at the door"),
    ("note","which rule is this?")],3)
S["ra05-f9"]=lambda: f_realia(doc("Pocket card, front and back",
    "Nine rules, nine lines, one stop-work line",
    "<p style='font-size:15px;line-height:1.9'>"
    "<b>1</b> &nbsp;Get authorization before you override or disable a safety control.<br>"
    "<b>2</b> &nbsp;Get authorization before you enter a confined space.<br>"
    "<b>3</b> &nbsp;Follow safe driving rules.<br>"
    "<b>4</b> &nbsp;Verify isolation and zero energy before work begins.<br>"
    "<b>5</b> &nbsp;Control flammables and ignition sources.<br>"
    "<b>6</b> &nbsp;Keep yourself and others out of the line of fire.<br>"
    "<b>7</b> &nbsp;Plan lifting operations and control the area.<br>"
    "<b>8</b> &nbsp;Work with a valid permit when one is required.<br>"
    "<b>9</b> &nbsp;Protect yourself against a fall when working at height."
    "</p>"
    "<p style='border-top:1px solid #cfc9bd;padding-top:6px'><b>If it is not safe, stop the job. "
    "Anybody may do this, and nobody needs permission to.</b></p>",
    "Nine rules, one card, no process safety on it at all."), 580)
S["ra05-f10"]=lambda: f_scene(800,400,
    people=[("ahmad",150,180,{}),("yusuf",255,176,{}),("omar",420,182,{"seated":True})],
    props=[("desk",395,0,1.0),("note",470,198,0.24),("padlock",530,198,0.22),
     ("engine",620,186,0.42),("iron",710,196,0.28)],
    clockat=(65,40,22,10,0))
S["ra05-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Before",None,
    "<p>Pump P-104. Isolation padlock in place on the suction valve. Permit 4471 displayed on "
    "the rail. Work party present.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Twenty minutes later",None,
    "<p>Same pump. Padlock hanging open on the hasp. Permit no longer on the rail. Work "
    "continuing. Nobody has left and nobody has signed anything.</p>",None),380)[0:3],
    800,300,"A rule kept","The same job, the same people")
S["ra05-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Report 1",None,
    "<p>I stopped the job on P-104 because it did not look safe to me.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report 2",None,
    "<p>10:40, pump P-104, permit 4471. The isolation padlock was hanging open on the hasp and "
    "the permit was not displayed. This is energy isolation, rule 4. I stopped the work and told "
    "A. Sweid and the shift supervisor. Before a restart: the isolation must be re-verified and "
    "the permit re-displayed, and the shift supervisor must sign.</p>",None),380)[0:3],
    800,300,"A feeling","A rule, evidence, an action and a restart condition")
S["ra05-f13"]=lambda: f_realia(form("Plan your stop-work note",
    [("The time",BLANK),("The equipment and permit",BLANK),("What I saw",BLANK),
     ("The rule",BLANK),("What I did",BLANK),("What must happen before a restart",BLANK)],
    note="Six boxes. Nobody needs permission to fill in the first five."), 540)
S["ra05-f14"]=lambda: f_scene(1000,450,
    people=[("ahmad",60,176,{}),("omar",130,172,{}),("yusuf",205,176,{}),
     ("nour",290,172,{}),("samira",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("adeel",515,176,{"seated":True}),("haddad",590,170,{}),("lars",655,172,{}),
     ("ida",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("padlock",350,198,0.22),
     ("engine",415,186,0.4),("note",550,198,0.22),("table",650,0,1.0),
     ("signature",860,198,0.22),("shelf",930,96,0.5)],
    board=(40,22,206,112,"NINE RULES",[("counted","from deaths"),("cut","from eighteen"),("not","process safety")]),
    clockat=(262,34,22,13,0))
S["ra05-f15"]=lambda: f_chart([("driving",8),("line of fire",6),("work authorization",5),
    ("energy isolation",3),("working at height",2)], unit="operators")
S["ra05-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A card, a padlock and a rule with a name",
    "<p><b>The pocket card</b>, open at rule 4.</p>"
    "<p><b>A withdrawn permit</b>, 4471, with the time of withdrawal written across it.</p>"
    "<p><b>An open padlock</b> that was on the hasp and through nothing.</p>"
    "<p><b>A stop-work report</b> with one rule name underlined.</p>"
    "<p><i>The padlock was on the hasp all morning. Everybody who walked past it saw a padlock "
    "and read it as an isolation.</i></p>",
    "Eight o'clock. Nine rules fit on a card. Verifying one takes a hand on the valve."), 600)

# ---------------- Unit 6 ----------------
S["ra06-f1"]=lambda: f_icons([("uniform","flame-resistant coveralls"),("helmet","a hard hat"),
    ("shoes","safety boots"),("eye","safety glasses"),("gloves","gloves"),
    ("headset","hearing protection"),("thermometer","a personal gas monitor"),
    ("firstaid","an escape breathing set"),("hot","flame-resistant"),
    ("danger","a hazard"),("padlock","a control"),("noentry","to eliminate"),
    ("transfer","to substitute"),("barrier","a guard"),("book","a procedure"),
    ("handsup","last resort")],4)
S["ra06-f2"]=lambda: f_scene(760,400,
    people=[("nour",110,176,{}),("omar",320,180,{"seated":True}),("yusuf",410,180,{"seated":True}),
     ("samira",495,180,{"seated":True}),("ahmad",580,180,{"seated":True})],
    props=[("desk",295,0,1.0),("board",50,90,0.62),("helmet",660,198,0.24),("gloves",700,198,0.24)],
    board=(30,24,214,110,"FIVE STEPS DOWN",[("top","eliminate"),("middle","engineer"),("bottom","wear it")]),
    clockat=(262,36,22,9,30))
S["ra06-f3"]=lambda: f_process(["eliminate|the hazard is gone","substitute|a smaller hazard",
    "engineering|built in","administrative|if it is read","equipment|if it is worn"], w=700)
S["ra06-f4"]=lambda: f_realia(tbl("Team research sheet",
    "One hazard a row, five questions a hazard",
    ["The hazard","Could it be eliminated","Could it be substituted","What engineering control exists","What equipment is used"],
    blankrows(6,5),
    note="A row with the first four columns empty and the fifth one full is the row to take to "
    "your supervisor."), 640)
S["ra06-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for new operators: why your hard hat comes last",
    "<p style='font-size:12px;color:#6b6861'>Source: ISO 45001:2018, <i>Occupational health and "
    "safety management systems &mdash; Requirements with guidance for use</i>. In our own "
    "words.</p>"
    "<p>One clause in this standard decides the order we deal with every hazard here. Learn the "
    "order.</p>"
    "<p><b>1 Eliminate the hazard.</b> If it is not there, nothing else is needed.</p>"
    "<p><b>2 Substitute</b> something less hazardous.</p>"
    "<p><b>3 Engineering controls.</b> Built in. They work whether or not anybody remembers.</p>"
    "<p><b>4 Administrative controls</b> and training. They work when people follow them.</p>"
    "<p><b>5 Protective equipment.</b> It works when it is worn, fitted and in date.</p>"
    "<p>Look at what happens as you go down. A guard works at four in the morning. A procedure "
    "works if it is read. Gloves work if they are the right gloves and they are on your hands.</p>"
    "<p>So the line to take away is not <i>wear your equipment</i>. It is this. <b>Every time you "
    "rely on equipment, somebody above you chose not to do one of four better things, and it is "
    "fair to ask why.</b></p>"
    "<p>A certificate says the system meets the standard. It does not say the site is safe.</p>",
    "The order is the content. Work down it. Do not stop at the convenient step."), 580)
S["ra06-f6"]=lambda: f_realia(tbl("Word study",
    "How strong is it?",
    ["The form","How strong it is","An example"],
    [["must","the strongest: a rule","You must wear a monitor in that area."],
     ["have to","an outside requirement","You have to sign before you start."],
     ["need to","a practical necessity","You need to change the cartridge monthly."],
     ["should","advice, strongly meant","You should stand upwind of the vent."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>may</i> and <i>do not have to</i>. The second is not a "
    "prohibition, and people mix it up with one."), 600)
S["ra06-f7"]=lambda: f_matrix(["Eliminate","Substitute","Engineering","Administrative","Equipment"],
    [("Hydrogen sulfide at the wellhead",[CROSS,CROSS,TICK,TICK,TICK]),
     ("Noise at the compressor",[CROSS,CROSS,TICK,TICK,TICK]),
     ("An unguarded coupling",[CROSS,CROSS,TICK,TICK,TICK]),
     ("Manual sampling of hot oil",[CROSS,TICK,CROSS,TICK,TICK]),
     ("Working at height on the tank",[CROSS,CROSS,CROSS,TICK,TICK]),
     ("Carrying drums by hand",[CROSS,CROSS,CROSS,TICK,TICK])], 660)
S["ra06-f8"]=lambda: f_icons([("noentry","a hazard designed out"),
    ("transfer","a safer chemical put in its place"),("barrier","a guard on a coupling"),
    ("book","a procedure on a wall"),("chain","a person in a harness"),
    ("magnifier","which level is this?")],3)
S["ra06-f9"]=lambda: f_realia(tbl("Protective equipment issue card",
    "O. Dabbagh &middot; badge 2214",
    ["Item","Size","Issued","Expiry or next check"],
    [["Flame-resistant coveralls","52","4 January","annual check January"],
     ["Hard hat","&mdash;","4 January","replace January 2029"],
     ["Safety boots","43","4 January","on wear"],
     ["Gloves, nitrile","L","2 March","on use"],
     ["Hearing protection","&mdash;","4 January","on wear"],
     ["Personal gas monitor","&mdash;","4 January","<b>calibration due 1 January</b>"]],
    note="Five rows are in date. One is two months past its calibration date, and it is the one "
    "that is supposed to warn you."), 600)
S["ra06-f10"]=lambda: f_scene(800,400,
    people=[("omar",150,180,{}),("nadia",260,176,{}),("yusuf",420,182,{"seated":True})],
    props=[("desk",395,0,1.0),("thermometer",470,196,0.28),("gloves",540,198,0.22),
     ("shelf",640,96,0.5),("racking",700,170,0.5)],
    clockat=(65,40,22,11,0))
S["ra06-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Monitor A",None,
    "<p>Display reads zero. Calibration label dated 1 January, next due 1 January next year. "
    "In date.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Monitor B",None,
    "<p>Display reads zero. Calibration label dated 1 January last year, due 1 January. "
    "Two months expired. The zero looks exactly the same.</p>",None),380)[0:3],
    800,300,"In date","Two months out of date")
S["ra06-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Report 1",None,
    "<p>Checked my equipment. All fine.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report 2",None,
    "<p>Badge 2214, 06:10. Coveralls, hard hat, boots, gloves and hearing protection all present "
    "and in date. Personal gas monitor calibration expired 1 January, two months ago. Exchanged "
    "it at stores for unit 118, calibrated 2 February. The expired unit was reading zero, which "
    "is why I looked at the label and not the display.</p>",None),380)[0:3],
    800,300,"Two words","Six items, one date and one exchange")
S["ra06-f13"]=lambda: f_realia(form("Plan your equipment check",
    [("My badge and the time",BLANK),("The items I have",BLANK),("The dates on them",BLANK),
     ("What is wrong",BLANK),("What I did about it",BLANK),
     ("The question I would ask my supervisor",BLANK)],
    note="Six boxes. The last one begins <i>why are we relying on this?</i>"), 540)
S["ra06-f14"]=lambda: f_scene(1000,450,
    people=[("omar",60,176,{}),("nadia",130,172,{}),("yusuf",205,176,{}),
     ("nour",290,172,{}),("samira",365,176,{"seated":True}),("ahmad",440,172,{"seated":True}),
     ("adeel",515,176,{"seated":True}),("haddad",590,170,{}),("lars",655,172,{}),
     ("ida",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("thermometer",350,196,0.26),
     ("helmet",420,198,0.22),("gloves",550,198,0.22),("table",650,0,1.0),
     ("racking",860,170,0.44),("shelf",930,96,0.5)],
    board=(40,22,206,112,"FIVE CONTROLS",[("first","eliminate"),("third","engineer"),("last","wear it")]),
    clockat=(262,34,22,14,0))
S["ra06-f15"]=lambda: f_chart([("the fit",3),("the damage",6),("the date",4),
    ("all three",7),("none of them",2)], unit="operators")
S["ra06-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A zero that meant nothing, and a staircase drawn on a sheet of paper",
    "<p><b>A personal gas monitor</b> reading zero, with its calibration label two months "
    "expired.</p>"
    "<p><b>An issue card</b> with one row underlined.</p>"
    "<p><b>A five-step staircase</b> drawn on a sheet of paper, with a circle round the bottom "
    "step.</p>"
    "<p><b>A glass of tea</b> going cold.</p>"
    "<p><i>The hazard could not be eliminated and could not be substituted. The engineering "
    "control was a fixed detector that had been out of service since August. So the bottom step "
    "was carrying the whole load, and it was out of date.</i></p>",
    "Nine o'clock. The weakest control was the only control, and nobody had decided that on "
    "purpose."), 600)
