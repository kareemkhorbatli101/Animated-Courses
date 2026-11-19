/* Unit 2 · cycle 2.7 — Review: the count sheet.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u2-s07', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 2 · 2.7', part: '2.7',
          section: '7', lesson: 'Review: the count sheet', title: 'Review: the count sheet' },
  objective: 'Review: the count sheet — and one problem to talk about together',
  cards: [
    {
      id: 'c1',
      ref: '2.7.1',
      bookRef: 'Unit 2 · 2.7 · Get ready – Unit 2 quiz',
      type: 'discuss',
      title: 'Get ready – Unit 2 quiz',
      instruction: '',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Say it in '
          + 'English</th><th>✓</th></tr><tr><td><b>2.1</b> Count the chairs. How '
          + 'many?</td><td>&nbsp;</td></tr><tr><td><b>2.2</b> Say 340 and '
          + '905.</td><td>&nbsp;</td></tr><tr><td><b>2.3</b> Say the number AND '
          + 'the word for four things '
          + 'here.</td><td>&nbsp;</td></tr><tr><td><b>2.4</b> Say what is on an '
          + 'empty shelf.</td><td>&nbsp;</td></tr><tr><td><b>2.5</b> Somebody '
          + 'says 60. What do you ask?</td><td>&nbsp;</td></tr><tr><td><b>2.6</b> '
          + 'The sheet is wrong. What do you '
          + 'say?</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Write what you would say. Your own words.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '2.7.2',
      bookRef: 'Unit 2 · 2.7 · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-7',
      passage: {
        title: 'Language box',
        html: '<p><b>Review — the six things from this unit</b></p><table '
          + 'class=\'bk\'><tr><th>Cycle</th><th>You can '
          + 'say</th></tr><tr><td><b>2.1</b></td><td><i>Twelve cartons. Six on '
          + 'the floor. '
          + 'Eighteen.</i></td></tr><tr><td><b>2.2</b></td><td><i>Three hundred '
          + 'and forty. Write it big. In numbers and in '
          + 'words.</i></td></tr><tr><td><b>2.3</b></td><td><i>Twenty packets, '
          + 'not twenty. Say the word with the '
          + 'number.</i></td></tr><tr><td><b>2.4</b></td><td><i>There are six on '
          + 'shelf three. There are none on shelf '
          + 'four.</i></td></tr><tr><td><b>2.5</b></td><td><i>Six zero, or one '
          + 'six? I write it. I read it '
          + 'back.</i></td></tr><tr><td><b>2.6</b></td><td><i>It is not twelve. '
          + 'It is nine. I counted twice.</i></td></tr></table><p>⚠ <b>The new '
          + 'thing here: two careful men can get two different numbers and '
          + 'neither is wrong.</b> <b>The problem is the sheet, which does not '
          + 'say WHAT to count.</b></p><p><b>Useful words:</b> on the shelf · '
          + 'under it · in the place · what to count · Nobody is wrong.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Why are the two counts different?',
            options: [{
              t: 'one man cannot count',
              ok: false
            },
            {
              t: 'they counted different things',
              ok: true
            },
            {
              t: 'the sheet is old',
              ok: false
            }]
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '2.7.2',
      bookRef: 'Unit 2 · 2.7 · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What did Ammar count?',
            model: 'The cartons on the shelf',
            minWords: 2,
            rows: 2
          },
      {
            q: 'What did Samih count?',
            model: 'The cartons on the shelf and the three on the floor under it',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '2.7.3',
      bookRef: 'Unit 2 · 2.7 · Practise',
      type: 'discuss',
      title: 'Practise',
      instruction: 'Work in pairs. One is Ammar. One is Samih. Say why your number is right.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Ammar says</th><th>Samih '
          + 'says</th></tr><tr><td>I counted the cartons <b>on the shelf</b>. '
          + 'Nine. ⚠ <b>Twice.</b></td><td>I counted the cartons <b>in the '
          + 'place</b> — on the shelf and the three under it. Twelve. ⚠ '
          + '<b>Twice.</b></td></tr></table>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '2.7.3R',
      bookRef: 'Unit 2 · 2.7 · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the two sides for the class — books closed.',
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      ref: '2.7.4',
      bookRef: 'Unit 2 · 2.7 · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of something at your work that two people would count differently. '
  + 'Tell your partner. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The thing</th><th>One way to count '
          + 'it</th><th>The other '
          + 'way</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'The thing: the pallets in the yard. One way: the full ones only. '
              + 'The other way: full and empty together · The thing: the men on '
              + 'the shift. One way: the men who signed in. The other way: the '
              + 'men who are here now, which is two fewer at four o\'clock',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of something at your work that two people would count '
          + 'differently. Tell your partner. Write it.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words. Three things, all three there.',
        '⚠ In a message about a number, the number goes in the FIRST '
          + 'sentence. The reader may read no further.',
        '⚠ Write the digits beside a number that can be heard two ways. 60 (six zero).',
        'The shape: who it is to → the number → where and when → what the '
          + 'reader must do.']
      }
    },
    {
      id: 'c7',
      ref: '2.7.4R',
      bookRef: 'Unit 2 · 2.7 · Report – everybody is right',
      type: 'discuss',
      title: 'Report – everybody is right',
      instruction: 'The problem. Ammar counted nine. Samih counted twelve. Both men counted '
  + 'twice. The sheet says shelf 3 and nothing else.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Ammar is right</th><th>Samih is '
          + 'right</th><th>So we do this</th></tr><tr><td>Nine are <b>on the '
          + 'shelf</b>. ⚠ <b>The sheet says shelf.</b></td><td>Twelve are <b>in '
          + 'the place</b>. ⚠ <b>The three on the floor came off that shelf this '
          + 'morning.</b></td><td>⚠ <b>The sheet gets a new line: <i>on the '
          + 'shelf</i> and <i>on the floor</i>, counted apart.</b> <b>Nine and '
          + 'three. Twelve in the place.</b> From Monday.</td></tr></table>'
      },
      questions: [{
            q: 'Write what you told the class.',
            model: 'The three positions, in full · Ammar is right because nine are '
              + 'on the shelf. Samih is right because twelve are in the place. So '
              + 'the sheet gets two lines, and both numbers go on it',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'The problem. Ammar counted nine. Samih counted twelve. Both men '
          + 'counted twice. The sheet says shelf 3 and nothing else.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether you have named what EACH side is right about. Not who wins, '
          + 'and not a compromise: one sentence for each person\'s reason.',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words. Three things, all three there.',
        '⚠ In a message about a number, the number goes in the FIRST '
          + 'sentence. The reader may read no further.',
        '⚠ Write the digits beside a number that can be heard two ways. 60 (six zero).',
        'The shape: who it is to → the number → where and when → what the '
          + 'reader must do.']
      }
    },
    {
      id: 'c8',
      ref: '2.7.5',
      bookRef: 'Unit 2 · 2.7 · Read – exam practice (A2 Key Reading Part 1, at A1 length)',
      type: 'discuss',
      title: 'Read – exam practice (A2 Key Reading Part 1, at A1 length)',
      instruction: 'Read the five notices. What does each one say? Choose A, B or C.',
      passage: {
        title: 'From the book',
        html: '<p><b>1</b> <i>COUNT TWICE — WRITE BOTH</i> <b>A</b> Count once. '
          + '<b>B</b> Count two times and write both numbers. <b>C</b> Do not '
          + 'count.</p><p><b>2</b> <i>0 = COUNTED. BLANK = NOT COUNTED.</i> '
          + '<b>A</b> A blank means none. <b>B</b> A blank means nobody looked. '
          + '<b>C</b> A blank means zero.</p><p><b>3</b> <i>SAY THE WORD WITH THE '
          + 'NUMBER</i> <b>A</b> Say only the number. <b>B</b> Say the number and '
          + 'the thing. <b>C</b> Say nothing.</p><p><b>4</b> <i>60 (SIX ZERO — '
          + 'NOT 16)</i> <b>A</b> Sixteen. <b>B</b> Six. <b>C</b> '
          + 'Sixty.</p><p><b>5</b> <i>TOTAL AT THE BOTTOM OF EVERY SHEET</i> '
          + '<b>A</b> Put a total at the bottom. <b>B</b> Put a total at the top. '
          + '<b>C</b> No total.</p><h4>Writer\'s box</h4><p><b>Exam practice — A2 '
          + 'Key Writing Part 6, at A1 length.</b> <b>Four sentences, about 30 '
          + 'words. Three things, all three there.</b></p><p>⚠ <b>In a message '
          + 'about a number, the number goes in the FIRST sentence.</b> The '
          + 'reader may read no further.</p><p>⚠ <b>Write the digits beside a '
          + 'number that can be heard two ways.</b> <i>60 (six '
          + 'zero).</i></p><p><b>The shape:</b> who it is to → the number → where '
          + 'and when → what the reader must do.</p>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '2.7.6',
      bookRef: 'Unit 2 · 2.7 · Write with help',
      type: 'writer',
      title: 'Write with help',
      instruction: 'Write a message to a colleague about a count (<b>four sentences, about 30 '
  + 'words</b>). Say the number, the place, the day, and one thing they must do.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['To: Abu Yasser',
      'There are nine cartons on shelf three. I counted twice. The sheet says '
        + 'twelve. Please change the sheet'],
      coach: {
        title: 'What to include',
        task: 'Write a message to a colleague about a count (four sentences, about 30 '
  + 'words). Say the number, the place, the day, and one thing they must do.',
        criteria: [{ t: 'Exam practice — A2 Key Writing Part 6, at A1 length. Four '
              + 'sentences, about 30 words. Three things, all three there.' },
            { t: '⚠ In a message about a number, the number goes in the FIRST '
              + 'sentence. The reader may read no further.' },
            { t: '⚠ Write the digits beside a number that can be heard two ways. '
              + '60 (six zero).' },
            { t: 'The shape: who it is to → the number → where and when → what the '
              + 'reader must do.' }]
      },
      aiCheck: {
        task: 'Write a message to a colleague about a count (four sentences, about '
          + '30 words). Say the number, the place, the day, and one thing they '
          + 'must do.',
        grammar: 'Review — the six things from this unit',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words. Three things, all three there.',
        '⚠ In a message about a number, the number goes in the FIRST '
          + 'sentence. The reader may read no further.',
        '⚠ Write the digits beside a number that can be heard two ways. 60 (six zero).',
        'The shape: who it is to → the number → where and when → what the '
          + 'reader must do.']
      }
    },
    {
      id: 'c10',
      ref: '2.7.6P',
      bookRef: 'Unit 2 · 2.7 · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is '
  + 'missing. Count the sentences: four.',
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing. Count the sentences: four.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words. Three things, all three there.',
        '⚠ In a message about a number, the number goes in the FIRST '
          + 'sentence. The reader may read no further.',
        '⚠ Write the digits beside a number that can be heard two ways. 60 (six zero).',
        'The shape: who it is to → the number → where and when → what the '
          + 'reader must do.']
      }
    },
    {
      id: 'c11',
      ref: '2.7.7',
      bookRef: 'Unit 2 · 2.7 · Write freely – exam practice (A2 Key Writing Part 6, at A1 length)',
      type: 'writer',
      title: 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)',
      instruction: 'Write a message about a number that is wrong at your work (<b>four '
  + 'sentences, about 30 words</b>). Say the number on the paper, the real '
  + 'number, that you counted twice, and what the reader must do.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      passage: {
        title: 'Homework',
        html: '<p>Finish your message. Then write the <b>answer</b> your colleague '
          + 'would send (20 words or more).</p>'
      },
      model: ['There are 214 packets on shelf two, not 220. I counted twice, both '
        + 'times 214. The old number is still on the sheet. Please tell the '
        + 'office before the order goes'],
      coach: {
        title: 'What to include',
        task: 'Write a message about a number that is wrong at your work (four sentences, '
  + 'about 30 words). Say the number on the paper, the real number, that you '
  + 'counted twice, and what the reader must do.',
        criteria: [{ t: 'Exam practice — A2 Key Writing Part 6, at A1 length. Four '
              + 'sentences, about 30 words. Three things, all three there.' },
            { t: '⚠ In a message about a number, the number goes in the FIRST '
              + 'sentence. The reader may read no further.' },
            { t: '⚠ Write the digits beside a number that can be heard two ways. '
              + '60 (six zero).' },
            { t: 'The shape: who it is to → the number → where and when → what the '
              + 'reader must do.' }]
      },
      aiCheck: {
        task: 'Write a message about a number that is wrong at your work (four '
          + 'sentences, about 30 words). Say the number on the paper, the real '
          + 'number, that you counted twice, and what the reader must do.',
        grammar: 'Review — the six things from this unit',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words. Three things, all three there.',
        '⚠ In a message about a number, the number goes in the FIRST '
          + 'sentence. The reader may read no further.',
        '⚠ Write the digits beside a number that can be heard two ways. 60 (six zero).',
        'The shape: who it is to → the number → where and when → what the '
          + 'reader must do.']
      }
    },
    {
      id: 'c12',
      ref: '2.7.✓',
      bookRef: 'Unit 2 · 2.7 · Unit 2 check',
      type: 'scene',
      title: 'Unit 2 check',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-7'
    }
  ]
});
