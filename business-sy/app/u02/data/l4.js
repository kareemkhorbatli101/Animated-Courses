/* Unit 2 · Plans, Quotes and Promises — LESSON 4 · MEETINGS & CALLS */
(function () {
  window.PAGE = {
    id: "u02-l4", unit: "u02", block: "l4", up: "../", tab: "AT WORK",
    objective: "Answer questions about price and date, and take notes from a negotiation call",
    next: "l5.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Answer about price and date", letter: "A",
        concepts: ["listen", "cost"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six questions about a quotation. Choose the reply that answers what was asked.",
        note: { kind: "life", title: "Two traps",
                body: "<p>A question about <i>how long the price holds</i> is not a question about <i>how long delivery takes</i>. And a question about a total is not a question about a unit price. Both pairs sound alike and mean different money.</p>" },
        items: [
          { who: "rana", say: "How long is this price good for?",
            options: [
              { text: "Thirty days from today.", correct: true, why: "Validity — how long the price holds." },
              { text: "Four weeks from the order date.", why: "That is the lead time. The two are different clocks, and both are in the quotation." },
              { text: "One thousand two hundred metres.", why: "A quantity, which answers neither." } ] },
          { who: "samer", say: "Is 1,650 the total or the price per metre?",
            options: [
              { text: "Per metre — the total would be just under two million.", correct: true,
                why: "Answers the question and then removes the doubt by giving the other figure." },
              { text: "Yes, that's right.", why: "An either/or question cannot be answered yes." },
              { text: "It's valid for thirty days.", why: "True, and not the question." } ] },
          { who: "nour", say: "Have you committed us to a date yet?",
            options: [
              { text: "No — I quoted four weeks and said I would review it.", correct: true,
                why: "A yes/no question gets the no, then the fact that makes it useful." },
              { text: "The dyer hasn't confirmed.", why: "The reason without the answer. Nour still does not know what was said to the client." },
              { text: "I'll call her this afternoon.", why: "A future action instead of an answer about the past." } ] },
          { who: "rana", say: "Why do you need a deposit from us?",
            options: [
              { text: "It applies to first orders, and it comes off the price.", correct: true,
                why: "Explains the rule and removes the fear behind the question in one sentence." },
              { text: "It's thirty per cent.", why: "That is what, not why — and she already knows the figure." },
              { text: "Everybody pays one.", why: "Not true here, and it closes the conversation rather than answering it." } ] },
          { who: "fadi", say: "Shall I start cutting before the deposit arrives?",
            options: [
              { text: "No — wait until Lina confirms it has come in.", correct: true,
                why: "A yes/no question, answered, with the condition attached. That is what makes it safe to act on." },
              { text: "The deposit is thirty per cent.", why: "The figure, not the instruction he asked for." },
              { text: "It's a first order.", why: "The reason the deposit exists, not an answer about when to start." } ] },
          { who: "lina", say: "When does the thirty days start on this one?",
            options: [
              { text: "From the invoice date, which is the day we dispatch.", correct: true,
                why: "Gives the rule and then the actual day, which is what she needs to diary it." },
              { text: "From today.", why: "Today is the quotation date, not the invoice date. Easy to say and expensive to be wrong about." },
              { text: "Thirty per cent.", why: "A proportion, not a date." } ] }
        ] },

      { id: "1b", section: 1, sectionTitle: "Answer about price and date", letter: "B",
        concepts: ["listen", "agreement"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six more. In these, the right answer refuses something without closing the door.",
        items: [
          { who: "rana", say: "Could you do three weeks instead of four?",
            options: [
              { text: "I can't commit to three until the yarn is confirmed.", correct: true,
                why: "Refuses the date and names the condition, so she hears what has to change rather than no." },
              { text: "No.", why: "True, and it ends the conversation. There was a negotiable version available." },
              { text: "Yes, no problem.", why: "A promise he cannot keep. Unit 1's lesson, in a harder place." } ] },
          { who: "rana", say: "Another supplier has quoted us less. Can you match it?",
            options: [
              { text: "Not at this quantity, but I can look again at 2,000 metres.", correct: true,
                why: "Says no to the thing asked and yes to a version of it. The order stays alive." },
              { text: "Their fabric is not as good.", why: "Attacks a competitor instead of answering, and the buyer usually knows more about this than you do." },
              { text: "Yes, I'll match it.", why: "Given away in one second, with no idea what the other quotation actually covers." } ] },
          { who: "nour", say: "Can we move the Beirut order ahead of Amman?",
            options: [
              { text: "We could, but Amman would then be a week late.", correct: true,
                why: "Answers the question and makes the cost of it visible, which is what lets her decide." },
              { text: "No, Amman was first.", why: "A rule rather than a reason. Nour may have information that changes the priority." },
              { text: "I'll ask Fadi.", why: "Useful later. It does not say whether it is possible." } ] },
          { who: "samer", say: "Do you want me to send the quotation today or wait for the yarn?",
            options: [
              { text: "Send it today, and say the lead time is subject to confirmation.", correct: true,
                why: "Chooses one of the two and adds the wording that makes the choice safe." },
              { text: "Wait.", why: "Possible, but it answers nothing about what the client is told meanwhile." },
              { text: "The yarn is due Thursday.", why: "A fact, not a decision." } ] },
          { who: "rana", say: "If I order 2,000 metres, will the price come down?",
            options: [
              { text: "It would, yes — I'd need to put a figure to you tomorrow.", correct: true,
                why: "Confirms the direction without inventing a number on the phone." },
              { text: "I don't know.", why: "True perhaps, but it wastes the opening she has just given you." },
              { text: "The price is valid for thirty days.", why: "Answers a question about time with a question about quantity on the table." } ] },
          { who: "lina", say: "The deposit hasn't arrived. Shall I chase it?",
            options: [
              { text: "Yes, but wait until Thursday — it was only sent on Monday.", correct: true,
                why: "Agrees and then protects the relationship by setting a sensible time." },
              { text: "Yes, chase it now.", why: "Three days after sending is early, and a client chased too soon remembers it." },
              { text: "It's thirty per cent.", why: "The figure again, when the question was about timing." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Take notes from a negotiation", letter: "A",
        concepts: ["listen", "write"],
        kind: "notes", task: "listen-note-conversation", cefr: "B1", n: 8,
        prompt: "Rana calls Samer about the quotation. Fill in the form as you listen.",
        audio: { track: "u02-call-1", label: "Call: Rana and Samer, quotation 2041",
          lines: [
            { who: "rana", text: "Samer, I have your quotation in front of me. Two things, and then I need to go into a meeting." },
            { who: "samer", text: "Go ahead." },
            { who: "rana", text: "First, the lead time. Four weeks takes me past the start of the season. Can you do three?" },
            { who: "samer", text: "I cannot commit to three until the dyer confirms the yarn. If it arrives on Thursday, three becomes possible. If it does not, four is already tight." },
            { who: "rana", text: "When will you know?" },
            { who: "samer", text: "Thursday morning. I will call you the same day either way." },
            { who: "rana", text: "All right. Second thing: another mill has quoted me fifteen hundred a metre." },
            { who: "samer", text: "At what quantity?" },
            { who: "rana", text: "The same. Twelve hundred metres." },
            { who: "samer", text: "Then I cannot match it at that quantity. At two thousand metres I could look at the price again, because the set-up cost is spread further." },
            { who: "rana", text: "Two thousand is more than I need this season." },
            { who: "samer", text: "Understood. Then the price stands at sixteen fifty, and it holds for thirty days. I would rather be straight with you than quote a number I take back later." },
            { who: "rana", text: "I respect that. Send me the revised lead time on Thursday and I will decide on Friday." },
            { who: "samer", text: "Thursday morning. And the deposit stays at thirty per cent on a first order." },
            { who: "rana", text: "Noted. Thursday, then." } ] },
        title: "Call notes — Cedar Linens, quotation 2041",
        lines: [
          "Client wants lead time cut to ___ weeks",
          "Possible only if the yarn arrives on ___",
          "Samer will call back on Thursday ___",
          "Competing quote: ___ a metre",
          "Competing quote is for the same quantity: ___ metres",
          "Price could be reviewed at ___ metres",
          "Our price stands at ___ a metre",
          "Client will decide on ___"
        ],
        gaps: [
          { answer: "three", why: "Her opening request, and the number the whole call turns on." },
          { answer: "Thursday", why: "He names the condition before he names the day — the condition is the part worth writing down." },
          { answer: "morning", why: "He says it twice. A half-day is more useful in a note than a day." },
          { answer: "1500", why: "<i>Fifteen hundred a metre.</i> English counts in hundreds where Arabic would say one thousand five hundred." },
          { answer: "1200", why: "His first question is <i>at what quantity</i>, because a price with no quantity cannot be compared." },
          { answer: "2000", why: "The quantity at which he could move, and the reason he gives for it." },
          { answer: "1650", why: "Unchanged. The call did not move the price, and the note should say so plainly." },
          { answer: "Friday", why: "She gives her own deadline at the end, which is the single most useful line in the call." }
        ],
        note: { kind: "life", title: "Write the conditions, not just the numbers",
                body: "<p>Three of the eight gaps are conditions rather than figures. A note that records <i>three weeks</i> without <i>if the yarn arrives Thursday</i> will be read next week as a promise.</p>" },
        explain: { terms: [
          { en: "to match a price", gloss: "to offer the same price as a competitor", ar: "مطابقة السعر" },
          { en: "set-up cost", gloss: "what it costs to start a production run, whatever its size", ar: "تكلفة التجهيز" },
          { en: "the price stands", gloss: "the price does not change", ar: "السعر يبقى كما هو" }
        ] } },

      { id: "2b", section: 2, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["sound", "speak"],
        kind: "minimal-pairs", task: "pronounce-pair", n: 4,
        focus: "<p>Unit 1 separated the hiss from the stop. This unit separates the two stops from each other.</p><p><b>/tʃ/</b> as in <i>charge</i> has no voice. <b>/dʒ/</b> as in <i>jar</i> is the same shape with the voice on. Put two fingers on your throat: /dʒ/ buzzes and /tʃ/ does not.</p><i>/tʃ/ — charge · cheap · batch · which</i><i>/dʒ/ — large · jeep · badge · wage</i>",
        items: [
          { say: "charge", options: [
            { text: "charge", correct: true, why: "/tʃ/ — no voice. <i>There is no charge for the sample.</i>" },
            { text: "large", why: "/l/ then /dʒ/. A large charge and a charge that is large are different claims about your invoice." } ] },
          { say: "cheap", options: [
            { text: "cheap", correct: true, why: "/tʃ/ at the front, unvoiced." },
            { text: "jeep", why: "/dʒ/ — voiced, and a vehicle. The two words differ by nothing but the buzz." } ] },
          { say: "batch", options: [
            { text: "batch", correct: true, why: "/tʃ/ at the end. A quantity made at one time." },
            { text: "badge", why: "/dʒ/ at the end. In a workshop both words come up, which is why this pair matters here." } ] },
          { say: "which", options: [
            { text: "which", correct: true, why: "/tʃ/ at the end, unvoiced." },
            { text: "wage", why: "/dʒ/ — what you pay staff. <i>Which batch</i> and <i>wage batch</i> are not the same question." } ] }
        ] },

      { id: "2c", section: 2, sectionTitle: "Hear the difference", letter: "C",
        concepts: ["speak", "sound"],
        kind: "repeat", task: "pronounce-pair", cefr: "B1", n: 4,
        prompt: "Say each line. Every one has both sounds in it, so you can feel the voice switching on and off.",
        speaker: "samer",
        lines: [
          "There is no charge for a large order.",
          "The cheap jeep is not a bargain if it is always in the garage.",
          "Which batch has the badge on it?",
          "I will arrange the schedule and adjust the wages in March."
        ] },

      { id: "3a", section: 3, sectionTitle: "Say it yourself", letter: "A",
        concepts: ["listen", "write"],
        kind: "dictation", task: null, n: 0,
        prompt: "Listen and type what you hear. These are sentences from the call in 2A.",
        items: [
          { answer: "I cannot commit to three weeks until the dyer confirms the yarn.",
            why: "<i>Commit to</i> keeps its <i>to</i>. The sentence refuses and gives a condition in one breath." },
          { answer: "At two thousand metres I could look at the price again.",
            why: "<i>Could</i>, not <i>can</i> — it makes the offer hypothetical, which is what keeps it from being a promise." },
          { answer: "I would rather be straight with you than quote a number later.",
            why: "<i>Would rather X than Y</i>, with bare verbs on both sides and no <i>to</i> anywhere." },
          { answer: "The price stands at sixteen fifty and it holds for thirty days.",
            why: "<i>Sixteen fifty</i> is how English says 1,650 in speech. Writing <i>sixteen fifty</i> in a note would be wrong; writing 1650 is right." },
          { answer: "The deposit stays at thirty per cent on a first order.",
            why: "<i>Per cent</i> is two words in British English, one in American. Either is accepted here." }
        ],
        closer: "<p>Notice how much of this call was spent saying what could <i>not</i> be promised. That is not weakness; it is the thing that makes the promises he did make worth something.</p>" }

    ]
  };
})();
