# -*- coding: utf-8 -*-
"""Clearline Book 3 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 · The Deadline That Moved ----------------
S["q04-f1"]=lambda: f_icons([("calendar","a date moved"),("ship","a sailing"),
    ("container","a container"),("clock","past the cut-off"),("email","revised"),
    ("data","the bar slides right"),("noentry","held"),("inventory","the knock-on"),
    ("truck","a van waiting"),("meeting","two at a screen")], cols=5)
S["q04-f2"]=lambda: f_scene(900,420, people=[("wei",330,170,{"seated":True})],
    props=[("desk",190,0,1.35),("computer",250,145,0.52),("computer",420,145,0.52),
    ("essay",520,205,0.36),("phone",580,208,0.28),("calendar",700,110,0.55)])
S["q04-f3"]=lambda: f_icons([("worried","hoping it recovers"),("waitscreen","waiting for a reply"),
    ("speechbubble","rehearsing the sentence"),("calendar","the weekend will absorb it"),
    ("meeting","whose fault is it"),("phone","fear of the reaction")], cols=3)
S["q04-f4"]=lambda: f_realia(tbl("","The gap between knowing and telling",
    ["What moved","When I knew","When I said","What they could have done with the time"],
    [["","","",""],["","","",""],["","","",""],["","","",""]],
    note="<b>The longest gap in the team:</b>"), 540)
S["q04-f5"]=lambda: f_realia(doc("Air cargo, full year 2025",
    "circulated to the Lindmark network planning team &middot; 4 February",
    table_html(["","2025 against 2024"],
      [["World demand (cargo tonne-kilometers)","<b>+3.4%</b>"],
       ["International operations only","+4.2%"],
       ["World capacity (available cargo tonne-kilometers)","+3.7%"],
       ["Yields","<b>&minus;1.5%</b>"]])
    + table_html(["Region","Demand"],
      [["Asia-Pacific","<b>+8.4%</b> (capacity +7.4%)"],["Europe","up"],["Middle East","up"],
       ["<b>North America</b>","<b>&minus;1.3% &mdash; the only region to fall</b>"]])
    + "<p><b>For 2026, growth is forecast at 2.4 percent</b>, in line with long-run trends.</p>"
    "<p style='background:#fff3cf'><b>One caution.</b> IATA's December monthly analysis contains a "
    "line describing full-year demand as contracting 2.2 percent; that refers to a narrower trade "
    "segment, not the world total. If you quote either figure, quote which one it is.</p>",
    "IATA full-year 2025 air cargo data, released January 2026"))
S["q04-f6"]=lambda: f_realia(tbl("Word study","Future forms for a changed plan",
    ["Pattern","Use","Example"],
    [["<b>was / were going to</b>","the plan you had",
      "We <b>were going to</b> ship on Thursday."],
     ["<b>is no longer</b>","canceling it plainly","That sailing <b>is no longer</b> available."],
     ["<b>will now</b>","the new plan","We <b>will now</b> ship on the 21st."],
     ["<b>is due to</b>","a scheduled fact","The vessel <b>is due to</b> sail on the 21st."],
     ["<b>we expect to</b>","your honest estimate","We <b>expect to</b> deliver by the 28th."],
     ["<b>I'll confirm by</b>","when you will know more","I'<b>ll confirm by</b> four today."]],
    note="Say both dates in one sentence and the conversation is about logistics, not about you."),
    540)
S["q04-f7"]=lambda: f_chart([("Asia-Pacific",8.4),("world",3.4),("North America",-1.3)],
    unit="% change in air cargo demand, 2025 &mdash; the world figure is an average of regions "
    "moving in opposite directions", w=520)
S["q04-f8"]=lambda: f_icons([("calendar","Thursday, gone"),("ship","already sailing"),
    ("boardingpass","by air"),("calendar","the 21st"),
    ("phone","the call"),("clock","four o'clock")], cols=3)
S["q04-f9"]=lambda: f_realia(tbl("Lindmark Freight &middot; revised schedule",
    "week 6 &middot; carrier rolled two bookings",
    ["Ref","Was","Now","Days late","Customer told"],
    [["LF-8841","6 Feb","21 Feb","11","&#10003; 7 Feb"],
     ["LF-8842","6 Feb","21 Feb","11","&#10003; 7 Feb"],
     ["LF-8847","9 Feb","14 Feb","5","&#10003; 7 Feb"],
     ["LF-8850","13 Feb","13 Feb","&mdash;","&mdash;"],
     ["LF-8853","13 Feb","20 Feb","7","<b></b>"],
     ["LF-8855","16 Feb","23 Feb","7","<b></b>"]],
    note="Reason: carrier rolled bookings at Ostberg on 4 February. Two customers have not been "
    "told, three days after we knew."), 560)
S["q04-f10"]=lambda: f_scene(880,420, people=[("wei",330,170,{"smile":False})],
    props=[("desk",220,0,1.3),("phone",300,208,0.28),("essay",390,208,0.34),
    ("computer",470,145,0.5)],
    window_=(640,56,130,96), panelbg="#242c38", floorbg="#30394a")
S["q04-f11"]=lambda: f_realia(tbl("Two emails","The same delay",
    ["Sent Friday, with three options","Sent Tuesday, with none"],
    [["The Thursday sailing has been rolled. The next sailing is the 21st. I have priced air "
      "freight on two lines and an alternative port, and recommend air on the housings.<br><br>"
      "<i>No mention of when we knew. Sent 15:20 Friday.</i>",
      "The Thursday sailing has been rolled. I found out this morning. I do not yet know the "
      "alternatives; I am checking air freight and two other ports and will come back to you by "
      "16:00 today, even if I have nothing new.<br><br><i>Sent 09:10 Tuesday.</i>"]],
    note="Which would you rather have received?"), 540)
S["q04-f12"]=lambda: f_realia(doc("Two emails", None,
    "<p><b>A.</b> I hope this finds you well. As you know, conditions at the port have been "
    "difficult this quarter, and carriers across the market have been managing capacity tightly. "
    "Following a review of our bookings, and after exploring a number of alternatives &hellip; "
    "<b>our Thursday sailing is no longer available.</b></p>"
    "<p style='font-size:12px;color:#6b6861'>The bad news is in line four. Nobody read lines one "
    "to three.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>Our Thursday sailing has gone.</b> The carrier rolled "
    "our booking. I knew on Tuesday morning and should have written then. <b>Was:</b> sail "
    "Thursday 6th, arrive 13th. <b>Now:</b> sail Thursday 21st, arrive 28th &mdash; eleven days "
    "later. Housings and seals go by air on Monday, arriving Wednesday 11th, about 4,000, "
    "<b>which we are absorbing</b>. Nothing needed from you today. I will confirm the air booking "
    "by 16:00 today.</p>"))
S["q04-f13"]=lambda: f_realia(form("Slipped-date planner",
    [("What was going to happen",""),("What will now happen",""),("<b>When I knew</b>",""),
     ("The knock-on effect",""),("What I am offering, unasked",""),
     ("What happens next &mdash; with a time","")]), 520)
S["q04-f14"]=lambda: f_scene(1000,450, people=[("wei",150,170,{"seated":True}),
    ("yara",240,172,{"seated":True}),("ines",330,172,{"seated":True}),
    ("marek",420,180,{"seated":True}),("anders",520,182,{}),("nour",610,168,{}),
    ("okonjo",700,182,{}),("hanna",790,172,{}),("paula",870,170,{}),("ravi",950,176,{})],
    props=[("desk",100,0,1.2),("computer",180,140,0.45),("worldmap",470,30,0.55),
    ("printer",640,205,0.5),("flipchart",860,46,0.8),("coat",760,130,0.45)],
    clockat=(380,56,22,15,20))
S["q04-f15"]=lambda: f_chart([("the next day",6),("within the week",6),("the same day",5),
    ("when it cannot be hidden",4),("never",1)])
S["q04-f16"]=lambda: f_scene(860,410, people=[],
    props=[("desk",240,0,1.3),("essay",310,205,0.4),("computer",420,145,0.5),
    ("cafe",510,208,0.34),("calendar",150,110,0.52)],
    window_=(620,56,130,96))

# ---------------- Unit 5 · The Difficult Call ----------------
S["q05-f1"]=lambda: f_icons([("headset","a headset"),("queue","a queue"),
    ("transfer","a transfer"),("refnumber","a case number"),("messages","a chat window"),
    ("worried","four calls in"),("inventory","four contacts"),("form","a complaint"),
    ("note","a note taken"),("handshake","the end of it")], cols=5)
S["q05-f2"]=lambda: f_scene(900,420, people=[("sofia",330,172,{"seated":True})],
    props=[("desk",190,0,1.35),("computer",250,145,0.52),("headset",430,208,0.32),
    ("form",500,208,0.34),("note",570,210,0.26),("window",760,150,0.9)])
S["q05-f3"]=lambda: f_icons([("transfer","transferred, four times"),
    ("waitscreen","DELIVERED, and an empty bay"),("speechbubble","repeating the number"),
    ("timer","on hold"),("email","no reply"),("happy","right, and not believed")], cols=3)
S["q05-f4"]=lambda: f_realia(tbl("","Where could it have ended?",
    ["","1","2","3","4","5"],
    [["Who was spoken to","","","","",""],
     ["Who was spoken to","","","","",""],
     ["Who was spoken to","","","","",""]],
    note="<b>Where it could have ended:</b>"), 520)
S["q05-f5"]=lambda: f_realia(tbl("Corvid Analytics &middot; case history",
    "case 44118 &mdash; and 44207, which is the same problem",
    ["Day","Contact","What was recorded"],
    [["1","agent A","“Customer reports seals missing. Will investigate.”"],
     ["3","agent B","“Order shows <b>DELIVERED</b>. Advised customer.”"],
     ["5","agent C","New case opened: <b>44207</b>. No link to 44118."],
     ["7","agent D","“Will call back Thursday.” <i>(no entry after this)</i>"],
     ["9","&mdash;","Customer called for the fifth time."]],
    note="Status field: DELIVERED. Promised callback: Thursday. Recorded against it: nothing."),
    540)
S["q05-f6"]=lambda: f_realia(tbl("Word study","Reported speech",
    ["They said","You report it as"],
    [["“The seals <b>are</b> missing.”","She said the seals <b>were</b> missing."],
     ["“I <b>spoke</b> to four people.”",
      "She said she <b>had spoken</b> to four people."],
     ["“I <b>will</b> call back.”","He said he <b>would</b> call back."],
     ["“I <b>can't</b> find the case.”","He said he <b>couldn't</b> find the case."],
     ["“<b>Send</b> me a date.”","She <b>asked me to</b> send her a date."],
     ["“<b>Have</b> you rung her?”","He <b>asked whether</b> I had rung her."]],
    note="Keep the present when the thing is still true: <i>she says the seals are missing</i>."),
    520)
S["q05-f7"]=lambda: f_line([("2021",7.7),("2024",13.5),("2025",20.0)], w=540,
    unit="% of EU enterprises with 10+ employees using AI &mdash; country range about 5% to 42%",
    mark=("2025","+6.5 points in one year"), ymin=0)
S["q05-f8"]=lambda: f_icons([("headset","picking up"),("computer","the case history"),
    ("review","you're right"),("handsup","I don't know yet"),
    ("clock","two o'clock"),("chain","the cases linked")], cols=3)
S["q05-f9"]=lambda: f_realia(tbl("Corvid Analytics &middot; case review",
    "44118 and 44207 &middot; same pallet",
    ["Day","Agent","Outcome"],
    [["1","A","logged"],["3","B","advised “delivered”"],
     ["5","C","second case opened"],["7","D","<b></b>"],["9","&mdash;","fifth call"]],
    note="<b>Root cause:</b> seals listed under the same pallet label; one scan closed both. "
    "&nbsp; <b>What the customer actually asked for:</b> the same story from everybody. &nbsp; "
    "<b>What changes for the next customer:</b> ______________"), 540)
S["q05-f10"]=lambda: f_scene(900,420, people=[("sofia",300,172,{"seated":True}),
    ("ravi",560,176,{})],
    props=[("desk",190,0,1.35),("computer",250,145,0.55),("headset",410,208,0.3),
    ("note",480,210,0.26),("chain",530,150,0.3)])
S["q05-f11"]=lambda: f_realia(tbl("Two case records","One pallet",
    ["44118","44207"],
    [["Day 1 &mdash; seals reported missing<br>Day 3 &mdash; shows DELIVERED<br>"
      "Day 7 &mdash; callback promised<br><b>Day 9 &mdash; fifth call</b><br>&mdash;",
      "Day 5 &mdash; seals reported missing <i>(reopened)</i><br>"
      "Day 6 &mdash; goods-in photographs received<br>Day 7 &mdash; callback promised<br>&mdash;<br>"
      "<b>Day 8 &mdash; note: “probably a duplicate”, no action</b>"]],
    note="Three entries overlap. Two appear on only one record. Neither refers to the other."),
    540)
S["q05-f12"]=lambda: f_realia(doc("Two case summaries", None,
    "<p><b>A.</b> We are very sorry for the inconvenience caused and for any frustration our "
    "customer has experienced. The matter has now been investigated and we are taking steps to "
    "ensure this does not happen again.</p>"
    "<p style='font-size:12px;color:#6b6861'>No dates, no cause, nothing anybody can check.</p>"
    "<p style='margin-top:14px'><b>B.</b> On 2 March the customer said the pallet had arrived "
    "without the two seal cartons. On 4 March she was told the order showed as delivered. On 6 "
    "March a second case was opened for the same pallet and was not linked. On 8 March she was "
    "told somebody would call on Thursday; nobody did. <b>Root cause:</b> the seals were listed "
    "under the same pallet label, so one scan recorded everything on it as delivered. <b>This "
    "will recur on any order where two items share a label.</b></p>"))
S["q05-f13"]=lambda: f_realia(tbl("","Case summary planner",
    ["Date","What was said"],
    [["","" ],["",""],["",""],["",""],["",""]],
    note="<b>Root cause &mdash; why? why? why?</b> ______________ &nbsp;&bull;&nbsp; "
    "<b>What the customer actually asked for:</b> ______________ &nbsp;&bull;&nbsp; "
    "<b>What changes (numbered):</b> ______________ &nbsp;&bull;&nbsp; "
    "<b>What I am not promising:</b>"), 540)
S["q05-f14"]=lambda: f_scene(1000,450, people=[("sofia",150,172,{"seated":True}),
    ("nour",240,168,{"seated":True}),("ines",330,172,{"seated":True}),
    ("marek",420,180,{"seated":True}),("yara",510,172,{"seated":True}),
    ("ravi",600,176,{}),("hanna",690,172,{}),("wei",780,170,{}),
    ("okonjo",870,182,{}),("chiamaka",950,172,{})],
    props=[("desk",100,0,1.2),("computer",180,140,0.45),("headset",260,196,0.26),
    ("messages",640,135,0.42),("printer",760,205,0.5),("cafe",880,205,0.5)],
    board=(430,20,160,110,"QUEUE",[("waiting","11"),("avg wait","4:20")]))
S["q05-f15"]=lambda: f_chart([("two",7),("three",6),("four or more",4),
    ("nobody measures it",4),("one",2)])
S["q05-f16"]=lambda: f_scene(860,410, people=[],
    props=[("desk",240,0,1.3),("computer",320,145,0.52),("essay",430,208,0.36),
    ("data",560,110,0.45)],
    panelbg="#242c38", floorbg="#30394a")

# ---------------- Unit 6 · Working Across Time Zones ----------------
S["q06-f1"]=lambda: f_icons([("worldmap","four pins"),("calendar","a zone label"),
    ("sizechart","the overlap"),("computer","four tiles"),("recorder","a recording"),
    ("note","a handover note"),("clock","crossing the date line"),
    ("day","a holiday somewhere else"),("morning","06:30"),("chair","an empty desk at night")],
    cols=5)
S["q06-f2"]=lambda: f_scene(880,420, people=[("chiamaka",320,172,{"seated":True})],
    props=[("desk",210,0,1.3),("computer",290,145,0.55),("sizechart",450,205,0.34),
    ("cafe",520,208,0.32)],
    window_=(640,56,130,96), panelbg="#242c38", floorbg="#30394a")
S["q06-f3"]=lambda: f_icons([("calendar","a time with no zone"),("clock","the clocks changed"),
    ("day","a holiday in one country"),("chair","one empty tile"),
    ("worried","“end of day” — whose?"),("messages","replying at 02:14")], cols=3)
S["q06-f4"]=lambda: f_realia(tbl("","Find the overlap",
    ["City","06","08","10","12","14","16","18","20","22"],
    [["","","","","","","","","",""],["","","","","","","","","",""],
     ["","","","","","","","","",""],["","","","","","","","","",""]],
    note="<b>The overlap:</b> ______________ &nbsp;&bull;&nbsp; <b>Who it hurts:</b>"), 560)
S["q06-f5"]=lambda: f_realia(doc("Project AC-P14 &middot; ways of working",
    "four locations &middot; agreed 14 March",
    table_html(["Location","Offset from Ostberg","Working hours, local"],
      [["Ostberg","&mdash;","08:30 &ndash; 17:00"],["Seoul","+7","09:00 &ndash; 18:00"],
       ["São Paulo","&minus;4","09:00 &ndash; 18:00"],
       ["Chicago","&minus;7","08:00 &ndash; 17:00"]])
    + "<p style='background:#fff3cf'><b>The overlap is 90 minutes a week</b>: Thursday "
    "13:30&ndash;15:00 Ostberg time. We use it for decisions only.</p>"
    "<p><b>Four rules.</b> 1. Every time written down carries its zone. 2. “End of day” "
    "is banned; use a clock time and a zone. 3. A handover note at the end of each location's day: "
    "<i>done, blocked, needs a decision</i>. 4. Public holidays go in the shared calendar a month "
    "ahead.</p>",
    "Everything that is not a decision is asynchronous."))
S["q06-f6"]=lambda: f_realia(tbl("Word study","Four words about deadlines",
    ["Word","Means","Example"],
    [["<b>by</b>","at or before this point","I'll send it <b>by</b> 16:00 Ostberg time."],
     ["<b>until</b>","up to this point, then stop","The window is open <b>until</b> 15:00."],
     ["<b>within</b>","inside this length of time","<b>Within</b> two hours of your message."],
     ["<b>in</b>","after this length of time","I'll call <b>in</b> twenty minutes."],
     ["<b>no later than</b>","a firm <i>by</i>","<b>No later than</b> 09:00 CT Friday."]],
    note="<i>End of day</i> is not a time. In four zones it names four moments, two of them "
    "already past."), 520)
S["q06-f7"]=lambda: f_chart([("Finland",20.5),("Germany",13.0),("France",11.0),
    ("EU average",9.0),("Spain",7.9),("Italy",2.7),("Romania",1.3)],
    unit="% of employed people usually working from home, 2025 &mdash; “usually” means "
    "at least half the days in a four-week period", w=540)
S["q06-f8"]=lambda: f_icons([("clock","13:30, and three others"),("calendar","with a zone"),
    ("note","done, blocked, decide"),("chair","a dark tile"),
    ("day","a holiday flag"),("messages","02:14")], cols=3)
S["q06-f9"]=lambda: f_realia(doc("Meeting invitation &middot; AC-P14 decisions",
    "45 minutes &middot; two decision items &middot; recording not required",
    "<p><b>Thursday 21 March</b><br>"
    "13:30 &ndash; 14:15 <b>Ostberg (CET)</b><br>"
    "20:30 &ndash; 21:15 <b>Seoul (KST)</b><br>"
    "09:30 &ndash; 10:15 <b>São Paulo (BRT)</b><br>"
    "06:30 &ndash; 07:15 <b>Chicago (CT)</b></p>"
    "<p><b>Agenda.</b> 1. Carrier option A or B (decision). 2. Customs classification owner "
    "(decision). Nothing else.</p>"
    "<p style='background:#fff3cf'><b>If this time does not work for you, say so and we will take "
    "it in writing.</b></p>"
    "<p><b>Attendees.</b> C. Obi &middot; J. Park &middot; L. Caruso &middot; T. Baptista "
    "<i>(optional)</i></p>",
    "The design walkthrough has been recorded (11 min) instead of held."))
S["q06-f10"]=lambda: f_scene(880,420, people=[("chiamaka",320,172,{"seated":True})],
    props=[("desk",210,0,1.3),("computer",290,145,0.58),("sizechart",450,205,0.32),
    ("lamp",150,120,0.5)],
    window_=(640,56,130,96), panelbg="#242c38", floorbg="#30394a")
S["q06-f11"]=lambda: f_realia(tbl("Two invitations","The same meeting",
    ["One time, two hours","Four zones, forty-five minutes"],
    [["<b>Design review</b><br>Thursday 14:00 &ndash; 16:00<br>Agenda: design walkthrough, "
      "carrier options, classification, AOB<br><br>"
      "<i>Fourteen hundred where? Two hours inside a ninety-minute window.</i>",
      "<b>AC-P14 decisions</b><br>13:30 CET &middot; 20:30 KST &middot; 09:30 BRT &middot; "
      "06:30 CT<br>45 minutes &middot; two decision items<br>"
      "<b>If this time does not work, say so and we will take it in writing.</b><br>"
      "Walkthrough recorded separately (11 min)."]]), 540)
S["q06-f12"]=lambda: f_realia(doc("Two messages", None,
    "<p><b>A.</b> Please can you send me the carrier comparison by end of day Friday? Thanks.</p>"
    "<p style='font-size:12px;color:#6b6861'>Sent 17:40 Ostberg time on Friday. End of day Friday "
    "finished seven hours earlier in Seoul.</p>"
    "<p style='margin-top:14px'><b>B.</b> <b>Done.</b> Carrier quotes in from all three; option B "
    "is 1,400 cheaper over the quarter and adds two days. <b>Blocked.</b> I cannot book until I "
    "have the customs classification &mdash; Jun-seo, that sits with you. <b>Needs a decision.</b> "
    "Two days of transit against 1,400 a quarter. <b>Lucia owns this: decide by 09:00 CT Friday</b> "
    "(16:00 Ostberg, 23:00 Seoul). <b>Not needed from anybody:</b> the walkthrough &mdash; "
    "recorded, 11 minutes, nothing in it to decide.</p>"))
S["q06-f13"]=lambda: f_realia(form("Handover planner",
    [("<b>Done</b>",""),("<b>Blocked</b> &mdash; and by what",""),
     ("<b>Needs a decision</b> &mdash; owner and deadline, with a zone",""),
     ("<b>Not needed from anybody</b>",""),("Next handover","")]), 520)
def _ostberg(w,h):
    return f_scene(w,h, people=[("chiamaka",120,172,{"seated":True}),
        ("yara",200,172,{"seated":True}),("marek",280,180,{"seated":True}),
        ("nour",350,168,{}),("anders",420,182,{})],
        props=[("desk",80,0,1.1),("computer",150,140,0.4),("worldmap",330,30,0.45)],
        clockat=(60,56,18,14,0))

def _seoul(w,h):
    return f_scene(w,h, people=[("junseo",140,170,{"seated":True}),
        ("mei",230,170,{"seated":True}),("adeel",320,174,{})],
        props=[("desk",100,0,1.1),("lamp",80,120,0.45),("computer",180,140,0.4),
        ("coat",380,130,0.4)],
        clockat=(60,56,18,21,0), panelbg="#242c38", floorbg="#30394a")

S["q06-f14"]=lambda: f_panels(_ostberg, _seoul, w=1000, h=450,
    lt="Ostberg 14:00", rt="Seoul 21:00")
S["q06-f15"]=lambda: f_chart([("4 to 6 hours",6),("up to 3 hours",5),("7 to 9 hours",4),
    ("none",4),("more than 9 hours",3)])
S["q06-f16"]=lambda: f_scene(860,410, people=[],
    props=[("desk",240,0,1.3),("computer",320,145,0.55),("cafe",430,208,0.32),
    ("essay",500,208,0.34),("calendar",150,110,0.5)],
    window_=(630,56,120,96), panelbg="#242c38", floorbg="#30394a")
