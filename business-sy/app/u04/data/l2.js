/* Unit 4 · Order Status and Progress — LESSON 2 · WRITING */
(function () {
  window.PAGE = {
    id: "u04-l2", unit: "u04", block: "l2", up: "../", tab: "AT WORK",
    objective: "Write a status update, and a request for help that does not read as a failure",
    next: "l3.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "What a status update is for", letter: "A",
        concepts: ["write", "deadline"],
        kind: "annotate", task: null, n: 0,
        prompt: "A weekly update to a client. Click each sentence and say what job it does.",
        note: { kind: "writer", title: "The reader has one question",
                body: "<p>They want to know when it will arrive. Everything else in the message exists to make that answer believable, so the answer itself should not be buried at the bottom.</p>" },
        jobs: [
          "Says what has been done",
          "Says what is happening now",
          "Says what is blocked, and for how long",
          "Gives the expected date",
          "Says when the next update comes"
        ],
        sentences: [
          { text: "The first thousand metres have been woven and finished.",
            job: "Says what has been done",
            why: "Present perfect: completed, and still relevant because it is sitting in the warehouse. A date would have made it history instead of status." },
          { text: "The second thousand is on the loom now.",
            job: "Says what is happening now",
            why: "Present continuous for work in progress. One sentence, no detail — the client does not need to know which loom." },
          { text: "We have been waiting for the dark blue yarn for nine days.",
            job: "Says what is blocked, and for how long",
            why: "The sentence most writers leave out. <i>For nine days</i> is what turns a complaint into a measurement." },
          { text: "Our current ETA is Monday the eighteenth.",
            job: "Gives the expected date",
            why: "<i>Current</i> and <i>ETA</i> both signal that it may move. Both are doing work." },
          { text: "I will write again on Thursday whether or not the yarn has arrived.",
            job: "Says when the next update comes",
            why: "<i>Whether or not</i> is the promise. An update that only comes when there is good news teaches the client to fear silence." }
        ],
        after: "<p>Five sentences, and the client now knows more than most clients ever know. The one that costs nothing and buys most is the last.</p>",
        explain: { terms: [
          { en: "on the loom", gloss: "being woven now", ar: "على النول" },
          { en: "whether or not", gloss: "in both cases, good or bad", ar: "سواء أم لا" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "What a status update is for", letter: "B",
        concepts: ["write", "delivery"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Write the internal version first. Thirty to forty words.",
        scenarioTitle: "Where is 4417?",
        scenario: "You are Fadi. The first 1,000 metres are finished and packed. The second 1,000 is on the loom. The dark blue yarn has been outstanding for nine days. Nour needs to know before she speaks to the client at eleven.",
        to: "Nour Haddad, operations",
        re: "4417 — where we are",
        placeholder: "Nour,\n\n",
        minWords: 30,
        frames: [
          "First thousand: …",
          "Second thousand: …",
          "Still waiting for … — now … days.",
          "Earliest realistic dispatch is …"
        ],
        note: { kind: "writer", title: "Internal means no softening",
                body: "<p>A client update manages expectations. An internal update exists so the manager is not surprised. Give the worst number plainly — she is about to repeat it to someone who will remember it.</p>" },
        checklist: [
          "Are both halves of the order accounted for?",
          "Have you said how long the yarn has been outstanding?",
          "Have you given a realistic date rather than a hopeful one?",
          "Is it short enough to read before a phone call?"
        ],
        modelJobs: [
          "Says what is done",
          "Says what is in progress",
          "Says what is blocked, with a number",
          "Gives a realistic date"
        ],
        model: "Nour,\n\nFirst thousand metres finished and packed. Second thousand is on the loom and will be off by Thursday. Still waiting on the dark blue yarn — nine days now, and Homs says tomorrow for the third time. Earliest realistic dispatch is Monday the eighteenth, not Friday." },

      { id: "2a", section: 2, sectionTitle: "Build the sentence", letter: "A",
        concepts: ["write", "time"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Put the words in order. All three report a state that is still going on.",
        items: [
          { cue: "Say what has been completed.", band: "B1",
            target: "The first thousand metres have been finished and packed",
            jobs: { "The first thousand metres": "subject", "have": "verb", "and": "linker" },
            why: "Passive present perfect: <i>have been</i> plus the past participle. Two participles share one <i>have been</i>." },
          { cue: "Say how long something has been blocked, using a length.", band: "B1",
            target: "We have been waiting for the yarn for nine days",
            jobs: { "We": "subject", "have": "verb", "for": "adverbial" },
            why: "<i>For</i> plus a length. The first <i>for</i> belongs to <i>wait for</i>; the second measures the time." },
          { cue: "Say how long, using a starting point.", band: "B1",
            target: "The order has been in production since the ninth",
            jobs: { "The order": "subject", "has": "verb", "since": "linker" },
            why: "<i>Since</i> takes the point it started. Swapping <i>for</i> and <i>since</i> is the commonest error in this unit." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Build the sentence", letter: "B",
        concepts: ["write", "escalation"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Three more. These ask for something.",
        items: [
          { cue: "Ask for help without saying you have failed.", band: "B1",
            target: "I have tried the dye house three times and got nowhere",
            jobs: { "I": "subject", "have": "verb", "and": "linker" },
            why: "The present perfect shows the effort is recent and finished. Listing what you tried is what makes a request for help read as competence." },
          { cue: "Ask someone to do the thing you cannot.", band: "B1",
            target: "Could you call them yourself before the end of the day",
            jobs: { "Could": "verb", "you": "subject", "before": "adverbial" },
            why: "<i>Could you</i> rather than <i>can you</i> is softer, and the deadline is what makes it actionable." },
          { cue: "Say what has not happened yet.", band: "B1",
            target: "Nothing has left the workshop yet",
            jobs: { "Nothing": "subject", "has": "verb", "yet": "adverbial" },
            why: "<i>Yet</i> goes at the end with the present perfect, and it carries the expectation that it still will." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write it yourself", letter: "A",
        concepts: ["write", "escalation"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Ask for help. Thirty to forty words, and no apologising for needing it.",
        scenarioTitle: "The dye house will not answer",
        scenario: "You are Fadi. You have called the Homs dye house three times in two days and been told <i>tomorrow</i> each time. You do not have the standing to escalate it; Nour does. The order cannot move until the yarn does.",
        to: "Nour Haddad, operations",
        re: "Homs yarn — I need you to call",
        placeholder: "Nour,\n\n",
        minWords: 30,
        frames: [
          "I have called … three times since …",
          "Each time they have said …",
          "Could you … ?",
          "Nothing else on 4417 can move until …"
        ],
        note: { kind: "writer", title: "Ask without losing face",
                body: "<p>Say what you have already done, say what it produced, then ask for the one thing you cannot do yourself. A request shaped that way reads as a handover, not as a failure — and it is Unit 4's At Work lesson in a single message.</p>" },
        checklist: [
          "Have you said what you already tried, with a number?",
          "Have you said what the result was?",
          "Have you asked for one specific thing?",
          "Have you said what is blocked until it happens?",
          "Have you avoided apologising for asking?"
        ],
        modelJobs: [
          "Says what you have already done",
          "Says what it produced",
          "Asks for one specific thing",
          "Says what is blocked until then"
        ],
        model: "Nour,\n\nI have called Homs three times since Monday about the dark blue. Each time they have said tomorrow, and each time nothing has arrived. Could you call Ziad yourself today? Nothing else on 4417 can move until that yarn is released, and I have run out of ways to push it from here." },

      { id: "3b", section: 3, sectionTitle: "Write it yourself", letter: "B",
        concepts: ["write", "client"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Now the client version of the same week. Sixty to eighty words.",
        scenarioTitle: "Weekly update to Amman",
        scenario: "First 1,000 metres finished and packed. Second 1,000 on the loom, off by Thursday. Dark blue yarn outstanding nine days. ETA now Monday the eighteenth, not Friday the fifteenth. You will update again Thursday either way.",
        to: "Ms Rana Darwish, Levant Home, Amman",
        re: "Order 4417 — weekly update",
        placeholder: "Dear Ms Darwish,\n\n",
        minWords: 60,
        frames: [
          "The first thousand metres have …",
          "The second thousand is …",
          "We have been waiting for … for …",
          "Our ETA is now … rather than …",
          "I will write again on … whether or not …"
        ],
        note: { kind: "writer", title: "Move the date explicitly",
                body: "<p>If the date has changed, say both dates. A new date given without the old one beside it looks like the date you always had, and the client discovers the slip when they check their own notes.</p>" },
        checklist: [
          "Is the progress stated before the problem?",
          "Have you given the length of the delay as a number?",
          "Have you given both the old date and the new one?",
          "Have you promised a next update regardless of news?",
          "Have you avoided blaming the dye house by name?"
        ],
        modelJobs: [
          "Says what is done",
          "Says what is in progress",
          "Says what is blocked, with a number",
          "Moves the date, naming both",
          "Promises the next update"
        ],
        model: "Dear Ms Darwish,\n\nThe first thousand metres of order 4417 have been woven, finished and packed. The second thousand is on the loom now and will be off it by Thursday.\n\nWe have been waiting for the dark blue yarn for nine days. Our supplier has promised it repeatedly and I am now escalating it directly.\n\nOur ETA is therefore Monday the eighteenth rather than Friday the fifteenth. I am sorry for the change.\n\nI will write again on Thursday whether or not the yarn has arrived.\n\nSamer Khoury" },

      { id: "3c", section: 3, sectionTitle: "Write it yourself", letter: "C",
        concepts: ["write", "risk"],
        kind: "paragraph", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "One paragraph offering a part delivery, with the consequences spelled out.",
        min: 60,
        note: { kind: "writer", title: "An offer with its costs attached",
                body: "<p>A part delivery sounds generous and is not free: it means two lots of freight, two sets of paperwork, and a backorder somebody has to track. Offer it with the costs visible, so the client chooses rather than discovers.</p>" },
        must: [
          "What would be sent now, as a quantity",
          "What would be held as a backorder",
          "What the second delivery costs or delays",
          "That the decision is theirs, with a date for it"
        ],
        model: "If having something on the shelf matters more than having everything at once, we can send the thousand metres that are finished this week and hold the dark blue as a backorder. You would have stock in Amman about ten days earlier than otherwise. The cost is a second freight charge, which we would share, and a second customs clearance, which adds two or three days at the border for the balance. The backorder would be tracked against the same order number so nothing is lost. Could you let me know by Thursday, as the truck is booked that afternoon?",
        explain: { terms: [
          { en: "part delivery", gloss: "sending some of an order now, the rest later", ar: "تسليم جزئي" },
          { en: "to hold as a backorder", gloss: "to keep owing it and supply it later", ar: "تأجيل الكمية المتبقّية" }
        ] } }

    ]
  };
})();
