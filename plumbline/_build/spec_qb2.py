# -*- coding: utf-8 -*-
"""Plumbline Book 2 figure specs, Units 4 to 7."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 4 ----------------
S["qb04-f1"]=lambda: f_icons([("noentry","an ear with a crossed line"),
    ("scissors","a boundary in the wrong place"),("review","two words that sound alike"),
    ("today","the same beats under two phrases"),("notebook","dated entries"),
    ("quotemark","target and heard"),("thread","a compound as one shape"),
    ("signal","the same two words as two shapes"),("tally","a tally sheet"),
    ("magnifier","a corpus"),("meeting","a crowd of speech bubbles"),
    ("speechbubble","one bubble with a question mark"),("pen","a researcher writing"),
    ("stars","a tick"),("noentry","a cross"),("form","a footnote")],4)
S["qb04-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("marek",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",390,196,0.26),("board",100,86,0.82),
     ("notebook",470,198,0.22),("window",790,56,0.94)],
    board=(650,22,234,118,"SAID AND HEARD",[("same beats","four times"),("both real","English")]),
    clockat=(600,44,22,10,30))
S["qb04-f3"]=lambda: f_icons([("scissors","the cut in the wrong place"),
    ("signal","a small word swapped"),("review","a similar content word"),
    ("today","the rhythm preserved"),("speechbubble","the listener unaware"),
    ("magnifier","always a real phrase")],3)
S["qb04-f4"]=lambda: f_realia(tbl("Team research &middot; your own collection", None,
    ["What was said","What I heard","Kind of slip","Did the rhythm match"],
    br(8,4),
    note="The one nobody noticed at the time: ______________________"), 660)
S["qb04-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Listening class",
    "What happens when a listener gets it wrong &middot; page 1 of 1",
    "<p><b>The source.</b> Z. S. Bond, <i>Slips of the Ear: Errors in the Perception of Casual "
    "Conversation</i>, Academic Press, <b>1999</b>. Printed here in our own words; the examples in "
    "our table are invented, not hers.</p>"
    "<p>For years the author and her colleagues carried notebooks and wrote down <b>misperceptions</b> "
    "as they happened: what a speaker had said, what the listener had heard, and the situation. The "
    "result is a collection of around nine hundred real slips of the ear, in ordinary casual "
    "conversation, almost all of them made by people whose first language was English.</p>"
    + table_html(["The kind of slip","What happens","An invented example"],
      [["<b>A boundary in the wrong place</b>","the sounds are right, the cut is not",
        "<i>a nice cold drink</i> heard as <i>an ice-cold drink</i>"],
       ["<b>A function word swapped</b>","a flattened small word recovered wrongly",
        "<i>waiting for the bus</i> heard as <i>waiting at the bus</i>"],
       ["<b>A similar content word</b>","one word replaces another of the same shape",
        "<i>the clearing</i> heard as <i>the clearance</i>"]])
    + "<p><b>Four things in the collection matter to a learner.</b> A mishearing is almost always a "
    "<b>real phrase</b> &mdash; grammatical, plausible, believed. <b>The rhythm survives</b>: what is "
    "heard keeps the stress pattern and roughly the number of syllables. <b>Word boundaries move</b>, "
    "and a very large share of the slips are the right sounds cut in the wrong place, because speech "
    "has no spaces and the cut is something the listener supplies. And <b>small words go first</b>: "
    "function words, already flattened, are the ones most often recovered wrongly, and the listener "
    "does not notice because the sentence still works.</p>"
    "<p><b>The last of the four is the uncomfortable one.</b> In many cases the listener had no idea "
    "anything had happened. The slip was caught because a second person was there, or because the "
    "conversation later made no sense. A listener alone with a recording has neither of those.</p>"
    "<p><b>A collection that cannot count itself.</b> This is an observational collection, not an "
    "experiment. Every slip in it is a slip somebody <b>noticed</b>. The ones nobody noticed are not "
    "in the book &mdash; so it can describe what misperceptions look like and it <b>cannot say how "
    "often they happen</b>. The author is explicit about this. It is also English casual conversation "
    "of one period, largely by native-speaking listeners; it does not claim to describe what learners "
    "mishear; and being observational it reports no cause.</p>",
    "Our summary of a published book. The value of it is the shape of the errors, not a number."),
    620)
S["qb04-f6"]=lambda: f_realia(tbl("Compound nouns", None,
    ["The compound","Where the stress goes","What it could be confused with"],
    [["<b>car park</b>","on <i>car</i>","<i>a parked car</i>"],
     ["<b>bus pass</b>","on <i>bus</i>","<i>a bus passed</i>"],
     ["<b>post office</b>","on <i>post</i>","<i>a posted office form</i>"],
     ["<b>ice cream</b>","on <i>ice</i>","<i>I scream</i>"],
     ["<b>greenhouse</b>",B,B],
     ["<b>blackboard</b>",B,B]],
    note="Four cells are empty on purpose. A greenhouse is a building; a green house is a house."),
    640)
S["qb04-f7"]=lambda: f_chart([("boundary in the wrong place",17),("function word swapped",13),
    ("similar content word",9),("stress pattern changed",2),("nobody noticed at the time",23)])
S["qb04-f8"]=lambda: f_icons([("scissors","a boundary in the wrong place"),
    ("signal","a small word swapped"),("review","two similar content words"),
    ("today","identical beats"),("speechbubble","a listener unaware"),
    ("notebook","dated entries")],3)
S["qb04-f9"]=lambda: f_realia(tbl("Collection sheet &middot; extract",
    "Nine rows, collected in one week. Every phrase in the second column is real English.",
    ["What was said","What was heard","Kind","Rhythm matched","Noticed at the time"],
    [["a nice cold drink","an ice-cold drink","boundary","yes","no"],
     ["waiting for the bus","waiting at the bus","function word","yes","no"],
     ["the clearing","the clearance","similar word","yes","yes"],
     ["some other reason","some mother's reason","boundary","yes","yes"],
     ["a great ape","a gray tape","boundary","yes","yes"],
     ["he's applied for it","he's apply for it","function word","yes","yes"],
     ["four forms","four from","boundary","yes","no"],
     ["the second half","the second hall","similar word","yes","yes"],
     ["it was lost","it was last","similar word","yes","yes"]],
    note="Our own sheet, written for this book. Every phrase in the second column is a real English "
    "phrase, which is why it was believed."), 680)
S["qb04-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("marek",400,176,{"seated":True}),("grace",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("notebook",360,196,0.24),("computer",490,142,0.42),
     ("form",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"DID IT FIT",[("heard","ice-cold"),("the form","a drink")]),
    clockat=(680,44,22,17,45))
S["qb04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Sheet 1", None,
        "<p>Four answers, all real English phrases, none of them fitting the gap:</p>"
        "<p style='font-size:14px'>an ice-cold &middot; waiting at &middot; the clearance &middot; "
        "the second hall</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Sheet 2", None,
        "<p>The same four gaps, filled with phrases that fit the headings:</p>"
        "<p style='font-size:14px'>cold drink &middot; the bus &middot; the clearing &middot; the "
        "second half</p>"), w)[0:3],
    w=900, h=270)
S["qb04-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I misheard four answers in Part 2. The speaker was difficult and the recording was not "
        "clear enough.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>In the practice paper on <b>4 March</b> I misheard four answers in Part 2. All four of "
        "the phrases I wrote are real English: two were the right sounds cut in the wrong place, one "
        "was a small word swapped, one was a word with the same shape as the target. In three of the "
        "four the printed words round the gap would have told me, because what I wrote did not fit "
        "the heading. A collection published in 1999 found that mishearings keep the rhythm of the "
        "target and are nearly always grammatical phrases &mdash; though it is a collection of errors "
        "somebody noticed, so it cannot say how often they happen, and it was made by native "
        "listeners. I now read every answer back against the heading.</p>"), w)[0:3],
    w=920, h=330)
S["qb04-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the part",""),("How many slips",""),("What I wrote and what was said",""),
     ("The kind of each slip",""),("How many the heading would have settled",""),
     ("My new check","")]), 560)
S["qb04-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("marek",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("grace",290,172,{}),("mei",365,176,{"seated":True}),("yusuf",440,172,{"seated":True}),
     ("lars",515,176,{"seated":True}),("nour",590,170,{}),("ines",655,172,{}),
     ("samira",720,170,{}),("hana",785,172,{}),("oksana",845,170,{}),
     ("junseo",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("notebook",350,198,0.24),
     ("printer",430,196,0.3),("flashcard",560,198,0.24),("table",650,0,1.0),
     ("book",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,236,114,"WHAT YOU HEAR IS REAL ENGLISH",[("said","a nice cold"),("heard","an ice-cold")]),
    clockat=(296,34,22,15,0))
S["qb04-f15"]=lambda: f_chart([("boundary in the wrong place",4),("small word swapped",2),
    ("similar-sounding word",2),("I do not know",2),("I never notice",1)])
S["qb04-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Twenty-nine slips in three weeks, all of them real English",
    table_html(["Kind of slip","Count","Noticed at the time"],
      [["Boundary in the wrong place","17","4"],
       ["Small word swapped","9","1"],
       ["Similar content word","3","1"],
       ["<b>Total</b>","<b>29</b>","<b>6</b>"]])
    + "<p><b>A card</b> of six compound nouns, marked for stress.</p>"
    "<p><i>Twenty-three of the twenty-nine he found out about afterwards, from a transcript. Six he "
    "noticed at the time.</i></p>",
    "Eight o'clock. He cannot know how many slips he made in three weeks, and neither can anybody "
    "else."), 640)

# ---------------- Unit 5 ----------------
S["qb05-f1"]=lambda: f_icons([("quotemark","the first sound of a word"),
    ("meeting","a crowd of candidates"),("student","one word left"),
    ("tally","a point marked before the end"),("pen","speech repeated as it arrives"),
    ("noentry","a mispronounced sound"),("speechbubble","a listener shadowing"),
    ("thread","a sentence that limits what follows"),("book","a dictionary open at candidate"),
    ("timer","a fraction of a second"),("odometer","a stopwatch"),
    ("clipboard","a laboratory"),("data","a model of boxes and arrows"),
    ("review","the same model, revised"),("stars","a tick"),("form","a footnote")],4)
S["qb05-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("junseo",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("note",390,196,0.24),("board",100,86,0.82),
     ("computer",470,142,0.4),("window",790,56,0.94)],
    board=(650,22,234,118,"TWELVE, FIVE, TWO, ONE",[("sound 1","twelve"),("sound 4","one")]),
    clockat=(600,44,22,11,0))
S["qb05-f3"]=lambda: f_icons([("meeting","twelve candidates"),("handsup","five"),
    ("student","one"),("tally","the recognition point"),
    ("thread","a sentence narrowing what follows"),("magnifier","the word ends after you know it")],3)
S["qb05-f4"]=lambda: f_realia(tbl("Team research &middot; find the recognition point", None,
    ["The word","Sounds heard before I knew it","Total sounds","Common word?","What I guessed first"],
    br(8,5),
    note="The word I never got: ______________________"), 700)
S["qb05-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Listening class",
    "How a word is recognized before it is finished &middot; page 1 of 1",
    "<p><b>The source.</b> W. D. Marslen-Wilson and A. Welsh, <i>Processing interactions and lexical "
    "access during word recognition in continuous speech</i>, Cognitive Psychology, <b>1978</b>. "
    "Printed here in our own words.</p>"
    "<p>The question the paper asks is small and the answer changed how people think about listening: "
    "<b>at what moment does a listener know which word they are hearing?</b></p>"
    + table_html(["Stage","What happens"],
      [["<b>1</b>","the first sounds arrive; every word you know that begins that way is in play"],
       ["<b>2</b>","more sound arrives; candidates that no longer fit drop out"],
       ["<b>3</b>","one candidate is left &mdash; the <b>recognition point</b>"],
       ["<b>4</b>","the rest of the word arrives after you have recognized it"]])
    + "<p>The paper's name for the set of candidates is a <b>cohort</b>. The recognition point very "
    "often comes <b>before the word has finished</b>, especially if the sentence has already made most "
    "words impossible.</p>"
    "<p><b>The evidence</b> came from asking people to <b>shadow</b> speech &mdash; to repeat it aloud "
    "a fraction of a second behind. Some words had been <b>mispronounced</b> on purpose. Listeners "
    "frequently repeated the correct word rather than the one they had heard, without noticing. These "
    "<b>restorations</b> happened most when the bad sound came <b>late</b> in the word and when the "
    "sentence strongly limited what could come next &mdash; exactly what you would expect if the word "
    "had already been recognized before the bad sound arrived.</p>"
    "<p><b>For a learner the consequence is immediate.</b> A listener who waits for the end of each "
    "word is working with the least useful part of it. The beginning carries most of the information, "
    "and the sentence carries the rest.</p>"
    "<p><b>A laboratory model, revised by its own author.</b> This is a model built from shadowing and "
    "mispronunciation detection, with a small number of native-speaking participants. The original "
    "version allowed the sentence to influence the cohort from the very start; <b>the first author "
    "revised that in 1987</b>, so that the initial cohort is formed from the sound alone and context "
    "acts later. A model its own author changes is working as a model should, and it is also a "
    "warning: this is a position in a continuing argument, not a fact about your ears. It says nothing "
    "about learners, nothing about whether recognition can be trained, and nothing about any "
    "examination.</p>",
    "Our summary of a published paper. Read it if your center has access; the shadowing task is the "
    "memorable part."), 620)
S["qb05-f6"]=lambda: f_realia(tbl("Words that force the next word", None,
    ["The word","What must follow","An example"],
    [["<b>depend</b>","on","It depends <b>on</b> the tutor."],
     ["<b>interested</b>","in","She is interested <b>in</b> linguistics."],
     ["<b>consist</b>","of","The course consists <b>of</b> four modules."],
     ["<b>responsible</b>","for","He is responsible <b>for</b> the reading list."],
     ["<b>apply</b>",B,B],
     ["<b>result</b>",B,B]],
    note="Four cells are empty on purpose. These words answer a gap before you hear it."), 620)
S["qb05-f7"]=lambda: f_matrix(["Sounds needed","Sounds in the word"],
    [("because",["2.4","7"]),("library",["3.1","7"]),("temporary",["4.2","9"]),
     ("threshold",["4.6","8"]),("calibration",["5.8","11"])], 540)
S["qb05-f8"]=lambda: f_icons([("meeting","many candidates"),("handsup","few"),
    ("student","one"),("tally","a line before the end of a word"),
    ("speechbubble","shadowing"),("noentry","a bad sound late in a word")],3)
S["qb05-f9"]=lambda: f_realia(doc("Practice page &middot; sentence completion",
    "Eight items. Four of these gaps are decided before you hear them.",
    table_html(["No.","Item"],
      [["1","The number of applicants depends ______________"],
       ["2","The tutor is responsible ______________"],
       ["3","The module consists ______________"],
       ["4","She applied ______________ three universities."],
       ["5","The delay resulted ______________ a change of room."],
       ["6","Most ______________ the class attended."],
       ["7","The seminar lasts ______________ minutes."],
       ["8","Bring a ______________ to the first session."]]),
    "Items 1 to 5 are answered by the printed word in front of them. Items 6 to 8 need the "
    "recording."), 620)
S["qb05-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("junseo",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("note",360,196,0.24),("computer",490,142,0.42),
     ("form",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"CONSISTS",[("what follows","of"),("always","of")]),
    clockat=(680,44,22,12,15))
S["qb05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page 1", None,
        "<p>Eight gaps, with the printed words before each one shown.</p>"
        "<p style='color:#6b6861;font-size:13px'>Five of the eight can be answered with no recording "
        "at all.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page 2", None,
        "<p>The same eight gaps, with the words before them removed.</p>"
        "<p style='color:#6b6861;font-size:13px'>None of the eight can be answered without the "
        "recording.</p>"), w)[0:3],
    w=900, h=260)
S["qb05-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I left four gaps blank in Part 3. The speakers were too fast for me and I could not keep "
        "up.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>In the practice paper on <b>11 March</b> I left four gaps blank in Part 3. Looking at the "
        "page afterwards, the printed word before three of the four forced the answer: <i>consists</i> "
        "can only be followed by <i>of</i>, <i>responsible</i> by <i>for</i>, <i>depends</i> by "
        "<i>on</i>. I did not use the thirty seconds before the part to read the gaps. A paper "
        "published in 1978 argues that a listener narrows the possible words from the first sounds and "
        "often recognizes a word before it finishes &mdash; a laboratory model, with native speakers, "
        "revised by its own first author in 1987, making no claim about learners or tests. From now on "
        "I read every gap in the thirty seconds and mark the ones already decided.</p>"), w)[0:3],
    w=920, h=330)
S["qb05-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the part",""),("How many gaps blank",""),("The word printed before each",""),
     ("What it forced",""),("What I did with the thirty seconds",""),
     ("My new routine","")]), 540)
S["qb05-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("junseo",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("mei",365,176,{"seated":True}),("nour",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("samira",590,170,{}),("marek",655,172,{}),
     ("ines",720,170,{}),("yusuf",785,172,{}),("hana",845,170,{}),
     ("oksana",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("note",350,198,0.24),
     ("printer",430,196,0.3),("flashcard",560,198,0.24),("table",650,0,1.0),
     ("headset",860,198,0.24),("shelf",930,96,0.5)],
    board=(40,22,230,114,"THE WORD ENDS AFTER YOU KNOW IT",[("beginning","most"),("end","least")]),
    clockat=(290,34,22,13,0))
S["qb05-f15"]=lambda: f_chart([("read every gap",2),("read some gaps",3),
    ("look at the pictures",1),("nothing",2),("worry about the part before",3)])
S["qb05-f16"]=lambda: f_realia(doc("On a desk at night",
    "Nineteen blanks, eleven of them already answered",
    table_html(["Paper","Gaps left blank","Answerable from the printed words alone"],
      [["1","6","3"],["2","4","3"],["3","5","3"],["4","4","2"],
       ["<b>Total</b>","<b>19</b>","<b>11</b>"]])
    + "<p><b>A list</b> of thirty words that force the word after them.</p>"
    "<p><i>He is an engineer. When this is pointed out to him he says it feels like cheating.</i></p>",
    "Eleven o'clock. Eleven marks were on the page before the recording started."), 640)

# ---------------- Unit 6 ----------------
S["qb06-f1"]=lambda: f_icons([("recycle","a loop of words"),
    ("pen","writing while a speaker continues"),("data","a row of eight digits"),
    ("signal","three of them faded"),("timer","two seconds"),
    ("speechbubble","repeating silently"),("note","a small sketch pad"),
    ("dashboard","a central box with two arrows"),("review","a fourth box added"),
    ("odometer","a stopwatch"),("clipboard","a laboratory bench"),
    ("notebook","a note with three abbreviations"),("noentry","a full sentence crossed out"),
    ("stars","a tick"),("scissors","a cross"),("magnifier","a footnote")],4)
S["qb06-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("mei",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("spreadsheet",390,196,0.24),("board",100,86,0.82),
     ("dashboard",470,198,0.22),("window",790,56,0.94)],
    board=(650,22,234,118,"THREE PARTS, AND A FOURTH",[("1974","three"),("2000","four")]),
    clockat=(600,44,22,11,30))
S["qb06-f3"]=lambda: f_icons([("dashboard","the central executive"),
    ("recycle","the phonological loop"),("note","the visuo-spatial sketchpad"),
    ("data","the three together"),("review","a fourth box, 2000"),
    ("timer","about two seconds unless you repeat it")],3)
S["qb06-f4"]=lambda: f_realia(tbl("Team research &middot; how long does it last?", None,
    ["The delay","Items written correctly","Out of","Did I repeat them silently","What I lost first"],
    br(6,5),
    note="The delay at which it collapsed: ______________________"), 700)
S["qb06-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Listening class",
    "The two seconds between hearing and writing &middot; page 1 of 1",
    "<p><b>The source.</b> A. D. Baddeley and G. Hitch, <i>Working Memory</i>, in <i>The Psychology "
    "of Learning and Motivation</i>, volume 8, <b>1974</b>. Printed here in our own words.</p>"
    "<p>Before this paper, the standard picture was simple: one short-term store, holding a few items "
    "for a short time. The authors proposed something else &mdash; a <b>working memory</b> with "
    "separate parts that do different jobs.</p>"
    + table_html(["The part","What it does"],
      [["<b>The central executive</b>","decides where attention goes; the manager"],
       ["<b>The phonological loop</b>","holds speech-based material &mdash; words, numbers, names"],
       ["<b>The visuo-spatial sketchpad</b>","holds pictures, shapes and positions"]])
    + "<p><b>The evidence</b> that forced the change came from asking people to do two things at "
    "once. If there were one single store, filling it with digits should wreck any other task that "
    "needed it. It did not: holding a string of digits made reasoning slower and a little less "
    "accurate, but people could still reason, far better than a single store predicted. So there had "
    "to be more than one part, working at the same time.</p>"
    "<p><b>The part that matters in a Listening paper is the loop.</b> It holds speech-based material "
    "for a couple of seconds and then fades, unless you <b>rehearse</b> it by saying it over to "
    "yourself. And writing an answer is <b>also</b> a speech-based task. While your hand is moving and "
    "your mind is spelling, you are using the same loop you were using to hold the next thing &mdash; "
    "and the next thing is arriving now.</p>"
    "<p>This is why <b>three blanks in a row</b> is the commonest shape of loss in a Listening paper, "
    "and why it is not a vocabulary problem and never was.</p>"
    "<p><b>A model, revised for twenty-six years.</b> This is a model, not a measurement, and it has "
    "been revised continuously since; a fourth component, the <b>episodic buffer</b>, was added by the "
    "first author in <b>2000</b>, so anybody citing four parts to the 1974 paper is citing something "
    "that is not in it. The evidence is from laboratory tasks &mdash; digit span, reasoning under "
    "load, word lists &mdash; and nobody was writing answers on an answer sheet. Figures for how much "
    "the loop holds vary with material and measurement, so <i>two seconds</i> is an order of magnitude "
    "and not a specification. And it is a model of a system, not a technique: it explains why short "
    "answers survive and long ones do not, and it does not tell you how to write short.</p>",
    "Our summary of a published chapter. The digit-load experiment is the part worth reading."), 620)
S["qb06-f6"]=lambda: f_realia(tbl("Writing short", None,
    ["The full answer","Short enough to write","Why that is enough"],
    [["<i>in the main reception area</i>","<b>reception</b>","the gap asked for a place"],
     ["<i>on the fourteenth of March</i>","<b>14 Mar</b>","the gap asked for a date"],
     ["<i>forty-five a week</i>","<b>45</b>","the gap asked for a number"],
     ["<i>Doctor Helena Varga</i>","<b>Varga</b>","the gap asked for a surname"],
     ["<i>at half past two in the afternoon</i>",B,B],
     ["<i>the north entrance of the library</i>",B,B]],
    note="Four cells are empty on purpose. A short answer can be wrong if the gap wanted more: read "
    "the heading."), 640)
S["qb06-f7"]=lambda: f_matrix(["Silence","With silent rehearsal"],
    [("2 seconds",["7.1","7.4"]),("4 seconds",["5.6","6.9"]),
     ("8 seconds",["3.2","6.1"]),("16 seconds",["1.8","4.4"])], 520)
S["qb06-f8"]=lambda: f_icons([("dashboard","a central box"),("recycle","a loop of words"),
    ("note","a sketch pad"),("speechbubble","repeating silently"),
    ("data","digits, three of them faded"),("review","a fourth box, 2000")],3)
S["qb06-f9"]=lambda: f_realia(doc("Practice answer sheet &middot; extract",
    "Questions 9 to 20. Four long answers circled; the blanks come after them.",
    table_html(["No.","What was written","Note"],
      [["9","car park","&mdash;"],["10","14 March","&mdash;"],
       ["11","<b>in the main reception area</b>","five words for a one-word gap"],
       ["12","<b>blank</b>","lost while writing 11"],["13","<b>blank</b>","lost while writing 11"],
       ["14","north gate","&mdash;"],
       ["15","<b>at half past two in the afternoon</b>","six words for a time"],
       ["16","<b>blank</b>","lost while writing 15"],["17","<b>blank</b>","lost while writing 15"],
       ["18","Thursday","&mdash;"],["19","two weeks","&mdash;"],["20","Varga","&mdash;"]]),
    "Every long answer here cost the answer after it. Four long answers, four blanks."), 640)
S["qb06-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("mei",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("spreadsheet",360,196,0.24),("computer",490,142,0.42),
     ("pen",450,198,0.18),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"TWO WORDS",[("wrote","five"),("cost","two")]),
    clockat=(680,44,22,16,0))
S["qb06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Sheet 1", None,
        "<p>Eight answers written as full phrases. <b>Five blanks.</b></p>"
        "<p style='color:#6b6861;font-size:13px'>Careful, complete, and five marks short.</p>"),
        w)[0:3],
    lambda w,h: f_realia(doc("Sheet 2", None,
        "<p>The same eight answers in one or two words. <b>No blanks.</b></p>"
        "<p style='color:#6b6861;font-size:13px'>It looks careless. It is five marks better.</p>"),
        w)[0:3],
    w=900, h=270)
S["qb06-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I keep losing answers in the middle of Part 2. I think I need to do more practice "
        "tests.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>In the practice paper on <b>18 March</b> I lost seven marks, five of them in two groups "
        "of three. In both groups the answer before the group was written out as a full phrase of "
        "four or five words, when the gap wanted one. A model published in 1974 separates working "
        "memory into a manager, a loop that holds speech-based material and a sketchpad for shapes; "
        "the loop fades in a few seconds unless you repeat the material to yourself, and writing is "
        "itself a speech-based task. It is a laboratory model, revised for twenty-six years, with a "
        "fourth part added in 2000, and it gives no technique. My own rule from now on: never more "
        "than two words unless the instruction allows three.</p>"), w)[0:3],
    w=920, h=330)
S["qb06-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the score",""),("Marks lost in groups",""),("The answer before each group",""),
     ("How long it was",""),("What the model says",""),("My own rule","")]), 540)
S["qb06-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("mei",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("tomas",365,176,{"seated":True}),("hana",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("ines",590,170,{}),("nour",655,172,{}),
     ("junseo",720,170,{}),("marek",785,172,{}),("samira",845,170,{}),
     ("yusuf",905,172,{}),("oksana",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.24),
     ("printer",430,196,0.3),("data",560,198,0.24),("table",650,0,1.0),
     ("odometer",860,198,0.24),("shelf",930,96,0.5)],
    board=(40,22,240,116,"HOLD WORDS OR SPELL WORDS",[("not","both at once")]),
    clockat=(302,34,22,16,0))
S["qb06-f15"]=lambda: f_chart([("one word",1),("two words",2),("three words",2),
    ("a full phrase",5),("a full sentence",1)])
S["qb06-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Three months of groups, and one week of two-word answers",
    table_html(["Paper","Score","Marks lost in groups","Longest answer written"],
      [["January","18","5","six words"],["February","19","6","five words"],
       ["March","22","5","five words"],["April, two-word rule","<b>27</b>","<b>1</b>","two words"]])
    + "<p><b>A sheet</b> of ten answers written twice, long and short.</p>"
    "<p><i>Her vocabulary is strong and her reading is the best in the class. She says the two-word "
    "rule felt careless.</i></p>",
    "Seven o'clock. Twenty-two to twenty-seven in one week, and nothing about her English changed."),
    640)

# ---------------- Unit 7 ----------------
S["qb07-f1"]=lambda: f_icons([("podium","one speaker"),("note","a title slide"),
    ("notebook","three numbered points"),("signpost","a signpost with three arms"),
    ("quotemark","a small joining word"),("essay","a full announcing sentence"),
    ("transfer","an arrow turning a corner"),("review","two boxes, contrasted"),
    ("thread","the same idea written twice"),("form","a summary box"),
    ("speechbubble","a question on a slide"),("clipboard","a handout with three headings"),
    ("pen","three headings copied"),("stars","a tick"),("noentry","a cross"),
    ("magnifier","a footnote")],4)
S["qb07-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("samira",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("notebook",390,196,0.24),("board",98,86,0.84),
     ("podium",470,196,0.3),("window",790,56,0.94)],
    board=(644,22,240,120,"FOUR VERSIONS",[("small markers","little"),("big markers","more")]),
    clockat=(594,44,22,12,0))
S["qb07-f3"]=lambda: f_icons([("quotemark","a small joining word"),
    ("essay","a full announcing sentence"),("notebook","three small markers"),
    ("signpost","three big ones"),("tally","two bars much longer"),
    ("magnifier","the big ones help")],3)
S["qb07-f4"]=lambda: f_realia(tbl("Team research &middot; count the markers", None,
    ["The lecture","Small markers","Big markers","Headings I could write","Minute of each big one"],
    br(6,5),
    note="The lecture with no big markers at all: ______________________"), 700)
S["qb07-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Listening class",
    "The sentences that give you the shape &middot; page 1 of 1",
    "<p><b>The source.</b> C. A. Chaudron and J. C. Richards, <i>The effect of discourse markers on "
    "the comprehension of lectures</i>, Applied Linguistics, <b>1986</b>. Printed here in our own "
    "words.</p>"
    "<p>The study takes one lecture and makes four versions of it. The content is the same in all "
    "four. What changes is the <b>signposting</b>.</p>"
    + table_html(["Version","What it contained"],
      [["<b>Baseline</b>","the content, with no added markers"],
       ["<b>Micro-markers only</b>","small joining words: <i>well</i>, <i>so</i>, <i>then</i>, "
        "<i>but</i>, <i>now</i>"],
       ["<b>Macro-markers only</b>","sentences announcing the structure: <i>what I want to look at "
        "is&hellip;</i>, <i>that is the first point; let us turn to&hellip;</i>"],
       ["<b>Both</b>","small and big together"]])
    + "<p>Four groups of learners each heard one version, and their comprehension was measured "
    "afterwards. The versions containing <b>macro-markers</b> produced better comprehension than the "
    "baseline. <b>Micro-markers on their own added very little.</b> The small joining words, which are "
    "everywhere in real speech and which most courses teach, did not help these listeners understand "
    "the lecture; the sentences that announced the structure did.</p>"
    "<p><b>There is a plain reason why.</b> A macro-marker gives you a <b>heading</b> before the "
    "content arrives. <i>Today I want to look at three things</i> tells you to leave three spaces on "
    "the page. <i>That is the first point, now let us turn to the second</i> tells you that what you "
    "have been writing is finished and a new space is needed. A listener with headings is filing. A "
    "listener without them is writing a single long paragraph and hoping.</p>"
    "<p>Small markers do a different job &mdash; they hold a sentence together, buy the speaker a "
    "moment, soften a disagreement. They are worth knowing for speaking. They are not where the shape "
    "is.</p>"
    "<p><b>One study, modest effects.</b> This is one study, published in 1986, with a particular "
    "group of learners at one institution, on recorded lectures prepared for the experiment. The "
    "measure was a comprehension and recall test, not a band and not a real examination. The "
    "differences between the versions were <b>real but modest</b>: a single study with a moderate "
    "effect is a reason to try something, not a proof. And it cannot tell you what <b>your</b> "
    "lecturer will do. Some speakers signpost every two minutes; some signpost once; some never do it "
    "at all, and for those the finding gives you no help whatever.</p>",
    "Our summary of a published paper. Read it if your center has access; the four versions are the "
    "part to look at."), 620)
S["qb07-f6"]=lambda: f_realia(tbl("The big markers", None,
    ["The job","The marker","What you do with it"],
    [["<b>announcing the shape</b>","<i>Today I want to look at three things.</i>",
      "leave three spaces"],
     ["<b>starting a point</b>","<i>To begin with&hellip;</i> &middot; <i>The first of these "
      "is&hellip;</i>","write a heading"],
     ["<b>turning to the next</b>","<i>That is the first point; let us turn to&hellip;</i>",
      "close one space, open another"],
     ["<b>restating</b>","<i>In other words&hellip;</i> &middot; <i>That is to say&hellip;</i>",
      "nothing new is coming; stop writing"],
     ["<b>contrasting</b>",B,B],
     ["<b>summing up</b>",B,B]],
    note="Four cells are empty on purpose. One of these markers tells you to stop writing."), 660)
S["qb07-f7"]=lambda: f_chart([("baseline, no markers",41),("small markers only",44),
    ("big markers only",72),("both",76)], unit="points of 12, x10")
S["qb07-f8"]=lambda: f_icons([("quotemark","a tiny joining word"),
    ("essay","a full announcing sentence"),("transfer","an arrow turning a corner"),
    ("review","two boxes contrasted"),("thread","the same idea twice"),
    ("form","a summary box")],3)
S["qb07-f9"]=lambda: f_realia(doc("Note completion page &middot; Part 4",
    "Three headings, four blanks under each",
    "<p><b>THE FIRST POINT: ______________</b></p>"
    "<p style='font-size:14px'>&bull; began in ______________<br>&bull; cost about "
    "______________<br>&bull; led to ______________<br>&bull; still used for ______________</p>"
    "<p><b>THE SECOND POINT: ______________</b></p>"
    "<p style='font-size:14px'>&bull; two main ______________<br>&bull; depends on "
    "______________<br>&bull; fails when ______________<br>&bull; replaced by ______________</p>"
    "<p><b>FINALLY: ______________</b></p>"
    "<p style='font-size:14px'>&bull; measured in ______________<br>&bull; recorded every "
    "______________<br>&bull; stored at ______________<br>&bull; checked by ______________</p>",
    "The three headings were given to you in the first forty seconds, free, before any content "
    "arrived."), 620)
S["qb07-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("samira",400,176,{"seated":True}),("grace",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("notebook",360,196,0.24),("computer",490,142,0.42),
     ("note",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"THREE HEADINGS",[("from","40 seconds"),("cost","nothing")]),
    clockat=(680,44,22,13,30))
S["qb07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page 1", None,
        "<p>Twelve continuous lines of notes. No headings.</p>"
        "<p style='color:#6b6861;font-size:13px'>A marker cannot find an answer in it, and neither "
        "can the student.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page 2", None,
        "<p>Three headings, four short entries under each.</p>"
        "<p style='color:#6b6861;font-size:13px'>Fewer words on the page and more marks on the "
        "sheet.</p>"), w)[0:3],
    w=900, h=270)
S["qb07-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>Part 4 is too hard for me. The lecture is too fast and the subject is always something I "
        "do not know anything about.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>In the practice paper on <b>25 March</b> I got <b>6 of 10</b> in Part 4, against 1 of 10 "
        "three weeks ago. The change was that I wrote three headings in the first forty seconds, from "
        "three announcing sentences: <i>I want to look at three things</i>, <i>that brings me to the "
        "second</i> and <i>finally</i>. I then had somewhere to put each answer. A study published in "
        "1986 compared four versions of one lecture and found that sentences announcing the structure "
        "helped comprehension while small joining words did not &mdash; one study, one group of "
        "learners, a recall test rather than a band, and effects that were real but modest. It cannot "
        "tell me what a given lecturer will do: two of my six practice lectures had no announcing "
        "sentences at all.</p>"), w)[0:3],
    w=920, h=340)
S["qb07-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the Part 4 score",""),("The markers I heard",""),("The headings I built",""),
     ("The score under each heading",""),("What the study found",""),
     ("What it cannot tell me","")]), 560)
S["qb07-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("samira",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("grace",290,172,{}),("mei",365,176,{"seated":True}),("junseo",440,172,{"seated":True}),
     ("lars",515,176,{"seated":True}),("nour",590,170,{}),("ines",655,172,{}),
     ("marek",720,170,{}),("hana",785,172,{}),("oksana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("notebook",350,198,0.24),
     ("printer",430,196,0.3),("signpost",560,198,0.26),("table",650,0,1.0),
     ("podium",860,196,0.3),("shelf",930,96,0.5)],
    board=(40,22,234,116,"THE SHAPE ARRIVES FIRST",[("baseline","41"),("big markers","72")]),
    clockat=(294,34,22,14,0))
S["qb07-f15"]=lambda: f_chart([("headings and entries",3),("one long paragraph",5),
    ("a few words",2),("nothing",1),("I do not take notes",0)])
S["qb07-f16"]=lambda: f_realia(doc("On a desk in the afternoon",
    "One to six in three weeks, and two lectures with no markers",
    table_html(["Practice lecture","Big markers heard","Headings written","Score out of 10"],
      [["1","0","0","2"],["2","3","3","6"],["3","2","2","5"],
       ["4","0","0","2"],["5","3","3","6"],["6","4","3","6"]])
    + "<p><b>A list</b> of twenty big markers, collected from real lectures.</p>"
    "<p><i>Nothing about her vocabulary changed. What changed is that she writes the shape down in "
    "the first forty seconds.</i></p>",
    "Three o'clock. In the two lectures with no announcing sentences she scored 2, which is the "
    "honest limit of the technique."), 660)
