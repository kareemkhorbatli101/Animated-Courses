/* Unit 1 §3 — Vocabulary (2).

   Every question, item, option and model is the book's own text. */
JRN.page('u1-s03', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 1 · Vocabulary (2)', part: '1', section: '3',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary (2)', title: 'Part 1 · Vocabulary (2)' },
  objective: 'By the end of Part 1 you can use this unit’s newsroom roles and craft '
  + 'words correctly, tell a field job from a desk job and say why, and write '
  + 'a short paragraph using at least five of them.',
  cards: [
    {
      id: 'c1',
      ref: '1D',
      bookRef: 'Unit 1 · 1D',
      visual: { spot: 'newsroom-plan' },
      type: 'cloze',
      title: 'Field or desk?',
      instruction: 'Put each role in the correct group. Field = goes out to where the story '
  + 'is. Desk = works on the story inside the newsroom.<br>Roles: reporter, '
  + 'desk editor, photojournalist, sub-editor, correspondent, picture editor.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Field (goes out to the story): [[1]]'
        + '<br>'
        + '2. Desk (works on it inside): [[2]]'
        + '</div>',
      answers: {
        '1': [],
        '2': []
      },
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit’s own '
          + 'word list. <b>Reporter, photojournalist</b> and <b>correspondent</b> go '
          + 'out. Note that the line is not always clean: a correspondent writes '
          + 'at a desk too, and on a small team one person does both.',
        '2': 'The book prints this sentence for you to complete from the unit’s own '
          + 'word list. <b>Desk editor, sub-editor</b> and <b>picture editor</b> '
          + 'stay in. What makes them desk jobs is not the chair — it is that the '
          + 'story reaches them already gathered.'
      }
    },
    {
      id: 'c2',
      ref: '1E',
      bookRef: 'Unit 1 · 1E',
      type: 'writer',
      title: 'Write with the words (40–60 words)',
      instruction: 'Write a short paragraph about a newsroom you know, or one you have read '
  + 'about. Use at least five words from Part 1.<br>☐ Did you use five '
  + 'Part-1 words?<br>☐ Is it 40–60 words?<br>☐ Are your sentences short '
  + 'and clear?',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }],
      model: ['The newsroom I know best is small. Six reporters work there, and one '
        + 'desk editor checks all the copy. There is no bureau abroad, so the '
        + 'paper buys foreign stories from the wire. The deadline is seven in the '
        + 'evening, and every story carries a byline.'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short paragraph about a newsroom you know, or one you have read '
  + 'about. Use at least five words from Part 1. ☐ Did you use five Part-1 '
  + 'words? ☐ Is it 40–60 words? ☐ Are your sentences short and clear?',
        criteria: [{ t: 'Five or more words from Part 1.' },
          { t: '40–60 words.' },
          { t: 'Short, clear sentences — one idea each.' }]
      }
    }
  ]
});
