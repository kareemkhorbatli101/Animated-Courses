/* Unit 1 · Introducing the Business — AT WORK
   Show that you are following a briefing. */
(function () {
  window.PAGE = {
    id: "u01-oc", unit: "u01", block: "oc", up: "../", tab: "AT WORK",
    objective: "Follow a briefing and show the speaker you are following it",
    next: "tw.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Follow the Monday briefing", letter: "A",
        concepts: ["listen", "deadline"],
        kind: "notes", task: "listen-note-monologue", cefr: "B1", n: 6,
        prompt: "Nour gives the Monday briefing. Fill in the form as you listen.",
        audio: { track: "u01-briefing", label: "Monday briefing, Orontes Textiles",
          lines: [
            { who: "nour", text: "Right, everyone. Four things this morning, and then I will take questions." },
            { who: "nour", text: "First, the Amman order. Two thousand metres of the medium weight in dark blue, dispatching on the fourteenth. Fadi, that is your priority from Wednesday." },
            { who: "nour", text: "Second, the dyeing. The subcontractor in Homs has told us their tank is down for maintenance this week, so everything after Wednesday shifts by two days. I have already warned Samer so he can tell the client before they ask." },
            { who: "nour", text: "Third, we have a visitor on Thursday. A buyer from Levant Home is coming to see the workshop. The meeting is now at nine, in the office, not the workshop, because we will walk the floor afterwards." },
            { who: "nour", text: "Fourth, and this is the one I want you to remember: nobody signs for a delivery except the shift supervisor. We had three pallets left in the yard last Tuesday and no name against them. If you are not the supervisor and a driver asks you to sign, find Fadi." },
            { who: "nour", text: "That is all from me. Lina will say a word about invoices, and then we will open it up." } ] },
        title: "Monday briefing — notes",
        lines: [
          "Amman order: 2,000 m, dispatch on the ___",
          "Priority for Fadi from ___",
          "Dyeing delayed by ___ days, from Wednesday on",
          "Visitor on Thursday: a buyer from ___",
          "Meeting moved to 09:00, in the ___",
          "Deliveries: only the ___ may sign"
        ],
        gaps: [
          { answer: "fourteenth", why: "She gives the dispatch date once, early, in the same sentence as the quantity." },
          { answer: "Wednesday", why: "<i>That is your priority from Wednesday</i> — a start, not a deadline." },
          { answer: "two", why: "<i>Everything after Wednesday shifts by two days.</i> The reason is the tank; the figure is what goes in the notes." },
          { answer: "Levant Home", why: "The company, not the person. She does not give a name." },
          { answer: "office", why: "She says the room has changed and then gives the reason, which is the part most people write down instead." },
          { answer: "shift supervisor", why: "The one she flags as the thing to remember — and the one with a story attached, which is why it sticks." }
        ],
        note: { kind: "life", title: "Listen for the numbering",
                body: "<p>She says <em>four things</em> at the start and then counts them. A speaker who numbers their points is telling you how many gaps your notes should have before they say anything.</p>" },
        explain: { terms: [
          { en: "briefing", gloss: "a short meeting where one person tells the others what is happening", ar: "إحاطة" },
          { en: "priority", gloss: "the thing to do first", ar: "أولوية" },
          { en: "maintenance", gloss: "work done to keep a machine running", ar: "صيانة" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Follow the Monday briefing", letter: "B",
        concepts: ["listen", "people"],
        kind: "talk", task: "listen-discussion", cefr: "B1", n: 8,
        prompt: "The questions after the briefing. Listen, then answer.",
        speaker: "nour",
        speakerNote: "with Fadi, Lina and Samer",
        audio: { track: "u01-questions", label: "Questions after the briefing",
          lines: [
            { who: "nour", text: "Right. Questions. Fadi, you first — you were shaking your head at the dyeing." },
            { who: "fadi", text: "Sorry, yes. If the Homs tank is down until Wednesday, when does the dark blue actually come back to us? Because I cannot start the Amman order without it." },
            { who: "nour", text: "Thursday morning, they say. Which gives you Thursday and Friday to finish, and the truck is booked for Monday." },
            { who: "fadi", text: "That is tight but it is possible. Can I have the two extra people on Thursday?" },
            { who: "nour", text: "You can have them Thursday afternoon. Not the morning, because of the visit." },
            { who: "fadi", text: "Understood. Thursday afternoon." },
            { who: "lina", text: "Can I come in on the invoice side? If we dispatch on Monday rather than the fourteenth, my invoice date moves as well, and the client pays thirty days from the invoice, not from the order." },
            { who: "nour", text: "Say that again for everyone, because this is the part people get wrong." },
            { who: "lina", text: "The thirty days starts on the day I raise the invoice. If dispatch slips by four days, the money arrives four days later. It is not a delay we can absorb quietly — it moves the cash." },
            { who: "samer", text: "Then I should tell Rana now rather than on Monday. If I tell her today, she can plan for it. If I tell her on Monday, she finds out when the fabric does not arrive." },
            { who: "nour", text: "Yes. Tell her today, and tell her what we are doing about it, not just that we are late. Those are two different emails." },
            { who: "samer", text: "Understood. And do I offer a part delivery?" },
            { who: "nour", text: "Offer it, but do not promise it until Fadi has seen the yarn. Fadi, when will you know?" },
            { who: "fadi", text: "Thursday, by the middle of the morning." },
            { who: "nour", text: "Then Samer, say you will confirm on Thursday." },
            { who: "samer", text: "One more thing. The visitor on Thursday \u2014 does she see the Amman fabric on the floor, or do we keep her away from it?" },
            { who: "nour", text: "She sees it. She is buying the same quality, and a workshop with work in it looks better than an empty one. But do not tell her it is late. If she asks whose it is, say it is a Jordanian order and leave it there." },
            { who: "samer", text: "And if she asks when we could deliver to her?" },
            { who: "nour", text: "Four weeks, and say the figure holds for thirty days. Do not quote six weeks to make yourself safe. If she hears six and a competitor says four, we never get the second conversation." },
            { who: "lina", text: "Can I add one line? If she does order on Thursday, tell me the same day. I will not raise anything, but I want to know before the end of the week." },
            { who: "nour", text: "Agreed. Anything else? No. Thank you, everyone." } ] },
        items: [
          { q: "Why can Fadi not start the Amman order on Wednesday?",
            options: [
              { text: "The dark blue yarn will not be back from the dyer.", correct: true,
                why: "<i>I cannot start the Amman order without it</i> — he names the blocker himself." },
              { text: "He does not have enough staff.", why: "Staff come up later, and as a request, not as the reason he cannot start." },
              { text: "The truck is not booked.", why: "The truck is booked, for Monday." } ] },
          { q: "What does Nour give Fadi, and what does she refuse?",
            options: [
              { text: "Two extra people on Thursday afternoon, but not in the morning.", correct: true,
                why: "She splits the request rather than answering yes or no — a very common shape of answer in a meeting." },
              { text: "Two extra people for the whole of Thursday.", why: "<i>Not the morning, because of the visit.</i>" },
              { text: "Nothing — she turns the request down.", why: "She grants half of it." } ] },
          { q: "Why does Lina interrupt?",
            options: [
              { text: "Because a later dispatch moves the payment date too.", correct: true,
                why: "Her point is that the delay is not only a production problem — it reaches the cash." },
              { text: "Because she disagrees about the visit.", why: "She does not mention the visit." },
              { text: "Because she wants the invoice raised early.", why: "She explains when the clock starts; she does not ask to start it early." } ] },
          { q: "What does Nour do immediately after Lina's first point?",
            options: [
              { text: "She asks her to repeat it for everyone.", correct: true,
                why: "<i>Say that again for everyone, because this is the part people get wrong.</i> Repetition used deliberately." },
              { text: "She moves on to the next question.", why: "She goes back to it rather than past it." },
              { text: "She corrects her.", why: "She agrees with her, and amplifies." } ] },
          { q: "When does the thirty-day payment period begin?",
            options: [
              { text: "On the day the invoice is raised.", correct: true,
                why: "<i>The thirty days starts on the day I raise the invoice</i> — stated once, plainly, and then illustrated." },
              { text: "On the day the order is placed.", why: "Lina rules this out in the same breath: <i>not from the order</i>." },
              { text: "On the day the goods arrive.", why: "Not mentioned. The invoice date is the one that counts." } ] },
          { q: "What is Samer's argument for telling the client today?",
            options: [
              { text: "She can plan around it if she knows in advance.", correct: true,
                why: "He contrasts the two outcomes himself: she plans, or she finds out when nothing arrives." },
              { text: "It is company policy.", why: "No policy is mentioned." },
              { text: "Nour has ordered him to.", why: "He proposes it; she agrees afterwards." } ] },
          { q: "What does Nour add to Samer's plan?",
            options: [
              { text: "Say what you are doing about it, not only that you are late.", correct: true,
                why: "<i>Those are two different emails.</i> The addition is the whole point of the exchange." },
              { text: "Say nothing until Thursday.", why: "The opposite — she tells him to write today." },
              { text: "Offer a discount.", why: "No discount is discussed anywhere." } ] },
          { q: "Why must Samer not promise a part delivery yet?",
            options: [
              { text: "Because Fadi has not seen the yarn.", correct: true,
                why: "<i>Do not promise it until Fadi has seen the yarn</i> — and Fadi then says when he will know." },
              { text: "Because the client has not asked for one.", why: "Samer raises it precisely because she might." },
              { text: "Because part deliveries are not allowed.", why: "Nour tells him to offer it." } ] }
        ],
        explain: { terms: [
          { en: "come in on", gloss: "to join a discussion at a particular point", ar: "يتدخّل في النقاش" },
          { en: "absorb", gloss: "to take a cost or a delay without passing it on", ar: "يستوعب / يتحمّل" },
          { en: "part delivery", gloss: "sending some of an order now and the rest later", ar: "تسليم جزئي" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Show that you are following", letter: "A",
        concepts: ["speak", "people"],
        kind: "phrases", task: null, n: 0,
        prompt: "The phrases that show a speaker you are with them. Click each one in the transcript.",
        note: { kind: "life", title: "Why this matters more than it looks",
                body: "<p>In a briefing, silence reads as agreement. If you say nothing and then do the wrong thing, the speaker will remember that you said nothing. These phrases cost two seconds and they move the responsibility.</p>" },
        text: "Sorry, yes. If the Homs tank is down until Wednesday, when does the dark blue actually come back to us? That is tight but it is possible. Can I have the two extra people on Thursday? Understood. Thursday afternoon. Can I come in on the invoice side? Then I should tell Rana now rather than on Monday. Understood. And do I offer a part delivery?",
        phrases: [
          { text: "If the Homs tank is down until Wednesday, when does the dark blue actually come back to us?",
            why: "Repeats the fact he was given, then asks for the consequence. This is the single most useful move in a briefing: it proves you heard, and it gets you the thing you actually need." },
          { text: "That is tight but it is possible.",
            why: "Accepts without pretending it is easy. A plain <i>yes</i> here would hide a risk the manager needs to know about." },
          { text: "Can I have the two extra people on Thursday?",
            why: "Turns a problem into a request. The person who names what would fix it usually gets some of it." },
          { text: "Understood. Thursday afternoon.",
            why: "Says the answer back. Two words, and now both people know the same thing." },
          { text: "Can I come in on the invoice side?",
            why: "Asks permission to change the subject. It keeps the meeting in order instead of cutting across it." },
          { text: "Then I should tell Rana now rather than on Monday.",
            why: "States what he will do as a conclusion from what was said. If it is wrong, the manager corrects it now, not next week." }
        ],
        after: "<p>Notice that not one of these is a long sentence. Following a briefing out loud is mostly short.</p>" },

      { id: "2b", section: 2, sectionTitle: "Show that you are following", letter: "B",
        concepts: ["people", "sequence"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table. It is the briefing turned into the thing you would actually write down.",
        caption: "Who does what, after the Monday briefing",
        head: ["Person", "Action", "By when"],
        rows: [
          ["Fadi", "Start the Amman order once the ___ arrives", "Thursday"],
          ["Fadi", "Confirm whether a part delivery is possible", "Thursday ___"],
          ["Samer", "Tell the client, and say what is being ___ about it", "Today"],
          ["Lina", "Raise the invoice on the day of ___", "—"]
        ],
        gaps: [
          { answer: "yarn", why: "He is blocked on the dark blue coming back from the dyer." },
          { answer: "morning", why: "<i>Thursday, by the middle of the morning</i> — he gives the half-day, so the table should too." },
          { answer: "done", why: "Nour's addition: not only that you are late. <i>Those are two different emails.</i>" },
          { answer: "dispatch", why: "The invoice date starts the thirty days, and it is raised on the day the goods go." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Show that you are following", letter: "C",
        concepts: ["recall", "people"],
        kind: "recap", task: null, n: 0,
        prompt: "Four things people do in briefings. Which are worth copying?",
        cases: [
          { id: "c1", label: "Maya",
            detail: "She does not follow the dyeing delay, says nothing in the room, and asks a colleague about it afterwards." },
          { id: "c2", label: "Tarek",
            detail: "Given a deadline he privately thinks is impossible, he says <i>yes, no problem</i> and worries about it later." },
          { id: "c3", label: "Samer",
            detail: "Told to warn the client, he writes to say the order will be late and sends it." },
          { id: "c4", label: "Fadi",
            detail: "Told to put two extra people on Thursday afternoon, he answers <i>Understood. Thursday afternoon.</i> and nothing else." }
        ],
        takeaways: [
          { text: "Ask in the room. The question costs five seconds there and an hour afterwards.",
            caseId: "c1",
            why: "If Maya was lost, others were too. Asking once in the briefing fixes it for everyone; asking afterwards fixes it for one person and leaves the speaker thinking the point landed." },
          { text: "<i>Tight but possible</i> is information. <i>No problem</i> is not.",
            caseId: "c2",
            why: "Tarek's answer removes the manager's chance to send help. An honest acceptance takes the same two seconds and keeps the risk visible." },
          { text: "Bad news travels with a plan, or it travels alone.",
            caseId: "c3",
            why: "Being late and having a plan are two different emails. Samer has sent the first one, which gives the client the problem and none of the reassurance." },
          { text: "Say the answer back in a few words.",
            caseId: "c4",
            why: "Four words, and now both people have the same instruction in their memory. This is the cheapest thing on the page and the one most often skipped." }
        ],
        closer: "<p>Next unit: quoting a price and promising a date, which is where <i>will</i> and <i>going to</i> start to matter.</p>" }

    ]
  };
})();
