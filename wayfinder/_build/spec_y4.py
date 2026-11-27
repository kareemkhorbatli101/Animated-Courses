# -*- coding: utf-8 -*-
"""Book 5 figure specs, Units 10 to 12."""
from figgen import *
S={}
P=lambda **kw: (lambda W,H: f_scene(W,H,**kw))

# ---------------- Unit 10 ----------------
S["y10-f1"]=lambda: f_icons([("consultation","a consultation"),("portal","an online form"),
    ("meeting","a public meeting"),("petition","a petition"),("dashboard","a response rate"),
    ("map","a ward boundary"),("studentservices","a surgery"),("appraisal","an agenda"),
    ("calendar","a deadline"),("statement","a published response")], cols=5)
S["y10-f2"]=lambda: f_scene(840,400, people=[("adeel",280,180,{"seated":True})],
    props=[("table",220,250,1.5),("computer",270,180,0.52),("map",400,186,0.6),
    ("timetable",490,190,0.6),("cafe",560,200,0.6)], window_=(650,60,130,100))
S["y10-f3"]=lambda: f_icons([("essay","free text"),("form","tick boxes"),
    ("calendar","the deadline"),("map","the route"),("meeting","empty chairs"),
    ("statement","the published summary")], cols=3)
S["y10-f4"]=lambda: f_realia(tbl("","Follow one consultation",["",""],
    [["Dates: open to close",""],["Questions: free text / tick box",""],
     ["Who may respond",""],["What happens afterwards",""],
     ["<b>What it does not ask</b>",""]]), 460)
S["y10-f5"]=lambda: f_realia(doc("Portmere Civic Forum · briefing for community organizations",
    "Fifty-five point five",
    "<p>We are asked this at every meeting, usually by somebody who has just been told that "
    "nobody cares any more. The figure is real, the fall is real, and the conclusion people draw "
    "from it is not supported by it.</p>"
    "<p><b>The figure.</b> Average global voter turnout fell from <b>65.2 percent in 2008 to "
    "55.5 percent in 2023</b> &mdash; almost ten percentage points in fifteen years.</p>"
    "<p><b>What a turnout figure is.</b> Votes cast as a share of those eligible. Both halves can "
    "change. Where the eligible population grows faster than the number of people voting, turnout "
    "falls even if the same number of people turn up. Some of this fall is that.</p>"
    "<p><b>The figure underneath.</b> Across 29 elections in 2024, turnout among voters living "
    "abroad was about <b>55 percent</b>, against an in-country average of <b>60 percent</b>. "
    "People who had to post a form from another country voted at close to the rate of people who "
    "walk to a school hall.</p>"
    "<p><b>What follows for us.</b> If participation fell partly because the denominator grew, "
    "the response is registration and access, not exhortation.</p>",
    "Figures: International IDEA, <i>Global State of Democracy</i>."))
S["y10-f6"]=lambda: f_realia(tbl("Word study","Indirect question openers",
    ["Opener","What follows","Example"],
    [["Could you tell me …","statement order","Could you tell me when it closes?"],
     ["Do you know …","statement order","Do you know whether it's been decided?"],
     ["I was wondering …","statement order","I was wondering what happens to responses."],
     ["Would you mind telling me …","statement order","… who sits on the panel?"],
     ["Can I ask …","statement order","Can I ask why the date was chosen?"]]), 540)
S["y10-f7"]=lambda: f_line([("2008",65.2),("2013",62.0),("2018",58.4),("2023",55.5)],
    w=600, unit="average global voter turnout, percent · 2024: in-country 60, diaspora 55",
    ymin=50)
S["y10-f8"]=lambda: f_icons([("meeting","a raised hand"),("microphone","a passed microphone"),
    ("studentservices","an officer at a table"),("portal","a form on a screen"),
    ("notebook","a minute-taker"),("statement","a published document")], cols=3)
S["y10-f9"]=lambda: f_realia(doc("Portmere City Council · Bus route 14 consultation",
    "Have your say",
    "<p style='font-size:12px;color:#6b6861'>Questions 1–7: please select one option.</p>"
    "<p>1 Do you use route 14? &nbsp; &#9675; yes &nbsp; &#9675; no<br>"
    "2 How often? &nbsp; &#9675; daily &nbsp; &#9675; weekly &nbsp; &#9675; less<br>"
    "3 Which option do you prefer? &nbsp; &#9675; A &nbsp; &#9675; B &nbsp; &#9675; C<br>"
    "4–7 <i>(further preference questions)</i></p>"
    "<p>8 Is there anything else you would like to tell us?<br>"
    "<span style='font-size:11px;color:#6b6861'>500 characters remaining</span></p>"
    "<p>9 Your age band &nbsp; 10 Your postcode &nbsp; 11 Are you responding as an organization?</p>",
    "<b>Closes 31 October at 23:59.</b> Responses will be considered by the committee in November."))
