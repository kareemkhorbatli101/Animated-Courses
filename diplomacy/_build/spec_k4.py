# -*- coding: utf-8 -*-
"""Foreign Service English Book 5 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · The Twentieth Instrument ----------------
S["k10-f1"]=lambda: f_icons([("shelf","a protocol and five amendments"),
    ("worldmap","a map shaded entirely"),("tally","a counter at twenty"),
    ("calendar","the first of January circled"),("boiler","a cooling unit"),
    ("form","a customs declaration"),("stairwell","a schedule of reductions"),
    ("review","five columns"),("deposit2","the depositary receiving"),
    ("handshake","two figures compared")], cols=5)
S["k10-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("book",300,192,0.28),("essay",350,194,0.22),
     ("review",425,196,0.28),("worldmap",610,120,0.46),("window",815,56,0.98)],
    clockat=(140,46,22,3,30))
S["k10-f3"]=lambda: f_icons([("meeting","an amendment adopted"),("deposit2","instruments deposited"),
    ("tally","the counter at twenty"),("calendar","a named date"),
    ("certificate","entering into force"),("stamp","a later accession")], cols=3)
S["k10-f4"]=lambda: f_realia(tbl("","The universal thing and its exceptions",
    ["The thing called universal","What exactly is universal","What is not",
     "What people conclude"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The word I will stop using loosely:</b>"), 580)
S["k10-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Delegation note 10 &middot; a universal protocol and its amendments",
    table_html(["",""],
      [["<b>Vienna Convention</b> for the protection of the ozone layer","<b>1985</b>"],
       ["<b>Montreal Protocol</b>","adopted <b>16 September 1987</b>"],
       ["<b>Entered into force</b>","<b>1 January 1989</b>"],
       ["<b>Parties to the Protocol</b>","<b>198</b>, on the secretariat's own page: <b>every "
        "United Nations member State</b> and further entities besides"]])
    + "<p><b>That figure is the strongest in this book.</b> It is the only instrument studied in "
    "these five volumes of which it can be said that <b>every state in the world is a party</b>. "
    "The word for that is <b>universal ratification</b>, and it is accurate &mdash; <b>of the "
    "Protocol</b>.</p>"
    "<p><b>The amendments.</b> The Protocol has been amended on <b>five</b> occasions, each "
    "amendment named after the city in which it was adopted. <b>Each has its own list of parties "
    "and its own figure</b>, published by the secretariat with the date of the page. <b>The figures "
    "differ, and the most recent amendment has the lowest.</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'>The <b>Kigali Amendment</b>, adopted <b>15 "
    "October 2016</b>, <b>shall enter into force on 1 January 2019</b>, <b>provided that at least "
    "twenty instruments</b> of ratification, acceptance or approval have been <b>deposited</b> by "
    "States or regional economic integration organizations that are Parties to the Protocol. <b>In "
    "the event that this condition has not been fulfilled by that date</b>, the Amendment shall "
    "enter into force <b>on the ninetieth day</b> following the date on which it has been "
    "fulfilled.</p>"
    "<p><b>A named date with a condition attached.</b> Compare the three mechanisms in this series: "
    "a threshold alone; a condition about <b>named states</b>, which may never be satisfied; and "
    "this one, <b>a date that holds if a modest threshold is met and slips if it is not</b>. The "
    "condition was satisfied, and the Amendment <b>entered into force on 1 January 2019</b>.</p>"
    "<p><b>What that date does and does not mean.</b> It is the date the Amendment entered into "
    "force <b>for the states that had ratified it by then</b>. A state ratifying afterwards is bound "
    "<b>from its own date</b>. <b>Entry into force is one date for the instrument and a different "
    "date for most of its parties.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Vienna Convention of 1985; the Montreal "
    "Protocol, adopted 16 September 1987 and in force from 1 January 1989, with 198 parties on the "
    "secretariat's published page; the five amendments to the Protocol, each with its own published "
    "list of parties; and the Kigali Amendment of 15 October 2016, whose clause fixed 1 January 2019 "
    "subject to the deposit of at least twenty instruments.</p>"))
S["k10-f6"]=lambda: f_realia(tbl("Word study","Ordinal thresholds and conditional dates",
    ["Form","What it fixes","Example"],
    [["upon the deposit of the twentieth instrument","a threshold with no date",
      "enters into force <b>upon the deposit of the twentieth instrument</b>"],
     ["on [date], provided that","a date with a condition",
      "<b>on 1 January 2019, provided that</b> at least twenty have been deposited"],
     ["in the event that the condition has not been fulfilled","the fallback","&nbsp;"],
     ["on the ninetieth day following","the interval after the trigger","&nbsp;"],
     ["for each State, from its own date of deposit","the party-by-party date","&nbsp;"],
     ["the later of X and Y","two conditions, both required","&nbsp;"]]), 620)
S["k10-f7"]=lambda: f_chart([("the Protocol",198),("London",197),("Copenhagen",197),
    ("Montreal",196),("Beijing",193),("Kigali",163)], unit="parties")
S["k10-f8"]=lambda: f_icons([("meeting","adopted"),("deposit2","deposited"),
    ("tally","twenty"),("calendar","a named date"),
    ("certificate","in force"),("stamp","a later accession")], cols=3)
S["k10-f9"]=lambda: f_realia(tbl("Memberships card", "as at 9 April",
    ["Instrument","Parties","Page dated"],
    [["<b>the Protocol</b>","<b>198</b>","9 April"],["London Amendment","[figure]","9 April"],
     ["Copenhagen Amendment","[figure]","9 April"],["Montreal Amendment","[figure]","9 April"],
     ["Beijing Amendment","[figure]","9 April"],["Kigali Amendment","[figure]","9 April"]],
    note="<b>What <i>universal</i> applies to:</b> the top row, and nothing below it.<br>"
    "<b>Check the row, not the table.</b>"), 580)
S["k10-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("omar",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("book",290,192,0.28),("essay",340,194,0.22),
     ("review",415,196,0.28),("computer",530,142,0.4),("window",805,56,0.96)],
    clockat=(140,46,22,4,0))
S["k10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Briefing A", None,
        "<p>The Montreal Protocol regime, which is universally ratified, requires the phase-down of "
        "these substances in all states.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Briefing B", None, ["Instrument","Parties"],
        [["the Protocol","198"],["London","[figure]"],["Copenhagen","[figure]"],
         ["Montreal","[figure]"],["Beijing","[figure]"],["Kigali","[figure]"]],
        note="<b>Universal ratification applies to the top row.</b> Kigali: in force 1 January "
        "2019, the condition having been met."), w)[0:3],
    w=920, h=320)
S["k10-f12"]=lambda: f_realia(doc("Two briefings", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Briefing 1</b><br>"
    "The regime is universally ratified and the phase-down therefore applies to every state.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Briefing 2</b><br>"
    "<b>1</b> The Protocol: 198 parties as at 9 April &mdash; universal ratification.<br>"
    "<b>2</b> Five amendments, each with its own membership; the most recent has the lowest.<br>"
    "<b>3</b> Kigali: adopted 15 October 2016; in force 1 January 2019, <b>provided that</b> twenty "
    "instruments had been deposited &mdash; a condition that was met.<br>"
    "<b>4</b> A State ratifying later is bound <b>from its own date</b>.<br>"
    "<b>5</b> Astrand is a party to the Protocol and, as at 9 April, to the 2016 Amendment.</p>",
    "The first takes the strongest fact in the field and makes it false."))
S["k10-f13"]=lambda: f_realia(form("Briefing planner",
    [("1 &nbsp;The parent instrument, with figure and date",""),
     ("2 &nbsp;The amendments, and their own memberships",""),
     ("3 &nbsp;The relevant amendment and its dating clause",""),
     ("4 &nbsp;Dates for individual parties",""),
     ("5 &nbsp;The question actually asked","")]), 520)
S["k10-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("bah",200,172,{}),
     ("nadia",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,192,0.24),("printer",560,198,0.4),
     ("review",425,196,0.26),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(290,26,215,104,"SIX ROWS",
      [("the Protocol","198"),("London",""),("Beijing",""),("Kigali","lowest")]),
    clockat=(240,30,22,4,0))
S["k10-f15"]=lambda: f_chart([("yes, all of them",7),("yes, most",5),("no",3),
    ("it depends on the amendment",3),("I had not thought about it",4)])
S["k10-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("note",395,194,0.24),
     ("review",465,196,0.26),("pen",540,198,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,10,0))

# ---------------- Unit 11 · The Report That Is Not Public ----------------
S["k11-f1"]=lambda: f_icons([("form","a customs declaration"),("stamp","an export authorization"),
    ("essay","an annual report"),("review","a reporting table"),
    ("padlock","a document marked restricted"),("computer","a published page"),
    ("calendar","the thirty-first of May"),("meeting","a conference in session"),
    ("badge","a national authority"),("magnifier","a tick and a blank compared")], cols=5)
S["k11-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("bah",430,172,{})],
    props=[("desk",240,0,1.25),("review",315,196,0.28),("book",390,192,0.28),
     ("logsheet",460,196,0.24),("computer",600,142,0.44),("window",815,56,0.98)],
    clockat=(140,46,22,11,15))
S["k11-f3"]=lambda: f_icons([("pen","a report prepared"),("calendar","submitted by the deadline"),
    ("computer","made public"),("padlock","restricted to parties"),
    ("square","a row left blank"),("magnifier","the legend read")], cols=3)
S["k11-f4"]=lambda: f_realia(tbl("","The blank that is not an absence",
    ["The table","What a blank can mean","How many meanings","Where the legend is"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The total I once calculated from blanks:</b>"), 580)
S["k11-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Delegation note 11 &middot; a reporting obligation and its table",
    table_html(["",""],
      [["<b>Arms Trade Treaty</b>, adopted by the General Assembly","<b>2 April 2013</b>"],
       ["<b>Opened for signature</b>","<b>3 June 2013</b>"],
       ["<b>Entered into force</b>","<b>24 December 2014</b>"],
       ["<b>States Parties</b>","about <b>115</b>, on the Secretariat's page, which carries its "
        "date"]])
    + "<p style='border:1px solid #d9d4c9;padding:9px'><b>An initial report.</b> Each State Party "
    "shall, <b>within the first year</b> after the Treaty enters into force for it, provide the "
    "Secretariat with a report on <b>measures undertaken to implement</b> the Treaty.<br><br>"
    "<b>An annual report.</b> Each State Party shall <b>by 31 May</b> each year provide a report for "
    "the <b>preceding calendar year</b> concerning <b>authorized or actual exports and imports</b> "
    "of the conventional arms covered. Such reports <b>may exclude commercially sensitive or "
    "national security information</b>.</p>"
    + table_html(["","What it means"],
      [["<b>submitted and public</b>","the report exists and you can read it"],
       ["<b>submitted, not made public</b>","the report <b>exists</b>, has been provided as "
        "required, and is <b>available to States Parties and not to the public</b>"],
       ["<b>not submitted</b>","<b>no report</b> was provided for that period"]])
    + "<p><b>Why the second row is dangerous.</b> It looks like the third row to anybody counting "
    "ticks, and it is the opposite of it in every respect that matters. <b>A party in the second row "
    "has complied.</b> A sentence that counts it as a failure to report is a false statement about "
    "another state's compliance with a treaty obligation.</p>"
    + table_html(["We may say","We may not say"],
      [["the number recorded as having submitted a public report, with the date of the table",
        "that the remainder have not reported"],
       ["the number recorded as having submitted a report not made public",
        "that those reports do not exist"],
       ["the number recorded as not having submitted","that a party is in breach"],
       ["that we cannot read a particular report","that a particular report is inadequate"]])
    + "<p style='font-size:12px;color:#6b6861'>Source: the Arms Trade Treaty, adopted 2 April 2013, "
    "opened for signature 3 June 2013 and in force from 24 December 2014; its article on initial and "
    "annual reports, which may exclude commercially sensitive or national security information; and "
    "the Secretariat's published reporting record, which distinguishes reports made public from "
    "reports available to States Parties only.</p>"))
S["k11-f6"]=lambda: f_realia(tbl("Word study","Reporting an absence",
    ["Form","What it asserts","Example"],
    [["is recorded as not having submitted","what the record says",
      "<b>recorded as not having submitted</b> for 2024"],
     ["has not been made public","about publication, not existence",
      "the report <b>has not been made public</b>"],
     ["is not available to us","about our access","the content <b>is not available to us</b>"],
     ["we are not in a position to state","about our knowledge","&nbsp;"],
     ["no report appears on the record","the narrowest claim","&nbsp;"],
     ["we do not infer from a blank","the method, stated","&nbsp;"]]), 620)
S["k11-f7"]=lambda: f_part("Three states of affairs, and only one is an absence",
    [("submitted and public",62,GREEN),("submitted, not public",24,BLUE),
     ("not submitted",29,AMBER)])
S["k11-f8"]=lambda: f_icons([("pen","prepared"),("calendar","submitted"),
    ("computer","made public"),("padlock","restricted"),
    ("square","a blank row"),("magnifier","the legend")], cols=3)
S["k11-f9"]=lambda: f_realia(tbl("Reporting extract", "as at 9 June",
    ["State","Annual report, preceding year"],
    [["Astrand","&#9633; <i>submitted, not made public</i>"],
     ["Perenne","&#10003; <i>submitted and public</i>"],
     ["Marovia","&mdash; <i>recorded as not having submitted</i>"],
     ["Valmora","&#10003; <i>submitted and public</i>"],
     ["Kesteland","&#9633; <i>submitted, not made public</i>"],
     ["Sable Isles","&#10003; <i>submitted and public</i>"]],
    note="<b>Legend:</b> &#10003; submitted and public &middot; &#9633; submitted, available to "
    "States Parties only &middot; &mdash; not submitted. <b>The first two are compliance.</b><br>"
    "<b>Three figures, no total.</b>"), 580)
S["k11-f10"]=lambda: f_scene(940,430, people=[("bah",320,176,{}),
     ("omar",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("review",300,196,0.28),("book",375,192,0.28),
     ("computer",490,142,0.4),("logsheet",450,196,0.22),("window",805,56,0.96)],
    clockat=(140,46,22,2,15))
S["k11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Brief A", None,
        "<p>Seventy-five of a hundred and fifteen States Parties complied; <b>forty failed to "
        "report</b>.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Brief B", None,
        "<p>As at 9 June: <b>X</b> submitted a public report, <b>Y</b> submitted a report <b>not "
        "made public</b>, <b>Z</b> are <b>recorded as not having submitted</b>. <b>The first two "
        "categories are compliance.</b> We are <b>not in a position to state</b> the content of "
        "reports not made public.</p>"), w)[0:3],
    w=920, h=300)
S["k11-f12"]=lambda: f_realia(doc("Two briefs", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Brief 1</b><br>"
    "The compliance rate is 65 per cent; forty States Parties failed to report.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Brief 2</b><br>"
    "<b>1</b> The obligation, including what a report may exclude.<br>"
    "<b>2</b> The record, and its date.<br><b>3</b> Three figures, and no total.<br>"
    "<b>4</b> Which categories are compliance, and why we publish no rate.<br>"
    "<b>5</b> The limit of our knowledge.</p>",
    "The forty in the first brief was produced by subtraction, from a table whose legend has three "
    "symbols."))
S["k11-f13"]=lambda: f_realia(form("Brief planner",
    [("1 &nbsp;The obligation, and what may be excluded",""),
     ("2 &nbsp;The record, with its date",""),("3 &nbsp;The figures, by category",""),
     ("4 &nbsp;Which categories are compliance",""),
     ("5 &nbsp;The limit of our knowledge","")]), 520)
S["k11-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("bah",200,172,{}),
     ("nadia",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("review",150,196,0.24),("printer",560,198,0.4),
     ("tray",425,196,0.26),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(290,26,215,104,"THREE BARS",
      [("public","&#10003;"),("not public","&#10003;"),("not submitted","&mdash;")]),
    clockat=(240,30,22,2,30))
S["k11-f15"]=lambda: f_chart([("no report submitted",9),("a report not published",3),
    ("either",4),("a late report",2),("I had not thought about it",4)])
S["k11-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.26),("review",395,196,0.26),
     ("envelope",465,194,0.24),("note",535,194,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,9,0))

# ---------------- Unit 12 · The Silence Procedure ----------------
S["k12-f1"]=lambda: f_icons([("meeting","an empty hall"),("envelope","a circulation letter"),
    ("calendar","three days"),("email","one message"),
    ("table","a draft read at a kitchen table"),("phone","a telephone lifted"),
    ("essay","a draft with no voting record"),("podium","a meeting resuming"),
    ("logsheet","a report being typed"),("handshake","two adoptions compared")], cols=5)
S["k12-f2"]=lambda: f_scene(920,420, people=[("omar",330,176,{"seated":True}),
     ("nadia",430,172,{})],
    props=[("desk",240,0,1.25),("essay",315,194,0.26),("phone",390,196,0.22),
     ("calendar",650,70,0.48),("lamp",180,140,0.42),("window",815,56,0.98)],
    clockat=(140,46,22,8,20))
S["k12-f3"]=lambda: f_icons([("pen","a draft prepared"),("envelope","circulated to all members"),
    ("timer","a period beginning"),("essay","read, and no objection"),
    ("calendar","the period expiring"),("stamp","issued as adopted")], cols=3)
S["k12-f4"]=lambda: f_realia(tbl("","Decisions nobody attended",
    ["The decision","How it was circulated","The period","What an objection would have done"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The decision I did not know had been taken:</b>"), 580)
S["k12-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Delegation note 12 &middot; decisions taken without a meeting",
    "<p><b>The decision.</b> On <b>27 March 2020</b>, the General Assembly adopted a decision "
    "establishing a <b>procedure for taking decisions during the coronavirus disease pandemic</b>, "
    "the Assembly being unable to meet in person.</p>"
    + table_html(["",""],
      [["<b>1</b>","the President of the General Assembly <b>circulates</b> a draft decision to "
        "<b>all Member States</b>"],
       ["<b>2</b>","the circulation states a <b>silence procedure</b> of <b>at least 72 hours</b>"],
       ["<b>3</b>","a Member State may <b>break silence</b> within that period"],
       ["<b>4</b>","if <b>no</b> Member State breaks silence, the draft is <b>considered "
        "adopted</b>"],
       ["<b>5</b>","if silence <b>is</b> broken, the draft is <b>not adopted under that "
        "procedure</b>"]])
    + table_html(["",""],
      [["<b>it is</b> a decision of the Assembly, taken under a procedure <b>the Assembly itself "
        "adopted</b>","and it is recorded as such"],
       ["<b>it is not</b> a vote","no votes are cast and no voting record exists"],
       ["<b>it is not</b> consensus as the rules of procedure use the word",
        "nobody is present, and presence is part of that test"]])
    + "<p><b>The sentence that most often goes wrong. Silence broken is not rejection.</b> A draft "
    "whose silence is broken has not been adopted under the procedure. It has not been voted down, "
    "and it may be taken up when the body can meet. <b>A cable reporting that a proposal was "
    "rejected because silence was broken has reported an outcome that did not occur.</b></p>"
    "<p><b>Why the procedure was written down at all.</b> Because a body that cannot meet discovers "
    "that it has been relying on things it never recorded: that a decision is taken in a room, at a "
    "time, in the presence of people who can raise a hand. <b>Take away the room and every one of "
    "those assumptions has to be replaced by a sentence.</b></p>"
    "<p><b>It was temporary, and that matters too.</b> The procedure was adopted for an exceptional "
    "situation and described in those terms. <b>A procedure adopted as exceptional is cited as "
    "exceptional</b>, with its date.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the decision of the General Assembly of 27 "
    "March 2020 establishing a procedure for taking decisions during the coronavirus disease 2019 "
    "pandemic, providing for circulation by the President to all Member States under a silence "
    "procedure of at least 72 hours, with a draft being considered adopted if no Member State breaks "
    "silence.</p>"))
S["k12-f6"]=lambda: f_realia(tbl("Review &middot; the eleven devices",
    "Match the device to the fragment",
    ["Device","Example"],
    [["deeming","the body <b>is deemed to have</b> decided by consensus"],
     ["the perfect passive","the rules <b>have never been adopted</b> in final form"],
     ["exceptive","applied <b>save for</b> draft rule 42"],
     ["two readings","<b>on one reading</b> the list is fixed; <b>on the other</b> it grows"],
     ["result clause","consensus was not reached, <b>with the result that</b> the annex is "
      "unchanged"],
     ["apposition","the consultative parties, <b>that is, those entitled to participate</b>"],
     ["conformity","legislation <b>based on</b> the Model Law"],
     ["temporal precision","<b>one year after the date of receipt</b>"],
     ["negative condition","<b>only if neither</b> has notified the depositary"],
     ["conditional date","<b>on 1 January 2019, provided that</b> twenty instruments had been "
      "deposited"],
     ["absence","<b>recorded as not having submitted</b>"]]), 620)
S["k12-f7"]=lambda: f_process(["circulation","at least 72 hours","the period expires",
    "considered adopted  /  not adopted under this procedure"], w=660)
S["k12-f8"]=lambda: f_icons([("pen","a draft prepared"),("envelope","circulated"),
    ("timer","a period beginning"),("essay","no objection"),
    ("calendar","expiring"),("stamp","issued as adopted")], cols=3)
S["k12-f9"]=lambda: f_realia(doc("Report of proceedings &middot; draft circulated 9 November", None,
    "<p><b>1 What was before the body.</b> A draft decision circulated to all Member States on <b>9 "
    "November at 15:00</b>, under a <b>silence procedure of seventy-two hours</b> established by the "
    "decision of <b>27 March 2020</b>.</p>"
    "<p><b>2 What was decided, and under what procedure. Silence was broken at 18:22 on 11 "
    "November</b> by <b>one</b> Member State, by letter to the President. <b>The draft was "
    "accordingly not adopted under the procedure.</b> It <b>was not rejected</b>: no vote was taken "
    "and <b>nothing has been decided on the substance</b>.</p>"
    "<p><b>3 Statements.</b> The letter breaking silence has been <b>circulated to all Member "
    "States</b> and is <b>attached in full</b>. <b>This report does not summarize it.</b></p>"
    "<p><b>4 What did not happen. No vote was requested</b> and none could have been taken under "
    "this procedure. <b>No meeting was convened</b>, and there is accordingly <b>no meeting "
    "record</b>.</p>"
    "<p><b>5 Follow-up, with a time.</b> We will report <b>on the day</b> any revised draft is "
    "circulated. Our instructions on the substance <b>remain as given on 4 November</b>.</p>",
    "This report characterizes no delegation's position."))
S["k12-f10"]=lambda: f_scene(940,430, people=[("nadia",320,176,{}),
     ("omar",420,172,{"seated":True})],
    props=[("desk",230,0,1.25),("essay",300,194,0.26),("envelope",370,194,0.24),
     ("computer",470,142,0.42),("calendar",650,70,0.46),("window",805,56,0.96)],
    clockat=(140,46,22,8,40))
S["k12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Cable A", None,
        "<p>The Assembly rejected the draft decision on Wednesday after one delegation "
        "objected.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Cable B", None,
        "<p>Circulated Monday under a silence procedure of <b>72 hours</b>. <b>Silence was "
        "broken</b> Wednesday evening by one delegation. The draft was accordingly <b>not adopted "
        "under the procedure</b>, and <b>may be taken up at a formal meeting</b>. <b>Nothing has "
        "been decided on the substance.</b></p>"), w)[0:3],
    w=920, h=300)
S["k12-f12"]=lambda: f_realia(doc("Two reports", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Report 1</b><br>"
    "The Assembly met on Thursday and rejected the draft after an objection, the atmosphere having "
    "been difficult all week.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Report 2</b><br>"
    "<b>1</b> What was before the body, with the document and the time.<br>"
    "<b>2</b> What was decided, and under what procedure.<br>"
    "<b>3</b> Statements, attached in full and not summarized.<br>"
    "<b>4</b> What did not happen &mdash; no vote, no meeting, no meeting record.<br>"
    "<b>5</b> Follow-up, with a time.</p>",
    "The first invents a meeting, supplies a verdict, and characterizes a week."))
S["k12-f13"]=lambda: f_realia(form("Report planner",
    [("1 &nbsp;What was before the body",""),("2 &nbsp;What was decided, and under what rule",""),
     ("3 &nbsp;Statements",""),("4 &nbsp;What did not happen",""),
     ("5 &nbsp;Follow-up, with a time","")]), 520)
S["k12-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("nadia",200,172,{}),
     ("bah",290,176,{"seated":True}),("samira",370,172,{"seated":True}),
     ("hana",440,176,{"seated":True}),("ahmad",530,170,{}),("yusuf",600,172,{}),
     ("linh",670,170,{}),("ida",740,172,{}),("karin",810,170,{}),("lucia",870,172,{}),
     ("oskar",925,170,{}),("caruso",965,174,{}),("hanna",55,176,{})],
    props=[("desk",80,0,1.1),("envelope",150,194,0.22),("printer",560,198,0.4),
     ("timer",425,196,0.22),("cafe",840,198,0.38),("table",640,0,1.0)],
    board=(290,26,215,104,"FIVE DAYS",
      [("circulation",""),("72 hours",""),("considered adopted","&rarr;"),
       ("not adopted","&rarr;")]),
    clockat=(240,30,22,8,40))
S["k12-f15"]=lambda: f_chart([("name the rule",7),("attach rather than summarize",4),
    ("report what did not happen",5),("refuse the verdict",3),("give the date of the record",3)])
S["k12-f16"]=lambda: f_realia(doc("Four parts, and the fifth",
    "Printed on a card",
    "<p style='font-size:17px;line-height:2.0'>"
    "<b>1 &nbsp;What was before the body.</b><br>"
    "<b>2 &nbsp;What was decided, and under what rule.</b><br>"
    "<b>3 &nbsp;Who spoke, in their own words.</b><br>"
    "<b>4 &nbsp;What did not happen.</b></p>"
    "<p style='font-size:13px;color:#6b6861'>And then: follow-up, with a time.</p>"))
