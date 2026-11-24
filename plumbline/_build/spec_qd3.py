# -*- coding: utf-8 -*-
"""Plumbline Book 4 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 7 ----------------
S["qd07-f1"]=lambda: f_icons([("square","a rectangle: a step"),("review","a diamond: a decision"),
    ("note","a parallelogram: data"),("badge","a rounded box: start or end"),
    ("signpost","an arrow"),("recycle","a loop back"),
    ("refnumber","a connector"),("container","a cylinder"),
    ("racking","a stack of steps"),("walkroute","a fork in the path"),
    ("thread","two arrows merging"),("notebook","a numbered list of stages"),
    ("crate","raw material in"),("packet","a finished product out"),
    ("proof","a tick"),("danger","a cross")],4)
S["qd07-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("hana",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("clipboard",388,196,0.24),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"SEVEN STAGES",[("4","decision"),("6","loops to 3")]),
    clockat=(622,44,22,9,0))
S["qd07-f3"]=lambda: f_icons([("square","a rectangle: a step"),("review","a diamond: a decision"),
    ("note","a parallelogram: data in or out"),("badge","a rounded box: start or end"),
    ("recycle","a loop arrow"),("magnifier","the shape tells you the kind of stage")],3)
S["qd07-f4"]=lambda: f_realia(tbl("Team research &middot; a process you know", None,
    ["Stage","What happens"],
    br(8,2),
    note="Where it loops back, if it does: ______________________"), 560)
S["qd07-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "Where the shapes on a process diagram come from &middot; page 1 of 1",
    "<p><b>The source.</b> ISO 5807, <i>Information processing &mdash; Documentation symbols and "
    "conventions for data, program and system flowcharts, program network charts and system "
    "resources charts</i>, first edition <b>1985</b>. Printed here in our own words.</p>"
    "<p>Flow charts had been drawn for decades before anybody agreed on the shapes. The 1985 "
    "standard is the version that settled it internationally.</p>"
    + table_html(["The symbol","What the standard assigns to it"],
      [["rectangle","a <b>process</b>: an operation is performed"],
       ["diamond","a <b>decision</b>: the flow divides according to a condition"],
       ["parallelogram","<b>data</b>: input or output"],
       ["rounded box","a <b>terminator</b>: the start or the end"]])
    + "<p>It also fixes the conventions: flow runs <b>top to bottom and left to right</b> unless an "
    "arrowhead says otherwise; a <b>connector</b> is a small circle joining a line that continues "
    "elsewhere; each symbol carries short text inside it rather than a number explained in a key.</p>"
    "<p>Two of these matter most to a reader. The <b>diamond</b> says the process is not a straight "
    "line. An arrow that <b>returns to an earlier symbol</b> says the process <b>repeats</b> &mdash; "
    "a fact about the process, not a detail of the drawing.</p>"
    "<p><b>Withdrawn, and still in use.</b> The standard has since been <b>withdrawn</b>: it is no "
    "longer current, and later modeling notations are what formal process documentation now uses. "
    "Most diagrams in general use follow these conventions loosely, by inheritance; many do not "
    "follow them at all, and an examination diagram is under <b>no obligation</b> to. Read the shapes "
    "as a strong hint and the labels as the authority.</p>"
    "<p>And it says nothing whatever about English.</p>",
    "Our summary of a published standard, named with its edition, its year and its current status."),
    640)
S["qd07-f6"]=lambda: f_realia(tbl("The passive, in a process", None,
    ["Active","Passive","Why the passive"],
    [["A worker heats the mixture.","The mixture <b>is heated</b>.","who does it is not shown"],
     ["The machine sorts the waste.","The waste <b>is sorted</b>.","the stage matters, not the machine"],
     ["Somebody inspects the product.","The product <b>is inspected</b>.","the agent is unknown"],
     ["They pour the liquid into molds.",B,B],
     ["A conveyor carries the parts away.",B,B]],
    note="Four cells are empty on purpose. A process diagram usually shows no people at all."), 660)
S["qd07-f7"]=lambda: f_process(["collected","sorted|by type","washed","inspected|clean?",
    "re-washed|where needed","dried","packed"], w=700, loop=(4,2))
S["qd07-f8"]=lambda: f_icons([("square","one arrow in, one out"),("review","two arrows out"),
    ("recycle","a loop to an earlier box"),("badge","a rounded box at the top"),
    ("note","a parallelogram"),("magnifier","one stage, or two?")],3)
S["qd07-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 1",
    "A process diagram, eight stages",
    "<p style='font-size:13px;color:#6b6861'>Two diamonds. One loop arrow. No figures anywhere on "
    "the diagram.</p>"
    "<p><b>The diagram below shows the process by which one material is prepared for re-use.</b></p>"
    "<p><b>Summarize the information by selecting and reporting the main features, and make "
    "comparisons where relevant.</b></p>",
    "<b>No numbers, so no number can be your overview.</b>"), 600)
S["qd07-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("hana",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("clipboard",360,198,0.22),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"FOUR SHAPES",[("[]","step"),("<>","decision"),("()","start")]),
    clockat=(630,42,22,10,0))
S["qd07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Process A &middot; seven stages", None,
      "<p>Collected &rarr; sorted &rarr; washed &rarr; inspected &rarr; dried &rarr; packed &rarr; "
      "dispatched.</p><p>Straight through. Every stage happens once.</p>",
      "Seven stages, seven sentences."), 380)[0:3],
    lambda w,h: f_realia(doc("Process B &middot; seven stages, one loop", None,
      "<p>The same seven, but stage five returns to stage two.</p>"
      "<p>Stages two, three and four can happen any number of times.</p>",
      "Seven stages, and one sentence that cannot appear in A."), 380)[0:3],
    800, 310, "Straight through", "With a loop")
S["qd07-f12"]=lambda: f_realia(doc("Two answers, same process diagram", None,
    "<p><b>Answer 1.</b> <i>First the material is collected. Then it is sorted. Then it is washed. "
    "Then it is inspected. Then it is dried. Then it is packed.</i> &mdash; one sequencing word, six "
    "times.</p>"
    "<p><b>Answer 2.</b> <i>Overall, the process has eight stages, two of which involve a decision, "
    "and one stage is repeated until the item passes inspection. The material is first collected and "
    "sorted by type, after which it is washed in hot water. At this stage each item is inspected: "
    "anything still not clean is returned to the washing stage, and this part of the process is "
    "repeated as many times as necessary. Once the item has passed, it is dried and finally "
    "packed.</i></p>",
    "Four sequencing words, six passives, and the loop."), 610)
S["qd07-f13"]=lambda: f_realia(tbl("Task 1 planner &middot; a process", None,
    ["Stage","What happens","Decision?"],
    br(8,3),
    note="Where it loops: ______________________ &nbsp;&nbsp; The overview sentence: "
    "______________________"), 600)
S["qd07-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("hana",340,190,{"seated":True}),("grace",470,184,{}),
     ("tomas",560,188,{"seated":True}),("samira",660,186,{}),("chiamaka",740,190,{"seated":True}),
     ("junseo",830,186,{}),("mei",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("clipboard",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"WHAT ORDER, AND DOES IT REPEAT?",
      [("8 stages","2 diamonds"),("1 loop","6 &rarr; 3")]),
    clockat=(650,40,22,11,0))
S["qd07-f15"]=lambda: f_chart([("a line graph",2),("a bar chart",1),("a table",2),
    ("a process diagram",4),("a map",2)], w=540)
S["qd07-f16"]=lambda: f_realia(doc("On the desk, one o'clock",
    "A process diagram with its loop arrow circled in red",
    "<p><b>In the practice answer:</b> the word <i>then</i>, six times.</p>"
    "<p><b>Eight stages, in order, all correct.</b> The loop is not mentioned.</p>"
    "<p><b>Coherence:</b> 6.0. <b>Task Achievement:</b> 5.5.</p>"
    "<p><b>Finished:</b> eleven minutes early.</p>",
    "The loop arrow was the only thing on the diagram that was not a rectangle and an arrow."), 600)

# ---------------- Unit 8 ----------------
S["qd08-f1"]=lambda: f_icons([("signpost","a compass rose"),("review","a scale bar"),
    ("note","a key with four symbols"),("walkroute","a road"),
    ("timetable","a railway line"),("canal","a river"),("bridge","a bridge"),
    ("councilbuilding","a built-up block"),("park","a park"),("school","a school"),
    ("warehouse","a factory"),("railings","a boundary"),
    ("roundabout","a roundabout"),("car","a car park"),("proof","a tick"),("danger","a cross")],4)
S["qd08-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("junseo",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("map",388,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"2005 AND 2025",[("east bank","farmland"),("east bank","housing")]),
    clockat=(622,44,22,9,20))
S["qd08-f3"]=lambda: f_icons([("councilbuilding","north of the river"),("park","adjacent to the school"),
    ("warehouse","surrounded by farmland"),("railings","running along the boundary"),
    ("bridge","across the river"),("corner","in the northeast corner")],3)
S["qd08-f4"]=lambda: f_realia(tbl("Team research &middot; then and now", None,
    ["What is new","What has gone","What has stayed"],
    br(5,3),
    note="The column that was hardest to fill: ______________________"), 600)
S["qd08-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "What a map has already decided for you &middot; page 1 of 1",
    "<p><b>The source.</b> Mark Monmonier, <i>How to Lie with Maps</i>, University of Chicago Press, "
    "<b>1991</b>. Printed here in our own words.</p>"
    "<p>The book opens with an argument that sounds like a provocation and is not one: <b>every map "
    "must distort reality</b>, and a map that did not would be useless. A map is flat and smaller "
    "than the thing it shows, so it has to <b>scale</b>, <b>generalize</b> and <b>select</b>.</p>"
    + table_html(["What every map does","What follows from it"],
      [["reduces the scale","small things vanish"],
       ["generalizes shapes","a winding road becomes a smooth line"],
       ["selects features","what is not selected is invisible"],
       ["chooses symbols","symbol size is a decision, not a measurement"]])
    + "<p>These decisions are <b>invisible to the reader</b>. Nothing on a map says <i>the following "
    "four kinds of thing have been omitted</i>. The selection looks like the world.</p>"
    "<p>One point follows for a writer. <b>What is on the map is all you have, and it is not "
    "everything that was there.</b> The farmland that disappears between two maps has not necessarily "
    "been destroyed; it may no longer be what the second map was drawn to show.</p>"
    "<p><b>A book about making maps, not describing them.</b> It is addressed to map users and map "
    "makers, and most of it is about how maps mislead in advertising, politics, planning disputes and "
    "defense. It is an <b>argument illustrated with examples</b>, not an experimental study. It says "
    "nothing about examinations and nothing about English. And its strongest claim needs reading "
    "carefully: <b>to select is not to deceive</b>. Borrowing the title's word and dropping the "
    "argument gets it backwards.</p>",
    "Our summary of a published book. The point about what a two-map task lets you say is ours."),
    640)
S["qd08-f6"]=lambda: f_realia(tbl("What happened to this plot?", None,
    ["The verb","What it tells the reader","An example"],
    [["<i>was demolished</i>","pulled down, nothing replaced it","The factory was demolished."],
     ["<i>was replaced by</i>","something else stands there now","The factory was replaced by housing."],
     ["<i>was converted into</i>","the same building, a new use","The school was converted into offices."],
     ["<i>was extended</i>","it grew","The car park was extended to the east."],
     ["<i>was relocated</i>",B,B],
     ["<i>remained</i>",B,B]],
    note="Four cells are empty on purpose. Only one of these can be read off a map with "
    "certainty."), 660)
S["qd08-f7"]=lambda: f_matrix(["The 2005 map","The 2025 map"],
    [("the east bank",["farmland","two blocks of housing"]),
     ("the river crossing",["none","a bridge"]),
     ("the northwest site",["a factory","a retail park"]),
     ("the southern edge",["woodland","woodland"]),
     ("schools",["one","two"]),
     ("the railway",["across the north","across the north"])], 600)
S["qd08-f8"]=lambda: f_icons([("councilbuilding","a built-up block"),("tree","woodland"),
    ("bridge","a bridge"),("timetable","a railway"),
    ("note","a key with four symbols"),("magnifier","what is not drawn here?")],3)
S["qd08-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 1",
    "Two maps of one island, 1990 and 2020",
    "<p style='font-size:13px;color:#6b6861'>Key: housing &middot; farmland &middot; woodland "
    "&middot; road &middot; jetty.</p>"
    "<p><b>The two maps below show one island in 1990 and in 2020.</b></p>"
    "<p><b>Summarize the information by selecting and reporting the main features, and make "
    "comparisons where relevant.</b></p>",
    "<b>Three questions: what is new, what has gone, what has stayed.</b>"), 600)
S["qd08-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("junseo",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("map",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"THREE QUESTIONS",[("1","new"),("2","gone"),("3","unchanged")]),
    clockat=(630,42,22,12,30))
S["qd08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The village in 2000", None,
      "<p>A green at the center. Two farm plots to the north. One road through the middle.</p>"
      "<p>No bypass.</p>", "Key: four symbols."), 380)[0:3],
    lambda w,h: f_realia(doc("The village in 2020", None,
      "<p>The green, unchanged. Both farm plots built on. A bypass running around the north.</p>"
      "<p>The road through the middle, still there.</p>", "Key: the same four symbols."), 380)[0:3],
    800, 310, "2000", "2020")
S["qd08-f12"]=lambda: f_realia(doc("Two answers, same pair of maps", None,
    "<p><b>Answer 1.</b> <i>In 2020 there is a bridge over the river and two blocks of housing on "
    "the east bank. There is also a retail park in the northwest and a new school.</i> &mdash; six "
    "new features, nothing else.</p>"
    "<p><b>Answer 2.</b> <i>Overall, the town expanded eastwards over the twenty-year period, while "
    "its northern and southern edges were largely unaltered. The farmland shown in 2005 had been "
    "built on by 2025, with two blocks of housing occupying the area between the river and the "
    "eastern boundary. The factory in the northwest was replaced by a retail park. The woodland along "
    "the southern edge and the railway across the north, however, remained unchanged.</i></p>",
    "Answer 2 answers all three questions. The third one gives the change a size."), 610)
S["qd08-f13"]=lambda: f_realia(tbl("Task 1 planner &middot; two maps", None,
    ["What is new","What has gone","What has stayed"],
    br(4,3),
    note="The overall change in one sentence: ______________________"), 600)
S["qd08-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("junseo",340,190,{"seated":True}),("grace",470,184,{}),
     ("nour",560,188,{"seated":True}),("marek",660,186,{}),("mei",740,190,{"seated":True}),
     ("yusuf",830,186,{}),("ines",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("map",430,208,0.26),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"NEW, GONE, UNCHANGED",
      [("new","6"),("gone","1"),("unchanged","3")]),
    clockat=(650,40,22,3,0))
S["qd08-f15"]=lambda: f_chart([("a line graph",3),("a bar chart",4),("a table",2),
    ("a process",1),("two maps",1)], w=540)
S["qd08-f16"]=lambda: f_realia(doc("On the desk, evening",
    "Two maps, new features circled in red",
    "<p><b>Circled:</b> six new features.</p>"
    "<p><b>Untouched:</b> the railway, the woodland and the church &mdash; in both maps.</p>"
    "<p><b>In the practice answer:</b> six of eight sentences begin <i>there is</i>.</p>"
    "<p><b>Task Achievement:</b> 6.0. <b>Coherence:</b> 6.0.</p>",
    "Half the island had not changed, and half the island is not in the answer."), 600)

# ---------------- Unit 9 ----------------
S["qd09-f1"]=lambda: f_icons([("wordcount","a long number, five digits crossed out"),
    ("review","a rounded figure"),("scales","a mark between two points"),
    ("balance","a figure with a tilde"),("tally","a percentage"),
    ("square","a fraction"),("note","a decimal point"),
    ("spreadsheet","a thousands separator"),("data","a table of long figures"),
    ("proof","the same table, short"),("odometer","a ruler"),
    ("calculator","a pair of scales"),("star","one figure circled"),
    ("thread","a range between two figures"),("pen","a tick"),("danger","a cross")],4)
S["qd09-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("mei",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("calculator",388,196,0.24),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"EIGHT DIGITS, OR TWO",
      [("left","48,273,916"),("right","48 million")]),
    clockat=(622,44,22,9,50))
S["qd09-f3"]=lambda: f_icons([("wordcount","two digits circled"),("note","a unit at the top"),
    ("spreadsheet","figures aligned on the point"),("balance","a row average"),
    ("review","rows ordered by size"),("magnifier","two digits, and a unit at the top")],3)
S["qd09-f4"]=lambda: f_realia(tbl("Team research &middot; shorten a table", None,
    ["Row","The figure as published","The figure at two digits"],
    br(5,3),
    note="What we lost: ______________________ &nbsp;&nbsp; Who needed it: "
    "______________________"), 600)
S["qd09-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "How many digits a reader can use &midd1ot; page 1 of 1".replace("midd1ot","middot"),
    "<p><b>The source.</b> A. S. C. Ehrenberg, <i>Rudiments of numeracy</i>, Journal of the Royal "
    "Statistical Society, Series A, <b>1977</b>. Printed here in our own words.</p>"
    "<p>The paper begins from an observation about published tables: they are <b>full of digits "
    "nobody reads</b>. A figure given to eight digits is read as its first two and the rest is "
    "noise.</p>"
    + table_html(["The advice","Why"],
      [["round to <b>two effective digits</b>","more digits are not read"],
       ["put the <b>unit at the top</b>","<i>millions</i> once, not in every cell"],
       ["<b>order rows by size</b>","the pattern becomes visible"],
       ["give a <b>row or column average</b>","each figure gets something to be compared with"]])
    + "<p><b>A worked example.</b> 48,273,916 at two effective digits is <b>48</b> in a column headed "
    "<i>millions</i>. But 1,048 beside 1,052 is harder: the varying digits are the third and fourth, "
    "so rounding to 1.0 and 1.1 thousand throws the difference away. <b>Effective</b> digits are the "
    "ones that vary, not the first two on the page.</p>"
    "<p><b>About tables, and about 1977.</b> It is a paper of <b>recommendations</b>, supported by "
    "examples and long commercial experience; it is <b>not a controlled experiment</b> and it does "
    "not measure how many digits people retain. The two-digit recommendation has been <b>disputed</b> "
    "and the paper calls it a rule of thumb. It is <b>wrong for some purposes</b>: financial "
    "accounts, engineering tolerances, scientific constants and anything legally binding need every "
    "digit they have.</p>"
    "<p>And it says nothing about examinations. Rounding sensibly is the fastest way to get more "
    "comparisons into 150 words &mdash; which is this book's point, not the paper's.</p>",
    "Our summary of a published paper, named with its journal and its year."), 640)
S["qd09-f6"]=lambda: f_realia(tbl("How close is it?", None,
    ["The phrase","How close","An example"],
    [["<i>just over</i>","a little above","just over 1,000"],
     ["<i>just under</i>","a little below","just under half"],
     ["<i>approximately</i>","close, either side","approximately 48 million"],
     ["<i>around</i>","close, informal","around a third"],
     ["<i>nearly</i>",B,B],
     ["<i>well over</i>",B,B]],
    note="Four cells are empty on purpose. <i>Nearly 50</i> and <i>just under 50</i> are not quite "
    "the same claim."), 660)
S["qd09-f7"]=lambda: f_realia(tbl("One table, three columns", None,
    ["","Published","Two effective digits","What you would write"],
    [["A","48,273,916","48 million","approximately 48 million"],
     ["B","61,004,882","61 million","just over 61 million"],
     ["C","9,811,230","9.8 million","nearly 10 million"],
     ["D","1,048","1,048","just over a thousand"],
     ["E","1,052","1,052","<i>also</i> just over a thousand"],
     ["F","347,119","350,000","around 350,000"]],
    note="Rows D and E round to the same words, which is useless if the difference matters."), 660)
S["qd09-f8"]=lambda: f_icons([("wordcount","six digits crossed out"),("star","two digits circled"),
    ("thread","two figures differing in the third digit"),("note","a column headed millions"),
    ("balance","a row average"),("magnifier","how much can you throw away?")],3)
S["qd09-f9"]=lambda: f_realia(tbl("Practice task &middot; Writing Task 1",
    "No unit is given in any heading.",
    ["Country","2020","2021","2022","2023"],
    [["A","48,273,916","48,901,044","49,512,870","50,118,336"],
     ["B","61,004,882","61,220,119","61,448,007","61,702,554"],
     ["C","9,811,230","9,904,662","10,002,118","10,114,890"],
     ["D","347,119","351,802","356,440","361,273"],
     ["E","1,048","1,052","1,061","1,074"]],
    note="<b>Twenty numbers, 150 words, twenty minutes.</b>"), 660)
S["qd09-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("mei",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("calculator",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"TWO DIGITS",[("unit","at the top"),("rows","by size")]),
    clockat=(630,42,22,2,0))
S["qd09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("As published", None, ["Row","Figure"],
      [["A","48,273,916"],["B","61,004,882"],["C","9,811,230"],
       ["D","347,119"],["E","1,048"]], note="Eight digits a cell. No unit in the heading."),
      380)[0:3],
    lambda w,h: f_realia(tbl("At two effective digits", None, ["Row","Millions"],
      [["B","61"],["A","48"],["C","9.8"],["D","0.35"],["E","0.001"]],
      note="Unit at the top. Rows ordered by size."), 380)[0:3],
    800, 310, "Twenty-four digits", "The same figures")
S["qd09-f12"]=lambda: f_realia(doc("Two answers, same table", None,
    "<p><b>Answer 1.</b> <i>The figure for the first country was 48,273,916 and the figure for the "
    "second country was 61,004,882, while the third country had a figure of 9,811,230.</i> &mdash; "
    "three figures, and the words are gone.</p>"
    "<p><b>Answer 2.</b> <i>Overall, the six figures ranged from nearly 10 million to just over 61 "
    "million, with four of the six falling between 40 and 50 million. The highest was approximately "
    "61 million and the lowest nearly 10 million &mdash; a gap of around 51 million, or more than six "
    "times the smaller figure. Two of the six, at just over a thousand each, were on a completely "
    "different scale and differed from one another by only four units.</i></p>",
    "Eleven figures, four approximation phrases, and one refusal to round two figures together."),
    610)
S["qd09-f13"]=lambda: f_realia(tbl("Task 1 planner &middot; long figures", None,
    ["The figure as printed","What I will write"],
    br(8,2),
    note="The range: ______________________ &nbsp;&nbsp; The figures I must not round: "
    "______________________"), 600)
S["qd09-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("mei",340,190,{"seated":True}),("lars",470,184,{}),
     ("oksana",560,188,{"seated":True}),("hana",660,186,{}),("tomas",740,190,{"seated":True}),
     ("samira",830,186,{}),("chiamaka",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("calculator",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"TWO DIGITS, AND A UNIT AT THE TOP",
      [("48,273,916","48"),("1,048 / 1,052","not 1.0")]),
    clockat=(650,40,22,4,0))
S["qd09-f15"]=lambda: f_chart([("read it all",1),("read the first two digits",5),
    ("read the magnitude only",3),("skip it",1),("copy it down",1)], w=540)
S["qd09-f16"]=lambda: f_realia(doc("On the desk, half past five",
    "A table of twenty figures, five ticked",
    "<p><b>Ticked:</b> five. <b>Untouched:</b> fifteen.</p>"
    "<p><b>The practice answer:</b> 162 words, four figures, every one of them correct.</p>"
    "<p><b>Task Achievement:</b> 5.0.</p>"
    "<p><b>Beside it:</b> the same twenty figures rounded, on one page, with room to spare.</p>",
    "Every figure was correct and three quarters of the table was missing."), 600)
