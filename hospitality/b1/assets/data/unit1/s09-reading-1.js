/* Unit 1 §9 — Extended Reading.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s09', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Extended Reading', part: '5',
          section: '9', lesson: 'Extended Reading', title: 'Extended Reading' },
  objective: 'By the end of Part 5 you can read about a receptionist\'s day and say '
  + 'what makes a good first impression.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 1 · P5',
      type: 'study',
      title: 'The reading',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'The reading',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'When guests arrive at a hotel, the first place they see is the front '
            + 'desk. For this reason, people often call the front desk \'the heart '
            + 'of the hotel\'. It is the first contact and the last contact between '
            + 'the guest and the hotel. A good first minute can make the whole stay '
            + 'feel happy and safe.',
          say: 'When guests arrive at a hotel, the first place they see is the front '
            + 'desk. For this reason, people often call the front desk \'the heart '
            + 'of the hotel\'. It is the first contact and the last contact between '
            + 'the guest and the hotel. A good first minute can make the whole stay '
            + 'feel happy and safe.',
          role: 'course'
        },
        {
          h: 'The receptionist has a busy and important job. She greets each guest '
            + 'with a smile and, when she can, she uses the guest\'s name. She '
            + 'speaks clearly and politely. She listens carefully to what the guest '
            + 'needs. At the same time, she works at the computer, finds the '
            + 'reservation, and prepares the room key. It is fast work, but it is '
            + 'also friendly work.',
          say: 'The receptionist has a busy and important job. She greets each guest '
            + 'with a smile and, when she can, she uses the guest\'s name. She '
            + 'speaks clearly and politely. She listens carefully to what the guest '
            + 'needs. At the same time, she works at the computer, finds the '
            + 'reservation, and prepares the room key. It is fast work, but it is '
            + 'also friendly work.',
          role: 'course'
        },
        {
          h: 'Every guest is different. Some guests are on holiday and want to '
            + 'relax and enjoy the city. Other guests are here for business and are '
            + 'often in a hurry. A skilled receptionist understands this difference '
            + 'and helps each guest in the right way. She stays calm when the lobby '
            + 'is busy, and she never forgets to smile.',
          say: 'Every guest is different. Some guests are on holiday and want to '
            + 'relax and enjoy the city. Other guests are here for business and are '
            + 'often in a hurry. A skilled receptionist understands this difference '
            + 'and helps each guest in the right way. She stays calm when the lobby '
            + 'is busy, and she never forgets to smile.',
          role: 'course'
        },
        {
          h: 'Good English helps her to do all of this. Many guests come from other '
            + 'countries and use English as a common language. With clear, polite '
            + 'English, the receptionist can welcome the world to her hotel — and to '
            + 'her city. Lina knows this. Today she is watching and learning. '
            + 'Tomorrow, she will welcome her first guest alone.',
          say: 'Good English helps her to do all of this. Many guests come from other '
            + 'countries and use English as a common language. With clear, polite '
            + 'English, the receptionist can welcome the world to her hotel — and to '
            + 'her city. Lina knows this. Today she is watching and learning. '
            + 'Tomorrow, she will welcome her first guest alone.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 1 · P5 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'What does a receptionist do when she greets a guest?',
            model: 'She greets with a smile and uses the guest\'s name.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Name two things she does at the same time.',
            model: '(any two) greets/uses the name/speaks politely/listens/works at the '
              + 'computer/finds the reservation/prepares the key.',
            minWords: 6,
            rows: 3,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How are business guests often different from holiday guests?',
            model: 'Business guests are in a hurry; holiday guests want to relax.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why does good English help a receptionist?',
            model: 'Because many guests come from other countries and use English.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What will Lina do tomorrow?',
            model: 'She will welcome her first guest alone.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Why do people call the front desk \'the heart of the hotel\'? (it is '
        + 'the first and last contact with the guest)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 1 · P5 B',
      type: 'cloze',
      title: 'Choose the best answer (A–D)',
      instruction: 'Choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The \'first minute\' is important because it… A) is short B) can '
            + 'make the whole stay feel happy C) is for business only D) is at night '
            + '[[1]]'
        + '<br>'
        + '2. A skilled receptionist stays… A) angry B) calm C) quiet D) away [[2]]'
        + '<br>'
        + '3. Many guests use English because they… A) live in the hotel B) come '
            + 'from other countries C) work at the desk D) are on holiday [[3]]'
        + '<br>'
        + '4. Today Lina is… A) welcoming guests alone B) watching and learning '
            + 'C) on holiday D) a manager [[4]]'
        + '</div>',
      answers: {
        '1': ['B'],
        '2': ['B'],
        '3': ['B'],
        '4': ['B']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>B</b>',
        '2': '<b>B</b>',
        '3': '<b>B</b>',
        '4': '<b>B</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 1 · P5 C',
      type: 'cloze',
      title: 'Find a word in the text that means:',
      instruction: 'Find a word in the text that means:',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. not comfortable, needing rest → [[1]]'
        + '<br>'
        + '2. in a kind, nice way → [[2]]'
        + '<br>'
        + '3. good at a job → [[3]]'
        + '</div>',
      answers: {
        '1': ['tired'],
        '2': ['politely'],
        '3': ['skilled']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>tired</b>',
        '2': '<b>politely</b>',
        '3': '<b>skilled</b>'
      }
    }
  ]
});
