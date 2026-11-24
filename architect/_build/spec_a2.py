# -*- coding: utf-8 -*-
"""Keystone Book 1 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · Nought Point One Plus Nought Point Two ----------------
S["a04-f1"]=lambda: f_icons([("calculator","a sum with a surprise"),("coins","a price in cents"),
    ("scales","a weight on a display"),("spreadsheet","a column of totals"),
    ("magnifier","two numbers almost equal"),("noentry","a total that will not match"),
    ("data","a row of bits"),("invoice","a rounded invoice"),
    ("tally","a count of digits"),("handsup","is that exact?")], cols=5)
S["a04-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("tomas",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("calculator",395,196,0.22),
     ("spreadsheet",460,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,3,45))
S["a04-f3"]=lambda: f_icons([("tally","24 bits of significand"),("data","53 bits"),
    ("calculator","a sum that is nearly right"),("coins","money as whole units"),
    ("scales","a measurement"),("magnifier","compared to within a tolerance")], cols=3)
S["a04-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The number","Its type","Exact or approximate","What it is used for"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one that holds money and should not: ______________________"), 600)
S["a04-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 4",
    "Platform team &middot; numbers &middot; page 1 of 1",
    "<p><b>The standard.</b> IEEE 754 is the standard for floating-point arithmetic. The current "
    "edition carries the year 2019. It follows the 2008 edition, which followed the first one from "
    "1985. Two formats do nearly all the work in our systems.</p>"
    + table_html(["Format","Bits of significand","Decimal digits you can trust"],
      [["binary32","24","about 6 to 9"],["binary64","53","about 15 to 17"]])
    + "<p><b>The famous surprise.</b> Add nought point one to nought point two. The answer is not "
    "nought point three. It is very close, and it is not equal. The reason is simple. These "
    "formats hold numbers in base two. One tenth cannot be written exactly in base two, just as "
    "one third cannot be written exactly in base ten.</p>"
    "<p><b>Three values that are not numbers.</b> The standard defines two zeros, one positive "
    "and one negative. It defines two infinities. And it defines NaN, which means not a number. "
    "NaN is not equal to itself. So a test for equality is the wrong tool for it.</p>"
    "<p><b>What we do with money.</b> Money is stored as a whole number of minor units. Twelve "
    "fifty becomes 1250. No fractions, no rounding, no drift over a million rows. A measurement is "
    "different. A weight or a length is stored as binary64 and compared to within a tolerance, "
    "because the measurement was never exact in the first place.</p>",
    "Source: IEEE 754-2019, IEEE Standard for Floating-Point Arithmetic, following the 2008 and "
    "1985 editions: the binary32 and binary64 formats, the two zeros, the infinities and NaN. The "
    "standard also defines decimal formats, which most programming languages do not give you by "
    "default."), 580)
S["a04-f6"]=lambda: f_realia(tbl("Word study","Comparatives",
    ["Form","Example","Note"],
    [["-er than","wid<b>er than</b>, small<b>er than</b>","short adjectives"],
     ["more &hellip; than","<b>more precise than</b>","longer adjectives"],
     ["as &hellip; as","<b>as exact as</b>","equal"],
     ["not as &hellip; as","<b>not as precise as</b>","less"],
     ["far / much + comparative","&nbsp;","&nbsp;"],
     ["the + superlative","&nbsp;","&nbsp;"]]), 600)
S["a04-f7"]=lambda: f_part("Digits you can trust",
    [("binary32: about 7",7,"#1d6f8c"),("binary64: about 16",16,"#0f5f6b")])
S["a04-f8"]=lambda: f_icons([("tally","24 bits"),("data","53 bits"),
    ("calculator","a sum with a remainder"),("coins","whole minor units"),
    ("scales","a tolerance"),("noentry","NaN is not equal to itself")], cols=3)
S["a04-f9"]=lambda: f_realia(tbl("Field note &middot; two number fields",
    "Interface document, section 4.2",
    ["",""],
    [["<b>amount_minor</b>","a whole number of minor units; never a decimal"],
     ["<b>weight_kg</b>","binary64; compared to within 0.001"],
     ["<b>Rounding</b>","at the edge, once, and written down"],
     ["<b>Never</b>","an equality test on a measurement"]],
    note="Money is counted. A measurement is estimated."), 540)
S["a04-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("tomas",400,172,{})],
    props=[("desk",230,0,1.25),("spreadsheet",300,194,0.26),("calculator",380,196,0.22),
     ("invoice",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,4,15))
S["a04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Design A", None,
        "<p>price: a decimal number<br>total: the sum of the prices</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Design B", None,
        "<p><b>price_minor</b> a whole number of minor units<br>"
        "<b>currency</b> the three-letter code<br>"
        "<b>total_minor</b> the sum, still whole<br>"
        "<b>rounding</b> once, at the edge, recorded</p>"), w)[0:3],
    w=920, h=300)
S["a04-f12"]=lambda: f_realia(doc("Two totals", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Report 1</b><br>"
    "Total: 18,402.999999999998</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Report 2</b><br>"
    "Total: <b>1840300</b> minor units, EUR. Printed as 18,403.00. Rounded once, at the edge, "
    "from whole minor units that were never fractions.</p>",
    "One of these was read aloud to an auditor."))
S["a04-f13"]=lambda: f_realia(form("Number-field planner",
    [("What kind of quantity is it?",""),("Counted or measured",""),("Type",""),
     ("How it is compared",""),("Where rounding happens",""),("Not in this note","")]), 520)
S["a04-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("tomas",195,172,{}),
     ("mei",280,176,{"seated":True}),("priya",360,172,{"seated":True}),
     ("marek",435,176,{"seated":True}),("lars",520,170,{}),("ines",595,172,{}),
     ("grace",665,170,{}),("oksana",735,172,{}),("chiamaka",805,170,{}),
     ("hana",865,172,{}),("ravi",920,170,{}),("linh",960,174,{}),("junseo",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("calculator",330,198,0.2),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,9,0))
S["a04-f15"]=lambda: f_chart([("whole minor units",5),("a decimal type",8),
    ("a floating-point number",7),("two fields",3),("I do not know",3)])
S["a04-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("invoice",320,194,0.24),("spreadsheet",390,194,0.24),
     ("calculator",460,198,0.2),("note",530,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,7,0))

# ---------------- Unit 5 · Three Letters, Three Decimals ----------------
S["a05-f1"]=lambda: f_icons([("pricetag","a price with a code"),("coins","a coin and a note"),
    ("spreadsheet","codes and digits"),("bankcard","a payment screen"),
    ("departureboard","an exchange rate board"),("receipt","no decimal places"),
    ("invoice","three decimal places"),("noentry","a withdrawn code"),
    ("refnumber","a numeric code"),("handsup","two lists compared")], cols=5)
S["a05-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("ines",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("spreadsheet",395,194,0.24),
     ("receipt",460,196,0.22),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,4,10))
S["a05-f3"]=lambda: f_icons([("magnifier","a code looked up"),("coins","whole minor units"),
    ("tally","the minor digits read"),("receipt","no decimals printed"),
    ("invoice","three decimals printed"),("noentry","a withdrawn code refused")], cols=3)
S["a05-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The code","Minor digits","Where we found it","What our system does"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one our system gets wrong: ______________________"), 600)
S["a05-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 5",
    "Platform team &middot; currency codes and minor units &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO 4217 gives a code for every currency in the world. The current "
    "edition dates from 2015. The code list is maintained and published separately, by a "
    "maintenance agency. That is because currencies change more often than standards do.</p>"
    + table_html(["Currency","Alpha code","Numeric code","Minor digits"],
      [["euro","<b>EUR</b>","978","<b>2</b>"],["US dollar","<b>USD</b>","840","<b>2</b>"],
       ["Japanese yen","<b>JPY</b>","392","<b>0</b>"],
       ["Kuwaiti dinar","<b>KWD</b>","414","<b>3</b>"],
       ["Tunisian dinar","<b>TND</b>","788","<b>3</b>"]])
    + "<p><b>The decimals belong to the currency.</b> Most currencies have two minor digits. A "
    "number have none. A few have three. So the same stored number can be three amounts. The "
    "number 1250 is twelve fifty in one currency. It is one thousand two hundred and fifty in "
    "another. And in a third it is one and a quarter.</p>"
    "<p><b>Two codes, one currency.</b> The three-letter code is for people. The three-digit code "
    "is for systems that cannot carry letters. A system should accept either and store one. Codes "
    "that begin with X are not countries at all.</p>"
    "<p><b>The list changes.</b> Codes are added when a country starts a currency. They are "
    "withdrawn when one stops. A withdrawn code does not leave your database. Old payments still "
    "have to print on reports. So a system needs two lists. One is current and one is historical. "
    "A system with one hardcoded list fails in one of two ways.</p>",
    "Source: ISO 4217, Codes for the representation of currencies, 2015 edition, with the code "
    "list maintained and published by its maintenance agency. The standard does not define "
    "exchange rates or national cash-rounding practices."), 580)
S["a05-f6"]=lambda: f_realia(tbl("Word study","Quantity words",
    ["Quantity word","What follows","Example"],
    [["all","plural","<b>All</b> currencies have a code."],
     ["most","plural","<b>Most</b> have two minor digits."],
     ["many","plural","<b>Many</b> systems assume two."],
     ["some","plural","<b>Some</b> have none."],
     ["a few","plural","<b>A few</b> have three."],
     ["none of","plural","&nbsp;"],["every","singular","&nbsp;"]]), 600)
S["a05-f7"]=lambda: f_chart([("two minor digits",128),("no minor digits",22),
    ("three minor digits",8)], unit="currencies")
S["a05-f8"]=lambda: f_icons([("magnifier","look up the code"),("coins","store minor units"),
    ("tally","read the digits"),("receipt","print with none"),
    ("invoice","print with three"),("noentry","refuse a withdrawn code")], cols=3)
S["a05-f9"]=lambda: f_realia(tbl("Currency note",
    "Interface document, section 5.2",
    ["",""],
    [["<b>Stored</b>","amount_minor, a whole number; currency, the alpha code"],
     ["<b>Minor digits</b>","looked up from the code, every time we print"],
     ["<b>Two lists</b>","current, for new payments; historical, for old rows"],
     ["<b>A withdrawn code</b>","refused on input; still printed on reports"]],
    note="An amount without a code is not money."), 540)
S["a05-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("ines",400,172,{})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("spreadsheet",385,194,0.24),
     ("receipt",450,196,0.22),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,4,30))
S["a05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Rule A", None,
        "<p>Divide by one hundred and print two decimals.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Rule B", None,
        "<p>Look up the minor digits from the code.<br>"
        "Print that many decimals: none, two or three.<br>"
        "The list lives in one service.<br>"
        "The date of our copy is on its status page.</p>"), w)[0:3],
    w=920, h=300)
S["a05-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Amounts are printed with two decimals.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Stored</b> amount_minor and currency. <b>Printed</b> with the minor digits of that code. "
    "<b>Examples</b> 1250 EUR prints 12.50; 1250 JPY prints 1250; 1250 KWD prints 1.250. "
    "<b>Withdrawn codes</b> still print.</p>",
    "Same stored number. One of these three amounts is a thousand times another."))
S["a05-f13"]=lambda: f_realia(form("Currency-note planner",
    [("Stored fields",""),("The formatting rule",""),("Three worked examples",""),
     ("Where the list lives, and the date of our copy",""),("The two lists",""),
     ("Not in this note","")]), 520)
S["a05-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("ines",195,172,{}),
     ("mei",280,176,{"seated":True}),("tomas",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("grace",520,170,{}),("lars",595,172,{}),
     ("marek",665,170,{}),("oksana",735,172,{}),("ravi",805,170,{}),
     ("chiamaka",865,172,{}),("junseo",920,170,{}),("hana",960,174,{}),("linh",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("receipt",330,198,0.2),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,5,0))
S["a05-f15"]=lambda: f_chart([("always two",9),("two, with exceptions",4),
    ("looked up from the code",5),("no money in our system",4),("I do not know",4)])
S["a05-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("invoice",320,194,0.24),("invoice",380,194,0.24),
     ("note",445,194,0.24),("computer",560,142,0.4),("lamp",180,140,0.42)],
    clockat=(120,46,22,10,0))

# ---------------- Unit 6 · Fifteen Digits, No More ----------------
S["a06-f1"]=lambda: f_icons([("phone","a number with a plus sign"),("worldmap","a country code"),
    ("note","the same number, four ways"),("form","a leading zero"),
    ("scissors","cut off at fifteen"),("idcard","an extension"),
    ("refnumber","two prefixes"),("signal","an international call"),
    ("data","a column of text"),("handsup","how many digits?")], cols=5)
S["a06-f2"]=lambda: f_scene(920,420, people=[("adeel",330,176,{"seated":True}),
     ("lars",420,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("form",395,194,0.24),
     ("phone",460,196,0.22),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,20))
S["a06-f3"]=lambda: f_icons([("stamp","the plus sign"),("worldmap","the country code"),
    ("signpost","the destination part"),("phone","the subscriber part"),
    ("tally","fifteen, and stop"),("idcard","the extension, separately")], cols=3)
S["a06-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The country","As written on a card","The international prefix","The leading zero"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The form we will store: ______________________"), 600)
S["a06-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 6",
    "Platform team &middot; telephone numbers &middot; page 1 of 1",
    "<p><b>The standard.</b> ITU-T Recommendation E.164 describes the international numbering "
    "plan. The version we use was published in November 2010. It gives one rule about length, and "
    "the rule is a limit.</p>"
    + table_html(["Part","Digits","What it says"],
      [["country code","1 to 3","which country or service"],
       ["destination part","varies","which area or network"],
       ["subscriber part","varies","which line"]])
    + "<p><b>The limit.</b> An international number has at most fifteen digits. That is the whole "
    "number. The country code counts. The limit is the same for every country. So a rule of "
    "exactly twelve digits is not from the standard. It is from somebody's test data.</p>"
    "<p><b>The plus sign is not a digit.</b> It means <i>dial the international prefix of the "
    "place you are standing in</i>. That prefix is not the same everywhere. In many countries it "
    "is a double zero. So the plus sign is short for a local rule, and it does not count towards "
    "the fifteen.</p>"
    "<p><b>A telephone number is not an arithmetic number.</b> It can begin with a zero, and the "
    "zero means something. An integer field removes it. Nobody adds two telephone numbers "
    "together. So the field is text. The same number can also be written in several ways. We "
    "accept any form from a person and store one form.</p>",
    "Source: ITU-T Recommendation E.164, The international public telecommunication numbering "
    "plan, November 2010 version. Written presentation is the subject of Recommendation E.123. "
    "Extensions, the mobile or fixed nature of a number, and national short codes are outside "
    "E.164."), 580)
S["a06-f6"]=lambda: f_realia(tbl("Word study","Obligation",
    ["Form","Meaning","Example"],
    [["must","a strong rule, often written","The field <b>must</b> be text."],
     ["have to","a rule or a necessity","We <b>have to</b> store one form."],
     ["has to","the same, with he, she, it","The value <b>has to</b> begin with a plus."],
     ["do not have to","it is not necessary","&nbsp;"],
     ["must not","it is forbidden","&nbsp;"]]), 600)
S["a06-f7"]=lambda: f_chart([("with a plus sign",214),("with a double zero",88),
    ("with a national zero",156),("with spaces and brackets",192),
    ("with no code at all",74)], unit="records")
S["a06-f8"]=lambda: f_icons([("stamp","a plus at the front"),("tally","a count stopping at fifteen"),
    ("form","a leading zero kept"),("note","four forms, one circled"),
    ("idcard","an extension in its own box"),("noentry","an integer field refusing")], cols=3)
S["a06-f9"]=lambda: f_realia(tbl("Numbering note",
    "Interface document, section 6.1",
    ["",""],
    [["<b>Field type</b>","text, sixteen characters; never an integer"],
     ["<b>Stored form</b>","a plus, the country code, then the digits"],
     ["<b>Length</b>","at most fifteen digits; the plus does not count"],
     ["<b>Extension</b>","its own field, never inside the number"]],
    note="No arithmetic, ever."), 540)
S["a06-f10"]=lambda: f_scene(940,430, people=[("adeel",300,176,{"seated":True}),
     ("lars",400,172,{})],
    props=[("desk",230,0,1.25),("computer",300,142,0.44),("form",385,194,0.24),
     ("note",450,194,0.24),("lamp",180,140,0.42),("window",805,56,0.96)],
    clockat=(140,46,22,10,0))
S["a06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Validation A", None,
        "<p>Exactly twelve digits after the plus sign.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Validation B", None,
        "<p>Digits only after the plus.<br>At most fifteen of them.<br>"
        "A country code we recognize.<br>Then stop.<br>"
        "The typed form is kept in a second column.</p>"), w)[0:3],
    w=920, h=300)
S["a06-f12"]=lambda: f_realia(doc("Two notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Telephone numbers must be twelve digits.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Type</b> text, sixteen characters. <b>Stored form</b> a plus, the country code, the "
    "digits. <b>Checks</b> digits only, at most fifteen, a known country code, stop. "
    "<b>Second column</b> what the person typed. <b>Extensions</b> a separate field.</p>",
    "One of these told four hundred and ten people that their own number was invalid."))
S["a06-f13"]=lambda: f_realia(form("Numbering-note planner",
    [("Field type and length",""),("The stored form",""),("The checks, in order",""),
     ("The second column",""),("Extensions",""),("Not in this note","")]), 520)
S["a06-f14"]=lambda: f_scene(980,440,
    people=[("adeel",115,176,{"seated":True}),("lars",195,172,{}),
     ("junseo",280,176,{"seated":True}),("grace",360,172,{"seated":True}),
     ("mei",435,176,{"seated":True}),("tomas",520,170,{}),("priya",595,172,{}),
     ("ines",665,170,{}),("marek",735,172,{}),("oksana",805,170,{}),
     ("ravi",865,172,{}),("chiamaka",920,170,{}),("hana",960,174,{}),("linh",55,176,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("phone",330,198,0.2),
     ("computer",560,142,0.4),("printer",430,196,0.3),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,11,0))
S["a06-f15"]=lambda: f_chart([("text",7),("integer",6),("two or more fields",3),
    ("no telephone field",4),("I do not know",6)])
S["a06-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("logsheet",320,194,0.26),("note",390,194,0.24),
     ("computer",560,142,0.4),("pen",460,200,0.2),("lamp",180,140,0.42)],
    clockat=(120,46,22,4,0))
