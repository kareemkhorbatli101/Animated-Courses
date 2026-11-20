/* Unit 5 · cycle 5.2 — 4 March, not 3 April.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u5-s02', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 5 · 5.2', part: '5.2',
          section: '2', lesson: '4 March, not 3 April', title: '4 March, not 3 April' },
  objective: 'read a date, and not read it the wrong way round',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '5.2.1',
      bookRef: 'Unit 5 · 5.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say the twelve months with your teacher. Start with January.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is today\'s date? Write it three ways:',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The months, and the date',
      'Delivery note no. 4417',
      'To: Sham Trading, Damascus',
      'Received by: Date received:'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '5.2.2',
      bookRef: 'Unit 5 · 5.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u5-5-2',
      passage: {
        title: 'Language box',
        html: '<p><b>The months, and the date</b></p><table '
          + 'class=\'bk\'><tr><th></th><th></th><th></th><th></th></tr><tr><td><b>January</b></td><td><b>February</b></td><td><b>March</b></td><td><b>April</b></td></tr><tr><td><b>May</b></td><td><b>June</b></td><td><b>July</b></td><td><b>August</b></td></tr><tr><td><b>September</b></td><td><b>October</b></td><td><b>November</b></td><td><b>December</b></td></tr></table><p>⚠ '
          + '<b>Three ways to write the same day, and only one of them is '
          + 'safe:</b></p><table class=\'bk\'><tr><th>How it is '
          + 'written</th><th>Safe?</th></tr><tr><td><b>4 March</b> · <b>4 March '
          + '2026</b></td><td>⚠ <b>SAFE — the month is in letters and cannot be '
          + 'read two ways</b></td></tr><tr><td><b>04/03</b></td><td><b>NOT safe '
          + '— day first here, month first in some '
          + 'countries</b></td></tr><tr><td><b>4/3/26</b></td><td><b>NOT safe — '
          + 'and the year is short too</b></td></tr></table><p>⚠ <b>On a note you '
          + 'RECEIVE, work out which way it is from the name at the top.</b> '
          + '<b>On a sheet you WRITE, put the month in letters. '
          + 'Always.</b></p><p>⚠ <b>A big letter on every month:</b> '
          + '<b>M</b>arch, not <s>march</s>. <b>Same rule as the days in '
          + '3.1.</b></p><p><b>Practise:</b> Write the date in letters.</p><p>1 '
          + '04/03 <i>(from Beirut)</i> = <span class="blank"></span> 2 12/01 '
          + '<i>(from Aleppo)</i> = <span class="blank"></span> 3 Write today in '
          + 'letters: <span class="blank"></span></p><p><b>Useful words:</b> 4 '
          + 'March · the month in letters · day first · month first · two '
          + 'ways</p><p><b>Sound — the month, loud.</b> 🔊 <b>Track 5.4</b> '
          + 'Listen. Say it. <i>four MARCH · twelve JANUARY.</i> <b>The month is '
          + 'the loud part, because the month is the part that goes wrong.</b> '
          + 'Say each one four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is the date on the note?',
            options: [{
              t: '3 April',
              ok: false,
              why: 'That is how the same six numbers would read in America.'
            },
            {
              t: '4 March',
              ok: true,
              why: 'The note came from Beirut, where the day is written first.'
            },
            {
              t: '4 April',
              ok: false,
              why: 'Neither reading gives April the fourth.'
            }],
            evidence: 'the exchange about day first or month first'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '5.2.2',
      bookRef: 'Unit 5 · 5.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Which country writes the month first?',
            model: 'America',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What does Nour tell Ammar to write?',
            model: 'The month in letters, on his own sheet',
            minWords: 2,
            rows: 2,
            keys: ['month',
              'letters',
              'sheet'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '5.2.3',
      bookRef: 'Unit 5 · 5.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One asks. One answers. Then change places.',
      scene: 'u5-5-2-pair',
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
        rows: [['04/03 · fourth of March · day · month · America · third of April · letters',
          '11/09 · eleventh of September · day · month · America · ninth of '
            + 'November · letters']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '5.2.3R',
      bookRef: 'Unit 5 · 5.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ 4 March</td><td>☐ the month in '
          + 'letters</td><td>☐ day first</td><td>☐ month first</td><td>☐ two '
          + 'ways</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The months, and the date',
      'Delivery note no. 4417',
      'To: Sham Trading, Damascus',
      'Received by: Date received:'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '5.2.4',
      bookRef: 'Unit 5 · 5.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Write four dates from your life in numbers. Give them to your partner. They '
  + 'write them in letters.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>In numbers</th><th>In '
          + 'letters</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'In numbers: 07/06 → In letters: 7 June · In numbers: 23/11 → In '
              + 'letters: 23 November · In numbers: 01/01 → In letters: 1 January '
              + '· In numbers: 12/05 → In letters: 12 May',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Write four dates from your life in numbers. Give them to your '
          + 'partner. They write them in letters.',
        grammar: 'The months, and the date',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['When you receive a note with a number date, write the letter date on '
          + 'it yourself — in pencil, on the back or beside it.',
        '⚠ Write WHY as well: Beirut. Day first. Three words that tell the '
          + 'next reader how you worked it out, so he does not have to work it '
          + 'out again — or work it out differently.',
        '⚠ Fill in BOTH empty lines. Received by and Date received. A note '
          + 'signed with no date received is a note that says you agreed, and '
          + 'does not say when.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '5.2.4R',
      bookRef: 'Unit 5 · 5.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: My partner wrote . In letters that is . It could also be .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'My partner wrote 07/06. In letters that is 7 June. It could also be 6 July',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: My partner wrote . In letters that is . It could also be .',
        grammar: 'The months, and the date',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['When you receive a note with a number date, write the letter date on '
          + 'it yourself — in pencil, on the back or beside it.',
        '⚠ Write WHY as well: Beirut. Day first. Three words that tell the '
          + 'next reader how you worked it out, so he does not have to work it '
          + 'out again — or work it out differently.',
        '⚠ Fill in BOTH empty lines. Received by and Date received. A note '
          + 'signed with no date received is a note that says you agreed, and '
          + 'does not say when.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '5.2.5',
      bookRef: 'Unit 5 · 5.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the top of the real note. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>BEIRUT PACKAGING CO.</b></p><p><b>Delivery note no. '
          + '4417</b></p><p><b>Date:</b> 04/03/2026</p><p><b>To:</b> Sham '
          + 'Trading, Damascus</p><p><b>Received by:</b> <span '
          + 'class="blank"></span> <b>Date received:</b> <span '
          + 'class="blank"></span></p><p>⚠ <b>Written on the back in pencil, by '
          + 'Nour:</b> <i>04/03 = 4 March. Beirut. Day '
          + 'first.</i></p><h4>Writer\'s box</h4><p><b>When you receive a note '
          + 'with a number date, write the letter date on it yourself</b> — <b>in '
          + 'pencil, on the back or beside it.</b></p><p>⚠ <b>Write WHY as '
          + 'well:</b> <i>Beirut. Day first.</i> <b>Three words that tell the '
          + 'next reader how you worked it out, so he does not have to work it '
          + 'out again</b> — <b>or work it out differently.</b></p><p>⚠ <b>Fill '
          + 'in BOTH empty lines.</b> <i>Received by</i> <b>and</b> <i>Date '
          + 'received</i>. <b>A note signed with no date received is a note that '
          + 'says you agreed, and does not say when.</b></p>'
      },
      questions: [{
            q: 'What date did the company send the goods?',
            model: '4 March 2026',
            minWords: 1,
            rows: 2,
            keys: ['march',
              '2026'],
            need: 1
          },
      {
            q: 'Why did Nour write on the back?',
            model: 'So the next reader knows HOW she worked the date out, and does '
              + 'not work it out differently',
            minWords: 6,
            rows: 2,
            keys: ['next',
              'reader',
              'knows',
              'worked'],
            need: 1
          },
      {
            q: 'What two things are empty on this note?',
            model: 'Received by and Date received',
            minWords: 2,
            rows: 2,
            keys: ['received',
              'date'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '5.2.6',
      bookRef: 'Unit 5 · 5.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write the top of a delivery note for your own work, and fill in the two '
  + 'empty lines (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['ALEPPO PAPER MILLS (company)',
      'Delivery note no. 2208 Date: 12/03/2026'],
      coach: {
        title: 'What to include',
        task: 'Write the top of a delivery note for your own work, and fill in the two '
  + 'empty lines (15 words or more).',
        criteria: [{ t: 'When you receive a note with a number date, write the letter '
              + 'date on it yourself — in pencil, on the back or beside it.' },
            { t: '⚠ Write WHY as well: Beirut. Day first. Three words that tell '
              + 'the next reader how you worked it out, so he does not have to '
              + 'work it out again — or work it out differently.' },
            { t: '⚠ Fill in BOTH empty lines. Received by and Date received. A '
              + 'note signed with no date received is a note that says you '
              + 'agreed, and does not say when.' }]
      },
      aiCheck: {
        task: 'Write the top of a delivery note for your own work, and fill in the '
          + 'two empty lines (15 words or more).',
        grammar: 'The months, and the date',
        must: ['When you receive a note with a number date, write the letter date on '
          + 'it yourself — in pencil, on the back or beside it.',
        '⚠ Write WHY as well: Beirut. Day first. Three words that tell the '
          + 'next reader how you worked it out, so he does not have to work it '
          + 'out again — or work it out differently.',
        '⚠ Fill in BOTH empty lines. Received by and Date received. A note '
          + 'signed with no date received is a note that says you agreed, and '
          + 'does not say when.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '5.2.6P',
      bookRef: 'Unit 5 · 5.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>The '
          + 'month in letters somewhere on the '
          + 'page</td><td>&nbsp;</td></tr><tr><td><i>Received by</i> filled '
          + 'in</td><td>&nbsp;</td></tr><tr><td><i>Date received</i> filled '
          + 'in</td><td>&nbsp;</td></tr><tr><td>The pencil note saying how you '
          + 'read the date</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "Date received: 12/03" · (pointing) '
              + 'at the pencil note. (reading) "12 March"',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'The months, and the date',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['When you receive a note with a number date, write the letter date on '
          + 'it yourself — in pencil, on the back or beside it.',
        '⚠ Write WHY as well: Beirut. Day first. Three words that tell the '
          + 'next reader how you worked it out, so he does not have to work it '
          + 'out again — or work it out differently.',
        '⚠ Fill in BOTH empty lines. Received by and Date received. A note '
          + 'signed with no date received is a note that says you agreed, and '
          + 'does not say when.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '5.2.6R',
      bookRef: 'Unit 5 · 5.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their pencil note. The class says if they could follow the '
  + 'reasoning.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The months, and the date',
      'Delivery note no. 4417',
      'To: Sham Trading, Damascus',
      'Received by: Date received:'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '5.2.7',
      bookRef: 'Unit 5 · 5.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about dates at your work (<b>20 to 35 words</b>). How are they '
  + 'written? Has a date ever been read the wrong way? What happened?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['My company writes 12/03 and the Lebanese company writes 12/03 and they '
        + 'mean the same thing. The Turkish papers come with the month first. '
        + 'Last year we sent a lorry a month early'],
      stems: ['The Turkish papers…',
      'Last year we…'],
      coach: {
        title: 'What to include',
        task: 'Write about dates at your work (20 to 35 words). How are they written? Has a '
  + 'date ever been read the wrong way? What happened?',
        criteria: [{ t: 'When you receive a note with a number date, write the letter '
              + 'date on it yourself — in pencil, on the back or beside it.' },
            { t: '⚠ Write WHY as well: Beirut. Day first. Three words that tell '
              + 'the next reader how you worked it out, so he does not have to '
              + 'work it out again — or work it out differently.' },
            { t: '⚠ Fill in BOTH empty lines. Received by and Date received. A '
              + 'note signed with no date received is a note that says you '
              + 'agreed, and does not say when.' }]
      },
      aiCheck: {
        task: 'Write about dates at your work (20 to 35 words). How are they '
          + 'written? Has a date ever been read the wrong way? What happened?',
        grammar: 'The months, and the date',
        must: ['When you receive a note with a number date, write the letter date on '
          + 'it yourself — in pencil, on the back or beside it.',
        '⚠ Write WHY as well: Beirut. Day first. Three words that tell the '
          + 'next reader how you worked it out, so he does not have to work it '
          + 'out again — or work it out differently.',
        '⚠ Fill in BOTH empty lines. Received by and Date received. A note '
          + 'signed with no date received is a note that says you agreed, and '
          + 'does not say when.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '5.2.7P',
      bookRef: 'Unit 5 · 5.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Which way does your company '
  + 'write them? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Which way does your company write them? — Day first. But the '
              + 'Turkish suppliers write month first and nobody told us',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Which way does your '
          + 'company write them? Write the answer.',
        grammar: 'The months, and the date',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['When you receive a note with a number date, write the letter date on '
          + 'it yourself — in pencil, on the back or beside it.',
        '⚠ Write WHY as well: Beirut. Day first. Three words that tell the '
          + 'next reader how you worked it out, so he does not have to work it '
          + 'out again — or work it out differently.',
        '⚠ Fill in BOTH empty lines. Received by and Date received. A note '
          + 'signed with no date received is a note that says you agreed, and '
          + 'does not say when.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '5.2.7R',
      bookRef: 'Unit 5 · 5.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many companies write the month in letters? Count them '
  + 'on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> six dates from your '
          + 'work in letters (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The months, and the date',
      'Delivery note no. 4417',
      'To: Sham Trading, Damascus',
      'Received by: Date received:'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
