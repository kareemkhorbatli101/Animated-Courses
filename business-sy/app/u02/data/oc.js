/* Unit 2 · Plans, Quotes and Promises — AT WORK
   Disagree politely in a planning meeting. */
(function () {
  window.PAGE = {
    id: "u02-oc", unit: "u02", block: "oc", up: "../", tab: "AT WORK",
    objective: "Disagree with a plan without damaging the person who made it",
    next: "tw.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "The plan for next quarter", letter: "A",
        concepts: ["listen", "deadline"],
        kind: "notes", task: "listen-note-monologue", cefr: "B1", n: 6,
        prompt: "Nour sets out the plan before the discussion. Fill in the form as you listen.",
        audio: { track: "u02-plan", label: "Planning meeting — the proposal",
          lines: [
            { who: "nour", text: "Before anyone says anything, let me put the whole plan on the table, and then I want to be argued with." },
            { who: "nour", text: "The proposal is that we raise prices by eight per cent from the first of March." },
            { who: "nour", text: "The reason is the yarn. Our raw cotton has gone up by about fourteen per cent since September and we have absorbed all of it. Our margin on the light weight is now under nine per cent, which is thinner than it has been in four years." },
            { who: "nour", text: "If we do this, I am going to write to every regular client in the second week of February, so nobody finds out from an invoice. That is three weeks' notice." },
            { who: "nour", text: "There is a risk, and I want to name it myself rather than have someone else name it for me. Cedar Linens has not placed a first order yet, and an increase lands badly on a buyer who has not bought from us before." },
            { who: "nour", text: "So the second part of the proposal is that any quotation already issued is honoured at the old price, for its full validity. That costs us something in February and it is worth it." },
            { who: "nour", text: "Right. That is the plan. Who disagrees?" } ] },
        title: "Proposal — price increase",
        lines: [
          "Increase: ___ per cent",
          "From the ___ of March",
          "Reason: raw cotton up about ___ per cent since September",
          "Current margin on the light weight: under ___ per cent",
          "Clients told in the second week of ___",
          "Quotations already issued: honoured at the ___ price"
        ],
        gaps: [
          { answer: "eight", why: "She gives the figure in her second sentence, before any of the reasoning." },
          { answer: "first", why: "<i>From the first of March</i> — a date, not a month, and the difference matters to anyone quoting in late February." },
          { answer: "fourteen", why: "The cotton rise, which is nearly double the price rise she is proposing. That gap is her argument." },
          { answer: "nine", why: "<i>Under nine per cent</i>, and she adds that it is the thinnest in four years. The comparison is what makes the number mean something." },
          { answer: "February", why: "Three weeks' notice, which she states as a figure straight afterwards." },
          { answer: "old", why: "The concession she offers before anyone asks for it — and the reason the meeting stays civil." }
        ],
        note: { kind: "life", title: "She names the objection herself",
                body: "<p>Watch what she does with Cedar Linens: she raises the weakest point in her own plan before anyone else can. It costs nothing and it changes the meeting from an attack into a discussion.</p>" },
        explain: { terms: [
          { en: "absorb a cost", gloss: "to pay an increase yourself rather than pass it on", ar: "تحمّل التكلفة" },
          { en: "to honour a price", gloss: "to keep to a price you have already given", ar: "الالتزام بالسعر" },
          { en: "notice", gloss: "warning given before a change takes effect", ar: "إشعار مسبق" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "The plan for next quarter", letter: "B",
        concepts: ["listen", "people"],
        kind: "talk", task: "listen-discussion", cefr: "B1", n: 8,
        prompt: "The discussion that followed. Listen, then answer.",
        speaker: "nour",
        speakerNote: "with Samer, Lina and Fadi",
        audio: { track: "u02-discussion", label: "Planning meeting — the discussion",
          lines: [
            { who: "samer", text: "Can I disagree with the timing rather than the increase? I think the increase is right." },
            { who: "nour", text: "Please." },
            { who: "samer", text: "March the first is three weeks after we write. For a domestic wholesaler that is plenty. For Jordan it is not, because their season buying is done in February. They will read a March increase as a February increase, and they will bring orders forward to beat it." },
            { who: "nour", text: "Which would be good for February and bad for March." },
            { who: "samer", text: "Exactly. We would be busy for a month and then empty. I would rather we went from the first of April for export clients and the first of March at home." },
            { who: "lina", text: "I am not sure I agree with splitting it. Two prices in two markets means two price lists, and when a Jordanian buyer asks why their neighbour pays less, we have no good answer." },
            { who: "samer", text: "That is fair. Although they are not neighbours — they are in different countries and they already pay different freight." },
            { who: "lina", text: "True. I still think one date is simpler, but I take the point about the season." },
            { who: "nour", text: "Fadi, you have not said anything." },
            { who: "fadi", text: "I was waiting. If export orders come forward into February, the workshop cannot take them. We are already running a double shift on the Amman order and the dyer is behind." },
            { who: "nour", text: "So the plan Samer is worried about creates a problem you would have to solve." },
            { who: "fadi", text: "Yes. And I would rather know now than in February." },
            { who: "nour", text: "Good. Then let me put it differently. First of April for export, first of March at home, and Fadi gets a say on any February order above a thousand metres." },
            { who: "samer", text: "I am happy with that." },
            { who: "lina", text: "I will still need a second price list. I am not objecting, I am telling you what it costs me." },
            { who: "nour", text: "Noted, and that is the right way to put it." },
            { who: "samer", text: "One more thing before we close. What do I tell Cedar Linens? They have a quotation at the old price, valid until the end of the month, and they have not decided." },
            { who: "nour", text: "Tell them nothing about the increase until the quotation expires. It is honoured at the old price for its full validity, so the increase is not relevant to the decision in front of her." },
            { who: "samer", text: "And if she asks directly whether prices are going up?" },
            { who: "nour", text: "Then you tell her the truth, and you tell her that her quotation is protected. Never lie to a buyer about a price. They find out, and then every other number you have ever given them is in doubt." },
            { who: "lina", text: "Can I have that in writing? Not because I doubt it — because I will be the one invoicing her in April." },
            { who: "nour", text: "I will put the whole thing in a note this afternoon. Anything else? Then we will do that." } ] },
        items: [
          { q: "What does Samer disagree with?",
            options: [
              { text: "The date the increase starts, not the increase itself.", correct: true,
                why: "He separates the two in his first sentence, which is what makes the disagreement easy to hear." },
              { text: "The size of the increase.", why: "He says the increase is right." },
              { text: "The decision to write to clients.", why: "He never objects to the notice period." } ] },
          { q: "Why does March not work for Jordanian clients, in his view?",
            options: [
              { text: "They buy for the season in February, so they would order early to beat it.", correct: true,
                why: "He gives the mechanism, not just the objection: bring orders forward." },
              { text: "They cannot afford the increase.", why: "Affordability never comes up." },
              { text: "They need longer notice by law.", why: "No legal point is made." } ] },
          { q: "What does Nour say that shows she has understood him?",
            options: [
              { text: "<i>Which would be good for February and bad for March.</i>", correct: true,
                why: "She completes his argument for him. It is the fastest way to show you have followed something." },
              { text: "<i>Please.</i>", why: "That invites him to speak; it does not show understanding yet." },
              { text: "<i>Fadi, you have not said anything.</i>", why: "That brings in a third person, later." } ] },
          { q: "How does Lina open her disagreement?",
            options: [
              { text: "<i>I am not sure I agree</i> — softened, and aimed at the proposal.", correct: true,
                why: "A hedge plus the thing itself. She disagrees with splitting the date, not with Samer." },
              { text: "By saying Samer is wrong.", why: "She never addresses him personally." },
              { text: "By refusing to discuss it.", why: "She argues the point and then concedes part of it." } ] },
          { q: "What does Samer do with Lina's objection?",
            options: [
              { text: "Accepts part of it, then answers the rest.", correct: true,
                why: "<i>That is fair. Although…</i> — concede first, then qualify. The single most useful shape in this lesson." },
              { text: "Rejects it.", why: "He begins by agreeing with it." },
              { text: "Ignores it.", why: "He answers it directly." } ] },
          { q: "Why had Fadi said nothing?",
            options: [
              { text: "He was waiting, and his point depended on what the others decided.", correct: true,
                why: "<i>I was waiting</i> — and his objection only exists if the February rush happens." },
              { text: "He had nothing to say.", why: "He had the most concrete objection in the room." },
              { text: "He disagreed with Nour but did not want to say so.", why: "He objects to a consequence of Samer's plan, not to Nour's." } ] },
          { q: "What is Nour's final proposal?",
            options: [
              { text: "April for export, March at home, and Fadi vetting large February orders.", correct: true,
                why: "She takes Samer's split and adds a control for Fadi's problem. Neither was in the original plan." },
              { text: "The original plan, unchanged.", why: "Two things changed." },
              { text: "To postpone the decision.", why: "She closes it in the meeting." } ] },
          { q: "What is notable about Lina's last contribution?",
            options: [
              { text: "She separates stating a cost from objecting to a decision.", correct: true,
                why: "<i>I am not objecting, I am telling you what it costs me</i> — and Nour names it as the right way to put it." },
              { text: "She refuses to accept the plan.", why: "She says explicitly that she is not objecting." },
              { text: "She withdraws her earlier point.", why: "She keeps it, and adds the practical consequence." } ] }
        ],
        explain: { terms: [
          { en: "bring orders forward", gloss: "to order earlier than planned", ar: "تقديم الطلبيات" },
          { en: "to have a say", gloss: "to be allowed to influence a decision", ar: "أن يكون له رأي" },
          { en: "I take the point", gloss: "I accept that argument", ar: "أتفهّم وجهة نظرك" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Disagree without damage", letter: "A",
        concepts: ["speak", "people"],
        kind: "phrases", task: null, n: 0,
        prompt: "The phrases that made that a discussion rather than an argument. Click each one.",
        note: { kind: "life", title: "Disagree with the thing, not the person",
                body: "<p>Every phrase below aims at a proposal and not at whoever made it. That is the whole technique. It is not politeness for its own sake — a person who feels attacked stops listening, and then you have lost the argument you were winning.</p>" },
        text: "Can I disagree with the timing rather than the increase? I think the increase is right. I would rather we went from the first of April for export clients. I am not sure I agree with splitting it. That is fair. Although they are not neighbours. True. I still think one date is simpler, but I take the point about the season. I was waiting. And I would rather know now than in February. I am not objecting, I am telling you what it costs me.",
        phrases: [
          { text: "Can I disagree with the timing rather than the increase?",
            why: "Names exactly how much he is disagreeing with before he starts. The listener relaxes, because most of their plan has just survived." },
          { text: "I am not sure I agree with splitting it.",
            why: "<i>I am not sure I agree</i> is a hedge, and it is aimed at <i>splitting it</i> — a decision — rather than at the person who proposed it." },
          { text: "That is fair.",
            why: "Two words that concede a point. They cost nothing and they buy you the right to add <i>although</i>." },
          { text: "True. I still think one date is simpler, but I take the point about the season.",
            why: "Concede, restate your position, concede again. She has not changed her mind and the room knows exactly where she stands." },
          { text: "And I would rather know now than in February.",
            why: "Turns an objection into a service. He is not blocking the plan; he is improving the timing of a problem." },
          { text: "I am not objecting, I am telling you what it costs me.",
            why: "The most useful sentence in the lesson. It separates information from opposition, and it lets a manager budget for something instead of arguing about it." }
        ],
        after: "<p>Not one of these says <i>you are wrong</i>. Three of them begin by agreeing.</p>" },

      { id: "2b", section: 2, sectionTitle: "Disagree without damage", letter: "B",
        concepts: ["people", "comparison"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table of what each phrase actually does.",
        caption: "Four ways to disagree, and what each one buys you",
        head: ["Phrase", "What it does", "When to use it"],
        rows: [
          ["Can I disagree with X rather than Y?", "Limits the ___ of the disagreement", "When most of the plan is fine"],
          ["I am not sure I agree", "___ the disagreement without hiding it", "When you need to say no to a senior person"],
          ["That is fair, although…", "___ first, then qualifies", "When the other side has a real point"],
          ["I am not objecting, I am telling you what it ___", "Separates information from opposition", "When you will do it anyway but it has a cost"]
        ],
        gaps: [
          { answer: "size", why: "He says which part he is contesting, so the rest of the plan is not defended unnecessarily." },
          { answer: "Softens", why: "A hedge. The disagreement is still fully there — the hedge changes the temperature, not the content." },
          { answer: "Concedes", why: "Agreeing first is what earns the right to the <i>although</i>." },
          { answer: "costs", why: "Lina's line. It gives the manager a number instead of an argument." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Disagree without damage", letter: "C",
        concepts: ["recall", "people"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people in meetings. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Dima", detail: "Disagrees with one date in a ten-point plan by saying <i>I don't think this works.</i>" },
          { id: "c2", label: "Bassel", detail: "Has a serious objection, waits for a gap that never comes, and says nothing all meeting." },
          { id: "c3", label: "Reem", detail: "Will carry out the decision, but it doubles her workload. She says nothing, to seem cooperative." },
          { id: "c4", label: "Karim", detail: "Answers a colleague's objection by listing everything wrong with it." }
        ],
        takeaways: [
          { text: "Say how much you are disagreeing with, first.", caseId: "c1",
            why: "Dima's sentence sounds like a rejection of all ten points. <i>Can I disagree with the date rather than the plan?</i> defends nine of them for her." },
          { text: "A point that is never made cannot be answered.", caseId: "c2",
            why: "Fadi waited too, but he spoke when asked. If nobody asks, you have to make the gap yourself — silence in the room reads as agreement afterwards." },
          { text: "<i>I am not objecting, I am telling you what it costs.</i>", caseId: "c3",
            why: "Reem's cost is real and invisible. Stating it is not resistance; it is the information her manager needs to plan with." },
          { text: "Concede something before you qualify it.", caseId: "c4",
            why: "<i>That is fair, although…</i> takes two seconds and keeps the other person listening. A list of faults makes them defend rather than think." }
        ],
        closer: "<p>Next unit: comparing suppliers, where disagreeing politely turns into comparing honestly.</p>" }

    ]
  };
})();
