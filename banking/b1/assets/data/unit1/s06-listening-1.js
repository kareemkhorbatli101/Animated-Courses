/* Unit 1 §6 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s06', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 3 · Listening', part: '3', section: '6',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening', title: 'Part 3 · Listening' },
  objective: 'By the end of Part 3 you can predict what a new colleague says on a '
  + 'first day, follow three workplace conversations closely enough to '
  + 'judge True, False or Not Given, and match each person to what they '
  + 'are doing at the moment.',
  cards: [
    {
      id: 'c1',
      ref: '3A',
      bookRef: 'Unit 1 · 3A',
      visual: { spot: 'bank-counter' },
      type: 'study',
      title: 'Before you listen (predict)',
      html: '<p>“I think the new teller will talk about the counter system and her '
      + 'first day.”</p>',
      instruction: 'You will hear new staff talking on their first days. What might a new '
  + 'teller say to a manager?',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '3B',
      bookRef: 'Unit 1 · 3B',
      type: 'study',
      title: 'Dialogue 1 — Meeting the manager — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Mr Diallo:</b> Good morning. You must be '
      + 'Ana, our new teller.</p><p><b>Ana:</b> Yes, sir. It’s great to join '
      + 'the Warsaw branch.</p><p><b>Mr Diallo:</b> Welcome. Are you familiar '
      + 'with our teller system?</p><p><b>Ana:</b> I’ve used a similar one in '
      + 'training.</p><p><b>Mr Diallo:</b> Good. Accuracy and service are the '
      + 'most important things here.</p></div>',
      playable: ['Good morning. You must be Ana, our new teller.',
      'Yes, sir. It’s great to join the Warsaw branch.',
      'Welcome. Are you familiar with our teller system?',
      'I’ve used a similar one in training.',
      'Good. Accuracy and service are the most important things here.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '3B',
      bookRef: 'Unit 1 · 3B',
      type: 'quizset',
      title: 'Dialogue 1 — Meeting the manager',
      instruction: 'Read and decide: True, False, or Not Given.<br>Useful language: You '
  + 'must be… · Are you familiar with…? · I’ve used a similar one.',
      display: 'cards',
      items: [{
          q: 'Ana used the exact same system before.',
          options: [{
            t: 'True',
            ok: false,
            why: 'Ana says she has used a SIMILAR one in training, not the same one.'
          },
            {
            t: 'False',
            ok: true,
            why: 'Ana says she has used a SIMILAR one in training, not the same one.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'Ana says she has used a SIMILAR one in training, not the same one.'
          }]
        },
      {
          q: 'Mr Diallo thinks speed matters most.',
          options: [{
            t: 'True',
            ok: false,
            why: 'Mr Diallo says accuracy and service are the most important things; he '
            + 'never mentions speed.'
          },
            {
            t: 'False',
            ok: true,
            why: 'Mr Diallo says accuracy and service are the most important things; he '
            + 'never mentions speed.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'Mr Diallo says accuracy and service are the most important things; he '
            + 'never mentions speed.'
          }]
        },
      {
          q: 'Ana worked at another branch before.',
          options: [{
            t: 'True',
            ok: false,
            why: 'She mentions training, but the script never says she worked at '
            + 'another branch - so there is nothing to call true or false.'
          },
            {
            t: 'False',
            ok: false,
            why: 'She mentions training, but the script never says she worked at '
            + 'another branch - so there is nothing to call true or false.'
          },
            {
            t: 'Not Given',
            ok: true,
            why: 'She mentions training, but the script never says she worked at '
            + 'another branch - so there is nothing to call true or false.'
          }]
        }]
    },
    {
      id: 'c4',
      ref: '3C',
      bookRef: 'Unit 1 · 3C',
      type: 'study',
      title: 'Dialogue 2 — The IT support visit — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Mei:</b> Hi. Are you the new IT support '
      + 'person?</p><p><b>Petra:</b> Yes, I’m Petra. I’m installing the new '
      + 'firewall. It helps with security.</p><p><b>Mei:</b> Great. Our '
      + 'systems were slow last week.</p><p><b>Petra:</b> I’ll look into that. '
      + 'I’m also setting up the online terminals today. They will be '
      + 'faster.</p></div>',
      playable: ['Hi. Are you the new IT support person?',
      'Yes, I’m Petra. I’m installing the new firewall. It helps with security.',
      'Great. Our systems were slow last week.',
      'I’ll look into that. I’m also setting up the online terminals today. '
        + 'They will be faster.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c5',
      ref: '3C',
      bookRef: 'Unit 1 · 3C',
      type: 'quizset',
      title: 'Dialogue 2 — The IT support visit',
      instruction: 'Read and decide: True, False, or Not Given.',
      display: 'cards',
      items: [{
          q: 'Petra is installing a firewall to improve security.',
          options: [{
            t: 'True',
            ok: true,
            why: 'Petra says she is installing the new firewall and that it helps with '
            + 'security.'
          },
            {
            t: 'False',
            ok: false,
            why: 'Petra says she is installing the new firewall and that it helps with '
            + 'security.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'Petra says she is installing the new firewall and that it helps with '
            + 'security.'
          }]
        },
      {
          q: 'The terminals are broken and cannot be used.',
          options: [{
            t: 'True',
            ok: false,
            why: 'Mei says the systems were SLOW last week. Slow is not broken, and '
            + 'nobody says the terminals cannot be used.'
          },
            {
            t: 'False',
            ok: false,
            why: 'Mei says the systems were SLOW last week. Slow is not broken, and '
            + 'nobody says the terminals cannot be used.'
          },
            {
            t: 'Not Given',
            ok: true,
            why: 'Mei says the systems were SLOW last week. Slow is not broken, and '
            + 'nobody says the terminals cannot be used.'
          }]
        },
      {
          q: 'The new setup should make the system faster.',
          options: [{
            t: 'True',
            ok: true,
            why: 'Petra says the new terminals will be faster.'
          },
            {
            t: 'False',
            ok: false,
            why: 'Petra says the new terminals will be faster.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'Petra says the new terminals will be faster.'
          }]
        }]
    }
  ]
});
