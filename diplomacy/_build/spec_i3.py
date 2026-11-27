# -*- coding: utf-8 -*-
"""Foreign Service English Book 3 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · Nationally Determined ----------------
S["i07-f1"]=lambda: f_icons([("handshake","an agreement, many flags"),
    ("folder","a national plan"),("computer","a secretariat registry"),
    ("book","a synthesis report"),("review","uneven bars"),
    ("calendar","every five years"),("archive","one folder, 28 parties"),
    ("essay","a withdrawal letter"),("tally","a count that fell"),
    ("chair","two delegations, one page")], cols=5)
S["i07-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{"seated":True}),
     ("nadia",400,172,{})],
    props=[("desk",230,0,1.3),("book",310,192,0.32),("essay",380,194,0.3),
     ("review",560,42,0.7),("window",800,56,0.96)], clockat=(140,46,22,16,0))
S["i07-f3"]=lambda: f_icons([("computer","communicated to a registry"),
    ("archive","a joint plan, many flags"),("tally","counting documents"),
    ("worldmap","counting parties"),("essay","a withdrawal filed"),
    ("data","a total one lower")], cols=3)
S["i07-f4"]=lambda: f_realia(tbl("","Two counts, one document",
    ["Figure one","What it counts","Figure two","What it counts"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>Which one gets quoted, and why:</b>"), 580)
S["i07-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 7 &middot; reading a synthesis report",
    "<p style='font-size:16px'>The Agreement was <b>adopted on 12 December 2015 by 195 "
    "Parties</b>.</p>"
    + table_html(["Figure","What it is","Date"],
      [["<b>195</b>","Parties at adoption","<b>12 December 2015</b>"],
       ["<b>194</b>","Parties, on the secretariat's own page","<b>as at 27 January 2026</b>"],
       ["<b>168</b>","<b>contributions</b> covered by a 2024 synthesis","communicated <b>by 195 "
        "Parties</b>"]])
    + "<p style='border:1px solid #d9d4c9;padding:8px'><b>Why 168 is lower than 195, and nothing is "
    "missing.</b> A regional organization and its member states may communicate <b>one joint "
    "contribution</b>. The synthesis counted that document <b>once</b>, while recording that it "
    "represented <b>28 Parties</b>. So <b>168 counts documents</b> and <b>195 counts parties "
    "covered</b>. Both appear in the same report.</p>"
    "<p><b>A count that went down.</b> The party figure is <b>194 as at January 2026</b> against "
    "<b>195</b> at adoption. <b>A published party count can fall</b>, which is a reason to print the "
    "date beside every figure of this kind.</p>"
    "<p><b>One further caution.</b> A later synthesis covered <b>127 new contributions representing "
    "154 Parties</b> over a stated period. <b>A figure with a window attached is not a total.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Paris Agreement and the secretariat's own "
    "published pages and synthesis reports, including 195 Parties at adoption, 194 as at 27 January "
    "2026, 168 contributions from 195 Parties, and 127 new contributions representing 154 Parties "
    "over a stated period.</p>"))
S["i07-f6"]=lambda: f_realia(tbl("Word study","Reporting verbs with attitude",
    ["Verb","What it adds","Example"],
    [["<b>stated</b>","nothing; neutral","The delegation <b>stated</b> that&hellip;"],
     ["<b>claimed</b>","the speaker may be wrong","It <b>claimed</b> 27 were missing."],
     ["<b>insisted</b>","repeated against resistance",""],
     ["<b>denied</b>","contradicted an allegation",""],
     ["<b>pointed out</b>","correct, and overlooked","A second delegation <b>pointed out</b>&hellip;"],
     ["<b>acknowledged</b>","conceded against interest",""]]), 580)
S["i07-f7"]=lambda: f_chart([("parties covered",195),("contributions counted",168),
    ("covered by one joint contribution",28)], unit="count")
S["i07-f8"]=lambda: f_icons([("computer","a plan arriving"),("archive","a joint plan"),
    ("tally","documents counted"),("worldmap","parties counted"),
    ("chair","one page, two readings"),("pen","a figure corrected")], cols=3)
S["i07-f9"]=lambda: f_realia(tbl("Figures sheet",None,
    ["Figure","What it counts","Date","Source"],
    [["<b>195</b>","Parties","12 Dec 2015","the Agreement, at adoption"],
     ["<b>194</b>","Parties","as at 27 Jan 2026","the secretariat's page"],
     ["<b>168</b>","contributions","2024 synthesis","communicated by 195 Parties"]],
    note="<b>Why these are not comparable:</b> one counts documents, one counts parties; one "
    "document is filed for 28 Parties. &nbsp; <b>First delegation claimed</b> a gap of 27. "
    "<b>Second pointed out</b> the joint filing. &nbsp; <b>Quote the base or do not quote the "
    "figure.</b>"), 600)
S["i07-f10"]=lambda: f_scene(940,430, people=[("karin",300,172,{"seated":True}),
     ("linh",420,176,{"seated":True}),("omar",620,176,{"seated":True}),
     ("nadia",700,172,{"seated":True})],
    props=[("table",330,0,1.3),("essay",380,192,0.28),("essay",450,192,0.28),
     ("notebook",660,194,0.26),("book",730,192,0.28)], clockat=(150,46,22,16,0))
S["i07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Cable A", None,
        "<p>One delegation said there is a compliance gap of 27. Another said there is not. The "
        "chair said the matter was closed.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Cable B", None, ["Verb","What was said"],
        [["<b>claimed</b>","a gap of 27"],["<b>pointed out</b>","one filing covers 28 Parties"],
         ["<b>acknowledged</b>","it had read the wrong column"],
         ["<b>stated</b>","the matter was closed"]],
        note="195 Parties &middot; 194 as at Jan 2026 &middot; 168 contributions"), w)[0:3],
    w=920, h=290)
S["i07-f12"]=lambda: f_realia(doc("Two cables", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Cable 1</b><br>"
    "<b>Subject: compliance gap of 27.</b> One delegation said there is a gap. Another said there is "
    "not.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Cable 2</b><br>"
    "One delegation <b>claimed</b> a gap of 27, citing 168 contributions against 195 Parties. A "
    "second <b>pointed out</b> that one contribution is filed jointly for 28 Parties and counted "
    "once. The first later <b>acknowledged</b> that it had read the wrong column.<br>"
    "<b>168 counts documents; 195 counts Parties covered.</b><br>"
    "<b>On the party count:</b> 194 as at 27 January 2026, against 195 at adoption. We offer no "
    "interpretation of the registry.<br>"
    "<b>One figure deliberately omitted:</b> 127 new contributions for 154 Parties &mdash; a window, "
    "not a total.</p>",
    "One of these would be misquoted by a minister."))
S["i07-f13"]=lambda: f_realia(form("Cable planner",
    [("Verb 1 / what was said",""),("Verb 2 / what was said",""),
     ("Verb 3 / what was said",""),("Verb 4 / what was said",""),
     ("Figure / unit / date",""),("Figure / unit / date",""),
     ("Why one is lower",""),("What we do not interpret",""),
     ("One figure deliberately omitted","")]), 540)
S["i07-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("nadia",200,172,{}),
     ("hana",290,176,{"seated":True}),("bah",360,172,{"seated":True}),
     ("samira",430,176,{"seated":True}),("ahmad",520,170,{}),("yusuf",590,172,{}),
     ("linh",660,170,{}),("ida",730,172,{}),("karin",800,170,{}),
     ("lucia",860,172,{}),("oskar",915,170,{}),("caruso",960,174,{}),
     ("nkemelu",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,196,0.26),("flipchart",320,40,0.64),
     ("table",450,0,1.0),("printer",580,198,0.38),("lamp",120,132,0.36),
     ("window",880,56,0.86)], clockat=(240,34,22,18,0),
    panelbg="#2b3340", floorbg="#39414d")
S["i07-f15"]=lambda: f_chart([("said",9),("stated",6),("pointed out",4),
    ("claimed",3),("whatever comes first",2)])
S["i07-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,192,0.32),("note",400,194,0.26),
     ("book",480,192,0.3),("review",600,44,0.6),("lamp",180,140,0.42)],
    clockat=(120,46,22,14,0))

# ---------------- Unit 8 · A Table That Says It Is Unofficial ----------------
S["i08-f1"]=lambda: f_icons([("spreadsheet","a wide status table"),
    ("magnifier","small type above a table"),("tally","a totals row"),
    ("stamp","an old date"),("desk","the depositary's counter"),
    ("certificate","formal confirmation"),("worldmap","a regional organization"),
    ("review","two totals"),("computer","the official collection"),
    ("pen","a date written in")], cols=5)
S["i08-f2"]=lambda: f_scene(920,420, people=[("omar",320,176,{}),("bah",420,172,{})],
    props=[("desk",250,0,1.3),("spreadsheet",330,192,0.34),("magnifier",410,196,0.24),
     ("computer",570,142,0.46),("window",800,56,0.96)], clockat=(150,46,22,11,0))
S["i08-f3"]=lambda: f_icons([("magnifier","reading the small print"),("tally","adding up"),
    ("stamp","out of date"),("certificate","confirmed formally"),
    ("review","two figures differ"),("pen","annotated")], cols=3)
S["i08-f4"]=lambda: f_realia(tbl("","The page we all rely on",
    ["The page","What its small print says","When it was last updated",
     "Where the authoritative version is"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What I will add to my next citation:</b>"), 580)
S["i08-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 8 &middot; citing a status page",
    "<p>The Convention on the Law of the Sea is cited every week here, and the party figure usually "
    "comes from the ocean affairs division's <b>status page</b>.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px;font-size:13px'>That page describes itself as "
    "providing <b>unofficial, quick-reference information</b>, and directs the reader to the "
    "<b>United Nations Treaty Collection</b> as the official record.</p>"
    + table_html(["Published figure","What it counts"],
      [["<b>169</b>","parties, on one published account"],
       ["<b>170</b>","parties, on another, counting the <b>European Union</b> alongside the states"],
       ["<b>168</b>","the <b>totals row</b> of the division's own table &mdash; <b>a row dated "
        "2019</b>"]])
    + "<p>Three published figures, and none is wrong. <b>169 and 170 differ because of how a regional "
    "organization is tallied.</b> The Union is recorded as a party by <b>formal confirmation dated "
    "1 April 1998</b>, which is not called ratification. <b>168 is older</b>, and it is on the page "
    "everybody quotes.</p>"
    "<p><b>What to write.</b> The figure, the base, the date, and the page's own description of "
    "itself. One long sentence, which cannot be attacked.</p>"
    "<p><b>What not to write.</b> <i>There are 169 parties.</i> Not because the figure is wrong, but "
    "because a bare figure invites the reader to assume you took it from the official record.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the ocean affairs division's status page, "
    "including its own disclaimer, its totals row and that row's date, and published accounts giving "
    "169 and 170 parties and explaining the European Union's formal confirmation of 1 April "
    "1998.</p>"))
S["i08-f6"]=lambda: f_realia(tbl("Word study","Plain and nominalized",
    ["Plain","Nominalized"],
    [["The state <b>ratified</b> the convention.","the state's <b>ratification</b> of the "
      "convention"],
     ["The organization <b>confirmed formally</b>.","the organization's <b>formal "
      "confirmation</b>"],
     ["The page <b>was updated</b> in 2019.","the page's <b>last update</b> in 2019"],
     ["They <b>disagree</b> about the total.",""],
     ["The figure <b>was published</b>.",""]]), 540)
S["i08-f7"]=lambda: f_chart([("including the regional organization",170),
    ("states only",169),("totals row, dated 2019",168)], unit="parties")
S["i08-f8"]=lambda: f_icons([("magnifier","small type"),("tally","a totals row"),
    ("stamp","a date at the foot"),("certificate","formal confirmation"),
    ("review","two totals side by side"),("pen","adding as at")], cols=3)
S["i08-f9"]=lambda: f_realia(tbl("Citation card",None,
    ["Slot","Entry"],
    [["<b>The figure</b>","168"],
     ["<b>The base</b>","ratifications on the division's own table"],
     ["<b>The date</b>","the totals row is dated 2019"],
     ["<b>What the source says about itself</b>","unofficial, quick-reference information"]],
    note="<b>Worked example.</b> <i>The division's status page, which describes itself as unofficial "
    "quick reference, gives 168 in a totals row dated 2019. The official record is the Treaty "
    "Collection.</i> &nbsp; <b>All four, or none.</b>"), 580)
S["i08-f10"]=lambda: f_scene(940,430, people=[("omar",320,176,{}),("bah",420,172,{}),
     ("hana",740,172,{})],
    props=[("desk",250,0,1.3),("spreadsheet",330,192,0.34),("magnifier",410,196,0.22),
     ("computer",570,142,0.44),("door",660,70,0.86),("folder",780,192,0.28)],
    clockat=(150,46,22,11,0))
S["i08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Brief A", None,
        "<p style='font-size:19px'><b>169 parties.</b></p>"), w)[0:3],
    lambda w,h: f_realia(doc("Brief B", None,
        "<p>The division's status page, <b>which describes itself as unofficial, quick-reference "
        "information</b>, gives <b>168</b> in a totals row <b>dated 2019</b>; published accounts give "
        "<b>169</b> and <b>170</b>, the difference being the treatment of the European Union. "
        "<b>The official record is the Treaty Collection.</b></p>"), w)[0:3],
    w=920, h=260)
S["i08-f12"]=lambda: f_realia(doc("Two briefs", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Brief 1</b><br>"
    "<b>There are 169 parties to the Convention.</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Brief 2</b><br>"
    "The division's status page, <b>which describes itself as unofficial quick reference</b>, gives "
    "<b>168 ratifications</b> in a totals row <b>dated 2019</b>. <b>The official record is the "
    "Treaty Collection.</b><br>"
    "Other published figures: <b>169</b> (parties) and <b>170</b> (counting the European Union "
    "alongside the states).<br>"
    "The Union is a party by <b>formal confirmation dated 1 April 1998</b>.<br>"
    "<b>If a counterpart quotes a different figure:</b> agree it is published, ask what it counts, "
    "give this paragraph.</p>",
    "There is no version of that exchange in which we need to dispute a number."))
S["i08-f13"]=lambda: f_realia(form("Brief planner",
    [("The figure",""),("The base",""),("The date",""),
     ("What the source says about itself",""),("Other published figures and their bases",""),
     ("Any special act (e.g. formal confirmation)",""),
     ("What this brief does not do",""),("If a counterpart quotes a different figure","")]), 540)
S["i08-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{}),("bah",200,172,{}),("hana",290,176,{"seated":True}),
     ("nadia",360,172,{"seated":True}),("samira",430,176,{"seated":True}),
     ("ahmad",520,170,{}),("yusuf",590,172,{}),("linh",660,170,{}),
     ("ida",730,172,{}),("karin",800,170,{}),("lucia",860,172,{}),
     ("oskar",915,170,{}),("caruso",960,174,{}),("nkemelu",55,176,{})],
    props=[("desk",80,0,1.1),("spreadsheet",150,196,0.28),("board",330,36,0.64),
     ("table",450,0,1.0),("printer",580,198,0.38),("computer",230,142,0.38),
     ("cafe",845,198,0.36)], clockat=(250,34,22,12,0))
S["i08-f15"]=lambda: f_chart([("never",8),("once when I first used it",6),
    ("only when something went wrong",4),("always",3),
    ("I did not know there was any",2)])
S["i08-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,192,0.32),("spreadsheet",410,192,0.3),
     ("note",500,194,0.24),("computer",600,142,0.44),("lamp",180,140,0.42)],
    clockat=(120,46,22,13,0))

# ---------------- Unit 9 · A Bundle of National Rights ----------------
S["i09-f1"]=lambda: f_icons([("certificate","a trademark certificate"),
    ("form","one form, many flags"),("computer","the international register"),
    ("archive","a bundle of certificates"),("fine","a refusal letter"),
    ("calendar","eighteen months"),("councilbuilding","the office of origin"),
    ("note","a renewal notice"),("review","two identical logos"),
    ("worried","a director reading a letter")], cols=5)
S["i09-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{"seated":True}),
     ("bah",400,172,{}),("lucia",640,176,{"seated":True})],
    props=[("desk",230,0,1.3),("certificate",300,194,0.3),("essay",370,194,0.26),
     ("essay",410,194,0.26),("essay",450,194,0.26),("folder",700,192,0.28)],
    clockat=(150,46,22,15,30))
S["i09-f3"]=lambda: f_icons([("councilbuilding","filed through a national office"),
    ("computer","recorded internationally"),("worldmap","members designated"),
    ("magnifier","a national examiner"),("fine","a provisional refusal"),
    ("archive","surviving in part")], cols=3)
S["i09-f4"]=lambda: f_realia(tbl("","The name people use",
    ["The common name","What it actually is","What the wrong name makes people expect",
     "The sentence that corrects it"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The one that costs money:</b>"), 580)
S["i09-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 9 &middot; the international registration of marks",
    "<p>The system's own members page gives <b>116 members covering 132 countries</b>. It adds that "
    "they represent <b>more than 80 percent of global trade</b>. Other published accounts give "
    "<b>115 members and 131 countries</b>. Why the two figures differ: <b>some members are regional "
    "organizations</b>, and each of those covers several countries.</p>"
    "<p><b>What the system actually gives you.</b> One application, filed through an <b>office of "
    "origin</b>. One language. One fee. The result is <b>one international registration with one "
    "number</b>. The organization's own words for what it gives you: <b>a bundle of national or "
    "regional rights</b>.</p>"
    + table_html(["",""],
      [["<b>What is centralized</b>","filing, renewal, changes of name and address"],
       ["<b>What is not</b>","<b>examination, refusal, scope of protection, enforcement</b>"]])
    + "<p>Each <b>designated</b> member examines the mark <b>under its own law</b>. It may issue a "
    "<b>provisional refusal</b>, which can normally be answered. <b>The scope of protection in each "
    "member is set by that member's own law.</b> So one registration can be accepted in nine places, "
    "refused in two and limited in one. <b>That is a normal outcome, not a failure.</b></p>"
    "<p><b>The phrase to avoid.</b> <i>An international trademark.</i> It does not exist.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the system's own members page, which gives 116 "
    "members covering 132 countries. Its own published description is the phrase quoted above. Other "
    "published accounts give 115 and 131.</p>"))
S["i09-f6"]=lambda: f_realia(tbl("Word study","Three dimensions of hedging",
    ["How likely","How much","On what basis"],
    [["<b>is likely to</b>","<b>in part</b>","<b>on the material we have</b>"],
     ["<b>may well</b>","<b>to some extent</b>","<b>as published</b>"],
     ["<b>appears to</b>","<b>broadly</b>","<b>subject to examination</b>"],
     ["","",""]]), 540)
S["i09-f7"]=lambda: f_part("One registration, twelve designations",
    [("accepted",9,GREEN),("limited",1,AMBER),("refused",2,PLUM)])
S["i09-f8"]=lambda: f_icons([("councilbuilding","a national office"),
    ("computer","recorded"),("worldmap","designations listed"),
    ("magnifier","an examiner at work"),("fine","a provisional refusal"),
    ("archive","separate certificates")], cols=3)
S["i09-f9"]=lambda: f_realia(doc("Consular and Economic Affairs &middot; information sheet",
    "The international registration of marks",
    "<p><b>What is centralized.</b> Filing. Renewal. Changes of name and address.</p>"
    "<p><b>What is not centralized.</b> <b>Examination. Refusal. Scope of protection. "
    "Enforcement.</b></p>"
    "<p><b>What I would want to know, in your position.</b><br>"
    "1 &nbsp;What <b>ground of refusal</b> does the letter cite?<br>"
    "2 &nbsp;What is the <b>deadline for responding</b>, under that member's law?<br>"
    "3 &nbsp;Is your representative <b>admitted to practice</b> before that member's office?</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>This is information about the system. It is "
    "not advice on your mark.</b></p>",
    "Three questions, not three answers, and that is deliberate."))
S["i09-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("bah",390,172,{}),("lucia",640,176,{"seated":True})],
    props=[("desk",230,0,1.3),("certificate",300,194,0.3),("essay",360,194,0.24),
     ("essay",400,194,0.24),("essay",440,194,0.24),("folder",700,192,0.28),
     ("computer",550,142,0.42)], clockat=(150,46,22,15,30))
S["i09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Sheet A", None,
        "<p>An international registration protects your mark in all the countries you have "
        "designated.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Sheet B", None, ["",""],
        [["centralized","filing, renewal, changes"],
         ["not centralized","examination, refusal, scope, enforcement"],
         ["likely","accepted in most; refused in one or two"],
         ["three questions","ground, deadline, admission"],
         ["frame","information, not advice"]]), w)[0:3],
    w=920, h=290)
S["i09-f12"]=lambda: f_realia(doc("Two letters to a company", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 1</b><br>"
    "Your international trademark is protected in the twelve countries you designated, and the "
    "refusal you have received should be resolved in due course.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 2</b><br>"
    "<b>There is no international trademark.</b> You hold an international <b>registration</b>, "
    "which produces <b>a bundle of national or regional rights</b>.<br>"
    "<b>Centralized:</b> filing, renewal, changes. <b>Not centralized:</b> examination, refusal, "
    "scope of protection, enforcement.<br>"
    "A registration of this kind <b>is likely to</b> be accepted in most designated members and "
    "<b>may well</b> be refused or limited in one or two. <b>On the material you have sent</b>, your "
    "letter <b>appears to</b> be a <b>provisional</b> refusal.<br>"
    "<b>Three questions:</b> the ground cited; the deadline under that member's law; whether your "
    "representative is admitted there.<br>"
    "<b>This is information, not advice.</b></p>",
    "One of these could be relied on as advice."))
S["i09-f13"]=lambda: f_realia(form("Letter planner",
    [("The name of the thing",""),("What is centralized",""),("What is not",""),
     ("Likely outcome: how likely",""),("how much",""),("on what basis",""),
     ("Question 1",""),("Question 2",""),("Question 3",""),
     ("Information, not advice &mdash; and who can advise","")]), 540)
S["i09-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("bah",200,172,{}),
     ("lucia",290,176,{"seated":True}),("caruso",360,172,{"seated":True}),
     ("hana",430,176,{"seated":True}),("ahmad",520,170,{}),("yusuf",590,172,{}),
     ("linh",660,170,{}),("ida",730,172,{}),("karin",800,170,{}),
     ("nadia",860,172,{}),("samira",915,170,{}),("oskar",960,174,{}),
     ("nkemelu",55,176,{})],
    props=[("desk",80,0,1.1),("certificate",150,196,0.26),("board",330,36,0.64),
     ("table",450,0,1.0),("printer",580,198,0.38),("archive",700,188,0.32),
     ("cafe",845,198,0.36)], clockat=(250,34,22,16,0))
S["i09-f15"]=lambda: f_chart([("sometimes",8),("often",6),("once",4),
    ("I gave it anyway",3),("never",2)])
S["i09-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,192,0.32),("computer",450,142,0.44),
     ("note",560,194,0.24),("archive",650,188,0.3),("lamp",180,140,0.42)],
    clockat=(120,46,22,10,0))
