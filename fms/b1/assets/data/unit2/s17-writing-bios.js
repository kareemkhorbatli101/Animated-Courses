/* Unit 2 §17 — Part 6 - Writing, bios.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s17', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 6 - Writing, bios', part: '6', section: '17',
          lesson: 'Part 6 - Writing, bios', title: 'Part 6 - Writing, bios' },
  objective: 'By the end of Part 6 you can recognise the five sections of a meeting '
        + 'agenda and what each one is for, write an agenda for a bilateral session, '
        + 'and write a meeting confirmation email of 80 to 100 words.',
  prev: 's16-writing-models', prevLabel: 'Part 6 - Writing, the models',
  next: 's18-writing-your-turn', nextLabel: 'Part 6 - Writing, your turn',
  cards: [
    {
      id: 'c1',
      covers: ['Part 6'],
      ref: '6B',
      bookRef: 'Unit 2 · Part 6 · 6B',
      type: 'writer',
      title: 'Write a Meeting Agenda',
      instruction: 'Using the information below, write a formal two-hour meeting agenda for '
        + 'the Morocco–France Cultural Cooperation Working Group.<br>Given '
        + 'information:<br>• Date: Wednesday, 22 April 2025, 10:00 a.m.–12:00 '
        + 'p.m.<br>• Venue: Conference Room A, Ministry of Foreign Affairs, '
        + 'Rabat<br>• Host participants: Youssef El Amrani (delegation lead), Nadia '
        + 'Tazi, two cultural affairs officers<br>• French participants: Ms. Claire '
        + 'Dupont (delegation lead, French Institute Rabat), two cultural cooperation '
        + 'officers<br>• Agenda items: (1) Review of the Morocco–France Cultural '
        + 'Exchange Protocol signed in 2024, (2) Progress update on the joint '
        + 'cultural heritage exhibition for European capitals, (3) Proposal for a new '
        + 'annual Morocco–France Film and Literature Festival, (4) Any other business '
        + 'and next steps<br>• Format: Each item allocated 25 minutes; 5-minute '
        + 'transition break at 11:00 a.m.',
      paras: [{ label: 'How you open',
            purpose: 'One sentence that says who you are.' },
        { label: 'The body',
            purpose: 'Two or three sentences, using this unit\'s words.' },
        { label: 'How you close',
            purpose: 'One sentence that says what happens next.' }],
      minWords: 40,
      scaffold: {
        task: 'Using the information below, write a formal two-hour meeting agenda for '
        + 'the Morocco–France Cultural Cooperation Working Group. Given information: '
        + '• Date: Wednesday, 22 April 2025, 10:00 a.m.–12:00 p.m. • Venue: '
        + 'Conference Room A, Ministry of Foreign Affairs, Rabat • Host participants: '
        + 'Youssef El Amrani (delegation lead), Nadia Tazi, two cultural affairs '
        + 'officers • French participants: Ms. Claire Dupont (delegation lead, French '
        + 'Institute Rabat), two cultural cooperation officers • Agenda items: (1) '
        + 'Review of the Morocco–France Cultural Exchange Protocol signed in 2024, '
        + '(2) Progress update on the joint cultural heritage exhibition for European '
        + 'capitals, (3) Proposal for a new annual Morocco–France Film and Literature '
        + 'Festival, (4) Any other business and next steps • Format: Each item '
        + 'allocated 25 minutes; 5-minute transition break at 11:00 a.m.',
        words: ['Write a Meeting Agenda'],
        must: ['opens with who you are?',
          'uses this unit\'s vocabulary?',
          '40 words or more?',
          'closes with a next step?'],
        planPlaceholder: 'Dear …, My name is … I am writing to …'
      },
      model: ['Dear Ms. Braun, I am writing to confirm the arrangements for the '
          + 'Morocco–Germany Infrastructure Cooperation Working Group '
          + '____________________ on Tuesday, 14 March 2025, at 10:00 a.m., in '
          + 'Conference Room B, Ministry of Foreign Affairs, Rabat. All participants '
          + '____________________ present a valid form of official identification at '
          + 'the security desk. Interpretation into German will be available for the '
          + 'technical session in the afternoon. I will send a final logistics '
          + '____________________ by Monday morning. Yours sincerely, Salma Benali, '
          + 'Protocol and Liaison Officer',
        'Dear Mr. Richter, I am writing to inform you that the working group '
          + 'session originally ____________________ for Tuesday at ten o\'clock must '
          + 'be rescheduled due to an urgent ministerial commitment on our side. We '
          + '____________________ the session to take place on Wednesday at the same '
          + 'time and in the same location. We apologize for any inconvenience and are '
          + 'grateful for your understanding. Please confirm at your earliest '
          + '____________________. Best regards, Salma Benali',
        'Post-Meeting Summary — Morocco–Germany Infrastructure Working Group Date: '
          + 'Tuesday, 14 March 2025 Participants: [see attached list] The session '
          + 'opened at 10:00 a.m. with formal statements from both ____________________ '
          + 'leads. The morning session addressed rail network modernization in '
          + 'priority regions. The afternoon session covered water infrastructure '
          + '____________________. At the conclusion of the session, both delegation '
          + 'leads signed an aide-mémoire establishing the joint technical monitoring '
          + 'committee. Both sides ____________________ to hold a second working group '
          + 'session within three months.']
    }
  ]
});
