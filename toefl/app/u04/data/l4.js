/* Unit 4 · Migration and the Human Past — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: the two sounds spelt th. */
(function () {
  window.PAGE = {
    id: "u04-l4", unit: "u04", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Ask for help without losing face",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>I've not come across that before.</i><i>Could you point me at the right section?</i><i>I may be missing something obvious.</i>" },
        items: [
          { who: "dan", say: "Have you been to the archive before?",
            options: [
              { text: "No, this is my first time.", correct: true, why: "A present-perfect question about experience takes a yes or no plus a detail." },
              { text: "I go tomorrow.", why: "Answers about the future, not about experience." },
              { text: "It was interesting.", why: "Implies a visit without saying whether there was one." }
            ] },
          { who: "mei", say: "How long have you worked on this site?",
            options: [
              { text: "Three seasons now.", correct: true, why: "<i>How long</i> + present perfect asks for a duration." },
              { text: "Since I will finish.", why: "Not a possible time expression." },
              { text: "I worked there.", why: "Simple past closes the period; the question assumes it is open." }
            ] },
          { who: "priya", say: "Sorry — I didn't catch the box number.",
            options: [
              { text: "Fourteen. I'll write it down for you.", correct: true, why: "Supplies the missing information and removes the problem." },
              { text: "You should have listened.", why: "Grammatically fine, socially a dead end." },
              { text: "I caught it.", why: "Answers about the speaker rather than helping." }
            ] },
          { who: "tomas", say: "Has anyone ordered the coastal folder?",
            options: [
              { text: "Not yet, I don't think.", correct: true, why: "<i>Not yet</i> is the natural partner of a present-perfect question with <i>anyone</i>." },
              { text: "Yes, tomorrow.", why: "<i>Yes</i> claims it is done, then puts it in the future." },
              { text: "I ordered it last week, so no.", why: "Contradicts itself." }
            ] },
          { who: "mei", say: "I may be missing something obvious here.",
            options: [
              { text: "No, it's genuinely confusing — let me show you.", correct: true,
                why: "Hears the hedge as a request for help and answers it without making the asker feel small." },
              { text: "Yes, you are.", why: "Technically responsive, and it punishes the asking." },
              { text: "I'm missing it too.", why: "Agrees without helping. Fine socially, useless practically." }
            ] },
          { who: "dan", say: "I'd have ordered it in advance if I'd read the notice.",
            options: [
              { text: "We can probably still get it for Friday.", correct: true,
                why: "The speaker did <b>not</b> read the notice and did <b>not</b> order it. Only this reply addresses the actual situation." },
              { text: "Good thing you read it.", why: "The counterfactual says they did not." },
              { text: "So it's already ordered.", why: "The opposite of what the sentence means." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "A student at the archive desk. Listen once.",
        speaker: "priya", speakerNote: "with Dan Okafor",
        audio: { track: "4-05", label: "At the archive desk", lines: [
          { who: "priya", text: "I may be missing something obvious, but I can't find the coastal survey folder in the catalogue." },
          { who: "dan", text: "You won't — it's not catalogued with the others. It has been held in the restricted series since the nineteen nineties." },
          { who: "priya", text: "Does that mean I can't see it?" },
          { who: "dan", text: "You can, but it has to be ordered a day ahead, and you'll need your supervisor's name on the form." },
          { who: "priya", text: "Then I've left it too late for Thursday." },
          { who: "dan", text: "For Thursday, yes. Order it today and it'll be here Friday morning." }
        ] },
        items: [
          { q: "What is Priya's problem?",
            options: [
              { text: "She cannot find a folder in the catalogue.", correct: true, why: "Her opening line states it, prefaced by a face-saving hedge." },
              { text: "She has lost her supervisor's name.", why: "The supervisor's name is a requirement Dan introduces later." },
              { text: "The archive is closed on Thursday.", why: "Thursday is a timing problem, not a closure." }
            ] },
          { q: "Why is the folder not in the catalogue?",
            options: [
              { text: "It has been in a restricted series since the nineties.", correct: true,
                why: "Present perfect with <i>since</i> — a state that began then and still holds." },
              { text: "It was lost.", why: "Nothing suggests that." },
              { text: "It has not been catalogued yet.", why: "It is deliberately held elsewhere, not pending." }
            ] },
          { q: "Why does Dan mention the supervisor's name?",
            options: [
              { text: "To tell her what the order form will require.", correct: true,
                why: "His purpose is procedural: this is a second condition on getting the folder." },
              { text: "To check that she is a registered student.", why: "He does not question her status." },
              { text: "To suggest she ask her supervisor instead.", why: "He is telling her how to order it herself." }
            ] },
          { q: "What is the outcome?",
            options: [
              { text: "She can have it on Friday if she orders it today.", correct: true,
                why: "Dan's last line concedes Thursday and offers Friday on a condition." },
              { text: "She can have it on Thursday.", why: "He agrees that Thursday is now too late." },
              { text: "She cannot see it at all.", why: "He says she can — with two conditions." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "<b>th</b> spells two different sounds. Voiceless /θ/ in <i>think</i>; voiced /ð/ in <i>this</i>. Grammar words usually take the voiced one.",
        speaker: "haddad",
        lines: [
          { text: "This is the third one.", note: "<i>This</i> and <i>the</i> voiced /ð/; <i>third</i> voiceless /θ/." },
          { text: "They thought the other three were earlier.",
            note: "<i>They, the, other</i> voiced; <i>thought, three</i> voiceless." },
          { text: "Although they have been there for months, nothing has been published.",
            note: "<i>Although, they, there</i> voiced; <i>months, nothing</i> voiceless." },
          { text: "The authors who gathered these northern samples thought them worth another look.",
            note: "Relative clause plus a complex noun phrase, with both sounds throughout." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … ask for help without apologising twice · use <i>for</i> and <i>since</i> · hear the two <i>th</i> sounds.</p>" } }
    ]
  };
})();
