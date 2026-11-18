/* Unit 3 §11 — Part 3 - Responding.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s11', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Part 3 - Responding', part: '3', section: '11',
          lesson: 'Part 3 - Responding', title: 'Part 3 - Responding' },
  objective: 'By the end of Part 3 you can predict the tone and formality of an official '
        + 'statement, follow four excerpts from press briefings and bilateral '
        + 'statements, choose a correct professional answer to a difficult question '
        + 'from a journalist or diplomat, and write down five official phrases.',
  prev: 's10-listening-understand', prevLabel: 'Part 3 - Listening',
  next: 's12-dialogue-script', nextLabel: 'Part 4 - The script',
  cards: [
    {
      id: 'c1',
      covers: ['Part 3'],
      ref: '3C',
      bookRef: 'Unit 3 · Part 3 · 3C',
      type: 'quizset',
      title: 'Choose the Correct Official Response',
      instruction: 'Listen to each challenging statement from a journalist or diplomat and '
        + 'choose the correct professional ministry response:',
      display: 'cards',
      say: true,
      items: [{
          q: '1. Your development plans sound impressive on paper. But who is actually '
            + 'monitoring whether international funds are being used correctly?',
          options: [{ t: 'That is not something we can discuss publicly. These are internal matters.', ok: false,
              why: 'Refusing the question outright reads as concealment, which is the opposite '
              + 'of what it intends. The passive exists so that a ministry can state what '
              + 'has been established without naming individuals; being careful is not the '
              + 'same as saying nothing.' },
            { t: 'That is an important question. A joint technical monitoring committee has '
              + 'been established, which includes both government representatives and '
              + 'international partner observers. Quarterly implementation reports are '
              + 'published and available through the ministry\'s official communications. '
              + 'We welcome accountability — it strengthens the programs.', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 3.15 - and it does the two things the situation needs.' }]
        },
        {
          q: '2. There are reports that the returning-citizens program is very slow and '
            + 'that people are being turned away without explanation.',
          options: [{ t: 'Those reports are incorrect. The program is working very well.', ok: false,
              why: 'A flat denial invites the journalist to produce the evidence, and the '
              + 'exchange is then about the evidence rather than the policy. Acknowledging '
              + 'the concern and describing the mechanism answers the question without '
              + 'accepting the premise.' },
            { t: 'We take that feedback seriously. The return program has been established '
              + 'and is being expanded, but we acknowledge that processing times need to '
              + 'improve. Applications are handled by the Consular Section, and anyone who '
              + 'has experienced a difficulty is welcome to contact our return assistance '
              + 'office directly — I can provide that contact information.', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 3.15 - and it does the two things the situation needs.' }]
        },
        {
          q: '3. What is your government doing about transparency in the territorial '
            + 'development programs? Is any independent process being established?',
          options: [{ t: 'That is an important and legitimate question. The official position on '
              + 'transparency processes has been stated by the Foreign Minister — I am '
              + 'happy to direct you to that statement. For details beyond the official '
              + 'position, I would recommend submitting a formal inquiry to the '
              + 'spokesperson\'s office, which I can help facilitate.', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 3.15 - and it does the two things the situation needs.' },
            { t: 'We do not discuss that subject. Please ask a different question.', ok: false,
              why: 'Telling a correspondent to ask something else is itself the story. A '
              + 'legitimate question gets the official position - even when the position is '
              + 'that the matter is still under procedure.' }]
        },
        {
          q: '4. When will the new trade preference scheme be ratified by all parties?',
          options: [{ t: 'Very soon. We expect the agreement to be ratified this year.', ok: false,
              why: 'It promises a date the ministry does not control. Ratification follows '
              + 'parliamentary procedure, and "this year", once said on the record, is a '
              + 'commitment somebody will quote back when the year ends.' },
            { t: 'Ratification follows established parliamentary procedure, and that process '
              + 'is ongoing. I cannot speculate on timelines — that would be premature. '
              + 'What I can say is that we are committed to demonstrating through concrete '
              + 'actions — the programs you have heard about today — that the conditions '
              + 'for a durable partnership are being built.', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 3.15 - and it does the two things the situation needs.' }]
        }]
    },
    {
      id: 'c2',
      covers: ['Part 3'],
      ref: '3D',
      bookRef: 'Unit 3 · Part 3 · 3D',
      type: 'flashcards',
      title: 'Useful Phrases Box',
      instruction: 'Listen to and write down five official language phrases used in press '
        + 'briefings and bilateral statements. Then practice saying them aloud with a '
        + 'partner, focusing on a calm, authoritative tone.',
      scene: 'phrases-3',
      items: [{ id: 'p1', num: 1, label: '________________________________________________', at: [26, 22] },
        { id: 'p2', num: 2, label: '________________________________________________', at: [74, 22] },
        { id: 'p3', num: 3, label: '________________________________________________', at: [26, 48] },
        { id: 'p4', num: 4, label: '________________________________________________', at: [74, 48] },
        { id: 'p5', num: 5, label: '________________________________________________', at: [26, 74] }],
      readerNote: 'Each phrase is read by the officer who uses it in the recording for this '
        + 'part.'
    }
  ]
});
