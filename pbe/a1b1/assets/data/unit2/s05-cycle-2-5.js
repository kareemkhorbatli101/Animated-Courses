/* Unit 2 · cycle 2.5 — Say it, write it, read it back.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u2-s05', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 2 · 2.5', part: '2.5',
          section: '5', lesson: 'Say it, write it, read it back', title: 'Say it, write it, read it back' },
  objective: 'write a number down and read it back',
  study: {
    minutes: 90,
    objective: 'write a number down and read it back',
    steps: [{
          title: 'Get ready',
          mins: 6,
          why: 'Waking the words up before you need them.',
          todo: 'Answer in one or two words. Nothing here is marked and nothing is wrong.',
          alone: 'Say your answers aloud to yourself, then write them.'
        },
        {
          title: 'Listen and read',
          mins: 12,
          why: 'The lesson itself - everything after this practises what happens here.',
          todo: 'Play it once with the subtitles ON and once with them OFF. Use '
            + '0.6x if the voices are fast. Then answer the question under it.',
          alone: 'Play the scene twice before you look at the question.'
        },
        {
          title: 'Practise',
          mins: 7,
          why: 'Saying the lines yourself, with the other part played for you.',
          todo: 'Pick your role; the engine mutes it and waits for you. Say the '
            + 'line out loud - not in your head. Then swap roles and do it again.',
          alone: 'This is designed for one person: the engine IS your partner.'
        },
        {
          title: 'Perform',
          mins: 5,
          why: 'Doing it without the words in front of you.',
          todo: 'Close the book - the table above - and say the exchange from '
            + 'memory. Press Record yourself and listen back.',
          alone: 'Record yourself, play it back, and mark your own against the table.'
        },
        {
          title: 'Your turn',
          mins: 9,
          why: 'The same language, about YOUR workplace rather than the book\'s.',
          todo: 'Use the real names, numbers and places from your own job. Press '
            + 'Say it and speak your answer; it types itself.',
          alone: 'Say it aloud first, then write. Speaking first is the point of the step.'
        },
        {
          title: 'Report',
          mins: 6,
          why: 'Saying it to a room, which is harder than saying it to one person.',
          todo: 'Stand up if you can. Say it once, slowly. Then write what you said.',
          alone: 'Say it aloud to the empty room anyway - the difficulty is the '
            + 'standing up and the once, not the audience.'
        },
        {
          title: 'Read',
          mins: 7,
          why: 'Meeting the shape of the thing before you have to write one.',
          todo: 'Read the page above the questions, then answer. The answers are IN '
            + 'the page - if you cannot find one, read again rather than guess.',
          alone: 'Cover your answer and read the page again before you check.'
        },
        {
          title: 'Write with help',
          mins: 9,
          why: 'Writing it with the model beside you.',
          todo: 'Look at the model, then write your own about your own work. Use '
            + 'the openers if you are stuck, and watch the word counter.',
          alone: 'Write it, leave it, come back and read it aloud before you check.'
        },
        {
          title: 'Check together',
          mins: 5,
          why: 'Reading somebody else\'s work closely enough to help it.',
          todo: 'Point at a LINE and name ONE thing. \'It is good\' is not feedback.',
          alone: 'Check your own work against the checklist as if it were somebody '
            + 'else\'s, a day later.'
        },
        {
          title: 'Share',
          mins: 3,
          why: 'Seeing how five other people did the same job.',
          todo: 'Put the work where it can be read. Read three. Say one specific thing.',
          alone: 'Compare yours with the model and with the examples on the card.'
        },
        {
          title: 'Write freely',
          mins: 12,
          why: 'The same writing, without the model.',
          todo: 'Write first, check the model afterwards. Looking first turns it '
            + 'into copying.',
          alone: 'Set a timer for ten minutes and do not stop to correct anything.'
        },
        {
          title: 'Respond',
          mins: 5,
          why: 'Answering what somebody actually wrote, which is a skill of its own.',
          todo: 'Read their work, then ask a real question about it - one you do '
            + 'not already know the answer to.',
          alone: 'Ask the question of your own work and answer it honestly.'
        },
        {
          title: 'Share',
          mins: 4,
          why: 'Seeing how five other people did the same job.',
          todo: 'Put the work where it can be read. Read three. Say one specific thing.',
          alone: 'Compare yours with the model and with the examples on the card.'
        }]
  },
  worked: {
    task: 'Write the order you have just been given.',
    weak: '60 for Homs by 11.',
    change: ['Add the unit after the number, and write the time in a form nobody '
          + 'can shorten.',
        'Say that you read it back. An order nobody repeated is an order that '
          + 'may be sixteen.'],
    better: 'Sixty cartons for Homs, on the lorry by eleven o\'clock. I read it back '
      + 'to Fadi: six zero, sixty.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '2.5.1',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Your teacher says four numbers fast. Write it. Then check it '
              + 'with your partner.',
            minWords: 6,
            rows: 2,
            hint: 'Write digits, not words - faster. Alone? Play any scene at 0.6× '
              + 'and write every number you hear, then check against the '
              + 'transcript.'
          },
      {
            q: 'Which numbers sound the same? Say them in pairs: 13 · 30 · 15 · '
              + '50 · 16 · 60',
            model: '13/30, 15/50, 16/60. Put the other four pairs up beside them from 2.2',
            minWords: 3,
            rows: 2,
            hint: 'Pair each teen with its ten. Then say each pair aloud and notice '
              + 'which syllable you push on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '2.5.2',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-5',
      passage: {
        title: 'Language box',
        html: '<p><b>Say it, write it, read it back</b></p><table '
          + 'class=\'bk\'><tr><th>Step</th><th>What you do</th><th>What you '
          + 'say</th></tr><tr><td><b>1 Say it</b></td><td>the other person says '
          + 'the number</td><td>—</td></tr><tr><td><b>2 Write it</b></td><td>you '
          + 'write the digits</td><td>—</td></tr><tr><td><b>3 Check '
          + 'it</b></td><td>you ask about the two digits</td><td><b>Six zero, or '
          + 'one six?</b></td></tr><tr><td><b>4 Read it back</b></td><td>you say '
          + 'the whole thing again</td><td><b>Sixty cartons for Homs, by '
          + 'eleven.</b></td></tr></table><p>⚠ <b>Say the DIGITS when two numbers '
          + 'sound the same:</b> <i>six zero</i>, not <i>sixty</i>. <b>Digits '
          + 'cannot be heard wrong.</b></p><p>⚠ <b>Read the WHOLE thing back, not '
          + 'only the number</b> — the number, the thing, the place and the '
          + 'time.</p><p><b>Practise:</b> Write the digits.</p><p>1 sixty <span '
          + 'class="blank"></span> 2 sixteen <span class="blank"></span> 3 '
          + 'fifteen <span class="blank"></span> 4 fifty <span '
          + 'class="blank"></span> 5 ninety <span '
          + 'class="blank"></span></p><p><b>Useful words:</b> Six zero, or one '
          + 'six? · I write it. · Read it back. · Every time. · '
          + 'Correct.</p><p><b>Sound — reading a number back.</b> 🔊 <b>Track '
          + '2.10</b> Listen. The voice goes <b>down</b> at the end, because it '
          + 'is not a question: <i>Sixty cartons for Homs, by eleven.↘</i> Say it '
          + 'four times, going down.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What saves the order?',
            options: [{
              t: 'Ammar reads the number back',
              ok: true,
              why: 'Reading it back catches sixty against sixteen before the lorry leaves.'
            },
            {
              t: 'Fadi writes it down',
              ok: false,
              why: 'Writing it down alone would have written the wrong number down.'
            },
            {
              t: 'nothing',
              ok: false,
              why: 'Something does save it - listen to what Ammar says next.'
            }],
            evidence: 'what Ammar does after the order is given'
          },
        {
            q: 'Listen again. How many cartons go to Homs?',
            options: [{
              t: 'sixty',
              ok: true,
              why: 'Fadi says it, Ammar hears sixteen, and they settle it digit by '
                + 'digit: six zero.'
            },
            {
              t: 'sixteen',
              ok: false,
              why: 'Sixteen is what Ammar heard first - and the mistake the whole '
                + 'cycle is built on. Listen for *six zero, or one six?*'
            },
            {
              t: 'eleven',
              ok: false,
              why: 'Eleven is in the order, but as a time: on the lorry *by eleven*.'
            }],
            evidence: 'Fadi\'s correction, and the digits he gives after it'
          },
        {
            q: 'What does Fadi say the mistake would have cost?',
            options: [{
              t: 'nine thousand pounds short',
              ok: true,
              why: 'He puts a price on it at the end, which is why *read it back '
                + 'every time* is not fussiness.'
            },
            {
              t: 'one lorry',
              ok: false,
              why: 'A lorry is in the order, and a lost lorry is the cost in a '
                + 'different cycle. Here the cost is money.'
            },
            {
              t: 'an hour',
              ok: false,
              why: 'An hour on the telephone is the cost of the unreadable digit '
                + 'in Unit 5, not of this one.'
            }],
            evidence: 'the last line of the dialogue'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '2.5.2',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What did Ammar hear first?',
            model: 'Sixteen',
            minWords: 1,
            rows: 2,
            hint: 'The wrong one - he says it back to Fadi and Fadi corrects him immediately.'
          },
      {
            q: 'What was the number?',
            model: 'Sixty',
            minWords: 1,
            rows: 2,
            hint: 'The one Fadi confirms digit by digit: *six zero*. Write it as a word.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '2.5.3',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A gives an order. B writes it and reads it back. Then change places.',
      scene: 'u2-2-5-pair',
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
        rows: [['60 cartons · Homs · 11 · not 16',
          '50 rolls · Hama · 9 · not 15']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '2.5.3R',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Six zero, or one six?</td><td>☐ I '
          + 'write it.</td><td>☐ Read it back.</td><td>☐ Every time.</td><td>☐ '
          + 'Correct.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['For: Homs',
      'On the lorry by: 11.00',
      'Read back to Fadi: ✓ A.Z'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Say it, write it, read it back.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '2.5.4',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Give your partner four orders. They write it and read it back. Check it together.',
      passage: {
        title: 'From the book',
        html: '<table '
          + 'class=\'bk\'><tr><th>Number</th><th>Thing</th><th>Place</th><th>Time</th><th>Right? '
          + '✓ / '
          + '✗</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: '60 — cartons — Homs — 11.00 — ✓ · 15 — rolls — the counter — '
              + '9.00 — ✗ (partner wrote 50) · 200 — packets — Hama — 14.00 — ✓ · '
              + '70 — cartons — Aleppo — 6.00 — ✓',
            minWords: 3,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Give your partner four orders. They write it and read it back. Check '
          + 'it together.',
        grammar: 'Say it, write it, read it back',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (2.5) teaches: Say it, write it, read it back. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Say it, write it, read it back.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['back',
        'digits',
        'numbers',
        'sound',
        'zero',
        'sixty',
        'cannot',
        'heard',
        'wrong',
        'whole']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Say it, write it, read it back.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '2.5.4R',
      bookRef: 'Unit 2 · 2.5 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I gave orders. My partner read back right. The hard one was .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I gave four orders. My partner read three back right. The hard '
              + 'one was fifteen',
            minWords: 5,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — I gave — orders. My partner read — back right. The '
          + 'hard one was —. (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Say it, write it, read it back',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (2.5) teaches: '
          + 'Say it, write it, read it back. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Say it, write it, read it back.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['back',
        'digits',
        'numbers',
        'sound',
        'zero',
        'sixty',
        'cannot',
        'heard',
        'wrong',
        'whole'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Say it, write it, read it back.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '2.5.5',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read what Ammar wrote. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>ORDER — 6 MARCH — from Fadi</b></p><p><b>60</b> <i>(six zero — '
          + 'NOT 16)</i> <b>cartons</b></p><p><b>For:</b> Homs</p><p><b>On the '
          + 'lorry by:</b> 11.00</p><p><b>Read back to Fadi:</b> ✓ '
          + '<b>A.Z.</b></p><h4>Writer\'s box</h4><p><b>An order note has five '
          + 'things:</b> the number → the thing → where it goes → the time → and '
          + 'a tick to say you read it back.</p><p>⚠ <b>The tick is the important '
          + 'one.</b> <b>It says somebody checked.</b> <b>Without it, nobody '
          + 'knows.</b></p><p>⚠ <b>Write the number in digits beside it</b> when '
          + 'it can be heard two ways: <i>60 (six zero — NOT 16)</i>.</p>'
      },
      questions: [{
            q: 'How many cartons?',
            model: 'Sixty',
            minWords: 1,
            rows: 2,
            hint: 'From the written order above. It matches what Fadi said after '
              + 'the digit-by-digit check, not what Ammar heard first.'
          },
      {
            q: 'What time must they be on the lorry?',
            model: 'Eleven o\'clock',
            minWords: 1,
            rows: 2,
            keys: ['eleven',
              'o\'clock'],
            need: 1,
            hint: 'A time, in Fadi\'s first line, right after the destination.'
          },
      {
            q: 'What does the tick mean?',
            model: 'That the number was read back to the person who gave it',
            minWords: 4,
            rows: 2,
            keys: ['number',
              'back',
              'person',
              'gave'],
            need: 1,
            hint: 'Read the note under the order. The tick is about something that '
              + 'happened out loud, between two people.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '2.5.6',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write an order note for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['ORDER — 12 MARCH — from Abu Yasser',
      '70 (seven zero — NOT 17) cartons For: Hama By: 10.00 Read back: ✓ S.Q'],
      meter: {
        label: 'words from this lesson',
        words: ['back',
        'digits',
        'numbers',
        'sound',
        'zero',
        'sixty',
        'cannot',
        'heard']
      },
      coach: {
        title: 'What to include',
        task: 'Write an order note for your own work (15 words or more).',
        criteria: [{ t: 'An order note has five things: the number → the thing → where it '
              + 'goes → the time → and a tick to say you read it back.' },
            { t: '⚠ The tick is the important one. It says somebody checked. '
              + 'Without it, nobody knows.' },
            { t: '⚠ Write the number in digits beside it when it can be heard two '
              + 'ways: 60 (six zero — NOT 16).' }]
      },
      aiCheck: {
        task: 'Write an order note for your own work (15 words or more).',
        grammar: 'Say it, write it, read it back',
        must: ['An order note has five things: the number → the thing → where it '
          + 'goes → the time → and a tick to say you read it back.',
        '⚠ The tick is the important one. It says somebody checked. Without '
          + 'it, nobody knows.',
        '⚠ Write the number in digits beside it when it can be heard two '
          + 'ways: 60 (six zero — NOT 16).'],
        vocab: ['back',
        'digits',
        'numbers',
        'sound',
        'zero',
        'sixty',
        'cannot',
        'heard',
        'wrong',
        'whole']
      }
    },
    {
      id: 'c10',
      kind: 'own',
      ref: '2.5.6P',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>The '
          + 'number in digits as well</td><td>&nbsp;</td></tr><tr><td>Where it '
          + 'goes</td><td>&nbsp;</td></tr><tr><td>A '
          + 'time</td><td>&nbsp;</td></tr><tr><td>A tick to say it was read '
          + 'back</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      ideas: ['For: Homs',
      'On the lorry by: 11.00',
      'Read back to Fadi: ✓ A.Z'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Say it, write it, read it back',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (2.5) '
          + 'teaches: Say it, write it, read it back. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        must: ['An order note has five things: the number → the thing → where it '
          + 'goes → the time → and a tick to say you read it back.',
        '⚠ The tick is the important one. It says somebody checked. Without '
          + 'it, nobody knows.',
        '⚠ Write the number in digits beside it when it can be heard two '
          + 'ways: 60 (six zero — NOT 16).'],
        vocab: ['back',
        'digits',
        'numbers',
        'sound',
        'zero',
        'sixty',
        'cannot',
        'heard',
        'wrong',
        'whole'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '2.5.6R',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their note aloud to a partner. The partner says it back. '
  + 'Is it the same?',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['For: Homs',
      'On the lorry by: 11.00',
      'Read back to Fadi: ✓ A.Z'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Say it, write it, read it back.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '2.5.7',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about an order you took at your work (<b>20 to 35 words</b>). Who gave '
  + 'it? What was the number? Did you read it back?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['A driver told me fifteen rolls on the telephone. I wrote fifty. I did '
        + 'not read it back. We sent fifty and thirty-five came back on Thursday '
        + 'on the same lorry'],
      stems: ['A driver told…',
      'I wrote fifty…',
      'I did not…',
      'We sent fifty…'],
      meter: {
        label: 'words from this lesson',
        words: ['back',
        'digits',
        'numbers',
        'sound',
        'zero',
        'sixty',
        'cannot',
        'heard']
      },
      coach: {
        title: 'What to include',
        task: 'Write about an order you took at your work (20 to 35 words). Who gave it? '
  + 'What was the number? Did you read it back?',
        criteria: [{ t: 'An order note has five things: the number → the thing → where it '
              + 'goes → the time → and a tick to say you read it back.' },
            { t: '⚠ The tick is the important one. It says somebody checked. '
              + 'Without it, nobody knows.' },
            { t: '⚠ Write the number in digits beside it when it can be heard two '
              + 'ways: 60 (six zero — NOT 16).' }]
      },
      aiCheck: {
        task: 'Write about an order you took at your work (20 to 35 words). Who '
          + 'gave it? What was the number? Did you read it back?',
        grammar: 'Say it, write it, read it back',
        must: ['An order note has five things: the number → the thing → where it '
          + 'goes → the time → and a tick to say you read it back.',
        '⚠ The tick is the important one. It says somebody checked. Without '
          + 'it, nobody knows.',
        '⚠ Write the number in digits beside it when it can be heard two '
          + 'ways: 60 (six zero — NOT 16).'],
        vocab: ['back',
        'digits',
        'numbers',
        'sound',
        'zero',
        'sixty',
        'cannot',
        'heard',
        'wrong',
        'whole']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '2.5.7P',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did you read it back? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '? Did you read it back? — No. Now I do, every time',
            minWords: 3,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did you read it back? '
          + 'Write the answer.',
        grammar: 'Say it, write it, read it back',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (2.5) teaches: Say it, write it, read it back. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Say it, write it, read it back.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['back',
        'digits',
        'numbers',
        'sound',
        'zero',
        'sixty',
        'cannot',
        'heard',
        'wrong',
        'whole'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Say it, write it, read it back.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '2.5.7R',
      bookRef: 'Unit 2 · 2.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many did somebody read the number back? Count them '
  + 'on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then take four numbers you heard at work '
          + 'this week and <b>write down</b> the digits of each (20 words or '
          + 'more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['For: Homs',
      'On the lorry by: 11.00',
      'Read back to Fadi: ✓ A.Z'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Say it, write it, read it back.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
