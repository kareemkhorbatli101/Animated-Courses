/* Unit 4 · cycle 4.3 — Where is the big roll?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u4-s03', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 4 · 4.3', part: '4.3',
          section: '3', lesson: 'Where is the big roll?', title: 'Where is the big roll?' },
  objective: 'ask where something is',
  cards: [
    {
      id: 'c1',
      ref: '4.3.1',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Ask your partner where three things in this room are.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the two questions. Which is correct? Where is the rolls? · '
              + 'Where are the rolls?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '4.3.2',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u4-4-3',
      passage: {
        title: 'Language box',
        html: '<p><b>Asking where</b></p><table class=\'bk\'><tr><th>One '
          + 'thing</th><th>More than one thing</th></tr><tr><td><b>Where is</b> '
          + 'the roll?</td><td><b>Where are</b> the '
          + 'rolls?</td></tr><tr><td><b>Where is</b> the box?</td><td><b>Where '
          + 'are</b> the boxes?</td></tr><tr><td><b>Where is</b> the '
          + 'ladder?</td><td><b>Where are</b> the labels?</td></tr></table><p>⚠ '
          + '<b>One thing: <i>is</i>. More than one: <i>are</i>.</b> <b>The same '
          + 'split as Unit 1.4, and the -s on the noun tells you '
          + 'which.</b></p><p>⚠ <b>A <i>where</i> question goes DOWN at the end, '
          + 'not up.</b> <i>Where is the roll?↘</i> <b>It is the opposite of '
          + '<i>Can I swap Thursday?↗</i> from 3.5.</b> <b>Questions that start '
          + 'with a question word go down.</b></p><p><b>Practise:</b> Write '
          + '<i>is</i> or <i>are</i>.</p><p>1 Where <span class="blank"></span> '
          + 'the ladder? 2 Where <span class="blank"></span> the count sheets? 3 '
          + 'Where <span class="blank"></span> my badge? 4 Where <span '
          + 'class="blank"></span> the four pallets?</p><p><b>Useful words:</b> '
          + 'Where is…? · Where are…? · It says so on the paper. · somewhere '
          + 'sensible · standing up</p><p><b>Sound — the question that goes '
          + 'down.</b> 🔊 <b>Track 4.6</b> Listen. <i>Where IS the roll?↘</i> '
          + '<b>The loud part is <i>is</i> and the voice falls.</b> Say it four '
          + 'times, falling.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Do they find the roll?',
            options: [{
              t: 'yes',
              ok: false
            },
            {
              t: 'no',
              ok: false
            },
            {
              t: 'yes, in the wrong place',
              ok: true,
              why: 'yes, in the wrong place'
            }]
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '4.3.2',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Where should the roll be?',
            model: 'Row two, shelf one',
            minWords: 1,
            rows: 2
          },
      {
            q: 'Where is it?',
            model: 'Behind the door, standing up',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '4.3.3',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      instruction: 'Work in pairs. One asks. One answers. Then change places.',
      scene: 'u4-4-3-pair',
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
        rows: [['big roll · row 2 · shelf 1 · rolls · behind the door',
          'long ladder · row 4 · shelf 1 · ladders · next to the gate']]
      }
    },
    {
      id: 'c5',
      ref: '4.3.3R',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Where is…?</td><td>☐ Where '
          + 'are…?</td><td>☐ It says so on the paper.</td><td>☐ somewhere '
          + 'sensible</td><td>☐ standing up</td></tr></table>'
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
      ref: '4.3.4',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Ask your partner where four things at their work are. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>My question</th><th>Their '
          + 'answer</th></tr><tr><td>Where <span class="blank"></span> the <span '
          + 'class="blank"></span>?</td><td>&nbsp;</td></tr><tr><td>Where <span '
          + 'class="blank"></span> the <span '
          + 'class="blank"></span>?</td><td>&nbsp;</td></tr><tr><td>Where <span '
          + 'class="blank"></span> the <span '
          + 'class="blank"></span>?</td><td>&nbsp;</td></tr><tr><td>Where <span '
          + 'class="blank"></span> the <span '
          + 'class="blank"></span>?</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'Where is the ladder? — In the yard. It should be next to the '
              + 'bench · Where are the count sheets? — On the table · Where is '
              + 'the spare key? — Behind the door · Where are the labels? — In '
              + 'the small box, row 3 shelf 3',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Ask your partner where four things at their work are. Write it.',
        grammar: 'Asking where',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A correction has four lines: what the paper says → where the thing '
          + 'really is → why → what the paper says now.',
        '⚠ Line three is the one that stops the argument. It is too long for '
          + 'the shelf turns somebody\'s mistake into somebody\'s good decision, '
          + 'and a good decision does not get undone the next morning.',
        '⚠ Line four is the whole point. A correction that does not change '
          + 'the paper is a complaint.']
      }
    },
    {
      id: 'c7',
      ref: '4.3.4R',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I asked where the was. It is .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I asked where the ladder was. It is in the yard, not next to the bench',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: I asked where the was. It is .',
        grammar: 'Asking where',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A correction has four lines: what the paper says → where the thing '
          + 'really is → why → what the paper says now.',
        '⚠ Line three is the one that stops the argument. It is too long for '
          + 'the shelf turns somebody\'s mistake into somebody\'s good decision, '
          + 'and a good decision does not get undone the next morning.',
        '⚠ Line four is the whole point. A correction that does not change '
          + 'the paper is a complaint.']
      }
    },
    {
      id: 'c8',
      ref: '4.3.5',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read what Nour wrote on the paper. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>ROW 2 — CORRECTION, 16 MARCH</b></p><p><b>The paper says:</b> '
          + 'big roll — row 2, shelf 1.</p><p><b>It is not there.</b> It is '
          + 'behind the door, standing up.</p><p><b>Why:</b> it is too long for '
          + 'the shelf.</p><p><b>So:</b> the paper now says <i>big roll — behind '
          + 'the door, standing up</i>.</p><p><b>N.M.</b></p><h4>Writer\'s '
          + 'box</h4><p><b>A correction has four lines:</b> what the paper says → '
          + 'where the thing really is → <b>why</b> → what the paper says '
          + 'now.</p><p>⚠ <b>Line three is the one that stops the argument.</b> '
          + '<b><i>It is too long for the shelf</i> turns somebody\'s mistake '
          + 'into somebody\'s good decision</b>, <b>and a good decision does not '
          + 'get undone the next morning.</b></p><p>⚠ <b>Line four is the whole '
          + 'point.</b> <b>A correction that does not change the paper is a '
          + 'complaint.</b></p>'
      },
      questions: [{
            q: 'Where does the paper say the roll is?',
            model: 'Row 2, shelf 1',
            minWords: 1,
            rows: 2
          },
      {
            q: 'Where is it really?',
            model: 'Behind the door, standing up',
            minWords: 2,
            rows: 2
          },
      {
            q: 'Why is it not on the shelf?',
            model: 'It is too long for the shelf',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '4.3.6',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      instruction: 'Write a correction for something at your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['ROW 1 — CORRECTION, 18 MARCH',
      'The paper says: long ladder — row 1, shelf 1'],
      coach: {
        title: 'What to include',
        task: 'Write a correction for something at your own work (15 words or more).',
        criteria: [{ t: 'A correction has four lines: what the paper says → where the '
              + 'thing really is → why → what the paper says now.' },
            { t: '⚠ Line three is the one that stops the argument. It is too long '
              + 'for the shelf turns somebody\'s mistake into somebody\'s good '
              + 'decision, and a good decision does not get undone the next '
              + 'morning.' },
            { t: '⚠ Line four is the whole point. A correction that does not '
              + 'change the paper is a complaint.' }]
      },
      aiCheck: {
        task: 'Write a correction for something at your own work (15 words or more).',
        grammar: 'Asking where',
        must: ['A correction has four lines: what the paper says → where the thing '
          + 'really is → why → what the paper says now.',
        '⚠ Line three is the one that stops the argument. It is too long for '
          + 'the shelf turns somebody\'s mistake into somebody\'s good decision, '
          + 'and a good decision does not get undone the next morning.',
        '⚠ Line four is the whole point. A correction that does not change '
          + 'the paper is a complaint.']
      }
    },
    {
      id: 'c10',
      ref: '4.3.6P',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>What the paper '
          + 'said</td><td>&nbsp;</td></tr><tr><td>Where the thing really '
          + 'is</td><td>&nbsp;</td></tr><tr><td>The <i>why</i> '
          + 'line</td><td>&nbsp;</td></tr><tr><td>What the paper says '
          + 'now</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "It is next to the gate" · (pointing) '
              + 'at the bottom. (reading) nothing',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Asking where',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A correction has four lines: what the paper says → where the thing '
          + 'really is → why → what the paper says now.',
        '⚠ Line three is the one that stops the argument. It is too long for '
          + 'the shelf turns somebody\'s mistake into somebody\'s good decision, '
          + 'and a good decision does not get undone the next morning.',
        '⚠ Line four is the whole point. A correction that does not change '
          + 'the paper is a complaint.']
      }
    },
    {
      id: 'c11',
      ref: '4.3.6R',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their why line. The class says if it is a good reason.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '4.3.7',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      instruction: 'Write about something at your work that is not where the paper says (<b>20 '
  + 'to 35 words</b>). Where is it? Why? Who moved it?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['The long ladder is not in row one. It is next to the gate, flat on the '
        + 'wall. Fouad moved it last year because it stuck out. Nobody changed '
        + 'the paper'],
      coach: {
        title: 'What to include',
        task: 'Write about something at your work that is not where the paper says (20 to '
  + '35 words). Where is it? Why? Who moved it?',
        criteria: [{ t: 'A correction has four lines: what the paper says → where the '
              + 'thing really is → why → what the paper says now.' },
            { t: '⚠ Line three is the one that stops the argument. It is too long '
              + 'for the shelf turns somebody\'s mistake into somebody\'s good '
              + 'decision, and a good decision does not get undone the next '
              + 'morning.' },
            { t: '⚠ Line four is the whole point. A correction that does not '
              + 'change the paper is a complaint.' }]
      },
      aiCheck: {
        task: 'Write about something at your work that is not where the paper says '
          + '(20 to 35 words). Where is it? Why? Who moved it?',
        grammar: 'Asking where',
        must: ['A correction has four lines: what the paper says → where the thing '
          + 'really is → why → what the paper says now.',
        '⚠ Line three is the one that stops the argument. It is too long for '
          + 'the shelf turns somebody\'s mistake into somebody\'s good decision, '
          + 'and a good decision does not get undone the next morning.',
        '⚠ Line four is the whole point. A correction that does not change '
          + 'the paper is a complaint.']
      }
    },
    {
      id: 'c13',
      ref: '4.3.7P',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did anybody change the paper? '
  + 'Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Did anybody change the paper? — No. It still says row one',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did anybody change the '
          + 'paper? Write the answer.',
        grammar: 'Asking where',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A correction has four lines: what the paper says → where the thing '
          + 'really is → why → what the paper says now.',
        '⚠ Line three is the one that stops the argument. It is too long for '
          + 'the shelf turns somebody\'s mistake into somebody\'s good decision, '
          + 'and a good decision does not get undone the next morning.',
        '⚠ Line four is the whole point. A correction that does not change '
          + 'the paper is a complaint.']
      }
    },
    {
      id: 'c14',
      ref: '4.3.7R',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many was the paper changed? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> two things at your '
          + 'work that are not where the paper says (20 words or more).</p>'
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
