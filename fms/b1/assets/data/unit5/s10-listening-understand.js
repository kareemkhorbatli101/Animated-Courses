/* Unit 5 §10 — Part 3 - Listening.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s10', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Part 3 - Listening', part: '3', section: '10',
          lesson: 'Part 3 - Listening', title: 'Part 3 - Listening' },
  objective: 'Work through Part 3 - Listening of unit 5.',
  prev: 's09-listening-predict', prevLabel: 'Part 3 - Before you listen',
  next: 's11-listening-respond', nextLabel: 'Part 3 - Responding',
  cards: [
    {
      id: 'c1',
      covers: ['Part 3',
        'Audio 5.14'],
      ref: '3B',
      bookRef: 'Unit 5 · Part 3 · 3B',
      type: 'scene',
      title: 'First Listening: Understanding the Investment Conversations',
      instruction: 'Listen carefully to the four investment diplomacy scenarios. For each '
        + 'dialogue, answer the questions that follow.',
      scene: 'u5-3b',
      quiz: {
        type: 'shortanswer',
        title: 'After you listen',
        instruction: 'Listen carefully to the four investment diplomacy scenarios. For each '
        + 'dialogue, answer the questions that follow.',
        items: [{ q: '1. In Dialogue 1, what does Dawit promise Klaus will happen if the '
                + 'feasibility study confirms viability?',
              accept: ['If the feasibility study confirms technical and financial viability, Dawit '
                  + 'promises that a dedicated case officer from the Investment Promotion '
                  + 'Agency will be assigned to the project and the approval process will be '
                  + 'fast-tracked, with a target of thirty days.'],
              keys: ['dialogue',
                'dawit'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' },
            { q: '2. In Dialogue 2, how does the ministry officer respond to the investor\'s '
                + 'concern about political risk?',
              accept: ['The officer responds directly and treats the concern as legitimate — "that '
                  + 'is exactly the right question to ask." She uses First Conditional for the '
                  + 'real protection: if Nadia signs a registered investment agreement, she is '
                  + 'covered by national investment law, including an international arbitration '
                  + 'clause giving recourse through international courts. She then concedes '
                  + 'honestly that the framework has not yet been tested, and uses Second '
                  + 'Conditional to make the point that carries the weight: if the ministry did '
                  + 'not have full confidence in the framework itself, it would not be inviting '
                  + 'serious investors to commit to it.'],
              keys: ['dialogue',
                'ministry'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' },
            { q: '3. In Dialogue 3, what specific commitment does Dawit make to Klaus on the '
                + 'phone?',
              accept: ['Dawit commits to sending Klaus the legal summary in writing by the '
                  + 'following morning, covering investment law, free zone regulations, profit '
                  + 'repatriation, and the arbitration clause. He also commits that if the '
                  + 'board approves on Monday, he will arrange the Investment Promotion Agency '
                  + 'meeting for Tuesday or Wednesday. He also commits that if Klaus has '
                  + 'questions after reading the summary, he should call directly rather than '
                  + 'wait for the next meeting.'],
              keys: ['dialogue',
                'specific'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' },
            { q: '4. In Dialogue 4, what two things does the Minister say the country is '
                + 'committed to in the joint press statement?',
              accept: ['The Minister states that the country is committed to providing full legal '
                  + 'protection for every legitimate foreign investment — and that it will be a '
                  + 'partner that respects its commitments. Klaus reciprocates on behalf of '
                  + 'Richter Infrastructure GmbH with a commitment to bring the company\'s full '
                  + 'technical expertise to the country\'s development.'],
              keys: ['dialogue',
                'things'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' }],
        whyTitle: 'What each answer rests on'
      },
      after: '<b>Thinking guide.</b> The officer does not dismiss the concern. Instead, '
        + 'she addresses it ___ with conditional language. She uses the ___ '
        + 'Conditional for the guarantee ("If you sign with us...") and the ___ '
        + 'Conditional for the hypothetical ("If we did not have confidence in this '
        + 'framework..."). (Think about: directly / First / Second)'
    }
  ]
});
