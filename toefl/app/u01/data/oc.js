/* Unit 1 · How We Learn — ON CAMPUS
   The book's AT WORK page, register moved to campus. Its A/B/C listening trio
   is exactly how the 2026 test clusters items on one stimulus, which is why
   the two new listening genres live here. */
(function () {

  /* The talk's audio lives in a variable because two exercises use it: the
     comprehension items, and the note-completion that runs while it plays. */
  var TALK1 = { track: "1-13", label: "Why retrieval works", lines: [{ who: "haddad", text:
          "I want to explain a result that most students find annoying. If you read a chapter twice, you will feel that you know it. If instead you read it once and then close the book and write down everything you can remember, you will feel considerably worse. You will also, two weeks later, remember roughly twice as much. The reason is that retrieval is not a test of learning. It is an episode of learning. Each time you pull a fact out of memory, the route to that fact is strengthened, in a way that simply seeing the fact again does not strengthen it. So the discomfort you feel is not a sign that the method is failing. It is a sign that the method is doing the work. There is a catch, and it matters. Retrieval only helps if you afterwards check what you got wrong. Students who test themselves and never look at the answers improve very little, because they rehearse their errors as faithfully as their successes. So the sequence is: read once, close the book, write what you have, and then — this is the part people skip — go back and find out which parts you invented." }] };

  window.PAGE = {
    id: "u01-oc", unit: "u01", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Show that you are following a lecture",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        concepts: ["listen", "inference", "sample"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice read out at the start of a lecture. It plays once.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "1-12", label: "Before we begin", lines: [{ who: "haddad", text:
          "Before we begin, two changes. Thursday's study-skills workshop has moved from room B two-fourteen to the lecture theatre, because the numbers doubled overnight. The sign-up deadline is extended to Friday at five. If you have already registered you do not need to do anything, but do check your email on Thursday morning, because the room may change again." }] },
        items: [
          { q: "What has changed about Thursday's workshop?",
            options: [
              { text: "The room, and the sign-up deadline.", correct: true, why: "Both are stated: a new room and a deadline moved to Friday." },
              { text: "The day and the time.", why: "It is still Thursday; no time is given." },
              { text: "The speaker.", why: "No speaker is mentioned." }
            ] },
          { q: "What must students who already registered do?",
            options: [
              { text: "Nothing now, but check email on Thursday morning.", correct: true,
                why: "“You do not need to do anything, <i>but</i> do check…” — the instruction is in the second half." },
              { text: "Register again before Friday.", why: "That applies to people who have not registered." },
              { text: "Go to room B214 as usual.", why: "That is the room it has moved out of." }
            ] },
          { q: "Why does the speaker mention email at the end?",
            options: [
              { text: "To warn that the arrangement may change again.", correct: true,
                why: "“because the room may change again” — the purpose of the whole last clause." },
              { text: "To ask students to reply.", why: "No reply is requested." },
              { text: "To explain how to register.", why: "Registration is handled by the deadline sentence." }
            ] }
        ] },


      { id: "a2", section: 1, sectionTitle: "Listen to an announcement", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A second notice, read out before the break. It plays once.",
        speaker: "dan", speakerNote: "peer advisor",
        audio: { track: "1-14", label: "One more thing", lines: [{ who: "dan", text:
          "One more thing before the break. The library's group study rooms are now booked through the app rather than at the desk, and you can hold a room for two hours at a time. Bookings open at eight each morning, and the Thursday evening slots go within minutes, so set an alarm if you want one. If nobody arrives within fifteen minutes the booking is released automatically, which is why you will sometimes find an empty room still marked as taken." }] },
        items: [
          { q: "How are group study rooms booked now?",
            options: [
              { text: "Through the app.", correct: true, why: "<i>now booked through the app rather than at the desk</i> — the contrast is the information." },
              { text: "At the desk.", why: "That is the arrangement being replaced." },
              { text: "By email to the library.", why: "Email is never mentioned." }
            ] },
          { q: "Why might a room marked as taken be standing empty?",
            options: [
              { text: "The booking is held for fifteen minutes before it is released.", correct: true,
                why: "The last sentence gives the cause and the visible effect in one breath. Cause-and-effect items on this task usually sit in the final clause." },
              { text: "The app is out of date.", why: "The speaker blames the fifteen-minute window, not the software." },
              { text: "Two hours have passed.", why: "After two hours the booking has ended, so the room would not be marked as taken." }
            ] },
          { q: "What does the speaker advise about Thursday evenings?",
            options: [
              { text: "Book at eight, because those slots go almost immediately.", correct: true,
                why: "<i>set an alarm</i> is advice, and the reason is in the clause before it." },
              { text: "Avoid Thursday evenings.", why: "He says they are popular, not that you should give up on them." },
              { text: "Book two rooms in case.", why: "Nothing in the notice suggests this." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        concepts: ["listen", "inference", "measurement"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on why retrieval works. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: TALK1,
        transcript: "<p>Read once, close the book, write what you have, then go back and find out which parts you invented.</p>",
        items: [
          { q: "What is the speaker's main claim?",
            options: [
              { text: "Retrieving an idea is itself a learning event, not just a check on learning.", correct: true,
                why: "She says it in those words, and the rest of the talk explains the mechanism." },
              { text: "Re-reading is the best way to prepare.", why: "The talk argues the opposite." },
              { text: "Students should feel confident while they study.", why: "She says the discomfort is a good sign." }
            ] },
          { q: "Roughly how much more is remembered after two weeks?",
            options: [
              { text: "About twice as much.", correct: true, why: "“roughly twice as much” — a detail worth noting on the pad." },
              { text: "About half as much.", why: "That reverses the comparison." },
              { text: "She does not say.", why: "She gives a figure." }
            ] },
          { q: "Why does she say the catch “matters”?",
            options: [
              { text: "Without checking your errors, you rehearse them.", correct: true,
                why: "Her reason is explicit: students who never look at the answers rehearse errors as faithfully as successes." },
              { text: "Because retrieval takes longer.", why: "Time is never mentioned as the problem." },
              { text: "Because the method only suits some subjects.", why: "No subject limits are given." }
            ] },
          { q: "What would she say about a student who tests themselves but never checks the answers?",
            options: [
              { text: "They are likely to improve very little.", correct: true,
                why: "She says so directly — and the inference item on this task usually sits one step from something stated." },
              { text: "They are using the method correctly.", why: "The checking step is the one she says people skip." },
              { text: "They should read the chapter twice instead.", why: "She never recommends re-reading." }
            ] }
        ] },


      { id: "b2", section: 2, sectionTitle: "Listen to an academic talk", letter: "B",
        concepts: ["listen", "inference", "evidence"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "The same lecturer, a week later, on the order you study things in.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "1-15", label: "Blocking and interleaving", lines: [{ who: "haddad", text:
          "Last week I told you when to study. Today I want to tell you what order to study in, because that answer is also counterintuitive. Suppose you have three topics to revise. The natural approach is to finish the first, then the second, then the third. Psychologists call that blocking. The alternative is to move between them — a little of the first, a little of the third, back to the second — which is called interleaving. Blocking feels far better. While you are inside one topic everything connects, each problem resembles the last, and you get faster. Interleaving feels like being interrupted. And yet, across studies in mathematics, in medical diagnosis, even in identifying painters by their style, the interleaved groups perform worse during practice and substantially better on the test. The reason is that blocking lets you stop choosing. When every problem on the page is the same kind, you never have to work out which method applies; you only have to apply it. The examination, of course, does not tell you which method applies. That is most of what it is testing. Interleaving puts the choosing back in. One caution. Interleaving helps between things that could be confused with each other. Alternating between statistics and Spanish is simply task-switching, and that costs you." }] },
        transcript: "<p>Interleaving puts the choosing back in — but only between things that could be confused with each other.</p>",
        items: [
          { q: "What is the speaker's main claim?",
            options: [
              { text: "Mixing topics feels worse during practice and produces better results on the test.", correct: true,
                why: "The sentence beginning <i>And yet</i> states both halves, and the rest of the talk explains the second." },
              { text: "Students should revise three topics at once.", why: "Three topics is her example, not her recommendation." },
              { text: "Blocking is better for mathematics.", why: "Mathematics is one of the fields where interleaving won." }
            ] },
          { q: "What does she mean by blocking?",
            options: [
              { text: "Finishing one topic completely before starting the next.", correct: true,
                why: "She defines it immediately after describing it: <i>finish the first, then the second, then the third</i>." },
              { text: "Setting aside a block of time for revision.", why: "A plausible reading of the word, and not the one she gives." },
              { text: "Refusing to move on until you understand something.", why: "She never discusses understanding as the trigger for moving on." }
            ] },
          { q: "According to the talk, why does blocking feel so much better?",
            options: [
              { text: "Inside one topic you never have to work out which method to use.", correct: true,
                why: "<i>Blocking lets you stop choosing</i> — and the next sentence spells out what that means." },
              { text: "The topics are easier when studied alone.", why: "She says nothing about the topics themselves being easier." },
              { text: "You can study for longer without a break.", why: "Length of session is last week's talk, not this one." }
            ] },
          { q: "What is the caution she ends on?",
            options: [
              { text: "Interleaving only helps between things that can be confused with each other.", correct: true,
                why: "Her example makes the limit concrete: statistics and Spanish cannot be confused, so switching between them is only switching." },
              { text: "Interleaving should not be used before an examination.", why: "The examination is the thing it prepares you for in her argument." },
              { text: "Interleaving takes more hours than blocking.", why: "She never compares the time the two take." }
            ] }
        ] },

      { id: "b3", section: 2, sectionTitle: "Listen to an academic talk", letter: "C",
        concepts: ["listen", "evidence"],
        kind: "notes", task: null, n: 0,
        prompt: "Play the first talk again and complete the outline while it runs. These are the four things worth writing down from it.",
        audio: TALK1,
        title: "Lecture 1 — why retrieval works",
        note: { kind: "reader",
                body: "<p>A skeleton outline is the form worth copying: one claim, then the evidence, the mechanism and the limit. Four lines will carry a fifty-minute lecture, and twelve pages of transcription will not.</p>" },
        lines: [
          "Main claim: retrieval is an ___ of learning, not a test of it",
          "- Effect after two weeks: about ___ as much remembered",
          "- Mechanism: the ___ to the fact is strengthened each time it is used",
          "- The catch: afterwards you must go back and ___ what you got wrong"
        ],
        gaps: [
          { answer: "episode", why: "her exact word, and the one the whole claim turns on: an episode, not a test." },
          { answer: "twice", why: "<i>roughly twice as much</i> — a figure, so it belongs in the notes." },
          { answer: "route", why: "<i>the route to that fact is strengthened</i>. <i>Pathway</i> is the reading's word; hers is <i>route</i>." },
          { answer: "check", why: "the step she says people skip, which is why it earns a line of its own." }
        ] },

      { id: "c", section: 3, sectionTitle: "Show that you are following", letter: "A",
        concepts: ["read", "evidence", "claim"],
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. In a seminar, following is something you have to <i>show</i>.",
        note: { kind: "speak",
                body: "<i>So if I've understood, …</i><i>Could you go over that last part again?</i><i>Can I check one thing?</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT TO SHOW YOU ARE FOLLOWING",
          blocks: [
            { h: "Do this", lines: [
              "Take notes — visibly, not constantly.",
              "Look up at the end of a point, not during it.",
              "Nod once at a claim, not at every sentence."
            ] },
            { h: "Say this", lines: [
              "So if I've understood, you're saying the discomfort is the point?",
              "Could you go over the last part again?",
              "Can I check one thing before you move on?"
            ] }
          ] },
        after: "<p>The middle one is the most useful sentence in this book. It asks for a repeat without admitting you were lost.</p>" },

      { id: "c2", section: 3, sectionTitle: "Show that you are following", letter: "B",
        concepts: ["measurement", "evidence"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table from the chart in 3A. The right-hand column is already filled; it says why each one works.",
        caption: "Four signals, and what each one tells the lecturer",
        head: ["Signal", "What you do", "What it tells the lecturer"],
        rows: [
          ["Taking notes", "write ___, not constantly", "you are selecting rather than transcribing"],
          ["Looking up",   "at the ___ of a point, not during it", "you have finished processing it"],
          ["Nodding",      "once at a ___, not at every sentence", "you are tracking the argument, not the voice"],
          ["Asking",       "“Could you go ___ the last part again?”", "you want a repeat without ___ that you were lost"]
        ],
        gaps: [
          { answer: "visibly", why: "the chart's word. Notes nobody can see signal nothing." },
          { answer: "end", why: "looking up mid-point reads as having stopped listening." },
          { answer: "claim", why: "nodding at every sentence signals politeness; nodding at a claim signals attention." },
          { answer: "over", why: "<i>go over</i> is the phrasal verb for revisiting an explanation." },
          { answer: "admitting", why: "the whole value of the phrase: it asks for the repeat without the confession." }
        ] },

      { id: "c3", section: 3, sectionTitle: "Show that you are following", letter: "C",
        concepts: ["read", "evidence"],
        kind: "read-only", task: null, n: 0,
        prompt: "One sentence to leave with.",
        text: { blocks: [{ lines: [
          "Following a lecture is not a state you are in. It is a thing you do, and some of it has to be visible."
        ] }] },
        closer: { kind: "life",
          body: "<p>In your next class, ask one clarifying question using a phrase from this page. Note what the answer added.</p>" } }
    ]
  };
})();
