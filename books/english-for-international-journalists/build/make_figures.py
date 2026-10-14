#!/usr/bin/env python3
"""
make_figures.py — generate every illustration in the book.

Twenty recurring figures carry the course's furniture (the team, the conference, the wire,
the page, the Code); each unit adds seven of its own. That is the source book's own ratio.
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


# ================================================================ per-unit figures

UNITS = {
 1: dict(
   words=[("journalist", "finds and reports news", RED),
          ("correspondent", "reports from abroad", BLUE),
          ("news agency", "sells news to outlets", GOLD),
          ("deadline", "when the story must be ready", GREEN)],
   gA=("The four structures", ["be — I am a correspondent.",
                              "present simple — She files at six.",
                              "have got — I have got a press card.",
                              "there is / are — There are eight of us."]),
   gB=("one or more than one", ["There is one world editor.",
                                "There are three correspondents."]),
   skill="who-does-what", read="chart", ethA=("paid trip",), ethB=("photo",)),
}


def u_words(n, items, footer):
    four_words(f"u{n}-words", "Four key words", items, footer)


def build_unit_figures():
    # Unit 1
    u_words(1, [("correspondent", "reports from another country", RED),
                ("news agency", "sends news to many outlets", BLUE),
                ("desk", "the team that runs a subject", GOLD),
                ("deadline", "when the story must be ready", GREEN)],
            "Four key words — correspondent, news agency, desk, deadline.")
    concept_two("u1-gA", "be · present simple",
                ["be — am / is / are", "I am a correspondent.", "She is the world editor.",
                 "They are at the desk."],
                ["present simple — every day", "I work for Atlas Wire.",
                 "He files at six. (he / she / it + -s)", "We report the news."],
                "Two ways to talk about now: who you are, and what you do.")
    concept_two("u1-gB", "have got · there is / there are",
                ["have got", "I have got a press card.", "She has got a visa."],
                ["there is / there are", "There is one editor.",
                 "There are eight journalists."],
                "There is one world editor. There are three correspondents.", rcol=GOLD)
    people_row("u1-skill", "Who does what on a world desk",
               [("Ana", "editor-in-chief", GOLD, False),
                ("Daniel", "world editor", BLUE, False),
                ("Mira", "correspondent", RED, False),
                ("Priya", "verification", PURPLE, True)],
               "The editor-in-chief leads. The world editor runs the desk. "
               "The team reports, checks, and files.")
    bar_chart("u1-read", "Journalists in prison, 1 December (CPJ census)",
              ["2000", "2005", "2010", "2015", "2020", "2024"],
              [81, 125, 145, 199, 274, 361],
              "Journalists jailed for their work, counted every 1 December. "
              "Source: Committee to Protect Journalists.",
              note="CPJ prison census")
    case_card("u1-ethA", "A case: who pays for the trip?",
              "“We will pay your flight — write a nice story.”", "an official",
              "say no, thank you", "accept the trip",
              "A journalist is independent: no one buys the story.")
    case_card("u1-ethB", "A case: a family says no",
              "“Please do not use our photograph.”", "a mother",
              "respect the answer", "use it anyway",
              "Respect people — ask first, and take no for an answer.")
    checklist_card("u1-sum", "Unit 1 — what you practised",
                   ["words of the newsroom", "be · present simple",
                    "have got · there is / are", "a staff bio and an agency note"],
                   "Unit 1 — the eight parts you practised, one story.")

    # Unit 2
    u_words(2, [("angle", "the main idea of a story", RED),
                ("source", "a person who gives information", BLUE),
                ("fact", "a thing that is true", GOLD),
                ("event", "a thing that happens", GREEN)],
            "Four key words — angle, source, fact, event.")
    fig, ax = panel(420, "The five Ws — and How",
                    "Ask these six questions about every story, in every country.")
    top = ax._top
    for i, (q, c) in enumerate([("Who", RED), ("What", BLUE), ("When", GOLD),
                                ("Where", GREEN), ("Why", PURPLE), ("How", TEAL)]):
        x = 40 + (i % 6) * 240
        card(ax, x, top - 290, 220, 240, title=q, lines=["?"], accent=c,
             title_colour=c, fs=22, align="center")
    save(fig, "u2-gA")
    concept_two("u2-gB", "Asking a question",
                ["With be", "What is the news?", "Where is the crossing?"],
                ["With other verbs", "When does it open?",
                 "Why do families cross?"],
                "The wh- word comes first — in every question.")
    concept_two("u2-skill", "Hard news and soft news",
                ["Hard news — important, now", "a border reopens",
                 "prices rise", "a summit decides"],
                ["Soft news — interesting, not urgent", "a festival",
                 "a football result", "a new film"],
                "Hard news is important now. Soft news is interesting, but not urgent.",
                lcol=RED, rcol=GOLD)
    flow("u2-read", "What is news?",
         [("New", "it happened now"), ("True", "you checked it"),
          ("Near", "it touches your readers"), ("Big", "it matters")],
         "Four tests a story has to pass before it is news.")
    case_card("u2-ethA", "A case: a number nobody counted",
              "“Say a thousand — it sounds better.”", "a colleague",
              "say what you saw", "guess a number",
              "A number you did not count is a guess, not a fact.")
    case_card("u2-ethB", "A case: a post with no source",
              "“It is online, so write it now!”", "a neighbour",
              "check it first", "publish the rumour",
              "A rumour is a story with no proof. Check it, then report it.")
    checklist_card("u2-sum", "Unit 2 — what you practised",
                   ["the five Ws and How", "wh- questions", "adjectives for news",
                    "5-W notes and a pitch"],
                   "Unit 2 — what is news, and how to find the story.")

    # Unit 3
    u_words(3, [("live", "news as it happens, now", RED),
                ("scene", "the place a story happens", BLUE),
                ("crowd", "many people together", GOLD),
                ("update", "new information", GREEN)],
            "Four key words — live, scene, crowd, update.")
    concept_one("u3-gA", "Present continuous — happening now",
                "am / is / are + verb-ing",
                ["Mira is reporting.    People are crossing.",
                 "The barrier is going up.    A band is playing."],
                "Present continuous — am / is / are + verb-ing = happening now.")
    concept_two("u3-gB", "going to · prepositions of place",
                ["going to — the plan", "I am going to talk to a café owner.",
                 "We are going to cover the opening."],
                ["in · at · next to", "The town is in the valley.",
                 "Mira is at the crossing.", "The café is next to the bridge."],
                "going to says what is next; in, at and next to say where.", rcol=GOLD)
    map_card("u3-skill", "Live from the crossing",
             "A live report says where you are, and what is happening now.",
             people=7)
    flow("u3-read", "Three rules for going live",
         [("Where", "say where you are"), ("Now", "say what is happening"),
          ("Next", "say what you will do")],
         "Say where you are, say what is happening, say what is next — then stop.")
    case_card("u3-ethA", "A case: how many people?",
              "“Just say ten thousand — it sounds good.”", "a voice in your ear",
              "say “a big crowd”", "guess a number",
              "On air, say only what you can see.")
    case_card("u3-ethB", "A case: filming an upset person",
              "“Please — not on camera.”", "a woman at the barrier",
              "lower the camera", "film her anyway",
              "Respect people — ask before you film, even on a busy day.")
    checklist_card("u3-sum", "Unit 3 — what you practised",
                   ["the words of the scene", "present continuous for now",
                    "going to for the plan", "a short live report"],
                   "Unit 3 — reporting live, as it happens.")

    # Unit 4
    u_words(4, [("interview", "a meeting to ask questions", RED),
                ("polite", "kind and respectful", BLUE),
                ("quote", "a person's exact words", GOLD),
                ("interpreter", "a person who turns one language into another", GREEN)],
            "Four key words — interview, polite, quote, interpreter.")
    concept_two("u4-gA", "can · could · would",
                ["can / could — a request", "Can I ask you a question?",
                 "Could you tell me your name, please?"],
                ["would — an offer", "Would you like to talk to me?",
                 "Would you say a little more?"],
                "can, could and would make a question polite — in any language.", rcol=GOLD)
    concept_one("u4-gB", "Question forms",
                "(wh-) + do / can / is + subject + verb + ?",
                ["Do you live here?    Is the crossing open?    Can I record this?",
                 "What do you do?    Where do you live?    Why did you come back?"],
                "A question: (wh-) + do / can / is + subject + verb + ?")
    fig, ax = panel(420, "Working with an interpreter",
                    "Look at the person you are interviewing, not at the interpreter.")
    top = ax._top
    avatar(ax, 260, top - 140, s=1.05, skin=0, hair=1, shirt=RED, name="Mira", role="reporter")
    avatar(ax, 750, top - 140, s=1.05, skin=2, hair=2, shirt=TEAL, name="Dren",
           role="interpreter")
    avatar(ax, 1240, top - 140, s=1.05, skin=3, hair=3, shirt=GOLD, scarf=True,
           name="Elena", role="guest")
    arrow(ax, 360, top - 90, 650, top - 90, colour=BLUE)
    arrow(ax, 850, top - 90, 1140, top - 90, colour=BLUE)
    arrow(ax, 1140, top - 195, 360, top - 195, colour=GOLD)
    save(fig, "u4-skill")
    flow("u4-read", "Four steps to a good interview",
         [("Prepare", "write your questions"), ("Be polite", "ask, do not demand"),
          ("Listen", "then ask a follow-up"), ("Get it right", "the exact words")],
         "Prepare, be polite, listen, and get the quote exactly right.")
    case_card("u4-ethA", "A case: “make me sound better”",
              "“Write that my café is the best in Europe.”", "Elena",
              "keep her real words", "change the quote",
              "Report what the guest really said — not what they wish they had said.")
    case_card("u4-ethB", "A case: off the record",
              "“Please do not print that part.”", "a guest",
              "leave it out", "print it anyway",
              "If you promise not to print it, keep your promise.")
    checklist_card("u4-sum", "Unit 4 — what you practised",
                   ["the words of the interview", "can, could and would",
                    "yes/no and wh- questions", "a write-up with one exact quote"],
                   "Unit 4 — asking politely, and running an interview.")

    # Unit 5
    u_words(5, [("attribution", "saying who said it", RED),
                ("statement", "an official thing someone says", BLUE),
                ("confirm", "to say yes, it is true", GOLD),
                ("spokesperson", "a person who speaks for a group", GREEN)],
            "Four key words — attribution, statement, confirm, spokesperson.")
    concept_two("u5-gA", "say and tell",
                ["say (that)… — no person", "She said the crossing was open."],
                ["tell + a person + (that)…", "She told me it was open."],
                "You say something; you tell somebody.", rcol=GOLD)
    concept_one("u5-gB", "Reported speech — the tense moves back",
                "“The crossing is open.”  →  He said the crossing was was open.",
                ["is → was      are → were      am → was",
                 "“We are happy.”  →  She said they were happy."],
                "Direct words become reported speech — and the tense moves back.")
    g = None
    fig, ax = panel(420, "Every number needs a source",
                    "Attribution — say where the fact comes from, every time.")
    top = ax._top
    card(ax, 70, top - 330, 420, 280, title="“100 families”",
         lines=["a number"], accent=NAVY, fs=18)
    card(ax, 540, top - 330, 420, 280, title="Who says so?",
         lines=["the Crossing Office"], accent=BLUE, title_colour=BLUE, fs=18)
    card(ax, 1010, top - 330, 420, 280, title="On the page",
         lines=["“…according to the", "Crossing Office.”"], accent=RED,
         title_colour=RED, fs=16)
    arrow(ax, 500, top - 190, 530, top - 190)
    arrow(ax, 970, top - 190, 1000, top - 190)
    save(fig, "u5-skill")
    flow("u5-read", "Four rules for quotes",
         [("Name it", "say who said it"), ("say / tell", "use them correctly"),
          ("Move it back", "is → was"), ("Keep it exact", "do not change words")],
         "Name the source, use say and tell correctly, move the tense back, keep it exact.")
    case_card("u5-ethA", "A case: two sources disagree",
              "“One says a hundred. One says fifty.”", "your notebook",
              "report both, named", "print the bigger one",
              "When sources disagree, report both — and say who said what.")
    case_card("u5-ethB", "A case: “do not use my name”",
              "“I will tell you, but not my name.”", "a source",
              "find a second source", "print it as a fact",
              "One unnamed source is not yet a story. Check it.")
    checklist_card("u5-sum", "Unit 5 — what you practised",
                   ["the words of the quote", "say and tell",
                    "reported speech", "attribution with “according to…”"],
                   "Unit 5 — reporting what people said, with attribution.")

    # Unit 6
    u_words(6, [("reopen", "to open again", RED),
                ("rebuild", "to build again", BLUE),
                ("return", "to come back", GOLD),
                ("ago", "before now", GREEN)],
            "Four key words — reopen, rebuild, return, ago.")
    concept_two("u6-gA", "Past simple — what happened",
                ["Regular — add -ed", "open → opened", "return → returned"],
                ["Irregular — learn them", "come → came    go → went",
                 "be → was / were    build → built"],
                "Past simple — the events, one after another.", rcol=GOLD)
    concept_one("u6-gB", "Past continuous — the background",
                "was / were + verb-ing",
                ["When Mira arrived, people were waiting and children were playing.",
                 "While the workers were painting, the families were crossing."],
                "Past continuous — what was happening in the background.")
    flow("u6-skill", "Telling it in order",
         [("Two years ago", "the bridge was closed"), ("Then", "the work began"),
          ("When it opened", "people were waiting"), ("After that", "the town was busy")],
         "Time words show the order — ago, then, when, while, after.")
    map_card("u6-read", "The year the crossing reopened",
             "A feature tells the whole story — from how it was, to how it is.",
             people=5)
    case_card("u6-ethA", "A case: the number grows",
              "“I think ten thousand came — maybe more!”", "a stall-holder",
              "“many people came”", "“ten thousand came”",
              "Report what you can confirm — do not make a past day bigger than it was.")
    case_card("u6-ethB", "A case: a hard memory",
              "“I do not want people to see me cry.”", "an old man",
              "leave it out", "print it anyway",
              "Some memories are painful. Be gentle, and ask before you print.")
    checklist_card("u6-sum", "Unit 6 — what you practised",
                   ["the words of the story", "past simple for the events",
                    "past continuous for the background", "a short feature"],
                   "Unit 6 — telling the story of what happened.")

    # Unit 7
    u_words(7, [("project", "a big piece of work", RED),
                ("repair", "to fix something broken", BLUE),
                ("volunteer", "a person who helps for free", GOLD),
                ("result", "what happens at the end", GREEN)],
            "Four key words — project, repair, volunteer, result.")
    concept_two("u7-gA", "Active and passive",
                ["Active — who did what", "Workers rebuilt the bridge."],
                ["Passive — what was done", "The bridge was rebuilt (by workers)."],
                "The passive puts the result first: the bridge was rebuilt.", rcol=GOLD)
    concept_two("u7-gB", "Past passive · present passive",
                ["was / were + done", "The road was repaired.",
                 "New lamps were fitted."],
                ["is / are + done", "The wire is filed every hour.",
                 "The bridge is cleaned each morning."],
                "was / were + done for then; is / are + done for now.")
    flow("u7-skill", "Reporting a project",
         [("What was done", "the work"), ("Who by", "the credit"),
          ("The result", "what changed")],
         "A report answers: what was done, who by, and with what result?")
    map_card("u7-read", "A crossing rebuilt",
             "The work on the bridge — and the people who did it.", people=4)
    case_card("u7-ethA", "A case: “mistakes were made”",
              "“A mistake was made. Leave it there.”", "an official",
              "name who is responsible", "print the soft line",
              "Do not use the passive to hide who is responsible.")
    case_card("u7-ethB", "A case: who gets the credit?",
              "“Write that the agency did it.”", "an official",
              "name the volunteers too", "credit only the office",
              "Give credit to the people who really did the work.")
    checklist_card("u7-sum", "Unit 7 — what you practised",
                   ["the words of the project", "the past passive",
                    "the present passive", "a report that gives credit"],
                   "Unit 7 — saying what was done, with the passive.")

    # Unit 8
    u_words(8, [("improve", "to get better", RED),
                ("recently", "a short time ago", BLUE),
                ("since", "from a time until now", GOLD),
                ("yet", "until now", GREEN)],
            "Four key words — improve, recently, since, yet.")
    concept_one("u8-gA", "Present perfect — a result now",
                "has / have + past participle",
                ["The crossing has reopened.    Families have returned.",
                 "The town has changed — and you can see it today."],
                "Present perfect — a past action with a result you can see now.")
    concept_two("u8-gB", "for and since · just, already, yet",
                ["since + a point", "since the spring", "for + a length",
                 "for six months"],
                ["just · already · yet", "It has just reopened.",
                 "They have already crossed.", "The clinic has not opened yet."],
                "since a point in time, for a length of time — and just, already, yet.",
                rcol=GOLD)
    concept_two("u8-skill", "What has changed — and what has not",
                ["Has changed", "the crossing has reopened",
                 "a hundred families have returned"],
                ["Has not changed yet", "the clinic has not reopened",
                 "there is still no bus"],
                "A fair change story holds both halves at once.",
                lcol=GREEN, rcol=RED)
    timeline("u8-read", "What has changed for the world's press",
             [("1991", "Windhoek Declaration"), ("1993", "World Press Freedom Day, 3 May"),
              ("2002", "the first World Press Freedom Index"),
              ("2012", "the UN Plan of Action"), ("2021", "Windhoek+30")],
             "Five dates that have changed how the world talks about press freedom. "
             "Sources: UNESCO; Reporters Without Borders.")
    case_card("u8-ethA", "A case: “fully recovered”",
              "“Write that everything is finished.”", "an official",
              "“a lot has improved”", "“fully recovered”",
              "Progress is not the same as finished.")
    case_card("u8-ethB", "A case: only the good news",
              "“What about our street? No water yet.”", "a reader",
              "add what has not changed", "leave the story as it is",
              "Show the whole picture, not only the parts that shine.")
    checklist_card("u8-sum", "Unit 8 — what you practised",
                   ["the words of change", "the present perfect",
                    "for and since", "just, already, yet, ever, never"],
                   "Unit 8 — what has happened, and what has changed.")

    # Unit 9
    u_words(9, [("advice", "what you tell someone to do", RED),
                ("rule", "what you must do", BLUE),
                ("protect", "to keep safe", GOLD),
                ("fixer", "a local journalist who works with a visiting team", GREEN)],
            "Four key words — advice, rule, protect, fixer.")
    concept_two("u9-gA", "should · must · have to",
                ["should — advice", "You should check every fact.",
                 "You shouldn't guess."],
                ["must / have to — a rule", "You must protect your source.",
                 "You have to file by six."],
                "should is a good idea; must and have to are rules.", rcol=RED)
    concept_one("u9-gB", "First conditional",
                "If + present simple, … will + verb",
                ["If you check the facts, your story will be strong.",
                 "If you rush, you will make mistakes."],
                "First conditional: if you do this, that will happen.")
    checklist_card("u9-skill", "Before you travel",
                   ["accreditation and visa", "safety training and insurance",
                    "a local colleague you trust and credit",
                    "a plan for your notes and your contacts"],
                   "What a correspondent checks before they go.", col=RED)
    flow("u9-read", "Four rules of the newsroom",
         [("Check", "every fact"), ("Protect", "your source"),
          ("Be fair", "give both sides"), ("Fix it", "correct mistakes")],
         "Four rules that hold in every newsroom, in every country.")
    case_card("u9-ethA", "A case: the deadline and the fact",
              "“We go in ten minutes. Is it checked?”", "the desk",
              "check first", "file it unchecked",
              "Never break a rule to be fast. Right beats first.")
    case_card("u9-ethB", "A case: your local colleague",
              "“Do not put my name on it. I live here.”", "Dren, a local reporter",
              "protect and credit fairly", "name them for a stronger line",
              "A colleague's safety comes before a stronger byline.")
    checklist_card("u9-sum", "Unit 9 — what you practised",
                   ["the words of advice", "should for advice",
                    "must and have to for rules", "if… will… for what follows"],
                   "Unit 9 — advice, rules, and what will happen if…")

    # Unit 10
    u_words(10, [("front page", "the first page of a newspaper", RED),
                 ("lead", "the first sentence of a story", BLUE),
                 ("byline", "the line with the writer's name", GOLD),
                 ("edit", "to check and improve a story", GREEN)],
            "Four key words — front page, lead, byline, edit.")
    concept_two("u10-gA", "who · which / that",
                ["who — for people", "The reporter who wrote the story is Mira."],
                ["which / that — for things", "The story that everyone read.",
                 "The photograph which we chose."],
                "who for people · which / that for things.", rcol=GOLD)
    concept_one("u10-gB", "where — for places",
                "Kalina is the town where the families came back.",
                ["This is the desk where the team works.",
                 "Two sentences become one: Mira is a reporter who wrote the story."],
                "where joins a place to what happened there.")
    fig, ax = panel(400, "Editing: two sentences become one",
                    "Two short sentences → one clear sentence that flows.")
    top = ax._top
    card(ax, 60, top - 330, 620, 280, title="Before",
         lines=["Mira is a reporter.", "She works at Atlas Wire.",
                "She wrote the story."], accent=GREY, title_colour=GREY, fs=16)
    card(ax, 820, top - 330, 620, 280, title="After",
         lines=["Mira, who works at Atlas", "Wire, wrote the story that",
                "everyone read."], accent=GREEN, title_colour=GREEN, fs=16)
    arrow(ax, 700, top - 190, 800, top - 190, colour=GREEN)
    save(fig, "u10-skill")
    fig, ax = panel(520, "The front page that told the year",
                    "One front page can tell a whole year's story.")
    top = ax._top
    frontpage(ax, 230, 26, 1040, top - 56, labels=False)
    save(fig, "u10-read")
    case_card("u10-ethA", "A case: which story leads?",
              "“Lead with the shocking one — it sells.”", "an editor",
              "lead with the true one", "lead with the rumour",
              "Lead with the story that is important and true, not the one that is loud.")
    case_card("u10-ethB", "A case: a public correction",
              "“Just fix it quietly online.”", "a colleague",
              "correct it in public", "fix it quietly",
              "A public mistake needs a public correction.")
    checklist_card("u10-sum", "Ten units, one story",
                   ["the newsroom and the five Ws", "live, interview, attribution",
                    "past, passive, present perfect", "advice, rules, and a front page"],
                   "Ten units, one story: the Kalina crossing came home.")


def main():
    for f in RECURRING:
        f()
    build_unit_figures()
    n = len([x for x in os.listdir(OUT) if x.endswith(".png")])
    print(f"{n} figures written to {OUT}")


if __name__ == "__main__":
    main()
