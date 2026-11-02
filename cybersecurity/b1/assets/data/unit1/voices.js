/* ============================================================
   Voice casting — the single source of truth.
   The build tool reads this to decide what to synthesise; the
   browser reads the same file to find the finished recording.
   Edge neural voices, all en-US. No prosody is ever requested:
   slow playback uses the browser's playbackRate instead, so one
   line of text has exactly one recording per character.
   ============================================================ */
CSB1.voices({

  /* every piece of course audio that is not a character speaking:
     glossary, phrase banks, pronunciation words, flashcards,
     chart read-alouds, adjective/adverb models. One teacher voice. */
  course: 'en-US-JennyNeural',

  /* the active-listening phrases in At Work §C are the shift lead's */
  lead: 'en-US-MichelleNeural',

  /* the two extra journal writers in Lesson 2 §1. One voice each so
     three entries on one page do not blur into one another, and both
     are voices the pipeline has already synthesised successfully. */
  'jr:Yusuf': 'en-US-ChristopherNeural',
  'jr:Lina': 'en-US-MichelleNeural',

  /* the three scripted classmates in the Review interview */
  'cm:Olga': 'en-US-AriaNeural',
  'cm:Pedro': 'en-US-BrianNeural',
  'cm:Myra': 'en-US-EmmaMultilingualNeural',

  /* Lesson 3 §3 listening grid reuses the Ten Voices scene lines
     verbatim, so it reuses their recordings too — speaker n maps
     to that scene's cast slot. */
  gridScene: 'u1-ten-voices',
  gridCast: ['a', 'b', 'c', 'e', 'a', 'b', 'c', 'e', 'a', 'b'],

  /* every scene cast slot */
  scene: {
    'u1-vocab-lab': { narr: 'en-US-JennyNeural' },
    'u1-pathways': { joseph: 'en-US-AndrewNeural', tara: 'en-US-AvaNeural' },
    'u1-journal': { writer: 'en-US-AriaNeural' },
    'u1-notebook': { student: 'en-US-SteffanNeural' },
    'u1-ten-voices': {
      a: 'en-US-AriaNeural',
      b: 'en-US-GuyNeural',
      c: 'en-US-EmmaMultilingualNeural',
      e: 'en-US-ChristopherNeural'
    },
    'u1-career-chat': { joseph: 'en-US-AndrewNeural', tara: 'en-US-AvaNeural' },
    'u1-mouthcam': { tara: 'en-US-AvaNeural' },
    'u1-carlos': { joseph: 'en-US-AndrewNeural', carlos: 'en-US-BrianNeural' },
    'u1-apprentice': { ray: 'en-US-EricNeural' },
    'u1-ask-allison': { allison: 'en-US-EmmaNeural', reader: 'en-US-RogerNeural' },
    'u1-handover': {
      lead: 'en-US-MichelleNeural',
      omar: 'en-US-GuyNeural',
      priya: 'en-US-EmmaMultilingualNeural'
    },
    'u1-teresa': { narr: 'en-US-JennyNeural' }
  }
});
