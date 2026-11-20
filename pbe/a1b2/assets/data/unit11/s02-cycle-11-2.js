/* Unit 11 · cycle 11.2 — What would you like?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE2.page('u11-s02', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 11 · 11.2', part: '11.2',
          section: '2', lesson: 'What would you like?', title: 'What would you like?' },
  objective: 'ask what they want',
  study: {
    minutes: 90,
    objective: 'ask what they want',
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
    task: 'Write how you take an order and check you heard it right.',
    weak: 'OK. Twenty bags and some sugar.',
    change: ['Read the whole order back, line by line, and ask <i>is that right?</i>',
        'Ask which kind where there is more than one - long rice and short '
          + 'rice are two different deliveries.'],
    better: 'So that is twenty small white bags, and two kilos of brown sugar - is that right?'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '11.2.1',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say What would you like? four times, fast. Do not take it apart. '
              + 'It is one word.',
            minWords: 6,
            rows: 2,
            hint: 'Say it as one run of sound. Pulling it into four words is what '
              + 'makes it hard to say and hard to hear.'
          },
      {
            q: 'Read the three questions. Which is best at a counter? What do '
              + 'you want? · What would you like? · Yes?',
            minWords: 6,
            rows: 2,
            hint: 'All three get an answer. Only one of them could be said to a '
              + 'stranger who is about to spend money.'
          }],
      ideas: ['Asking, and checking you heard right'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
    },
    {
      id: 'c2',
      ref: '11.2.2',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u11-11-2',
      passage: {
        title: 'Language box',
        html: '<p><b>Asking, and checking you heard right</b></p><table '
          + 'class=\'bk\'><tr><th>Step</th><th>What you say</th></tr><tr><td><b>1 '
          + 'ask</b></td><td><b>What would you like?</b> — ⚠ <b>learn it whole, '
          + 'do not take it apart</b></td></tr><tr><td><b>2 read it '
          + 'back</b></td><td>⚠ <b>Twenty small bags and two kilos of sugar. Is '
          + 'that right?</b></td></tr><tr><td><b>3 if there is a '
          + 'choice</b></td><td><b>Which would you like?</b> — <i>the white or '
          + 'the brown?</i></td></tr><tr><td><b>4 before the '
          + 'money</b></td><td><b>Anything else?</b></td></tr></table><p>⚠ '
          + '<b>READ THE ORDER BACK.</b> <b>Every time, even for two things.</b> '
          + '<b>It is Unit 6.5 — a number nobody read back is a number nobody '
          + 'has</b> — <b>and an order nobody read back is an order you will wrap '
          + 'wrong.</b></p><p>⚠ <b><i>What would you like?</i> is four words that '
          + 'sound like one.</b> <b>At A1 you do not need to know why it is '
          + '<i>would</i>.</b> <b>Say it fast and whole, forty times a '
          + 'day.</b></p><p>⚠ <b>And <i>Anything else?</i> goes BEFORE you touch '
          + 'the till.</b> <b>Asked after, it is a second transaction and the '
          + 'queue grows.</b></p><p><b>Practise:</b> Write the line.</p><p>1 Ask '
          + 'what they want. <span class="blank"></span>? 2 Read back two bags '
          + 'and one kilo. <span class="blank"></span>. <span '
          + 'class="blank"></span>? 3 Before the money. <span '
          + 'class="blank"></span>?</p><p><b>Useful words:</b> What would you '
          + 'like? · Is that right? · Which would you like? · Anything else? · '
          + 'That is all.</p><p><b>Sound — the chunk said as one word.</b> 🔊 '
          + '<b>Track 11.4</b> Listen. <i>Whatwouldyoulike?↗</i> <b>Four words, '
          + 'one sound, going up.</b> <b>Said slowly and separately it sounds '
          + 'like a question in an examination.</b> Say it four times, fast.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does the customer want?',
            options: [{
              t: 'bread',
              ok: false
            },
            {
              t: 'twenty bags and two kilos of sugar',
              ok: true,
              why: 'twenty bags and two kilos of sugar'
            },
            {
              t: 'a receipt',
              ok: false
            }]
          },
        {
            q: 'Listen again. Which sugar does the customer choose?',
            options: [{
              t: 'white',
              ok: true,
              why: 'Majd asks rather than assumes, and repeats the whole order '
                + 'back with the answer in it.'
            },
            {
              t: 'brown',
              ok: false,
              why: 'Brown is the other kind on the price list - the one not chosen.'
            },
            {
              t: 'the customer does not say',
              ok: false,
              why: 'He answers in one word, which is all the question needed.'
            }],
            evidence: 'the exchange after Majd asks which kind'
          },
        {
            q: 'What does Majd do twice in this short scene?',
            options: [{
              t: 'reads the whole order back and asks if it is right',
              ok: true,
              why: 'Once when he takes it and once after the kind is settled - the '
                + 'same read-back habit as the numbers in Book 1.'
            },
            {
              t: 'weighs the sugar',
              ok: false,
              why: 'He weighs it once, and says so as a reason for a moment\'s wait.'
            },
            {
              t: 'says the price',
              ok: false,
              why: 'No price is said in this cycle at all; that is 11.3.'
            }],
            evidence: 'his second line and his second-to-last'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '11.2.2',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How does Majd check he heard right?',
            model: 'He reads the whole order back and asks is that right?',
            minWords: 3,
            rows: 2,
            keys: ['whole',
              'order',
              'back',
              'asks'],
            need: 1,
            hint: 'He does two things: repeats something in full, and then asks a '
              + 'short question.'
          },
      {
            q: 'What does he do about the second thing?',
            model: 'He weighs it, and he asks which kind',
            minWords: 2,
            rows: 2,
            keys: ['weighs',
              'asks',
              'kind'],
            need: 1,
            hint: 'One action with a machine, and one question about a kind. Both.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '11.2.3',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One orders two things. One reads the order back. Then change places.',
      scene: 'u11-11-2-pair',
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
        rows: [['morning · Twenty · small bags · two kilos · sugar · bags · sugar · '
            + 'weigh · white · brown',
          'afternoon · Six · large bags · three kilos · rice · bags · rice · '
            + 'weigh · long · short']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '11.2.3R',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs perform for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ What would you like?</td><td>☐ Is that '
          + 'right?</td><td>☐ Which would you like?</td><td>☐ Anything '
          + 'else?</td><td>☐ That is all.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['Asking, and checking you heard right'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Asking, and checking you heard right.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '11.2.4',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Four real orders from your work. Write it and read each one back to your partner.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The order</th><th>My '
          + 'read-back</th><th>Was I '
          + 'right?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'The order: 20 small bags, 2kg white sugar My read-back: twenty '
              + 'small bags, two kilos of white Right: ✓ · The order: 6 large '
              + 'bags, 3kg long rice My read-back: six large bags, three kilos of '
              + 'rice Right: · The order: 40 trays of bread My read-back: forty '
              + 'trays Right: ✓ · The order: 2 kilos cheese, 1 bag flour, 4 trays '
              + 'My read-back: two cheese, one flour, four trays Right: ✓',
            minWords: 6,
            rows: 3,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Four real orders from your work. Write it and read each one back to '
          + 'your partner.',
        grammar: 'Asking, and checking you heard right',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (11.2) teaches: Asking, and checking you heard right. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Asking, and checking you heard right.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['asking',
        'checking',
        'heard',
        'right',
        'order',
        'back',
        'time',
        'even',
        'things',
        'unit']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Asking, and checking you heard right.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '11.2.4R',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: He wanted . I read back . It was right / wrong.',
      questions: [{
            q: 'Write what you told the class.',
            model: 'He wanted six large bags and three kilos of long rice. I read '
              + 'back six large bags and three kilos of rice. It was wrong — I '
              + 'left out long',
            minWords: 6,
            rows: 3,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — He wanted —. I read back —. It was right / wrong. '
          + '(The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Asking, and checking you heard right',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (11.2) teaches: '
          + 'Asking, and checking you heard right. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Asking, and checking you heard right.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['asking',
        'checking',
        'heard',
        'right',
        'order',
        'back',
        'time',
        'even',
        'things',
        'unit'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Asking, and checking you heard right.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '11.2.5',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the order book. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>ORDERS TAKEN AT THE COUNTER — TUESDAY</b></p><table '
          + 'class=\'bk\'><tr><th>Time</th><th>The order</th><th>Read '
          + 'back?</th><th>Right?</th></tr><tr><td>8.10</td><td>20 small bags, '
          + '2kg white sugar</td><td>✓</td><td>✓</td></tr><tr><td>8.40</td><td>6 '
          + 'large bags, 3kg long rice</td><td>✓</td><td>⚠ <b>no — he said short '
          + 'rice. Caught.</b></td></tr><tr><td>9.15</td><td>40 trays '
          + 'bread</td><td>✗</td><td>⚠ <b>no — 14 trays. Not '
          + 'caught.</b></td></tr><tr><td>10.00</td><td>2 kilos cheese, 1 bag '
          + 'flour</td><td>✓</td><td>✓</td></tr></table><p>⚠ <b>Four orders. '
          + 'Three read back, and the one mistake was caught. One not read back, '
          + 'and we sent forty trays for fourteen. M.B.</b></p><h4>Writer\'s '
          + 'box</h4><p><b>An order book has four columns:</b> the time → the '
          + 'order → <b>read back?</b> → <b>right?</b></p><p>⚠ <b>The two tick '
          + 'columns are the whole page.</b> <b>Three read back, one mistake, '
          + 'caught. One not read back, one mistake, not caught.</b> <b>That is '
          + 'the argument for the read-back in one table and it needed four '
          + 'rows.</b></p><p>⚠ <b>And 14 against 40 is Unit 1.6 — the pair that '
          + 'sounds the same on a counter and across a yard.</b> <b>Nine units '
          + 'old, and it is still the most expensive pair of numbers in this '
          + 'book.</b></p>'
      },
      questions: [{
            q: 'How many orders were read back?',
            model: 'Three',
            minWords: 1,
            rows: 2,
            hint: 'Count the ticks in the read-back column of the log.'
          },
      {
            q: 'Which mistake was caught, and which was not?',
            model: 'The 8.40 long-rice mistake was caught; the 9.15 bread order was not',
            minWords: 3,
            rows: 2,
            keys: ['long-rice',
              'bread',
              'order',
              'mistake'],
            need: 1,
            hint: 'Two rows, by time. Say what each one was about as well as the time.'
          },
      {
            q: 'What is the difference between 14 and 40?',
            model: 'Twenty-six trays, and a delivery nobody can take back',
            minWords: 3,
            rows: 2,
            keys: ['twenty-six',
              'trays',
              'delivery',
              'nobody'],
            need: 1,
            hint: 'Do the subtraction, then say what that number of trays means for the shop.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '11.2.6',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write an order book for one morning at your work (<b>15 words or more</b>). '
  + 'Include one that was not read back.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Time</th><th>The order</th><th>Read '
          + 'back?</th><th>Right?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      model: ['ORDERS TAKEN — WEDNESDAY MORNING'],
      meter: {
        label: 'words from this lesson',
        words: ['asking',
        'checking',
        'heard',
        'right',
        'order',
        'back',
        'time',
        'even']
      },
      coach: {
        title: 'What to include',
        task: 'Write an order book for one morning at your work (15 words or more). Include '
  + 'one that was not read back.',
        criteria: [{ t: 'An order book has four columns: the time → the order → read back? → right?' },
            { t: '⚠ The two tick columns are the whole page. Three read back, one '
              + 'mistake, caught. One not read back, one mistake, not caught. '
              + 'That is the argument for the read-back in one table and it '
              + 'needed four rows.' },
            { t: '⚠ And 14 against 40 is Unit 1.6 — the pair that sounds the same '
              + 'on a counter and across a yard. Nine units old, and it is still '
              + 'the most expensive pair of numbers in this book.' }]
      },
      aiCheck: {
        task: 'Write an order book for one morning at your work (15 words or more). '
          + 'Include one that was not read back.',
        grammar: 'Asking, and checking you heard right',
        must: ['An order book has four columns: the time → the order → read back? → right?',
        '⚠ The two tick columns are the whole page. Three read back, one '
          + 'mistake, caught. One not read back, one mistake, not caught. That is '
          + 'the argument for the read-back in one table and it needed four rows.',
        '⚠ And 14 against 40 is Unit 1.6 — the pair that sounds the same on a '
          + 'counter and across a yard. Nine units old, and it is still the most '
          + 'expensive pair of numbers in this book.'],
        vocab: ['asking',
        'checking',
        'heard',
        'right',
        'order',
        'back',
        'time',
        'even',
        'things',
        'unit']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '11.2.6P',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>A '
          + 'read-back column, ticked or '
          + 'crossed</td><td>&nbsp;</td></tr><tr><td>A <i>right?</i> '
          + 'column</td><td>&nbsp;</td></tr><tr><td>At least one not read '
          + 'back</td><td>&nbsp;</td></tr><tr><td>A line at the bottom comparing '
          + 'the two</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) at four ticks · (pointing) Here. (reading) "not caught"',
            minWords: 3,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Asking, and checking you heard right',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (11.2) '
          + 'teaches: Asking, and checking you heard right. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        must: ['An order book has four columns: the time → the order → read back? → right?',
        '⚠ The two tick columns are the whole page. Three read back, one '
          + 'mistake, caught. One not read back, one mistake, not caught. That is '
          + 'the argument for the read-back in one table and it needed four rows.',
        '⚠ And 14 against 40 is Unit 1.6 — the pair that sounds the same on a '
          + 'counter and across a yard. Nine units old, and it is still the most '
          + 'expensive pair of numbers in this book.'],
        vocab: ['asking',
        'checking',
        'heard',
        'right',
        'order',
        'back',
        'time',
        'even',
        'things',
        'unit'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '11.2.6R',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their not-read-back line. The class says what it cost.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Asking, and checking you heard right'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Asking, and checking you heard right.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '11.2.7',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about an order that went wrong at your work (<b>20 to 35 words</b>). '
  + 'What did they ask for? What did they get? Who found out?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['A hotel asked for fifty trays and I heard fifteen. They rang at eleven '
        + 'asking where the rest were. The bread was gone by then and they bought '
        + 'from the other bakery that week'],
      stems: ['A hotel asked…',
      'They rang at eleven…',
      'The bread was…'],
      meter: {
        label: 'words from this lesson',
        words: ['asking',
        'checking',
        'heard',
        'right',
        'order',
        'back',
        'time',
        'even']
      },
      coach: {
        title: 'What to include',
        task: 'Write about an order that went wrong at your work (20 to 35 words). What did '
  + 'they ask for? What did they get? Who found out?',
        criteria: [{ t: 'An order book has four columns: the time → the order → read back? → right?' },
            { t: '⚠ The two tick columns are the whole page. Three read back, one '
              + 'mistake, caught. One not read back, one mistake, not caught. '
              + 'That is the argument for the read-back in one table and it '
              + 'needed four rows.' },
            { t: '⚠ And 14 against 40 is Unit 1.6 — the pair that sounds the same '
              + 'on a counter and across a yard. Nine units old, and it is still '
              + 'the most expensive pair of numbers in this book.' }]
      },
      aiCheck: {
        task: 'Write about an order that went wrong at your work (20 to 35 words). '
          + 'What did they ask for? What did they get? Who found out?',
        grammar: 'Asking, and checking you heard right',
        must: ['An order book has four columns: the time → the order → read back? → right?',
        '⚠ The two tick columns are the whole page. Three read back, one '
          + 'mistake, caught. One not read back, one mistake, not caught. That is '
          + 'the argument for the read-back in one table and it needed four rows.',
        '⚠ And 14 against 40 is Unit 1.6 — the pair that sounds the same on a '
          + 'counter and across a yard. Nine units old, and it is still the most '
          + 'expensive pair of numbers in this book.'],
        vocab: ['asking',
        'checking',
        'heard',
        'right',
        'order',
        'back',
        'time',
        'even',
        'things',
        'unit']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '11.2.7P',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did you read it back? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Did you read it back? — No. It was busy and I thought I had it',
            minWords: 5,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did you read it back? '
          + 'Write the answer.',
        grammar: 'Asking, and checking you heard right',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (11.2) teaches: Asking, and checking you heard right. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Asking, and checking you heard right.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['asking',
        'checking',
        'heard',
        'right',
        'order',
        'back',
        'time',
        'even',
        'things',
        'unit'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Asking, and checking you heard right.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '11.2.7R',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many was the order read back? Count them. Then '
  + 'count how many of those went wrong.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> six orders from '
          + 'tomorrow with a read-back tick on each (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Asking, and checking you heard right'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Asking, and checking you heard right.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
