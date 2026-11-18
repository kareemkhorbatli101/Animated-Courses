/* Unit 4 §14 — Review and Can-Do.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s14', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Review and Can-Do', part: '10',
          section: '14', lesson: 'Review and Can-Do', title: 'Review and Can-Do' },
  objective: 'By the end of Part 10 you can use this unit\'s check-in language '
  + 'again without prompting, and tick what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 4 · P10 A',
      type: 'cloze',
      title: 'Vocabulary',
      instruction: 'Vocabulary. Complete the sentence.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The guest opens the room door with a [[1]].'
        + '<br>'
        + '2. At check-in, the guest signs the [[2]] card.'
        + '<br>'
        + '3. A telephone call to wake a guest is a [[3]] call.'
        + '</div>',
      answers: {
        '1': ['key card'],
        '2': ['registration'],
        '3': ['wake-up']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>key card</b>',
        '2': '<b>registration</b>',
        '3': '<b>wake-up</b>'
      }
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 4 · P10 B',
      type: 'cloze',
      title: 'Grammar',
      instruction: 'Grammar. Complete with the present continuous or going to.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. I [[1]] (check) you in now.'
        + '<br>'
        + '2. The porter [[2]] (bring) your bags at the moment.'
        + '<br>'
        + '3. We [[3]] (clean) your room next — it\'s a plan.'
        + '<br>'
        + '4. A taxi [[4]] (wait) for you at eight tomorrow (an arrangement).'
        + '</div>',
      answers: {
        '1': ['am checking'],
        '2': ['is bringing'],
        '3': ['are going to clean'],
        '4': ['is waiting']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>am checking</b>',
        '2': '<b>is bringing</b>',
        '3': '<b>are going to clean</b>',
        '4': '<b>is waiting</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 4 · P10 C',
      type: 'discuss',
      title: 'Reading',
      instruction: 'Reading. Read the short text and answer.',
      questions: [{
            q: 'What time is check-in?',
            model: 'From two o\'clock (2 p.m.).',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What time is check-out?',
            model: 'By twelve o\'clock noon.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does reception do if a guest arrives early?',
            model: 'It keeps the luggage until the room is ready.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
