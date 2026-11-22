/* Unit 11 · cycle 11.3 — Eight hundred SYP each.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE2.page('u11-s03', {
  book: { source: 'Proactive Business English · A1 Book 2', ref: 'Unit 11 · 11.3', part: '11.3',
          section: '3', lesson: 'Eight hundred SYP each', title: 'Eight hundred SYP each' },
  objective: 'read a price aloud',
  study: {
    minutes: 90,
    objective: 'read a price aloud',
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
    task: 'Write a price so it cannot be read two ways.',
    weak: 'Eight hundred.',
    change: ['Add the money: eight hundred SYP. A number on its own is not a price.',
        'Say whether it is for one or for all of them - <i>each</i> is the '
          + 'word that settles it.'],
    better: 'Eight hundred SYP each. Twenty of them is sixteen thousand SYP.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '11.3.1',
      bookRef: 'Unit 11 · 11.3 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say four prices from your work out loud. With the currency, and '
              + 'with each if it is each.',
            minWords: 6,
            rows: 2,
            hint: 'A number on its own is not a price. Three parts: the number, the '
              + 'money, and whether it is for one.'
          },
      {
            q: 'Read the two lines. Which is a price? Eight hundred · Eight '
              + 'hundred SYP each',
            model: 'The second is a price',
            minWords: 2,
            rows: 2,
            hint: 'Ask which one you could pay without asking a question first.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '11.3.2',
      bookRef: 'Unit 11 · 11.3 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u11-11-3',
      passage: {
        title: 'Language box',
        html: '<p><b>Saying a price</b></p><table class=\'bk\'><tr><th>Not a '
          + 'price</th><th>A price</th></tr><tr><td><b>eight '
          + 'hundred</b></td><td><b>eight hundred SYP '
          + 'each</b></td></tr><tr><td><b>two thousand</b></td><td><b>two '
          + 'thousand SYP each</b></td></tr><tr><td><b>sixteen '
          + 'thousand</b></td><td><b>sixteen thousand SYP '
          + 'altogether</b></td></tr><tr><td><b>the same</b></td><td>⚠ <b>four '
          + 'thousand SYP a kilo</b></td></tr></table><p>⚠ <b>A price needs THREE '
          + 'parts: the number, the currency, and <i>each</i> or '
          + '<i>altogether</i> or <i>a kilo</i>.</b> <b>Unit 5.3 said a number is '
          + 'not a quantity until it has a unit.</b> <b>A number is not a price '
          + 'until it says what it is the price OF.</b></p><p>⚠ <b><i>each</i> is '
          + 'the one that costs money.</b> <b>A man who hears <i>eight '
          + 'hundred</i> and takes twenty bags has not cheated you — he has heard '
          + 'a price with a part missing.</b></p><p>⚠ <b>Say the big numbers in '
          + 'groups:</b> <i>sixteen thousand</i> · <i>one hundred and twenty '
          + 'thousand</i>. <b>And if the customer asks, say it again, slowly, the '
          + 'same way.</b></p><p><b>Practise:</b> Make it a price.</p><p>1 Eight '
          + 'hundred. → <span class="blank"></span>. 2 Sixteen thousand. → <span '
          + 'class="blank"></span>. 3 Four thousand. → <span '
          + 'class="blank"></span> (a kilo).</p><p><b>Useful words:</b> eight '
          + 'hundred SYP each · altogether · a kilo · Say it again. · I always '
          + 'say <i>each</i>.</p><p><b>Sound — the price, in groups.</b> 🔊 '
          + '<b>Track 11.6</b> Listen. <i>eight HUNDRED … SYP … EACH.</i> '
          + '<b>Three parts, with a small gap between.</b> ⚠ <b>The gap before '
          + '<i>each</i> is the most valuable silence in this unit.</b> Say it '
          + 'four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How much is one small bag?',
            options: [{
              t: '800',
              ok: true,
              why: 'Eight hundred SYP each - and he says each again when the customer asks.'
            },
            {
              t: '8,000',
              ok: false,
              why: 'Eight thousand is not said in this scene. The numbers here are '
                + 'eight hundred and sixteen thousand.'
            },
            {
              t: '80,000',
              ok: false,
              why: 'Too big: twenty of them together is sixteen thousand.'
            }],
            evidence: 'Majd\'s answer, and the word he says twice'
          },
        {
            q: 'Listen again. How much are the big bags?',
            options: [{
              t: 'two thousand SYP each',
              ok: true,
              why: 'And he adds EACH, which is the habit the whole cycle is built on.'
            },
            {
              t: 'eight hundred SYP each',
              ok: false,
              why: 'Eight hundred is the SMALL bag. Listen for the price that '
                + 'comes after the question about the big ones.'
            },
            {
              t: 'sixteen thousand',
              ok: false,
              why: 'Sixteen thousand is twenty small bags added up, not a price '
                + 'for one of anything.'
            }],
            evidence: 'Majd\'s line after the customer asks about them'
          },
        {
            q: 'What happened the time somebody heard “eight hundred” without “each”?',
            options: [{
              t: 'he paid eight hundred and took twenty bags',
              ok: true,
              why: 'And Majd only found out on Thursday - which is why he has said '
                + 'EACH ever since.'
            },
            {
              t: 'he complained to the office',
              ok: false,
              why: 'The office complaint is in 11.5, and it is about a receipt.'
            },
            {
              t: 'he refused to pay',
              ok: false,
              why: 'He paid. The trouble is that he paid the wrong amount and '
                + 'nobody noticed.'
            }],
            evidence: 'the last two lines'
          }],
        say: true
      }
    },
    {
      id: 'c15',
      ref: '11.3.2',
      bookRef: 'Unit 11 · 11.3 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Make it a price.',
      text: '<b>1</b> Eight hundred. → [[1]]. &nbsp; <b>2</b> Sixteen thousand. → '
      + '[[2]]. &nbsp; <b>3</b> Four thousand. → [[3]] (a kilo).',
      plain: true,
      small: true,
      answers: {
        
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '11.3.2',
      bookRef: 'Unit 11 · 11.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does Majd always add to a price?',
            model: 'each',
            minWords: 1,
            rows: 2,
            hint: 'One short word. It says the price is for one of them.'
          },
      {
            q: 'What does the customer ask about?',
            model: 'Whether it is each or for the twenty',
            minWords: 2,
            rows: 2,
            keys: ['whether',
              'twenty'],
            need: 1,
            hint: 'The ambiguity Majd\'s word removes - for one, or for all of them.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '11.3.3',
      bookRef: 'Unit 11 · 11.3 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One asks a price. One answers with all three parts. Then change places.',
      scene: 'u11-11-3-pair',
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
        rows: [['small bags · Eight hundred · twenty · Twenty · sixteen thousand',
          'large bags · Two thousand · six · Six · twelve thousand']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '11.3.3R',
      bookRef: 'Unit 11 · 11.3 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs perform for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ eight hundred SYP each</td><td>☐ '
          + 'altogether</td><td>☐ a kilo</td><td>☐ Say it again.</td><td>☐ I '
          + 'always say each.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['Saying a price'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Saying a price.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '11.3.4',
      bookRef: 'Unit 11 · 11.3 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Six prices from your work. Write it with all three parts.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The thing</th><th>The '
          + 'number</th><th>Each / a kilo / '
          + 'altogether</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'The thing: small bag Number: 800 Each / kilo / altogether: each '
              + '· The thing: white sugar Number: 4,000 Each / kilo / altogether: '
              + 'a kilo · The thing: bread Number: 1,200 Each / kilo / '
              + 'altogether: · The thing: box of 50 bags Number: 38,000 Each / '
              + 'kilo / altogether: · The thing: cheese Number: 12,000 Each / '
              + 'kilo / altogether: a kilo · The thing: delivery Number: 5,000 '
              + 'Each / kilo / altogether:',
            minWords: 6,
            rows: 3,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Six prices from your work. Write it with all three parts.',
        grammar: 'Saying a price',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (11.3) teaches: Saying a price. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Saying a price.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['saying',
        'price',
        'needs',
        'parts',
        'number',
        'currency',
        'altogether',
        'kilo',
        'unit',
        'quantity']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Saying a price.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '11.3.4R',
      bookRef: 'Unit 11 · 11.3 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: The is SYP .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'Bread is one thousand two hundred SYP a tray of ten',
            minWords: 3,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — The — is — SYP . (The dashes are blanks the '
          + 'learner fills in with their own workplace. Judge what they wrote in '
          + 'them, not the blanks.)',
        grammar: 'Saying a price',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (11.3) teaches: '
          + 'Saying a price. Judge the language against THAT and against nothing '
          + 'the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Saying a price.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['saying',
        'price',
        'needs',
        'parts',
        'number',
        'currency',
        'altogether',
        'kilo',
        'unit',
        'quantity'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Saying a price.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '11.3.5',
      bookRef: 'Unit 11 · 11.3 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the price list. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>PRICE LIST — FROM 1 APRIL</b></p><table '
          + 'class=\'bk\'><tr><th>The thing</th><th>Price</th><th>Each / kilo / '
          + 'box</th></tr><tr><td>small '
          + 'bag</td><td>800</td><td><b>each</b></td></tr><tr><td>large '
          + 'bag</td><td>2,000</td><td><b>each</b></td></tr><tr><td>small bags, '
          + 'box of 50</td><td>38,000</td><td>⚠ <b>a box — cheaper than 50 '
          + 'each</b></td></tr><tr><td>white sugar</td><td>4,000</td><td><b>a '
          + 'kilo</b></td></tr><tr><td>brown sugar</td><td>4,500</td><td><b>a '
          + 'kilo</b></td></tr><tr><td>bread</td><td>1,200</td><td><b>a tray of '
          + '10</b></td></tr></table><p>⚠ <b>Every line says each, a kilo or a '
          + 'box. A line with just a number on it is not a price. '
          + 'M.B.</b></p><h4>Writer\'s box</h4><p><b>A price list has three '
          + 'columns:</b> the thing → the number → ⚠ <b>each, a kilo, a box or a '
          + 'tray</b>.</p><p>⚠ <b>THE THIRD COLUMN IS NOT OPTIONAL.</b> <b>A list '
          + 'with two columns is a list of numbers, and the customer and the '
          + 'counter will read them differently.</b> <b>Nine units ago Unit 2 '
          + 'said count twice; this is the same idea applied to '
          + 'money.</b></p><p>⚠ <b>Put the DATE at the top.</b> <i>From 1 '
          + 'April.</i> <b>A price list with no date on it is a list somebody '
          + 'will argue with you about</b> — <b>and they will be right, because '
          + 'they saw an older one.</b></p>'
      },
      questions: [{
            q: 'How much is a kilo of brown sugar?',
            model: '4,500 SYP',
            minWords: 1,
            rows: 2,
            keys: ['500',
              'syp'],
            need: 1,
            hint: 'The price list above, the brown sugar row, and give the currency.'
          },
      {
            q: 'Is a box of 50 small bags cheaper or dearer than 50 single bags?',
            model: 'Cheaper — 38,000 against 40,000 for fifty singles',
            minWords: 2,
            rows: 2,
            keys: ['000',
              'against',
              'fifty',
              'singles'],
            need: 1,
            hint: 'Work out fifty singles from the each price, then compare it with '
              + 'the box price. Say both numbers.'
          },
      {
            q: 'What does the line at the bottom say?',
            model: 'That a line with just a number on it is not a price',
            minWords: 4,
            rows: 2,
            keys: ['number',
              'price',
              'line'],
            need: 1,
            hint: 'It is a rule about what a number by itself is not.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '11.3.6',
      bookRef: 'Unit 11 · 11.3 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a price list for your own work (<b>15 words or more</b>). Six lines, '
  + 'three columns, and a date.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The thing</th><th>Price</th><th>Each / '
          + 'kilo / '
          + 'box</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      model: ['PRICE LIST — FROM 15 APRIL'],
      meter: {
        label: 'words from this lesson',
        words: ['saying',
        'price',
        'needs',
        'parts',
        'number',
        'currency',
        'altogether',
        'kilo']
      },
      coach: {
        title: 'What to include',
        task: 'Write a price list for your own work (15 words or more). Six lines, three '
  + 'columns, and a date.',
        criteria: [{ t: 'A price list has three columns: the thing → the number → ⚠ each, '
              + 'a kilo, a box or a tray.' },
            { t: '⚠ THE THIRD COLUMN IS NOT OPTIONAL. A list with two columns is a '
              + 'list of numbers, and the customer and the counter will read them '
              + 'differently. Nine units ago Unit 2 said count twice; this is the '
              + 'same idea applied to money.' },
            { t: '⚠ Put the DATE at the top. From 1 April. A price list with no '
              + 'date on it is a list somebody will argue with you about — and '
              + 'they will be right, because they saw an older one.' }]
      },
      aiCheck: {
        task: 'Write a price list for your own work (15 words or more). Six lines, '
          + 'three columns, and a date.',
        grammar: 'Saying a price',
        must: ['A price list has three columns: the thing → the number → ⚠ each, a '
          + 'kilo, a box or a tray.',
        '⚠ THE THIRD COLUMN IS NOT OPTIONAL. A list with two columns is a '
          + 'list of numbers, and the customer and the counter will read them '
          + 'differently. Nine units ago Unit 2 said count twice; this is the '
          + 'same idea applied to money.',
        '⚠ Put the DATE at the top. From 1 April. A price list with no date '
          + 'on it is a list somebody will argue with you about — and they will '
          + 'be right, because they saw an older one.'],
        vocab: ['saying',
        'price',
        'needs',
        'parts',
        'number',
        'currency',
        'altogether',
        'kilo',
        'unit',
        'quantity']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '11.3.6P',
      bookRef: 'Unit 11 · 11.3 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td><i>each</i> or <i>a kilo</i> on EVERY '
          + 'line</td><td>&nbsp;</td></tr><tr><td>A date at the '
          + 'top</td><td>&nbsp;</td></tr><tr><td>A line where the box is cheaper '
          + 'than the singles</td><td>&nbsp;</td></tr><tr><td>A rule at the '
          + 'bottom</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "bread 1,200" · (pointing) at the top',
            minWords: 2,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Saying a price',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (11.3) '
          + 'teaches: Saying a price. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        must: ['A price list has three columns: the thing → the number → ⚠ each, a '
          + 'kilo, a box or a tray.',
        '⚠ THE THIRD COLUMN IS NOT OPTIONAL. A list with two columns is a '
          + 'list of numbers, and the customer and the counter will read them '
          + 'differently. Nine units ago Unit 2 said count twice; this is the '
          + 'same idea applied to money.',
        '⚠ Put the DATE at the top. From 1 April. A price list with no date '
          + 'on it is a list somebody will argue with you about — and they will '
          + 'be right, because they saw an older one.'],
        vocab: ['saying',
        'price',
        'needs',
        'parts',
        'number',
        'currency',
        'altogether',
        'kilo',
        'unit',
        'quantity'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '11.3.6R',
      bookRef: 'Unit 11 · 11.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read one line aloud with all three parts. The class says if '
  + 'they could pay from it.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Saying a price'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Saying a price.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '11.3.7',
      bookRef: 'Unit 11 · 11.3 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about prices at your work (<b>20 to 35 words</b>). Who sets them? How '
  + 'often do they change? Who argues about them?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['The manager sets the prices and changes them on the first. She writes '
        + 'the new list and puts it in the office. The one on the wall is from '
        + 'January and nobody has changed it'],
      stems: ['The manager sets…',
      'She writes the new…',
      'The one on the…'],
      meter: {
        label: 'words from this lesson',
        words: ['saying',
        'price',
        'needs',
        'parts',
        'number',
        'currency',
        'altogether',
        'kilo']
      },
      coach: {
        title: 'What to include',
        task: 'Write about prices at your work (20 to 35 words). Who sets them? How often '
  + 'do they change? Who argues about them?',
        criteria: [{ t: 'A price list has three columns: the thing → the number → ⚠ each, '
              + 'a kilo, a box or a tray.' },
            { t: '⚠ THE THIRD COLUMN IS NOT OPTIONAL. A list with two columns is a '
              + 'list of numbers, and the customer and the counter will read them '
              + 'differently. Nine units ago Unit 2 said count twice; this is the '
              + 'same idea applied to money.' },
            { t: '⚠ Put the DATE at the top. From 1 April. A price list with no '
              + 'date on it is a list somebody will argue with you about — and '
              + 'they will be right, because they saw an older one.' }]
      },
      aiCheck: {
        task: 'Write about prices at your work (20 to 35 words). Who sets them? How '
          + 'often do they change? Who argues about them?',
        grammar: 'Saying a price',
        must: ['A price list has three columns: the thing → the number → ⚠ each, a '
          + 'kilo, a box or a tray.',
        '⚠ THE THIRD COLUMN IS NOT OPTIONAL. A list with two columns is a '
          + 'list of numbers, and the customer and the counter will read them '
          + 'differently. Nine units ago Unit 2 said count twice; this is the '
          + 'same idea applied to money.',
        '⚠ Put the DATE at the top. From 1 April. A price list with no date '
          + 'on it is a list somebody will argue with you about — and they will '
          + 'be right, because they saw an older one.'],
        vocab: ['saying',
        'price',
        'needs',
        'parts',
        'number',
        'currency',
        'altogether',
        'kilo',
        'unit',
        'quantity']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '11.3.7P',
      bookRef: 'Unit 11 · 11.3 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Is the list on the wall the '
  + 'real one? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Is the list on the wall the real one? — No. It is three months old',
            minWords: 5,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Is the list on the wall '
          + 'the real one? Write the answer.',
        grammar: 'Saying a price',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (11.3) teaches: Saying a price. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Saying a price.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['saying',
        'price',
        'needs',
        'parts',
        'number',
        'currency',
        'altogether',
        'kilo',
        'unit',
        'quantity'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Saying a price.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '11.3.7R',
      bookRef: 'Unit 11 · 11.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many is the price list on the wall out of date? '
  + 'Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> a price list for your '
          + 'work with a date and a third column on every line (20 words or '
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
      ideas: ['Saying a price'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Saying a price.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
