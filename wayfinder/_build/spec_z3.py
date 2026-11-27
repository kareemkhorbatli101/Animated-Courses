# -*- coding: utf-8 -*-
"""Book 6 figure specs, Units 7 to 9."""
from figgen import *
S={}

# ---------------- Unit 7 ----------------
S["z07-f1"]=lambda: f_icons([("notebook","shorthand"),("recorder","a recorder"),
    ("signature","a minute sheet"),("speechbubble","two bubbles"),
    ("quotemark","a quotation mark"),("jobnotice","a headline in quotes"),
    ("handsup","a hand raised"),("proof","a line crossed out"),
    ("pen","a corrected draft"),("inventory","two documents compared")], cols=5)
S["z07-f2"]=lambda: f_scene(1000,430, people=[("nkemelu",930,176,{}),
    ("priya",260,172,{"seated":True}),("tomas",355,180,{"seated":True}),
    ("oksana",450,172,{"seated":True}),("adeel",545,180,{"seated":True}),
    ("mei",640,166,{"seated":True}),("linh",735,172,{"seated":True})],
    board=(40,20,190,120,"AGENDA",[("1 Minutes","3 Timetable"),("2 Matters","4 AOB")]),
    props=[("table",250,250,2.6),("computer",300,196,0.45),("computer",560,196,0.45),
    ("jug",660,200,0.42),("door",820,96,1.3)])
S["z07-f3"]=lambda: f_icons([("microphone","explained"),("angry","insisted"),
    ("sad","admitted"),("speechbubble","claimed"),
    ("handshake","acknowledged"),("noentry","refused")], cols=3)
S["z07-f4"]=lambda: f_realia(tbl("","One sentence, six verbs",
    ["",""],
    [["<b>The words</b>","<i>write them here, exactly</i>"],
     ["1 She said that …",""],["2 She ______ that …",""],["3 She ______ that …",""],
     ["4 He ______ that …",""],["5 He ______ that …",""],["6 He ______ that …",""]],
    note="<b>Which version did the speaker recognize?</b>"), 520)
S["z07-f5"]=lambda: f_realia(doc("Portmere Civic Forum · reading group note",
    "Sixty-nine and twenty-two",
    "<p><b>The two figures.</b> Among people who believe that people like them have a say in what "
    "the government does, <b>69% report trusting the national government</b>. Among those who "
    "feel they do not have a say, the figure is <b>22%</b>. A gap of forty-seven percentage "
    "points, larger than the gap between the most and least trusting countries in the study.</p>"
    "<p><b>What this does not tell us.</b> Which way the arrow runs. Feeling heard may produce "
    "trust; trusting people may tend to feel heard; something else may produce both.</p>"
    "<p><b>What it does tell us.</b> That the two are bound together very tightly, and that an "
    "average of <b>41%</b> believe they could voice an opinion before a local decision &mdash; "
    "so a clear majority believe they could not.</p>"
    "<p><b>Question wording.</b> Both items are self-report, asked of the same respondent in a "
    "single interview.</p>",
    "Figures: OECD, <i>Survey on Drivers of Trust in Public Institutions</i>, 2025 results."))
S["z07-f6"]=lambda: f_realia(tbl("Word study","What the verb carries",
    ["Verb","Neutral / favorable / unfavorable","It implies"],
    [["said","neutral","nothing"],["noted","neutral",""],
     ["explained","favorable","the speaker was being helpful"],
     ["pointed out","favorable",""],
     ["claimed","unfavorable","no evidence was offered"],
     ["alleged","unfavorable",""],
     ["conceded","",""],["insisted","",""],
     ["acknowledged","",""],["dismissed","",""]]), 540)
S["z07-f7"]=lambda: f_chart([("feel they have a say",69),("feel they do not",22),
    ("could voice an opinion locally",41)],
    unit="percent · the first two differ by 47 points", w=540)
S["z07-f8"]=lambda: f_icons([("podium","at a lectern"),("meeting","across a desk"),
    ("phone","a phone call"),("door","in a doorway"),
    ("messages","a message on a screen"),("book","reading aloud")], cols=3)
