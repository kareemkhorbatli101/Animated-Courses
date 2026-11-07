/* Unit 4 · Order Status and Progress — LESSON 4 · MEETINGS & CALLS */
(function () {
  window.PAGE = {
    id: "u04-l4", unit: "u04", block: "l4", up: "../", tab: "AT WORK",
    objective: "Chase an order on the phone, and keep the two th sounds apart",
    next: "l5.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Chasing without annoying", letter: "A",
        concepts: ["listen", "escalation"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six things you hear when chasing an order. Choose the reply that moves it forward.",
        note: { kind: "life", title: "Chase the next step, not the whole order",
                body: "<p>Asking <i>when will it arrive</i> invites a guess. Asking <i>what has to happen next, and when</i> gets you something checkable — and the person on the other end can actually answer it.</p>" },
        items: [
          { who: "ziad", say: "It should be with you soon.",
            options: [
              { text: "What has to happen before it leaves you?", correct: true,
                why: "Asks for the next step rather than the end date. <i>Soon</i> cannot be checked; a step can." },
              { text: "How soon?", why: "Invites a vaguer version of the same guess." },
              { text: "Thank you.", why: "Ends the call with exactly the information you started with." } ] },
          { who: "ziad", say: "I'll chase it and come back to you.",
            options: [
              { text: "Thank you — by what time today?", correct: true,
                why: "Accepts the offer and attaches a time to it. Without one, <i>come back to you</i> has no deadline." },
              { text: "Please do.", why: "Agrees to something with no shape." },
              { text: "You said that last week.", why: "True, and it starts an argument rather than getting a time." } ] },
          { who: "nour", say: "Has anything left the workshop yet?",
            options: [
              { text: "Not yet — the first thousand is packed but not loaded.", correct: true,
                why: "Answers the question, then gives the state that makes the answer useful." },
              { text: "We've been very busy.", why: "Explains instead of answering, which always reads as avoidance." },
              { text: "It's on the way.", why: "Not true if nothing has left, and the delivery note will prove it." } ] },
          { who: "rana", say: "You told me Friday. It's now Monday.",
            options: [
              { text: "You're right, and I should have told you on Wednesday when I knew.", correct: true,
                why: "Concedes both the slip and the silence. The second is usually what the client is actually angry about." },
              { text: "The dye house let us down.", why: "A reason offered before an acknowledgement reads as an excuse." },
              { text: "These things happen.", why: "Minimises something that has cost her money." } ] },
          { who: "lina", say: "Do we have proof of delivery for 4412?",
            options: [
              { text: "Not yet — I've asked the carrier for the signed note.", correct: true,
                why: "Says what is missing and what has been done about it. Both halves matter to someone reconciling invoices." },
              { text: "It was delivered last Tuesday.", why: "That is what the carrier said. Proof of delivery is the document, not the claim." },
              { text: "Probably.", why: "An accounts question needs a yes, a no, or a date." } ] },
          { who: "ziad", say: "The yarn is in transit now.",
            options: [
              { text: "Good — do you have a consignment number I can track?", correct: true,
                why: "Converts a status into something you can verify without ringing him again." },
              { text: "When will it arrive?", why: "Reasonable, and it accepts <i>in transit</i> without evidence." },
              { text: "That's a relief.", why: "Relief before proof is how a second delay catches you unprepared." } ] }
        ] },

      { id: "1b", section: 1, sectionTitle: "Chasing without annoying", letter: "B",
        concepts: ["listen", "people"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six more. Here the right answer asks for help, or gives it, without anyone losing face.",
        items: [
          { who: "fadi", say: "I've called them three times and got nowhere.",
            options: [
              { text: "Then it's mine to escalate. I'll call Ziad myself today.", correct: true,
                why: "Takes the task rather than the blame, and names who and when." },
              { text: "Try again tomorrow.", why: "Sends him back to a method that has already failed three times." },
              { text: "Why didn't you say earlier?", why: "He is saying it now. The question converts a handover into a reprimand." } ] },
          { who: "nour", say: "Is there anything you need from me on this?",
            options: [
              { text: "Yes — could you call the dye house? They'll take it from you.", correct: true,
                why: "A direct offer deserves a direct answer. Saying <i>no, I'm fine</i> here is how people stay stuck." },
              { text: "No, I'll manage.", why: "Declines the one thing that would unblock it." },
              { text: "Everything's under control.", why: "Untrue, and it closes a door that was being held open." } ] },
          { who: "rana", say: "Can you at least tell me what's holding it up?",
            options: [
              { text: "The dark blue yarn. Everything else is finished and packed.", correct: true,
                why: "Names the single blocker and shows that the rest is done, which is more reassuring than an apology." },
              { text: "A supplier issue.", why: "Technically true and deliberately empty." },
              { text: "I'd rather not say.", why: "Invites her to imagine something worse than the truth." } ] },
          { who: "lina", say: "I can't reconcile this invoice without the delivery note.",
            options: [
              { text: "I'll get it today. If the carrier can't produce it, I'll tell you by five.", correct: true,
                why: "Commits to the task and to telling her if it fails, which is the half most people leave out." },
              { text: "It must be somewhere.", why: "Hands the problem back without moving it." },
              { text: "Accounts usually have it.", why: "She is accounts. The sentence points at her and means nothing." } ] },
          { who: "ziad", say: "I'm sorry — I should have called you on Wednesday.",
            options: [
              { text: "I'd rather have known then. What can you tell me now?", correct: true,
                why: "Accepts the apology without dismissing it, and moves straight to information." },
              { text: "Yes, you should have.", why: "True, and it spends the only moment where he was volunteering something." },
              { text: "Don't worry about it.", why: "Teaches him that silence costs nothing." } ] },
          { who: "fadi", say: "If the yarn comes tomorrow, can we still make Monday?",
            options: [
              { text: "Yes, but only with the two extra people on Friday.", correct: true,
                why: "Answers the conditional question with its own condition, which is the honest shape of the answer." },
              { text: "Probably.", why: "A word that will be remembered as a yes." },
              { text: "Let's see what happens.", why: "Declines to plan for the case he has just described." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Take notes from a chasing call", letter: "A",
        concepts: ["listen", "write"],
        kind: "notes", task: "listen-note-conversation", cefr: "B1", n: 8,
        prompt: "Nour calls the dye house. Fill in the form as you listen.",
        audio: { track: "u04-call-1", label: "Call: Nour and Ziad, the dark blue yarn",
          lines: [
            { who: "nour", text: "Ziad, it is Nour at Orontes. I am calling about the dark blue for order 4417." },
            { who: "ziad", text: "I thought you might be." },
            { who: "nour", text: "Fadi has called three times since Monday and been told tomorrow each time. I am not calling to complain about that. I am calling to find out what actually has to happen before that yarn leaves you." },
            { who: "ziad", text: "That is fair. The honest answer is that your lot is behind two others in the same tank, and the tank has been down for maintenance since the sixth." },
            { who: "nour", text: "Since the sixth. So nine days." },
            { who: "ziad", text: "Yes. It came back on this morning. Your lot goes in tonight and comes out Thursday morning." },
            { who: "nour", text: "Thursday morning. And then?" },
            { who: "ziad", text: "Drying and finishing, which is a day. So Friday, and I can have it on a van to you Friday afternoon." },
            { who: "nour", text: "That reaches us Friday evening. Fadi needs two days after that, so we dispatch Monday and you have not cost us the week I feared." },
            { who: "ziad", text: "I should have told you on the sixth. If I had, you would have planned round it." },
            { who: "nour", text: "Yes, I would. Will you give me the van number on Friday so I can stop chasing?" },
            { who: "ziad", text: "I will send it as soon as it is loaded." } ] },
        title: "Call notes — Homs dye house, 4417 dark blue",
        lines: [
          "Reason for delay: tank down for ___ ",
          "Tank out of service since the ___ — that is nine days",
          "Our lot is behind ___ others in the same tank",
          "Tank back in service: ___ morning",
          "Our yarn goes in: ___",
          "Comes out: ___ morning",
          "On a van to us: ___ afternoon",
          "Ziad will send the ___ number once loaded"
        ],
        gaps: [
          { answer: "maintenance", why: "The cause, given once and plainly after she takes the complaint off the table." },
          { answer: "sixth", why: "The date, which lets her convert it into nine days herself — and she does, out loud." },
          { answer: "two", why: "The queue position. Without it the promise of Thursday has nothing behind it." },
          { answer: "this", why: "<i>It came back on this morning</i> — the first piece of actual good news in the call." },
          { answer: "tonight", why: "The next step, which is what she rang to establish." },
          { answer: "Thursday", why: "Out of the tank. Not the same as ready, which is the next line." },
          { answer: "Friday", why: "A day of drying and finishing sits between coming out and going on the van." },
          { answer: "van", why: "Something she can check without calling him again. The point of the last exchange." }
        ],
        note: { kind: "life", title: "She asked for the chain, not the date",
                body: "<p>Her question was <i>what has to happen before that yarn leaves you</i>. The answer gave her five steps with times on them, and from those she worked out Monday herself. A question that asks for the end date would have got <i>Friday, probably</i>.</p>" },
        explain: { terms: [
          { en: "to be behind", gloss: "to be later in a queue than something else", ar: "في الدور بعد" },
          { en: "to plan round something", gloss: "to arrange things so a problem matters less", ar: "التخطيط لتفادي" }
        ] } },

      { id: "2b", section: 2, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["sound", "speak"],
        kind: "minimal-pairs", task: "pronounce-pair", n: 4,
        focus: "<p>English spells two different sounds with the same <b>th</b>. The tongue is in the same place for both — lightly between the teeth — and the only difference is the voice.</p><p><b>/θ/</b> no voice: <i>thirty, three, month, both</i>.<br><b>/ð/</b> voice on: <i>this, that, they, there, with</i>.</p><p>Almost every common <i>th</i> word that is a grammar word — <i>the, this, they, them, there</i> — is voiced. Almost every number is not.</p>",
        items: [
          { say: "thirty", options: [
            { text: "thirty", correct: true, why: "/θ/ — no voice. <i>Thirty days from the invoice date.</i>" },
            { text: "dirty", why: "/d/ — the tongue goes behind the teeth, not between them. <i>Dirty days</i> is not a payment term." } ] },
          { say: "three", options: [
            { text: "three", correct: true, why: "/θ/ again, unvoiced. Numbers almost always take this one." },
            { text: "tree", why: "/t/ — the commonest substitution, and <i>tree weeks</i> is instantly recognisable as a mistake." } ] },
          { say: "they", options: [
            { text: "they", correct: true, why: "/ð/ — voice on. Put a finger on your throat and it buzzes." },
            { text: "day", why: "/d/ — no tongue between the teeth. <i>They delivered</i> and <i>day delivered</i> are a long way apart." } ] },
          { say: "with", options: [
            { text: "with", correct: true, why: "/ð/ at the end in British English, and it is almost swallowed. <i>With the delivery note.</i>" },
            { text: "wit", why: "/t/ — a hard stop where there should be a soft buzz." } ] }
        ] },

      { id: "2c", section: 2, sectionTitle: "Hear the difference", letter: "C",
        concepts: ["speak", "sound"],
        kind: "repeat", task: "pronounce-pair", cefr: "B1", n: 4,
        prompt: "Say each line. Each one switches between the voiced and unvoiced th several times.",
        speaker: "nour",
        lines: [
          "Thirty days from the third of this month.",
          "They have had the yarn there for three weeks.",
          "Both of these consignments cleared on the thirteenth.",
          "There is nothing further to send them this Thursday."
        ] },

      { id: "3a", section: 3, sectionTitle: "Say it yourself", letter: "A",
        concepts: ["listen", "write"],
        kind: "dictation", task: null, n: 0,
        prompt: "Listen and type what you hear. All from the call in 2A.",
        items: [
          { answer: "The tank has been down for maintenance since the sixth.",
            why: "<i>Since</i> plus a date. Nine days is what you calculate from it, not what he says." },
          { answer: "Your lot is behind two others in the same tank.",
            why: "<i>Behind</i> meaning later in a queue. <i>The same tank</i> is why the queue exists at all." },
          { answer: "It goes in tonight and comes out Thursday morning.",
            why: "Two steps in one sentence. <i>Thursday</i> and <i>three</i> both start with the unvoiced th." },
          { answer: "I should have told you on the sixth.",
            why: "<i>Should have</i> for a past thing that did not happen. In speech it runs together as <i>should've</i>." },
          { answer: "I will send it as soon as it is loaded.",
            why: "Present after <i>as soon as</i>, even though both halves are future." }
        ],
        closer: "<p>The most useful sentence in that call was <b>I should have told you on the sixth</b>. He lost nothing by saying it, and Nour will believe his next date because he said it.</p>" }

    ]
  };
})();
