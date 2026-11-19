/* Unit 6 · cycle 6.5 — Zero nine four four — one one two.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u6-s05', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 6 · 6.5', part: '6.5',
          section: '5', lesson: 'Zero nine four four — one one two', title: 'Zero nine four four — one one two' },
  objective: 'take a number and read it back',
  cards: [
    {
      id: 'c1',
      ref: '6.5.1',
      bookRef: 'Unit 6 · 6.5 · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say your own telephone number slowly, in groups. Your partner '
              + 'writes it. Check it.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'How do you say on a telephone? zero · nought · oh — all three '
              + 'are used. Learn to hear all three.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '6.5.2',
      bookRef: 'Unit 6 · 6.5 · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u6-6-5',
      passage: {
        title: 'Language box',
        html: '<p><b>Taking a telephone number</b></p><table '
          + 'class=\'bk\'><tr><th>Step</th><th>What you '
          + 'do</th></tr><tr><td><b>1</b></td><td><b>One moment, please.</b> — '
          + 'get the pen FIRST</td></tr><tr><td><b>2</b></td><td>write it as they '
          + 'say it</td></tr><tr><td><b>3</b></td><td><b>Again, please.</b> — and '
          + 'write it a second time</td></tr><tr><td><b>4</b></td><td>⚠ <b>read '
          + 'it back, in groups of three or '
          + 'four</b></td></tr><tr><td><b>5</b></td><td>they say <b><i>That is '
          + 'it.</i></b> or they correct you</td></tr></table><p>⚠ <b>Groups, not '
          + 'a string.</b> <b>0944 112 233 is said <i>zero nine four four — one '
          + 'one two — two three three</i>, with a gap you can hear.</b> '
          + '<b>Twelve digits in one breath cannot be written down by '
          + 'anybody.</b></p><p>⚠ <b><i>double two</i> and <i>double three</i> '
          + 'are normal on a telephone.</b> <b>Learn to hear them</b> — '
          + '<b><i>double three</i> is two threes, and a man who writes one three '
          + 'has lost the number.</b></p><p>⚠ <b>The sentence to keep:</b> <i>a '
          + 'number nobody read back is a number nobody has.</i> <b>The read-back '
          + 'is the whole job, not the polite ending.</b></p><p><b>Practise:</b> '
          + 'Write the number in digits.</p><p>1 zero nine four four, one one '
          + 'two, two three three = <span class="blank"></span> 2 zero one one, '
          + 'double five, double seven, eight eight = <span '
          + 'class="blank"></span></p><p><b>Useful words:</b> One moment, please. '
          + '· Again, please. · double three · Let me read it back. · That is '
          + 'it.</p><p><b>Sound — the groups of three.</b> 🔊 <b>Track 6.10</b> '
          + 'Listen. <i>zero nine four four … one one two … two three three.</i> '
          + '<b>Three groups, two gaps.</b> <b>Say your own number in groups, '
          + 'four times.</b></p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is the number?',
            options: [{
              t: '0944 112 233',
              ok: true,
              why: '0944 112 233'
            },
            {
              t: '0944 112 223',
              ok: false
            },
            {
              t: '0944 122 233',
              ok: false
            }]
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '6.5.2',
      bookRef: 'Unit 6 · 6.5 · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many times is the number said?',
            model: 'Three times — once by the caller, once again, and once read back',
            minWords: 4,
            rows: 2
          },
      {
            q: 'What does Ammar do when two digits are the same?',
            model: 'He asks whether it is two three three or two two three',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '6.5.3',
      bookRef: 'Unit 6 · 6.5 · Practise',
      type: 'roleplay',
      title: 'Practise',
      instruction: 'Work in pairs, back to back. One gives a number. One writes and reads it '
  + 'back. Then change places.',
      scene: 'u6-6-5-pair',
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
        rows: [['0944 112 233 · two three three · two two three',
          '011 557 788 · double eight · eight nine']]
      }
    },
    {
      id: 'c5',
      ref: '6.5.3R',
      bookRef: 'Unit 6 · 6.5 · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — back to back, books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ One moment, please.</td><td>☐ Again, '
          + 'please.</td><td>☐ double three</td><td>☐ Let me read it '
          + 'back.</td><td>☐ That is it.</td></tr></table>'
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
      ref: '6.5.4',
      bookRef: 'Unit 6 · 6.5 · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Four numbers. Your partner says them over a telephone. You write and read '
  + 'back. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What I wrote</th><th>Read '
          + 'back?</th><th>✓ '
          + 'correct?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'I wrote: 0944 112 233 Read back: ✓ ✓ correct · I wrote: 011 557 '
              + '788 Read back: ✓ ✓ correct · I wrote: 0932 445 661 Read back: ✗ '
              + '✗ it was 0932 445 616 · I wrote: 0988 300 410 Read back: ✓ ✓ '
              + 'correct',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Four numbers. Your partner says them over a telephone. You write and '
          + 'read back. Write it.',
        grammar: 'Taking a telephone number',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A numbers list has a time, a name, the number and whether you read it back.',
        '⚠ Write the number in GROUPS on the page too. 0944 112 233. A '
          + 'twelve-digit string with no gaps is a number you will misread next '
          + 'week — and you are the next week\'s reader.',
        '⚠ Write the bad number with question marks in it: 0988 3?? 410. Nine '
          + 'digits out of eleven is not nothing. Somebody in the office may '
          + 'recognise it, and a blank line is the only version of it that is '
          + 'certainly useless.']
      }
    },
    {
      id: 'c7',
      ref: '6.5.4R',
      bookRef: 'Unit 6 · 6.5 · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I wrote . I read it back. It was right / wrong in the group.',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I wrote 0932 445 661. I did not read it back. It was wrong in '
              + 'the last group — 616, not 661',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: I wrote . I read it back. It was right / wrong in the group.',
        grammar: 'Taking a telephone number',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A numbers list has a time, a name, the number and whether you read it back.',
        '⚠ Write the number in GROUPS on the page too. 0944 112 233. A '
          + 'twelve-digit string with no gaps is a number you will misread next '
          + 'week — and you are the next week\'s reader.',
        '⚠ Write the bad number with question marks in it: 0988 3?? 410. Nine '
          + 'digits out of eleven is not nothing. Somebody in the office may '
          + 'recognise it, and a blank line is the only version of it that is '
          + 'certainly useless.']
      }
    },
    {
      id: 'c8',
      ref: '6.5.5',
      bookRef: 'Unit 6 · 6.5 · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the numbers Ammar wrote. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>NUMBERS TAKEN — MONDAY 16 MARCH</b></p><table '
          + 'class=\'bk\'><tr><th>Time</th><th>Name</th><th>Number</th><th>Read '
          + 'back?</th></tr><tr><td>7.50</td><td>Mouallem</td><td>0944 112 '
          + '233</td><td>✓ yes</td></tr><tr><td>9.10</td><td>Saeed</td><td>0932 '
          + '445 661</td><td>✓ '
          + 'yes</td></tr><tr><td>10.30</td><td>Tarabishi</td><td>011 557 '
          + '788</td><td>✓ yes</td></tr><tr><td>11.05</td><td><i>(no '
          + 'name)</i></td><td>0988 3?? 410</td><td>✗ he rang '
          + 'off</td></tr></table><p>⚠ <b>Three good. One with two digits missing '
          + '— I did not read it back in time. A.Z.</b></p><h4>Writer\'s '
          + 'box</h4><p><b>A numbers list has a time, a name, the number and '
          + 'whether you read it back.</b></p><p>⚠ <b>Write the number in GROUPS '
          + 'on the page too.</b> <i>0944 112 233.</i> <b>A twelve-digit string '
          + 'with no gaps is a number you will misread next week</b> — <b>and you '
          + 'are the next week\'s reader.</b></p><p>⚠ <b>Write the bad number '
          + 'with question marks in it:</b> <i>0988 3?? 410</i>. <b>Nine digits '
          + 'out of eleven is not nothing.</b> <b>Somebody in the office may '
          + 'recognise it, and a blank line is the only version of it that is '
          + 'certainly useless.</b></p>'
      },
      questions: [{
            q: 'How many numbers were read back?',
            model: 'Three',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What is wrong with the 11.05 number?',
            model: 'Two digits are missing — 0988 3?? 410',
            minWords: 1,
            rows: 2
          },
      {
            q: 'Why did Ammar write the bad number down anyway?',
            model: 'Because nine digits out of eleven is not nothing, and somebody '
              + 'in the office may recognise it',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '6.5.6',
      bookRef: 'Unit 6 · 6.5 · Write with help',
      type: 'writer',
      title: 'Write with help',
      instruction: 'Write a numbers list for one morning at your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Time</th><th>Name</th><th>Number <i>(in '
          + 'groups)</i></th><th>Read '
          + 'back?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      model: ['NUMBERS TAKEN — TUESDAY 17 MARCH'],
      coach: {
        title: 'What to include',
        task: 'Write a numbers list for one morning at your own work (15 words or more).',
        criteria: [{ t: 'A numbers list has a time, a name, the number and whether you '
              + 'read it back.' },
            { t: '⚠ Write the number in GROUPS on the page too. 0944 112 233. A '
              + 'twelve-digit string with no gaps is a number you will misread '
              + 'next week — and you are the next week\'s reader.' },
            { t: '⚠ Write the bad number with question marks in it: 0988 3?? 410. '
              + 'Nine digits out of eleven is not nothing. Somebody in the office '
              + 'may recognise it, and a blank line is the only version of it '
              + 'that is certainly useless.' }]
      },
      aiCheck: {
        task: 'Write a numbers list for one morning at your own work (15 words or more).',
        grammar: 'Taking a telephone number',
        must: ['A numbers list has a time, a name, the number and whether you read it back.',
        '⚠ Write the number in GROUPS on the page too. 0944 112 233. A '
          + 'twelve-digit string with no gaps is a number you will misread next '
          + 'week — and you are the next week\'s reader.',
        '⚠ Write the bad number with question marks in it: 0988 3?? 410. Nine '
          + 'digits out of eleven is not nothing. Somebody in the office may '
          + 'recognise it, and a blank line is the only version of it that is '
          + 'certainly useless.']
      }
    },
    {
      id: 'c10',
      ref: '6.5.6P',
      bookRef: 'Unit 6 · 6.5 · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>The '
          + 'numbers written in groups</td><td>&nbsp;</td></tr><tr><td>A '
          + 'read-back column, ticked or '
          + 'crossed</td><td>&nbsp;</td></tr><tr><td>Bad numbers written with '
          + 'question marks, not left out</td><td>&nbsp;</td></tr><tr><td>The '
          + 'totals at the bottom</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "0944112233" · (pointing) at this '
              + 'row. (reading) nothing in the last column',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Taking a telephone number',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A numbers list has a time, a name, the number and whether you read it back.',
        '⚠ Write the number in GROUPS on the page too. 0944 112 233. A '
          + 'twelve-digit string with no gaps is a number you will misread next '
          + 'week — and you are the next week\'s reader.',
        '⚠ Write the bad number with question marks in it: 0988 3?? 410. Nine '
          + 'digits out of eleven is not nothing. Somebody in the office may '
          + 'recognise it, and a blank line is the only version of it that is '
          + 'certainly useless.']
      }
    },
    {
      id: 'c11',
      ref: '6.5.6R',
      bookRef: 'Unit 6 · 6.5 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read one number back to the class. In groups. The class writes '
  + 'it and checks.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '6.5.7',
      bookRef: 'Unit 6 · 6.5 · Write freely',
      type: 'writer',
      title: 'Write freely',
      instruction: 'Write about a telephone number that went wrong at your work (<b>20 to 35 '
  + 'words</b>). Which digits? Did anybody read it back? What happened?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['A customer gave me his number and I wrote 616 instead of 661. I rang a '
        + 'stranger twice. He waited two days for us and then bought the doors '
        + 'somewhere else'],
      coach: {
        title: 'What to include',
        task: 'Write about a telephone number that went wrong at your work (20 to 35 '
  + 'words). Which digits? Did anybody read it back? What happened?',
        criteria: [{ t: 'A numbers list has a time, a name, the number and whether you '
              + 'read it back.' },
            { t: '⚠ Write the number in GROUPS on the page too. 0944 112 233. A '
              + 'twelve-digit string with no gaps is a number you will misread '
              + 'next week — and you are the next week\'s reader.' },
            { t: '⚠ Write the bad number with question marks in it: 0988 3?? 410. '
              + 'Nine digits out of eleven is not nothing. Somebody in the office '
              + 'may recognise it, and a blank line is the only version of it '
              + 'that is certainly useless.' }]
      },
      aiCheck: {
        task: 'Write about a telephone number that went wrong at your work (20 to '
          + '35 words). Which digits? Did anybody read it back? What happened?',
        grammar: 'Taking a telephone number',
        must: ['A numbers list has a time, a name, the number and whether you read it back.',
        '⚠ Write the number in GROUPS on the page too. 0944 112 233. A '
          + 'twelve-digit string with no gaps is a number you will misread next '
          + 'week — and you are the next week\'s reader.',
        '⚠ Write the bad number with question marks in it: 0988 3?? 410. Nine '
          + 'digits out of eleven is not nothing. Somebody in the office may '
          + 'recognise it, and a blank line is the only version of it that is '
          + 'certainly useless.']
      }
    },
    {
      id: 'c13',
      ref: '6.5.7P',
      bookRef: 'Unit 6 · 6.5 · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did you ever get hold of him? '
  + 'Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Did you ever get hold of him? — No. He came in a week later and told us',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did you ever get hold '
          + 'of him? Write the answer.',
        grammar: 'Taking a telephone number',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A numbers list has a time, a name, the number and whether you read it back.',
        '⚠ Write the number in GROUPS on the page too. 0944 112 233. A '
          + 'twelve-digit string with no gaps is a number you will misread next '
          + 'week — and you are the next week\'s reader.',
        '⚠ Write the bad number with question marks in it: 0988 3?? 410. Nine '
          + 'digits out of eleven is not nothing. Somebody in the office may '
          + 'recognise it, and a blank line is the only version of it that is '
          + 'certainly useless.']
      }
    },
    {
      id: 'c14',
      ref: '6.5.7R',
      bookRef: 'Unit 6 · 6.5 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many lost calls were never got back? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> six telephone numbers '
          + 'from your work, in groups, and read each one aloud (20 words or '
          + 'more).</p>'
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
