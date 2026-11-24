# -*- coding: utf-8 -*-
"""Plumbline Book 2 figure specs, Units 8 to 10."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
B = "&nbsp;"
def br(n, c): return [[B]*c for _ in range(n)]

# ---------------- Unit 8 ----------------
S["qb08-f1"]=lambda: f_icons([("podium","a tall syllable"),("data","a flat one"),
    ("thread","a word in two blocks, first larger"),("signal","second larger"),
    ("tally","a full vowel"),("quotemark","a flat vowel"),
    ("today","a stream with the tall ones marked"),("book","a page with stress marks"),
    ("notebook","a counted list of words"),("library","a stack of recordings"),
    ("transfer","a family with the stress moving"),("review","one spelling, two stresses"),
    ("form","a noun card and a verb card"),("stars","a tick"),("noentry","a cross"),
    ("magnifier","a footnote")],4)
S["qb08-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("mei",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("note",390,196,0.24),("board",98,86,0.84),
     ("tally",470,198,0.2),("window",790,56,0.94)],
    board=(644,22,240,120,"CUT AT THE LOUD ONES",[("five lines","drawn"),("one","inside a word")]),
    clockat=(594,44,22,12,30))
S["qb08-f3"]=lambda: f_icons([("thread","a two-block word, first tall"),
    ("signal","a two-block word, second tall"),("podium","a one-block word, tall"),
    ("data","a one-block function word, flat"),("today","a stream with four tall blocks"),
    ("magnifier","a statistic about words, not ears")],3)
S["qb08-f4"]=lambda: f_realia(tbl("Team research &middot; count your own", None,
    ["The word","Syllables","Where the stress falls","Content or function","Starts strong?"],
    br(10,5),
    note="The content word that did not start strong: ______________________"), 700)
S["qb08-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Listening class",
    "Why loud syllables are useful &middot; page 1 of 1",
    "<p><b>The source.</b> A. Cutler and D. M. Carter, <i>The predominance of strong initial "
    "syllables in the English vocabulary</i>, Computer Speech and Language, <b>1987</b>. Printed here "
    "in our own words.</p>"
    "<p>The paper does something very simple and very useful. It <b>counts</b>. It takes the English "
    "vocabulary &mdash; from a dictionary, and then from a corpus of real spoken English &mdash; and "
    "asks where the stress falls in each word.</p>"
    + table_html(["What the count found","Why it matters"],
      [["Most English <b>content words</b> begin with a <b>strong</b> syllable",
        "a loud syllable is probably the start of a word"],
       ["In <b>running speech</b> the proportion is higher still",
        "because the words people say most are short, and short content words are stressed"],
       ["<b>Function words</b> are mostly <b>weak</b>",
        "so the pattern says nothing at all about them"]])
    + "<p>Now put that next to the problem from Units 2 and 3. Speech has no gaps, so a listener has "
    "to decide where words begin. If most content words begin loud, a listener can use a simple "
    "working rule: <b>treat a strong syllable as the likely start of a new content word.</b> English "
    "gives very good odds on it.</p>"
    "<p>This explains something you have noticed. In fast speech you hear the loud syllables and "
    "almost nothing between them &mdash; and that is not a failure, it is the strategy working. The "
    "loud parts are where the words are. The quiet parts are the grammar, and you reconstruct them "
    "from what you know.</p>"
    "<p><b>A count, an inference, and a known failure.</b> What the paper establishes is a <b>count</b> "
    "of a vocabulary, in that dictionary and that corpus, at that time. That listeners <b>use</b> the "
    "pattern is an <b>inference</b> &mdash; a reasonable one, supported by other experimental work, "
    "and not something this paper demonstrates about any individual. A statistic about a vocabulary is "
    "not a fact about an ear.</p>"
    "<p>And the strategy has a <b>known failure</b>. Plenty of English content words do not begin "
    "strong &mdash; <i>beGIN</i>, <i>aGREE</i>, <i>reSULT</i>, <i>aLLOW</i> &mdash; and a listener who "
    "cuts in front of one of those strong syllables cuts a word in half and gets two words that are "
    "both real English. That is a boundary slip, and it is the commonest kind there is. The paper also "
    "says nothing about learners, and contains no training exercise.</p>",
    "Our summary of a published paper. The counting is the part to look at, and it is readable."),
    620)
S["qb08-f6"]=lambda: f_realia(tbl("Two-syllable nouns and verbs", None,
    ["Spelled","As a noun","As a verb"],
    [["<b>record</b>","<b>RE</b>cord","re<b>CORD</b>"],
     ["<b>increase</b>","<b>IN</b>crease","in<b>CREASE</b>"],
     ["<b>present</b>","<b>PRE</b>sent","pre<b>SENT</b>"],
     ["<b>contract</b>","<b>CON</b>tract","con<b>TRACT</b>"],
     ["<b>object</b>",B,B],
     ["<b>permit</b>",B,B]],
    note="Four cells are empty on purpose. The spelling is identical; the stress is the only "
    "difference."), 620)
S["qb08-f7"]=lambda: f_matrix(["Boundaries found, of 20"],
    [("the content word began strong",["17.1"]),("the content word began weak",["6.8"])], 520)
S["qb08-f8"]=lambda: f_icons([("podium","a tall syllable"),("data","a flat one"),
    ("thread","first block tall"),("signal","second block tall"),
    ("scissors","a line cut inside a word"),("magnifier","a count, not a claim about ears")],3)
S["qb08-f9"]=lambda: f_realia(doc("Transcript extract &middot; syllable blocks",
    "Strong syllables in bold &middot; a line before each &middot; four lines marked wrong",
    "<p style='font-size:16px;line-height:2.2'>"
    "| <b>SO</b> | <b>IF</b> you | <b>GO</b> to the | <b>DESK</b> at the | <b>END</b> of the | "
    "<b>CORR</b>idor | and the re&times;<b>SULT</b> | will a&times;<b>RRIVE</b> | by the | "
    "<b>SEC</b>ond of | a&times;<b>GREE</b>d | <b>DATES</b> |</p>"
    "<p style='color:#6b6861;font-size:13px'>Twenty-nine lines drawn, four of them marked with a "
    "cross. All four fall inside a content word that begins with a weak syllable.</p>",
    "Our own transcript, written for this book. The marking convention is ours."), 620)
S["qb08-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("mei",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("note",360,196,0.24),("computer",490,142,0.42),
     ("spreadsheet",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"SULT",[("not","a word"),("so","cut wrongly")]),
    clockat=(680,44,22,14,0))
S["qb08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Transcript 1", None,
        "<p>Lines drawn before every strong block.</p>"
        "<p style='color:#6b6861;font-size:13px'>Twenty-nine lines, four of them inside words.</p>"),
        w)[0:3],
    lambda w,h: f_realia(doc("Transcript 2", None,
        "<p>The true word boundaries marked.</p>"
        "<p style='color:#6b6861;font-size:13px'>Four of them are not at a strong block at all: "
        "<i>result</i>, <i>arrive</i>, <i>agreed</i>, <i>allow</i>.</p>"), w)[0:3],
    w=900, h=270)
S["qb08-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I wrote four answers that were not words. I do not know what happened. The speaker ran "
        "everything together.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>In the practice paper on <b>1 April</b> I wrote four answers that are not English words: "
        "<i>sult</i>, <i>llow</i>, <i>gree</i>, <i>sign</i>. All four are the stressed part of a "
        "longer word &mdash; <i>result</i>, <i>allow</i>, <i>agree</i>, <i>design</i> &mdash; and in "
        "every case I cut in front of the loud syllable. A count published in 1987 found that most "
        "English content words begin with a strong syllable, which gives a listener a good working "
        "rule; that listeners actually use the rule is an inference from the figures and other work, "
        "not something that paper shows, and words like <i>result</i> are its known failure. The check "
        "is free: if my answer is not a word, I cut in the wrong place.</p>"), w)[0:3],
    w=920, h=330)
S["qb08-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the paper",""),("The non-words I wrote",""),("The real words they belonged to",""),
     ("Where I cut",""),("What the count found",""),("My check","")]), 540)
S["qb08-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("mei",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("yusuf",365,176,{"seated":True}),("nour",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("junseo",590,170,{}),("ines",655,172,{}),
     ("marek",720,170,{}),("samira",785,172,{}),("hana",845,170,{}),
     ("oksana",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("note",350,198,0.24),
     ("printer",430,196,0.3),("flashcard",560,198,0.24),("table",650,0,1.0),
     ("book",860,198,0.26),("shelf",930,96,0.5)],
    board=(40,22,244,116,"LOUD MEANS A WORD BEGINS, USUALLY",[("most","content words"),("except","result")]),
    clockat=(306,34,22,15,0))
S["qb08-f15"]=lambda: f_chart([("the loud syllable",6),("the first sound",2),
    ("the ending",1),("the whole word",1),("nothing",1)])
S["qb08-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Scores up, and a new kind of error",
    table_html(["Paper","Part 3","Part 4","Non-words written"],
      [["before","2","1","0"],["1","5","4","3"],["2","6","5","2"],
       ["3","6","5","3"],["4","6","5","3"]])
    + "<p><b>A list</b> of fifty weak-start content words.</p>"
    "<p><i>She has started reading each answer back. Last paper she caught three of four.</i></p>",
    "Eight o'clock. Eleven non-words in four papers, every one of them the stressed part of a longer "
    "word."), 640)

# ---------------- Unit 9 ----------------
S["qb09-f1"]=lambda: f_icons([("worldmap","speech bubbles in several places"),
    ("meeting","two speakers and a listener"),("speechbubble","a hand to an ear"),
    ("headset","headphones and a globe"),("form","a comprehension test"),
    ("tally","uneven bars"),("spreadsheet","a matrix of rows and columns"),
    ("idcard","first language"),("microphone","the speaker"),
    ("scales","a scale nearly level"),("signal","a small difference"),
    ("danger","a warning over a conclusion"),("book","a dictionary open at accent"),
    ("stars","a tick"),("noentry","a cross"),("magnifier","a footnote")],4)
S["qb09-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("ines",430,172,{"seated":True})],
    props=[("table",240,0,1.22),("spreadsheet",390,196,0.24),("board",96,86,0.86),
     ("worldmap",470,198,0.22),("window",790,56,0.94)],
    board=(638,22,246,122,"FOUR BY FOUR",[("biggest gap","0.7"),("pattern","none")]),
    clockat=(588,44,22,13,0))
S["qb09-f3"]=lambda: f_icons([("worldmap","a range of accents"),
    ("headset","the published page"),("form","a card: a range is used"),
    ("spreadsheet","a matrix with small differences"),("danger","a warning"),
    ("magnifier","what is published, and what was studied")],3)
S["qb09-f4"]=lambda: f_realia(tbl("Team research &middot; your own matrix", None,
    ["Listener","Speaker A","Speaker B","Speaker C","Speaker D","My first language"],
    br(4,6),
    note="The combination that surprised us: ______________________"), 720)
S["qb09-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Listening class",
    "What one study found about accents &middot; page 1 of 1",
    "<p><b>First, a separate fact.</b> The published material for this examination states that the "
    "recordings use a <b>range of accents</b> of English, from more than one country. That is a "
    "statement by the test owners about the test. It is not a research finding and this note does not "
    "treat it as one.</p>"
    "<p><b>The source for the rest.</b> R. C. Major, S. F. Fitzmaurice, F. Bunta and C. "
    "Balasubramanian, <i>The effects of nonnative accents on listening comprehension: implications "
    "for ESL assessment</i>, TESOL Quarterly, <b>2002</b>. Printed here in our own words.</p>"
    "<p>The researchers recorded the same lecture material spoken by speakers of English from several "
    "backgrounds &mdash; some native speakers, some speakers of English as a second language from "
    "different first languages. They then gave listening comprehension tests on those recordings to "
    "several groups of listeners, themselves from different first languages.</p>"
    "<p>The design lets you ask the question everybody in a preparation class asks: <b>does a listener "
    "understand a speaker better when the speaker shares their first language?</b></p>"
    + table_html(["What they found","What follows"],
      [["Changing the speaker's accent made <b>small</b> differences",
        "an unfamiliar accent is not a catastrophe"],
       ["For some combinations there was an advantage, for others none, for some a disadvantage",
        "there is no reliable shared-language advantage"],
       ["<b>The pattern was not consistent across groups</b>",
        "you cannot read your own case off their table"]])
    + "<p>That is a genuinely useful result, because it removes two beliefs at once: <i>I will always "
    "do better with a speaker like me</i>, and <i>an unfamiliar accent will ruin my score</i>. Both "
    "were larger than the evidence.</p>"
    "<p><b>Small, uneven, and not to be stretched.</b> The study used particular accents, particular "
    "listener groups and particular test material. <b>The authors are explicit that the results should "
    "not be generalized</b> to other accents or other populations, and a reader who takes one "
    "combination and applies it to their own case has done exactly what they asked people not to do. "
    "The effects were small, and small effects in one study are a reason to stop repeating a rumor "
    "rather than to start a new one. It is about the comprehension of lecture material in a research "
    "setting: it is not a study of this examination, it makes no claim about anybody's band, and it "
    "does not say which accents appear on any paper.</p>",
    "Our summary of a published paper. Read it if your center has access; the matrix is the part that "
    "changes minds."), 620)
S["qb09-f6"]=lambda: f_realia(tbl("Easy, hard, used to", None,
    ["The form","What it means","An example"],
    [["<b>easier to understand than</b>","a comparison of difficulty",
      "She is easier to understand than he is."],
     ["<b>harder to follow than</b>","the other direction",
      "The third speaker was harder to follow than the first."],
     ["<b>as clear as</b>","the same","The second recording was as clear as the first."],
     ["<b>no easier than</b>","a denial of difference",
      "That accent is no easier than any other for me."],
     ["<b>used to + verb</b>",B,B],
     ["<b>be used to + noun or -ing</b>",B,B]],
    note="Four cells are empty on purpose."), 640)
S["qb09-f7"]=lambda: f_matrix(["Speaker A","Speaker B","Speaker C","Speaker D"],
    [("Group 1",["3.8","4.0","3.6","3.9"]),("Group 2",["4.1","3.7","4.0","3.8"]),
     ("Group 3",["3.6","3.9","4.2","3.5"]),("Group 4",["3.9","3.8","3.7","4.1"])], 600)
S["qb09-f8"]=lambda: f_icons([("worldmap","several speech bubbles"),
    ("spreadsheet","a matrix with close figures"),("scales","a scale almost level"),
    ("danger","a warning over a conclusion"),("speechbubble","a hand to an ear"),
    ("magnifier","particular accents, particular listeners")],3)
S["qb09-f9"]=lambda: f_realia(doc("Published information page &middot; extract",
    "One paragraph about the recordings",
    "<p style='font-size:15px'>The recordings used in the Listening test feature <u>a range of "
    "accents of English</u>, from more than one country.</p>"
    "<p style='font-size:12px;color:#6b6861'>For material that sounds like the examination, use the "
    "test owners' own published sample material. Nothing else is a sample of the test.</p>",
    "One published sentence, and a great many rumors. Our paraphrase of a published page; read the "
    "original and write down the date."), 580)
S["qb09-f10"]=lambda: f_scene(940,430, people=[("priya",290,172,{}),
     ("ines",400,176,{"seated":True}),("lars",520,172,{"seated":True})],
    props=[("table",230,0,1.2),("spreadsheet",360,196,0.24),("computer",490,142,0.42),
     ("headset",450,198,0.2),("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"TWO PEOPLE",[("Ines","2 of 5"),("Marek","4 of 5")]),
    clockat=(680,44,22,13,45))
S["qb09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Ranking sheet 1", None,
        "<p>Easiest first: <b>A, D, B, C</b></p>"
        "<p style='color:#6b6861;font-size:13px'>Scores: 4, 3, 3, 2 out of five.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Ranking sheet 2", None,
        "<p>Easiest first: <b>C, B, A, D</b></p>"
        "<p style='color:#6b6861;font-size:13px'>Scores: 4, 4, 3, 2 out of five. Same recordings, "
        "same questions, opposite order.</p>"), w)[0:3],
    w=900, h=270)
S["qb09-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I got 21 in Listening because the speaker in Part 3 had an accent I am not used to. It was "
        "not a fair recording.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>I got <b>21</b> in Listening on <b>8 April</b>, and the speaker in Part 3 was in an accent "
        "I have rarely heard. The published material says the recordings use a range of accents from "
        "more than one country, so that is expected rather than unfair. A study published in 2002 "
        "tested several speaker accents on several listener groups and found the effects on "
        "comprehension small and not consistent between groups; its authors ask readers not to "
        "generalize beyond the accents they tested. In our own class of eleven, four speakers produced "
        "a spread of less than one mark out of five, which with eleven people proves nothing either "
        "way. From now on I am listening to one unfamiliar accent a week.</p>"), w)[0:3],
    w=920, h=330)
S["qb09-f13"]=lambda: f_realia(form("Note planner",
    [("The date and the score",""),("The accent in the part I lost",""),
     ("What the published material says",""),("What the study found",""),
     ("What the study cannot support",""),("My weekly listening plan","")]), 560)
S["qb09-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("ines",130,172,{"seated":True}),("priya",205,176,{"seated":True}),
     ("lars",290,172,{}),("marek",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("grace",515,176,{"seated":True}),("nour",590,170,{}),("junseo",655,172,{}),
     ("samira",720,170,{}),("hana",785,172,{}),("oksana",845,170,{}),
     ("yusuf",905,172,{}),("tomas",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.24),
     ("printer",430,196,0.3),("headset",560,198,0.22),("table",650,0,1.0),
     ("worldmap",860,198,0.24),("shelf",930,96,0.5)],
    board=(40,22,248,116,"SMALL, AND NOT THE SAME FOR EVERYBODY",[("some","helped"),("some","did not")]),
    clockat=(310,34,22,14,0))
S["qb09-f15"]=lambda: f_chart([("one",4),("two",3),("three",2),("four",1),("more than four",1)])
S["qb09-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Three years of one accent",
    table_html(["Recording","Accent","Score out of 10"],
      [["1","the one her school used","7"],["2","the one her school used","6"],
       ["3","another","3"],["4","another","2"],["5","another","3"],["6","another","2"]])
    + "<p><b>A four-week plan</b> with five accents marked on it.</p>"
    "<p><i>She wants to postpone her test for six months and spend the time on the accent she thinks "
    "the examination will use. Nobody at the center will tell her which that is, because nobody "
    "knows.</i></p>",
    "Seven o'clock. The score pattern may be evidence about accents, or about three years of "
    "listening to one thing."), 640)

# ---------------- Unit 10 ----------------
S["qb10-f1"]=lambda: f_icons([("note","predictions written first"),
    ("headset","a first play"),("stars","a verified answer"),
    ("review","a second play"),("meeting","two students comparing"),
    ("speechbubble","a discussion of four"),("recycle","a third play"),
    ("pen","a reflection page"),("transfer","five arrows in a cycle"),
    ("spreadsheet","two classes side by side"),("form","a test at each end"),
    ("tally","two pairs of bars"),("teacher","a teacher between the groups"),
    ("noentry","a cross"),("magnifier","a footnote"),("clipboard","a record sheet")],4)
S["qb10-f2"]=lambda: f_scene(900,420, people=[("priya",300,176,{}),
     ("tomas",400,176,{"seated":True}),("hana",470,172,{"seated":True})],
    props=[("table",240,0,1.22),("spreadsheet",360,196,0.24),("board",96,86,0.86),
     ("recycle",520,198,0.22),("window",790,56,0.94)],
    board=(638,22,246,122,"FIVE STEPS",[("step 3","compare first"),("step 4","find the cause")]),
    clockat=(588,44,22,14,30))
S["qb10-f3"]=lambda: f_icons([("note","plan and predict"),("headset","first listen and verify"),
    ("meeting","compare, before the answers"),("speechbubble","discuss and solve"),
    ("recycle","listen again"),("pen","reflect in two lines")],3)
S["qb10-f4"]=lambda: f_realia(tbl("Team research &middot; run the cycle", None,
    ["The step","What we did","Minutes","What we found","Wanted to skip it?"],
    br(5,5),
    note="The step that was most useful: ______________________"), 700)
S["qb10-f5"]=lambda: f_realia(doc("Meridian Language Center &middot; note to the Listening class",
    "Why we make you compare before we give you the answers &middot; page 1 of 1",
    "<p><b>The source.</b> L. Vandergrift and M. H. Tafaghodtari, <i>Teaching L2 learners how to "
    "listen does make a difference: an empirical study</i>, Language Learning, <b>2010</b>. Printed "
    "here in our own words.</p>"
    "<p>Almost all listening practice in the world has the same shape: listen, answer, check, repeat. "
    "The student finds out their score and nothing else. The study asks whether teaching the "
    "<b>process</b> of listening &mdash; rather than giving more things to listen to &mdash; makes a "
    "measurable difference.</p>"
    "<p>Two groups worked through the same material over a term. The <b>control group</b> did it in "
    "the usual way. The <b>experimental group</b> worked through a repeated cycle on every text.</p>"
    + table_html(["Step","What it is"],
      [["<b>Plan and predict</b>","before listening, think about the topic and the likely words"],
       ["<b>First listen and verify</b>","listen, write, mark what is uncertain"],
       ["<b>Compare</b>","compare with a partner, <b>before</b> the answers are given"],
       ["<b>Discuss and solve</b>","work out together why each disagreement happened"],
       ["<b>Listen again and reflect</b>","listen once more, then write what helped and what to "
        "change"]])
    + "<p>At the end of the term both groups took a listening test. The <b>experimental group did "
    "better</b>. And within it, the students who had started as the <b>less skilled</b> listeners made "
    "the <b>largest</b> gains &mdash; which is the opposite of how most teaching time is spent.</p>"
    "<p>Why would it work? Because the cycle makes the invisible part visible. A student who finds out "
    "they wrote a day where their partner wrote a time has found a <b>reason</b>, not a score. Step "
    "three is uncomfortable for exactly that reason, and skipping it removes the whole point.</p>"
    "<p><b>One term, two intact classes, one teacher.</b> This is one quasi-experimental study, over "
    "one term, at one institution, with one language pair. The groups were <b>intact classes</b> "
    "&mdash; whole existing classes, not individuals assigned at random &mdash; so the two groups may "
    "have differed in ways nobody measured. The outcome was a <b>listening test</b>, not a band, and "
    "not this examination. The cycle cannot be separated from the <b>teacher who delivered it</b>. And "
    "<i>less skilled gained most</i> is a <b>subgroup finding</b> from one study, which is the kind of "
    "result that most often fails to appear again. It is a good reason to try the cycle; it is not a "
    "promise.</p>",
    "Our summary of a published paper. The five steps are the part you can use tomorrow."), 620)
S["qb10-f6"]=lambda: f_realia(tbl("The language of reflection", None,
    ["The phrase","What it does","An example"],
    [["<b>I realized that&hellip;</b>","names what you noticed",
      "I realized that I was waiting for a date."],
     ["<b>What helped was&hellip;</b>","names the useful thing",
      "What helped was reading the questions first."],
     ["<b>The reason I missed it was&hellip;</b>","names a cause",
      "The reason I missed it was the word before."],
     ["<b>Next time I will&hellip;</b>","names one change",
      "Next time I will write two words, not five."],
     ["<b>Before I listened&hellip;</b>",B,B],
     ["<b>Once I had heard&hellip;</b>",B,B]],
    note="Four cells are empty on purpose. Two lines of reflection take about forty seconds."), 640)
S["qb10-f7"]=lambda: f_matrix(["Start of term","End of term"],
    [("usual practice",["21.4","24.0"]),("the cycle",["20.8","27.6"]),
     ("the cycle: four lowest starters",["17.2","25.5"])], 560)
S["qb10-f8"]=lambda: f_icons([("note","a prediction page"),("headset","a first play"),
    ("meeting","two sheets compared"),("speechbubble","four students discussing"),
    ("recycle","a third play"),("pen","a two-line reflection")],3)
S["qb10-f9"]=lambda: f_realia(doc("Cycle record &middot; 15 April",
    "One recording, five steps",
    table_html(["Step","What I did","Minutes","What I found"],
      [["1 &middot; plan and predict","read all ten questions, listed five likely words","4",
        "three of my five words appeared"],
       ["2 &middot; first listen","wrote eight answers, marked three uncertain","6",
        "two of the three marked ones were wrong"],
       ["3 &middot; compare","compared with a partner before the key","9",
        "four disagreements"],
       ["4 &middot; discuss and solve","worked out the cause of each","14",
        "three of four caused by the wording of the question"],
       ["5 &middot; listen again and reflect","one more playing, two lines written","17",
        "the fourth was a boundary slip"]])
    + "<p><b>What helped was</b> reading all ten questions before anything started.<br>"
    "<b>Next time I will</b> mark every answer I guess, not only the ones I notice.</p>",
    "Fifty minutes for one recording, against thirty for a whole paper checked against a key."), 660)
S["qb10-f10"]=lambda: f_scene(940,430, people=[("tomas",290,176,{"seated":True}),
     ("hana",370,172,{"seated":True}),("grace",480,172,{}),("priya",600,172,{})],
    props=[("table",230,0,1.2),("spreadsheet",340,196,0.24),("computer",470,142,0.42),
     ("board",110,86,0.7),("window",830,56,0.92)],
    board=(720,22,190,110,"FOUR DIFFERENCES",[("cause","the wording"),("not","the recording")]),
    clockat=(680,44,22,15,0))
S["qb10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Record 1", None,
        "<p>Steps 1, 2 and 5 completed. Steps 3 and 4 <b>blank</b>.</p>"
        "<p style='color:#6b6861;font-size:13px'>This student will never find out the cause of "
        "anything.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Record 2", None,
        "<p>All five steps completed, with four causes named.</p>"
        "<p style='color:#6b6861;font-size:13px'>Twenty minutes longer, and three of the four causes "
        "were the questions, not the recording.</p>"), w)[0:3],
    w=900, h=280)
S["qb10-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note 1, as written", None,
        "<p>I have done thirty-eight practice papers since January. My score is the same. I will do "
        "more.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note 2, rewritten", None,
        "<p>Thirty-eight practice papers since January and my score has moved two marks. On <b>15 "
        "April</b> I ran a five-step cycle instead: predicted before listening, listened and marked my "
        "uncertain answers, compared with a partner before seeing the key, worked out the cause of "
        "each of our four disagreements, then listened again and wrote two lines. <b>Three of the four "
        "disagreements were caused by the wording of the question, not by the recording.</b> A study "
        "published in 2010 found that a group taught this process outperformed a group given the same "
        "recordings in the usual way, and that the weakest listeners gained most &mdash; one term, one "
        "institution, intact classes rather than randomly assigned individuals, a listening test "
        "rather than a band, and a subgroup result that has yet to be repeated. One full cycle a week "
        "from now on, and fewer papers.</p>"), w)[0:3],
    w=940, h=350)
S["qb10-f13"]=lambda: f_realia(form("Note planner",
    [("Papers done and gain so far",""),("The date I ran the cycle",""),
     ("What I found at step three",""),("The cause of each disagreement",""),
     ("What the study found",""),("My new weekly plan","")]), 560)
S["qb10-f14"]=lambda: f_scene(1000,450,
    people=[("linh",60,176,{}),("tomas",130,172,{"seated":True}),("hana",205,176,{"seated":True}),
     ("grace",290,172,{}),("priya",365,176,{"seated":True}),("mei",440,172,{"seated":True}),
     ("lars",515,176,{"seated":True}),("nour",590,170,{}),("ines",655,172,{}),
     ("marek",720,170,{}),("samira",785,172,{}),("junseo",845,170,{}),
     ("oksana",905,172,{}),("yusuf",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spreadsheet",350,198,0.24),
     ("printer",430,196,0.3),("clipboard",560,198,0.24),("table",650,0,1.0),
     ("padlock",860,198,0.22),("shelf",930,96,0.5)],
    board=(40,22,240,116,"COMPARE BEFORE YOU CHECK",[("step 3","uncomfortable"),("step 4","the cause")]),
    clockat=(300,34,22,15,0))
S["qb10-f15"]=lambda: f_chart([("immediately",6),("after marking uncertain answers",2),
    ("after comparing with somebody",1),("after a second listening",1),("I never use a key",1)])
S["qb10-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Thirty-eight papers, two marks, and one slow evening",
    table_html(["","Papers","Score"],
      [["January","1","23"],["February","12","23"],["March","26","24"],
       ["April","38","25"],["April, one full cycle","39","&mdash;"]])
    + "<p><b>One cycle record</b>, fully completed, fifty minutes for one recording.</p>"
    "<p><b>Two answer sheets</b> with four differences circled; three of the four caused by the "
    "wording of the questions.</p>"
    "<p><i>Every one of the thirty-eight was done the same way: listen, answer, check, move on.</i></p>",
    "Seven o'clock. Four months for two marks, and one evening for three causes."), 660)
