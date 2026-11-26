# -*- coding: utf-8 -*-
"""Flowline Book 5 figure specs, Units 7 to 9."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}
BLANK = "&nbsp;"
def blankrows(n, c): return [[BLANK]*c for _ in range(n)]

# ---------------- Unit 7 ----------------
S["re07-f1"]=lambda: f_icons([("door","a vessel manway"),("stairwell","a ladder into a tank"),
    ("bottleneck","a hopper narrowing at the bottom"),("magnifier","a four-gas detector"),
    ("wind","an oxygen reading"),("hot","a flammable gas reading"),
    ("danger","a toxic gas reading"),("badge","a continuous monitor on a belt"),
    ("clipboard","an entry permit at the manway"),("chair","an attendant with a log"),
    ("crane","a tripod and winch"),("uniform","a full body harness"),
    ("firstaid","a rescue team arriving"),("radio","a radio"),
    ("wind","a blower ventilating a space"),("note","the second body")],4)
S["re07-f2"]=lambda: f_scene(820,420,
    people=[("yusuf",120,176,{}),("omar",340,180,{"seated":True}),("samira",420,180,{"seated":True}),
     ("ahmad",500,180,{"seated":True}),("nour",580,180,{"seated":True}),
     ("nadia",660,180,{"seated":True}),("adeel",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("magnifier",780,198,0.2)],
    board=(24,22,216,112,"THREE ROLES, AND",[("entrant","inside"),("attendant","outside"),("rescue","?")]),
    clockat=(258,34,22,9,0))
S["re07-f3"]=lambda: f_icons([("container","residual hydrocarbon vapor"),
    ("bottleneck","inwardly sloping walls"),("water","a line that was not isolated"),
    ("wind","a nitrogen purge still connected"),("note","no listed hazard at all"),
    ("note","four reasons, and the fourth is a judgment")],3)
S["re07-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six confined spaces",
    ["The space","Why it needs a permit","Who tests the atmosphere","Continuous monitoring?","What the rescue arrangement actually is"],
    blankrows(6,5),
    note="The box at the foot: the arrangement nobody has confirmed."), 680)
S["re07-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: three roles, one atmosphere, and the way out",
    "<p style='font-size:12px;color:#6b6861'>Source: 29 CFR 1910.146, <i>Permit-Required Confined "
    "Spaces</i>, a general industry standard of the Occupational Safety and Health Administration of "
    "the United States. In our own words. <b>It does not apply here.</b></p>"
    "<p><b>What a confined space is.</b> Three things together: <b>large enough to enter and work "
    "in</b>, with <b>limited means of entry or exit</b>, and <b>not designed for continuous "
    "occupancy</b>. A tank, a vessel, a column, a pit, a hopper. A plant room with a normal door is "
    "not one.</p>"
    "<p><b>What makes it need a permit.</b> Any one of four things: an actual or potential "
    "<b>hazardous atmosphere</b>; the potential for <b>engulfment</b>; an internal shape that could "
    "trap somebody; or <b>any other recognized serious hazard</b>.</p>"
    "<p><b>The three roles.</b> The <b>entry supervisor</b> authorizes the entry and ends it. The "
    "<b>authorized entrant</b> goes in and leaves when told. The <b>attendant</b> stays outside, "
    "knows who is inside, orders an exit and summons rescue. <b>The attendant does not enter. Not to "
    "look, not to help, not for a moment.</b></p>"
    "<p><b>The atmosphere.</b> Tested before entry in a stated order: <b>oxygen</b>, then "
    "<b>flammable</b> gases, then <b>toxic</b> contaminants. The order matters because the "
    "instruments depend on each other. Testing is then repeated or continuous, because an atmosphere "
    "is a <b>state</b>, not a property.</p>"
    "<p><b>THE PART THAT IS USUALLY A FICTION.</b> Rescue. The regulation requires <b>non-entry "
    "retrieval</b> where feasible &mdash; a harness and a line to a tripod and winch &mdash; and that "
    "where a rescue service is relied on, the employer <b>evaluates</b> it: can it do this kind of "
    "rescue, can it reach this space, how long would it take.</p>"
    "<p>In practice the arrangement is often a <b>telephone number</b>. Nobody has asked the service "
    "whether it performs confined space rescue. Nobody has timed it. Nobody has tried to get a dummy "
    "out of that manway.</p>"
    "<p><b>And this matters more than anything else here</b>, because a very high proportion of these "
    "deaths include people who <b>went in to help</b>.</p>",
    "One country's law, setting minimums. It cannot stop a person going in to help somebody they can "
    "see."), 580)
S["re07-f6"]=lambda: f_realia(tbl("Word study",
    "Conditions and authorizations",
    ["The structure","What it does","An example"],
    [["may not be entered unless","a condition that must be met","The space may not be entered unless the atmosphere has been tested."],
     ["only if","the same, shorter","Entry is permitted only if continuous monitoring is in place."],
     ["provided that","adds a condition to a permission","Entry may proceed provided that the blower runs throughout."],
     ["no entry is permitted until","a sequence","No entry is permitted until the line is blanked and proved."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>shall not</i> and <i>is authorized to</i>."), 700)
S["re07-f7"]=lambda: f_realia(tbl("Entry permit",
    "C-301 debutanizer column, lower section",
    ["","Entry"],
    [["Entrants","two, named"],
     ["Attendant","one, named, <b>also covering V-118</b>"],
     ["Isolation","blanked, two points, proved"],
     ["Ventilation","portable blower"],
     ["Oxygen","20.8 per cent at <b>06:40</b>"],
     ["Flammable","0 per cent LEL at <b>06:40</b>"],
     ["Hydrogen sulfide","0 ppm at <b>06:40</b>"],
     ["Continuous monitoring","<b>not recorded</b>"],
     ["Rescue","<b>call the emergency service</b>"],
     ["Entry commenced","<b>09:15</b>"]],
    note="<b>Tested at 06:40, entered at 09:15.</b> Three things on this permit would stop the job if "
    "anybody read it properly."), 620)
S["re07-f8"]=lambda: f_icons([("torch","a person inside with a lamp"),
    ("chair","a person at the manway with a log"),("signature","a person signing a permit"),
    ("crane","a person on a winch"),("magnifier","a person testing at the opening"),
    ("note","which role, and may they enter?")],3)
S["re07-f9"]=lambda: f_realia(tbl("Entry permit review",
    "14 June",
    ["Finding","Detail"],
    [["1 &middot; the gap","gas tested 06:40, entry 09:15 &mdash; <b>2 h 35</b>, no retest recorded"],
     ["2 &middot; the attendant","<b>one attendant</b> logged for C-301 and V-118, 60 m apart"],
     ["3 &middot; the rescue line","<i>call the emergency service</i> &mdash; <b>that service "
      "confirmed on 11 March that it does not perform confined space rescue</b>"],
     ["Monitoring","no continuous monitor issued; the line is blank"],
     ["Retrieval","no tripod, no winch, no retrieval line on site"]],
    note="<b>Three findings, one permit, signed by four people.</b>"), 640)
S["re07-f10"]=lambda: f_scene(860,420,
    people=[("yusuf",180,180,{}),("ahmad",330,180,{}),("omar",430,180,{}),
     ("nour",520,180,{"seated":True})],
    props=[("container",620,0,1.0),("door",700,190,0.24),("clipboard",250,198,0.2),
     ("wind",580,194,0.2),("magnifier",470,198,0.2)],
    clockat=(60,40,22,9,20))
S["re07-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Permit A",None,
    "<p>Three gas readings, all timed <b>06:40</b>. One attendant for two spaces. Rescue: <i>call the "
    "emergency service</i>.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Permit B",None,
    "<p>Readings <b>retested at 09:18</b>, continuous monitoring issued and logged, a <b>dedicated "
    "attendant</b>, and a rescue line naming a <b>tripod, a harness line and two trained people by "
    "name</b>.</p>",None),380)[0:3],
    800,300,"Complete","Complete, and current")
S["re07-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>The C-301 entry was properly permitted. The atmosphere was tested and found satisfactory, an "
    "attendant was provided and rescue arrangements are in place.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p><b>Stopped before entry.</b> Oxygen 20.8, flammable 0, H2S 0, <b>all at 06:40</b>; entry due "
    "<b>09:15</b>, no retest, <b>no monitor issued</b>. <b>One attendant</b> for two openings 60 m "
    "apart. <b>The emergency service confirmed on 11 March that it does not perform confined space "
    "rescue.</b> No retrieval equipment on site. <b>Every signature is genuine and every box is "
    "filled in.</b> Requiring: no vessel entry until a retrieval system is on site and two people are "
    "trained.</p>",None),380)[0:3],
    800,300,"Properly permitted","Properly permitted and stopped")
S["re07-f13"]=lambda: f_realia(form("Plan your entry note",
    [("The gas results, with times",BLANK),("The entry time and the gap",BLANK),
     ("The monitoring arrangement",BLANK),("The attendant coverage",BLANK),
     ("What the rescue arrangement actually is",BLANK),("What you require before the next entry",BLANK)],
    note="Six boxes. The fifth must say what somebody would actually do."), 560)
S["re07-f14"]=lambda: f_scene(1000,450,
    people=[("yusuf",60,176,{}),("ahmad",130,172,{}),("omar",205,176,{}),
     ("samira",290,172,{}),("nour",365,176,{"seated":True}),("nadia",440,172,{"seated":True}),
     ("adeel",515,176,{}),("haddad",590,170,{}),("yara",655,172,{}),
     ("wei",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("door",350,190,0.22),
     ("crane",420,190,0.22),("clipboard",550,198,0.2),("table",650,0,1.0),
     ("phone",860,198,0.2),("uniform",930,196,0.2)],
    board=(40,22,206,112,"WHO COMES, HOW LONG?",[("06:40","tested"),("09:15","entry"),("rescue","a number")]),
    clockat=(262,34,22,10,0))
S["re07-f15"]=lambda: f_chart([("yes, and they have practiced here",1),("yes, in principle",4),
    ("no",5),("we have a telephone number",8),("we do not enter vessels",3)], unit="operators")
S["re07-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Three readings at twenty to seven",
    "<p><b>An entry permit</b> with three gas readings all timed 06:40 and an entry time of "
    "09:15.</p>"
    "<p><b>A blank continuous monitoring line.</b></p>"
    "<p><b>An attendant log</b> showing two spaces sixty meters apart.</p>"
    "<p><b>A note of a telephone call</b>: the emergency service does not perform confined space "
    "rescue.</p>"
    "<p><b>A photograph of a manway</b>, nineteen inches across, with a platform in front of it.</p>"
    "<p><i>Four competent people signed it. The isolation was proved, the blower ran all morning, and "
    "the gas test was taken by a trained person with a calibrated instrument.</i></p>",
    "Seven o'clock. Every box that exists on that form is filled in correctly."), 620)

# ---------------- Unit 8 ----------------
S["re08-f1"]=lambda: f_icons([("padlock","a single valve, locked and tagged"),
    ("pipe","two valves with a bleed between"),("barrier","two valves, a bleed and a spade"),
    ("shutter","a spade being fitted"),("eye","a spectacle plate turned to blank"),
    ("chain","a line swung away"),("water","a drain running"),
    ("bottleneck","a drain blocked with solids"),("wind","a vent point"),
    ("dashboard","a gauge at zero"),("tally","a gauge still reading"),
    ("container","a trapped liquid head"),("signal","a nitrogen supply still connected"),
    ("fusebox","an electrical isolator locked off"),("form","a certificate with a proving box"),
    ("note","closed is not proved")],4)
S["re08-f2"]=lambda: f_scene(820,420,
    people=[("yusuf",120,176,{}),("ahmad",340,180,{"seated":True}),("omar",420,180,{"seated":True}),
     ("samira",500,180,{"seated":True}),("adeel",580,180,{"seated":True}),
     ("nour",660,180,{"seated":True}),("nadia",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("padlock",780,198,0.2)],
    board=(24,22,216,112,"AND THEN PROVE IT",[("1 valve","weakest"),("2 + bleed","better"),("spade","positive")]),
    clockat=(258,34,22,9,30))
S["re08-f3"]=lambda: f_icons([("padlock","a single locked valve on water"),
    ("pipe","double block and bleed on hydrocarbon"),("barrier","double block, bleed and a spade"),
    ("eye","a spectacle plate at blank"),("chain","a line swung away and blanked"),
    ("note","four standards, by hazard and duration, not by habit")],3)
S["re08-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six isolations",
    ["The job","The standard used","Who decided it","How it was proved","What was expected out of the drain"],
    blankrows(6,5),
    note="The box at the foot: the ones with nothing in the fourth column."), 680)
S["re08-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: four standards, one proving step",
    "<p style='font-size:12px;color:#6b6861'>Source: HSG253, <i>The safe isolation of plant and "
    "equipment</i>, Health and Safety Executive of Great Britain, second edition 2006. In our own "
    "words. <b>It is guidance from another country and does not apply here.</b></p>"
    "<p><b>The first principle: the isolation must match the hazard.</b> The guidance sets out a range "
    "of arrangements and says the choice should be <b>proportionate</b> to what is in the line, how "
    "much, at what pressure, what it would do to somebody, and <b>how long the work will last</b>. "
    "Duration matters as much as hazard.</p>"
    "<p><b>The arrangements, weakest to strongest.</b> A <b>single valve</b>, closed and secured. "
    "<b>Double block and bleed</b>: two valves with a bleed between them, so opening the bleed shows "
    "whether either is passing. Double block and bleed <b>plus a positive isolation</b> &mdash; a "
    "spade, a slip plate, a spectacle plate. And <b>physical disconnection</b>.</p>"
    "<p>A <b>positive isolation</b> is a solid barrier. Nothing passes through a plate. A valve is a "
    "mechanical device with a seat, and a seat wears.</p>"
    "<p><b>The second principle: an isolation is not complete until it is proved.</b> Closing a valve "
    "is a <b>position</b>. Proving is a <b>measurement</b>: depressurize, drain, vent, and watch a "
    "gauge at a point you can see, <b>after</b> the isolation is in place, long enough to be sure it "
    "is not creeping. And <b>know what you expect to come out</b>.</p>"
    "<p><b>The third principle: stored energy does not care about the supply.</b> A trapped liquid "
    "head, pressure between two closed valves, a nitrogen or air connection still live, a second "
    "electrical supply, or a blocked <b>dead leg</b> with sludge in it.</p>"
    "<p><b>WHAT GUIDANCE CANNOT DO.</b> It cannot tell you <b>what is in the line</b>. It cannot "
    "detect a passing valve for you. And it cannot make the proving step happen on a Friday "
    "afternoon, with a crew waiting and a gauge that needs somebody to watch it for twenty "
    "minutes.</p>",
    "Go and look at the last ten isolation certificates at your site and count the proving steps."), 580)
S["re08-f6"]=lambda: f_realia(tbl("Word study",
    "Proving",
    ["The phrase","What it claims","An example"],
    [["has been proved by","names the evidence","Proved by draining and a gauge at zero for 20 minutes."],
     ["was verified by","names the checker","The spade position was verified by the issuing authority."],
     ["was demonstrated by","names the demonstration","The absence of pressure was demonstrated by opening the bleed."],
     ["is proportionate to","justifies the standard","The standard is proportionate to a two-day entry on sour service."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>it is not sufficient to</i> and <i>no reliance is placed on</i>."), 700)
S["re08-f7"]=lambda: f_realia(tbl("Isolation certificate",
    "Sour gas sample line &middot; flange break at the sample point",
    ["","Entry"],
    [["The job","break the flange at the sample point"],
     ["Duration","half a day, <b>becoming two days</b>"],
     ["Arrangement","<b>single valve, closed and locked</b>"],
     ["Points","two tags listed"],
     ["Drain","opened &mdash; <b>ran clear</b>"],
     ["Gauge after isolation","<b>box blank</b>"],
     ["Expected out of the drain","<b>box blank</b>"],
     ["Proved by","signed"]],
    note="<b>The drain ran clear because it was blocked.</b>"), 620)
S["re08-f8"]=lambda: f_icons([("water","ten minutes on a cooling water line"),
    ("pipe","a flange break on crude for a day"),("door","a three-day vessel entry"),
    ("danger","a sample point on sour gas"),("container","a vertical leg above the work point"),
    ("magnifier","which standard, and why?")],3)
S["re08-f9"]=lambda: f_realia(tbl("Isolation audit",
    "Fourteen certificates reviewed",
    ["","Count"],
    [["Certificates reviewed","14"],
     ["Recording a closed valve with <b>no proving step</b>","<b>11</b>"],
     ["Recording a gauge reading with a duration","3"],
     ["Recording what was expected out of the drain","<b>1</b>"],
     ["Form has a box for expected contents","<b>no</b>"]],
    note="<b>The form cannot ask the question.</b>"), 600)
S["re08-f10"]=lambda: f_scene(860,420,
    people=[("yusuf",200,180,{}),("ahmad",330,180,{}),("samira",430,180,{}),
     ("omar",520,180,{})],
    props=[("racking",620,0,1.0),("pipe",700,194,0.22),("water",600,198,0.2),
     ("form",260,198,0.2),("dashboard",470,196,0.2)],
    clockat=(60,40,22,10,0))
S["re08-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Certificate A",None,
    "<p><b>Single valve</b>, closed and locked. Drain opened, <b>ran clear</b>. Two boxes blank.</p>",
    None),380)[0:3],
    lambda w,h: f_realia(doc("Certificate B",None,
    "<p><b>Double block and bleed plus a spade.</b> <b>Expected: black wet sludge.</b> Drain rodded "
    "&mdash; <b>solid two inches in</b>. Gauge at zero, watched <b>20 minutes</b>, two witnesses. "
    "Duration revised to two days.</p>",None),380)[0:3],
    800,300,"Closed and locked","Closed, upgraded and proved")
S["re08-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>The sample line was isolated at the block valve, which was closed and locked. The drain was "
    "opened and ran clear. The flange break may proceed.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p><b>Stopped and upgraded.</b> Single valve, chosen for a <b>half-day</b> job; the job is now "
    "<b>two days</b> and the standard was not reconsidered. The drain <b>ran clear</b>; the form has "
    "no expected-contents box; <b>we expected black wet sludge</b> and rodding found it <b>solid two "
    "inches in</b>. No gauge reading recorded. <b>Now required:</b> double block and bleed plus a "
    "spade. <b>The crew opened the drain, which more than half of this month's certificates do not "
    "record at all.</b></p>",None),380)[0:3],
    800,300,"May proceed","Stopped, with the reason")
S["re08-f13"]=lambda: f_realia(form("Plan your isolation note",
    [("The arrangement as found, and why it was chosen",BLANK),("Any change of duration",BLANK),
     ("How the isolation was proved",BLANK),("What was expected out of the drain",BLANK),
     ("The arrangement now required, with its justification",BLANK),("One request about the form",BLANK)],
    note="Six boxes. The third needs a duration in it."), 560)
S["re08-f14"]=lambda: f_scene(1000,450,
    people=[("yusuf",60,176,{}),("ahmad",130,172,{}),("samira",205,176,{}),
     ("omar",290,172,{}),("adeel",365,176,{}),("nour",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("haddad",590,170,{}),("yara",655,172,{}),
     ("wei",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("pipe",350,194,0.2),
     ("shutter",420,196,0.2),("dashboard",550,196,0.2),("table",650,0,1.0),
     ("form",860,198,0.2),("logsheet",930,198,0.2)],
    board=(40,22,206,112,"CLOSED IS NOT PROVED",[("position","a valve"),("measurement","a gauge"),("20 min","watched")]),
    clockat=(262,34,22,11,0))
S["re08-f15"]=lambda: f_chart([("yes, with a duration",2),("yes, but only a tick",6),
    ("no",6),("I do not know",4),("we have no certificate",3)], unit="technicians")
S["re08-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "A drain that ran clear",
    "<p><b>An isolation certificate</b> reading <i>single valve, closed and locked</i>, with the drain "
    "box ticked and <i>ran clear</i> written beside it.</p>"
    "<p><b>Two blank boxes</b>: the gauge, and what was expected.</p>"
    "<p><b>A rod</b> with black sludge on the end of it.</p>"
    "<p><b>A photograph of a spade</b>, not yet fitted.</p>"
    "<p><b>A job card</b> showing half a day changed to two days.</p>"
    "<p><i>The crew locked the valve, tagged it, opened the drain and watched it. They did more than "
    "most crews do.</i></p>",
    "Seven o'clock. The form had no box for the question that mattered."), 620)

# ---------------- Unit 9 ----------------
S["re09-f1"]=lambda: f_icons([("flood","a release into a watercourse"),
    ("barrier","a containment boom"),("thread","an absorbent boom"),
    ("vacuum","a skimmer"),("truck","a vacuum truck"),
    ("container","temporary storage for recovered liquid"),("packet","a sorbent pad"),
    ("coast","a shoreline with oiled vegetation"),("camera","a photograph of a slick"),
    ("crate","a tier one locker"),("warehouse","a regional equipment store"),
    ("pallet","an international stockpile"),("handshake","a mutual aid agreement"),
    ("book","a national contingency plan"),("calendar","an exercise log, one entry"),
    ("note","the first hour is yours")],4)
S["re09-f2"]=lambda: f_scene(820,420,
    people=[("yusuf",120,176,{}),("omar",340,180,{"seated":True}),("samira",420,180,{"seated":True}),
     ("adeel",500,180,{"seated":True}),("nour",580,180,{"seated":True}),
     ("nadia",660,180,{"seated":True}),("ahmad",740,180,{"seated":True})],
    props=[("desk",320,0,1.0),("board",40,88,0.64),("barrier",780,196,0.2)],
    board=(24,22,216,112,"THREE TIERS",[("tier 1","on site, now"),("tier 2","180 km"),("tier 3","?")]),
    clockat=(258,34,22,10,0))
S["re09-f3"]=lambda: f_icons([("crate","a site locker with boom and sorbents"),
    ("truck","a vacuum truck on site"),("warehouse","a regional store"),
    ("handshake","a mutual aid partner's equipment"),("pallet","an international stockpile"),
    ("note","three tiers, by resources and distance, not by volume")],3)
S["re09-f4"]=lambda: f_realia(tbl("Team research sheet",
    "Six response resources",
    ["The resource","Where it is kept","Who holds the key","Last deployed","Assumed time / measured time"],
    blankrows(6,5),
    note="The last column has two figures in it, and that is the point. The box at the foot: the two "
    "columns that do not match."), 680)
S["re09-f5"]=lambda: f_realia(doc("JAZIRA PETROLEUM OPERATIONS &mdash; Mureij Training Center",
    "Note for operators: three tiers, and the hour that is always yours",
    "<p style='font-size:12px;color:#6b6861'>Sources: <i>Tiered preparedness and response</i>, an "
    "IPIECA&ndash;IOGP Good Practice Guide, 2015; and the International Convention on Oil Pollution "
    "Preparedness, Response and Co-operation, 1990, adopted under the International Maritime "
    "Organization. In our own words.</p>"
    "<p><b>What tiered preparedness means.</b> Response capability is organized in three levels, "
    "defined by <b>the resources available and how far away they are</b> &mdash; not by the size of "
    "the spill. <b>Tier one</b> is what you have on your own site, now. <b>Tier two</b> is regional. "
    "<b>Tier three</b> is national or international.</p>"
    "<p><b>The common misunderstanding, and the guide is explicit about it.</b> Tiers are <b>not</b> "
    "categories of spill size. A small release in a sensitive, inaccessible place with nothing nearby "
    "may need tier three resources. A large release inside a bund with a vacuum truck beside it is a "
    "tier one job. <b>The tier describes the response, not the spill.</b></p>"
    "<p><b>What a plan has to contain.</b> Credible <b>scenarios</b>. The <b>resources</b> for each "
    "tier, by what they are and where. <b>Activation triggers</b>, and who may make the call. "
    "<b>Escalation</b>. And <b>sensitivity</b> information about what is downstream.</p>"
    "<p><b>Escalation is a decision made early or not at all.</b> Tier two takes hours and tier three "
    "can take days, so escalate on the <b>credible worst case</b> and stand resources down if they "
    "are not needed &mdash; which is harder than it sounds, because nobody is thanked for a "
    "stand-down.</p>"
    "<p><b>What the convention does.</b> It is an agreement between <b>states</b>: parties undertake "
    "to establish national systems, require ships and offshore units to carry emergency plans, report "
    "incidents and <b>co-operate</b>.</p>"
    "<p><b>WHAT NEITHER DOCUMENT CAN DO.</b> The guide is good practice and <b>binds nobody</b>. The "
    "convention binds <b>states, not companies</b>. Neither can make a plan real: <b>an unexercised "
    "plan is a hypothesis</b>. And neither changes the arithmetic of the first hour.</p>",
    "Go and time the drive from your regional store to your site."), 580)
S["re09-f6"]=lambda: f_realia(tbl("Word study",
    "Escalation",
    ["The phrase","What it does","An example"],
    [["in the first instance","what happens immediately","In the first instance, tier one resources are deployed."],
     ["activate","brings a plan or a tier into effect","The duty manager may activate tier two."],
     ["escalate to","names the next level","Escalate to tier two on the credible worst case."],
     ["beyond the capability of","justifies escalation","The release is beyond the capability of site resources."],
     [BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]],
    note="Two rows are empty: <i>on the assumption that</i> and <i>stand down</i>."), 700)
S["re09-f7"]=lambda: f_realia(tbl("Plan extract",
    "Deir operations area &middot; revised last year",
    ["","Entry"],
    [["Tier one","400 m boom, 20 sorbent bales, one skimmer, one vacuum truck"],
     ["Tier one locker","behind the workshop, <b>key held by the day shift supervisor</b>"],
     ["Tier two","a mutual aid partner, and a regional store <b>180 km away</b>"],
     ["Assumed tier two response","<b>4 hours</b>"],
     ["Measured drive, last month","<b>7 hours 20</b>"],
     ["Tier three","one sentence, <b>no names, no numbers</b>"],
     ["Last exercise","<b>2016</b>"]],
    note="<b>Four assumed, seven measured, one exercise, nine years ago.</b>"), 620)
S["re09-f8"]=lambda: f_icons([("truck","a small release in a bund with a vacuum truck"),
    ("storm","a small release into a wadi in bad weather"),("container","a large release contained on site"),
    ("flood","a release heading towards a town"),("camera","aerial surveillance"),
    ("magnifier","which tier, and why?")],3)
S["re09-f9"]=lambda: f_realia(tbl("Readiness review",
    "12 June",
    ["","Finding"],
    [["Boom","400 m, <b>about 60 m perished at the joints</b>"],
     ["Sorbents","20 bales, dry and serviceable"],
     ["Skimmer","<b>pump will not start</b>"],
     ["Vacuum truck","serviceable"],
     ["Locker keys","<b>one</b>, held by one person"],
     ["Assumed tier two response","4 hours"],
     ["Measured","<b>7 hours 20</b>, daylight, no trailer"],
     ["Mutual aid partner","<b>listed number unobtainable for three weeks</b>"],
     ["Last exercise","<b>2016</b>"]],
    note="<b>One key, one number, one exercise.</b>"), 640)
S["re09-f10"]=lambda: f_scene(860,420,
    people=[("yusuf",200,180,{}),("haddad",330,176,{}),("adeel",600,180,{})],
    props=[("desk",260,0,1.0),("logsheet",340,198,0.2),("barrier",470,196,0.2),
     ("vacuum",700,194,0.22),("phone",660,198,0.2)],
    clockat=(60,40,22,11,0))
S["re09-f11"]=lambda: f_panels(lambda w,h: f_realia(doc("Statement A",None,
    "<p>A tiered oil spill response plan is in place and was revised last year. Mutual aid "
    "arrangements exist.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Statement B",None,
    "<p>The inventory with <b>three defects</b>. <b>One key.</b> <b>4 hours assumed, 7 hours 20 "
    "measured</b>, in daylight without a trailer. <b>Last exercise 2016.</b> Mutual aid number "
    "<b>unobtainable for three weeks</b>.</p>",None),380)[0:3],
    800,300,"In place","Opened, driven and rung")
S["re09-f12"]=lambda: f_panels(lambda w,h: f_realia(doc("Note 1",None,
    "<p>A tiered response plan is in place for the Deir area and was revised last year. Tiered "
    "response capability is considered adequate.</p>",None),380)[0:3],
    lambda w,h: f_realia(doc("Note 2",None,
    "<p><b>Physical check 12 June.</b> 400 m boom, <b>60 m perished</b>; skimmer <b>will not "
    "start</b>; one key. <b>Plan assumes 4 hours</b>; measured <b>7 h 20</b>. Mutual aid number rings "
    "out. Tier three: one sentence, no contact. <b>Last exercise 2016.</b> A revision is a reading of "
    "a document and <b>cannot find a perished joint</b>. <b>The first hour is certainly ours and in "
    "that hour our skimmer does not start.</b> Requesting a deployment exercise this quarter.</p>",
    None),380)[0:3],
    800,300,"Considered adequate","Checked, and three things found")
S["re09-f13"]=lambda: f_realia(form("Plan your readiness note",
    [("The tier one inventory, with condition",BLANK),("Who holds the keys",BLANK),
     ("Assumed and measured response times, with conditions",BLANK),
     ("The date of the last exercise",BLANK),("What you are not claiming",BLANK),
     ("Up to four requests",BLANK)],
    note="Six boxes. Every claim about condition must come from opening something."), 560)
S["re09-f14"]=lambda: f_scene(1000,450,
    people=[("yusuf",60,176,{}),("adeel",130,172,{}),("haddad",205,176,{}),
     ("samira",290,172,{}),("omar",365,176,{}),("nour",440,172,{"seated":True}),
     ("nadia",515,176,{"seated":True}),("ahmad",590,170,{}),("yara",655,172,{}),
     ("wei",720,170,{}),("ida",785,172,{}),("tomas",845,170,{}),
     ("lars",905,172,{}),("bah",955,174,{})],
    props=[("desk",95,0,1.1),("board",160,88,0.68),("barrier",350,196,0.2),
     ("vacuum",420,194,0.22),("phone",550,198,0.2),("table",650,0,1.0),
     ("timer",860,198,0.2),("map",930,196,0.22)],
    board=(40,22,206,112,"THE FIRST HOUR IS YOURS",[("assumed","4 h"),("measured","7 h 20"),("exercise","2016")]),
    clockat=(262,34,22,12,0))
S["re09-f15"]=lambda: f_chart([("within a year",2),("within three years",3),
    ("longer ago",6),("never",6),("I do not know",5)], unit="operators")
S["re09-f16"]=lambda: f_realia(doc("On a desk in the evening",
    "Four hours, and seven hours twenty",
    "<p><b>A spill response plan</b> open at a page assuming a four hour response, with <i>7 h 20</i> "
    "written beside it in pen.</p>"
    "<p><b>An exercise log</b> with one entry, dated 2016.</p>"
    "<p><b>A photograph of perished boom joints.</b></p>"
    "<p><b>A skimmer pump</b> with a tag reading <i>will not start</i>.</p>"
    "<p><b>A mutual aid agreement</b> with a signature and a telephone number that rings out.</p>"
    "<p><i>The plan is well written and was revised last year. An auditor reading the document would "
    "find very little to criticize.</i></p>",
    "Seven o'clock. Every one of these findings took an afternoon."), 620)
