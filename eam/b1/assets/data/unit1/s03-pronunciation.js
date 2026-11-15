/* ============================================================
   Unit 1 §3 — Part 1, Pronunciation.

   The book prints six words divided into syllables with the loud one in capitals —
   VE-hi-cle, me-CHAN-ic — and says "say each word aloud and stress the loud syllable". That
   is WORD STRESS: where the beat falls. It is not a sound contrast, so it is not a mouth-cam
   exercise; the mouth shape for /v/ is the same wherever the stress lands.

   Hearing it and then sorting by it is the same task the book sets, and unlike "listen and
   repeat" it can be marked — a learner who puts `mechanic` in the first column has made a
   mistake worth telling them about.
   ============================================================ */
EAM.page('u1-s03', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 1 · Audio 1.1', part: '1', section: '3',
          lesson: 'Part 1 · Vocabulary', title: 'Pronunciation — where the stress falls' },
  objective: 'Hear and place the stressed syllable in six words of the workshop',
  video: 'u01v03',
  prev: 's02-vocabulary', prevLabel: 'The words of the workshop',
  next: 's04-check', nextLabel: 'Check what you know',
  cards: [

    /* ------------------------------------------------------------ 1. hear the six words */
    {
      id: 'c1', covers: ['Audio 1.1', 'Part 1'], ref: '1D', bookRef: 'Unit 1 · Audio 1.1',
      type: 'study',
      title: 'Listen and say the six words',
      instruction: 'Press a word to hear it. The <b>CAPITALS</b> show the loud syllable — say '
        + 'it a little longer and a little higher, not just louder. Say each one aloud twice '
        + 'before you go on.',
      html: '<div style="font-size:17px;line-height:2.4">'
        + '<b>vehicle</b> — VE-hi-cle &nbsp;·&nbsp; <b>engine</b> — EN-gine &nbsp;·&nbsp; '
        + '<b>mechanic</b> — me-CHAN-ic<br>'
        + '<b>battery</b> — BAT-ter-y &nbsp;·&nbsp; <b>service</b> — SER-vice &nbsp;·&nbsp; '
        + '<b>customer</b> — CUS-to-mer</div>'
        + '<p class="wc" style="margin-top:12px">Five of the six are stressed on the FIRST '
        + 'syllable. English does that a lot with nouns — which is exactly why '
        + '<i>mechanic</i> catches people out.</p>',
      doneLabel: 'I have said all six aloud',
      playable: ['vehicle', 'engine', 'mechanic', 'battery', 'service', 'customer']
    },

    /* --------------------------------------------- 2. sort them by where the stress falls */
    {
      id: 'c2', covers: ['Audio 1.1', 'Part 1'], ref: '1D·b',
      bookRef: 'Unit 1 · Audio 1.1 · practice', type: 'chipcols',
      title: 'Which syllable is loud?',
      instruction: 'Play each word, then put it in the column that matches where you hear the '
        + 'beat. Two are done for you.',
      sayChips: 'course',
      poolLabel: 'Click a word to hear it, then click the column it belongs to — or drag it '
        + 'there. Double-click a word in a column to take it out again.',
      cols: [
        { label: 'first syllable — DA-da', seed: ['engine'] },
        { label: 'second syllable — da-DA-da', seed: ['mechanic'] }
      ],
      pool: ['vehicle', 'battery', 'service', 'customer', 'workshop', 'advisor'],
      answers: {
        'vehicle': 0, 'battery': 0, 'service': 0, 'customer': 0,
        'workshop': 0, 'advisor': 1
      },
      whyTitle: 'Where the beat falls, and why it matters',
      why: {
        'vehicle': 'VE-hi-cle — first. Three syllables, and the first carries it. The middle '
          + '"hi" almost disappears when a native speaker says it quickly.',
        'battery': 'BAT-ter-y — first. Another three-syllable word with the beat at the front. '
          + 'Said fast it can sound like two syllables, BAT-try, and that is normal.',
        'service': 'SER-vice — first. Compare the verb: <i>we SER-vice the car</i> has the '
          + 'stress in the same place, which is not always true in English.',
        'customer': 'CUS-to-mer — first. Three syllables again, beat at the front.',
        'workshop': 'WORK-shop — first. A compound of two nouns, and English puts the stress on '
          + 'the first part of a compound almost every time: JOB card, SER-vice bay.',
        'advisor': 'ad-VI-sor — second. This one and <i>mechanic</i> are the pair to remember. '
          + 'Both end in a syllable that sounds weak, and in both the beat is in the MIDDLE. '
          + 'Put the stress on the first syllable and an English listener will hesitate.'
      },
      notes: [{
        title: 'The pattern under the two columns',
        body: 'Five of these six are stressed on the first syllable, and so are most two- and '
          + 'three-syllable nouns in English. The exceptions are worth learning one at a time: '
          + '<i>me-CHAN-ic</i> and <i>ad-VI-sor</i> are the two in this unit. If you are not '
          + 'sure, first syllable is the better guess.'
      }]
    }
  ]
});
