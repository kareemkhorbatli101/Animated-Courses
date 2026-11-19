/* Unit 4 · cycle 4.4 — It is not there. It is gone..

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u4-s04', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 4 · 4.4', part: '4.4',
          section: '4', lesson: 'It is not there. It is gone.', title: 'It is not there. It is gone.' },
  objective: 'say it is not there',
  cards: [
    {
      id: 'c1',
      ref: '4.4.1',
      bookRef: 'Unit 4 · 4.4 · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'You cannot find a thing. What do you say? Say it in Arabic, then '
              + 'in English.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the two lines. Which tells the supervisor more? I cannot '
              + 'find it · It is not in row two. The space is empty.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '4.4.2',
      bookRef: 'Unit 4 · 4.4 · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u4-4-4',
      passage: {
        title: 'Language box',
        html: '<p><b>Saying a thing is not there</b></p><table '
          + 'class=\'bk\'><tr><th>You mean</th><th>You say</th></tr><tr><td>the '
          + 'space is empty</td><td><b>There is nothing</b> in it. · <b>The space '
          + 'is empty.</b></td></tr><tr><td>one thing is missing</td><td><b>It is '
          + 'not there.</b> · <b>It is gone.</b></td></tr><tr><td>more than '
          + 'one</td><td><b>They are not there.</b> · <b>There are no '
          + 'cartons.</b></td></tr><tr><td>you do not know where</td><td><b>I do '
          + 'not know where it is.</b></td></tr></table><p>⚠ <b><i>It is not '
          + 'there</i> and <i>I cannot find it</i> are not the same thing.</b> '
          + '<b><i>I cannot find it</i> is about you. <i>It is not there</i> is '
          + 'about the shelf.</b> <b>Say the one about the shelf.</b></p><p>⚠ '
          + '<b>Say WHAT YOU SAW, not what you think:</b> <i>a clean square, no '
          + 'dust</i>. <b>Abu Yasser works out the rest from that, and he can '
          + 'only do it if you tell him the dust.</b></p><p><b>Practise:</b> '
          + 'Write the line.</p><p>1 One carton is missing. <span '
          + 'class="blank"></span>. 2 The shelf is empty. <span '
          + 'class="blank"></span>. 3 You do not know. <span '
          + 'class="blank"></span>.</p><p><b>Useful words:</b> It is not there. · '
          + 'It is gone. · The space is empty. · no dust · a clean '
          + 'square</p><p><b>Sound — the flat bad news.</b> 🔊 <b>Track 4.8</b> '
          + 'Listen. <i>The four cartons are not there.↘</i> <b>Flat and slow. No '
          + 'panic in the voice.</b> <b>Bad news said calmly is listened to.</b> '
          + 'Say it four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is gone?',
            options: [{
              t: 'one carton',
              ok: false
            },
            {
              t: 'four cartons',
              ok: true,
              why: 'four cartons'
            },
            {
              t: 'the whole shelf',
              ok: false
            }]
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '4.4.2',
      bookRef: 'Unit 4 · 4.4 · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is in the empty space?',
            model: 'Nothing — a clean square, no dust',
            minWords: 2,
            rows: 2
          },
      {
            q: 'What does Abu Yasser do first?',
            model: 'He asks the counter',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '4.4.3',
      bookRef: 'Unit 4 · 4.4 · Practise',
      type: 'roleplay',
      title: 'Practise',
      instruction: 'Work in pairs. One reports. One asks. Then change places.',
      scene: 'u4-4-4-pair',
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
        rows: [['row 3 · shelf 2 · four cartons · no dust · clean · today',
          'row 1 · shelf 4 · six packets · thick dust · dirty · a long time ago']]
      }
    },
    {
      id: 'c5',
      ref: '4.4.3R',
      bookRef: 'Unit 4 · 4.4 · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ It is not there.</td><td>☐ It is '
          + 'gone.</td><td>☐ The space is empty.</td><td>☐ no dust</td><td>☐ a '
          + 'clean square</td></tr></table>'
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
      ref: '4.4.4',
      bookRef: 'Unit 4 · 4.4 · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of two things that went missing at your work. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The thing</th><th>What I '
          + 'saw</th><th>When it went</th><th>Who I '
          + 'told</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'The thing: six packets What I saw: an empty space, thick dust '
              + 'When: a long time ago Who I told: Abu Yasser · The thing: the '
              + 'spare key What I saw: an empty hook, the door open When: this '
              + 'morning Who I told: the gate man first',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of two things that went missing at your work. Write it.',
        grammar: 'Saying a thing is not there',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A missing note has five lines: what → where it should be → what you '
          + 'SAW → who you told → when.',
        '⚠ Line three is the whole note. An empty space, a clean square, no '
          + 'dust is three facts somebody else can use. I cannot find it is none.',
        '⚠ Put the TIME on the note, twice: when you saw it and when you told '
          + 'somebody. If the cartons come back at nine, the two times are what '
          + 'prove you did your job at 7.40.']
      }
    },
    {
      id: 'c7',
      ref: '4.4.4R',
      bookRef: 'Unit 4 · 4.4 · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: The was not there. I saw . I told .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'The six packets were not there. I saw an empty space and thick '
              + 'dust. I told Abu Yasser',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: The was not there. I saw . I told .',
        grammar: 'Saying a thing is not there',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A missing note has five lines: what → where it should be → what you '
          + 'SAW → who you told → when.',
        '⚠ Line three is the whole note. An empty space, a clean square, no '
          + 'dust is three facts somebody else can use. I cannot find it is none.',
        '⚠ Put the TIME on the note, twice: when you saw it and when you told '
          + 'somebody. If the cartons come back at nine, the two times are what '
          + 'prove you did your job at 7.40.']
      }
    },
    {
      id: 'c8',
      ref: '4.4.5',
      bookRef: 'Unit 4 · 4.4 · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the note Ammar wrote. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>MISSING — 17 MARCH, 7.40</b></p><p><b>What:</b> four cartons '
          + 'of labels.</p><p><b>Where it should be:</b> row 3, shelf '
          + '2.</p><p><b>What I saw:</b> an empty space. A clean square. No '
          + 'dust.</p><p><b>Who I told:</b> Abu Yasser, 7.45. He asked the '
          + 'counter.</p><p><b>A.Z.</b></p><h4>Writer\'s box</h4><p><b>A missing '
          + 'note has five lines:</b> what → where it should be → <b>what you '
          + 'SAW</b> → who you told → when.</p><p>⚠ <b>Line three is the whole '
          + 'note.</b> <b><i>An empty space, a clean square, no dust</i> is three '
          + 'facts somebody else can use.</b> <b><i>I cannot find it</i> is '
          + 'none.</b></p><p>⚠ <b>Put the TIME on the note, twice:</b> <b>when '
          + 'you saw it and when you told somebody.</b> <b>If the cartons come '
          + 'back at nine, the two times are what prove you did your job at '
          + '7.40.</b></p>'
      },
      questions: [{
            q: 'What is missing?',
            model: 'Four cartons of labels',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What did Ammar see?',
            model: 'An empty space, a clean square, no dust',
            minWords: 2,
            rows: 2
          },
      {
            q: 'Who did he tell, and when?',
            model: 'Abu Yasser, at 7.45',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '4.4.6',
      bookRef: 'Unit 4 · 4.4 · Write with help',
      type: 'writer',
      title: 'Write with help',
      instruction: 'Write a missing note for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['MISSING — 18 MARCH, 8.10',
      'What: six packets of labels'],
      coach: {
        title: 'What to include',
        task: 'Write a missing note for your own work (15 words or more).',
        criteria: [{ t: 'A missing note has five lines: what → where it should be → what '
              + 'you SAW → who you told → when.' },
            { t: '⚠ Line three is the whole note. An empty space, a clean square, '
              + 'no dust is three facts somebody else can use. I cannot find it '
              + 'is none.' },
            { t: '⚠ Put the TIME on the note, twice: when you saw it and when you '
              + 'told somebody. If the cartons come back at nine, the two times '
              + 'are what prove you did your job at 7.40.' }]
      },
      aiCheck: {
        task: 'Write a missing note for your own work (15 words or more).',
        grammar: 'Saying a thing is not there',
        must: ['A missing note has five lines: what → where it should be → what you '
          + 'SAW → who you told → when.',
        '⚠ Line three is the whole note. An empty space, a clean square, no '
          + 'dust is three facts somebody else can use. I cannot find it is none.',
        '⚠ Put the TIME on the note, twice: when you saw it and when you told '
          + 'somebody. If the cartons come back at nine, the two times are what '
          + 'prove you did your job at 7.40.']
      }
    },
    {
      id: 'c10',
      ref: '4.4.6P',
      bookRef: 'Unit 4 · 4.4 · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>What you SAW, not what you '
          + 'think</td><td>&nbsp;</td></tr><tr><td>Where it should be, with an '
          + 'address</td><td>&nbsp;</td></tr><tr><td>Two times — when you saw it '
          + 'and when you told</td><td>&nbsp;</td></tr><tr><td>Who you told, by '
          + 'name</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "What I saw: nothing" · (pointing) at '
              + 'the top. (reading) "MISSING — 18 March"',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Saying a thing is not there',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A missing note has five lines: what → where it should be → what you '
          + 'SAW → who you told → when.',
        '⚠ Line three is the whole note. An empty space, a clean square, no '
          + 'dust is three facts somebody else can use. I cannot find it is none.',
        '⚠ Put the TIME on the note, twice: when you saw it and when you told '
          + 'somebody. If the cartons come back at nine, the two times are what '
          + 'prove you did your job at 7.40.']
      }
    },
    {
      id: 'c11',
      ref: '4.4.6R',
      bookRef: 'Unit 4 · 4.4 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their what I saw line. The class says how many facts are in it.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '4.4.7',
      bookRef: 'Unit 4 · 4.4 · Write freely',
      type: 'writer',
      title: 'Write freely',
      instruction: 'Write about a thing that went missing at your work (<b>20 to 35 words</b>). '
  + 'What did you see? Who did you tell? What happened?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['In January six packets went from row two. I saw thick dust in the '
        + 'space, so they went weeks before. I told Samih at eight. They were at '
        + 'the counter all the time'],
      coach: {
        title: 'What to include',
        task: 'Write about a thing that went missing at your work (20 to 35 words). What '
  + 'did you see? Who did you tell? What happened?',
        criteria: [{ t: 'A missing note has five lines: what → where it should be → what '
              + 'you SAW → who you told → when.' },
            { t: '⚠ Line three is the whole note. An empty space, a clean square, '
              + 'no dust is three facts somebody else can use. I cannot find it '
              + 'is none.' },
            { t: '⚠ Put the TIME on the note, twice: when you saw it and when you '
              + 'told somebody. If the cartons come back at nine, the two times '
              + 'are what prove you did your job at 7.40.' }]
      },
      aiCheck: {
        task: 'Write about a thing that went missing at your work (20 to 35 words). '
          + 'What did you see? Who did you tell? What happened?',
        grammar: 'Saying a thing is not there',
        must: ['A missing note has five lines: what → where it should be → what you '
          + 'SAW → who you told → when.',
        '⚠ Line three is the whole note. An empty space, a clean square, no '
          + 'dust is three facts somebody else can use. I cannot find it is none.',
        '⚠ Put the TIME on the note, twice: when you saw it and when you told '
          + 'somebody. If the cartons come back at nine, the two times are what '
          + 'prove you did your job at 7.40.']
      }
    },
    {
      id: 'c13',
      ref: '4.4.7P',
      bookRef: 'Unit 4 · 4.4 · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did it come back? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Did it come back? — It was never gone. It was at the counter',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did it come back? Write '
          + 'the answer.',
        grammar: 'Saying a thing is not there',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A missing note has five lines: what → where it should be → what you '
          + 'SAW → who you told → when.',
        '⚠ Line three is the whole note. An empty space, a clean square, no '
          + 'dust is three facts somebody else can use. I cannot find it is none.',
        '⚠ Put the TIME on the note, twice: when you saw it and when you told '
          + 'somebody. If the cartons come back at nine, the two times are what '
          + 'prove you did your job at 7.40.']
      }
    },
    {
      id: 'c14',
      ref: '4.4.7R',
      bookRef: 'Unit 4 · 4.4 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many did the thing come back the same day? Count '
  + 'them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> a missing note for '
          + 'something you cannot find at home (20 words or more).</p>'
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
