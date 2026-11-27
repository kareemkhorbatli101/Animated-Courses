# -*- coding: utf-8 -*-
"""Clearline Book 3 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · Hiring and Handing Over ----------------
S["q07-f1"]=lambda: f_icons([("jobnotice","an advertisement"),("application","applications"),
    ("inventory","a shortlist"),("interview","an interview"),("spreadsheet","a scorecard"),
    ("reference","a reference"),("signature","a signed offer"),("badge","a first-day badge"),
    ("folder","a handover"),("essay","a 30-60-90 plan")], cols=5)
S["q07-f2"]=lambda: f_scene(900,420, people=[("nour",330,168,{"seated":True})],
    props=[("desk",190,0,1.35),("computer",250,145,0.52),("essay",430,208,0.36),
    ("pen",500,210,0.24)],
    board=(740,24,160,110,"THE TEAM",[("coordinator","—")]))
S["q07-f3"]=lambda: f_icons([("essay","dated March 2021"),("folder","an extra folder"),
    ("tray","a colleague who left"),("computer","a new system"),
    ("iron","done by hand now"),("badge","a title that no longer fits")], cols=3)
S["q07-f4"]=lambda: f_realia(tbl("","The real job",
    ["What I actually do","&#10003;","In the description"],
    [["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="<b>The thing only I can do:</b>"), 520)
S["q07-f5"]=lambda: f_realia(doc("Lindmark Freight &middot; operations coordinator (customs)",
    "version 3 &middot; 18 March &middot; replaces version 1, March 2021",
    "<p><b>Purpose.</b> To keep goods moving legally across three borders, and to be the person "
    "who knows what changed.</p>"
    + table_html(["Accountability","Time"],
      [["Customs classification and documentation, three countries","45%"],
       ["Monitoring rule changes and briefing the team","15%"],
       ["Booking and amending shipments","20%"],
       ["Customer paperwork queries","10%"],
       ["Training two colleagues as backup","10%"]])
    + "<p><b>What this job is not.</b> Not transport planning (W. Zhang), not invoicing "
    "(M. Dolny), and not the four tasks in version 1 that no longer exist.</p>"
    "<p style='background:#fff3cf'><b>Grade.</b> Proposed one grade above the post it replaces. "
    "The customs work was absorbed in 2022 and has never been graded.</p>",
    "New since version 1: the customs section (45% of the job), the training accountability, and "
    "this grade line."))
S["q07-f6"]=lambda: f_realia(tbl("Word study","The commas change the meaning",
    ["Type","Example","What it implies"],
    [["defining &mdash; <b>no commas</b>","The coordinator <b>who speaks Korean</b> is leaving.",
      "there is more than one coordinator"],
     ["non-defining &mdash; <b>commas</b>",
      "The coordinator, <b>who speaks Korean</b>, is leaving.",
      "there is one, and here is a fact about her"],
     ["things","The customs work, <b>which was absorbed in 2022</b>, is ungraded.","&mdash;"],
     ["possession","Ines, <b>whose job this is</b>, wrote half of it.","&mdash;"],
     ["<b>never <i>that</i></b>","Ines, <s>that</s> <b>who</b> handles customs&hellip;","&mdash;"]]),
    540)
S["q07-f7"]=lambda: f_chart([("2024",2.7),("2023",1.8),("2022",-0.9)],
    unit="% global REAL wage growth &mdash; separately, the global labour income share was 52.6% "
    "in 2025, which measures something else", w=520)
S["q07-f8"]=lambda: f_icons([("essay","dated 2021"),("folder","handed over"),
    ("meeting","being shown"),("stamp","a border"),
    ("chair","an empty chair"),("calendar","thirty, sixty, ninety")], cols=3)
S["q07-f9"]=lambda: f_realia(tbl("Interview scorecard &middot; operations coordinator (customs)",
    "three candidates &middot; scored before discussion",
    ["Criterion","Weight","A","B","C"],
    [["Customs classification experience","30%","4","2","5"],
     ["Rule-change monitoring","20%","3","2","4"],
     ["Written English for customer queries","20%","3","5","3"],
     ["Training others","20%","2","4","3"],
     ["<b>Willingness to document what they know</b>","10%","<b></b>","<b></b>","<b></b>"]],
    note="One row has no scores: nobody asked the question. "
    "<b>Recommendation:</b> candidate C."), 540)
S["q07-f10"]=lambda: f_scene(900,420, people=[("okonjo",330,182,{"seated":True}),
    ("nour",480,168,{})],
    props=[("desk",210,0,1.35),("essay",290,205,0.36),("spreadsheet",390,145,0.4),
    ("essay",540,150,0.34)],
    board=(720,24,160,110,"THE TEAM",[("vacancy","1")]))
S["q07-f11"]=lambda: f_realia(tbl("Two descriptions","The same post",
    ["March 2021 &mdash; eleven bullets","Version 3 &mdash; six accountabilities"],
    [["&bull; coordinate shipments<br>&bull; liaise with carriers<br>&bull; maintain records<br>"
      "&bull; support the team<br>&bull; produce reports<br>&bull; other duties as required<br>"
      "&bull; <i>(four more that nobody now does)</i><br><br>"
      "<i>No percentages. No customs. No grade.</i>",
      "Customs classification, three countries &mdash; <b>45%</b><br>"
      "Rule changes and briefing &mdash; 15%<br>Booking and amending &mdash; 20%<br>"
      "Customer queries &mdash; 10%<br>Training backups &mdash; 10%<br>"
      "<b>What this job is not:</b> planning, invoicing<br>"
      "<b>Grade:</b> one band up, with a reason"]]), 540)
S["q07-f12"]=lambda: f_realia(doc("Two handovers", None,
    "<p><b>A.</b> Files are in Operations/Customs. Password for the broker portal is in the "
    "shared vault. The classification spreadsheet is on my desktop. Good luck!</p>"
    "<p style='font-size:12px;color:#6b6861'>A list of locations. Nothing about the job.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>Written down:</b> version 3 of the description is "
    "accurate &mdash; work from that, not version 1. <b>Not written down:</b> the housings "
    "classification is contested and our code is defensible (see Customs/Notes/2023-housings); the "
    "Gdansk broker answers within a day and is not on the approved list; the rule change affects "
    "one country and only consignments over 1,200 kg, which I check by hand. <b>Who else can do "
    "these:</b> nobody; Wei; nobody. <b>What will break first:</b> the 1,200 kg check, within "
    "about two months, and it will look like a carrier delay.</p>"))
S["q07-f13"]=lambda: f_realia(form("Handover planner",
    [("What I do that is written down",""),("What I do that is <b>not</b> written down",""),
     ("Who else can do each thing &mdash; a name, or <i>nobody</i>",""),
     ("<b>What will break first, and roughly when</b>",""),
     ("What I would change","")]), 520)
S["q07-f14"]=lambda: f_scene(1000,450, people=[("nour",150,168,{}),("ines",240,172,{}),
    ("priya",330,172,{"seated":True}),("adeel",420,174,{"seated":True}),
    ("okonjo",520,182,{}),("hanna",610,172,{}),("marek",700,180,{}),
    ("yara",790,172,{}),("wei",870,170,{}),("ravi",950,176,{})],
    props=[("desk",100,0,1.2),("spreadsheet",200,140,0.42),("table",380,250,1.3),
    ("essay",450,196,0.32),("printer",640,205,0.5),("flipchart",860,46,0.8),
    ("chair",270,210,0.6)],
    board=(540,20,160,110,"CRITERIA",[("five","weighted")]))
S["q07-f15"]=lambda: f_chart([("about half",7),("mostly",6),("hardly at all",4),
    ("I have never seen it",3),("completely",2)])
S["q07-f16"]=lambda: f_scene(860,410, people=[],
    props=[("desk",240,0,1.3),("essay",300,205,0.36),("essay",380,208,0.32),
    ("computer",460,145,0.5),("note",540,210,0.24)],
    window_=(630,56,130,96), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 8 · The Report ----------------
S["q08-f1"]=lambda: f_icons([("essay","a report"),("inventory","a contents page"),
    ("note","three bullets"),("data","two projections"),("refnumber","a footnote"),
    ("archive","an appendix"),("star","a recommendation"),("magnifier","one sentence"),
    ("stamp","a date"),("review","read at the chart")], cols=5)
S["q08-f2"]=lambda: f_scene(900,420, people=[("paula",330,170,{"seated":True})],
    props=[("desk",190,0,1.35),("essay",260,205,0.38),("computer",430,145,0.52),
    ("pencil",520,210,0.22)])
S["q08-f3"]=lambda: f_icons([("transfer","one cause, one effect"),("chain","two causes, one effect"),
    ("worried","a cause nobody found"),("review","two things at once"),
    ("data","a probable cause"),("magnifier","a hidden third cause")], cols=3)
S["q08-f4"]=lambda: f_realia(tbl("","The sentence that gets quoted",
    ["The sentence people quote","The sentence the writer wanted"],
    [["",""],["",""],["",""]],
    note="<b>What makes a sentence quotable:</b>"), 520)
S["q08-f5"]=lambda: f_realia(doc("Arvo Components &middot; planning assumptions for next year",
    "P. Moreau &middot; 20 March &middot; page 2 of 4",
    table_html(["Published","Projection for next year","Note"],
      [["June 2026","<b>3.1%</b>","baseline"],
       ["June 2026","<b>1.8%</b>","alternative scenario: prolonged energy disruption"],
       ["September 2026","<b>3.0%</b>","current baseline, <b>revised down</b> from 3.1%"]])
    + "<p>The September interim report projects global growth of <b>2.9% this year and 3.0% next "
    "year</b>. G20 headline inflation <b>4.1%</b> this year, easing to <b>3.6%</b>. United States "
    "2.2 then 2.1; China 4.5 then 4.2.</p>"
    "<p style='background:#fff3cf'><b>What we plan on.</b> 3.0 percent &mdash; the September "
    "projection &mdash; and we review in March. We are not planning on 1.8 percent. If energy "
    "disruption returns, we hold the two Q2 hires and defer the second line. <b>That decision is "
    "written down now so that it does not have to be invented in a hurry.</b></p>",
    "OECD Economic Outlook Interim Report, September 2026 &middot; review date: March"))
S["q08-f6"]=lambda: f_realia(tbl("Word study","Cause, result, contrast",
    ["Group","Word","Followed by","Example"],
    [["cause","<b>because / as</b>","a clause","<b>because</b> energy prices rose"],
     ["cause","<b>due to / owing to</b>","<b>a noun</b>","<b>due to</b> higher energy prices"],
     ["result","<b>so</b>","a clause","prices rose, <b>so</b> we deferred the hires"],
     ["result","<b>therefore / as a result</b>","a clause, after a comma",
      "<b>As a result</b>, we deferred the hires."],
     ["result","<b>which meant</b>","a clause","prices rose, <b>which meant</b> a smaller margin"],
     ["contrast","<b>however</b>","a new sentence","<b>However</b>, September is lower."],
     ["contrast","<b>although / whereas</b>","a clause","<b>Although</b> the figure fell&hellip;"],
     ["contrast","<b>despite / in spite of</b>","a noun or <i>-ing</i>",
      "<b>Despite</b> the revision&hellip;"]],
    note="<i>Due to the energy prices rose</i> is the commonest error at this level, and it is "
    "always noticed."), 560)
S["q08-f7"]=lambda: f_line([("now",0),("+1",1.0),("+2",2.0),("+3",3.0)], w=540,
    unit="% projected growth for next year, by publication: June 3.1 &middot; September 3.0 "
    "&middot; June alternative scenario 1.8", mark=("+3","3.1 → 3.0 → 1.8"), ymin=0)
S["q08-f8"]=lambda: f_icons([("note","three bullets"),("stamp","a figure with a date"),
    ("data","two diverging lines"),("flashcard","a decision made early"),
    ("inventory","limitations"),("archive","the appendix")], cols=3)
S["q08-f9"]=lambda: f_realia(doc("Planning assumptions &mdash; executive summary",
    "P. Moreau &middot; one page",
    "<p>&bull; Our carrier rate reopens if fuel moves more than 8% &mdash; clause 7.2.<br>"
    "&bull; The growth projection we plan on was revised down in September.<br>"
    "&bull; Two of our three largest customers have not given us their own plans.</p>"
    "<p><b>Recommendation: approve the plan at 3.0 percent and buy a wider fuel band, even at a "
    "premium.</b></p>"
    "<p><b>We plan on</b> 3.0% &mdash; OECD, September 2026 &mdash; <b>review March</b>.</p>"
    "<p><b>What would change this.</b> The June alternative scenario, 1.8%. Under it we hold the "
    "two Q2 hires and defer the second line.</p>",
    "<b>What this report cannot tell you:</b> whether fuel will move 8%; whether the September "
    "projection will hold; anything about our two largest customers' own plans."))
S["q08-f10"]=lambda: f_scene(900,420, people=[("okonjo",330,182,{"seated":True}),
    ("paula",470,170,{"seated":True})],
    props=[("table",400,250,1.4),("essay",360,196,0.36),("cafe",520,200,0.32),
    ("pencil",440,200,0.2)],
    board=(720,24,170,110,"3 LINES",[("3.1","3.0"),("1.8","?")]))
S["q08-f11"]=lambda: f_realia(tbl("Two summaries","The same report",
    ["Leading with growth","Leading with the clause"],
    [["<b>Growth will be 3 percent next year.</b> On that basis the plan is affordable and we "
      "recommend approval.<br><br>"
      "<i>No date, no source, no scenario. In March this page is wrong.</i>",
      "<b>Our carrier rate reopens if fuel moves more than 8 percent</b> (clause 7.2). I do not "
      "know how likely that is, and it is the single thing in this plan that could move most. "
      "Growth: 3.0 percent, the OECD's September projection, reviewed in March.<br><br>"
      "<i>Leads with the uncertainty that can be acted on.</i>"]]), 540)
S["q08-f12"]=lambda: f_realia(doc("Two executive summaries", None,
    "<p><b>A.</b> The outlook is positive. Growth will be around three percent. Our costs are "
    "under control and our carrier arrangements are secure. We recommend approval of the plan as "
    "submitted.</p>"
    "<p style='font-size:12px;color:#6b6861'>Four confident sentences, no dates, no sources, "
    "nothing anybody can check in March.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>The finding that matters most:</b> our carrier rate "
    "reopens if fuel moves more than 8 percent either way (clause 7.2); if it reopens, our whole "
    "freight assumption is void, and I do not know how likely an 8 percent move is. <b>We plan "
    "on</b> 3.0 percent &mdash; the OECD's September projection, revised down from 3.1 in June "
    "&mdash; and review in March. <b>Under the 1.8 percent scenario we hold the two Q2 hires and "
    "defer the second line</b>, decided now. <b>What this cannot tell you:</b> whether fuel will "
    "move; our two largest customers' own plans, asked for twice.</p>"))
S["q08-f13"]=lambda: f_realia(form("One-page report planner",
    [("<b>The finding that matters most</b>",""),
     ("What we plan on &mdash; figure, whose, and its date",""),
     ("What would change it &mdash; and what we would do, decided now",""),
     ("The recommendation",""),("<b>What this report cannot tell you</b>","")]), 520)
S["q08-f14"]=lambda: f_scene(1000,450, people=[("paula",160,170,{}),
    ("okonjo",280,182,{"seated":True}),("hanna",370,172,{"seated":True}),
    ("marek",460,180,{"seated":True}),("yara",550,172,{"seated":True}),
    ("nour",640,168,{"seated":True}),("chiamaka",730,172,{"seated":True}),
    ("ravi",820,176,{}),("wei",890,170,{}),("ines",960,172,{})],
    props=[("table",300,250,1.6),("essay",380,196,0.32),("computer",470,196,0.36),
    ("cafe",860,205,0.5),("archive",80,0,0.6),("flipchart",220,46,0.8)],
    board=(560,20,170,110,"3.0%",[("published","Sept")]))
S["q08-f15"]=lambda: f_chart([("some",7),("I do not know",6),("most",4),
    ("none",4),("all of them",2)])
S["q08-f16"]=lambda: f_scene(860,410, people=[],
    props=[("desk",240,0,1.3),("essay",300,205,0.36),("computer",420,145,0.5),
    ("essay",520,210,0.3),("calendar",150,110,0.5)],
    window_=(640,56,120,96))

# ---------------- Unit 9 · Risk ----------------
S["q09-f1"]=lambda: f_icons([("spreadsheet","a register"),("padlock","a locked laptop"),
    ("flood","a flooded floor"),("iron","a halted line"),("noentry","a closed gate"),
    ("insurance","a policy"),("pipe","a frozen pipe"),("data","backups"),
    ("fireexit","a fire exit"),("clipboard","a walk-round")], cols=5)
S["q09-f2"]=lambda: f_scene(900,420, people=[("okonjo",300,182,{"seated":True}),
    ("nour",400,168,{"seated":True}),("anders",490,182,{"seated":True})],
    props=[("table",380,250,1.4),("essay",350,196,0.34),("pipe",560,196,0.3)],
    board=(730,24,170,120,"LIKELIHOOD / IMPACT",[("high / high","cyber"),("low / high","fire")]))
S["q09-f3"]=lambda: f_icons([("essay","a glossy framework"),("inventory","a copied list"),
    ("meeting","the dramatic risks"),("pipe","the unglamorous one"),
    ("worried","the person nobody asked"),("archive","a register nobody reads")], cols=3)
S["q09-f4"]=lambda: f_realia(tbl("","The unlisted risk",
    ["What could stop us","Who already knows","What it would cost to fix"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>Is it on the register?</b>"), 520)
S["q09-f5"]=lambda: f_realia(tbl("Lindmark Freight &middot; Ostberg site risk register",
    "reviewed 4 December, after the November incident",
    ["Risk","Likelihood","Impact","Controls","Owner"],
    [["Cyber incident","high","high","backups, training, insurance","M. Dolny"],
     ["Supplier failure","medium","high","dual sourcing on 4 of 11 lines","C. Obi"],
     ["Fire","low","very high","alarms, drills, insurance","A. Holm"],
     ["Flood (river)","low","high","none &mdash; site is 4 km from the river","A. Holm"],
     ["Key person loss","medium","medium","partial; 2 of 6 roles have no backup","N. Khalil"],
     ["<b>Water ingress from roof pipework</b>","<b>&mdash;</b>","<b>&mdash;</b>","<b>none</b>",
      "<b>added 4 Dec</b>"]],
    note="Eleven rows, nine of them from a template. The twelfth was added by hand, in different "
    "ink, after the thing happened."), 560)
S["q09-f6"]=lambda: f_realia(tbl("Word study","The second conditional",
    ["Pattern","Use","Example"],
    [["<b>if + past simple, would</b>","unreal or unlikely",
      "<b>If</b> the line <b>stopped</b>, we <b>would</b> lose 90,000."],
     ["<b>if + past simple, could / might</b>","possible result",
      "<b>If</b> it <b>froze</b> again, we <b>might</b> lose a day."],
     ["<b>if I were you</b>","advice","<b>If I were</b> you, I'<b>d</b> insulate the pipe."],
     ["<b>if + past perfect, would have</b>","looking back",
      "We <b>would have</b> avoided it <b>if</b> we <b>had</b> asked him."]],
    note="First conditional for what you expect; second for what you are examining. In a register, "
    "use <i>were</i>."), 540)
S["q09-f7"]=lambda: f_chart([("cyber incidents",42),("artificial intelligence",32),
    ("business interruption",0)],
    unit="% of respondents naming each risk &mdash; 3,338 risk experts in 97 countries; "
    "interruption is third, its percentage not published here", w=540)
S["q09-f8"]=lambda: f_icons([("pipe","a pipe in a roof void"),("padlock","a locked rack"),
    ("noentry","one supplier's gate"),("key","one person, all the keys"),
    ("flood","a flooded floor"),("insurance","the excess")], cols=3)
S["q09-f9"]=lambda: f_realia(doc("Post-incident review &mdash; water ingress, 18 November",
    "site stopped 2 days &middot; reviewed 4 December",
    table_html(["Time","What happened"],
      [["06:10","water found in packing bay by early shift"],
       ["06:25","mains isolated; maintenance called out"],
       ["07:40","source traced to split pipe in roof void above packing"],
       ["09:00","site stopped; staff stood down"],
       ["20 Nov","drying contractor on site"],
       ["21 Nov","production resumed at 60%"]])
    + table_html(["Cost","Amount"],
      [["Damage and drying","about 34,000"],["Business interruption","about 76,000"],
       ["<b>Total</b>","<b>about 110,000</b> (we paid the 25,000 excess)"]])
    + "<p style='background:#fff3cf'><b>What was known beforehand.</b> Maintenance log, 14 March: "
    "“no insulation above the packing bay”. Maintenance log, 2 October: “no "
    "insulation above the packing bay &mdash; second entry”.</p>",
    "<b>Root cause:</b> uninsulated pipe run in an unheated void. <b>Contributing cause:</b> the "
    "maintenance log is not read between quarterly reviews, and the technician does not attend "
    "them."))
S["q09-f10"]=lambda: f_scene(920,420, people=[("tomas",300,176,{}),
    ("okonjo",470,182,{"seated":True}),("nour",560,168,{"seated":True}),
    ("anders",650,182,{"seated":True})],
    props=[("table",420,250,1.4),("essay",370,196,0.34)],
    board=(760,24,150,120,"FD/ROOF",[("pipe","split"),("void","no lagging")]))
S["q09-f11"]=lambda: f_realia(tbl("Two registers","The same site",
    ["Eleven template rows","Seven real ones"],
    [["cyber &middot; supplier failure &middot; fire &middot; flood &middot; key person &middot; "
      "regulation &middot; reputation &middot; pandemic &middot; fraud &middot; strike &middot; "
      "energy price<br><br><i>All columns filled. Nothing about this building.</i>",
      "<b>roof pipework</b> &mdash; once in 4 winters &mdash; 110,000 / 2 days &mdash; none "
      "&mdash; A. Holm &mdash; lag by 20 Dec<br>"
      "<b>bay 2 compressor bearing</b> &mdash; “months, not years” &mdash; 3 days of "
      "chilled lines &mdash; none &mdash; A. Holm<br>"
      "cyber &middot; supplier failure &middot; fire &middot; key person<br>"
      "<b>flood (river) &mdash; ACCEPTED &mdash; D. Okonjo</b>"]]), 540)
S["q09-f12"]=lambda: f_realia(doc("Two register rows", None,
    "<p><b>A.</b> <b>Risk:</b> flooding. <b>Likelihood:</b> medium. <b>Impact:</b> high. "
    "<b>Controls:</b> monitored.</p>"
    "<p style='font-size:12px;color:#6b6861'>Nobody can spend money on this row. What is "
    "“monitored”?</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>Risk:</b> water ingress from uninsulated roof "
    "pipework above the packing bay; the pipe freezes below about &minus;6 &deg;C and splits on "
    "thawing. <b>Likelihood:</b> has happened once in four winters; the void is still "
    "uninsulated. <b>Impact:</b> about 110,000 and two days, of which we paid the 25,000 excess. "
    "<b>Controls:</b> <b>none.</b> <b>Owner:</b> A. Holm. <b>Action:</b> lag the run &mdash; about "
    "600 and two hours &mdash; <b>by 20 December</b>, before the first hard frost.</p>"))
S["q09-f13"]=lambda: f_realia(form("Register row planner",
    [("Mechanism &mdash; not a label",""),("Likelihood &mdash; as a frequency",""),
     ("Impact &mdash; in money and days",""),("Controls that exist today",""),
     ("Owner",""),("One dated action",""),
     ("<b>If we are accepting this, who is accepting it</b>","")]), 520)
S["q09-f14"]=lambda: f_scene(1000,450, people=[("tomas",150,176,{}),("anders",240,182,{}),
    ("okonjo",330,182,{}),("nour",420,168,{}),("ravi",510,176,{}),
    ("ines",600,172,{}),("marek",690,180,{}),("yara",780,172,{}),
    ("wei",860,170,{}),("hanna",950,172,{})],
    props=[("pipe",200,110,0.4),("clipboard",290,150,0.4),("computer",470,140,0.42),
    ("fireexit",640,110,0.45),("camera",730,196,0.28),("racking",880,40,0.85),
    ("crate",100,0,0.6)],
    panelbg="#2b3340", floorbg="#39404c")
S["q09-f15"]=lambda: f_chart([("senior managers",7),("a risk specialist",5),
    ("I do not know",5),("nobody",3),("every team",2)])
S["q09-f16"]=lambda: f_scene(880,420, people=[],
    props=[("pipe",300,110,0.45),("racking",720,40,0.9),("crate",180,0,0.6),
    ("notebook",430,208,0.3),("essay",520,110,0.34)],
    panelbg="#2b3340", floorbg="#39404c")
