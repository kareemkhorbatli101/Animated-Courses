/* Unit 8 · Disease and Public Health — LESSON 3 · GRAMMAR
   used to · used to in questions · the present perfect continuous. */
(function () {
  window.PAGE = {
    id: "u08-l3", unit: "u08", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Say what was once true, and what has been going on",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review used to", letter: "A",
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

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
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

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the word. Both use this unit's prefix.",
        items: [
          { text: "A r___ strain no longer responds to the first-line drug.", answer: "resistant", given: [0, 1, 2],
            why: "<i>re + sistant</i>." },
          { text: "A r___ is the same illness returning in the same patient.", answer: "recurrence", given: [0, 1, 2],
            why: "<i>re + currence</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write one sentence with <i>used to</i>, one with <i>didn't use to</i>, and one with <i>have been —ing</i>, all about your own study.</p>" } }
    ]
  };
})();