S["z07-f9"]=lambda: f_realia(doc("Timetable Review Group · draft minutes",
    "Tuesday 14th · present 11, apologies 2 · minuted by T. Kowalski",
    "<p><b>1. Minutes of the last meeting.</b> Agreed.</p>"
    "<p><b>2. Matters arising.</b> <i>It was felt that</i> the earlier consultation had been "
    "sufficient.</p>"
    "<p><b>3. Timetable.</b> The chair <b>insisted</b> that there was no time to reopen the "
    "timetable before September. PS <b>objected</b>.</p>"
    "<p><b>4. Any other business.</b> <i>It was felt that</i> the room allocation should be "
    "revisited next term.</p>"
    "<p><b>Action:</b> chair to contact the funder &mdash; <b>CH, by the 28th</b>.</p>",
    "Corrections to the secretary within five working days."))
S["z07-f10"]=lambda: f_scene(860,410, people=[("priya",280,172,{}),
    ("tomas",560,180,{"seated":True})],
    props=[("desk",480,0,1.4),("computer",540,150,0.5),("cafe",640,196,0.42),
    ("timetable",200,60,0.6),("curtains",700,40,0.9),("folder",330,140,0.5)],
    window_=(700,50,120,92))
S["z07-f11"]=lambda: f_realia(tbl("Two minutes","Item three",
    ["Draft A","Draft B"],
    [["The chair <b>insisted</b> that there was no time.<br>PS <b>objected</b>.<br>"
      "AM's point was <b>dismissed</b>.<br>______",
      "The chair <b>said</b> that there was no time. No member responded at the time.<br>"
      "PS <b>asked</b> whether March was fixed.<br>AM <b>said</b> the previous timetable had been "
      "reopened in April.<br><i>TK's view, at his request: the chair's manner closed further "
      "discussion.</i>"]]), 560)
S["z07-f12"]=lambda: f_realia(doc("Two versions of one minute", None,
    "<p><b>A.</b> The chair insisted that there was no time to reopen the timetable. PS objected. "
    "AM's point about last year was dismissed.</p>"
    "<p style='font-size:12px;color:#6b6861'>Three judging verbs. No opinion attributed to "
    "anybody.</p>"
    "<p style='margin-top:14px'><b>B.</b> The chair said that there was no time to reopen the "
    "timetable. No member responded at the time. PS asked whether the March date was fixed. "
    "<i>TK's view, recorded at his request, is that the chair's manner closed further "
    "discussion; this is his characterization and not the view of the group.</i></p>"
    "<p style='font-size:12px;color:#6b6861'>Neutral verbs. Two opinions, both with a name on "
    "them. Eleven words longer.</p>"))
S["z07-f13"]=lambda: f_realia(tbl("","Minute frame",
    ["",""],
    [["<b>The words said</b>",""],["<b>Who said them</b>",""],
     ["<i>My impression &mdash; name:</i>",""],
     ["<b>Action</b>","initial _____ &nbsp; by _____"]]), 480)
S["z07-f14"]=lambda: f_scene(960,440, people=[("nkemelu",430,176,{}),("grace",500,172,{}),
    ("oyelaran",570,176,{}),("samira",140,172,{}),
    ("linh",230,172,{"seated":True}),("mei",300,166,{"seated":True}),
    ("adeel",370,180,{"seated":True}),("oksana",650,172,{"seated":True}),
    ("lucia",720,172,{"seated":True}),("ahmad",790,180,{"seated":True}),
    ("priya",880,172,{})],
    props=[("table",420,250,1.6),("microphone",180,120,0.6),("phone",900,140,0.45),
    ("book",60,140,0.55),("crate",40,232,1.0),("jug",500,196,0.42)],
    panelbg="#2b3340", floorbg="#39404c")
S["z07-f15"]=lambda: f_chart([("the verb wasn't right",11),("something was left out",8),
    ("a motive was added",6),("the words were wrong",4),("never that I know of",2)])
