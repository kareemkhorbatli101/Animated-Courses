# -*- coding: utf-8 -*-
"""Plumbline Book 4 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 4 ----------------
S["qd04-f1"]=lambda: f_icons([("tally","two bars, one baseline"),
    ("spreadsheet","two bars, separate baselines"),("thread","two lengths side by side"),
    ("signpost","two angles"),("balance","two circles of different area"),
    ("square","two cubes"),("data","two shades of one color"),
    ("scales","a ranked list"),("review","most accurate at the top"),
    ("magnifier","least accurate at the foot"),("star","a multiple"),
    ("wordcount","a difference"),("book","a journal page"),("proof","1984"),
    ("pen","an estimate written down"),("note","and the error beside it")],4)
S["qd04-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("ines",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("note",388,196,0.22),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"MOST TO LEAST",
      [("1","position, one scale"),("5","area"),("7","color")]),
    clockat=(622,44,22,11,0))
S["qd04-f3"]=lambda: f_icons([("tally","position on a common scale"),
    ("spreadsheet","position, non-aligned scales"),("thread","length"),
    ("signpost","angle"),("balance","area"),("square","volume")],3)
S["qd04-f4"]=lambda: f_realia(tbl("Team research &middot; estimate, then measure", None,
    ["The figure type","The perceptual task","Our estimate","The real figure","The error"],
    br(8,5),
    note="The figure type with the biggest errors: ______________________"), 700)
S["qd04-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "Which comparisons the eye makes accurately &middot; page 1 of 1",
    "<p><b>The source.</b> William S. Cleveland and Robert McGill, <i>Graphical Perception: Theory, "
    "Experimentation, and Application to the Development of Graphical Methods</i>, Journal of the "
    "American Statistical Association, <b>1984</b>. Printed here in our own words.</p>"
    "<p>The paper proposes that reading a graph is a set of <b>elementary perceptual tasks</b>, and "
    "orders them by how accurately people perform them.</p>"
    + table_html(["Rank","The task","Where you meet it"],
      [["1","position along a common scale","bars from one baseline"],
       ["2","position along identical, non-aligned scales","small multiples"],
       ["3","length","a stacked bar's middle segment"],
       ["4","angle or slope","a pie chart"],
       ["5","area","a bubble chart, the 1858 diagram"],
       ["6","volume","a three-dimensional bar"],
       ["7","color saturation or density","a shaded map"]], numcols=(0,))
    + "<p>Two experiments supported the ordering: participants judged pairs of values presented as "
    "positions, lengths and angles, and the errors rose as the task moved down the list.</p>"
    "<p><b>What the experiments establish, and what they do not.</b> They used <b>specific "
    "stimuli</b> and <b>a specific group of participants</b>. The ordering is offered as <b>a guide "
    "to designing graphs, not a law of perception</b>, and the authors say so. Later work has "
    "complicated parts of it. And the whole finding is about <b>accuracy of extraction</b> &mdash; "
    "not about which figure is remembered, understood or persuasive.</p>"
    "<p>One consequence is awkward for Unit 3. The 1858 diagram encodes its quantities as "
    "<b>areas</b>, which is fifth of seven on this ordering. It scores badly here and it changed a "
    "policy. Accuracy of extraction is not the only thing a figure can be good at.</p>",
    "Our summary of a published paper, named with its journal and its year."), 640)
S["qd04-f6"]=lambda: f_realia(tbl("Multiples, differences and contrasts", None,
    ["The pattern","What it means","An example"],
    [["<i>twice as many as</i>","a multiple","twice as many as in 2019"],
     ["<i>half as many as</i>","a multiple below one","half as many as transport"],
     ["<i>three times higher than</i>","a multiple","three times higher than clothing"],
     ["<i>ten points higher than</i>",B,B],
     ["<i>compared with</i>",B,B],
     ["<i>whereas</i>","a contrast, two clauses","transport rose, whereas clothing fell"]],
    note="Four cells are empty on purpose. A multiple says more in fewer words than a "
    "difference &mdash; when the figures allow one."), 650)
S["qd04-f7"]=lambda: f_chart([("bars on one baseline",4),("a pie chart",11),
    ("circles sized by area",19),("a shaded map",27)], unit="% error", w=540)
S["qd04-f8"]=lambda: f_icons([("tally","two bars, one baseline"),
    ("spreadsheet","two bars, separate baselines"),("balance","two slices of a pie"),
    ("square","two circles by area"),("data","two shades"),("scales","a ranked list")],3)
S["qd04-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 1",
    "Four groups, three bars each",
    "<p style='font-size:13px;color:#6b6861'>Units: thousands of households. Source: national "
    "survey, 2023.</p>"
    "<p><b>The chart below shows the number of households in four regions using three kinds of "
    "heating.</b></p>"
    "<p><b>Summarize the information by selecting and reporting the main features, and make "
    "comparisons where relevant.</b></p>",
    "Twelve bars, one baseline, and nine comparisons the eye can make accurately."), 600)
S["qd04-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("ines",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("note",360,198,0.22),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"SEVEN TASKS",[("pies","angle"),("bars","position")]),
    clockat=(630,42,22,11,30))
S["qd04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Five bars, one baseline", None,
      "<p>34 &middot; 29 &middot; 21 &middot; 12 &middot; 4</p>"
      "<p>Eleven readers ranked all five correctly. Mean error on the largest: 2 per cent.</p>",
      "Position on a common scale."), 380)[0:3],
    lambda w,h: f_realia(doc("Five circles, sized by area", None,
      "<p>The same five figures.</p>"
      "<p>Eleven readers ranked them correctly. Mean error on the largest: 19 per cent.</p>",
      "Area. Our own figures, eleven readers."), 380)[0:3],
    800, 310, "Bars", "Circles")
S["qd04-f12"]=lambda: f_realia(doc("Two answers, same grouped bar chart", None,
    "<p><b>Answer 1.</b> <i>Gas is the most popular everywhere. Electricity is quite high in the "
    "north. Oil is not very common.</i> &mdash; three impressions, no figures.</p>"
    "<p><b>Answer 2.</b> <i>Gas was the commonest in every region, serving 340,000 households in "
    "the south &mdash; nearly three times the figure for electricity. Oil accounted for fewer than a "
    "tenth of households in three of the four regions, whereas in the north it reached 88,000, "
    "26 percentage points above the national share.</i></p>",
    "Two multiples and one difference, and every one of them is a comparison the chart lets the eye "
    "make."), 600)
S["qd04-f13"]=lambda: f_realia(form("Task 1 planner &middot; comparison",
    [("The overview",B),("The comparisons this figure makes well",B),
     ("The comparisons it makes badly",B),("Three multiples",B),("Two differences",B),
     ("What I must not say",B)],
    note="If the figure encodes by area, write fewer comparisons and hedge them."), 580)
S["qd04-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("ines",340,190,{"seated":True}),("grace",470,184,{}),
     ("yusuf",560,188,{"seated":True}),("nour",660,186,{}),("marek",740,190,{"seated":True}),
     ("oksana",830,186,{}),("mei",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("note",430,208,0.22),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"WHAT THE EYE DOES WELL",
      [("1","position"),("3","length"),("7","color")]),
    clockat=(650,40,22,1,0))
S["qd04-f15"]=lambda: f_chart([("bars on one baseline",5),("a line graph",3),
    ("a pie chart",1),("a shaded map",0),("I do not know",2)], w=540)
S["qd04-f16"]=lambda: f_realia(doc("On the desk, evening",
    "One data set, four ways, with the errors written in",
    "<p><b>Bars on one baseline.</b> Mean error 4 per cent.</p>"
    "<p><b>A pie chart.</b> Mean error 11 per cent.</p>"
    "<p><b>Circles sized by area.</b> Mean error 19 per cent.</p>"
    "<p><b>A shaded map.</b> Mean error 27 per cent.</p>"
    "<p style='font-size:12px;color:#6b6861'>Our own class, eleven readers, one afternoon. Which "
    "establishes nothing and illustrates something.</p>",
    "Beside it, the ranked list of seven, and a practice answer with two sentences circled."), 600)

# ---------------- Unit 5 ----------------
S["qd05-f1"]=lambda: f_icons([("data","a loose straight cloud"),("thread","a smooth curve"),
    ("signpost","a line with one point far above"),("tally","a vertical column, one point right"),
    ("spreadsheet","identical statistics"),("balance","a mean on a scale"),
    ("scales","a variance as a spread"),("review","a correlation"),
    ("pen","a regression line"),("star","an outlier"),("square","a curve"),
    ("book","a journal cover, 1973"),("calculator","a calculator"),
    ("magnifier","a graph beside it"),("proof","a tick"),("note","a footnote")],4)
S["qd05-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("oksana",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",388,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"SAME STATISTICS",[("mean x","9"),("mean y","7.5"),("r","0.82")]),
    clockat=(622,44,22,11,30))
S["qd05-f3"]=lambda: f_icons([("data","a straight cloud"),("thread","a smooth curve"),
    ("signpost","a line, one point above"),("tally","one vertical line, one point right"),
    ("spreadsheet","a table of statistics"),("magnifier","same numbers, different pictures")],3)
S["qd05-f4"]=lambda: f_realia(tbl("Team research &middot; plot the four", None,
    ["The set","Mean of x","Mean of y","The correlation","The shape when drawn"],
    br(4,5),
    note="The set that surprised us most: ______________________"), 700)
S["qd05-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "What a single number cannot tell you &middot; page 1 of 1",
    "<p><b>The source.</b> F. J. Anscombe, <i>Graphs in Statistical Analysis</i>, The American "
    "Statistician, <b>1973</b>. Printed here in our own words.</p>"
    "<p>The paper's argument is one sentence: <b>compute and also graph</b>. What makes it famous is "
    "the demonstration. The author gives <b>four data sets</b> of <b>eleven pairs</b> each, arranged "
    "so that the usual summary figures come out the same for all four.</p>"
    + table_html(["The statistic","The value, for all four sets"],
      [["mean of x","9"],["mean of y","7.5"],["variance of x","11"],
       ["correlation between x and y","about 0.82"],["the fitted line","y = 3 + 0.5x"]])
    + "<p>Anybody working from that table alone would report four similar relationships. Drawn, the "
    "four look nothing like each other: a loose straight cloud; a <b>smooth curve</b>, which no "
    "straight line should have been fitted to; a tight line with <b>one point far above it</b>; and "
    "one in which every point sits at the same value of x except <b>one</b>, far to the right, "
    "producing the whole correlation by itself.</p>"
    "<p><b>Constructed on purpose, and a short argument rather than a study.</b> The four data sets "
    "are <b>not observations</b>. They were <b>built</b> to have matching statistics and different "
    "shapes, which is what makes the demonstration work and what it cannot be used for: nobody "
    "should claim that real data behaves like this, or that a correlation of 0.82 is generally "
    "untrustworthy. It is a <b>short paper in a teaching journal</b>, not an empirical study: it "
    "reports no experiment and measures nobody. The moral was <b>not new in 1973</b> and the author "
    "does not say it is.</p>"
    "<p>And it is about statistical analysis, not about examinations. What it gives you is a reason "
    "why the task is worth setting at all.</p>",
    "Our summary of a published paper. The four plots are everywhere: look at them, then describe "
    "them from the table."), 640)
S["qd05-f6"]=lambda: f_realia(tbl("What a number conceals", None,
    ["The verb","What it says about the number","An example"],
    [["<i>conceals</i>","the number hides something real","The average conceals a wide spread."],
     ["<i>masks</i>","the same, a little stronger","A single mean masks two groups."],
     ["<i>says nothing about</i>","neutral, and exact","The correlation says nothing about the shape."],
     ["<i>averages out</i>","opposite effects cancel","The two movements average out to no change."],
     ["<i>summarizes</i>",B,B],
     ["<i>hides</i>",B,B]],
    note="Four cells are empty on purpose. <i>Conceals</i> suggests something was hidden; <i>says "
    "nothing about</i> does not."), 660)
S["qd05-f7"]=lambda: f_matrix(["Mean of x","Mean of y","Variance of x","Correlation","The shape"],
    [("Set 1",["9","7.5","11","~0.82","a loose straight cloud"]),
     ("Set 2",["9","7.5","11","~0.82","a smooth curve"]),
     ("Set 3",["9","7.5","11","~0.82","a line, one point far above"]),
     ("Set 4",["9","7.5","11","~0.82","one vertical line, one point right"])], 660)
S["qd05-f8"]=lambda: f_icons([("data","a loose straight cloud"),("thread","a smooth curve"),
    ("signpost","a line, one point far above"),("tally","a vertical column, one point right"),
    ("spreadsheet","a table of identical statistics"),("proof","constructed on purpose")],3)
S["qd05-f9"]=lambda: f_realia(tbl("Practice task &middot; a table with no chart",
    "Figures in thousands. No chart is provided.",
    ["Category","2020","2021","2022","2023"],
    [["Transport","71","76","81","86"],["Housing","44","45","44","46"],
     ["Food","23","26","29","32"],["Clothing","19","18","16","14"],
     ["Health","31","33","36","38"],["Education","27","28","28","30"]],
    numcols=(1,2,3,4),
    note="<b>The averages are at the foot and the shape is in the rows.</b> Average of all six: "
    "36 &middot; 38 &middot; 39 &middot; 41."), 640)
S["qd05-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("oksana",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("spreadsheet",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"FOUR SHAPES",[("1","cloud"),("2","curve"),("4","one point")]),
    clockat=(630,42,22,12,0))
S["qd05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Student A &middot; the table", None, ["Row","Figure"],
      [["1","44"],["2","45"],["3","44"],["4","46"],["5","44"],["6","87"]],
      note="Average: 51.7"), 380)[0:3],
    lambda w,h: f_realia(doc("Student B &middot; the plot", None,
      "<p>Five points together at about 45. One point, alone, at 87.</p>"
      "<p>The average of 51.7 describes none of the six.</p>", "One outlier, visible."), 380)[0:3],
    800, 310, "A table of figures", "The same figures, plotted")
S["qd05-f12"]=lambda: f_realia(doc("Two answers, same table", None,
    "<p><b>Answer 1.</b> <i>The average figure for the four years was 48, which shows that overall "
    "the level was fairly high. The average rose slightly over the period&hellip;</i></p>"
    "<p><b>Answer 2.</b> <i>Overall, five of the six categories rose over the four years while one "
    "fell. The largest figure in every year was transport, which rose from 71 to 86, and the "
    "smallest was clothing, which fell from 19 to 14 &mdash; the only category to decline. Housing "
    "barely moved, standing at 44, 45, 44 and 46. The average of all six, at 48, conceals a range of "
    "more than seventy.</i></p>",
    "The first answer is about one number. The second uses that number once, and says what it "
    "hides."), 610)
S["qd05-f13"]=lambda: f_realia(form("Task 1 planner &middot; a table",
    [("The overview",B),("The highest",B),("The lowest",B),
     ("The one that moves against the others",B),("The one that barely moves",B),
     ("Where the average goes",B)],
    note="The last box has one correct answer: once, in the overview, with what it conceals."), 580)
S["qd05-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("oksana",340,190,{"seated":True}),("grace",470,184,{}),
     ("samira",560,188,{"seated":True}),("tomas",660,186,{}),("hana",740,190,{"seated":True}),
     ("chiamaka",830,186,{}),("junseo",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("spreadsheet",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"SAME NUMBERS, DIFFERENT PICTURES",
      [("4 sets","identical stats"),("4 shapes","nothing alike")]),
    clockat=(650,40,22,2,0))
S["qd05-f15"]=lambda: f_chart([("the averages",5),("the highest figure",2),
    ("the biggest change",2),("the overall pattern",1),("whatever I notice first",1)], w=540)
S["qd05-f16"]=lambda: f_realia(doc("On the desk, three o'clock",
    "Four plots, one table of statistics, one marked answer",
    "<p><b>On the practice answer:</b> four of six sentences circled. All four are about the row of "
    "averages at the foot of the table.</p>"
    "<p><b>The table:</b> twenty-four figures, and the averages printed in bold.</p>"
    "<p><b>Task Achievement:</b> 5.5. <b>Lexical Resource:</b> 6.5. <b>Grammar:</b> 6.5.</p>",
    "The bold was somebody's decision. It worked."), 600)

# ---------------- Unit 6 ----------------
S["qd06-f1"]=lambda: f_icons([("tally","a plain bar chart"),("spreadsheet","heavy grid lines"),
    ("square","a shaded background"),("container","a three-dimensional bar"),
    ("barrier","a frame"),("note","a legend box"),("curtains","diagonal stripes"),
    ("pen","a tick mark"),("signpost","an axis"),("pricetag","a label on a bar"),
    ("scissors","half the ink removed"),("review","a ratio"),
    ("data","a stretched axis"),("magnifier","a caption, closely read"),
    ("proof","a tick"),("danger","a cross")],4)
S["qd06-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("marek",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",388,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"ONE CHART, TWICE",[("left","heavy"),("right","plain")]),
    clockat=(622,44,22,9,10))
S["qd06-f3"]=lambda: f_icons([("tally","data ink shaded dark"),("review","a ratio"),
    ("scissors","frame and grid removed"),("container","a 3D bar beside a flat one"),
    ("data","a stretched axis"),("magnifier","is this mark telling me anything?")],3)
S["qd06-f4"]=lambda: f_realia(tbl("Team research &middot; strip a chart", None,
    ["The chart","Where we found it","Marks that carry data","Marks that do not"],
    br(4,4),
    note="What got harder to read when we removed it: ______________________"), 660)
S["qd06-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "How much of a figure is actually data &middot; page 1 of 1",
    "<p><b>The source.</b> Edward R. Tufte, <i>The Visual Display of Quantitative Information</i>, "
    "Graphics Press, <b>1983</b>. Printed here in our own words.</p>"
    "<p>The book asks one question of every mark on a figure: <b>is this mark telling the reader a "
    "number?</b> It gives three terms that have gone everywhere since.</p>"
    + table_html(["The term","What it names"],
      [["<b>data ink</b>","ink that cannot be removed without losing a number"],
       ["<b>the ratio</b>","data ink divided by all the ink on the figure"],
       ["<b>chart junk</b>","heavy grids, shading, stripes, three-dimensional effects, frames"],
       ["<b>the lie factor</b>","the effect as drawn, divided by the effect in the data"]])
    + "<p>A three-dimensional bar carries exactly one number, the same as a flat bar, using several "
    "times the ink. For a writer, the use is this: <b>look at the data ink and ignore the rest</b>. "
    "The decoration is not information and it will not earn you a mark.</p>"
    "<p><b>A design argument, not an experiment.</b> The book is an <b>argument about design</b>, "
    "made with historical examples and the author's own redrawings. It is <b>not an experimental "
    "study</b>: it does not test readers, measure reading times or count errors, and the ratio is "
    "<b>proposed</b>, not derived from data about how people read. Parts of it have been "
    "<b>disputed</b> &mdash; later work has argued that some decoration helps readers remember a "
    "figure. The strongest form of the rule, <i>remove all non-data ink</i>, is a position, not a "
    "finding.</p>"
    "<p>And it is about making figures, which you are not doing. You are reading one.</p>",
    "Our summary of a published book. The ratio is the book's; the judgment about what to ignore in "
    "an examination figure is ours."), 640)
S["qd06-f6"]=lambda: f_realia(tbl("Packing figures in", None,
    ["The structure","What it does","An example"],
    [["<i>of which</i>","adds a part of a total","240 students, 90 of which were new"],
     ["<i>with</i>","hangs a figure on a noun","three categories, with transport the largest"],
     ["a participle","adds a movement","Sales rose to 71, reaching a peak in May"],
     ["<i>having</i>",B,B],
     ["<i>while</i>",B,B]],
    note="Four cells are empty on purpose. Three facts in a sentence is plenty; four is a sentence "
    "nobody can follow."), 660)
S["qd06-f7"]=lambda: f_chart([("a plain line graph",75),("a bar chart with grid lines",52),
    ("a bar chart with shading",38),("a three-dimensional bar chart",21),
    ("a pie chart with stripes",17),("a decorated infographic",6)],
    unit="% of ink carrying data", w=560)
S["qd06-f8"]=lambda: f_icons([("star","a plotted point"),("spreadsheet","a grid line"),
    ("pricetag","a figure printed on a bar"),("square","a shaded background"),
    ("tally","a bar"),("barrier","a decorative frame")],3)
S["qd06-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 1",
    "A heavily decorated bar chart",
    "<p style='font-size:13px;color:#6b6861'>Three-dimensional bars. A shaded background. Heavy grid "
    "lines. A striped legend. Four colors, all explained in the legend and all labeled on the bars "
    "as well.</p>"
    "<p><b>The chart below shows spending on four categories in one year.</b></p>"
    "<p><b>Summarize the information by selecting and reporting the main features, and make "
    "comparisons where relevant.</b></p>",
    "<b>Five numbers, and everything else is paint.</b>"), 600)
S["qd06-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("marek",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("tally",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"DATA INK",[("heavy","0.21"),("plain","0.75")]),
    clockat=(630,42,22,11,30))
S["qd06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The chart as given", None,
      "<p>Three-dimensional bars. Shaded background. Heavy grid. Striped legend.</p>"
      "<p>Numbers carried: <b>4</b>.</p>", "Proportion of ink carrying data: 0.21."), 380)[0:3],
    lambda w,h: f_realia(doc("The same chart, stripped", None,
      "<p>Four bars. Four figures printed on them. Nothing else.</p>"
      "<p>Numbers carried: <b>4</b>.</p>", "Proportion of ink carrying data: 0.75."), 380)[0:3],
    800, 310, "Decorated", "Plain")
S["qd06-f12"]=lambda: f_realia(doc("Two answers, same decorated chart", None,
    "<p><b>Answer 1.</b> <i>The chart is very colorful and uses three-dimensional bars with "
    "different patterns for each category. The background is shaded in gray and there are many "
    "horizontal lines which help the reader to see the levels.</i></p>"
    "<p><b>Answer 2.</b> <i>Overall, four categories are shown across three years, with transport "
    "the largest throughout. Transport rose from 71 to 86, reaching its peak in the final year, "
    "while clothing fell from 19 to 14 &mdash; the only category to decline. Housing barely moved, "
    "standing at 44 and 46 at either end of the period.</i></p>",
    "Answer 1 contains no figures. Answer 2 contains seven and one clause about appearance."), 610)
S["qd06-f13"]=lambda: f_realia(tbl("The ink audit", None,
    ["The numbers on this figure","The marks that carry no data"],
    br(7,2),
    note="Seven lines on the left and five on the right. Write in the left column only."), 560)
S["qd06-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("marek",340,190,{"seated":True}),("grace",470,184,{}),
     ("mei",560,188,{"seated":True}),("nour",660,186,{}),("ines",740,190,{"seated":True}),
     ("yusuf",830,186,{}),("oksana",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("tally",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"IS THIS MARK TELLING ME ANYTHING?",
      [("grid","no"),("bar","yes"),("stripes","no")]),
    clockat=(650,40,22,4,0))
S["qd06-f15"]=lambda: f_chart([("the colors",4),("the tallest bar",3),("the numbers",2),
    ("the title",1),("the shape overall",1)], w=540)
S["qd06-f16"]=lambda: f_realia(doc("On the desk, evening",
    "A decorated chart and its plain redrawing",
    "<p><b>On the practice answer:</b> two sentences circled, both about colors and patterns.</p>"
    "<p><b>Counted on the sheet:</b> seven numbers on the figure. Four used.</p>"
    "<p><b>Task Achievement:</b> 5.5.</p>"
    "<p><b>Noted at the foot:</b> the most decorated chart in the practice book, chosen for that "
    "reason.</p>",
    "Eight sentences. Two of them were about paint."), 600)
