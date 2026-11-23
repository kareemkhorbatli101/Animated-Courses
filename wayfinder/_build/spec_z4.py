# -*- coding: utf-8 -*-
"""Book 6 figure specs, Units 10 to 12."""
from figgen import *
S={}

# ---------------- Unit 10 ----------------
S["z10-f1"]=lambda: f_icons([("microphone","a microphone"),("proof","one word underlined"),
    ("spotlight","a spotlight on one chair"),("essay","a bold line"),
    ("quotemark","a pulled quotation"),("inventory","pointing at one line"),
    ("handsup","a raised hand"),("timer","a pause"),
    ("jobnotice","a four-word headline"),("wordcount","a slide with one number")], cols=5)
S["z10-f2"]=lambda: f_scene(980,450, people=[("samira",430,172,{}),
    ("linh",120,172,{"seated":True}),("mei",190,166,{"seated":True}),
    ("adeel",260,180,{"seated":True}),("oksana",330,172,{"seated":True}),
    ("lucia",560,172,{"seated":True}),("priya",630,172,{"seated":True}),
    ("ahmad",700,180,{"seated":True}),("hana",770,166,{"seated":True}),
    ("nkemelu",880,176,{}),("grace",940,172,{})],
    board=(760,18,200,120,"41%",[("voice","locally")]),
    props=[("microphone",350,0,0.8),("table",820,250,1.2),("phone",90,130,0.45),
    ("phone",540,130,0.45),("chair",40,0,0.75)])
S["z10-f3"]=lambda: f_icons([("meeting","the subject"),("data","the object"),
    ("wordcount","the number"),("clock","the time"),
    ("noentry","the negation"),("speechbubble","the whole clause")], cols=3)
S["z10-f4"]=lambda: f_realia(tbl("","Five ways to say one thing",
    ["Rewrite","Which word is emphasized","Remembered?"],
    [["<b>The sentence:</b>","",""],["1","",""],["2","",""],["3","",""],["4","",""],["5","",""]]),
    520)
S["z10-f5"]=lambda: f_realia(doc("Portmere Civic Forum · note for tonight's meeting",
    "Forty-one per cent, read both ways",
    "<p><b>The figure.</b> An average of <b>41% believe they would be able to voice an opinion "
    "before local government takes a decision affecting their community</b>. The share who think "
    "they can easily find information about an administrative service has <b>risen by four "
    "percentage points since 2021</b>.</p>"
    "<p><b>The two readings.</b> 41% can be reported as <i>four in ten believe they would be "
    "heard</i>, or as <i>almost six in ten believe they would not</i>. Nobody is lying in either "
    "case. What differs is which group the sentence puts at the front.</p>"
    "<p><b>The four points.</b> A real improvement in whether people think they can <i>find "
    "information</i>. Not an improvement in whether they think they will be <i>listened to</i>. "
    "Separate questions in the survey.</p>"
    "<p><b>Comparability.</b> Question wording unchanged since 2021; country coverage differs "
    "slightly between waves.</p>",
    "Figures: OECD, <i>Survey on Drivers of Trust in Public Institutions</i>."))
S["z10-f6"]=lambda: f_realia(tbl("Word study","Words that carry their own emphasis",
    ["Word","Strengthens or narrows","Example"],
    [["only","narrows","Only four in ten believe it."],
     ["merely","narrows","The rise is merely four points."],
     ["precisely","strengthens","That is precisely the point."],
     ["barely","narrows","Barely a third attended."],
     ["scarcely","narrows",""],
     ["even","strengthens","Even the people who came expect nothing."],
     ["hardly","narrows",""],
     ["far from","reverses","Far from being encouraging, it explains the empty seats."]]), 520)
S["z10-f7"]=lambda: f_chart([("Luxembourg",57),("Switzerland",52),("Netherlands",49),
    ("Ireland",45),("average",41),("Sweden",40),("France",33),("Portugal",31),
    ("Korea",29),("Latvia",26)],
    unit="per cent who believe they could voice an opinion locally · "
    "finding information: up 4 points since 2021", w=560)
S["z10-f8"]=lambda: f_icons([("microphone","at a stand in the aisle"),("chair","from a seat"),
    ("phone","reading from a phone"),("podium","no notes"),
    ("noentry","interrupted"),("sad","sitting down to silence")], cols=3)
