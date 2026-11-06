/* Unit 3 · Adaptation and Diversity — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: v, b and f. */
(function () {
  window.PAGE = {
    id: "u03-l4", unit: "u03", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Compare, and ask what someone means",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        carry: "2a",
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

            { id: "1b", section: 1, sectionTitle: "Choose a response", letter: "B",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "Six more. Three of them are answered best by asking what the speaker meant.",
        items: [
          { who: "mei", say: "The northern island is drier, isn't it?",
            options: [
              { text: "Slightly, yes — about a tenth less rain.", correct: true,
                why: "Confirms the tag and puts a size on <i>slightly</i>, which is what a comparison is for." },
              { text: "Yes, it is dry.", why: "Answers a question about one island when the question compares two." },
              { text: "No, it isn't dry.", why: "Contradicts a tag question that was expecting agreement, and gives no figure." }
            ] },
          { who: "dan", say: "Beak depth went up by half a millimetre.",
            options: [
              { text: "Is that a lot, in this context?", correct: true,
                why: "A number with no scale beside it means nothing, and asking is faster than guessing." },
              { text: "That's not very much.", why: "Guesses the scale. It happens to be the wrong guess, which is the item's point." },
              { text: "Beaks are quite small.", why: "True and useless; it does not address how large the change was." }
            ] },
          { who: "priya", say: "So the finches adapted to the drought.",
            options: [
              { text: "Do you mean the population, or the individual birds?", correct: true,
                why: "The sentence is ambiguous between the two, and the whole unit turns on which is meant." },
              { text: "Yes, they grew deeper beaks.", why: "Takes the reading the unit exists to correct." },
              { text: "No, they didn't adapt.", why: "Rejects the sentence without finding out which version of it was intended." }
            ] },
          { who: "tomas", say: "This is the best evidence we have.",
            options: [
              { text: "Better than the moth study?", correct: true,
                why: "A superlative invites a check against the strongest rival. This is a polite one." },
              { text: "It is good evidence.", why: "Agrees with a weaker claim than the one made." },
              { text: "We have a lot of evidence.", why: "Changes the subject from quality to quantity." }
            ] },
          { who: "haddad", say: "Would you say the effect is large?",
            options: [
              { text: "Large for a vertebrate, yes.", correct: true,
                why: "Answers and names the comparison class, which is where <i>large</i> gets its meaning." },
              { text: "Yes, half a millimetre.", why: "Gives the figure again instead of judging it." },
              { text: "It depends.", why: "True of everything, and it leaves the questioner to do the work." }
            ] },
          { who: "dan", say: "If the drought had lasted longer, the change would have been bigger.",
            options: [
              { text: "So you think the length of it set the size of the change.", correct: true,
                why: "The drought did <b>not</b> last longer. Only this reply treats the sentence as a claim about the mechanism rather than a report." },
              { text: "Yes, it lasted eighteen months.", why: "Answers as though the length were in question; the sentence is counterfactual." },
              { text: "So the change was bigger than we thought.", why: "It was not: the bigger change is the one that did not happen." }
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

            { id: "2b", section: 2, sectionTitle: "Listen to a conversation", letter: "B",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students comparing their island's figures with another team's. Listen once.",
        speaker: "priya", speakerNote: "with Tomás Beltrán",
        audio: { track: "3-05", label: "Comparing two teams", lines: [
          { who: "priya", text: "Island two's mean is nine point one. Ours is eight point six." },
          { who: "tomas", text: "That is a bigger gap than last year." },
          { who: "priya", text: "It is. Though last year we measured in the morning and they measured at noon." },
          { who: "tomas", text: "Does the time of day matter for beak depth?" },
          { who: "priya", text: "Not for the beak. For the bird. A wet bird and a dry bird weigh differently, and we recorded weight on the same sheet." },
          { who: "tomas", text: "So the depths can be compared and the weights cannot." },
          { who: "priya", text: "That is what I think, yes." }
        ] },
        items: [
          { q: "How large is the gap between the two means?",
            options: [
              { text: "Half a millimetre.", correct: true,
                why: "Nine point one against eight point six. The figure is never stated as a difference, so you have to take it." },
              { text: "Nine point one millimetres.", why: "That is one of the two means, not the gap." },
              { text: "She does not say.", why: "She gives both numbers, which is the same as giving the gap." }
            ] },
          { q: "What does Priya raise about last year's measurements?",
            options: [
              { text: "The two teams measured at different times of day.", correct: true,
                why: "Introduced with <i>though</i>, which marks it as a qualification of the comparison just made." },
              { text: "The other team used different instruments.", why: "Instruments never come up." },
              { text: "Her own team measured fewer birds.", why: "No sample sizes are mentioned." }
            ] },
          { q: "Which measurement does the timing affect?",
            options: [
              { text: "Weight, because a wet bird and a dry bird differ.", correct: true,
                why: "<i>Not for the beak. For the bird.</i> — the two-word answer is doing all the work." },
              { text: "Beak depth, because the birds feed in the morning.", why: "She says explicitly that the beak is unaffected." },
              { text: "Both equally.", why: "The whole point of her answer is that it separates them." }
            ] },
          { q: "What do they conclude?",
            options: [
              { text: "The depths are comparable across the two teams; the weights are not.", correct: true,
                why: "Tomás states it and Priya confirms it, which is how a conclusion usually arrives in speech." },
              { text: "Neither set of figures can be used.", why: "Half of them can, which is the useful part of the finding." },
              { text: "Last year's figures were wrong.", why: "They were recorded differently, which is not the same as being wrong." }
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
        ] },

      { id: "3b", section: 3, sectionTitle: "Practise your pronunciation", letter: "B",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "Four more lines. <i>f</i> and <i>v</i> are the same mouth with the voice off and on; <i>b</i> is a different mouth altogether.",
        speaker: "haddad",
        lines: [
          { text: "Very few survived.", note: "/v/ then /f/ then /v/, in three words. Keep the lip on the teeth for all three." },
          { text: "The favourable variant had never been observed before.",
            note: "/f/ in <i>favourable</i>, /v/ four times, /b/ in <i>been</i> and <i>before</i>." },
          { text: "We verified the figures before the brief was finished.",
            note: "/v/ then /f/ then /b/ then /f/ — the three sounds alternating across one clause." },
          { text: "The evidence from both islands favours the view that the variation was present first.",
            note: "A complement clause inside a long noun phrase, with all three sounds in play. The top of this task's range." }
        ] },

      { id: "4a", section: 4, sectionTitle: "Hear the difference", letter: "A",
        kind: "minimal-pairs", task: null, n: 0,
        focus: "<p>Three sounds, two mouths. For <b>/f/</b> and <b>/v/</b> the top teeth rest on the bottom lip and the air hisses through; they differ only in whether the voice is on. For <b>/b/</b> the lips close completely and then burst apart. If your language has only two of these three, the third is the one to drill.</p>" +
               "<i>/f/ — fan · fine · few</i><i>/v/ — van · vine · view</i><i>/b/ — ban · bine · boat</i>",
        items: [
          { say: "vote",
            options: [
              { text: "vote", correct: true, why: "/v/ — the teeth touch the lip and the sound can be held as long as your breath lasts." },
              { text: "boat", why: "/b/ — the lips close completely, so the sound cannot be held at all." }
            ] },
          { say: "fan",
            options: [
              { text: "fan", correct: true, why: "/f/ — same mouth as /v/, voice off. No buzz in the throat." },
              { text: "van", why: "/v/ — same mouth, voice on." }
            ] },
          { say: "very",
            options: [
              { text: "berry", why: "/b/ — lips together first. This pair is the classic one for speakers whose language has no /v/." },
              { text: "very", correct: true, why: "/v/ — teeth on lip, and the sound starts before the vowel does." }
            ] },
          { say: "fine",
            options: [
              { text: "fine", correct: true, why: "/f/ — voiceless, and the vowel that follows is noticeably shorter than in <i>vine</i>." },
              { text: "vine", why: "/v/ — voiced, and it lengthens the vowel after it." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Hear the difference", letter: "B",
        kind: "dictation", task: null, n: 0,
        prompt: "Play each line and write exactly what you hear. Spelling counts; punctuation does not.",
        items: [
          { answer: "Very few of the birds survived the first drought",
            why: "<i>Very few</i> puts /v/ and /f/ side by side, and <i>survived</i> has another /v/ in the middle." },
          { answer: "The favourable variant had been present before the famine",
            why: "Four of this unit's three sounds in nine words, and <i>had been</i> is almost always reduced in speech." },
          { answer: "We verified every figure before the brief was published",
            why: "<i>verified</i> and <i>every</i> both carry /v/; <i>figure</i> and <i>brief</i> carry /f/ and /b/." },
          { answer: "Both beaks were above the average for the population",
            why: "<i>Both beaks</i> and <i>above the average</i> alternate /b/ and /v/ across the whole line." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … compare two things · ask what someone meant · keep <i>v</i> and <i>b</i> apart.</p>" } }
    ]
  };
})();
