# -*- coding: utf-8 -*-
"""Flowline Book 3 figure specs, Units 7 to 9."""
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
S["rc07-f1"]=lambda: f_icons([("crate","corrosion"),("wall","a coating"),
    ("magnifier","a holiday in the coating"),("tally","an anode"),
    ("square","a cathode"),("fusebox","cathodic protection"),
    ("recycle","a sacrificial anode"),("fusebox","impressed current"),
    ("thermostat","a potential"),("pen","a reference electrode"),
    ("signpost","a test post"),("boiler","a rectifier"),
    ("crate","soil"),("balance","resistivity"),("noentry","to disbond"),
    ("barrier","to shield")],4)
S["rc07-f2"]=lambda: f_scene(760,400,
    people=[("tomas",110,176,{}),("omar",320,180,{"seated":True}),("adeel",405,180,{}),
     ("yusuf",490,180,{"seated":True}),("samira",570,180,{"seated":True}),
     ("ahmad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("fusebox",715,196,0.22)],
    board=(30,24,214,110,"ONE DEFENSE DEFEATS THE OTHER",[("coating","primary"),("current","secondary"),("disbonded","both gone")]),
    clockat=(262,36,22,12,0))
S["rc07-f3"]=lambda: f_icons([("wall","a well coated pipe, no current needed"),
    ("magnifier","a small holiday, current reaching the steel"),
    ("recycle","a sacrificial anode wasting away"),
    ("fusebox","a rectifier driving current through a groundbed"),
    ("barrier","a disbonded coating shielding the current"),
    ("note","two defenses, one failure that links them")],3)
S["rc07-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six cathodic protection readings",
    ["The location","The reading","On or interrupted?","The reference electrode","The date"],
    blankrows(6,5),
    note="The third and fourth columns are the ones usually missing, and one word in the third "
    "changes what the reading means."), 640)
S["rc07-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: keeping the soil off the steel, and the metal in it",
    "<p style='font-size:12px;color:#6b6861'>Source: NACE SP0169, <i>Control of External Corrosion on "
    "Underground or Submerged Metallic Piping Systems</i>. In our own words.</p>"
    "<p><b>Why it happens.</b> Steel in wet soil does not rust evenly. Some patches become "
    "<b>anodes</b>, where iron goes into solution and wall is lost; others become <b>cathodes</b>, "
    "where nothing is lost. Current flows between them through the soil. It is an electrical process, "
    "which is why the defense is electrical too.</p>"
    "<p><b>Two defenses.</b> The <b>coating</b> is primary: it keeps the soil and the water off the "
    "steel entirely. <b>Cathodic protection</b> is secondary: it supplies current so that the exposed "
    "steel stops losing metal. Coatings always have <b>holidays</b>, and the design philosophy is "
    "that the coating does almost all the work.</p>"
    "<p><b>How you know it is working.</b> The standard sets out criteria, the best known being a "
    "potential of at least <b>minus 850 millivolts</b> against a saturated copper and copper sulfate "
    "reference electrode. There is more than one acceptable criterion.</p>"
    "<p><b>What the reading does not say.</b> A reading taken with the current flowing includes a "
    "voltage drop through the soil. Interrupt the current and read again: it is that second figure, "
    "the <b>polarized potential</b>, that tells you about the steel.</p>"
    "<p><b>And shielding.</b> A coating can <b>disbond</b>: lift away from the steel and stay in "
    "place. Water collects in the gap, the steel corrodes, and the coating <b>blocks the protective "
    "current</b>. The primary defense, in failing, prevents the secondary from working.</p>",
    "The test post two hundred meters away reads perfectly, because the current goes everywhere it "
    "can get to. This is the most important fact in external corrosion."), 580)
