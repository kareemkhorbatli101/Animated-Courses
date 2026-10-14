#!/usr/bin/env python3
"""
make_figures.py — the 110 illustrations, eleven per unit, in the source's slots:
in-class starter · pre-class input · grammar focus · listening · speaking ·
extended reading · writing · restaurant track · consolidation · judgement · review.
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figures import *

ACC = [TEAL, ORANGE, BLUE, GREEN, PURPLE, RED]

# ---------------------------------------------------------------- templates

def team(name, title, sub, note, people):
    fig, ax = panel(600, title, sub, note)
    n = len(people)
    gap = 2400 / max(n - 1, 1)
    base = ax._top - 490
    for i, (nm, role) in enumerate(people):
        person(ax, 300 + i * gap, base, nm, role, shirt=i, skin=i, hair=i, prop=True)
    save(fig, name)


def cards4(name, title, items, sub=None):
    rows = (len(items) + 1) // 2
    fig, ax = panel(rows * 320 + (rows - 1) * 110, title, sub)
    top = ax._top
    for i, (t, s) in enumerate(items):
        card(ax, 360 + (i % 2) * 1230, top - 320 - (i // 2) * 430, 1050, 320,
             title=t, lines=[s], accent=ACC[i % 4], fs=36, lfs=27)
    save(fig, name)


def compare2(name, title, left, right, note=None, sub=None):
    """Two labelled columns and an optional note strip underneath."""
    ch = max(len(left[1]), len(right[1]))
    card_h = 150 + 56 * ch
    fig, ax = panel(card_h + (170 if note else 0), title, sub)
    top = ax._top
    for i, (head, lines, col) in enumerate((left, right)):
        x = 300 + i * 1270
        card(ax, x, top - card_h, 1130, card_h, title=head, lines=lines, accent=col,
             fs=33, lfs=25)
    if note:
        y = top - card_h - 150
        ax.add_patch(FancyBboxPatch((300, y), 2400, 110,
                                    boxstyle="round,pad=0,rounding_size=16",
                                    facecolor="#FFF6E8", edgecolor=ORANGE, lw=3, zorder=3))
        ax.text(1500, y + 55, note, ha="center", va="center", fontsize=25,
                color=INK, zorder=5)
    save(fig, name)


def dialogue(name, title, a, b, lines, sub=None):
    """Two speakers, with the exchange between them."""
    block = 175 * len(lines)
    fig, ax = panel(max(block, 620), title, sub)
    top = ax._top
    base = top - max(block, 620) + 190
    person(ax, 330, base, a[0], a[1], shirt=0, skin=0, hair=0, prop=False, scale=0.85)
    person(ax, 2670, base, b[0], b[1], shirt=1, skin=2, hair=1, prop=False, scale=0.85)
    y = top - 40
    for i, (who, text) in enumerate(lines):
        left = who == 0
        x = 640 if left else 800
        wdt = 1560
        ax.add_patch(FancyBboxPatch((x, y - 90), wdt, 120,
                                    boxstyle="round,pad=0,rounding_size=24",
                                    facecolor=CARD, edgecolor=ACC[0 if left else 2],
                                    lw=3, zorder=4))
        ax.text(x + wdt / 2, y - 30, text, ha="center", va="center", fontsize=25,
                color=INK, zorder=5)
        y -= 175
    save(fig, name)


def roleplay(name, title, card_a, card_b, sub=None):
    ch = max(len(card_a[1]), len(card_b[1]))
    card_h = 160 + 60 * ch
    fig, ax = panel(card_h, title, sub)
    top = ax._top
    for i, (head, lines, col) in enumerate(((card_a[0], card_a[1], BLUE),
                                            (card_b[0], card_b[1], TEAL))):
        card(ax, 300 + i * 1270, top - card_h, 1130, card_h, title=head, lines=lines,
             accent=col, fs=32, lfs=25)
    save(fig, name)


def flow(name, title, steps, sub=None, note=None):
    """A left-to-right chain of boxes with arrows."""
    fig, ax = panel(380 + (120 if note else 0), title, sub)
    top = ax._top
    n = len(steps)
    w = (2400 - (n - 1) * 90) / n
    y = top - 380
    for i, (head, line) in enumerate(steps):
        x = 300 + i * (w + 90)
        card(ax, x, y, w, 380, title=head, lines=[line], accent=ACC[i % 4],
             fs=27, lfs=22)
        if i:
            arrow(ax, x - 78, y + 190, x - 14, y + 190, colour=GREY, lw=4)
    if note:
        ax.text(1500, y - 85, note, ha="center", va="center", fontsize=25, color=GREY,
                zorder=5)
    save(fig, name)


def checklist(name, title, items, sub=None):
    fig, ax = panel(150 * len(items), title, sub)
    top = ax._top
    y = top - 80
    for i, it in enumerate(items):
        ax.add_patch(FancyBboxPatch((420, y - 58), 2160, 112,
                                    boxstyle="round,pad=0,rounding_size=16",
                                    facecolor=CARD, edgecolor="#C8D2DC", lw=2.5, zorder=3))
        ax.add_patch(Rectangle((470, y - 26), 48, 48, facecolor="#FFFFFF",
                               edgecolor=ACC[i % 4], lw=3, zorder=4))
        ax.text(570, y, it, ha="left", va="center", fontsize=26, color=INK, zorder=5)
        y -= 150
    save(fig, name)


def decision(name, title, options, sub=None):
    """Three options, the third marked as the whole truth."""
    fig, ax = panel(215 * len(options), title, sub)
    top = ax._top
    y = top - 110
    for i, (lab, text) in enumerate(options):
        col = GREEN if i == len(options) - 1 else GREY
        ax.add_patch(FancyBboxPatch((330, y - 95), 2340, 170,
                                    boxstyle="round,pad=0,rounding_size=20",
                                    facecolor=CARD, edgecolor=col, lw=3.5, zorder=3))
        ax.text(420, y, lab, ha="left", va="center", fontsize=30, fontweight="bold",
                color=col, zorder=5)
        ax.text(560, y, text, ha="left", va="center", fontsize=25, color=INK, zorder=5)
        y -= 215
    save(fig, name)


def branches(name, title, rows, sub=None, note=None):
    """The five Blue Door restaurants, each with its currency."""
    fig, ax = panel(400 + (110 if note else 0), title, sub)
    top = ax._top
    n = len(rows)
    w = (2500 - (n - 1) * 60) / n
    for i, (city, cur) in enumerate(rows):
        card(ax, 250 + i * (w + 60), top - 400, w, 400, title=city, lines=[cur],
             accent=ACC[i % 5], fs=27, lfs=23)
    if note:
        ax.text(1500, top - 490, note, ha="center", va="center", fontsize=25,
                color=GREY, zorder=5)
    save(fig, name)


def doc(name, title, head, rows, sub=None, note=None):
    """A ledger / statement / table mock-up."""
    fig, ax = panel(170 + 92 * len(rows) + (110 if note else 0), title, sub)
    top = ax._top
    x0, w = 420, 2160
    y = top - 90
    ax.add_patch(FancyBboxPatch((x0, y - 110 - 92 * len(rows)), w, 110 + 92 * len(rows) + 10,
                                boxstyle="round,pad=0,rounding_size=18",
                                facecolor=CARD, edgecolor="#9FB0BF", lw=3, zorder=3))
    ax.add_patch(Rectangle((x0 + 4, y - 10), w - 8, 86, facecolor="#1F4E9C",
                           edgecolor="none", zorder=4))
    cols = len(head)
    for j, h in enumerate(head):
        ax.text(x0 + 60 + j * (w - 120) / cols, y + 33, h, ha="left", va="center",
                fontsize=25, fontweight="bold", color="#FFFFFF", zorder=5)
    yy = y - 56
    for r in rows:
        for j, c in enumerate(r):
            ax.text(x0 + 60 + j * (w - 120) / cols, yy, c, ha="left", va="center",
                    fontsize=24, color=INK, zorder=5)
        ax.plot([x0 + 20, x0 + w - 20], [yy - 46, yy - 46], color="#DCE3EA", lw=2, zorder=4)
        yy -= 92
    if note:
        ax.text(1500, yy - 30, note, ha="center", va="center", fontsize=25,
                color=GREY, zorder=5)
    save(fig, name)


def chart(name, title, bars, sub=None, note=None):
    """A simple column chart: (label, value, colour-index)."""
    fig, ax = panel(620 + (110 if note else 0), title, sub)
    top = ax._top
    base = top - 540
    mx = max(v for _, v in bars)
    n = len(bars)
    w = (2200 - (n - 1) * 90) / n
    for i, (lab, v) in enumerate(bars):
        x = 400 + i * (w + 90)
        h = 430 * v / mx
        ax.add_patch(Rectangle((x, base), w, h, facecolor=ACC[i % 4],
                               edgecolor="none", zorder=4))
        ax.text(x + w / 2, base + h + 44, f"{v:,}", ha="center", va="center",
                fontsize=25, fontweight="bold", color=NAVY, zorder=5)
        ax.text(x + w / 2, base - 58, lab, ha="center", va="center", fontsize=24,
                color=GREY, zorder=5)
    ax.plot([360, 2640], [base, base], color="#8C98A6", lw=3, zorder=4)
    if note:
        ax.text(1500, base - 130, note, ha="center", va="center", fontsize=25,
                color=GREY, zorder=5)
    save(fig, name)


# ---------------------------------------------------------------- the 110 figures

TEAM = [("Teresa", "checks the figures"), ("Daniel", "records the sales"),
        ("Mei", "counts the cash"), ("Can", "deals with suppliers")]
BRANCHES = [("Lisbon", "euro · EUR"), ("Nairobi", "shilling · KES"),
            ("Istanbul", "lira · TRY"), ("Singapore", "dollar · SGD"),
            ("Montréal", "dollar · CAD")]


def unit1():
    team("u1-start", "The group accounts office in Lisbon",
         "Every person has a clear routine —", "but today, everyone is working differently.", TEAM)
    cards4("u1-words", "Talking about the present",
           [("routine", "a regular, repeated action"), ("temporary", "only for a short time"),
            ("at the moment", "right now"), ("responsible for", "in charge of")])
    compare2("u1-grammar", "Present simple vs present continuous",
             ("PRESENT SIMPLE", ["routines, habits, facts", "Daniel records the sales",
                                 "every morning in Nairobi."], BLUE),
             ("PRESENT CONTINUOUS", ["now, temporary", "Daniel is checking last",
                                     "year's figures this week."], TEAL),
             note="STATE VERBS — not used in the continuous: know, need, cost, believe, understand")
    dialogue("u1-listen", "What are you working on right now?",
             ("Teresa", "Lisbon"), ("Daniel", "Nairobi"),
             [(0, "What are you working on right now?"),
              (1, "At the moment, I am checking last year's figures."),
              (0, "And do you still record the daily sales?"),
              (1, "Of course. I record them every morning.")])
    roleplay("u1-speak", "A busy week — role play",
             ("Card A — Controller", ["ask what your colleague is doing now",
                                           "ask if they still do their routine"]),
             ("Card B — Bookkeeper", ["say what you are doing this week",
                                           "say which routine never changes"]))
    compare2("u1-read", "Every day, and right now",
             ("EVERY DAY", ["The Singapore branch opens", "at noon. Mei counts the cash",
                            "at the end of every night."], BLUE),
             ("RIGHT NOW", ["This week Mei is training", "a new cashier, so Clara is",
                            "counting the cash."], TEAL))
    flow("u1-write", "A daily routine, step by step",
         [("First", "I open the ledger"), ("Then", "I record the sales"),
          ("After that", "I check the bank"), ("Before I leave", "I file the receipts")],
         note="Use the present simple, and link the steps.")
    flow("u1-ra", "The journey of a sale — from the floor to the group ledger",
         [("The floor", "Clara seats the guests"), ("The till", "Mei takes the payment"),
          ("The branch", "Daniel records the sale"), ("The group", "Teresa sees the total")],
         note="One sale, four hands, two currencies.")
    team("u1-consol", "An audit morning", "Nothing is wrong —",
         "but everyone is doing something unusual.",
         [("Daniel", "gathers receipts"), ("Mei", "prints statements"),
          ("Can", "lists the suppliers"), ("Teresa", "checks nothing is missing")])
    decision("u1-decide", "Which sentence tells the whole truth?",
             [("(a)", "The team records the sales by hand."),
              ("(b)", "The team uses a group system."),
              ("(c)", "The team normally uses the group system, but this week it is recording by hand.")])
    checklist("u1-review", "What you can do after Unit 1",
              ["use the present simple for routines, habits and facts",
               "use the present continuous for now and for temporary work",
               "avoid the continuous with state verbs",
               "describe your daily work clearly and accurately"])


def unit2():
    team("u2-start", "The night the payment system failed", "20:30 in Istanbul —",
         "the tills went down while the restaurant was full.",
         [("Can", "was entering invoices"), ("Mei", "was taking a payment"),
          ("Clara", "was seating guests"), ("Teresa", "was closing the week")])
    cards4("u2-words", "Telling the story of an incident",
           [("suddenly", "quickly and without warning"), ("while", "during a longer action"),
            ("interrupt", "to stop something that is happening"),
            ("breakdown", "when a machine stops working")])
    compare2("u2-grammar", "Past continuous and past simple",
             ("PAST CONTINUOUS", ["the longer background", "Mei was taking a payment",
                                  "when the system failed."], BLUE),
             ("PAST SIMPLE", ["the sudden event", "The system failed at 20:30",
                              "and the tills went dark."], ORANGE),
             note="WHILE + the long action · WHEN + the sudden event")
    dialogue("u2-listen", "What were you doing when it happened?",
             ("Teresa", "Lisbon"), ("Mei", "Singapore"),
             [(0, "What were you doing when the system failed?"),
              (1, "I was taking a payment at table nine."),
              (0, "And what did you do then?"),
              (1, "I wrote the amount on paper and told Clara.")])
    roleplay("u2-speak", "The outage — role play",
             ("Card A — Controller", ["ask what happened, and when",
                                           "ask what each person was doing"]),
             ("Card B — Branch manager", ["say what was happening at the time",
                                                "say what the team did next"]))
    compare2("u2-read", "One action interrupting another",
             ("WHAT WAS HAPPENING", ["Guests were eating.", "Mei was taking a payment.",
                                     "Can was entering invoices."], BLUE),
             ("WHAT HAPPENED", ["The system failed.", "The tills went dark.",
                                "The team wrote on paper."], ORANGE))
    flow("u2-write", "The story of the outage, step by step",
         [("At 20:30", "the system failed"), ("While it was down", "the team wrote on paper"),
          ("At 21:10", "the system came back"), ("Afterwards", "we entered every slip")],
         note="Set the scene with the continuous; move the story with the simple.")
    flow("u2-ra", "Handling an incident on the floor",
         [("Stay calm", "tell the guests"), ("Keep serving", "the kitchen continues"),
          ("Record", "write every order"), ("Hand over", "give the slips to accounts")],
         note="Calm, record, keep cooking — then reconcile.")
    doc("u2-consol", "Filling the gap from the paper slips",
        ["Slip", "Table", "Amount", "Entered"],
        [["041", "9", "TRY 640.00", "yes"], ["042", "4", "TRY 215.50", "yes"],
         ["043", "12", "TRY 980.00", "not yet"], ["044", "7", "TRY 132.00", "not yet"]],
        note="Every paper slip becomes a line in the ledger.")
    decision("u2-decide", "A difference of ten euros",
             [("(a)", "Write it off quietly — it is only ten euros."),
              ("(b)", "Change a figure so the totals agree."),
              ("(c)", "Record the difference, explain it, and tell the controller.")])
    checklist("u2-review", "What you can do after Unit 2",
              ["use the past continuous for the background",
               "use the past simple for the sudden event",
               "join the two with while and when",
               "tell the story of an incident clearly and honestly"])


def unit3():
    flow("u3-start", "Blue Door, so far",
         [("2016", "the first restaurant"), ("2019", "Nairobi opens"),
          ("2022", "Istanbul and Singapore"), ("this year", "Montréal opens")],
         note="Four finished moments, and one record that is still growing.")
    cards4("u3-words", "Talking about the record so far",
           [("so far", "up to now"), ("already", "sooner than expected"),
            ("yet", "not up to now (in questions and negatives)"),
            ("since", "from a point in the past until now")])
    compare2("u3-grammar", "Present perfect and past simple",
             ("PRESENT PERFECT", ["the record up to now", "We have opened five",
                                  "restaurants since 2016."], BLUE),
             ("PAST SIMPLE", ["a finished time", "We opened the first one",
                              "in 2016."], ORANGE),
             note="Finished time word (in 2016, last year, yesterday) → past simple")
    dialogue("u3-listen", "What have we done so far this year?",
             ("Teresa", "Lisbon"), ("Can", "Istanbul"),
             [(0, "What have we done so far this year?"),
              (1, "We have opened Montréal and we have changed two suppliers."),
              (0, "Have you finished the supplier review yet?"),
              (1, "Not yet. I finished the first half last month.")])
    roleplay("u3-speak", "The year so far — role play",
             ("Card A — Owner", ["ask what the group has done so far",
                                      "ask what has not happened yet"]),
             ("Card B — Controller", ["say what has been done up to now",
                                            "say when each finished thing happened"]))
    compare2("u3-read", "The record so far",
             ("UP TO NOW", ["Costs have risen twice.", "We have not raised prices yet.",
                            "Sales have grown since May."], BLUE),
             ("A FINISHED TIME", ["Costs rose in March.", "We raised prices in 2022.",
                                  "Sales grew last summer."], ORANGE))
    flow("u3-write", "A progress report",
         [("Since January", "what has happened"), ("In March", "what happened then"),
          ("So far", "where we are now"), ("Not yet", "what is still to come")],
         note="The perfect carries the record; the simple dates each step.")
    flow("u3-ra", "The restaurant's story",
         [("2016", "one small dining room"), ("2019", "a second kitchen"),
          ("2022", "two more cities"), ("today", "five restaurants")],
         note="A story a guest can hear in one minute.")
    doc("u3-consol", "The year to date", ["Branch", "Opened", "Sales so far", "Trend"],
        [["Lisbon", "2016", "EUR 1,240,000", "up"], ["Nairobi", "2019", "KES 96,400,000", "up"],
         ["Istanbul", "2022", "TRY 14,800,000", "steady"],
         ["Montréal", "this year", "CAD 310,000", "new"]],
        note="Every figure is converted to euro before the group adds it up.")
    decision("u3-decide", "Have we fixed it, or did we fix it?",
             [("(a)", "We fixed the error. (and nothing about now)"),
              ("(b)", "We have fixed the error in March."),
              ("(c)", "We found the error in March, and we have fixed it.")])
    checklist("u3-review", "What you can do after Unit 3",
              ["use the present perfect for the record up to now",
               "use the past simple for a finished time",
               "use already, yet, so far and since correctly",
               "report what your team has done this year"])


def unit4():
    flow("u4-start", "How a record is made",
         [("Entered", "by the bookkeeper"), ("Checked", "by the controller"),
          ("Approved", "by the owner"), ("Filed", "for the auditor")],
         note="Four hands, one record — and a name against each step.")
    cards4("u4-words", "The words of a process",
           [("record (v)", "to write something in the books"),
            ("check (v)", "to look at something to see it is right"),
            ("approve", "to say officially that something is correct"),
            ("file (v)", "to store a document so it can be found")])
    compare2("u4-grammar", "Active and passive",
             ("ACTIVE", ["who did it comes first", "Daniel entered the invoice",
                         "on Tuesday."], BLUE),
             ("PASSIVE", ["what was done comes first", "The invoice was entered",
                          "on Tuesday (by Daniel)."], TEAL),
             note="be + past participle · add 'by …' whenever the reader needs the name")
    dialogue("u4-listen", "Was it checked before it was paid?",
             ("Teresa", "Lisbon"), ("Can", "Istanbul"),
             [(0, "Was the invoice checked before it was paid?"),
              (1, "Yes. It was entered on Tuesday and checked on Wednesday."),
              (0, "And who approved it?"),
              (1, "It was approved by Mr Alvarez on Thursday.")])
    roleplay("u4-speak", "Explaining a process — role play",
             ("Card A — Auditor", ["ask how an invoice is handled",
                                        "ask who approves a payment"]),
             ("Card B — Accountant", ["describe the steps in the passive",
                                            "say by whom each step is done"]))
    compare2("u4-read", "What was done, and who did it",
             ("WHAT WAS DONE", ["The invoice was received.", "The total was checked.",
                                "The payment was approved."], TEAL),
             ("WHO DID IT", ["Can received it.", "Teresa checked it.",
                             "Mr Alvarez approved it."], BLUE))
    flow("u4-write", "Describing a procedure",
         [("Step 1", "the invoice is received"), ("Step 2", "the total is checked"),
          ("Step 3", "the payment is approved"), ("Step 4", "the record is filed")],
         note="The passive puts the action first. The name still belongs in the sentence.")
    flow("u4-ra", "How a bill is created",
         [("Ordered", "the order is sent"), ("Prepared", "the dishes are cooked"),
          ("Added up", "the bill is printed"), ("Settled", "the payment is taken")],
         note="Nothing on the bill appears without a record behind it.")
    doc("u4-consol", "The audit trail", ["Step", "Done by", "Date", "Reference"],
        [["Invoice received", "Can", "04 Mar", "INV-2291"],
         ["Total checked", "Teresa", "05 Mar", "CHK-118"],
         ["Payment approved", "Mr Alvarez", "06 Mar", "APP-074"],
         ["Record filed", "Daniel", "06 Mar", "F-2291"]],
        note="A trail an auditor in another country can follow without asking.")
    decision("u4-decide", "Mistakes were made — by whom?",
             [("(a)", "Mistakes were made in the March figures."),
              ("(b)", "The figures were wrong."),
              ("(c)", "Two invoices were entered twice by our team, and we have corrected them.")])
    checklist("u4-review", "What you can do after Unit 4",
              ["form the passive with be + past participle",
               "choose the passive when the action matters most",
               "add 'by …' whenever the reader needs the name",
               "describe a procedure so an auditor can follow it"])


def unit5():
    branches("u5-start", "Five restaurants, five price lists", BRANCHES,
             note="The same dish, five prices — and five different costs behind them.")
    cards4("u5-words", "Comparing value",
           [("cheaper", "lower in price"), ("more expensive", "higher in price"),
            ("value", "what you get for what you pay"), ("as good as", "equal in quality")])
    compare2("u5-grammar", "Comparatives and superlatives",
             ("COMPARATIVE", ["two things", "Supplier B is cheaper",
                              "than Supplier A."], BLUE),
             ("SUPERLATIVE", ["three or more", "Supplier C is the best",
                              "value of the three."], GREEN),
             note="MODIFIERS: far cheaper · slightly better · almost as good as · not nearly as cheap as")
    dialogue("u5-listen", "Cheaper is not always better value",
             ("Can", "Istanbul"), ("Teresa", "Lisbon"),
             [(0, "Supplier B is fifteen per cent cheaper than Supplier A."),
              (1, "And the quality? Is it as good?"),
              (0, "Not quite. We would throw away more."),
              (1, "Then it is cheaper, but it is not better value.")])
    roleplay("u5-speak", "Choosing a supplier — role play",
             ("Card A — Buyer", ["compare two suppliers on price",
                                      "say which is cheaper, and by how much"]),
             ("Card B — Controller", ["ask about quality and waste",
                                            "say which offers the best value"]))
    compare2("u5-read", "Price and value are not the same",
             ("PRICE", ["what you pay today", "Supplier B costs less",
                        "per kilo than Supplier A."], ORANGE),
             ("VALUE", ["what you get for it", "Supplier A wastes less,",
                        "so it costs less per plate."], GREEN))
    flow("u5-write", "A comparison report",
         [("The options", "name what you compared"), ("The numbers", "give both figures"),
          ("The difference", "say how much, and which way"), ("The judgement", "say which is best value")],
         note="Every comparison needs both numbers, or it is an argument, not a fact.")
    cards4("u5-ra", "Pricing a dish on the menu",
           [("food cost", "what the ingredients cost"), ("waste", "what is thrown away"),
            ("margin", "what is left after costs"), ("menu price", "what the guest pays")],
           sub="Four numbers behind one line on a menu")
    doc("u5-consol", "Two suppliers compared",
        ["Supplier", "Price / kg", "Waste", "Cost / plate"],
        [["A", "EUR 8.40", "4%", "EUR 1.82"], ["B", "EUR 7.10", "19%", "EUR 1.95"],
         ["C", "EUR 8.90", "3%", "EUR 1.79"]],
        note="The cheapest price and the lowest cost per plate are not the same column.")
    decision("u5-decide", "The cheapest, or the best value?",
             [("(a)", "Choose Supplier B — it has the lowest price."),
              ("(b)", "Choose Supplier A — we have always used it."),
              ("(c)", "Choose Supplier C — it costs the least per plate, and we can show why.")])
    checklist("u5-review", "What you can do after Unit 5",
              ["compare two things with comparatives",
               "say which is best with superlatives",
               "use modifiers like far, slightly and almost as…as",
               "explain the difference between price and value"])


def unit6():
    doc("u6-start", "One figure, written five ways",
        ["Written", "Means", "Correct?", "Why"],
        [["2,000", "two thousand", "maybe", "rounded"],
         ["2.000", "two, in some countries", "no", "the separator"],
         ["1,987.40", "exactly", "yes", "the real figure"],
         ["about 2,000", "approximately", "yes, if said", "honest rounding"]],
        note="A number is only right when the reader reads it the way you meant it.")
    cards4("u6-words", "Saying how much, and how many",
           [("a few", "a small number of countable things"),
            ("a little", "a small amount of something uncountable"),
            ("several", "more than a few, but not many"),
            ("exactly", "with no rounding at all")])
    compare2("u6-grammar", "Countable, uncountable, and the articles",
             ("COUNTABLE", ["a few invoices", "many suppliers",
                            "several branches"], BLUE),
             ("UNCOUNTABLE", ["a little cash", "much revenue",
                              "some information"], TEAL),
             note="THE for a figure both of us know · A/AN the first time · no article for a general plural")
    dialogue("u6-listen", "Read me the figure again",
             ("Teresa", "Lisbon"), ("Mei", "Singapore"),
             [(0, "Read me the figure again, slowly."),
              (1, "One nine eight seven, point four zero — Singapore dollars."),
              (0, "And in euro, at this month's rate?"),
              (1, "One thousand, three hundred and sixty-one euros, eleven cents.")])
    roleplay("u6-speak", "Confirming a figure on a call — role play",
             ("Card A — Head office", ["ask for the figure digit by digit",
                                            "ask which currency it is in"]),
             ("Card B — Branch", ["read the figure back slowly",
                                       "give the currency and the rate"]))
    cards4("u6-read", "The same amount in five places",
           [("EUR 1,361.11", "the group's reporting currency"),
            ("KES 193,500", "Nairobi, to the shilling"),
            ("TRY 48,900", "Istanbul, to the lira"),
            ("SGD 1,987.40", "Singapore, to the cent")],
           sub="One sale, five ways of writing it")
    flow("u6-write", "Writing numbers so nobody misreads them",
         [("Currency", "always name it"), ("Separator", "use one style"),
          ("Decimals", "two places, or none"), ("Rounding", "say when you round")],
         note="Precision is politeness to the next person who reads your sheet.")
    doc("u6-ra", "Giving exact change", ["Bill", "Paid", "Change", "Note"],
        [["SGD 87.40", "SGD 100.00", "SGD 12.60", "count it back aloud"],
         ["EUR 54.25", "EUR 60.00", "EUR 5.75", "count it back aloud"],
         ["CAD 112.00", "CAD 120.00", "CAD 8.00", "no coins needed"]],
        note="Count the change back to the guest; it is the last number they remember.")
    doc("u6-consol", "The rounding difference", ["Branch", "Sum of lines", "Reported", "Difference"],
        [["Lisbon", "EUR 41,208.37", "EUR 41,208.37", "—"],
         ["Nairobi", "EUR 29,114.02", "EUR 29,114.00", "0.02"],
         ["Singapore", "EUR 33,760.49", "EUR 33,760.50", "(0.01)"]],
        note="Small differences are explained, never hidden — and never left to find themselves.")
    decision("u6-decide", "About two thousand, or exactly?",
             [("(a)", "Write 'about 2,000' in the audited accounts."),
              ("(b)", "Write '2,000' and say nothing."),
              ("(c)", "Write 'SGD 1,987.40' in the accounts, and 'about 2,000' in the summary.")])
    checklist("u6-review", "What you can do after Unit 6",
              ["use a few, a little, several and many correctly",
               "use a, an, the and no article correctly",
               "say and write numbers in any currency clearly",
               "explain a rounding difference instead of hiding it"])


def unit7():
    chart("u7-start", "Next year's budget, branch by branch",
          [("Lisbon", 1400), ("Nairobi", 980), ("Istanbul", 760), ("Singapore", 1150),
           ("Montréal", 420)],
          sub="Planned revenue, in thousands of euro",
          note="A budget is a promise about the future, written in numbers.")
    cards4("u7-words", "Planning ahead",
           [("forecast", "what you expect will happen"),
            ("budget", "what you plan to earn and spend"),
            ("estimate", "a careful guess at a number"),
            ("target", "the figure you are aiming at")])
    compare2("u7-grammar", "Three ways to talk about the future",
             ("WILL / GOING TO", ["a decision, a prediction,", "or a plan already made",
                                  "Costs will rise in June."], BLUE),
             ("PRESENT CONTINUOUS", ["a fixed arrangement", "We are presenting the",
                                     "budget on Thursday."], TEAL),
             note="GOING TO for evidence you can see: 'Prices are going to rise — the supplier wrote to us.'")
    dialogue("u7-listen", "Is that forecast realistic?",
             ("Mr Alvarez", "owner"), ("Teresa", "controller"),
             [(0, "Sales are going to double next year, I think."),
              (1, "They will grow, but not by that much."),
              (0, "What will you put in the budget?"),
              (1, "Twelve per cent — and I will show you how I got there.")])
    roleplay("u7-speak", "Presenting a forecast — role play",
             ("Card A — Owner", ["ask what the numbers will be next year",
                                      "ask what could go wrong"]),
             ("Card B — Controller", ["give a realistic forecast",
                                            "say what it is based on"]))
    chart("u7-read", "An optimistic and a realistic forecast",
          [("last year", 1180), ("optimistic", 2360), ("realistic", 1322)],
          sub="Revenue, in thousands of euro",
          note="An optimistic forecast is pleasant to present and expensive to miss.")
    flow("u7-write", "Writing a forecast note",
         [("The figure", "say what you expect"), ("The basis", "say what it rests on"),
          ("The risk", "say what could change it"), ("The check", "say when you will review it")],
         note="Every forecast is an opinion with a method attached.")
    chart("u7-ra", "What the branch expects next quarter",
          [("Oct", 96), ("Nov", 104), ("Dec", 148), ("Jan", 88)],
          sub="Covers per evening, on average",
          note="December pays for January — the cash plan has to know that.")
    doc("u7-consol", "The budget table", ["Line", "This year", "Next year", "Change"],
        [["Revenue", "EUR 4,210,000", "EUR 4,715,000", "+12%"],
         ["Food cost", "EUR 1,389,300", "EUR 1,603,100", "+15%"],
         ["Staff", "EUR 1,178,800", "EUR 1,273,050", "+8%"],
         ["Profit", "EUR 421,000", "EUR 424,350", "+1%"]],
        note="Revenue up twelve per cent, profit up one — a budget tells you where it went.")
    decision("u7-decide", "Which forecast goes to the bank?",
             [("(a)", "The optimistic one — it is a better story."),
              ("(b)", "The lowest one — nobody can be disappointed."),
              ("(c)", "The realistic one, with the method and the risks written beside it.")])
    checklist("u7-review", "What you can do after Unit 7",
              ["use will, going to and the present continuous for the future",
               "present a budget and a forecast",
               "say what a forecast is based on",
               "describe what could change it"])


def unit8():
    cards4("u8-start", "Must, must not, might",
           [("must", "it is an obligation"), ("must not", "it is forbidden"),
            ("don't have to", "it is not necessary"), ("might", "it is possible")],
           sub="Four small words that decide what a business may do")
    cards4("u8-words", "The words of the rules",
           [("obligation", "something you are required to do"),
            ("permission", "being allowed to do something"),
            ("prohibition", "being forbidden to do something"),
            ("deduction", "a conclusion from the evidence")])
    compare2("u8-grammar", "Obligation, prohibition and possibility",
             ("MUST / HAVE TO", ["an obligation", "We must charge VAT",
                                 "on every invoice."], BLUE),
             ("MUST NOT / DON'T HAVE TO", ["forbidden / not necessary", "We must not share the data.",
                                           "We don't have to file monthly."], RED),
             note="MIGHT / MAY / COULD for what is possible · SHOULD for what is advisable")
    dialogue("u8-listen", "Five countries, five rule books",
             ("Teresa", "Lisbon"), ("Daniel", "Nairobi"),
             [(0, "Do we have to file a return every month here?"),
              (1, "In Nairobi, yes. In Lisbon you don't have to — it is quarterly."),
              (0, "And the data? May we send the guest list?"),
              (1, "No. We must not send personal data without consent.")])
    roleplay("u8-speak", "Explaining a rule — role play",
             ("Card A — New manager", ["ask what you must do",
                                            "ask what you must not do"]),
             ("Card B — Controller", ["explain one obligation",
                                            "explain one prohibition, and why"]))
    cards4("u8-read", "The same company, five rule books",
           [("Lisbon", "VAT quarterly"), ("Nairobi", "VAT monthly"),
            ("Istanbul", "e-invoice required"), ("Singapore", "GST, not VAT")],
           sub="What is required in one branch is not required in the next")
    flow("u8-write", "Writing a policy note",
         [("What", "state the rule"), ("Who", "say whom it applies to"),
          ("Why", "give the reason"), ("What if not", "say what happens")],
         note="A rule nobody can read is a rule nobody can follow.")
    cards4("u8-ra", "Confidentiality on the floor",
           [("guest data", "must not leave the system"),
            ("card numbers", "must never be written down"),
            ("staff details", "may be shared with payroll only"),
            ("a complaint", "should be recorded, not discussed")],
           sub="What the floor team must, must not and may do")
    doc("u8-consol", "A compliance checklist", ["Requirement", "Branch", "Frequency", "Status"],
        [["VAT return", "Lisbon", "quarterly", "filed"],
         ["VAT return", "Nairobi", "monthly", "filed"],
         ["E-invoice", "Istanbul", "per invoice", "in progress"],
         ["GST return", "Singapore", "quarterly", "due"]],
        note="Compliance is five calendars, not one.")
    decision("u8-decide", "A colleague asks for the guest list",
             [("(a)", "Send it — she works for the company."),
              ("(b)", "Send part of it, with the names removed."),
              ("(c)", "Send nothing, explain the rule, and offer the figures she actually needs.")])
    checklist("u8-review", "What you can do after Unit 8",
              ["use must, have to and must not correctly",
               "say what is not necessary with don't have to",
               "use might, may and could for what is possible",
               "explain a rule and the reason behind it"])


def unit9():
    flow("u9-start", "The month-end close, five branches",
         [("Day 1", "branches post"), ("Day 2", "accounts reconcile"),
          ("Day 3", "the group converts"), ("Day 4", "the owner signs")],
         note="Five time zones, one deadline — if one branch is late, everybody is late.")
    cards4("u9-words", "Closing the month",
           [("close (v)", "to finish a period's accounts"),
            ("reconcile", "to make two records agree"),
            ("deadline", "the time by which work must be finished"),
            ("submit", "to send work in officially")])
    compare2("u9-grammar", "If, when and until",
             ("FIRST CONDITIONAL", ["a real possibility", "If Nairobi posts today,",
                                    "we will close on Friday."], BLUE),
             ("TIME CLAUSES", ["when, as soon as, until", "We will not close until",
                               "every branch has posted."], TEAL),
             note="Use the PRESENT after if, when, as soon as and until — never 'if … will'")
    dialogue("u9-listen", "If you post today, we close on Friday",
             ("Teresa", "Lisbon"), ("Daniel", "Nairobi"),
             [(0, "If you post the Nairobi journals today, we will close on Friday."),
              (1, "And if the bank statement arrives late?"),
              (0, "Then we will close on Monday. We never close with a gap."),
              (1, "Understood. I will send them as soon as they arrive.")])
    roleplay("u9-speak", "Agreeing the close — role play",
             ("Card A — Group", ["say what will happen if each branch posts on time",
                                      "say what will happen if one is late"]),
             ("Card B — Branch", ["ask what you must send, and when",
                                       "say when you will send it"]))
    flow("u9-read", "The order of the close",
         [("Post", "every entry in"), ("Reconcile", "bank and ledger agree"),
          ("Convert", "each currency to euro"), ("Review", "the controller signs")],
         note="Nothing moves to the next step until the step before it is clean.")
    flow("u9-write", "A close plan",
         [("Who", "name each branch"), ("What", "say what each must send"),
          ("When", "give the hour and the zone"), ("If late", "say what happens")],
         note="A plan that does not say what happens if someone is late is not a plan.")
    flow("u9-ra", "An honest close",
         [("Count", "the till is counted"), ("Compare", "cash against the system"),
          ("Explain", "any difference is written"), ("Sign", "the manager signs")],
         note="A clean close is not a close with no differences; it is one with no unexplained ones.")
    doc("u9-consol", "The close calendar", ["Branch", "Local deadline", "In Lisbon time", "Status"],
        [["Singapore", "18:00 SGT", "11:00", "posted"],
         ["Nairobi", "17:00 EAT", "15:00", "posted"],
         ["Istanbul", "18:00 TRT", "15:00", "waiting"],
         ["Montréal", "17:00 EDT", "22:00", "not due yet"]],
        note="Every hour is written twice, so nobody has to do the arithmetic at midnight.")
    decision("u9-decide", "Close with a difference, or hold?",
             [("(a)", "Close on time and fix the difference next month."),
              ("(b)", "Change the figure so the accounts agree."),
              ("(c)", "Hold the close, explain the difference, and tell the owner today.")])
    checklist("u9-review", "What you can do after Unit 9",
              ["use the first conditional for a real possibility",
               "use when, as soon as and until with the present",
               "describe the steps of a month-end close",
               "say what will happen if a deadline is missed"])


def unit10():
    cards4("u10-start", "If we were bigger",
           [("if we were bigger", "an imaginary situation"),
            ("we would need", "the result of imagining it"),
            ("I wish we had", "a regret about now"),
            ("if I were you", "advice to a colleague")],
           sub="Imagining, wishing, and advising")
    cards4("u10-words", "Imagining and planning",
           [("imagine", "to picture something that is not real"),
            ("invest", "to put money in, hoping it grows"),
            ("risk", "the chance that something goes wrong"),
            ("wish", "to want something that is not so")])
    compare2("u10-grammar", "The second conditional and wish",
             ("SECOND CONDITIONAL", ["imaginary now or future", "If we opened a sixth",
                                     "restaurant, we would need a loan."], BLUE),
             ("WISH", ["a regret about now", "I wish we had more cash.",
                       "I wish I were in Lisbon."], PURPLE),
             note="Past form, present meaning · 'If I were you, I would …' is advice, not a condition")
    dialogue("u10-listen", "If we opened a sixth restaurant",
             ("Clara", "Lisbon"), ("Teresa", "controller"),
             [(0, "If we opened a sixth restaurant, where would you put it?"),
              (1, "Somewhere we already know. I wish we had more cash."),
              (0, "And if an investor offered it?"),
              (1, "Then I would ask what they wanted in return.")])
    roleplay("u10-speak", "The big idea — role play",
             ("Card A — Dreamer", ["say what you would do if the group were bigger",
                                        "say what you wish you had now"]),
             ("Card B — Controller", ["ask what it would cost",
                                            "give advice with 'If I were you…'"]))
    cards4("u10-read", "Growing carefully",
           [("too fast", "cash runs out before the growth arrives"),
            ("too slow", "a good site goes to somebody else"),
            ("the test", "could we survive a bad quarter?"),
            ("the answer", "grow where you already know the ground")],
           sub="Four things an accountant asks before a business grows")
    flow("u10-write", "A proposal",
         [("The idea", "what you would do"), ("The cost", "what it would need"),
          ("The risk", "what could go wrong"), ("The ask", "what you want decided")],
         note="A proposal is an imagined future with real numbers in it.")
    cards4("u10-ra", "The five values of an honest accountant",
           [("Be accurate.", "every number exactly right"),
            ("Be honest.", "never hide a mistake"),
            ("Keep good records.", "so nothing is lost"),
            ("Protect private data.", "and comply with the law")],
           sub="Five values, one purpose: trust")
    doc("u10-consol", "A risk table", ["Risk", "If it happened", "How likely", "What we would do"],
        [["A branch loses its lease", "we would lose a site", "low", "keep three months' rent"],
         ["Food costs rise 20%", "margins would fall", "medium", "re-price the menu"],
         ["A currency falls 15%", "group revenue would drop", "medium", "hold euro reserves"],
         ["The system fails", "we would write by hand", "low", "keep paper slips"]],
        note="A risk you have imagined in advance is a risk you can price.")
    decision("u10-decide", "The investor's condition",
             [("(a)", "Accept — the money would let us open two restaurants."),
              ("(b)", "Refuse — we would rather stay small."),
              ("(c)", "Accept only if the figures stay ours to publish, and say so in writing.")])
    checklist("u10-review", "What you can do after this course",
              ["use the second conditional for imaginary situations",
               "use wish for a regret about now",
               "give advice with 'If I were you…'",
               "weigh a plan, a cost and a risk in English"])


def main():
    for f in (unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10):
        f()
    n = len([x for x in os.listdir(OUT) if x.endswith(".png") and not x.startswith("_")])
    print(f"{n} illustrations written to {OUT}")


if __name__ == "__main__":
    main()
