# -*- coding: utf-8 -*-
"""Flowline Book 5 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Unit 10 ----------------
S["re10-f1"]=lambda: f_icons([("spoon","a soil sampling auger"),
    ("packet","a labeled sample bag"),("pipe","a groundwater monitoring well"),
    ("scales","a depth measurement"),("water","a hand pump at a village well"),
    ("jug","product floating on water in a tube"),("table","a laboratory bench"),
    ("balance","a guideline value"),("tally","a result above that value"),
    ("walkroute","a pipeline right of way"),("chain","an old flowline with a clamp"),
    ("certificate","a cleaned site with a certificate"),
    ("bins","the same site, stained below the surface"),
    ("map","a map with sample points"),("camera","an aerial photograph of a creek"),
    ("note","certified clean is not a measurement")],4)
S["re10-f2"]=lambda: f_scene(820,420,
    people=[("yusuf",120,176,{}),("omar",340,180,{"seated":True}),("samira",420,180,{"seated":True}),
     ("adeel",500,180,{"seated":True}),("yara",580,180,{"seated":True}),
     ("nour",660,180,{"seated":True}),("nadia",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("jug",780,198,0.2)],
    board=(24,22,216,112,"THREE LAYERS",[("surface","cleaned"),("below","clean-looking"),("water table","product")]),
    clockat=(258,34,22,10,30))
S["re10-f3"]=lambda: f_icons([("map","a sampling plan with points"),
    ("form","a chain of custody form"),("certificate","a report with a method named"),
    ("balance","a guideline value table"),("note","a limitations paragraph"),
    ("note","four things, and the fourth makes it science")],3)
S["re10-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six sites",
    ["The site","What is known to have leaked","Baseline data?","Has anybody sampled?","Compared with what?"],
    blankrows(6,5),
    note="The third column is the one that will be empty. The box at the foot: the ones with no "
    "baseline."), 680)
S["re10-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: what sixty years leaves behind, measured",
    "<p style='font-size:12px;color:#6b6861'>Source: <i>Environmental Assessment of Ogoniland</i>, "
    "United Nations Environment Programme, 2011. In our own words. Ogoniland is a region of the Niger "
    "Delta in Nigeria, and everything here refers to that assessment and that region.</p>"
    "<p><b>What the document is.</b> A scientific environmental assessment of a region with a long "
    "history of oil production, by a United Nations body. It is not an inquiry into an accident and "
    "not a legal judgment. It is a measurement exercise, and it is here because it is the clearest "
    "published example of <b>the English of findings</b>.</p>"
    "<p><b>The scale of the work, as the assessment describes it.</b> Field work at <b>more than two "
    "hundred locations</b>. Examination of pipeline <b>rights of way</b>. Thousands of soil and water "
    "<b>samples</b> and dozens of <b>monitoring wells</b> drilled for the study. Review of existing "
    "medical records. <b>The sampling program is described in the report</b>, which is what allows "
    "anybody to argue with it.</p>"
    "<p><b>The findings, as published.</b> Contamination <b>more widespread and in places deeper</b> "
    "than had been assumed, including below surfaces that looked clean. <b>Hydrocarbons detected in "
    "groundwater</b> at a number of locations. At one named community, a layer of refined product "
    "floating on the groundwater and benzene in drinking water <b>above the World Health Organization "
    "guideline value</b>, with emergency action recommended.</p>"
    "<p><b>The finding that matters most for this course.</b> Sites <b>remediated and signed off</b> "
    "under a method relied on at the time were examined and, in a number of cases, found <b>still to "
    "be contaminated</b>. The certificates were issued in good faith. <b>The procedure did not include "
    "digging deep enough to find out.</b></p>"
    "<p><b>The causes.</b> The assessment discusses <b>both</b> operational failures and interference "
    "by third parties. <b>The proportions are contested</b>, and this book does not settle a dispute "
    "the document itself treats carefully.</p>"
    "<p><b>WHAT THE ASSESSMENT SAYS IT DID NOT DO.</b> It did not assess the whole Delta. The health "
    "observations are <b>not an epidemiological study</b>. It is <b>not an attribution of legal "
    "liability</b>. And it <b>could not recover a baseline</b>, because nobody measured that ground "
    "before production started.</p>",
    "Where there is no baseline, an assessment can describe the condition now and cannot fully "
    "separate what each contributor added."), 580)
S["re10-f6"]=lambda: f_realia(tbl("Word study",
    "Reporting findings",
    ["The structure","What it does","An example"],
    [["was found to","reports a finding","Contamination was found to extend below the cleaned surface."],
     ["was detected in","reports a presence, not a level","Hydrocarbons were detected in groundwater at several points."],
     ["exceeded the guideline value at","compares with a published figure","Benzene exceeded the guideline value at one location."],
     ["in a number of locations","honest imprecision","Product was observed in a number of locations."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>no conclusion could be drawn about</i> and <i>the assessment did not "
    "cover</i>."), 700)
S["re10-f7"]=lambda: f_realia(tbl("Sampling summary",
    "Deir flowline corridor &middot; 11 km of 60",
    ["","Figure"],
    [["Surface samples","94"],
     ["Boreholes","18"],
     ["Monitoring wells installed","6"],
     ["Greatest depth reached","9 m"],
     ["Guideline values used","published national values, named, with their source"],
     ["<b>Not sampled</b>","<b>the remaining 49 km, three village wells, anything below 9 m</b>"],
     ["Conclusion","describes the 11 km sampled, <b>and nothing else</b>"]],
    note="<b>The last row but one is the row that makes it an assessment.</b>"), 620)
S["re10-f8"]=lambda: f_icons([("balance","a result below a guideline value"),
    ("tally","a result above it"),("magnifier","a substance detected, no level given"),
    ("map","an area not sampled at all"),("certificate","a certificate and no samples"),
    ("note","what does this entitle you to say?")],3)
S["re10-f9"]=lambda: f_realia(tbl("Site history",
    "Deir flowline corridor &middot; twenty-two years",
    ["","Entry"],
    [["Releases recorded","eleven"],
     ["With a recorded volume","<b>four</b>"],
     ["Recorded as <i>minor</i>, no figure","<b>seven</b>"],
     ["With completion certificates","three"],
     ["Baseline data","<b>none</b>"],
     ["Groundwater monitoring wells, historic","<b>none ever installed</b>"],
     ["Village wells within 400 m","<b>three, never sampled</b>"]],
    note="<b>Eleven events, four volumes, no baseline.</b>"), 620)
S["re10-f10"]=lambda: f_scene(860,420,
    people=[("yusuf",200,180,{}),("haddad",330,176,{}),("adeel",600,180,{"seated":True})],
    props=[("desk",260,0,1.0),("logsheet",340,198,0.2),("map",470,196,0.22),
     ("certificate",660,198,0.2),("table",560,0,0.9)],
    clockat=(60,40,22,11,0))
S["re10-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Statement A",None,
    "<p>The corridor was remediated in 2014 and holds a valid completion certificate. Environmental "
    "conditions are considered satisfactory.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Statement B",None,
    "<p>Eleven releases, <b>four with a volume</b>. What the certificate <b>actually certifies</b>: a "
    "cleaned and inspected <b>surface</b>. 11 km of 60 sampled, to 9 m. <b>Not sampled:</b> 49 km, "
    "three village wells, below 9 m. <b>No baseline.</b></p>",None),380)[0:3],
    800,300,"Satisfactory","Measured, and unmeasured")
S["re10-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>The Deir corridor was remediated in 2014 and holds a valid completion certificate. No further "
    "action is proposed.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Eleven releases since 2003; a volume for four. The 2014 certificate certifies that the "
    "<b>surface</b> was cleaned and inspected: <b>no sample, no borehole</b>, because the procedure "
    "did not require either. 94 surface samples and 18 boreholes to 9 m across <b>11 km of 60</b>; all "
    "below the named values. <b>Not sampled: 49 km, three village wells within 400 m, anything below "
    "9 m.</b> <b>No baseline exists.</b> <b>I am not claiming the village wells are contaminated, and "
    "that sentence should be read exactly as written, because families draw from them.</b></p>",
    None),380)[0:3],
    800,300,"No further action","Three proposals")
S["re10-f13"]=lambda: f_realia(form("Plan your environmental note",
    [("The release history, with its gaps",BLANK),("What any certificate actually certifies",BLANK),
     ("What has been sampled: how many, how deep, compared with what",BLANK),
     ("What has not been sampled",BLANK),("What you are not claiming",BLANK),
     ("Three proposals",BLANK)],
    note="Six boxes. The fifth must be readable aloud to somebody who lives there."), 560)
S["re10-f14"]=lambda: f_scene(1000,450,
    people=[("yusuf",60,176,{}),("yara",130,172,{}),("adeel",205,176,{}),
     ("samira",290,172,{}),("omar",365,176,{}),("nour",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("haddad",590,170,{}),("ahmad",655,172,{}),
     ("wei",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("spoon",350,198,0.2),
     ("pipe",420,194,0.2),("jug",550,198,0.2),("table",650,0,1.0),
     ("map",860,196,0.22),("certificate",930,198,0.2)],
    board=(40,22,206,112,"SIGNED OFF IS NOT MEASURED",[("surface","cleaned"),("9 m","deepest"),("baseline","none")]),
    clockat=(262,34,22,12,0))
S["re10-f15"]=lambda: f_chart([("yes, and I have seen it",1),("I believe so",3),
    ("no",6),("I do not know",7),("nobody could tell me",5)], unit="engineers")
S["re10-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Eleven releases and four volumes",
    "<p><b>A site history</b> with eleven releases, seven of them marked <i>minor</i> with no "
    "volume.</p>"
    "<p><b>A 2014 completion certificate</b>, correctly issued, for a cleaned surface.</p>"
    "<p><b>A sampling summary</b> covering eleven kilometers of sixty.</p>"
    "<p><b>A map</b> with three village wells inside four hundred meters.</p>"
    "<p><b>A measuring tube</b> with a thin dark layer floating on water.</p>"
    "<p><i>Nobody falsified a certificate. The procedure did not ask the question, and production "
    "began in 1974, so there will never be a baseline for this ground.</i></p>",
    "Seven o'clock. You can still create one for today."), 620)

# ---------------- Unit 11 ----------------
S["re11-f1"]=lambda: f_icons([("archive","an audit report on a shelf"),
    ("folder","a second with the same finding"),("book","a third, the same again"),
    ("note","a closure note: action completed"),("form","a survey with a warning in the free text"),
    ("email","an email chain with three forwards"),("spreadsheet","a summary slide, softened"),
    ("data","injury rates going down"),("coins","a bonus scheme"),
    ("signpost","a cost reduction target"),("map","an organization chart"),
    ("racking","four separate sites"),("review","a senior monthly pack"),
    ("walkroute","a site visit itinerary"),("logsheet","a corrective action database"),
    ("note","we knew, in writing, three times")],4)
S["re11-f2"]=lambda: f_scene(820,420,
    people=[("yusuf",120,176,{}),("omar",340,180,{"seated":True}),("adeel",420,180,{"seated":True}),
     ("nour",500,180,{"seated":True}),("samira",580,180,{"seated":True}),
     ("nadia",660,180,{"seated":True}),("ahmad",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("archive",780,196,0.2)],
    board=(24,22,216,112,"THE SAME SENTENCE",[("38 overdue","the audit"),("being addressed","the site"),("no findings","the board")]),
    clockat=(258,34,22,11,0))
S["re11-f3"]=lambda: f_icons([("logsheet","a report with a number in it"),
    ("spreadsheet","the same report, summarized"),("map","a finding that belongs to nobody"),
    ("review","a pack full of injury rates"),("coins","an incentive on cost and output"),
    ("note","three reasons, and none is that anybody did not care")],3)
S["re11-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six repeated findings",
    ["The finding","First raised","How it was closed","When it came back","What the summary said two levels up"],
    blankrows(6,5),
    note="The fifth column has never been filled in by anybody. The box at the foot: the one raised "
    "three times."), 680)
S["re11-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: why an organization that was told does not act",
    "<p style='font-size:12px;color:#6b6861'>Source: Andrew Hopkins, <i>Failure to Learn: The BP "
    "Texas City Refinery Disaster</i>, CCH Australia, 2008. In our own words.</p>"
    "<p><b>What the book is.</b> One author's analysis of the explosion in Unit 2, written for people "
    "who work in industry. It asks a narrower question than the investigations did: <b>the "
    "information was there; why did it not produce action?</b></p>"
    "<p><b>Two kinds of safety, and only one being managed.</b> Injury rates were reported monthly, "
    "discussed, compared and attached to incentives. Process safety condition was not reported in a "
    "comparable way, so it was not discussed in a comparable way, and attention is <b>finite</b>.</p>"
    "<p><b>The warnings existed.</b> Audits, reviews, engineering reports and staff surveys had raised "
    "concerns. The point is not that nobody knew. It is that <b>knowing, in a document, somewhere in a "
    "large organization, is not the same as the organization knowing</b>.</p>"
    "<p><b>Why information loses its force going up.</b> A site report has numbers, dates and tags. "
    "The reader two levels up has forty sites, so somebody summarizes, and summarizing removes detail "
    "&mdash; and the detail is frequently the finding. <i>Thirty-eight inspections overdue</i> becomes "
    "<i>being addressed</i> becomes <i>within normal range</i>. <b>Nobody has to lie for this to "
    "happen</b>, and once the number is gone there is nothing to act on.</p>"
    "<p><b>Structure.</b> Where responsibility is decentralized, a finding that crosses boundaries "
    "belongs to nobody: site management owns the plant, a central function owns the standard, a "
    "project owns the modification.</p>"
    "<p><b>Incentives.</b> Where cost and output are measured precisely and process safety loosely, "
    "the organization optimizes what it measures.</p>"
    "<p><b>What would help.</b> Reporting process safety indicators with the <b>same "
    "seriousness</b>. Making somebody <b>accountable by name</b> for each major hazard. And being "
    "careful with the words <b>safety culture</b>, which can explain anything and therefore explain "
    "nothing.</p>"
    "<p><b>WHAT THIS BOOK IS AND IS NOT.</b> One author's analysis, not an official finding. Other "
    "analysts emphasize different factors. One company, one refinery. And it <b>cannot be "
    "implemented</b>: three of its five arguments are about how attention and information behave.</p>",
    "Go and find a finding at your own site that has been raised more than once."), 580)
S["re11-f6"]=lambda: f_realia(tbl("Word study",
    "Cause and inference",
    ["The structure","What it does","An example"],
    [["which suggests that","an inference, marked as one","The finding recurred, which suggests that the closure was nominal."],
     ["the reason appears to be","a cause, hedged","The reason appears to be that nobody owns the finding."],
     ["it does not follow that","blocks a bad inference","It does not follow that anybody was indifferent."],
     ["a more plausible explanation is","offers a better account","A more plausible explanation is that the number was lost in summary."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>attributing this to X explains nothing because</i> and <i>the "
    "evidence is consistent with</i>."), 700)
S["re11-f7"]=lambda: f_matrix(["As written at site","As described two levels up","Closure"],
    [("2019",["38 relief valve inspections overdue","backlog being addressed","<b>closed, no evidence</b>"]),
     ("2021",["44 relief valve inspections overdue","maintenance within normal range","<b>closed, no evidence</b>"]),
     ("2024",["51 relief valve inspections overdue","no significant findings","<b>open</b>"]),
     ("<b>Owner</b>",["<b>&mdash;</b>","<b>&mdash;</b>","<b>nobody</b>"])], 680)
S["re11-f8"]=lambda: f_icons([("map","a finding between two departments"),
    ("spreadsheet","a summary with the number removed"),("review","a pack full of injury rates"),
    ("coins","an incentive on output"),("note","a closure with no evidence"),
    ("magnifier","structural, informational or attentional?")],3)
S["re11-f9"]=lambda: f_realia(tbl("Audit closure review",
    "Six years",
    ["","Entry"],
    [["Findings raised more than once","three"],
     ["Closure notes reading <i>action completed</i>","<b>all but one</b>"],
     ["Evidence attached to those closures","<b>none</b>"],
     ["Wording two levels up","<i>being addressed</i>, <i>within normal range</i>, <i>no significant findings</i>"],
     ["Evidence required by the process","<b>not until this year</b>"]],
    note="<b>Closure meant somebody said so.</b>"), 620)
S["re11-f10"]=lambda: f_scene(860,420,
    people=[("yusuf",200,180,{}),("haddad",330,176,{}),("nour",600,180,{"seated":True}),
     ("omar",690,180,{"seated":True})],
    props=[("desk",260,0,1.0),("archive",340,196,0.2),("spreadsheet",470,198,0.2),
     ("table",560,0,0.9),("review",660,198,0.2)],
    clockat=(60,40,22,11,0))
S["re11-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Summary A",None,
    "<p>The relief valve inspection backlog is being addressed.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Summary B",None,
    "<p><b>38 (2019), 44 (2021), 51 (2024).</b> Closed twice with <b>no evidence attached</b>. "
    "Described upward as <i>being addressed</i>, <i>within normal range</i> and <i>no significant "
    "findings</i>. <b>Proposed owner: one name.</b></p>",None),380)[0:3],
    800,300,"Being addressed","Three numbers and an owner")
S["re11-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Lessons from previous audits are being embedded across the organization and corrective "
    "actions have been closed in accordance with the process.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p>Raised 2019 (<b>38</b>), 2021 (<b>44</b>), 2024 (<b>51</b>). <b>Closed in 2019 and 2021 with "
    "no evidence attached.</b> Work was genuinely done both times: the finding was <b>the backlog</b>, "
    "not a batch of valves, <b>which suggests</b> the closures were against a narrower definition. "
    "<b>No number appears in any of the three board summaries.</b> <b>It does not follow that anybody "
    "concealed anything.</b> Three auditable changes: a number in every summary line; no closure "
    "without a document; one named person.</p>",None),380)[0:3],
    800,300,"Being embedded","Three auditable changes")
S["re11-f13"]=lambda: f_realia(form("Plan your learning note",
    [("The finding, with its numbers and dates",BLANK),("What the closures said, and what was attached",BLANK),
     ("How it was described upward",BLANK),("One inference, marked as an inference",BLANK),
     ("What it does not imply",BLANK),("Three auditable requests",BLANK)],
    note="Six boxes, and the word <i>culture</i> in none of them."), 560)
S["re11-f14"]=lambda: f_scene(1000,450,
    people=[("yusuf",60,176,{}),("nour",130,172,{}),("haddad",205,176,{}),
     ("omar",290,172,{}),("adeel",365,176,{}),("samira",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("ahmad",590,170,{}),("yara",655,172,{}),
     ("wei",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("archive",350,196,0.2),
     ("spreadsheet",420,198,0.2),("map",550,196,0.22),("table",650,0,1.0),
     ("review",860,198,0.2),("logsheet",930,198,0.2)],
    board=(40,22,206,112,"KEEP THE NUMBER",[("38","2019"),("44","2021"),("51","2024")]),
    clockat=(262,34,22,12,0))
S["re11-f15"]=lambda: f_chart([("yes, always",3),("sometimes",6),("no",5),
    ("I do not know",6),("we do not track findings",2)], unit="engineers")
S["re11-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Three audits and one finding",
    "<p><b>Three audit reports</b> open at the same finding, with 38, 44 and 51 circled.</p>"
    "<p><b>Two closure notes</b> reading <i>action completed</i>, with nothing attached.</p>"
    "<p><b>Three board summaries</b> with no numbers in them.</p>"
    "<p><b>An organization chart</b> with the hazard sitting between two boxes.</p>"
    "<p><b>A monthly pack</b> full of injury charts.</p>"
    "<p><i>Twelve honest people produced this outcome. Nobody held the three documents at the same "
    "time, including the auditors.</i></p>",
    "Seven o'clock. The number was the finding, and the number was the first thing removed."), 620)

# ---------------- Unit 12 ----------------
S["re12-f1"]=lambda: f_icons([("data","a triangle on a wall"),
    ("container","a tower overfilling"),("logsheet","a drawing and seven guide words"),
    ("stairwell","a five-step staircase"),("form","two permits for one pump"),
    ("map","three boundaries and a drifting dot"),("door","a manway and an attendant"),
    ("shutter","a spade between two flanges"),("barrier","a boom across a channel"),
    ("pipe","a monitoring well on a right of way"),("archive","three audits, one number"),
    ("thermostat","a small adjustment to a valve"),("night","a shift ending quietly"),
    ("tally","an incident count of zero"),("balance","a capability assessment"),
    ("note","the absence of accidents is not the presence of safety")],4)
S["re12-f2"]=lambda: f_scene(920,430,
    people=[("yusuf",100,176,{}),("omar",300,180,{"seated":True}),("samira",375,180,{"seated":True}),
     ("adeel",450,180,{"seated":True}),("ahmad",525,180,{"seated":True}),
     ("nadia",600,180,{"seated":True}),("nour",672,176,{}),("haddad",742,180,{"seated":True}),
     ("yara",808,180,{"seated":True}),("wei",862,176,{}),("tomas",884,180,{"seated":True})],
    props=[("desk",280,0,1.05),("board",40,88,0.66),("book",862,198,0.2)],
    board=(24,22,216,112,"ABSENCE / ABILITY",[("count","what happened"),("assess","what we can do"),("same","adjustments")]),
    clockat=(254,34,22,4,0))
S["re12-f3"]=lambda: f_icons([("firealarm","a team responding to an upset"),
    ("eye","watching a trend that has just moved"),("meeting","reviewing a quiet shift"),
    ("calendar","thinking about what has not happened"),
    ("logsheet","a procedure beside the real job"),
    ("note","four abilities, and only one is about the past")],3)
S["re12-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six things you could count instead",
    ["What you would count","Which ability","How you would get the figure","Who would collect it","Would it mean anything with zero accidents?"],
    blankrows(6,5),
    note="The last column is the test. The box at the foot: the one you could start on Monday."), 680)
S["re12-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: the last document in the course",
    "<p style='font-size:12px;color:#6b6861'>Source: Erik Hollnagel, <i>Safety-I and Safety-II: The "
    "Past and Future of Safety Management</i>, Ashgate, 2014. In our own words.</p>"
    "<p><b>The first definition.</b> For about a century, safety has been defined as <b>the absence of "
    "accidents</b>. The work that follows is to find what goes wrong and eliminate its causes. Every "
    "document in this book belongs to that tradition, and the tradition has been enormously "
    "successful.</p>"
    "<p><b>The problem with it.</b> If safety is an absence, then <b>it is measured by counting things "
    "that are not there</b>. A good year gives a low number, and the same low number comes from a "
    "plant with large margins and from a plant with none. And as plants get safer the number gets "
    "smaller, so the measure becomes <b>less informative</b> exactly as performance improves.</p>"
    "<p><b>The second definition.</b> Safety as <b>the ability to succeed under varying "
    "conditions</b>. On that definition safety is a <b>presence</b>, and it can be examined on an "
    "ordinary day when nothing has happened.</p>"
    "<p><b>The central argument.</b> Procedures are written for conditions that are never exactly the "
    "conditions on the day, so people <b>adjust</b>. Those adjustments are <b>the reason almost "
    "everything works</b>, and occasionally, in a particular combination, an adjustment of the same "
    "kind contributes to an accident.</p>"
    "<p><b>So success and failure have the same source.</b> You cannot remove the adjustments without "
    "removing the performance that depends on them.</p>"
    "<p><b>The four abilities.</b> To <b>respond</b>, to <b>monitor</b>, to <b>learn</b>, and to "
    "<b>anticipate</b>. Three of the four can be examined on a quiet day. Only <i>learn</i> looks "
    "backwards, and it is the only one most organizations have a process for.</p>"
    "<p><b>Work as imagined and work as done.</b> The gap is not misconduct; it is the price of "
    "operating a real plant, and an organization that does not know its own gap is managing a plant "
    "that does not exist.</p>"
    "<p><b>WHAT THE ARGUMENT DOES NOT CLAIM.</b> It does not say stop investigating accidents &mdash; "
    "the second view <b>complements</b> the first. It does not say procedures are unnecessary. <b>It "
    "does not tell you what to measure</b>, which is the honest weakness of it. And it is an "
    "<b>argument</b>, widely contested, which has not displaced the older view.</p>",
    "Go and ask three people at your site what they do differently from the procedure, and why."), 580)
S["re12-f6"]=lambda: f_realia(tbl("Word study",
    "Argument and concession",
    ["The structure","What it does","An example"],
    [["it is true that &hellip; but","concede, then argue","It is true that incident counts are easy to collect, but they are uninformative at zero."],
     ["while accepting that","concede in a subordinate clause","While accepting that investigation is necessary, it is not sufficient."],
     ["granted","a one-word concession","Granted, capability is hard to measure."],
     ["even allowing for","concede a quantity","Even allowing for underreporting, the figure tells us little."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>the force of this objection is</i> and <i>this does not "
    "displace</i>."), 700)
S["re12-f7"]=lambda: f_realia(tbl("The twelve units",
    "One sentence each, and the last row is yours",
    ["Unit","The document","The sentence worth keeping"],
    [["1","a 1931 book","a counted figure measures what it counts, and the data may not exist"],
     ["2","an investigation and a review panel","a good injury record can coexist with a deteriorating plant"],
     ["3","a method and a standard","a study finds what the team can imagine, on a drawing that may be wrong"],
     ["4","a design standard","an eliminated hazard needs no permit, and that decision expires"],
     ["5","a public inquiry","the conclusion has to live in somebody's hands"],
     ["6","a 1997 paper","the absence of a consequence is not evidence of a margin"],
     ["7","a confined space regulation","a telephone number is not a rescue arrangement"],
     ["8","isolation guidance","closed is a position; proved is a measurement"],
     ["9","a preparedness framework","the first hour is yours, whatever the plan says"],
     ["10","an environmental assessment","signed off and measured are different words"],
     ["11","an analysis of a disaster","keep the number in the sentence all the way up"],
     ["<b>12</b>","<b>this book</b>","<b>&mdash; &mdash; &mdash; &mdash; &mdash;</b>"]],
    note="Fill the last row, and say why you chose it."), 680)
S["re12-f8"]=lambda: f_icons([("firealarm","a crew handling an upset"),
    ("eye","a trend that has barely moved"),("meeting","a review of a shift that went well"),
    ("calendar","a condition that has not arisen"),("logsheet","a procedure beside the real job"),
    ("magnifier","which ability, and can you assess it today?")],3)
S["re12-f9"]=lambda: f_realia(tbl("Proposed report front page",
    "Both columns, one page, every month",
    ["What happened","What we can do"],
    [["lost-time injuries","barrier condition for four major hazards"],
     ["recordable rate","days from a closure note to attached evidence"],
     ["losses of containment","months since each plan was physically exercised"],
     ["safety system activations","jobs compared: work as imagined against work as done"],
     ["&mdash;","major hazards with one named person accountable"]],
    note="<b>Both columns, one page, every month.</b> Four of the five on the right will look bad in "
    "the first quarter, because nobody has been measuring them."), 640)
S["re12-f10"]=lambda: f_scene(860,420,
    people=[("yusuf",200,180,{}),("haddad",330,176,{}),("omar",600,180,{"seated":True}),
     ("samira",690,180,{"seated":True})],
    props=[("desk",260,0,1.0),("spreadsheet",340,198,0.2),("table",560,0,0.9),
     ("book",660,198,0.2),("review",230,198,0.2)],
    clockat=(60,40,22,4,0))
S["re12-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Front page A",None,
    "<p>Four counted figures, all good.</p><p><i>Safety performance is strong.</i></p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Front page B",None,
    "<p>The same four, and <b>five capability figures</b>, four of them poor &mdash; with one line "
    "underneath: <b>these figures are poor because nobody has been measuring them, which is not the "
    "same as getting worse</b>.</p>",None),380)[0:3],
    800,300,"Four figures","Nine figures and one sentence")
S["re12-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>Safety performance remains strong, with no lost-time injuries in 612 days. A proactive safety "
    "culture is embedded and risk is being managed to an acceptable level.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p><b>One page, two columns, every month.</b> Column one: four figures we already collect, all "
    "good, and the team earned that. Column two: barrier condition, days to evidence, exercise "
    "currency, the work-as-done gap, hazards with a named owner. <b>It is true that this is a small "
    "proposal, but it is the only one that will still be running in three years.</b> <b>Granted, four "
    "of the five will be poor at first.</b> <b>This does not displace anything we already do.</b> Our "
    "own figures published first.</p>",None),380)[0:3],
    800,300,"Strong","One page")
S["re12-f13"]=lambda: f_realia(form("Plan your closing proposal",
    [("What you already count",BLANK),("What you would add, and which ability",BLANK),
     ("The strongest objection",BLANK),("Your answer to it",BLANK),
     ("What this does not displace",BLANK),("The one thing you are asking for",BLANK)],
    note="Six boxes. State the objection at its strongest, not its weakest."), 560)
S["re12-f14"]=lambda: f_scene(1000,460,
    people=[("yusuf",60,176,{}),("omar",130,172,{}),("samira",205,176,{}),
     ("haddad",290,172,{}),("nour",365,176,{}),("adeel",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("ahmad",590,170,{}),("yara",655,172,{}),
     ("wei",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("book",350,198,0.2),
     ("spreadsheet",420,198,0.2),("review",550,198,0.2),("table",650,0,1.0),
     ("handshake",860,198,0.2),("note",930,198,0.2)],
    board=(40,22,206,112,"NOT INFORMATION",[("absence","counted"),("ability","assessed"),("nothing","happening")]),
    clockat=(262,34,22,5,0))
S["re12-f15"]=lambda: f_chart([("ask three crews",6),("publish two columns",4),
    ("require evidence on closure",5),("test a rescue arrangement",4),
    ("open a locker",3)], unit="operators")
S["re12-f16"]=lambda: f_realia(doc("On a desk at the end of the course",
    "A good year, and nothing fixed yet",
    "<p><b>The book</b>, open at the contents page, with the twelfth row of the review table filled in "
    "by hand.</p>"
    "<p><b>A proposed two-column front page.</b></p>"
    "<p><b>A barrier condition sheet</b> with four hazards and four names.</p>"
    "<p><b>A list of three things</b> three crews said they do differently.</p>"
    "<p><b>A certificate</b>: 612 days without a lost-time injury.</p>"
    "<p><i>Two of the four hazards are carried by a single protection. The isolation certificates "
    "still have no proving box. The spill plan has still never been exercised. And two of the three "
    "workarounds are better than the document.</i></p>",
    "Seven o'clock. Nothing has been fixed yet, and fourteen people now know."), 620)
