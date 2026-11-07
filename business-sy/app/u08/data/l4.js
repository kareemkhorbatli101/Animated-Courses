/* Unit 8 · How the Business Has Changed — LESSON 4 · MEETINGS & CALLS */
(function () {
  window.PAGE = {
    id: "u08-l4", unit: "u08", block: "l4", up: "../", tab: "AT WORK",
    objective: "Explain a change on the telephone, and hear the s that is really a z",
    next: "l5.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Explaining a change", letter: "A",
        concepts: ["listen", "time"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six questions about how the company has changed. Choose the answer that is accurate and not defensive.",
        note: { kind: "life", title: "Answer the question that was asked",
                body: "<p>Questions about a difficult past invite long answers. The useful reply states the fact, says whether it is over, and stops.</p>" },
        items: [
          { who: "rana", say: "Do you still dye in house?",
            options: [
              { text: "No — we used to, until 2019. It is subcontracted now.", correct: true,
                why: "No, when, and what replaced it. Three facts, one sentence, no apology." },
              { text: "We have a very good subcontractor.", why: "Answers a question about quality that was not asked, and dodges the one that was." },
              { text: "Not at the moment.", why: "<i>At the moment</i> suggests it may come back, which is not the situation." } ] },
          { who: "rana", say: "Why did the dye plant close?",
            options: [
              { text: "Power costs rose and it became uneconomic.", correct: true,
                why: "One clause, no drama. Anything longer begins to sound like an excuse." },
              { text: "It is a long story.", why: "Invites the listener to imagine something worse." },
              { text: "Everyone had problems then.", why: "True, and it tells her nothing about you." } ] },
          { who: "rana", say: "Are you back to where you were?",
            options: [
              { text: "Not yet. Utilisation was sixty-two per cent and is seventy-one.", correct: true,
                why: "An honest no, and two numbers that make the direction visible." },
              { text: "More or less.", why: "A phrase that means nothing and will be remembered as a yes." },
              { text: "Yes, completely.", why: "Not true, and a visit to the workshop would show it." } ] },
          { who: "rana", say: "Did you use to run two shifts?",
            options: [
              { text: "We did, until 2021. One shift since then.", correct: true,
                why: "<i>We did</i> answers a <i>did you use to</i> question exactly, and the date closes it." },
              { text: "We used to, yes.", why: "Correct English, slightly weaker: it repeats her form instead of adding the date." },
              { text: "We are considering it again.", why: "Answers about the future when she asked about the past." } ] },
          { who: "rana", say: "How long have you been using the Homs dyer?",
            options: [
              { text: "Since 2019 — about five years.", correct: true,
                why: "<i>Since</i> plus the point, and then the length, because she asked <i>how long</i>." },
              { text: "For 2019.", why: "<i>For</i> needs a length, not a year." },
              { text: "A while.", why: "A question with <i>how long</i> in it is asking for a number." } ] },
          { who: "rana", say: "Does the power situation affect delivery?",
            options: [
              { text: "It can. We hold four weeks of yarn now, which we did not use to.", correct: true,
                why: "Admits the risk and names the mitigation, which is the only answer that makes a buyer less worried." },
              { text: "No, never.", why: "Unit 8's whole plot contradicts it." },
              { text: "Everyone here has that problem.", why: "Shared difficulty is not a plan." } ] }
        ] },

      { id: "1b", section: 1, sectionTitle: "Explaining a change", letter: "B",
        concepts: ["listen", "escalation"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six more, this time reporting a problem upwards.",
        items: [
          { who: "fadi", say: "The generator has cut out three times this week.",
            options: [
              { text: "Three times. Has anything been lost yet?", correct: true,
                why: "Repeats the number — Unit 6's habit — and goes straight to the consequence." },
              { text: "It is an old generator.", why: "A fact about the cause when the question is about the effect." },
              { text: "Tell maintenance.", why: "Passes it on before knowing whether anything is at risk." } ] },
          { who: "fadi", say: "Nothing yet, but the dark blue goes in on Thursday.",
            options: [
              { text: "Then Thursday is the decision. Hold it until the generator is checked.", correct: true,
                why: "Names the real question and answers it. The report was good; the decision was the missing half." },
              { text: "Let us hope it holds.", why: "Hope is not a decision, and the batch cannot be restarted." },
              { text: "How old is the generator?", why: "Relevant later, and Thursday is in two days." } ] },
          { who: "fadi", say: "It happened. Four hundred metres are uneven.",
            options: [
              { text: "Thank you for telling me straight. What did you do with the rest?", correct: true,
                why: "Acknowledges the report and asks the next useful question rather than the blame question." },
              { text: "Why did you run it?", why: "The decision to run was hers, from the previous exchange." },
              { text: "How did that happen?", why: "Both of them already know." } ] },
          { who: "fadi", say: "I held the remaining eight hundred rather than run them.",
            options: [
              { text: "That was the right call. We will decide together before Samer is told.", correct: true,
                why: "Confirms the judgement and sets the sequence, so nobody tells the client before the facts are agreed." },
              { text: "You should have asked first.", why: "He acted to stop the loss growing, which is what a supervisor is for." },
              { text: "Run them tomorrow.", why: "A decision taken before anyone has looked at the generator." } ] },
          { who: "nour", say: "Have you been logging the generator hours?",
            options: [
              { text: "Since January. I can send you the file this afternoon.", correct: true,
                why: "<i>Since</i> plus a point, and an offer that turns the answer into evidence." },
              { text: "For January.", why: "<i>For</i> needs a length." },
              { text: "Not really.", why: "A notice in Lesson 1 requires it daily." } ] },
          { who: "nour", say: "What would you do about it?",
            options: [
              { text: "Service the generator, and move dyeing to the morning while power is steadier.", correct: true,
                why: "Two actions, one immediate and one that costs nothing. A direct question deserves a direct plan." },
              { text: "That is above my level.", why: "She asked because she wants his view, not his authority." },
              { text: "Whatever you think.", why: "Declines the opening." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Take notes from a report", letter: "A",
        concepts: ["listen", "write"],
        kind: "notes", task: "listen-note-conversation", cefr: "B1", n: 8,
        prompt: "Fadi reports the batch loss to Nour. Fill in the form as you listen.",
        audio: { track: "u08-report", label: "Reporting the batch loss",
          lines: [
            { who: "fadi", text: "It happened. The generator cut out on Thursday with the dark blue in the bath." },
            { who: "nour", text: "How long was it out?" },
            { who: "fadi", text: "Twenty-two minutes. Long enough for the temperature to fall." },
            { who: "nour", text: "And the damage?" },
            { who: "fadi", text: "Four hundred metres are visibly uneven. They are usable but not as first quality." },
            { who: "nour", text: "Out of twelve hundred." },
            { who: "fadi", text: "Yes. I held the remaining eight hundred rather than run them into the same bath." },
            { who: "nour", text: "That was the right call. How many times has it cut out now?" },
            { who: "fadi", text: "Four, since Monday of last week. I have been logging the hours since January so the pattern is there if you want it." },
            { who: "nour", text: "Send me the file. Is it worse at a particular time?" },
            { who: "fadi", text: "Afternoons, mostly. Three of the four were after two o'clock." },
            { who: "nour", text: "Then one thing we could do tomorrow is move the dyeing to the morning." },
            { who: "fadi", text: "That costs nothing and I would do it anyway. The generator still needs servicing." },
            { who: "nour", text: "Agreed. Service booked this week, dyeing in the mornings from tomorrow, and I will tell Samer myself before he hears it from the warehouse." } ] },
        title: "Batch loss — notes",
        lines: [
          "Generator out for ___ minutes",
          "Cause of the damage: the ___ fell",
          "Affected: ___ metres of twelve hundred",
          "Quality: usable but not ___ quality",
          "Fadi held the remaining ___ metres",
          "Cut-outs so far: ___ since Monday of last week",
          "Worse in the ___ — three of the four after two",
          "Actions: service this week, dyeing moved to the ___ "
        ],
        gaps: [
          { answer: "22", why: "The first number she asks for. Duration decides whether a bath is recoverable." },
          { answer: "temperature", why: "He gives the mechanism without being asked, which is what makes the report useful." },
          { answer: "400", why: "And she immediately supplies the denominator, which is the habit from Unit 3." },
          { answer: "first", why: "<i>Usable but not first quality</i> — the distinction the client letter turns on." },
          { answer: "800", why: "What he did on his own authority, and she confirms it was right." },
          { answer: "four", why: "The figure that turns one incident into a pattern." },
          { answer: "afternoons", why: "Three of four after two o'clock, which is what makes the cheap fix possible." },
          { answer: "mornings", why: "The action that costs nothing, agreed in the same breath as the one that does." }
        ],
        note: { kind: "life", title: "He brought the log",
                body: "<p>The most valuable sentence in the call is <em>I have been logging the hours since January</em>. Without it, <em>it cuts out sometimes</em> is an impression. With it, there is a pattern, a time of day, and a free fix.</p>" },
        explain: { terms: [
          { en: "to cut out", gloss: "to stop working suddenly", ar: "ينقطع فجأة" },
          { en: "the right call", gloss: "the correct decision", ar: "القرار الصائب" }
        ] } },

      { id: "2b", section: 2, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["sound", "speak"],
        kind: "minimal-pairs", task: "pronounce-pair", n: 4,
        focus: "<p>The letter <b>s</b> is two sounds in English, and <em>use</em> is the clearest example in the language.</p><p><b>/s/</b> unvoiced: the noun <em>use</em>, and <em>used to</em>.<br><b>/z/</b> voiced: the verb <em>to use</em>, and <em>used</em> meaning employed.</p><p><em>We used to dye</em> has an /s/. <em>We used a subcontractor</em> has a /z/. Same four letters, two sounds, two meanings.</p>",
        items: [
          { say: "we used to dye in house", options: [
            { text: "we used to dye in house", correct: true, why: "/s/ — <i>used to</i> is one unit and it is unvoiced. It is nearly <i>use-to</i>." },
            { text: "we used a dye house", why: "/z/ — the ordinary past of the verb <i>use</i>. A different sentence about a different thing." } ] },
          { say: "the use of the generator", options: [
            { text: "the use of the generator", correct: true, why: "/s/ — the noun. <i>The use</i> rhymes with <i>loose</i>." },
            { text: "the users of the generator", why: "/z/ — people. The voicing is the only clue." } ] },
          { say: "we use a subcontractor", options: [
            { text: "we use a subcontractor", correct: true, why: "/z/ — the verb in the present. It rhymes with <i>lose</i>." },
            { text: "we used a subcontractor", why: "Also /z/, and past. Here the difference is the <i>-d</i>, not the voicing." } ] },
          { say: "a price rise", options: [
            { text: "a price rise", correct: true, why: "<i>Price</i> ends /s/ and <i>rise</i> ends /z/, in three words. English does not make this easy." },
            { text: "a price rice", why: "Not a phrase. If the second word ends unvoiced, the listener hears a different word entirely." } ] }
        ] },

      { id: "2c", section: 2, sectionTitle: "Hear the difference", letter: "C",
        concepts: ["speak", "sound"],
        kind: "repeat", task: "pronounce-pair", cefr: "B1", n: 4,
        prompt: "Say each line. Each one puts the two sounds beside each other.",
        speaker: "fadi",
        lines: [
          "We used to dye in house and we use a subcontractor now.",
          "The use of the generator has risen since the price rise.",
          "Those are the users who use it most.",
          "We did not use to lose batches this way."
        ] },

      { id: "3a", section: 3, sectionTitle: "Say it yourself", letter: "A",
        concepts: ["listen", "write"],
        kind: "dictation", task: null, n: 0,
        prompt: "Listen and type what you hear. All from the report in 2A.",
        items: [
          { answer: "The generator cut out with the dark blue in the bath.",
            why: "Simple past for a single dated event, and no apology in front of it." },
          { answer: "Four hundred metres are usable but not first quality.",
            why: "The distinction the whole unit turns on, in one sentence." },
          { answer: "I held the remaining eight hundred rather than run them.",
            why: "<i>Rather than</i> plus a bare verb, from Unit 2." },
          { answer: "I have been logging the hours since January.",
            why: "Present perfect continuous with <i>since</i>. The sentence that turns an impression into evidence." },
          { answer: "Three of the four were after two o'clock.",
            why: "A pattern stated as a ratio, which is what makes the cheap fix visible." }
        ],
        closer: "<p>Notice what Nour never asks: whose fault it was. The generator failed, the loss is counted, the log exists and two actions are agreed. Blame would not have produced any of those.</p>" }

    ]
  };
})();
