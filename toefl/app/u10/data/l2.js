/* Unit 10 · Rules, Rights and Ethics — LESSON 2 · WRITING
   Writing strategy: connecting words that show contrast; quotation marks. */
(function () {
  window.PAGE = {
    id: "u10-l2", unit: "u10", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Mark a contrast, and quote accurately",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        kind: "cloze", task: null, n: 0,
        prompt: "Contrast words are not interchangeable. Complete the rule.",
        heading: "Language connection: marking a contrast",
        note: { kind: "writer",
                body: "<p><b>however</b> — a full stop or semicolon before it, a comma after: <i>… . However, …</i><br><b>although</b> — joins two clauses in one sentence: <i>Although it is true, …</i><br><b>despite</b> — followed by a noun or <i>-ing</i>, never a clause: <i>Despite the evidence</i>, not <i>despite it was clear</i>.<br><b>whereas</b> — for a direct side-by-side difference.</p>" },
        text: "We put a full stop or a semicolon before ___ , and a comma after it. We use ___ to join two clauses inside one sentence. We follow ___ with a noun or an <i>-ing</i> form, never with a clause. And we use ___ when two things are being set directly against each other.",
        gaps: [
          { options: ["however", "although"], answer: "however", why: "<i>It is true. However, it is not the point.</i>" },
          { options: ["although", "despite"], answer: "although", why: "<i>Although it is true, it is not the point.</i>" },
          { options: ["despite", "whereas"], answer: "despite", why: "<i>Despite the evidence</i> — <i>despite it was clear</i> is wrong." },
          { options: ["whereas", "however"], answer: "whereas",
            why: "<i>One paper led on arrests, whereas the other led on numbers.</i>" }
        ] },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        kind: "choice", task: null, n: 0,
        prompt: "Which sentence quotes correctly?",
        note: { kind: "writer",
                body: "<p>A quotation reproduces the words exactly. Anything you add goes in square brackets; anything you cut becomes an ellipsis. Changing a word silently — even a small one — is a misquotation, not a paraphrase.</p>" },
        options: [
          { text: "The report described the measure as “necessary but insufficient”.", correct: true,
            why: "The quoted words are reproduced exactly and the quotation marks enclose only them." },
          { text: "The report said the measure was “necessary, but it was insufficient”.",
            why: "Words have been added inside the quotation marks. If they are needed, they belong in square brackets." },
          { text: "The report called it necessary “but insufficient.”",
            why: "The full stop has been pulled inside the quotation marks although it is not part of the quoted phrase." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. This unit's grammar is the gerund.",
        items: [
          { cue: "A gerund as subject.", band: "B1",
            target: "Breaking a rule openly is not the same as evading it",
            extra: ["break", "to break"],
            why: "A gerund subject takes a singular verb: <i>Breaking … is</i>." },
          { cue: "A verb that takes a gerund.", band: "B1",
            target: "She admitted taking the documents without permission",
            extra: ["to take", "take"],
            why: "<i>Admit</i> is followed by <i>-ing</i>, never by an infinitive." },
          { cue: "A verb that takes an infinitive.", band: "B2",
            target: "They refused to accept the penalty they had been given",
            extra: ["accepting", "accept"],
            why: "<i>Refuse</i> takes <i>to</i> + infinitive." },
          { cue: "A contrast across two sources.", band: "C1",
            target: "One paper led on the arrests whereas the other led on the numbers",
            extra: ["despite", "however", "although"],
            why: "<i>Whereas</i> sets the two directly against each other." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A discussion question about rule-breaking.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "Is there a moral difference between breaking a law openly and accepting the penalty, and breaking the same law quietly? Or is the difference merely tactical?" },
          { who: "priya", when: "5 hours ago",
            text: "Merely tactical. If the law is unjust, breaking it is justified either way, and accepting a penalty you think is wrong just lends the system legitimacy it hasn't earned." },
          { who: "tomas", when: "2 hours ago",
            text: "Then anyone can claim conscience for anything. Accepting the penalty is what proves you're arguing rather than just helping yourself." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I used <i>however</i>, <i>although</i>, <i>despite</i> or <i>whereas</i> correctly.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>I think Tomás is closer, although Priya has identified something real about legitimacy.</p><p>The difficulty with her position is that it leaves an observer unable to distinguish two cases: someone acting on conscience and someone acting on convenience. Both break the rule, both may be sincere, and only one of them is making an argument that anyone else can examine.</p><p>Accepting the penalty is not a moral flourish, whereas it is often treated as one. It is the thing that makes the act legible as a claim about the rule rather than an exception claimed for oneself.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
