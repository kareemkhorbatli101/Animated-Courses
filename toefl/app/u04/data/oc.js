/* Unit 4 · Migration and the Human Past — ON CAMPUS
   Function: ask for help without losing face. */
(function () {
  window.PAGE = {
    id: "u04-oc", unit: "u04", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Ask for help without losing face",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice before the archive visit. It plays once.",
        speaker: "dan", speakerNote: "course administrator",
        audio: { track: "4-11", label: "A change for Thursday", lines: [{ who: "dan", text:
          "A change for Thursday. The archive visit is still going ahead, but we now have the reading room for two hours instead of three, so bring your questions written down. The box list is on the noticeboard. If you asked for the coastal survey folder, it is the one box that has to be ordered in advance." }] },
        items: [
          { q: "What has changed?",
            options: [
              { text: "The visit is an hour shorter.", correct: true, why: "Two hours instead of three." },
              { text: "The visit is cancelled.", why: "“still going ahead” says the opposite." },
              { text: "The day has moved.", why: "It is still Thursday." }
            ] },
          { q: "Why should students write their questions down?",
            options: [
              { text: "Because there is less time than planned.", correct: true,
                why: "<i>so</i> links the shorter session to the instruction — purpose carried by the connector." },
              { text: "Because the archive requires it.", why: "No archive rule is mentioned." },
              { text: "Because the box list is long.", why: "The box list is a separate sentence." }
            ] },
          { q: "What is special about the coastal survey folder?",
            options: [
              { text: "It alone has to be ordered in advance.", correct: true, why: "“the <i>one</i> box that has to be ordered in advance”." },
              { text: "It is not available.", why: "It is available, with notice." },
              { text: "It is on the noticeboard.", why: "The box <i>list</i> is on the noticeboard." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on a habit of mind. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "4-12", label: "Who got there first", lines: [{ who: "haddad", text:
          "There is a habit of mind I want you to resist, and it is the habit of asking who got there first. The question feels natural and it produces bad archaeology, because it makes every site a competitor and every date a claim to a title. A better question is what the distribution of dates looks like. If the earliest secure sites cluster along a coast and the inland corridor sites are consistently later, that pattern tells you something about a route. It tells you more than any single early date could, and it is far harder to overturn, because it does not rest on one excavation being right. Now, the uncomfortable part. We have known for decades that radiocarbon dates from coastal sites are harder to interpret, because marine carbon behaves differently from atmospheric carbon. That is not a reason to discard them. It is a reason to correct them, and to say in the paper exactly what correction was applied. A date without its correction stated is not a measurement; it is an assertion. And a field that publishes assertions will eventually find itself arguing about who got there first, which is where we came in." }] },
        transcript: "<p>Ask what the distribution of dates looks like, not who got there first. And state the correction, or the date is an assertion rather than a measurement.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "A pattern across many dates is worth more than any single earliest date.", correct: true,
                why: "She contrasts the two questions and says the pattern is harder to overturn." },
              { text: "Coastal dates should not be used.", why: "“That is not a reason to discard them.”" },
              { text: "Radiocarbon dating does not work.", why: "She asks for correction, not abandonment." }
            ] },
          { q: "Why are coastal radiocarbon dates harder to interpret?",
            options: [
              { text: "Marine carbon behaves differently from atmospheric carbon.", correct: true,
                why: "Stated as the reason — a detail worth putting on the pad." },
              { text: "Coastal sites are usually younger.", why: "Age is not the issue she raises." },
              { text: "The samples are usually damaged.", why: "Damage is not mentioned." }
            ] },
          { q: "What does she mean by calling an uncorrected date <i>an assertion</i>?",
            options: [
              { text: "It is a claim the reader cannot check.", correct: true,
                why: "She opposes it to <i>a measurement</i>, and a measurement is checkable because its correction is stated." },
              { text: "It is deliberately dishonest.", why: "She never alleges dishonesty, only incompleteness." },
              { text: "It is always wrong.", why: "An uncorrected date may be right; it is simply unverifiable." }
            ] },
          { q: "How does the end of the talk connect to its beginning?",
            options: [
              { text: "Publishing unverifiable dates pushes a field back towards priority disputes.", correct: true,
                why: "“which is where we came in” closes the loop onto <i>who got there first</i>." },
              { text: "It introduces a new topic.", why: "The last clause points explicitly back." },
              { text: "It withdraws the earlier claim.", why: "It reinforces it." }
            ] }
        ] },

      { id: "c", section: 3, sectionTitle: "Ask for help", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. Asking for help is a skill, and most of it is in the framing.",
        note: { kind: "speak",
                body: "<i>I may be missing something obvious.</i><i>I've not come across this before.</i><i>Could you point me at the right section?</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT HELP AND NOT PITY",
          blocks: [
            { h: "Do this", lines: [
              "Say what you have already tried.",
              "Ask for a direction, not for the answer.",
              "Apologise once, at most."
            ] },
            { h: "Say this", lines: [
              "I've looked in the catalogue and the index — could you point me at the right section?",
              "I may be missing something obvious here.",
              "I've not come across this before; what would you check first?"
            ] }
          ] },
        after: "<p>Saying what you have already tried does two things at once: it respects the other person's time, and it shows you are not asking them to do the work.</p>",
        closer: { kind: "life",
          body: "<p>Next time you are stuck, write down what you have already tried <i>before</i> you ask. Notice whether the answer you get is better.</p>" } }
    ]
  };
})();
