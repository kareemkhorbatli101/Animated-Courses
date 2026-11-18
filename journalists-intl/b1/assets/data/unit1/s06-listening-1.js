/* Unit 1 §6 — Listening.

   Every question, item, option and model is the book's own text. */
JRN.page('u1-s06', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 3 · Listening', part: '3', section: '6',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening', title: 'Part 3 · Listening' },
  objective: 'By the end of Part 3 you can predict what a new reporter says on a '
  + 'first day, follow three newsroom conversations closely enough to judge '
  + 'True, False or Not Given, and match each person to what they are doing '
  + 'at the moment.',
  cards: [
    {
      id: 'c1',
      ref: '3A',
      bookRef: 'Unit 1 · 3A',
      visual: { spot: 'press-card' },
      type: 'study',
      title: 'Before you listen (predict)',
      html: '<p>“I think the new reporter will talk about the filing system and '
      + 'her first week.”</p>',
      instruction: 'You will hear new staff talking on their first days at the Nairobi '
  + 'bureau. What might a new reporter say to a bureau chief?',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '3B',
      bookRef: 'Unit 1 · 3B',
      type: 'study',
      title: 'Dialogue 1 — Meeting the bureau chief — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book’s own.',
      html: '<div class="script"><p><b>Nadia:</b> Good morning. You must be Aisha, '
      + 'our new reporter.</p><p><b>Aisha:</b> Yes. It’s good to join the '
      + 'Nairobi bureau.</p><p><b>Nadia:</b> Welcome. Are you familiar with our '
      + 'filing system?</p><p><b>Aisha:</b> I’ve used a similar one on work '
      + 'experience.</p><p><b>Nadia:</b> Good. Accuracy and attribution matter '
      + 'most here.</p></div>',
      playable: ['Good morning. You must be Aisha, our new reporter.',
      'Yes. It’s good to join the Nairobi bureau.',
      'Welcome. Are you familiar with our filing system?',
      'I’ve used a similar one on work experience.',
      'Good. Accuracy and attribution matter most here.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '3B',
      bookRef: 'Unit 1 · 3B',
      type: 'quizset',
      title: 'Dialogue 1 — Meeting the bureau chief',
      instruction: 'Read and decide: True, False, or Not Given.<br>Useful language: You '
  + 'must be… · Are you familiar with…? · I’ve used a similar one.',
      display: 'cards',
      items: [{
          q: 'Aisha has used the exact same filing system before.',
          options: [{
            t: 'True',
            ok: false,
            why: 'Aisha says she has used a SIMILAR one on work experience, not the same '
            + 'one. ‘Similar’ is the word the question quietly changes.'
          },
            {
            t: 'False',
            ok: true,
            why: 'Aisha says she has used a SIMILAR one on work experience, not the same '
            + 'one. ‘Similar’ is the word the question quietly changes.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'Aisha says she has used a SIMILAR one on work experience, not the same '
            + 'one. ‘Similar’ is the word the question quietly changes.'
          }]
        },
      {
          q: 'Nadia thinks speed matters most.',
          options: [{
            t: 'True',
            ok: false,
            why: 'Nadia says accuracy and attribution matter most; she never mentions '
            + 'speed. In a wire bureau speed obviously matters — but what she '
            + 'actually said is the only thing you may report.'
          },
            {
            t: 'False',
            ok: true,
            why: 'Nadia says accuracy and attribution matter most; she never mentions '
            + 'speed. In a wire bureau speed obviously matters — but what she '
            + 'actually said is the only thing you may report.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'Nadia says accuracy and attribution matter most; she never mentions '
            + 'speed. In a wire bureau speed obviously matters — but what she '
            + 'actually said is the only thing you may report.'
          }]
        },
      {
          q: 'Aisha has worked at another bureau before.',
          options: [{
            t: 'True',
            ok: false,
            why: 'She mentions work experience, but the script never says where, or '
            + 'that it was at a bureau — so there is nothing to call true or false.'
          },
            {
            t: 'False',
            ok: false,
            why: 'She mentions work experience, but the script never says where, or '
            + 'that it was at a bureau — so there is nothing to call true or false.'
          },
            {
            t: 'Not Given',
            ok: true,
            why: 'She mentions work experience, but the script never says where, or '
            + 'that it was at a bureau — so there is nothing to call true or false.'
          }]
        }]
    },
    {
      id: 'c4',
      ref: '3C',
      bookRef: 'Unit 1 · 3C',
      type: 'study',
      title: 'Dialogue 2 — The new picture editor — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book’s own.',
      html: '<div class="script"><p><b>Aisha:</b> Hi. Are you the new picture '
      + 'editor?</p><p><b>Daniel:</b> Yes, I’m Daniel. I’m setting up the photo '
      + 'desk. It helps us caption pictures faster.</p><p><b>Aisha:</b> Good. '
      + 'Our captions were slow last week.</p><p><b>Daniel:</b> I’ll look into '
      + 'that. I’m also training two stringers today. They will file better '
      + 'pictures.</p></div>',
      playable: ['Hi. Are you the new picture editor?',
      'Yes, I’m Daniel. I’m setting up the photo desk. It helps us caption '
        + 'pictures faster.',
      'Good. Our captions were slow last week.',
      'I’ll look into that. I’m also training two stringers today. They will '
        + 'file better pictures.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c5',
      ref: '3C',
      bookRef: 'Unit 1 · 3C',
      type: 'quizset',
      title: 'Dialogue 2 — The new picture editor',
      instruction: 'Read and decide: True, False, or Not Given.',
      display: 'cards',
      items: [{
          q: 'Daniel is setting up the photo desk to speed up captioning.',
          options: [{
            t: 'True',
            ok: true,
            why: 'Daniel says he is setting up the photo desk and that it helps them '
            + 'caption pictures faster. Both halves of the statement are in the '
            + 'script.'
          },
            {
            t: 'False',
            ok: false,
            why: 'Daniel says he is setting up the photo desk and that it helps them '
            + 'caption pictures faster. Both halves of the statement are in the '
            + 'script.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'Daniel says he is setting up the photo desk and that it helps them '
            + 'caption pictures faster. Both halves of the statement are in the '
            + 'script.'
          }]
        },
      {
          q: 'The captions last week were wrong and had to be removed.',
          options: [{
            t: 'True',
            ok: false,
            why: 'Aisha says the captions were SLOW last week. Slow is not wrong, and '
            + 'nobody says anything was removed. This is the commonest trap in '
            + 'the exercise: a real complaint, made into a bigger one.'
          },
            {
            t: 'False',
            ok: false,
            why: 'Aisha says the captions were SLOW last week. Slow is not wrong, and '
            + 'nobody says anything was removed. This is the commonest trap in '
            + 'the exercise: a real complaint, made into a bigger one.'
          },
            {
            t: 'Not Given',
            ok: true,
            why: 'Aisha says the captions were SLOW last week. Slow is not wrong, and '
            + 'nobody says anything was removed. This is the commonest trap in '
            + 'the exercise: a real complaint, made into a bigger one.'
          }]
        },
      {
          q: 'The training should improve the pictures the stringers file.',
          options: [{
            t: 'True',
            ok: true,
            why: 'Daniel says he is training two stringers and that they will file '
            + 'better pictures.'
          },
            {
            t: 'False',
            ok: false,
            why: 'Daniel says he is training two stringers and that they will file '
            + 'better pictures.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'Daniel says he is training two stringers and that they will file '
            + 'better pictures.'
          }]
        }]
    }
  ]
});
