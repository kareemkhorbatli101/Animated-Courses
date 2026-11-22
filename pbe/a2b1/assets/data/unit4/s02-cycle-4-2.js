/* Unit 4 · cycle 4.2 — How much have we got left?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u4-s02', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 4 · 4.2', part: '4.2',
          section: '2', lesson: 'How much have we got left?', title: 'How much have we got left?' },
  objective: 'ask how much and how many, and answer with a quantity',
  study: {
    minutes: 90,
    objective: 'ask how much and how many, and answer with a quantity',
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
    task: 'Write the answer when the manager asks how much wrap is left.',
    weak: 'Not much.',
    change: ['Give the figure. <i>Not much</i> is a feeling, not a quantity.',
        'Say what the figure covers - a week, one order - or the number means nothing.'],
    better: 'Four rolls. That\'s enough for about a week, and it isn\'t many for the '
      + 'Aleppo load.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '4.2.1',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Ask your partner four questions about this room, two with how '
              + 'much and two with how many.',
            model: 'Open. Sample: How many chairs are there? How many windows? How '
              + 'much light is there? How much room have we got?',
            minWords: 6,
            rows: 3,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Put the quantity words from small to big: a lot of · none · a '
              + 'little / a few · not much / not many · plenty of',
            model: 'none → not much / not many → a little / a few → a lot of → plenty of',
            minWords: 4,
            rows: 2,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '4.2.2',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u4-4-2',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – much / many / a lot of</b></p><table '
          + 'class=\'bk\'><tr><th></th><th>Countable (boxes)</th><th>Uncountable '
          + '(tape)</th></tr><tr><td><b>?</b></td><td><b>How many</b> '
          + 'boxes?</td><td><b>How much</b> '
          + 'tape?</td></tr><tr><td><b>–</b></td><td>not <b>many</b> '
          + 'boxes</td><td>not <b>much</b> '
          + 'tape</td></tr><tr><td><b>+</b></td><td><b>a lot of</b> / <b>plenty '
          + 'of</b> boxes</td><td><b>a lot of</b> / <b>plenty of</b> '
          + 'tape</td></tr><tr><td>small</td><td>a <b>few</b> boxes</td><td>a '
          + '<b>little</b> tape</td></tr></table><p>⚠ In a <b>+</b> sentence we '
          + 'say <b>a lot of</b>, not <i>much</i> or <i>many</i>: <i>We\'ve got '
          + '<b>a lot of</b> boxes.</i> (<s>We\'ve got many boxes</s> is unusual '
          + 'in speech.)</p><p>⚠ <i>a few</i> = a small number, but '
          + '<b>enough</b>. <i>few</i> (no <i>a</i>) = almost none, and it is a '
          + 'complaint. Same with <i>a little</i> and '
          + '<i>little</i>.</p><p><b>Practise:</b> Complete with <i>much, many, a '
          + 'lot of, a few</i> or <i>a little</i>.</p><p>1 How <span '
          + 'class="blank"></span> tape have we got? 2 There aren\'t <span '
          + 'class="blank"></span> gloves. 3 We\'ve got <span '
          + 'class="blank"></span> boxes — forty big ones. 4 There\'s only <span '
          + 'class="blank"></span> paper left — six packets. 5 How <span '
          + 'class="blank"></span> orders came today?</p><p><b>Useful '
          + 'phrases:</b> How much / many…? · Plenty of… · That\'s enough for… · '
          + 'That isn\'t many for… · It\'s on the reorder '
          + 'list.</p><p><b>Pronunciation – linking.</b> 🔊 <b>Track 4.4</b> '
          + 'Listen and repeat: <i>a lot of boxes</i> /ə ˈlɒtəv ˈbɒksɪz/ · '
          + '<i>plenty of tape</i> /ˈplentiəv teɪp/ · <i>not much paper</i> /nɒt '
          + 'mʌtʃ ˈpeɪpə/</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Who is asking the questions?',
            options: [{
              t: 'Mr Ayoub',
              ok: true,
              why: 'He opens by saying the Homs order is big, and asks for each '
                + 'quantity in turn.'
            },
            {
              t: 'Nadia',
              ok: false,
              why: 'Nadia is quoted inside the scene - she says there is not much '
                + 'paper - which is why her name is in the ear. She is reported, '
                + 'not present.'
            },
            {
              t: 'a customer',
              ok: false,
              why: 'Nothing is being bought here; the questions are all about what '
                + 'the company itself holds.'
            }],
            evidence: 'who asks the first question, and who is told what is on the reorder list'
          },
        {
            q: 'Books closed. Listen. How many pairs of gloves are there?',
            options: [{
              t: 'twenty-four',
              ok: true,
              why: 'Two cartons, twelve pairs in each - she gives the total and '
                + 'then the cartons.'
            },
            {
              t: 'two',
              ok: false,
              why: 'Two is the CARTONS. The question asks for pairs, which is the '
                + 'unit this cycle is about.'
            },
            {
              t: 'twelve',
              ok: false,
              why: 'Twelve is how many pairs are in ONE carton.'
            }],
            evidence: 'Nour\'s answer, and the carton count behind it'
          },
        {
            q: 'Why is six packets of paper a problem?',
            options: [{
              t: 'because the minimum is ten, so it is already on the reorder list',
              ok: true,
              why: 'Six is not nothing - it is below the level at which they '
                + 'reorder, which is a different kind of short.'
            },
            {
              t: 'because they have none at all',
              ok: false,
              why: 'None at all was the WRAP, in unit 3. Paper there is - just not enough.'
            },
            {
              t: 'because Nadia used it all',
              ok: false,
              why: 'Nadia is the one who noticed, not the one who used it.'
            }],
            evidence: 'Nour\'s last line'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '4.2.2',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Complete with much, many, a lot of, a few or a little.',
      text: '<b>1</b> How [[1]] tape have we got? &nbsp; <b>2</b> There aren\'t [[2]] '
      + 'gloves. &nbsp; <b>3</b> We\'ve got [[3]] boxes — forty big ones. &nbsp; '
      + '<b>4</b> There\'s only [[4]] paper left — six packets. &nbsp; <b>5</b> '
      + 'How [[5]] orders came today?',
      plain: true,
      small: true,
      answers: {
        '1': ['much'],
        '2': ['many'],
        '3': ['a lot of'],
        '4': ['a little'],
        '5': ['many']
      }
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '4.2.2',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How much tape is there?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>tape</i> in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What is there plenty of?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with <i>plenty</i> in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '4.2.3',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A asks before a big job; B answers with a quantity and says '
  + 'whether it is enough. Use the skeleton, then the role cards.',
      scene: 'u4-4-2-pair',
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
        head: ['Role card 1 — a wedding of 200 people',
        'Role card 2 — a school of 300 children'],
        rows: [['chairs: plenty (260) · plates: 180, not enough · water: a lot (40 '
            + 'boxes) · ice: a little · cooks: a few (3)',
          'books: a lot (1,200) · desks: not many (120) · paper: plenty · '
            + 'pens: few (20) · teachers: enough (18)']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '4.2.3R',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ How many…?</td><td>☐ How '
          + 'much…?</td><td>☐ Plenty of…</td><td>☐ That\'s enough for…</td><td>☐ '
          + 'That isn\'t many for…</td><td>☐ a few / a little</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the one thing there is not enough of (role card '
              + '1: plates — and the ice; role card 2: desks and pens). Typical '
              + 'errors: how much chairs; we have much water → a lot of water; '
              + 'few plates when they mean a few',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – much / many / a lot of.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '4.2.4',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'You are organising something real — a lesson, a journey, a meal, a delivery. '
  + 'Ask three colleagues how much and how many questions about what they would '
  + 'need. Make notes.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What we need</th><th>How much / '
          + 'many?</th><th>Enough?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Dear Mr Ayoub,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'You are organising something real — a lesson, a journey, a meal, a '
          + 'delivery. Ask three colleagues how much and how many questions about '
          + 'what they would need. Make notes. (The dashes are blanks the learner '
          + 'fills in with their own workplace. Judge what they wrote in them, '
          + 'not the blanks.)',
        grammar: 'Grammar – much / many / a lot of',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (4.2) teaches: Grammar – much / many / a lot of. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – much / many / a lot of.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'sentence',
        'we\'ve',
        'boxes',
        'unusual',
        'speech',
        'small',
        'number',
        'enough',
        'almost']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – much / many / a lot of.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '4.2.4R',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: For we need . We\'ve got plenty of , but there isn\'t much '
  + 'and there aren\'t many .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Dear Mr Ayoub,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — For — we need —. We\'ve got plenty of , but there '
          + 'isn\'t much — and there aren\'t many —. (The dashes are blanks the '
          + 'learner fills in with their own workplace. Judge what they wrote in '
          + 'them, not the blanks.)',
        grammar: 'Grammar – much / many / a lot of',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (4.2) teaches: '
          + 'Grammar – much / many / a lot of. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – much / many / a lot of.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'sentence',
        'we\'ve',
        'boxes',
        'unusual',
        'speech',
        'small',
        'number',
        'enough',
        'almost'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – much / many / a lot of.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '4.2.5',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the reorder list Nour sends to Mr Ayoub, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>To:</b> Mr Ayoub <b>From:</b> Nour <b>Subject:</b> Reorder '
          + 'list — week of 7 April</p><p>Dear Mr Ayoub,</p><p>We have plenty of '
          + 'boxes (40 big, about 100 small) and enough tape (30 rolls) for this '
          + 'month.</p><p>There isn\'t much paper: six packets, and the minimum '
          + 'is ten. There aren\'t many pairs of gloves either — twenty-four, and '
          + 'the summer starts next month, when we use a lot.</p><p>There is no '
          + 'plastic wrap at all. This one is urgent: the Homs order goes on '
          + 'Tuesday and Ms Shamsi only sends on Tuesdays.</p><p>May I order '
          + 'twelve rolls of wide wrap, ten packets of paper and four cartons of '
          + 'gloves? The total is about 310,000 SYP, so it does not need your '
          + 'signature — but I would rather you knew.</p><p>Nour</p><h4>Writer\'s '
          + 'box</h4><p><b>Shape of a reorder list:</b> what is <b>fine</b> (one '
          + 'short line) → what is <b>low</b>, with the number and the minimum → '
          + 'what is <b>finished</b>, and why it is urgent → what you want to '
          + 'order → the total → a question or an offer.</p><p>Give the <b>number '
          + 'and the minimum together</b>. <i>Six packets</i> means nothing; '
          + '<i>six packets, minimum ten</i> is a decision.</p><p>Say <b>why</b> '
          + 'it is urgent with a date somebody else cares about: <i>the Homs '
          + 'order goes on Tuesday</i>.</p><p>⚠ End with the <b>total</b> and say '
          + 'whether it needs a signature. A manager reading a list is really '
          + 'asking one question: <i>do I have to do anything?</i></p>'
      },
      questions: [{
            q: 'Which two things are low, and which one is finished?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with <i>finished</i> in it.'
          },
      {
            q: 'Why is the wrap urgent?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with <i>because</i> and it will come out '
              + 'whole. Look in the text above for the line with <i>urgent</i> in '
              + 'it.'
          },
      {
            q: 'Why does Nour write to Mr Ayoub, if the order does not need his signature?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with <i>because</i> and it will come out '
              + 'whole. Look in the text above for the line with <i>Nour</i> in '
              + 'it.'
          }],
      ideas: ['Dear Mr Ayoub,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '4.2.6',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a reorder list for your own workplace or home (25 words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'sentence',
        'we\'ve',
        'boxes',
        'unusual',
        'speech',
        'small',
        'number']
      },
      coach: {
        title: 'What to include',
        task: 'Write a reorder list for your own workplace or home (25 words or more). Use the frame.',
        criteria: [{ t: 'Shape of a reorder list: what is fine (one short line) → what is '
              + 'low, with the number and the minimum → what is finished, and why '
              + 'it is urgent → what you want to order → the total → a question '
              + 'or an offer.' },
            { t: 'Give the number and the minimum together. Six packets means '
              + 'nothing; six packets, minimum ten is a decision.' },
            { t: 'Say why it is urgent with a date somebody else cares about: the '
              + 'Homs order goes on Tuesday.' },
            { t: '⚠ End with the total and say whether it needs a signature. A '
              + 'manager reading a list is really asking one question: do I have '
              + 'to do anything?' }]
      },
      aiCheck: {
        task: 'Write a reorder list for your own workplace or home (25 words or '
          + 'more). Use the frame.',
        grammar: 'Grammar – much / many / a lot of',
        must: ['Shape of a reorder list: what is fine (one short line) → what is '
          + 'low, with the number and the minimum → what is finished, and why it '
          + 'is urgent → what you want to order → the total → a question or an '
          + 'offer.',
        'Give the number and the minimum together. Six packets means nothing; '
          + 'six packets, minimum ten is a decision.',
        'Say why it is urgent with a date somebody else cares about: the Homs '
          + 'order goes on Tuesday.',
        '⚠ End with the total and say whether it needs a signature. A manager '
          + 'reading a list is really asking one question: do I have to do '
          + 'anything?'],
        vocab: ['grammar',
        'sentence',
        'we\'ve',
        'boxes',
        'unusual',
        'speech',
        'small',
        'number',
        'enough',
        'almost']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '4.2.6P',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Tick ✓ or cross ✗. Underline one thing to fix.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td><i>much</i> with uncountable, <i>many</i> with '
          + 'countable</td><td>&nbsp;</td></tr><tr><td>Every low item has a '
          + 'number <b>and</b> a minimum</td><td>&nbsp;</td></tr><tr><td>The '
          + 'urgent one has a reason with a '
          + 'date</td><td>&nbsp;</td></tr><tr><td>A total at the '
          + 'end</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample feedback: "The reason for today is the strongest part. '
              + 'Can you put the total at the end so he can say yes in one word?"',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Tick ✓ or cross ✗. Underline one thing to fix.',
        grammar: 'Grammar – much / many / a lot of',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (4.2) '
          + 'teaches: Grammar – much / many / a lot of. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        must: ['Shape of a reorder list: what is fine (one short line) → what is '
          + 'low, with the number and the minimum → what is finished, and why it '
          + 'is urgent → what you want to order → the total → a question or an '
          + 'offer.',
        'Give the number and the minimum together. Six packets means nothing; '
          + 'six packets, minimum ten is a decision.',
        'Say why it is urgent with a date somebody else cares about: the Homs '
          + 'order goes on Tuesday.',
        '⚠ End with the total and say whether it needs a signature. A manager '
          + 'reading a list is really asking one question: do I have to do '
          + 'anything?'],
        vocab: ['grammar',
        'sentence',
        'we\'ve',
        'boxes',
        'unusual',
        'speech',
        'small',
        'number',
        'enough',
        'almost'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '4.2.6R',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read only the urgent sentence. The class says which '
  + 'one they would act on today.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'The urgent sentence people act on is the one with a date '
              + 'somebody else cares about, not the one with the strongest '
              + 'adjective',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – much / many / a lot of.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '4.2.7',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write the list of what is needed for something in your own life — a journey, '
  + 'a party, the start of a school year, winter (35 words or more). Use <i>how '
  + 'much</i> / <i>how many</i> thinking: plenty, enough, not much, not many, '
  + 'none.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'sentence',
        'we\'ve',
        'boxes',
        'unusual',
        'speech',
        'small',
        'number']
      },
      coach: {
        title: 'What to include',
        task: 'Write the list of what is needed for something in your own life — a journey, '
  + 'a party, the start of a school year, winter (35 words or more). Use how much '
  + '/ how many thinking: plenty, enough, not much, not many, none.',
        criteria: [{ t: 'Shape of a reorder list: what is fine (one short line) → what is '
              + 'low, with the number and the minimum → what is finished, and why '
              + 'it is urgent → what you want to order → the total → a question '
              + 'or an offer.' },
            { t: 'Give the number and the minimum together. Six packets means '
              + 'nothing; six packets, minimum ten is a decision.' },
            { t: 'Say why it is urgent with a date somebody else cares about: the '
              + 'Homs order goes on Tuesday.' },
            { t: '⚠ End with the total and say whether it needs a signature. A '
              + 'manager reading a list is really asking one question: do I have '
              + 'to do anything?' }]
      },
      aiCheck: {
        task: 'Write the list of what is needed for something in your own life — a '
          + 'journey, a party, the start of a school year, winter (35 words or '
          + 'more). Use how much / how many thinking: plenty, enough, not much, '
          + 'not many, none.',
        grammar: 'Grammar – much / many / a lot of',
        must: ['Shape of a reorder list: what is fine (one short line) → what is '
          + 'low, with the number and the minimum → what is finished, and why it '
          + 'is urgent → what you want to order → the total → a question or an '
          + 'offer.',
        'Give the number and the minimum together. Six packets means nothing; '
          + 'six packets, minimum ten is a decision.',
        'Say why it is urgent with a date somebody else cares about: the Homs '
          + 'order goes on Tuesday.',
        '⚠ End with the total and say whether it needs a signature. A manager '
          + 'reading a list is really asking one question: do I have to do '
          + 'anything?'],
        vocab: ['grammar',
        'sentence',
        'we\'ve',
        'boxes',
        'unusual',
        'speech',
        'small',
        'number',
        'enough',
        'almost']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '4.2.7P',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s list. Write on a slip: ★ The urgent one is clear. ✓ How '
  + 'much / many…? ? one thing I think you forgot',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ The petrol line made me check my own car. ✓ How many litres '
              + 'does half a tank give you? ? Have you got a spare wheel?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s list. Write on a slip: — ★ The urgent one is '
          + 'clear. — ✓ How much / many…? —? one thing I think you forgot (The '
          + 'dashes are blanks the learner fills in with their own workplace. '
          + 'Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – much / many / a lot of',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (4.2) teaches: Grammar – much / many / a lot of. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – much / many / a lot of.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'sentence',
        'we\'ve',
        'boxes',
        'unusual',
        'speech',
        'small',
        'number',
        'enough',
        'almost'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – much / many / a lot of.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '4.2.7R',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Put the lists on the wall. Find the thing that appears on the most lists — '
  + 'and the thing that appears on only one.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final list. Then write eight questions about your '
          + 'home, four with <i>how much</i> and four with <i>how many</i>, and '
          + 'answer them (20+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'The thing on most lists is usually water; the thing on only one '
              + 'is usually the one that matters most to that person — and it is '
              + 'worth asking them why',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – much / many / a lot of.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
