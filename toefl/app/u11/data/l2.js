/* Unit 11 · How Science Works — LESSON 2 · WRITING
   The book's Unit 11 writing strategy: what to avoid in formal messages. */
(function () {
  window.PAGE = {
    id: "u11-l2", unit: "u11", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Write a formal message without the things that spoil one",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        concepts: ["read"],
        kind: "annotate", task: null, n: 0,
        jobs: ["Apologising more than once", "Hedging the request out of existence",
               "Opening with your feelings", "Burying the request",
               "The fix \u2014 the request, first, in a plain modal"],
        sentences: [
          { group: "Avoid",
            text: "Apologising more than once. One apology is courteous; three transfer your discomfort to the reader.",
            job: "Apologising more than once",
            why: "Repeated apology makes the reader manage your feelings as well as your request, which is work you have handed them without asking." },
          { group: "Avoid",
            text: "Hedging the request out of existence. I was just wondering if it might possibly be at all feasible\u2026",
            job: "Hedging the request out of existence",
            why: "Five hedges in one clause, and the reader genuinely cannot tell whether a request has been made. Politeness survives one hedge; a request does not survive five." },
          { group: "Avoid",
            text: "Opening with your feelings. I am very frustrated that\u2026",
            job: "Opening with your feelings",
            why: "The frustration is real and it is not information. It tells the reader how you are rather than what you need, and it invites a reply about your mood." },
          { group: "Avoid",
            text: "Burying the request. If the thing you want is in the fourth paragraph, half your readers will not reach it.",
            job: "Burying the request",
            why: "A reader scanning for an action finds nothing in the first screen and files the message to deal with later, which often means never." },
          { group: "Instead",
            text: "Say what you want in the first sentence, once, in a plain modal: could you, would it be possible to, I would be grateful if.",
            job: "The fix \u2014 the request, first, in a plain modal",
            why: "Politeness lives in the modal verb, not in the number of words. <i>Could you send it by Friday?</i> is polite and takes six words." }
        ],
        prompt: "Four habits that weaken a formal message, and the instruction that replaces them. Click each line and name the fault \u2014 the test is whether a busy reader would have to re-read it to find out what you want.",
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
        concepts: ["claim"],
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

            { id: "1c", section: 1, sectionTitle: "Prepare to write", letter: "C",
        concepts: ["sequence", "measurement"],
        kind: "sequence", task: null, n: 0,
        prompt: "Writing a methods section has an order, and it is not the order you did the work in. Put the five steps on the right rungs.",
        note: { kind: "writer",
                body: "<p>A methods section is written so somebody else can repeat the work without asking you anything. Everything in this order follows from that single test.</p>" },
        steps: [
          { text: "State what was measured, and with what", pos: 1,
            why: "the instrument and the quantity, because every later number depends on both." },
          { text: "State the design: groups, assignment, controls", pos: 2,
            why: "before any procedure, since the procedure is applied differently to different groups." },
          { text: "Give the procedure in the order it happened", pos: 3,
            why: "and only in that order. A reader is following it, not admiring it." },
          { text: "Say how the data were analysed", pos: 4,
            why: "after the data exist on the page. An analysis described before its data is unreadable." },
          { text: "Say what was decided in advance and what was not", pos: 5,
            why: "last, and it is the sentence most methods sections omit — which is precisely why it carries so much weight when it is there." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        concepts: ["word"],
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

            { id: "2b", section: 2, sectionTitle: "Build the sentences", letter: "B",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Four more. Two of them keep their agent and two deliberately lose it.",
        items: [
          { cue: "A passive with no agent at all.", band: "B1",
            target: "The protocol was registered before any data were collected",
            extra: ["registering", "by", "we"],
            why: "Who registered it does not matter; that it happened first is the entire claim." },
          { cue: "A passive whose agent is the point.", band: "B2",
            target: "The replication was funded by a body with no interest in the outcome",
            extra: ["funding", "with", "who"],
            why: "<i>By</i> is doing real work here: the independence of the funder is the sentence's whole content." },
          { cue: "<i>Be able to</i> in the present perfect.", band: "B2",
            target: "No group has been able to reproduce the original effect",
            extra: ["could", "can", "was"],
            why: "<i>Can</i> has no perfect form, so <i>be able to</i> is the only route to this meaning." },
          { cue: "A hedged conclusion.", band: "C1",
            target: "These results are consistent with the hypothesis but do not establish it",
            extra: ["prove", "which", "although"],
            why: "<i>Consistent with</i> and <i>do not establish</i> are the two halves of a careful claim, and dropping either one overstates." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build the sentences", letter: "C",
        concepts: ["correct", "measurement"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five lines from methods sections. One word in each is wrong — a wrong word, not a wrong order. Click it, then type the correction.",
        items: [
          { text: "The samples was heated to sixty degrees for an hour.",
            fixed: "The samples were heated to sixty degrees for an hour.",
            wrong: "was", right: "were",
            why: "<i>Samples</i> is plural, and the passive hides the subject behind the participle." },
          { text: "Absorbance was measure every minute throughout the run.",
            fixed: "Absorbance was measured every minute throughout the run.",
            wrong: "measure", right: "measured",
            why: "A passive needs the participle, and the missing <i>-d</i> is almost inaudible before <i>every</i>." },
          { text: "The analysis was carried out from an independent team.",
            fixed: "The analysis was carried out by an independent team.",
            wrong: "from", right: "by",
            why: "The agent of a passive takes <i>by</i>. <i>From</i> would make the team a source rather than a doer." },
          { text: "No group has could reproduce the original finding.",
            fixed: "No group has been able to reproduce the original finding.",
            wrong: "could", right: "been able to",
            why: "<i>Can</i> and <i>could</i> have no perfect form at all, which is the reason <i>be able to</i> exists." },
          { text: "The protocol had been registered before any data was collected.",
            fixed: "The protocol had been registered before any data were collected.",
            wrong: "was", right: "were",
            why: "<i>Data</i> takes a plural verb in formal writing. The singular is increasingly common and still marked in a methods section." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        concepts: ["write"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "___ was ___ by ___.",

            why: "A passive that keeps its agent, because who did it is the point of the sentence." },

          { frame: "___ were ___ every ___.",

            why: "A passive that drops its agent, because nobody doubted a person did it." },

          { frame: "Building on what ___ said about ___, ___.",

            why: "Names the person and the contribution before your own point begins." },

        ],
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
        model: "<p>Tomás is right about the bias, and Priya is right that not every null result is informative. The two are compatible.</p><p>The problem is not that nulls are uninteresting but that they are invisible. A study that was adequately powered and found nothing is a real piece of evidence, and at present it is as likely to sit in a drawer as a badly designed one.</p><p>So I would separate the two questions. Whether a result deserves a journal's pages is an editorial judgment. Whether it enters the record at all should not be — registration before data collection solves most of this without costing anyone a page.</p>" },

      { id: "4a", section: 4, sectionTitle: "Write a second reply", letter: "A",
        concepts: ["write", "claim"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "___ was ___ by ___.",

            why: "A passive that keeps its agent, because who did it is the point of the sentence." },

          { frame: "___ were ___ every ___.",

            why: "A passive that drops its agent, because nobody doubted a person did it." },

          { frame: "Building on what ___ said about ___, ___.",

            why: "Names the person and the contribution before your own point begins." },

        ],
        prompt: "A second question, about what should be published.",
        minWords: 100,
        note: { kind: "writer",
                body: "<p>Both classmates want the same thing — a literature that can be trusted — and disagree about what would get there. A reply that argues for trustworthy literature has answered nobody.</p>" },
        posts: [
          { who: "haddad", role: "prof",
            text: "Journals publish findings far more readily than they publish failures to find anything. Several have proposed accepting papers on the method alone, before the results exist. Would that be an improvement?" },
          { who: "mei", when: "5 hours ago",
            text: "Yes, and it is the only proposal that attacks the cause rather than the symptom. If acceptance depends on the result, every incentive in the system points at finding one." },
          { who: "dan", when: "90 minutes ago",
            text: "It would fill the literature with competent studies of uninteresting questions. Judging a method without knowing what it found is harder than it sounds, and editors would retreat to whatever is safe." }
        ],
        checklist: [
          "My first paragraph says whether it would be an improvement.",
          "I used <i>replication</i>, <i>protocol</i> or <i>significant</i> accurately.",
          "I answered Mei or Dan <b>by name</b> and conceded something fair.",
          "I used a passive at least once, with the agent dropped on purpose.",
          "I wrote 100 words or more."
        ],
        model: "<p>It would be an improvement, and Dan has identified what it would cost rather than a reason against it.</p>" +
               "<p>Mei's argument is the stronger one. When acceptance is decided after the result is known, the result is what the work is optimised towards, and nobody involved has to intend anything dishonest for that to happen. Judging the method in advance is the only point in the process where that incentive is absent.</p>" +
               "<p>Dan is right that editors would become cautious, and I do not think that is answered by denying it. But the alternative is a literature in which the interesting questions are over-represented and the answers cannot be relied on, which is a worse trade. The safe, dull, correctly conducted study is at least a study whose conclusion means something.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } },
    ]
  };
})();
