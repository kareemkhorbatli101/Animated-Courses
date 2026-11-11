/* Unit 1 · s11-listening-3 — Listening 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s11-listening-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Listening 3',
    page: 1,
    section: '11',
    lesson: 'Part 3 · Listening',
    title: 'Listening 3'
  },
  objective: 'Passage 3: The Morning Meeting (Team Update)',
  cards: [
    {
      id: 'c1',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 1 · 3C',
      type: 'scene',
      source: 'book',
      title: 'Passage 3: The Morning Meeting (Team Update)',
      instruction: 'Fill in the Meeting Notes:',
      playable: [
        {
          t: 'Good morning everyone. Quick updates, please. Priya, what are you working on?',
          role: 'spk:Mr Farouk',
          who: 'Mr Farouk',
          _key: 'mrfarouk'
        },
        {
          t: 'I am finishing the monthly GST return for Singapore. I usually submit it on the 20th, but I am trying to finish it today.',
          role: 'spk:Priya',
          who: 'Priya',
          _key: 'priya'
        },
        {
          t: 'I am dealing with the petty cash in Toronto. There is a CAD 20 discrepancy. I am recounting the money now.',
          role: 'spk:Ryan',
          who: 'Ryan',
          _key: 'ryan'
        },
        {
          t: 'Okay. Remember, we always investigate errors over ten, in any currency. Keep me updated.',
          role: 'spk:Mr Farouk',
          who: 'Mr Farouk',
          _key: 'mrfarouk'
        }
      ],
      brief: 'The last listening, and the gaps below are the grammar of this unit. Play it once for the sense, then again for the form you are filling in.',
      scene: 'u1-listening-3-c1',
      passage: {
        paras: [
          {
            h: '<b>Context.</b> The Group Finance Manager (Mr Farouk) asks his team for updates on a video call.',
            speak: false
          },
          {
            h: 'Mr Farouk: Good morning everyone. Quick updates, please. Priya, what are you working on?',
            say: 'Good morning everyone. Quick updates, please. Priya, what are you working on?',
            role: 'spk:Mr Farouk',
            who: 'Mr Farouk'
          },
          {
            h: 'Priya: I am finishing the monthly GST return for Singapore. I usually submit it on the 20th, but I am trying to finish it today.',
            say: 'I am finishing the monthly GST return for Singapore. I usually submit it on the 20th, but I am trying to finish it today.',
            role: 'spk:Priya',
            who: 'Priya'
          },
          {
            h: 'Mr Farouk: Good. And Ryan?',
            say: 'Good. And Ryan?',
            role: 'spk:Mr Farouk',
            who: 'Mr Farouk'
          },
          {
            h: 'Ryan: I am dealing with the petty cash in Toronto. There is a CAD 20 discrepancy. I am recounting the money now.',
            say: 'I am dealing with the petty cash in Toronto. There is a CAD 20 discrepancy. I am recounting the money now.',
            role: 'spk:Ryan',
            who: 'Ryan'
          },
          {
            h: 'Mr Farouk: Okay. Remember, we always investigate errors over ten, in any currency. Keep me updated.',
            say: 'Okay. Remember, we always investigate errors over ten, in any currency. Keep me updated.',
            role: 'spk:Mr Farouk',
            who: 'Mr Farouk'
          }
        ],
        style: 'script',
        say: { scene: 'u1-listening-3-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: { spot: 'discrepancy', caption: 'Listening · Passage 3: The Morning Meeting (Team Update)' }
    },
    {
      id: 'c2',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 1 · 3C',
      type: 'cloze',
      title: 'Passage 3: The Morning Meeting (Team Update)',
      instruction: 'Fill in the Meeting Notes:',
      text: '<div style="font-size:16px;line-height:2.4">1. Priya: Working on the [[1a]] for [[1b]]. Usually submits on the [[1c]].<br>2. Ryan: Dealing with [[2a]] in [[2b]]. There is a discrepancy of [[2c]].<br>3. Current Action: Ryan is [[3]] the money now.<br>4. Rule: Always investigate errors over [[4]].</div>',
      answers: {
        '1a': ['monthly GST return'],
        '1b': ['Singapore'],
        '1c': ['20th'],
        '2a': ['the petty cash'],
        '2b': ['Toronto'],
        '2c': ['CAD 20'],
        '3': ['recounting'],
        '4': ['ten, in any currency']
      },
      bank: [
        '20th',
        'CAD 20',
        'Singapore',
        'Toronto',
        'monthly GST return',
        'recounting',
        'ten, in any currency',
        'the petty cash'
      ],
      whyTitle: 'What decided each one',
      why: {
        '1a': '<b>monthly GST return</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '1b': '<b>Singapore</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '1c': '<b>20th</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2a': '<b>the petty cash</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2b': '<b>Toronto</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2c': '<b>CAD 20</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>recounting</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>ten, in any currency</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> Priya: Working on the <u>monthly GST return</u> for __________. Usually submits on the __________.',
      visual: {
        spot: 'reporting',
        caption: 'Listening · Passage 3: The Morning Meeting (Team Update)',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's10-listening-2',
  prevLabel: 'Listening 2',
  next: 's12-speaking-phrases',
  nextLabel: 'Speaking · phrases'
});
