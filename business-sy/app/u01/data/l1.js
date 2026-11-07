/* Unit 1 · Introducing the Business — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u01-l1", unit: "u01", block: "l1", up: "../", tab: "AT WORK",
    objective: "Describe what a company makes, where it sells and how it is organised",
    next: "l2.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "The words a company uses about itself", letter: "A",
        concepts: ["word", "supplier"],
        kind: "cards", task: null, n: 0,
        prompt: "Nine words you will need before you can describe any business. Say what each one means <i>before</i> you turn it over.",
        cards: [
          { term: "supplier", ar: "مورِّد",
            meaning: "the company that sells you what you need to make your product",
            with: ["our main supplier", "change supplier", "a reliable supplier"],
            why: "The company you buy from. A customer buys from you; a supplier sells to you. Mixing the two in an email changes who owes whom." },
          { term: "client", ar: "عميل",
            meaning: "the company or person who buys from you",
            with: ["a new client", "the client's order", "keep the client informed"],
            why: "<i>Client</i> and <i>customer</i> are close. <i>Client</i> suggests an ongoing relationship; <i>customer</i> can be a single purchase." },
          { term: "order", ar: "طلبية",
            meaning: "a request to supply a stated quantity, at a stated price, by a stated date",
            with: ["place an order", "confirm an order", "the order is ready"],
            why: "Three things make it an order and not an enquiry: quantity, price, date. If one is missing, it is still a conversation." },
          { term: "lead time", ar: "مدة التوريد",
            meaning: "the time between placing an order and receiving it",
            with: ["a four-week lead time", "shorten the lead time", "what is your lead time?"],
            why: "Two words, no hyphen. The single most asked question in business correspondence, and the one most often answered vaguely." },
          { term: "stock", ar: "مخزون",
            meaning: "the goods a company is holding now",
            with: ["in stock", "out of stock", "check the stock"],
            why: "Uncountable: <i>we have stock</i>, never <i>stocks</i> for goods. <i>Stocks</i> means shares in a company." },
          { term: "workshop", ar: "ورشة",
            meaning: "the place where the making is done",
            with: ["on the workshop floor", "the workshop is closed", "a small workshop"],
            why: "In English a <i>workshop</i> is also a training session. The room and the meeting share one word, and only the sentence tells you which." },
          { term: "shift", ar: "وردية",
            meaning: "the hours one group of staff works before another takes over",
            with: ["the morning shift", "work a double shift", "the shift ends at six"],
            why: "What ends is the shift; what continues is the work. That is why a handover exists at all — Unit 6 is built on it." },
          { term: "branch", ar: "فرع",
            meaning: "one office of a company that has more than one",
            with: ["the Damascus branch", "open a branch", "our branch in Amman"],
            why: "A <i>branch</i> belongs to the same company. A <i>subsidiary</i> is a separate company that the first one owns." },
          { term: "turnover", ar: "حجم الأعمال",
            meaning: "the total value of what a company sells in a period",
            with: ["annual turnover", "turnover has risen", "turnover of forty million"],
            why: "Not profit. Turnover is everything that came in; profit is what is left after everything that went out." }
        ],
        explain: { terms: [
          { en: "supplier", gloss: "the company you buy from", ar: "مورِّد" },
          { en: "client", gloss: "the company that buys from you", ar: "عميل" },
          { en: "lead time", gloss: "how long an order takes to arrive", ar: "مدة التوريد" },
          { en: "turnover", gloss: "total sales, not profit", ar: "حجم الأعمال" }
        ] },
        after: "<p>Keep <b>supplier</b> and <b>client</b> apart from the start. Everything in this course runs in one direction: a supplier sells to us, and we sell to a client.</p>" },

      { id: "1b", section: 1, sectionTitle: "The words a company uses about itself", letter: "B",
        concepts: ["word", "place"],
        kind: "match", task: null, n: 0,
        prompt: "The workshop floor at Orontes Textiles. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A workshop floor: a wall with a window and a clock, a long bench, stacked crates on a pallet, a shipping container through the doorway, a forklift, and a supervisor standing with a clipboard",
          parts: [
            { p: "wall",      x: 0,   y: 0,   sx: 10,  sy: 5.4 },
            { p: "floor",     x: 0,   y: 335, sx: 10,  sy: 2.3 },
            { p: "window",    x: 70,  y: 60,  s: 2.1 },
            { p: "clock",     x: 440, y: 70,  s: 0.7 },
            { p: "board",     x: 620, y: 70,  s: 2.4 },
            { p: "longdesk",  x: 40,  y: 349, sx: 3.6, sy: 1.8 },
            { p: "crate",     x: 110, y: 333, s: 0.8 },
            { p: "manager",   x: 420, y: 373, s: 1.5 },
            { p: "pallet",    x: 530, y: 384, s: 1.5 },
            { p: "forklift",  x: 680, y: 372, s: 1.5 },
            { p: "container", x: 845, y: 352, s: 1.5 }
          ] },
        pins: [
          { id: "p-window",    x: 13, y: 25, tx: 7,  ty: 6,  w: 120 },
          { id: "p-clock",     x: 46, y: 18, tx: 40, ty: 4,  w: 110 },
          { id: "p-bench",     x: 12, y: 76, tx: 4,  ty: 60, w: 120 },
          { id: "p-crate",     x: 16, y: 65, tx: 22, ty: 50, w: 110 },
          { id: "p-pallet",    x: 59, y: 88, tx: 52, ty: 97, w: 120 },
          { id: "p-forklift",  x: 74, y: 84, tx: 72, ty: 97, w: 125 },
          { id: "p-container", x: 92, y: 70, tx: 90, ty: 48, w: 140 },
          { id: "p-manager",   x: 46, y: 72, tx: 36, ty: 90, w: 140 }
        ],
        pairs: [
          { word: "window",          pin: "p-window",    why: "the opening in the wall. A <i>window</i> is also a period of time: <i>a window for delivery</i>." },
          { word: "clock",           pin: "p-clock",     why: "the one on the wall. The shift is measured against it, which is why it is there and not in an office." },
          { word: "bench",           pin: "p-bench",     why: "the long work surface. Not a <i>desk</i>: a desk is for paper, a bench is for making." },
          { word: "crate",           pin: "p-crate",     why: "a strong wooden box for moving goods. A <i>carton</i> is cardboard; a crate is timber." },
          { word: "pallet",          pin: "p-pallet",    why: "the wooden base goods are stacked on so a forklift can lift them. Goods are sold by the pallet as well as by the unit." },
          { word: "forklift",        pin: "p-forklift",  why: "the small vehicle that lifts pallets. One word." },
          { word: "shipping container", pin: "p-container", why: "the steel box goods travel in. Measured in feet: a 20-foot or 40-foot container." },
          { word: "supervisor",      pin: "p-manager",   why: "the person responsible for a shift or an area. Above an operator, below a manager." }
        ],
        explain: { terms: [
          { en: "pallet", gloss: "the wooden base goods are stacked on", ar: "منصة نقل" },
          { en: "forklift", gloss: "the vehicle that lifts pallets", ar: "رافعة شوكية" },
          { en: "shipping container", gloss: "the steel box goods travel in", ar: "حاوية شحن" },
          { en: "supervisor", gloss: "the person in charge of a shift or area", ar: "مشرف" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Complete a company profile", letter: "A",
        concepts: ["word", "supplier"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "A short profile of the company you will work with all through this course. Choose the word for each gap.",
        heading: "Orontes Textiles, Hama",
        note: { kind: "words", title: "Before you start",
                body: "<p>Every gap has two words that both fit the grammar. Only one fits the <b>meaning</b>. Read to the end of the sentence before you choose.</p>" },
        text: "Orontes Textiles is a family firm near Hama. It has a ___ of about forty staff, who weave and finish cotton fabric. The company sells to ___ in Jordan, Lebanon and Iraq, and buys its raw cotton from three ___ in the Euphrates valley. A standard ___ is four weeks, though a large order can take six. The company keeps very little ___, because fabric held too long loses its colour. Last year its ___ was just over forty million Syrian pounds.",
        gaps: [
          { options: ["workforce", "workshop"], answer: "workforce",
            why: "A <i>workshop</i> is a place; <i>forty staff</i> are people. The sentence counts people." },
          { options: ["clients", "suppliers"], answer: "clients",
            why: "The company <i>sells to</i> them, so they buy from it. A supplier would be the other direction." },
          { options: ["suppliers", "clients"], answer: "suppliers",
            why: "The company <i>buys its raw cotton from</i> them. Same sentence, opposite direction." },
          { options: ["lead time", "deadline"], answer: "lead time",
            why: "A <i>deadline</i> is one fixed date. A <i>lead time</i> is a length, which is why it can be four weeks or six." },
          { options: ["stock", "turnover"], answer: "stock",
            why: "What is <i>held</i> is stock. Turnover is not held; it is earned over a period." },
          { options: ["turnover", "profit"], answer: "turnover",
            why: "Everything that came in. <i>Profit</i> would be what was left, and the sentence does not say what went out." }
        ],
        explain: { terms: [
          { en: "workforce", gloss: "all the people a company employs", ar: "القوى العاملة" },
          { en: "raw material", gloss: "what a product is made from before it is made", ar: "مادة خام" },
          { en: "lead time", gloss: "how long an order takes", ar: "مدة التوريد" }
        ] } },

      { id: "2b", section: 2, sectionTitle: "Complete a company profile", letter: "B",
        concepts: ["write", "client"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "Samer is writing to a buyer who has never heard of the company. Choose the word for each gap.",
        heading: "First email to a new client",
        text: "Dear Ms Darwish, thank you for your ___ about our cotton fabric. We are a ___ of woven and finished cotton, based near Hama, and we have been ___ to the Jordanian market since 2019. I attach our price list. Please note that the prices are ___ to change if the cotton price moves sharply. If you would like a sample, I can ___ one this week at no charge. I look forward to ___ from you.",
        gaps: [
          { options: ["enquiry", "order"], answer: "enquiry",
            why: "She has asked a question, not committed to a quantity. An <i>order</i> would already name how much." },
          { options: ["manufacturer", "retailer"], answer: "manufacturer",
            why: "A <i>retailer</i> sells to the public. This company makes the fabric." },
          { options: ["exporting", "importing"], answer: "exporting",
            why: "Goods leaving the country they were made in. <i>Importing</i> is the buyer's side of the same shipment." },
          { options: ["subject", "ready"], answer: "subject",
            why: "<i>Subject to change</i> is the fixed phrase. It warns without promising, which is exactly what a price list needs to do." },
          { options: ["dispatch", "discount"], answer: "dispatch",
            why: "To <i>dispatch</i> is to send. A <i>discount</i> is money off, and you cannot send one to someone this week." },
          { options: ["hearing", "listening"], answer: "hearing",
            why: "<i>Look forward to hearing from you</i> is the set closing. <i>Listening</i> is what you do to sound; <i>hearing from</i> is receiving a reply." }
        ],
        explain: { terms: [
          { en: "enquiry", gloss: "a question about price or availability, before any order", ar: "استفسار" },
          { en: "manufacturer", gloss: "the company that makes the goods", ar: "شركة مصنِّعة" },
          { en: "subject to change", gloss: "may change; not a promise", ar: "قابل للتغيير" },
          { en: "dispatch", gloss: "to send goods out", ar: "إرسال / شحن" }
        ] } },

      { id: "3a", section: 3, sectionTitle: "Read four short notices", letter: "A",
        concepts: ["read", "notice"],
        kind: "read", task: "read-notices", cefr: "B1", n: 4,
        prompt: "Four notices from around the building. Choose what each one means.",
        text: { every: 1, mastColor: "blue", masthead: "ON THE NOTICEBOARD",
          blocks: [
            { h: "Goods inwards", lines: [
              "All deliveries must be signed for by the shift supervisor.",
              "Drivers are not to leave pallets in the yard." ] },
            { h: "To all staff", lines: [
              "The Thursday meeting moves to 09:00 from this week.",
              "It will be held in the office, not the workshop." ] },
            { h: "Dye room", lines: [
              "Protective gloves must be worn at all times in this room.",
              "Report a shortage to Fadi before the shift starts, not during it." ] },
            { h: "Accounts", lines: [
              "Invoices received after the 25th will be paid the following month.",
              "Please do not send invoices to individual staff." ] }
          ] },
        items: [
          { para: 1, q: "What must happen when a delivery arrives?",
            options: [
              { text: "The shift supervisor has to sign for it.", correct: true,
                why: "<i>Must be signed for by the shift supervisor</i> — the passive names who does it with <i>by</i>." },
              { text: "The driver may leave it in the yard.", why: "The second line forbids exactly that." },
              { text: "Any member of staff can sign.", why: "The notice names one role, not anyone." } ] },
          { para: 2, q: "What has changed about the Thursday meeting?",
            options: [
              { text: "Both the time and the place.", correct: true,
                why: "A new time in the first line, a different room in the second." },
              { text: "Only the time.", why: "True of the first line, but the second line moves the room as well." },
              { text: "The day it is held.", why: "It is still Thursday. Only the hour moved." } ] },
          { para: 3, q: "When should a shortage of gloves be reported?",
            options: [
              { text: "Before the shift begins.", correct: true,
                why: "<i>Before the shift starts, not during it</i> — the notice rules out the other option in the same line." },
              { text: "As soon as you notice it during the shift.", why: "That is the one thing the notice says not to do." },
              { text: "At the end of the shift.", why: "The notice does not mention the end of the shift at all." } ] },
          { para: 4, q: "An invoice arrives on the 28th. When will it be paid?",
            options: [
              { text: "The following month.", correct: true,
                why: "The 28th is after the 25th, so the first line applies." },
              { text: "Within the same month.", why: "That would be true only for an invoice arriving on or before the 25th." },
              { text: "It will not be paid.", why: "The notice delays payment; it does not refuse it." } ] }
        ],
        explain: { terms: [
          { en: "goods inwards", gloss: "the place where deliveries arrive", ar: "استلام البضائع" },
          { en: "sign for", gloss: "to confirm you received something by signing", ar: "التوقيع بالاستلام" },
          { en: "shortage", gloss: "not enough of something", ar: "نقص" }
        ] } },

      { id: "3b", section: 3, sectionTitle: "Read four short notices", letter: "B",
        concepts: ["word", "risk"],
        kind: "build", task: null, n: 0,
        prompt: "The prefix <b>dis-</b> and the prefix <b>re-</b>. Drag each root into the box for the prefix it takes here.",
        note: { kind: "words", title: "Word building: dis-",
                body: "<p><b>dis-</b> reverses or removes: <i>agree → disagree</i>, <i>connect → disconnect</i>.<br><b>re-</b> does it again: <i>order → reorder</i>, <i>send → resend</i>.<br>Some roots take both, and mean different things: <i>discount</i> is money off, <i>recount</i> is counting again.</p>" },
        family: { word: "dispatch", forms: [
          { part: "verb", word: "dis·PATCH" },
          { part: "noun", word: "DIS·patch", note: "the sending itself" },
          { part: "adjective", word: "dis·PATCHED", note: "used of the goods" },
          { part: "adverb", word: "—", note: "no adverb exists" } ] },
        text: { every: 1, mastColor: "green", masthead: "IN USE",
          blocks: [ { lines: [
            "We had to <b>discontinue</b> that colour when the dye became hard to get.",
            "The buyer was <b>dissatisfied</b> with the second batch and asked us to <b>reorder</b> the yarn.",
            "Nothing was <b>dispatched</b> on Friday, so we had to <b>reschedule</b> the whole week.",
            "We cannot <b>disclose</b> another client's price, but we can <b>review</b> yours." ] } ] },
        items: [
          { root: "continue", affix: "dis-", answer: "discontinue", why: "to stop making it permanently. <i>Recontinue</i> is not a word." },
          { root: "satisfied", affix: "dis-", answer: "dissatisfied", why: "two s: the prefix ends in s and the root begins with s. Both are written." },
          { root: "close",     affix: "dis-", answer: "disclose",    why: "to make known. Note it is not the opposite of <i>close</i> — the root here is an older one meaning to shut away." },
          { root: "order",     affix: "re-",  answer: "reorder",     why: "to order again. <i>Disorder</i> exists but means a mess, not an order cancelled." },
          { root: "schedule",  affix: "re-",  answer: "reschedule",  why: "to fix a new time. The commonest verb in this whole course." },
          { root: "view",      affix: "re-",  answer: "review",      why: "to look at again. <i>Disview</i> does not exist." }
        ],
        explain: { terms: [
          { en: "discontinue", gloss: "to stop making or selling something", ar: "إيقاف الإنتاج" },
          { en: "dissatisfied", gloss: "not happy with what was supplied", ar: "غير راضٍ" },
          { en: "reschedule", gloss: "to fix a new time", ar: "إعادة جدولة" }
        ] } },

      { id: "3c", section: 3, sectionTitle: "Read four short notices", letter: "C",
        concepts: ["comparison", "word"],
        kind: "oddone", task: null, n: 0,
        prompt: "In each row, three words belong together and one does not. Choose the one that does not belong, then say why.",
        items: [
          { group: "people who buy from us", options: [
            { text: "client",   why: "buys from us, usually more than once." },
            { text: "customer", why: "buys from us; the word covers a single purchase too." },
            { text: "buyer",    why: "the person at the client who places the order." },
            { text: "supplier", correct: true, why: "A supplier sells <i>to</i> us. The other three buy <i>from</i> us." } ] },
          { group: "places where work happens", options: [
            { text: "workshop",  why: "the room where the fabric is made." },
            { text: "warehouse", why: "the building where finished goods wait to be dispatched." },
            { text: "branch",    why: "an office of the same company in another city." },
            { text: "turnover",  correct: true, why: "Turnover is a figure, not a place. The other three are rooms or buildings." } ] },
          { group: "things that are a length of time", options: [
            { text: "lead time",     why: "the weeks between order and delivery." },
            { text: "shift",         why: "the hours one group of staff works." },
            { text: "notice period", why: "the weeks between resigning and leaving." },
            { text: "invoice",       correct: true, why: "An invoice is a document. The other three are measured in hours, weeks or days." } ] },
          { group: "words for sending goods out", options: [
            { text: "dispatch", why: "to send goods from here." },
            { text: "ship",     why: "to send goods, by any means; not only by sea." },
            { text: "export",   why: "to send goods out of the country." },
            { text: "disclose", correct: true, why: "To disclose is to tell someone something. Nothing physical moves." } ] }
        ] },

      { id: "3d", section: 3, sectionTitle: "Read four short notices", letter: "D",
        concepts: ["sort", "supplier"],
        kind: "sort", task: null, n: 0,
        prompt: "Sort each word into the side of the business it belongs to.",
        note: { kind: "words", title: "Which direction?",
                body: "<p>Almost every business word belongs to one of two directions: money and goods coming <b>in</b>, or going <b>out</b>. Getting the direction wrong is the commonest mistake in a first business email.</p>" },
        bins: [
          { id: "in",  label: "Coming in to us" },
          { id: "out", label: "Going out from us" }
        ],
        items: [
          { text: "supplier",   bin: "in",  why: "they send us raw cotton." },
          { text: "delivery",   bin: "in",  why: "normally what arrives at goods inwards." },
          { text: "enquiry",    bin: "in",  why: "a client writes to us first." },
          { text: "raw cotton", bin: "in",  why: "the material before we weave it." },
          { text: "client",     bin: "out", why: "we send goods to them." },
          { text: "dispatch",   bin: "out", why: "the act of sending." },
          { text: "quotation",  bin: "out", why: "our answer to an enquiry, with a price in it." },
          { text: "export",     bin: "out", why: "goods leaving the country." }
        ],
        closer: "<p>One word sits on both sides in real life: <b>invoice</b>. We send one to a client and receive one from a supplier, and only the sentence tells you which way it is going.</p>" }

    ]
  };
})();
