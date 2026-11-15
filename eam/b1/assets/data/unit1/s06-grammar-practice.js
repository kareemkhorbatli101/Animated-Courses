/* ============================================================
   Unit 1 §6 — Part 2, Controlled practice.

   Two exercises from the book. The first gives the verb and asks for the right form; the
   second gives both forms and asks which one belongs. They test the same decision from
   opposite ends, which is why the book puts them together and why they stay together here.

   The second is printed in the book as "(watches / is watching)" inside each sentence. On
   the page it is a sort: the four sentences go into the tense they need. The judgement is
   identical — find the time word, choose the tense — and sorting shows the learner all four
   decisions at once, so the pattern is visible instead of being met four separate times.
   ============================================================ */
EAM.page('u1-s06', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 2 · Practice', part: '2', section: '6',
          lesson: 'Part 2 · Grammar', title: 'Simple or continuous' },
  objective: 'Choose the present simple or the present continuous from the time words',
  video: 'u01v06',
  prev: 's05-grammar-notice', prevLabel: 'Notice the two tenses',
  next: 's07-grammar-review', nextLabel: 'Find and fix',
  cards: [

    /* ------------------------------------------------------------- 1. put the verb in form */
    {
      id: 'c1', covers: ['Part 2'], ref: '2C', bookRef: 'Unit 1 · Part 2 · Controlled practice',
      type: 'cloze',
      title: 'Put the verb in the right form',
      instruction: 'The verb is in brackets. Write it in the present simple or the present '
        + 'continuous. The first one is done for you.',
      visual: { art: 'tense-two-clocks',
        caption: 'Find the time word before you write anything. It decides the tense, and '
          + 'then the subject decides the ending.' },
      before: '<b>0.</b> Nabil usually <u>works</u> in the morning. <i>(work)</i>',
      text: '<div style="font-size:16px;line-height:2.6">'
        + '1. Tarek [[1]] the tyres every day. <i>(check)</i><br>'
        + '2. Look! He [[2]] the oil right now. <i>(change)</i><br>'
        + '3. The garage [[3]] at eight o’clock. <i>(open)</i><br>'
        + '4. Today, Lina [[4]] a fault in the engine. <i>(find)</i>'
        + '</div>',
      answers: {
        '1': ['checks'],
        '2': ['is changing'],
        '3': ['opens'],
        '4': ['is finding']
      },
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>checks</b>. "Every day" is a routine, so the present simple. <i>Tarek</i> is '
          + 'he, so the verb takes the <b>-s</b>. Both halves of the decision in one word.',
        '2': '<b>is changing</b>. "Look!" and "right now" both point at this moment, so the '
          + 'continuous. <i>He</i> is singular, so <b>is</b> — not <i>are</i>, and not nothing: '
          + '<i>He changing</i> is the second fault the focus box warns about.',
        '3': '<b>opens</b>. A time of day that happens every day is a routine, even though no '
          + 'word says "every day". <i>The garage</i> is one thing — it, not they — so <b>-s</b>.',
        '4': '<b>is finding</b>. "Today" is the signal, exactly as in the Notice card. This is '
          + 'the one learners most often get wrong, because finding a fault sounds like a '
          + 'single completed act — but today is not finished yet.'
      }
    },

    /* ------------------------------------------------------- 2. sort the four by their tense */
    {
      id: 'c2', covers: ['Part 2'], ref: '2D', bookRef: 'Unit 1 · Part 2 · Simple or continuous',
      type: 'chipcols',
      title: 'Which tense does each sentence need?',
      instruction: 'Four sentences. Put each one in the column of the tense it needs. The '
        + 'correct form is shown once you have finished.',
      poolLabel: 'Click a sentence, then click a column — or drag it there. Double-click a '
        + 'sentence in a column to take it out again.',
      cols: [
        { label: 'present simple — a routine' },
        { label: 'present continuous — right now' }
      ],
      pool: [
        'Right now, Tarek ___ Nabil. (watch)',
        'Lina usually ___ at eight. (start)',
        'Listen! The engine ___ a strange noise. (make)',
        'The garage ___ many cars every week. (service)'
      ],
      answers: {
        'Right now, Tarek ___ Nabil. (watch)': 1,
        'Lina usually ___ at eight. (start)': 0,
        'Listen! The engine ___ a strange noise. (make)': 1,
        'The garage ___ many cars every week. (service)': 0
      },
      whyTitle: 'The time word in each one, and the form it gives you',
      why: {
        'Right now, Tarek ___ Nabil. (watch)': '<b>Continuous — is watching.</b> "Right now" '
          + 'is the clearest signal there is.',
        'Lina usually ___ at eight. (start)': '<b>Simple — starts.</b> "Usually" is a '
          + 'frequency word, and frequency means routine. <i>Lina</i> is she, so the -s.',
        'Listen! The engine ___ a strange noise. (make)': '<b>Continuous — is making.</b> '
          + '"Listen!" does the same work as "Look!" in the card above: it points at this '
          + 'moment without using the word <i>now</i>. An imperative like that is a time '
          + 'signal, and it is the one most often missed.',
        'The garage ___ many cars every week. (service)': '<b>Simple — services.</b> "Every '
          + 'week" is a routine. <i>The garage</i> is one thing, so <b>services</b> with the '
          + '-s, even though "many cars" is plural — the ending follows the SUBJECT, never the '
          + 'object.'
      },
      notes: [{
        title: 'The order to do it in',
        body: 'Find the time word first — <i>right now, usually, every week, Listen!</i> — and '
          + 'it tells you the tense. Only then look at the subject, which tells you whether to '
          + 'add <b>-s</b> (simple) or which of <b>am / is / are</b> to use (continuous). Doing '
          + 'it the other way round is what produces <i>He change</i> and <i>I checking</i>.'
      }]
    }
  ]
});