S["z10-f9"]=lambda: f_realia(doc("Portmere Ward Forum · agenda",
    "Tuesday, 7.00 p.m. &nbsp;·&nbsp; expected finish 9.00 p.m.",
    "<p>1 Apologies<br>2 Minutes of the last meeting<br>3 Police report<br>"
    "4 Highways: Marsh Road resurfacing<br>5 Planning applications<br>"
    "<b>6 Public comment &mdash; 2 minutes each</b><br>7 Date of the next meeting</p>"
    "<p>Speakers are asked to give their name and street before speaking.</p>"
    "<p style='font-size:12px;color:#6b6861'><b>In pen, across item 6:</b> move to the end</p>",
    "The hall must be vacated by 9.30 p.m."))
S["z10-f10"]=lambda: f_scene(980,450, people=[("samira",430,174,{}),
    ("linh",120,172,{"seated":True}),("mei",190,166,{"seated":True}),
    ("adeel",260,180,{"seated":True}),("oksana",330,172,{"seated":True}),
    ("lucia",560,172,{"seated":True}),("priya",630,172,{"seated":True}),
    ("ahmad",700,180,{"seated":True}),("hana",770,166,{"seated":True}),
    ("nkemelu",880,176,{}),("grace",940,172,{})],
    board=(760,18,200,120,"",[("","")]),
    props=[("microphone",350,0,0.8),("table",820,250,1.2),("chair",40,0,0.75)],
    panelbg="#2b3340", floorbg="#39404c")
S["z10-f11"]=lambda: f_realia(tbl("Two speaking cards","Same submission",
    ["Two minutes","Thirty seconds"],
    [["1 I've lived on Ferry Lane for eleven years.<br>"
      "2 I've been to five of these meetings.<br>"
      "<b>3 There's one figure I want to leave with you.</b><br>"
      "4 Forty-one per cent believe they'd get a say.<br>"
      "5 Information has improved, which I accept.<br>"
      "<b>6 All I'm asking for is one session after six.</b>",
      "<b>1 There's one figure I want to leave with you.</b><br>"
      "2 Forty-one. Which means most of this room thinks tonight is pointless.<br>"
      "<b>3 All I'm asking for is one session after six.</b>"]]), 560)
S["z10-f12"]=lambda: f_realia(doc("Two openings", None,
    "<p><b>A.</b> I would like to begin by thanking the committee for its time this evening, and "
    "for the opportunity to speak. I have lived on Ferry Lane for eleven years and I have "
    "attended five of these meetings …</p>"
    "<p style='font-size:12px;color:#6b6861'>Forty-one words before anything is claimed.</p>"
    "<p style='margin-top:18px;font-size:22px'><b>Forty-one per cent.</b></p>"
    "<p><b>B.</b> That is the share of people who believe they would be able to voice an opinion "
    "before local government took a decision affecting their community.</p>"
    "<p style='font-size:12px;color:#6b6861'>Three words, then the meaning.</p>"))
S["z10-f13"]=lambda: f_realia(tbl("","Submission frame",
    ["",""],
    [["<b>The number, or the sentence</b>",""],
     ["<b>What it means for the people in this room</b>",""],
     ["<b>What I concede</b>",""],
     ["<b>The one thing I am asking for</b>",""],
     ["<i>What I will do if they agree</i>",""]]), 500)
S["z10-f14"]=lambda: f_scene(980,450, people=[("samira",430,174,{}),("bah",500,176,{}),
    ("linh",140,172,{"seated":True}),("mei",210,166,{"seated":True}),
    ("adeel",280,180,{"seated":True}),("oksana",350,172,{"seated":True}),
    ("nkemelu",760,176,{}),("grace",830,172,{}),("priya",900,172,{}),
    ("ahmad",950,180,{}),("hana",600,166,{})],
    props=[("chair",40,0,0.75),("chair",95,0,0.75),("microphone",640,0,0.75),
    ("table",790,250,1.2),("coat",560,130,0.5)],
    clockat=(120,46,22,21,20), panelbg="#2b3340", floorbg="#39404c")
S["z10-f15"]=lambda: f_chart([("yes, if I had a figure",10),("only in writing",7),
    ("yes, if somebody came with me",6),("no",4),("I have done",2)])
