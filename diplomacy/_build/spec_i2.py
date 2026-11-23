# -*- coding: utf-8 -*-
"""Foreign Service English Book 3 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · It Is Reported That ----------------
S["i04-f1"]=lambda: f_icons([("meeting","fifteen chairs"),("book","a bound statute"),
    ("chair","two agents, two tables"),("folder","written pleadings"),
    ("microphone","a judge reading aloud"),("certificate","a sealed judgment"),
    ("essay","a dissenting opinion"),("archive","a declaration lodged"),
    ("worldmap","two states shaded"),("quotemark","a headline")], cols=5)
S["i04-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{"seated":True}),
     ("bah",400,172,{})],
    props=[("desk",230,0,1.3),("essay",310,194,0.34),("book",390,192,0.3),
     ("note",450,196,0.24),("note",490,196,0.24),("note",530,196,0.24),
     ("lamp",600,140,0.44)], window_=(760,56,120,96), clockat=(140,46,22,17,10))
S["i04-f3"]=lambda: f_icons([("handshake","a special agreement"),("archive","a declaration lodged"),
    ("meeting","a hearing"),("microphone","judgment delivered"),
    ("worldmap","two states bound"),("book","a third state reading it")], cols=3)
S["i04-f4"]=lambda: f_realia(tbl("","Binding or influential?",
    ["The document","Who is bound","Who relies on it anyway","The honest sentence"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The word I will stop using:</b>"), 580)
S["i04-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 4 &middot; reading a judgment",
    "<p>Three facts about the Court, and then one sentence from its Statute.</p>"
    + table_html(["",""],
      [["<b>Judges</b>","<b>15</b>"],["<b>Term</b>","<b>nine years</b>"],
       ["<b>Jurisdiction</b>","rests on the <b>consent</b> of the states concerned"]])
    + "<p style='border:1px solid #d9d4c9;padding:8px;font-size:14px'><b>Article 59.</b> <i>The "
    "decision of the Court has no binding force except between the parties and in respect of that "
    "particular case.</i></p>"
    "<p><b>The three ordinary routes to jurisdiction:</b> a <b>special agreement</b>; a <b>clause in "
    "a treaty</b>; a <b>declaration</b> lodged in advance. <b>No route, no case.</b> A dispute does "
    "not reach the Court because it is serious.</p>"
    "<p><b>Influence and binding force are not the same thing.</b> A judgment binds two states in one "
    "case. Its <b>reasoning</b> is read by every ministry, cited in later pleadings, and relied on by "
    "states that were not parties. That influence is real and it is not binding force.</p>"
    "<p><b>What a desk officer writes instead.</b> <i>The Court held, in a case between A and B, "
    "that&hellip;</i> And, where the reasoning matters beyond the case: <i>the reasoning is likely to "
    "be relied on in comparable disputes, although it binds only the parties.</i></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Statute of the International Court of "
    "Justice, Articles 36 and 59, and the published composition of the Court. An advisory opinion is "
    "a separate procedure and is not covered by this note.</p>"))
S["i04-f6"]=lambda: f_realia(tbl("Word study","Reporting verbs in the passive",
    ["Active","Passive reporting form"],
    [["People <b>say</b> the reasoning is wide.","The reasoning <b>is said to be</b> wide."],
     ["Sources <b>report</b> that the vote was close.","The vote <b>is reported to have been</b> "
      "close."],
     ["Observers <b>understand</b> that talks continue.","Talks <b>are understood to be</b> "
      "continuing."],
     ["Lawyers <b>expect</b> that it will be cited.",""],
     ["Delegations <b>believe</b> that it changes nothing.",""]]), 560)
S["i04-f7"]=lambda: f_part("Who the judgment reaches",
    [("bound: two parties, one case",2,AMBER),
     ("influenced: ministries that read the reasoning",60,BLUE)])
S["i04-f8"]=lambda: f_icons([("handshake","a special agreement signed"),
    ("archive","a declaration lodged"),("meeting","a hearing"),
    ("microphone","judgment read aloud"),("worldmap","two states shaded"),
    ("book","a third ministry reading")], cols=3)
S["i04-f9"]=lambda: f_realia(doc("Europe Department &middot; reading note",
    "Judgment of 4 March &middot; 18:30",
    "<p><b>What the Court held.</b> In a case <b>between Astrand and Marovia</b>, the operative "
    "paragraphs <b>require Astrand</b> to give notice before authorizing works on the river, and to "
    "<b>consult Marovia</b> on the results of an environmental assessment.</p>"
    "<p><b>Who is bound.</b> <b>Article 59:</b> no binding force except between the parties and in "
    "respect of that particular case. <b>It obliges no other state to do anything.</b></p>"
    "<p><b>What is said, and is not verified by us.</b><br>"
    "&mdash; The reasoning <b>is said to be</b> unusually wide on notice.<br>"
    "&mdash; The parties <b>are understood to have</b> settled the remaining point.<br>"
    "&mdash; <b>It has been suggested that</b> the reasoning amounts to a general obligation. "
    "<b>The judgment itself binds the parties only.</b></p>"
    "<p><b>Sources.</b> The attributed statements come from telephone conversations recorded in "
    "today's file minute. <b>They are not named in this note, which circulates.</b></p>",
    "The holding, the limit, the attributions, and where the names are kept."))
S["i04-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("bah",400,172,{})],
    props=[("desk",230,0,1.3),("essay",310,194,0.34),("book",380,192,0.3),
     ("note",440,196,0.22),("note",480,196,0.22),("note",520,196,0.22),
     ("lamp",580,140,0.44)], window_=(740,56,120,96), clockat=(140,46,22,17,10))
S["i04-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>The Court has ruled that states must give notice before authorizing works. The reasoning "
        "is unusually wide and the parties settled on Tuesday.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Note B", None, ["Part","Content"],
        [["Held","in a case between Astrand and Marovia&hellip;"],
         ["Bound","<b>Art. 59</b>: those two states, that case"],
         ["Said","the reasoning <b>is said to be</b> wide"],
         ["Said","the parties <b>are understood to have</b> settled"],
         ["Sources","in the file minute, not in this note"]]), w)[0:3],
    w=940, h=300)
S["i04-f12"]=lambda: f_realia(doc("Two reading notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The Court has ruled that states must give notice. The reasoning is unusually wide. The parties "
    "settled on Tuesday. A source close to the delegation confirms this.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Held:</b> in a case between Astrand and Marovia, Astrand is required to give notice.<br>"
    "<b>Bound:</b> Article 59 &mdash; those two states, in that case.<br>"
    "<b>Said, not verified:</b> the reasoning <b>is said to be</b> wide; the parties <b>are "
    "understood to have</b> settled.<br>"
    "<b>Sources:</b> in today's file minute. Not named here, because this note circulates.</p>",
    "One of these mixes what was read with what was heard."))
S["i04-f13"]=lambda: f_realia(form("Reading note planner",
    [("What the Court held (name the parties)",""),("Who is bound (the article)",""),
     ("Is said to&hellip;",""),("Is understood to&hellip;",""),
     ("It has been suggested that&hellip;",""),
     ("Wider reliance, in two halves",""),("Sources (and why not here)","")]), 520)
S["i04-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("bah",200,172,{}),
     ("nadia",290,176,{"seated":True}),("hana",360,172,{"seated":True}),
     ("samira",430,176,{"seated":True}),("ahmad",520,170,{}),("yusuf",590,172,{}),
     ("linh",660,170,{}),("ida",730,172,{}),("karin",800,170,{}),
     ("lucia",860,172,{}),("oskar",915,170,{}),("caruso",960,174,{}),
     ("nkemelu",55,176,{})],
    props=[("desk",80,0,1.1),("book",150,196,0.26),("board",330,36,0.62),
     ("table",450,0,1.0),("printer",580,198,0.38),("lamp",120,132,0.38),
     ("window",880,56,0.86)], clockat=(250,34,22,18,0),
    panelbg="#2b3340", floorbg="#39414d")
S["i04-f15"]=lambda: f_chart([("all states",8),("the parties in that case",6),
    ("all parties to the treaty",4),("nobody in practice",3),("I was not sure",2)])
S["i04-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("folder",320,190,0.36),("essay",410,192,0.32),
     ("note",500,194,0.26),("book",570,192,0.3),("lamp",180,140,0.42)],
    clockat=(120,46,22,11,0))

# ---------------- Unit 5 · Forty-Seven Seats ----------------
S["i05-f1"]=lambda: f_icons([("vote","a ballot paper"),("meeting","a horseshoe chamber"),
    ("certificate","a founding resolution"),("timer","a two-year term"),
    ("worldmap","five regional groups"),("calendar","a review cycle"),
    ("folder","a state report"),("chair","three rapporteurs"),
    ("review","a plenary board"),("badge","an observer")], cols=5)
S["i05-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{"seated":True}),
     ("hana",400,172,{})],
    props=[("desk",230,0,1.3),("certificate",310,194,0.3),("essay",380,194,0.3),
     ("board",560,40,0.74),("window",800,56,0.96)], clockat=(140,46,22,9,30))
S["i05-f3"]=lambda: f_icons([("certificate","a resolution adopted"),("vote","a ballot counted"),
    ("timer","a two-year term"),("folder","a report submitted"),
    ("meeting","a review session"),("badge","two kinds of nameplate")], cols=3)
S["i05-f4"]=lambda: f_realia(tbl("","States or individuals?",
    ["The body","States or individuals","How they are chosen",
     "What that means for its output"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The one I had wrong:</b>"), 580)
S["i05-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 5 &middot; an elected body",
    "<p style='font-size:17px'><b>General Assembly resolution 60/251, of 15 March 2006</b>, "
    "established the Human Rights Council.</p>"
    + table_html(["",""],
      [["<b>Members</b>","<b>47</b>"],["<b>What the members are</b>","<b>states</b>"],
       ["<b>How they are chosen</b>","<b>elected directly and individually by secret ballot by a "
        "majority of the members of the General Assembly</b>"]])
    + "<p>Three things follow. The members are <b>states</b>, not individuals. They are elected "
    "<b>individually</b>, not as a slate. And the threshold is a <b>majority of the members of the "
    "Assembly</b> &mdash; a fixed base.</p>"
    "<p><b>The review it created.</b> The same resolution established the <b>Universal Periodic "
    "Review</b>. The <b>first cycle</b> ran over <b>four years</b>, at <b>48 states a year</b>.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>The figure we print and the figure we do "
    "not.</b> We print the first-cycle figure, with its source. <b>We do not print a current cycle "
    "length as though it were in resolution 60/251</b>: the periodicity has been set and reset by "
    "later decisions.</p>"
    "<p><b>What the body is not.</b> Not a court, not a treaty body, and its members do not sit in a "
    "personal capacity. A report calling it a <i>panel of experts</i> has described a different "
    "institution.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: General Assembly resolution 60/251 of 15 March "
    "2006, which contains the membership figure, the method of election and the establishment of the "
    "review; the first-cycle periodicity from the published description of that cycle.</p>"))
S["i05-f6"]=lambda: f_realia(tbl("Word study","Two sentences, one sentence, reduced",
    ["Two sentences","With a relative clause","Reduced"],
    [["The body has 47 members. They are states.","47 members, <b>which are</b> states",
      "47 members, <b>all states</b>"],
     ["The resolution was adopted in 2006. It created the review.",
      "the resolution, <b>which was adopted</b> in 2006","the resolution, <b>adopted in 2006</b>"],
     ["","",""]]), 580)
S["i05-f7"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Members are states", None, ["",""],
        [["how many","<b>47</b>"],["what they are","<b>states</b>"],
         ["chosen by","the General Assembly, by secret ballot"],
         ["they sit as","their states"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Members are individuals", None, ["",""],
        [["how many","<b>18</b>"],["what they are","<b>independent experts</b>"],
         ["chosen by","the states parties to a treaty"],
         ["they sit as","themselves, in a personal capacity"]]), w)[0:3],
    w=920, h=280)
S["i05-f8"]=lambda: f_icons([("vote","a ballot box"),("meeting","a chamber of nameplates"),
    ("certificate","a resolution number"),("timer","a two-year term"),
    ("calendar","a review calendar"),("badge","two kinds of nameplate")], cols=3)
S["i05-f9"]=lambda: f_realia(tbl("Body profile card",None,
    ["","Entry"],
    [["<b>Founding instrument</b>","General Assembly resolution <b>60/251</b>"],
     ["<b>Date</b>","<b>15 March 2006</b>"],
     ["<b>Members</b>","<b>47</b>"],
     ["<b>What the members are</b>","<b>states</b>, elected directly and individually by secret "
      "ballot"]],
    note="<b>What it is not:</b> a court &middot; a treaty body &middot; a panel of experts. "
    "&nbsp; <b>Figures we print:</b> 47 members; first review cycle four years, 48 states a year. "
    "&nbsp; <b>Figures we do not print:</b> any current cycle length without its decision number."),
    580)
S["i05-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("hana",400,172,{})],
    props=[("desk",230,0,1.3),("certificate",310,194,0.3),("essay",380,194,0.28),
     ("board",560,40,0.72),("note",470,194,0.24),("window",810,56,0.94)],
    clockat=(140,46,22,9,30))
S["i05-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Card A", None,
        "<p style='font-size:17px'><b>Panel of experts, 47 members.</b></p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Card B", None, ["",""],
        [["instrument","res. 60/251, 15 March 2006"],["members","47"],
         ["what they are","<b>states</b>"],["chosen","individually, secret ballot"],
         ["not","a court, a treaty body, a panel of experts"]]), w)[0:3],
    w=900, h=290)
S["i05-f12"]=lambda: f_realia(doc("Two drafted paragraphs", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Draft 1</b><br>"
    "The panel of experts adopted a resolution on 3 March. Its review takes place every four and a "
    "half years.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Draft 2</b><br>"
    "The Council, <b>established by resolution 60/251 of 15 March 2006 and composed of 47 member "
    "states elected directly and individually by secret ballot</b>, adopted a resolution on 3 "
    "March.<br>"
    "<b>It is neither a court nor a treaty body</b>, and its members do not sit in a personal "
    "capacity.<br>"
    "<b>The first review cycle ran over four years, at 48 states a year.</b> Any current interval "
    "should be cited with the decision that fixes it.</p>",
    "The opening reduced clause carries five facts and the thing that happened."))
S["i05-f13"]=lambda: f_realia(form("Paragraph planner",
    [("Opening reduced clause: instrument",""),("date",""),("number of members",""),
     ("what they are",""),("What the body is and is not",""),
     ("One figure, with its source",""),("What this paragraph does not assert","")]), 520)
S["i05-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("hana",200,172,{}),
     ("nadia",290,176,{"seated":True}),("bah",360,172,{"seated":True}),
     ("samira",430,176,{"seated":True}),("ahmad",520,170,{}),("yusuf",590,172,{}),
     ("linh",660,170,{}),("ida",730,172,{}),("karin",800,170,{}),
     ("lucia",860,172,{}),("oskar",915,170,{}),("caruso",960,174,{}),
     ("nkemelu",55,176,{})],
    props=[("desk",80,0,1.1),("certificate",150,196,0.26),("board",330,36,0.64),
     ("table",450,0,1.0),("printer",580,198,0.38),("worldmap",700,40,0.56),
     ("cafe",845,198,0.36)], clockat=(250,34,22,10,0))
S["i05-f15"]=lambda: f_chart([("I had never checked",8),("yes, states",6),
    ("I thought experts",5),("I thought a mixture",3),("I checked only today",2)])
S["i05-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,192,0.32),("note",400,194,0.26),
     ("certificate",480,192,0.28),("pen",560,196,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,15,0))

# ---------------- Unit 6 · Concluding Observations ----------------
S["i06-f1"]=lambda: f_icons([("meeting","eighteen chairs, personal names"),
    ("book","a bound covenant"),("folder","a state report"),
    ("essay","a list of issues"),("chair","a delegation opposite"),
    ("certificate","concluding observations"),("pen","a recommendation marked"),
    ("calendar","a follow-up date"),("note","a shadow report"),
    ("desk","the observations on a ministry desk")], cols=5)
S["i06-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{"seated":True}),
     ("nadia",400,172,{})],
    props=[("desk",230,0,1.3),("certificate",310,194,0.3),("book",390,192,0.3),
     ("folder",460,192,0.28),("computer",580,142,0.44),("window",800,56,0.96)],
    clockat=(140,46,22,14,20))
S["i06-f3"]=lambda: f_icons([("envelope","a report posted late"),("chair","an empty chair"),
    ("microphone","a delegation answering"),("pen","a paragraph drafted"),
    ("certificate","observations adopted"),("calendar","a follow-up letter")], cols=3)
S["i06-f4"]=lambda: f_realia(tbl("","Authoritative but not binding",
    ["The document","Who wrote it, in what capacity","Who is obliged",
     "What happens in practice if it is ignored"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The sentence I will use about its weight:</b>"), 580)
S["i06-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 6 &middot; a treaty body",
    "<p>Who the committee is, before anything else.</p>"
    + table_html(["",""],
      [["<b>Members</b>","<b>18</b>"],
       ["<b>In what capacity</b>","as <b>independent experts, in their personal capacity</b>"],
       ["<b>Not</b>","representatives of states; judges; a court"],
       ["<b>What it produces</b>","<b>concluding observations</b> on each state party's report"]])
    + "<p><b>The cycle, in four steps.</b> 1 The state party submits a <b>periodic report</b>. "
    "2 The Committee sends a <b>list of issues</b>. 3 A <b>dialogue</b> is held with the delegation. "
    "4 The Committee adopts <b>concluding observations</b>, usually with a <b>follow-up</b> "
    "request.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>Authoritative and not binding.</b> They are "
    "<b>not judgments</b>; the Committee is not a court; nothing in them is enforceable against a "
    "state by any court. <b>And they are authoritative</b>, adopted by eighteen experts after a "
    "documented exchange with the state, and relied on by courts, legislatures and ministries. "
    "<b>Ignoring them is a political decision with consequences, not a legal neutrality.</b></p>"
    "<p><b>If a report is overdue</b> the Committee may <b>proceed without it</b>. <b>A state that "
    "does not submit does not avoid being examined; it only avoids being heard.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the 1966 Covenant and the published composition "
    "and working methods of its Committee, including the number of members and the capacity in which "
    "they serve.</p>"))
S["i06-f6"]=lambda: f_realia(tbl("Word study","What happened, and what would have happened",
    ["What happened","What would have happened"],
    [["The report was sent in June.","<b>If</b> it <b>had been sent</b> in March, the Committee "
      "<b>would have had</b> it."],
     ["The delegation answered in writing.","<b>If</b> it <b>had not answered</b>, the paragraph "
      "<b>would have been</b> harder."],
     ["We did not ask for an extension.",""],
     ["The observations were adopted in July.",""]]), 560)
S["i06-f7"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Binding", None, ["Document"],
        [["the treaty, for a state party"],["a judgment of a court with jurisdiction"],
         ["a domestic law"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Authoritative", None, ["Document"],
        [["concluding observations"],["a general comment"],["an expert report"]],
        note="Different reasons for mattering, and only one column is enforceable."), w)[0:3],
    w=900, h=260)
S["i06-f8"]=lambda: f_icons([("envelope","posted late"),("chair","an empty chair"),
    ("microphone","questions answered"),("pen","a paragraph drafted"),
    ("certificate","observations adopted"),("calendar","a follow-up letter")], cols=3)
S["i06-f9"]=lambda: f_realia(tbl("Response grid &middot; concluding observations of 2 July",None,
    ["¶","What it asks","Owner here","By","Our position, in one sentence"],
    [["9","data on waiting times","Statistics","30 Apr","we will publish the series annually"],
     ["12","training for officials","Training Unit","31 May","a module exists; we will extend it"],
     ["14","a change of practice","<b>Legal Affairs</b>","<b>tbc</b>","<b>referred</b>"],
     ["17","consultation","Europe Dept","15 Apr","we will consult and report"],
     ["21","follow-up within a year","Europe Dept","2 Jul","we will submit on time"]],
    numcols=(0,), note="<b>Not binding does not mean no answer.</b>"), 600)
S["i06-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{"seated":True}),
     ("nadia",400,172,{})],
    props=[("desk",230,0,1.3),("certificate",310,194,0.3),("essay",380,194,0.28),
     ("book",450,192,0.28),("computer",580,142,0.44),("window",810,56,0.94)],
    clockat=(140,46,22,14,20))
S["i06-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Grid A", None, ["¶","Our position"],
        [["9","we will consider it"],["12","noted"],["14","not binding"]], numcols=(0,)), w)[0:3],
    lambda w,h: f_realia(tbl("Grid B", None, ["¶","Owner","By","Position"],
        [["9","Statistics","30 Apr","publish annually"],
         ["12","Training","31 May","extend the module"],
         ["14","<b>Legal</b>","tbc","<b>referred</b>"],
         ["17","Europe","15 Apr","consult and report"],
         ["21","Europe","2 Jul","submit on time"]], numcols=(0,)), w)[0:3],
    w=940, h=290)
S["i06-f12"]=lambda: f_realia(doc("Two notes to a director", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "The Committee has ruled against us. The observations are not binding and no action is "
    "required.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>What this is:</b> observations adopted by 18 independent experts in a personal capacity. "
    "<b>They are authoritative. They are not binding.</b><br>"
    "<b>Response:</b> five recommendations, each with an owner, a date and a one-sentence "
    "position.<br>"
    "<b>Paragraph 14:</b> not binding on us; <b>whether the underlying treaty obligation requires "
    "the change is a separate question</b>, referred to Legal Affairs.<br>"
    "<b>Lessons:</b> if the report had been submitted in March, the Committee would have had our "
    "data. If an extension had been requested in February, it would probably have been granted.</p>",
    "The lessons are in the passive and name nobody."))
S["i06-f13"]=lambda: f_realia(form("Note planner",
    [("What this document is, half one",""),("half two",""),
     ("Grid row: ¶ / owner / by / position",""),("Row 2",""),("Row 3",""),
     ("The paragraph referred, and why",""),
     ("Lessons, conditional and name-free",""),("What this note does not claim","")]), 540)
S["i06-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("nadia",200,172,{}),
     ("bah",290,176,{"seated":True}),("hana",360,172,{"seated":True}),
     ("samira",430,176,{"seated":True}),("ahmad",520,170,{}),("yusuf",590,172,{}),
     ("linh",660,170,{}),("ida",730,172,{}),("karin",800,170,{}),
     ("lucia",860,172,{}),("oskar",915,170,{}),("caruso",960,174,{}),
     ("nkemelu",55,176,{})],
    props=[("desk",80,0,1.1),("certificate",150,196,0.26),("flipchart",320,40,0.66),
     ("table",450,0,1.0),("printer",580,198,0.38),("book",500,192,0.26),
     ("cafe",845,198,0.36)], clockat=(240,34,22,15,0))
S["i06-f15"]=lambda: f_chart([("it gets read and filed",8),("it gets a response plan",6),
    ("it gets quoted selectively",4),("nothing happens",3),("I do not know",2)])
S["i06-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("folder",320,190,0.36),("essay",410,192,0.3),
     ("calendar",540,106,0.56),("note",660,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,10,0))
