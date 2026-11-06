/* Unit 8 · Disease and Public Health — LESSON 3 · GRAMMAR
   used to · used to in questions · the present perfect continuous. */
(function () {
  window.PAGE = {
    id: "u08-l3", unit: "u08", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Say what was once true, and what has been going on",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review used to", letter: "A",
        concepts: ["read", "cause"],
        kind: "read-only", task: null, n: 0,
        prompt: "Read the two notes. One describes a world that has gone; the other describes work still going on.",
        text: { every: 1, blocks: [
          { h: "What was once true", lines: [
            "Cholera used to kill thousands in a single summer.",
            "People did not use to connect the disease with the water supply.",
            "Did doctors use to believe it travelled through the air?"
          ] },
          { h: "What has been happening", lines: [
            "Epidemiologists have been tracking the decline since the eighteen fifties.",
            "They have been arguing about its cause for almost as long."
          ] }
        ] },
        after: "<p><i>Used to</i> closes the door on a past state. The present perfect continuous leaves it open.</p>" },

      { id: "1b", section: 1, sectionTitle: "Review used to", letter: "B",
        concepts: ["word"],
        kind: "cloze", task: null, n: 0,
        prompt: "Complete the rule in your own words.",
        heading: "Language connection: used to and have been -ing",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>used to</b> + bare infinitive: a past state or habit that is over.<br>Negative and question drop the <i>d</i>: <i>didn't <b>use</b> to</i> · <i>Did you <b>use</b> to…?</i><br><b>have/has been + -ing</b>: began in the past, still going on.<br>Do not confuse <i>used to do</i> with <i>be used to doing</i>, which means <i>accustomed to</i>.</p>" },
        text: "For a habit that has ended we use ___ followed by the plain form of the verb. After <i>did</i> we write ___ , with no <i>d</i>. For something that started in the past and is still going on we use ___ . And <i>be used to</i> followed by <i>-ing</i> means ___ , which is a different idea altogether.",
        gaps: [
          { options: ["used to", "use to"], answer: "used to", why: "<i>Cholera used to kill thousands.</i>" },
          { options: ["use to", "used to"], answer: "use to", why: "<i>Did doctors use to believe…?</i> — <i>did</i> already carries the past." },
          { options: ["have been -ing", "used to"], answer: "have been -ing",
            why: "<i>They have been tracking it since the eighteen fifties.</i>" },
          { options: ["accustomed to", "formerly"], answer: "accustomed to",
            why: "<i>I am used to working late</i> = I am accustomed to it." }
        ] },

            { id: "1c", section: 1, sectionTitle: "Review used to", letter: "C",
        concepts: ["word"],
        kind: "cloze", task: null, n: 0,
        prompt: "Three constructions that share the word <i>used</i>, and the one that is a different tense altogether. Complete the rule.",
        heading: "Language connection: used to, be used to, get used to",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>used to do</b> — a past habit, now over<br><b>be used to doing</b> — accustomed to it now<br><b>get used to doing</b> — becoming accustomed, a process<br><b>have been doing</b> — began in the past and is still going on</p>" },
        text: "<i>Used to</i> followed by the plain verb describes a habit that is ___ . <i>Be used to</i> followed by <i>-ing</i> describes a state that is ___ . <i>Get used to</i> describes the ___ of arriving at that state. And none of the three is the same as the present perfect continuous, which describes something that began in the past and is ___ .",
        gaps: [
          { options: ["over", "continuing"], answer: "over",
            why: "<i>Cholera used to kill thousands</i> — and no longer does." },
          { options: ["current", "finished"], answer: "current",
            why: "<i>They are used to working nights</i> — they are accustomed to it now." },
          { options: ["process", "result"], answer: "process",
            why: "<i>She is getting used to the hours</i> — still in progress." },
          { options: ["still going on", "finished"], answer: "still going on",
            why: "<i>They have been tracking it since the eighteen fifties</i>." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        carry: "1a",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order.",
        items: [
          { cue: "A past habit now over.", band: "A2",
            target: "Cholera used to kill thousands every summer",
            extra: ["use", "using"],
            why: "<i>used to</i> + bare infinitive." },
          { cue: "The negative.", band: "B1",
            target: "People did not use to boil their drinking water",
            extra: ["used", "using"],
            why: "After <i>did not</i> the form is <i>use to</i> — no <i>d</i>." },
          { cue: "A question.", band: "B1",
            target: "Did doctors use to think it travelled through the air",
            extra: ["used", "do"],
            why: "<i>Did … use to…?</i>" },
          { cue: "Something still going on.", band: "B2",
            target: "Researchers have been studying the decline for over a century",
            extra: ["studied", "study", "are"],
            why: "Present perfect continuous with <i>for</i> + a duration." },
          { cue: "Accustomed to, not formerly.", band: "B2",
            target: "Hospital staff are used to working through the night",
            extra: ["use", "work", "worked"],
            why: "<i>be used to</i> + <i>-ing</i> = accustomed. A different construction entirely." },
          { cue: "Contrast then and now.", band: "C1",
            target: "Infections used to be the leading cause of death but they have been declining for over a century",
            extra: ["use", "declined", "are"],
            why: "<i>Used to</i> for the closed past, present perfect continuous for the trend that is still running." }
        ] },

            { id: "2b", section: 2, sectionTitle: "Build sentences", letter: "B",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Six more. Three of them use <i>used</i> in three different constructions.",
        items: [
          { cue: "A past state now over.", band: "A2",
            target: "Tuberculosis used to be the commonest cause of death in Europe",
            extra: ["use", "using"],
            why: "<i>Used to</i> covers states as well as habits." },
          { cue: "Becoming accustomed.", band: "B1",
            target: "New staff get used to the shift pattern within a month",
            extra: ["used", "getting", "use"],
            why: "<i>Get used to</i> + noun or <i>-ing</i>: the process rather than the state." },
          { cue: "A question about a past habit.", band: "B1",
            target: "Did families use to boil their water before the pipes were laid",
            extra: ["used", "do", "boiling"],
            why: "<i>Did</i> carries the past, so <i>use to</i> with no <i>d</i>." },
          { cue: "A duration up to now.", band: "B2",
            target: "The clinic has been running the same register for eleven years",
            extra: ["ran", "runs", "is running"],
            why: "Present perfect continuous with <i>for</i>: begun in the past and still going on." },
          { cue: "A result rather than an activity.", band: "B2",
            target: "They have recorded four hundred cases since the outbreak began",
            extra: ["have been recording", "recorded", "are"],
            why: "The simple present perfect, because the four hundred is a completed count rather than an activity in progress." },
          { cue: "A closed past against a running trend.", band: "C1",
            target: "Sanitation used to be a local matter but national agencies have been setting the standards since the war",
            extra: ["use", "set", "are setting"],
            why: "<i>Used to</i> for what has ended, present perfect continuous for what replaced it and continues." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build sentences", letter: "C",
        concepts: ["correct"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five sentences from reports. One word in each is wrong — a wrong word, not a wrong order. Click it, then type the correction.",
        items: [
          { text: "The clinic use to keep a paper register.",
            fixed: "The clinic used to keep a paper register.",
            wrong: "use", right: "used",
            why: "In the plain positive form the <i>d</i> stays. It comes off only after <i>did</i>." },
          { text: "New staff get used to work nights within a month.",
            fixed: "New staff get used to working nights within a month.",
            wrong: "work", right: "working",
            why: "The <i>to</i> in <i>get used to</i> is a preposition, so the verb after it takes <i>-ing</i>." },
          { text: "They have been record four hundred cases since June.",
            fixed: "They have been recording four hundred cases since June.",
            wrong: "record", right: "recording",
            why: "<i>Have been</i> takes the <i>-ing</i> form — though with a completed count, <i>have recorded</i> would be the better choice." },
          { text: "The register has been keeping by the same clerk since June.",
            fixed: "The register has been kept by the same clerk since June.",
            wrong: "keeping", right: "kept",
            why: "A passive needs the participle. <i>Has been keeping</i> would mean the register was doing the keeping." },
          { text: "Did the agency used to publish weekly figures?",
            fixed: "Did the agency use to publish weekly figures?",
            wrong: "used", right: "use",
            why: "<i>Did</i> already carries the past, so the main verb goes to its bare form." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the word. Both use this unit's prefix.",
        items: [
          { text: "A r___ strain no longer responds to the first-line drug.", answer: "resistant", given: [0, 1, 2],
            why: "<i>re + sistant</i>." },
          { text: "A r___ is the same illness returning in the same patient.", answer: "recurrence", given: [0, 1, 2],
            why: "<i>re + currence</i>." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Word building", letter: "B",
        concepts: ["word", "cause"],
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Two more. One carries this unit's prefix and one only appears to.",
        items: [
          { text: "Teams tried to r___ the result in two other districts.", answer: "replicate", given: [0, 1],
            why: "<i>re + plicate</i>, to fold again. A finding that survives this is worth far more than one that has not been tried." },
          { text: "Clean water helped to r___ mortality decades before antibiotics.", answer: "reduce", given: [0, 1],
            why: "A trap: <i>reduce</i> is <i>re + duce</i>, to lead back, and nothing is happening twice." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Word building", letter: "C",
        carry: "1a",
        concepts: ["word", "evidence"],
        kind: "wordbank", task: null, n: 0,
        prompt: "Drag a form into each gap. Two in the bank are not used.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>Three of these contain the word <i>used</i> and only one of them is about the past. The test is what follows: a bare verb means a closed habit, and <i>-ing</i> means accustomed.</p>" },
        extra: ["used", "are using"],
        items: [
          { text: "Cholera ___ kill thousands in a single summer.", answer: "used to",
            why: "a bare infinitive follows, so this is the closed past." },
          { text: "Did families ___ boil their water?", answer: "use to",
            why: "<i>Did</i> is already carrying the past, so the <i>d</i> comes off. The bare <i>used</i> left in the bank is the card this gap is designed to attract." },
          { text: "Hospital staff ___ working through the night.", answer: "are used to",
            why: "<i>-ing</i> follows, so this is <i>accustomed</i>, not the past." },
          { text: "Researchers ___ the decline since the eighteen fifties.", answer: "have been tracking",
            why: "begun in the past and still going on." },
          { text: "New staff ___ the shift pattern within a month.", answer: "get used to",
            why: "the process of becoming accustomed, rather than the state." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write one sentence with <i>used to</i>, one with <i>didn't use to</i>, and one with <i>have been —ing</i>, all about your own study.</p>" } }
    ]
  };
})();
