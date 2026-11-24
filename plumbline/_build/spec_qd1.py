# -*- coding: utf-8 -*-
"""Plumbline Book 4 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Starting Point ----------------
S["qd00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each, from a Task 1 answer",
    ["What you have","An example"],
    [["Verbs of change","<i>rose</i> &middot; <i>fell</i> &middot; <i>increased</i> &middot; <i>declined</i>"],
     ["Adverbs of degree","<i>sharply</i> &middot; <i>steadily</i> &middot; <i>slightly</i> &middot; <i>considerably</i>"],
     ["Time expressions","in 2019 &middot; over the period &middot; between the two years"],
     ["Comparison","<i>higher than</i> &middot; <i>twice as many as</i> &middot; <i>the largest</i>"],
     ["Proportion","a third of &middot; 24 per cent &middot; just over half"],
     ["The passive","<i>is heated</i> &middot; <i>was replaced by</i> &middot; <i>had been built on</i>"]],
    note="Six boxes, and you have most of what is in them. What this book adds is knowing which "
    "figure to put them around."), 600)
S["qd00-f2"]=lambda: f_icons([("data","a line graph with two lines"),
    ("spreadsheet","a bar chart with four bars"),
    ("timetable","a flow diagram of five stages"),
    ("map","a town, before and after")],4)
S["qd00-f3"]=lambda: f_realia(doc("Taped inside a notebook",
    "Two sentences about one chart",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>&#10003; Transport rose from 71 to 86 over the three years, while clothing fell from 19 to "
    "14.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Every word of it is on the chart.</span><br><br>"
    "<b>&#10007; Transport rose because fuel became cheaper and more people commuted.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Not one word of it is on the chart.</span>"
    "</p>",
    "The second sentence is better English and worse an answer. Task 1 asks what is there."), 580)
S["qd00-f4"]=lambda: f_part("Twenty minutes, spent",
    [("Read the figure and plan: 4 min",4,"#1f4e79"),
     ("Write the overview: 2 min",2,"#8a5a1e"),
     ("Write the body: 12 min",12,"#3f6b2f"),
     ("Check: 2 min",2,"#6b2f4a")], 520)

# ---------------- Unit 1 ----------------
S["qd01-f1"]=lambda: f_icons([("review","Task Achievement"),("thread","Coherence and Cohesion"),
    ("book","Lexical Resource"),("proof","Grammatical Range and Accuracy"),
    ("star","a band figure in a box"),("wordcount","150 words"),
    ("note","an overview underlined"),("essay","a paragraph break"),
    ("spreadsheet","a bar chart"),("data","a line graph"),("timer","twenty minutes"),
    ("clipboard","the public descriptors"),("magnifier","one row circled"),
    ("pen","a marker's pencil"),("tally","four figures, equally weighted"),
    ("scales","and no one of them carries the rest")],4)
S["qd01-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("junseo",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("clipboard",392,196,0.24),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"FOUR, EQUAL",[("TA","?"),("CC","25%"),("LR","25%")]),
    clockat=(622,44,22,9,0))
S["qd01-f3"]=lambda: f_icons([("data","a figure being described"),
    ("essay","an overview at the top"),("book","a fan of words for one idea"),
    ("proof","a grammar error marked"),("library","a published page"),
    ("scales","four criteria, equally weighted")],3)
S["qd01-f4"]=lambda: f_realia(tbl("Team research &middot; what the bands say", None,
    ["Criterion","What band 6 says","What band 7 says","The difference in our words","Where we read it"],
    br(4,5),
    note="The difference that surprised us: ______________________"), 700)
S["qd01-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "The four criteria, and the one everybody neglects &middot; page 1 of 1",
    "<p><b>The source.</b> The published Writing Task 1 band descriptors and the public statement "
    "of how Task 1 is assessed, from the test owners' own pages. Downloaded <b>12 May</b>. Printed "
    "here in our own words.</p>"
    + table_html(["The criterion","What it asks of you"],
      [["<b>Task Achievement</b>","that you select and report the key features, and give an overview"],
       ["<b>Coherence and Cohesion</b>","that the answer is organized and the joins are not visible"],
       ["<b>Lexical Resource</b>","range and accuracy of the words, spelling included"],
       ["<b>Grammatical Range and Accuracy</b>","range and accuracy of the structures"]])
    + "<p><b>The four are equally weighted.</b> That is stated publicly, and it has one consequence "
    "candidates resist: a strong vocabulary cannot carry a weak answer, because vocabulary is one "
    "quarter of the mark and selecting the key features is another quarter.</p>"
    "<p><b>The length requirement.</b> At least 150 words. Writing fewer is penalized under Task "
    "Achievement. Writing many more is not penalized directly, but it costs the time Task 2 needs "
    "and it usually adds sentences that are not description.</p>"
    "<p><b>What the descriptors do not do.</b> They describe what each band looks like; they do not "
    "say how to get there. They name no vocabulary, prescribe no structure, give no model answer, "
    "and say nothing about which figure you will be given. A scale is a description of an outcome, "
    "not a method &mdash; which is why a book like this one exists and why no book like this one is "
    "official.</p>",
    "Our summary of a published scale. Read the owners' own pages, and write down the date."), 620)
S["qd01-f6"]=lambda: f_realia(tbl("How an overview opens", None,
    ["The opening","What follows it","An example"],
    [["<i>Overall,</i>","the pattern across the whole figure",
      "Overall, three of the four categories rose."],
     ["<i>In general,</i>","the same, a little softer","In general, the figures rose over the period."],
     ["<i>The most striking feature is</i>","the one thing a reader should notice",
      "The most striking feature is the fall in clothing."],
     ["<i>Broadly,</i>",B,B],
     ["<i>It is clear that</i>",B,B],
     ["<i>In both cases,</i>","two figures, one pattern","In both cases the trend was upward."]],
    numcols=(),
    note="Four cells are empty on purpose. An overview is a sentence about the whole figure, not "
    "the first number in it."), 650)
S["qd01-f7"]=lambda: f_chart([("Task Achievement",5.4),("Coherence and Cohesion",6.1),
    ("Lexical Resource",6.3),("Grammatical Range",6.2)], unit="band", w=520)
S["qd01-f8"]=lambda: f_icons([("data","a figure"),("essay","an overview at the top"),
    ("book","a fan of words"),("proof","a corrected error"),
    ("wordcount","150 words"),("library","a published page")],3)
S["qd01-f9"]=lambda: f_realia(doc("Marked practice answer &middot; Task 1",
    "Returned 14 May &middot; 162 words",
    "<p style='font-size:13px;color:#6b6861'>TA <b>5.0</b> &middot; CC <b>6.0</b> &middot; LR "
    "<b>6.0</b> &middot; GRA <b>6.0</b></p>"
    "<p>The chart shows four categories over three years. Transport was the highest and clothing was "
    "the lowest&hellip;</p>"
    "<p style='background:#f3ece0;padding:8px;border-left:3px solid #8a5a1e'><i>This rise was "
    "probably caused by the new rail link, which made commuting cheaper and encouraged more people "
    "to travel into the city for work rather than relocating, and the fall in clothing may reflect "
    "a change in shopping habits.</i></p>"
    "<p style='font-size:12px;color:#6b6861'>Marginal note: <b>41 words of explanation. None of "
    "this is on the chart.</b></p>",
    "Three sixes and a five. The five is the criterion the 41 words were taken from."), 600)
S["qd01-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("junseo",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("note",370,198,0.22),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"FOUR BARS",[("TA","5.0"),("CC","6.0"),("LR","6.0")]),
    clockat=(630,42,22,4,30))
S["qd01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Answer A &middot; 162 words", None,
      "<p>Four categories over three years. Transport highest, clothing lowest.</p>"
      "<p><i>&hellip;41 words explaining why transport rose&hellip;</i></p>"
      "<p>No overview sentence.</p>", "TA 5.0"), 380)[0:3],
    lambda w,h: f_realia(doc("Answer B &middot; 158 words", None,
      "<p><b>Overall,</b> three of the four categories rose while one fell.</p>"
      "<p>Nine figures. No explanation of any cause.</p>"
      "<p>Overview in the first sentence.</p>", "TA 6.5"), 380)[0:3],
    800, 310, "Longer", "Shorter, and a band higher")
S["qd01-f12"]=lambda: f_realia(doc("Two openings", None,
    "<p><b>Answer 1.</b> <i>The bar chart gives information about four categories in three "
    "different years. It can be seen that there are some differences between them. The reason for "
    "this is probably&hellip;</i></p>"
    "<p><b>Answer 2.</b> <i>Overall, three of the four categories rose over the three years while "
    "clothing fell, and transport was the largest throughout.</i></p>",
    "The first says the chart exists. The second says what is in it."), 580)
S["qd01-f13"]=lambda: f_realia(form("Task 1 planner",
    [("What the figure is",B),("The overview, in one sentence",B),
     ("The two or three key features",B),("The figures I will quote",B),
     ("What I must not say",B),("My word count",B)],
    note="Six boxes, four minutes. The fifth box is the one that saves the band."), 580)
S["qd01-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("junseo",340,190,{"seated":True}),("grace",470,184,{}),
     ("lars",560,188,{"seated":True}),("nour",660,186,{}),("marek",740,190,{"seated":True}),
     ("mei",830,186,{}),("oksana",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("clipboard",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"FOUR, EQUALLY WEIGHTED",
      [("TA","25%"),("CC","25%"),("LR","25%"),("GRA","25%")]),
    clockat=(650,40,22,10,0))
S["qd01-f15"]=lambda: f_chart([("Yes, all four criteria",2),("Yes, one or two",3),
    ("No, I did not know they exist",4),("I have seen them, not read them",2)], w=520)
S["qd01-f16"]=lambda: f_realia(doc("On the desk, August",
    "One marked answer and two descriptor pages",
    "<p><b>The box at the top right:</b> 6.0 &middot; 6.0 &middot; 6.0 &middot; <b>5.0</b></p>"
    "<p><b>Underlined in the body:</b> forty-one words explaining a cause.</p>"
    "<p><b>Word count at the foot:</b> 162.</p>"
    "<p><b>Circled in the descriptors:</b> the row that says an overview is required.</p>",
    "Three criteria at six. One at five. The forty-one words were spent on the criterion that "
    "scored lowest."), 600)

# ---------------- Unit 2 ----------------
S["qd02-f1"]=lambda: f_icons([("spreadsheet","a table of figures"),("data","a line drawn from them"),
    ("thread","two lines, the gap shaded"),("tally","four bars"),
    ("calendar","a time axis in years"),("star","a peak marked"),
    ("balance","a plateau"),("signpost","a trough"),
    ("magnifier","a caption with a claim"),("book","an atlas page"),
    ("quotemark","a plate from 1786"),("proof","a third edition"),
    ("pen","a line being drawn"),("note","a verb chosen"),("review","an adverb checked"),
    ("clock","thirty years on one axis")],4)
S["qd02-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("nour",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("spreadsheet",382,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"SAME EIGHT FIGURES",[("table","8 rows"),("line","1 shape")]),
    clockat=(622,44,22,9,30))
S["qd02-f3"]=lambda: f_icons([("data","rising steeply"),("signpost","rising gradually"),
    ("fall","falling"),("balance","almost flat"),
    ("thread","fluctuating"),("roof","rising, then leveling off")],3)
S["qd02-f4"]=lambda: f_realia(tbl("Team research &middot; six plates", None,
    ["The plate","What it shows","The kind of graph","What the caption claims","Is the claim in the data?"],
    br(6,5),
    note="The claim we could not find in the data: ______________________"), 700)
S["qd02-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "Where the line graph came from &middot; page 1 of 1",
    "<p><b>The source.</b> William Playfair, <i>The Commercial and Political Atlas</i>, London, "
    "<b>1786</b> (third edition <b>1801</b>). Printed here in our own words.</p>"
    "<p>The atlas contains the first published line graphs of economic data and the first published "
    "bar chart. Its plates plot England's imports from and exports to other countries across "
    "decades, with <b>time on the horizontal axis</b> and <b>quantity on the vertical</b> &mdash; "
    "the arrangement every line graph has used since.</p>"
    + table_html(["The plate","What the reader can see at once"],
      [["Imports and exports over thirty years, two lines on one pair of axes",
        "which line is above the other, and when they cross"],
       ["The area between the two lines shaded",
        "the size of the balance, without any arithmetic"],
       ["A bar chart of one year's trade with several countries",
        "which country is largest, by length alone"]])
    + "<p><b>Playfair's own argument</b> was that a figure is read faster than a table and remembered "
    "longer, and that a reader who sees the shape has understood something the columns of numbers "
    "concealed.</p>"
    "<p><b>What the atlas is, and is not.</b> It is a <b>commercial and political argument</b> "
    "illustrated with figures, not a study of how people read charts. Playfair measured nobody and "
    "tested nothing; his claim about speed and memory is an assertion from a man selling a new "
    "method. Some of his captions make political claims the plates cannot establish, and parts of "
    "his underlying data have been questioned since.</p>"
    "<p>And it says nothing about examinations, nothing about English, and nothing about describing "
    "a graph &mdash; only about drawing one.</p>",
    "Our summary of a published atlas, named with its place, its year and its third edition."), 620)
S["qd02-f6"]=lambda: f_realia(tbl("The figure after the verb", None,
    ["The pattern","What the figure after it is","An example"],
    [["<i>rose <b>by</b></i>","the size of the change","rose by 15"],
     ["<i>rose <b>to</b></i>","the figure it reached","rose to 86"],
     ["<i>rose <b>from</b> &hellip; <b>to</b></i>","both ends","rose from 71 to 86"],
     ["<i>a rise <b>of</b></i>",B,B],
     ["<i>an increase <b>in</b></i>",B,B],
     ["<i>reached</i>","the figure it reached","reached a peak of 86"]],
    note="Four cells are empty on purpose. Three prepositions, three different facts, and students "
    "mix them in one sentence."), 650)
S["qd02-f7"]=lambda: f_line([("1770",42),("1775",48),("1780",44),("1785",57),
    ("1790",64),("1795",61),("1800",73)], unit="units", w=620)
S["qd02-f8"]=lambda: f_icons([("spreadsheet","a table beside a line"),("thread","two lines, gap shaded"),
    ("tally","a bar chart with no time axis"),("roof","rising, then flat"),
    ("data","fluctuating"),("magnifier","a caption not in the data")],3)
S["qd02-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 1",
    "Three lines, twenty-five years",
    "<p style='font-size:13px;color:#6b6861'>Units: thousands of tonnes. Source: national "
    "statistical office, 2024.</p>"
    "<p><b>The chart below shows the quantity of three commodities handled at one port between 1998 "
    "and 2023.</b></p>"
    "<p><b>Summarize the information by selecting and reporting the main features, and make "
    "comparisons where relevant.</b></p>"
    "<p style='font-size:13px;color:#6b6861'>Write at least 150 words. You should spend about 20 "
    "minutes on this task.</p>",
    "Three lines. Twenty-five years. Seventy-five points, and you may quote about nine of them."),
    600)
S["qd02-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("nour",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("quotemark",360,198,0.22),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"1786 AND NOW",[("plate","2 lines"),("chart","3 lines")]),
    clockat=(630,42,22,10,0))
S["qd02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("The same eight figures", None, ["Year","Figure"],
      [["1770","42"],["1775","48"],["1780","44"],["1785","57"],
       ["1790","64"],["1795","61"],["1800","73"],["1805","78"]], note="Eight rows."), 380)[0:3],
    lambda w,h: f_realia(doc("The same eight figures, drawn", None,
      "<p>One line. One glance. A dip at 1780, a climb from 1785, a check at 1795.</p>"
      "<p>Nothing has been added and nothing taken away.</p>", "One shape."), 380)[0:3],
    800, 310, "As a table", "As a line")
S["qd02-f12"]=lambda: f_realia(doc("Two answers, same chart", None,
    "<p><b>Answer 1.</b> <i>Imports increased steadily and then fell slightly before rising again. "
    "Exports rose sharply and overtook imports.</i> &mdash; four verbs, no figures.</p>"
    "<p><b>Answer 2.</b> <i>Imports rose from 42 to 57 by 1785 before falling to 44, while exports "
    "climbed steadily from 31 to 73, overtaking imports in 1785 and remaining above them for the "
    "rest of the period.</i> &mdash; the same verbs and nine figures, with the crossing point "
    "named.</p>",
    "The verbs were never the problem."), 600)
S["qd02-f13"]=lambda: f_realia(form("Task 1 planner &middot; a line chart",
    [("The overview",B),("The shape of line one",B),("The shape of line two",B),
     ("The crossing, or the gap",B),("Six figures I will quote",B),("What I must not say",B)],
    note="The crossing point is one sentence and almost nobody writes it."), 580)
S["qd02-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("nour",340,190,{"seated":True}),("lars",470,184,{}),
     ("marek",560,188,{"seated":True}),("mei",660,186,{}),("yusuf",740,190,{"seated":True}),
     ("ines",830,186,{}),("junseo",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("quotemark",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"TIME ACROSS, QUANTITY UP",
      [("1786","Playfair"),("2024","the same axes")]),
    clockat=(650,40,22,11,0))
S["qd02-f15"]=lambda: f_chart([("A table",3),("A line chart",4),("A bar chart",2),
    ("It depends on the question",2),("I avoid both",0)], w=520)
S["qd02-f16"]=lambda: f_realia(doc("On the desk, evening",
    "One plate from 1786 and one chart from 2024",
    "<p><b>Underlined in the 1786 caption:</b> a claim about the balance of trade that the two lines "
    "cannot establish.</p>"
    "<p><b>Shaded on the modern chart:</b> the gap between two lines.</p>"
    "<p><b>Circled in the practice answer:</b> one sentence &mdash; <i>exports overtook imports in "
    "1785</i>.</p>"
    "<p><b>Beside it:</b> a table of the same eight figures, unread.</p>",
    "Two hundred and thirty-eight years, and the same two axes."), 600)

# ---------------- Unit 3 ----------------
S["qd03-f1"]=lambda: f_icons([("balance","a circle in twelve segments"),
    ("tally","a bar in three unequal parts"),("review","one over four"),
    ("wordcount","a percentage sign"),("scales","a quarter shaded"),
    ("data","a third shaded"),("spreadsheet","just over half"),
    ("book","a stacked bar"),("magnifier","a share printed beside a segment"),
    ("proof","area, not length"),("note","the remainder"),("star","the largest share"),
    ("signpost","the smallest"),("thread","what barely moved"),
    ("pen","a share being estimated"),("clipboard","a report from 1858")],4)
S["qd03-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("marek",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("clipboard",382,196,0.24),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"TWELVE SEGMENTS",[("one","very large"),("eleven","not")]),
    clockat=(622,44,22,10,0))
S["qd03-f3"]=lambda: f_icons([("scales","a quarter shaded"),("balance","a third shaded"),
    ("data","just over half shaded"),("tally","a stacked bar of three"),
    ("wordcount","a percentage beside a segment"),("proof","area, not length")],3)
S["qd03-f4"]=lambda: f_realia(tbl("Team research &middot; six part-whole figures", None,
    ["The figure","What it shows","The largest share","How the quantity is encoded","What we cannot read from it"],
    br(6,5),
    note="The figure we could not read at all: ______________________"), 700)
S["qd03-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "A diagram from 1858, and what a part of a whole looks like &middot; page 1 of 1",
    "<p><b>The source.</b> Florence Nightingale, <i>Notes on Matters Affecting the Health, "
    "Efficiency and Hospital Administration of the British Army</i>, London, <b>1858</b>, and the "
    "diagram of mortality printed in it. Printed here in our own words.</p>"
    "<p>The diagram divides a circle into <b>twelve segments</b>, one for each month of the year. "
    "Each segment is divided into bands for the <b>cause of death</b>: preventable disease, wounds, "
    "and all other causes. The area of each band stands for the number of deaths.</p>"
    + table_html(["The category","What the diagram shows about it"],
      [["<b>Preventable disease</b>","far the largest area, in most months"],
       ["<b>Wounds</b>","a small band by comparison"],
       ["<b>All other causes</b>","smaller again"]])
    + "<p>The argument the diagram was drawn to make is visible without a single figure being read: "
    "most of the deaths were not caused by fighting. It was circulated to ministers and is generally "
    "credited with contributing to a change in army sanitary administration.</p>"
    "<p><b>What it is, and is not.</b> It is <b>one campaigner's diagram of one army in one war</b>, "
    "drawn to persuade. It is not an experiment about charts, and it establishes nothing about "
    "part-whole figures in general. The areas are also drawn in a way that has been criticized since: "
    "a reader comparing two segments is comparing areas, and area is read much less accurately than "
    "length &mdash; which is Unit 4's subject. The diagram changed a policy and would still fail a "
    "modern design review.</p>"
    "<p>And the figures behind it come from army returns of the period, whose completeness has been "
    "questioned. The diagram is honest about what it is: an argument, drawn.</p>",
    "Our summary of a published report and the diagram in it, named with its place and its year."),
    630)
S["qd03-f6"]=lambda: f_realia(tbl("How exact is it?", None,
    ["The expression","How exact","An example"],
    [["<i>a quarter</i>","close, and plain","a quarter of the total"],
     ["<i>24 per cent</i>","exact, and on the figure","24 per cent of the total"],
     ["<i>about a third</i>","approximate, and honest about it","about a third of all cases"],
     ["<i>just over half</i>",B,B],
     ["<i>accounted for</i>",B,B],
     ["<i>the remainder</i>","everything not yet named","the remainder was under 5 per cent"]],
    note="Four cells are empty on purpose. A proportion is always a proportion <i>of</i> something."),
    650)
S["qd03-f7"]=lambda: f_part("Three causes, one whole &middot; our own figures",
    [("preventable disease",82,"#6b2f4a"),("wounds",12,"#8a5a1e"),
     ("all other causes",6,"#3f6b2f")], 560)
S["qd03-f8"]=lambda: f_icons([("balance","a circle in twelve"),("tally","a segment in three bands"),
    ("data","a stacked bar"),("scales","a pie with a quarter removed"),
    ("proof","area against radius"),("magnifier","drawn to persuade")],3)
S["qd03-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 1",
    "Two pie charts, two years",
    "<p style='font-size:13px;color:#6b6861'>Units: percentage of total. Source: not stated.</p>"
    "<p><b>The two charts below show how one college's students were distributed across five "
    "subjects in 2010 and in 2023.</b></p>"
    "<p><b>Summarize the information by selecting and reporting the main features, and make "
    "comparisons where relevant.</b></p>"
    "<p style='font-size:13px;color:#6b6861'>Write at least 150 words.</p>",
    "Ten segments. Two totals of a hundred. And the source line says nothing."), 600)
S["qd03-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("marek",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("clipboard",360,198,0.22),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"1858, REDRAWN",[("circle","areas"),("bar","lengths")]),
    clockat=(630,42,22,10,30))
S["qd03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("As areas", None,
      "<p>A circle divided into three. The largest part looks large; how large is a guess.</p>"
      "<p>Two readers guessed 70 and 88 for the same segment.</p>", "Area."), 380)[0:3],
    lambda w,h: f_realia(doc("As lengths", None,
      "<p>One bar divided into three. The largest part is 82 per cent and both readers said 82.</p>"
      "<p>The same three numbers.</p>", "Length."), 380)[0:3],
    800, 310, "A circle of areas", "A stacked bar")
S["qd03-f12"]=lambda: f_realia(doc("Two answers, same pair of pies", None,
    "<p><b>Answer 1.</b> <i>The biggest subject was business in both years.</i> &mdash; one segment "
    "of ten.</p>"
    "<p><b>Answer 2.</b> <i>Business was the largest in both years, at 34 and 38 per cent, while "
    "languages was the smallest throughout, falling from 8 to 5 per cent. Engineering barely moved, "
    "at 19 and 20 per cent, whereas nursing rose by 6 percentage points, the largest single "
    "change.</i></p>",
    "The largest, the smallest, the one that barely moved, and the biggest change: four sentences, "
    "and the figure is described."), 600)
S["qd03-f13"]=lambda: f_realia(form("Task 1 planner &middot; part and whole",
    [("The overview",B),("The largest share in each year",B),("The smallest",B),
     ("The biggest change",B),("What barely moved",B),("The figures I will quote",B)],
    note="Five boxes of content and one of arithmetic. Fill the fifth and you have an answer."), 580)
S["qd03-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("marek",340,190,{"seated":True}),("grace",470,184,{}),
     ("mei",560,188,{"seated":True}),("samira",660,186,{}),("tomas",740,190,{"seated":True}),
     ("hana",830,186,{}),("chiamaka",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("clipboard",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"A PART OF WHAT?",
      [("area","read badly"),("length","read well"),("1858","changed a policy")]),
    clockat=(650,40,22,12,0))
S["qd03-f15"]=lambda: f_chart([("A pie chart",3),("A stacked bar",4),
    ("Two separate bars",2),("A table of percentages",2),("None of them",0)], w=520)
S["qd03-f16"]=lambda: f_realia(doc("On the desk, afternoon",
    "The 1858 diagram, and five shares drawn four ways",
    "<p><b>Beside the circle:</b> a stacked bar of the same three categories.</p>"
    "<p><b>On the sheet:</b> five shares drawn as a pie, a stacked bar, separate bars, and a "
    "table.</p>"
    "<p><b>On the next page:</b> each of the five estimated by eleven readers from the pie, and the "
    "same five read off the table.</p>"
    "<p><b>Our own figures, eleven readers.</b> Which establishes nothing, and the page says so.</p>",
    "A diagram that changed a policy, and a design its own century would now query."), 600)
