# -*- coding: utf-8 -*-
"""Foreign Service English Book 2 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · What the Caller Said ----------------
S["h04-f1"]=lambda: f_icons([("coast","a port at dusk"),("phone","a handset and a pad"),
    ("idcard","an identity document"),("form","a claim form"),
    ("chair","an interview room"),("map","a border crossed"),
    ("folder","pending decision"),("archive","two colored folders"),
    ("quotemark","inside quotation marks"),("clock","a late hour")], cols=5)
S["h04-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{"seated":True})],
    props=[("desk",230,0,1.3),("phone",310,200,0.34),("note",380,198,0.34),
     ("logsheet",450,196,0.32),("lamp",540,140,0.48)],
    window_=(700,56,140,100), clockat=(130,46,22,18,20),
    panelbg="#2b3340", floorbg="#39414d")
S["h04-f3"]=lambda: f_icons([("quotemark","in quotation marks"),("pen","in my words"),
    ("proof","a box ticked"),("clock","a time beside it"),
    ("square","two halves, separated"),("essay","what I concluded")], cols=3)
S["h04-f4"]=lambda: f_realia(tbl("","The word people use about themselves",
    ["What they call themselves","What the position appears to be","How I record it",
     "Do I correct them on the call?"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The words I put in quotation marks:</b>"), 580)
S["h04-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 4 &middot; protection terminology",
    "<p style='font-size:16px'>The protection agency's own page says that <b>149 states are "
    "parties to the 1951 Convention <i>and/or</i> its 1967 Protocol</b>.</p>"
    "<p>That is a <b>combined</b> figure. The per-instrument counts are different.</p>"
    + table_html(["Instrument","Parties"],
      [["the <b>1951</b> Convention","<b>146</b>"],["the <b>1967</b> Protocol","<b>147</b>"],
       ["<b>either or both</b>","<b>149</b>"]])
    + "<p>So a state can be party to one and not the other. Quoting 149 as &ldquo;parties to the "
    "Convention&rdquo; is wrong by three, and quoting it without the words <i>and/or</i> is wrong in "
    "a way the reader cannot detect.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>The original time limit has not vanished "
    "everywhere.</b> The 1951 Convention as drafted covered events before 1951; the 1967 Protocol "
    "removed that limit. The limitation still applies for <b>Saint Kitts and Nevis</b> and "
    "<b>Madagascar</b>.</p>"
    "<p><b>Two words that are not the same.</b> An <b>asylum-seeker</b> has claimed and is waiting. "
    "A <b>refugee</b> has been recognized. <b>Non-refoulement</b> does not wait for the "
    "determination.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the protection agency's own published pages, "
    "including its combined and per-instrument figures and its note on the remaining time "
    "limitation. Figures move; the date on the page matters as much as the number.</p>"))
S["h04-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["to claim","a <b>claimant</b>"],["to recognize","recognition"],
     ["to determine","determination"],["to persecute",""],["to protect",""],
     ["to return",""]]), 440)
S["h04-f7"]=lambda: f_chart([("either or both",149),("the 1967 Protocol",147),
    ("the 1951 Convention",146)], unit="states parties")
S["h04-f8"]=lambda: f_icons([("phone","a handset and a pad"),("quotemark","one sentence quoted"),
    ("square","two headings, one rule"),("calendar","a date circled"),
    ("logsheet","a port record"),("folder","for the competent authority")], cols=3)
S["h04-f9"]=lambda: f_realia(doc("Consular Affairs &middot; telephone note",
    "Port call &middot; 4 March, 18:20 &middot; read back to caller: yes",
    "<p><b>What the caller said</b> <i>(his words in quotation marks; times as given by him)</i></p>"
    + table_html(["#","What he said"],
      [["1","He said, in his words: <i>&ldquo;I'm a refugee. I'm at the port and they've taken my "
        "papers.&rdquo;</i>"],
       ["2","He said he <b>had arrived on Monday 2 March</b>."],
       ["3","He said he <b>had made a claim on Tuesday 3 March</b>, at the port office."],
       ["4","He said <b>no decision had been given</b> to him."],
       ["5","He said a <b>receipt</b> had been issued, number <b>412/26</b>."],
       ["6","He asked us to tell his <b>brother</b> where he was, <b>not</b> why; his <b>uncle</b> "
        "is <b>not</b> to be told."]], numcols=(0,))
    + "<p><b>What I have not verified:</b> the arrival and claim dates; the receipt number; the "
    "existence of the claim on any register.</p>"
    "<p><b>My reading, which is not a determination.</b> If the claim date is right, his present "
    "position is that of an <b>asylum-seeker</b>. <b>The word in his own sentence is his.</b></p>",
    "Two halves, kept apart by a heading rather than a sentence."))
S["h04-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("samira",420,172,{})],
    props=[("desk",230,0,1.3),("phone",310,200,0.34),("note",380,198,0.34),
     ("lamp",520,140,0.48),("folder",470,194,0.3)],
    window_=(720,56,140,100), clockat=(140,46,22,18,20),
    panelbg="#2b3340", floorbg="#39414d")
S["h04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>A refugee telephoned from the port. His papers have been taken. He wants his brother "
        "informed. He is clearly in difficulty and his claim appears genuine.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Note B", None, ["Half","Content"],
        [["<b>He said</b>","<i>&ldquo;I'm a refugee&rdquo;</i>; arrived Mon; claimed Tue; "
          "receipt 412/26"],
         ["<b>Not verified</b>","the dates, the receipt, the register entry"],
         ["<b>Consent</b>","brother: location only. Uncle: not to be told"],
         ["<b>My reading</b>","asylum-seeker, if the date is right. Not a determination"]]),
        w)[0:3],
    w=940, h=300)
S["h04-f12"]=lambda: f_realia(doc("Two telephone notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "A refugee telephoned from the port at about six. Papers taken. Wants his brother told. Claim "
    "seems genuine.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>18:21</b> He said, in his words: <i>&ldquo;I'm a refugee.&rdquo;</i><br>"
    "He said he had arrived Monday and claimed Tuesday. <b>No decision given.</b><br>"
    "<b>Not verified:</b> both dates, the receipt number.<br>"
    "<b>Consent:</b> brother &mdash; location only. Uncle &mdash; not to be told.<br>"
    "<b>My reading, not a determination:</b> asylum-seeker if the claim date is right.</p>",
    "One of these could be quoted against its writer."))
S["h04-f13"]=lambda: f_realia(form("Telephone note",
    [("Time / taken by / read back",""),("1 “                    ”",""),
     ("2",""),("3",""),("4",""),
     ("Not verified",""),("Consent: may be told",""),("Consent: must NOT be told",""),
     ("My reading (not a determination)",""),("Action, by","")]), 540)
S["h04-f14"]=lambda: f_scene(980,440,
    people=[("omar",110,176,{"seated":True}),("yusuf",190,176,{"seated":True}),
     ("ahmad",260,176,{"seated":True}),("samira",330,172,{}),
     ("hana",420,172,{}),("nadia",490,170,{}),("bah",560,172,{"seated":True}),
     ("linh",640,170,{}),("ida",710,172,{}),("karin",780,170,{}),
     ("lucia",840,172,{}),("oskar",900,174,{}),("caruso",960,176,{}),
     ("nkemelu",50,174,{})],
    props=[("desk",80,0,1.1),("phone",150,198,0.28),("lamp",120,132,0.4),
     ("board",380,38,0.62),("printer",520,198,0.4),("table",600,0,1.0),
     ("window",860,56,0.88)], clockat=(260,36,22,18,30),
    panelbg="#2b3340", floorbg="#39414d")
S["h04-f15"]=lambda: f_chart([("I paraphrase everything",8),("I quote the key sentence",6),
    ("only in difficult cases",4),("my own words, signed",3),
    ("I had not thought about it",2)])
S["h04-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("folder",320,190,0.4),("essay",420,194,0.34),
     ("data",550,106,0.56),("note",680,194,0.3),("computer",760,142,0.46)],
    clockat=(120,46,22,10,40))

# ---------------- Unit 5 · Nobody's National ----------------
S["h05-f1"]=lambda: f_icons([("certificate","an empty nationality field"),
    ("passport","no cover markings"),("boardingpass","a travel document"),
    ("desk","a registration counter"),("family","one line missing"),
    ("idcard","a residence permit"),("form","a blank box"),
    ("stamp","no claim established"),("noentry","refused at a desk"),
    ("book","two conventions")], cols=5)
S["h05-f2"]=lambda: f_scene(920,420, behind=[("samira",620,172,{}),("omar",700,176,{})],
    people=[("nkemelu",420,176,{"smile":False})],
    counter_=(560,228,250,112),
    on_counter=[("idcard",610,0.36),("book",700,0.34),("form",780,0.3)],
    props=[("folder",380,194,0.34),("board",120,40,0.76)], clockat=(300,44,22,12,0))
S["h05-f3"]=lambda: f_icons([("desk","a child is registered"),("certificate","a certificate issued"),
    ("idcard","a status document"),("book","a law amended"),
    ("review","a falling line"),("archive","two conventions, two dates")], cols=3)
S["h05-f4"]=lambda: f_realia(tbl("","What we cannot issue",
    ["What is asked for","Why it cannot be issued","What can be done instead"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>Who I refer them to, with a name and an extension:</b>"), 560)
S["h05-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 5 &middot; statelessness",
    "<p>Two conventions, and they do different jobs.</p>"
    + table_html(["Instrument","What it does"],
      [["the <b>1954</b> Convention relating to the Status of Stateless Persons",
        "how a stateless person <b>is to be treated</b>: papers, travel documents, rights"],
       ["the <b>1961</b> Convention on the Reduction of Statelessness",
        "how statelessness <b>is to be prevented</b>, mainly through nationality at birth"]])
    + "<p>One is about <b>treatment</b>. The other is about <b>prevention</b>. A state can be party "
    "to one and not the other.</p>"
    + table_html(["Instrument","Parties","As at"],
      [["<b>1961</b> Convention","<b>82</b>","<b>10 September 2025</b>"],
       ["<b>1961</b> Convention","<b>78</b>","<b>1 February 2023</b>"],
       ["<b>1954</b> Convention","<b>83</b>","<b>November 2014</b>"]])
    + "<p>The 1961 figure rose by four in under three years. The most quoted <b>1954</b> figure is "
    "<b>more than a decade old</b> and is still being repeated, including by us.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>What we are not able to do.</b> We cannot "
    "issue a passport to a person who is not our national, and we cannot <b>determine</b> that "
    "somebody is stateless. What we <b>can</b> do is state in writing what our records show and "
    "what they do not show.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the 1954 and 1961 Conventions; the 1961 counts "
    "as published by a university research center (10 September 2025) and a university factsheet "
    "citing the depositary (1 February 2023); the 1954 count as published by the protection agency "
    "in November 2014.</p>"))
S["h05-f6"]=lambda: f_realia(tbl("Word study","Active and passive",
    ["Active","Passive"],
    [["We <b>register</b> the birth.","The birth <b>is registered</b>."],
     ["They <b>issued</b> a document.","A document <b>was issued</b>."],
     ["The office <b>determines</b> status.","Status <b>is determined</b>."],
     ["Nobody <b>recorded</b> his birth.",""],
     ["They <b>have amended</b> the law.",""]]), 540)
S["h05-f7"]=lambda: f_line([("Feb 2023",78),("Sep 2025",82),("today",86)],
    dashed_from=1, mark=1, unit="parties", ymin=70)
S["h05-f8"]=lambda: f_icons([("form","an empty nationality field"),("desk","registering a birth"),
    ("boardingpass","a travel document issued"),("idcard","an expired permit"),
    ("councilbuilding","the determination office"),("signature","signed and dated")], cols=3)
S["h05-f9"]=lambda: f_realia(doc("Consular Affairs &middot; records letter",
    "ref. RL/2026/44 &middot; 4 March 2026",
    "<p><b>What our records show.</b><br>"
    "1 &nbsp;A <b>residence permit</b> was issued in <b>2019</b> and <b>was not renewed</b>; it "
    "expired in <b>2021</b>.<br>"
    "2 &nbsp;He attended this office on <b>4 March 2026</b> with that permit, a medical card and a "
    "school letter.</p>"
    "<p><b>What our records do not show.</b><br>"
    "1 &nbsp;<b>No birth entry</b> in any register accessible to this office.<br>"
    "2 &nbsp;<b>No passport or travel document</b> issued to him by this ministry.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>What this letter does not determine.</b> "
    "This ministry has made <b>no determination</b> as to this person's nationality or lack of it, "
    "<b>in either direction</b>. The absence of an entry is a fact about the register, not a finding "
    "about the person.</p>"
    "<p><b>Referral.</b> Determination is carried out under the national procedure by the office "
    "below. The officer responsible is <b>Mrs Dalia Khoury</b>, extension <b>412</b>.</p>",
    "Signed and dated at the counter, in the presence of the applicant."))
S["h05-f10"]=lambda: f_scene(940,430, behind=[("samira",700,172,{})],
    people=[("omar",480,176,{}),("nkemelu",330,176,{"smile":False})],
    counter_=(600,228,260,112),
    on_counter=[("idcard",650,0.34),("pen",740,0.3),("form",810,0.3)],
    props=[("folder",290,194,0.32),("computer",160,142,0.46)], clockat=(240,44,22,12,0))
S["h05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Letter A", None,
        "<p>We confirm that no record relating to the above-named person has been found in our "
        "files.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Letter B", None, ["Section","Content"],
        [["Records show","permit 2019, expired 2021; attended 4 March"],
         ["Records do not show","no birth entry; no travel document"],
         ["Does not determine","nationality, <b>in either direction</b>"],
         ["Referral","Mrs D. Khoury, ext. 412"],
         ["Signed","at the counter, dated"]]), w)[0:3],
    w=920, h=300)
S["h05-f12"]=lambda: f_realia(doc("Two records letters", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 1</b><br>"
    "We confirm that no record has been found.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 2</b><br>"
    "<b>Records show:</b> a permit issued 2019, expired 2021; attendance 4 March 2026.<br>"
    "<b>Records do not show:</b> any birth entry; any travel document issued by us.<br>"
    "<b>This letter determines nothing</b> about nationality, <b>in either direction</b>.<br>"
    "<b>Referral:</b> Mrs Dalia Khoury, ext. 412.<br>"
    "Signed and dated at the counter.</p>",
    "One of these could be read as a decision about a person."))
S["h05-f13"]=lambda: f_realia(form("Records letter",
    [("Who attended, and when",""),("What our records show",""),
     ("What our records do not show",""),
     ("What this letter does not determine (in either direction)",""),
     ("Referral: name and extension",""),("Signed and dated / reference","")]), 520)
S["h05-f14"]=lambda: f_scene(980,440,
    behind=[("samira",700,172,{}),("omar",780,176,{})],
    people=[("nkemelu",150,176,{"smile":False}),("oyelaran",230,172,{"seated":True}),
     ("caruso",310,176,{"seated":True}),("ida",390,172,{"seated":True}),
     ("hana",470,170,{}),("bah",540,172,{}),("nadia",610,170,{}),
     ("ahmad",880,172,{}),("yusuf",940,170,{})],
    counter_=(640,228,250,112), on_counter=[("idcard",690,0.32),("book",790,0.3)],
    props=[("chair",130,0,0.68),("board",40,38,0.62),("printer",840,198,0.4),
     ("computer",60,142,0.4)], clockat=(560,36,22,12,0))
S["h05-f15"]=lambda: f_chart([("not known, in full",8),("a dash",6),("nothing",4),
    ("not applicable",3),("it depends on the form",2)])
S["h05-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,192,0.36),("folder",410,190,0.38),
     ("computer",560,142,0.5),("note",690,120,0.26),("pen",700,194,0.26)],
    clockat=(120,46,22,15,20))

# ---------------- Unit 6 · The Most Ratified Treaty ----------------
S["h06-f1"]=lambda: f_icons([("certificate","a treaty signed"),("vote","a chamber voting"),
    ("archive","an instrument deposited"),("essay","a page of reservations"),
    ("note","a declaration clipped on"),("meeting","a committee of experts"),
    ("book","a state report"),("calendar","a year circled"),
    ("tally","ticks and gaps"),("review","two copies compared")], cols=5)
S["h06-f2"]=lambda: f_scene(920,420, people=[("omar",260,178,{}),
     ("bah",470,172,{"seated":True}),("nadia",550,172,{"seated":True}),
     ("hana",620,172,{"seated":True})],
    props=[("worldmap",120,44,0.8),("table",430,0,1.2),("essay",520,192,0.34),
     ("jug",660,196,0.3)], clockat=(760,46,22,9,10))
S["h06-f3"]=lambda: f_icons([("signature","signing"),("vote","approving"),
    ("archive","depositing"),("essay","reserving"),
    ("recycle","withdrawing"),("folder","submitting a report")], cols=3)
S["h06-f4"]=lambda: f_realia(tbl("","The headline and the small print",
    ["The headline figure","What the small print says","The second sentence"],
    [["","",""],["","",""],["","",""],["","",""]],
    note="<b>The sentence I will add from now on:</b>"), 560)
S["h06-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 6 &middot; a nearly universal treaty",
    "<p style='font-size:16px'>The <b>Convention on the Rights of the Child</b>, adopted in "
    "<b>1989</b>, has <b>196 states parties</b> &mdash; every eligible state but one.</p>"
    + table_html(["","What it means"],
      [["<b>The one that is not a party</b>","signed on <b>16 February 1995</b> and has not "
        "ratified; ratification there needs its legislature, and the treaty has not been sent "
        "to it"],
       ["<b>Signature alone</b>","signals intent. It does <b>not</b> make a state bound"],
       ["<b>Reservations and declarations</b>","entered by a number of parties, and published "
        "alongside their ratifications"]])
    + "<p style='border:1px solid #d9d4c9;padding:8px'><b>What the number does not tell you.</b> "
    "196 is a count of <b>parties</b>. It is not a count of <b>identical obligations</b>. "
    "&ldquo;Universally ratified&rdquo; is true about membership and false about content.</p>"
    "<p><b>Two sentences that go together.</b><br>"
    "1 &nbsp;The most widely ratified treaty in its field: <b>196 parties</b>.<br>"
    "2 &nbsp;Membership is nearly universal; <b>the obligations are not uniform</b>.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Convention on the Rights of the Child, "
    "1989; published party counts; published accounts of the one signatory state's position. "
    "Secondary sources differ by one or two depending on the date and on which entities are "
    "counted; cite the depositary's own list.</p>"))
S["h06-f6"]=lambda: f_realia(tbl("Word study","Verb, step, paper",
    ["Verb","The step","The paper"],
    [["to sign","signature","a signed treaty"],
     ["to ratify","ratification","an <b>instrument of ratification</b>"],
     ["to accede","accession","an instrument of accession"],
     ["to reserve","","a published "],["to declare","","an interpretive "]]), 520)
S["h06-f7"]=lambda: f_matrix(["membership","content"],
    [("196 parties", ["nearly universal","—"]),
     ("reservations and declarations", ["—","not uniform"]),
     ("one state: signed 1995, not ratified", ["the exception","—"])])
S["h06-f8"]=lambda: f_icons([("signature","a treaty signed"),("vote","a legislature votes"),
    ("archive","an instrument deposited"),("essay","a page of reservations"),
    ("recycle","a reservation withdrawn"),("meeting","a committee reads a report")], cols=3)
S["h06-f9"]=lambda: f_realia(doc("Information Department &middot; speaking note",
    "For speakers &middot; 4 March",
    "<p><b>Use these two sentences, in this order.</b><br>"
    "<b>1</b> &nbsp;The Convention, adopted in <b>1989</b>, has <b>196 states parties</b> &mdash; "
    "the most widely ratified instrument in the human rights field.<br>"
    "<b>2</b> &nbsp;<b>Membership is nearly universal. The obligations are not uniform</b>, because "
    "a number of parties entered <b>published reservations</b>.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>If asked about the state that is not a "
    "party.</b> It <b>signed on 16 February 1995</b> and has <b>not ratified</b>; ratification "
    "requires the consent of its legislature. Say that plainly. <b>Do not characterize its "
    "reasons.</b></p>"
    "<p><b>If asked about reservations.</b> They are published alongside each ratification. Whether "
    "a given reservation is compatible with the treaty is a <b>legal question</b> and goes to Legal "
    "Affairs, in writing.</p>"
    "<p><b>Do not say:</b> <i>universally accepted</i>.</p>",
    "Source: the Convention, 1989, and published party counts and reservations."))
S["h06-f10"]=lambda: f_scene(940,430, people=[("omar",330,176,{"seated":True}),
     ("caruso",470,172,{"seated":True})],
    props=[("table",360,0,1.25),("recorder",430,194,0.3),("essay",500,192,0.32),
     ("notebook",560,194,0.3),("worldmap",740,46,0.72)], clockat=(150,46,22,10,0))
S["h06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p style='font-size:17px'><b>196 states parties &mdash; universally accepted.</b></p>"),
        w)[0:3],
    lambda w,h: f_realia(tbl("Note B", None, ["#","Say this"],
        [["1","196 parties &mdash; the most widely ratified in its field"],
         ["2","Membership nearly universal; <b>obligations not uniform</b>"],
         ["If asked","one state signed <b>16 Feb 1995</b>, has not ratified"],
         ["If asked","reservations are published; compatibility goes to Legal Affairs"],
         ["Do not say","<i>universally accepted</i>"]], numcols=(0,)), w)[0:3],
    w=940, h=310)
S["h06-f12"]=lambda: f_realia(doc("Two briefing notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The Convention is universally accepted, with 196 states parties.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>1</b> 196 states parties &mdash; the most widely ratified in its field.<br>"
    "<b>2</b> Membership is nearly universal. <b>The obligations are not uniform.</b><br>"
    "<b>The exception:</b> one state, signed <b>16 February 1995</b>, not ratified.<br>"
    "<b>Reservations:</b> published; compatibility is a legal question.<br>"
    "<b>Do not say:</b> <i>universally accepted</i>.<br>"
    "<i>Source: the Convention, 1989; published counts.</i></p>",
    "One of these can be corrected by a reader with the reservations in front of them."))
S["h06-f13"]=lambda: f_realia(form("Briefing note planner",
    [("Sentence 1: the figure",""),("Sentence 2: the caveat, shorter",""),
     ("If asked about the exception",""),("If asked about the small print",""),
     ("Do not say",""),("Source","")]), 520)
S["h06-f14"]=lambda: f_scene(980,440,
    people=[("omar",140,178,{}),("caruso",280,172,{"seated":True}),
     ("linh",350,176,{"seated":True}),("ida",420,172,{"seated":True}),
     ("karin",490,176,{"seated":True}),("oskar",560,172,{"seated":True}),
     ("lucia",630,176,{"seated":True}),("bah",720,170,{}),("nadia",780,172,{}),
     ("hana",840,170,{}),("samira",900,172,{}),("ahmad",950,170,{}),
     ("yusuf",60,174,{}),("nkemelu",990,176,{})],
    props=[("podium",130,126,0.48),("worldmap",50,42,0.6),("table",300,0,1.1),
     ("tripod",700,150,0.46),("table",820,0,1.0),("essay",860,192,0.28),
     ("door",960,70,0.8)], clockat=(230,36,22,10,0))
S["h06-f15"]=lambda: f_chart([("only if asked",8),("always",6),("only in writing",4),
    ("only to colleagues",3),("I give the figure alone",2)])
S["h06-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,192,0.36),("note",410,194,0.3),
     ("folder",500,190,0.34),("pen",590,194,0.26),("lamp",180,140,0.42)],
    clockat=(120,46,22,11,40))
