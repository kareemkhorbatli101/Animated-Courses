/* Unit 2 · cycle 2.1 — One, two, three — how many?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u2-s01', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 2 · 2.1', part: '2.1',
          section: '1', lesson: 'One, two, three — how many?', title: 'One, two, three — how many?' },
  objective: 'say the numbers 0 to 20',
  study: {
    minutes: 90,
    objective: 'say the numbers 0 to 20',
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
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '2.1.1',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Count to twenty with your teacher. Then count backwards from ten.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'How many chairs are in this room? Say the number. Write it here:',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The numbers 0 to 20'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
    },
    {
      id: 'c2',
      ref: '2.1.2',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-1',
      passage: {
        title: 'Language box',
        html: '<p><b>The numbers 0 to 20</b></p><table class=\'bk\'><tr><th>0 zero '
          + '· 1 one · 2 two · 3 three · 4 four</th><th>5 five · 6 six · 7 seven '
          + '· 8 eight · 9 nine</th><th>10 ten · 11 eleven · 12 twelve · 13 '
          + 'thirteen</th><th>14 fourteen · 15 fifteen · 16 sixteen</th><th>17 '
          + 'seventeen · 18 eighteen · 19 nineteen · 20 '
          + 'twenty</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table><p><b>Asking:</b> '
          + '<b>How many</b> cartons? — Twelve. · <b>How many</b> are on the '
          + 'floor? — Six.</p><p>⚠ <b><i>How many</i> for things you can '
          + 'count:</b> cartons, rolls, people, days. <b>Not for water or '
          + 'paper.</b></p><p><b>Practise:</b> Write the number in words.</p><p>1 '
          + '12 <span class="blank"></span> 2 18 <span class="blank"></span> 3 7 '
          + '<span class="blank"></span> 4 15 <span class="blank"></span> 5 20 '
          + '<span class="blank"></span></p><p><b>Useful words:</b> How many…? · '
          + 'Count them. · Point at them. · Say it again. · That is <span '
          + 'class="blank"></span>.</p><p><b>Sound — <i>-teen</i>.</b> 🔊 <b>Track '
          + '2.2</b> Listen. Say it. The loud part is at the <b>end</b>: '
          + 'thir-<b>TEEN</b> · four-<b>TEEN</b> · fif-<b>TEEN</b>. Say each one '
          + 'four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What are they counting?',
            options: [{
              t: 'people',
              ok: false,
              why: 'Nobody is counted - the pallet is.'
            },
            {
              t: 'cartons',
              ok: true,
              why: 'He is told to count the cartons on the pallet.'
            },
            {
              t: 'lorries',
              ok: false,
              why: 'A lorry comes in another cycle. Here they are at the shelves.'
            }],
            evidence: 'the first line - what Abu Yasser tells Ammar to count'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '2.1.2',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many on the pallet?',
            model: 'Twelve',
            minWords: 1,
            rows: 2
          },
      {
            q: 'How many on the floor?',
            model: 'Six',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '2.1.3',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One person counts. One person asks. Then change places.',
      scene: 'u2-2-1-pair',
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
        rows: [['cartons on the pallet: 12 · on the floor: 6',
          'rolls on the shelf: 9 · in the box: 4']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '2.1.3R',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ How many…?</td><td>☐ Count '
          + 'them.</td><td>☐ That is…</td><td>☐ Point at them.</td><td>☐ Say it '
          + 'again.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The numbers 0 to 20'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '2.1.4',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Count four things in this room. Say the number. Write it in words and in numbers.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The thing</th><th>In numbers</th><th>In '
          + 'words</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'chairs — 14 — fourteen · windows — 3 — three · tables — 7 — '
              + 'seven · doors — 2 — two',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Count four things in this room. Say the number. Write it in words '
          + 'and in numbers.',
        grammar: 'The numbers 0 to 20',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (2.1) teaches: The numbers 0 to 20. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The numbers 0 to 20.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['numbers',
        'asking',
        'cartons',
        'twelve',
        'floor',
        'things',
        'count',
        'rolls',
        'people',
        'days']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '2.1.4R',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: There are in this room.',
      questions: [{
            q: 'Write what you told the class.',
            model: 'There are fourteen chairs in this room',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — There are — in this room. (The dashes are blanks '
          + 'the learner fills in with their own workplace. Judge what they wrote '
          + 'in them, not the blanks.)',
        grammar: 'The numbers 0 to 20',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (2.1) teaches: '
          + 'The numbers 0 to 20. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The numbers 0 to 20.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['numbers',
        'asking',
        'cartons',
        'twelve',
        'floor',
        'things',
        'count',
        'rolls',
        'people',
        'days'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      }
    },
    {
      id: 'c8',
      kind: 'model',
      ref: '2.1.5',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the count sheet. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>COUNT — 5 MARCH — BACK STORE</b></p><table '
          + 'class=\'bk\'><tr><th>Thing</th><th>Number</th></tr><tr><td>cartons, '
          + 'pallet 1</td><td>12</td></tr><tr><td>cartons, '
          + 'floor</td><td>6</td></tr><tr><td>rolls, shelf '
          + '3</td><td>9</td></tr><tr><td>TOTAL '
          + 'cartons</td><td>18</td></tr></table><h4>Writer\'s box</h4><p><b>A '
          + 'count sheet has four things:</b> the day → the place → the thing → '
          + 'the number.</p><p>⚠ <b>One line, one thing, one number.</b> A line '
          + 'with two numbers on it is a line nobody can use.</p><p>⚠ <b>Write '
          + 'the TOTAL at the bottom.</b> A sheet with no total is a sheet '
          + 'somebody must add up again.</p>'
      },
      questions: [{
            q: 'How many cartons on pallet 1?',
            model: 'Twelve',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What is the total?',
            model: 'Eighteen',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What is on shelf 3?',
            model: 'Nine rolls',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '2.1.6',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a count sheet for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['COUNT — 11 MARCH — BACK STORE',
      'cartons, pallet 1 — 20 · cartons, floor — 4 · rolls, shelf 1 — 12 · '
        + 'TOTAL cartons — 24'],
      meter: {
        label: 'words from this lesson',
        words: ['numbers',
        'asking',
        'cartons',
        'twelve',
        'floor',
        'things',
        'count',
        'rolls']
      },
      coach: {
        title: 'What to include',
        task: 'Write a count sheet for your own work (15 words or more).',
        criteria: [{ t: 'A count sheet has four things: the day → the place → the thing → '
              + 'the number.' },
            { t: '⚠ One line, one thing, one number. A line with two numbers on it '
              + 'is a line nobody can use.' },
            { t: '⚠ Write the TOTAL at the bottom. A sheet with no total is a '
              + 'sheet somebody must add up again.' }]
      },
      aiCheck: {
        task: 'Write a count sheet for your own work (15 words or more).',
        grammar: 'The numbers 0 to 20',
        must: ['A count sheet has four things: the day → the place → the thing → the number.',
        '⚠ One line, one thing, one number. A line with two numbers on it is '
          + 'a line nobody can use.',
        '⚠ Write the TOTAL at the bottom. A sheet with no total is a sheet '
          + 'somebody must add up again.'],
        vocab: ['numbers',
        'asking',
        'cartons',
        'twelve',
        'floor',
        'things',
        'count',
        'rolls',
        'people',
        'days']
      }
    },
    {
      id: 'c10',
      kind: 'own',
      ref: '2.1.6P',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>The '
          + 'day and the place at the top</td><td>&nbsp;</td></tr><tr><td>One '
          + 'thing and one number on each line</td><td>&nbsp;</td></tr><tr><td>A '
          + 'total at the bottom</td><td>&nbsp;</td></tr><tr><td>The total is '
          + 'right — add it up</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The numbers 0 to 20'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'The numbers 0 to 20',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (2.1) '
          + 'teaches: The numbers 0 to 20. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        must: ['A count sheet has four things: the day → the place → the thing → the number.',
        '⚠ One line, one thing, one number. A line with two numbers on it is '
          + 'a line nobody can use.',
        '⚠ Write the TOTAL at the bottom. A sheet with no total is a sheet '
          + 'somebody must add up again.'],
        vocab: ['numbers',
        'asking',
        'cartons',
        'twelve',
        'floor',
        'things',
        'count',
        'rolls',
        'people',
        'days'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '2.1.6R',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their total. The class adds up the lines. Is it the same?',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The numbers 0 to 20'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.']
    },
    {
      id: 'c12',
      ref: '2.1.7',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about counting at your work (<b>20 to 35 words</b>). What do you '
  + 'count? How often? Who reads the number?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['I count the cartons in the back store every morning. It takes about '
        + 'twenty minutes. I write the number on the sheet. Abu Yasser reads it '
        + 'at four o\'clock'],
      stems: ['I count the cartons…',
      'It takes about…',
      'I write the number…',
      'Abu Yasser reads…'],
      meter: {
        label: 'words from this lesson',
        words: ['numbers',
        'asking',
        'cartons',
        'twelve',
        'floor',
        'things',
        'count',
        'rolls']
      },
      coach: {
        title: 'What to include',
        task: 'Write about counting at your work (20 to 35 words). What do you count? How '
  + 'often? Who reads the number?',
        criteria: [{ t: 'A count sheet has four things: the day → the place → the thing → '
              + 'the number.' },
            { t: '⚠ One line, one thing, one number. A line with two numbers on it '
              + 'is a line nobody can use.' },
            { t: '⚠ Write the TOTAL at the bottom. A sheet with no total is a '
              + 'sheet somebody must add up again.' }]
      },
      aiCheck: {
        task: 'Write about counting at your work (20 to 35 words). What do you '
          + 'count? How often? Who reads the number?',
        grammar: 'The numbers 0 to 20',
        must: ['A count sheet has four things: the day → the place → the thing → the number.',
        '⚠ One line, one thing, one number. A line with two numbers on it is '
          + 'a line nobody can use.',
        '⚠ Write the TOTAL at the bottom. A sheet with no total is a sheet '
          + 'somebody must add up again.'],
        vocab: ['numbers',
        'asking',
        'cartons',
        'twelve',
        'floor',
        'things',
        'count',
        'rolls',
        'people',
        'days']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '2.1.7P',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Who reads that number? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '? Who reads that number? — The supervisor, at four o\'clock',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Who reads that number? '
          + 'Write the answer.',
        grammar: 'The numbers 0 to 20',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (2.1) teaches: The numbers 0 to 20. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The numbers 0 to 20.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['numbers',
        'asking',
        'cartons',
        'twelve',
        'floor',
        'things',
        'count',
        'rolls',
        'people',
        'days'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '2.1.7R',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many does somebody read the number? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> five things at your '
          + 'work and how many there are (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The numbers 0 to 20'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.']
    }
  ]
});
