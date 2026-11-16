/* ============================================================
   Unit 1 — voice casting. The single source of truth.

   The audio build tool reads this to decide what to synthesise and the browser reads the
   same file to find the finished recording, so the two cannot disagree.

   RECORDED 2026-11-16: 846 lines, 59.3 minutes, one mp3 per line under
   assets/audio/<unit>/ with its measurements in assets/data/<unit>/audio.js. Built by
   tools/course_build_audio.py from the population tools/course_audio_lines.py takes off the
   RENDERED page, so a speaker button cannot exist without a recording behind it.

   Until that day every `say` fell back to the device's own voice — except that it did not:
   `voiceFor` threw on the first line of every scene, so all 59 scene screens were silent
   rather than robot-voiced. RESIDUALS FM-13. Whether the acted videos' own soundtracks can
   serve these screens instead is still open, EAM-E6; the fallback remains in place for any
   line that has no recording.

   The cast is the one the videos already act, so a learner meets the same five people on the
   page and on the screen.
   ============================================================ */
EAM.voices({

  /* everything that is not a character speaking: the glossary, the phrase bank, the
     pronunciation drill, the figure captions. One teacher voice. */
  course: 'en-US-JennyNeural',

  /* Cham Motors, Damascus */
  maher: 'en-US-GuyNeural',        /* the manager — older, steady */
  nabil: 'en-US-AndrewNeural',      /* the mechanic — the voice of most of the unit */
  rana: 'en-US-AriaNeural',        /* reception — clear and quick */
  lina: 'en-US-AvaNeural',        /* the diagnostic technician */
  tarek: 'en-US-BrianNeural',       /* the apprentice — younger */

  /* the customer in the Part 3 dialogue, who is not one of the five */
  aboud: 'en-US-ChristopherNeural',       /* the customer, by name: every scene
                                             says `aboud`, and before this he had
                                             no voice at all */
  customer: 'en-US-ChristopherNeural'
});
