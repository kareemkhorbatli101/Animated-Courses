# -*- coding: utf-8 -*-
"""Plumbline Book 5 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 10 ----------------
S["qe10-f1"]=lambda: f_icons([("notebook","planning"),("pen","translating"),
    ("eye","reviewing"),("thread","arrows both ways"),
    ("star","a goal at the top of a page"),("signpost","a sub-goal"),
    ("magnifier","a monitor"),("essay","a sentence rewritten mid-line"),
    ("danger","a crossed-out word"),("archive","long-term memory"),
    ("speechbubble","a rhetorical problem"),("note","the text so far"),
    ("form","a think-aloud transcript"),("book","a journal page dated 1981"),
    ("proof","a tick"),("review","a cross")],4)
S["qe10-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("junseo",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"NOT STAGES",[("plan","&harr;"),("write","&harr;"),("review","&harr;")]),
    clockat=(622,44,22,1,30))
S["qe10-f3"]=lambda: f_icons([("notebook","generating, organizing, goal-setting"),
    ("pen","translating"),("eye","reviewing"),
    ("star","a goal"),("signpost","a changed goal"),
    ("magnifier","not stages, processes")],3)
S["qe10-f4"]=lambda: f_realia(tbl("Team research &middot; watch yourselves write", None,
    ["Minute","What I was doing","What interrupted me","Was it worth it?"],
    br(8,4),
    note="The interruption that cost most time: ______________________"), 680)
S["qe10-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "What is actually happening in the forty minutes &middot; page 1 of 1",
    "<p><b>The source.</b> Linda Flower and John R. Hayes, <i>A Cognitive Process Theory of "
    "Writing</i>, College Composition and Communication, <b>1981</b>. Printed here in our own "
    "words.</p>"
    "<p>The paper was written against the way composition was then taught: as a sequence of stages "
    "&mdash; pre-writing, writing, re-writing &mdash; through which a text passed once. The authors "
    "recorded writers <b>thinking aloud</b> and built a model from what they heard.</p>"
    + table_html(["The claim","What it means"],
      [["writing is a set of <b>distinctive thinking processes</b>",
        "planning, translating and reviewing are different kinds of work"],
       ["the processes are <b>hierarchical and embedded</b>",
        "any one can happen inside any other: you plan in the middle of a sentence"],
       ["composing is <b>goal-directed</b>",
        "the writer works toward a growing network of goals, not a shape to fill"],
       ["writers <b>create and change</b> their own goals",
        "what you learn while writing can change the high-level goal"]])
    + "<p>The processes are coordinated by a <b>monitor</b>, which decides moment by moment which "
    "process to be in. The model separates the <b>task environment</b> &mdash; the assignment and the "
    "text produced so far &mdash; from the writer's <b>long-term memory</b>.</p>"
    "<p>The difference reported between more and less experienced writers is not the order of stages "
    "but how richly the writer <b>represents the rhetorical problem</b>. Three consequences for your "
    "forty minutes: <b>the text so far is part of the task</b>, so re-reading your last sentence is "
    "not wasted; <b>some interruptions are worth paying for and some are not</b> &mdash; asking "
    "whether the reader will accept the paragraph earns its minute, hunting for a better adjective "
    "does not; and <b>a goal may change</b>, in which case say so in the conclusion.</p>"
    "<p><b>Built from protocols, and criticized since.</b> The model rests on think-aloud protocols "
    "from a <b>small number of writers</b>; protocols record only what gets said, and being asked to "
    "narrate changes the task. It is a theory of <b>process, not of quality</b>, and predicts no "
    "score. The best-known criticism is that it treats writing as something inside one head and leaves "
    "out the <b>social situation</b>; a later generation rebuilt the field around that objection, and "
    "the authors revised the model themselves. And it concerns untimed composing in a first "
    "language.</p>",
    "Our summary of a published paper. The three consequences for a timed essay are ours."), 640)
S["qe10-f6"]=lambda: f_realia(tbl("Redrafting in words", None,
    ["The move","When","An example"],
    [["<i>more precisely</i>","the claim was too wide","More precisely, in cities with existing rail."],
     ["<i>or rather</i>","the word was wrong","a ban, or rather a restriction with exemptions"],
     ["<i>that is</i>","a term needs narrowing","the cost, that is the cost in the first two years"],
     ["<i>it would be more accurate to say</i>","the sentence overstated","It would be more accurate to say most, not all."],
     ["<i>what this amounts to is</i>",B,B],
     ["<i>in other words</i>",B,B]],
    note="Four cells are empty on purpose. These let you correct a sentence forward, crossing "
    "nothing out."), 700)
S["qe10-f7"]=lambda: f_realia(tbl("One writer's forty minutes", None,
    ["Minute","What the writer was doing"],
    [["1&ndash;6","planning"],["7&ndash;13","translating"],["14","<b>planning</b>"],
     ["15&ndash;21","translating"],["22","<b>planning, then reviewing</b>"],
     ["23&ndash;30","translating"],["31","<b>planning</b>"],["32&ndash;38","translating"],
     ["39&ndash;40","reviewing"]],
    note="One invented writer's forty minutes, drawn by us to show a shape. It establishes "
    "nothing."), 580)
S["qe10-f8"]=lambda: f_icons([("notebook","generating ideas"),("form","ordering them"),
    ("pen","producing a sentence"),("eye","rereading a line"),
    ("danger","changing a word"),("magnifier","which process, and is this the moment?")],3)
S["qe10-f9"]=lambda: f_realia(tbl("Practice task &middot; mark the clock", None,
    ["Minute","Stopped?","What for?"],
    br(10,3),
    note="<b>Mark the clock each time you stop.</b> Prompt: <i>In many countries the gap between "
    "rich and poor is widening. What are the causes, and what can be done?</i>"), 580)
S["qe10-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("junseo",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("essay",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"FOURTEEN MINUTES",[("para 1","14 min"),("conclusion","1 line")]),
    clockat=(630,42,22,4,0))
S["qe10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Timeline A", None,
      "<p>Fourteen minutes on the first paragraph. One minute on the conclusion.</p>"
      "<p>Stops: <b>19</b>. Most at word level.</p>", "The best paragraph in the essay."), 380)[0:3],
    lambda w,h: f_realia(doc("Timeline B", None,
      "<p>Four planning episodes spread through. Four minutes at the end.</p>"
      "<p>Stops: <b>7</b>. None at word level until the end.</p>", "A finished essay."), 380)[0:3],
    800, 310, "Nineteen stops", "Seven stops")
S["qe10-f12"]=lambda: f_realia(doc("Two conclusions", None,
    "<p><b>Conclusion 1.</b> <i>In conclusion, as I said at the beginning, private cars should be "
    "restricted in city centers, because of the many advantages which have been discussed above.</i></p>"
    "<p><b>Conclusion 2.</b> <i>The argument has narrowed in the course of making it. Restriction is "
    "easy to justify and easy to introduce; what decides whether it is defensible is the exemption "
    "scheme, which this essay has shown to be the real question and has not shown to be cheap to "
    "administer.</i></p>",
    "The second names something the essay did not establish. That is why it is the stronger one."),
    620)
S["qe10-f13"]=lambda: f_realia(form("Interruption planner",
    [("My high-level goal",B),("Two sub-goals",B),
     ("The review I will do at each paragraph end",B),("The review I will not do",B),
     ("What the last two minutes are for",B)],
    note="The fourth box is the one that saves ten minutes."), 580)
S["qe10-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("junseo",340,190,{"seated":True}),("grace",470,184,{}),
     ("ines",560,188,{"seated":True}),("oksana",660,186,{}),("tomas",740,190,{"seated":True}),
     ("nour",830,186,{}),("hana",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("essay",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"WHICH INTERRUPTION IS WORTH IT?",
      [("the reader","yes"),("an adjective","no")]),
    clockat=(650,40,22,10,0))
S["qe10-f15"]=lambda: f_chart([("while writing each sentence",4),("at the end of each paragraph",3),
    ("at the end of the essay",2),("never",1),("I run out of time",1)], w=580)
S["qe10-f16"]=lambda: f_realia(doc("On the desk, midnight",
    "A first paragraph crossed out twice",
    "<p><b>Minutes spent on paragraph one:</b> 14 of 40.</p>"
    "<p><b>The conclusion:</b> one line.</p>"
    "<p><b>Task Response:</b> 5.5. <b>Coherence:</b> 6.0.</p>"
    "<p><b>The paragraph itself:</b> the best one in the essay.</p>",
    "The best paragraph in the essay cost him the conclusion."), 620)

# ---------------- Unit 11 ----------------
S["qe11-f1"]=lambda: f_icons([("desk","two markers, two desks"),("review","two figures, two boxes"),
    ("scales","a scale of nine bands"),("star","one holistic figure"),
    ("tally","four analytic figures"),("pen","a severe marker"),
    ("pencil","a lenient marker"),("lecture","a training session"),
    ("folder","a standardization sample"),("calculator","a statistical adjustment"),
    ("book","a book dated 2002"),("magnifier","a comment, closely read"),
    ("proof","a tick"),("danger","a cross"),("note","a comment with no number"),
    ("essay","one script")],4)
S["qe11-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("chiamaka",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"ONE SCRIPT",[("reader 1","6.0"),("reader 2","6.5")]),
    clockat=(622,44,22,2,0))
S["qe11-f3"]=lambda: f_icons([("student","the writer"),("form","the task"),
    ("essay","the script"),("pen","the rater"),
    ("scales","the scale"),("magnifier","five things, and one of them is you")],3)
S["qe11-f4"]=lambda: f_realia(tbl("Team research &middot; two readers, one script", None,
    ["The script","Reader 1","Reader 2","The difference","What both comments agreed about"],
    br(6,5),
    note="What the two comments always agreed on: ______________________"), 700)
S["qe11-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "What is going on at the other end of your essay &middot; page 1 of 1",
    "<p><b>The source.</b> Sara Cushing Weigle, <i>Assessing Writing</i>, Cambridge University Press, "
    "<b>2002</b>. Printed here in our own words.</p>"
    "<p>An overview of how writing is assessed, written for teachers and test developers. Its "
    "organizing idea is that a score is produced by several things at once, only one of which is the "
    "candidate.</p>"
    + table_html(["The facet","What varies"],
      [["the <b>writer</b>","what the candidate can do on the day"],
       ["the <b>task</b>","how difficult this prompt is relative to others"],
       ["the <b>script</b>","what was actually produced"],
       ["the <b>rater</b>","severity, internal consistency, and how the criteria are weighted"],
       ["the <b>scale</b>","what the descriptors ask, and how they are interpreted in practice"]])
    + "<p>Raters differ in <b>severity</b>: some are systematically harsher, by amounts large enough "
    "to matter. They differ in <b>consistency</b>: a rater may be reliable with themselves and out of "
    "line with the group. And they differ in how they <b>weight criteria</b>. The field's response is "
    "procedural: <b>training and standardization</b>, <b>multiple ratings</b>, and <b>statistical "
    "adjustment</b> for a known rater's severity. These reduce variation; the book does not claim they "
    "remove it.</p>"
    "<p><b>Holistic</b> scoring gives one figure and is closer to how a real reader reacts; "
    "<b>analytic</b> scoring gives a figure per criterion, carries more information and is generally "
    "more reliable. This examination uses four criteria, which is analytic.</p>"
    "<p>Two consequences, and they are not the consolation they look like. <b>A single practice band "
    "is a weak estimate:</b> one reader, one script, one afternoon. <b>The comment is better evidence "
    "than the figure:</b> two readers who disagree about the band usually agree about what is wrong, "
    "and that is the thing to work on.</p>"
    "<p><b>An overview for teachers.</b> A synthesis of a field, not a study. The rater research was "
    "conducted on <b>particular tests, with particular raters, in particular settings</b>. It is of "
    "its <b>period</b>. And it cannot tell you anything about <b>your</b> examiner: it describes a "
    "distribution and you will meet one person. Nothing in it licenses the belief that a disappointing "
    "band was the marker's fault, or that a good one was luck.</p>",
    "Our summary of a published textbook. The advice about reading the comment is ours."), 640)
S["qe11-f6"]=lambda: f_realia(tbl("Reporting a judgment", None,
    ["The phrasing","How much it claims","An example"],
    [["<i>tends to</i>","a tendency, not a rule","Severity tends to vary between raters."],
     ["<i>on balance</i>","a weighing, openly","On balance the evidence favors restriction."],
     ["<i>would be regarded as</i>","attributed to others","This would be regarded as an overstatement."],
     ["<i>is generally considered</i>","a consensus, reported","Analytic scoring is generally considered more reliable."],
     ["<i>is widely held to be</i>",B,B],
     ["<i>there is reason to think</i>",B,B]],
    note="Four cells are empty on purpose. All five report a judgment rather than asserting a "
    "fact."), 700)
S["qe11-f7"]=lambda: f_matrix(["Reader 1","Reader 2","Difference","What both comments named"],
    [("A",["6.0","6.5","0.5","position unclear in paragraph 3"]),
     ("B",["5.5","5.5","0","no overview of the argument"]),
     ("C",["6.5","6.0","0.5","objection not answered"]),
     ("D",["6.0","6.0","0","repetition in paragraph 2"]),
     ("E",["5.5","6.0","0.5","position changed halfway"]),
     ("F",["7.0","6.5","0.5","conclusion did not match body"])], 740)
S["qe11-f8"]=lambda: f_icons([("review","a printed figure"),("note","a comment"),
    ("book","a reported consensus"),("quotemark","an attributed judgment"),
    ("danger","an ungrounded hedge"),("magnifier","which can you assert?")],3)
S["qe11-f9"]=lambda: f_realia(doc("Marked practice script &middot; Task 2",
    "Returned 3 October &middot; 268 words",
    "<p style='font-size:13px;color:#6b6861'>TR <b>6.0</b> &middot; CC <b>6.5</b> &middot; LR "
    "<b>6.5</b> &middot; GRA <b>6.0</b></p>"
    "<p style='background:#eef1f3;padding:8px;border-left:3px solid #2f5c6b'>"
    "<b>Comment.</b> Clear position, well organized. The objection you raise in paragraph three is "
    "never answered, and the conclusion claims more than the body shows. Fix those two and the first "
    "criterion moves.</p>",
    "<b>The comment is the part you can use.</b>"), 620)
S["qe11-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("chiamaka",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("essay",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"TWO READERS",[("figures","6.0 / 6.5"),("comment","the same")]),
    clockat=(630,42,22,4,30))
S["qe11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Reader 1", None,
      "<p><b>6.0</b></p><p><i>Position clear. The objection in paragraph three is not answered. The "
      "conclusion overstates.</i></p>", "One reader, one afternoon."), 380)[0:3],
    lambda w,h: f_realia(doc("Reader 2", None,
      "<p><b>6.5</b></p><p><i>Good control. Paragraph three raises an objection and leaves it. "
      "Conclusion claims more than the body shows.</i></p>", "Half a band apart."), 380)[0:3],
    800, 310, "6.0", "6.5")
S["qe11-f12"]=lambda: f_realia(doc("Two paragraphs on the same claim", None,
    "<p><b>Paragraph 1.</b> <i>It is a proven fact that examiners mark inconsistently and that bands "
    "are therefore unreliable. Research has conclusively demonstrated that a candidate's score depends "
    "more on the marker than on the essay.</i></p>"
    "<p><b>Paragraph 2.</b> <i>Rater severity tends to vary systematically, and two trained readers of "
    "one script frequently differ by half a band. It does not follow that a band is arbitrary: the "
    "research describes a distribution rather than a lottery&hellip; What a candidate can reasonably "
    "take from it is narrower.</i></p>",
    "The second paragraph refuses the comfortable conclusion, which is why it is the believable "
    "one."), 620)
S["qe11-f13"]=lambda: f_realia(form("Judgment planner",
    [("What I will assert",B),("What I will report as a judgment",B),
     ("What I will hedge, and why",B),("The comfortable conclusion I will refuse",B),
     ("My position",B)],
    note="The fourth box is the one that separates a band 7 from a band 6."), 580)
S["qe11-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("chiamaka",340,190,{"seated":True}),("lars",470,184,{}),
     ("grace",560,188,{"seated":True}),("samira",660,186,{}),("junseo",740,190,{"seated":True}),
     ("mei",830,186,{}),("yusuf",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("essay",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"TWO READERS, ONE SCRIPT",
      [("6.0","reader 1"),("6.5","reader 2"),("para 3","both")]),
    clockat=(650,40,22,5,0))
S["qe11-f15"]=lambda: f_chart([("the number",6),("the comment",2),
    ("the corrections in the margin",1),("both at once",2),("I do not look",0)], w=580)
S["qe11-f16"]=lambda: f_realia(doc("On the desk, evening",
    "One script, two hands, two figures",
    "<p><b>Reader 1:</b> 6.0. <b>Reader 2:</b> 6.5.</p>"
    "<p><b>Both comments:</b> the objection raised in paragraph three is never answered.</p>"
    "<p><b>What she needs:</b> 6.5. <b>What she has been given:</b> both.</p>"
    "<p><b>Beside it:</b> a book dated 2002 and six scripts marked twice.</p>",
    "Two figures, one comment."), 620)

# ---------------- Unit 12 ----------------
S["qe12-f1"]=lambda: f_icons([("form","a test paper, with an arrow out"),
    ("lecture","a classroom, with an arrow back"),("balance","a construct"),
    ("scales","a circle too small"),("danger","a circle with something irrelevant in it"),
    ("review","a scale"),("chain","a consequence"),
    ("signpost","an unintended side effect"),("book","a journal page dated 1996"),
    ("magnifier","one paragraph, closely read"),("note","a position sentence"),
    ("bridge","a warrant"),("brokenwindow","a gap sentence"),
    ("notebook","a two-column plan"),("proof","a tick"),("pen","a cross")],4)
S["qe12-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("samira",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"TEST &rarr; CLASS &rarr;",[("and back","again")]),
    clockat=(622,44,22,2,30))
S["qe12-f3"]=lambda: f_icons([("balance","a construct circle"),("scales","a test circle too small"),
    ("danger","an irrelevant patch"),("lecture","a classroom narrowing"),
    ("form","an authentic task"),("magnifier","too little, or too much of something else")],3)
S["qe12-f4"]=lambda: f_realia(tbl("Team research &middot; what does the test make you do?", None,
    ["What we do to prepare","Is it learning English?","Is it learning the test?","Would it help if the test did not exist?"],
    br(8,4),
    note="The activity we would stop tomorrow: ______________________"), 700)
S["qe12-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "What a test does to the teaching that prepares for it &middot; page 1 of 1",
    "<p><b>The source.</b> Samuel Messick, <i>Validity and washback in language testing</i>, Language "
    "Testing, <b>1996</b>. Printed here in our own words.</p>"
    "<p><b>Washback</b> is the effect a test has on teaching and learning. The paper's contribution is "
    "an argument about where it belongs: washback is <b>not a separate property of a test</b> but part "
    "of <b>validity</b> &mdash; of what the author calls the consequential aspect of construct "
    "validity.</p>"
    + table_html(["The failure","What it is"],
      [["<b>construct under-representation</b>","the test is too narrow: it leaves out parts of the "
        "ability it claims to measure"],
       ["<b>construct-irrelevant variance</b>","the test is contaminated: something other than the "
        "ability affects the scores"]])
    + "<p>If a test under-represents its construct, preparation concentrates on the narrow part that "
    "is tested. If it contains irrelevant variance, preparation concentrates on the irrelevant thing, "
    "because the irrelevant thing moves scores. <b>In both cases the bad teaching is a rational "
    "response to the test.</b> So <b>exhortation does not work</b>: what produces good washback is a "
    "test whose demands and the ability's demands coincide.</p>"
    "<p><b>A preparation book is washback.</b> This one exists because the examination exists, and if "
    "the examination rewarded something else these would be different units. The task asks you to take "
    "a position and defend it in forty minutes: no research, no sources, no revision, no reader you "
    "know. On the paper's own terms that is <b>construct under-representation</b>, and the honest "
    "thing to say is that this book teaches you to do well at the slice. What keeps it defensible is "
    "that the slice is not fake &mdash; stating a position, warranting it and conceding the strongest "
    "objection are real skills. But a book teaching four memorized paragraph shapes would also raise "
    "your band, and it would be <b>pure irrelevant variance</b>.</p>"
    "<p><b>A conceptual paper.</b> A theoretical argument, not a study: <b>no data</b>, washback "
    "measured nowhere, no claim tested empirically. Washback has been <b>argued about ever since</b>: "
    "how far it extends, whether the test or its use produces it, and whether a teaching change can be "
    "shown to have been caused by a test at all. The author's wider validity framework has also been "
    "debated and reorganized by others. And it is a paper for test developers: it gives candidates no "
    "advice and names no bands.</p>",
    "Our summary of a published paper. The application to this book is ours, and we think it is the "
    "honest one."), 660)
S["qe12-f6"]=lambda: f_realia(tbl("The whole toolkit", None,
    ["Unit","What it gave you","One phrase"],
    [["1","a position, not a topic","<i>I would argue that</i>"],
     ["2","claim, grounds, warrant","<i>since</i>"],
     ["3","what a reader infers","<i>admittedly</i>"],
     ["4","levels in a paragraph","<i>the reason is that</i>"],
     ["5","the questions an argument survives","<i>does it follow that</i>"],
     ["6","what would change your mind","<i>it might be objected that</i>"],
     ["7","register","<i>the reduction in</i>"],
     ["8","three moves","<i>what is less often noticed is</i>"],
     ["9","two problem spaces","<i>my reader will object that</i>"],
     ["10",B,B],["11",B,B]], numcols=(0,),
    note="Four cells are empty on purpose. Eleven units, and you can say what each one was for."),
    700)
S["qe12-f7"]=lambda: f_matrix(["Teaches English?","Raises the band?","Which failure"],
    [("learning to state a position",["yes","yes","&mdash;"]),
     ("learning to warrant a claim",["yes","yes","&mdash;"]),
     ("memorizing four paragraph templates",["no","yes","irrelevant variance"]),
     ("memorizing a list of linking words",["partly","yes","irrelevant variance"]),
     ("learning to concede an objection",["yes","yes","&mdash;"])], 700)
S["qe12-f8"]=lambda: f_icons([("note","a premise"),("chain","a consequence that follows"),
    ("danger","one that does not"),("balance","the condition under which it would"),
    ("scales","a narrowed consequence"),("magnifier","which step is legitimate?")],3)
S["qe12-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 2",
    "A statement about examinations",
    "<p><b>Public examinations should be judged partly by the effect they have on the teaching that "
    "prepares for them.</b></p>"
    "<p><b>To what extent do you agree or disagree? What would follow for how such examinations are "
    "designed?</b></p>",
    "<b>You are inside the thing you are writing about.</b>"), 620)
S["qe12-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("samira",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("notebook",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"FIVE CHECKS",[("1","position"),("2","all parts"),("5","the step")]),
    clockat=(630,42,22,3,0))
S["qe12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Week one", None,
      "<p><i>The chart gives information about four categories. There are some differences.</i></p>"
      "<p>Position: <b>none</b>. Warrant: <b>none</b>. Objection: <b>none</b>.</p>", "TR 5.5"),
      380)[0:3],
    lambda w,h: f_realia(doc("Week nine", None,
      "<p><i>&hellip; What is less often noticed is &hellip; The principle here is general &hellip; "
      "It might be objected that &hellip;</i></p>"
      "<p>Position: <b>yes</b>. Warrant: <b>2</b>. Objection: <b>answered</b>. Falsifier: "
      "<b>yes</b>.</p>", "TR 6.5"), 380)[0:3],
    800, 310, "Week one", "Week nine")
S["qe12-f12"]=lambda: f_realia(doc("One essay &middot; 294 words",
    "Position underlined. Warrant, gap sentence, concession and falsifier boxed.",
    "<p><u><b>Public examinations should be judged partly by what they do to the teaching that "
    "prepares for them.</b></u> The argument for judging a test only by whether it measures accurately "
    "is that a measuring instrument is not responsible for what people do with it; "
    "<span style='background:#eef1f3'>what is less often noticed is that preparation behavior is not a "
    "separate matter from accuracy, because a test that can be prepared for by memorizing shapes is, "
    "by that very fact, measuring something other than the ability it names.</span> "
    "<span style='background:#f3ece0'>The principle here is general: an instrument whose readings can "
    "be moved without moving the thing measured is measuring something else.</span> It might be "
    "objected that no test can be immune to preparation, which is true and does not help the opposite "
    "side, since the question is one of degree. "
    "<span style='background:#eef3ec'>I would abandon this position if it could be shown that the most "
    "easily prepared-for tests predicted later performance as well as the least.</span></p>",
    "A gap sentence, a warrant, a concession and a falsifying condition, in 294 words."), 660)
S["qe12-f13"]=lambda: f_realia(tbl("The final planner", None,
    ["What I believe","What my reader will not accept"],
    br(4,2),
    note="<b>The five final checks.</b> Position &middot; all parts &middot; warrants &middot; the "
    "objection &middot; the step."), 600)
S["qe12-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("samira",340,190,{"seated":True}),("grace",470,184,{}),
     ("lars",560,188,{"seated":True}),("marek",660,186,{}),("ines",740,190,{"seated":True}),
     ("tomas",830,186,{}),("chiamaka",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("essay",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"WHAT DOES THE TEST DO TO US?",
      [("test","&rarr; class"),("class","&rarr; test")]),
    clockat=(650,40,22,6,0))
S["qe12-f15"]=lambda: f_chart([("a position, not a topic",2),("claim grounds warrant",3),
    ("what would change your mind",3),("three moves",2),("two problem spaces",1)], w=580)
S["qe12-f16"]=lambda: f_realia(doc("On the desk, late",
    "Eleven practice essays, with their figures in the margin",
    "<p><b>The eleven, in order:</b> 5.5 &middot; 5.5 &middot; 6.0 &middot; 5.5 &middot; 6.0 "
    "&middot; <b>6.5</b> &middot; 6.0 &middot; <b>6.5</b> &middot; <b>6.5</b> &middot; 6.0 &middot; "
    "<b>6.5</b></p>"
    "<p><b>She needs:</b> 7.0. <b>She has reached it:</b> never.</p>"
    "<p><b>The average of the eleven:</b> 6.09.</p>"
    "<p><b>Unit 11 said:</b> a single band is a weak estimate. <b>Unit 5 said:</b> an average conceals "
    "a range.</p>",
    "Eleven essays, every one better than the templates would have made it, and none of them a 7.0. "
    "There is no answer printed at the back of this book."), 660)
