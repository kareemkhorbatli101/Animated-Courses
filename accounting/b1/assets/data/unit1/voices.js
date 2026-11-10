/* ============================================================
   Unit 1 — voice casting. The single source of truth.

   The audio build tool reads this to decide what to synthesise and the
   browser reads the same file to find the finished recording, so the two
   cannot disagree. Edge neural voices, all en-US.

   No prosody is ever requested: slow playback uses the browser's
   playbackRate, so one line of text has exactly one recording per
   character, and the warming call and the using call are identical by
   construction.

   The cast recurs across all ten units of the book, so these pairings are
   decided once here and inherited by every later unit.
   ============================================================ */
EAFM.voices({

  /* everything that is not a character speaking: the glossary, the phrase
     banks, the pronunciation drill, the figure narration. One teacher voice. */
  course: 'en-US-JennyNeural',

  /* the model exchange in Part 4 is two learners, not the cast */
  'pt:A': 'en-US-AriaNeural',
  'pt:B': 'en-US-ChristopherNeural',

  scene: {
    'u1-read-office':   { narr: 'en-US-JennyNeural' },
    'u1-samah':         { fadi: 'en-US-AndrewNeural', samah: 'en-US-AvaNeural' },
    'u1-layth':         { fadi: 'en-US-AndrewNeural', layth: 'en-US-GuyNeural' },
    'u1-reading-a':     { narr: 'en-US-RogerNeural' },
    'u1-reading-b':     { narr: 'en-US-RogerNeural' },
    /* Audio 1.5 is Fadi and MR HAYTHAM, not Layth. This cast said layth
       until the casting gate refused the export: the scene had been
       rewritten to the book's actual recording and the voices had not
       followed, so Mr Haytham would have spoken in the browser's robot
       voice on a page where everyone else was recorded. He keeps the same
       voice here as in Unit 2. */
    'u1-track':         { fadi: 'en-US-AndrewNeural', haytham: 'en-US-EricNeural' },
    'u1-consolidation': { narr: 'en-US-JennyNeural' }
  }
});
