# -*- coding: utf-8 -*-
"""Foreign Service English Book 1 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["g00-f1"]=lambda: f_realia(tbl("Six things you already have","One example each from a working day",
    ["What you have","An example at the ministry"],
    [["The verb <i>be</i>","I <b>am</b> the new third secretary."],
     ["Questions with <i>be</i>","<b>Are</b> you the duty officer?"],
     ["<i>Wh-</i> questions","<b>Which</b> floor is Registry on?"],
     ["Numbers","Extension two one four."],
     ["Dates","The fourth of March, two thousand and twenty-six."],
     ["The alphabet","B for Barakat, A, R, A, K, A, T."]],
    note="Six boxes. Almost everything in Unit 1 is built from these."), 560)
S["g00-f2"]=lambda: f_realia(doc("A pad beside the telephone", None,
    "<p style='font-size:19px;letter-spacing:1px'><b>SABBAGH</b></p>"
    "<p style='font-size:15px;letter-spacing:3px;color:#6b6861'>S &nbsp; A &nbsp; B &nbsp; B "
    "&nbsp; A &nbsp; G &nbsp; H</p>"
    "<p style='font-size:17px'>Extension <b>214</b> &nbsp;&mdash;&nbsp; two one four</p>",
    "The name, then the name spelled, then the number in digits and in words."), 460)
S["g00-f3"]=lambda: f_realia(doc("Taped inside a notebook cover", "Four habits for the first week",
    "<p style='font-size:16px;line-height:1.95'>"
    "<b>1 &nbsp;Say it so the other person can write it.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>&ldquo;Sabbagh. S, A, B, B, A, G, H.&rdquo;</span><br>"
    "<b>2 &nbsp;Write down who asked, what, and when.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>&ldquo;Ms Lindholm, Embassy of Astrand, "
    "11:40, about the note of 2 March.&rdquo;</span><br>"
    "<b>3 &nbsp;Say what you do not know.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>&ldquo;I don&rsquo;t know. I&rsquo;ll find out "
    "and call you back by four.&rdquo;</span><br>"
    "<b>4 &nbsp;Never guess a rule out loud.</b><br>"
    "<span style='font-size:13px;color:#6b6861'>A guessed rule is quoted back to you as the "
    "ministry&rsquo;s position.</span></p>",
    "Four rules. The fourth one is the one that costs the most."), 520)
S["g00-f4"]=lambda: f_icons([("speechbubble","“Floor three.”"),
    ("worried","“I think it’s three?”"),
    ("clock","“I don’t know. I’ll call you by four.”")], cols=3)

# ---------------- Unit 1 · The Building ----------------
S["g01-f1"]=lambda: f_icons([("desk","reception"),("lift","a lift"),("corner","a corridor"),
    ("shelf","a shelf of files"),("country","a flag outside"),("stamp","a stamp"),
    ("meeting","a meeting room"),("postoffice","the post room"),("barrier","a barrier"),
    ("stairwell","a staircase")], cols=5)
S["g01-f2"]=lambda: f_scene(940,430, behind=[("ahmad",700,172,{}),("yusuf",780,168,{})],
    people=[("omar",330,176,{})],
    counter_=(640,228,220,112), on_counter=[("notebook",690,0.42),("phone",790,0.38)],
    board=(90,40,230,170,"FLOORS",[("8","Minister's Office"),("7","Policy Planning"),
        ("6","Legal Affairs"),("5","Europe Dept"),("4","Protocol"),("3","Consular Affairs"),
        ("2","Registry"),("1","Translation"),("G","Reception")]),
    props=[("barrier",420,0,0.8),("idcard",360,150,0.4)], clockat=(500,48,22,9,5))
S["g01-f3"]=lambda: f_icons([("desk","at reception"),("archive","carrying files"),
    ("phone","two telephones at once"),("stamp","a stamp in one hand"),
    ("country","beside the flagpole"),("chair","a jacket on the chair")], cols=3)
S["g01-f4"]=lambda: f_realia(tbl("","Our building, floor by floor",
    ["Floor","Department","One note"],
    [["8","",""],["7","",""],["6","",""],["5","",""],["4","",""],
     ["3","",""],["2","",""],["1","",""],["G","",""]],
    note="<b>The floor I will be asked about most:</b>"), 520)
S["g01-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Induction note 1 &middot; the building and the law",
    "<p>Three articles of the <b>Vienna Convention on Diplomatic Relations, 1961</b>, in plain "
    "English.</p>"
    + table_html(["Article","What it says"],
      [["<b>Art. 1</b>","the words: <i>mission</i>, <i>head of mission</i>, <i>premises</i>"],
       ["<b>Art. 22</b>","the premises of a mission are <b>inviolable</b>"],
       ["<b>Art. 29</b>","the person of a diplomatic agent is <b>inviolable</b>"]])
    + "<p><b>193 states are parties</b> to the Convention.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: Vienna Convention on Diplomatic Relations, "
    "1961, and the depositary's status table. The number of parties is the number on the day the "
    "table was published; it is not the number of states in the world.</p>",
    "This building is not a mission. The Convention is about the other side of the relationship."))
S["g01-f6"]=lambda: f_realia(tbl("Word study","One word, two forms",
    ["Thing","Person or adjective"],
    [["diplomacy","a diplomat"],["protocol","a protocol officer"],["a consulate","a consul"],
     ["law","legal"],["administration",""],["translation",""]]), 460)
S["g01-f7"]=lambda: f_chart([("1961 (signed)",2),("1970s",120),("1990s",175),("today",193)],
    unit="states parties")
S["g01-f8"]=lambda: f_icons([("lift","the lift buttons"),("door","room 412"),
    ("signpost","an arrow sign"),("stairwell","the stairs"),
    ("shutter","closed at three"),("desk","the visitor book")], cols=3)
S["g01-f9"]=lambda: f_realia(tbl("Entrance hall &middot; ground floor","Where everything is",
    ["Floor","Department","Note"],
    [["<b>8</b>","Minister's Office","by appointment only"],
     ["<b>7</b>","Policy Planning","&mdash;"],
     ["<b>6</b>","Legal Affairs","ext. 611"],
     ["<b>5</b>","Europe Department","rooms 501&ndash;518"],
     ["<b>4</b>","Protocol","accreditation: room 412"],
     ["<b>3</b>","Consular Affairs","<b>counter closed at 15:00</b>"],
     ["<b>2</b>","Registry","files by written request"],
     ["<b>1</b>","Translation Unit","&mdash;"],
     ["<b>G</b>","Reception and security","visitors sign in here"]],
    note="<b>Duty officer, outside office hours: extension 100.</b>"), 540)
S["g01-f10"]=lambda: f_scene(920,430, behind=[("ahmad",660,172,{})],
    people=[("karin",430,172,{}),("omar",230,176,{})],
    counter_=(600,228,230,112), on_counter=[("notebook",650,0.42),("phone",760,0.38)],
    board=(80,40,230,170,"FLOORS",[("8","Minister's Office"),("7","Policy Planning"),
        ("6","Legal Affairs"),("5","Europe Dept"),("4","Protocol"),("3","Consular Affairs"),
        ("2","Registry"),("1","Translation"),("G","Reception")]),
    props=[("folder",390,190,0.42),("passport",470,192,0.38),("notebook",180,180,0.36)])
S["g01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Board A", None, ["Department"],
        [["Minister's Office"],["Legal Affairs"],["Europe Department"],["Protocol"],
         ["Consular Affairs"],["Registry"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Board B", None, ["Floor","Department","Room"],
        [["8","Minister's Office","801"],["6","Legal Affairs","611"],
         ["5","Europe Department","501&ndash;518"],["4","Protocol","412"],
         ["3","Consular Affairs","closes 15:00"],["2","Registry","201"]]), w)[0:3],
    w=940, h=330)
S["g01-f12"]=lambda: f_realia(doc("Two reception notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>Ms Lindholm came.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>11:40</b> &nbsp; Ms Karin Lindholm, <b>Embassy of Astrand</b><br>"
    "Asked for: Europe Department, floor 5<br>"
    "Wanted: an answer to the note of 2 March<br>"
    "I did: telephoned ext. 512, no reply; took her card; said somebody will call by 16:00.</p>",
    "One of these can be acted on by somebody who was not there."))
S["g01-f13"]=lambda: f_realia(form("Reception note",
    [("Time",""),("Name",""),("Organization",""),("Who they want",""),
     ("What they asked for","")], note="<b>What I did:</b>"), 480)
S["g01-f14"]=lambda: f_scene(980,440,
    behind=[("ahmad",740,172,{}),("yusuf",820,168,{})],
    people=[("karin",640,172,{}),("lucia",180,172,{"seated":True}),
     ("linh",255,176,{"seated":True}),("ida",330,172,{"seated":True}),
     ("omar",420,176,{}),("hana",480,172,{}),("caruso",560,180,{}),
     ("nadia",900,170,{}),("samira",940,172,{})],
    counter_=(700,228,230,112), on_counter=[("notebook",750,0.4),("phone",850,0.36)],
    board=(50,38,200,172,"FLOORS",[("8","Minister"),("7","Policy"),("6","Legal"),
        ("5","Europe"),("4","Protocol"),("3","Consular"),("2","Registry"),
        ("1","Translation"),("G","Reception")]),
    props=[("chair",160,0,0.7),("folder",300,196,0.38),("suitcase",600,0,0.55),
     ("lift",950,100,1.0)], clockat=(400,46,22,9,10))
S["g01-f15"]=lambda: f_chart([("4 to 6 floors",8),("2 to 3 floors",6),("7 to 10",4),
    ("one floor",3),("more than 10",2)])
S["g01-f16"]=lambda: f_scene(860,400, people=[("ida",300,172,{"smile":False})],
    props=[("door",430,70,0.95),("note",470,120,0.3),("chair",600,0,0.75),
     ("folder",260,188,0.4),("phone",340,180,0.3)],
    window_=(720,56,110,96), clockat=(120,46,22,14,25))

# ---------------- Unit 2 · Your Desk, Your Day ----------------
S["g02-f1"]=lambda: f_icons([("clock","eight o'clock"),("idcard","a staff card"),
    ("tray","incoming"),("tray","outgoing"),("jug","tea on the desk"),
    ("folder","for signature"),("calendar","the wall calendar"),("door","do not disturb"),
    ("bag","the end of the day"),("cafe","two people with cups")], cols=5)
S["g02-f2"]=lambda: f_scene(920,420,
    people=[("omar",260,176,{"seated":True}),("nadia",470,172,{"seated":True})],
    props=[("desk",180,0,1.3),("tray",250,200,0.45),("phone",330,204,0.34),
     ("desk",420,0,1.3),("essay",490,196,0.46),("computer",620,146,0.5),
     ("shelf",780,90,0.8)], clockat=(120,46,22,8,20))
S["g02-f3"]=lambda: f_count([("day",7,"every day"),("day",5,"five days"),
    ("day",2,"twice a week"),("day",1,"once a week")])
S["g02-f4"]=lambda: f_realia(tbl("","My day, hour by hour",
    ["Time","What I do"],
    [["08:00",""],["09:30",""],["11:00",""],["13:00",""],["14:30",""],["16:00",""]],
    note="<b>The busiest hour:</b>"), 440)
S["g02-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 2 &middot; which language, where",
    "<p><b>The six official languages of the General Assembly</b></p>"
    + table_html(["", ""],
      [["Arabic","English"],["Chinese","French"],["Russian","Spanish"]])
    + table_html(["When","What happened"],
      [["<b>18 December 1973</b>","resolution 3190 (XXVIII): Arabic made an official and "
        "working language of the General Assembly"],
       ["<b>1982</b>","Security Council resolution 528 (1982): Arabic made an official and "
        "working language of the Council"]])
    + "<p style='border:1px solid #d9d4c9;padding:8px'><b>Not the same thing.</b> The "
    "<b>Secretariat</b> has <b>two</b> working languages. They are English and French. A "
    "language can be official in one organ and not be one of those two. Check which word you "
    "need before you write.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: General Assembly resolution 3190 (XXVIII), "
    "18 December 1973; Security Council resolution 528 (1982). Nine years apart. Two organs. "
    "Two separate votes.</p>"))
S["g02-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["translate","a translation"],["interpret","an interpreter"],["sign","a signature"],
     ["adopt","adoption"],["circulate",""],["instruct",""]]), 440)
S["g02-f7"]=lambda: f_timeline([(0.04,"1945","Charter: five languages"),
    (0.62,"1973","General Assembly"),(0.82,"1982","Security Council")], 0.82, w=620)
S["g02-f8"]=lambda: f_icons([("today","today"),("calendar","two days a week"),
    ("month","once a month"),("clock","two hours apart"),("tray","emptied"),
    ("day","not Saturday")], cols=3)
S["g02-f9"]=lambda: f_realia(tbl("Consular Affairs &middot; duty rota","Week of 2 March",
    ["","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    [["Morning","Samira","Samira","Omar","Omar","Samira","Ahmad","&mdash;"],
     ["Afternoon","Omar","Hana","Hana","Samira","Omar","&mdash;","&mdash;"],
     ["Night","Yusuf","Yusuf","<b>(empty)</b>","Yusuf","<b>(empty)</b>","Yusuf","Yusuf"]],
    note="<b>Night duty officer: extension 100.</b> Two boxes are empty. Somebody has to ask."),
    560)
S["g02-f10"]=lambda: f_scene(900,420,
    people=[("omar",300,176,{"seated":True}),("nadia",370,172,{})],
    props=[("desk",230,0,1.35),("essay",310,196,0.46),("tray",400,200,0.42),
     ("tray",470,200,0.42),("timetable",640,80,0.7),("shelf",800,90,0.8)],
    clockat=(130,46,22,8,10))
S["g02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Timetable A", None, ["Time","What I do"],
        [["08:00",""],["09:30",""],["11:00",""],["13:00",""],["16:00",""]]), w)[0:3],
    lambda w,h: f_realia(tbl("Timetable B", None, ["Time","What I do"],
        [["08:00","trays, <b>every day</b>"],["09:30","telephone duty"],
         ["11:00","counter"],["13:00","translation queue, <b>every day</b>"],
         ["16:00","handover note"]]), w)[0:3],
    w=900, h=300)
S["g02-f12"]=lambda: f_realia(doc("Two handover notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Astrand called. Translation is slow. Nothing else.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>09:20</b> Embassy of Astrand (Ms Lindholm, ext. 4412) asked about the note of 2 March.<br>"
    "<b>11:05</b> Translation Unit: the note is with them, back <b>Monday</b>.<br>"
    "<b>13:40</b> Consulate of Perenne confirmed Thursday 10:00.<br>"
    "<b>15:10</b> Registry: file 2026/118 is out with Legal Affairs.<br>"
    "<b>16:00</b> <b>For tomorrow:</b> call Ms Lindholm before 11:00.</p>",
    "Five lines, each with a time. The person coming in can start without asking you anything."))
S["g02-f13"]=lambda: f_realia(form("Handover note",
    [("__:__",""),("__:__",""),("__:__",""),("__:__",""),("__:__","")],
    note="<b>For tomorrow:</b> ______________________ &nbsp;&nbsp; "
    "<b>Still open:</b> ______________________"), 500)
S["g02-f14"]=lambda: f_scene(980,440,
    people=[("omar",140,176,{"seated":True}),("hana",220,172,{"seated":True}),
     ("samira",300,172,{"seated":True}),("nadia",380,172,{"seated":True}),
     ("yusuf",470,170,{}),("ahmad",540,172,{}),("bah",630,172,{}),
     ("linh",730,170,{}),("ida",790,172,{}),("caruso",870,180,{}),
     ("karin",930,172,{}),("lucia",960,170,{}),("oskar",60,174,{})],
    props=[("desk",110,0,1.2),("tray",190,200,0.4),("printer",490,200,0.5),
     ("door",660,72,0.9),("timetable",820,60,0.6),("cafe",760,200,0.5),
     ("chair",40,0,0.7),("note",300,150,0.26)], clockat=(420,44,22,16,0))
S["g02-f15"]=lambda: f_chart([("eight to nine",9),("seven to eight",6),
    ("after nine",4),("before seven",2),("it changes",2)])
S["g02-f16"]=lambda: f_scene(860,400,
    props=[("desk",250,0,1.4),("folder",320,190,0.46),("tray",400,200,0.42),
     ("calendar",520,110,0.55),("note",300,146,0.28),("door",700,74,0.9)],
    clockat=(120,46,22,18,40), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 3 · At the Counter ----------------
S["g03-f1"]=lambda: f_icons([("passport","a passport"),("barcode","the machine-readable line"),
    ("stamp","a date stamp"),("sim","a chip"),("ticket","a visa sticker"),
    ("desk","the counter"),("magnifier","small print"),("ticketmachine","take a number"),
    ("printer","the photocopier"),("handshake","returning a document")], cols=5)
S["g03-f2"]=lambda: f_scene(920,420, behind=[("samira",640,172,{})],
    people=[("caruso",430,176,{}),("linh",250,172,{}),("ida",180,170,{}),("oskar",120,174,{})],
    counter_=(580,228,240,112), on_counter=[("passport",630,0.4),("scanner",740,0.4)],
    props=[("ticketmachine",860,100,0.6),("queue",330,186,0.5)], clockat=(480,46,22,11,0))
S["g03-f3"]=lambda: f_icons([("calendar","a date in the future"),("fine","a date in the past"),
    ("barcode","a machine-readable line"),("essay","no such line"),
    ("cut","a torn page"),("camera","a photograph that does not match")], cols=3)
S["g03-f4"]=lambda: f_realia(tbl("","Whose rule is it?",
    ["The rule people quote","Where it really comes from","Which part is true"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>What I say at the counter now:</b>"), 540)
S["g03-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Counter note 3 &middot; the passport and the standard",
    "<p style='border:1px solid #d9d4c9;padding:8px;font-size:16px'><b>24 November 2015.</b> "
    "After that date, every non-machine-readable passport had to have expired.</p>"
    + table_html(["Instrument","What it does"],
      [["<b>ICAO Annex 9, Std 3.10.1</b>","sets the machine-readable passport as the standard, "
        "with the 2015 date"],
       ["<b>ICAO Doc 9303</b>","says what the document must look like, line by line"],
       ["<b>National law</b>","decides how long <i>our</i> passport is valid"]])
    + "<p><b>What is not in any of them.</b> No ICAO instrument says a passport is valid for ten "
    "years, and none says another state must accept it with three months left. Those are "
    "<b>national</b> rules, made separately by each state, and the numbers differ.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: ICAO Annex 9, Standard 3.10.1 "
    "(24 November 2015); ICAO Doc 9303. A standard for the document is not a rule about its "
    "validity.</p>"))
S["g03-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["expire","expiry"],["issue","the date of issue"],["renew","renewal"],
     ["validate","validity"],["refuse",""],["confirm",""]]), 440)
S["g03-f7"]=lambda: f_timeline([(0.08,"24 Nov 2005","standard adopted"),(0.5,"ten years","transition period"),
    (0.92,"24 Nov 2015","all non-machine-readable passports expired")], 0.92, w=620)
S["g03-f8"]=lambda: f_icons([("passport","the data page"),("barcode","the MRZ line"),
    ("calendar","four months left"),("month","six months left"),
    ("book","Annex 9, Std 3.10.1"),("rights","national law")], cols=3)
S["g03-f9"]=lambda: f_realia(tbl("Consular Affairs &middot; counter card","Five checks, every time",
    ["#","The check","✓"],
    [["1","Is it machine-readable? (the two lines at the foot)",""],
     ["2","Is the expiry date in the future?",""],
     ["3","Does the photograph match the person?",""],
     ["4","Is every page there and undamaged?",""],
     ["5","Does the <i>other</i> state need validity beyond the return date? Whose rule is it?",""]],
    numcols=(0,),
    note="<b>If any box is empty, do not accept.</b> Legal Affairs ext. 611 &middot; "
    "duty officer ext. 100"), 560)
S["g03-f10"]=lambda: f_scene(940,430, behind=[("samira",620,172,{}),("omar",700,176,{})],
    people=[("caruso",420,176,{}),("ida",260,172,{}),("linh",190,170,{}),("oskar",120,174,{})],
    counter_=(560,228,250,112),
    on_counter=[("passport",610,0.4),("pen",700,0.34),("note",760,0.3)],
    props=[("ticketmachine",880,100,0.55),("queue",320,186,0.5)], clockat=(480,46,22,11,20))
S["g03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Card A", None,
        "<p style='font-size:17px'>The passport must be valid.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Card B", None, ["The check","Whose rule"],
        [["Machine-readable","ICAO Annex 9"],["Expiry in the future","ours"],
         ["Photograph matches","ours"],["All pages present","ours"],
         ["Validity beyond return date","<b>theirs &mdash; check it</b>"]]), w)[0:3],
    w=900, h=300)
S["g03-f12"]=lambda: f_realia(doc("Two counter slips", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Slip 1</b><br>"
    "Your passport is fine.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Slip 2</b><br>"
    "<b>1.</b> Your passport is machine-readable. That is the <b>ICAO</b> standard, "
    "Annex 9.<br>"
    "<b>2.</b> It expires on 14 August 2027. For <b>our</b> purposes that is in order.<br>"
    "<b>3.</b> Perenne may require validity beyond your return date. That is "
    "<b>their</b> rule, not ours. Ask their consulate.<br>"
    "<b>4 March 2026</b> &middot; Consular Affairs, ext. 214, 09:00&ndash;14:00</p>",
    "Three lines, three owners. Nobody can later say the ministry told them it was fine."))
S["g03-f13"]=lambda: f_realia(form("Counter slip",
    [("Your document",""),("Their rule",""),("Our rule",""),
     ("The thing people get wrong","")],
    note="Extension ____________ &nbsp;&nbsp; Open ____________"), 500)
S["g03-f14"]=lambda: f_scene(980,440,
    behind=[("samira",700,172,{}),("omar",780,176,{})],
    people=[("caruso",150,172,{"seated":True}),("ida",225,176,{"seated":True}),
     ("linh",300,172,{"seated":True}),("oskar",375,176,{"seated":True}),
     ("karin",460,170,{}),("lucia",530,172,{}),("nkemelu",610,174,{}),
     ("hana",880,170,{}),("nadia",940,172,{})],
    counter_=(660,228,240,112), on_counter=[("passport",710,0.38),("scanner",800,0.38)],
    props=[("chair",130,0,0.7),("ticketmachine",60,100,0.5),("printer",830,200,0.45),
     ("note",900,120,0.26)], clockat=(560,44,22,11,0))
S["g03-f15"]=lambda: f_chart([("I do not know",8),("ten years",6),
    ("it depends on your age",4),("five years",3),("we do not issue them",2)])
S["g03-f16"]=lambda: f_scene(880,400,
    props=[("desk",260,0,1.4),("note",330,190,0.34),("phone",420,200,0.34),
     ("computer",560,142,0.52),("chair",760,0,0.75),("chair",820,0,0.75)],
    clockat=(130,46,22,15,30), panelbg="#242c38", floorbg="#30394a")
