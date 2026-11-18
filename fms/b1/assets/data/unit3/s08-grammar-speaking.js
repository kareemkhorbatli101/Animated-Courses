/* Unit 3 §8 — Part 2 - Grammar, speaking.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s08', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Part 2 - Grammar, speaking', part: '2', section: '8',
          lesson: 'Part 2 - Grammar, speaking', title: 'Part 2 - Grammar, speaking' },
  objective: 'By the end of Part 2 you can tell the active voice from the passive in '
        + 'official writing, form the passive in the tenses this unit uses, correct '
        + 'passive errors - including recognising the sentence that is already '
        + 'correct and explaining why - and use the passive to say what a ministry '
        + 'has done without naming who did it.',
  prev: 's07-grammar-practice', prevLabel: 'Part 2 - Grammar, practice',
  next: 's09-listening-predict', nextLabel: 'Part 3 - Before you listen',
  cards: [
    {
      id: 'c1',
      covers: ['Part 2'],
      ref: '2E',
      bookRef: 'Unit 3 · Part 2 · 2E',
      type: 'report',
      title: 'Speaking Practice',
      instruction: 'In pairs, use passive voice to complete these ministry speaking tasks. '
        + '(Aim for 3–4 sentences per answer.)',
      minWords: 40,
      placeholder: 'Describe three things that have been done in your country\'s diplomatic '
        + 'relations over the past eighteen months using the present perfect passive.',
      stems: ['Describe three things that have been done in your country\'s diplomatic '
          + 'relations over the past eighteen months using the present perfect passive.',
        'Describe what is currently being done in your country using the present '
          + 'continuous passive.',
        'Explain one past achievement and one ongoing action using passive voice, '
          + 'then invite a partner to add two more using their own words.'],
      coach: {
        title: 'Compare with the book',
        target: 'Explaining and describing: the passive and reporting verbs',
        task: 'In pairs, use passive voice to complete these ministry speaking tasks. '
        + '(Aim for 3–4 sentences per answer.)',
        parts: ['Describe three things that have been done in your country\'s diplomatic '
          + 'relations over the past eighteen months using the present perfect passive.',
        'Describe what is currently being done in your country using the present '
          + 'continuous passive.',
        'Explain one past achievement and one ongoing action using passive voice, '
          + 'then invite a partner to add two more using their own words.'],
        example: ['Diplomatic ties have been established or upgraded with more than twenty '
            + 'partner countries since 2024. Bilateral cooperation frameworks have been '
            + 'signed with European, Asian, and American partners in infrastructure, '
            + 'trade, and cultural exchange. A multilateral coordination committee has '
            + 'been established to oversee priority programs.',
          'Development programs in road networks and water infrastructure are '
            + 'currently being coordinated with German and French partners. '
            + 'Returning-citizen documentation is being processed by the Consular Affairs '
            + 'Section in partnership with IOM. A new investment facilitation framework '
            + 'is being developed by the Economic Affairs Office.',
          'Past achievement: The bilateral Infrastructure Cooperation Agreement with '
            + 'Germany was signed in March 2025. Ongoing action: The ministry\'s '
            + 'diplomatic visa processing system is currently being upgraded to reduce '
            + 'waiting times. [Partner continues with their own examples.]']
      }
    }
  ]
});