S["y10-f10"]=lambda: f_scene(920,430, people=[("nkemelu",180,176,{"seated":True}),
    ("bah",260,176,{"seated":True}),("grace",340,174,{"seated":True}),
    ("adeel",600,180,{}),("linh",680,172,{"seated":True}),("mei",750,166,{"seated":True}),
    ("oksana",820,172,{"seated":True}),("samira",880,172,{"seated":True})],
    props=[("table",150,250,2.0),("chair",580,0,0.8),("chair",720,0,0.8),
    ("dashboard",420,40,0.6),("notebook",420,190,0.52)])
S["y10-f11"]=lambda: f_realia(tbl("Two documents","What drove what",
    ["Consultation timetable","Committee calendar"],
    [["Opens 19 September<br>Six weeks<br>Closes 31 October<br>Half-term: 27–31 October<br>"
      "Officers' report published: ______",
      "Committee meets 12 November<br>Papers due to members 5 November<br>"
      "Officers' report drafted by 1 November<br>Previous committee: 10 September<br>"
      "Next after November: ______"]]), 540)
S["y10-f12"]=lambda: f_realia(doc("A. Khan · response to the route 14 consultation",
    "Three points, and one request",
    "<p><b>1 The timing.</b> The consultation closes on 31 October, which is the end of the "
    "half-term week. The opening date was set by the committee cycle rather than by the "
    "availability of respondents.</p>"
    "<p><b>2 A preferred option already exists.</b> Confirmed at the public meeting on 9 October: "
    "a preferred option appears in the officers' report, which is not linked from the "
    "consultation page.</p>"
    "<p><b>3 The free-text limit.</b> 500 characters is about 80 words, which is enough to state "
    "a preference and not enough to give a reason.</p>"
    "<p><b>Request:</b> that all three facts appear in the published summary of responses.</p>",
    "A. Khan · 28 October · response reference C14-2217"))
S["y10-f13"]=lambda: f_realia(tbl("","Response planner",["",""],
    [["<b>What the form asks</b>",""],["<b>What it does not ask</b>",""],
     ["Point 1 (with a number)",""],["Point 2",""],["Point 3",""],
     ["<b>What I want in the published summary</b>",""]]), 480)
S["y10-f14"]=lambda: f_scene(920,430, people=[("nkemelu",170,176,{"seated":True}),
    ("bah",250,176,{"seated":True}),("grace",330,174,{"seated":True}),
    ("adeel",560,180,{}),("linh",640,172,{"seated":True}),("mei",710,166,{"seated":True}),
    ("oksana",780,172,{"seated":True}),("priya",850,172,{}),("tomas",900,180,{})],
    props=[("table",140,250,2.0),("chair",540,0,0.8),("chair",680,0,0.8),
    ("dashboard",420,38,0.6),("notebook",410,190,0.52),("coat",880,150,0.62)])
S["y10-f15"]=lambda: f_chart([("voted",12),("signed a petition",9),
    ("responded to a consultation",5),("spoken at a meeting",3),("never been asked",4)])
S["y10-f16"]=lambda: f_scene(840,410, people=[("samira",280,172,{"smile":False})],
    props=[("door",470,96,1.35),("folder",350,180,0.52),("chair",620,0,0.8),
    ("bag",680,150,0.62),("coat",700,145,0.62)], floor=0.84)

# ---------------- Unit 11 ----------------
S["y11-f1"]=lambda: f_icons([("portal","a listing"),("star","a rating"),
    ("review","a review"),("messages","a host reply"),("calendar","a cancellation policy"),
    ("danger","a dispute"),("qualification","verified"),("transfer","a payout"),
    ("essay","terms update"),("phone","support chat")], cols=5)
S["y11-f2"]=lambda: f_scene(840,400, people=[("lucia",290,172,{"seated":True})],
    props=[("sofa" if "sofa" in ICON else "chair",230,0,1.4),("computer",330,180,0.52),
    ("phone",420,196,0.52),("lamp",160,170,0.62),("window",640,60,1.0)])
S["y11-f3"]=lambda: f_icons([("review","a bare review"),("essay","a specific review"),
    ("messages","the reply"),("danger","a flag"),("padlock","the policy"),
    ("star","the average")], cols=3)
