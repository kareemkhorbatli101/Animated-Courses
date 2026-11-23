# -*- coding: utf-8 -*-
"""Foreign Service English Book 4 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · Universal, and Its Protocols ----------------
S["j04-f1"]=lambda: f_icons([("shelf","four volumes together"),("truck","an emblem on a vehicle"),
    ("clinic","a medical post"),("barrier","a camp gate"),
    ("family","a family on a road"),("signature","a page of many names"),
    ("review","four columns"),("worldmap","four shadings"),
    ("book","a training manual"),("handshake","two lists compared")], cols=5)
S["j04-f2"]=lambda: f_scene(920,420, people=[("omar",320,176,{"seated":True}),
     ("bah",420,172,{})],
    props=[("desk",240,0,1.25),("book",300,192,0.3),("book",350,192,0.28),
     ("review",430,196,0.26),("worldmap",600,120,0.5),("window",815,56,0.98)],
    clockat=(140,46,22,9,0))
S["j04-f3"]=lambda: f_icons([("stamp","a convention ratified"),("pen","a protocol ratified"),
    ("review","one column and not another"),("worldmap","four shadings"),
    ("archive","a dated page filed"),("calendar","a figure with its date")], cols=3)
S["j04-f4"]=lambda: f_realia(tbl("","One phrase, several memberships",
    ["The subject","How many instruments","Do the memberships match?",
     "The phrase we use for all of them"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What that phrase hides:</b>"), 580)
S["j04-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Protocol note 4 &middot; four instruments",
    table_html(["Instrument","Date","States party"],
      [["the four <b>Geneva Conventions</b>","<b>12 August 1949</b>","<b>195</b>"],
       ["<b>Additional Protocol I</b>","<b>8 June 1977</b>","<b>173</b>"],
       ["<b>Additional Protocol II</b>","<b>8 June 1977</b>","<b>167</b>"],
       ["<b>Additional Protocol III</b>","<b>2005</b>","<b>66</b>"]])
    + "<p><b>All four figures come from one page: an annual-report map, as at 31 December 2013.</b> "
    "They are given with that date. A figure of this kind without its date is not information. "
    "Current figures are on the publisher's treaty database. Take them from there before external "
    "use.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What two publishers say differently.</b> "
    "The map gives <b>195</b> for the Conventions. Another published summary gives <b>194</b> and "
    "calls the Conventions <b>universally ratified</b>. The difference of one is not an error by "
    "either. It depends on the date and on which entities are counted. <b>Both can be quoted, with "
    "their sources.</b></p>"
    "<p><b>Four instruments, four memberships.</b> A state is a High Contracting Party to each "
    "instrument separately. On the 2013 figures the gap between the Conventions and the third "
    "Protocol is <b>129 states</b>. A draft that writes <i>the Conventions and their Protocols</i> "
    "as one subject has merged four memberships.</p>"
    "<p><b>What should have been written.</b> A draft <b>should have</b> named the instrument it "
    "meant. It <b>need not have</b> given all four figures. One, with its date, would have done. "
    "<b>What it must not do</b> is use the word <i>universal</i> across all four.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the publisher's annual-report map of States "
    "party to the Geneva Conventions of 12 August 1949 and their Additional Protocols, as at 31 "
    "December 2013, giving 195, 173, 167 and 66; and a published summary giving 194 and describing "
    "the Conventions as universally ratified.</p>"))
S["j04-f6"]=lambda: f_realia(tbl("Word study","Modal perfects",
    ["Form","What it says","An example"],
    [["should have","the right course, not taken",
      "The draft <b>should have</b> named the instrument."],
     ["need not have","done, and unnecessary",
      "It <b>need not have</b> given all four figures."],
     ["might have","possible, not established",
      "The figure <b>might have</b> changed since 2013."],
     ["could have","possible and available","&nbsp;"],
     ["ought to have","the same as <i>should</i>, heavier","&nbsp;"],
     ["cannot have","the only thing ruled out","&nbsp;"]]), 600)
S["j04-f7"]=lambda: f_chart([("Conventions",195),("Protocol I",173),("Protocol II",167),
    ("Protocol III",66)], unit="states party")
S["j04-f8"]=lambda: f_icons([("shelf","four volumes"),("truck","an emblem"),
    ("signature","a signature page"),("review","four columns"),
    ("archive","a dated page"),("calendar","a figure and its date")], cols=3)
S["j04-f9"]=lambda: f_realia(tbl("Figures card &middot; four instruments", None,
    ["Instrument","Date","States party"],
    [["Geneva Conventions","12 Aug 1949","195"],["Additional Protocol I","8 Jun 1977","173"],
     ["Additional Protocol II","8 Jun 1977","167"],["Additional Protocol III","2005","66"]],
    note="<b>All four figures are from one page, as at 31 December 2013.</b><br>"
    "<b>What we write in a briefing:</b> <i>On the publisher's map as at 31 December 2013, 195 "
    "states were party to the Conventions.</i><br><b>Re-check before external use.</b>"), 560)
S["j04-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("hana",400,172,{})],
    props=[("desk",230,0,1.25),("book",295,192,0.3),("book",345,192,0.28),
     ("review",420,196,0.26),("worldmap",600,120,0.48),("window",805,56,0.96)],
    clockat=(140,46,22,9,0))
S["j04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Briefing A", None,
        "<p>The Geneva Conventions and their Protocols are universally ratified.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Briefing B", None,
        "<p>On the publisher's map <b>as at 31 December 2013</b>, <b>195</b> states were party to "
        "the Geneva Conventions of 1949. A published summary of the same period gives <b>194</b> "
        "and describes them as universally ratified.</p>"), w)[0:3],
    w=920, h=300)
S["j04-f12"]=lambda: f_realia(doc("Two briefing paragraphs", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Draft 1</b><br>"
    "The Geneva Conventions and their Protocols are universally ratified.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Draft 2</b><br>"
    "On the publisher's map <b>as at 31 December 2013</b>, <b>195</b> states were party to the "
    "Conventions of 1949. A published summary gives <b>194</b> and calls them universally ratified. "
    "<b>The three Additional Protocols are separate instruments</b> with <b>173</b>, <b>167</b> and "
    "<b>66</b> states party on the same page.</p>",
    "One adjective across four instruments, or four figures and one date."))
S["j04-f13"]=lambda: f_realia(form("Paragraph planner",
    [("The instrument, named, with its date",""),
     ("The figure, with the date of its page",""),
     ("A second published figure, with its source",""),
     ("The separate instruments, and their figures",""),
     ("What this paragraph does not claim","")]), 520)
S["j04-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("hana",200,172,{}),
     ("bah",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("nadia",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,192,0.26),("printer",560,198,0.4),
     ("worldmap",430,120,0.4),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(290,26,210,104,"AS AT 31 DEC 2013",
      [("Conventions","195"),("Protocol I","173"),("Protocol II","167"),("Protocol III","66")]),
    clockat=(240,32,22,10,0))
S["j04-f15"]=lambda: f_chart([("about 190",7),("about 170",5),("about 120",4),
    ("fewer than 100",3),("I did not know there was a third",3)])
S["j04-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("envelope",320,194,0.26),("note",395,194,0.24),
     ("review",465,196,0.26),("tray",545,196,0.28),("lamp",180,140,0.42)],
    clockat=(120,46,22,11,0))

# ---------------- Unit 5 · Signed, and Still Not in Force ----------------
S["j05-f1"]=lambda: f_icons([("book","a final article"),("logsheet","an annex of forty-four lines"),
    ("tally","a counter with a gap"),("signature","a signature page"),
    ("deposit2","a ratification deposited"),("calendar","a hundred and eighty days"),
    ("country","a monitoring station"),("meeting","a review conference"),
    ("note","a withdrawal letter"),("pen","a signature left standing")], cols=5)
S["j05-f2"]=lambda: f_scene(920,420, people=[("omar",320,176,{"seated":True}),
     ("bah",420,172,{})],
    props=[("desk",240,0,1.25),("book",310,192,0.3),("logsheet",380,196,0.26),
     ("review",450,196,0.26),("computer",600,142,0.44),("window",815,56,0.98)],
    clockat=(140,46,22,12,20))
S["j05-f3"]=lambda: f_icons([("logsheet","the annex read line by line"),("pen","a line ticked"),
    ("square","a line left blank"),("calendar","a hundred and eighty days"),
    ("note","a ratification withdrawn"),("signature","the signature still there")], cols=3)
S["j05-f4"]=lambda: f_realia(tbl("","A condition and its future",
    ["The condition","Who has to act","How many have","What happens if one never does"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What the clause assumed about the future:</b>"), 580)
S["j05-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Protocol note 5 &middot; a conditional clause",
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The condition, in summary.</b> The Treaty "
    "enters into force only when <b>all forty-four states listed in its Annex 2</b> have ratified "
    "it. Then after a further <b>one hundred and eighty days</b>.</p>"
    + table_html(["",""],
      [["<b>Ratifications</b>, on published figures","about <b>178</b>, as at <b>March 2024</b>"],
       ["<b>Further signatures</b>, not yet ratified","about <b>9</b>"],
       ["<b>Annex 2 states that have not ratified</b>",
        "<b>8</b>, on a published fact sheet dated <b>January 2025</b>"]])
    + "<p>So the treaty has about a hundred and seventy-eight ratifications and <b>is not in "
    "force</b>. The reason is in the clause, not in the count. Under almost any other clause in "
    "this book, a hundred and seventy-eight would have been more than enough. <b>It was to have "
    "entered into force when the annex was complete</b>, and the annex is not complete.</p>"
    "<p><b>What a withdrawn ratification leaves behind.</b> One state <b>withdrew its ratification "
    "in 2023</b> while <b>remaining a signatory</b>. A signatory is not a party. But a signatory is "
    "under the obligation to <b>refrain from acts which would defeat the object and purpose</b> of "
    "the treaty, until it makes clear that it does not intend to become a party. <b>Withdrawing a "
    "ratification changes a state's position. It does not empty it.</b></p>"
    "<p><b>Why the mechanism exists.</b> A clause of this kind is a drafting choice with a purpose. "
    "It makes sure the treaty cannot bind some states while the states whose conduct matters most "
    "stay outside it. <b>The cost of that choice is that the treaty may never enter into force at "
    "all</b>, and the drafters knew it.</p>"
    "<p><b>What this note does not do.</b> It does not name the states concerned. It does not "
    "characterize any state's reasons. Both are published and neither is ours to summarize.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Treaty's entry-into-force provision "
    "requiring ratification by all 44 states listed in Annex 2 and a further 180 days; published "
    "figures of about 178 ratifications as at March 2024 and nine further signatures; a published "
    "fact sheet of January 2025 recording eight Annex 2 states as not having ratified; and "
    "published accounts of a withdrawal of ratification in 2023 with the signature remaining.</p>"))
S["j05-f6"]=lambda: f_realia(tbl("Word study","The future in the past",
    ["What was expected then","What we say now"],
    [["it will enter into force","it <b>was to have entered</b> into force"],
     ["the conference will convene","the conference <b>was due to convene</b>"],
     ["the annex will be completed","the annex <b>was to have been</b> completed"],
     ["the station will be certified",""],
     ["the review will take place",""],
     ["the figure will rise",""]]), 520)
S["j05-f7"]=lambda: f_part("Annex 2: forty-four listed states",
    [("have ratified",36,GREEN),("have not",8,AMBER)])
S["j05-f8"]=lambda: f_icons([("logsheet","the annex"),("pen","a line ticked"),
    ("square","a line blank"),("calendar","days counted"),
    ("note","a withdrawal letter"),("signature","the signature standing")], cols=3)
S["j05-f9"]=lambda: f_realia(doc("Clause sheet &middot; entry into force", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>The condition, in two parts</b><br>"
    "<b>1</b> &nbsp;all forty-four states listed in Annex 2 have ratified<br>"
    "<b>2</b> &nbsp;and then a further one hundred and eighty days</p>"
    + table_html(["",""],
      [["ratifications","about 178, as at March 2024"],
       ["further signatures","about 9"],
       ["Annex 2 states not having ratified","8, fact sheet of January 2025"]])
    + "<p style='background:#f2efe8;padding:9px'><b>What the count does not decide.</b> Whether the "
    "treaty is in force. That is decided by the clause.</p>"
    "<p><b>We do not name states or reasons.</b></p>"))
S["j05-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("hana",400,172,{})],
    props=[("desk",230,0,1.25),("book",300,192,0.3),("logsheet",370,196,0.26),
     ("review",440,196,0.26),("folder",510,194,0.24),("window",805,56,0.96)],
    clockat=(140,46,22,12,20))
S["j05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>The Treaty is close to entering into force.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p><b>1</b> all 44 Annex 2 states ratify; <b>2</b> then 180 days.<br>"
        "About <b>178</b> ratifications as at March 2024. <b>8</b> Annex 2 states not having "
        "ratified, on a fact sheet of January 2025. One withdrawal in 2023, <b>signature "
        "remaining</b>.<br><b>This note does not name states or reasons.</b></p>"), w)[0:3],
    w=920, h=300)
S["j05-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The Treaty is very close to entering into force.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>The Treaty is not in force.</b> The clause requires (1) ratification by all forty-four "
    "Annex 2 states and (2) a further one hundred and eighty days. About 178 ratifications as at "
    "March 2024; about 9 further signatures; 8 Annex 2 states not having ratified, on a fact sheet "
    "of January 2025. One state withdrew its ratification in 2023 and <b>remains a signatory</b>. "
    "<b>This note does not name states or characterize reasons.</b></p>",
    "One of these will be quoted in a headline with the word <i>stalled</i> in it."))
S["j05-f13"]=lambda: f_realia(form("Note planner",
    [("The conclusion, in one line",""),("The condition, part 1",""),("part 2",""),
     ("Figure 1, with its date",""),("Figure 2, with its date",""),("Figure 3, with its date",""),
     ("The withdrawal, in both halves",""),("What this note does not do","")]), 520)
S["j05-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("bah",200,172,{}),
     ("hana",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("nadia",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,192,0.26),("printer",560,198,0.4),
     ("logsheet",425,196,0.26),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(290,26,215,104,"THE CONDITION",
      [("1 all 44 ratify",""),("2 then 180 days",""),("ratifications","~178"),
       ("not yet ratified","8")]),
    clockat=(240,32,22,1,0))
S["j05-f15"]=lambda: f_chart([("certainly in force",6),("probably in force",6),
    ("not necessarily",4),("it depends on the clause",4),("I would have checked",2)])
S["j05-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("note",320,194,0.24),("essay",390,194,0.26),
     ("logsheet",460,196,0.26),("pen",530,198,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,0))

# ---------------- Unit 6 · Choose Your Protocols ----------------
S["j06-f1"]=lambda: f_icons([("shelf","a framework and six protocols"),("form","six tick boxes"),
    ("review","seven columns"),("deposit2","a notification deposited"),
    ("calendar","an amended text with its date"),("meeting","a meeting of the parties"),
    ("essay","a review conference agenda"),("logsheet","a national report"),
    ("worldmap","six shadings"),("handshake","two figures compared")], cols=5)
S["j06-f2"]=lambda: f_scene(920,420, people=[("omar",320,176,{"seated":True}),
     ("bah",420,172,{})],
    props=[("desk",240,0,1.25),("book",290,192,0.26),("book",330,192,0.24),
     ("review",410,196,0.3),("computer",600,142,0.44),("window",815,56,0.98)],
    clockat=(140,46,22,11,30))
S["j06-f3"]=lambda: f_icons([("stamp","the framework ratified"),("form","consent notified"),
    ("square","a protocol unaccepted"),("pen","an amended protocol"),
    ("review","a gap in a row"),("magnifier","one line across seven columns")], cols=3)
S["j06-f4"]=lambda: f_realia(tbl("","A headline and what is under it",
    ["The headline figure","The separate commitments underneath","Which figure we quote",
     "What it tells a reader"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>Which figure I will quote from now on:</b>"), 580)
S["j06-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Protocol note 6 &middot; a framework and its protocols",
    "<p>On the publisher's own status page, <b>updated 18 March 2025</b>:</p>"
    + table_html(["","High Contracting Parties / parties"],
      [["<b>The framework Convention</b>","<b>128</b> (and <b>4</b> signatories)"],
       ["<b>Protocol I</b>","<b>88</b>"],["<b>Protocol II</b>","<b>121</b>"],
       ["<b>Amended Protocol II</b>","<b>96</b>"],["<b>Protocol III</b>","<b>107</b>"],
       ["<b>Protocol IV</b>","<b>117</b>"],["<b>Protocol V</b>","<b>111</b>"]])
    + "<p>The same page in its version of <b>25 June 2024</b> gave <b>127</b> High Contracting "
    "Parties. <b>One accession changed the headline figure and changed nothing else</b>, which is a "
    "useful thing to know about headline figures.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>What the framework figure does not tell "
    "you.</b> It does not tell you what any state has promised. A state becomes a High Contracting "
    "Party by ratifying the framework. It then <b>separately consents to be bound by each "
    "protocol</b> it accepts. On these figures the gap between the framework and the least widely "
    "accepted protocol is <b>forty states</b>.</p>"
    "<p><b>An amended protocol is a further instrument.</b> Protocol II and Amended Protocol II are "
    "two entries with two figures &mdash; <b>121 and 96</b>. A state may be bound by the original "
    "and not the amended text, and the obligations differ.</p>"
    "<p><b>How to answer a question about one state.</b> Read that state's own line <b>across all "
    "seven columns</b>. No total on the page answers a question about one state.</p>"
    "<p><b>What to write.</b> <i>X is a High Contracting Party to the Convention and has consented "
    "to be bound by Protocols &hellip;, as recorded on the publisher's page of [date].</i> Long, "
    "exact, and unanswerable.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the publisher's status page for the Convention "
    "and its Protocols, updated 18 March 2025, giving 128 High Contracting Parties and 4 "
    "signatories and the protocol figures above; and the version of 25 June 2024, giving 127.</p>"))
S["j06-f6"]=lambda: f_realia(tbl("Word study","Unpacked and packed",
    ["Unpacked","Packed"],
    [["a figure for the parties to the framework","the framework party figure"],
     ["the consent of a state to be bound by a protocol",
      "a state's protocol-by-protocol consent"],
     ["the page on which the figures are published","the published status page"],
     ["the date on which the page was last updated",""],
     ["the gap between the framework and the lowest protocol",""],
     ["the obligations arising from the amended text",""]]), 560)
S["j06-f7"]=lambda: f_chart([("framework",128),("Protocol II",121),("Protocol IV",117),
    ("Protocol V",111),("Protocol III",107),("Amended Protocol II",96),("Protocol I",88)],
    unit="parties")
S["j06-f8"]=lambda: f_icons([("stamp","the framework"),("form","consent notified"),
    ("square","unaccepted"),("pen","an amended text"),
    ("review","a gap in a row"),("magnifier","one line read across")], cols=3)
S["j06-f9"]=lambda: f_realia(tbl("One state, read across seven columns", None,
    ["Instrument","Astrand"],
    [["the framework Convention","&#10003;"],["Protocol I","&mdash;"],
     ["Protocol II","&#10003;"],["Amended Protocol II","&mdash;"],
     ["Protocol III","&#10003;"],["Protocol IV","&#10003;"],["Protocol V","&mdash;"]],
    note="<b>Astrand is a High Contracting Party to the Convention and has consented to be bound "
    "by Protocols II, III and IV.</b><br>The figures on this page are those of the page updated 18 "
    "March 2025. <b>No total on this page answers a question about one state.</b>"), 560)
S["j06-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("hana",400,172,{})],
    props=[("desk",230,0,1.25),("book",285,192,0.26),("book",325,192,0.24),
     ("review",400,196,0.3),("folder",500,194,0.24),("window",805,56,0.96)],
    clockat=(140,46,22,11,30))
S["j06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>Astrand is a party and is therefore bound by the Convention's provisions.</p>"),
        w)[0:3],
    lambda w,h: f_realia(tbl("Note B", None, ["Instrument","Astrand"],
        [["Convention","&#10003;"],["Prot I","&mdash;"],["Prot II","&#10003;"],
         ["Am. Prot II","&mdash;"],["Prot III","&#10003;"],["Prot IV","&#10003;"],
         ["Prot V","&mdash;"]],
        note="<b>Page of 18 March 2025.</b> No total answers a question about one state."),
        w)[0:3],
    w=920, h=300)
S["j06-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Astrand is a party and is bound by the Convention's provisions.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Astrand is a High Contracting Party to the Convention</b> and <b>has consented to be bound "
    "by Protocols II, III and IV</b>, as recorded on the publisher's page updated 18 March 2025. "
    "It has <b>not</b> consented to Protocol I, Amended Protocol II or Protocol V. The framework "
    "figure on that page is 128; the same page gave 127 on 25 June 2024. <b>No total on the page "
    "answers a question about one state.</b></p>",
    "One elegant sentence, or one row read across seven columns."))
S["j06-f13"]=lambda: f_realia(form("Note planner",
    [("The answer, sentence 1",""),("sentence 2",""),
     ("The seven-row table",""),("Caution 1",""),("Caution 2",""),
     ("The framework figure, with both dates",""),
     ("Instruction for external use","")]), 520)
S["j06-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("hana",200,172,{}),
     ("bah",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("nadia",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,192,0.24),("printer",560,198,0.4),
     ("review",425,196,0.28),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(285,24,220,112,"18 MARCH 2025",
      [("framework","128"),("Prot I","88"),("Prot II","121"),("Am. Prot II","96"),
       ("Prot IV","117")]),
    clockat=(240,30,22,12,0))
S["j06-f15"]=lambda: f_chart([("the framework figure",8),("the highest protocol figure",4),
    ("the lowest protocol figure",3),("all of them",3),("I would have asked which question",4)])
S["j06-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("note",320,194,0.24),("envelope",390,194,0.26),
     ("review",460,196,0.28),("pen",540,198,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,3,30))
