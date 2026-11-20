/* Unit 3 · cycle 3.5 — Can I swap Thursday?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u3-s05', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 3 · 3.5', part: '3.5',
          section: '5', lesson: 'Can I swap Thursday?', title: 'Can I swap Thursday?' },
  objective: 'ask about the shift and ask to swap',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '3.5.1',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'You need a day off. What do you say? Say it in Arabic, then in English.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the two lines. Which one is better at work? I am not coming '
              + 'on Thursday · Can I swap Thursday with Samih?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '3.5.2',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u3-3-5',
      passage: {
        title: 'Language box',
        html: '<p><b>Asking about the shift, and asking to swap</b></p><table '
          + 'class=\'bk\'><tr><th>You want to know</th><th>You '
          + 'say</th></tr><tr><td>the day</td><td><b>When</b> is the count? · '
          + '<b>What day</b> is the delivery?</td></tr><tr><td>the '
          + 'time</td><td><b>What time</b> does the lorry '
          + 'come?</td></tr><tr><td>to change a day</td><td><b>Can I swap</b> '
          + 'Thursday? · <b>Can I swap</b> with Samih?</td></tr><tr><td>who to '
          + 'ask</td><td><b>Who do I ask?</b></td></tr></table><p>⚠ <b>Ask the '
          + 'OTHER MAN first, then the supervisor.</b> <b>A swap is between two '
          + 'men. The supervisor only writes it on the board.</b></p><p>⚠ <b>Say '
          + 'WHY, in four words.</b> <i>My brother is in hospital.</i> <b>Not a '
          + 'long story. Four words is enough and it is more likely to be '
          + 'believed.</b></p><p><b>Practise:</b> Write the question.</p><p>1 You '
          + 'want the day of the count. <span class="blank"></span>? 2 You want '
          + 'to change Friday. <span class="blank"></span>? 3 You do not know who '
          + 'decides. <span class="blank"></span>?</p><p><b>Useful words:</b> '
          + 'When is…? · Can I swap…? · with Samih · Ask him first. · Then I tell '
          + 'you.</p><p><b>Sound — the polite question.</b> 🔊 <b>Track 3.10</b> '
          + 'Listen. <i>Can I swap Thursday?↗</i> <b>The voice goes up.</b> A '
          + 'flat <i>Can I swap Thursday</i> is not a question, it is an '
          + 'announcement. Say it four times, going up.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Does Abu Yasser say yes?',
            options: [{
              t: 'yes',
              ok: false,
              why: 'Not on its own - he attaches a condition before he will write '
                + 'it on the board.'
            },
            {
              t: 'no',
              ok: false,
              why: 'He does not refuse. Listen again for what he asks Ammar to do first.'
            },
            {
              t: 'yes, if Samih agrees',
              ok: true,
              why: 'He sends Ammar to ask the other man first.'
            }],
            evidence: 'Abu Yasser\'s answer, and the condition in it'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '3.5.2',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Which day does Ammar want?',
            model: 'Thursday',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What must he do first?',
            model: 'He must ask Samih first',
            minWords: 2,
            rows: 2,
            keys: ['ask',
              'samih',
              'first'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '3.5.3',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One asks. One answers. Then change places.',
      scene: 'u3-3-5-pair',
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
        rows: [['the count · Thursday · brother in hospital · Samih',
          'the delivery · Monday · a wedding in Homs · Hani']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '3.5.3R',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ When is…?</td><td>☐ Can I '
          + 'swap…?</td><td>☐ with…</td><td>☐ Ask him first.</td><td>☐ Then I '
          + 'tell you.</td></tr></table>'
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
      ref: '3.5.4',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of a day you want to change. Ask your partner for a swap. Then write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The day I want</th><th>Why, in four '
          + 'words</th><th>Who I swap with</th><th>Who I tell '
          + 'after</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'The day: Thursday Why: my mother is in hospital Swap with: Samih '
              + 'Tell after: Abu Yasser · The day: Friday Why: a wedding in Homs '
              + 'Swap with: Hani Tell after: the supervisor',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of a day you want to change. Ask your partner for a swap. Then write it.',
        grammar: 'Asking about the shift, and asking to swap',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A swap note has four things: the day → who was on → who is on now → '
          + 'both men agreed.',
        '⚠ Write BOTH halves of the swap. One man off and one man on. A note '
          + 'with one half is a note that leaves a hole in the shift.',
        '⚠ Both men agreed is the line that matters. Without it the swap is '
          + 'one man\'s idea, and on the day the other man will not be there.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '3.5.4R',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I want to swap because . I ask first. Then I tell .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I want to swap Thursday because my mother is in hospital. I ask '
              + 'Samih first. Then I tell Abu Yasser',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: I want to swap because . I ask first. Then I tell .',
        grammar: 'Asking about the shift, and asking to swap',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A swap note has four things: the day → who was on → who is on now → '
          + 'both men agreed.',
        '⚠ Write BOTH halves of the swap. One man off and one man on. A note '
          + 'with one half is a note that leaves a hole in the shift.',
        '⚠ Both men agreed is the line that matters. Without it the swap is '
          + 'one man\'s idea, and on the day the other man will not be there.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '3.5.5',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the note on the board. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>SWAP — WRITTEN ON THE BOARD BY THE '
          + 'SUPERVISOR</b></p><p><b>Thursday 21 March</b></p><p><b>Was:</b> '
          + 'Ammar Zreik — morning · <b>Now:</b> Samih Qassar — '
          + 'morning</p><p><b>Was:</b> Samih Qassar — off · <b>Now:</b> Ammar '
          + 'Zreik — off</p><p><b>Both men agreed. A.Y. 18 '
          + 'March.</b></p><h4>Writer\'s box</h4><p><b>A swap note has four '
          + 'things:</b> the day → who was on → who is on now → <b>both men '
          + 'agreed</b>.</p><p>⚠ <b>Write BOTH halves of the swap.</b> <b>One man '
          + 'off and one man on. A note with one half is a note that leaves a '
          + 'hole in the shift.</b></p><p>⚠ <b><i>Both men agreed</i> is the line '
          + 'that matters.</b> <b>Without it the swap is one man\'s idea, and on '
          + 'the day the other man will not be there.</b></p>'
      },
      questions: [{
            q: 'Who works on Thursday 21 March now?',
            model: 'Samih Qassar',
            minWords: 1,
            rows: 2,
            keys: ['samih',
              'qassar'],
            need: 1
          },
      {
            q: 'Who wrote the swap on the board?',
            model: 'The supervisor — Abu Yasser, on 18 March',
            minWords: 2,
            rows: 2,
            keys: ['supervisor',
              'abu',
              'yasser',
              'march'],
            need: 1
          },
      {
            q: 'What two words say the swap is agreed?',
            model: 'Both men agreed',
            minWords: 1,
            rows: 2,
            keys: ['both',
              'men',
              'agreed'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '3.5.6',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a swap note for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['SWAP — THURSDAY 21 MARCH',
      'Was: Samih Qassar — morning · Now: Ammar Zreik — morning'],
      coach: {
        title: 'What to include',
        task: 'Write a swap note for your own work (15 words or more).',
        criteria: [{ t: 'A swap note has four things: the day → who was on → who is on '
              + 'now → both men agreed.' },
            { t: '⚠ Write BOTH halves of the swap. One man off and one man on. A '
              + 'note with one half is a note that leaves a hole in the shift.' },
            { t: '⚠ Both men agreed is the line that matters. Without it the swap '
              + 'is one man\'s idea, and on the day the other man will not be '
              + 'there.' }]
      },
      aiCheck: {
        task: 'Write a swap note for your own work (15 words or more).',
        grammar: 'Asking about the shift, and asking to swap',
        must: ['A swap note has four things: the day → who was on → who is on now → '
          + 'both men agreed.',
        '⚠ Write BOTH halves of the swap. One man off and one man on. A note '
          + 'with one half is a note that leaves a hole in the shift.',
        '⚠ Both men agreed is the line that matters. Without it the swap is '
          + 'one man\'s idea, and on the day the other man will not be there.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '3.5.6P',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>Both halves of the '
          + 'swap</td><td>&nbsp;</td></tr><tr><td>The day at the '
          + 'top</td><td>&nbsp;</td></tr><tr><td><i>Both '
          + 'agreed</i></td><td>&nbsp;</td></tr><tr><td>Who wrote it, and '
          + 'when</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "Now: Ammar — morning" · (pointing) '
              + 'Here. (reading) "SWAP"',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Asking about the shift, and asking to swap',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A swap note has four things: the day → who was on → who is on now → '
          + 'both men agreed.',
        '⚠ Write BOTH halves of the swap. One man off and one man on. A note '
          + 'with one half is a note that leaves a hole in the shift.',
        '⚠ Both men agreed is the line that matters. Without it the swap is '
          + 'one man\'s idea, and on the day the other man will not be there.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '3.5.6R',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their note. The class says if anybody is missing from the shift.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '3.5.7',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a day you needed off (<b>20 to 35 words</b>). What day? Why? Who '
  + 'did you ask? What happened?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['Last month I needed Friday off for a wedding in Homs. I asked Hani '
        + 'first and he said yes. Then I told the supervisor and he wrote it on '
        + 'the board'],
      stems: ['Last month I…',
      'I asked Hani…',
      'Then I told…'],
      coach: {
        title: 'What to include',
        task: 'Write about a day you needed off (20 to 35 words). What day? Why? Who did '
  + 'you ask? What happened?',
        criteria: [{ t: 'A swap note has four things: the day → who was on → who is on '
              + 'now → both men agreed.' },
            { t: '⚠ Write BOTH halves of the swap. One man off and one man on. A '
              + 'note with one half is a note that leaves a hole in the shift.' },
            { t: '⚠ Both men agreed is the line that matters. Without it the swap '
              + 'is one man\'s idea, and on the day the other man will not be '
              + 'there.' }]
      },
      aiCheck: {
        task: 'Write about a day you needed off (20 to 35 words). What day? Why? '
          + 'Who did you ask? What happened?',
        grammar: 'Asking about the shift, and asking to swap',
        must: ['A swap note has four things: the day → who was on → who is on now → '
          + 'both men agreed.',
        '⚠ Write BOTH halves of the swap. One man off and one man on. A note '
          + 'with one half is a note that leaves a hole in the shift.',
        '⚠ Both men agreed is the line that matters. Without it the swap is '
          + 'one man\'s idea, and on the day the other man will not be there.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '3.5.7P',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Who did you ask first? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Who did you ask first? — Hani. He was off that day',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Who did you ask first? '
          + 'Write the answer.',
        grammar: 'Asking about the shift, and asking to swap',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A swap note has four things: the day → who was on → who is on now → '
          + 'both men agreed.',
        '⚠ Write BOTH halves of the swap. One man off and one man on. A note '
          + 'with one half is a note that leaves a hole in the shift.',
        '⚠ Both men agreed is the line that matters. Without it the swap is '
          + 'one man\'s idea, and on the day the other man will not be there.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '3.5.7R',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many did the writer ask the other worker first? '
  + 'Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> a swap you would '
          + 'like, with both halves and who you ask first (20 words or more).</p>'
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