S["y11-f4"]=lambda: f_realia(tbl("","What the platform promises",["",""],
    [["Grounds for removal",""],["Who decides",""],["Is there an appeal?",""],
     ["Time to respond",""],["Where the response appears",""]],
    note="What is not covered:"), 460)
S["y11-f5"]=lambda: f_realia(doc("Portmere Advice Center · consumer briefing, sheet 7",
    "A number we will not repeat",
    "<p>Last sheet we said we would not quote one figure from a large consumer survey. We have "
    "been asked about it eleven times since, so this sheet is about that figure and about why "
    "<i>we cannot tell</i> is a real answer.</p>"
    "<p><b>The figure.</b> Published summaries report that unfair practices were common, with "
    "<b>fake reviews at 66 percent</b> and misleading discounting at 61 percent.</p>"
    "<p><b>The missing half.</b> Sixty-six percent <b>of whom</b>? Of all consumers surveyed? Of "
    "consumers who shop online? Of consumers who reported encountering any unfair practice at "
    "all? Those three bases give three completely different findings from the same number.</p>"
    "<p><b>Why this is not pedantry.</b> If the base is all consumers, two people in three have "
    "met a fake review. If the base is people who already reported something unfair, it is a "
    "ranking and tells you nothing about how many people that is.</p>"
    "<p><b>What to do.</b> When somebody quotes it, ask what it is a percentage of. We have asked "
    "eleven times and been told eleven times that the person does not know.</p>",
    "Figures: European Commission, <i>Consumer Conditions Scoreboard 2025</i>. The base for the "
    "66 percent figure is not stated in the published summaries available to us."))
S["y11-f6"]=lambda: f_realia(tbl("Word study","Hedging verbs",
    ["Phrase","Distance from assertion","Example"],
    [["shows","none","The survey shows that …"],["suggests","some","The data suggests that …"],
     ["is consistent with","more","The finding is consistent with …"],
     ["appears to","more","It appears to indicate …"],
     ["does not establish","a refusal","The survey does not establish that …"]]), 540)
S["y11-f7"]=lambda: f_chart([("if the base is all consumers",66),
    ("if the base is online shoppers",66),("if the base is those reporting unfair practice",66)],
    unit="the same 66 percent, three different claims", w=580)
S["y11-f8"]=lambda: f_icons([("star","a two-star review"),("essay","a long reply"),
    ("messages","a short reply"),("danger","a flagged post"),
    ("padlock","the policy page"),("dashboard","the average dropping")], cols=3)
S["y11-f9"]=lambda: f_realia(doc("Platform · Review policy", None,
    "<p><b>We will remove a review if it:</b></p>"
    "<ul style='font-size:13px'>"
    "<li>contains a factual inaccuracy that can be demonstrated</li>"
    "<li>contains abuse, threats or discriminatory language</li>"
    "<li>includes personal data</li>"
    "<li>was not left by a verified guest</li></ul>"
    "<p><b>We do not remove a review because a host disagrees with it</b>, or because it is "
    "brief, or because it affects a rating.</p>"
    "<p>Hosts may reply publicly within <b>48 hours</b>. The reply appears beneath the review and "
    "does not affect the rating.</p>"
    "<p style='color:#9aa2a9'>Appeal &mdash; not available for this category.</p>"))
S["y11-f10"]=lambda: f_scene(820,400, people=[("lucia",290,172,{"seated":True})],
    props=[("table",230,250,1.4),("computer",290,180,0.52),("phone",420,200,0.52),
    ("notebook",490,200,0.52),("lamp",180,170,0.62)], window_=(640,60,130,100))
S["y11-f11"]=lambda: f_realia(tbl("Two documents","The listing and the review",
    ["The listing","The review"],
    [["One bedroom<br>One bathroom, shared with the host<br>No parking<br>Sleeps 1<br>"
      "Ground floor, two steps<br>______",
      "&#9733;&#9733;&#9734;&#9734;&#9734;<br><b>Not as described.</b><br>&nbsp;<br>"
      "<i>Message from the same guest, three days earlier:</i><br>"
      "\"There'll be three of us, is that OK?\"<br>______"]]), 540)
S["y11-f12"]=lambda: f_realia(doc("Public reply", None,
    "<p style='border-left:4px solid #b9b7b0;padding-left:10px'>"
    "&#9733;&#9733;&#9734;&#9734;&#9734; &nbsp; <b>Not as described.</b></p>"
    "<p style='margin-top:14px'><b>Reply from the host</b></p>"
    "<p>Thank you for taking the time. The listing describes one bedroom, one shared bathroom "
    "and no parking, and all three were as described. I am sorry it was not what you were "
    "expecting.</p>"
    "<p style='font-size:11px;color:#6b6861;margin-top:10px'>3 sentences · 41 words</p>"))
