/* Unit 5 · Following Up and Payment — LESSON 4 · MEETINGS & CALLS */
(function () {
  window.PAGE = {
    id: "u05-l4", unit: "u05", block: "l4", up: "../", tab: "AT WORK",
    objective: "Chase a payment by telephone, and hear the difference a contraction makes",
    next: "l5.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Chasing by telephone", letter: "A",
        concepts: ["listen", "money"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six things you hear on a chasing call. Choose the reply that keeps it moving and keeps it civil.",
        note: { kind: "life", title: "The accounts office is not the client",
                body: "<p>The person answering usually did not decide anything. They can tell you where the invoice is in their process, which is the only thing you actually need.</p>" },
        items: [
          { who: "rana", say: "We never received that invoice.",
            options: [
              { text: "I'll send it again now — which address should I use?", correct: true,
                why: "Fixes it in one move and collects the information that stops it happening again." },
              { text: "It was definitely sent on the twelfth.", why: "Argues about the past instead of fixing the present." },
              { text: "That's not possible.", why: "It is entirely possible, and saying so ends any chance of help." } ] },
          { who: "rana", say: "It's with our manager for approval.",
            options: [
              { text: "Thank you — do you know roughly how long that usually takes?", correct: true,
                why: "Accepts the answer and asks for the one thing that turns it into a date." },
              { text: "Could you hurry them up?", why: "Asks them to pressure their own manager on your behalf." },
              { text: "When will it be paid?", why: "They have just told you they do not control that." } ] },
          { who: "rana", say: "We pay on the last Thursday of the month.",
            options: [
              { text: "That's useful — so it would go in this month's run?", correct: true,
                why: "Converts a policy into a date, and confirms it rather than assuming." },
              { text: "That's not what your terms say.", why: "Turns a helpful disclosure into an argument about paperwork." },
              { text: "Fine.", why: "Does not check whether this invoice made the cut-off." } ] },
          { who: "rana", say: "I can't discuss this — you'll have to speak to my manager.",
            options: [
              { text: "Of course. Could you give me a name and a good time to call?", correct: true,
                why: "Accepts the limit and leaves with two useful things rather than none." },
              { text: "I've already tried that.", why: "Possibly true, and it puts the obstacle back on the person who cannot move it." },
              { text: "Why not?", why: "Asks them to justify a rule they did not make." } ] },
          { who: "rana", say: "There's a query on it — the quantity doesn't match.",
            options: [
              { text: "Tell me what you have and I'll check it today.", correct: true,
                why: "A query is good news: it names the blocker. Offering to do the checking removes their reason to delay." },
              { text: "The quantity is correct.", why: "Before you have seen what they have. It may be yours that is wrong." },
              { text: "Then pay the part that isn't queried.", why: "Reasonable later, and it skips finding out whether you made an error." } ] },
          { who: "rana", say: "I'd rather you didn't call again about this.",
            options: [
              { text: "I understand. Could we agree a date, and I'll write instead?", correct: true,
                why: "Accepts the request, keeps the chase alive, and moves it to a channel they have not objected to." },
              { text: "I'll call when I need to.", why: "Wins the sentence and loses the account." },
              { text: "All right.", why: "Agrees to stop chasing a debt, which is not yours to agree to." } ] }
        ] },

      { id: "1b", section: 1, sectionTitle: "Chasing by telephone", letter: "B",
        concepts: ["listen", "people"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six more. Here you are inside your own team, offering or taking a suggestion.",
        items: [
          { who: "nour", say: "Any ideas on 4412? It's forty days out.",
            options: [
              { text: "Could we try calling their accounts office directly?", correct: true,
                why: "<i>Could we</i> offers a suggestion without claiming it is the answer. It is the safest opening in a team discussion." },
              { text: "You should have escalated it weeks ago.", why: "A judgement about the past instead of an idea about now." },
              { text: "I don't know.", why: "True perhaps, and it ends your turn with nothing in it." } ] },
          { who: "lina", say: "I've written twice and had nothing back.",
            options: [
              { text: "What if we asked Samer to mention it to Rana?", correct: true,
                why: "<i>What if we…</i> puts an idea on the table as a question, which makes it easy to reject without anyone losing anything." },
              { text: "Write again.", why: "The third attempt at a method that has failed twice." },
              { text: "That's your area.", why: "Declines to help with a problem that was brought to the group." } ] },
          { who: "fadi", say: "Should we stop shipping to them until it's paid?",
            options: [
              { text: "That's one option, though it might cost us the account.", correct: true,
                why: "Takes the suggestion seriously and names the cost. Neither dismissing nor agreeing." },
              { text: "No.", why: "Closes a contribution someone was brave enough to make." },
              { text: "Yes, let's do that.", why: "Agrees to something consequential without weighing it." } ] },
          { who: "samer", say: "I could ask Rana informally when I call about the next order.",
            options: [
              { text: "That might work better than a formal letter at this stage.", correct: true,
                why: "Supports the idea and says why. Agreement with a reason is worth more than agreement." },
              { text: "It's not your job.", why: "True on the org chart and useless to the problem." },
              { text: "If you want.", why: "Technically permission, and it leaves him unsure whether anyone thinks it is wise." } ] },
          { who: "nour", say: "Lina, what would you do if it were your decision?",
            options: [
              { text: "I'd call tomorrow, and write on Friday if nothing comes of it.", correct: true,
                why: "A direct question deserves a direct plan, with a fallback and a date." },
              { text: "Whatever you think is best.", why: "Declines the invitation to contribute that was just extended." },
              { text: "I'm not sure it's my decision.", why: "She has just been told it is, for the purposes of the question." } ] },
          { who: "fadi", say: "Sorry, that was probably a stupid suggestion.",
            options: [
              { text: "It wasn't — it's the only one that gets their attention.", correct: true,
                why: "Rescues a contribution. A team where suggestions get apologised for stops getting suggestions." },
              { text: "It's fine.", why: "Lets the apology stand, which quietly confirms it." },
              { text: "Don't worry about it.", why: "Kind, dismissive, and it teaches him to stay quiet next time." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Take notes from a chasing call", letter: "A",
        concepts: ["listen", "write"],
        kind: "notes", task: "listen-note-conversation", cefr: "B1", n: 8,
        prompt: "Lina calls Levant Home's accounts office. Fill in the form as you listen.",
        audio: { track: "u05-call-1", label: "Call: Lina and Levant Home accounts",
          lines: [
            { who: "lina", text: "Good morning. Lina Al-Masri from Orontes Textiles. I am calling about invoice 4412." },
            { who: "rana", text: "Let me find it. Four four one two. Yes, I have it." },
            { who: "lina", text: "Thank you. I have written twice and not heard back, so I wanted to check there was nothing wrong at our end." },
            { who: "rana", text: "There is a query on it, actually. The quantity does not match our goods received note. You have invoiced four thousand metres and we have three thousand eight hundred recorded." },
            { who: "lina", text: "Two hundred metres. Thank you — that is exactly what I needed to know. Nobody told us there was a query." },
            { who: "rana", text: "I raised it on the twentieth. It should have gone to your sales contact." },
            { who: "lina", text: "It did not reach me. I will find out where it went. Can I ask which document you are counting from?" },
            { who: "rana", text: "Our warehouse goods received note, signed on the fourteenth." },
            { who: "lina", text: "And our delivery note says four thousand, signed the same day. So one of the two is wrong, and I will check ours today." },
            { who: "rana", text: "If yours is right, I will release the whole invoice. If ours is right, I will need a credit note." },
            { who: "lina", text: "Understood. Either way you will hear from me by Thursday. If we do owe you a credit note, would you pay the rest meanwhile?" },
            { who: "rana", text: "Yes, I can release three thousand eight hundred metres' worth now and hold the balance." },
            { who: "lina", text: "That would help. Thank you for being straight with me." } ] },
        title: "Call notes — 4412, Levant Home accounts",
        lines: [
          "Query exists: quantity does not match their goods ___ note",
          "We invoiced ___ metres",
          "They recorded ___ metres",
          "Difference: ___ metres",
          "Query was raised on the ___ , to our sales contact",
          "Their document is signed on the ___",
          "Lina will confirm by ___",
          "Meanwhile they will release the ___ and hold the balance"
        ],
        gaps: [
          { answer: "received", why: "<i>Goods received note</i> — the receiving end's own count, which is the document the dispute turns on." },
          { answer: "4000", why: "Our figure. Write both figures, not the difference, because the difference is a conclusion." },
          { answer: "3800", why: "Theirs. English says <i>three thousand eight hundred</i>, which is easy to mishear as 3,080." },
          { answer: "200", why: "The arithmetic Lina does out loud, which is also how she confirms she heard it right." },
          { answer: "twentieth", why: "The date matters: it means the query predates both her reminders." },
          { answer: "fourteenth", why: "The same day as our delivery note, which is what makes it a real conflict rather than a timing issue." },
          { answer: "Thursday", why: "She commits to a day before knowing the answer, which is what makes the call end well." },
          { answer: "rest", why: "Part payment now, balance held. The offer Lina asked for and did not assume." }
        ],
        note: { kind: "life", title: "The query was the whole point",
                body: "<p>Two written reminders got nothing because they answered a question nobody was asking. One telephone call found a two-hundred-metre discrepancy raised three weeks earlier that never reached the right person. A chase is often an information problem wearing a money problem's clothes.</p>" },
        explain: { terms: [
          { en: "goods received note", gloss: "the buyer's record of what actually arrived", ar: "إشعار استلام البضاعة" },
          { en: "to raise a query", gloss: "to formally question something", ar: "إثارة استفسار" },
          { en: "to release a payment", gloss: "to allow it to go out", ar: "الإفراج عن الدفعة" }
        ] } },

      { id: "2b", section: 2, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["sound", "speak"],
        kind: "minimal-pairs", task: "pronounce-pair", n: 4,
        focus: "<p>English squeezes <em>I will</em>, <em>I would</em> and <em>I am</em> into one syllable, and the whole meaning sits in a sound most learners drop.</p><p><b>I'll</b> = I will, a promise. <b>I'd</b> = I would, a preference or a hypothesis. <b>I've</b> = I have, something already done.</p><p>Said without the contraction, <em>I send it</em> means you send things generally. <em>I'll send it</em> means you are about to.</p>",
        items: [
          { say: "I'll check it today", options: [
            { text: "I'll check it today", correct: true, why: "<i>I will</i> — a promise, made now. The <i>l</i> is short but it is the whole commitment." },
            { text: "I check it today", why: "A habit, or nothing at all. A client hearing this does not know you have agreed to anything." } ] },
          { say: "I'd rather write", options: [
            { text: "I'd rather write", correct: true, why: "<i>I would</i> — a preference. <i>Would rather</i> from Unit 2, in its contracted form." },
            { text: "I rather write", why: "Not English. <i>Rather</i> needs <i>would</i> in front of it, even when the <i>would</i> is almost silent." } ] },
          { say: "I've written twice", options: [
            { text: "I've written twice", correct: true, why: "<i>I have</i> — the present perfect, contracted. The <i>v</i> is the only sign of it." },
            { text: "I written twice", why: "Not English. Dropping the auxiliary removes the tense altogether." } ] },
          { say: "I'd have called", options: [
            { text: "I'd have called", correct: true, why: "<i>I would have</i> — about a past that did not happen. In speech it runs together as <i>I'd've</i>." },
            { text: "I have called", why: "A real past. The difference between what you did and what you would have done, in one dropped sound." } ] }
        ] },

      { id: "2c", section: 2, sectionTitle: "Hear the difference", letter: "C",
        concepts: ["speak", "sound"],
        kind: "repeat", task: "pronounce-pair", cefr: "B1", n: 4,
        prompt: "Say each line. Keep the contractions short, and do not let them disappear.",
        speaker: "lina",
        lines: [
          "I'll check our delivery note today and I'll call you back.",
          "I'd rather send a credit note than argue about two hundred metres.",
          "I've written twice and I've had no reply either time.",
          "I'd have raised it sooner if I'd known about the query."
        ] },

      { id: "3a", section: 3, sectionTitle: "Say it yourself", letter: "A",
        concepts: ["listen", "write"],
        kind: "dictation", task: null, n: 0,
        prompt: "Listen and type what you hear. All from the call in 2A.",
        items: [
          { answer: "I wanted to check there was nothing wrong at our end.",
            why: "<i>At our end</i> means on our side. It offers the fault to yourself first." },
          { answer: "The quantity does not match our goods received note.",
            why: "Three nouns in a row: goods received note. English stacks them without hyphens here." },
          { answer: "Nobody told us there was a query.",
            why: "A fact, stated without blame. The next line finds out where it went." },
          { answer: "Either way you will hear from me by Thursday.",
            why: "<i>Either way</i> covers both outcomes, which is what makes it a promise rather than a hope." },
          { answer: "Thank you for being straight with me.",
            why: "<i>Straight</i> meaning honest. Worth saying out loud when someone has just made your job easier." }
        ],
        closer: "<p>The call that solved this cost four minutes. The two letters that did not solve it cost three weeks.</p>" }

    ]
  };
})();
