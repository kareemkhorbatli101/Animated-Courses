# -*- coding: utf-8 -*-
"""Plumbline Book 1 figure specs, Units 8 to 10."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Unit 8 ----------------
S["qa08-f1"]=lambda: f_icons([("book","a spine with a date on it"),
    ("note","a numbered list of words"),("thread","a base word and four forms"),
    ("quotemark","a suffix, printed alone"),("review","one word, two meanings"),
    ("balance","three unequal shares of one word"),("handsup","choosing one card"),
    ("library","a simplified reader"),("scales","weighing two words"),
    ("magnifier","a dictionary open at sense"),("printer","a typewriter"),
    ("clipboard","judgment"),("tally","frequency"),
    ("noentry","no word for a computer"),("calendar","a date on a century line"),
    ("form","a footnote")],4)
S["qa08-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("yusuf",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",390,196,0.26),("board",102,86,0.8),
     ("thread",470,198,0.2),("window",790,56,0.94)],
    board=(656,22,228,116,"ONE WORD, FOUR FORMS",[("select","selection"),("selective","selectively")]),
    clockat=(606,44,22,9,30))
S["qa08-f3"]=lambda: f_icons([("tally","frequency: how often"),
    ("scales","ease of learning"),("clipboard","necessity"),
    ("worldmap","coverage of ideas"),("quotemark","stylistic level"),
    ("magnifier","chosen, not only counted")],3)
S["qa08-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The word","On the first two thousand?","Senses it has","Which sense I met","Date"],
    blankrows(6,5),
    note="The one that was not on the list: ______________________"), 680)
S["qa08-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to students",
    "The oldest useful word list, and what it does that newer ones do not &middot; page 1 of 1",
    "<p><b>The source.</b> Michael West, <i>A General Service List of English Words</i>, Longman, "
    "Green and Co., <b>1953</b>. Printed here in our own words.</p>"
    "<p>In 1953 a short book was published listing about <b>two thousand</b> word families and "
    "calling them a <b>general service</b> vocabulary: the words a learner needs for general "
    "purposes, whatever subject they go on to study. It drew on word counts made in the decades "
    "before it, and it was intended mainly for one job &mdash; writing <b>simplified readers</b>, "
    "books that use a small, known vocabulary on purpose.</p>"
    + table_html(["Criterion","What it asks"],
      [["<b>Frequency</b>","How often does it actually appear?"],
       ["<b>Ease of learning</b>","Is it easy to learn and to use?"],
       ["<b>Necessity</b>","Is there another word that would do instead?"],
       ["<b>Coverage of ideas</b>","Does it let a writer say many things?"],
       ["<b>Stylistic level</b>","Is it the plain word or the fancy one?"]])
    + "<p>One of those is a count. The others are judgments made by people.</p>"
    "<p><b>Its most unusual feature.</b> Beside many headwords it prints, for each <b>sense</b> of "
    "the word, a figure for how much of that word's use that sense accounted for. A common word may "
    "have one sense that covers most of its appearances and four that cover almost none. A learner "
    "who knows the frequent sense of a frequent word can read; a learner who learned the rare sense "
    "has spent the same effort and bought much less.</p>"
    "<p><b>Where this list stops.</b> The counting behind it was done on texts written before the "
    "middle of the twentieth century, and most of them were written, not spoken. There is no "
    "computer in it, no internet, no word for most of the objects in the room you are sitting in. "
    "The selection was partly editorial: two careful people would not have chosen the same two "
    "thousand. The sense figures come from one counting exercise and are not confirmed anywhere "
    "else in the book. And West made the list to help writers produce readers &mdash; <b>not</b> as "
    "a syllabus for learners, and not as a test of anybody's vocabulary.</p>"
    "<p>Newer frequency lists exist, built from much larger collections of both written and spoken "
    "English and kept up to date. Use one of those for your own learning. Read this one to see what "
    "a list can be when somebody counts meanings and not only words.</p>"
    "<p><b>Four things it does not contain.</b> Modern technology &middot; spoken English in "
    "quantity &middot; an order to learn in &middot; any claim about a test.</p>",
    "Our summary of a published book. The center's copy is on the shelf; the senses are the part "
    "to look at."), 620)
S["qa08-f6"]=lambda: f_realia(tbl("Building the family", None,
    ["Base word","The noun","The adjective and the adverb"],
    [["<b>decide</b>","decision","decisive &middot; decisively"],
     ["<b>measure</b>","measurement","measurable &middot; measurably"],
     ["<b>select</b>","selection","selective &middot; selectively"],
     ["<b>inform</b>","information","informative &middot; informatively"],
     ["<b>necessary</b>",BLANK,BLANK],
     ["<b>frequent</b>",BLANK,BLANK]],
    note="Four cells are empty on purpose."), 620)
S["qa08-f7"]=lambda: f_chart([("to manage or operate something",59),
    ("to continue for a period",12),("to move fast on foot",11),
    ("to flow",5),("other",3)], unit="uses of run")
S["qa08-f8"]=lambda: f_icons([("book","a thin green book with a date"),
    ("note","a numbered list of two thousand"),("balance","one headword, three senses"),
    ("library","a simplified reader"),("scales","judgment against a tally"),
    ("computer","a modern frequency list")],3)
S["qa08-f9"]=lambda: f_realia(tbl("Word list &middot; extract",
    "Two headwords, with the share of use each sense accounted for in the published count",
    ["Headword","Sense","Share of that word's use"],
    [["<b>run</b>","to manage or operate","most of it"],
     ["","to move fast on foot","a small part"],
     ["","to flow","a small part"],
     ["<b>place</b>","a position or location","nearly all of it"],
     ["","to put something somewhere","a small part"]],
    note="The published book prints a percentage figure beside each sense. We have not reprinted "
    "those figures; the shape of the finding is what matters here. One sense often does most of "
    "the work."), 620)
S["qa08-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("yusuf",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("book",360,196,0.26),("form",450,198,0.22),
     ("computer",500,142,0.4),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"THE SLOT DECIDES",[("after the","a noun"),("after is","adjective")]),
    clockat=(680,44,22,16,20))
S["qa08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Exercise 1", None,
        "<p>the ______ of words &middot; is more ______ &middot; a ______ sense &middot; appears "
        "______ &middot; a question of ______</p>"
        "<p style='color:#6b6861;font-size:13px'>Every gap has a word in front of it that tells "
        "you the part of speech.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Exercise 2", None,
        "<p>______ of words &middot; more ______ &middot; ______ sense &middot; appears ______ "
        "&middot; question ______</p>"
        "<p style='color:#6b6861;font-size:13px'>The same five gaps with the signal words removed. "
        "Now you have to guess.</p>"), w)[0:3],
    w=900, h=280)
S["qa08-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>There is an old word list from 1953 in the library. It has no computers in it, so it is "
        "out of date.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>The center has a copy of a word list published in <b>1953</b>, listing about two "
        "thousand word families and calling them a general service vocabulary. It was made mainly "
        "to help writers produce simplified readers, and the words were chosen on several criteria "
        "&mdash; frequency, ease of learning, necessity, coverage of ideas and style &mdash; so "
        "judgment did some of the work. Its unusual feature is that it prints, for many words, how "
        "much of that word's use each meaning accounts for. The counting is pre-war and written, "
        "there is no modern technology in it, and newer lists are better for learning. I am going "
        "to use a modern list for words, and this one for senses.</p>"), w)[0:3],
    w=920, h=320)
S["qa08-f13"]=lambda: f_realia(form("Note planner",
    [("The book and the year",""),("What it was made for",""),("How the words were chosen",""),
     ("Its one unusual feature",""),("Where it stops",""),("What I will use it for","")]), 540)
S["qa08-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("yusuf",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("mei",365,176,{"seated":True}),("nour",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("junseo",590,170,{}),("ines",655,172,{}),
     ("samira",720,170,{}),("marek",785,172,{}),("hana",845,170,{}),
     ("oksana",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("book",350,198,0.26),
     ("printer",430,196,0.3),("library",560,198,0.24),("table",650,0,1.0),
     ("computer",860,142,0.4),("shelf",930,96,0.5)],
    board=(40,22,226,114,"ONE WORD, FIVE MEANINGS",[("run","manage"),("run","move fast")]),
    clockat=(284,34,22,17,0))
S["qa08-f15"]=lambda: f_chart([("to move fast",7),("to manage something",1),
    ("to continue",1),("to flow",0),("I do not remember",2)])
S["qa08-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Seven marks lost from words he already knows",
    table_html(["What was lost","How many marks","What kind of problem"],
      [["Wrong ending in a gap","4","grammar, not vocabulary"],
       ["The second sense of a common word","3","a word he has known since he was twelve"],
       ["Words he did not know","0","&mdash;"]])
    + "<p><b>A thin green book from 1953</b>, open at a page of senses.</p>"
    "<p><b>A tablet</b> showing a modern frequency list.</p>"
    "<p><i>Six years of English, a large vocabulary, and seven marks gone to words he already "
    "had.</i></p>",
    "Eight o'clock. Two books on the desk, and only one of them is any use this month."), 620)

# ---------------- Unit 9 ----------------
S["qa09-f1"]=lambda: f_icons([("book","a closed book and a question"),
    ("review","reading it a second time"),("pen","a highlighter on a line"),
    ("note","a page cut to three lines"),("calendar","four sessions across a week"),
    ("today","four sessions in one day"),("transfer","two subjects alternating"),
    ("speechbubble","explaining a page aloud"),("quotemark","asking why"),
    ("data","a picture drawn beside a paragraph"),("flashcard","a sound-alike keyword"),
    ("scales","high at one end, low at the other"),("library","a stack of studies"),
    ("stars","high utility"),("noentry","low utility"),("magnifier","a footnote")],4)
S["qa09-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("ines",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",390,196,0.26),("board",100,86,0.82),
     ("pen",470,198,0.2),("window",790,56,0.94)],
    board=(650,22,234,118,"TEN TECHNIQUES",[("testing","high"),("spacing","high"),("rereading","low")]),
    clockat=(600,44,22,10,0))
S["qa09-f3"]=lambda: f_icons([("stars","high: two techniques"),
    ("balance","moderate: three"),("noentry","low: five"),
    ("scales","a scale from low to high"),("library","a pile of studies"),
    ("magnifier","low does not mean useless")],3)
S["qa09-f4"]=lambda: f_realia(tbl("Team research &middot; audit your own week", None,
    ["Technique","Hours last week","Published rating","Hours next week","Why"],
    blankrows(6,5),
    note="The hour I am going to move: ______________________"), 680)
S["qa09-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to students",
    "Which study techniques the evidence supports &middot; page 1 of 1",
    "<p><b>The source.</b> J. Dunlosky, K. A. Rawson, E. J. Marsh, M. J. Nathan and D. T. "
    "Willingham, <i>Improving Students' Learning With Effective Learning Techniques</i>, "
    "Psychological Science in the Public Interest, <b>2013</b>. Printed here in our own words.</p>"
    "<p>Five researchers took <b>ten</b> study techniques that students actually use, read the "
    "published evidence on each one, and gave each a rating: <b>high</b>, <b>moderate</b> or "
    "<b>low</b> utility.</p>"
    + table_html(["Rating","The techniques given it"],
      [["<b>High</b>","practice testing &middot; distributed practice"],
       ["<b>Moderate</b>","elaborative interrogation &middot; self-explanation &middot; "
        "interleaved practice"],
       ["<b>Low</b>","summarization &middot; highlighting and underlining &middot; the keyword "
        "mnemonic &middot; imagery for text &middot; rereading"]])
    + "<p><b>Practice testing</b> is closing the book and trying to produce the answer. "
    "<b>Distributed practice</b> is spreading study across days instead of massing it in one "
    "session. Three of the five low-rated techniques are the most common study behaviors in the "
    "world.</p>"
    "<p>The authors are clear about why rereading does so badly. It produces a strong feeling of "
    "knowing, because the page is familiar the second time. Familiarity is not retrieval. Practice "
    "testing feels harder and worse, and that is partly why it works: you find out what you cannot "
    "do while there is still time to fix it.</p>"
    "<p><b>What a low rating means.</b> The ratings are the authors' <b>judgments of an evidence "
    "base</b>, not results of an experiment they ran. <b>Low</b> does not mean <i>never works</i>. "
    "It means the evidence is thin, or narrow, or has not been tested across enough materials, "
    "learners, tasks and settings. The review says so in each case, and it names what is "
    "missing.</p>"
    "<p>Most of the studies behind it were done with students learning academic content in their "
    "first language, not with adults learning a second language for an examination. The review "
    "makes no claim about language tests, about bands, or about how long any of this takes. And a "
    "technique rated high can still be used badly: testing yourself on the wrong material is still "
    "the wrong material.</p>"
    "<p><b>Four things the review does not claim.</b> Anything about this test &middot; anything "
    "about second languages &middot; that low means useless &middot; that high means easy.</p>",
    "Our summary of a published review. It is long, free and worth an evening."), 620)
S["qa09-f6"]=lambda: f_realia(tbl("Comparing usefulness", None,
    ["The form","The pattern","An example"],
    [["<b>more useful than</b>","more + adjective + than","Testing is more useful than rereading."],
     ["<b>less useful than</b>","less + adjective + than",
      "Highlighting is less useful than testing."],
     ["<b>as useful as</b>","as + adjective + as","Summarizing is not as useful as spacing."],
     ["<b>the most useful</b>","the most + adjective","Practice testing is one of the most useful."],
     ["<b>not as useful as</b>",BLANK,BLANK],
     ["<b>far more useful</b>",BLANK,BLANK]],
    note="Four cells are empty on purpose."), 640)
S["qa09-f7"]=lambda: f_matrix(["Rating"],
    [("practice testing",["<b>high</b>"]),("distributed practice",["<b>high</b>"]),
     ("elaborative interrogation",["moderate"]),("self-explanation",["moderate"]),
     ("interleaved practice",["moderate"]),("summarization",["low"]),
     ("highlighting and underlining",["low"]),("the keyword mnemonic",["low"]),
     ("imagery for text",["low"]),("rereading",["low"])], 560)
S["qa09-f8"]=lambda: f_icons([("book","a closed book and a hand over it"),
    ("calendar","sessions spread across days"),("pen","a highlighter on a line"),
    ("review","reading it a second time"),("library","a stack of studies and a scale"),
    ("magnifier","low means thin evidence")],3)
S["qa09-f9"]=lambda: f_realia(tbl("Study record &middot; week of 3 February",
    "Ines Oliveira",
    ["Day","What I did","Technique","Minutes","Book shut?"],
    [["Mon","read my notes","rereading","95","no"],
     ["Tue","highlighted a passage","highlighting","80","no"],
     ["Wed","read my notes again","rereading","100","no"],
     ["Thu","highlighted two passages","highlighting","110","no"],
     ["Fri","read the notes","rereading","90","no"],
     ["Sat","one timed section, book shut","practice testing","<b>20</b>","<b>yes</b>"],
     ["Sun","read the notes once more","rereading","165","no"]],
    note="Eleven hours. Four hours of reading, and twenty minutes with the book shut."), 640)
S["qa09-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("ines",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("book",360,196,0.26),("pen",440,198,0.18),
     ("computer",500,142,0.4),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"ELEVEN HOURS",[("book open","10.5"),("book shut","0.3")]),
    clockat=(680,44,22,18,0))
S["qa09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Record 1", None,
        "<p><b>Eleven hours</b> of reading and highlighting.<br><b>Twenty minutes</b> with the book "
        "shut.</p>"
        "<p style='color:#6b6861;font-size:13px'>One long session on Sunday.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Record 2", None,
        "<p><b>Six hours</b> with the book shut, one hour on each of six days.<br><b>Ninety "
        "minutes</b> of reading.</p>"
        "<p style='color:#6b6861;font-size:13px'>Three and a half hours less in total.</p>"), w)[0:3],
    w=900, h=280)
S["qa09-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I studied eleven hours last week. I read all my notes twice and highlighted three "
        "passages. I am going to do the same again this week.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>I studied eleven hours last week: ten and a half with the book open, twenty minutes "
        "with it shut. A published review of ten study techniques from <b>2013</b> rated practice "
        "testing and distributed practice high, and rated rereading and highlighting low &mdash; "
        "low meaning the evidence is thin, not that they never work. Most of the studies behind the "
        "review were on first-language students learning academic content, so it makes no claim "
        "about language tests. Even so, my own record shows almost no retrieval. This week I am "
        "doing six hours with the book shut, one hour on each of six days, and keeping ninety "
        "minutes for reading.</p>"), w)[0:3],
    w=920, h=320)
S["qa09-f13"]=lambda: f_realia(form("Note planner",
    [("Hours last week",""),("Hours with the book shut",""),("The techniques I used",""),
     ("Their published ratings",""),("What the review does not claim",""),
     ("My week as it will be","")]), 540)
S["qa09-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("ines",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("marek",365,176,{"seated":True}),("hana",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("mei",590,170,{}),("nour",655,172,{}),
     ("junseo",720,170,{}),("samira",785,172,{}),("oksana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("book",350,198,0.26),
     ("printer",430,196,0.3),("calendar",560,198,0.24),("table",650,0,1.0),
     ("pen",860,198,0.2),("shelf",930,96,0.5)],
    board=(40,22,222,114,"SIX SHORT, NOT ONE LONG",[("testing","high"),("rereading","low")]),
    clockat=(278,34,22,19,0))
S["qa09-f15"]=lambda: f_chart([("none",4),("under one hour",3),
    ("one to three hours",2),("three to six hours",1),("more than six",1)])
S["qa09-f16"]=lambda: f_realia(doc("On a desk at midnight",
    "Nine weeks of eleven hours, and two marks",
    table_html(["Week","Hours","Practice Reading score"],
      [["1","11","22"],["3","11","22"],["5","11","23"],["7","11","23"],["9","11","24"]])
    + "<p><b>A textbook</b>, open and yellow on both pages.</p>"
    "<p><b>One sheet</b> of answers written from memory, with four blanks on it.</p>"
    "<p><i>She is doing more than anybody else in the class and improving more slowly than two "
    "people who do five hours.</i></p>",
    "Midnight. Ninety-nine hours, and two marks out of forty."), 620)

# ---------------- Unit 10 ----------------
S["qa10-f1"]=lambda: f_icons([("data","a line falling then flattening"),
    ("quotemark","meaningless three-letter syllables"),("student","one subject, alone"),
    ("timer","a stopwatch"),("calendar","five reviews at widening gaps"),
    ("today","five reviews on one day"),("scales","time saved"),
    ("water","time poured away"),("speechbubble","a faint word"),
    ("flashcard","one word, five times"),("book","a dictionary open at savings"),
    ("library","a thin book, 1885"),("spreadsheet","an axis marked in days"),
    ("stars","held"),("noentry","lost"),("magnifier","a footnote")],4)
S["qa10-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("marek",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("note",390,196,0.24),("board",100,86,0.82),
     ("data",470,198,0.22),("window",790,56,0.94)],
    board=(650,22,234,118,"MONDAY TO THURSDAY",[("day 1","11 of 12"),("day 4","6 of 12")]),
    clockat=(600,44,22,11,30))
S["qa10-f3"]=lambda: f_icons([("data","the first hours: most of the loss"),
    ("calendar","the first days: slower"),("balance","after that: almost flat"),
    ("stars","a review before the fall"),("noentry","a review after it"),
    ("magnifier","review before you lose it")],3)
S["qa10-f4"]=lambda: f_realia(tbl("Team research &middot; your own curve", None,
    ["Day","How many I could produce","Out of","Gap since the last review","What I did"],
    blankrows(6,5),
    note="The day it stopped falling: ______________________"), 680)
S["qa10-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to students",
    "The oldest experiment in this book &middot; page 1 of 1",
    "<p><b>The source.</b> Hermann Ebbinghaus, <i>&Uuml;ber das Ged&auml;chtnis: Untersuchungen zur "
    "experimentellen Psychologie</i>, Duncker und Humblot, Leipzig, <b>1885</b>; published in "
    "English as <i>Memory: A Contribution to Experimental Psychology</i> in <b>1913</b>. Printed "
    "here in our own words.</p>"
    "<p>In the early 1880s a German psychologist decided to measure forgetting instead of "
    "describing it. He made up lists of <b>meaningless three-letter syllables</b> and learned them "
    "to a fixed standard, keeping his own timing with a metronome. Then he waited &mdash; twenty "
    "minutes, an hour, nine hours, a day, two days, six days, a month &mdash; and learned the same "
    "list again.</p>"
    "<p>What he measured was not how much he could remember. It was how much <b>time he saved</b> "
    "the second time. He called it <b>savings</b>. If relearning took far less work than learning, "
    "much of the list was still there; if it took nearly as long, almost nothing was.</p>"
    + table_html(["Part of the curve","What happens"],
      [["<b>The first hours</b>","most of the loss; the line falls steeply"],
       ["<b>The first days</b>","more loss, but slower; the line bends"],
       ["<b>After that</b>","very little further loss; the line is almost flat"]])
    + "<p>He also found that the same number of repetitions <b>spread out over days</b> was more "
    "economical than the same number crowded into one sitting.</p>"
    "<p><b>One man, nonsense, and a measure of time.</b> There was <b>one subject</b>: himself. "
    "Nobody else was tested, so nothing in the book tells you about the variation between people "
    "&mdash; and you are a person, not an average of one.</p>"
    "<p>The material was <b>meaningless on purpose</b>. He used nonsense syllables precisely so "
    "that meaning and prior knowledge could not help. That is excellent experimental design and it "
    "is also the biggest limit on the result: almost everything you will ever learn <b>has</b> "
    "meaning, and meaningful material behaves better than his syllables did.</p>"
    "<p><b>Savings</b> is a measure of relearning <b>time</b>, not of recall. A curve of savings is "
    "not a curve of what you could say out loud. He made no claim about teaching, about schools, or "
    "about any examination, and he offered no review schedule. The curves printed in study books "
    "today are usually redrawn, with numbers he never published in that form. And the modern case "
    "for spacing out your study rests on a large body of later research, not on this book.</p>"
    "<p><b>Four limits.</b> One subject &middot; no meaning &middot; time, not recall &middot; no "
    "advice.</p>",
    "Our summary of a published book from 1885. The English translation is free online and is "
    "short."), 620)
S["qa10-f6"]=lambda: f_realia(tbl("Describing a line", None,
    ["The phrase","What the line does","An example"],
    [["<b>falls steeply</b>","goes down fast","The line falls steeply in the first hours."],
     ["<b>falls gradually</b>","goes down slowly","After day two it falls gradually."],
     ["<b>levels off</b>","stops going down","It levels off after a week."],
     ["<b>is almost flat</b>","barely changes","By day thirty it is almost flat."],
     ["<b>drops sharply</b>",BLANK,BLANK],
     ["<b>remains stable</b>",BLANK,BLANK]],
    note="Four cells are empty on purpose. These are the phrases you will need in Writing Task 1 "
    "for the rest of your life."), 640)
S["qa10-f7"]=lambda: f_line([("day 1",11),("day 2",7),("day 4",5),("day 8",3)],
    unit="words of 12", w=600, ymin=0, mark=(3,"no review"))
S["qa10-f8"]=lambda: f_icons([("student","one seated figure and a metronome"),
    ("quotemark","meaningless syllables"),("timer","two learning sessions timed"),
    ("data","a falling curve"),("calendar","five reviews at widening gaps"),
    ("noentry","no advice for teachers")],3)
S["qa10-f9"]=lambda: f_realia(tbl("Review schedule &middot; starting 10 February",
    "Five reviews, fourteen minutes, eight weeks",
    ["Review","Gap","Date","Produced","Out of"],
    [["1","1 day","11 Feb","11","12"],["2","2 days","13 Feb","10","12"],
     ["3","4 days","17 Feb","10","12"],["4","8 days","25 Feb","9","12"],
     ["5","16 days","13 Mar","9","12"]],
    note="Five reviews, about three minutes each. Fourteen minutes in eight weeks."), 600)
S["qa10-f10"]=lambda: f_scene(940,430, people=[("marek",290,176,{"seated":True}),
     ("lars",400,172,{"seated":True}),("oksana",520,172,{})],
    props=[("table",230,0,1.2),("note",360,196,0.24),("computer",470,142,0.42),
     ("calendar",440,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"TWELVE WORDS",[("Marek","3 of 12"),("Oksana","9 of 12")]),
    clockat=(680,44,22,17,45))
S["qa10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Schedule 1", None,
        "<p>Reviews at <b>1, 2, 4, 8 and 16 days</b>.</p>"
        "<p style='color:#6b6861;font-size:13px'>Each review comes before the line has fallen far.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("Schedule 2", None,
        "<p>Five reviews, all on <b>the day before the test</b>. Gaps: 0, 0, 0, 0, 0.</p>"
        "<p style='color:#6b6861;font-size:13px'>The same number of repetitions, massed. More "
        "comfortable, and cheaper to plan.</p>"), w)[0:3],
    w=900, h=280)
S["qa10-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I have a bad memory. I learned twelve words on Monday and I only have three left. I "
        "will try harder.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>On Monday <b>10 February</b> I learned twelve new words and could produce eleven. I did "
        "not look at them again. On Friday I could produce three. Another student learned the same "
        "twelve, reviewed them four times at widening gaps for about three minutes each, and had "
        "nine on Friday. A study published in <b>1885</b> found that forgetting is fast at first "
        "and then slow, and that the same repetitions spread over days are more economical than "
        "massed ones &mdash; though it had one subject and used meaningless syllables, so it does "
        "not describe me exactly. My review dates for the next list are 1, 2, 4, 8 and 16 days "
        "after I learn it, and they are in my telephone.</p>"), w)[0:3],
    w=920, h=320)
S["qa10-f13"]=lambda: f_realia(form("Note planner",
    [("What I learned, and when",""),("How many on day one",""),("How many on day eight",""),
     ("What the 1885 study found",""),("Two of its limits",""),("My five review dates","")]), 540)
S["qa10-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("marek",130,172,{"seated":True}),("oksana",205,176,{"seated":True}),
     ("lars",290,172,{}),("priya",365,176,{"seated":True}),("ines",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("mei",590,170,{}),("nour",655,172,{}),
     ("junseo",720,170,{}),("hana",785,172,{}),("samira",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("note",350,198,0.24),
     ("printer",430,196,0.3),("calendar",560,198,0.24),("table",650,0,1.0),
     ("phone",860,198,0.2),("shelf",930,96,0.5)],
    board=(40,22,228,114,"1, 2, 4, 8, 16",[("day 1","11"),("day 8","9")]),
    clockat=(284,34,22,18,0))
S["qa10-f15"]=lambda: f_chart([("the same day",1),("within two days",2),
    ("within a week",2),("only before a test",5),("never",1)])
S["qa10-f16"]=lambda: f_realia(doc("On a desk late at night",
    "Four lists, the same four numbers every time",
    table_html(["List","Day 1","Day 2","Day 4","Day 8"],
      [["List 1","12","8","6","3"],["List 2","11","7","5","3"],
       ["List 3","12","8","5","3"],["List 4","11","7","5","3"]])
    + "<p><b>A review schedule</b> with five empty rows.</p>"
    "<p><b>A telephone</b> with no reminders set.</p>"
    "<p><i>Twelve weeks, and eleven hundred words he intends to learn. He has read the 1885 study "
    "and accepts it, and he has told the class twice that he learns best under pressure.</i></p>",
    "One o'clock. Nearly all of them on day one, about a quarter of them by day eight, every time."
    ), 640)
