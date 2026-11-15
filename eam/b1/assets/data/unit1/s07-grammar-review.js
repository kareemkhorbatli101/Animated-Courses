/* ============================================================
   Unit 1 §7 — Part 2, Review.

   Three exercises: repair four faulty sentences, write two of your own, then choose the
   correct sentence twice. Every fault in the first card is one of the two the focus box
   named, so nothing here is a surprise — the card is the focus box made to bite.

   The book's own forward reference is kept: "you will see the present simple and present
   continuous again in the Part 5 reading."
   ============================================================ */
EAM.page('u1-s07', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 2 · Review', part: '2', section: '7',
          lesson: 'Part 2 · Grammar', title: 'Review — find and fix' },
  objective: 'Find the one grammar fault in a sentence, and write the sentence correctly',
  video: 'u01v07',
  prev: 's06-grammar-practice', prevLabel: 'Simple or continuous',
  next: 's08-listening-1', nextLabel: 'Nabil talks about his work',
  cards: [

    /* ----------------------------------------------------------- 1. one fault per sentence */
    {
      id: 'c1', covers: ['Part 2'], ref: '2E', bookRef: 'Unit 1 · Part 2 · Correct the sentence',
      type: 'editor',
      title: 'Find the one mistake, then write the sentence',
      instruction: 'Each sentence has <b>one</b> grammar mistake. Choose the repair, then '
        + 'write the whole sentence out — writing it is what makes it stick.',
      brief: 'All four faults are the two the focus box warned about: a missing <b>-s</b> on '
        + 'he/she/it, and a continuous with the wrong form of <b>be</b> or none at all.',
      visual: { art: 'verb-s-rule',
        caption: 'The two faults, and their repairs. Every sentence below is one of them.' },
      write: true,
      items: [
        {
          wrong: 'The garage *service* many cars every day.',
          fix: [
            { t: 'service', ok: false,
              why: 'This is the fault, not the repair. <i>The garage</i> is one thing — it — '
                + 'so the verb needs the ending.' },
            { t: 'services', ok: true,
              why: 'Right. "Every day" makes it a routine, so the present simple, and <i>the '
                + 'garage</i> is <i>it</i>, so <b>services</b>. The plural "many cars" does not '
                + 'change the verb: the ending follows the subject, not the object.' },
            { t: 'is servicing', ok: false,
              why: 'The continuous would need a <i>now</i>, and this sentence says "every day". '
                + 'A correct form of the wrong tense is still wrong.' }
          ],
          accept: ['The garage services many cars every day.',
                   'The garage services many cars every day'],
          why: 'The missing <b>-s</b>, the commonest single error in this unit.'
        },
        {
          wrong: 'Look! Nabil *change* the oil now.',
          fix: [
            { t: 'change', ok: false,
              why: 'Neither the tense nor the ending. "Look!" and "now" both say this moment.' },
            { t: 'changes', ok: false,
              why: 'This fixes the ending but keeps the wrong tense. <i>Nabil changes the '
                + 'oil</i> is what he does as a rule — but the sentence says it is happening '
                + 'as you watch.' },
            { t: 'is changing', ok: true,
              why: 'Right. Two signals — <i>Look!</i> and <i>now</i> — so the continuous, and '
                + '<i>Nabil</i> is he, so <b>is</b>.' }
          ],
          accept: ['Look! Nabil is changing the oil now.',
                   'Look! Nabil is changing the oil now',
                   'Look Nabil is changing the oil now.'],
          why: 'Choosing the tense comes first; the ending comes second.'
        },
        {
          wrong: 'She *check* the brakes every service.',
          fix: [
            { t: 'check', ok: false,
              why: 'This is the fault itself. The bare verb never follows <i>she</i> in the '
                + 'present simple — <i>she check</i> is not a form of English, in any tense.' },
            { t: 'checks', ok: true,
              why: 'Right — <b>she checks</b>. "Every service" is a routine, so the simple, and '
                + '<i>she</i> takes the -s. The same shape as sentence 1, with a person instead '
                + 'of a place.' },
            { t: 'is checking', ok: false,
              why: '"Every service" is a habit, not this moment. Read the time words before '
                + 'the verb.' }
          ],
          accept: ['She checks the brakes every service.', 'She checks the brakes every service'],
          why: 'The same -s rule as the first sentence. Meeting it twice is the point.'
        },
        {
          wrong: 'We are *repair* the engine now.',
          fix: [
            { t: 'repair', ok: false,
              why: 'This is the fault: <i>are</i> is already there, so the verb has to end in '
                + '<b>-ing</b>.' },
            { t: 'repairing', ok: true,
              why: 'Right — <b>we are repairing</b>. The continuous is two pieces: a form of '
                + '<i>be</i> and <i>verb-ing</i>. This sentence had the first and not the '
                + 'second; <i>I checking now</i> in the focus box had the second and not the '
                + 'first.' },
            { t: 'repairs', ok: false,
              why: '<i>We</i> never takes -s, and "now" wants the continuous anyway.' }
          ],
          accept: ['We are repairing the engine now.', 'We are repairing the engine now'],
          why: 'Half a continuous is the other fault the focus box names.'
        }
      ],
      whyTitle: 'The two faults, four times'
    },

    /* --------------------------------------------------------- 2. two sentences of your own */
    {
      id: 'c2', covers: ['Part 2'], ref: '2F', bookRef: 'Unit 1 · Part 2 · Freer practice',
      type: 'writer',
      title: 'Write two sentences about your own work or study',
      instruction: 'One about a <b>routine</b> (present simple) and one about <b>now</b> '
        + '(present continuous). They can be about anything you do — the tenses are what is '
        + 'being practised, not cars.',
      visual: { art: 'tense-two-clocks',
        caption: 'One sentence for each clock.' },
      paras: [
        { label: 'A routine — present simple',
          purpose: 'Something you do every day, every week, or usually. Include the time word.' },
        { label: 'Right now — present continuous',
          purpose: 'Something happening as you write. Start with "Right now" or "At the moment".' }
      ],
      minWords: 12,
      stems: ['Every day I…', 'I usually…', 'Right now, I am…', 'At the moment, I am…',
              'This week, I am…'],
      model: 'Every day I study English for one hour after work. Right now, I am writing two '
        + 'sentences about the present tenses.',
      aiCheck: {
        task: 'Two sentences about the learner’s own work or study: one routine in the present '
          + 'simple with a time word, one about this moment in the present continuous.',
        grammar: 'the present simple for routines (adding -s with he/she/it) and the present '
          + 'continuous (am/is/are + verb-ing) for now',
        reader: 'the teacher',
        must: [
          'one sentence in the present simple with a frequency or time word',
          'one sentence in the present continuous with am/is/are and a verb ending in -ing',
          'both about the writer’s own work or study'
        ]
      },
      coach: {
        title: 'Check your two sentences',
        target: 'present simple and present continuous',
        minWords: 12,
        taught: [
          'Time words decide the tense: every day / usually → simple; now / today / this week → continuous.',
          'The continuous is two pieces: am, is or are, plus verb-ing.'
        ],
        task: 'Write one sentence about a routine and one about what you are doing now.',
        parts: ['A routine, with its time word.', 'Now, with am/is/are + verb-ing.'],
        example: ['Every morning I check the tools before the first car arrives.',
                  'Right now, I am waiting for a part from the store.'],
        exampleNote: 'One learner’s pair. Yours should be about your own day.',
        criteria: [
          { t: 'A time word in the routine sentence.', auto: 'mentions',
            keys: ['every', 'usually', 'always', 'often', 'sometimes', 'each', 'never'],
            need: 1,
            fail: 'Add the time word — every day, usually, often. Without it the sentence does '
              + 'not show it is a routine.' },
          { t: 'am / is / are plus a verb ending in -ing in the second sentence.',
            auto: 'mentions', keys: ['am ', 'is ', 'are '], need: 1,
            fail: 'The continuous needs both pieces: "I am checking", not "I checking".' },
          { t: 'Both sentences are about you, not about Nabil.' }
        ]
      }
    },

    /* --------------------------------------------------------- 3. choose the correct sentence */
    {
      id: 'c3', covers: ['Part 2'], ref: '2G', bookRef: 'Unit 1 · Part 2 · Grammar review',
      type: 'quizset',
      title: 'Choose the correct sentence',
      instruction: 'One of the four is right in each set. The bracket tells you which meaning '
        + 'is wanted.',
      display: 'cards',
      items: [
        {
          q: '1. Which sentence is correct, for something happening NOW?',
          evidence: 'the continuous is two pieces — a form of be, and verb-ing.',
          options: [
            { t: 'Nabil change the oil.', ok: false,
              why: 'Two faults at once: no <b>-s</b> for the simple, and no continuous at all. '
                + 'This is not a correct sentence in either tense.' },
            { t: 'Nabil is changing the oil.', ok: true,
              why: 'Right. <b>is</b> + <b>changing</b> — both pieces, and <i>is</i> because '
                + '<i>Nabil</i> is one person.' },
            { t: 'Nabil changing the oil.', ok: false,
              why: 'The <i>-ing</i> is there and the <i>is</i> is missing. This is exactly the '
                + 'fault the focus box prints: <i>✗ I checking now.</i>' },
            { t: 'Nabil are changing the oil.', ok: false,
              why: 'Both pieces are present, but <i>are</i> is for plural subjects — <i>they '
                + 'are changing</i>. One Nabil takes <i>is</i>.' }
          ]
        },
        {
          q: '2. Which sentence is correct, for a ROUTINE?',
          evidence: 'the simple adds -s for he, she or it — and nothing else.',
          options: [
            { t: 'The garage services cars.', ok: true,
              why: 'Right. <i>The garage</i> is <i>it</i>, so <b>services</b>. Plain present '
                + 'simple, which is how English states what is generally true.' },
            { t: 'The garage servicing cars.', ok: false,
              why: 'An <i>-ing</i> with nothing in front of it is not a tense. And a routine '
                + 'would not want the continuous anyway.' },
            { t: 'The garage service cars.', ok: false,
              why: 'The missing <b>-s</b> — the most frequent error of this unit, and the one '
                + 'you repaired twice on this screen already.' },
            { t: 'The garage to service cars.', ok: false,
              why: 'An infinitive, not a tense. <i>To service</i> can follow another verb — '
                + '<i>we want to service it</i> — but it cannot be the main verb on its own.' }
          ]
        }
      ],
      after: 'You will meet both tenses again in the Part 5 reading. Watch for them: the text '
        + 'describes what a department always does, and then what is happening to one car.'
    }
  ]
});
