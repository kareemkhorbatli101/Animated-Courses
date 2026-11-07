/* Unit 5 · Following Up and Payment — LESSON 2 · WRITING */
(function () {
  window.PAGE = {
    id: "u05-l2", unit: "u05", block: "l2", up: "../", tab: "AT WORK",
    objective: "Write a chase that gets paid and keeps the client",
    next: "l3.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "What a first chase does", letter: "A",
        concepts: ["write", "invoice"],
        kind: "annotate", task: null, n: 0,
        prompt: "A first reminder. Click each sentence and say what job it does.",
        note: { kind: "writer", title: "Assume the innocent explanation",
                body: "<p>Most late invoices are late for a dull reason. A first chase that offers the dull reason before the client has to invent one is both kinder and faster.</p>" },
        jobs: [
          "Names the invoice",
          "Offers an innocent explanation",
          "States the facts without blame",
          "Gives the reader an easy way out",
          "Asks one question"
        ],
        sentences: [
          { text: "I am writing about invoice 4412, dated the twelfth.",
            job: "Names the invoice",
            why: "Number and date in the first line. Accounts offices handle hundreds, and a chase that makes them search is a chase that waits." },
          { text: "I wanted to check it had reached you — we changed our email address in March and some messages went astray.",
            job: "Offers an innocent explanation",
            why: "It gives them somewhere to be that is not at fault, and it happens to be true." },
          { text: "Our terms are thirty days, so it fell due on the eleventh.",
            job: "States the facts without blame",
            why: "Two facts and no adjective. The reader can check both." },
          { text: "If it is already scheduled for payment, please ignore this.",
            job: "Gives the reader an easy way out",
            why: "The sentence that costs nothing and most often produces a reply, because answering it requires no admission." },
          { text: "If not, could you let me know when it is likely to be settled?",
            job: "Asks one question",
            why: "One question, answerable in a line. A chase with three questions gets one answer." }
        ],
        after: "<p>Nothing in that message says the client has done anything wrong, and the invoice is just as unpaid as it was.</p>",
        explain: { terms: [
          { en: "to go astray", gloss: "to be lost on the way", ar: "يضيع في الطريق" },
          { en: "to fall due", gloss: "to reach the date it must be paid", ar: "يحلّ أجل الاستحقاق" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "What a first chase does", letter: "B",
        concepts: ["write", "money"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "First the internal note. Thirty to forty words.",
        scenarioTitle: "4412 is forty days out",
        scenario: "You are Lina. Invoice 4412 was dated the twelfth, terms thirty days. It is now forty days out. You have written twice with no reply. You have not told Samer, who manages the client. You want Nour to decide whether to involve him.",
        to: "Nour Haddad, operations",
        re: "4412 — forty days, no reply",
        placeholder: "Nour,\n\n",
        minWords: 30,
        frames: [
          "4412 is now … days out.",
          "I have written … and had …",
          "I have not yet …",
          "Do you want me to … ?"
        ],
        note: { kind: "writer", title: "Say what you have not done, and why",
                body: "<p>Lina's restraint is a decision, not an omission. Saying <em>I have not yet told Samer, because…</em> shows the manager a choice rather than presenting her with a fact.</p>" },
        checklist: [
          "Is the age of the invoice a number?",
          "Have you said what you have already done?",
          "Have you said what you have deliberately not done?",
          "Is there one question for the reader?"
        ],
        modelJobs: [
          "States the facts",
          "Says what you have done",
          "Says what you have held back, and why",
          "Asks one question"
        ],
        model: "Nour,\n\n4412 is now forty days out and nothing older sits on the ageing report. I have written twice and had no reply either time. I have not yet raised it with Samer, because I would rather not pull sales in until I have tried a phone call. Do you want me to call them tomorrow, or does Samer go first?" },

      { id: "2a", section: 2, sectionTitle: "Build the sentence", letter: "A",
        concepts: ["write", "time"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Put the words in order. All three are questions about whether something has happened.",
        items: [
          { cue: "Ask whether a payment has arrived at any point.", band: "B1",
            target: "Have you ever had a problem with this client before",
            jobs: { "Have": "verb", "you": "subject", "ever": "adverbial", "before": "adverbial" },
            why: "<i>Ever</i> means at any time up to now, and it sits between the subject and the participle." },
          { cue: "Ask whether something has happened by now, expecting that it has not.", band: "B1",
            target: "Has the remittance advice arrived yet",
            jobs: { "Has": "verb", "the remittance advice": "subject", "yet": "adverbial" },
            why: "<i>Yet</i> goes at the end and carries a mild expectation of no." },
          { cue: "Say something happened sooner than expected.", band: "B1",
            target: "They have already paid two of the three invoices",
            jobs: { "They": "subject", "have": "verb", "already": "adverbial" },
            why: "<i>Already</i> sits between the auxiliary and the participle, and it carries surprise." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Build the sentence", letter: "B",
        concepts: ["write", "escalation"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Three more, from the same correspondence.",
        items: [
          { cue: "Give the reader an easy way out.", band: "B1",
            target: "If it is already scheduled for payment please ignore this",
            jobs: { "If": "linker", "it": "subject", "is": "verb", "please": "adverbial" },
            why: "A conditional that asks for nothing. It is the single most effective sentence in a first chase." },
          { cue: "Report what you have done, twice, with no result.", band: "B1",
            target: "I have written twice and had no reply either time",
            jobs: { "I": "subject", "have": "verb", "and": "linker" },
            why: "<i>Either time</i> after a negative. <i>Both times</i> would need a positive verb." },
          { cue: "Say what you have deliberately not done.", band: "B1",
            target: "I have not yet raised it with the sales side",
            jobs: { "I": "subject", "have": "verb", "not": "verb", "yet": "adverbial", "with": "adverbial" },
            why: "<i>Not yet</i> together, before the participle. It marks the restraint as temporary." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write it yourself", letter: "A",
        concepts: ["write", "client"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "An internal note to the sales side. Thirty to forty words, and do not make it sound like a complaint about their client.",
        scenarioTitle: "Warning sales before you call",
        scenario: "You are Lina. You are about to telephone Levant Home's accounts office about 4412. Samer manages that relationship and would rather hear it from you than from Rana. Nothing has gone wrong yet; the invoice is simply forty days out.",
        to: "Samer Khoury, export",
        re: "4412 — I am going to call their accounts office",
        placeholder: "Samer,\n\n",
        minWords: 30,
        frames: [
          "Just so you know before …",
          "4412 is … and I have written …",
          "I am going to … tomorrow.",
          "I am not asking you to …"
        ],
        note: { kind: "writer", title: "Tell them before, not after",
                body: "<p>A sales colleague who hears about a chase from their own client has to react without facts. Thirty words in advance prevents that entirely — and it is Unit 4's third kind of message: information arriving early enough to be useful.</p>" },
        checklist: [
          "Does the first line say why you are writing?",
          "Are the facts there without any judgement of the client?",
          "Have you said what you are going to do?",
          "Have you made clear you are not asking him to act?"
        ],
        modelJobs: [
          "Says why you are writing",
          "Gives the facts",
          "Says what you will do",
          "Says what you are not asking for"
        ],
        model: "Samer,\n\nJust so you know before anyone mentions it to you. 4412 is forty days out and I have written twice with no reply. I am going to call their accounts office tomorrow morning, politely. I am not asking you to do anything — I would just rather you heard it from me than from Rana." },

      { id: "3b", section: 3, sectionTitle: "Write it yourself", letter: "B",
        concepts: ["write", "escalation"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "The second reminder. Sixty to eighty words, and this one may use the word overdue.",
        scenarioTitle: "Second reminder",
        scenario: "Invoice 4412, dated the twelfth, terms thirty days, now forty days out. You sent a neutral first reminder and had no reply. You have found no error on your side. You want it paid, and you want to keep the account.",
        to: "Accounts, Levant Home, Amman",
        re: "Invoice 4412 — second reminder",
        placeholder: "Dear Sir or Madam,\n\n",
        minWords: 60,
        frames: [
          "I wrote on … about … and have not yet had a reply.",
          "The invoice is now … days overdue.",
          "We have checked our side and …",
          "If there is a query, …",
          "If not, could you … by … ?"
        ],
        note: { kind: "writer", title: "Escalate once, and only once",
                body: "<p>The temperature goes up here and must not go up again in the same message. One use of <em>overdue</em>, one date, one request. Adding a threat on top wastes the step you have left.</p>" },
        checklist: [
          "Have you referred to the first reminder and its date?",
          "Is <i>overdue</i> used once, with the number of days?",
          "Have you said you have checked your own side?",
          "Is there still a route for them to raise a query?",
          "Is there one request with a date on it?"
        ],
        modelJobs: [
          "Refers to the first reminder",
          "States the position, using overdue",
          "Shows you have checked your side",
          "Leaves room for a query",
          "Makes one request, with a date"
        ],
        model: "Dear Sir or Madam,\n\nI wrote on the eighteenth about invoice 4412, dated the twelfth, and have not yet had a reply.\n\nThe invoice is now ten days overdue against our thirty-day terms. We have checked our side and can find no query raised and no credit note outstanding, so I believe the amount is correct and undisputed.\n\nIf there is a query, please tell me what it is and I will deal with it the same day. If not, could you let me know by Friday when payment is scheduled?\n\nLina Al-Masri" },

      { id: "3c", section: 3, sectionTitle: "Write it yourself", letter: "C",
        concepts: ["write", "agreement"],
        kind: "paragraph", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "One paragraph agreeing a payment plan with a client who cannot pay in full.",
        min: 60,
        note: { kind: "writer", title: "Write down what was agreed on the phone",
                body: "<p>A payment plan agreed in a conversation and never written down is a plan that both sides remember differently in six weeks. The letter is not distrust; it is the thing that stops the argument.</p>" },
        must: [
          "What was agreed, as amounts and dates",
          "What happens to the rest of the balance",
          "What the client has to do if a date will be missed",
          "That the arrangement is for this invoice only"
        ],
        model: "Thank you for speaking to me this morning. To put down what we agreed: you will pay 400,000 by the end of this month and the remaining 380,000 by the end of the following month, which clears invoice 4412 in full. Interest will not be charged provided both dates are met. If either date is going to be missed, please tell me before it passes rather than afterwards, and we will look at it again. This arrangement applies to 4412 only; our usual thirty-day terms continue for new orders.",
        explain: { terms: [
          { en: "payment plan", gloss: "an agreement to pay in instalments", ar: "خطة سداد" },
          { en: "to clear an invoice", gloss: "to pay it in full", ar: "تسديد الفاتورة بالكامل" },
          { en: "provided that", gloss: "only if", ar: "شريطة أن" }
        ] } }

    ]
  };
})();