S["z07-f16"]=lambda: f_scene(880,420, people=[("hana",280,172,{"seated":True,"smile":False}),
    ("bah",640,176,{})],
    props=[("desk",200,0,1.5),("computer",270,150,0.5),("essay",400,196,0.5),
    ("coat",700,130,0.5)], clockat=(100,46,22,22,30),
    panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 8 ----------------
S["z08-f1"]=lambda: f_icons([("handsup","a show of hands"),("balance","two sides of a scale"),
    ("podium","a podium and one sheet"),("handshake","a hand conceding"),
    ("proof","a line crossed out"),("meeting","agreeing with reservations"),
    ("tally","a tally of votes"),("door","a door left open"),
    ("clock","twelve minutes"),("logsheet","objections anticipated")], cols=5)
S["z08-f2"]=lambda: f_scene(1000,440, people=[("ahmad",640,180,{}),
    ("linh",110,172,{"seated":True}),("mei",205,166,{"seated":True}),
    ("adeel",300,180,{"seated":True}),("oksana",395,172,{"seated":True}),
    ("lucia",490,172,{"seated":True}),
    ("priya",830,172,{}),("tomas",920,180,{})],
    props=[("table",710,250,1.3),("jug",760,196,0.42),("chair",560,0,0.75)],
    window_=(180,24,150,76))
S["z08-f3"]=lambda: f_icons([("noentry","refusing to engage"),("handshake","a small concession"),
    ("balance","a large one, and continuing"),("megaphone","overstating"),
    ("sad","climbing down"),("meeting","common ground")], cols=3)
S["z08-f4"]=lambda: f_realia(tbl("","Name your own thirty percent",
    ["My position","The strongest objection","Before","After"],
    [["","","",""],["","","",""],["","","",""]],
    note="Confidence before and after stating the objection, in percent."), 540)
S["z08-f5"]=lambda: f_realia(doc("Portmere Civic Forum · note for tomorrow's debate",
    "Twenty-six, seven and five",
    "<p><b>The partisan gap.</b> Trust in national government runs about <b>26 percentage points "
    "higher</b> among people who say they support a governing party. This is the largest gap in "
    "the breakdown and far larger than any plausible margin of error.</p>"
    "<p><b>The gender gap.</b> Women are about <b>seven percentage points less likely</b> than "
    "men to report trusting the national government. Consistent across waves.</p>"
    "<p><b>The age gap.</b> People aged 18 to 29 are about <b>five percentage points less "
    "likely</b> than the over-50s. Close to the edge of what this survey can resolve for a "
    "subgroup of that size.</p>"
    "<p><b>Why the three cannot be added.</b> The groups overlap. A young woman who does not "
    "support the governing party appears in all three low-trust groups.</p>",
    "Figures: OECD, <i>Survey on Drivers of Trust in Public Institutions</i>, 2025 results. "
    "Subgroup margins of error are larger than the whole-sample figure."))
S["z08-f6"]=lambda: f_realia(tbl("Word study","Conceding and qualifying",
    ["Expression","Position","Formality","Frame"],
    [["although","before","neutral","Although X, Y."],
     ["albeit","after, + phrase","formal","real, albeit modest."],
     ["notwithstanding","before, + noun","formal","Notwithstanding the cost, …"],
     ["granted","before the clause","spoken","Granted, X; but Y."],
     ["to be fair","before the clause","spoken","To be fair, X."],
     ["even so","after","neutral","X. Even so, Y."],
     ["that said","after","neutral","X. That said, Y."],
     ["admittedly","before or inside","neutral","Admittedly, X."]]), 540)
S["z08-f7"]=lambda: f_chart([("supporters of governing parties vs others",26),
    ("men vs women",7),("over-50s vs 18–29",5)],
    unit="gap in percentage points · these cannot be added together", w=520)
S["z08-f8"]=lambda: f_icons([("handsup","hands going against you"),("microphone","a question"),
    ("statement","a document held up"),("worried","a colleague shaking their head"),
    ("clock","the chair looking at the time"),("pen","somebody writing it down")], cols=3)
S["z08-f9"]=lambda: f_realia(doc("Portmere College · paper 7 for decision",
    "Timetable proposal, September intake",
    "<p><b>Proposal.</b><br>&bull; Move the evening class to a fixed room (Fenner 2).<br>"
    "&bull; Shift three daytime groups by one hour.<br>&bull; Publish the timetable in March.</p>"
    "<p><b>Costs.</b> 6,400 non-recurrent, within the existing allocation.</p>"
    "<p><b>Risks.</b><br>1 Fenner 2 may be required for the access course.<br>"
    "2 The March date is set by the funder's reporting cycle.</p>"
    "<p><b>Recommendation.</b> That the committee approve the proposal.</p>",
    "Speakers will be allowed twelve minutes each. The vote will be taken the same afternoon."))
S["z08-f10"]=lambda: f_scene(960,440, people=[("ahmad",620,180,{}),
    ("linh",140,172,{"seated":True}),("mei",210,166,{"seated":True}),
    ("adeel",280,180,{"seated":True}),("oksana",350,172,{"seated":True}),
    ("lucia",420,172,{"seated":True}),("samira",490,172,{"seated":True}),
    ("priya",780,172,{"seated":True}),("tomas",900,180,{})],
    props=[("table",700,250,1.4),("jug",760,196,0.42),("chair",550,0,0.75),
    ("notebook",800,196,0.45)], window_=(170,28,160,80))
S["z08-f11"]=lambda: f_realia(tbl("Two speaking notes","Same twelve minutes",
    ["Opening with the case for","Opening with the objection"],
    [["1 Fixed room for the evening class<br>2 Asked for since 2022<br>"
      "3 Alternative is another year of moving<br>4 Cost is within allocation<br>5 ______",
      "1 <b>The evening students were not asked</b><br>2 Four sessions, all 2–4 p.m.<br>"
      "3 Granted that; still for it, on one ground<br>"
      "4 Approve, and minute the process as inadequate<br>5 ______"]]), 560)
S["z08-f12"]=lambda: f_realia(doc("Two openings", None,
    "<p><b>A.</b> There are three reasons to support this proposal. First, it gives the evening "
    "class a fixed room. Second, it is within the existing allocation. Third, it allows "
    "publication in March.</p>"
    "<p style='font-size:12px;color:#6b6861'>No objection named. No confidence given.</p>"
    "<p style='margin-top:14px'><b>B.</b> I support this at about seventy percent and I want to "
    "set out the thirty first, because it is the strongest thing anybody will say this afternoon. "
    "The evening students were not consulted. Not inadequately: not at all.</p>"
    "<p style='font-size:12px;color:#6b6861'>A number, and the objection at full strength.</p>"))
S["z08-f13"]=lambda: f_realia(tbl("","Argument frame",
    ["",""],
    [["<b>My confidence</b>","______ %"],
     ["<b>The strongest objection, in its own best words</b>",""],
     ["<b>One ground on which I still hold my position</b>",""],
     ["<b>My narrow claim</b>",""],
     ["<i>What would make me withdraw</i>",""]]), 500)
S["z08-f14"]=lambda: f_scene(960,440, people=[("nkemelu",640,176,{}),
    ("linh",140,172,{"seated":True}),("mei",210,166,{"seated":True}),
    ("adeel",280,180,{"seated":True}),("oksana",350,172,{"seated":True}),
    ("lucia",420,172,{"seated":True}),("samira",490,172,{"seated":True}),
    ("priya",760,172,{"seated":True}),("tomas",830,180,{"seated":True}),
    ("ahmad",900,180,{})],
    props=[("handsup",40,110,1.0),("table",700,250,1.3),("jug",740,196,0.42),
    ("chair",560,0,0.75),("coat",120,130,0.5)],
    window_=(190,30,150,74), panelbg="#eee9dd", floorbg="#ded7c6")
S["z08-f15"]=lambda: f_chart([("who was left out",10),("the evidence is thin",8),
    ("cost",6),("fairness of process",4),("I can't name one",3)])
S["z08-f16"]=lambda: f_scene(860,410, people=[("grace",280,172,{"smile":False}),
    ("bah",560,176,{})],
    props=[("counter" if False else "cupboard",640,0,1.3),("calendar",120,50,0.7),
    ("statement",330,140,0.5),("cafe",620,140,0.45),("washup",760,120,0.5)],
    window_=(440,50,130,96), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 9 ----------------
S["z09-f1"]=lambda: f_icons([("proof","half the lines struck"),("wordcount","a word count"),
    ("thread","two paragraphs merged"),("scissors","one sentence cut into three"),
    ("book","a document and a card"),("essay","a proof"),
    ("flashcard","a highlighted abstract"),("note","a summary box"),
    ("quotemark","a redundant phrase"),("statement","a clean page")], cols=5)
S["z09-f2"]=lambda: f_scene(880,420, people=[("samira",300,172,{"seated":True}),
    ("tomas",430,180,{})],
    props=[("desk",230,0,1.5),("computer",290,146,0.5),("proof",400,196,0.45),
    ("pencil",470,200,0.4),("board",660,40,0.8),("wordcount",700,150,0.5)])
S["z09-f3"]=lambda: f_icons([("data","information"),("happy","tone"),
    ("quotemark","repetition"),("padlock","legal cover"),
    ("handshake","somebody asked for it"),("worried","nobody can explain it")], cols=3)
S["z09-f4"]=lambda: f_realia(tbl("","What is each sentence doing?",
    ["#","Information","Tone","Repetition","Legal","Requested","Unexplained"],
    [["1","","","","","",""],["2","","","","","",""],["3","","","","","",""],
     ["4","","","","","",""],["5","","","","","",""],["6","","","","","",""],
     ["<b>Total</b>","","","","","",""]]), 580)
S["z09-f5"]=lambda: f_realia(doc("Portmere Civic Forum · note for the plain-language group",
    "Five point six minutes, and eighty-four point seven",
    "<p><b>The study.</b> An automated audit analyzed the privacy policies of about "
    "<b>207,000 websites</b>. The average policy ran to roughly <b>1,404 words</b>, which the "
    "authors calculate as about <b>5.6 minutes</b> of reading.</p>"
    "<p><b>The figure that changes the picture.</b> Policies refer to other policies. Counting "
    "the ones a typical site refers you to, the total comes to about <b>84.7 minutes</b>.</p>"
    "<p><b>Why this is a writing problem.</b> Nobody set out to produce eighty-five minutes of "
    "reading. Each document is a defensible length; the total is an emergent property of "
    "thousands of separately reasonable decisions.</p>"
    "<p><b>Limitations.</b> Sample drawn from ordinary websites; reading speed assumed; other "
    "studies using different samples give substantially different averages.</p>",
    "Figure: automated audit of 207,000 website privacy policies, arXiv 1805.01187."))
S["z09-f6"]=lambda: f_realia(tbl("Word study","Undoing nominalization",
    ["Nominalized","Words","Verbal","Words"],
    [["the implementation of the policy","5","we implemented the policy","4"],
     ["a reduction in costs occurred","5","costs fell","2"],
     ["the provision of support to users","6","we support users","3"],
     ["an assessment was carried out","5","we assessed it","3"],
     ["the cancellation of the service","5","the service was canceled","4"],
     ["there is a requirement for consent","6","you must consent","3"]]), 540)
S["z09-f7"]=lambda: f_chart([("under 800 words",41),("800–1,200",63),("1,200–2,000",58),
    ("2,000–3,500",29),("over 3,500",16)],
    unit="thousands of policies in the sample · mean 1,404 words, 5.6 minutes; "
    "with third-party policies, 84.7 minutes", w=560)
S["z09-f8"]=lambda: f_icons([("essay","a dense page of terms"),("flashcard","a short card"),
    ("jobnotice","a poster of eight words"),("form","instructions in small print"),
    ("computer","a long scroll"),("receipt","a receipt with a footer")], cols=3)
S["z09-f9"]=lambda: f_realia(doc("Leaflet proof · PM-LEAF-14 · third revision",
    "Text box: 120 words &nbsp;·&nbsp; supplied: 410",
    "<p>The Service is committed to providing accessible support to all members of the community "
    "irrespective of their circumstances, and we endeavour to ensure that every inquiry receives "
    "a prompt and courteous response …</p>"
    "<p><i>[ text continues past the edge of the box ]</i></p>"
    "<p style='font-size:12px;color:#6b6861'><b>Pencil, in the margin:</b> what is each sentence "
    "doing?</p>"
    "<p style='font-size:12px;color:#6b6861'>Three sentences bracketed. Beside the bracket, one "
    "word: <b>same</b>.</p>",
    "Returned to the writer twice. Both times the note read: still 410."))
S["z09-f10"]=lambda: f_scene(880,420, people=[("samira",300,172,{}),
    ("tomas",430,180,{"seated":True})],
    props=[("desk",230,0,1.5),("computer",290,146,0.5),("proof",400,196,0.45),
    ("statement",470,200,0.45),("board",660,36,0.85),("wordcount",700,150,0.5)])
S["z09-f11"]=lambda: f_realia(tbl("Two leaflets","Same service",
    ["410 words","118 words"],
    [["The Service is committed to …<br>We endeavour to ensure …<br>"
      "Our staff are trained to …<br>[ column two ]<br>"
      "<b>You will not be charged for this and nobody will ask about your immigration "
      "status.</b><br>Opening hours are …<br>______",
      "<b>You will not be charged for this and nobody will ask about your immigration "
      "status.</b><br>We are open Monday to Thursday, 9 to 4.<br>"
      "Come in, or ring 0100 496 2213.<br>If we cannot help, we will tell you who can.<br>"
      "______"]]), 560)
S["z09-f12"]=lambda: f_realia(doc("Two notices", None,
    "<p><b>A &mdash; 268 words.</b> The Service is committed to providing accessible support … "
    "We endeavour to ensure … Our staff are trained to … <b>[ highlighted ]</b> You will not be "
    "charged. <b>[ highlighted ]</b> Nobody will ask about your immigration status. "
    "<b>[ highlighted ]</b> We are open Monday to Thursday …</p>"
    "<p style='font-size:12px;color:#6b6861'>Three sentences highlighted. Those are the three "
    "that survived.</p>"
    "<p style='margin-top:14px'><b>B &mdash; 94 words.</b> You will not be charged for this and "
    "nobody will ask about your immigration status. We are open Monday to Thursday, 9 to 4 …</p>"))
S["z09-f13"]=lambda: f_realia(tbl("","Diagnostic sheet",
    ["Sentence","Inf.","Tone","Rep.","Legal","Req.","?"],
    [["1","","","","","",""],["2","","","","","",""],["3","","","","","",""],
     ["4","","","","","",""],["5","","","","","",""],["6","","","","","",""],
     ["7","","","","","",""],["8","","","","","",""],
     ["<b>Totals</b>","","","","","",""]],
    note="<b>The one sentence a reader must reach:</b>"), 580)
S["z09-f14"]=lambda: f_scene(960,440, people=[("bah",180,176,{}),("nkemelu",250,176,{}),
    ("linh",400,172,{}),("mei",470,166,{}),("lucia",540,172,{}),
    ("samira",650,172,{}),("tomas",720,180,{}),("priya",820,172,{}),
    ("adeel",890,180,{}),("oksana",120,172,{})],
    props=[("printer",60,0,1.3),("table",360,250,1.5),("crate",600,222,1.1),
    ("computer",780,130,0.5),("proof",430,196,0.45)],
    clockat=(880,46,22,17,40))
S["z09-f15"]=lambda: f_chart([("never read them",12),("skim for one thing",8),
    ("depends what it is",6),("read the headings",4),("read it all",1)])
S["z09-f16"]=lambda: f_scene(900,420, people=[("grace",300,172,{}),
    ("ahmad",700,180,{"seated":True}),("hana",770,166,{"seated":True}),
    ("mei",840,160,{"seated":True})],
    props=[("jobnotice",120,46,0.65),("crate",180,217,1.0),("door",560,96,1.3),
    ("chair",640,0,0.75),("statement",360,140,0.5),("essay",240,140,0.45)])