S["rc07-f6"]=lambda: f_realia(tbl("Word study",
    "Prevention and protection",
    ["The pattern","What follows it","An example"],
    [["protect X from Y","a noun","The coating protects the steel from the soil."],
     ["prevent X from doing","a verb in <i>-ing</i>","Cathodic protection prevents the steel from losing metal."],
     ["keep Y out of X","a noun","The coating keeps water out of the gap."],
     ["stop X doing","a verb in <i>-ing</i>","It stops the current reaching the steel."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>guard against</i> and <i>shield from</i>. <i>Prevent</i> takes "
    "<i>-ing</i>, never an infinitive."), 680)
S["rc07-f7"]=lambda: f_line([("1.0",-1020),("2.5",-980),("4.0",-995),("5.5",-940),
    ("7.0",-905),("9.4",-710),("10.2",-690),("11.5",-920),
    ("12.8",-975),("14.0",-1010)], unit="mV", mark="9.4", ymin=-1100)
S["rc07-f8"]=lambda: f_icons([("wall","a well coated pipe with a good polarized reading"),
    ("magnifier","a small holiday with current reaching it"),
    ("barrier","a disbonded coating with water behind it"),
    ("noentry","a good on reading with a poor polarized one"),
    ("recycle","a sacrificial anode fully consumed"),
    ("magnifier","is this steel protected?")],3)
S["rc07-f9"]=lambda: f_realia(tbl("Cathodic protection survey &mdash; export line 12, 12 April",
    "Saturated copper and copper sulfate reference electrode",
    ["Test post, km","On reading, mV","Polarized, mV","Ground condition"],
    [["1.0","&minus;1,340","&minus;1,020","dry sand"],
     ["2.5","&minus;1,290","&minus;980","dry sand"],
     ["4.0","&minus;1,310","&minus;995","dry"],
     ["5.5","&minus;1,240","&minus;940","dry"],
     ["7.0","&minus;1,180","&minus;905","firm"],
     ["9.4","&minus;1,120","<b>&minus;710</b>","<b>wet</b>"],
     ["10.2","&minus;1,090","<b>&minus;690</b>","<b>wet</b>"],
     ["12.8","&minus;1,270","&minus;975","dry"]],
    note="All eight on readings pass the criterion. Two polarized readings do not, and both are in "
    "the wet section. The annulus of a pipeline is the soil; the polarized reading is the one that "
    "describes the steel."), 620)
S["rc07-f10"]=lambda: f_scene(800,400,
    people=[("tomas",180,180,{}),("adeel",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("desk",560,0,1.0),("logsheet",640,196,0.24),("map",200,194,0.28),
     ("railings",120,170,0.4),("signpost",430,194,0.26)],
    clockat=(60,40,22,13,0))
S["rc07-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Report A",None,
    "<p>Cathodic protection on export line 12 is operating satisfactorily. All test post readings "
    "exceed the criterion. No action required.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Report B",None,
    "<p>Both readings at each post, the reference electrode named, the ground condition at each. "
    "<b>Six of eight pass on the polarized reading; two fail</b>, at kilometers 9.4 and 10.2, both in "
    "wet ground &mdash; <b>the same section the inspection tool could not read</b>.</p>",
    None),380)[0:3],
    800,300,"Compliant","Two columns, and an overlap")
S["rc07-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Cathodic protection on export line 12 is operating satisfactorily. All test post readings "
    "exceed the criterion. No action required.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>All eight <i>on</i> readings pass. On the <b>polarized</b> readings &mdash; the ones that "
    "describe the steel &mdash; six pass and two fail, at &minus;710 and &minus;690 millivolts, both "
    "in the wet section between kilometers 9.1 and 11.0. <b>That is the same section the 2025 "
    "inspection classified as poor data.</b> The coating has not been assessed since 1998, and a "
    "disbonded coating would shield the current and read exactly like this. Requesting a coating "
    "survey and one excavation.</p>",None),380)[0:3],
    800,300,"No action required","Two measurements saying the same thing")
S["rc07-f13"]=lambda: f_realia(form("Plan your corrosion control note",
    [("The survey date and the reference electrode",BLANK),("The on readings",BLANK),
     ("The polarized readings and which pass",BLANK),
     ("The failures, with locations and ground conditions",BLANK),
     ("Anything else pointing at the same section",BLANK),
     ("What you are requesting, and the reason",BLANK)],
    note="Six boxes. The fifth one is found by putting two reports side by side."), 560)
