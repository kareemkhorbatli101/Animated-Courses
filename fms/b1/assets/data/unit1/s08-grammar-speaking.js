/* Unit 1 §8 — Part 2 - Grammar, speaking.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s08', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Part 2 - Grammar, speaking', part: '2', section: '8',
          lesson: 'Part 2 - Grammar, speaking', title: 'Part 2 - Grammar, speaking' },
  objective: 'By the end of Part 2 you can tell a permanent fact about the ministry from '
        + 'a temporary situation, choose present simple or present continuous for '
        + 'each, correct the most common mistakes between the two, and use both to '
        + 'answer questions about your own work.',
  prev: 's07-grammar-practice', prevLabel: 'Part 2 - Grammar, practice',
  next: 's09-listening-predict', nextLabel: 'Part 3 - Before you listen',
  cards: [
    {
      id: 'c1',
      covers: ['Part 2'],
      ref: '2E',
      bookRef: 'Unit 1 · Part 2 · 2E',
      type: 'report',
      title: 'Speaking Practice',
      instruction: 'In pairs, ask and answer these questions using full sentences. Use Present '
        + 'Simple for general facts and habits, and Present Continuous for current or '
        + 'temporary situations. (Aim for 1–2 sentences per answer.)',
      minWords: 40,
      placeholder: 'Where do you work?',
      stems: ['Where do you work?',
        'What do you usually do there?',
        'What are you working on this week?',
        'Which foreign visitors are you expecting this month?'],
      coach: {
        title: 'Compare with the book',
        target: 'Present simple and present continuous',
        task: 'In pairs, ask and answer these questions using full sentences. Use Present '
        + 'Simple for general facts and habits, and Present Continuous for current or '
        + 'temporary situations. (Aim for 1–2 sentences per answer.)',
        parts: ['Where do you work?',
        'What do you usually do there?',
        'What are you working on this week?',
        'Which foreign visitors are you expecting this month?'],
        example: ['I work at the Ministry of Foreign Affairs, in the Consular Section.',
          'I usually process visa applications, verify travel documents, and assist '
            + 'foreign nationals who need consular services.',
          'This week, I am preparing the visitor clearance list for the UN delegation '
            + 'that arrives on Thursday.',
          'This month we are expecting a French cultural delegation and a World Bank '
            + 'technical team.'],
        criteria: [{ t: 'Where do you work?' },
          { t: 'What do you usually do there?' },
          { t: 'What are you working on this week?' },
          { t: 'Which foreign visitors are you expecting this month?' }]
      },
      aiCheck: {
        task: 'In pairs, ask and answer these questions using full sentences. Use Present '
        + 'Simple for general facts and habits, and Present Continuous for current or '
        + 'temporary situations. (Aim for 1–2 sentences per answer.)',
        grammar: 'Present simple and present continuous',
        mode: 'spoken',
        vocab: ['Consular Section',
          'Protocol Department',
          'Political Affairs Directorate',
          'Press and Information Office',
          'Legal Directorate',
          'Cultural Relations Division',
          'Economic Affairs Office',
          'Subject Line',
          'Formal Greeting',
          'Opening Self-Introduction'],
        must: ['Where do you work?',
          'What do you usually do there?',
          'What are you working on this week?',
          'Which foreign visitors are you expecting this month?']
      }
    }
  ]
});
