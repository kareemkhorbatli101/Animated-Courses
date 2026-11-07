/* Unit 7 · Terms and Negotiation — LESSON 2 · WRITING */
(function () {
  window.PAGE = {
    id: "u07-l2", unit: "u07", block: "l2", up: "../", tab: "AT WORK",
    objective: "Write a conditional offer, and a refusal that leaves the deal alive",
    next: "l3.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "What a conditional offer does", letter: "A",
        concepts: ["write", "agreement"],
        kind: "annotate", task: null, n: 0,
        prompt: "An offer built on conditions. Click each sentence and say what job it does.",
        note: { kind: "writer", title: "Conditions are how you say yes safely",
                body: "<p>A flat yes commits you to everything. A conditional yes commits you to one thing in exchange for another, and it is almost always available where a flat yes is not.</p>" },
        jobs: [
          "Offers something, with the price of it attached",
          "States what the buyer must do",
          "States what happens if they do not",
          "Keeps a right without promising to use it",
          "Says what is not on the table"
        ],
        sentences: [
          { text: "If you commit to six thousand metres over the year, we will hold the unit price at 1,780.",
            job: "Offers something, with the price of it attached",
            why: "The whole offer in one sentence: their commitment, our concession. Neither half means anything alone." },
          { text: "The volume is measured on orders placed, not on orders delivered.",
            job: "States what the buyer must do",
            why: "It defines the thing being committed to. Most volume disputes are about this sentence being missing." },
          { text: "If the target is not reached, the price reverts to the published ladder for the final quarter.",
            job: "States what happens if they do not",
            why: "The clause Nour said was silent in the draft. Without it, failure has no consequence and the target is decoration." },
          { text: "If the cotton price moves by more than ten per cent, we may reopen the price before the year ends.",
            job: "Keeps a right without promising to use it",
            why: "<i>May</i>, not <i>will</i>. A right you can decline to exercise is worth more than an obligation you must." },
          { text: "Exclusivity is not part of this offer.",
            job: "Says what is not on the table",
            why: "Five words that prevent six weeks of correspondence. Naming the absence is cheaper than being asked." }
        ],
        after: "<p>Four of the five contain a condition. That is what a commercial offer mostly is: a list of things that are true only if other things are.</p>",
        explain: { terms: [
          { en: "to revert", gloss: "to go back to what it was", ar: "يعود إلى" },
          { en: "to reopen a price", gloss: "to renegotiate it before the agreement ends", ar: "إعادة فتح السعر" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "What a conditional offer does", letter: "B",
        concepts: ["write", "cost"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Write the internal note first. Thirty to forty words.",
        scenarioTitle: "What I am about to offer",
        scenario: "You are Samer. You want to offer Levant Home a held price of 1,780 for a 6,000-metre annual commitment, with the price reverting if they miss it. You are not offering exclusivity. Nour needs to see it before it goes.",
        to: "Nour Haddad, operations",
        re: "Levant Home — annual terms, before I send",
        placeholder: "Nour,\n\n",
        minWords: 30,
        frames: [
          "I am going to offer … if they …",
          "If they miss it, …",
          "I am not offering …",
          "Tell me before … if …"
        ],
        note: { kind: "writer", title: "Both halves of every condition",
                body: "<p>An internal note about a conditional offer must say what happens in both cases. Nour's job is to find the branch you have not thought about, and she cannot if you only describe one.</p>" },
        checklist: [
          "Is the concession stated with its condition?",
          "Have you said what happens if they miss the target?",
          "Have you said what you are not offering?",
          "Have you given her a way to stop you?"
        ],
        modelJobs: [
          "States the offer and its condition",
          "States the failure branch",
          "States what is excluded",
          "Leaves a way to object"
        ],
        model: "Nour,\n\nI am going to offer Levant Home 1,780 held for the year if they commit to six thousand metres. If they miss the target, the price reverts to the published ladder for the final quarter. I am not offering exclusivity and I will say so in the letter. Tell me before four if you want anything changed." },

      { id: "2a", section: 2, sectionTitle: "Build the sentence", letter: "A",
        concepts: ["write", "agreement"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Put the words in order. All three are real conditionals.",
        items: [
          { cue: "Offer a held price for a commitment.", band: "B1",
            target: "If you commit to six thousand metres we will hold the price",
            jobs: { "If": "linker", "you": "subject", "commit": "verb", "we": "subject", "will": "verb" },
            why: "Present in the <i>if</i> clause, <i>will</i> in the main clause. Both halves are about the future and only one shows it." },
          { cue: "Say what happens if they miss the target.", band: "B1",
            target: "If the target is not reached the price reverts to the ladder",
            jobs: { "If": "linker", "the target": "subject", "is": "verb", "the price": "subject", "reverts": "verb" },
            why: "A present simple main clause for an automatic consequence. In contract English this is commoner than <i>will revert</i>." },
          { cue: "Keep a right without promising to use it.", band: "B1",
            target: "If the cotton price moves sharply we may reopen the price",
            jobs: { "If": "linker", "the cotton price": "subject", "moves": "verb", "we": "subject", "may": "verb" },
            why: "<i>May</i> rather than <i>will</i>. The difference between a right and an obligation, in one word." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Build the sentence", letter: "B",
        concepts: ["write", "deadline"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Three more. These use time clauses rather than conditions.",
        items: [
          { cue: "Say what happens once something is confirmed.", band: "B1",
            target: "We will start production as soon as the deposit arrives",
            jobs: { "We": "subject", "will": "verb", "as soon as": "linker", "the deposit": "subject" },
            why: "After <i>as soon as</i>, present for a future event. <i>Will arrive</i> there is the error." },
          { cue: "Say when a price stops being valid.", band: "B1",
            target: "The price holds until the thirty days expire",
            jobs: { "The price": "subject", "holds": "verb", "until": "linker", "the thirty days": "subject" },
            why: "<i>Until</i> behaves like <i>when</i> and <i>as soon as</i>: present inside the clause, however future the event." },
          { cue: "Ask a conditional question.", band: "B1",
            target: "What happens if we miss the target by a hundred metres",
            jobs: { "What": "subject", "happens": "verb", "if": "linker", "we": "subject", "miss": "verb" },
            why: "A conditional question keeps the present in the <i>if</i> clause too. The question word carries the uncertainty." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write it yourself", letter: "A",
        concepts: ["write", "risk"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "A second internal note: the client has asked for something you cannot give. Thirty to forty words.",
        scenarioTitle: "They want exclusivity",
        scenario: "Levant Home have accepted the volume terms and asked for exclusivity in Jordan as well. Only the owner can grant it. You think it is worth considering for a three-year commitment, not for one year. You need Nour's view before you reply.",
        to: "Nour Haddad, operations",
        re: "Levant Home — they have asked for exclusivity",
        placeholder: "Nour,\n\n",
        minWords: 30,
        frames: [
          "They have accepted … and asked for …",
          "I have not …",
          "My view is that it is worth … if …",
          "Do you want me to … ?"
        ],
        note: { kind: "writer", title: "Separate the answer from the question",
                body: "<p>You may not grant it, so do not sound as though you might. Say you have not answered, give your view as a view, and ask for a decision — three separate sentences doing three separate jobs.</p>" },
        checklist: [
          "Have you said clearly that you have not agreed to anything?",
          "Is your own view marked as a view?",
          "Have you attached a condition to it?",
          "Is there one question?"
        ],
        modelJobs: [
          "Reports what they asked",
          "Says what you have not done",
          "Gives your view, with a condition",
          "Asks for a decision"
        ],
        model: "Nour,\n\nLevant Home have accepted the six-thousand-metre terms and asked for exclusivity in Jordan on top. I have not answered and will not without the owner. My own view is that it is worth discussing for a three-year commitment and not for one. Do you want me to put that to him, or should I simply decline for now?" },

      { id: "3b", section: 3, sectionTitle: "Write it yourself", letter: "B",
        concepts: ["write", "client"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Now refuse the exclusivity without losing the agreement. Sixty to eighty words.",
        scenarioTitle: "No, and here is what we can do",
        scenario: "You are declining exclusivity for a one-year agreement. You can offer it for discussion against a three-year commitment. You still want the volume agreement signed. The client has been reasonable throughout.",
        to: "Ms Rana Darwish, Levant Home, Amman",
        re: "Annual terms — and your question about exclusivity",
        placeholder: "Dear Ms Darwish,\n\n",
        minWords: 60,
        frames: [
          "Thank you for coming back so quickly on …",
          "On exclusivity, I am not able to … for a one-year …",
          "The reason is that …",
          "What I can do is … if …",
          "Meanwhile the volume terms …"
        ],
        note: { kind: "writer", title: "Refuse, explain, offer, ring-fence",
                body: "<p>Four moves. The fourth matters most: say explicitly that the thing already agreed is not affected, or the client will wait to see whether the refusal has unsettled everything else.</p>" },
        checklist: [
          "Is the refusal clear and early?",
          "Is there a reason, about your business rather than about them?",
          "Have you offered a version that could work?",
          "Have you protected the volume agreement explicitly?",
          "Is the tone the same as before the refusal?"
        ],
        modelJobs: [
          "Thanks them",
          "Refuses clearly",
          "Gives the reason",
          "Offers the version that could work",
          "Protects what is already agreed"
        ],
        model: "Dear Ms Darwish,\n\nThank you for coming back so quickly on the volume terms.\n\nOn exclusivity, I am not able to offer it against a one-year agreement. The reason is on our side rather than yours: Jordan is our largest export market and a single year is not long enough for us to give up the rest of it.\n\nWhat I can do is put a three-year arrangement to our owner, with exclusivity inside it, if that would interest you.\n\nMeanwhile the volume terms stand exactly as agreed, and I will send the signature copy today.\n\nSamer Khoury" },

      { id: "3c", section: 3, sectionTitle: "Write it yourself", letter: "C",
        concepts: ["write", "margin"],
        kind: "paragraph", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "One paragraph explaining the discount ladder to a buyer who thinks it should be a straight line.",
        min: 60,
        note: { kind: "writer", title: "Explain the shape, not just the numbers",
                body: "<p>A ladder has steps because the cost it reflects has steps: a longer run, a full container, one set-up instead of two. If you explain the mechanism, the buyer stops arguing about the figures and starts planning around them.</p>" },
        must: [
          "What the steps are",
          "Why it is steps and not a straight line",
          "What the buyer should do if they are close to a step",
          "That the steps are not negotiable between them"
        ],
        model: "Our discount works in steps rather than as a sliding scale: two per cent at three thousand metres, four at six thousand and six at ten. The steps exist because our own costs move in steps. Six thousand metres is a full run on one set-up rather than two, and ten thousand fills a container that would otherwise travel part empty. Between the steps nothing changes for us, which is why nothing changes for you. If an order lands close to a step, tell us and we will say how far away you are — fifty metres is usually cheaper than the discount it unlocks.",
        explain: { terms: [
          { en: "sliding scale", gloss: "a charge that changes gradually, not in steps", ar: "مقياس متدرّج" },
          { en: "a run", gloss: "one continuous production batch", ar: "دفعة إنتاج" }
        ] } }

    ]
  };
})();
