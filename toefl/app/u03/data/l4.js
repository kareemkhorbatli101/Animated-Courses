/* Unit 3 · Adaptation and Diversity — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: v, b and f. */
(function () {
  window.PAGE = {
    id: "u03-l4", unit: "u03", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Compare, and ask what someone means",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>About the same, I'd say.</i><i>Quite a bit bigger.</i><i>Hard to tell without measuring.</i>" },
        items: [
          { who: "mei", say: "Which tray is heavier?",
            options: [
              { text: "The one on the left, I think.", correct: true, why: "Answers <i>which</i> by identifying one." },
              { text: "Yes, it is.", why: "A <i>which</i> question needs an identification, not yes." },
              { text: "It weighs a lot.", why: "True of both, possibly, and it does not choose." }
            ] },
          { who: "dan", say: "Is this one bigger than that one?",
            options: [
              { text: "About the same, actually.", correct: true, why: "A legitimate answer to a comparison question: neither." },
              { text: "It's the biggest.", why: "Superlative answers a different question." },
              { text: "Yes, that one.", why: "Contradicts itself — <i>yes</i> points to <i>this</i>, not <i>that</i>." }
            ] },
          { who: "priya", say: "How much deeper is it?",
            options: [
              { text: "Roughly half a millimetre.", correct: true, why: "<i>How much</i> + comparative asks for the size of the difference." },
              { text: "It's deeper.", why: "Repeats the premise without giving the amount." },
              { text: "The deepest we've seen.", why: "A superlative, not a quantity." }
            ] },
          { who: "tomas", say: "Shall I label these before or after measuring?",
            options: [
              { text: "Before — it's easier to keep them straight.", correct: true, why: "Chooses one option and gives a reason." },
              { text: "Yes, label them.", why: "An either/or question is not a yes/no question." },
              { text: "I measured them.", why: "Answers about the past." }
            ] },
          { who: "mei", say: "I'm not sure that counts as adaptation.",
            options: [
              { text: "What would you call it instead?", correct: true,
                why: "Takes the doubt seriously and asks for the alternative — the move this unit's On Campus page teaches." },
              { text: "It definitely counts.", why: "Possible, but it closes the conversation rather than finding out what they mean." },
              { text: "I'm not sure either.", why: "Agrees without adding anything." }
            ] },
          { who: "priya", say: "If the seeds had stayed soft, the beaks wouldn't have changed.",
            options: [
              { text: "So the drought did the selecting.", correct: true,
                why: "The seeds <b>did</b> harden and the beaks <b>did</b> change. Only this reply follows what actually happened." },
              { text: "So the seeds stayed soft.", why: "The counterfactual says they did not." },
              { text: "So the beaks never changed.", why: "Again the opposite of what the sentence implies." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students in the lab, measuring specimens. Listen once.",
        speaker: "mei", speakerNote: "with Tomás Ferreira",
        audio: { track: "3-05", label: "In the specimen lab", lines: [
          { who: "mei", text: "Tray four is done. The average is nine point six." },
          { who: "tomas", text: "Nine point six? That's deeper than tray three, and tray three was supposed to be the later sample." },
          { who: "mei", text: "Let me check the label. — Ah. Four is the later one. The numbers on the trays aren't the order they were collected in." },
          { who: "tomas", text: "So the deeper average is the later sample after all. That's the direction we expected." },
          { who: "mei", text: "It is. I'd still measure tray three again, though, before we write anything down." }
        ] },
        items: [
          { q: "What is the problem Tomás notices?",
            options: [
              { text: "The result seems to go the wrong way.", correct: true,
                why: "He expects the later sample to be deeper, and at first it looks as though the earlier one is." },
              { text: "The average was not calculated.", why: "Mei gives it in her first line." },
              { text: "Tray four is missing.", why: "Tray four is the one she has finished." }
            ] },
          { q: "What turns out to be the cause?",
            options: [
              { text: "The tray numbers do not follow the collection order.", correct: true,
                why: "Mei checks the label and says so directly." },
              { text: "The specimens were measured wrongly.", why: "No measurement error is established." },
              { text: "The drought affected only one island.", why: "Islands are not discussed." }
            ] },
          { q: "Why does Mei want to measure tray three again?",
            options: [
              { text: "To be sure before anything is written down.", correct: true,
                why: "Her last line gives the purpose: <i>before we write anything down</i>. Purpose items usually sit on the final clause." },
              { text: "Because she thinks the labels are wrong again.", why: "The label question is settled." },
              { text: "Because Tomás asked her to.", why: "He does not; she proposes it." }
            ] },
          { q: "What does the exchange suggest about their method?",
            options: [
              { text: "They check a surprising result before accepting it.", correct: true,
                why: "The whole conversation is one surprise, one explanation, and one re-check." },
              { text: "They record whatever the first measurement gives.", why: "Mei explicitly resists this." },
              { text: "They have abandoned the experiment.", why: "Nothing suggests that." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "This unit's sounds are <b>v</b>, <b>b</b> and <b>f</b>. <i>v</i> and <i>f</i> use the lip and teeth; <i>b</i> uses both lips.",
        speaker: "haddad",
        lines: [
          { text: "The beak varies.", note: "<i>b</i> both lips, <i>v</i> lip and teeth — two words apart." },
          { text: "We observed the birds and verified every figure.",
            note: "/v/ in <i>observed, verified</i>; /b/ in <i>birds</i>; /f/ in <i>figure</i>." },
          { text: "If the variation had been favourable, it would have survived.",
            note: "/f/ in <i>If, favourable</i>; /v/ in <i>variation, survived</i>; /b/ in <i>been</i>." },
          { text: "The birds with the deepest beaks survived the first five famine years.",
            note: "Relative phrase plus a complex noun phrase, with all three sounds in play." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … compare two things · ask what someone meant · keep <i>v</i> and <i>b</i> apart.</p>" } }
    ]
  };
})();
