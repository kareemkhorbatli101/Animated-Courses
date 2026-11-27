# -*- coding: utf-8 -*-
"""Foreign Service English Book 2 figure specs, Units 10 to 12."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 10 · The Slow Route ----------------
S["h10-f1"]=lambda: f_icons([("suitcase","a sealed diplomatic bag"),
    ("receipt","a registered post receipt"),("truck","a courier van"),
    ("postoffice","a sorting frame"),("envelope","an airmail sticker"),
    ("form","a customs declaration"),("refnumber","a tracking number"),
    ("printer","a franking machine"),("desk","a post office counter"),
    ("tray","a sack on a trolley")], cols=5)
S["h10-f2"]=lambda: f_scene(920,420, people=[("omar",320,176,{}),("samira",450,172,{})],
    props=[("desk",250,0,1.25),("envelope",330,196,0.3),("form",390,196,0.3),
     ("note",520,194,0.28),("postoffice",680,80,0.8),("tray",830,196,0.4)],
    clockat=(140,46,22,16,0))
S["h10-f3"]=lambda: f_icons([("scales","weighed"),("printer","labeled"),
    ("receipt","receipt filed"),("truck","loaded"),
    ("signature","signed for"),("calendar","delivery confirmed")], cols=3)
S["h10-f4"]=lambda: f_realia(tbl("","The channel we forgot",
    ["What we send","The channel","The alternative","What we do when it fails"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The channel nobody has tested:</b>"), 580)
S["h10-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 10 &middot; channels and correspondence",
    "<p style='font-size:16px'>The international postal organization has <b>192 member "
    "countries</b>.</p>"
    + table_html(["When","What happened"],
      [["<b>9 October 1874</b>","the <b>Treaty of Bern</b> was signed, creating the <b>General "
        "Postal Union</b>"],
       ["<b>1878</b>","the organization was <b>renamed</b> the Universal Postal Union"],
       ["<b>1948</b>","it became a <b>specialized agency</b> of the United Nations"]])
    + "<p><b>A small number that two published accounts give differently.</b></p>"
    + table_html(["Figure","Where it comes from"],
      [["<b>22</b> founding countries","the organization's <b>own</b> anniversary release"],
       ["<b>21</b> signatory countries, 19 of them European","other published accounts"]])
    + "<p>The same two sources also rank its age differently: its own material calls it the "
    "<b>second oldest</b> international organization; other accounts call it the <b>third "
    "oldest</b>.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>What we write when sources differ.</b> We "
    "write both, with whose each one is. We do not average them, we do not pick the one that reads "
    "better, and we do not quietly drop the question.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the organization's own factsheets and "
    "anniversary releases for the membership figure and the 1874, 1878 and 1948 dates; other "
    "published accounts for the alternative founding figure and ranking.</p>"))
S["h10-f6"]=lambda: f_realia(tbl("Word study","Verb and noun",
    ["Verb","Noun"],
    [["to deliver","delivery"],["to dispatch","a dispatch"],
     ["to consign","a consignment"],["to declare",""],["to receive",""],
     ["to track",""]]), 440)
S["h10-f7"]=lambda: f_timeline([(0.06,"9 Oct 1874","Treaty of Bern: 22 or 21"),
    (0.14,"1878","renamed"),(0.62,"1948","specialized agency"),
    (0.95,"today","192 members")], 0.95, w=660)
S["h10-f8"]=lambda: f_icons([("truck","turned away at the gate"),("form","a post form"),
    ("suitcase","a bag label"),("refnumber","a tracking number"),
    ("phone","the addressee warned"),("signature","signed for")], cols=3)
S["h10-f9"]=lambda: f_realia(tbl("Dispatch sheet &middot; file 2026/118",None,
    ["Field","Entry"],
    [["Item","one certified copy, two pages"],
     ["Courier","<b>not used</b> &mdash; does not serve that district"],
     ["Diplomatic bag","<b>not used</b> &mdash; reserved for mission correspondence"],
     ["<b>Registered post</b>","<b>used</b>, 4 March 16:00"],
     ["Tracking number","<b>RR 418 227 019 SY</b>"],
     ["Due to arrive","<b>on or about 24 March</b>"],
     ["Addressee telephoned","5 March 09:10, Mrs L. Moretti"]],
    note="<b>If not signed for by 1 April:</b> second copy by another route; Perenne told in "
    "writing. <b>No permission, no departure</b> does not apply here &mdash; but no proof, no "
    "claim does."), 560)
S["h10-f10"]=lambda: f_scene(940,430, people=[("omar",320,176,{}),("samira",450,172,{})],
    props=[("desk",250,0,1.25),("form",330,196,0.3),("envelope",400,196,0.28),
     ("printer",540,198,0.4),("phone",620,196,0.26),("postoffice",740,80,0.78),
     ("tray",870,196,0.38)], clockat=(150,46,22,16,0))
S["h10-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Sheet A", None, ["Field","Entry"],
        [["Item","certified copy"],["Channel","&#9745; post"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Sheet B", None, ["Field","Entry"],
        [["Item","certified copy, 2 pp"],["Channel","registered post, 4 Mar 16:00"],
         ["Tracking","RR 418 227 019 SY"],["Due","on or about 24 Mar"],
         ["Telephoned","5 Mar 09:10, Mrs Moretti"],["If not signed for by","1 April"]]),
        w)[0:3],
    w=920, h=290)
S["h10-f12"]=lambda: f_realia(doc("Two dispatch notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "Posted 4 March.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "<b>Registered post</b>, 4 March 16:00, tracking <b>RR 418 227 019 SY</b>.<br>"
    "<b>Due to arrive on or about 24 March.</b> A postal date is a range.<br>"
    "<b>Telephoned</b> 5 March 09:10, Mrs L. Moretti, who will expect it.<br>"
    "<b>If not signed for by 1 April:</b> second copy, different route; Perenne told in "
    "writing.<br>"
    "<b>Not used:</b> courier (does not serve the district); bag (mission correspondence only).</p>",
    "Write down the channel you did not use, and why."))
S["h10-f13"]=lambda: f_realia(form("Dispatch note",
    [("Item",""),("Channel and tracking number",""),("Due to arrive on or about",""),
     ("Addressee warned: when and who",""),("Fallback, by",""),
     ("Channels not used, and why",""),("For whoever covers this desk","")]), 520)
S["h10-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{}),("samira",200,172,{}),("yusuf",280,176,{}),
     ("hana",360,172,{}),("ahmad",440,170,{}),("nadia",520,172,{}),
     ("bah",600,170,{}),("linh",670,172,{}),("ida",740,170,{}),
     ("karin",800,172,{}),("lucia",860,170,{}),("oskar",910,172,{}),
     ("caruso",960,174,{}),("nkemelu",55,176,{})],
    props=[("desk",160,0,1.1),("printer",300,198,0.4),("postoffice",470,76,0.72),
     ("tray",620,196,0.38),("board",760,40,0.6),("truck",900,190,0.42),
     ("envelope",240,194,0.26)], clockat=(400,34,22,16,0))
S["h10-f15"]=lambda: f_chart([("registered post",8),("courier",6),("by hand",4),
    ("electronically only",3),("whatever is leaving soonest",3)])
S["h10-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("receipt",320,194,0.3),("note",390,194,0.28),
     ("envelope",470,196,0.28),("computer",600,142,0.46),("note",740,118,0.26)],
    clockat=(120,46,22,9,0))

# ---------------- Unit 11 · The Award and the Court ----------------
S["h11-f1"]=lambda: f_icons([("book","an arbitral award"),("meeting","a tribunal table"),
    ("councilbuilding","a court"),("note","a bailiff's notice"),
    ("statement","a nil balance"),("essay","a certified translation"),
    ("envelope","for recognition"),("stamp","a judge's stamp"),
    ("signature","a company seal"),("folder","a thick folder")], cols=5)
S["h11-f2"]=lambda: f_scene(920,420, behind=[("omar",620,176,{}),("bah",700,172,{})],
    people=[("caruso",420,176,{})],
    counter_=(560,228,250,112),
    on_counter=[("book",610,0.34),("folder",700,0.32),("essay",780,0.28)],
    props=[("board",130,40,0.76)], clockat=(300,44,22,11,0))
S["h11-f3"]=lambda: f_icons([("signature","rendered"),("stamp","recognized"),
    ("note","enforced"),("statement","no assets found"),
    ("essay","challenged"),("handshake","settled")], cols=3)
S["h11-f4"]=lambda: f_realia(tbl("","Winning and getting",
    ["What was decided","What still had to happen","Who told them","When"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The step people think is the last one:</b>"), 580)
S["h11-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 11 &middot; commercial inquiries",
    "<p style='font-size:16px'>The <b>Convention on the Recognition and Enforcement of Foreign "
    "Arbitral Awards</b>, done in <b>New York in 1958</b>, has <b>172 parties</b> and "
    "<b>24 signatories</b>.</p>"
    "<p><b>Why a second figure, 169, is also published and also right.</b></p>"
    + table_html(["Figure","Its base"],
      [["<b>172</b>","all parties, <b>including three that are not UN member states</b> &mdash; "
        "the Cook Islands, the Holy See and the State of Palestine"],
       ["<b>169</b>","<b>UN member states</b> only"]])
    + "<p>They differ by three because the <b>base</b> differs, not because anybody has "
    "miscounted.</p>"
    + table_html(["Step","Who does it"],
      [["1 &middot; the <b>award</b> is rendered","an arbitral <b>tribunal</b>"],
       ["2 &middot; <b>recognition</b>","a <b>court</b> where enforcement is sought"],
       ["3 &middot; <b>enforcement</b>","a court, acting against property"],
       ["4 &middot; <b>assets</b> exist to act against","<b>nobody can supply these</b>"]])
    + "<p style='border:1px solid #d9d4c9;padding:8px'><b>What this ministry does not do.</b> We do "
    "not recognize awards, enforce them, hold assets or collect debts, and we <b>cannot instruct a "
    "foreign court</b>. What we can do is name the steps and who takes each one.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Convention, New York, 1958; published "
    "party and signatory counts with the composition of the larger figure as published.</p>"))
S["h11-f6"]=lambda: f_realia(tbl("Word study","Joining two true things",
    ["<i>although</i> + clause","<i>despite</i> + noun / <i>-ing</i>",
     "<i>however</i> + new sentence"],
    [["<b>Although</b> he has an award, he has no money.","<b>Despite</b> the award, he has no "
      "money.","He has an award. <b>However</b>, he has no money."],
     ["","",""],["","",""]]), 580)
S["h11-f7"]=lambda: f_part("Two published figures, one convention",
    [("UN member states",169,BLUE),("parties that are not UN member states",3,AMBER)])
S["h11-f8"]=lambda: f_icons([("signature","the tribunal signs"),("stamp","a recognition order"),
    ("note","a bailiff at the door"),("statement","an empty account"),
    ("essay","a challenge filed"),("handshake","a settlement")], cols=3)
S["h11-f9"]=lambda: f_realia(tbl("Four-step sheet &middot; commercial inquiry",None,
    ["Step","Who does it","Done?"],
    [["1 &middot; the award","an arbitral tribunal","<b>&#9745;</b>"],
     ["2 &middot; recognition","a court where payment is sought","&#9744;"],
     ["3 &middot; enforcement","a court, against property","&#9744;"],
     ["4 &middot; assets exist","<b>nobody</b>","&#9744;"]],
    note="<b>This ministry does not:</b> recognize awards &middot; enforce them &middot; hold or "
    "attach assets &middot; instruct a foreign court. <b>What I can send you today:</b> this "
    "sheet."), 560)
S["h11-f10"]=lambda: f_scene(940,430, behind=[("omar",640,176,{}),("hana",730,172,{})],
    people=[("caruso",430,176,{})],
    counter_=(580,228,250,112),
    on_counter=[("book",630,0.34),("essay",720,0.3),("phone",800,0.26)],
    props=[("folder",390,194,0.34),("computer",170,142,0.44),("board",110,40,0.7)],
    clockat=(300,44,22,11,0))
S["h11-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Sheet A", None,
        "<p>The Convention has 172 parties. Foreign arbitral awards are enforceable in the "
        "contracting states.</p>"), w)[0:3],
    lambda w,h: f_realia(tbl("Sheet B", None, ["Step","Who"],
        [["1 award","tribunal &#9745;"],["2 recognition","a court"],
         ["3 enforcement","a court"],["4 assets","<b>nobody</b>"],
         ["Figures","172 all parties &middot; 169 UN members only"]]), w)[0:3],
    w=920, h=290)
S["h11-f12"]=lambda: f_realia(doc("Two letters to a company", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 1</b><br>"
    "The matter you raise falls outside this ministry's competence.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 2</b><br>"
    "<b>1 The award</b> &mdash; rendered by the tribunal. <b>You have completed this.</b><br>"
    "<b>2 Recognition</b> &mdash; a court, on an application by your lawyer.<br>"
    "<b>3 Enforcement</b> &mdash; a court, against property. <b>A separate application from "
    "2.</b><br>"
    "<b>4 Assets</b> &mdash; <b>nobody can supply this step.</b><br>"
    "<b>172 parties</b>, or <b>169</b> counting UN member states only. Both are correct.<br>"
    "<b>We cannot instruct a foreign court</b> &mdash; the same rule prevents theirs instructing "
    "ours.</p>",
    "The four words <i>you have completed this</i> are the only sentence that agrees with the "
    "reader."))
S["h11-f13"]=lambda: f_realia(form("Letter planner",
    [("Step 1 / who / done?",""),("Step 2 / who",""),("Step 3 / who",""),
     ("Step 4 / who",""),("The figure and its base",""),
     ("What this ministry does not do",""),("What I can do",""),
     ("The one sentence that agrees with the reader","")]), 520)
S["h11-f14"]=lambda: f_scene(980,440,
    behind=[("omar",700,176,{}),("bah",780,172,{})],
    people=[("caruso",150,172,{"seated":True}),("oyelaran",230,176,{"seated":True}),
     ("ida",310,172,{"seated":True}),("linh",390,176,{}),
     ("karin",460,172,{}),("lucia",530,170,{}),("nkemelu",600,174,{}),
     ("hana",880,172,{}),("nadia",940,170,{})],
    counter_=(640,228,250,112), on_counter=[("book",690,0.32),("folder",790,0.3)],
    props=[("chair",130,0,0.66),("board",50,38,0.62),("printer",840,198,0.38),
     ("computer",60,142,0.4)], clockat=(560,36,22,11,0))
S["h11-f15"]=lambda: f_chart([("a court still has to act",8),("the money will arrive",6),
    ("it depends on the country",4),("nothing is certain",3),
    ("I had not thought about it",2)])
S["h11-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",320,194,0.32),("note",400,194,0.28),
     ("computer",550,142,0.48),("folder",680,190,0.32),("pen",760,194,0.24)],
    clockat=(120,46,22,16,30))

# ---------------- Unit 12 · Permission to Land ----------------
S["h12-f1"]=lambda: f_icons([("engine","an aircraft at dusk"),("spotlight","a control tower"),
    ("form","a flight plan"),("certificate","a diplomatic note"),
    ("map","an air navigation chart"),("timer","a slot time"),
    ("logsheet","a passenger list"),("refnumber","a permission reference"),
    ("desk","customs and immigration"),("worldmap","two officials and a map")], cols=5)
S["h12-f2"]=lambda: f_scene(920,420, people=[("omar",300,176,{}),("nadia",470,172,{})],
    props=[("desk",230,0,1.25),("form",310,196,0.3),("certificate",380,194,0.3),
     ("map",540,60,0.7),("flipchart",700,44,0.74)],
    window_=(830,56,100,90), clockat=(140,46,22,21,0),
    panelbg="#242c38", floorbg="#30394a")
S["h12-f3"]=lambda: f_icons([("pen","drafted"),("handshake","delivered"),
    ("refnumber","reference recorded"),("certificate","granted"),
    ("map","route confirmed"),("engine","departed")], cols=3)
S["h12-f4"]=lambda: f_realia(tbl("","Who has to say yes",
    ["What we arrange","Who has to say yes","How long they take",
     "What we do while we wait"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>What we must not assume:</b>"), 580)
S["h12-f5"]=lambda: f_realia(doc("Ministry of Foreign Affairs and Expatriates",
    "Internal note 12 &middot; flight permissions",
    "<p style='border:1px solid #d9d4c9;padding:9px;font-size:15px'><b>Article 1.</b> <i>The "
    "contracting States recognize that every State has <b>complete and exclusive sovereignty over "
    "the airspace above its territory</b>.</i></p>"
    "<p><b>Article 2</b> adds that the territory includes the land areas <b>and the territorial "
    "waters next to them</b>.</p>"
    + table_html(["When","What"],
      [["<b>7 December 1944</b>","signed by <b>52</b> signatory states"],
       ["<b>April 1947</b>","entered into force"],
       ["today","<b>193</b> parties"]])
    + "<p><b>One party is covered by another state's act.</b> Published accounts read the figure "
    "as the Cook Islands plus every UN member state <b>but one</b>. That one is covered because the "
    "Convention was <b>extended to it by Switzerland</b>. Note too that the party count and the "
    "<b>membership of the aviation organization</b> are two different counts. Say which you "
    "mean.</p>"
    "<p style='border:1px solid #d9d4c9;padding:8px'><b>What permission is not.</b> A flight plan "
    "is <b>not</b> a permission. A slot is <b>not</b> a permission. Each state whose airspace is "
    "used decides for itself, on its own timetable. Each grant has a <b>reference number</b>. "
    "Record it, and carry it.</p>"
    "<p style='font-size:12px;color:#6b6861'>Source: the Convention on International Civil "
    "Aviation, Chicago, 7 December 1944, Articles 1 and 2. The dates and the party count are from "
    "published accounts.</p>"))
S["h12-f6"]=lambda: f_realia(tbl("Word study &middot; review","Verb, noun, person or paper",
    ["Verb","Noun","Person or paper"],
    [["to notify","notification","the focal <b>point</b>"],
     ["to extradite","extradition","&mdash;"],
     ["to serve","service","a <b>certificate</b>"],
     ["to ratify","","an <b>instrument</b>"],
     ["to enforce","","&mdash;"],
     ["to grant","",""]]), 540)
S["h12-f7"]=lambda: f_timeline([(0.08,"7 Dec 1944","signed by 52 states"),
    (0.34,"April 1947","entered into force"),(0.92,"today","193 parties")], 0.92, w=640)
S["h12-f8"]=lambda: f_icons([("pen","a note drafted"),("handshake","handed over"),
    ("refnumber","a reference on the board"),("form","a flight plan filed"),
    ("timer","a slot time"),("engine","on the runway")], cols=3)
S["h12-f9"]=lambda: f_realia(tbl("Permissions board &middot; one movement",None,
    ["State","Note delivered","Time","Granted","Reference","Carried"],
    [["Perenne (landing)","yes","18:00","<b>&mdash;</b>","&mdash;","&mdash;"],
     ["Astrand (overflight)","yes","14:20","<b>yes</b>","AS/4471","&#9745;"],
     ["Marovia (overflight)","yes","14:25","<b>yes</b>","MV/0912","&#9745;"],
     ["Valmora (overflight)","yes","20:40","<b>&mdash;</b>","&mdash;","&mdash;"]],
    note="<b>NO PERMISSION, NO DEPARTURE.</b>"), 580)
S["h12-f10"]=lambda: f_scene(940,430, people=[("omar",300,176,{}),("nadia",440,172,{})],
    props=[("desk",230,0,1.25),("certificate",310,194,0.3),("logsheet",380,196,0.28),
     ("phone",450,198,0.26),("jug",520,196,0.26),("flipchart",660,44,0.78),
     ("map",830,54,0.62)], clockat=(150,46,22,21,0),
    panelbg="#242c38", floorbg="#30394a")
S["h12-f11"]=lambda: f_panels(
    lambda w,h: f_realia(tbl("Board A", None, ["State","Status"],
        [["Perenne","pending"],["Astrand","pending"],["Marovia","pending"],
         ["Valmora","pending"]]), w)[0:3],
    lambda w,h: f_realia(tbl("Board B", None, ["State","Delivered","Granted","Ref."],
        [["Perenne","18:00","&mdash;","&mdash;"],["Astrand","14:20","yes","AS/4471"],
         ["Marovia","14:25","yes","MV/0912"],["Valmora","20:40","&mdash;","&mdash;"]],
        note="<b>No permission, no departure.</b>"), w)[0:3],
    w=920, h=290)
S["h12-f12"]=lambda: f_realia(doc("Two draft notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Draft 1</b><br>"
    "The Ministry wishes to inform the Ministry of Foreign Affairs of Perenne that a charter "
    "aircraft will overfly and land on 6 March.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Draft 2</b><br>"
    "The Ministry <b>has the honour to request permission</b> for the following flight.<br>"
    "1 aircraft &middot; 2 route &middot; 3 timing, <b>with a second window offered</b> &middot; "
    "4 purpose: 40 nationals; <b>no commercial traffic rights are sought</b> &middot; 5 crew and "
    "manifest attached &middot; 6 contact, <b>available through the night</b>.<br>"
    "<b>If permission is not received by 06:00 on 6 March, the flight will be moved. It will not "
    "depart without permission.</b></p>",
    "One of these announces. The other asks."))
S["h12-f13"]=lambda: f_realia(form("Note planner",
    [("1 The aircraft",""),("2 The route",""),("3 Timing, with a second window",""),
     ("4 Purpose / no commercial rights sought",""),("5 On board",""),
     ("6 Contact, through the night",""),("If permission is not received by","")]), 520)
S["h12-f14"]=lambda: f_scene(980,440,
    people=[("omar",120,176,{"seated":True}),("nadia",200,172,{}),
     ("hana",290,176,{"seated":True}),("samira",360,172,{"seated":True}),
     ("bah",430,176,{"seated":True}),("ahmad",520,170,{}),("yusuf",590,172,{}),
     ("linh",660,170,{}),("ida",730,172,{}),("karin",800,170,{}),
     ("lucia",860,172,{}),("oskar",910,170,{}),("caruso",960,174,{}),
     ("nkemelu",55,176,{})],
    props=[("desk",80,0,1.1),("phone",150,198,0.26),("flipchart",250,44,0.66),
     ("table",400,0,1.1),("printer",560,198,0.38),("map",700,50,0.58),
     ("tray",860,196,0.32)], clockat=(480,34,22,21,0),
    panelbg="#242c38", floorbg="#30394a")
S["h12-f15"]=lambda: f_chart([("yes, more than once",9),("yes, once",6),
    ("I have done it myself",4),("no",3),("I am not sure",2)])
S["h12-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("flipchart",120,44,0.66),("logsheet",330,194,0.3),
     ("certificate",410,194,0.3),("phone",500,196,0.26),("jug",570,196,0.26)],
    window_=(720,56,120,96), clockat=(640,46,22,7,0))
