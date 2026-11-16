/* Unit 4 §12 — Part 4 - Role play.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s12', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 4 - Role play', part: '4', section: '12',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'Work through Part 4 - Role play of unit 4.',
  video: 'u04v12',
  prev: 's11-speaking-model', prevLabel: 'Part 4 - Speaking, model',
  next: 's13-reading-text', nextLabel: 'Part 5 - Reading, the text',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 4 · Part 4', type: 'roleplay',
      title: 'Reporting Readings Role Play',
      instruction: 'Work in pairs. Read the model, then use the cards.',
      scene: 'u4-dialogue4',
      roles: [{ who: 'lina', label: 'Card A · Lina' }, { who: 'nabil', label: 'Card B · Nabil' }],
      briefs: [{ label: 'Card A', text: 'Technician: report the tyre and battery readings; compare them (use '
        + 'comparatives and superlatives)' },
                { label: 'Card B', text: 'Foreman: ask how low / how worn, then decide what to do' }],
      remember: ['Model exchange — Lina: The rear left is more worn than the others. — '
        + 'Nabil: How low? — Lina: Only two millimetres — the most worn of the four. '
        + '— Nabil: And the battery? — Lina: Lower than last time, below the '
        + 'tolerance.',
        'Stretch: two cars need work but there is only time for one — decide which '
        + 'is more urgent, and explain why'],
      minWords: 30,
      modelScene: { id: 'u4-dialogue4',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'Comparatives and superlatives',
        task: 'Work in pairs. Read the model, then use the cards.',
        parts: ['Every comparison of two things has “than” after it.', 'Every superlative has “the” in front of it — the most worn, the lowest.', '“good” and “bad” are irregular: better / the best, worse / the worst — '
        + 'never “gooder” or “more bad”.'],
        example: ['Lina: The rear left is more worn than the others. — Nabil: How low? — '
        + 'Lina: Only two millimetres — the most worn of the four. — Nabil: And the '
        + 'battery? — Lina: Lower than last time, below the tolerance.'],
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
      bookRef: 'Unit 4 · Part 4', type: 'report',
      title: 'Mini-Presentation',
      instruction: 'Prepare a short talk (about one minute). Compare two cars or two tyres, '
        + 'and say which is in better condition and why.',
      minWords: 45,
      placeholder: 'I want to tell you about…',
      stems: ['I want to tell you about…', 'It is…', 'Every week I…', 'Right now…', 'I think…'],
      coach: {
        title: 'Check your own work',
        target: 'Comparatives and superlatives',
        task: 'Prepare a short talk (about one minute). Compare two cars or two tyres, '
        + 'and say which is in better condition and why.',
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
    }
  ]
});
