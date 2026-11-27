# -*- coding: utf-8 -*-
"""Throughline Book 4 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 ----------------
S["pd10-f1"]=lambda: f_icons([("tally","urgency from evidence"),("meeting","a guiding coalition"),
    ("card","a vision on a card"),("podium","a presentation"),
    ("barrier","an obstacle removed"),("star","a short-term win"),
    ("form","a change written into a procedure"),("spreadsheet","a slide with a percentage"),
    ("magnifier","tracing a citation"),("signature","three signatures")], cols=5)
S["pd10-f2"]=lambda: f_scene(760,380,
    people=[("nkemelu",200,172,{}),("anders",290,170,{})],
    props=[("desk",400,0,1.0),("form",470,150,0.26),("flipchart",580,142,0.3),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"EIGHT STEPS",
      [("ticked","6"),("step 5","circled")]),
    clockat=(360,34,22,4,10))
S["pd10-f3"]=lambda: f_icons([("tally","urgency from evidence"),
    ("meeting","a guiding coalition"),("card","a vision on a card"),
    ("podium","fourteen presentations"),("barrier","an obstacle left in place"),
    ("form","a change anchored in a procedure")], cols=3)
S["pd10-f4"]=lambda: f_realia(tbl("Team research","One obstacle each",
    ["The obstacle","Who owns it","What they would lose","How long it has been there"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>what we talk about instead.</b>"), 660)
S["pd10-f5"]=lambda: f_realia(doc("Lindhurst · project office note 10",
    "Eighteen months of change",
    "<p><b>The book.</b> J. P. Kotter, <i>Leading Change</i>, <b>Harvard Business School Press, "
    "1996</b>, developing an article published in <b>Harvard Business Review, March–April "
    "1995</b>. Eight steps, <b>in order</b>.</p>"
    + table_html(["Step","Us"],
      [["<b>1</b> establish urgency","<b>done</b> — three quarters of declining margin, shown"],
       ["<b>2</b> create a guiding coalition","<b>done</b> — six senior people, nine meetings"],
       ["<b>3</b> develop a vision and strategy","<b>done</b> — one paragraph on a card"],
       ["<b>4</b> communicate the vision","<b>done</b> — <b>14 presentations, 380 people</b>"],
       ["<b>5</b> empower action by <b>removing obstacles</b>","<b>not done</b>"],
       ["<b>6</b> generate short-term wins","<b>done</b> — two, both real"],
       ["<b>7</b> consolidate gains","partly"],
       ["<b>8</b> anchor the new approaches","<b>not done</b>"]])
    + "<p style='border:1.5px solid #b07a1e;padding:8px'><b>The obstacle we did not remove.</b> An "
    "approval rule from <b>2017</b> requires <b>three signatures</b> above a threshold and adds a "
    "<b>median of eleven days</b> to every purchase. <b>Nobody defended it in public. Nobody "
    "removed it either</b>, because all three signatories were in the room.</p>"
    "<p><b>Step five is not a communication step. It is a subtraction step.</b> You create urgency "
    "<b>by showing people evidence</b>. You empower action <b>by taking something away from "
    "somebody</b>.</p>"
    + table_html(["Our opening slide","What can be checked"],
      [["“70 % of change programmes fail”","<b>not in the book</b>"],
       ["attributed to this book","traced through <b>three decks</b> to nothing"],
       ["what the book says","<b>more than half</b> the companies observed <b>failed in the first "
        "phase</b>"],
       ["status of the slide","<b>withdrawn</b>"]]),
    "Source: J. P. Kotter, Leading Change, Harvard Business School Press, 1996, developing Leading "
    "Change: Why Transformation Efforts Fail, Harvard Business Review, March–April 1995. The "
    "book is a practitioner account based on the author's observation of organizations in the "
    "course of his consulting work; it does not report a controlled study and publishes neither "
    "sample nor measures. The widely circulated figure of 70 % does not appear in it."), 640)
S["pd10-f6"]=lambda: f_realia(tbl("Word study","<i>By</i> + gerund",
    ["Structure","What it says","Example"],
    [["<i>by</i> + gerund","the method",
      "Urgency is created <b>by showing</b> people real figures."],
     ["<i>without</i> + gerund","the method not used",
      "We changed the talk <b>without removing</b> the rule."],
     ["<i>rather than by</i>","the method rejected",
      "<b>By subtracting</b> a rule <b>rather than by</b> adding a slide."],
     ["<i>the only way … is by</i>","the sole method",
      "<b>The only way to</b> empower action <b>is by</b> removing something."],
     ["<i>by means of</i>","",""],["<i>through</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pd10-f7"]=lambda: f_chart([("4 communicate",41),("1 urgency",12),("2 coalition",9),
    ("6 short-term wins",7),("3 vision",4),("7 consolidate",3),("5 remove obstacles",0),
    ("8 anchor",0)], unit="days")
S["pd10-f8"]=lambda: f_icons([("tally","figures being shown"),("meeting","a coalition"),
    ("card","a vision"),("podium","a presentation"),("barrier","an obstacle lifted away"),
    ("form","a procedure rewritten")], cols=3, numbered=False)
S["pd10-f9"]=lambda: f_realia(tbl("Change record · eighteen months",
    "Eight steps, with the days spent and what was removed",
    ["Step","What we did","Days","What we removed"],
    [["1 urgency","three quarters of declining margin, shown to 380 people","12","—"],
     ["2 coalition","six decision-makers, nine meetings","9","—"],
     ["3 vision","four pages cut to one paragraph","4","—"],
     ["4 communicate","14 presentations","<b>41</b>","—"],
     ["<b>5 empower</b>","<b>not attempted</b>","<b>0</b>","<b>nothing</b>"],
     ["6 short-term wins","two, both real","7","—"],
     ["7 consolidate","partly","3","—"],
     ["<b>8 anchor</b>","<b>not attempted</b>","<b>0</b>","<b>nothing</b>"]],
    note="<b>One rule unchanged since 2017.</b>"), 700)
S["pd10-f10"]=lambda: f_scene(860,400,
    people=[("anders",110,174,{}),("wei",320,176,{"seated":True}),
     ("okonjo",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("spreadsheet",250,148,0.24),("signature",350,150,0.26),
     ("form",520,150,0.26),("shelf",760,92,0.5)],
    board=(40,18,230,120,"TALKING, SUBTRACTING",
      [("days presenting","41"),("days removing","0")]),
    clockat=(700,34,22,4,10))
S["pd10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report A","Momentum",
      "<p><i>Engagement improved and the programme built real momentum.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>No <i>by</i> clause anywhere. Nothing was "
      "removed.</p>"), 380),
    lambda w,h: f_realia(doc("Report B","Eight steps and a column",
      "<p>Days against each step, and a column headed <b>what was removed</b> that is empty in "
      "seven rows.</p>"), 380),
    w=820, h=300, lt="MOMENTUM", rt="METHOD")
S["pd10-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","The first slide",
      "<p><i>70 % of change programmes fail.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Attributed to a 1996 book. Not in it.</p>"), 380),
    lambda w,h: f_realia(doc("After","The replacement",
      "<p><i>Six steps of eight, eighteen months, three signatures.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Smaller, ours, and defensible word by word.</p>"),
      380),
    w=820, h=300, lt="UNSOURCED", rt="OURS")
S["pd10-f13"]=lambda: f_realia(form("Change planner",
    [("What changed",""),("The method, with a <i>by</i> clause",""),
     ("The obstacle that remains",""),("Who owns it",""),
     ("Days talking against days removing",""),("The one subtraction requested","")],
    note="Six boxes. Hand it to a partner; they ask what was removed."), 560)
S["pd10-f14"]=lambda: f_scene(1000,450,
    people=[("nkemelu",60,176,{}),("anders",135,172,{}),("okonjo",210,176,{"seated":True}),
     ("wei",290,172,{"seated":True}),("hana",370,176,{"seated":True}),
     ("sofia",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("signature",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"TALKING, SUBTRACTING",
      [("days talking","41"),("days removing","0")]),
    clockat=(278,34,22,4,10))
S["pd10-f15"]=lambda: f_chart([("a form",5),("an approval step",3),("a meeting",7),
    ("a report",4),("nothing in living memory",14)])
S["pd10-f16"]=lambda: f_realia(doc("On a desk in September",
    "What was on it at six o'clock",
    "<p><b>A list of eight steps</b>, six with ticks.</p>"
    "<p><b>A deck</b> whose first slide has a percentage crossed out.</p>"
    "<p><b>An approval form</b> with three signature boxes.</p>"
    "<p><b>A sheet reading 41 and 0.</b></p>"
    "<p><b>A book from 1996.</b></p>"
    "<p><b>A note of three sentences.</b> <i>Every step we completed cost time and every step we "
    "skipped would have cost somebody standing, which is the whole finding and it took eighteen "
    "months to produce. Nobody spoke in favor of the three-signature rule and nobody needed to, "
    "because silence is free and effective. I have withdrawn the seventy percent slide, and the "
    "honest replacement is a smaller sentence about us: six steps of eight, forty-one days of "
    "talking, zero subtractions.</i></p>",
    "Six o'clock. Six of eight, and one rule unchanged since 2017."), 620)

# ---------------- Unit 11 ----------------
S["pd11-f1"]=lambda: f_icons([("book","a book from 1939"),("signature","an editor's name"),
    ("podium","a lecture in another country"),("review","a cycle being renamed"),
    ("clipboard","four letters on a card"),("noentry","one letter replaced"),
    ("form","a procedure with a short citation"),("logsheet","48 entries, no conclusions"),
    ("magnifier","a catalog search"),("note","a corrected citation")], cols=5)
S["pd11-f2"]=lambda: f_scene(760,380,
    people=[("nkemelu",200,172,{}),("hana",290,170,{})],
    props=[("desk",400,0,1.0),("form",470,150,0.26),("book",580,150,0.26),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"FOUR WORDS",
      [("errors in them","3"),("years in the document","9")]),
    clockat=(360,34,22,9,5))
S["pd11-f3"]=lambda: f_icons([("book","a 1939 book, a three-part circle"),
    ("podium","a visitor lecturing, 1950"),("review","a diagram renamed"),
    ("clipboard","the third letter replaced"),("note","the objection in print, 1993"),
    ("logsheet","a ticked box, no conclusion")], cols=3)
S["pd11-f4"]=lambda: f_realia(tbl("Team research","Check your own citations",
    ["The citation as written","Can the source be found","What the source actually says",
     "What we use it to mean"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="At the foot: <b>where the citation came from, if not from the source.</b>"), 660)
S["pd11-f5"]=lambda: f_realia(doc("Lindhurst · project office note 11",
    "Four words in a procedure",
    "<p><b>QP-04, section 2.</b> “Improvement shall follow the PDCA cycle (Deming, 1950).” "
    "<b>Nine years in the document. Three errors in four words.</b></p>"
    + table_html(["Year","What is documented"],
      [["<b>1939</b>","W. A. Shewhart, <i>Statistical Method from the Viewpoint of Quality "
        "Control</i>, published by a government department's graduate school and <b>edited by W. "
        "Edwards Deming</b>. A circle of three activities — <b>specification, production, "
        "inspection</b>. <b>The letters P, D, C and A do not appear.</b>"],
       ["<b>1950</b>","Deming lectures to engineers and teaches a cycle he calls <b>the Shewhart "
        "cycle</b>. <b>There is no 1950 publication of his to cite.</b>"],
       ["after","others <b>rename the diagram after the visitor</b>, and later use four letters"],
       ["<b>1993</b>","in <i>The New Economics</i> Deming sets out <b>plan, do, study, act</b>, "
        "states that <b>“check” is the wrong word</b>, and <b>still calls it the Shewhart "
        "cycle</b>"]])
    + "<p style='border:1.5px solid #b07a1e;padding:8px'><b>Three years of our own form.</b> "
    "<b>48</b> cycles logged. <b>48</b> with <i>plan</i> completed. <b>48</b> with <i>do</i> "
    "completed. <b>48</b> with the check box ticked. <b>0</b> with a written conclusion. <b>11</b> "
    "problems recurred.</p>"
    "<p><b>Every tick was true.</b> The box asks whether the action was done, not whether it "
    "worked. <b>The citation error and the practice error are one error.</b></p>"
    "<p><b>What we changed.</b> Fifty-one words of citation instead of four, and one required "
    "field: <i>what did we learn, and what is the evidence?</i> <b>Of the first nine cycles, two "
    "concluded that the action had not worked.</b></p>",
    "Source: W. A. Shewhart, Statistical Method from the Viewpoint of Quality Control, 1939, edited "
    "by W. E. Deming, presenting a repeating cycle of specification, production and inspection in a "
    "text on the statistical quality control of manufactured product; and W. E. Deming, The New "
    "Economics, 1993, setting out plan–do–study–act, objecting to the word "
    "“check”, and attributing the cycle to Shewhart. The content of the 1950 lectures is "
    "known largely through secondary accounts."), 640)
S["pd11-f6"]=lambda: f_realia(tbl("Word study","Attribution",
    ["Structure","Certainty","Example"],
    [["<i>is set out in</i>","highest — you have the page",
      "The cycle <b>is set out in</b> Shewhart (1939)."],
     ["<i>is usually attributed to</i>","reports the common claim",
      "It <b>is usually attributed to</b> Deming."],
     ["<i>himself credited</i>","the author's own attribution",
      "Deming <b>himself credited</b> Shewhart."],
     ["<i>is widely known as</i>","names the usage without endorsing it",
      "It <b>is widely known as</b> PDCA."],
     ["<i>has been misattributed to</i>","",""],
     ["<i>reaches us through secondary accounts</i>","",""]],
    note="Two rows left empty on purpose."), 640)
S["pd11-f7"]=lambda: f_chart([("plan completed",48),("do completed",48),("check box ticked",48),
    ("a written conclusion",0),("new form: cycles so far",9),
    ("new form: found the action had not worked",2)], unit="cycles")
S["pd11-f8"]=lambda: f_icons([("book","a 1939 book"),("signature","an editor's name"),
    ("podium","a lecture in 1950"),("review","a diagram renamed"),
    ("clipboard","four letters, the third replaced"),
    ("form","a required conclusion field")], cols=3, numbered=False)
S["pd11-f9"]=lambda: f_realia(tbl("Improvement log · QP-04",
    "Three years · forty-eight cycles · the last column is empty",
    ["#","Plan","Do","Check","Conclusion"],
    [["1–8","complete","complete","<b>✓</b>","<b>—</b>"],
     ["9–16","complete","complete","<b>✓</b>","<b>—</b>"],
     ["17–24","complete","complete","<b>✓</b>","<b>—</b>"],
     ["25–32","complete","complete","<b>✓</b>","<b>—</b>"],
     ["33–40","complete","complete","<b>✓</b>","<b>—</b>"],
     ["41–48","complete","complete","<b>✓</b>","<b>—</b>"]],
    note="<b>Eleven problems recurred.</b>"), 680)
S["pd11-f10"]=lambda: f_scene(860,400,
    people=[("hana",110,174,{}),("wei",320,176,{"seated":True}),
     ("nkemelu",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("form",250,148,0.26),("book",350,148,0.26),
     ("logsheet",520,150,0.24),("shelf",760,92,0.5)],
    board=(40,18,230,120,"FORTY-EIGHT",[("ticks","48"),("conclusions","0")]),
    clockat=(700,34,22,9,5))
S["pd11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Form A","A check box",
      "<p><i>Action completed — check.</i> ☑</p>"
      "<p style='font-size:12px;color:#6b6861'>Asks whether we did it.</p>"), 380),
    lambda w,h: f_realia(doc("Form B","A required field",
      "<p><i>What did we learn, and what is the evidence?</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Asks whether it worked. Two of nine said no.</p>"),
      380),
    w=820, h=300, lt="CONFIRM", rt="STUDY")
S["pd11-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Citation A","Four words",
      "<p><i>(Deming, 1950)</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Wrong name, empty date, rejected letter.</p>"),
      380),
    lambda w,h: f_realia(doc("Citation B","Fifty-one words",
      "<p><i>… the cycle of specification, production and inspection set out in Shewhart "
      "(1939), a statistics text on manufactured product, edited by W. E. Deming; taught by Deming "
      "from 1950 and widely renamed after him; see Deming (1993) for plan–do–study–"
      "act and his objection to “check”.</i></p>"), 380),
    w=820, h=300, lt="FOUR WORDS", rt="FIFTY-ONE")
S["pd11-f13"]=lambda: f_realia(form("Citation planner",
    [("The citation as written",""),("What the source actually says",""),
     ("Who it should be attributed to",""),
     ("What reaches us only through secondary accounts",""),("The word in our form",""),
     ("What our log shows","")],
    note="Six boxes. Hand it to a partner; they ask what the operational consequence is."), 560)
S["pd11-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("nkemelu",135,172,{}),("wei",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("anders",370,176,{"seated":True}),
     ("sofia",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("logsheet",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"WHO ACTUALLY SAID IT",
      [("ticks","48"),("conclusions","0")]),
    clockat=(278,34,22,9,5))
S["pd11-f15"]=lambda: f_chart([("a tick that the action was done",13),
    ("a written conclusion with evidence",3),("a signature only",6),("nothing at all",5),
    ("we have no form",7)])
S["pd11-f16"]=lambda: f_realia(doc("On a desk in November",
    "What was on it at seven o'clock",
    "<p><b>A procedure</b> open at a circled bracket.</p>"
    "<p><b>A 1939 book</b> showing a three-part circle, and <b>a 1993 book</b>.</p>"
    "<p><b>A log of forty-eight rows</b> with an empty last column.</p>"
    "<p><b>A new form</b> with one required field.</p>"
    "<p><b>A note of three sentences.</b> <i>The attribution and the practice were one mistake: the "
    "word we inherited asks whether we did the thing, and the word the author wanted asks whether "
    "the thing worked. Every one of our forty-eight ticks was honest, which is the part that should "
    "frighten anybody who relies on a form. Fifty-one words of citation cost less than eleven "
    "problems coming back, and I would rather be called pedantic in a meeting than explain the same "
    "fault twice.</i></p>",
    "Seven o'clock. Four words, three errors, forty-eight ticks."), 620)

# ---------------- Unit 12 ----------------
S["pd12-f1"]=lambda: f_icons([("dashboard","a performance domain"),("scales","a written tolerance"),
    ("balance","a value statement"),("book","a guide that refuses tailoring"),
    ("star","a competence element"),("speechbubble","a hedged claim"),("review","a spiral turn"),
    ("danger","a graded recommendation"),("proof","a yes-or-no criterion"),
    ("logsheet","a cycle with a conclusion")], cols=5)
S["pd12-f2"]=lambda: f_scene(760,380,
    people=[("nkemelu",200,172,{}),("okonjo",290,170,{})],
    props=[("desk",400,0,1.0),("clipboard",470,148,0.26),("stamp",580,152,0.24),
     ("shelf",60,92,0.5)],
    board=(410,16,290,126,"ELEVEN DOCUMENTS",
      [("taken","34"),("left","61")]),
    clockat=(360,34,22,3,20))
S["pd12-f3"]=lambda: f_icons([("book","the document and its edition"),
    ("clipboard","what we took"),("noentry","what we left"),("note","the reason"),
    ("signature","a name and a date"),("stamp","a signed declaration")], cols=3)
S["pd12-f4"]=lambda: f_realia(tbl("Team research","Your own one page",
    ["The document","Its edition","Elements it has","Elements we practice","Who decided"],
    [["","","","",""],["","","","",""],["","","","",""],["","","","",""]],
    note="At the foot: <b>the row nobody wants on the page.</b>"), 680)
S["pd12-f5"]=lambda: f_realia(doc("Lindhurst · project office note 12",
    "Method decisions, control system programme",
    "<p><b>The standard that asks for this page.</b> <b>ISO/IEC/IEEE 12207</b>, <i>Software life "
    "cycle processes</i>, in the edition held here, dated <b>2017</b>. It offers <b>two kinds of "
    "conformance — full and tailored</b> — and requires a tailored claim to <b>declare "
    "the tailoring</b>. <b>You may leave things out. You may not leave them out quietly.</b></p>"
    + table_html(["#","Document, edition","Took","Left","Who decided"],
      [["1","body-of-knowledge guide, 7th ed, 2021","<b>3</b>","9","C. Nkemelu, Jan"],
       ["2","structured method, 7th ed, 2023","<b>5</b>","2","A. Holm, Feb"],
       ["3","the 2001 manifesto, 68 words","<b>4</b>","<b>0</b>","C. Nkemelu, Feb"],
       ["4","⚠ sprint guide, Nov 2020","<b>7</b>","4","C. Nkemelu, Mar"],
       ["5","competence baseline, v4, 2015","<b>6</b>","23","E. Okonjo, Mar"],
       ["6","industry report, first published 1994","<b>0</b>","1","C. Nkemelu, Apr"],
       ["7","the 1988 spiral paper","<b>1</b>","3","A. Holm, May"],
       ["8","⚠ gateway process, 2007","<b>2</b>","4","E. Okonjo, Jun"],
       ["9","the 1990 gate article","<b>2</b>","2","C. Nkemelu, Jul"],
       ["10","the 1996 change book","<b>4</b>","4","E. Okonjo, Sep"],
       ["11","the 1939 cycle, as edited","<b>0</b>","4","H. Sato, Nov"],
       ["","<b>Total</b>","<b>34</b>","<b>61</b>",""]])
    + "<p><b>Thirty-four of ninety-five. That is not a confession; it is a description.</b></p>"
    "<p style='border:1.5px solid #b07a1e;padding:8px'><b>The two rows with a warning.</b> Row 4: "
    "that guide states its elements are <b>indivisible</b> — <b>we hold seven of eleven and "
    "have stopped using its name</b>. Row 8: we are reviewed under the gateway process and act on "
    "its recommendations, <b>but its report is confidential to the sponsor and the project manager "
    "has never read one</b>.</p>"
    "<p><b>A name and a date against every line.</b> <b>An omission with no author becomes a rule "
    "in about eighteen months.</b> Three of the eleven rows are already being questioned, which is "
    "only possible because somebody's name is beside them.</p>",
    "Source: ISO/IEC/IEEE 12207, Systems and software engineering — Software life cycle "
    "processes, in the edition held here dated 2017. The standard defines life cycle processes and "
    "provides for claims of full or tailored conformance, a tailored claim requiring the tailoring "
    "to be declared. It is written for software life cycle processes, prescribes no life cycle "
    "model, document set or method, and offers no judgment as to whether a given tailoring decision "
    "is sound."), 660)
S["pd12-f6"]=lambda: f_realia(tbl("Word study","Eleven structures, one per unit",
    ["Unit","Structure","Example"],
    [["1","abstract noun → people","<b>Who</b> communicates <b>what</b>, to <b>whom</b>?"],
     ["2","<i>must … unless</i>","It must be escalated <b>unless</b> it is within tolerance."],
     ["3","<i>over</i>, <i>rather than</i>","Working software <b>over</b> documentation."],
     ["4","present simple for rules","The review <b>is held</b> at the end of the sprint."],
     ["5","<i>has shown that</i>","She <b>has shown that</b> she can hold a difficult meeting."],
     ["6","hedging","It <b>is claimed that</b> most projects fail."],
     ["7","iteration","<b>On each pass</b>, the biggest risk first."],
     ["8","recommendation strength","<b>It is essential that</b> this is done <b>by</b> 14 April."],
     ["9","criteria","Four criteria, <b>any one of which</b> stops the project."],
     ["10","",""],["11","",""]],
    note="Two rows left empty on purpose."), 660)
S["pd12-f7"]=lambda: f_chart([("5 competence baseline",23),("1 the 2021 guide",9),
    ("4 sprint guide",4),("8 gateway process",4),("10 change book",4),("11 the 1939 cycle",4),
    ("7 spiral paper",3),("2 structured method",2),("9 gate article",2),
    ("6 industry report",1),("3 the 2001 manifesto",0)], unit="elements left")
S["pd12-f8"]=lambda: f_icons([("dashboard","a performance domain"),
    ("scales","a written tolerance"),("danger","a graded recommendation"),
    ("proof","a must-meet criterion"),("barrier","an obstacle being removed"),
    ("logsheet","a conclusion written in a log")], cols=3, numbered=False)
S["pd12-f9"]=lambda: f_realia(tbl("Method declaration · register",
    "Eleven rows · two warnings · one signature line",
    ["#","Document, edition","Took","Left","Reason","Decided"],
    [["1","guide, 7th ed, 2021","3","9","three pass the Monday test","Nkemelu, Jan"],
     ["2","method, 7th ed, 2023","5","2","no written tolerance","Holm, Feb"],
     ["3","manifesto, 2001","4","0","taken whole","Nkemelu, Feb"],
     ["4","⚠ sprint guide, 2020","7","4","<b>refuses tailoring</b>","Nkemelu, Mar"],
     ["5","baseline, v4, 2015","6","23","six assessed honestly","Okonjo, Mar"],
     ["6","report, 1994","0","1","<b>method unpublished</b>","Nkemelu, Apr"],
     ["7","spiral paper, 1988","1","3","risk-first ordering only","Holm, May"],
     ["8","⚠ gateway, 2007","2","4","<b>report never read</b>","Okonjo, Jun"],
     ["9","gate article, 1990","2","2","must-meet added","Nkemelu, Jul"],
     ["10","change book, 1996","4","4","steps 5 and 8 not attempted","Okonjo, Sep"],
     ["11","cycle, 1939","0","4","citation corrected","Sato, Nov"],
     ["","<b>Total</b>","<b>34</b>","<b>61</b>","",""]],
    note="<b>Tailored conformance · signed ………… date ………"
    "…</b>"), 720)
S["pd12-f10"]=lambda: f_scene(860,400,
    people=[("nkemelu",110,174,{}),("okonjo",320,176,{"seated":True}),
     ("hana",450,176,{"seated":True})],
    props=[("table",200,0,1.1),("clipboard",250,148,0.26),("book",350,148,0.26),
     ("stamp",520,152,0.24),("shelf",760,92,0.5)],
    board=(40,18,230,120,"TAILORED, NOT FULL",
      [("taken","34"),("left","61")]),
    clockat=(700,34,22,3,20))
S["pd12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Statement A","One sentence",
      "<p><i>We follow industry best practice.</i></p>"
      "<p style='font-size:12px;color:#6b6861'>Cannot be wrong, which is the problem with it.</p>"),
      380),
    lambda w,h: f_realia(doc("Statement B","Eleven rows",
      "<p>Two totals, two warning symbols, a name and a date on every line, and a signature under "
      "the words <b>tailored conformance</b>.</p>"), 380),
    w=820, h=300, lt="UNCHECKABLE", rt="SIGNABLE")
S["pd12-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Before","Three lines",
      "<p><i>The programme is delivered in compliance with industry best practice and recognized "
      "international standards.</i></p>"), 380),
    lambda w,h: f_realia(doc("After","A register",
      "<p><b>34 of 95</b>, eleven documents, two rows marked ⚠, every omission with a decider "
      "and a date.</p>"
      "<p style='font-size:12px;color:#6b6861'>Could be proved wrong from our own files.</p>"),
      380),
    w=820, h=300, lt="A BROCHURE", rt="A DECLARATION")
S["pd12-f13"]=lambda: f_realia(form("Declaration planner",
    [("The documents and editions",""),("Elements taken",""),("Elements left",""),
     ("The reason for each omission",""),("The decider and the date",""),
     ("The kind of conformance claimed","")],
    note="Six boxes. Hand it to a partner; they ask who decided the omissions."), 560)
S["pd12-f14"]=lambda: f_scene(1000,450,
    people=[("nkemelu",60,176,{}),("okonjo",135,172,{}),("hana",210,176,{"seated":True}),
     ("anders",290,172,{"seated":True}),("wei",370,176,{"seated":True}),
     ("sofia",445,172,{}),("lars",520,176,{"seated":True}),("ines",595,170,{}),
     ("priya",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("tomas",850,170,{}),("hanna",910,172,{}),("adeel",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("stamp",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"TOOK, LEFT",[("took","34"),("left","61")]),
    clockat=(278,34,22,3,20))
S["pd12-f15"]=lambda: f_chart([("nearly all of it",2),("about half",7),("less than half",12),
    ("we do not know",9),("we claim one and use another",4)])
S["pd12-f16"]=lambda: f_realia(doc("On a desk in December",
    "What was on it at six o'clock",
    "<p><b>An eleven-row register</b>, totals 34 and 61.</p>"
    "<p><b>A signed declaration</b> under the words <i>tailored conformance</i>.</p>"
    "<p><b>A thirteen-page guide</b> and <b>a gateway recommendation list</b>.</p>"
    "<p><b>A note of three sentences.</b> <i>Eleven books of method come down to four columns — "
    "what we took, what we left, why, and who decided — and the fourth is the one everybody "
    "drops. Thirty-four of ninety-five is a number somebody can disprove with our own files, which "
    "is the only reason it is worth writing; one sentence about best practice cannot be disproved "
    "and is therefore worth nothing. The two rows with warnings on them are the rows that make the "
    "other nine believable.</i></p>",
    "Six o'clock. Eleven documents, two totals, one signature."), 620)
