/* Unit 7 · Markets and Choices — LESSON 2 · WRITING
   The book's Unit 7 writing strategy: using because and since. */
(function () {
  window.PAGE = {
    id: "u07-l2", unit: "u07", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Join a claim to its reason",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        concepts: ["word", "inference", "claim"],
        kind: "cloze", task: null, n: 0,
        prompt: "<i>Because</i> and <i>since</i> both give reasons, but they are not interchangeable. Complete the rule.",
        heading: "Language connection: because and since",
        note: { kind: "writer",
                body: "<p><b>because</b> introduces the reason the reader does not yet know — it carries the new information, so it usually goes second.<br><b>since</b> introduces a reason the reader already accepts — it usually goes first, as a given.<br><i>Since the office closes at one, come early.</i> (you knew)<br><i>Come early, because the office closes at one.</i> (you did not)</p>" },
        text: "We use ___ when the reason is the new part of the sentence, and it normally comes after the claim. We use ___ when the reason is something the reader already knows, and it normally comes first. <i>Since</i> also has a second, unrelated meaning: a point in ___ .",
        gaps: [
          { options: ["because", "since"], answer: "because", why: "<i>Come early, because the office closes at one.</i>" },
          { options: ["since", "because"], answer: "since", why: "<i>Since the office closes at one, come early.</i>" },
          { options: ["time", "money"], answer: "time",
            why: "<i>since 1976</i> — Unit 4's use. Context separates them with no difficulty." }
        ] },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        concepts: ["claim"],
        kind: "choice", task: null, n: 0,
        prompt: "Which sentence puts the reason where the reader needs it?",
        options: [
          { text: "The scheme failed because the price was set too low.", correct: true,
            why: "The failure is known; the cause is the new information, so it goes second with <i>because</i>." },
          { text: "Because the scheme failed, the price was set too low.",
            why: "Reverses cause and effect — the price was set first." },
          { text: "Since the price was set too low, the scheme failed, because the price was too low.",
            why: "Gives the same reason twice, once as given and once as news." }
        ] },

            { id: "1c", section: 1, sectionTitle: "Prepare to write", letter: "C",
        concepts: ["sequence", "claim"],
        kind: "sequence", task: null, n: 0,
        prompt: "Arguing that a policy caused an outcome has a fixed order. Put the five moves on the right rungs.",
        note: { kind: "writer",
                body: "<p>Steps three and four are what separate an argument from an assertion, and they are the two most often missing. A reader who cannot see what else might have caused the change has not been given a reason to believe you.</p>" },
        steps: [
          { text: "State what changed, with a number", pos: 1,
            why: "<i>traffic fell by a fifth</i>. Without the size, the rest of the argument has nothing to be about." },
          { text: "State when the policy began", pos: 2,
            why: "the timing is the first thing a sceptical reader checks, so give it before they have to ask." },
          { text: "Give the mechanism", pos: 3,
            why: "how the policy could have produced that change. A correlation with no mechanism is a coincidence with a date." },
          { text: "Name what else could have caused it", pos: 4,
            why: "the fuel price, the weather, the season. Naming them yourself is what makes the argument credible rather than defensive." },
          { text: "Say what would settle it", pos: 5,
            why: "last: the comparison, the control city, the figure that would change your mind." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. This unit's grammar is the real conditional.",
        items: [
          { cue: "A first conditional.", band: "A2",
            target: "If you raise the price demand will fall", jobs: { "If": "linker", "will": "verb" },
            extra: ["would", "raised"], extraWhy: { "would": "<i>would</i> marks a hypothetical or a polite request — and nothing in this sentence needs that done.", "raised": "The sentence uses <b>raise</b>. <i>raised</i> is the same word in another form, and only one of them fits this slot." },
            why: "Present in the <i>if</i> clause, <i>will</i> in the main clause." },
          { cue: "The same, with the clauses reversed.", band: "B1",
            target: "Demand will fall if you raise the price", jobs: { "will": "verb", "if": "linker" },
            extra: ["would", "raised"], extraWhy: { "would": "<i>would</i> marks a hypothetical or a polite request — and nothing in this sentence needs that done.", "raised": "The sentence uses <b>raise</b>. <i>raised</i> is the same word in another form, and only one of them fits this slot." },
            why: "No comma when the <i>if</i> clause comes second." },
          { cue: "A reason the reader already accepts.", band: "B2",
            target: "Since the charge was set too low the traffic did not fall", jobs: { "Since": "linker", "was": "verb", "did": "verb", "not": "verb" },
            extra: ["because", "so"], extraWhy: { "because": "<i>because</i> introduces a reason clause — and nothing in this sentence needs that done.", "so": "<i>so</i> introduces a result — and nothing in this sentence needs that done." },
            why: "<i>Since</i> first, for a given." },
          { cue: "A reason that is the new information.", band: "C1",
            target: "The scheme produced an absurd result because the measure had become the target", jobs: { "because": "linker", "had": "verb" },
            extra: ["since", "so", "therefore"], extraWhy: { "since": "<i>since</i> marks a starting point in time, or a reason — and nothing in this sentence needs that done.", "so": "<i>so</i> introduces a result — and nothing in this sentence needs that done.", "therefore": "<i>therefore</i> marks a conclusion — and nothing in this sentence needs that done." },
            why: "<i>Because</i> second, carrying the news." }
        ] },

            { id: "2b", section: 2, sectionTitle: "Build the sentences", letter: "B",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Four more. Two of them hand a reason to the reader and two take one away.",
        items: [
          { cue: "A reason the reader will not dispute.", band: "B1",
            target: "Since the charge applies only on weekdays the weekend figures are unaffected", jobs: { "Since": "linker", "on": "adverbial", "are": "verb" },
            extra: ["because", "so", "therefore"], extraWhy: { "because": "<i>because</i> introduces a reason clause — and nothing in this sentence needs that done.", "so": "<i>so</i> introduces a result — and nothing in this sentence needs that done.", "therefore": "<i>therefore</i> marks a conclusion — and nothing in this sentence needs that done." },
            why: "<i>Since</i> in front, for something already agreed. Nobody is going to argue about which days the charge runs." },
          { cue: "A reason that is the point of the sentence.", band: "B2",
            target: "The weekday figures fell because driving into the zone became more expensive", jobs: { "because": "linker", "into": "adverbial" },
            extra: ["since", "so", "although"], extraWhy: { "since": "<i>since</i> marks a starting point in time, or a reason — and nothing in this sentence needs that done.", "so": "<i>so</i> introduces a result — and nothing in this sentence needs that done.", "although": "<i>although</i> concedes before the main clause — and nothing in this sentence needs that done." },
            why: "<i>Because</i> at the end, carrying the new information. Reversing the two conjunctions here would bury the claim." },
          { cue: "Rule out an alternative explanation.", band: "B2",
            target: "Fuel prices were flat throughout the period so the fall cannot be explained that way", jobs: { "were": "verb", "so": "linker", "cannot": "verb", "be": "verb" },
            extra: ["because", "since", "and"], extraWhy: { "because": "<i>because</i> introduces a reason clause — and nothing in this sentence needs that done.", "since": "<i>since</i> marks a starting point in time, or a reason — and nothing in this sentence needs that done.", "and": "<i>and</i> joins two things of the same kind — and nothing in this sentence needs that done." },
            why: "<i>So</i> for a consequence you are drawing, which is how an argument disposes of a rival account." },
          { cue: "Say what would settle it.", band: "C1",
            target: "If a comparable city without a charge shows the same fall the scheme deserves no credit", jobs: { "If": "linker", "without": "adverbial" },
            extra: ["would", "will show", "when"], extraWhy: { "would": "<i>would</i> marks a hypothetical or a polite request — and nothing in this sentence needs that done.", "will show": "Nothing in this sentence needs <i>will show</i>. A word you cannot name a job for is the spare one.", "when": "<i>when</i> opens a time clause — and nothing in this sentence needs that done." },
            why: "A real conditional naming the evidence that would defeat you, which is the strongest move available in an argument." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build the sentences", letter: "C",
        concepts: ["correct", "measurement"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five lines from policy briefs. One word in each is wrong — a wrong word, not a wrong order. Click it, then type the correction.",
        items: [
          { text: "If the charge rise, demand for parking falls.",
            fixed: "If the charge rises, demand for parking falls.",
            wrong: "rise", right: "rises",
            why: "An <i>if</i> clause about the future takes a present form, and here it needs its third-person <i>-s</i>." },
          { text: "When the scheme start in April, the first figures follow in June.",
            fixed: "When the scheme starts in April, the first figures follow in June.",
            wrong: "start", right: "starts",
            why: "A time clause behaves exactly like an <i>if</i> clause: a present form, which here needs its third-person <i>-s</i>." },
          { text: "We will not know whether it worked until a full year passed.",
            fixed: "We will not know whether it worked until a full year has passed.",
            wrong: "passed", right: "has passed",
            why: "<i>Until</i> takes the present perfect for a point still to be reached. The bare past would put the year behind us." },
          { text: "The number improved and the service did not, because the measure had become the target.",
            fixed: "The number improved and the service did not, since the measure had become the target.",
            wrong: "because", right: "since",
            why: "By this point in a brief the reader has already accepted that the measure became the target, so it is a given, not news." },
          { text: "Traffic fell by a fifth, that is more than the model predicted.",
            fixed: "Traffic fell by a fifth, which is more than the model predicted.",
            wrong: "that", right: "which",
            why: "A comma before a relative clause makes it non-defining, and a non-defining clause takes <i>which</i>, never <i>that</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        concepts: ["write", "measurement"],
        modelJobs: [
          { job: "stated my position in the first paragraph",
            text: "I think Priya describes the mechanism correctly, but Tomás is right that the alternative is worse.",
            why: "it is the first sentence of the message, where a reader looks for the point" },
          { job: "used because or since to join a claim to its reason",
            text: "Measurement does distort, because people respond to the measure as they understand it rather than to the thing it stands for.",
            why: "it gives the reason, with the cause named rather than implied" },
          { job: "answered Priya or Tomás by name ",
            text: "Once waiting time is the target, the cheapest route to a good number is to change when the clock starts.",
            why: "the model takes the jobs in the order the checklist lists them" },
        ],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "If ___ is ___, ___ will ___.",

            why: "Present in the condition, future once in the result. English does not repeat the future." },

          { frame: "When ___ starts, ___ will ___.",

            why: "<i>When</i> behaves like <i>if</i> but treats the event as settled." },

          { frame: "We will not know whether ___ until ___.",

            why: "A time clause takes the present, not the future, however far ahead it is." },

        ],
        prompt: "A discussion question about measuring performance.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "Organisations are routinely judged on a small number of published measures. Does that improve them, or distort them? Give a reason." },
          { who: "tomas", when: "5 hours ago",
            text: "It improves them. Before measurement you had nothing but assertion. A flawed measure you can argue with beats a feeling you can't." },
          { who: "priya", when: "3 hours ago",
            text: "It distorts them, and the distortion is predictable. Measure waiting times and you get shorter recorded waits, which is not the same as shorter waits." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I used <i>because</i> or <i>since</i> to join a claim to its reason.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>I think Priya describes the mechanism correctly, but Tomás is right that the alternative is worse.</p><p>Measurement does distort, because people respond to the measure as they understand it rather than to the thing it stands for. Once waiting time is the target, the cheapest route to a good number is to change when the clock starts.</p><p>But the answer is not to stop measuring, since the pre-measurement world was not neutral — it simply left the judgement with whoever spoke most confidently. The answer is to specify how a claimed result will be verified, which is the part schemes designed in a hurry always leave out.</p>" },

      { id: "4a", section: 4, sectionTitle: "Write a second reply", letter: "A",
        concepts: ["write"],
        modelJobs: [
          { job: "My first paragraph says whether the flat charge is a flaw",
            text: "It is a flaw, and Mei's fix is the right one, but Dan has shown why it is not optional.",
            why: "it is the first sentence of the message, where a reader looks for the point" },
          { job: "used incentive , cost or trade-off accurately",
            text: "The trade-off is administrative cost, which is real and small.",
            why: "it carries the words this line asks for" },
          { job: "answered Mei or Dan by name and conceded something fair",
            text: "Dan's point is that a flat charge does not produce a flat incentive.",
            why: "it answers a classmate by name, which is what turns a post into a discussion" },
          { job: "wrote about who bears the cost, not only about whether traffic fell",
            text: "The charge still falls on everyone who drives, so the incentive is untouched, and the payment goes to everyone whether they drive or not, so the people who gave up driving are compensated by the people who did not.",
            why: "it carries the words this line asks for" },
        ],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "If ___ is ___, ___ will ___.",

            why: "Present in the condition, future once in the result. English does not repeat the future." },

          { frame: "When ___ starts, ___ will ___.",

            why: "<i>When</i> behaves like <i>if</i> but treats the event as settled." },

          { frame: "We will not know whether ___ until ___.",

            why: "A time clause takes the present, not the future, however far ahead it is." },

        ],
        prompt: "A second question, about who a charge falls on.",
        minWords: 100,
        note: { kind: "writer",
                body: "<p>Both classmates accept that the charge reduces traffic. They disagree about who pays for that reduction, which is a different question and the one the professor asked.</p>" },
        posts: [
          { who: "haddad", role: "prof",
            text: "A congestion charge reduces traffic and raises revenue. It also falls as a flat sum on everyone who drives, whatever they earn. Is that a flaw in the design, or the point of it?" },
          { who: "mei", when: "6 hours ago",
            text: "It is a flaw with a known fix. Charge the same and return the revenue as a flat payment to every resident: the behaviour changes and the poorest end up better off than before." },
          { who: "dan", when: "2 hours ago",
            text: "A flat charge is not actually flat in effect. For someone on a low income it is a prohibition and for someone on a high one it is a parking fee, and only one of those two groups has changed their behaviour." }
        ],
        checklist: [
          "My first paragraph says whether the flat charge is a flaw.",
          "I used <i>incentive</i>, <i>cost</i> or <i>trade-off</i> accurately.",
          "I answered Mei or Dan <b>by name</b> and conceded something fair.",
          "I wrote about who bears the cost, not only about whether traffic fell.",
          "I wrote 100 words or more."
        ],
        model: "<p>It is a flaw, and Mei's fix is the right one, but Dan has shown why it is not optional.</p>" +
               "<p>Dan's point is that a flat charge does not produce a flat incentive. The same five pounds is a reason to think for one driver and a reason to stop driving altogether for another, so the behaviour change the scheme reports is drawn almost entirely from the second group. The scheme works by making the poorest stop.</p>" +
               "<p>Mei's redistribution answers exactly that. The charge still falls on everyone who drives, so the incentive is untouched, and the payment goes to everyone whether they drive or not, so the people who gave up driving are compensated by the people who did not. The trade-off is administrative cost, which is real and small.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } },
    ]
  };
})();
