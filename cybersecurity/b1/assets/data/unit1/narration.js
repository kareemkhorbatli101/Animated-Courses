/* ============================================================
   Narration for the two live grammar animations on Lesson 3 §1.

   WHY THIS FILE EXISTS
   The live animations draw themselves in art.js, so they carry no
   card data — and tools/export-lines.cjs reads card data to decide
   what to synthesise. Without a declaration of their own, an
   animation could only ever fall back to the browser's robot voice.
   This file is that declaration: build-audio.py synthesises every
   string here, and art.js plays the same strings back. One string,
   one recording, no second copy to drift.

   WRITTEN FOR THE EAR, NOT THE EYE
   The on-screen wording stays in art.js, where it belongs. These
   lines are its spoken twin, and two things change in the move:
     * no markup — "<b>am / is / are</b>" is read as text
     * NO SLASHES. edge-TTS reads " / " aloud as the word "slash",
       which is a real defect already found in delivered videos, so
       the spoken form is "am, is or are".
   `eg` is the exception: it must match art.js's TENSE[k].eg exactly,
   because it is the example sentence the learner sees on the card
   while hearing it. tools/check-narration.cjs asserts that.
   ============================================================ */
CSB1.narration({

  /* Press a tense: the animation shows WHEN it sits, and the voice
     reads the example, then says why that tense is the right one. */
  'tense-timeline': {
    sp: {
      eg: 'I write my tasks in a notebook.',
      note: 'Every day, again and again. The simple present is not one of these days; it is all of them.'
    },
    prc: {
      eg: 'I am memorizing new terms.',
      note: 'Happening right now, and not finished. That unfinished part is why it needs am, is or are.'
    },
    spa: {
      eg: 'I wrote the report on Monday.',
      note: 'One finished point behind you. It started and it ended, so the time is closed.'
    },
    pac: {
      eg: 'I was eating dinner at eight.',
      note: 'A stretch of time that was already running. Not one point, but a length of the past.'
    }
  },

  /* Danny's Tuesday, walked through from eight o'clock to two and
     stopped there. One line per block, in time order, and between
     them they use all four tenses of the lesson — the last line is
     the habit, which is the one thing a single day cannot show.
     Each line names the block the figure labels; check-narration.cjs
     holds the two together, and also holds this clock against the
     card's own `now`. */
  'shift-day': {
    steps: [
      'At eight he attended the briefing. Finished, so it closes, and it takes a simple past.',
      'At half past ten he was studying at home. Still going on at that moment. Past continuous.',
      'He ate lunch at half past twelve and reviewed his notes. Finished again.',
      'And now it is two o\'clock. He is sitting at the SOC desk, an hour into his shift, and he has not finished, so this block has no end to draw. The day stops here, because this is as far as it has gone.',
      'Every Tuesday it is the same: briefing, then study at home, then the shift. A pattern, not one day. That is the simple present.'
    ]
  },

  /* The while rule, spoken as it is drawn: one line per stage, so the
     voice arrives with the shape rather than after it. The third line
     carries the example, and it must name the same short action the
     figure labels — check-narration.cjs holds the three together. */
  'two-actions': {
    steps: [
      'The long action starts, and keeps running.',
      'Then, at one point inside it, the short action happens.',
      'The long one did not stop. While joins them: While I was eating dinner, I answered some SMS messages.'
    ]
  }

});
