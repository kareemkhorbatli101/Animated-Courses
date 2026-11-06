/* Unit 9 · Cities and Movement — LESSON 2 · WRITING
   The book's Unit 9 writing strategy: the purpose of an introduction. */
(function () {
  window.PAGE = {
    id: "u09-l2", unit: "u09", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Write an introduction that earns the rest",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        concepts: ["read", "inference", "claim"],
        kind: "annotate", task: null, n: 0,
        jobs: ["Says what question is being asked", "Says why the answer is not obvious",
               "Says what the answer will be", "Does none of the three"],
        sentences: [
          { group: "Opening A",
            text: "Transport is a very important issue in modern cities.",
            job: "Does none of the three",
            why: "True, and the reader knew it before opening the essay. A first sentence that could begin any essay on the subject has not started this one." },
          { group: "Opening A",
            text: "There are many different opinions about it.",
            job: "Does none of the three",
            why: "Says that a disagreement exists without saying what it is about, which leaves the reader exactly where they were." },
          { group: "Opening A",
            text: "This essay will discuss the advantages and disadvantages of building more roads.",
            job: "Says what question is being asked",
            why: "The one job A does, and it does it in the weakest available form: <i>discuss advantages and disadvantages</i> promises a list rather than an answer." },
          { group: "Opening B",
            text: "Widening a congested road usually fails to relieve the congestion,",
            job: "Says what question is being asked",
            why: "A specific claim, so the question is implied and sharp: why would that be? The reader is in the argument by the eighth word." },
          { group: "Opening B",
            text: "which seems to defy common sense until you notice that the traffic is not a fixed quantity.",
            job: "Says why the answer is not obvious",
            why: "The job A never attempts. Naming the surprise is what tells a reader the essay is worth their time." },
          { group: "Opening B",
            text: "This essay argues that road capacity creates the demand it was built to meet, and that pricing is therefore the only instrument that changes a traveller\u0027s calculation.",
            job: "Says what the answer will be",
            why: "<i>Argues that</i>, not <i>discusses</i>. A reader who finishes this knows the conclusion and can decide whether to disagree." }
        ],
        prompt: "Two openings for the same essay. Click each sentence and name what it does \u2014 an introduction has three jobs, and only one of these openings does them.",
        note: { kind: "writer",
                body: "<p>An introduction has three jobs: say what question is being asked, say why it is not obvious, and say what the answer will be. A reader who finishes it should know whether to continue.</p>" },
        text: { every: 1, blocks: [
          { h: "Opening A", lines: [
            "Transport is a very important issue in modern cities. There are many different opinions about it. This essay will discuss the advantages and disadvantages of building more roads."
          ] },
          { h: "Opening B", lines: [
            "Widening a congested road usually fails to relieve the congestion, which seems to defy common sense until you notice that the traffic is not a fixed quantity. This essay argues that road capacity creates the demand it was built to meet, and that pricing is therefore the only instrument that changes a traveller's calculation."
          ] }
        ] },
        after: "<p>A says nothing a reader did not already know. B states the question, the surprise and the answer in three clauses.</p>" },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        concepts: ["claim"],
        kind: "choice", task: null, n: 0,
        prompt: "What is the single worst feature of Opening A?",
        options: [
          { text: "It announces that it will discuss something, instead of saying what it concludes.", correct: true,
            why: "<i>This essay will discuss the advantages and disadvantages</i> commits to nothing. A reader cannot disagree with it, which means there is nothing to read on for." },
          { text: "It is too short.",
            why: "Opening B is longer, but length is not the difference. A longer version of A would be no better." },
          { text: "It uses the phrase <i>modern cities</i>.",
            why: "Vague, certainly, but the structural problem is that the paragraph takes no position at all." }
        ] },

            { id: "1c", section: 1, sectionTitle: "Prepare to write", letter: "C",
        concepts: ["sequence", "claim"],
        kind: "sequence", task: null, n: 0,
        prompt: "This unit's strategy is the introduction. Put the five jobs of one in order.",
        note: { kind: "writer",
                body: "<p>An introduction is not a summary of what follows. It is a set of promises, and the last of them is the one that makes the rest of the essay readable: the reader now knows the order the argument will arrive in.</p>" },
        steps: [
          { text: "Name the thing everybody believes", pos: 1,
            why: "<i>A congested road should be widened.</i> Starting with the received view gives the reader somewhere to stand." },
          { text: "Say what happens that does not fit", pos: 2,
            why: "the disappointment is the reason the essay exists, and it belongs before any explanation of it." },
          { text: "State your claim in one sentence", pos: 3,
            why: "after the problem, because a claim offered before the problem is just an assertion." },
          { text: "Say what you will not be arguing", pos: 4,
            why: "the step most introductions skip. Fencing off the neighbouring argument stops a reader spending the essay waiting for it." },
          { text: "Say in what order the parts will come", pos: 5,
            why: "last, and briefly. Two clauses are enough, and they make every later paragraph easier to place." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        carry: "1a",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. This unit's grammar is time clauses and the <i>too / either</i> pair.",
        items: [
          { cue: "A time clause.", band: "A2",
            target: "After the road was widened the traffic returned within a year",
            extra: ["will", "before"], extraWhy: { "will": "<i>will</i> marks the future — and nothing in this sentence needs that done.", "before": "<i>before</i> opens a time clause — and nothing in this sentence needs that done." },
            why: "<i>After</i> + past, for a completed sequence." },
          { cue: "Agree with a positive.", band: "B1",
            target: "The metro was crowded and the buses were too",
            extra: ["either", "neither"], extraWhy: { "either": "<i>either</i> adds to a negative statement — and nothing in this sentence needs that done.", "neither": "<i>neither</i> negates both of two things — and nothing in this sentence needs that done." },
            why: "<i>Too</i> agrees with a positive statement." },
          { cue: "Agree with a negative.", band: "B1",
            target: "The bypass did not help and the widening did not either",
            extra: ["too", "also"], extraWhy: { "too": "<i>too</i> adds to a positive statement — and nothing in this sentence needs that done.", "also": "<i>also</i> adds — and nothing in this sentence needs that done." },
            why: "<i>Either</i>, not <i>too</i>, after a negative." },
          { cue: "A contrast.", band: "C1",
            target: "The road was widened but the journey time did not fall",
            extra: ["and", "so", "because"], extraWhy: { "and": "<i>and</i> joins two things of the same kind — and nothing in this sentence needs that done.", "so": "<i>so</i> introduces a result — and nothing in this sentence needs that done.", "because": "<i>because</i> introduces a reason clause — and nothing in this sentence needs that done." },
            why: "<i>But</i> marks the result as contrary to expectation — which is the article's point." }
        ] },

            { id: "2b", section: 2, sectionTitle: "Build the sentences", letter: "B",
        concepts: ["word", "claim"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Four more. Two of them put a time clause at the end rather than the front.",
        items: [
          { cue: "A time clause at the end.", band: "A2",
            target: "The high street was quiet until the bypass closed for repairs",
            extra: ["will", "before", "closing"], extraWhy: { "will": "<i>will</i> marks the future — and nothing in this sentence needs that done.", "before": "<i>before</i> opens a time clause — and nothing in this sentence needs that done.", "closing": "The sentence uses <b>closed</b>. <i>closing</i> is the same word in another form, and only one of them fits this slot." },
            why: "No comma, because the time clause comes second. <i>Until</i> marks the point where the state ended." },
          { cue: "Two events, the earlier one marked.", band: "B1",
            target: "By the time the second survey was taken the traffic had already returned",
            extra: ["has", "returning", "will"], extraWhy: { "has": "<i>has</i> builds the present perfect — and nothing in this sentence needs that done.", "returning": "The sentence uses <b>returned</b>. <i>returning</i> is the same word in another form, and only one of them fits this slot.", "will": "<i>will</i> marks the future — and nothing in this sentence needs that done." },
            why: "<i>By the time</i> + simple past, with the past perfect for what was finished before it." },
          { cue: "Fence off a neighbouring argument.", band: "B2",
            target: "This essay is not about whether the road should have been built",
            extra: ["which", "being", "and"], extraWhy: { "which": "<i>which</i> opens a relative clause — and nothing in this sentence needs that done.", "being": "<i>being</i> is the <i>-ing</i> form of <i>be</i> — and nothing in this sentence needs that done.", "and": "<i>and</i> joins two things of the same kind — and nothing in this sentence needs that done." },
            why: "A negative definition, which is the fourth job of an introduction and the one most often missing." },
          { cue: "Promise an order.", band: "C1",
            target: "The next section sets out the mechanism and the one after it the evidence",
            extra: ["which", "setting", "but"], extraWhy: { "which": "<i>which</i> opens a relative clause — and nothing in this sentence needs that done.", "setting": "Nothing in this sentence needs <i>setting</i>. A word you cannot name a job for is the spare one.", "but": "<i>but</i> joins two things that conflict — and nothing in this sentence needs that done." },
            why: "The second half omits its verb, which English allows when the first half has supplied it." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build the sentences", letter: "C",
        concepts: ["correct"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five lines from essay introductions. One word in each is wrong — a wrong word, not a wrong order. Click it, then type the correction.",
        items: [
          { text: "The metro was crowded and the buses were either.",
            fixed: "The metro was crowded and the buses were too.",
            wrong: "either", right: "too",
            why: "<i>Either</i> agrees with a negative. Both clauses here are positive." },
          { text: "Widening did not help and pricing did not too.",
            fixed: "Widening did not help and pricing did not either.",
            wrong: "too", right: "either",
            why: "The mirror image: after a negative the word is <i>either</i>." },
          { text: "After the road was widened, the traffic return within a year.",
            fixed: "After the road was widened, the traffic returned within a year.",
            wrong: "return", right: "returned",
            why: "The time clause is in the past, so the main clause goes with it." },
          { text: "By the time the survey was repeated, the traffic has climbed back.",
            fixed: "By the time the survey was repeated, the traffic had climbed back.",
            wrong: "has", right: "had",
            why: "<i>By the time</i> with a past main verb takes the past perfect for what happened earlier still." },
          { text: "The capacity was increased and the journey time did not fall.",
            fixed: "The capacity was increased but the journey time did not fall.",
            wrong: "and", right: "but",
            why: "<i>And</i> suggests the second clause follows naturally from the first. The whole point is that it does not." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        concepts: ["write"],
        modelJobs: [
          { job: "stated my position in the first paragraph",
            text: "Priya has identified the condition that makes Tomás's answer incomplete rather than wrong.",
            why: "it is the first sentence of the message, where a reader looks for the point" },
          { job: "gave a reason or an example",
            text: "But her objection matters because a charge changes a traveller's calculation only if there is something to change to.",
            why: "it gives the reason, with the cause named rather than implied" },
          { job: "answered Priya or Tomás by name ",
            text: "He is right that visibility explains the political preference: a lane opens, a charge merely exists.",
            why: "the model takes the jobs in the order the checklist lists them" },
        ],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "Before ___, ___. After ___, ___.",

            why: "The conjunction carries the order, so both clauses stay in the simple past." },

          { frame: "By the time ___, ___ had ___.",

            why: "<i>By the time</i> means one event was already complete, which is what the past perfect says." },

          { frame: "___ was ___, but ___ was not.",

            why: "<i>But</i> says the second clause defeats the expectation of the first." },

        ],
        prompt: "A discussion question about how cities should respond to congestion.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "If widening roads reliably fails to reduce congestion, why do cities keep doing it? And what should they do instead?" },
          { who: "tomas", when: "4 hours ago",
            text: "Because building something is visible and pricing something is unpopular. A new lane can be opened by a politician; a charge just makes people angry at one." },
          { who: "priya", when: "2 hours ago",
            text: "That's too cynical. Charges are regressive unless you fix the alternatives first, and in most cities the alternatives are bad. Pricing a bad bus network just taxes the poor." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I gave a reason or an example.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>Priya has identified the condition that makes Tomás's answer incomplete rather than wrong.</p><p>He is right that visibility explains the political preference: a lane opens, a charge merely exists. But her objection matters because a charge changes a traveller's calculation only if there is something to change to. Where the alternative is a bus every forty minutes, the charge does not shift the journey; it just makes it more expensive.</p><p>So I would sequence them. Build the alternative first and price afterwards — which is slower and less satisfying than either of their answers, and is probably why few cities do it.</p>" },

      { id: "4a", section: 4, sectionTitle: "Write a second reply", letter: "A",
        concepts: ["write", "measurement"],
        modelJobs: [
          { job: "My first paragraph says which measure a planner should use",
            text: "Neither, on its own: the choice has to be made street by street, and the network decides which measure applies to which street.",
            why: "it is the first sentence of the message, where a reader looks for the point" },
          { job: "used capacity , corridor or induced demand accurately",
            text: "Mei is right about what happens when every street is measured by flow.",
            why: "the model takes the jobs in the order the checklist lists them" },
          { job: "answered Mei or Dan by name and conceded something fair",
            text: "But Dan's objection is the one that defeats the simple version.",
            why: "it answers a classmate by name, which is what turns a post into a discussion" },
          { job: "used too , either or but at least once, correctly",
            text: "The high street becomes a corridor, the shops close, and nobody has gained anything they wanted.",
            why: "the model takes the jobs in the order the checklist lists them" },
        ],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "Before ___, ___. After ___, ___.",

            why: "The conjunction carries the order, so both clauses stay in the simple past." },

          { frame: "By the time ___, ___ had ___.",

            why: "<i>By the time</i> means one event was already complete, which is what the past perfect says." },

          { frame: "___ was ___, but ___ was not.",

            why: "<i>But</i> says the second clause defeats the expectation of the first." },

        ],
        prompt: "A second question, about who a street is for.",
        minWords: 100,
        note: { kind: "writer",
                body: "<p>Both classmates want the same street to work better and mean different things by <i>better</i>. Saying which measure each has in mind is a stronger reply than choosing between them.</p>" },
        posts: [
          { who: "haddad", role: "prof",
            text: "A city can measure a street by how many vehicles pass along it, or by how many people stop on it. The two measures recommend opposite designs. Which should a planner use?" },
          { who: "mei", when: "4 hours ago",
            text: "People stopping. A street optimised for passing through is a corridor, and a city made of corridors has nowhere anyone wants to be." },
          { who: "dan", when: "90 minutes ago",
            text: "Someone has to get across the city, and if every street is designed for lingering the journeys do not stop existing. They move onto whichever street was not redesigned." }
        ],
        checklist: [
          "My first paragraph says which measure a planner should use.",
          "I used <i>capacity</i>, <i>corridor</i> or <i>induced demand</i> accurately.",
          "I answered Mei or Dan <b>by name</b> and conceded something fair.",
          "I used <i>too</i>, <i>either</i> or <i>but</i> at least once, correctly.",
          "I wrote 100 words or more."
        ],
        model: "<p>Neither, on its own: the choice has to be made street by street, and the network decides which measure applies to which street.</p>" +
               "<p>Mei is right about what happens when every street is measured by flow. The high street becomes a corridor, the shops close, and nobody has gained anything they wanted.</p>" +
               "<p>But Dan's objection is the one that defeats the simple version. Journeys do not disappear when a street is calmed; they relocate, and they relocate onto whatever route was left alone, usually the one with the least political attention. So the honest answer is that a city needs a few streets chosen deliberately as corridors so that the rest can be chosen for stopping — and the choosing has to be explicit, or it is made by default.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } },
    ]
  };
})();
