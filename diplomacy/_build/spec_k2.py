# -*- coding: utf-8 -*-
"""Foreign Service English Book 5 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · Three-Quarters of Which Parties? ----------------
S["k04-f1"]=lambda: f_icons([("book","a convention and an amendment"),("pen","a phrase underlined"),
    ("tally","two different totals"),("calculator","a fraction on a display"),
    ("meeting","a conference adopting a decision"),("essay","two headed sections"),
    ("deposit2","the depositary receiving"),("calendar","ninety days shaded"),
    ("certificate","entry into force"),("handshake","a denominator argued")], cols=5)
S["k04-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("book",310,192,0.3),("logsheet",385,196,0.24),
     ("logsheet",445,196,0.24),("calculator",520,196,0.22),("window",815,56,0.98)],
    clockat=(140,46,22,12,0))
S["k04-f3"]=lambda: f_icons([("meeting","an amendment adopted"),("logsheet","a list fixed"),
    ("tally","a list growing"),("calculator","two totals compared"),
    ("stamp","a decision resolving it"),("deposit2","the threshold completed")], cols=3)
S["k04-f4"]=lambda: f_realia(tbl("","The clause with two readings",
    ["The provision","Reading one","Reading two","Who can settle it"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The reading my office has assumed:</b>"), 580)
S["k04-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Delegation note 4 &middot; a threshold with two readings",
    "<p><b>The instrument.</b> The <b>Basel Convention</b> on the control of transboundary movements "
    "of hazardous wastes was adopted on <b>22 March 1989</b> and entered into force on <b>5 May "
    "1992</b>. It has about <b>191 parties</b>, on the secretariat's page, which carries its "
    "date.</p>"
    "<p><b>The amendment.</b> In <b>1995</b> the Conference of the Parties adopted an amendment "
    "&mdash; the <b>Ban Amendment</b> &mdash; prohibiting exports of hazardous wastes from the "
    "parties listed in one annex to parties not so listed.</p>"
    "<p><b>The clause that caused the trouble.</b> An amendment enters into force <b>between the "
    "Parties having accepted it</b> on the ninetieth day after the depositary has received "
    "instruments from <b>at least three-fourths of the Parties who accepted them</b>.</p>"
    + table_html(["","What is counted","The practical effect"],
      [["<b>fixed-time</b>","three-quarters of the states that were parties <b>when the amendment "
        "was adopted</b>, in 1995","a number that can be <b>written down</b>"],
       ["<b>current-time</b>","three-quarters of the states that are <b>parties now</b>",
        "a number that <b>rises</b> whenever a state joins"]])
    + "<p><b>Why that is not a quibble.</b> Under the second reading the threshold moves away as the "
    "Convention succeeds. Under the first it was settled in 1995. <b>The difference was, in "
    "practice, of the order of thirty ratifications.</b></p>"
    + table_html(["",""],
      [["<b>Amendment adopted</b>","<b>1995</b>"],
       ["<b>Question left unresolved</b>","for <b>sixteen years</b>"],
       ["<b>Resolved by decision of the Parties</b>","<b>2011</b>, in favor of <b>fixed-time</b>"],
       ["<b>Entered into force</b>","<b>5 December 2019</b>"]])
    + "<p><b>Whom it binds.</b> The amendment is in force <b>between the parties that have accepted "
    "it</b>. It is <b>not</b> in force for a party that has not accepted it, and no party acquired "
    "an obligation under it by remaining a party to the Convention.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Basel Convention of 22 March 1989, in force "
    "5 May 1992; its amendment article; the Ban Amendment adopted in 1995; the decision of the "
    "Conference of the Parties in 2011 adopting the fixed-time approach; and the entry into force of "
    "the Ban Amendment on 5 December 2019 between the parties having accepted it.</p>"))
S["k04-f6"]=lambda: f_realia(tbl("Word study","Presenting two readings",
    ["Form","What it does","Example"],
    [["on one reading &hellip; on the other","two meanings, no choice",
      "<b>On one reading</b> the list is fixed; <b>on the other</b> it grows."],
     ["is capable of meaning","a possible meaning, neutrally",
      "The phrase <b>is capable of meaning</b> either."],
     ["turns on whether","names the point in dispute",
      "The question <b>turns on whether</b> they are counted at adoption."],
     ["is open to the construction that","formal, in legal advice","&nbsp;"],
     ["has been understood to mean","how a text has been applied","&nbsp;"],
     ["was resolved in favor of","the outcome","&nbsp;"]]), 620)
S["k04-f7"]=lambda: f_chart([("three-quarters of the 1995 parties",62),
    ("three-quarters of the parties today",143)], unit="ratifications")
S["k04-f8"]=lambda: f_icons([("meeting","adopted"),("logsheet","a list fixed"),
    ("tally","a list growing"),("calculator","two totals"),
    ("stamp","resolved"),("deposit2","the threshold completed")], cols=3)
S["k04-f9"]=lambda: f_realia(doc("Threshold card &middot; the Ban Amendment", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'>instruments from <b>at least three-fourths of "
    "the Parties <u>who accepted them</u></b> &mdash; <b>the clause does not say when they are "
    "counted</b></p>"
    + table_html(["Reading one: fixed-time","Reading two: current-time"],
      [["the parties as at <b>1995</b>","the parties <b>at the time of counting</b>"],
       ["a stable number","a number that rises with each accession"]])
    + "<p style='background:#f2efe8;padding:9px'><b>Resolved by decision of the Parties, 2011</b>, "
    "in favor of the fixed-time approach. <b>Entered into force 5 December 2019.</b></p>"
    "<p><b>Between the parties that have accepted it.</b></p>"))
S["k04-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("omar",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("book",300,192,0.3),("logsheet",370,196,0.24),
     ("logsheet",430,196,0.24),("calculator",500,196,0.22),("window",805,56,0.96)],
    clockat=(140,46,22,12,15))
S["k04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>The Ban Amendment entered into force on 5 December 2019 and is now in force.</p>"),
        w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p>The clause requires three-fourths of <b>the Parties who accepted</b> the amendment and "
        "<b>does not say when they are counted</b>. <b>On one reading</b> the list is fixed at 1995; "
        "<b>on the other</b> it rises. <b>Resolved by the Parties in 2011</b> in favor of the fixed "
        "list; in force from <b>5 December 2019</b>, <b>between the parties that have accepted "
        "it</b>.</p>"), w)[0:3],
    w=920, h=300)
S["k04-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The Ban Amendment is in force since 5 December 2019.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1</b> The clause: three-fourths of the Parties who accepted it; no date for counting.<br>"
    "<b>2</b> Two readings, fixed-time and current-time, in parallel.<br>"
    "<b>3</b> Resolved by decision of the Parties in 2011 &mdash; <b>decided, not discovered</b>.<br>"
    "<b>4</b> In force from 5 December 2019, <b>between the parties that have accepted it</b>.<br>"
    "<b>5</b> The position for one state is on the depositary's record, read on the day.</p>",
    "The first is true and implies a falsehood about every party that has not accepted it."))
S["k04-f13"]=lambda: f_realia(form("Legal note planner",
    [("1 &nbsp;The clause, and the gap",""),("2 &nbsp;Reading one",""),("Reading two",""),
     ("3 &nbsp;How it was resolved, and by whom",""),
     ("4 &nbsp;Entry into force, and whom it binds",""),
     ("5 &nbsp;The sentence for one particular case","")]), 520)
S["k04-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("bah",200,172,{}),
     ("nadia",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("logsheet",150,196,0.22),("printer",560,198,0.4),
     ("calculator",425,196,0.22),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(290,26,215,104,"WHICH DENOMINATOR?",
      [("3/4 of 1995","62"),("3/4 of today","143 &rarr;"),("difference","~30")]),
    clockat=(240,30,22,12,0))
S["k04-f15"]=lambda: f_chart([("the parties at adoption",4),("the parties today",6),
    ("the parties that have ratified",5),("all parties",3),
    ("I did not know there was a question",6)])
S["k04-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("logsheet",395,196,0.24),
     ("folder",465,194,0.26),("pen",535,198,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,2,30))

# ---------------- Unit 5 · The Listing That Never Happened ----------------
S["k05-f1"]=lambda: f_icons([("container","a drum with a hazard label"),
    ("form","an export document with a consent box"),("logsheet","an annex of substances"),
    ("meeting","a committee of seven"),("signature","a recommendation signed"),
    ("podium","a plenary with flags"),("stamp","a gavel unused"),
    ("book","a national regulation"),("barrier","a customs counter"),
    ("handshake","a recommendation and an annex compared")], cols=5)
S["k05-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("logsheet",315,196,0.24),("essay",385,194,0.26),
     ("book",450,192,0.28),("computer",600,142,0.44),("window",815,56,0.98)],
    clockat=(140,46,22,2,20))
S["k05-f3"]=lambda: f_icons([("signature","a listing recommended"),("envelope","transmitted"),
    ("meeting","the item considered"),("microphone","no consensus"),
    ("logsheet","the annex unchanged"),("book","a national rule applied")], cols=3)
S["k05-f4"]=lambda: f_realia(tbl("","Recommended and not adopted",
    ["The recommendation","Who made it and when","What adoption requires",
     "What happens in the meantime"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What people wrongly conclude from it:</b>"), 580)
S["k05-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Delegation note 5 &middot; listing by consensus",
    table_html(["",""],
      [["<b>Rotterdam Convention</b> on the prior informed consent procedure for certain hazardous "
        "chemicals and pesticides in international trade","adopted <b>10 September 1998</b>"],
       ["<b>Entered into force</b>","<b>24 February 2004</b>"],
       ["<b>Parties</b>","about <b>165</b>, on the secretariat's page, which carries its date"]])
    + "<p><b>What listing does.</b> A chemical <b>listed in Annex III</b> is subject to the prior "
    "informed consent procedure: an exporting party must ensure that export does not take place "
    "contrary to the importing party's decision, and that decision &mdash; to consent, to consent "
    "subject to conditions, or to withhold consent &mdash; is published. <b>The procedure is about "
    "information and consent. It is not a prohibition.</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>How the annex is amended.</b> By a "
    "<b>decision of the Conference of the Parties</b>, which the Convention requires to be taken "
    "<b>by consensus</b>. There is no majority route. <b>One party present and objecting is "
    "sufficient to prevent a listing</b>, and that is not a defect in the procedure: it is the "
    "procedure.</p>"
    "<p><b>The recommendation, and the non-decision.</b> The Convention's <b>Chemical Review "
    "Committee</b> examines proposals against the Convention's criteria. It <b>recommended</b> that "
    "<b>chrysotile asbestos</b> be listed. The Conference has considered that recommendation at "
    "<b>session after session since 2006</b> and <b>has not reached consensus</b>. <b>The substance "
    "remains unlisted.</b></p>"
    + table_html(["It does not mean","Because"],
      [["that the substance is safe","the Conference took no decision about its properties"],
       ["that the Committee was wrong","the recommendation stands, published, unamended"],
       ["that the substance is unregulated","every party regulates it, or not, under its own law"],
       ["that the question is closed","the item returns to the agenda"]])
    + "<p><b>Proposals to change the rule</b> &mdash; to allow listing by a qualified majority "
    "&mdash; have themselves been considered and <b>not adopted</b>.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Rotterdam Convention of 10 September 1998, "
    "in force 24 February 2004; its provisions on the prior informed consent procedure and on the "
    "amendment of Annex III by consensus; the recommendation of the Chemical Review Committee "
    "concerning chrysotile asbestos; and the records of successive meetings of the Conference of the "
    "Parties.</p>"))
S["k05-f6"]=lambda: f_realia(tbl("Word study","Result and purpose",
    ["Form","Result or purpose","Example"],
    [["so that","either, from context","The procedure exists <b>so that</b> the importing state can "
      "decide."],
     ["in order that","purpose, formal","<b>In order that</b> consent may be informed."],
     ["with the result that","result only","Consensus was not reached, <b>with the result that</b> "
      "the substance is not listed."],
     ["thereby","result, with a participle","&nbsp;"],
     ["so as to","purpose, with an infinitive","&nbsp;"],
     ["such that","result, heavy","&nbsp;"]]), 620)
S["k05-f7"]=lambda: f_process(["a proposal","the review committee","a recommendation",
    "the Conference of the Parties","the annex"], w=640)
S["k05-f8"]=lambda: f_icons([("signature","recommended"),("envelope","transmitted"),
    ("meeting","considered"),("microphone","no consensus"),
    ("logsheet","unchanged"),("book","a national rule")], cols=3)
S["k05-f9"]=lambda: f_realia(doc("Briefing card &middot; listing of chemicals", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The recommendation.</b> The Chemical Review "
    "Committee recommended listing in Annex III, having examined the substance against the "
    "Convention's criteria. <b>The recommendation stands.</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What the Conference has done.</b> Considered "
    "the recommendation at successive meetings since 2006 and <b>has not reached consensus</b>.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What follows.</b> The substance is not "
    "listed; the prior informed consent procedure does not apply to it.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What does not follow.</b> that it is safe "
    "&middot; that the Committee was wrong &middot; that it is unregulated &middot; that the "
    "question is closed</p>"
    "<p><b>What may lawfully be imported here is a matter of our own law.</b></p>"))
S["k05-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("omar",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("logsheet",300,196,0.24),("essay",370,194,0.26),
     ("computer",470,142,0.42),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,6,30))
S["k05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Press line A", None,
        "<p>The Conference of the Parties declined to list the substance, which remains in use "
        "because it has not been found to meet the Convention's criteria.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Press line B", None,
        "<p>The Committee <b>has recommended</b> listing; the recommendation <b>stands</b>. The "
        "Conference <b>has not reached consensus</b>. <b>With the result that</b> the substance is "
        "not listed and the consent procedure does not apply. <b>No decision was taken about the "
        "properties of the substance.</b></p>"), w)[0:3],
    w=920, h=300)
S["k05-f12"]=lambda: f_realia(doc("Two press lines", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Line 1</b><br>"
    "The Conference declined to list the substance, which has not been found to meet the criteria, "
    "and it therefore remains in lawful use.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Line 2</b><br>"
    "<b>1</b> The Committee has recommended listing; the recommendation stands.<br>"
    "<b>2</b> The Conference has not reached consensus; amendment requires consensus.<br>"
    "<b>3</b> With the result that the substance is not listed.<br>"
    "<b>4</b> No decision was taken as to the properties of the substance.<br>"
    "<b>5</b> What may be imported here is a matter for the competent ministry.</p>",
    "The first contains two conclusions the record does not support."))
S["k05-f13"]=lambda: f_realia(form("Press line planner",
    [("1 &nbsp;The recommendation, and that it stands",""),
     ("2 &nbsp;What the body has done, in its own terms",""),
     ("3 &nbsp;The result",""),("4 &nbsp;The limit of the outcome",""),
     ("5 &nbsp;Where the next question goes","")]), 520)
S["k05-f14"]=lambda: f_scene(980,440,
    people=[("nadia",120,176,{}),("omar",200,176,{"seated":True}),
     ("bah",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("podium",150,160,0.38),("stamp",250,198,0.2),
     ("microphone",330,196,0.22),("computer",560,142,0.4),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    board=(290,26,215,100,"ANNEX III",
      [("recommended","&#10003;"),("consensus","&mdash;"),("listed","&mdash;")]),
    clockat=(240,30,22,6,55))
S["k05-f15"]=lambda: f_chart([("it is safe",3),("it is unregulated",4),
    ("it is outside the procedure",5),("it was rejected",6),("I had not thought about it",4)])
S["k05-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("note",395,194,0.24),
     ("envelope",460,194,0.26),("folder",530,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,0))

# ---------------- Unit 6 · Twenty-Nine of Fifty-Seven ----------------
S["k06-f1"]=lambda: f_icons([("country","a station on an ice field"),("ship","a supply ship"),
    ("clipboard","a core sample"),("signature","twelve names"),
    ("meeting","nameplates in two groups"),("essay","a measure on headed paper"),
    ("worldmap","overlapping shaded areas"),("pen","one sentence underlined"),
    ("badge","an inspection team"),("handshake","two lists of unequal length")], cols=5)
S["k06-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("logsheet",310,196,0.24),("logsheet",370,196,0.24),
     ("book",440,192,0.28),("worldmap",600,120,0.46),("window",815,56,0.98)],
    clockat=(140,46,22,9,45))
S["k06-f3"]=lambda: f_icons([("stamp","acceding"),("country","a station established"),
    ("essay","research published"),("badge","consultative status"),
    ("handsup","a measure approved"),("certificate","a measure effective")], cols=3)
S["k06-f4"]=lambda: f_realia(tbl("","Member, and not deciding",
    ["The body","Members","Who decides","How to join the deciding group"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>Where I have confused the two:</b>"), 580)
S["k06-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Delegation note 6 &middot; two classes of party",
    table_html(["",""],
      [["<b>The Antarctic Treaty</b>, done at Washington","<b>1 December 1959</b>"],
       ["<b>Signed by</b>","<b>twelve</b> states"],
       ["<b>Entered into force</b>","<b>23 June 1961</b>"],
       ["<b>Parties</b>","about <b>57</b>, on the Secretariat's published list, which carries its "
        "own date"],
       ["<b>Of those, consultative parties</b>","<b>29</b>"]])
    + "<p><b>The article that creates the two classes.</b> Representatives of the Contracting "
    "Parties <b>named in the preamble</b> &mdash; the twelve original signatories &mdash; and of any "
    "other party <b>which demonstrates its interest in Antarctica by conducting substantial "
    "scientific research activity there</b> shall meet at intervals. <b>Measures become effective "
    "when approved by all the Contracting Parties whose representatives were entitled to "
    "participate.</b></p>"
    + table_html(["","What it may do"],
      [["<b>a consultative party</b>, that is, a party entitled to participate in the meetings",
        "attend, speak, and <b>approve measures</b> &mdash; and a measure requires the approval of "
        "<b>all</b> of them"],
       ["<b>a non-consultative party</b>, that is, any other party",
        "be <b>bound</b> by the Treaty, attend as provided, and <b>not approve measures</b>"]])
    + "<p><b>Why the line falls where it does. The right to decide follows presence and science.</b> "
    "In most bodies the right to decide follows accession; here it follows activity.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The other clause, the one that settles "
    "nothing.</b> Nothing in the Treaty is to be interpreted as <b>a renunciation</b> of previously "
    "asserted claims to territorial sovereignty, nor as prejudicing any party's position on "
    "recognition; and <b>no new claim, or enlargement of an existing claim, may be asserted while "
    "the Treaty is in force</b>. <b>It resolves nothing, and that is its function.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Antarctic Treaty, done at Washington on 1 "
    "December 1959, signed by twelve states and in force from 23 June 1961; its article providing "
    "for consultative meetings and for measures to become effective upon approval by all parties "
    "entitled to participate; its article on territorial sovereignty, rights and claims; and the "
    "Secretariat's published lists, which carry their own dates.</p>"))
S["k06-f6"]=lambda: f_realia(tbl("Word study","Apposition",
    ["Two sentences","One sentence, with apposition"],
    [["Twenty-nine parties decide. They are called consultative parties.",
      "<b>the consultative parties, that is, the twenty-nine entitled to decide</b>"],
     ["The twelve states signed in 1959. They are named in the preamble.",
      "<b>the twelve original signatories, the parties named in the preamble</b>"],
     ["A measure needs approval. All the consultative parties must approve it.",
      "<b>approval by all the consultative parties, that is, by every party entitled to "
      "participate</b>"],
     ["The clause freezes the positions. It was agreed in 1959.",""],
     ["A station shows the research. The research shows the interest.",""],
     ["Fifty-seven states are parties. They are listed by the Secretariat.",""]]), 620)
S["k06-f7"]=lambda: f_part("One treaty, two classes",
    [("consultative parties",29,GREEN),("other parties",28,BLUE)])
S["k06-f8"]=lambda: f_icons([("stamp","acceding"),("country","a station"),
    ("essay","research published"),("badge","consultative status"),
    ("handsup","a measure approved"),("certificate","effective")], cols=3)
S["k06-f9"]=lambda: f_realia(doc("Status card &middot; Antarctic Treaty", None,
    "<p style='text-align:center;font-size:22px'><b>57</b> parties<br>"
    "<b>29</b> consultative parties</p>"
    + table_html(["","What it may do"],
      [["consultative","attend, speak, <b>approve measures</b> (all of them must approve)"],
       ["other","bound by the Treaty; attend as provided; <b>does not approve</b>"]])
    + "<p style='background:#f2efe8;padding:9px'><b>Our own position:</b> a party, and not a "
    "consultative party.</p>"
    "<p><b>The figure of 57 includes both classes.</b></p>"))
S["k06-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("omar",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("logsheet",300,196,0.24),("logsheet",360,196,0.24),
     ("book",430,192,0.28),("computer",540,142,0.4),("window",805,56,0.96)],
    clockat=(140,46,22,10,0))
S["k06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Brief A", None,
        "<p>The parties adopted the measure in May, and we are a party.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Brief B", None,
        "<p>About <b>57</b> parties; <b>29</b> consultative parties. The measure was approved by "
        "<b>the consultative parties, that is, the parties entitled to participate</b>. <b>We are a "
        "party and not a consultative party</b>; our approval was not sought and not required. A "
        "party may join that group <b>by conducting substantial scientific research activity</b> "
        "there.</p>"), w)[0:3],
    w=920, h=300)
S["k06-f12"]=lambda: f_realia(doc("Two briefs", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Brief 1</b><br>"
    "The parties adopted the measure in May.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Brief 2</b><br>"
    "<b>1</b> 57 parties; 29 consultative parties.<br>"
    "<b>2</b> A consultative party &mdash; that is, a party entitled to participate &mdash; may "
    "approve measures; all of them must approve.<br>"
    "<b>3</b> We are a party and not a consultative party; our approval was not required.<br>"
    "<b>4</b> A party joins that group by conducting substantial scientific research activity.<br>"
    "<b>5</b> On claims: the Treaty neither recognizes nor denies any claim.</p>",
    "The unqualified plural in the first brief covers all fifty-seven."))
S["k06-f13"]=lambda: f_realia(form("Brief planner",
    [("1 &nbsp;The figures, with dates",""),("2 &nbsp;The two classes, with appositives",""),
     ("3 &nbsp;Our own position",""),("4 &nbsp;How it could change",""),
     ("5 &nbsp;The sensitive point, if asked","")]), 520)
S["k06-f14"]=lambda: f_scene(980,440,
    people=[("nadia",120,176,{}),("omar",200,176,{"seated":True}),
     ("bah",280,176,{"seated":True}),("samira",350,172,{"seated":True}),
     ("hana",420,176,{"seated":True}),("ahmad",520,170,{}),("yusuf",590,172,{}),
     ("linh",660,170,{}),("ida",730,172,{}),("karin",800,170,{}),("lucia",865,172,{}),
     ("oskar",920,170,{}),("caruso",962,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("podium",150,160,0.38),("computer",555,142,0.4),
     ("microphone",300,196,0.2),("cafe",835,198,0.38),("table",630,0,1.0)],
    board=(290,26,210,96,"TWO CLASSES",[("parties","57"),("consultative","29")]),
    clockat=(240,30,22,10,0))
S["k06-f15"]=lambda: f_chart([("all parties",8),("the parties entitled to participate",4),
    ("a majority",4),("the depositary",2),("I had not thought about it",4)])
S["k06-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("note",395,194,0.24),
     ("tray",465,196,0.26),("logsheet",540,196,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,30))
