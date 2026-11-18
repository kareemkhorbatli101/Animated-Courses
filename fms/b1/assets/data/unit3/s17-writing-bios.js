/* Unit 3 §17 — Part 6 - Writing, bios.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s17', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Part 6 - Writing, bios', part: '6', section: '17',
          lesson: 'Part 6 - Writing, bios', title: 'Part 6 - Writing, bios' },
  objective: 'By the end of Part 6 you can recognise the five elements of a press '
        + 'release and what each one is for, write an official summary, and write a '
        + 'ministry press statement of 80 to 100 words.',
  prev: 's16-writing-models', prevLabel: 'Part 6 - Writing, the models',
  next: 's18-writing-your-turn', nextLabel: 'Part 6 - Writing, your turn',
  cards: [
    {
      id: 'c1',
      covers: ['Part 6'],
      ref: '6B',
      bookRef: 'Unit 3 · Part 6 · 6B',
      type: 'writer',
      title: 'Write an Official Summary',
      instruction: 'Write a 4–5 sentence official summary of the following fictional event. '
        + 'Use passive voice where appropriate and maintain a formal, institutional '
        + 'tone.<br>Event: The Academic Cooperation Framework with France was signed '
        + 'yesterday in Paris. Present at the signing: both foreign ministers. The '
        + 'framework covers student exchange programs, joint research in renewable '
        + 'energy, and collaboration between national and French universities. '
        + 'Duration: 5 years. A joint committee will meet twice a year. Expected to '
        + 'benefit 500 students annually.',
      paras: [{ label: 'How you open',
            purpose: 'One sentence that says who you are.' },
        { label: 'The body',
            purpose: 'Two or three sentences, using this unit\'s words.' },
        { label: 'How you close',
            purpose: 'One sentence that says what happens next.' }],
      minWords: 40,
      scaffold: {
        task: 'Write a 4–5 sentence official summary of the following fictional event. '
        + 'Use passive voice where appropriate and maintain a formal, institutional '
        + 'tone. Event: The Academic Cooperation Framework with France was signed '
        + 'yesterday in Paris. Present at the signing: both foreign ministers. The '
        + 'framework covers student exchange programs, joint research in renewable '
        + 'energy, and collaboration between national and French universities. '
        + 'Duration: 5 years. A joint committee will meet twice a year. Expected to '
        + 'benefit 500 students annually.',
        words: ['Write an Official Summary'],
        must: ['opens with who you are?',
          'uses this unit\'s vocabulary?',
          '40 words or more?',
          'closes with a next step?'],
        planPlaceholder: 'Dear …, My name is … I am writing to …'
      }
    }
  ]
});
