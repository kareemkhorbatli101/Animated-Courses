# -*- coding: utf-8 -*-
"""Foreign Service English Book 6 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · Express, and Again for Execution ----------------
S["l07-f1"]=lambda: f_icons([("envelope","a summons at the door"),("idcard","an agent's card"),
    ("note","a note with the word waiver"),("balance","a judgment"),
    ("barrier","a bailiff turned away"),("essay","two separate letters"),
    ("folder","a counterclaim"),("statement","a mission's account"),
    ("key","a private flat"),("magnifier","paragraph four")], cols=5)
S["l07-f2"]=lambda: f_scene(920,420, people=[("haddad",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("envelope",315,194,0.22),("book",380,192,0.28),
     ("printer",470,198,0.36),("lamp",180,140,0.42),("window",815,56,0.98)],
    clockat=(140,46,22,3,15))
S["l07-f3"]=lambda: f_icons([("envelope","a summons received"),("note","jurisdiction waived"),
    ("podium","a hearing"),("balance","judgment given"),
    ("essay","a second waiver requested"),("barrier","a bailiff turned away")], cols=3)
S["l07-f4"]=lambda: f_realia(tbl("","One permission, two steps",
    ["The first permission","What it covers","What needs a second","Who was caught by the gap"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The step I assumed was included:</b>"), 580)
S["l07-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Legal note 7 &middot; waiver of immunity",
    "<p><b>The instrument.</b> The <b>Vienna Convention on Diplomatic Relations</b>, done at Vienna "
    "on <b>18 April 1961</b>, entered into force on <b>24 April 1964</b>. It has about <b>193 "
    "parties</b> on the depositary's record &mdash; <b>one of the most widely ratified treaties in "
    "existence</b>, which is why its text is quoted and not paraphrased in this Ministry.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>1.</b> The immunity from jurisdiction of "
    "diplomatic agents and of persons enjoying immunity under article 37 <b>may be waived by the "
    "sending State</b>.<br><br>"
    "<b>2. Waiver must always be express.</b><br><br>"
    "<b>3.</b> The <b>initiation of proceedings</b> by a diplomatic agent or by a person enjoying "
    "immunity <b>shall preclude him from invoking immunity from jurisdiction</b> in respect of any "
    "<b>counterclaim directly connected with the principal claim</b>.<br><br>"
    "<b>4.</b> <u>Waiver of immunity from jurisdiction in respect of civil or administrative "
    "proceedings <b>shall not be held to imply waiver of immunity in respect of the execution of the "
    "judgment</b>, for which <b>a separate waiver shall be necessary</b>.</u></p>"
    + table_html(["","The rule","Who it catches"],
      [["<b>1</b>","the waiver is <b>the sending State's</b> to give","anybody who asks the "
        "individual"],
       ["<b>2</b>","it <b>must always be express</b>","anybody relying on conduct or silence"],
       ["<b>3</b>","a person who <b>sues</b> cannot claim immunity against a <b>connected "
        "counterclaim</b>","an agent who begins a case lightly"],
       ["<b>4</b>","a waiver for the <b>proceedings</b> is <b>not</b> one for <b>execution</b>",
        "the successful claimant at the door with a judgment"]])
    + "<p><b>Who may waive.</b> The sending State. <b>Not the diplomatic agent</b>, however senior. "
    "<b>A waiver offered by the individual is not a waiver at all.</b></p>"
    "<p><b>Jurisdiction and execution are two different things.</b> Immunity from <b>jurisdiction</b> "
    "concerns whether a court may <b>hear</b> the case. Immunity from <b>execution</b> concerns "
    "whether a judgment may be <b>enforced</b>. <b>A ministry that waives the first and not the "
    "second has allowed a case to be heard and nothing to be collected</b>, which is sometimes "
    "exactly what it intends and must never be done by accident.</p>"
    "<p><b>What a waiver note must say.</b> <b>Who</b> is waiving; <b>whose</b> immunity; <b>in "
    "respect of which proceedings</b>, by court and number; and <b>whether execution is "
    "included</b>. <b>A note silent on execution has not waived it.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Vienna Convention on Diplomatic Relations "
    "of 18 April 1961, in force 24 April 1964, Article 32; and the depositary's published figure of "
    "about 193 parties.</p>"))
S["l07-f6"]=lambda: f_realia(tbl("Word study","Express terms and implication",
    ["Form","What it does","Example"],
    [["must always be express","excludes implication altogether","waiver <b>must always be "
      "express</b>"],
     ["shall not be held to imply","denies an inference a reader would draw","&nbsp;"],
     ["a separate &hellip; shall be necessary","states what must be done instead","&nbsp;"],
     ["shall preclude him from invoking","removes a right by reason of conduct","&nbsp;"],
     ["does not extend to","the plainer version, for a note","&nbsp;"],
     ["is silent as to","the honest description of a gap","&nbsp;"]]), 600)
S["l07-f7"]=lambda: f_process(["jurisdiction: may the case be heard?  express waiver given",
    "execution: may the judgment be enforced?  a separate waiver is necessary"], w=660)
S["l07-f8"]=lambda: f_icons([("envelope","a summons"),("note","jurisdiction waived"),
    ("podium","a hearing"),("balance","a judgment"),
    ("essay","a second waiver requested"),("barrier","turned away")], cols=3)
S["l07-f9"]=lambda: f_realia(doc("Note No. 77/4", None,
    "<p>The Embassy of Astrand <b>presents its compliments</b> to the Ministry of Foreign Affairs "
    "and Expatriates and <b>has the honour to</b> communicate the following.</p>"
    "<p><b>1 The waiver. The Government of Astrand, as sending State, expressly waives the immunity "
    "from jurisdiction</b> of <b>Mr Oskar Rehn</b>, Counselor of this Embassy, <b>in respect of the "
    "proceedings pending before the Commercial Court of Damascus, case number 1182 of this year</b>, "
    "and in respect of those proceedings only.</p>"
    "<p><b>2 Scope.</b> The waiver extends to the hearing and determination of the said proceedings, "
    "<b>including any appeal</b>. It extends to <b>no other proceedings</b>.</p>"
    "<p style='background:#f2efe8;padding:9px'><b>3 Execution. This waiver does not extend to "
    "immunity from execution of any judgment given in the said proceedings.</b> Waiver of immunity "
    "from jurisdiction <b>shall not be held to imply</b> waiver of immunity in respect of execution, "
    "<b>for which a separate waiver shall be necessary</b>. <b>No such waiver is given by this "
    "note.</b></p>"
    "<p><b>4 Communication.</b> The Embassy requests that a copy be <b>transmitted to the "
    "Court</b>.</p>"
    "<p>The Embassy <b>avails itself of this opportunity to renew</b> the assurances of its highest "
    "consideration.</p>"
    "<p>Damascus, 4 March &nbsp; <i>[seal]</i></p>"))
S["l07-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("haddad",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("envelope",300,194,0.22),("balance",370,196,0.24),
     ("book",440,192,0.28),("essay",510,194,0.22),("window",805,56,0.96)],
    clockat=(140,46,22,3,30))
S["l07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>The Embassy confirms that Mr Rehn <b>is willing to appear</b> before the Court and will "
        "cooperate fully with the proceedings.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p><b>The Government of Astrand, as sending State, expressly waives</b> the immunity from "
        "jurisdiction of Mr Rehn in respect of case 1182. <b>This waiver does not extend to "
        "execution</b>, for which a separate waiver would be necessary.</p>"), w)[0:3],
    w=920, h=300)
S["l07-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "States that a named official will cooperate fully with the proceedings. No actor, no operative "
    "verb, no identification of the case, nothing on execution.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1</b> The express waiver, by the sending State, of a named person's immunity in identified "
    "proceedings.<br><b>2</b> Scope: those proceedings only, including appeal.<br>"
    "<b>3</b> Execution: expressly not extended, with the rule quoted.<br>"
    "<b>4</b> A copy to be transmitted to the Court.</p>",
    "The first waives nothing and reads as though it does."))
S["l07-f13"]=lambda: f_realia(form("Note planner",
    [("The opening formula",""),("1 &nbsp;The express waiver: who, whose, which",""),
     ("2 &nbsp;Scope",""),("3 &nbsp;Execution",""),("4 &nbsp;Communication",""),
     ("The closing formula","")]), 520)
S["l07-f14"]=lambda: f_scene(980,440,
    people=[("bah",120,176,{}),("haddad",200,176,{"seated":True}),
     ("nadia",290,176,{}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("envelope",150,194,0.22),("printer",560,198,0.4),
     ("balance",425,196,0.24),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(285,24,215,100,"TWO DOORS",
      [("jurisdiction","open"),("execution","closed")]),
    clockat=(240,30,22,3,30))
S["l07-f15"]=lambda: f_chart([("yes, one covers both",8),("no, two are needed",4),
    ("it depends on the court",3),("the individual decides",3),
    ("I had not thought about it",3)])
S["l07-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("folder",320,194,0.24),("envelope",390,194,0.22),
     ("balance",460,196,0.24),("note",530,194,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,0))

# ---------------- Unit 8 · A Third State's Protection ----------------
S["l08-f1"]=lambda: f_icons([("councilbuilding","a mission with its flag"),("archive","a sealed archive"),
    ("clipboard","an inventory signed"),("badge","a protected-interests plaque"),
    ("note","a note requesting acceptance"),("envelope","a note giving consent"),
    ("queue","a queue of another State's nationals"),("signpost","a temporary sign"),
    ("padlock","a locked safe"),("magnifier","two articles compared")], cols=5)
S["l08-f2"]=lambda: f_scene(920,420, people=[("haddad",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("book",315,192,0.3),("note",385,194,0.22),
     ("clipboard",450,196,0.24),("lamp",180,140,0.42),("window",815,56,0.98)],
    clockat=(140,46,22,12,5))
S["l08-f3"]=lambda: f_icons([("note","a request arriving"),("envelope","consent sought"),
    ("stamp","consent given"),("clipboard","an inventory taken"),
    ("signpost","a notice posted"),("queue","a counter opening")], cols=3)
S["l08-f4"]=lambda: f_realia(tbl("","Acting for somebody else",
    ["Who asked","Whose permission was needed","What we could do","What we could not"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What people assumed we could do:</b>"), 580)
S["l08-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Legal note 8 &middot; protection of interests",
    "<p><b>The instrument.</b> The <b>Vienna Convention on Diplomatic Relations</b> of <b>18 April "
    "1961</b>, in force <b>24 April 1964</b>, with about <b>193 parties</b>. Two consecutive "
    "articles are in point and they are <b>not alternatives</b>: they cover different "
    "situations.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The first: where relations are broken off or "
    "a mission is withdrawn.</b><br>"
    "<b>(a)</b> the receiving State must, <b>even in case of armed conflict</b>, <b>respect and "
    "protect the premises of the mission, together with its property and archives</b>;<br>"
    "<b>(b)</b> the sending State may <b>entrust the custody</b> of the premises, property and "
    "archives <b>to a third State acceptable to the receiving State</b>;<br>"
    "<b>(c)</b> the sending State may <b>entrust the protection of its interests and those of its "
    "nationals</b> to a <b>third State acceptable to the receiving State</b>.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The second: where a State is not represented "
    "at all.</b><br>A sending State may, <b>with the prior consent of a receiving State</b>, and "
    "<b>at the request of a third State not represented in the receiving State</b>, undertake the "
    "<b>temporary protection of the interests</b> of that third State and of its nationals.</p>"
    + table_html(["","The first article","The second article"],
      [["<b>When</b>","relations broken off, or mission recalled","the third State <b>never "
        "represented</b> there"],
       ["<b>Who asks</b>","the <b>sending State</b> entrusts","the <b>third State requests</b>"],
       ["<b>The condition</b>","<b>acceptable to the receiving State</b>","the <b>prior consent</b> "
        "of the receiving State"],
       ["<b>What is entrusted</b>","<b>custody</b>; and <b>protection of interests and nationals</b>",
        "<b>temporary protection of interests</b> and of nationals"]])
    + "<p><b>Note paragraph (a).</b> The receiving State's own duty continues <b>even in case of "
    "armed conflict</b>, whether or not any third State is involved.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What protection of interests is not.</b> "
    "<b>Not the establishment of diplomatic relations.</b> It does not make the protecting mission "
    "the third State's mission. It confers <b>no additional privileges or immunities</b>. And under "
    "the second article it is <b>temporary</b>, in terms.</p>"
    "<p><b>Consent first.</b> The words are <i>acceptable to</i> and <i>prior consent</i>, and both "
    "are conditions precedent. <b>Work begun before consent is work done without a legal "
    "basis.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Vienna Convention on Diplomatic Relations "
    "of 18 April 1961, in force 24 April 1964, Articles 45 and 46.</p>"))
S["l08-f6"]=lambda: f_realia(tbl("Word study","Conditions precedent",
    ["Form","What it conditions","Example"],
    [["subject to the prior consent of","the whole arrangement","<b>subject to the prior consent "
      "of</b> the receiving State"],
     ["acceptable to","the choice of the third State","&nbsp;"],
     ["at the request of","who may set it in motion","&nbsp;"],
     ["provided that","a further condition","&nbsp;"],
     ["only once &hellip; has been obtained","the order of operations","&nbsp;"],
     ["which is being sought","the honest present state","&nbsp;"]]), 600)
S["l08-f7"]=lambda: f_matrix(["relations broken off","never represented"],
    [("who asks", ["the sending State","the third State"]),
     ("the condition", ["acceptable to","prior consent of"]),
     ("custody of premises", ["yes","&mdash;"]),
     ("protection of interests", ["yes","yes, temporary"])])
S["l08-f8"]=lambda: f_icons([("note","a request"),("envelope","consent sought"),
    ("stamp","consent given"),("clipboard","an inventory"),
    ("signpost","a notice"),("queue","a counter opening")], cols=3)
S["l08-f9"]=lambda: f_realia(doc("Arrangement sheet", None,
    "<p>Which article applies, and what has been obtained.</p>"
    + table_html(["Which article applies",""],
      [["relations broken off / mission recalled",""],
       ["<b>third State never represented</b>","<b>&#10003;</b>"]])
    + table_html(["Conditions",""],
      [["request of the third State","<b>&#10003;</b>"],
       ["<b>prior consent of the receiving State</b>","<b>&mdash; being sought</b>"]])
    + "<p style='border:1px solid #d9d4c9;padding:9px'><b>What we may do</b><br>note names and "
    "contact details &middot; answer factual questions &middot; say that an arrangement is being "
    "sought</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What this is not</b><br>not diplomatic "
    "relations &middot; not their mission &middot; no further privileges &middot; temporary</p>"
    "<p><b>Nothing begins before the second tick.</b></p>"))
S["l08-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("haddad",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("book",300,192,0.3),("note",370,194,0.22),
     ("computer",470,142,0.42),("clipboard",540,196,0.22),("window",805,56,0.96)],
    clockat=(140,46,22,12,20))
S["l08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>The Ministry <b>has agreed</b> to undertake the protection of the interests of Astrand "
        "and of its nationals in Perenne, with effect from Monday.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p>The Ministry <b>would be willing</b> to undertake the temporary protection of those "
        "interests, <b>subject to the prior consent of the Government of Perenne</b>, <b>which is "
        "being sought</b>. <b>No arrangement exists until it is received.</b> Four negatives "
        "follow.</p>"), w)[0:3],
    w=920, h=300)
S["l08-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Agrees, and gives a date, before the condition is satisfied.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1</b> Our position: willing.<br><b>2</b> The condition, and that it is being sought.<br>"
    "<b>3</b> What happens on receipt, with a time.<br>"
    "<b>4</b> Meanwhile: a <b>will</b> list and a <b>will not</b> list, with the reason.<br>"
    "<b>5</b> What the arrangement would and would not be.<br>"
    "<b>6</b> A request that nationals not be advised to attend until it is in force.</p>",
    "The second note is the one that stops forty-one people traveling in vain."))
S["l08-f13"]=lambda: f_realia(form("Note planner",
    [("1 &nbsp;Our position",""),("2 &nbsp;The condition, and its present state",""),
     ("3 &nbsp;On receipt of consent",""),("4 &nbsp;Meanwhile: will",""),("will not",""),
     ("5 &nbsp;What it would and would not be",""),("6 &nbsp;One courteous request","")]), 520)
S["l08-f14"]=lambda: f_scene(980,440,
    people=[("haddad",120,176,{}),("bah",200,176,{}),
     ("nadia",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("queue",150,196,0.3),("printer",560,198,0.4),
     ("clipboard",425,196,0.22),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(285,24,215,104,"TWO PATHS",
      [("broken off","acceptable to"),("never represented","prior consent"),("nothing yet","")]),
    clockat=(240,30,22,12,0))
S["l08-f15"]=lambda: f_chart([("everything a mission does",6),("issue documents",5),
    ("protect interests only",4),("hold the building only",2),
    ("I had not thought about it",4)])
S["l08-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("envelope",320,194,0.22),("logsheet",390,196,0.22),
     ("signpost",460,196,0.24),("note",530,194,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,0))

# ---------------- Unit 9 · Without Delay ----------------
S["l09-f1"]=lambda: f_icons([("barrier","a police counter"),("logsheet","a detention register"),
    ("phone","a call being logged"),("badge","a visitor's pass at a gate"),
    ("envelope","a letter handed for forwarding"),("flashcard","rights printed in two languages"),
    ("handshake","a lawyer instructed"),("form","a request signed"),
    ("pen","a form declined"),("magnifier","two times compared")], cols=5)
S["l09-f2"]=lambda: f_scene(920,420, people=[("haddad",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("logsheet",315,196,0.24),("book",385,192,0.28),
     ("phone",455,196,0.2),("lamp",180,140,0.42),("window",815,56,0.98)],
    clockat=(140,46,22,6,45))
S["l09-f3"]=lambda: f_icons([("flashcard","informed of his rights"),("form","a request made"),
    ("phone","the post notified"),("envelope","a letter forwarded"),
    ("badge","a consular visit"),("handshake","a lawyer instructed")], cols=3)
S["l09-f4"]=lambda: f_realia(tbl("","The right nobody was told about",
    ["The right","Who must tell","When","What happens if nobody does"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The right I was never told about:</b>"), 580)
S["l09-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Legal note 9 &middot; consular access to detained nationals",
    "<p><b>The instrument.</b> The <b>Vienna Convention on Consular Relations</b>, done at Vienna on "
    "<b>24 April 1963</b>, entered into force on <b>19 March 1967</b>. It has about <b>182 "
    "parties</b> on the depositary's record.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'>If <b>he so requests</b>, the competent "
    "authorities of the receiving State shall, <b><u>without delay</u></b>, <b>inform the consular "
    "post</b> of the sending State if a national of that State is arrested, committed to prison or "
    "to custody pending trial, or detained in any other manner. <b>Any communication addressed to "
    "the consular post</b> by the person detained <b>shall be forwarded</b> <b><u>without "
    "delay</u></b>. <b>The said authorities shall inform the person concerned</b> <b><u>without "
    "delay</u></b> <b>of his rights</b> under this subparagraph.</p>"
    + table_html(["","The obligation","Owed by","Triggered by"],
      [["<b>1</b>","inform <b>the person</b> of his rights","the receiving State's authorities",
        "<b>the detention itself</b>"],
       ["<b>2</b>","inform <b>the consular post</b>, without delay","the receiving State's "
        "authorities","<b>the person's request</b>"],
       ["<b>3</b>","<b>forward</b> his communications, without delay","the receiving State's "
        "authorities","<b>his writing them</b>"],
       ["<b>4</b>","<b>refrain</b> from action if he expressly opposes it","<b>the consular "
        "officer</b>","<b>his express opposition</b>"]])
    + "<p><b>Obligation 1 matters most and is complained about least.</b> A detained person never "
    "told that he may ask will not ask. <b>So the first question in any case of late notification is "
    "not <i>when were we told?</i> but <i>when was he told?</i></b></p>"
    "<p><b>The rights of the consular officer.</b> To <b>visit</b>, to <b>converse and correspond</b> "
    "and to <b>arrange for legal representation</b>.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'>Nevertheless, consular officers <b>shall refrain "
    "from taking action</b> on behalf of a national in detention <b>if he expressly opposes such "
    "action</b>.</p>"
    "<p><b>The proviso.</b> The rights <b>shall be exercised in conformity with the laws and "
    "regulations of the receiving State</b>, <b>subject to the proviso</b> that those laws <b>must "
    "enable full effect to be given to the purposes for which the rights are intended</b>. <b>Both "
    "halves travel together.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Vienna Convention on Consular Relations of "
    "24 April 1963, in force 19 March 1967, Article 36; and the depositary's published figure of "
    "about 182 parties.</p>"))
S["l09-f6"]=lambda: f_realia(tbl("Word study","Immediacy and dual holders",
    ["Form","What it fixes","Example"],
    [["without delay","immediacy, with no fixed number of hours","shall inform the post <b>without "
      "delay</b>"],
     ["if he so requests","the trigger, which is the person's act","&nbsp;"],
     ["shall have the right to","the State's right, through its officers","&nbsp;"],
     ["shall refrain from &hellip; if he expressly opposes","the individual's veto","&nbsp;"],
     ["shall be exercised in conformity with","the local-law qualification","&nbsp;"],
     ["subject to the proviso that","the limit on that qualification","&nbsp;"]]), 620)
S["l09-f7"]=lambda: f_timeline([(0.05,"detained","the trigger for obligation 1"),
    (0.25,"informed of his rights","obligation 1"),(0.55,"his request","obligation 2 arises"),
    (0.85,"post notified","without delay")], 0.25, w=660)
S["l09-f8"]=lambda: f_icons([("flashcard","informed of his rights"),("form","a request"),
    ("phone","the post notified"),("envelope","a letter forwarded"),
    ("badge","a visit"),("handshake","a lawyer instructed")], cols=3)
S["l09-f9"]=lambda: f_realia(tbl("Detention record sheet", None,
    ["","Date","Hour"],
    [["detained","12 March","&mdash;"],["<b>informed of his rights</b>","<b>?</b>","<b>?</b>"],
     ["<b>request made</b>","<b>?</b>","<b>?</b>"],["post notified","23 March","11:40"]],
    note="<b>The national's wishes:</b> &#9634; wishes the post to act &nbsp; &#9634; does not wish "
    "the post to act &nbsp; &#9634; not yet ascertained<br>"
    "<b>Ask about row two first.</b>"), 580)
S["l09-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("haddad",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("logsheet",300,196,0.24),("book",370,192,0.28),
     ("computer",470,142,0.42),("phone",540,196,0.2),("window",805,56,0.96)],
    clockat=(140,46,22,7,0))
S["l09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>The Ministry <b>protests</b> at the failure of the competent authorities to notify this "
        "post of the detention of its national for a period of <b>eleven days</b>.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p>Detained <b>12 March</b>; post informed <b>23 March at 11:40</b>. The Ministry requests "
        "<b>on what date and at what hour</b> he was <b>informed of his rights</b>, and <b>on what "
        "date he requested</b> that the post be informed. A <b>visit</b> is requested. <b>His wishes "
        "are being ascertained.</b></p>"), w)[0:3],
    w=920, h=300)
S["l09-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Protests a delay of eleven days and demands an explanation.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1</b> The facts, with dates and hours.<br><b>2</b> Two questions, each <i>on what date and "
    "at what hour</i>.<br><b>3</b> A visit requested, with the rights relied on.<br>"
    "<b>4</b> His wishes, and that the post will refrain if he opposes.<br>"
    "<b>5</b> The proviso, quoted in full.<br>"
    "<b>6</b> What this note does <b>not</b> allege, and why; position reserved.</p>",
    "The first can be answered in one line. The second cannot."))
S["l09-f13"]=lambda: f_realia(form("Note planner",
    [("1 &nbsp;The facts, with dates and hours",""),("2 &nbsp;Question (a)",""),("Question (b)",""),
     ("3 &nbsp;The request",""),("4 &nbsp;His wishes",""),
     ("5 &nbsp;The applicable standard, in full",""),
     ("6 &nbsp;What this note does not allege","")]), 520)
S["l09-f14"]=lambda: f_scene(980,440,
    people=[("bah",120,176,{}),("haddad",200,176,{"seated":True}),
     ("nadia",290,176,{}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("logsheet",150,196,0.22),("printer",560,198,0.4),
     ("phone",425,196,0.2),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(285,24,215,104,"FOUR MARKS",
      [("detained",""),("told his rights","&larr;"),("his request",""),("post notified","")]),
    clockat=(240,30,22,7,0))
S["l09-f15"]=lambda: f_chart([("yes, always",9),("only on request",3),("after charge",3),
    ("only for serious offenses",2),("I had not thought about it",4)])
S["l09-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("envelope",320,194,0.22),("note",390,194,0.22),
     ("logsheet",460,196,0.22),("folder",530,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,5,30))