S["rc07-f14"]=lambda: f_scene(1000,450,
    people=[("tomas",60,176,{}),("adeel",130,172,{}),("omar",205,176,{}),
     ("yusuf",290,172,{}),("samira",365,176,{"seated":True}),("ahmad",440,172,{"seated":True}),
     ("nour",515,176,{}),("haddad",590,170,{}),("ida",655,172,{}),
     ("lars",720,170,{}),("wei",785,172,{}),("nadia",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("signpost",350,194,0.24),
     ("fusebox",425,194,0.24),("crate",550,194,0.24),("table",650,0,1.0),
     ("balance",860,198,0.2),("map",930,196,0.22)],
    board=(40,22,206,112,"ONE DEFENSE DEFEATS THE OTHER",[("on","all pass"),("polarized","two fail"),("both","in the wet")]),
    clockat=(262,34,22,14,0))
S["rc07-f15"]=lambda: f_chart([("always",3),("sometimes",4),("only on annual surveys",7),
    ("never",5),("I do not know",5)], unit="operators")
S["rc07-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Three reports, three filing systems, one answer",
    "<p><b>A cathodic protection survey</b> with eight <i>on</i> readings passing and two polarized "
    "readings failing.</p>"
    "<p><b>An inspection report appendix</b> listing the same two kilometers as poor data.</p>"
    "<p><b>A map</b> with the wet section shaded twice.</p>"
    "<p><b>A photograph</b> of a disbonded coating with a pit beneath it.</p>"
    "<p><i>Three separate pieces of information point at the same two kilometers, and all three say "
    "the same thing: we do not know. Each report was written correctly, by competent people, and "
    "filed in a different place.</i></p>",
    "Seven o'clock. Nobody has evidence of a problem, which is not the same as there being none."),
    620)

# ---------------- Unit 8 ----------------
S["rc08-f1"]=lambda: f_icons([("danger","hydrogen sulfide"),("thermostat","partial pressure"),
    ("jug","pH"),("packet","a chloride"),("thermometer","temperature"),
    ("magnifier","a hardness tester"),("tally","a hardness value"),
    ("torch","a weld bead"),("barrier","a heat-affected zone"),
    ("noentry","a crack through a weld"),("crate","a blistered surface"),
    ("racking","stacked internal cracks"),("certificate","a material certificate"),
    ("iron","a workshop repair with no procedure"),("map","a region map"),
    ("note","twenty-two")],4)
S["rc08-f2"]=lambda: f_scene(760,400,
    people=[("tomas",110,176,{}),("omar",320,180,{"seated":True}),("ahmad",405,180,{"seated":True}),
     ("adeel",490,180,{}),("samira",570,180,{"seated":True}),
     ("yusuf",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("torch",715,198,0.2)],
    board=(30,24,214,110,"THREE ZONES, ONE IS HARDEST",[("weld metal","controlled"),("heat-affected","hardest"),("parent","certified")]),
    clockat=(262,36,22,12,30))
S["rc08-f3"]=lambda: f_icons([("thermostat","a partial pressure gauge"),
    ("jug","a pH meter in a water sample"),("packet","a chloride test"),
    ("thermometer","a thermometer"),("map","the four combined on a region map"),
    ("note","four variables, and all four move")],3)
S["rc08-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six material certificates",
    ["The item","The material","Hardness limit on the certificate","Welded since?","Did that weld have a procedure?"],
    blankrows(6,5),
    note="The last two columns are the ones nobody has. The box at the foot: the repair nobody has a "
    "record of."), 660)
