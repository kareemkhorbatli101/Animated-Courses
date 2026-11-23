# -*- coding: utf-8 -*-
"""Book 4 figure specs, Units 4 to 6."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

# ---------------- Unit 4 ----------------
S["x04-f1"]=lambda: f_icons([("jobnotice","advertisement"),("cv","CV"),
    ("essay","covering letter"),("reference","referee"),("form","shortlist"),
    ("calendar","probation"),("deadline","notice period"),("contract" if "contract" in ICON else "form","contract"),
    ("envelope","rejection"),("interview","interview")], cols=5)
S["x04-f2"]=lambda: f_scene(800,400, people=[("adeel",270,180,{"seated":True})],
    props=[("table",200,250,1.4),("computer",250,180,0.52),("jobnotice",390,186,0.6),
    ("phone",470,196,0.52),("qualification",560,190,0.52),("cv",630,194,0.52)],
    window_=(660,56,130,100))
S["x04-f3"]=lambda: f_icons([("jobnotice","job description"),("qualification","certificate"),
    ("calendar","a gap"),("email","no reply"),("meeting","an offer"),
    ("reference","referee section")], cols=3)
S["x04-f4"]=lambda: f_realia(tbl("","Read the advert properly",
    ["Essential","Desirable"],
    [["",""],["",""],["",""],["",""],["",""]],
    note="About ability: &nbsp;&nbsp; About paper: &nbsp;&nbsp; Not stated at all:"), 480)
S["x04-f5"]=lambda: f_realia(doc("Portmere Employment Partnership · briefing for advisers",
    "Young, qualified, and waiting",
    "<p>Advisers often hear the same sentence from clients under twenty-five: <i>there is nothing "
    "out there</i>. It is worth knowing how far that is true, because the honest answer is useful "
    "and the comfortable answer is not.</p>"
    "<p><b>The global picture.</b> In 2025 the youth unemployment rate stood at <b>12.4 per "
    "cent</b> &mdash; about <b>67 million</b> people aged 15 to 24 without work and looking for "
    "it. The rate has stagnated rather than risen sharply: it was 12.3 per cent the year before, "
    "and it is projected to stay near 12.3 per cent through 2027.</p>"
    "<p><b>Where it is worst.</b> The averages conceal enormous differences. In the Arab States "
    "the youth unemployment rate is <b>26.2 per cent</b>, and in Northern Africa <b>22.6 per "
    "cent</b> &mdash; roughly double the world figure. A young person's prospects depend more on "
    "where they are standing than on anything in their control.</p>"
    "<p><b>What this means for advice.</b> A client who has applied twenty times without success "
    "is not necessarily doing anything wrong. Entry-level work is the part of the market under "
    "most pressure, so advising somebody to \"start at the bottom\" may be advising them into the "
    "longest queue. A sustained search needs a structure, or it becomes a slow erosion of the "
    "person doing it.</p>",
    "Figures: ILO, <i>Global Employment Trends for Youth 2026</i>."))
S["x04-f6"]=lambda: f_realia(tbl("Word study","Suffixes that make people",
    ["Suffix","Who it names","Stem","New word"],
    [["-er","the one who does it","train","trainer"],
     ["-or","the one who does it","supervise","supervisor"],
     ["-ee","the one it is done to","train","trainee"],
     ["-ist","a specialist","special","specialist"],
     ["-ant","one who assists or applies","apply","applicant"]]), 490)
S["x04-f7"]=lambda: f_chart([("Arab States",26.2),("Northern Africa",22.6),
    ("world average",12.4),("Northern America",9.8)], unit="per cent, 2025", w=520)
S["x04-f8"]=lambda: f_icons([("envelope","posting a letter"),("phone","taking notes"),
    ("meeting","a handshake"),("computer","submitted"),("chair","waiting"),
    ("email","a short reply")], cols=3)
S["x04-f9"]=lambda: f_realia(doc("Northgate Distribution · recruitment","Interview invitation",
    "<p>Dear Mr Rahim,</p>"
    "<p>We would like to invite you to interview for the post of <b>Team Leader, Warehouse</b>.</p>"
    "<table style='width:100%;font-size:13px;margin-top:8px'>"
    "<tr><td>Date</td><td align='right'><b>Thursday 14 November</b></td></tr>"
    "<tr><td>Time</td><td align='right'><b>11:00</b>, for about 45 minutes</td></tr>"
    "<tr><td>Where</td><td align='right'>Unit 7, Portmere Logistics Park</td></tr>"
    "<tr><td>Bring</td><td align='right'>photographic ID and your certificates</td></tr></table>"
    "<p style='margin-top:10px'>You will be seen by <b>G. Okafor</b>, Operations Manager, and by "
    "<b>D. Marsh</b>.</p>"
    "<p>There is parking on site. If you need any adjustment to take part fully in the interview, "
    "tell us in advance and we will make it.</p>"))
S["x04-f10"]=lambda: f_scene(820,400, people=[("grace",470,174,{"seated":True}),
    ("nkemelu",570,176,{"seated":True}),("adeel",260,180,{"seated":True})],
    props=[("desk",420,195,1.35),("cv",400,168,0.52),("cv",480,168,0.52),
    ("form",550,168,0.52)], clockat=(120,60,24,11,5), window_=(680,56,120,100))
S["x04-f11"]=lambda: f_realia(tbl("Two cards","The job and the person",
    ["Essential (6)","On the CV"],
    [["Lift 15 kg<br>Read labels in English<br>Work in a team<br>Right to work<br>"
      "12 months' sector experience<br><b>Forklift certificate</b>",
      "Lifts 20 kg daily<br>Reads labels and notes<br>Trained 11 people<br>Right to work: yes<br>"
      "11 months here, 6 years abroad<br><b>Certificate does not transfer</b>"]]), 520)
S["x04-f12"]=lambda: f_realia(doc("A. Rahim · 14 Bridge Lane, Portmere", None,
    "<p>Dear Ms Okafor,</p>"
    "<p>I am applying for the post of <b>Team Leader, Warehouse</b>, advertised on your own site "
    "on 2 November.</p>"
    "<p>I ran a goods-in desk for four years and trained eleven people. In my current role I have "
    "covered a supervisor's shifts for four months, including the rota and the goods-in handover. "
    "Last quarter I reduced our short-delivery disputes from nine to two by checking against the "
    "notes at the point of unloading.</p>"
    "<p>I was out of work for fourteen months in 2024 while caring for my mother. I have been "
    "available since January and my certificates are current.</p>"
    "<p>I would be glad to talk about any of this.</p>",
    "Yours sincerely, A. Rahim"))
S["x04-f13"]=lambda: f_realia(tbl("","Letter planner",["",""],
    [["<b>Which job, and where I saw it</b>",""],
     ["<b>Three things I have done, with numbers</b>",""],["",""],["",""],
     ["<b>The difficult fact, in one sentence</b>",""],
     ["<b>What happens next</b>",""]]), 480)
S["x04-f14"]=lambda: f_scene(920,430, behind=[("grace",180,174,{}),("nkemelu",420,176,{}),
    ("bah",660,176,{})],
    people=[("adeel",100,180,{}),("linh",260,172,{}),("oksana",330,172,{}),
    ("mei",500,166,{}),("tomas",570,180,{}),("yusuf",760,186,{}),("priya",840,172,{}),
    ("lucia",890,172,{})],
    counter_=(140,222,120,118),
    props=[("jobnotice",60,45,0.6),("jobnotice",400,45,0.6),("jobnotice",700,45,0.6),
    ("cv",300,195,0.52),("bag",820,210,0.62)])
S["x04-f15"]=lambda: f_chart([("one missing requirement",12),("no time",8),
    ("the language",6),("no reply last time",5),("nothing stopped me",3)])
S["x04-f16"]=lambda: f_scene(800,400, people=[("yusuf",280,186,{"smile":False})],
    props=[("busstop",150,120,1.35),("cv",350,195,0.52),("phone",420,182,0.52),
    ("timetable",620,120,0.6)], panelbg="#2c3440", floorbg="#39414d", floor=0.84)

# ---------------- Unit 5 ----------------
S["x05-f1"]=lambda: f_icons([("form","sign-up"),("timetable","rota"),("induction","induction"),
    ("key","key"),("warehouse","storeroom"),("car","van"),("firstaid","safeguarding"),
    ("receipt","expenses"),("reference","reference"),("card","thank you")], cols=5)
S["x05-f2"]=lambda: f_scene(900,420, behind=[("nkemelu",820,176,{})],
    people=[("yusuf",250,186,{}),("priya",360,172,{}),("lucia",440,172,{}),
    ("tomas",520,180,{})],
    counter_=(740,222,160,118),
    props=[("shelf",60,170,1.35),("crate",180,215,0.62),("crate",250,215,0.62),
    ("car",600,0,1.35),("form",770,152,0.52)])
S["x05-f3"]=lambda: f_icons([("shopping","sorting"),("lift","loading"),
    ("phone","coordinating"),("teacher","tutoring"),("chair","setting up"),
    ("driver","delivering")], cols=3)
S["x05-f4"]=lambda: f_realia(tbl("","What the role really asks",
    ["",""],[["Hours a week",""],["For how many months",""],["Training",""],["Expenses",""],
    ["Reference",""],["Responsibility",""],
    ["<b>What a paid job would call this</b>",""]]), 440)
S["x05-f5"]=lambda: f_realia(doc("Portmere Voluntary Sector Forum · briefing note 11",
    "The largest workforce nobody counts",
    "<p>New global estimates put the number of people doing volunteer work at around <b>2.1 "
    "billion a month</b> &mdash; about <b>34.5 per cent</b> of the world's working-age population. "
    "If that figure is right, roughly one working-age adult in three does unpaid work for somebody "
    "outside their own household every month, and almost none of it appears in any economic "
    "measure.</p>"
    "<p><b>What counts.</b> Under the international standard, volunteer work is non-compulsory "
    "work performed for others without pay. The statistical threshold is <b>one hour in a "
    "four-week period</b>. One hour. That is deliberately low, and it is why the number is so "
    "large: it counts the neighbor who collects a prescription as well as the person who runs a "
    "project.</p>"
    "<p><b>What it does not count well.</b> Fewer than seventy countries collect official "
    "statistics on volunteering, most of them wealthy ones, and they use different definitions. "
    "The global figure is therefore modelled rather than counted. It is the best estimate "
    "available and it is an estimate.</p>"
    "<p><b>Why it matters here.</b> Services in this city are underpinned by people doing one or "
    "two hours a week. That is a strength and a risk at once: it is cheap, it is local, and it "
    "depends on individuals whose circumstances change. A project built on goodwill has no notice "
    "period.</p>",
    "Figures: ILO and UNV, <i>State of the World's Volunteerism Report 2026</i>; ILOSTAT."))
S["x05-f6"]=lambda: f_realia(tbl("Word study","Negative prefixes",
    ["Prefix","Goes before","Stem","New word"],
    [["un-","most words","paid","unpaid"],["in-","many Latin stems","formal","informal"],
     ["im-","p, m, b","possible","impossible"],["ir-","r","regular","irregular"],
     ["non-","neutral, no judgement","compulsory","non-compulsory"]]), 490)
S["x05-f7"]=lambda: f_part("One hundred working-age adults",
    [("volunteer in a given month",34.0,ACCENT),("do not",66.0,"#b9b7b0")], w=560)
S["x05-f8"]=lambda: f_icons([("car","a half-loaded van"),("shelf","an empty shelf"),
    ("form","a signed sheet"),("key","a key on a hook"),("folder","a handover"),
    ("chair","chairs stacked")], cols=3)
S["x05-f9"]=lambda: f_realia(doc("Fenner Street Food Project","Volunteer agreement",
    "<p><b>1. What we ask.</b> A commitment of about two hours a week for three months, agreed "
    "with the coordinator. If you cannot come, tell us; nobody will ask why.</p>"
    "<p><b>2. Training.</b> We will provide an induction before your first session and "
    "safeguarding training within three months of starting.</p>"
    "<p><b>3. Expenses.</b> Reasonable travel and out-of-pocket expenses will be reimbursed on "
    "production of a receipt, within 28 days.</p>"
    "<p><b>4. Keys and stock.</b> Volunteers holding keys are responsible for securing the "
    "premises and the stock on their round.</p>"
    "<p><b>5. Confidentiality.</b> Nothing you learn about a beneficiary leaves this building.</p>"
    "<p><b>6. Ending it.</b> Either side may end this arrangement at any time, with or without "
    "notice, and no reason need be given.</p>",
    "This agreement is binding in honour only. It is not a contract of employment and does not "
    "create any employment relationship."))
S["x05-f10"]=lambda: f_scene(800,390, people=[("nkemelu",470,176,{"seated":True}),
    ("yusuf",250,186,{})],
    props=[("desk",410,195,1.35),("folder",390,168,0.52),("computer",470,150,0.52),
    ("timetable",100,60,0.6),("key",620,160,0.52),("cupboard",690,195,1.35)])
S["x05-f11"]=lambda: f_realia(tbl("Two documents","Rota and expenses",
    ["Saturday rota","Expenses form"],
    [["2 Nov &nbsp; Y. Osman<br>9 Nov &nbsp; Y. Osman<br>16 Nov &nbsp; Y. Osman<br>"
      "23 Nov &nbsp; T. Alvarez<br>30 Nov &nbsp; Y. Osman<br>7 Dec &nbsp; Y. Osman",
      "Date &nbsp; Journey &nbsp; Miles &nbsp; Rate &nbsp; Claim<br>"
      "____ &nbsp; round &nbsp; 18 &nbsp; 0.45 &nbsp; 8.10<br>"
      "Worked example only. Claims within 28 days.<br>"
      "Signature of coordinator required."]]), 520)
S["x05-f12"]=lambda: f_realia(doc("Fenner Street Food Project","To whom it may concern",
    "<p>Yusuf Osman volunteered with this project from April to the present, normally on "
    "Saturdays.</p>"
    "<p>He planned and ran the delivery round, which covers eleven stops across two streets. He "
    "trained two new volunteers. He covered the goods-in desk on four occasions when we were "
    "short-staffed, and on one of those occasions dealt with a delivery that was three crates "
    "short and recorded it correctly.</p>"
    "<p>He has never missed an agreed session without telling us first.</p>"
    "<p>I am happy to be contacted about any of this.</p>",
    "R. Nkemelu · Coordinator · Fenner Street Food Project"))
S["x05-f13"]=lambda: f_realia(tbl("","What to call it",
    ["What I did","What to call it"],
    [["",""],["",""],["",""],["",""],["",""],["",""]],
    note="The number that proves it:"), 460)
S["x05-f14"]=lambda: f_scene(920,430, behind=[("nkemelu",760,176,{})],
    people=[("yusuf",180,186,{}),("priya",260,172,{}),("lucia",340,172,{}),
    ("tomas",420,180,{}),("linh",560,172,{}),("adeel",630,180,{}),("hana",700,166,{}),
    ("oksana",870,172,{})],
    counter_=(720,226,180,114),
    props=[("crate",80,215,0.62),("crate",140,215,0.62),("car",470,0,1.35),
    ("shelf",50,150,1.35),("queue",840,205,0.62)])
S["x05-f15"]=lambda: f_chart([("helped a neighbor",14),("interpreted for somebody",9),
    ("worked for an organization",6),("taught or tutored",4),("never done any",2)])
S["x05-f16"]=lambda: f_scene(820,410, people=[("oyelaran",270,170,{"smile":False})],
    props=[("chair",180,235,0.7),("chair",360,235,0.7),("key",340,180,0.52),
    ("timetable",600,100,0.6)], panelbg="#242c38", floorbg="#30394a", floor=0.84)

# ---------------- Unit 6 ----------------
S["x06-f1"]=lambda: f_icons([("pan","stock pot"),("choppingboard","chopping station"),
    ("scales","scales"),("spoon","ladle"),("cooker","hotplate"),("fridge","cold store"),
    ("canteen","serving counter"),("packet","batch label"),("crate","crate"),
    ("tray","portions")], cols=5)
S["x06-f2"]=lambda: f_scene(900,410, behind=[("hana",300,166,{})],
    people=[("tomas",770,180,{})],
    counter_=(140,228,460,112),
    on_counter=[("crate",160,0.6),("crate",410,0.6),("pan",500,0.55),("scales",580,0.5)],
    props=[("cooker",640,0,1.2),("door",830,96,1.1)])
S["x06-f3"]=lambda: f_icons([("crate","crate"),("pan","boil"),("scales","weigh"),
    ("fridge","store"),("tray","portion out"),("bins","trimmings")], cols=3)
S["x06-f4"]=lambda: f_realia(tbl("","Where the surplus goes",
    ["",""],[["What is left",""],["How much",""],["What happens to it",""],["Who decides",""],
    ["<b>What it would take to change this</b>",""]]), 440)
S["x06-f5"]=lambda: f_realia(doc("Portmere Community Kitchen · briefing for volunteers",
    "A billion tonnes, and your fridge",
    "<p>Globally, about <b>1.05 billion tonnes</b> of food is wasted every year. That figure "
    "includes inedible parts &mdash; peelings, bones, shells &mdash; and it comes to roughly "
    "<b>132 kilograms a year for every person on the planet</b>.</p>"
    "<p><b>Where it happens.</b> Households are the largest single source, at <b>60 per cent</b> "
    "of the total: <b>631 million tonnes</b>, or about <b>79 kilograms per person per year</b>. "
    "Food service and retail account for the rest. The common belief that supermarkets are the "
    "main problem is not supported by the figures, although what supermarkets throw away is more "
    "visible and arrives in larger pieces.</p>"
    "<p><b>What this means for a kitchen like ours.</b> The surplus we are given is food that has "
    "already survived the shop; diverting it is useful but marginal next to what is thrown away "
    "in homes. The single most effective thing this kitchen does is not the cooking. It is "
    "sending people home able to use what they already have.</p>"
    "<p><b>The uncomfortable part.</b> Household waste levels are remarkably similar across rich "
    "and middle-income countries. This is not a problem of wealth. It is a problem of planning, "
    "storage and dates, in almost every kind of household there is.</p>",
    "Figures: UN Environment Program, <i>Food Waste Index Report 2024</i>."))
S["x06-f6"]=lambda: f_realia(tbl("Word study","The -able family",
    ["Verb","+ -able","Means","With un-"],
    [["eat","eatable / edible","can be eaten","inedible"],
     ["avoid","avoidable","can be avoided","unavoidable"],
     ["use","usable","can be used","unusable"],
     ["rely","reliable","can be relied on","unreliable"],
     ["afford","affordable","can be afforded","unaffordable"]]), 500)
S["x06-f7"]=lambda: f_part("All food wasted each year",
    [("households",60.0,ACCENT),("food service",28.0,"#8ab0dd"),("retail",12.0,"#b9b7b0")],
    w=560)
S["x06-f8"]=lambda: f_icons([("uniform","two aprons"),("tin","two containers"),
    ("knife","three knives"),("notebook","two recipe cards"),("packet","named jars"),
    ("key","two sets of keys")], cols=3)
S["x06-f9"]=lambda: f_realia(doc("Freshline · recipe card 12 · scaled","Chickpea and tomato stew",
    "<p><b>Yield: 60 portions</b> (card written for 12) &middot; <b>Time: 50 minutes</b></p>"
    "<table style='width:100%;font-size:13px'>"
    "<tr><td><b>Ingredient</b></td><td align='right'><b>for 12</b></td>"
    "<td align='right'><b>for 60</b></td></tr>"
    "<tr><td>Tinned chickpeas</td><td align='right'>6 tins</td><td align='right'>30 tins</td></tr>"
    "<tr><td>Tinned tomatoes</td><td align='right'>6 tins</td><td align='right'>30 tins</td></tr>"
    "<tr><td>Onions</td><td align='right'>6</td><td align='right'>30</td></tr>"
    "<tr><td>Oil</td><td align='right'>12 tbsp</td><td align='right'>600 ml</td></tr>"
    "<tr><td>Cumin</td><td align='right'>6 tsp</td><td align='right'><b>18 tsp</b></td></tr>"
    "<tr><td>Water</td><td align='right'>1.2 l</td><td align='right'>6 l</td></tr></table>"
    "<p style='margin-top:8px;font-size:13px'>1 Chop. 2 Sweat the onions, 8 min. 3 Spices, 1 min. "
    "4 Everything else, simmer 25 min. 5 Off the heat, parsley.</p>"
    "<p><b>Allergens:</b> none in the base recipe. Check every label on the day.</p>",
    "<span class='hand' style='font-family:Bricolage Grotesque,cursive;font-size:16px'>"
    "cumin does NOT x5 — H</span>"))
S["x06-f10"]=lambda: f_scene(900,410, behind=[("hana",260,166,{})],
    people=[("tomas",620,180,{})],
    counter_=(130,228,350,112),
    on_counter=[("pan",165,0.58),("pan",235,0.58),("tray",330,0.52),("crate",400,0.55)],
    props=[("cooker",700,0,1.1),("timetable",790,70,0.62)],
    clockat=(80,52,22,11,30))
S["x06-f11"]=lambda: f_realia(tbl("Two cards","Stock and recipe",
    ["In the store today","The recipe, for 12"],
    [["Beetroot &nbsp; 40 kg<br>Chickpeas &nbsp; 9 tins<br>Onions &nbsp; 4 kg<br>"
      "Tinned tomatoes &nbsp; 22<br>Oil &nbsp; 2 l<br><b>Potatoes &nbsp; none</b>",
      "Potatoes &nbsp; 3 kg<br>Chickpeas &nbsp; 6 tins<br>Onions &nbsp; 6<br>"
      "Tinned tomatoes &nbsp; 6<br>Oil &nbsp; 12 tbsp<br><b>Cumin &nbsp; 6 tsp</b>"]]), 520)
S["x06-f12"]=lambda: f_realia(doc("Batch label", None,
    "<p style='font-size:17px'><b>Chickpea and beetroot stew</b></p>"
    "<table style='width:100%;font-size:13px'>"
    "<tr><td>Cooked</td><td align='right'>Tue 12 Nov, 11:40</td></tr>"
    "<tr><td>Portions</td><td align='right'>24</td></tr>"
    "<tr><td>Allergens</td><td align='right'>none &mdash; labels checked</td></tr>"
    "<tr><td><b>Use by</b></td><td align='right'><b>Thu 14 Nov</b></td></tr>"
    "<tr><td>Made by</td><td align='right'>H.K.</td></tr></table>",
    "<b>Reheat until steaming throughout. Do not reheat twice.</b>"))
S["x06-f13"]=lambda: f_realia(tbl("","Substitution planner",
    ["What the recipe needs","What it was doing there","What could do the same job"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]]), 520)
S["x06-f14"]=lambda: f_scene(920,430, behind=[("hana",640,166,{}),("nkemelu",730,176,{})],
    people=[("lucia",140,172,{"seated":True}),("mei",220,166,{"seated":True}),
    ("priya",300,172,{"seated":True}),("tomas",420,180,{}),("linh",490,172,{}),
    ("adeel",550,180,{}),("yusuf",850,186,{}),("oksana",890,172,{})],
    counter_=(600,226,220,114),
    props=[("table",120,250,1.6),("table",380,250,1.35),("tray",660,152,0.62),
    ("queue",820,205,0.62)])
S["x06-f15"]=lambda: f_chart([("bread",11),("vegetables",9),("leftovers",7),
    ("dairy",4),("nothing",2)])
S["x06-f16"]=lambda: f_scene(820,410, people=[("bah",290,176,{"smile":False})],
    counter_=(150,216,330,124),
    props=[("tray",200,148,0.62),("tray",270,148,0.62),("tray",340,148,0.62),
    ("bins",570,0,1.35),("door",720,110,1.35)], clockat=(80,55,22,14,10))
