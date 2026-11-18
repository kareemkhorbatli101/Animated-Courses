/* Unit 4 §10 — Part 3 - Listening.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u4-s10', {
  book: { source: 'FMS B1.1', ref: 'Unit 4 · Part 3 - Listening', part: '3', section: '10',
          lesson: 'Part 3 - Listening', title: 'Part 3 - Listening' },
  objective: 'By the end of Part 3 you can predict the future language a formal '
        + 'cooperation context will use, follow four excerpts from bilateral events '
        + 'and planning sessions, choose a correct formal response, and write down '
        + 'five cooperation phrases.',
  prev: 's09-listening-predict', prevLabel: 'Part 3 - Before you listen',
  next: 's11-listening-respond', nextLabel: 'Part 3 - Responding',
  cards: [
    {
      id: 'c1',
      covers: ['Part 3',
        'Audio 4.14'],
      ref: '3B',
      bookRef: 'Unit 4 · Part 3 · 3B',
      type: 'scene',
      title: 'Listening: Four Formal Cooperation Contexts',
      instruction: 'Listen to four excerpts from different formal diplomatic contexts. For '
        + 'each excerpt, answer the questions.',
      scene: 'u4-3b',
      quiz: {
        type: 'shortanswer',
        title: 'After you listen',
        instruction: 'Listen to four excerpts from different formal diplomatic contexts. For '
        + 'each excerpt, answer the questions.',
        items: [{ q: '1. What future plans or commitments are mentioned in each excerpt?',
              accept: ['Excerpt 1: A joint technical committee is going to meet within sixty days; '
                  + 'the MoU will create a structured framework for cooperation in '
                  + 'infrastructure, education, and trade; the partnership will grow and '
                  + 'deepen. Excerpt 2: Modernization programmes are going to be implemented '
                  + 'over three years; the ministry shall release an investment opportunity '
                  + 'catalogue within thirty days; the delegation is meeting more than forty '
                  + 'delegations during the conference. Excerpt 3: The signed framework will '
                  + 'define the next chapter of the relationship; the programmes they are going '
                  + 'to implement in culture, education, and economic partnership will benefit '
                  + 'both peoples. Excerpt 4: The first technical committee meeting is on 15 '
                  + 'September; the investment catalogue is being published on 30 August and is '
                  + 'going to include twelve priority projects; the minister\'s office is being '
                  + 'briefed on 20 August; formal invitations shall be issued by the end of the '
                  + 'month.'],
              keys: ['future',
                'plans'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' },
            { q: '2. What is the difference in future language between the formal public '
                + 'speeches (Excerpts 1–3) and the internal planning session (Excerpt 4)?',
              accept: ['In the public speeches (1–3), future forms carry rhetorical weight: will '
                  + 'for vision and significance, going to for programmes already decided, and '
                  + 'shall once for a formal institutional commitment. Dates are rare and '
                  + 'deliberately so. In the internal planning session (4), the dominant form '
                  + 'is Present Continuous and every sentence has a date attached — because the '
                  + 'purpose is coordination rather than persuasion. Going to appears only for '
                  + 'content already decided but not yet released, and shall only for the '
                  + 'formal act of issuing invitations. The grammar follows the function '
                  + 'exactly. The practical lesson for a drafter is that the public register '
                  + 'tolerates vagueness about timing and the internal register does not, so '
                  + 'the same content has to be rewritten rather than reused.'],
              keys: ['difference',
                'future'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' },
            { q: '3. What does Aigerim\'s planning session language tell us about '
                + 'professional coordination in a diplomatic context?',
              accept: ['Aigerim uses Present Continuous for everything that is confirmed — "we are '
                  + 'holding," "we are publishing," "we are briefing." She reserves going to '
                  + 'for the catalogue contents and shall for the formal invitations. This '
                  + 'precision signals that her team is reliable and professionally '
                  + 'coordinated.'],
              keys: ['aigerim',
                'planning'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' }],
        whyTitle: 'What each answer rests on'
      },
      after: '<b>Thinking guide.</b> Aigerim uses ___ throughout for everything that is '
        + 'confirmed — "we are holding," "we are publishing." She reserves ___ for '
        + 'the catalog contents (already decided but not yet released) and ___ for '
        + 'the formal institutional commitment of the invitations. This precision '
        + 'signals that her team is ___ and ___. (Think about: Present Continuous / '
        + 'going to / shall / reliable / professionally coordinated)'
    }
  ]
});
