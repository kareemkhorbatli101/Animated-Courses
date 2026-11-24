# -*- coding: utf-8 -*-
"""Foreign Service English Book 6 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · Subsequent Practice ----------------
S["l10-f1"]=lambda: f_icons([("shelf","a treaty and nine returns"),("logsheet","nine identical forms"),
    ("calendar","a conduct log with dates"),("envelope","a note never answered"),
    ("folder","an empty reply folder"),("microphone","a conference statement"),
    ("essay","a published article"),("balance","a committee pronouncement"),
    ("square","a file of omissions"),("magnifier","an article and our own forms")], cols=5)
S["l10-f2"]=lambda: f_scene(920,420, people=[("haddad",330,176,{"seated":True}),
     ("sofia",430,172,{})],
    props=[("desk",240,0,1.25),("book",315,192,0.3),("logsheet",385,196,0.24),
     ("logsheet",440,196,0.24),("shelf",620,120,0.48),("window",815,56,0.98)],
    clockat=(140,46,22,9,10))
S["l10-f3"]=lambda: f_icons([("form","a provision applied"),("calendar","repeated the next year"),
    ("envelope","circulated to all parties"),("note","a reaction from one party"),
    ("square","silence from the others"),("logsheet","a log compiled")], cols=3)
S["l10-f4"]=lambda: f_realia(tbl("","The habit that became a position",
    ["The practice","Since when","Who has seen it","What it implies"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The position we have taken without saying so:</b>"), 580)
S["l10-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Legal note 10 &middot; subsequent practice",
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The texts, and their status.</b> The rule is "
    "in the <b>Vienna Convention on the Law of Treaties</b> of <b>23 May 1969</b>, Articles 31 and 32 "
    "&mdash; a treaty. The <b>Conclusions on subsequent agreements and subsequent practice in "
    "relation to the interpretation of treaties</b> were adopted by the <b>International Law "
    "Commission in 2018</b>; the General Assembly <b>took note of them</b> and <b>brought them to "
    "the attention of States</b>. <b>The Conclusions are not a treaty.</b></p>"
    "<p><b>The rule.</b> There shall be <b>taken into account</b>, together with the context: "
    "<b>(a)</b> any <b>subsequent agreement</b> between the parties regarding the interpretation of "
    "the treaty; <b>(b)</b> any <b>subsequent practice</b> in the application of the treaty "
    "<b><u>which establishes the agreement of the parties</u></b> regarding its interpretation. "
    "Recourse may be had to <b>supplementary means</b>, which include <b>other subsequent "
    "practice</b> &mdash; conduct by <b>one or more</b> parties that does not establish that "
    "agreement.</p>"
    + table_html(["","What it is","What it does"],
      [["<b>practice establishing agreement</b>","conduct that <b>establishes the agreement of the "
        "parties</b>","<b>taken into account</b> in interpreting the treaty"],
       ["<b>other subsequent practice</b>","conduct by <b>one or more</b> parties","a "
        "<b>supplementary means</b>: evidence, and not authority"]])
    + "<p style='border:1px solid #d9d4c9;padding:9px'><b>Conduct includes omissions.</b> Conduct "
    "may consist of <b>acts or omissions</b>, including inaction. <b>Silence may constitute "
    "acceptance</b> of a practice <b>where the circumstances call for a reaction</b>. Whether they do "
    "is a question of fact.</p>"
    + table_html(["What gives practice weight",""],
      [["<b>clarity and specificity</b>","a practice that answers the exact question counts for "
        "more"],
       ["<b>repetition</b>","conduct repeated over years counts for more"],
       ["<b>visibility</b>","practice the other parties could see counts; a buried file does not"],
       ["<b>consistency</b>","a practice contradicted by our own conduct is worth little"]])
    + "<p><b>Why this unit exists, for us.</b> Every form this Ministry files, every figure it "
    "reports, and <b>every note it declines to answer</b> is conduct in the application of a treaty. "
    "<b>We make interpretative arguments every working day, mostly by accident, and we are the only "
    "party in the room who has not read them.</b></p>"
    "<p><b>Two working rules.</b> <b>Know our own practice before we argue about a provision.</b> And "
    "<b>answer notes that call for an answer</b>: a note left unanswered for two years is not "
    "neutral.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Vienna Convention on the Law of Treaties, "
    "Articles 31(3) and 32; and the Conclusions adopted by the International Law Commission in 2018, "
    "of which the General Assembly took note. The Conclusions are not a treaty.</p>"))
S["l10-f6"]=lambda: f_realia(tbl("Word study","Evidential weight",
    ["Form","What it claims","Example"],
    [["may constitute","a possibility, not a conclusion","silence <b>may constitute</b> acceptance"],
     ["is to be taken into account","that it must be weighed","&nbsp;"],
     ["establishes the agreement of the parties","the high threshold","&nbsp;"],
     ["carries greater weight where","comparative weight","&nbsp;"],
     ["is evidence of, and not authority for","the distinction in six words","&nbsp;"],
     ["we are not aware of any objection","the honest form of a silence point","&nbsp;"]]), 620)
S["l10-f7"]=lambda: f_matrix(["weighs more","weighs less"],
    [("specificity", ["specific to the question","general tendency"]),
     ("repetition", ["repeated over years","isolated"]),
     ("visibility", ["circulated to all parties","buried in a file"]),
     ("consistency", ["consistent","contradicted by our own conduct"])])
S["l10-f8"]=lambda: f_icons([("form","a provision applied"),("calendar","repeated"),
    ("envelope","circulated"),("note","a reaction"),
    ("square","silence"),("logsheet","a log")], cols=3)
S["l10-f9"]=lambda: f_realia(tbl("Practice log &middot; the threshold provision", None,
    ["Year","How the provision was applied","Circulated"],
    [["2017","threshold calculated net","&#10003;"],["2018","threshold calculated net","&#10003;"],
     ["2019","threshold calculated net","&#10003;"],["2020","threshold calculated net","&#10003;"],
     ["2021","threshold calculated net","&#10003;"],["2022","threshold calculated net","&#10003;"],
     ["2023","threshold calculated net","&#10003;"],["2024","threshold calculated net","&#10003;"],
     ["2025","threshold calculated net","&#10003;"],
     ["<i>2015</i>","<i>calculated gross &mdash; superseded form</i>","<i>&#10003;</i>"],
     ["<i>2016</i>","<i>calculated gross &mdash; section reorganized</i>","<i>&#10003;</i>"]],
    note="<b>Objections received:</b> none.<br>"
    "<b>Compile this before the meeting, not after.</b>"), 600)
S["l10-f10"]=lambda: f_scene(940,430, people=[("sofia",320,176,{}),
     ("haddad",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("logsheet",295,196,0.22),("logsheet",345,196,0.22),
     ("essay",420,194,0.24),("computer",520,142,0.4),("window",805,56,0.96)],
    clockat=(140,46,22,9,30))
S["l10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Paper A", None,
        "<p>The provision <b>clearly means</b> that the threshold is calculated net.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Paper B", None,
        "<p><b>Our practice since 2017</b> has been to calculate the threshold net. It is recorded "
        "in the <b>annual returns</b>, which are <b>circulated to all parties</b>. <b>We are not "
        "aware of any objection.</b> <b>Two earlier returns differ</b>, for the reason at paragraph "
        "4.</p>"), w)[0:3],
    w=920, h=300)
S["l10-f12"]=lambda: f_realia(doc("Two papers", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Paper 1</b><br>"
    "One assertion about the meaning of a provision.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Paper 2</b><br>"
    "<b>1</b> The practice, with a start date, its record and its specificity.<br>"
    "<b>2</b> Visibility, with circulation dates.<br>"
    "<b>3</b> Objections, and the silence point with its circumstances.<br>"
    "<b>4</b> Two earlier returns, drawn to attention, with the explanation and the submission.<br>"
    "<b>5</b> The legal characterization, with the status of the texts relied on.</p>",
    "The second paper's worst material is in its own paragraph 4, where it is a detail."))
S["l10-f13"]=lambda: f_realia(form("Paper planner",
    [("1 &nbsp;Our practice, with dates",""),("2 &nbsp;Visibility, with circulation dates",""),
     ("3 &nbsp;Objections, and the silence point",""),
     ("4 &nbsp;Inconsistent material, and the explanation",""),
     ("5 &nbsp;The characterization, with status","")]), 520)
S["l10-f14"]=lambda: f_scene(980,440,
    people=[("sofia",120,176,{}),("haddad",200,176,{"seated":True}),
     ("bah",290,176,{}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("logsheet",150,196,0.22),("printer",560,198,0.4),
     ("archive",425,196,0.26),("shelf",700,120,0.42),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    board=(285,24,215,104,"THE BALANCE",
      [("specific",""),("repeated",""),("visible",""),("consistent","")]),
    clockat=(240,30,22,9,30))
S["l10-f15"]=lambda: f_chart([("yes, in detail",2),("roughly",5),("only this year's",4),
    ("no",3),("I had not thought of it as practice",7)])
S["l10-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.24),("logsheet",390,196,0.22),
     ("envelope",460,194,0.22),("note",530,194,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,0))

# ---------------- Unit 11 · The Clean Slate ----------------
S["l11-f1"]=lambda: f_icons([("map","a new boundary"),("logsheet","a treaty list in two columns"),
    ("note","a notification of succession"),("archive","a depositary's register"),
    ("essay","a clean sheet"),("book","a continuity clause"),
    ("meeting","a new nameplate"),("review","a thin status page"),
    ("shelf","a contested commentary"),("magnifier","a rule and a note of practice")], cols=5)
S["l11-f2"]=lambda: f_scene(920,420, people=[("haddad",330,176,{"seated":True}),
     ("sofia",430,172,{})],
    props=[("desk",240,0,1.25),("book",315,192,0.28),("review",385,196,0.24),
     ("logsheet",450,196,0.22),("shelf",620,120,0.46),("window",815,56,0.98)],
    clockat=(140,46,22,2,30))
S["l11-f3"]=lambda: f_icons([("map","becoming independent"),("essay","starting free"),
    ("note","a notification deposited"),("barrier","a State separating"),
    ("logsheet","treaties continuing"),("archive","both outcomes recorded")], cols=3)
S["l11-f4"]=lambda: f_realia(tbl("","The unsettled rule",
    ["The question","The written starting point","What is generally accepted","What is unsettled"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What my ministry states no view on:</b>"), 580)
S["l11-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Legal note 11 &middot; succession in respect of treaties",
    "<p><b>The instrument, and its reach.</b> The <b>Vienna Convention on Succession of States in "
    "respect of Treaties</b>, done at Vienna on <b>23 August 1978</b>, entered into force on <b>6 "
    "November 1996</b> &mdash; <b>eighteen years</b> later. It has about <b>twenty-three parties</b> "
    "on the depositary's record. <b>In any particular case the first question is whether the States "
    "concerned are parties to it. Usually they are not.</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The first presumption: the clean slate.</b> "
    "A <b>newly independent State</b> &mdash; a successor State whose territory was, immediately "
    "before the date of succession, a <b>dependent territory</b> for the international relations of "
    "which the predecessor State was responsible &mdash; <b>is not bound to maintain in force, or to "
    "become a party to, any treaty by reason only of the fact that at the date of succession the "
    "treaty was in force in respect of that territory</b>. It <b>may</b>, by a <b>notification of "
    "succession</b>, <b>establish its status as a party</b> to a multilateral treaty.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The second presumption: continuity.</b> "
    "Where a part or parts of a State separate to form one or more States, <b>any treaty in force at "
    "the date of the succession in respect of the entire territory of the predecessor State continues "
    "in force in respect of each successor State so formed</b> &mdash; subject to the exceptions the "
    "Convention provides.</p>"
    + table_html(["","The presumption","What the successor State does"],
      [["<b>a newly independent State</b>","<b>clean slate</b>","<b>may</b> notify succession, "
        "treaty by treaty"],
       ["<b>separation of part of a State</b>","<b>continuity</b>","takes the treaties as it finds "
        "them, subject to the exceptions"]])
    + "<p style='border:1px solid #d9d4c9;padding:9px'><b>What may and may not be said about "
    "custom.</b> <b>It is widely accepted</b> that the clean slate rule for newly independent States "
    "reflects a rule of customary international law. <b>The extent to which the presumption of "
    "continuity in cases of separation reflects customary international law is unsettled</b>, and "
    "<b>State practice has varied considerably</b>. <b>This Ministry states no view on the position "
    "of any particular State</b>, and nothing in this note is to be cited as doing so.</p>"
    "<p><b>Why the hedging is the point.</b> A ministry has three honest positions on any unsettled "
    "question: that something is generally accepted, that something is contested, and that we state "
    "no view. <b>The third is the most useful of all.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Vienna Convention on Succession of States "
    "in respect of Treaties, done at Vienna on 23 August 1978, in force 6 November 1996, Articles 2, "
    "16, 17 and 34; and the depositary's published figure of about twenty-three parties. The "
    "customary status of individual provisions is a matter of debate and is not resolved here.</p>"))
S["l11-f6"]=lambda: f_realia(tbl("Word study","Hedging about custom",
    ["Form","Strength","Example"],
    [["it is widely accepted that","strong, and short of universal","<b>it is widely accepted "
      "that</b> the clean slate rule reflects custom"],
     ["there is support for the view that","weaker, and honest","&nbsp;"],
     ["the extent to which &hellip; is unsettled","neutral, and exact","&nbsp;"],
     ["State practice has varied","factual, and often most useful","&nbsp;"],
     ["this Ministry states no view on","the reservation of position","&nbsp;"],
     ["nothing in this note is to be cited as","the protective sentence","&nbsp;"]]), 620)
S["l11-f7"]=lambda: f_process(["established","widely accepted","supported by some authority",
    "unsettled","we state no view"], w=680)
S["l11-f8"]=lambda: f_icons([("map","independence"),("essay","starting free"),
    ("note","a notification"),("barrier","separation"),
    ("logsheet","continuity"),("archive","recorded")], cols=3)
S["l11-f9"]=lambda: f_realia(doc("Legal position sheet", None,
    "<p>What the Convention provides, and whether it binds these States.</p>"
    + table_html(["",""],
      [["<b>clean slate</b>","newly independent States"],
       ["<b>continuity</b>","separation of part of a State"],
       ["<b>Does it bind these States?</b>","<b>No</b> &mdash; about twenty-three parties"]])
    + table_html(["On the scale",""],
      [["established",""],["<b>widely accepted</b>","&larr; clean slate"],
       ["supported by some authority",""],["<b>unsettled</b>","&larr; continuity on separation"],
       ["we state no view","&larr; the position of any particular State"]])
    + "<p style='border:1px solid #d9d4c9;padding:9px'><b>Our public line.</b> The Convention "
    "provides for continuity on separation. The States concerned are not parties to it. The "
    "customary position is unsettled and practice has varied. <b>This Ministry states no view on any "
    "particular State.</b></p>"
    "<p style='background:#f2efe8;padding:9px'><b>Internal only.</b> What we would argue, and why we "
    "are not obliged to argue it today: Annex A.</p>"))
S["l11-f10"]=lambda: f_scene(940,430, people=[("sofia",320,176,{}),
     ("haddad",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("book",300,192,0.28),("review",370,196,0.24),
     ("essay",440,194,0.22),("computer",530,142,0.4),("window",805,56,0.96)],
    clockat=(140,46,22,2,40))
S["l11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p><b>Under international law</b> the predecessor's treaties continue in force in respect "
        "of the successor State.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p><b>The Convention provides</b> for continuity on separation. <b>These States are not "
        "parties to it.</b> <b>The extent to which that presumption reflects custom is "
        "unsettled</b>, and practice has varied. <b>This Ministry states no view</b> on any "
        "particular State.<br><i>Internal only: Annex A.</i></p>"), w)[0:3],
    w=920, h=300)
S["l11-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "One sentence, beginning <i>under international law</i>.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1</b> What the Convention provides.<br><b>2</b> Its reach: about twenty-three parties; these "
    "States are not among them.<br>"
    "<b>3</b> The state of the law: widely accepted / unsettled / practice has varied.<br>"
    "<b>4</b> The reservation, with the citation sentence.<br>"
    "<b>5</b> <i>Internal only &mdash; not to be transmitted</i>: what we would argue, with the "
    "authorities against it.</p>",
    "The first sentence would be quoted in three capitals within a month."))
S["l11-f13"]=lambda: f_realia(form("Note planner",
    [("1 &nbsp;What the text provides",""),("2 &nbsp;Its reach",""),
     ("3 &nbsp;Widely accepted",""),("Unsettled",""),
     ("4 &nbsp;The reservation of position",""),
     ("5 &nbsp;<b>Internal only</b>","")]), 520)
S["l11-f14"]=lambda: f_scene(980,440,
    people=[("sofia",120,176,{}),("haddad",200,176,{"seated":True}),
     ("bah",290,176,{}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,192,0.24),("printer",560,198,0.4),
     ("shelf",700,120,0.42),("review",425,196,0.22),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    board=(280,24,225,108,"THE SCALE",
      [("established",""),("widely accepted","&#9679;"),("some authority",""),
       ("unsettled","&#9679;")]),
    clockat=(240,30,22,2,40))
S["l11-f15"]=lambda: f_chart([("established",6),("widely accepted",5),
    ("supported by some authority",3),("unsettled",3),("I had not thought about it",4)])
S["l11-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.24),("envelope",390,194,0.22),
     ("note",460,194,0.22),("folder",530,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,11,0))

# ---------------- Unit 12 · Three Signatures ----------------
S["l12-f1"]=lambda: f_icons([("essay","an instrument on heavy paper"),("signature","a signature block"),
    ("stamp","a head of state's seal"),("envelope","a letter of transmittal"),
    ("certificate","full powers"),("deposit2","a depositary's receipt"),
    ("printer","a facsimile, not accepted"),("quotemark","a declaration in the body"),
    ("bag","a courier bag"),("magnifier","an instrument and a checklist")], cols=5)
S["l12-f2"]=lambda: f_scene(920,420, people=[("haddad",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("essay",315,194,0.26),("certificate",385,196,0.22),
     ("bag",455,196,0.24),("lamp",180,140,0.42),("window",815,56,0.98)],
    clockat=(140,46,22,11,0))
S["l12-f3"]=lambda: f_icons([("book","the treaty identified"),("pen","the signatory named"),
    ("quotemark","the intent expressed"),("calendar","date and place of issue"),
    ("signature","signed by one of three"),("bag","bagged for the courier")], cols=3)
S["l12-f4"]=lambda: f_realia(tbl("","The signature that must be one of three",
    ["The document","Who may sign","What happens otherwise","How long the refusal takes"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The six weeks nobody budgets for:</b>"), 580)
S["l12-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Legal note 12 &middot; instruments of ratification",
    "<p><b>The source, and its status.</b> The United Nations <b>Treaty Section</b> publishes "
    "guidance on the deposit of instruments with the Secretary-General as depositary, together with "
    "its <b>summary of depositary practice</b>. <b>These are published practice notes and not a "
    "treaty.</b> They are, for a ministry preparing an instrument, the most consequential pages in "
    "this series.</p>"
    + table_html(["","What the instrument must contain"],
      [["<b>1</b>","the <b>title, date and place of conclusion</b> of the treaty concerned"],
       ["<b>2</b>","the <b>full name and title</b> of the person signing"],
       ["<b>3</b>","an <b>unambiguous expression of the intent</b> of the Government to be bound and "
        "to <b>undertake faithfully to observe and implement</b> its provisions"],
       ["<b>4</b>","the <b>date and place</b> where the instrument was issued"],
       ["<b>5</b>","the <b>signature</b> of the Head of State, the Head of Government or the "
        "Minister for Foreign Affairs &mdash; <b>or</b> of another person holding <b>full "
        "powers</b>"]])
    + "<p style='border:1px solid #d9d4c9;padding:9px'><b>The three authorities.</b> The depositary "
    "accepts an instrument signed by the <b>Head of State</b>, the <b>Head of Government</b> or the "
    "<b>Minister for Foreign Affairs</b>. <b>A signature by any other authority &mdash; including "
    "another minister, however senior, and an ambassador &mdash; requires full powers</b>, issued by "
    "one of those three and deposited with the instrument.</p>"
    "<p><b>These are the same three offices as in Unit 1, and the overlap is not a coincidence.</b> "
    "<b>The rule exists so that a depositary in another city, with no knowledge of our constitution, "
    "can verify capacity from the face of one page.</b></p>"
    + table_html(["What a depositary will not accept",""],
      [["a <b>copy</b>, a facsimile or a scan","the <b>original instrument</b> is required"],
       ["a signature outside the three <b>without full powers</b>","the instrument is "
        "<b>refused</b>"],
       ["an instrument that does <b>not identify the treaty</b>","it cannot be recorded"],
       ["a reservation or declaration <b>not included in the instrument</b>","it must be in the "
        "instrument itself"]])
    + "<p><b>And the consequence of a refusal. The instrument comes back.</b> Six weeks may pass, and "
    "during them the Ministry believes it is a party. <b>The most expensive error in treaty work is "
    "not a wrong legal view. It is a correct legal view defeated by a signature block.</b></p>"
    "<p><b>What this series has been about.</b> <b>Find out what the document actually is, what "
    "status it has, as at what date, who may act under it, and whose words you are relying on.</b> "
    "<b>If the name is not one of three, nothing above it operates.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the published guidance of the United Nations "
    "Treaty Section on the deposit of instruments with the Secretary-General as depositary. These "
    "are published practice notes and not a treaty.</p>"))
S["l12-f6"]=lambda: f_realia(tbl("Review &middot; the eleven devices",
    "Match the device to the fragment",
    ["Device","Example"],
    [["capacity","<b>in virtue of their functions</b>, and without producing full powers"],
     ["characterization of an instrument","<b>whatever its particular designation</b>"],
     ["attribution","attributable <b>notwithstanding that</b> it contravened instructions"],
     ["manifested intention","<b>manifesting the will to be bound</b>"],
     ["purported effect","determined by the effect it <b>purports to produce</b>"],
     ["rights at discretion","<b>has the right to</b>, and <b>should</b> give due consideration"],
     ["express terms","<b>shall not be held to imply</b>; a <b>separate</b> waiver is necessary"],
     ["conditions precedent","<b>subject to the prior consent of</b> the receiving State"],
     ["immediacy","<b>without delay</b>, and <b>if he so requests</b>"],
     ["evidential weight","<b>may constitute</b> acceptance where the circumstances call for a "
      "reaction"],
     ["hedging about custom","the extent to which it reflects custom <b>is unsettled</b>"]]), 620)
S["l12-f7"]=lambda: f_process(["title, date and place","the expression of intent",
    "date and place of issue","the signature","the name and title  —  one of three"], w=680)
S["l12-f8"]=lambda: f_realia(doc("Instrument of Ratification", None,
    "<p><b>WHEREAS</b> the <b>Convention on [title], done at [place] on [date]</b>, was signed on "
    "behalf of the Syrian Arab Republic on [date];</p>"
    "<p><b>NOW THEREFORE</b> I, <b>[full name]</b>, <b>Minister for Foreign Affairs and "
    "Expatriates</b>, declare that the Government of the Syrian Arab Republic, having examined the "
    "said Convention, <b>hereby ratifies</b> it and <b>undertakes faithfully to observe and "
    "implement the provisions thereof</b>.</p>"
    "<p><b>DECLARATION.</b> In depositing this instrument, the Government <b>declares</b> that it "
    "understands [provision] as [interpretation]. <b>This declaration is made in this instrument and "
    "forms part of it.</b></p>"
    "<p><b>DONE at Damascus</b> this <b>[date]</b>.</p>"
    "<p style='text-align:right'>[signature]<br><b>[full name]</b><br><b>Minister for Foreign "
    "Affairs and Expatriates</b></p>"))
S["l12-f9"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("haddad",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("essay",300,194,0.26),("certificate",370,196,0.22),
     ("bag",440,196,0.24),("phone",510,196,0.2),("window",805,56,0.96)],
    clockat=(140,46,22,11,20))
S["l12-f10"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Instrument A", None,
        "<p>&hellip; the <b>Convention on [short title]</b> &hellip; hereby ratifies it &hellip;</p>"
        "<p style='text-align:right'>[signature]<br><b>Minister of Justice</b></p>"), w)[0:3],
    lambda w,h: f_realia(doc("Instrument B", None,
        "<p>&hellip; the <b>Convention on [title], done at [place] on [date]</b> &hellip; hereby "
        "<b>ratifies</b> it and <b>undertakes faithfully to observe and implement</b> &hellip; "
        "<b>DECLARATION</b> at paragraph 3 &hellip; <b>DONE at Damascus</b> &hellip;</p>"
        "<p style='text-align:right'>[signature]<br><b>Minister for Foreign Affairs</b></p>"),
        w)[0:3],
    w=920, h=300)
S["l12-f11"]=lambda: f_realia(doc("Two documents", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Document 1</b><br>"
    "Four of the five elements; the treaty by short title; the declaration in the covering letter; "
    "signed by a minister other than the three.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Document 2</b><br>"
    "All five elements; the treaty by title, place and date; the declaration in paragraph 3, stated "
    "to form part of the instrument; the Minister for Foreign Affairs beneath the line.</p>",
    "One of these comes back in the envelope in about six weeks."))
S["l12-f12"]=lambda: f_realia(form("Instrument planner and checklist",
    [("The recital: treaty by title, place and date",""),
     ("The operative paragraph: <b>ratifies</b> &middot; <b>undertakes faithfully to observe and "
      "implement</b>",""),
     ("Any declaration, in its own paragraph",""),("Date and place of issue",""),
     ("The name beneath the line",""),("The title beneath the name",""),
     ("Full powers enclosed?",""),("Original, not a copy; courier and receipt","")]), 540)
S["l12-f13"]=lambda: f_scene(980,440,
    people=[("bah",120,176,{}),("haddad",200,176,{"seated":True}),
     ("nadia",290,176,{}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("essay",150,194,0.24),("printer",560,198,0.4),
     ("certificate",425,196,0.2),("bag",700,196,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    board=(285,24,215,108,"ONE SHEET",
      [("1 the treaty",""),("2 the name",""),("3 the intent",""),("6 one of three","&larr;")]),
    clockat=(240,30,22,11,30))
S["l12-f14"]=lambda: f_chart([("any minister",7),("the responsible minister",5),
    ("one of three authorities",3),("any ambassador",2),("I had not thought about it",4)])
S["l12-f15"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("deposit2",320,196,0.22),("essay",390,194,0.24),
     ("certificate",460,196,0.2),("review",530,196,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,0))
S["l12-f16"]=lambda: f_realia(doc("Five questions",
    "Printed on a card",
    "<p style='font-size:17px;line-height:2.0'>"
    "<b>1 &nbsp;What is this document.</b><br>"
    "<b>2 &nbsp;What status has it.</b><br>"
    "<b>3 &nbsp;As at what date.</b><br>"
    "<b>4 &nbsp;Who may act under it.</b><br>"
    "<b>5 &nbsp;Whose words am I relying on.</b></p>"
    "<p style='font-size:13px;color:#6b6861'>And check on the days you are sure.</p>"))
