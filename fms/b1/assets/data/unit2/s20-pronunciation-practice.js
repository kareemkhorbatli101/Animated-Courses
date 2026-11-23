/* Unit 2 §20 — Part 7 - Pronunciation.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s20', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 7 - Pronunciation', part: '7', section: '20',
          lesson: 'Part 7 - Pronunciation', title: 'Part 7 - Pronunciation' },
  objective: 'By the end of Part 7 you can stress this unit\'s meeting and coordination '
        + 'vocabulary correctly, use the intonation that keeps meeting-room language '
        + 'formal rather than abrupt, and record a meeting opening on a topic from '
        + 'your own work.',
  prev: 's19-stress', prevLabel: 'Part 7 - Word stress',
  next: 's21-culture-meetings', nextLabel: 'Part 8 - First meetings',
  cards: [
    {
      id: 'c1',
      covers: ['Part 7',
        'Audio 2.30'],
      ref: '7C',
      bookRef: 'Unit 2 · Part 7 · 7C',
      type: 'scene',
      title: 'Controlled Meeting-Opening Dialogue',
      instruction: 'Partner activity: Read the dialogue below naturally, paying attention to '
        + 'formal intonation and word stress. Then repeat the dialogue using your own '
        + 'name and a meeting topic relevant to your own work.',
      scene: 'u2-7c'
    },
    {
      id: 'c2',
      covers: ['Part 7'],
      ref: '7D',
      bookRef: 'Unit 2 · Part 7 · 7D',
      type: 'report',
      title: 'Practice and Record',
      instruction: 'Record a 30-second formal meeting opening statement. Include:<br>• A '
        + 'formal welcome to the visiting delegation<br>• Your name and role<br>• A '
        + 'brief statement of the meeting\'s purpose<br>• An invitation to '
        + 'begin<br>Listen back and check:<br>• Was your intonation falling at the '
        + 'end of declarative statements?<br>• Did you stress key content words: '
        + 'names, dates, the meeting title?<br>• Was your pace steady and calm — not '
        + 'rushed?<br>• Did you sound both authoritative and welcoming?<br>Record a '
        + 'second version if needed and compare.',
      minWords: 40,
      placeholder: 'I would like to say that…',
      stems: ['I would like to say that…'],
      coach: {
        title: 'Compare with the book',
        target: 'Modal verbs for requests and arrangements',
        task: 'Record a 30-second formal meeting opening statement. Include: • A formal '
        + 'welcome to the visiting delegation • Your name and role • A brief '
        + 'statement of the meeting\'s purpose • An invitation to begin Listen back '
        + 'and check: • Was your intonation falling at the end of declarative '
        + 'statements? • Did you stress key content words: names, dates, the meeting '
        + 'title? • Was your pace steady and calm — not rushed? • Did you sound both '
        + 'authoritative and welcoming? Record a second version if needed and '
        + 'compare.',
        parts: ['Record a 30-second formal meeting opening statement. Include: • A formal '
          + 'welcome to the visiting delegation • Your name and role • A brief '
          + 'statement of the meeting\'s purpose • An invitation to begin Listen back '
          + 'and check: • Was your intonation falling at the end of declarative '
          + 'statements? • Did you stress key content words: names, dates, the meeting '
          + 'title? • Was your pace steady and calm — not rushed? • Did you sound both '
          + 'authoritative and welcoming? Record a second version if needed and '
          + 'compare.'],
        example: ['Stress: your INSTITUTION, the PARTNER\'S name, the MEETING title, and the '
            + 'word BEGIN. Link: \'on_be-half_of.\' Tone: authoritative and welcoming at '
            + 'the same time. Pace: slower than conversation. One breath per sentence, '
            + 'with a clear pause before the invitation to begin.',
          'Declarative statements should go DOWN at the end. This is the most common '
            + 'mistake for speakers whose first language uses rising patterns: a welcome '
            + 'delivered with a rising tone sounds like a question and undercuts the '
            + 'authority of the chair. Record yourself, listen only to the final word of '
            + 'each sentence, and check that it falls.',
          'Authority comes from a steady pace, clear stress on content words, and '
            + 'falling endings — not from volume. Check three things in the recording: '
            + 'did you rush the meeting title, did any sentence end with a rise, and did '
            + 'you pause before inviting the delegation to begin? Warmth and authority '
            + 'are not in tension; both come from control.'],
        criteria: [{ t: 'I answered the question that was actually asked, not a nearby one.' },
          { t: 'I used this unit\'s language: Modal verbs for requests and arrangements.' },
          { t: 'I gave a reason as well as a fact — because…, so that…' },
          { t: 'I used the words this unit teaches, not a translation of my own.' }]
      },
      aiCheck: {
        task: 'Record a 30-second formal meeting opening statement. Include: • A formal '
        + 'welcome to the visiting delegation • Your name and role • A brief '
        + 'statement of the meeting\'s purpose • An invitation to begin Listen back '
        + 'and check: • Was your intonation falling at the end of declarative '
        + 'statements? • Did you stress key content words: names, dates, the meeting '
        + 'title? • Was your pace steady and calm — not rushed? • Did you sound both '
        + 'authoritative and welcoming? Record a second version if needed and '
        + 'compare.',
        grammar: 'Modal verbs for requests and arrangements',
        mode: 'spoken',
        vocab: ['Agenda',
          'Communiqué',
          'Memorandum of Understanding',
          'Working Group',
          'Protocol Brief',
          'Aide-Mémoire',
          'Delegation Lead',
          'Header / Meeting Details',
          'Participant List',
          'Numbered Agenda Items with Timing']
      }
    }
  ]
});
