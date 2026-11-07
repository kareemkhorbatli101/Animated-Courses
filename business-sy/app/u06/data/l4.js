/* Unit 6 · Calls and Handovers — LESSON 4 · MEETINGS & CALLS */
(function () {
  window.PAGE = {
    id: "u06-l4", unit: "u06", block: "l4", up: "../", tab: "AT WORK",
    objective: "Handle a switchboard call, and hear where one word ends and the next begins",
    next: "l5.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "On the telephone", letter: "A",
        concepts: ["listen", "speak"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six things a caller says. Choose the reply reception would give.",
        note: { kind: "life", title: "Reception English is formulaic on purpose",
                body: "<p>The phrases are fixed because both sides need to recognise them instantly on a bad line. This is one of the few places where sounding original is a disadvantage.</p>" },
        items: [
          { who: "rana", say: "Could I speak to Lina Al-Masri, please?",
            options: [
              { text: "Of course — who's calling, please?", correct: true,
                why: "Agree, then ask who it is before connecting. Both halves are standard." },
              { text: "Why?", why: "Interrogates a perfectly ordinary request." },
              { text: "She's busy.", why: "May be true, and it refuses before finding out who is calling." } ] },
          { who: "rana", say: "It's Rana Darwish from Levant Home.",
            options: [
              { text: "Thank you, Ms Darwish. I'll put you through.", correct: true,
                why: "Repeats the name, which confirms you heard it, and uses the fixed connecting phrase." },
              { text: "One moment.", why: "Correct and colder, and it does not confirm the name." },
              { text: "Put through you now.", why: "The word order error this unit exists to prevent." } ] },
          { who: "rana", say: "I'll hold.",
            options: [
              { text: "Thank you — I'll come back to you if she's still engaged.", correct: true,
                why: "Accepts, and promises not to leave them in silence indefinitely." },
              { text: "It might be a long time.", why: "Discourages without offering an alternative." },
              { text: "Fine.", why: "Leaves them holding with no idea for how long." } ] },
          { who: "rana", say: "Actually, could you just take a message?",
            options: [
              { text: "Of course. Could I take your number?", correct: true,
                why: "Agrees and immediately collects the one field most messages lack." },
              { text: "She'll call you back.", why: "Promises on someone else's behalf, without a number." },
              { text: "What's it about?", why: "Not wrong, and the number comes first because the call may drop." } ] },
          { who: "rana", say: "It's 011 442 7781.",
            options: [
              { text: "011 442 7781 — is that right?", correct: true,
                why: "Reading it back is the whole of this lesson. One wrong digit is worse than no message." },
              { text: "Got it.", why: "Nobody has checked anything." },
              { text: "Could you repeat that?", why: "Fine if you missed it, and it does not confirm what you wrote." } ] },
          { who: "rana", say: "Could she call before four?",
            options: [
              { text: "I'll ask her to. If she can't, someone will let you know.", correct: true,
                why: "Promises the action you control and not the one you do not." },
              { text: "Yes, she will.", why: "Commits Lina to something you cannot commit her to." },
              { text: "I can't promise that.", why: "True and unhelpful — there is a version you can promise." } ] }
        ] },

      { id: "1b", section: 1, sectionTitle: "On the telephone", letter: "B",
        concepts: ["listen", "sequence"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six more, this time in a handover.",
        items: [
          { who: "fadi", say: "Anything I should know before you go?",
            options: [
              { text: "Three things, and one of them is a 'do not'.", correct: true,
                why: "Announces the shape before the content, so the listener knows how many to hold." },
              { text: "Not really.", why: "There are always three things, and this is how they get lost." },
              { text: "It's all in the note.", why: "The note exists; the handover is the chance to flag the one line that matters." } ] },
          { who: "fadi", say: "The pallets are made up?",
            options: [
              { text: "Made up but not counted — do not release them.", correct: true,
                why: "Corrects a half-right assumption and attaches the instruction to it in the same breath." },
              { text: "Yes.", why: "Technically true and it will cost two hundred metres." },
              { text: "More or less.", why: "A phrase that means nothing at six in the morning." } ] },
          { who: "fadi", say: "Who's covering for Ghada?",
            options: [
              { text: "Marwan, until Thursday.", correct: true,
                why: "Name and end date. The second half is what stops the question being asked again on Wednesday." },
              { text: "Someone from days.", why: "Nobody can ask <i>someone</i> a question." },
              { text: "She's back soon.", why: "Answers a question that was not asked." } ] },
          { who: "fadi", say: "What do I do if the dye house van comes early?",
            options: [
              { text: "Take the delivery but don't sign — call the supervisor.", correct: true,
                why: "Splits the action into the part he may do and the part he may not." },
              { text: "Sign for it.", why: "Against the standing rule, and it is the rule the handover note exists to repeat." },
              { text: "Send them away.", why: "Loses the yarn the whole order is waiting on." } ] },
          { who: "fadi", say: "Loom three — is that fixed?",
            options: [
              { text: "No. It's off and maintenance see it in the morning.", correct: true,
                why: "A clear no, the current state, and who owns the next step." },
              { text: "It stopped twice.", why: "History without a status. He still does not know whether to use it." },
              { text: "I think so.", why: "A guess about a machine, which is how people get hurt." } ] },
          { who: "fadi", say: "Right — so I don't release the pallets, and Marwan's covering.",
            options: [
              { text: "That's it. And don't sign for the van.", correct: true,
                why: "Confirms his summary and adds back the one item he dropped. This is the whole At Work lesson." },
              { text: "Yes.", why: "Lets the missing item stay missing." },
              { text: "You've got it.", why: "Same problem, warmer." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Take notes from a handover", letter: "A",
        concepts: ["listen", "write"],
        kind: "notes", task: "listen-note-conversation", cefr: "B1", n: 8,
        prompt: "The spoken handover between the day and night shifts. Fill in the form as you listen.",
        audio: { track: "u06-handover", label: "Handover — day shift to night shift",
          lines: [
            { who: "fadi", text: "Right. Three things, and one of them is a do-not." },
            { who: "nour", text: "Go ahead." },
            { who: "fadi", text: "One. The Amman pallets are made up but not counted. Do not hand them over to any driver until they have been counted, and that means by a supervisor, not by the driver." },
            { who: "nour", text: "Not counted. Not released. Understood." },
            { who: "fadi", text: "Two. Loom three stopped twice this afternoon. It is off and maintenance are coming at eight tomorrow. Do not restart it to see whether it works." },
            { who: "nour", text: "Is that the bearing again?" },
            { who: "fadi", text: "I do not know, and I would rather not guess in a handover. It is off, that is all I am certain of." },
            { who: "nour", text: "Fair enough." },
            { who: "fadi", text: "Three. The dye house van may come at ten tonight with the dark blue. Take the delivery, but do not sign the note yourself — call the supervisor, even at ten." },
            { who: "nour", text: "And if nobody answers?" },
            { who: "fadi", text: "Then the van waits. We have waited nine days for that yarn; twenty minutes will not hurt." },
            { who: "nour", text: "Understood. And Marwan is on tonight?" },
            { who: "fadi", text: "Marwan is covering for Ghada until Thursday. He has done the night shift before but not with a delivery in it, so keep an eye on him." },
            { who: "nour", text: "So: pallets not released, loom three stays off, van taken but not signed for. And Marwan is new to deliveries." },
            { who: "fadi", text: "That is it. Thank you." } ] },
        title: "Handover — night shift notes",
        lines: [
          "Amman pallets: made up but not ___ ",
          "Do not hand them over until counted by a ___ ",
          "Loom three: ___ until maintenance come at eight",
          "Do not ___ it to test it",
          "Dye house van expected at ___ tonight",
          "Take the delivery but do not ___ the note",
          "If nobody answers, the van ___ ",
          "Marwan is covering for Ghada until ___ "
        ],
        gaps: [
          { answer: "counted", why: "Made up and counted are two different states, and the whole first instruction depends on the difference." },
          { answer: "supervisor", why: "He adds <i>not by the driver</i>, which tells you the mistake he is guarding against." },
          { answer: "off", why: "The status, which is what the next shift needs. The cause he refuses to guess at." },
          { answer: "restart", why: "The specific thing not to do. A general <i>be careful</i> would not have survived the night." },
          { answer: "ten", why: "<i>May come at ten</i> — and he repeats the hour when he says to call the supervisor even then." },
          { answer: "sign", why: "Take it, do not sign it. Two actions split deliberately." },
          { answer: "waits", why: "The answer to the obvious follow-up question, given before it has to be asked twice." },
          { answer: "Thursday", why: "Name and end date together, which is what stops the question recurring." }
        ],
        note: { kind: "life", title: "He refuses to guess",
                body: "<p><em>I do not know, and I would rather not guess in a handover.</em> A guess passed between shifts becomes a fact by the third telling. Saying what you are certain of, and only that, is a discipline worth copying.</p>" },
        explain: { terms: [
          { en: "a do-not", gloss: "an instruction about what must not be done", ar: "تعليمة منع" },
          { en: "to keep an eye on", gloss: "to watch and be ready to help", ar: "يراقب / ينتبه لـ" }
        ] } },

      { id: "2b", section: 2, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["sound", "speak"],
        kind: "minimal-pairs", task: "pronounce-pair", n: 4,
        focus: "<p>English runs a phrasal verb together, and the join is where learners lose the meaning. A consonant at the end of the verb attaches itself to the vowel at the start of the particle.</p><p><em>hand it over</em> sounds like <b>han-di-tover</b>. <em>put it on</em> sounds like <b>pu-ti-ton</b>. The words do not change; the boundaries do.</p><p>If you say each word separately you are still understood. If you cannot hear them joined, you will miss half of what is said to you.</p>",
        items: [
          { say: "hand it over", options: [
            { text: "hand it over", correct: true, why: "Three words, two joins: <i>han-di-tover</i>. The <i>d</i> and the <i>t</i> both move right." },
            { text: "hand over", why: "Two words and no object. In a handover that difference is two hundred metres of fabric." } ] },
          { say: "put him through", options: [
            { text: "put him through", correct: true, why: "The <i>h</i> of <i>him</i> disappears entirely: <i>pu-tim-through</i>." },
            { text: "put through", why: "No object, which is not possible with this verb when a person is involved." } ] },
          { say: "follow it up", options: [
            { text: "follow it up", correct: true, why: "<i>follow-wi-tup</i>. A <i>w</i> appears between the two vowels that is not written anywhere." },
            { text: "follow up", why: "Correct English, different grammar — and in speech the two are told apart only by that joined syllable." } ] },
          { say: "take it on", options: [
            { text: "take it on", correct: true, why: "<i>tay-ki-ton</i>. Two joins again, and the stress stays on <i>take</i>." },
            { text: "take on", why: "Without the object, the sentence is waiting for a noun that never comes." } ] }
        ] },

      { id: "2c", section: 2, sectionTitle: "Hear the difference", letter: "C",
        concepts: ["speak", "sound"],
        kind: "repeat", task: "pronounce-pair", cefr: "B1", n: 4,
        prompt: "Say each line. Let the consonants move across — do not put a gap between the words.",
        speaker: "fadi",
        lines: [
          "Hand it over once Fadi has counted it.",
          "I'll put him through and then follow it up.",
          "Take it on if the dye house confirms it.",
          "Could you hold on while I look into it?"
        ] },

      { id: "3a", section: 3, sectionTitle: "Say it yourself", letter: "A",
        concepts: ["listen", "write"],
        kind: "dictation", task: null, n: 0,
        prompt: "Listen and type what you hear. All from the handover in 2A.",
        items: [
          { answer: "The pallets are made up but not counted.",
            why: "Two states, and the whole first instruction turns on the difference between them." },
          { answer: "Do not hand them over until they have been counted.",
            why: "Pronoun object, so the split is compulsory. In speech it runs as <i>han-them-over</i>." },
          { answer: "I would rather not guess in a handover.",
            why: "<i>Would rather not</i> — the structure from Unit 2, negated." },
          { answer: "Take the delivery but do not sign the note yourself.",
            why: "Two actions separated by <i>but</i>, which is what stops the second being forgotten." },
          { answer: "Marwan is covering for Ghada until Thursday.",
            why: "Inseparable verb, and the end date that stops the question being asked again." }
        ],
        closer: "<p>Notice that every instruction in that handover was specific enough to be disobeyed. <i>Be careful with the pallets</i> cannot be; <i>do not hand them over until they are counted</i> can.</p>" }

    ]
  };
})();
