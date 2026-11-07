/* Unit 9 · Meetings and Minutes — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u09-l1", unit: "u09", block: "l1", up: "../", tab: "AT WORK",
    objective: "Use the words of an agenda and a set of minutes",
    next: "l2.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "The words of a meeting", letter: "A",
        concepts: ["people", "sequence"],
        kind: "cards", task: null, n: 0,
        prompt: "Nine words. Several of them are commonly used for the wrong thing.",
        cards: [
          { term: "agenda", ar: "جدول الأعمال",
            meaning: "the list of what a meeting will cover, in order",
            with: ["circulate the agenda", "item three on the agenda"],
            why: "Singular in English despite the Latin plural. <i>An agenda</i>, <i>two agendas</i>." },
          { term: "minutes", ar: "محضر الاجتماع",
            meaning: "the written record of what was decided",
            with: ["take the minutes", "the minutes of the last meeting"],
            why: "Always plural. Minutes record decisions and actions, not everything that was said — that is a transcript." },
          { term: "action point", ar: "بند إجرائي",
            meaning: "something somebody has agreed to do",
            with: ["an action point", "actions from the last meeting"],
            why: "A real action point has a name and a date on it. Without both it is a wish with a number beside it." },
          { term: "apologies", ar: "اعتذار عن الحضور",
            meaning: "notice that someone cannot attend",
            with: ["apologies were received from", "send apologies"],
            why: "Nothing to do with being sorry for a mistake. The first item on almost every formal agenda." },
          { term: "matters arising", ar: "مسائل مستجدّة",
            meaning: "items that come out of the previous minutes",
            with: ["matters arising from the minutes"],
            why: "The second item. It exists to catch actions that were agreed and not done." },
          { term: "any other business", ar: "ما يستجدّ من أعمال",
            meaning: "the slot at the end for items not on the agenda",
            with: ["AOB", "raise it under any other business"],
            why: "Often abbreviated AOB. A meeting where the important thing arrives under AOB had the wrong agenda." },
          { term: "chair", ar: "رئيس الجلسة",
            meaning: "the person running the meeting",
            with: ["chair the meeting", "through the chair"],
            why: "Both noun and verb. <i>Through the chair</i> means addressing the chair rather than arguing across the table." },
          { term: "quorum", ar: "النصاب القانوني",
            meaning: "the minimum attendance for decisions to be valid",
            with: ["we do not have a quorum"],
            why: "Mostly for boards and committees. If there is no quorum the meeting can discuss and cannot decide." },
          { term: "carried", ar: "أُقِرَّ",
            meaning: "passed, of a proposal",
            with: ["the motion was carried", "carried unanimously"],
            why: "The opposite is <i>defeated</i>. <i>Carried</i> is what minutes say where speech says <i>we agreed</i>." }
        ],
        explain: { terms: [
          { en: "minutes", gloss: "the written record of decisions", ar: "محضر الاجتماع" },
          { en: "action point", gloss: "something someone agreed to do, with a name and a date", ar: "بند إجرائي" },
          { en: "matters arising", gloss: "items coming out of the last minutes", ar: "مسائل مستجدّة" },
          { en: "any other business", gloss: "the slot for items not on the agenda", ar: "ما يستجدّ من أعمال" }
        ] },
        after: "<p>The two most useful are <b>action point</b> and <b>matters arising</b>. The first creates an obligation and the second is what makes anyone keep it.</p>" },

      { id: "1b", section: 1, sectionTitle: "The words of a meeting", letter: "B",
        concepts: ["sequence", "people"],
        kind: "sequence", task: null, n: 0,
        prompt: "Put the standard items of an agenda into their usual order.",
        note: { kind: "life", title: "The order is not arbitrary",
                body: "<p>Apologies first so everyone knows who is missing before decisions are taken. Matters arising second so last month's unfinished actions are not buried. AOB last so it cannot expand into the time reserved for the real items.</p>" },
        steps: [
          { text: "Apologies for absence", pos: 1, why: "Who is not here. It decides whether some items can be taken at all." },
          { text: "Minutes of the last meeting, agreed as accurate", pos: 2, why: "Before anything is built on them. Corrections made now, not in six months." },
          { text: "Matters arising from those minutes", pos: 3, why: "Last month's action points, each either done or explained. This is where accountability lives." },
          { text: "The main items, in order of importance", pos: 4, why: "Most important first, because meetings overrun and the last item is the one that gets five minutes." },
          { text: "Any other business", pos: 5, why: "Deliberately last and deliberately short. It is a safety valve, not a second agenda." },
          { text: "Date of the next meeting", pos: 6, why: "Fixed while everyone is in the room. Agreeing it by email afterwards takes a week." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Complete the minutes", letter: "A",
        concepts: ["write", "people"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "The minutes of the Monday meeting. Choose the word for each gap.",
        heading: "Minutes — operations meeting, Monday",
        note: { kind: "words", title: "Before you start",
                body: "<p>Minutes have their own register. They are impersonal, in the past, and they record decisions rather than opinions. Several gaps are the word minutes use where speech would use something warmer.</p>" },
        text: "Present: Haddad, Khoury, Al-Masri, Barakat. ___ were received from Darwish. The minutes of the previous meeting were agreed as ___ . Under matters ___ , it was noted that the generator service agreed on the fourth had not been booked. Khoury ___ that dyeing be moved to mornings until it is complete; this was ___ . An ___ point was recorded for Barakat to book the service by Wednesday.",
        gaps: [
          { options: ["Apologies", "Regrets"], answer: "Apologies",
            why: "The formal word for notice of absence, and the first item on nearly every agenda." },
          { options: ["accurate", "correct"], answer: "accurate",
            why: "<i>Agreed as accurate</i> is the fixed phrase. <i>Correct</i> would also be understood and is not what minutes say." },
          { options: ["arising", "raised"], answer: "arising",
            why: "<i>Matters arising</i> — items that come out of the previous minutes." },
          { options: ["proposed", "said"], answer: "proposed",
            why: "Minutes use verbs of action: proposed, noted, agreed. <i>Said</i> belongs in a transcript." },
          { options: ["carried", "accepted"], answer: "carried",
            why: "The minute word for a proposal that passed." },
          { options: ["action", "agenda"], answer: "action",
            why: "<i>An action point</i>, with a name and a date attached — both of which this one has." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Complete the minutes", letter: "B",
        concepts: ["write", "deadline"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "Nour's note to whoever takes the minutes next. Choose the word for each gap.",
        heading: "Taking the minutes",
        text: "Three rules. First, record what was ___ , not what was said. Nobody will ever read a transcript, and a decision with no record is a decision that gets taken again. Second, every action point needs a name ___ a date. <i>Someone should look into it</i> is not an action point; it is a sentence. Third, circulate them ___ two days, ___ everyone can still remember whether they agreed. If you leave it a fortnight, people correct the minutes from memory and the memories ___ . And when nothing was decided, write that ___ . A minute that says <i>this was discussed and no decision was taken</i> is honest and useful; one that implies agreement where there was none causes an argument in a month.",
        gaps: [
          { options: ["decided", "discussed"], answer: "decided",
            why: "The first rule of minutes, and the reason they are short." },
          { options: ["and", "or"], answer: "and",
            why: "Both, not either. A date with no name belongs to nobody." },
          { options: ["within", "after"], answer: "within",
            why: "<i>Within two days</i> — a maximum, not a delay." },
          { options: ["while", "until"], answer: "while",
            why: "<i>While everyone can still remember</i>. <i>Until</i> would say the opposite about the timing." },
          { options: ["differ", "agree"], answer: "differ",
            why: "The reason for the two-day rule, stated as a fact about people rather than a complaint." },
          { options: ["too", "also"], answer: "too",
            why: "<i>Write that too</i> — at the end of a clause. <i>Also</i> would sit before the verb." }
        ],
        explain: { terms: [
          { en: "to circulate", gloss: "to send to everyone concerned", ar: "يُعمّم" },
          { en: "a transcript", gloss: "a record of everything that was said", ar: "تفريغ نصّي" }
        ] } },

      { id: "3a", section: 3, sectionTitle: "Read four short notices", letter: "A",
        concepts: ["read", "notice"],
        kind: "read", task: "read-notices", cefr: "B1", n: 4,
        prompt: "Four notices about meetings. Choose what each one means.",
        text: { every: 1, mastColor: "blue", masthead: "NOTICES",
          blocks: [
            { h: "Agendas", lines: [
              "An agenda goes out two working days before the meeting.",
              "An item that arrives after that is taken under any other business or not at all." ] },
            { h: "Minutes", lines: [
              "Minutes are circulated within two days and record decisions, not discussion.",
              "If no decision was taken, the minutes say so." ] },
            { h: "Action points", lines: [
              "Every action point carries a name and a date.",
              "An action with neither is removed from the minutes before they are circulated." ] },
            { h: "Attendance", lines: [
              "Send apologies before the meeting, not afterwards.",
              "Anyone absent is still bound by what was decided." ] }
          ] },
        items: [
          { para: 1, q: "An item is submitted the day before the meeting. What happens?",
            options: [
              { text: "It goes under any other business, or it waits.", correct: true,
                why: "The notice gives both outcomes, and <i>or not at all</i> is doing real work." },
              { text: "It is added to the agenda.", why: "The deadline is two working days." },
              { text: "The meeting is postponed.", why: "Not an option the notice offers." } ] },
          { para: 2, q: "A long discussion ends without agreement. What do the minutes say?",
            options: [
              { text: "That no decision was taken.", correct: true,
                why: "The second line exists precisely for this case." },
              { text: "Nothing — the item is omitted.", why: "Silence would read as agreement when the item next comes up." },
              { text: "A summary of the discussion.", why: "Minutes record decisions, not discussion." } ] },
          { para: 3, q: "An action point has a date but no name. What happens to it?",
            options: [
              { text: "It is removed before circulation.", correct: true,
                why: "<i>Neither</i> is strict: the rule requires both, so one alone is not enough." },
              { text: "It stays, and the chair follows it up.", why: "The notice gives no such role." },
              { text: "It is given to the chair.", why: "Not what the notice says happens." } ] },
          { para: 4, q: "Someone misses the meeting and sends apologies afterwards. Are they bound by the decisions?",
            options: [
              { text: "Yes — absence does not exempt anyone.", correct: true,
                why: "The second line is unconditional and does not depend on when apologies arrived." },
              { text: "No, because they were not there.", why: "The notice rules this out." },
              { text: "Only if they sent apologies in time.", why: "The timing rule and the binding rule are separate sentences." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Read four short notices", letter: "B",
        concepts: ["word", "people"],
        kind: "build", task: null, n: 0,
        prompt: "The suffix <b>-er</b> and the suffix <b>-or</b>. Drag each root into the box for the suffix it takes.",
        note: { kind: "words", title: "Word building: the person who does it",
                body: "<p>Both make a person or a thing from a verb, and English chooses by habit.<br><em>supply → supplier</em> · <em>distribute → distributor</em><br>There is no <em>supplior</em> and no <em>distributer</em>. Words from Latin <em>-ate</em> verbs usually take <em>-or</em>.</p>" },
        family: { word: "distribute", forms: [
          { part: "verb", word: "dis·TRIB·ute" },
          { part: "noun, person", word: "dis·TRIB·u·tor" },
          { part: "noun, thing", word: "dis·tri·BU·tion", note: "the stress moves" },
          { part: "adjective", word: "dis·TRIB·u·tive" } ] },
        text: { every: 1, mastColor: "green", masthead: "IN USE",
          blocks: [ { lines: [
            "Our main <b>supplier</b> is in Homs and our <b>distributor</b> is in Amman.",
            "The <b>auditor</b> asked the <b>buyer</b> for the signed delivery notes.",
            "Barakat is the shift <b>supervisor</b>; Al-Masri is the <b>bookkeeper</b>.",
            "Every <b>contractor</b> needs a <b>manager</b> who answers the telephone." ] } ] },
        items: [
          { root: "supply",     affix: "-er", answer: "supplier",    why: "the <i>y</i> becomes <i>i</i>. No <i>supplior</i> exists." },
          { root: "buy",        affix: "-er", answer: "buyer",       why: "the <i>y</i> stays because a vowel precedes it." },
          { root: "manage",     affix: "-er", answer: "manager",     why: "the silent <i>e</i> is dropped." },
          { root: "distribute", affix: "-or", answer: "distributor", why: "a Latin <i>-ute</i> verb, so <i>-or</i>." },
          { root: "audit",      affix: "-or", answer: "auditor",     why: "and note <i>auditer</i> is never right." },
          { root: "supervise",  affix: "-or", answer: "supervisor",  why: "the <i>-ise</i> becomes <i>-is</i> before <i>-or</i>." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Read four short notices", letter: "C",
        concepts: ["comparison", "people"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three in each row belong together. Choose the one that does not.",
        items: [
          { group: "standing items on an agenda", options: [
            { text: "apologies", why: "who is absent." },
            { text: "matters arising", why: "last month's unfinished actions." },
            { text: "any other business", why: "the slot at the end." },
            { text: "quorum", correct: true, why: "A quorum is a condition for deciding, not an item to discuss." } ] },
          { group: "things minutes record", options: [
            { text: "decisions", why: "the main purpose." },
            { text: "action points", why: "with a name and a date." },
            { text: "attendance", why: "who was present and who sent apologies." },
            { text: "arguments", correct: true, why: "Minutes record what was decided, not who said what. That is a transcript." } ] },
          { group: "people who sell to you", options: [
            { text: "supplier", why: "sells you materials." },
            { text: "contractor", why: "sells you work." },
            { text: "vendor", why: "sells you anything." },
            { text: "distributor", correct: true, why: "A distributor sells <i>your</i> goods onward. They are on the other side." } ] },
          { group: "words meaning a proposal passed", options: [
            { text: "carried", why: "the minute word." },
            { text: "approved", why: "signed off." },
            { text: "adopted", why: "taken up formally." },
            { text: "tabled", correct: true, why: "In British usage <i>tabled</i> means put forward for discussion; in American it means postponed. Either way it is not passed." } ] }
        ] }

    ]
  };
})();
