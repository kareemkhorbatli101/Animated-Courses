#!/usr/bin/env python3
"""
make_figures.py — the book's 52 illustrations.

A cover, ten unit banners, forty captioned panels (four per unit, at the source's
four slots: the end of Part 1, the end of Part 2, the end of Part 3 and the end of
Part 5) and a back cover.
"""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figures import (banner, cover, backcover, people, contrast, timeline,
                     layout, flow, columns, bars, grid, scale,
                     NAVY, BLUE, LBLUE, GREEN, RED, GOLD, PALE)

UNITS = [
    (1,  "Getting Started in Finance",          "Your role, your bank, your working day",
         "present simple & present continuous"),
    (2,  "Customer Service and Communication",  "Serving customers in a shared language",
         "modals for requests and offers"),
    (3,  "Everyday Banking Transactions",       "At the counter, in any currency",
         "quantifiers: much, many, a few, a little"),
    (4,  "Banking Products and Services",       "Matching the product to the customer",
         "comparatives & superlatives"),
    (5,  "Digital and Online Banking",          "The branch in the customer’s pocket",
         "active & passive voice"),
    (6,  "Currency Exchange and Money Transfer","Money that crosses a border",
         "indirect questions"),
    (7,  "Security and Fraud",                  "Keeping customers and the bank safe",
         "zero & first conditionals"),
    (8,  "Rules and Compliance",                "One bank, several rule books",
         "obligation: must, have to, mustn’t"),
    (9,  "Saving and Investing Basics",         "Helping customers plan ahead",
         "present perfect & past simple"),
    (10, "Corporate Banking",                   "Banking for businesses that trade",
         "reported speech"),
]


def cap(u, n, text):
    return f"Figure {u}.{n} · {text}"


