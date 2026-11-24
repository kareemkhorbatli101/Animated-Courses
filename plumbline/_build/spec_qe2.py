# -*- coding: utf-8 -*-
"""Plumbline Book 5 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 4 ----------------
S["qe04-f1"]=lambda: f_icons([("note","a topic sentence at the margin"),
    ("signpost","a second sentence, indented"),("walkroute","a third, indented twice"),
    ("racking","three sentences at one indent"),("stairwell","a descending staircase"),
    ("square","a row of equal blocks"),("notebook","levels one to four"),
    ("fall","an arrow pointing down"),("thread","an arrow pointing along"),
    ("essay","a paragraph, bracketed"),("book","a journal page dated 1965"),
    ("magnifier","one indent, closely read"),("pen","levels marked in a margin"),
    ("proof","a paragraph with no topic sentence"),("review","a tick"),("danger","a cross")],4)
S["qe04-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("tomas",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("essay",392,196,0.24),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"ALONG, OR DOWN?",[("left","1 2 2 2 2"),("right","1 2 3 4 3")]),
    clockat=(622,44,22,10,30))
S["qe04-f3"]=lambda: f_icons([("square","a coordinate sequence"),("stairwell","a subordinate sequence"),
    ("thread","a mixed sequence"),("note","a level-one sentence"),
    ("walkroute","a level-three sentence"),("magnifier","along, or down?")],3)
S["qe04-f4"]=lambda: f_realia(tbl("Team research &middot; mark the levels", None,
    ["Sentence","Level"],
    br(8,2),
    note="The lowest level we reached: ______________________"), 540)
S["qe04-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "What the sentences after a topic sentence are doing &middot; page 1 of 1",
    "<p><b>The source.</b> Francis Christensen, <i>A Generative Rhetoric of the Paragraph</i>, "
    "College Composition and Communication, <b>1965</b>. Printed here in our own words.</p>"
    "<p>The paper starts from a complaint: students are taught what a paragraph should be like &mdash; "
    "unified, coherent, adequately developed &mdash; and not how to make one. The author calls his "
    "alternative a <b>generative</b> rhetoric: one that tells a writer what to do next.</p>"
    "<p>Its central idea is <b>levels of generality</b>. The most general sentence is at level 1; a "
    "sentence commenting on it is at level 2; a sentence commenting on <i>that</i> is at level 3. A "
    "paragraph's structure can be written out as a column of numbers.</p>"
    + table_html(["The shape","What the sentences do"],
      [["a <b>coordinate</b> sequence","several sentences at the same level: 1, 2, 2, 2"],
       ["a <b>subordinate</b> sequence","each commenting on the one before: 1, 2, 3, 4"]])
    + "<p>Most real paragraphs are <b>mixed</b>. The consequence for an essay is direct: a paragraph "
    "running 1, 2, 2, 2 is a <b>list of instances</b>; one running 1, 2, 3, 4 has <b>gone into</b> its "
    "claim. The descriptors ask for ideas that are <i>extended and supported</i>, and a drop to level "
    "3 is what extension looks like on the page.</p>"
    "<p><b>Built from professional prose.</b> The scheme was built by analyzing published writing by "
    "professional writers of the author's period and language. It is <b>not derived from student "
    "writing</b>, and the paper offers <b>no evidence</b> that teaching it improves anybody's essays: "
    "no experiment, no comparison group, no measurement. The claim that paragraphs have a topic "
    "sentence has been <b>contradicted since</b> &mdash; studies looking for them in published "
    "expository prose found them in a <b>minority</b> of paragraphs. And the numbering is "
    "<b>interpretive</b>: two readers will sometimes disagree about whether a sentence is a second "
    "level 2 or a first level 3.</p>",
    "Our summary of a published paper. The link to the band descriptors is ours."), 640)
S["qe04-f6"]=lambda: f_realia(tbl("Going down a level", None,
    ["The opening","What it signals","An example"],
    [["<i>one such case</i>","a drop: an instance","One such case was the 1998 ring road."],
     ["<i>the reason is that</i>","a drop: the mechanism","The reason is that cheaper journeys multiply."],
     ["<i>more precisely</i>","a drop: a narrower version","More precisely, capacity was reached in eight years."],
     ["<i>what this meant in practice was</i>","a drop: the consequence","What this meant in practice was a second scheme."],
     ["<i>another example is</i>",B,B],
     ["<i>this is why</i>",B,B]],
    note="Four cells are empty on purpose. One of the six does not drop a level at all."), 680)
S["qe04-f7"]=lambda: f_matrix(["S1","S2","S3","S4","S5"],
    [("Paragraph A",["1","2","2","2","2"]),
     ("Paragraph B",["1","2","3","3","4"])], 520)
S["qe04-f8"]=lambda: f_icons([("square","three blocks at one indent"),("stairwell","a staircase"),
    ("thread","a mixed shape"),("note","another example is"),
    ("walkroute","the reason is that"),("magnifier","which direction?")],3)
S["qe04-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 2",
    "One statement, one question",
    "<p><b>Children should be taught the skills they will need in work rather than subjects studied "
    "for their own sake.</b></p>"
    "<p><b>To what extent do you agree or disagree?</b></p>",
    "<b>Two paragraphs, and each one has to reach level three.</b>"), 600)
S["qe04-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("tomas",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("essay",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"1 2 2 2 2",[("sentences","5"),("levels","2")]),
    clockat=(630,42,22,11,0))
S["qe04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Paragraph A &middot; 1, 2, 2, 2, 2", None,
      "<p>One claim, then four instances of it.</p>"
      "<p>Sentences: <b>5</b>. Levels: <b>2</b>.</p>", "A list."), 380)[0:3],
    lambda w,h: f_realia(doc("Paragraph B &middot; 1, 2, 3, 3, 4", None,
      "<p>One claim, one case, what the case shows, and what that depends on.</p>"
      "<p>Sentences: <b>5</b>. Levels: <b>4</b>.</p>", "A staircase."), 380)[0:3],
    800, 310, "Along", "Down")
S["qe04-f12"]=lambda: f_realia(doc("Two paragraphs, levels marked", None,
    "<p><b>Paragraph A</b> <i>(1, 2, 2, 2, 2)</i>. <i>Building roads does not relieve congestion. One "
    "example is the ring road opened in 1998. Another is the motorway widened in 2004. A third is the "
    "bypass built in 2011. In each case traffic returned to its former level.</i></p>"
    "<p><b>Paragraph B</b> <i>(1, 2, 3, 4, 3)</i>. <i>Building roads does not relieve congestion. The "
    "ring road opened in 1998 is the clearest local case. It reached capacity in eight years, against "
    "a forecast of twenty. That forecast had assumed demand would stay where it was, which is the "
    "assumption the whole policy rests on. The eight-year figure is therefore not a failure of the "
    "road but a measurement of how wrong the assumption was.</i></p>",
    "Same length. Same claim. One of them has gone into it."), 620)
S["qe04-f13"]=lambda: f_realia(form("Paragraph planner &middot; four levels",
    [("Level 1",B),("Level 2",B),("Level 3",B),("Level 4",B),
     ("The sentence that goes deepest",B)],
    note="If you cannot fill level 4, your level 3 was not about your level 2."), 580)
S["qe04-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("tomas",340,190,{"seated":True}),("grace",470,184,{}),
     ("ines",560,188,{"seated":True}),("marek",660,186,{}),("samira",740,190,{"seated":True}),
     ("hana",830,186,{}),("yusuf",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("essay",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"ALONG, OR DOWN?",
      [("1 2 2 2","a list"),("1 2 3 4","a staircase")]),
    clockat=(650,40,22,4,0))
S["qe04-f15"]=lambda: f_chart([("add another example",5),("explain the example I have",2),
    ("add a linking sentence",2),("add a statistic",1),("repeat the claim differently",1)], w=580)
S["qe04-f16"]=lambda: f_realia(doc("On the desk, evening",
    "One paragraph, levels marked",
    "<p><b>In the margin:</b> 1, 2, 2, 2, 2.</p>"
    "<p><b>Words in the paragraph:</b> 140. <b>Examples:</b> 3, all accurate.</p>"
    "<p><b>The marker's note:</b> <i>underdeveloped</i>.</p>"
    "<p><b>Beside it:</b> a journal page dated 1965, and three published paragraphs with their levels "
    "numbered.</p>",
    "A hundred and forty words, and two levels."), 620)

# ---------------- Unit 5 ----------------
S["qe05-f1"]=lambda: f_icons([("form","a pattern, as a template"),("magnifier","a question over an arrow"),
    ("podium","an expert at a lectern"),("handsup","a crowd"),
    ("balance","two things compared"),("fall","a slope"),
    ("signpost","a consequence"),("scales","a burden passing hands"),
    ("messages","a dialogue"),("review","a scale tipping"),
    ("book","a textbook"),("proof","a footnote"),("notebook","a checklist of questions"),
    ("danger","the word fallacy, crossed out"),("pen","a tick"),("note","a cross")],4)
S["qe05-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("ines",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"NOT A FALLACY",[("shape","fine"),("use","the question")]),
    clockat=(622,44,22,11,0))
S["qe05-f3"]=lambda: f_icons([("podium","from expert opinion"),("note","from example"),
    ("balance","from analogy"),("signpost","from consequences"),
    ("fall","the slippery slope"),("magnifier","every pattern has its questions")],3)
S["qe05-f4"]=lambda: f_realia(tbl("Team research &middot; attack five arguments", None,
    ["The argument","The pattern","The question that attacks it hardest","Survives?"],
    br(5,4),
    note="The one that did not survive: ______________________"), 680)
S["qe05-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "How to attack an argument, including your own &middot; page 1 of 1",
    "<p><b>The source.</b> Douglas Walton, <i>Informal Logic: A Pragmatic Approach</i>, second "
    "edition, Cambridge University Press, <b>2008</b> (first edition <b>1989</b>). Printed here in our "
    "own words.</p>"
    "<p>The book rejects a way of teaching most of us were given. The traditional list of "
    "<b>fallacies</b> treats certain kinds of argument as errors; the book's position is that most of "
    "these are <b>reasonable patterns</b> that can be used well or badly, and that naming them as "
    "fallacies teaches students to dismiss good reasoning.</p>"
    "<p>In their place: <b>argumentation schemes</b>, recurring patterns of <b>plausible</b> argument, "
    "each with a set of <b>critical questions</b>.</p>"
    + table_html(["The pattern","What it asserts"],
      [["from <b>expert opinion</b>","an expert says it, so it is probably so"],
       ["from <b>example</b>","this case holds, so the generalization probably holds"],
       ["from <b>analogy</b>","these cases are alike, so what holds of one holds of the other"],
       ["from <b>consequences</b>","the action would have these effects, so take it or avoid it"],
       ["the <b>slippery slope</b>","this step leads by stages to an outcome nobody wants"]])
    + "<p>The five questions for the first pattern: <b>Is the source actually an expert in the "
    "relevant field? Is the assertion inside that field? Is the source reliable? Do other experts "
    "agree? Is the assertion based on evidence that could be stated?</b> An appeal that answers all "
    "five is good reasoning; one that fails the second &mdash; a physicist on monetary policy &mdash; "
    "is the fallacy, and the fallacy is in the use.</p>"
    "<p>The second idea is <b>defeasibility</b>. These arguments do not prove; they create a "
    "<b>presumption</b> and <b>shift the burden of proof</b> &mdash; which is exactly what a 250-word "
    "essay does.</p>"
    "<p><b>A textbook, not a study.</b> A synthesis and a set of proposals; it reports <b>no "
    "experiment</b>. The list of schemes is <b>not closed or agreed</b>: different authors give "
    "different lists, and the author's own changed between editions. Whether a move is a fallacy "
    "depends on the <b>dialogue</b> it occurs in, which makes the judgment contextual and means no "
    "checklist settles it. And it is logic, not language teaching.</p>",
    "Our summary of a published textbook. The five questions are the book's; the use made of them on "
    "your own paragraph is ours."), 640)
S["qe05-f6"]=lambda: f_realia(tbl("Challenging", None,
    ["The challenge","What it attacks","An example"],
    [["<i>does it follow that</i>","the step from grounds to claim","Does it follow that the policy caused it?"],
     ["<i>on what evidence</i>","the grounds","On what evidence does that figure rest?"],
     ["<i>is the comparison sound</i>","an analogy","Is the comparison with Denmark sound?"],
     ["<i>would that always hold</i>","the warrant","Would that hold where transport is poor?"],
     ["<i>who says so</i>",B,B],
     ["<i>what would change that</i>",B,B]],
    note="Four cells are empty on purpose. Two of these attack the same part."), 680)
S["qe05-f7"]=lambda: f_matrix(["The pattern","The question","Survives?"],
    [("a climate scientist on measurement",["expert opinion","inside the field?","yes"]),
     ("a famous physicist on tax",["expert opinion","inside the field?","no"]),
     ("one city's road filled, so roads fill",["example","is one case enough?","no"]),
     ("Denmark did it, so we can",["analogy","alike in the relevant way?","yes, with a qualifier"]),
     ("legalize this and everything follows",["slippery slope","is each step shown?","no"])], 720)
S["qe05-f8"]=lambda: f_icons([("podium","an expert in the wrong field"),("note","a single case"),
    ("balance","unlike things compared"),("chain","a chain with a missing link"),
    ("handsup","a crowd"),("magnifier","which question first?")],3)
S["qe05-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 2",
    "The prompt is itself an argument",
    "<p><b>Because the internet gives everyone access to expert knowledge, formal qualifications are "
    "becoming less important and should count for less in hiring.</b></p>"
    "<p><b>To what extent do you agree or disagree?</b></p>",
    "<b>The prompt is an argument from consequences, so it has questions too.</b>"), 600)
S["qe05-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("ines",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("essay",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"FIVE QUESTIONS",[("1","passed"),("2","failed")]),
    clockat=(630,42,22,1,30))
S["qe05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Citing by fame", None,
      "<p><i>A Nobel laureate has argued that smaller class sizes do not improve results, and his "
      "authority is beyond question.</i></p><p>Questions survived: <b>1 of 5</b>.</p>",
      "The prize was in chemistry."), 380)[0:3],
    lambda w,h: f_realia(doc("Citing by field", None,
      "<p><i>Education economists who have studied it directly report effects too small to justify "
      "the cost; other specialists in the same field find larger effects in the earliest "
      "years.</i></p><p>Questions survived: <b>5 of 5</b>.</p>",
      "Field named, evidence named, disagreement named."), 380)[0:3],
    800, 310, "Fame", "Field")
S["qe05-f12"]=lambda: f_realia(doc("Two paragraphs on the same claim", None,
    "<p><b>Paragraph 1.</b> <i>A Nobel laureate has argued that smaller class sizes do not improve "
    "results, and his authority in the scientific world is beyond question. It is therefore clear that "
    "spending on smaller classes is wasted.</i></p>"
    "<p><b>Paragraph 2.</b> <i>The strongest evidence against spending on class size comes from "
    "education economists who have studied it directly, several of whom report effects too small to "
    "justify the cost. The point is contested: other specialists in the same field find larger effects "
    "in the earliest school years, and the disagreement turns on which years are measured.</i></p>",
    "One of these survives the second question and one does not."), 620)
S["qe05-f13"]=lambda: f_realia(form("Argument planner",
    [("My claim",B),("The pattern I am using",B),
     ("The question that attacks it hardest",B),("My answer to that question",B),
     ("What I concede",B)],
    note="Ask the five in order. Answer the first one that bites."), 580)
S["qe05-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("ines",340,190,{"seated":True}),("lars",470,184,{}),
     ("oksana",560,188,{"seated":True}),("junseo",660,186,{}),("mei",740,190,{"seated":True}),
     ("nour",830,186,{}),("chiamaka",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("book",430,208,0.26),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"A GOOD ARGUMENT USED BADLY",
      [("1","in the field?"),("2","inside it?"),("4","others agree?")]),
    clockat=(650,40,22,5,0))
S["qe05-f15"]=lambda: f_chart([("appeal to authority",4),("slippery slope",3),
    ("appeal to popularity",2),("false analogy",1),("I was never taught any",1)], w=580)
S["qe05-f16"]=lambda: f_realia(doc("On the desk, evening",
    "One citation, and the word irrelevant",
    "<p><b>Cited:</b> a Nobel laureate in chemistry. <b>The essay:</b> school funding.</p>"
    "<p><b>Question 1:</b> passed. He really is an expert.</p>"
    "<p><b>Question 2:</b> failed. The claim is outside the field.</p>"
    "<p><b>Task Response:</b> 6.0. <b>Margin note:</b> <i>irrelevant</i>.</p>",
    "She defended the wrong thing, because the first question passed."), 620)

# ---------------- Unit 6 ----------------
S["qe06-f1"]=lambda: f_icons([("signpost","a causal theory"),("camera","a story, as a film strip"),
    ("review","a measured figure"),("barrier","a counter-argument"),
    ("balance","a rebuttal"),("scales","a scale tipping away from you"),
    ("magnifier","a question over a mind"),("messages","an interview"),
    ("note","a transcript"),("family","four age groups"),
    ("book","a book dated 1991"),("form","a coding sheet"),
    ("proof","a tick"),("danger","a cross"),("essay","a crossed-out story"),
    ("star","a measured figure, circled")],4)
S["qe06-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("nour",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"WHAT WOULD CHANGE YOUR MIND?",[("answer","")]),
    clockat=(622,44,22,11,30))
S["qe06-f3"]=lambda: f_icons([("signpost","a theory"),("camera","a story offered as evidence"),
    ("review","a measured figure"),("barrier","a counter-argument"),
    ("balance","a rebuttal"),("magnifier","three things most people could not produce")],3)
S["qe06-f4"]=lambda: f_realia(tbl("Team research &middot; evidence, or a story?", None,
    ["The claim","What was offered for it","Evidence or scenario?","What would falsify it"],
    br(6,4),
    note="How many of the six offered a scenario: ______________________"), 680)
S["qe06-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "The question most people cannot answer about their own opinion &middot; page 1 of 1",
    "<p><b>The source.</b> Deanna Kuhn, <i>The Skills of Argument</i>, Cambridge University Press, "
    "<b>1991</b>. Printed here in our own words.</p>"
    "<p>The study interviewed about a hundred and sixty people of several ages and two levels of "
    "education about three social questions: why prisoners return to crime, why children fail at "
    "school, and why people are unemployed. Each was asked for a theory, then evidence, then a "
    "counter-argument, then a rebuttal, then what would show the theory <b>wrong</b>.</p>"
    + table_html(["What was asked for","What usually came back"],
      [["<b>evidence</b>","a <b>scenario</b>: a story describing how the cause would produce the "
        "effect"],
       ["a <b>counter-argument</b>","often nothing; where offered, a weak version easy to dismiss"],
       ["a <b>rebuttal</b>","sometimes, and usually stronger than the counter-argument it answered"],
       ["what would <b>falsify</b> the theory","very often nothing at all"]])
    + "<p>The central distinction is between <b>evidence</b> and <b>pseudo-evidence</b>: an account of "
    "how the cause would operate is a restatement of the theory in narrative form, equally consistent "
    "with the theory's being false. The study also found the ability to produce counter-arguments only "
    "<b>weakly related to education</b>, with one group clearly better: people trained in "
    "philosophy.</p>"
    "<p>The consequence for a writer is exact. A paragraph telling the story of how your cause would "
    "work has supported nothing. The two sentences that most reliably raise a Task Response figure are "
    "the counter-argument at <b>full strength</b> and your answer to it.</p>"
    "<p><b>An interview study.</b> Three topics, one country, one period. What counted as evidence was "
    "<b>coded by the researcher's criteria</b>, and those criteria are arguable. People were asked to "
    "produce arguments <b>on the spot</b>; somebody who cannot in an interview may well manage it "
    "given a week and a pen. The education finding is <b>correlational</b>: people who already argue "
    "that way may be the ones who study philosophy. And it is a study of reasoning, not of English.</p>",
    "Our summary of a published study. The link to the band descriptors is ours."), 640)
S["qe06-f6"]=lambda: f_realia(tbl("Refuting", None,
    ["The move","What it does","An example"],
    [["<i>it might be objected that</i>","the other side at full strength","It might be objected that the cost falls on the poorest."],
     ["<i>the obvious reply is</i>","your answer","The obvious reply is that the rebate offsets it."],
     ["<i>this would be decisive if</i>","concedes the condition","This would be decisive if no rebate existed."],
     ["<i>the difficulty with this is</i>","attacks the objection","The difficulty with this is that it assumes fixed demand."],
     ["<i>against this it is said</i>",B,B],
     ["<i>what would settle it is</i>",B,B]],
    note="Four cells are empty on purpose. A marker rewards the third, which looks like a "
    "surrender."), 700)
S["qe06-f7"]=lambda: f_chart([("a theory",11),("evidence, not a scenario",5),
    ("a counter-argument",3),("a falsifying condition",1)],
    unit="of eleven (our own illustration)", w=580)
S["qe06-f8"]=lambda: f_icons([("camera","a story in three frames"),("review","a measured figure"),
    ("balance","a comparison between two groups"),("signpost","a scenario"),
    ("library","a published source"),("magnifier","independent of the claim?")],3)
S["qe06-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 2",
    "One statement, two parts",
    "<p><b>Governments should spend more on preventing crime than on punishing it.</b></p>"
    "<p><b>Do you agree or disagree? What would be the main difficulty with your preferred "
    "approach?</b></p>",
    "<b>The other side's best argument is worth two sentences, not a paragraph.</b>"), 600)
S["qe06-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("nour",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("essay",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"STRAW MAN",[("written","weak"),("real","unanswered")]),
    clockat=(630,42,22,2,0))
S["qe06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Four sentences on a weak objection", None,
      "<p><i>It might be said that people simply do not like being told what to do&hellip;</i></p>"
      "<p>Objection strength: <b>weak</b>. Sentences spent: <b>4</b>.</p>",
      "Nobody holds this objection."), 380)[0:3],
    lambda w,h: f_realia(doc("Two sentences on the strongest", None,
      "<p><i>The strongest objection is that the cost falls on people who cannot avoid driving and "
      "cannot afford to move. That objection is real, and it is an argument for exemptions.</i></p>"
      "<p>Objection strength: <b>strongest available</b>. Sentences spent: <b>2</b>.</p>",
      "Everybody holds this objection, including the marker."), 380)[0:3],
    800, 310, "Four sentences", "Two sentences")
S["qe06-f12"]=lambda: f_realia(doc("Two paragraphs", None,
    "<p><b>Paragraph 1.</b> <i>Restricting cars would improve air quality. Imagine a street with "
    "fewer cars on it: the air is cleaner, children can walk to school, shops reopen because people "
    "are passing on foot, and the whole area becomes pleasant again.</i></p>"
    "<p><b>Paragraph 2.</b> <i>&hellip; Where restrictions have been introduced and the pollutant "
    "measured before and after, the measured concentrations have fallen, and they have fallen most in "
    "the streets where the restriction applied &mdash; which is the pattern you would expect if "
    "traffic were the cause and not the pattern you would expect if it were not.</i></p>",
    "The first is a scenario. The second is evidence, and it says why."), 620)
S["qe06-f13"]=lambda: f_realia(form("Evidence planner",
    [("My position",B),("My evidence &mdash; independent of the claim?",B),
     ("The strongest objection",B),("My answer",B),("What would change my mind",B)],
    note="If the second box is a story about how your cause works, it is not evidence."), 580)
S["qe06-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("nour",340,190,{"seated":True}),("grace",470,184,{}),
     ("tomas",560,188,{"seated":True}),("hana",660,186,{}),("marek",740,190,{"seated":True}),
     ("samira",830,186,{}),("ines",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("note",430,208,0.22),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"WHAT WOULD CHANGE YOUR MIND?",
      [("theory","&#10003;"),("evidence","?"),("falsifier","")]),
    clockat=(650,40,22,6,0))
S["qe06-f15"]=lambda: f_chart([("a measured result",3),("an expert I trust",2),
    ("an experience of my own",2),("an argument I cannot answer",2),("nothing",2)], w=580)
S["qe06-f16"]=lambda: f_realia(doc("On the desk, evening",
    "One bracketed paragraph and the words straw man",
    "<p><b>The objection he wrote:</b> that people simply do not like being told what to do.</p>"
    "<p><b>The objection everybody holds:</b> that the cost falls on people who cannot avoid "
    "driving.</p>"
    "<p><b>Words spent on the first:</b> 120. <b>On the second:</b> 0.</p>"
    "<p><b>Task Response:</b> 6.0. <b>Margin note:</b> <i>straw man</i>.</p>",
    "He could name the real objection in four seconds. It was not on the paper."), 620)
