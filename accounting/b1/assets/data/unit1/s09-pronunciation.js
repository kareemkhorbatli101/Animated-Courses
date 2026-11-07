/* Unit 1 §9 — Audio 1.1, pronunciation.

   The book gives two drills in one line: the three sounds of the -s ending
   (/z/, /s/, /ɪz/) and the stress of five finance words. They are separate
   skills, so they are separate cards.

   The sort pool is NOT in column order: written in the book's order the
   three columns would fill straight down and the card could be finished
   without hearing anything. tools/check-order-spread.cjs measures that. */
EAFM.page('u1-s09', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Audio 1.1', page: 1, section: '9',
          lesson: 'Part 3 · Listening', title: 'Pronunciation — the -s ending and word stress' },
  objective: 'Hear and say the three sounds of the -s ending, and stress five finance words',
  prev: 's08-grammar-freer', prevLabel: 'Freer practice',
  next: 's10-dialogue-1', nextLabel: 'Audio 1.2',
  cards: [
    {
      id: 'c1', covers: ['Audio 1.1', 'Part 3'], ref: '1.1a', bookRef: 'Unit 1 · Audio 1.1', type: 'chipcols',
      title: 'The -s ending has three sounds',
      instruction: 'Listen and repeat. Notice the -s ending: <b>records</b> /z/, <b>checks</b> /s/, <b>manages</b> /ɪz/. Then sort the eight verbs below into the sound their -s makes. Play each one before you decide.',
      poolLabel: 'Click a verb to hear it, then click the column its -s belongs to — or drag it there. Double-click a verb in a column to take it out again.',
      cols: [
        { label: '/z/ — after a voiced sound', seed: ['records'] },
        { label: '/s/ — after a voiceless sound', seed: ['checks'] },
        { label: '/ɪz/ — an extra syllable', seed: ['manages'] }
      ],
      pool: ['prepares', 'reports', 'reconciles', 'watches', 'helps', 'learns', 'advises', 'works'],
      answers: {
        'prepares': 0, 'reports': 1, 'reconciles': 0, 'watches': 2,
        'helps': 1, 'learns': 0, 'advises': 2, 'works': 1
      },
      whyTitle: 'Why each -s sounds the way it does',
      why: {
        'prepares': '/z/. The sound before the -s is a vowel, and vowels are voiced — your throat is already buzzing, so the s carries on buzzing.',
        'reports': '/s/. <i>t</i> is voiceless, so the -s stays voiceless too. Say "reportss", not "reportzz".',
        'reconciles': '/z/. <i>l</i> is voiced. Fadi says this one in Audio 1.2.',
        'watches': '/ɪz/. After ch you cannot add an s without a vowel in between — try it and you will hear why. The word gains a whole syllable: WATCH-iz.',
        'helps': '/s/. <i>p</i> is voiceless. Put a hand on your throat: no buzz on the p, no buzz on the s.',
        'learns': '/z/. <i>n</i> is voiced. Samah says "I am learning" in the dialogue; the third-person form would be "she learns", with a /z/.',
        'advises': '/ɪz/. The word already ends in a /z/ sound, so another one needs a vowel between them: ad-VY-ziz. This is stage 5 of Fadi’s cycle.',
        'works': '/s/. <i>k</i> is voiceless, exactly like the <i>ck</i> in the book’s own example, <i>checks</i>.'
      },
      notes: [{ title: 'The rule under the three columns',
        body: 'Put a hand on your throat and say <i>s</i> and then <i>z</i>. The buzz is the whole rule: if the sound just before the ending buzzes, the ending buzzes too. The third column is different — after s, z, sh, ch, ge the ending cannot be heard at all without an extra vowel, so the word gains a syllable.' }]
    },
    {
      id: 'c2', covers: ['Audio 1.1'], ref: '1.1b', bookRef: 'Unit 1 · Audio 1.1', type: 'choiceinline',
      title: 'Where is the stress?',
      instruction: 'The book marks the stress on five finance words: FI-nance, LED-ger, trans-AC-tion, book-KEEP-ing, re-CON-cile. Choose the stressed syllable, then say each word aloud twice.',
      visual: [
        { spot: 'ledger', caption: 'LED-ger — first syllable' },
        { spot: 'transaction', caption: 'trans-AC-tion — second syllable' }
      ],
      whyTitle: 'Where the stress falls, and why it matters',
      items: [
        { text: 'finance — {{FI-nance|fi-NANCE}}', answer: 0,
          why: 'FI-nance, with the stress at the front. The adjective <i>financial</i> moves it: fi-NAN-cial. Same family, different stress — which is why the book drills them separately.' },
        { text: 'ledger — {{LED-ger|led-GER}}', answer: 0,
          why: 'LED-ger. Nearly all two-syllable English nouns are stressed on the first syllable, and this one is no exception.' },
        { text: 'transaction — {{TRANS-ac-tion|trans-AC-tion|trans-ac-TION}}', answer: 1,
          why: 'trans-AC-tion. The syllable before <i>-tion</i> is stressed, every time: in-FOR-ma-tion, or-gan-i-SA-tion, trans-AC-tion. Learn the pattern and you never have to learn the word.' },
        { text: 'bookkeeping — {{book-KEEP-ing|BOOK-keep-ing}}', answer: 1,
          why: 'BOOK-keep-ing. The book prints it as book-KEEP-ing, but English compound nouns put the stress on the FIRST part — like BLACK-board or FOOT-ball. Say BOOK-keeping and you will be understood; this is the one place in Audio 1.1 worth saying twice.' },
        { text: 'reconcile — {{re-CON-cile|RE-con-cile|re-con-CILE}}', answer: 0,
          why: 're-CON-cile, on the middle syllable — the book’s own marking. Note that the noun keeps it in the same place: re-con-cil-i-A-tion moves it, but <i>reconcile</i> does not.' }
      ]
    }
  ]
});
