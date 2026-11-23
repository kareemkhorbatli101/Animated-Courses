# -*- coding: utf-8 -*-
"""Foreign Service English Book 1 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · The Form ----------------
S["g04-f1"]=lambda: f_icons([("form","a numbered form"),("essay","BLOCK CAPITALS"),
    ("calendar","day / month / year"),("signature","the signature line"),
    ("proof","a tick box"),("noentry","do not write here"),
    ("camera","the photograph corner"),("scissors","a stapler"),
    ("pen","a pen on a chain"),("note","black ink only")], cols=5)
S["g04-f2"]=lambda: f_scene(920,420, behind=[("samira",640,172,{})],
    people=[("caruso",430,176,{})],
    counter_=(580,228,250,112), on_counter=[("form",630,0.4),("pen",730,0.32)],
    props=[("form",390,196,0.42),("board",120,40,0.8)], clockat=(300,46,22,14,10))
S["g04-f3"]=lambda: f_icons([("essay","a name in the wrong box"),("worried","03/04?"),
    ("signature","signed in the wrong place"),("noentry","an empty box"),
    ("cut","crossed out in ink"),("fine","a torn corner")], cols=3)
S["g04-f4"]=lambda: f_realia(tbl("","The four boxes people get wrong",
    ["Box","What it is for","The mistake people make"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>One sentence that stops it:</b>"), 540)
S["g04-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Counter note 4 &middot; the apostille, and what it is not yet",
    "<p style='font-size:16px'><b>130 contracting parties</b> to the Apostille Convention "
    "of 1961.</p>"
    + table_html(["State","Deposited","In force for it"],
      [["Algeria","&mdash;","<b>9 July 2026</b>"],
       ["Viet Nam","&mdash;","<b>11 September 2026</b>"],
       ["Thailand","<b>30 June 2026</b>","<b>28 February 2027</b>"]])
    + "<p style='border:1px solid #d9d4c9;padding:8px'><b>What to say at the counter.</b> "
    "&ldquo;Thailand has joined. It is not in force for Thailand until "
    "<b>28 February 2027</b>. Until that date, full legalization is still required.&rdquo;</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: Apostille Convention, 1961, and the "
    "depositary's status table. <b>Joining is not entering into force.</b> A list of parties "
    "and a list of states the Convention operates for are two different lists.</p>"))
S["g04-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["sign","a signature"],["certify","a certificate"],["apply","an application"],
     ["accede","accession"],["legalize",""],["deposit",""]]), 440)
S["g04-f7"]=lambda: f_timeline([(0.06,"30 Jun 2026","Thailand deposits"),
    (0.20,"9 Jul 2026","Algeria starts"),(0.46,"11 Sep 2026","Viet Nam starts"),
    (0.94,"28 Feb 2027","Thailand starts")], 0.20, w=640)
S["g04-f8"]=lambda: f_icons([("calendar","day / month / year"),("month","the month in letters"),
    ("signature","signed and dated"),("noentry","for office use"),
    ("printer","the photocopier"),("scissors","two documents stapled")], cols=3)
S["g04-f9"]=lambda: f_realia(tbl("Form C-14 &middot; application for a document",
    "Twenty-two boxes. Four of them cause every error.",
    ["Box","What it is for","Note"],
    [["1&ndash;4","Surname, given names, former names","<b>BLOCK CAPITALS</b>"],
     ["<b>5</b>","Place of birth","town <i>and</i> country, not just the town"],
     ["6&ndash;8","Address, telephone, email",""],
     ["<b>9</b>","Date of birth","<b>month in letters</b>"],
     ["10&ndash;14","Document requested, purpose, dates",""],
     ["<b>15</b>","Where the document will be used","this decides legalization"],
     ["16&ndash;20","Previous applications, attachments",""],
     ["<b>21</b>","Signature <i>and</i> date","two things, not one"],
     ["22","For office use","<b>do not write here</b>"]],
    note="<b>Black ink and block capitals.</b> Boxes 22 and the stamp panel are completed by "
    "this office."), 560)
S["g04-f10"]=lambda: f_scene(940,430, behind=[("omar",620,176,{})],
    people=[("karin",420,172,{})],
    counter_=(560,228,260,112),
    on_counter=[("form",610,0.4),("stamp",720,0.34),("pen",790,0.3)],
    props=[("form",380,196,0.42),("board",100,38,0.82)], clockat=(300,44,22,14,25))
S["g04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Sheet A", None, ["Instruction"],
        [["Use black ink."],["Use block capitals."],["Write the month in letters."],
         ["Sign and date box 21."],["Do not write in box 22."],["Attach a copy."],
         ["Do not staple the photograph."],["Complete box 15."]]), w)[0:3],
    lambda w,h: f_realia(tbl("Sheet B", None, ["Instruction","Why"],
        [["Use black ink.","it photocopies"],["Block capitals.","the name is spelled right"],
         ["Month in letters.","03/04 is two dates"],["Sign <i>and</i> date box 21.","two things"],
         ["<b>Do not</b> write in box 22.","the office needs it"],
         ["Attach a copy.","we keep the original"],
         ["<b>Do not</b> staple the photograph.","it tears"],
         ["Complete box 15.","it decides legalization"]]), w)[0:3],
    w=940, h=330)
S["g04-f12"]=lambda: f_realia(doc("Two instruction sheets", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Sheet 1</b><br>"
    "Please complete the form in full in black ink using capital letters and sign it and attach "
    "a copy of your passport and return it to the counter and remember the dates.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Sheet 2</b><br>"
    "<b>1.</b> Write in <b>black ink</b>, in <b>BLOCK CAPITALS</b>.<br>"
    "<b>2.</b> In box 9, write the month <b>in letters</b>: <i>4 March 2026</i>.<br>"
    "<b>3. Do not</b> write in box 22. That box is ours.<br>"
    "<b>4. Do not</b> staple the photograph. Use the clip.<br>"
    "<b>Two dates:</b> the date you sign (box 21) and the date you need the document (box 13). "
    "They are different boxes.</p>",
    "Four numbered lines, two of them negative. One of these can be followed standing up."))
S["g04-f13"]=lambda: f_realia(form("Instruction planner",
    [("1",""),("2",""),("3",""),("4",""),("5","")],
    note="<b>Do not write here:</b> ____________ &nbsp;&nbsp; "
    "<b>If it is going abroad:</b> ____________"), 500)
S["g04-f14"]=lambda: f_scene(980,440, behind=[("samira",700,172,{}),("omar",780,176,{})],
    people=[("karin",150,172,{}),("lucia",220,170,{}),("linh",290,172,{}),
     ("ida",390,176,{}),("caruso",460,180,{}),("oskar",540,174,{}),
     ("hana",870,170,{}),("nadia",930,172,{}),("ahmad",60,174,{})],
    counter_=(640,228,250,112), on_counter=[("form",690,0.38),("stamp",790,0.32)],
    props=[("desk",130,0,1.1),("form",200,186,0.34),("printer",830,200,0.45),
     ("board",330,34,0.7),("chair",30,0,0.7),("pen",80,186,0.26)],
    clockat=(580,42,22,14,0))
S["g04-f15"]=lambda: f_chart([("day-month-year",9),("month in letters",5),
    ("month-day-year",4),("it depends",3),("year-month-day",1)])
S["g04-f16"]=lambda: f_scene(880,400,
    props=[("shelf",120,80,0.9),("desk",360,0,1.4),("form",430,190,0.44),
     ("email",540,196,0.42),("folder",650,194,0.4),("archive",780,180,0.5)],
    clockat=(120,46,22,16,50), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 5 · The Telephone ----------------
S["g05-f1"]=lambda: f_icons([("phone","a desk telephone"),("headset","the switchboard"),
    ("note","a message pad"),("pen","a pen over the pad"),
    ("waitscreen","on hold"),("transfer","transferring"),("signal","engaged"),
    ("country","+ three digits"),("messages","a mobile"),("clock","a time beside a name")],
    cols=5)
S["g05-f2"]=lambda: f_scene(920,420, people=[("yusuf",280,176,{"seated":True})],
    props=[("desk",210,0,1.3),("headset",290,196,0.4),("note",370,200,0.34),
     ("timetable",560,70,0.65),("window",760,56,1.0),("chair",830,0,0.75)],
    clockat=(130,46,22,10,5))
S["g05-f3"]=lambda: f_icons([("clock","the time"),("essay","the name"),
    ("country","the organization"),("phone","the number"),
    ("speechbubble","the message"),("proof","will call back")], cols=3)
S["g05-f4"]=lambda: f_realia(form("Design your own message pad",
    [("1",""),("2",""),("3",""),("4",""),("5",""),("6","")],
    note="<b>The line everybody forgets:</b>"), 480)
S["g05-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 5 &middot; two memberships, two numbers",
    "<p style='font-size:22px'><b>193</b> &nbsp;&nbsp;&nbsp; <b>194</b></p>"
    "<p style='font-size:13px;color:#6b6861'>United Nations member states &nbsp;&nbsp;&nbsp; "
    "ITU member states</p>"
    + table_html(["Body","Members","Note"],
      [["United Nations","<b>193</b>","member states"],
       ["International Telecommunication Union","<b>194</b>","member states"],
       ["ITU Council","<b>48</b>","elected from the membership"]])
    + "<p style='border:1px solid #d9d4c9;padding:8px'><b>Why the two numbers differ.</b> "
    "They are <b>two separate memberships of two separate organizations</b>. Neither number is "
    "a misprint, and the difference is not a disagreement about how many countries exist.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: ITU membership; ITU-T Recommendation "
    "E.164 for country codes. A country code is not a country: some states share one and some "
    "territories have their own.</p>"))
S["g05-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["call","a caller"],["telephone","a telephone call"],["transfer","a transfer"],
     ["answer","an answer"],["hold",""],["ring back",""]]), 440)
S["g05-f7"]=lambda: f_chart([("ITU member states",194),("UN member states",193),
    ("ITU Council",48)], unit="members")
S["g05-f8"]=lambda: f_icons([("clock","11:40"),("essay","LINDHOLM"),
    ("country","Embassy of Astrand"),("phone","04 412 88 10"),
    ("quotemark","one sentence"),("transfer","desk to desk")], cols=3)
S["g05-f9"]=lambda: f_realia(form("Message",
    [("Time","<b>11:40</b>, Wednesday 4 March"),
     ("Caller","Ms Karin <b>LINDHOLM</b> &nbsp; (L, I, N, D, H, O, L, M)"),
     ("Organization","Embassy of <b>Astrand</b>"),
     ("Number","<b>04 412 88 10</b>, extension <b>19</b>"),
     ("Message","Asks whether the note of 2 March has gone to Translation. "
      "Needs an answer <b>before 16:00 today</b>."),
     ("Action","<b>Nadia Shaheen</b> &rarr; <b>Omar Sabbagh</b> to call back by 15:30")],
    note="&#9745; <b>read back to caller</b>"), 540)
S["g05-f10"]=lambda: f_scene(940,420, people=[("yusuf",300,176,{"seated":True})],
    props=[("desk",230,0,1.3),("headset",310,196,0.4),("note",390,200,0.34),
     ("pen",450,202,0.26),("timetable",580,66,0.68),("window",770,56,1.0),
     ("chair",840,0,0.75),("coat",880,120,0.4)],
    clockat=(140,46,22,10,20))
S["g05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(form("Pad A",
        [("Name","Lindholm"),("Message","Called about the note")]), w)[0:3],
    lambda w,h: f_realia(form("Pad B",
        [("Time","11:40"),("Caller","Ms Karin LINDHOLM"),
         ("Organization","Embassy of Astrand"),("Number","04 412 88 10 ext 19"),
         ("Message","Has the note of 2 March gone to Translation?"),
         ("Action","Nadia &rarr; Omar, call back by 15:30")]), w)[0:3],
    w=940, h=330)
S["g05-f12"]=lambda: f_realia(doc("Two message slips", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Slip 1</b><br>"
    "Astrand called. Call back.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Slip 2</b><br>"
    "<b>11:40</b> &middot; Ms Karin <b>LINDHOLM</b>, Embassy of Astrand<br>"
    "<b>04 412 88 10</b>, ext. <b>19</b><br>"
    "Asks whether the note of 2 March has gone to Translation.<br>"
    "Needs an answer <b>before 16:00 today</b>.<br>"
    "<b>Nadia Shaheen &rarr; Omar Sabbagh</b>, call back by 15:30.<br>"
    "&#9745; read back to caller</p>",
    "One of these can be acted on by somebody who did not take the call."))
S["g05-f13"]=lambda: f_realia(form("Message",
    [("Time",""),("Caller",""),("Organization",""),("Number",""),("Message",""),
     ("Action","")],
    note="&#9744; read back to caller"), 500)
S["g05-f14"]=lambda: f_scene(980,440,
    people=[("yusuf",120,176,{"seated":True}),("ahmad",200,176,{"seated":True}),
     ("omar",300,172,{"seated":True}),("samira",380,172,{"seated":True}),
     ("hana",460,172,{"seated":True}),("nadia",550,170,{}),("bah",630,172,{}),
     ("linh",720,170,{}),("ida",790,172,{}),("karin",860,170,{}),
     ("lucia",930,172,{}),("oskar",50,174,{}),("caruso",960,176,{})],
    props=[("desk",90,0,1.15),("headset",170,196,0.34),("phone",330,200,0.3),
     ("timetable",650,56,0.6),("printer",800,200,0.44),("window",900,56,0.9),
     ("cafe",760,202,0.44)], clockat=(500,42,22,10,0))
S["g05-f15"]=lambda: f_chart([("six to twenty",8),("one to five",6),
    ("twenty-one to fifty",4),("more than fifty",3),("none",2)])
S["g05-f16"]=lambda: f_scene(860,400,
    props=[("desk",280,0,1.4),("note",340,190,0.34),("note",410,190,0.34),
     ("phone",500,200,0.34),("calendar",620,110,0.55)],
    clockat=(130,46,22,8,45), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 6 · The Registry ----------------
S["g06-f1"]=lambda: f_icons([("shelf","a shelf of box files"),("folder","a file number"),
    ("archive","the card index"),("tray","a trolley of files"),
    ("logsheet","the sign-out book"),("square","a gap on the shelf"),
    ("pen","writing a label"),("padlock","a locked cabinet"),
    ("stamp","COPY"),("arm","the high shelf")], cols=5)
S["g06-f2"]=lambda: f_scene(940,430, people=[("hana",260,172,{"seated":True}),
     ("omar",600,176,{})],
    props=[("desk",190,0,1.3),("logsheet",270,196,0.4),("shelf",450,80,0.9),
     ("shelf",700,80,0.9),("shelf",850,80,0.9),("square",760,120,0.3)],
    clockat=(120,46,22,14,40), panelbg="#2b2f33")
S["g06-f3"]=lambda: f_icons([("shelf","on the shelf"),("essay","under a pile"),
    ("archive","behind another box"),("folder","between two boxes"),
    ("cupboard","next to the cabinet"),("window","in front of the window")], cols=3)
S["g06-f4"]=lambda: f_realia(tbl("","Where things really are",
    ["The thing","Exactly where it is","Who knows"],
    [["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="<b>What happens when that person is away:</b>"), 540)
S["g06-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 6 &middot; the Treaty Series, and two different counts",
    "<p style='font-size:16px'><b>More than 158,000 treaties</b>, in <b>more than 3,000 "
    "volumes</b>.</p>"
    + table_html(["", "What it is"],
      [["<b>Charter, Art. 102</b>","every treaty entered into by a Member shall be registered "
        "with the Secretariat and published"],
       ["<b>United Nations Treaty Series</b>","the published collection"],
       ["<b>A treaty action</b>","a ratification, an accession, a reservation, a denunciation"]])
    + "<p style='border:1px solid #d9d4c9;padding:8px'><b>Two different counts.</b> One treaty "
    "can carry dozens of <b>actions</b>. A count of <b>treaties</b> and a count of "
    "<b>treaty actions</b> are not the same figure and must not be compared.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: United Nations Treaty Series; Charter of "
    "the United Nations, Article 102. Both numbers are called &ldquo;the number of "
    "treaties&rdquo; by somebody every week.</p>"))
S["g06-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["register","registration"],["sign","a signature"],["ratify","ratification"],
     ["accede","accession"],["publish",""],["file",""]]), 440)
S["g06-f7"]=lambda: f_chart([("treaty actions (all kinds)",260),
    ("treaties registered",158)], unit="thousands")
S["g06-f8"]=lambda: f_icons([("square","a gap on the shelf"),("logsheet","one line of handwriting"),
    ("archive","the card index"),("tray","four files on a trolley"),
    ("padlock","locked"),("folder","a label half torn off")], cols=3)
S["g06-f9"]=lambda: f_realia(tbl("Registry &middot; sign-out book","Page 44",
    ["File","Taken by","Department","Out","Back"],
    [["2026/104","N. Shaheen","Europe","2 Mar","4 Mar"],
     ["2026/118","L. Bahri","Legal Affairs","2 Mar","<b>&mdash;</b>"],
     ["2025/882","S. Barakat","Consular","3 Mar","3 Mar"],
     ["2026/121","A. Rifai","Protocol","3 Mar","4 Mar"],
     ["2024/310","L. Bahri","Legal Affairs","12 Feb","<b>&mdash; (circled)</b>"],
     ["2026/126","N. Shaheen","Europe","4 Mar","&mdash;"]],
    note="Two files are out with nothing in the last column. One has been out since February."),
    560)
S["g06-f10"]=lambda: f_scene(940,430, people=[("hana",250,172,{"seated":True}),
     ("omar",430,176,{})],
    props=[("desk",180,0,1.3),("logsheet",260,196,0.4),("folder",390,190,0.36),
     ("shelf",580,80,0.9),("square",640,118,0.3),("shelf",760,80,0.9),
     ("tray",870,194,0.44)], clockat=(110,46,22,14,40), panelbg="#2b2f33")
S["g06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Shelf diagram A", None, ["Shelf","What is on it"],
        [["5","boxes, boxes, <b>gap</b>, boxes"],["4","boxes"],
         ["3","boxes, <b>gap</b>"],["2","boxes"],["1","<b>gap</b>, boxes"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Shelf diagram B", None, ["Shelf","What is on it"],
        [["5","2026/101&ndash;110 &middot; <b>gap: 2026/118, Legal, 2 Mar</b>"],
         ["4","2026/111&ndash;120"],
         ["3","2025/870&ndash;890 &middot; <b>gap: 2024/310, Legal, 12 Feb</b>"],
         ["2","2025/891&ndash;910"],
         ["1","<b>gap: 2026/126, Europe, 4 Mar</b> &middot; 2026/121&ndash;130"]]), w)[0:3],
    w=960, h=300)
S["g06-f12"]=lambda: f_realia(doc("Two file notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "File 2026/118 is missing.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>File:</b> 2026/118<br>"
    "<b>Where it should be:</b> Registry, shelf 5, between 2026/117 and 2026/119<br>"
    "<b>Signed out:</b> L. Bahri, Legal Affairs, 2 March<br>"
    "<b>Where it was:</b> room 611, on the window side of the second desk<br>"
    "<b>What I did:</b> telephoned ext. 611 at 14:45; agreed it comes back by 09:00 Thursday<br>"
    "<b>Open point:</b> the sign-out book has no return date for 2024/310 either</p>",
    "Nothing in this registry was lost. One thing was somewhere else and nobody had written "
    "it down."))
S["g06-f13"]=lambda: f_realia(form("Registry note",
    [("File",""),("Where it should be",""),("Signed out",""),("Where it was",""),
     ("What I did",""),("Open point","")]), 500)
S["g06-f14"]=lambda: f_scene(980,440,
    people=[("hana",110,172,{"seated":True}),("omar",210,176,{}),("ahmad",280,174,{}),
     ("samira",360,172,{"seated":True}),("nadia",430,172,{"seated":True}),
     ("bah",500,172,{"seated":True}),("yusuf",590,170,{}),("linh",660,172,{}),
     ("ida",730,170,{}),("karin",800,172,{}),("lucia",870,170,{}),
     ("oskar",930,174,{}),("caruso",960,176,{})],
    props=[("desk",80,0,1.1),("logsheet",150,196,0.34),("tray",250,196,0.4),
     ("shelf",550,70,0.8),("shelf",700,70,0.8),("archive",830,186,0.44),
     ("printer",900,198,0.42),("stairwell",20,70,0.7)],
    clockat=(460,40,22,14,30), panelbg="#2b2f33")
S["g06-f15"]=lambda: f_chart([("more than once",8),("once",5),
    ("I do not know",4),("never",3),("no paper files",2)])
S["g06-f16"]=lambda: f_scene(880,400,
    props=[("desk",250,0,1.4),("logsheet",320,190,0.4),("form",410,192,0.4),
     ("shelf",600,76,0.88),("square",650,116,0.28),("square",700,116,0.28),
     ("note",820,110,0.28)],
    clockat=(120,46,22,9,0), panelbg="#242c38", floorbg="#30394a")
