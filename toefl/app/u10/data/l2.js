/* Unit 10 · Rules, Rights and Ethics — LESSON 2 · WRITING
   Writing strategy: connecting words that show contrast; quotation marks. */
(function () {
  window.PAGE = {
    id: "u10-l2", unit: "u10", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Mark a contrast, and quote accurately",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        concepts: ["word", "comparison", "evidence"],
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
        concepts: ["claim"],
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

            { id: "1c", section: 1, sectionTitle: "Prepare to write", letter: "C",
        concepts: ["sequence", "comparison"],
        kind: "sequence", task: null, n: 0,
        prompt: "Comparing two sources that disagree has an order. Put the five steps on the right rungs.",
        note: { kind: "writer",
                body: "<p>The order exists to stop you doing the interesting thing first. Deciding which source you believe before establishing what they actually disagree about is how a comparison turns into a preference.</p>" },
        steps: [
          { text: "List what both sources assert", pos: 1,
            why: "the overlap is usually larger than it looks, and everything after this depends on knowing where it ends." },
          { text: "Mark where they differ in fact", pos: 2,
            why: "a genuine disagreement about what happened, which one of them has got wrong." },
          { text: "Mark where they differ only in arrangement", pos: 3,
            why: "same facts, different order or different verb. Most apparent contradictions turn out to live here." },
          { text: "Ask what each source would need to be true", pos: 4,
            why: "this is the step that lets you check rather than choose." },
          { text: "Say which you find more reliable, and why", pos: 5,
            why: "last. A judgement reached before the first four steps is a preference wearing a judgement's clothes." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        concepts: ["word"],
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

            { id: "2b", section: 2, sectionTitle: "Build the sentences", letter: "B",
        concepts: ["word", "comparison", "claim"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Four more. Three of them mark a contrast, and each marker has its own punctuation.",
        items: [
          { cue: "Concede, then disagree, in one sentence.", band: "B1",
            target: "Although both accounts are accurate they are not equally informative",
            extra: ["despite", "however", "whereas"],
            why: "<i>Although</i> joins two clauses inside one sentence, with a comma where the first clause ends." },
          { cue: "Concede, then disagree, in two sentences.", band: "B2",
            target: "Both accounts are accurate. However they are not equally informative",
            extra: ["although", "despite", "whereas"],
            why: "<i>However</i> needs a full stop or semicolon in front of it, and a comma behind it." },
          { cue: "A contrast with a noun phrase.", band: "B2",
            target: "Despite the identical facts the two reports leave opposite impressions",
            extra: ["although", "whereas", "however"],
            why: "<i>Despite</i> takes a noun or an <i>-ing</i> form. <i>Despite the facts were identical</i> is not possible." },
          { cue: "A gerund subject carrying a comparison.", band: "C1",
            target: "Choosing which fact to place first is itself an argument about what matters",
            extra: ["Choose", "To choose", "are"],
            why: "A gerund subject, singular verb, and the whole phrase before <i>is</i> is doing the work of a noun." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build the sentences", letter: "C",
        concepts: ["correct", "evidence"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five lines from essays. One word in each is wrong — a wrong word, not a wrong order. Click it, then type the correction.",
        items: [
          { text: "Despite the evidence was clear, the committee hesitated.",
            fixed: "Although the evidence was clear, the committee hesitated.",
            wrong: "Despite", right: "Although",
            why: "<i>Despite</i> cannot take a clause. <i>Although</i> can, and nothing else in the sentence needs to move." },
          { text: "Both accounts are accurate, however they are not equally useful.",
            fixed: "Both accounts are accurate, although they are not equally useful.",
            wrong: "however", right: "although",
            why: "<i>However</i> cannot join two clauses with a comma; it needs a full stop or a semicolon. <i>Although</i> can join them, and leaves the punctuation alone." },
          { text: "Breaking a rule openly and evading it quietly is not the same.",
            fixed: "Breaking a rule openly and evading it quietly are not the same.",
            wrong: "is", right: "are",
            why: "Two gerund subjects joined by <i>and</i> make a plural subject, even though each one alone would be singular." },
          { text: "She admitted to take the documents without permission.",
            fixed: "She admitted to taking the documents without permission.",
            wrong: "take", right: "taking",
            why: "<i>Admit to</i> is a real construction, and the <i>to</i> in it is a preposition — so the verb after it takes <i>-ing</i>. <i>She admitted taking them</i>, with no <i>to</i> at all, is equally correct." },
          { text: "One paper led on arrests, although the other led on numbers.",
            fixed: "One paper led on arrests, whereas the other led on numbers.",
            wrong: "although", right: "whereas",
            why: "<i>Although</i> concedes something; <i>whereas</i> sets two things side by side. Here nothing is being conceded." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        concepts: ["write"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "___ing is ___.",

            why: "A gerund as subject: replaceable by <i>it</i>, which is the test." },

          { frame: "I accept that ___. What I dispute is that ___.",

            why: "Concede then narrow — the strongest opening in a disagreement." },

          { frame: "If it turned out that ___, I would ___.",

            why: "Names what would change your mind, which is what separates arguing from defending." },

        ],
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
        model: "<p>I think Tomás is closer, although Priya has identified something real about legitimacy.</p><p>The difficulty with her position is that it leaves an observer unable to distinguish two cases: someone acting on conscience and someone acting on convenience. Both break the rule, both may be sincere, and only one of them is making an argument that anyone else can examine.</p><p>Accepting the penalty is not a moral flourish, whereas it is often treated as one. It is the thing that makes the act legible as a claim about the rule rather than an exception claimed for oneself.</p>" },

      { id: "4a", section: 4, sectionTitle: "Write a second reply", letter: "A",
        concepts: ["write"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "___ing is ___.",

            why: "A gerund as subject: replaceable by <i>it</i>, which is the test." },

          { frame: "I accept that ___. What I dispute is that ___.",

            why: "Concede then narrow — the strongest opening in a disagreement." },

          { frame: "If it turned out that ___, I would ___.",

            why: "Names what would change your mind, which is what separates arguing from defending." },

        ],
        prompt: "A second question, about a rule that is never enforced.",
        minWords: 100,
        note: { kind: "writer",
                body: "<p>Both classmates agree the rule is unenforced. They disagree about what an unenforced rule <i>is</i>, which is a question about rules rather than about this rule.</p>" },
        posts: [
          { who: "haddad", role: "prof",
            text: "A university rule forbids eating in the library. It has not been enforced in anyone's memory, and the library is full of people eating. Is that rule still a rule?" },
          { who: "mei", when: "3 hours ago",
            text: "No. A rule that is never applied is a sentence on a website. Enforcement is not an optional extra you add to a rule; it is part of what makes the thing a rule at all." },
          { who: "dan", when: "40 minutes ago",
            text: "It is still a rule, and the proof is what happens the day somebody is told to leave. Nobody is surprised that the rule exists. They are surprised that it was used." }
        ],
        checklist: [
          "My first paragraph answers the question asked, not a nearby one.",
          "I used <i>enforcement</i>, <i>obligation</i> or <i>entitlement</i> accurately.",
          "I answered Mei or Dan <b>by name</b> and conceded something fair.",
          "I used a gerund as a subject at least once.",
          "I wrote 100 words or more."
        ],
        model: "<p>It is still a rule, and Dan's test is the one that settles it.</p>" +
               "<p>Mei is right that enforcement is not decoration. A rule nobody ever applies does none of the work rules are for: it does not guide anybody, and it cannot be relied on. Writing it down is not sufficient.</p>" +
               "<p>Despite that, Dan's observation is decisive. When somebody is finally asked to leave, nobody argues that no such rule exists; they argue that it is unfair to start now. That reaction only makes sense if the rule was there all along, dormant rather than absent — and it also shows what the real cost of non-enforcement is. The rule survives, and what dies is any expectation of consistency.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } },
    ]
  };
})();
