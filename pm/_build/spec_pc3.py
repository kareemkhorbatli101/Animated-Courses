# -*- coding: utf-8 -*-
"""Throughline Book 3 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 ----------------
S["pc07-f1"]=lambda: f_icons([("handshake","two companies joined"),
    ("signature","a joint plan, signed twice"),("spreadsheet","two registers merged"),
    ("badge","a named senior executive"),("recycle","an eight-stage cycle"),
    ("envelope","an exit strategy"),("scales","two opposed mitigations"),
    ("star","a joint objective"),("certificate","a certificate"),
    ("book","a standard from 2017")],4)
S["pc07-f2"]=lambda: f_scene(940,430, people=[("caruso",330,176,{"seated":True}),
     ("sofia",415,176,{"seated":True})],
    props=[("desk",250,0,1.22),("note",380,196,0.24),("spreadsheet",470,198,0.2),
     ("window",830,56,0.9)],
    board=(690,22,200,118,"REGISTERS",[("ours","61"),("theirs","19"),("both","11")]),
    clockat=(610,44,22,10,40))
S["pc07-f3"]=lambda: f_icons([("spreadsheet","two registers side by side"),
    ("badge","one risk, two owners"),("scales","opposed mitigations"),
    ("archive","one merged register"),("handshake","two named executives"),
    ("envelope","an agreed exit")],3)
S["pc07-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The risk","Our owner","Their owner","Do the two actions agree"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The risk where we are working against each other: ______________________"), 680)
S["pc07-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 7",
    "Project office &middot; working with the client, in writing &middot; page 1 of 1",
    "<p><b>The standard.</b> <b>ISO 44001</b>, <i>Collaborative business relationship management "
    "systems &mdash; Requirements and framework</i>, dated <b>2017</b>. It replaced a national "
    "standard of <b>2010</b>. <b>Unlike almost everything else in this course, it is a requirements "
    "standard and it can be certified against.</b></p>"
    "<p><b>An eight-stage life cycle.</b> Awareness, knowledge, internal assessment, partner "
    "selection, working together, value creation, staying together, and <b>exit</b>. <b>The last "
    "stage is the one everybody skips.</b></p>"
    + table_html(["What it asks two organizations to have",""],
      [["<b>joint objectives</b>","written, signed by both, with measures"],
       ["<b>a relationship management plan</b>","a <b>joint</b> version, not two"],
       ["<b>a senior executive responsible</b>","<b>one named person on each side</b>, not a "
        "department"],
       ["<b>a joint risk register</b>","one register, one owner per row"],
       ["<b>joint governance</b>","how decisions and disagreements are handled"],
       ["<b>an exit strategy</b>","agreed <b>while the relationship is working</b>"]])
    + "<p><b>One risk, two owners, two opposed mitigations.</b> Their register had <b>19</b> rows "
    "and ours <b>61</b>. <b>Eleven rows appeared in both, with different owners.</b> One was the "
    "racking delivery: <b>we were holding four weeks of float and paying a supplier to hold stock; "
    "they were planning to defer the order into the next financial year.</b> <b>Nobody was doing "
    "anything wrong</b>, and the first anybody knew of it was <b>the Tuesday somebody read the "
    "other register</b>. Merged, the register has <b>66</b> rows and one owner per row: the eleven "
    "duplicates produced <b>three</b> real conflicts and <b>eight</b> differences of wording.</p>"
    "<p><b>The exit strategy.</b> <b>Three months and four drafts.</b> The difficulty was not "
    "legal. <b>Nobody wants to write down how a relationship ends while it is going well</b>, and "
    "the first draft was so vague that both legal teams improved it into something neither side "
    "could have used. What it finally says is short: <b>who owns the data, who holds the spares, "
    "how long support continues, how the as-built records transfer, and which disputes survive the "
    "end.</b> <b>Two of those five had already caused an argument on a previous contract.</b></p>"
    "<p><b>What the certificate does and does not prove.</b> It proves <b>a system exists</b> and is "
    "operated. <b>It does not prove that the relationship is good.</b> The standard cannot resolve "
    "commercial conflict, says nothing about contract terms, and offers <b>no remedy</b> for the "
    "ordinary situation in which the parties' incentives oppose each other: <b>one side is paid for "
    "work done and the other is paid to spend less.</b></p>",
    "Source: ISO 44001:2017, Collaborative business relationship management systems &mdash; "
    "Requirements and framework, which replaced BS 11000-1:2010. It specifies requirements for a "
    "management system covering collaborative relationships and may be certified against; "
    "certification concerns the existence and operation of the system rather than the quality of "
    "any relationship; and the standard does not address contract terms, commercial dispute "
    "resolution or the alignment of the parties' commercial incentives."), 620)
S["pc07-f6"]=lambda: f_realia(tbl("Shared obligation", None,
    ["Structure","What it says","Example"],
    [["<b>each party shall</b>","an obligation on both, separately",
      "<b>Each party shall</b> name a senior executive."],
     ["<b>both parties are required to</b>","the same, in plainer words",
      "<b>Both parties are required to</b> maintain the joint register."],
     ["<b>jointly</b>","done together, not twice","The objectives are <b>jointly</b> agreed."],
     ["<b>neither party may</b>","a prohibition on both",
      "<b>Neither party may</b> alter the register alone."],
     ["<b>be expected to</b>","&nbsp;","&nbsp;"],
     ["<b>mutually</b>","&nbsp;","&nbsp;"]],
    note="<b>Each party shall</b> and <b>neither party may</b> both take a singular verb."), 640)
S["pc07-f7"]=lambda: f_chart([("harmless wording differences",5),
    ("different owners, compatible actions",3),("actions that partly conflict",2),
    ("actions in direct opposition",1),("withdrawn",0)], unit="duplicated rows")
S["pc07-f8"]=lambda: f_icons([("spreadsheet","two registers"),("archive","one merged register"),
    ("handshake","two named executives"),("star","a joint objective"),
    ("scales","opposed mitigations"),("envelope","a sealed exit strategy")],3)
S["pc07-f9"]=lambda: f_realia(doc("Joint relationship plan &middot; extract",
    "One document. Two signature blocks.",
    table_html(["","&nbsp;"],
      [["<b>Joint objectives</b>","pressure above the contract minimum at Ridgeway for 12 months; "
        "handover accepted by 26 September; <b>both measured from the client's own log</b>"],
       ["<b>Accountable</b>","<b>E. Caruso</b> (Lindhurst) and <b>S. Marchetti</b> (client). "
        "<b>Persons, not posts.</b> If either leaves, the plan is reissued within 10 working days."],
       ["<b>Joint register</b>","<b>one</b> register, <b>66 rows</b>, <b>one owner per row</b>. "
        "<b>Neither party may</b> change an owner without written notice."],
       ["<b>Governance</b>","monthly joint review; anything above 20,000 or two weeks "
        "<b>jointly</b> escalated to both executives within 5 working days"],
       ["<b>Value creation</b>","nine weeks and one mobilization saved by commissioning the shared "
        "control system once"],
       ["<b>Exit</b>","who owns the data &middot; who holds the spares &middot; how long support "
        "continues &middot; how the as-built records transfer &middot; which disputes survive"]]),
    "<b>One document, not two.</b> The exit section took three months and four drafts, and two of "
    "its five lines are arguments the two companies have already had."), 700)
S["pc07-f10"]=lambda: f_scene(960,440, people=[("caruso",300,176,{"seated":True}),
     ("sofia",385,176,{"seated":True}),("nkemelu",500,172,{})],
    props=[("desk",240,0,1.2),("note",350,196,0.24),("archive",580,198,0.22),
     ("window",850,56,0.88)],
    board=(40,24,215,118,"EIGHT STAGES",[("last stage","exit"),("took","3 months")]),
    clockat=(700,44,22,11,0))
S["pc07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Two sets of documents", None,
        "<p><b>Our register:</b> 61 rows.<br><b>Their register:</b> 19 rows.<br>"
        "<b>Our plan.</b> <b>Their plan.</b></p>"
        "<p style='color:#6b6861;font-size:13px'>Eleven rows in both, with different owners. Three "
        "of them in conflict.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("One set of documents", None,
        "<p><b>One register:</b> 66 rows, one owner per row.<br>"
        "<b>One plan</b>, two signature blocks.<br>"
        "<b>One exit strategy</b>, five lines.</p>"
        "<p style='color:#6b6861;font-size:13px'>E. Caruso and S. Marchetti, by name.</p>"
        ), w)[0:3],
    w=940, h=280)
S["pc07-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Exit clause, first draft", None,
        "<p>The parties will cooperate in good faith at the appropriate time to effect an orderly "
        "conclusion of the relationship.</p>"
        "<p style='color:#6b6861;font-size:13px'>Both legal teams approved it, which is how we knew "
        "it was worthless.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Exit clause, final", None, ["","&nbsp;"],
      [["data","the client owns the operating data from handover"],
       ["spares","held at the client's depot from month 3"],
       ["support","continues for 24 months from handover"],
       ["records","as-built records transfer electronically within 20 working days"],
       ["disputes","defects and intellectual property survive the end"]]), w)[0:3],
    w=940, h=270)
S["pc07-f13"]=lambda: f_realia(form("Joint plan planner",
    [("Joint objectives",""),("The two named persons",""),("The joint register rule",""),
     ("Governance and escalation",""),("The exit strategy, in five lines",""),
     ("What a certificate does not prove","")]), 520)
S["pc07-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("caruso",135,172,{}),("sofia",210,176,{"seated":True}),
     ("nkemelu",290,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("okonjo",445,172,{}),("oskar",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("hanna",910,172,{}),("wei",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("archive",548,198,0.22),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"THE STAGE WE SKIP",[("exit","3 months")]),
    clockat=(278,34,22,11,0))
S["pc07-f15"]=lambda: f_chart([("yes, one joint register",3),("we exchange registers",5),
    ("we each keep our own",12),("we have no register",4),("I do not know",2)])
S["pc07-f16"]=lambda: f_realia(doc("On a desk in May",
    "What was on it at five o'clock",
    "<p><b>One joint plan</b>, two signature blocks.</p>"
    "<p><b>Two old registers</b>, closed.</p>"
    "<p><b>A merged printout</b> of sixty-six rows, three of them marked.</p>"
    "<p><b>A five-line exit strategy.</b></p>"
    "<p><b>A note of three sentences.</b> <i>The whole plan took a fortnight except one paragraph, "
    "and the paragraph was the one about how this ends. Our first draft said the parties would "
    "cooperate in good faith at the appropriate time, both legal teams approved it, and that is how "
    "I knew it was worth nothing. We are certified now, which proves a system exists and proves "
    "nothing about trust, and it has no answer at all to the fact that they are paid to spend less "
    "and we are paid for work done.</i></p>",
    "Five o'clock. One register, one owner per row, and one difficult paragraph."), 600)

# ---------------- Unit 8 ----------------
S["pc08-f1"]=lambda: f_icons([("archive","a long log of entries"),
    ("tally","a counter of how many were read"),("form","a template being changed"),
    ("meeting","somebody explaining at a desk"),("spreadsheet","thirty years of data"),
    ("calendar","a retirement date"),("danger","a document out of date"),
    ("folder","a taxonomy of folders"),("handshake","a handover conversation"),
    ("book","a standard from 2018")],4)
S["pc08-f2"]=lambda: f_scene(920,420, people=[("hanna",330,176,{"seated":True}),
     ("nadia",425,176,{"seated":True})],
    props=[("desk",250,0,1.22),("computer",150,138,0.52),("form",390,196,0.22),
     ("window",810,56,0.92)],
    board=(680,22,200,118,"THE LOG",[("written","212"),("opened","9"),("changed","0")]),
    clockat=(600,44,22,4,20))
S["pc08-f3"]=lambda: f_icons([("archive","a lesson in a log"),("form","a lesson in a template"),
    ("tally","a read counter at nine"),("danger","an outdated document"),
    ("meeting","knowledge being handed over"),("calendar","a leaving date")],3)
S["pc08-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The lesson","Where it was written","What document would have to change",
     "Has it changed"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The lesson we have learned three times: ______________________"), 700)
S["pc08-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 8",
    "Project office &middot; what we have learned &middot; page 1 of 1",
    "<p><b>The standard.</b> <b>ISO 30401</b>, <i>Knowledge management systems &mdash; "
    "Requirements</i>, dated <b>2018</b>. It is a <b>requirements standard</b> and can be "
    "<b>certified against</b>. It covers how knowledge is <b>developed</b>, <b>conveyed</b> and "
    "<b>retained</b>, the enablers &mdash; people, process, technology, governance and "
    "<b>culture</b> &mdash; and the requirement to <b>demonstrate the value</b> of the whole "
    "thing.</p>"
    "<p><b>The sentence that matters most is early on.</b> <b>Knowledge management is not the same "
    "as information management or document management.</b> A document store holds documents; "
    "<b>knowledge is what somebody can do with them</b>, in a context. <b>A log of two hundred and "
    "twelve sentences is not a knowledge management system. It is a document.</b></p>"
    + table_html(["Our own figures",""],
      [["lessons recorded since 2019","<b>212</b>"],
       ["times anybody has opened a lesson","<b>9</b>"],
       ["lessons that have changed a document","<b>0</b>"]])
    + "<p><b>Nobody has been lazy.</b> Two hundred and twelve lessons were written by people who had "
    "just finished something difficult and wanted the next person to be spared it. <b>The log was "
    "the wrong destination, not the wrong intention.</b></p>"
    + table_html(["The lesson, as written in the log","Where it belongs"],
      [["<i>the valve lead time runs from approval, not from order</i>",
        "the <b>estimating template</b>, as a field"],
       ["<i>the drawing register should be reconciled weekly</i>",
        "the <b>project process record</b>, as line 3"],
       ["<i>self-scored progress runs about twelve points high</i>",
        "the <b>progress report</b>, as a required column"],
       ["<i>the matrix cannot count controls</i>",
        "the <b>risk procedure</b>, as a quarterly bow-tie step"]])
    + "<p><b>Four lessons were rewritten as changes to templates in one afternoon.</b> Each had been "
    "in the log for between two and five years. <b>Each took under ten minutes.</b></p>"
    "<p><b>The part that cannot be written down easily.</b> <b>Karin's spreadsheet is thirty years "
    "of finished projects</b>, and the useful part is not the numbers: it is which of the nineteen "
    "stations was unusual and why, which supplier's quotations have historically been optimistic, "
    "and which kind of client question means something has already gone wrong. <b>None of that is "
    "in the file. All of it is in her. She retires in 2027.</b> The standard calls this "
    "<b>retention</b> and asks for it to be managed. <b>It does not say how</b>, and we have asked "
    "her politely once a quarter for eleven years, which is not a method.</p>"
    "<p><b>What the standard does not do.</b> It specifies a <b>system</b> and prescribes <b>no "
    "tools, no taxonomy and no method</b>. It does not say <b>what knowledge</b> to keep. A "
    "<b>certificate</b> proves the system exists and is operated, <b>not that anybody knows "
    "anything</b>.</p>",
    "Source: ISO 30401:2018, Knowledge management systems &mdash; Requirements. It specifies "
    "requirements for a knowledge management system and may be certified against; it states that "
    "knowledge management is distinct from information and document management; it prescribes no "
    "tools, taxonomies or methods and does not determine which knowledge an organization should "
    "retain; and certification concerns the existence and operation of the system rather than the "
    "organization's knowledge."), 620)
S["pc08-f6"]=lambda: f_realia(tbl("The present perfect", None,
    ["Structure","What it does","Example"],
    [["<b>have / has</b> + participle","experience up to now",
      "We <b>have recorded</b> 212 lessons."],
     ["<b>since</b>","from a point in time","<b>Since</b> 2019."],
     ["<b>for</b>","over a length of time","<b>For</b> six years."],
     ["<b>ever / never</b>","experience, or none at all","Nobody <b>has ever</b> read it."],
     ["<b>already</b>","&nbsp;","&nbsp;"],
     ["<b>yet</b>","&nbsp;","&nbsp;"]],
    note="Use the <b>past simple</b> when the moment is named: <i>I put it in the template on "
    "Tuesday</i>."), 640)
S["pc08-f7"]=lambda: f_chart([("never opened",199),("opened once",7),
    ("opened more than once",2),("rewritten into a template",4),
    ("withdrawn as out of date",0)], unit="lessons")
S["pc08-f8"]=lambda: f_icons([("archive","a log of entries"),("tally","a counter at nine"),
    ("form","a template with a new field"),("danger","an out-of-date document"),
    ("meeting","a handover conversation"),("calendar","a leaving date")],3)
S["pc08-f9"]=lambda: f_realia(tbl("Lessons review",
    "Eight of two hundred and twelve. Four now say yes.",
    ["No.","What it says","Written","Opened","Document it should change","Changed"],
    [["41","valve lead time runs from approval","2022","1","estimating template","<b>yes</b>"],
     ["78","the drawing register needs weekly reconciliation","2021","0",
      "project process record","<b>yes</b>"],
     ["112","self-scored progress runs ~12 points high","2023","2","progress report","<b>yes</b>"],
     ["29","the matrix cannot count controls","2020","0","risk procedure","<b>yes</b>"],
     ["56","tide windows must be booked before February","2021","0","the schedule template","no"],
     ["133","the client reads the quality pages","2023","0","the distribution list","no"],
     ["168","spares arguments start at handover","2024","1","the exit strategy","no"],
     ["190","two registers hide conflicts","2024","0","the joint register rule","no"]],
    note="<b>A lesson is closed when a document changes, not when it is written.</b> Four of these "
    "eight had been waiting between two and five years."), 720)
S["pc08-f10"]=lambda: f_scene(960,440, people=[("hanna",290,176,{"seated":True}),
     ("karin",390,176,{"seated":True}),("nadia",510,172,{})],
    props=[("desk",240,0,1.2),("computer",120,138,0.5),("form",360,196,0.22),
     ("spreadsheet",450,198,0.2),("calendar",580,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,112,"2027",[("spreadsheet","copy it"),("judgment","?")]),
    clockat=(200,44,22,5,0))
S["pc08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("The log", None,
        "<p><b>212 entries. A search box.</b></p>"
        "<p style='font-size:13px'>Entry 41 (2022): <i>valve lead times run from approval.</i><br>"
        "Entry 97 (2023): <i>lead time starts at drawing approval, not order.</i><br>"
        "Entry 154 (2024): <i>valves: four weeks from approval.</i></p>"
        "<p style='color:#6b6861;font-size:13px'>The same lesson, three times, three people.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("The templates", None,
        "<p><b>Four new fields.</b></p>"
        "<p style='font-size:13px;line-height:1.85'>Estimating template: <i>lead time runs "
        "from&hellip;</i><br>Process record, line 3: <i>register reconciled weekly.</i><br>"
        "Progress report: <i>how measured.</i><br>Risk procedure: <i>quarterly bow tie, top "
        "five.</i></p>"
        "<p style='color:#6b6861;font-size:13px'>Used by the next person without their knowing it "
        "exists.</p>"), w)[0:3],
    w=960, h=290)
S["pc08-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Log page", None,
        "<p style='line-height:1.9'><b>41</b> (2022) valve lead times run from approval<br>"
        "<b>97</b> (2023) lead time starts at drawing approval<br>"
        "<b>154</b> (2024) valves: four weeks from approval</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Estimating template, revised", None,
        "<p><b>Lead time</b> &nbsp;______ weeks<br>"
        "<b>Runs from</b> &nbsp;&#9744; order &nbsp;&#9744; <b>drawing approval</b><br>"
        "<span style='font-size:12px;color:#6b6861'>Added 12 November, from lessons 41, 97 and "
        "154. Four minutes.</span></p>"), w)[0:3],
    w=920, h=250)
S["pc08-f13"]=lambda: f_realia(form("Lessons planner",
    [("How many lessons",""),("How many read",""),("How many changed a document",""),
     ("Four lessons and their destinations",""),("The rule you are asking for",""),
     ("Whose knowledge retires, and when","")]), 520)
S["pc08-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("hanna",135,172,{}),("karin",210,176,{"seated":True}),
     ("nadia",290,172,{"seated":True}),("nkemelu",370,176,{"seated":True}),
     ("wei",445,172,{}),("oskar",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("grace",790,172,{}),
     ("junseo",850,170,{}),("linh",910,172,{}),("ahmad",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("form",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,118,"CLOSED WHEN",[("a document","changes"),("not when","written")]),
    clockat=(278,34,22,5,0))
S["pc08-f15"]=lambda: f_chart([("yes, regularly",1),("yes, once",4),
    ("nobody",14),("we have no log",5),("I do not know",2)])
S["pc08-f16"]=lambda: f_realia(doc("On a desk in November",
    "What was on it at five o'clock",
    "<p><b>A log printout</b> of 212 entries, three of them marked as the same lesson.</p>"
    "<p><b>Four templates</b>, each with a new field.</p>"
    "<p><b>A thirty-year spreadsheet printout.</b></p>"
    "<p><b>A calendar</b> with <b>2027</b> circled.</p>"
    "<p><b>A note of three sentences.</b> <i>Two hundred and twelve people did the right thing and "
    "sent it to the wrong address, and the address is the only thing I am proposing to change. A "
    "lesson that does not change a document is a story, and stories belong in conversations rather "
    "than in a system with a search box. The part I cannot solve with a rule is that the most "
    "valuable thing this company knows has a retirement date, and we have asked her politely once a "
    "quarter for eleven years, which is not a method.</i></p>",
    "Five o'clock. Four lessons moved, fifty-eight hours booked."), 600)

# ---------------- Unit 9 ----------------
S["pc09-f1"]=lambda: f_icons([("quotemark","a question at the top of a page"),
    ("spreadsheet","an indicator on a report"),("calculator","two numbers combined"),
    ("tally","a quantity counted at source"),("pipe","the thing being measured"),
    ("scales","a scale with units"),("clipboard","somebody collecting data"),
    ("chain","an analysis model"),("note","an interpretation"),
    ("book","a standard from 2017")],4)
S["pc09-f2"]=lambda: f_scene(940,430, people=[("hanna",300,172,{}),("grace",395,172,{})],
    props=[("board",110,80,0.76),("desk",250,0,1.2),("note",460,196,0.22),
     ("window",830,56,0.9)],
    board=(690,22,200,118,"14 NUMBERS",[("traceable","9"),("estimates","3"),("nothing","2")]),
    clockat=(610,44,22,11,20))
S["pc09-f3"]=lambda: f_icons([("quotemark","the question"),
    ("spreadsheet","the indicator"),("calculator","the derived measure"),
    ("tally","the base measure"),("pipe","the entity and attribute"),
    ("clipboard","the method")],3)
S["pc09-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The number","The question it answers","What it is made of",
     "Who collects the lowest figure"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The number nobody can trace: ______________________"), 700)
S["pc09-f5"]=lambda: f_realia(doc("Lindhurst &middot; project office note 9",
    "Project office &middot; what a number is made of &middot; page 1 of 1",
    "<p><b>The standard.</b> <b>ISO/IEC/IEEE 15939</b>, <i>Systems and software engineering &mdash; "
    "Measurement process</i>, dated <b>2017</b>. It defines a measurement process and, more "
    "usefully, a <b>measurement information model</b>: a chain running from the question down to "
    "the person holding the clipboard.</p>"
    + table_html(["The chain, downwards",""],
      [["<b>information need</b>","the question somebody needs answered"],
       ["<b>indicator</b>","the figure the reader looks at"],
       ["<b>derived measure</b>","made by combining two or more measures"],
       ["<b>base measure</b>","a quantity collected directly, with a <b>method</b>, a <b>scale</b> "
        "and a <b>unit</b>"],
       ["<b>entity and attribute</b>","the thing measured, and the property measured"]])
    + table_html(["We put all fourteen numbers of our monthly report through it","Numbers"],
      [["trace to base measures somebody <b>collects deliberately</b>","<b>9</b>"],
       ["trace to a base measure that is itself an <b>estimate</b>","<b>3</b>"],
       ["trace to <b>nothing anybody can name</b>","<b>2</b>"]])
    + "<p><b>The nine.</b> Hours booked, invoices received, meters of pipe laid, drawings issued, "
    "valves installed, tests passed, days elapsed, orders placed, defects raised. <b>Each has a "
    "method, a unit and a named collector.</b> These are the strong part of the report and nobody "
    "had ever written the chain down.</p>"
    "<p><b>The three.</b> All rest on <b>percentage complete</b>, which on fourteen packages is "
    "collected by the method <i>ask the person doing the work</i>. <b>That is a legitimate "
    "method</b> &mdash; the standard requires the method to be <b>stated</b>, and ours was not.</p>"
    "<p><b>The two.</b> <i>Team morale: amber.</i> <i>Stakeholder confidence: green.</i> Both have "
    "been on the report <b>every month since 2021</b>. <b>Neither has an information need anybody "
    "can state</b>, neither has a base measure, a method, a scale or a collector. <b>Nobody "
    "invented them dishonestly</b>: they were added after a board meeting in which somebody asked "
    "how the team was feeling, and the honest answer that day was a colour. <b>We asked six readers "
    "what *amber morale* would cause them to do. All six said nothing. One said he had assumed it "
    "meant somebody had resigned.</b></p>"
    "<p><b>And a question we could not answer.</b> For <b>six</b> of the fourteen numbers, "
    "<b>nobody could state the information need at all</b>. They are on the report because they "
    "were on last month's. <b>That is the most common reason a number exists anywhere.</b></p>"
    "<p><b>What the standard does not do.</b> It defines the <b>process</b> and the <b>model</b> "
    "and prescribes <b>no measures</b>. It does not say which information needs matter. And it "
    "cannot tell you whether a measure genuinely captures what you care about &mdash; <b>a "
    "perfectly traceable number can still be the wrong number</b>. It also asks for the "
    "<b>measurement process itself</b> to be evaluated, which we had never done in eleven "
    "years.</p>",
    "Source: ISO/IEC/IEEE 15939:2017, Systems and software engineering &mdash; Measurement "
    "process. It defines a measurement process and a measurement information model relating "
    "information needs to indicators, derived measures and base measures; it prescribes no "
    "particular measures and does not determine which information needs an organization should "
    "have; it cannot establish whether a measure validly represents the concept of interest; and it "
    "is written for systems and software engineering."), 640)
S["pc09-f6"]=lambda: f_realia(tbl("Relative clauses", None,
    ["Structure","What it does","Example"],
    [["<b>who</b>","identifies a person","The person <b>who</b> collects the figure."],
     ["<b>which</b> <i>(defining, no comma)</i>","identifies a thing",
      "A base measure <b>which</b> is collected at source."],
     ["<b>, which</b> <i>(non-defining)</i>","adds information",
      "The indicator, <b>which</b> the board reads, is 0.78."],
     ["<b>that</b>","defining","The two numbers <b>that</b> nobody can trace."],
     ["<b>whose</b>","&nbsp;","&nbsp;"],
     ["<b>from which</b>","&nbsp;","&nbsp;"]],
    note="A defining clause takes no comma; a non-defining one takes commas, and in a report the "
    "difference changes the meaning."), 660)
S["pc09-f7"]=lambda: f_part("Fourteen report numbers",
    [("traceable to collected data",9,"#5c3b7a"),("resting on an estimate",3,"#b07a1e"),
     ("untraceable",2,"#6b6861")])
S["pc09-f8"]=lambda: f_icons([("quotemark","a question"),("spreadsheet","an indicator"),
    ("calculator","a derived measure"),("tally","a base measure"),
    ("clipboard","a method"),("danger","a number crossed off")],3)
S["pc09-f9"]=lambda: f_realia(tbl("Measurement map",
    "Fourteen numbers. Two rows have dashes across four columns.",
    ["No.","The question it answers","Indicator","Derived from","Base measure","Method · collector"],
    [["1","Are we getting the work we pay for?","cost index 0.78","EV &divide; AC",
      "hours, invoices","accounts · L. Tran"],
     ["2","Are we where the plan says?","schedule index 0.79","EV &divide; PV",
      "percentage complete","<b>self-report</b> · owners"],
     ["3","How late, in weeks?","&minus;7.5 weeks","ES &minus; AT","the baseline curve",
      "derived · O. Lindqvist"],
     ["4","What will it cost?","3.48 m","BAC &divide; CPI","as row 1","derived · L. Tran"],
     ["5","Is the pipework progressing?","62 percent","meters laid &divide; total",
      "meters laid","tape · W. Zhao"],
     ["6","Are tests passing?","41 of 44","count","tests passed","register · W. Zhao"],
     ["7","Are orders placed?","31 of 36","count","orders placed","system · O. Nasser"],
     ["8","Are defects closing?","9 open","count","defects raised","register · W. Zhao"],
     ["9","How many drawings are issued?","118","count","drawings issued","register · H. Virtanen"],
     ["10","Is the register current?","4 outstanding","count","revisions","register · W. Zhao"],
     ["11","Team morale","<b>amber</b>","<b>&mdash;</b>","<b>&mdash;</b>","<b>&mdash;</b>"],
     ["12","Stakeholder confidence","<b>green</b>","<b>&mdash;</b>","<b>&mdash;</b>",
      "<b>&mdash;</b>"]],
    note="<b>Two rows with no method, no collector and no reader action.</b> Both have been on the "
    "report every month since 2021."), 760)
S["pc09-f10"]=lambda: f_scene(960,440, people=[("hanna",290,172,{}),
     ("grace",400,176,{"seated":True}),("linh",520,176,{"seated":True})],
    props=[("board",100,78,0.72),("desk",240,0,1.2),("note",370,196,0.22),
     ("spreadsheet",460,198,0.2),("window",850,56,0.88)],
    board=(690,22,200,112,"SIX READERS",[("would act","0"),("assumed","resignations")]),
    clockat=(200,44,22,12,0))
S["pc09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Report 1", None,
        "<p style='font-size:13px;line-height:1.9'>cost index 0.78 &middot; schedule index 0.79 "
        "&middot; 41% complete &middot; forecast 3.48 m &middot; pipework 62% &middot; tests 41/44 "
        "&middot; orders 31/36 &middot; defects 9 &middot; drawings 118 &middot; register 4 "
        "&middot; <b>morale amber</b> &middot; <b>confidence green</b> &middot; &hellip;</p>"
        "<p style='color:#6b6861;font-size:13px'>Fourteen numbers. No methods anywhere.</p>"
        ), w)[0:3],
    lambda w,h: f_realia(doc("Report 2", None,
        "<p style='font-size:13px;line-height:1.9'>cost index 0.78 <i>(accounts · L. Tran)</i> "
        "&middot; schedule index 0.79 <i>(14 packages self-reported)</i> &middot; pipework 62% "
        "<i>(meters laid · W. Zhao)</i> &middot; tests 41/44 <i>(register)</i> &hellip;</p>"
        "<p><b>Two numbers removed, with one sentence saying why.</b></p>"), w)[0:3],
    w=960, h=290)
S["pc09-f12"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Page 1 &middot; fourteen numbers", None,
        "<p style='line-height:1.9'>0.78 &middot; 0.79 &middot; 41% &middot; 3.48 m &middot; 62% "
        "&middot; 41/44 &middot; 31/36 &middot; 9 &middot; 118 &middot; 4 &middot; amber &middot; "
        "green &middot; 212 &middot; 66</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Page 2 &middot; the same numbers, questioned", None,
        "<p style='font-size:13px;line-height:1.85'><b>Above each:</b> the question it answers.<br>"
        "<b>Beneath each:</b> the method and the collector.<br>"
        "<b>Struck out:</b> amber, green &mdash; no method, no collector, no reader action.<br>"
        "<b>Six questions still blank.</b> If they are blank in March, those numbers go too.</p>"
        ), w)[0:3],
    w=940, h=270)
S["pc09-f13"]=lambda: f_realia(form("Measurement planner",
    [("The number",""),("The question it answers",""),("What it is derived from",""),
     ("The base measure",""),("The method and collector",""),
     ("What a reader would do about it","")]), 520)
S["pc09-f14"]=lambda: f_scene(1000,450,
    people=[("hana",60,176,{}),("hanna",135,172,{}),("grace",210,176,{"seated":True}),
     ("linh",290,172,{"seated":True}),("nkemelu",370,176,{"seated":True}),
     ("wei",445,172,{}),("oskar",520,176,{"seated":True}),("ines",595,170,{}),
     ("ravi",660,172,{}),("mei",725,170,{}),("karin",790,172,{}),
     ("junseo",850,170,{}),("nadia",910,172,{}),("ahmad",960,174,{})],
    props=[("desk",95,0,1.1),("computer",330,140,0.4),("printer",430,196,0.3),
     ("note",548,198,0.2),("table",645,0,1.0),("cafe",865,198,0.36),
     ("shelf",930,96,0.5)],
    board=(40,22,215,112,"WHAT QUESTION?",[("numbers","14"),("blank","6")]),
    clockat=(278,34,22,12,0))
S["pc09-f15"]=lambda: f_chart([("all of them",2),("most of them",6),("a few",11),
    ("none",4),("we have no report",2)])
S["pc09-f16"]=lambda: f_realia(doc("On a desk in November",
    "What was on it at five o'clock",
    "<p><b>A monthly report</b> with two figures crossed out and methods written beside three "
    "others.</p>"
    "<p><b>A chain of five boxes</b> drawn on a sheet.</p>"
    "<p><b>An accounts printout.</b></p>"
    "<p><b>A page from a 2017 standard.</b></p>"
    "<p><b>A note of three sentences.</b> <i>Nine numbers turned out to be stronger than I expected "
    "and that is the first thing anybody should hear, because the two deletions only survive if the "
    "note is not read as an attack on the pack. A figure with no method does not get ignored; it "
    "gets believed by somebody, and the morale row has been read as a fact about resignations by at "
    "least one of the six people it was written for. The standard asks for the measurement process "
    "to be evaluated, which we had never done in eleven years and which cost one afternoon and a "
    "wall.</i></p>",
    "Five o'clock. Nine traceable, three resting on an estimate, two gone."), 600)
