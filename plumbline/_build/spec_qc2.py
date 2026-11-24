# -*- coding: utf-8 -*-
"""Plumbline Book 3 figure specs, Units 4 to 7."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 4 ----------------
S["qc04-f1"]=lambda: f_icons([("essay","one word in twenty replaced"),
    ("review","one in ten"),("noentry","one in five"),
    ("form","a comprehension test"),("pen","a written recall sheet"),
    ("balance","a pie with a thin slice"),("door","a threshold"),
    ("queue","some readers through, some not"),("book","a dictionary with a line through it"),
    ("quotemark","a nonsense word in a slot"),("thread","an affix circled"),
    ("flashcard","a word class card"),("library","a journal cover dated 2000"),
    ("stars","a tick"),("scissors","a cross"),("proof","a footnote")],4)
S["qc04-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("marek",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("essay",390,196,0.24),("board",100,86,0.82),
     ("library",470,198,0.24),("window",790,56,0.94)],
    board=(650,22,234,118,"ONE IN TWENTY",[("read it","yes"),("retell it","no")]),
    clockat=(600,44,22,10,30))
S["qc04-f3"]=lambda: f_icons([("essay","full coverage"),("review","one word in twenty unknown"),
    ("noentry","one in ten"),("scissors","one in five"),
    ("door","ninety-eight per cent"),("magnifier","a proportion of readers, not a switch")],3)
S["qc04-f4"]=lambda: f_realia(tbl("Team research &middot; make your own densities", None,
    ["The version","Unknown words in a hundred","Questions right","Could I retell it","How it felt"],
    br(4,5),
    note="The version where it stopped working: ______________________"), 680)
S["qc04-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Reading class",
    "How many unknown words a reader can carry &middot; page 1 of 1",
    "<p><b>The source.</b> M. Hsueh-Chao Hu and I. S. P. Nation, <i>Unknown vocabulary density and "
    "reading comprehension</i>, Reading in a Foreign Language, <b>2000</b>. Printed here in our own "
    "words.</p>"
    "<p>Book 1 of this series gave you <b>coverage</b>: the share of the running words on a page that "
    "you already know. This study asks the obvious next question. <b>What happens to comprehension as "
    "coverage falls?</b></p>"
    "<p>The method is simple and clever. The researchers took one text and <b>replaced</b> some of its "
    "words with invented ones, so that they could set the density of unknown words exactly, and "
    "measured comprehension with questions and with a written retelling.</p>"
    + table_html(["Coverage","Unknown words","What the study found"],
      [["<b>100 per cent</b>","none","nearly all readers reached adequate comprehension"],
       ["<b>95 per cent</b>","one in twenty","only a <b>minority</b> did"],
       ["<b>90 per cent</b>","one in ten","very few did"],
       ["<b>80 per cent</b>","one in five","almost nobody did"]])
    + "<p>From that shape the authors suggest that the coverage needed for <b>unassisted</b> "
    "comprehension is probably around <b>98 per cent</b> &mdash; about <b>one unknown word in "
    "fifty</b>.</p>"
    "<p>Put that next to the arithmetic of Unit 1. If you meet one unknown word in twenty on a "
    "Reading passage, you are at the density where most readers in this study could not retell the "
    "text. You will still answer some questions, because some questions do not need the whole text. "
    "You will not be reading in the way you think you are reading.</p>"
    "<p><b>One text, one group, and a probable threshold.</b> This is one study, using one text, which "
    "was <b>fiction</b>, with one group of learners and one pair of comprehension measures. Academic "
    "prose is not fiction and the figures might not transfer. The unknown words were <b>invented</b>: "
    "a nonsense word announces itself, while a real word you do not know may look familiar and may "
    "mislead you rather than simply stopping you. The thresholds are <b>proportions of readers, not "
    "switches</b> &mdash; at 95 per cent a minority understood enough, so 95 is not a wall but a "
    "place where most people fail and some do not. The 98 per cent figure is offered as "
    "<b>probable</b>, and the authors say so. And it is a study of comprehension, not of examinations: "
    "it says nothing about answering question types under time pressure and nothing about anybody's "
    "band.</p>",
    "Our summary of a published paper. It is open access, short and worth reading in full."), 620)
S["qc04-f6"]=lambda: f_realia(tbl("Word class from the slot", None,
    ["The sentence with an invented word","The word class","What told you"],
    [["<i>The samples were <b>grelled</b> before testing.</i>","verb, past participle",
      "<i>were</i> + <i>-ed</i>, before <i>before</i>"],
     ["<i>A second <b>plandic</b> was recorded.</i>","noun",
      "after <i>a second</i>, before <i>was</i>"],
     ["<i>The results were surprisingly <b>mordant</b>.</i>","adjective",
      "after <i>were surprisingly</i>"],
     ["<i>They worked <b>flantly</b> for three years.</i>",B,B],
     ["<i>The <b>grelling</b> of the samples took a week.</i>",B,B]],
    note="Four cells are empty on purpose. Knowing the class does not give you the meaning; it gives "
    "you the gap."), 660)
S["qc04-f7"]=lambda: f_line([("100%",95),("95%",40),("90%",15),("80%",3)],
    unit="share of readers", w=600, ymin=0, mark=(1,"a minority"))
S["qc04-f8"]=lambda: f_icons([("essay","one word in twenty replaced"),
    ("review","one in ten"),("noentry","one in five"),
    ("door","ninety-eight"),("queue","some readers through"),
    ("magnifier","one text, one group, fiction")],3)
S["qc04-f9"]=lambda: f_realia(doc("Practice passage extract &middot; with a glossary",
    "Five words replaced, two of them glossed at the foot",
    "<p>The <b>grelling</b> of the samples was carried out in two stages. In the first, a second "
    "<b>plandic</b> was recorded for each site, and the results were compared with the "
    "<b>mordant</b> readings taken in the previous season. The team worked <b>flantly</b> through the "
    "summer, and by September every <b>crelt</b> had been catalogued.</p>"
    + table_html(["Glossary","Meaning"],
      [["<b>grelling</b>","the process of washing and sorting a sample"],
       ["<b>crelt</b>","a single item recovered from one site"]])
    + "<p style='font-size:13px;color:#6b6861'><b>Questions.</b> 1 How many stages? 2 What was "
    "compared with the mordant readings? 3 By when was the cataloguing finished? 4 What is a "
    "crelt?</p>",
    "Two of the five replaced words are in the glossary and nobody read it. All four questions can be "
    "answered anyway. Our own passage, written for this book."), 620)
S["qc04-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("marek",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("essay",360,196,0.24),("computer",490,142,0.42),
     ("note",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"FOUR MINUTES",[("for","one word"),("in","no question")]),
    clockat=(680,44,22,11,0))
S["qc04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Version A", None,
        "<p>One word in twenty replaced.</p>"
        "<p style='color:#6b6861;font-size:13px'>Readable. Retelling thin but possible.</p>"),
        w)[0:3],
    lambda w,h: f_realia(doc("Version B", None,
        "<p>One word in ten replaced.</p>"
        "<p style='color:#6b6861;font-size:13px'>Every word still pronounceable, and the reader "
        "cannot say what happened.</p>"), w)[0:3],
    w=900, h=260)
S["qc04-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I did not understand the second passage because there were too many words I did not know. "
        "I need a bigger vocabulary.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>On <b>16 May</b> I counted a hundred running words of the second practice passage and did "
        "not know six, so my coverage of it was about <b>94 per cent</b>. A study published in 2000 "
        "replaced words in a text with invented ones and found that at 95 per cent coverage only a "
        "minority of readers reached adequate comprehension, at 90 per cent very few did, and that "
        "unassisted comprehension probably needs around 98 per cent &mdash; about one unknown word in "
        "fifty. It used one fiction text, one group of learners and invented rather than real unknown "
        "words, and says nothing about examinations, so the figures are a shape rather than a "
        "specification. Two things follow: I need more academic vocabulary, and on the day I read the "
        "glossary and never stop for a word no question asks about.</p>"), w)[0:3],
    w=940, h=340)
S["qc04-f13"]=lambda: f_realia(form("Note planner",
    [("The page I counted",""),("Unknown words in a hundred",""),("My coverage",""),
     ("The four densities",""),("Three limits of the study",""),("My two rules","")]), 560)
S["qc04-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("marek",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("mei",365,176,{"seated":True}),("nour",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("ines",590,170,{}),("junseo",655,172,{}),
     ("samira",720,170,{}),("oksana",785,172,{}),("hana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("essay",350,198,0.24),
     ("printer",430,196,0.3),("note",560,198,0.22),("table",650,0,1.0),
     ("book",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,236,116,"ONE UNKNOWN WORD IN FIFTY",[("95%","a minority"),("98%","probably")]),
    clockat=(296,34,22,13,0))
S["qc04-f15"]=lambda: f_chart([("none or one",0),("two or three",2),("four to six",5),
    ("seven to ten",3),("more than ten",1)])
S["qc04-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Six unknown words in a hundred, eleven weeks",
    table_html(["","Figure"],
      [["Unknown words in a hundred, real academic page","6"],
       ["My coverage of that page","about 94 per cent"],
       ["Coverage probably needed, unassisted","about 98 per cent"],
       ["Weeks remaining","11"],
       ["Word families he could learn in eleven weeks","perhaps 600"],
       ["Which six hundred","not known"]])
    + "<p><b>Four versions</b> of one paragraph with invented words, at four densities.</p>"
    "<p><b>A glossary</b> cut from the foot of a practice page.</p>",
    "Eight o'clock. He needs a raw score that would reach band 6.5, and nobody can tell him which six "
    "hundred families to learn."), 640)

# ---------------- Unit 5 ----------------
S["qc05-f1"]=lambda: f_icons([("notebook","ten numbered sublists"),
    ("thread","a word with four forms"),("library","a stack of academic texts"),
    ("spreadsheet","four subject areas"),("square","two thousand words set aside"),
    ("balance","one slice in ten"),("review","a very thin slice"),
    ("tally","a frequency count"),("worldmap","range across four areas"),
    ("book","a novel with a thin slice"),("magnifier","a dictionary open at corpus"),
    ("proof","a journal cover dated 2000"),("noentry","a syllabus crossed out"),
    ("stars","a tick"),("scissors","a cross"),("form","a footnote")],4)
S["qc05-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("oksana",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("notebook",390,196,0.24),("board",100,86,0.82),
     ("essay",470,198,0.22),("window",790,56,0.94)],
    board=(650,22,234,118,"ONE WORD IN TEN",[("the list","570"),("the rest","the first 2,000")]),
    clockat=(600,44,22,11,0))
S["qc05-f3"]=lambda: f_icons([("library","3.5 million words of academic text"),
    ("spreadsheet","four subject areas"),("square","two thousand words set aside"),
    ("tally","a frequency threshold"),("worldmap","range across all four"),
    ("magnifier","chosen on range as well as frequency")],3)
S["qc05-f4"]=lambda: f_realia(tbl("Team research &middot; shade a page", None,
    ["The page","Running words","List words found","Per cent","Sublist most came from"],
    br(6,5),
    note="The page with the fewest: ______________________"), 680)
S["qc05-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Reading class",
    "The academic word list, and the two thousand words it assumes &middot; page 1 of 1",
    "<p><b>The source.</b> Averil Coxhead, <i>A New Academic Word List</i>, TESOL Quarterly, "
    "<b>2000</b>. Printed here in our own words.</p>"
    "<p>The problem the list answers is the one Unit 4 left you with. An academic page is mostly "
    "common English, with a layer of words on top that are not technical to any one subject and yet "
    "appear in all of them: <i>analysis</i>, <i>constitute</i>, <i>derive</i>, <i>significant</i>, "
    "<i>framework</i>, <i>hence</i>.</p>"
    + table_html(["How a word got onto the list","What that means"],
      [["It appears across <b>all four</b> broad subject areas",
        "it is academic, not technical to one field"],
       ["It occurs often enough in a corpus of about <b>3.5 million</b> words of academic text",
        "it is worth the effort"],
       ["It is <b>not</b> among the most frequent <b>2,000</b> words of English",
        "those are assumed already known"],
       ["Families, not words","<i>analysis</i>, <i>analytical</i>, <i>analytically</i> count once"]])
    + "<p>The result is <b>570 word families</b>, grouped into <b>ten sublists</b> in order of "
    "frequency. Those families account for about <b>ten per cent</b> of the running words of academic "
    "text; in a corpus of <b>fiction</b> the same families account for a little over <b>one per "
    "cent</b>. That gap is a measurement of what academic prose is made of.</p>"
    "<p><b>A list, not a syllabus.</b> It <b>deliberately excludes the most frequent 2,000 words</b>, "
    "so on its own it gives you one word in ten of a page you cannot read: it is a supplement, and "
    "the author presents it as one. It was built on a corpus of one period and one selection of "
    "texts, and <b>coverage varies by discipline</b>. It counts <b>families</b>, which assumes a "
    "learner who meets <i>constitute</i> can handle <i>constituent</i> and <i>constitution</i>. It is "
    "a list: not an order of learning, not a method, not a set of definitions, and the sublists are "
    "ordered by frequency, which is not the same as ordered by usefulness to you. And later work has "
    "proposed <b>alternatives</b> built from larger and newer corpora.</p>",
    "Our summary of a published paper. The list itself is freely available; find it and write down "
    "where from."), 620)
S["qc05-f6"]=lambda: f_realia(tbl("Building an academic family", None,
    ["Verb","Noun","Adjective","Adverb"],
    [["<b>analyze</b>","analysis","analytical","analytically"],
     ["<b>constitute</b>","constitution &middot; constituent","constitutional","constitutionally"],
     ["<b>derive</b>","derivation","derivative","derivatively"],
     ["<b>signify</b>","significance","significant","significantly"],
     ["<b>specify</b>",B,B,B],
     ["<b>integrate</b>",B,B,B]],
    note="Six cells are empty on purpose. The list counts each row as one family."), 680)
S["qc05-f7"]=lambda: f_part("One hundred running words of academic text",
    [("the first 2,000 families",74,"#3f6b2f"),("the academic word list",11,"#6b8f4a"),
     ("technical terms, names, rare words",15,"#a8bf8a")], 580)
S["qc05-f8"]=lambda: f_icons([("library","a stack of academic texts"),
    ("spreadsheet","four subject areas"),("square","two thousand set aside"),
    ("notebook","ten numbered sublists"),("balance","one slice in ten"),
    ("magnifier","a supplement, not a vocabulary")],3)
S["qc05-f9"]=lambda: f_realia(doc("One hundred running words, shaded",
    "Academic-list words in bold &middot; first-two-thousand words plain &middot; the rest in gray",
    "<p style='line-height:1.9'>The <b>analysis</b> of these <span style='color:#9a968f'>sediment</span> "
    "cores <b>indicates</b> that the <b>sequence</b> was <b>established</b> rather earlier than the "
    "<b>conventional</b> account allows. Two <b>distinct</b> layers can be <b>identified</b>, the "
    "lower of which <b>constitutes</b> the first clear <b>evidence</b> of settlement at the site. The "
    "<span style='color:#9a968f'>stratigraphy</span> is not in itself <b>conclusive</b>, since the "
    "upper layer has been <b>subsequently</b> disturbed, but the <b>implications</b> for the wider "
    "<b>region</b> are considerable and have not been taken up in the <span style='color:#9a968f'>"
    "literature</span> of the past twenty years.</p>",
    "Eleven of a hundred from the academic list; about seventy-four from the first two thousand; the "
    "remainder technical or rare. Our own paragraph, written for this book."), 620)
S["qc05-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("oksana",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("essay",360,196,0.24),("computer",490,142,0.42),
     ("notebook",450,198,0.22),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"220 FAMILIES",[("bought","3 marks"),("the sentence","had none")]),
    clockat=(680,44,22,12,15))
S["qc05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("A science page", None,
        "<p><b>Eleven</b> academic-list words in a hundred.</p>"
        "<p style='color:#6b6861;font-size:13px'>Close to the published average.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("A law page", None,
        "<p><b>Sixteen</b> academic-list words in a hundred.</p>"
        "<p style='color:#6b6861;font-size:13px'>Which is what <i>coverage varies by discipline</i> "
        "means on one afternoon.</p>"), w)[0:3],
    w=900, h=270)
S["qc05-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I am learning the academic word list. 570 families. Then my reading will be fine.</p>"),
        w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>On <b>23 May</b> I shaded a hundred running words of a science page and found <b>eleven</b> "
        "academic-list words and about <b>seventy-four</b> from the commonest two thousand. A paper "
        "published in 2000 describes how the list was built: 570 families, from a corpus of about 3.5 "
        "million words of academic text across four subject areas, chosen for appearing in all four "
        "and for being outside the commonest two thousand, grouped into ten sublists by frequency. The "
        "families cover roughly ten per cent of academic text and a little over one per cent of "
        "fiction. It excludes the commonest two thousand on purpose, coverage varies by discipline, "
        "counting families assumes I can handle every form, and newer lists have been proposed. So my "
        "plan has two halves: sublists one to six, and the first two thousand properly.</p>"), w)[0:3],
    w=940, h=350)
S["qc05-f13"]=lambda: f_realia(form("Note planner",
    [("The page I shaded",""),("List words in a hundred",""),("The two coverage figures",""),
     ("What the list excludes",""),("Three limits",""),("My plan in two halves","")]), 560)
S["qc05-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("oksana",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("marek",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("nour",590,170,{}),("junseo",655,172,{}),
     ("ines",720,170,{}),("samira",785,172,{}),("hana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("essay",350,198,0.24),
     ("printer",430,196,0.3),("notebook",560,198,0.22),("table",650,0,1.0),
     ("book",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,236,116,"ONE WORD IN TEN, AND THE OTHER NINE",[("570","families"),("2,000","assumed")]),
    clockat=(296,34,22,14,0))
S["qc05-f15"]=lambda: f_chart([("none",2),("one or two",3),("three to five",4),
    ("six to eight",2),("all ten",0)])
S["qc05-f16"]=lambda: f_realia(doc("On a desk in the afternoon",
    "Two hundred and twenty families, three marks",
    table_html(["","Figure"],
      [["Sublists learned","1 to 4"],["Families learned","220"],
       ["Reading score, eight weeks ago","24"],["Reading score now","27"],
       ["Families remaining on the list","350"],["Weeks left","6"]])
    + "<p><b>One sentence</b> written out, from the page that stopped her: <i>Having been set aside "
    "once before, the scheme was revived with little comment.</i> <b>No academic-list words in "
    "it.</b></p>"
    "<p><b>A novel</b> with a very thin shaded slice beside it.</p>",
    "Three o'clock. The sentences that still stop her are long sentences built from common words, "
    "participles and negatives."), 660)

# ---------------- Unit 6 ----------------
S["qc06-f1"]=lambda: f_icons([("transfer","an arrow pointing back"),
    ("thread","a pronoun with a line to a noun"),("quotemark","a demonstrative pointing at a paragraph"),
    ("review","the word one standing in"),("speechbubble","the word so standing in"),
    ("scissors","a gap where a word is missing"),("signpost","a connector between clauses"),
    ("flashback","a repeated word in two places"),("chain","two synonyms linked"),
    ("data","a chain of related words"),("noentry","joined and senseless"),
    ("stars","coherent with no joins"),("library","a spine dated 1976"),
    ("proof","a footnote"),("magnifier","a dictionary open at reference"),
    ("form","a coding sheet")],4)
S["qc06-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("oksana",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("library",390,196,0.26),("board",98,86,0.84),
     ("essay",470,198,0.22),("window",790,56,0.94)],
    board=(644,22,240,120,"FIVE ARROWS",[("one","at a sentence"),("one","nobody agrees")]),
    clockat=(594,44,22,11,30))
S["qc06-f3"]=lambda: f_icons([("thread","a pronoun with a line back"),
    ("review","one replacing a noun phrase"),("scissors","a gap where a word is missing"),
    ("signpost","a connector between clauses"),("chain","a repeated word"),
    ("noentry","cohesion is not coherence")],3)
S["qc06-f4"]=lambda: f_realia(tbl("Team research &middot; follow the arrows", None,
    ["The small word","The line","What we think it points at","How sure","What it points at"],
    br(10,5),
    note="The one we could not agree about: ______________________"), 700)
S["qc06-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Reading class",
    "The small words that carry you across a text &middot; page 1 of 1",
    "<p><b>The source.</b> M. A. K. Halliday and R. Hasan, <i>Cohesion in English</i>, Longman, "
    "<b>1976</b>. Printed here in our own words.</p>"
    "<p>What makes a sequence of sentences a <b>text</b> rather than a list of sentences? This book's "
    "answer is <b>cohesion</b>: a set of resources in the language that tie one part of a text to "
    "another.</p>"
    + table_html(["The kind of tie","What it does","Examples"],
      [["<b>Reference</b>","points at something else in the text",
        "<i>it</i>, <i>they</i>, <i>this</i>, <i>these</i>, <i>such</i>, <i>the latter</i>"],
       ["<b>Substitution</b>","puts a short item in place of a longer one",
        "<i>one</i>, <i>ones</i>, <i>do</i>, <i>so</i>"],
       ["<b>Ellipsis</b>","leaves out what the reader can supply",
        "<i>Two were tested and three were not</i>"],
       ["<b>Conjunction</b>","marks the relation between two parts",
        "<i>however</i>, <i>therefore</i>, <i>nevertheless</i>"],
       ["<b>Lexical cohesion</b>","repeats, or uses a related word",
        "<i>the sample &hellip; the specimen &hellip; it</i>"]])
    + "<p>Most reference in academic prose is <b>anaphoric</b> &mdash; it points <b>back</b>. And here "
    "is the fact that costs marks: a demonstrative like <i>this</i> can point back not at a noun but "
    "at <b>a whole stretch of text</b> &mdash; a clause, a sentence, a paragraph, an argument.</p>"
    "<p><b>A description, and a distinction.</b> The book is a description of a language, written for "
    "linguists: an account of what English makes available, not a method for reading and not a set of "
    "instructions for writing.</p>"
    "<p>Its central distinction is the one most courses collapse. <b>Cohesion is not coherence.</b> "
    "Cohesion is the presence of ties; coherence is whether the text makes sense. You can write a "
    "passage stuffed with <i>however</i> and <i>therefore</i> and <i>this</i> that means nothing, and "
    "a short passage with almost no ties that is perfectly clear. A student taught that "
    "&ldquo;linkers make writing coherent&rdquo; has been taught something the source does not say. "
    "The categories also <b>overlap</b>, and coding a text for cohesion is interpretive work rather "
    "than counting. And it is <b>of its period</b>: published in 1976, extended and revised since, "
    "including by one of its own authors.</p>",
    "Our summary of a published book. The center's copy is on the shelf; the chapter on reference is "
    "the one to read."), 620)
S["qc06-f6"]=lambda: f_realia(tbl("What the small word points at", None,
    ["The small word","What it points at","An example"],
    [["<b>it</b>","one singular noun phrase","<i>The sample was warm. It had been left out.</i>"],
     ["<b>they</b>","one plural noun phrase","<i>The records survive. They are incomplete.</i>"],
     ["<b>this</b>","a noun, a clause, or a whole stretch",
      "<i>Output fell for three years. This worried nobody.</i>"],
     ["<b>such</b>","a kind of thing just described",
      "<i>&hellip;a delay of two months. Such delays were common.</i>"],
     ["<b>the latter</b>",B,B],
     ["<b>so</b>",B,B]],
    note="Four cells are empty on purpose. <i>This</i> is the most expensive word in the paper."),
    660)
S["qc06-f7"]=lambda: f_chart([("this",7),("such",4),("the latter",4),("it",3),("they",1)],
    unit="wrong answers")
S["qc06-f8"]=lambda: f_icons([("transfer","an arrow pointing back"),
    ("review","one replacing a phrase"),("scissors","a missing word"),
    ("signpost","a connector"),("chain","a chain of related words"),
    ("noentry","cohesive and senseless")],3)
S["qc06-f9"]=lambda: f_realia(doc("One paragraph, with the arrows drawn",
    "Eleven ties, and two of them decide three questions",
    "<p>The first survey recorded eleven sites. <b>These</b> were revisited in 1961, when four of "
    "<b>them</b> proved to have been destroyed. <b>Such</b> losses were common in the period, and the "
    "commission said <b>so</b> in its report. Two further sites were surveyed in the following year; "
    "the first produced nothing, and <b>the latter</b> produced the only complete sequence on record. "
    "<b>This</b> has been cited ever since as the decisive find, although the commission "
    "<b>itself</b> described the attribution as provisional.</p>"
    + table_html(["The tie","Points at"],
      [["<b>These</b>","the eleven sites"],["<b>them</b>","the eleven sites"],
       ["<b>Such</b>","losses of the kind just described"],
       ["<b>so</b>","the whole preceding clause"],
       ["<b>the latter</b>","the second of the two further sites"],
       ["<b>This</b>","<b>the whole preceding sentence</b>"],
       ["<b>itself</b>","the commission"]])
    + "<p style='color:#6b6861;font-size:13px'>Two of these &mdash; <i>the latter</i> and <i>This</i> "
    "&mdash; decide three of the questions on this paragraph.</p>",
    "Our own paragraph, written for this book. The arrow for <i>This</i> reaches back a whole "
    "sentence, which is where the marks go."), 640)
S["qc06-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("oksana",400,176,{"seated":True}),("grace",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("essay",360,196,0.24),("computer",490,142,0.42),
     ("pen",450,198,0.18),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"THIS",[("thought","the last noun"),("meant","the sentence")]),
    clockat=(680,44,22,12,0))
S["qc06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Expanded", None,
        "<p>Every reference word replaced by the full phrase it points at.</p>"
        "<p style='color:#6b6861;font-size:13px'>Longer, repetitive, and unambiguous.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("The original", None,
        "<p>Eleven ties doing the work instead.</p>"
        "<p style='color:#6b6861;font-size:13px'>Shorter, elegant, and three questions turn on two "
        "of them.</p>"), w)[0:3],
    w=900, h=260)
S["qc06-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>The third passage was badly written and confusing, and I got three questions wrong "
        "because of it.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>In the practice paper on <b>30 May</b> I got three questions wrong in the third passage, "
        "and all three turn on one word: a <i>This</i> at the start of a sentence, which I took to "
        "refer to the noun just before it and which in fact referred to the whole preceding sentence "
        "&mdash; a sentence that said the opposite. A description published in 1976 catalogues the "
        "ties that hold a text together: reference, substitution, ellipsis, conjunction and lexical "
        "cohesion, and it notes that a demonstrative can point back at a clause or a whole stretch of "
        "text. It is a description of the language rather than a reading method, its categories "
        "overlap, it is of its period, and its central point is that cohesion is not coherence. My "
        "habit: when a question turns on a sentence beginning <i>This</i>, read the whole previous "
        "sentence first.</p>"), w)[0:3],
    w=940, h=350)
S["qc06-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the passage",""),("The wrong answers",""),("The word they turn on",""),
     ("What I thought it pointed at",""),("What it pointed at",""),("My new habit","")]), 560)
S["qc06-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("oksana",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("grace",290,172,{}),("nour",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("lars",515,176,{"seated":True}),("junseo",590,170,{}),("marek",655,172,{}),
     ("samira",720,170,{}),("ines",785,172,{}),("hana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("essay",350,198,0.24),
     ("printer",430,196,0.3),("flashcard",560,198,0.24),("table",650,0,1.0),
     ("library",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,240,116,"READ THE WHOLE SENTENCE BEFORE",[("this","not the last noun")]),
    clockat=(300,34,22,15,0))
S["qc06-f15"]=lambda: f_chart([("this",5),("such",2),("the latter",2),("it or they",1),
    ("I had not thought about it",1)])
S["qc06-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Nineteen marks, five small words",
    table_html(["The word","Wrong answers it caused","Years she has known it"],
      [["<b>this</b>","7","9"],["<b>such</b>","4","9"],["<b>the latter</b>","4","7"],
       ["<b>it</b>","3","9"],["<b>they</b>","1","9"],["<b>Total</b>","<b>19</b>","&mdash;"]])
    + "<p><b>A card</b> of the five kinds of tie.</p>"
    "<p><i>Nobody has ever asked her to draw an arrow, and she can now fix seven marks with a "
    "four-second habit.</i></p>",
    "Seven o'clock. Nineteen marks across six papers, and not one of them a vocabulary problem."),
    660)

# ---------------- Unit 7 ----------------
S["qc07-f1"]=lambda: f_icons([("flashcard","four cards face up"),
    ("handsup","a hand turning one card"),("noentry","a hand turning the wrong card"),
    ("form","a rule printed in a box"),("stars","a confirming case"),
    ("scissors","a falsifying case"),("square","an empty space"),
    ("review","a card with nothing on the back"),("scales","nothing on either side"),
    ("quotemark","a card marked not given"),("clipboard","a laboratory"),
    ("library","a journal cover dated 1968"),("worldmap","everyday content"),
    ("magnifier","a footnote"),("data","a tally of verdicts"),("pen","a finger on a sentence")],4)
S["qc07-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("samira",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("flashcard",390,196,0.24),("board",96,86,0.86),
     ("library",470,198,0.24),("window",790,56,0.94)],
    board=(638,22,246,122,"A D 4 7",[("most choose","A and 4"),("needed","A and 7")]),
    clockat=(588,44,22,12,0))
S["qc07-f3"]=lambda: f_icons([("stars","a sentence that says it"),
    ("scissors","a sentence that contradicts it"),("square","no relevant sentence"),
    ("handsup","a card turned to confirm"),("noentry","a card turned to falsify"),
    ("magnifier","not given is the empty case")],3)
S["qc07-f4"]=lambda: f_realia(tbl("Team research &middot; which card did you turn?", None,
    ["The statement","My verdict","The sentence I used","Does it contradict it","The right verdict"],
    br(10,5),
    note="The ones where I used no sentence at all: ______________________"), 720)
S["qc07-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Reading class",
    "Why not given is a logic question &middot; page 1 of 1",
    "<p><b>The source.</b> P. C. Wason, <i>Reasoning about a rule</i>, Quarterly Journal of "
    "Experimental Psychology, <b>1968</b>. Printed here in our own words.</p>"
    "<p>Four cards lie face up. You can see <b>A</b>, <b>D</b>, <b>4</b> and <b>7</b>. Each card has "
    "a letter on one side and a number on the other. The rule is: <b>if a card has a vowel on one "
    "side, it has an even number on the other.</b> Which cards must you turn over to find out whether "
    "the rule is true?</p>"
    + table_html(["The card","What turning it can show"],
      [["<b>A</b>","<b>necessary</b>: an odd number on the back breaks the rule"],
       ["<b>D</b>","nothing: the rule says nothing about consonants"],
       ["<b>4</b>","<b>nothing</b>: the rule says nothing about what is behind an even number"],
       ["<b>7</b>","<b>necessary</b>: a vowel on the back breaks the rule"]])
    + "<p>Most people choose the <b>A</b>, and many add the <b>4</b>. The correct answer is <b>A and "
    "7</b> &mdash; the case that could confirm the rule and the case that could break it. The common "
    "answer is the case that could confirm it, twice.</p>"
    "<p><b>This is the finding.</b> Asked to test a rule, people look for what would <b>agree</b> with "
    "it, and are very slow to look for what would <b>break</b> it. That is why <i>true, false, not "
    "given</i> costs so many marks, and why the repair is a single question asked about every "
    "statement: <b>what sentence in this passage would make this statement false?</b> If you can find "
    "one, the answer is <i>false</i>. If you can find a sentence that says it, the answer is "
    "<i>true</i>. If the passage contains neither, the answer is <i>not given</i> &mdash; the empty "
    "card, the case where there is nothing to turn.</p>"
    "<p><b>An abstract task whose results change with content.</b> The task is abstract &mdash; "
    "letters and numbers, stripped of meaning &mdash; and was run in a laboratory with a small number "
    "of participants. The most important thing to say about it is that <b>performance changes "
    "dramatically when the content changes</b>: versions built from everyday rules produce far higher "
    "rates of correct choices, which is one of the best established results in the literature. So the "
    "1968 task does <b>not</b> show that people cannot reason; it shows that they reason badly about "
    "an abstract conditional presented cold. The interpretation is still argued about. And the task "
    "has nothing to do with reading tests: <b>the connection drawn in this unit is ours</b>, a "
    "teaching analogy rather than a research finding.</p>",
    "Our summary of a published paper. It is short, and the four cards are worth drawing for "
    "yourself."), 620)
S["qc07-f6"]=lambda: f_realia(tbl("Negation and scope", None,
    ["The statement","What would contradict it","What would not"],
    [["<b>All the samples failed.</b>","one sample that did not fail",
      "several samples that failed"],
     ["<b>Not all the samples failed.</b>","every sample failing","one sample failing"],
     ["<b>Some samples failed.</b>","no sample failing","most samples failing"],
     ["<b>No samples failed.</b>","one sample failing","none failing"],
     ["<b>Few samples failed.</b>",B,B],
     ["<b>Hardly any failed.</b>",B,B]],
    note="Four cells are empty on purpose. <i>Not all</i> and <i>none</i> are very different "
    "statements."), 680)
S["qc07-f7"]=lambda: f_matrix(["The passage says it","It contradicts it","It is silent"],
    [("TRUE",["&#10003;","","" ]),("FALSE",["","&#10003;",""]),
     ("NOT GIVEN",["","","&#10003;"])], 580)
S["qc07-f8"]=lambda: f_icons([("flashcard","four cards with a rule"),
    ("handsup","turning the vowel card"),("noentry","turning the odd-number card"),
    ("scissors","a contradicting sentence"),("stars","a matching sentence"),
    ("square","nothing beside it")],3)
S["qc07-f9"]=lambda: f_realia(tbl("Practice page &middot; the sentence column",
    "Eight statements, and the sentence used for each",
    ["No.","The statement","The sentence I used","Verdict"],
    [["1","The first survey covered every district.","<i>covered most districts</i>","NG"],
     ["2","The records were destroyed in 1948.","<i>destroyed in 1948</i>","T"],
     ["3","The method was unpopular.","<b>none</b>","F"],
     ["4","No letters survive.","<i>two remain in a private collection</i>","F"],
     ["5","The committee met more than once.","<i>met twice</i>","T"],
     ["6","The author regretted the decision.","<b>none</b>","F"],
     ["7","All researchers rejected the method.","<i>several rejected it</i>","NG"],
     ["8","The site was never excavated again.","<b>none</b>","F"]],
    note="Three verdicts with nothing in the third column. All three are <i>false</i>, and all three "
    "should be <i>not given</i>. Our own statements, written for this book."), 700)
S["qc07-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("samira",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("form",360,196,0.22),("computer",490,142,0.42),
     ("flashcard",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"POINT AT IT",[("false","needs a sentence"),("not given","has none")]),
    clockat=(680,44,22,12,15))
S["qc07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Version 1", None,
        "<p>Eight statements, a verdict beside each.</p>"
        "<p style='color:#6b6861;font-size:13px'>Nothing to look at afterwards.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Version 2", None,
        "<p>Eight statements, a verdict and <b>the sentence used</b> beside each. Three lines read "
        "<i>none</i>.</p>"
        "<p style='color:#6b6861;font-size:13px'>Three verdicts with nothing behind them, all three "
        "wrong.</p>"), w)[0:3],
    w=900, h=280)
S["qc07-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>True, false, not given is unfair. You can never be sure, and the answers are a matter of "
        "opinion.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>In the practice paper on <b>6 June</b> I got five of eight true-false-not-given statements "
        "right. For each of my eight I wrote down the sentence I used: five had one, and <b>three had "
        "none</b> &mdash; in all three of those I wrote <i>false</i> because the statement sounded "
        "wrong, and all three were <i>not given</i>. A reasoning task published in 1968 shows that when "
        "people are asked to test a rule they look for the case that would agree with it and not for "
        "the case that could break it. It is an abstract laboratory task with a small group, "
        "performance improves greatly when the content is made everyday, the interpretation is still "
        "argued about, and the connection to reading papers is my teacher's analogy rather than a "
        "research finding. My habit: point at the sentence before writing <i>false</i>, and if there "
        "is nothing to point at, write <i>not given</i>.</p>"), w)[0:3],
    w=940, h=360)
S["qc07-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the score on this type",""),("How many had a sentence behind them",""),
     ("How many did not",""),("What I wrote instead",""),("The 1968 finding",""),
     ("My habit","")]), 560)
S["qc07-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("samira",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("oksana",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("nour",590,170,{}),("junseo",655,172,{}),
     ("marek",720,170,{}),("ines",785,172,{}),("hana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("flashcard",350,198,0.24),
     ("printer",430,196,0.3),("form",560,198,0.22),("table",650,0,1.0),
     ("library",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,236,116,"POINT AT THE SENTENCE",[("A and 7","not A and 4")]),
    clockat=(296,34,22,13,0))
S["qc07-f15"]=lambda: f_chart([("true",2),("false",5),("not given",1),("about the same",1),
    ("I guess when I am not sure",2)])
S["qc07-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Sixty statements, five papers, one habit",
    table_html(["","Hers","The published answers"],
      [["TRUE","20","20"],["FALSE","<b>31</b>","<b>19</b>"],["NOT GIVEN","<b>9</b>","<b>21</b>"]])
    + "<p><b>Twelve wrong <i>falses</i></b>, and in every one of them she can now find no sentence in "
    "the passage to point at.</p>"
    "<p><b>Four large cards</b> showing A, D, 4 and 7, with two circled.</p>",
    "Seven o'clock. Thirty-one <i>falses</i> where there were nineteen, and nine <i>not givens</i> "
    "where there were twenty-one."), 640)
