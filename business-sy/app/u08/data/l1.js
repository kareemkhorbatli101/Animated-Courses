/* Unit 8 · How the Business Has Changed — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u08-l1", unit: "u08", block: "l1", up: "../", tab: "AT WORK",
    objective: "Describe how a business has changed, and say what it used to do",
    next: "l2.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "The words of change", letter: "A",
        concepts: ["time", "supplier"],
        kind: "cards", task: null, n: 0,
        prompt: "Nine words a company uses about its own past. Say what each means before you turn it over.",
        cards: [
          { term: "relocate", ar: "ينتقل / ينقل الموقع",
            meaning: "to move a business to a different place",
            with: ["relocate the workshop", "a relocation"],
            why: "More formal than <i>move</i>, and used of operations rather than objects. A company relocates; a crate is moved." },
          { term: "scale back", ar: "يقلّص",
            meaning: "to make something smaller deliberately",
            with: ["scale back production", "scaled back to one shift"],
            why: "Separable phrasal verb, from Unit 6. Neutral in tone, which is why it is used in place of harder words." },
          { term: "diversify", ar: "ينوّع",
            meaning: "to add different products or markets",
            with: ["diversify into shirting", "a diversified order book"],
            why: "The usual answer to concentration risk from Unit 5. Expensive in the short run and the reason firms survive the long one." },
          { term: "overhaul", ar: "إصلاح شامل",
            meaning: "a thorough repair or reorganisation",
            with: ["overhaul the looms", "a complete overhaul"],
            why: "Noun and verb, with the stress moving: an OVERhaul, to overHAUL. Unit 12 returns to that pattern." },
          { term: "downtime", ar: "التوقّف عن الإنتاج",
            meaning: "time a machine or a plant is not running",
            with: ["unplanned downtime", "power downtime"],
            why: "From Unit 6. In a workshop that depends on an unreliable supply, it becomes a planning figure rather than an incident." },
          { term: "capacity utilisation", ar: "نسبة تشغيل الطاقة",
            meaning: "how much of what you could produce you actually do",
            with: ["running at 70% utilisation"],
            why: "The honest version of <i>busy</i>. A workshop at full capacity and one at seventy per cent look identical from the doorway." },
          { term: "lead indicator", ar: "مؤشّر مبكّر",
            meaning: "something that moves before the thing you care about",
            with: ["a lead indicator of demand"],
            why: "Enquiries are a lead indicator of orders. Watching them is how you see a change coming rather than reporting one." },
          { term: "turnaround", ar: "تعافٍ / تحوّل",
            meaning: "a recovery after a period of decline",
            with: ["a turnaround", "turn the business round"],
            why: "One word as a noun, three as a verb. Also used of the time to process something: <i>a two-day turnaround</i>." },
          { term: "retention", ar: "الاحتفاظ بالموظفين",
            meaning: "keeping the staff or the customers you have",
            with: ["staff retention", "retention has improved"],
            why: "Cheaper than recruitment and almost never measured. A firm that loses a trained weaver loses four months." }
        ],
        explain: { terms: [
          { en: "relocate", gloss: "move a business to a different place", ar: "ينتقل / ينقل الموقع" },
          { en: "diversify", gloss: "add different products or markets", ar: "ينوّع" },
          { en: "capacity utilisation", gloss: "how much of what you could make you do make", ar: "نسبة تشغيل الطاقة" },
          { en: "retention", gloss: "keeping the staff or customers you have", ar: "الاحتفاظ بالموظفين" }
        ] },
        after: "<p>Six of these are neutral words for difficult things. <b>Scale back</b>, <b>overhaul</b> and <b>turnaround</b> let a company describe a hard period accurately without dramatising it, which is what a buyer or a bank wants to read.</p>" },

      { id: "1b", section: 1, sectionTitle: "The words of change", letter: "B",
        concepts: ["sort", "time"],
        kind: "sort", task: null, n: 0,
        prompt: "Sort each statement by whether it is still true.",
        note: { kind: "words", title: "Finished, or still going on",
                body: "<p><b>Used to</b> says it is over. The <b>present perfect continuous</b> says it started and has not stopped. Choosing the wrong one tells a reader the opposite of what you mean.</p>" },
        bins: [
          { id: "over",  label: "Finished — no longer true" },
          { id: "going", label: "Started and still going on" }
        ],
        items: [
          { text: "We used to dye in house",            bin: "over",  why: "<i>Used to</i> always means it stopped." },
          { text: "We used to sell mainly to Iraq",     bin: "over",  why: "The market existed and no longer does, for this company." },
          { text: "The second workshop used to run nights", bin: "over", why: "Past arrangement, ended." },
          { text: "We did not use to subcontract",      bin: "over",  why: "The negative of <i>used to</i>: it was not true then, and the implication is that it is now." },
          { text: "We have been rebuilding capacity since 2022", bin: "going", why: "Started in 2022, still happening." },
          { text: "We have been running one shift for two years", bin: "going", why: "<i>For two years</i>, and still." },
          { text: "Enquiries have been rising since March", bin: "going", why: "A trend that has not stopped, which is why the continuous fits." },
          { text: "We have been trying to buy a dye plant", bin: "going", why: "Twice considered in Unit 1, and the effort continues." }
        ],
        closer: "<p>One of these is the most useful sentence a company can write about a bad period: <b>we used to</b> … says it is over, and a reader who was worried stops being worried.</p>" },

      { id: "2a", section: 2, sectionTitle: "Complete the history", letter: "A",
        concepts: ["time", "supplier"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "A paragraph for the company's updated profile. Choose the word for each gap.",
        heading: "Orontes Textiles — what has changed",
        note: { kind: "words", title: "Before you start",
                body: "<p>Watch for <b>used to</b> against the <b>present perfect continuous</b>. The first says it stopped; the second says it has not.</p>" },
        text: "The company ___ to dye its own cloth, in a plant on the same site. That plant closed in 2019 and the dyeing has been subcontracted ___ . We ___ to sell about a third of our output to buyers in Iraq; that share is now under ten per cent, and Jordan has taken its place. Since 2022 we have been ___ capacity back towards where it was, and utilisation has been rising for five quarters. We did not ___ to hold four weeks of yarn, but after two long delays we now do. Staff retention has ___ steadily since we moved to a single shift.",
        gaps: [
          { options: ["used", "use"], answer: "used",
            why: "<i>Used to</i> for a past state that has ended. The plant closed, so it has." },
          { options: ["since", "ever since"], answer: "since",
            why: "<i>Subcontracted since</i> — from that point to now. <i>Ever since</i> is possible and more emphatic than a profile needs." },
          { options: ["used", "use"], answer: "used",
            why: "Same form again, and the next clause confirms it: <i>that share is now under ten per cent</i>." },
          { options: ["building", "built"], answer: "building",
            why: "<i>Have been building</i> — started in 2022 and not finished. The continuous is the point of the sentence." },
          { options: ["use", "used"], answer: "use",
            why: "In the negative, <i>did not use to</i> — the <i>d</i> moves onto <i>did</i>. This is the gap most learners get wrong." },
          { options: ["improved", "been improving"], answer: "improved",
            why: "Either is possible, but <i>steadily</i> plus a completed comparison reads better in the simple present perfect here." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Complete the history", letter: "B",
        concepts: ["risk", "time"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "Nour's internal note on what the profile should and should not say. Choose the word for each gap.",
        heading: "Before this goes on the website",
        text: "Two comments. First, ___ you write <i>we used to dye in house</i>, a reader assumes we chose to stop. We did not; the plant became uneconomic when power costs rose. Say so in one clause, because a buyer who imagines a worse reason will imagine the ___ one. Second, do not write that we have been rebuilding ___ 2022 and then give no figure. A sentence like that with no number reads as hope. Give utilisation: sixty-two per cent then, seventy-one now. One more thing — ___ not use the word <i>crisis</i> anywhere. We had a difficult four years and so did everyone we sell to, and the firms that describe it plainly are the ones that still get ___ . Write it the way you would ___ it to a buyer standing in the workshop.",
        gaps: [
          { options: ["when", "if"], answer: "when",
            why: "It will happen, not it may. <i>When</i> assumes the reader reaches that sentence." },
          { options: ["worst", "worse"], answer: "worst",
            why: "Out of all the reasons they might imagine, so the superlative." },
          { options: ["since", "for"], answer: "since",
            why: "<i>2022</i> is a point, so <i>since</i>. <i>For</i> would need a length." },
          { options: ["do", "does"], answer: "do",
            why: "An imperative negative: <i>do not use</i>. The subject is understood." },
          { options: ["ordered", "orders"], answer: "orders",
            why: "<i>Get orders</i> — the plural noun, not a past participle." },
          { options: ["say", "tell"], answer: "say",
            why: "<i>Say it to someone</i>. <i>Tell</i> takes the person without a preposition: <i>tell a buyer</i>." }
        ],
        explain: { terms: [
          { en: "uneconomic", gloss: "costing more than it earns", ar: "غير مُجدٍ اقتصاديًا" },
          { en: "to read as", gloss: "to give the impression of", ar: "يُفهَم على أنه" }
        ] } },

      { id: "3a", section: 3, sectionTitle: "Read four short notices", letter: "A",
        concepts: ["read", "notice"],
        kind: "read", task: "read-notices", cefr: "B1", n: 4,
        prompt: "Four notices from a period of change. Choose what each one means.",
        text: { every: 1, mastColor: "blue", masthead: "NOTICES",
          blocks: [
            { h: "Shifts", lines: [
              "From Monday the workshop runs one shift, not two.",
              "No jobs are affected. The second shift's staff move to days." ] },
            { h: "Dye house", lines: [
              "All dyeing is now subcontracted to Homs.",
              "Lead times therefore include a transport leg that they did not before. Allow three extra days when quoting." ] },
            { h: "Power", lines: [
              "Generator hours are logged daily and reported monthly.",
              "A loom stopped by a power cut is downtime and must be recorded as such, not as a fault." ] },
            { h: "Yarn", lines: [
              "We now hold four weeks of yarn rather than one.",
              "This is deliberate. Do not treat the extra stock as available for other orders." ] }
          ] },
        items: [
          { para: 1, q: "What happens to the second shift's staff?",
            options: [
              { text: "They move to the day shift; nobody loses a job.", correct: true,
                why: "The second line exists to answer the question the first line raises." },
              { text: "They are laid off.", why: "<i>No jobs are affected</i>." },
              { text: "The notice does not say.", why: "It says it in the same breath as the change." } ] },
          { para: 2, q: "Why must quotations now allow three extra days?",
            options: [
              { text: "Because the cloth has to travel to Homs and back.", correct: true,
                why: "<i>A transport leg that they did not before</i> — the notice gives the mechanism." },
              { text: "Because the dyers are slower.", why: "Nothing about speed; the change is geographical." },
              { text: "Because of power cuts.", why: "That is the third notice." } ] },
          { para: 3, q: "A loom stops because the power fails. How is it recorded?",
            options: [
              { text: "As downtime, not as a fault.", correct: true,
                why: "The distinction matters: a fault log would send maintenance to a machine that is working." },
              { text: "As a fault.", why: "Explicitly ruled out." },
              { text: "It is not recorded.", why: "Generator hours are logged daily." } ] },
          { para: 4, q: "An urgent order needs yarn. May it use the four-week stock?",
            options: [
              { text: "No — the extra stock is held deliberately and is not available.", correct: true,
                why: "<i>Do not treat the extra stock as available for other orders.</i>" },
              { text: "Yes, if the order is urgent.", why: "The notice makes no exception." },
              { text: "Only with the supervisor's permission.", why: "No such permission is mentioned." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Read four short notices", letter: "B",
        concepts: ["word", "time"],
        kind: "build", task: null, n: 0,
        prompt: "The prefix <b>re-</b> and the prefix <b>over-</b>. Drag each root into the box for the prefix it takes here.",
        note: { kind: "words", title: "Word building: again, and too much",
                body: "<p><b>re-</b> means again: <em>build → rebuild</em>.<br><b>over-</b> means too much, or above: <em>charge → overcharge</em>, <em>see → oversee</em>.<br><em>Overhaul</em> is the odd one: it means a thorough repair, not too much hauling.</p>" },
        family: { word: "build", forms: [
          { part: "verb", word: "BUILD" },
          { part: "verb, again", word: "re·BUILD" },
          { part: "noun", word: "RE·build", note: "the stress moves to the front" },
          { part: "adjective", word: "re·BUILT" } ] },
        text: { every: 1, mastColor: "green", masthead: "IN USE",
          blocks: [ { lines: [
            "We have been <b>rebuilding</b> capacity since 2022 and we <b>relocated</b> the office in 2021.",
            "The looms need a full <b>overhaul</b>, and two of them are <b>overdue</b> for it.",
            "We <b>overcharged</b> them by two hundred metres and issued a credit note.",
            "Nour <b>oversees</b> the workshop; Fadi <b>reports</b> to her." ] } ] },
        items: [
          { root: "build",  affix: "re-",   answer: "rebuild",     why: "to build again. As a noun the stress moves to the front." },
          { root: "locate", affix: "re-",   answer: "relocate",    why: "to move operations somewhere else." },
          { root: "open",   affix: "re-",   answer: "reopen",      why: "from Unit 2 — <i>reopen the price</i> as well as a building." },
          { root: "charge", affix: "over-", answer: "overcharge",  why: "to charge too much. The fix is a credit note, from Unit 5." },
          { root: "due",    affix: "over-", answer: "overdue",     why: "past the time it should have happened. Not <i>too much due</i>." },
          { root: "see",    affix: "over-", answer: "oversee",     why: "to supervise — <i>over</i> here means above, not too much." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Read four short notices", letter: "C",
        concepts: ["comparison", "time"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three in each row belong together. Choose the one that does not.",
        items: [
          { group: "neutral words for making something smaller", options: [
            { text: "scale back", why: "deliberate, and tone-neutral." },
            { text: "consolidate", why: "combine into fewer, larger units." },
            { text: "streamline", why: "remove steps to make it simpler." },
            { text: "collapse", correct: true, why: "Sudden and involuntary. The other three are decisions." } ] },
          { group: "things that are still happening", options: [
            { text: "we have been rebuilding", why: "started and not finished." },
            { text: "utilisation has been rising", why: "a trend that continues." },
            { text: "enquiries have been increasing", why: "still going on." },
            { text: "we used to dye in house", correct: true, why: "<i>Used to</i> always means it stopped." } ] },
          { group: "measures of how busy a workshop is", options: [
            { text: "capacity utilisation", why: "how much of what you could make you do." },
            { text: "output", why: "what was actually produced." },
            { text: "shift count", why: "how many shifts are running." },
            { text: "retention", correct: true, why: "Retention is about keeping staff or customers, not about how busy you are." } ] },
          { group: "words for a recovery", options: [
            { text: "turnaround", why: "a recovery after decline." },
            { text: "rebuild", why: "putting back what was lost." },
            { text: "recovery", why: "the plainest of the three." },
            { text: "diversification", correct: true, why: "Spreading into new products or markets. It may help a recovery and it is not one." } ] }
        ] }

    ]
  };
})();
