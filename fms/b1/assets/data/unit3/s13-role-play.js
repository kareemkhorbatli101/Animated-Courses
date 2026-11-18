/* Unit 3 §13 — Part 4 - Role play.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s13', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Part 4 - Role play', part: '4', section: '13',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'By the end of Part 4 you can answer questions at a press conference '
        + 'without conceding more than you intend, deliver an investment briefing, '
        + 'and stay both honest and forward-looking when a question is uncomfortable.',
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
        + 'handles three follow-up questions.<br>Korean delegation role '
        + 'cards:<br>Student B: Ask about the timeline for the first viable '
        + 'investment opportunities.<br>Student C: Ask about legal protections for '
        + 'foreign investors — specifically what happens if there is a '
        + 'dispute.<br>Student D: Ask about the sectors with the fastest return on '
        + 'investment from the ministry\'s perspective.<br>Guidance: Andrés uses '
        + 'passive voice throughout where appropriate ("frameworks have been '
        + 'established," "protections are guaranteed by") and remains concise, '
        + 'factual, and forward-looking.',
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
        example: ['B1 target — Diplomatic language acknowledges a difficulty without '
            + 'exaggerating it and keeps the focus on what is being done. Dishonest '
            + 'language denies a difficulty that exists or claims results that do not. '
            + 'The difference is factual — not stylistic. In practice the difference is '
            + 'also easy to test — because only one of the two survives being checked.',
          'B2 extension — A: Diplomatic language chooses which true thing to say '
            + 'first; dishonest language says something untrue. That is the whole '
            + 'distinction, and it is factual rather than stylistic. B: An example of '
            + 'diplomatic language from our role-play: "Capacity is being built alongside '
            + 'the programs — and that is a genuine constraint — here is the reporting '
            + 'mechanism." It is uncomfortable but accurate. C: An example of dishonest '
            + 'language would be "the institutional capacity is fully in place," which is '
            + 'simply false and would be disproved by the first quarterly report. D: The '
            + 'practical danger is that the second one is easier in the moment and '
            + 'destroys the relationship permanently. A journalist who catches one false '
            + 'claim will never use you as a source again, and a partner who catches one '
            + 'will discount everything in the file. D: The practical discipline, then, '
            + 'is to decide before the meeting which uncomfortable facts you are prepared '
            + 'to state plainly, so that you are not making that judgement under pressure '
            + 'with a microphone in front of you.',
          'B1 target — A: "Progress has been slower than we projected, and the '
            + 'mechanism to correct it is now in place." B: "That is a real constraint — '
            + 'here is what is being done about it and by when." C: "I would rather give '
            + 'you the accurate picture than an optimistic one." Each names the '
            + 'difficulty and then moves forward without minimizing it.',
          'B2 extension — A: "Progress has been slower than we projected, and the '
            + 'correction mechanism is now in place with a reporting date." B: "That is a '
            + 'real constraint. The joint technical committee was established precisely '
            + 'to address it and reports for the first time in March." C: "I would rather '
            + 'give you the accurate picture than an optimistic one — because you will '
            + 'check it and I would rather you checked and found me right." Each has the '
            + 'same three parts — specific acknowledgment, named mechanism, verifiable '
            + 'date — and each is usable in a press conference without further '
            + 'authorization.',
          'B1 target — It is correct when the question is genuinely outside your '
            + 'authority or when you do not have an accurate figure. It becomes evasion '
            + 'when you do know the answer, or when you give no route to someone who '
            + 'does. The professional version always includes a next step: who can '
            + 'answer, and by when. What converts it from evasion to professionalism is '
            + 'the second half — not the first.',
          'B2 extension — A: When the question is outside your authority, or when the '
            + 'honest answer is that you do not have an accurate figure in front of you, '
            + '"I do not have that information" is the only professional response '
            + 'available. An invented figure is unrecoverable. B: It becomes evasion the '
            + 'moment it is used to close a subject you could in fact address, or when it '
            + 'is offered with no route attached. C: The complete form therefore has two '
            + 'halves: the admission and the commitment — "I do not have that figure; I '
            + 'will have it sent to you by the end of the day and I will confirm who the '
            + 'right official is." D: Used that way it actually strengthens your position '
            + '— because it establishes that the figures you do give are reliable. E: It '
            + 'also protects your colleagues — because an invented figure becomes the '
            + 'ministry\'s figure the moment it is published.'],
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
