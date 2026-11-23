/* Unit 5 §1 — Warm Up.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s01', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Warm Up', part: '0', section: '1',
          lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'By the end of this Warm Up you can say what economic diplomacy opens doors '
        + 'to, name your country\'s main investment partners and priority sectors, '
        + 'and use future forms accurately again after Unit 4.',
  next: 's02-fluency', nextLabel: 'Warm Up - fluency',
  cards: [
    {
      id: 'c1',
      covers: ['Warm Up'],
      ref: 'W-A',
      bookRef: 'Unit 5 · Warm Up · W-A',
      type: 'discuss',
      title: 'Pair Discussion – Opening Doors',
      instruction: 'Talk with a partner about the following: (Aim for 3–4 sentences per '
        + 'answer.)',
      minWords: 12,
      questions: [{ q: 'What do you already know about your country\'s main economic sectors that '
          + 'might attract foreign investment? Name at least three and briefly explain '
          + 'one.' },
        { q: 'What do you think is the biggest challenge for a foreign investor '
          + 'considering your country right now? What can the Ministry of Foreign '
          + 'Affairs do to address it?' },
        { q: 'Complete with your partner: "My country has the potential to attract '
          + 'significant investment in ___, ___, and ___ because ___." Then share your '
          + 'reasoning with the class.' }],
      ideas: ['Start with what you know for certain, then say what you think — one '
          + 'sentence each.',
        'Use this unit\'s language at least once: Conditionals and the language of '
          + 'commitment.',
        'Words from this unit you can use: Free zone, Tax incentive, Feasibility '
          + 'study, Letter of intent, Investment climate, Due diligence.',
        'Say WHY as well as WHAT — because…, so that…, which means…'],
      okMsg: 'Good. Open the notes below and compare with the book\'s answers.',
      coach: {
        title: 'Compare with the book',
        target: 'Conditionals and the language of commitment',
        task: 'Talk with a partner about the following: (Aim for 3–4 sentences per '
        + 'answer.)',
        parts: ['What do you already know about your country\'s main economic sectors that '
          + 'might attract foreign investment? Name at least three and briefly explain '
          + 'one.',
        'What do you think is the biggest challenge for a foreign investor '
          + 'considering your country right now? What can the Ministry of Foreign '
          + 'Affairs do to address it?',
        'Complete with your partner: "My country has the potential to attract '
          + 'significant investment in ___, ___, and ___ because ___." Then share your '
          + 'reasoning with the class.'],
        example: ['B1 target — My country has opportunities in infrastructure, energy, and '
            + 'agriculture. Agriculture is the clearest: we have land, water, and a '
            + 'growing domestic market, and processing capacity is still very limited.',
          'B2 extension — My country has significant potential in infrastructure and '
            + 'transportation, energy — both conventional and renewable — and agriculture '
            + 'and food security. Agriculture is the strongest case: the land and water '
            + 'exist, domestic demand is growing, and almost no value is added locally, '
            + 'so a processing investment captures a margin that currently leaves the '
            + 'country entirely.',
          'B1 target — The biggest challenge is legal certainty. Investors want to '
            + 'know what happens if something goes wrong — not only what is promised. The '
            + 'ministry can address it by providing the legal framework in writing, '
            + 'early, before being asked.',
          'B2 extension — The most significant challenge is not opportunity but '
            + 'predictability — an investor\'s first question is what happens if '
            + 'something goes wrong. The ministry can address it concretely: provide the '
            + 'investment law, the free zone regulations, the profit repatriation '
            + 'provisions, and the arbitration clause in writing at the first meeting '
            + 'rather than on request. Sending the documents before they are asked for '
            + 'changes the whole character of the conversation — because it signals that '
            + 'we expect to be checked.',
          'My country has the potential to attract significant investment in '
            + 'agriculture, energy, and transport infrastructure because the demand is '
            + 'domestic and growing, the inputs already exist here, and the regulatory '
            + 'framework now has an arbitration route that an international investor can '
            + 'rely on.'],
        criteria: [{ t: 'What do you already know about your country\'s main economic sectors that '
            + 'might attract foreign investment? Name at least three and briefly explain '
            + 'one.' },
          { t: 'What do you think is the biggest challenge for a foreign investor '
            + 'considering your country right now? What can the Ministry of Foreign '
            + 'Affairs do to address it?' },
          { t: 'Complete with your partner: "My country has the potential to attract '
            + 'significant investment in ___, ___, and ___ because ___." Then share your '
            + 'reasoning with the class.' }]
      }
    },
    {
      id: 'c2',
      covers: ['Warm Up',
        'Audio 5.2'],
      ref: 'W-B',
      bookRef: 'Unit 5 · Warm Up · W-B',
      type: 'scene',
      title: 'Group Brainstorm – Your Country\'s Investment Partners',
      instruction: 'In small groups, discuss and list the following. Share your findings with '
        + 'the class. (Aim for 3–4 sentences when you share.)',
      scene: 'u5-wb',
      quiz: {
        id: 'c2-quiz',
        ref: 'W-B',
        bookRef: 'Unit 5 · Warm Up · W-B',
        type: 'discuss',
        title: 'After you listen',
        instruction: 'In small groups, discuss and list the following. Share your findings with '
        + 'the class. (Aim for 3–4 sentences when you share.)',
        questions: [{
              q: 'Name five types of foreign investor or partner who might come to your '
                + 'country now and what each one is primarily looking for.',
              model: '1. Infrastructure companies — looking for legal certainty and a clear '
                + 'approval timeline. 2. Sovereign funds — looking for scale and a long '
                + 'horizon. 3. Development banks — looking for oversight and measurable '
                + 'impact. 4. Technology companies — looking for a digital regulatory '
                + 'framework. 5. UN agencies — looking for co-design — not commercial return.',
              minWords: 6,
              rows: 3
            }],
        okMsg: 'Saved. Press “Show me” to compare with the book\'s answers.'
      }
    }
  ]
});
