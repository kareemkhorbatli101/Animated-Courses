/* Unit 10 §11 — Guest-Care & Service Track.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s11', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Guest-Care & Service Track', part: '7',
          section: '11', lesson: 'Guest-Care & Service Track', title: 'Guest-Care & Service Track' },
  objective: 'By the end of Part 7 you can end a stay so that the guest would come '
  + 'back, even after something went wrong.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 10 · P7 · figures',
      type: 'study',
      title: 'The pictures in Guest-Care & Service Track',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-10.5.png', caption: 'A guest\'s five-star review.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 10 · P7',
      type: 'study',
      title: 'Guest-care and service',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Guest-care and service',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'A guest\'s feedback is one of the most valuable things a hotel '
            + 'receives. At checkout, a good receptionist gently invites it: “How '
            + 'was your stay? Is there anything we could do better?” She listens to '
            + 'the answer without defending the hotel, thanks the guest sincerely, '
            + 'and passes useful comments to the manager. Much feedback now lives '
            + 'online, in star ratings and reviews. A wise hotel reads its reviews, '
            + 'thanks the reviewers, and replies to criticism with calm and grace — '
            + 'never with excuses or anger. It knows that future guests are reading. '
            + 'Above all, the hotel remembers that the goal of every warm farewell '
            + 'is a returning guest. A loyal, returning guest is worth far more than '
            + 'a new one: they already trust the hotel, they spend more, and they '
            + 'bring their friends. This is why the last impression is really an '
            + 'investment in the next visit — and why \'goodbye\' in a great hotel '
            + 'always means \'see you again\'.',
          say: 'A guest\'s feedback is one of the most valuable things a hotel '
            + 'receives. At checkout, a good receptionist gently invites it: “How '
            + 'was your stay? Is there anything we could do better?” She listens to '
            + 'the answer without defending the hotel, thanks the guest sincerely, '
            + 'and passes useful comments to the manager. Much feedback now lives '
            + 'online, in star ratings and reviews. A wise hotel reads its reviews, '
            + 'thanks the reviewers, and replies to criticism with calm and grace — '
            + 'never with excuses or anger. It knows that future guests are reading. '
            + 'Above all, the hotel remembers that the goal of every warm farewell '
            + 'is a returning guest. A loyal, returning guest is worth far more than '
            + 'a new one: they already trust the hotel, they spend more, and they '
            + 'bring their friends. This is why the last impression is really an '
            + 'investment in the next visit — and why \'goodbye\' in a great hotel '
            + 'always means \'see you again\'.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 10 · P7 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words.',
      questions: [{
            q: 'How does a good receptionist invite feedback?',
            model: 'By gently asking, e.g. \'How was your stay? Is there anything we '
              + 'could do better?\'',
            minWords: 5,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How should she listen to the answer?',
            model: 'Without defending the hotel; she thanks the guest sincerely.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How should a hotel reply to online criticism?',
            model: 'With calm and grace — never excuses or anger.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why is a returning guest worth more than a new one?',
            model: 'They already trust the hotel, spend more, and bring their friends.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 10 · P7 B',
      type: 'cloze',
      title: 'Listen and complete',
      instruction: 'Listen and complete. A guest gives feedback at checkout. Write the '
  + 'missing word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Lina: How was your [[1]] with us?'
        + '<br>'
        + '2. Guest: It was lovely. But the wifi was a little slow. Lina: Thank '
            + 'you — I\'ll [[2]] the manager.'
        + '<br>'
        + '3. Lina: We do hope to [[3]] you again very soon.'
        + '</div>',
      answers: {
        '1': ['stay'],
        '2': ['tell'],
        '3': ['see / welcome']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>stay</b>',
        '2': '<b>tell</b>',
        '3': '<b>see / welcome</b>'
      }
    }
  ]
});
