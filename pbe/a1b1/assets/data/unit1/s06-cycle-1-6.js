/* Unit 1 · cycle 1.6 — Sorry — again, please.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u1-s06', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 1 · 1.6', part: '1.6',
          section: '6', lesson: 'Sorry — again, please', title: 'Sorry — again, please' },
  objective: 'say that you did not understand',
  cards: [
    {
      id: 'c1',
      ref: '1.6.1',
      bookRef: 'Unit 1 · 1.6 · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Somebody speaks fast. You do not understand. What do you do now? '
              + 'Say it in Arabic.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the two lines. Which one is better at work? I say nothing '
              + 'and I do it wrong · I say "Sorry — again, please"',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '1.6.2',
      bookRef: 'Unit 1 · 1.6 · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-6',
      passage: {
        title: 'Language box',
        html: '<p><b>When you do not understand</b></p><table '
          + 'class=\'bk\'><tr><th>You '
          + 'say</th><th>When</th></tr><tr><td><b>Sorry?</b></td><td>you heard '
          + 'nothing</td></tr><tr><td><b>Again, please.</b> · <b>Slowly, '
          + 'please.</b></td><td>you heard, but it was '
          + 'fast</td></tr><tr><td><b>Can you write it down?</b></td><td>it is a '
          + 'number, or a name</td></tr><tr><td><b>Is it 14 or '
          + '40?</b></td><td>two numbers sound the same</td></tr></table><p>⚠ '
          + '<b>14 and 40 sound the same on a bad telephone.</b> So do 15 / 50, '
          + '16 / 60, 17 / 70. ⚠ <b>Always ask. Always.</b></p><p>⚠ <b>Do not say '
          + 'sorry for asking.</b> Asking is your job. Doing it wrong is '
          + 'not.</p><p><b>Practise:</b> What do you say?</p><p>1 He spoke very '
          + 'fast. <span class="blank"></span> 2 It is a long name. <span '
          + 'class="blank"></span> 3 You heard nothing. <span '
          + 'class="blank"></span> 4 It is 15 or 50. <span '
          + 'class="blank"></span></p><p><b>Useful words:</b> Sorry? · Again, '
          + 'please. · Slowly. · Can you write it down? · Is it <span '
          + 'class="blank"></span> or <span class="blank"></span>?</p><p><b>Sound '
          + '— <i>Sorry?</i> going up.</b> 🔊 <b>Track 1.12</b> Listen. '
          + '<i>Sorry?↗</i> going up is a question. <i>Sorry.↘</i> going down is '
          + 'an apology. Say the question four times, going up.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Abu Yasser say at the end?',
            options: [{
              t: 'go home',
              ok: false
            },
            {
              t: 'ask again, always',
              ok: true
            },
            {
              t: 'you are late',
              ok: false
            }]
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '1.6.2',
      bookRef: 'Unit 1 · 1.6 · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many boxes?',
            model: 'Fourteen',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What does Ammar not understand — the number or the place?',
            model: 'The number',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '1.6.3',
      bookRef: 'Unit 1 · 1.6 · Practise',
      type: 'roleplay',
      title: 'Practise',
      instruction: 'Work in pairs. A speaks fast. B asks. Then change places.',
      scene: 'u1-1-6-pair',
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
        rows: [['14 boxes · row 3 · shelf 2 · not 40',
          '15 rolls · row 6 · shelf 1 · not 50']]
      }
    },
    {
      id: 'c5',
      ref: '1.6.3R',
      bookRef: 'Unit 1 · 1.6 · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Sorry?</td><td>☐ Again, '
          + 'please.</td><td>☐ Slowly.</td><td>☐ Can you write it down?</td><td>☐ '
          + 'Is it 14 or 40?</td></tr></table>'
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
      ref: '1.6.4',
      bookRef: 'Unit 1 · 1.6 · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Work in pairs. Say four numbers fast. Your partner asks and writes. Then check them.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>I said</th><th>My partner '
          + 'wrote</th><th>Same? ✓ / '
          + '✗</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'I said 15 My partner wrote 50 ✗ · I said 60 My partner wrote 60 '
              + '✓ · I said 17 My partner wrote 17 ✓ · I said 40 My partner wrote '
              + '14 ✗',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Work in pairs. Say four numbers fast. Your partner asks and writes. '
          + 'Then check them.',
        grammar: 'When you do not understand',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A paper for one person has four things: the name → the number → the '
          + 'place → what to do if there is a problem.',
        '⚠ Write a number that can be read two ways twice: 14 (one four). It '
          + 'costs four words and it saves a day.',
        '⚠ Put your name at the end — even two letters. A paper from nobody '
          + 'is a paper nobody will ask about.']
      }
    },
    {
      id: 'c7',
      ref: '1.6.4R',
      bookRef: 'Unit 1 · 1.6 · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I said numbers. My partner wrote right. The hard one was .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I said four numbers. My partner wrote two right. The hard one '
              + 'was fifteen and fifty',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: I said numbers. My partner wrote right. The hard one was .',
        grammar: 'When you do not understand',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A paper for one person has four things: the name → the number → the '
          + 'place → what to do if there is a problem.',
        '⚠ Write a number that can be read two ways twice: 14 (one four). It '
          + 'costs four words and it saves a day.',
        '⚠ Put your name at the end — even two letters. A paper from nobody '
          + 'is a paper nobody will ask about.']
      }
    },
    {
      id: 'c8',
      ref: '1.6.5',
      bookRef: 'Unit 1 · 1.6 · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the paper Abu Yasser wrote. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>FOR AMMAR — 4 MARCH</b></p><p><b>14</b> boxes (one four — NOT '
          + '40)</p><p><b>Row 3, shelf 2</b></p><p>Ask me if it is not there. Do '
          + 'not put it somewhere else.</p><p><b>A.Y.</b></p><h4>Writer\'s '
          + 'box</h4><p><b>A paper for one person has four things:</b> the name → '
          + 'the number → the place → what to do if there is a problem.</p><p>⚠ '
          + 'Write a number that can be read two ways <b>twice</b>: <b>14</b> '
          + '<i>(one four)</i>. It costs four words and it saves a day.</p><p>⚠ '
          + 'Put your name at the end — even two letters. A paper from nobody is '
          + 'a paper nobody will ask about.</p>'
      },
      questions: [{
            q: 'How many boxes?',
            model: 'Fourteen',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What must Ammar do if the shelf is full?',
            model: 'Ask Abu Yasser. Do not put them somewhere else',
            minWords: 3,
            rows: 2
          },
      {
            q: 'Who wrote the paper?',
            model: 'Abu Yasser — the initials A.Y',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '1.6.6',
      bookRef: 'Unit 1 · 1.6 · Write with help',
      type: 'writer',
      title: 'Write with help',
      instruction: 'Write a paper for one person at your work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['FOR HANI — 11 MARCH',
      '15 rolls (one five — NOT 50) Place: row 6, shelf 1'],
      coach: {
        title: 'What to include',
        task: 'Write a paper for one person at your work (15 words or more).',
        criteria: [{ t: 'A paper for one person has four things: the name → the number → '
              + 'the place → what to do if there is a problem.' },
            { t: '⚠ Write a number that can be read two ways twice: 14 (one four). '
              + 'It costs four words and it saves a day.' },
            { t: '⚠ Put your name at the end — even two letters. A paper from '
              + 'nobody is a paper nobody will ask about.' }]
      },
      aiCheck: {
        task: 'Write a paper for one person at your work (15 words or more).',
        grammar: 'When you do not understand',
        must: ['A paper for one person has four things: the name → the number → the '
          + 'place → what to do if there is a problem.',
        '⚠ Write a number that can be read two ways twice: 14 (one four). It '
          + 'costs four words and it saves a day.',
        '⚠ Put your name at the end — even two letters. A paper from nobody '
          + 'is a paper nobody will ask about.']
      }
    },
    {
      id: 'c10',
      ref: '1.6.6P',
      bookRef: 'Unit 1 · 1.6 · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>A '
          + 'name at the top</td><td>&nbsp;</td></tr><tr><td>The number written '
          + 'twice</td><td>&nbsp;</td></tr><tr><td>A '
          + 'place</td><td>&nbsp;</td></tr><tr><td>A name at the '
          + 'end</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'When you do not understand',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A paper for one person has four things: the name → the number → the '
          + 'place → what to do if there is a problem.',
        '⚠ Write a number that can be read two ways twice: 14 (one four). It '
          + 'costs four words and it saves a day.',
        '⚠ Put your name at the end — even two letters. A paper from nobody '
          + 'is a paper nobody will ask about.']
      }
    },
    {
      id: 'c11',
      ref: '1.6.6R',
      bookRef: 'Unit 1 · 1.6 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their number line. The class says if it can be read two ways.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '1.6.7',
      bookRef: 'Unit 1 · 1.6 · Write freely',
      type: 'writer',
      title: 'Write freely',
      instruction: 'Write about a time you did not understand at work (<b>20 to 35 words</b>). '
  + 'What was it? What did you do? What happened?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['A driver told me sixty cartons. I wrote sixteen. I did not ask again. '
        + 'We sent sixteen and the customer telephoned in the afternoon. Now I '
        + 'always say: is it sixteen or sixty?'],
      coach: {
        title: 'What to include',
        task: 'Write about a time you did not understand at work (20 to 35 words). What was '
  + 'it? What did you do? What happened?',
        criteria: [{ t: 'A paper for one person has four things: the name → the number → '
              + 'the place → what to do if there is a problem.' },
            { t: '⚠ Write a number that can be read two ways twice: 14 (one four). '
              + 'It costs four words and it saves a day.' },
            { t: '⚠ Put your name at the end — even two letters. A paper from '
              + 'nobody is a paper nobody will ask about.' }]
      },
      aiCheck: {
        task: 'Write about a time you did not understand at work (20 to 35 words). '
          + 'What was it? What did you do? What happened?',
        grammar: 'When you do not understand',
        must: ['A paper for one person has four things: the name → the number → the '
          + 'place → what to do if there is a problem.',
        '⚠ Write a number that can be read two ways twice: 14 (one four). It '
          + 'costs four words and it saves a day.',
        '⚠ Put your name at the end — even two letters. A paper from nobody '
          + 'is a paper nobody will ask about.']
      }
    },
    {
      id: 'c13',
      ref: '1.6.7P',
      bookRef: 'Unit 1 · 1.6 · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did you ask again? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '? Did you ask again? — No. Now I ask',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did you ask again? '
          + 'Write the answer.',
        grammar: 'When you do not understand',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A paper for one person has four things: the name → the number → the '
          + 'place → what to do if there is a problem.',
        '⚠ Write a number that can be read two ways twice: 14 (one four). It '
          + 'costs four words and it saves a day.',
        '⚠ Put your name at the end — even two letters. A paper from nobody '
          + 'is a paper nobody will ask about.']
      }
    },
    {
      id: 'c14',
      ref: '1.6.7R',
      bookRef: 'Unit 1 · 1.6 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many did the person ask again? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> four numbers from '
          + 'your work that can be read two ways (20 words or more).</p>'
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
