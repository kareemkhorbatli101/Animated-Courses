# -*- coding: utf-8 -*-
"""Book 5 figure specs, Units 4 to 6."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

# ---------------- Unit 4 ----------------
S["y04-f1"]=lambda: f_icons([("door","a job title"),("qualification","a certificate"),
    ("transfer","a lateral move"),("dashboard","progression"),("timer","a gap"),
    ("folder","a handover"),("teacher","training"),("map","a secondment"),
    ("meeting","an exit interview"),("appraisal","a five-year plan")], cols=5)
S["y04-f2"]=lambda: f_scene(840,400, people=[("tomas",270,180,{"seated":True})],
    props=[("desk",220,190,1.35),("appraisal",300,165,0.62),("notebook",390,195,0.52),
    ("computer",250,150,0.52),("warehouse",60,45,0.6)],
    window_=(600,60,180,110))
S["y04-f3"]=lambda: f_icons([("dashboard","promotion"),("transfer","lateral move"),
    ("spreadsheet","plateau"),("timer","return"),("noentry","exit"),
    ("bottleneck","branch")], cols=3)
S["y04-f4"]=lambda: f_realia(tbl("","The route, advertised and real",
    ["The job","Step before","Step before that"],
    [["<b>Advertised route</b>","",""],["<b>What people actually did</b>","",""],
     ["","",""],["","",""]]), 500)
S["y04-f5"]=lambda: f_realia(doc("Portmere Employment Partnership · labor market note 4",
    "How long anybody stays anywhere",
    "<p>Advisers are asked constantly whether it is bad to have moved several times. The honest "
    "answer needs three figures and a definition, and the definition is the part that is always "
    "left out.</p>"
    "<p><b>The headline.</b> Average labor-force tenure across thirty-three countries was about "
    "<b>ten years</b> in 2023. That sounds like a settled world. It is an aggregate across every "
    "worker in every sector, including people who have been in the same post for thirty years and "
    "are pulling the figure up very hard.</p>"
    "<p><b>The movement underneath.</b> Roughly <b>one worker in five</b> changes their employment "
    "situation in any given year, and the rate of job change has risen in <b>24 of the 27 "
    "countries</b> for which there are data. Both of those things are true at the same time as "
    "the ten-year figure.</p>"
    "<p><b>Why both can be true.</b> Tenure is heavily skewed. A small number of very long stays "
    "raise the average well above what a typical worker experiences, which is why the median is a "
    "more honest measure and is quoted far less often.</p>"
    "<p><b>What this means for advice.</b> Four moves in six years is not evidence of instability. "
    "What an employer is looking for is not a plan; it is whether you can say why each move "
    "happened and what you took from it.</p>",
    "Figures: OECD, <i>Retaining Talent at All Ages</i>, and OECD labor market statistics."))
S["y04-f6"]=lambda: f_realia(tbl("Word study","Prefixes of position",
    ["Prefix","Means","Stem","New word"],
    [["inter-","between","national","international"],["trans-","across","ferable","transferable"],
     ["sub-","under","ordinate","subordinate"],["super-","above","vise","supervise"],
     ["re-","again, back","deploy","redeploy"]]), 480)
S["y04-f7"]=lambda: f_chart([("Italy",12.2),("33-country average",10.0),
    ("United Kingdom",8.0),("Ireland",7.9),("South Korea",5.9)],
    unit="average years with one employer", w=520)
S["y04-f8"]=lambda: f_icons([("shift","a night shift"),("school","the school gate"),
    ("warehouse","the goods-in desk"),("folder","a handover"),
    ("interview","an interview"),("door","a door with a name")], cols=3)
S["y04-f9"]=lambda: f_realia(form("Northgate Distribution · Five-year plan",
    [("Where I want to be in five years",""),("Milestone at 1 year",""),
     ("Milestone at 3 years",""),("Milestone at 5 years",""),
     ("Skills I have / skills the role needs",""),("Support needed",""),
     ("Manager's comment","")],
    note="To be completed before the appraisal meeting and brought to it."), 470)
S["y04-f10"]=lambda: f_scene(820,400, people=[("tomas",270,180,{"seated":True}),
    ("grace",470,174,{"seated":True})],
    props=[("desk",420,195,1.35),("appraisal",390,168,0.62),("calendar",600,70,0.6),
    ("notebook",510,180,0.52)], window_=(650,60,140,100))
S["y04-f11"]=lambda: f_realia(tbl("Two documents","CV and scoring sheet",
    ["The CV","The panel's criteria"],
    [["Warehouse operative 2019–21<br>Day operative 2021–22<br>Goods-in 2022–23<br>"
      "Shift lead 2023–<br>______",
      "1 Sector experience &nbsp; <b>scored</b><br>2 Leading a team &nbsp; <b>unscored</b><br>"
      "3 Evidence of planning &nbsp; <b>unscored</b><br>4 Right to work &nbsp; <b>scored</b>"]]),
    520)
S["y04-f12"]=lambda: f_realia(doc("T. Alvarez · curriculum vitae","Experience",
    "<p><b>Shift lead, Northgate Distribution &middot; 2023–</b><br>"
    "Run the early shift, 14 people. Trained 6 starters.<br>"
    "<i>Took the role after covering it unpaid for 9 months.</i></p>"
    "<p><b>Goods-in operative &middot; 2022–23</b><br>"
    "Covered the desk on secondment; became permanent when the post-holder did not return.<br>"
    "Reduced short-delivery disputes from 9 a quarter to 2.</p>"
    "<p><b>Day operative &middot; 2021–22</b><br>"
    "Moved from nights. Pay 11 a week lower; I had not asked before I assumed.</p>"
    "<p><b>Warehouse operative, nights &middot; 2019–21</b><br>"
    "The job that was available.</p>"))
S["y04-f13"]=lambda: f_realia(tbl("","My path",
    ["The move","When","Why it really happened","What I took from it"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="The one I would not repeat:"), 540)
S["y04-f14"]=lambda: f_scene(920,430, behind=[("grace",180,174,{}),("nkemelu",420,176,{}),
    ("bah",660,176,{})],
    people=[("tomas",100,180,{}),("adeel",270,180,{}),("linh",340,172,{}),
    ("oksana",500,172,{}),("samira",570,172,{}),("mei",760,166,{}),("priya",830,172,{}),
    ("yusuf",890,186,{})],
    counter_=(140,230,120,110),
    props=[("jobnotice",60,40,0.6),("jobnotice",400,40,0.6),("chair",600,0,0.8),
    ("appraisal",300,190,0.62)])
S["y04-f15"]=lambda: f_chart([("not planned at all",12),("partly planned",8),
    ("planned and it changed",6),("planned and it happened",3),("still planning",2)])
S["y04-f16"]=lambda: f_scene(840,410, people=[("bah",270,176,{"smile":False})],
    props=[("busstop",150,0,1.35),("phone",350,186,0.52),("warehouse",620,70,0.6),
    ("suitcase",430,0,0.62)], panelbg="#242c38", floorbg="#30394a", floor=0.84)

# ---------------- Unit 5 ----------------
S["y05-f1"]=lambda: f_icons([("danger","hazard"),("clipboard","risk assessment"),
    ("form","near miss"),("padlock","lockout"),("meeting","toolbox talk"),
    ("essay","method statement"),("racking","racking"),("pallet","a load"),
    ("barrier","exclusion zone"),("board","safety brief")], cols=5)
S["y05-f2"]=lambda: f_scene(900,420, people=[("tomas",420,180,{"cloth":"amberish"}),
    ("samira",500,172,{"cloth":"amberish"})],
    props=[("racking",120,0,2.0),("pallet",280,0,1.0),("forklift",740,0,1.35),
    ("warehouse",60,45,0.6),("danger",650,60,0.52)], floor=0.84)
S["y05-f3"]=lambda: f_icons([("pallet","unstable load"),("forklift","no banksman"),
    ("packet","unreadable label"),("bins","obstructed walkway"),
    ("lift","overreaching"),("barrier","barrier not deployed")], cols=3)
S["y05-f4"]=lambda: f_realia(tbl("","Risk assessment, checked",
    ["Hazard","Who could be harmed","Control named","In place?"],
    [["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]],
    note="Last reviewed:"), 540)
S["y05-f5"]=lambda: f_realia(doc("Portmere Business Watch · safety briefing for members",
    "The number, and what it counts",
    "<p>Members ask for one figure they can put on a poster. Here it is, with the three things "
    "you have to say alongside it.</p>"
    "<p><b>The figure.</b> Around <b>2.93 million</b> workers die each year from work-related "
    "causes. Of those, <b>2.6 million &mdash; eighty-nine per cent &mdash; are from occupational "
    "disease</b>, and <b>330,000 from accidents</b>. A further <b>395 million</b> workers sustain "
    "non-fatal injuries.</p>"
    "<p><b>The first thing to say.</b> Most of it is disease, not accidents. Nine deaths in ten "
    "are from something that took years: dust, chemicals, noise, shift patterns. A poster showing "
    "a fall from height is showing you eleven per cent of the problem.</p>"
    "<p><b>The second thing to say.</b> The reference year is <b>2019</b> and the estimate was "
    "published in <b>2023</b>. It is the most recent global estimate that exists. It is not a "
    "figure for this year.</p>"
    "<p><b>The third thing to say.</b> These are estimates built from incomplete national "
    "reporting, and underreporting runs in one direction only. The true figure is higher.</p>",
    "Figures: ILO estimates of work-related mortality, published 2023 for reference year 2019."))
S["y05-f6"]=lambda: f_realia(tbl("Word study","Obligation and possibility",
    ["Adjective","Noun","Means"],
    [["mandatory","—","required; you cannot choose not to"],
     ["statutory","statute","required by law"],
     ["advisable","—","sensible, not required"],
     ["foreseeable","—","predictable by a reasonable person"],
     ["avoidable","—","it need not have happened"]]), 480)
S["y05-f7"]=lambda: f_part("Work-related deaths each year",
    [("occupational disease, 2.6 m",89.0,ACCENT),("accidents, 330,000",11.0,"#b9b7b0")], w=560)
S["y05-f8"]=lambda: f_icons([("pallet","a leaning stack"),("barrier","a folded barrier"),
    ("form","a closed report"),("meeting","a toolbox talk"),
    ("packet","a torn label"),("racking","an aisle taped off")], cols=3)
S["y05-f9"]=lambda: f_realia(form("Northgate Distribution · Incident report",
    [("Date",""),("Time",""),("Location",""),
     ("What happened (in your own words)",""),("Action taken",""),
     ("Was anyone injured?","&#9633; yes &nbsp; &#9633; no"),
     ("Severity","&#9633; 1 &nbsp; &#9633; 2 &nbsp; &#9633; 3 &nbsp; &#9633; 4"),
     ("Signed","")],
    note="This form goes to the site safety representative and is reviewed monthly."), 470)
S["y05-f10"]=lambda: f_scene(860,410, people=[("tomas",250,180,{"seated":True}),
    ("grace",350,174,{"seated":True}),("bah",450,176,{"seated":True}),
    ("oskar",550,180,{"seated":True})],
    props=[("table",200,250,2.2),("laptop" if "laptop" in ICON else "computer",300,190,0.45),
    ("clipboard",420,190,0.62),("board",640,45,0.6)])
S["y05-f11"]=lambda: f_realia(tbl("Two reports","March and November",
    ["Near miss · 12 March","Incident · 14 November"],
    [["Aisle 4. Stacking above head height with no barrier deployed.<br>"
      "Risk rating: <b>medium</b><br>Proposed action: <i>blank</i><br>"
      "Closed: <b>no action required</b><br>Closed by: ______",
      "Aisle 4. Pallet fell from second tier, 14:20.<br>"
      "Nobody injured. Two persons had left the aisle 11 seconds earlier.<br>"
      "Proximate cause: load stacked with weight to one side.<br>"
      "Root cause: ______"]]), 540)
S["y05-f12"]=lambda: f_realia(doc("Northgate Distribution · near miss NM-0312",
    "Aisle 4 — stacking without barrier",
    "<p><b>Reported:</b> 12 March, 16:40, by T. Alvarez.</p>"
    "<p><b>Description:</b> Stacking carried out above head height in aisle 4 with no exclusion "
    "barrier in place. Both site barriers were in use in aisles 1 and 2. No incident occurred.</p>"
    "<p><b>Risk rating:</b> medium.</p>"
    "<p><b>Proposed action:</b> &nbsp;</p>"
    "<p><b>Closure:</b> No action required. No incident has occurred in this aisle.</p>",
    "Closed 19 March. Signed: site safety representative."))
S["y05-f13"]=lambda: f_realia(tbl("","Four boxes",["",""],
    [["<b>What happened</b>",""],["<b>What should have happened</b>",""],
     ["<b>Why it did not</b>",""],["<b>What would have followed</b>",""]]), 460)
S["y05-f14"]=lambda: f_scene(920,430, people=[("bah",150,176,{"cloth":"amberish"}),
    ("tomas",220,180,{"cloth":"amberish"}),("samira",290,172,{"cloth":"amberish"}),
    ("yusuf",360,186,{"cloth":"amberish"}),("adeel",430,180,{"cloth":"amberish"}),
    ("oskar",500,180,{"cloth":"amberish"}),("linh",570,172,{"cloth":"amberish"}),
    ("mei",640,166,{"cloth":"amberish"}),("hana",860,166,{"cloth":"amberish"})],
    props=[("racking",60,0,1.6),("barrier",740,0,1.35),("forklift",790,0,1.35),
    ("board",60,40,0.6),("pallet",700,0,0.8)], floor=0.84)
S["y05-f15"]=lambda: f_chart([("told a colleague",11),("told a manager",8),
    ("reported it formally",5),("did nothing",4),("was told not to",2)])
S["y05-f16"]=lambda: f_scene(840,410, people=[("oksana",270,172,{"smile":False,"seated":True})],
    props=[("desk",220,190,1.35),("clipboard",320,180,0.62),("computer",270,150,0.52),
    ("window",600,60,1.1),("car",740,0,1.35)], clockat=(90,50,22,18,10))

# ---------------- Unit 6 ----------------
S["y06-f1"]=lambda: f_icons([("chain","dependency"),("folder","handover"),
    ("bottleneck","bottleneck"),("transfer","escalation"),("spreadsheet","a workaround"),
    ("handshake","goodwill"),("clipboard","accountability"),("email","a chase"),
    ("meeting","interpersonal"),("timer","capacity")], cols=5)
S["y06-f2"]=lambda: f_scene(840,400, people=[("priya",280,172,{"seated":True})],
    props=[("desk",230,190,1.35),("computer",280,150,0.52),("spreadsheet",390,175,0.6),
    ("lamp",190,170,0.62),("desk",560,190,1.35),("desk",700,190,1.35)],
    clockat=(90,50,22,23,10), panelbg="#242c38", floorbg="#30394a")
S["y06-f3"]=lambda: f_icons([("chain","a weak link"),("calendar","late input"),
    ("lamp","absorbed overtime"),("handshake","a good relationship"),
    ("email","a chase"),("transfer","no reporting line")], cols=3)
S["y06-f4"]=lambda: f_realia(tbl("","Map a dependency",
    ["First","Then","Then"],
    [["","",""],["<b>Owner</b>","",""],["<b>Deadline</b>","",""]],
    note="Who absorbs the delay: &nbsp;&nbsp;&nbsp; Who upstream knows:"), 500)
S["y06-f5"]=lambda: f_realia(doc("Portmere Employment Partnership · briefing for advisers, sheet 2",
    "Which skills have risen, and which are highest",
    "<p>Every year we are sent a chart showing which skills have risen in importance, and every "
    "year somebody quotes it as a chart of which skills matter most. Those are different "
    "charts.</p>"
    "<p><b>What has risen.</b> Against the survey two years earlier, employers rated "
    "<b>leadership and social influence</b> up <b>22 percentage points</b>, and <b>resilience, "
    "flexibility and agility</b> and <b>AI and big data</b> each up <b>17 points</b>.</p>"
    "<p><b>What is highest.</b> The single most-named core skill remains <b>analytical "
    "thinking</b>, which seven employers in ten call essential. It is not in the list above, "
    "because it did not move much. It did not need to; it was already first.</p>"
    "<p><b>Why the confusion matters.</b> An adviser who reads the first chart and tells a client "
    "that analytical thinking no longer matters has read a chart of velocity as though it were a "
    "chart of position.</p>"
    "<p><b>What we tell clients.</b> Work on the thing that is highest. Watch the thing that is "
    "rising fastest. They are rarely the same.</p>",
    "Figures: World Economic Forum, <i>Future of Jobs Report 2025</i>."))
S["y06-f6"]=lambda: f_realia(tbl("Word study","People and relations",
    ["Prefix","Means","Stem","New word"],
    [["co-","together with","ordinate","co-ordinate"],
     ["counter-","matching","part","counterpart"],
     ["inter-","between","personal","interpersonal"],
     ["sub-","under","ordinate","subordinate"],["ex-","former","colleague","ex-colleague"]]), 480)
S["y06-f7"]=lambda: f_chart([("analytical thinking (level)",70),
    ("leadership (change)",22),("resilience (change)",17),("AI and big data (change)",17)],
    unit="per cent — note that one bar is a level and three are changes", w=560)
S["y06-f8"]=lambda: f_icons([("chain","three desks"),("clock","eleven at night"),
    ("calendar","a deadline moved"),("email","a draft"),
    ("meeting","a kettle conversation"),("door","a half-open door")], cols=3)
S["y06-f9"]=lambda: f_realia(doc("Linkwave · Tuesday report","Process and owners",
    "<table style='width:100%;font-size:13px'>"
    "<tr><td><b>Step</b></td><td><b>Owner</b></td><td align='right'><b>Due</b></td></tr>"
    "<tr><td>1 Monday figures produced</td><td>D. Okonkwo</td>"
    "<td align='right'>Tue 09:00</td></tr>"
    "<tr><td>2 Figures checked</td><td>D. Okonkwo</td><td align='right'>—</td></tr>"
    "<tr><td>3 Report written</td><td>P. Raghavan</td><td align='right'>Tue 17:00</td></tr>"
    "<tr><td>4 Report circulated</td><td>P. Raghavan</td><td align='right'>Tue 17:00</td></tr>"
    "</table>"
    "<p style='margin-top:10px'>There is no reporting line between steps 2 and 3. Step 2 has no "
    "deadline.</p>",
    "<b>Accountable for the output:</b> P. Raghavan."))
S["y06-f10"]=lambda: f_scene(840,400, people=[("priya",270,172,{"seated":True}),
    ("grace",470,174,{"seated":True})],
    props=[("desk",420,195,1.35),("computer",470,150,0.52),("calendar",620,70,0.6),
    ("notebook",360,190,0.52)], window_=(660,60,130,100))
S["y06-f11"]=lambda: f_realia(tbl("Two schedules","Where the slack is",
    ["Figures produced","Report due"],
    [["Mon 17:00 &nbsp; data closes<br>Tue 09:00 &nbsp; target<br>"
      "Actual: Tue 09:00, 09:20, <b>13:10</b>, 09:05<br>______",
      "Tue 17:00 &nbsp; circulated<br>Writing takes about 3 hours<br>"
      "Latest safe start: <b>14:00</b><br>Slack available: ______"]]), 520)
S["y06-f12"]=lambda: f_realia(doc("To: G. Okafor","Tuesday report — the dependency",
    "<p>I'd like to raise the timing of the Tuesday report, not anybody's work.</p>"
    "<p>The report is due at 17:00 on Tuesday and depends on figures due at 09:00 the same "
    "morning. Writing it takes about three hours, so the latest safe start is 14:00.</p>"
    "<p>This quarter the figures arrived at 09:00, 09:20, <b>13:10</b> and 09:05 &mdash; four "
    "occasions late enough to matter, and I rewrote the report in the evening on each.</p>"
    "<p>Could the figures be due on Friday instead? Same work, same people, two days of slack.</p>",
    "P. Raghavan — happy to discuss."))
S["y06-f13"]=lambda: f_realia(tbl("","Dependency brief",["",""],
    [["<b>What depends on what</b>",""],["<b>The margin</b>",""],
     ["<b>Who absorbs it</b>",""],["<b>The change I'm asking for</b>",""]]), 460)
S["y06-f14"]=lambda: f_scene(920,430, people=[("priya",160,172,{"seated":True}),
    ("grace",240,174,{}),("linh",310,172,{}),("adeel",380,180,{}),
    ("mei",520,166,{"seated":True}),("oksana",600,172,{"seated":True}),
    ("samira",680,172,{}),("bah",860,176,{})],
    props=[("desk",120,190,1.35),("desk",480,190,1.35),("desk",640,190,1.35),
    ("printer",760,0,1.35),("board",60,40,0.6),("coat",820,150,0.62)],
    clockat=(700,45,24,17,30))
S["y06-f15"]=lambda: f_chart([("information from a colleague",12),
    ("a decision from a manager",9),("a document from elsewhere",5),
    ("a delivery",3),("nothing",2)])
S["y06-f16"]=lambda: f_scene(840,410, people=[("nadia",280,174,{"smile":False}),
    ("samira",430,172,{"smile":False})],
    props=[("clipboard",350,170,0.62),("coat",520,150,0.62),("door",640,96,1.35),
    ("jobnotice",120,55,0.6)], floor=0.84)
