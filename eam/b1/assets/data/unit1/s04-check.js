/* ============================================================
   Unit 1 §4 — Part 1, Check what you know.

   The book's three closing exercises for Part 1: a multiple choice, a gap-fill, and a short
   piece of writing. The writing task is the first on this screen where a learner produces
   English of their own, so it carries the AI tutor's criteria as data — the four axes judge
   against THIS task and the book's own model, not against a general idea of good English.
   ============================================================ */
EAM.page('u1-s04', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 1 · Check', part: '1', section: '4',
          lesson: 'Part 1 · Vocabulary', title: 'Check what you know' },
  objective: 'Use the words of Part 1 to answer, to complete sentences, and to write',
  video: 'u01v04',
  prev: 's03-pronunciation', prevLabel: 'Pronunciation',
  next: 's05-grammar-notice', nextLabel: 'Notice the two tenses',
  cards: [

    /* ------------------------------------------------------------------ 1. multiple choice */
    {
      id: 'c1', covers: ['Part 1'], ref: '1E', bookRef: 'Unit 1 · Part 1 · Multiple choice',
      type: 'quizset',
      title: 'Choose the correct answer',
      instruction: 'Three questions about the words you have just met. Every answer is '
        + 'somewhere on the two screens before this one.',
      display: 'cards',
      say: true,
      items: [
        {
          q: '1. What does the battery do?',
          evidence: 'the matching card in §2 — the drawing with + and − on top.',
          options: [
            { t: 'Makes the car move', ok: false,
              why: 'That is the engine. This is the swap worth fixing now: the battery '
                + 'STARTS the engine, and then the engine moves the car. One supplies a spark, '
                + 'the other does the work.' },
            { t: 'Cools the engine', ok: false,
              why: 'That is the radiator — the part with the fins and the water hose.' },
            { t: 'Holds bags', ok: false,
              why: 'That is the boot, the space at the back. Nothing electrical about it.' },
            { t: 'Stores electricity to start the car', ok: true,
              why: 'Right. Two ideas in one answer, and both matter: it <b>stores</b> '
                + 'electricity (it does not make it — the engine does that while running), and '
                + 'what the electricity is for is <b>starting</b> the car.' }
          ]
        },
        {
          q: '2. Where does a mechanic work?',
          evidence: 'the table in §2 — the row that was done for you.',
          options: [
            { t: 'Reception', ok: false,
              why: 'That is where the service advisor works. Reception is where cars are '
                + 'booked in, not where they are repaired.' },
            { t: 'The office', ok: false,
              why: 'That is the manager. The office is the one place in the department where '
                + 'nobody touches a car.' },
            { t: 'The workshop', ok: true,
              why: 'Right — the workshop, in a service bay. The diagnostic technician works '
                + 'there too; the difference between them is what they DO, not where.' },
            { t: 'At home', ok: false,
              why: 'A mechanic needs the lift, the tools and the parts store, and none of them '
                + 'travel.' }
          ]
        },
        {
          q: '3. What is a job card?',
          evidence: 'the matching card in §2 — the only item there that is a piece of paper.',
          options: [
            { t: 'A paper that lists the work to do', ok: true,
              why: 'Right. The job card is how the customer’s words become instructions the '
                + 'workshop can follow. Rana writes it at reception; Nabil reads it in the bay.' },
            { t: 'A type of tool', ok: false,
              why: 'It carries no tools and does no work itself — it is information. A tool '
                + 'would not need writing on.' },
            { t: 'A car part', ok: false,
              why: 'Nothing on the car. Of the seven things you matched in §2, this was the '
                + 'only one that is neither a part nor a place.' },
            { t: 'A door key', ok: false,
              why: 'The customer keeps the key, or hands it over separately. The card is the '
                + 'written record of what to do.' }
          ]
        }
      ]
    },

    /* --------------------------------------------------------------------- 2. the gap-fill */
    {
      id: 'c2', covers: ['Part 1'], ref: '1F', bookRef: 'Unit 1 · Part 1 · Vocabulary fill-in',
      type: 'cloze',
      title: 'Complete the sentences',
      instruction: 'Four sentences, four words, each used once.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. The [[1]] makes the car move.<br>'
        + '2. The [[2]] stores electricity to start the car.<br>'
        + '3. The mechanic works in the [[3]].<br>'
        + '4. The service advisor writes a [[4]] for each car.'
        + '</div>',
      answers: {
        '1': ['engine'], '2': ['battery'], '3': ['workshop'], '4': ['job card', 'jobcard']
      },
      bank: ['engine', 'battery', 'workshop', 'job card'],
      whyTitle: 'The same four facts, now in sentences',
      why: {
        '1': '<b>engine</b> — the machine that makes the car move. Third time in this unit.',
        '2': '<b>battery</b> — stores electricity to START. If you wrote <i>engine</i> here, '
          + 'read sentence 1 again: the same word cannot answer both.',
        '3': '<b>workshop</b> — the room where mechanics work. Not the service bay: a bay is '
          + 'one marked space INSIDE the workshop, and the sentence wants the room.',
        '4': '<b>job card</b> — two words. Written by the advisor, for each car. This sentence '
          + 'is the whole relationship between the two people in one line.'
      }
    },

    /* --------------------------------------------------------- 3. the first piece of writing */
    {
      id: 'c3', covers: ['Part 1'], ref: '1G', bookRef: 'Unit 1 · Part 1 · Write about cars',
      type: 'writer',
      title: 'Write two or three sentences (30–50 words)',
      instruction: 'Write about a car, or about the service department. <b>Use three words '
        + 'from this unit.</b> There is no single right answer — the model below is one way of '
        + 'doing it, not the answer.',
      /* `spot:`, not `art:`. The engine reads `art` as a FIGURE name and `spot` as a spot, and
         `workshop` is a spot — so `art: 'workshop'` drew the dashed "no drawing for workshop"
         box and pushed the name onto art.missingArt, where the render gate found it. */
      visual: { spot: 'workshop',
        caption: 'Write about what you can see here, or about a car you know.' },
      paras: [
        { label: 'What you are writing about',
          purpose: 'A car you know, or the department itself. Name it in the first sentence.' },
        { label: 'What it has, or who works there',
          purpose: 'Two or three details. This is where your three unit words belong.' }
      ],
      minWords: 30,
      stems: ['My family has a…', 'It has a…', 'The mechanic…', 'In a service department…',
              'The service advisor…'],
      model: 'My family has an old car. It has a strong engine and a new battery. Every year '
        + 'we take it to a garage for a service. The mechanic checks the brakes and the tyres, '
        + 'and the service advisor writes a job card. The workshop is clean and tidy, so it is '
        + 'a safe place to work.',
      aiCheck: {
        task: 'Two or three sentences (30-50 words) about a car the learner knows, or about a '
          + 'service department, using at least three words from Unit 1.',
        grammar: 'the present simple for facts and routines, adding -s with he/she/it',
        reader: 'the teacher, and other learners in the class',
        must: [
          'at least three words from the unit: engine, battery, radiator, bonnet, boot, '
            + 'service bay, job card, mechanic, service, workshop',
          'at least two complete sentences',
          'a capital letter at the start and a full stop at the end of each sentence'
        ]
      },
      coach: {
        title: 'Check your writing',
        target: 'the vocabulary of Unit 1, in sentences of your own',
        minWords: 30,
        taught: [
          'Ten words: engine, battery, radiator, bonnet, boot, service bay, job card, '
            + 'mechanic, service, workshop.',
          'A service department has three areas: reception, the workshop, the parts store.'
        ],
        task: 'Write two or three sentences about a car you know or about a service '
          + 'department, using at least three words from this unit.',
        parts: [
          'Say what you are writing about — a car, or the department.',
          'Give two or three details, using the unit’s words.'
        ],
        example: [
          'My uncle has a small car. The engine is old but it still works well. Every year he '
            + 'takes it to the workshop near our house, and the mechanic checks the brakes.'
        ],
        exampleNote: 'One learner’s answer, not the answer. Yours will name a different car.',
        criteria: [
          { t: 'Uses at least three words from this unit.', auto: 'mentions',
            keys: ['engine', 'battery', 'radiator', 'bonnet', 'boot', 'service bay',
                   'job card', 'mechanic', 'service', 'workshop', 'garage', 'tyre'],
            need: 3,
            fail: 'Name the parts and the people — engine, battery, mechanic, workshop — '
              + 'rather than writing "it" and "they".' },
          { t: 'Two or more complete sentences.' },
          { t: 'Present simple, with -s after he, she or it.' },
          { t: 'Says something real about the car or the place, not only a list of words.' }
        ]
      }
    }
  ]
});