S["y11-f13"]=lambda: f_realia(tbl("","Reply planner",["",""],
    [["<b>The complaint, in their words</b>",""],["<b>The one checkable fact</b>",""],
     ["<b>The sentence of regret</b>",""],
     ["<b><s>What I will not say</s></b>",""]]), 460)
S["y11-f14"]=lambda: f_scene(920,430, people=[("lucia",180,172,{}),("adeel",250,180,{}),
    ("oksana",320,172,{}),("linh",450,172,{}),("mei",520,166,{}),
    ("hana",650,166,{}),("priya",860,172,{}),("tomas",900,180,{})],
    props=[("suitcase",120,0,0.7),("suitcase",390,0,0.7),("door",580,96,1.35),
    ("padlock",760,60,0.6),("window",740,60,1.0),("bins",820,0,1.35)])
S["y11-f15"]=lambda: f_chart([("read the bad ones",11),("look at the average",8),
    ("read the replies",6),("ignore them entirely",4),("write my own",2)])
S["y11-f16"]=lambda: f_scene(840,410, behind=[("oyelaran",280,170,{"smile":False})],
    counter_=(150,230,310,110),
    on_counter=[("phone",220,0.45),("review",330,0.45)],
    props=[("chair",600,0,0.9),("chair",700,0,0.9),("shutter",790,70,0.9),
    ("cafe",60,50,0.6)], panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 12 ----------------
S["y12-f1"]=lambda: f_icons([("appraisal","a review form"),("meeting","a one-to-one"),
    ("clipboard","a development plan"),("spreadsheet","a competency framework"),
    ("dashboard","objectives"),("chain","360 feedback"),("stamp","probation sign-off"),
    ("interview","a promotion panel"),("coins","a training budget"),
    ("calendar","a quarterly marker")], cols=5)
S["y12-f2"]=lambda: f_scene(820,400, people=[("samira",250,172,{"smile":False})],
    props=[("table",330,250,1.35),("appraisal",390,196,0.62),("chair",300,0,0.8),
    ("chair",470,0,0.8),("door",120,96,1.35),("window",640,60,1.0)])
S["y12-f3"]=lambda: f_icons([("appraisal","a thin form"),("timer","eleven minutes"),
    ("handshake","a positive tone"),("clipboard","an empty plan"),
    ("calendar","nine in a day"),("door","leaving with nothing")], cols=3)
S["y12-f4"]=lambda: f_realia(tbl("","The framework",
    ["Criterion","Top rating, in words","Next rating, in words","What the difference asks for"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="Can I tell what to do?"), 560)
S["y12-f5"]=lambda: f_realia(doc("Portmere Employment Partnership · briefing for advisers, sheet 3",
    "Fifty-nine in a hundred",
    "<p>The most-quoted figure in workforce planning this year is a projection, and the way it is "
    "constructed is unusually clear, so it is worth reading as an example of how to read one.</p>"
    "<p><b>The projection.</b> Of every <b>hundred workers</b>, <b>fifty-nine</b> are projected "
    "to need reskilling or upskilling by 2030. Of those fifty-nine, <b>eleven</b> are judged "
    "unlikely to receive it &mdash; which the report translates as over <b>120 million workers</b> "
    "at medium-term risk of redundancy.</p>"
    "<p><b>What has already happened.</b> Half of workers have now had some training, reskilling "
    "or upskilling, up from <b>41 percent</b> two years earlier. That is a measurement, not a "
    "projection, and it is the number we would quote if we could only have one.</p>"
    "<p><b>What employers say they will do.</b> <b>Eighty-five percent</b> name upskilling as "
    "their main response to change, and <b>63 percent</b> name skill gaps as the largest barrier. "
    "Those are statements of intention.</p>"
    "<p><b>The three kinds of sentence.</b> A projection, a measurement and a statement of "
    "intention are not equally useful to somebody sitting in front of you.</p>",
    "Figures: World Economic Forum, <i>Future of Jobs Report 2025</i>."))
S["y12-f6"]=lambda: f_realia(tbl("Word study","Adjective + preposition",
    ["Adjective","Preposition","Example"],
    [["interested","in","interested in learning"],["good","at","good at finishing"],
     ["responsible","for","responsible for signing off"],
     ["capable","of","capable of writing one"],["committed","to","committed to doing it"]]), 480)
S["y12-f7"]=lambda: f_part("One hundred workers, projected to 2030",
    [("need reskilling and will get it",48.0,"#8ab0dd"),
     ("need it and are unlikely to get it",11.0,AMBER),
     ("not projected to need it",41.0,"#b9b7b0")], w=600)
S["y12-f8"]=lambda: f_icons([("notebook","writing during a meeting"),("microphone","interrupting"),
    ("handshake","nodding"),("door","leaving with an empty form"),
    ("calendar","a manager's diary"),("note","one line written down")], cols=3)
S["y12-f9"]=lambda: f_realia(doc("Linkwave · Annual review", None,
    "<table style='width:100%;font-size:13px'>"
    "<tr><td><b>Quality of work</b></td><td>Consistently high.</td></tr>"
    "<tr><td><b>Reliability</b></td><td>Never an issue.</td></tr>"
    "<tr><td><b>Working with others</b></td><td>Well liked.</td></tr>"
    "<tr><td><b>Initiative</b></td><td>Gets on with it.</td></tr>"
    "<tr><td><b>Development plan</b></td><td>&nbsp;</td></tr>"
    "<tr><td><b>Overall rating</b></td><td><b>Good</b> &nbsp; <i>(above: Very good)</i></td></tr>"
    "</table>"
    "<p style='margin-top:12px'>Signed (employee) ______________ &nbsp;&nbsp; "
    "Signed (manager) ______________</p>"))
S["y12-f10"]=lambda: f_scene(820,400, people=[("samira",280,172,{"seated":True}),
    ("bah",470,176,{"seated":True})],
    props=[("table",420,250,1.35),("appraisal",400,196,0.62),("notebook",490,200,0.52),
    ("pen",550,206,0.52),("door",700,96,1.35)])
S["y12-f11"]=lambda: f_realia(tbl("Two documents","The form and the framework",
    ["The completed form","The framework, two ratings"],
    [["Quality of work: consistently high<br>Reliability: never an issue<br>"
      "Working with others: well liked<br>Initiative: gets on with it<br>"
      "Development plan: <i>(empty)</i><br>Rating: ______",
      "<b>Good</b> — meets the standard of the role consistently.<br>"
      "<b>Very good</b> — meets it and visibly improves how the work is done for others, with at "
      "least one named example.<br>The difference is: ______"]]), 540)
S["y12-f12"]=lambda: f_realia(doc("To: D. Okonkwo","Review, 14 January — a note of what we agreed",
    "<p>Thank you for the time yesterday.</p>"
    "<p>You said: <i>&ldquo;You're very good at finishing. You're not good at telling anybody "
    "you've finished.&rdquo;</i> The example was the audit, which I completed nine days early and "
    "which you found by going to look for it.</p>"
    "<p>I've taken that as the one thing to change this year, and the change is the telling rather "
    "than the work. Could you confirm that is a fair record, and could it go in the development "
    "box with the example?</p>",
    "S. Haddad · 15 January"))
S["y12-f13"]=lambda: f_realia(tbl("","Preparation",["",""],
    [["<b>The narrow question</b>",""],["Follow-up 1",""],["Follow-up 2",""],
     ["<b>If the answer is nothing</b>",""],["<b>What I will send afterwards</b>",""]]), 470)
S["y12-f14"]=lambda: f_scene(920,430, people=[("samira",150,172,{"seated":True}),
    ("bah",230,176,{"seated":True}),("linh",400,172,{}),("oksana",470,172,{}),
    ("adeel",540,180,{}),("mei",700,166,{"seated":True}),("grace",780,174,{"seated":True}),
    ("priya",880,172,{})],
    props=[("table",120,250,1.4),("table",670,250,1.4),("printer",280,0,1.35),
    ("appraisal",300,160,0.62),("door",600,96,1.35),("chair",380,0,0.8)],
    clockat=(840,45,24,16,40))
S["y12-f15"]=lambda: f_chart([("this year",9),("more than a year ago",8),
    ("this month",5),("never",4),("I don't know",3)])
S["y12-f16"]=lambda: f_scene(840,410, people=[("adeel",280,180,{"smile":False,"seated":True})],
    props=[("desk",230,190,1.35),("computer",280,150,0.52),("essay",400,186,0.52),
    ("coat",470,150,0.62),("chair",450,0,0.8),("lamp",180,170,0.62)],
    panelbg="#242c38", floorbg="#30394a", clockat=(90,50,22,18,20))
