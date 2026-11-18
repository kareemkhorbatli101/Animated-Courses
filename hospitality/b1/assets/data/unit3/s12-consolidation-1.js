/* Unit 3 §12 — Consolidation.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s12', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Consolidation', part: '8',
          section: '12', lesson: 'Consolidation', title: 'Consolidation' },
  objective: 'By the end of Part 8 you can take a booking using this unit\'s '
  + 'vocabulary and polite forms together.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 3 · P8 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done.)',
      questions: [{
            q: 'What room does the guest want, and for how many nights?',
            model: 'A family room, for three nights.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the guest\'s full name?',
            model: 'Mona Khalil.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What view does Lina offer?',
            model: 'A garden view.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Lina do before she ends the call? (name two things)',
            model: '(any two) repeats the whole booking, offers/sends a confirmation, '
              + 'thanks the guest.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['How does Lina feel at the start? (nervous / her heart beats fast)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 3 · P8 B',
      type: 'cloze',
      title: 'Complete each sentence with ONE word from the text',
      instruction: 'Complete each sentence with ONE word from the text. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The guest wants a [[1]] room.'
        + '<br>'
        + '2. Lina asks the guest to [[2]] her family name.'
        + '<br>'
        + '3. Lina offers a room with a garden [[3]].'
        + '<br>'
        + '4. Lina [[4]] the whole booking to check it.'
        + '<br>'
        + '5. She will send a [[5]] by email.'
        + '</div>',
      answers: {
        '1': ['family'],
        '2': ['spell'],
        '3': ['view'],
        '4': ['repeats'],
        '5': ['confirmation']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>family</b>',
        '2': '<b>spell</b>',
        '3': '<b>view</b>',
        '4': '<b>repeats</b>',
        '5': '<b>confirmation</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 3 · P8 C',
      type: 'report',
      title: 'Discuss in small groups',
      instruction: 'Discuss in small groups. Give reasons and examples.',
      minWords: 20,
      placeholder: 'Why does Lina repeat the whole booking at the end?',
      stems: ['Why does Lina repeat the whole booking at the end?',
      'What makes a phone booking feel friendly and professional?']
    }
  ]
});
