/* Unit 4 · cycle 4.1 — Two cartons, six rolls and a lot of tape.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u4-s01', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 4 · 4.1', part: '4.1',
          section: '1', lesson: 'Two cartons, six rolls and a lot of tape', title: 'Two cartons, six rolls and a lot of tape' },
  objective: 'count and say what you have, in the right words for each thing',
  study: {
    minutes: 90,
    objective: 'count and say what you have, in the right words for each thing',
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
    task: 'Write the line you put on the count sheet for the tape.',
    weak: 'Thirty tape.',
    change: ['Put the unit between the number and the goods - rolls, packets, cartons.',
        'Add what is inside one of them, so the next person can check without '
          + 'opening a box.'],
    better: 'Thirty rolls of tape, twelve in each carton.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '4.1.1',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Can count '
          + '✓</th><th>Word</th></tr><tr><td>&nbsp;</td><td>box</td></tr><tr><td>&nbsp;</td><td>paper</td></tr><tr><td>&nbsp;</td><td>roll</td></tr><tr><td>&nbsp;</td><td>tape</td></tr><tr><td>&nbsp;</td><td>packet</td></tr><tr><td>&nbsp;</td><td>water</td></tr><tr><td>&nbsp;</td><td>item</td></tr></table>'
      },
      questions: [{
            q: 'Which can you count one, two, three? Tick them.',
            model: 'Countable ✓: box · roll · packet · item. Uncountable ✗: paper · '
              + 'tape · water',
            minWords: 3,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Your '
              + 'own workplace, not the book\'s. Say it out loud once before you '
              + 'write it - a sentence or two is enough.'
          },
      {
            q: 'How do you count the ones you cannot count? of paper · of tape · of water',
            model: 'a packet / sheet / ream of paper · a roll of tape · a bottle / '
              + 'glass / litre of water',
            minWords: 5,
            rows: 2,
            hint: 'A way of doing it, not a yes or a no. Your own workplace, not '
              + 'the book\'s. Say it out loud once before you write it - a '
              + 'sentence or two is enough.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
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
        html: '<p><b>Grammar – countable and uncountable</b></p><table '
          + 'class=\'bk\'><tr><th>Countable (one, two, three)</th><th>Uncountable '
          + '(no number in front)</th></tr><tr><td>a box – two box<b>es</b> · a '
          + 'roll – six roll<b>s</b></td><td>tape · paper · water · money · '
          + 'work</td></tr><tr><td><b>How many</b> boxes?</td><td><b>How much</b> '
          + 'tape?</td></tr><tr><td>a few boxes · not many boxes</td><td>a little '
          + 'tape · not much tape</td></tr></table><p><b>To count an uncountable '
          + 'thing, use a container or a unit:</b> a <b>roll</b> of tape · a '
          + '<b>packet</b> of paper · a <b>carton</b> of gloves · a <b>bottle</b> '
          + 'of water · a <b>kilo</b> of sugar · a <b>piece</b> of wood</p><p>⚠ '
          + '<i>a paper</i> = one sheet, or a newspaper. <b>Not</b> the material. '
          + 'For the material, say <i>some paper</i> or <i>a packet of '
          + 'paper</i>.</p><p><b>Practise:</b> <i>How much</i> or <i>how '
          + 'many</i>? Then answer with a unit.</p><p>1 <span '
          + 'class="blank"></span> tape have we got? 2 <span '
          + 'class="blank"></span> boxes are there? 3 <span class="blank"></span> '
          + 'paper do you need? 4 <span class="blank"></span> gloves are in a '
          + 'carton? 5 <span class="blank"></span> work is left?</p><p><b>Useful '
          + 'phrases:</b> Thirty rolls of… · Six packets of… · a dozen · twelve '
          + 'in each carton · Write <b>none</b>, not '
          + 'nothing.</p><p><b>Pronunciation – plural endings.</b> 🔊 <b>Track '
          + '4.2</b> Listen and repeat: /s/ <i>packets, units, items</i> · /z/ '
          + '<i>rolls, cartons, orders</i> · /ɪz/ <i>boxes, pieces, '
          + 'prices</i></p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is Nour writing?',
            options: [{
              t: 'an invoice',
              ok: false,
              why: 'Quantities and goods are both being written, which an invoice '
                + 'also has - but no price and no customer is named.'
            },
            {
              t: 'the stock list',
              ok: true,
              why: 'She says so in the first line, and every correction after it '
                + 'is about the unit beside a number.'
            },
            {
              t: 'a letter',
              ok: false,
              why: 'Nothing here is addressed to anybody.'
            }],
            evidence: 'Nour\'s first line, and the corrections Abu Yasser keeps making '
              + 'to her units'
          },
        {
            q: 'Books closed. Listen. How is paper counted?',
            options: [{
              t: 'in packets',
              ok: true,
              why: '"Six packets, not six papers" - and he gives the reason in the '
                + 'next line.'
            },
            {
              t: 'in rolls',
              ok: false,
              why: 'Rolls are tape. He corrects Nour on that one first, which is '
                + 'why it is easy to carry over.'
            },
            {
              t: 'in sheets',
              ok: false,
              why: 'A sheet is what a paper IS - and that is the mistake he is '
                + 'warning against, not the unit.'
            }],
            evidence: 'Abu Yasser\'s second correction'
          },
        {
            q: 'Why does he say to write “none” rather than leave the box empty?',
            options: [{
              t: 'because an empty box looks like a mistake, not a fact',
              ok: true,
              why: '"Nothing looks like you forgot." None is a measurement; blank '
                + 'is an unanswered question.'
            },
            {
              t: 'because the head office counts the empty boxes',
              ok: false,
              why: 'Nobody says that. The head office appears in unit 3, about the '
                + 'photocopier.'
            },
            {
              t: 'because there might be wrap he has not found',
              ok: false,
              why: 'He is certain there is none - the last roll went on Sunday, '
                + 'two cycles ago.'
            }],
            evidence: 'his last line'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '4.1.2',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'How much or how many? Then answer with a unit.',
      text: '<b>1</b> [[1]] tape have we got? &nbsp; <b>2</b> [[2]] boxes are there? '
      + '&nbsp; <b>3</b> [[3]] paper do you need? &nbsp; <b>4</b> [[4]] gloves '
      + 'are in a carton? &nbsp; <b>5</b> [[5]] work is left?',
      plain: true,
      small: true,
      answers: {
        '1': ['How much (— thirty rolls)'],
        '2': ['How many (— forty big, about a hundred small)'],
        '3': ['How much (— six packets)'],
        '4': ['How many (— twelve pairs)'],
        '5': ['How much (— about two hours\' work)']
      }
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '4.1.2',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many rolls of tape are there?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>rolls</i> in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'Why does Abu Yasser not say "two papers"?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with <i>because</i> and it will come out '
              + 'whole. Look in the dialogue above for the line with '
              + '<i>Yasser</i> in it. Play it again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '4.1.3',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A fills in a stock list; B gives the numbers with the right '
  + 'unit. Use the skeleton, then the role cards.',
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
        head: ['Role card 1 — the stationery cupboard',
        'Role card 2 — the café store'],
        rows: [['paper: 6 packets · ink: 2 cartridges · pens: 4 boxes of 10 · '
            + 'envelopes: about 300 · staples: none',
          'coffee: 8 kilos · sugar: 3 sacks · milk: 24 cartons · water: 60 '
            + 'bottles · tea: none']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '4.1.3R',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ How many…?</td><td>☐ How '
          + 'much…?</td><td>☐ rolls of…</td><td>☐ packets of…</td><td>☐ a '
          + 'dozen</td><td>☐ none</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write five quantities with their units — one mark for '
              + 'the number, one for the unit. Typical errors: two papers → two '
              + 'packets of paper; how much boxes → how many; a tape → a roll of '
              + 'tape',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – countable and uncountable.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '4.1.4',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Make a stock list of one real place — your kitchen cupboard, your desk '
  + 'drawer, the store at work. Then tell two colleagues and write theirs down.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Place</th><th>Item</th><th>Quantity + '
          + 'unit</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Grammar – countable and uncountable'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Make a stock list of one real place — your kitchen cupboard, your '
          + 'desk drawer, the store at work. Then tell two colleagues and write '
          + 'theirs down. (The dashes are blanks the learner fills in with their '
          + 'own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – countable and uncountable',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (4.1) teaches: Grammar – countable and uncountable. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – countable and uncountable.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'countable',
        'uncountable',
        'count',
        'thing',
        'container',
        'unit',
        'roll',
        'tape',
        'packet']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – countable and uncountable.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '4.1.4R',
      bookRef: 'Unit 4 · 4.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: In \'s there are of and of . There\'s a lot of and no .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Grammar – countable and uncountable'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — In \'s — there are — of — and — of —. There\'s a '
          + 'lot of — and no —. (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – countable and uncountable',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (4.1) teaches: '
          + 'Grammar – countable and uncountable. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – countable and uncountable.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'countable',
        'uncountable',
        'count',
        'thing',
        'container',
        'unit',
        'roll',
        'tape',
        'packet'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – countable and uncountable.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '4.1.5',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the stock card Abu Yasser keeps for one shelf, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>STOCK CARD — Shelf C, packaging</b> Checked: Thursday, 4.15 '
          + 'pm, by A.Y.</p><p>Tape (48 mm): <b>30 rolls</b> · minimum 20 · in '
          + 'stock</p><p>Paper (A4, white): <b>6 packets</b> · minimum 10 · '
          + '<b>LOW — reorder</b></p><p>Boxes, big: <b>40</b> · Boxes, small: '
          + '<b>about 100</b> · in stock</p><p>Gloves: <b>2 cartons</b> (12 pairs '
          + 'in each) · minimum 1 · in stock</p><p>Plastic wrap, wide: '
          + '<b>none</b> · minimum 6 rolls · <b>OUT OF STOCK — '
          + 'urgent</b></p><p>Note: count the small boxes properly on Sunday. '
          + '"About a hundred" is not a number.</p><h4>Writer\'s '
          + 'box</h4><p><b>Shape of a stock card:</b> what shelf and when it was '
          + 'checked, and by whom → one line per item → quantity <b>with its '
          + 'unit</b> → the minimum → the state: <i>in stock · low · out of '
          + 'stock</i> → a note about anything you could not do '
          + 'properly.</p><p>Every quantity needs its <b>unit</b>: <i>30 '
          + 'rolls</i>, not <i>30</i>. A number alone on a stock card is an '
          + 'argument waiting to happen.</p><p>Mark the <b>state</b> in words, '
          + 'not only by the number. The person reading it is in a hurry and will '
          + 'read the last column first.</p><p>⚠ Write <b>none</b>, never an '
          + 'empty space. An empty space means <i>I did not check</i>, and '
          + 'somebody will have to walk to the shelf again.</p>'
      },
      questions: [{
            q: 'Which item is low, and which is out of stock?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with <i>stock</i> in it.'
          },
      {
            q: 'How many pairs of gloves are there in total?',
            minWords: 6,
            rows: 2,
            hint: 'A number, and the thing it counts - two cartons, not two. Look '
              + 'in the text above for the line with <i>gloves</i> in it.'
          },
      {
            q: 'What does Abu Yasser say about "about a hundred"?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>Yasser</i> in it.'
          }],
      ideas: ['Grammar – countable and uncountable'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '4.1.6',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a stock card for a real shelf, cupboard or drawer (25 words or more). '
  + 'Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'countable',
        'uncountable',
        'count',
        'thing',
        'container',
        'unit',
        'roll']
      },
      coach: {
        title: 'What to include',
        task: 'Write a stock card for a real shelf, cupboard or drawer (25 words or more). '
  + 'Use the frame.',
        criteria: [{ t: 'Shape of a stock card: what shelf and when it was checked, and '
              + 'by whom → one line per item → quantity with its unit → the '
              + 'minimum → the state: in stock · low · out of stock → a note '
              + 'about anything you could not do properly.' },
            { t: 'Every quantity needs its unit: 30 rolls, not 30. A number alone '
              + 'on a stock card is an argument waiting to happen.' },
            { t: 'Mark the state in words, not only by the number. The person '
              + 'reading it is in a hurry and will read the last column first.' },
            { t: '⚠ Write none, never an empty space. An empty space means I did '
              + 'not check, and somebody will have to walk to the shelf again.' }]
      },
      aiCheck: {
        task: 'Write a stock card for a real shelf, cupboard or drawer (25 words or '
          + 'more). Use the frame.',
        grammar: 'Grammar – countable and uncountable',
        must: ['Shape of a stock card: what shelf and when it was checked, and by '
          + 'whom → one line per item → quantity with its unit → the minimum → '
          + 'the state: in stock · low · out of stock → a note about anything you '
          + 'could not do properly.',
        'Every quantity needs its unit: 30 rolls, not 30. A number alone on a '
          + 'stock card is an argument waiting to happen.',
        'Mark the state in words, not only by the number. The person reading '
          + 'it is in a hurry and will read the last column first.',
        '⚠ Write none, never an empty space. An empty space means I did not '
          + 'check, and somebody will have to walk to the shelf again.'],
        vocab: ['grammar',
        'countable',
        'uncountable',
        'count',
        'thing',
        'container',
        'unit',
        'roll',
        'tape',
        'packet']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '4.1.6P',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Tick ✓ or cross ✗. Underline one thing to fix.',
      passage: {
        title: 'From the book',
        html: '<h4>How to give good feedback (we use this all year)</h4><p><b>Not '
          + 'helpful:</b> "Good." / "Bad." / "Many '
          + 'mistakes."</p><p><b>Helpful:</b> "Every line has its unit — that\'s '
          + 'right. <i>Tape: 30</i> needs <i>rolls</i>. Can you add the minimum '
          + 'for the boxes?"</p><p>Be kind, be clear, and point to <b>one</b> '
          + 'thing to fix.</p><table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>Every quantity has its '
          + 'unit</td><td>&nbsp;</td></tr><tr><td>No empty spaces — <i>none</i> '
          + 'is written where there is none</td><td>&nbsp;</td></tr><tr><td>The '
          + 'state is in words (<i>in stock · low · out of '
          + 'stock</i>)</td><td>&nbsp;</td></tr><tr><td>The date and the name of '
          + 'the person who checked</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample feedback: "I can see exactly what to buy. Sugar: 4 needs '
              + 'its unit — four what?"',
            minWords: 5,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Tick ✓ or cross ✗. Underline one thing to fix.',
        grammar: 'Grammar – countable and uncountable',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (4.1) '
          + 'teaches: Grammar – countable and uncountable. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        must: ['Shape of a stock card: what shelf and when it was checked, and by '
          + 'whom → one line per item → quantity with its unit → the minimum → '
          + 'the state: in stock · low · out of stock → a note about anything you '
          + 'could not do properly.',
        'Every quantity needs its unit: 30 rolls, not 30. A number alone on a '
          + 'stock card is an argument waiting to happen.',
        'Mark the state in words, not only by the number. The person reading '
          + 'it is in a hurry and will read the last column first.',
        '⚠ Write none, never an empty space. An empty space means I did not '
          + 'check, and somebody will have to walk to the shelf again.'],
        vocab: ['grammar',
        'countable',
        'uncountable',
        'count',
        'thing',
        'container',
        'unit',
        'roll',
        'tape',
        'packet'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '4.1.6R',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read one line before and after the fix. The class says '
  + 'what changed.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Before: Tape: 30. → After: Tape: 30 rolls. (a number without a '
              + 'unit is not a quantity)',
            minWords: 4,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – countable and uncountable.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '4.1.7',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write the stock list you would leave for somebody who takes over your work, '
  + 'your kitchen or your shop for a week (35 words or more). Use at least five '
  + 'different unit words.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'countable',
        'uncountable',
        'count',
        'thing',
        'container',
        'unit',
        'roll']
      },
      coach: {
        title: 'What to include',
        task: 'Write the stock list you would leave for somebody who takes over your work, '
  + 'your kitchen or your shop for a week (35 words or more). Use at least five '
  + 'different unit words.',
        criteria: [{ t: 'Shape of a stock card: what shelf and when it was checked, and '
              + 'by whom → one line per item → quantity with its unit → the '
              + 'minimum → the state: in stock · low · out of stock → a note '
              + 'about anything you could not do properly.' },
            { t: 'Every quantity needs its unit: 30 rolls, not 30. A number alone '
              + 'on a stock card is an argument waiting to happen.' },
            { t: 'Mark the state in words, not only by the number. The person '
              + 'reading it is in a hurry and will read the last column first.' },
            { t: '⚠ Write none, never an empty space. An empty space means I did '
              + 'not check, and somebody will have to walk to the shelf again.' }]
      },
      aiCheck: {
        task: 'Write the stock list you would leave for somebody who takes over '
          + 'your work, your kitchen or your shop for a week (35 words or more). '
          + 'Use at least five different unit words.',
        grammar: 'Grammar – countable and uncountable',
        must: ['Shape of a stock card: what shelf and when it was checked, and by '
          + 'whom → one line per item → quantity with its unit → the minimum → '
          + 'the state: in stock · low · out of stock → a note about anything you '
          + 'could not do properly.',
        'Every quantity needs its unit: 30 rolls, not 30. A number alone on a '
          + 'stock card is an argument waiting to happen.',
        'Mark the state in words, not only by the number. The person reading '
          + 'it is in a hurry and will read the last column first.',
        '⚠ Write none, never an empty space. An empty space means I did not '
          + 'check, and somebody will have to walk to the shelf again.'],
        vocab: ['grammar',
        'countable',
        'uncountable',
        'count',
        'thing',
        'container',
        'unit',
        'roll',
        'tape',
        'packet']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '4.1.7P',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s list as the person taking over. Write on a slip: ★ I '
  + 'could work from this. ✓ Can you add the unit for…? ? one thing I still '
  + 'don\'t know',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ I could work from this — everything has a place and a number. '
              + '✓ Can you add the unit for the flour? ? Where is the money for '
              + 'the bin bags?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s list as the person taking over. Write on a '
          + 'slip: — ★ I could work from this. — ✓ Can you add the unit for…? —? '
          + 'one thing I still don\'t know (The dashes are blanks the learner '
          + 'fills in with their own workplace. Judge what they wrote in them, '
          + 'not the blanks.)',
        grammar: 'Grammar – countable and uncountable',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (4.1) teaches: Grammar – countable and uncountable. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – countable and uncountable.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'countable',
        'uncountable',
        'count',
        'thing',
        'container',
        'unit',
        'roll',
        'tape',
        'packet'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – countable and uncountable.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '4.1.7R',
      bookRef: 'Unit 4 · 4.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Walk and read. Collect every unit word the class used on one page of the '
  + 'board. How many are there?',
      passage: {
        title: 'Homework',
        html: '<p>Write your final list. Then open one cupboard at home and write '
          + 'ten lines of a stock card, each with a quantity, a unit and a state '
          + '(20+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'A class of twenty usually collects between twelve and eighteen '
              + 'unit words: roll, packet, carton, box, sack, crate, bottle, '
              + 'kilo, litre, pair, dozen, piece, sheet, bag, tin, jar, length, '
              + 'metre',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – countable and uncountable.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
