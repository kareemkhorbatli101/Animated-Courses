# -*- coding: utf-8 -*-
"""Plumbline Book 3 figure specs, Units 11 and 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 11 ----------------
S["qc11-f1"]=lambda: f_icons([("wordcount","a sentence measured"),
    ("quotemark","a word in syllables"),("calculator","a formula"),
    ("scales","a score from nought to a hundred"),("scissors","a long sentence cut in half"),
    ("chain","two short sentences joined"),("stars","a page with a high score"),
    ("noentry","a page with a low one"),("student","a reader who knows nothing of the topic"),
    ("teacher","a reader who knows it well"),("thread","a chain of reference words"),
    ("signpost","an argument drawn as steps"),("library","a cover dated 1948"),
    ("door","a gate with a number on it"),("review","a tick"),("proof","a footnote")],4)
S["qc11-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("ines",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("essay",390,196,0.24),("board",92,86,0.9),
     ("calculator",470,198,0.2),("window",790,56,0.94)],
    board=(626,22,258,126,"ONE PARAGRAPH, THREE SCORES",[("as written","44"),("chopped","66"),("joined","18")]),
    clockat=(576,44,22,14,30))
S["qc11-f3"]=lambda: f_icons([("wordcount","a sentence counted in words"),
    ("quotemark","a word counted in syllables"),("calculator","the formula"),
    ("scales","a score"),("scissors","a long sentence cut"),
    ("magnifier","two things counted, everything else invisible")],3)
S["qc11-f4"]=lambda: f_realia(tbl("Team research &middot; score three versions", None,
    ["The version","Average sentence length","Syllables per 100 words","The score",
     "Actually easier?"],
    br(3,5),
    note="The version we would give a student: ______________________"), 700)
S["qc11-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Reading class",
    "How a machine decides a page is hard &middot; page 1 of 1",
    "<p><b>The source.</b> Rudolf Flesch, <i>A new readability yardstick</i>, Journal of Applied "
    "Psychology, <b>1948</b>. Printed here in our own words.</p>"
    "<p>The paper offers a way of scoring how hard a piece of English prose is to read, from two "
    "numbers: the <b>average length of its sentences</b>, in words, and the <b>average number of "
    "syllables</b> per hundred words. Those two figures go into a formula and produce a score, higher "
    "meaning easier. Flesch also proposed a second score for how <b>interesting</b> a text is, built "
    "from the proportion of personal words and personal sentences &mdash; a reminder that the whole "
    "exercise was aimed at ordinary prose for general readers.</p>"
    "<p>The formula is useful, cheap and still in use after seventy-five years. It is also, by design, "
    "<b>blind</b>.</p>"
    + table_html(["What it counts","What it cannot see"],
      [["average sentence length","whether the sentences are connected"],
       ["average syllables per hundred words","whether the words are frequent or rare"],
       ["","cohesion: the <i>this</i>, <i>such</i> and <i>the latter</i> of Unit 6"],
       ["","whether there is an argument, and whether it holds"],
       ["","the reader, and whether the reader knows the topic"]])
    + "<p><b>The consequence is a trick anybody can play.</b> Take a hard paragraph and chop every "
    "sentence in half. The average sentence length falls, the score rises, and the text becomes harder "
    "to read, because the relations between the clauses have been thrown away. A formula can be "
    "satisfied by making a text worse.</p>"
    "<p>The validation was against a set of passages and criteria <b>of its period</b>, for English "
    "prose aimed at general readers. It was not built for academic text, and it was not built for "
    "readers of English as a second language &mdash; for whom vocabulary coverage, not sentence "
    "length, is the thing Unit 4 showed to matter most.</p>"
    "<p><b>And this series uses one anyway.</b> Every reading text in every book of this series is "
    "scored with a readability formula before the book is built, and a text outside a set range is "
    "rewritten. This unit is the honest note on that practice. A formula is a <b>floor, not a "
    "judge</b>: it catches a text that has drifted far from its level, and it cannot tell anybody "
    "whether a text is any good. Everything that makes the texts in this series readable &mdash; one "
    "idea at a time, a named source, a short honest paragraph at the end &mdash; is invisible to the "
    "number that approves them.</p>",
    "Our summary of a published paper. It is short, and the formula is on one page."), 620)
S["qc11-f6"]=lambda: f_realia(tbl("Breaking a long sentence", None,
    ["The long sentence","Two sentences, relation kept","The word that keeps it"],
    [["<i>Although the method failed twice, it was revived in 1961.</i>",
      "<b>The method failed twice. Even so, it was revived in 1961.</b>","<i>even so</i>"],
     ["<i>The figures are incomplete, so no estimate is possible.</i>",
      "<b>The figures are incomplete. No estimate is therefore possible.</b>","<i>therefore</i>"],
     ["<i>Because the records burned, the date cannot be checked.</i>",
      "<b>The records burned. The date cannot be checked as a result.</b>","<i>as a result</i>"],
     ["<i>While the sample was small, the result was consistent.</i>",B,B],
     ["<i>The scheme was approved, but nothing was built for nine years.</i>",B,B]],
    note="Four cells are empty on purpose. Breaking a sentence raises the score; keeping the "
    "connector keeps the meaning."), 680)
S["qc11-f7"]=lambda: f_matrix(["Average sentence length","Syllables per 100","Score"],
    [("as written",["21 words","168","44"]),("chopped",["7 words","168","<b>66</b>"]),
     ("joined",["52 words","168","18"])], 580)
S["qc11-f8"]=lambda: f_icons([("wordcount","a sentence measured in words"),
    ("quotemark","a word counted in syllables"),("calculator","a formula"),
    ("scales","a score"),("scissors","a long sentence cut in half"),
    ("door","a floor, not a judge")],3)
S["qc11-f9"]=lambda: f_realia(doc("One paragraph, three versions",
    "The syllable count is identical in all three",
    "<p><b>As written &mdash; score 44.</b> Although the first survey found no such pattern, later "
    "work confirmed it, and the method, which had been abandoned twenty years earlier, was revived in "
    "1961 after the committee examined what remained of the correspondence.</p>"
    "<p><b>Chopped &mdash; score 66.</b> The first survey found no such pattern. Later work confirmed "
    "it. The method had been abandoned. This was twenty years earlier. It was revived in 1961. The "
    "committee examined the correspondence. Some of it remained.</p>"
    "<p><b>Joined &mdash; score 18.</b> Although the first survey found no such pattern, later work "
    "confirmed it, and the method, which had been abandoned twenty years earlier on grounds that were "
    "never written down, was revived in 1961 after the committee, whose members disagreed about almost "
    "everything else, examined what remained of the correspondence and reported in favor of the "
    "scheme.</p>"
    "<p style='color:#6b6861;font-size:13px'>Syllables per hundred words: <b>168</b> in all three. The "
    "entire difference between 18 and 66 is punctuation.</p>",
    "Our own paragraph, written for this book. The formula is real; the paragraph is ours."), 640)
S["qc11-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("ines",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("essay",360,196,0.24),("computer",490,142,0.42),
     ("calculator",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"A SMOKE ALARM",[("not","a critic")]),
    clockat=(680,44,22,15,0))
S["qc11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The original &mdash; 44", None,
        "<p>Three clauses joined, with the relations marked.</p>"
        "<p style='color:#6b6861;font-size:13px'>Harder by the number, easier to follow.</p>"),
        w)[0:3],
    lambda w,h: f_realia(doc("The chopped version &mdash; 66", None,
        "<p>Seven short sentences, the same words, no relations.</p>"
        "<p style='color:#6b6861;font-size:13px'>Easier by the number, and the reader now has to "
        "guess.</p>"), w)[0:3],
    w=900, h=270)
S["qc11-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>The second passage had a readability score of 41, which means it was hard, so my score "
        "was not my fault.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>I scored one practice passage with a readability formula on <b>4 July</b> and got "
        "<b>41</b>. The formula uses two numbers only: average sentence length and syllables per "
        "hundred words. I then chopped every sentence in half without changing a word, and the score "
        "rose to <b>63</b> while the paragraph became much harder to follow, because the relations "
        "between the clauses had gone. So the formula cannot see whether sentences are connected, "
        "whether the words are rare, whether there is an argument, or whether I know the topic &mdash; "
        "and it was validated on general prose of the 1940s rather than on academic text or "
        "second-language readers. The books in this series are scored with such a formula before they "
        "are built, which is a floor and not a judgment, and this unit is the note that says so.</p>"
        ), w)[0:3],
    w=940, h=360)
S["qc11-f13"]=lambda: f_realia(form("Note planner",
    [("The passage and its score",""),("The two variables",""),
     ("My chopped version and its score",""),("Four things the formula cannot see",""),
     ("What it was validated on",""),("What a formula is good for","")]), 560)
S["qc11-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("ines",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("junseo",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("nour",590,170,{}),("oksana",655,172,{}),
     ("marek",720,170,{}),("samira",785,172,{}),("hana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("essay",350,198,0.24),
     ("printer",430,196,0.3),("calculator",560,198,0.2),("table",650,0,1.0),
     ("library",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,236,116,"A FLOOR, NOT A JUDGE",[("counts","two things"),("blind to","the rest")]),
    clockat=(296,34,22,16,0))
S["qc11-f15"]=lambda: f_chart([("unknown words",5),("long sentences",1),
    ("reference chains",2),("an argument I cannot find",2),("a topic I know nothing about",1)])
S["qc11-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Four passages, and no relation",
    table_html(["Passage","Readability score","How hard she found it","Unknown words in 100",
      "An argument in it?"],
      [["A","41","hardest","7","yes"],["B","52","second hardest","6","yes"],
       ["C","38","easiest","2","no"],["D","55","second easiest","3","no"]])
    + "<p><b>The score</b> does not track her experience. <b>The unknown-word count</b> and <b>whether "
    "there was an argument</b> both do.</p>"
    "<p><b>A card</b> with the formula written on it.</p>",
    "Seven o'clock. Four passages is too few to settle anything, and the pattern is in the two columns "
    "the formula cannot see."), 680)

# ---------------- Unit 12 ----------------
S["qc12-f1"]=lambda: f_icons([("book","three stapled passages"),
    ("dashboard","a construct with a question mark"),("eye","an eye stopped on a word"),
    ("essay","one word in fifty replaced"),("notebook","ten sublists"),
    ("transfer","an arrow pointing back"),("flashcard","four cards with a rule"),
    ("note","a paragraph reduced to one line"),("odometer","a stopwatch beside a page"),
    ("quotemark","a hedge in bold"),("calculator","a formula"),
    ("recycle","six qualities in a ring"),("thread","a paraphrase with a changed class"),
    ("stars","a tick"),("noentry","a cross"),("proof","one plan")],4)
S["qc12-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("nour",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("note",390,196,0.24),("board",90,86,0.92),
     ("recycle",470,198,0.22),("window",790,56,0.94)],
    board=(620,22,264,128,"SIX QUALITIES, NO FORMULA",[("usefulness","overriding"),("weights","none")]),
    clockat=(570,44,22,15,0))
S["qc12-f3"]=lambda: f_icons([("scales","reliability: a steady scale"),
    ("stars","construct validity: the right target"),("essay","authenticity: a real page"),
    ("handsup","interactiveness: a reader engaged"),("worldmap","impact: consequences beyond the test"),
    ("calculator","practicality: a budget and a clock")],3)
S["qc12-f4"]=lambda: f_realia(tbl("Team research &middot; the eleven, in one line each", None,
    ["Unit","The source","What it gives you","What it does not cover"],
    br(11,4),
    note="The one we would keep if we could keep one: ______________________"), 680)
S["qc12-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; one page for a new Reading student",
    "What makes a test useful, and everything in Book 3 &middot; page 1 of 1",
    "<p><b>The source.</b> L. F. Bachman and A. S. Palmer, <i>Language Testing in Practice</i>, "
    "Oxford University Press, <b>1996</b>, with a review of the eleven sources of this book. Printed "
    "here in our own words.</p>"
    + table_html(["The quality","What it asks"],
      [["<b>Reliability</b>","would the same person get a similar score again?"],
       ["<b>Construct validity</b>","is the test measuring what it claims to measure?"],
       ["<b>Authenticity</b>","does the task resemble real language use?"],
       ["<b>Interactiveness</b>","does the task engage the test taker's own knowledge and ability?"],
       ["<b>Impact</b>","what does the test do to people, teaching and institutions?"],
       ["<b>Practicality</b>","can it be built and run with the resources available?"]])
    + "<p><b>The important claim.</b> These six <b>cannot be evaluated separately</b>, and they "
    "<b>trade off</b>. Making a reading task more authentic may make it less reliable, because real "
    "tasks behave less consistently. Raising reliability by adding many short items may lower "
    "authenticity, because nobody outside a test reads like that. And the authors give <b>no "
    "formula</b> for the balance: usefulness has to be argued for <b>a particular test, used with "
    "particular people, for a particular purpose</b>, and the argument is the work.</p>"
    "<p><b>The eleven, in one line each.</b> <b>The paper:</b> three passages, forty questions, sixty "
    "minutes, no extra time &mdash; <i>a design, not your paper</i>. <b>Measurement:</b> a test infers "
    "reading from items &mdash; <i>some items need no text</i>. <b>The eye:</b> a span of about fifteen "
    "letters &mdash; <i>laboratory work, no training</i>. <b>Coverage:</b> about one unknown word in "
    "fifty &mdash; <i>one fiction text, a probable threshold</i>. <b>The academic list:</b> 570 "
    "families, a tenth of academic text &mdash; <i>it excludes the commonest two thousand</i>. "
    "<b>Cohesion:</b> <i>this</i> can point at a whole stretch &mdash; <i>cohesion is not "
    "coherence</i>. <b>Verdicts:</b> find the sentence that would make it false &mdash; <i>the analogy "
    "is ours</i>. <b>Gist:</b> delete, generalize, construct &mdash; <i>a model rebuilt twice</i>. "
    "<b>Rate:</b> 250 to 300 against often under 150 &mdash; <i>approximate, and nothing about you</i>. "
    "<b>Stance:</b> hedges and boosters &mdash; <i>coding is interpretive</i>. <b>Readability:</b> "
    "sentence length and syllables &mdash; <i>blind to everything else, and this series uses one "
    "anyway</i>.</p>"
    "<p><b>No formula, on purpose.</b> The framework is written for test developers, not candidates: "
    "there is nothing in it about answering a question, and it makes no claim about anybody's band. It "
    "is of its period, and the field has moved since 1996, particularly towards treating validity as "
    "an argument to be built and evaluated rather than a quality to be possessed. And its central "
    "honesty is the one worth keeping: <b>a measure can be imperfect, carefully built, and the best "
    "available, all at once</b> &mdash; and saying all three at once is harder than praising it or "
    "attacking it.</p>",
    "Our summary of a published book. Read the chapter on usefulness if you read nothing else."), 640)
S["qc12-f6"]=lambda: f_realia(tbl("Paraphrase across a change of class", None,
    ["In the passage","In the question","What changed"],
    [["<i>the figures were revised twice</i>","<i>two revisions were made</i>",
      "verb &rarr; noun, active &rarr; passive"],
     ["<i>the method is highly reliable</i>","<i>the reliability of the method</i>",
      "adjective &rarr; noun"],
     ["<i>few sites produced pottery</i>","<i>most sites produced none</i>","a negative restated"],
     ["<i>the scheme was approved in 1961</i>","<i>approval came in 1961</i>",B],
     ["<i>researchers disagree about the cause</i>","<i>there is no agreement on the cause</i>",B]],
    note="Two cells are empty on purpose. Almost every question in this paper is a paraphrase of a "
    "sentence in the passage."), 680)
S["qc12-f7"]=lambda: f_chart([("how I divide the hour",4),("how I handle true-false-not-given",3),
    ("how I match headings",2),("what I believe my score measures",1),("nothing yet",1)])
S["qc12-f8"]=lambda: f_icons([("book","three stapled passages"),
    ("padlock","a covered passage, two ticks"),("flashcard","four cards with a rule"),
    ("note","a paragraph in one line"),("quotemark","a hedge in bold"),
    ("recycle","six qualities in a ring")],3)
S["qc12-f9"]=lambda: f_realia(tbl("Personal plan &middot; the hour, and four habits",
    "Nour Khalil &middot; written on the question paper before the hour starts",
    ["Row","Minutes","What I do"],
    [["Passage 1","18","read once, answer, move when the time is up"],
     ["Passage 2","19","the same"],
     ["Passage 3","20","the same"],
     ["Check","3","every blank filled with something"],
     ["<b>Habit 1 (Unit 7)</b>","&mdash;","point at the sentence before writing <i>false</i>"],
     ["<b>Habit 2 (Unit 8)</b>","&mdash;","write my own five-word line before the headings"],
     ["<b>Habit 3 (Unit 10)</b>","&mdash;","underline the hedge before a <i>yes-no</i> statement"],
     ["<b>Habit 4 (Unit 6)</b>","&mdash;","read the whole previous sentence when a question turns on "
      "<i>this</i>"]],
    note="Eighteen, nineteen, twenty, three &mdash; and four habits. This plan rests on a measured "
    "rate of 140 words a minute and six practice papers, and both of those could be wrong."), 700)
S["qc12-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("nour",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("note",360,196,0.24),("computer",490,142,0.42),
     ("recycle",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"26 TO 33",[("accuracy","90 to 84"),("answered","29 to 40")]),
    clockat=(680,44,22,15,30))
S["qc12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Plan 1", None,
        "<p>Read every passage carefully. No times.</p>"
        "<p style='color:#6b6861;font-size:13px'>Likely blanks: nine to thirteen.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Plan 2", None,
        "<p>18, 19, 20, 3 &mdash; and four habits with unit numbers.</p>"
        "<p style='color:#6b6861;font-size:13px'>Likely blanks: none, and a lower accuracy.</p>"),
        w)[0:3],
    w=900, h=260)
S["qc12-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page 1", None,
        "<p>Read a lot. Learn more vocabulary. Do practice papers. Read the questions carefully. Do "
        "not panic.</p>"
        "<p style='color:#6b6861;font-size:13px'>Five sentences, and not one of them can be "
        "checked.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page 2", None,
        "<p>Eighteen minutes on Passage 1, nineteen on Passage 2, twenty on Passage 3, three to check, "
        "and I move when the time is up whatever happens. Four habits: point at the sentence before "
        "writing <i>false</i>; write my own five-word line before looking at the headings; underline "
        "the hedge before answering a <i>yes-no</i> statement; read the whole previous sentence when a "
        "question turns on <i>this</i>. My measured rate on academic prose is 140 words a minute, so "
        "one reading of three passages is about twenty minutes of the hour and I cannot read anything "
        "twice. My accuracy on attempted questions has fallen from 90 to 84 percent and my score has "
        "risen from 26 to 33, because I now answer all forty. This plan is built on six practice "
        "papers and one measured rate, and both of those could be wrong.</p>"), w)[0:3],
    w=940, h=400)
S["qc12-f13"]=lambda: f_realia(form("One-page planner",
    [("My three times",""),("The checking minutes",""),("Four habits",""),
     ("My measured rate",""),("Minutes to read three passages",""),("My accuracy",""),
     ("My score",""),("The sentence at the foot","")]), 560)
S["qc12-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("nour",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("grace",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("hana",515,176,{"seated":True}),("oksana",590,170,{}),("junseo",655,172,{}),
     ("ines",720,170,{}),("marek",785,172,{}),("samira",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("note",350,198,0.24),
     ("printer",430,196,0.3),("book",560,198,0.24),("table",650,0,1.0),
     ("bag",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,250,118,"SIX QUALITIES, NO FORMULA",[("they","trade off")]),
    clockat=(312,34,22,9,0))
S["qc12-f15"]=lambda: f_chart([("obey the three times",4),("point at the sentence",3),
    ("write my own line first",2),("underline the hedge",1),("I am not sure yet",1)])
S["qc12-f16"]=lambda: f_realia(doc("On a desk in the morning",
    "Accuracy down six, score up seven",
    table_html(["","At the start","Now"],
      [["Questions attempted","29","40"],["Questions right","26","33"],
       ["Accuracy on attempted","90%","84%"],["Score","26","33"],
       ["Questions blank","11","0"],["Minutes on Passage 1","26","18"]])
    + "<p><b>Six practice papers</b> with scores from 26 to 33.</p>"
    "<p><b>A sheet</b> with six qualities arranged in a ring and no numbers beside them.</p>"
    "<p><i>She still thinks the old way was better reading. She is almost certainly right, and the "
    "paper does not ask for the old way.</i></p>",
    "Eight o'clock. Something real was traded for something that counts."), 680)
