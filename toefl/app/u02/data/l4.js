/* Unit 2 · Climate and Prediction — LESSON 4 · EVERYDAY CONVERSATION
   Social Interpersonal. Pronunciation: j and ch. */
(function () {
  window.PAGE = {
    id: "u02-l4", unit: "u02", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Make plans, and say what you would rather do",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        concepts: ["listen"],
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>I'd rather not, if that's all right.</i><i>Either works for me.</i><i>Let's see what the forecast says.</i>" },
        items: [
          { who: "priya", say: "Are you coming on the field trip?",
            options: [
              { text: "Yes, I signed up last week.", correct: true, why: "Answers the yes/no question and adds a detail." },
              { text: "It's a long way.", why: "Comments on the trip without answering." },
              { text: "I came yesterday.", why: "Hears <i>coming</i> and answers about the past." }
            ] },
          { who: "dan", say: "What time are we leaving?",
            options: [
              { text: "Half past seven, from the main gate.", correct: true, why: "A time, which is what <i>what time</i> asks." },
              { text: "By minibus.", why: "Answers <i>how</i>, not <i>when</i>." },
              { text: "Yes, we are.", why: "A <i>wh-</i> question takes information, not yes or no." }
            ] },
          { who: "mei", say: "Shall we go on Thursday or Friday?",
            options: [
              { text: "I'd rather go Friday, if that's all right.", correct: true,
                why: "Chooses one and softens it — the preference form this unit teaches." },
              { text: "Yes, let's.", why: "An either/or question cannot be answered yes." },
              { text: "We went on Friday.", why: "Past tense for a question about the future." }
            ] },
          { who: "tomas", say: "Do you think it'll rain?",
            options: [
              { text: "Probably, by the afternoon.", correct: true, why: "A hedged prediction, which is what the question invites." },
              { text: "It rained a lot.", why: "Answers about the past." },
              { text: "I'm going to rain.", why: "Not possible — and the wrong subject." }
            ] },
          { who: "dan", say: "I'll bring the cold box.",
            options: [
              { text: "Great — I'll bring the batteries, then.", correct: true,
                why: "Recognises an offer and matches it with another. <i>Then</i> marks the coordination." },
              { text: "You brought it already?", why: "<i>I'll</i> is an undertaking about the future, not a report." },
              { text: "Would you rather I did?", why: "Odd: they have just volunteered." }
            ] },
          { who: "priya", say: "We'd have got there in time if we'd left at seven.",
            options: [
              { text: "Next time let's make it seven, then.", correct: true,
                why: "The speaker is saying they did <b>not</b> leave at seven and were late. Only this reply acts on that." },
              { text: "Good thing we left at seven.", why: "They did not. The counterfactual says so." },
              { text: "So we arrived on time.", why: "The opposite of what the sentence means." }
            ] }
        ] },


      { id: "1b", section: 1, sectionTitle: "Choose a response", letter: "B",
        concepts: ["listen", "sample"],
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "Six more. Two of them are offers, and an offer is not answered the way a question is.",
        items: [
          { who: "mei", say: "Would you rather take the minibus or walk up?",
            options: [
              { text: "The minibus, if there's room.", correct: true,
                why: "An either/or question takes one of the two, and the condition softens the choice." },
              { text: "Yes, I would.", why: "There is nothing for <i>yes</i> to select between." },
              { text: "I walked last time.", why: "Reports the past instead of choosing for this time." }
            ] },
          { who: "haddad", say: "I'm afraid site two is closed this week.",
            options: [
              { text: "Could we use site four instead?", correct: true,
                why: "<i>I'm afraid</i> delivers bad news; the useful reply proposes a way round it." },
              { text: "Why is it closed?", why: "Reasonable, but it accepts the problem rather than solving it, and the lesson is about moving a plan." },
              { text: "I'm afraid so.", why: "Echoes the phrase without taking any position." }
            ] },
          { who: "dan", say: "Don't forget the sample bottles.",
            options: [
              { text: "They're already in the cold box.", correct: true,
                why: "Answers the worry behind the reminder rather than the reminder itself." },
              { text: "I forgot them.", why: "Possible, but it reads as giving up; nothing follows it." },
              { text: "Don't forget the batteries.", why: "Trades reminders and leaves the first one unanswered." }
            ] },
          { who: "tomas", say: "It says here the rain stops at two.",
            options: [
              { text: "Then we could start straight after lunch.", correct: true,
                why: "<i>Then</i> marks the reply as a consequence of what was just said, which is how plans get made out loud." },
              { text: "It rained all afternoon.", why: "A past report in answer to a forecast." },
              { text: "Yes, it says that.", why: "Confirms the words and does nothing with them." }
            ] },
          { who: "priya", say: "I'd rather not drive in this, honestly.",
            options: [
              { text: "I'll take the wheel, if you like.", correct: true,
                why: "<i>Would rather not</i> is a refusal with the edge taken off; the reply offers to absorb the problem." },
              { text: "You'd rather not what?", why: "The object is obvious from the situation; asking marks you as not listening." },
              { text: "It isn't raining much.", why: "Argues with the reason instead of answering the preference." }
            ] },
          { who: "dan", say: "We'd have finished by four if the gate had been open.",
            options: [
              { text: "Let's ask for the key in advance next time.", correct: true,
                why: "The gate was shut and they did not finish by four. Only this reply works from that." },
              { text: "Good, so we finished early.", why: "They did not finish early; the sentence says the opposite." },
              { text: "The gate is usually open.", why: "Disputes a detail and leaves the actual problem in place." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        concepts: ["listen", "inference"],
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students settling the arrangements. Listen once.",
        speaker: "tomas", speakerNote: "with Priya Raman",
        audio: { track: "2-04", label: "Settling the trip", lines: [
          { who: "priya", text: "So are we going Thursday or Friday?" },
          { who: "tomas", text: "Thursday was the plan, but the forecast has changed. There's heavy rain coming in after midday." },
          { who: "priya", text: "We could go early and be back before it starts." },
          { who: "tomas", text: "We could. Though site three is by the river, and if it rains overnight on Wednesday the path will already be under water." },
          { who: "priya", text: "Then I'd rather move the whole thing to Friday and do all three properly." },
          { who: "tomas", text: "Agreed. I'll email the group tonight." }
        ] },
        items: [
          { q: "What were they originally going to do?",
            options: [
              { text: "Go on Thursday.", correct: true, why: "“Thursday was the plan” — the past form marks it as the earlier decision." },
              { text: "Go on Friday.", why: "That is what they decide at the end, not what was planned." },
              { text: "Visit only site three.", why: "Three sites are in question throughout." }
            ] },
          { q: "Why does Tomás mention Wednesday night?",
            options: [
              { text: "To show that going early on Thursday would not solve the problem.", correct: true,
                why: "Priya's suggestion was to beat the rain; he points out the path may already be flooded. That is his purpose." },
              { text: "To suggest going on Wednesday instead.", why: "He never proposes Wednesday as a trip day." },
              { text: "To explain why site three was chosen.", why: "No reason for choosing it is given." }
            ] },
          { q: "What does Priya say she would rather do?",
            options: [
              { text: "Move everything to Friday and do all three sites.", correct: true,
                why: "“I'd rather move the whole thing to Friday and do all three properly.”" },
              { text: "Drop site three.", why: "She wants all three — that is her reason for moving the day." },
              { text: "Go early on Thursday.", why: "That was her first suggestion, which she then withdraws." }
            ] },
          { q: "What will happen tonight?",
            options: [
              { text: "Tomás will email the group.", correct: true, why: "His last line is a promise, in <i>will</i>." },
              { text: "They will check the forecast again.", why: "Not mentioned." },
              { text: "They will visit site three.", why: "The trip is now on Friday." }
            ] }
        ] },


      { id: "2b", section: 2, sectionTitle: "Listen to a conversation", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Mei and Dan are designing a poster. Listen once, then answer.",
        speaker: "mei", speakerNote: "with Dan Okafor",
        audio: { track: "2-05", label: "One number or the range", lines: [
          { who: "mei", text: "The poster has room for one number or for the range. Not both." },
          { who: "dan", text: "Then put the range. Shrinking it to one number is deciding for the reader." },
          { who: "mei", text: "People will read the low end and stop." },
          { who: "dan", text: "Some will. But if we print two point four and it turns out to be four, we have taught them not to believe the next poster." },
          { who: "mei", text: "Could we print the range and mark the likeliest part of it?" },
          { who: "dan", text: "That is what the serious reports do. Yes." }
        ] },
        items: [
          { q: "What is the constraint they are working under?",
            options: [
              { text: "There is space on the poster for only one of the two.", correct: true,
                why: "Mei's first line sets it up, and <i>not both</i> is the whole reason there is a conversation." },
              { text: "The figures have not been published yet.", why: "Publication is never mentioned." },
              { text: "The poster is due tomorrow.", why: "No deadline is given." }
            ] },
          { q: "What is Dan's objection to printing a single number?",
            options: [
              { text: "It makes a choice on the reader's behalf that the reader cannot see.", correct: true,
                why: "<i>Deciding for the reader</i> — and his second turn gives the cost of getting that decision wrong." },
              { text: "A single number is always inaccurate.", why: "He does not say it is wrong, only that choosing it is a decision." },
              { text: "The range is easier to print.", why: "Ease of printing never comes up." }
            ] },
          { q: "What does Mei worry will happen?",
            options: [
              { text: "Readers will take the lowest figure and go no further.", correct: true,
                why: "<i>Read the low end and stop</i> — a worry about behaviour, not about accuracy." },
              { text: "Readers will not understand the range.", why: "She assumes they will understand it and use the convenient part of it." },
              { text: "The poster will look crowded.", why: "Appearance is not her objection." }
            ] },
          { q: "What do they settle on?",
            options: [
              { text: "Print the range and mark the most likely part of it.", correct: true,
                why: "Mei proposes it and Dan agrees, adding that this is standard practice." },
              { text: "Print a single number after all.", why: "That is the option Dan has just argued against." },
              { text: "Leave the decision to their supervisor.", why: "No supervisor appears in the conversation." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        concepts: ["speak"],
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "This unit's sounds are <b>j</b> /dʒ/ and <b>ch</b> /tʃ/. They differ only in voicing, and English keeps them apart.",
        speaker: "haddad",
        lines: [
          { text: "The change was major.", note: "<i>change</i> /tʃ/, <i>major</i> /dʒ/ — both in four words." },
          { text: "We chose a cheaper journey and charged it to the project.",
            note: "/tʃ/ in <i>chose, cheaper, charged</i>; /dʒ/ in <i>journey, project</i>." },
          { text: "If the project changes, the budget will change too.",
            note: "Dependent clause, and the same pair twice." },
          { text: "The researchers who challenged the projection published a much larger adjustment.",
            note: "Relative clause plus a complex noun phrase — the top of this task's range." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Practise your pronunciation", letter: "B",
        concepts: ["speak"],
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "Four more lines. The two sounds differ only in whether your voice is on, so run them together at speed.",
        speaker: "haddad",
        lines: [
          { text: "Which journal?", note: "/tʃ/ then /dʒ/ in two words. Say it slowly once, then at speed." },
          { text: "The chart adjusts the budget each June.", note: "/tʃ/ in <i>chart</i> and <i>each</i>, /dʒ/ in <i>adjusts</i>, <i>budget</i> and <i>June</i>." },
          { text: "Just check the chapter on the changes in the schedule.", note: "Five of the two sounds in one clause." },
          { text: "The project manager who challenged the adjustment published a much larger range in the journal.",
            note: "A relative clause and a long noun phrase, with both sounds throughout. The top of this task's range." }
        ] },

      { id: "4a", section: 4, sectionTitle: "Hear the difference", letter: "A",
        concepts: ["sound"],
        kind: "minimal-pairs", task: null, n: 0,
        focus: "<p>These two sounds are made in exactly the same place, with the tongue in exactly the same position. The only difference is whether the voice is switched on. Put a finger on your throat and say both: <b>/dʒ/</b> buzzes, <b>/tʃ/</b> does not.</p>" +
               "<i>/dʒ/ — joke · badge · ridge · edge</i><i>/tʃ/ — choke · batch · rich · etch</i>",
        items: [
          { say: "joke",
            options: [
              { text: "joke", correct: true, why: "/dʒ/ — voiced, so the buzz starts with the word." },
              { text: "choke", why: "/tʃ/ — voiceless. No buzz until the vowel." }
            ] },
          { say: "batch",
            options: [
              { text: "badge", why: "/dʒ/ — voiced at the end, and the vowel before it is noticeably longer." },
              { text: "batch", correct: true, why: "/tʃ/ — voiceless at the end, and the vowel is clipped short." }
            ] },
          { say: "ridge",
            options: [
              { text: "ridge", correct: true, why: "/dʒ/ — and this is a word you will meet in this subject, meaning a long raised line of ground." },
              { text: "rich", why: "/tʃ/ — voiceless, with a shorter vowel in front of it." }
            ] },
          { say: "etch",
            options: [
              { text: "edge", why: "/dʒ/ — voiced. The two words are both common in writing about landforms, which is why the contrast is worth the trouble." },
              { text: "etch", correct: true, why: "/tʃ/ — voiceless, and the vowel is cut short by it." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["listen"],
        kind: "dictation", task: null, n: 0,
        prompt: "Play each line and write exactly what you hear. Spelling counts; punctuation does not.",
        items: [
          { answer: "We would rather move the whole trip to Friday",
            why: "<i>would rather</i> is almost always contracted in speech to <i>we'd rather</i>; write it out in full." },
          { answer: "The forecast changed just after the budget was agreed",
            why: "/tʃ/ in <i>changed</i> against /dʒ/ in <i>just</i>, <i>budget</i> and <i>agreed</i>, inside eight words." },
          { answer: "Each journey to the station takes about an hour",
            why: "<i>Each journey</i> puts the two sounds side by side with nothing between them." },
          { answer: "The researchers challenged the projection in a major journal",
            why: "Four of this unit's two sounds, and <i>projection</i> is the word Lesson 1 separated from <i>prediction</i>." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … make a plan · state a preference · hear <i>ch</i> against <i>j</i>.</p>" } }
    ]
  };
})();
