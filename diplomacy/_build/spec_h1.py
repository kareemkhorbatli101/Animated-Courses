# -*- coding: utf-8 -*-
"""Foreign Service English Book 2 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["h00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each from a consular day",
    ["What you have","An example at the desk"],
    [["The past simple","Two officers <b>came</b> over at seven."],
     ["The present perfect","It <b>has been</b> here since 11 February."],
     ["Modals of obligation","The court <b>is required to</b> order return."],
     ["Reported speech","He <b>said he had made</b> a claim on Tuesday."],
     ["The passive","His birth <b>was never registered</b>."],
     ["Conditionals","<b>If</b> the result comes back today, the clock starts today."]],
    note="Six boxes. Everything in this book is built on them."), 560)
S["h00-f2"]=lambda: f_realia(doc("Taped inside a notebook cover", "Six habits",
    "<p style='font-size:15px;line-height:1.95'>"
    "<b>1 &nbsp;Say it so the other person can write it.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>&ldquo;Nasr. N, A, S, R. Extension two one "
    "nine.&rdquo;</span><br>"
    "<b>2 &nbsp;Write who asked, what, and when.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>&ldquo;Ms Lindholm, Embassy of Astrand, 11:40, "
    "about the request of 2 March.&rdquo;</span><br>"
    "<b>3 &nbsp;Say what you do not know, and when you will know it.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>&ldquo;I don&rsquo;t know. I&rsquo;ll find out and "
    "call you back by four.&rdquo;</span><br>"
    "<b>4 &nbsp;Never guess a rule out loud.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>A guessed rule is quoted back as the "
    "ministry&rsquo;s position.</span><br>"
    "<b>5 &nbsp;Name the instrument before the answer.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>&ldquo;Under the 1980 Convention &mdash; not under "
    "our own law &mdash; the question is return.&rdquo;</span><br>"
    "<b>6 &nbsp;Separate what a rule says from what a court will decide.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>&ldquo;I can tell you what the Article says. I "
    "cannot tell you what a judge will do with it.&rdquo;</span></p>",
    "Six rules. Two of them are new in this book, and the sixth is the expensive one."), 540)
S["h00-f3"]=lambda: f_realia(tbl("Two answers to one question", None,
    ["Risky","Safe"],
    [["The child will be sent back.","<b>Under the 1980 Convention</b>, the question is "
      "<b>return</b>, not custody."],
     ["They have to arrest him.","<b>A Red Notice is not an arrest warrant.</b>"],
     ["They are party to that convention.","They are a <b>Contracting Party</b>. For them it is "
      "<b>not yet in force</b>."],
     ["Everybody has signed it.","<b>196 are parties.</b> One <b>signed in 1995</b> and has not "
      "ratified."]],
    note="The instrument, the article, the date. Then the answer."), 560)
S["h00-f4"]=lambda: f_icons([("speechbubble","“That is not what that document does.”"),
    ("scales","“I can tell you the rule, not the court.”"),
    ("data","“Both figures are published.”"),
    ("clock","“I would rather check first.”")], cols=2)

# ---------------- Unit 1 · The Notice and the Warrant ----------------
S["h01-f1"]=lambda: f_icons([("badge","a police badge"),("waitscreen","a worldwide alert"),
    ("certificate","a judge's order"),("jobnotice","a wanted-person notice"),
    ("councilbuilding","a national central bureau"),("barrier","border control"),
    ("phone","an international code"),("folder","provisional arrest"),
    ("magnifier","a lawyer reading it"),("review","two different documents")], cols=5)
S["h01-f2"]=lambda: f_scene(920,420, people=[("omar",280,176,{"seated":True}),
     ("samira",420,172,{})],
    props=[("desk",210,0,1.3),("phone",290,200,0.34),("note",360,198,0.32),
     ("computer",560,142,0.5),("window",800,56,1.0)], clockat=(130,46,22,9,40))
S["h01-f3"]=lambda: f_icons([("waitscreen","published on the system"),
    ("certificate","a national warrant"),("desk","an officer decides"),
    ("clock","held in a room"),("envelope","a formal request"),
    ("recycle","removed from the system")], cols=3)
S["h01-f4"]=lambda: f_realia(tbl("","The document everybody renames",
    ["The real name","What people call it","What they think it does","What it actually does"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The sentence I will use next time:</b>"), 580)
S["h01-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Consular note 1 &middot; police cooperation",
    "<p style='font-size:16px'>The organization has <b>196 member countries</b>, a figure that has "
    "stood since <b>2023</b>.</p>"
    "<p><b>A Red Notice is not an arrest warrant.</b> Three separate things get called one "
    "thing.</p>"
    + table_html(["","What it is","Who makes it"],
      [["<b>The warrant</b>","an order to arrest","a <b>judicial authority</b> in one country"],
       ["<b>The notice</b>","an alert asking police to locate the person","the organization, at "
        "that country's request"],
       ["<b>The decision</b>","to hold the person, or not","an officer, in whichever country the "
        "person is in"]])
    + "<p>Each member country decides for itself what effect to give a notice. Published analysis "
    "suggests <b>roughly a third</b> will treat one as a basis for <b>provisional arrest</b>; the "
    "rest wait for a formal request.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>What we are not able to say.</b> Whether a "
    "particular country will arrest a particular person. That is its decision, taken on the day.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the organization's own pages on notices and "
    "membership, and published legal analysis. The proportion is an estimate in secondary analysis, "
    "not an official count.</p>"))
S["h01-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["to issue","issuance"],["to circulate","circulation"],["to detain","detention"],
     ["to request",""],["to decide",""],["to remove",""]]), 440)
S["h01-f7"]=lambda: f_part("What member countries do with a notice",
    [("treat it as a basis for provisional arrest",33,AMBER),
     ("wait for a formal request",67,BLUE)])
S["h01-f8"]=lambda: f_icons([("certificate","a court seal"),("waitscreen","an alert on screen"),
    ("barrier","a border booth"),("clock","waiting in a room"),
    ("envelope","a formal request"),("recycle","an entry deleted")], cols=3)
S["h01-f9"]=lambda: f_realia(doc("Consular Affairs &middot; case note 2026/07",
    "First call &middot; 4 March, 10:25",
    "<p><b>Background.</b> The subject is a national of ours, resident abroad. He was traveling "
    "through Perenne and was waiting at a departure gate when he was approached by two officers.</p>"
    + table_html(["Time","What happened"],
      [["<b>about 19:00, 3 Mar</b>","two officers approached him at the gate"],
       ["<b>about 19:05</b>","he was shown a printout and was reading it when it was taken back"],
       ["<b>19:15 approx.</b>","taken to an office; no further information"],
       ["<b>09:40, 4 Mar</b>","his brother telephoned this section"]])
    + "<p><b>What we told the family.</b> What the notice is; that a national warrant sits behind "
    "it; that each member country decides for itself.</p>"
    "<p><b>What we did not say.</b> Whether Perenne will hold him. That is Perenne's decision and "
    "we have not asked yet.</p>",
    "Background without times. Events with times. Two separate lines at the foot."))
S["h01-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("samira",380,172,{}),("hana",780,172,{})],
    props=[("desk",230,0,1.3),("phone",310,200,0.34),("note",380,198,0.3),
     ("essay",460,196,0.32),("door",700,70,0.9),("folder",820,190,0.34)],
    clockat=(140,46,22,10,0))
S["h01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>The subject was stopped at Perenne airport and shown a document which his brother "
        "says was an international warrant. We are looking into it.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Note B", None, ["Time","Event"],
        [["<b>19:00</b>","approached at the gate"],["<b>19:05</b>","shown a printout"],
         ["<b>19:15</b>","taken to an office"],["<b>09:40</b>","brother telephoned"]],
        note="<b>Told:</b> what a notice is. <b>Not said:</b> whether Perenne will hold him."),
        w)[0:3],
    w=920, h=300)
S["h01-f12"]=lambda: f_realia(doc("Two case notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Brother called about an international arrest warrant. Will look into it.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Background:</b> traveling through Perenne, waiting at the gate.<br>"
    "<b>19:00</b> approached &middot; <b>19:05</b> shown a printout &middot; <b>19:15</b> taken to "
    "an office &middot; <b>09:40</b> brother telephoned.<br>"
    "<b>The document:</b> heading read <i>notice</i>. <b>A Red Notice is not an arrest "
    "warrant.</b><br>"
    "<b>We told them:</b> what it is, and that each country decides.<br>"
    "<b>We did not say:</b> whether Perenne will hold him.</p>",
    "One of these can be read aloud to a supervisor in thirty seconds."))
S["h01-f13"]=lambda: f_realia(form("Case note &middot; first call",
    [("Case number / time",""),("Background (no times)",""),
     ("__:__",""),("__:__",""),("__:__",""),("__:__",""),
     ("What the document is",""),("What we told them",""),("What we did not say",""),
     ("Next action, by","")]), 520)
S["h01-f14"]=lambda: f_scene(980,440,
    people=[("omar",110,176,{"seated":True}),("yusuf",190,176,{"seated":True}),
     ("samira",260,172,{}),("caruso",350,172,{"seated":True}),
     ("ida",420,176,{"seated":True}),("linh",490,172,{"seated":True}),
     ("ahmad",580,170,{}),("hana",650,172,{}),("bah",720,170,{}),
     ("nadia",790,172,{}),("karin",860,170,{}),("lucia",920,172,{}),
     ("oskar",960,174,{}),("nkemelu",40,176,{})],
    props=[("desk",80,0,1.1),("phone",150,198,0.3),("printer",540,198,0.42),
     ("board",300,38,0.68),("tray",700,196,0.36),("window",880,56,0.9),
     ("computer",220,142,0.4)], clockat=(240,36,22,10,0))
S["h01-f15"]=lambda: f_chart([("an international arrest warrant",10),
    ("a request to locate somebody",6),("an alert with no force",3),
    ("I had never heard of it",3),("something else",1)])
S["h01-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("note",320,190,0.34),("essay",410,192,0.38),
     ("computer",560,142,0.5),("phone",680,196,0.3),("lamp",180,140,0.44)],
    clockat=(120,46,22,21,20), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 2 · Serving the Papers ----------------
S["h02-f1"]=lambda: f_icons([("envelope","a sealed court envelope"),
    ("councilbuilding","a central authority"),("certificate","a certificate of service"),
    ("essay","a translation clipped on"),("receipt","a registered post receipt"),
    ("logsheet","a tracking sheet"),("handshake","handing it over"),
    ("fine","returned with a note"),("calendar","a date circled"),
    ("tray","awaiting return")], cols=5)
S["h02-f2"]=lambda: f_scene(920,420, people=[("hana",290,172,{}),
     ("omar",520,176,{"seated":True})],
    props=[("desk",220,0,1.25),("tray",300,198,0.4),("tray",370,198,0.4),
     ("essay",430,196,0.36),("desk",470,0,1.25),("logsheet",550,196,0.36),
     ("worldmap",760,50,0.7)], clockat=(130,46,22,11,30))
S["h02-f3"]=lambda: f_icons([("envelope","leaving the building"),("postoffice","arriving"),
    ("handshake","handed over"),("signature","certified"),
    ("transfer","sent back"),("tray","one item still in it")], cols=3)
S["h02-f4"]=lambda: f_realia(tbl("","The thing that is waiting",
    ["The item","Waiting for","Since when","Who has been told"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The one I will chase today:</b>"), 580)
S["h02-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 2 &middot; service of documents abroad",
    "<p style='font-size:16px'>The <b>Convention of 15 November 1965</b> has <b>84 Contracting "
    "Parties</b>. That is the figure on the depositary organization's status table, last updated "
    "<b>21 March 2024</b>.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px;font-size:13px'><i>The expression "
    "&ldquo;Contracting Party&rdquo; covers both cases in which the Convention has, and cases in "
    "which the Convention has not yet, entered into force for that Party.</i></p>"
    "<p>So <b>84 is not the number of states you can use this channel with today.</b> Each state's "
    "own line has to be read: accession, entry into force, declarations.</p>"
    + table_html(["Step","Who does it"],
      [["1","the requesting authority prepares the request"],
       ["2","it goes to the <b>central authority</b> where service is needed"],
       ["3","that state arranges service by a method its own law allows"],
       ["4","a <b>certificate</b> is completed and sent back the same way"]])
    + "<p>The commonest reason a request comes back unserved is a <b>missing or inadequate "
    "translation</b>. The second commonest is an address that no longer exists.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the depositary organization's status table "
    "with its date of last update, and its own explanatory note above the table.</p>"))
S["h02-f6"]=lambda: f_realia(tbl("Word study","Verb, action, person or paper",
    ["Verb","The action","The person or paper"],
    [["to serve","service","a process <b>server</b>"],
     ["to certify","certification","a <b>certificate</b>"],
     ["to translate","translation","a <b>translator</b>"],
     ["to request","",""],["to accede","","&mdash;"]]), 520)
S["h02-f7"]=lambda: f_part("84 Contracting Parties",
    [("in force for them",72,BLUE),("not yet in force for them",12,AMBER)])
S["h02-f8"]=lambda: f_icons([("envelope","date-stamped"),("tray","awaiting translation"),
    ("signature","certificate signed"),("transfer","traveling back"),
    ("fine","returned with a note"),("logsheet","last line empty")], cols=3)
S["h02-f9"]=lambda: f_realia(tbl("Service request SV/2026/118","Tracking sheet",
    ["Date","Where it was","Days"],
    [["11 Feb","arrived at our central authority","0"],
     ["12 Feb","logged and opened","1"],
     ["13 Feb","sent to Translation Unit","2"],
     ["&mdash;","translation returned",""],
     ["&mdash;","served on addressee",""],
     ["&mdash;","certificate dispatched",""]],
    note="<b>Days outstanding: 35.</b> &nbsp; <b>Whose delay:</b> ours."), 540)
S["h02-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{}),
     ("hana",470,172,{"seated":True})],
    props=[("desk",230,0,1.25),("logsheet",310,196,0.34),("phone",380,200,0.3),
     ("desk",430,0,1.25),("essay",510,196,0.36),("tray",600,198,0.4),
     ("tray",670,198,0.4),("calendar",800,106,0.55)], clockat=(140,46,22,14,30))
S["h02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Sheet A", None, ["Where it was"],
        [["arrived"],["with Translation"],["pending"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Sheet B", None, ["Date","Where it was"],
        [["11 Feb","arrived"],["12 Feb","logged"],["13 Feb","to Translation"],
         ["&mdash;","translation back"],["&mdash;","served"],["&mdash;","certificate out"]],
        note="<b>35 days outstanding &middot; our delay &middot; next word Thursday</b>"),
        w)[0:3],
    w=920, h=310)
S["h02-f12"]=lambda: f_realia(doc("Two letters", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 1</b><br>"
    "Thank you for your inquiry. The matter is in hand and we will revert shortly.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 2</b><br>"
    "Your request reached us on <b>11 February</b>. It has <b>not been served yet</b>.<br>"
    "It has been waiting for a translation of two pages <b>for five weeks</b>. <b>That delay is "
    "ours.</b><br>"
    "I have asked Translation for a date and have not had one yet.<br>"
    "I will have one <b>by Thursday 20 March</b> and will write that day either way.<br>"
    "<b>If I miss Thursday</b>, I will telephone you on Thursday to say so.</p>",
    "The last line is the one that buys you credit."))
S["h02-f13"]=lambda: f_realia(form("Letter planner",
    [("Reference and date of arrival",""),("What has happened (for / since)",""),
     ("Whose delay",""),("What I have already done",""),
     ("What happens next, by",""),("If I miss that day","")]), 520)
S["h02-f14"]=lambda: f_scene(980,440,
    people=[("hana",120,172,{}),("omar",200,176,{"seated":True}),
     ("samira",290,172,{}),("nadia",370,172,{}),("bah",450,170,{}),
     ("ahmad",530,172,{}),("yusuf",610,170,{}),("linh",690,172,{}),
     ("ida",760,170,{}),("karin",830,172,{}),("lucia",890,170,{}),
     ("oskar",940,174,{}),("caruso",50,176,{}),("nkemelu",970,172,{})],
    props=[("desk",160,0,1.1),("tray",250,196,0.36),("tray",320,196,0.36),
     ("printer",480,198,0.42),("timetable",600,46,0.6),("envelope",700,194,0.3),
     ("stairwell",20,70,0.66)], clockat=(400,40,22,15,0))
S["h02-f15"]=lambda: f_chart([("after two weeks",8),("the same week",6),
    ("after a month",4),("only when somebody asks",4),("we have no system",2)])
S["h02-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("signature",320,192,0.34),("envelope",410,196,0.32),
     ("computer",560,142,0.5),("logsheet",680,194,0.32),("magnifier",760,192,0.28)],
    clockat=(120,46,22,16,40))

# ---------------- Unit 3 · A Child in Two Countries ----------------
S["h03-f1"]=lambda: f_icons([("passport","two passports"),("worldmap","two countries"),
    ("councilbuilding","a central authority"),("form","an application"),
    ("councilbuilding","a court"),("calendar","twelve months on"),
    ("suitcase","a departure gate"),("scales","a judge's bench"),
    ("folder","a welfare report"),("chair","two parents apart")], cols=5)
S["h03-f2"]=lambda: f_scene(900,420, people=[("ida",300,172,{"seated":True,"smile":False}),
     ("omar",430,176,{"seated":True}),("bah",520,172,{})],
    props=[("table",330,0,1.2),("folder",400,192,0.36),("form",470,194,0.32),
     ("book",560,192,0.34),("window",760,56,1.0)], clockat=(130,46,22,11,30))
S["h03-f3"]=lambda: f_icons([("form","filed"),("transfer","transmitted"),
    ("councilbuilding","heard"),("signature","ordered"),
    ("suitcase","returned"),("scales","custody decided")], cols=3)
S["h03-f4"]=lambda: f_realia(tbl("","The question behind the question",
    ["What they asked for","What they actually wanted","The sentence that closes the gap"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>The first two sentences of my answer:</b>"), 560)
S["h03-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Consular note 3 &middot; child abduction applications",
    "<p style='font-size:16px'>The <b>Convention of 25 October 1980</b> has <b>103 Contracting "
    "Parties</b>. It entered into force on <b>1 December 1983</b>.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px;font-size:13px'><b>Article 19.</b> <i>A "
    "decision under this Convention concerning the return of the child shall not be taken to be a "
    "determination on the merits of any custody issue.</i></p>"
    + table_html(["The return question","The custody question"],
      [["Was the child wrongfully removed from its country of <b>habitual residence</b>?",
        "Who should the child live with?"],
       ["Decided by a court <b>where the child now is</b>","Decided by the courts of the "
        "<b>habitual residence</b>, afterwards"],
       ["Fast, and narrow","Slow, and about the whole family"]])
    + "<p><b>The twelve months.</b> Within one year of the removal the court is <b>required to</b> "
    "order return. After a year it <b>may refuse</b> if the child <b>has settled</b>. The year does "
    "not close the door; it changes who has to persuade whom.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Convention of 25 October 1980 and the "
    "depositary organization's status table, on which &ldquo;Contracting Party&rdquo; can include a "
    "state for which the Convention is not yet in force.</p>"))
S["h03-f6"]=lambda: f_realia(tbl("Word study","Verb, act, person",
    ["Verb","The act","The person"],
    [["to apply","application","<b>applicant</b>"],["to remove","removal","&mdash;"],
     ["to retain","retention","&mdash;"],["to object","","&mdash;"],
     ["to return","","&mdash;"]]), 480)
S["h03-f7"]=lambda: f_timeline([(0.04,"the removal","January"),
    (0.46,"twelve months","required to order return"),
    (0.88,"after a year","may refuse if the child has settled")], 0.22, w=640)
S["h03-f8"]=lambda: f_icons([("form","signing the application"),("transfer","office to office"),
    ("councilbuilding","two lawyers in court"),("signature","the judge signs"),
    ("suitcase","the child returns"),("folder","a welfare report")], cols=3)
S["h03-f9"]=lambda: f_realia(tbl("Application summary &middot; case CA/2026/12",None,
    ["Box","What it says"],
    [["<b>The child</b>","name, date of birth, nationality, passport"],
     ["<b>Habitual residence</b>","address and dates up to <b>January</b>"],
     ["<b>Applied for</b>","<b>RETURN</b>"],
     ["<b>What this application does not decide</b>","<b>custody</b> &mdash; Article 19"],
     ["<b>Signature</b>","signed by the applicant, and dated, twice"]],
    note="Two dates beside the signature: the date signed and the date of the removal."), 540)
S["h03-f10"]=lambda: f_scene(940,430,
    people=[("ida",300,172,{"seated":True,"smile":False}),("omar",440,176,{"seated":True}),
     ("bah",700,172,{})],
    props=[("table",340,0,1.25),("folder",410,192,0.34),("form",480,194,0.3),
     ("book",550,192,0.32),("door",760,70,0.88),("note",820,118,0.26)],
    clockat=(140,46,22,11,30))
S["h03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Summary A", None, ["Box","Content"],
        [["The child","name, date of birth"],["Applied for","return"],
         ["Signature","signed"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Summary B", None, ["Box","Content"],
        [["The child","name, date of birth, passport"],
         ["Habitual residence","address and dates to January"],
         ["Applied for","<b>RETURN</b>"],
         ["Does not decide","<b>custody &mdash; Art. 19</b>"],
         ["Signature","signed and dated, two dates"]]), w)[0:3],
    w=920, h=300)
S["h03-f12"]=lambda: f_realia(doc("Two letters to an applicant", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 1</b><br>"
    "We have received your application and will do everything possible to assist you.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 2</b><br>"
    "<b>What it does.</b> Under the <b>1980 Convention</b> it asks a court where your daughter now "
    "is to order her <b>return</b>.<br>"
    "<b>What it does not do. Article 19:</b> a return decision is not a custody decision.<br>"
    "<b>What I need, by 11 March:</b> 1 address with dates &middot; 2 birth certificate and "
    "passport &middot; 3 any court order &middot; 4 names of people who know where she is.<br>"
    "<b>Do not post originals.</b><br>"
    "<b>I will telephone you every Thursday</b>, including the Thursdays with nothing to "
    "report.</p>",
    "Put <i>what it does not do</i> under its own heading, in the first letter."))
S["h03-f13"]=lambda: f_realia(form("Letter planner",
    [("What the application is",""),("What it does (instrument + condition)",""),
     ("What it does not do (Article ___)",""),("What I need, by",""),
     ("What not to post",""),("Contact, including the empty weeks","")]), 520)
S["h03-f14"]=lambda: f_scene(980,440,
    people=[("omar",150,176,{"seated":True}),("ida",230,172,{"seated":True,"smile":False}),
     ("samira",340,172,{}),("bah",420,170,{}),("hana",500,172,{}),
     ("caruso",580,172,{"seated":True}),("linh",650,176,{"seated":True}),
     ("karin",720,172,{"seated":True}),("ahmad",800,170,{}),
     ("yusuf",860,172,{}),("nadia",920,170,{}),("lucia",960,172,{}),
     ("oskar",60,174,{}),("nkemelu",990,176,{})],
    props=[("door",110,66,0.9),("table",330,0,1.1),("printer",470,198,0.4),
     ("board",760,40,0.64),("chair",560,0,0.66),("tray",900,196,0.34),
     ("note",150,120,0.24)], clockat=(270,36,22,12,0))
S["h03-f15"]=lambda: f_chart([("in the first two minutes",8),("when they ask",6),
    ("once I know they trust me",4),("in writing afterwards",3),("I avoid it",2)])
S["h03-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("folder",320,190,0.42),("essay",420,194,0.34),
     ("calendar",560,106,0.58),("phone",690,196,0.3),("lamp",180,140,0.42)],
    clockat=(120,46,22,16,0))
