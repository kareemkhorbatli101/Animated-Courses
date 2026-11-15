/* ============================================================
   Unit 1 — voice casting. The single source of truth.

   The audio build tool reads this to decide what to synthesise and the browser reads the
   same file to find the finished recording, so the two cannot disagree.

   NO RECORDINGS EXIST FOR THIS COURSE YET. The acted videos have their own soundtracks and
   whether those lines can serve the web screens is open — RESIDUALS EAM-E6. Until they are
   built, every `say` falls back to the device's own voice and the page says so where it
   matters. That is a labelled fallback, which the pronunciation criteria allow, and not a
   silent failure: a card never depends on a recording existing.

   The cast is the one the videos already act, so a learner meets the same five people on the
   page and on the screen.
   ============================================================ */
EAM.voices({

  /* everything that is not a character speaking: the glossary, the phrase bank, the
     pronunciation drill, the figure captions. One teacher voice. */
  course: 'en-US-JennyNeural',

  /* Cham Motors, Damascus */
  maher: 'en-US-GuyNeural',        /* the manager — older, steady */
  nabil: 'en-US-DavisNeural',      /* the mechanic — the voice of most of the unit */
  rana: 'en-US-AriaNeural',        /* reception — clear and quick */
  lina: 'en-US-JaneNeural',        /* the diagnostic technician */
  tarek: 'en-US-TonyNeural',       /* the apprentice — younger */

  /* the customer in the Part 3 dialogue, who is not one of the five */
  customer: 'en-US-ChristopherNeural'
});
