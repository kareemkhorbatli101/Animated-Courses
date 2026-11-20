/* Unit 4 · cycle 4.1 — In the box, on the shelf, under the bench.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u4-s01', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 4 · 4.1', part: '4.1',
          section: '1', lesson: 'In the box, on the shelf, under the bench', title: 'In the box, on the shelf, under the bench' },
  objective: 'say where a thing is — in, on, under, behind, next to',
  study: {
    minutes: 90,
    objective: 'say where a thing is — in, on, under, behind, next to',
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
    task: 'Write where you put something so the next person can find it.',
    weak: 'I put the box on the shelf.',
    change: ['Say which shelf, and in what order the shelves are counted. <i>The '
          + 'shelf</i> is only clear to the person standing there.',
        'Add the second small word if there is one - <i>in front of the '
          + 'paper</i>, not just <i>on the top shelf</i>.'],
    better: 'I put the small box of labels on the top shelf, in front of the paper, '
      + 'so it can be seen from the floor.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '4.1.1',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Put your pen in your book. on your book. under your book. Say '
              + 'what you are doing.',
            minWords: 6,
            rows: 2,
            hint: 'Say the whole sentence each time, not just the little word. The '
              + 'little word only means anything with the thing after it.'
          },
      {
            q: 'Where is your bag? Say it with one of the five words.',
            minWords: 6,
            rows: 2,
            hint: 'The five are *in, on, under, behind, next to*. If two of them '
              + 'fit, say both - *under the table, next to the wall* is better '
              + 'than either.'
          }],
      ideas: ['The five small words',
      'Ladder — next to the bench'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
    },
    {
      id: 'c2',
      ref: '4.1.2',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u4-4-1',
      passage: {
        title: 'Language box',
        html: '<p><b>The five small words</b></p><table '
          + 'class=\'bk\'><tr><th>Word</th><th>It means</th><th>At '
          + 'work</th></tr><tr><td><b>in</b></td><td>inside</td><td><b>in</b> the '
          + 'box · <b>in</b> the store</td></tr><tr><td><b>on</b></td><td>on top '
          + 'of</td><td><b>on</b> the shelf · <b>on</b> the '
          + 'table</td></tr><tr><td><b>under</b></td><td>below</td><td><b>under</b> '
          + 'the bench · <b>under</b> the '
          + 'pallet</td></tr><tr><td><b>behind</b></td><td>at the back '
          + 'of</td><td><b>behind</b> the door · <b>behind</b> the '
          + 'paper</td></tr><tr><td><b>next to</b></td><td>beside</td><td><b>next '
          + 'to</b> the bench · <b>next to</b> the gate</td></tr></table><p>⚠ '
          + '<b>The word comes BEFORE the thing:</b> <b>on</b> the shelf. '
          + '<b>Not</b> <s>the shelf on</s>.</p><p>⚠ <b><i>in</i> and <i>on</i> '
          + 'are the two that get swapped, and the difference is money.</b> '
          + '<b><i>in</i> the box is inside it; <i>on</i> the box is on the lid '
          + 'where it will fall off.</b></p><p><b>Practise:</b> Write the '
          + 'word.</p><p>1 The labels are <span class="blank"></span> the small '
          + 'box. 2 The box is <span class="blank"></span> the bench. 3 The '
          + 'ladder is <span class="blank"></span> the bench. 4 Put the paper '
          + '<span class="blank"></span> the top shelf.</p><p><b>Useful '
          + 'words:</b> in the box · on the shelf · under the bench · behind the '
          + 'door · next to the gate</p><p><b>Sound — the small words.</b> 🔊 '
          + '<b>Track 4.2</b> Listen. Say it. <b>The small word is QUIET and the '
          + 'thing is LOUD:</b> <i>on the SHELF · under the BENCH.</i> Say each '
          + 'one four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Where is the small box?',
            options: [{
              t: 'on the shelf',
              ok: false,
              why: 'He looked on the shelf first and it was not there.'
            },
            {
              t: 'under the bench',
              ok: true,
              why: 'Abu Yasser sends him under the bench, and it is there.'
            },
            {
              t: 'behind the door',
              ok: false,
              why: 'Behind the door is where the big roll stands, in a different cycle.'
            }],
            evidence: 'the line that tells Ammar where to look next'
          },
        {
            q: 'Listen again. Where is the small box of labels?',
            options: [{
              t: 'under the bench',
              ok: true,
              why: 'Two guesses are ruled out before it: *look under the bench* - '
                + 'and there it is.'
            },
            {
              t: 'on the shelf',
              ok: false,
              why: 'Ammar\'s first guess, and Abu Yasser has already looked there.'
            },
            {
              t: 'in the big box',
              ok: false,
              why: 'Ammar\'s second guess, also ruled out before the answer arrives.'
            }],
            evidence: 'the three guesses, and which one Abu Yasser sends him to'
          },
        {
            q: 'Why must the box go in FRONT of the paper, not behind it?',
            options: [{
              t: 'so the next man can see it',
              ok: true,
              why: '*In front of it. So the next man can see it.* Where a thing '
                + 'goes is decided by who looks for it next.'
            },
            {
              t: 'because behind the paper is dusty',
              ok: false,
              why: 'Dust is the clue in a later cycle of this unit, about things '
                + 'that have gone. Nothing is dusty here.'
            },
            {
              t: 'because the shelf is full at the back',
              ok: false,
              why: 'Nothing is said about the shelf being full.'
            }],
            evidence: 'Abu Yasser\'s last line'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '4.1.2',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is next to the bench?',
            model: 'A ladder',
            minWords: 1,
            rows: 2,
            hint: 'Abu Yasser mentions it in the same line as the top shelf, as the '
              + 'way to reach it.'
          },
      {
            q: 'Where does Ammar look first?',
            model: 'On the shelf',
            minWords: 1,
            rows: 2,
            hint: 'His first guess, which Abu Yasser has already ruled out himself.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '4.1.3',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One asks. One answers. Then change places.',
      scene: 'u4-4-1-pair',
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
        rows: [['box of labels · on the shelf · in the big box · under the bench',
          'count sheet · on the table · behind the door · in the drawer']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '4.1.3R',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ in the box</td><td>☐ on the '
          + 'shelf</td><td>☐ under the bench</td><td>☐ behind the door</td><td>☐ '
          + 'next to the gate</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The five small words',
      'Ladder — next to the bench'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The five small words.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '4.1.4',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Say where five things are at your work. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The thing</th><th>Where it '
          + 'is</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'The thing: the count sheets Where it is: on the table, next to '
              + 'the window · The thing: the spare key Where it is: behind the '
              + 'door, on the hook · The thing: the labels Where it is: in the '
              + 'small box, on the top shelf · The thing: the ladder Where it is: '
              + 'next to the long bench · The thing: the old sheets Where it is: '
              + 'under the table, in a green box',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Say where five things are at your work. Write it.',
        grammar: 'The five small words',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (4.1) teaches: The five small words. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The five small words.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['small',
        'words',
        'word',
        'before',
        'thing',
        'shelf',
        'swapped',
        'difference',
        'money',
        'inside']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The five small words.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '4.1.4R',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: The is the .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'The spare key is behind the door, on the hook',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — The — is — the —. (The dashes are blanks the '
          + 'learner fills in with their own workplace. Judge what they wrote in '
          + 'them, not the blanks.)',
        grammar: 'The five small words',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (4.1) teaches: '
          + 'The five small words. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The five small words.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['small',
        'words',
        'word',
        'before',
        'thing',
        'shelf',
        'swapped',
        'difference',
        'money',
        'inside'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The five small words.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '4.1.5',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the note on the small store door. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>SMALL STORE — WHERE THINGS ARE</b></p><p><b>Labels</b> — in '
          + 'the small box, on the top shelf</p><p><b>Count sheets</b> — on the '
          + 'table, next to the window</p><p><b>Ladder</b> — next to the '
          + 'bench</p><p><b>Spare key</b> — behind the door, on the hook</p><p>⚠ '
          + '<b>Put it back where this paper says. A.Y.</b></p><h4>Writer\'s '
          + 'box</h4><p><b>A where-things-are note has one line for each '
          + 'thing:</b> the thing → the small word → the place.</p><p>⚠ <b>Two '
          + 'small words are better than one.</b> <i>In the small box, <b>on the '
          + 'top shelf</b>.</i> <b>One word tells you the container; two tell you '
          + 'where the container is.</b></p><p>⚠ <b>End with the line that makes '
          + 'the note work:</b> <i>put it back where this paper says</i>. <b>A '
          + 'note that only tells you where to FIND a thing is out of date the '
          + 'first time somebody moves it.</b></p>'
      },
      questions: [{
            q: 'Where are the labels?',
            model: 'In the small box, on the top shelf',
            minWords: 2,
            rows: 2,
            keys: ['small',
              'box',
              'top',
              'shelf'],
            need: 1,
            hint: 'Two places in one answer: which box, and which shelf. The table '
              + 'above has both.'
          },
      {
            q: 'What is behind the door?',
            model: 'The spare key, on the hook',
            minWords: 2,
            rows: 2,
            keys: ['spare',
              'key',
              'hook'],
            need: 1,
            hint: 'The table above, the *behind the door* row. Give the thing and '
              + 'what it hangs on.'
          },
      {
            q: 'How many places have TWO small words?',
            model: 'Three — labels, count sheets and spare key',
            minWords: 2,
            rows: 2,
            keys: ['labels',
              'count',
              'sheets',
              'spare'],
            need: 1,
            hint: 'Count the rows of the table whose place needs two prepositions '
              + 'to say it - *in the box, on the shelf*. Name them as well as '
              + 'counting them.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '4.1.6',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a where-things-are note for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['BACK STORE — WHERE THINGS ARE',
      'Count sheets — on the table, next to the window'],
      meter: {
        label: 'words from this lesson',
        words: ['small',
        'words',
        'word',
        'before',
        'thing',
        'shelf',
        'swapped',
        'difference']
      },
      coach: {
        title: 'What to include',
        task: 'Write a where-things-are note for your own work (15 words or more).',
        criteria: [{ t: 'A where-things-are note has one line for each thing: the thing → '
              + 'the small word → the place.' },
            { t: '⚠ Two small words are better than one. In the small box, on the '
              + 'top shelf. One word tells you the container; two tell you where '
              + 'the container is.' },
            { t: '⚠ End with the line that makes the note work: put it back where '
              + 'this paper says. A note that only tells you where to FIND a '
              + 'thing is out of date the first time somebody moves it.' }]
      },
      aiCheck: {
        task: 'Write a where-things-are note for your own work (15 words or more).',
        grammar: 'The five small words',
        must: ['A where-things-are note has one line for each thing: the thing → the '
          + 'small word → the place.',
        '⚠ Two small words are better than one. In the small box, on the top '
          + 'shelf. One word tells you the container; two tell you where the '
          + 'container is.',
        '⚠ End with the line that makes the note work: put it back where this '
          + 'paper says. A note that only tells you where to FIND a thing is out '
          + 'of date the first time somebody moves it.'],
        vocab: ['small',
        'words',
        'word',
        'before',
        'thing',
        'shelf',
        'swapped',
        'difference',
        'money',
        'inside']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '4.1.6P',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>A '
          + 'small word on every line</td><td>&nbsp;</td></tr><tr><td>Two small '
          + 'words on at least two lines</td><td>&nbsp;</td></tr><tr><td>The '
          + 'place at the top</td><td>&nbsp;</td></tr><tr><td>The <i>put it '
          + 'back</i> line at the end</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "Ladder — the bench" · (pointing) '
              + 'Here. (reading) "Labels — in the box"',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'The five small words',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (4.1) '
          + 'teaches: The five small words. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        must: ['A where-things-are note has one line for each thing: the thing → the '
          + 'small word → the place.',
        '⚠ Two small words are better than one. In the small box, on the top '
          + 'shelf. One word tells you the container; two tell you where the '
          + 'container is.',
        '⚠ End with the line that makes the note work: put it back where this '
          + 'paper says. A note that only tells you where to FIND a thing is out '
          + 'of date the first time somebody moves it.'],
        vocab: ['small',
        'words',
        'word',
        'before',
        'thing',
        'shelf',
        'swapped',
        'difference',
        'money',
        'inside'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '4.1.6R',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read one line. The class says if they could find the thing.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The five small words',
      'Ladder — next to the bench'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The five small words.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '4.1.7',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about where you keep four things at work (<b>20 to 35 words</b>). '
  + 'Which one is hardest to find? Why?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['The count sheets are on the table and the labels are in a small box on '
        + 'the top shelf. The spare key is the hardest. It is behind the door and '
        + 'only three men know'],
      stems: ['The count sheets…',
      'The spare key…',
      'It is behind…'],
      meter: {
        label: 'words from this lesson',
        words: ['small',
        'words',
        'word',
        'before',
        'thing',
        'shelf',
        'swapped',
        'difference']
      },
      coach: {
        title: 'What to include',
        task: 'Write about where you keep four things at work (20 to 35 words). Which one '
  + 'is hardest to find? Why?',
        criteria: [{ t: 'A where-things-are note has one line for each thing: the thing → '
              + 'the small word → the place.' },
            { t: '⚠ Two small words are better than one. In the small box, on the '
              + 'top shelf. One word tells you the container; two tell you where '
              + 'the container is.' },
            { t: '⚠ End with the line that makes the note work: put it back where '
              + 'this paper says. A note that only tells you where to FIND a '
              + 'thing is out of date the first time somebody moves it.' }]
      },
      aiCheck: {
        task: 'Write about where you keep four things at work (20 to 35 words). '
          + 'Which one is hardest to find? Why?',
        grammar: 'The five small words',
        must: ['A where-things-are note has one line for each thing: the thing → the '
          + 'small word → the place.',
        '⚠ Two small words are better than one. In the small box, on the top '
          + 'shelf. One word tells you the container; two tell you where the '
          + 'container is.',
        '⚠ End with the line that makes the note work: put it back where this '
          + 'paper says. A note that only tells you where to FIND a thing is out '
          + 'of date the first time somebody moves it.'],
        vocab: ['small',
        'words',
        'word',
        'before',
        'thing',
        'shelf',
        'swapped',
        'difference',
        'money',
        'inside']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '4.1.7P',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Who else knows where that is? '
  + 'Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Who else knows where that is? — Three men. Not the new ones',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Who else knows where '
          + 'that is? Write the answer.',
        grammar: 'The five small words',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (4.1) teaches: The five small words. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The five small words.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['small',
        'words',
        'word',
        'before',
        'thing',
        'shelf',
        'swapped',
        'difference',
        'money',
        'inside'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The five small words.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '4.1.7R',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many things does only one person know the place of? '
  + 'Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> where six things are '
          + 'at your work, with two small words each (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The five small words',
      'Ladder — next to the bench'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The five small words.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
