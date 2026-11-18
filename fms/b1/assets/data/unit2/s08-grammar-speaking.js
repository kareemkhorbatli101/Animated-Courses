/* Unit 2 §8 — Part 2 - Grammar, speaking.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s08', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 2 - Grammar, speaking', part: '2', section: '8',
          lesson: 'Part 2 - Grammar, speaking', title: 'Part 2 - Grammar, speaking' },
  objective: 'By the end of Part 2 you can choose the right modal verb for an '
        + 'obligation, a recommendation, a possibility and a polite request, give the '
        + 'ministry example for each, correct modal errors in coordination writing, '
        + 'and make a request of a counterpart at the level of politeness the '
        + 'situation needs.',
  prev: 's07-grammar-practice', prevLabel: 'Part 2 - Grammar, practice',
  next: 's09-listening-predict', nextLabel: 'Part 3 - Before you listen',
  cards: [
    {
      id: 'c1',
      covers: ['Part 2'],
      ref: '2E',
      bookRef: 'Unit 2 · Part 2 · 2E',
      type: 'report',
      title: 'Speaking Practice',
      instruction: 'In pairs, use the correct modal verbs to complete these ministry speaking '
        + 'tasks. (Aim for 3–4 sentences per answer.)',
      minWords: 40,
      placeholder: 'Explain three security rules for foreign visitors at the ministry using '
        + 'must, must not, and may.',
      stems: ['Explain three security rules for foreign visitors at the ministry using '
          + 'must, must not, and may.',
        'Give three pieces of professional advice to a colleague who is '
          + 'coordinating their first bilateral meeting, using should and need to.',
        'What can and cannot a liaison officer decide alone, without authorization '
          + 'from a senior official? Use can and cannot.'],
      coach: {
        title: 'Compare with the book',
        target: 'Modal verbs for requests and arrangements',
        task: 'In pairs, use the correct modal verbs to complete these ministry speaking '
        + 'tasks. (Aim for 3–4 sentences per answer.)',
        parts: ['Explain three security rules for foreign visitors at the ministry using '
          + 'must, must not, and may.',
        'Give three pieces of professional advice to a colleague who is '
          + 'coordinating their first bilateral meeting, using should and need to.',
        'What can and cannot a liaison officer decide alone, without authorization '
          + 'from a senior official? Use can and cannot.'],
        example: ['All foreign visitors must submit a security clearance form 48 hours before '
            + 'entry. Visitors must not enter the ministry building without a visitor '
            + 'badge. They may use the side entrance if the main entrance is being '
            + 'prepared for a ceremony.',
          'First, you should confirm the date, the venue, and the participant list in '
            + 'writing — a phone call is not enough. You need to circulate the agenda at '
            + 'least five days before. You should also prepare the protocol brief early '
            + 'and send it to the delegation lead the evening before the session.',
          'A liaison officer can move a meeting to a different room, arrange '
            + 'interpretation, and change the catering. The officer cannot change the '
            + 'agenda, agree to a new participant from the other side, or move the '
            + 'meeting to a different day without authorization from a senior official.']
      }
    }
  ]
});
