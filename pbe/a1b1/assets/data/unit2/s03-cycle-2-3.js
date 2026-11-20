/* Unit 2 · cycle 2.3 — One carton, two cartons, a packet of twenty.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u2-s03', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 2 · 2.3', part: '2.3',
          section: '3', lesson: 'One carton, two cartons, a packet of twenty', title: 'One carton, two cartons, a packet of twenty' },
  objective: 'say how many boxes, rolls and packets',
  study: {
    minutes: 90,
    objective: 'say how many boxes, rolls and packets',
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
    task: 'Write what is on shelf two.',
    weak: 'Twenty on shelf two.',
    change: ['Say twenty <i>of what</i>. Three different things in this store are '
          + 'all called boxes.',
        'If you know what the packets sit in, say that too - it tells the '
          + 'next person how much space is used.'],
    better: 'Twenty packets on shelf two. Two cartons, ten packets in each.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '2.3.1',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say four things you count at your work. One of each, then many.',
            model: 'Open. Four things, singular and plural',
            minWords: 2,
            rows: 2,
            hint: 'Four pairs: *one box, six boxes*. The change at the end of the '
              + 'word is the thing being practised, so say both halves of each '
              + 'pair.'
          },
      {
            q: 'Read the four words. Which is big and which is small? carton · '
              + 'pallet · roll · packet',
            minWords: 6,
            rows: 2,
            hint: 'Put them in order of size rather than sorting them into two '
              + 'heaps - the dialogue says what fits inside what.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '2.3.2',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-3',
      passage: {
        title: 'Language box',
        html: '<p><b>One, and more than one</b></p><table '
          + 'class=\'bk\'><tr><th>One</th><th>More than one</th><th>What it is '
          + 'here</th></tr><tr><td><b>a</b> packet</td><td>two '
          + 'packet<b>s</b></td><td>the small one — 20 '
          + 'inside</td></tr><tr><td><b>a</b> carton</td><td>three '
          + 'carton<b>s</b></td><td>ten packets inside</td></tr><tr><td><b>a</b> '
          + 'roll</td><td>four roll<b>s</b></td><td>tape, '
          + 'plastic</td></tr><tr><td><b>a</b> pallet</td><td>two '
          + 'pallet<b>s</b></td><td>the wooden one on the '
          + 'floor</td></tr></table><p>⚠ <b>More than one takes -s:</b> two '
          + 'cartons. <b>One takes <i>a</i>:</b> a carton.</p><p>⚠ <b><i>an</i> '
          + 'before a, e, i, o, u:</b> <b>an</b> order, <b>an</b> empty '
          + 'shelf.</p><p>⚠ <b>Say the WORD with the NUMBER.</b> <i>Twenty</i> is '
          + 'not an answer. <i>Twenty packets</i> is.</p><p><b>Practise:</b> '
          + 'Write <i>a</i>, <i>an</i> or <i>-s</i>.</p><p>1 <span '
          + 'class="blank"></span> carton 2 three carton<span '
          + 'class="blank"></span> 3 <span class="blank"></span> empty pallet 4 '
          + '<span class="blank"></span> roll 5 nine roll<span '
          + 'class="blank"></span></p><p><b>Useful words:</b> Twenty what? · Come '
          + 'and look. · …inside · Say the word with the number.</p><p><b>Sound — '
          + 'the -s at the end.</b> 🔊 <b>Track 2.6</b> Listen. Say it. '
          + '<i>cartons</i> /z/ · <i>packets</i> /s/ · <i>boxes</i> /ɪz/. Say '
          + 'each one four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Ammar get wrong?',
            options: [{
              t: 'the number',
              ok: false,
              why: 'The number is right - twenty is what is there.'
            },
            {
              t: 'the word for the thing',
              ok: true,
              why: 'He says twenty but not twenty OF WHAT, and the unit is the whole point.'
            },
            {
              t: 'the shelf',
              ok: false,
              why: 'He has the right shelf. It is the word after the number that is missing.'
            }],
            evidence: 'the line where Abu Yasser asks \'Twenty what?\''
          },
        {
            q: 'Listen again. How many packets are in a carton?',
            options: [{
              t: 'ten',
              ok: true,
              why: '*A carton. Ten packets in a carton.* - said as he shows him one.'
            },
            {
              t: 'twenty',
              ok: false,
              why: 'Twenty is in the dialogue, but twenty is what is in a '
                + '*packet*, which is the smaller thing.'
            },
            {
              t: 'two',
              ok: false,
              why: 'Two appears here only as *shelf two*, which is a place, not a quantity.'
            }],
            evidence: 'Abu Yasser\'s line about the big one'
          },
        {
            q: 'What is the rule Abu Yasser gives at the end?',
            options: [{
              t: 'say the unit word with the number, always',
              ok: true,
              why: '*Say the word with the number. Always.* Twenty on its own is '
                + 'not a quantity - twenty packets is.'
            },
            {
              t: 'count everything twice',
              ok: false,
              why: 'Counting twice is a rule in this course, but it belongs to a '
                + 'later cycle. This one is about the missing word.'
            },
            {
              t: 'write the number on the shelf',
              ok: false,
              why: 'Nothing is written in this dialogue. The whole exchange is spoken.'
            }],
            evidence: 'the last two lines of the dialogue'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '2.3.2',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many in a packet?',
            model: 'Twenty',
            minWords: 1,
            rows: 2,
            hint: 'Abu Yasser holds one up and gives its count. That is the '
              + 'smallest of the three containers in this scene.'
          },
      {
            q: 'How many packets in a carton?',
            model: 'Ten',
            minWords: 1,
            rows: 2,
            hint: 'Said in the line where he shows Ammar *this big one*. Careful: '
              + 'there is a different number for what is inside a packet.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '2.3.3',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. Read the lines. Say it. Then change places.',
      scene: 'u2-2-3-pair',
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
        rows: [['20 · shelf 2 · packets · 20 in a packet',
          '12 · shelf 5 · cartons · 10 packets in a carton']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '2.3.3R',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Twenty what?</td><td>☐ Come and '
          + 'look.</td><td>☐ …inside</td><td>☐ a packet</td><td>☐ two '
          + 'cartons</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Packets: 20 in a packet',
      'Cartons: 10 packets in a carton'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: One, and more than one.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '2.3.4',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Say four things at your work with the number and the word. Your partner writes it.',
      passage: {
        title: 'From the book',
        html: '<table '
          + 'class=\'bk\'><tr><th>Number</th><th>Word</th><th>Where</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: '12 — cartons — pallet 1 · 9 — rolls — shelf 3 · 40 — packets — '
              + 'shelf 2 · 1 — pallet — the floor',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Say four things at your work with the number and the word. Your '
          + 'partner writes it.',
        grammar: 'One, and more than one',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (2.3) teaches: One, and more than one. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: One, and more than one.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['than',
        'cartons',
        'carton',
        'before',
        'order',
        'empty',
        'shelf',
        'word',
        'number',
        'twenty']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: One, and more than one.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '2.3.4R',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: There are on .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'There are twelve cartons on pallet one',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — There are — on —. (The dashes are blanks the '
          + 'learner fills in with their own workplace. Judge what they wrote in '
          + 'them, not the blanks.)',
        grammar: 'One, and more than one',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (2.3) teaches: '
          + 'One, and more than one. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: One, and more than one.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['than',
        'cartons',
        'carton',
        'before',
        'order',
        'empty',
        'shelf',
        'word',
        'number',
        'twenty'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: One, and more than one.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '2.3.5',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the shelf card. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>SHELF 2 — WHAT IS HERE</b></p><p><b>Packets:</b> 20 in a '
          + 'packet.</p><p><b>Cartons:</b> 10 packets in a '
          + 'carton.</p><p><b>Pallet:</b> 40 cartons on a full pallet.</p><p>⚠ '
          + '<b>Say the word with the number. Twenty is not an '
          + 'answer.</b></p><h4>Writer\'s box</h4><p><b>A shelf card has three '
          + 'lines:</b> the small thing → the middle thing → the big thing. '
          + '<b>And what is inside each one.</b></p><p>⚠ <b>Every line has a '
          + 'number AND a word.</b> <i>20 in a packet.</i> <b>Not</b> '
          + '<i>20.</i></p><p>⚠ <b>Put the card ON the shelf, not in the '
          + 'office.</b> A card in the office is a card for the office.</p>'
      },
      questions: [{
            q: 'How many packets in a carton?',
            model: 'Ten',
            minWords: 1,
            rows: 2,
            hint: 'Said in the line where he shows Ammar *this big one*. Careful: '
              + 'there is a different number for what is inside a packet.'
          },
      {
            q: 'How many cartons on a full pallet?',
            model: 'Forty',
            minWords: 1,
            rows: 2,
            hint: 'From the table above, not the dialogue. The pallet row.'
          },
      {
            q: 'Why is twenty not an answer?',
            model: 'Because twenty does not say twenty of what, and three different '
              + 'things in this store are all boxes',
            minWords: 6,
            rows: 2,
            keys: ['because',
              'different',
              'things',
              'store'],
            need: 1,
            hint: 'Because of what is missing after it. The store has three '
              + 'different things that a person might call a box.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '2.3.6',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a shelf card for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['SHELF 4 — WHAT IS HERE',
      'Packets: 25 in a packet. Cartons: 8 packets in a carton. Pallet: 36 '
        + 'cartons on a full pallet'],
      meter: {
        label: 'words from this lesson',
        words: ['than',
        'cartons',
        'carton',
        'before',
        'order',
        'empty',
        'shelf',
        'word']
      },
      coach: {
        title: 'What to include',
        task: 'Write a shelf card for your own work (15 words or more).',
        criteria: [{ t: 'A shelf card has three lines: the small thing → the middle thing '
              + '→ the big thing. And what is inside each one.' },
            { t: '⚠ Every line has a number AND a word. 20 in a packet. Not 20.' },
            { t: '⚠ Put the card ON the shelf, not in the office. A card in the '
              + 'office is a card for the office.' }]
      },
      aiCheck: {
        task: 'Write a shelf card for your own work (15 words or more).',
        grammar: 'One, and more than one',
        must: ['A shelf card has three lines: the small thing → the middle thing → '
          + 'the big thing. And what is inside each one.',
        '⚠ Every line has a number AND a word. 20 in a packet. Not 20.',
        '⚠ Put the card ON the shelf, not in the office. A card in the office '
          + 'is a card for the office.'],
        vocab: ['than',
        'cartons',
        'carton',
        'before',
        'order',
        'empty',
        'shelf',
        'word',
        'number',
        'twenty']
      }
    },
    {
      id: 'c10',
      kind: 'own',
      ref: '2.3.6P',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>A '
          + 'number AND a word on every line</td><td>&nbsp;</td></tr><tr><td>-s '
          + 'on more than one</td><td>&nbsp;</td></tr><tr><td><i>a</i> or '
          + '<i>an</i> on one</td><td>&nbsp;</td></tr><tr><td>Three lines: small, '
          + 'middle, big</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Packets: 20 in a packet',
      'Cartons: 10 packets in a carton'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'One, and more than one',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (2.3) '
          + 'teaches: One, and more than one. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        must: ['A shelf card has three lines: the small thing → the middle thing → '
          + 'the big thing. And what is inside each one.',
        '⚠ Every line has a number AND a word. 20 in a packet. Not 20.',
        '⚠ Put the card ON the shelf, not in the office. A card in the office '
          + 'is a card for the office.'],
        vocab: ['than',
        'cartons',
        'carton',
        'before',
        'order',
        'empty',
        'shelf',
        'word',
        'number',
        'twenty'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '2.3.6R',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read one line. The class says what is inside. Is it clear?',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Packets: 20 in a packet',
      'Cartons: 10 packets in a carton'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: One, and more than one.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '2.3.7',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about the things you count at your work (<b>20 to 35 words</b>). What '
  + 'is the small one? What is the big one? How many inside?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['We count packets, cartons and pallets. A packet has twenty-five '
        + 'inside. A carton has eight packets. The pallet is the wooden thing and '
        + 'it holds thirty-six cartons'],
      stems: ['We count packets…',
      'A packet has…',
      'A carton has…',
      'The pallet is…'],
      meter: {
        label: 'words from this lesson',
        words: ['than',
        'cartons',
        'carton',
        'before',
        'order',
        'empty',
        'shelf',
        'word']
      },
      coach: {
        title: 'What to include',
        task: 'Write about the things you count at your work (20 to 35 words). What is the '
  + 'small one? What is the big one? How many inside?',
        criteria: [{ t: 'A shelf card has three lines: the small thing → the middle thing '
              + '→ the big thing. And what is inside each one.' },
            { t: '⚠ Every line has a number AND a word. 20 in a packet. Not 20.' },
            { t: '⚠ Put the card ON the shelf, not in the office. A card in the '
              + 'office is a card for the office.' }]
      },
      aiCheck: {
        task: 'Write about the things you count at your work (20 to 35 words). What '
          + 'is the small one? What is the big one? How many inside?',
        grammar: 'One, and more than one',
        must: ['A shelf card has three lines: the small thing → the middle thing → '
          + 'the big thing. And what is inside each one.',
        '⚠ Every line has a number AND a word. 20 in a packet. Not 20.',
        '⚠ Put the card ON the shelf, not in the office. A card in the office '
          + 'is a card for the office.'],
        vocab: ['than',
        'cartons',
        'carton',
        'before',
        'order',
        'empty',
        'shelf',
        'word',
        'number',
        'twenty']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '2.3.7P',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: How many in one? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '? How many in one? — Twenty-five in a packet',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: How many in one? Write '
          + 'the answer.',
        grammar: 'One, and more than one',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (2.3) teaches: One, and more than one. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: One, and more than one.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['than',
        'cartons',
        'carton',
        'before',
        'order',
        'empty',
        'shelf',
        'word',
        'number',
        'twenty'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: One, and more than one.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '2.3.7R',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many is the word said with the number every time? '
  + 'Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> four things at your '
          + 'work with the number and the word (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Packets: 20 in a packet',
      'Cartons: 10 packets in a carton'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: One, and more than one.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
