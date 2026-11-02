/* ============================================================
   Lesson 2 §1 — three first-day journal entries.

   The book gives one model entry and asks three things about it.
   Three different entries do the same work better: 1A reads one and
   says what happened, 1B puts a second one back in order, and 1C
   fills the gaps in a third. The shape — the challenge, how it was
   overcome, the lesson — is the same in all three, so by the time
   the learner writes their own in §2 they have met it three times
   in three different stories rather than once in one.

   All three are recorded, one voice per writer, one clip per
   paragraph, so any part can be replayed on its own.
   ============================================================ */
CSB1.page('u1-l2-s1', {
  book: { page: 6, section: 1, lesson: 'Lesson 2 · Writing', title: 'Prepare to write' },
  objective: 'Write a paragraph describing your feelings on the first day in the security lab',
  prev: 'l1-s2-career-pathways', prevLabel: 'Career pathways',
  next: 'l2-s2-plan-and-write', nextLabel: 'Plan and write',
  cards: [
    {
      id: 'c1a', ref: '1A', bookRef: 'p.6 · 1A', type: 'quizset',
      title: 'Read the journal entry — what happened?',
      instruction: 'Look at the picture, then read the whole entry. You can listen to it, hear one paragraph at a time, or watch the writer tell it. Then answer the three questions. <b>All three ask what happened, so all three answers are in the past.</b>',
      picture: 'first-day',
      pictureCaption: 'Day one in the lab: a suspicious email on the screen and four people who have not met before.',
      passage: {
        style: 'journal',
        title: 'Monday, September 10',
        listenLabel: 'Listen to the whole entry',
        say: { scene: 'u1-journal', who: 'writer' },
        watch: {
          scene: 'u1-journal',
          label: 'Watch her tell it',
          title: 'Monday, September 10 — the writer tells it',
          lead: 'The same entry, read by the writer. Subtitles in English and Arabic are in the bar under the stage.'
        },
        paras: [
          'The first day of the cybersecurity course was very interesting. Our instructor asked us to analyse a phishing email in groups. I was nervous at first because I usually like to work alone. I was afraid I might make a mistake and feel embarrassed. I was also worried about my technical vocabulary.',
          'Our first task was to tell the group why we were studying cybersecurity. I had a lot to say, but I didn\'t want to speak. My group had four students. Before we began, Kim whispered to me that she was nervous. I said, "Me too." I guess Maria heard us because she said, "Me three." Then Ali said, "Me four." We all laughed a lot. After that, we all felt more comfortable participating in the discussion even though our English wasn\'t perfect. The joke helped us overcome our fear of speaking and gave us confidence to speak up.',
          'I want to work in groups again tomorrow because it gives me the chance to really practise. I\'ll probably still be nervous, but I know that everything will be fine in the end — especially if we laugh together again. I think humour makes learning security more enjoyable.'
        ]
      },
      items: [
        {
          q: '1. What did the instructor ask the group to do on the first day?',
          evidence: 'the second sentence of the entry.',
          options: [
            { t: 'Introduce themselves to the whole class.', ok: false, why: 'They did tell each other why they were studying, but that was their own first task inside the group — not what the instructor asked for, and not in front of the whole class.' },
            { t: 'Take a written test on their technical vocabulary.', ok: false, why: 'She was worried about her vocabulary, which is not the same as being tested on it. No test happens anywhere in the entry.' },
            { t: 'Analyse a phishing email in groups.', ok: true, why: 'Right — "Our instructor asked us to analyse a phishing email in groups". Both halves matter: what they analysed, and that it had to be done together.' },
            { t: 'Work alone on the lab computers.', ok: false, why: 'The opposite. She says she *usually likes* to work alone, which is exactly why being put in a group was difficult.' }
          ]
        },
        {
          q: '2. What did Kim do just before the group began?',
          evidence: 'the sentence beginning "Before we began…".',
          options: [
            { t: 'She whispered that she was nervous.', ok: true, why: 'Right — and it is the turning point of the whole entry. One person admitting it first is what let everybody else admit it.' },
            { t: 'She asked the instructor to repeat the task.', ok: false, why: 'Nobody asks the instructor anything. The help in this entry comes from inside the group.' },
            { t: 'She offered to speak first for the group.', ok: false, why: 'She did not volunteer — she confessed. Those are very different moves, and only the second one made the others relax.' },
            { t: 'She laughed at the writer.', ok: false, why: 'They all laughed together, afterwards, and at the situation rather than at a person. That is what made it work.' }
          ]
        },
        {
          q: '3. What did the writer decide about tomorrow?',
          evidence: 'the first sentence of the last paragraph.',
          options: [
            { t: 'That she would ask to work alone next time.', ok: false, why: 'She says the opposite: "I want to work in groups again tomorrow". The first day changed her mind.' },
            { t: 'That she would stop worrying about her English.', ok: false, why: 'Not quite. She expects to be nervous again — "I\'ll probably still be nervous" — she has simply decided it is worth it.' },
            { t: 'That she would learn the vocabulary before class.', ok: false, why: 'A sensible plan, but not one she makes here. Nothing in the last paragraph is about studying beforehand.' },
            { t: 'That she wanted to work in groups again, to get real practice.', ok: true, why: 'Right, and she gives the reason: "because it gives me the chance to really practise". A decision plus its reason is what the last paragraph of a narrative is for.' }
          ]
        }
      ]
    },
    {
      id: 'c1b', ref: '1B', bookRef: 'p.6 · 1B', type: 'order',
      title: 'Put a second entry back in order',
      instruction: 'Here is another trainee\'s first day, in three paragraphs — but they are in the wrong order. <b>Read them, or press the speaker to hear each one, then put each paragraph in the position it belongs to.</b> Every narrative does these three jobs in this order.',
      visual: {
        art: 'narrative-arc',
        caption: 'Three panels, one job each, always in this order. A paragraph that names a problem and offers no way out cannot be the last one.'
      },
      say: { key: 'jr:Yusuf' },
      poolLabel: 'Drag a paragraph into a position — or click the paragraph, then click the position.',
      whyTitle: 'How you can tell which part is which',
      blocks: [
        {
          id: 'b-lesson', tag: 'A',
          text: 'After this experience I learned that the first ten minutes are the cheapest time to ask. Now, when I do not understand a tool, I say so straight away. Nobody has ever minded, and I have never lost an hour again.'
        },
        {
          id: 'b-challenge', tag: 'B',
          text: 'My first day in the security lab was harder than I expected. The instructor put us in pairs and gave us a password-strength tool to run. I did not understand the first screen at all. I was embarrassed to say that I did not know, so I clicked on things quietly and hoped.'
        },
        {
          id: 'b-overcome', tag: 'C',
          text: 'After about twenty minutes my partner noticed that my screen had not changed. She did not laugh. She moved her chair over and showed me the three steps, slowly, and I wrote them in my notebook while she talked. By the end of the session I could run the tool on my own.'
        }
      ],
      positions: [
        {
          job: 'Paragraph 1 — the challenge',
          answer: 'b-challenge',
          hint: 'Which paragraph tells you there is a problem, and does not solve it?',
          why: 'It names the problem and leaves it there: "I did not understand the first screen at all." It also says how he felt about it — embarrassed — and gives no solution at all. A paragraph with a problem and no way out can only be the first one.'
        },
        {
          job: 'Paragraph 2 — how he got through it',
          answer: 'b-overcome',
          hint: 'Which paragraph has another person in it, doing something?',
          why: 'Somebody else arrives and something changes: his partner notices, moves her chair, shows him the steps. Watch the time words — "after about twenty minutes", "by the end of the session" — a middle paragraph moves forward through the event.'
        },
        {
          job: 'Paragraph 3 — the lesson',
          answer: 'b-lesson',
          hint: 'Which paragraph talks about now and next time, not about that day?',
          why: 'It leaves that day altogether: "Now, when I do not understand a tool, I say so straight away." The tense changes from past to present, and the statement is general rather than about one afternoon. That is what makes it a lesson and not just an ending.'
        }
      ],
      after: '<h4>Writer\'s note — main ideas</h4>' +
        'Focus each paragraph in a narrative on one main idea.<br>' +
        '<b>Paragraph 1</b> identifies a challenge.<br>' +
        '<b>Paragraph 2</b> describes how the writer overcame the challenge.<br>' +
        '<b>Paragraph 3</b> describes the life lesson the writer learned.'
    },
    {
      id: 'c1c', ref: '1C', bookRef: 'p.6 · 1C', type: 'dragcloze',
      title: 'Complete a third entry',
      instruction: 'A third trainee, a third kind of first day. <b>Drag each missing word or phrase into the gap where it belongs.</b> Some gaps need a past-tense verb; three of them are the signposts that tell you which job each paragraph is doing.',
      visual: {
        art: 'too-fast',
        caption: 'Lina\'s problem on day one: the English was arriving faster than she could write it down, and the words she missed were the ones she needed.'
      },
      /* no per-tile speakers here: `say` on a dragcloze means "read
         each chip aloud", and reading "was" on its own teaches
         nothing. The whole entry is read once it is complete. */
      /* the finished entry appears only once the gaps are right — on
         the card it would simply be the answer key, printed above
         the exercise */
      doneLabel: 'That is the whole entry. Now hear Lina read it.',
      donePassage: {
        style: 'journal',
        title: 'Tuesday, September 11',
        listenLabel: 'Hear the finished entry',
        say: { key: 'jr:Lina' },
        speak: true,
        paras: [
          'My first morning in the lab was difficult, and not for the reason I expected. The briefing was all in English and it was very fast. I could listen or I could write, but I could not do both. I wrote four words in an hour, and I did not understand two of them.',
          'What helped was something small. At the break I showed my four words to the instructor and asked what they meant. She explained them in two minutes. After that I stopped trying to write every sentence and wrote only the words I did not know.',
          'After this experience I learned that five words I can use are worth more than twenty I cannot. Now I keep a short list, and I ask about it before I go home.'
        ]
      },
      /* Two groupings gave this away at once: the tiles ran in the
         order the gaps wanted them, and all the verbs were listed
         together ahead of all the sentence openers — so a learner
         could tell which kind of tile a gap wanted from where it sat
         in the pool. Mixed now, verbs and openers alternating. */
      tiles: [
        { id: 't-learned', label: 'After this experience I learned that' },
        { id: 't-stopped', label: 'stopped' },
        { id: 't-first', label: 'My first morning' },
        { id: 't-tried', label: 'tried' },
        { id: 't-showed', label: 'showed' },
        { id: 't-asks', label: 'was asking' },
        { id: 't-helped', label: 'What helped was' },
        { id: 't-was', label: 'was' },
        { id: 't-explained', label: 'explained' },
        { id: 't-wrote', label: 'wrote' }
      ],
      text: '<h4>Tuesday, September 11</h4>' +
        '<p>[[g1]] in the lab was difficult, and not for the reason I expected. The briefing was all in English and it [[g2]] very fast. ' +
        'I could listen or I could write, but I could not do both. I [[g3]] four words in an hour, and I did not understand two of them.</p>' +
        '<p>[[g4]] something small. At the break I [[g5]] my four words to the instructor and asked what they meant. She [[g6]] them in two minutes. ' +
        'After that I [[g7]] trying to write every sentence and wrote only the words I did not know.</p>' +
        '<p>[[g8]] five words I can use are worth more than twenty I cannot. Now I keep a short list, and I ask about it before I go home.</p>',
      answers: {
        g1: 't-first', g2: 't-was', g3: 't-wrote',
        g4: 't-helped', g5: 't-showed', g6: 't-explained', g7: 't-stopped',
        g8: 't-learned'
      },
      given: { g1: 't-first' },
      whyTitle: 'What each gap is doing',
      explain: {
        g1: 'Given, so you can see the pattern. A narrative opens by saying when and where, in one short phrase.',
        g2: '"it ___ very fast" — the briefing is finished, so the verb is past. "Was" is the past of "is", and the subject "it" is singular.',
        g3: 'Past again, and irregular: the past of "write" is "wrote", not "writed". Count the hour — this is a finished action.',
        g4: 'The first signpost. "What helped was…" announces paragraph 2 before it describes anything: the problem is about to be solved.',
        g5: 'Past of "show". Notice it is she who acts here, with the instructor — paragraph 2 is where somebody else comes in.',
        g6: 'Past of "explain", regular, so just -ed. Two minutes of someone else\'s time is the whole solution to an hour of her own.',
        g7: '"I ___ trying to write every sentence" — past of "stop", with the doubled p. Stopping the wrong habit is what actually fixed it.',
        g8: 'The second signpost, and the one that marks the last paragraph: "After this experience I learned that…" is followed by something generally true, not by another event.'
      }
    }
  ]
});
