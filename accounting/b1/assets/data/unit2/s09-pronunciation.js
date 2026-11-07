/* Unit 2 §9 — Audio 2.1, pronunciation.

   The -ed ending has three sounds and the book gives one example of each:
   recorded /ɪd/, checked /t/, closed /d/. Then five words to stress.

   The sort pool is NOT in column order: written in the book's order the
   three columns would fill straight down and the card could be finished
   without listening to anything. */
EAFM.page('u2-s09', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Audio 2.1', page: 2, section: '9',
          lesson: 'Part 3 · Listening', title: 'Pronunciation — the -ed ending and word stress' },
  objective: 'Hear and say the three sounds of the -ed ending',
  prev: 's08-grammar-freer', prevLabel: 'Freer practice',
  next: 's10-dialogue-1', nextLabel: 'Audio 2.2',
  cards: [
    {
      id: 'c1', covers: ['Audio 2.1', 'Part 3'], ref: '2.1a',
      bookRef: 'Unit 2 · Audio 2.1', type: 'chipcols',
      title: 'The -ed ending has three sounds',
      instruction: 'Listen and repeat the -ed endings: <b>recorded</b> /ɪd/, <b>checked</b> /t/, <b>closed</b> /d/. Then sort the eight verbs below into the sound their -ed makes. Play each one before you decide.',
      sayChips: 'course',
      poolLabel: 'Click a verb to hear it, then click the column its -ed belongs to — or drag it there. Double-click a verb in a column to take it out again.',
      cols: [
        { label: '/ɪd/ — an extra syllable', seed: ['recorded'] },
        { label: '/t/ — after a voiceless sound', seed: ['checked'] },
        { label: '/d/ — after a voiced sound', seed: ['closed'] }
      ],
      pool: ['corrected', 'posted', 'matched', 'reconciled', 'approved', 'finished',
             'added', 'prepared'],
      answers: {
        'corrected': 0, 'posted': 0, 'matched': 1, 'reconciled': 2,
        'approved': 2, 'finished': 1, 'added': 0, 'prepared': 2
      },
      whyTitle: 'Why each -ed sounds the way it does',
      why: {
        'corrected': '/ɪd/. The word already ends in a <i>t</i> sound, and you cannot say two t sounds together without a vowel between them. The word gains a syllable: cor-REC-tid.',
        'posted': '/ɪd/. Same reason — a <i>t</i> before the ending. Fadi uses this verb constantly: "I posted it."',
        'matched': '/t/. <i>ch</i> is voiceless, so the ending is voiceless too. Audio 2.2: "every debit matched a credit".',
        'reconciled': '/d/. <i>l</i> is voiced, so the ending buzzes. Carried over from Unit 1, where it was a present-tense word.',
        'approved': '/d/. <i>v</i> is voiced. Audio 2.3: "a manager approved the expense".',
        'finished': '/t/. <i>sh</i> is voiceless. "Yes, I finished it yesterday."',
        'added': '/ɪd/. A <i>d</i> before the ending this time — the same problem as a <i>t</i>, and the same solution: an extra syllable, AD-did.',
        'prepared': '/d/. The sound before the ending is a vowel, and vowels are voiced.'
      },
      notes: [{ title: 'The rule under the three columns',
        body: 'Put a hand on your throat and say <i>t</i> and then <i>d</i>. The buzz is most of the rule: a voiceless sound before the ending gives /t/, a voiced one gives /d/. The third column is different — after <b>t</b> or <b>d</b> the ending cannot be heard at all without a vowel, so the word gains a whole syllable. That is why <i>recorded</i> has three syllables and <i>checked</i> has one.' }]
    },
    {
      id: 'c2', covers: ['Audio 2.1'], ref: '2.1b',
      bookRef: 'Unit 2 · Audio 2.1', type: 'choiceinline',
      title: 'Where is the stress?',
      instruction: 'The book marks the stress on five words: JOUR-nal, DEB-it, CRED-it, RE-ceipt (say re-SEET), month-END. Choose the stressed syllable, then say each word aloud twice.',
      visual: [
        { spot: 'journal', caption: 'JOUR-nal — first syllable' },
        { spot: 'receipt', caption: 're-CEIPT — second, and the p is silent' }
      ],
      whyTitle: 'Where the stress falls, and why it matters',
      items: [
        { text: 'journal — {{JOUR-nal|jour-NAL}}', answer: 0,
          why: 'JOUR-nal. Like almost every two-syllable English noun, the stress is at the front.' },
        { text: 'debit — {{DEB-it|de-BIT}}', answer: 0,
          why: 'DEB-it. Say it with the stress at the back and it starts to sound like <i>debate</i>.' },
        { text: 'credit — {{CRED-it|cre-DIT}}', answer: 0,
          why: 'CRED-it. The pair <i>debit</i> and <i>credit</i> are stressed the same way, which makes them easy to drill together.' },
        { text: 'receipt — {{RE-ceipt|re-CEIPT}}', answer: 1,
          why: 're-CEIPT, and the book adds the real difficulty in brackets: <b>say re-SEET</b>. The <i>p</i> is silent, as it is in <i>receive</i>. This is the word in Audio 2.1 most worth saying twice.' },
        { text: 'month-end — {{MONTH-end|month-END}}', answer: 1,
          why: 'month-END, as the book marks it. Most English compound nouns stress the first part, but this one behaves like a phrase — the end OF the month — and keeps the stress on the second.' }
      ]
    }
  ]
});
