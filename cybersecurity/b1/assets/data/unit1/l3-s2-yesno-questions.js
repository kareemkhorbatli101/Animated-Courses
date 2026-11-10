CSB1.page('u1-l3-s2', {
  book: { page: 9, section: 2, lesson: 'Lesson 3 · Grammar', title: 'Ask and answer present and past yes / no questions' },
  objective: 'Use present and past tense to describe study habits and learning',
  prev: 'l3-s1-present-past-forms', prevLabel: 'Verb forms',
  next: 'l3-s3-listen-for-tenses', nextLabel: 'Listen for the tenses',
  cards: [
    {
      id: 'c2a', ref: '2A', bookRef: 'p.9 · 2A', type: 'study',
      title: 'Work out the short answers, then study the charts',
      instruction: 'The four short answers below are missing. <b>Work them out</b> — there is one rule behind all four — and the full charts open underneath for you to study and listen to.',
      visual: {
        art: 'aux-mirror',
        caption: 'The whole rule in one picture: whatever auxiliary starts the question comes straight back in the short answer. Change the auxiliary and the answer changes with it.'
      },
      ruleGate: {
        title: 'One rule covers all four',
        lead: 'Complete the four short answers, then finish the rule underneath them.',
        text: 'Do you study every day? — Yes, I [[1]].<br>' +
          'Did you study yesterday? — Yes, I [[2]].<br>' +
          'Are you studying now? — Yes, I [[3]].<br>' +
          'Were you studying at noon? — Yes, I [[4]].<br><br>' +
          'So the short answer repeats the [[5]] from the question.',
        banks: {
          '1': ['do', 'did', 'am', 'was', 'study'],
          '2': ['do', 'did', 'am', 'was', 'studied'],
          '3': ['do', 'did', 'am', 'was', 'studying'],
          '4': ['do', 'did', 'am', 'was', 'were'],
          '5': ['auxiliary (helper verb)', 'main verb', 'subject', 'question word']
        },
        answers: { '1': 'do', '2': 'did', '3': 'am', '4': 'was', '5': 'auxiliary (helper verb)' },
        after: 'That is why you never answer "Did you study?" with "Yes, I studied" in a short answer — the helper verb has to come back.'
      },
      tables: [
        {
          title: 'Yes / no questions and answers — simple present and simple past',
          head: ['Simple present', 'Simple past'],
          rows: [
            ['<b>A:</b> Do you study every day?<br><b>B:</b> Yes, I do. OR No, I don\'t.', '<b>A:</b> Did you study every day?<br><b>B:</b> Yes, I did. OR No, I didn\'t.'],
            ['<b>A:</b> Does she study every day?<br><b>B:</b> Yes, she does. OR No, she doesn\'t.', '<b>A:</b> Did she study yesterday?<br><b>B:</b> Yes, she did. OR No, she didn\'t.']
          ]
        },
        {
          title: 'Yes / no questions and answers — present continuous and past continuous',
          head: ['Present continuous', 'Past continuous'],
          rows: [
            ['<b>A:</b> Are you studying now?<br><b>B:</b> Yes, I am. OR No, I\'m not.', '<b>A:</b> Were you studying yesterday at noon?<br><b>B:</b> Yes, I was. OR No, I wasn\'t.'],
            ['<b>A:</b> Is she studying now?<br><b>B:</b> Yes, she is. OR No, she isn\'t.', '<b>A:</b> Was she studying yesterday at noon?<br><b>B:</b> Yes, she was. OR No, she wasn\'t.']
          ]
        }
      ],
      playable: [
        'Do you study every day? Yes, I do.',
        'Did you study every day? Yes, I did.',
        'Are you studying now? No, I\'m not.',
        'Were you studying yesterday at noon? Yes, I was.'
      ],
      doneLabel: 'I have studied the charts'
    },
    {
      id: 'c2b', ref: '2B', bookRef: 'p.9 · 2B', type: 'circlematch',
      title: 'Circle the correct word, then match',
      instruction: '<b>Stage 1:</b> tap the correct auxiliary in each question. <b>Stage 2</b> unlocks when all six are right — then drag each answer letter onto its question.',
      visual: {
        art: 'yesno-tree',
        caption: 'Decide what the question is really asking about — a habit, right now, a finished moment, or a moment in progress — and the auxiliary follows from that.'
      },
      whyTitle: 'The time word chooses the auxiliary, and the answer mirrors it',
      items: [
        {
          text: '( {{Did|Do}} ) you go to the lab yesterday?', answer: 0, match: 'f',
          why: '"yesterday" is finished time, so the question opens with Did — and because Did is already past, the verb stays "go", not "went". The short answer sends Did back as did.'
        },
        {
          text: '( {{Were|Are}} ) you listening to the briefing now?', answer: 1, match: 'a',
          why: '"now" plus "listening" is the present continuous. Were would move it into the past, which "now" forbids. Are comes back as am, because the answer is about me.'
        },
        {
          text: '( {{Do|Are}} ) you always speak English in the SOC?', answer: 0, match: 'd',
          why: '"always" makes it a habit, and a habit takes the plain verb "speak" with Do. Are would need "speaking", which is not what the sentence says.'
        },
        {
          text: '( {{Did|Does}} ) she learn any new commands last week?', answer: 0, match: 'c',
          why: '"last week" is finished, so Did — even though "she" would take Does in the present. The past auxiliary is the same for everybody, which is one fewer thing to remember.'
        },
        {
          text: '( {{Are|Is}} ) he studying in the lab now?', answer: 1, match: 'e',
          why: '"he" is one person, so Is, not Are. The negative short answer keeps that: No, he is not — usually said as "he\'s not".'
        },
        {
          text: '( {{Do|Is}} ) you make a weekly study schedule?', answer: 0, match: 'b',
          why: '"make" has no -ing, so this cannot be a continuous form. With "you" the simple present auxiliary is Do, and a weekly habit is exactly what Do is for.'
        }
      ],
      answers: [
        { id: 'a', t: 'Yes, I am.' },
        { id: 'b', t: 'No, I don\'t.' },
        { id: 'c', t: 'Yes, she did.' },
        { id: 'd', t: 'Yes, I do.' },
        { id: 'e', t: 'No, he\'s not.' },
        { id: 'f', t: 'Yes, I did.' }
      ]
    },
    {
      id: 'c2c', ref: '2C', bookRef: 'p.9 · 2C', type: 'editor',
      title: 'Edit the sentences',
      instruction: 'Each sentence has exactly one fault, and it is always the verb. <b>Choose the right form</b> — the sentence rebuilds as you choose, so read it back and say it aloud. Then write the whole corrected sentence in the box. The first one is done for you.',
      visual: {
        art: 'editing-desk',
        caption: 'Find the time word first — "now", "every day", "yesterday" — and the right form follows from it. Everything else in each sentence is already correct.'
      },
      whyTitle: 'The one fault in each sentence',
      items: [
        { wrong: 'Paulo *doesn\'t* taking notes now.', model: 'Paulo isn\'t taking notes now.' },
        {
          wrong: 'Yan *memorize* terms every day.',
          hint: '"Yan" is one person, and the sentence is about every day.',
          fix: [
            { t: 'memorizes', ok: true, why: '"Yan" is one person — he, in effect — and in the simple present he, she and it add -s. "Every day" keeps it in the simple present, so nothing else changes.' },
            { t: 'memorized', why: 'That would put it in the past, but "every day" is still true today. The time word and the tense have to agree.' },
            { t: 'is memorizing', why: 'That is right now, once. "Every day" is a habit, and a habit does not take a continuous form.' }
          ]
        },
        {
          wrong: 'We *is* taking a break now.',
          hint: 'Count the people.',
          fix: [
            { t: 'are', ok: true, why: '"We" is more than one person, and more than one takes are. The rest of the sentence is already right: "taking" and "now" are a correct present continuous.' },
            { t: 'was', why: 'Were would at least match "we", but "now" rules out any past form, and "was" is singular as well — two faults instead of one.' },
            { t: 'am', why: 'Am belongs to I alone. "We am" never occurs in English.' }
          ]
        },
        {
          wrong: 'I *don\'t take* notes yesterday.',
          hint: 'The time word is doing all the work here.',
          fix: [
            { t: 'didn\'t take', ok: true, why: '"Yesterday" is finished time, so the negative auxiliary goes into the past: didn\'t. The main verb then stays in its base form, "take", because didn\'t is already carrying the past.' },
            { t: 'didn\'t took', why: 'Only one word carries the tense. Once didn\'t is past, took must go back to take.' },
            { t: 'wasn\'t taking', why: 'Grammatically possible, but it changes the meaning to an interrupted action, and "yesterday" on its own does not point at a moment the way "at nine last night" would.' }
          ]
        }
      ]
    }
  ]
});
