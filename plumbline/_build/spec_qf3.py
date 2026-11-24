# -*- coding: utf-8 -*-
"""Plumbline Book 6 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 7 ----------------
S["qf07-f1"]=lambda: f_icons([("odometer","three dials, one needle"),("head","a narrow channel"),
    ("form","a rule being applied"),("packet","a stored exemplar"),
    ("thread","a subordinate clause"),("proof","an error corrected"),
    ("timer","a stopwatch"),("notebook","a planning minute"),
    ("happy","a familiar topic"),("worried","an unfamiliar one"),
    ("review","a structured task"),("library","a book dated 1998"),
    ("magnifier","a measure, closely read"),("pen","a tick"),("danger","a cross"),
    ("scales","and a trade-off")],4)
S["qf07-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("tomas",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"ONE NEEDLE",[("complexity","?"),("accuracy","?"),("fluency","?")]),
    clockat=(622,44,22,12,0))
S["qf07-f3"]=lambda: f_icons([("thread","a subordinate clause"),("proof","an error-free sentence"),
    ("timer","a run of continuous speech"),("form","a rule-based system"),
    ("packet","an exemplar-based system"),("head","one pool of attention")],3)
S["qf07-f4"]=lambda: f_realia(tbl("Team research &middot; push one and watch the others", None,
    ["The task","What I pushed","Clauses per utterance","Errors per 100 words","Words per minute"],
    br(6,5),
    note="What moved when I pushed complexity: ______________________"), 700)
S["qf07-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Speaking class",
    "Why you cannot do all three in one sentence &middot; page 1 of 1",
    "<p><b>The source.</b> Peter Skehan, <i>A Cognitive Approach to Language Learning</i>, Oxford "
    "University Press, <b>1998</b>. Printed here in our own words.</p>"
    "<p>The starting point is that a speaker's <b>attention is limited</b>. Spoken performance is "
    "treated along three dimensions.</p>"
    + table_html(["The dimension","What it is usually counted as"],
      [["<b>complexity</b>","clauses per utterance, subordination, variety of structure"],
       ["<b>accuracy</b>","error-free clauses, or errors per hundred words"],
       ["<b>fluency</b>","speech rate, number and placement of pauses, length of run"]])
    + "<p>The central claim is a <b>trade-off</b>: because the three draw on the same limited "
    "attention, an improvement in one is often accompanied by a decline in another. Behind it is a "
    "<b>dual-mode</b> system: a <b>rule-based</b> mode that is flexible, creative and slow, and an "
    "<b>exemplar-based</b> mode that is fast, ready-made and limited to what is stored.</p>"
    + table_html(["The condition","What it tends to raise"],
      [["<b>planning time before speaking</b>","complexity, and often fluency"],
       ["<b>a familiar topic</b>","fluency"],
       ["<b>a task with a clear structure</b>","accuracy"],
       ["<b>pressure to speak immediately</b>","fluency at the cost of the other two"]])
    + "<p><b>Part 1</b> is familiar and unplanned: fluency is cheap, complexity expensive &mdash; "
    "spend it on <b>range of vocabulary</b>. <b>Part 2</b> gives you a minute, and planning time is "
    "the condition associated with higher complexity: your long sentences belong here. <b>Part 3</b> "
    "is abstract and unplanned: protect accuracy and fluency. <b>That distribution is ours, not the "
    "book's.</b></p>"
    "<p><b>A framework, and a contested hypothesis.</b> A synthesis drawn from task-based research of "
    "its period, not a single study. The trade-off hypothesis has been <b>argued against at "
    "length</b>: later researchers report conditions under which two dimensions rise together and "
    "question whether attention is a single pool at all. The <b>measures are operationalizations</b>, "
    "and studies that count differently are hard to compare. And it is about <b>classroom task "
    "design</b>, not examinations.</p>",
    "Our summary of a published book, named with its publisher and its year."), 650)
S["qf07-f6"]=lambda: f_realia(tbl("Complexity you can afford", None,
    ["The structure","Cost","An example"],
    [["<b>a relative clause</b>","low","the policy, which nobody enforces"],
     ["<b>a conditional</b>","medium","if the cost fell once, I would accept it"],
     ["<b>a cleft</b>","medium","what nobody discusses is the enforcement"],
     ["<b>a participle clause</b>","low","having seen the figures, I changed my view"],
     ["<b>an inversion</b>",B,B],
     ["<b>a nominalized subject</b>",B,B]],
    note="Four cells are empty on purpose. Two of these are cheap enough for Part 3 and two are "
    "not."), 700)
S["qf07-f7"]=lambda: f_matrix(["Clauses per utterance","Errors per 100 words","Words per minute"],
    [("familiar, no planning",["1.4","2.1","148"]),
     ("unfamiliar, no planning",["1.6","4.8","112"]),
     ("unfamiliar, one minute's planning",["2.2","2.6","131"])], 620)
S["qf07-f8"]=lambda: f_icons([("thread","a long subordinated sentence"),("proof","an error-free short one"),
    ("timer","a fast continuous run"),("note","a slow careful utterance"),
    ("packet","a stored chunk"),("odometer","which dial did you move?")],3)
S["qf07-f9"]=lambda: f_realia(tbl("The three parts, and their conditions", None,
    ["Part","Topic","Planning","What is cheap here","What is expensive"],
    [["<b>1</b>","familiar","none","fluency, vocabulary","subordination"],
     ["<b>2</b>","given on a card","one minute","complexity","nothing much"],
     ["<b>3</b>","abstract","none","fluency","complexity and accuracy together"]],
    numcols=(0,),
    note="<b>Three parts, three conditions, three different jobs.</b>"), 660)
S["qf07-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("tomas",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("notebook",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"PART 3",[("clauses","highest"),("errors","doubled")]),
    clockat=(630,42,22,12,30))
S["qf07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Complexity in Part 3", None,
      "<p>Part 1: 1.3 clauses, 1 error. Part 2: 1.4 clauses, 1 error. Part 3: <b>2.4 clauses, 4 "
      "errors</b>.</p>",
      "The hardest language where the conditions were worst."), 380)[0:3],
    lambda w,h: f_realia(doc("Complexity in Part 2", None,
      "<p>Part 1: 1.4 clauses, 0 errors. Part 2: <b>2.3 clauses, 1 error</b>. Part 3: 1.6 clauses, 1 "
      "error.</p>",
      "The hardest language where the minute was."), 380)[0:3],
    800, 310, "Reaching in Part 3", "Reaching in Part 2")
S["qf07-f12"]=lambda: f_realia(doc("Three extracts", None,
    "<p><b>Speaker A, Part 3.</b> <i>Not only the cost is a problem but also who are paying for it, "
    "which if it would have been considered before, the scheme which was introduced might be "
    "succeeded.</i></p>"
    "<p><b>Speaker B, Part 2.</b> <i>What I had not expected, and should have, was how little of the "
    "book was about the street itself. Had it been written twenty years earlier, the same material "
    "would have filled four hundred pages.</i></p>"
    "<p><b>Speaker B, Part 3.</b> <i>The cost is the obvious objection, and I think it is the wrong "
    "one. The question is who pays, and nobody asks it.</i></p>",
    "Speaker A reached under pressure. Speaker B reached where the minute was, and Part 3 is "
    "error-free."), 650)
S["qf07-f13"]=lambda: f_realia(tbl("Three-part planner", None,
    ["Part 1","Part 2","Part 3"],
    br(3,3),
    note="The two structures I am saving for Part 2: ______________________"), 600)
S["qf07-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("tomas",340,190,{"seated":True}),("lars",470,184,{}),
     ("hana",560,188,{"seated":True}),("yusuf",660,186,{}),("chiamaka",740,190,{"seated":True}),
     ("samira",830,186,{}),("oksana",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("notebook",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"ONE NEEDLE, THREE DIALS",
      [("planning","complexity"),("familiar","fluency"),("structure","accuracy")]),
    clockat=(650,40,22,4,0))
S["qf07-f15"]=lambda: f_chart([("accuracy",4),("fluency",4),("complexity",1),("all three",1),
    ("I do not know",1)], w=560)
S["qf07-f16"]=lambda: f_realia(doc("On the desk, evening",
    "Three transcripts, one per part, with figures at the foot",
    "<p><b>Part 1:</b> 1.3 clauses per utterance, 1 error.</p>"
    "<p><b>Part 2:</b> 1.4 clauses per utterance, 1 error. <i>He used the minute to think of "
    "ideas.</i></p>"
    "<p><b>Part 3:</b> <b>2.4 clauses per utterance, 4 errors.</b></p>"
    "<p><b>Grammatical Range and Accuracy:</b> 7.0.</p>",
    "He put the hardest language where the conditions were worst, and the easiest where they were "
    "best."), 640)

# ---------------- Unit 8 ----------------
S["qf08-f1"]=lambda: f_icons([("tally","a stress mark on a syllable"),("megaphone","one word stressed"),
    ("thread","the stress moved"),("review","a long vowel and a short one"),
    ("square","an initial cluster"),("note","a dental fricative"),
    ("pen","a dark l"),("scissors","a weak form"),
    ("packet","two sounds running together"),("danger","a dropped sound"),
    ("data","a pitch contour"),("library","a book dated 2000"),
    ("magnifier","a transcript, closely read"),("proof","a tick"),("form","a cross"),
    ("handshake","two non-native speakers understanding each other")],4)
S["qf08-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("chiamaka",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"SAME NINE WORDS",[("1","somebody else said"),("3","he borrowed")]),
    clockat=(622,44,22,12,30))
S["qf08-f3"]=lambda: f_icons([("square","an initial cluster"),("review","vowel length"),
    ("tally","a nuclear stress mark"),("note","a dental fricative"),
    ("scissors","a weak form"),("magnifier","what a listener needs")],3)
S["qf08-f4"]=lambda: f_realia(tbl("Team research &middot; move the stress", None,
    ["The sentence","Where the stress fell","What it meant","The meaning we had not noticed"],
    br(6,4),
    note="The sentence that changed most: ______________________"), 680)
S["qf08-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Speaking class",
    "Which features of pronunciation carry meaning &middot; page 1 of 1",
    "<p><b>The source.</b> Jennifer Jenkins, <i>The Phonology of English as an International "
    "Language</i>, Oxford University Press, <b>2000</b>. Printed here in our own words.</p>"
    "<p>Most conversations in English now take place between people for whom it is not a first "
    "language. The author recorded such interactions, examined where understanding actually broke "
    "down, and used that to argue for a reordering of teaching priorities &mdash; a <b>core</b>.</p>"
    + table_html(["In the proposed core","Not in it"],
      [["most <b>consonant sounds</b>","the two <i>th</i> sounds"],
       ["<b>consonant clusters</b>, especially word-initially","the dark <i>l</i>"],
       ["the <b>length</b> distinction in vowels","vowel <b>quality</b> beyond length"],
       ["<b>nuclear stress placement</b>","word stress, weak forms, assimilation, elision, pitch "
        "movement beyond nuclear stress"]])
    + "<p>The item treated as most important is the last on the left: <b>where the main stress of the "
    "sentence falls</b>.</p>"
    "<p style='font-size:15px;line-height:1.9'><i>I didn't <b>say</b> he stole the money.</i> "
    "&mdash; somebody else said it<br>"
    "<i>I didn't say <b>he</b> stole the money.</i> &mdash; somebody else stole it<br>"
    "<i>I didn't say he <b>stole</b> the money.</i> &mdash; he borrowed it</p>"
    "<p>Nine words, three meanings, one difference &mdash; and the Pronunciation criterion asks for "
    "<b>features of pronunciation used to convey meaning</b>.</p>"
    "<p>The non-core list does <b>not</b> say the <i>th</i> sounds are bad English. It says that in "
    "the recorded interactions, substituting another sound for them did not cause breakdowns.</p>"
    "<p><b>A proposal, and not what you are assessed against.</b> The author calls the core "
    "<b>provisional and revisable</b>, states that it rests on her own data set, and invites "
    "correction. The data set was <b>limited</b>. The proposal has been <b>argued about ever "
    "since</b>. And, most importantly for you: <b>this is not the standard you are assessed "
    "against</b> &mdash; the Pronunciation criterion is applied by a trained examiner using the "
    "published descriptors, and nothing in this book changes them. What it gives you is a reason to "
    "spend your remaining practice time on nuclear stress, which is a judgment about <b>priority</b>, "
    "made by us.</p>",
    "Our summary of a published book, named with its publisher and its year."), 660)
S["qf08-f6"]=lambda: f_realia(tbl("Moving the nucleus", None,
    ["The sentence","What it means","What it denies"],
    [["<i>I didn't <b>say</b> he stole it.</i>","somebody else said it","that I said it"],
     ["<i>I didn't say <b>he</b> stole it.</i>","somebody else stole it","that he did"],
     ["<i>I didn't say he <b>stole</b> it.</i>","he borrowed it","that it was theft"],
     ["<i>I didn't say he stole <b>it</b>.</i>","he stole something else","that it was this"],
     ["<i>I <b>didn't</b> say he stole it.</i>",B,B],
     ["<i><b>I</b> didn't say he stole it.</i>",B,B]],
    note="Four cells are empty on purpose. In writing all six look the same."), 700)
S["qf08-f7"]=lambda: f_matrix(["In the core?","Caused breakdowns?","Commonly corrected?"],
    [("nuclear stress placement",["yes","yes","rarely"]),
     ("initial consonant clusters",["yes","yes","sometimes"]),
     ("vowel length",["yes","yes","sometimes"]),
     ("the two <i>th</i> sounds",["no","no","very often"]),
     ("weak forms",["no","no","often"]),
     ("word stress",["no","not in this data","often"])], 680)
S["qf08-f8"]=lambda: f_icons([("square","an initial cluster"),("review","vowel length"),
    ("tally","a nuclear stress mark"),("note","a dental fricative"),
    ("scissors","a weak form"),("magnifier","does the meaning change without it?")],3)
S["qf08-f9"]=lambda: f_realia(tbl("Part 3 questions, stress marked",
    "The underlined word carries the examiner's nuclear stress.",
    ["","The question"],
    [["1","Should <u>governments</u> fund the arts?"],
     ["2","Should governments fund <u>the arts</u>?"],
     ["3","Do <u>young</u> people read less than they used to?"],
     ["4","Do young people <u>read</u> less than they used to?"],
     ["5","Is it <u>fair</u> to charge for museums?"]],
    numcols=(0,),
    note="<b>Answer the question the stress asked.</b> Rows 1 and 2 are not the same question, and "
    "nor are rows 3 and 4."), 640)
S["qf08-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("chiamaka",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("notebook",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"THE STRESS WAS THE QUESTION",
      [("asked","governments"),("answered","the arts")]),
    clockat=(630,42,22,1,0))
S["qf08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Answering the words", None,
      "<p><b>Q:</b> Should <b>governments</b> fund the arts?</p>"
      "<p><b>A:</b> <i>I think the arts are important and should be supported&hellip;</i></p>",
      "A good answer to a different question."), 380)[0:3],
    lambda w,h: f_realia(doc("Answering the stress", None,
      "<p><b>Q:</b> Should <b>governments</b> fund the arts?</p>"
      "<p><b>A:</b> <i>It is not whether the arts should be funded that is in question, it is whether "
      "governments should be the ones doing it&hellip;</i></p>",
      "The question that was asked."), 380)[0:3],
    800, 310, "The words", "The stress")
S["qf08-f12"]=lambda: f_realia(doc("Two answers, nuclear stress in bold", None,
    "<p><b>Answer 1.</b> <i>I think governments should <b>fund</b> the arts because the arts are "
    "<b>important</b> for society and culture is <b>valuable</b> for everybody.</i></p>"
    "<p><b>Answer 2.</b> <i>It is not whether the arts should be funded that is in question, it is "
    "whether <b>governments</b> should be the ones doing it. My own view is that they should, and for "
    "an unfashionable reason: not because art is <b>valuable</b> &mdash; everybody says that &mdash; "
    "but because the alternative funders all want something in <b>return</b>.</i></p>",
    "The first places the nucleus on the obvious word every time. The second places it on the "
    "contrasted one."), 650)
S["qf08-f13"]=lambda: f_realia(form("Stress planner",
    [("The question",B),("Where the examiner's stress fell",B),("The question that asks",B),
     ("Three contrasts I will make",B),("Where the nucleus goes in each",B)],
    note="Say the three contrasts aloud and let somebody say what each denies."), 580)
S["qf08-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("chiamaka",340,190,{"seated":True}),("grace",470,184,{}),
     ("ines",560,188,{"seated":True}),("nour",660,186,{}),("junseo",740,190,{"seated":True}),
     ("marek",830,186,{}),("mei",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("recorder",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"DOES THE MEANING CHANGE WITHOUT IT?",
      [("nucleus","yes"),("th sounds","no")]),
    clockat=(650,40,22,5,0))
S["qf08-f15"]=lambda: f_chart([("individual sounds",6),("word stress",2),("intonation",1),
    ("sentence stress",1),("nothing in particular",1)], w=580)
S["qf08-f16"]=lambda: f_realia(doc("On the desk, evening",
    "One question written three times with the stress in three places",
    "<p><b>Where the examiner put it:</b> on <i>governments</i>.</p>"
    "<p><b>Which question she answered:</b> whether the arts should be funded at all.</p>"
    "<p><b>Pronunciation:</b> 7.0. <b>Part 3 Task Response:</b> marked down for not addressing the "
    "question.</p>"
    "<p><b>Two years:</b> spent on a sound that is not in the proposed core.</p>",
    "The words were identical. The stress was the question, and nobody has ever mentioned it to "
    "her."), 650)

# ---------------- Unit 9 ----------------
S["qf09-f1"]=lambda: f_icons([("megaphone","a strongly accented speaker"),("happy","a listener understanding"),
    ("worried","a listener straining"),("notebook","a transcription, all correct"),
    ("scales","a nine-point scale"),("odometer","three separate dials"),
    ("handshake","a familiar listener"),("nervous","an unfamiliar one"),
    ("data","a prosodic contour"),("tally","an individual sound"),
    ("library","a journal page dated 2005"),("magnifier","a rating sheet"),
    ("proof","a tick"),("danger","a cross"),("scissors","accent reduction, crossed out"),
    ("review","easier to follow")],4)
S["qf09-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("ines",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"THREE DIALS",[("accent","8"),("effort","8"),("understood","59/60")]),
    clockat=(622,44,22,1,0))
S["qf09-f3"]=lambda: f_icons([("megaphone","a strongly accented speaker"),("happy","understanding without effort"),
    ("worried","straining"),("notebook","a correct transcription"),
    ("scales","a rating scale"),("odometer","three dials, not one")],3)
S["qf09-f4"]=lambda: f_realia(tbl("Team research &middot; rate three speakers", None,
    ["The speaker","Accentedness /9","Comprehensibility /9","Words transcribed","Did they agree?"],
    br(6,5),
    note="The speaker where they disagreed most: ______________________"), 700)
S["qf09-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Speaking class",
    "Three things that are not the same thing &middot; page 1 of 1",
    "<p><b>The source.</b> Tracey M. Derwing and Murray J. Munro, <i>Second Language Accent and "
    "Pronunciation Teaching: A Research-Based Approach</i>, TESOL Quarterly, <b>2005</b>. Printed here "
    "in our own words.</p>"
    + table_html(["The dimension","What it is","How it is usually measured"],
      [["<b>accentedness</b>","how different a speaker's speech sounds from a local variety",
        "a listener rating on a scale"],
       ["<b>comprehensibility</b>","how much effort a listener has to make",
        "a listener rating on a scale"],
       ["<b>intelligibility</b>","how much the listener actually understood",
        "transcription accuracy, or comprehension questions"]])
    + "<p>The central empirical point is that these are <b>partially independent</b>. They are "
    "related, but loosely enough that the three come apart routinely: <b>a speaker can be strongly "
    "accented and highly intelligible</b>, and in the authors' data many are.</p>"
    "<p>So <b>accent reduction is the wrong goal</b>: it targets the dimension that matters least for "
    "communication and is least likely to change in an adult. And <b>the listener is half of it</b>: "
    "familiarity, willingness and expectation all affect the ratings, so comprehensibility is a "
    "property of an encounter rather than of a speaker.</p>"
    "<p>The Pronunciation criterion asks whether you can be <b>understood with little effort</b> and "
    "whether you use features of pronunciation to <b>convey meaning</b>. That is comprehensibility and "
    "the nuclear stress of Unit 8. <b>It does not mention accent.</b> And your listener is one trained "
    "examiner who has heard a very large number of accents, which on the authors' own account raises "
    "comprehensibility ratings.</p>"
    "<p><b>A position paper, and operationalized constructs.</b> It argues for a change in teaching "
    "practice, drawing on the authors' own studies and others'; it is not itself a single experiment. "
    "The three dimensions are <b>constructs with chosen measures</b>, and the measures shape the "
    "findings: comprehensibility is a <b>rating</b>, a listener's report of their own effort, which is "
    "not the same as their effort. The studies used <b>particular first-language groups</b> and "
    "<b>particular listeners</b>, largely in one region. And it is about pronunciation teaching: the "
    "link to the criterion is <b>ours</b>.</p>",
    "Our summary of a published paper, named with its journal and its year."), 660)
S["qf09-f6"]=lambda: f_realia(tbl("Reporting a distinction", None,
    ["The phrasing","What it does","An example"],
    [["<b>is not the same as</b>","denies identity","Accent is not the same as intelligibility."],
     ["<b>is related to but distinct from</b>","concedes a relation","Related to, but distinct from, comprehensibility."],
     ["<b>partially independent of</b>","states the relation precisely","Partially independent of accentedness."],
     ["<b>should be distinguished from</b>","recommends a distinction","It should be distinguished from effort."],
     ["<b>is often conflated with</b>",B,B],
     ["<b>does not follow from</b>",B,B]],
    note="Four cells are empty on purpose. The third says more than <i>different</i> and less than "
    "<i>unrelated</i>."), 700)
S["qf09-f7"]=lambda: f_matrix(["Accentedness /9","Comprehensibility /9","Words transcribed"],
    [("Speaker A",["8","8","59 of 60"]),("Speaker B",["7","8","60 of 60"]),
     ("Speaker C",["4","5","48 of 60"]),("Speaker D",["8","4","41 of 60"]),
     ("Speaker E",["3","8","60 of 60"])], 620)
S["qf09-f8"]=lambda: f_icons([("megaphone","a strongly accented speaker"),("happy","easy understanding"),
    ("worried","straining"),("notebook","a transcription with one error"),
    ("scales","a rating scale"),("odometer","which of the three is this?")],3)
S["qf09-f9"]=lambda: f_realia(doc("The Pronunciation criterion &middot; extract",
    "Published wording, in our own paraphrase",
    "<p>Around the upper bands the criterion describes a speaker who can be <u>understood with little "
    "effort</u> throughout, and who uses features of pronunciation to <u>convey meaning</u> and "
    "precise shades of it.</p>"
    "<p style='font-size:13px;color:#6b6861'>Words appearing in the criterion: <i>effort</i>, "
    "<i>convey</i>, <i>meaning</i>, <i>intelligible</i>, <i>features</i>, <i>sustained</i>.</p>"
    "<p style='font-size:13px;color:#6b6861'>Words not appearing anywhere in it: <b>accent</b>, "
    "<b>native</b>, <b>reduction</b>.</p>",
    "<b>Read the criterion, and then read it again for what is not in it.</b>"), 640)
S["qf09-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("ines",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("notebook",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"MILDEST ACCENT",[("accent","4"),("transcribed","48/60")]),
    clockat=(630,42,22,1,30))
S["qf09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Listener 1", None,
      "<p>Transcription of sixty words: <b>three errors</b>.</p>"
      "<p>Has not taught speakers of this language before.</p>", "Same recording."), 380)[0:3],
    lambda w,h: f_realia(doc("Listener 2", None,
      "<p>Transcription of sixty words: <b>no errors</b>.</p>"
      "<p>Has taught speakers of this language for six years.</p>", "Same recording."), 380)[0:3],
    800, 310, "Unfamiliar listener", "Familiar listener")
S["qf09-f12"]=lambda: f_realia(doc("Two answers to one Part 3 question", None,
    "<p><b>Answer 1.</b> <i>I think people with strong accents are difficult to understand and so it "
    "is very important to reduce your accent if you want to communicate well in English.</i></p>"
    "<p><b>Answer 2.</b> <i>Sounding foreign and being hard to follow are related but distinct, and "
    "in my experience they come apart constantly: my own supervisor has an accent nobody could miss "
    "and I have never had to ask her to repeat anything. What makes somebody hard to follow, as far as "
    "I can tell, is shorter things &mdash; where the stress falls, whether the ends of words survive "
    "&mdash; and those are not what anybody means by an accent.</i></p>",
    "One conflates two dimensions; the other reports the relation precisely and offers something in "
    "place of accent."), 660)
S["qf09-f13"]=lambda: f_realia(form("Distinction planner",
    [("The question",B),("The distinction I will report",B),("The phrase I will use",B),
     ("One example",B),("What I will not claim",B)],
    note="The last box is the one a careful speaker fills first."), 580)
S["qf09-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("ines",340,190,{"seated":True}),("lars",470,184,{}),
     ("samira",560,188,{"seated":True}),("hana",660,186,{}),("tomas",740,190,{"seated":True}),
     ("yusuf",830,186,{}),("chiamaka",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("recorder",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"THREE DIALS, NOT ONE",
      [("accent","heard"),("effort","counted")]),
    clockat=(650,40,22,6,0))
S["qf09-f15"]=lambda: f_chart([("reduce your accent",6),("speak more slowly",2),
    ("work on individual sounds",2),("you are clear",1),("nothing",0)], w=580)
S["qf09-f16"]=lambda: f_realia(doc("On the desk, evening",
    "A rating sheet with five speakers and three columns",
    "<p><b>Strongest accent in the class:</b> rated 8 for comprehensibility, 59 of 60 words "
    "transcribed.</p>"
    "<p><b>Mildest accent:</b> 48 of 60.</p>"
    "<p><b>What she has been told since she was fifteen:</b> reduce your accent.</p>"
    "<p><b>Her Pronunciation figure:</b> 7.0, four times.</p>",
    "The dimension everybody can hear is not the dimension the criterion names."), 650)
