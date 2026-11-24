# -*- coding: utf-8 -*-
"""Plumbline Book 6 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 4 ----------------
S["qf04-f1"]=lambda: f_icons([("notebook","a ranked list of words"),("data","a steeply falling curve"),
    ("tally","a short word, many times"),("book","a long word, once"),
    ("speechbubble","a speaker with one general word"),("eye","a listener needing three"),
    ("scales","a pair of scales"),("balance","a balance point"),
    ("councilbuilding","city sizes"),("review","an income curve"),
    ("library","a book dated 1949"),("magnifier","a frequency table"),
    ("proof","a tick"),("danger","a cross"),("scissors","a general word crossed out"),
    ("pen","and the specific one")],4)
S["qf04-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("junseo",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"RANK AND FREQUENCY",[("1","84"),("2","46"),("10","7")]),
    clockat=(622,44,22,10,30))
S["qf04-f3"]=lambda: f_icons([("speechbubble","one word, six meanings"),("eye","six words, six meanings"),
    ("scales","tipping toward the speaker"),("balance","tipping toward the listener"),
    ("review","the balance point"),("magnifier","whose convenience is this?")],3)
S["qf04-f4"]=lambda: f_realia(tbl("Team research &middot; the general and the three specifics", None,
    ["The general word","Times I said it","Specific one","Specific two","Specific three"],
    br(8,5),
    note="The general word I rely on most: ______________________"), 700)
S["qf04-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Speaking class",
    "Why your ten commonest words are the shortest you know &middot; page 1 of 1",
    "<p><b>The source.</b> George Kingsley Zipf, <i>Human Behavior and the Principle of Least "
    "Effort</i>, Addison-Wesley, <b>1949</b>. Printed here in our own words.</p>"
    "<p>Count every word in a large body of text and rank them by frequency, and the frequencies fall "
    "away in a very particular shape: the commonest word occurs roughly twice as often as the second, "
    "three times as often as the third, and so on down a long tail of words that occur once each. A "
    "second regularity goes with it: <b>more frequent words tend to be shorter</b>.</p>"
    + table_html(["Whose economy","What it wants"],
      [["the <b>speaker's</b>","one word covering as many meanings as possible &mdash; ideally a "
        "single word meaning everything"],
       ["the <b>auditor's</b>","one word per meaning, so that nothing has to be worked out from "
        "context"]])
    + "<p>Neither gets what it wants, and the vocabulary a language settles on is the "
    "<b>compromise</b>: a few very general, very short, very frequent words and a great many "
    "specific, longer, rare ones.</p>"
    "<p><b>Everything that makes speech easy for you makes it less informative for your listener.</b> "
    "<i>Thing</i>, <i>good</i>, <i>do</i>, <i>get</i>, <i>a lot of</i>: the speaker's economy winning, "
    "in a test where the listener is a marker with a criterion about range and precision.</p>"
    "<p><b>A robust regularity with a disputed explanation.</b> The frequency pattern is about as well "
    "established as anything in the study of language. <b>The explanation is not:</b> many competing "
    "accounts exist, including statistical ones in which processes with no speaker and no effort "
    "produce the same distribution &mdash; so the pattern on its own is <b>not evidence</b> for the "
    "principle of least effort. The book is also famous for <b>overreach</b> elsewhere. And the law "
    "describes <b>aggregate text, not a person</b>: the claim that your general words are costing you "
    "a band is <b>ours</b>, drawn from the descriptors in Unit 1.</p>",
    "Our summary of a published book, named with its publisher and its year."), 640)
S["qf04-f6"]=lambda: f_realia(tbl("The specific word", None,
    ["The general word","One","Two","Three"],
    [["<b>thing</b>","factor","feature","consideration"],
     ["<b>good</b>","effective","defensible","worthwhile"],
     ["<b>do</b>","conduct","undertake","carry out"],
     ["<b>get</b>","obtain","acquire","be awarded"],
     ["<b>problem</b>",B,B,B],
     ["<b>a lot of</b>",B,B,B]],
    note="Six cells are empty on purpose. None of the three replacements means the same as the "
    "others."), 680)
S["qf04-f7"]=lambda: f_chart([("the",84),("I",46),("to",31),("and",24),("it",20),
    ("think",16),("very",13),("good",11),("thing",9),("a lot of",7)],
    unit="times in 14 minutes", w=580)
S["qf04-f8"]=lambda: f_icons([("speechbubble","a word covering six meanings"),("eye","a word covering one"),
    ("tally","a short frequent word"),("book","a long rare word"),
    ("thread","a general word, then its specification"),
    ("magnifier","did you choose this word?")],3)
S["qf04-f9"]=lambda: f_realia(tbl("Part 1 questions &middot; practice",
    "Eight familiar questions, and six general words with their specifics.",
    ["","The question"],
    [["1","Where do you live, and what is it like?"],
     ["2","What do you do in your free time?"],
     ["3","Do you prefer reading or watching things?"],
     ["4","How often do you travel within your country?"],
     ["5","What kind of food do you cook at home?"],
     ["6","Do you use public transport?"],
     ["7","What did you study, and why?"],
     ["8","Do you work better in the morning or the evening?"]],
    numcols=(0,),
    note="<b>Part 1 is four minutes of your habits.</b> Replacements for: <i>thing &rarr; feature, "
    "factor, aspect</i> &middot; <i>good &rarr; worthwhile, defensible, effective</i> &middot; "
    "<i>do &rarr; carry out, undertake, go into</i> &middot; <i>get &rarr; obtain, acquire, take</i> "
    "&middot; <i>very &rarr; markedly, strikingly, unusually</i> &middot; <i>a lot of &rarr; no "
    "shortage of, a great many, an abundance of</i>"), 660)
S["qf04-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("junseo",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("notebook",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"FIFTY-SIX",[("5 words","56 times"),("a minute","4")]),
    clockat=(630,42,22,11,0))
S["qf04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Eight general words", None,
      "<p><i>My city is a very good place to live. There are a lot of good things about it and the "
      "main thing is that people are very nice.</i></p>"
      "<p>General words: <b>8</b>. Different content words: <b>5</b>.</p>",
      "No errors anywhere in it."), 380)[0:3],
    lambda w,h: f_realia(doc("Three kept, five replaced", None,
      "<p><i>My city is unglamorous and extremely comfortable, which is a combination I have come to "
      "value&hellip;</i></p>"
      "<p>General words: <b>3</b>. Different content words: <b>14</b>.</p>",
      "One general word kept on purpose."), 380)[0:3],
    800, 310, "Eight", "Three")
S["qf04-f12"]=lambda: f_realia(doc("Two answers to one Part 1 question", None,
    "<p><b>Answer 1.</b> <i>My city is a very good place to live. There are a lot of good things "
    "about it and the main thing is that people are very nice. I think it is a nice place and I would "
    "not want to live anywhere else.</i></p>"
    "<p><b>Answer 2.</b> <i>My city is unglamorous and extremely comfortable, which is a combination I "
    "have come to value. What distinguishes it is that everything is within walking distance, so "
    "nobody plans their day around transport; the cost of that is a certain narrowness, and I notice "
    "it most when I come back from somewhere larger.</i></p>",
    "Nine general words against three. The second contains something a listener could not have "
    "guessed."), 640)
S["qf04-f13"]=lambda: f_realia(form("Replacement planner",
    [("The question",B),("Three general words I will replace",B),("Their replacements",B),
     ("One general word I will keep",B),("Why I am keeping it",B)],
    note="The last box is the one that stops this becoming a thesaurus answer."), 580)
S["qf04-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("junseo",340,190,{"seated":True}),("grace",470,184,{}),
     ("nour",560,188,{"seated":True}),("tomas",660,186,{}),("mei",740,190,{"seated":True}),
     ("ines",830,186,{}),("hana",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("notebook",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"WHOSE CONVENIENCE?",
      [("speaker","few words"),("listener","one each")]),
    clockat=(650,40,22,1,0))
S["qf04-f15"]=lambda: f_chart([("thing",4),("good",3),("very",2),("a lot of",1),("do",1)], w=560)
S["qf04-f16"]=lambda: f_realia(doc("On the desk, evening",
    "A ranked word list with five circled in one color and five in another",
    "<p><b>The first five:</b> <i>the</i>, <i>I</i>, <i>to</i>, <i>and</i>, <i>it</i> &mdash; "
    "grammatical words nobody could avoid.</p>"
    "<p><b>The second five:</b> <i>think</i>, <i>very</i>, <i>good</i>, <i>thing</i>, <i>a lot "
    "of</i> &mdash; fifty-six occurrences between them.</p>"
    "<p><b>Fluency:</b> 7.5. <b>Lexical Resource:</b> 6.5. <b>Errors:</b> none. "
    "<b>Hesitations:</b> none.</p>",
    "Four a minute, every one of them a choice."), 640)

# ---------------- Unit 5 ----------------
S["qf05-f1"]=lambda: f_icons([("form","a stem with a blank slot"),("racking","a store of stems"),
    ("thread","a clause-length run"),("note","a pause"),
    ("timer","a stopwatch"),("head","a narrow channel"),
    ("pen","a novel sentence"),("book","an idiomatic one"),
    ("speechbubble","two question marks"),("notebook","a transcript with runs bracketed"),
    ("library","a collection dated 1983"),("magnifier","a transcript, closely read"),
    ("proof","a tick"),("danger","a cross"),("scissors","an assembled sentence"),
    ("packet","a retrieved one")],4)
S["qf05-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("mei",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"ONE CLAUSE AT A TIME",[("runs","4"),("words each","~9")]),
    clockat=(622,44,22,11,0))
S["qf05-f3"]=lambda: f_icons([("library","a field of grammatical sentences"),("head","a narrow channel"),
    ("thread","a clause-length run"),("note","a pause"),
    ("form","a stem with a slot"),("magnifier","two puzzles, one answer")],3)
S["qf05-f4"]=lambda: f_realia(tbl("Team research &middot; bracket the runs", None,
    ["The run","Words","Retrieved or built?","Where I learned it"],
    br(8,4),
    note="The longest run I did not build: ______________________"), 660)
S["qf05-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Speaking class",
    "What a fluent speaker has already got &middot; page 1 of 1",
    "<p><b>The source.</b> Andrew Pawley and Frances Hodgetts Syder, <i>Two puzzles for linguistic "
    "theory: nativelike selection and nativelike fluency</i>, in <i>Language and Communication</i>, "
    "edited by J. C. Richards and R. W. Schmidt, Longman, <b>1983</b>. Printed here in our own "
    "words.</p>"
    + table_html(["The puzzle","What is puzzling"],
      [["<b>nativelike selection</b>","the grammar permits an enormous number of ways to say any "
        "given thing, and a native speaker reliably produces one of the few that sound natural"],
       ["<b>nativelike fluency</b>","speakers produce long, well-formed, connected stretches in real "
        "time, apparently faster than they could be assembling them word by word"]])
    + "<p>The answer proposed covers both: speakers have memorized an extremely large stock of "
    "<b>lexicalized sentence stems</b> &mdash; partly fixed frames, usually about a clause long, with "
    "slots. <i>The question is whether ___</i>. <i>I don't see why ___</i>. Retrieved whole and "
    "filled, not built.</p>"
    "<p>Selection is then a choice among the stems you have, and fluency does not require planning "
    "nine words in sequence. The authors also report that fluent speech falls into <b>runs</b> of "
    "roughly clause length &mdash; something like eight to ten words &mdash; with hesitation "
    "<b>between</b> them rather than inside. Their phrase is <b>one clause at a time</b>.</p>"
    "<p>And it explains something frustrating: <b>fluency and novelty pull against each other</b>. "
    "Everything you have said before comes out fast; everything genuinely new costs planning time.</p>"
    "<p><b>Two puzzles, and an estimate.</b> The authors call these <b>puzzles</b>, which is the "
    "honest word: the paper sets out two problems and offers a hypothesis. The number of stems is an "
    "<b>estimate of their own</b>, an order of magnitude rather than a count, quoted since as though "
    "it were measured. The evidence is largely <b>observational</b>. The planning argument rests on "
    "assumptions about working memory that belong to its period. And it is about <b>first-language "
    "speakers</b>: what to do with the Part 2 minute is ours.</p>",
    "Our summary of a published paper, named with its collection, its editors, its publisher and its "
    "year."), 650)
S["qf05-f6"]=lambda: f_realia(tbl("Stems with slots", None,
    ["The stem","What it does","Filled"],
    [["<b>the question is whether ___</b>","narrows the issue","The question is whether anybody checks."],
     ["<b>I don't see why ___</b>","resists a claim","I don't see why that should follow."],
     ["<b>what strikes me about ___ is ___</b>","buys a second and foregrounds","What strikes me about it is the timing."],
     ["<b>there is a case for ___</b>","concedes partially","There is a case for both, and a better one for the second."],
     ["<b>it is not so much ___ as ___</b>",B,B],
     ["<b>the point I would make is ___</b>",B,B]],
    note="Four cells are empty on purpose. Two of the six buy thinking time and two commit you."),
    700)
S["qf05-f7"]=lambda: f_realia(tbl("One two-minute answer, pauses marked", None,
    ["Run","Words","Hesitation inside it?"],
    [["1","9","no"],["2","11","no"],["3","4","<b>yes</b>"],["4","8","no"],["5","10","no"],
     ["6","3","<b>yes</b>"],["7","9","no"],["8","7","no"],["9","11","no"],["10","5","<b>yes</b>"],
     ["11","8","no"],["12","10","no"]],
    numcols=(0,1),
    note="Twelve runs, three with hesitation inside. The three are where the speaker was building. "
    "Our own invented transcript, drawn to show a shape."), 580)
S["qf05-f8"]=lambda: f_icons([("thread","a clean run"),("note","a short run with hesitation inside"),
    ("form","a stem with a slot"),("scissors","a sentence assembled word by word"),
    ("timer","a pause between runs"),("magnifier","where did the hesitation fall?")],3)
S["qf05-f9"]=lambda: f_realia(doc("Part 2 card &middot; practice, with a preparation box",
    "One minute. Write stems, not ideas.",
    "<p><b>Describe a place you go to when you want to think.</b></p>"
    "<p>You should say where it is, how often you go, what you do there, <b>and explain why it works "
    "for you.</b></p>"
    "<p style='background:#f0eef5;padding:8px;border-left:3px solid #4a3b6b'>"
    "<b>Preparation box</b><br>1 ______________________<br>2 ______________________<br>"
    "3 ______________________<br>4 ______________________<br>5 ______________________</p>",
    "<b>Five stems, not five ideas.</b> You already have the ideas."), 640)
S["qf05-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("mei",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("notebook",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"NINE OF TWELVE",[("clean","9"),("built","3")]),
    clockat=(630,42,22,11,30))
S["qf05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Fourteen short runs", None,
      "<p>Average length: <b>5.1 words</b>. Hesitation inside: <b>6 runs</b>.</p>"
      "<p>Total words: 71. Total time: 2 minutes.</p>", "Building."), 380)[0:3],
    lambda w,h: f_realia(doc("Nine long runs", None,
      "<p>Average length: <b>9.2 words</b>. Hesitation inside: <b>0 runs</b>.</p>"
      "<p>Total words: 83. Total time: 2 minutes.</p>", "Retrieving."), 380)[0:3],
    800, 310, "Fourteen runs", "Nine runs")
S["qf05-f12"]=lambda: f_realia(doc("Two Part 2 answers", None,
    "<p><b>Answer 1.</b> <i>I want to talk about a book. The book is about history. It is a very "
    "interesting book because it tells about the past. I read it two years ago. I liked it because it "
    "was interesting.</i></p>"
    "<p><b>Answer 2.</b> <i>The book I would choose is a history of one street, which sounds narrow "
    "and turns out not to be. What strikes me about it is how much a single street can carry: it "
    "covers two hundred years without ever leaving the same four hundred meters. The question is "
    "whether that is history or something closer to biography, and I don't see why it has to be one "
    "or the other.</i></p>",
    "Three stems in the second, and nothing in it had to be built."), 650)
S["qf05-f13"]=lambda: f_realia(form("The one-minute box",
    [("Stem one",B),("Stem two",B),("Stem three",B),("Stem four",B),("Stem five",B),
     ("The content that goes in the slots",B)],
    note="Sixty seconds. Five lines. Nothing but frames."), 580)
S["qf05-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("mei",340,190,{"seated":True}),("lars",470,184,{}),
     ("yusuf",560,188,{"seated":True}),("chiamaka",660,186,{}),("oksana",740,190,{"seated":True}),
     ("samira",830,186,{}),("tomas",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("form",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"ONE CLAUSE AT A TIME",
      [("run","~9 words"),("pause","between")]),
    clockat=(650,40,22,2,0))
S["qf05-f15"]=lambda: f_chart([("ideas",5),("a plan",2),("phrases",1),("nothing",2),
    ("the first sentence",1)], w=560)
S["qf05-f16"]=lambda: f_realia(doc("On the desk, afternoon",
    "Twelve runs bracketed, three marked with internal hesitation",
    "<p><b>The three:</b> four words, three words, five words.</p>"
    "<p><b>What she was building in the first:</b> <i>the question is whether anybody enforces "
    "it</i> &mdash; a stem she already knew.</p>"
    "<p><b>Fluency:</b> 7.0. <b>Nine clean runs, average 9.4 words.</b></p>"
    "<p><b>Beside it:</b> a collection dated 1983 and a sheet of twenty stems.</p>",
    "Nine out of twelve retrieved. Three built, and the three were the ones that were heard."), 640)

# ---------------- Unit 6 ----------------
S["qf06-f1"]=lambda: f_icons([("head","an intention"),("speechbubble","a preverbal message"),
    ("form","a grammatical frame"),("tally","a sound shape"),
    ("megaphone","a mouth articulating"),("eye","an ear on your own voice"),
    ("racking","a lexicon in two stores"),("note","a meaning card and a sound card"),
    ("danger","a word on the tip of the tongue"),("review","a repair in four parts"),
    ("magnifier","an editing term circled"),("library","a book dated 1989"),
    ("notebook","a transcript of repairs"),("proof","a tick"),("pen","a cross"),
    ("thread","a question over a blank")],4)
S["qf06-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("oksana",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"FOUR BOXES, ONE LOOP",
      [("3","articulate"),("loop","back to 2")]),
    clockat=(622,44,22,11,30))
S["qf06-f3"]=lambda: f_icons([("speechbubble","a preverbal message"),("form","a grammatical frame"),
    ("tally","a sound plan"),("megaphone","overt speech"),
    ("eye","an ear monitoring it"),("magnifier","four stages, and a loop")],3)
S["qf06-f4"]=lambda: f_realia(tbl("Team research &middot; collect your repairs", None,
    ["What I said","Where I broke off","The editing term","The correction","Editing, or failing?"],
    br(8,5),
    note="How many had no editing term: ______________________"), 700)
S["qf06-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Speaking class",
    "The stages between meaning something and saying it &middot; page 1 of 1",
    "<p><b>The source.</b> Willem J. M. Levelt, <i>Speaking: From Intention to Articulation</i>, MIT "
    "Press, <b>1989</b>. Printed here in our own words.</p>"
    + table_html(["The stage","What it produces"],
      [["<b>conceptualizing</b>","a <b>preverbal message</b>: the content, organized, but not yet in "
        "any words"],
       ["<b>grammatical encoding</b>","a structure, with words selected for their meaning and grammar"],
       ["<b>phonological encoding</b>","a plan for the sound of the thing"],
       ["<b>articulating</b>","overt speech"]])
    + "<p>Two features matter to you. <b>The mental lexicon has two parts for every word.</b> A "
    "<b>lemma</b> carries meaning and grammatical behavior; a <b>word form</b> carries sounds and "
    "endings, and they are retrieved separately. That is the explanation for having the lemma and not "
    "the form &mdash; which means <b>paraphrase is available when the word is not</b>.</p>"
    "<p><b>Speakers monitor their own speech.</b> The model includes a loop by which a speaker hears "
    "their output, and also inspects the plan before it is spoken, and may interrupt. The analysis of "
    "recorded self-repairs finds a structure:</p>"
    "<p style='text-align:center;font-size:15px'><b>the original utterance &rarr; the interruption "
    "&rarr; an editing term &rarr; the repair</b></p>"
    "<p>The third element is the one candidates leave out. <i>It was in 2018 &mdash; sorry, 2019.</i> "
    "The word <i>sorry</i> marks the break as deliberate; without it the same correction is a "
    "stumble.</p>"
    "<p><b>A model of speaking a first language.</b> Built from experimental psycholinguistics and "
    "corpora of self-repairs of its period. <b>It is not about second-language speaking</b>, where two "
    "lexicons are involved and the question of how they interact is one this book does not take up. "
    "The <b>architecture has been argued about</b> &mdash; how separate the stages are, whether they "
    "run strictly in order &mdash; and the author revised parts of it later. And it is <b>not a "
    "method</b>: the advice about paraphrase and editing terms is ours.</p>",
    "Our summary of a published book, named with its publisher and its year."), 650)
S["qf06-f6"]=lambda: f_realia(tbl("Editing terms", None,
    ["The term","What it marks","An example"],
    [["<b>sorry</b>","a factual correction","It was 2018 &mdash; sorry, 2019."],
     ["<b>or rather</b>","a better word for the same thing","a ban, or rather a restriction"],
     ["<b>I mean</b>","a restatement of the whole idea","I mean, nobody actually checks."],
     ["<b>that is</b>","a narrowing","the cost, that is the first-year cost"],
     ["<b>what I should say is</b>",B,B],
     ["<b>no</b>",B,B]],
    note="Four cells are empty on purpose. Two of these mark a wrong fact and two a wrong word."),
    700)
S["qf06-f7"]=lambda: f_matrix(["The original","Broke off at","Editing term","The correction"],
    [("1",["<i>It was in 2018</i>","after the year","sorry","<i>2019</i>"]),
     ("2",["<i>a complete ban on</i>","after <i>ban</i>","or rather","<i>a restriction with exemptions</i>"]),
     ("3",["<i>everybody agrees that</i>","after <i>everybody</i>","&mdash;","<i>most specialists agree that</i>"]),
     ("4",["<i>the cost is very high</i>","after <i>high</i>","that is","<i>high in the first two years</i>"]),
     ("5",["<i>they did a research</i>","after <i>a</i>","&mdash;","<i>they conducted a study</i>"]),
     ("6",["<i>it proves that</i>","after <i>proves</i>","I mean","<i>it suggests that</i>"])], 760)
S["qf06-f8"]=lambda: f_icons([("note","a meaning card"),("tally","a sound card"),
    ("thread","both cards linked"),("danger","a word on the tip of a tongue"),
    ("speechbubble","a paraphrase"),("magnifier","which half have you got?")],3)
S["qf06-f9"]=lambda: f_realia(tbl("A Part 3 exchange, repairs marked", None,
    ["","What was said","Editing term?"],
    [["1","<i>It was fifty &mdash; sorry, sixty per cent.</i>","yes"],
     ["2","<i>a ban &mdash; or rather, a restriction</i>","yes"],
     ["3","<i>everybody&hellip; most people&hellip; agrees</i>","<b>no</b>"],
     ["4","<i>the cost, that is the first-year cost</i>","yes"],
     ["5","<i>it proves&hellip; it shows&hellip; that</i>","<b>no</b>"],
     ["6","<i>I mean, nobody enforces it</i>","yes"],
     ["7","<i>the word is&hellip; the word is&hellip;</i>","<b>no</b>"]],
    numcols=(0,),
    note="<b>The repair is not the problem; the silence is.</b> Seven repairs, four with a term."),
    640)
S["qf06-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("oksana",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("notebook",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"SEVEN REPAIRS",[("with a term","4"),("bare","3")]),
    clockat=(630,42,22,12,0))
S["qf06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Five bare restarts", None,
      "<p><i>The figure was fifty&hellip; sixty&hellip; sixty per cent, and this proves&hellip; "
      "shows&hellip; that it worked.</i></p>"
      "<p>Repairs: <b>5</b>. Editing terms: <b>0</b>.</p>", "Heard as trouble."), 380)[0:3],
    lambda w,h: f_realia(doc("Five repairs with terms", None,
      "<p><i>The figure was fifty &mdash; sorry, sixty per cent, which suggests rather than proves "
      "that it worked.</i></p>"
      "<p>Repairs: <b>5</b>. Editing terms: <b>5</b>.</p>", "Heard as precision."), 380)[0:3],
    800, 310, "Bare", "With terms")
S["qf06-f12"]=lambda: f_realia(doc("Two answers to one question", None,
    "<p><b>Answer 1.</b> <i>The figure was fifty&hellip; sixty&hellip; sixty per cent, and this "
    "proves&hellip; shows&hellip; that the policy worked. Everybody&hellip; most people&hellip; agrees "
    "that the main problem is the&hellip; the&hellip; I cannot remember the word.</i></p>"
    "<p><b>Answer 2.</b> <i>The figure was fifty &mdash; sorry, sixty per cent, which suggests rather "
    "than proves that the policy worked. Everybody agrees &mdash; well, most specialists agree &mdash; "
    "that the difficulty is what you might call the gap between what the rule says and what anybody "
    "enforces. Enforcement, that is the word I wanted.</i></p>",
    "The same five corrections, and one paraphrase that kept the run going."), 650)
S["qf06-f13"]=lambda: f_realia(form("Repair planner",
    [("The question",B),("One claim I will overstate and withdraw",B),
     ("The editing term I will use",B),("One word I will paraphrase",B),("The paraphrase",B)],
    note="Say the paraphrase aloud and let somebody guess the word."), 580)
S["qf06-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("oksana",340,190,{"seated":True}),("grace",470,184,{}),
     ("junseo",560,188,{"seated":True}),("marek",660,186,{}),("mei",740,190,{"seated":True}),
     ("nour",830,186,{}),("ines",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("notebook",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"ONE SYLLABLE IN THE MIDDLE",
      [("bare","a stumble"),("with a term","editing")]),
    clockat=(650,40,22,3,0))
S["qf06-f15"]=lambda: f_chart([("wait for it",4),("describe it",2),("use a simpler word",3),
    ("change the sentence",1),("stop and start again",1)], w=580)
S["qf06-f16"]=lambda: f_realia(doc("On the desk, afternoon",
    "Seven repairs marked, three circled in red",
    "<p><b>With an editing term:</b> four. Not marked at all by the examiner.</p>"
    "<p><b>Bare restarts:</b> three. All three circled.</p>"
    "<p><b>Fluency:</b> 7.0.</p>"
    "<p><b>Beside it:</b> a book dated 1989, a four-part repair diagram, and a sheet of editing "
    "terms.</p>",
    "Seven corrections. The marker heard four of them as precision and three as trouble."), 640)
