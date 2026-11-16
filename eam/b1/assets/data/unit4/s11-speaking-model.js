/* Unit 4 §11 — Part 4 - Speaking, model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s11', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 4 - Speaking, model', part: '4', section: '11',
          lesson: 'Part 4 - Speaking, model', title: 'Part 4 - Speaking, model' },
  objective: 'Work through Part 4 - Speaking, model of unit 4.',
  video: 'u04v11',
  prev: 's10-listening-3', prevLabel: 'Part 3 - Listening 3',
  next: 's12-role-play', nextLabel: 'Part 4 - Role play',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 4 · Part 4', type: 'discuss',
      title: 'Discussing Measurements',
      instruction: 'Work with a partner. Ask and answer these questions. What things does a '
        + 'mechanic measure on a car? Why is it important to compare all four tyres? '
        + 'Why must a reading be within the tolerance?',
      minWords: 10,
      questions: [{ q: 'What things does a mechanic measure on a car?' }, { q: 'Why is it important to compare all four tyres?' }, { q: 'Why must a reading be within the tolerance?' }],
      ideas: ['Work with a partner. Ask and answer these questions. What things does a '
        + 'mechanic measure on a car? Why is it important to compare all four tyres? '
        + 'Why must a reading be within the tolerance?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'Comparatives and superlatives',
        task: 'Work with a partner. Ask and answer these questions. What things does a '
        + 'mechanic measure on a car? Why is it important to compare all four tyres? '
        + 'Why must a reading be within the tolerance?',
        parts: ['Every comparison of two things has “than” after it.', 'Every superlative has “the” in front of it — the most worn, the lowest.', '“good” and “bad” are irregular: better / the best, worse / the worst — '
        + 'never “gooder” or “more bad”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'Every comparison of two things has “than” after it.' },
                   { t: 'Every superlative has “the” in front of it — the most worn, the lowest.' },
                   { t: '“good” and “bad” are irregular: better / the best, worse / the worst — '
        + 'never “gooder” or “more bad”.' },
                   { t: 'The numbers are given with their units — two millimetres, 12.1 volts — and '
        + 'compared with the tolerance.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 4 · Part 4', type: 'discuss',
      title: 'Find the Difference',
      instruction: 'Work in pairs. Student A looks at Car A; Student B looks at Car B. Ask and '
        + 'answer to find three differences. Do not show your card.',
      minWords: 10,
      questions: [{ q: 'Write your answer to the task above in two or three sentences.' }],
      ideas: ['How deep is the tread?',
        'Which is more worn?',
        'What is the voltage?',
        'Is it within the tolerance?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'Comparatives and superlatives',
        task: 'Work in pairs. Student A looks at Car A; Student B looks at Car B. Ask and '
        + 'answer to find three differences. Do not show your card.',
        parts: ['Every comparison of two things has “than” after it.', 'Every superlative has “the” in front of it — the most worn, the lowest.', '“good” and “bad” are irregular: better / the best, worse / the worst — '
        + 'never “gooder” or “more bad”.'],
        example: ['How deep is the tread? · Which is more worn? · What is the voltage? · Is '
        + 'it within the tolerance?'],
        criteria: [{ t: 'Every comparison of two things has “than” after it.' },
                   { t: 'Every superlative has “the” in front of it — the most worn, the lowest.' },
                   { t: '“good” and “bad” are irregular: better / the best, worse / the worst — '
        + 'never “gooder” or “more bad”.' },
                   { t: 'The numbers are given with their units — two millimetres, 12.1 volts — and '
        + 'compared with the tolerance.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
