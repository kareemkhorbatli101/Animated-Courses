/* Unit 5 · Following Up and Payment — AT WORK
   Give a helpful suggestion in a team task. */
(function () {
  window.PAGE = {
    id: "u05-oc", unit: "u05", block: "oc", up: "../", tab: "AT WORK",
    objective: "Offer an idea in a way that is easy to build on and easy to reject",
    next: "tw.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "A team with a problem", letter: "A",
        concepts: ["listen", "people"],
        kind: "notes", task: "listen-note-monologue", cefr: "B1", n: 6,
        prompt: "Nour sets up the problem before opening it to the room. Fill in the form as you listen.",
        audio: { track: "u05-setup", label: "Team meeting — the problem",
          lines: [
            { who: "nour", text: "I want ideas, not agreement, so let me put the problem down and then say nothing for a while." },
            { who: "nour", text: "Our days sales outstanding has risen from forty-one to forty-six, and that is the fifth quarter running." },
            { who: "nour", text: "Lina's note says, and I agree, that most of this is growth rather than bad behaviour. Two clients are ordering more and paying normally." },
            { who: "nour", text: "But sixty-one per cent of what we are owed now sits with those two names, against forty-four a year ago. That is the number that would hurt us." },
            { who: "nour", text: "There is no crisis. Nothing is past ninety days and we hold no provision. I am not asking anyone to solve a problem we do not yet have." },
            { who: "nour", text: "What I want is ideas about the concentration, and I want the bad ones said out loud too, because we have had four meetings about this and produced nothing." },
            { who: "nour", text: "One rule. Nobody says why an idea will not work until every idea is on the table. We can throw them out afterwards." } ] },
        title: "Team meeting — the problem",
        lines: [
          "DSO has risen from 41 to ___ ",
          "That is the ___ quarter running",
          "Most of the rise is ___ , not bad behaviour",
          "Two clients now hold ___ per cent of what we are owed",
          "A year ago that figure was ___ ",
          "The rule: no objections until every ___ is on the table"
        ],
        gaps: [
          { answer: "46", why: "The headline figure, given early and then argued down in importance." },
          { answer: "fifth", why: "A single quarter's move is noise. Five in a row is a direction." },
          { answer: "growth", why: "She agrees with Lina's reading before anyone can treat the rise as an accusation." },
          { answer: "61", why: "The number she actually called the meeting about." },
          { answer: "44", why: "Without last year's figure, sixty-one is just a number." },
          { answer: "idea", why: "The rule that makes the next scene possible." }
        ],
        note: { kind: "life", title: "Separating ideas from objections",
                body: "<p>Her last rule is the whole technique. Most meetings produce nothing because each idea is killed before the next one is spoken, and after two deaths people stop offering.</p>" },
        explain: { terms: [
          { en: "to produce nothing", gloss: "to end with no decision or idea", ar: "دون نتيجة" },
          { en: "on the table", gloss: "available to be discussed", ar: "مطروح للنقاش" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "A team with a problem", letter: "B",
        concepts: ["listen", "agreement"],
        kind: "talk", task: "listen-discussion", cefr: "B1", n: 8,
        prompt: "The discussion. Listen, then answer.",
        speaker: "nour",
        speakerNote: "with Lina, Samer and Fadi",
        audio: { track: "u05-ideas", label: "Team meeting — the ideas",
          lines: [
            { who: "samer", text: "Could we simply find a third large client? It does not reduce what the two owe, but it changes the share." },
            { who: "nour", text: "On the table. Next." },
            { who: "lina", text: "What if we shortened terms for new clients only? Twenty-one days instead of thirty. It would not touch the two we are worried about, and over a year it would change the mix." },
            { who: "fadi", text: "Mine is probably stupid. Could we ask the two big ones to pay a deposit on large orders, the way a first-order client does?" },
            { who: "nour", text: "Say it without the apology next time. It is on the table." },
            { who: "samer", text: "Actually that one is better than mine. It takes money in earlier without asking anyone to pay more." },
            { who: "lina", text: "Could we offer a small discount for payment in fifteen days? Two per cent. It costs margin and it buys weeks." },
            { who: "fadi", text: "Could we stop quoting ex works and quote landed, so the freight is inside our invoice and we are not waiting on two documents?" },
            { who: "nour", text: "That is five. Anyone else? No. Now we can argue." },
            { who: "lina", text: "The discount is the one I would do last. Two per cent of a large order is more than the finance cost of the weeks it buys." },
            { who: "samer", text: "Agreed, and finding a third client is a year of work, not a decision we can take today." },
            { who: "nour", text: "So the two that could start this month are Fadi's deposit and Lina's shorter terms for new clients." },
            { who: "fadi", text: "Will the two big clients accept a deposit? They are not new." },
            { who: "nour", text: "Probably not as a rule. Possibly on orders above a size, if we explain it as capacity booking rather than as a credit check." },
            { who: "samer", text: "That I could sell. Nobody minds reserving capacity. Everybody minds being told they are a risk." },
            { who: "nour", text: "Then that is the version we take. Samer drafts it, Lina checks the numbers, and we look at it again in two weeks." },
            { who: "lina", text: "One thing before we close. If we do ask for deposits on large orders, I will need a rule about what counts as large. Otherwise I will be deciding it invoice by invoice, and I will get it wrong." },
            { who: "nour", text: "Fair. Propose a figure when you check the numbers, and propose it as a round one. A threshold that is easy to remember gets followed; one that is exactly right gets argued about." },
            { who: "fadi", text: "Can I ask what happens if they say no?" },
            { who: "nour", text: "Then we are where we are today, which is not a crisis. That is worth saying plainly: none of this is urgent. I would rather we tried something small now than something large in a year." } ] },
        items: [
          { q: "Why does Nour say <i>on the table, next</i>?",
            options: [
              { text: "To collect ideas without discussing any of them yet.", correct: true,
                why: "Her rule from the setup: no objections until everything is said." },
              { text: "Because she dislikes the idea.", why: "She gives every idea the same two words, including the one that wins." },
              { text: "Because time is short.", why: "She makes time for five ideas and a full argument afterwards." } ] },
          { q: "What is notable about Lina's first suggestion?",
            options: [
              { text: "It deliberately avoids touching the two clients in question.", correct: true,
                why: "<i>It would not touch the two we are worried about</i> — she names the limit of her own idea." },
              { text: "It applies to all clients.", why: "New clients only, which is the point." },
              { text: "It is about discounts.", why: "That is her second suggestion, later." } ] },
          { q: "How does Nour respond to Fadi's apology?",
            options: [
              { text: "She tells him to drop the apology and accepts the idea.", correct: true,
                why: "<i>Say it without the apology next time. It is on the table.</i> Both halves matter." },
              { text: "She agrees it was a weak idea.", why: "It becomes the idea the meeting adopts." },
              { text: "She ignores it.", why: "She addresses the apology directly." } ] },
          { q: "What does Samer do immediately after Fadi's idea?",
            options: [
              { text: "He says it is better than his own, and says why.", correct: true,
                why: "<i>It takes money in earlier without asking anyone to pay more.</i> Supporting someone else's idea with a reason is the most useful move in the scene." },
              { text: "He defends his own idea.", why: "He sets it aside." },
              { text: "He objects.", why: "The rule forbids objections at that point, and he does not." } ] },
          { q: "Why does Lina argue against her own discount idea?",
            options: [
              { text: "Two per cent costs more than the weeks it buys.", correct: true,
                why: "She put it on the table and then costed it. Proposing and then testing your own idea is not inconsistency." },
              { text: "Because Nour did not like it.", why: "Nour says nothing about it." },
              { text: "Because it is too complicated.", why: "Her objection is arithmetical." } ] },
          { q: "What is Fadi's objection to his own idea?",
            options: [
              { text: "The two big clients are not new, so a deposit may not apply to them.", correct: true,
                why: "A question rather than a retreat, and it produces the reframing that makes the idea work." },
              { text: "It costs too much margin.", why: "That was the discount." },
              { text: "It would take a year.", why: "That was finding a third client." } ] },
          { q: "How is the deposit reframed so it might be accepted?",
            options: [
              { text: "As booking capacity rather than as a credit check.", correct: true,
                why: "Samer's line: nobody minds reserving capacity, everybody minds being told they are a risk." },
              { text: "As a discount.", why: "A different idea entirely." },
              { text: "As a legal requirement.", why: "Nothing of the kind is suggested." } ] },
          { q: "What is decided at the end?",
            options: [
              { text: "Samer drafts the capacity version, Lina checks the numbers, review in two weeks.", correct: true,
                why: "Two names, two tasks and a date. A meeting that ends without those has produced a conversation, not a decision." },
              { text: "Nothing is decided.", why: "Three things are." },
              { text: "The discount is adopted.", why: "It is the one both Lina and Samer rule out." } ] }
        ],
        explain: { terms: [
          { en: "capacity booking", gloss: "paying to reserve production time", ar: "حجز الطاقة الإنتاجية" },
          { en: "to sell an idea", gloss: "to persuade someone to accept it", ar: "إقناع بالفكرة" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Offer it so it can be built on", letter: "A",
        concepts: ["speak", "agreement"],
        kind: "phrases", task: null, n: 0,
        prompt: "The phrases that made five ideas possible. Click each one.",
        note: { kind: "life", title: "Easy to reject is a feature",
                body: "<p>An idea offered as a question can be turned down without anybody losing anything. An idea offered as a conclusion has to be defeated, and defeating people is slow.</p>" },
        text: "Could we simply find a third large client? What if we shortened terms for new clients only? It would not touch the two we are worried about. Could we ask the two big ones to pay a deposit on large orders? Actually that one is better than mine. It takes money in earlier without asking anyone to pay more. The discount is the one I would do last. Will the two big clients accept a deposit? Nobody minds reserving capacity. Everybody minds being told they are a risk.",
        phrases: [
          { text: "Could we simply find a third large client?",
            why: "<i>Could we</i> opens an idea as a question. The word <i>simply</i> is also honest — it admits the idea is obvious." },
          { text: "What if we shortened terms for new clients only?",
            why: "<i>What if</i> is the lightest way to put a proposal on a table. Nobody has to defend anything yet." },
          { text: "It would not touch the two we are worried about.",
            why: "She names her idea's limit before anyone finds it. That buys more credibility than the idea itself does." },
          { text: "Actually that one is better than mine.",
            why: "Four words that cost nothing and change a meeting. Backing somebody else's idea is rarer than proposing your own." },
          { text: "The discount is the one I would do last.",
            why: "Ranking rather than rejecting. It says where an idea sits without killing it, which leaves it available if the others fail." },
          { text: "Will the two big clients accept a deposit?",
            why: "Testing an idea by asking what would have to be true for it to work. It produced the reframing that made it work." }
        ],
        after: "<p>Three of these are questions, one is support for someone else, one names a weakness and one is a ranking. None of them is <i>no</i>.</p>" },

      { id: "2b", section: 2, sectionTitle: "Offer it so it can be built on", letter: "B",
        concepts: ["people", "comparison"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table.",
        caption: "Four ways to contribute, and what each is for",
        head: ["Move", "What it does", "When"],
        rows: [
          ["Could we … ? / What if we … ?", "Puts an idea down as a ___", "When ideas are still being collected"],
          ["It would not touch …", "Names your own idea's ___ first", "When you can see the obvious objection"],
          ["That is better than mine because …", "Backs someone else's idea with a ___", "When somebody junior has said something good"],
          ["I would do that one ___", "Ranks without rejecting", "When arguing, so nothing is lost"]
        ],
        gaps: [
          { answer: "question", why: "A question can be declined. A statement has to be defeated." },
          { answer: "limit", why: "Saying it yourself is worth more than having it said to you." },
          { answer: "reason", why: "Agreement without a reason adds a vote. Agreement with one adds an argument." },
          { answer: "last", why: "Lina's move on the discount: not killed, just placed." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Offer it so it can be built on", letter: "C",
        concepts: ["recall", "people"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people in a team meeting. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Amal", detail: "Has an idea, waits to see whether anyone else says something similar, and never speaks." },
          { id: "c2", label: "Bashar", detail: "Proposes something and, when a weakness is pointed out, defends it for ten minutes." },
          { id: "c3", label: "Yara", detail: "Hears a good idea from a junior colleague and says nothing, because it was not hers." },
          { id: "c4", label: "Hussein", detail: "Kills each suggestion as it is made, and by the fourth nobody is suggesting anything." }
        ],
        takeaways: [
          { text: "Offer it as a question and it costs you nothing.", caseId: "c1",
            why: "<i>Could we…?</i> can be turned down without Amal having lost an argument. The silence costs the meeting her idea." },
          { text: "Name your idea's limit before someone else does.", caseId: "c2",
            why: "Lina did it in one clause and nobody attacked her proposal. Bashar is defending ground he could have conceded for free." },
          { text: "Back someone else's idea, with a reason.", caseId: "c3",
            why: "<i>Actually that one is better than mine</i> is four words, and it is what made Fadi's suggestion survive long enough to be adopted." },
          { text: "Collect every idea before objecting to any.", caseId: "c4",
            why: "Four meetings produced nothing for exactly this reason. One rule — no objections until the table is full — produced five ideas in as many minutes." }
        ],
        closer: "<p>Next unit: the telephone and the handover, where the English is mostly phrasal verbs and the stakes are mostly other people's shifts.</p>" }

    ]
  };
})();
