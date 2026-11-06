/* Unit 6 · Food, Energy and the Body — ON CAMPUS
   Function: check that you have understood. */
(function () {

  /* Two exercises use this talk: the comprehension items, and the outline
     filled in while it plays. */
  var TALK1 = { track: "6-12", label: "The word metabolism", lines: [{ who: "haddad", text:
          "I want to spend a few minutes on a word that causes more trouble than any other in this subject, and that word is metabolism. People speak of having a fast metabolism or a slow one, as though it were a single dial that could be turned up. It is not one process. It is the sum of every chemical conversion going on in the body at once, and the great majority of them are not optional. Keeping your heart beating, your temperature steady and your cell membranes intact accounts for most of what you spend in a day. Deliberate activity accounts for far less than people expect. Now, this matters practically. If you take in less than you spend, the body does not simply draw the difference from stored fat and carry on as before. It also reduces what it spends, quietly, by lowering body temperature slightly, by moving less, by making a hundred small economies you do not notice and cannot feel. This is why the arithmetic that looks so simple on paper behaves so badly in practice, and why anyone who tells you the sum is straightforward has not looked at the measurements." }] };

  window.PAGE = {
    id: "u06-oc", unit: "u06", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Check that you have understood",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice before the practical. It plays once.",
        speaker: "dan", speakerNote: "laboratory demonstrator",
        audio: { track: "6-11", label: "A change to the practical", lines: [{ who: "dan", text:
          "A change to the practical. The enzyme assay needs a water bath at thirty-seven degrees, and only two of the four are working, so we will run the class in two halves. Group A starts at ten, group B at eleven thirty. Read the method before you arrive either way." }] },
        items: [
          { q: "Why is the class being split?",
            options: [
              { text: "Only two water baths are working.", correct: true, why: "Stated as the reason, with <i>so</i> introducing the consequence." },
              { text: "There are too many students enrolled.", why: "Numbers of students are not mentioned." },
              { text: "The room is too small.", why: "The room is not the constraint." }
            ] },
          { q: "When does group B start?",
            options: [
              { text: "Eleven thirty.", correct: true, why: "Given directly, after group A's ten." },
              { text: "Ten.", why: "That is group A." },
              { text: "It has not been decided.", why: "Both times are given." }
            ] },
          { q: "What should everyone do beforehand?",
            options: [
              { text: "Read the method.", correct: true, why: "“either way” marks it as unaffected by which half you are in." },
              { text: "Book a water bath.", why: "No booking is mentioned." },
              { text: "Nothing — the change removes the preparation.", why: "The last sentence insists on it." }
            ] }
        ] },

            { id: "a2", section: 1, sectionTitle: "Listen to an announcement", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A second notice, read out at the start of a practical. It plays once.",
        speaker: "dan", speakerNote: "demonstrator",
        audio: { track: "6-13", label: "Before you start", lines: [{ who: "dan", text:
          "Three things before you start. The water baths take about twenty minutes to come up to temperature, so switch yours on now and read the method while it warms. Second, there is one pipette per bench and not one per person, so work out between you who is pipetting before you need it rather than afterwards. And third, if your mixture has not cleared by ten minutes, stop and call me. Do not add more enzyme. Adding more is the commonest thing people do and it makes the result impossible to interpret." }] },
        items: [
          { q: "Why should the bath be switched on immediately?",
            options: [
              { text: "It takes about twenty minutes to reach temperature.", correct: true,
                why: "The reason comes before the instruction, and the reading is offered as something to do meanwhile." },
              { text: "Because the room is cold.", why: "Room temperature is not mentioned." },
              { text: "To check that it works.", why: "No testing is suggested." }
            ] },
          { q: "What does he ask each bench to settle in advance?",
            options: [
              { text: "Who will use the single pipette.", correct: true,
                why: "<i>Rather than afterwards</i> tells you this is about avoiding a queue at the moment it matters." },
              { text: "Who will write up the results.", why: "The write-up is not mentioned." },
              { text: "Which bench gets the second pipette.", why: "There is only one per bench." }
            ] },
          { q: "What should you NOT do if the mixture has not cleared?",
            options: [
              { text: "Add more enzyme.", correct: true,
                why: "He names it, forbids it and says why: it is common, and it destroys the interpretation." },
              { text: "Call the demonstrator.", why: "That is exactly what he asks for." },
              { text: "Stop the run.", why: "Also what he asks for." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        concepts: ["listen", "inference", "cause"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on a word that causes trouble. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: TALK1,
        transcript: "<p>Metabolism is not a dial. It is the sum of everything happening at once, most of it not optional — and when intake falls, spending falls too, quietly.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "Metabolism is not one adjustable process but the sum of many unavoidable ones.", correct: true,
                why: "“It is not one process” is the hinge, and everything after it elaborates." },
              { text: "Exercise is the main determinant of energy expenditure.", why: "She says deliberate activity accounts for far less than people expect." },
              { text: "Fast metabolisms are rarer than people think.", why: "She rejects the framing of fast and slow altogether." }
            ] },
          { q: "What accounts for most of daily expenditure?",
            options: [
              { text: "Maintaining heartbeat, temperature and cell membranes.", correct: true,
                why: "She lists all three — a detail worth putting on the pad." },
              { text: "Deliberate exercise.", why: "Explicitly far less." },
              { text: "Digestion of food.", why: "Not among the three she names." }
            ] },
          { q: "What happens when intake falls below expenditure?",
            options: [
              { text: "The body also reduces what it spends.", correct: true,
                why: "She gives three mechanisms: lower temperature, less movement, small economies." },
              { text: "The body draws the whole difference from stored fat.", why: "That is the assumption she is correcting." },
              { text: "Metabolism speeds up to compensate.", why: "The adjustment goes the other way." }
            ] },
          { q: "Why does she say the arithmetic “behaves so badly in practice”?",
            options: [
              { text: "Because one side of the sum changes when the other does.", correct: true,
                why: "One step from what she states: expenditure is not fixed, so intake minus expenditure is not a stable subtraction." },
              { text: "Because the measurements are unreliable.", why: "She appeals <i>to</i> the measurements, not against them." },
              { text: "Because people miscount what they eat.", why: "Miscounting is never mentioned." }
            ] }
        ] },

            { id: "b2", section: 2, sectionTitle: "Listen to an academic talk", letter: "B",
        concepts: ["listen", "inference", "claim"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "The same lecturer, on an equation everyone can recite.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "6-14", label: "Why the sum misbehaves", lines: [{ who: "haddad", text:
          "Everybody in this room can recite the energy equation. Intake minus expenditure equals change in storage. It is true. It is also, as a tool for predicting anything, close to useless, and I want to be precise about why. The reason is not that the equation is wrong. The reason is that the two terms are not independent of each other. Reduce intake and expenditure falls as well, partly for an uninteresting reason and partly for an interesting one. The uninteresting reason is that a lighter body costs less to carry about, so the same walk uses less energy than it did. The interesting reason is regulation. Core temperature drops very slightly. Spontaneous movement falls, and nobody notices themselves fidgeting less. These are not decisions. Nobody chooses them and nobody feels them. So when a prediction built on the static equation says a particular reduction will produce a particular loss over six months, the prediction is almost always too large, and the error is not small. None of this means intake does not matter. It means an equation whose two sides are tied together cannot be solved as though they were free." }] },
        transcript: "<p>Intake minus expenditure equals change in storage — true, and nearly useless for prediction, because reducing intake lowers expenditure too, partly through mass and partly through regulation.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "The equation is true but cannot predict, because its two terms are tied together.", correct: true,
                why: "She says the equation is true twice, and spends the talk on why that does not help." },
              { text: "The energy equation is incorrect.", why: "<i>The reason is not that the equation is wrong</i> — she rules this out explicitly." },
              { text: "Intake has no effect on weight.", why: "Her last two sentences exist to prevent exactly that conclusion." }
            ] },
          { q: "What does she call the <i>uninteresting</i> reason expenditure falls?",
            options: [
              { text: "A lighter body uses less energy for the same activity.", correct: true,
                why: "She separates it from regulation as a matter of arithmetic rather than biology." },
              { text: "People deliberately move less.", why: "She says nobody chooses or feels these changes." },
              { text: "Core temperature drops.", why: "That is on the regulatory side, which she calls the interesting one." }
            ] },
          { q: "Why does she emphasise that nobody notices these changes?",
            options: [
              { text: "Because they are regulation rather than decisions, so willpower does not reach them.", correct: true,
                why: "<i>These are not decisions</i> is the sentence the whole middle of the talk is building towards." },
              { text: "Because they are too small to measure.", why: "They are measured; that is how she knows about them." },
              { text: "Because they happen only in some people.", why: "No individual variation is claimed here." }
            ] },
          { q: "What does she say her argument does NOT show?",
            options: [
              { text: "That intake is irrelevant.", correct: true,
                why: "Her final two sentences name the misreading and reject it, which is a move worth copying." },
              { text: "That the equation is true.", why: "She asserts that it is true, repeatedly." },
              { text: "That expenditure can be measured.", why: "Measurement is not in dispute in this talk." }
            ] }
        ] },

      { id: "b3", section: 2, sectionTitle: "Listen to an academic talk", letter: "C",
        concepts: ["listen"],
        kind: "notes", task: null, n: 0,
        prompt: "Play the first talk again and complete the outline while it runs.",
        audio: TALK1,
        title: "Lecture — the word metabolism",
        note: { kind: "reader",
                body: "<p>She corrects a popular idea, gives the real definition, says where most of the spending goes, and then draws the practical consequence. Four lines, in that order.</p>" },
        lines: [
          "Not a single dial: metabolism is the ___ of every chemical conversion at once",
          "- Most of the daily spend goes on things that are not ___",
          "- Deliberate activity accounts for far ___ than people expect",
          "- Eat less and the body also ___ less, quietly and unnoticed"
        ],
        gaps: [
          { answer: "sum", why: "her own word, and the correction the whole talk rests on." },
          { answer: "optional", why: "heartbeat, temperature, membranes — the part nobody can decide about." },
          { answer: "less", why: "a comparative, and the number most listeners get wrong in the other direction." },
          { answer: "spends", why: "the practical consequence, and the bridge to the second talk." }
        ] },

      { id: "c", section: 3, sectionTitle: "Check you have understood", letter: "A",
        concepts: ["read"],
        kind: "phrases", task: null, n: 0,

        phrases: [

          { text: "Say it back in your own words, not theirs.",

            say: "Say it back in your own words, not theirs.",

            when: "Any time a point was long or mattered.",

            why: "The only check that works. Repeating the speaker\u0027s words proves you heard them; your own words are the first moment either of you finds out whether you understood." },

          { text: "Check the consequence, not just the fact.",

            say: "Check the consequence, not just the fact.",

            when: "When what follows from a point matters more than the point.",

            why: "Understanding a fact and understanding what it obliges you to do next are different, and only the second one changes what you do at the bench." },

          { text: "Name the thing it refers to.",

            say: "Name the thing it refers to.",

            when: "Whenever the speaker has said <i>it</i>, <i>that</i> or <i>this</i> about something ambiguous.",

            why: "Half of all misunderstandings in a lab are a pronoun with two possible referents. Naming it costs four words." },

          { text: "So you mean the enzyme has to go in after the bath is up to temperature?",

            say: "So you mean the enzyme has to go in after the bath is up to temperature?",

            when: "After an instruction with an order in it.",

            why: "Your own words, and the order made explicit. If you have the sequence backwards, you find out now rather than halfway through the run." },

          { text: "Just to check \u2014 does that mean we start the whole run again?",

            say: "Just to check, does that mean we start the whole run again?",

            when: "When the consequence is expensive.",

            why: "Checking the consequence rather than the fact. <i>Just to check</i> keeps it light while asking about an hour of work." },

          { text: "When you say <i>go over it</i>, do you mean the method or the readings?",

            say: "When you say go over it, do you mean the method or the readings?",

            when: "The moment a phrase could point at two things.",

            why: "Naming both candidates makes the question answerable in one word, which is what distinguishes a check from an interruption." }

        ],
        prompt: "Checking is not admitting you were lost; it is how you find out early. Hear each line, say it along with the model, then rate what you could produce unprompted.",
        note: { kind: "speak",
                body: "<i>So you mean…?</i><i>Just to check — is that…?</i><i>Can I say that back to you?</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT TO CHECK YOU HAVE UNDERSTOOD",
          blocks: [
            { h: "Do this", lines: [
              "Say it back in your own words, not theirs.",
              "Check the consequence, not just the fact.",
              "Name the thing <i>it</i> refers to."
            ] },
            { h: "Say this", lines: [
              "So you mean the enzyme has to go in after the bath is up to temperature?",
              "Just to check — does that mean we start the whole run again?",
              "When you say <i>go over it</i>, do you mean the method or the readings?"
            ] }
          ] },
        after: "<p>Saying it back in your own words is the only check that works. Repeating the speaker's words proves you heard them, not that you understood.</p>" },

      { id: "c2", section: 3, sectionTitle: "Check you have understood", letter: "B",
        concepts: ["measurement"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table from the chart in 3A. The right-hand column says what each check would catch.",
        caption: "Four checks, and what each one catches",
        head: ["Check", "What you say", "What it catches"],
        rows: [
          ["Say it back",      "So you ___ the enzyme goes in after the bath is up?", "a misunderstanding, before it costs you a run"],
          ["Check the consequence", "Just to check — does that mean we start the whole run ___ ?", "an instruction you understood and underestimated"],
          ["Name the referent",     "When you say <i>go over it</i>, do you mean the method or the ___ ?", "the commonest ambiguity in spoken instructions"],
          ["Use your own words",    "— not theirs", "the illusion of understanding, which ___ their words cannot"]
        ],
        gaps: [
          { answer: "mean", why: "<i>So you mean…</i> is the shortest form of the move." },
          { answer: "again", why: "checking the consequence is what separates a small misunderstanding from an expensive one." },
          { answer: "readings", why: "<i>it</i> is the single most dangerous word in a laboratory instruction." },
          { answer: "repeating", why: "repeating proves you heard. Rephrasing is the only thing that proves you understood." }
        ] },

      { id: "c3", section: 3, sectionTitle: "Check you have understood", letter: "C",
        concepts: ["read"],
        kind: "recap", task: null, n: 0,

        cases: [

          { id: "u1", label: "The echo",

            detail: "Rana repeats the demonstrator\u0027s sentence back word for word. Both take it as understanding, and she gets the step wrong anyway." },

          { id: "u2", label: "The silent assumption",

            detail: "Tarek thinks he has followed but says nothing, and discovers at the end of the run that he had the order reversed." },

          { id: "u3", label: "The paraphrase that worked",

            detail: "Nour says it back in her own words, gets a small correction, and the correction takes four seconds." }

        ],

        takeaways: [

          { text: "<b>Repeating somebody\u0027s words proves you heard them.</b>", caseId: "u1",

            why: "Rana\u0027s echo tested her hearing, not her understanding. The words can pass through intact with no model of them behind." },

          { text: "<b>Only your own words</b>", caseId: "u3",

            why: "Nour\u0027s paraphrase did the work: it exposed what she thought, which is the only thing a correction can get hold of." },

          { text: "<b>prove you understood.</b>", caseId: "u2",

            why: "Tarek proved nothing either way, and the cost of finding out was a whole run. Silence is the most expensive check there is." }

        ],
        prompt: "One sentence to leave with \u2014 and three checks that are about to fail. Drag each part onto the one it would fix.",
        text: { blocks: [{ lines: [
          "Repeating somebody's words proves you heard them. Only your own words prove you understood."
        ],
        closer: { kind: "life",
          body: "<p>In your next class, say one instruction back in your own words before you act on it. Note whether the answer corrects you.</p>" } }] } }
    ]
  };
})();
