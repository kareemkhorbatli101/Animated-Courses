# -*- coding: utf-8 -*-
"""Foreign Service English Book 6 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · A Statement That Binds ----------------
S["l04-f1"]=lambda: f_icons([("podium","a minister at a podium"),("essay","a press release"),
    ("quotemark","one sentence underlined"),("camera","a camera flash"),
    ("envelope","a reaction arriving"),("folder","a file of reliance"),
    ("pencil","the words will consider"),("certificate","sealed full powers"),
    ("note","a withdrawal letter"),("magnifier","a transcript highlighted")], cols=5)
S["l04-f2"]=lambda: f_scene(920,420, people=[("haddad",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("essay",315,194,0.26),("note",385,194,0.22),
     ("envelope",450,194,0.22),("computer",600,142,0.44),("window",815,56,0.98)],
    clockat=(140,46,22,8,20))
S["l04-f3"]=lambda: f_icons([("podium","made publicly"),("quotemark","an intention manifested"),
    ("essay","another State relying"),("magnifier","read narrowly"),
    ("badge","a competence checked"),("pen","a revocation reasoned")], cols=3)
S["l04-f4"]=lambda: f_realia(tbl("","The statement that became a commitment",
    ["The statement","Who made it and where","How specific the terms were","Who acted on it"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The sentence nobody cleared:</b>"), 580)
S["l04-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Legal note 4 &middot; unilateral declarations",
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The status of the text, first.</b> The "
    "<b>International Law Commission</b> adopted in <b>2006</b> the <b>Guiding Principles applicable "
    "to unilateral declarations of States capable of creating legal obligations</b>, with "
    "commentaries. The General Assembly <b>took note of them</b> and <b>commended them to the "
    "attention of Governments</b>. <b>They are not a treaty.</b> They state a rule that exists "
    "independently of them.</p>"
    "<p><b>The gate.</b> Declarations <b>publicly made</b> and <b>manifesting the will to be "
    "bound</b> may have the effect of creating legal obligations. The <b>binding character</b> of "
    "such declarations is based on <b>good faith</b>; States concerned may <b>take them into "
    "consideration and rely on them</b>, and are <b>entitled to require</b> that such obligations be "
    "respected.</p>"
    "<p><b>Read what that does not require.</b> No treaty. No signature. <b>No acceptance by "
    "anybody.</b></p>"
    + table_html(["","What it requires"],
      [["<b>Clear and specific terms</b>","a declaration entails obligations <b>only if</b> stated "
        "in <b>clear and specific terms</b>"],
       ["<b>Restrictive interpretation</b>","in case of <b>doubt as to the scope</b>, the "
        "obligations <b>must be interpreted in a restrictive manner</b>"],
       ["<b>Competence</b>","only an <b>authority vested with the power to do so</b> &mdash; the "
        "three offices generally; others only <b>in areas within their competence</b>"]])
    + "<p><b>And what is taken into account.</b> Its <b>content</b>, <b>all the factual "
    "circumstances</b> in which it was made, and <b>the reactions to which it gave rise</b>. <b>The "
    "reactions of other States are part of the test.</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Revocation.</b> A unilateral declaration "
    "that has created legal obligations <b>cannot be revoked arbitrarily</b>. Consideration is given "
    "to <b>the terms</b>, <b>the extent of reliance</b>, and <b>any fundamental change of "
    "circumstances</b>.</p>"
    "<p><b>What this means for our press office.</b> Avoid clear and specific terms unless a "
    "commitment is intended &mdash; <i>will consider</i> is not <i>will</i>. <b>Know who is "
    "speaking.</b> And <b>read the reactions</b>: if another ministry has thanked us for an "
    "undertaking, we have an undertaking.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Guiding Principles applicable to unilateral "
    "declarations of States capable of creating legal obligations, adopted by the International Law "
    "Commission in 2006 with commentaries, of which the General Assembly took note and which it "
    "commended to the attention of Governments; Principles 1, 3, 4, 7 and 10. Not a treaty.</p>"))
S["l04-f6"]=lambda: f_realia(tbl("Word study","Manifested intention",
    ["Form","What it establishes","Example"],
    [["manifesting the will to be bound","the gate","declarations <b>manifesting the will to be "
      "bound</b>"],
     ["entails obligations only if","the first brake","<b>only if</b> stated in clear and specific "
      "terms"],
     ["must be interpreted in a restrictive manner","the second brake","&nbsp;"],
     ["vested with the power to do so","the third brake","&nbsp;"],
     ["cannot be revoked arbitrarily","the consequence afterwards","&nbsp;"],
     ["the reactions to which it gave rise","part of the test","&nbsp;"]]), 620)
S["l04-f7"]=lambda: f_process(["publicly made, manifesting the will to be bound",
    "clear and specific terms","restrictive interpretation of any doubt",
    "competence of the speaker","an obligation"], w=660)
S["l04-f8"]=lambda: f_icons([("podium","made publicly"),("quotemark","intention manifested"),
    ("essay","relied on"),("magnifier","read narrowly"),
    ("badge","competence checked"),("pen","revocation reasoned")], cols=3)
S["l04-f9"]=lambda: f_realia(doc("Clearance sheet &middot; proposed sentence", None,
    "<p style='border:1px solid #d9d4c9;padding:10px;text-align:center;font-size:17px'>"
    "<i>We will complete the review and publish our findings before the end of the year.</i></p>"
    + table_html(["","This sentence"],
      [["<b>Terms</b>","clear and specific: two acts and a date"],
       ["<b>Competence</b>","Minister for Foreign Affairs &mdash; in virtue of functions"],
       ["<b>Reactions anticipated</b>","likely to be welcomed in writing"]])
    + table_html(["The weight scale",""],
      [["we undertake to","a commitment, expressly"],
       ["we will + date","<b>&larr; the proposed sentence</b>"],
       ["we intend to","an intention, not a will to be bound"],
       ["we will consider","a commitment to consider"],
       ["we are examining the possibility of","the weakest honest form"],
       ["it is our policy to","policy, changeable by announcement"]])
    + "<p><b>If a commitment is intended, say so in the note.</b></p>"))
S["l04-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("haddad",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("essay",300,194,0.26),("envelope",370,194,0.22),
     ("computer",470,142,0.42),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,8,30))
S["l04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Clearance sheet A", None,
        "<p>Cleared.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Clearance sheet B", None,
        "<p>The sentence printed in full. <b>As drafted it would commit the State.</b> The "
        "commitment stated exactly. <b>Three alternative drafts</b> at three weights. What the note "
        "records. What to do about reactions, within three working days.</p>"), w)[0:3],
    w=920, h=300)
S["l04-f12"]=lambda: f_realia(doc("Two clearance notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The proposed line is cleared.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1</b> The sentence proposed, in full.<br>"
    "<b>2</b> What it would do: publicly made, clear and specific, competent authority.<br>"
    "<b>3</b> The commitment stated exactly &mdash; and what it would not cover.<br>"
    "<b>4</b> Three drafts at three weights.<br>"
    "<b>5</b> That the undertaking, if given, is given <b>with advice</b>.<br>"
    "<b>6</b> Reactions to be referred to this Department within three working days.</p>",
    "The first clears words; the second says what the words would do."))
S["l04-f13"]=lambda: f_realia(form("Clearance planner",
    [("1 &nbsp;The sentence proposed",""),("2 &nbsp;What it would do",""),
     ("3 &nbsp;The commitment, stated exactly",""),("4 &nbsp;Draft at commitment weight",""),
     ("Draft at intention weight",""),("Draft at consideration weight",""),
     ("5 &nbsp;What this note records",""),("6 &nbsp;What to do about reactions","")]), 520)
S["l04-f14"]=lambda: f_scene(980,440,
    people=[("nadia",120,160,{}),("bah",200,176,{}),
     ("haddad",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("podium",150,150,0.4),("microphone",240,196,0.2),
     ("camera",560,198,0.3),("computer",430,142,0.4),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(240,32,22,10,50))
S["l04-f15"]=lambda: f_chart([("nothing legally",7),("politics only",5),
    ("may bind on conditions",4),("binds always",2),("I had not thought about it",4)])
S["l04-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("envelope",395,194,0.24),
     ("note",465,194,0.22),("folder",535,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,0))

# ---------------- Unit 5 · What You Call It Does Not Decide What It Is ----------------
S["l05-f1"]=lambda: f_icons([("essay","an instrument with a statement attached"),
    ("pencil","an article struck through"),("quotemark","a gloss beside an article"),
    ("envelope","a depositary circulation"),("note","an objection arriving"),
    ("review","a column of declarations"),("pen","subject to the understanding that"),
    ("balance","a legal opinion in two halves"),("calendar","a late statement"),
    ("magnifier","a statement and its article compared")], cols=5)
S["l05-f2"]=lambda: f_scene(920,420, people=[("haddad",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("essay",315,194,0.26),("book",385,192,0.28),
     ("note",455,194,0.22),("computer",600,142,0.44),("window",815,56,0.98)],
    clockat=(140,46,22,12,0))
S["l05-f3"]=lambda: f_icons([("pen","a statement formulated"),("envelope","circulated"),
    ("magnifier","read by parties"),("stamp","characterized"),
    ("note","an objection formulated"),("review","recorded on a status page")], cols=3)
S["l05-f4"]=lambda: f_realia(tbl("","The convenient name",
    ["The statement","What it was called","What it purported to do","Who the name reassured"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The name I accepted without checking:</b>"), 580)
S["l05-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Legal note 5 &middot; characterizing a statement",
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The texts, and their status.</b> The "
    "definition of a <b>reservation</b> is in the <b>Vienna Convention on the Law of Treaties</b> of "
    "<b>23 May 1969</b>, Article 2(1)(d) &mdash; a treaty provision. The definition of an "
    "<b>interpretative declaration</b>, and the method of distinguishing the two, are in the "
    "<b>Guide to Practice on Reservations to Treaties</b>, adopted by the <b>International Law "
    "Commission in 2011</b>, of which the General Assembly <b>took note</b> and which it <b>brought "
    "to the attention of States</b>. <b>The Guide is not a treaty.</b></p>"
    + table_html(["",""],
      [["<b>Reservation</b>","a unilateral statement, <b>however phrased or named</b>, made when "
        "signing, ratifying, accepting, approving or acceding, whereby a State purports to "
        "<b><u>exclude or modify the legal effect</u></b> of certain provisions in their application "
        "to that State"],
       ["<b>Interpretative declaration</b>","a unilateral statement, <b>however phrased or "
        "named</b>, whereby a State purports to <b><u>clarify the meaning or scope</u></b> of a "
        "treaty or of certain of its provisions"]])
    + "<p><b>The test.</b> The character of a unilateral statement <b>is determined by the legal "
    "effect that its author purports to produce</b>.</p>"
    "<p><b>And the name?</b> The phrasing or name <b>provides an indication of</b> the purported "
    "legal effect. <b>An indication</b>: evidence of intention, and not the test.</p>"
    + table_html(["The statement","What it purports to do","What it is"],
      [["<i>X understands article 6 to require notification within a reasonable time.</i>",
        "clarify a term the article uses","<b>an interpretative declaration</b>"],
       ["<i>X understands article 6 as not applying to vessels under fifty meters.</i>",
        "remove a category the article does not distinguish","<b>a reservation</b>"],
       ["<i>X will apply article 9 only in accordance with its constitution.</i>",
        "modify how the provision applies","<b>a reservation</b>"],
       ["<i>Nothing in the treaty affects X's position on the status of the Sable Isles.</i>",
        "neither; a position outside the treaty's subject","<b>neither</b>, and a reply is still "
        "needed"]])
    + "<p><b>A third category.</b> A <b>conditional interpretative declaration</b> makes the State's "
    "<b>consent to be bound subject to</b> the interpretation stated. <b>Treat it with the "
    "seriousness of a reservation.</b></p>"
    "<p><b>Characterize first, reply second.</b> A ministry that replies first will reply in the "
    "wrong form, and a reply in the wrong form concedes the point.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Vienna Convention on the Law of Treaties, "
    "Article 2(1)(d); and the Guide to Practice on Reservations to Treaties, adopted by the "
    "International Law Commission in 2011, which is not a treaty.</p>"))
S["l05-f6"]=lambda: f_realia(tbl("Word study","Characterization",
    ["Form","What it does","Example"],
    [["purports to","reports what a statement sets out to do","the statement <b>purports to</b> "
      "exclude article 6"],
     ["however phrased or named","excludes the label from the test","&nbsp;"],
     ["is determined by","states the test","&nbsp;"],
     ["provides an indication of","gives the label its exact weight","&nbsp;"],
     ["is to be characterized as","states the conclusion as ours","&nbsp;"],
     ["falls to be treated as","the same, more cautious","&nbsp;"]]), 600)
S["l05-f7"]=lambda: f_matrix(["reservation","interpretative declaration"],
    [("the shared opening", ["however phrased or named","however phrased or named"]),
     ("the verb", ["exclude or modify","clarify"]),
     ("what it touches", ["the legal effect","the meaning or scope"]),
     ("if consent is made subject to it", ["&mdash;","treat as a reservation"])])
S["l05-f8"]=lambda: f_icons([("pen","formulated"),("envelope","circulated"),
    ("magnifier","read"),("stamp","characterized"),
    ("note","objected to"),("review","recorded")], cols=3)
S["l05-f9"]=lambda: f_realia(doc("Characterization sheet", None,
    "<p>The statement, and the provision it concerns, side by side.</p>"
    + table_html(["The statement","Article 6"],
      [["<i>The Government of Astrand declares its understanding that article 6 does not apply to "
        "vessels of less than fifty meters in length.</i>",
        "<i>Each Party shall require vessels flying its flag to carry the equipment specified in "
        "Annex II.</i>"]])
    + table_html(["purports to clarify","purports to exclude or modify"],
      [["","<b>&#10003;</b>"]])
    + "<p><b>Our characterization:</b> a reservation, however phrased or named.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What follows</b><br>"
    "the objection practice applies &middot; the period runs from circulation on 4 March &middot; a "
    "draft objection and recommendation by 30 April</p>"
    "<p><b>Characterize first, reply second.</b></p>"))
S["l05-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("haddad",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("envelope",300,194,0.22),("book",365,192,0.28),
     ("computer",470,142,0.42),("logsheet",540,196,0.22),("window",805,56,0.96)],
    clockat=(140,46,22,12,20))
S["l05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Minute A", None,
        "<p>Astrand has made an <b>interpretative declaration</b>. No action is recommended.</p>"),
        w)[0:3],
    lambda w,h: f_realia(doc("Minute B", None,
        "<p>The statement and article 6, side by side. <b>Article 6 draws no distinction by "
        "length.</b> The statement <b>purports to exclude</b> its application to a category. <b>We "
        "characterize it as a reservation.</b> The period runs from <b>4 March</b>.</p>"), w)[0:3],
    w=920, h=300)
S["l05-f12"]=lambda: f_realia(doc("Two minutes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Minute 1</b><br>"
    "The statement is headed an interpretative declaration and is therefore not a reservation.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Minute 2</b><br>"
    "<b>1</b> The statement and the provision, side by side, with the date of circulation.<br>"
    "<b>2</b> What the statement purports to do, by reference to what the provision says.<br>"
    "<b>3</b> Our characterization, stated as ours; the heading's exact weight.<br>"
    "<b>4</b> What follows, with the date the period runs from and an internal deadline.<br>"
    "<b>5</b> What this minute does not say.</p>",
    "One of these reports the author's characterization as the answer."))
S["l05-f13"]=lambda: f_realia(form("Minute planner",
    [("1 &nbsp;The statement",""),("The provision",""),
     ("2 &nbsp;What it purports to do",""),("3 &nbsp;Our characterization",""),
     ("4 &nbsp;What follows, with dates",""),("5 &nbsp;What this minute does not say","")]), 520)
S["l05-f14"]=lambda: f_scene(980,440,
    people=[("bah",120,176,{}),("haddad",200,176,{"seated":True}),
     ("nadia",290,176,{}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("envelope",150,194,0.22),("printer",560,198,0.4),
     ("calendar",700,70,0.44),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(285,24,215,104,"ONE OPENING",
      [("exclude or modify","reservation"),("clarify","declaration")]),
    clockat=(240,30,22,12,30))
S["l05-f15"]=lambda: f_chart([("it decides the character",7),("it indicates the intention",5),
    ("it is irrelevant",3),("it decides the procedure",2),("I had not thought about it",4)])
S["l05-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("envelope",395,194,0.24),
     ("note",465,194,0.22),("folder",535,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,10,0))

# ---------------- Unit 6 · The Claim Belongs to the State ----------------
S["l06-f1"]=lambda: f_icons([("consultation","a consular interview room"),
    ("passport","a passport and a certificate"),("podium","a foreign courtroom"),
    ("folder","three stages of appeal"),("envelope","a diplomatic note"),
    ("coins","a compensation record"),("family","a family at a counter"),
    ("balance","a file marked discretion"),("note","a recommended practice page"),
    ("handshake","two officers explaining gently")], cols=5)
S["l06-f2"]=lambda: f_scene(920,420, people=[("haddad",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("folder",315,194,0.24),("passport",385,196,0.2),
     ("note",450,194,0.22),("lamp",180,140,0.42),("window",815,56,0.98)],
    clockat=(140,46,22,4,10))
S["l06-f3"]=lambda: f_icons([("passport","nationality established"),("clipboard","an injury documented"),
    ("podium","local courts, three stages"),("balance","a decision taken"),
    ("envelope","a claim presented"),("coins","compensation transferred")], cols=3)
S["l06-f4"]=lambda: f_realia(tbl("","The right that is not yours",
    ["The right","Who holds it","Who is affected","What the holder should do first"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The conversation I would have to have:</b>"), 580)
S["l06-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Legal note 6 &middot; diplomatic protection",
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The status of the text.</b> The "
    "<b>International Law Commission</b> adopted the <b>Articles on Diplomatic Protection</b> in "
    "<b>2006</b>. The General Assembly <b>took note of them</b> and <b>commended them to the "
    "attention of Governments</b>. <b>They are not a treaty.</b></p>"
    "<p><b>What diplomatic protection is.</b> The <b>invocation by a State</b>, through diplomatic "
    "action or other means of peaceful settlement, of the <b>responsibility of another State</b> for "
    "an injury caused by an internationally wrongful act <b>to a natural or legal person that is a "
    "national</b> of the former State.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>A State has the right to exercise "
    "diplomatic protection.</b> The State entitled to exercise it is <b>the State of "
    "nationality</b>. <b>The right is the State's own.</b> The injured person is the occasion of the "
    "claim and not its owner, and cannot require the State to bring it.</p>"
    + table_html(["","What it requires"],
      [["<b>Nationality of claims</b>","the injured person must be <b>a national of the claiming "
        "State</b>, established from documents"],
       ["<b>Exhaustion of local remedies</b>","the injured person must, <b>subject to the recognized "
        "exceptions</b>, have <b>exhausted all local remedies</b>"]])
    + "<p><b>The recommended practice, and its verbs.</b> A State entitled to exercise diplomatic "
    "protection <b>should</b>: give <b>due consideration</b> to the possibility of exercising it, "
    "<b>especially where a significant injury has occurred</b>; take into account, <b>wherever "
    "feasible</b>, the <b>views of injured persons</b>; and <b>transfer to the injured person any "
    "compensation obtained</b>, <b>subject to any reasonable deductions</b>.</p>"
    "<p><b>Three <i>shoulds</i>, and not one <i>shall</i>.</b> The article is headed <b>recommended "
    "practice</b>. A State that gives no consideration, consults nobody and keeps what it recovers "
    "<b>has not breached an obligation</b> &mdash; and has done something this Ministry would not "
    "defend, which belongs in a different part of the note.</p>"
    "<p><b>What we say to a family.</b> That the claim is the State's and the decision the "
    "Ministry's. That their views will be taken into account, and will be asked for in writing. That "
    "local remedies must ordinarily be exhausted, with the stages and an estimate of time. <b>Not "
    "<i>there is nothing we can do</i>, which is untrue, and not <i>we will bring your claim</i>, "
    "which is not ours to promise.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Articles on Diplomatic Protection, adopted "
    "by the International Law Commission in 2006, of which the General Assembly took note and which "
    "it commended to the attention of Governments; Articles 1, 2, 3, 14 and 19. Article 19 is headed "
    "<i>Recommended practice</i> and uses <i>should</i>.</p>"))
S["l06-f6"]=lambda: f_realia(tbl("Word study","Rights held at discretion",
    ["Form","What it establishes","Example"],
    [["has the right to","a power, not a duty","a State <b>has the right to</b> exercise diplomatic "
      "protection"],
     ["is entitled to","the same, with a condition","the State <b>entitled to</b> exercise it is the "
      "State of nationality"],
     ["is not obliged to","the other half, expressly","&nbsp;"],
     ["should give due consideration to","recommended practice","&nbsp;"],
     ["wherever feasible","a qualified recommendation","&nbsp;"],
     ["subject to any reasonable deductions","a limit inside a recommendation","&nbsp;"]]), 620)
S["l06-f7"]=lambda: f_process(["nationality","exhaustion of local remedies",
    "the State's discretion","a claim presented"], w=640)
S["l06-f8"]=lambda: f_icons([("passport","nationality"),("clipboard","the injury"),
    ("podium","three stages"),("balance","a decision"),
    ("envelope","a claim presented"),("coins","compensation transferred")], cols=3)
S["l06-f9"]=lambda: f_realia(doc("Claim assessment sheet", None,
    "<p>Two preconditions, then a decision.</p>"
    + table_html(["","Established"],
      [["<b>Nationality</b>","&#10003; passport and birth certificate on file"],
       ["<b>Local remedies</b>","&mdash; three stages; first instance only"]])
    + "<p style='border:1px solid #d9d4c9;padding:9px'><b>The three recommended steps</b><br>"
    "<b>should</b> give due consideration to exercising protection<br>"
    "<b>should</b> take the injured person's views into account, wherever feasible<br>"
    "<b>should</b> transfer any compensation obtained, subject to reasonable deductions</p>"
    "<p><b>Decision:</b> for the Director, on 9 October.</p>"
    "<p><b>Nothing in this sheet is to be read to the family as a decision.</b></p>"))
S["l06-f10"]=lambda: f_scene(940,430, people=[("haddad",300,176,{"seated":True}),
     ("bah",380,176,{"seated":True})],
    props=[("desk",230,0,1.1),("table",520,0,0.8),("folder",300,194,0.24),
     ("passport",360,196,0.18),("chair",640,0,0.7),("chair",720,0,0.7),
     ("window",805,56,0.96)],
    clockat=(140,46,22,4,30))
S["l06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Letter A", None,
        "<p>&hellip; we will submit <b>your claim</b> to the Government of Perenne shortly, and we "
        "are doing everything we can for your son.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Letter B", None,
        "<p><b>The right to make this claim is a right of our State</b>, and the decision whether to "
        "exercise it is the Ministry's. <b>The Ministry is giving due consideration</b> to "
        "exercising it; the file goes to the Director on <b>9 October</b>. <b>Your views will be "
        "taken into account</b> &mdash; please return the enclosed sheet by <b>7 October</b>. I will "
        "write again <b>by 14 November</b>, whatever the position is.</p>"), w)[0:3],
    w=920, h=300)
S["l06-f12"]=lambda: f_realia(doc("Two letters", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 1</b><br>"
    "Contains the words <i>your claim</i> and <i>we will submit</i>.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 2</b><br>"
    "<b>1</b> Whose right it is, in both halves.<br><b>2</b> What is happening now, with a date.<br>"
    "<b>3</b> What the family are asked for, with a date.<br>"
    "<b>4</b> The local remedies position: three stages, eleven to nineteen months, and why the rule "
    "exists.<br><b>5</b> What I will do whatever is decided, and this Ministry's practice on "
    "compensation.</p>",
    "The first is kinder in March and crueller in December."))
S["l06-f13"]=lambda: f_realia(form("Letter planner",
    [("1 &nbsp;Whose right it is",""),("2 &nbsp;What is happening now, with a date",""),
     ("3 &nbsp;What we ask of you, with a date",""),
     ("4 &nbsp;The precondition, with stages and times",""),
     ("5 &nbsp;What I will do whatever is decided","")]), 520)
S["l06-f14"]=lambda: f_scene(980,440,
    people=[("bah",120,176,{}),("haddad",200,176,{"seated":True}),
     ("nadia",290,176,{}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("folder",150,194,0.22),("printer",560,198,0.4),
     ("queue",380,196,0.3),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(285,24,215,100,"THE PATH",
      [("nationality","&#10003;"),("local remedies",""),("discretion","&#9670;")]),
    clockat=(240,30,22,4,30))
S["l06-f15"]=lambda: f_chart([("the individual's",9),("the State's",3),("both jointly",4),
    ("the family's lawyer's",2),("I had not thought about it",3)])
S["l06-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("folder",320,194,0.24),("essay",390,194,0.24),
     ("note",460,194,0.22),("book",530,192,0.26),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,0))
