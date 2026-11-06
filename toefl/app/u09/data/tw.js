/* Unit 9 · Cities and Movement — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u09-tw", unit: "u09", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and open with something worth reading",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        concepts: ["write"],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        frames: [
          { frame: "___ did not ___, and ___ did not either.",
            why: "<i>Either</i> after a negative; <i>too</i> would be wrong here and audibly so." },
          { frame: "Am I right that ___?",
            why: "Answerable in one word, which is what makes it easy to ask." },
          { frame: "How long is ___, and what will I see if ___?",
            why: "A duration and a landmark: the two things that let you check while you are still going." },
        ],
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

            { id: "a2", section: 1, sectionTitle: "Problem solving", letter: "B",
        concepts: ["write", "claim"],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,

              frames: [

                { frame: "___ did not ___, and ___ did not either.",

                  why: "<i>Either</i> after a negative; <i>too</i> would be wrong here and audibly so." },

                { frame: "Am I right that ___?",

                  why: "Answerable in one word, which is what makes it easy to ask." },

                { frame: "How long is ___, and what will I see if ___?",

                  why: "A duration and a landmark: the two things that let you check while you are still going." },

              ],
        prompt: "A second situation. This one asks you to argue against a scheme that is about to be approved.",
        scenarioTitle: "The situation",
        scenario: "<p>The university is consulting on widening the access road, on the grounds that it is congested at eight forty-five. The appraisal counts time saved for people who already drive in. Nobody has counted the students who do not cycle because there is no safe way across that road, and the consultation closes on Friday.</p><p><b>Write to the consultation.</b> Say what the appraisal counts, say who it cannot count, and propose one specific addition.</p>",
        to: "consultation@university.edu", re: "Access road widening — the appraisal counts only existing journeys",
        placeholder: "To the consultation team,…",
        minWords: 70,
        note: { kind: "help",
                body: "<p>The temptation is to argue that the road should not be widened. That is a bigger claim than you can support in a short message, and it invites a reply about traffic modelling. The smaller claim — that one group is structurally absent from the arithmetic — is both easier to defend and harder to answer.</p><i>The appraisal values time saved for…</i><i>What it cannot count is…</i><i>Would the team consider…?</i>" },
        checklist: [
          "I said what the appraisal measures before saying what is wrong with it.",
          "I named who cannot appear in the measure, and why not.",
          "I used <i>capacity</i>, <i>deterrent</i> or <i>induced demand</i> accurately.",
          "I proposed one specific addition rather than opposing the scheme.",
          "I named the Friday deadline."
        ],
        model: "<p>To the consultation team,</p>" +
               "<p>The appraisal values the time saved by people who currently drive along the access road, and as far as I can see the arithmetic in it is sound.</p>" +
               "<p>What a measure of that shape cannot count is a journey nobody makes. I have not cycled in since my first week, because there is no safe way across that road, and I contribute no journey time at all to the appraisal — not a long one, not a slow one, none. The same is true of everyone deterred in the same way, and the scheme therefore reads our absence as satisfaction.</p>" +
               "<p>Would the team consider publishing, alongside the time savings, how many destinations are reachable by bicycle within fifteen minutes before and after? I realise Friday is close, which is why I am asking for one figure rather than a different appraisal.</p>" +
               "<p>Kind regards,<br>Priya Raman</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe how you usually travel, and compare it with one alternative you could take.",
        model: "<p>I take the metro, about twenty-two minutes door to door. The alternative is cycling, which is thirty-four minutes but costs nothing and has no emissions at all. On the numbers alone the bicycle wins three of the four columns I would compare. What decides it for me is weather and what I am carrying, which is not in any of those columns — and I think that is true of most people's real transport decisions.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to explain something counter-intuitive.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Why might building a wider road fail to reduce congestion? Explain it to someone who has not heard the idea.",
        model: "<p>Because the traffic is not a fixed quantity waiting to be accommodated. While a road is slow and unpleasant, some journeys are simply not made, and others are made at a different hour or by a different route. When the road improves, that deterrent disappears and those journeys reappear. So the new capacity fills with traffic that did not exist before it was built. It is not that the widening was done badly — it is that supplying capacity changes the demand you were trying to meet.</p>" },

            { id: "c2", section: 2, sectionTitle: "Take an interview", letter: "C",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A third question, about a journey you stopped making.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe somewhere you used to go and no longer do. What changed?",
        model: "<p>I used to cycle to a market on the other side of a dual carriageway, about twenty minutes away. Nothing was ever announced; the crossing was taken out during roadworks and never put back, and the alternative adds a mile. For about a month I went the long way and then I simply stopped going. What strikes me now is that nobody counted that. The traffic on the carriageway was measured before and after, and my journey disappeared from the figures by disappearing entirely.</p>" },

      { id: "c3", section: 2, sectionTitle: "Take an interview", letter: "D",
        concepts: ["speak", "measurement"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A fourth question, asking you to judge a measure rather than a scheme.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "How should a city decide whether a transport scheme is worth building? Give one measure and one objection to it.",
        model: "<p>I would use access: how many jobs, schools and shops a person can reach in half an hour without a car, before and after. The reason is that it counts people who currently travel and people who currently cannot, which time saved does not. The objection is that it is much harder to compute and far easier to argue about — you have to decide which destinations count, and that decision carries a politics of its own. My answer to that would be to publish both measures and the disagreement between them, rather than to pick the one that is easy.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "measurement", "evidence"],
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the unit.",
        items: [
          { q: "The metro was crowded, and the buses were ____.", from: "Lesson 3",
            options: [
              { text: "too", correct: true, why: "<i>Too</i> agrees with a positive statement." },
              { text: "either", why: "<i>Either</i> follows a negative." },
              { text: "neither", why: "<i>Neither</i> would need inversion: <i>and neither were the buses</i>." }
            ] },
          { q: "The verb <i>indicate</i> gives which agent noun?", from: "Lesson 1",
            options: [
              { text: "indicator", correct: true, why: "<i>-ate</i> verbs almost always take <i>-or</i>." },
              { text: "indicater", why: "Not an English spelling." },
              { text: "indicant", why: "Not the agent noun in ordinary use." }
            ] },
          { q: "Widening did not help, and pricing alone did not ____.", from: "Lesson 3",
            options: [
              { text: "either", correct: true, why: "<i>Either</i> after a negative." },
              { text: "too", why: "<i>Too</i> cannot follow a negative." },
              { text: "also", why: "Not used in this end position." }
            ] },
          { recall: "From Lesson 5: the article on widening a congested road, and why the congestion comes back.", q: "The article says the extra traffic comes from:", from: "Lesson 5",
            options: [
              { text: "journeys that were suppressed, or made at other times or by other means.", correct: true,
                why: "All three sources, in one sentence." },
              { text: "population growth.", why: "Not part of the mechanism described." },
              { text: "longer journeys by existing drivers.", why: "Not among the three given." }
            ] },
          { q: "____ the survey was repeated, the traffic had climbed back.", from: "Lesson 3",
            options: [
              { text: "By the time", correct: true, why: "<i>By the time</i> + past, with the past perfect in the main clause." },
              { text: "While", why: "<i>While</i> implies simultaneity, not a deadline reached." },
              { text: "Until", why: "<i>Until</i> would reverse the logic." }
            ] },
          { q: "Professor Haddad says a grid appears where land was being:", from: "On Campus",
            options: [
              { text: "distributed quickly.", correct: true, why: "Her explanation: easy to survey, divide and sell." },
              { text: "farmed intensively.", why: "Farming is not mentioned." },
              { text: "defended militarily.", why: "Defence is not mentioned." }
            ] },
          { q: "Which word is NOT an agent noun built from a verb?", from: "Lesson 1",
            options: [
              { text: "corridor", correct: true, why: "There is no verb <i>to corrid</i>; the ending is a coincidence of Latin." },
              { text: "regulator", why: "<i>regulate</i> + <i>-or</i>." },
              { text: "commuter", why: "<i>commute</i> + <i>-er</i>." }
            ] },
          { q: "Widening did not help and ____ pricing.", from: "Lesson 3",
            options: [
              { text: "neither did", correct: true, why: "Negative agreement: <i>neither</i> first, then the auxiliary, then the subject." },
              { text: "so did", why: "<i>So</i> agrees with a positive statement." },
              { text: "neither pricing did", why: "The inversion is obligatory in this pattern." }
            ] },
          { q: "In <i>a quarter of an hour</i>, how many vowels are schwa?", from: "Lesson 4",
            options: [
              { text: "Four.", correct: true, why: "<i>a</i>, the second syllable of <i>quarter</i>, <i>of</i> and <i>an</i>. Only <i>quar-</i> and <i>hour</i> keep their value." },
              { text: "One.", why: "Every unstressed vowel in the phrase reduces." },
              { text: "None.", why: "The schwa is the commonest sound in English and this phrase is mostly made of it." }
            ] },
          { q: "According to Lesson 5's second article, a resident who cannot cross a road contributes nothing because:", from: "Lesson 5",
            options: [
              { text: "they make no journey, so there is no journey time.", correct: true,
                why: "The measure can record a slow journey and not an impossible one." },
              { text: "they were not included in the survey.", why: "No survey would help; the measure has no slot for them." },
              { text: "their journey is too short to count.", why: "The journey does not happen at all." }
            ] },
          { q: "Professor Haddad says a grid plan appears wherever:", from: "On Campus",
            options: [
              { text: "land was being surveyed, divided and sold quickly.", correct: true,
                why: "Her three reasons, and the point is that the form follows the process rather than any aesthetic." },
              { text: "the terrain is flat.", why: "Terrain is not among her reasons." },
              { text: "cities were planned for cars.", why: "Grids long predate the car in her account." }
            ] },
          { q: "The road was widened ____ the journey time did not fall.", from: "Lesson 2",
            options: [
              { text: "but", correct: true, why: "The second clause defeats what the first leads you to expect." },
              { text: "and", why: "Suggests the second follows naturally from the first, which is the opposite of the point." },
              { text: "so", why: "Marks a consequence, and this is a frustration of one." }
            ] }
        ] },

      { id: "e", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["comparison", "measurement", "claim"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight journeys. Sort them by whether a time-saving appraisal would be able to count them.",
        note: { kind: "reader",
                body: "<p>The right-hand column is the unit's argument in one picture. Everything in it is a real journey or a real need, and none of it can appear in a measure made of journeys that already happen.</p>" },
        bins: [
          { id: "counted", label: "The appraisal can count it", hint: "a journey that happens" },
          { id: "invisible", label: "The appraisal cannot",     hint: "no journey, so no journey time" }
        ],
        items: [
          { text: "A commuter who drives in and would save four minutes", bin: "counted",
            why: "the central case the measure was built for." },
          { text: "A delivery van making the same trip twice a day", bin: "counted",
            why: "counted twice, and at a higher value per hour than a commuter." },
          { text: "A bus passenger whose route is unchanged but less delayed", bin: "counted",
            why: "the journey exists and gets quicker, which is all the measure needs." },
          { text: "A cyclist who already uses the corridor", bin: "counted",
            why: "counted, though usually at a lower value and sometimes not at all." },
          { text: "A student who does not cycle because the crossing is unsafe", bin: "invisible",
            why: "no journey, so no time, so nothing to save." },
          { text: "A child not allowed to walk to school alone", bin: "invisible",
            why: "the journey is made by car instead, and the one that was prevented leaves no trace." },
          { text: "Someone who shops locally because the market is unreachable", bin: "invisible",
            why: "a substitution. The measure sees a shorter journey and reads it as a convenience." },
          { text: "A resident who moved away because of the noise", bin: "invisible",
            why: "the hardest card: they are not even in the population the appraisal surveys." }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Explain induced demand in two sentences, without using the word <i>demand</i>.</p>" } }
    ]
  };
})();
