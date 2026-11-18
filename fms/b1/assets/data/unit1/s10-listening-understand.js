/* Unit 1 §10 — Part 3 - Listening.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s10', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Part 3 - Listening', part: '3', section: '10',
          lesson: 'Part 3 - Listening', title: 'Part 3 - Listening' },
  objective: 'By the end of Part 3 you can predict what a visitor at the reception desk '
        + 'will say, follow four arrival conversations closely enough to identify '
        + 'each visitor, their purpose and the department they need, choose a correct '
        + 'staff response to an opening line, and write down five reception phrases '
        + 'you can use yourself.',
  prev: 's09-listening-predict', prevLabel: 'Part 3 - Before you listen',
  next: 's11-listening-respond', nextLabel: 'Part 3 - Responding',
  cards: [
    {
      id: 'c1',
      covers: ['Part 3',
        'Audio 1.14'],
      ref: '3B',
      bookRef: 'Unit 1 · Part 3 · 3B',
      type: 'scene',
      title: 'First Listening: Understanding the Visitors',
      instruction: 'Listen carefully to the four conversations at the ministry reception desk. '
        + 'For each dialogue, answer the questions that follow.',
      scene: 'u1-3b',
      quiz: {
        type: 'shortanswer',
        title: 'After you listen',
        instruction: 'Listen carefully to the four conversations at the ministry reception desk. '
        + 'For each dialogue, answer the questions that follow.',
        items: [{ q: '1. Why is each visitor at the ministry? What is their specific purpose?',
              accept: ['Dialogue 1: Laura Fischer has a scheduled meeting with the Economic '
                  + 'Affairs Office. As an economic adviser at the German Embassy, she is '
                  + 'likely discussing bilateral economic cooperation or a specific investment '
                  + 'programme. Dialogue 2: Omar Diallo is meeting the Humanitarian Liaison '
                  + 'Officer to coordinate a UNICEF programme. Dialogue 3: Somsak Chaiyaporn '
                  + 'wants to discuss investment but has no appointment. Dialogue 4: Elena '
                  + 'Popescu needs press accreditation for the regional investment forum. Taken '
                  + 'together, the four dialogues cover the three standard cases — a confirmed '
                  + 'appointment, a programme coordination visit, and an accreditation request '
                  + '— plus the one that tests the system, which is the visitor who arrives '
                  + 'with no appointment at all.'],
              keys: ['visitor',
                'ministry'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' },
            { q: '2. Which department does each visitor need?',
              accept: ['Dialogue 1: Economic Affairs Office. Dialogue 2: Humanitarian Liaison, '
                  + 'under Political Affairs. Dialogue 3: Economic Affairs Office. Dialogue 4: '
                  + 'Press and Information Office.'],
              keys: ['which',
                'department'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' },
            { q: '3. How does Linh handle the visitor who has no appointment? What does this '
                + 'tell us about professional reception practice?',
              accept: ['Linh does not turn Mr. Chaiyaporn away or show any sign of frustration. '
                  + 'She responds positively ("No problem at all"), gives him a clear next step '
                  + '(completing a visitor inquiry form), and arranges a brief introductory '
                  + 'meeting with the duty officer. This shows that a good reception system has '
                  + 'a procedure for visitors who arrive without an appointment. It also shows '
                  + 'that the procedure has to exist in advance — because an officer '
                  + 'improvising under pressure will either turn the visitor away or promise '
                  + 'something the ministry cannot deliver.'],
              keys: ['handle',
                'visitor'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' }],
        whyTitle: 'What each answer rests on'
      },
      after: '<b>Thinking guide.</b> Linh does not ___ Mr. Chaiyaporn away. Instead, she '
        + 'says "___ problem at all" and gives him a clear ___. This tells us that a '
        + 'good reception system always has a ___ for visitors without appointments. '
        + '(Think about: turn / no / next step / procedure)'
    }
  ]
});
