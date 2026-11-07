/* Unit 1 · Introducing the Business — LESSON 4 · MEETINGS & CALLS */
(function () {
  window.PAGE = {
    id: "u01-l4", unit: "u01", block: "l4", up: "../", tab: "AT WORK",
    objective: "Answer a short work question, and take notes from a call",
    next: "l5.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Answer the question you were asked", letter: "A",
        concepts: ["listen", "speak"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six short questions you will hear at work. Choose the reply that answers the question that was actually asked.",
        note: { kind: "life", title: "The commonest mistake",
                body: "<p>Most wrong answers here are good English. They answer a different question — a <em>when</em> with a place, a <em>how many</em> with a price. Listen for the question word first.</p>" },
        items: [
          { who: "nour", say: "What's the lead time on this one?",
            options: [
              { text: "Four weeks from the order date.", correct: true, why: "A length of time, which is what <i>lead time</i> asks for." },
              { text: "It's forty thousand a metre.", why: "A price. That answers <i>how much</i>, not <i>how long</i>." },
              { text: "Yes, we can do it.", why: "A <i>wh-</i> question cannot be answered yes or no." } ] },
          { who: "samer", say: "How many metres did they order?",
            options: [
              { text: "Two thousand.", correct: true, why: "A number, which is what <i>how many</i> asks for." },
              { text: "On Thursday.", why: "A time. That would answer <i>when</i>." },
              { text: "The dark blue.", why: "A colour. That would answer <i>which</i>." } ] },
          { who: "fadi", say: "Have we got enough of the dark blue?",
            options: [
              { text: "No, we're about 120 metres short.", correct: true, why: "A yes/no question gets a yes or a no — and then the figure that makes it useful." },
              { text: "We ordered it in March.", why: "True, perhaps, but it does not say whether there is enough now." },
              { text: "Fadi checked it.", why: "Says who looked, not what they found." } ] },
          { who: "lina", say: "When did the invoice go out?",
            options: [
              { text: "On the 22nd.", correct: true, why: "A date. <i>When</i> asks for a point in time." },
              { text: "To the Amman office.", why: "A destination. That answers <i>where</i>." },
              { text: "Forty-two thousand.", why: "An amount. That answers <i>how much</i>." } ] },
          { who: "rana", say: "Could you send me a sample before you quote?",
            options: [
              { text: "Of course — I'll post one this week.", correct: true, why: "A request gets an agreement and a time, not just a fact." },
              { text: "The sample is cotton.", why: "Describes the sample instead of answering whether she will get one." },
              { text: "We quote in Syrian pounds.", why: "Answers a question about currency that nobody asked." } ] },
          { who: "nour", say: "Who signed for the delivery?",
            options: [
              { text: "Fadi did.", correct: true, why: "A person. <i>Who</i> asks for one, and <i>did</i> is enough to finish the sentence." },
              { text: "At six in the morning.", why: "A time. That answers <i>when</i>." },
              { text: "Three pallets.", why: "A quantity. That answers <i>how many</i>." } ] }
        ] },

      { id: "1b", section: 1, sectionTitle: "Answer the question you were asked", letter: "B",
        concepts: ["listen", "deadline"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six more. These are harder: the wrong replies are all things someone might really say.",
        items: [
          { who: "rana", say: "Is this price subject to change?",
            options: [
              { text: "It is, if the cotton price moves sharply.", correct: true, why: "Answers yes, then gives the condition. That is what makes the answer usable." },
              { text: "It's our best price.", why: "A claim about the level of the price, not about whether it can move." },
              { text: "We quote every Monday.", why: "Tells her the timetable, not whether this figure is fixed." } ] },
          { who: "samer", say: "Sorry, could you repeat the order number?",
            options: [
              { text: "Of course — it's 4417.", correct: true, why: "He asked for a repetition, so repeat it. Nothing else is needed." },
              { text: "I sent it yesterday.", why: "Says when it was sent, not what it is." },
              { text: "It's on the invoice.", why: "Points at where to look instead of giving the number he asked for." } ] },
          { who: "fadi", say: "Shall I put it on the morning truck or the afternoon one?",
            options: [
              { text: "The morning one, please.", correct: true, why: "An either/or question takes one of the two, not yes or no." },
              { text: "Yes, please.", why: "<i>Yes</i> cannot choose between two things." },
              { text: "It goes to Amman.", why: "The destination, which he did not ask about." } ] },
          { who: "lina", say: "Why hasn't the Amman invoice been paid?",
            options: [
              { text: "They pay on the 30th, so it isn't late yet.", correct: true, why: "Gives the reason, and corrects the assumption inside the question." },
              { text: "I'll chase it.", why: "An action, not a reason. Useful second, not first." },
              { text: "It was forty-two thousand.", why: "The amount, which was not the question." } ] },
          { who: "nour", say: "How long have you worked with that supplier?",
            options: [
              { text: "Since 2019.", correct: true, why: "<i>How long</i> with the present perfect takes <i>since</i> or <i>for</i>. Unit 4 is built on this." },
              { text: "In 2019.", why: "A finished date. That answers <i>when did you start</i>, which is a different question." },
              { text: "Three suppliers.", why: "A number of suppliers. That answers <i>how many</i>." } ] },
          { who: "rana", say: "Do you deliver to Amman yourselves, or use a courier?",
            options: [
              { text: "We use a courier from the border.", correct: true, why: "Chooses the second option and adds the one detail that makes it clear." },
              { text: "We deliver on Thursdays.", why: "Answers when, when the question was who." },
              { text: "Yes, we do.", why: "An either/or question again — <i>yes</i> does not say which." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Take notes from a call", letter: "A",
        concepts: ["listen", "write"],
        kind: "notes", task: "listen-note-conversation", cefr: "B1", n: 8,
        prompt: "Samer calls Rana to confirm her first order. Fill in the note form as you listen.",
        audio: { track: "u01-call-1", label: "Call: Samer and Rana, first order",
          lines: [
            { who: "samer", text: "Good morning, Ms Darwish. Samer Khoury from Orontes Textiles. Is now a good time?" },
            { who: "rana", text: "Yes, go ahead. I have the sample in front of me." },
            { who: "samer", text: "Good. I am calling to confirm the order before I put it into the system. You wanted the medium weight, in the dark blue." },
            { who: "rana", text: "That is right. Two thousand metres to start with." },
            { who: "samer", text: "Two thousand. And the price we quoted was eighteen hundred a metre, which holds for thirty days." },
            { who: "rana", text: "Understood. What about the lead time?" },
            { who: "samer", text: "Four weeks from today, so the fourteenth of next month. If you go above two thousand metres it becomes six weeks, which is why I am checking the quantity now." },
            { who: "rana", text: "Two thousand is right for now. How will it come?" },
            { who: "samer", text: "We use a courier from the border. They deliver to your warehouse in Amman, not to the shop." },
            { who: "rana", text: "That suits us. And payment?" },
            { who: "samer", text: "Thirty days from the invoice date. Lina in our accounts office will send it on the day we dispatch." },
            { who: "rana", text: "Good. Send me the confirmation in writing and I will sign it today." } ] },
        title: "Order confirmation — Levant Home, Amman",
        lines: [
          "Weight and colour: medium, ___",
          "Quantity: ___ metres",
          "Price: ___ Syrian pounds a metre, held for 30 days",
          "Lead time: ___ weeks — six if the order goes above 2,000",
          "Delivery date: the ___ of next month",
          "Carried by: a ___ from the border",
          "Delivered to: the ___ in Amman, not the shop",
          "Payment: ___ days from the invoice date"
        ],
        gaps: [
          { answer: "dark blue", why: "Samer names the colour when he confirms what she wanted." },
          { answer: "2000", why: "<i>Two thousand metres to start with</i>. Write the figure, not the words — that is what a note form is for." },
          { answer: "1800", why: "<i>Eighteen hundred a metre</i>. English says it in hundreds where Arabic would say one thousand eight hundred." },
          { answer: "four", why: "<i>Four weeks from today</i>. The six-week figure is the exception and is already printed on the form." },
          { answer: "fourteenth", why: "He gives the date as well as the length, which is the detail worth writing down." },
          { answer: "courier", why: "<i>We use a courier from the border</i> — not their own vehicle." },
          { answer: "warehouse", why: "He corrects a likely assumption: the warehouse, <i>not to the shop</i>." },
          { answer: "30", why: "<i>Thirty days from the invoice date</i>, not from delivery. The two are rarely the same day." }
        ],
        note: { kind: "life", title: "Why a form and not a page",
                body: "<p>Nobody writes full sentences on a call. The form fixes what you are listening for before the call starts, which is why a confirmation call is easy and an open-ended one is hard.</p>" },
        explain: { terms: [
          { en: "confirm", gloss: "to say officially that something is agreed", ar: "يؤكّد" },
          { en: "courier", gloss: "a company that carries goods for you", ar: "شركة شحن" },
          { en: "invoice date", gloss: "the day the bill is issued, which starts the payment clock", ar: "تاريخ الفاتورة" }
        ] } },

      { id: "2b", section: 2, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["sound", "speak"],
        kind: "minimal-pairs", task: "pronounce-pair", n: 4,
        focus: "<p>Three sounds English keeps apart that Arabic does not use in the same way. <b>/ʃ/</b> is a long hiss with nothing in front of it. <b>/tʃ/</b> is the same hiss with a <em>t</em> fired into it first. <b>/dʒ/</b> is /tʃ/ with the voice switched on.</p><em>/ʃ/ — shipment · cash · machine</em><em>/tʃ/ — charge · catch · purchase</em><em>/dʒ/ — jeep · damage · arrange</em>",
        items: [
          { say: "cash", options: [
            { text: "cash", correct: true, why: "/ʃ/ — the end is one continuous hiss, with no stop before it." },
            { text: "catch", why: "/tʃ/ — there is a tiny stop before the hiss. Saying <i>catch</i> for <i>cash</i> turns money into an action." } ] },
          { say: "charge", options: [
            { text: "charge", correct: true, why: "/tʃ/ at the start: the <i>t</i> blocks the air for an instant before the hiss." },
            { text: "sharge", why: "Not a word. It is what <i>charge</i> becomes when the <i>t</i> is dropped out of the front." } ] },
          { say: "ship", options: [
            { text: "ship", correct: true, why: "/ʃ/ — the hiss begins straight away." },
            { text: "chip", why: "/tʃ/ — and a different thing entirely: you ship goods, you do not chip them." } ] },
          { say: "arrange", options: [
            { text: "arrange", correct: true, why: "/dʒ/ at the end, with the voice on. Put your fingers on your throat and you should feel it buzz." },
            { text: "arranch", why: "Not a word. It is <i>arrange</i> with the voice switched off at the last moment, which is the commonest version of this error." } ] }
        ] },

      { id: "2c", section: 2, sectionTitle: "Hear the difference", letter: "C",
        concepts: ["speak", "sound"],
        kind: "repeat", task: "pronounce-pair", cefr: "B1", n: 4,
        prompt: "Now say them. Record yourself if you can, and compare \u2014 these three sounds are easier to hear than to make.",
        speaker: "nour",
        lines: [
          "We will dispatch the second batch on Thursday.",
          "There is no charge for the sample.",
          "Could you arrange a courier from the border?",
          "Our major client in Amman pays cash on delivery."
        ] },

      { id: "3a", section: 3, sectionTitle: "Say it yourself", letter: "A",
        concepts: ["listen", "write"],
        kind: "dictation", task: null, n: 0,
        prompt: "Listen and type what you hear. These are the five sentences you have just practised saying.",
        items: [
          { answer: "We will dispatch the second batch on Thursday.",
            why: "<i>Dispatch</i> and <i>batch</i> both end in /tʃ/. If you wrote <i>bash</i>, the sound was the problem, not the spelling." },
          { answer: "There is no charge for the sample.",
            why: "<i>Charge</i>, not <i>sharge</i>. The <i>t</i> at the front is small and it is the whole word." },
          { answer: "Could you arrange a courier from the border?",
            why: "<i>Arrange</i> ends voiced. <i>Courier</i> has two syllables in British English and often three in American." },
          { answer: "The machine in the finishing room needs a service.",
            why: "<i>Machine</i> is /ʃ/ in the middle, spelled <i>ch</i> — one of the few English words where <i>ch</i> is not /tʃ/." },
          { answer: "Our major client in Amman pays cash on delivery.",
            why: "<i>Major</i> voiced, <i>cash</i> a clean hiss. Both in one sentence on purpose." }
        ],
        closer: "<p><b>Cash on delivery</b> is worth keeping as a phrase. It is the arrangement where the money is handed over when the goods arrive, and it is common in this region precisely because it needs no banking.</p>" }

    ]
  };
})();
