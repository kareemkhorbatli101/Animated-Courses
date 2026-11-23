# -*- coding: utf-8 -*-
"""Foreign Service English Book 4 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["j00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each from a protocol officer's day",
    ["What you have","An example"],
    [["The past tenses","The note <b>had been</b> delivered on Tuesday."],
     ["The perfect aspect","Consent <b>has not yet been</b> obtained."],
     ["Modals","The visit <b>may not</b> proceed without a reply."],
     ["The passive","The composition <b>was notified</b> on 3 March."],
     ["Conditionals","<b>If</b> the reply comes today, we book today."],
     ["Hedging","The figure <b>appears to</b> carry an earlier date."]],
    note="Six boxes. This book adds the formal register of protocol: inversion, participle "
    "clauses, formulaic requests and, at the end, the note verbale."), 560)
S["j00-f2"]=lambda: f_realia(tbl("The same message, twice", None,
    ["Plainly worded","In the register","What the formula protects"],
    [["Please tell us whether you agree.",
      "The Ministry <b>has the honour to request</b> the Embassy's confirmation.",
      "nobody is being pressed"],
     ["We cannot do that.",
      "The Ministry <b>is not in a position to</b> agree to the proposal.",
      "no accusation is made"],
     ["You have made a mistake.",
      "The Ministry <b>ventures to recall</b> that consent is obtained in advance.",
      "the error is corrected, not scored"]],
    note="Formula is not decoration. It lets two ministries that disagree about everything else "
    "exchange a document without making a new dispute."), 600)
S["j00-f3"]=lambda: f_realia(doc("Taped inside a folder",
    "Four sentences a protocol officer writes every week",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;Consent is required and has not yet been obtained.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>When transport has been booked before the "
    "reply.</span><br>"
    "<b>2 &nbsp;The Convention has not entered into force.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before anybody cites it.</span><br>"
    "<b>3 &nbsp;The figure is on the depositary's page and carries the date of that page.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Every time a number leaves the building.</span><br>"
    "<b>4 &nbsp;We do not print a count here.</b><br>"
    "<span style='font-size:12px;color:#6b6861'>The hardest of the four, and the one that has "
    "saved every officer who learned to write it.</span></p>"))
S["j00-f4"]=lambda: f_realia(doc("Before you cite any instrument",
    "Three questions, in this order",
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>1 &nbsp;Which instrument is it?</b><br>"
    "Its full title and its date. A short title is not an instrument.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>2 &nbsp;Is it in force, and between which "
    "states?</b><br>Adopted is not in force. In force is not in force for us.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>3 &nbsp;As at what date is the entry "
    "you read?</b><br>A status page is a photograph, not a fact.</p>"
    "<p style='background:#f2efe8;padding:9px'><b>Only now may you cite it.</b></p>"))

# ---------------- Unit 1 · The Special Mission ----------------
S["j01-f1"]=lambda: f_icons([("clipboard","a delegation list of eleven"),("envelope","a sealed note"),
    ("calendar","one date circled"),("ship","an aircraft on the apron"),
    ("hotel","a hotel with flags"),("meeting","a room laid out for two sides"),
    ("passport","a visa page"),("security","a detail at the door"),
    ("timetable","a program on card"),("handshake","two officers comparing lists")], cols=5)
S["j01-f2"]=lambda: f_scene(920,420, people=[("omar",320,176,{}),("hana",420,172,{})],
    props=[("desk",240,0,1.25),("clipboard",320,194,0.32),("book",390,192,0.3),
     ("folder",460,196,0.28),("computer",590,142,0.46),("window",810,56,0.98)],
    clockat=(140,46,22,9,20))
S["j01-f3"]=lambda: f_icons([("pen","a note drafted"),("door","a note delivered"),
    ("envelope","a reply arriving"),("form","the composition notified"),
    ("timetable","a program agreed"),("ship","an aircraft booked")], cols=3)
S["j01-f4"]=lambda: f_realia(tbl("","The order of operations",
    ["What was arranged","Whose permission was needed","When it was asked for",
     "What nearly happened"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The order of operations in my office:</b>"), 580)
S["j01-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Protocol note 1 &middot; visiting delegations",
    "<p><b>The rule first, in the Convention's own words.</b> Article 2 of the Convention on "
    "Special Missions:</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'>A State may send a special mission to another "
    "State <b>with the consent of the latter, previously obtained</b> through the diplomatic or "
    "another agreed or mutually acceptable channel.</p>"
    "<p>Article 2 adds a second rule. A state sending the <b>same</b> mission to two or more states "
    "<b>shall so inform</b> each of them when it asks for consent.</p>"
    + table_html(["",""],
      [["<b>Adopted</b>","<b>8 December 1969</b>"],
       ["<b>Entered into force</b>","<b>21 June 1985</b> &mdash; sixteen years later"],
       ["<b>Parties</b>","<b>38</b>, on the depositary's table as at April 2012"]])
    + "<p><b>What follows for our drafting.</b> Two things, and they pull in opposite "
    "directions.</p>"
    "<p><b>First: the Convention probably does not bind us.</b> There are thirty-eight parties. "
    "Most pairs of states are not both parties. So a draft that says <i>under the Special Missions "
    "Convention</i> is very likely wrong about the law.</p>"
    "<p><b>Second: the need for consent does not depend on the Convention.</b> No state may send an "
    "official mission into another state without that state's agreement, obtained in advance. The "
    "Convention <b>codifies</b> the rule. It is not the source of it. The practical rule survives. "
    "Only the citation goes.</p>"
    "<p><b>What to write instead.</b> <i>Consent is required and has not yet been obtained.</i> "
    "Eight words. No instrument cited. Nothing to be corrected on.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Convention on Special Missions of 8 "
    "December 1969, Article 2; its entry into force on 21 June 1985; and the depositary's table, "
    "which recorded 38 parties as at April 2012. Take a current figure from that table on the day "
    "it is needed.</p>"))
S["j01-f6"]=lambda: f_realia(tbl("Word study","Plain and formulaic",
    ["Plain","In the register"],
    [["to ask","has the honour to request"],
     ["to remind","avails itself of the opportunity to recall"],
     ["to refuse","is not in a position to agree"],
     ["to tell","wishes to inform"],
     ["to send",""],["to thank",""]]), 460)
S["j01-f7"]=lambda: f_timeline([(0.08,"1969","adopted"),(0.40,"1985","in force"),
    (0.94,"2012","38 parties")], 0.40, w=620)
S["j01-f8"]=lambda: f_icons([("pen","a note drafted"),("door","a note at a door"),
    ("envelope","a reply"),("form","a composition notified"),
    ("timetable","a program agreed"),("ship","an aircraft booked last")], cols=3)
S["j01-f9"]=lambda: f_realia(form("Visit checklist &middot; incoming delegation",
    [("1 &nbsp;Note requesting consent sent","&#10003;"),
     ("2 &nbsp;Purpose stated in six words","&#10003;"),
     ("3 &nbsp;Channel for the reply named","&#10003;"),
     ("<b>Nothing below this line until the reply is received</b>",""),
     ("4 &nbsp;Composition notified",""),
     ("5 &nbsp;Program signed","")],
    note="<b>What has been arranged anyway:</b> eleven seats on the Thursday flight &middot; "
    "fourteen rooms, held to Monday. <b>Both are reversible. The note is not.</b>"), 560)
S["j01-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("hana",400,172,{})],
    props=[("desk",230,0,1.25),("clipboard",310,194,0.32),("form",380,196,0.28),
     ("book",450,192,0.3),("calendar",700,70,0.5),("window",810,56,0.96)],
    clockat=(140,46,22,9,20))
S["j01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Visit file A", None,
        "<p>A transport booking for eleven. A hotel confirmation for fourteen rooms. "
        "<b>No note.</b></p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Visit file B", None, ["Order","Document"],
        [["1","note requesting consent"],["2","the reply"],["3","composition notified"],
         ["4","program agreed"],["5","booking"]],
        note="<b>The booking is last.</b> Everything above it is reversible by letter."), w)[0:3],
    w=920, h=300)
S["j01-f12"]=lambda: f_realia(doc("Two notes verbale", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "&hellip; has the honour to inform the Embassy that a delegation will arrive on 14 March, "
    "under the Convention on Special Missions.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "&hellip; <b>has the honour to request the consent</b> of the Government of Astrand to a "
    "special mission <b>for technical talks on civil aviation</b>, of not more than eleven persons, "
    "<b>on dates to be agreed</b>, the reply to be conveyed through this channel.</p>",
    "One of these cites an instrument that binds neither state, and names a date nobody has "
    "agreed."))
S["j01-f13"]=lambda: f_realia(form("Note planner",
    [("The opening formula",""),("The request",""),("The purpose, in six words",""),
     ("The composition, with a maximum number",""),("The dates: <i>to be agreed</i>",""),
     ("The channel for the reply",""),
     ("<b>Internal note &mdash; not part of the above</b>",""),
     ("What has been arranged already, and is reversible","")]), 520)
S["j01-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("hana",200,172,{}),
     ("nadia",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("bah",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("clipboard",150,196,0.26),("printer",560,198,0.4),
     ("calendar",420,60,0.44),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(300,30,220,110,"VISIT CHECKLIST",
      [("1 note sent","&#10003;"),("2 purpose","&#10003;"),("3 channel","&#10003;"),
       ("4 composition",""),("5 program","")]),
    clockat=(250,34,22,10,0))
S["j01-f15"]=lambda: f_chart([("often",7),("once or twice",6),("never",4),
    ("I do not know",3),("we always ask first",2)])
S["j01-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("folder",320,192,0.3),("envelope",400,194,0.26),
     ("receipt",470,194,0.26),("note",540,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,30))

# ---------------- Unit 2 · One Ratification Short ----------------
S["j02-f1"]=lambda: f_icons([("book","a final article marked"),("tally","a counter at 34"),
    ("deposit2","a deposit at the depositary"),("calendar","thirty days shaded"),
    ("meeting","a hall with a vote displayed"),("signature","twenty signatures"),
    ("review","a short list of parties"),("shelf","unratified instruments"),
    ("clock","fifty years"),("handshake","two officials on one clause")], cols=5)
S["j02-f2"]=lambda: f_scene(920,420, people=[("omar",320,176,{"seated":True}),
     ("bah",420,172,{})],
    props=[("desk",240,0,1.25),("book",320,192,0.32),("review",395,196,0.28),
     ("pen",460,198,0.22),("computer",590,142,0.44),("window",810,56,0.98)],
    clockat=(140,46,22,11,0))
S["j02-f3"]=lambda: f_icons([("vote","a text adopted"),("signature","a signature added"),
    ("deposit2","an instrument deposited"),("tally","the counter advances by one"),
    ("calendar","thirty days counted"),("square","one short of the threshold")], cols=3)
S["j02-f4"]=lambda: f_realia(tbl("","Agreed, and not in effect",
    ["What was agreed","When","The condition for it to take effect","What governs instead"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The sentence I will write about it:</b>"), 580)
S["j02-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Protocol note 2 &middot; a convention not in force",
    "<p>The <b>Vienna Convention on the Representation of States in their Relations with "
    "International Organizations of a Universal Character</b> was adopted on <b>14 March 1975</b>. "
    "The conference had opened on 4 February. The vote was <b>57 in favor, 1 against, 15 "
    "abstentions</b>.</p>"
    "<p><b>Article 89</b> is its entry-into-force clause:</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'>The present Convention shall enter into force "
    "on the <b>thirtieth day following the date of deposit of the thirty-fifth instrument of "
    "ratification or accession</b>.</p>"
    + table_html(["",""],
      [["<b>Adopted</b>","<b>14 March 1975</b> (57&ndash;1&ndash;15)"],
       ["<b>Threshold</b>","<b>35</b> instruments"],
       ["<b>Parties</b>, on the depositary's page","<b>34</b>"],
       ["<b>Signatories</b>","<b>20</b>"]])
    + "<p><b>So the Convention is one instrument short.</b> It has been for fifty years. Nothing in "
    "the text obliges a state to deposit the thirty-fifth. No mechanism lowers the threshold. A "
    "convention can be open, published and uncontroversial, and never operate.</p>"
    "<p><b>One further limit, in the scope provision.</b> Even for parties, the Convention applies "
    "to representation at an organization only once <b>the host State has accepted</b> it, and the "
    "organization has completed a procedure in the Convention itself. <b>Being a party would not be "
    "enough on its own.</b></p>"
    "<p><b>What governs instead.</b> Headquarters agreements. Bilateral agreements. The "
    "organization's own rules. Practice. Longer to explain, and the only accurate answer.</p>"
    "<p><b>What to write.</b> <i>The Convention has not entered into force.</i> Six words. Then, if "
    "the reader needs it: <i>it requires thirty-five instruments and the depositary's page records "
    "thirty-four.</i></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Convention of 14 March 1975, Article 89 "
    "and its scope provision; the depositary's status page recording 34 parties and 20 signatories; "
    "and the published record of the adoption vote.</p>"))
S["j02-f6"]=lambda: f_realia(tbl("Word study","Full clause and participle clause",
    ["Full clause","Participle clause"],
    [["because it has thirty-four parties","having thirty-four parties"],
     ["after it had been adopted in 1975","having been adopted in 1975"],
     ["since it requires thirty-five instruments","requiring thirty-five instruments"],
     ["when it was opened for signature",""],
     ["as it has never entered into force",""],
     ["because it was never ratified by enough states",""]]), 520)
S["j02-f7"]=lambda: f_part("Article 89: the threshold is thirty-five",
    [("instruments deposited",34,GREEN),("still required",1,AMBER)])
S["j02-f8"]=lambda: f_icons([("vote","adopted"),("signature","signed"),
    ("deposit2","deposited"),("tally","thirty-four"),
    ("calendar","thirty days"),("square","the thirty-fifth, dotted")], cols=3)
S["j02-f9"]=lambda: f_realia(form("Instrument check sheet",
    [("Adopted","14 March 1975"),("Entry-into-force clause","Article 89"),
     ("Threshold","35 instruments"),("Parties","34, depositary's page"),
     ("In force for us","<i>not established</i>"),("In force for them","<i>not established</i>")],
    note="<b>Cite nothing until the last two lines are filled.</b>"), 540)
S["j02-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("bah",400,172,{})],
    props=[("desk",230,0,1.25),("book",310,192,0.32),("review",385,196,0.26),
     ("pen",450,198,0.22),("folder",520,194,0.26),("window",800,56,0.96)],
    clockat=(140,46,22,11,0))
S["j02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Check sheet A", None,
        "<p>Convention on the Representation of States &hellip;<br>"
        "<b>on point</b></p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Check sheet B", None, ["Line","Entry"],
        [["adopted","14 March 1975"],["clause","Article 89"],["threshold","35"],
         ["parties","34"],["in force for us","no"],["in force for them","no"]],
        note="<b>Two words, or six lines.</b> Only one of them can be defended at four o'clock."),
        w)[0:3],
    w=920, h=300)
S["j02-f12"]=lambda: f_realia(doc("Two drafted paragraphs", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Draft 1</b><br>"
    "The question is governed by the Convention on the Representation of States in their Relations "
    "with International Organizations of a Universal Character.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Draft 2</b><br>"
    "<b>The Convention has not entered into force.</b> It was adopted on 14 March 1975. Article 89 "
    "requires thirty-five instruments; the depositary's page records thirty-four. A second limit in "
    "its scope provision would apply even to parties. <b>What governs instead:</b> (1) the "
    "headquarters agreement, (2) the organization's own rules, (3) practice.</p>",
    "One of these will be corrected by the first lawyer who reads it."))
S["j02-f13"]=lambda: f_realia(form("Note planner",
    [("The conclusion, in one line",""),("Why: adopted on",""),("the clause",""),
     ("the threshold",""),("the count, and its page",""),
     ("The second limit",""),("What governs instead (1)",""),("(2)",""),("(3)",""),
     ("What we do not write","")]), 520)
S["j02-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("bah",200,172,{}),
     ("nadia",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,192,0.28),("printer",560,198,0.4),
     ("tally",420,194,0.24),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(300,30,220,110,"CHECK SHEET",
      [("adopted","1975"),("clause","Art 89"),("threshold","35"),
       ("in force for us",""),("in force for them","")]),
    clockat=(250,34,22,12,0))
S["j02-f15"]=lambda: f_chart([("yes, more than once",7),("yes, once",5),("no",4),
    ("I do not cite instruments",3),("I check every time",2)])
S["j02-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("envelope",320,194,0.26),("note",400,194,0.24),
     ("review",470,196,0.26),("book",545,192,0.28),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,0))

# ---------------- Unit 3 · A Hundred and Sixty-Two ----------------
S["j03-f1"]=lambda: f_icons([("passport","an official travel document"),("idcard","an emblem card"),
    ("bag","a sealed pouch"),("councilbuilding","an emblem on the gate"),
    ("certificate","an exemption certificate"),("barrier","a customs counter"),
    ("podium","an empty witness box"),("signature","a signed waiver"),
    ("review","a column of reservations"),("book","two different conventions")], cols=5)
S["j03-f2"]=lambda: f_scene(920,420, people=[("omar",320,176,{"seated":True}),
     ("bah",420,172,{})],
    props=[("desk",240,0,1.25),("book",315,192,0.3),("book",370,192,0.3),
     ("review",440,196,0.26),("computer",590,142,0.44),("window",810,56,0.98)],
    clockat=(140,46,22,10,30))
S["j03-f3"]=lambda: f_icons([("deposit2","an instrument deposited"),("pen","a reservation entered"),
    ("barrier","an immunity asserted"),("signature","a waiver signed"),
    ("passport","a laissez-passer inspected"),("book","two dates on two covers")], cols=3)
S["j03-f4"]=lambda: f_realia(tbl("","The figure and its base",
    ["The instrument","The published figure","The denominator","How many are not parties"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The one that surprised me:</b>"), 580)
S["j03-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Protocol note 3 &middot; privileges and immunities",
    table_html(["",""],
      [["<b>Convention on the Privileges and Immunities of the United Nations</b>","<b>1946</b>"],
       ["<b>Entered into force</b>","<b>17 September 1946</b>"],
       ["<b>Parties</b>, on the depositary's record","<b>162</b>"],
       ["<b>Of those, with reservations</b>","<b>23</b>"]])
    + "<p><b>So 31 UN member states are not parties to it.</b> That is the sentence in this note "
    "which will surprise a reader. It is the reason the note exists. The figure of 162 carries the "
    "date of the page it came from. Re-check it before external use.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What has to be read state by state.</b> "
    "Twenty-three parties accepted the Convention <b>subject to reservations</b>. A reservation "
    "limits what that state has accepted. So there is no single answer to <i>does the Convention "
    "apply</i>. There are up to 162 answers. The page lists the declarations and reservations state "
    "by state.</p>"
    "<p><b>A second and separate instrument.</b> The <b>Convention on the Privileges and Immunities "
    "of the Specialized Agencies</b> was adopted on <b>21 November 1947</b>. It is a different "
    "convention with a different and smaller list of parties. Published figures put it at about "
    "<b>131</b>. <b>Being a party to the 1946 Convention is not being a party to the 1947 "
    "Convention.</b> A page about one tells you nothing about the other.</p>"
    "<p><b>What this means for a draft.</b> Three sentences, in this order. The Convention and its "
    "date. The figure, with its base and its page. And: <i>the position for the state concerned "
    "must be read on the depositary's page, including any reservation.</i></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the depositary's record for the Convention on "
    "the Privileges and Immunities of the United Nations, 1946, giving 162 parties, 23 of them with "
    "reservations, and entry into force on 17 September 1946; and published figures of about 131 "
    "parties for the Convention of 21 November 1947. Both figures are dated.</p>"))
S["j03-f6"]=lambda: f_realia(tbl("Word study","Plain and formulaic requests",
    ["Plain","In the register"],
    [["please send","would be grateful if the Embassy would transmit"],
     ["we ask","has the honour to request"],
     ["we have been told to ask","is instructed to request"],
     ["please confirm by Thursday",""],
     ["we need this quickly",""],
     ["thank you in advance",""]]), 520)
S["j03-f7"]=lambda: f_part("One figure, three facts",
    [("parties",162,GREEN),("not parties",31,AMBER)])
S["j03-f8"]=lambda: f_icons([("deposit2","deposited"),("pen","a reservation entered"),
    ("barrier","an immunity asserted"),("signature","a waiver signed"),
    ("passport","a laissez-passer"),("book","two dates")], cols=3)
S["j03-f9"]=lambda: f_realia(tbl("Status extract &middot; accessions",
    "Read the footnotes, not the total",
    ["State","Date of accession",""],
    [["Astrand","4 June 1951","<sup>a</sup>"],["Kesteland","19 March 1963",""],
     ["Marovia","2 October 1974","<sup>b</sup>"],["Perenne","8 May 1958",""],
     ["Valmora","30 November 1981","<sup>c</sup>"],["Sable Isles","14 July 1992","<sup>d</sup>"]],
    note="<sup>a</sup> reservation to the article on legal process &middot; <sup>b</sup> "
    "declaration on the application to its courts &middot; <sup>c</sup> reservation withdrawn in "
    "part &middot; <sup>d</sup> declaration on taxation. <b>Read the footnotes, not the "
    "total.</b>"), 580)
S["j03-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("hana",400,172,{})],
    props=[("desk",230,0,1.25),("book",310,192,0.3),("book",365,192,0.3),
     ("review",435,196,0.26),("folder",505,194,0.26),("window",800,56,0.96)],
    board=(620,36,180,96,"TWO FIGURES",[("1946","162"),("1947","about 131")]),
    clockat=(140,46,22,10,30))
S["j03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Draft A", None,
        "<p>As all member states are parties to the Convention, the immunity applies.</p>"),
        w)[0:3],
    lambda w,h: f_realia(doc("Draft B", None,
        "<p>The Convention dates from 1946 and entered into force on 17 September 1946. The "
        "depositary's record gives <b>162 parties</b> out of <b>193</b> member states, "
        "<b>23</b> of them with reservations. <b>The position for Astrand must be read on the "
        "depositary's page, including any reservation.</b></p>"), w)[0:3],
    w=920, h=300)
S["j03-f12"]=lambda: f_realia(doc("Two notes verbale", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Please send us a list of the declarations and reservations made by your Government.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "The Ministry <b>presents its compliments</b> and <b>has the honour to request</b> "
    "confirmation of the declarations and reservations entered by the Government of Astrand in "
    "respect of the Convention of 1946. The Ministry <b>ventures to add</b> that the Convention of "
    "21 November 1947 is a separate instrument. The Ministry <b>avails itself of this "
    "opportunity</b> to renew the assurances of its highest consideration.</p>",
    "The second asks for the entry. The first asks the Embassy to do the work."))
S["j03-f13"]=lambda: f_realia(form("Note planner",
    [("The opening formula",""),("The instrument, and its date",""),
     ("The formulaic request, in the passive",""),
     ("The sentence distinguishing the 1947 Convention",""),
     ("The closing formula",""),
     ("<b>Internal note &mdash; not part of the above</b>",""),
     ("The figure, its base and the date of the page","")]), 520)
S["j03-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("hana",200,172,{}),
     ("bah",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("nadia",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,192,0.28),("printer",560,198,0.4),
     ("archive",420,196,0.3),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(300,30,220,110,"TWO INSTRUMENTS",
      [("1946","162"),("1947","about 131"),("not the same","&mdash;")]),
    clockat=(250,34,22,11,0))
S["j03-f15"]=lambda: f_chart([("privileges and immunities",8),("the Geneva Conventions",5),
    ("the Charter itself",4),("consular relations",3),("I had never thought about it",2)])
S["j03-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("envelope",320,194,0.26),("folder",395,194,0.26),
     ("note",465,194,0.24),("flashcard",535,196,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,3,0))
