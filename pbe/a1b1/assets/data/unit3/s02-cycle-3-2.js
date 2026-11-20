/* Unit 3 · cycle 3.2 — Seven o'clock, half past four.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u3-s02', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 3 · 3.2', part: '3.2',
          section: '2', lesson: 'Seven o\'clock, half past four', title: 'Seven o\'clock, half past four' },
  objective: 'say the time',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '3.2.1',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'What time is it now? Say it. Write it here:',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What time do you start work? What time do you finish? Tell your partner.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The time, two ways',
      'Gate: 7.00 (seven o\'clock)',
      'Lorry: 7.15 (quarter past seven)',
      'Break: 10.30 (half past ten)',
      'Finish: 16.00 (four o\'clock)'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '3.2.2',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u3-3-2',
      passage: {
        title: 'Language box',
        html: '<p><b>The time, two ways</b></p><table class=\'bk\'><tr><th>The '
          + 'clock</th><th>One way</th><th>The other '
          + 'way</th></tr><tr><td><b>7.00</b></td><td>seven '
          + 'o\'clock</td><td>seven</td></tr><tr><td><b>7.15</b></td><td>quarter '
          + 'past seven</td><td>seven '
          + 'fifteen</td></tr><tr><td><b>7.30</b></td><td>half past '
          + 'seven</td><td>seven '
          + 'thirty</td></tr><tr><td><b>7.45</b></td><td>quarter to '
          + 'eight</td><td>seven forty-five</td></tr></table><p>⚠ <b><i>at</i> '
          + 'before a time:</b> <b>at</b> seven · <b>at</b> half past ten. '
          + '<b>Not</b> <s>in seven</s>.</p><p>⚠ <b>Say it BOTH ways.</b> <b>Some '
          + 'men at work say <i>half past ten</i> and some say <i>ten '
          + 'thirty</i>.</b> <b>You need both ears.</b></p><p><b>Practise:</b> '
          + 'Write the other way.</p><p>1 8.30 = half past eight = <span '
          + 'class="blank"></span> 2 quarter past nine = <span '
          + 'class="blank"></span> 3 4.45 = <span class="blank"></span> 4 six '
          + 'o\'clock = <span class="blank"></span></p><p><b>Say it. Write it. '
          + 'Check it</b> with your partner — one of you reads the clock number, '
          + 'the other reads the words.</p><p><b>Useful words:</b> at seven · '
          + 'quarter past · half past · quarter to · fifteen minutes '
          + 'early</p><p><b>Sound — the time, said twice.</b> 🔊 <b>Track 3.4</b> '
          + 'Listen. Say it. <i>Quarter past seven. Seven fifteen.</i> <b>Both, '
          + 'one after the other.</b> Say each pair four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What time does the lorry come?',
            options: [{
              t: '6.30',
              ok: false,
              why: 'No half past six is mentioned anywhere in the scene.'
            },
            {
              t: '7.15',
              ok: true,
              why: 'Quarter past seven, which he also says as seven fifteen.'
            },
            {
              t: '7.30',
              ok: false,
              why: 'Half past is in the scene, but it is the break, not the lorry.'
            }],
            evidence: 'the time said two ways, one after the other'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '3.2.2',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What time must Ammar be at the gate?',
            model: 'Seven o\'clock — fifteen minutes before the lorry',
            minWords: 2,
            rows: 2,
            keys: ['o\'clock',
              'fifteen',
              'minutes',
              'before'],
            need: 1
          },
      {
            q: 'What time is the break?',
            model: 'Half past ten',
            minWords: 1,
            rows: 2,
            keys: ['half',
              'past'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '3.2.3',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. Read the lines. Say it. Then change places.',
      scene: 'u3-3-2-pair',
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
        rows: [['7.15 · gate at 7.00 · break 10.30',
          '6.45 · gate at 6.30 · break 9.30']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '3.2.3R',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ at seven</td><td>☐ quarter '
          + 'past</td><td>☐ half past</td><td>☐ quarter to</td><td>☐ both '
          + 'ways</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The time, two ways',
      'Gate: 7.00 (seven o\'clock)',
      'Lorry: 7.15 (quarter past seven)',
      'Break: 10.30 (half past ten)',
      'Finish: 16.00 (four o\'clock)'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '3.2.4',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Say four times from your own day. Your partner writes it both ways.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>I said</th><th>One way</th><th>The other '
          + 'way</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'I said: 6.30 → half past six · six thirty · I said: 8.15 → '
              + 'quarter past eight · eight fifteen · I said: 12.00 → twelve '
              + 'o\'clock · twelve · I said: 4.45 → quarter to five · four '
              + 'forty-five',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Say four times from your own day. Your partner writes it both ways.',
        grammar: 'The time, two ways',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A times notice has four lines: gate → the first job → break → finish.',
        '⚠ Write the clock number AND the words. 7.15 (quarter past seven). '
          + 'Some men read numbers and some read words.',
        '⚠ Use 16.00 for four in the afternoon on a notice. A lorry at 4.00 '
          + 'could be morning or afternoon, and once a year somebody comes at the '
          + 'wrong one.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '3.2.4R',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I start at . That is and . My break is at .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I start at half past six. That is six thirty and half past six. '
              + 'My break is at ten o\'clock',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: I start at . That is and . My break is at .',
        grammar: 'The time, two ways',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A times notice has four lines: gate → the first job → break → finish.',
        '⚠ Write the clock number AND the words. 7.15 (quarter past seven). '
          + 'Some men read numbers and some read words.',
        '⚠ Use 16.00 for four in the afternoon on a notice. A lorry at 4.00 '
          + 'could be morning or afternoon, and once a year somebody comes at the '
          + 'wrong one.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '3.2.5',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the times on the store wall. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>TIMES — BACK STORE</b></p><p><b>Gate:</b> 7.00 <i>(seven '
          + 'o\'clock)</i></p><p><b>Lorry:</b> 7.15 <i>(quarter past '
          + 'seven)</i></p><p><b>Break:</b> 10.30 <i>(half past '
          + 'ten)</i></p><p><b>Finish:</b> 16.00 <i>(four o\'clock)</i></p><p>⚠ '
          + '<b>Both ways on every line. A.Y.</b></p><h4>Writer\'s '
          + 'box</h4><p><b>A times notice has four lines:</b> gate → the first '
          + 'job → break → finish.</p><p>⚠ <b>Write the clock number AND the '
          + 'words.</b> <i>7.15 (quarter past seven).</i> <b>Some men read '
          + 'numbers and some read words.</b></p><p>⚠ <b>Use 16.00 for four in '
          + 'the afternoon</b> on a notice. <b>A lorry at 4.00 could be morning '
          + 'or afternoon, and once a year somebody comes at the wrong '
          + 'one.</b></p>'
      },
      questions: [{
            q: 'What time is the break?',
            model: 'Half past ten',
            minWords: 1,
            rows: 2,
            keys: ['half',
              'past'],
            need: 1
          },
      {
            q: 'What time does the lorry come?',
            model: 'Quarter past seven',
            minWords: 1,
            rows: 2,
            keys: ['quarter',
              'past'],
            need: 1
          },
      {
            q: 'Why is every time written two ways?',
            model: 'Because some men read the numbers and some read the words',
            minWords: 3,
            rows: 2,
            keys: ['because',
              'men',
              'numbers',
              'words'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '3.2.6',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a times notice for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['TIMES — BACK STORE',
      'Gate: 7.00 (seven o\'clock) · First job: 7.15 (quarter past seven)'],
      coach: {
        title: 'What to include',
        task: 'Write a times notice for your own work (15 words or more).',
        criteria: [{ t: 'A times notice has four lines: gate → the first job → break → finish.' },
            { t: '⚠ Write the clock number AND the words. 7.15 (quarter past '
              + 'seven). Some men read numbers and some read words.' },
            { t: '⚠ Use 16.00 for four in the afternoon on a notice. A lorry at '
              + '4.00 could be morning or afternoon, and once a year somebody '
              + 'comes at the wrong one.' }]
      },
      aiCheck: {
        task: 'Write a times notice for your own work (15 words or more).',
        grammar: 'The time, two ways',
        must: ['A times notice has four lines: gate → the first job → break → finish.',
        '⚠ Write the clock number AND the words. 7.15 (quarter past seven). '
          + 'Some men read numbers and some read words.',
        '⚠ Use 16.00 for four in the afternoon on a notice. A lorry at 4.00 '
          + 'could be morning or afternoon, and once a year somebody comes at the '
          + 'wrong one.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '3.2.6P',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>Numbers AND words on every '
          + 'line</td><td>&nbsp;</td></tr><tr><td>24-hour time for the '
          + 'afternoon</td><td>&nbsp;</td></tr><tr><td>Four '
          + 'lines</td><td>&nbsp;</td></tr><tr><td>A name at the '
          + 'end</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "Break: 10.30" · (pointing) Here. '
              + '(reading) "Finish: 4.00"',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'The time, two ways',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A times notice has four lines: gate → the first job → break → finish.',
        '⚠ Write the clock number AND the words. 7.15 (quarter past seven). '
          + 'Some men read numbers and some read words.',
        '⚠ Use 16.00 for four in the afternoon on a notice. A lorry at 4.00 '
          + 'could be morning or afternoon, and once a year somebody comes at the '
          + 'wrong one.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '3.2.6R',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read one line. The class says the time the other way.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The time, two ways',
      'Gate: 7.00 (seven o\'clock)',
      'Lorry: 7.15 (quarter past seven)',
      'Break: 10.30 (half past ten)',
      'Finish: 16.00 (four o\'clock)'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '3.2.7',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about your times at work (<b>20 to 35 words</b>). When do you start? '
  + 'When is your break? When do you finish?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['I start at half past six in the morning. That is early, but the lorry '
        + 'comes at seven. My break is at ten o\'clock. I finish at four o\'clock'],
      stems: ['I start at half…',
      'That is early…',
      'My break is…',
      'I finish at four…'],
      coach: {
        title: 'What to include',
        task: 'Write about your times at work (20 to 35 words). When do you start? When is '
  + 'your break? When do you finish?',
        criteria: [{ t: 'A times notice has four lines: gate → the first job → break → finish.' },
            { t: '⚠ Write the clock number AND the words. 7.15 (quarter past '
              + 'seven). Some men read numbers and some read words.' },
            { t: '⚠ Use 16.00 for four in the afternoon on a notice. A lorry at '
              + '4.00 could be morning or afternoon, and once a year somebody '
              + 'comes at the wrong one.' }]
      },
      aiCheck: {
        task: 'Write about your times at work (20 to 35 words). When do you start? '
          + 'When is your break? When do you finish?',
        grammar: 'The time, two ways',
        must: ['A times notice has four lines: gate → the first job → break → finish.',
        '⚠ Write the clock number AND the words. 7.15 (quarter past seven). '
          + 'Some men read numbers and some read words.',
        '⚠ Use 16.00 for four in the afternoon on a notice. A lorry at 4.00 '
          + 'could be morning or afternoon, and once a year somebody comes at the '
          + 'wrong one.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '3.2.7P',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: How long is your break? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'How long is your break? — Fifteen minutes. From half past ten to '
              + 'quarter to eleven',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: How long is your break? '
          + 'Write the answer.',
        grammar: 'The time, two ways',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A times notice has four lines: gate → the first job → break → finish.',
        '⚠ Write the clock number AND the words. 7.15 (quarter past seven). '
          + 'Some men read numbers and some read words.',
        '⚠ Use 16.00 for four in the afternoon on a notice. A lorry at 4.00 '
          + 'could be morning or afternoon, and once a year somebody comes at the '
          + 'wrong one.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '3.2.7R',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. Who has the longest day? Count the hours on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> six times from your '
          + 'week, both ways (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The time, two ways',
      'Gate: 7.00 (seven o\'clock)',
      'Lorry: 7.15 (quarter past seven)',
      'Break: 10.30 (half past ten)',
      'Finish: 16.00 (four o\'clock)'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