S["z10-f16"]=lambda: f_scene(840,400, people=[("samira",300,172,{"seated":True,"smile":False})],
    props=[("table",240,250,1.4),("phone",320,196,0.5),("notebook",400,200,0.45),
    ("cafe",460,200,0.42),("chair",600,0,0.8)],
    window_=(640,56,130,96), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 11 ----------------
S["z11-f1"]=lambda: f_icons([("magnifier","small type"),("signature","a signature box"),
    ("inventory","an inventory"),("camera","a dated photograph"),
    ("receipt","a receipt stapled on"),("proof","a clause circled"),
    ("logsheet","two documents compared"),("deposit2","a deposit scheme"),
    ("statement","an itemized list"),("key","the keys handed over")], cols=5)
S["z11-f2"]=lambda: f_scene(900,420, behind=[("grace",640,172,{})],
    people=[("adeel",300,180,{"seated":True})],
    counter_=(520,228,300,112),
    on_counter=[("computer",580,0.45),("essay",700,0.42)],
    props=[("chair",250,0,0.8),("chair",360,0,0.8),("printer",120,0,1.1),
    ("board",80,36,0.8),("plant" if "plant" in ICON else "park",860,0,1.0)])
S["z11-f3"]=lambda: f_icons([("quotemark","a / the"),("inventory","any / all"),
    ("padlock","shall / may"),("balance","reasonable / necessary"),
    ("thread","and / or"),("tally","each / every")], cols=3)
S["z11-f4"]=lambda: f_realia(tbl("","The clause that could mean two things",
    ["",""],
    [["<b>Clause 1</b>",""],["&nbsp;&nbsp;Reading A",""],["&nbsp;&nbsp;Reading B",""],
     ["&nbsp;&nbsp;The word that does it",""],
     ["<b>Clause 2</b>",""],["&nbsp;&nbsp;Reading A",""],["&nbsp;&nbsp;Reading B",""],
     ["&nbsp;&nbsp;The word that does it",""]],
    note="<b>The question I would ask in writing:</b>"), 520)
S["z11-f5"]=lambda: f_realia(doc("Portmere Civic Forum · note for the plain-language group",
    "Seventeen minutes, or five point six",
    "<p><b>The second study.</b> A longitudinal analysis of privacy policies from <b>1996 to "
    "2021</b> found that, at an assumed reading speed of <b>250 words a minute</b>, the average "
    "policy took about <b>17 minutes</b> to read in 2021. The longest in the sample took about "
    "<b>152 minutes</b>. Annual reading for an average user would exceed <b>400 hours</b>.</p>"
    "<p><b>Why the two figures differ.</b> Different samples; different years; different assumed "
    "reading speeds. None of these is an error.</p>"
    "<p><b>What both agree on.</b> That the documents have grown, that the growth is driven by "
    "the number of matters each must address, and that no plausible reading speed makes the total "
    "obligation achievable.</p>"
    "<p><b>The figure that does not depend on the dispute.</b> Four hundred hours is ten working "
    "weeks. A quarter of that would be two and a half.</p>",
    "Figures: <i>Privacy Policies Across the Ages, 1996&ndash;2021</i>, arXiv 2201.08739. "
    "The 5.6-minute figure in Unit 9 is from a different study; the two are not comparable."))
S["z11-f6"]=lambda: f_realia(tbl("Word study","Determiners and what they oblige",
    ["Determiner","Scope","In a clause it means"],
    [["a / an","one unspecified member","you must obtain one; any one will do"],
     ["the","a particular one already identified","the one defined elsewhere in the document"],
     ["any","free choice","whichever one the other side picks"],
     ["all","the whole set together","every one, or the obligation is not met"],
     ["each","every member, singly","the test is applied one at a time"],
     ["every","the whole set, no exceptions","no member is exempt"],
     ["some","an unspecified part","not quantified, and therefore not enforceable"],
     ["no","none at all","an absolute prohibition"]]), 540)
S["z11-f7"]=lambda: f_line([("1996",3),("2004",6),("2010",9),("2016",13),("2021",17)],
    w=600, unit="minutes to read the average policy, at 250 words a minute · "
    "longest in sample 152 minutes · the 5.6-minute figure is a different study",
    mark=4, ymin=0)
S["z11-f8"]=lambda: f_icons([("key","a flat viewing"),("envelope","a job offer"),
    ("sim","a phone shop counter"),("gym","a gym desk"),
    ("studentcard","a course enrolment"),("car","a car rental desk")], cols=3)
S["z11-f9"]=lambda: f_realia(tbl("Westgate Lettings · deposit deduction statement",
    "Tenancy: 12 Marsh Road, flat 3",
    ["Item","Amount","Evidence attached"],
    [["Deposit held","1,100.00",""],
     ["Professional cleaning (carpets)","185.00","<b>none</b>"],
     ["Garden tidy","60.00","none"],
     ["Replacement key","18.00","receipt"],
     ["Unpaid rent, 3 days","96.00","statement"],
     ["<b>Balance to be returned</b>","<b>741.00</b>",""]],
    note="All amounts in pounds. Deposit protected with the Portmere Deposit Scheme. Disputes must "
    "be raised within 14 days of this statement."), 560)
S["z11-f10"]=lambda: f_scene(900,420, behind=[("grace",620,172,{})],
    people=[("adeel",300,180,{}),("oyelaran",820,176,{})],
    counter_=(500,228,300,112),
    on_counter=[("computer",560,0.45),("inventory",690,0.42)],
    props=[("folder",340,140,0.5),("statement",680,140,0.45),("printer",120,0,1.1),
    ("desk",840,0,1.1),("board",80,36,0.8)])
S["z11-f11"]=lambda: f_realia(tbl("Two versions","Clause 14",
    ["As written","As amended"],
    [["<b>14.1</b> The tenant shall be responsible for <b>the cleaning of the carpets</b> at the "
      "end of the tenancy.<br><b>14.2</b> The landlord may deduct <b>any</b> reasonable costs."
      "<br><b>14.3</b> The tenant shall provide <b>a</b> receipt.<br>"
      "<b>14.4</b> <b>Each</b> room shall be left clean.",
      "<b>14.1</b> The carpets <b>shall be left clean to the standard recorded in the check-in "
      "inventory</b>.<br><b>14.2</b> The landlord may deduct <b>the</b> reasonable costs, "
      "itemized.<br><b>14.3</b> The tenant shall provide <b>all</b> receipts.<br>"
      "<b>14.4</b> <b>Every</b> room shall be left clean."]]), 580)
S["z11-f12"]=lambda: f_realia(doc("Two letters", None,
    "<p><b>A.</b> I think the cleaning charge is completely unfair. Nobody told me I had to have "
    "the carpets professionally cleaned and the clause does not say so clearly. I would like my "
    "money back.</p>"
    "<p style='font-size:12px;color:#6b6861'>No quotation. No evidence. Nothing to answer yes "
    "to.</p>"
    "<p style='margin-top:14px'><b>B.</b> The clause reads, in full: <i>the tenant shall be "
    "responsible for the cleaning of the carpets at the end of the tenancy.</i> Your office told "
    "me by email on the 14th that this means the carpets are to be left <i>clean to the standard "
    "recorded in the check-in inventory</i>. The inventory records <i>fair, light staining to the "
    "hallway</i>. Would you confirm that the attached photographs meet that standard?</p>"))
S["z11-f13"]=lambda: f_realia(tbl("","Letter frame",
    ["",""],
    [["<b>The clause, quoted in full</b>",""],
     ["<b>What I was told, and when</b>",""],
     ["<b>My narrowest claim</b>",""],
     ["<b>Evidence attached</b>",""],
     ["<i>The one question that can be answered yes</i>",""]]), 500)
S["z11-f14"]=lambda: f_scene(980,450, behind=[("grace",820,172,{}),("oyelaran",890,176,{})],
    people=[("linh",140,172,{"seated":True}),("mei",210,166,{"seated":True}),
    ("adeel",280,180,{"seated":True}),("oksana",350,172,{"seated":True}),
    ("lucia",420,172,{"seated":True}),("ahmad",490,180,{"seated":True}),
    ("samira",580,172,{}),("bah",650,176,{}),("hana",720,166,{})],
    counter_=(780,228,180,112),
    on_counter=[("computer",830,0.42)],
    props=[("chair",100,0,0.75),("jobnotice",560,40,0.6),("folder",160,140,0.45),
    ("wordcount",40,60,0.5)])
S["z11-f15"]=lambda: f_chart([("terms on a website",13),("a phone or internet contract",9),
    ("a tenancy",6),("an employment contract",4),("I read everything",1)])
S["z11-f16"]=lambda: f_scene(860,410, people=[("yusuf",300,180,{"smile":False})],
    props=[("table",230,250,1.4),("computer",300,186,0.5),("essay",400,200,0.45),
    ("phone",360,140,0.45),("timetable",640,50,0.7)],
    clockat=(120,46,22,23,10), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 12 ----------------
S["z12-f1"]=lambda: f_icons([("chain","linked rings"),("stairwell","a staircase"),
    ("thread","a thread through beads"),("inventory","cards in order"),
    ("proof","the same cards shuffled"),("bridge","a bridge"),
    ("signpost","a signpost"),("book","a spine"),
    ("canal","tributaries joining"),("speechbubble","three arrows into one")], cols=5)
S["z12-f2"]=lambda: f_scene(880,420, people=[("hana",300,172,{"seated":True}),
    ("nkemelu",470,176,{})],
    props=[("desk",230,0,1.5),("essay",300,196,0.45),("essay",370,196,0.45),
    ("pen",430,200,0.4),("shelf",80,50,0.9),("book",120,140,0.5)],
    window_=(660,50,150,110))
S["z12-f3"]=lambda: f_icons([("essay","side by side"),("chain","chained"),
    ("balance","answering an objection"),("scissors","deletable"),
    ("flashback","reinterpreting"),("thread","gathering")], cols=3)
S["z12-f4"]=lambda: f_realia(tbl("","What does this paragraph do?",
    ["#","What this paragraph does","Could be swapped with"],
    [["1","",""],["2","",""],["3","",""],["4","",""],["5","",""],["6","",""],
     ["7","",""],["8","",""],["9","",""],["10","",""],["11","",""]]), 540)
S["z12-f5"]=lambda: f_realia(doc("Portmere Adult Learning Service · closing note for the year",
    "Sixty and twelve",
    "<p><b>The pair.</b> <b>60% of adults with tertiary education scored at or above Level 3 in "
    "literacy</b>. Among adults whose highest attainment was below upper secondary, the figure "
    "was <b>12%</b>. Level 3 is the band at which a reader can compare sources and identify what "
    "a text does not say.</p>"
    "<p><b>What follows, and what does not.</b> It does not follow that education produces the "
    "skill. What does follow is that the two groups live in different informational worlds.</p>"
    "<p><b>The distribution.</b> Over the decade the lowest-performing tenth declined while the "
    "highest improved. The average therefore moved very little &mdash; and the average is what "
    "was reported. About <b>one adult in five</b> is a low performer.</p>"
    "<p><b>The caveat we should keep.</b> Attainment categories are assembled from school systems "
    "that are not comparable. The 60&ndash;12 gap survives that; a five-point gap would not.</p>",
    "Figures: OECD, <i>Survey of Adult Skills</i> (PIAAC), published December 2024."))
S["z12-f6"]=lambda: f_realia(tbl("Word study","Discourse markers by function",
    ["Function","Markers"],
    [["Adding","moreover · furthermore · ______"],
     ["Contrasting","however · by contrast · ______"],
     ["Conceding","admittedly · granted · ______"],
     ["Concluding","therefore · consequently · ______"],
     ["Exemplifying","for instance · in particular · ______"],
     ["Reframing","that said · in other words · ______"]]), 480)
S["z12-f7"]=lambda: f_chart([("tertiary education",60),("upper secondary",31),
    ("below upper secondary",12),("all adults",33)],
    unit="per cent at or above Level 3 in literacy · "
    "over the decade the lowest tenth fell and the highest rose; the mean barely moved", w=560)
S["z12-f8"]=lambda: f_icons([("book","a report with tabs"),("microphone","read aloud"),
    ("essay","a chapter spread out"),("proof","a tutor's note"),
    ("statement","a paper skimmed"),("phone","read on a bus")], cols=3)
S["z12-f9"]=lambda: f_realia(doc("Draft, third revision · pages 6&ndash;8", None,
    "<p><b>[6]</b> Moreover, the figures for adult attainment show a similar pattern across "
    "participating countries …</p>"
    "<p style='font-size:12px;color:#6b6861'><b>In the margin:</b> what does this do?</p>"
    "<p><b>[7]</b> The average has barely moved over the decade …<br>"
    "<b>[8]</b> The lowest tenth declined while the highest improved …</p>"
    "<p style='font-size:12px;color:#6b6861'><b>Arrow between them:</b> reverse these</p>"
    "<p><b>[page 2, one sentence]</b> It <u>could arguably</u> be <u>suggested</u> that there "
    "<u>may</u> in <u>some cases</u> be a relationship.</p>"
    "<p style='font-size:12px;color:#6b6861'>Four circled.</p>",
    "<b>At the foot, with an arrow between 7 and 8:</b> the hole is here."))
S["z12-f10"]=lambda: f_scene(880,420, people=[("hana",300,172,{}),
    ("nkemelu",520,180,{"seated":True})],
    props=[("desk",440,0,1.5),("essay",500,150,0.45),("cafe",600,196,0.42),
    ("cafe",650,196,0.42),("shelf",80,50,0.9),("proof",180,140,0.5)],
    window_=(700,50,140,104))
S["z12-f11"]=lambda: f_realia(tbl("Two paragraph maps","Same essay",
    ["Map A","Map B"],
    [["1 &nbsp; 2 &nbsp; 3 &nbsp; 4<br>5 &nbsp; 6 &nbsp; 7 &nbsp; 8<br>"
      "<i>no arrows; any order works</i>",
      "1 &rarr; 2 &rarr; <b>3</b><br>"
      "<b>4</b> answers 3 &nbsp; <b>[cannot move]</b><br>"
      "5 &rarr; 6<br><b>7</b> reinterprets 2 &nbsp; <b>[cannot move]</b><br>"
      "8 gathers 1&ndash;7"]]), 540)
S["z12-f12"]=lambda: f_realia(doc("Two maps of one essay", None,
    "<p><b>A &mdash; eleven topics.</b> adult skills · the survey · attainment · the average · "
    "the distribution · countries · comparability · documents · the leaflet · the clause · "
    "recommendations</p>"
    "<p style='font-size:12px;color:#6b6861'>Topics, not functions. Any order works.</p>"
    "<p style='margin-top:14px'><b>B &mdash; eight paragraphs.</b> 1 introduces the pair · "
    "2 gives the average · 3 raises the schooling objection · <b>4 answers 3 [fixed]</b> · "
    "5 gives the distribution · 6 names what is not known · <b>7 reinterprets 2 [fixed]</b> · "
    "8 names the cost of doing nothing</p>"
    "<p style='font-size:12px;color:#6b6861'>Two paragraphs cannot move. The order is a "
    "consequence.</p>"))
S["z12-f13"]=lambda: f_realia(tbl("","Paragraph map",
    ["#","What this paragraph does","Fixed?"],
    [["1","",""],["2","",""],["3","",""],["4","",""],["5","",""],["6","",""],
     ["7","",""],["8","",""]],
    note="<b>The one thing I do not know:</b>"), 520)
S["z12-f14"]=lambda: f_scene(980,450, people=[("linh",180,172,{"seated":True}),
    ("mei",250,166,{"seated":True}),("adeel",320,180,{"seated":True}),
    ("oksana",390,172,{"seated":True}),("bah",500,176,{}),("priya",570,172,{}),
    ("grace",660,172,{}),("samira",740,172,{}),("ahmad",820,180,{}),
    ("lucia",900,172,{}),("hana",950,166,{})],
    props=[("table",150,250,1.8),("essay",230,196,0.42),("essay",300,196,0.42),
    ("printer",470,0,1.1),("shelf",700,40,0.9),("crate",870,239,1.0),
    ("lamp",120,120,0.5),("computer",930,130,0.45)],
    window_=(560,36,120,80), panelbg="#3a3730", floorbg="#4a463c")
S["z12-f15"]=lambda: f_chart([("asking what a figure rests on",11),
    ("saying how sure I am",9),("putting the point first",7),
    ("saying I don't know",5),("asking who did it",4)])
S["z12-f16"]=lambda: f_scene(880,420, people=[("hana",300,172,{"seated":True,"smile":False})],
    props=[("desk",230,0,1.5),("computer",290,146,0.5),("essay",400,196,0.45),
    ("phone",360,140,0.45),("desk",600,0,1.3),("chair",660,0,0.75)],
    window_=(740,50,120,96), panelbg="#242c38", floorbg="#30394a")
