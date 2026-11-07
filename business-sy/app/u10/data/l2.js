/* Unit 10 · Records and Responsibility — LESSON 2 · WRITING */
(function () {
  window.PAGE = {
    id: "u10-l2", unit: "u10", block: "l2", up: "../", tab: "AT WORK",
    objective: "Write a procedure and an audit response, in the register each needs",
    next: "l3.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "The register of a rule", letter: "A",
        concepts: ["write", "approval"],
        kind: "annotate", task: null, n: 0,
        prompt: "Five lines from a written procedure. Click each and say what makes it work.",
        note: { kind: "writer", title: "Procedures are obeyed or ignored, never discussed",
                body: "<p>Nobody argues with a procedure; they either follow it or they do not. That makes clarity the only thing that matters and tone almost irrelevant.</p>" },
        jobs: [
          "A rule stated as a rule",
          "A rule with the wrong alternative named",
          "A rule with a person attached",
          "A rule with a number in it",
          "A rule about what to do when you are not sure"
        ],
        sentences: [
          { text: "A document that is wrong is reissued under a new number.",
            job: "A rule stated as a rule",
            why: "Present simple, passive, no modal. <i>Should be reissued</i> would invite a judgement about when." },
          { text: "Nothing is corrected by hand and nothing is destroyed.",
            job: "A rule with the wrong alternative named",
            why: "Naming the forbidden action is what stops it. A rule saying only what to do leaves the easier wrong path open." },
          { text: "The person who prepared a declaration signs it, by name.",
            job: "A rule with a person attached",
            why: "Not <i>declarations must be signed</i>. The rule says who, which is the whole difference." },
          { text: "Shipping records are kept for seven years from the date of the consignment.",
            job: "A rule with a number in it",
            why: "A period and a start point. <i>Kept for several years</i> would be unenforceable and would be ignored within a month." },
          { text: "If you are not certain of a figure, do not sign. Ask.",
            job: "A rule about what to do when you are not sure",
            why: "The sentence that prevents most of the problems the other four describe. Two words of instruction and one of permission." }
        ],
        after: "<p>Not one of these uses <i>should</i>, <i>please</i> or <i>try to</i>. A procedure that asks is a procedure that is negotiated.</p>",
        explain: { terms: [
          { en: "by name", gloss: "with the person's actual name, not just a signature", ar: "بالاسم" },
          { en: "unenforceable", gloss: "impossible to apply or check", ar: "غير قابل للتطبيق" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "The register of a rule", letter: "B",
        concepts: ["write", "evidence"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Write the procedure for chasing delivery notes. Thirty to forty words.",
        scenarioTitle: "Thirty days",
        scenario: "The auditor found two missing signed delivery notes. The rule is to be: chase within thirty days of dispatch; Lina owns it; if it has not arrived in sixty days, record that fact in the file rather than leaving the gap silent.",
        to: "Export and accounts",
        re: "Procedure — delivery notes",
        placeholder: "",
        minWords: 30,
        frames: [
          "A signed delivery note is chased … of dispatch.",
          "… is responsible for …",
          "If it has not arrived within …",
          "The gap is recorded rather than …"
        ],
        note: { kind: "writer", title: "Say what to do when it fails",
                body: "<p>Most procedures describe the good case. The useful half is what happens when the document never arrives, because that is the case that produced the audit finding.</p>" },
        checklist: [
          "Is the rule in the present simple, not with <i>should</i>?",
          "Is a person named?",
          "Are both periods given as numbers?",
          "Does it say what to do if the note never comes?"
        ],
        modelJobs: [
          "States the rule",
          "Names the owner",
          "Gives the failure period",
          "Says what is recorded"
        ],
        model: "A signed delivery note is chased within thirty days of dispatch. Al-Masri is responsible for chasing and for the record of it. If no signed note has arrived within sixty days, that fact is written in the shipping file against the consignment. The gap is recorded, not left silent." },

      { id: "2a", section: 2, sectionTitle: "Build the sentence", letter: "A",
        concepts: ["write", "evidence"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Put the words in order. Each one starts with a gerund.",
        items: [
          { cue: "Say that an activity is required.", band: "B1",
            target: "Keeping complete records is a condition of the licence",
            jobs: { "Keeping": "subject", "is": "verb", "of": "adverbial" },
            why: "<i>Keeping</i> is the subject of the sentence, and a gerund subject takes a singular verb however plural the noun after it." },
          { cue: "Say that an activity is forbidden.", band: "B1",
            target: "Correcting a document by hand is not permitted",
            jobs: { "Correcting": "subject", "is": "verb", "not": "verb" },
            why: "The gerund names the action without naming a doer, which is exactly what a rule wants." },
          { cue: "Say that two activities are different.", band: "B1",
            target: "Being compliant and proving it are not the same thing",
            jobs: { "Being": "subject", "and": "linker", "are": "verb" },
            why: "Two gerund subjects joined by <i>and</i> take a plural verb. One gerund alone would take <i>is</i>." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Build the sentence", letter: "B",
        concepts: ["write", "approval"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Three more. These choose between a gerund and an infinitive.",
        items: [
          { cue: "Say what the company has decided.", band: "B1",
            target: "We have decided to name the person who authorises a reissue",
            jobs: { "We": "subject", "have": "verb", "who": "subject", "authorises": "verb" },
            why: "<i>Decide</i> takes an infinitive. <i>Decide naming</i> is not possible." },
          { cue: "Say what the company has stopped.", band: "B1",
            target: "We have stopped amending documents by hand",
            jobs: { "We": "subject", "have": "verb", "by": "adverbial" },
            why: "<i>Stop</i> takes a gerund when it means cease. <i>Stop to amend</i> would mean pause in order to amend." },
          { cue: "Say what somebody recommends.", band: "B1",
            target: "The auditor recommends chasing delivery notes within thirty days",
            jobs: { "The auditor": "subject", "recommends": "verb", "within": "adverbial" },
            why: "<i>Recommend</i> takes a gerund. <i>Recommends to chase</i> is a common error and is never right." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write it yourself", letter: "A",
        concepts: ["write", "risk"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "A note to staff about declarations. Thirty to forty words, and no softening.",
        scenarioTitle: "If you are not sure, do not sign",
        scenario: "You are Nour. A customs declaration is signed by name by whoever prepared it. Two people have recently signed declarations containing figures they had taken from somebody else without checking. Nothing has gone wrong yet. You want this stopped without anyone being named.",
        to: "All export staff",
        re: "Signing declarations",
        placeholder: "",
        minWords: 30,
        frames: [
          "A declaration is signed by …",
          "That means … , not that …",
          "If you are not certain of a figure, …",
          "Nobody has ever been … for asking."
        ],
        note: { kind: "writer", title: "Correct a practice, not a person",
                body: "<p>Naming nobody makes the rule easier to follow and keeps two people able to work. Say what the signature means, and make asking explicitly safe.</p>" },
        checklist: [
          "Is the meaning of the signature stated?",
          "Is the wrong practice named without naming anyone?",
          "Is the instruction unambiguous?",
          "Have you made asking safe?"
        ],
        modelJobs: [
          "States what a signature means",
          "Names the wrong practice",
          "Gives the instruction",
          "Makes asking safe"
        ],
        model: "A customs declaration is signed by name by whoever prepared it. That means you are stating the figures are right, not that somebody told you they were. If you are not certain of a figure, do not sign it — ask, and the delay is mine to explain. Nobody here has ever been in trouble for asking." },

      { id: "3b", section: 3, sectionTitle: "Write it yourself", letter: "B",
        concepts: ["write", "approval"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Respond to the audit findings. Sixty to eighty words.",
        scenarioTitle: "Response to the auditor",
        scenario: "Two findings: delivery notes missing in two of ten consignments, and reissued invoices not naming who authorised them. You accept both. You have a procedure for each. You also want to record that the one discrepancy found was found by your own warehouse.",
        to: "Mr Hisham Daoud, auditor",
        re: "Sample check — our response",
        placeholder: "Dear Mr Daoud,\n\n",
        minWords: 60,
        frames: [
          "Thank you for … . We accept …",
          "On delivery notes, …",
          "On reissued invoices, …",
          "One point for the record: …",
          "I am happy to …"
        ],
        note: { kind: "writer", title: "Accept, act, and then add context",
                body: "<p>Context offered before acceptance reads as a defence. The same sentence after two concrete actions reads as information, and an auditor will record it.</p>" },
        checklist: [
          "Is acceptance of both findings in the first line?",
          "Does each finding have a specific action with a name?",
          "Is the context offered after the actions rather than before?",
          "Have you avoided explaining why the gaps happened?",
          "Have you offered to go through it?"
        ],
        modelJobs: [
          "Accepts the findings",
          "Action on the first",
          "Action on the second",
          "Adds context for the record",
          "Offers to discuss"
        ],
        model: "Dear Mr Daoud,\n\nThank you for the sample check. We accept both findings without qualification.\n\nOn delivery notes: from this month a signed note is chased within thirty days of dispatch, Al-Masri is responsible, and if none has arrived within sixty days that fact is recorded in the file rather than left silent.\n\nOn reissued invoices: the person authorising a reissue now signs off and is named on the document.\n\nOne point for the record: the two-pallet discrepancy was found by our own warehouse before the goods left, which is why the invoice was reissued.\n\nI am happy to go through either procedure with you.\n\nNour Haddad" },

      { id: "3c", section: 3, sectionTitle: "Write it yourself", letter: "C",
        concepts: ["write", "evidence"],
        kind: "paragraph", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "One paragraph for the handbook on why records are kept.",
        min: 60,
        note: { kind: "writer", title: "Give the reason, or the rule decays",
                body: "<p>A rule with no reason survives about six months. A rule whose purpose people understand survives a change of staff, because the next person can work out what to do in the case nobody wrote down.</p>" },
        must: [
          "That the point is being able to show, not just to have done",
          "What an audit trail is",
          "Why nothing is corrected by hand",
          "What to do when a document is missing"
        ],
        model: "Records are kept so that we can show how something was done, not only so that it was done. An audit trail is the chain of documents that lets somebody start at a payment and work backwards to the order that produced it; a single missing link breaks everything above it. That is why nothing is corrected by hand: two versions of a document that cannot be told apart are worse than one document that is wrong, because nobody can see which was used. If a document is missing, say so and record the gap against the consignment. A recorded gap can be explained; a silent one looks like concealment.",
        explain: { terms: [
          { en: "to work backwards", gloss: "to follow a chain from the end to the start", ar: "التتبّع عكسيًا" },
          { en: "concealment", gloss: "hiding something deliberately", ar: "إخفاء" }
        ] } }

    ]
  };
})();
