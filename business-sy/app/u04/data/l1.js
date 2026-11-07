/* Unit 4 · Order Status and Progress — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u04-l1", unit: "u04", block: "l1", up: "../", tab: "AT WORK",
    objective: "Say where an order has got to, using the words a logistics chain actually uses",
    next: "l2.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Where the order has got to", letter: "A",
        concepts: ["delivery", "sequence"],
        kind: "cards", task: null, n: 0,
        prompt: "Nine words that mark a point in the journey. Say what each means before you turn it over.",
        cards: [
          { term: "in production", ar: "قيد التصنيع",
            meaning: "being made now",
            with: ["it is in production", "go into production"],
            why: "The first status that means work has actually started. <i>Confirmed</i> only means somebody agreed." },
          { term: "consignment", ar: "إرسالية",
            meaning: "one lot of goods travelling together",
            with: ["a consignment of cotton", "split the consignment"],
            why: "More precise than <i>shipment</i>, which can also mean the act of sending. A consignment is the goods themselves." },
          { term: "in transit", ar: "قيد النقل",
            meaning: "on the way, not yet arrived",
            with: ["in transit", "damaged in transit", "transit time"],
            why: "Two words, no hyphen. Who carries the risk while goods are in transit is set by the delivery term, not by goodwill." },
          { term: "customs clearance", ar: "التخليص الجمركي",
            meaning: "permission from the border authority for goods to pass",
            with: ["clear customs", "held in customs", "clearance agent"],
            why: "<i>Cleared</i> is the word you are waiting for. Most delays at a border are paperwork, not inspection." },
          { term: "bill of lading", ar: "بوليصة شحن",
            meaning: "the carrier's document saying what was loaded and for whom",
            with: ["the bill of lading", "release against the bill"],
            why: "Often shortened to B/L. It is a receipt, a contract and a title document at once, which is why nobody posts the original casually." },
          { term: "delivery note", ar: "إشعار تسليم",
            meaning: "the paper the receiver signs to say what arrived",
            with: ["sign the delivery note", "a clean delivery note"],
            why: "Signing it clean means you are agreeing nothing was damaged. Write the damage on it before you sign, not afterwards." },
          { term: "backorder", ar: "طلب مؤجَّل",
            meaning: "the part of an order that could not be supplied and is still owed",
            with: ["on backorder", "clear the backorder"],
            why: "One word. A backorder is a promise that survives a part delivery; without the word, the rest quietly disappears." },
          { term: "ETA", ar: "الوقت المتوقّع للوصول",
            meaning: "estimated time of arrival",
            with: ["what is the ETA?", "the ETA has slipped"],
            why: "The <i>E</i> is the whole word: estimated. Treating an ETA as a commitment is how arguments start." },
          { term: "proof of delivery", ar: "إثبات التسليم",
            meaning: "evidence the goods reached the right place and person",
            with: ["send me proof of delivery", "POD"],
            why: "Usually the signed delivery note. Until you have it, <i>delivered</i> is something the carrier told you." }
        ],
        explain: { terms: [
          { en: "in transit", gloss: "on the way, not yet arrived", ar: "قيد النقل" },
          { en: "customs clearance", gloss: "permission for goods to cross a border", ar: "التخليص الجمركي" },
          { en: "backorder", gloss: "the part of an order still owed", ar: "طلب مؤجَّل" },
          { en: "ETA", gloss: "estimated time of arrival", ar: "الوقت المتوقّع للوصول" }
        ] },
        after: "<p>Three of these are documents: the <b>bill of lading</b>, the <b>delivery note</b> and <b>proof of delivery</b>. In a dispute, a status without a document behind it is just an opinion.</p>" },

      { id: "1b", section: 1, sectionTitle: "Where the order has got to", letter: "B",
        concepts: ["sequence", "delivery"],
        kind: "sequence", task: null, n: 0,
        prompt: "Put the stages of an export order into the order they happen.",
        note: { kind: "life", title: "Why the order matters",
                body: "<p>Each stage can only start when the one before it has finished, which is why a single delay moves everything after it. Knowing the chain is how you answer <em>when will it arrive</em> without guessing.</p>" },
        steps: [
          { text: "The order is confirmed in writing", pos: 1, why: "Quantity, price and date agreed. Nothing has been made yet, and the lead time starts here." },
          { text: "The deposit is received", pos: 2, why: "On a first order, production does not begin until the money is in." },
          { text: "The goods go into production", pos: 3, why: "Weaving and finishing. This is the longest stage and the one the dye house can stretch." },
          { text: "The consignment is packed and loaded", pos: 4, why: "Pallets made up, counted, and the bill of lading raised against what is actually on the truck." },
          { text: "The goods clear customs", pos: 5, why: "Paperwork at the border. The stage most likely to add days nobody planned for." },
          { text: "The delivery note is signed at the warehouse", pos: 6, why: "The moment the goods become the buyer's problem — which is why anything damaged must be written on it first." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Complete the status update", letter: "A",
        concepts: ["write", "deadline"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "The weekly status update to a client. Choose the word for each gap.",
        heading: "Order 4417 — status, Tuesday",
        note: { kind: "words", title: "Before you start",
                body: "<p>Several gaps take the present perfect. Watch for <b>since</b> and <b>for</b>, and for a date — a date closes the door on the present perfect entirely.</p>" },
        text: "Order 4417 has ___ in production since Monday of last week. The first thousand metres were finished on Friday and have been ___ ready for loading. We have been waiting ___ the dark blue yarn for nine days, and the dye house tells us it will be released tomorrow. Nothing has ___ the workshop yet, so there is no bill of lading to send you. Our current ___ is Monday the eighteenth. I will write again as soon as the consignment has ___ customs.",
        gaps: [
          { options: ["been", "gone"], answer: "been",
            why: "<i>Has been in production</i> — a state that started in the past and is still true. <i>Gone</i> would need a destination." },
          { options: ["put", "packed"], answer: "packed",
            why: "<i>Have been packed</i> — passive present perfect. The thousand metres did not pack themselves." },
          { options: ["for", "since"], answer: "for",
            why: "<i>Nine days</i> is a length, so <i>for</i>. <i>Since</i> would need a starting point: <i>since the ninth</i>." },
          { options: ["left", "gone"], answer: "left",
            why: "<i>Left the workshop</i> — <i>leave</i> takes the place directly. <i>Gone</i> would need <i>from</i>." },
          { options: ["ETA", "POD"], answer: "ETA",
            why: "An expected arrival. Proof of delivery cannot exist before the goods arrive." },
          { options: ["cleared", "clear"], answer: "cleared",
            why: "<i>Has cleared</i> — the present perfect after <i>as soon as</i> marks the event as complete before the next one starts." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Complete the status update", letter: "B",
        concepts: ["risk", "escalation"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "The client's reply. Choose the word for each gap.",
        heading: "Reply from Amman",
        text: "Thank you. Two questions. You say the yarn has been outstanding ___ nine days — when exactly did you order it? I ask because we ___ had the same problem on the last order and I would like to know whether it is the same dye house. Second, has anything been put on ___ ? If the dark blue is not going to make this consignment, send the rest now and we will take the balance as a ___ . Our shop needs something on the shelf. Please also confirm who is doing the customs ___ at the border, because last time the agent ___ for two days before anyone noticed.",
        gaps: [
          { options: ["for", "since"], answer: "for",
            why: "A length again. The question that follows asks for the starting point precisely because <i>for</i> does not give it." },
          { options: ["have", "had"], answer: "have",
            why: "<i>We have had the same problem</i> — past experience that still matters now. The simple past would close it off as unrelated." },
          { options: ["backorder", "hold"], answer: "backorder",
            why: "Something owed and still to come. <i>On hold</i> would mean stopped, which is the opposite of what she is proposing." },
          { options: ["backorder", "consignment"], answer: "backorder",
            why: "The same word as a noun for the remaining balance. She uses it twice because it is the mechanism she wants." },
          { options: ["clearance", "clearing"], answer: "clearance",
            why: "<i>Customs clearance</i> is the fixed pair. <i>Clearing</i> is the activity, not the service you name on a form." },
          { options: ["waited", "has waited"], answer: "waited",
            why: "<i>Last time</i> is a finished occasion, so the simple past. This is the one gap where the present perfect would be wrong." }
        ],
        explain: { terms: [
          { en: "outstanding (not yet done)", gloss: "still not done or not received", ar: "ما زال معلّقًا" },
          { en: "on the shelf", gloss: "available in the shop for customers to buy", ar: "على الرفّ" }
        ] } },

      { id: "3a", section: 3, sectionTitle: "Read four short notices", letter: "A",
        concepts: ["read", "notice"],
        kind: "read", task: "read-notices", cefr: "B1", n: 4,
        prompt: "Four notices from a warehouse and a border. Choose what each one means.",
        text: { every: 1, mastColor: "blue", masthead: "NOTICES",
          blocks: [
            { h: "Goods inwards", lines: [
              "Do not sign a delivery note before the pallets have been counted.",
              "If anything is damaged, write it on the note before signing, not afterwards." ] },
            { h: "Customs — documents", lines: [
              "Consignments arriving without a commercial invoice cannot be cleared.",
              "The invoice must match the packing list exactly, including the number of pallets." ] },
            { h: "Dispatch", lines: [
              "No consignment leaves this yard without a bill of lading raised against it.",
              "The driver takes one copy; one copy stays here." ] },
            { h: "To sales staff", lines: [
              "An ETA given to a client is an estimate and must be described as one.",
              "If you are asked for a firm date, ask dispatch before you answer." ] }
          ] },
        items: [
          { para: 1, q: "A pallet is damaged. When should that be written on the note?",
            options: [
              { text: "Before signing it.", correct: true,
                why: "<i>Before signing, not afterwards</i> — the notice rules out the common alternative in the same line." },
              { text: "Afterwards, in an email.", why: "Exactly what the notice tells you not to do." },
              { text: "It does not need to be written down.", why: "A signed clean note says nothing was wrong." } ] },
          { para: 2, q: "What must match the packing list?",
            options: [
              { text: "The commercial invoice, including the pallet count.", correct: true,
                why: "<i>Must match the packing list exactly, including the number of pallets.</i>" },
              { text: "The bill of lading.", why: "Not mentioned in this notice." },
              { text: "The delivery note.", why: "That belongs to the first notice, at the other end of the journey." } ] },
          { para: 3, q: "How many copies of the bill of lading are mentioned?",
            options: [
              { text: "Two — one for the driver and one kept.", correct: true,
                why: "The second line accounts for both." },
              { text: "One.", why: "The notice names two destinations for it." },
              { text: "Three.", why: "Only two are mentioned here." } ] },
          { para: 4, q: "A client asks for a firm delivery date. What should a sales assistant do?",
            options: [
              { text: "Ask dispatch before answering.", correct: true,
                why: "The notice distinguishes an ETA from a firm date and routes the second one elsewhere." },
              { text: "Give the ETA as a firm date.", why: "The first line forbids exactly this." },
              { text: "Refuse to answer.", why: "The notice says to ask, not to refuse." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Read four short notices", letter: "B",
        concepts: ["word", "place"],
        kind: "build", task: null, n: 0,
        prompt: "The prefix <b>inter-</b> and the prefix <b>trans-</b>. Drag each root into the box for the prefix it takes here.",
        note: { kind: "words", title: "Word building: between and across",
                body: "<p><b>inter-</b> means between: <em>international</em> is between nations.<br><b>trans-</b> means across: <em>transport</em> is carrying across.<br>Both turn up constantly in shipping, and they are not interchangeable.</p>" },
        family: { word: "transport", forms: [
          { part: "verb", word: "trans·PORT" },
          { part: "noun", word: "TRANS·port", note: "the stress moves — Unit 12 returns to this" },
          { part: "noun, thing", word: "trans·por·TA·tion", note: "commoner in American English" },
          { part: "adjective", word: "trans·POR·ta·ble" } ] },
        text: { every: 1, mastColor: "green", masthead: "IN USE",
          blocks: [ { lines: [
            "The consignment is <b>international</b>, so it needs a customs declaration.",
            "We use an <b>intermediary</b> at the border rather than clearing it ourselves.",
            "Goods are <b>transferred</b> from the truck to a smaller van in Amman.",
            "Damage in <b>transit</b> is covered, but only if the delivery note records it." ] } ] },
        items: [
          { root: "national", affix: "inter-", answer: "international", why: "between nations. The commonest word in cross-border trade." },
          { root: "mediary",  affix: "inter-", answer: "intermediary",  why: "someone who stands between two parties. An agent is one." },
          { root: "val",      affix: "inter-", answer: "interval",      why: "the space between two points in time." },
          { root: "fer",      affix: "trans-", answer: "transfer",      why: "to carry across, from one vehicle or account to another." },
          { root: "it",       affix: "trans-", answer: "transit",       why: "the state of being carried across. <i>In transit</i>." },
          { root: "late",     affix: "trans-", answer: "translate",     why: "to carry a meaning across from one language into another." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Read four short notices", letter: "C",
        concepts: ["sort", "evidence"],
        kind: "sort", task: null, n: 0,
        prompt: "Sort each item by whether it is a document or a status.",
        note: { kind: "words", title: "Why the difference matters",
                body: "<p>A status is what someone tells you. A document is what you can produce six weeks later when the client says it never arrived. In a dispute only one of the two counts.</p>" },
        bins: [
          { id: "doc",    label: "A document" },
          { id: "status", label: "A status" }
        ],
        items: [
          { text: "bill of lading",    bin: "doc", why: "the carrier's record of what was loaded, and for whom." },
          { text: "delivery note",     bin: "doc", why: "signed at the receiving end, which is what makes it evidence." },
          { text: "commercial invoice", bin: "doc", why: "required for customs clearance, and it must match the packing list." },
          { text: "proof of delivery", bin: "doc", why: "usually the signed note, returned to the sender." },
          { text: "in production",     bin: "status", why: "a report about where the goods are in the process." },
          { text: "in transit",        bin: "status", why: "on the way. True until someone signs for them." },
          { text: "cleared",           bin: "status", why: "a state the goods are in once customs release them." },
          { text: "on backorder",      bin: "status", why: "a state of the part not yet supplied." }
        ],
        closer: "<p>One of the statuses leaves a document behind: <b>cleared</b> produces a customs release. The other three leave nothing, which is why a weekly written update exists at all.</p>" }

    ]
  };
})();
