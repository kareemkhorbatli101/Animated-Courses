/* Unit 7 §17 — Part 7 - Management File, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s17', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 7 - Management File, practice', part: '7', section: '17',
          lesson: 'Part 7 - Management File, practice', title: 'Part 7 - Management File, practice' },
  objective: 'Work through Part 7 - Management File, practice of unit 7.',
  video: 'u07v17',
  prev: 's16-management-file-dialogue', prevLabel: 'Part 7 - Management File, dialogue',
  next: 's18-global-case-study', nextLabel: 'Part 8 - Global Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 7 · Part 7', type: 'cloze',
      title: 'Controlled Practice — The Week Plan',
      instruction: 'Complete with will, going, is, or are.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. On Monday, we are [[1]] to service four cars.' + '<br>'
        + '2. The van [[2]] arriving on Wednesday.' + '<br>'
        + '3. I [[3]] call the customer with the ready time.' + '<br>'
        + '4. The parts [[4]] going to arrive on Thursday.' + '<br>'
        + '</div>',
      answers: {
        '1': ['going'],
        '2': ['is'],
        '3': ['will'],
        '4': ['are']
      },
      bank: ['will', 'going', 'is', 'are'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>going</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>will</i>, <i>is</i> in the bank.',
        '2': '<b>is</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>will</i>, <i>going</i> in the bank.',
        '3': '<b>will</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>going</i>, <i>is</i> in the bank.',
        '4': '<b>are</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>will</i>, <i>going</i> in the bank.'
      }
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 7 · Part 7', type: 'roleplay',
      title: 'Role-Play — Scheduling the Week',
      instruction: 'In pairs. One is the manager (Maher); one is the advisor (Rana). Use the '
        + 'model and cards.',
      scene: 'u7-dialogue6',
      roles: [{ who: 'maher', label: 'Card A · Maher' }, { who: 'rana', label: 'Card B · Rana' }],
      briefs: [{ label: 'Card A', text: 'Manager (Maher): explain the big job, the plan for parts, and the ready day' },
                { label: 'Card B', text: 'Advisor (Rana): ask when things are coming and arrange the customer’s '
        + 'ready time and a courtesy car' }],
      remember: ['Model exchange — Maher: The van is coming in on Wednesday, and Lina is '
        + 'going to diagnose it. — Rana: When will the parts arrive? — Maher: On '
        + 'Thursday, so we’ll finish on Friday. — Rana: I’ll call the customer and '
        + 'offer a courtesy car.',
        'Stretch: a normal customer’s booking clashes with the big job — decide how '
        + 'to fit both into the week, and explain'],
      minWords: 30,
      modelScene: { id: 'u7-dialogue6',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'Future forms: will, going to, and the present continuous',
        task: 'In pairs. One is the manager (Maher); one is the advisor (Rana). Use the '
        + 'model and cards.',
        parts: ['A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.'],
        example: ['Maher: The van is coming in on Wednesday, and Lina is going to diagnose '
        + 'it. — Rana: When will the parts arrive? — Maher: On Thursday, so we’ll '
        + 'finish on Friday. — Rana: I’ll call the customer and offer a courtesy car.'],
        criteria: [{ t: 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.' },
                   { t: 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.' },
                   { t: 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.' },
                   { t: 'The desk words are used exactly — estimate, deposit, invoice, handover — '
        + 'and an estimate is never called a bill.' },
                   { t: 'The customer is told the price “before” the work, which is what an '
        + 'estimate is for.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 7'], ref: '7C',
      bookRef: 'Unit 7 · Part 7', type: 'writer',
      title: 'Supervisory Writing (50–80 words)',
      instruction: 'You are Maher. Write a short update message to the customer of the big '
        + 'job. Give an honest plan and ready time.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'You are Maher. Write a short update message to the customer of the big '
        + 'job. Give an honest plan and ready time.',
        words: [],
        must: ['a clear plan + honest ready time?', 'future forms used?', 'a courtesy car offered?', '50–80 words?', 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'You are Maher. Write a short update message to the customer of the big '
        + 'job. Give an honest plan and ready time.',
        grammar: 'Future forms: will, going to, and the present continuous',
        reader: 'the teacher',
        must: ['a clear plan + honest ready time?', 'future forms used?', 'a courtesy car offered?', '50–80 words?', 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Future forms: will, going to, and the present continuous',
        minWords: 40,
        taught: ['Taking a booking, giving an estimate and promising a ready time — and the '
        + 'three ways English talks about what has not happened yet.'],
        task: 'You are Maher. Write a short update message to the customer of the big '
        + 'job. Give an honest plan and ready time.',
        parts: ['a clear plan + honest ready time?', 'future forms used?', 'a courtesy car offered?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear plan + honest ready time?' },
                   { t: 'future forms used?' },
                   { t: 'a courtesy car offered?' },
                   { t: '50–80 words?' },
                   { t: 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.' },
                   { t: 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.' }]
      }
    }
  ]
});
