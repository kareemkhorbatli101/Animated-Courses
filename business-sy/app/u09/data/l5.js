/* Unit 9 · Meetings and Minutes — LESSON 5 · READING AT WORK */
(function () {
  window.PAGE = {
    id: "u09-l5", unit: "u09", block: "l5", up: "../", tab: "AT WORK",
    objective: "Read a set of minutes and a comparison table, and find what was never decided",
    next: "oc.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Read the minutes", letter: "A",
        concepts: ["read", "people"],
        kind: "cards", task: null, n: 0,
        prompt: "Six phrases from minutes. Say what each means before you turn it over.",
        cards: [
          { term: "noted", ar: "أُحيط علمًا",
            meaning: "recorded without any decision attached",
            with: ["it was noted that"],
            why: "The safest verb in minutes, and the most overused. If something was noted and nothing followed, nothing happened." },
          { term: "carried forward", ar: "مُرحَّل",
            meaning: "moved to the next meeting",
            with: ["the item was carried forward"],
            why: "Honest when a date comes with it and a quiet way of burying something when it does not." },
          { term: "in principle", ar: "من حيث المبدأ",
            meaning: "agreeing with the idea but not yet with the detail",
            with: ["agreed in principle"],
            why: "A real stage in a decision, and also where proposals go to die. Ask what would move it to agreed in practice." },
          { term: "subject to", ar: "رهنًا بـ",
            meaning: "conditional on something else happening",
            with: ["subject to board approval"],
            why: "Turns a decision into a conditional one. Always find out who holds the condition." },
          { term: "for information", ar: "للعلم",
            meaning: "not for discussion or decision",
            with: ["item 5, for information"],
            why: "Marking an agenda item this way saves ten minutes. Marking a contentious one this way causes an argument." },
          { term: "nem con", ar: "دون اعتراض",
            meaning: "with nobody against, though not everyone in favour",
            with: ["carried nem con"],
            why: "From the Latin for <i>nobody speaking against</i>. Different from unanimous, which means everyone actively agreed." }
        ],
        explain: { terms: [
          { en: "noted", gloss: "recorded, with no decision attached", ar: "أُحيط علمًا" },
          { en: "in principle", gloss: "agreeing with the idea, not the detail", ar: "من حيث المبدأ" },
          { en: "subject to", gloss: "conditional on something else", ar: "رهنًا بـ" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Read the minutes", letter: "B",
        concepts: ["read", "evidence"],
        kind: "read", task: "read-article", cefr: "B1", n: 6,
        prompt: "Minutes of a meeting you did not attend. Read them, then answer.",
        text: { every: 1, mastColor: "blue", masthead: "MINUTES — OPERATIONS, 4 MARCH",
          blocks: [
            { h: "Matters arising", lines: [
              "The generator service agreed on 4 February had not been booked. ACTION: Barakat to book it by Wednesday.",
              "It was noted that visitor badges had run out. ACTION: Al-Masri to order more." ] },
            { h: "Items", lines: [
              "Levant Home annual terms: signed by the client with clause 2 reversed. Noted and carried.",
              "A second dye supplier: two views were expressed. It was agreed in principle that a second supplier is necessary; it was also noted that none could be qualified quickly. No decision was taken. ACTION: Khoury to bring three possible suppliers to the April meeting.",
              "Payment terms for new clients: discussed. The item was carried forward." ] },
            { h: "Any other business and next meeting", lines: [
              "A proposal to shorten terms to twenty-one days for new clients was raised under any other business and carried forward to April.",
              "Next meeting: first Monday in April." ] }
          ] },
        items: [
          { para: 1, q: "What had happened to the February action?",
            options: [
              { text: "It had not been done, and was re-set with a new date.", correct: true,
                why: "Matters arising catching an unfinished action, which is what the item is for." },
              { text: "It had been completed.", why: "<i>Had not been booked.</i>" },
              { text: "It was dropped.", why: "A new action point replaces it." } ] },
          { para: 2, q: "What was actually decided about a second dye supplier?",
            options: [
              { text: "Nothing — only that one is needed in principle.", correct: true,
                why: "<i>No decision was taken</i> is written explicitly, which is the whole point of recording non-decisions." },
              { text: "That one would be appointed.", why: "Agreeing in principle is not appointing." },
              { text: "That none is needed.", why: "The opposite of what was agreed in principle." } ] },
          { para: 2, q: "What makes the dye supplier item different from the payment terms item?",
            options: [
              { text: "It has an action point with a name, a number and a date.", correct: true,
                why: "Both were carried forward; only one has anything attached to it." },
              { text: "It was decided.", why: "Neither was." },
              { text: "It was raised under AOB.", why: "That was the payment terms proposal." } ] },
          { para: 3, q: "What happened to the proposal to shorten payment terms?",
            options: [
              { text: "It was raised under AOB and carried forward with nothing attached.", correct: true,
                why: "No name, no date, no action. On these minutes it is the item most likely to disappear." },
              { text: "It was agreed.", why: "It was carried forward." },
              { text: "It was rejected.", why: "Nothing was decided either way." } ] },
          { para: 3, q: "How many action points do these minutes contain?",
            options: [
              { text: "Three.", correct: true, why: "Barakat on the service, Al-Masri on badges, Khoury on suppliers. The two carried-forward items have none." },
              { text: "Five.", why: "Two of the five items produced no action at all." },
              { text: "One.", why: "Three are written in the telegraphic ACTION form." } ] },
          { para: 2, q: "A reader in six months wants to know whether a second supplier was approved. What do the minutes tell them?",
            options: [
              { text: "That it was agreed in principle and nothing was decided.", correct: true,
                why: "Both halves recorded, which is why the minutes are useful to someone who was not there." },
              { text: "That it was approved.", why: "Agreement in principle is explicitly separated from a decision." },
              { text: "The minutes do not cover it.", why: "It is the longest item in them." } ] }
        ],
        explain: { terms: [
          { en: "re-set", gloss: "given a new date", ar: "إعادة ضبط الموعد" },
          { en: "to be raised under AOB", gloss: "brought up at the end, not on the agenda", ar: "يُطرح تحت ما يستجدّ" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Find what was never decided", letter: "A",
        concepts: ["read", "evidence"],
        kind: "selectintext", task: "read-match-text", cefr: "B1", n: 4,
        prompt: "Four extracts. Click the sentence that shows nothing was actually settled.",
        note: { kind: "reader", title: "Agreement-shaped sentences",
                body: "<p>Minutes are full of sentences that sound like decisions and are not. <em>Noted</em>, <em>in principle</em>, <em>carried forward</em> and <em>discussed</em> are the four to watch for.</p>" },
        items: [
          { prompt: "Which sentence shows the matter is still open?",
            text: "The need for a second dye supplier was raised. All present recognised the risk of a single source. It was agreed in principle that a second supplier is necessary. Khoury will report in April.",
            answer: "It was agreed in principle that a second supplier is necessary.",
            why: "<i>In principle</i> is the whole claim. Everything around it describes agreement about a problem, not about a course of action." },
          { prompt: "Which sentence means the item may never return?",
            text: "Payment terms for new clients were discussed at length. Two options were considered. The item was carried forward. Next meeting: the first Monday in April.",
            answer: "The item was carried forward.",
            why: "Carried forward with no name and no action. The date in the last line belongs to the meeting, not to this item." },
          { prompt: "Which sentence records something and commits to nothing?",
            text: "It was noted that visitor badges had run out. It was noted that the car park gate is slow. It was noted that the April meeting clashes with a holiday. ACTION: Al-Masri to order badges.",
            answer: "It was noted that the car park gate is slow.",
            why: "Three things noted and only one action. The gate and the clash are recorded and nobody owns either." },
          { prompt: "Which sentence makes a decision conditional?",
            text: "The annual terms were approved. The price was confirmed at 1,780. Exclusivity was agreed subject to the owner's consent. The signature copy will follow.",
            answer: "Exclusivity was agreed subject to the owner's consent.",
            why: "<i>Subject to</i> hands the decision to someone who was not in the room, and until they act nothing has been agreed." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Find what was never decided", letter: "B",
        concepts: ["comparison", "people"],
        kind: "chartread", task: "read-graphic", cefr: "B1", n: 6,
        prompt: "Actions from the last four meetings. Read the table, then answer.",
        note: { kind: "reader", title: "Read down the status column",
                body: "<p>A table of actions is read down one column, not across the rows. The pattern is in what happened to them, not in what they were.</p>" },
        chart: {
          kind: "compareTable",
          title: "Action points, December to March",
          sub: "Status at the following meeting",
          cols: ["Meeting", "Action", "Owner", "Date set", "Status next meeting"],
          rows: [
            ["December", "Order visitor badges",      "Al-Masri", "yes", "Done"],
            ["December", "Find a second dye supplier", "—",    "no",  "Carried forward"],
            ["January",  "Book generator service",     "Barakat",  "yes", "Done"],
            ["January",  "Look at payment terms",      "—",    "no",  "Carried forward"],
            ["February", "Book generator service",     "Barakat",  "yes", "Not done"],
            ["February", "Review a second dye supplier", "—",  "no",  "Carried forward"],
            ["March",    "Bring three dye suppliers",  "Khoury",   "yes", "Open"]
          ],
          source: "Illustrative, authored for this item"
        },
        items: [
          { q: "What do the three carried-forward items have in common?",
            options: [
              { text: "No owner and no date.", correct: true,
                why: "Reading down two columns answers the question. Every item with both was done or is open; every item with neither was carried forward." },
              { text: "They are all about dye suppliers.", why: "One is about payment terms." },
              { text: "They are all from December.", why: "They are spread across three meetings." } ] },
          { q: "What happened to actions that had an owner and a date?",
            options: [
              { text: "Two were done, one was not, and one is still open.", correct: true,
                why: "Not perfect, and far better than the ones with neither." },
              { text: "All were done.", why: "February's generator service was not." },
              { text: "None was done.", why: "Two were." } ] },
          { q: "The generator service appears twice. What does that show?",
            options: [
              { text: "It was set in January, done, and then needed again in February.", correct: true,
                why: "The January row says Done and the February row says Not done — two separate actions, not one repeated failure." },
              { text: "It was never done.", why: "January's was." },
              { text: "The table has an error.", why: "Two entries for a recurring task is normal." } ] },
          { q: "What would you predict for the March action?",
            options: [
              { text: "It has a reasonable chance — it has an owner, a date and a number.", correct: true,
                why: "<i>Three</i> suppliers is checkable in a way that <i>look into it</i> is not." },
              { text: "It will be carried forward like the others.", why: "The others had no owner. This one does." },
              { text: "The table cannot suggest anything.", why: "The pattern in the first two columns is the whole content." } ] },
          { q: "What is the simplest change these four meetings suggest?",
            options: [
              { text: "Refuse to record an action without an owner and a date.", correct: true,
                why: "Every item that lacked both failed, across three meetings and two different subjects." },
              { text: "Have fewer items.", why: "Nothing in the table is about volume." },
              { text: "Meet more often.", why: "The February failure happened with a monthly cycle in place." } ] },
          { q: "What does this table not tell you?",
            options: [
              { text: "Whether the carried-forward items mattered.", correct: true,
                why: "A second dye supplier may be the most important thing on it, and the table only shows that nobody owned it." },
              { text: "Who owned each action.", why: "That is a column." },
              { text: "Which were completed.", why: "That is the last column." } ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Check what the minutes said", letter: "A",
        concepts: ["read", "evidence"],
        kind: "tfni", task: null, cefr: "B1", n: 0,
        prompt: "Right, Wrong, or Doesn't say? Use the minutes in 1B.",
        carry: "1b",
        items: [
          { stem: "A second dye supplier was approved.", answer: "F", line: 4,
            why: "Agreed in principle, and <i>no decision was taken</i>." },
          { stem: "The generator service had been booked before the March meeting.", answer: "F", line: 1,
            why: "<i>Had not been booked.</i>" },
          { stem: "Levant Home signed with clause 2 reversed.", answer: "T", line: 3,
            why: "Stated in the first item." },
          { stem: "Khoury objected to finding a second supplier.", answer: "NI", line: null,
            why: "Two views were expressed and neither is attributed. He takes the action, which suggests nothing either way." },
          { stem: "The payment terms proposal has an owner.", answer: "F", line: 6,
            why: "Carried forward with no action point attached." },
          { stem: "The April meeting will take place on a Monday.", answer: "T", line: 7,
            why: "<i>First Monday in April.</i>" }
        ] },

      { id: "3b", section: 3, sectionTitle: "Check what the minutes said", letter: "B",
        concepts: ["word", "recall"],
        kind: "letterbox", task: null, cefr: "B1", n: 0,
        prompt: "Complete the words from this lesson. The first letter is given.",
        recall: true,
        items: [
          { text: "Recorded with no decision attached: it was ___ .", answer: "noted", given: [0],
            why: "The safest and most overused verb in minutes." },
          { text: "Agreeing with the idea but not the detail: in ___ .", answer: "principle", given: [0],
            why: "A real stage, and also where proposals go to die." },
          { text: "Conditional on something else: ___ to board approval.", answer: "subject", given: [0],
            why: "Always find out who holds the condition." },
          { text: "Moved to the next meeting: ___ forward.", answer: "carried", given: [0],
            why: "Honest with a date attached; a quiet burial without one." },
          { text: "Nobody spoke against it: carried ___ con.", answer: "nem", given: [0],
            why: "Different from unanimous, which means everyone actively agreed." },
          { text: "The item at the end for things not on the agenda: any other ___ .", answer: "business", given: [0],
            why: "A safety valve, not a second agenda." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Check what the minutes said", letter: "C",
        concepts: ["recall", "evidence"],
        kind: "recap", task: null, n: 0,
        prompt: "Four readers of the same minutes. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Walid", detail: "Reads <i>agreed in principle</i> and tells a supplier they have been appointed." },
          { id: "c2", label: "Rasha", detail: "Writes <i>it was noted that the gate is slow</i> and considers the matter handled." },
          { id: "c3", label: "Imad", detail: "Carries an item forward for the fourth time without attaching anything to it." },
          { id: "c4", label: "Sawsan", detail: "Records a decision as <i>agreed subject to the owner's consent</i> and files it as done." }
        ],
        takeaways: [
          { text: "<i>In principle</i> is not a decision.", caseId: "c1",
            why: "The same minutes say <i>no decision was taken</i> two lines later, and Walid has told a supplier something that is not true." },
          { text: "Something noted with no action attached is something nobody owns.", caseId: "c2",
            why: "Three things were noted in that set of minutes and only one produced an action. The other two are still true and still nobody's." },
          { text: "Carry it forward with a name and a date, or let it go.", caseId: "c3",
            why: "Every item in four meetings that lacked both was carried forward again. The pattern is in two columns of the table." },
          { text: "<i>Subject to</i> hands the decision to someone else.", caseId: "c4",
            why: "Until the owner consents nothing has been agreed, and Sawsan's file now disagrees with reality." }
        ],
        closer: "<p>Next: asking your way around a building you have never been in, which is the same skill as asking a procedural question and is needed more often.</p>" }

    ]
  };
})();