S["rc08-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: cracking, not corrosion",
    "<p style='font-size:12px;color:#6b6861'>Source: NACE MR0175 / ISO 15156, <i>Materials for use in "
    "H2S-containing environments in oil and gas production</i>, in three parts. In our own words.</p>"
    "<p><b>This standard is about cracking.</b> Not general corrosion. A material can comply fully "
    "and still corrode away; a material can have lost no measurable wall and crack through in a "
    "day.</p>"
    "<p><b>What causes it.</b> With water and hydrogen sulfide present, atomic hydrogen is produced "
    "at the steel surface and some enters the metal. <b>Hard</b> steel has little ability to deform, "
    "and hydrogen inside it makes it <b>brittle</b>. Under stress it cracks.</p>"
    "<p><b>What defines the environment:</b> the <b>partial pressure</b> of hydrogen sulfide, the "
    "<b>pH</b> of the water, the <b>chloride</b> concentration and the <b>temperature</b>. The "
    "standard divides combinations of pH and partial pressure into <b>regions</b>, and what a "
    "material may be depends on which region the service falls in.</p>"
    "<p><b>The hardness limit.</b> For carbon and low alloy steels the central control is a maximum "
    "hardness, the long-established figure for many applications being <b>22 on the Rockwell C "
    "scale</b>.</p>"
    "<p><b>And so the weld is the problem.</b> Welding heats a narrow band and lets it cool fast. "
    "That <b>heat-affected zone</b> comes out harder than either the parent metal or the weld metal, "
    "unless the procedure is controlled to prevent it.</p>"
    "<p><b>What moves after you have chosen.</b> Hydrogen sulfide rises in many fields as they age. "
    "Water cut rises. Chlorides concentrate. A material correctly selected in 1998 may sit today in a "
    "<b>different region</b>, with nobody having done anything wrong.</p>",
    "Compliance is a statement about a moment, and the moment has passed."), 580)
S["rc08-f6"]=lambda: f_realia(tbl("Word study",
    "Restriction",
    ["The pattern","What it does","An example"],
    [["only … if","one condition, strictly","This material may be used only if the hardness is below the limit."],
     ["is limited to","sets a ceiling","Hardness is limited to 22 on the Rockwell C scale."],
     ["is not permitted in","a flat prohibition","This grade is not permitted in this region."],
     ["is restricted to","narrows the use","Its use is restricted to sweet service."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>subject to</i> and <i>provided that</i>. One of the four leaves room "
    "for a judgment and one does not."), 680)
S["rc08-f7"]=lambda: f_realia(tbl("Service conditions, then and now",
    "Nothing was done to the steel",
    ["Variable","At selection, 1998","Measured this year"],
    [["Hydrogen sulfide","400 ppm","<b>2,100 ppm</b>"],
     ["Water cut","8 percent","<b>34 percent</b>"],
     ["Chloride in the produced water","moderate","<b>higher</b>"],
     ["Operating temperature","as designed","lower, at reduced rate"],
     ["Region on the standard's map","a lower region","<b>a higher region</b>"]],
    note="The arrow on the map points up and to the left. The material has not moved; the service "
    "has."), 600)
S["rc08-f8"]=lambda: f_icons([("certificate","a certified pipe in its original service"),
    ("danger","the same pipe in a souring service"),
    ("magnifier","a qualified weld with hardness testing"),
    ("noentry","an unrecorded repair weld"),
    ("packet","a stainless component in high chlorides at high temperature"),
    ("magnifier","is this permitted?")],3)
S["rc08-f9"]=lambda: f_realia(tbl("Material and welding history &mdash; export line 12",
    "Original certificate: maximum hardness 22 HRC, certified 1998 for 400 ppm",
    ["Weld","Date","Procedure reference","Hardness tested?"],
    [["Tie-in at km 0.1","1998","WPS-114, sour qualified",TICK],
     ["Tie-in at km 14.1","1998","WPS-114, sour qualified",TICK],
     ["Valve replacement km 7.2","2004","WPS-209, sour qualified",TICK],
     ["<b>Leak repair km 4.1</b>","<b>2009</b>","<b>none recorded</b>","<b>&mdash;</b>"],
     ["Spool replacement km 11.6","2016","WPS-311, sour qualified",TICK]],
    note="One repair has no record. It was done at two in the morning by a competent contract welder "
    "and has not leaked since. The gas was 400 parts per million then and is 2,100 now."), 620)
S["rc08-f10"]=lambda: f_scene(800,400,
    people=[("tomas",180,180,{}),("ahmad",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("desk",560,0,1.0),("logsheet",640,196,0.24),("map",200,194,0.28),
     ("torch",430,198,0.2),("railings",120,170,0.4)],
    clockat=(60,40,22,13,0))
S["rc08-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("File A",None,
    "<p>The original material certificate. Maximum hardness 22 HRC. Certified 1998.</p>"
    "<p>Nothing else in the folder.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("File B",None,
    "<p>The certificate, the service conditions <b>as stated in 1998</b> and <b>as measured this "
    "year</b>, and a welding history with a procedure reference and a hardness record against each "
    "of five welds &mdash; <b>one of which is blank in both columns</b>.</p>",None),380)[0:3],
    800,300,"A certificate","A certificate and a history")
S["rc08-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Export line 12 is constructed in sour service compliant material and is suitable for its "
    "duty.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Certified <b>in 1998</b> to 22 HRC, <b>for a stated service of 400 parts per million</b>. "
    "Measured this year: <b>2,100 parts per million and 34 percent water cut</b>, which places the "
    "service in a different region. <b>Nothing has been done to the steel; the service has moved.</b> "
    "Five welds since construction; four have a procedure and a hardness record, the fifth, a 2009 "
    "leak repair, has neither. Requesting in-place hardness testing and a reassessment. <b>Neither "
    "request implies that anybody did anything wrong.</b></p>",None),380)[0:3],
    800,300,"Compliant, undated","Compliant in 1998, for 400 ppm")
