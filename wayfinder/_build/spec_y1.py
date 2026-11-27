# -*- coding: utf-8 -*-
"""Book 5 figure specs, Starting Point to Unit 3."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

S["y00-f1"]=lambda: f_scene(900,420, people=[("nkemelu",790,176,{}),
    ("nadia",130,174,{"seated":True}),("tomas",210,180,{"seated":True}),
    ("mei",290,166,{"seated":True}),("lucia",370,172,{"seated":True}),
    ("priya",450,172,{"seated":True}),("ahmad",530,180,{"seated":True}),
    ("adeel",170,180,{}),("linh",250,172,{}),("oksana",330,172,{})],
    board=(560,20,210,130,"ON THE BOARD",[("1 Oi —","3 This isn't"),("2 Sorry,","4 The unit")]),
    props=[("table",90,250,2.5)])
S["y00-f2"]=lambda: f_realia(tbl("Register","The same thing, four ways",
    ["","Informal","Neutral","Formal"],
    [["Verb","get, find out","receive, discover","obtain, ascertain"],
     ["Noun","a go, a look","an attempt","an examination"],
     ["Contractions","always","usually","never"],
     ["The person","you, I","you, I","the applicant, this office"]]), 520)

# ---------------- Unit 1 ----------------
S["y01-f1"]=lambda: f_icons([("microphone","speaking up"),("notebook","listening and writing"),
    ("desk","one task"),("spreadsheet","six tasks"),("meeting","disagreeing calmly"),
    ("computer","working alone"),("handshake","agreeing"),("clipboard","checking"),
    ("transfer","delegating"),("clock","arriving first")], cols=5)
S["y01-f2"]=lambda: f_scene(880,410, people=[("nadia",250,174,{"seated":True}),
    ("grace",700,174,{}),("linh",790,172,{})],
    props=[("desk",200,190,1.35),("appraisal",300,170,0.62),("appraisal",370,170,0.62),
    ("computer",250,150,0.52),("window",560,60,1.0)], clockat=(90,55,24,17,40))
S["y01-f3"]=lambda: f_icons([("microphone","quiet"),("computer","independent"),
    ("clipboard","careful"),("noentry","firm"),("meeting","curious"),("clock","quick")], cols=3)
S["y01-f4"]=lambda: f_realia(tbl("","The form I was given",
    ["Questions about behavior","Questions about results","Who reads it"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="What the person being described can add:"), 520)
S["y01-f5"]=lambda: f_realia(doc("Portmere Employment Partnership · annual skills note",
    "What employers say they will need",
    "<p>Every January we are asked the same question: what skills should people be learning? The "
    "most useful public answer comes from a survey of more than a thousand large employers across "
    "fifty-five economies, and it is worth reading carefully, because what it establishes is "
    "narrower than what it is usually quoted as establishing.</p>"
    "<p><b>The headline.</b> Employers expect that <b>39 percent</b> of workers' core skills will "
    "have changed by 2030. That is a large figure and it is <b>down</b> from 44 percent in the "
    "previous edition two years earlier, which is not how it was reported anywhere.</p>"
    "<p><b>What is rising.</b> Analytical thinking remains the single most-named core skill: seven "
    "employers in ten call it essential. The largest increases in rated importance since the "
    "previous survey are leadership and social influence, up 22 percentage points, and resilience, "
    "flexibility and agility, together with AI and big data, each up 17 points.</p>"
    "<p><b>What is falling.</b> Physical abilities show a net decline in rated importance for the "
    "first time since the survey began.</p>"
    "<p><b>What this does not establish.</b> The survey asked employers what they expect. It did "
    "not measure what happened. Use it to decide what to learn. Do not use it to tell somebody "
    "their job is safe.</p>",
    "Figures: World Economic Forum, <i>Future of Jobs Report 2025</i>."))
S["y01-f6"]=lambda: f_realia(tbl("Word study","Adjective, noun, verb",
    ["Adjective","Noun","Verb"],
    [["resilient","resilience","—"],["flexible","flexibility","to flex"],
     ["analytical","analysis","to analyze"],["adaptable","adaptability","to adapt"],
     ["essential","essence","—"]]), 440)
S["y01-f7"]=lambda: f_chart([("leadership and social influence",22),
    ("resilience, flexibility, agility",17),("AI and big data",17),
    ("physical abilities",-4)], unit="change in rated importance, percentage points", w=560)
S["y01-f8"]=lambda: f_icons([("microphone","silent in a meeting"),("meeting","speaking at length"),
    ("clipboard","correcting a form"),("handshake","agreeing at once"),
    ("consultation","asking late"),("notebook","writing instead")], cols=3)
S["y01-f9"]=lambda: f_realia(tbl("Northside NHS Trust","Development review",
    ["Criterion","What I think","What my manager thinks"],
    [["Reliability","",""],["Thoroughness","",""],["Contribution in meetings","",""],
     ["Development","",""],["<b>Agreed actions</b>","<i>shared box</i>",""]],
    note="Signed (employee): ______________  Signed (manager): ______________"), 540)
S["y01-f10"]=lambda: f_scene(800,400, people=[("nadia",280,174,{"seated":True}),
    ("bah",470,176,{"seated":True})],
    props=[("table",230,250,1.4),("appraisal",300,196,0.62),("appraisal",380,196,0.62),
    ("pen",450,210,0.52)], window_=(620,60,140,100))
S["y01-f11"]=lambda: f_realia(tbl("Two forms","Where they differ",
    ["What I think","What my manager thinks"],
    [["Reliable<br>Thorough<br><b>Quiet in meetings</b><br>______",
      "Reliable<br>Thorough<br><b>Does not put herself forward</b><br>Ready for more in 12 months"]]),
    520)
S["y01-f12"]=lambda: f_realia(doc("Self-assessment · N. Rahman","Against the four criteria",
    "<p><b>Reliability.</b> I have not missed a shift since March and covered four at short "
    "notice, two of them on the same week.</p>"
    "<p><b>Thoroughness.</b> The drug chart audit found eleven discrepancies; nine were mine to "
    "find and I found them before the audit.</p>"
    "<p><b>Contribution in meetings.</b> I speak rarely. I write the handover notes that the "
    "meeting then discusses.</p>"
    "<p><b>Development.</b> I would like to be measured next year on something other than how "
    "often I speak.</p>",
    "<b>What I would like to be measured on next year:</b> the written handover, and whether it "
    "reduces repeat questions at the next shift."))
S["y01-f13"]=lambda: f_realia(tbl("","Fact or judgment?",
    ["What was written about me","Fact or judgment","What I would write instead"],
    [["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="What I will ask to have recorded:"), 540)
S["y01-f14"]=lambda: f_scene(920,430, people=[("nkemelu",140,176,{}),
    ("nadia",230,174,{}),("linh",300,172,{}),("mei",370,166,{}),("priya",440,172,{}),
    ("oksana",510,172,{}),("samira",580,172,{}),("hana",650,166,{}),
    ("grace",760,174,{}),("bah",830,176,{}),("adeel",890,180,{})],
    props=[("board",40,40,0.6),("clipboard",120,60,0.62),("tray",700,215,0.62)],
    clockat=(700,50,24,7,2))
S["y01-f15"]=lambda: f_chart([("that I'm not interested",11),("that I agree",8),
    ("that I'm confident",6),("that I don't understand",4),("nothing",2)])
S["y01-f16"]=lambda: f_scene(820,400, people=[("oksana",260,172,{"smile":False})],
    counter_=(140,232,260,108),
    on_counter=[("appraisal",200,0.45)],
    props=[("window",560,60,1.1),("meeting",660,150,0.52)], clockat=(80,52,22,17,40))

# ---------------- Unit 2 ----------------
S["y02-f1"]=lambda: f_icons([("jobnotice","headline"),("pen","byline"),
    ("essay","a quote"),("camera","caption"),("stamp","correction"),
    ("studentservices","source"),("envelope","press release"),("review","coverage"),
    ("portal","outlet"),("padlock","paywall")], cols=5)
S["y02-f2"]=lambda: f_scene(880,410, people=[("priya",250,172,{"seated":True}),
    ("nkemelu",700,176,{}),("bah",790,176,{})],
    props=[("table",180,250,2.0),("notebook",290,200,0.52),("folder",400,200,0.52),
    ("door",820,96,1.35)], clockat=(90,50,22,20,15))
S["y02-f3"]=lambda: f_icons([("essay","agency removed"),("statement","no date"),
    ("camera","cropped"),("jobnotice","headline mismatch"),("messages","comment"),
    ("stamp","correction")], cols=3)
S["y02-f4"]=lambda: f_realia(tbl("","Two reports of one thing",
    ["Report A","Report B"],
    [["Headline:",""],["Facts given:",""],["Facts missing:",""],["Passive sentences:",""],
     ["<b>A reader of one would believe</b>",""]]), 500)
S["y02-f5"]=lambda: f_realia(doc("Portmere Library Service · media literacy briefing, sheet 1",
    "Trust, and the people who have stopped looking",
    "<p>We run a weekly session here for people who want to know whether what they are reading is "
    "true. This sheet gives the three figures we are asked about most, and one warning about how "
    "to use them.</p>"
    "<p><b>Trust.</b> Across the markets surveyed, <b>40 percent</b> say they trust most news "
    "most of the time. That figure has not moved for three years. It is not collapsing and it is "
    "not recovering; it is flat, which is a different story from the one usually told about "
    "it.</p>"
    "<p><b>The range inside the average.</b> Trust runs from <b>67 percent in Finland</b> to "
    "<b>22 percent in Greece and Hungary</b>. A single global figure for trust in news is about "
    "as useful as a single global figure for rainfall.</p>"
    "<p><b>Avoidance.</b> Four people in ten now say they sometimes or often avoid the news, up "
    "from <b>29 percent in 2017</b>. Note that this is selective avoidance &mdash; turning away "
    "from particular subjects or at particular times &mdash; and not a withdrawal from "
    "information altogether.</p>"
    "<p><b>The warning.</b> These are survey answers. They measure what people say about their "
    "own behavior. The direction of travel is reliable; the exact figure is not.</p>",
    "Figures: Reuters Institute, <i>Digital News Report 2025</i>."))
S["y02-f6"]=lambda: f_realia(tbl("Word study","Verbs of saying",
    ["Verb","Pattern","How certain"],
    [["state","state that …","neutral; the speaker is reporting"],
     ["claim","claim that …","the writer is not endorsing it"],
     ["allege","allege that …","asserted without proof"],
     ["admit","admit that …","against the speaker's own interest"],
     ["deny","deny + gerund","the speaker rejects it"]]), 500)
S["y02-f7"]=lambda: f_chart([("Finland",67),("global average",40),("Greece",22),("Hungary",22)],
    unit="percent who trust most news most of the time", w=520)
S["y02-f8"]=lambda: f_icons([("book","reading alone"),("meeting","arguing"),
    ("pen","correcting your own work"),("computer","working unaided"),
    ("vote","raising a hand"),("handshake","shaking hands")], cols=3)
S["y02-f9"]=lambda: f_realia(doc("Portmere City Council · press release · 13 November",
    "Changes to library opening hours",
    "<p>Portmere City Council has agreed changes to the opening hours of Fenner Street Library "
    "following a review of library provision across the city.</p>"
    "<p>From January, the library will open Monday to Friday and on alternate Saturdays. Weekday "
    "hours are unchanged.</p>"
    "<p>Councillor D. Marsh, cabinet member for communities, said: &ldquo;We are committed to "
    "maintaining library provision across Portmere within the resources available to us.&rdquo;</p>",
    "<b>Notes to editors:</b> The review was commissioned in June. The full officers' report is "
    "available on request. Media inquiries: communications@portmere.example"))
S["y02-f10"]=lambda: f_scene(880,410, people=[("priya",760,172,{}),
    ("nkemelu",150,176,{"seated":True}),("linh",230,172,{"seated":True}),
    ("adeel",310,180,{"seated":True}),("oksana",390,172,{"seated":True}),
    ("mei",470,166,{"seated":True}),("lucia",550,172,{"seated":True})],
    props=[("table",110,250,2.2),("computer",620,120,0.52),("dashboard",640,40,0.6)])
S["y02-f11"]=lambda: f_realia(tbl("Two reports","Same meeting",
    ["The Portmere Argus","Riverside News"],
    [["<b>Library shuts on Saturdays</b><br>The library was closed on Saturdays by the council "
      "to save money.<br>The decision follows a review.<br>______",
      "<b>Library hours under review</b><br>A reduction in Saturday opening was agreed as part "
      "of a review.<br>Weekday hours are unchanged.<br>Councillor Marsh said provision would be "
      "maintained."]]), 540)
S["y02-f12"]=lambda: f_realia(doc("Two headlines, one meeting", None,
    "<p style='font-size:17px'><b>Library shuts on Saturdays</b></p>"
    "<p style='font-size:12px;color:#6b6861'>12 words. Names an actor: the council. Gives a "
    "reason: to save money. No number.</p>"
    "<p style='font-size:17px;margin-top:14px'><b>Library hours under review</b></p>"
    "<p style='font-size:12px;color:#6b6861'>14 words. Names no actor. Gives no reason. No "
    "number.</p>"
    "<p style='margin-top:14px'><b>What was not printed:</b> four votes to three, with two "
    "members absent, and one member who said in the room that she had come in intending to vote "
    "the other way.</p>"))
S["y02-f13"]=lambda: f_realia(tbl("","Account planner",["",""],
    [["<b>What happened</b>",""],["<b>What was reported</b>",""],
     ["Facts present",""],["Facts missing",""],
     ["<b>The sentence that should have been written</b>",""]]), 480)
S["y02-f14"]=lambda: f_scene(920,430, behind=[("nkemelu",760,176,{})],
    people=[("priya",120,172,{"seated":True}),("linh",190,172,{"seated":True}),
    ("adeel",260,180,{"seated":True}),("oksana",330,172,{"seated":True}),
    ("mei",400,166,{"seated":True}),("lucia",470,172,{"seated":True}),
    ("hana",540,166,{}),("tomas",870,180,{})],
    counter_=(700,226,190,114),
    props=[("table",100,250,2.0),("dashboard",400,40,0.6),("library",60,45,0.6),
    ("petition",620,160,0.62),("computer",640,215,0.52)])
S["y02-f15"]=lambda: f_chart([("a messaging group",10),("social video",9),
    ("a news site",7),("radio or television",4),("nowhere",2)])
S["y02-f16"]=lambda: f_scene(820,400, people=[("yusuf",270,186,{"smile":False,"seated":True})],
    props=[("table",210,250,1.4),("computer",260,180,0.52),("phone",400,196,0.52),
    ("review",480,186,0.62)], window_=(620,60,140,100), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 3 ----------------
S["y03-f1"]=lambda: f_icons([("departureboard","cancellation"),("ticket","ticket"),
    ("studentservices","rebooking desk"),("bus","replacement coach"),("form","refund form"),
    ("suitcase","overnight bag"),("timer","missed connection"),("jobnotice","platform change"),
    ("phone","helpline"),("statement","a claim")], cols=5)
S["y03-f2"]=lambda: f_scene(900,420, behind=[("grace",760,174,{})],
    people=[("ahmad",250,180,{}),("linh",330,172,{}),("oksana",400,172,{}),
    ("mei",470,166,{}),("tomas",540,180,{}),("lucia",120,172,{"seated":True})],
    counter_=(680,226,210,114),
    props=[("departureboard",300,36,1.35),("suitcase",180,0,0.7),("chair",100,0,0.8)],
    panelbg="#242c38", floorbg="#30394a")
S["y03-f3"]=lambda: f_icons([("microphone","staff announcement"),("meeting","passed on"),
    ("phone","app alert"),("jobnotice","printed notice"),("concert","tannoy"),
    ("review","comparing accounts")], cols=3)
S["y03-f4"]=lambda: f_realia(tbl("","What the carrier owes you",
    ["",""],[["Delay threshold",""],["What you get",""],["A right or discretionary?",""],
    ["How to claim",""],["Time limit",""]], note="Where I found this:"), 440)
S["y03-f5"]=lambda: f_realia(doc("Portmere Transport Partnership · passenger information, sheet 3",
    "If your service is canceled",
    "<p><b>What you are entitled to.</b> If your service is canceled or delayed beyond the "
    "published threshold, you may choose between a refund of the unused portion, rerouting at the "
    "earliest opportunity, or rerouting on a later date of your choosing. That choice is yours "
    "and not the carrier's, and staff are not permitted to make it for you.</p>"
    "<p><b>Duty of care.</b> Where you are stranded overnight, the carrier must provide meals and "
    "accommodation in proportion to the wait, and transport between the station and the "
    "accommodation. This applies regardless of the cause. It is not discretionary.</p>"
    "<p><b>Compensation.</b> Compensation for the delay itself is separate from a refund and is "
    "paid in addition to it. You generally have to claim, and the time limit is shorter than most "
    "people assume.</p>"
    "<p><b>The exception.</b> Compensation may be refused where the cancellation was caused by "
    "extraordinary circumstances outside the carrier's control. <b>Duty of care is not removed by "
    "that exception.</b></p>"
    "<p><b>Why we print this.</b> Awareness of these rights rose from <b>14 percent in 2019 to "
    "30 percent in 2024</b>. Even now, only <b>5 percent</b> say they feel very well informed.</p>",
    "Figures: Eurobarometer survey on passenger rights, 2024."))
S["y03-f6"]=lambda: f_realia(tbl("Word study","-ance and -ment",
    ["Verb","Noun","Suffix"],
    [["assist","assistance","-ance"],["entitle","entitlement","-ment"],
     ["comply","compliance","-ance"],["reimburse","reimbursement","-ment"],
     ["avoid","avoidance","-ance"]]), 440)
S["y03-f7"]=lambda: f_line([("2019",14),("2024",30)], w=560,
    unit="percent aware of passenger rights · of the 30, only 5 feel very well informed",
    ymin=0)
S["y03-f8"]=lambda: f_icons([("microphone","a staff member"),("pen","writing it down"),
    ("meeting","telling two others"),("phone","showing a screen"),
    ("queue","shrugging"),("studentservices","pointing back to the desk")], cols=3)
S["y03-f9"]=lambda: f_realia(form("Portmere Rail · Delay repay claim",
    [("Journey date",""),("From / to",""),("Booked departure",""),("Actual arrival",""),
     ("Length of delay","&#9633; 30–59 min &nbsp; &#9633; 60–119 &nbsp; &#9633; 120+"),
     ("Ticket reference",""),("Reason given to you",""),("Bank details","")],
    note="Claims must be received within 28 days of the date of travel."), 470)
S["y03-f10"]=lambda: f_scene(860,410, behind=[("nkemelu",640,176,{})],
    people=[("ahmad",250,180,{}),("linh",400,172,{}),("oksana",470,172,{})],
    counter_=(560,230,290,110),
    on_counter=[("computer",610,0.45),("clipboard",700,0.4)],
    props=[("departureboard",200,36,1.35),("suitcase",150,0,0.65)],
    panelbg="#242c38", floorbg="#30394a")
S["y03-f11"]=lambda: f_realia(tbl("Two versions","What was said and what was heard",
    ["The announcement","What the passenger wrote down"],
    [["There will be one replacement coach.<br>It will leave <b>at</b> 23:00 from the front "
      "of the station.<br>Passengers who cannot complete the journey should come to the desk.",
      "Coaches <b>from</b> 23:00.<br>Front of the station.<br>______"]]), 520)
S["y03-f12"]=lambda: f_realia(doc("A. Rahim · claim PM-88214","Delay repay claim",
    "<p>Journey: Portmere to Northgate, 14 November, booked departure 19:40.</p>"
    "<p>19:52 &mdash; service canceled. Announced on the concourse.<br>"
    "20:04 &mdash; told by a passenger that coaches would run from 23:00.<br>"
    "20:21 &mdash; told at the desk by L. Pham, staff member, that one coach would leave "
    "<b>at</b> 23:00.<br>"
    "20:24 &mdash; cancellation time and staff name written on the back of my ticket.</p>"
    "<p>I could not complete the journey and was provided with accommodation. I am claiming "
    "compensation for the delay, which is separate from the refund already received.</p>",
    "Claim submitted 16 November, within the 28-day limit."))
S["y03-f13"]=lambda: f_realia(tbl("","Reporting planner",
    ["Time","What was said","Who said it","How I know"],
    [["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]],
    note="What I passed on:"), 520)
S["y03-f14"]=lambda: f_scene(920,430, behind=[("grace",700,174,{})],
    people=[("ahmad",150,180,{}),("linh",220,172,{}),("oksana",290,172,{}),
    ("mei",360,166,{}),("tomas",430,180,{}),("priya",500,172,{"seated":True}),
    ("hana",570,166,{"seated":True}),("bah",860,176,{})],
    counter_=(640,230,250,110),
    props=[("departureboard",260,30,1.35),("suitcase",100,0,0.7),("chair",480,0,0.8),
    ("bins",800,0,1.35)], panelbg="#1f2733", floorbg="#2b333d")
S["y03-f15"]=lambda: f_chart([("staff",11),("the app",8),("the board",6),
    ("another passenger",4),("nobody",2)])
S["y03-f16"]=lambda: f_scene(860,420, people=[("oksana",260,172,{"smile":False}),
    ("hana",330,150,{})],
    props=[("bus",600,0,1.6),("suitcase",190,0,0.62),("departureboard",120,40,1.35)],
    panelbg="#1f2733", floorbg="#2b333d", floor=0.84)
