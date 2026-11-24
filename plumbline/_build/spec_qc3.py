# -*- coding: utf-8 -*-
"""Plumbline Book 3 figure specs, Units 8 to 10."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 8 ----------------
S["qc08-f1"]=lambda: f_icons([("essay","a paragraph in equal weight"),
    ("quotemark","one sentence in bold"),("scissors","six details cut to one line"),
    ("thread","three specifics to one general word"),("transfer","a sequence to one act"),
    ("recycle","a small buffer of three items"),("note","a summary of four lines"),
    ("notebook","eight heading options"),("refnumber","a paragraph letter"),
    ("library","a cover dated 1978"),("review","a cover dated 1983"),
    ("book","a cover dated 1988"),("dashboard","a model of boxes and arrows"),
    ("stars","a tick"),("noentry","a cross"),("proof","a footnote")],4)
S["qc08-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("hana",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("essay",390,196,0.24),("board",96,86,0.86),
     ("notebook",470,198,0.22),("window",790,56,0.94)],
    board=(638,22,246,122,"SIX TO ONE",[("delete","generalize"),("then","construct")]),
    clockat=(588,44,22,12,30))
S["qc08-f3"]=lambda: f_icons([("scissors","three details crossed out"),
    ("thread","three specifics to one general word"),("transfer","a sequence to one act"),
    ("note","a one-line gist"),("notebook","a heading list"),
    ("magnifier","write your own line first")],3)
S["qc08-f4"]=lambda: f_realia(tbl("Team research &middot; one line each", None,
    ["The paragraph","My one line","Rule used most","Heading chosen","Right?"],
    br(6,5),
    note="The paragraph with no topic sentence: ______________________"), 680)
S["qc08-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Reading class",
    "How a reader gets from a paragraph to one line &middot; page 1 of 1",
    "<p><b>The source.</b> W. Kintsch and T. A. van Dijk, <i>Toward a model of text comprehension and "
    "production</i>, Psychological Review, <b>1978</b>. Printed here in our own words.</p>"
    "<p>A text has two levels. At the bottom is everything it actually says, sentence by sentence "
    "&mdash; the <b>microstructure</b>. Above that is what it is <b>about</b> &mdash; the "
    "<b>macrostructure</b>, the gist, the thing you could say in one line.</p>"
    + table_html(["The macro-rule","What it does","An example"],
      [["<b>Deletion</b>","drops what does not matter to the gist","the dates of each of six trials"],
       ["<b>Generalization</b>","replaces specifics with one superordinate term",
        "<i>iron, copper and tin</i> &rarr; <i>metals</i>"],
       ["<b>Construction</b>","replaces a sequence of events by the act they constitute",
        "<i>he packed, left, boarded, arrived</i> &rarr; <i>he traveled</i>"]])
    + "<p>Note what construction does: the word that ends up in your summary &mdash; <i>traveled</i> "
    "&mdash; was <b>not in the text at all</b>.</p>"
    "<p>The model also takes seriously the fact that a reader cannot hold a whole text in mind. Only "
    "a few propositions sit in a short-term <b>buffer</b> at any moment, which is why a paragraph has "
    "to be reduced as you go rather than at the end.</p>"
    "<p><b>One practical consequence.</b> Matching headings compares a set of headings with a set of "
    "paragraphs. If you read a paragraph and write <b>one line of your own</b> before looking at the "
    "headings, you are comparing one line with eight. If you read the headings first and try each "
    "against each paragraph, you are making dozens of comparisons. The model does not say this &mdash; "
    "the arithmetic does &mdash; but it tells you what the one line is and how it is made.</p>"
    "<p><b>A model its own authors rebuilt twice.</b> This is a formal model published in 1978, with "
    "evidence from experiments on recall and summarization. <b>Both authors revised it "
    "substantially</b>: a book-length reworking followed in <b>1983</b>, and the first author "
    "published a different architecture in <b>1988</b>. Anybody citing the 1978 paper as current is "
    "citing a stage rather than a position. The macro-rules are a description of what summaries look "
    "like; that readers carry out those operations in that order is a modeling claim and not a "
    "demonstrated procedure inside anybody's head. And it is about comprehension, not examinations: "
    "it offers no technique and says nothing about matching headings.</p>",
    "Our summary of a published paper. Read the three rules if nothing else; they are a quarter of a "
    "page."), 620)
S["qc08-f6"]=lambda: f_realia(tbl("Superordinate nouns", None,
    ["The specifics","One superordinate word","A sentence"],
    [["iron, copper, tin","<b>metals</b>","Several metals were tested."],
     ["trains, buses, ferries","<b>transport</b>","Public transport was reorganized."],
     ["rainfall, temperature, wind","<b>conditions</b>","Weather conditions were recorded daily."],
     ["interviews, surveys, experiments","<b>methods</b>","Three methods were combined."],
     ["letters, diaries, ledgers",B,B],
     ["cost, time, access",B,B]],
    note="Four cells are empty on purpose. Headings are written with superordinate words, so a "
    "shared word is often in the wrong heading."), 660)
S["qc08-f7"]=lambda: f_process(["six sentences","delete the detail",
    "generalize the specifics","construct one act","one line of gist"], w=680)
S["qc08-f8"]=lambda: f_icons([("essay","a paragraph in equal weight"),
    ("quotemark","one sentence in bold"),("scissors","three details crossed out"),
    ("thread","specifics to one general word"),("transfer","a sequence to one act"),
    ("note","a one-line gist")],3)
S["qc08-f9"]=lambda: f_realia(doc("Matching headings &middot; with margin notes",
    "Eight headings, six paragraphs, and one line written beside each",
    table_html(["Para","My five words","Heading chosen"],
      [["A","early surveys found nothing","iii"],
       ["B","the method was abandoned","vii"],
       ["C","<b>no topic sentence &mdash; several causes listed</b>","ii"],
       ["D","the 1961 revival","v"],
       ["E","<b>no topic sentence &mdash; two objections</b>","viii"],
       ["F","what the records cannot settle","i"]])
    + "<p style='font-size:13px;color:#6b6861'><b>Headings not used:</b> iv, vi. Both contain a word "
    "that appears in paragraph C.</p>",
    "Six lines, then eight comparisons &mdash; instead of eight headings tried against six "
    "paragraphs, which is forty-eight. Our own task, written for this book."), 620)
S["qc08-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("hana",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("notebook",360,196,0.24),("computer",490,142,0.42),
     ("essay",450,198,0.22),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"EIGHT NOT FORTY-EIGHT",[("one line","then compare")]),
    clockat=(680,44,22,13,0))
S["qc08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Version 1", None,
        "<p>No margin notes. Eight headings read against six paragraphs.</p>"
        "<p style='color:#6b6861;font-size:13px'>Nineteen minutes, three of six.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Version 2", None,
        "<p>A five-word line beside each paragraph, written before the headings were read.</p>"
        "<p style='color:#6b6861;font-size:13px'>Eleven minutes, five of six.</p>"), w)[0:3],
    w=900, h=260)
S["qc08-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>Matching headings takes me far too long and I usually get half of them. I need to read "
        "faster.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>On <b>13 June</b> I did a matching-headings task in <b>eleven minutes</b> and got <b>five "
        "of six</b>. Three weeks earlier I did the same kind of task in nineteen minutes and got three "
        "of six. The change was that I wrote one line of my own in the margin for each paragraph "
        "before looking at the eight headings &mdash; eight comparisons instead of forty-eight. A "
        "model published in 1978 describes how a reader reduces a text to its gist by deleting detail, "
        "replacing specifics with a general word, and replacing a sequence of events with the act they "
        "make up, so that the summary word may not be in the text at all. It is a formal model, "
        "revised by both its authors in 1983 and 1988, its rules are a modeling claim rather than a "
        "demonstrated procedure, and it says nothing about examinations. The one I got wrong had no "
        "topic sentence.</p>"), w)[0:3],
    w=940, h=360)
S["qc08-f13"]=lambda: f_realia(form("Note planner",
    [("The date, the score and the time",""),("The previous score and time",""),
     ("What I changed",""),("The three rules",""),("The limits of the model",""),
     ("The paragraph I got wrong, and why","")]), 560)
S["qc08-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("hana",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("samira",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("nour",590,170,{}),("oksana",655,172,{}),
     ("marek",720,170,{}),("ines",785,172,{}),("junseo",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("notebook",350,198,0.24),
     ("printer",430,196,0.3),("essay",560,198,0.22),("table",650,0,1.0),
     ("library",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,236,116,"DELETE, GENERALIZE, CONSTRUCT",[("gist","one line")]),
    clockat=(296,34,22,14,0))
S["qc08-f15"]=lambda: f_chart([("read all the headings first",5),("read the first paragraph first",2),
    ("write my own line first",2),("read the whole passage first",1),("I avoid this type",1)])
S["qc08-f16"]=lambda: f_realia(doc("On a desk in the afternoon",
    "Eight tasks, two methods",
    table_html(["Method","Tasks","Average score","Average time"],
      [["Headings read first","4","3 of 6","18 minutes"],
       ["One line written first","4","<b>5 of 6</b>","<b>12 minutes</b>"]])
    + "<p><b>All four remaining errors</b> were in paragraphs with no topic sentence.</p>"
    "<p><b>Two journal covers</b>, dated 1983 and 1988, which are where the model went next.</p>",
    "Four o'clock. Three to five, and eighteen minutes to twelve, from writing five words in a "
    "margin."), 640)

# ---------------- Unit 9 ----------------
S["qc09-f1"]=lambda: f_icons([("odometer","a stopwatch beside an open page"),
    ("wordcount","a word count at the foot"),("walk","a reader going smoothly"),
    ("noentry","a reader stopping every third word"),("stars","a word recognized instantly"),
    ("scissors","a word worked out letter by letter"),("library","a shelf of easy books"),
    ("book","one difficult book"),("timer","a repeated passage timed"),
    ("data","a graph rising slowly"),("clipboard","a synthesis of many studies"),
    ("review","a line between finding and implication"),("proof","a spine dated 2009"),
    ("magnifier","a footnote"),("tally","words a minute"),("form","a reading record")],4)
S["qc09-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("nour",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("essay",390,196,0.24),("board",94,86,0.88),
     ("odometer",470,198,0.22),("window",790,56,0.94)],
    board=(632,22,252,124,"WORDS A MINUTE",[("fluent L1","250-300"),("typical L2","under 150"),("Nour","140")]),
    clockat=(582,44,22,13,30))
S["qc09-f3"]=lambda: f_icons([("walk","a fluent reader"),("noentry","a slower reader"),
    ("library","a shelf of easy books"),("timer","one passage read three times"),
    ("data","a slowly rising graph"),("magnifier","volume, not technique")],3)
S["qc09-f4"]=lambda: f_realia(tbl("Team research &middot; measure everybody", None,
    ["The reader","The text","Words","Minutes","Words a minute"],
    br(8,5),
    note="The slowest and the fastest in the team: ______________________"), 680)
S["qc09-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Reading class",
    "How fast a reader reads, and how a rate changes &middot; page 1 of 1",
    "<p><b>The source.</b> William Grabe, <i>Reading in a Second Language: Moving from Theory to "
    "Practice</i>, Cambridge University Press, <b>2009</b>. Printed here in our own words.</p>"
    + table_html(["Reader","Approximate rate on ordinary prose"],
      [["A <b>fluent adult</b> reading their <b>first</b> language","around 250 to 300 words a minute"],
       ["A typical <b>second-language</b> reader","often well under 150"],
       ["What <b>academic</b> prose does to either","slows both, and the second one more"]])
    + "<p>Those are <b>approximate</b> figures, and they vary with the text, the purpose and how the "
    "measurement is made.</p>"
    "<p>The reason is not mysterious. Fluent reading depends on <b>automatic word recognition</b>: the "
    "word is there before you have done anything about it, and attention is free for the sentence. "
    "When recognition is not automatic, part of every second goes on identifying words, and that is "
    "the <b>bottleneck</b>. Comprehension strategies do not remove it: you cannot strategize your way "
    "past a word you are still working out.</p>"
    + table_html(["What raises a rate","How it works"],
      [["<b>Extensive reading</b>","large quantities of material that is <b>easy for you</b>, read "
        "for meaning; easy matters, because difficult material is spent on decoding"],
       ["<b>Timed repeated reading</b>","the same short passage several times against a clock, so "
        "that familiar words become fast"]])
    + "<p>Both require <b>volume</b> and both work <b>slowly</b>. The book does not offer a technique "
    "that produces a faster reader in a fortnight, and it is explicit that it has none.</p>"
    "<p><b>A synthesis that marks its own implications.</b> This is a gathering of a large research "
    "literature into one account, written for teachers, and the author is careful to separate what the "
    "research <b>found</b> from what he thinks <b>follows</b> for teaching. The rate figures are "
    "approximate and a figure for a group says nothing about any individual, including you. The "
    "evidence on extensive reading is, as the author notes, <b>uneven in quality</b>: many studies "
    "have design limitations, and the claim rests on an accumulation rather than on one decisive "
    "trial. And it is a book about reading, not about examinations.</p>",
    "Our summary of a published book. The center's copy is on the shelf; the chapters on fluency are "
    "the ones to read."), 620)
S["qc09-f6"]=lambda: f_realia(tbl("Participle clauses", None,
    ["Two sentences","One sentence","The form"],
    [["<i>The samples were left outside. They deteriorated.</i>",
      "<b>Left outside, the samples deteriorated.</b>","past participle"],
     ["<i>He examined the records. He found three errors.</i>",
      "<b>Examining the records, he found three errors.</b>","<i>-ing</i>"],
     ["<i>The method had failed twice. It was abandoned.</i>",
      "<b>Having failed twice, the method was abandoned.</b>","perfect participle"],
     ["<i>The scheme was approved in 1961. It ran for nine years.</i>",B,B],
     ["<i>She published the figures. She was criticized at once.</i>",B,B]],
    note="Four cells are empty on purpose. The participle belongs to the subject of the main clause."),
    660)
S["qc09-f7"]=lambda: f_matrix(["Words a minute","900 words takes"],
    [("fluent, first language",["275","3&frac14; min"]),
     ("strong second-language reader",["200","4&frac12; min"]),
     ("typical second-language reader",["150","6 min"]),
     ("the same reader, academic prose",["120","7&frac12; min"])], 580)
S["qc09-f8"]=lambda: f_icons([("odometer","a stopwatch beside a page"),
    ("stars","a word recognized instantly"),("scissors","a word being decoded"),
    ("library","a shelf of easy books"),("timer","a repeated passage"),
    ("data","a slowly rising graph")],3)
S["qc09-f9"]=lambda: f_realia(tbl("Reading record &middot; six weeks",
    "Nour Khalil &middot; two kinds of text",
    ["Date","Text","Words","Minutes","Words a minute","Easy or academic"],
    [["9 May","novel","1,840","15.6","118","easy"],
     ["16 May","novel","2,100","17.0","124","easy"],
     ["23 May","journal page","900","6.9","131","academic"],
     ["30 May","novel","2,400","18.3","131","easy"],
     ["6 Jun","journal page","950","7.0","136","academic"],
     ["13 Jun","novel","2,600","19.0","137","easy"],
     ["20 Jun","journal page","900","6.4","140","academic"],
     ["20 Jun","novel","2,700","19.4","139","easy"]],
    note="Six weeks, from 118 to 139 on easy pages and from 131 to 140 on academic ones. Our own "
    "invented record."), 700)
S["qc09-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("nour",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("form",360,196,0.22),("computer",490,142,0.42),
     ("odometer",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"140 WPM",[("three passages","~23 min"),("of","60")]),
    clockat=(680,44,22,14,0))
S["qc09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Record 1", None,
        "<p>Eight academic readings in six weeks. Rate 138 &rarr; 140.</p>"
        "<p style='color:#6b6861;font-size:13px'>Difficult material, decoded.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Record 2", None,
        "<p>Twenty easy readings in six weeks. Rate 118 &rarr; 139.</p>"
        "<p style='color:#6b6861;font-size:13px'>Which is the figure that will still be moving next "
        "year.</p>"), w)[0:3],
    w=900, h=270)
S["qc09-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I read too slowly in English. I am going to try to read faster and do more practice "
        "papers.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>On <b>20 June</b> I timed myself on two texts with known word counts: <b>186</b> words a "
        "minute on an easy page and <b>140</b> on an academic page. At 140, a nine-hundred-word "
        "passage takes me six and a half minutes, so one reading of three passages is nearly twenty "
        "minutes of a sixty-minute paper. A synthesis published in 2009 reports that fluent "
        "first-language readers manage roughly 250 to 300 words a minute and second-language readers "
        "often well under 150, that the limiting step is automatic word recognition, and that the two "
        "routes to a faster rate are large quantities of easy reading and timed repeated reading "
        "&mdash; both slow, both requiring volume. The figures are approximate, the evidence on "
        "extensive reading is uneven in quality, and a group figure says nothing about me. So: one "
        "easy book a week for the next year, and a paper plan built on 140 rather than on 200.</p>"),
        w)[0:3],
    w=940, h=360)
S["qc09-f13"]=lambda: f_realia(form("Note planner",
    [("My easy-text rate",""),("My academic rate",""),("Minutes for one passage",""),
     ("Minutes for three",""),("The two routes",""),("My plan in two halves","")]), 560)
S["qc09-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("nour",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("hana",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("samira",590,170,{}),("oksana",655,172,{}),
     ("marek",720,170,{}),("ines",785,172,{}),("junseo",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("odometer",350,198,0.22),
     ("printer",430,196,0.3),("book",560,198,0.24),("table",650,0,1.0),
     ("data",860,198,0.24),("shelf",930,96,0.5)],
    board=(40,22,240,116,"FEWER WORDS, NOT FASTER EYES",[("140","wpm"),("23 min","to read")]),
    clockat=(300,34,22,15,0))
S["qc09-f15"]=lambda: f_chart([("yes and I know the figure",1),("yes but I forget",2),
    ("no",5),("I did not know you could",2),("I would rather not",1)])
S["qc09-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Six weeks of easy reading, nine words a minute",
    table_html(["","Start","Now","Change"],
      [["Easy pages","118 wpm","139 wpm","+21"],
       ["Academic pages","131 wpm","140 wpm","+9"],
       ["Minutes to read three passages","23","20","&minus;3"],
       ["Accuracy on attempted questions","90%","90%","0"]])
    + "<p><b>An easy novel</b> with a bookmark a third of the way through.</p>"
    "<p><b>A practice paper</b> with eleven blanks.</p>",
    "Eight o'clock. Eight weeks left, and the easy figure is moving faster than the academic one."),
    660)

# ---------------- Unit 10 ----------------
S["qc10-f1"]=lambda: f_icons([("quotemark","may, in bold"),
    ("stars","clearly, in bold"),("sad","unfortunately, in bold"),
    ("scales","a scale from uncertain to certain"),("student","a writer behind the text"),
    ("handsup","a reader addressed directly"),("signpost","a signpost inside a text"),
    ("flashback","a reference to an earlier section"),("refnumber","a citation"),
    ("note","a definition in brackets"),("library","a corpus of articles"),
    ("form","a coding sheet with disagreements"),("book","a spine dated 2005"),
    ("review","a tick"),("noentry","a cross"),("proof","a footnote")],4)
S["qc10-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("yusuf",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("form",390,196,0.22),("board",94,86,0.88),
     ("book",470,198,0.24),("window",790,56,0.94)],
    board=(632,22,252,124,"ONE CLAIM, THREE WAYS",[("may","weak"),("probably","moderate"),("clearly","full")]),
    clockat=(582,44,22,14,0))
S["qc10-f3"]=lambda: f_icons([("quotemark","a hedge"),("stars","a booster"),
    ("sad","an attitude marker"),("student","a self-mention"),
    ("handsup","a direct address"),("magnifier","what the writer will stand behind")],3)
S["qc10-f4"]=lambda: f_realia(tbl("Team research &middot; count the hedges", None,
    ["The sentence","The marker","Hedge, booster or attitude","What the writer will stand behind",
     "Our disagreement"],
    br(10,5),
    note="The one we could not classify: ______________________"), 720)
S["qc10-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Reading class",
    "The words that tell you what the writer will stand behind &middot; page 1 of 1",
    "<p><b>The source.</b> Ken Hyland, <i>Metadiscourse: Exploring Interaction in Writing</i>, "
    "Continuum, <b>2005</b>. Printed here in our own words.</p>"
    "<p>An academic text does two things at once. It makes claims about the world, and it manages the "
    "reader: organizing the text, signalling how sure the writer is, and inviting the reader to agree. "
    "The second of those is what this book calls <b>metadiscourse</b>.</p>"
    + table_html(["Group","What it does","Examples"],
      [["<b>Interactive</b>","helps the reader through the text",
        "transitions, frame markers, references to other parts, citations, definitions in passing"],
       ["<b>Interactional</b>","positions the writer and the reader",
        "hedges, boosters, attitude markers, self-mentions, direct engagement"]])
    + table_html(["The marker","What it does","Examples"],
      [["<b>A hedge</b>","withholds full commitment",
        "<i>may</i>, <i>might</i>, <i>possibly</i>, <i>appear to</i>, <i>suggest</i>, <i>tend to</i>"],
       ["<b>A booster</b>","expresses certainty",
        "<i>clearly</i>, <i>obviously</i>, <i>demonstrate</i>, <i>must</i>, <i>undoubtedly</i>"],
       ["<b>An attitude marker</b>","expresses the writer's evaluation",
        "<i>unfortunately</i>, <i>surprisingly</i>, <i>importantly</i>"]])
    + "<p><b>The connection to the paper.</b> Some question types ask whether a statement agrees with "
    "<b>what the writer thinks</b>. A statement that removes a hedge is not the writer's view. <i>The "
    "decline may have been caused by the tax</i> does not support <i>the decline was caused by the "
    "tax</i>. One word, and the verdict changes.</p>"
    "<p><b>Functional categories are interpretive.</b> This is a framework built from corpora of "
    "academic writing. The categories are <b>functional</b>, defined by what a word is doing rather "
    "than by what it is: <i>clearly</i> can boost a claim or simply mean <i>in a way that is easy to "
    "see</i>. Coding a text therefore involves <b>judgement</b>, analysts disagree, and <b>any count "
    "of hedges is a count of somebody's readings</b>. The conventions are not universal: how much "
    "hedging is appropriate <b>varies by discipline</b> and between <b>writing cultures</b>, so a "
    "writer trained in one tradition can sound evasive or arrogant in another without intending "
    "either. And the book is about <b>writing</b>: it describes what writers do, and Book 5 of this "
    "series uses it for the other side of the same problem.</p>",
    "Our summary of a published book. The center's copy is on the shelf; the chapter on stance is the "
    "one to read."), 620)
S["qc10-f6"]=lambda: f_realia(tbl("Strength of commitment", None,
    ["The sentence","Strength","What a statement may say"],
    [["<i>may have been caused by</i>","weak","<i>one possible cause was</i>"],
     ["<i>appears to have been caused by</i>","weak, with evidence","<i>the evidence suggests</i>"],
     ["<i>was probably caused by</i>","moderate","<i>was likely caused by</i>"],
     ["<i>was caused by</i>","full","<i>was caused by</i>"],
     ["<i>must have been caused by</i>",B,B],
     ["<i>was clearly caused by</i>",B,B]],
    note="Four cells are empty on purpose. <i>Must have been</i> is a very strong claim made without "
    "direct evidence."), 660)
S["qc10-f7"]=lambda: f_chart([("may",5),("suggest",3),("appear to",3),("tend to",2),("clearly",1)],
    unit="wrong answers")
S["qc10-f8"]=lambda: f_icons([("quotemark","a hedge"),("stars","a booster"),
    ("sad","an attitude marker"),("signpost","a transition"),
    ("student","a self-mention"),("handsup","a direct address")],3)
S["qc10-f9"]=lambda: f_realia(tbl("Yes, no or not given &middot; with the passage sentence",
    "Six statements, and the marker underlined in each passage sentence",
    ["No.","The statement","The passage sentence","Verdict"],
    [["1","The practice began earlier than previously thought.",
      "<i>The practice <u>may</u> have begun considerably earlier.</i>","<b>NG</b>"],
     ["2","The two events were connected.",
      "<i>The two events were <u>clearly</u> connected.</i>","YES"],
     ["3","The records are incomplete.",
      "<i>The records <u>appear to</u> be incomplete.</i>","<b>NG</b>"],
     ["4","The method was unsuccessful.",
      "<i>The method was abandoned after two trials.</i>","NG"],
     ["5","Most writers accept the explanation.",
      "<i>The explanation <u>tends to</u> be accepted.</i>","YES"],
     ["6","The decline was caused by the tax.",
      "<i>The decline <u>may</u> have been caused by the tax.</i>","<b>NG</b>"]],
    note="Two of these six turn on one word. Our own statements, written for this book."), 720)
S["qc10-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("yusuf",400,176,{"seated":True}),("grace",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("form",360,196,0.22),("computer",490,142,0.42),
     ("pen",450,198,0.18),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"MAY",[("said","may"),("statement","was")]),
    clockat=(680,44,22,14,30))
S["qc10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Hedged", None,
        "<p>Seven claims, each with <i>may</i>, <i>appears to</i> or <i>tends to</i>.</p>"
        "<p style='color:#6b6861;font-size:13px'>What the writer will stand behind: very little, "
        "precisely.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Flat", None,
        "<p>The same seven claims with every hedge removed.</p>"
        "<p style='color:#6b6861;font-size:13px'>Seven promises the writer never made.</p>"),
        w)[0:3],
    w=900, h=270)
S["qc10-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>Yes-no-not given is impossible. It is all about opinion and the answers could easily be "
        "the other way round.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>On <b>27 June</b> I got four of six yes-no-not-given statements right, and both errors "
        "were a <i>yes</i> where the answer was <i>not given</i>. In both cases the passage sentence "
        "contained a hedge &mdash; <i>may have begun</i> and <i>appears to suggest</i> &mdash; and the "
        "statement was flat. A framework published in 2005 describes the resources a writer uses to "
        "organize a text and to show how far they stand behind a claim: hedges withhold commitment, "
        "boosters assert certainty, attitude markers show evaluation. The categories are functional, "
        "so the same word can do different work and coding a text involves judgement; hedging "
        "conventions vary by discipline and by writing culture; and the book is about writing rather "
        "than about answering questions. My habit: underline the hedge in the passage sentence before "
        "I read the statement.</p>"), w)[0:3],
    w=940, h=360)
S["qc10-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the score on this type",""),("My wrong answers",""),
     ("The hedge in each passage sentence",""),("The three kinds of marker",""),
     ("Why coding is interpretive",""),("My habit","")]), 560)
S["qc10-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("yusuf",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("grace",290,172,{}),("nour",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("lars",515,176,{"seated":True}),("samira",590,170,{}),("oksana",655,172,{}),
     ("marek",720,170,{}),("ines",785,172,{}),("hana",845,170,{}),
     ("junseo",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("form",350,198,0.22),
     ("printer",430,196,0.3),("flashcard",560,198,0.24),("table",650,0,1.0),
     ("book",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,244,116,"WHAT WILL THE WRITER STAND BEHIND",[("may","not a promise")]),
    clockat=(306,34,22,15,0))
S["qc10-f15"]=lambda: f_chart([("may",5),("appear to",2),("suggest",2),("tend to",1),
    ("I had not noticed them",1)])
S["qc10-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Fourteen marks, five known words",
    table_html(["The word","Wrong answers","Hedge or booster"],
      [["<b>may</b>","5","hedge"],["<b>suggest</b>","3","hedge"],
       ["<b>appear to</b>","3","hedge"],["<b>tend to</b>","2","hedge"],
       ["<b>clearly</b>","1","booster"],["<b>Total</b>","<b>14</b>","&mdash;"]])
    + "<p><b>Forty markers</b> classified by his team on one page, with <b>four</b> they could not "
    "agree about.</p>"
    "<p><i>All five words are words he has known since school.</i></p>",
    "Seven o'clock. Four of the five costly words are hedges, and any count of hedges is a count of "
    "somebody's readings."), 660)
