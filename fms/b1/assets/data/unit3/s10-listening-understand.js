/* Unit 3 §10 — Part 3 - Listening.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s10', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Part 3 - Listening', part: '3', section: '10',
          lesson: 'Part 3 - Listening', title: 'Part 3 - Listening' },
  objective: 'By the end of Part 3 you can predict the tone and formality of an official '
        + 'statement, follow four excerpts from press briefings and bilateral '
        + 'statements, choose a correct professional answer to a difficult question '
        + 'from a journalist or diplomat, and write down five official phrases.',
  prev: 's09-listening-predict', prevLabel: 'Part 3 - Before you listen',
  next: 's11-listening-respond', nextLabel: 'Part 3 - Responding',
  cards: [
    {
      id: 'c1',
      covers: ['Part 3',
        'Audio 3.14'],
      ref: '3B',
      bookRef: 'Unit 3 · Part 3 · 3B',
      type: 'scene',
      title: 'Listening: Four Official Excerpts',
      instruction: 'Listen to four excerpts from different official contexts. For each '
        + 'excerpt, answer the questions.',
      scene: 'u3-3b',
      quiz: {
        type: 'shortanswer',
        title: 'After you listen',
        instruction: 'Listen to four excerpts from different official contexts. For each '
        + 'excerpt, answer the questions.',
        items: [{ q: '1. What is the main message of each excerpt?',
              accept: ['Excerpt 1: The ministry spokesperson announces that a comprehensive '
                  + 'bilateral cooperation framework has been signed with Germany, covering '
                  + 'rural infrastructure, water systems, and educational exchange, with a '
                  + 'joint technical working committee established to convene within sixty '
                  + 'days. Excerpt 2: The UN Resident Coordinator reports measurable progress '
                  + 'in the southern region — forty thousand tonnes delivered, four '
                  + 'coordination offices opened, fifteen thousand household applications in '
                  + 'process — and states that the programs cannot succeed without continued '
                  + 'international funding and political support. Excerpt 3: The German '
                  + 'Ambassador frames the agreed framework as a long-term commitment, '
                  + 'conditional on strong institutional frameworks, transparent '
                  + 'implementation, and civil society participation. Excerpt 4: The community '
                  + 'leader speaks for citizens abroad who are ready to return with skills and '
                  + 'capital, but who need clarity on the process and protection of their '
                  + 'rights.'],
              keys: ['message',
                'excerpt'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' },
            { q: '2. Where does each speaker use passive voice, and why?',
              accept: ['Excerpt 1 (Spokesperson): "has been signed," "has been established," "was '
                  + 'reached" — the passive foregrounds the institutional event and avoids '
                  + 'naming individuals, which is standard for an official announcement. '
                  + 'Excerpt 2 (Coordinator): "progress has been made," "have been delivered," '
                  + '"have been opened," "are being implemented" — passive for results, then '
                  + 'active for the appeal. Excerpt 3 (Ambassador): "has been agreed," "can '
                  + 'only be achieved when it is supported" — passive to present the agreement '
                  + 'as a joint act with no single author. Excerpt 4 (Community leader): almost '
                  + 'no passive at all — "I speak," "I left," "we want," "we are ready" — '
                  + 'because the speaker is claiming agency rather than reporting an '
                  + 'institution\'s work. The contrast is deliberate on the part of whoever '
                  + 'assembled the briefing — because three institutional voices followed by '
                  + 'one personal one is far more effective than four of either.'],
              keys: ['where',
                'speaker'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' },
            { q: '3. How does the speaker in Excerpt 4 use language differently from the '
                + 'institutional speakers? What effect does this create?',
              accept: ['The community leader uses active voice and the first person, which creates '
                  + 'a striking contrast with the institutional passive voice of the other '
                  + 'three speakers. The effect is that this sounds like a real citizen rather '
                  + 'than another institution. The direct language also creates more urgency '
                  + 'than a passive construction would. It also makes the institutional '
                  + 'speakers sound more credible by contrast, rather than less.'],
              keys: ['speaker',
                'excerpt'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' }],
        whyTitle: 'What each answer rests on'
      },
      after: '<b>Thinking guide.</b> The community leader uses ___ voice: "I speak," "I '
        + 'left," "we want to come back." This creates a striking contrast with the '
        + '___ passive voice of the institutional speakers. The effect is that this '
        + 'sounds like a ___ citizen voice, not another institution. The ___ language '
        + 'also creates more urgency than a passive construction would. (Think about: '
        + 'active / institutional / personal / direct)'
    }
  ]
});
