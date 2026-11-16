/* Unit 3 §15 — Part 6 - Writing, the model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s15', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 6 - Writing, the model', part: '6', section: '15',
          lesson: 'Part 6 - Writing, the model', title: 'Part 6 - Writing, the model' },
  objective: 'Work through Part 6 - Writing, the model of unit 3.',
  video: 'u03v15',
  prev: 's14-reading-comprehension', prevLabel: 'Part 5 - Reading, comprehension',
  next: 's16-management-file-dialogue', nextLabel: 'Part 7 - Management File, dialogue',
  cards: [
    {
      id: 'c1', covers: ['Part 6'], ref: '6A',
      bookRef: 'Unit 3 · Part 6', type: 'writer',
      title: 'Workshop Safety Rules (50–70 words)',
      instruction: 'Write five safety rules for a workshop. Use imperatives and sequencers.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write five safety rules for a workshop. Use imperatives and sequencers.',
        words: ['First, Then, Next, Finally', 'Always… / Never…', 'wear… / keep… / chock… / use…', 'If you…, stop and…'],
        must: ['imperatives used?', 'sequencers used?', 'at least one Never/Don’t?', '50–70 words?', 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.'],
        planPlaceholder: 'First, always… Then… When you…, … Never… If…, …'
      },
      aiCheck: {
        task: 'Write five safety rules for a workshop. Use imperatives and sequencers.',
        grammar: 'Imperatives, and the order of the steps',
        reader: 'the teacher',
        must: ['imperatives used?', 'sequencers used?', 'at least one Never/Don’t?', '50–70 words?', 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Imperatives, and the order of the steps',
        minWords: 40,
        taught: ['The tools on the board, the rules that keep a workshop safe, and how to '
        + 'give an instruction in the right order.'],
        task: 'Write five safety rules for a workshop. Use imperatives and sequencers.',
        parts: ['imperatives used?', 'sequencers used?', 'at least one Never/Don’t?'],
        example: ['First, always… Then… When you…, … Never… If…, …'],
        criteria: [{ t: 'imperatives used?' },
                   { t: 'sequencers used?' },
                   { t: 'at least one Never/Don’t?' },
                   { t: '50–70 words?' },
                   { t: 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.' },
                   { t: 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 6'], ref: '6B',
      bookRef: 'Unit 3 · Part 6', type: 'writer',
      title: 'Why Safety Matters (50–70 words)',
      instruction: 'Write why safety is important in a workshop. Give reasons.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write why safety is important in a workshop. Give reasons.',
        words: ['… is important because…', 'heavy / dangerous', 'protect the mechanics', 'an accident costs a lot'],
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write why safety is important in a workshop. Give reasons.',
        grammar: 'Imperatives, and the order of the steps',
        reader: 'the teacher',
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Imperatives, and the order of the steps',
        minWords: 40,
        taught: ['The tools on the board, the rules that keep a workshop safe, and how to '
        + 'give an instruction in the right order.'],
        task: 'Write why safety is important in a workshop. Give reasons.',
        parts: ['a clear opinion?', 'two or three reasons?', '50–70 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear opinion?' },
                   { t: 'two or three reasons?' },
                   { t: '50–70 words?' },
                   { t: 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.' },
                   { t: 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.' },
                   { t: 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 6'], ref: '6C',
      bookRef: 'Unit 3 · Part 6', type: 'writer',
      title: 'A Safety Notice (40–60 words)',
      instruction: 'Write a short safety notice to put on the workshop wall. Use imperatives.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write a short safety notice to put on the workshop wall. Use imperatives.',
        words: [],
        must: ['clear imperatives?', 'easy to read?', '40–60 words?', 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write a short safety notice to put on the workshop wall. Use imperatives.',
        grammar: 'Imperatives, and the order of the steps',
        reader: 'the teacher',
        must: ['clear imperatives?', 'easy to read?', '40–60 words?', 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Imperatives, and the order of the steps',
        minWords: 40,
        taught: ['The tools on the board, the rules that keep a workshop safe, and how to '
        + 'give an instruction in the right order.'],
        task: 'Write a short safety notice to put on the workshop wall. Use imperatives.',
        parts: ['clear imperatives?', 'easy to read?', '40–60 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'clear imperatives?' },
                   { t: 'easy to read?' },
                   { t: '40–60 words?' },
                   { t: 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.' },
                   { t: 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.' },
                   { t: 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.' }]
      }
    },
    {
      id: 'c4', covers: ['Part 6'], ref: '6D',
      bookRef: 'Unit 3 · Part 6', type: 'writer',
      title: 'Reflection — Safety Matters (40–60 words)',
      instruction: 'Write about a time when safety was important, at work or at home.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write about a time when safety was important, at work or at home.',
        words: [],
        must: ['a clear story?', 'imperatives or a safety rule?', '40–60 words?', 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write about a time when safety was important, at work or at home.',
        grammar: 'Imperatives, and the order of the steps',
        reader: 'the teacher',
        must: ['a clear story?', 'imperatives or a safety rule?', '40–60 words?', 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Imperatives, and the order of the steps',
        minWords: 40,
        taught: ['The tools on the board, the rules that keep a workshop safe, and how to '
        + 'give an instruction in the right order.'],
        task: 'Write about a time when safety was important, at work or at home.',
        parts: ['a clear story?', 'imperatives or a safety rule?', '40–60 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear story?' },
                   { t: 'imperatives or a safety rule?' },
                   { t: '40–60 words?' },
                   { t: 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.' },
                   { t: 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.' },
                   { t: 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.' }]
      }
    }
  ]
});
