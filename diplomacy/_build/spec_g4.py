# -*- coding: utf-8 -*-
"""Foreign Service English Book 1 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

NINE = ["Full name, exactly as in the passport",
        "Nationality, and any second nationality",
        "Date and place of birth",
        "Where the person is now, and in whose custody",
        "The date and the time of detention",
        "What the authorities say the matter is",
        "Whether a lawyer has been appointed, and the name",
        "Who in the family knows, and who has been told",
        "Whether the person consents to us informing the family"]

# ---------------- Unit 10 · A Citizen in Trouble ----------------
S["g10-f1"]=lambda: f_icons([("phone","the first call"),("worldmap","two capitals"),
    ("councilbuilding","a police station"),("logsheet","nine questions"),
    ("passport","a passport"),("suitcase","a lawyer"),
    ("clock","a late hour"),("clinic","a hospital"),
    ("signature","a signed note"),("handshake","through the glass")], cols=5)
S["g10-f2"]=lambda: f_scene(900,420, people=[("samira",300,176,{"seated":True,"smile":False})],
    props=[("desk",230,0,1.3),("phone",300,200,0.34),("logsheet",380,196,0.38),
     ("form",450,198,0.36),("lamp",540,140,0.5)],
    window_=(700,56,140,100), clockat=(130,46,22,16,20),
    panelbg="#2b3340", floorbg="#39414d")
S["g10-f3"]=lambda: f_icons([("passport","the name page"),("map","the city"),
    ("calendar","the date"),("phone","a number on the pad"),
    ("idcard","the lawyer's card"),("worried","not known")], cols=3)
S["g10-f4"]=lambda: f_realia(tbl("","The nine questions",
    ["#","The question","The answer"],
    [[str(i+1), NINE[i], ""] for i in range(9)], numcols=(0,),
    note="<b>What we write when nobody knows:</b>"), 560)
S["g10-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 10 &middot; Article 36, and what is argued about",
    "<p><b>Vienna Convention on Consular Relations, 1963</b> &middot; "
    "<b>182 states parties</b>.</p>"
    + table_html(["Article 36 says","In plain English"],
      [["on <b>request</b> of the person detained","the person has to ask"],
       ["the authorities shall inform the consulate <b>without delay</b>","not when convenient"],
       ["consular officers may <b>communicate with and visit</b> the person",
        "a call and a visit, not a release"]])
    + "<p style='border:1px solid #d9d4c9;padding:8px'><b>What is argued about.</b> The "
    "<b>International Court of Justice</b> has found a <b>breach</b> of the Article. Some "
    "<b>domestic courts</b> have held that an <b>individual cannot rely on it directly</b> in "
    "their own case. Both of those are true at the same time, and a consular officer who knows "
    "only one of them will one day say the wrong one in a courtroom.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: Vienna Convention on Consular Relations, "
    "1963, Article 36, and the depositary's status table.</p>"))
S["g10-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["notify","notification"],["detain","detention"],["assist","assistance"],
     ["request","a request"],["consent",""],["inform",""]]), 440)
S["g10-f7"]=lambda: f_process(["the person asks",
    "the authorities inform the consulate — without delay",
    "the consulate may communicate and visit",
    "what a court will do: argued both ways"])
S["g10-f8"]=lambda: f_icons([("passport","the name page"),("calendar","the date"),
    ("map","where"),("idcard","the lawyer"),
    ("phone","a number"),("handsup","not known")], cols=3)
S["g10-f9"]=lambda: f_realia(tbl("Consular Affairs &middot; case record","Case 2026/41 &middot; first call",
    ["#","The question","The answer"],
    [["1",NINE[0],"Omar Haddad Rifai (as in passport)"],
     ["2",NINE[1],"ours; second nationality <b>not known</b>"],
     ["3",NINE[2],"14 June 1991, Aleppo"],
     ["4",NINE[3],"Perenne, central district station"],
     ["5",NINE[4],"3 March, about 22:00 local"],
     ["6",NINE[5],"a document matter; charge <b>not known</b>"],
     ["7",NINE[6],"<b>not known</b>"],
     ["8",NINE[7],"a brother in Damascus; not yet told"],
     ["9",NINE[8],"<b>yes</b>, consent given on the call"]], numcols=(0,),
    note="<b>What we will do:</b> telephone the station &middot; <b>by:</b> 17:30 today "
    "&middot; <b>who telephones the family:</b> S. Barakat, by 18:00"), 580)
S["g10-f10"]=lambda: f_scene(940,430,
    people=[("samira",300,176,{"seated":True,"smile":False}),
     ("omar",430,176,{"smile":False})],
    props=[("desk",230,0,1.3),("phone",300,200,0.34),("logsheet",380,196,0.36),
     ("lamp",520,140,0.5),("note",640,120,0.28),("form",470,198,0.3)],
    window_=(740,56,130,100), clockat=(130,46,22,16,20),
    panelbg="#2b3340", floorbg="#39414d")
S["g10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Form A", None, ["#","Answer"],
        [["1","Omar Haddad Rifai"],["2",""],["3","14 June 1991"],["4","Perenne"],
         ["5",""],["6",""],["7",""],["8",""],["9","yes"]], numcols=(0,)), w)[0:3],
    lambda w,h: f_realia(tbl("Form B", None, ["#","Answer"],
        [["1","Omar Haddad Rifai"],["2","ours; second <b>not known</b>"],
         ["3","14 June 1991, Aleppo"],["4","Perenne, central district station"],
         ["5","3 March, about 22:00"],["6","document matter; charge <b>not known</b>"],
         ["7","<b>not known</b>"],["8","brother in Damascus, not yet told"],
         ["9","<b>yes</b>"]], numcols=(0,),
        note="call station by 17:30 &middot; family by 18:00"), w)[0:3],
    w=940, h=340)
S["g10-f12"]=lambda: f_realia(doc("Two case records", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Record 1</b><br>"
    "Name, date of birth, city, consent. Four lines blank. "
    "<i>We will do everything we can.</i></p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Record 2</b><br>"
    "Nine lines complete; three read <b>not known</b>, in full.<br>"
    "<b>Action before 17:30:</b> telephone the central district station.<br>"
    "<b>Action before 18:00:</b> telephone the brother in Damascus.<br>"
    "<b>Action before 09:00 tomorrow:</b> send a note to our consulate in Perenne.<br>"
    "<b>Not promised:</b> a release, a date, or an outcome.</p>",
    "Three named actions with times. Nobody said “everything we can”."))
S["g10-f13"]=lambda: f_realia(form("Case record &middot; first call",
    [("1",""),("2",""),("3",""),("4",""),("5",""),("6",""),("7",""),("8",""),("9",""),
     ("Action, by __:__",""),("Action, by __:__",""),("Action, by __:__","")],
    note="<b>What I did not promise:</b>"), 540)
S["g10-f14"]=lambda: f_scene(980,440,
    people=[("samira",110,176,{"seated":True,"smile":False}),
     ("omar",190,176,{"seated":True,"smile":False}),("hana",300,172,{"smile":False}),
     ("nadia",390,172,{"seated":True}),("bah",460,172,{"seated":True}),
     ("ahmad",530,172,{"seated":True}),("yusuf",620,170,{}),
     ("linh",700,172,{}),("ida",770,170,{}),("karin",840,172,{}),
     ("lucia",900,170,{}),("oskar",950,174,{}),("caruso",40,176,{})],
    props=[("desk",80,0,1.1),("phone",150,198,0.3),("lamp",120,130,0.4),
     ("worldmap",270,46,0.66),("table",380,0,1.3),("printer",580,198,0.42),
     ("cafe",820,200,0.4)], clockat=(220,40,22,17,0),
    panelbg="#2b3340", floorbg="#39414d")
S["g10-f15"]=lambda: f_chart([("not known",8),("a dash",6),("N/A",4),
    ("nothing",3),("it depends on the form",2)])
S["g10-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("folder",320,190,0.44),("email",420,194,0.38),
     ("clinic",520,190,0.4),("board",660,50,0.68),("lamp",180,140,0.46)],
    clockat=(110,46,22,9,20))

# ---------------- Unit 11 · Ninety Days ----------------
S["g11-f1"]=lambda: f_icons([("ticket","a visa sticker"),("calendar","ninety days shaded"),
    ("timetable","the window that slides"),("stamp","an entry stamp"),
    ("stamp","an exit stamp"),("desk","the border desk"),
    ("calculator","counting at the counter"),("barrier","the ceiling"),
    ("clock","counting backwards"),("handsup","counting together")], cols=5)
S["g11-f2"]=lambda: f_scene(900,420, behind=[("samira",620,172,{})],
    people=[("caruso",420,176,{})],
    counter_=(560,228,250,112),
    on_counter=[("passport",610,0.38),("calendar",710,0.34),("pen",790,0.28)],
    props=[("folder",380,194,0.4),("phone",460,190,0.28)], clockat=(180,46,22,10,0))
S["g11-f3"]=lambda: f_icons([("calendar","180 days, fixed"),("transfer","moved on a week"),
    ("back","days drop off"),("today","days come in"),
    ("tally","ninety used"),("calculator","what is left")], cols=3)
S["g11-f4"]=lambda: f_realia(tbl("","The limit people get wrong",
    ["The limit","What people think it is","The ten-word sentence"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>What I will say at the counter:</b>"), 540)
S["g11-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Counter note 11 &middot; short stays",
    "<p style='font-size:16px'><b>No more than 90 days in any 180-day period.</b></p>"
    "<p>The important word is <b>any</b>. You do not count from the first of January. You count "
    "<b>backwards from each day of the stay</b>: look back 180 days and add up the days spent "
    "inside. So the window <b>rolls</b> &mdash; tomorrow the oldest day drops out and today "
    "comes in. <b>Leaving does not reset the count.</b></p>"
    + table_html(["","What it is"],
      [["<b>The visa</b>","permission to <b>present yourself</b> at the border between two dates"],
       ["<b>The 90 days</b>","the <b>maximum stay</b> inside the 180-day window"],
       ["<b>The border decision</b>","taken by an officer, on the day"]])
    + "<p><b>A visa authorizes the holder to apply for entry. It is not a guarantee of entry, "
    "and it is not an entitlement to 90 days.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: Schengen Borders Code, Article 6, and the "
    "European Commission's short-stay calculator. Other countries have their own rules; this "
    "note is about this one.</p>"))
S["g11-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["enter","entry"],["leave","departure"],["stay","a stay"],
     ["authorize","authorization"],["apply",""],["refuse",""]]), 440)
S["g11-f7"]=lambda: f_matrix(["Mar","Apr","May","Jun","Jul","Aug","Sep"],
    [("window counted in April", ["20","—","—","—","","",""]),
     ("window counted in July", ["—","—","—","—","30","2",""]),
     ("days left on the day", ["", "40", "", "", "10", "", "?"])])
S["g11-f8"]=lambda: f_icons([("ticket","two dates on the visa"),("calendar","ninety days"),
    ("desk","the border officer"),("stamp","the entry stamp"),
    ("timetable","the sliding window"),("calculator","the subtraction")], cols=3)
S["g11-f9"]=lambda: f_realia(tbl("Consular Affairs &middot; short-stay count","As at 6 March",
    ["Trip","Dates","Days","Running total"],
    [["1","2 to 21 March","20","20"],
     ["2","4 July to 2 August","30","<b>50</b>"],
     ["","<b>180-day window ends</b>","","<b>today</b>"],
     ["","<b>Days used</b>","","<b>50</b>"],
     ["","<b>Days remaining</b>","","<b>40 &mdash; as at 6 March</b>"]],
    note="<b>A valid visa is not a guarantee of entry.</b> The officer at the border decides on "
    "the day."), 540)
S["g11-f10"]=lambda: f_scene(940,430, behind=[("samira",620,172,{})],
    people=[("caruso",430,176,{}),("ida",250,172,{}),("linh",180,170,{})],
    counter_=(560,228,260,112),
    on_counter=[("passport",610,0.38),("calendar",700,0.34),("note",790,0.28)],
    props=[("folder",390,194,0.38),("ticketmachine",880,100,0.5)],
    clockat=(320,44,22,10,0))
S["g11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Sheet A", None, ["",""],
        [["Days used","50"],["Days remaining","40"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Sheet B", None, ["Dates","Days","Total"],
        [["2&ndash;21 March","20","20"],["4 July&ndash;2 August","30","50"],
         ["<b>180-day window ends</b>","","<b>6 March</b>"],
         ["<b>Remaining</b>","","<b>40 &mdash; as at 6 March</b>"]]), w)[0:3],
    w=900, h=300)
S["g11-f12"]=lambda: f_realia(doc("Two counting slips", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Slip 1</b><br>"
    "You have <b>40 days</b> left.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Slip 2</b><br>"
    "2 to 21 March: <b>20 days</b> &middot; 4 July to 2 August: <b>30 days</b><br>"
    "<b>Total used: 50.</b> &nbsp; <b>Remaining: 40 &mdash; as at 6 March.</b><br>"
    "Your <b>visa</b> is valid until 12 January. It authorizes you to <b>apply</b> to enter.<br>"
    "The <b>border decision</b> is taken by an officer on the day. I cannot tell you what that "
    "officer will decide.</p>",
    "One of these will be carried in a pocket until September and used on a day when it is wrong."))
S["g11-f13"]=lambda: f_realia(tbl("","Short-stay count",
    ["Trip","Dates","Days"],
    [["1","",""],["2","",""],["3","",""],["","<b>Total used</b>",""],
     ["","<b>Remaining</b> &nbsp; as at ____________",""]],
    note="<b>1 The visa:</b> ____________ &nbsp; <b>2 The stay:</b> ____________ &nbsp; "
    "<b>3 The border:</b> ____________"), 540)
S["g11-f14"]=lambda: f_scene(980,440,
    behind=[("samira",700,172,{}),("omar",780,176,{})],
    people=[("caruso",150,172,{"seated":True}),("ida",225,176,{"seated":True}),
     ("linh",300,172,{"seated":True}),("oskar",375,176,{"seated":True}),
     ("karin",460,170,{}),("lucia",530,172,{}),("nkemelu",600,174,{}),
     ("hana",880,170,{}),("nadia",940,172,{})],
    counter_=(640,228,250,112),
    on_counter=[("passport",690,0.36),("calculator",790,0.3)],
    props=[("chair",130,0,0.7),("board",40,38,0.66),("ticketmachine",60,150,0.4),
     ("tray",840,196,0.4),("note",900,120,0.26)], clockat=(560,42,22,10,0))
S["g11-f15"]=lambda: f_chart([("the visa length",9),("ninety days a year",6),
    ("ninety days each entry",4),("90 in any 180",3),("I did not know",2)])
S["g11-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("note",320,190,0.34),("passport",410,192,0.36),
     ("stamp",490,196,0.3),("calendar",620,106,0.6)],
    clockat=(120,46,22,9,30))

# ---------------- Unit 12 · Our Seat at the Table ----------------
S["g12-f1"]=lambda: f_icons([("certificate","a signed charter"),("country","a row of flags"),
    ("podium","a nameplate in the hall"),("signature","signing"),
    ("vote","a ballot"),("chain","two flags joined"),
    ("scissors","two flags separated"),("archive","founding documents"),
    ("calendar","a date"),("chair","an empty chair")], cols=5)
S["g12-f2"]=lambda: f_scene(900,420, people=[("omar",330,176,{}),("hana",430,172,{})],
    props=[("table",300,0,1.3),("book",380,190,0.42),("notebook",470,196,0.32),
     ("shelf",640,80,0.9),("shelf",800,80,0.9),("certificate",740,40,0.4)],
    clockat=(130,46,22,11,20))
S["g12-f3"]=lambda: f_icons([("signature","signed, 1945"),("chain","two states, one flag"),
    ("podium","one nameplate"),("scissors","separate again"),
    ("calendar","13 October 1961"),("transfer","a join, not a break")], cols=3)
S["g12-f4"]=lambda: f_realia(tbl("","One date, three sources",
    ["The date","Where I found it","Exactly what it said"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>Which source I would cite:</b>"), 540)
S["g12-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Briefing note 12 &middot; our membership of the United Nations",
    "<p style='font-size:16px'><b>Syria has been a member of the United Nations since "
    "24 October 1945</b>, as an <b>original member</b> and one of the <b>51</b> states that "
    "signed the Charter.</p>"
    "<p>There is one complication, and it belongs here rather than at the end. From <b>1958 to "
    "1961</b> Syria and Egypt were one state, the <b>United Arab Republic</b>, recorded as "
    "<b>a single member holding one seat</b>. On <b>13 October 1961</b> Syria <b>resumed its "
    "separate membership</b>.</p>"
    + table_html(["",""],
      [["<b>The membership</b>","continuous since 1945"],
       ["<b>The seat</b>","shared for three years, separate again from 1961"]])
    + "<p><b>An unbroken membership and a continuous separate seat are not the same thing.</b> "
    "Say the first and you are right. Say the second and somebody with the records in front of "
    "them will correct you in public.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the United Nations member state record at "
    "un.org, and the Charter of the United Nations. The record gives dates of admission; it does "
    "not explain them, and a date of admission is not a history.</p>"))
S["g12-f6"]=lambda: f_realia(tbl("Word study","Present and past",
    ["Present","Past simple"],
    [["sign","signed"],["join","joined"],["become","became"],
     ["hold",""],["begin",""],["write",""]]), 440)
S["g12-f7"]=lambda: f_timeline([(0.04,"Oct 1945","Charter signed by 51 states"),
    (0.34,"Feb 1958","one state formed"),(0.52,"Sep 1961","the union ends"),
    (0.60,"13 Oct 1961","separate membership resumed")], 0.60, w=660)
S["g12-f8"]=lambda: f_icons([("signature","the signing"),("country","a row of flags"),
    ("podium","one nameplate"),("scissors","two flags"),
    ("calendar","1961"),("book","the reference volume")], cols=3)
S["g12-f9"]=lambda: f_realia(tbl("Information Department &middot; event card",
    "Three facts and one complication &middot; revised 4 March",
    ["#","Say this"],
    [["1","Member of the United Nations <b>since 24 October 1945</b>."],
     ["2","An <b>original member</b>, one of the <b>51</b> states that signed the Charter."],
     ["3","From <b>1958 to 1961</b>, one state with Egypt, the <b>United Arab Republic</b>, "
      "holding <b>a single seat</b>. Separate membership <b>resumed 13 October 1961</b>."]],
    numcols=(0,),
    note="<b>Say point 3 before you are asked.</b> Eleven seconds. &nbsp; "
    "<b>Do not say:</b> <i>we have always had our own seat.</i> &nbsp; "
    "<b>If you do not know a date:</b> <i>I would like to check that before I answer, and I "
    "will send it to you today.</i> &nbsp; Source: UN member state record, un.org."), 580)
S["g12-f10"]=lambda: f_scene(960,430,
    people=[("omar",260,178,{}),("hana",620,172,{"seated":True}),
     ("linh",760,172,{"seated":True}),("ida",830,170,{"seated":True})],
    props=[("flipchart",120,46,0.9),("table",580,0,1.3),("notebook",650,194,0.3),
     ("phone",790,190,0.26),("jug",340,196,0.3),("podium",220,120,0.5)],
    clockat=(470,44,22,18,0))
S["g12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Card A", None,
        "<p style='font-size:17px'><b>We have always had our own seat.</b></p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Card B", None, ["#","Say this"],
        [["1","member since <b>24 October 1945</b>"],
         ["2","an <b>original member</b>, one of <b>51</b> signatories"],
         ["3","<b>1958&ndash;1961</b>: one state, one seat; separate again "
          "<b>13 October 1961</b>"]], numcols=(0,),
        note="Source: UN member state record, un.org"), w)[0:3],
    w=920, h=300)
S["g12-f12"]=lambda: f_realia(doc("Two event cards", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Card 1</b><br>"
    "<b>We have always had our own seat.</b></p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Card 2</b><br>"
    "<b>1.</b> Member since <b>24 October 1945</b>.<br>"
    "<b>2.</b> An <b>original member</b>, one of <b>51</b> signatory states.<br>"
    "<b>3.</b> <b>1958&ndash;1961</b>: one state with Egypt, a single seat. Separate membership "
    "resumed <b>13 October 1961</b>.<br>"
    "<b>Do not say:</b> <i>we have always had our own seat.</i><br>"
    "<i>Source: UN member state record, un.org.</i></p>",
    "One of these can be corrected from a telephone in the third row."))
S["g12-f13"]=lambda: f_realia(form("Event card",
    [("1 &middot; fact and date",""),("2 &middot; fact and date",""),
     ("3 &middot; fact and date",""),("The complication",""),
     ("Do not say",""),("If I do not know","")],
    note="<b>Source:</b> ______________________"), 520)
S["g12-f14"]=lambda: f_scene(980,440,
    people=[("omar",130,178,{}),("hana",250,172,{}),("nadia",320,172,{}),
     ("linh",420,172,{"seated":True}),("ida",490,176,{"seated":True}),
     ("karin",560,172,{"seated":True}),("lucia",630,176,{"seated":True}),
     ("caruso",710,174,{}),("oskar",770,170,{}),("samira",840,172,{}),
     ("ahmad",900,170,{}),("bah",950,172,{}),("yusuf",50,174,{})],
    props=[("flipchart",60,44,0.7),("podium",120,126,0.45),("table",400,0,1.2),
     ("tripod",690,150,0.5),("door",830,70,0.8),("tray",930,196,0.36),
     ("jug",300,196,0.28)], clockat=(250,40,22,18,0))
S["g12-f15"]=lambda: f_chart([("I say it if asked",8),("before I am asked",6),
    ("leave it to Information",4),("it depends on the room",3),
    ("I did not know there was one",2)])
S["g12-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("note",320,190,0.34),("book",410,190,0.42),
     ("phone",510,196,0.3),("notebook",600,194,0.32),("lamp",180,140,0.44)],
    clockat=(120,46,22,20,10), panelbg="#242c38", floorbg="#30394a")
