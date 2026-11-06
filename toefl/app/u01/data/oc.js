/* Unit 1 · How We Learn — ON CAMPUS
   The book's AT WORK page, register moved to campus. Its A/B/C listening trio
   is exactly how the 2026 test clusters items on one stimulus, which is why
   the two new listening genres live here. */
(function () {
  window.PAGE = {
    id: "u01-oc", unit: "u01", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Show that you are following a lecture",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
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

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on why retrieval works. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "1-13", label: "Why retrieval works", lines: [{ who: "haddad", text:
          "I want to explain a result that most students find annoying. If you read a chapter twice, you will feel that you know it. If instead you read it once and then close the book and write down everything you can remember, you will feel considerably worse. You will also, two weeks later, remember roughly twice as much. The reason is that retrieval is not a test of learning. It is an episode of learning. Each time you pull a fact out of memory, the route to that fact is strengthened, in a way that simply seeing the fact again does not strengthen it. So the discomfort you feel is not a sign that the method is failing. It is a sign that the method is doing the work. There is a catch, and it matters. Retrieval only helps if you afterwards check what you got wrong. Students who test themselves and never look at the answers improve very little, because they rehearse their errors as faithfully as their successes. So the sequence is: read once, close the book, write what you have, and then — this is the part people skip — go back and find out which parts you invented." }] },
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

      { id: "c", section: 3, sectionTitle: "Show that you are following", letter: "A",
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
        after: "<p>The middle one is the most useful sentence in this book. It asks for a repeat without admitting you were lost.</p>",
        closer: { kind: "life",
          body: "<p>In your next class, ask one clarifying question using a phrase from this page. Note what the answer added.</p>" } }
    ]
  };
})();
