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
      },
      model: ['The Ministry of Foreign Affairs announces that a Memorandum of '
          + 'Understanding on Bilateral Cooperation has been ____________________ today '
          + 'between our country and the Federal Republic of Germany. The MoU was '
          + '____________________ by both foreign ministers at a ceremony held at the '
          + 'Ministry of Foreign Affairs in Bogotá. A joint technical committee will be '
          + '____________________ to oversee implementation, with the first session '
          + 'scheduled within 60 days.',
        'The Ministry of Foreign Affairs confirms that the National '
          + 'Returning-Citizens Program has been formally ____________________ and is '
          + 'now accepting applications from nationals residing abroad. The program is '
          + 'being ____________________ in partnership with the International '
          + 'Organization for Migration. Priority will be ____________________ to '
          + 'applications from qualified professionals in medicine, engineering, '
          + 'education, and public administration. Applications may be submitted '
          + 'through embassies and consulates.',
        'The International Investment Conference, ____________________ in Madrid, '
          + 'brought together representatives from forty-three countries and twelve '
          + 'international organizations. Funding ____________________ totaling four '
          + 'billion dollars were made for infrastructure, education, and social '
          + 'programs. A multilateral coordination committee was ____________________ '
          + 'to oversee the conversion of pledges into implemented projects.'],
      coach: {
        title: 'Check your own work',
        target: 'Explaining and describing: the passive and reporting verbs',
        task: 'Write a 4–5 sentence official summary of the following fictional event. '
        + 'Use passive voice where appropriate and maintain a formal, institutional '
        + 'tone. Event: The Academic Cooperation Framework with France was signed '
        + 'yesterday in Paris. Present at the signing: both foreign ministers. The '
        + 'framework covers student exchange programs, joint research in renewable '
        + 'energy, and collaboration between national and French universities. '
        + 'Duration: 5 years. A joint committee will meet twice a year. Expected to '
        + 'benefit 500 students annually.',
        parts: ['Write a 4–5 sentence official summary of the following fictional event. '
          + 'Use passive voice where appropriate and maintain a formal, institutional '
          + 'tone. Event: The Academic Cooperation Framework with France was signed '
          + 'yesterday in Paris. Present at the signing: both foreign ministers. The '
          + 'framework covers student exchange programs, joint research in renewable '
          + 'energy, and collaboration between national and French universities. '
          + 'Duration: 5 years. A joint committee will meet twice a year. Expected to '
          + 'benefit 500 students annually.'],
        criteria: [{ t: 'I answered the question that was actually asked, not a nearby one.' },
          { t: 'I used this unit\'s language: Explaining and describing: the passive and '
            + 'reporting verbs.' },
          { t: 'I gave a reason as well as a fact — because…, so that…' },
          { t: 'I used the words this unit teaches, not a translation of my own.' }]
      },
      aiCheck: {
        task: 'Write a 4–5 sentence official summary of the following fictional event. '
        + 'Use passive voice where appropriate and maintain a formal, institutional '
        + 'tone. Event: The Academic Cooperation Framework with France was signed '
        + 'yesterday in Paris. Present at the signing: both foreign ministers. The '
        + 'framework covers student exchange programs, joint research in renewable '
        + 'energy, and collaboration between national and French universities. '
        + 'Duration: 5 years. A joint committee will meet twice a year. Expected to '
        + 'benefit 500 students annually.',
        grammar: 'Explaining and describing: the passive and reporting verbs',
        vocab: ['Territorial Development',
          'Development Fund',
          'Bilateral Agreement',
          'Regional Integration',
          'Humanitarian Access',
          'Trade Preference Scheme',
          'Civil Society',
          'Dateline and Source',
          'Opening Announcement',
          'Context and Significance']
      }
    }
  ]
});
