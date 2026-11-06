/* Unit 6 · Food, Energy and the Body — ON CAMPUS
   Function: check that you have understood. */
(function () {
  window.PAGE = {
    id: "u06-oc", unit: "u06", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Check that you have understood",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
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

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on a word that causes trouble. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "6-12", label: "The word metabolism", lines: [{ who: "haddad", text:
          "I want to spend a few minutes on a word that causes more trouble than any other in this subject, and that word is metabolism. People speak of having a fast metabolism or a slow one, as though it were a single dial that could be turned up. It is not one process. It is the sum of every chemical conversion going on in the body at once, and the great majority of them are not optional. Keeping your heart beating, your temperature steady and your cell membranes intact accounts for most of what you spend in a day. Deliberate activity accounts for far less than people expect. Now, this matters practically. If you take in less than you spend, the body does not simply draw the difference from stored fat and carry on as before. It also reduces what it spends, quietly, by lowering body temperature slightly, by moving less, by making a hundred small economies you do not notice and cannot feel. This is why the arithmetic that looks so simple on paper behaves so badly in practice, and why anyone who tells you the sum is straightforward has not looked at the measurements." }] },
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

      { id: "c", section: 3, sectionTitle: "Check you have understood", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. Checking is not admitting you were lost; it is how you find out early.",
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
        after: "<p>Saying it back in your own words is the only check that works. Repeating the speaker's words proves you heard them, not that you understood.</p>",
        closer: { kind: "life",
          body: "<p>In your next class, say one instruction back in your own words before you act on it. Note whether the answer corrects you.</p>" } }
    ]
  };
})();
