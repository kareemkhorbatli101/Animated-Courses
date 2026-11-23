# -*- coding: utf-8 -*-
"""Clearline Book 1 figure specs, Units 4 to 6."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Unit 4 ----------------
S["o04-f1"]=lambda: f_icons([("phone","ringing"),("headset","a headset"),
    ("messages","a mobile"),("note","taking a message"),("timer","on hold"),
    ("voicemail","voicemail"),("noentry","a wrong number"),("transfer","transferring"),
    ("notebook","a name and a number"),("missedcall" if "missedcall" in ICON else "phone","a missed call")],
    cols=5)
S["o04-f2"]=lambda: f_scene(880,410, people=[("marek",300,180,{"seated":True})],
    props=[("desk",230,0,1.4),("computer",300,146,0.5),("headset",370,130,0.45),
    ("note",420,196,0.4),("cafe",470,200,0.38),("invoice",640,130,0.5)],
    window_=(720,56,120,96))
S["o04-f3"]=lambda: f_icons([("worried","too fast"),("signal","bad signal"),
    ("microphone","talking over each other"),("noentry","cut off"),
    ("speechbubble","too quiet"),("proof","a wrong number")], cols=3)
S["o04-f4"]=lambda: f_realia(tbl("","Ways to say 'I did not understand'",
    ["To a customer","To a colleague","To my manager"],
    [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],
    note="<b>The one I always use:</b>"), 520)
S["o04-f5"]=lambda: f_realia(doc("Telephone message", None,
    "<table style='width:100%;font-size:13px'>"
    "<tr><td><b>Date:</b> 12 November</td><td><b>Time:</b> 09:40</td></tr>"
    "<tr><td><b>For:</b> Marek Dolny</td><td><b>Taken by:</b> Y. Haddad</td></tr>"
    "<tr><td><b>Caller:</b> Chiamaka Obi</td><td><b>Company:</b> Arvo Components</td></tr>"
    "<tr><td colspan='2'><b>Telephone:</b> +44 20 7946 0102 &nbsp; "
    "<i>(read back and confirmed)</i></td></tr>"
    "<tr><td colspan='2'>&#9745; Please call back &nbsp; &#9744; Will call again &nbsp; "
    "&#9744; Urgent</td></tr></table>"
    "<p><b>Message:</b> Invoice 4417 shows 40 boxes. Arvo received 14. She is not asking for a "
    "credit note yet &mdash; she wants to know which number is right before anybody writes "
    "anything down. Back at her desk after 14:00 her time.</p>"
    "<p><b>Why the phone still matters.</b> About <b>6 billion people</b> use the internet. "
    "<b>2.2 billion are offline</b>, and 96 per cent of them live in low- and middle-income "
    "countries.</p>",
    "Figures: ITU, <i>Facts and Figures 2025</i>, published 17 November 2025."))
S["o04-f6"]=lambda: f_realia(tbl("Word study","Phone phrasal verbs",
    ["Phrasal verb","Meaning","Example"],
    [["call back","ring again later","I'll <b>call</b> you <b>back</b> at two."],
     ["hold on","wait","<b>Hold on</b>, I'll check."],
     ["put through","",""],["hang up","",""],["cut out","",""],["speak up","",""]]), 500)
S["o04-f7"]=lambda: f_part("The world, online and offline",
    [("online, about 6 billion", 73, BLUE), ("offline, 2.2 billion", 27, AMBER)], w=500)
S["o04-f8"]=lambda: f_icons([("signal","one bar"),("microphone","too fast"),
    ("speechbubble","too quiet"),("notebook","a long number"),
    ("folder","finding a file"),("transfer","not my job")], cols=3)
S["o04-f9"]=lambda: f_realia(doc("Beside the phone · reception",
    "Telephone guide",
    "<p><b>Answer like this:</b> &ldquo;Lindmark Freight, [your name] speaking.&rdquo;</p>"
    "<p><b>Transferring:</b> &ldquo;One moment, I'll put you through.&rdquo;<br>"
    "<b>If the line is bad:</b> &ldquo;Sorry, could you speak up a little?&rdquo;<br>"
    "<b>Reading back:</b> &ldquo;Let me read that back to you.&rdquo;<br>"
    "<b>If they are out:</b> &ldquo;Can I take a message, or shall I ask them to call you?&rdquo;</p>"
    "<p><b>Extensions:</b> Okonjo 4400 &middot; Haddad 4412 &middot; Costa 4413 &middot; "
    "Zhang 4415 &middot; Holm 4420 &middot; Dolny 4430</p>"
    "<p><b>Main number to read out:</b> +44 20 7946 0100</p>",
    "If you are not sure, take a message. Nobody has ever complained about that."))
S["o04-f10"]=lambda: f_scene(880,410, people=[("marek",300,180,{"seated":True}),
    ("ines",620,172,{})],
    props=[("desk",230,0,1.4),("computer",300,146,0.5),("headset",370,130,0.45),
    ("invoice",430,196,0.45),("folder",660,140,0.45)],
    clockat=(110,46,22,9,40))
S["o04-f11"]=lambda: f_realia(tbl("Two message slips","Same call",
    ["Slip A","Slip B"],
    [["Date: 12 Nov &nbsp; <b>Time: 09:40</b><br>For: Marek<br>Caller: Chiamaka Obi<br>"
      "<b>Tel: +44 20 7946 0102</b><br>Message: invoice 4417 &mdash; <b>forty</b> on the "
      "invoice, fourteen received<br>Taken by: Y. Haddad",
      "Date: 12 Nov &nbsp; <b>Time: ______</b><br>For: Marek<br>Caller: Chiamaka Obi<br>"
      "<b>Tel: ______</b><br>Message: invoice 4417 &mdash; <b>forty-four</b> on the invoice, "
      "fourteen received<br>Taken by: Y. Haddad"]]), 520)
S["o04-f12"]=lambda: f_realia(doc("Two messages", None,
    "<p><b>A.</b> Chiamaka rang. Something about an invoice. Call her back.</p>"
    "<p style='font-size:12px;color:#6b6861'>No company, no number, no time, no detail.</p>"
    "<p style='margin-top:14px'><b>B.</b> 12 November, 09:40. Chiamaka Obi from Arvo Components "
    "rang. Her number is +44 20 7946 0102 &mdash; I read it back and she confirmed it. Invoice "
    "4417 shows 40 boxes; Arvo received 14. She is at her desk after 14:00 her time. "
    "&mdash; Yara, ext. 4412</p>"
    "<p style='font-size:12px;color:#6b6861'>Who, what, when you can reach them, and who took the "
    "call.</p>"))
S["o04-f13"]=lambda: f_realia(form("Message", [("Who called, and from where",""),
    ("Their number",""),("What they want",""),("When you can reach them",""),
    ("Taken by","")], note="&#9744; I read the number back"), 460)
S["o04-f14"]=lambda: f_scene(960,430, people=[("marek",150,180,{"seated":True}),
    ("nour",240,168,{"seated":True}),("ines",330,172,{"seated":True}),
    ("wei",420,170,{"seated":True}),("yara",540,172,{}),("hanna",610,172,{}),
    ("sofia",700,172,{}),("paula",780,170,{}),("ravi",860,176,{}),("lars",930,180,{})],
    board=(40,24,180,110,"TODAY",[("calls","19"),("open","3")]),
    props=[("desk",120,0,1.2),("headset",170,130,0.4),("headset",260,130,0.4),
    ("printer",640,0,1.0),("note",460,196,0.4)],
    clockat=(300,46,22,10,0))
S["o04-f15"]=lambda: f_chart([("email",9),("message app",7),("phone call",5),
    ("in person",3),("it depends",2)])
S["o04-f16"]=lambda: f_scene(840,400, people=[("omar",290,176,{"smile":False})],
    props=[("desk",230,0,1.4),("phone",330,140,0.5),("note",400,196,0.4),
    ("chair",560,0,0.8)], clockat=(110,46,22,16,20), window_=(640,56,120,96))

# ---------------- Unit 5 ----------------
S["o05-f1"]=lambda: f_icons([("racking","racking"),("pallet","a pallet"),
    ("carton","a carton"),("forklift","a forklift"),("truck","a loading bay"),
    ("barcode","a barcode"),("scanner","a scanner"),("shelf","an aisle"),
    ("walkroute","a painted line"),("crate","bins of small parts")], cols=5)
S["o05-f2"]=lambda: f_scene(920,430, people=[("anders",420,180,{})],
    props=[("racking",60,0,1.6),("racking",180,0,1.6),("racking",760,0,1.6),
    ("forklift",620,0,1.3),("scanner",470,130,0.5),("pallet",300,0,0.85)],
    floor=0.80)
S["o05-f3"]=lambda: f_icons([("carton","on"),("crate","under"),
    ("pallet","next to"),("racking","between"),
    ("truck","in front of"),("door","behind")], cols=3)
S["o05-f4"]=lambda: f_realia(tbl("","Where is it, exactly?",
    ["#","Area","Position","Detail","Found it?"],
    [["1","","","",""],["2","","","",""],["3","","","",""],
     ["4","","","",""],["5","","","",""]],
    note="Test one on another team. Could they find it?"), 540)
S["o05-f5"]=lambda: f_realia(tbl("Lindmark Freight · stock location sheet",
    "Printed 12 November, 07:05",
    ["Ref","Description","Location","Pallets","Status"],
    [["JT-0881","Cotton, gray, rolls","A4-12-2","1","<b>MISSING</b>"],
     ["JT-0882","Cotton, gray, rolls","A4-21-1","1","OK"],
     ["AV-1140","Fasteners, M6","A1-03-1","4","OK"],
     ["AV-1141","Fasteners, M8","A1-03-2","4","OK"],
     ["SF-0210","Olive oil, 5 L","A7-08-1","2","OK"],
     ["SF-0211","Olive oil, 1 L","A7-08-2","3","OK"],
     ["BP-5500","Cartons, sealed","A2-15-3","6","HOLD"],
     ["&mdash;","Marshalling area, floor","MA-FLOOR","31","OK"]],
    note="Location is read: aisle &ndash; bay &ndash; level. A4-12-2 is aisle 4, bay 12, level 2. "
    "<b>World ports handled about 858 million TEU in 2023, up from 641 million in 2013</b> "
    "(UNCTADstat)."), 560)
S["o05-f6"]=lambda: f_realia(tbl("Word study","Prepositions of place",
    ["Preposition","Example"],
    [["on","The carton is <b>on</b> the pallet."],
     ["in","The parts are <b>in</b> the bin."],
     ["under",""],["next to",""],["between",""],["in front of",""],
     ["behind",""],["opposite",""]]), 440)
S["o05-f7"]=lambda: f_chart([("2013",641),("2023",858)],
    unit="million TEU handled by the world's ports", w=460)
S["o05-f8"]=lambda: f_icons([("carton","a box on a high shelf"),("crate","a crate under a table"),
    ("folder","a file between two folders"),("door","a trolley behind a door"),
    ("key","a key next to a phone"),("pallet","a pallet in front of a bay")], cols=3)
S["o05-f9"]=lambda: f_realia(doc("Lindmark Freight · Ostberg warehouse",
    "Floor plan",
    "<table style='width:100%;font-size:12px;text-align:center'>"
    "<tr><td colspan='8' style='background:#e8eef6;padding:6px'><b>OFFICE</b></td></tr>"
    "<tr>" + "".join("<td style='border:1px solid #999;padding:14px 4px'>A%d</td>"%i
                     for i in range(1,9)) + "</tr>"
    "<tr><td colspan='8' style='background:#f3efe4;padding:8px'>"
    "<b>MARSHALLING AREA</b></td></tr>"
    "<tr><td colspan='3' style='border:1px solid #999;padding:6px'>BAY 1</td>"
    "<td colspan='3' style='border:1px solid #999;padding:6px'>BAY 2</td>"
    "<td colspan='2' style='border:1px solid #999;padding:6px'>BAY 3</td></tr></table>"
    "<p style='font-size:12px'><b>Key:</b> A1&ndash;A8 = aisles &middot; three levels per bay "
    "&middot; fire exits at the north and east corners.</p>"))
S["o05-f10"]=lambda: f_scene(900,430, people=[("anders",330,180,{}),("yara",430,172,{})],
    props=[("racking",60,0,1.6),("racking",170,0,1.6),("racking",760,0,1.6),
    ("pallet",570,0,0.85),("scanner",380,130,0.45),("inventory",480,130,0.45)],
    floor=0.80)
S["o05-f11"]=lambda: f_realia(tbl("Two floor plans","Before and after",
    ["Old plan","New plan"],
    [["Aisles <b>A1&ndash;A8</b><br>Marshalling area at the <b>south</b><br>"
      "<b>Three</b> loading bays<br>Office in the north-west corner<br>Fire exits: N and E",
      "Aisles <b>A1&ndash;A6, B1&ndash;B2</b><br>Marshalling area at the <b>east</b><br>"
      "<b>Two</b> loading bays (bay 3 closed)<br>Office in the north-west corner<br>"
      "Fire exits: N and E"]]), 520)
S["o05-f12"]=lambda: f_realia(doc("Two stock notes", None,
    "<p><b>A.</b> JT-0881 is missing. Can somebody look for it?</p>"
    "<p style='font-size:12px;color:#6b6861'>Nothing checked. The next person starts from zero.</p>"
    "<p style='margin-top:14px'><b>B.</b> JT-0881 is not in A4-12-2. I checked the location at "
    "07:50 and there is nothing there. There is a similar pallet in A4-21-1; I scanned it and it "
    "is JT-0882, a different consignment, in the right place. I have checked the goods-in log for "
    "three days and there is no entry.</p>"
    "<p style='font-size:12px;color:#6b6861'>Everything that has been checked, so nobody checks "
    "it twice.</p>"))
S["o05-f13"]=lambda: f_realia(form("Stock note", [("What is missing",""),
    ("Where I looked, and when",""),("What I found instead",""),("What I will do next","")],
    note="Who I will tell:"), 460)
S["o05-f14"]=lambda: f_scene(980,450, people=[("anders",470,180,{}),("omar",550,176,{}),
    ("ida",620,170,{}),("lars",700,180,{}),("petra" if False else "ines",780,172,{}),
    ("yara",860,172,{}),("wei",930,170,{}),("marek",200,180,{}),("nour",120,168,{})],
    props=[("racking",20,0,1.5),("racking",120,0,1.5),("truck",300,0,1.4),
    ("forklift",400,0,1.2),("pallet",660,0,0.8),("desk",160,0,1.0),
    ("barcode",60,120,0.45)], floor=0.80)
S["o05-f15"]=lambda: f_chart([("somebody's desk",8),("a store room",6),
    ("a shared drive",5),("in transit",4),("nothing gets lost",2)])
S["o05-f16"]=lambda: f_scene(860,410, people=[("anders",290,180,{"seated":True,"smile":False})],
    props=[("desk",230,0,1.4),("scanner",310,140,0.45),("inventory",390,196,0.45),
    ("phone",450,196,0.4)], clockat=(110,46,22,8,10),
    window_=(620,56,140,100))

# ---------------- Unit 6 ----------------
S["o06-f1"]=lambda: f_icons([("scales","weighing"),("sizechart","measuring"),
    ("carton","identical boxes"),("pricetag","a price"),("cash","money"),
    ("calculator","a total"),("invoice","an invoice"),("crate","a weight on a carton"),
    ("pallet","a wrapped pallet"),("jobnotice","minimum order")], cols=5)
S["o06-f2"]=lambda: f_scene(880,410, people=[("chiamaka",300,172,{"seated":True}),
    ("marek",420,180,{})],
    props=[("desk",230,0,1.4),("computer",300,146,0.5),("invoice",400,196,0.45),
    ("carton",620,0,0.8),("calculator",500,196,0.4)],
    window_=(700,56,130,96))
S["o06-f3"]=lambda: f_icons([("carton","bolts"),("crate","cartons"),
    ("pallet","pallets"),("tin","oil"),("racking","steel"),("essay","paper")], cols=3)
S["o06-f4"]=lambda: f_realia(tbl("","How is 1550 written?",
    ["Document","How 1550 is written","Currency named?"],
    [["","",""],["","",""],["","",""]],
    note="<b>The safest way to write it:</b>"), 500)
S["o06-f5"]=lambda: f_realia(doc("Arvo Components · purchase order",
    "PO-4417 &middot; 12 November 2026 &middot; Supplier: Juno Textiles",
    "<table style='width:100%;font-size:13px'>"
    "<tr><td><b>Code</b></td><td><b>Description</b></td><td align='right'><b>Qty</b></td>"
    "<td><b>Unit</b></td><td align='right'><b>Unit price</b></td>"
    "<td align='right'><b>Line total</b></td></tr>"
    "<tr><td>F-M6-25</td><td>Fastener M6 &times; 25</td><td align='right'>1,200</td>"
    "<td>piece</td><td align='right'>2.40</td><td align='right'>2,880.00</td></tr>"
    "<tr><td>F-M8-30</td><td>Fastener M8 &times; 30</td><td align='right'>400</td>"
    "<td>piece</td><td align='right'>3.10</td><td align='right'>1,240.00</td></tr>"
    "<tr><td>W-GR-01</td><td>Gray cotton</td><td align='right'>250</td>"
    "<td>meter</td><td align='right'>6.00</td><td align='right'>1,500.00</td></tr>"
    "<tr><td>P-STD</td><td>Pallet charge</td><td align='right'>2</td>"
    "<td>pallet</td><td align='right'>15.00</td><td align='right'>30.00</td></tr></table>"
    "<p><b>Subtotal: 5,650.00 euros.</b> Prices are per unit and exclude transport.<br>"
    "<b>Delivery:</b> 28 November 2026 to Ostberg. <b>Minimum order:</b> 500 pieces per code.</p>"
    "<p><b>Note from the buyer:</b> Quantities are written with a comma for thousands &mdash; "
    "<b>1,200 means one thousand two hundred, not one point two.</b> Please confirm in writing.</p>"
    "<p>The WTO expects world merchandise trade to grow by <b>3.9 per cent in 2026</b> and "
    "4.1 per cent in 2027.</p>",
    "Figure: WTO, <i>Global Trade Outlook and Statistics</i>, October 2026 update."))
S["o06-f6"]=lambda: f_realia(tbl("Word study","Countable and uncountable",
    ["","Countable","Uncountable"],
    [["Question","How <b>many</b> &hellip;?","How <b>much</b> &hellip;?"],
     ["Examples","bolts, cartons, pallets, orders","steel, oil, paper, money, time"],
     ["A few / a little","<b>a few</b> bolts","<b>a little</b> oil"],
     ["Not many / not much","not <b>many</b> cartons","not <b>much</b> time"],
     ["Some / any","some bolts","some oil"]]), 480)
S["o06-f7"]=lambda: f_line([("2024",2.9),("2025",4.6),("2026",3.9),("2027",4.1)],
    w=520, unit="world merchandise trade volume, per cent growth · 2026 and 2027 are forecasts",
    dashed_from=2, ymin=0)
S["o06-f8"]=lambda: f_icons([("carton","how many in a carton?"),("pricetag","what's the price?"),
    ("calendar","when is delivery?"),("scales","what does it weigh?"),
    ("jobnotice","is there a minimum?"),("truck","what's the lead time?")], cols=3)
S["o06-f9"]=lambda: f_realia(doc("Juno Textiles · order confirmation",
    "Your order PO-4417",
    "<p>Thank you for your order. We confirm:</p>"
    "<p><b>Fastener M6 &times; 25</b> &mdash; <b>1,200 pieces</b> at <b>2.40 euros per piece</b><br>"
    "<b>Fastener M8 &times; 30</b> &mdash; <b>400 pieces</b> at <b>3.10 euros per piece</b><br>"
    "<b>Gray cotton</b> &mdash; <b>250 meters</b> at <b>6.00 euros per meter</b></p>"
    "<p><b>Delivery: 28 November 2026.</b></p>"
    "<p><b>Please check and reply by Friday.</b></p>",
    "All prices exclude transport and are valid for 30 days from the date of this confirmation."))
S["o06-f10"]=lambda: f_panels(
    lambda w,h: f_scene(w,h, people=[("chiamaka",180,172,{"seated":True})],
        props=[("desk",120,0,1.3),("invoice",200,146,0.45),("phone",270,196,0.4)],
        clockat=(60,46,20,14,10)),
    lambda w,h: f_scene(w,h, people=[("junseo",180,174,{"seated":True})],
        props=[("desk",120,0,1.3),("computer",200,146,0.45),("carton",290,0,0.6)],
        clockat=(60,46,20,20,10)),
    w=900, h=380, lt="14:10", rt="20:10")
S["o06-f11"]=lambda: f_realia(tbl("Two orders","Same purchase order",
    ["Digits only","Digits and words"],
    [["F-M6-25 &nbsp; <b>1,200</b> &nbsp; 2.40<br>F-M8-30 &nbsp; <b>400</b> &nbsp; 3.10<br>"
      "W-GR-01 &nbsp; 250 &nbsp; <b>piece</b> &nbsp; 6.00<br>Delivery 28/11/2026",
      "F-M6-25 &nbsp; <b>1,200 (one thousand two hundred)</b> pieces &nbsp; 2.40 euros<br>"
      "F-M8-30 &nbsp; <b>440 (four hundred and forty)</b> pieces &nbsp; 3.10 euros<br>"
      "W-GR-01 &nbsp; 250 (two hundred and fifty) <b>meters</b> &nbsp; 6.00 euros<br>"
      "Delivery 28 November 2026"]]), 540)
S["o06-f12"]=lambda: f_realia(doc("Two order lines", None,
    "<p><b>A.</b> F-M6-25 &mdash; 1.200 &mdash; 2,40</p>"
    "<p style='font-size:12px;color:#6b6861'>Two numbers, four possible readings, no unit, no "
    "currency.</p>"
    "<p style='margin-top:14px'><b>B.</b> F-M6-25, Fastener M6 &times; 25 &mdash; "
    "<b>1,200 (one thousand two hundred) pieces</b> at <b>2.40 euros per piece</b>. "
    "Delivery <b>28 November 2026</b>.</p>"
    "<p style='font-size:12px;color:#6b6861'>One reading. Eleven extra words.</p>"))
S["o06-f13"]=lambda: f_realia(form("Order line", [("Product",""),("Quantity in digits",""),
    ("Quantity in words",""),("Unit",""),("Price, with the currency",""),
    ("Delivery date, in letters","")],
    note="If a line does not match what you have:"), 480)
S["o06-f14"]=lambda: f_scene(960,440, people=[("anders",180,180,{}),("omar",260,176,{}),
    ("ida",340,170,{}),("marek",450,180,{}),("ines",530,172,{}),
    ("lars",620,180,{}),("wei",700,170,{}),("yara",790,172,{}),
    ("nour",870,168,{}),("hanna",930,172,{})],
    props=[("truck",40,0,1.4),("carton",400,0,0.7),("carton",770,0,0.7),
    ("scales",600,0,0.8),("clipboard",290,126,0.45),("invoice",150,120,0.45)],
    floor=0.80)
S["o06-f15"]=lambda: f_chart([("I do",9),("a colleague does",6),("a system does",5),
    ("nobody does",3),("I don't know",2)])
S["o06-f16"]=lambda: f_scene(860,410, people=[("chiamaka",290,172,{"seated":True,"smile":False})],
    props=[("desk",230,0,1.4),("invoice",300,146,0.45),("invoice",370,146,0.45),
    ("calculator",440,196,0.4),("calendar",120,50,0.65)],
    window_=(640,56,120,96), panelbg="#242c38", floorbg="#30394a")
