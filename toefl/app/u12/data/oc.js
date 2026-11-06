/* Unit 12 · Art, Audience and Culture — ON CAMPUS
   Function: help someone else understand. */
(function () {

  /* Two exercises use this talk: the comprehension items, and the outline
     filled in while it plays. */
  var TALK1 = { track: "12-12", label: "Where the joint is", lines: [{ who: "haddad", text:
          "I want to talk about a habit of reading that will serve you in every subject, and it is the habit of separating what a writer claims from what a writer has shown. Criticism is unusually good practice for this, because critics tend to move between the two without marking the transition. Here is a typical sentence. The film refuses the consolations of its genre, choosing instead to leave its audience unsettled. Now, part of that is observation. The film does not end the way films of that kind usually end, and anyone can check it. The rest is interpretation. Refusing is a word about intention, and choosing is another, and neither of them is visible on the screen. I am not objecting to the sentence. Interpretation is the whole point of criticism and a review without it would be a listing. What I am asking is that you notice where the joint is. When you meet a claim about what a work is doing, ask what you would have to see in order to agree, and then ask whether the writer has shown you that. Sometimes they have. When they have not, you have found the place where the argument is actually being made." }] };

  window.PAGE = {
    id: "u12-oc", unit: "u12", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Help someone else understand",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice about the gallery visit. It plays once.",
        speaker: "dan", speakerNote: "course administrator",
        audio: { track: "12-11", label: "About the gallery visit", lines: [{ who: "dan", text:
          "About the gallery visit. We have been given a curator-led tour at two, which was not originally part of the booking, so the group will meet at one forty-five rather than two fifteen. The written task has not changed. If you cannot make the earlier time, join us in the second room at half past two." }] },
        items: [
          { q: "Why has the meeting time moved?",
            options: [
              { text: "A curator-led tour has been added at two.", correct: true,
                why: "<i>which was not originally part of the booking</i> explains why this is a change." },
              { text: "The gallery closes earlier.", why: "Closing times are not mentioned." },
              { text: "The written task has changed.", why: "It explicitly has not." }
            ] },
          { q: "What is the new meeting time?",
            options: [
              { text: "One forty-five.", correct: true, why: "<i>rather than two fifteen</i> marks it as the change." },
              { text: "Two fifteen.", why: "That is the old time." },
              { text: "Half past two.", why: "That is the fallback for latecomers." }
            ] },
          { q: "What should someone who cannot arrive early do?",
            options: [
              { text: "Join the group in the second room at half past two.", correct: true,
                why: "The conditional sentence gives both the place and the time." },
              { text: "Skip the visit.", why: "An alternative is offered." },
              { text: "Email the administrator.", why: "No contact is requested." }
            ] }
        ] },

            { id: "a2", section: 1, sectionTitle: "Listen to an announcement", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A second notice, read out before the gallery visit. It plays once.",
        speaker: "dan", speakerNote: "course administrator",
        audio: { track: "12-13", label: "About Thursday", lines: [{ who: "dan", text:
          "Three things about Thursday. The curator's tour now starts at two rather than three, which I know clashes with the one-thirty seminar, and I will come back to that. Places on the tour are limited to twenty and cannot be held by telephone, so if you want one, come and put your name on the list outside my office today. And if you cannot make two o'clock, the gallery is open until six and the works are the same works; what you miss is the commentary, not the exhibition. I would rather people went later than did not go." }] },
        items: [
          { q: "How can a place on the tour be secured?",
            options: [
              { text: "By adding your name to a list outside his office today.", correct: true,
                why: "He gives the method and the deadline in the same sentence as the restriction." },
              { text: "By telephoning the gallery.", why: "Explicitly ruled out." },
              { text: "By arriving early on Thursday.", why: "Places are limited and taken in advance." }
            ] },
          { q: "What does he say to people who cannot come at two?",
            options: [
              { text: "Go later; the works are the same and only the commentary is missed.", correct: true,
                why: "He separates the exhibition from the tour, which is the useful distinction for anyone with a clash." },
              { text: "Wait for a second tour.", why: "No second tour is mentioned." },
              { text: "Skip the visit entirely.", why: "His last sentence says the opposite." }
            ] },
          { q: "What is his attitude to the seminar clash?",
            options: [
              { text: "He acknowledges it and promises to return to it.", correct: true,
                why: "<i>Which I know clashes … and I will come back to that</i> — he names the problem before anyone raises it." },
              { text: "He says it cannot be helped.", why: "He undertakes to address it." },
              { text: "He does not mention it.", why: "It is the first thing he mentions after the time." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        concepts: ["listen", "inference", "claim"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on a habit of reading. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: TALK1,
        transcript: "<p>Notice where the joint is between observation and interpretation. Ask what you would have to see in order to agree, then ask whether the writer has shown you that.</p>",
        items: [
          { q: "What habit is the speaker recommending?",
            options: [
              { text: "Separating what a writer claims from what a writer has shown.", correct: true,
                why: "Her opening sentence, and the example exists to demonstrate it." },
              { text: "Distrusting all criticism.", why: "“I am not objecting to the sentence.”" },
              { text: "Reading reviews before watching.", why: "Order of reading is never discussed." }
            ] },
          { q: "Which part of her example sentence is observation?",
            options: [
              { text: "That the film does not end as films of its kind usually do.", correct: true,
                why: "She says anyone can check it — that is her test for observation." },
              { text: "That the film refuses its genre.", why: "<i>Refusing</i> is a word about intention." },
              { text: "That the audience is left unsettled.", why: "A claim about effect, not a checkable fact." }
            ] },
          { q: "Why does she say a review without interpretation would be <i>a listing</i>?",
            options: [
              { text: "Because interpretation is what criticism is for.", correct: true,
                why: "She says so directly, and the remark exists to stop the talk being read as an attack." },
              { text: "Because reviews are too short.", why: "Length is not raised." },
              { text: "Because lists are easier to write.", why: "Difficulty is not her point." }
            ] },
          { q: "What does she mean by <i>the place where the argument is actually being made</i>?",
            options: [
              { text: "The interpretive claim the writer has not supported.", correct: true,
                why: "One step from her instruction: when they have not shown you, that unsupported joint is where the real argument sits." },
              { text: "The opening paragraph.", why: "Position is not what she is pointing at." },
              { text: "The part everyone agrees on.", why: "Agreement is where no argument is needed." }
            ] }
        ] },

            { id: "b2", section: 2, sectionTitle: "Listen to an academic talk", letter: "B",
        concepts: ["listen"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "The same lecturer, on the question this course has been circling all year.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "12-14", label: "Two claims about the audience", lines: [{ who: "haddad", text:
          "I want to end on a question that is asked badly almost every time it is asked. Does the audience change the work? There are two claims hiding inside that sentence, and they are not the same claim. The first is that different people have different experiences of the same work, and that somebody who knows the tradition sees things a newcomer does not. That is obviously true. Nobody has ever seriously denied it, and an essay that spends two thousand words establishing it has established nothing. The second claim is that the work itself is different — that there is no object sitting underneath all these experiences, only the experiences. That is a real position, it has serious people on both sides, and it is hard. Now, what happens in practice is that an essay argues for the first claim, which is easy, and concludes the second, which is not. The move is almost never deliberate. It happens because the same sentence can express both, and English is quite happy to let it. So when you read this argument, and you will read it often, find the sentence where the writer slides from one to the other. It is usually a single word, and it is usually a verb." }] },
        transcript: "<p>Two claims: different experiences, which nobody denies, and a different work, which is hard. Essays argue the first and conclude the second, and the slide is usually one verb.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "The question hides two claims, and arguments for the easy one are used to establish the hard one.", correct: true,
                why: "She separates them, grades them, and then describes the slide between them." },
              { text: "Audiences do not change works.", why: "She calls the second claim a real position with serious people on both sides." },
              { text: "The question cannot be answered.", why: "She says it is asked badly, not that it is unanswerable." }
            ] },
          { q: "What does she say about the first claim?",
            options: [
              { text: "It is obviously true and nobody has seriously denied it.", correct: true,
                why: "Which is why an essay that only establishes it has established nothing." },
              { text: "It is the controversial one.", why: "The second is the controversial one." },
              { text: "It is false.", why: "She calls it obviously true." }
            ] },
          { q: "What is the second claim?",
            options: [
              { text: "That there is no work underneath the experiences, only the experiences.", correct: true,
                why: "A claim about what exists, rather than about how it is perceived." },
              { text: "That critics see more than ordinary viewers.", why: "That belongs to the first claim." },
              { text: "That works change over time.", why: "Change over time is not what she is describing." }
            ] },
          { q: "What does she tell them to look for when reading?",
            options: [
              { text: "The sentence where the writer slides from one claim to the other.", correct: true,
                why: "And she adds what it usually looks like: a single word, usually a verb." },
              { text: "Whether the writer defines <i>audience</i>.", why: "Definitions are not what she asks for." },
              { text: "Which of the two claims they personally believe.", why: "She asks them to locate a move in the text, not to take a side." }
            ] }
        ] },

      { id: "b3", section: 2, sectionTitle: "Listen to an academic talk", letter: "C",
        concepts: ["listen"],
        kind: "notes", task: null, n: 0,
        prompt: "Play the first talk again and complete the outline while it runs.",
        audio: TALK1,
        title: "Lecture — where the joint is",
        note: { kind: "reader",
                body: "<p>The last outline in the book. She gives a habit, an example, the two halves of the example, and a question to carry away. That shape has recurred in almost every talk this course contains.</p>" },
        lines: [
          "Habit: separate what a writer claims from what a writer has ___",
          "- Example sentence: the film ___ the consolations of its genre",
          "- Observation: the film does not ___ the way such films usually do",
          "- Question to ask: what would I have to ___ in order to agree?"
        ],
        gaps: [
          { answer: "shown", why: "the distinction the whole talk rests on, and the one Lesson 5's second article then argues at length." },
          { answer: "refuses", why: "her example, and the word she identifies as carrying the interpretation." },
          { answer: "end", why: "the checkable half, available to anyone who watches it." },
          { answer: "see", why: "the question to leave the course with." }
        ] },

      { id: "c", section: 3, sectionTitle: "Help someone understand", letter: "A",
        concepts: ["read"],
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. Explaining well begins with finding out what was actually lost.",
        note: { kind: "speak",
                body: "<i>Which bit lost you?</i><i>Shall I go back a step?</i><i>Tell me what you did follow.</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT TO HELP SOMEONE UNDERSTAND",
          blocks: [
            { h: "Do this", lines: [
              "Find out where they stopped following, before explaining anything.",
              "Give the checkable thing first, the interpretation second.",
              "Ask them to say it back."
            ] },
            { h: "Say this", lines: [
              "Which part lost you — what happens, or what the critic says about it?",
              "Here's what's on the screen. Here's what he's claiming about it.",
              "Can you put that back to me in your own words?"
            ] }
          ] },
        after: "<p>The last one is the only real test. If they can say it back differently, they have it; if they can only repeat your words, they do not — which is the same test Unit 11 applied to paraphrasing.</p>" },

      { id: "c2", section: 3, sectionTitle: "Help someone understand", letter: "B",
        concepts: ["measurement"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table from the chart in 3A. The right-hand column says what each move protects.",
        caption: "Four moves, and what each one protects",
        head: ["Move", "What you say", "What it protects"],
        rows: [
          ["Find the gap first", "Which part ___ you — what happens, or what the critic says about it?", "the twenty minutes you would spend explaining what they already had"],
          ["Checkable thing first", "Here's what's on the ___ ", "their ability to disagree with the second half"],
          ["Interpretation second", "Here's what he's ___ about it", "the seam, which is the thing this unit is about"],
          ["Ask for it back",      "Can you put that back to me in your own ___ ?", "you, from the illusion that ___ means understanding"]
        ],
        gaps: [
          { answer: "lost", why: "asking where they stopped following takes four seconds and saves the whole explanation." },
          { answer: "screen", why: "the observation, offered first and separately." },
          { answer: "claiming", why: "a verb that marks it as a claim rather than smuggling it in as a fact." },
          { answer: "words", why: "the test Unit 6 and Unit 11 both arrived at independently." },
          { answer: "repeating", why: "somebody who can only give your words back has your words and not your meaning." }
        ] },

      { id: "c3", section: 3, sectionTitle: "Help someone understand", letter: "C",
        concepts: ["read"],
        kind: "read-only", task: null, n: 0,
        prompt: "The last sentence in the book.",
        text: { blocks: [{ lines: [
          "Twelve units, and one question underneath all of them: what would I have to see in order to agree with this?"
        ],
        closer: { kind: "life",
          body: "<p>Next time you explain something, ask the person to say it back. Notice how often the gap is somewhere you did not expect.</p>" } }] } }
    ]
  };
})();