S["rc08-f13"]=lambda: f_realia(form("Plan your material note",
    [("The original certificate and its date",BLANK),
     ("The service conditions it was selected for",BLANK),
     ("The service conditions measured now",BLANK),("The welding history",BLANK),
     ("The gaps in that history",BLANK),("What you are requesting",BLANK)],
    note="Six boxes. Say how you would find out what is in the fifth."), 560)
S["rc08-f14"]=lambda: f_scene(1000,450,
    people=[("tomas",60,176,{}),("ahmad",130,172,{}),("omar",205,176,{}),
     ("adeel",290,172,{}),("samira",365,176,{"seated":True}),("yusuf",440,172,{}),
     ("nour",515,176,{}),("haddad",590,170,{}),("ida",655,172,{}),
     ("lars",720,170,{}),("wei",785,172,{}),("nadia",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("torch",350,198,0.2),
     ("map",425,194,0.24),("jug",550,198,0.2),("table",650,0,1.0),
     ("certificate",860,198,0.2),("magnifier",930,198,0.2)],
    board=(40,22,206,112,"THE SERVICE MOVED",[("400 ppm","1998"),("2,100 ppm","today"),("the steel","unchanged")]),
    clockat=(262,34,22,15,0))
S["rc08-f15"]=lambda: f_chart([("this year",3),("within three years",4),
    ("longer ago than that",6),("at design only",7),("I do not know",4)], unit="operators")
S["rc08-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Three correct decisions and one unknown",
    "<p><b>A material certificate from 1998</b> with a hardness limit on it.</p>"
    "<p><b>A gas analysis from this year</b> showing a figure five times higher.</p>"
    "<p><b>A region map</b> with two crosses and an arrow between them.</p>"
    "<p><b>A welding history</b> with one row blank in two columns.</p>"
    "<p><b>A sectioned weld</b> showing a hard band beside the fusion line.</p>"
    "<p><i>In 1998 the material was correctly selected. In 2009 a leak was repaired well, at two in "
    "the morning. This year the gas measured 2,100 parts per million.</i></p>",
    "Seven o'clock. Twenty centimeters of unmeasured steel in a service nobody selected it for."),
    620)

# ---------------- Unit 9 ----------------
S["rc09-f1"]=lambda: f_icons([("map","a line crossing empty desert"),
    ("signpost","the same line passing a village"),("councilbuilding","a town beside the line"),
    ("school","a school near a right-of-way"),("water","a water line"),
    ("tin","a crude oil line"),("cloud","a natural gas line"),
    ("danger","a toxic gas label"),("spreadsheet","a table of classes and categories"),
    ("calculator","a design factor"),("book","a national regulation"),
    ("certificate","an international standard"),("barrier","a border post"),
    ("folder","two sets of documents"),("crate","an abandonment plan"),
    ("note","the standard does not override the law")],4)
S["rc09-f2"]=lambda: f_scene(760,400,
    people=[("adeel",110,176,{}),("omar",320,180,{"seated":True}),("yusuf",405,180,{"seated":True}),
     ("nour",490,180,{}),("samira",570,180,{"seated":True}),("haddad",650,180,{"seated":True})],
    props=[("desk",300,0,1.0),("board",50,90,0.62),("map",715,196,0.22)],
    board=(30,24,214,110,"THE LAND MOVED",[("rows","people"),("columns","hazard"),("the cell","a decimal")]),
    clockat=(262,36,22,13,0))
