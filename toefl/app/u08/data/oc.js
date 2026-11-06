/* Unit 8 · Disease and Public Health — ON CAMPUS
   Function: report a problem to a supervisor. */
(function () {
  window.PAGE = {
    id: "u08-oc", unit: "u08", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Report a problem to a supervisor",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
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

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on why an accurate number can mislead. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "8-12", label: "One per cent of what", lines: [{ who: "haddad", text:
          "I want to show you why a single number can be entirely accurate and still mislead almost everyone who reads it. Consider a disease that kills one per cent of the people who catch it. That sounds small, and in a sense it is. But a case fatality rate tells you nothing on its own, because it is a proportion and the thing it is a proportion of can change enormously. One per cent of a thousand people is ten. One per cent of ten million is a hundred thousand. The number did not change; the population it applied to did, and that is where the public argument usually goes wrong. There is a second problem, and it is subtler. The denominator is not the number of people who were infected. It is the number who were tested and recorded. If testing is scarce, mild cases are invisible, the recorded denominator shrinks, and the fatality rate appears to rise. Early in any outbreak the measured rate is therefore almost always too high, and it falls as testing widens, which looks like the disease becoming milder and is nothing of the kind." }] },
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

      { id: "c", section: 3, sectionTitle: "Report a problem", letter: "A",
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
        after: "<p>The second line is the one people leave out. A supervisor needs the consequence more than the symptom, because the consequence is what they have to act on.</p>",
        closer: { kind: "life",
          body: "<p>Next time something is wrong, write the three lines before you speak: what and since when, what is now in doubt, what you have already done.</p>" } }
    ]
  };
})();
