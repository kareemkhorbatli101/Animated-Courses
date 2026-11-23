# -*- coding: utf-8 -*-
"""Foreign Service English Book 5 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["k00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each from a delegation's working day",
    ["What you have","An example"],
    [["Attribution","The delegation <b>stated</b> that it reserved its position."],
     ["Hedging","The figure <b>appears to</b> carry an earlier date."],
     ["Inversion","<b>At no point had</b> consent been obtained."],
     ["Participle clauses","<b>Having deposited</b> its instrument, the State became a party."],
     ["Impersonal structures","<b>It falls to</b> the Organization to raise the difficulty."],
     ["Qualifying markers","<b>Insofar as</b> the counts are made on the same basis."]],
    note="Six boxes. This book adds the grammar of the record: deeming, the perfect passive, "
    "exceptives, two readings, and the report of a meeting."), 580)
S["k00-f2"]=lambda: f_realia(tbl("What a procedure protects", None,
    ["","What it produces","What it prevents"],
    [["<b>A rule on who must agree</b>","a decision with a known basis",
      "an argument afterwards about whether it was taken"],
     ["<b>A rule on how objection is made</b>","a record of who objected, and when",
      "a delegation discovering in March that it agreed in January"],
     ["<b>A rule on how the result is written</b>","one text everybody can quote",
      "six accounts of the same meeting"]],
    note="A procedure is a machine for producing a decision nobody can reopen. That is its whole "
    "purpose, and it is why procedure looks least important and takes longest to learn."), 600)
S["k00-f3"]=lambda: f_realia(doc("Taped inside a folder",
    "Four sentences a delegation officer writes every week",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;No delegation present formally objected.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>When the gavel has fallen and you are writing the "
    "cable.</span><br>"
    "<b>2 &nbsp;The rules remain provisional.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before anybody cites a rule number as settled "
    "law.</span><br>"
    "<b>3 &nbsp;The figure is on the publisher's page and carries the date of that page.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Every time a number leaves the building.</span><br>"
    "<b>4 &nbsp;Being a party is not enough.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>The sentence that catches the largest number of "
    "otherwise careful drafts.</span></p>"))
S["k00-f4"]=lambda: f_realia(doc("Before any decision is reported",
    "Three questions, in this order",
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>1 &nbsp;Under what rule was it taken?</b>"
    "<br>Name the rule, and say whether it is in force or applied provisionally.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>2 &nbsp;What counted as agreement?</b><br>"
    "Consensus, a majority, a notification, or nobody speaking.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>3 &nbsp;What is the record, and who keeps "
    "it?</b><br>A decision text, a report, a summary record, or a depositary notification.</p>"
    "<p style='background:#f2efe8;padding:9px'><b>Only now may you report it.</b></p>"))

# ---------------- Unit 1 · No Member Present Objects ----------------
S["k01-f1"]=lambda: f_icons([("meeting","nameplates and a gavel"),("chair","an empty seat"),
    ("handsup","a raised hand"),("microphone","a microphone switched off"),
    ("quotemark","a footnote in an agreement"),("essay","a decision circulated"),
    ("door","a delegate leaving"),("logsheet","the record being typed"),
    ("computer","a cable at night"),("handshake","two delegates comparing")], cols=5)
S["k01-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("nadia",430,172,{})],
    props=[("desk",240,0,1.25),("notebook",320,196,0.26),("book",395,192,0.3),
     ("microphone",465,196,0.24),("chair",580,0,0.8),("window",815,56,0.98)],
    clockat=(140,46,22,6,40))
S["k01-f3"]=lambda: f_icons([("quotemark","the footnote read"),("handsup","any objection?"),
    ("timer","a pause"),("stamp","the gavel falls"),
    ("essay","a text circulated"),("pen","a position reserved")], cols=3)
S["k01-f4"]=lambda: f_realia(tbl("","What counts as agreement",
    ["The body","What counts as agreement","Who must be present","What stops a decision"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>Where silence counts as yes:</b>"), 580)
S["k01-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Delegation note 1 &middot; decision-making by consensus",
    "<p><b>The provision, in the Agreement's own words.</b> The Marrakesh Agreement provides, in "
    "<b>Article IX:1</b>, that the organization <b>shall continue the practice of decision-making by "
    "consensus</b>, and that where a decision cannot be arrived at by consensus the matter shall be "
    "decided by voting, except as otherwise provided.</p>"
    "<p><b>The definition is in a footnote</b> to that paragraph:</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'>The body concerned <b>shall be deemed to have "
    "decided by consensus</b> on a matter submitted for its consideration, <b>if no Member, present "
    "at the meeting when the decision is taken, formally objects</b> to the proposed decision.</p>"
    + table_html(["","What it requires","What it tells you about support"],
      [["<b>unanimity</b>","every Member positively agreeing","a great deal"],
       ["<b>consensus</b>, as defined","no Member present formally objecting","<b>almost "
        "nothing</b>"],
       ["<b>agreement</b>","whatever the parties say it means","nothing until defined"]])
    + "<p><b>Three things follow, and all three are counter-intuitive.</b></p>"
    "<p><b>First, absence is not objection.</b> A Member not in the room cannot formally object, and "
    "the decision is taken whether that Member would have objected or not.</p>"
    "<p><b>Second, unhappiness is not objection.</b> A delegation may be disappointed, may accept "
    "the text with difficulty, or may reserve its position. <b>The decision is taken.</b></p>"
    "<p><b>Third, one delegation is enough.</b> A single Member present and formally objecting "
    "prevents consensus.</p>"
    "<p><b>The membership. 166 Members</b>, on the organization's own page, which carries its date; "
    "the most recent two accessions took effect in <b>August 2024</b>.</p>"
    "<p><b>What a cable must say.</b> <i>No Member present at the meeting formally objected, and the "
    "decision was accordingly taken by consensus.</i> Then, separately, what delegations said. <b>A "
    "cable that says <i>unanimously</i> has reported a different meeting.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Marrakesh Agreement Establishing the World "
    "Trade Organization, Article IX:1 and its footnote defining consensus; and the organization's "
    "published membership figure of 166 Members. Membership figures carry the date of the page.</p>"))
S["k01-f6"]=lambda: f_realia(tbl("Word study","Deeming and presuming",
    ["Form","What it does","Example"],
    [["is deemed to","a rule treats X as Y","The body <b>is deemed to</b> have decided by "
      "consensus."],
     ["is taken to be","the same, less formal","Silence <b>is taken to be</b> acceptance."],
     ["is presumed to","true unless shown otherwise","A notification <b>is presumed to</b> have "
      "been received."],
     ["shall be regarded as","as <i>deemed</i>, in older texts","&nbsp;"],
     ["counts as","plain English for all of them","&nbsp;"],
     ["does not amount to","the negative that matters here","&nbsp;"]]), 600)
S["k01-f7"]=lambda: f_process(["the chair asks","a pause","nobody speaks","the gavel falls",
    "deemed adopted by consensus","a position reserved"], w=640)
S["k01-f8"]=lambda: f_icons([("quotemark","the footnote"),("handsup","any objection?"),
    ("timer","a pause"),("stamp","the gavel"),
    ("essay","a text circulated"),("pen","a position reserved")], cols=3)
S["k01-f9"]=lambda: f_realia(doc("Cable &middot; Committee decision of 14 March", None,
    "<p><b>1 The decision.</b> At <b>18:41</b> the Chair asked whether there was any objection. "
    "<b>No Member present at the meeting formally objected.</b> The decision <b>was accordingly "
    "taken by consensus</b>, as defined in the footnote to Article IX:1.</p>"
    + table_html(["Delegation","What it did","Time"],
      [["Astrand","expressed serious concern; <b>reserved its position</b>","18:43"],
       ["Perenne","<b>accepted the text with difficulty</b>","18:46"],
       ["Marovia","asked for its concern to be <b>reflected in the report</b>","18:48"]])
    + "<p><b>3 Absence. One Member was not present</b> when the decision was taken. Absence cannot "
    "constitute an objection.</p>"
    "<p><b>4 What did not happen. No vote was requested</b> by any Member.</p>",
    "Attachments: three statements as delivered. Nothing in this cable characterizes any "
    "delegation's intentions."))
S["k01-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("nadia",400,172,{})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("folder",390,194,0.26),
     ("book",455,192,0.28),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,7,15))
S["k01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Cable A", None,
        "<p>The Committee adopted the decision <b>unanimously</b> at 18:41. The atmosphere was "
        "constructive.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Cable B", None,
        "<p><b>1</b> No Member present formally objected; taken by consensus, 18:41.<br>"
        "<b>2</b> Three statements, with times, attached.<br>"
        "<b>3</b> One Member not present.<br><b>4</b> No vote requested.</p>"), w)[0:3],
    w=920, h=300)
S["k01-f12"]=lambda: f_realia(doc("Two cables", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Cable 1</b><br>"
    "The Committee adopted the decision unanimously at 18:41, in a constructive atmosphere, with "
    "broad support from all delegations.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Cable 2</b><br>"
    "<b>18:41</b> &mdash; no Member present formally objected; decision taken by consensus.<br>"
    "<b>18:43</b> Astrand reserved its position. <b>18:46</b> Perenne accepted with difficulty. "
    "<b>18:48</b> Marovia asked for its concern to be reflected in the report.<br>"
    "One Member not present. No vote requested.</p>",
    "One of these has two adjectives about a room, and one has four times and an attachment."))
S["k01-f13"]=lambda: f_realia(form("Cable planner",
    [("1 &nbsp;The decision: time, rule, operative fact",""),
     ("2 &nbsp;Statement, with a time",""),("Statement, with a time",""),
     ("Statement, with a time",""),
     ("3 &nbsp;Absence",""),("4 &nbsp;What did not happen",""),
     ("Attachments","")]), 520)
S["k01-f14"]=lambda: f_scene(980,440,
    people=[("nadia",120,176,{}),("omar",200,176,{"seated":True}),
     ("hana",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("bah",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("podium",150,160,0.4),("microphone",330,196,0.22),
     ("computer",560,142,0.4),("chair",430,0,0.7),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,6,45))
S["k01-f15"]=lambda: f_chart([("everybody agreed",9),("nobody present objected",4),
    ("a large majority agreed",3),("nobody voted",2),("I had not thought about it",4)])
S["k01-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("folder",320,194,0.26),("essay",395,194,0.26),
     ("phone",465,196,0.22),("note",535,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,10,0))

# ---------------- Unit 2 · Provisional Since 1946 ----------------
S["k02-f1"]=lambda: f_icons([("book","provisional rules"),("meeting","a horseshoe table"),
    ("podium","a public gallery"),("door","a closed door"),
    ("chair","chairs in a circle"),("envelope","an invitation card"),
    ("stamp","the presidency passing"),("refnumber","a document symbol"),
    ("shelf","a volume of practice"),("handshake","a rule and a page compared")], cols=5)
S["k02-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("book",320,192,0.3),("shelf",600,120,0.5),
     ("refnumber",400,196,0.24),("window",815,56,0.98)],
    clockat=(140,46,22,8,30))
S["k02-f3"]=lambda: f_icons([("refnumber","a rule cited"),("meeting","a meeting convened"),
    ("podium","sitting in public"),("door","sitting in private"),
    ("chair","consulting informally"),("logsheet","a record typed")], cols=3)
S["k02-f4"]=lambda: f_realia(tbl("","The temporary arrangement",
    ["The arrangement","In place since","Why it was never made final",
     "What making it final would require"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The oldest temporary thing in my office:</b>"), 580)
S["k02-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Delegation note 2 &middot; the Council's provisional rules",
    "<p><b>The Charter's instruction. Article 30:</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'>The Security Council <b>shall adopt its own "
    "rules of procedure</b>, including the method of selecting its President.</p>"
    + table_html(["",""],
      [["<b>Rules adopted</b>","at the Council's <b>first meeting, January 1946</b> &mdash; and "
        "adopted <b>provisionally</b>"],
       ["<b>Amended</b>","<b>several times</b> since; the current text is a numbered revision of "
        "<b>1982</b>"],
       ["<b>Made final</b>","<b>never</b>"]])
    + "<p>So the rules <b>have been applied</b> continuously for eighty years, <b>have been "
    "amended</b> when the Council wished, and <b>have never been adopted</b> in final form. Their "
    "own title still reads <b>Provisional Rules of Procedure</b>.</p>"
    "<p><b>Why this is not a curiosity.</b> A provisional text can be amended without reopening the "
    "question of what the rules ought to be, and that question has never been one the membership "
    "could settle. <b>The provisionality is not an oversight. It is the arrangement.</b></p>"
    "<p><b>Two rules used constantly.</b> A United Nations Member which is not a member of the "
    "Council <b>may be invited to participate</b> in a discussion when its interests are specially "
    "affected; and the Council may <b>invite members of the Secretariat or other persons</b> to "
    "supply information. <b>These are invitations, not rights.</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The other room.</b> Much of the Council's "
    "working day takes the form of <b>informal consultations of the whole</b>. These are <b>not "
    "meetings</b> under the rules: <b>no rule number, no meeting number, no record</b>. The fifteen "
    "delegations are the same fifteen.</p>"
    "<p><b>What follows for drafting.</b> Cite provisional rules as provisional. Do not report a "
    "consultation as a meeting. And where the Council has acted, say under what it acted &mdash; a "
    "resolution, a presidential statement, or nothing at all, which is also a result.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Charter of the United Nations, Article 30; "
    "the Security Council's Provisional Rules of Procedure, adopted provisionally in January 1946, "
    "amended on several occasions and issued as a numbered revision in 1982, the rules remaining "
    "provisional; and the published practice of informal consultations of the whole.</p>"))
S["k02-f6"]=lambda: f_realia(tbl("Word study","The perfect passive",
    ["Form","What it reports","Example"],
    [["has been + participle","a past act with present effect","The rules <b>have been "
      "amended</b>."],
     ["has never been + pp","an act that has not happened","They <b>have never been adopted</b>."],
     ["had been + pp","completed before another past point","They <b>had been applied</b> for "
      "thirty-six years."],
     ["having been + pp","the same, compressed","&nbsp;"],
     ["is being + pp","in progress now","&nbsp;"],
     ["has not yet been + pp","not done, up to now","&nbsp;"]]), 600)
S["k02-f7"]=lambda: f_timeline([(0.02,"1946","adopted provisionally"),
    (0.47,"1982","numbered revision"),(0.97,"2025","still provisional")], 0.97, w=640)
S["k02-f8"]=lambda: f_icons([("refnumber","a rule cited"),("meeting","convened"),
    ("podium","in public"),("door","in private"),
    ("chair","consultations"),("logsheet","a record")], cols=3)
S["k02-f9"]=lambda: f_realia(tbl("Procedure card", "Two kinds of gathering",
    ["","A meeting","Informal consultations"],
    [["Convened under the rules","&#10003;","&mdash;"],
     ["Has a number","&#10003;","&mdash;"],
     ["A record is kept","&#10003;","&mdash;"],
     ["The same fifteen delegations","&#10003;","&#10003;"],
     ["May be cited for an outcome","&#10003;","only what was issued"]],
    note="<b>What may be cited for a day of consultations:</b> what was issued, and nothing else. "
    "<b>The word <i>provisional</i> is part of the citation.</b>"), 580)
S["k02-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("omar",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("book",300,192,0.3),("shelf",590,120,0.48),
     ("computer",400,142,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,8,45))
S["k02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>Under rule 37 of the Council's rules of procedure. The Council met informally on "
        "Tuesday.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p>Under the Council's <b>provisional</b> rules of procedure, as amended; <b>provisional "
        "rule 37</b>. The rules have been amended several times and <b>have never been adopted</b> "
        "in final form.<br>On Tuesday the <b>members held informal consultations</b>; no meeting was "
        "convened. A presidential statement was issued on Wednesday.</p>"), w)[0:3],
    w=920, h=300)
S["k02-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Under rule 37 of the Council's rules of procedure, and following the Council's informal meeting "
    "on Tuesday&hellip;</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Status:</b> the rules are provisional; adopted provisionally in January 1946, amended "
    "several times, current text a revision of 1982, never adopted in final form.<br>"
    "<b>Citation:</b> provisional rule 37.<br>"
    "<b>Tuesday:</b> the members held informal consultations. No meeting; no number; no record.<br>"
    "<b>What may be cited:</b> the presidential statement of Wednesday.</p>",
    "One of these sends a reader looking for a meeting record that does not exist."))
S["k02-f13"]=lambda: f_realia(form("Guidance planner",
    [("1 &nbsp;Status, with two dates",""),("2 &nbsp;How to cite it, first time",""),
     ("and afterwards",""),("3 &nbsp;Two kinds of gathering",""),
     ("4 &nbsp;What may be cited",""),("and when nothing was issued",""),
     ("5 &nbsp;Anything that looks like a right","")]), 520)
S["k02-f14"]=lambda: f_panels(
    lambda w,h: f_scene(w,h, people=[("nadia",120,160,{}),("omar",190,156,{"seated":True}),
      ("hana",255,160,{"seated":True}),("samira",320,156,{"seated":True})],
     props=[("desk",80,0,0.9),("podium",150,150,0.34),("logsheet",300,196,0.2),
      ("board",250,30,0.5)]),
    lambda w,h: f_scene(w,h, people=[("bah",120,160,{"seated":True}),("ahmad",185,156,{}),
      ("yusuf",250,160,{"seated":True}),("linh",315,156,{"seated":True})],
     props=[("chair",100,0,0.7),("chair",180,0,0.7),("chair",260,0,0.7),("jug",340,196,0.22)]),
    w=960, h=320, lt="MEETING", rt="CONSULTATION")
S["k02-f15"]=lambda: f_chart([("final",7),("provisional",4),("there are none",3),
    ("a treaty",2),("I had not thought about it",6)])
S["k02-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("note",395,194,0.24),
     ("folder",460,194,0.26),("logsheet",530,196,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,30))

# ---------------- Unit 3 · The Rule That Was Never Adopted ----------------
S["k03-f1"]=lambda: f_icons([("essay","square brackets on a page"),("meeting","a plenary"),
    ("logsheet","an item marked deferred"),("stamp","a gavel at rest"),
    ("quotemark","two alternatives side by side"),("handshake","a chair conferring"),
    ("chair","a consultation group"),("vote","adopted without a vote"),
    ("shelf","thirty annual reports"),("magnifier","one item across two years")], cols=5)
S["k03-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("essay",315,194,0.28),("logsheet",390,196,0.24),
     ("book",455,192,0.28),("computer",600,142,0.44),("window",815,56,0.98)],
    clockat=(140,46,22,10,15))
S["k03-f3"]=lambda: f_icons([("logsheet","an item opened"),("handshake","consultations proposed"),
    ("chair","a small group"),("microphone","no agreement reported"),
    ("timer","the item deferred"),("calendar","the same item next year")], cols=3)
S["k03-f4"]=lambda: f_realia(tbl("","The item that never closes",
    ["The question","Open since","What happens at each attempt","What applies in the meantime"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>Who is served by leaving it open:</b>"), 580)
S["k03-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Delegation note 3 &middot; a conference without a voting rule",
    "<p><b>What happened at the first session.</b> At its <b>first session, in 1995</b>, the "
    "Conference of the Parties to the Framework Convention on Climate Change <b>was unable to adopt "
    "its rules of procedure</b>. It decided instead to <b>apply the draft rules of procedure</b>, "
    "<b>with the exception of draft rule 42</b>.</p>"
    + table_html(["",""],
      [["<b>Status of the rules</b>","<b>draft</b>; applied, not adopted"],
       ["<b>The excepted rule</b>","<b>draft rule 42</b>, on <b>voting</b>"],
       ["<b>The item since 1995</b>","on the agenda of <b>every session</b>; <b>deferred every "
        "time</b>"]])
    + "<p style='border:1px solid #d9d4c9;padding:9px'><b>The rule that was excepted.</b> Draft "
    "rule 42 stands in <b>square brackets</b>, in more than one version: broadly, one alternative "
    "would allow decisions on substantive matters by a <b>majority</b> where consensus cannot be "
    "reached, and another would require <b>consensus</b>. <b>The disagreement is about whether a "
    "majority of parties can bind a minority</b>, which was never going to be settled by a rules "
    "committee.</p>"
    "<p><b>Three consequences.</b></p>"
    "<p><b>First, decisions are taken by consensus in practice.</b> Not because a rule says so, but "
    "because no agreed rule allows a vote. <b>The default is an absence, not a provision.</b></p>"
    "<p><b>Second, a single party's objection has great weight.</b> There is no route around it "
    "except persuasion, the chair's management of the room, and time.</p>"
    "<p><b>Third, the arrangement is not an oversight.</b> It has been examined at every session for "
    "thirty years and has survived every examination. <b>A thing reconsidered thirty times and left "
    "alone is a decision, even if no decision text records it.</b></p>"
    "<p><b>What to write.</b> <i>The Conference applies its draft rules of procedure with the "
    "exception of draft rule 42, on voting, which has not been agreed; the item has remained on the "
    "agenda since 1995.</i></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the decision of the Conference of the Parties "
    "at its first session, in 1995, to apply the draft rules of procedure with the exception of "
    "draft rule 42; the draft rules as published, including the bracketed alternatives for rule 42; "
    "and the agendas and reports of subsequent sessions.</p>"))
S["k03-f6"]=lambda: f_realia(tbl("Word study","Exceptive structures",
    ["Form","What it does","Example"],
    [["with the exception of","removes one item","applied <b>with the exception of</b> rule 42"],
     ["save for","the same, shorter","<b>save for</b> rule 42, the draft rules apply"],
     ["other than","excludes a category","all rules <b>other than</b> rule 42"],
     ["except as provided in","points to the carve-out","&nbsp;"],
     ["notwithstanding","overrides an existing rule","&nbsp;"],
     ["subject to","makes the whole conditional","&nbsp;"]]), 600)
S["k03-f7"]=lambda: f_part("Forty-nine applied, one bracketed, thirty years",
    [("applied",49,GREEN),("bracketed",1,AMBER)])
S["k03-f8"]=lambda: f_icons([("logsheet","an item opened"),("handshake","consultations"),
    ("chair","a small group"),("microphone","no agreement"),
    ("timer","deferred"),("calendar","next year's agenda")], cols=3)
S["k03-f9"]=lambda: f_realia(tbl("Agenda extract &middot; provisional agenda", None,
    ["Item","Title",""],
    [["1","Opening of the session",""],
     ["2","<b>Adoption of the rules of procedure</b>",
      "<i>taken up and deferred at every session since 1995</i>"],
     ["3","Election of officers",""],["4","Adoption of the agenda",""],
     ["5","Organization of work",""],["6","Report of the subsidiary bodies",""]],
    note="<b>Draft rule 42, in brackets:</b> one alternative would allow a majority to decide "
    "substantive matters where consensus cannot be reached; another would require consensus.<br>"
    "<b>What applies in the meantime:</b> in the absence of an agreed voting rule, decisions are "
    "taken by consensus."), 580)
S["k03-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("omar",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("essay",300,194,0.28),("logsheet",375,196,0.24),
     ("logsheet",440,196,0.24),("computer",580,142,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,4,30))
S["k03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>The Conference's rules of procedure provide for decisions to be taken by "
        "consensus.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p>The Conference <b>applies draft rules</b>, <b>save for draft rule 42</b>, on voting, "
        "which <b>has not been agreed</b>. The item has remained on the agenda <b>since 1995</b>. "
        "<b>In the absence of an agreed voting rule</b>, decisions are taken by consensus.</p>"),
        w)[0:3],
    w=920, h=300)
S["k03-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The Conference's rules of procedure provide for decisions by consensus; voting is not "
    "permitted.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Status:</b> draft rules, applied and not adopted (first session, 1995).<br>"
    "<b>Exception:</b> draft rule 42, on voting, not agreed; text in square brackets.<br>"
    "<b>History:</b> on the agenda of every session since 1995; no agreement reached.<br>"
    "<b>Consequence:</b> in the absence of an agreed voting rule, decisions are taken by "
    "consensus.<br><b>This note states no other party's position.</b></p>",
    "The first asserts a rule that thirty years of consultations have failed to produce."))
S["k03-f13"]=lambda: f_realia(form("Procedural planner",
    [("1 &nbsp;Status",""),("2 &nbsp;The exception",""),
     ("3 &nbsp;The history, in one sentence",""),("4 &nbsp;What follows",""),
     ("5 &nbsp;The sentence for the question we will be asked",""),
     ("6 &nbsp;What this note does not do","")]), 520)
S["k03-f14"]=lambda: f_scene(980,440,
    people=[("nadia",120,176,{}),("omar",200,176,{"seated":True}),
     ("bah",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("podium",150,160,0.38),("microphone",330,196,0.22),
     ("computer",560,142,0.4),("essay",430,196,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    board=(280,24,215,104,"AGENDA",
      [("1 Opening",""),("2 Rules of procedure","1995"),("3 Officers",""),("4 Agenda","")]),
    clockat=(240,30,22,5,40))
S["k03-f15"]=lambda: f_chart([("consensus by rule",8),("consensus by practice",4),
    ("the chair decides",2),("nothing can be decided",3),("I had not thought about it",5)])
S["k03-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("note",395,194,0.24),
     ("logsheet",460,196,0.24),("logsheet",520,196,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,7,0))
