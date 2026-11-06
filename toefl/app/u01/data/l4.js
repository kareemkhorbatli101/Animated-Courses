/* Unit 1 · How We Learn — LESSON 4 · EVERYDAY CONVERSATION
   Social Interpersonal, around the unit's academic subject.
   Functional theme: expressing uncertainty. Pronunciation: sh, ch, j. */
(function () {
  window.PAGE = {
    id: "u01-l4", unit: "u01", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Respond naturally, and say when you are not sure",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>I'm just not sure.</i><i>I'm not quite sure.</i><i>It's hard to say.</i><i>I can't tell you for sure.</i>" },
        items: [
          { who: "mei", say: "Is this seat taken?",
            options: [
              { text: "No, go ahead.", correct: true, why: "An offer of the seat — the expected reply." },
              { text: "Yes, I'll take it.", why: "This answers as though <i>you</i> were being offered the seat." },
              { text: "It's over there.", why: "A location answer to a question that is not about location." }
            ] },
          { who: "dan", say: "When's the deadline?",
            options: [
              { text: "Friday at five.", correct: true, why: "A time, which is what <i>when</i> asks for." },
              { text: "In the library.", why: "A place, not a time." },
              { text: "Yes, it is.", why: "A <i>wh-</i> question cannot be answered yes or no." }
            ] },
          { who: "priya", say: "Have you chosen your courses yet?",
            options: [
              { text: "Not yet — I'm still deciding.", correct: true, why: "<i>Yet</i> invites <i>not yet</i>, and the speaker adds why." },
              { text: "I chose a quiet place.", why: "Hears <i>chosen</i> but misses what was chosen." },
              { text: "They're good courses.", why: "Comments on the courses instead of answering." }
            ] },
          { who: "dan", say: "Shall I put you on the waiting list?",
            options: [
              { text: "Yes, please do.", correct: true, why: "Accepts the offer. <i>Shall I…?</i> is an offer, not a question about facts." },
              { text: "I waited a long time.", why: "Hears <i>waiting</i> and answers about the past." },
              { text: "It's a short list.", why: "Comments on the list rather than taking the offer." }
            ] },
          { who: "mei", say: "I'm not quite sure that's the right one.",
            options: [
              { text: "We can look at the others.", correct: true, why: "Hears the hedge as doubt and offers a way forward." },
              { text: "I'm sure it is right.", why: "Contradicts flatly. Possible, but it ignores what the hedge was doing." },
              { text: "I'm not quite ready.", why: "Echoes the words without answering the doubt." }
            ] },
          { who: "tomas", say: "I'd have signed up earlier if I'd known.",
            options: [
              { text: "There may still be places.", correct: true,
                why: "The speaker did <b>not</b> sign up early. Only this reply acts on that." },
              { text: "I signed up too.", why: "Treats the speaker as someone who did sign up. They did not." },
              { text: "I didn't know either.", why: "Answers the second clause and ignores the first, which carries the request for help." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Mei is at the advising desk. Listen once, then answer.",
        speaker: "dan", speakerNote: "peer advisor, with Mei Lin",
        audio: { track: "1-06", label: "At the advising desk", lines: [
          { who: "mei", text: "Hi — is there any space left in the Thursday study-skills group?" },
          { who: "dan", text: "That one filled up on the first day, I'm afraid. I can put you on the waiting list." },
          { who: "mei", text: "How long is it, usually?" },
          { who: "dan", text: "Three or four people. Most of them get in by week three. There is also a Tuesday group at eight in the morning, which never fills." },
          { who: "mei", text: "Eight. Right." },
          { who: "dan", text: "I know. But you would start this week instead of in three weeks." }
        ] },
        items: [
          { q: "What does Mei want?",
            options: [
              { text: "A place in the Thursday group.", correct: true, why: "Her first line asks for exactly this." },
              { text: "To change her course.", why: "Courses are never mentioned." },
              { text: "To speak to a lecturer.", why: "She is speaking to a peer advisor about a group." }
            ] },
          { q: "What does Dan say about the waiting list?",
            options: [
              { text: "Most people on it get a place by week three.", correct: true, why: "He gives both the length and the usual wait." },
              { text: "It is closed.", why: "He offers to put her on it." },
              { text: "It has thirty people on it.", why: "He says three or four." }
            ] },
          { q: "Why does Dan mention the Tuesday group?",
            options: [
              { text: "To offer her something she could start immediately.", correct: true,
                why: "His last line makes the purpose explicit: this week instead of in three weeks. Purpose questions are standard on this task." },
              { text: "To say the Thursday group is better.", why: "He never compares their quality." },
              { text: "To explain why the Thursday group filled.", why: "He gives no reason for that." }
            ] },
          { q: "What will Mei probably do?",
            options: [
              { text: "Weigh an eight o'clock start against a three-week wait.", correct: true,
                why: "Her flat “Eight. Right.” signals reluctance, and Dan answers it with the trade-off. She has not decided." },
              { text: "Join the Tuesday group straight away.", why: "Her reaction to <i>eight</i> suggests she is not convinced yet." },
              { text: "Give up on study groups.", why: "Nothing in the exchange points that way." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "This unit's sounds are <b>sh</b>, <b>ch</b> and <b>j</b>. Listen, then say each line back.",
        speaker: "haddad",
        lines: [
          { text: "I'm not sure.", note: "/ʃ/ in <i>sure</i> — not /s/. One clause." },
          { text: "I checked the schedule and chose a different session.",
            note: "/tʃ/ in <i>checked</i> and <i>chose</i>, /ʃ/ in <i>session</i>. Compound verb." },
          { text: "If you change your major, you should see an advisor.",
            note: "/dʒ/ in <i>change</i> and <i>major</i>. Dependent clause." },
          { text: "The students who chose the Thursday session finished the project much sooner.",
            note: "Relative clause plus a complex noun phrase — the top of this task's range." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … respond without a pause · express uncertainty · hear the difference between <i>ch</i> and <i>j</i>.</p>" } }
    ]
  };
})();
