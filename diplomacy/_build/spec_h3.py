# -*- coding: utf-8 -*-
"""Foreign Service English Book 2 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 7 · Twenty-Four Hours ----------------
S["h07-f1"]=lambda: f_icons([("bloodtest","a laboratory sample"),("clock","twenty-four hours"),
    ("clock730","forty-eight hours"),("councilbuilding","a national focal point"),
    ("email","a secure message"),("data","a decision instrument"),
    ("departureboard","departures, unchanged"),("barrier","normal traffic"),
    ("meeting","officials on a speakerphone"),("microphone","a press line")], cols=5)
S["h07-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{}),("samira",640,172,{})],
    props=[("desk",230,0,1.25),("data",310,194,0.34),("note",380,196,0.3),
     ("door",560,70,0.88),("folder",690,192,0.32)],
    window_=(790,56,120,96), clockat=(140,46,22,7,10),
    panelbg="#2c3440", floorbg="#3a424e")
S["h07-f3"]=lambda: f_icons([("bloodtest","detected"),("data","worked through"),
    ("proof","determined notifiable"),("email","transmitted"),
    ("messages","acknowledged"),("departureboard","continuing normally")], cols=3)
S["h07-f4"]=lambda: f_realia(tbl("","When does the clock start?",
    ["The deadline","What really starts it","What people think starts it",
     "The consequence of the mistake"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The sentence I will say on the telephone:</b>"), 580)
S["h07-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 7 &middot; health notifications",
    "<p><b>Two clocks, in this order.</b></p>"
    + table_html(["Step","How long","From when"],
      [["<b>Assess</b> the event, using the Regulations' decision instrument","<b>48 hours</b>",
        "from <b>detection</b>"],
       ["<b>Notify</b> through the National IHR Focal Point","<b>24 hours</b>",
        "from the <b>determination</b> that the event is notifiable"]])
    + "<p>Almost everybody quotes the second clock. Almost nobody quotes the first. So states "
    "telephone us in a panic, when in fact the second clock has not started.</p>"
    + table_html(["Figure","What it counts"],
      [["<b>196</b> States Parties","states bound, <b>including States Parties that are not "
        "members of the health organization</b>"],
       ["<b>194</b> States Parties","the health organization's <b>own member states</b>"]])
    + "<p>Both figures are published by good sources. The difference is the <b>base</b>. It is "
    "not an error. Say which base you mean.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>Notification is not a restriction.</b> It "
    "does not close a border. It does not stop a flight. Measures are separate steps, taken by "
    "states. The organization may issue <b>recommendations</b>, and a recommendation is advice.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the International Health Regulations (2005), "
    "Article 6, as amended in 2024, with published guidance on the two periods and published "
    "membership figures. The text was amended in 2024. Check the current text before you quote "
    "it.</p>"))
S["h07-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["to assess","assessment"],["to notify","notification"],
     ["to determine","determination"],["to recommend",""],["to restrict",""],
     ["to advise",""]]), 440)
S["h07-f7"]=lambda: f_process(["detection","assess: up to 48 hours",
    "THE DETERMINATION","notify: 24 hours","acknowledged"])
S["h07-f8"]=lambda: f_icons([("bloodtest","a result arrives"),("proof","the final box ticked"),
    ("email","transmitted"),("messages","acknowledged"),
    ("departureboard","the airport, normal"),("podium","a press officer")], cols=3)
S["h07-f9"]=lambda: f_realia(tbl("Event timeline &middot; as at 07:40","One event, two clocks",
    ["Time","What happened"],
    [["<b>2 Mar, 14:00</b>","event detected in the health system"],
     ["<b>2 Mar, 18:30</b>","samples sent to the laboratory"],
     ["<b>3 Mar, 09:00</b>","decision instrument begun"],
     ["<b>&mdash;</b>","laboratory result <b>outstanding</b>"],
     ["<b>&mdash;</b>","<b>the determination</b> &mdash; not yet made"],
     ["<b>&mdash;</b>","notification &mdash; not yet due"]],
    note="<b>Clock started at:</b> ______________ &nbsp;&nbsp; "
    "<b>What this is not:</b> a restriction of any kind."), 560)
S["h07-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{}),("hana",640,172,{})],
    props=[("desk",230,0,1.25),("data",310,194,0.34),("note",380,196,0.3),
     ("phone",440,198,0.28),("door",570,70,0.88),("worldmap",760,46,0.66)],
    clockat=(150,46,22,7,10), panelbg="#2c3440", floorbg="#3a424e")
S["h07-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Sheet A", None, ["What we know"],
        [["an event"],["twenty-four hours"],["pending"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Sheet B", None, ["Time","What happened"],
        [["2 Mar 14:00","detected"],["2 Mar 18:30","samples sent"],
         ["3 Mar 09:00","instrument begun"],["&mdash;","result outstanding"],
         ["&mdash;","<b>determination not made</b>"],["&mdash;","notification not yet due"]],
        note="<b>24-hour clock: not started.</b> This is not a restriction."), w)[0:3],
    w=920, h=310)
S["h07-f12"]=lambda: f_realia(doc("Two internal notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The counterpart ministry has twenty-four hours and has asked us to pass material on.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Assessment:</b> 48 hours, <b>from detection</b>.<br>"
    "<b>Notification:</b> 24 hours, <b>from the determination</b>.<br>"
    "<b>Which clock is running:</b> the result is outstanding, so <b>the 24 hours have not "
    "started</b>.<br>"
    "<b>A notification is not:</b> 1 a closure &middot; 2 an admission &middot; 3 a request to "
    "us.<br>"
    "<b>Cannot be predicted:</b> what recommendations will issue, because the facts are "
    "incomplete.</p>",
    "One of these stops somebody sending an incomplete message."))
S["h07-f13"]=lambda: f_realia(form("Note planner",
    [("The query",""),("Clock 1: period / runs from",""),("Clock 2: period / runs from",""),
     ("Which clock is running, on the facts at __:__",""),
     ("What this is not: 1",""),("2",""),("3",""),
     ("What cannot be predicted, and why","")]), 520)
S["h07-f14"]=lambda: f_scene(980,440,
    people=[("omar",110,176,{"seated":True}),("samira",190,176,{"seated":True}),
     ("hana",270,172,{}),("bah",360,172,{"seated":True}),
     ("nadia",430,176,{"seated":True}),("yusuf",500,172,{"seated":True}),
     ("ahmad",580,170,{}),("linh",650,172,{}),("ida",720,170,{}),
     ("karin",790,172,{}),("lucia",850,170,{}),("oskar",910,172,{}),
     ("caruso",960,174,{}),("nkemelu",50,176,{})],
    props=[("desk",80,0,1.1),("phone",150,198,0.28),("flipchart",300,44,0.68),
     ("table",400,0,1.1),("computer",560,142,0.42),("cafe",830,198,0.38),
     ("door",960,70,0.8)], clockat=(240,36,22,7,30),
    panelbg="#2c3440", floorbg="#3a424e")
S["h07-f15"]=lambda: f_chart([("yes, for most",8),("only for the main one",6),
    ("yes, for all of them",4),("I have never checked",3),("no stated start",2)])
S["h07-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("form",320,192,0.34),("bloodtest",400,194,0.3),
     ("computer",550,142,0.5),("essay",680,192,0.32),("lamp",180,140,0.42)],
    clockat=(120,46,22,0,0), panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 8 · Asking Another State ----------------
S["h08-f1"]=lambda: f_icons([("envelope","a sealed request"),
    ("councilbuilding","a central authority"),("statement","bank statements"),
    ("chair","the witness chair"),("padlock","a person in custody"),
    ("book","two legal codes"),("headset","a translator"),
    ("fine","a refusal letter"),("calendar","a deadline"),
    ("signature","signing a receipt")], cols=5)
S["h08-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{}),("bah",420,172,{})],
    props=[("desk",230,0,1.25),("tray",310,198,0.38),("tray",380,198,0.38),
     ("essay",460,194,0.34),("board",620,42,0.78)], clockat=(140,46,22,12,0))
S["h08-f3"]=lambda: f_icons([("pen","drafted"),("stamp","certified and sealed"),
    ("transfer","transmitted"),("folder","returned"),
    ("councilbuilding","heard in court"),("calendar","months crossed off")], cols=3)
S["h08-f4"]=lambda: f_realia(tbl("","One letter, two requests",
    ["What was asked","Under which article","Where it goes","How long it takes"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The first question I will ask:</b>"), 580)
S["h08-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 8 &middot; incoming requests",
    "<p style='font-size:16px'>The <b>United Nations Convention against Corruption</b> has "
    "<b>191 parties</b>; the administering office records the <b>last ratification on 7 August "
    "2024</b>.</p>"
    "<p><b>Two articles that arrive in the same envelope.</b></p>"
    + table_html(["","Article 44","Article 46"],
      [["What it is about","<b>extradition</b>","<b>mutual legal assistance</b>"],
       ["What is asked for","a <b>person</b>","<b>evidence</b>, statements, documents, searches"],
       ["Who decides","usually a <b>court</b> in the requested state","usually <b>officials</b>"],
       ["How long","often <b>years</b>","often <b>weeks or months</b>"],
       ["Grounds of refusal","its own set","a different set"]])
    + "<p>States party designate a <b>central authority</b> for Article 46 requests, and those "
    "designations are published. For extradition the route may be different, and in some states it "
    "is a different office entirely.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>What to ask before drafting anything.</b> "
    "<i>Is this a request for a person or for evidence?</i> If the answer is &ldquo;both&rdquo;, it "
    "is two requests.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Convention, Articles 44 and 46; the "
    "administering office's ratification status page with the date of the last recorded "
    "ratification; published secondary summaries for the dual-criminality point, identified as "
    "secondary in the note.</p>"))
S["h08-f6"]=lambda: f_realia(tbl("Word study","Countable and uncountable",
    ["Countable","Uncountable"],
    [["a document, two documents","<b>evidence</b>"],
     ["a statement, three statements","<b>assistance</b>"],
     ["a request, four requests","<b>information</b>"],
     ["a witness, two witnesses","<b>cooperation</b>"],
     ["",""]]), 480)
S["h08-f7"]=lambda: f_chart([("a request for a person: months",36),
    ("a request for evidence: months",3)], unit="months")
S["h08-f8"]=lambda: f_icons([("statement","bank statements"),("chair","a witness sworn in"),
    ("magnifier","a search of premises"),("padlock","a person handed over"),
    ("councilbuilding","a court hearing"),("envelope","one envelope, two documents")], cols=3)
S["h08-f9"]=lambda: f_realia(doc("Consular Affairs &middot; incoming request, case 2026/118",
    "Summary &middot; 4 March",
    "<p><b>1. Evidence &mdash; Article 46 (mutual legal assistance).</b> Bank records for three "
    "years and a statement from one named witness. <b>Route:</b> the designated <b>central "
    "authority</b>. <b>Timescale:</b> weeks to months, on their timetable.</p>"
    "<p><b>2. A person &mdash; Article 44 (extradition).</b> The surrender of the named suspect. "
    "<b>Route:</b> a different office, and in practice a <b>court</b> there. <b>Timescale:</b> "
    "often years. <b>The grounds of refusal are a separate set.</b></p>"
    "<p><b>What is missing from request 1</b> <i>(and nothing else is)</i>: a <b>certified</b> "
    "translation of the court order; the account numbers <b>in full</b>.</p>"
    "<p><b>The question I asked first:</b> is this a request for a person or for evidence?</p>",
    "Two numbered sections, two article numbers, two routes, two timescales."))
S["h08-f10"]=lambda: f_scene(940,430, people=[("omar",320,176,{}),("bah",440,172,{})],
    props=[("desk",250,0,1.25),("essay",330,194,0.36),("book",420,192,0.32),
     ("folder",560,192,0.32),("folder",630,192,0.32),("board",780,42,0.74)],
    clockat=(150,46,22,12,0))
S["h08-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Summary A", None,
        "<p>The letter asks for bank records, a witness statement, a search of premises, the "
        "suspect himself, and an assurance about timing.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Summary B", None, ["#","Request","Art.","Route","Time"],
        [["1","evidence","46","central authority","weeks&ndash;months"],
         ["2","a person","44","court, other office","often years"]], numcols=(0,),
        note="<b>Missing from 1:</b> certified translation; account numbers in full"), w)[0:3],
    w=940, h=280)
S["h08-f12"]=lambda: f_realia(doc("Two covering notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Attached is a request from the prosecutor. Please forward to the appropriate authority.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1 Evidence &mdash; Article 46.</b> Central authority. Weeks to months.<br>"
    "<b>2 A person &mdash; Article 44.</b> A different office, and a court. Often years.<br>"
    "<b>Missing from 1</b> <i>(and nothing else is)</i>: certified translation; full account "
    "numbers.<br>"
    "<b>Proposed:</b> request 1 goes now; request 2 is prepared separately.<br>"
    "<b>What I cannot do:</b> give a single timescale for both.</p>",
    "One of these can be signed without a telephone call."))
S["h08-f13"]=lambda: f_realia(form("Covering note planner",
    [("Request 1 / Article",""),("Request 2 / Article",""),
     ("What is missing from 1",""),("What is missing from 2",""),
     ("What I propose, and why",""),("What I cannot do","")]), 520)
S["h08-f14"]=lambda: f_scene(980,440,
    people=[("omar",130,176,{"seated":True}),("bah",210,172,{}),
     ("hana",300,172,{"seated":True}),("nadia",370,176,{"seated":True}),
     ("samira",440,172,{}),("ahmad",520,170,{}),("yusuf",590,172,{}),
     ("linh",660,170,{}),("ida",730,172,{}),("karin",800,170,{}),
     ("lucia",860,172,{}),("oskar",920,170,{}),("caruso",965,174,{}),
     ("nkemelu",55,176,{})],
    props=[("table",260,0,1.15),("tray",340,196,0.34),("tray",410,196,0.34),
     ("printer",560,198,0.4),("board",700,40,0.64),("envelope",830,194,0.28),
     ("desk",80,0,1.0)], clockat=(180,36,22,12,0))
S["h08-f15"]=lambda: f_chart([("usually",8),("always",6),("only when the letter is long",4),
    ("only after something went wrong",3),("I forward what I am sent",2)])
S["h08-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("folder",320,190,0.36),("archive",400,186,0.42),
     ("essay",520,194,0.32),("computer",640,142,0.46),("note",760,120,0.26)],
    clockat=(120,46,22,14,10))

# ---------------- Unit 9 · Signed Is Not Ratified ----------------
S["h09-f1"]=lambda: f_icons([("certificate","two signatures"),("vote","a chamber in session"),
    ("folder","an instrument of ratification"),("receipt","a depositary's receipt"),
    ("calendar","entry into force"),("essay","a draft in brackets"),
    ("note","provisional application"),("recycle","a withdrawal"),
    ("tally","parties and signatories"),("handshake","two flags")], cols=5)
S["h09-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{"seated":True}),
     ("bah",390,172,{})],
    props=[("desk",230,0,1.25),("essay",310,194,0.34),("book",380,192,0.32),
     ("board",600,42,0.78),("window",820,56,0.96)], clockat=(140,46,22,12,0))
S["h09-f3"]=lambda: f_icons([("pen","signing"),("vote","approving"),
    ("archive","depositing"),("receipt","acknowledged"),
    ("calendar","coming into force"),("handsup","refraining")], cols=3)
S["h09-f4"]=lambda: f_realia(tbl("","The step that is missing",
    ["The instrument","Date of signature","The outstanding step","Who holds it"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The one sentence I would give a journalist:</b>"), 580)
S["h09-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 9 &middot; signature and ratification",
    "<p style='font-size:16px'>The <b>Vienna Convention on the Law of Treaties</b>, done in "
    "<b>1969</b>, entered into force on <b>27 January 1980</b>.</p>"
    + table_html(["","Number"],
      [["<b>Parties</b>","<b>116</b>"],["<b>Signatories</b>","<b>45</b>"]])
    + "<p>So a convention quoted almost daily as the law of treaties has about a hundred and sixteen "
    "parties. Much of its content is widely regarded as reflecting <b>customary law</b>, which is "
    "why it is cited against states that are not parties &mdash; but that is an argument about "
    "custom, not about membership.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px;font-size:13px'><b>Article 18.</b> <i>A state is "
    "obliged to refrain from acts which would defeat the object and purpose of a treaty when it has "
    "signed the treaty &hellip; until it shall have made its intention clear not to become a "
    "party.</i></p>"
    + table_html(["Step","What it does"],
      [["<b>Signature</b>","authenticates the text and triggers <b>Article 18</b>. It does "
        "<b>not</b> make the state bound by the substantive obligations"],
       ["<b>Ratification</b>","the act of consent that makes the state <b>bound</b>, once "
        "deposited"],
       ["<b>Entry into force</b>","the date the treaty operates for that state"]])
    + "<p><b>Two halves of one sentence, and most speakers drop one.</b> Signature is <b>not</b> "
    "consent to be bound. Signature <b>does</b> carry Article 18.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Vienna Convention on the Law of Treaties, "
    "1969, Article 18, and a depositary status extract giving 116 parties and 45 signatories. The "
    "extract is undated in the copy consulted.</p>"))
S["h09-f6"]=lambda: f_realia(tbl("Word study","What follows the verb",
    ["Verb + <i>-ing</i>","Verb + <i>to</i>"],
    [["avoid <b>signing</b>","agree <b>to sign</b>"],
     ["consider <b>ratifying</b>","decide <b>to ratify</b>"],
     ["involve <b>depositing</b>","refuse <b>to accept</b>"],
     ["risk <b>defeating</b>","undertake <b>to refrain</b>"],
     ["",""]]), 480)
S["h09-f7"]=lambda: f_chart([("parties",116),("signatories",45)], unit="states")
S["h09-f8"]=lambda: f_icons([("signature","a signature on the page"),("vote","a chamber votes"),
    ("archive","an instrument deposited"),("stamp","a receipt stamped"),
    ("calendar","a date circled"),("handsup","a hand held up")], cols=3)
S["h09-f9"]=lambda: f_realia(tbl("Status sheet &middot; one instrument",None,
    ["Step","Date"],
    [["Signature","<b>given</b>"],["Approval by the legislature","<b>outstanding</b>"],
     ["Deposit of the instrument","<b>outstanding</b>"],
     ["Entry into force for us","&mdash;"]],
    note="<b>Signature authenticates the text and triggers Article 18. It does not make us bound.</b>"
    " &nbsp; <b>What we do not say:</b> <i>we have agreed to the convention</i>."), 540)
S["h09-f10"]=lambda: f_scene(940,430, people=[("omar",320,176,{"seated":True}),
     ("caruso",450,172,{"seated":True})],
    props=[("table",350,0,1.25),("recorder",420,194,0.3),("book",490,192,0.32),
     ("essay",550,194,0.3),("board",760,42,0.72)], clockat=(150,46,22,12,0))
S["h09-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Sheet A", None,
        "<p style='font-size:17px'><b>Signed &mdash; [date].</b></p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Sheet B", None, ["Step","Status"],
        [["Signature","given"],["Approval","<b>outstanding</b>"],
         ["Deposit","<b>outstanding</b>"],["Entry into force","&mdash;"]],
        note="<b>Art. 18 applies.</b> Do not say <i>we have agreed</i>."), w)[0:3],
    w=900, h=280)
S["h09-f12"]=lambda: f_realia(doc("Two press lines", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Line 1</b><br>"
    "The Syrian Arab Republic has agreed to the Convention.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Line 2</b><br>"
    "<b>1</b> We have <b>signed</b> the Convention, on [date].<br>"
    "<b>2</b> <b>Ratification is outstanding.</b> No date is given.<br>"
    "<b>3</b> <b>Signature is not consent to be bound, and it is not nothing.</b> Under "
    "<b>Article 18</b> a signatory must refrain from acts that would defeat the object and purpose "
    "of the treaty.<br>"
    "<b>Do not say:</b> <i>we have agreed to the convention</i>; <i>signature is a "
    "formality</i>.</p>",
    "Two do-not-say entries, one for each direction of error."))
S["h09-f13"]=lambda: f_realia(form("Press line planner",
    [("Clause 1: what has been done",""),("Clause 2: the outstanding step, no date",""),
     ("Clause 3: what signature does oblige (Article ___)",""),
     ("If asked the legal question",""),("Do not say: 1",""),("2",""),("Source","")]), 520)
S["h09-f14"]=lambda: f_scene(980,440,
    people=[("omar",140,176,{"seated":True}),("caruso",230,172,{"seated":True}),
     ("bah",330,172,{"seated":True}),("nadia",400,176,{"seated":True}),
     ("hana",480,170,{}),("samira",550,172,{}),("ahmad",620,170,{}),
     ("yusuf",690,172,{}),("linh",760,170,{}),("ida",820,172,{}),
     ("karin",880,170,{}),("lucia",930,172,{}),("oskar",970,174,{}),
     ("nkemelu",55,176,{})],
    props=[("table",180,0,1.1),("recorder",250,194,0.26),("board",430,38,0.62),
     ("printer",600,198,0.38),("essay",700,192,0.26),("window",900,56,0.84),
     ("desk",60,0,1.0)], clockat=(360,34,22,12,0))
S["h09-f15"]=lambda: f_chart([("the state has agreed in principle",8),
    ("the state is bound",6),("the text is authenticated",4),
    ("I had not separated them",3),("nothing at all",2)])
S["h09-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,192,0.34),("note",400,194,0.28),
     ("computer",550,142,0.48),("folder",680,190,0.32),("pen",760,194,0.24)],
    clockat=(120,46,22,9,50))
