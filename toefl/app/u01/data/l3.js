/* Unit 1 · How We Learn — LESSON 3 · GRAMMAR
   Present and past verb forms · yes/no questions · adjectives and adverbs.
   The book's sequence: realia -> paradigm chart -> Language connection ->
   build -> error correction. */
(function () {
  window.PAGE = {
    id: "u01-l3", unit: "u01", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Use present and past forms to describe habits and findings",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review present and past forms", letter: "A",
        concepts: ["read", "evidence"],
        kind: "annotate", task: null, n: 0,
        prompt: "The student's note and the lab record. Click each line and name the tense it uses. The choice is never about style \u2014 it is about whether the thing is a habit, is happening now, or is finished.",
        jobs: ["Simple present \u2014 a habit or a standing fact",
               "Present continuous \u2014 going on right now",
               "Simple past \u2014 finished, and dated"],
        sentences: [
          { group: "What I do", text: "I test myself every evening, and I usually get about half of it wrong the first time.",
            job: "Simple present \u2014 a habit or a standing fact",
            why: "<i>every evening</i> and <i>usually</i> are the giveaway: this is what happens repeatedly, not what happened once." },
          { text: "Right now I am working through last week's chapter.",
            job: "Present continuous \u2014 going on right now",
            why: "<i>Right now</i> fixes it to this moment. The habit is <i>I work</i>; the thing in progress is <i>I am working</i>." },
          { group: "What the study found", text: "Forty students read a passage twice.",
            job: "Simple past \u2014 finished, and dated",
            why: "A completed study. <i>read</i> here is the past \u2014 spelled the same, said /red/." },
          { text: "Forty more read it once and then wrote down what they remembered.",
            job: "Simple past \u2014 finished, and dated",
            why: "<i>wrote</i> settles it: the whole sentence is reporting what was done, not what is done." },
          { text: "A week later the second group was still ahead.",
            job: "Simple past \u2014 finished, and dated",
            why: "The result of a finished study stays in the past, even though the finding still holds today." }
        ],
        text: { every: 1, blocks: [
          { h: "What I do", lines: [
            "I test myself every evening, and I usually get about half of it wrong the first time.",
            "Right now I am working through last week's chapter."
          ] },
          { h: "What the study found", lines: [
            "Forty students read a passage twice.",
            "Forty more read it once and then wrote down what they remembered.",
            "A week later the second group was still ahead."
          ] }
        ] },
        after: "<p>Habits and standing facts take the present. A completed study takes the past. The whole unit sits on that contrast.</p>" },

      { id: "1b", section: 1, sectionTitle: "Review present and past forms", letter: "B",
        concepts: ["word"],
        kind: "cloze", task: null, n: 0,
        prompt: "Look back at 1A, then complete the rule in your own words.",
        heading: "Language connection: present and past",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Simple present</b> I test · he tests<br><b>Present continuous</b> I am working<br><b>Simple past</b> they read · she wrote<br><b>Past continuous</b> they were reading</p>" },
        text: "We use the ___ to talk about something that happens regularly, and the ___ for something happening at the moment we are speaking. We use the ___ for a study that is finished, and the ___ to say what was going on at a particular time.",
        gaps: [
          { options: ["simple present", "simple past"], answer: "simple present",
            why: "<i>I test myself every evening</i> — a habit." },
          { options: ["present continuous", "simple past"], answer: "present continuous",
            why: "<i>Right now I am working</i> — happening as we speak." },
          { options: ["simple past", "simple present"], answer: "simple past",
            why: "<i>Forty students read a passage</i> — finished." },
          { options: ["past continuous", "simple present"], answer: "past continuous",
            why: "<i>what was going on at a particular time</i> is the past continuous's job." }
        ] },


      { id: "1c", section: 1, sectionTitle: "Review present and past forms", letter: "C",
        concepts: ["word"],
        kind: "cloze", task: null, n: 0,
        prompt: "The same two tenses, seen from the question and the negative. Complete the rule.",
        heading: "Language connection: questions and negatives",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Question</b> Do you test yourself? · Did they read it twice?<br><b>Negative</b> She does not re-read. · They did not remember.<br>In both, the tense sits in the auxiliary and the main verb goes bare.</p>" },
        text: "To ask a yes/no question in the present we put ___ in front of the subject, and the main verb goes back to its ___ form. For a finished event we use ___ instead, and the main verb still does not change. To make either one negative we add ___ straight after the auxiliary.",
        gaps: [
          { options: ["do or does", "is or are"], answer: "do or does",
            why: "<i>Do you check…?</i> — <i>be</i> would give us the continuous, which asks a different question." },
          { options: ["base", "past"], answer: "base",
            why: "<i>Do you test</i>, never <i>Do you tests</i>: the auxiliary has already taken the ending." },
          { options: ["did", "was"], answer: "did",
            why: "<i>Did they read it twice?</i> — <i>was</i> would again give the continuous." },
          { options: ["not", "no"], answer: "not",
            why: "<i>did not</i>, <i>does not</i>. <i>No</i> goes in front of a noun, not a verb." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        carry: "1a",
        concepts: ["word", "comparison"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order. There are always more words than places.",
        items: [
          { cue: "A habit.", band: "A2",
            target: "I test myself every evening",
            extra: ["am", "yesterday"], extraWhy: { "am": "<i>am</i> is a present form of <i>be</i> — and nothing in this sentence needs that done.", "yesterday": "Nothing in this sentence needs <i>yesterday</i>. A word you cannot name a job for is the spare one." },
            why: "Simple present for a routine." },
          { cue: "Happening now.", band: "A2",
            target: "She is working through last week's chapter",
            extra: ["works", "was"], extraWhy: { "works": "The sentence uses <b>working</b>. <i>works</i> is the same word in another form, and only one of them fits this slot.", "was": "<i>was</i> is a past form of <i>be</i> — and nothing in this sentence needs that done." },
            why: "Present continuous for something in progress." },
          { cue: "A finished study.", band: "B1",
            target: "Forty students read the passage twice last week",
            extra: ["are", "reading"], extraWhy: { "are": "<i>are</i> is a present form of <i>be</i> — and nothing in this sentence needs that done.", "reading": "The sentence uses <b>read</b>. <i>reading</i> is the same word in another form, and only one of them fits this slot." },
            why: "Simple past with a finished time expression." },
          { cue: "A yes/no question in the past.", band: "B1",
            target: "Did the second group remember more a week later",
            extra: ["does", "remembered", "was"], extraWhy: { "does": "<i>does</i> builds a question or negative — and nothing in this sentence needs that done.", "remembered": "The sentence uses <b>remember</b>. <i>remembered</i> is the same word in another form, and only one of them fits this slot.", "was": "<i>was</i> is a past form of <i>be</i> — and nothing in this sentence needs that done." },
            why: "<i>Did</i> + bare infinitive. The past is already in <i>did</i>." },
          { cue: "Two tenses in one sentence.", band: "B2",
            target: "While the first group was re-reading the second group was testing itself",
            extra: ["reads", "tested", "and"], extraWhy: { "reads": "The sentence uses <b>reading</b>. <i>reads</i> is the same word in another form, and only one of them fits this slot.", "tested": "The sentence uses <b>testing</b>. <i>tested</i> is the same word in another form, and only one of them fits this slot.", "and": "<i>and</i> joins two things of the same kind — and nothing in this sentence needs that done." },
            why: "Two past continuous clauses: both actions in progress at the same time." },
          { cue: "An adverb of manner.", band: "C1",
            target: "Students who test themselves judge their own knowledge accurately",
            extra: ["accurate", "very", "is"], extraWhy: { "accurate": "The sentence uses <b>accurately</b>. <i>accurate</i> is the same word in another form, and only one of them fits this slot.", "very": "<i>very</i> intensifies an adjective or adverb — and nothing in this sentence needs that done.", "is": "<i>is</i> is a present form of <i>be</i> — and nothing in this sentence needs that done." },
            why: "<i>Judge</i> is a verb, so it takes the adverb <i>accurately</i>, not the adjective." }
        ] },


      { id: "2b", section: 2, sectionTitle: "Build sentences", letter: "B",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Six more. Three of them are questions or negatives, where the tense moves into the auxiliary.",
        items: [
          { cue: "A standing fact.", band: "A2",
            target: "Memory fades fastest in the first day",
            extra: ["faded", "very"], extraWhy: { "faded": "The sentence uses <b>fades</b>. <i>faded</i> is the same word in another form, and only one of them fits this slot.", "very": "<i>very</i> intensifies an adjective or adverb — and nothing in this sentence needs that done." },
            why: "Simple present for something that is generally true, not for one occasion." },
          { cue: "In progress in the past.", band: "A2",
            target: "They were still reading when the hour ended",
            extra: ["read", "are"], extraWhy: { "read": "The sentence uses <b>reading</b>. <i>read</i> is the same word in another form, and only one of them fits this slot.", "are": "<i>are</i> is a present form of <i>be</i> — and nothing in this sentence needs that done." },
            why: "Past continuous for the longer action, simple past for the one that interrupts it." },
          { cue: "A yes/no question in the present.", band: "B1",
            target: "Do you check what you got wrong",
            extra: ["did", "checking", "are"], extraWhy: { "did": "<i>did</i> builds a past question or negative — and nothing in this sentence needs that done.", "checking": "The sentence uses <b>check</b>. <i>checking</i> is the same word in another form, and only one of them fits this slot.", "are": "<i>are</i> is a present form of <i>be</i> — and nothing in this sentence needs that done." },
            why: "<i>Do</i> + bare infinitive. The past inside the sentence sits in <i>got</i>, not in the auxiliary." },
          { cue: "A negative in the past.", band: "B1",
            target: "The re-readers did not predict their scores well",
            extra: ["do", "predicted", "good"], extraWhy: { "do": "<i>do</i> builds a question or negative — and nothing in this sentence needs that done.", "predicted": "The sentence uses <b>predict</b>. <i>predicted</i> is the same word in another form, and only one of them fits this slot.", "good": "Nothing in this sentence needs <i>good</i>. A word you cannot name a job for is the spare one." },
            why: "<i>did not predict</i>, never <i>did not predicted</i>. And <i>well</i>, because it describes the verb." },
          { cue: "Two finished actions in order.", band: "B2",
            target: "She closed the book and then wrote what she remembered",
            extra: ["closes", "writing", "while"], extraWhy: { "closes": "The sentence uses <b>closed</b>. <i>closes</i> is the same word in another form, and only one of them fits this slot.", "writing": "Nothing in this sentence needs <i>writing</i>. A word you cannot name a job for is the spare one.", "while": "<i>while</i> marks something going on at the same time — and nothing in this sentence needs that done." },
            why: "Two simple pasts joined by <i>and then</i>: one finished, then the next began." },
          { cue: "An adverb in front of an adjective.", band: "C1",
            target: "The difference was remarkably consistent across every age group",
            extra: ["remarkable", "consistently", "is"], extraWhy: { "remarkable": "The sentence uses <b>remarkably</b>. <i>remarkable</i> is the same word in another form, and only one of them fits this slot.", "consistently": "The sentence uses <b>consistent</b>. <i>consistently</i> is the same word in another form, and only one of them fits this slot.", "is": "<i>is</i> is a present form of <i>be</i> — and nothing in this sentence needs that done." },
            why: "<i>Remarkably</i> modifies the adjective <i>consistent</i>, which in turn describes <i>difference</i>." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build sentences", letter: "C",
        carry: "1a",
        concepts: ["correct"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five more sentences from drafts. One word in each is wrong. Click it, then type the correction.",
        items: [
          { text: "They readed the passage twice before the test.",
            fixed: "They read the passage twice before the test.",
            wrong: "readed", right: "read",
            why: "<i>Read</i> is irregular: the past is spelled the same and said differently, /red/." },
          { text: "Did the second group remembered more a week later?",
            fixed: "Did the second group remember more a week later?",
            wrong: "remembered", right: "remember",
            why: "<i>Did</i> already carries the past, so the main verb goes bare." },
          { text: "The results was the same in every group.",
            fixed: "The results were the same in every group.",
            wrong: "was", right: "were",
            why: "<i>Results</i> is plural. <i>Result</i> would take <i>was</i>." },
          { text: "She worked hardly all term and still got the top mark.",
            fixed: "She worked hard all term and still got the top mark.",
            wrong: "hardly", right: "hard",
            why: "<i>Hard</i> is both adjective and adverb. <i>Hardly</i> is a different word meaning <i>almost not at all</i>, so the sentence as written says the opposite of what it means." },
          { text: "He don't test himself before an exam.",
            fixed: "He doesn't test himself before an exam.",
            wrong: "don't", right: "doesn't",
            why: "Third person singular: <i>he doesn't</i>. The <i>-s</i> has moved onto the auxiliary." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Adjectives and adverbs", letter: "A",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the word. Decide first whether it describes a noun or a verb.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>Adjectives describe nouns: <i>a <b>quick</b> learner</i>. Adverbs describe verbs: <i>she learns <b>quickly</b></i>. Some are irregular: <i>good → well</i>; some do not change: <i>hard → hard</i>.</p>" },
        items: [
          { text: "She answered every question c___.", answer: "correctly", given: [0, 1],
            why: "It describes <i>answered</i>, a verb, so the adverb." },
          { text: "He is a c___ worker who checks everything twice.", answer: "careful", given: [0, 1],
            why: "It describes <i>worker</i>, a noun, so the adjective — not <i>carefully</i>." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Adjectives and adverbs", letter: "B",
        concepts: ["word", "claim"],
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Two more. Again, decide first whether the word describes a noun or a verb.",
        items: [
          { text: "The two groups performed very d___ a week later.", answer: "differently", given: [0, 1],
            why: "It describes <i>performed</i>, a verb, so the adverb. The adjective <i>different</i> would need a noun after it." },
          { text: "An a___ reader notices when an argument changes direction.", answer: "attentive", given: [0, 1],
            why: "It describes <i>reader</i>, a noun, so the adjective. The adverb <i>attentively</i> would describe how someone reads." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Adjectives and adverbs", letter: "C",
        concepts: ["word"],
        kind: "wordbank", task: null, n: 0,
        prompt: "Drag a word into each gap. Two words in the bank are not used — and both of them are the wrong half of a pair.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>The test for which half you need is never the meaning. It is what the word is attached to: a noun takes the adjective, a verb or an adjective takes the adverb.</p>" },
        extra: ["careless", "consider"],
        items: [
          { text: "She reads ___ when the material is new to her, and faster afterwards.", answer: "slowly",
            why: "attached to <i>reads</i>, a verb." },
          { text: "A ___ reader checks the date on every source.", answer: "cautious",
            why: "attached to <i>reader</i>, a noun." },
          { text: "The effect was ___ larger in the older group.", answer: "considerably",
            why: "attached to <i>larger</i>, an adjective — so an adverb, not <i>consider</i>." },
          { text: "His notes are ___ but almost unreadable.", answer: "complete",
            why: "after <i>are</i>, describing <i>notes</i>: an adjective." },
          { text: "They answered ___ and lost four marks.", answer: "carelessly",
            why: "attached to <i>answered</i>, a verb — so not <i>careless</i>, which is sitting in the bank to catch you." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write four sentences about your own week — one in each of the four tenses in 1B.</p>" } }
    ]
  };
})();
