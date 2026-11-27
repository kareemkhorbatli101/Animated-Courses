# -*- coding: utf-8 -*-
"""Keystone Book 1 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["a00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each from a software team's working day",
    ["What you have","An example"],
    [["The present simple","The week <b>starts</b> on Monday."],
     ["<i>There is</i> and <i>there are</i>","<b>There are</b> two offsets in that zone."],
     ["Countable and uncountable","<b>How many</b> bytes? <b>How much</b> text?"],
     ["Comparatives","binary64 is <b>more precise than</b> binary32."],
     ["Modals","The field <b>must</b> be text."],
     ["The passive","Codes <b>are assigned</b> by the agency."]],
    note="Six boxes. This book adds the English of a published standard: the edition, the limit, "
    "the keyword, and the line that says what the document does not cover."), 580)
S["a00-f2"]=lambda: f_realia(tbl("What a format protects", None,
    ["","What it produces","What it prevents"],
    [["<b>What the field means</b>","one reading of one value",
      "two teams who both think they are right"],
     ["<b>How it is written</b>","a value that can be read back",
      "a name that comes out as question marks"],
     ["<b>Which document says so</b>","a sentence you can quote",
      "an argument that lasts a week"]],
    note="A format is an agreement between two systems. Most of them never meet, and nobody from "
    "either team is in the room when the data arrives."), 600)
S["a00-f3"]=lambda: f_realia(doc("Taped inside a laptop lid",
    "Four questions that stop most of the trouble",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;Which document, and which edition?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before anybody says <i>the standard says</i>.</span>"
    "<br><b>2 &nbsp;Is that a time zone or an offset?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before a meeting is booked for November.</span><br>"
    "<b>3 &nbsp;How many bytes, and in which encoding?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before a field length goes into a document.</span>"
    "<br><b>4 &nbsp;Is that a MUST or a SHOULD?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>Before you promise it or before you skip it.</span>"
    "</p>",
    "Four questions. Between them they have prevented more outages at this company than any tool "
    "it has bought."), 560)
S["a00-f4"]=lambda: f_realia(tbl("Three things a field needs", None,
    ["","Write down","So that"],
    [["<b>1 What it means</b>","the thing in the world it stands for",
      "nobody guesses"],
     ["<b>2 How it is written</b>","the form, with one example",
      "two systems agree"],
     ["<b>3 Which document</b>","the name and the edition",
      "the argument ends"]],
    note="Only now may you store it. A field with two of the three is the field that wakes "
    "somebody up at night."), 600)

# ---------------- Unit 1 · The Year Comes First ----------------
S["a01-f1"]=lambda: f_icons([("calendar","one date circled"),("clock","a date and a time"),
    ("form","year, month, day"),("spreadsheet","dates sorted"),
    ("passport","a data page"),("logsheet","a timestamp"),("timetable","a week number"),
    ("departureboard","a timetable"),("pricetag","an expiry date"),
    ("handsup","the same date, two ways")], cols=5)
S["a01-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("mei",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("spreadsheet",395,194,0.24),
     ("form",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,20))
S["a01-f3"]=lambda: f_icons([("calendar","year, month, day"),("tally","the day of the year"),
    ("timetable","a week date"),("timer","a time after T"),
    ("stamp","a Z at the end"),("magnifier","two dates compared")], cols=3)
S["a01-f4"]=lambda: f_realia(tbl("Team research", None,
    ["Where the date is from","How it is written","Who could misread it","What we will change"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The worst one in our systems: ______________________"), 600)
S["a01-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 1",
    "Platform team &middot; dates &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO 8601 has two parts. Both parts carry the year <b>2019</b>. "
    "The 2019 edition replaced the one from 2004. So the edition is part of the name. "
    "A date in our systems is written in one of three forms.</p>"
    + table_html(["Form","Example","When we use it"],
      [["calendar date","<b>2026-03-09</b>","almost always"],
       ["ordinal date","2026-068","in one log format"],
       ["week date","2026-W11-1","in weekly reports only"]])
    + "<p><b>The week rule.</b> Week 01 is the week that contains 4 January. A week starts on "
    "Monday. This has one result that surprises people. The first of January 2027 falls in week "
    "53 of 2026. So the week-based year is not always the calendar year. A weekly report must say "
    "which year it means.</p>"
    "<p><b>A profile is not the standard.</b> RFC 3339 is a profile. It takes the standard and "
    "narrows the choices for one purpose. A value can be valid in the standard and not in the "
    "profile. So we name the profile as well as the standard.</p>",
    "Source: ISO 8601-1:2019 and ISO 8601-2:2019, Date and time &mdash; Representations for "
    "information interchange, which replaced the 2004 edition; and RFC 3339 as a profile of it. "
    "The standard does not tell you which form to choose."), 580)
S["a01-f6"]=lambda: f_realia(tbl("Word study","Three prepositions of time",
    ["Preposition","What follows","Example"],
    [["on","a day or a date","<b>on</b> Monday, <b>on</b> 9 March"],
     ["in","a month, a year, a week","<b>in</b> March, <b>in</b> 2026"],
     ["at","a clock time","<b>at</b> 09:20"],
     ["from &hellip; to","two points","&nbsp;"],
     ["by","a deadline","&nbsp;"]]), 600)
S["a01-f7"]=lambda: f_realia(doc("One week, two calendar years",
    "The last days of December 2026 and the first days of January 2027",
    table_html(["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      [["<b>28</b> Dec","<b>29</b>","<b>30</b>","<b>31</b>","<b>1</b> Jan","<b>2</b>","<b>3</b>"],
       ["&larr;","&nbsp;","<b>2026-W53</b>","&nbsp;","&nbsp;","&nbsp;","&rarr;"]])
    + "<p>The bracket runs from Monday to Sunday. It holds five days of one calendar year and two "
    "days of the next. The week is numbered in the year that holds most of it. So the first of "
    "January 2027 sits in a week labeled 2026.</p>",
    "A report headed week 01 with no year is two reports."), 600)
S["a01-f8"]=lambda: f_icons([("form","typed into a field"),("tally","the day of the year"),
    ("timetable","on a planner"),("timer","after a T"),
    ("stamp","a Z at the end"),("magnifier","two dates side by side")], cols=3)
S["a01-f9"]=lambda: f_realia(tbl("Field note &middot; order_date",
    "Interface document, section 1.2",
    ["",""],
    [["<b>Field name</b>","order_date"],
     ["<b>Type</b>","text, 10 characters"],
     ["<b>Format</b>","calendar date, ISO 8601-1:2019, as in 2026-03-09"],
     ["<b>Limit</b>","dates from 2020-01-01 only"]],
    note="A format without a document is not a format."), 540)
S["a01-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("mei",400,172,{})],
    props=[("desk",230,0,1.25),("spreadsheet",300,194,0.26),("essay",385,194,0.26),
     ("board",640,100,0.9),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,10,0))
S["a01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Interface page A", None,
        "<p>date: ISO 8601</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Interface page B", None,
        "<p><b>Type</b> text, 10 characters<br>"
        "<b>Format</b> calendar date, year first<br>"
        "<b>Example</b> 2026-03-09<br>"
        "<b>Document</b> ISO 8601-1:2019<br>"
        "<b>Not accepted</b> any form with the day first</p>"), w)[0:3],
    w=920, h=300)
S["a01-f12"]=lambda: f_realia(doc("Two interface notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The field is an ISO 8601 date.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Type</b> text, 10 characters. <b>Format</b> calendar date, year first. "
    "<b>Example</b> 2026-03-09. <b>Document</b> ISO 8601-1:2019. "
    "<b>Not accepted</b> any form with the day first. "
    "<b>On the screen</b> the month in letters.</p>",
    "One of these has four words and one has six facts."))
S["a01-f13"]=lambda: f_realia(form("Field-note planner",
    [("Type",""),("Format, in words",""),("One example",""),
     ("The document, with its edition",""),("Not accepted",""),("On the screen","")]), 520)
S["a01-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("mei",195,172,{}),
     ("tomas",280,176,{"seated":True}),("priya",360,172,{"seated":True}),
     ("lars",435,176,{"seated":True}),("oksana",520,170,{}),("ines",595,172,{}),
     ("grace",665,170,{}),("marek",735,172,{}),("chiamaka",805,170,{}),
     ("ravi",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("linh",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("spreadsheet",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,11,0))
S["a01-f15"]=lambda: f_chart([("day first",8),("month first",5),("year first",6),
    ("it depends on the system",4),("I had not thought about it",3)])
S["a01-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("logsheet",320,194,0.26),("calendar",395,192,0.26),
     ("email",465,196,0.22),("note",535,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,30))

# ---------------- Unit 2 · Two Kinds of Time ----------------
S["a02-f1"]=lambda: f_icons([("worldmap","a map of zones"),("clock","two clocks, two cities"),
    ("calendar","an invitation"),("logsheet","a timestamp ending in Z"),
    ("data","a file of zone rules"),("timetable","a schedule"),
    ("messages","a meeting moved"),("timer","one hour forward"),
    ("refnumber","a version number"),("handsup","what time is that?")], cols=5)
S["a02-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("lars",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("calendar",395,194,0.24),
     ("worldmap",640,96,0.8),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,8,45))
S["a02-f3"]=lambda: f_icons([("stamp","an instant in UTC"),("worldmap","a zone name"),
    ("timer","an offset of two hours"),("calendar","a local time and a zone"),
    ("data","the rules file"),("refnumber","its version")], cols=3)
S["a02-f4"]=lambda: f_realia(tbl("Team research", None,
    ["Where the time is from","Stored as","Which zone","What we would change"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one we cannot explain: ______________________"), 600)
S["a02-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 2",
    "Platform team &middot; time &middot; page 1 of 1",
    "<p><b>Two kinds of time.</b> An <b>instant</b> is a point in time. It is the same point for "
    "everybody. A <b>plan</b> is a time somebody will keep. It is a local time in a place. These "
    "are not the same thing, and they are not stored in the same way.</p>"
    + table_html(["What it is","Stored as","Why"],
      [["an instant","the time in <b>UTC</b>","one point, one value"],
       ["a plan","a local time and a <b>zone name</b>","the rules may change"]])
    + "<p><b>An offset is not a zone.</b> An offset is a number of hours and minutes. A zone name "
    "is a set of rules. The rules say which offset applies on which date. One zone can have two "
    "offsets in a year. So an offset is a result, not an input.</p>"
    "<p><b>The rules are a file with a version.</b> The time zone database is published as dated "
    "versions, such as 2024a and 2025b. It is updated several times a year, because governments "
    "change the rules. So the answer to <i>what time is that</i> has a version as well as a "
    "value. A meeting booked for next November may move before November.</p>"
    "<p><b>Leap seconds.</b> A leap second was last added on 31 December 2016. In 2022 the General "
    "Conference on Weights and Measures resolved to end the practice by 2035. Until then a minute "
    "can hold 61 seconds. Very little of our software knows that.</p>",
    "Source: the IANA Time Zone Database, published as dated versions such as 2024a and 2025b and "
    "updated several times a year; and the 2022 resolution of the General Conference on Weights "
    "and Measures on the future of leap seconds. The database records rules; it does not predict "
    "the decisions of governments."), 580)
S["a02-f6"]=lambda: f_realia(tbl("Word study","<i>There is</i> and <i>there are</i>",
    ["Form","Example","Note"],
    [["there is","<b>There is</b> one offset in that zone.","singular"],
     ["there are","<b>There are</b> two offsets this year.","plural"],
     ["there is no","<b>There is no</b> offset in a zone name.","negative"],
     ["is there?","<b>Is there</b> a zone name in the record?","question"],
     ["there are not","&nbsp;","&nbsp;"],
     ["are there?","&nbsp;","&nbsp;"]]), 600)
S["a02-f7"]=lambda: f_timeline([(0.05,"March","the offset changes"),
    (0.35,"June","one offset all month"),(0.62,"October","the offset changes back"),
    (0.9,"November","the meeting")], 0.75, w=640)
S["a02-f8"]=lambda: f_icons([("stamp","stored in UTC"),("worldmap","a zone name"),
    ("timer","an offset"),("calendar","a plan"),
    ("data","the rules file"),("refnumber","a version")], cols=3)
S["a02-f9"]=lambda: f_realia(tbl("Field note &middot; two time fields",
    "Interface document, section 2.1",
    ["",""],
    [["<b>created_at</b>","an instant, stored in UTC, to the second"],
     ["<b>starts_at</b>","a local time, with a zone name beside it"],
     ["<b>zone</b>","a zone name from the database, never an offset"],
     ["<b>db_version</b>","the version of the rules file we hold"]],
    note="An offset is a result. A zone name is an input."), 540)
S["a02-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("lars",400,172,{})],
    props=[("desk",230,0,1.25),("calendar",300,194,0.26),("worldmap",630,96,0.8),
     ("logsheet",385,194,0.26),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,9,0))
S["a02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Record A", None,
        "<p>starts_at: 14:00+02:00</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Record B", None,
        "<p><b>starts_at</b> 14:00<br><b>zone</b> a zone name from the database<br>"
        "<b>created_at</b> an instant in UTC<br>"
        "<b>db_version</b> the version of the rules we hold</p>"), w)[0:3],
    w=920, h=300)
S["a02-f12"]=lambda: f_realia(doc("Two invitations", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Invitation 1</b><br>"
    "The review is at 14:00 plus two hours.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Invitation 2</b><br>"
    "<b>14:00</b> local time in the named zone. The instant is computed when the invitation is "
    "opened, from the current rules. If the rules change, the local time stays and the instant "
    "moves.</p>",
    "One of these is wrong for one week of the year, every year."))
S["a02-f13"]=lambda: f_realia(form("Time-field planner",
    [("What kind of time is it?",""),("Stored as",""),("Zone name or offset",""),
     ("Which rules version",""),("What happens if the rules change",""),
     ("Not in this note","")]), 520)
S["a02-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("lars",195,172,{}),
     ("mei",280,176,{"seated":True}),("tomas",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("oksana",665,170,{}),("marek",735,172,{}),("ravi",805,170,{}),
     ("junseo",865,172,{}),("hana",920,170,{}),("linh",960,174,{}),("chiamaka",55,176,{})],
    props=[("desk",80,0,1.1),("worldmap",150,86,0.62),("calendar",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,0))
S["a02-f15"]=lambda: f_chart([("UTC",7),("local time only",6),("local time and a zone",4),
    ("an offset",5),("I do not know",4)])
S["a02-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("calendar",320,192,0.26),("email",395,196,0.22),
     ("logsheet",460,194,0.26),("note",530,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,8,0))

# ---------------- Unit 3 · How Many Bytes? ----------------
S["a03-f1"]=lambda: f_icons([("form","a name in a field"),("wordcount","a character count"),
    ("data","a row of bytes"),("essay","two writing systems"),
    ("magnifier","one letter, three parts"),("noentry","a field refusing a name"),
    ("quotemark","question marks on a screen"),("spreadsheet","a column truncated"),
    ("refnumber","a version number"),("handsup","how many characters?")], cols=5)
S["a03-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("priya",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("form",395,194,0.24),
     ("essay",460,194,0.26),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,11,15))
S["a03-f3"]=lambda: f_icons([("data","a byte"),("refnumber","a code point"),
    ("wordcount","a grapheme cluster"),("magnifier","one letter counted three ways"),
    ("form","a field limit"),("scissors","a name cut in half")], cols=3)
S["a03-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The field","Its limit","In what unit","Who found out"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The limit nobody can explain: ______________________"), 600)
S["a03-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 3",
    "Platform team &middot; text &middot; page 1 of 1",
    "<p><b>The standard.</b> The Unicode Standard is published in versions. Version 15.1 came out "
    "in September 2023. It holds 149,813 characters. Version 16.0 came out in September 2024 and "
    "holds 154,998. The number grows with each version. So the set of characters is not fixed.</p>"
    + table_html(["Unit","What it is","Count for one example name"],
      [["byte","what a disk holds","19"],["code point","what the standard numbers","11"],
       ["grapheme cluster","what a reader calls a letter","9"]])
    + "<p><b>Three units, three answers.</b> The code space runs from U+0000 to U+10FFFF. That is "
    "1,114,112 positions. UTF-8 writes one code point in one to four bytes. So a count of bytes "
    "is not a count of characters. And a reader counts neither. A reader counts what looks like "
    "one letter, and that can be several code points.</p>"
    "<p><b>What this means for a field.</b> A limit of twenty means nothing on its own. Twenty "
    "bytes, twenty code points and twenty letters are three different limits. The widest is about "
    "four times the narrowest. So every length in our documents names its unit.</p>"
    "<p><b>Normalization.</b> One word can be written in more than one way. The standard gives "
    "forms that make two spellings the same. We normalize before we compare. If we do not, two "
    "names that look identical are not equal, and nobody can see why.</p>",
    "Source: The Unicode Standard, version 15.1 of September 2023 with 149,813 characters and "
    "version 16.0 of September 2024 with 154,998; the code space U+0000 to U+10FFFF; and UTF-8 as "
    "a one-to-four-byte encoding. The standard does not choose a field length for you."), 580)
S["a03-f6"]=lambda: f_realia(tbl("Word study","Countable and uncountable",
    ["Form","Example","Note"],
    [["how many","<b>How many</b> bytes?","countable"],
     ["how much","<b>How much</b> text?","uncountable"],
     ["a few","<b>a few</b> code points","countable"],
     ["a little","<b>a little</b> text","uncountable"],
     ["data","<b>data</b> is&hellip;","uncountable in practice"],
     ["information","&nbsp;","&nbsp;"]]), 600)
S["a03-f7"]=lambda: f_part("One name, three counts",
    [("bytes",19,"#0f5f6b"),("code points",11,"#1d6f8c"),("letters a reader sees",9,"#7a4a86")])
S["a03-f8"]=lambda: f_icons([("data","bytes"),("refnumber","code points"),
    ("wordcount","grapheme clusters"),("form","a field limit"),
    ("scissors","a truncated name"),("magnifier","a comparison")], cols=3)
S["a03-f9"]=lambda: f_realia(tbl("Field note &middot; customer_name",
    "Interface document, section 3.1",
    ["",""],
    [["<b>Encoding</b>","UTF-8, always"],
     ["<b>Limit</b>","128 <b>bytes</b>, stated in bytes"],
     ["<b>Compared</b>","after normalization"],
     ["<b>Never</b>","cut at a byte boundary"]],
    note="A length with no unit is not a length."), 540)
S["a03-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("priya",400,172,{})],
    props=[("desk",230,0,1.25),("form",300,194,0.24),("essay",380,194,0.26),
     ("computer",600,142,0.44),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,2,30))
S["a03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Rule A", None,
        "<p>name: 20 characters</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Rule B", None,
        "<p><b>Encoding</b> UTF-8<br><b>Limit</b> 128 bytes<br>"
        "<b>Compared</b> after normalization<br>"
        "<b>On the screen</b> we never cut in the middle of a letter</p>"), w)[0:3],
    w=920, h=300)
S["a03-f12"]=lambda: f_realia(doc("Two field notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The name field holds 20 characters.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Encoding</b> UTF-8. <b>Limit</b> 128 bytes. <b>Compared</b> after normalization. "
    "<b>Truncation</b> never inside a grapheme cluster. <b>On the screen</b> the full name, with "
    "no cut.</p>",
    "One of these refuses about half the names on earth."))
S["a03-f13"]=lambda: f_realia(form("Text-field planner",
    [("Encoding",""),("Limit, with its unit",""),("Normalized before comparing?",""),
     ("Where we truncate",""),("What the reader sees",""),("Not in this note","")]), 520)
S["a03-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("priya",195,172,{}),
     ("mei",280,176,{"seated":True}),("linh",360,172,{"seated":True}),
     ("hana",435,176,{"seated":True}),("tomas",520,170,{}),("lars",595,172,{}),
     ("ines",665,170,{}),("grace",735,172,{}),("marek",805,170,{}),
     ("oksana",865,172,{}),("ravi",920,170,{}),("junseo",960,174,{}),("chiamaka",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("form",330,196,0.22),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,3,0))
S["a03-f15"]=lambda: f_chart([("bytes",6),("characters",9),("I do not know",7),
    ("it is not written down",3),("letters a reader sees",1)])
S["a03-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("form",320,194,0.24),("essay",390,194,0.26),
     ("email",460,196,0.22),("note",530,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
