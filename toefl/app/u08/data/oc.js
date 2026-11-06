/* Unit 8 · Disease and Public Health — ON CAMPUS
   Function: report a problem to a supervisor. */
(function () {

  /* Two exercises use this talk: the comprehension items, and the outline
     filled in while it plays. */
  var TALK1 = { track: "8-12", label: "One per cent of what", lines: [{ who: "haddad", text:
          "I want to show you why a single number can be entirely accurate and still mislead almost everyone who reads it. Consider a disease that kills one per cent of the people who catch it. That sounds small, and in a sense it is. But a case fatality rate tells you nothing on its own, because it is a proportion and the thing it is a proportion of can change enormously. One per cent of a thousand people is ten. One per cent of ten million is a hundred thousand. The number did not change; the population it applied to did, and that is where the public argument usually goes wrong. There is a second problem, and it is subtler. The denominator is not the number of people who were infected. It is the number who were tested and recorded. If testing is scarce, mild cases are invisible, the recorded denominator shrinks, and the fatality rate appears to rise. Early in any outbreak the measured rate is therefore almost always too high, and it falls as testing widens, which looks like the disease becoming milder and is nothing of the kind." }] };

  window.PAGE = {
    id: "u08-oc", unit: "u08", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Report a problem to a supervisor",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        concepts: ["listen", "sample", "place"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice about Friday's seminar. It plays once.",
        speaker: "dan", speakerNote: "course administrator",
        audio: { track: "8-11", label: "About the seminar", lines: [{ who: "dan", text:
          "About the seminar on Friday. Dr Mensah has been asked to speak at short notice, so the topic has changed from vaccination schedules to the history of sanitation. The reading has changed with it and is on the website now. If you have already prepared the old reading, bring it anyway." }] },
        items: [
          { q: "What has changed?",
            options: [
              { text: "The speaker, the topic and the reading.", correct: true,
                why: "All three are given: a new speaker at short notice, a new topic, and a new reading." },
              { text: "Only the reading.", why: "The reading changed <i>with</i> the topic." },
              { text: "The day of the seminar.", why: "It is still Friday." }
            ] },
          { q: "Where is the new reading?",
            options: [
              { text: "On the website.", correct: true, why: "“is on the website now”." },
              { text: "It will be emailed.", why: "No email is mentioned." },
              { text: "It has not been chosen.", why: "It is already posted." }
            ] },
          { q: "What should students who prepared the old reading do?",
            options: [
              { text: "Bring it anyway.", correct: true, why: "The final sentence says exactly this — and <i>anyway</i> implies it will still be useful." },
              { text: "Discard it.", why: "The opposite of what is asked." },
              { text: "Prepare both.", why: "Only bringing the old one is requested." }
            ] }
        ] },

            { id: "a2", section: 1, sectionTitle: "Listen to an announcement", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A second notice, read out in the teaching laboratory. It plays once.",
        speaker: "dan", speakerNote: "laboratory manager",
        audio: { track: "8-13", label: "The incubator", lines: [{ who: "dan", text:
          "A notice about the shared incubator. It has been running about two degrees above the set point since Tuesday, and three groups have used it in that time. If you cultured anything in it this week, do not discard it, but do not use it for the assessed work either; bring it to me and we will decide case by case. The display itself is reading correctly, which is why nobody noticed. We have put a separate thermometer inside and I would rather you checked that from now on than trusted the number on the front." }] },
        items: [
          { q: "What should you do with cultures grown this week?",
            options: [
              { text: "Keep them, but bring them to be assessed individually.", correct: true,
                why: "Both halves are instructions: do not discard, and do not use for assessment either." },
              { text: "Throw them away.", why: "<i>Do not discard</i> is the first thing he says about them." },
              { text: "Use them, with a note in the report.", why: "He rules them out of the assessed work." }
            ] },
          { q: "Why did nobody notice the fault?",
            options: [
              { text: "The display was showing the correct set point.", correct: true,
                why: "The reason comes with the fix attached: a separate thermometer has been put inside." },
              { text: "Nobody had used the incubator.", why: "Three groups had." },
              { text: "The fault only began this morning.", why: "It has been running warm since Tuesday." }
            ] },
          { q: "What does he ask people to do from now on?",
            options: [
              { text: "Check the separate thermometer rather than the display.", correct: true,
                why: "<i>I would rather you checked … than trusted</i> — a preference, expressed as an instruction." },
              { text: "Report the display reading each morning.", why: "No reporting is requested." },
              { text: "Stop using the incubator.", why: "He expects it to go on being used." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        concepts: ["listen", "inference", "measurement"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on why an accurate number can mislead. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: TALK1,
        transcript: "<p>A rate is a proportion, so it says nothing until you know what it is a proportion of. And the denominator is recorded cases, not infections — so scarce testing inflates the rate.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "A rate is accurate only as a proportion, and says nothing without its denominator.", correct: true,
                why: "Both halves of the talk — the size of the population, and what the denominator actually counts — serve that claim." },
              { text: "A one per cent fatality rate is low.", why: "She uses it to show that <i>low</i> is meaningless on its own." },
              { text: "Testing should be reduced.", why: "She argues scarce testing distorts the figure." }
            ] },
          { q: "One per cent of ten million is:",
            options: [
              { text: "a hundred thousand.", correct: true, why: "She gives both arithmetic examples deliberately — worth writing down." },
              { text: "ten thousand.", why: "That would be one per cent of a million." },
              { text: "ten.", why: "That is one per cent of a thousand, her first example." }
            ] },
          { q: "What is the denominator actually counting?",
            options: [
              { text: "People who were tested and recorded.", correct: true,
                why: "She states it as the subtler problem, and contrasts it with the number infected." },
              { text: "Everyone who was infected.", why: "That is what people assume, and what she corrects." },
              { text: "Everyone in the population.", why: "That would be a different measure altogether." }
            ] },
          { q: "Why does a fatality rate often fall as an outbreak goes on?",
            options: [
              { text: "Wider testing finds the mild cases that were previously invisible.", correct: true,
                why: "She says this looks like the disease becoming milder and is nothing of the kind — the inference item lives right there." },
              { text: "The disease becomes less dangerous.", why: "Explicitly ruled out in her final clause." },
              { text: "Treatment improves.", why: "Treatment is not mentioned." }
            ] }
        ] },

            { id: "b2", section: 2, sectionTitle: "Listen to an academic talk", letter: "B",
        concepts: ["listen", "inference", "claim"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "The same lecturer, on what actually ended the great infections.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "8-14", label: "Before the antibiotics", lines: [{ who: "haddad", text:
          "Here is a graph you have all seen, and a sentence about it that is not quite true. The graph shows deaths from tuberculosis in England falling, steeply and steadily, from the eighteen thirties onwards. The sentence is that antibiotics ended tuberculosis. Look at where the drug arrives on that graph. Nineteen forty seven. By then the death rate has already fallen by something like eighty per cent, and it has been falling for a hundred years. So what was doing the work? Housing, mostly. Nutrition. Clean water. Fewer people in each room. None of those is a treatment and none of them was aimed at tuberculosis in particular. Now, I want to be careful, because this argument gets misused. Antibiotics did an enormous amount. They finished the job, they transformed individual outcomes, and nobody who has watched a patient recover on them thinks otherwise. The claim is narrower and harder: the largest share of the decline had already happened, which means the conditions people live in did more than the medicine did. And that is uncomfortable, because the conditions are expensive and unglamorous and nobody receives a prize for them." }] },
        transcript: "<p>The decline was eighty per cent complete before the drug arrived. Housing, nutrition and water did most of it — which is uncomfortable, because none of them wins anybody a prize.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "Most of the decline had already happened before treatment existed.", correct: true,
                why: "She puts a figure on it — about eighty per cent — and a date, which is the whole argument." },
              { text: "Antibiotics made no difference.", why: "She says they did an enormous amount, in those words." },
              { text: "Tuberculosis has been eliminated.", why: "Elimination is never claimed." }
            ] },
          { q: "What does she name as the causes of the earlier decline?",
            options: [
              { text: "Housing, nutrition, clean water and less crowding.", correct: true,
                why: "Four things, and she adds that none of them was aimed at tuberculosis in particular." },
              { text: "Vaccination and improved diagnosis.", why: "Neither appears in her list." },
              { text: "A change in the organism.", why: "She does not suggest the bacterium altered." }
            ] },
          { q: "Why does she say the argument “gets misused”?",
            options: [
              { text: "Because it is taken as a claim that antibiotics did not matter.", correct: true,
                why: "She spends a third of the talk forestalling exactly that reading." },
              { text: "Because the graph is often drawn wrongly.", why: "She has no complaint about the graph." },
              { text: "Because the dates are disputed.", why: "She treats the chronology as settled." }
            ] },
          { q: "Why does she call the conclusion uncomfortable?",
            options: [
              { text: "The things that did the most work are expensive and win nobody any credit.", correct: true,
                why: "Her last sentence, and it is about incentives rather than about evidence." },
              { text: "Because it cannot be proved.", why: "She treats the evidence as good." },
              { text: "Because it criticises individual doctors.", why: "No individuals are mentioned anywhere." }
            ] }
        ] },

      { id: "b3", section: 2, sectionTitle: "Listen to an academic talk", letter: "C",
        concepts: ["listen", "measurement"],
        kind: "notes", task: null, n: 0,
        prompt: "Play the first talk again and complete the outline while it runs.",
        audio: TALK1,
        title: "Lecture — an accurate number that misleads",
        note: { kind: "reader",
                body: "<p>Four lines: the fraction, the half that is reliable, the half that is not, and the question to ask. That shape fits most talks about a statistic.</p>" },
        lines: [
          "A fatality rate is deaths divided by ___ cases",
          "- The ___ is counted reliably: deaths are hard to miss",
          "- The ___ is not: it depends on who was tested",
          "- Question to ask of any percentage: out of how ___ ?"
        ],
        gaps: [
          { answer: "recorded", why: "not infections, which is the whole gap the talk is about." },
          { answer: "numerator", why: "the top, and the only half she is willing to trust." },
          { answer: "denominator", why: "the bottom, and the one that moves with testing policy." },
          { answer: "many", why: "the four-word habit the unit is trying to install." }
        ] },

      { id: "c", section: 3, sectionTitle: "Report a problem", letter: "A",
        concepts: ["read", "measurement"],
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. A problem reported badly becomes two problems.",
        note: { kind: "speak",
                body: "<i>It's been doing this since…</i><i>It didn't use to…</i><i>I haven't told anyone else yet.</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT TO REPORT A PROBLEM",
          blocks: [
            { h: "Do this", lines: [
              "Say what, how much, and since when — in that order.",
              "Say what is now in doubt because of it.",
              "Say what you have and have not already done."
            ] },
            { h: "Say this", lines: [
              "The incubator's been running about two degrees warm, since Tuesday.",
              "That means anything cultured in it this week is unreliable.",
              "I haven't told the other groups yet — I wanted to check the display first."
            ] }
          ] },
        after: "<p>The second line is the one people leave out. A supervisor needs the consequence more than the symptom, because the consequence is what they have to act on.</p>" },

      { id: "c2", section: 3, sectionTitle: "Report a problem", letter: "B",
        concepts: ["measurement"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table from the chart in 3A. The right-hand column says why each line is there.",
        caption: "Four lines, and why each one earns its place",
        head: ["Line", "What you say", "Why it is needed"],
        rows: [
          ["What and since when", "It's been running two degrees warm since ___", "a fault with no start date cannot be scoped"],
          ["What is in ___",      "Anything cultured in it this week is unreliable", "the supervisor acts on the consequence, not the symptom"],
          ["What you have done",  "I've checked the display against a separate ___", "it tells them which checks they can skip"],
          ["What you have not done", "I haven't told the other ___ yet", "it tells them what is still ___ , which is the urgent part"]
        ],
        gaps: [
          { answer: "Tuesday", why: "the date is what decides how much work is affected." },
          { answer: "doubt", why: "the line people leave out, and the only one the reader must act on." },
          { answer: "thermometer", why: "saying what you already checked stops the first reply being a question you have answered." },
          { answer: "groups", why: "the people who do not yet know are the live part of the problem." },
          { answer: "spreading", why: "an unreported fault keeps producing bad work while the email is being read." }
        ] },

      { id: "c3", section: 3, sectionTitle: "Report a problem", letter: "C",
        concepts: ["read"],
        kind: "read-only", task: null, n: 0,
        prompt: "One sentence to leave with.",
        text: { blocks: [{ lines: [
          "A fault reported without its consequence is a symptom. The supervisor cannot act on a symptom, so they will ask, and you will have lost a day."
        ],
        closer: { kind: "life",
          body: "<p>Next time something is wrong, write the three lines before you speak: what and since when, what is now in doubt, what you have already done.</p>" } }] } }
    ]
  };
})();
