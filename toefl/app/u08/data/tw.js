/* Unit 8 · Disease and Public Health — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u08-tw", unit: "u08", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and report a fault in writing",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "Read the situation, then write the email. Outline the four jobs before you start.",
        scenarioTitle: "The situation",
        scenario: "<p>The shared incubator has been running about two degrees too warm since Tuesday. Three groups have used it. It never used to drift. You have checked the display against a separate thermometer, and you have not yet told the other groups.</p><p><b>Write to your supervisor.</b> Report the fault, say what is now in doubt, say what you have done, and ask what should happen to this week's cultures.</p>",
        to: "r.okonkwo@university.edu", re: "Incubator running warm since Tuesday — this week's cultures",
        placeholder: "Dear Dr Okonkwo,…",
        minWords: 70,
        note: { kind: "help",
                body: "<i>I am writing to report that…</i><i>It didn't use to…</i><i>This means that…</i><i>I have already… but I have not yet…</i>" },
        checklist: [
          "I said what, how much, and since when.",
          "I said what is now in doubt.",
          "I said what I have and have not already done.",
          "I asked one specific question."
        ],
        model: "<p>Dear Dr Okonkwo,</p><p>I am writing to report that the shared incubator has been running about two degrees above its set point since Tuesday. It did not use to drift at all, which is what makes me think this is a new fault rather than a calibration we have always had.</p><p>This means that anything cultured in it this week should be treated as unreliable. Three groups have used it, as far as I can establish.</p><p>I have checked the reading against a separate thermometer and put a notice on the door, but I have not yet contacted the other groups.</p><p>Should I ask them to discard this week's plates, or would you prefer to see them first?</p><p>Kind regards,<br>Mei Lin</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe something that used to be true where you live but is not any more. Why did it change?",
        model: "<p>People in my city used to drink bottled water almost exclusively, because the tap water had a reputation for being unsafe. That has changed in about ten years. The water itself was improved, but I think the bigger factor was that the utility started publishing its test results monthly, so the reputation had something to argue with. It is a small example of the point this unit keeps making: the change that mattered was not medical, it was infrastructure and information.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to explain a common error.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Why can a published percentage be accurate and still mislead people? Give an example.",
        model: "<p>Because a percentage is a proportion, and it tells you nothing until you know what it is a proportion of. One per cent of a thousand is ten; one per cent of ten million is a hundred thousand. The figure has not changed but the consequence has, by a factor of ten thousand. The second problem is what the bottom of the fraction counts. A fatality rate divides deaths by recorded cases, not by infections, so when testing is scarce the mild cases are invisible and the rate looks worse than it is.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the unit.",
        items: [
          { q: "Did people ____ boil their drinking water?", from: "Lesson 3",
            options: [
              { text: "use to", correct: true, why: "After <i>did</i> the form is <i>use to</i> — <i>did</i> already carries the past." },
              { text: "used to", why: "Double past marking." },
              { text: "using to", why: "Not a possible form." }
            ] },
          { q: "Researchers ____ the decline for over a century.", from: "Lesson 3",
            options: [
              { text: "have been studying", correct: true, why: "Present perfect continuous: began in the past, still going on." },
              { text: "used to study", why: "Closes a period the sentence treats as open." },
              { text: "are studying since", why: "<i>Since</i> needs a perfect form." }
            ] },
          { q: "<i>I'm used to working nights</i> means:", from: "Lesson 3",
            options: [
              { text: "I am accustomed to it.", correct: true, why: "<i>be used to</i> + <i>-ing</i> — a different construction from <i>used to do</i>." },
              { text: "I formerly worked nights.", why: "That would be <i>I used to work nights</i>." },
              { text: "I will work nights.", why: "No future is expressed." }
            ] },
          { q: "The article says the chronology does not <i>entirely</i> support the attribution. <i>Entirely</i> signals that:", from: "Lesson 5",
            options: [
              { text: "medicine mattered, but was not the main cause.", correct: true,
                why: "The hedge concedes a real role while denying the leading one." },
              { text: "medicine played no part.", why: "<i>Entirely</i> would then be pointless." },
              { text: "the data are unreliable.", why: "The data are not questioned." }
            ] },
          { q: "A fatality rate divides deaths by:", from: "On Campus",
            options: [
              { text: "recorded cases, not infections.", correct: true, why: "Her subtler problem, and the reason early rates run high." },
              { text: "everyone infected.", why: "That is the assumption she corrects." },
              { text: "the whole population.", why: "That is a different measure." }
            ] },
          { q: "Cancer's share of deaths rising from 4% to 27% could happen because:", from: "Lesson 5",
            options: [
              { text: "fewer people now die young of infections.", correct: true,
                why: "A share can rise with no change in risk at all, if the competing causes shrink. That is why the text beside a chart matters." },
              { text: "cancer has become much more dangerous.", why: "Possible, but the chart cannot show it — which is the point." },
              { text: "the population has shrunk.", why: "Population size does not change a share directly." }
            ] }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Explain in two sentences why an early outbreak's fatality rate is almost always too high.</p>" } }
    ]
  };
})();
