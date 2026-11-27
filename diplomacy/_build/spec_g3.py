# -*- coding: utf-8 -*-
"""Foreign Service English Book 1 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · The Diary ----------------
S["g07-f1"]=lambda: f_icons([("calendar","a desk diary"),("timetable","the wall planner"),
    ("computer","the booking screen"),("clock","half past two"),
    ("month","one day circled"),("transfer","moved to another day"),
    ("phone","the telephone and the diary"),("door","the room card holder"),
    ("essay","a printed agenda"),("handshake","agreed")], cols=5)
S["g07-f2"]=lambda: f_scene(920,420, people=[("nadia",250,172,{}),
     ("omar",600,176,{"seated":True})],
    props=[("timetable",120,46,0.95),("desk",330,0,1.2),("calendar",400,190,0.4),
     ("phone",470,200,0.32),("desk",560,0,1.2),("essay",640,192,0.42),
     ("window",820,56,1.0)], clockat=(500,44,22,9,10))
S["g07-f3"]=lambda: f_icons([("transfer","moved later"),("back","brought forward"),
    ("cut","canceled"),("bottleneck","two things at once"),
    ("proof","confirmed"),("worried","not confirmed")], cols=3)
S["g07-f4"]=lambda: f_realia(tbl("","Our week",
    ["","Mon","Tue","Wed","Thu","Fri"],
    [["09:00","","","","",""],["11:00","","","","",""],
     ["14:00","","","","",""],["16:00","","","","",""]],
    note="<b>Where two things clash, and who moves:</b>"), 540)
S["g07-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 7 &middot; seating and speaking are two different lists",
    "<p style='font-size:16px'><b>193 nameplates</b>, in <b>English alphabetical order</b>.</p>"
    + table_html(["", "How it is decided"],
      [["<b>Seating</b>","English alphabetical order, starting from one seat"],
       ["<b>The first seat</b>","the Secretary-General <b>draws lots</b> before the session"],
       ["<b>Speaking order</b>","set <b>separately</b>, by its own practice"]])
    + "<p style='border:1px solid #d9d4c9;padding:8px'><b>The draw.</b> The alphabet decides the "
    "<i>order</i>; the draw decides <i>where the order begins</i>. So a delegation's seat moves "
    "from session to session, and its place in the alphabet does not.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: General Assembly seating and speaking "
    "practice. Where a delegation sits tells you nothing about when it speaks.</p>"))
S["g07-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["meet","a meeting"],["arrange","an arrangement"],["confirm","a confirmation"],
     ["postpone","a postponement"],["cancel",""],["reschedule",""]]), 440)
S["g07-f7"]=lambda: f_cycle(["lots drawn","first seat fixed","alphabet runs on from it",
    "193 seats filled","speaking order set separately"])
S["g07-f8"]=lambda: f_icons([("calendar","a free slot"),("clock","11:30"),
    ("door","room 412"),("email","a short message"),
    ("transfer","moved"),("handshake","agreed")], cols=3)
S["g07-f9"]=lambda: f_realia(tbl("Europe Department &middot; week planner","Week of 2 March",
    ["","Mon","Tue","Wed","Thu","Fri"],
    [["09:00","dept meeting, 512","&mdash;","&mdash;","Astrand call","&mdash;"],
     ["11:00","&mdash;","Perenne, 514","<b>Legal, 611</b>","&mdash;","&mdash;"],
     ["<b>11:00</b>","&mdash;","&mdash;","<b>Marovia, 514</b>","&mdash;","&mdash;"],
     ["14:00","&mdash;","&mdash;","&mdash;","Protocol, 412","&mdash;"],
     ["16:00","handover","handover","handover","handover","handover"]],
    note="<b>Wednesday 11:00 is booked twice.</b> &nbsp; Postponed: Legal &rarr; Thu 11:00. "
    "Brought forward: Protocol &rarr; Thu 09:30. Confirmed: Perenne, Tue 11:00."), 560)
S["g07-f10"]=lambda: f_scene(940,430, people=[("nadia",260,172,{}),("omar",420,176,{})],
    props=[("timetable",110,42,0.98),("desk",520,0,1.25),("calendar",590,190,0.4),
     ("essay",660,192,0.4),("phone",470,196,0.32),("jug",730,196,0.34),
     ("window",840,56,1.0)], clockat=(500,44,22,9,10))
S["g07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Planner A", None, ["Day","What"],
        [["Mon","dept meeting"],["Tue","Perenne"],["Wed","Legal / Marovia"],
         ["Thu","Protocol"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Planner B", None, ["Day","What","Room","Time"],
        [["Mon","dept meeting","512","09:00 <b>confirmed</b>"],
         ["Tue","Perenne","514","11:00 <b>confirmed</b>"],
         ["Wed","Marovia","514","11:00"],["Thu","Legal","611","11:00"],
         ["Thu","Protocol","412","09:30"],["Fri","handover","512","16:00"],
         ["Thu","Astrand call","&mdash;","09:00"],["Mon","handover","512","16:00"]]), w)[0:3],
    w=940, h=330)
S["g07-f12"]=lambda: f_realia(doc("Two confirmation notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The Wednesday meeting has moved.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Was:</b> Wednesday 4 March, 11:00, room 611<br>"
    "<b>Now:</b> <b>Thursday 5 March, 11:00, room 611</b><br>"
    "<b>Why:</b> room 514 was booked twice at 11:00 on Wednesday<br>"
    "<b>Also told:</b> Legal Affairs (ext. 611), Registry, the note-taker<br>"
    "<b>Alternatives if Thursday does not suit:</b> Friday 09:30 or Monday 14:00<br>"
    "<b>Please confirm by:</b> <b>16:00 today</b></p>",
    "One of these needs a telephone call before anybody can act on it."))
S["g07-f13"]=lambda: f_realia(form("Change of meeting",
    [("Was",""),("Now",""),("Why",""),("Also told",""),("Alternatives",""),
     ("Please confirm by","")]), 500)
S["g07-f14"]=lambda: f_scene(980,440,
    people=[("nadia",120,172,{}),("omar",190,176,{}),("hana",300,172,{"seated":True}),
     ("samira",380,172,{"seated":True}),("bah",460,172,{"seated":True}),
     ("ahmad",550,170,{}),("yusuf",620,172,{}),("linh",700,170,{}),
     ("ida",770,172,{}),("karin",840,170,{}),("lucia",900,172,{}),
     ("oskar",950,174,{}),("caruso",40,176,{})],
    props=[("timetable",60,40,0.75),("desk",270,0,1.1),("calendar",340,190,0.32),
     ("door",660,70,0.85),("printer",800,198,0.42),("cafe",880,200,0.42),
     ("essay",520,190,0.3)], clockat=(230,40,22,9,0))
S["g07-f15"]=lambda: f_chart([("one to two days",8),("a week",6),
    ("the same day",4),("two to four weeks",3),("more than a month",2)])
S["g07-f16"]=lambda: f_scene(900,410,
    people=[("linh",640,172,{"seated":True,"smile":False}),
     ("ida",700,170,{"seated":True,"smile":False}),
     ("caruso",760,174,{"seated":True,"smile":False}),
     ("karin",220,172,{"smile":False}),("oskar",285,174,{"smile":False})],
    props=[("door",380,70,0.95),("note",420,118,0.26),("timetable",80,46,0.7),
     ("phone",250,186,0.28),("table",700,0,1.1)], clockat=(500,44,22,10,0))

# ---------------- Unit 8 · Numbers at Work ----------------
S["g08-f1"]=lambda: f_icons([("tally","percent"),("magnifier","the decimal point"),
    ("spreadsheet","one row highlighted"),("calculator","a calculator"),
    ("data","a pie chart"),("review","a bar chart"),("balance","a scale"),
    ("invoice","a contribution letter"),("statement","the budget page"),
    ("worried","two readings of one number")], cols=5)
S["g08-f2"]=lambda: f_scene(900,420, people=[("omar",300,176,{}),
     ("bah",480,172,{"seated":True})],
    props=[("table",440,0,1.2),("essay",520,192,0.42),("spreadsheet",700,80,0.72),
     ("jug",600,196,0.32),("chair",380,0,0.7)], clockat=(130,46,22,11,0))
S["g08-f3"]=lambda: f_icons([("tally","22% — twenty-two percent"),
    ("tally","0.1% — nought point one"),
    ("tally","0.001% — nought point nought nought one"),
    ("data","1,000,000 — one million"),
    ("month","the 4th — the fourth"),("calendar","2026 — twenty twenty-six")], cols=3)
S["g08-f4"]=lambda: f_realia(tbl("","Figures we read out loud",
    ["The figure","What people write instead","How I will say it"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>Which scale it comes from:</b>"), 540)
S["g08-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 8 &middot; the scale of assessments",
    "<p>Three rates bound every assessment.</p>"
    + table_html(["", "Rate"],
      [["Minimum (the <b>floor</b>)","<b>0.001%</b>"],
       ["Least developed country maximum","<b>0.01%</b>"],
       ["Maximum (the <b>ceiling</b>)","<b>22%</b>"]])
    + "<p style='border:1px solid #d9d4c9;padding:8px'><b>Two scales, not one.</b> The "
    "<b>regular budget</b> scale and the <b>peacekeeping</b> scale are built from the same base "
    "and then adjusted differently. Quoting one as the other is the commonest numerical error in "
    "this field, and it always favors somebody, which is why it gets noticed.</p>"
    "<p><b>Resolution 79/249</b>, <b>31 December 2024</b>.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: General Assembly resolution 79/249, "
    "31 December 2024. Say which scale before you say the number.</p>"))
S["g08-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["contribute","a contribution"],["assess","an assessment"],["adopt","adoption"],
     ["adjust","an adjustment"],["calculate",""],["round",""]]), 440)
S["g08-f7"]=lambda: f_part("From the floor to the ceiling",
    [("floor 0.001%",1,AQUA),("LDC maximum 0.01%",1,GREEN),
     ("the range in between",20,BLUE),("ceiling 22%",22,AMBER)])
S["g08-f8"]=lambda: f_icons([("tally","0.001%"),("tally","22%"),
    ("month","the 31st of December"),("calendar","2024"),
    ("spreadsheet","two column headings"),("pen","writing it in words")], cols=3)
S["g08-f9"]=lambda: f_realia(tbl("Finance Section &middot; working table","Illustrative, invented states",
    ["Member state","Regular budget","Peacekeeping","Amount due"],
    [["Astrand","0.412%","0.412% <sup>a</sup>","one million four hundred thousand"],
     ["Perenne","0.088%","0.044% <sup>a</sup>","three hundred thousand"],
     ["Marovia","0.011%","0.011%","thirty-seven thousand"],
     ["Valmora","0.001%","0.001%","three thousand four hundred"],
     ["Kesteland","2.140%","2.140%","seven million three hundred thousand"],
     ["Sable Isles","0.001%","0.001%","three thousand four hundred"]],
    note="<sup>a</sup> adjusted under the peacekeeping scale. <b>The two columns are not "
    "interchangeable.</b> All states and figures on this sheet are invented for teaching."), 580)
S["g08-f10"]=lambda: f_scene(940,430,
    people=[("omar",280,176,{}),("bah",470,172,{"seated":True}),
     ("nadia",550,172,{"seated":True}),("hana",630,172,{"seated":True})],
    props=[("table",430,0,1.3),("essay",510,192,0.4),("spreadsheet",760,76,0.7),
     ("jug",700,196,0.32),("chair",380,0,0.7)], clockat=(140,46,22,11,0))
S["g08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Table A", None, ["State","%"],
        [["Astrand","0.412"],["Perenne","0.088"],["Marovia","0.011"],
         ["Valmora","0.001"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Table B", None,
        ["State","Regular budget %","Peacekeeping %"],
        [["Astrand","0.412","0.412 <sup>a</sup>"],["Perenne","0.088","0.044 <sup>a</sup>"],
         ["Marovia","0.011","0.011"],["Valmora","0.001","0.001"]],
        note="<sup>a</sup> adjusted under the peacekeeping scale"), w)[0:3],
    w=920, h=300)
S["g08-f12"]=lambda: f_realia(doc("Two figure notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "0.412 &nbsp; 0.088 &nbsp; 0.011 &nbsp; 22</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>All figures below are regular budget rates.</b><br>"
    "Astrand <b>0.412%</b> &mdash; nought point four one two percent<br>"
    "Perenne <b>0.088%</b> &mdash; nought point nought eight eight percent<br>"
    "Floor <b>0.001%</b> &mdash; nought point nought nought one percent<br>"
    "Ceiling <b>22%</b> &mdash; twenty-two percent<br>"
    "<b>Resolution 79/249, 31 December 2024.</b></p>",
    "One of these can be read aloud down a telephone line without being misheard."))
S["g08-f13"]=lambda: f_realia(tbl("","All figures below are from: ______________________",
    ["The item","The figure","The figure in words"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>Source:</b> ______________________ &nbsp;&nbsp; "
    "<b>Date:</b> ______________"), 540)
S["g08-f14"]=lambda: f_scene(980,440,
    people=[("omar",110,176,{}),("bah",230,172,{"seated":True}),
     ("nadia",300,172,{"seated":True}),("hana",370,172,{"seated":True}),
     ("samira",440,172,{"seated":True}),("ahmad",510,172,{"seated":True}),
     ("yusuf",580,172,{"seated":True}),("linh",680,170,{}),("ida",750,172,{}),
     ("karin",820,170,{}),("lucia",890,172,{}),("oskar",945,174,{}),
     ("caruso",40,176,{})],
    props=[("spreadsheet",150,54,0.66),("table",240,0,1.4),("calculator",700,196,0.34),
     ("statement",780,194,0.36),("flipchart",870,60,0.7),("door",620,70,0.8)],
    clockat=(400,40,22,11,0))
S["g08-f15"]=lambda: f_chart([("with a point",9),("with a comma",6),("both",4),
    ("I had not thought about it",3),("no decimals at work",1)])
S["g08-f16"]=lambda: f_scene(880,400,
    props=[("desk",250,0,1.4),("note",320,190,0.36),("invoice",410,192,0.38),
     ("spreadsheet",560,80,0.68),("calculator",700,196,0.34)],
    clockat=(120,46,22,17,20), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 9 · The Email ----------------
S["g09-f1"]=lambda: f_icons([("email","the subject line"),("folder","an attachment"),
    ("messages","the copy field"),("essay","three numbered points"),
    ("clock","sent at 09:40"),("waitscreen","the inbox"),
    ("printer","printed out"),("refnumber","a document symbol"),
    ("archive","a folder on screen"),("arm","the send button")], cols=5)
S["g09-f2"]=lambda: f_scene(920,420, people=[("nadia",300,172,{}),
     ("omar",560,176,{"seated":True})],
    props=[("desk",230,0,1.2),("computer",300,142,0.5),("desk",500,0,1.2),
     ("computer",580,142,0.5),("email",700,194,0.4),("window",830,56,1.0)],
    clockat=(130,46,22,12,0))
S["g09-f3"]=lambda: f_icons([("essay","for action: one name"),("messages","for information: four"),
    ("folder","an attachment"),("worried","no subject line"),
    ("transfer","forwarded four times"),("speechbubble","a one-line reply")], cols=3)
S["g09-f4"]=lambda: f_realia(tbl("","Subject lines we actually send",
    ["The subject line","For action or for information","Could I find it in a year?"],
    [["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="<b>Our new rule:</b>"), 560)
S["g09-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 9 &middot; reading a document symbol",
    "<p style='font-size:21px;letter-spacing:1px'><b>A &nbsp;/ &nbsp;RES &nbsp;/ &nbsp;79 "
    "&nbsp;/ &nbsp;249</b></p>"
    "<p style='font-size:12px;color:#6b6861'>the organ &nbsp;&middot;&nbsp; the kind of text "
    "&nbsp;&middot;&nbsp; the session &nbsp;&middot;&nbsp; the number</p>"
    + table_html(["Begins","What it is"],
      [["<b>A/</b>","General Assembly"],["<b>S/</b>","Security Council"],
       ["<b>A/RES/</b>","a resolution of the Assembly"],
       ["<b>/Add.</b>","an <b>addendum</b>: something added later"],
       ["<b>/Corr.</b>","a <b>corrigendum</b>: something corrected later"]])
    + "<p style='border:1px solid #d9d4c9;padding:8px'><b>A perfect citation can be the wrong "
    "document.</b> A symbol quoted exactly, with no revision, no <i>/Add.</i> and no "
    "<i>/Corr.</i>, can point at a text that has been superseded. Give the <b>symbol</b>, the "
    "<b>date</b> and the <b>revision</b>. Two of the three are not enough.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: United Nations document symbols.</p>"))
S["g09-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["add","an addendum"],["correct","a correction"],["inform","information"],
     ["attach","an attachment"],["revise",""],["circulate",""]]), 440)
S["g09-f7"]=lambda: f_process(["A/RES/79/249 (31 Dec 2024)","A/RES/79/249/Add.1",
    "A/RES/79/249/Corr.1","three symbols, three documents"])
S["g09-f8"]=lambda: f_icons([("worried","(no subject)"),("essay","three parts"),
    ("folder","a paperclip"),("address","one name in To"),
    ("messages","five names in Copy"),("note","for information")], cols=3)
S["g09-f9"]=lambda: f_realia(doc("Internal message &middot; printed for the file", None,
    "<p><b>Subject:</b> Note of 2 March &middot; Astrand &middot; <b>reply needed by Thu 16:00"
    "</b><br>"
    "<b>To:</b> N. Shaheen<br>"
    "<b>Copy:</b> S. Barakat, L. Bahri, H. Darwish, A. Rifai</p>"
    "<p><b>The attachment is the draft reply, two pages.</b></p>"
    "<p><b>1.</b> Translation returned the note this morning. It is attached.<br>"
    "<b>2.</b> One term is still open: <i>competent authority</i> in paragraph 4. Legal Affairs "
    "(ext. 611) is checking it.<br>"
    "<b>3.</b> Registry has file 2026/118 back on the shelf.</p>"
    "<p><b>Please reply by Thursday 5 March, 16:00.</b> If I have nothing by then I will send "
    "the draft as it stands and say so.</p>",
    "Subject line in three parts, one name in To, the attachment named in the first line."))
S["g09-f10"]=lambda: f_scene(940,430, people=[("nadia",320,172,{}),
     ("omar",580,176,{"seated":True})],
    props=[("desk",250,0,1.2),("computer",320,142,0.5),("desk",520,0,1.2),
     ("computer",600,142,0.5),("refnumber",700,196,0.34),("email",760,194,0.36),
     ("window",860,56,0.95)], clockat=(140,46,22,12,0))
S["g09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Email A", None,
        "<p><b>Subject:</b> <i>(none)</i><br><b>To:</b> nine names<br><b>Copy:</b> &mdash;</p>"
        "<p>See attached.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Email B", None,
        "<p><b>Subject:</b> Note of 2 March &middot; Astrand &middot; reply by Thu 16:00<br>"
        "<b>To:</b> N. Shaheen<br>"
        "<b>Copy:</b> S. Barakat, L. Bahri, H. Darwish, A. Rifai</p>"
        "<p><b>The attachment is the draft reply, two pages.</b></p>"), w)[0:3],
    w=920, h=300)
S["g09-f12"]=lambda: f_realia(doc("Two messages", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Message 1</b><br>"
    "<b>Subject:</b> Astrand<br>"
    "Following our conversation please find the position as discussed and we should probably "
    "decide about the term in paragraph four at some point soon.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Message 2</b><br>"
    "<b>Subject:</b> Note of 2 March &middot; Astrand &middot; reply by Thu 16:00<br>"
    "<b>The attachment is the draft reply, two pages.</b><br>"
    "<b>1.</b> Translation returned it this morning.<br>"
    "<b>2.</b> <i>Competent authority</i>, paragraph 4, is with Legal Affairs.<br>"
    "<b>3.</b> File 2026/118 is back on the shelf.<br>"
    "<b>Please reply by Thursday 5 March, 16:00.</b></p>",
    "One of these is findable in a year. The other is findable only by the person who sent it."))
S["g09-f13"]=lambda: f_realia(form("Message planner",
    [("Subject, part 1: what",""),("Subject, part 2: which date or reference",""),
     ("Subject, part 3: what the reader must do",""),
     ("To (for action)",""),("Copy (for information)",""),
     ("1",""),("2",""),("3","")]), 520)
S["g09-f14"]=lambda: f_scene(980,440,
    people=[("omar",110,176,{"seated":True}),("nadia",190,172,{"seated":True}),
     ("hana",270,172,{"seated":True}),("samira",350,172,{"seated":True}),
     ("bah",430,172,{"seated":True}),("ahmad",520,170,{}),("yusuf",590,172,{}),
     ("linh",680,170,{}),("ida",750,172,{}),("karin",820,170,{}),
     ("lucia",890,172,{}),("oskar",945,174,{}),("caruso",40,176,{})],
    props=[("desk",80,0,1.1),("computer",150,142,0.44),("printer",560,198,0.44),
     ("board",700,40,0.72),("window",880,56,0.9),("cafe",830,200,0.4),
     ("folder",470,190,0.3)], clockat=(300,40,22,12,0))
S["g09-f15"]=lambda: f_chart([("sometimes a date",8),("always a date",6),
    ("the word urgent",4),("no deadline at all",3),("I do not send messages",1)])
S["g09-f16"]=lambda: f_scene(880,400,
    props=[("desk",250,0,1.4),("computer",330,140,0.52),("magnifier",430,190,0.32),
     ("email",500,194,0.36),("note",600,120,0.28),("board",720,52,0.66)],
    clockat=(120,46,22,16,10), panelbg="#242c38", floorbg="#30394a")