S["rc09-f3"]=lambda: f_icons([("map","empty land"),("signpost","scattered buildings"),
    ("councilbuilding","a village"),("school","a town center"),
    ("danger","a toxic gas category"),("note","two questions, one factor")],3)
S["rc09-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six cross-border pipelines",
    ["The pipeline","Which countries","What it carries","How long","One difference on each side"],
    blankrows(6,5),
    note="The last column is the interesting one. The box at the foot: the difference that would be "
    "hardest to manage. Which differences are technical and which are legal?"), 640)
S["rc09-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the same pipe in two countries",
    "<p style='font-size:12px;color:#6b6861'>Source: ISO 13623:2017, <i>Petroleum and natural gas "
    "industries &mdash; Pipeline transportation systems</i>. In our own words.</p>"
    "<p>Unit 1 was a national code. This is the international standard covering the same ground, "
    "written to be used <b>alongside</b> national rules rather than instead of them. It covers design, "
    "materials, construction, testing, operation, maintenance and <b>abandonment</b>.</p>"
    "<p><b>Two questions.</b> <b>Where</b> is the pipe &mdash; how many people and what activity are "
    "near it? That gives the <b>location class</b>. <b>What</b> is in it &mdash; how dangerous is it "
    "if it gets out? That gives the <b>fluid category</b>.</p>"
    "<p>The two together give a <b>design factor</b>, which sets how much of the steel's strength the "
    "design may use. More people nearby, or a more dangerous fluid, means a <b>lower</b> factor and "
    "so a thicker wall or a lower pressure.</p>"
    "<p><b>That is a decision about consequences, not about steel.</b> The pipe does not behave "
    "differently near a school. What differs is what happens if it fails, and the standard writes "
    "that as a decimal so it can be used in an equation.</p>"
    "<p><b>It does not override national law</b>, and says so. Where a country's regulations are more "
    "stringent, those apply. An international standard is a common technical language, not a legal "
    "authority.</p>"
    "<p><b>And location class is assessed at a moment.</b> Somebody counted buildings along the route "
    "once, at design. The standard expects reassessment when land use changes.</p>",
    "Reassessment requires somebody to look, and looking requires somebody to be asked."), 580)
S["rc09-f6"]=lambda: f_realia(tbl("Word study",
    "Generalization and exception",
    ["The phrase","What it does","An example"],
    [["in general","states the usual case","In general the factor falls as population rises."],
     ["typically","the same, with a figure","A rural section is typically in the lowest class."],
     ["as a rule","the usual case, conversationally","As a rule, the stricter requirement applies."],
     ["except where","names the exception","Except where national rules are more stringent."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>unless otherwise specified</i> and <i>in which case</i>. <i>In "
    "general</i> and <i>always</i> are different promises."), 680)
S["rc09-f7"]=lambda: f_matrix(["Water","Stable liquid","Volatile liquid","Toxic gas"],
    [("Essentially unoccupied",["0.83","<b>0.72</b>","0.72","0.60"]),
     ("Scattered buildings",["0.83","0.72","0.67","0.56"]),
     ("Village or small town",["0.72","<b>0.60</b>","0.56","0.50"]),
     ("Dense population",["0.67","0.56","0.50","0.40"])], 660)
S["rc09-f8"]=lambda: f_icons([("map","empty desert"),("signpost","scattered farm buildings"),
    ("councilbuilding","a village of thirty houses"),
    ("school","a town with a school beside the right-of-way"),
    ("water","a line carrying water"),("magnifier","which class, and which category?")],3)
S["rc09-f9"]=lambda: f_realia(tbl("Route classification review &mdash; export line 12",
    "Original assessment 1998 &middot; reassessed this year",
    ["Section, km","1998 class","Buildings then","Buildings now","Class now"],
    [["1 to 8","lowest","0 to 4","0 to 5","lowest"],
     ["<b>9</b>","<b>lowest</b>","<b>2</b>","<b>34, inc. a school</b>","<b>two classes higher</b>"],
     ["<b>10</b>","<b>lowest</b>","<b>1</b>","<b>19</b>","<b>two classes higher</b>"],
     ["11 to 14","lowest","0 to 3","0 to 4","lowest"]],
    note="Two sections have moved and the design factor has not. The counts within 200 meters were "
    "taken from aerial photography and a walk-over."), 620)
S["rc09-f10"]=lambda: f_scene(800,400,
    people=[("adeel",180,180,{}),("yusuf",300,176,{}),("omar",620,180,{"seated":True})],
    props=[("desk",560,0,1.0),("logsheet",640,196,0.24),("map",200,194,0.28),
     ("map",260,194,0.28),("railings",120,170,0.4)],
    clockat=(60,40,22,14,0))
S["rc09-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Review A",None,
    "<p>The route classification for export line 12 is as established in the original design. No "
    "change is considered necessary at this time.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Review B",None,
    "<p>Both building counts with both dates. The class then and now for all fourteen sections. The "
    "design factor used and what it was set for. And four options with their costs, one of which is "
    "<b>a written and signed case that the existing design remains adequate</b>.</p>",None),380)[0:3],
    800,300,"No change necessary","Two counts, two dates, four options")
