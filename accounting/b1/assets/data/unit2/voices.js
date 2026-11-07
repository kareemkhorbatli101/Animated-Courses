/* ============================================================
   Unit 2 — voice casting.

   The same people as Unit 1 keep the same voices: a learner who met Fadi
   in Unit 1 must hear the same Fadi in Unit 2, and the pairings were
   decided once in unit1/voices.js. Mr Haytham and Karim are new here and
   are cast to match their roles in the book.
   ============================================================ */
EAFM.voices({
  course: 'en-US-JennyNeural',
  'pt:A': 'en-US-AriaNeural',
  'pt:B': 'en-US-ChristopherNeural',

  scene: {
    'u2-read-past':      { narr: 'en-US-JennyNeural' },
    'u2-haytham':        { fadi: 'en-US-AndrewNeural', haytham: 'en-US-EricNeural' },
    'u2-samah':          { fadi: 'en-US-AndrewNeural', samah: 'en-US-AvaNeural' },
    'u2-reading-a':      { narr: 'en-US-RogerNeural' },
    'u2-reading-b':      { narr: 'en-US-RogerNeural' },
    'u2-track':          { fadi: 'en-US-AndrewNeural', layth: 'en-US-GuyNeural' },
    'u2-consolidation':  { narr: 'en-US-JennyNeural' }
  }
});
