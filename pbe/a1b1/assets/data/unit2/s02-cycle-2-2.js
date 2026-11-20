/* Unit 2 · cycle 2.2 — Twenty, fifty, three hundred.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u2-s02', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 2 · 2.2', part: '2.2',
          section: '2', lesson: 'Twenty, fifty, three hundred', title: 'Twenty, fifty, three hundred' },
  objective: 'say the big numbers, up to a thousand',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '2.2.1',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say these numbers: 20 · 30 · 40 · 50 · 60. Now say: 13 · 14 · 15 · 16.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is the biggest number at your work? Write it here:',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The big numbers',
      'IN TODAY: 90 (ninety)',
      'OUT TODAY: 0 (none)'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '2.2.2',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-2',
      passage: {
        title: 'Language box',
        html: '<p><b>The big numbers</b></p><table class=\'bk\'><tr><th></th><th>In '
          + 'numbers</th><th>In words</th></tr><tr><td><b>tens</b></td><td>20 · '
          + '30 · 40 · 50</td><td>twenty · thirty · forty · '
          + 'fifty</td></tr><tr><td><b>hundreds</b></td><td>100 · 200 · '
          + '300</td><td>a hundred · two hundred · three '
          + 'hundred</td></tr><tr><td><b>and</b></td><td>340 · 905</td><td>three '
          + 'hundred <b>and</b> forty · nine hundred <b>and</b> '
          + 'five</td></tr><tr><td><b>thousand</b></td><td>1,000 · '
          + '2,500</td><td>a thousand · two thousand five '
          + 'hundred</td></tr></table><p>⚠ <b><i>hundred</i> never takes an '
          + '-s:</b> two hundred, not <s>two hundreds</s>.</p><p>⚠ <b>The word '
          + '<i>and</i> goes before the last part:</b> three hundred <b>and</b> '
          + 'forty.</p><p><b>Practise:</b> Write the number.</p><p>1 three '
          + 'hundred and twelve <span class="blank"></span> 2 nine hundred <span '
          + 'class="blank"></span> 3 a thousand and five <span '
          + 'class="blank"></span> 4 forty <span '
          + 'class="blank"></span></p><p><b>Useful words:</b> a hundred · a '
          + 'thousand · and · Say it. · Write it big. · Both.</p><p><b>Sound — '
          + '-ty and -teen.</b> 🔊 <b>Track 2.4</b> Listen. <b>FOR</b>-ty (loud at '
          + 'the front) · four-<b>TEEN</b> (loud at the end). <i>Thirty — '
          + 'thirteen. Fifty — fifteen.</i> Say each pair four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is the number on the board?',
            options: [{
              t: '340',
              ok: true,
              why: 'Three hundred and forty is read off the board.'
            },
            {
              t: '314',
              ok: false,
              why: 'The digits are right but in the wrong order - listen again to '
                + 'the middle one.'
            },
            {
              t: '430',
              ok: false,
              why: 'That is the total AFTER the ninety comes in, not what the '
                + 'board said first.'
            }],
            evidence: 'the number on the board, said and then written'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '2.2.2',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many cartons came today?',
            model: 'Ninety',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What is the total in the store?',
            model: 'Four hundred and thirty',
            minWords: 1,
            rows: 2,
            keys: ['hundred',
              'thirty'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '2.2.3',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. Read the lines. Say it. Then change places.',
      scene: 'u2-2-2-pair',
      roles: [{
          who: 'a',
          label: 'A'
        },
      {
          who: 'b',
          label: 'B'
        }],
      minWords: 8,
      notePlaceholder: 'Write two lines you said in the role-play…',
      table: {
        title: 'The cards the book gives you',
        head: ['Card 1',
        'Card 2'],
        rows: [['340 · 90 · not 19 · 430',
          '560 · 70 · not 17 · 630']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '2.2.3R',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ a hundred</td><td>☐ a '
          + 'thousand</td><td>☐ …and forty</td><td>☐ Not nineteen.</td><td>☐ '
          + 'Write it big.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The big numbers',
      'IN TODAY: 90 (ninety)',
      'OUT TODAY: 0 (none)'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '2.2.4',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Say four big numbers from your work. Your partner writes it. Then check it together.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>I said</th><th>My partner '
          + 'wrote</th><th>Same? ✓ / '
          + '✗</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'I said 340 wrote 340 ✓ · I said 90 wrote 19 ✗ · I said 1,200 '
              + 'wrote 1,200 ✓ · I said 15 wrote 50 ✗',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Say four big numbers from your work. Your partner writes it. Then '
          + 'check it together.',
        grammar: 'The big numbers',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (2.2) teaches: The big numbers. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The big numbers.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '2.2.4R',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I said numbers. were right. The hard one was .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I said four numbers. Two were right. The hard one was fifteen and fifty',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — I said — numbers. — were right. The hard one was '
          + '—. (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'The big numbers',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (2.2) teaches: '
          + 'The big numbers. Judge the language against THAT and against nothing '
          + 'the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The big numbers.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '2.2.5',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the board in the store. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>STORE BOARD — 5 MARCH</b></p><p><b>IN TODAY: 90</b> '
          + '<i>(ninety)</i></p><p><b>IN STORE: 430</b> <i>(four hundred and '
          + 'thirty)</i></p><p><b>OUT TODAY: 0</b> <i>(none)</i></p><p>⚠ <b>Every '
          + 'number twice. Numbers and words. A.Y.</b></p><h4>Writer\'s '
          + 'box</h4><p><b>A store board has three lines:</b> in today → in store '
          + '→ out today. <b>And a total if there is one.</b></p><p>⚠ <b>Write '
          + 'every number twice: in numbers and in words.</b> <i>90 (ninety).</i> '
          + '<b>A number read from across the yard can be read wrong. Two forms '
          + 'cannot.</b></p><p>⚠ <b>Zero is a number. Write it.</b> An empty line '
          + 'means nobody counted. <b>0</b> means somebody did.</p>'
      },
      questions: [{
            q: 'How many came in today?',
            model: 'Ninety',
            minWords: 1,
            rows: 2
          },
      {
            q: 'How many went out?',
            model: 'None — zero',
            minWords: 1,
            rows: 2,
            keys: ['none',
              'zero'],
            need: 1
          },
      {
            q: 'Why is every number written twice?',
            model: 'So a number read from across the yard cannot be read wrong',
            minWords: 4,
            rows: 2,
            keys: ['across',
              'yard',
              'cannot',
              'wrong'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '2.2.6',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a store board for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['BOARD — 11 MARCH',
      'IN TODAY: 70 (seventy) IN STORE: 510 (five hundred and ten) OUT TODAY: '
        + '0 (none) S.Q'],
      meter: {
        label: 'words from this lesson',
        words: ['numbers',
        'hundred',
        'never',
        'hundreds',
        'word',
        'before',
        'last',
        'part']
      },
      coach: {
        title: 'What to include',
        task: 'Write a store board for your own work (15 words or more).',
        criteria: [{ t: 'A store board has three lines: in today → in store → out today. '
              + 'And a total if there is one.' },
            { t: '⚠ Write every number twice: in numbers and in words. 90 '
              + '(ninety). A number read from across the yard can be read wrong. '
              + 'Two forms cannot.' },
            { t: '⚠ Zero is a number. Write it. An empty line means nobody '
              + 'counted. 0 means somebody did.' }]
      },
      aiCheck: {
        task: 'Write a store board for your own work (15 words or more).',
        grammar: 'The big numbers',
        must: ['A store board has three lines: in today → in store → out today. And '
          + 'a total if there is one.',
        '⚠ Write every number twice: in numbers and in words. 90 (ninety). A '
          + 'number read from across the yard can be read wrong. Two forms '
          + 'cannot.',
        '⚠ Zero is a number. Write it. An empty line means nobody counted. 0 '
          + 'means somebody did.']
      }
    },
    {
      id: 'c10',
      kind: 'own',
      ref: '2.2.6P',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>Every number in numbers AND '
          + 'words</td><td>&nbsp;</td></tr><tr><td>Zero is written as 0, not left '
          + 'empty</td><td>&nbsp;</td></tr><tr><td>The day at the '
          + 'top</td><td>&nbsp;</td></tr><tr><td>A name at the '
          + 'end</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The big numbers',
      'IN TODAY: 90 (ninety)',
      'OUT TODAY: 0 (none)'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'The big numbers',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (2.2) '
          + 'teaches: The big numbers. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        must: ['A store board has three lines: in today → in store → out today. And '
          + 'a total if there is one.',
        '⚠ Write every number twice: in numbers and in words. 90 (ninety). A '
          + 'number read from across the yard can be read wrong. Two forms '
          + 'cannot.',
        '⚠ Zero is a number. Write it. An empty line means nobody counted. 0 '
          + 'means somebody did.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '2.2.6R',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read one line. The class says the number back. Is it the same?',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The big numbers',
      'IN TODAY: 90 (ninety)',
      'OUT TODAY: 0 (none)'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '2.2.7',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a number that was wrong at your work (<b>20 to 35 words</b>). '
  + 'What was the number? What should it have been? What happened?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['Last year the board said nineteen pallets. It was ninety. Nobody '
        + 'checked it for two days. We told a customer we had none and we had '
        + 'ninety in the back store'],
      stems: ['Last year the board…',
      'It was ninety…',
      'Nobody checked it…',
      'We told a customer…'],
      meter: {
        label: 'words from this lesson',
        words: ['numbers',
        'hundred',
        'never',
        'hundreds',
        'word',
        'before',
        'last',
        'part']
      },
      coach: {
        title: 'What to include',
        task: 'Write about a number that was wrong at your work (20 to 35 words). What was '
  + 'the number? What should it have been? What happened?',
        criteria: [{ t: 'A store board has three lines: in today → in store → out today. '
              + 'And a total if there is one.' },
            { t: '⚠ Write every number twice: in numbers and in words. 90 '
              + '(ninety). A number read from across the yard can be read wrong. '
              + 'Two forms cannot.' },
            { t: '⚠ Zero is a number. Write it. An empty line means nobody '
              + 'counted. 0 means somebody did.' }]
      },
      aiCheck: {
        task: 'Write about a number that was wrong at your work (20 to 35 words). '
          + 'What was the number? What should it have been? What happened?',
        grammar: 'The big numbers',
        must: ['A store board has three lines: in today → in store → out today. And '
          + 'a total if there is one.',
        '⚠ Write every number twice: in numbers and in words. 90 (ninety). A '
          + 'number read from across the yard can be read wrong. Two forms '
          + 'cannot.',
        '⚠ Zero is a number. Write it. An empty line means nobody counted. 0 '
          + 'means somebody did.']
      }
    },
    {
      id: 'c13',
      kind: 'own',
      ref: '2.2.7P',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Who wrote that number? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The big numbers',
      'IN TODAY: 90 (ninety)',
      'OUT TODAY: 0 (none)'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Who wrote that number? '
          + 'Write the answer.',
        grammar: 'The big numbers',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (2.2) teaches: The big numbers. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The big numbers.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '2.2.7R',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many was the number written only once? Count them '
  + 'on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> four big numbers from '
          + 'your work, in numbers and in words (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The big numbers',
      'IN TODAY: 90 (ninety)',
      'OUT TODAY: 0 (none)'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