S["rc09-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>The route classification for export line 12 is as established in the original design. No "
    "change is considered necessary at this time.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Original assessment <b>1998</b>: all fourteen sections in the lowest class, counts 0 to 4. "
    "Reassessed this year: twelve unchanged; <b>kilometer 9 now has 34 buildings including a school</b> "
    "and kilometer 10 has 19. Those two are two classes higher. <b>Nothing has been done to the pipe; "
    "the land beside it has changed.</b> Four options: reduce the pressure, sleeve, replace, or "
    "<b>write and sign a case that the existing design remains adequate</b>. I am asking for the "
    "signature rather than for a decision today.</p>",None),380)[0:3],
    800,300,"No change","A count, a class and a signature")
S["rc09-f13"]=lambda: f_realia(form("Plan your classification note",
    [("The original assessment, with date and counts",BLANK),
     ("The reassessment, with date and counts",BLANK),("The class then and now",BLANK),
     ("The design factor and what it was set for",BLANK),
     ("One sentence locating the change",BLANK),("The options and what each requires",BLANK)],
    note="Six boxes. The fifth sentence is in the note so that nobody reads the fourth as blame."),
    560)
S["rc09-f14"]=lambda: f_scene(1000,450,
    people=[("adeel",60,176,{}),("yusuf",130,172,{}),("omar",205,176,{}),
     ("nour",290,172,{}),("samira",365,176,{"seated":True}),("haddad",440,172,{}),
     ("nadia",515,176,{"seated":True}),("ahmad",590,170,{}),("ida",655,172,{}),
     ("lars",720,170,{}),("wei",785,172,{}),("tomas",845,170,{}),
     ("bah",905,172,{}),("yara",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("map",350,196,0.22),
     ("map",415,196,0.22),("signpost",550,194,0.24),("table",650,0,1.0),
     ("folder",860,198,0.2),("councilbuilding",930,192,0.26)],
    board=(40,22,206,112,"THE LAND MOVED",[("1998","two buildings"),("today","thirty-four"),("the pipe","unchanged")]),
    clockat=(262,34,22,15,0))
S["rc09-f15"]=lambda: f_chart([("yes within five years",2),("yes at some point",4),
    ("no",8),("I do not know",6),("we have no classification",3)], unit="operators")
S["rc09-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A village that grew beside a buried line",
    "<p><b>Two aerial photographs</b> of the same kilometer, one from 1998 showing two buildings and "
    "one from this year showing thirty-four and a school.</p>"
    "<p><b>A 1998 route classification sheet</b>, correct when it was written.</p>"
    "<p><b>A grid</b> with an arrow moving two rows down.</p>"
    "<p><b>A wall thickness report</b> from the 2025 inspection, which means the adequacy calculation "
    "can be done.</p>"
    "<p><i>Nobody built illegally, nobody was warned, and nobody at the operating company was asked "
    "to look.</i></p>",
    "Seven o'clock. If the calculation shows the pipe is fine, something should still change."),
    620)
