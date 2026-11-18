/* Unit 1 §12 — Consolidation.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s12', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Consolidation', part: '8',
          section: '12', lesson: 'Consolidation', title: 'Consolidation' },
  objective: 'By the end of Part 8 you can use this unit\'s words and both present '
  + 'tenses together, without being told which to choose.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 1 · P8',
      type: 'study',
      title: 'Consolidation',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Consolidation',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'It is seven o\'clock in the morning, and the Orient Rose Hotel is '
            + 'waking up. Lina arrives and puts on her uniform. She says good '
            + 'morning to her colleagues. Mr. Nabil, the duty manager, is reading '
            + 'the guest list. Sami, the porter, is cleaning the front door. In the '
            + 'restaurant, the waiters are preparing breakfast.',
          say: 'It is seven o\'clock in the morning, and the Orient Rose Hotel is '
            + 'waking up. Lina arrives and puts on her uniform. She says good '
            + 'morning to her colleagues. Mr. Nabil, the duty manager, is reading '
            + 'the guest list. Sami, the porter, is cleaning the front door. In the '
            + 'restaurant, the waiters are preparing breakfast.',
          role: 'course'
        },
        {
          h: 'At half past seven, the first guest comes to the desk. He is a '
            + 'businessman from Beirut, and he is in a hurry. Lina smiles and greets '
            + 'him. \'Good morning, and welcome,\' she says. She finds his '
            + 'reservation, gives him his key card, and tells him about breakfast. '
            + 'The guest says thank you and goes to his room. Lina feels happy. Her '
            + 'first guest is easy and kind.',
          say: 'At half past seven, the first guest comes to the desk. He is a '
            + 'businessman from Beirut, and he is in a hurry. Lina smiles and greets '
            + 'him. \'Good morning, and welcome,\' she says. She finds his '
            + 'reservation, gives him his key card, and tells him about breakfast. '
            + 'The guest says thank you and goes to his room. Lina feels happy. Her '
            + 'first guest is easy and kind.',
          role: 'course'
        },
        {
          h: 'The morning is busy. The telephone rings, guests arrive, and the '
            + 'lobby is full of voices. But the team works together, and every guest '
            + 'gets a warm welcome. At three o\'clock, Lina\'s shift finishes. She '
            + 'is tired, but she is smiling. Today she learned the most important '
            + 'lesson: in hospitality, a warm welcome is everything.',
          say: 'The morning is busy. The telephone rings, guests arrive, and the '
            + 'lobby is full of voices. But the team works together, and every guest '
            + 'gets a warm welcome. At three o\'clock, Lina\'s shift finishes. She '
            + 'is tired, but she is smiling. Today she learned the most important '
            + 'lesson: in hospitality, a warm welcome is everything.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 1 · P8 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done.)',
      questions: [{
            q: 'What is Mr. Nabil doing when Lina arrives?',
            model: 'He is reading the guest list.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where is the first guest from?',
            model: 'From Beirut.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What three things does Lina do for the first guest?',
            model: 'She greets him, finds his reservation / gives him his key card, and '
              + 'tells him about breakfast.',
            minWords: 5,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How does Lina feel at the end of her shift?',
            model: 'Tired but happy / smiling.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What time does Lina arrive? (seven o\'clock)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 1 · P8 B',
      type: 'cloze',
      title: 'Complete each sentence with ONE word from the text',
      instruction: 'Complete each sentence with ONE word from the text. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Mr. Nabil is the duty [[1]].'
        + '<br>'
        + '2. Sami is the [[2]].'
        + '<br>'
        + '3. The first guest is a [[3]] from Beirut.'
        + '<br>'
        + '4. Lina gives the guest his [[4]] card.'
        + '<br>'
        + '5. Lina\'s [[5]] finishes at three o\'clock.'
        + '</div>',
      answers: {
        '1': ['manager'],
        '2': ['porter'],
        '3': ['businessman'],
        '4': ['key'],
        '5': ['shift']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>manager</b>',
        '2': '<b>porter</b>',
        '3': '<b>businessman</b>',
        '4': '<b>key</b>',
        '5': '<b>shift</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 1 · P8 C',
      type: 'report',
      title: 'Discuss in small groups',
      instruction: 'Discuss in small groups. Give reasons and examples.',
      minWords: 20,
      placeholder: 'Why is a warm welcome so important in hospitality?',
      stems: ['Why is a warm welcome so important in hospitality?',
      'How can a team help a guest feel comfortable?']
    }
  ]
});
