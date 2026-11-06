/* Unit 7 · Markets and Choices — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: linking words. */
(function () {
  window.PAGE = {
    id: "u07-l4", unit: "u07", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Ask a procedural question, and get a usable answer",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        carry: "2a",
        concepts: ["listen", "time", "money"],
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>What happens if I…?</i><i>Is there a deadline for that?</i><i>Who do I need to speak to?</i>" },
        items: [
          { who: "dan", say: "The office closes between one and two.",
            options: [
              { text: "Then I'll come back at two.", correct: true, why: "Takes the information and acts on it." },
              { text: "It closed at one.", why: "Reports the past instead of planning around it." },
              { text: "Will it close?", why: "Asks what has just been stated." }
            ] },
          { who: "mei", say: "What happens if I miss the deadline?",
            options: [
              { text: "You'll be charged a late fee.", correct: true, why: "A real conditional question takes a <i>will</i> answer." },
              { text: "You would have been charged.", why: "Unreal form for a real question about the future." },
              { text: "I missed it too.", why: "Answers about the speaker rather than the question." }
            ] },
          { who: "priya", say: "Do I need to bring anything?",
            options: [
              { text: "Photo ID and your student number.", correct: true, why: "A direct answer, with the two specific items." },
              { text: "Yes, you need.", why: "Incomplete — <i>need</i> requires an object here." },
              { text: "I brought mine.", why: "Does not tell the asker what to bring." }
            ] },
          { who: "tomas", say: "Can I pay in instalments?",
            options: [
              { text: "Yes, if you arrange it before the first one is due.", correct: true,
                why: "Answers and attaches the condition — which is what a procedural answer must do." },
              { text: "Yes, you paid.", why: "Wrong tense, and it asserts something false." },
              { text: "I would rather not.", why: "Answers a preference nobody asked about." }
            ] },
          { who: "dan", say: "I'm not sure that's the right form.",
            options: [
              { text: "Which one should I be using?", correct: true, why: "Converts the doubt into the next useful question." },
              { text: "It's definitely right.", why: "Closes the exchange before finding out." },
              { text: "I'm not sure either.", why: "Agrees without advancing anything." }
            ] },
          { who: "mei", say: "If I'd known about the fee, I'd have paid earlier.",
            options: [
              { text: "You can appeal it — the form's online.", correct: true,
                why: "The speaker did <b>not</b> know and did <b>not</b> pay early. Only this reply addresses what actually happened." },
              { text: "Good thing you knew.", why: "The counterfactual says they did not." },
              { text: "So you paid on time.", why: "The opposite of what the sentence implies." }
            ] }
        ] },

            { id: "1b", section: 1, sectionTitle: "Choose a response", letter: "B",
        concepts: ["listen"],
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "Six more. Three of them answer with a condition rather than a yes or a no.",
        items: [
          { who: "mei", say: "Is there a late fee if I pay on the fourth?",
            options: [
              { text: "Only if the plan was not set up before the first.", correct: true,
                why: "A conditional answer, which is both honest and more useful than a flat yes." },
              { text: "Yes, there will be a fee.", why: "Confident, and wrong in half the cases the question covers." },
              { text: "I paid on the fourth.", why: "Answers about the speaker rather than about the rule." }
            ] },
          { who: "dan", say: "What happens if the charge is set too low?",
            options: [
              { text: "Traffic stays where it is and the scheme gets blamed.", correct: true,
                why: "Answers the conditional and adds the consequence, which is the interesting half." },
              { text: "It will be set at five pounds.", why: "Answers a question about the level, not about the case where it is wrong." },
              { text: "If it was too low, it would be raised.", why: "Shifts into an unreal conditional, when the question is about a real possibility." }
            ] },
          { who: "priya", say: "When does the office close for lunch?",
            options: [
              { text: "One till two, every day.", correct: true,
                why: "A span, which is what <i>close for lunch</i> is really asking about." },
              { text: "At four o'clock.", why: "That is the end of the day, not the lunch break." },
              { text: "Yes, it closes.", why: "A <i>when</i> question takes a time." }
            ] },
          { who: "tomas", say: "Do I need the confirmation email, or just my student number?",
            options: [
              { text: "The number will do unless they dispute it.", correct: true,
                why: "Answers the either/or and attaches the condition under which the other half becomes necessary." },
              { text: "Yes.", why: "An either/or question cannot be answered yes." },
              { text: "Bring everything you have.", why: "Safe, and it declines to answer the question that was asked." }
            ] },
          { who: "haddad", say: "The number went up and the service did not.",
            options: [
              { text: "Then the measure has become the target.", correct: true,
                why: "Names the mechanism rather than repeating the observation, which is what this unit has been building to." },
              { text: "So the service improved.", why: "The sentence says explicitly that it did not." },
              { text: "The number must be wrong.", why: "The number may be perfectly correct, which is what makes the problem hard." }
            ] },
          { who: "dan", say: "If I'd arranged the plan in February, I wouldn't have been charged.",
            options: [
              { text: "Ask them to waive it — the March confirmation should still count.", correct: true,
                why: "He did <b>not</b> arrange it in February and he was charged. Only this reply works from that." },
              { text: "Good, so you avoided the fee.", why: "He did not; the counterfactual says so." },
              { text: "So you arranged it in February.", why: "The whole point of the sentence is that he did not." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        concepts: ["listen", "inference"],
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "A student at the bursar's office. Listen once.",
        speaker: "priya", speakerNote: "with Dan Okafor",
        audio: { track: "7-05", label: "At the bursar's office", lines: [
          { who: "priya", text: "I wanted to ask about paying in instalments. Is it too late to set one up?" },
          { who: "dan", text: "Not if the first instalment hasn't fallen due. When is yours?" },
          { who: "priya", text: "The fifteenth." },
          { who: "dan", text: "Then you've got nine days. You'll need to fill in the plan form and bring photo ID — and it has to be done in person, not online." },
          { who: "priya", text: "What happens if I can't get here before the fifteenth?" },
          { who: "dan", text: "You'd be charged the late fee, and then you can appeal it. But it's a lot easier to come in." }
        ] },
        items: [
          { q: "What does Priya want?",
            options: [
              { text: "To set up a payment plan.", correct: true, why: "Her first line asks exactly this." },
              { text: "To appeal a late fee.", why: "That is the fallback Dan mentions, not her request." },
              { text: "To change her student number.", why: "Never raised." }
            ] },
          { q: "What condition does Dan attach?",
            options: [
              { text: "The first instalment must not yet have fallen due.", correct: true,
                why: "“Not if the first instalment hasn't fallen due” — the whole answer turns on it." },
              { text: "She must apply online.", why: "He says the opposite: in person, not online." },
              { text: "She must pay the late fee first.", why: "The late fee only arises if she misses the window." }
            ] },
          { q: "Why does Dan ask when her instalment is due?",
            options: [
              { text: "To work out whether she still has time.", correct: true,
                why: "He has just made the condition depend on that date, so the question establishes whether she meets it." },
              { text: "To check which course she is on.", why: "Courses are not discussed." },
              { text: "To decide whether to charge her.", why: "He is not the one charging; he is explaining a rule." }
            ] },
          { q: "What does Dan recommend?",
            options: [
              { text: "Coming in before the fifteenth rather than appealing later.", correct: true,
                why: "“it's a lot easier to come in” — the recommendation is in his final clause." },
              { text: "Appealing the fee straight away.", why: "He presents that as the harder route." },
              { text: "Paying the whole amount now.", why: "Never suggested." }
            ] }
        ] },

            { id: "2b", section: 2, sectionTitle: "Listen to a conversation", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "A student and an office clerk working out which rule applies. Listen once.",
        speaker: "dan", speakerNote: "with Mei Lin",
        audio: { track: "7-05", label: "Which rule applies", lines: [
          { who: "mei", text: "I have been charged a late fee, but I set up a payment plan in March." },
          { who: "dan", text: "A plan exempts you only if it was arranged before the first instalment fell due." },
          { who: "mei", text: "It was. The twenty second of March; the instalment was due on the first of April." },
          { who: "dan", text: "Then the exemption should have applied. Let me look. Ah — the plan is recorded against a different student number." },
          { who: "mei", text: "So the rule was applied correctly to the wrong record." },
          { who: "dan", text: "Which is why the system did not flag it. Send me the confirmation email and I will have it reversed." }
        ] },
        items: [
          { q: "Under what condition does a payment plan exempt you?",
            options: [
              { text: "It must have been arranged before the first instalment fell due.", correct: true,
                why: "Dan states the rule as a conditional, and <i>only if</i> makes the condition necessary." },
              { text: "It must be arranged in March.", why: "March is when hers happened, not what the rule requires." },
              { text: "It must be confirmed by email.", why: "The email is evidence, and it appears only at the end." }
            ] },
          { q: "What has actually gone wrong?",
            options: [
              { text: "The plan was filed against the wrong student number.", correct: true,
                why: "Dan finds it mid-sentence, which is how this sort of thing is usually discovered." },
              { text: "The plan was arranged too late.", why: "The dates she gives satisfy the rule." },
              { text: "The instalment was paid late.", why: "Lateness is not in question; the exemption is." }
            ] },
          { q: "What does Mei mean by “the rule was applied correctly to the wrong record”?",
            options: [
              { text: "The system did exactly what it should, to a record that was not hers.", correct: true,
                why: "A precise description of the failure, and a kind that no amount of correct rule-following would catch." },
              { text: "The rule itself is wrong.", why: "She is explicit that the application was correct." },
              { text: "The clerk made a mistake today.", why: "The error was made when the plan was filed, not in this conversation." }
            ] },
          { q: "What does Dan ask her to do?",
            options: [
              { text: "Send him the confirmation email.", correct: true,
                why: "And he states what he will do with it, which is what makes the request worth acting on." },
              { text: "Set up the plan again.", why: "The plan exists; it is attached to the wrong number." },
              { text: "Pay the fee and claim it back.", why: "He offers to have it reversed directly." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        concepts: ["speak"],
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "Words <b>link</b> across boundaries. A consonant runs onto a following vowel, and two vowels are joined by a glide. This is why fast speech sounds like one long word.",
        speaker: "haddad",
        lines: [
          { text: "Pick it up at eight.", note: "<i>pi-ki-tu-pa-teight</i> — four links in five words." },
          { text: "If it is set too low, it will not work.",
            note: "<i>i-fi-ti-zset</i> — the <i>f</i>, <i>t</i> and <i>s</i> all run onto the next vowel." },
          { text: "We will not know until a full year has passed.",
            note: "<i>un-ti-la-full</i>, <i>yea-ras-passed</i>." },
          { text: "The institutional incentives always outlast the individuals who argued about them.",
            note: "A long noun phrase, with linking throughout — the top of this task's range." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Practise your pronunciation", letter: "B",
        concepts: ["speak"],
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "Four more. Listen for where one word ends and the next begins — and notice that you often cannot tell.",
        speaker: "haddad",
        lines: [
          { text: "It is an incentive.", note: "<i>i-ti-za-nincentive</i> — four words arriving as one." },
          { text: "If it is set above eight, it works.",
            note: "<i>i-fi-ti-zse-ta-bove-ate</i>. Eight words and not a single gap." },
          { text: "Ask her about it as soon as the office opens.",
            note: "<i>a-sker-a-bou-ti-ta-ssoo-nas</i> — the <i>h</i> of <i>her</i> disappears entirely, which is normal." },
          { text: "An institutional incentive always outlasts the individual who argued about it.",
            note: "Vowel meeting vowel four times, each joined by a glide you do not write. The top of this task's range." }
        ] },

      { id: "4a", section: 4, sectionTitle: "Hear the difference", letter: "A",
        concepts: ["sound"],
        kind: "minimal-pairs", task: null, n: 0,
        focus: "<p>Nothing here is a different sound. The pairs are identical streams of sound divided in two different places, which is what linking does to a sentence. <i>An aim</i> and <i>a name</i> contain exactly the same consonants and vowels in exactly the same order; only the grammar tells you which you heard.</p>" +
               "<i>an aim → a name</i><i>it is → it his</i><i>ice cream → I scream</i>",
        items: [
          { say: "an aim",
            options: [
              { text: "an aim", correct: true, why: "the <i>n</i> belongs to the article. Only what follows in the sentence can tell you." },
              { text: "a name", why: "the same sounds, with the <i>n</i> assigned to the noun instead." }
            ] },
          { say: "ice cream",
            options: [
              { text: "I scream", why: "identical stream of sound; the <i>s</i> has changed sides." },
              { text: "ice cream", correct: true, why: "and in careful speech the only clue is a slightly longer <i>s</i> and the stress." }
            ] },
          { say: "a notion",
            options: [
              { text: "a notion", correct: true, why: "the <i>n</i> starts the noun here." },
              { text: "an ocean", why: "the <i>n</i> starts the article. English speakers disambiguate these from context alone, every day, without noticing." }
            ] },
          { say: "grade A",
            options: [
              { text: "grey day", why: "the <i>d</i> has moved to the front of the second word." },
              { text: "grade A", correct: true, why: "and in an exam hall the context settles it instantly, which is the general rule for all of these." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["listen"],
        kind: "dictation", task: null, n: 0,
        prompt: "Play each line and write exactly what you hear. The word boundaries are not where they sound.",
        items: [
          { answer: "If the charge is set too low nothing will change",
            why: "<i>If the charge is</i> arrives as one block, and <i>is</i> is the easiest word in it to lose." },
          { answer: "An incentive is a reason to act that the rules create",
            why: "<i>An incentive is a</i> is four words and no gaps; where the <i>n</i> belongs is pure guesswork without the grammar." },
          { answer: "We will not know until a full year has passed",
            why: "<i>until a full year has</i> runs together completely, and <i>has</i> is unstressed." },
          { answer: "Ask her about it as soon as the office opens",
            why: "the <i>h</i> of <i>her</i> vanishes in connected speech, which is normal and not careless." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … ask a procedural question · attach a condition to an answer · hear words link together.</p>" } }
    ]
  };
})();
