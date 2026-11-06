/* Unit 12 · Art, Audience and Culture — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: homophones. */
(function () {
  window.PAGE = {
    id: "u12-l4", unit: "u12", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Explain something to someone who missed it",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>Which bit lost you?</i><i>Shall I go back a step?</i><i>Think of it like this —</i>" },
        items: [
          { who: "mei", say: "I didn't follow the bit about the ending.",
            options: [
              { text: "Which part — the shots, or what he's claiming about them?", correct: true,
                why: "Finds out what was lost before re-explaining, which is this unit's On Campus skill." },
              { text: "It was the ending.", why: "Repeats what she already said." },
              { text: "You should have been listening.", why: "Closes the conversation." }
            ] },
          { who: "dan", say: "Did you enjoy watching it?",
            options: [
              { text: "I did, though I'm still arguing with the ending.", correct: true, why: "<i>Enjoy</i> + gerund, answered in kind." },
              { text: "I enjoyed to watch it.", why: "<i>Enjoy</i> never takes an infinitive." },
              { text: "I watch it.", why: "Present simple for a past event." }
            ] },
          { who: "priya", say: "He stopped explaining halfway through.",
            options: [
              { text: "Did he say why he stopped?", correct: true, why: "Reads <i>stopped explaining</i> as ceasing, which is what it means." },
              { text: "So he paused to explain.", why: "That is <i>stopped to explain</i> — the opposite." },
              { text: "He stopped to explain, yes.", why: "Changes the meaning while appearing to agree." }
            ] },
          { who: "tomas", say: "The critic says the film refuses its genre.",
            options: [
              { text: "What does he point to in the film itself?", correct: true,
                why: "Separates the interpretation from the observation — the unit's central move." },
              { text: "So the genre is refused.", why: "Repeats the claim without examining it." },
              { text: "I don't like that genre.", why: "Changes the subject to preference." }
            ] },
          { who: "mei", say: "There were three of them — their, there and they're.",
            options: [
              { text: "Homophones. They sound the same and do nothing alike.", correct: true,
                why: "Names the phenomenon the speaker is describing." },
              { text: "They're all the same word.", why: "They are three different words." },
              { text: "I can't hear the difference.", why: "True of everyone — which is the point, not a problem." }
            ] },
          { who: "dan", say: "If he'd explained the last shot, nobody would have walked out confused.",
            options: [
              { text: "A few still did, apparently.", correct: true,
                why: "He did <b>not</b> explain it and people <b>were</b> confused. Only this reply follows." },
              { text: "Good thing he explained it.", why: "The counterfactual says he did not." },
              { text: "So everyone understood.", why: "The opposite of what is implied." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students after a screening. Listen once.",
        speaker: "mei", speakerNote: "with Tomás Ferreira",
        audio: { track: "12-05", label: "After the screening", lines: [
          { who: "mei", text: "I didn't get the ending at all. Did something happen that I missed?" },
          { who: "tomas", text: "Nothing happened — that's the ending. The brothers are in the room together and the camera stays on the one who isn't speaking." },
          { who: "mei", text: "So the confrontation just… doesn't come." },
          { who: "tomas", text: "Right. And the review we read calls that a refusal of the genre, which is an interpretation. What you can actually check is that it happens three times and the last shot is an empty corridor." },
          { who: "mei", text: "That's more useful than the review, honestly." }
        ] },
        items: [
          { q: "What did Mei think she had missed?",
            options: [
              { text: "An event in the ending.", correct: true, why: "<i>Did something happen that I missed?</i>" },
              { text: "The beginning of the film.", why: "Only the ending is discussed." },
              { text: "The review.", why: "They have both read it." }
            ] },
          { q: "What does Tomás say actually happens?",
            options: [
              { text: "The brothers are together and the camera stays on the silent one.", correct: true,
                why: "He gives the observable fact, as against the review's claim about it." },
              { text: "The brothers argue in the final scene.", why: "The confrontation never comes." },
              { text: "The film ends mid-sentence.", why: "The last shot is an empty corridor." }
            ] },
          { q: "Why does he distinguish the review's phrase from what he describes?",
            options: [
              { text: "Because one is an interpretation and the other can be checked.", correct: true,
                why: "He says so in as many words, and it is the distinction the whole unit teaches." },
              { text: "Because the review is wrong.", why: "He does not say it is wrong." },
              { text: "Because he has not read the review.", why: "He quotes it." }
            ] },
          { q: "What does Mei find more useful?",
            options: [
              { text: "The checkable description.", correct: true,
                why: "Her last line, and the implied reason is that she can now form her own view." },
              { text: "The review's phrasing.", why: "She prefers what Tomás gave her." },
              { text: "Watching the film again.", why: "Not mentioned." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "<b>Homophones</b> sound identical and mean different things. Nothing in the sound tells them apart — only the grammar around them does, which is why listening for structure matters.",
        speaker: "haddad",
        lines: [
          { text: "They're over there with their notes.",
            note: "<i>they're / there / their</i> — three words, one sound. The grammar is the only clue." },
          { text: "It's lost its ending.",
            note: "<i>it's</i> = it is; <i>its</i> = belonging to it. The apostrophe never marks possession here." },
          { text: "He knew the audience would see the two endings as too similar.",
            note: "<i>knew / new</i>, <i>see / sea</i>, <i>two / too</i> — all decided by position." },
          { text: "The critic whose review you read would not accept that reading.",
            note: "<i>whose / who's</i>, <i>read</i> twice with two pronunciations. The top of this task's range." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … ask what someone missed · separate an observation from an interpretation · place a homophone by its grammar.</p>" } }
    ]
  };
})();
