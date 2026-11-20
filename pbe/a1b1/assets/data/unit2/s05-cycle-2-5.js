/* Unit 2 · cycle 2.5 — Say it, write it, read it back.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u2-s05', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 2 · 2.5', part: '2.5',
          section: '5', lesson: 'Say it, write it, read it back', title: 'Say it, write it, read it back' },
  objective: 'write a number down and read it back',
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '2.5.1',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Your teacher says four numbers fast. Write it. Then check it '
              + 'with your partner.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Which numbers sound the same? Say them in pairs: 13 · 30 · 15 · '
              + '50 · 16 · 60',
            model: '13/30, 15/50, 16/60. Put the other four pairs up beside them from 2.2',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '2.5.2',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-5',
      passage: {
        title: 'Language box',
        html: '<p><b>Say it, write it, read it back</b></p><table '
          + 'class=\'bk\'><tr><th>Step</th><th>What you do</th><th>What you '
          + 'say</th></tr><tr><td><b>1 Say it</b></td><td>the other person says '
          + 'the number</td><td>—</td></tr><tr><td><b>2 Write it</b></td><td>you '
          + 'write the digits</td><td>—</td></tr><tr><td><b>3 Check '
          + 'it</b></td><td>you ask about the two digits</td><td><b>Six zero, or '
          + 'one six?</b></td></tr><tr><td><b>4 Read it back</b></td><td>you say '
          + 'the whole thing again</td><td><b>Sixty cartons for Homs, by '
          + 'eleven.</b></td></tr></table><p>⚠ <b>Say the DIGITS when two numbers '
          + 'sound the same:</b> <i>six zero</i>, not <i>sixty</i>. <b>Digits '
          + 'cannot be heard wrong.</b></p><p>⚠ <b>Read the WHOLE thing back, not '
          + 'only the number</b> — the number, the thing, the place and the '
          + 'time.</p><p><b>Practise:</b> Write the digits.</p><p>1 sixty <span '
          + 'class="blank"></span> 2 sixteen <span class="blank"></span> 3 '
          + 'fifteen <span class="blank"></span> 4 fifty <span '
          + 'class="blank"></span> 5 ninety <span '
          + 'class="blank"></span></p><p><b>Useful words:</b> Six zero, or one '
          + 'six? · I write it. · Read it back. · Every time. · '
          + 'Correct.</p><p><b>Sound — reading a number back.</b> 🔊 <b>Track '
          + '2.10</b> Listen. The voice goes <b>down</b> at the end, because it '
          + 'is not a question: <i>Sixty cartons for Homs, by eleven.↘</i> Say it '
          + 'four times, going down.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What saves the order?',
            options: [{
              t: 'Ammar reads the number back',
              ok: true,
              why: 'Reading it back catches sixty against sixteen before the lorry leaves.'
            },
            {
              t: 'Fadi writes it down',
              ok: false,
              why: 'Writing it down alone would have written the wrong number down.'
            },
            {
              t: 'nothing',
              ok: false,
              why: 'Something does save it - listen to what Ammar says next.'
            }],
            evidence: 'what Ammar does after the order is given'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '2.5.2',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What did Ammar hear first?',
            model: 'Sixteen',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What was the number?',
            model: 'Sixty',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '2.5.3',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A gives an order. B writes it and reads it back. Then change places.',
      scene: 'u2-2-5-pair',
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
        rows: [['60 cartons · Homs · 11 · not 16',
          '50 rolls · Hama · 9 · not 15']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '2.5.3R',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Six zero, or one six?</td><td>☐ I '
          + 'write it.</td><td>☐ Read it back.</td><td>☐ Every time.</td><td>☐ '
          + 'Correct.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['For: Homs',
      'On the lorry by: 11.00',
      'Read back to Fadi: ✓ A.Z'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '2.5.4',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Give your partner four orders. They write it and read it back. Check it together.',
      passage: {
        title: 'From the book',
        html: '<table '
          + 'class=\'bk\'><tr><th>Number</th><th>Thing</th><th>Place</th><th>Time</th><th>Right? '
          + '✓ / '
          + '✗</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: '60 — cartons — Homs — 11.00 — ✓ · 15 — rolls — the counter — '
              + '9.00 — ✗ (partner wrote 50) · 200 — packets — Hama — 14.00 — ✓ · '
              + '70 — cartons — Aleppo — 6.00 — ✓',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Give your partner four orders. They write it and read it back. Check '
          + 'it together.',
        grammar: 'Say it, write it, read it back',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (2.5) teaches: Say it, write it, read it back. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Say it, write it, read it back.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '2.5.4R',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I gave orders. My partner read back right. The hard one was .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I gave four orders. My partner read three back right. The hard '
              + 'one was fifteen',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — I gave — orders. My partner read — back right. The '
          + 'hard one was —. (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Say it, write it, read it back',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (2.5) teaches: '
          + 'Say it, write it, read it back. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Say it, write it, read it back.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '2.5.5',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read what Ammar wrote. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>ORDER — 6 MARCH — from Fadi</b></p><p><b>60</b> <i>(six zero — '
          + 'NOT 16)</i> <b>cartons</b></p><p><b>For:</b> Homs</p><p><b>On the '
          + 'lorry by:</b> 11.00</p><p><b>Read back to Fadi:</b> ✓ '
          + '<b>A.Z.</b></p><h4>Writer\'s box</h4><p><b>An order note has five '
          + 'things:</b> the number → the thing → where it goes → the time → and '
          + 'a tick to say you read it back.</p><p>⚠ <b>The tick is the important '
          + 'one.</b> <b>It says somebody checked.</b> <b>Without it, nobody '
          + 'knows.</b></p><p>⚠ <b>Write the number in digits beside it</b> when '
          + 'it can be heard two ways: <i>60 (six zero — NOT 16)</i>.</p>'
      },
      questions: [{
            q: 'How many cartons?',
            model: 'Sixty',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What time must they be on the lorry?',
            model: 'Eleven o\'clock',
            minWords: 1,
            rows: 2,
            keys: ['eleven',
              'o\'clock'],
            need: 1
          },
      {
            q: 'What does the tick mean?',
            model: 'That the number was read back to the person who gave it',
            minWords: 4,
            rows: 2,
            keys: ['number',
              'back',
              'person',
              'gave'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '2.5.6',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write an order note for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['ORDER — 12 MARCH — from Abu Yasser',
      '70 (seven zero — NOT 17) cartons For: Hama By: 10.00 Read back: ✓ S.Q'],
      coach: {
        title: 'What to include',
        task: 'Write an order note for your own work (15 words or more).',
        criteria: [{ t: 'An order note has five things: the number → the thing → where it '
              + 'goes → the time → and a tick to say you read it back.' },
            { t: '⚠ The tick is the important one. It says somebody checked. '
              + 'Without it, nobody knows.' },
            { t: '⚠ Write the number in digits beside it when it can be heard two '
              + 'ways: 60 (six zero — NOT 16).' }]
      },
      aiCheck: {
        task: 'Write an order note for your own work (15 words or more).',
        grammar: 'Say it, write it, read it back',
        must: ['An order note has five things: the number → the thing → where it '
          + 'goes → the time → and a tick to say you read it back.',
        '⚠ The tick is the important one. It says somebody checked. Without '
          + 'it, nobody knows.',
        '⚠ Write the number in digits beside it when it can be heard two '
          + 'ways: 60 (six zero — NOT 16).']
      }
    },
    {
      id: 'c10',
      kind: 'own',
      ref: '2.5.6P',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>The '
          + 'number in digits as well</td><td>&nbsp;</td></tr><tr><td>Where it '
          + 'goes</td><td>&nbsp;</td></tr><tr><td>A '
          + 'time</td><td>&nbsp;</td></tr><tr><td>A tick to say it was read '
          + 'back</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['For: Homs',
      'On the lorry by: 11.00',
      'Read back to Fadi: ✓ A.Z'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Say it, write it, read it back',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (2.5) '
          + 'teaches: Say it, write it, read it back. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        must: ['An order note has five things: the number → the thing → where it '
          + 'goes → the time → and a tick to say you read it back.',
        '⚠ The tick is the important one. It says somebody checked. Without '
          + 'it, nobody knows.',
        '⚠ Write the number in digits beside it when it can be heard two '
          + 'ways: 60 (six zero — NOT 16).']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '2.5.6R',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their note aloud to a partner. The partner says it back. '
  + 'Is it the same?',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['For: Homs',
      'On the lorry by: 11.00',
      'Read back to Fadi: ✓ A.Z'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '2.5.7',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about an order you took at your work (<b>20 to 35 words</b>). Who gave '
  + 'it? What was the number? Did you read it back?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['A driver told me fifteen rolls on the telephone. I wrote fifty. I did '
        + 'not read it back. We sent fifty and thirty-five came back on Thursday '
        + 'on the same lorry'],
      stems: ['A driver told…',
      'I wrote fifty…',
      'I did not…',
      'We sent fifty…'],
      coach: {
        title: 'What to include',
        task: 'Write about an order you took at your work (20 to 35 words). Who gave it? '
  + 'What was the number? Did you read it back?',
        criteria: [{ t: 'An order note has five things: the number → the thing → where it '
              + 'goes → the time → and a tick to say you read it back.' },
            { t: '⚠ The tick is the important one. It says somebody checked. '
              + 'Without it, nobody knows.' },
            { t: '⚠ Write the number in digits beside it when it can be heard two '
              + 'ways: 60 (six zero — NOT 16).' }]
      },
      aiCheck: {
        task: 'Write about an order you took at your work (20 to 35 words). Who '
          + 'gave it? What was the number? Did you read it back?',
        grammar: 'Say it, write it, read it back',
        must: ['An order note has five things: the number → the thing → where it '
          + 'goes → the time → and a tick to say you read it back.',
        '⚠ The tick is the important one. It says somebody checked. Without '
          + 'it, nobody knows.',
        '⚠ Write the number in digits beside it when it can be heard two '
          + 'ways: 60 (six zero — NOT 16).']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '2.5.7P',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did you read it back? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '? Did you read it back? — No. Now I do, every time',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did you read it back? '
          + 'Write the answer.',
        grammar: 'Say it, write it, read it back',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (2.5) teaches: Say it, write it, read it back. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Say it, write it, read it back.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '2.5.7R',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many did somebody read the number back? Count them '
  + 'on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then take four numbers you heard at work '
          + 'this week and <b>write down</b> the digits of each (20 words or '
          + 'more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['For: Homs',
      'On the lorry by: 11.00',
      'Read back to Fadi: ✓ A.Z'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
