/* Unit 6 · Calls and Handovers — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u06-l1", unit: "u06", block: "l1", up: "../", tab: "AT WORK",
    objective: "Use the phrasal verbs that run a telephone and a shift handover",
    next: "l2.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "The verbs a telephone runs on", letter: "A",
        concepts: ["speak", "sequence"],
        kind: "cards", task: null, n: 0,
        prompt: "Nine phrasal verbs. Workplace English is full of them, and the plain alternative often sounds wrong.",
        cards: [
          { term: "put through", ar: "يحوِّل المكالمة",
            meaning: "to connect a caller to the person they want",
            with: ["I'll put you through", "put me through to accounts"],
            why: "Separable: <i>put you through</i>, never <i>put through you</i>. With a pronoun the split is compulsory." },
          { term: "hold on", ar: "ينتظر على الخط",
            meaning: "to wait, on the telephone",
            with: ["hold on a moment", "could you hold?"],
            why: "Inseparable, and no object. <i>Hold the line</i> is the formal version; <i>hold on</i> is what people say." },
          { term: "get back to", ar: "يعاود الاتصال",
            meaning: "to reply later",
            with: ["I'll get back to you", "get back to me by Friday"],
            why: "Three parts, and none of them moves. The whole phrase travels together." },
          { term: "follow up", ar: "يتابع",
            meaning: "to chase something that has not been answered",
            with: ["follow it up", "a follow-up call", "I'll follow up on Monday"],
            why: "Separable as a verb, hyphenated as a noun: <i>a follow-up</i>. Two different words on the page." },
          { term: "hand over", ar: "يسلّم المهمة",
            meaning: "to pass work to the next person or shift",
            with: ["hand it over", "the handover", "hand over to the night shift"],
            why: "Verb separable, noun one word: <i>the handover</i>. The whole of this unit's At Work block." },
          { term: "take on", ar: "يتولّى",
            meaning: "to accept a piece of work or a new person",
            with: ["take on an order", "take on two staff"],
            why: "Separable. <i>Take it on</i> means accept it; <i>take on it</i> is not English." },
          { term: "sort out", ar: "يعالج المشكلة",
            meaning: "to deal with a problem",
            with: ["sort it out", "sorted out by Friday"],
            why: "Separable, and vague on purpose. In a handover note it should be replaced by what was actually done." },
          { term: "cover for", ar: "ينوب عن",
            meaning: "to do someone's work while they are away",
            with: ["cover for Fadi", "who is covering?"],
            why: "Inseparable. <i>Cover for Fadi</i>, never <i>cover Fadi for</i>. Covering someone is different from covering for them." },
          { term: "run through", ar: "يستعرض سريعًا",
            meaning: "to go over something quickly from start to finish",
            with: ["run through the list", "let me run it through with you"],
            why: "Both patterns exist with different senses. <i>Run through the list</i> is to review it; <i>run it through</i> suggests processing." }
        ],
        explain: { terms: [
          { en: "put through", gloss: "connect a caller", ar: "يحوِّل المكالمة" },
          { en: "hand over", gloss: "pass work to the next shift", ar: "يسلّم المهمة" },
          { en: "cover for", gloss: "do someone's work while they are away", ar: "ينوب عن" },
          { en: "follow up", gloss: "chase something unanswered", ar: "يتابع" }
        ] },
        after: "<p>Three of these change spelling when they become nouns: <b>a follow-up</b>, <b>a handover</b>, <b>a takeover</b>. The verb is two words and the noun is one, or one with a hyphen.</p>" },

      { id: "1b", section: 1, sectionTitle: "The verbs a telephone runs on", letter: "B",
        concepts: ["word", "place"],
        kind: "match", task: null, n: 0,
        prompt: "The reception desk and the floor behind it. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A reception counter with a telephone and a headset, a wall clock, a noticeboard with a rota on it, a visitor chair, a doorway to the workshop and a plant",
          parts: [
            { p: "wall",    x: 0,   y: 0,   sx: 10,  sy: 5.4 },
            { p: "floor",   x: 0,   y: 335, sx: 10,  sy: 2.3 },
            { p: "board",   x: 80,  y: 70,  s: 2.4 },
            { p: "clock",   x: 470, y: 72,  s: 0.7 },
            { p: "door",    x: 700, y: 120, s: 2.4 },
            { p: "counter", x: 70,  y: 350, sx: 4.6, sy: 1.8 },
            { p: "phone",   x: 140, y: 318, s: 0.75 },
            { p: "headset", x: 300, y: 320, s: 0.85 },
            { p: "chair",   x: 520, y: 400, s: 1.1 },
            { p: "plant",   x: 900, y: 380, s: 1.2 }
          ] },
        pins: [
          { id: "p-board",   x: 14, y: 20, tx: 14, ty: 6,  w: 120 },
          { id: "p-clock",   x: 48, y: 16, tx: 48, ty: 4,  w: 110 },
          { id: "p-door",    x: 76, y: 24, tx: 76, ty: 10, w: 110 },
          { id: "p-counter", x: 10, y: 88, tx: 4,  ty: 97, w: 120 },
          { id: "p-phone",   x: 26, y: 62, tx: 18, ty: 48, w: 120 },
          { id: "p-headset", x: 42, y: 74, tx: 34, ty: 93, w: 120 },
          { id: "p-chair",   x: 58, y: 88, tx: 56, ty: 97, w: 120 }
        ],
        pairs: [
          { word: "rota",      pin: "p-board",   why: "the list of who works which shift. American English says <i>schedule</i>." },
          { word: "clock",     pin: "p-clock",   why: "a handover happens against it, which is why it is on the wall and not in a drawer." },
          { word: "doorway",   pin: "p-door",    why: "one word. The opening, as against the door that fills it." },
          { word: "counter",   pin: "p-counter", why: "the surface people are served across. A desk is for working at; a counter is for being met at." },
          { word: "telephone", pin: "p-phone",   why: "the thing calls are put through on." },
          { word: "headset",   pin: "p-headset", why: "one word. It leaves both hands free, which is the whole reason reception uses one." },
          { word: "visitor chair", pin: "p-chair", why: "two words. Where a driver sits while the delivery note is checked." }
        ],
        explain: { terms: [
          { en: "rota", gloss: "the list of who works which shift", ar: "جدول المناوبات" },
          { en: "counter", gloss: "the surface people are served across", ar: "منضدة الاستقبال" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Complete the handover note", letter: "A",
        concepts: ["write", "sequence"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "A handover note from the day shift. Choose the word for each gap.",
        heading: "Handover — Tuesday, day to night",
        note: { kind: "words", title: "Before you start",
                body: "<p>Several gaps are the second half of a phrasal verb. The verb on its own usually means something different, which is why the small word matters more than its size suggests.</p>" },
        text: "Three things for tonight. The Amman pallets are made up but not loaded — please do not hand them ___ to the driver until Fadi has counted them. Levant Home called about 4417; I said we would get ___ to them tomorrow morning, so do not call them tonight. The dye house are sending a van at ten; if the driver asks for a signature, put him ___ to the supervisor rather than signing yourself. Loom three stopped twice and I could not sort it ___ , so it is off until maintenance look at it. Marwan is ___ for Ghada until Thursday. Anything you cannot deal with, write it down and I will follow it ___ in the morning.",
        gaps: [
          { options: ["over", "out"], answer: "over",
            why: "<i>Hand over</i> is to pass to the next person. <i>Hand out</i> would be to distribute to many." },
          { options: ["back", "on"], answer: "back",
            why: "<i>Get back to someone</i> is to reply later. Three parts that travel together." },
          { options: ["through", "up"], answer: "through",
            why: "<i>Put him through</i> — connect him. With a pronoun the split is compulsory." },
          { options: ["out", "over"], answer: "out",
            why: "<i>Sort it out</i> is to deal with a problem. <i>Sort over</i> is not English." },
          { options: ["covering", "taking"], answer: "covering",
            why: "<i>Covering for</i> — doing her work while she is away. The <i>for</i> is already printed." },
          { options: ["up", "through"], answer: "up",
            why: "<i>Follow it up</i> — chase the thing that was not finished. Separable, and with a pronoun it must split." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Complete the handover note", letter: "B",
        concepts: ["speak", "people"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "A telephone call at reception. Choose the word for each gap.",
        heading: "Reception, Tuesday morning",
        text: "Good morning, Orontes Textiles. — I'd like to speak to someone about an invoice. — Of course, I'll put you ___ to accounts. Could you ___ on a moment? — Yes. — I'm sorry, Lina is on another call. Can I ___ a message? — Please. Could she call me ___ this afternoon? — Of course. Could I ___ your number down? — It's 011 442 7781. — Let me ___ that back to you: 011 442 7781. I'll ask her to call before four.",
        gaps: [
          { options: ["through", "over"], answer: "through",
            why: "<i>Put you through</i> — the standard reception phrase, and it must split around the pronoun." },
          { options: ["hold", "wait"], answer: "hold",
            why: "<i>Hold on a moment</i> is the telephone word. <i>Wait</i> is correct and sounds blunt on a business line." },
          { options: ["take", "make"], answer: "take",
            why: "<i>Take a message</i> is fixed. <i>Make a message</i> would mean composing one." },
          { options: ["back", "again"], answer: "back",
            why: "<i>Call me back</i> — return my call. <i>Call me again</i> suggests she already called once." },
          { options: ["take", "write"], answer: "take",
            why: "<i>Take your number down</i> — write it while listening. Separable, and here it splits around the noun." },
          { options: ["read", "say"], answer: "read",
            why: "<i>Read it back</i> — repeat it so both of you know it is right. The single most useful habit on a telephone." }
        ],
        explain: { terms: [
          { en: "to take a message", gloss: "to write down what a caller says for someone else", ar: "تدوين رسالة" },
          { en: "to read back", gloss: "to repeat what you have written so it can be checked", ar: "إعادة القراءة للتأكيد" }
        ] } },

      { id: "3a", section: 3, sectionTitle: "Read four short notices", letter: "A",
        concepts: ["read", "notice"],
        kind: "read", task: "read-notices", cefr: "B1", n: 4,
        prompt: "Four notices about calls and shifts. Choose what each one means.",
        text: { every: 1, mastColor: "blue", masthead: "NOTICES",
          blocks: [
            { h: "Reception", lines: [
              "Always read a telephone number back to the caller before ending the call.",
              "A message with a wrong digit is worse than no message." ] },
            { h: "Handover", lines: [
              "A handover note says what was done, what was not, and what the next shift must not do.",
              "The third of those is the one people leave out." ] },
            { h: "Cover", lines: [
              "If you are covering for someone, their work is yours until they return.",
              "You are not expected to do it as well as they would. You are expected to write down what you could not do." ] },
            { h: "Loom faults", lines: [
              "Report a stopped loom to the supervisor on the same shift.",
              "Do not leave it in the handover note instead." ] }
          ] },
        items: [
          { para: 1, q: "Why must a number be read back?",
            options: [
              { text: "Because a message with one wrong digit is worse than none.", correct: true,
                why: "The notice gives the reason in the second line, and it is the reason that makes the habit stick." },
              { text: "To be polite.", why: "Not what the notice says." },
              { text: "To make the call longer.", why: "The opposite of the intent." } ] },
          { para: 2, q: "Which part of a handover note is most often missing?",
            options: [
              { text: "What the next shift must not do.", correct: true,
                why: "<i>The third of those is the one people leave out.</i>" },
              { text: "What was done.", why: "The easiest part to write, and the one everyone includes." },
              { text: "What was not done.", why: "Often missing, and the notice names the third as the worst." } ] },
          { para: 3, q: "What is expected of someone covering for a colleague?",
            options: [
              { text: "To do the work, and to write down what they could not do.", correct: true,
                why: "The notice lowers the bar and then names the obligation that replaces it." },
              { text: "To do it exactly as well as the absent person.", why: "The notice says explicitly that this is not expected." },
              { text: "To wait until they return.", why: "<i>Their work is yours until they return.</i>" } ] },
          { para: 4, q: "A loom stops an hour before the end of your shift. What do you do?",
            options: [
              { text: "Tell the supervisor before the shift ends.", correct: true,
                why: "<i>On the same shift</i>, and the second line rules out the alternative." },
              { text: "Write it in the handover note.", why: "Exactly what the notice tells you not to do instead." },
              { text: "Restart it and say nothing.", why: "Not an option the notice offers, and a stopped loom twice is a fault." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Read four short notices", letter: "B",
        concepts: ["word", "sequence"],
        kind: "sort", task: null, n: 0,
        prompt: "Sort each phrasal verb by whether it can be split by its object.",
        note: { kind: "words", title: "Separable and inseparable",
                body: "<p><b>Separable:</b> the object can go in the middle — <i>hand the pallets over</i> or <i>hand over the pallets</i>. With a pronoun it <b>must</b>: <i>hand them over</i>.<br><b>Inseparable:</b> the object always follows the whole verb — <i>cover for Fadi</i>, never <i>cover Fadi for</i>.</p>" },
        bins: [
          { id: "sep",   label: "Separable" },
          { id: "insep", label: "Inseparable" }
        ],
        items: [
          { text: "hand over",   bin: "sep",   why: "<i>hand them over</i>. With a pronoun, splitting is compulsory." },
          { text: "put through", bin: "sep",   why: "<i>I'll put you through.</i> Nobody says <i>put through you</i>." },
          { text: "follow up",   bin: "sep",   why: "<i>follow it up</i>. As a noun it becomes <i>a follow-up</i>." },
          { text: "take on",     bin: "sep",   why: "<i>take it on</i>, meaning accept it." },
          { text: "cover for",   bin: "insep", why: "<i>cover for Ghada.</i> The <i>for</i> cannot be separated from the verb." },
          { text: "get back to", bin: "insep", why: "three parts that travel together: <i>get back to you</i>." },
          { text: "hold on",     bin: "insep", why: "no object at all, so nothing can go in the middle." },
          { text: "look into",   bin: "insep", why: "<i>look into the problem</i>, never <i>look the problem into</i>." }
        ],
        closer: "<p>The rule that matters most in speech: if the object is a pronoun and the verb is separable, the split is <b>compulsory</b>. <i>Put through me</i> marks you out instantly.</p>" },

      { id: "3c", section: 3, sectionTitle: "Read four short notices", letter: "C",
        concepts: ["comparison", "speak"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three in each row belong together. Choose the one that does not.",
        items: [
          { group: "things you do on a telephone", options: [
            { text: "put someone through", why: "connect them to the right person." },
            { text: "take a message", why: "write down what the caller says." },
            { text: "read a number back", why: "repeat it so it can be checked." },
            { text: "hand over", correct: true, why: "A handover happens between shifts, face to face or in writing — not to a caller." } ] },
          { group: "separable phrasal verbs", options: [
            { text: "hand over", why: "<i>hand them over</i>." },
            { text: "put through", why: "<i>put you through</i>." },
            { text: "follow up", why: "<i>follow it up</i>." },
            { text: "cover for", correct: true, why: "Inseparable. The object always follows the whole verb." } ] },
          { group: "words for dealing with a problem", options: [
            { text: "sort out", why: "deal with it." },
            { text: "look into", why: "investigate it." },
            { text: "follow up", why: "chase it until it is finished." },
            { text: "hold on", correct: true, why: "To hold on is to wait. Nothing is being dealt with." } ] },
          { group: "nouns written as one word", options: [
            { text: "handover", why: "the verb is two words, the noun is one." },
            { text: "headset", why: "always one word." },
            { text: "doorway", why: "one word, unlike <i>visitor chair</i>." },
            { text: "follow up", correct: true, why: "As a noun it takes a hyphen: <i>a follow-up</i>. It is the odd one in a row about single words." } ] }
        ] }

    ]
  };
})();
