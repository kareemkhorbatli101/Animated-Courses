/* ============================================================
   Unit 1 §21 — Part 10, Can-Do and the glossary.

   THE CAN-DO LIST CHECKS ITSELF. The book prints five "I can…" statements with empty boxes,
   and a learner ticking them is giving an opinion about their own work. Each row here is
   verified against what they actually did: the screens they finished, the marks they scored,
   the words they used in their own writing. A row that cannot be verified says so instead of
   ticking itself, because a checklist that always agrees with you is decoration.

   The glossary deck is the unit's ten words, drawn, and it is where spaced repetition starts:
   a pass updates each word's strength, and unit 2's deck will deal the ones that are due.
   ============================================================ */
EAM.page('u1-s21', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 10 · Can-Do', part: '10', section: '21',
          lesson: 'Part 10 · Review', title: 'Can-Do, and the ten words' },
  objective: 'Check honestly what you can now do, and drill the ten words of the unit',
  video: 'u01v21',
  prev: 's20-spiral-review', prevLabel: 'Spiral review',
  cards: [

    /* ------------------------------------------------------------------- 1. the Can-Do list */
    {
      id: 'c1', covers: ['Part 10'], ref: '10B', bookRef: 'Unit 1 · Part 10 · Can-Do',
      type: 'checklistlive',
      title: 'Can-Do checklist',
      instruction: 'Tick a line only if you believe it. Each tick is then checked against the '
        + 'work you actually did in this unit — the screens you finished, the marks you '
        + 'scored, and the words in your own writing. A tick you have not earned will say so.',
      fromPage: 'u1-s15', fromCard: 'c1',
      items: [
        {
          t: 'I can name the main parts of a car and the people in a service department.',
          verify: function (draft, U) {
            var P = EAM.progress;
            var s = ['u1-s01', 'u1-s02', 'u1-s04'].map(function (id) {
              var x = P.pageScore ? P.pageScore(id) : null;
              return x ? x.done : 0;
            });
            var done = s.reduce(function (a, b) { return a + b; }, 0);
            return done >= 6
              ? { ok: true, msg: 'Earned: you finished the vocabulary cards in §1, §2 and §4.' }
              : { ok: false, msg: 'Not yet — go back to §2 and finish the matching cards. '
                  + 'You have ' + done + ' of those cards done.' };
          }
        },
        {
          t: 'I can use the present simple for routines and the present continuous for now.',
          verify: function (draft, U) {
            var P = EAM.progress;
            var g = ['u1-s05', 'u1-s06', 'u1-s07'].map(function (id) {
              var x = P.pageScore ? P.pageScore(id) : null;
              return x ? x.done : 0;
            }).reduce(function (a, b) { return a + b; }, 0);
            var both = U.mentions(draft, ['am ', 'is ', 'are '], 1)
              && U.mentions(draft, ['every', 'usually', 'always', 'often'], 1);
            if (g >= 5 && both) {
              return { ok: true, msg: 'Earned: the Part 2 cards are done AND your own writing '
                + 'uses both tenses.' };
            }
            if (g >= 5) {
              return { ok: false, msg: 'The exercises are done, but your writing in §15 does '
                + 'not yet show both tenses. That is the harder half — go and add a '
                + '"Right now, I am…" sentence.' };
            }
            return { ok: false, msg: 'Finish §5 to §7 first. You have ' + g
              + ' of those cards done.' };
          }
        },
        {
          t: 'I can understand a short talk between a mechanic, an advisor, and a customer.',
          verify: function (draft, U) {
            var P = EAM.progress;
            var L = ['u1-s08', 'u1-s09', 'u1-s10'].map(function (id) {
              var x = P.pageScore ? P.pageScore(id) : null;
              return x && x.total > 0 && x.done === x.total ? 1 : 0;
            }).reduce(function (a, b) { return a + b; }, 0);
            return L === 3
              ? { ok: true, msg: 'Earned: all three listening screens are finished.' }
              : { ok: false, msg: 'You have finished ' + L + ' of the three listening screens '
                  + '(§8, §9, §10). Finish them before you tick this.' };
          }
        },
        {
          t: 'I can describe a car or a job in 50–70 words.',
          verify: function (draft, U) {
            var w = U.words(draft);
            if (w >= 50) {
              return { ok: true, msg: 'Earned: your §15 piece is ' + w + ' words.',
                       highlight: U.mentions ? [] : [] };
            }
            return { ok: false, msg: w
              ? 'Your §15 piece is only ' + w + ' words. The task asks for 50 to 70.'
              : 'No writing found in §15. Write the first piece, then come back.' };
          }
        },
        {
          t: 'I can welcome and brief a new worker.',
          verify: function (draft, U) {
            var P = EAM.progress;
            var rec = P.card ? P.card('u1-s17', 'c3') : null;
            var note = (rec && Array.isArray(rec.state)) ? rec.state.join(' ') : '';
            var ok = U.words(note) >= 50
              && U.mentions(note, ['welcome', 'glad', 'pleased'], 1)
              && U.mentions(note, ['always', 'never', 'wear', 'safety'], 1);
            return ok
              ? { ok: true, msg: 'Earned: your welcome note in §17 greets him AND gives a '
                  + 'safety rule.' }
              : { ok: false, msg: 'Write the welcome note in §17 first. It needs a welcome and '
                  + 'at least one safety rule — the two together are what this line claims.' };
          }
        }
      ],
      after: 'Anything still unticked is a map of what to go back to, not a failure. The lines '
        + 'are the book’s own, word for word, and unit 2 assumes all five.'
    },

    /* ------------------------------------------------------------------ 2. the glossary deck */
    {
      id: 'c2', covers: ['Part 10'], ref: '10C', bookRef: 'Unit 1 · Part 10 · Glossary',
      type: 'flashcards',
      title: 'The ten words of Unit 1',
      instruction: 'A word is spoken. Point at it. Ten words, three rounds, scored. Everything '
        + 'here you have already met — this deck is not where any of them is introduced.',
      scene: 'glossary-ten',
      sub: 'The book prints these ten as a list to read. Pointing at them from the spoken word '
        + 'is the same list, used the way a word is actually used.',
      items: [
        { id: 'g1', num: 1, label: 'engine', at: [10, 27] },
        { id: 'g2', num: 2, label: 'battery', at: [30, 27] },
        { id: 'g3', num: 3, label: 'radiator', at: [50, 27] },
        { id: 'g4', num: 4, label: 'bonnet', at: [70, 27] },
        { id: 'g5', num: 5, label: 'boot', at: [90, 27] },
        { id: 'g6', num: 6, label: 'service bay', at: [10, 77] },
        { id: 'g7', num: 7, label: 'job card', at: [30, 77] },
        { id: 'g8', num: 8, label: 'mechanic', at: [50, 77] },
        { id: 'g9', num: 9, label: 'service', at: [70, 77] },
        { id: 'g10', num: 10, label: 'workshop', at: [90, 77] }
      ]
    }
  ]
});
