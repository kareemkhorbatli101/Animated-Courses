# -*- coding: utf-8 -*-
"""Foreign Service English Book 3 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["i00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each from a desk officer's day",
    ["What you have","An example"],
    [["The past tenses","The text <b>had been</b> in circulation for nine days."],
     ["The present perfect","I <b>have counted</b> a hundred and ten in favor."],
     ["Modals of obligation","The court <b>is required to</b> order return."],
     ["Reported speech","The delegation <b>said it had read</b> the wrong column."],
     ["The passive","The report <b>was submitted</b> in June."],
     ["Conditionals","<b>If</b> the result comes back today, the clock starts today."]],
    note="Six boxes. This book adds attribution, hedging and emphasis."), 560)
S["i00-f2"]=lambda: f_realia(tbl("The three things this book adds", None,
    ["","What it does","A sentence"],
    [["<b>Attribution</b>","says whose statement it is",
      "The delegation <b>stated</b> that&hellip; &middot; the secretariat's page <b>gives</b>&hellip;"],
     ["<b>Hedging</b>","says how sure you are",
      "It <b>appears to</b>&hellip; &middot; <b>on the material we have</b>, it <b>may well</b>&hellip;"],
     ["<b>Emphasis</b>","says which part matters",
      "<b>What matters is</b> the date. &middot; <b>It was</b> the abstention <b>that</b>&hellip;"]],
    note="Without attribution a draft becomes the ministry's own view by accident. Without hedging "
    "it is overconfident or silent. Without emphasis the key sentence is the one the reader skips."),
    580)
S["i00-f3"]=lambda: f_realia(doc("Taped inside a folder",
    "Four sentences a desk officer says every week",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;That is the practice, not the text.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>When somebody quotes a custom as if it were "
    "written down.</span><br>"
    "<b>2 &nbsp;Two-thirds of those present and voting, which is not two-thirds of the "
    "membership.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before anybody starts counting.</span><br>"
    "<b>3 &nbsp;On the material we have, it appears to.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Instead of <i>yes</i> when yes is not yet "
    "available.</span><br>"
    "<b>4 &nbsp;The committee has agreed a draft. The Assembly has not adopted anything.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before the cable goes, not after.</span></p>"),
    520)
S["i00-f4"]=lambda: f_icons([("signature","the one who signs it"),
    ("quotemark","the one who is quoted from it"),
    ("magnifier","the one who disagrees with it"),
    ("archive","the one who finds it in two years")], cols=2)

# ---------------- Unit 1 · Nine Votes ----------------
S["i01-f1"]=lambda: f_icons([("meeting","fifteen nameplates"),("handsup","a raised hand"),
    ("review","a voting board"),("stamp","a gavel"),
    ("essay","a draft with brackets"),("pen","a paragraph deleted"),
    ("corner","two delegates in a corridor"),("square","a nameplate face down"),
    ("tally","three columns"),("clock","the chamber clock")], cols=5)
S["i01-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{}),("nadia",400,172,{})],
    props=[("desk",230,0,1.25),("essay",310,194,0.34),("tally",380,196,0.3),
     ("pen",450,198,0.24),("computer",580,142,0.46),("window",810,56,0.98)],
    clockat=(140,46,22,8,20))
S["i01-f3"]=lambda: f_icons([("corner","circulated"),("meeting","negotiated"),
    ("pen","deleted"),("essay","tabled"),
    ("vote","put to the vote"),("microphone","an explanation of vote")], cols=3)
S["i01-f4"]=lambda: f_realia(tbl("","The rule nobody can show you",
    ["The rule as people state it","Where they think it is written","What is actually written",
     "Why the difference matters"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The sentence I will use:</b>"), 580)
S["i01-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 1 &middot; voting in the Security Council",
    "<p>The arithmetic first.</p>"
    + table_html(["",""],
      [["<b>Members</b>","<b>15</b>"],["<b>Permanent members</b>","<b>5</b>"],
       ["<b>Elected members</b>","<b>10</b>, for two-year terms"],
       ["<b>Procedural question</b>","<b>9</b> affirmative votes"],
       ["<b>All other questions</b>","<b>9</b> affirmative votes, <b>including the concurring votes "
        "of the permanent members</b>"]])
    + "<p><b>Article 27(3)</b> requires, in its own words, nine affirmative votes <b>including the "
    "concurring votes of the permanent members</b> for decisions on all matters other than "
    "procedure.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>Now the practice beside the text.</b> Read "
    "strictly, those words would mean that an abstention by a permanent member blocks a decision. "
    "<b>That is not how the Article has been applied.</b> For decades a <b>voluntary abstention</b> "
    "has been treated as <b>not preventing</b> adoption, and the Court has reasoned along the same "
    "lines. <b>The Article has not been amended.</b></p>"
    "<p><b>What a desk officer must never write.</b> <i>Under Article 27, an abstention is not a "
    "veto.</i> The Article does not say that. The practice says it.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Charter of the United Nations, Article 27, "
    "and the published composition of the Council. The reading of a voluntary abstention is a matter "
    "of long practice, not of the Article's wording.</p>"))
S["i01-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["to abstain","abstention"],["to concur","concurrence"],["to adopt","adoption"],
     ["to amend",""],["to object",""],["to circulate",""]]), 440)
S["i01-f7"]=lambda: f_part("Fifteen members, one abstention",
    [("affirmative votes",9,GREEN),("other votes cast",5,BLUE),("abstained",1,AMBER)])
S["i01-f8"]=lambda: f_icons([("stamp","a court seal"),("review","an alert on screen"),
    ("corner","a side room"),("essay","a text on the table"),
    ("vote","a voting board"),("microphone","a statement after the vote")], cols=3)
S["i01-f9"]=lambda: f_realia(tbl("Voting record &middot; 4 March","Security Council",
    ["In favor","Against","Abstaining"],
    [["<b>14</b>","<b>0</b>","<b>1</b>"]],
    note="<b>Explanations of vote:</b> three delegations. &nbsp; "
    "<b>Before the meeting:</b> 24 Feb text circulated &middot; 2 Mar two paragraphs deleted "
    "&middot; 3 Mar four co-sponsors agreed &middot; 4 Mar tabled and adopted. "
    "<b>What the record does not show:</b> why the abstention was cast."), 560)
S["i01-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("nadia",400,172,{})],
    props=[("desk",230,0,1.25),("essay",310,194,0.34),("tally",380,196,0.3),
     ("book",450,192,0.3),("jug",520,196,0.26),("window",800,56,0.96)],
    clockat=(140,46,22,8,20))
S["i01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Paragraph A", None,
        "<p>After a short debate of eleven minutes the resolution was adopted unanimously. There "
        "was no opposition.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Paragraph B", None, ["When","What"],
        [["24 Feb","text circulated"],["2 Mar","two paragraphs deleted"],
         ["3 Mar","four co-sponsors agreed"],["4 Mar","14&ndash;0&ndash;1, adopted"]],
        note="<b>Not unanimous.</b> The Article requires concurring votes; the practice treats an "
        "abstention as not blocking."), w)[0:3],
    w=920, h=300)
S["i01-f12"]=lambda: f_realia(doc("Two drafted paragraphs", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Draft 1</b><br>"
    "After a short debate the resolution was adopted unanimously. Under Article 27 an abstention is "
    "not a veto.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Draft 2</b><br>"
    "<b>Before the meeting:</b> the text had circulated for nine days; two paragraphs had been "
    "deleted by 2 March; four states had agreed to co-sponsor.<br>"
    "<b>The vote: 14 in favor, none against, one abstention. Not unanimous.</b><br>"
    "<b>Article 27</b> requires the concurring votes of the permanent members. <b>In settled "
    "practice</b> a voluntary abstention is not treated as preventing adoption.<br>"
    "<b>After:</b> three explanations of vote; the abstaining delegation's is attached.</p>",
    "One of these can be contradicted by the official record."))
S["i01-f13"]=lambda: f_realia(form("Draft planner",
    [("What had happened before the meeting (1)",""),("(2)",""),("(3)",""),("(4)",""),
     ("The vote: in favor / against / abstaining",""),
     ("The rule, sentence 1 (the text)",""),("The rule, sentence 2 (the practice)",""),
     ("After the vote",""),("What this note does not say","")]), 520)
S["i01-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("nadia",200,172,{}),
     ("hana",290,176,{"seated":True}),
     ("samira",370,172,{"seated":True}),("bah",440,176,{"seated":True}),
     ("ahmad",530,170,{}),("yusuf",600,172,{}),("linh",670,170,{}),
     ("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("nkemelu",55,176,{})],
    props=[("desk",80,0,1.1),("essay",150,196,0.28),("board",330,36,0.66),
     ("printer",560,198,0.4),("tally",420,194,0.26),("cafe",840,198,0.38),
     ("table",640,0,1.0)], clockat=(250,34,22,9,0))
S["i01-f15"]=lambda: f_chart([("a way of avoiding a decision",8),("a vote against",6),
    ("not a vote at all",4),("the same as being absent",3),("I was not sure",2)])
S["i01-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,192,0.34),("tally",410,194,0.28),
     ("note",490,194,0.26),("jug",570,196,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,8,20))

# ---------------- Unit 2 · Present and Voting ----------------
S["i02-f1"]=lambda: f_icons([("tally","a tally sheet"),("calculator","a calculator"),
    ("chair","empty seats"),("square","a nameplate face down"),
    ("handsup","a raised hand"),("review","three totals"),
    ("data","a fraction written large"),("corner","two delegates with a list"),
    ("door","an empty seat"),("clock","the hall clock")], cols=5)
S["i02-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{"seated":True}),
     ("nadia",400,172,{})],
    props=[("desk",230,0,1.3),("tally",300,196,0.36),("calculator",380,198,0.3),
     ("book",450,192,0.3),("lamp",540,140,0.46)],
    window_=(700,56,140,100), clockat=(140,46,22,17,40),
    panelbg="#2b3340", floorbg="#39414d")
S["i02-f3"]=lambda: f_icons([("data","a fraction crossed out"),("tally","a lower fraction"),
    ("chair","an empty seat"),("handsup","a hand not raised"),
    ("pen","the tally adjusted"),("proof","a final figure")], cols=3)
S["i02-f4"]=lambda: f_realia(tbl("","The denominator",
    ["The figure","The numerator","The denominator","What people assume the base is"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The sentence I will put beside the figure:</b>"), 580)
S["i02-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 2 &middot; voting thresholds in the General Assembly",
    "<p><b>Article 18</b> of the Charter: decisions on <b>important questions</b> are made by a "
    "<b>two-thirds majority of the members present and voting</b>. Other questions are decided by a "
    "<b>majority of the members present and voting</b>.</p>"
    "<p>The decisive words are <b>present and voting</b>.</p>"
    + table_html(["A state that is","Counted?"],
      [["<b>absent</b>","not present, and <b>not counted</b>"],
       ["<b>abstaining</b>","present but not voting, and <b>not counted</b>"],
       ["voting <b>in favor</b> or <b>against</b>","present and voting, and <b>counted</b>"]])
    + "<p><b>The same vote, two bases.</b></p>"
    + table_html(["","On the membership","On those present and voting"],
      [["Base","<b>193</b>","<b>150</b>"],["Two-thirds threshold","<b>129</b>","<b>100</b>"],
       ["Votes in favor","110","110"],["Result","<b>fails</b>","<b>carries</b>"]])
    + "<p><b>What moves and what does not.</b> The fraction does not move: it is two-thirds. The "
    "<b>base</b> moves, and it moves during the vote. <b>A prediction is therefore about two "
    "unknowns</b>: how many will vote in favor, and how many will vote at all.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Charter of the United Nations, Article 18. "
    "The worked example is invented for teaching; the rule and its wording are not.</p>"))
S["i02-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["to count","a count"],["to calculate","a calculation"],["to abstain","an abstention"],
     ["to require",""],["to adjust",""],["to predict",""]]), 440)
S["i02-f7"]=lambda: f_matrix(["base","threshold","in favor","result"],
    [("on the membership", ["193","129","110","fails"]),
     ("on those present and voting", ["150","100","110","carries"])])
S["i02-f8"]=lambda: f_icons([("tally","the sheet filled in"),("data","a fraction crossed out"),
    ("chair","an empty seat"),("square","a nameplate down"),
    ("calculator","a lower figure"),("proof","a total circled")], cols=3)
S["i02-f9"]=lambda: f_realia(tbl("Vote count sheet &middot; as at 18:40","Important question",
    ["Group","In favor","Against","Abstaining"],
    [["Confirmed by telephone","104","9","22"],
     ["Reported second-hand","6","3","8"],
     ["Position unknown","&mdash;","&mdash;","&mdash;"],
     ["<b>Working total</b>","<b>110</b>","<b>12</b>","<b>30</b>"]],
    note="<b>Likely base: about 150. Threshold on that base: 100.</b> &nbsp; "
    "<b>Both figures go in the note, or neither.</b>"), 560)
S["i02-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("nadia",390,172,{})],
    props=[("desk",230,0,1.3),("tally",300,196,0.36),("calculator",370,198,0.3),
     ("book",440,192,0.3),("jug",500,196,0.24),("lamp",560,140,0.46)],
    window_=(720,56,130,100), clockat=(140,46,22,17,40),
    panelbg="#2b3340", floorbg="#39414d")
S["i02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Sheet A", None,
        "<p style='font-size:19px'><b>129</b></p><p>Threshold.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Sheet B", None, ["Base","Threshold","110 would"],
        [["193","129","fail"],["150","100","carry"],["139","93","carry"]],
        note="<b>The base is not fixed until the vote is taken.</b>"), w)[0:3],
    w=900, h=280)
S["i02-f12"]=lambda: f_realia(doc("Two drafted paragraphs", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Draft 1</b><br>"
    "A hundred and ten delegations support the text. The threshold is a hundred and twenty-nine. The "
    "text will therefore fail.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Draft 2</b><br>"
    "<b>The rule:</b> two-thirds of the members <b>present and voting</b>. Not two-thirds of the "
    "membership.<br>"
    "<b>The count:</b> 110 have indicated support; I have spoken to 104 directly.<br>"
    "<b>On a base of 193</b> the threshold is 129 and 110 would fail. <b>On a base of about 150</b> "
    "it is 100 and 110 would carry.<br>"
    "<b>Two unknowns:</b> how many vote in favor, and how many vote at all.<br>"
    "<b>Assessment:</b> on the positions as they stand, the text would carry on any realistic base. "
    "<b>The base is not fixed until the vote is taken.</b></p>",
    "One of these is still accurate the day after the vote."))
S["i02-f13"]=lambda: f_realia(form("Note planner",
    [("The rule, with its base",""),("Where the count stands, since when",""),
     ("Base 1 / threshold / result",""),("Base 2 / threshold / result",""),
     ("Unknown 1",""),("Unknown 2",""),("What this note does not do","")]), 520)
S["i02-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("nadia",200,172,{}),
     ("hana",290,176,{"seated":True}),("samira",360,172,{"seated":True}),
     ("bah",430,176,{"seated":True}),("ahmad",520,170,{}),("yusuf",590,172,{}),
     ("linh",660,170,{}),("ida",730,172,{}),("karin",800,170,{}),
     ("lucia",860,172,{}),("oskar",915,170,{}),("caruso",960,174,{}),
     ("nkemelu",55,176,{})],
    props=[("desk",80,0,1.1),("tally",150,196,0.3),("flipchart",300,42,0.66),
     ("table",420,0,1.05),("printer",570,198,0.38),("board",700,38,0.6),
     ("cafe",840,198,0.36)], clockat=(240,34,22,19,0),
    panelbg="#2b3340", floorbg="#39414d")
S["i02-f15"]=lambda: f_chart([("yes, and I had to correct it",8),
    ("yes, and nobody noticed",6),("no",4),("I avoid giving figures",3),
    ("I am not sure",2)])
S["i02-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("tally",320,194,0.3),("essay",400,192,0.32),
     ("calculator",490,196,0.28),("note",570,194,0.26),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,0))

# ---------------- Unit 3 · Credentials Are Not Recognition ----------------
S["i03-f1"]=lambda: f_icons([("certificate","a signed letter"),("essay","a list of names"),
    ("meeting","a committee of nine"),("badge","a delegate's badge"),
    ("podium","a seat and a nameplate"),("stamp","a rubber stamp"),
    ("folder","marked provisional"),("handshake","a report handed over"),
    ("chair","two claims, one seat"),("quotemark","a headline")], cols=5)
S["i03-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{"seated":True}),
     ("nadia",400,172,{})],
    props=[("desk",230,0,1.3),("computer",300,142,0.48),("computer",420,142,0.48),
     ("essay",500,194,0.3),("pen",560,198,0.22)], clockat=(140,46,22,11,0))
S["i03-f3"]=lambda: f_icons([("desk","presented at a counter"),("meeting","examined"),
    ("vote","the report adopted"),("podium","a seat taken"),
    ("councilbuilding","a ministry statement"),("review","two letterheads")], cols=3)
S["i03-f4"]=lambda: f_realia(tbl("","Two decisions, one word",
    ["What people hear","Decision one, and who takes it","Decision two, and who takes it",
     "The sentence that keeps them apart"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What I say when pressed:</b>"), 580)
S["i03-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 3 &middot; credentials",
    "<p>The <b>Credentials Committee</b> has <b>nine members</b>, appointed at the beginning of each "
    "session on the proposal of the President. It <b>examines the credentials of representatives</b> "
    "and <b>reports</b> to the Assembly, which takes a decision on the report.</p>"
    + table_html(["","The credentials decision","The recognition decision"],
      [["What it is about","<b>who may represent a state</b> in this body","whether a state "
        "<b>accepts a government</b> as the government of another state"],
       ["Who takes it","the <b>Assembly</b>, on the Committee's report","<b>each state</b>, "
        "individually"],
       ["Where","in that chamber, under its rules","in capitals, by whatever means each state uses"],
       ["What it produces","a <b>report</b> and a decision on participation","a <b>statement</b>, a "
        "practice, or silence"]])
    + "<p><b>The two are not the same decision.</b> A credentials decision settles "
    "<b>participation</b>. It is not an act of recognition by the Assembly, and not by any member "
    "state, each of which decides that question for itself.</p>"
    "<p>They can be <b>connected politically</b>, and in a contested case the connection is the whole "
    "argument. <b>That is a different statement from saying that one is the other.</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>What we do not say.</b> That a body has "
    "<i>recognized a government</i> when there has been a decision on credentials. That our own "
    "position follows from such a decision. Anything about what another state has concluded from "
    "it.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the General Assembly's rules of procedure and "
    "practice on credentials and the Credentials Committee, including its composition of nine "
    "members appointed at the start of each session.</p>"))
S["i03-f6"]=lambda: f_realia(tbl("Word study","Verb, act, person or paper",
    ["Verb","The act","The person or paper"],
    [["to accredit","accreditation","an accredited <b>representative</b>"],
     ["to represent","representation","a <b>representative</b>"],
     ["to recognize","recognition","&mdash;"],
     ["to credential","",""],["to participate","",""]]), 520)
S["i03-f7"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("The chamber", None, ["",""],
        [["a committee of nine","examines the papers"],["a report","is adopted"],
         ["a seat","is taken"],["what is settled","<b>participation</b>"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Capitals", None, ["",""],
        [["each state","decides for itself"],["a statement","or a practice, or silence"],
         ["what is settled","<b>recognition</b>"],
         ["the link","a political connection, <b>not the same decision</b>"]]), w)[0:3],
    w=920, h=280)
S["i03-f8"]=lambda: f_icons([("desk","credentials presented"),("meeting","papers examined"),
    ("vote","the report adopted"),("podium","a seat taken"),
    ("councilbuilding","a ministry statement"),("quotemark","a headline")], cols=3)
S["i03-f9"]=lambda: f_realia(tbl("Briefing card &middot; credentials decision",None,
    ["What was decided","What was not decided"],
    [["A report of the Credentials Committee was adopted.","No act of recognition was taken."],
     ["Participation in the work of that body is settled.","Recognition is a matter for each state."],
     ["Nine members examined the papers.","No member state's position follows from this."]],
    note="<b>The two may be connected politically. They are not the same decision.</b> &nbsp; "
    "<b>If asked about our own position:</b> stated above my level &mdash; Information Department, "
    "ext. 311. &nbsp; <b>Do not say:</b> <i>in practice it amounts to recognition</i>."), 580)
S["i03-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("nadia",400,172,{}),("hana",720,172,{})],
    props=[("desk",230,0,1.3),("computer",300,142,0.48),("computer",420,142,0.48),
     ("book",500,192,0.3),("door",640,70,0.88),("folder",760,192,0.3)],
    clockat=(140,46,22,11,0))
S["i03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Card A", None,
        "<p style='font-size:17px'><b>The delegation has been accepted.</b></p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Card B", None, ["Decided","Not decided"],
        [["a report on credentials","no act of recognition"],
         ["participation","recognition &mdash; each state"],
         ["<i>connected politically</i>","<b>not the same decision</b>"]],
        note="Own position: Information Dept, ext. 311. Do not say <i>in practice, yes</i>."),
        w)[0:3],
    w=900, h=280)
S["i03-f12"]=lambda: f_realia(doc("Two notes to a press officer", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The delegation's credentials have been accepted and it has taken its seat.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1</b> The Assembly adopted a report of its Credentials Committee, a committee of <b>nine "
    "members</b>. <b>This settles participation in the work of that body.</b><br>"
    "<b>2</b> <b>Recognition of a government is a matter for each state</b>, taken individually. The "
    "Assembly has taken no act of recognition.<br>"
    "<b>Do not join these with a comma.</b><br>"
    "<b>Do not say:</b> <i>the Assembly recognized the government</i>; <i>in practice it amounts to "
    "recognition</i>.</p>",
    "The instruction about the comma is the most useful line on the page."))
S["i03-f13"]=lambda: f_realia(form("Note planner",
    [("Sentence one",""),("Sentence two",""),("On the relationship between them",""),
     ("If asked about our own position (office)",""),("Do not say: 1",""),("2","")]), 520)
S["i03-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("nadia",200,172,{}),
     ("hana",290,176,{"seated":True}),("samira",360,172,{"seated":True}),
     ("bah",430,176,{"seated":True}),("ahmad",520,170,{}),("yusuf",590,172,{}),
     ("linh",660,170,{}),("ida",730,172,{}),("karin",800,170,{}),
     ("lucia",860,172,{}),("oskar",915,170,{}),("caruso",960,174,{}),
     ("nkemelu",55,176,{})],
    props=[("desk",80,0,1.1),("computer",150,142,0.4),("board",330,36,0.66),
     ("table",450,0,1.0),("printer",580,198,0.38),("cafe",840,198,0.36),
     ("book",500,192,0.26)], clockat=(250,34,22,12,0))
S["i03-f15"]=lambda: f_chart([("proof of who represents a state",8),
    ("recognition of a government",6),("a formality",4),
    ("a visa for delegates",3),("I had not thought about it",2)])
S["i03-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,192,0.32),("essay",400,192,0.32),
     ("note",490,194,0.26),("phone",560,196,0.26),("lamp",180,140,0.42)],
    clockat=(120,46,22,16,0))
