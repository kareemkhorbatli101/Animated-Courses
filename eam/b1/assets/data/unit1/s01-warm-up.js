/* ============================================================
   Unit 1 §1 — Warm Up.

   Three exercises, in the book's order. The matching card is drawn rather than written: the
   book prints the five words in Column A and their meanings in Column B, and here the words
   are the PICTURES, so the learner reads the English definition and finds the thing it
   describes. That is the same task with the first language taken out of the loop.

   The spare meaning is a chip left in the pool, which is what the book's "one meaning is not
   needed" asks for. The targets are the words, not the meanings: the other way round, the
   spare meaning would be a target nobody could ever fill and the card would never finish.
   ============================================================ */
EAM.page('u1-s01', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Warm Up', part: '—', section: '1',
          lesson: 'Warm Up', title: 'The car and the department' },
  objective: 'Name five parts of a car, and say who does what in a service department',
  video: 'u01v01',
  next: 's02-vocabulary', nextLabel: 'The words of the workshop',
  cards: [

    /* ---------------------------------------------------------------- 1. the five parts */
    {
      id: 'c1', covers: ['Warm Up'], ref: 'WU1', bookRef: 'Unit 1 · Warm Up · Column A/B',
      type: 'dragmatch',
      title: 'Match each part with what it does',
      instruction: 'Five parts of a car are drawn below. Drag each meaning onto the part it '
        + 'describes — or click the meaning, then click the part. <b>One meaning is not '
        + 'needed.</b>',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a '
        + 'picture to take its meaning off again. One meaning is left over on purpose.',
      cols: 3,
      say: true,
      worked: {
        q: '0. mechanic',
        a: 'the person who repairs and services cars',
        why: 'Done for you, and worth a second look: the meaning names the CATEGORY first '
          + '("the person") and then what makes this one different ("repairs and services '
          + 'cars"). Every meaning in the list below is built the same way, so reading the '
          + 'first two words tells you whether you are looking for a person, a place or a '
          + 'thing.'
      },
      chips: [
        { id: 'm-a', label: 'a) the cover over the engine at the front' },
        { id: 'm-b', label: 'b) the wheel you hold to steer the car' },
        { id: 'm-c', label: 'c) it stores electricity to start the car' },
        { id: 'm-d', label: 'd) the machine that makes the car move' },
        { id: 'm-e', label: 'e) the space at the back for bags' },
        { id: 'm-f', label: 'f) the rubber part on the wheel that touches the road' }
      ],
      whyTitle: 'What each one is, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'engine', art: 'engine', accept: 'm-d',
          why: 'The engine is the <b>machine that makes the car move</b>. The drawing shows '
            + 'four cylinders and a belt: parts that turn. Nothing else in this list moves '
            + 'the car — the battery only starts it.' },
        { id: 't2', num: 2, label: 'tyre', art: 'tyre', accept: 'm-f',
          why: 'The <b>rubber</b> part that <b>touches the road</b>. Keep it apart from the '
            + 'wheel: the wheel is the metal disc, the tyre is the rubber around it. Meaning '
            + '(b) is about steering, which is a different wheel again.' },
        { id: 't3', num: 3, label: 'battery', art: 'battery', accept: 'm-c',
          why: '<b>Stores electricity to start</b> the car. The + and − on the drawing are '
            + 'the giveaway. A learner who put (d) here was thinking "it makes the car go" — '
            + 'but the battery starts the engine, and then the engine does the moving.' },
        { id: 't4', num: 4, label: 'bonnet', art: 'bonnet', accept: 'm-a',
          why: 'The <b>cover over the engine</b>, at the <b>front</b>. The drawing shows it '
            + 'opening. If you chose (e), look at where the arrow is: the space for bags is '
            + 'at the other end of the car.' },
        { id: 't5', num: 5, label: 'boot', art: 'boot', accept: 'm-e',
          why: 'The <b>space at the back for bags</b> — the bag is drawn in it. In American '
            + 'English this is the <i>trunk</i>, and the bonnet is the <i>hood</i>; this '
            + 'book uses the British words throughout.' }
      ],
      after: 'The meaning left in the pool is <b>(b) the wheel you hold to steer the car</b> '
        + '— the steering wheel. You meet it in Part 1.'
    },

    /* ------------------------------------------------------- 2. the department, in a gap-fill */
    {
      id: 'c2', covers: ['Warm Up'], ref: 'WU2', bookRef: 'Unit 1 · Warm Up · word bank',
      type: 'cloze',
      title: 'Who and what, in the service department',
      instruction: 'Complete the four sentences with the words in the bank. Each word is used '
        + 'once.',
      visual: { art: 'service-flow', wide: true,
        caption: 'The three areas of a service department, and the order a car passes through '
          + 'them. Two of the four answers below are named on this picture.' },
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. A [[1]] repairs and checks cars.<br>'
        + '2. The car comes in for a [[2]] every year.<br>'
        + '3. The [[3]] makes the car move.<br>'
        + '4. The [[4]] brings the car to the garage.'
        + '</div>',
      answers: { '1': ['mechanic'], '2': ['service'], '3': ['engine'], '4': ['customer'] },
      bank: ['mechanic', 'service', 'engine', 'customer'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>mechanic</b>. The sentence says what this one DOES — repairs and checks — so '
          + 'it is a person. Only two words in the bank are people, and a customer does not '
          + 'repair anything.',
        '2': '<b>service</b>. "Comes in for a ___" needs a thing you can come in FOR, and '
          + '"every year" tells you it happens again and again. A service is the regular '
          + 'check a car needs; it is also the verb — <i>we service the car</i>.',
        '3': '<b>engine</b>. The same meaning you matched in the first card: the machine that '
          + 'makes the car move. This is the word repeating on purpose.',
        '4': '<b>customer</b>. The person who BRINGS the car, not the one who works on it. '
          + 'The picture above puts the customer at reception, on the left, before anything '
          + 'else happens.'
      }
    },

    /* ----------------------------------------------- 3. the text the two questions are about */
    {
      id: 'c3', covers: ['Warm Up'], ref: 'WU3a', bookRef: 'Unit 1 · Warm Up · reading',
      type: 'study',
      title: 'Read this first',
      instruction: 'Five sentences about a service department. The two questions on the next '
        + 'card are answered inside them, so read it once before you go on.',
      visual: { art: 'service-flow', wide: true,
        caption: 'The same three areas. Follow the text against the picture as you read.' },
      html: '<p style="font-size:16.5px;line-height:1.9">A service department has many '
        + 'people. The customer brings the car to <b>reception</b>. The <b>service advisor</b> '
        + 'writes a <b>job card</b>. Then a <b>mechanic</b> checks the car in the '
        + '<b>workshop</b>. Safety and good work are very important. A clean, tidy workshop '
        + 'is a safe workshop.</p>',
      doneLabel: 'I have read it',
      playable: [
        'A service department has many people.',
        'The customer brings the car to reception.',
        'The service advisor writes a job card.',
        'Then a mechanic checks the car in the workshop.',
        'A clean, tidy workshop is a safe workshop.'
      ]
    },

    /* --------------------------------------------------------- 4. the two questions about it */
    {
      id: 'c4', covers: ['Warm Up'], ref: 'WU3b', bookRef: 'Unit 1 · Warm Up · questions',
      type: 'quizset',
      title: 'Two questions about the text',
      instruction: 'Everything you need is in the five sentences above. Read them again if '
        + 'you want to — this is not a memory test.',
      /* Cards, not a dropdown. The component picks a dropdown when every option is short, and
         these are short — but a comprehension question is easier to think about when all four
         answers are on the page at once, instead of one at a time behind a control. */
      display: 'cards',
      say: true,
      items: [
        {
          q: '1. Who writes the job card?',
          evidence: 'the third sentence — it names one person and one piece of paper.',
          options: [
            { t: 'The customer', ok: false,
              why: 'The customer BRINGS the car. That is the sentence before, and it is the '
                + 'commonest mix-up here: the customer starts the process but writes nothing.' },
            { t: 'The service advisor', ok: true,
              why: 'Right — "The service advisor writes a job card." That is the advisor’s '
                + 'whole job in this unit: they meet the customer and turn what the customer '
                + 'says into writing, so the workshop knows what to do.' },
            { t: 'The mechanic', ok: false,
              why: 'The mechanic comes next, and READS the card. A mechanic who had to write '
                + 'it would have to talk to the customer first, which is not how the '
                + 'department is organised.' },
            { t: 'The driver', ok: false,
              why: 'The driver and the customer are usually the same person here, and neither '
                + 'writes the card. The text never mentions a driver at all.' }
          ]
        },
        {
          q: '2. Why is a tidy workshop good?',
          evidence: 'the last sentence — it links two words with "is".',
          options: [
            { t: 'It is safe', ok: true,
              why: 'Right — "A clean, tidy workshop is a safe workshop." The text states it '
                + 'directly. Tidiness is a safety rule in a garage, not a matter of looks: '
                + 'tools and spilled oil on a floor are what people fall over.' },
            { t: 'It is expensive', ok: false,
              why: 'Nothing in the text is about cost. Keeping a workshop tidy costs time, '
                + 'not money.' },
            { t: 'It is dark', ok: false,
              why: 'A dark workshop would be the opposite of safe. Check the sentence again — '
                + 'the word after "is" is the answer.' },
            { t: 'It is small', ok: false,
              why: 'Size is not mentioned, and a small workshop is no safer than a big one. '
                + 'The text pairs "clean, tidy" with one word, and that word is the answer.' }
          ]
        }
      ]
    }
  ]
});
