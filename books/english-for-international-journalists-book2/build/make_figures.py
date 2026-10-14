#!/usr/bin/env python3
"""
make_figures.py — every illustration in Book 2.

The recurring figures carry the course furniture; each unit adds nine of its own, to the
source's own ratio of 28 figures a unit.
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figures import *
from matplotlib.patches import Rectangle, FancyBboxPatch, Circle, Wedge, Polygon, Ellipse

# ================================================================ layout templates

def four_words(name, title, items, footer):
    fig, ax = panel(300, title, footer)
    top = ax._top
    for i, (word, gloss, col) in enumerate(items):
        x = 40 + i * 358
        words, line, wrapped = gloss.split(), "", []
        for w in words:
            if len(line + " " + w) > 22:
                wrapped.append(line); line = w
            else:
                line = (line + " " + w).strip()
        wrapped.append(line)
        card(ax, x, top - 240, 326, 190, title=word, lines=wrapped, accent=col,
             title_colour=col, fs=18)
    save(fig, name)


def concept_two(name, title, left, right, footer, lcol=BLUE, rcol=RED):
    fig, ax = panel(400, title, footer)
    top = ax._top
    card(ax, 60, top - 330, 620, 280, title=left[0], lines=left[1:], accent=lcol,
         title_colour=lcol, fs=18)
    card(ax, 820, top - 330, 620, 280, title=right[0], lines=right[1:], accent=rcol,
         title_colour=rcol, fs=18)
    arrow(ax, 700, top - 190, 800, top - 190)
    save(fig, name)


def concept_one(name, title, head, lines, footer, col=BLUE):
    fig, ax = panel(340, title, footer)
    top = ax._top
    card(ax, 60, top - 290, 1380, 250, title=head, lines=lines, accent=col,
         title_colour=col, fs=19)
    save(fig, name)


def flow(name, title, steps, footer, col=GOLD):
    fig, ax = panel(350, title, footer)
    top = ax._top
    n = len(steps)
    w = (1500 - 80 - (n - 1) * 56) / n
    for i, (h, s) in enumerate(steps):
        x = 40 + i * (w + 56)
        card(ax, x, top - 290, w, 240, title=h, lines=[s], accent=col,
             title_colour=NAVY, fs=16, align="center")
        if i < n - 1:
            arrow(ax, x + w + 8, top - 170, x + w + 48, top - 170)
    save(fig, name)


def case_card(name, title, quote, speaker, verdict_good, verdict_bad, footer):
    fig, ax = panel(350, title, footer)
    top = ax._top
    avatar(ax, 150, top - 130, s=1.0, skin=1, hair=2, shirt=GOLD, name=speaker)
    ax.add_patch(FancyBboxPatch((270, top - 200), 560, 150,
                                boxstyle="round,pad=0,rounding_size=14",
                                facecolor="#FBF7EE", edgecolor=GOLD, lw=2, zorder=2))
    ax.add_patch(Polygon([[270, top - 138], [240, top - 124], [270, top - 108]],
                         facecolor="#FBF7EE", edgecolor=GOLD, lw=2, zorder=3))
    ax.text(550, top - 125, quote, ha="center", va="center", fontsize=18,
            color=INK, style="italic", zorder=4)
    pill(ax, 890, top - 145, 270, 60, verdict_bad, fill=RED)
    pill(ax, 1180, top - 145, 270, 60, verdict_good, fill=GREEN)
    ax.text(1025, top - 160, "✗", ha="center", va="center", fontsize=1, color=GROUND)
    save(fig, name)


def checklist_card(name, title, items, footer, col=GREEN):
    fig, ax = panel(120 + 58 * len(items), title, footer)
    top = ax._top
    ax.add_patch(FancyBboxPatch((60, 20), 1380, top - 40,
                                boxstyle="round,pad=0,rounding_size=12",
                                facecolor=PANEL, edgecolor=LINE, lw=2, zorder=2))
    y = top - 72
    for it in items:
        ax.add_patch(Rectangle((100, y - 14), 28, 28, facecolor="none",
                               edgecolor=col, lw=3, zorder=3))
        ax.text(152, y, it, ha="left", va="center", fontsize=19, color=INK, zorder=3)
        y -= 58
    save(fig, name)


def phone_card(name, title, header, lines, footer, header_fill=RED):
    fig, ax = panel(470, title, footer)
    top = ax._top
    phone(ax, 110, 24, 440, top - 50, lines, header=header, header_fill=header_fill)
    card(ax, 640, top - 320, 800, 270,
         title="What makes it work", lines=[l for l, b in lines if b][:3],
         accent=GOLD, title_colour=GOLD, fs=16)
    save(fig, name)


def bar_chart(name, title, labels, values, footer, note=None, col=BLUE):
    fig, ax = panel(450, title, footer)
    top = ax._top
    base, h = 110, top - 210
    mx = max(values) * 1.25
    bw = 1300 / (len(labels) * 1.7)
    for i, (lab, v) in enumerate(zip(labels, values)):
        x = 110 + i * bw * 1.7
        bh = h * v / mx
        ax.add_patch(Rectangle((x, base), bw, bh, color=col if i < len(labels) - 1 else RED,
                               zorder=3))
        ax.text(x + bw / 2, base + bh + 18, f"{v:,}", ha="center", va="bottom",
                fontsize=18, fontweight="bold", color=NAVY, zorder=4)
        ax.text(x + bw / 2, base - 16, lab, ha="center", va="top", fontsize=15,
                color=GREY, zorder=4)
    ax.plot([80, 1440], [base, base], color=NAVY, lw=3, zorder=4)
    if note:
        ax.text(1440, top - 26, note, ha="right", va="top", fontsize=15,
                color=GREY, style="italic", zorder=4)
    save(fig, name)


def map_card(name, title, footer, closed=False, people=0, pins=()):
    fig, ax = panel(430, title, footer)
    top = ax._top
    bridge(ax, 750, top - 215, w=840, closed=closed, people=people)
    for x, lab, col in pins:
        ax.add_patch(Circle((x, top - 60), 13, color=col, zorder=6))
        ax.text(x, top - 36, lab, ha="center", va="bottom", fontsize=15,
                fontweight="bold", color=col, zorder=6)
    save(fig, name)


def people_row(name, title, people, footer):
    fig, ax = panel(390, title, footer)
    top = ax._top
    n = len(people)
    for i, (nm, role, shirt, scarf) in enumerate(people):
        x = 1500 / (n + 1) * (i + 1)
        avatar(ax, x, top - 140, s=1.15, skin=i % 4, hair=i % 4, shirt=shirt,
               scarf=scarf, name=nm, role=role)
    save(fig, name)


# ================================================================ the 20 recurring

CAST = [("Ana", "editor-in-chief", GOLD, False),
        ("Daniel", "world editor", BLUE, False),
        ("Mira", "correspondent", RED, False),
        ("Tomas", "field & video", GREEN, False),
        ("Priya", "verification", PURPLE, True),
        ("Hana", "photojournalist", NAVY, False),
        ("Leila", "digital & social", TEAL, True),
        ("Jonas", "radio & podcast", BROWN, False)]


def g_team():
    fig, ax = panel(650, "The Atlas Wire team",
                    "The Atlas Wire team. These people are invented — you meet them through the unit.")
    top = ax._top
    for i, (nm, role, shirt, scarf) in enumerate(CAST):
        x = 190 + (i % 4) * 374
        y = top - 150 - (i // 4) * 300
        avatar(ax, x, y, s=.95, skin=i % 4, hair=(i + 1) % 4, shirt=shirt,
               scarf=scarf, name=nm, role=role)
    save(fig, "g-team")


def g_meeting():
    fig, ax = panel(410, "The morning conference",
                    "where the day's story gets chosen")
    top = ax._top
    for i, (nm, role, shirt, scarf) in enumerate(CAST[:5]):
        avatar(ax, 290 + i * 230, top - 110, s=.78, skin=i % 4, hair=i % 4,
               shirt=shirt, scarf=scarf, name=nm)
    ax.add_patch(FancyBboxPatch((250, 86), 1000, 104,
                                boxstyle="round,pad=0,rounding_size=20",
                                facecolor="#CBB89A", edgecolor="#A9926F", lw=2, zorder=2))
    pill(ax, 610, 114, 280, 50, "TODAY'S STORY", fill=RED, fs=17)
    save(fig, "g-meeting")


def g_newsroom():
    fig, ax = panel(420, "Inside the world desk",
                    "screens, clocks, and one deadline after another")
    top = ax._top
    for i, (city, t) in enumerate([("GENEVA", "09:00"), ("NAIROBI", "11:00"),
                                   ("DHAKA", "14:00"), ("BOGOTÁ", "03:00")]):
        x = 120 + i * 220
        ax.add_patch(Circle((x, top - 70), 44, facecolor=PANEL, edgecolor=NAVY,
                            lw=3, zorder=3))
        ax.plot([x, x], [top - 70, top - 40], color=NAVY, lw=4, zorder=4)
        ax.plot([x, x + 24], [top - 70, top - 78], color=RED, lw=4, zorder=4)
        ax.text(x, top - 130, city, ha="center", fontsize=13, color=GREY,
                fontweight="bold", zorder=4)
        ax.text(x, top - 152, t, ha="center", fontsize=13, color=NAVY, zorder=4)
    for i in range(3):
        x = 1020 + 0
        card(ax, 980, top - 110 - i * 78, 460, 64,
             title=["LIVE from the crossing", "Photo desk: 24 new frames",
                    "Deadline 18:00 GMT"][i], lines=[], accent=[RED, BLUE, GOLD][i], fs=16)
    for i in range(3):
        avatar(ax, 200 + i * 230, 92, s=.52, skin=i, hair=i, shirt=[BLUE, RED, GREEN][i])
    save(fig, "g-newsroom")


def g_hownews():
    flow("g-hownews", "How news travels",
         [("The scene", "something happens"),
          ("The reporter", "finds and checks it"),
          ("The wire", "sends it out"),
          ("The world", "readers see it")],
         "the news travels — and someone has to check it on the way")


def g_pageflow():
    flow("g-pageflow", "From the field to the page",
         [("Notes", "what you saw"), ("Story", "what you write"),
          ("Edit", "what is checked"), ("Front page", "what readers read")],
         "the same story, four times over")


def g_frontpage_parts():
    fig, ax = panel(520, "The parts of a front page",
                    "the furniture of a front page")
    top = ax._top
    frontpage(ax, 110, 26, 1030, top - 56)
    save(fig, "g-frontpage-parts")


def g_website():
    fig, ax = panel(500, "A news website home page",
                    "the same parts, on a screen")
    top = ax._top
    ax.add_patch(FancyBboxPatch((90, 24), 1320, top - 54,
                                boxstyle="round,pad=0,rounding_size=12",
                                facecolor=PANEL, edgecolor=NAVY, lw=3, zorder=2))
    ax.add_patch(Rectangle((92, top - 92), 1316, 62, color=NAVY, zorder=3))
    ax.text(124, top - 61, "ATLAS WIRE", color="white", fontsize=22,
            fontweight="bold", family="serif", va="center", zorder=4)
    for i, m in enumerate(["World", "Politics", "Economy", "Climate", "Culture", "Sport"]):
        ax.text(620 + i * 128, top - 61, m, color="#9FB0BA", fontsize=15,
                va="center", zorder=4)
    ax.add_patch(Rectangle((124, 110), 560, top - 230, facecolor="#CBD8DD",
                           edgecolor=LINE, zorder=3))
    ax.text(404, 92, "photo", ha="center", fontsize=14, color=GREY, zorder=4)
    ax.text(724, top - 140, "A crossing comes home", fontsize=24, fontweight="bold",
            family="serif", color=NAVY, va="top", zorder=4)
    ax.text(724, top - 184, "By Mira Sandoval", fontsize=15, color=RED,
            style="italic", va="top", zorder=4)
    for i in range(6):
        ax.plot([724, 1370], [top - 222 - i * 22] * 2, color="#C9D2D6", lw=4, zorder=4)
    pill(ax, 724, 112, 190, 44, "Read more", fill=RED, fs=16)
    for lab, y in (("logo", top - 61), ("menu", top - 61)):
        pass
    save(fig, "g-website")


def g_phonealert():
    phone_card("g-phonealert", "A news alert on a phone", "BREAKING",
               [("The Kalina crossing is open", True),
                ("again after seven years.", True),
                ("", False),
                ("Families crossed this morning.", False),
                ("— @AtlasWire", False)],
               "short, true, and fast")


def g_fivew():
    fig, ax = panel(430, "A reporter's 5-W notes",
                    "six questions, six short answers")
    top = ax._top
    qs = [("Who?", "families, a stall-holder"), ("What?", "the crossing reopened"),
          ("When?", "this morning"), ("Where?", "the Kalina bridge"),
          ("Why?", "the repairs are finished"), ("How?", "we went and asked")]
    for i, (q, a) in enumerate(qs):
        x = 60 + (i % 3) * 470
        y = top - 150 - (i // 3) * 185
        card(ax, x, y, 440, 150, title=q, lines=[a], accent=RED,
             title_colour=RED, fs=17)
    save(fig, "g-fivew")


def g_introduce():
    fig, ax = panel(400, "Introducing yourself at work",
                    "name, outlet, beat — in that order")
    top = ax._top
    avatar(ax, 330, top - 110, s=.95, skin=0, hair=1, shirt=RED, name="Mira",
           role="Atlas Wire")
    avatar(ax, 1170, top - 110, s=.95, skin=2, hair=0, shirt=BLUE, name="a colleague")
    ax.add_patch(FancyBboxPatch((470, top - 160), 560, 100,
                                boxstyle="round,pad=0,rounding_size=14",
                                facecolor=PANEL, edgecolor=BLUE, lw=2, zorder=3))
    ax.text(750, top - 110, "“Hello. I am Mira, from Atlas Wire.”",
            ha="center", va="center", fontsize=18, color=INK, zorder=4)
    save(fig, "g-introduce")


def g_interview():
    fig, ax = panel(420, "An interview",
                    "ask, listen, write it down")
    top = ax._top
    avatar(ax, 300, top - 110, s=.95, skin=0, hair=1, shirt=RED, name="reporter")
    avatar(ax, 760, top - 110, s=.95, skin=3, hair=3, shirt=GOLD, scarf=True,
           name="guest")
    arrow(ax, 390, top - 70, 670, top - 70, colour=BLUE)
    ax.text(530, top - 48, "a question", ha="center", fontsize=15, color=BLUE, zorder=5)
    arrow(ax, 670, top - 140, 390, top - 140, colour=GOLD)
    ax.text(530, top - 170, "an answer", ha="center", fontsize=15, color=GOLD, zorder=5)
    card(ax, 1000, top - 210, 440, 170, title="Notebook",
         lines=["“It is our home.”", "— Elena, café owner"], accent=NAVY, fs=16)
    save(fig, "g-interview")


def g_cando():
    checklist_card("g-cando", "Can-Do",
                   ["I can do it on my own.", "I can do it with help.",
                    "I need more practice."],
                   "tick what is true for you")


def g_template():
    fig, ax = panel(460, "The assignment template",
                    "build it part by part")
    top = ax._top
    rows = ["Headline", "Byline", "Lead — the five Ws", "The story",
            "One exact quote, with its source"]
    y = top - 72
    for i, r in enumerate(rows):
        ax.add_patch(FancyBboxPatch((100, y - 54), 1300, 60,
                                    boxstyle="round,pad=0,rounding_size=8",
                                    facecolor=PANEL, edgecolor=LINE, lw=2, zorder=2))
        ax.add_patch(Rectangle((100, y - 44), 8, 48, color=[RED, BLUE, GOLD, GREEN, PURPLE][i],
                               zorder=3))
        ax.text(132, y - 25, r, ha="left", va="center", fontsize=19,
                fontweight="bold", color=NAVY, zorder=4)
        ax.plot([560, 1370], [y - 25] * 2, color="#D8DEE1", lw=3, zorder=3)
        y -= 78
    save(fig, "g-template")


def g_model():
    fig, ax = panel(400, "A model to work from",
                    "a shape to work against")
    top = ax._top
    card(ax, 90, top - 340, 640, 290, title="MODEL",
         lines=["A crossing comes home", "By Mira Sandoval, Atlas Wire",
                "Kalina, the bridge that was closed", "for seven years, is open again."],
         accent=GOLD, title_colour=GOLD, fs=16)
    card(ax, 790, top - 340, 640, 290, title="YOURS",
         lines=["_______________________", "By ____________________",
                "_______________________", "_______________________"],
         accent=RED, title_colour=RED, fs=16)
    arrow(ax, 745, top - 190, 775, top - 190)
    save(fig, "g-model")


def g_reach():
    fig, ax = panel(420, "One story, many readers",
                    "one story, many countries, one moment")
    top = ax._top
    ax.add_patch(Circle((250, top - 120), 56, color=RED, zorder=3))
    ax.text(250, top - 120, "1", ha="center", va="center", fontsize=30,
            fontweight="bold", color="white", zorder=4)
    ax.text(250, top - 206, "one story", ha="center", fontsize=16, color=GREY, zorder=4)
    for i in range(10):
        x = 560 + (i % 5) * 190
        y = top - 70 - (i // 5) * 120
        ax.add_patch(Circle((x, y), 26, color=SKIN[i % 4], zorder=4))
        ax.add_patch(Wedge((x, y - 48), 38, 0, 180,
                           color=[BLUE, GREEN, GOLD, PURPLE, TEAL][i % 5], zorder=3))
        arrow(ax, 320, top - 120, x - 40, y - 10, colour="#C8D2D6", lw=2)
    save(fig, "g-reach")


def g_studio():
    fig, ax = panel(420, "In the studio",
                    "the desk and the scene, talking")
    top = ax._top
    card(ax, 90, top - 310, 560, 250, title="STUDIO",
         lines=["“Mira, are you there?”", "“What is happening now?”"],
         accent=BLUE, title_colour=BLUE, fs=17)
    card(ax, 860, top - 310, 560, 250, title="THE SCENE",
         lines=["“The crossing is open.”", "“A big crowd is here.”"],
         accent=RED, title_colour=RED, fs=17)
    arrow(ax, 670, top - 160, 840, top - 160, colour=BLUE)
    arrow(ax, 840, top - 230, 670, top - 230, colour=RED)
    save(fig, "g-studio")


def g_notes():
    fig, ax = panel(390, "Field notes",
                    "what you can see, right now")
    top = ax._top
    ax.add_patch(FancyBboxPatch((300, 24), 900, top - 54,
                                boxstyle="round,pad=0,rounding_size=12",
                                facecolor="#FFFDF6", edgecolor=GOLD, lw=3, zorder=2))
    for i, (k, v) in enumerate([("Place:", "the Kalina bridge"),
                                ("Now:", "the barrier is up; families crossing"),
                                ("Next:", "going to interview a café owner")]):
        y = top - 110 - i * 85
        ax.text(350, y, k, ha="left", va="center", fontsize=19, fontweight="bold",
                color=RED, zorder=4)
        ax.text(510, y, v, ha="left", va="center", fontsize=18, color=INK, zorder=4)
    save(fig, "g-notes")


def g_code():
    fig, ax = panel(400, "The Code",
                    "five words, every newsroom")
    top = ax._top
    vals = [("Accuracy", "the facts are correct", RED),
            ("Honesty", "you tell the truth", GOLD),
            ("Fairness", "you give more than one side", BLUE),
            ("Respect", "you treat people well", GREEN),
            ("Independence", "no one controls your news", PURPLE)]
    for i, (h, s, c) in enumerate(vals):
        x = 30 + i * 290
        card(ax, x, top - 320, 272, 270, title=h, lines=[], accent=c,
             title_colour=c, fs=17)
        ax.text(x + 22, top - 125, s, ha="left", va="top", fontsize=14,
                color=GREY, zorder=4, wrap=True)
    save(fig, "g-code")


def g_sources():
    fig, ax = panel(400, "Who said it?",
                    "every fact, a name beside it")
    top = ax._top
    card(ax, 70, top - 320, 620, 270, title="A fact",
         lines=["“A hundred families", "have crossed back.”"], accent=NAVY, fs=18)
    card(ax, 810, top - 320, 620, 270, title="…and its source",
         lines=["according to the", "Crossing Office"], accent=RED,
         title_colour=RED, fs=18)
    arrow(ax, 710, top - 190, 790, top - 190, colour=RED)
    save(fig, "g-sources")


def g_bridge():
    map_card("g-bridge", "The Kalina crossing",
             "Kalina and the river Vara are invented, for practice. The journalism is real.",
             closed=False, people=6)


RECURRING = [g_team, g_meeting, g_newsroom, g_hownews, g_pageflow, g_frontpage_parts,
             g_website, g_phonealert, g_fivew, g_introduce, g_interview, g_cando,
             g_template, g_model, g_reach, g_studio, g_notes, g_code, g_sources, g_bridge]




# ================================================================ Book 2 templates

OUTLETS = [("Kalina Daily", "the local paper", GREEN),
           ("Atlas Wire", "the agency (us)", RED),
           ("River Basin Network", "the regional network", BLUE),
           ("the Meridian Post", "the international daily", PURPLE)]


def three_tier(name, title, tiers, footer):
    """The partner map: who sits where, and how far each one reaches."""
    fig, ax = panel(360, title, footer)
    top = ax._top
    n = len(tiers)
    w = (1500 - 80 - (n - 1) * 36) / n
    mx = max(t[3] for t in tiers)
    for i, (nm, role, col, reach) in enumerate(tiers):
        x = 40 + i * (w + 36)
        card(ax, x, top - 300, w, 250, title=nm, lines=[role], accent=col,
             title_colour=col, fs=16, align="center")
        bw = max(18, (w - 90) * reach / mx)
        ax.add_patch(Rectangle((x + 45, top - 240), bw, 26, color=col, zorder=4))
        ax.text(x + w / 2, top - 268, f"reach: {reach}", ha="center", va="top",
                fontsize=13, color=GREY, zorder=4)
    save(fig, name)


def timezones(name, title, zones, footer):
    """The same moment, read off three clocks."""
    fig, ax = panel(380, title, footer)
    top = ax._top
    n = len(zones)
    for i, (city, hh, mm) in enumerate(zones):
        x = 1500 / (n + 1) * (i + 1)
        y = top - 150
        ax.add_patch(Circle((x, y), 86, facecolor=PANEL, edgecolor=NAVY, lw=4, zorder=3))
        for t in range(12):
            a = math.pi / 2 - t * math.pi / 6
            ax.plot([x + 70 * math.cos(a), x + 80 * math.cos(a)],
                    [y + 70 * math.sin(a), y + 80 * math.sin(a)],
                    color="#9FB0BA", lw=2, zorder=4)
        ha = math.pi / 2 - (hh % 12 + mm / 60) * math.pi / 6
        ma = math.pi / 2 - mm * math.pi / 30
        ax.plot([x, x + 46 * math.cos(ha)], [y, y + 46 * math.sin(ha)],
                color=NAVY, lw=7, solid_capstyle="round", zorder=5)
        ax.plot([x, x + 66 * math.cos(ma)], [y, y + 66 * math.sin(ma)],
                color=RED, lw=5, solid_capstyle="round", zorder=5)
        ax.add_patch(Circle((x, y), 7, color=NAVY, zorder=6))
        ax.text(x, y - 116, city, ha="center", va="top", fontsize=18,
                fontweight="bold", color=NAVY, zorder=5)
        ax.text(x, y - 148, f"{hh:02d}:{mm:02d}", ha="center", va="top",
                fontsize=16, color=RED, zorder=5)
    save(fig, name)


def ladder(name, title, rungs, footer):
    """The verification ladder: from a claim to a fact, one rung at a time."""
    h = 66 + 78 * len(rungs)
    fig, ax = panel(h, title, footer)
    y = ax._top - h + 44          # the block of rungs, centred in the panel
    for i, (step, note) in enumerate(rungs):
        col = [GREY, BLUE, GOLD, GREEN][min(i, 3)]
        ax.add_patch(FancyBboxPatch((120 + i * 40, y), 1180 - i * 80, 56,
                                    boxstyle="round,pad=0,rounding_size=10",
                                    facecolor=PANEL, edgecolor=col, lw=3, zorder=3))
        ax.text(150 + i * 40, y + 28, step, ha="left", va="center", fontsize=18,
                fontweight="bold", color=col, zorder=4)
        ax.text(1280 - i * 40, y + 28, note, ha="right", va="center", fontsize=15,
                color=GREY, zorder=4)
        if i:
            arrow(ax, 750, y - 22, 750, y - 3, colour=col, lw=3)
        y += 78
    save(fig, name)


def scale_compare(name, title, items, footer):
    """A fair comparison: one bar each, on the same scale."""
    h = 96 + 66 * len(items)
    fig, ax = panel(h, title, footer)
    mx = max(v for _, v, _ in items)
    y = ax._top - h / 2 + 32 * (len(items) - 1)   # bars centred in the panel
    for lab, v, note in items:
        ax.text(60, y, lab, ha="left", va="center", fontsize=17, color=NAVY,
                fontweight="bold", zorder=4)
        bw = 600 * v / mx          # leaves room for the note beside the longest bar
        ax.add_patch(Rectangle((520, y - 18), bw, 36, color=BLUE, zorder=3))
        ax.text(530 + bw, y, note, ha="left", va="center", fontsize=15,
                color=GREY, zorder=4)
        y -= 64
    save(fig, name)


def credit_card(name, title, lines, footer):
    """A shared byline, with everyone on it."""
    fig, ax = panel(330, title, footer)
    top = ax._top
    ax.add_patch(FancyBboxPatch((220, 36), 1060, top - 70,
                                boxstyle="round,pad=0,rounding_size=14",
                                facecolor=PANEL, edgecolor=NAVY, lw=3, zorder=2))
    ax.text(750, top - 70, "A crossing, a basin, a year", ha="center", va="center",
            fontsize=25, fontweight="bold", family="serif", color=NAVY, zorder=4)
    ax.plot([260, 1240], [top - 108, top - 108], color=LINE, lw=2, zorder=3)
    y = top - 150
    for who, where, col in lines:
        ax.add_patch(Circle((300, y), 11, color=col, zorder=4))
        ax.text(336, y, who, ha="left", va="center", fontsize=18,
                fontweight="bold", color=NAVY, zorder=4)
        ax.text(760, y, where, ha="left", va="center", fontsize=16,
                color=GREY, zorder=4)
        y -= 46
    save(fig, name)


def package_card(name, title, parts, footer):
    """The co-produced package: the pieces that go out together."""
    fig, ax = panel(340, title, footer)
    top = ax._top
    n = len(parts)
    w = (1500 - 80 - (n - 1) * 40) / n
    for i, (h, s, col) in enumerate(parts):
        x = 40 + i * (w + 40)
        card(ax, x, top - 270, w, 220, title=h, lines=[s], accent=col,
             title_colour=col, fs=16, align="center")
    save(fig, name)


# ================================================================ Book 2 recurring

def g_partners():
    three_tier("g-partners", "Four newsrooms, one story",
               [("Kalina Daily", "the local paper", GREEN, 20),
                ("Atlas Wire", "our agency", RED, 180),
                ("River Basin Network", "the regional network", BLUE, 320),
                ("the Meridian Post", "the international daily", PURPLE, 460)],
               "Each outlet reaches a different audience. The story is the same one.")


def g_timezones():
    timezones("g-timezones", "The same moment, three clocks",
              [("GENEVA", 15, 0), ("KALINA", 16, 0), ("BOGOTÁ", 9, 0)],
              "Three o'clock for one partner is not three o'clock for another.")


def g_wire():
    fig, ax = panel(380, "What a wire does",
                    "one dispatch in, many outlets out")
    top = ax._top
    card(ax, 60, top - 230, 380, 180, title="One dispatch",
         lines=["filed once,", "checked once"], accent=RED, title_colour=RED, fs=17)
    ax.add_patch(FancyBboxPatch((520, top - 230), 300, 180,
                                boxstyle="round,pad=0,rounding_size=12",
                                facecolor=NAVY, edgecolor="none", zorder=3))
    ax.text(670, top - 140, "THE WIRE", ha="center", va="center", fontsize=22,
            fontweight="bold", color="white", zorder=4)
    arrow(ax, 450, top - 140, 510, top - 140)
    for i in range(4):
        y = top - 70 - i * 72
        ax.add_patch(FancyBboxPatch((900, y - 28), 540, 56,
                                    boxstyle="round,pad=0,rounding_size=8",
                                    facecolor=PANEL, edgecolor=LINE, lw=2, zorder=3))
        ax.text(930, y, ["a paper in Lisbon", "a radio in Nairobi",
                         "a site in Manila", "a channel in Lima"][i],
                ha="left", va="center", fontsize=16, color=INK, zorder=4)
        arrow(ax, 830, top - 140, 890, y, colour="#C8D2D6", lw=2)
    save(fig, "g-wire")


def g_desk():
    fig, ax = panel(360, "Across the desk",
                    "the reporter files; the desk edits; the world reads")
    top = ax._top
    avatar(ax, 230, top - 140, s=1.0, skin=0, hair=1, shirt=RED, name="Mira",
           role="in Kalina")
    avatar(ax, 1270, top - 140, s=1.0, skin=2, hair=0, shirt=PURPLE, name="Omar",
           role="at the desk")
    ax.add_patch(FancyBboxPatch((430, top - 210), 640, 130,
                                boxstyle="round,pad=0,rounding_size=14",
                                facecolor=PANEL, edgecolor=NAVY, lw=3, zorder=3))
    ax.text(750, top - 128, "the dispatch", ha="center", va="center", fontsize=19,
            fontweight="bold", color=NAVY, zorder=4)
    ax.text(750, top - 168, "reported · attributed · exact", ha="center", va="center",
            fontsize=15, color=GREY, zorder=4)
    arrow(ax, 320, top - 120, 420, top - 120)
    arrow(ax, 1080, top - 120, 1180, top - 120)
    save(fig, "g-desk")


def g_credit():
    credit_card("g-credit", "A shared byline",
                [("Mira Sandoval", "Atlas Wire", RED),
                 ("Dren", "Kalina Daily", GREEN),
                 ("Ines Duarte", "River Basin Network", BLUE),
                 ("Omar Faris", "the Meridian Post", PURPLE)],
                "Everyone who did the work is on the line that carries it.")


def g_ladder():
    ladder("g-ladder", "The verification ladder",
           [("A claim", "someone says it"),
            ("A check", "one source confirms"),
            ("A second source", "independent of the first"),
            ("A fact", "now you can report it")],
           "A claim climbs to a fact one rung at a time. You report from the top rung only.")


def g_package():
    package_card("g-package", "The co-produced package",
                 [("The feature", "the long written piece", RED),
                  ("The broadcast", "a short radio script", BLUE),
                  ("The explainer", "for a reader far away", GOLD),
                  ("The post", "co-credited, online", GREEN)],
                 "Four pieces, four audiences, one story — launched together.")


def g_scale():
    scale_compare("g-scale", "Give a reader a scale they know",
                  [("Kalina", 9, "a small market town"),
                   ("A city district", 60, "the size most readers picture"),
                   ("A capital", 100, "far larger than Kalina")],
                  "A fair comparison uses a scale the reader already has.")


B2_RECURRING = [g_partners, g_timezones, g_wire, g_desk, g_credit, g_ladder,
                g_package, g_scale]


# ================================================================ per-unit figures

def build_unit_figures():
    # ---------------- Unit 1 · present perfect vs past simple
    four_words("u1-words", "Four key words",
               [("coverage", "the reporting of a story", RED),
                ("running story", "a story that continues", BLUE),
                ("reach", "how many people see it", GOLD),
                ("pick up", "a bigger outlet takes it", GREEN)],
               "coverage, running story, reach, pick up")
    concept_two("u1-gA", "Present perfect · past simple",
                ["present perfect — up to now", "We have covered it for a year.",
                 "A network has just written.", "for · since · just · already · yet"],
                ["past simple — a finished time", "The crossing reopened last spring.",
                 "Omar wrote to us last week.", "last week · ago · yesterday · in April"],
                "up to now, or a finished time? That is the whole choice.")
    concept_one("u1-gB", "ever · never · just · already · yet",
                "all with the present perfect",
                ["Have you ever worked with a partner abroad? — No, never.",
                 "The desk has just written.  We have already met.  Nothing is signed yet."],
                "The five signal words that pull a sentence into the present perfect.")
    concept_two("u1-gC", "for and since",
                ["for + a length of time", "for a year", "for six months"],
                ["since + a point in time", "since the spring", "since the crossing reopened"],
                "for measures the length; since names the moment it started.", rcol=GOLD)
    flow("u1-skill", "What a recap has to do",
         [("So far", "the whole story, up to now"), ("One moment", "a finished event"),
          ("Just in", "what is new"), ("Sources", "a name beside each number")],
         "A recap is a bridge: enough to understand where things stand, and no more.")
    timeline("u1-read", "A year of coverage",
             [("April", "the crossing reopens"), ("June", "the market returns"),
              ("autumn", "the school reopens"), ("this week", "a partner writes")],
             "One year, four moments — and a story that travelled further than expected.")
    case_card("u1-ethA", "A case: the recap that says too much",
              "“Say the valley has fully recovered.”", "the temptation",
              "“improved a lot, work remains”", "“fully recovered”",
              "A recap is still journalism. Its first reader trusts it completely.")
    case_card("u1-ethB", "A case: keeping the local voice",
              "“Call it the miracle valley.”", "a partner",
              "keep the true, local story", "take the bright angle",
              "A partner's reach is welcome. It does not get to change the facts.")
    checklist_card("u1-sum", "Book 2 · Unit 1 — what you practised",
                   ["the words of a running story", "present perfect vs past simple",
                    "ever, never, just, already, yet", "a recap, and an introduction"],
                   "Back on the story — and it has travelled.")

    # ---------------- Unit 2 · used to / would / past continuous
    four_words("u2-words", "Four key words",
               [("background", "the facts behind a story", RED),
                ("context", "what helps you understand", BLUE),
                ("backstory", "what happened before", GOLD),
                ("brief", "a short set of key facts", GREEN)],
               "background, context, backstory, brief")
    concept_two("u2-gA", "used to · would",
                ["used to — a past state or habit", "The crossing used to be busy.",
                 "Families used to live on both sides.", "(works for states AND habits)"],
                ["would — a repeated past action", "Every morning, Bekim would open his stall.",
                 "Children would cross on their way to school.", "(never for states)"],
                "used to covers both; would covers only what happened again and again.")
    concept_one("u2-gB", "Past continuous — the background",
                "was / were + verb-ing",
                ["Families were leaving when the barrier came down.",
                 "It was raining that winter, and the road was quiet."],
                "The longer action behind the event — the scene the event interrupts.")
    concept_two("u2-gC", "Which past form?",
                ["State → used to", "It used to be busy.",
                 "NOT ‘it would be busy’"],
                ["Scene → past continuous", "Families were leaving.",
                 "Event → past simple: the barrier came down."],
                "State, scene, or event — each has its own form.", rcol=BLUE)
    flow("u2-skill", "Giving good background",
         [("How it was", "used to"), ("What people did", "would"),
          ("What changed", "past continuous"), ("In order", "and fairly")],
         "Background in the order it happened — not worse than it was, not a fairy tale.")
    map_card("u2-read", "Before the quiet", "The crossing as it used to be — ordinary, and full of life.",
             people=6)
    case_card("u2-ethA", "A case: making the past sound worse",
              "“Say there was nothing here but ruin.”", "the temptation",
              "“an ordinary place, hard years”", "“nothing but ruin”",
              "Darkening the past erases the people who lived ordinary lives in it.")
    case_card("u2-ethB", "A case: the fairy-tale angle",
              "“Call it a little paradise, lost and found.”", "a partner",
              "the ordinary, real backstory", "the fairy tale",
              "A fairy tale travels well — and is easy to forget. The truth is not.")
    checklist_card("u2-sum", "Book 2 · Unit 2 — what you practised",
                   ["the words of the backstory", "used to for how things were",
                    "would for repeated actions", "the past continuous for the scene"],
                   "The backstory — and why the present is news.")

    # ---------------- Unit 3 · futures
    four_words("u3-words", "Four key words",
               [("schedule", "a list of times for tasks", RED),
                ("deadline", "the last time to finish", BLUE),
                ("arrangement", "a fixed plan with others", GOLD),
                ("time zone", "a region with its own clock", GREEN)],
               "schedule, deadline, arrangement, time zone")
    concept_two("u3-gA", "will · going to",
                ["will — decide now, or predict", "I'll send the agenda tonight.",
                 "The story will travel far."],
                ["going to — a plan already made", "We're going to co-produce one piece.",
                 "Look at the timeline — it's going to be tight."],
                "will is decided as you speak; going to was decided before.", rcol=GOLD)
    concept_one("u3-gC", "Present continuous — arrangements",
                "am / is / are + verb-ing, with a set time",
                ["We're meeting the partners on Wednesday.  Omar is calling at three.",
                 "A fixed time, usually with other people — already in the diary."],
                "The future form that is really an appointment.")
    timezones("u3-gB", "Agreeing a time",
              [("GENEVA", 15, 0), ("KALINA", 16, 0), ("MANILA", 22, 0)],
              "Give every meeting time in every zone, or someone will miss it.")
    flow("u3-skill", "A planning call",
         [("Agenda", "sent before"), ("Tasks", "assigned to a team"),
          ("Times", "in every zone"), ("Confirm", "out loud, by everyone")],
         "A plan no one confirmed is not a plan.")
    three_tier("u3-read", "Who does what",
               [("Kalina Daily", "the ground truth", GREEN, 20),
                ("Atlas Wire", "the reporting", RED, 180),
                ("River Basin Network", "the regional picture", BLUE, 320),
                ("the Meridian Post", "the global edit", PURPLE, 460)],
               "Each team does the part it does best. That is the whole point.")
    case_card("u3-ethA", "A case: the promise you cannot keep",
              "“I'll have the whole report tomorrow.”", "the temptation",
              "“by Friday, checked”", "“tomorrow”",
              "A plan is a set of promises. Make only the ones you can keep.")
    case_card("u3-ethB", "A case: the timeline that rushes the truth",
              "“File two days early and we lead.”", "a partner",
              "keep the deadline that allows the check", "file early, unchecked",
              "Move fast — but never faster than the truth.")
    checklist_card("u3-sum", "Book 2 · Unit 3 — what you practised",
                   ["the words of planning", "will for decisions and predictions",
                    "going to for plans", "the present continuous for arrangements"],
                   "Planning the coverage, across borders.")

    # ---------------- Unit 4 · reported speech
    four_words("u4-words", "Four key words",
               [("desk", "the team that edits abroad", RED),
                ("file", "to send a finished story", BLUE),
                ("attribute", "to say who said it", GOLD),
                ("according to", "as said by a source", GREEN)],
               "desk, file, attribute, according to")
    concept_one("u4-gA", "Reported speech — the backshift",
                "one step back in time",
                ["“The crossing is open.” → She said the crossing was open.",
                 "is/are → was/were · will → would · can → could · have → had"],
                "Direct words become reported speech, and every verb steps back one.")
    concept_two("u4-gB", "say · tell",
                ["say — no person after it", "She said (that) it was open.",
                 "NOT ‘she said me’"],
                ["tell — a person after it", "She told me (that) it was open.",
                 "NOT ‘she told that’"],
                "You say something; you tell somebody.", rcol=GOLD)
    concept_one("u4-gC", "Attribution",
                "every claim carries a name",
                ["According to the Crossing Office, a hundred families have returned.",
                 "She added that…  He explained that…  They confirmed that…"],
                "A number with no source is just a rumour in a suit.")
    flow("u4-skill", "Filing a clean dispatch",
         [("The brief", "read what the desk asked"), ("Report", "faithfully, backshifted"),
          ("Attribute", "every claim"), ("Quote", "exact, in quotation marks")],
         "A reporter is a bridge, not an author.")
    case_card("u4-ethA", "A case: putting words in a mouth",
              "“Say she called it a full recovery.”", "the temptation",
              "“she said it felt alive again”", "“a full recovery”",
              "Reported speech carries what a person said — no more.")
    case_card("u4-ethB", "A case: the desk wants a sharper quote",
              "“Tidy it into ‘This is a miracle.’”", "the desk",
              "keep her exact words", "sharpen the quote",
              "A quote belongs to the person who spoke it.")
    checklist_card("u4-sum", "Book 2 · Unit 4 — what you practised",
                   ["the words of the desk", "reported speech and the backshift",
                    "say and tell", "attribution with according to"],
                   "Across the desk, and out into the world.")

    # ---------------- Unit 5 · conditionals
    four_words("u5-words", "Four key words",
               [("condition", "what must be true first", RED),
                ("verify", "to check a fact is true", BLUE),
                ("hold", "to wait before publishing", GOLD),
                ("unless", "if not", GREEN)],
               "condition, verify, hold, unless")
    concept_two("u5-gA", "Zero · first conditional",
                ["zero — a rule, always true", "If we don't confirm it, we don't run it.",
                 "If + present, present"],
                ["first — a real future condition", "If the office confirms it, we'll file.",
                 "If + present, will + verb"],
                "A rule, or a plan? That decides which conditional you need.", rcol=GOLD)
    concept_one("u5-gB", "unless = if not",
                "the one condition that must be met",
                ["We won't run it unless it's confirmed.  (= if it is not confirmed)",
                 "Present tense after unless — never ‘unless it won't be’."],
                "unless marks the single thing that has to be true.")
    concept_one("u5-gC", "Time clauses",
                "when · as soon as · until · before · after · once",
                ["We'll publish as soon as the desk approves.",
                 "We won't run it until it is confirmed.   (present, even for the future)"],
                "After a time word, use the present — even when you mean tomorrow.")
    ladder("u5-skill", "Setting the conditions",
           [("Verify", "check it with a source"),
            ("Set the condition", "before the pressure comes"),
            ("If confirmed, run it", "if not, hold it"),
            ("Go ahead", "as soon as it is confirmed")],
           "A newsroom decides its rules before the deadline, not during it.")
    flow("u5-read", "The quiet rules",
         [("Confirm", "or do not run"), ("One source", "is not enough"),
          ("All wait", "if a partner is unsure"), ("Miss it", "if the check needs longer")],
         "A deadline never beats a check.")
    case_card("u5-ethA", "A case: the deadline arrives, the fact does not",
              "“It'll probably confirm tomorrow.”", "the temptation",
              "hold the number, run the rest", "publish on ‘probably’",
              "‘Probably’ is not ‘confirmed’. The condition exists for this moment.")
    case_card("u5-ethB", "A case: the partner who wants to run early",
              "“If we go first, the story is ours.”", "the big partner",
              "hold the shared rule for everyone", "let the biggest partner go",
              "A rule that bends for the biggest partner is not a rule.")
    checklist_card("u5-sum", "Book 2 · Unit 5 — what you practised",
                   ["the words of conditions", "the zero conditional for rules",
                    "the first conditional for plans", "unless, and time clauses"],
                   "If we confirm it, we run it.")

    # ---------------- Unit 6 · possibility and advice
    four_words("u6-words", "Four key words",
               [("claim", "something said, not yet checked", RED),
                ("likely", "probably true", BLUE),
                ("cross-check", "to check against another source", GOLD),
                ("doubt", "a reason not to be sure", GREEN)],
               "claim, likely, cross-check, doubt")
    concept_two("u6-gA", "might · may · could",
                ["possibility, not certainty", "It might be true.", "It may be wrong.",
                 "It could be either."],
                ["+ verb, with no ‘to’", "NOT ‘it might to be true’",
                 "Negative: might not · may not"],
                "Three ways to say the same careful thing: we are not sure yet.", rcol=GOLD)
    concept_one("u6-gB", "should · ought to",
                "advice — a good idea, not a rule",
                ["We should cross-check it.   You ought to ask the office.",
                 "Question: Should we…?   Negative: shouldn't."],
                "should and ought to mean the same; should is the commoner of the two.")
    concept_one("u6-gC", "Weigh, then advise",
                "possibility describes; advice decides",
                ["“It might be true, but we should verify it before anyone reports it.”",
                 "certain → probably → might / may / could → probably not → certainly not"],
                "Match your words to how sure you actually are.")
    ladder("u6-skill", "From claim to fact",
           [("A claim", "someone said it"), ("Evidence", "what supports it"),
            ("A doubt", "what argues against"), ("A second source", "independent"),
            ("A fact", "now you can report it")],
           "Every rung is a question. You report from the top one only.")
    scale_compare("u6-read", "How sure are you?",
                  [("certain", 100, "we can report it"),
                   ("probably", 70, "say ‘probably’, and why"),
                   ("might / may / could", 45, "say ‘might’ — and keep checking"),
                   ("no evidence", 10, "do not report it at all")],
                  "The word you choose should match the evidence you have.")
    case_card("u6-ethA", "A case: dressing a maybe as a fact",
              "“Drop the ‘might’ — it reads better.”", "the temptation",
              "keep the ‘might’", "report it as a fact",
              "A maybe is not a fact. The hedge is the honest part of the sentence.")
    case_card("u6-ethB", "A case: when the big partner's number wins",
              "“Use our figure — we're bigger.”", "a partner",
              "report both, and say they differ", "take the bigger outlet's number",
              "Size is not evidence. If two sources differ, say so.")
    checklist_card("u6-sum", "Book 2 · Unit 6 — what you practised",
                   ["the words of certainty", "might, may and could",
                    "should and ought to", "weighing a claim honestly"],
                   "How sure are you? Say exactly that.")

    # ---------------- Unit 7 · the passive
    four_words("u7-words", "Four key words",
               [("wire", "a service many outlets take", RED),
                ("dispatch", "a filed news story", BLUE),
                ("neutral", "with no feeling words", GOLD),
                ("dateline", "the place and date at the top", GREEN)],
               "wire, dispatch, neutral, dateline")
    concept_two("u7-gA", "Active · passive",
                ["active — who did it", "Volunteers rebuilt the bridge."],
                ["passive — what was done", "The bridge was rebuilt (by volunteers).",
                 "be + past participle"],
                "The passive puts the result first, and the doer second — or nowhere.", rcol=GOLD)
    concept_one("u7-gB", "The passive across tenses",
                "be changes; the participle does not",
                ["present: the wire is filed every hour",
                 "past: the bridge was rebuilt     present perfect: the report has been filed"],
                "One structure, three times — present, past, and present perfect.")
    concept_two("u7-gC", "by, and when to use the passive",
                ["Add by… when the doer matters", "rebuilt by local volunteers",
                 "— they should get the credit"],
                ["Leave it out when it does not", "the market is opened at dawn",
                 "— unknown, obvious, or not the point"],
                "by… is for credit and for responsibility. Never for hiding either.", rcol=RED)
    flow("u7-skill", "Wire style",
         [("Dateline", "KALINA, 4 May"), ("Passive", "for the action"),
          ("Attributed", "every claim"), ("Neutral", "no feeling words")],
         "One dispatch, many outlets — so every word has to be plain and fair.")
    case_card("u7-ethA", "A case: hiding the doer",
              "“A mistake was made.”", "a company",
              "name who is responsible", "print the soft line",
              "The passive is for neutrality, never for hiding a responsible doer.")
    case_card("u7-ethB", "A case: the loaded word on a wide wire",
              "“Call it a flood of people.”", "a sub-editor",
              "“more people than last year”", "“a flood”",
              "On a wire read everywhere, one loaded word travels everywhere too.")
    checklist_card("u7-sum", "Book 2 · Unit 7 — what you practised",
                   ["the words of the wire", "the passive across tenses",
                    "by… for credit and responsibility", "the neutral, attributed line"],
                   "For the wire: plain, fair, and carried far.")

    # ---------------- Unit 8 · comparatives
    four_words("u8-words", "Four key words",
               [("explainer", "a piece that makes it clear", RED),
                ("scale", "a size a reader already knows", BLUE),
                ("compare", "to say how two things differ", GOLD),
                ("roughly", "about; not exactly", GREEN)],
               "explainer, scale, compare, roughly")
    concept_two("u8-gA", "Comparatives · superlatives",
                ["-er / more … than", "busier than last year",
                 "more crowded than before"],
                ["the -est / the most", "the busiest morning of the year",
                 "the most visited crossing in the basin"],
                "One syllable takes -er; longer words take more.", rcol=GOLD)
    concept_one("u8-gB", "as…as · too · enough",
                "equal, excessive, sufficient",
                ["as busy as a city market    not as quiet as it was",
                 "too small to need a bus     big enough to need a school"],
                "Three ways to measure one thing against another.")
    concept_one("u8-gC", "Give a scale the reader has",
                "compare to something they already picture",
                ["“Kalina is roughly the size of a small market town.”",
                 "“The crossing carries about as many people in a day as one city bus route.”"],
                "A number means little abroad. A comparison means something at once.")
    scale_compare("u8-skill", "A fair comparison",
                  [("Kalina, now", 75, "busier than last year"),
                   ("Kalina, a typical year", 60, "the fair baseline"),
                   ("Kalina, the worst year", 10, "not the baseline to use")],
                  "Compare to a typical time, not to the lowest point you can find.")
    flow("u8-read", "Writing an explainer",
         [("Where", "put it on a map they know"), ("How big", "a scale they have"),
          ("What changed", "compared with when"), ("Why it matters", "to them")],
         "An explainer answers the questions a reader far away would actually ask.")
    case_card("u8-ethA", "A case: the flattering comparison",
              "“Say it's the busiest in the region.”", "the temptation",
              "“busier than last year”", "“the busiest in the region”",
              "A superlative needs evidence, not enthusiasm.")
    case_card("u8-ethB", "A case: lifting one place by lowering another",
              "“Say it's doing better than its neighbours.”", "a partner",
              "compare it with its own past", "put another place down",
              "Never raise one place by pushing another one down.")
    checklist_card("u8-sum", "Book 2 · Unit 8 — what you practised",
                   ["the words of comparison", "comparatives and superlatives",
                    "as…as, too and enough", "an explainer for a reader far away"],
                   "The bigger picture, fairly drawn.")

    # ---------------- Unit 9 · quantifiers, articles, connectors
    four_words("u9-words", "Four key words",
               [("draft", "a version before the final one", RED),
                ("merge", "to join two pieces into one", BLUE),
                ("flow", "how smoothly a piece reads", GOLD),
                ("credit", "naming who did the work", GREEN)],
               "draft, merge, flow, credit")
    concept_two("u9-gA", "Countable · uncountable",
                ["countable — many, a few, a number of", "many families · a few stalls",
                 "How many families?"],
                ["uncountable — much, a little, an amount of", "much traffic · a little money",
                 "How much traffic?"],
                "Count it or measure it — that decides the quantifier.", rcol=GOLD)
    concept_one("u9-gB", "Articles: a · an · the · zero",
                "new, known, or general?",
                ["a crossing (new to the reader)   the crossing (we both know which)",
                 "zero article for general plurals: journalists work across borders"],
                "The article tells the reader whether they have met this thing before.")
    concept_one("u9-gC", "Connectors",
                "and · but · so · because",
                ["The market reopened, and families returned.   It is busy, but the clinic is shut.",
                 "The road was repaired, so the bus will come.   They stayed because it is home."],
                "Four small words that turn a list of facts into a piece of writing.")
    flow("u9-skill", "Joining two drafts",
         [("Agree the shape", "before anyone writes"), ("Merge", "section by section"),
          ("One voice", "connectors, not seams"), ("Credit", "both writers, by name")],
         "Two drafts are not one piece until they read as one.")
    credit_card("u9-read", "One piece, every name on it",
                [("Mira Sandoval", "Atlas Wire", RED),
                 ("Dren", "Kalina Daily", GREEN),
                 ("Ines Duarte", "River Basin Network", BLUE)],
                "A co-written piece carries every writer who made it.")
    case_card("u9-ethA", "A case: the vanishing co-writer",
              "“One byline reads cleaner.”", "a sub-editor",
              "name both writers", "drop the local byline",
              "The writer who is easiest to leave off is usually the one furthest away.")
    case_card("u9-ethB", "A case: the smoothed-away truth",
              "“That clause breaks the flow — cut it.”", "an editor",
              "keep the true detail", "cut it for the flow",
              "Never cut a true detail just to make a sentence run more smoothly.")
    checklist_card("u9-sum", "Book 2 · Unit 9 — what you practised",
                   ["the words of joining up", "quantifiers for count and mass",
                    "a, an, the and zero", "connectors, and fair credit"],
                   "Joining it up — one piece, one voice, every name.")

    # ---------------- Unit 10 · gerunds and infinitives
    four_words("u10-words", "Four key words",
               [("co-production", "a piece made by partners", RED),
                ("package", "the pieces that go out together", BLUE),
                ("launch", "to publish it, everywhere", GOLD),
                ("byline", "the line that names the writers", GREEN)],
               "co-production, package, launch, byline")
    concept_two("u10-gA", "Verb + -ing · verb + to",
                ["+ -ing (gerund)", "enjoy working · finish writing",
                 "suggest meeting · avoid rushing"],
                ["+ to (infinitive)", "agree to publish · decide to wait",
                 "hope to launch · promise to credit"],
                "Some verbs take -ing, some take to. Learn them in pairs, in use.", rcol=GOLD)
    concept_one("u10-gB", "-ing or to?",
                "a few verbs take either — with a difference",
                ["We stopped checking. (we no longer check)",
                 "We stopped to check. (we paused in order to check)"],
                "With stop, remember and try, the form changes the meaning.")
    concept_one("u10-gC", "Gerunds as subjects",
                "-ing can start a sentence",
                ["Working across borders takes patience.",
                 "Crediting everyone is not a courtesy; it is part of the job."],
                "An -ing form can be the subject of the sentence, like any noun.")
    package_card("u10-skill", "The package",
                 [("Feature", "the written piece", RED),
                  ("Broadcast", "a short script", BLUE),
                  ("Explainer", "for a distant reader", GOLD),
                  ("Post", "co-credited, online", GREEN)],
                 "Four pieces, four audiences, one launch.")
    credit_card("u10-read", "The byline that ends the book",
                [("Mira Sandoval", "Atlas Wire", RED),
                 ("Dren", "Kalina Daily", GREEN),
                 ("Ines Duarte", "River Basin Network", BLUE),
                 ("Omar Faris", "the Meridian Post", PURPLE)],
                "Four newsrooms, one story — and everyone on the line that carries it.")
    case_card("u10-ethA", "A case: the last-minute over-claim",
              "“Call it the definitive account.”", "the launch",
              "“the fullest account so far”", "“the definitive account”",
              "The last line written is the easiest place to over-claim. Check it too.")
    case_card("u10-ethB", "A case: the credit that almost slipped",
              "“The local name won't fit the card.”", "a designer",
              "make it fit", "drop the name",
              "If the credit does not fit, change the card — not the credit.")
    checklist_card("u10-sum", "Ten units, one co-production",
                   ["perfect and past, backstory and futures",
                    "reported speech, conditions, certainty",
                    "the wire, the explainer, the joined-up piece",
                    "a package made and credited together"],
                   "Across borders: the story, at last, goes out.")


def main():
    for f in RECURRING + B2_RECURRING:
        f()
    build_unit_figures()
    n = len([x for x in os.listdir(OUT) if x.endswith(".png")])
    print(f"{n} figures written to {OUT}")


if __name__ == "__main__":
    main()
