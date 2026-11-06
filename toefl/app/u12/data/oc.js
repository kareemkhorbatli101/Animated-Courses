/* Unit 12 · Art, Audience and Culture — ON CAMPUS
   Function: help someone else understand. */
(function () {
  window.PAGE = {
    id: "u12-oc", unit: "u12", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Help someone else understand",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice about the gallery visit. It plays once.",
        speaker: "dan", speakerNote: "course administrator",
        audio: { track: "12-11", label: "About the gallery visit", lines: [{ who: "dan", text:
          "About the gallery visit. We have been given a curator-led tour at two, which was not originally part of the booking, so the group will meet at one forty-five rather than two fifteen. The written task has not changed. If you cannot make the earlier time, join us in the second room at half past two." }] },
        items: [
          { q: "Why has the meeting time moved?",
            options: [
              { text: "A curator-led tour has been added at two.", correct: true,
                why: "<i>which was not originally part of the booking</i> explains why this is a change." },
              { text: "The gallery closes earlier.", why: "Closing times are not mentioned." },
              { text: "The written task has changed.", why: "It explicitly has not." }
            ] },
          { q: "What is the new meeting time?",
            options: [
              { text: "One forty-five.", correct: true, why: "<i>rather than two fifteen</i> marks it as the change." },
              { text: "Two fifteen.", why: "That is the old time." },
              { text: "Half past two.", why: "That is the fallback for latecomers." }
            ] },
          { q: "What should someone who cannot arrive early do?",
            options: [
              { text: "Join the group in the second room at half past two.", correct: true,
                why: "The conditional sentence gives both the place and the time." },
              { text: "Skip the visit.", why: "An alternative is offered." },
              { text: "Email the administrator.", why: "No contact is requested." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on a habit of reading. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "12-12", label: "Where the joint is", lines: [{ who: "haddad", text:
          "I want to talk about a habit of reading that will serve you in every subject, and it is the habit of separating what a writer claims from what a writer has shown. Criticism is unusually good practice for this, because critics tend to move between the two without marking the transition. Here is a typical sentence. The film refuses the consolations of its genre, choosing instead to leave its audience unsettled. Now, part of that is observation. The film does not end the way films of that kind usually end, and anyone can check it. The rest is interpretation. Refusing is a word about intention, and choosing is another, and neither of them is visible on the screen. I am not objecting to the sentence. Interpretation is the whole point of criticism and a review without it would be a listing. What I am asking is that you notice where the joint is. When you meet a claim about what a work is doing, ask what you would have to see in order to agree, and then ask whether the writer has shown you that. Sometimes they have. When they have not, you have found the place where the argument is actually being made." }] },
        transcript: "<p>Notice where the joint is between observation and interpretation. Ask what you would have to see in order to agree, then ask whether the writer has shown you that.</p>",
        items: [
          { q: "What habit is the speaker recommending?",
            options: [
              { text: "Separating what a writer claims from what a writer has shown.", correct: true,
                why: "Her opening sentence, and the example exists to demonstrate it." },
              { text: "Distrusting all criticism.", why: "“I am not objecting to the sentence.”" },
              { text: "Reading reviews before watching.", why: "Order of reading is never discussed." }
            ] },
          { q: "Which part of her example sentence is observation?",
            options: [
              { text: "That the film does not end as films of its kind usually do.", correct: true,
                why: "She says anyone can check it — that is her test for observation." },
              { text: "That the film refuses its genre.", why: "<i>Refusing</i> is a word about intention." },
              { text: "That the audience is left unsettled.", why: "A claim about effect, not a checkable fact." }
            ] },
          { q: "Why does she say a review without interpretation would be <i>a listing</i>?",
            options: [
              { text: "Because interpretation is what criticism is for.", correct: true,
                why: "She says so directly, and the remark exists to stop the talk being read as an attack." },
              { text: "Because reviews are too short.", why: "Length is not raised." },
              { text: "Because lists are easier to write.", why: "Difficulty is not her point." }
            ] },
          { q: "What does she mean by <i>the place where the argument is actually being made</i>?",
            options: [
              { text: "The interpretive claim the writer has not supported.", correct: true,
                why: "One step from her instruction: when they have not shown you, that unsupported joint is where the real argument sits." },
              { text: "The opening paragraph.", why: "Position is not what she is pointing at." },
              { text: "The part everyone agrees on.", why: "Agreement is where no argument is needed." }
            ] }
        ] },

      { id: "c", section: 3, sectionTitle: "Help someone understand", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. Explaining well begins with finding out what was actually lost.",
        note: { kind: "speak",
                body: "<i>Which bit lost you?</i><i>Shall I go back a step?</i><i>Tell me what you did follow.</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT TO HELP SOMEONE UNDERSTAND",
          blocks: [
            { h: "Do this", lines: [
              "Find out where they stopped following, before explaining anything.",
              "Give the checkable thing first, the interpretation second.",
              "Ask them to say it back."
            ] },
            { h: "Say this", lines: [
              "Which part lost you — what happens, or what the critic says about it?",
              "Here's what's on the screen. Here's what he's claiming about it.",
              "Can you put that back to me in your own words?"
            ] }
          ] },
        after: "<p>The last one is the only real test. If they can say it back differently, they have it; if they can only repeat your words, they do not — which is the same test Unit 11 applied to paraphrasing.</p>",
        closer: { kind: "life",
          body: "<p>Next time you explain something, ask the person to say it back. Notice how often the gap is somewhere you did not expect.</p>" } }
    ]
  };
})();
