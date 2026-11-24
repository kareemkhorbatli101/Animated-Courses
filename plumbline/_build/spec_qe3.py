# -*- coding: utf-8 -*-
"""Plumbline Book 5 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 7 ----------------
S["qe07-f1"]=lambda: f_icons([("messages","two speakers in conversation"),
    ("library","a printed academic page"),("envelope","a personal letter"),
    ("radio","a broadcast"),("scales","involved at one end, informational at the other"),
    ("note","a noun built from a verb"),("proof","a passive sentence"),
    ("essay","a long noun phrase, bracketed"),("magnifier","a pronoun, circled"),
    ("danger","a contraction, crossed out"),("racking","a corpus of texts"),
    ("data","a factor diagram"),("book","a book dated 1988"),
    ("spreadsheet","a frequency table"),("pen","a tick"),("review","a cross")],4)
S["qe07-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("mei",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"ONE LINE",[("left","conversation"),("right","academic prose")]),
    clockat=(622,44,22,12,0))
S["qe07-f3"]=lambda: f_icons([("magnifier","a pronoun and a contraction"),
    ("note","a present-tense verb"),("essay","a long noun phrase"),
    ("proof","a nominalization"),("thread","a prepositional phrase"),
    ("scales","one end, or the other")],3)
S["qe07-f4"]=lambda: f_realia(tbl("Team research &middot; place the text", None,
    ["The text","Pronouns per 100 words","Nouns per 100 words","Contractions","Where on the line"],
    br(6,5),
    note="The text that surprised us: ______________________"), 700)
S["qe07-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "What written English does that spoken English does not &middot; page 1 of 1",
    "<p><b>The source.</b> Douglas Biber, <i>Variation Across Speech and Writing</i>, Cambridge "
    "University Press, <b>1988</b>. Printed here in our own words.</p>"
    "<p>The study counted <b>sixty-seven</b> grammatical and lexical features across a large number "
    "of texts from two corpora, one of written British English and one of spoken English, both "
    "collected in the decades before publication. It then looked for features that <b>occur "
    "together</b>: where a group reliably turns up in the same texts, that group is a <b>dimension</b> "
    "along which texts vary.</p>"
    + table_html(["Features clustering at one end","Features clustering at the other"],
      [["personal pronouns, contractions, present tense, questions, hedges, general verbs",
        "nouns, long noun phrases, prepositional phrases, attributive adjectives, longer words, more "
        "varied vocabulary"]])
    + "<p>The author's name for it is <b>involved versus informational production</b>, and the "
    "interpretation offered is about <b>time</b>: a speaker composing in real time reaches for "
    "pronouns and general verbs, while a writer with time to revise packs information into noun "
    "phrases.</p>"
    "<p>The finding that matters most is that speech and writing are <b>not two categories</b>. Genres "
    "spread along the dimension, and some <b>written</b> genres sit closer to conversation than to "
    "academic prose &mdash; personal letters among them &mdash; while prepared speeches sit well "
    "toward the informational end.</p>"
    "<p>For a writer: <i>be more formal</i> names nothing you can do. <b>Fewer pronouns, fewer general "
    "verbs, more noun phrases</b> names something you can do in a sentence. But the informational end "
    "is not simply better: a nominalized sentence hides who did what, and ten nominalizations in a "
    "paragraph will cost you clarity, which is in two of the four criteria.</p>"
    "<p><b>A count, not a rule.</b> It reports how often features occur in texts somebody collected. "
    "The dimensions are the output of a <b>statistical procedure</b> and their <b>names are the "
    "author's interpretation</b>. The corpora are of their <b>period</b> and of <b>two national "
    "varieties</b>, collected before most of the writing anybody now does existed. And it studies "
    "published and recorded English by first-language users: nothing in it is about learner writing or "
    "about bands.</p>",
    "Our summary of a published study. The advice about nominalization is ours."), 640)
S["qe07-f6"]=lambda: f_realia(tbl("Nominalizing", None,
    ["The verb","The noun","The sentence, both ways"],
    [["<b>decide</b>","decision","They decided quickly. &rarr; The decision was quick."],
     ["<b>reduce</b>","reduction","Emissions fell. &rarr; The reduction in emissions was large."],
     ["<b>assume</b>","assumption","They assumed demand was fixed. &rarr; The assumption of fixed demand."],
     ["<b>apply</b>","application","They applied the rule. &rarr; The application of the rule."],
     ["<b>fail</b>",B,B],
     ["<b>increase</b>",B,B]],
    note="Four cells are empty on purpose. Every one of these can hide the person who acted."), 700)
S["qe07-f7"]=lambda: f_matrix(["Where it sits"],
    [("conversation",["far left"]),("a personal letter",["left of center"]),
     ("a news report",["just right of center"]),("a prepared speech",["right of center"]),
     ("a textbook",["right"]),("academic prose",["far right"])], 520)
S["qe07-f8"]=lambda: f_icons([("magnifier","a pronoun and a contraction"),("essay","a long noun phrase"),
    ("note","a general verb"),("thread","a prepositional chain"),
    ("speechbubble","a question"),("scales","which end of the line?")],3)
S["qe07-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 2",
    "Read the register of the prompt",
    "<p><b>The increasing concentration of populations in a small number of very large cities is a "
    "development to be resisted rather than accommodated.</b></p>"
    "<p><b>To what extent do you agree or disagree?</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Nouns: 11. Pronouns: 0. Contractions: 0.</p>",
    "<b>The prompt is written at one end of the line; your answer should be too.</b>"), 620)
S["qe07-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("mei",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("essay",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"SIX CIRCLED",[("doing work","2"),("hiding people","4")]),
    clockat=(630,42,22,2,30))
S["qe07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Involved", None,
      "<p><i>I think we've got to do something about traffic. You can see it when you walk down any "
      "main road.</i></p><p>Pronouns: <b>5</b>. Nominalizations: <b>0</b>.</p>",
      "Clear, and at the wrong end of the line."), 380)[0:3],
    lambda w,h: f_realia(doc("Informational", None,
      "<p><i>The case for restricting traffic rests on three measurable costs: air quality, noise and "
      "the suppression of cycling among children.</i></p><p>Pronouns: <b>0</b>. Nominalizations: "
      "<b>2</b>.</p>",
      "Dense, and somebody still acts in it."), 380)[0:3],
    800, 310, "Involved", "Informational")
S["qe07-f12"]=lambda: f_realia(doc("Two paragraphs", None,
    "<p><b>Paragraph 1.</b> <i>I think we've got to do something about traffic. You can see it when "
    "you walk down any main road &mdash; it's noisy, the air's bad, and you can't let your kids "
    "cycle.</i></p>"
    "<p><b>Paragraph 2.</b> <i>The case for restricting traffic rests on three measurable costs: air "
    "quality, noise and the suppression of cycling among children. The third is the least discussed "
    "and the most consequential, since a generation that does not cycle to school is unlikely to cycle "
    "later.</i></p>",
    "Nine pronouns against one. The second paragraph says more in fewer words."), 620)
S["qe07-f13"]=lambda: f_realia(form("Register planner",
    [("My position",B),("Three nominalizations I will use",B),
     ("Two long noun phrases",B),("The pronouns I will keep",B),("The phrases I will cut",B)],
    note="Ask of every nominalization: who did what?"), 580)
S["qe07-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("mei",340,190,{"seated":True}),("lars",470,184,{}),
     ("yusuf",560,188,{"seated":True}),("ines",660,186,{}),("oksana",740,190,{"seated":True}),
     ("hana",830,186,{}),("marek",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("essay",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"ONE LINE, NOT TWO BOXES",
      [("conversation","left"),("letters","left of center"),("prose","far right")]),
    clockat=(650,40,22,7,0))
S["qe07-f15"]=lambda: f_chart([("long words",3),("long sentences",2),("no pronouns",2),
    ("the passive",2),("noun phrases",2)], w=560)
S["qe07-f16"]=lambda: f_realia(doc("On the desk, evening",
    "Six nominalizations circled in one paragraph",
    "<p><b>The sentence:</b> <i>The implementation of the restriction resulted in the reduction of "
    "the utilization of private vehicles.</i></p>"
    "<p><b>Who restricted what?</b> Not in the sentence.</p>"
    "<p><b>Lexical Resource:</b> rose from 6.0 to 7.0. <b>Coherence:</b> fell from 6.5 to 5.5.</p>"
    "<p><b>Priya's version:</b> <i>Restricting cars reduced driving.</i> Seven words.</p>",
    "Two of the six were doing work and four were hiding people."), 620)

# ---------------- Unit 8 ----------------
S["qe08-f1"]=lambda: f_icons([("map","a wide territory"),("brokenwindow","a gap in a wall"),
    ("walk","a figure stepping into it"),("library","a research article's first page"),
    ("notebook","three numbered moves"),("quotemark","a citation"),
    ("signpost","a sentence beginning however"),("magnifier","little attention has been paid"),
    ("jug","a funnel, wide to narrow"),("family","a community of readers"),
    ("book","a book dated 1990"),("essay","one paragraph, closely read"),
    ("note","a thesis statement underlined"),("danger","a crossed-out opening"),
    ("proof","a tick"),("review","a cross")],4)
S["qe08-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("yusuf",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"WIDE, NARROW, IN",[("1","territory"),("2","niche"),("3","occupy")]),
    clockat=(622,44,22,12,30))
S["qe08-f3"]=lambda: f_icons([("map","a wide territory"),("quotemark","a citation"),
    ("brokenwindow","a gap in a wall"),("signpost","however"),
    ("walk","stepping into the gap"),("jug","wide, then narrow, then in")],3)
S["qe08-f4"]=lambda: f_realia(tbl("Team research &middot; find the gap", None,
    ["The article","The territory sentence","The gap sentence","The occupying sentence"],
    br(5,4),
    note="The article with no gap sentence at all: ______________________"), 700)
S["qe08-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "What the first paragraph of an academic article is doing &middot; page 1 of 1",
    "<p><b>The source.</b> John M. Swales, <i>Genre Analysis: English in Academic and Research "
    "Settings</i>, Cambridge University Press, <b>1990</b>. Printed here in our own words.</p>"
    "<p>The book analyzes academic writing as a set of <b>genres</b>: kinds of text whose shape is "
    "produced by what a community of readers and writers uses them for. Its best-known result is a "
    "model of the research article introduction, built by examining how published introductions are "
    "actually organized.</p>"
    + table_html(["The move","What it does","How it is worded"],
      [["<b>1 &middot; establishing a territory</b>","claims the area matters; reviews what is known",
        "<i>X has attracted considerable attention</i>"],
       ["<b>2 &middot; establishing a niche</b>","identifies a gap, contradiction or neglected question",
        "<i>However, little attention has been paid to</i>"],
       ["<b>3 &middot; occupying the niche</b>","announces what this article will do",
        "<i>This paper reports</i>"]])
    + "<p>The shape is a <b>funnel</b>: wide, then narrow, then a step through. Move 2 is what makes "
    "the article necessary. Without it, an introduction announces a subject; with it, a reason.</p>"
    "<p>For a Task 2 essay the framework <b>does not apply</b>, and it matters to say so. You are not "
    "reporting research, you have no literature to review and nothing to cite; the author would say so "
    "first. What transfers is <b>one move</b>: an introduction that goes <i>the subject matters</i> "
    "&rarr; <i>this is what the usual argument gets wrong</i> &rarr; <i>my position</i>. The wording "
    "changes &mdash; <i>little attention has been paid</i> is wrong for an essay, and <i>what is less "
    "often noticed is</i> is exactly right.</p>"
    "<p><b>A description of a genre you are not writing.</b> The model was built by analyzing "
    "published research articles in particular disciplines at a particular time, and it is "
    "<b>descriptive</b>. The author <b>revised it himself</b> in a later book, reworking the second "
    "move substantially, so the 1990 version is a stage rather than a settled result. Conventions "
    "differ by discipline and by language; introductions in some fields establish no gap at all. And "
    "the concept of a <b>discourse community</b> has been argued about ever since.</p>",
    "Our summary of a published book. The claim that one move transfers is ours, not the book's."),
    640)
S["qe08-f6"]=lambda: f_realia(tbl("Establishing a gap", None,
    ["The wording","What gap it names","An example"],
    [["<i>what is less often noticed is</i>","something left out","What is less often noticed is who pays."],
     ["<i>the usual argument assumes</i>","an unexamined premise","The usual argument assumes demand is fixed."],
     ["<i>this is true but incomplete</i>","a partial account","This is true but incomplete: it omits the rural case."],
     ["<i>both sides agree on something doubtful</i>","a shared mistake","Both sides assume the cost is one-off."],
     ["<i>the debate has been framed as</i>",B,B],
     ["<i>the real question is not X but Y</i>",B,B]],
    note="Four cells are empty on purpose. One of the six is the most aggressive."), 700)
S["qe08-f7"]=lambda: f_matrix(["Move 1","Move 2","Move 3"],
    [("Introduction A",["yes","no","yes"]),("Introduction B",["yes","no","yes"]),
     ("Introduction C",["yes","yes","yes"]),("Introduction D",["yes","no","no"]),
     ("Introduction E",["yes","no","yes"])], 520)
S["qe08-f8"]=lambda: f_icons([("map","a territory sentence"),("signpost","however"),
    ("note","a position sentence"),("danger","announcing a discussion"),
    ("quotemark","a citation"),("magnifier","which move is this?")],3)
S["qe08-f9"]=lambda: f_realia(doc("Practice task &middot; Writing Task 2",
    "A prompt that frames the issue as a choice",
    "<p><b>Governments must choose between funding healthcare and funding education, and healthcare "
    "should come first.</b></p>"
    "<p><b>To what extent do you agree or disagree?</b></p>",
    "<b>The prompt's framing is one of the things you may attack.</b> It asserts a choice; the gap "
    "may be in the word <i>choose</i>."), 620)
S["qe08-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("yusuf",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("essay",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"ONE AND THREE",[("move 1","&#10003;"),("move 2","&mdash;"),
      ("move 3","&#10003;")]),
    clockat=(630,42,22,3,0))
S["qe08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Two sentences", None,
      "<p><i>Traffic congestion is a serious problem in modern cities and many solutions have been "
      "proposed. This essay will argue that private cars should be restricted.</i></p>"
      "<p>Moves: <b>1, 3</b>.</p>", "A label on a box."), 380)[0:3],
    lambda w,h: f_realia(doc("Three sentences", None,
      "<p><i>&hellip; What is less often noticed is that the argument is almost always about whether "
      "to restrict cars and almost never about which households cannot avoid using them&hellip;</i></p>"
      "<p>Moves: <b>1, 2, 3</b>.</p>", "A reason to keep reading."), 380)[0:3],
    800, 310, "Moves 1 and 3", "Moves 1, 2 and 3")
S["qe08-f12"]=lambda: f_realia(doc("Two introductions, moves numbered", None,
    "<p><b>Introduction 1</b> <i>(1, 3)</i>. <i>Traffic congestion is a serious problem in modern "
    "cities and many solutions have been proposed. This essay will argue that private cars should be "
    "restricted in city centers.</i></p>"
    "<p><b>Introduction 2</b> <i>(1, 2, 3)</i>. <i>&hellip; What is less often noticed is that the "
    "argument is almost always about whether to restrict cars and almost never about which households "
    "cannot avoid using them. This essay argues for restriction in large city centers, and argues "
    "that the exemptions are the part of the policy that decides whether it is fair.</i></p>",
    "One sentence in the middle, and the rest of the essay has something to do."), 620)
S["qe08-f13"]=lambda: f_realia(form("Introduction planner",
    [("Move 1 &middot; the territory",B),("Move 2 &middot; the gap",B),
     ("Move 3 &middot; the position",B),("The paragraph that answers move 2",B)],
    note="If no paragraph answers move 2, the gap sentence was decoration."), 580)
S["qe08-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("yusuf",340,190,{"seated":True}),("grace",470,184,{}),
     ("junseo",560,188,{"seated":True}),("mei",660,186,{}),("nour",740,190,{"seated":True}),
     ("chiamaka",830,186,{}),("tomas",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("essay",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"WHAT IS MISSING?",
      [("1","territory"),("2","the neck"),("3","occupy")]),
    clockat=(650,40,22,8,0))
S["qe08-f15"]=lambda: f_chart([("says the subject is important",5),("defines a term",2),
    ("quotes a statistic",2),("states my position",2),("asks a question",0)], w=580)
S["qe08-f16"]=lambda: f_realia(doc("On the desk, late",
    "A two-sentence introduction and a funnel",
    "<p><b>In the margin:</b> 1 and 3.</p>"
    "<p><b>The sentence he said aloud, four seconds after being asked:</b> <i>everybody argues about "
    "whether to restrict cars and nobody argues about who gets exempted.</i></p>"
    "<p><b>Coherence:</b> 6.5. <b>Task Response:</b> 6.0.</p>"
    "<p><b>Where that sentence appears in the essay:</b> nowhere.</p>",
    "He had it. It was not on the paper."), 620)

# ---------------- Unit 9 ----------------
S["qe09-f1"]=lambda: f_icons([("archive","a memory store"),("fall","an arrow from memory to a page"),
    ("balance","two overlapping circles"),("thread","an arrow between them"),
    ("notebook","a plan in note form"),("essay","a plan in full sentences"),
    ("danger","a crossed-out sentence"),("eye","a reader"),
    ("note","a think-aloud transcript"),("student","a child writing"),
    ("book","a book dated 1987"),("magnifier","a protocol, closely read"),
    ("proof","a tick"),("review","a cross"),("speechbubble","a question over a page"),
    ("pen","a pencil hovering")],4)
S["qe09-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("oksana",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"ONE SPACE, OR TWO",[("telling","1 arrow"),("transforming","2 circles")]),
    clockat=(622,44,22,1,0))
S["qe09-f3"]=lambda: f_icons([("archive","a cue triggering a memory"),("fall","memory to page"),
    ("eye","a reader's objection"),("balance","the content space"),
    ("thread","the rhetorical space"),("magnifier","one space, or two?")],3)
S["qe09-f4"]=lambda: f_realia(tbl("Team research &middot; plans and essays", None,
    ["The plan","In the plan, not the essay","In the essay, not the plan"],
    br(5,3),
    note="The plan that did the most work: ______________________"), 640)
S["qe09-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Writing class",
    "Two different things people do when they write &middot; page 1 of 1",
    "<p><b>The source.</b> Carl Bereiter and Marlene Scardamalia, <i>The Psychology of Written "
    "Composition</i>, Lawrence Erlbaum, <b>1987</b>. Printed here in our own words.</p>"
    "<p>The first model is <b>knowledge-telling</b>. The writer takes the topic and the kind of text "
    "as <b>cues</b>, retrieves something from memory, writes it down, and uses what has just been "
    "written as the cue for the next item. It is efficient and it has a natural stopping point: you "
    "stop when nothing more comes. The text is organized the way the writer's memory was.</p>"
    "<p>The second is <b>knowledge-transforming</b>, in which the writer works in two problem spaces "
    "at once.</p>"
    + table_html(["The space","The problems in it"],
      [["the <b>content</b> space","what do I actually believe about this, and is it consistent?"],
       ["the <b>rhetorical</b> space","what will this reader not accept, and what must the text do?"]])
    + "<p>The crucial claim is that problems are <b>translated between</b> the spaces: a rhetorical "
    "problem becomes a content problem, and the answer changes the text and sometimes the opinion. On "
    "this model, writing is not a way of reporting thought; it is a way of having it.</p>"
    "<p>For a timed essay the consequence is about the six minutes beforehand. A plan listing your "
    "four paragraphs is a knowledge-telling plan: the essay in note form, and it has done no work. A "
    "plan containing <b>the objection you cannot answer</b> has done work.</p>"
    "<p><b>Models, and think-aloud evidence.</b> The two accounts are <b>models, not observed types of "
    "person</b>; real writers do both in one session, and the book says so. <b>Both are competent "
    "processes</b>: the authors are explicit that knowledge-telling is not a deficiency but an "
    "efficient strategy for many tasks. The evidence is largely <b>think-aloud protocols</b> and "
    "experiments, mostly with <b>children and school students</b> in one country, and asking somebody "
    "to narrate their thinking <b>changes the task</b>. It concerns first-language writers in school "
    "settings with no clock running, and it assigns nobody a band.</p>",
    "Our summary of a published book. The advice about what belongs in a six-minute plan is ours."),
    640)
S["qe09-f6"]=lambda: f_realia(tbl("Planning notes", None,
    ["The note","Which space","An example"],
    [["<i>my position</i>","content","restriction, with exemptions"],
     ["<i>my reader will object that</i>","rhetorical","the cost falls on the poorest"],
     ["<i>do I actually believe</i>","content","yes, if the rebate exists"],
     ["<i>the paragraph that must do the work</i>","rhetorical","paragraph three"],
     ["<i>my strongest evidence</i>",B,B],
     ["<i>what I will concede</i>",B,B]],
    note="Four cells are empty on purpose. Two of the six could belong in either space."), 700)
S["qe09-f7"]=lambda: f_matrix(["Lines","Items not in the essay","Task Response"],
    [("Plan A",["4","0","5.5"]),("Plan B",["4","0","6.0"]),("Plan C",["6","2","6.5"]),
     ("Plan D",["5","1","6.5"]),("Plan E",["3","0","5.5"])], 560)
S["qe09-f8"]=lambda: f_icons([("notebook","four lines, four paragraphs"),
    ("speechbubble","a plan with a question in it"),("fall","memory to page"),
    ("eye","an objection in a margin"),("balance","a narrowed claim"),
    ("magnifier","which model is this?")],3)
S["qe09-f9"]=lambda: f_realia(form("Practice task &middot; planning box",
    [("What I believe",B),("What my reader will not accept",B),
     ("What I believe",B),("What my reader will not accept",B)],
    note="<b>Six minutes, two columns.</b> Prompt: <i>Public money should not be spent on space "
    "exploration while problems remain unsolved on Earth. To what extent do you agree?</i>"), 600)
S["qe09-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("oksana",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("notebook",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"FOUR LINES",[("plan","4"),("paragraphs","4"),("work done","0")]),
    clockat=(630,42,22,3,30))
S["qe09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Plan A &middot; four lines", None,
      "<p>1 Introduction. 2 Air quality. 3 Congestion. 4 Conclusion.</p>"
      "<p>Items in the plan not in the essay: <b>0</b>.</p>", "A table of contents."), 380)[0:3],
    lambda w,h: f_realia(doc("Plan B &middot; six lines", None,
      "<p>&hellip; 5 Para that must work: exemptions. 6 Cannot answer: can exemptions be administered "
      "cheaply? &rarr; concede in one sentence.</p>"
      "<p>Items in the plan not in the essay: <b>2</b>.</p>", "A problem the essay had to solve."),
      380)[0:3],
    800, 310, "Four lines", "Six lines")
S["qe09-f12"]=lambda: f_realia(doc("Two plans", None,
    "<p><b>Plan A.</b> <i>1 Introduction: cars are a problem, I agree with restriction. 2 Paragraph: "
    "air quality. 3 Paragraph: congestion. 4 Conclusion: restate.</i></p>"
    "<p><b>Plan B.</b> <i>1 Position: restriction in large centers, with exemptions. 2 Reader will "
    "object: cost falls on those who cannot avoid driving. 3 Do I believe that? Yes &mdash; so "
    "exemptions are the policy, not a softening of it. 4 Evidence: measured pollutant falls most in "
    "restricted streets. 5 Para that must work: exemptions. 6 Cannot answer: can exemptions be "
    "administered cheaply?</i></p>",
    "Line 3 of Plan B changed the position. Line 6 gave the essay a job."), 640)
S["qe09-f13"]=lambda: f_realia(tbl("Two-column planner", None,
    ["What I believe","What my reader will not accept"],
    br(3,2),
    note="Draw one arrow between the columns and write what it changed."), 580)
S["qe09-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("oksana",340,190,{"seated":True}),("lars",470,184,{}),
     ("samira",560,188,{"seated":True}),("hana",660,186,{}),("yusuf",740,190,{"seated":True}),
     ("marek",830,186,{}),("mei",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("notebook",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"ONE SPACE, OR TWO?",
      [("content","what I believe"),("rhetoric","what they will not accept")]),
    clockat=(650,40,22,9,0))
S["qe09-f15"]=lambda: f_chart([("my paragraph order",5),("my examples",2),("my position",2),
    ("an objection",1),("I do not plan",1)], w=560)
S["qe09-f16"]=lambda: f_realia(doc("On the desk, late at night",
    "A four-line plan and the essay it produced",
    "<p><b>Arrows between them:</b> four, one to one.</p>"
    "<p><b>Items in the plan that are not in the essay:</b> none.</p>"
    "<p><b>Planning time:</b> six minutes. <b>Coherence:</b> 7.0. <b>Task Response:</b> 6.0.</p>"
    "<p><b>Beside it:</b> a six-line plan with two questions circled.</p>",
    "Six minutes of planning, and the plan contained nothing the essay did not."), 620)
