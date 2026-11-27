# -*- coding: utf-8 -*-
"""Throughline Book 1 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 ----------------
S["pa10-f1"]=lambda: f_icons([("signature","a signed baseline"),
    ("form","a change request form"),("door","a request at a door"),
    ("meeting","a board approving"),("spreadsheet","a register of changes"),
    ("folder","two versions of a drawing"),("coins","a cost added"),
    ("calendar","a date moved"),("phone","a telephone call"),
    ("worried","a change with no record")],4)
S["pa10-f2"]=lambda: f_scene(900,420, people=[("nadia",330,172,{}),("ahmad",640,172,{})],
    props=[("table",250,0,1.22),("signature",390,196,0.22),("form",450,198,0.22),
     ("door",700,74,0.9),("window",120,56,0.8)],
    board=(560,22,190,110,"BASELINE",[("signed","yes"),("changed","not yet")]),
    clockat=(230,44,22,8,20))
S["pa10-f3"]=lambda: f_icons([("signature","a baseline signed"),
    ("refnumber","an item given a number"),("door","a request made"),
    ("meeting","a decision taken"),("spreadsheet","a register row written"),
    ("folder","two versions side by side")],3)
S["pa10-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The change","Who asked, and how","Who decided","Is there a record"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The change nobody wrote down: ______________________"), 640)
S["pa10-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 10",
    "Project office &middot; change control &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO 10007 is dated <b>2017</b>. It is <b>guidelines</b> for "
    "configuration management. It describes <b>planning</b>, <b>identifying</b> what is "
    "controlled, <b>controlling changes</b>, and <b>keeping a record</b>.</p>"
    + table_html(["Step","At Lindhurst"],
      [["<b>1 agree the baseline</b>","the drawings and the brief, signed by the client and the "
        "sponsor"],
       ["<b>2 number the items</b>","every drawing and document has a number and a version"],
       ["<b>3 control changes</b>","anybody may ask; one named person answers"],
       ["<b>4 keep a record</b>","every request and every answer, in one register"]])
    + "<p><b>Where changes actually come from.</b> Not from the form. Last year <b>five "
    "changes</b> were made with <b>no record at all</b>. Not one came from carelessness. Every "
    "one arrived in a <b>doorway</b>, in about <b>five words</b>, from somebody trying to help. "
    "<b>Two of the five cost us money at handover.</b></p>"
    + table_html(["Two sizes of request","What it is"],
      [["<b>four lines, answered the same day</b>","what &middot; why &middot; what it costs "
        "&middot; what it does to the date"],
       ["<b>the full form, to the board</b>","anything over <b>20,000</b> or more than <b>two "
        "weeks</b>"]])
    + "<p><b>Four lines is not the form.</b> The form was <b>two pages</b> and needed <b>three "
    "signatures</b>, and it was the reason people stopped asking. <b>Changes went unrecorded to "
    "avoid a form, which is the opposite of what the form is for.</b></p>"
    "<p><b>What the standard does not do.</b> No form. No limit. No approval levels. No "
    "definition of a <i>small</i> change. The 20,000 and the two weeks are ours, and so is the "
    "four-line version.</p>",
    "Source: ISO 10007:2017, Quality management &mdash; Guidelines for configuration management. "
    "It is guidelines, not requirements: it prescribes no forms, no software, no approval limits "
    "and no threshold for a significant change, and it is not intended for certification."), 600)
S["pa10-f6"]=lambda: f_realia(tbl("Asking and giving permission", None,
    ["The structure","What it does","An example"],
    [["<b>Can I &hellip; ?</b>","asks, informally","<b>Can I</b> move the valve?"],
     ["<b>Could I &hellip; ?</b>","asks, more politely","<b>Could I</b> use the other bracket?"],
     ["<b>You can &hellip;</b>","gives permission","<b>You can</b> ask any time."],
     ["<b>You cannot &hellip;</b>","refuses","<b>You cannot</b> change it with no record."],
     ["<b>May I &hellip; ?</b>","&nbsp;","&nbsp;"],
     ["<b>You have to &hellip;</b>","&nbsp;","&nbsp;"]],
    note="<b>You cannot</b> refuses. <b>You do not have to</b> permits. They are one word apart "
    "and opposite."), 620)
S["pa10-f7"]=lambda: f_chart([("the four-line request",36),("the full form",2),
    ("a telephone call, noted afterwards",3),("a conversation with no record",5),
    ("discovered at handover",2)], unit="changes")
S["pa10-f8"]=lambda: f_icons([("signature","a baseline signed"),
    ("refnumber","a numbered drawing"),("door","a doorway request"),
    ("email","a four-line email"),("spreadsheet","a register row"),
    ("worried","found at handover")],3)
S["pa10-f9"]=lambda: f_realia(doc("Change register &middot; extract",
    "Eight of forty-one rows. Two were answered the same day as the request.",
    table_html(["No.","What was asked","Who asked","Answer","Impact","Date"],
      [["CR-031","Move the inlet valve 1 m left","A. Saleh","<b>approved</b>","none","4 May"],
       ["CR-032","Use bracket type B","A. Saleh","<b>approved, with a condition</b>","saves 4 d",
        "<b>same day</b>"],
       ["CR-033","Add a second access door","client","<b>to the board</b>","+26,000","11 May"],
       ["CR-034","Change the panel enclosure","K. Lind","<b>rejected</b>","+9,000, no benefit",
        "<b>same day</b>"],
       ["CR-035","Re-route the overflow","W. Zhao","<b>approved</b>","+1,200","18 May"],
       ["CR-036","Paint the yard railings blue","client","<b>approved</b>","none","21 May"],
       ["CR-037","Bracket type B on pump mounts","A. Saleh","<b>approved</b>","saves 4 d",
        "12 Jun"],
       ["CR-038","Move the flow meter 300 mm","J. Oyelaran","<b>approved</b>","none","14 Jun"]]),
    "<b>Five changes last year had no row here.</b> Two of them were found three years later by "
    "a maintenance team that could not locate a valve."), 700)
S["pa10-f10"]=lambda: f_scene(960,440, people=[("nadia",300,172,{}),
     ("marek",400,176,{"seated":True}),("ahmad",700,172,{})],
    props=[("table",240,0,1.2),("signature",370,196,0.2),("form",430,198,0.2),
     ("computer",500,142,0.4),("note",580,198,0.18),("door",760,74,0.88),
     ("window",110,56,0.78)],
    board=(540,22,190,110,"LAST YEAR",[("changes","41"),("no record","5")]),
    clockat=(225,44,22,8,30))
S["pa10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Process 1 &middot; the form", None,
        "<p><b>Two pages.</b><br><b>Three signatures.</b><br>"
        "Sections for cost, programme, quality, safety, environment and contract.<br>"
        "Answered <b>at the next board</b>.</p>"
        "<p style='color:#6b6861;font-size:13px'>For a valve moved eight hundred millimeters, "
        "somebody decided this was absurd &mdash; and they were right, and they moved it "
        "anyway.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Process 2 &middot; four lines", None,
        "<p><b>What.</b> Use bracket type B on the pump mounts.<br>"
        "<b>Why.</b> Type A has not arrived; 40 of type B are on site.<br>"
        "<b>Cost.</b> Nothing.<br>"
        "<b>Date.</b> Saves four days &mdash; if W. Zhao confirms access.</p>"
        "<p style='color:#6b6861;font-size:13px'>Two minutes to write. Answered the same day. The "
        "form is kept for anything over 20,000.</p>"), w)[0:3],
    w=960, h=300)
S["pa10-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Request, as made", None,
        "<p><b>&ldquo;Can I move the valve a meter? It's easier for the crew.&rdquo;</b></p>"
        "<p style='color:#6b6861;font-size:13px'>In a doorway, at twenty past eight, from "
        "somebody trying to help.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Request, written down", None,
        "<p><b>What:</b> move the inlet valve <b>1 m</b> to the left.<br>"
        "<b>Why:</b> the crew cannot reach the flange where it is.<br>"
        "<b>Cost:</b> none.<br>"
        "<b>Date:</b> no change &mdash; but drawing <b>1.2-04</b> is reissued as "
        "<b>version C</b>.</p>"), w)[0:3],
    w=920, h=250)
S["pa10-f13"]=lambda: f_realia(form("Change request planner",
    [("What",""),("Why",""),("The cost",""),("The date impact",""),("Any condition",""),
     ("Who must answer","")]), 520)
S["pa10-f14"]=lambda: f_scene(1000,450,
    people=[("ahmad",60,176,{}),("nadia",135,172,{}),("marek",210,176,{"seated":True}),
     ("okonjo",290,172,{"seated":True}),("wei",370,176,{"seated":True}),
     ("haddad",445,172,{}),("lars",520,176,{"seated":True}),("karin",595,170,{}),
     ("ines",660,172,{}),("ravi",725,170,{}),("sofia",790,172,{}),
     ("junseo",850,170,{}),("mei",910,172,{}),("oyelaran",960,174,{})],
    props=[("desk",95,0,1.1),("board",155,84,0.66),("computer",335,142,0.4),
     ("printer",430,196,0.3),("form",548,198,0.2),("table",645,0,1.0),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,200,112,"FOUR LINES",[("answered","today"),("the form","over 20,000")]),
    clockat=(258,34,22,9,0))
S["pa10-f15"]=lambda: f_chart([("a short request, answered quickly",6),("a long form",8),
    ("a conversation, noted afterwards",5),("a conversation with no record",7),
    ("nobody asks",2)])
S["pa10-f16"]=lambda: f_realia(doc("On a desk in June",
    "What was on it at five o'clock",
    "<p><b>The form.</b> Two pages, unused.</p>"
    "<p><b>A four-line email</b>, printed, with the answer written under it in pen.</p>"
    "<p><b>Two versions of one drawing.</b> The valve is in a different place on each.</p>"
    "<p><b>A maintenance report</b> from the client, three years old: <i>one day spent locating "
    "the valve; one week establishing which record was correct</i>.</p>"
    "<p><b>A note of three sentences.</b> <i>The rule was always right &mdash; nothing changes "
    "without a record &mdash; and we made the record so expensive that people had to choose "
    "between helping the project and following the process. Everybody chose the project, every "
    "time, so the changes continued and only the visibility stopped. Four lines answered the same "
    "day produced thirty-six records last year that the old form would never have "
    "produced.</i></p>",
    "Five o'clock. Two minutes to write, answered today, and the drawing matches the "
    "building."), 580)

# ---------------- Unit 11 ----------------
S["pa11-f1"]=lambda: f_icons([("meeting","a board of five"),
    ("signature","a sponsor deciding"),("note","a monthly report"),
    ("trafficlights","green, amber, red"),("form","a report being changed"),
    ("megaphone","an escalation going up"),("padlock","a delegation limit"),
    ("notebook","a decision in the minutes"),("clock","a reporting day"),
    ("magnifier","an auditor reading a file")],4)
S["pa11-f2"]=lambda: f_scene(960,440, people=[("okonjo",290,172,{"seated":True}),
     ("omar",375,172,{"seated":True}),("nadia",460,176,{}),
     ("karin",560,172,{"seated":True}),("yara",645,172,{"seated":True})],
    props=[("table",330,0,1.1),("note",420,196,0.2),("window",850,56,0.86)],
    board=(40,24,210,118,"CALDER",[("Mar&ndash;Jun","amber"),("Jul","RED"),("asked","nothing")]),
    clockat=(700,44,22,10,0))
S["pa11-f3"]=lambda: f_icons([("meeting","a board deciding"),
    ("clipboard","a manager running the work"),("padlock","a limit"),
    ("megaphone","an escalation"),("notebook","the minutes"),
    ("magnifier","assurance: somebody else checks")],3)
S["pa11-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The status","What it means","Who is told","How fast"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="What amber means in numbers: ______________________"), 640)
S["pa11-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 11",
    "Project office &middot; governance and reporting &middot; page 1 of 1",
    "<p><b>The guidance.</b> ISO 21505 is dated <b>2017</b>. It describes a <b>governing "
    "body</b>, <b>oversight</b>, <b>delegated authority</b>, <b>accountability</b> and "
    "<b>assurance</b>, and it separates <b>governing</b> the work from <b>managing</b> it.</p>"
    "<p><b>What was wrong here.</b> Calder was reported as <b>amber</b> in <b>March, April, May "
    "and June</b>. In <b>July</b> it was reported as <b>red</b>: six weeks late and the "
    "contingency spent. <b>Every one of those five reports was true.</b> Amber meant <i>we are "
    "working on it</i>, and somebody was, all four months.</p>"
    "<p><b>The board asked nothing for four months</b>, because an amber square that does not "
    "change looks like a project being managed. <b>The report was honest, correct, and told "
    "nobody anything.</b></p>"
    + table_html(["Status","What it means, in numbers"],
      [["<b>green</b>","within <b>two weeks</b> and <b>5 percent</b>"],
       ["<b>amber</b>","outside that, with a written recovery plan and a date"],
       ["<b>amber twice</b>","<b>reported as red</b>, whatever the plan says"],
       ["<b>red</b>","outside it, with no plan the sponsor accepts"]])
    + "<p><b>Two months of amber is red.</b> Not because the project is worse. Because <b>two "
    "months of amber is a fact the board must be told</b>, and the old rule had no way of telling "
    "them.</p>"
    "<p><b>What the guidance does not do.</b> No colors. No thresholds. No meeting frequency. No "
    "limits. No list of who sits on a board. The two weeks, the 5 percent and the 20,000 are "
    "ours.</p>",
    "Source: ISO 21505:2017, Project, programme and portfolio management &mdash; Guidance on "
    "governance. It is guidance, not requirements: it prescribes no governance structure, no "
    "reporting thresholds or colors, no meeting frequency and no membership of a governing body, "
    "and it is not intended for certification."), 600)
S["pa11-f6"]=lambda: f_realia(tbl("The passive for reporting", None,
    ["Active","Passive","Use"],
    [["We reported it as amber.","It <b>was reported</b> as amber.",
      "the report, not the reporter"],
     ["The board approved the change.","The change <b>was approved</b>.",
      "the decision matters"],
     ["Somebody has spent the money.","The money <b>has been spent</b>.","&nbsp;"],
     ["They record decisions.","Decisions <b>are recorded</b>.","&nbsp;"]],
    note="<i>A mistake was made</i> is the passive that hides a person. Use it for the process, "
    "never for the blame."), 620)
S["pa11-f7"]=lambda: f_chart([("March &mdash; amber",1),("April &mdash; amber",1),
    ("May &mdash; amber",1),("June &mdash; amber",1),("July &mdash; red",1)],
    unit="monthly reports")
S["pa11-f8"]=lambda: f_icons([("meeting","a board meeting"),("note","a one-page report"),
    ("megaphone","an escalation"),("padlock","a delegation limit"),
    ("notebook","minutes being written"),("magnifier","an auditor")],3)
S["pa11-f9"]=lambda: f_realia(doc("Board report &middot; Calder &middot; July",
    "One page. For decision. The board meets on the 24th.",
    table_html(["","&nbsp;"],
      [["<b>Status</b>","<b>Red.</b> Six weeks late. Contingency of <b>60,000</b> has been "
        "spent."],
       ["<b>What has changed</b>","<b>Nothing has changed since May.</b> It is red because it "
        "has been amber for four months, not because this month was worse."],
       ["<b>What is being done</b>","A recovery plan was written on <b>3 July</b> and agreed "
        "with the client on the <b>8th</b>. It needs two decisions."],
       ["<b>What is asked of you</b>","<b>Either</b> approve <b>40,000</b> and keep "
        "<b>26 September</b>, <b>or</b> approve a new date of <b>14 November</b> at no extra "
        "cost."]])
    + "<p><b>Previous statuses:</b> amber &middot; amber &middot; amber &middot; amber.</p>",
    "<b>Nothing has changed since May.</b> On the day the amber-twice rule started, three "
    "projects were turned red and not one of them had got worse that week."), 660)
S["pa11-f10"]=lambda: f_scene(980,440, people=[("okonjo",280,172,{"seated":True}),
     ("omar",365,172,{"seated":True}),("nadia",455,176,{}),
     ("karin",555,172,{"seated":True}),("yara",640,172,{"seated":True})],
    props=[("table",320,0,1.1),("note",410,196,0.2),("computer",700,142,0.38),
     ("window",870,56,0.84)],
    board=(40,24,210,118,"THE RULE",[("amber twice","red"),("turned red","3"),
      ("got worse","0")]),
    clockat=(760,44,22,10,10))
S["pa11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report 1", None,
        "<p style='font-size:18px'><b>AMBER</b></p>"
        "<p>The position remains broadly as previously reported. There are some pressures on the "
        "programme, which are being managed, and the team continues to work to mitigate them. We "
        "will keep the board informed.</p>"
        "<p style='color:#6b6861;font-size:13px'>Every word of this is true. It was sent four "
        "times.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Report 2", None,
        "<p style='font-size:18px'><b>RED</b></p>"
        "<p><b>Six weeks late. 60,000 of contingency spent.</b><br>"
        "<b>Nothing has changed since May.</b><br>"
        "Recovery plan written 3 July.<br>"
        "<b>Two decisions needed today:</b> 40,000, or 14 November.</p>"), w)[0:3],
    w=940, h=300)
S["pa11-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The square", None,
        "<p style='font-size:18px'><b>AMBER</b></p>"
        "<p>Pressures on the programme are being managed.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("The square, with the facts", None,
        "<p style='font-size:18px'><b>RED</b> &mdash; four months amber</p>"
        "<p><b>6 weeks</b> late &middot; <b>60,000</b> spent &middot; <b>nothing changed since "
        "May</b> &middot; <b>two decisions</b> asked for today.</p>"), w)[0:3],
    w=900, h=240)
S["pa11-f13"]=lambda: f_realia(form("Board report planner",
    [("The status, with a number",""),("What has changed since last time",""),
     ("What is being done, with a date",""),("What is asked of the board",""),
     ("The previous four statuses","")]), 520)
S["pa11-f14"]=lambda: f_scene(1000,450,
    people=[("hanna",60,176,{}),("okonjo",135,172,{"seated":True}),
     ("omar",210,176,{"seated":True}),("karin",290,172,{"seated":True}),
     ("yara",370,176,{"seated":True}),("nadia",445,172,{}),
     ("marek",520,176,{"seated":True}),("haddad",595,170,{}),
     ("ines",660,172,{}),("ravi",725,170,{}),("sofia",790,172,{}),
     ("junseo",850,170,{}),("mei",910,172,{}),("wei",960,174,{})],
    props=[("desk",95,0,1.1),("board",155,84,0.66),("computer",335,142,0.4),
     ("printer",430,196,0.3),("note",548,198,0.2),("table",645,0,1.0),
     ("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,200,112,"SINCE LAST TIME",[("changed","nothing"),("months amber","4")]),
    clockat=(258,34,22,10,0))
S["pa11-f15"]=lambda: f_chart([("a board every month",7),("a sponsor only",6),
    ("a manager above me",8),("nobody formally",4),("I do not know",3)])
S["pa11-f16"]=lambda: f_realia(doc("On a desk in July",
    "What was on it at five o'clock",
    "<p><b>Five monthly reports</b>, laid in a row. <b>Four amber</b> squares, then one "
    "<b>red</b>.</p>"
    "<p><b>A chart.</b> <b>Three</b> projects turned red on one day; <b>none</b> of them worse "
    "that week.</p>"
    "<p><b>A closed file</b>, marked <i>stopped</i>: about <b>400,000</b> not spent.</p>"
    "<p><b>A note of three sentences.</b> <i>Nobody lied to this board and nobody will thank us "
    "for the rule. A status cannot report that nothing has moved, and the person who says red "
    "first is the person whose name is in the minutes. A rule applied by the calendar asks nobody "
    "to be brave, which is the only reason it works.</i></p>",
    "Five o'clock. Two months of amber is red, and nobody has to choose to say so."), 580)

# ---------------- Unit 12 ----------------
S["pa12-f1"]=lambda: f_icons([("calendar","a project with two ends"),
    ("clipboard","a work package"),("signature","a sponsor"),
    ("scales","time, cost, scope"),("star","a priority"),
    ("barrier","a gate, three answers"),("spreadsheet","a risk register"),
    ("meeting","a team"),("form","a change request"),("note","one page")],4)
S["pa12-f2"]=lambda: f_scene(900,420, people=[("marek",330,176,{"seated":True})],
    props=[("table",250,0,1.22),("note",380,196,0.26),("folder",470,198,0.3),
     ("timetable",540,198,0.22),("spreadsheet",600,198,0.2),("window",800,56,0.92)],
    board=(680,22,200,112,"ONE PAGE",[("boxes","6"),("folder","60 pp"),("read","p. 40?")]),
    clockat=(180,44,22,9,0))
S["pa12-f3"]=lambda: f_icons([("pipe","the result"),("calendar","the date"),
    ("cash","the cost"),("signature","the decider"),
    ("worried","the risks"),("tally","the measure")],3)
S["pa12-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The word","The document and date","The definition","What it does not cover"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The definition we agreed ourselves: ______________________"), 660)
S["pa12-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 12",
    "Project office &middot; the one-page brief &middot; page 1 of 1",
    "<p><b>The standard.</b> ISO 9000 is dated <b>2015</b>. It is the document that <b>defines "
    "the words</b> used across the quality management family: <i>requirement</i>, <i>process</i>, "
    "<i>risk</i>, <i>objective</i>, and <b>project</b>.</p>"
    + table_html(["Where","Roughly what it says"],
      [["<b>ISO 9000:2015</b>","activities with a start and a finish, for an objective, subject "
        "to constraints"],
       ["<b>ISO 21506:2018</b>","the vocabulary for project, programme and portfolio "
        "management"],
       ["<b>ISO 21502:2020</b>","guidance on managing a project, with roles and practices"],
       ["<b>our brief</b>","the sentence <b>we</b> agree with the sponsor, for <b>this</b> "
        "project"]])
    + "<p><b>None of them is wrong and none of them travels.</b> Each definition belongs to the "
    "document it is in. <b>The only definition that governs your project is the one on your page, "
    "signed by somebody.</b></p>"
    + table_html(["Box","What goes in it"],
      [["<b>1 result</b>","what exists at the end that does not exist now"],
       ["<b>2 date</b>","one date, and what it is a date <i>for</i>"],
       ["<b>3 cost</b>","one number, and what is not in it"],
       ["<b>4 decider</b>","one name, with a limit"],
       ["<b>5 risks</b>","five rows, each with a name and a date"],
       ["<b>6 measure</b>","the number that will show whether it worked"]])
    + "<p><b>The empty box.</b> One brief came back with <i>improve operational efficiency</i> in "
    "box 1. It is writing, and it is an empty box: three people read it and described three "
    "different projects. We now test every box the same way: <b>can a stranger act on it "
    "tomorrow?</b></p>"
    "<p><b>Of eighteen briefs rewritten on one page, eleven had an empty box 6.</b> Nobody had "
    "been asked how anyone would know whether it had worked.</p>",
    "Source: ISO 9000:2015, Quality management systems &mdash; Fundamentals and vocabulary. It "
    "sets out fundamental concepts and defines the terms used across that family of standards. It "
    "contains no requirements, no templates and no project method, and it is not itself a "
    "certification standard."), 600)
S["pa12-f6"]=lambda: f_realia(tbl("The twelve structures of this book", None,
    ["Unit","Structure","Example"],
    [["1","<i>be</i> and <i>have</i>","A project <b>has</b> an end."],
     ["2","prepositions of time","<b>by</b> Friday &middot; <b>in</b> March"],
     ["4","<i>accountable for</i>","She is <b>accountable for</b> the result."],
     ["5","comparatives","Faster is <b>more expensive</b>."],
     ["6","modals of priority","It <b>must</b> be in the first release."],
     ["7","<i>will</i> and <i>by</i>","It <b>will be</b> finished <b>by</b> the 8th."],
     ["8","<i>may</i>, <i>might</i>","It <b>might</b> be late."],
     ["9","sequencing","<b>First</b> &hellip; <b>then</b> &hellip;"],
     ["10","permission","<b>Can I</b> move it?"],
     ["3","part and whole","&nbsp;"],
     ["11","the passive","&nbsp;"],
     ["12","review","&nbsp;"]],
    note="Three rows are empty on purpose."), 620)
S["pa12-f7"]=lambda: f_chart([("the result",2),("the date",1),("the cost",2),
    ("the decider",1),("the risks",1),("the measure",11)], unit="briefs")
S["pa12-f8"]=lambda: f_icons([("pipe","the result"),("calendar","the date"),
    ("cash","the cost"),("signature","the decider"),
    ("spreadsheet","five risk rows"),("tally","the measure")],3)
S["pa12-f9"]=lambda: f_realia(doc("Project brief &middot; Dispatch 6",
    "One page &middot; agreed 4 February &middot; G. Adeyemi and M. Nowak",
    table_html(["Box","&nbsp;"],
      [["<b>1 Result</b>","Order-to-dispatch of <b>6 days</b>, from <b>11</b> today, for all "
        "standard orders."],
       ["<b>2 Date</b>","<b>30 April</b> &mdash; the date the new contract <b>starts</b>. Not a "
        "date we chose."],
       ["<b>3 Cost</b>","<b>140,000</b>. <b>Does not include</b> the racking (60,000, decided "
        "separately)."],
       ["<b>4 Decider</b>","<b>G. Adeyemi</b>, up to <b>20,000</b> and <b>two weeks</b>. Above "
        "that, the board."],
       ["<b>5 Risks</b>","Five rows, each with an owner and a date. Worst: <b>racking supplier "
        "unconfirmed &mdash; K. Lind, 14 March</b>."],
       ["<b>6 Measure</b>","<b>Days from order to dispatch</b>, weekly: first by hand, then from "
        "the system."]])
    + "<p><b>The test for each box:</b> could a stranger act on it tomorrow?</p>",
    "<b>If a stranger cannot act on a box, it is empty.</b> <i>Improve operational efficiency</i> "
    "fails. <i>Eleven days to six</i> passes."), 680)
S["pa12-f10"]=lambda: f_scene(960,440, people=[("okonjo",300,172,{}),
     ("nadia",390,176,{"seated":True}),("marek",480,176,{"seated":True})],
    props=[("table",250,0,1.2),("note",370,196,0.26),("folder",560,198,0.3),
     ("window",850,56,0.86)],
    board=(40,24,210,118,"18 BRIEFS",[("rewritten","18"),("empty box 6","11")]),
    clockat=(700,44,22,9,30))
S["pa12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The project file", None,
        "<p><b>Sixty pages.</b> Nineteen sections.</p>"
        "<p style='font-size:13px;line-height:1.9'>1 Introduction &middot; 2 Background &middot; "
        "3 Strategic context &middot; 4 Objectives &middot; 5 Scope &middot; 6 Approach &middot; "
        "7 Programme &middot; 8 Resources &middot; 9 Cost &middot; 10 Benefits &middot; "
        "11 Risks &middot; 12 Governance &middot; 13 Assurance &middot; 14 Communications "
        "&middot; 15 Procurement &middot; 16 Quality &middot; 17 Interfaces &middot; "
        "18 Dependencies &middot; 19 Appendices</p>"
        "<p style='color:#6b6861;font-size:13px'>All of it true. Nobody has read page forty.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("The page", None,
        "<p style='line-height:1.85'><b>Result</b> 6 days, from 11.<br>"
        "<b>Date</b> 30 April, when the contract starts.<br>"
        "<b>Cost</b> 140,000, not including the racking.<br>"
        "<b>Decider</b> G. Adeyemi, up to 20,000.<br>"
        "<b>Risks</b> five rows, each with a name and a date.<br>"
        "<b>Measure</b> days from order to dispatch, weekly.</p>"
        "<p style='color:#6b6861;font-size:13px'>Ninety seconds, out loud.</p>"), w)[0:3],
    w=960, h=320)
S["pa12-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Brief, as written", None,
        "<p>The project will deliver a programme of transformational improvement to our "
        "operational processes, improving efficiency and alignment across the business, with "
        "benefits to be realized in due course subject to approval.</p>"
        "<p style='color:#6b6861;font-size:13px'>Thirty-eight words. No number, no name, no "
        "date.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Brief, rewritten", None, ["Box","&nbsp;"],
      [["Result","6 days, from 11"],["Date","30 April, when the contract starts"],
       ["Cost","140,000, not the racking"],["Decider","G. Adeyemi, to 20,000"],
       ["Risks","five rows, named and dated"],["Measure","days to dispatch, weekly"]],
      note="Signed by two people, with a date."), w)[0:3],
    w=940, h=280)
S["pa12-f13"]=lambda: f_realia(form("One-page brief planner",
    [("1 Result",""),("2 Date",""),("3 Cost",""),("4 Decider",""),("5 Risks",""),
     ("6 Measure","")],
    note="One number or one name in every box."), 520)
S["pa12-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("okonjo",135,172,{}),("nadia",210,176,{"seated":True}),
     ("marek",290,172,{"seated":True}),("haddad",370,176,{"seated":True}),
     ("wei",445,172,{}),("priya",520,176,{"seated":True}),("karin",595,170,{}),
     ("ines",660,172,{}),("ravi",725,170,{}),("sofia",790,172,{}),
     ("junseo",850,170,{}),("mei",910,172,{}),("oyelaran",960,174,{})],
    props=[("desk",95,0,1.1),("board",155,84,0.66),("computer",335,142,0.4),
     ("printer",430,196,0.3),("note",548,198,0.2),("table",645,0,1.0),
     ("folder",700,198,0.26),("cafe",865,198,0.36),("shelf",930,96,0.5)],
    board=(40,22,200,118,"SIX BOXES",[("result","date"),("cost","decider"),
      ("risks","measure")]),
    clockat=(258,34,22,9,0))
S["pa12-f15"]=lambda: f_chart([("the result",4),("the date",3),("the cost",2),
    ("the decider",3),("the risks",4),("the measure",12)])
S["pa12-f16"]=lambda: f_realia(doc("On a desk at the end of the day",
    "Everything this book has been about, in one pile",
    "<p><b>One signed page</b>, six boxes, a number or a name in each.</p>"
    "<p><b>A closed folder</b>, sixty pages, all of it true.</p>"
    "<p><b>Around them:</b> a bar chart with eleven question marks &middot; a tree of twelve "
    "packages &middot; a risk register with one good surprise in it &middot; a change register "
    "with forty-one rows &middot; a board report with the word <i>red</i> at the top &middot; a "
    "team agreement with six initials.</p>"
    "<p><b>A note of three sentences.</b> <i>We spent a year learning the vocabulary of eleven "
    "standards and papers, and not one of them told us what to do on Monday, which is not a "
    "criticism: they never said they would, and the honest ones say so on their own first pages. "
    "What they gave us was words precise enough to write six boxes without lying. The page is "
    "ours, the number in box 6 is ours, and the only thing a standard can do is stop us "
    "pretending we have agreed something when we have not.</i></p>",
    "Five o'clock. Six boxes, nothing empty, and two signatures with a date."), 580)
