/* Unit 7 · Markets and Choices — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u07-l1", unit: "u07", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name an incentive, and what it does to people",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words. The last two are the pair this unit is really about.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 incentive</b> — a reason to act, built into the rules",
          "<b>2 trade-off</b> — what you give up to get something else",
          "<b>3 demand</b> — how much people will buy at a given price",
          "<b>4 supply</b> — how much will be offered at that price",
          "<b>5 scheme</b> — a designed set of rules and rewards",
          "<b>6 verify</b> — to check that a claimed result is real",
          "<b>7 measure</b> — the number you collect",
          "<b>8 target</b> — the number you are rewarded for hitting"
        ] }] },
        after: "<p>When 7 becomes 8, people start optimising the number instead of the thing. The article in Lesson 5 is about exactly that.</p>" },

            { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        kind: "match", task: null, n: 0,
        prompt: "A street where the charge applies. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A city street at the boundary of a charging zone: a sign, a camera on a post, a shop front, a ticket machine, a bus stop and a pedestrian crossing",
          parts: [
            { p: "wall",  x: 0, y: 0,   sx: 10, sy: 3.1 },
            { p: "floor", x: 0, y: 192, sx: 10, sy: 3.8 },
            { p: "building", x: 60,  y: 30,  s: 2.3 },
            { p: "building", x: 300, y: 46,  s: 1.9 },
            { p: "tree",     x: 540, y: 60,  s: 1.6 },
            { p: "sign",     x: 700, y: 120, s: 1.4 },
            { p: "sign",     x: 860, y: 100, s: 1.1 },
            { p: "path",     x: 120, y: 230, sx: 5.4, sy: 2.9 },
            { p: "counter",  x: 620, y: 300, sx: 1.2, sy: 1.5 },
            { p: "bench",    x: 260, y: 400, sx: 2.4, sy: 1.3 },
            { p: "person",   x: 420, y: 330, s: 1.5 }
          ] },
        pins: [
          { id: "p-zone",   x: 73, y: 46, tx: 73, ty: 28, w: 150 },
          { id: "p-camera", x: 90, y: 40, tx: 89, ty: 22, w: 130 },
          { id: "p-front",  x: 14, y: 12, tx: 13, ty: 26, w: 150 },
          { id: "p-machine",x: 76, y: 74, tx: 66, ty: 62, w: 160 },
          { id: "p-stop",   x: 24, y: 88, tx: 31, ty: 76, w: 150 },
          { id: "p-cross",  x: 50, y: 88, tx: 40, ty: 80, w: 160 }
        ],
        pairs: [
          { word: "charging zone", pin: "p-zone",
            why: "the area the charge applies in. <i>Zone</i> is the usual word in this policy; <i>area</i> is vaguer and avoided for that reason." },
          { word: "camera", pin: "p-camera",
            why: "what makes the charge enforceable. A scheme nobody can verify is the thing Lesson 5's article is about." },
          { word: "shop front", pin: "p-front",
            why: "two words. The businesses inside are who complains first when a scheme changes how many people walk past." },
          { word: "ticket machine", pin: "p-machine",
            why: "where the charge is paid. The friction of paying is itself part of the incentive, which is why online payment changed the scheme's effect." },
          { word: "bus stop", pin: "p-stop",
            why: "the substitute the scheme is pushing people towards. A charge with no alternative is a tax, not an incentive." },
          { word: "pedestrian crossing", pin: "p-cross",
            why: "<i>pedestrian</i> as a noun means a person on foot, and as an adjective it means dull — one of English's less helpful pairs." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Identify the vocabulary", letter: "C",
        carry: "1a",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "An i___ is a reason to act that the rules create.", answer: "incentive", given: [0, 1, 2],
            why: "<i>Incentive</i> — the central idea of the unit." },
          { text: "Every choice has a t___: something given up for something gained.", answer: "trade", given: [0, 1],
            why: "<i>Trade-off</i>. Here only the first element is needed." },
          { text: "A good scheme says how the result will be v___.", answer: "verified", given: [0, 1],
            why: "<i>Verify</i> — and the article makes this the test of a well designed scheme." },
          { text: "Once a measure becomes a t___, people optimise the number.", answer: "target", given: [0, 1],
            why: "<i>Target</i> — the second half of the pair." }
        ] },

            { id: "1d", section: 1, sectionTitle: "Identify the vocabulary", letter: "D",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Four more. These are the words the scheme in Lesson 5 is argued about with.",
        items: [
          { text: "A charge changes behaviour only if there is a realistic a___ .", answer: "alternative", given: [0, 1],
            why: "<i>Alternative</i> takes <i>to</i>: <i>an alternative to driving</i>, not <i>of driving</i>." },
          { text: "If the price rises, d___ for the same good usually falls.", answer: "demand", given: [0, 1],
            why: "Uncountable in this sense: <i>demand is</i>, never <i>demands are</i> when you mean the economic quantity." },
          { text: "A s___ needs rules, rewards and a way of checking them.", answer: "scheme", given: [0, 1],
            why: "In British English a <i>scheme</i> is neutral; in American English it leans towards something dishonest, which is worth knowing when you read." },
          { text: "The c___ of a choice is whatever you gave up to make it.", answer: "cost", given: [0, 1],
            why: "In economics the word covers more than money. Lesson 5 turns on that wider sense." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The suffix -al", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "<b>-al</b> turns a noun into an adjective. It is everywhere in economics writing.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>margin → margin<b>al</b> · season → season<b>al</b> · capital · finance → financi<b>al</b> · institution → institution<b>al</b> · nation → nation<b>al</b>.<br>Watch the spelling: <i>finance</i> drops the <i>e</i> and gains an <i>i</i>.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "-AL IN ECONOMICS WRITING",
          blocks: [{ lines: [
            "A <b>marginal</b> change is the effect of one more unit — not the total, and the two are constantly confused.",
            "A <b>seasonal</b> pattern repeats each year and must be removed before any trend is read.",
            "An <b>institutional</b> incentive belongs to the organisation, not to the individuals inside it.",
            "A <b>financial</b> cost is one measured in money, which is only one kind of cost."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The suffix -al", letter: "B",
        carry: "2a",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the adjective. The sentence tells you which noun it is built from.",
        items: [
          { text: "The m___ cost of the next unit is what matters, not the average.", answer: "marginal", given: [0, 1, 2],
            why: "<i>margin + al</i>: the effect of one more." },
          { text: "The s___ rise every December has to be removed first.", answer: "seasonal", given: [0, 1, 2],
            why: "<i>season + al</i>." },
          { text: "The problem is i___, not a matter of individual honesty.", answer: "institutional", given: [0, 1, 2],
            why: "<i>institution + al</i> — the article's own distinction." },
          { text: "A f___ cost is measured in money; others are not.", answer: "financial", given: [0, 1, 2],
            why: "<i>finance → financial</i>: the <i>e</i> goes, an <i>i</i> arrives." }
        ] },

      { id: "2c", section: 2, sectionTitle: "The suffix -al", letter: "C",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Four more <b>-al</b> adjectives. Two of them change the noun's spelling on the way.",
        items: [
          { text: "The effect is s___ : it tells you two things vary together, not that one causes the other.", answer: "statistical", given: [0, 1],
            why: "<i>statistic + al</i>. The noun <i>statistics</i> is singular when it names the subject and plural when it names the numbers." },
          { text: "A p___ decision is one taken by government rather than by a market.", answer: "political", given: [0, 1],
            why: "<i>politics → political</i>: the <i>s</i> goes." },
          { text: "The scheme had an unintended b___ effect: people simply drove further round.", answer: "behavioural", given: [0, 1],
            why: "<i>behaviour + al</i>, and in American English <i>behavioral</i> with no <i>u</i>. Both appear in the literature." },
          { text: "A m___ claim about a policy is not the same as an economic one.", answer: "moral", given: [0, 1],
            why: "From <i>mores</i> rather than from a modern English noun, which is why there is no <i>morality + al</i> about it." }
        ] },

      { id: "2d", section: 2, sectionTitle: "The suffix -al", letter: "D",
        kind: "oddone", task: null, n: 0,
        prompt: "Three words in each row belong together. Choose the one that does not.",
        items: [
          { group: "three are what a scheme is made of",
            options: [
              { text: "rule",      why: "what you may and may not do." },
              { text: "reward",    why: "what you get for doing it." },
              { text: "check",     why: "how anyone knows whether you did." },
              { text: "trade-off", correct: true,
                why: "the odd one: a trade-off is what a choice costs you, not a part of the machinery that presents the choice." }
            ] },
          { group: "three are adjectives built with this unit's suffix",
            options: [
              { text: "marginal",      why: "<i>margin + al</i>." },
              { text: "seasonal",      why: "<i>season + al</i>." },
              { text: "institutional", why: "<i>institution + al</i>." },
              { text: "rival", correct: true,
                why: "the odd one: it comes whole from Latin <i>rivalis</i>, and there is no English noun <i>riv</i> underneath it." }
            ] },
          { group: "three describe the effect of one more unit",
            options: [
              { text: "marginal",   why: "the standard term: the effect of the next one." },
              { text: "incremental", why: "the same idea in plainer English." },
              { text: "additional", why: "looser, but used the same way in policy writing." },
              { text: "average", correct: true,
                why: "the odd one: an average is the total divided by the count, which is a different number from the effect of the next unit — and confusing the two is the commonest error in this subject." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Cost and price", letter: "A",
        kind: "sort", task: null, n: 0,
        prompt: "Eight things somebody gave up. Sort them by whether an accountant would count them.",
        note: { kind: "words", title: "In other words…",
                body: "<p>Economics counts the value of the best thing you did <i>not</i> do, and calls it opportunity cost. Accounting counts money that moved. A great deal of argument about policy is really this distinction, unstated.</p>" },
        bins: [
          { id: "money", label: "Money that changed hands", hint: "an accountant counts it" },
          { id: "forgone", label: "Something given up",      hint: "only economics counts it" }
        ],
        items: [
          { text: "the five pound charge",        bin: "money",   why: "paid, recorded, and on somebody's books." },
          { text: "the bus fare instead",         bin: "money",   why: "also paid, and it is what the charge pushed them towards." },
          { text: "the fuel not bought",          bin: "money",   why: "a saving rather than a spend, but still a movement of money." },
          { text: "the fine for not paying",      bin: "money",   why: "money, and the part of the scheme that makes the rest of it credible." },
          { text: "the forty minutes on the bus", bin: "forgone", why: "time, which the accounts cannot see and the traveller certainly can." },
          { text: "the meeting she arrived late for", bin: "forgone", why: "an opportunity, and the kind of cost that falls unevenly across people." },
          { text: "the shop she now walks past rather than into", bin: "forgone", why: "a loss to the shop that appears in nobody's ledger as a cost of the scheme." },
          { text: "the second-best route she gave up", bin: "forgone", why: "the textbook case: opportunity cost is the value of exactly this, the best alternative not taken." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Say in one sentence what happens when a measure becomes a target.</p>" } }
    ]
  };
})();
