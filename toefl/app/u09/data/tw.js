/* Unit 9 · Cities and Movement — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u09-tw", unit: "u09", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and open with something worth reading",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "Read the situation, then write the email. This unit's writing strategy is the introduction — your first sentence must earn the rest.",
        scenarioTitle: "The situation",
        scenario: "<p>Your department's seminars were moved to the science building, which the shuttle now reaches but which is fifteen minutes uphill on foot. Several students with mobility needs have been arriving late or not at all. The shuttle runs every ten minutes but stops running at seven, and the seminars finish at half past.</p><p><b>Write to the estates office.</b> Say what the problem is, say what it is costing, and propose one specific change.</p>",
        to: "estates@university.edu", re: "Evening seminars at the science building — shuttle finishes before they do",
        placeholder: "Dear Estates,…",
        minWords: 70,
        note: { kind: "help",
                body: "<i>I am writing about…</i><i>The difficulty is that…</i><i>As a result,…</i><i>Would it be possible to…?</i>" },
        checklist: [
          "My first sentence says what the message is about and takes a position.",
          "I said what the problem is costing, concretely.",
          "I proposed one specific change, not a general complaint.",
          "I kept it short enough to be read in full."
        ],
        model: "<p>Dear Estates,</p><p>I am writing about the evening seminars at the science building, which currently finish half an hour after the last shuttle.</p><p>The walk back is fifteen minutes and mostly downhill in the dark. Three students in our group have stopped attending the evening sessions entirely, and two others have been arriving late because they allow extra time to walk up.</p><p>Would it be possible to extend the shuttle to eight on seminar evenings? That is two additional runs on three days a week, and it would make the difference between attending and not for several people.</p><p>Kind regards,<br>Priya Raman</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe how you usually travel, and compare it with one alternative you could take.",
        model: "<p>I take the metro, about twenty-two minutes door to door. The alternative is cycling, which is thirty-four minutes but costs nothing and has no emissions at all. On the numbers alone the bicycle wins three of the four columns I would compare. What decides it for me is weather and what I am carrying, which is not in any of those columns — and I think that is true of most people's real transport decisions.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to explain something counter-intuitive.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Why might building a wider road fail to reduce congestion? Explain it to someone who has not heard the idea.",
        model: "<p>Because the traffic is not a fixed quantity waiting to be accommodated. While a road is slow and unpleasant, some journeys are simply not made, and others are made at a different hour or by a different route. When the road improves, that deterrent disappears and those journeys reappear. So the new capacity fills with traffic that did not exist before it was built. It is not that the widening was done badly — it is that supplying capacity changes the demand you were trying to meet.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the unit.",
        items: [
          { q: "The metro was crowded, and the buses were ____.", from: "Lesson 3",
            options: [
              { text: "too", correct: true, why: "<i>Too</i> agrees with a positive statement." },
              { text: "either", why: "<i>Either</i> follows a negative." },
              { text: "neither", why: "<i>Neither</i> would need inversion: <i>and neither were the buses</i>." }
            ] },
          { q: "Widening did not help, and pricing alone did not ____.", from: "Lesson 3",
            options: [
              { text: "either", correct: true, why: "<i>Either</i> after a negative." },
              { text: "too", why: "<i>Too</i> cannot follow a negative." },
              { text: "also", why: "Not used in this end position." }
            ] },
          { q: "____ the survey was repeated, the traffic had climbed back.", from: "Lesson 3",
            options: [
              { text: "By the time", correct: true, why: "<i>By the time</i> + past, with the past perfect in the main clause." },
              { text: "While", why: "<i>While</i> implies simultaneity, not a deadline reached." },
              { text: "Until", why: "<i>Until</i> would reverse the logic." }
            ] },
          { q: "The verb <i>indicate</i> gives which agent noun?", from: "Lesson 1",
            options: [
              { text: "indicator", correct: true, why: "<i>-ate</i> verbs almost always take <i>-or</i>." },
              { text: "indicater", why: "Not an English spelling." },
              { text: "indicant", why: "Not the agent noun in ordinary use." }
            ] },
          { q: "The article says the extra traffic comes from:", from: "Lesson 5",
            options: [
              { text: "journeys that were suppressed, or made at other times or by other means.", correct: true,
                why: "All three sources, in one sentence." },
              { text: "population growth.", why: "Not part of the mechanism described." },
              { text: "longer journeys by existing drivers.", why: "Not among the three given." }
            ] },
          { q: "Professor Haddad says a grid appears where land was being:", from: "On Campus",
            options: [
              { text: "distributed quickly.", correct: true, why: "Her explanation: easy to survey, divide and sell." },
              { text: "farmed intensively.", why: "Farming is not mentioned." },
              { text: "defended militarily.", why: "Defence is not mentioned." }
            ] }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Explain induced demand in two sentences, without using the word <i>demand</i>.</p>" } }
    ]
  };
})();
