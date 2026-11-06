/* Unit 3 · Adaptation and Diversity — ON CAMPUS
   Function: ask for the evidence behind a claim. */
(function () {

  /* Two exercises use this talk: the comprehension items, and the outline
     that is filled in while it plays. */
  var TALK1 = { track: "3-12", label: "What 'adapted to' hides", lines: [{ who: "haddad", text:
          "I want to take apart a sentence you will meet constantly, which is that a species adapted to its environment. The sentence is not wrong, but it hides the mechanism, and the hidden part is where most people go astray. Consider a population of birds in which beak depth varies, as it does in every real population. A drought arrives and the only seeds left are large and hard. Birds with deeper beaks crack them; birds with shallower beaks do not, and many of those birds die. The survivors breed, and because beak depth is heritable, the next generation has on average a slightly deeper beak than the generation before the drought. Notice what did not happen. No bird grew a deeper beak. No bird tried harder. The variation was already present before the drought began, and all the drought did was change which portion of it was passed on. This is why the phrase adapted to is best read as a description of an outcome rather than an account of a process. The process is differential survival acting on variation that already exists, and if you can hold those two ideas together you will not be caught by most of the confusions in this field." }] };

  window.PAGE = {
    id: "u03-oc", unit: "u03", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Ask for the evidence behind a claim",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice at the start of the laboratory session. It plays once.",
        speaker: "dan", speakerNote: "laboratory demonstrator",
        audio: { track: "3-11", label: "One change to the session", lines: [{ who: "dan", text:
          "One change to the laboratory session. The finch specimens have not arrived from the museum, so we will start with the shell collection instead and do the beak measurements next week. Bring calipers either way. If you have already written your method section, you will need to renumber the stages." }] },
        items: [
          { q: "Why has the session changed?",
            options: [
              { text: "The specimens have not arrived.", correct: true, why: "Stated as the reason, with <i>so</i> introducing the consequence." },
              { text: "The calipers are missing.", why: "Calipers are still needed — <i>either way</i>." },
              { text: "The museum is closed.", why: "No reason for the delay is given." }
            ] },
          { q: "What should everyone bring?",
            options: [
              { text: "Calipers.", correct: true, why: "“Bring calipers either way” — the phrase marks it as unaffected by the change." },
              { text: "Nothing, this week.", why: "One item is specified." },
              { text: "A method section.", why: "That concerns only students who have written one." }
            ] },
          { q: "Who needs to renumber their stages?",
            options: [
              { text: "Students who have already written a method section.", correct: true,
                why: "The <i>if</i> clause narrows the instruction to them." },
              { text: "Everyone in the session.", why: "The condition excludes those who have not written one." },
              { text: "Nobody — the order is unchanged.", why: "The order has changed, which is why renumbering is needed." }
            ] }
        ] },

            { id: "a2", section: 1, sectionTitle: "Listen to an announcement", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A second notice, read out in the collection room. It plays once.",
        speaker: "dan", speakerNote: "collection assistant",
        audio: { track: "3-13", label: "Before you start measuring", lines: [{ who: "dan", text:
          "Before you start, three things. The calipers have moved to the grey cabinet, because the drawer could not be locked and two sets went missing last term. Work in pairs, one measuring and one writing, and swap halfway so that both of you have done both. And if a label looks wrong, photograph it and tell me. Do not correct it yourself, even when you are certain, because a corrected label with no record of the correction is worse than a wrong one." }] },
        items: [
          { q: "Why have the calipers been moved?",
            options: [
              { text: "The old place could not be locked and sets were lost.", correct: true,
                why: "The <i>because</i> clause gives both halves of the reason." },
              { text: "The grey cabinet is nearer the benches.", why: "Convenience is never mentioned." },
              { text: "New calipers have been bought.", why: "The same sets have simply moved." }
            ] },
          { q: "Why should the pair swap roles halfway?",
            options: [
              { text: "So that each person has done both jobs.", correct: true,
                why: "<i>So that both of you have done both</i> — a purpose clause, which is what the question asks for." },
              { text: "Because measuring is tiring.", why: "No reason of that kind is given." },
              { text: "Because the writer works faster.", why: "Speed is not mentioned." }
            ] },
          { q: "What should you do about a label that looks wrong?",
            options: [
              { text: "Photograph it and report it, without changing it.", correct: true,
                why: "The instruction and the prohibition come together, and the last sentence says why the prohibition matters." },
              { text: "Correct it if you are certain.", why: "That is the case the last sentence is written to rule out." },
              { text: "Ignore it and carry on.", why: "He asks to be told." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        concepts: ["listen", "claim"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on a sentence you will meet constantly. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: TALK1,
        transcript: "<p>The variation comes first. The drought only changes which part of it is passed on. <i>Adapted to</i> names the outcome, not the process.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "<i>Adapted to</i> names an outcome and hides the mechanism that produced it.", correct: true,
                why: "She says the sentence is not wrong but hides the mechanism, and the rest of the talk supplies it." },
              { text: "Birds change their beaks in response to hard conditions.", why: "“No bird grew a deeper beak.”" },
              { text: "Droughts are the main driver of evolution.", why: "The drought is her example, not her claim." }
            ] },
          { q: "What does she say was true <i>before</i> the drought?",
            options: [
              { text: "The variation in beak depth already existed.", correct: true,
                why: "A detail worth writing down: the variation is prior, which is the whole argument." },
              { text: "The seeds were already hard.", why: "The seeds hardened when the drought came." },
              { text: "The population was already adapted.", why: "That is the outcome she is explaining, not the starting point." }
            ] },
          { q: "Why must beak depth be heritable for the argument to work?",
            options: [
              { text: "Otherwise the survivors' advantage would not reach the next generation.", correct: true,
                why: "She puts <i>because beak depth is heritable</i> exactly where the generations connect." },
              { text: "Otherwise the birds could not crack the seeds.", why: "Cracking depends on depth, not on heritability." },
              { text: "Otherwise the drought would not have happened.", why: "Unrelated." }
            ] },
          { q: "What would she say to a student who writes <i>the finches evolved deeper beaks to survive</i>?",
            options: [
              { text: "The <i>to survive</i> implies a purpose the process does not have.", correct: true,
                why: "One step from <i>no bird tried harder</i>: she is objecting to agency and purpose throughout." },
              { text: "It is an accurate summary.", why: "It repeats the error she spends the talk dismantling." },
              { text: "It understates the size of the change.", why: "Size is not her concern here." }
            ] }
        ] },

            { id: "b2", section: 2, sectionTitle: "Listen to an academic talk", letter: "B",
        concepts: ["listen", "inference", "claim"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "The same lecturer, on why one island is not enough.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "3-14", label: "Why one island is not enough", lines: [{ who: "haddad", text:
          "Last week I gave you the finch result and said it was the clearest demonstration of selection ever recorded. Today I want to say why that sentence needs a second half. The study was done on one small island, over thirty years, by one team. Every one of those is a strength and a limit at the same time. One island means the conditions were simple enough to measure, and it also means we do not know whether the same thing happens where the food is varied. Thirty years means the slow changes are visible, and it also means we have one long run rather than several independent ones. One team means the methods were consistent, and it also means that if the team had a systematic habit, it is in every year of the data. None of this makes the result weaker. It makes it a result about one place, which is what every result is until somebody repeats it somewhere else. The honest sentence is not that selection works like this, but that on this island, over this period, measured this way, it did." }] },
        transcript: "<p>One island, thirty years, one team: each is a strength and a limit. The honest claim is about this island over this period, until somebody repeats it elsewhere.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "Each strength of the study is also a limit on what it can claim.", correct: true,
                why: "She takes the three features in turn and gives each one both halves." },
              { text: "The finch study was badly designed.", why: "<i>None of this makes the result weaker</i> — she says so directly." },
              { text: "Thirty-year studies should be avoided.", why: "She treats the length as what makes the slow change visible." }
            ] },
          { q: "What does she say is the limit of having worked on one small island?",
            options: [
              { text: "The result may not hold where the food supply is varied.", correct: true,
                why: "The limit she names is the untested case, not any flaw in what was done." },
              { text: "The sample of birds was too small.", why: "Sample size never comes up." },
              { text: "Small islands are unusual habitats.", why: "She says the conditions were simple to measure, not that they are strange." }
            ] },
          { q: "Why does she mention the possibility of a systematic habit in the team?",
            options: [
              { text: "Because one team's consistency means a habit would run through every year.", correct: true,
                why: "The same feature that gives consistent methods gives a consistent error, if there is one." },
              { text: "Because she suspects the team made a mistake.", why: "She offers it as a property of single-team studies, not as an accusation." },
              { text: "Because the team changed its methods over thirty years.", why: "The opposite: the methods stayed the same." }
            ] },
          { q: "What does she call the honest version of the claim?",
            options: [
              { text: "That it happened on this island, over this period, measured this way.", correct: true,
                why: "Her closing sentence, and the three qualifications match the three features she analysed." },
              { text: "That selection works like this everywhere.", why: "That is the version she replaces." },
              { text: "That the result is unproven.", why: "She calls it the clearest demonstration ever recorded." }
            ] }
        ] },

      { id: "b3", section: 2, sectionTitle: "Listen to an academic talk", letter: "C",
        concepts: ["listen", "claim"],
        kind: "notes", task: null, n: 0,
        prompt: "Play the first talk again and complete the outline while it runs.",
        audio: TALK1,
        title: "Lecture — what 'adapted to' hides",
        note: { kind: "reader",
                body: "<p>The useful four lines of a lecture are rarely the first four. Here they are the claim, the thing that did <i>not</i> happen, the order of events, and the reformulation at the end.</p>" },
        lines: [
          "Claim: <i>adapted to</i> names an ___, not a process",
          "- What did NOT happen: no bird ___ a deeper beak",
          "- Order: the ___ was present before the drought",
          "- Process = ___ survival acting on what already exists"
        ],
        gaps: [
          { answer: "outcome", why: "her word, and the one the whole talk is built to earn." },
          { answer: "grew", why: "<i>No bird grew a deeper beak</i> — she says it flatly, twice over, because it is the sticking point." },
          { answer: "variation", why: "the order of events is the argument: variation first, drought second." },
          { answer: "differential", why: "the technical term she ends on, and the one Lesson 1 glossed." }
        ] },

      { id: "c", section: 3, sectionTitle: "Ask for the evidence", letter: "A",
        concepts: ["read", "measurement", "evidence"],
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. Asking for evidence is a normal academic move, not an accusation — if you phrase it as one.",
        note: { kind: "speak",
                body: "<i>What's that based on?</i><i>Is that measured or estimated?</i><i>How big was the sample?</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT THE EVIDENCE BEHIND A CLAIM",
          blocks: [
            { h: "Do this", lines: [
              "Ask about the claim, not about the person who made it.",
              "Ask for one specific thing: a number, a source, a method.",
              "Say what you would accept as an answer."
            ] },
            { h: "Say this", lines: [
              "Is that measured, or is it an estimate?",
              "Do you know roughly how many birds that was?",
              "I'd find that convincing if the same thing happened on a second island — did it?"
            ] }
          ] },
        after: "<p>The third pattern is the strongest. Naming in advance what would convince you turns a challenge into a collaboration.</p>" },

      { id: "c2", section: 3, sectionTitle: "Ask for the evidence", letter: "B",
        concepts: ["measurement", "evidence"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table from the chart in 3A. The right-hand column says what each question is really after.",
        caption: "Four questions, and what each one is asking for",
        head: ["Question", "What you say", "What you are actually asking"],
        rows: [
          ["Source",   "What is that ___ on?", "whether there is anything behind the claim at all"],
          ["Status",   "Is that measured, or is it an ___?", "whether the number came from the world or from a model"],
          ["Size",     "Do you know roughly how many that ___?", "whether one odd case is doing all the work"],
          ["Your own standard", "I'd find it convincing if the same thing happened on a ___ island", "nothing from them — it tells them what would ___ you"]
        ],
        gaps: [
          { answer: "based", why: "<i>based on</i>, the plainest form of the question, and the one that sounds least like an accusation." },
          { answer: "estimate", why: "the distinction Unit 2 spent a whole lesson on, asked in five words." },
          { answer: "was", why: "<i>how many that was</i> — a past tense, because you are asking about the study that happened." },
          { answer: "second", why: "a replication. It is the strongest thing you can ask for and the hardest to supply." },
          { answer: "convince", why: "naming your own standard in advance turns a challenge into a collaboration, which is why this pattern is the best of the four." }
        ] },

      { id: "c3", section: 3, sectionTitle: "Ask for the evidence", letter: "C",
        concepts: ["read", "evidence", "claim"],
        kind: "read-only", task: null, n: 0,
        prompt: "One sentence to leave with.",
        text: { blocks: [{ lines: [
          "Asking what would change your mind is not a weaker move than disagreeing. It is the only one that can end an argument."
        ],
        closer: { kind: "life",
          body: "<p>Next time a claim surprises you, ask one of these three questions before deciding whether you believe it.</p>" } }] } }
    ]
  };
})();