def make():
    cover("cover")
    backcover("back")
    for n, title, sub, gram in UNITS:
        banner(f"u{n}-banner", n, title, sub, gram)

    # ---------------------------------------------------------------- Unit 1
    people("u1-1", "Who’s who at Harbour Bank",
           [("Branch Manager", "Marta Nowak"), ("Teller", "Ana Silva"),
            ("Customer Service", "Luca Rossi"), ("IT & Security", "Petra Horak"),
            ("Relationship Mgr", "Priya Raman")],
           cap(1, 1, "The people you will meet in this unit."))
    contrast("u1-2", "Two present tenses, two meanings",
             ("EVERY DAY — present simple", BLUE, PALE,
              "“She opens the branch at 9 o’clock.”", "a routine / a habit", "clock"),
             ("RIGHT NOW — present continuous", GREEN, PALE,
              "“She is helping a customer now.”", "happening at this moment", "pair"),
             cap(1, 2, "Present simple for routines; present continuous for now."))
    timeline("u1-3", "A day at the branch",
             [("8:30", "arrive & open up"), ("9:00", "branch opens"),
              ("12:30", "lunch in turns"), ("15:00", "counter closes"),
              ("16:00", "check reports")],
             cap(1, 3, "Daily routines — good practice for the present simple."))
    layout("u1-4", "Inside the branch",
           [(0.02, 0.56, 0.12, 0.34, "ATM", None, BLUE),
            (0.15, 0.08, 0.22, 0.60, "Waiting area", None, "#DCE4EE"),
            (0.40, 0.56, 0.28, 0.34, "Teller counters", None, NAVY),
            (0.40, 0.10, 0.20, 0.38, "Customer Service", None, "#DCE4EE"),
            (0.62, 0.10, 0.12, 0.38, "Manager", None, LBLUE),
            (0.78, 0.10, 0.20, 0.80, "Back office", "& safe", NAVY)],
           cap(1, 4, "A typical branch layout and the areas staff work in."), note="Entrance")

    # ---------------------------------------------------------------- Unit 2
    grid("u2-1", "What customers hear first",
         [("Greeting", "“Good morning.”"), ("Offer", "“How can I help?”"),
          ("Request", "“Could I see your ID?”"), ("Apology", "“I’m sorry about that.”"),
          ("Checking", "“Is that correct?”"), ("Closing", "“Have a good day.”")],
         cap(2, 1, "Six moments in every service conversation."), cols=3)
    contrast("u2-2", "Direct or polite — the same question",
             ("DIRECT — plain form", BLUE, PALE,
              "“Give me your passport.”", "clear, but it sounds like an order", "plain"),
             ("POLITE — can / could / may", GREEN, PALE,
              "“Could I see your passport?”", "the same job, done politely", "pair"),
             cap(2, 2, "A modal turns an order into a request."))
    flow("u2-3", "The service conversation",
         [("1 Greet", "welcome the customer"), ("2 Listen", "find out what they need"),
          ("3 Act", "do it, or explain"), ("4 Close", "check and thank")],
         cap(2, 3, "Four steps, in the same order every time."))
    columns("u2-4", "Good service and poor service",
            ("GOOD SERVICE", ["Greets the customer", "Listens to the end",
                              "Explains the next step", "Checks understanding"], GREEN),
            ("POOR SERVICE", ["Starts with “No.”", "Interrupts",
                              "Uses only bank words", "Leaves the customer waiting"], RED),
            cap(2, 4, "The difference is language, not effort."))

    # ---------------------------------------------------------------- Unit 3
    grid("u3-1", "Everyday transactions",
         [("Deposit", "money in"), ("Withdrawal", "money out"),
          ("Transfer", "between accounts"), ("Payment", "a bill"),
          ("Exchange", "one currency for another"), ("Statement", "a record"),
          ("Standing order", "the same amount"), ("Direct debit", "the bank is asked")],
         cap(3, 1, "What a teller handles in a normal day."), cols=4)
    contrast("u3-2", "How much, or how many?",
             ("HOW MUCH — uncountable", BLUE, PALE,
              "“How much cash do you need?”", "money, cash, interest, time", "plain"),
             ("HOW MANY — countable", GREEN, PALE,
              "“How many notes would you like?”", "notes, coins, accounts, forms", "plain"),
             cap(3, 2, "Countable nouns take many; uncountable nouns take much."))
    flow("u3-3", "A withdrawal, step by step",
         [("1 Request", "“I’d like to withdraw…”"), ("2 Identify", "ID and account"),
          ("3 Check", "balance and limit"), ("4 Pay out", "count and confirm"),
          ("5 Record", "receipt and sign")],
         cap(3, 3, "Every counter transaction follows the same five steps."))
    bars("u3-4", "A counter day in numbers",
         [("Deposits", 38, "cash in"), ("Withdrawals", 44, "cash out"),
          ("Transfers", 26, "account to account"), ("Enquiries", 31, "no money moves")],
         cap(3, 4, "An invented day at the Nairobi branch — practice for quantifiers."))

    # ---------------------------------------------------------------- Unit 4
    grid("u4-1", "The product shelf",
         [("Current account", "everyday money"), ("Savings account", "money you keep"),
          ("Fixed deposit", "money you lock away"), ("Debit card", "your own money"),
          ("Credit card", "the bank’s money"), ("Personal loan", "repaid monthly"),
          ("Business loan", "for a company"), ("Mortgage", "for a property")],
         cap(4, 1, "Eight products and what each one is for."), cols=4)
    contrast("u4-2", "Comparing two, comparing all",
             ("COMPARATIVE — two things", BLUE, PALE,
              "“This card is cheaper than that one.”", "-er / more … than", "plain"),
             ("SUPERLATIVE — the whole group", GREEN, PALE,
              "“This is the cheapest card we offer.”", "the -est / the most …", "plain"),
             cap(4, 2, "Than compares two; the … -est compares them all."))
    scale("u4-3", "From everyday money to long-term money",
          "money you use today", "money you keep for years",
          [(0.06, "Current", "any day"), (0.36, "Savings", "months"),
           (0.66, "Fixed deposit", "a fixed term"), (0.95, "Investment", "years")],
          cap(4, 3, "The longer the customer waits, the more the bank can pay."))
    bars("u4-4", "Three savings accounts compared",
         [("Everyday Saver", 1, "withdraw any day"), ("Step Saver", 3, "two withdrawals a year"),
          ("Fixed 12", 5, "no withdrawals")],
         cap(4, 4, "Invented Harbour Bank rates (% a year) — practice for comparatives."),
         unit="%")

    # ---------------------------------------------------------------- Unit 5
    grid("u5-1", "The app, screen by screen",
         [("Log in", "password & code"), ("Balance", "what you have"),
          ("Transfer", "send money"), ("Pay a bill", "scan or type"),
          ("Statements", "download a PDF"), ("Freeze card", "one tap"),
          ("Limits", "set your own"), ("Help", "chat or call")],
         cap(5, 1, "What customers do in the Harbour Bank app."), cols=4)
    contrast("u5-2", "Who does it, or what happens?",
             ("ACTIVE — we say who", BLUE, PALE,
              "“The bank sends a code.”", "the doer comes first", "plain"),
             ("PASSIVE — the action matters", GREEN, PALE,
              "“A code is sent to your phone.”", "the doer is obvious, or not needed", "plain"),
             cap(5, 2, "Banks use the passive for systems and procedures."))
    flow("u5-3", "What happens when a customer taps “Send”",
         [("1 Request", "the app is opened"), ("2 Check", "the code is verified"),
          ("3 Send", "the payment is processed"), ("4 Confirm", "a message is received")],
         cap(5, 3, "Four passive steps, in four seconds."))
    columns("u5-4", "Safe online, and risky online",
            ("SAFE", ["Types the address", "Uses the app’s own code",
                      "Logs out", "Calls the number on the card"], GREEN),
            ("RISKY", ["Clicks a link in a message", "Shares a one-time code",
                       "Uses an open network", "Calls a number from an email"], RED),
            cap(5, 4, "The same four actions, done two ways."))

    # ---------------------------------------------------------------- Unit 6
    flow("u6-1", "How money crosses a border",
         [("1 Sender", "pays in Warsaw"), ("2 Our bank", "checks and converts"),
          ("3 Correspondent", "moves the money"), ("4 Their bank", "credits the account"),
          ("5 Receiver", "collects in Manila")],
         cap(6, 1, "Five steps and two currencies."))
    contrast("u6-2", "Asking directly, asking indirectly",
             ("DIRECT — a plain question", BLUE, PALE,
              "“What is the rate today?”", "fine with a colleague", "plain"),
             ("INDIRECT — a polite question", GREEN, PALE,
              "“Could you tell me what the rate is?”", "the word order changes", "pair"),
             cap(6, 2, "In an indirect question the verb comes after the subject."))
    scale("u6-3", "The rate, the spread and the fee",
          "what the bank buys at", "what the customer pays",
          [(0.08, "Buy rate", "the bank buys"), (0.46, "Mid rate", "the market"),
           (0.84, "Sell rate", "the customer buys")],
          cap(6, 3, "The difference between buy and sell is the spread."))
    grid("u6-4", "What you need to send money abroad",
         [("IBAN", "the account number"), ("BIC / SWIFT", "which bank"),
          ("Full name", "as on the ID"), ("Amount & currency", "both"),
          ("Reason", "what it is for"), ("ID", "for the sender")],
         cap(6, 4, "Six details — a missing one delays the transfer."), cols=3)

    # ---------------------------------------------------------------- Unit 7
    columns("u7-1", "Safe habits and risky habits",
            ("SAFE", ["Covers the PIN", "Checks the sender",
                      "Reports a lost card at once", "Keeps the code private"], GREEN),
            ("RISKY", ["Writes the PIN down", "Trusts the caller ID",
                       "Waits until tomorrow", "Reads the code aloud"], RED),
            cap(7, 1, "Most fraud starts with an ordinary habit."))
    contrast("u7-2", "Always true, or this time?",
             ("ZERO — always true", BLUE, PALE,
              "“If you share a code, the account is at risk.”", "a general rule", "plain"),
             ("FIRST — this time", GREEN, PALE,
              "“If you call us now, we will block the card.”", "one real possibility", "pair"),
             cap(7, 2, "Zero for rules; first for what happens next."))
    flow("u7-3", "A card is lost",
         [("1 Report", "the customer calls"), ("2 Block", "we stop the card"),
          ("3 Check", "we review the payments"), ("4 Replace", "a new card is sent")],
         cap(7, 3, "Four steps, in minutes, in any branch."))
    grid("u7-4", "Five scams and the sign to look for",
         [("Phishing email", "a link, and a hurry"), ("Smishing text", "a code request"),
          ("Vishing call", "“I’m from your bank”"), ("Fake invoice", "new bank details"),
          ("Card skimming", "a loose ATM slot")],
         cap(7, 4, "Different stories, the same two signs: urgency and secrecy."), cols=5)

    # ---------------------------------------------------------------- Unit 8
    grid("u8-1", "One bank, several rule books",
         [("KYC", "know your customer"), ("AML", "anti-money-laundering"),
          ("Sanctions", "who we may not pay"), ("Data protection", "who may see it"),
          ("Record keeping", "how long we keep it"), ("Reporting", "what we must tell")],
         cap(8, 1, "Six areas every branch has to satisfy at once."), cols=3)
    contrast("u8-2", "Must, or don’t have to?",
             ("MUST — it is necessary", BLUE, PALE,
              "“You must check the ID.”", "there is no choice", "plain"),
             ("DON’T HAVE TO — it is not", GREEN, PALE,
              "“You don’t have to copy the ID.”", "you may, but you need not", "plain"),
             cap(8, 2, "Mustn’t is a prohibition; don’t have to is a free choice."))
    flow("u8-3", "Know Your Customer, in four checks",
         [("1 Identify", "name and date of birth"), ("2 Verify", "an official document"),
          ("3 Screen", "sanctions and lists"), ("4 Record", "and review later")],
         cap(8, 3, "The same four checks in Rotterdam and in São Paulo."))
    columns("u8-4", "What staff must and must not do",
            ("MUST", ["Check ID before a large deposit", "Report anything unusual",
                      "Keep records for the full period", "Follow the local rule too"], GREEN),
            ("MUST NOT", ["Share a customer’s details", "Open an account without ID",
                          "Guess when unsure", "Tell a customer they are reported"], RED),
            cap(8, 4, "Obligation on the left, prohibition on the right."))

    # ---------------------------------------------------------------- Unit 9
    bars("u9-1", "Small amounts add up",
         [("1 month", 50, "one payment"), ("6 months", 300, "six payments"),
          ("1 year", 600, "twelve payments"), ("2 years", 1250, "plus interest")],
         cap(9, 1, "An invented plan: 50 a month, in the customer’s own currency."))
    contrast("u9-2", "Finished, or still true?",
             ("PAST SIMPLE — finished", BLUE, PALE,
              "“I opened the account in March.”", "we know when", "plain"),
             ("PRESENT PERFECT — up to now", GREEN, PALE,
              "“I have saved for six months.”", "it started before and continues", "pair"),
             cap(9, 2, "A finished time takes the past simple."))
    scale("u9-3", "From saving to investing",
          "lower risk, lower return", "higher risk, higher return",
          [(0.05, "Current", "no return"), (0.33, "Savings", "small, steady"),
           (0.63, "Fixed deposit", "fixed, known"), (0.93, "Investment", "it can fall")],
          cap(9, 3, "Risk and return move together — always say so to a customer."))
    timeline("u9-4", "A savings goal, month by month",
             [("Jan", "set the goal"), ("Apr", "a quarter saved"),
              ("Jul", "halfway"), ("Oct", "three quarters"), ("Dec", "goal reached")],
             cap(9, 4, "A year of regular saving, reviewed four times."))

    # ---------------------------------------------------------------- Unit 10
    grid("u10-1", "What a business customer needs",
         [("Business account", "the company’s money"), ("Payroll", "paying the staff"),
          ("Invoice finance", "waiting to be paid"), ("Business loan", "to grow"),
          ("Overdraft facility", "a limit to borrow to"), ("Trade finance", "buying abroad")],
         cap(10, 1, "Six products a company asks about in its first year."), cols=3)
    contrast("u10-2", "What they said, and what we report",
             ("DIRECT SPEECH — their words", BLUE, PALE,
              "“We need a facility.”", "exactly as it was said", "plain"),
             ("REPORTED SPEECH — our note", GREEN, PALE,
              "“They said they needed a facility.”", "the tense steps back", "pair"),
             cap(10, 2, "Reporting a meeting moves the verb one tense back."))
    flow("u10-3", "A letter of credit, in four moves",
         [("1 Agree", "buyer and seller"), ("2 Issue", "the buyer’s bank"),
          ("3 Ship & present", "the seller’s documents"), ("4 Pay", "against the documents")],
         cap(10, 3, "The banks pay against documents, not against trust."))
    people("u10-4", "The relationship team",
           [("Relationship Mgr", "Priya Raman"), ("Credit Analyst", "Johanna Berg"),
            ("Compliance", "Elif Demir"), ("Trade Finance", "Diego Moreno"),
            ("Branch Manager", "Marta Nowak")],
           cap(10, 4, "Who a business customer meets, and what each one decides."))


if __name__ == "__main__":
    make()
    import glob
    print(f"{len(glob.glob(os.path.join(os.path.dirname(os.path.abspath(__file__)),'figures','*.png')))} figures")
