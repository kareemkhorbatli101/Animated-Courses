# -*- coding: utf-8 -*-
"""Plumbline Book 6 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Starting Point ----------------
S["qf00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each, from a spoken answer",
    ["What you have","An example"],
    [["Fluency fillers","<i>Well, I suppose</i> &middot; <i>That's an interesting question</i>"],
     ["Paraphrase","<i>or rather</i> &middot; <i>what I mean is</i>"],
     ["Opinion language","<i>Personally, I'd say</i> &middot; <i>I'd argue that</i>"],
     ["Comparison","<i>far more than</i> &middot; <i>nothing like as</i>"],
     ["The past","<i>I used to</i> &middot; <i>I'd never actually</i>"],
     ["Hypothesis","<i>If I had to choose</i> &middot; <i>Supposing</i>"]],
    note="Six boxes, and you have all of them. What this book is about is the thirty words you keep "
    "putting in them."), 620)
S["qf00-f2"]=lambda: f_realia(tbl("The three parts", None,
    ["Part","What happens","How long"],
    [["<b>1</b>","Introduction and familiar topics: where you live, work, study, free time",
      "4 to 5 minutes"],
     ["<b>2</b>","A card with a topic and three or four prompts; one minute to prepare, one to two "
      "to speak","3 to 4 minutes"],
     ["<b>3</b>","A discussion of abstract questions connected to the Part 2 topic",
      "4 to 5 minutes"]],
    numcols=(0,),
    note="Three parts, three sets of conditions, and Unit 7 is about why that matters."), 660)
S["qf00-f3"]=lambda: f_realia(doc("Taped inside a notebook",
    "Two answers to the same question",
    "<p style='font-size:15px;line-height:1.9'>"
    "<b>&#10007; I think reading is very good. It is good for your mind and it is good for your "
    "knowledge. I think everyone should read because it is good for them.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Four different content words. No errors.</span><br><br>"
    "<b>&#10003; I read less than I used to, which I regret rather than excuse. What I notice is that "
    "I read differently &mdash; in ten-minute pieces, on a screen, and almost never anything long "
    "enough to change my mind about something.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Eleven different content words. No errors.</span>"
    "</p>",
    "Both accurate. One of them is a band higher, and it is not because of the grammar."), 620)
S["qf00-f4"]=lambda: f_part("Fourteen minutes, spent",
    [("Part 1: 4 to 5 min",5,"#4a3b6b"),("The card: 1 min",1,"#8a5a1e"),
     ("Part 2: 1 to 2 min",2,"#3f6b2f"),("Part 3: 4 to 5 min",5,"#6b2f4a")], 560)

# ---------------- Unit 1 ----------------
S["qf01-f1"]=lambda: f_icons([("review","Fluency and Coherence"),("book","Lexical Resource"),
    ("proof","Grammatical Range and Accuracy"),("speechbubble","Pronunciation"),
    ("star","a band figure in a box"),("recorder","a recorder"),
    ("clipboard","an examiner's clipboard"),("note","a hesitation marked"),
    ("pen","a self-correction"),("magnifier","one phrase, circled four times"),
    ("thread","a fan of synonyms"),("tally","a stress mark"),
    ("library","a published descriptor page"),("timer","a stopwatch"),
    ("scales","four equal quarters"),("danger","and a question mark")],4)
S["qf01-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("nour",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("clipboard",392,196,0.24),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"RANGE &times; 3",[("FC","range"),("LR","range"),("GRA","range")]),
    clockat=(622,44,22,9,0))
S["qf01-f3"]=lambda: f_icons([("thread","speech flowing"),("review","ideas connected"),
    ("book","a fan of words"),("proof","a complex sentence, correct"),
    ("tally","a stressed syllable"),("scales","four equal quarters")],3)
S["qf01-f4"]=lambda: f_realia(tbl("Team research &middot; count your own range", None,
    ["The phrase","Times I said it","Alternatives I know","Alternatives I used","Next time"],
    br(6,5),
    note="The phrase I overuse most: ______________________"), 700)
S["qf01-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Speaking class",
    "The word that runs through three of the four criteria &middot; page 1 of 1",
    "<p><b>The source.</b> The published Speaking band descriptors and the public statement of how "
    "Speaking is assessed, from the test owners' own pages. Downloaded <b>7 June</b>. Printed here in "
    "our own words.</p>"
    + table_html(["The criterion","What it asks of you"],
      [["<b>Fluency and Coherence</b>","speaking at length with little noticeable effort; connecting "
        "ideas; hesitation that is about content rather than language"],
       ["<b>Lexical Resource</b>","the range and the precision of the vocabulary, including "
        "paraphrase"],
       ["<b>Grammatical Range and Accuracy</b>","the range of structures used as well as how "
        "accurately they are formed"],
       ["<b>Pronunciation</b>","being understood with little effort; using features of pronunciation "
        "to convey meaning"]])
    + "<p>Read the band 7 and band 8 wording side by side. Around <b>band 7</b>: speaks at length with "
    "some hesitation, a <b>flexible</b> vocabulary, a <b>range</b> of structures, <b>frequent</b> "
    "error-free sentences. Around <b>band 8</b>: hesitates only <b>occasionally</b> and only for "
    "content, vocabulary <b>wide</b> and used <b>precisely</b>, errors <b>rare</b>.</p>"
    "<p>Three observations, none about making fewer mistakes. <b>Range is in three of the four.</b> "
    "<b>Hesitation is distinguished by its cause</b> &mdash; a speaker who never pauses because they "
    "only say what they can already say has bought fluency with range. And <b>paraphrase is named</b>, "
    "so reaching for exactly one phrasing per idea misses a stated requirement.</p>"
    "<p><b>A scale, not a method.</b> The descriptors describe what each band looks like; they do not "
    "say how to get there, name no vocabulary and prescribe no answers. They are the <b>public</b> "
    "versions; fuller descriptors are used in examiner training and are not published. And a "
    "descriptor is not a diagnosis: <i>a narrow range</i> names what a marker heard, not why you have "
    "one &mdash; which is what the other eleven units are for.</p>",
    "Our summary of a published scale. Read the owners' own pages, and write down the date."), 640)
S["qf01-f6"]=lambda: f_realia(tbl("Self-correction", None,
    ["The repair","What it signals","An example"],
    [["<i>or rather</i>","a word was wrong","a ban, or rather a restriction"],
     ["<i>what I mean is</i>","the whole idea needs restating","What I mean is that nobody checks."],
     ["<i>let me put that differently</i>","you are about to paraphrase","Let me put that differently."],
     ["<i>that is not quite right</i>","you are withdrawing a claim","That is not quite right &mdash; it was 2019."],
     ["<i>I should say</i>",B,B],
     ["<i>to be more precise</i>",B,B]],
    note="Four cells are empty on purpose. A mistake made visible is rewarded, not penalized."), 700)
S["qf01-f7"]=lambda: f_chart([("I think",11),("very",9),("good",7),("important",6),
    ("a lot of",5)], unit="times in 14 minutes", w=560)
S["qf01-f8"]=lambda: f_icons([("note","one error in a sentence"),("review","no errors, four words"),
    ("proof","a complex sentence, correct"),("magnifier","a repeated phrase"),
    ("thread","a paraphrase"),("scales","which criterion is this?")],3)
S["qf01-f9"]=lambda: f_realia(doc("Part 2 card &middot; practice",
    "You have one minute to prepare. You may make notes.",
    "<p><b>Describe a decision you made that you would make differently now.</b></p>"
    "<p>You should say:</p>"
    "<p style='margin-left:16px'>&middot; what the decision was<br>"
    "&middot; when you made it<br>"
    "&middot; why you made it at the time<br>"
    "&middot; <b>and explain what you would do differently and what changed your mind</b></p>",
    "<b>Four prompts, and the fourth one is the interesting one.</b>"), 620)
S["qf01-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("nour",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("note",366,198,0.22),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"TWO ERRORS",[("errors","2"),("I think","11")]),
    clockat=(630,42,22,4,30))
S["qf01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Transcript A &middot; 42 words", None,
      "<p><i>I think reading is very good. It is good for your mind&hellip;</i></p>"
      "<p>Different content words: <b>4</b>. Errors: <b>0</b>.</p>", "LR 6.0"), 380)[0:3],
    lambda w,h: f_realia(doc("Transcript B &middot; 61 words", None,
      "<p><i>I read less than I used to, which I regret rather than excuse&hellip;</i></p>"
      "<p>Different content words: <b>14</b>. Errors: <b>1</b>.</p>", "LR 7.5"), 380)[0:3],
    800, 310, "Four words, no errors", "Fourteen words, one error")
S["qf01-f12"]=lambda: f_realia(doc("Two answers to one Part 3 question", None,
    "<p><b>Answer 1.</b> <i>I think museums are very important for society. They are good for "
    "education and good for culture. I think everyone should visit museums because they are very good "
    "for your knowledge.</i></p>"
    "<p><b>Answer 2.</b> <i>Museums do something no school can, which is to put the actual object in "
    "front of you &mdash; or rather, that is what the good ones do; a great many are collections of "
    "captions with objects attached.</i></p>",
    "The second one has a self-correction in it, and a claim somebody could argue with."), 620)
S["qf01-f13"]=lambda: f_realia(form("Part 3 planner",
    [("The question",B),("My opinion in one sentence",B),
     ("Three content words I will use",B),("One paraphrase",B),
     ("One self-correction",B),("The phrase I will not say",B)],
    note="The last box is the one that moves the band."), 600)
S["qf01-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("nour",340,190,{"seated":True}),("grace",470,184,{}),
     ("lars",560,188,{"seated":True}),("marek",660,186,{}),("mei",740,190,{"seated":True}),
     ("hana",830,186,{}),("junseo",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("recorder",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"HOW MANY WAYS CAN YOU SAY IT?",
      [("FC","range"),("LR","range"),("GRA","range"),("P","meaning")]),
    clockat=(650,40,22,10,0))
S["qf01-f15"]=lambda: f_chart([("Yes, all four criteria",2),("Yes, one or two",3),
    ("No, I did not know they exist",4),("Seen but not read",2)], w=560)
S["qf01-f16"]=lambda: f_realia(doc("On the desk, June",
    "One transcript and two descriptor pages",
    "<p><b>Circled eleven times:</b> <i>I think</i>.</p>"
    "<p><b>Marked in a different color:</b> two errors, in fourteen minutes.</p>"
    "<p><b>Four practice tests, four figures:</b> 7.0 &middot; 7.0 &middot; 7.0 &middot; 7.0</p>"
    "<p><b>What she needs:</b> 7.5. <b>Circled in the descriptors:</b> the band 8 row.</p>",
    "Two errors in fourteen minutes is a band-8 performance. Eleven repetitions of two words is "
    "not."), 620)

# ---------------- Unit 2 ----------------
S["qf02-f1"]=lambda: f_icons([("tree","a word family"),("thread","a lemma"),
    ("racking","a corpus of texts"),("library","nine disciplines"),
    ("review","a ratio"),("tally","a frequency count"),
    ("data","a dispersion diagram"),("scales","a coverage percentage"),
    ("danger","the first two thousand, crossed out"),("pricetag","a part-of-speech tag"),
    ("book","a journal page dated 2014"),("magnifier","a table, closely read"),
    ("proof","a tick"),("note","a cross"),("notebook","a syllabus"),
    ("speechbubble","a question over a word")],4)
S["qf02-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("marek",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"ONE WORD, OR FOUR?",[("family","8 branches"),("lemma","3 forms")]),
    clockat=(622,44,22,9,30))
S["qf02-f3"]=lambda: f_icons([("review","a ratio"),("library","range across disciplines"),
    ("data","dispersion"),("tally","a discipline spike"),
    ("thread","a lemma with inflections"),("magnifier","four tests a word had to pass")],3)
S["qf02-f4"]=lambda: f_realia(tbl("Team research &middot; the four forms", None,
    ["The lemma","The noun","The verb","The adjective","Which I can say"],
    br(8,5),
    note="The form I could not use: ______________________"), 700)
S["qf02-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Speaking class",
    "Which words academic English actually uses &middot; page 1 of 1",
    "<p><b>The source.</b> Dee Gardner and Mark Davies, <i>A New Academic Vocabulary List</i>, "
    "Applied Linguistics, <b>2014</b>. Printed here in our own words.</p>"
    "<p>The paper builds a list of academic vocabulary from the academic section of a very large "
    "corpus of American English &mdash; around a hundred and twenty million words, from nine broad "
    "disciplines. The list is about three thousand items and the authors report that it accounts for "
    "roughly fourteen per cent of the words in academic texts.</p>"
    + table_html(["The criterion","What it required"],
      [["<b>ratio</b>","much more frequent in academic than in non-academic text"],
       ["<b>range</b>","occurring across the disciplines rather than in one"],
       ["<b>dispersion</b>","spread evenly rather than clustered in a few texts"],
       ["<b>discipline measure</b>","no single discipline accounting for most occurrences"]])
    + "<p>It is also, explicitly, an argument against the list that preceded it &mdash; the one this "
    "series taught in <b>Book 3, Unit 5</b>. <b>It excluded the commonest two thousand words</b>, and "
    "the authors object that many of them have distinctively academic senses: <i>figure</i>, "
    "<i>process</i>, <i>value</i>, <i>rate</i>. And <b>it counted word families rather than "
    "lemmas</b>: knowing one member of a family does not give you the others, and the grammatical "
    "behavior of <i>analysis</i> and <i>analytical</i> is completely different.</p>"
    "<p><b>One corpus, one variety, one period.</b> A list built from British academic writing, or "
    "from a different period, would not be identical. The <b>coverage figure depends on what it is "
    "measured against</b>. The lemma decisions involve <b>judgment</b>. And the authors are clear that "
    "this is <b>a list, not a syllabus</b>.</p>"
    "<p><b>One further thing, about this series rather than the paper.</b> Book 3 taught you the "
    "earlier list. We think it was worth teaching. But you were taught a method this paper argues "
    "against, and you should know that.</p>",
    "Our summary of a published paper, named with its journal and its year."), 640)
S["qf02-f6"]=lambda: f_realia(tbl("The four forms", None,
    ["The verb","The noun","The adjective","The adverb"],
    [["<b>analyze</b>","analysis","analytical","analytically"],
     ["<b>derive</b>","derivation","derivative","derivatively"],
     ["<b>specify</b>","specification","specific","specifically"],
     ["<b>assume</b>","assumption","assumed","presumably"],
     ["<b>imply</b>",B,B,B],
     ["<b>constitute</b>",B,B,B]],
    note="Six cells are empty on purpose. The adverb column is the one nobody reaches for."), 680)
S["qf02-f7"]=lambda: f_matrix(["Its everyday sense","Its academic sense"],
    [("<i>figure</i>",["a number, or a person's shape","a diagram, or a quantity reported"]),
     ("<i>process</i>",["a procedure","a sequence of changes being studied"]),
     ("<i>value</i>",["worth","a measured quantity"]),
     ("<i>rate</i>",["speed, or a charge","a quantity per unit of something"]),
     ("<i>subject</i>",["a topic","the person studied, or what a sentence is about"]),
     ("<i>significant</i>",["important","unlikely to have arisen by chance"])], 660)
S["qf02-f8"]=lambda: f_icons([("tree","a tree with eight branches"),("thread","one branch, three inflections"),
    ("pricetag","a part-of-speech tag"),("balance","two senses of one word"),
    ("scales","a coverage percentage"),("magnifier","which unit is being counted?")],3)
S["qf02-f9"]=lambda: f_realia(tbl("Part 3 questions &middot; practice",
    "One common word in its academic sense in each. The words are underlined.",
    ["","The question"],
    [["1","Do you think the <u>figures</u> governments publish are generally trusted?"],
     ["2","How has the <u>process</u> of applying to university changed?"],
     ["3","Is the <u>value</u> of a degree easy to measure?"],
     ["4","Why do you think the <u>rate</u> of change is faster in some fields?"]],
    numcols=(0,),
    note="<b>The examiner's question uses the word in one sense; make sure you answer in the same "
    "one.</b>"), 640)
S["qf02-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("marek",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("note",360,198,0.22),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"THREE CIRCLES",[("words","known well"),("forms","wrong")]),
    clockat=(630,42,22,10,0))
S["qf02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before", None,
      "<p><i>The analytical of the data showed a pattern, and there are many significants.</i></p>"
      "<p>Wrong forms: <b>2</b>. Words known well: <b>2</b>.</p>", "LR 6.5"), 380)[0:3],
    lambda w,h: f_realia(doc("After", None,
      "<p><i>The analysis showed a pattern, and several of the differences were significant.</i></p>"
      "<p>Wrong forms: <b>0</b>. Same two words.</p>", "LR 7.0"), 380)[0:3],
    800, 310, "Same vocabulary", "Correct forms")
S["qf02-f12"]=lambda: f_realia(doc("Two answers to one Part 3 question", None,
    "<p><b>Answer 1.</b> <i>The analytical of this problem is very difficult because there are many "
    "significants. In my opinion the process is very big and the value of it is high for the "
    "society.</i></p>"
    "<p><b>Answer 2.</b> <i>The analysis is harder than it looks, because the quantities that matter "
    "are not the ones that get reported. The rate of change is more informative than the level, and "
    "almost nobody quotes it; the figure that reaches a newspaper is nearly always a total.</i></p>",
    "Three wrong forms against none, and the second answer uses three common words in their academic "
    "senses."), 640)
S["qf02-f13"]=lambda: f_realia(form("Form planner",
    [("The question",B),("Four words I will use",B),("Their parts of speech",B),
     ("One common word in its academic sense",B),("The form I am least sure of",B)],
    note="Say the contents of the last box aloud before you need it."), 580)
S["qf02-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("marek",340,190,{"seated":True}),("grace",470,184,{}),
     ("hana",560,188,{"seated":True}),("ines",660,186,{}),("tomas",740,190,{"seated":True}),
     ("yusuf",830,186,{}),("nour",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("book",430,208,0.26),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"ONE WORD, OR FOUR?",
      [("family","1 item"),("lemmas","4 items")]),
    clockat=(650,40,22,11,0))
S["qf02-f15"]=lambda: f_chart([("learn new words",5),("learn forms of words I know",1),
    ("learn collocations",2),("learn phrases",2),("read and hope",1)], w=580)
S["qf02-f16"]=lambda: f_realia(doc("On the desk, evening",
    "Three word-forms circled, and a page from Book 3",
    "<p><b>The three:</b> <i>analytical</i> for <i>analysis</i>, <i>significants</i> for "
    "<i>differences</i>, <i>process</i> used loosely.</p>"
    "<p><b>All three are words he has read hundreds of times.</b></p>"
    "<p><b>Lexical Resource:</b> 7.0. <b>Examiner's note:</b> <i>occasional imprecision</i>.</p>"
    "<p><b>Beside it:</b> the page from Book 3 of this course that taught him the earlier list.</p>",
    "He knows the words. He does not know which form arrives under pressure."), 640)

# ---------------- Unit 3 ----------------
S["qf03-f1"]=lambda: f_icons([("thread","two words joined"),("spreadsheet","a concordance"),
    ("racking","a corpus"),("square","a slot with alternatives above it"),
    ("packet","a phrase stored whole"),("note","a delexical verb and a noun"),
    ("tally","a pair with a frequency count"),("happy","a word with a positive flavor"),
    ("sad","a word with a negative flavor"),("book","a dictionary page"),
    ("library","a book dated 1991"),("magnifier","a concordance, closely read"),
    ("proof","a tick"),("danger","a cross"),("scissors","an adjective crossed out"),
    ("pen","and the one that is said")],4)
S["qf03-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("hana",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"ONE OF FOUR",[("rain","heavy"),("wind","strong"),("mistake","big")]),
    clockat=(622,44,22,10,0))
S["qf03-f3"]=lambda: f_icons([("square","slots with alternatives"),("packet","a stored phrase"),
    ("note","a delexical verb"),("spreadsheet","five concordance lines"),
    ("happy","a word with a flavor"),("magnifier","built, or retrieved?")],3)
S["qf03-f4"]=lambda: f_realia(tbl("Team research &middot; collect the collocates", None,
    ["The noun","The adjective everybody uses","Three that are wrong","The verb","Where we found it"],
    br(6,5),
    note="The one we would have got wrong: ______________________"), 700)
S["qf03-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Speaking class",
    "What fluent speakers retrieve instead of building &middot; page 1 of 1",
    "<p><b>The source.</b> John Sinclair, <i>Corpus, Concordance, Collocation</i>, Oxford University "
    "Press, <b>1991</b>. Printed here in our own words.</p>"
    "<p>The book comes out of a dictionary project. Its author spent years reading "
    "<b>concordances</b> &mdash; every occurrence of a word in a large corpus, lined up so the word "
    "sits in a column with its surroundings &mdash; and the book reports what he concluded.</p>"
    + table_html(["The principle","What it says"],
      [["the <b>open-choice</b> principle","a text is a series of slots, and at each slot any word "
        "the grammar allows may occur. This is how grammars describe language and how most teaching "
        "treats it."],
       ["the <b>idiom</b> principle","a speaker has available a very large number of "
        "<b>semi-preconstructed phrases</b>, and normal text is largely built out of them rather than "
        "word by word"]])
    + "<p>The claim is that the <b>idiom principle accounts for more of normal text</b>, and that the "
    "open-choice model survives because it is what grammars can describe. Two consequences: "
    "<b>collocation is not decoration</b> &mdash; <i>heavy rain</i>, <i>strong wind</i>, <i>a big "
    "mistake</i> are interchangeable in the grammar and not in the language &mdash; and <b>a word's "
    "meaning is partly its company</b>.</p>"
    "<p>For a speaker: widening your range by collecting single words produces exactly this error. "
    "Widening it by collecting <b>phrases</b> produces something that sounds like English, because it "
    "is what English speakers have stored.</p>"
    "<p><b>An argument from concordance lines.</b> Built from one lexicographer's reading of one "
    "corpus of its period. It reports <b>no experiment</b>: nobody's speech was tested and no "
    "psychological claim about storage was demonstrated. The central claim is <b>not quantified</b>. "
    "Parts of it remain <b>contested</b>. And it is largely about written text, by an author arguing "
    "for a method of making dictionaries, which he says.</p>",
    "Our summary of a published book. The advice about collecting phrases is ours."), 640)
S["qf03-f6"]=lambda: f_realia(tbl("The word that goes with it", None,
    ["The noun","What goes with it","What does not"],
    [["<b>rain</b>","heavy","<i>strong, powerful, big</i>"],
     ["<b>wind</b>","strong","<i>heavy, hard, large</i>"],
     ["<b>mistake</b>","a big one","<i>a heavy one, a strong one</i>"],
     ["<b>criticism</b>","fierce, trenchant","<i>heavy, powerful, large</i>"],
     ["<b>evidence</b>",B,B],
     ["<b>difference</b>",B,B]],
    note="Four cells are empty on purpose. None of these pairings has a reason."), 680)
S["qf03-f7"]=lambda: f_realia(tbl("A concordance of eight lines",
    "The node is <b>break down</b>.",
    ["","The line"],
    [["1","&hellip;months of negotiation before the talks finally <b>broke down</b> completely&hellip;"],
     ["2","&hellip;the machine <b>broke down</b> on the second day of the trial&hellip;"],
     ["3","&hellip;his health <b>broke down</b> under the strain of the inquiry&hellip;"],
     ["4","&hellip;the marriage <b>broke down</b> within two years of the move&hellip;"],
     ["5","&hellip;the figures <b>break down</b> into four roughly equal groups&hellip;"],
     ["6","&hellip;the argument <b>breaks down</b> as soon as demand is allowed to vary&hellip;"],
     ["7","&hellip;the engine <b>broke down</b> twice on the way to the coast&hellip;"],
     ["8","&hellip;the sample <b>breaks down</b> by age, income and region&hellip;"]],
    numcols=(0,),
    note="Two senses. One of them is almost always about something unwelcome."), 700)
S["qf03-f8"]=lambda: f_icons([("square","empty slots"),("packet","one block"),
    ("note","a delexical verb"),("thread","a collocation"),
    ("form","a frame with a slot"),("magnifier","built, or reached for?")],3)
S["qf03-f9"]=lambda: f_realia(doc("Part 2 card &middot; practice, with frames",
    "One minute to prepare. Five frames printed for you.",
    "<p><b>Describe a book or article that changed your mind about something.</b></p>"
    "<p>You should say what it was, when you read it, what you thought before, <b>and explain what "
    "changed and why.</b></p>"
    "<p style='background:#f0eef5;padding:8px;border-left:3px solid #4a3b6b'>"
    "<b>The question is whether ___</b> &middot; <b>What strikes me about ___ is ___</b> &middot; "
    "<b>I don't see why ___</b> &middot; <b>There is a case for ___</b> &middot; <b>It is not so much "
    "___ as ___</b></p>",
    "<b>One minute to prepare, and the frames are what the minute is for.</b>"), 640)
S["qf03-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("hana",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("note",360,198,0.22),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"FOUR CIRCLES",[("grammar","0 errors"),("pairs","4 wrong")]),
    clockat=(630,42,22,10,30))
S["qf03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Built from the meaning", None,
      "<p><i>a strong difference &middot; to lift a question &middot; a big criticism &middot; to do "
      "a mistake</i></p><p>Grammar errors: <b>0</b>. Collocation errors: <b>4</b>.</p>",
      "Every word correct, every pair wrong."), 380)[0:3],
    lambda w,h: f_realia(doc("Reached for whole", None,
      "<p><i>a marked difference &middot; to raise a question &middot; fierce criticism &middot; to "
      "make a mistake</i></p><p>Grammar errors: <b>0</b>. Collocation errors: <b>0</b>.</p>",
      "The same eight words."), 380)[0:3],
    800, 310, "Assembled", "Retrieved")
S["qf03-f12"]=lambda: f_realia(doc("Two answers to one Part 3 question", None,
    "<p><b>Answer 1.</b> <i>There is a strong difference between the two systems and I want to lift a "
    "question about the cost. The evidence is very powerful but there was also a big criticism about "
    "it, and somebody did a mistake in the first year.</i></p>"
    "<p><b>Answer 2.</b> <i>The question is whether the difference is sharp enough to matter, and I "
    "would raise a further question about who pays for it. The evidence is strong, though it has "
    "attracted fierce criticism; the serious mistake was made in the first year and has been repeated "
    "since.</i></p>",
    "Four collocation errors against none, and not a grammar error in either."), 640)
S["qf03-f13"]=lambda: f_realia(form("Collocation planner",
    [("The question",B),("Four collocations I will use",B),("Two frames",B),
     ("The pairing I am least sure of",B),("The word I will not say",B)],
    note="Say the fourth box aloud and let somebody challenge it."), 580)
S["qf03-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("hana",340,190,{"seated":True}),("lars",470,184,{}),
     ("mei",560,188,{"seated":True}),("oksana",660,186,{}),("samira",740,190,{"seated":True}),
     ("chiamaka",830,186,{}),("marek",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("book",430,208,0.26),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"BUILT, OR RETRIEVED?",
      [("rain","heavy"),("wind","strong"),("mistake","big")]),
    clockat=(650,40,22,12,0))
S["qf03-f15"]=lambda: f_chart([("the word alone",2),("the word with a translation",4),
    ("the word in a phrase",2),("the word in a full sentence",2),("I do not record them",1)], w=580)
S["qf03-f16"]=lambda: f_realia(doc("On the desk, afternoon",
    "Four collocations circled, no grammar errors marked",
    "<p><b>The four:</b> <i>a strong difference</i>, <i>to lift a question</i>, <i>a big "
    "criticism</i>, <i>to do a mistake</i>.</p>"
    "<p><b>Grammatical Range and Accuracy:</b> 7.5. <b>Lexical Resource:</b> 6.5.</p>"
    "<p><b>Asked afterwards:</b> she produced the right word for every one of the four within two "
    "seconds.</p>"
    "<p><b>Beside it:</b> a book dated 1991 and a concordance of eight lines.</p>",
    "She knew all eight words. She was building the pairs."), 640)
