/* Unit 3 §13 — Part 4 - Role play.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s13', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Part 4 - Role play', part: '4', section: '13',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'Work through Part 4 - Role play of unit 3.',
  prev: 's12-dialogue-script', prevLabel: 'Part 4 - The script',
  next: 's14-reading-profiles', nextLabel: 'Part 5 - Reading',
  cards: [
    {
      id: 'c1',
      covers: ['Part 4'],
      ref: '4B',
      bookRef: 'Unit 3 · Part 4 · 4B',
      type: 'report',
      title: 'Role-Play: Investment Briefing',
      instruction: 'Work in groups of four. Student A is Andrés Gaviria, Economic Affairs '
        + 'Specialist. Students B, C, and D are members of a Korean trade delegation. '
        + 'Andrés presents the national infrastructure investment framework, then '
        + 'handles three follow-up questions.Korean delegation role cards:Student B: '
        + 'Ask about the timeline for the first viable investment '
        + 'opportunities.Student C: Ask about legal protections for foreign investors '
        + '— specifically what happens if there is a dispute.Student D: Ask about the '
        + 'sectors with the fastest return on investment from the ministry\'s '
        + 'perspective.Guidance: Andrés uses passive voice throughout where '
        + 'appropriate ("frameworks have been established," "protections are '
        + 'guaranteed by") and remains concise, factual, and forward-looking.',
      minWords: 40,
      placeholder: 'I would like to say that…',
      stems: ['I would like to say that…']
    },
    {
      id: 'c2',
      covers: ['Part 4'],
      ref: '4C',
      bookRef: 'Unit 3 · Part 4 · 4C',
      type: 'discuss',
      title: 'Discussion: Staying Honest and Forward-Looking',
      instruction: 'In a small group, discuss the following questions based on the role-plays '
        + 'in this section. (Aim for 3–4 sentences per answer.)',
      minWords: 12,
      questions: [{ q: 'What is the difference between "diplomatic language" and "dishonest '
          + 'language"? Can you give an example of each from your role-plays?' },
        { q: 'What phrases from this unit would you use to acknowledge a real difficulty '
          + 'while staying forward-looking? Practice three with your partner.' },
        { q: 'When is it professionally correct to say "I don\'t have that information" '
          + 'rather than attempt an answer?' }],
      ideas: ['What is the difference between "diplomatic language" and "dishonest '
          + 'language"? Can you give an example of each from your role-plays?',
        'What phrases from this unit would you use to acknowledge a real difficulty '
          + 'while staying forward-looking? Practice three with your partner.',
        'When is it professionally correct to say "I don\'t have that information" '
          + 'rather than attempt an answer?'],
      okMsg: 'Good. Open the notes below and compare with the book\'s answers.',
      coach: {
        title: 'Compare with the book',
        target: 'Explaining and describing: the passive and reporting verbs',
        task: 'In a small group, discuss the following questions based on the role-plays '
        + 'in this section. (Aim for 3–4 sentences per answer.)',
        parts: ['What is the difference between "diplomatic language" and "dishonest '
          + 'language"? Can you give an example of each from your role-plays?',
        'What phrases from this unit would you use to acknowledge a real difficulty '
          + 'while staying forward-looking? Practice three with your partner.',
        'When is it professionally correct to say "I don\'t have that information" '
          + 'rather than attempt an answer?'],
        example: ['Diplomatic language acknowledges a difficulty without exaggerating it and '
            + 'keeps the focus on what is being done. Dishonest language denies a '
            + 'difficulty that exists or claims results that do not. The difference is '
            + 'factual — not stylistic. In practice the difference is also easy to test — '
            + 'because only one of the two survives being checked.',
          'A: "Progress has been slower than we projected, and the mechanism to '
            + 'correct it is now in place." B: "That is a real constraint — here is what '
            + 'is being done about it and by when." C: "I would rather give you the '
            + 'accurate picture than an optimistic one." Each names the difficulty and '
            + 'then moves forward without minimizing it.',
          'It is correct when the question is genuinely outside your authority or '
            + 'when you do not have an accurate figure. It becomes evasion when you do '
            + 'know the answer, or when you give no route to someone who does. The '
            + 'professional version always includes a next step: who can answer, and by '
            + 'when. What converts it from evasion to professionalism is the second half '
            + '— not the first.'],
        criteria: [{ t: 'What is the difference between "diplomatic language" and "dishonest '
            + 'language"? Can you give an example of each from your role-plays?' },
          { t: 'What phrases from this unit would you use to acknowledge a real difficulty '
            + 'while staying forward-looking? Practice three with your partner.' },
          { t: 'When is it professionally correct to say "I don\'t have that information" '
            + 'rather than attempt an answer?' }]
      }
    }
  ]
});
