/* Unit 4 · cycle 4.5 — Straight on, then left at the bench.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u4-s05', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 4 · 4.5', part: '4.5',
          section: '5', lesson: 'Straight on, then left at the bench', title: 'Straight on, then left at the bench' },
  objective: 'tell somebody how to walk to a place in the yard',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '4.5.1',
      bookRef: 'Unit 4 · 4.5 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Tell your partner how to walk from the door of this room to your '
              + 'chair. Three orders.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Which hand is your left? Hold it up. Say it.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '4.5.2',
      bookRef: 'Unit 4 · 4.5 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u4-4-5',
      passage: {
        title: 'Language box',
        html: '<p><b>Giving a direction inside the yard</b></p><table '
          + 'class=\'bk\'><tr><th>The '
          + 'order</th><th>Example</th></tr><tr><td><b>go</b></td><td><b>Go</b> '
          + 'straight on. · <b>Go</b> past the small '
          + 'store.</td></tr><tr><td><b>turn</b></td><td><b>Turn</b> left at the '
          + 'bench. · <b>Turn</b> right at the '
          + 'gate.</td></tr><tr><td><b>take</b></td><td><b>Take</b> the second '
          + 'door. · <b>Take</b> the ladder with you.</td></tr><tr><td><b>do '
          + 'not</b></td><td><b>Do not</b> use the other '
          + 'door.</td></tr></table><p>⚠ <b>An order has NO <i>you</i> at the '
          + 'front:</b> <b>Go</b> straight on. <b>Not</b> <s>You go straight '
          + 'on</s>. <b>It is shorter, and in a yard shorter is '
          + 'safer.</b></p><p>⚠ <b>Name the landmark, and say which one:</b> '
          + '<i>the LONG bench, not the short one</i>. <b>A yard has two of most '
          + 'things, and the man you are directing has never seen '
          + 'either.</b></p><p>⚠ <b>End with the thing NOT to do.</b> <i>Do not '
          + 'use the other door.</i> <b>The last thing you say is the thing '
          + 'remembered, and in a yard the dangerous door matters more than the '
          + 'right one.</b></p><p><b>Practise:</b> Write the order.</p><p>1 <span '
          + 'class="blank"></span> straight on. 2 <span class="blank"></span> '
          + 'left at the bench. 3 <span class="blank"></span> the second door. 4 '
          + '<span class="blank"></span> <span class="blank"></span> use the '
          + 'stairs.</p><p><b>Useful words:</b> go straight on · turn left · turn '
          + 'right · past the… · Do not use…</p><p><b>Sound — one order, one '
          + 'breath.</b> 🔊 <b>Track 4.10</b> Listen. <i>Go straight on.↘ Turn '
          + 'left at the bench.↘</i> <b>A full stop after each one.</b> <b>A '
          + 'direction said in one long breath is a direction nobody can '
          + 'follow.</b> Say it four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How many turns?',
            options: [{
              t: 'one',
              ok: true,
              why: 'Straight on, then one turn - left at the long bench.'
            },
            {
              t: 'two',
              ok: false,
              why: 'Only one turn is named. Going straight on is not a turn.'
            },
            {
              t: 'three',
              ok: false,
              why: 'More turns than the directions contain.'
            }],
            evidence: 'the directions from the gate to the loading door'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '4.5.2',
      bookRef: 'Unit 4 · 4.5 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is on the left at the end?',
            model: 'The loading door — the big grey door',
            minWords: 2,
            rows: 2,
            keys: ['loading',
              'door',
              'big',
              'grey'],
            need: 1
          },
      {
            q: 'What must the driver not do?',
            model: 'Use the other door, which is the office stairs',
            minWords: 3,
            rows: 2,
            keys: ['use',
              'door',
              'office',
              'stairs'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '4.5.3',
      bookRef: 'Unit 4 · 4.5 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One is the driver. One gives directions. Then change places.',
      scene: 'u4-4-5-pair',
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
        rows: [['loading door · gate · small store · left · long bench · other door',
          'office · loading door · big store · right · green gate · back stairs']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '4.5.3R',
      bookRef: 'Unit 4 · 4.5 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ go straight on</td><td>☐ turn '
          + 'left</td><td>☐ turn right</td><td>☐ past the…</td><td>☐ Do not '
          + 'use…</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '4.5.4',
      bookRef: 'Unit 4 · 4.5 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Tell your partner how to walk from the gate of your work to where you stand. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th></th><th>The '
          + 'order</th></tr><tr><td><b>1</b></td><td>&nbsp;</td></tr><tr><td><b>2</b></td><td>&nbsp;</td></tr><tr><td><b>3</b></td><td>&nbsp;</td></tr><tr><td><b>Do '
          + 'not</b></td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: '1 From the gate, go straight on, past the weighbridge · 2 Turn '
              + 'right at the green door. (Not the grey one — that is the '
              + 'office.) · 3 I am at the second counter, on the left · Do not '
              + 'walk across the yard where the lorries turn. Use the painted '
              + 'line',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell your partner how to walk from the gate of your work to where '
          + 'you stand. Write it.',
        grammar: 'Giving a direction inside the yard',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A directions paper has three numbered orders, then one warning, then '
          + 'one instruction to the reader.',
        '⚠ Put the warning in a line of its own, in big letters. A warning in '
          + 'the middle of order 2 is a warning nobody reads.',
        '⚠ The last line is an instruction to the READER, not about the way: '
          + 'say it back before you drive. It is the only line that checks '
          + 'whether the other four worked.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '4.5.4R',
      bookRef: 'Unit 4 · 4.5 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: Go . Turn at the . It is on your . Do not .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'Go straight on past the weighbridge. Turn right at the green '
              + 'door. I am on your left. Do not walk where the lorries turn',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: Go . Turn at the . It is on your . Do not .',
        grammar: 'Giving a direction inside the yard',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A directions paper has three numbered orders, then one warning, then '
          + 'one instruction to the reader.',
        '⚠ Put the warning in a line of its own, in big letters. A warning in '
          + 'the middle of order 2 is a warning nobody reads.',
        '⚠ The last line is an instruction to the READER, not about the way: '
          + 'say it back before you drive. It is the only line that checks '
          + 'whether the other four worked.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '4.5.5',
      bookRef: 'Unit 4 · 4.5 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the paper at the gate. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>FOR DRIVERS — THE LOADING DOOR</b></p><p><b>1</b> From the '
          + 'gate, go straight on. Past the small store.</p><p><b>2</b> Turn left '
          + 'at the long bench. <i>(Not the short bench by the '
          + 'wall.)</i></p><p><b>3</b> The loading door is on your left. The big '
          + 'grey door.</p><p>⚠ <b>DO NOT use the other door. It is the office '
          + 'stairs. No lorries.</b></p><p><b>Say it back to the gate man before '
          + 'you drive. A.Y.</b></p><h4>Writer\'s box</h4><p><b>A directions '
          + 'paper has three numbered orders, then one warning, then one '
          + 'instruction to the reader.</b></p><p>⚠ <b>Put the warning in a line '
          + 'of its own, in big letters.</b> <b>A warning in the middle of order '
          + '2 is a warning nobody reads.</b></p><p>⚠ <b>The last line is an '
          + 'instruction to the READER, not about the way:</b> <i>say it back '
          + 'before you drive</i>. <b>It is the only line that checks whether the '
          + 'other four worked.</b></p>'
      },
      questions: [{
            q: 'How many orders are there before the warning?',
            model: 'Three',
            minWords: 1,
            rows: 2
          },
      {
            q: 'Which bench do you turn at?',
            model: 'The long bench — not the short one by the wall',
            minWords: 3,
            rows: 2,
            keys: ['long',
              'short',
              'wall',
              'bench'],
            need: 1
          },
      {
            q: 'What must the driver do before driving?',
            model: 'Say it back to the gate man',
            minWords: 2,
            rows: 2,
            keys: ['back',
              'gate',
              'man'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '4.5.6',
      bookRef: 'Unit 4 · 4.5 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a directions paper for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['FOR DRIVERS — THE WEIGHBRIDGE',
      '1 From the gate, go straight on. Past the small store'],
      coach: {
        title: 'What to include',
        task: 'Write a directions paper for your own work (15 words or more).',
        criteria: [{ t: 'A directions paper has three numbered orders, then one warning, '
              + 'then one instruction to the reader.' },
            { t: '⚠ Put the warning in a line of its own, in big letters. A '
              + 'warning in the middle of order 2 is a warning nobody reads.' },
            { t: '⚠ The last line is an instruction to the READER, not about the '
              + 'way: say it back before you drive. It is the only line that '
              + 'checks whether the other four worked.' }]
      },
      aiCheck: {
        task: 'Write a directions paper for your own work (15 words or more).',
        grammar: 'Giving a direction inside the yard',
        must: ['A directions paper has three numbered orders, then one warning, then '
          + 'one instruction to the reader.',
        '⚠ Put the warning in a line of its own, in big letters. A warning in '
          + 'the middle of order 2 is a warning nobody reads.',
        '⚠ The last line is an instruction to the READER, not about the way: '
          + 'say it back before you drive. It is the only line that checks '
          + 'whether the other four worked.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '4.5.6P',
      bookRef: 'Unit 4 · 4.5 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>Three numbered '
          + 'orders</td><td>&nbsp;</td></tr><tr><td>A landmark in each one, and '
          + 'which one it is</td><td>&nbsp;</td></tr><tr><td>The warning in its '
          + 'own line</td><td>&nbsp;</td></tr><tr><td>A last line telling the '
          + 'reader what to do</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "Turn left at the bench" · (pointing) '
              + 'at the end. (reading) nothing',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Giving a direction inside the yard',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A directions paper has three numbered orders, then one warning, then '
          + 'one instruction to the reader.',
        '⚠ Put the warning in a line of its own, in big letters. A warning in '
          + 'the middle of order 2 is a warning nobody reads.',
        '⚠ The last line is an instruction to the READER, not about the way: '
          + 'say it back before you drive. It is the only line that checks '
          + 'whether the other four worked.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '4.5.6R',
      bookRef: 'Unit 4 · 4.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their paper. A third walks it across the room. The class '
  + 'says if they arrived.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '4.5.7',
      bookRef: 'Unit 4 · 4.5 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write directions from the gate of your work to one place (<b>20 to 35 '
  + 'words</b>). Which turn do people get wrong? What must they not do?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['From our gate, drivers go straight on and turn right at the water '
        + 'tank. They always turn at the first tank, which is wrong, so we '
        + 'painted a number on the big one. Do not reverse past the office'],
      coach: {
        title: 'What to include',
        task: 'Write directions from the gate of your work to one place (20 to 35 words). '
  + 'Which turn do people get wrong? What must they not do?',
        criteria: [{ t: 'A directions paper has three numbered orders, then one warning, '
              + 'then one instruction to the reader.' },
            { t: '⚠ Put the warning in a line of its own, in big letters. A '
              + 'warning in the middle of order 2 is a warning nobody reads.' },
            { t: '⚠ The last line is an instruction to the READER, not about the '
              + 'way: say it back before you drive. It is the only line that '
              + 'checks whether the other four worked.' }]
      },
      aiCheck: {
        task: 'Write directions from the gate of your work to one place (20 to 35 '
          + 'words). Which turn do people get wrong? What must they not do?',
        grammar: 'Giving a direction inside the yard',
        must: ['A directions paper has three numbered orders, then one warning, then '
          + 'one instruction to the reader.',
        '⚠ Put the warning in a line of its own, in big letters. A warning in '
          + 'the middle of order 2 is a warning nobody reads.',
        '⚠ The last line is an instruction to the READER, not about the way: '
          + 'say it back before you drive. It is the only line that checks '
          + 'whether the other four worked.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '4.5.7P',
      bookRef: 'Unit 4 · 4.5 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Has anybody ever got it wrong? '
  + 'Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Has anybody ever got it wrong? — Many times. One lorry hit the office wall',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Has anybody ever got it '
          + 'wrong? Write the answer.',
        grammar: 'Giving a direction inside the yard',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A directions paper has three numbered orders, then one warning, then '
          + 'one instruction to the reader.',
        '⚠ Put the warning in a line of its own, in big letters. A warning in '
          + 'the middle of order 2 is a warning nobody reads.',
        '⚠ The last line is an instruction to the READER, not about the way: '
          + 'say it back before you drive. It is the only line that checks '
          + 'whether the other four worked.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '4.5.7R',
      bookRef: 'Unit 4 · 4.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many name a door that nobody should use? Count them '
  + 'on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> directions from your '
          + 'gate to the office, with a warning (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
