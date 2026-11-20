/* Unit 5 · cycle 5.1 — Name, date, number, signature.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u5-s01', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 5 · 5.1', part: '5.1',
          section: '1', lesson: 'Name, date, number, signature', title: 'Name, date, number, signature' },
  objective: 'name the four things on every delivery note',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '5.1.1',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Have you ever signed a paper you could not read? Say it in '
              + 'Arabic. Your teacher writes the English.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Look at any paper on your table. Find a name and a date. Point at them.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '5.1.2',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u5-5-1',
      passage: {
        title: 'Language box',
        html: '<p><b>The four things, every time, in this order</b></p><table '
          + 'class=\'bk\'><tr><th></th><th>The thing</th><th>Where it '
          + 'is</th><th>What it tells '
          + 'you</th></tr><tr><td><b>1</b></td><td><b>the name</b></td><td>at the '
          + 'top</td><td>who sent the '
          + 'goods</td></tr><tr><td><b>2</b></td><td><b>the '
          + 'date</b></td><td>under the name</td><td>when they sent '
          + 'them</td></tr><tr><td><b>3</b></td><td><b>the '
          + 'quantity</b></td><td>in the middle</td><td>how many, and of '
          + 'what</td></tr><tr><td><b>4</b></td><td><b>the '
          + 'signature</b></td><td>at the bottom</td><td>⚠ <b>that YOU say 1, 2 '
          + 'and 3 are correct</b></td></tr></table><p>⚠ <b>Look at all four '
          + 'before you touch a pen.</b> <b>Always in this order.</b> <b>Top, '
          + 'date, middle, bottom.</b></p><p>⚠ <b>The fourth one is not a '
          + 'formality.</b> <b>A signature is a sentence: <i>I have checked the '
          + 'other three and they are right.</i></b> <b>You say that sentence '
          + 'without writing it, and you cannot take it '
          + 'back.</b></p><p><b>Practise:</b> Write the number 1, 2, 3 or '
          + '4.</p><p>1 Where is the date? <span class="blank"></span> 2 What '
          + 'says who sent the goods? <span class="blank"></span> 3 What is at '
          + 'the bottom? <span class="blank"></span> 4 What tells you how many? '
          + '<span class="blank"></span></p><p><b>Useful words:</b> a delivery '
          + 'note · the name at the top · the date · the quantity · the line at '
          + 'the bottom</p><p><b>Sound — the four, said in order.</b> 🔊 <b>Track '
          + '5.2</b> Listen. Say it. <i>Name. Date. Quantity. Signature.</i> '
          + '<b>Four words, four stops.</b> <b>Say them every time you pick up a '
          + 'note, under your breath.</b> Say it four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How many things must Ammar look at?',
            options: [{
              t: 'two',
              ok: false,
              why: 'Fewer than he lists - he says \'only four\' and then names them.'
            },
            {
              t: 'four',
              ok: true,
              why: 'The name, the date, the quantity and the line at the bottom.'
            },
            {
              t: 'six',
              ok: false,
              why: 'More than he lists.'
            }],
            evidence: 'Abu Yasser\'s first line about the delivery note'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '5.1.2',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Which one does Nour say is the dangerous one?',
            model: 'The signature — the line at the bottom',
            minWords: 2,
            rows: 2,
            keys: ['signature',
              'line',
              'bottom'],
            need: 1
          },
      {
            q: 'What is at the bottom of the paper?',
            model: 'The line for your signature',
            minWords: 2,
            rows: 2,
            keys: ['line',
              'signature'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '5.1.3',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One has the note. One asks. Then change places.',
      scene: 'u5-5-1-pair',
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
        rows: [['name · date · quantity · line · signature · correct',
          'company · day · number · space · name · right']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '5.1.3R',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ a delivery note</td><td>☐ the name at '
          + 'the top</td><td>☐ the date</td><td>☐ the quantity</td><td>☐ the line '
          + 'at the bottom</td></tr></table>'
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
      ref: '5.1.4',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Find a real paper from your work, or draw one. Find the four things. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th></th><th>What it says on my '
          + 'paper</th></tr><tr><td><b>1 the '
          + 'name</b></td><td>&nbsp;</td></tr><tr><td><b>2 the '
          + 'date</b></td><td>&nbsp;</td></tr><tr><td><b>3 the '
          + 'quantity</b></td><td>&nbsp;</td></tr><tr><td><b>4 the signature '
          + 'line</b></td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: '1 the name: Al-Sham Bakery, Damascus · 2 the date: 14/03/2026 · '
              + '3 the quantity: 40 trays · 4 the signature line: "Received by" — '
              + 'empty',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Find a real paper from your work, or draw one. Find the four things. Write it.',
        grammar: 'The four things, every time, in this order',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A before-you-sign list has four numbered lines and one escape line.',
        '⚠ Every line is a QUESTION, not an instruction. Is it today? A '
          + 'question makes the reader look at the paper. An instruction lets him '
          + 'nod.',
        '⚠ The escape line is the most useful line on the page: I have not '
          + 'counted it yet. Six words that stop a signature. Without it the list '
          + 'is advice; with it the list is a thing you can do while a driver '
          + 'waits.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '5.1.4R',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: My paper says at the top. The date is . The quantity is . '
  + 'The line is .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'My paper says Al-Sham Bakery at the top. The date is 14 March. '
              + 'The quantity is forty trays. The line is empty',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: My paper says at the top. The date is . The quantity '
          + 'is . The line is .',
        grammar: 'The four things, every time, in this order',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A before-you-sign list has four numbered lines and one escape line.',
        '⚠ Every line is a QUESTION, not an instruction. Is it today? A '
          + 'question makes the reader look at the paper. An instruction lets him '
          + 'nod.',
        '⚠ The escape line is the most useful line on the page: I have not '
          + 'counted it yet. Six words that stop a signature. Without it the list '
          + 'is advice; with it the list is a thing you can do while a driver '
          + 'waits.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '5.1.5',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the note Nour put on the wall. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>BEFORE YOU SIGN ANYTHING — FOUR THINGS</b></p><p><b>1 The name '
          + 'at the top.</b> Is it a company you know?</p><p><b>2 The date.</b> '
          + 'Is it today, or a week ago?</p><p><b>3 The quantity.</b> Did you '
          + 'count it yourself?</p><p><b>4 The line at the bottom.</b> ⚠ <b>Your '
          + 'signature says 1, 2 and 3 are correct.</b></p><p>⚠ <b>If you have '
          + 'not counted it, do not sign it. Say: I have not counted it yet. '
          + 'N.M.</b></p><h4>Writer\'s box</h4><p><b>A before-you-sign list has '
          + 'four numbered lines and one escape line.</b></p><p>⚠ <b>Every line '
          + 'is a QUESTION, not an instruction.</b> <i>Is it today?</i> <b>A '
          + 'question makes the reader look at the paper. An instruction lets him '
          + 'nod.</b></p><p>⚠ <b>The escape line is the most useful line on the '
          + 'page:</b> <i>I have not counted it yet.</i> <b>Six words that stop a '
          + 'signature.</b> <b>Without it the list is advice; with it the list is '
          + 'a thing you can do while a driver waits.</b></p>'
      },
      questions: [{
            q: 'What does your signature say?',
            model: 'That things 1, 2 and 3 are correct',
            minWords: 2,
            rows: 2,
            keys: ['things',
              'correct'],
            need: 1
          },
      {
            q: 'What do you say if you have not counted?',
            model: 'I have not counted it yet',
            minWords: 2,
            rows: 2,
            keys: ['yet',
              'counted'],
            need: 1
          },
      {
            q: 'Which of the four is a question about the past?',
            model: 'Number 3 — did you count it yourself?',
            minWords: 2,
            rows: 2,
            keys: ['number',
              'count',
              'yourself'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '5.1.6',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a before-you-sign list for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['BEFORE YOU SIGN — THE COUNTER',
      '1 Is the company on the paper a company we buy from?'],
      coach: {
        title: 'What to include',
        task: 'Write a before-you-sign list for your own work (15 words or more).',
        criteria: [{ t: 'A before-you-sign list has four numbered lines and one escape line.' },
            { t: '⚠ Every line is a QUESTION, not an instruction. Is it today? A '
              + 'question makes the reader look at the paper. An instruction lets '
              + 'him nod.' },
            { t: '⚠ The escape line is the most useful line on the page: I have '
              + 'not counted it yet. Six words that stop a signature. Without it '
              + 'the list is advice; with it the list is a thing you can do while '
              + 'a driver waits.' }]
      },
      aiCheck: {
        task: 'Write a before-you-sign list for your own work (15 words or more).',
        grammar: 'The four things, every time, in this order',
        must: ['A before-you-sign list has four numbered lines and one escape line.',
        '⚠ Every line is a QUESTION, not an instruction. Is it today? A '
          + 'question makes the reader look at the paper. An instruction lets him '
          + 'nod.',
        '⚠ The escape line is the most useful line on the page: I have not '
          + 'counted it yet. Six words that stop a signature. Without it the list '
          + 'is advice; with it the list is a thing you can do while a driver '
          + 'waits.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '5.1.6P',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>Four numbered '
          + 'lines</td><td>&nbsp;</td></tr><tr><td>Every line is a '
          + 'question</td><td>&nbsp;</td></tr><tr><td>An escape line at the '
          + 'end</td><td>&nbsp;</td></tr><tr><td>The escape line is something you '
          + 'can SAY</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "Check the date" · (pointing) at the '
              + 'bottom. (reading) nothing',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'The four things, every time, in this order',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A before-you-sign list has four numbered lines and one escape line.',
        '⚠ Every line is a QUESTION, not an instruction. Is it today? A '
          + 'question makes the reader look at the paper. An instruction lets him '
          + 'nod.',
        '⚠ The escape line is the most useful line on the page: I have not '
          + 'counted it yet. Six words that stop a signature. Without it the list '
          + 'is advice; with it the list is a thing you can do while a driver '
          + 'waits.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '5.1.6R',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their escape line. The class says if they could say it to '
  + 'a driver who is in a hurry.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '5.1.7',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a paper you sign at work (<b>20 to 35 words</b>). What is on it? '
  + 'Do you read it? What happens if it is wrong?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['I sign the bread sheet every morning. It has the number of trays and '
        + 'the date. I do not always read it. Last year I signed for forty and '
        + 'there were thirty-six, and the shop paid'],
      stems: ['I sign the bread…',
      'It has the number…',
      'I do not…',
      'Last year I…'],
      coach: {
        title: 'What to include',
        task: 'Write about a paper you sign at work (20 to 35 words). What is on it? Do you '
  + 'read it? What happens if it is wrong?',
        criteria: [{ t: 'A before-you-sign list has four numbered lines and one escape line.' },
            { t: '⚠ Every line is a QUESTION, not an instruction. Is it today? A '
              + 'question makes the reader look at the paper. An instruction lets '
              + 'him nod.' },
            { t: '⚠ The escape line is the most useful line on the page: I have '
              + 'not counted it yet. Six words that stop a signature. Without it '
              + 'the list is advice; with it the list is a thing you can do while '
              + 'a driver waits.' }]
      },
      aiCheck: {
        task: 'Write about a paper you sign at work (20 to 35 words). What is on '
          + 'it? Do you read it? What happens if it is wrong?',
        grammar: 'The four things, every time, in this order',
        must: ['A before-you-sign list has four numbered lines and one escape line.',
        '⚠ Every line is a QUESTION, not an instruction. Is it today? A '
          + 'question makes the reader look at the paper. An instruction lets him '
          + 'nod.',
        '⚠ The escape line is the most useful line on the page: I have not '
          + 'counted it yet. Six words that stop a signature. Without it the list '
          + 'is advice; with it the list is a thing you can do while a driver '
          + 'waits.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '5.1.7P',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Have you ever signed something '
  + 'you had not checked? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Have you ever signed something you had not checked? — Many '
              + 'times. Every morning before this lesson',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Have you ever signed '
          + 'something you had not checked? Write the answer.',
        grammar: 'The four things, every time, in this order',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A before-you-sign list has four numbered lines and one escape line.',
        '⚠ Every line is a QUESTION, not an instruction. Is it today? A '
          + 'question makes the reader look at the paper. An instruction lets him '
          + 'nod.',
        '⚠ The escape line is the most useful line on the page: I have not '
          + 'counted it yet. Six words that stop a signature. Without it the list '
          + 'is advice; with it the list is a thing you can do while a driver '
          + 'waits.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '5.1.7R',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many people have signed something they had not '
  + 'checked? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> the four things from '
          + 'a real paper at your work (20 words or more).</p>'
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
