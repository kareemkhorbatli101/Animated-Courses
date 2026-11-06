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

            { id: "a2", section: 1, sectionTitle: "Problem solving", letter: "B",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "A second situation. This one asks you to correct a figure that has already been circulated.",
        scenarioTitle: "The situation",
        scenario: "<p>The departmental newsletter reports that the fatality rate in the district you are studying “rose from nine per cent to fifteen”. Deaths rose from forty-five to fifty; tests fell from five hundred to three hundred and thirty. The arithmetic is right and the sentence is not. The newsletter goes out again on Friday.</p><p><b>Write to the editor.</b> Say what the figure conceals, give both numbers, and propose a specific wording.</p>",
        to: "newsletter@university.edu", re: "Fatality rate figure — denominator fell by a third",
        placeholder: "Dear Editor,…",
        minWords: 70,
        note: { kind: "help",
                body: "<p>Do not begin by saying the figure is wrong, because it is not. Begin with what moved, and the reader will arrive at the problem themselves and with no need to defend anything.</p><i>The figure is correct, but…</i><i>Over the same fortnight…</i><i>Would it be possible to print…?</i>" },
        checklist: [
          "I said the figure is accurate before saying what is wrong with it.",
          "I gave both the deaths and the tests, for both weeks.",
          "I used <i>numerator</i> or <i>denominator</i> accurately.",
          "I proposed an exact wording rather than asking for a correction.",
          "I named the Friday deadline."
        ],
        model: "<p>Dear Editor,</p>" +
               "<p>The fatality figure in this week's issue is correctly calculated, and I think the sentence around it will be read in a way nobody intends.</p>" +
               "<p>Over the fortnight the deaths went from forty-five to fifty. The tests went from five hundred to three hundred and thirty. So the numerator moved by five and the denominator fell by a third, and almost the whole of the rise from nine per cent to fifteen comes from the second of those.</p>" +
               "<p>Would it be possible to print <i>fifty deaths among three hundred and thirty people tested, against forty-five among five hundred a fortnight ago</i>? It carries the same information and cannot be quoted without its denominator. I realise Friday is close, which is why I have sent the numbers rather than asking you to look them up.</p>" +
               "<p>Kind regards,<br>Mei Lin</p>" },

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

            { id: "c2", section: 2, sectionTitle: "Take an interview", letter: "C",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A third question, about reporting something inconvenient.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a time you had to tell someone about a problem you had not caused. How did you go about it?",
        model: "<p>I found that a shared incubator had been running two degrees warm for most of a week, which put three groups' cultures in doubt including two that were not mine. The thing I got right was the order: I said what was wrong and since when, then what it meant for the week's work, then what I had already checked. The thing I got wrong was waiting until I was certain. I spent an afternoon confirming it against a second thermometer, and during that afternoon another group started a culture in it.</p>" },

      { id: "c3", section: 2, sectionTitle: "Take an interview", letter: "D",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A fourth question, asking you to weigh openness against clarity.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Should health agencies publish figures they know will be misunderstood? Why, or why not?",
        model: "<p>Yes, and they should change the format rather than the decision. The argument for withholding is that a number without its context gets quoted badly, which is true. The argument against is that silence does not leave a gap; somebody else's number fills it, with no context at all. What actually helps is putting the context inside the sentence instead of beneath it — fifty deaths among three hundred tested, rather than fifteen per cent with a footnote. The footnote never travels. The denominator, written into the sentence, does.</p>" },

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
            ] },
          { q: "Which word does NOT carry this unit's prefix?", from: "Lesson 1",
            options: [
              { text: "refute", correct: true, why: "It arrives whole from Latin; nothing is being done a second time." },
              { text: "reinfect", why: "<i>re + infect</i>: infected, then infected again." },
              { text: "replicate", why: "<i>re + plicate</i>, to fold again — and a study replicated is a study done again." }
            ] },
          { q: "New staff get used to ____ nights within a month.", from: "Lesson 3",
            options: [
              { text: "working", correct: true, why: "The <i>to</i> in <i>get used to</i> is a preposition, so the verb takes <i>-ing</i>." },
              { text: "work", why: "That is the pattern for <i>used to do</i>, which means something else entirely." },
              { text: "worked", why: "No past form fits after a preposition." }
            ] },
          { q: "<i>A use</i> and <i>to use</i> differ in:", from: "Lesson 4",
            options: [
              { text: "the final consonant: /s/ for the noun, /z/ for the verb.", correct: true,
                why: "Same four letters, two words. The same split runs through <i>close</i>, <i>excuse</i> and <i>house</i>." },
              { text: "the vowel.", why: "The vowel is identical." },
              { text: "nothing — they sound the same.", why: "They do not, and the difference is the one this lesson is about." }
            ] },
          { q: "A fatality rate rises while deaths barely move. The likeliest explanation is:", from: "Lesson 5",
            options: [
              { text: "fewer people are being tested.", correct: true,
                why: "The denominator has shrunk, which raises the quotient without anything happening to the disease." },
              { text: "the disease has become more severe.", why: "That would show in the deaths, which barely moved." },
              { text: "the arithmetic is wrong.", why: "Both figures can be entirely correct, which is what makes this hard." }
            ] },
          { q: "Professor Haddad says that by the time antibiotics arrived, the tuberculosis death rate had:", from: "On Campus",
            options: [
              { text: "already fallen by around eighty per cent.", correct: true,
                why: "Her figure, and the whole weight of the argument rests on it." },
              { text: "begun to rise again.", why: "The graph falls steadily throughout." },
              { text: "remained unchanged for a century.", why: "It had been falling for a hundred years." }
            ] },
          { q: "Mortality has been falling ____ over a century.", from: "Lesson 2",
            options: [
              { text: "for", correct: true, why: "A length of time takes <i>for</i>." },
              { text: "since", why: "<i>Since</i> needs a point: <i>since 1850</i>." },
              { text: "during", why: "<i>During</i> needs a named period, not a measured length." }
            ] }
        ] },

      { id: "e", section: 3, sectionTitle: "Language review", letter: "B",
        kind: "sort", task: null, n: 0,
        prompt: "Eight statements about the same outbreak. Sort them by whether they are about the disease or about the counting.",
        note: { kind: "reader",
                body: "<p>Every card here is true. The habit this unit is after is noticing which kind of true each one is, because a sentence about the counting read as a sentence about the disease is the commonest error in public reporting.</p>" },
        bins: [
          { id: "disease",  label: "About the disease", hint: "would be true with better records" },
          { id: "counting", label: "About the counting", hint: "would change with better records" }
        ],
        items: [
          { text: "Fifty people died in the district this fortnight", bin: "disease",
            why: "deaths are the half of the fraction that is counted reliably." },
          { text: "The strain spreads more readily in crowded housing", bin: "disease",
            why: "a claim about transmission, not about who was recorded." },
          { text: "Immunity after infection lasts about nine months", bin: "disease",
            why: "a property of the immune response." },
          { text: "Treatment halves the chance of death once admitted", bin: "disease",
            why: "a claim about outcomes, measurable against a comparison group." },
          { text: "The fatality rate rose from nine per cent to fifteen", bin: "counting",
            why: "a quotient, and its bottom half moved while its top half barely did." },
          { text: "Only patients admitted to hospital were tested", bin: "counting",
            why: "a statement about who entered the denominator." },
          { text: "A backlog of tests was cleared on one day", bin: "counting",
            why: "the recorded cases jump on a date that means nothing about the disease." },
          { text: "Cases in this district are rising faster than in the next one", bin: "counting",
            why: "the hardest card: it sounds like a claim about the disease, and it compares two numbers produced by two testing policies." }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Explain in two sentences why an early outbreak's fatality rate is almost always too high.</p>" } }
    ]
  };
})();
