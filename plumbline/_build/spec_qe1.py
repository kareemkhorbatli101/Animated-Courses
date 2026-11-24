# -*- coding: utf-8 -*-
"""Plumbline Book 5 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Starting Point ----------------
S["qe00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each, from a Task 2 essay",
    ["What you have","An example"],
    [["Opinion language","<i>In my view</i> &middot; <i>I would argue that</i>"],
     ["Reasons","<i>because</i> &middot; <i>since</i> &middot; <i>one reason is that</i>"],
     ["Examples","<i>for instance</i> &middot; <i>a clear example of this is</i>"],
     ["Linking words","<i>however</i> &middot; <i>furthermore</i> &middot; <i>on the other hand</i>"],
     ["Concession","<i>although</i> &middot; <i>admittedly</i> &middot; <i>it is true that</i>"],
     ["The conditional","<i>if this were the case</i> &middot; <i>unless</i>"]],
    note="Six boxes, and you have most of what is in them. What this book adds is a position worth "
    "putting them around."), 620)
S["qe00-f2"]=lambda: f_realia(tbl("A topic, and a position", None,
    ["The question","The topic","The position"],
    [["<i>Should university be free?</i>","university fees",
      "<b>University should be free for first degrees only.</b>"],
     ["<i>Do cities need cars?</i>","cars in cities",
      "<b>Large cities should restrict private cars in their centers.</b>"],
     ["<i>Is remote work better?</i>","working from home",
      "<b>Remote work suits experienced staff and harms new ones.</b>"],
     ["<i>Has technology made us lonelier?</i>","technology and loneliness",
      "<b>It has changed how we are lonely, not how much.</b>"]],
    note="Only one of the three columns can be defended. It is the one with a verb in it."), 700)
S["qe00-f3"]=lambda: f_realia(doc("Taped inside a notebook",
    "Two openings on the same statement",
    "<p style='font-size:15px;line-height:1.9'>"
    "<b>&#10003; Governments should fund public transport before building new roads, because a road "
    "that relieves congestion fills again within a decade while a rail line does not.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>You can disagree with this.</span><br><br>"
    "<b>&#10007; Transport is a very important issue in modern society and there are many different "
    "opinions about it. In this essay I will discuss the advantages and disadvantages.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>You cannot disagree with this, because it has said "
    "nothing.</span>"
    "</p>",
    "The second is better English than most candidates write, and it has taken a position on "
    "nothing."), 600)
S["qe00-f4"]=lambda: f_part("Forty minutes, spent",
    [("Read the statement and plan: 6 min",6,"#2f5c6b"),
     ("Write the introduction: 4 min",4,"#8a5a1e"),
     ("Write the body: 24 min",24,"#3f6b2f"),
     ("Conclude and check: 6 min",6,"#6b2f4a")], 540)

# ---------------- Unit 1 ----------------
S["qe01-f1"]=lambda: f_icons([("review","Task Response"),("thread","Coherence and Cohesion"),
    ("book","Lexical Resource"),("proof","Grammatical Range and Accuracy"),
    ("star","a band figure in a box"),("wordcount","250 words"),
    ("note","a statement with a question under it"),("essay","a position, as a sentence"),
    ("pricetag","a topic, as a noun phrase"),("notebook","a plan of four boxes"),
    ("clock","forty minutes"),("clipboard","the public descriptors"),
    ("magnifier","one row circled"),("pen","a marker's pencil"),
    ("scales","four equal quarters"),("speechbubble","and a question mark")],4)
S["qe01-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("samira",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("clipboard",392,196,0.24),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"FOUR, EQUAL",[("TR","?"),("CC","25%"),("LR","25%")]),
    clockat=(622,44,22,9,0))
S["qe01-f3"]=lambda: f_icons([("note","a question being answered"),
    ("essay","a position at the top"),("book","a fan of words"),
    ("proof","a grammar error marked"),("library","a published page"),
    ("scales","four equal quarters")],3)
S["qe01-f4"]=lambda: f_realia(tbl("Team research &middot; what the bands say", None,
    ["Criterion","What band 6 says","What band 7 says","The difference in our words","Where we read it"],
    br(4,5),
    note="The word that marks the difference: ______________________"), 700)
S["qe01-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "What the first criterion asks, and what it does not &middot; page 1 of 1",
    "<p><b>The source.</b> The published Writing Task 2 band descriptors and the public statement of "
    "how Task 2 is assessed, from the test owners' own pages. Downloaded <b>19 May</b>. Printed here "
    "in our own words.</p>"
    + table_html(["The criterion","What it asks of you"],
      [["<b>Task Response</b>","that you address the question, present a clear position and develop "
        "it with support"],
       ["<b>Coherence and Cohesion</b>","that the essay is organized, paragraphed and logically "
        "sequenced"],
       ["<b>Lexical Resource</b>","range and accuracy of vocabulary, including spelling"],
       ["<b>Grammatical Range and Accuracy</b>","range and accuracy of structures, including "
        "punctuation"]])
    + "<p>The four are <b>equally weighted</b>, and Task 2 counts for twice as much as Task 1 in the "
    "Writing score. Around <b>band 6</b> the first criterion describes a response that addresses the "
    "task with a position that <b>may become unclear</b> and support that may be <b>insufficiently "
    "developed</b>. Around <b>band 7</b> it describes a response that addresses <b>all parts</b>, with "
    "a <b>clear position throughout</b> and <b>extended, supported</b> ideas.</p>"
    "<p>Three differences, and none is about English. <b>All parts:</b> a two-part question is two "
    "tasks. <b>Throughout:</b> a position abandoned in paragraph three is not clear throughout. "
    "<b>Extended and supported:</b> an idea mentioned is not an idea developed, and the gap is usually "
    "two sentences.</p>"
    "<p><b>A scale, not a method.</b> The descriptors describe what each band looks like; they do not "
    "say how to get there. They name no vocabulary, prescribe no essay shape and give no model "
    "answer. They are also the <b>public</b> versions: fuller descriptors are used in examiner "
    "training and are not published, and this note does not claim to know what is in them.</p>",
    "Our summary of a published scale. Read the owners' own pages, and write down the date."), 620)
S["qe01-f6"]=lambda: f_realia(tbl("Stating a position", None,
    ["The opening","How strong","An example"],
    [["<i>I would argue that</i>","clear, and owned",
      "I would argue that fees should be abolished for first degrees."],
     ["<i>This essay contends that</i>","clear, and formal","This essay contends that the policy has failed."],
     ["<i>In my view</i>","clear, and plainer","In my view the second option is better."],
     ["<i>While X, Y</i>","a position with a concession built in","While costs would rise, the benefit is larger."],
     ["<i>On balance</i>",B,B],
     ["<i>It is often claimed that</i>",B,B]],
    note="Four cells are empty on purpose. One of the six is not a position at all."), 660)
S["qe01-f7"]=lambda: f_chart([("Task Response",5.6),("Coherence and Cohesion",6.4),
    ("Lexical Resource",6.5),("Grammatical Range",6.3)], unit="band", w=540)
S["qe01-f8"]=lambda: f_icons([("note","a figure being described"),("essay","a position at the top"),
    ("book","a fan of words"),("proof","a corrected error"),
    ("wordcount","250 words"),("library","a published page")],3)
S["qe01-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 2",
    "One statement, two questions",
    "<p><b>Some people believe that governments should fund the arts from public money, while others "
    "think public money should go only to science and technology.</b></p>"
    "<p><b>Discuss both views and give your own opinion. What would the consequences of your preferred "
    "approach be?</b></p>"
    "<p style='font-size:13px;color:#6b6861'>Write at least 250 words. You should spend about 40 "
    "minutes on this task.</p>",
    "<b>Two questions, and both of them are the task.</b>"), 620)
S["qe01-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("samira",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("essay",366,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"TWO QUESTIONS",[("asked","2"),("answered","1")]),
    clockat=(630,42,22,4,30))
S["qe01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Essay A &middot; 320 words", None,
      "<p>Answers the first question at length. Well organized. Good vocabulary.</p>"
      "<p>Questions in the prompt: <b>2</b>. Questions answered: <b>1</b>.</p>",
      "TR 5.5 &middot; CC 6.0 &middot; LR 7.0 &middot; GRA 6.0"), 380)[0:3],
    lambda w,h: f_realia(doc("Essay B &middot; 264 words", None,
      "<p>Answers both. Position stated in the introduction and again in the conclusion.</p>"
      "<p>Questions in the prompt: <b>2</b>. Questions answered: <b>2</b>.</p>",
      "TR 6.5 &middot; CC 6.5 &middot; LR 6.5 &middot; GRA 6.0"), 380)[0:3],
    800, 310, "Longer", "Shorter, and a band higher")
S["qe01-f12"]=lambda: f_realia(doc("Two introductions", None,
    "<p><b>Introduction 1.</b> <i>Education is one of the most important issues in modern society and "
    "many people have different opinions about it. Some think university should be free while others "
    "think students should pay. In this essay I will discuss both views and give my own opinion.</i></p>"
    "<p><b>Introduction 2.</b> <i>First degrees should be publicly funded and postgraduate study "
    "should not. The argument for free first degrees is that they are now what secondary school was a "
    "century ago; the argument against free postgraduate study is that its benefits are mostly "
    "private.</i></p>",
    "The first says the subject exists. The second says what the writer thinks about it."), 620)
S["qe01-f13"]=lambda: f_realia(form("Task 2 planner",
    [("The questions in the prompt",B),("My position in one sentence",B),
     ("The strongest reason for it",B),("The strongest reason against it",B),
     ("What I concede",B),("My conclusion",B)],
    note="Six boxes, six minutes. The fourth is the one that raises the band."), 600)
S["qe01-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("samira",340,190,{"seated":True}),("grace",470,184,{}),
     ("lars",560,188,{"seated":True}),("nour",660,186,{}),("marek",740,190,{"seated":True}),
     ("mei",830,186,{}),("oksana",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("clipboard",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"HOW MANY QUESTIONS DID IT ASK?",
      [("prompt","2"),("essay","1"),("TR","5.5")]),
    clockat=(650,40,22,10,0))
S["qe01-f15"]=lambda: f_chart([("Yes, all four criteria",2),("Yes, one or two",3),
    ("No, I did not know they exist",4),("Seen but not read",2)], w=560)
S["qe01-f16"]=lambda: f_realia(doc("On the desk, September",
    "One marked essay and two descriptor pages",
    "<p><b>The box at the top right:</b> LR <b>7.0</b> &middot; CC <b>6.0</b> &middot; GRA "
    "<b>6.0</b> &middot; TR <b>5.5</b></p>"
    "<p><b>Word count:</b> 320. <b>Time taken:</b> 38 minutes.</p>"
    "<p><b>On the prompt:</b> two questions, the first ticked and the second untouched.</p>"
    "<p><b>Circled in the descriptors:</b> the words <i>all parts of the task</i>.</p>",
    "One criterion out of four was holding the other three down."), 620)

# ---------------- Unit 2 ----------------
S["qe02-f1"]=lambda: f_icons([("note","a claim, boxed"),("signpost","grounds, with an arrow"),
    ("bridge","a warrant under the arrow"),("scaffolding","backing under that"),
    ("balance","a qualifier"),("barrier","a rebuttal to one side"),
    ("councilbuilding","a court"),("review","a syllogism in three lines"),
    ("book","a book dated 1958"),("magnifier","one diagram, closely read"),
    ("chain","three links"),("walkroute","a step across a gap"),
    ("proof","a tick"),("danger","a cross"),("speechbubble","a challenge"),
    ("essay","and a paragraph that feels thin")],4)
S["qe02-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("marek",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"GROUNDS &rarr; CLAIM",[("warrant","(empty)")]),
    clockat=(622,44,22,9,30))
S["qe02-f3"]=lambda: f_icons([("note","the claim"),("signpost","the grounds"),
    ("bridge","the warrant"),("scaffolding","the backing"),
    ("balance","the qualifier"),("barrier","the rebuttal")],3)
S["qe02-f4"]=lambda: f_realia(tbl("Team research &middot; find the missing box", None,
    ["The claim","The grounds","The warrant","Stated?","What would challenge it"],
    br(6,5),
    note="The argument with the weakest warrant: ______________________"), 700)
S["qe02-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "The three parts of a reason, and the one nobody writes &middot; page 1 of 1",
    "<p><b>The source.</b> Stephen Toulmin, <i>The Uses of Argument</i>, Cambridge University Press, "
    "<b>1958</b>. Printed here in our own words.</p>"
    "<p>The book argues that formal logic is the wrong model for how people actually argue. Real "
    "arguments are more like what happens in a court: a claim is made, evidence is offered, and the "
    "connection between them can itself be questioned.</p>"
    + table_html(["The part","What it does"],
      [["<b>claim</b>","the assertion being defended"],
       ["<b>grounds</b>","the facts offered for it"],
       ["<b>warrant</b>","the general principle that licenses the move from grounds to claim"],
       ["<b>backing</b>","what supports the warrant if the warrant is questioned"],
       ["<b>qualifier</b>","the strength claimed: <i>probably</i>, <i>in most cases</i>"],
       ["<b>rebuttal</b>","the circumstances in which the claim would not hold"]])
    + "<p>The useful idea is the <b>warrant</b>. <i>Harry was born in Bermuda, so Harry is a British "
    "subject</i> is not two statements but three: the two written, and the unwritten rule about who "
    "counts. The warrant is left out because both sides accept it &mdash; until one side does not. "
    "Warrants are also <b>field-dependent</b>: what licenses an inference in law is not what licenses "
    "one in medicine, and the book argues that philosophy's search for a single standard was a "
    "mistake.</p>"
    "<p><b>The author called it a sketch.</b> He presents the layout as an <b>analytical tool</b>, not "
    "a procedure for producing arguments, and describes his own account as a sketch rather than a "
    "finished theory. The categories have been <b>argued about ever since</b>: where grounds end and "
    "warrants begin is often unclear, and two analysts routinely divide the same argument "
    "differently. It is a work of philosophy addressed to philosophers, it is not about writing or "
    "examinations, and it reports <b>no study</b>.</p>",
    "Our summary of a published book. The use made of the warrant in an essay paragraph is ours."),
    640)
S["qe02-f6"]=lambda: f_realia(tbl("Justifying", None,
    ["The connector","What it introduces","An example"],
    [["<i>because</i>","a reason, plainly","because air quality is poor"],
     ["<i>since</i>","a reason the reader already accepts","since cars are the main source"],
     ["<i>given that</i>","a premise taken as agreed","given that the data is reliable"],
     ["<i>in that</i>","a clarification of how","useful in that it reduces delay"],
     ["<i>as</i>",B,B],
     ["<i>on the grounds that</i>",B,B]],
    note="Four cells are empty on purpose. One of these treats the reason as already agreed."), 660)
S["qe02-f7"]=lambda: f_matrix(["The claim","The grounds","The warrant"],
    [("1",["cars should be restricted","air quality is poor",
      "traffic is the main source of the pollutants measured"]),
     ("2",["fees should be abolished","graduates earn more","&mdash;"]),
     ("3",["the policy failed","the figure did not fall",
      "the policy's only stated aim was to reduce that figure"]),
     ("4",["remote work harms new staff","they resign sooner","&mdash;"])], 700)
S["qe02-f8"]=lambda: f_icons([("note","a claim alone"),("signpost","a claim with grounds"),
    ("bridge","claim, grounds and warrant"),("balance","a qualifier"),
    ("barrier","a rebuttal"),("magnifier","which box is empty?")],3)
S["qe02-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 2",
    "One statement, one question",
    "<p><b>Building new roads is the most effective way to reduce traffic congestion in large "
    "cities.</b></p>"
    "<p><b>To what extent do you agree or disagree?</b></p>",
    "<b>Two reasons are not an argument; one reason and its principle is.</b>"), 600)
S["qe02-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("marek",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("essay",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"WHAT LICENSES IT?",[("grounds","3 cases"),("warrant","&mdash;")]),
    clockat=(630,42,22,10,0))
S["qe02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Paragraph A &middot; three examples", None,
      "<p>A ring road filled in eight years. A motorway filled in six. Two new routes, traffic up in "
      "both.</p><p>Principle stated: <b>none</b>.</p>",
      "Three stories and no argument."), 380)[0:3],
    lambda w,h: f_realia(doc("Paragraph B &middot; one example", None,
      "<p>A ring road filled in eight years. The reason is general: reducing the cost of a journey "
      "increases the number of journeys made.</p><p>Principle stated: <b>yes</b>. Rebuttal: "
      "<b>yes</b>.</p>",
      "One case, carrying a principle."), 380)[0:3],
    800, 310, "Three examples", "One example and a warrant")
S["qe02-f12"]=lambda: f_realia(doc("Two body paragraphs", None,
    "<p><b>Paragraph 1.</b> <i>Building new roads does not solve congestion. In one city a new ring "
    "road was full within eight years. In another, a widened motorway was congested again after six. A "
    "third city built two new routes and traffic rose in both.</i></p>"
    "<p><b>Paragraph 2.</b> <i>&hellip; The reason is general: reducing the cost of a journey "
    "increases the number of journeys made, so any capacity added at a congested point is consumed by "
    "trips that were previously not worth making. That principle is why road-building relieves "
    "congestion only where demand is genuinely fixed.</i></p>",
    "The second paragraph has one example and a sentence a reader could attack."), 620)
S["qe02-f13"]=lambda: f_realia(form("Paragraph planner",
    [("The claim",B),("The grounds",B),("The warrant",B),("The backing",B),("The rebuttal",B)],
    note="Five lines. If the third is empty, the paragraph will read as three stories."), 580)
S["qe02-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("marek",340,190,{"seated":True}),("grace",470,184,{}),
     ("hana",560,188,{"seated":True}),("ines",660,186,{}),("tomas",740,190,{"seated":True}),
     ("yusuf",830,186,{}),("samira",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("book",430,208,0.26),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"WHAT LICENSES THE STEP?",
      [("grounds","&#10003;"),("warrant","(empty)"),("claim","&#10003;")]),
    clockat=(650,40,22,11,0))
S["qe02-f15"]=lambda: f_chart([("another example",5),("a statistic",2),("a linking word",2),
    ("a longer sentence",1),("a reason why it matters",1)], w=560)
S["qe02-f16"]=lambda: f_realia(doc("On the desk, evening",
    "One bracketed paragraph and a book dated 1958",
    "<p><b>In the margin:</b> three examples numbered 1, 2, 3.</p>"
    "<p><b>Words in the paragraph:</b> 110. <b>Every example accurate.</b></p>"
    "<p><b>Task Response:</b> 6.0. <b>The examiner's note:</b> <i>underdeveloped</i>.</p>"
    "<p><b>On the diagram beside it:</b> the middle box, now filled in.</p>",
    "A hundred and ten words of accurate example, and the marker wrote <i>underdeveloped</i>."), 620)

# ---------------- Unit 3 ----------------
S["qe03-f1"]=lambda: f_icons([("speechbubble","a sentence, and what is thought after it"),
    ("messages","two speakers in exchange"),("handshake","cooperation"),
    ("scales","quantity"),("proof","quality"),("signpost","relation"),
    ("window","manner"),("danger","a word crossed out"),
    ("balance","a hedge"),("note","a concession"),("eye","a raised eyebrow"),
    ("podium","a lecture hall"),("book","a volume dated 1975"),
    ("magnifier","a footnote, closely read"),("pen","a tick"),("review","a cross")],4)
S["qe03-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("hana",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"SOME ARE HONEST",[("so","not all")]),
    clockat=(622,44,22,10,0))
S["qe03-f3"]=lambda: f_icons([("scales","quantity"),("proof","quality"),
    ("signpost","relation"),("window","manner"),
    ("handshake","the cooperative principle"),("magnifier","say enough, and no more")],3)
S["qe03-f4"]=lambda: f_realia(tbl("Team research &middot; what did the writer imply?", None,
    ["The sentence as written","What it states","What a reader infers","Which maxim"],
    br(6,4),
    note="The inference the writer probably did not intend: ______________________"), 680)
S["qe03-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "What a reader works out from what you did not write &middot; page 1 of 1",
    "<p><b>The source.</b> H. P. Grice, <i>Logic and Conversation</i>, published in <i>Syntax and "
    "Semantics 3: Speech Acts</i>, edited by P. Cole and J. L. Morgan, <b>1975</b>. The material was "
    "delivered as lectures in <b>1967</b>. Printed here in our own words.</p>"
    "<p>Conversation is full of meaning that is not in the words. The explanation offered is that talk "
    "is a <b>cooperative activity</b>: participants assume the other person is trying to be "
    "understood, and that assumption licenses a great deal of inference.</p>"
    + table_html(["The maxim","What it asks"],
      [["<b>Quantity</b>","make your contribution as informative as required, and <b>no more</b>"],
       ["<b>Quality</b>","do not say what you believe false, or lack adequate evidence for"],
       ["<b>Relation</b>","be relevant"],
       ["<b>Manner</b>","be perspicuous: avoid obscurity and ambiguity, be brief and orderly"]])
    + "<p><b>Implicature</b> is the meaning a hearer derives from assuming you were obeying the "
    "maxims. <i>Some politicians are honest</i> implies that not all are, because a cooperative "
    "speaker who believed all were would have said <b>all</b>. <b>Flouting</b> is breaking a maxim so "
    "obviously that the breach itself carries meaning: a reference letter praising only the "
    "candidate's handwriting obeys Quality and visibly breaks Quantity.</p>"
    "<p>Two consequences for a writer. <b>Your hedges commit you:</b> <i>some benefits are real</i> "
    "concedes that some are not. And <b>a concession stated is stronger than one implied</b>, because "
    "leaving it out does not prevent the inference, only your answer to it.</p>"
    "<p><b>A lecture, not a study.</b> An argument with invented examples: no data, no hearers "
    "measured, no evidence beyond the author's own intuitions. The maxims have <b>not been agreed "
    "since</b> &mdash; later work reduced them to a single principle of relevance, others multiplied "
    "them, others again called them culturally specific. And it is about <b>conversation</b>, not "
    "writing: an essay has no turn-taking, no feedback and no shared situation.</p>",
    "Our summary of a published lecture, named with its volume, its editors, its publication year and "
    "the year it was delivered."), 640)
S["qe03-f6"]=lambda: f_realia(tbl("Conceding", None,
    ["The concession","How much it gives away","An example"],
    [["<i>admittedly</i>","one point, and you answer it","Admittedly the cost is high, but it falls once."],
     ["<i>of course</i>","a point so obvious it costs nothing","Of course some students would not benefit."],
     ["<i>it is true that</i>","one point, neutrally","It is true that the figures are provisional."],
     ["<i>granted</i>","one point, briskly","Granted, the scheme is untested."],
     ["<i>while it is the case that</i>",B,B],
     ["<i>no doubt</i>",B,B]],
    note="Four cells are empty on purpose. One of these costs you nothing and one costs you a "
    "paragraph."), 680)
S["qe03-f7"]=lambda: f_matrix(["What it states","What a reader infers"],
    [("<i>Some benefits are real.</i>",["at least some are real","some are not"]),
     ("<i>The policy has had short-term success.</i>",["it succeeded in the short term",
      "it has not succeeded long-term"]),
     ("<i>The data is adequate.</i>",["the data is adequate","it is no better than adequate"]),
     ("<i>The scheme is legal.</i>",["it is lawful","it may not be wise"]),
     ("<i>Many economists accept this.</i>",["many accept it","many do not"])], 660)
S["qe03-f8"]=lambda: f_icons([("scales","a quantifier"),("clock","a time expression"),
    ("balance","an understated adjective"),("note","a one-line reference letter"),
    ("danger","a crossed-out word"),("magnifier","what did you just concede?")],3)
S["qe03-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 2",
    "Read the quantifier",
    "<p><b>Some people think that technology has made modern life more isolated than it used to "
    "be.</b></p>"
    "<p><b>To what extent do you agree or disagree?</b></p>",
    "<b>The prompt's own quantifier is part of the question.</b> <i>Some people</i> is not <i>most "
    "people</i>, and an essay that treats it as <i>most</i> has answered a different prompt."), 600)
S["qe03-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("hana",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("essay",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"FOUR CIRCLES",[("word","some"),("times","4")]),
    clockat=(630,42,22,12,30))
S["qe03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Hedged", None,
      "<p><i>Some of the benefits may possibly be real, although it could be argued that certain "
      "costs might also arise.</i></p><p>Hedges: <b>5</b>. Named concessions: <b>0</b>.</p>",
      "What is this writer's position?"), 380)[0:3],
    lambda w,h: f_realia(doc("Committed", None,
      "<p><i>The benefits outweigh the costs. Admittedly the costs fall in the first two years while "
      "the benefits accrue over a decade.</i></p><p>Hedges: <b>0</b>. Named concessions: <b>1</b>.</p>",
      "You can state this writer's position in one sentence."), 380)[0:3],
    800, 310, "Five hedges", "One concession")
S["qe03-f12"]=lambda: f_realia(doc("Two paragraphs", None,
    "<p><b>Paragraph 1.</b> <i>Some of the benefits of the scheme may possibly be real, although it "
    "could be argued that certain costs might also arise. It is perhaps the case that, to some extent, "
    "the advantages could outweigh the drawbacks in some circumstances.</i></p>"
    "<p><b>Paragraph 2.</b> <i>The benefits of the scheme outweigh its costs. Admittedly the costs "
    "fall in the first two years while the benefits accrue over a decade, so a government facing an "
    "election has every reason to dislike it; that is a political objection and not an economic "
    "one.</i></p>",
    "Five hedges and no position, against one concession and a position you could argue with."), 620)
S["qe03-f13"]=lambda: f_realia(form("Concession planner",
    [("My position",B),("The objection that costs me nothing",B),
     ("The objection that costs me something",B),("My answer to the second",B),
     ("The hedges I will keep",B)],
    note="The last box is the one students leave empty, and then hedge everything."), 580)
S["qe03-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("hana",340,190,{"seated":True}),("lars",470,184,{}),
     ("nour",560,188,{"seated":True}),("chiamaka",660,186,{}),("mei",740,190,{"seated":True}),
     ("junseo",830,186,{}),("oksana",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("essay",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"WHAT DID YOU JUST CONCEDE?",
      [("quantity","&#10003;"),("quality","&#10003;"),("manner","&#10003;")]),
    clockat=(650,40,22,3,0))
S["qe03-f15"]=lambda: f_chart([("to be accurate",2),("to be polite",4),
    ("to sound academic",3),("because I am not sure",1),("I had not noticed",1)], w=560)
S["qe03-f16"]=lambda: f_realia(doc("On the desk, evening",
    "One word, circled four times",
    "<p><b>The word:</b> <i>some</i>.</p>"
    "<p><b>The position:</b> that the benefits outweigh the costs.</p>"
    "<p><b>Task Response:</b> 6.0. <b>The margin note:</b> <i>position unclear</i>.</p>"
    "<p><b>Beside it:</b> a volume dated 1975, and five sentences with their implications written "
    "out.</p>",
    "She had hedged out of care, and the reader had read the hedges."), 620)
