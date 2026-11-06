/* Unit 5 · Exploring Space — ON CAMPUS
   Function: give a helpful suggestion in a group project. */
(function () {
  window.PAGE = {
    id: "u05-oc", unit: "u05", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Give a helpful suggestion in a group project",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice sent to the observing group. It plays once.",
        speaker: "dan", speakerNote: "session coordinator",
        audio: { track: "5-11", label: "Tonight is off", lines: [{ who: "dan", text:
          "Tonight is off. Cloud cover is forecast at ninety per cent after ten, so the observing session is cancelled and we have rebooked the dome for Tuesday. If you have already written your observing plan, keep it. Nothing about the targets has changed, only the date." }] },
        items: [
          { q: "Why is the session cancelled?",
            options: [
              { text: "Heavy cloud is forecast.", correct: true, why: "Ninety per cent after ten, with <i>so</i> introducing the consequence." },
              { text: "The dome is unavailable.", why: "The dome has been rebooked, which is the fix, not the cause." },
              { text: "The targets have changed.", why: "The last line says exactly the opposite." }
            ] },
          { q: "What should students who wrote a plan do?",
            options: [
              { text: "Keep it — it is still valid.", correct: true,
                why: "“Nothing about the targets has changed, only the date” gives the reason for keeping it." },
              { text: "Write a new one for Tuesday.", why: "The announcement is at pains to say that is unnecessary." },
              { text: "Send it to the coordinator.", why: "No submission is requested." }
            ] },
          { q: "What has changed?",
            options: [
              { text: "Only the date.", correct: true, why: "Stated in the final clause, as a deliberate contrast." },
              { text: "The date and the targets.", why: "The targets are explicitly unchanged." },
              { text: "The location.", why: "The same dome has been rebooked." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on why so much exploration is uncrewed. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "5-12", label: "Why we send machines", lines: [{ who: "haddad", text:
          "I am often asked why so much of what we do in space is done without people, and the honest answer has three parts. The first is duration. A probe can wait. It can spend seven years travelling to a planet and then work for twenty more, and it does not need to be fed or brought home. No crewed mission has ever been designed on that timescale, and none realistically could be. The second is mass. Every kilogram of life support is a kilogram not spent on instruments, and the ratio is brutal: a crewed vehicle carries a small fraction of the scientific payload that an uncrewed one of the same mass can carry. The third part is the one people like least. It is risk. We have lost a great many spacecraft and we will lose more, and that is an acceptable cost precisely because nobody is aboard. Now, I want to be careful here, because this is not an argument that people should never go. There are things a geologist standing on a surface can do in an afternoon that a rover has not managed in a decade. But if the question is where the knowledge has come from so far, the answer is overwhelmingly from machines that went alone." }] },
        transcript: "<p>Duration, mass and risk. And a caveat: a geologist on a surface can do in an afternoon what a rover has not managed in a decade.</p>",
        items: [
          { q: "What are the three reasons she gives?",
            options: [
              { text: "Duration, mass and risk.", correct: true, why: "She numbers them, which is the clearest possible signal to write them down." },
              { text: "Cost, distance and politics.", why: "None of these is named." },
              { text: "Speed, accuracy and training.", why: "Not her three." }
            ] },
          { q: "What does she mean by saying the mass ratio is <i>brutal</i>?",
            options: [
              { text: "Life support takes mass that would otherwise be instruments.", correct: true,
                why: "She states the trade directly: every kilogram of one is a kilogram not spent on the other." },
              { text: "Crewed vehicles are heavier overall.", why: "Her comparison holds mass constant — <i>of the same mass</i>." },
              { text: "Launching is physically dangerous.", why: "That is risk, her third reason, not mass." }
            ] },
          { q: "Why does she say the loss of spacecraft is acceptable?",
            options: [
              { text: "Because nobody is aboard.", correct: true, why: "“precisely because nobody is aboard” — the word <i>precisely</i> marks it as the whole reason." },
              { text: "Because they are inexpensive.", why: "Cost is not her argument here." },
              { text: "Because they are easily replaced.", why: "Replacement is not mentioned." }
            ] },
          { q: "What is the purpose of the last two sentences?",
            options: [
              { text: "To limit her own argument before someone else does.", correct: true,
                why: "“I want to be careful here, because this is not an argument that people should never go” — she concedes the one case against her." },
              { text: "To introduce a new topic.", why: "It returns to the same question she opened with." },
              { text: "To withdraw the three reasons.", why: "She reaffirms them in the final clause." }
            ] }
        ] },

      { id: "c", section: 3, sectionTitle: "Make a suggestion", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. In a group project, a suggestion lands or not depending almost entirely on how it is framed.",
        note: { kind: "speak",
                body: "<i>What if we…?</i><i>One option would be to…</i><i>Would it help if I…?</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT TO SUGGEST SOMETHING",
          blocks: [
            { h: "Do this", lines: [
              "Offer it as one option, not as the answer.",
              "Say what problem it solves.",
              "Offer to do part of it yourself."
            ] },
            { h: "Say this", lines: [
              "What if we took the second half? Our targets don't rise until after midnight anyway.",
              "One option would be to split the night — though I think that wastes both setups.",
              "Would it help if I wrote to the technician this afternoon?"
            ] }
          ] },
        after: "<p>The third pattern is the one that changes outcomes. Attaching your own labour to a suggestion is what separates it from an instruction.</p>",
        closer: { kind: "life",
          body: "<p>In your next group meeting, make one suggestion using the third pattern. Notice whether it is taken up more readily than your usual phrasing.</p>" } }
    ]
  };
})();
