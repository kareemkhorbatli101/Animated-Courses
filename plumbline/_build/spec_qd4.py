# -*- coding: utf-8 -*-
"""Plumbline Book 4 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 10 ----------------
S["qd10-f1"]=lambda: f_icons([("scales","an axis from zero"),("balance","an axis from 100"),
    ("data","a steep line"),("thread","the same data, shallow"),
    ("scissors","a broken axis"),("tally","bars cut off at the foot"),
    ("square","two pictograms, different sizes"),("review","a pie over a hundred"),
    ("spreadsheet","uneven intervals"),("signpost","a reversed axis"),
    ("star","one figure circled"),("magnifier","an axis label, closely read"),
    ("container","a tilted three-dimensional pie"),("note","a caption"),
    ("proof","a tick"),("danger","a cross")],4)
S["qd10-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("yusuf",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",388,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"SAME FIVE FIGURES",
      [("axis 0-120","flat"),("axis 100-108","steep")]),
    clockat=(622,44,22,11,0))
S["qd10-f3"]=lambda: f_icons([("scales","an axis from zero"),("balance","an axis from 100"),
    ("spreadsheet","uneven year gaps"),("scissors","a broken-axis mark"),
    ("square","twice as tall, four times the area"),
    ("magnifier","read the axis before the line")],3)
S["qd10-f4"]=lambda: f_realia(tbl("Team research &middot; the same data twice", None,
    ["The five figures","On an axis from zero","On a truncated axis"],
    br(5,3),
    note="The verbs we would have used for each: ______________________"), 620)
S["qd10-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "How a correct chart gives a false impression &middot; page 1 of 1",
    "<p><b>The source.</b> Darrell Huff, <i>How to Lie with Statistics</i>, W. W. Norton, "
    "<b>1954</b>. Printed here in our own words.</p>"
    "<p>A short, plainly written popular book about the ways statistics and charts mislead. Its "
    "best-known chapter names what it calls the <b>gee-whiz graph</b>: a chart whose vertical axis "
    "does not start at zero, so that a small change fills the page.</p>"
    + table_html(["The device","What it does"],
      [["the axis does not start at zero","a four percent rise looks like a doubling"],
       ["the vertical scale is stretched","the same, by a different route"],
       ["pictograms scaled by height","doubling the height quadruples the area"],
       ["the uneven horizontal interval","an irregular series looks like a trend"]])
    + "<p>Every figure on such a chart can be correct. The chart is not a lie about the numbers; it "
    "is a lie about the <b>impression</b>, and the reader supplies it without being asked.</p>"
    "<p>Two things follow. <b>Read the axis before the line</b>: find where the vertical scale starts "
    "and look at the first and last printed figures before choosing a verb. And <b>hedge what you "
    "cannot establish</b>: the figure <i>appears to show</i> an increase; the chart <i>suggests</i> a "
    "relationship.</p>"
    "<p><b>A popular polemic, with no data of its own.</b> It presents <b>no original data</b>, "
    "reports <b>no experiment</b>, and makes its case with invented and anecdotal examples, some "
    "unsourced. Its advice is also not all sound by modern standards: statisticians have argued that "
    "the strong form of <i>always start at zero</i> is wrong for some data, and that the honest "
    "answer is to <b>label the axis clearly</b> rather than obey a single rule.</p>"
    "<p>Published accounts of the author's later career record that he was <b>engaged by the tobacco "
    "industry</b> in the 1960s and prepared a manuscript applying the same arguments against research "
    "on smoking, which was never published. The 1954 arguments stand or fall on their own; who later "
    "found them useful is a separate fact, and a reason to notice that the technique of doubting a "
    "figure is available to anybody.</p>",
    "Our summary of a published book, named with its publisher and its year."), 640)
S["qd10-f6"]=lambda: f_realia(tbl("How much does it claim?", None,
    ["The hedge","How much it claims","An example"],
    [["<i>shows</i>","the figure establishes it","The chart shows a rise of four percent."],
     ["<i>appears to show</i>","it looks like it","The chart appears to show a sharp rise."],
     ["<i>suggests</i>","it points that way","The figures suggest a seasonal pattern."],
     ["<i>may indicate</i>","one possible reading","The gap may indicate under-reporting."],
     ["<i>would seem to</i>",B,B],
     ["<i>is consistent with</i>",B,B]],
    note="Four cells are empty on purpose. <i>Shows</i> is for a figure printed on the chart and "
    "nothing else."), 660)
S["qd10-f7"]=lambda: f_panels(
    lambda w,h: f_line([("1",102),("2",103),("3",103),("4",105),("5",106)],
      w=360, h=250, unit="units", ymin=0)[0:3],
    lambda w,h: f_line([("1",102),("2",103),("3",103),("4",105),("5",106)],
      w=360, h=250, unit="units", ymin=100)[0:3],
    800, 300, "Axis from zero", "Axis from 100")
S["qd10-f8"]=lambda: f_icons([("star","a figure printed on a chart"),("data","a steep line"),
    ("signpost","an axis with no label"),("thread","a gap between two series"),
    ("note","a caption naming a definition change"),
    ("magnifier","what can you actually say?")],3)
S["qd10-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 1",
    "A line graph, vertical axis 94 to 108",
    "<p style='font-size:13px;color:#6b6861'>The vertical axis runs from <b>94 to 108</b>. The break "
    "between zero and 94 is <b>not marked</b>. Five figures are printed on the points: 102, 103, 103, "
    "105, 106.</p>"
    "<p><b>The graph below shows one index over a five-year period.</b></p>"
    "<p><b>Summarize the information by selecting and reporting the main features, and make "
    "comparisons where relevant.</b></p>",
    "<b>Look at the axis, then choose your verb.</b>"), 600)
S["qd10-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("yusuf",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("data",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"102 TO 106",[("rise","4%"),("looks like","a lot")]),
    clockat=(630,42,22,1,30))
S["qd10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Graph A", None,
      "<p>Vertical axis: 0 to 120. The line is almost flat.</p>"
      "<p>Figures printed on the points: 102, 103, 103, 105, 106.</p>",
      "Verbs it offers: <i>rose slightly</i>, <i>barely changed</i>."), 380)[0:3],
    lambda w,h: f_realia(doc("Graph B", None,
      "<p>Vertical axis: 100 to 108. The line fills the page.</p>"
      "<p>Figures printed on the points: 102, 103, 103, 105, 106.</p>",
      "Verbs it offers: <i>rose sharply</i>, <i>soared</i>. Both wrong."), 380)[0:3],
    800, 310, "From zero", "Truncated")
S["qd10-f12"]=lambda: f_realia(doc("Two answers, same truncated graph", None,
    "<p><b>Answer 1.</b> <i>The graph shows a dramatic increase over the five-year period. The figure "
    "soared from 102 to 106, representing a massive upward trend which continued throughout.</i></p>"
    "<p><b>Answer 2.</b> <i>Overall, the figure rose slightly over the five-year period, from 102 to "
    "106 &mdash; an increase of four units, or approximately four percent. The rise was not "
    "continuous: the figure was unchanged between the second and third years. It should be noted that "
    "the vertical axis begins at 94 rather than zero, so the line appears considerably steeper than "
    "the change in the underlying figures.</i></p>",
    "<i>Dramatic</i>, <i>soared</i> and <i>massive</i>, about a rise of four percent."), 610)
S["qd10-f13"]=lambda: f_realia(form("Task 1 planner &middot; the axis first",
    [("Where the axis starts",B),("The first and last figures",B),
     ("The change as a proportion",B),("The verb I will use",B),("The hedge I will use",B)],
    note="Fill the third box before the fourth. That is the whole unit."), 580)
S["qd10-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("yusuf",340,190,{"seated":True}),("grace",470,184,{}),
     ("ines",560,188,{"seated":True}),("marek",660,186,{}),("nour",740,190,{"seated":True}),
     ("mei",830,186,{}),("oksana",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("data",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"READ THE AXIS FIRST",
      [("from 0","flat"),("from 100","steep"),("rise","4%")]),
    clockat=(650,40,22,5,0))
S["qd10-f15"]=lambda: f_chart([("increased",3),("rose",4),("grew",1),("went up",2),
    ("soared",1)], w=540)
S["qd10-f16"]=lambda: f_realia(doc("On the desk, seven o'clock",
    "The same five figures, plotted twice",
    "<p><b>Circled in the practice answer:</b> <i>dramatically</i>, <i>soared</i>, <i>massive</i>.</p>"
    "<p><b>The figures:</b> 102 to 106. A rise of four percent in five years.</p>"
    "<p><b>Lexical Resource:</b> 6.5. <b>Grammar:</b> 7.0. <b>Task Achievement:</b> 5.5.</p>"
    "<p><b>The examiner's comment, in full:</b> <i>overstated</i>.</p>",
    "The figures were printed on the chart. He read the line."), 600)

# ---------------- Unit 11 ----------------
S["qd11-f1"]=lambda: f_icons([("proof","a source line in small type"),
    ("councilbuilding","a statistics office"),("form","a census form"),
    ("clipboard","a survey"),("queue","a sample drawn from a crowd"),
    ("folder","an administrative record"),("stamp","a date stamp"),
    ("review","a revised figure"),("note","a footnote"),
    ("book","a definition in a glossary"),("certificate","a seal"),
    ("essay","a published report"),("spreadsheet","a table with a gap"),
    ("magnifier","small type, magnified"),("pen","a tick"),("danger","a cross")],4)
S["qd11-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("ines",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("clipboard",388,196,0.24),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"THE SMALL TYPE",
      [("who","a national office"),("what","provisional"),("when","2023")]),
    clockat=(622,44,22,9,30))
S["qd11-f3"]=lambda: f_icons([("proof","a source line"),("quotemark","according to"),
    ("essay","as reported by"),("folder","figures compiled by"),
    ("spreadsheet","no source line at all"),("magnifier","who says so?")],3)
S["qd11-f4"]=lambda: f_realia(tbl("Team research &middot; the small type", None,
    ["The chart","Who produced the figures","The year","Anything marked provisional"],
    br(4,4),
    note="Leave a cell empty if the chart does not say. The empty cells are the finding."), 660)
S["qd11-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "Who produces official figures, and what they undertake &middot; page 1 of 1",
    "<p><b>The source.</b> <i>Fundamental Principles of Official Statistics</i>, adopted by the "
    "United Nations Statistical Commission in <b>1994</b> and endorsed by the General Assembly in "
    "<b>2014</b>. Printed here in our own words.</p>"
    "<p>There are <b>ten</b> principles, addressed to the national offices that produce a country's "
    "official figures. These five matter most to a reader of charts.</p>"
    + table_html(["","The principle, in short"],
      [["<b>1</b>","Official statistics are a <b>public entitlement</b>, to be made available "
        "impartially."],
       ["<b>2</b>","The office decides, <b>according to professional considerations</b>, the methods "
        "it uses."],
       ["<b>3</b>","The office <b>presents information on the sources, methods and procedures</b> it "
        "used."],
       ["<b>4</b>","The office is <b>entitled to comment publicly</b> on misuse of its figures."],
       ["<b>6</b>","Individual data are <b>strictly confidential</b> and used only for statistical "
        "purposes."]], numcols=(0,))
    + "<p>Principle <b>3</b> is why there is a line at the foot of a chart. The source line, the "
    "footnote about a change of definition, the word <i>provisional</i>: these exist because of a "
    "commitment of this kind.</p>"
    "<p>If a figure's origin is <b>printed on the task</b>, you may attribute it. If it is <b>not "
    "printed</b>, you may not invent it. And attribution is not endorsement: <i>according to the "
    "chart, the figure fell by twelve percent</i> describes the chart and does not claim the fall "
    "happened.</p>"
    "<p><b>Principles, not a guarantee.</b> They are <b>not enforceable</b>: there is no inspector, "
    "no sanction and no certificate. A country can endorse them and publish figures that meet none of "
    "them. They apply to <b>official</b> statistics only &mdash; not to a company, a campaign, a "
    "newspaper or a private survey, which is most of what you will meet. And they are about "
    "production, not reading: nothing in them tells you how to describe a chart.</p>",
    "Our summary of a published document, named with the body that adopted it and both of its "
    "dates."), 640)
S["qd11-f6"]=lambda: f_realia(tbl("Attributing", None,
    ["The phrase","What it commits you to","An example"],
    [["<i>according to</i>","the chart said it","According to the chart, the figure fell."],
     ["<i>as reported by</i>","a named reporter said it","as reported by the national office"],
     ["<i>the chart indicates</i>","the chart, hedged","The chart indicates a decline."],
     ["<i>figures from</i>","the figures' origin","figures from the 2021 census"],
     ["<i>the source line states</i>",B,B],
     ["<i>no source is given</i>",B,B]],
    note="Four cells are empty on purpose. The last row is a sentence you are allowed to write."),
    660)
S["qd11-f7"]=lambda: f_matrix(["Producer named","Year given","Definition note","Provisional marked"],
    [("Chart A",["yes","yes","yes","yes"]),("Chart B",["yes","yes","no","no"]),
     ("Chart C",["yes","no","no","no"]),("Chart D",["no","yes","no","no"]),
     ("Chart E",["no","no","no","no"])], 580)
S["qd11-f8"]=lambda: f_icons([("proof","a source line"),("note","a footnote on a definition"),
    ("stamp","the word provisional"),("spreadsheet","no small type at all"),
    ("calendar","a year in a heading"),("magnifier","what does it actually say?")],3)
S["qd11-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 1",
    "A bar chart with a source line",
    "<p><b>The chart below shows one measure in four regions over four years.</b></p>"
    "<p><b>Summarize the information by selecting and reporting the main features, and make "
    "comparisons where relevant.</b></p>"
    "<p style='font-size:11px;color:#6b6861;border-top:1px solid #d8d2c6;padding-top:6px'>"
    "Source: national statistical office. Figures for 2023 are provisional. Definition revised "
    "2019.</p>",
    "<b>Read the small type. It is part of the figure.</b>"), 600)
S["qd11-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("ines",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("proof",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"WHO SAYS SO?",
      [("printed","attribute it"),("not printed","say nothing")]),
    clockat=(630,42,22,3,0))
S["qd11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Chart with a source line", None,
      "<p>Four bars. Four figures.</p>"
      "<p style='font-size:11px;color:#6b6861'>Source: national statistical office. 2023 "
      "provisional. Definition revised 2019.</p>",
      "Three sentences are available that the other chart cannot support."), 380)[0:3],
    lambda w,h: f_realia(doc("The same chart, no small type", None,
      "<p>Four bars. Four figures.</p><p>&nbsp;</p>",
      "Describe the figures. Attribute nothing."), 380)[0:3],
    800, 310, "With a source line", "Without")
S["qd11-f12"]=lambda: f_realia(doc("Two answers, same chart", None,
    "<p><b>Answer 1.</b> <i>Government statistics show that the figure fell by twelve percent over "
    "the period, which proves that the policy introduced in 2019 was effective.</i></p>"
    "<p><b>Answer 2.</b> <i>According to the chart, the figure fell by approximately twelve percent "
    "over the four-year period, from 84 to 74. The figure for the final year is described as "
    "provisional and may therefore be revised. A footnote records that the definition changed in "
    "2019, so the fall between the second and third years may reflect that change rather than a "
    "change in the underlying quantity; the chart itself does not show which.</i></p>",
    "Answer 1 names a source the chart does not and claims a cause the chart cannot."), 610)
S["qd11-f13"]=lambda: f_realia(form("Task 1 planner &middot; the small type",
    [("Who produced the figures",B),("The year",B),("Anything provisional",B),
     ("Any definition note",B),("What the chart does not show",B)],
    note="Leave a box empty if the chart does not say, and then leave it out of the answer."), 580)
S["qd11-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("ines",340,190,{"seated":True}),("lars",470,184,{}),
     ("hana",560,188,{"seated":True}),("chiamaka",660,186,{}),("samira",740,190,{"seated":True}),
     ("tomas",830,186,{}),("junseo",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("proof",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"WHO PRODUCED THESE FIGURES?",
      [("3","sources and methods"),("4","comment on misuse"),("6","confidential")]),
    clockat=(650,40,22,4,30))
S["qd11-f15"]=lambda: f_chart([("always",1),("sometimes",2),("only if I am asked to",3),
    ("never noticed it",4),("I did not know it was there",1)], w=560)
S["qd11-f16"]=lambda: f_realia(doc("On the desk, six o'clock",
    "A bar chart with its source line circled",
    "<p><b>The source line reads:</b> national statistical office &middot; provisional &middot; "
    "2023.</p>"
    "<p><b>Crossed out in the practice answer:</b> <i>government statistics</i>.</p>"
    "<p><b>Missing from the practice answer:</b> the word <i>provisional</i>.</p>"
    "<p><b>Task Achievement:</b> 6.0.</p>",
    "One word added that the chart did not use, and one left out that it did."), 600)

# ---------------- Unit 12 ----------------
S["qd12-f1"]=lambda: f_icons([("review","a number, a space, a unit"),
    ("proof","a symbol with no period"),("tally","a percent sign"),
    ("thread","a range written with from"),("note","a decimal point"),
    ("spreadsheet","three digits, a thin space"),("scales","a number times a unit"),
    ("data","a line graph"),("square","a bar chart"),
    ("folder","a table"),("timetable","a process diagram"),("map","two maps"),
    ("balance","a truncated axis"),("stamp","a source line"),
    ("pen","a tick"),("danger","a cross")],4)
S["qd12-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("tomas",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",388,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"FOUR QUANTITIES",
      [("25 kg","yes"),("25 kgs","no"),("10-20%","no")]),
    clockat=(622,44,22,10,0))
S["qd12-f3"]=lambda: f_icons([("review","a space before the unit"),
    ("proof","a symbol, no plural"),("thread","from 10 % to 20 %"),
    ("tally","the percent sign as a number"),("spreadsheet","digits in threes"),
    ("scales","a quantity is a number times a unit")],3)
S["qd12-f4"]=lambda: f_realia(tbl("Team research &middot; eleven units", None,
    ["Unit","The one thing I will use in the test","The one thing I had never thought about"],
    br(11,3),
    note="The unit that appears most often in the second column: ______________________"), 680)
S["qd12-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "The rules for writing a number with a unit &middot; page 1 of 1",
    "<p><b>The source.</b> ISO 80000-1, <i>Quantities and units &mdash; Part 1: General</i>, second "
    "edition, <b>2022</b> (first edition 2009). Printed here in our own words.</p>"
    "<p>Most of the standard is for scientists and engineers. A few pages are for anybody who writes "
    "a number down.</p>"
    + table_html(["The rule","Written correctly"],
      [["a <b>space</b> separates the numerical value from the unit symbol","25 kg, 40 km/h, 15 %"],
       ["unit <b>symbols are not abbreviations</b>: no plural, no period",
        "25 kg (not <i>25 kgs</i>, not <i>25 kg.</i>)"],
       ["the <b>percent sign is the number 0.01</b>, so it takes a space","15 %"],
       ["a <b>range</b> is written so it cannot be read as a subtraction","from 10 % to 20 %"],
       ["the <b>decimal sign</b> is a point or a comma, depending on the language","1.5 or 1,5"]])
    + "<p>Behind the rules is one idea. A <b>quantity</b> is a numerical value <b>multiplied by</b> a "
    "unit: <i>25 kg</i> means twenty-five times one kilogram. That is why the space is there &mdash; "
    "it is a multiplication sign you are not printing.</p>"
    "<p>The same idea explains the percent sign. If <b>%</b> means <b>0.01</b>, then <i>15 %</i> is "
    "fifteen hundredths, and <i>an increase of 15 %</i> and <i>an increase of 15 percentage "
    "points</i> are different quantities.</p>"
    "<p><b>A standard about measurement, which turns out to be about writing.</b> It is a technical "
    "document addressed to measurement science. It is <b>not a style guide for general prose</b>, it "
    "is <b>not free to obtain</b>, and most publishers and house styles <b>do not follow it</b>: "
    "<i>25kg</i> and <i>15%</i> are normal in published English and nobody is penalized for them. So "
    "it is a <b>convention</b>, not a rule of English &mdash; except for one of its four points, the "
    "difference between a percent and a percentage point, which is a difference in meaning.</p>"
    "<p>And it says nothing about examinations. There is no standard for any of that, which is what "
    "the other eleven units were for.</p>",
    "Our summary of a published standard, named with its part number, its edition and both of its "
    "dates."), 640)
S["qd12-f6"]=lambda: f_realia(tbl("The whole toolkit", None,
    ["Unit","What it gave you","One phrase"],
    [["1","the four criteria","<i>overall</i>"],
     ["2","verbs of change","<i>rose steadily</i>"],
     ["3","proportions","<i>a third of</i>"],
     ["4","comparison","<i>twice as many as</i>"],
     ["5","what an average conceals","<i>conceals a range of</i>"],
     ["6","packing figures in","<i>of which</i>"],
     ["7","process and sequence","<i>once it has been</i>"],
     ["8","place and change","<i>adjacent to</i>"],
     ["9","approximation","<i>just over</i>"],
     ["10",B,B],["11",B,B]], numcols=(0,),
    note="Four cells are empty on purpose. Eleven units, and you can say what each one was for."),
    660)
S["qd12-f7"]=lambda: f_matrix(["The overview you need","The grammar","The commonest mistake"],
    [("a line graph",["the direction over the whole period","verbs and adverbs of change",
      "describing every point"]),
     ("a bar chart",["the largest and smallest","comparison","listing without comparing"]),
     ("a table",["the shape in the rows","packing figures in","writing about the averages"]),
     ("a process",["the number of stages and the shape","the passive and sequence",
      "missing the loop"]),
     ("two maps",["the overall change","place and change over time",
      "ignoring what has stayed"])], 700)
S["qd12-f8"]=lambda: f_icons([("review","25 kg"),("danger","25kgs"),("tally","15 %"),
    ("thread","from 10 % to 20 %"),("proof","10-20%"),
    ("magnifier","which of these could be read two ways?")],3)
S["qd12-f9"]=lambda: f_icons([("data","a line graph"),("square","a bar chart"),
    ("folder","a table"),("timetable","a process diagram"),
    ("map","two maps"),("magnifier","one of these five is what you will get")],3)
S["qd12-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("tomas",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("notebook",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"FIVE CHECKS",
      [("1","overview"),("3","verbs"),("5","attribution")]),
    clockat=(630,42,22,11,0))
S["qd12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Week one", None,
      "<p><i>The chart gives information about four categories. There are some differences. The "
      "biggest one is business.</i></p>"
      "<p>Figures: 1. Comparisons: 0. Overview: none.</p>", "TA 5.0"), 380)[0:3],
    lambda w,h: f_realia(doc("Week nine", None,
      "<p><i>According to the chart, the four categories differed widely throughout, with transport "
      "the largest in every year&hellip;</i></p>"
      "<p>Figures: 11. Comparisons: 3, one a multiple. One hedge. One attribution.</p>", "TA 6.5"),
      380)[0:3],
    800, 310, "Early", "Late")
S["qd12-f12"]=lambda: f_realia(doc("One answer &middot; 174 words",
    "Overview underlined. Eleven figures circled. Three boxes.",
    "<p><b><u>According to the chart, the four categories differed widely throughout the three-year "
    "period, with transport the largest in every year and clothing the smallest.</u></b> Transport "
    "rose from <b>71</b> to <b>86</b>, an increase of approximately <b>21 %</b>, while clothing fell "
    "from <b>19</b> to <b>14</b> &mdash; the only category to decline, and at its lowest point "
    "<span style='background:#f3ece0'>under a fifth of the transport figure</span>. Housing barely "
    "changed, standing at <b>44</b> and <b>46</b> at either end of the period, whereas food rose by "
    "<b>9 percentage points</b> of the total, from <b>23 %</b> to <b>32 %</b>. "
    "<span style='background:#f3ece0'>The figure for the final year is described as provisional and "
    "may therefore be revised.</span></p>",
    "One multiple, one hedge, one attribution, eleven figures, 174 words."), 620)
S["qd12-f13"]=lambda: f_realia(form("Task 1 planner &middot; the last one",
    [("The figure type",B),("The overview",B),("The four figures I must use",B),
     ("The comparison",B),("The hedge",B),("The five final checks",B)],
    note="Six boxes, four minutes, and then fourteen minutes of writing and two of checking."), 580)
S["qd12-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("tomas",340,190,{"seated":True}),("grace",470,184,{}),
     ("lars",560,188,{"seated":True}),("junseo",660,186,{}),("nour",740,190,{"seated":True}),
     ("marek",830,186,{}),("mei",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("notebook",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"FIVE CHECKS, TWO MINUTES",
      [("overview","?"),("9 figures","?"),("verbs","?"),("points","?")]),
    clockat=(650,40,22,6,0))
S["qd12-f15"]=lambda: f_chart([("the four criteria",2),("verbs of change",3),
    ("what an average conceals",2),("the truncated axis",3),("attribution",1)], w=560)
S["qd12-f16"]=lambda: f_realia(doc("On the desk, nine o'clock",
    "Eleven practice answers, with the figure written in the margin",
    "<p><b>The eleven figures, in order:</b> 5.0 &middot; 5.0 &middot; 5.5 &middot; 5.0 &middot; 5.5 "
    "&middot; 6.0 &middot; 5.5 &middot; 6.0 &middot; <b>6.5</b> &middot; 6.0 &middot; <b>6.5</b></p>"
    "<p><b>He needs:</b> 6.5. <b>He has reached it:</b> twice.</p>"
    "<p><b>The average of the eleven:</b> 5.68.</p>"
    "<p><b>Unit 5 said:</b> an average conceals a range.</p>",
    "The figures went up, and two of the last four went down again. There is no answer printed at "
    "the back of this book."), 620)
