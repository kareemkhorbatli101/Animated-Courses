/* Unit 5 · Following Up and Payment — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u05-l1", unit: "u05", block: "l1", up: "../", tab: "AT WORK",
    objective: "Use the words of invoicing and chasing, and know which ones accuse",
    next: "l2.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "The words of getting paid", letter: "A",
        concepts: ["invoice", "money"],
        kind: "cards", task: null, n: 0,
        prompt: "Nine words. Several of them accuse somebody, and several do not — say which before you turn each one over.",
        cards: [
          { term: "receivable", ar: "ذمم مدينة",
            meaning: "money owed to you that has not arrived",
            with: ["accounts receivable", "our receivables", "ageing receivables"],
            why: "The accountant's word for an invoice that is out. It accuses nobody; it is simply a category." },
          { term: "overdue", ar: "متأخّر السداد",
            meaning: "past the date it should have been paid",
            with: ["thirty days overdue", "an overdue invoice"],
            why: "A fact, not an insult. An invoice can be overdue because a cheque is in the post." },
          { term: "outstanding", ar: "مستحقّ غير مسدَّد",
            meaning: "still unpaid, whether or not it is late",
            with: ["the outstanding balance", "two invoices outstanding"],
            why: "Softer than <i>overdue</i>, and often the better word in a first chase, because it does not say whose fault it is." },
          { term: "settle", ar: "يسدّد",
            meaning: "to pay in full",
            with: ["settle the invoice", "settled in full", "settlement terms"],
            why: "Politer than <i>pay</i> in a written chase, and it implies closing the matter rather than handing over money." },
          { term: "remittance advice", ar: "إشعار تحويل",
            meaning: "a note saying what a payment is for",
            with: ["send a remittance advice", "no remittance advice"],
            why: "A payment with no remittance advice is money you cannot allocate. Chasing for one is not pedantry." },
          { term: "credit note", ar: "إشعار دائن",
            meaning: "a document reducing what a customer owes",
            with: ["issue a credit note", "a credit note against the invoice"],
            why: "The correct way to fix an overcharge. Simply telling the client to pay less leaves two sets of books disagreeing." },
          { term: "payment terms", ar: "شروط الدفع",
            meaning: "when payment is due and how it is counted",
            with: ["thirty-day terms", "agree payment terms", "terms of thirty days net"],
            why: "<i>Net 30</i> means thirty days with nothing deducted. Terms are agreed once and argued about forever." },
          { term: "ageing", ar: "تقادم الذمم",
            meaning: "a report grouping unpaid invoices by how late they are",
            with: ["the ageing report", "ageing buckets", "30, 60, 90 days"],
            why: "British spelling keeps the <i>e</i>. The report that turns a vague worry into a column of figures." },
          { term: "write off", ar: "شطب الدين",
            meaning: "to accept that money will never arrive and remove it from the books",
            with: ["write it off", "a bad debt written off"],
            why: "Two words as a verb, one as a noun: <i>a write-off</i>. The last step, and the one that is never a surprise if the ageing report is read." }
        ],
        explain: { terms: [
          { en: "outstanding", gloss: "still unpaid, not necessarily late", ar: "مستحقّ غير مسدَّد" },
          { en: "overdue", gloss: "past the date it was due", ar: "متأخّر السداد" },
          { en: "remittance advice", gloss: "a note saying what a payment covers", ar: "إشعار تحويل" },
          { en: "credit note", gloss: "a document reducing what is owed", ar: "إشعار دائن" }
        ] },
        after: "<p>The pair to keep apart is <b>outstanding</b> and <b>overdue</b>. The first says the money has not come; the second says it is late. Using the second when you mean the first is how a polite chase becomes an accusation.</p>" },

      { id: "1b", section: 1, sectionTitle: "The words of getting paid", letter: "B",
        concepts: ["sort", "invoice"],
        kind: "sort", task: null, n: 0,
        prompt: "Sort each phrase by whether it blames the reader.",
        note: { kind: "words", title: "Why this matters more than it sounds",
                body: "<p>Most invoices are late because of a process, not a decision: a missing reference, a signature, somebody on leave. A first chase that assumes bad faith insults the person who is about to fix it for you.</p>" },
        bins: [
          { id: "neutral", label: "Neutral — states a fact" },
          { id: "blaming", label: "Blames the reader" }
        ],
        items: [
          { text: "Invoice 4412 is still outstanding",  bin: "neutral", why: "says the money has not arrived, and nothing about why." },
          { text: "I wanted to check this had reached you", bin: "neutral", why: "offers them an innocent explanation before they have to find one." },
          { text: "Could you let me know when it is scheduled", bin: "neutral", why: "assumes a process exists and asks where in it the invoice is." },
          { text: "Our records show it as unpaid",      bin: "neutral", why: "attributes the claim to your own records, which leaves room for them to differ." },
          { text: "You have failed to pay",             bin: "blaming", why: "<i>Failed</i> names a fault, and in a first chase it is usually wrong." },
          { text: "This is now seriously late",         bin: "blaming", why: "<i>Seriously</i> adds judgement to a fact that was doing fine on its own." },
          { text: "We have chased you repeatedly",      bin: "blaming", why: "counts your effort rather than stating theirs, and invites an argument about the count." },
          { text: "We will have to take further action", bin: "blaming", why: "a threat. Sometimes necessary, never in a first message." }
        ],
        closer: "<p>Everything in the left column still gets the invoice paid. The difference is what the client thinks of you afterwards — and whether the next order goes to someone else.</p>" },

      { id: "2a", section: 2, sectionTitle: "Complete the chase", letter: "A",
        concepts: ["write", "invoice"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "A first chase, written well. Choose the word for each gap.",
        heading: "Invoice 4412 — first reminder",
        note: { kind: "words", title: "Before you start",
                body: "<p>Several gaps choose between a neutral word and a blaming one. Both fit the grammar. Only one fits a message you want answered.</p>" },
        text: "I am writing about invoice 4412, which is still ___ . Our records show it as unpaid, though I wanted to check it had ___ you — we changed our email address in March and some messages went astray. The invoice was dated the twelfth, and our ___ are thirty days, so it fell due on the eleventh. If it is already ___ for payment, please ignore this. If not, could you let me know when it is likely to be ___ ? If anything on it is wrong, I will issue a ___ note rather than ask you to adjust it at your end.",
        gaps: [
          { options: ["outstanding", "overdue"], answer: "outstanding",
            why: "A first reminder. <i>Overdue</i> is accurate and starts the message with a fault." },
          { options: ["reached", "arrived"], answer: "reached",
            why: "<i>Reached you</i> takes a person directly. <i>Arrived</i> would need <i>with you</i>." },
          { options: ["terms", "conditions"], answer: "terms",
            why: "<i>Payment terms</i> is the fixed pair. <i>Conditions</i> is broader and vaguer." },
          { options: ["scheduled", "promised"], answer: "scheduled",
            why: "<i>Scheduled</i> describes their process. <i>Promised</i> would suggest they owe you a commitment they never made." },
          { options: ["settled", "sorted"], answer: "settled",
            why: "<i>Settled</i> is the business word for paid in full. <i>Sorted</i> is conversational and vague about the money." },
          { options: ["credit", "debit"], answer: "credit",
            why: "A credit note reduces what they owe. A debit note would increase it, which is the opposite of what is being offered." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Complete the chase", letter: "B",
        concepts: ["escalation", "money"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "The internal note about the same invoice. Choose the word for each gap.",
        heading: "Note to Nour",
        text: "4412 is now forty days out. Have you ___ dealt with this client's accounts office before? I have written twice and had no reply. Nothing on the ___ report is older than this one. I have not ___ raised it with Samer, because I would rather not involve the sales side until I have tried once more. The amount is not large, but we have never had to ___ anything off with this client and I would like to keep it that way. Have they paid on time ___ , or is this the first one?",
        gaps: [
          { options: ["ever", "never"], answer: "ever",
            why: "A yes/no question about any time up to now. <i>Never</i> would turn a question into a statement." },
          { options: ["ageing", "ageist"], answer: "ageing",
            why: "<i>Ageing report</i> — unpaid invoices grouped by how late they are. The British spelling keeps the <i>e</i>." },
          { options: ["yet", "already"], answer: "yet",
            why: "<i>Have not yet raised it</i> — not done, and still possible. <i>Already</i> would contradict the <i>not</i>." },
          { options: ["write", "take"], answer: "write",
            why: "<i>Write off</i> is the fixed phrasal verb for accepting a debt will not be paid." },
          { options: ["before", "yet"], answer: "before",
            why: "<i>Have they paid on time before?</i> — asking about past occasions. <i>Yet</i> would ask about this invoice, which she already knows about." },
          { options: ["already", "ever"], answer: "already",
            why: "Not in this sentence — see the gap above. This one is a distractor: the sentence has its question word." }
        ],
        explain: { terms: [
          { en: "days out", gloss: "days since the invoice was issued", ar: "أيام منذ إصدار الفاتورة" },
          { en: "the sales side", gloss: "the colleagues who manage the client relationship", ar: "قسم المبيعات" }
        ] } },

      { id: "3a", section: 3, sectionTitle: "Read four short notices", letter: "A",
        concepts: ["read", "notice"],
        kind: "read", task: "read-notices", cefr: "B1", n: 4,
        prompt: "Four notices from an accounts office. Choose what each one means.",
        text: { every: 1, mastColor: "blue", masthead: "ACCOUNTS NOTICES",
          blocks: [
            { h: "Payments received", lines: [
              "A payment without a remittance advice cannot be allocated to an invoice.",
              "Unallocated payments sit on the account and the invoice stays open." ] },
            { h: "Chasing", lines: [
              "The first reminder goes out five days after the due date and does not use the word overdue.",
              "The second goes out at twenty days and does." ] },
            { h: "Corrections", lines: [
              "If we have overcharged, issue a credit note. Do not ask the client to pay a different figure.",
              "Two sets of books that disagree take longer to fix than the original error." ] },
            { h: "Write-offs", lines: [
              "Nothing is written off without the finance manager's signature.",
              "Anything above 100,000 also needs the owner's." ] }
          ] },
        items: [
          { para: 1, q: "A client pays the right amount with no remittance advice. What happens?",
            options: [
              { text: "The money sits unallocated and the invoice still shows as unpaid.", correct: true,
                why: "Both lines together: it cannot be allocated, so the invoice stays open." },
              { text: "The invoice is closed automatically.", why: "The notice says the opposite." },
              { text: "The payment is returned.", why: "Nothing about returning it — it sits on the account." } ] },
          { para: 2, q: "When is the word <i>overdue</i> first used?",
            options: [
              { text: "In the second reminder, at twenty days.", correct: true,
                why: "The first explicitly does not use it; the second <i>does</i>." },
              { text: "In the first reminder.", why: "The notice rules this out in the same line." },
              { text: "Never.", why: "The second reminder uses it." } ] },
          { para: 3, q: "You have overcharged a client by 5,000. What should you do?",
            options: [
              { text: "Issue a credit note for 5,000.", correct: true,
                why: "<i>Do not ask the client to pay a different figure</i> — the notice names the wrong method as well as the right one." },
              { text: "Ask them to pay 5,000 less.", why: "Exactly what the notice forbids, and it leaves two sets of books disagreeing." },
              { text: "Cancel the invoice and reissue it.", why: "Not mentioned, and it creates a second invoice number for the same goods." } ] },
          { para: 4, q: "A debt of 140,000 is to be written off. Whose signatures are needed?",
            options: [
              { text: "The finance manager's and the owner's.", correct: true,
                why: "The first line sets the base rule and the second adds to it above 100,000." },
              { text: "Only the owner's.", why: "The finance manager's is required for everything." },
              { text: "Only the finance manager's.", why: "That is enough below 100,000, and this is above." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Read four short notices", letter: "B",
        concepts: ["word", "error"],
        kind: "build", task: null, n: 0,
        prompt: "The prefix <b>un-</b> and the prefix <b>dis-</b>. Drag each root into the box for the prefix it takes here.",
        note: { kind: "words", title: "Word building: two ways to say not",
                body: "<p>Both reverse, and English chooses between them by habit.<br><i>paid → unpaid</i> · <i>agree → disagree</i><br>There is no <i>dispaid</i> and no <i>unagree</i>. A few roots take both with different meanings: <i>uninterested</i> is bored, <i>disinterested</i> is impartial.</p>" },
        family: { word: "allocate", forms: [
          { part: "verb", word: "AL·lo·cate" },
          { part: "noun", word: "al·lo·CA·tion" },
          { part: "adjective", word: "un·AL·lo·cat·ed", note: "the prefix does not move the stress" },
          { part: "adverb", word: "—", note: "no adverb exists" } ] },
        text: { every: 1, mastColor: "green", masthead: "IN USE",
          blocks: [ { lines: [
            "Two invoices are <b>unpaid</b> and one payment is <b>unallocated</b>.",
            "We <b>disagree</b> about the figure, but the difference is <b>undisputed</b> on the other three lines.",
            "The client was <b>unaware</b> that our bank details had changed.",
            "Nothing here is <b>dishonest</b>; it is <b>unclear</b>, which is a different problem." ] } ] },
        items: [
          { root: "paid",      affix: "un-",  answer: "unpaid",      why: "no <i>dispaid</i>. Most past participles take <i>un-</i>." },
          { root: "allocated", affix: "un-",  answer: "unallocated", why: "money received that is not yet matched to an invoice." },
          { root: "aware",     affix: "un-",  answer: "unaware",     why: "adjectives of state usually take <i>un-</i>." },
          { root: "agree",     affix: "dis-", answer: "disagree",    why: "no <i>unagree</i>. Verbs of opinion tend to take <i>dis-</i>." },
          { root: "honest",    affix: "dis-", answer: "dishonest",   why: "and note <i>unhonest</i> does not exist, though <i>unhonoured</i> does." },
          { root: "pute",      affix: "dis-", answer: "dispute",     why: "the odd one: here <i>dis-</i> does not reverse anything. The root no longer exists alone in English." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Read four short notices", letter: "C",
        concepts: ["comparison", "money"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three in each row belong together. Choose the one that does not.",
        items: [
          { group: "documents in an accounts file", options: [
            { text: "invoice", why: "the demand for payment." },
            { text: "credit note", why: "the document reducing what is owed." },
            { text: "remittance advice", why: "the note saying what a payment covers." },
            { text: "receivable", correct: true, why: "A receivable is a category of money owed, not a piece of paper." } ] },
          { group: "words that do not blame anyone", options: [
            { text: "outstanding", why: "states that money has not arrived." },
            { text: "unallocated", why: "describes a payment nobody has matched yet." },
            { text: "scheduled", why: "describes their process, neutrally." },
            { text: "failed to pay", correct: true, why: "<i>Failed</i> names a fault, which the other three carefully do not." } ] },
          { group: "stages of chasing", options: [
            { text: "first reminder", why: "five days after the due date." },
            { text: "second reminder", why: "at twenty days, and this one says overdue." },
            { text: "phone call", why: "usually between or after the written stages." },
            { text: "credit note", correct: true, why: "A credit note corrects an overcharge. It is not a stage of chasing at all." } ] },
          { group: "things that stop a payment being matched", options: [
            { text: "no remittance advice", why: "nothing says which invoice it covers." },
            { text: "wrong invoice number", why: "matched to the wrong thing, or to nothing." },
            { text: "part payment with no explanation", why: "the figure does not match any invoice." },
            { text: "net 30 terms", correct: true, why: "Terms decide when payment is due. They have nothing to do with matching it afterwards." } ] }
        ] },

      { id: "3d", section: 3, sectionTitle: "Read four short notices", letter: "D",
        concepts: ["sequence", "invoice"],
        kind: "sequence", task: null, n: 0,
        prompt: "Put the stages of chasing an invoice into the order they happen.",
        note: { kind: "life", title: "Each stage changes the temperature",
                body: "<p>The order matters because you cannot go back down it. Once you have used the word <i>overdue</i>, a later message using <i>outstanding</i> reads as a retreat.</p>" },
        steps: [
          { text: "The invoice is issued and the clock starts", pos: 1, why: "The due date is counted from here, not from delivery." },
          { text: "A first reminder, five days after the due date", pos: 2, why: "Neutral wording, and it offers an innocent explanation." },
          { text: "A phone call to the accounts office", pos: 3, why: "Often the step that actually works, because it finds the missing reference." },
          { text: "A second reminder, using the word overdue", pos: 4, why: "The temperature changes here, deliberately and once." },
          { text: "The sales contact is told", pos: 5, why: "Because the next conversation may affect the relationship, and they should not hear about it from the client." },
          { text: "A decision: escalate, agree a plan, or write off", pos: 6, why: "A decision taken deliberately, rather than a silence that becomes a write-off by default." }
        ] }

    ]
  };
})();
