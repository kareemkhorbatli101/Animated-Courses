/* Unit 6 · cycle 6.3 — One moment, please.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u6-s03', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 6 · 6.3', part: '6.3',
          section: '3', lesson: 'One moment, please', title: 'One moment, please' },
  objective: 'say wait — and not lose the call',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '6.3.1',
      bookRef: 'Unit 6 · 6.3 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'You need to put the telephone down and find a pen. What do you '
              + 'say? Say it in Arabic, then in English.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Count ten seconds in your head. That is how long one moment is. '
              + 'Count twenty. That is too long.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Making somebody wait, properly'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '6.3.2',
      bookRef: 'Unit 6 · 6.3 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u6-6-3',
      passage: {
        title: 'Language box',
        html: '<p><b>Making somebody wait, properly</b></p><table '
          + 'class=\'bk\'><tr><th></th><th>What you '
          + 'say</th><th>When</th></tr><tr><td><b>before</b></td><td><b>One '
          + 'moment, please.</b></td><td>before you put the telephone '
          + 'down</td></tr><tr><td><b>after</b></td><td><b>Thank you for '
          + 'waiting.</b></td><td>⚠ <b>every time, even after ten '
          + 'seconds</b></td></tr><tr><td><b>if it is long</b></td><td><b>I am '
          + 'sorry — one more moment.</b></td><td>after about twenty '
          + 'seconds</td></tr><tr><td><b>if it is too long</b></td><td><b>Can I '
          + 'take your number and call you back?</b></td><td>after about a '
          + 'minute</td></tr></table><p>⚠ <b>Get the pen BEFORE you answer the '
          + 'telephone.</b> <b>The pen and the slip pad live next to it.</b> '
          + '<b>Most of <i>one moment</i> is a man looking for a pen, and that is '
          + 'a thing you can fix once instead of apologising for every '
          + 'day.</b></p><p>⚠ <b><i>One moment</i> is about ten seconds.</b> '
          + '<b>Four minutes is not one moment.</b> <b>If it will be longer, say '
          + 'so, or take a number and ring back.</b></p><p>⚠ <b>Never put the '
          + 'telephone down without saying anything.</b> <b>The caller cannot see '
          + 'you. Silence and a lost call sound exactly the '
          + 'same.</b></p><p><b>Practise:</b> Write the line.</p><p>1 You need to '
          + 'find a pen. <span class="blank"></span>. 2 You come back after ten '
          + 'seconds. <span class="blank"></span>. 3 It will take three minutes. '
          + '<span class="blank"></span>?</p><p><b>Useful words:</b> One moment, '
          + 'please. · Thank you for waiting. · one more moment · Can I take your '
          + 'number? · call you back</p><p><b>Sound — the short wait.</b> 🔊 '
          + '<b>Track 6.6</b> Listen. <i>One moment, please.↘</i> <b>Flat, quick, '
          + 'no rise.</b> <b>Said with a rise it sounds like a question and the '
          + 'caller answers it.</b> Say it four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How long does the caller wait?',
            options: [{
              t: 'ten seconds',
              ok: true,
              why: 'Ten seconds, while he found a pen and the pad.'
            },
            {
              t: 'two minutes',
              ok: false,
              why: 'Two minutes is in the scene, but it is what somebody else did last week.'
            },
            {
              t: 'he rings off',
              ok: false,
              why: 'He waits and is thanked for waiting.'
            }],
            evidence: 'Nour\'s question about how long that was'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '6.3.2',
      bookRef: 'Unit 6 · 6.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does Ammar do while the caller waits?',
            model: 'He finds a pen and the slip pad',
            minWords: 2,
            rows: 2,
            keys: ['finds',
              'pen',
              'slip',
              'pad'],
            need: 1
          },
      {
            q: 'What does he say when he comes back?',
            model: 'Thank you for waiting',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '6.3.3',
      bookRef: 'Unit 6 · 6.3 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs, back to back. One waits — really waits, counting. Then change places.',
      scene: 'u6-6-3-pair',
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
        rows: [['ten · your name · Mr Khalil',
          'twenty-five · your number · Mrs Mansour']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '6.3.3R',
      bookRef: 'Unit 6 · 6.3 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — back to back, books closed. The '
  + 'class counts the seconds out loud.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ One moment, please.</td><td>☐ Thank '
          + 'you for waiting.</td><td>☐ one more moment</td><td>☐ Can I take your '
          + 'number?</td><td>☐ call you back</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Making somebody wait, properly'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '6.3.4',
      bookRef: 'Unit 6 · 6.3 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'How long do people wait at your work? Think of four times. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Why they waited</th><th>How '
          + 'long</th><th>Did anybody tell '
          + 'them?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'Why they waited: I went to ask the manager a price. How long: '
              + 'about a minute. Did anybody tell them: no · Why they waited: I '
              + 'went to the back to count stock. How long: three minutes. Did '
              + 'anybody tell them: I said one moment and then nothing · Why they '
              + 'waited: the line was engaged upstairs. How long: forty seconds. '
              + 'Did anybody tell them: no · Why they waited: I was looking for a '
              + 'pen. How long: twenty seconds. Did anybody tell them: no',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'How long do people wait at your work? Think of four times. Write it.',
        grammar: 'Making somebody wait, properly',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (6.3) teaches: Making somebody wait, properly. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Making somebody wait, properly.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '6.3.4R',
      bookRef: 'Unit 6 · 6.3 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: People wait for . Nobody tells them / Somebody says .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'People wait about a minute for a price. Nobody tells them. I say '
              + 'one moment and then they hear the shop',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — People wait — for —. Nobody tells them / Somebody '
          + 'says —. (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Making somebody wait, properly',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (6.3) teaches: '
          + 'Making somebody wait, properly. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Making somebody wait, properly.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '6.3.5',
      bookRef: 'Unit 6 · 6.3 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the second card on the wall. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>WAITING — WHAT TO SAY AND WHEN</b></p><p><b>0 seconds</b> — '
          + '<i>One moment, please.</i> ⚠ <b>Before you put it down. '
          + 'Always.</b></p><p><b>10 seconds</b> — <i>Thank you for '
          + 'waiting.</i></p><p><b>20 seconds</b> — <i>I am sorry — one more '
          + 'moment.</i></p><p><b>60 seconds</b> — <i>Can I take your number and '
          + 'call you back?</i></p><p>⚠ <b>The pen and the slip pad live NEXT TO '
          + 'THE TELEPHONE. Most waiting is a man looking for a pen.</b></p><p>⚠ '
          + '<b>Four minutes is not one moment. N.M.</b></p><h4>Writer\'s '
          + 'box</h4><p><b>A waiting card is a list with TIMES down the left.</b> '
          + '<b>Not steps — times.</b></p><p>⚠ <b>A time tells the reader when to '
          + 'say the line.</b> <b><i>Then say sorry</i> does not.</b> <b>At '
          + 'twenty seconds a man who has a card with <i>20 seconds</i> on it '
          + 'looks at his watch; a man with <i>after a while</i> on his card says '
          + 'nothing and loses the call.</b></p><p>⚠ <b>Put the FIX on the card, '
          + 'not just the words.</b> <i>The pen lives next to the telephone.</i> '
          + '<b>A card that only gives you apologies is a card for a problem '
          + 'nobody is solving.</b></p>'
      },
      questions: [{
            q: 'What do you say at twenty seconds?',
            model: 'I am sorry — one more moment',
            minWords: 2,
            rows: 2,
            keys: ['sorry',
              'moment'],
            need: 1
          },
      {
            q: 'Where do the pen and the pad live?',
            model: 'Next to the telephone',
            minWords: 1,
            rows: 2,
            keys: ['next',
              'telephone'],
            need: 1
          },
      {
            q: 'At sixty seconds, what do you ask for?',
            model: 'The caller\'s number, to call him back',
            minWords: 2,
            rows: 2,
            keys: ['caller\'s',
              'number',
              'call',
              'back'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '6.3.6',
      bookRef: 'Unit 6 · 6.3 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a waiting card for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['WAITING — THE COUNTER TELEPHONE',
      '0 seconds — One moment, please'],
      coach: {
        title: 'What to include',
        task: 'Write a waiting card for your own work (15 words or more).',
        criteria: [{ t: 'A waiting card is a list with TIMES down the left. Not steps — times.' },
            { t: '⚠ A time tells the reader when to say the line. Then say sorry '
              + 'does not. At twenty seconds a man who has a card with 20 seconds '
              + 'on it looks at his watch; a man with after a while on his card '
              + 'says nothing and loses the call.' },
            { t: '⚠ Put the FIX on the card, not just the words. The pen lives '
              + 'next to the telephone. A card that only gives you apologies is a '
              + 'card for a problem nobody is solving.' }]
      },
      aiCheck: {
        task: 'Write a waiting card for your own work (15 words or more).',
        grammar: 'Making somebody wait, properly',
        must: ['A waiting card is a list with TIMES down the left. Not steps — times.',
        '⚠ A time tells the reader when to say the line. Then say sorry does '
          + 'not. At twenty seconds a man who has a card with 20 seconds on it '
          + 'looks at his watch; a man with after a while on his card says '
          + 'nothing and loses the call.',
        '⚠ Put the FIX on the card, not just the words. The pen lives next to '
          + 'the telephone. A card that only gives you apologies is a card for a '
          + 'problem nobody is solving.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '6.3.6P',
      bookRef: 'Unit 6 · 6.3 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>Times down the left, not '
          + 'steps</td><td>&nbsp;</td></tr><tr><td>A line for 0 seconds — before '
          + 'you put it down</td><td>&nbsp;</td></tr><tr><td>A line that takes a '
          + 'number and rings back</td><td>&nbsp;</td></tr><tr><td>A fix, not '
          + 'only apologies</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "Then apologise" · (pointing) at the '
              + 'bottom. (reading) nothing',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Making somebody wait, properly',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (6.3) '
          + 'teaches: Making somebody wait, properly. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        must: ['A waiting card is a list with TIMES down the left. Not steps — times.',
        '⚠ A time tells the reader when to say the line. Then say sorry does '
          + 'not. At twenty seconds a man who has a card with 20 seconds on it '
          + 'looks at his watch; a man with after a while on his card says '
          + 'nothing and loses the call.',
        '⚠ Put the FIX on the card, not just the words. The pen lives next to '
          + 'the telephone. A card that only gives you apologies is a card for a '
          + 'problem nobody is solving.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '6.3.6R',
      bookRef: 'Unit 6 · 6.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their fix. The class says if it would stop the waiting.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Making somebody wait, properly'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '6.3.7',
      bookRef: 'Unit 6 · 6.3 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about waiting at your work (<b>20 to 35 words</b>). How long do people '
  + 'wait? Why? What would stop it?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['Callers wait two or three minutes at our shop because the prices are '
        + 'in the office upstairs. Two have rung off this month. If the list was '
        + 'by the till nobody would wait'],
      stems: ['Callers wait two…',
      'Two have rung…',
      'If the list…'],
      coach: {
        title: 'What to include',
        task: 'Write about waiting at your work (20 to 35 words). How long do people wait? '
  + 'Why? What would stop it?',
        criteria: [{ t: 'A waiting card is a list with TIMES down the left. Not steps — times.' },
            { t: '⚠ A time tells the reader when to say the line. Then say sorry '
              + 'does not. At twenty seconds a man who has a card with 20 seconds '
              + 'on it looks at his watch; a man with after a while on his card '
              + 'says nothing and loses the call.' },
            { t: '⚠ Put the FIX on the card, not just the words. The pen lives '
              + 'next to the telephone. A card that only gives you apologies is a '
              + 'card for a problem nobody is solving.' }]
      },
      aiCheck: {
        task: 'Write about waiting at your work (20 to 35 words). How long do '
          + 'people wait? Why? What would stop it?',
        grammar: 'Making somebody wait, properly',
        must: ['A waiting card is a list with TIMES down the left. Not steps — times.',
        '⚠ A time tells the reader when to say the line. Then say sorry does '
          + 'not. At twenty seconds a man who has a card with 20 seconds on it '
          + 'looks at his watch; a man with after a while on his card says '
          + 'nothing and loses the call.',
        '⚠ Put the FIX on the card, not just the words. The pen lives next to '
          + 'the telephone. A card that only gives you apologies is a card for a '
          + 'problem nobody is solving.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '6.3.7P',
      bookRef: 'Unit 6 · 6.3 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Has anybody ever rung off? '
  + 'Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Has anybody ever rung off? — Two this month. One was a hotel order',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Has anybody ever rung '
          + 'off? Write the answer.',
        grammar: 'Making somebody wait, properly',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (6.3) teaches: Making somebody wait, properly. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Making somebody wait, properly.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '6.3.7R',
      bookRef: 'Unit 6 · 6.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many callers have rung off waiting? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> where your pen and '
          + 'your paper will live from tomorrow (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Making somebody wait, properly'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
