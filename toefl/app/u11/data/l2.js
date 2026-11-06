/* Unit 11 · How Science Works — LESSON 2 · WRITING
   The book's Unit 11 writing strategy: what to avoid in formal messages. */
(function () {
  window.PAGE = {
    id: "u11-l2", unit: "u11", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Write a formal message without the things that spoil one",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Four habits that weaken a formal message. Each one is common, and each one is avoidable.",
        note: { kind: "writer",
                body: "<p>The test for every sentence in a formal message: would a busy reader have to re-read it to find out what you want?</p>" },
        text: { every: 1, blocks: [
          { h: "Avoid", lines: [
            "<b>Apologising more than once.</b> One apology is courteous; three transfer your discomfort to the reader.",
            "<b>Hedging the request out of existence.</b> <i>I was just wondering if it might possibly be at all feasible…</i> — the reader cannot tell whether you are asking.",
            "<b>Opening with your feelings.</b> <i>I am very frustrated that…</i> — the frustration is real and it is not information.",
            "<b>Burying the request.</b> If the thing you want is in the fourth paragraph, half your readers will not reach it."
          ] },
          { h: "Instead", lines: [
            "Say what you want in the first sentence, once, in a plain modal: <i>could you</i>, <i>would it be possible to</i>, <i>I would be grateful if</i>."
          ] }
        ] },
        after: "<p>Politeness lives in the modal verb, not in the number of words. <i>Could you send it by Friday?</i> is polite and takes six words.</p>" },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        kind: "choice", task: null, n: 0,
        prompt: "Which opening sentence is best for a formal request?",
        options: [
          { text: "I am writing to ask whether the calibration records for the spectrometer are available.", correct: true,
            why: "States the purpose and the object in one clause, in a register the reader can answer directly." },
          { text: "I hope you don't mind me emailing, and sorry to bother you again, but I had a quick question.",
            why: "Two apologies before any content, and <i>a quick question</i> tells the reader nothing about what is wanted." },
          { text: "I am extremely frustrated that nobody has replied about the spectrometer.",
            why: "Opens with feeling rather than request, and makes the reader defensive before they know what is being asked." },
          { text: "Spectrometer.",
            why: "A subject line, not a sentence. Brevity is not the same as clarity." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. This unit's grammar is the passive.",
        items: [
          { cue: "A present passive.", band: "B1",
            target: "The samples are heated to sixty degrees",
            extra: ["heat", "heating"],
            why: "<i>are</i> + past participle. The agent is absent because it does not matter." },
          { cue: "The passive with an agent.", band: "B2",
            target: "The analysis was carried out by an independent team",
            extra: ["carried", "carrying"],
            why: "<i>by</i> names the agent, and here it matters: independence is the point." },
          { cue: "<i>Be able to</i>.", band: "B2",
            target: "The second team was not able to reproduce the effect",
            extra: ["can", "could not"],
            why: "<i>Be able to</i> works in any tense, where <i>can</i> does not." },
          { cue: "A plain request.", band: "C1",
            target: "I would be grateful if the calibration records could be sent to me",
            extra: ["sending", "send", "will"],
            why: "A polite modal plus a passive — the request is clear and the reader is not accused." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A discussion question about publication.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "Should journals publish studies that found nothing? Most currently do not. What follows from that?" },
          { who: "tomas", when: "3 hours ago",
            text: "They should. If only positive results are published, the record is a biased sample of the work that was done, and every meta-analysis built on it inherits that bias." },
          { who: "priya", when: "1 hour ago",
            text: "Agreed in principle, but journals have finite pages and readers have finite attention. A null result from a badly powered study isn't evidence of anything — publishing it just adds noise." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I gave a reason or an example.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>Tomás is right about the bias, and Priya is right that not every null result is informative. The two are compatible.</p><p>The problem is not that nulls are uninteresting but that they are invisible. A study that was adequately powered and found nothing is a real piece of evidence, and at present it is as likely to sit in a drawer as a badly designed one.</p><p>So I would separate the two questions. Whether a result deserves a journal's pages is an editorial judgment. Whether it enters the record at all should not be — registration before data collection solves most of this without costing anyone a page.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
