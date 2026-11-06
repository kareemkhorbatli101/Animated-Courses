/* Unit 3 · Adaptation and Diversity — ON CAMPUS
   Function: ask for the evidence behind a claim. */
(function () {
  window.PAGE = {
    id: "u03-oc", unit: "u03", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Ask for the evidence behind a claim",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice at the start of the laboratory session. It plays once.",
        speaker: "dan", speakerNote: "laboratory demonstrator",
        audio: { track: "3-11", label: "One change to the session", lines: [{ who: "dan", text:
          "One change to the laboratory session. The finch specimens have not arrived from the museum, so we will start with the shell collection instead and do the beak measurements next week. Bring calipers either way. If you have already written your method section, you will need to renumber the stages." }] },
        items: [
          { q: "Why has the session changed?",
            options: [
              { text: "The specimens have not arrived.", correct: true, why: "Stated as the reason, with <i>so</i> introducing the consequence." },
              { text: "The calipers are missing.", why: "Calipers are still needed — <i>either way</i>." },
              { text: "The museum is closed.", why: "No reason for the delay is given." }
            ] },
          { q: "What should everyone bring?",
            options: [
              { text: "Calipers.", correct: true, why: "“Bring calipers either way” — the phrase marks it as unaffected by the change." },
              { text: "Nothing, this week.", why: "One item is specified." },
              { text: "A method section.", why: "That concerns only students who have written one." }
            ] },
          { q: "Who needs to renumber their stages?",
            options: [
              { text: "Students who have already written a method section.", correct: true,
                why: "The <i>if</i> clause narrows the instruction to them." },
              { text: "Everyone in the session.", why: "The condition excludes those who have not written one." },
              { text: "Nobody — the order is unchanged.", why: "The order has changed, which is why renumbering is needed." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on a sentence you will meet constantly. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "3-12", label: "What 'adapted to' hides", lines: [{ who: "haddad", text:
          "I want to take apart a sentence you will meet constantly, which is that a species adapted to its environment. The sentence is not wrong, but it hides the mechanism, and the hidden part is where most people go astray. Consider a population of birds in which beak depth varies, as it does in every real population. A drought arrives and the only seeds left are large and hard. Birds with deeper beaks crack them; birds with shallower beaks do not, and many of those birds die. The survivors breed, and because beak depth is heritable, the next generation has on average a slightly deeper beak than the generation before the drought. Notice what did not happen. No bird grew a deeper beak. No bird tried harder. The variation was already present before the drought began, and all the drought did was change which portion of it was passed on. This is why the phrase adapted to is best read as a description of an outcome rather than an account of a process. The process is differential survival acting on variation that already exists, and if you can hold those two ideas together you will not be caught by most of the confusions in this field." }] },
        transcript: "<p>The variation comes first. The drought only changes which part of it is passed on. <i>Adapted to</i> names the outcome, not the process.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "<i>Adapted to</i> names an outcome and hides the mechanism that produced it.", correct: true,
                why: "She says the sentence is not wrong but hides the mechanism, and the rest of the talk supplies it." },
              { text: "Birds change their beaks in response to hard conditions.", why: "“No bird grew a deeper beak.”" },
              { text: "Droughts are the main driver of evolution.", why: "The drought is her example, not her claim." }
            ] },
          { q: "What does she say was true <i>before</i> the drought?",
            options: [
              { text: "The variation in beak depth already existed.", correct: true,
                why: "A detail worth writing down: the variation is prior, which is the whole argument." },
              { text: "The seeds were already hard.", why: "The seeds hardened when the drought came." },
              { text: "The population was already adapted.", why: "That is the outcome she is explaining, not the starting point." }
            ] },
          { q: "Why must beak depth be heritable for the argument to work?",
            options: [
              { text: "Otherwise the survivors' advantage would not reach the next generation.", correct: true,
                why: "She puts <i>because beak depth is heritable</i> exactly where the generations connect." },
              { text: "Otherwise the birds could not crack the seeds.", why: "Cracking depends on depth, not on heritability." },
              { text: "Otherwise the drought would not have happened.", why: "Unrelated." }
            ] },
          { q: "What would she say to a student who writes <i>the finches evolved deeper beaks to survive</i>?",
            options: [
              { text: "The <i>to survive</i> implies a purpose the process does not have.", correct: true,
                why: "One step from <i>no bird tried harder</i>: she is objecting to agency and purpose throughout." },
              { text: "It is an accurate summary.", why: "It repeats the error she spends the talk dismantling." },
              { text: "It understates the size of the change.", why: "Size is not her concern here." }
            ] }
        ] },

      { id: "c", section: 3, sectionTitle: "Ask for the evidence", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. Asking for evidence is a normal academic move, not an accusation — if you phrase it as one.",
        note: { kind: "speak",
                body: "<i>What's that based on?</i><i>Is that measured or estimated?</i><i>How big was the sample?</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT THE EVIDENCE BEHIND A CLAIM",
          blocks: [
            { h: "Do this", lines: [
              "Ask about the claim, not about the person who made it.",
              "Ask for one specific thing: a number, a source, a method.",
              "Say what you would accept as an answer."
            ] },
            { h: "Say this", lines: [
              "Is that measured, or is it an estimate?",
              "Do you know roughly how many birds that was?",
              "I'd find that convincing if the same thing happened on a second island — did it?"
            ] }
          ] },
        after: "<p>The third pattern is the strongest. Naming in advance what would convince you turns a challenge into a collaboration.</p>",
        closer: { kind: "life",
          body: "<p>Next time a claim surprises you, ask one of these three questions before deciding whether you believe it.</p>" } }
    ]
  };
})();
