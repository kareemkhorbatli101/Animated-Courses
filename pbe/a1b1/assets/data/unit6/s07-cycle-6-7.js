/* Unit 6 · cycle 6.7 — Review: the message slip.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u6-s07', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 6 · 6.7', part: '6.7',
          section: '7', lesson: 'Review: the message slip', title: 'Review: the message slip' },
  objective: 'Review: the message slip — and one problem to talk about together',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '6.7.1',
      bookRef: 'Unit 6 · 6.7 · Lesson A · Speaking · Get ready – Unit 6 quiz',
      type: 'discuss',
      title: 'Get ready – Unit 6 quiz',
      instruction: '',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Say it in '
          + 'English</th><th>✓</th></tr><tr><td><b>6.1</b> Answer your telephone. '
          + 'Slowly.</td><td>&nbsp;</td></tr><tr><td><b>6.2</b> Ask for a name. '
          + 'Then ask for the letters.</td><td>&nbsp;</td></tr><tr><td><b>6.3</b> '
          + 'Make somebody wait, then come '
          + 'back.</td><td>&nbsp;</td></tr><tr><td><b>6.4</b> Your supervisor is '
          + 'at lunch. Say it '
          + 'usefully.</td><td>&nbsp;</td></tr><tr><td><b>6.5</b> Read 0944 112 '
          + '233 back in groups.</td><td>&nbsp;</td></tr><tr><td><b>6.6</b> '
          + 'Promise to pass a message on. With a '
          + 'time.</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Write what you would say. Your own words.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '6.7.2',
      bookRef: 'Unit 6 · 6.7 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u6-6-7',
      passage: {
        title: 'Language box',
        html: '<p><b>Review — the six things from this unit</b></p><table '
          + 'class=\'bk\'><tr><th>Cycle</th><th>You can '
          + 'say</th></tr><tr><td><b>6.1</b></td><td><i>Sham Trading, good '
          + 'morning.</i> <b>Then stop and '
          + 'listen.</b></td></tr><tr><td><b>6.2</b></td><td><i>Your name, '
          + 'please. Can you spell it, please? Eight '
          + 'letters.</i></td></tr><tr><td><b>6.3</b></td><td><i>One moment, '
          + 'please. Thank you for '
          + 'waiting.</i></td></tr><tr><td><b>6.4</b></td><td><i>She is at lunch. '
          + 'She is back at two.</i></td></tr><tr><td><b>6.5</b></td><td><i>Zero '
          + 'nine four four, one one two, two three three. That is '
          + 'it.</i></td></tr><tr><td><b>6.6</b></td><td><i>I will tell her at '
          + 'two. And the slip goes on her desk now.</i></td></tr></table><p>⚠ '
          + '<b>The new thing here: everything was done right and the message was '
          + 'three days late.</b> <b>The slip was perfect. The man did both '
          + 'things. The person it was for was in the building.</b> <b>And a pad '
          + 'got put on top of it.</b></p><p><b>Useful words:</b> under the slip '
          + 'pad · I did both · I was on the other telephone · three days late · '
          + 'four boxes we did not get</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What happened to the message?',
            options: [{
              t: 'it was taken badly',
              ok: false,
              why: 'It was taken perfectly - the name spelled, the number read back.'
            },
            {
              t: 'it was taken perfectly and never passed on',
              ok: true,
              why: 'Everything was done right and the message still arrived three '
                + 'days late, under the pad.'
            },
            {
              t: 'it was never taken',
              ok: false,
              why: 'It was taken. Nour is holding the slip while she says so.'
            }],
            evidence: 'where the slip was found, and how many days later'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '6.7.2',
      bookRef: 'Unit 6 · 6.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What was on the slip?',
            model: 'The name spelled, the number read back, the invoice problem, and '
              + 'the time he rings',
            minWords: 5,
            rows: 2,
            keys: ['name',
              'spelled',
              'number',
              'back'],
            need: 1
          },
      {
            q: 'Where was the slip for three days?',
            model: 'Under the slip pad, on Nour\'s desk',
            minWords: 2,
            rows: 2,
            keys: ['under',
              'pad',
              'nour\'s',
              'desk'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '6.7.3',
      bookRef: 'Unit 6 · 6.7 · Lesson A · Speaking · Practise',
      type: 'discuss',
      title: 'Practise',
      instruction: 'Work in pairs. One is Ammar. One is Nour. Say why you did your job.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Ammar says</th><th>Nour '
          + 'says</th></tr><tr><td>Perfect slip, on her desk, and I told her at '
          + 'two. ⚠ <b>There is nothing in 6.6 that I did not do.</b></td><td>I '
          + 'was on the other telephone at two and I put my own pad on it. ⚠ <b>I '
          + 'did not hear him and I did not see it.</b></td></tr></table>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '6.7.3R',
      bookRef: 'Unit 6 · 6.7 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the two sides for the class — books closed.',
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
      ref: '6.7.4',
      bookRef: 'Unit 6 · 6.7 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of a message or a paper at your work that was lost between two people '
  + 'who both did their job. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What was passed</th><th>What each person '
          + 'did</th><th>Where it '
          + 'stopped</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'What was passed: a holiday form. What each person did: I filled '
              + 'it in and put it in his tray; he emptied the tray into a folder. '
              + 'Where it stopped: in the folder, behind the other papers, for '
              + 'five weeks · What was passed: a price change from the mill. What '
              + 'each person did: the driver told the storeman; the storeman told '
              + 'the counter. Where it stopped: at the counter — the man who was '
              + 'told left at two and the evening man never heard',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of a message or a paper at your work that was lost between two '
          + 'people who both did their job. Write it.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (6.7) teaches: Review — the six things from this unit. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Review — the six things from this unit.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '6.7.4R',
      bookRef: 'Unit 6 · 6.7 · Lesson A · Speaking · Report – everybody is right',
      type: 'discuss',
      title: 'Report – everybody is right',
      instruction: 'The problem. The slip was perfect. Ammar put it on the desk and told her as '
  + 'well. Nour was on the other telephone and put her pad on top of it. Three '
  + 'days, four boxes.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Ammar is right</th><th>Nour is '
          + 'right</th><th>So we do this</th></tr><tr><td>He did everything 6.6 '
          + 'asks for and one thing more. ⚠ <b>A perfect slip AND the telling. '
          + 'There is nothing left he could have done.</b></td><td>She was on '
          + 'another call and never heard him. ⚠ <b>And a slip flat on a desk is '
          + 'invisible the moment anything is put down on it.</b></td><td>⚠ <b>A '
          + 'flat slip is a lost slip.</b> <b>The slips go on a SPIKE or a clip '
          + 'by the telephone, standing up, and the taker says the name out loud '
          + 'once more when the person is off the other line.</b> <b>One place, '
          + 'standing up, and a second telling that waits for the person to be '
          + 'free.</b></td></tr></table>'
      },
      questions: [{
            q: 'Write what you told the class.',
            model: 'The three positions, in full · Ammar is right because he did '
              + 'both things at the time he promised. Nour is right because she '
              + 'was on another call and a flat slip disappears under the next '
              + 'thing put down. So the slips go on a spike by the telephone, '
              + 'standing up, and the second telling waits until the person is '
              + 'free',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'The problem. The slip was perfect. Ammar put it on the desk and told '
          + 'her as well. Nour was on the other telephone and put her pad on top '
          + 'of it. Three days, four boxes.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether you have named what EACH side is right about. Not who wins, '
          + 'and not a compromise: one sentence for each person\'s reason. This '
          + 'cycle (6.7) teaches: Review — the six things from this unit. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Review — the six things from this unit.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '6.7.5',
      bookRef: 'Unit 6 · 6.7 · Lesson B · Writing · Read – exam practice (A2 Key Reading '
  + 'Part 1, at A1 length)',
      type: 'discuss',
      title: 'Read – exam practice (A2 Key Reading Part 1, at A1 length)',
      instruction: 'Read the five notices. What does each one say? Choose A, B or C.',
      passage: {
        title: 'From the book',
        html: '<p><b>1</b> <i>PEN AND PAD STAY BY THE TELEPHONE</i> <b>A</b> Take '
          + 'the pen with you. <b>B</b> Leave the pen and pad here. <b>C</b> '
          + 'There is no pen.</p><p><b>2</b> <i>SLIPS GO ON THE SPIKE, NOT ON THE '
          + 'DESK</i> <b>A</b> Put slips flat on the desk. <b>B</b> Put slips on '
          + 'the spike. <b>C</b> Do not write slips.</p><p><b>3</b> <i>NUMBER NOT '
          + 'READ BACK? RING ONCE, DO NOT TRUST IT.</i> <b>A</b> A number with no '
          + 'tick may be wrong. <b>B</b> Never ring a number. <b>C</b> All '
          + 'numbers are correct.</p><p><b>4</b> <i>FOUR MINUTES IS NOT ONE '
          + 'MOMENT</i> <b>A</b> Say one moment and go away. <b>B</b> A long wait '
          + 'needs a different sentence. <b>C</b> Never make anybody '
          + 'wait.</p><p><b>5</b> <i>AT LUNCH? SAY AT LUNCH.</i> <b>A</b> Say he '
          + 'is in a meeting. <b>B</b> Say nothing. <b>C</b> Give the true '
          + 'reason.</p><h4>Writer\'s box</h4><p><b>Exam practice — A2 Key '
          + 'Writing Part 6, at A1 length.</b> <b>Four sentences, about 30 '
          + 'words.</b></p><p>⚠ <b>In a message, the CALLER and what he wants go '
          + 'in the first two sentences.</b> <b>Not the time of day, not the '
          + 'weather, not an apology.</b></p><p>⚠ <b>The last sentence is what '
          + 'the reader must DO, with a time in it.</b> <i>He rings back at '
          + 'four.</i></p><p><b>The shape:</b> who it is for → who called → what '
          + 'he wants → what happens next, with a time.</p>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '6.7.6',
      bookRef: 'Unit 6 · 6.7 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a message for your supervisor (<b>four sentences, about 30 words</b>). '
  + 'Who called, what about, what he wants, and when.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['For: Abu Yasser',
      'Mouallem rang at 1.35. He says the March invoice is wrong — 16 boxes, '
        + 'we paid for 12. He wants a credit note. He rings back at four'],
      stems: ['He says the March…',
      'He wants a credit…',
      'He rings back…'],
      meter: {
        label: 'words from this lesson',
        words: ['review',
        'things',
        'unit',
        'thing',
        'everything',
        'right',
        'message',
        'days']
      },
      coach: {
        title: 'What to include',
        task: 'Write a message for your supervisor (four sentences, about 30 words). Who '
  + 'called, what about, what he wants, and when.',
        criteria: [{ t: 'Exam practice — A2 Key Writing Part 6, at A1 length. Four '
              + 'sentences, about 30 words.' },
            { t: '⚠ In a message, the CALLER and what he wants go in the first two '
              + 'sentences. Not the time of day, not the weather, not an apology.' },
            { t: '⚠ The last sentence is what the reader must DO, with a time in '
              + 'it. He rings back at four.' },
            { t: 'The shape: who it is for → who called → what he wants → what '
              + 'happens next, with a time.' }]
      },
      aiCheck: {
        task: 'Write a message for your supervisor (four sentences, about 30 '
          + 'words). Who called, what about, what he wants, and when.',
        grammar: 'Review — the six things from this unit',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message, the CALLER and what he wants go in the first two '
          + 'sentences. Not the time of day, not the weather, not an apology.',
        '⚠ The last sentence is what the reader must DO, with a time in it. '
          + 'He rings back at four.',
        'The shape: who it is for → who called → what he wants → what happens '
          + 'next, with a time.']
      }
    },
    {
      id: 'c10',
      kind: 'own',
      ref: '6.7.6P',
      bookRef: 'Unit 6 · 6.7 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is '
  + 'missing. Count the sentences: four.',
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing. Count the sentences: four.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (6.7) '
          + 'teaches: Review — the six things from this unit. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message, the CALLER and what he wants go in the first two '
          + 'sentences. Not the time of day, not the weather, not an apology.',
        '⚠ The last sentence is what the reader must DO, with a time in it. '
          + 'He rings back at four.',
        'The shape: who it is for → who called → what he wants → what happens '
          + 'next, with a time.']
      }
    },
    {
      id: 'c11',
      ref: '6.7.7',
      bookRef: 'Unit 6 · 6.7 · Lesson B · Writing · Write freely – exam practice (A2 Key '
  + 'Writing Part 6, at A1 length)',
      type: 'writer',
      title: 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)',
      kind: 'model',
      instruction: 'Write a message for somebody at your work (<b>four sentences, about 30 '
  + 'words</b>). The caller, the subject, what he wants, and what happens next '
  + 'with a time.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      passage: {
        title: 'Homework',
        html: '<p>Finish your message. Then write the <b>answer</b> the supervisor '
          + 'would leave for you (20 words or more).</p>'
      },
      model: ['Shamseddine rang at 10.15. She says the Thursday order is six pallets, '
        + 'not four. She has changed it with the mill already. She rings back at '
        + 'three'],
      stems: ['She says the Thursday…',
      'She has changed…',
      'She rings back…'],
      meter: {
        label: 'words from this lesson',
        words: ['review',
        'things',
        'unit',
        'thing',
        'everything',
        'right',
        'message',
        'days']
      },
      coach: {
        title: 'What to include',
        task: 'Write a message for somebody at your work (four sentences, about 30 words). '
  + 'The caller, the subject, what he wants, and what happens next with a time.',
        criteria: [{ t: 'Exam practice — A2 Key Writing Part 6, at A1 length. Four '
              + 'sentences, about 30 words.' },
            { t: '⚠ In a message, the CALLER and what he wants go in the first two '
              + 'sentences. Not the time of day, not the weather, not an apology.' },
            { t: '⚠ The last sentence is what the reader must DO, with a time in '
              + 'it. He rings back at four.' },
            { t: 'The shape: who it is for → who called → what he wants → what '
              + 'happens next, with a time.' }]
      },
      aiCheck: {
        task: 'Write a message for somebody at your work (four sentences, about 30 '
          + 'words). The caller, the subject, what he wants, and what happens '
          + 'next with a time.',
        grammar: 'Review — the six things from this unit',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message, the CALLER and what he wants go in the first two '
          + 'sentences. Not the time of day, not the weather, not an apology.',
        '⚠ The last sentence is what the reader must DO, with a time in it. '
          + 'He rings back at four.',
        'The shape: who it is for → who called → what he wants → what happens '
          + 'next, with a time.']
      }
    },
    {
      id: 'c12',
      ref: '6.7.✓',
      bookRef: 'Unit 6 · 6.7 · Lesson B · Writing · Unit 6 check',
      type: 'scene',
      title: 'Unit 6 check',
      kind: 'own',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u6-6-7'
    }
  ]
});
