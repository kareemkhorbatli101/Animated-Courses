# -*- coding: utf-8 -*-
"""Clearline Book 2 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · Explaining a Process ----------------
S["p07-f1"]=lambda: f_icons([("pallet","material arrives"),("scales","checked with a gauge"),
    ("iron","the machine runs"),("tray","moved to bench 2"),("barcode","labelled"),
    ("packet","a sample set aside"),("carton","packed"),("crate","wrapped"),
    ("signature","signed off"),("truck","it leaves")], cols=5)
S["p07-f2"]=lambda: f_scene(900,420, people=[("tomas",300,178,{}),("ravi",430,174,{})],
    props=[("desk",200,0,1.3),("scales",350,200,0.45),("essay",500,200,0.4)],
    board=(720,24,170,110,"SOP-114",[("steps","7"),("rev","3")]))
S["p07-f3"]=lambda: f_icons([("essay","a printed procedure"),("note","a handwritten note"),
    ("handsup","shown by hand"),("flashback","done without looking"),
    ("key","a tool not on the list"),("student","a new person watching")], cols=3)
S["p07-f4"]=lambda: f_realia(tbl("","Twelve step lines",
    ["#","The step","Is this written down?"],
    [[str(i),"",""] for i in range(1,13)],
    note="<b>The step that would be missed:</b>"), 500)
S["p07-f5"]=lambda: f_realia(doc("Brightwell Pharma &middot; SOP-114",
    "rev 3 &middot; gauge check and first-article inspection &middot; issued 2 March 2024",
    "<p><b>Equipment.</b> Gauge G-12 &bull; calibration record &bull; inspection tray &bull; "
    "batch label sheet.</p>"
    "<p>1. The batch paperwork <b>is collected</b> from the store and <b>is checked</b> against "
    "the works order.<br>"
    "2. The gauge <b>is taken</b> from the cabinet and the calibration date <b>is confirmed</b>.<br>"
    "3. The first part <b>is measured</b> and the reading <b>is recorded</b>.<br>"
    "4. If the reading is in tolerance, the batch <b>is released</b> to packing.<br>"
    "5. If the reading is out of tolerance, the batch <b>is quarantined</b> and the supervisor "
    "<b>is informed</b>.<br>"
    "6. The inspection sheet <b>is signed</b> and <b>is filed</b> with the batch record.<br>"
    "7. The gauge <b>is returned</b> to the cabinet.</p>"
    "<p><b>Note.</b> Steps must be performed in order. Any deviation <b>is recorded</b> on the "
    "batch record.</p>"
    "<p><b>Written by</b> P. Nowak &nbsp;&nbsp; <b>Approved</b> R. Menon</p>",
    "Seven steps. The person who does this job does eleven."))
S["p07-f6"]=lambda: f_realia(tbl("Word study","Sequencers, in order",
    ["Sequencer","Where it sits","Example"],
    [["<i>beforehand</i>","earlier than the step","The gauge is warmed <b>beforehand</b>."],
     ["<i>first</i>","the beginning","<b>First</b> the paperwork is collected."],
     ["<i>next</i> / <i>then</i>","the following step","<b>Then</b> the gauge is taken out."],
     ["<i>after that</i>","the following step","<b>After that</b> the part is measured."],
     ["<i>while</i> / <i>meanwhile</i>","at the same time",
      "<b>Meanwhile</b> the next batch is weighed."],
     ["<i>finally</i> / <i>afterwards</i>","the end","<b>Finally</b> the sheet is signed."]]), 520)
S["p07-f7"]=lambda: f_chart([("a year",395),("a day, about",1.1),("an hour, about",0.045)],
    unit="million non-fatal work injuries &mdash; the same figure, three units", w=520)
S["p07-f8"]=lambda: f_icons([("carton","a sealed box"),("key","a tool picked up"),
    ("thermostat","a dial set"),("tray","a part placed"),
    ("trafficlights","the light goes green"),("barcode","a label applied")], cols=3)
S["p07-f9"]=lambda: f_realia(tbl("Brightwell Pharma &middot; handover checklist",
    "P. Nowak &rarr; R. Menon &middot; leaving 28 March",
    ["Task","Shown","Done alone","Signed off"],
    [["Collect and check batch paperwork","&#10003;","&#10003;","&#10003;"],
     ["Confirm gauge calibration","&#10003;","&#10003;","&#10003;"],
     ["Measure and record first article","&#10003;","&#10003;","&#10003;"],
     ["Release a batch to packing","&#10003;","&#10003;","&#10003;"],
     ["Quarantine an out-of-tolerance batch","&#10003;","&#10003;",""],
     ["File the inspection sheet","&#10003;","&#10003;","&#10003;"],
     ["Return and log the gauge","&#10003;","&#10003;","&#10003;"],
     ["Set up the second tray","&#10003;","","" ],
     ["<b>Warm the gauge before use</b>","","",""],
     ["<b>Discard the first two parts</b>","","",""],
     ["<b>Turn the tray for the scanner</b>","","",""],
     ["<b>Run the machine on for 90 seconds</b>","","",""]],
    note="Four rows with nothing in them. All four leave with him on the 28th."), 560)
S["p07-f10"]=lambda: f_scene(900,420, people=[("tomas",310,178,{}),("ravi",420,174,{})],
    props=[("desk",200,0,1.3),("scales",360,200,0.42),("essay",480,200,0.4),
    ("pen",560,205,0.3)],
    board=(720,24,170,100,"SOP-114 rev 3",[("steps","7")]))
S["p07-f11"]=lambda: f_realia(tbl("Two revisions","SOP-114",
    ["rev 3 &mdash; seven steps","rev 4 &mdash; eleven"],
    [["1 paperwork collected<br>2 gauge taken out<br>3 <b>first part measured</b><br>"
      "4 released<br>5 quarantined<br>6 signed and filed<br>7 gauge returned",
      "1 paperwork collected<br>2 gauge taken out<br>"
      "<b>2a gauge warmed in the hand, 1 min</b><br>"
      "3 <b>first THREE measured; first two discarded</b><br>4 released<br>"
      "<b>4a tray turned for the scanner</b><br>5 quarantined<br>6 signed and filed<br>"
      "7 gauge returned<br><b>7a machine left running 90 s</b>"]]), 540)
S["p07-f12"]=lambda: f_realia(doc("Two versions of four steps", None,
    "<p><b>A.</b> 1. The gauge is prepared. 2. The first parts are checked. 3. The tray is "
    "positioned correctly. 4. The machine is run on as required.</p>"
    "<p style='font-size:12px;color:#6b6861'>Four steps containing <i>prepared</i>, "
    "<i>checked</i>, <i>correctly</i> and <i>as required</i>. None of them is a step.</p>"
    "<p style='margin-top:14px'><b>B.</b> 1. The gauge is warmed in the closed hand for one "
    "minute &mdash; the store is at 12 &deg;C and cold steel reads about 0.02 mm small. "
    "2. The first three parts are measured; the first two are discarded, because the machine is "
    "still settling. 3. The tray is turned 90&deg; so the labels face the scanner, otherwise "
    "each label is scanned by hand and the batch takes ten minutes longer. 4. The machine is left "
    "running for 90 seconds after the last part. <b>The reason for this is not documented.</b></p>"))
S["p07-f13"]=lambda: f_realia(tbl("","Procedure planner",
    ["#","The step, in the passive","Why"],
    [[str(i),"",""] for i in range(1,9)],
    note="<b>Steps I do that are not on this list:</b>"), 500)
S["p07-f14"]=lambda: f_scene(1000,450, people=[("tomas",150,178,{}),("ravi",250,174,{}),
    ("anders",350,182,{}),("ines",450,172,{}),("nour",540,168,{}),
    ("marek",630,180,{}),("yara",720,172,{}),("wei",810,170,{}),
    ("okonjo",890,182,{}),("chiamaka",960,172,{})],
    props=[("pallet",100,0,0.7),("desk",300,0,1.1),("scales",400,196,0.4),
    ("iron",560,0,0.6),("carton",700,0,0.6),("crate",840,0,0.7),
    ("computer",500,140,0.42)],
    board=(220,24,150,100,"ELEVEN STEPS",[("written","7"),("done","11")]))
S["p07-f15"]=lambda: f_chart([("about half",7),("very little",6),("most of it",5),
    ("none of it",3),("all of it",2)])
S["p07-f16"]=lambda: f_scene(860,410, people=[("tomas",310,178,{"smile":False})],
    props=[("desk",220,0,1.3),("essay",290,200,0.42),("scales",380,205,0.36),
    ("cupboard",560,0,0.8),("calendar",150,110,0.55)],
    window_=(660,56,130,96), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 8 · Comparing Suppliers ----------------
S["p08-f1"]=lambda: f_icons([("pricetag","two prices"),("calendar","three weeks or six"),
    ("certificate","certificates"),("worldmap","two routes"),
    ("carton","tested to destruction"),("headset","a help desk"),
    ("essay","the terms"),("noentry","a gift refused")], cols=4)
S["p08-f2"]=lambda: f_scene(900,420, people=[("chiamaka",330,172,{"seated":True})],
    props=[("desk",190,0,1.35),("essay",260,200,0.4),("essay",370,200,0.4),
    ("calculator",470,205,0.38),("notebook",550,205,0.38),("window",760,150,0.9)])
S["p08-f3"]=lambda: f_icons([("sizechart","a thinner wall"),("ship","a longer route"),
    ("pallet","a bigger minimum"),("certificate","no certificate"),
    ("headset","no local desk"),("bankcard","payment in advance")], cols=3)
S["p08-f4"]=lambda: f_realia(tbl("","Why could it be this cheap?",
    ["What we buy","Why it could be cheap","When we would find out"],
    [["","",""],["","",""],["","",""],["","",""]]), 520)
S["p08-f5"]=lambda: f_realia(tbl("Arvo Components &middot; supplier comparison",
    "carton stock &middot; 4,000 at 180&times;180&times;240 mm, six-high stack",
    ["","Kjeldsen","Ostergaard","Vandermeer"],
    [["Unit price","1.42","1.38","<b>1.26</b>"],
     ["Lead time","3 weeks","3 weeks","<b>6 weeks</b>"],
     ["Minimum order","2,000","4,000","<b>10,000</b>"],
     ["Board thickness","1.5 mm","1.5 mm","1.2 mm"],
     ["Certification","yes","yes","applied for"],
     ["Support","Ostberg","Hamburg","none in Europe"],
     ["Payment","30 days","30 days","100% advance"],
     ["References given","3","2","0"]],
    note="Cheapest per carton is not cheapest order: at a 10,000 minimum we would pay 12,600 "
    "for stock worth 5,040 to us this quarter."), 560)
S["p08-f6"]=lambda: f_realia(tbl("Word study","Three ways to compare",
    ["Type","How","Example"],
    [["short adjective","<i>-er</i> / <i>-est</i>","cheap &rarr; cheaper &rarr; the cheapest"],
     ["ends in <i>-y</i>","<i>-ier</i> / <i>-iest</i>","heavy &rarr; heavier &rarr; the heaviest"],
     ["long adjective","<i>more</i> / <i>most</i>",
      "reliable &rarr; more reliable &rarr; the most reliable"],
     ["irregular","&mdash;","good &rarr; better &rarr; the best"],
     ["irregular","&mdash;","bad &rarr; worse &rarr; the worst"],
     ["irregular","&mdash;","far &rarr; further &rarr; the furthest"]]), 520)
S["p08-f7"]=lambda: f_chart([("developed economies",4.2),("developing economies",1.3)],
    unit="trillion dollars of digitally deliverable services exports, 2023 &mdash; "
    "the two groups are not the same size", w=520)
S["p08-f8"]=lambda: f_icons([("carton","1.5 mm or 1.2"),("calendar","3 weeks or 6"),
    ("pallet","4,000 or 10,000"),("certificate","yes or applied for"),
    ("headset","a desk or an inbox"),("bankcard","30 days or advance")], cols=3)
S["p08-f9"]=lambda: f_realia(doc("Arvo Components &middot; recommendation",
    "carton stock, Q3 &middot; C. Obi &middot; 26 February",
    "<p><b>Recommended: Ostergaard, 4,000 cartons at 1.38.</b></p>"
    + table_html(["Criterion","Ostergaard","Vandermeer"],
      [["Unit price","1.38","1.26"],
       ["Order value at our quantity","5,520","<b>12,600</b> (10,000 min.)"],
       ["Lead time","3 weeks","6 weeks"]])
    + "<p>Vandermeer is genuinely cheaper per carton &mdash; 12 cents, about nine per cent "
    "&mdash; and I expect we will use them eventually. The deciding point is the minimum order: "
    "the saving is 480 and the storage is in the region of 1,800.</p>",
    "Proposal: order 4,000 from Ostergaard now; ask Vandermeer for two references and a 4,000 "
    "trial price for Q1."))
S["p08-f10"]=lambda: f_scene(900,420, people=[("chiamaka",300,172,{}),
    ("okonjo",460,182,{"seated":True}),("marek",560,180,{"seated":True})],
    props=[("table",400,250,1.4),("essay",340,196,0.4),("carton",620,0,0.55),
    ("computer",520,196,0.4)],
    board=(740,24,160,110,"COMPARISON",[("per carton","V"),("per order","O")]))
S["p08-f11"]=lambda: f_realia(tbl("Two tables, same suppliers","Four criteria, or eight",
    ["Four criteria &mdash; Vandermeer wins","Eight criteria &mdash; Ostergaard wins"],
    [["unit price &bull; lead time &bull; board thickness &bull; certification<br><br>"
      "<b>Vandermeer: cheapest, and only one row against it.</b>",
      "the same four, plus<br>minimum order &bull; support &bull; payment terms &bull; "
      "references<br><br><b>Ostergaard: four of the new rows decide it.</b>"]],
    note="A table with four columns is not a neutral table. It is a table made by somebody who "
    "had already decided."), 540)
S["p08-f12"]=lambda: f_realia(doc("Two memos", None,
    "<p><b>A.</b> Vandermeer are much cheaper and seem keen. Ostergaard are more reliable but "
    "expensive. On balance I would suggest we go with Vandermeer as the saving is significant.</p>"
    "<p style='font-size:12px;color:#6b6861'>Four adjectives, no figures, nothing to argue with "
    "or agree to.</p>"
    "<p style='margin-top:14px'><b>B.</b> Vandermeer are 12 cents cheaper per carton, about nine "
    "per cent, which on 4,000 is 480. Their minimum order is 10,000, so the order would be 12,600 "
    "against 5,520, and we would store about fifteen pallets for eleven weeks at 40 a pallet a "
    "month &mdash; roughly 1,800. Their lead time is six weeks against three and they have given "
    "no references. I recommend Ostergaard at 1.38, and a 4,000 trial price from Vandermeer "
    "for Q1.</p>"))
S["p08-f13"]=lambda: f_realia(tbl("","Recommendation planner",
    ["Criterion","Option A","Option B"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>I recommend:</b> ______________ &nbsp;&nbsp; "
    "<b>The strongest point against me:</b> ______________ &nbsp;&nbsp; "
    "<b>What I would propose next:</b>"), 520)
S["p08-f14"]=lambda: f_scene(1000,450, people=[("chiamaka",150,172,{}),("paula",250,170,{}),
    ("marek",350,180,{}),("sofia",450,172,{}),("yara",540,172,{}),
    ("wei",630,170,{}),("ines",720,172,{}),("nour",810,168,{}),
    ("okonjo",890,182,{}),("ravi",960,176,{})],
    props=[("carton",100,0,0.6),("crate",180,0,0.7),("table",380,250,1.3),
    ("packet",460,196,0.36),("computer",620,140,0.45),("handshake",740,150,0.5),
    ("bag",880,0,0.55)],
    board=(260,24,150,100,"STAND 4C",[("Kjeldsen",""),("Ostergaard","")]))
S["p08-f15"]=lambda: f_chart([("the best value",7),("always the same supplier",5),
    ("usually the cheapest",4),("usually the best quality",4),("always the cheapest",2)])
S["p08-f16"]=lambda: f_scene(880,420, people=[("chiamaka",330,172,{"smile":False})],
    props=[("crate",520,0,0.75),("crate",600,0,0.75),("carton",680,0,0.6),
    ("clipboard",250,200,0.42),("thermometer",780,120,0.5),("pallet",150,0,0.7)],
    panelbg="#2b3340", floorbg="#39404c")

# ---------------- Unit 9 · The Meeting ----------------
S["p09-f1"]=lambda: f_icons([("essay","an agenda"),("clock","the clock"),
    ("note","taking notes"),("handsup","a hand raised"),("meeting","two at once"),
    ("flipchart","an item circled"),("chair","the chair"),
    ("inventory","an action list"),("computer","a video call"),
    ("chair","an empty chair")], cols=5)
S["p09-f2"]=lambda: f_scene(920,430, people=[("okonjo",300,182,{}),
    ("yara",420,172,{"seated":True}),("marek",510,180,{"seated":True}),
    ("nour",600,168,{"seated":True}),("paula",680,170,{"seated":True}),
    ("hanna",760,172,{"seated":True})],
    props=[("flipchart",160,46,0.9),("table",400,250,1.5),("computer",470,196,0.4)],
    clockat=(860,56,22,9,10))
S["p09-f3"]=lambda: f_icons([("handsup","asking"),("meeting","talking over"),
    ("note","holding the question"),("computer","muted on a call"),
    ("phone","checking a figure"),("worried","saying nothing")], cols=3)
S["p09-f4"]=lambda: f_realia(tbl("","The question nobody asked",
    ["The meeting","The question nobody asked","Who could have asked it","What stopped them"],
    [["","","",""],["","","",""],["","","",""],["","","",""]]), 540)
S["p09-f5"]=lambda: f_realia(tbl("Lindmark Freight &middot; operations meeting",
    "Thursday 14 March, 09:00&ndash;09:40 &middot; Room 2 and by call",
    ["","Item","Time",""],
    [["1","Minutes of 15 February","3 min",""],
     ["2","Safety figures, February","5 min",""],
     ["3","Carton stock &mdash; supplier decision","5 min",""],
     ["4","Night shift cover","5 min","<i>carried over</i>"],
     ["5","Scanner replacement","4 min",""],
     ["6","Visitor badges","3 min",""],
     ["7","<b>Warehouse lease &mdash; renewal</b>","5 min",
      "<b>carried over &times;3 &nbsp;*</b>"],
     ["8","Training budget","5 min",""],
     ["9","Any other business","5 min",""]],
    note="<b>Attending</b> D. Okonjo (chair), P. Moreau, A. Holm, Y. Haddad, W. Zhang (by call), "
    "N. Khalil. <b>Apologies</b> H. Lindqvist. &nbsp; "
    "Times total 40 minutes. The meeting is 40 minutes long."), 560)
S["p09-f6"]=lambda: f_realia(tbl("Word study","Three kinds of question",
    ["Type","Pattern","Example"],
    [["yes / no","<i>do &middot; does &middot; did &middot; is &middot; are &middot; can</i> "
      "+ subject","<b>Did</b> we give notice?"],
     ["wh-","<i>wh-</i> + auxiliary + subject","<b>When does</b> the notice period end?"],
     ["subject question","<i>who</i> / <i>what</i> + verb, <b>no auxiliary</b>",
      "<b>Who owns</b> this action?"],
     ["indirect","<i>Could you tell me</i> + <b>statement order</b>",
      "Could you tell me <b>when it ends</b>?"],
     ["indirect yes / no","+ <i>if</i> or <i>whether</i>",
      "Do you know <b>if we gave notice</b>?"]]), 520)
S["p09-f7"]=lambda: f_chart([("developed economies",61),("least developed countries",16)],
    unit="% of service exports that are digitally deliverable &mdash; shares, not amounts", w=520)
S["p09-f8"]=lambda: f_icons([("clock","twenty-five past"),("essay","item seven"),
    ("calendar","four months"),("envelope","unopened"),
    ("inventory","no owner"),("door","two people leaving")], cols=3)
S["p09-f9"]=lambda: f_realia(tbl("Lindmark Freight &middot; minutes",
    "14 March &middot; chair D. Okonjo &middot; actions",
    ["Action","Owner","By when"],
    [["Serve lease notice, registered post, clause 11.3","A. Holm","15 Mar"],
     ["Confirm notice served, by email to chair","A. Holm","15 Mar"],
     ["Request Vandermeer references + trial price","P. Moreau","22 Mar"],
     ["Put lease renewal on April agenda as item 1","D. Okonjo","11 Apr"],
     ["Look at night shift cover","<b></b>","<b></b>"],
     ["Scanner replacement &mdash; get prices","<b></b>","<b></b>"]],
    note="Two rows with no owner. Both have been on this list since January."), 540)
S["p09-f10"]=lambda: f_scene(940,430, people=[("okonjo",250,182,{}),
    ("yara",400,172,{}),("marek",500,180,{"seated":True}),
    ("nour",590,168,{"seated":True}),("hanna",680,172,{"seated":True})],
    props=[("flipchart",120,46,0.9),("table",380,250,1.5),("computer",460,196,0.4)],
    board=(790,24,140,110,"ON THE CALL",[("W. Zhang","muted")]),
    clockat=(760,150,20,9,25))
S["p09-f11"]=lambda: f_realia(tbl("Two agendas","The same meeting",
    ["As circulated","As it should have been"],
    [["1 minutes<br>2 safety<br>3 carton stock<br>4 night shift<br>5 scanners<br>"
      "6 badges<br><b>7 warehouse lease</b><br>8 training<br>9 AOB",
      "<b>1 warehouse lease &mdash; notice expires in 4 months</b><br>"
      "2 minutes<br>3 safety<br>4 carton stock<br>5 training<br>6 AOB<br><br>"
      "<i>By email: night shift cover, scanner replacement, visitor badges</i>"]],
    note="Same nine items. One of these agendas gets the lease decided."), 540)
S["p09-f12"]=lambda: f_realia(doc("Two sets of minutes", None,
    "<p><b>A.</b> Daniel opened by thanking everybody for coming. There was a discussion about "
    "the safety figures and Anders said that February had been quieter than January. Paula raised "
    "the question of the carton suppliers and there was some discussion of the minimum order, "
    "after which Yara asked about the lease and it was agreed to look at this&hellip;</p>"
    "<p style='font-size:12px;color:#6b6861'>Eleven paragraphs of who said what. No action table. "
    "Nobody knows what to do tomorrow.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>7. Warehouse lease.</b> Taken before item 4 at "
    "Y. Haddad's request. Notice period four months; lease expires in four months and eleven "
    "days; if notice is not served this week the lease renews automatically. Carried over three "
    "times and <b>had no owner</b>, which is why. <b>Decided: A. Holm to serve notice by "
    "registered post quoting clause 11.3 by Friday 15 March and confirm to the chair the same "
    "day.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>One line of discussion, the decision in bold, "
    "a name and a date.</p>"))
S["p09-f13"]=lambda: f_realia(tbl("","Minutes planner",
    ["Item","One line of discussion","The decision"],
    [["1","",""],["2","",""],["3","",""],["4","",""],["5","",""]],
    note="<b>Date</b> ______ &nbsp; <b>Chair</b> ______ &nbsp; <b>Present</b> ______ &nbsp; "
    "<b>Apologies</b> ______ &nbsp;&bull;&nbsp; Actions: what / who / by when"), 540)
S["p09-f14"]=lambda: f_scene(1000,450, people=[("okonjo",160,182,{}),
    ("yara",260,172,{"seated":True}),("marek",350,180,{"seated":True}),
    ("nour",440,168,{"seated":True}),("hanna",530,172,{"seated":True}),
    ("paula",620,170,{"seated":True}),("ines",710,172,{"seated":True}),
    ("ravi",800,176,{"seated":True}),("sofia",880,172,{"seated":True}),
    ("chiamaka",960,172,{})],
    props=[("table",240,250,1.7),("computer",320,196,0.4),("phone",470,200,0.3),
    ("chair",900,210,0.7),("flipchart",80,46,0.85)],
    board=(700,20,170,110,"AGENDA",[("items","9"),("on the call","2")]),
    clockat=(620,56,22,9,25))
S["p09-f15"]=lambda: f_chart([("30 to 60 minutes",8),("1 to 2 hours",6),
    ("under 30 minutes",4),("over 2 hours",3),("we don't have meetings",1)])
S["p09-f16"]=lambda: f_scene(880,420, people=[],
    props=[("flipchart",160,46,0.95),("table",380,250,1.5),("computer",470,196,0.42),
    ("chair",640,210,0.7),("door",780,80,0.9)],
    panelbg="#242c38", floorbg="#30394a")
