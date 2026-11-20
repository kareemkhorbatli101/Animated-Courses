/* Unit 2 · cycle 2.4 — There are six on the shelf. There are none on the floor..

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u2-s04', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 2 · 2.4', part: '2.4',
          section: '4', lesson: 'There are six on the shelf. There are none on the floor.', title: 'There are six on the shelf. There are none on the floor.' },
  objective: 'say what is on the shelf and what is not',
  study: {
    minutes: 90,
    objective: 'say what is on the shelf and what is not',
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
    task: 'Write your count for shelves three and four.',
    weak: 'Shelf three six. Shelf four nothing.',
    change: ['Use the pattern: <i>there are six cartons on shelf three</i>. The '
          + 'number needs its thing and its place.',
        'Write a zero for the empty shelf, not a word like <i>nothing</i>. A '
          + 'zero says you looked; a blank says nobody knows.'],
    better: 'There are six cartons on shelf three. There are none on shelf four - '
      + 'zero. I counted both.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '2.4.1',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Look at the room. Say three things that are here. Say one thing '
              + 'that is not here.',
            minWords: 6,
            rows: 2,
            hint: 'Use *there is* and *there are* for what is here, and *there are '
              + 'none* for what is not. The last one is the pattern worth the '
              + 'practice.'
          },
      {
            q: 'Read the two lines. Which one helps the supervisor? the shelf is '
              + 'not good · there are none on shelf four',
            model: 'The second. Not good is about the shelf. There are none on shelf '
              + 'four is about the stock, and it is a thing somebody can act on '
              + 'this morning',
            minWords: 6,
            rows: 3,
            hint: 'Ask which line somebody could act on this morning without asking '
              + 'you a second question.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '2.4.2',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-4',
      passage: {
        title: 'Language box',
        html: '<p><b>There is, there are, there are none</b></p><table '
          + 'class=\'bk\'><tr><th></th><th>One</th><th>More than '
          + 'one</th><th>Zero</th></tr><tr><td><b>+</b></td><td><b>There is</b> a '
          + 'carton.</td><td><b>There are</b> six cartons.</td><td><b>There are '
          + 'none.</b></td></tr><tr><td><b>–</b></td><td><b>There is not</b> a '
          + 'carton.</td><td><b>There are not</b> any '
          + 'cartons.</td><td><b>Zero.</b></td></tr><tr><td><b>?</b></td><td><b>Is '
          + 'there</b> a carton?</td><td><b>Are there</b> any '
          + 'cartons?</td><td><b>How many are there?</b></td></tr></table><p>⚠ '
          + '<b><i>there is</i> for one. <i>there are</i> for more than '
          + 'one.</b></p><p>⚠ <b><i>none</i> and <i>zero</i> are numbers. '
          + '<i>Empty</i> is not.</b> <b>Say the number, and the supervisor knows '
          + 'you looked.</b></p><p>⚠ <b>Say nothing about a shelf, and nobody '
          + 'knows if it is empty or if you did not '
          + 'go.</b></p><p><b>Practise:</b> Write <i>there is</i>, <i>there '
          + 'are</i> or <i>there are none</i>.</p><p>1 <span '
          + 'class="blank"></span> a pallet by the door. 2 <span '
          + 'class="blank"></span> nine rolls on shelf one. 3 Shelf six? <span '
          + 'class="blank"></span>. 4 <span class="blank"></span> two lorries in '
          + 'the yard.</p><p><b>Useful words:</b> There are six. · There are '
          + 'none. · Zero. · It is empty. · I looked.</p><p><b>Sound — <i>there '
          + 'are</i>.</b> 🔊 <b>Track 2.8</b> Listen. Say it. <i>There are</i> → '
          + '<i>there\'re</i> /ðeərə/. <i>There are six on the shelf.</i> Say it '
          + 'four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is on shelf four?',
            options: [{
              t: 'six cartons',
              ok: false,
              why: 'Six are on shelf three, not shelf four.'
            },
            {
              t: 'nothing',
              ok: true,
              why: 'There is none, and zero is the number he writes.'
            },
            {
              t: 'rolls',
              ok: false,
              why: 'The rolls are in another cycle, not on this shelf.'
            }],
            evidence: 'the exchange about shelf four, and the word Abu Yasser writes'
          },
        {
            q: 'Listen again. How many cartons are on shelf three?',
            options: [{
              t: 'six',
              ok: true,
              why: '*There are six cartons on shelf three* - the pattern the cycle '
                + 'is teaching, with its number.'
            },
            {
              t: 'none',
              ok: false,
              why: 'None is the answer to the *other* shelf, shelf four, which is empty.'
            },
            {
              t: 'four',
              ok: false,
              why: 'Four is the shelf number in the second half of the dialogue, '
                + 'not a count of anything.'
            }],
            evidence: 'Ammar\'s first full sentence'
          },
        {
            q: 'Why is saying nothing about shelf four worse than saying none?',
            options: [{
              t: 'because nobody can tell an empty shelf from an unchecked one',
              ok: true,
              why: '*Then I do not know if it is empty or if you did not look.* A '
                + 'zero is a report; a silence is not.'
            },
            {
              t: 'because none is not a number',
              ok: false,
              why: 'He says the opposite in the same breath: *none is a number. I '
                + 'write zero.*'
            },
            {
              t: 'because the sheet has no space for a zero',
              ok: false,
              why: 'He writes the zero himself, so the space exists.'
            }],
            evidence: 'Abu Yasser\'s very last line'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '2.4.2',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is on shelf three?',
            model: 'Six cartons',
            minWords: 1,
            rows: 2,
            hint: 'Ammar\'s first full sentence, which has the number and the thing '
              + 'in it. Both belong in your answer.'
          },
      {
            q: 'What does Abu Yasser write down?',
            model: 'Zero',
            minWords: 1,
            rows: 2,
            hint: 'He writes a figure for the empty shelf, and he says in the same '
              + 'breath why it is allowed to be a number at all.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '2.4.3',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One asks about four shelves. One answers. Then change places.',
      scene: 'u2-2-4-pair',
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
        rows: [['shelf 3: 6 cartons · shelf 4: none · shelf 5: one pallet',
          'shelf 1: 9 rolls · shelf 2: none · shelf 6: one packet']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '2.4.3R',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ There is…</td><td>☐ There '
          + 'are…</td><td>☐ There are none.</td><td>☐ Zero.</td><td>☐ I '
          + 'looked.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: There is, there are, there are none.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '2.4.4',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of four places at your work. Say what is there. Write it. One place '
  + 'must have none.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The place</th><th>How many</th><th>The '
          + 'thing</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'the back store — 14 — cartons · the cupboard — 0 — none · the '
              + 'yard — 2 — pallets · shelf 6 — 9 — rolls',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of four places at your work. Say what is there. Write it. One '
          + 'place must have none.',
        grammar: 'There is, there are, there are none',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (2.4) teaches: There is, there are, there are none. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: There is, there are, there are none.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['none',
        'than',
        'zero',
        'numbers',
        'empty',
        'number',
        'supervisor',
        'knows',
        'looked',
        'nothing']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: There is, there are, there are none.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '2.4.4R',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: There are in . There are none in .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'There are fourteen cartons in the back store. There are none in '
              + 'the cupboard',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — There are — in —. There are none in —. (The dashes '
          + 'are blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'There is, there are, there are none',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (2.4) teaches: '
          + 'There is, there are, there are none. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: There is, there are, there are none.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['none',
        'than',
        'zero',
        'numbers',
        'empty',
        'number',
        'supervisor',
        'knows',
        'looked',
        'nothing'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: There is, there are, there are none.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '2.4.5',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the shelf check. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>SHELF CHECK — BACK STORE — 6 MARCH</b></p><table '
          + 'class=\'bk\'><tr><th>Shelf</th><th>How '
          + 'many</th><th>Thing</th></tr><tr><td>1</td><td>9</td><td>rolls</td></tr><tr><td>2</td><td>0</td><td>— '
          + 'none '
          + '—</td></tr><tr><td>3</td><td>6</td><td>cartons</td></tr><tr><td>4</td><td>0</td><td>— '
          + 'none '
          + '—</td></tr><tr><td>5</td><td>1</td><td>pallet</td></tr></table><p>⚠ '
          + '<b>Every shelf has a line. A shelf with no line is a shelf nobody '
          + 'looked at.</b></p><h4>Writer\'s box</h4><p><b>A shelf check has one '
          + 'line for every shelf</b> — <b>including the empty ones.</b></p><p>⚠ '
          + '<b>Write 0 for an empty shelf.</b> <b>An empty line means nobody '
          + 'looked. A 0 means somebody did.</b> <b>That is the whole '
          + 'difference.</b></p><p>⚠ <b>Number the shelves in order: 1, 2, 3, 4, '
          + '5.</b> <b>A check that skips shelf 4 is a check with a hole in '
          + 'it.</b></p>'
      },
      questions: [{
            q: 'Which shelves have none?',
            model: 'Shelves 2 and 4',
            minWords: 1,
            rows: 2,
            hint: 'Read down the count sheet for the rows with nothing in them. '
              + 'There is more than one.'
          },
      {
            q: 'What is on shelf five?',
            model: 'One pallet',
            minWords: 1,
            rows: 2,
            hint: 'The count sheet, shelf 5 row - and give the unit word, not just '
              + 'the figure.'
          },
      {
            q: 'What does a shelf with no line mean?',
            model: 'That nobody looked at that shelf',
            minWords: 2,
            rows: 2,
            keys: ['nobody',
              'looked',
              'shelf'],
            need: 1,
            hint: 'The note under the sheet. The answer is about the *person*, not '
              + 'the stock - and it is why a zero is better than a blank.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '2.4.6',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a shelf check for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['SHELF CHECK — FRONT STORE — 12 MARCH',
      '1 — 6 — cartons 2 — 0 — none 3 — 11 — packets 4 — 0 — none 5 — 1 — pallet'],
      meter: {
        label: 'words from this lesson',
        words: ['none',
        'than',
        'zero',
        'numbers',
        'empty',
        'number',
        'supervisor',
        'knows']
      },
      coach: {
        title: 'What to include',
        task: 'Write a shelf check for your own work (15 words or more).',
        criteria: [{ t: 'A shelf check has one line for every shelf — including the empty ones.' },
            { t: '⚠ Write 0 for an empty shelf. An empty line means nobody looked. '
              + 'A 0 means somebody did. That is the whole difference.' },
            { t: '⚠ Number the shelves in order: 1, 2, 3, 4, 5. A check that skips '
              + 'shelf 4 is a check with a hole in it.' }]
      },
      aiCheck: {
        task: 'Write a shelf check for your own work (15 words or more).',
        grammar: 'There is, there are, there are none',
        must: ['A shelf check has one line for every shelf — including the empty ones.',
        '⚠ Write 0 for an empty shelf. An empty line means nobody looked. A 0 '
          + 'means somebody did. That is the whole difference.',
        '⚠ Number the shelves in order: 1, 2, 3, 4, 5. A check that skips '
          + 'shelf 4 is a check with a hole in it.'],
        vocab: ['none',
        'than',
        'zero',
        'numbers',
        'empty',
        'number',
        'supervisor',
        'knows',
        'looked',
        'nothing']
      }
    },
    {
      id: 'c10',
      kind: 'own',
      ref: '2.4.6P',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>A '
          + 'line for every shelf, in order</td><td>&nbsp;</td></tr><tr><td>0 on '
          + 'the empty ones, not a blank</td><td>&nbsp;</td></tr><tr><td>A thing '
          + 'on every line that is not 0</td><td>&nbsp;</td></tr><tr><td>The day '
          + 'and the place at the top</td><td>&nbsp;</td></tr></table>'
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
        grammar: 'There is, there are, there are none',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (2.4) '
          + 'teaches: There is, there are, there are none. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        must: ['A shelf check has one line for every shelf — including the empty ones.',
        '⚠ Write 0 for an empty shelf. An empty line means nobody looked. A 0 '
          + 'means somebody did. That is the whole difference.',
        '⚠ Number the shelves in order: 1, 2, 3, 4, 5. A check that skips '
          + 'shelf 4 is a check with a hole in it.'],
        vocab: ['none',
        'than',
        'zero',
        'numbers',
        'empty',
        'number',
        'supervisor',
        'knows',
        'looked',
        'nothing'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '2.4.6R',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their empty lines. The class says if a 0 is there.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: There is, there are, there are none.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '2.4.7',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about something at your work that ran out (<b>20 to 35 words</b>). '
  + 'What was it? When did somebody see? Who said it first?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['We ran out of tape in February. Nobody wrote it down. The shelf was '
        + 'empty for four days and the sheet had a blank line, so nobody knew'],
      stems: ['We ran out…',
      'Nobody wrote it…',
      'The shelf was…'],
      meter: {
        label: 'words from this lesson',
        words: ['none',
        'than',
        'zero',
        'numbers',
        'empty',
        'number',
        'supervisor',
        'knows']
      },
      coach: {
        title: 'What to include',
        task: 'Write about something at your work that ran out (20 to 35 words). What was '
  + 'it? When did somebody see? Who said it first?',
        criteria: [{ t: 'A shelf check has one line for every shelf — including the empty ones.' },
            { t: '⚠ Write 0 for an empty shelf. An empty line means nobody looked. '
              + 'A 0 means somebody did. That is the whole difference.' },
            { t: '⚠ Number the shelves in order: 1, 2, 3, 4, 5. A check that skips '
              + 'shelf 4 is a check with a hole in it.' }]
      },
      aiCheck: {
        task: 'Write about something at your work that ran out (20 to 35 words). '
          + 'What was it? When did somebody see? Who said it first?',
        grammar: 'There is, there are, there are none',
        must: ['A shelf check has one line for every shelf — including the empty ones.',
        '⚠ Write 0 for an empty shelf. An empty line means nobody looked. A 0 '
          + 'means somebody did. That is the whole difference.',
        '⚠ Number the shelves in order: 1, 2, 3, 4, 5. A check that skips '
          + 'shelf 4 is a check with a hole in it.'],
        vocab: ['none',
        'than',
        'zero',
        'numbers',
        'empty',
        'number',
        'supervisor',
        'knows',
        'looked',
        'nothing']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '2.4.7P',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Who said it first? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '? Who said it first? — A driver, on the fourth day',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Who said it first? '
          + 'Write the answer.',
        grammar: 'There is, there are, there are none',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (2.4) teaches: There is, there are, there are none. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: There is, there are, there are none.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['none',
        'than',
        'zero',
        'numbers',
        'empty',
        'number',
        'supervisor',
        'knows',
        'looked',
        'nothing'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: There is, there are, there are none.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '2.4.7R',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many did somebody write the zero down? Count them '
  + 'on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> six places at your '
          + 'work and how many things are in each — with 0 where there are none '
          + '(20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: There is, there are, there are none.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
