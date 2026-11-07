/* Unit 4 · Order Status and Progress — AT WORK
   Ask for help without losing face. */
(function () {
  window.PAGE = {
    id: "u04-oc", unit: "u04", block: "oc", up: "../", tab: "AT WORK",
    objective: "Ask for help in a way that reads as competence rather than failure",
    next: "tw.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "When to ask", letter: "A",
        concepts: ["listen", "escalation"],
        kind: "notes", task: "listen-note-monologue", cefr: "B1", n: 6,
        prompt: "Nour briefs a new supervisor on when to escalate. Fill in the form as you listen.",
        audio: { track: "u04-brief", label: "Briefing — when to ask for help",
          lines: [
            { who: "nour", text: "You have been here a month, so this is the conversation I have with everyone at a month." },
            { who: "nour", text: "The thing people get wrong is not asking too often. It is asking too late. In four years here nobody has been in trouble for escalating something early, and three people have been in trouble for escalating it on the morning it became impossible." },
            { who: "nour", text: "So here is the rule I use. If you have tried the same thing twice and it has not worked, stop. Do not try it a third time." },
            { who: "nour", text: "When you come to me, bring three things. What you have already done, what it produced, and the one thing you want me to do. If you bring those three, I can act in two minutes." },
            { who: "nour", text: "What I do not want is the whole story from the beginning. I do not need to know what the dye house said on Monday unless it changes what I do today." },
            { who: "nour", text: "And do not apologise for asking. You are not interrupting my work. Unblocking you is my work." },
            { who: "nour", text: "One last thing. If I am away, go to Samer. Do not wait for me. A day lost waiting for the right person is still a day lost." } ] },
        title: "When to escalate — notes",
        lines: [
          "The common mistake: asking too ___ , not too often",
          "Rule: if the same thing has failed ___ , stop",
          "Bring three things: what you have ___ , what it produced, and what you want",
          "Do not bring: the whole ___ from the beginning",
          "Do not ___ for asking",
          "If Nour is away, go to ___"
        ],
        gaps: [
          { answer: "late", why: "She corrects the assumption before stating the rule, which is why the rule lands." },
          { answer: "twice", why: "A number, not a feeling. <i>Twice</i> is checkable the moment it happens." },
          { answer: "done", why: "The first of the three, and the one that turns a request into a handover." },
          { answer: "story", why: "<i>Unless it changes what I do today</i> is the test she gives for what to include." },
          { answer: "apologise", why: "<i>Unblocking you is my work</i> — the sentence that gives the rule its authority." },
          { answer: "Samer", why: "And the reason: a day lost waiting for the right person is still a day lost." }
        ],
        note: { kind: "life", title: "The three things",
                body: "<p>What you have done. What it produced. What you want. In that order, this is the whole of asking for help well — in an email, in a corridor, or in a meeting.</p>" },
        explain: { terms: [
          { en: "to escalate", gloss: "to pass a problem to someone with more authority", ar: "تصعيد الأمر" },
          { en: "to unblock", gloss: "to remove what is stopping someone working", ar: "إزالة العائق" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "When to ask", letter: "B",
        concepts: ["listen", "people"],
        kind: "talk", task: "listen-discussion", cefr: "B1", n: 8,
        prompt: "Three people asking for help, well and badly. Listen, then answer.",
        speaker: "nour",
        speakerNote: "with Fadi, Lina and Samer",
        audio: { track: "u04-asking", label: "Three requests",
          lines: [
            { who: "fadi", text: "Nour, I need five minutes. I have called the Homs dye house three times since Monday about the dark blue. Each time they have said tomorrow and nothing has come. I would like you to call Ziad directly today. Nothing else on 4417 can move until that yarn is released." },
            { who: "nour", text: "Good. That is three sentences and I know exactly what to do. I will call him before eleven." },
            { who: "fadi", text: "Thank you. Sorry to put it on you." },
            { who: "nour", text: "Do not apologise. You tried it three times, which is once more than you needed to." },
            { who: "lina", text: "Can I ask something? It is probably nothing. I have been trying to reconcile the 4412 invoice and there is a discrepancy, and I do not want to waste your time, and it might be my error, but the carrier's figure does not match ours and I have looked at it three times and I am starting to wonder whether the delivery note was ever returned, although it might have been filed under the old reference, which has happened before." },
            { who: "nour", text: "Stop. Start again in three sentences." },
            { who: "lina", text: "The 4412 invoice does not reconcile. The signed delivery note has never come back from the carrier. Could you ask them for it, because they do not answer me." },
            { who: "nour", text: "Thank you. That took eleven seconds and the first version took a minute. Yes, I will ask them." },
            { who: "lina", text: "I was trying not to waste your time." },
            { who: "nour", text: "I know. The apology was the part that wasted it." },
            { who: "samer", text: "Mine is different. I do not need you to do anything. I want to tell you something before you hear it elsewhere. Cedar Linens have gone quiet. Two emails, no reply, nine days. I am not worried yet and I am not asking you to act." },
            { who: "nour", text: "Then why tell me?" },
            { who: "samer", text: "Because if they are about to go somewhere else, you would rather know on day nine than on day thirty." },
            { who: "nour", text: "Yes. And that is the third kind — not a request at all, just information arriving early enough to be useful. Keep doing that." },
            { who: "fadi", text: "Can I ask about the rule? You said twice. What if the second attempt is clearly going to work and just needs another day?" },
            { who: "nour", text: "Then say that to me rather than deciding it alone. Twice and tell me is not the same as twice and stop. I am not taking the job off you; I am asking to know it exists." },
            { who: "fadi", text: "That is easier than I thought it was." },
            { who: "nour", text: "It usually is. The only version that costs you anything is the one where I find out late." } ] },
        items: [
          { q: "What makes Fadi's request work?",
            options: [
              { text: "What he tried, what it produced, and one thing he wants.", correct: true,
                why: "Nour names it: three sentences and she knows what to do." },
              { text: "He explains the whole history.", why: "He gives only the part that changes today's action." },
              { text: "He apologises first.", why: "He apologises afterwards, and she tells him not to." } ] },
          { q: "Why does Nour tell him not to apologise?",
            options: [
              { text: "Because unblocking him is her job.", correct: true,
                why: "From the briefing, now applied: the apology treats her work as an imposition." },
              { text: "Because he was not at fault.", why: "Fault is never discussed." },
              { text: "Because he was too slow.", why: "She says he tried once more than he needed to, which is a different point." } ] },
          { q: "What is wrong with Lina's first version?",
            options: [
              { text: "It buries the request inside hedging and history.", correct: true,
                why: "The actual request — ask the carrier for the note — is never reached in the first version." },
              { text: "It is about the wrong order.", why: "The order is the right one." },
              { text: "She should not have asked at all.", why: "Nour answers the second version immediately." } ] },
          { q: "How long did the good version take?",
            options: [
              { text: "About eleven seconds, against a minute.", correct: true,
                why: "Nour gives both figures, which is what makes the lesson concrete rather than a preference." },
              { text: "The same time.", why: "She contrasts them explicitly." },
              { text: "Longer, but clearer.", why: "Shorter and clearer." } ] },
          { q: "What does Nour say wasted her time?",
            options: [
              { text: "The apology, not the question.", correct: true,
                why: "<i>I know. The apology was the part that wasted it.</i>" },
              { text: "The question itself.", why: "She answers it without hesitation." },
              { text: "The discrepancy.", why: "That is the thing worth raising." } ] },
          { q: "How is Samer's contribution different?",
            options: [
              { text: "He wants nothing done; he is passing on early information.", correct: true,
                why: "He says so twice, which is what stops Nour treating it as a request." },
              { text: "He is asking for help with Cedar Linens.", why: "He says explicitly that he is not." },
              { text: "He is reporting a failure.", why: "Nothing has failed yet, which is the point." } ] },
          { q: "What is his argument for telling her now?",
            options: [
              { text: "She would rather know on day nine than day thirty.", correct: true,
                why: "The value of the information is in its earliness, not its content." },
              { text: "She can fix it.", why: "He does not suggest there is anything to fix." },
              { text: "It is company policy.", why: "No policy is mentioned." } ] },
          { q: "What does Nour call this third kind?",
            options: [
              { text: "Information arriving early enough to be useful.", correct: true,
                why: "And she asks him to keep doing it, which is the only instruction she gives in the whole scene." },
              { text: "An escalation.", why: "She distinguishes it from one." },
              { text: "A complaint.", why: "Nobody complains about anything." } ] }
        ],
        explain: { terms: [
          { en: "to go quiet", gloss: "to stop replying", ar: "ينقطع التواصل" },
          { en: "discrepancy", gloss: "a difference between two figures that should match", ar: "تباين" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Ask without losing face", letter: "A",
        concepts: ["speak", "escalation"],
        kind: "phrases", task: null, n: 0,
        prompt: "The phrases that make a request read as competence. Click each one.",
        note: { kind: "life", title: "Why hedging backfires",
                body: "<p><em>It is probably nothing</em> and <em>I do not want to waste your time</em> are meant to be polite. They tell the listener to pay less attention, and then you have to work to get it back.</p>" },
        text: "Nour, I need five minutes. I have called the Homs dye house three times since Monday. Each time they have said tomorrow and nothing has come. I would like you to call Ziad directly today. Nothing else on 4417 can move until that yarn is released. The 4412 invoice does not reconcile. The signed delivery note has never come back from the carrier. Could you ask them for it, because they do not answer me. I do not need you to do anything. I want to tell you something before you hear it elsewhere.",
        phrases: [
          { text: "Nour, I need five minutes.",
            why: "Names the size of the ask before anything else. The listener can say <i>not now, at four</i> instead of half-listening." },
          { text: "I have called the Homs dye house three times since Monday.",
            why: "What you have already done, with a number. This is the sentence that makes the whole request read as a handover." },
          { text: "I would like you to call Ziad directly today.",
            why: "One thing, one person, one day. A request that names the action is one the other person can finish in two minutes." },
          { text: "Nothing else on 4417 can move until that yarn is released.",
            why: "Says what is blocked. It is the difference between a favour and a priority." },
          { text: "Could you ask them for it, because they do not answer me.",
            why: "The <i>because</i> is doing real work: it explains why this needs her specifically, rather than more effort from Lina." },
          { text: "I do not need you to do anything. I want to tell you something before you hear it elsewhere.",
            why: "Labels the message so it is not mistaken for a request. Information given this way costs the listener nothing and is remembered." }
        ],
        after: "<p>Not one of these begins with an apology, and not one of them is longer than a line.</p>" },

      { id: "2b", section: 2, sectionTitle: "Ask without losing face", letter: "B",
        concepts: ["escalation", "people"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table.",
        caption: "Three kinds of message, and what each needs",
        head: ["Kind", "What it must contain", "What to leave out"],
        rows: [
          ["A request for help", "What you tried, what it produced, what you ___", "The history that does not change today"],
          ["A status update", "What is done, what is blocked, the new ___", "Reasons offered before the facts"],
          ["Early information", "What you have noticed and that you need ___ done", "Any suggestion that it is urgent"],
          ["All three", "A first line that says which of the three it ___", "The apology"]
        ],
        gaps: [
          { answer: "want", why: "The third of Nour's three things, and the one Lina's first version never reached." },
          { answer: "date", why: "A status update without a date is a description, not an update." },
          { answer: "nothing", why: "Samer says it twice, which is what stops it being read as a request." },
          { answer: "is", why: "<i>I need five minutes</i>, <i>I do not need you to do anything</i> — the first line tells the reader how to listen." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Ask without losing face", letter: "C",
        concepts: ["recall", "escalation"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people asking. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Rami", detail: "Tries the same supplier contact five times over two weeks before telling anyone." },
          { id: "c2", label: "Dalia", detail: "Opens with <i>sorry, this is probably nothing, I do not want to waste your time</i>." },
          { id: "c3", label: "Wael", detail: "Explains the full history of a problem from the first email onwards." },
          { id: "c4", label: "Sana", detail: "Notices a client has gone quiet and decides to wait until there is something definite." }
        ],
        takeaways: [
          { text: "Twice is enough. The third attempt is the one to escalate instead.", caseId: "c1",
            why: "Nobody at Orontes has been in trouble for escalating early. Three people have been for escalating on the morning it became impossible." },
          { text: "The apology is the part that wastes the time.", caseId: "c2",
            why: "Hedging tells the listener to pay less attention, and then the real question arrives to a half-closed door." },
          { text: "Bring only the history that changes what happens today.", caseId: "c3",
            why: "What the dye house said on Monday is interesting. It is only worth saying if it alters this morning's decision." },
          { text: "Information is worth most while it is still vague.", caseId: "c4",
            why: "Day nine is useful and day thirty is a post-mortem. Sana is holding the thing until it stops being valuable." }
        ],
        closer: "<p>Next unit: the goods have arrived and the invoice has not been paid, which is where <i>ever</i>, <i>already</i> and <i>yet</i> start earning their keep.</p>" }

    ]
  };
})();
