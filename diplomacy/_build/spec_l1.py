# -*- coding: utf-8 -*-
"""Foreign Service English Book 6 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["l00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each from a legal adviser's working day",
    ["What you have","An example"],
    [["Deeming","The body <b>is deemed to</b> have decided by consensus."],
     ["The perfect passive","The rules <b>have never been adopted</b> in final form."],
     ["Exceptives","Applied <b>save for</b> draft rule 42."],
     ["Two readings","<b>On one reading</b> the list is fixed."],
     ["Apposition","the consultative parties, <b>that is, those entitled to participate</b>"],
     ["Reporting absence","<b>recorded as not having submitted</b>"]],
    note="Six boxes. This book is about people: who may bind the State, whose conduct it answers "
    "for, and what its own words do to it afterwards."), 580)
S["l00-f2"]=lambda: f_realia(tbl("Three things that are not the same", None,
    ["","What it is","What happens without it"],
    [["<b>Capacity</b>","the power, in law, to commit the State by this act",
      "the act <b>does not bind the State</b>"],
     ["<b>Authority</b>","permission, within the ministry, to do it",
      "the act may bind the State and end a career"],
     ["<b>Instructions</b>","what you have been told to say",
      "the act binds, and is wrong"]],
    note="<b>All three, or the sentence does not commit anybody.</b>"), 600)
S["l00-f3"]=lambda: f_realia(doc("Taped inside a folder",
    "Four sentences a legal adviser writes every week",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;The signature of a person without full powers does not bind the State.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>When somebody has signed something at a "
    "conference.</span><br>"
    "<b>2 &nbsp;The conduct of an organ is attributable to the State even if it exceeded its "
    "authority.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>When a ministry wants to say somebody acted without "
    "permission.</span><br>"
    "<b>3 &nbsp;The character of a statement is determined by the effect it purports to produce, "
    "and not by its name.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>When a document is called something "
    "convenient.</span><br>"
    "<b>4 &nbsp;The claim is the State's, and the State is not obliged to bring it.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>The hardest of the four to say out loud.</span></p>"))
S["l00-f4"]=lambda: f_realia(doc("Before a sentence leaves the building",
    "Four questions, in this order",
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>1 &nbsp;Who is saying it, and in what "
    "capacity?</b><br>A person, an organ, or the State. Only one of them is on the paper.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>2 &nbsp;What status has the text we are "
    "relying on?</b><br>Binding, commended, noted, or published as a guide to practice.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>3 &nbsp;What will this sentence be evidence "
    "of, later?</b><br>Your own conduct is read back to you.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>4 &nbsp;Whose is the right, and whose the "
    "discretion?</b><br>Rarely the same person, and almost never the person asking you.</p>"
    "<p style='background:#f2efe8;padding:9px'><b>Only now may it go out.</b></p>"))

# ---------------- Unit 1 · Who May Bind the State ----------------
S["l01-f1"]=lambda: f_icons([("certificate","sealed full powers"),("signature","two signature blocks"),
    ("meeting","a head of delegation nameplate"),("pen","a minister signing"),
    ("essay","an instrument of ratification"),("envelope","a letter of transmittal"),
    ("quotemark","subject to confirmation"),("phone","a call to a capital"),
    ("folder","without legal effect"),("handshake","a signature and a list of names")], cols=5)
S["l01-f2"]=lambda: f_scene(920,420, people=[("haddad",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("book",315,192,0.3),("certificate",390,196,0.24),
     ("signature",460,196,0.24),("lamp",180,140,0.42),("window",815,56,0.98)],
    clockat=(140,46,22,5,20))
S["l01-f3"]=lambda: f_icons([("pen","full powers drawn up"),("door","produced at a desk"),
    ("stamp","a text adopted"),("signature","an instrument signed"),
    ("worried","an act without capacity"),("envelope","a letter of confirmation")], cols=3)
S["l01-f4"]=lambda: f_realia(tbl("","Who can commit your office",
    ["The commitment","Who signed","What gave them the power",
     "What would have happened otherwise"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The signature nobody checked:</b>"), 580)
S["l01-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Legal note 1 &middot; capacity to conclude treaties",
    "<p><b>The instrument.</b> The <b>Vienna Convention on the Law of Treaties</b>, done at Vienna "
    "on <b>23 May 1969</b>, entered into force on <b>27 January 1980</b>. It has about <b>116 "
    "parties</b>, on the depositary's record. Many of its provisions are <b>widely regarded as "
    "reflecting customary international law</b>; the extent to which any particular article does so "
    "is a separate question, dealt with in Unit 11.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>1.</b> A person is considered as "
    "representing a State for the purpose of adopting or authenticating the text of a treaty, or of "
    "expressing the consent of the State to be bound, if <b>(a)</b> he <b>produces appropriate full "
    "powers</b>; or <b>(b)</b> it appears from the <b>practice</b> of the States concerned, or from "
    "other circumstances, that they intended that person to represent the State and <b>to dispense "
    "with full powers</b>.<br><br>"
    "<b>2. In virtue of their functions and without having to produce full powers</b>, the "
    "following are considered as representing their State &hellip;</p>"
    + table_html(["Who","For what purpose"],
      [["<b>Heads of State, Heads of Government and Ministers for Foreign Affairs</b>",
        "<b>all acts</b> relating to the conclusion of a treaty"],
       ["<b>Heads of diplomatic missions</b>","<b>adopting the text</b> of a treaty <b>between the "
        "accrediting State and the State to which they are accredited</b>"],
       ["<b>Representatives accredited to a conference or organization</b>",
        "<b>adopting the text</b> of a treaty <b>in that conference or organization</b>"]])
    + "<p><b>Read the second and third rows again.</b> A head of mission may adopt a bilateral "
    "text. <b>A head of mission may not, on that basis, express the State's consent to be bound.</b> "
    "<b>The categories are narrow and the purposes are narrower.</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'>An act relating to the conclusion of a treaty "
    "performed by a person who <b>cannot be considered</b> as authorized to represent a State "
    "<b>is without legal effect unless afterwards confirmed by that State</b>.</p>"
    "<p><b>What that means for us.</b> The act does not bind us. <b>It does not bind the other State "
    "either.</b> And confirmation is available, which means the question <i>was the signature "
    "valid?</i> is in practice the question <i>do we wish to be bound?</i> &mdash; a question for "
    "this Ministry.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Vienna Convention on the Law of Treaties "
    "of 23 May 1969, in force 27 January 1980, Articles 7, 8 and 12, and the depositary's published "
    "figure of about 116 parties. The customary status of individual provisions is not stated "
    "here.</p>"))
S["l01-f6"]=lambda: f_realia(tbl("Word study","Authority and capacity",
    ["Form","What it establishes","Example"],
    [["in virtue of their functions","capacity from office","<b>In virtue of their functions</b>, "
      "Ministers for Foreign Affairs&hellip;"],
     ["is considered as representing","the legal conclusion","A person <b>is considered as "
      "representing</b> a State if&hellip;"],
     ["for the purpose of","the act the capacity covers","<b>for the purpose of</b> adopting the "
      "text"],
     ["produces appropriate full powers","capacity by document","&nbsp;"],
     ["is without legal effect unless","the consequence, with its escape","&nbsp;"],
     ["to dispense with","agreement that the document is unnecessary","&nbsp;"]]), 620)
S["l01-f7"]=lambda: f_part("Capacity, in virtue of functions",
    [("all acts: three offices",3,GREEN),("adopting a bilateral text: heads of mission",1,BLUE),
     ("adopting a text at a conference: delegates",1,AMBER)])
S["l01-f8"]=lambda: f_icons([("pen","full powers drawn"),("door","produced"),
    ("stamp","a text adopted"),("signature","an instrument signed"),
    ("worried","without capacity"),("envelope","confirmation")], cols=3)
S["l01-f9"]=lambda: f_realia(doc("FULL POWERS", None,
    "<p>I, <b>[full name]</b>, Minister for Foreign Affairs and Expatriates, hereby authorize</p>"
    "<p style='text-align:center'><b>[full name and title of officer]</b></p>"
    "<p><b>for the purpose of adopting the text</b> of the <b>Convention on [title]</b> at the "
    "Conference convened at Geneva on <b>14 April</b>.</p>"
    "<p>Done at Damascus, this [date].</p>"
    "<p style='text-align:right'>[signature]<br><b>Minister for Foreign Affairs and "
    "Expatriates</b> &nbsp; <i>[seal]</i></p>",
    "This document authorizes one act and no other."))
S["l01-f10"]=lambda: f_scene(940,430, people=[("haddad",320,176,{}),
     ("bah",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("book",300,192,0.3),("certificate",375,196,0.24),
     ("phone",445,196,0.22),("signature",510,196,0.22),("window",805,56,0.96)],
    clockat=(140,46,22,5,40))
S["l01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Full powers A", None,
        "<p>&hellip; authorize <b>[officer]</b> <b>for the purpose of signature</b>.</p>"),
        w)[0:3],
    lambda w,h: f_realia(doc("Full powers B", None,
        "<p>&hellip; authorize <b>[officer]</b> <b>for the purpose of adopting the text</b> of the "
        "<b>Convention on [title]</b> at the Conference convened at Geneva on <b>14 April</b>.<br>"
        "<b>These powers do not extend to expressing the consent of the State to be bound.</b></p>"),
        w)[0:3],
    w=920, h=300)
S["l01-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The signature of 14 April was <b>invalid</b>, the Head of Delegation not having been authorized "
    "by this Ministry to sign.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1 Capacity.</b> Our delegate was accredited to the Conference and is therefore considered as "
    "representing the State <b>for the purpose of adopting the text in that Conference</b> — and for "
    "no other purpose.<br>"
    "<b>2 The consequence.</b> The act <b>is without legal effect unless afterwards confirmed by "
    "this State</b>, and <b>binds neither State</b>.<br>"
    "<b>3 Authority</b> — <i>internal use only.</i><br>"
    "<b>4 The decision</b> whether to confirm is for this Ministry.</p>",
    "The first says the thing failed; the second leaves a door, and the door is ours."))
S["l01-f13"]=lambda: f_realia(form("Legal note planner",
    [("1 &nbsp;What happened, with dates",""),("2 &nbsp;Capacity, in the instrument's words",""),
     ("3 &nbsp;The consequence, and whom it binds",""),
     ("4 &nbsp;Authority &mdash; <b>internal only</b>",""),
     ("5 &nbsp;The decision, and where it belongs","")]), 520)
S["l01-f14"]=lambda: f_scene(980,440,
    people=[("bah",120,176,{}),("haddad",200,176,{"seated":True}),
     ("nadia",290,176,{}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("signature",150,196,0.22),("certificate",250,196,0.22),
     ("camera",560,198,0.3),("phone",430,196,0.2),("table",640,0,1.0),
     ("cafe",840,198,0.38)],
    clockat=(240,32,22,5,40))
S["l01-f15"]=lambda: f_chart([("any ambassador",7),("the head of delegation",5),
    ("only the three offices",3),("anybody with full powers",4),
    ("I had not thought about it",3)])
S["l01-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("envelope",395,194,0.24),
     ("certificate",465,196,0.24),("folder",535,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,10,0))

# ---------------- Unit 2 · Treaty or Not ----------------
S["l02-f1"]=lambda: f_icons([("book","a bound treaty"),("essay","a stapled memorandum"),
    ("signature","two signature blocks"),("quotemark","the Parties shall"),
    ("pen","the Participants will"),("calendar","entry into force"),
    ("note","coming into operation"),("stamp","a registration stamp"),
    ("balance","a dispute clause"),("magnifier","one clause read with a ruler")], cols=5)
S["l02-f2"]=lambda: f_scene(920,420, people=[("haddad",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("book",310,192,0.3),("essay",375,194,0.24),
     ("logsheet",445,196,0.22),("computer",600,142,0.44),("window",815,56,0.98)],
    clockat=(140,46,22,10,45))
S["l02-f3"]=lambda: f_icons([("quotemark","shall"),("pen","will"),
    ("calendar","entry into force"),("note","coming into operation"),
    ("balance","a dispute clause"),("stamp","registration")], cols=3)
S["l02-f4"]=lambda: f_realia(tbl("","The document whose title misleads",
    ["The instrument","What it is called","What its drafting suggests","Who decided"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The one I have been treating wrongly:</b>"), 580)
S["l02-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Legal note 2 &middot; characterizing an instrument",
    "<p><b>The definition.</b> The Vienna Convention on the Law of Treaties of <b>23 May 1969</b> "
    "provides, <b>for the purposes of that Convention</b>:</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><i>Treaty</i> means an <b>international "
    "agreement</b> concluded <b>between States</b> in <b>written form</b> and <b>governed by "
    "international law</b>, whether embodied in a single instrument or in two or more related "
    "instruments and <b><u>whatever its particular designation</u></b>.</p>"
    "<p><b>Four elements, and one of them does the work.</b> An agreement; between States; in "
    "writing; <b>governed by international law</b>. The first three are usually obvious. <b>The "
    "fourth is the question</b>, and it turns on <b>what the parties intended</b>, read off the "
    "drafting.</p>"
    + table_html(["A treaty tends to use","A non-binding instrument tends to use"],
      [["<b>shall</b>","<b>will</b>"],
       ["<b>the Parties</b>","<b>the Participants</b> or <b>the Signatories</b>"],
       ["<b>enter into force</b>","<b>come into operation</b> / <b>come into effect</b>"],
       ["a <b>dispute settlement</b> clause","no such clause"],
       ["provision for <b>registration</b>","none"],
       ["<b>done at</b>, with formal signature blocks","<b>signed at</b>, with names and titles"]])
    + "<p><b>These are indicators and not a code.</b> A single <i>shall</i> does not make a treaty. "
    "<b>The one thing that never decides the question is the title.</b></p>"
    "<p><b>What the four words prevent.</b> Without <i>whatever its particular designation</i>, a "
    "ministry could place itself outside the law of treaties by choosing a cover. <b>The phrase is "
    "the reason the question is answerable at all</b>, and it cuts both ways.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What a non-binding instrument still "
    "does.</b> It records what was agreed, in terms both sides can quote. It commits the signatories "
    "<b>politically</b>. It establishes <b>practice</b>, which has evidential value. And it may "
    "create expectations that cost real money to disappoint.</p>"
    "<p><b>The one question to ask.</b> Not <i>what is it called</i> and not <i>is it binding</i>. "
    "<b>Ask: is this agreement governed by international law, and what in the drafting shows "
    "it?</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Vienna Convention on the Law of Treaties "
    "of 23 May 1969, Article 2(1)(a), and its Article 3. The drafting indicators reflect widely "
    "published practice and are not provisions of the Convention.</p>"))
S["l02-f6"]=lambda: f_realia(tbl("Word study","Definition and characterization",
    ["Form","What it does","Example"],
    [["means","introduces a definition","<i>Treaty</i> <b>means</b> an international "
      "agreement&hellip;"],
     ["for the purposes of","limits the definition's reach","<b>for the purposes of</b> the present "
      "Convention"],
     ["whatever its particular designation","excludes the title from the test","&nbsp;"],
     ["is to be characterized by reference to","states the test","&nbsp;"],
     ["turns on whether","names the operative question","&nbsp;"],
     ["is evidenced by","links the test to the material","&nbsp;"]]), 620)
S["l02-f7"]=lambda: f_matrix(["treaty drafting","non-binding drafting"],
    [("obligation", ["shall","will"]),
     ("the signatories", ["the Parties","the Participants"]),
     ("commencement", ["entry into force","coming into operation"]),
     ("disputes", ["a dispute clause","none"]),
     ("registration", ["provided for","none"]),
     ("the title", ["not on the scales","not on the scales"])])
S["l02-f8"]=lambda: f_icons([("quotemark","shall"),("pen","will"),
    ("calendar","entry into force"),("note","coming into operation"),
    ("balance","a dispute clause"),("stamp","registration")], cols=3)
S["l02-f9"]=lambda: f_realia(tbl("Characterization sheet", None,
    ["Indicator","What this instrument does"],
    [["obligatory language","<b>shall</b>, in paragraphs 2, 3 and 6"],
     ["the signatories","<b>the Parties</b>"],
     ["commencement","an article headed <b>Entry into force</b>"],
     ["dispute settlement","<b>paragraph 9: arbitration</b>"],
     ["registration","not provided for"],
     ["title","<i>Memorandum of Understanding</i> &mdash; <b>not an indicator</b>"]],
    note="<b>Provisional view:</b> the terms are consistent with an intention that the agreement be "
    "governed by international law.<br><b>What we ask the other side:</b> the Ministry would welcome "
    "confirmation of the intended character.<br><b>The title is not an indicator.</b>"), 600)
S["l02-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("haddad",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("book",300,192,0.3),("essay",365,194,0.24),
     ("computer",470,142,0.42),("board",640,40,0.5),("window",805,56,0.96)],
    clockat=(140,46,22,11,20))
S["l02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Minute A", None,
        "<p>The instrument is not a treaty, being a memorandum of understanding.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Minute B", None,
        "<p>Four indicators: <b>shall</b> &middot; <b>the Parties</b> &middot; entry into force "
        "&middot; arbitration. <b>Provisional view:</b> the terms are consistent with an intention "
        "that it be governed by international law. <b>We would welcome confirmation</b> of the "
        "intended character.</p>"), w)[0:3],
    w=920, h=300)
S["l02-f12"]=lambda: f_realia(doc("Two minutes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Minute 1</b><br>"
    "The instrument is a memorandum of understanding and therefore does not require legal "
    "clearance.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Minute 2</b><br>"
    "<b>1</b> The test: governed by international law, <b>whatever its particular designation</b>."
    "<br><b>2</b> The indicators, in a table, with the title marked <i>not an indicator</i>.<br>"
    "<b>3</b> Provisional view: consistent with an intention that it be binding.<br>"
    "<b>4</b> What we propose to ask the other side.<br>"
    "<b>5</b> What follows on each answer, including no answer.</p>",
    "One of these decides the question from the cover."))
S["l02-f13"]=lambda: f_realia(form("Minute planner",
    [("1 &nbsp;The test",""),("2 &nbsp;The indicators",""),
     ("3 &nbsp;Provisional view",""),("4 &nbsp;The question for the other side",""),
     ("5 &nbsp;If yes",""),("If no",""),("If no answer","")]), 520)
S["l02-f14"]=lambda: f_scene(980,440,
    people=[("bah",120,176,{}),("haddad",200,176,{"seated":True}),
     ("nadia",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,192,0.26),("printer",560,198,0.4),
     ("shelf",425,120,0.42),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(285,24,220,108,"THE BALANCE",
      [("shall / will",""),("Parties / Participants",""),("the title","off to one side")]),
    clockat=(240,30,22,11,30))
S["l02-f15"]=lambda: f_chart([("the title",8),("the verbs",4),("the dispute clause",3),
    ("the intention of the parties",4),("I had not thought about it",3)])
S["l02-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("envelope",395,194,0.24),
     ("book",465,192,0.28),("folder",540,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,0))

# ---------------- Unit 3 · Commended to the Attention of Governments ----------------
S["l03-f1"]=lambda: f_icons([("essay","articles annexed to a resolution"),
    ("councilbuilding","a ministry building"),("podium","a courthouse"),
    ("door","a provincial office"),("car","a police vehicle"),
    ("badge","a contractor beside an emblem"),("worried","acting against orders"),
    ("balance","a tribunal bench"),("shelf","a volume of citations"),
    ("magnifier","an article and an instruction compared")], cols=5)
S["l03-f2"]=lambda: f_scene(920,420, people=[("haddad",330,176,{"seated":True}),
     ("sofia",430,172,{})],
    props=[("desk",240,0,1.25),("essay",315,194,0.26),("note",385,194,0.22),
     ("shelf",600,120,0.5),("lamp",180,140,0.42),("window",815,56,0.98)],
    clockat=(140,46,22,9,15))
S["l03-f3"]=lambda: f_icons([("handsup","an organ acting"),("stamp","conduct attributed"),
    ("book","an obligation identified"),("balance","a breach established"),
    ("essay","responsibility arising"),("coins","reparation made")], cols=3)
S["l03-f4"]=lambda: f_realia(tbl("","What your office answers for",
    ["What was done","Was there authority","Did the institution answer","What the instruction said"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What the instruction was worth:</b>"), 580)
S["l03-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Legal note 3 &middot; attribution of conduct",
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The status of the text, first and not "
    "last.</b> The <b>International Law Commission</b> adopted the <b>Articles on Responsibility of "
    "States for Internationally Wrongful Acts</b> in <b>2001</b>. By resolution <b>56/83 of 12 "
    "December 2001</b> the General Assembly <b>took note of</b> the articles, <b>annexed them to the "
    "resolution</b>, and <b>commended them to the attention of Governments without prejudice to the "
    "question of their future adoption</b>. <b>They are therefore not a treaty.</b> They bind nobody "
    "as such, and they are among the most frequently cited texts in international law.</p>"
    "<p><b>Attribution: the basic rule.</b> The conduct of <b>any State organ</b> shall be "
    "considered <b>an act of that State</b>, whether the organ exercises <b>legislative, executive, "
    "judicial or any other</b> functions, <b>whatever position it holds</b>, and <b>whatever its "
    "character</b> as an organ of the central Government or of a <b>territorial unit</b>.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The rule that surprises everybody.</b> The "
    "conduct of an organ of a State, or of a person or entity empowered to exercise elements of "
    "governmental authority, <b>shall be considered an act of the State</b> if the organ, person or "
    "entity <b>acts in that capacity</b>, <b><u>even if it exceeds its authority or contravenes "
    "instructions</u></b>.</p>"
    "<p><b>Why the rule is drafted that way.</b> Not out of severity. If contravening instructions "
    "broke attribution, <b>any State could escape responsibility by issuing instructions and "
    "tolerating their breach</b>, and the injured State would have to prove the content of another "
    "State's internal orders. <b>The rule puts the risk on the State that organized the office.</b></p>"
    + table_html(["","The question"],
      [["<b>1 Attribution</b>","Is the conduct attributable to the State?"],
       ["<b>2 Breach</b>","Does that conduct <b>constitute a breach of an international "
        "obligation</b> of the State?"]])
    + "<p><b>Both are required.</b> Attribution alone establishes nothing.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Articles on Responsibility of States for "
    "Internationally Wrongful Acts, adopted by the International Law Commission in 2001 and annexed "
    "to General Assembly resolution 56/83 of 12 December 2001; Articles 4, 5 and 7. The Articles are "
    "not a treaty and are not binding as such.</p>"))
S["l03-f6"]=lambda: f_realia(tbl("Word study","Attribution",
    ["Form","What it asserts","Example"],
    [["is attributable to","the legal attachment of conduct","the conduct <b>is attributable to</b> "
      "the State"],
     ["shall be considered an act of","the Articles' own formulation","&nbsp;"],
     ["acting in that capacity","the condition attribution rests on","&nbsp;"],
     ["notwithstanding that","the fact that does not break the chain","&nbsp;"],
     ["does not of itself establish","the limit of attribution","&nbsp;"],
     ["a separate question","what remains to be decided","&nbsp;"]]), 600)
S["l03-f7"]=lambda: f_process(["attribution: an organ, acting in that capacity",
    "breach: an obligation owed to the complaining State","responsibility"], w=640)
S["l03-f8"]=lambda: f_icons([("handsup","an organ acting"),("stamp","attributed"),
    ("book","an obligation"),("balance","a breach"),
    ("essay","responsibility"),("coins","reparation")], cols=3)
S["l03-f9"]=lambda: f_realia(doc("Two-gate analysis", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Status of the text</b><br>"
    "adopted by the Commission, 2001 &middot; annexed to resolution 56/83 of 12 December 2001 "
    "&middot; <b>commended to the attention of Governments; not a treaty</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Gate one: attribution</b><br>"
    "an organ of the State &middot; <b>acting in that capacity</b> &middot; <b>notwithstanding</b> "
    "that it exceeded authority and contravened instructions</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Gate two: breach</b><br>"
    "the obligation invoked &mdash; &nbsp;&nbsp;&nbsp; &middot; to whom owed &mdash; "
    "&nbsp;&nbsp;&nbsp;</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What the instructions are worth</b><br>"
    "discipline &middot; non-authorization &middot; reparation &middot; gravity</p>"
    "<p><b>Argue the gate you can win.</b></p>"))
S["l03-f10"]=lambda: f_scene(940,430, people=[("sofia",320,176,{}),
     ("haddad",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("essay",300,194,0.26),("note",370,194,0.22),
     ("computer",470,142,0.42),("shelf",640,120,0.46),("window",805,56,0.96)],
    clockat=(140,46,22,9,45))
S["l03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Reply A", None,
        "<p>The State is not responsible: the officer acted <b>without authority</b>, contrary to a "
        "standing order of 11 January, which is attached and quoted at length below.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Reply B", None,
        "<p><b>1</b> The text relied on, and its status.<br><b>2</b> Attribution, <b>not "
        "contested</b>.<br><b>3</b> Breach, <b>contested</b>: four arguments at Annex A.<br>"
        "<b>4</b> Non-authorization, and conduct since.<br><b>5</b> What this reply does not "
        "accept.</p>"), w)[0:3],
    w=920, h=300)
S["l03-f12"]=lambda: f_realia(doc("Two replies", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Reply 1</b><br>"
    "Opens with the standing order and the words <i>without authority</i>; three pages.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Reply 2</b><br>"
    "<b>1</b> The Articles: adopted 2001, annexed to resolution 56/83, commended to the attention of "
    "Governments, <b>not a treaty</b>.<br>"
    "<b>2</b> <b>Attribution is not contested</b>: the officer was acting in that capacity, "
    "notwithstanding the standing order of 11 January.<br>"
    "<b>3</b> <b>Breach is contested</b>: the obligation invoked, to whom owed, its scope, and the "
    "nationality of the person concerned.<br>"
    "<b>4</b> Non-authorization; the officer relieved of duties; the order reissued to all posts.<br>"
    "<b>5</b> What this reply does not do.</p>",
    "The reply that concedes the right thing early is read carefully when it refuses something."))
S["l03-f13"]=lambda: f_realia(form("Reply planner",
    [("1 &nbsp;The text relied on, and its status",""),("2 &nbsp;Attribution",""),
     ("3 &nbsp;Breach",""),("4 &nbsp;Non-authorization, and conduct since",""),
     ("5 &nbsp;What this reply does not do","")]), 520)
S["l03-f14"]=lambda: f_scene(980,440,
    people=[("sofia",120,176,{}),("haddad",200,176,{"seated":True}),
     ("bah",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("nadia",440,176,{}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("essay",150,194,0.24),("printer",560,198,0.4),
     ("folder",425,196,0.22),("shelf",700,120,0.42),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    board=(285,24,215,104,"TWO GATES",
      [("1 attribution","&#10003;"),("2 breach",""),("responsibility","")]),
    clockat=(240,30,22,10,0))
S["l03-f15"]=lambda: f_chart([("the State is not responsible",8),("the State is responsible",4),
    ("it depends on the order",4),("it depends on the rank",2),
    ("I had not thought about it",4)])
S["l03-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("note",395,194,0.22),
     ("folder",460,194,0.24),("logsheet",530,196,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,30))
