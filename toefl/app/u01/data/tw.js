/* Unit 1 · How We Learn — TEAMWORK & LANGUAGE REVIEW
   The book's closing block, with its PROBLEM SOLVING step carrying the email. */
(function () {
  window.PAGE = {
    id: "u01-tw", unit: "u01", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and write to someone who can help",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "Read the situation, then write the email. Audience and purpose are given, as they are on the test.",
        scenarioTitle: "The situation",
        scenario: "<p>You meant to join the Thursday study-skills workshop and missed the sign-up deadline by a day. Dan Okafor runs the waiting list.</p><p><b>Write to Dan.</b> Say what happened, ask whether a place is left, and ask what you should do next.</p>",
        to: "d.okafor@university.edu", re: "Study-skills workshop — missed the deadline",
        placeholder: "Dear Dan,…",
        minWords: 60,
        note: { kind: "help",
                body: "<i>I am writing to ask whether…</i><i>Unfortunately I…</i><i>Would it be possible to…?</i><i>Please let me know what I should do.</i>" },
        checklist: [
          "I said why I was writing in the first sentence.",
          "I explained what happened, briefly.",
          "I made a specific request.",
          "I signed off in a way that matches the reader."
        ],
        model: "<p>Dear Dan,</p><p>I am writing to ask whether there is still a place in the Thursday study-skills workshop. Unfortunately I missed the sign-up deadline by a day, as I was away on Friday.</p><p>Would it be possible to add me to the waiting list? Please let me know what I should do next, and whether the Tuesday group would be a better option.</p><p>Many thanks,<br>Mei Lin</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a time you learned something together with other people. What made it work?",
        model: "<p>Last term I joined a statistics study group. What made it work was that we each had to explain one method to the others. The first time it was my turn I could not finish a sentence about a formula I had read four times, and that was the moment I realised I did not know it. After that I prepared differently — I would close the book and try to say the method aloud before the meeting.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question. This one asks for an opinion and a reason.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Some students prefer to study alone. Why do you think that is?",
        model: "<p>I think there are two reasons. The first is practical: studying alone is easier to arrange, and you can stop when you like. The second is less comfortable — working alone lets you avoid finding out what you do not know. If you never explain an idea to anyone, nobody can tell you that your explanation does not make sense. So I understand the preference, but I think part of it is avoidance.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the whole unit — which is itself one of the methods it taught.",
        items: [
          { q: "She answered every question ____.", from: "Lesson 3",
            options: [
              { text: "correctly", correct: true, why: "It describes the verb <i>answered</i>, so the adverb." },
              { text: "correct", why: "The adjective would need a noun to describe." },
              { text: "more correct", why: "A comparative with nothing to compare to." }
            ] },
          { q: "____ the first group was re-reading, the second was testing itself.", from: "Lesson 3",
            options: [
              { text: "While", correct: true, why: "Two actions in progress at once take <i>while</i> with the past continuous." },
              { text: "Although", why: "Concessive — there is no contrast of expectation here." },
              { text: "Because", why: "Neither action causes the other." }
            ] },
          { q: "A person who ____ a result they do not like is not doing science.", from: "Lesson 5 · the prefix dis-",
            options: [
              { text: "disregards", correct: true, why: "<i>dis- + regard</i> = ignore deliberately." },
              { text: "disagrees", why: "You disagree <i>with</i> something; it does not take a direct object this way." },
              { text: "disproves", why: "Disproving a result is science, not the avoidance of it." }
            ] },
          { q: "You hear: “I'd have signed up earlier if I'd known.” The speaker:", from: "Lesson 4",
            options: [
              { text: "did not sign up early.", correct: true, why: "The counterfactual says the opposite of what happened." },
              { text: "signed up early.", why: "<i>I'd have</i> marks something that did not happen." },
              { text: "has not decided whether to sign up.", why: "The decision is in the past." }
            ] },
          { q: "In the article, the writer calls the feeling of easy material:", from: "Lesson 5",
            options: [
              { text: "fluency", correct: true, why: "Defined in the footnote: the sense that material is easy, which is not knowing it." },
              { text: "retrieval", why: "Retrieval is the method, not the feeling." },
              { text: "consolidation", why: "Not a term the passage uses." }
            ] },
          { q: "Which sentence would score highest on Write for an Academic Discussion?", from: "Lesson 2",
            options: [
              { text: "Tomás is right that groups carry passengers, but the fix is to make everyone explain something.", correct: true,
                why: "Names a classmate, concedes, and still adds something — the 5-band move." },
              { text: "I agree with the professor's question about study groups.", why: "Restates the question and names no one. That is a 3." },
              { text: "Study groups are good because they are helpful.", why: "Circular, and engages nobody." }
            ] }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Say aloud what the testing effect is, and what the catch is. If you cannot do it in two sentences, go back to On Campus.</p>" } }
    ]
  };
})();
