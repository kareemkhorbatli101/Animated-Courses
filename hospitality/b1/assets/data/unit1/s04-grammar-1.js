/* Unit 1 §4 — Grammar — The Present Simple and Present Continuous.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s04', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Grammar — The Present Simple and Present Continuous', part: '2',
          section: '4', lesson: 'Grammar — The Present Simple and Present Continuous', title: 'Grammar — The Present Simple and Present Continuous' },
  objective: 'By the end of Part 2 you can tell a daily routine from something '
  + 'happening now, and choose the present simple or the present '
  + 'continuous for each.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 1 · P2 · figures',
      type: 'study',
      title: 'The pictures in Grammar — The Present Simple and Present Continuous',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-1.4.png', caption: 'Two present tenses for two different ideas.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 1 · P2',
      type: 'study',
      title: 'The grammar, as the book gives it',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'The grammar, as the book gives it',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'This unit uses two present tenses. We use the PRESENT SIMPLE for '
            + 'routines, habits and facts — things that are generally true and '
            + 'happen again and again. Lina works at the front desk. She greets '
            + 'every guest. The hotel opens at seven o\'clock. Breakfast starts at '
            + 'seven.',
          say: 'This unit uses two present tenses. We use the PRESENT SIMPLE for '
            + 'routines, habits and facts — things that are generally true and '
            + 'happen again and again. Lina works at the front desk. She greets '
            + 'every guest. The hotel opens at seven o\'clock. Breakfast starts at '
            + 'seven.',
          role: 'course'
        },
        {
          h: 'We use the PRESENT CONTINUOUS (am / is / are + verb-ing) for actions '
            + 'that are happening NOW, at the moment of speaking. Right now, Lina is '
            + 'greeting a guest. Mr. Nabil is checking the emails. The waiters are '
            + 'serving breakfast.',
          say: 'We use the PRESENT CONTINUOUS (am / is / are + verb-ing) for actions '
            + 'that are happening NOW, at the moment of speaking. Right now, Lina is '
            + 'greeting a guest. Mr. Nabil is checking the emails. The waiters are '
            + 'serving breakfast.',
          role: 'course'
        },
        {
          h: 'Time words help you choose. Present simple often uses: every day, '
            + 'usually, always, sometimes, at seven o\'clock. Present continuous '
            + 'often uses: now, right now, at the moment, look!, listen!',
          say: 'Time words help you choose. Present simple often uses: every day, '
            + 'usually, always, sometimes, at seven o\'clock. Present continuous '
            + 'often uses: now, right now, at the moment, look!, listen!',
          role: 'course'
        },
        {
          h: 'Form',
          say: 'Form',
          role: 'course'
        },
        {
          h: 'Present simple: I / you / we / they work · he / she / it works (add -s)',
          say: 'Present simple: I / you / we / they work · he / she / it works (add -s)',
          role: 'course'
        },
        {
          h: 'Present continuous: I am working · he / she / it is working · you / '
            + 'we / they are working',
          say: 'Present continuous: I am working · he / she / it is working · you / '
            + 'we / they are working',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 1 · P2 A',
      type: 'cloze',
      title: 'Complete with the PRESENT SIMPLE',
      instruction: 'Complete with the PRESENT SIMPLE. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The porters [[1]] (carry) the guests\' bags.'
        + '<br>'
        + '2. Mr. Nabil [[2]] (manage) the front office.'
        + '<br>'
        + '3. We [[3]] (welcome) every guest with a smile.'
        + '<br>'
        + '4. The restaurant [[4]] (open) at seven for breakfast.'
        + '<br>'
        + '5. Lina always [[5]] (wear) her uniform at work.'
        + '</div>',
      answers: {
        '1': ['carry'],
        '2': ['manages'],
        '3': ['welcome'],
        '4': ['opens'],
        '5': ['wears']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>carry</b>',
        '2': '<b>manages</b>',
        '3': '<b>welcome</b>',
        '4': '<b>opens</b>',
        '5': '<b>wears</b>'
      }
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 1 · P2 B',
      type: 'cloze',
      title: 'Complete with the PRESENT CONTINUOUS',
      instruction: 'Complete with the PRESENT CONTINUOUS.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Look! A guest [[1]] (arrive) now.'
        + '<br>'
        + '2. Lina [[2]] (check) the guest in at the moment.'
        + '<br>'
        + '3. The waiters [[3]] (serve) breakfast right now.'
        + '<br>'
        + '4. I [[4]] (answer) the telephone.'
        + '<br>'
        + '5. Listen — Mr. Nabil [[5]] (talk) to a guest.'
        + '</div>',
      answers: {
        '1': ['is arriving'],
        '2': ['is checking'],
        '3': ['are serving'],
        '4': ['am answering'],
        '5': ['is talking']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>is arriving</b>',
        '2': '<b>is checking</b>',
        '3': '<b>are serving</b>',
        '4': '<b>am answering</b>',
        '5': '<b>is talking</b>'
      }
    },
    {
      id: 'c5',
      ref: 'C',
      bookRef: 'Unit 1 · P2 C',
      visual: { img: '../assets/figures/fig-1.5.png', caption: 'Lina\'s working day.' },
      type: 'cloze',
      title: 'Choose the correct tense: present simple or present continuo',
      instruction: 'Choose the correct tense: present simple or present continuous.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Lina usually ( works / is working ) in the morning. [[1]]'
        + '<br>'
        + '2. At the moment she ( greets / is greeting ) a family from Aleppo. [[2]]'
        + '<br>'
        + '3. The hotel ( has / is having ) two hundred rooms. [[3]]'
        + '<br>'
        + '4. Listen — the manager ( talks / is talking ) to a guest now. [[4]]'
        + '<br>'
        + '5. Breakfast ( starts / is starting ) at seven every day. [[5]]'
        + '</div>',
      answers: {
        '1': ['works'],
        '2': ['is greeting'],
        '3': ['has'],
        '4': ['is talking'],
        '5': ['starts']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>works</b>',
        '2': '<b>is greeting</b>',
        '3': '<b>has</b>',
        '4': '<b>is talking</b>',
        '5': '<b>starts</b>'
      }
    }
  ]
});
