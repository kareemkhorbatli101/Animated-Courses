/* Unit 3 · Comparing Suppliers — LESSON 2 · WRITING */
(function () {
  window.PAGE = {
    id: "u03-l2", unit: "u03", block: "l2", up: "../", tab: "AT WORK",
    objective: "Write a comparison a manager can act on, and a subject line a buyer will open",
    next: "l3.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "What a comparison email does", letter: "A",
        concepts: ["write", "comparison"],
        kind: "annotate", task: null, n: 0,
        prompt: "Rana's email comparing three mills. Click each sentence and say what job it does.",
        note: { kind: "writer", title: "Recommend, then justify",
                body: "<p>A manager reading a comparison wants the answer first. Putting the recommendation at the end makes them read three paragraphs not knowing what they are for.</p>" },
        jobs: [
          "Says what is being compared, and against what",
          "Gives the recommendation",
          "Gives the number that supports it",
          "Names what you are giving up",
          "Says what you need from the reader"
        ],
        sentences: [
          { text: "Three mills quoted against specification 17/04-B for 4,000 metres of sheeting.",
            job: "Says what is being compared, and against what",
            why: "One sentence establishes that the three prices are comparable. Without it the rest of the email is three unrelated numbers." },
          { text: "I recommend Orontes.",
            job: "Gives the recommendation",
            why: "Three words, second sentence. Everything after it is now evidence rather than suspense." },
          { text: "Their landed cost is 1,780 against 1,815 for Aleppo, once freight is added.",
            job: "Gives the number that supports it",
            why: "Landed cost, not unit price — the only figure on which the three are actually comparable." },
          { text: "We are giving up about three weeks of lead time against the Homs mill.",
            job: "Names what you are giving up",
            why: "The sentence that makes a recommendation trustworthy. A comparison with no cost on the recommended side has not been done properly." },
          { text: "Please confirm by Thursday so I can tell the other two before the week ends.",
            job: "Says what you need from the reader",
            why: "One action, one deadline, and a reason for the deadline that is about courtesy to the losers." }
        ],
        after: "<p>Five sentences. A comparison email that runs to two pages is usually one that has not decided anything.</p>",
        explain: { terms: [
          { en: "to recommend", gloss: "to say which one should be chosen", ar: "يوصي بـ" },
          { en: "to give up", gloss: "to accept losing something in exchange", ar: "التنازل عن" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "What a comparison email does", letter: "B",
        concepts: ["write", "comparison"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Write the internal note. Thirty to forty words, and the recommendation in the first two lines.",
        scenarioTitle: "Which mill?",
        scenario: "You are Rana. Three mills quoted against the same spec for 4,000 metres. Orontes: landed 1,780, four weeks. Aleppo: landed 1,815, three weeks. Homs: landed 1,690, seven weeks and no references. You want Orontes.",
        to: "Head of purchasing",
        re: "Tender 17/04 — recommendation",
        placeholder: "",
        minWords: 30,
        frames: [
          "Three mills quoted against …",
          "I recommend …",
          "Their landed cost is … against …",
          "We give up …",
          "Please confirm by …"
        ],
        note: { kind: "writer", title: "Landed, not unit",
                body: "<p>If you compare unit prices here, Homs wins and the recommendation makes no sense. Say <b>landed</b> in the message so the reader knows which figure they are looking at.</p>" },
        checklist: [
          "Is the recommendation in the first two lines?",
          "Have you used landed cost rather than unit price?",
          "Have you named what you are giving up?",
          "Is there one action with a date on it?"
        ],
        modelJobs: [
          "Says what is being compared",
          "Gives the recommendation",
          "Gives the supporting number",
          "Names the trade-off",
          "Asks for one thing, by a date"
        ],
        model: "Three mills quoted against spec 17/04-B for 4,000 metres. I recommend Orontes. Their landed cost is 1,780 against 1,815 for Aleppo; Homs is cheaper at 1,690 but quotes seven weeks and gave no references. We give up a week against Aleppo. Please confirm by Thursday." },

      { id: "2a", section: 2, sectionTitle: "Build the sentence", letter: "A",
        concepts: ["write", "comparison"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Put the words in order. Each compares two things.",
        items: [
          { cue: "Compare two landed costs.", band: "B1",
            target: "Their landed cost is lower than the Aleppo mill's",
            jobs: { "Their landed cost": "subject", "is": "verb", "than": "linker" },
            why: "<i>Lower than</i>. The apostrophe in <i>mill's</i> stands for the cost belonging to it, so the noun is not repeated." },
          { cue: "Compare two lead times, saying by how much.", band: "B1",
            target: "Homs is three weeks slower than Orontes",
            jobs: { "Homs": "subject", "is": "verb", "than": "linker" },
            why: "The measure goes in front of the comparative: <i>three weeks slower</i>, not <i>slower by three weeks</i> in this position." },
          { cue: "Say two things are the same.", band: "B1",
            target: "The Aleppo quotation is as compliant as ours",
            jobs: { "The Aleppo quotation": "subject", "is": "verb", "as": "linker" },
            why: "<i>As … as</i> for equality. The adjective sits between them, with no <i>-er</i> and no <i>more</i>." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Build the sentence", letter: "B",
        concepts: ["write", "margin"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Three more. These pick one out of several.",
        items: [
          { cue: "Pick one out of three.", band: "B1",
            target: "Orontes has the strongest track record of the three",
            jobs: { "Orontes": "subject", "has": "verb", "of": "adverbial" },
            why: "A superlative takes <i>the</i>, and the group it is chosen from goes after it with <i>of</i>." },
          { cue: "Say one is far better than the rest, with emphasis.", band: "B1",
            target: "Their finish is by far the best we have seen",
            jobs: { "Their finish": "subject", "is": "verb", "we": "subject" },
            why: "<i>By far</i> strengthens a superlative. It cannot be used with a plain adjective: <i>by far good</i> is not English." },
          { cue: "Say the difference is small.", band: "B1",
            target: "The two quotations are only slightly different",
            jobs: { "The two quotations": "subject", "are": "verb", "only slightly": "adverbial" },
            why: "<i>Slightly</i> weakens, <i>far</i> strengthens. Both sit immediately in front of what they modify." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write it yourself", letter: "A",
        concepts: ["write", "evidence"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "A second internal note. Your manager has pushed back.",
        scenarioTitle: "Why not the cheapest?",
        scenario: "Your manager has replied: <i>Homs is 90 a metre cheaper. On 4,000 metres that is 360,000. Why are we not taking it?</i> Homs quoted seven weeks, gave no references, and you do not know their capacity.",
        to: "Head of purchasing",
        re: "Re: Tender 17/04 — why not Homs",
        placeholder: "",
        minWords: 30,
        frames: [
          "You are right that …",
          "The three weeks matters because …",
          "They also gave no …",
          "If you would rather … , I can …"
        ],
        note: { kind: "writer", title: "Concede the number first",
                body: "<p>The 360,000 is real. Arguing with it makes you look as though you had not noticed. Agree with the figure, then put the thing it does not include beside it.</p>" },
        checklist: [
          "Have you agreed that the saving is real?",
          "Have you said what the three extra weeks would cost?",
          "Have you mentioned the missing references?",
          "Have you left the decision with your manager rather than refusing?"
        ],
        modelJobs: [
          "Concedes the figure",
          "Says what the delay costs",
          "Adds the evidence problem",
          "Leaves the decision open"
        ],
        model: "You are right that the saving is real — 360,000 on this order. The three extra weeks take delivery past the start of the season, which is when we can actually sell sheeting. Homs also gave no references and I do not know their capacity, so seven weeks may be optimistic. If you would rather take the saving, I can ask them for references and a capacity figure before we commit." },

      { id: "3b", section: 3, sectionTitle: "Write it yourself", letter: "B",
        concepts: ["write", "supplier"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Now write to the mill that did not win. Sixty to eighty words.",
        scenarioTitle: "Telling the losing supplier",
        scenario: "You are telling the Homs mill they have not been selected. Their price was the lowest. The reasons were the seven-week lead time and the absence of references. You would like them to quote again next season.",
        to: "Mr Ziad Haffar, Homs Spinning",
        re: "Tender 17/04 — outcome",
        placeholder: "Dear Mr Haffar,\n\n",
        minWords: 60,
        frames: [
          "Thank you for quoting …",
          "On this occasion we have …",
          "Your price was … , but …",
          "If you are able to … , I would be glad to …"
        ],
        note: { kind: "writer", title: "Tell them why",
                body: "<p>A supplier who is told only <i>unsuccessful</i> learns nothing and quotes the same way next time. Two specific reasons cost you one sentence and buy you a better quotation next season.</p>" },
        checklist: [
          "Have you thanked them for the work of quoting?",
          "Have you said plainly that they were not selected?",
          "Have you acknowledged that their price was the lowest?",
          "Have you given the two real reasons?",
          "Have you left the door open?"
        ],
        modelJobs: [
          "Thanks them",
          "Gives the outcome",
          "Acknowledges their strength",
          "Gives the reasons",
          "Invites them back"
        ],
        model: "Dear Mr Haffar,\n\nThank you for quoting against tender 17/04. I know what it costs to price a job properly.\n\nOn this occasion we have placed the order elsewhere. Your unit price was the lowest of the three we received, and I want you to know that. The decision turned on two things: a seven-week lead time, which takes us past the start of the season, and the fact that no trade references were supplied.\n\nIf you are able to shorten the lead time and send two references, I would be glad to include you next season.\n\nRana Darwish" },

      { id: "3c", section: 3, sectionTitle: "Write it yourself", letter: "C",
        concepts: ["write", "deadline"],
        kind: "paragraph", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "One paragraph for the tender invitation itself — the part that tells suppliers how they will be judged.",
        min: 60,
        note: { kind: "writer", title: "Say how you will decide",
                body: "<p>Suppliers price differently when they know what you are weighing. A tender that says <i>lowest price wins</i> gets cheap quotations; one that says what else counts gets quotations you can use.</p>" },
        must: [
          "What will be compared — landed cost, not unit price",
          "That the specification is fixed",
          "What else is weighed besides price",
          "The closing date and time"
        ],
        model: "Quotations will be compared on landed cost to Amman, inclusive of freight and insurance; an ex works price will be converted by us at our own freight rate. All quotations must be against specification 17/04-B, and one against any other specification cannot be compared and will be set aside. Price is not the only thing weighed: lead time and two contactable trade references carry real weight, and we will take the references up. Quotations must be received by 14:00 on 28 March.",
        explain: { terms: [
          { en: "to carry weight", gloss: "to matter in a decision", ar: "له وزن في القرار" },
          { en: "to take up a reference", gloss: "to actually contact the referee", ar: "التحقّق من التزكية" }
        ] } }

    ]
  };
})();
