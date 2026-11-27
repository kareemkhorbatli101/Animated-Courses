# -*- coding: utf-8 -*-
"""Foreign Service English Book 3 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · The Fifth Committee ----------------
S["i10-f1"]=lambda: f_icons([("door","six committee doors"),("stamp","a chair's gavel"),
    ("essay","a draft with a symbol"),("meeting","the plenary hall"),
    ("folder","a report carried through"),("review","a plenary board"),
    ("timetable","a program of work"),("statement","a budget line"),
    ("clock","late evening"),("magnifier","two versions of a paragraph")], cols=5)
S["i10-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{}),("nadia",420,172,{})],
    props=[("desk",230,0,1.25),("essay",310,194,0.32),("phone",380,198,0.26),
     ("timetable",500,46,0.64),("door",680,70,0.9),("meeting",820,100,0.6)],
    clockat=(150,46,22,11,20))
S["i10-f3"]=lambda: f_icons([("meeting","a text agreed"),("essay","a report written"),
    ("folder","carried to the plenary"),("vote","a decision taken"),
    ("pen","a text amended"),("calendar","deferred")], cols=3)
S["i10-f4"]=lambda: f_realia(tbl("","The stage reported as the end",
    ["The stages","Which stage gets reported as the outcome","What goes wrong",
     "The sentence I will use"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The two-sentence form:</b>"), 580)
S["i10-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 10 &middot; committees and the plenary",
    "<p>The General Assembly allocates most items to its <b>six Main Committees</b>. <b>Every member "
    "state is entitled to be represented on each of them</b>, which is why a Main Committee can look "
    "and sound exactly like the Assembly.</p>"
    "<p><b>It is not the Assembly. A Main Committee considers, negotiates and recommends. The plenary "
    "decides.</b></p>"
    + table_html(["What the plenary may do with a recommendation"],
      [["<b>adopt</b> it"],["<b>amend</b> it and adopt it as amended"],
       ["<b>take note of</b> it, which is not endorsement"],
       ["<b>defer</b> the matter to a later session"]])
    + "<p style='border:1px solid #d9d4c9;padding:8px'><b>The two-sentence rule.</b> Until the "
    "plenary has acted, write two sentences: <i>The Committee has agreed a draft. The Assembly has "
    "not adopted anything.</i> The second one cannot be cut without the cut being visible.</p>"
    "<p><b>Why this goes wrong so often.</b> The committee room contains the same delegations and the "
    "same arguments. Agreement there feels final, and in most cases the plenary does adopt. <b>The "
    "exceptions are rare and expensive.</b></p>"
    "<p><b>One more distinction. Adopted without a vote</b> is an adoption. <b>Taken note of</b> is "
    "not an adoption at all, and the two appear in neighboring lines of the same records.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the General Assembly's structure of six Main "
    "Committees on which all member states are entitled to be represented, and its practice on the "
    "treatment of committee reports in plenary.</p>"))
S["i10-f6"]=lambda: f_realia(tbl("Word study","Setting two things against each other",
    ["<i>whereas</i>","<i>by contrast</i>","<i>while</i>"],
    [["The Committee recommends, <b>whereas</b> the plenary decides.",
      "The Committee negotiates. <b>By contrast</b>, the plenary normally does not.",
      "<b>While</b> the membership is the same, the function is not."],
     ["","",""]]), 580)
S["i10-f7"]=lambda: f_process(["Main Committee: all member states",
    "recommends — not a decision","plenary: adopt, amend, take note, defer",
    "only now is anything adopted"])
S["i10-f8"]=lambda: f_icons([("meeting","a text agreed"),("essay","a report"),
    ("folder","carried to the hall"),("review","a voting board"),
    ("pen","a paragraph amended"),("calendar","deferred")], cols=3)
S["i10-f9"]=lambda: f_realia(tbl("Stage sheet",None,
    ["Stage","Who does it","What can still change","✓"],
    [["informal consultations","delegations","everything","<b>✓</b>"],
     ["agreement in Main Committee","the Committee","the text, in plenary","<b>✓</b>"],
     ["report to the plenary","the Committee","&mdash;","&mdash;"],
     ["decision in plenary","<b>the Assembly</b>","nothing after this","&mdash;"],
     ["issue as a resolution","the Secretariat","&mdash;","&mdash;"]],
    note="<b>Report the stage, not the expectation.</b>"), 580)
S["i10-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{}),("nadia",420,172,{})],
    props=[("desk",230,0,1.25),("essay",310,194,0.32),("phone",380,198,0.24),
     ("timetable",500,46,0.62),("door",660,70,0.9),("meeting",820,100,0.58),
     ("jug",560,196,0.24)], clockat=(150,46,22,11,40))
S["i10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Cable A", None,
        "<p style='font-size:17px'><b>The Assembly has adopted the budget text.</b></p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Cable B", None, ["",""],
        [["stage reached","the Committee agreed a draft at 11:20"],
         ["stage not reached","<b>the Assembly has not adopted anything</b>"],
         ["the plenary may","adopt, amend, take note, defer"],
         ["expectation","Thursday 6 March &mdash; <b>an expectation</b>"],
         ["commitment","I will telephone within an hour of the plenary acting"]]), w)[0:3],
    w=920, h=290)
S["i10-f12"]=lambda: f_realia(doc("Two cables", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Cable 1</b><br>"
    "The Assembly has adopted the budget text, which was agreed this morning without a vote.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Cable 2</b><br>"
    "<b>The Committee agreed a draft text at 11:20 today, without a vote.</b><br>"
    "<b>The Assembly has not adopted anything.</b> The Committee recommends; the plenary decides.<br>"
    "<b>The plenary may:</b> adopt &middot; amend and adopt &middot; <b>take note of</b>, which is "
    "not endorsement &middot; defer.<br>"
    "<b>Expectation:</b> the plenary is expected to take the item up on Thursday 6 March. <b>That is "
    "an expectation, not a fact.</b><br>"
    "<b>Correction:</b> our message of 11:25 today described the text as adopted. That was the "
    "committee stage, and the description was wrong.</p>",
    "The correction goes at the foot, with the time of the message it corrects."))
S["i10-f13"]=lambda: f_realia(form("Cable planner",
    [("The stage reached",""),("The stage not reached",""),
     ("The deciding body may: 1",""),("2",""),("3",""),("4",""),
     ("The expectation, labeled",""),("Commitment",""),
     ("Correction, with the time of the earlier message","")]), 540)
S["i10-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{}),("nadia",200,172,{}),("hana",290,176,{}),
     ("bah",360,172,{}),("samira",430,176,{}),("ahmad",520,170,{}),
     ("yusuf",590,172,{}),("linh",660,170,{}),("ida",730,172,{}),
     ("karin",800,170,{}),("lucia",860,172,{}),("oskar",915,170,{}),
     ("caruso",960,174,{}),("nkemelu",55,176,{})],
    props=[("door",80,66,0.9),("essay",170,194,0.26),("timetable",330,40,0.6),
     ("tray",470,196,0.32),("meeting",700,100,0.56),("printer",600,198,0.36),
     ("cafe",845,198,0.34)], clockat=(250,34,22,12,0))
S["i10-f15"]=lambda: f_chart([("yes, and it was fine",8),("I have had it done to me",6),
    ("yes, and it was not",4),("no",3),("I am not sure",2)])
S["i10-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,192,0.3),("essay",390,192,0.3),
     ("note",470,194,0.22),("note",510,194,0.22),("note",550,194,0.22),
     ("lamp",180,140,0.42)], clockat=(120,46,22,19,0),
    panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 11 · Inscription Is Not Protection ----------------
S["i11-f1"]=lambda: f_icons([("certificate","a monument plaque"),("folder","a nomination dossier"),
    ("meeting","a committee in semicircle"),("worldmap","many markers"),
    ("signpost","a World Heritage sign"),("scaffolding","scaffolding on a wall"),
    ("essay","a conservation plan"),("tally","a list with red entries"),
    ("bus","a tourist coach"),("councilbuilding","a ministry letterhead")], cols=5)
S["i11-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{"seated":True}),
     ("nadia",400,172,{})],
    props=[("desk",230,0,1.3),("worldmap",330,44,0.68),("tally",380,196,0.28),
     ("note",450,196,0.24),("computer",580,142,0.44)], clockat=(150,46,22,14,0))
S["i11-f3"]=lambda: f_icons([("folder","a nomination submitted"),("meeting","a decision"),
    ("certificate","a plaque fixed"),("magnifier","a monitoring mission"),
    ("fine","added to the danger list"),("recycle","deleted from the List")], cols=3)
S["i11-f4"]=lambda: f_realia(tbl("","Three figures, three questions",
    ["The figure","The question it answers","Who quotes it","What it is used to prove"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The figure nobody quotes:</b>"), 580)
S["i11-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 11 &middot; heritage listing",
    "<p><b>Three figures, three questions.</b></p>"
    + table_html(["Figure","The question it answers"],
      [["<b>1,248</b>","How many <b>properties</b> are on the List?"],
       ["<b>170</b>","How many <b>States Parties have at least one</b> property inscribed?"],
       ["<b>196</b>","How many <b>States Parties</b> are there to the <b>Convention</b>?"]])
    + "<p>So <b>26 States Parties have no property on the List</b>, and the sentence <i>1,248 sites "
    "in 196 countries</i> is wrong twice over.</p>"
    + table_html(["Category","Number"],
      [["<b>cultural</b>","<b>972</b>"],["<b>natural</b>","<b>235</b>"],
       ["<b>mixed</b>","<b>41</b>"]])
    + "<p><b>What inscription does.</b> It records that a property meets the Convention's criteria. It "
    "brings recognition, a reporting cycle, and in some cases access to assistance.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>What inscription does not do.</b> It does "
    "<b>not</b> transfer sovereignty, create a right of entry for anybody, or oblige a state to any "
    "measure chosen by anybody else. <b>And it does not protect anything by itself.</b> The proof is "
    "a second list: <b>53 properties</b> are on the <b>List of World Heritage in Danger</b>, and a "
    "property can be <b>deleted from the List altogether</b>.</p>"
    "<p><b>The sentence worth keeping. It is the Danger List, not the main List, that tells you what "
    "inscription does not do.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: UNESCO's published World Heritage figures: 1,248 "
    "properties (972 cultural, 235 natural, 41 mixed) in 170 States Parties, out of 196 States "
    "Parties to the 1972 Convention, and 53 properties on the List of World Heritage in Danger. "
    "Figures are dated; take the current ones from UNESCO's own current list.</p>"))
S["i11-f6"]=lambda: f_realia(tbl("Word study","Plain and cleft",
    ["Plain","Cleft"],
    [["The Danger List tells you what inscription does not do.",
      "<b>It is</b> the Danger List <b>that</b> tells you&hellip;"],
     ["The date matters most.","<b>What matters most is</b> the date."],
     ["We need the base, not the figure.","<b>What we need is</b> the base, not the figure."],
     ["The committee recommends.",""],["The second sentence survives.",""]]), 560)
S["i11-f7"]=lambda: f_part("196 States Parties to the Convention",
    [("with at least one property inscribed",170,BLUE),("with none",26,AMBER)])
S["i11-f8"]=lambda: f_icons([("folder","a dossier"),("meeting","a committee deciding"),
    ("certificate","a plaque"),("magnifier","a monitoring mission"),
    ("fine","a red entry"),("recycle","struck through")], cols=3)
S["i11-f9"]=lambda: f_realia(tbl("Figures card",None,
    ["Figure","The question it answers","Source"],
    [["<b>1,248</b>","properties on the List (972 cultural, 235 natural, 41 mixed)",
      "UNESCO published figures"],
     ["<b>170</b>","States Parties with at least one property","same"],
     ["<b>196</b>","States Parties to the 1972 Convention","same"],
     ["<b>53</b>","properties on the List of World Heritage in Danger","same"]],
    note="<b>So 26 States Parties have none.</b> &nbsp; <b>What inscription does:</b> records "
    "criteria met; recognition; a reporting cycle; sometimes assistance. <b>What it does not do:</b> "
    "transfer sovereignty; create a right of entry; oblige any particular measure; protect anything "
    "by itself. &nbsp; <b>It is the Danger List, not the main List, that tells you what inscription "
    "does not do.</b>"), 600)
S["i11-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("nadia",400,172,{})],
    props=[("desk",230,0,1.3),("worldmap",330,44,0.66),("tally",380,196,0.28),
     ("note",450,196,0.22),("computer",570,142,0.42),("pen",500,198,0.2)],
    clockat=(150,46,22,14,0))
S["i11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p style='font-size:17px'><b>1,248 World Heritage sites.</b> A source of pride for "
        "humanity.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Note B", None, ["Figure","Question"],
        [["1,248","properties"],["170","States Parties with one"],
         ["196","States Parties"],["<b>53</b>","<b>in danger</b>"],
         ["26","have none"]]), w)[0:3],
    w=900, h=280)
S["i11-f12"]=lambda: f_realia(doc("Two speaking notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "There are 1,248 World Heritage sites in 196 countries, and we are proud to be among them.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1,248</b> properties &middot; <b>170</b> States Parties with at least one &middot; "
    "<b>196</b> States Parties to the Convention. <b>So 26 have none.</b><br>"
    "<b>What inscription does:</b> records criteria met; recognition; reporting; sometimes "
    "assistance.<br>"
    "<b>What it does not do:</b> transfer sovereignty; create a right of entry; <b>keep a wall "
    "standing</b>.<br>"
    "<b>The sentence to land</b> <i>(the only cleft in this note)</i>: <b>it is the Danger List, not "
    "the main List, that tells you what inscription does and does not do.</b></p>",
    "One figure, four questions, and one marked cleft."))
S["i11-f13"]=lambda: f_realia(form("Speaking note planner",
    [("Figure 1 / its question",""),("Figure 2 / its question",""),
     ("Figure 3 / its question",""),("Figure 4 / its question",""),
     ("The subtraction, out loud",""),("What it does",""),("What it does not do",""),
     ("One cleft sentence (mark it)","")]), 540)
S["i11-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("nadia",200,172,{}),
     ("hana",290,176,{"seated":True}),("bah",360,172,{"seated":True}),
     ("samira",430,176,{"seated":True}),("ahmad",520,170,{}),("yusuf",590,172,{}),
     ("linh",660,170,{}),("ida",730,172,{}),("karin",800,170,{}),
     ("lucia",860,172,{}),("oskar",915,170,{}),("caruso",960,174,{}),
     ("nkemelu",55,176,{})],
    props=[("desk",80,0,1.1),("worldmap",160,40,0.58),("board",350,36,0.64),
     ("table",460,0,1.0),("printer",580,198,0.36),("tally",250,196,0.24),
     ("cafe",845,198,0.34)], clockat=(300,34,22,15,0))
S["i11-f15"]=lambda: f_chart([("the biggest one",8),("the one with a story attached",6),
    ("the one repeated twice",4),("the smallest one",3),("none of them",2)])
S["i11-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,192,0.32),("note",400,194,0.24),
     ("folder",480,190,0.3),("pen",560,196,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,11,0))

# ---------------- Unit 12 · The Flag and the Port ----------------
S["i12-f1"]=lambda: f_icons([("country","a flag at the stern"),("badge","a port inspector"),
    ("coast","a coastline with a buoy"),("folder","a ship's certificate"),
    ("note","a detention notice"),("computer","a register of shipping"),
    ("book","a regional memorandum"),("tally","a membership list"),
    ("essay","a crew list"),("signpost","three nameplates")], cols=5)
S["i12-f2"]=lambda: f_scene(920,420, people=[("omar",320,176,{}),("nadia",420,172,{})],
    props=[("desk",250,0,1.25),("board",120,40,0.8),("tally",350,194,0.26),
     ("note",410,196,0.22),("ship",700,120,0.6),("window",830,56,0.9)],
    clockat=(560,46,22,10,0))
S["i12-f3"]=lambda: f_icons([("computer","registered"),("certificate","certified"),
    ("badge","an inspector boards"),("pen","a deficiency recorded"),
    ("note","a notice served"),("ship","released after repairs")], cols=3)
S["i12-f4"]=lambda: f_realia(tbl("","Which hat",
    ["The role","What we may do in it","What we may not","What changes between roles"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The sentence that explains the difference:</b>"), 580)
S["i12-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 12 &middot; three roles",
    "<p>The maritime organization has, on its own membership page, <b>176 Member States and three "
    "Associate Members</b>. The Associate Members are the <b>Faroe Islands, Hong Kong and "
    "Macao</b>; one of the organization's own tables lists Hong Kong under its China "
    "designation.</p>"
    "<p><b>So the membership figure is not a number of countries.</b> A sentence of the form <i>176 "
    "countries have agreed</i> is wrong in a way that is easy to check.</p>"
    + table_html(["Role","What it is","What it does"],
      [["<b>Flag State</b>","the state of registration","responsible for the ship's compliance with "
        "the standards it has accepted"],
       ["<b>Port State</b>","the state whose port the ship is in","may <b>inspect</b>, record "
        "<b>deficiencies</b> and <b>detain</b>"],
       ["<b>Coastal State</b>","the state off whose coast the ship is operating","has its own rights "
        "and interests in its adjacent waters"]])
    + "<p>One state is all three on different days. A position taken as a flag State may be the "
    "opposite of one taken as a port State. <b>That is not inconsistency; it is the structure.</b> "
    "What is inconsistency is failing to say which role you are speaking in.</p>"
    "<p><b>Port State control is regional, not global.</b> There are <b>ten regimes</b>: <b>eight "
    "regional memoranda of understanding and one agreement</b>. There is no single global "
    "inspectorate.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the maritime organization's own membership page, "
    "which gives 176 Member States and three Associate Members and names them; its published "
    "material on port State control describing ten regimes made up of eight memoranda and one "
    "agreement; and its Procedures for Port State Control as currently in force.</p>"))
S["i12-f6"]=lambda: f_realia(tbl("Word study &middot; review","The structure and a sentence from this book",
    ["Structure","A sentence"],
    [["past perfect","The text <b>had been</b> in circulation for nine days."],
     ["present perfect continuous","I <b>have been counting</b> since Tuesday."],
     ["modals of deduction","It <b>can't have</b> recognized anything."],
     ["passive with reporting verbs","The parties <b>are understood to have</b> settled."],
     ["hedging","<b>On the material we have</b>, it <b>appears to</b>&hellip;"],
     ["cleft",""]]), 580)
S["i12-f7"]=lambda: f_part("One state, three roles",
    [("flag State",1,BLUE),("port State",1,AMBER),("coastal State",1,GREEN)])
S["i12-f8"]=lambda: f_icons([("computer","registered"),("certificate","a certificate issued"),
    ("badge","an inspector boards"),("pen","a deficiency recorded"),
    ("note","a notice served"),("ship","sailing after repairs")], cols=3)
S["i12-f9"]=lambda: f_realia(tbl("Case summary &middot; detention of 3 March",None,
    ["#","Sentence","What it carries"],
    [["1","A vessel was detained in our port on the afternoon of Tuesday 3 March on three recorded "
      "deficiencies.","what happened, with a date"],
     ["2","<b>We are the port State. Astrand is the flag State. Marovia was the coastal State for "
      "the earlier leg.</b>","the roles"],
     ["3","Two of the three deficiencies concern certificates issued by the flag State; on the "
      "material we have they <b>appear to</b> have been current at issue.","the dispute, hedged"],
     ["4","Our inspectorate will report by Friday 6 March and I will telephone the Astrand embassy "
      "that day.","the action, with a time"]], numcols=(0,),
    note="<b>If you cannot say which role, do not send it.</b>"), 600)
S["i12-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{}),("hana",470,172,{"seated":True})],
    props=[("board",110,40,0.82),("desk",420,0,1.2),("folder",500,192,0.28),
     ("note",560,196,0.22),("jug",620,196,0.24),("ship",780,120,0.56)],
    clockat=(300,46,22,10,0))
S["i12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Summary A", None,
        "<p>It was detained because it had deficiencies and they were about certificates and it "
        "matters because of the flag.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Summary B", None, ["#","Carries"],
        [["1","what happened, with a date"],["2","<b>the roles</b>"],
         ["3","the dispute, hedged"],["4","the action, with a day"]], numcols=(0,),
        note="flag: Astrand &middot; port: us &middot; coastal: Marovia"), w)[0:3],
    w=900, h=280)
S["i12-f12"]=lambda: f_realia(doc("Two case summaries", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Summary 1</b><br>"
    "A ship has been detained. It had three deficiencies and two of them were about certificates. "
    "They say it is not their responsibility and we disagree. We will report in due course.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Summary 2</b><br>"
    "<b>1</b> A vessel was detained in our port on the afternoon of Tuesday 3 March on three "
    "recorded deficiencies.<br>"
    "<b>2 We are the port State. Astrand is the flag State. Marovia was the coastal State for the "
    "earlier leg.</b><br>"
    "<b>3</b> Two deficiencies concern certificates issued by the flag State; whether they remain "
    "valid <b>is a question for the flag State</b>.<br>"
    "<b>4</b> Our inspectorate reports by <b>Friday 6 March</b> and I will telephone the embassy "
    "that day.</p>",
    "Four sentences. The roles are in the second one, never at the end."))
S["i12-f13"]=lambda: f_realia(form("Summary planner",
    [("1 &mdash; what happened, with a date",""),("2 &mdash; the roles",""),
     ("3 &mdash; the dispute, hedged",""),("4 &mdash; the action, with a day",""),
     ("Our earlier position, by role",""),
     ("The membership figure, with its categories",""),("Which regime applies","")]), 540)
S["i12-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{}),("nadia",200,172,{}),("hana",290,176,{"seated":True}),
     ("bah",360,172,{"seated":True}),("samira",430,176,{"seated":True}),
     ("ahmad",520,170,{}),("yusuf",590,172,{}),("linh",660,170,{}),
     ("ida",730,172,{}),("karin",800,170,{}),("lucia",860,172,{}),
     ("oskar",915,170,{}),("caruso",960,174,{}),("nkemelu",55,176,{})],
    props=[("board",60,38,0.7),("desk",250,0,1.05),("note",330,196,0.22),
     ("table",450,0,1.0),("printer",580,198,0.36),("ship",740,118,0.5),
     ("window",880,56,0.84)], clockat=(220,34,22,11,0))
S["i12-f15"]=lambda: f_chart([("when it is contested",8),("always",6),
    ("only in writing",4),("I had not thought about it",3),("never",2)])
S["i12-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("folder",320,190,0.34),("note",400,194,0.22),
     ("essay",470,192,0.28),("ship",700,118,0.52),("lamp",180,140,0.42)],
    window_=(620,56,110,90), clockat=(120,46,22,17,10),
    panelbg="#242c38", floorbg="#30394a")
