# -*- coding: utf-8 -*-
"""Foreign Service English Book 4 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · A Hundred and Ninety-Three of a Hundred and Ninety-Seven ----------
S["j07-f1"]=lambda: f_icons([("book","final clauses"),("logsheet","eligible entities"),
    ("tally","193 and 197"),("deposit2","an accession deposited"),
    ("councilbuilding","a headquarters"),("form","a declaration"),
    ("clipboard","an inspection team"),("badge","a national authority"),
    ("meeting","a conference in session"),("calculator","a numerator and a denominator")],
    cols=5)
S["j07-f2"]=lambda: f_scene(920,420, people=[("omar",320,176,{"seated":True}),
     ("bah",420,172,{})],
    props=[("desk",240,0,1.25),("book",310,192,0.3),("logsheet",380,196,0.26),
     ("notebook",450,196,0.26),("computer",600,142,0.44),("window",815,56,0.98)],
    clockat=(140,46,22,10,0))
S["j07-f3"]=lambda: f_icons([("pen","a figure written down"),("star","a familiar figure"),
    ("worried","a wrong denominator assumed"),("logsheet","eligible entities counted"),
    ("pencil","a correction"),("calculator","a fraction with a line")], cols=3)
S["j07-f4"]=lambda: f_realia(tbl("","The fraction, properly written",
    ["The numerator","The assumed denominator","The real denominator","The right adjective"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The fraction I will write from now on:</b>"), 580)
S["j07-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Protocol note 7 &middot; a near-universal convention",
    "<p><b>The figure, written properly.</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:10px;text-align:center;font-size:20px'>"
    "<b>193 out of 197</b></p>"
    + table_html(["",""],
      [["<b>States Parties</b>","<b>193</b>"],
       ["<b>Entities eligible to become parties</b>","<b>197</b>"],
       ["Of which","the <b>193 United Nations member states</b> and <b>four further entities</b> "
        "that are not UN member states"]])
    + "<p style='border:1px solid #d9d4c9;padding:9px'><b>The coincidence.</b> The numerator, 193, "
    "is the same number as the current United Nations membership. A reader who knows that figure "
    "will assume the denominator is also 193, and that the convention is <b>universal</b>. <b>It is "
    "near-universal</b>, which is a different and accurate word. And the four states that are not "
    "parties are <b>not</b> the four non-UN entities. <b>Two separate facts are merged by one "
    "coincidence.</b></p>"
    "<p><b>Why the denominator is larger.</b> The convention is open to entities beyond the United "
    "Nations membership. That is common in this field and almost never reflected in a briefing. "
    "<b>In most published counts in this book the denominator is not the UN membership.</b></p>"
    "<p><b>What to write.</b> Two sentences. <i>The Convention has 193 States Parties out of 197 "
    "eligible entities.</i> <i>It is therefore near-universal, and four eligible entities are not "
    "parties.</i></p>"
    "<p><b>What not to write.</b> <i>All states are parties.</i> <i>Universal.</i> <i>193 &mdash; "
    "that is to say, every member of the United Nations.</i> The third is the most dangerous. It is "
    "nearly true, and it invites no checking.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: published figures giving 193 States Parties "
    "and 197 entities eligible to become parties, the latter comprising the 193 United Nations "
    "member states and four further entities. Figures are dated; take current ones from the "
    "implementing organization's own page.</p>"))
S["j07-f6"]=lambda: f_realia(tbl("Word study","With <i>if</i>, and inverted",
    ["With <i>if</i>","Inverted"],
    [["if you wish to accede","<b>should you wish</b> to accede"],
     ["if it were not for the coincidence","<b>were it not</b> for the coincidence"],
     ["if the denominator had been 193","<b>had the denominator been</b> 193"],
     ["if the Embassy requires the current table",""],
     ["if the figure were universal",""],
     ["if we had checked the eligible list",""]]), 540)
S["j07-f7"]=lambda: f_part("193 States Parties out of 197 eligible entities",
    [("parties",193,GREEN),("eligible, not parties",4,AMBER)])
S["j07-f8"]=lambda: f_icons([("book","final clauses"),("logsheet","eligible entities"),
    ("tally","two counters"),("deposit2","an accession"),
    ("pencil","a correction"),("calculator","a fraction")], cols=3)
S["j07-f9"]=lambda: f_realia(doc("Figures card &middot; States Parties", None,
    "<p style='border:1px solid #d9d4c9;padding:10px;text-align:center;font-size:20px'>"
    "<b>193 / 197</b></p>"
    + table_html(["",""],
      [["States Parties","193"],["Eligible entities","197"],
       ["Of which","193 UN member states + 4 further entities"]])
    + "<p style='background:#f2efe8;padding:9px'><b>The coincidence.</b> 193 is also the UN "
    "membership. <b>The four non-parties are not the four non-UN entities.</b></p>"
    "<p><b>Do not say:</b> <i>universal</i> &middot; <i>all states are parties</i> &middot; "
    "<i>193, that is to say every UN member</i>.</p>"
    "<p><b>Should the Embassy require it</b>, the current table will be transmitted.</p>"))
S["j07-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("hana",400,172,{})],
    props=[("desk",230,0,1.25),("book",300,192,0.3),("logsheet",370,196,0.26),
     ("notebook",440,196,0.26),("folder",510,194,0.24),("window",805,56,0.96)],
    clockat=(140,46,22,10,0))
S["j07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Brief A", None,
        "<p>The Convention has 193 States Parties &mdash; that is to say, every member of the "
        "United Nations.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Brief B", None,
        "<p>The Convention has <b>193 States Parties out of 197 eligible entities</b>. It is "
        "therefore <b>near-universal</b>. Four eligible entities are not parties. <b>Should the "
        "Embassy require it</b>, the current table will be transmitted.</p>"), w)[0:3],
    w=920, h=300)
S["j07-f12"]=lambda: f_realia(doc("Two briefs", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Brief 1</b><br>"
    "The Convention has 193 States Parties &mdash; that is to say, every member of the United "
    "Nations.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Brief 2</b><br>"
    "<b>193 States Parties out of 197 eligible entities.</b> The 197 comprises the 193 UN member "
    "states and four further entities. The Convention is therefore <b>near-universal</b>. Four "
    "eligible entities are not parties, and they are <b>not</b> the four non-UN entities. <b>Do not "
    "write:</b> universal &middot; all states &middot; that is to say every UN member. <b>Should "
    "the current table be required</b>, it will be transmitted.</p>",
    "The first is nearly true, which is why nobody checks it."))
S["j07-f13"]=lambda: f_realia(form("Brief planner",
    [("The figure, as a fraction",""),("The denominator, line 1",""),("line 2",""),("line 3",""),
     ("The caution about the coincidence",""),
     ("Do not say (1)",""),("(2)",""),("(3)",""),
     ("The offer, with an inverted conditional","")]), 520)
S["j07-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("hana",200,172,{}),
     ("bah",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("nadia",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,192,0.26),("printer",560,198,0.4),
     ("calculator",425,196,0.24),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(290,28,210,100,"THE FRACTION",
      [("parties","193"),("eligible","197"),("not parties","4")]),
    clockat=(240,32,22,11,0))
S["j07-f15"]=lambda: f_chart([("193",9),("195",4),("197",3),("I had not thought about it",4),
    ("I would have checked",2)])
S["j07-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("envelope",395,194,0.26),
     ("review",465,196,0.26),("idcard",540,196,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,10,30))

# ---------------- Unit 8 · The Transit Obligation ----------------
S["j08-f1"]=lambda: f_icons([("map","a boundary on a city map"),("councilbuilding","a gate"),
    ("passport","a visa stamp"),("queue","a separate channel"),
    ("badge","a delegate's pass"),("signature","two signature blocks"),
    ("meeting","three chairs for arbitration"),("note","a letter of complaint"),
    ("podium","a hall in session"),("handshake","two officials on one clause")], cols=5)
S["j08-f2"]=lambda: f_scene(920,420, people=[("omar",320,176,{"seated":True}),
     ("bah",420,172,{})],
    props=[("desk",240,0,1.25),("map",300,190,0.32),("book",380,192,0.3),
     ("note",450,196,0.24),("computer",600,142,0.44),("window",815,56,0.98)],
    clockat=(140,46,22,9,0))
S["j08-f3"]=lambda: f_icons([("map","a boundary drawn"),("envelope","an invitation issued"),
    ("passport","a visa applied for"),("suitcase","a traveler in transit"),
    ("note","a complaint lodged"),("chair","three chairs for arbitration")], cols=3)
S["j08-f4"]=lambda: f_realia(tbl("","A favor, or an obligation",
    ["What people call it","Where it is written","Whose duty it is",
     "What happens if it is not met"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The sentence that reframes it:</b>"), 580)
S["j08-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Protocol note 8 &middot; a headquarters agreement",
    "<p>The <b>agreement of 1947</b> between the Organization and the state in which its "
    "headquarters are situated does three things that matter to a protocol department.</p>"
    + table_html(["",""],
      [["<b>1</b>","it <b>defines the headquarters district</b> &mdash; the area in which the "
        "premises lie"],
       ["<b>2</b>","it provides for <b>access to that district and transit through the host "
        "state's territory</b> for persons having business with the Organization, including "
        "representatives of members, officials and persons invited by the Organization"],
       ["<b>3</b>","it provides for <b>disputes between the Organization and the host state to be "
        "settled by arbitration</b>"]])
    + "<p style='border:1px solid #d9d4c9;padding:9px'><b>The third clause is the one to "
    "notice.</b> An instrument that provides a procedure for resolving disagreements is an "
    "instrument whose other provisions are <b>obligations</b>. Nobody drafts an arbitration clause "
    "for a hospitality arrangement.</p>"
    "<p><b>Two framings of the same facts.</b></p>"
    + table_html(["Framing","What follows"],
      [["<b>Hospitality</b>","nothing follows. There is no remedy for the withdrawal of a favor, "
        "and no forum in which to raise it"],
       ["<b>Obligation under an agreement</b>","<b>it falls to the Organization</b> to raise a "
        "difficulty; <b>it is open to either party</b> to invoke the dispute settlement clause; and "
        "the question is justiciable"]])
    + "<p><b>Why this matters to a sending state.</b> When one of our representatives has "
    "difficulty reaching a meeting, our first question is not whether the host state has been "
    "helpful. It is <b>what the agreement provides, to whom the duty is owed, and whose duty it is "
    "to raise it</b> &mdash; which, in the ordinary case, is the Organization's and not ours.</p>"
    "<p><b>What to write.</b> <i>The obligation arises under the headquarters agreement.</i> "
    "<b>Not</b> <i>the host state has generously facilitated&hellip;</i></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the agreement of 1947 between the United "
    "Nations and the state in which its Headquarters are situated, which defines the headquarters "
    "district, provides for access and transit for persons having business with the Organization, "
    "and provides for the settlement of disputes between the parties by arbitration.</p>"))
S["j08-f6"]=lambda: f_realia(tbl("Word study","Personal and impersonal",
    ["Personal","Impersonal"],
    [["the Organization must raise it","<b>it falls to</b> the Organization to raise it"],
     ["either party can go to arbitration","<b>it is open to</b> either party to go to arbitration"],
     ["we think the clause applies","<b>it is understood that</b> the clause applies"],
     ["the agreement says the district is defined",""],
     ["somebody should ask the Organization",""],
     ["we cannot decide this ourselves",""]]), 560)
S["j08-f7"]=lambda: f_process(["a duty","a person whose duty it is","a forum"], w=620)
S["j08-f8"]=lambda: f_icons([("map","a boundary"),("envelope","an invitation"),
    ("passport","a visa"),("suitcase","in transit"),
    ("note","a complaint"),("chair","three chairs")], cols=3)
S["j08-f9"]=lambda: f_realia(doc("Incident note &middot; 11 June", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What happened</b><br>"
    "<b>09:40</b> our representative presented a pass at the perimeter<br>"
    "<b>10:05</b> entry was not permitted; the meeting had opened at 10:00<br>"
    "<b>10:50</b> entry was permitted</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What the agreement provides</b><br>"
    "access to the headquarters district for persons having business with the Organization<br>"
    "transit through the host state's territory for the same persons</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>To whom the obligation is owed</b><br>"
    "to the Organization</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Whose duty it is to raise it</b><br>"
    "<b>it falls to the Organization</b> to raise the difficulty with the host state</p>"
    "<p><b>What is open to us:</b> to report the facts to the Organization, to ask what it proposes, "
    "and to keep the note on the file.</p>"))
S["j08-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("hana",400,172,{})],
    props=[("desk",230,0,1.25),("map",290,190,0.32),("book",370,192,0.3),
     ("note",440,196,0.24),("folder",510,194,0.24),("window",805,56,0.96)],
    clockat=(140,46,22,9,0))
S["j08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Incident note A", None,
        "<p>The host state is usually accommodating but was unhelpful on this occasion. We should "
        "complain.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Incident note B", None,
        "<p><b>1</b> the facts, with times, 11 June. <b>2</b> the provision: access and transit "
        "for persons having business with the Organization. <b>3</b> the duty is owed to the "
        "Organization. <b>4</b> <b>it falls to the Organization</b> to raise it. <b>5</b> what is "
        "open to us: report, ask, file.</p>"), w)[0:3],
    w=920, h=300)
S["j08-f12"]=lambda: f_realia(doc("Two incident notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The host state is normally generous and was unaccountably unhelpful. The Ministry should "
    "complain in the strongest terms.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1</b> At 09:40 on 11 June our representative presented a pass; entry was not permitted "
    "until 10:50; the meeting had opened at 10:00.<br>"
    "<b>2</b> The agreement provides for access and transit for persons having business with the "
    "Organization.<br><b>3</b> The duty is owed to the Organization.<br>"
    "<b>4</b> <b>It falls to the Organization</b> to raise it.<br>"
    "<b>5</b> <b>It is open to either party</b> to invoke the dispute settlement clause.</p>",
    "The first has two adjectives in it and no provision. The second has no adjectives."))
S["j08-f13"]=lambda: f_realia(form("Note planner",
    [("1 &nbsp;The facts, with times",""),("2 &nbsp;The provision",""),
     ("3 &nbsp;To whom the duty is owed",""),("4 &nbsp;Whose duty it is to raise it",""),
     ("5 &nbsp;What is open to us",""),
     ("<b>One sentence for the file</b>","")]), 520)
S["j08-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("hana",200,172,{}),
     ("bah",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("nadia",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("map",150,190,0.26),("printer",560,198,0.4),
     ("folder",425,196,0.24),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(290,26,215,108,"FIVE HEADINGS",
      [("1 facts",""),("2 provision",""),("3 creditor",""),("4 whose duty",""),
       ("5 open to us","")]),
    clockat=(240,30,22,10,0))
S["j08-f15"]=lambda: f_chart([("ours",6),("the Organization's",7),("the host state's",4),
    ("nobody's",2),("I had not thought about it",3)])
S["j08-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("folder",310,194,0.24),("folder",360,194,0.24),
     ("folder",410,194,0.24),("envelope",480,194,0.26),("essay",550,194,0.26),
     ("lamp",180,140,0.42)],
    clockat=(120,46,22,4,0))

# ---------------- Unit 9 · A Count Nobody Can State Officially ----------------
S["j09-f1"]=lambda: f_icons([("certificate","an export license"),("crate","a crate inspected"),
    ("archive","a museum register"),("flashcard","an inventory card"),
    ("review","one entry queried"),("essay","a secretariat report"),
    ("note","a commentary with a footnote"),("tally","a figure with a question mark"),
    ("meeting","a meeting of states parties"),("handshake","two reports compared")], cols=5)
S["j09-f2"]=lambda: f_scene(920,420, people=[("omar",320,176,{"seated":True}),
     ("bah",420,172,{})],
    props=[("desk",240,0,1.25),("essay",305,194,0.26),("essay",360,194,0.26),
     ("review",435,196,0.26),("computer",600,142,0.44),("window",815,56,0.98)],
    clockat=(140,46,22,12,0))
S["j09-f3"]=lambda: f_icons([("pen","a figure published"),("pencil","a figure corrected"),
    ("note","marked provisional"),("magnifier","an entry queried"),
    ("quotemark","a footnote added"),("square","a blank where a total would be")], cols=3)
S["j09-f4"]=lambda: f_realia(tbl("","Three kinds of trouble",
    ["The figure","Wrong, provisional or unavailable","What we do with it","What we should do"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The sentence for an unavailable figure:</b>"), 580)
S["j09-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Protocol note 9 &middot; a figure that was unavailable",
    "<p>The <b>Convention of 1970</b> on the illicit import, export and transfer of ownership of "
    "cultural property is one of the instruments this ministry cites most often. Its membership has "
    "been published in three different ways.</p>"
    + table_html(["Figure","Source and date"],
      [["<b>141</b> states having ratified","the organization's <b>own page</b>"],
       ["<b>122</b> States Parties","a <b>secretariat report of 2012</b>, recording <b>twelve</b> "
        "accessions in the preceding five years"],
       ["<b>not statable as 123</b>","a <b>commentary published at the same time</b>, recording "
        "that a <b>dispute about one ratification</b> meant the total <b>could not officially be "
        "counted</b> as 123"]])
    + "<p style='border:1px solid #d9d4c9;padding:9px'><b>That third line is the subject of this "
    "unit.</b> The commentary did not say the figure was wrong. It did not say it was provisional, "
    "or approximate. It said that <b>a dispute about one ratification meant the total could not "
    "officially be counted</b> at the higher number. <b>Counting the entry, and not counting it, "
    "would each have been a position.</b> The publisher declined to take one by arithmetic.</p>"
    "<p><b>Three kinds of trouble with a figure, which are not the same.</b></p>"
    + table_html(["","What it means","What you may write"],
      [["<b>wrong</b>","the figure is mistaken","the corrected figure, with its source"],
       ["<b>provisional</b>","given for now, liable to change",
        "the figure, <b>marked provisional</b>, with its date"],
       ["<b>unavailable</b>","the publisher cannot state it",
        "<b>that it cannot be stated, and why</b>"]])
    + "<p><b>What to write in the third case.</b> <i>The number of States Parties as at that date "
    "could not officially be stated, by reason of a dispute concerning one ratification.</i> Twenty "
    "words. <b>Insofar as</b> a ministry can report an absence precisely, that is how.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the organization's own page giving 141 states "
    "as having ratified the Convention of 1970; a secretariat report of 2012 giving 122 States "
    "Parties and recording twelve accessions in five years; and a commentary published at that time "
    "recording that a dispute concerning one ratification meant the figure could not officially be "
    "counted as 123.</p>"))
S["j09-f6"]=lambda: f_realia(tbl("Word study","Qualifying markers",
    ["Marker","What it limits"],
    [["<b>insofar as</b>","the extent of what follows"],
     ["<b>to the extent that</b>","the degree, measurably"],
     ["<b>save that</b>","excepts one thing from the rest"],
     ["<b>subject to</b>","makes something conditional on another"],
     ["<b>without prejudice to</b>",""],
     ["<b>for the purposes of</b>",""]]), 520)
S["j09-f7"]=lambda: f_realia(tbl("Three boxes", None,
    ["","What is printed","What it admits"],
    [["<b>wrong</b>","<s>123</s> &nbsp; 122","that the first figure was mistaken"],
     ["<b>provisional</b>","122 <i>(provisional)</i>","that it may change"],
     ["<b>unavailable</b>","&nbsp;&nbsp;&nbsp;<sup>1</sup>","that nobody can state it"]],
    note="<b>Only the third box is honest about not knowing.</b>"), 560)
S["j09-f8"]=lambda: f_icons([("pen","published"),("pencil","corrected"),
    ("note","provisional"),("magnifier","queried"),
    ("quotemark","a footnote"),("square","a blank")], cols=3)
S["j09-f9"]=lambda: f_realia(tbl("Figures sheet &middot; Convention of 1970", None,
    ["Figure","Source","Date"],
    [["141 states having ratified","the organization's own page","as printed"],
     ["122 States Parties","secretariat report","2012"],
     ["<sup>1</sup>","commentary","2012"]],
    note="<sup>1</sup> <i>The number of States Parties as at that date could not officially be "
    "stated, by reason of a dispute concerning one ratification.</i><br>"
    "<b>Where the publisher could not state a figure, neither do we.</b>"), 560)
S["j09-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("hana",400,172,{})],
    props=[("desk",230,0,1.25),("essay",295,194,0.26),("essay",350,194,0.26),
     ("review",425,196,0.26),("folder",495,194,0.24),("window",805,56,0.96)],
    clockat=(140,46,22,12,0))
S["j09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Figures sheet A", None,
        "<p style='text-align:center;font-size:22px'><b>123</b></p>"
        "<p>States Parties to the Convention of 1970.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Figures sheet B", None, ["Figure","Source"],
        [["141 ratified","the organization's page"],["122 States Parties","report, 2012"],
         ["<sup>1</sup>","commentary, 2012"]],
        note="<sup>1</sup> could not officially be stated, by reason of a dispute concerning one "
        "ratification."), w)[0:3],
    w=920, h=300)
S["j09-f12"]=lambda: f_realia(doc("Two small tables", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Table 1</b><br>"
    "141 &middot; 122 &middot; [123]</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Table 2</b><br>"
    "141, the organization's own page &middot; 122, secretariat report of 2012 &middot; "
    "<sup>1</sup><br><span style='font-size:12px'><sup>1</sup> The number as at that date could not "
    "officially be stated, by reason of a dispute concerning one ratification.</span><br>"
    "<b>Where a publisher could not state a figure, we do not supply one.</b></p>",
    "One of these has a figure in brackets that nobody published."))
S["j09-f13"]=lambda: f_realia(form("Figures note planner",
    [("Row 1: figure, source, date",""),("Row 2: figure, source, date",""),
     ("Row 3: figure, source, date",""),
     ("The footnote for any unavailable figure",""),
     ("The comparison, with a qualifying marker",""),
     ("The rule for external use","")]), 520)
S["j09-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("hana",200,172,{}),
     ("bah",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("nadia",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("essay",150,194,0.24),("printer",560,198,0.4),
     ("review",425,196,0.26),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(300,30,210,100,"THREE WORDS",
      [("wrong","corrected"),("provisional","dated"),("unavailable","explained")]),
    clockat=(250,34,22,1,0))
S["j09-f15"]=lambda: f_chart([("a range",5),("the lower figure",4),
    ("the higher figure with a footnote",6),("circa",3),("nothing",4)])
S["j09-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("review",320,196,0.26),("note",395,194,0.24),
     ("essay",465,194,0.26),("board",600,60,0.4),("lamp",180,140,0.42)],
    clockat=(120,46,22,3,30))
