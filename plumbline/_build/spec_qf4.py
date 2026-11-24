# -*- coding: utf-8 -*-
"""Plumbline Book 6 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 10 ----------------
S["qf10-f1"]=lambda: f_icons([("thread","two systems and a third between them"),("form","a rule"),
    ("magnifier","one error, four times"),("data","a pattern emerging"),
    ("signpost","a transfer arrow"),("lecture","a classroom drill"),
    ("danger","an overgeneralized ending"),("notebook","a strategy"),
    ("square","a fossil in rock"),("barrier","an item resisting correction"),
    ("library","a journal page dated 1972"),("note","a transcript"),
    ("proof","a tick"),("pen","a cross"),("scissors","the word mistake, crossed out"),
    ("review","the word system")],4)
S["qf10-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("yusuf",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"FOUR ERRORS, ONE RULE",[("errors","4"),("rule","1")]),
    clockat=(622,44,22,1,30))
S["qf10-f3"]=lambda: f_icons([("signpost","language transfer"),("lecture","transfer of training"),
    ("notebook","a learning strategy"),("speechbubble","a communication strategy"),
    ("danger","overgeneralization"),("magnifier","five sources, one system")],3)
S["qf10-f4"]=lambda: f_realia(tbl("Team research &middot; find the rule", None,
    ["The error","Times","The rule behind it","Which process","The English rule"],
    br(6,5),
    note="The rule we could not explain: ______________________"), 700)
S["qf10-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Speaking class",
    "What your remaining errors are evidence of &middot; page 1 of 1",
    "<p><b>The source.</b> Larry Selinker, <i>Interlanguage</i>, International Review of Applied "
    "Linguistics in Language Teaching, <b>1972</b>. Printed here in our own words.</p>"
    "<p>A learner's utterances should not be treated as a <b>defective version</b> of the target "
    "language. They are the output of a <b>separate linguistic system</b> with its own rules &mdash; "
    "an <b>interlanguage</b>. The practical consequence is that learner errors are <b>systematic</b>: "
    "they come from rules, and the rules can be stated.</p>"
    + table_html(["The process","What it is"],
      [["<b>language transfer</b>","a pattern carried over from the first language"],
       ["<b>transfer of training</b>","a pattern produced by the way the learner was taught"],
       ["<b>strategies of second-language learning</b>","the learner's own approaches to acquiring it"],
       ["<b>strategies of second-language communication</b>","the learner's own approaches to getting "
        "a message across"],
       ["<b>overgeneralization</b>","applying a rule of the new language beyond where it applies"]])
    + "<p>The other famous term is <b>fossilization</b>: certain items, rules and patterns tend to "
    "<b>stay</b> in a learner's interlanguage however much instruction is applied, and which they are "
    "often depends on the first language.</p>"
    "<p>At band 7 you are not making many errors; you are making <b>three or four errors "
    "repeatedly</b>. Each is a rule. Find it, state it in a sentence, and you have something you can "
    "work on &mdash; which is not true of <i>be more accurate</i>.</p>"
    "<p><b>A proposed construct, and a disputed one.</b> A short theoretical paper proposing a "
    "construct; it reports <b>no study</b>. <b>Fossilization has been argued about ever since</b>: how "
    "long must a feature persist to count as fossilized rather than stabilized, and if the answer is "
    "<i>permanently</i>, how could anybody show it? Some hold the term untestable as it stands. "
    "<b>Nobody can tell you which of your errors is permanent</b>, and anybody who does is claiming "
    "more than the research supports. The five processes <b>overlap</b>, attributing an error to one is "
    "a judgment, and the paper is of its period.</p>",
    "Our summary of a published paper, named with its journal and its year."), 660)
S["qf10-f6"]=lambda: f_realia(tbl("Stating a rule", None,
    ["The error","My rule","The English rule"],
    [["<i>I have seen it yesterday.</i>","present perfect with a finished time","simple past with a finished time"],
     ["<i>She is working here since 2019.</i>","present continuous for duration","present perfect continuous for duration"],
     ["<i>I am interesting in it.</i>","<i>-ing</i> for the person's feeling","<i>-ed</i> for the feeling, <i>-ing</i> for the cause"],
     ["<i>He suggested me to go.</i>","<i>suggest</i> takes an object and infinitive","<i>suggest that</i> plus a clause"],
     ["<i>The informations are useful.</i>",B,B],
     ["<i>I am living here for three years.</i>",B,B]],
    note="Four cells are empty on purpose. Every one of these is a rule somebody could state."), 700)
S["qf10-f7"]=lambda: f_matrix(["Times in 14 min","The rule behind it","The process","Corrected before?"],
    [("present perfect with <i>yesterday</i>",["4","finished time takes the perfect","transfer","yes, many times"]),
     ("<i>since</i> with the present continuous",["3","duration takes the continuous","transfer","yes, many times"]),
     ("<i>interesting</i> for <i>interested</i>",["2","<i>-ing</i> for a feeling","overgeneralization","yes"]),
     ("<i>suggest me to</i>",["2","<i>suggest</i> patterns like <i>tell</i>","overgeneralization","once"]),
     ("plural <i>informations</i>",["1","count nouns take <i>-s</i>","overgeneralization","never"])], 760)
S["qf10-f8"]=lambda: f_icons([("magnifier","one error, four times"),("note","one error, once"),
    ("signpost","a transfer arrow"),("danger","an overgeneralized ending"),
    ("lecture","a drilled pattern"),("form","is there a rule behind this?")],3)
S["qf10-f9"]=lambda: f_realia(tbl("Fourteen minutes, errors marked", None,
    ["Error type","Times","Rule?"],
    [["present perfect with a stated time","4","yes"],
     ["<i>since</i> with the present continuous","3","yes"],
     ["<i>-ing</i> for a feeling","2","yes"],
     ["<i>suggest</i> with an infinitive","2","yes"],
     ["a plural on an uncountable noun","1","yes"]],
    numcols=(1,),
    note="<b>Twelve errors, five types, three rules account for nine of them.</b>"), 620)
S["qf10-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("yusuf",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("note",360,198,0.22),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"TWELVE, FIVE, THREE",[("errors","12"),("types","5"),("rules","3")]),
    clockat=(630,42,22,2,0))
S["qf10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("January", None,
      "<p>present perfect with a stated time: <b>4</b><br>"
      "<i>since</i> with the continuous: <b>3</b><br>"
      "<i>-ing</i> for a feeling: <b>2</b></p><p>Total: <b>9</b>.</p>", "Before the rules were "
      "stated."), 380)[0:3],
    lambda w,h: f_realia(doc("June", None,
      "<p>present perfect with a stated time: <b>1</b><br>"
      "<i>since</i> with the continuous: <b>0</b><br>"
      "<i>-ing</i> for a feeling: <b>3</b></p><p>Total: <b>4</b>.</p>", "One type did not move at "
      "all."), 380)[0:3],
    800, 310, "January", "June")
S["qf10-f12"]=lambda: f_realia(doc("Two self-descriptions", None,
    "<p><b>Description 1.</b> <i>My grammar is not very good and I make a lot of mistakes, especially "
    "with tenses and articles. I have been corrected many times but I always forget. I think it is "
    "probably too late for me now.</i></p>"
    "<p><b>Description 2.</b> <i>Three rules account for most of my errors. The first is that I use "
    "the perfect where English uses the simple past with a stated time, which is how the tenses divide "
    "in my first language&hellip; All three are resistant; whether any of them is permanent I have no "
    "way of knowing, and nor does anybody who has told me so.</i></p>",
    "One names nothing and fixes nothing. The other names three rules, three processes and one open "
    "question."), 660)
S["qf10-f13"]=lambda: f_realia(form("The three-rule card",
    [("Error one, and its rule",B),("Error two, and its rule",B),("Error three, and its rule",B),
     ("The process behind each",B),("What I will not claim",B)],
    note="A smaller job than <i>be more accurate</i>, and the only version of it you can do."), 580)
S["qf10-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("yusuf",340,190,{"seated":True}),("grace",470,184,{}),
     ("oksana",560,188,{"seated":True}),("ines",660,186,{}),("hana",740,190,{"seated":True}),
     ("junseo",830,186,{}),("samira",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("note",430,208,0.22),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"WHAT RULE PRODUCED THESE FOUR?",
      [("errors","4"),("rule","1"),("process","transfer")]),
    clockat=(650,40,22,7,0))
S["qf10-f15"]=lambda: f_chart([("one or two",1),("three or four",3),("five to eight",2),
    ("more than eight",1),("I do not know",4)], w=580)
S["qf10-f16"]=lambda: f_realia(doc("On the desk, evening",
    "Twelve errors in five colors, three colors circled",
    "<p><b>Three types account for nine of the twelve.</b></p>"
    "<p><b>Corrected since school:</b> all three.</p>"
    "<p><b>Time taken to state the rule behind one of them, in Lesson 1:</b> four seconds.</p>"
    "<p><b>Beside it:</b> a journal page dated 1972, two transcripts dated January and June, and a "
    "card with three rules on it.</p>",
    "Ten years of correction, four seconds of description."), 650)

# ---------------- Unit 11 ----------------
S["qf11-f1"]=lambda: f_icons([("review","a score in a box"),("note","an interpretation"),
    ("signpost","a use"),("folder","five evidence folders"),
    ("form","a content specification"),("head","a response process"),
    ("data","an internal structure diagram"),("thread","a correlation"),
    ("chain","a consequence"),("scales","a fairness check"),
    ("odometer","a threshold on a scale"),("library","a volume dated 2014"),
    ("magnifier","a clause, closely read"),("proof","a tick"),("danger","a cross"),
    ("speechbubble","a question over a decision")],4)
S["qf11-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("samira",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"NOT THE TEST",
      [("test","&mdash;"),("interpretation","&#10003;"),("use","&#10003;")]),
    clockat=(622,44,22,2,0))
S["qf11-f3"]=lambda: f_icons([("form","a content specification"),("head","a response process"),
    ("data","an internal structure"),("thread","a correlation"),
    ("chain","a consequence"),("folder","five kinds of evidence")],3)
S["qf11-f4"]=lambda: f_realia(tbl("Team research &middot; what is the score used for?", None,
    ["The user","The threshold","What they take it to mean","What evidence would support that","Found any?"],
    br(6,5),
    note="The use with the least evidence behind it: ______________________"), 700)
S["qf11-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Speaking class",
    "What has to be true before a score is used to decide something &middot; page 1 of 1",
    "<p><b>The source.</b> <i>Standards for Educational and Psychological Testing</i>, published "
    "jointly by the American Educational Research Association, the American Psychological Association "
    "and the National Council on Measurement in Education, <b>2014</b>. Printed here in our own "
    "words.</p>"
    "<p><b>Validity is not a property of a test.</b> It is the degree to which evidence and theory "
    "support the <b>interpretations of test scores for proposed uses</b>. So two things must be stated "
    "before validity can be discussed: what the score is taken to <b>mean</b>, and what it will be "
    "<b>used for</b>.</p>"
    + table_html(["The source","What it examines"],
      [["<b>test content</b>","whether the tasks represent the domain being measured"],
       ["<b>response processes</b>","what candidates actually do when they respond"],
       ["<b>internal structure</b>","whether the parts relate to each other as the construct predicts"],
       ["<b>relations to other variables</b>","whether scores relate to other measures as expected"],
       ["<b>consequences of testing</b>","what follows from using the test, intended and unintended"]])
    + "<p><b>Fairness is treated as a fundamental validity issue</b> rather than a separate topic. And "
    "the responsibility is shared: the standards address <b>test users</b> as well as developers, and "
    "a user who applies a score to a decision the evidence does not support is the one at fault.</p>"
    "<p>Two consequences. <b>Your score is not a measurement of your English:</b> <i>my English is a "
    "7.0</i> is a sentence about a number. <b>And the people using it carry part of the "
    "responsibility:</b> a university that sets 7.0 rather than 6.5 has made a decision it ought to be "
    "able to justify.</p>"
    "<p><b>Standards, not law.</b> They have <b>no enforcement mechanism of their own</b>. They are "
    "produced by <b>three organizations in one country</b> and reflect its measurement tradition and "
    "legal context. They are a <b>consensus document</b>, so where the field disagrees the wording "
    "accommodates rather than settles. They are an <b>edition</b> that superseded others and will be "
    "superseded. And they <b>evaluate no particular test</b>: the questions this note suggests you "
    "might ask are ours.</p>",
    "Our summary of a published set of standards, named with its three publishing organizations and "
    "its year."), 660)
S["qf11-f6"]=lambda: f_realia(tbl("Evidence with its limits", None,
    ["The phrasing","What it attaches","An example"],
    [["<b>the evidence supports</b>","a bounded claim","The evidence supports that interpretation."],
     ["<b>for this use</b>","the use it is good for","Valid for this use, and not necessarily others."],
     ["<b>on the available evidence</b>","the state of knowledge","On the available evidence, the threshold is defensible."],
     ["<b>within the limits of</b>","the boundary","within the limits of what was measured"],
     ["<b>this does not license</b>",B,B],
     ["<b>the evidence does not extend to</b>",B,B]],
    note="Four cells are empty on purpose. Every one of these attaches a limit to a claim."), 700)
S["qf11-f7"]=lambda: f_matrix(["What the user takes it to mean","Bounded?"],
    [("admission to a taught course",["the candidate can follow lectures and write assignments","yes"]),
     ("professional registration",["the candidate can work safely in the language","yes, for named roles"]),
     ("a visa threshold",["the candidate can live in the country","not clearly"]),
     ("a hiring decision",["the candidate is a good colleague","no"]),
     ("a self-assessment",["the candidate's English is a 7.0","no"])], 700)
S["qf11-f8"]=lambda: f_icons([("form","a content specification"),("head","a response process"),
    ("data","an internal structure diagram"),("thread","a correlation with later performance"),
    ("chain","a consequence of testing"),("magnifier","which kind of evidence is this?")],3)
S["qf11-f9"]=lambda: f_realia(doc("Admissions page &middot; extract",
    "Taught postgraduate course, entry requirements",
    "<p><b>English language requirement:</b> an overall band of <b>7.0</b>, with <b>no individual "
    "band below 6.5</b>.</p>"
    "<p style='font-size:13px;color:#6b6861'>What the page says the score is taken to mean: "
    "<i>nothing</i>.</p>"
    "<p style='font-size:13px;color:#6b6861'>What evidence the page cites for the threshold: "
    "<i>nothing</i>.</p>",
    "<b>Who set this number, and on what evidence?</b>"), 640)
S["qf11-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("samira",410,176,{"seated":True}),("lars",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("note",360,198,0.22),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"7.0 OVERALL",[("stated","the number"),("not stated","the meaning")]),
    clockat=(630,42,22,2,30))
S["qf11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page A", None,
      "<p>Required band: <b>7.0</b>, no band below 6.5.</p>"
      "<p>What it is taken to mean: <i>not stated</i>.<br>Evidence cited: <i>none</i>.</p>",
      "A number, and nothing else."), 380)[0:3],
    lambda w,h: f_realia(doc("Page B", None,
      "<p>Required band: <b>6.5</b>, no band below 6.0.</p>"
      "<p>What it is taken to mean: <i>able to follow lectures and write assessed work in "
      "English</i>.<br>Evidence cited: <i>a review of first-year outcomes against entry bands</i>.</p>",
      "A number, an interpretation and a use."), 380)[0:3],
    800, 310, "A number alone", "A number with its interpretation")
S["qf11-f12"]=lambda: f_realia(doc("Two answers to one Part 3 question", None,
    "<p><b>Answer 1.</b> <i>Tests are a fair way of measuring people's English because everybody "
    "takes the same test and gets a number, so the number shows who is better.</i></p>"
    "<p><b>Answer 2.</b> <i>A score is evidence for a particular reading of a particular performance, "
    "and the honest question is what it is being used for. Admitting somebody to a course on the "
    "strength of it is one thing&hellip; comparing two job applicants on it is another, and I would "
    "want to know what evidence anybody has that it predicts what they think it predicts. What I would "
    "not say is that the number measures a person.</i></p>",
    "One treats a score as a measure of a person. The other names two uses and refuses the third "
    "thing."), 660)
S["qf11-f13"]=lambda: f_realia(form("Interpretation planner",
    [("The question",B),("The interpretation",B),("The use",B),
     ("One piece of evidence that would support it",B),("What I will not claim",B)],
    note="Name both, or say nothing."), 580)
S["qf11-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("samira",340,190,{"seated":True}),("lars",470,184,{}),
     ("grace",560,188,{"seated":True}),("nour",660,186,{}),("marek",740,190,{"seated":True}),
     ("tomas",830,186,{}),("mei",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("note",430,208,0.22),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"VALID FOR WHAT, AND FOR WHOM?",
      [("test","not it"),("interpretation","yes"),("use","yes")]),
    clockat=(650,40,22,8,0))
S["qf11-f15"]=lambda: f_chart([("my English",5),("my performance on one day",2),
    ("what the test was built to measure",2),("nothing much",1),("I had not thought about it",1)],
    w=580)
S["qf11-f16"]=lambda: f_realia(doc("On the desk, evening",
    "An admissions page with a required band circled",
    "<p><b>Required:</b> 7.0 overall, no band below 6.5.</p>"
    "<p><b>What the page states about the meaning:</b> nothing.</p>"
    "<p><b>Her Speaking band:</b> 7.0, four times. <b>In three weeks:</b> a fifth number.</p>"
    "<p><b>Beside it:</b> a volume dated 2014 and six published thresholds with questions written "
    "beside each.</p>",
    "Nobody has stated the interpretation, and a decision will be made with it anyway."), 650)

# ---------------- Unit 12 ----------------
S["qf12-f1"]=lambda: f_icons([("meeting","an oral examination"),("lecture","a hall of candidates"),
    ("spreadsheet","a machine-scored sheet"),("racking","a stack of scripts"),
    ("calculator","a cost ledger"),("queue","a queue of applicants"),
    ("councilbuilding","a recruitment office"),("data","a psychometric curve"),
    ("speechbubble","a communicative task"),("scales","a band scale"),
    ("library","a book dated 1995"),("magnifier","an archive document"),
    ("proof","a tick"),("danger","a cross"),("scissors","the word objective, crossed out"),
    ("review","the word practical")],4)
S["qf12-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("nour",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("book",392,196,0.26),("board",106,86,0.76),
     ("clock",470,198,0.2),("window",790,56,0.94)],
    board=(676,22,210,112,"TWO COLUMNS",[("scientific","2"),("administrative","6")]),
    clockat=(622,44,22,2,30))
S["qf12-f3"]=lambda: f_icons([("spreadsheet","a machine-scored sheet"),("pen","a human marker"),
    ("form","a multiple-choice item"),("meeting","a spoken interview"),
    ("calculator","a cost figure"),("scales","cheap and consistent, or rich and slow?")],3)
S["qf12-f4"]=lambda: f_realia(tbl("Team research &middot; why fourteen minutes?", None,
    ["The feature","The scientific reason","The administrative reason","Which seems larger"],
    br(6,4),
    note="The feature with no scientific reason we could find: ______________________"), 680)
S["qf12-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Speaking class",
    "Why the test is shaped the way it is &middot; page 1 of 1",
    "<p><b>The source.</b> Bernard Spolsky, <i>Measured Words: The Development of Objective Language "
    "Testing</i>, Oxford University Press, <b>1995</b>. Printed here in our own words.</p>"
    "<p>A history. It traces how language testing moved from the oral examination conducted by two "
    "people who knew the candidate to the modern apparatus of scales, standardized tasks and published "
    "bands. Its central argument: the form language tests took was driven as much by "
    "<b>administrative and political pressure</b> as by any theory of language &mdash; the need to "
    "sort very large numbers of applicants, at a cost somebody would bear, producing a result that "
    "could be defended, on a timetable.</p>"
    + table_html(["The tradition","What it values"],
      [["the <b>psychometric</b>","consistency, efficiency, and scoring that does not depend on who "
        "marks"],
       ["the <b>integrative or communicative</b>","tasks that resemble real language use, even when "
        "marking them is slower and less reliable"]])
    + "<p>The author's view is that the first won most of the twentieth century on grounds that were "
    "practical rather than intellectual.</p>"
    "<p><b>The examination these six books prepare for is a compromise.</b> Fourteen minutes, three "
    "parts, one examiner, nine bands: every one is a number somebody chose under constraint. A spoken "
    "interview marked by a trained human against a public scale is a considerable achievement by the "
    "standards of this history &mdash; and it is fourteen minutes long because forty was not "
    "affordable.</p>"
    "<p><b>And these six books exist because that examination exists.</b> What we would say in the "
    "series' defense is that every unit of all six is built on a real published document, named with "
    "its date, with the limits its own authors state printed beside it; that most of those documents "
    "are not about examinations at all; and that a reader who finishes them knows things that will "
    "outlast any band &mdash; and knows, of each, where it came from and what it does not "
    "establish.</p>"
    "<p><b>A history, written by a participant.</b> One historian's account, by an active participant "
    "in the field he describes. <b>Selective</b> by necessity, resting largely on institutional "
    "records from particular countries. And a history explains <b>how something came to be, not "
    "whether it is right</b>: that the fourteen minutes was arrived at administratively does not show "
    "that fourteen minutes is the wrong length, and that argument is one the book does not make, and "
    "nor do we.</p>",
    "Our summary of a published history, named with its publisher and its year."), 660)
S["qf12-f6"]=lambda: f_realia(tbl("The whole toolkit", None,
    ["Unit","What it gave you","One thing to do"],
    [["1","range is in three of four criteria","six ways to open an opinion"],
     ["2","lemmas, not families","four forms of every word"],
     ["3","the idiom principle","collect pairs, not words"],
     ["4","two economies","three replacements an answer"],
     ["5","sentence stems","five stems in the minute"],
     ["6","repair has a structure","one syllable in the middle"],
     ["7","three dimensions, one attention","hard structures in Part 2"],
     ["8","the nuclear stress","move it, and hear it moved"],
     ["9","three dimensions of being understood","work on effort, not accent"],
     ["10",B,B],["11",B,B]], numcols=(0,),
    note="Four cells are empty on purpose. Eleven units, and you can say what each was for."), 700)
S["qf12-f7"]=lambda: f_matrix(["The scientific reason","The administrative reason","Larger"],
    [("fourteen minutes",["long enough to sample three task types","an examiner can do four an hour",
      "administrative"]),
     ("three parts",["different conditions sample different abilities",
      "one card, one set of questions, one warm-up","both"]),
     ("one minute for the card",["planning time raises complexity","a minute is easy to time","both"]),
     ("nine bands",["enough steps to discriminate","a scale people already understand",
      "administrative"]),
     ("one examiner",["a single consistent listener","two would double the cost","administrative"]),
     ("a recording",["allows a second rating if challenged","makes the result defensible",
      "administrative"])], 760)
S["qf12-f8"]=lambda: f_icons([("spreadsheet","a machine-scored sheet"),("pen","a human marker with a scale"),
    ("form","a multiple-choice item"),("meeting","a spoken interview"),
    ("timer","a timed writing task"),("magnifier","which tradition is this?")],3)
S["qf12-f9"]=lambda: f_realia(tbl("The whole test, on one page", None,
    ["","What happens","How long"],
    [["<b>Part 1</b>","Familiar topics","4 to 5 min"],
     ["<b>The card</b>","One minute to prepare","1 min"],
     ["<b>Part 2</b>","You speak","1 to 2 min"],
     ["<b>Part 3</b>","Abstract discussion","4 to 5 min"],
     ["<b>The criteria</b>","Fluency and Coherence &middot; Lexical Resource &middot; Grammatical "
      "Range and Accuracy &middot; Pronunciation","equally weighted"],
     ["<b>The scale</b>","Nine bands, reported in halves","&mdash;"]],
    numcols=(0,),
    note="<b>Fourteen minutes, four criteria, one afternoon.</b>"), 680)
S["qf12-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("nour",410,176,{"seated":True}),("grace",530,172,{"seated":True})],
    props=[("table",250,0,1.3),("computer",470,200,0.3),("notebook",360,198,0.24),
     ("board",100,84,0.78),("clock",640,196,0.2),("window",820,56,0.9)],
    board=(686,20,216,118,"FOUR THINGS",[("P1","replacements"),("P2","stems"),("P3","runs")]),
    clockat=(630,42,22,3,0))
S["qf12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The start of the course", None,
      "<p>Five practice tests, four figures each.</p>"
      "<p>FC 7.0 &middot; LR 7.0 &middot; GRA 7.0 &middot; P 7.0, four times over.</p>",
      "Four sevens, four times."), 380)[0:3],
    lambda w,h: f_realia(doc("The end of the course", None,
      "<p>The fifth practice test.</p>"
      "<p>FC 7.0 &middot; <b>LR 7.5</b> &middot; GRA 7.0 &middot; P 7.0.</p>",
      "One criterion moved. Three did not."), 380)[0:3],
    800, 310, "Before", "After")
S["qf12-f12"]=lambda: f_realia(doc("One Part 3 answer &middot; 210 words",
    "Eight features marked.",
    "<p><b>The question is whether</b> a test of this kind measures what people take it to measure, "
    "and I would <b>separate two things</b> that usually get run together. Whether it samples the "
    "ability is one question; whether the number is then used for things the evidence does not cover "
    "is quite <b>another</b>, and the second is where the real trouble is. Admittedly a "
    "fourteen-minute interview is a thin sample &mdash; <b>or rather</b>, it is a thin sample of a "
    "very wide ability, which is not the same criticism. What I would say in its defense is that it is "
    "an interview with a <b>person</b> rather than a sheet of boxes, and that costs the people running "
    "it a great deal of money they could have saved.</p>"
    "<p style='font-size:12px;color:#6b6861'>Marked: a stem &middot; a reported distinction &middot; "
    "an editing term &middot; four nuclear stresses &middot; a cheap complex structure &middot; a "
    "replaced general word &middot; a collocation &middot; a bounded claim.</p>",
    "Eight features of eleven units, in 210 words."), 680)
S["qf12-f13"]=lambda: f_realia(form("The final check",
    [("Part 1: three replacements",B),("Part 2: five stems and two structures",B),
     ("Part 3: long runs and nuclear stress",B),("The editing term I will use",B)],
    note="Four things. If you remember nothing else, those four are the half band."), 580)
S["qf12-f14"]=lambda: f_scene(1000,470, people=[("priya",250,186,{}),
     ("nour",340,190,{"seated":True}),("grace",470,184,{}),
     ("lars",560,188,{"seated":True}),("samira",660,186,{}),("chiamaka",740,190,{"seated":True}),
     ("yusuf",830,186,{}),("tomas",150,188,{})],
    props=[("table",300,0,1.4),("printer",120,206,0.3),("notebook",430,208,0.24),
     ("board",96,80,0.84),("clock",700,204,0.2),("window",900,58,1.0),
     ("library",960,196,0.34)],
    board=(706,18,250,128,"WHY IS IT FOURTEEN MINUTES?",
      [("scientific","2"),("administrative","6")]),
    clockat=(650,40,22,4,0))
S["qf12-f15"]=lambda: f_chart([("the two economies",3),("the sentence stems",2),
    ("the nuclear stress",3),("accent and understanding",2),("the interlanguage",1)], w=580)
S["qf12-f16"]=lambda: f_realia(doc("On the desk, late",
    "Five summary sheets with four band figures each",
    "<p><b>Tests one to four:</b> 7.0 &middot; 7.0 &middot; 7.0 &middot; 7.0, on every criterion.</p>"
    "<p><b>Test five:</b> Lexical Resource <b>7.5</b>; the other three 7.0.</p>"
    "<p><b>What moved it:</b> three replaced general words in every answer, for a week.</p>"
    "<p><b>What she needs:</b> 7.5 overall. <b>Weeks remaining:</b> three.</p>"
    "<p><b>Beside it:</b> a book dated 1995 and a card with four items on it.</p>",
    "One criterion out of four. There is no answer printed at the back of this book, and no Book 7."),
    680)
