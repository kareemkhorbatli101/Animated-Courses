/* Unit 16 · cycle 16.1 — We used to write every order by hand.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE4.page('u16-s01', {
  book: { source: 'Proactive Business English · A2 Book 2', ref: 'Unit 16 · 16.1', part: '16.1',
          section: '1', lesson: 'We used to write every order by hand', title: 'We used to write every order by hand' },
  objective: 'say what you used to do and no longer do',
  study: {
    minutes: 90,
    objective: 'say what you used to do and no longer do',
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
    task: 'Write how the orders used to be taken, for the company history.',
    weak: 'Before we wrote orders by hand.',
    change: ['Use USED TO for a habit that has stopped — it is what tells the '
          + 'reader it is over.',
        'Say what replaced it, or the sentence is only nostalgia.'],
    better: 'We used to write every order by hand, in a carbon book. We have used the '
      + 'system since 2021, and the book is still in the drawer.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '16.1.1',
      bookRef: 'Unit 16 · 16.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Name three things your workplace used to do and does not do now. '
              + 'If you are new, ask somebody who is not.',
            minWords: 6,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Which is right? We used to write it by hand. / We use to write '
              + 'it by hand. / We used to writing it by hand.',
            model: 'We used to write it by hand. The other two are the two standard '
              + 'errors: the missing',
            minWords: 5,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '16.1.2',
      bookRef: 'Unit 16 · 16.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u16-16-1',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – <i>used to</i> for a past habit that has '
          + 'stopped</b></p><table '
          + 'class=\'bk\'><tr><th>Form</th><th>Example</th></tr><tr><td><b>used '
          + 'to</b> + verb</td><td>We <b>used to write</b> every order by '
          + 'hand.</td></tr><tr><td>Negative: <b>didn\'t use to</b></td><td>We '
          + '<b>didn\'t use to leave</b> without '
          + 'knowing.</td></tr><tr><td>Question: <b>Did you use '
          + 'to…?</b></td><td><b>Did you use to</b> keep it by '
          + 'hand?</td></tr><tr><td>For a state as well as a habit</td><td>There '
          + '<b>used to be</b> two vans.</td></tr><tr><td>Not for a single '
          + 'event</td><td><s>I used to start here in 2019</s> → I <b>started</b> '
          + 'here in 2019.</td></tr></table><p>⚠ The <b>d</b> disappears in the '
          + 'negative and the question: <i>used to</i> → <i>did<b>n\'t use '
          + 'to</b></i> · <i><b>Did</b> you <b>use to</b>…?</i> This is the '
          + 'commonest written mistake with the structure.</p><p>⚠ <i>Used to</i> '
          + 'says <b>and it has stopped</b>. If it is still true, use the present '
          + 'simple: <i>we <b>write</b> the stock figures by hand</i> — because '
          + 'Abu Yasser still does.</p><p>⚠ Do not use it for one finished event. '
          + 'A habit or a state, repeated over time, is what it is '
          + 'for.</p><p><b>Practise:</b> Make three sentences about each — one '
          + 'positive, one negative, one question.</p><p>1 the telephone 2 the '
          + 'post 3 money 4 how people found you 5 what the office looked '
          + 'like</p><p><b>Useful phrases:</b> We used to… · We didn\'t use to… · '
          + 'Did you use to…? · There used to be… · I do not miss… · I miss the '
          + 'eleven minutes.</p><p><b>Pronunciation – one sound.</b> 🔊 <b>Track '
          + '16.2</b> <i>Used to</i> is said /ˈjuːstə/ — one word, no gap, and '
          + 'the <b>d</b> is not heard. Listen and repeat six: <i>we used to '
          + 'write · we used to open · we used to go</i>.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What did they use to do?',
            options: [{
              t: 'write every order by hand',
              ok: true,
              why: 'Twice, in two columns, so they could be matched at the end of the day.'
            },
            {
              t: 'open on Saturdays',
              ok: false,
              why: 'Saturdays are not mentioned in this exchange.'
            },
            {
              t: 'deliver only in Damascus',
              ok: false,
              why: 'Where they delivered is never discussed; the book is about how '
                + 'orders were recorded.'
            }],
            evidence: 'Abu Yasser\'s first answer about what the book was for'
          },
        {
            q: 'Books closed. Listen. How often does the screen fail now?',
            options: [{
              t: 'about once a month',
              ok: true,
              why: 'He says it does fail, about once a month - which is why the '
                + 'book is still kept.'
            },
            {
              t: 'once a year',
              ok: false,
              why: 'No yearly figure is given here; the nine days of 2016 belong '
                + 'to a different cycle of this unit.'
            },
            {
              t: 'never',
              ok: false,
              why: 'He says plainly that it does fail. That is the whole reason '
                + 'the old habit survives.'
            }],
            evidence: 'Abu Yasser\'s answer about what the screen does instead'
          },
        {
            q: 'Why were the orders written twice?',
            options: [{
              t: 'so the two columns could be matched at the end of the day',
              ok: true,
              why: 'Writing it twice was the check - a mistake showed up as two '
                + 'columns that did not agree.'
            },
            {
              t: 'because the pen did not work in the rain',
              ok: false,
              why: 'The rain is what he does NOT miss, said at the very end. It is '
                + 'about the writing, not about why it was doubled.'
            },
            {
              t: 'because two people had to sign',
              ok: false,
              why: 'No signature is mentioned; the two columns are both his own hand.'
            }],
            evidence: 'his answer to Nour\'s ‘Why twice?’'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '16.1.2',
      bookRef: 'Unit 16 · 16.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Make three sentences about each — one positive, one negative, one question.',
      questions: [{
            q: '1 the telephone',
            model: 'We used to answer every call on one line. We didn\'t use to have '
              + 'a second line. Did you use to take messages on paper?',
            minWords: 6,
            rows: 3
          },
      {
            q: '2 the post',
            model: 'We used to send everything by post.',
            minWords: 2,
            rows: 2
          },
      {
            q: '3 money',
            model: 'We used to be paid in cash.',
            minWords: 2,
            rows: 2
          },
      {
            q: '4 how people found you',
            model: 'Customers used to come in person.',
            minWords: 2,
            rows: 2
          },
      {
            q: '5 what the office looked like',
            model: 'There used to be a map on the wall.',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '16.1.2',
      bookRef: 'Unit 16 · 16.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Why did the handwritten book have two columns?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *handwritten* in '
              + 'it. Play it again with the subtitles on.'
          },
      {
            q: 'What does Abu Yasser say he does not miss?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with *Yasser* in it. Play it again '
              + 'with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '16.1.3',
      bookRef: 'Unit 16 · 16.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A finds something old; B explains what it used to be for and '
  + 'says what they do and do not miss. Use the skeleton, then the role cards.',
      scene: 'u16-16-1-pair',
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
        head: ['Role card 1 — the card index',
        'Role card 2 — the delivery board'],
        rows: [['A wooden drawer of customer cards, last written on in 2018. One '
            + 'card per customer, with every order on the back. It took thirty '
            + 'seconds a customer and it was never down. What is missed: you '
            + 'could see a customer\'s whole history in one hand.',
          'A painted board on the warehouse wall with chalk columns for each '
            + 'van. Rubbed out and rewritten every morning. What is missed: '
            + 'everybody in the building could see the day at a glance, including '
            + 'the drivers, who now have to ask.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '16.1.3R',
      bookRef: 'Unit 16 · 16.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ We used to…</td><td>☐ We didn\'t use '
          + 'to…</td><td>☐ Did you use to…?</td><td>☐ There used to be…</td><td>☐ '
          + 'I do not miss…</td><td>☐ nobody notices until…</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the thing that is missed — never the object, '
              + 'always what the object made easy. Typical errors: we didn\'t '
              + 'used to · I am used to write (a different structure entirely, '
              + 'meaning "accustomed to") · used to writing',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – used to for a past habit that has stopped.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '16.1.4',
      bookRef: 'Unit 16 · 16.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Ask three colleagues what the workplace used to do and stopped doing. For '
  + 'each one, write what is better now and what was lost.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>They used to…</th><th>Now</th><th>Better '
          + 'now</th><th>Lost</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Ask three colleagues what the workplace used to do and stopped '
          + 'doing. For each one, write what is better now and what was lost.',
        grammar: 'Grammar – used to for a past habit that has stopped',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (16.1) teaches: Grammar – used to for a past habit that has '
          + 'stopped. Judge the language against THAT and against nothing the '
          + 'course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – used to for a past habit that '
          + 'has stopped.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'used',
        'past',
        'habit',
        'stopped',
        'disappears',
        'negative',
        'question',
        'didn\'t',
        'commonest']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – used to for a past habit that has stopped.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '16.1.4R',
      bookRef: 'Unit 16 · 16.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: They used to . Now . It is better because , but we lost .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — They used to —. Now —. It is better because , but '
          + 'we lost —. (The dashes are blanks the learner fills in with their '
          + 'own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – used to for a past habit that has stopped',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (16.1) teaches: '
          + 'Grammar – used to for a past habit that has stopped. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – used to for a past habit that '
          + 'has stopped.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'used',
        'past',
        'habit',
        'stopped',
        'disappears',
        'negative',
        'question',
        'didn\'t',
        'commonest'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – used to for a past habit that has stopped.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '16.1.5',
      bookRef: 'Unit 16 · 16.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the page from the company history, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>How we used to work — written down before everybody who '
          + 'remembers has gone</b></p><p>Until 2019 every order was written by '
          + 'hand in a ledger, twice: once in the left column when the order was '
          + 'taken and once in the right when it left the yard. The two columns '
          + 'were checked against each other at the end of the day. It took about '
          + 'eleven minutes.</p><p>We used to keep a card for every customer in a '
          + 'wooden drawer, with the orders written on the back. You could hold a '
          + 'customer\'s whole history in one hand.</p><p>We didn\'t use to '
          + 'telephone customers about delays. If a delivery was late, it was '
          + 'late, and the customer telephoned us.</p><p>There used to be one van '
          + 'and one lorry, and the lorry was older than the man who drove '
          + 'it.</p><p><b>What we gained:</b> speed, and a record that two people '
          + 'in two places can read at once.</p><p><b>What we lost:</b> the '
          + 'eleven minutes. Nobody now leaves at the end of the day knowing that '
          + 'everything taken has gone out — and once a month, it has '
          + 'not.</p><h4>Writer\'s box</h4><p><b>A page of company history — the '
          + 'shape:</b> a title that says <b>why</b> it is being written → three '
          + 'or four paragraphs of <i>used to</i>, one habit each → <b>what we '
          + 'gained</b> → <b>what we lost</b>.</p><p>One habit per paragraph, '
          + 'with the <b>detail that makes it real</b>: <i>twice, once in the '
          + 'left column and once in the right</i> · <i>the lorry was older than '
          + 'the man who drove it</i>. Without the detail it is a list of things '
          + 'that are no longer done.</p><p><b>Include something that was '
          + 'worse.</b> <i>We didn\'t use to telephone customers about '
          + 'delays.</i> A history in which everything used to be better is a '
          + 'complaint, and nobody under forty will read to the end of '
          + 'it.</p><p>⚠ <b>What we lost</b> is the paragraph the company needs. '
          + 'It is not nostalgia if it names a thing that still goes wrong — '
          + '<i>once a month, it has not</i> — and that sentence is how a lost '
          + 'habit gets argued for.</p>'
      },
      questions: [{
            q: 'Find the sentence that says why the history is being written down at all.',
            minWords: 6,
            rows: 2,
            hint: 'Look in the text above for the line with *history* in it.'
          },
      {
            q: 'Which paragraph describes something that was worse in the past?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with *paragraph* in it.'
          },
      {
            q: 'Why are "what we gained" and "what we lost" both there?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with *because* and it will come out whole. '
              + 'Look in the text above for the line with *gained* in it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '16.1.6',
      bookRef: 'Unit 16 · 16.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a page of history for your own workplace (35 words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'used',
        'past',
        'habit',
        'stopped',
        'disappears',
        'negative',
        'question']
      },
      coach: {
        title: 'What to include',
        task: 'Write a page of history for your own workplace (35 words or more). Use the frame.',
        criteria: [{ t: 'A page of company history — the shape: a title that says why it '
              + 'is being written → three or four paragraphs of used to, one '
              + 'habit each → what we gained → what we lost.' },
            { t: 'One habit per paragraph, with the detail that makes it real: '
              + 'twice, once in the left column and once in the right · the lorry '
              + 'was older than the man who drove it. Without the detail it is a '
              + 'list of things that are no longer done.' },
            { t: 'Include something that was worse. We didn\'t use to telephone '
              + 'customers about delays. A history in which everything used to be '
              + 'better is a complaint, and nobody under forty will read to the '
              + 'end of it.' },
            { t: '⚠ What we lost is the paragraph the company needs. It is not '
              + 'nostalgia if it names a thing that still goes wrong — once a '
              + 'month, it has not — and that sentence is how a lost habit gets '
              + 'argued for.' }]
      },
      aiCheck: {
        task: 'Write a page of history for your own workplace (35 words or more). '
          + 'Use the frame.',
        grammar: 'Grammar – used to for a past habit that has stopped',
        must: ['A page of company history — the shape: a title that says why it is '
          + 'being written → three or four paragraphs of used to, one habit each '
          + '→ what we gained → what we lost.',
        'One habit per paragraph, with the detail that makes it real: twice, '
          + 'once in the left column and once in the right · the lorry was older '
          + 'than the man who drove it. Without the detail it is a list of things '
          + 'that are no longer done.',
        'Include something that was worse. We didn\'t use to telephone '
          + 'customers about delays. A history in which everything used to be '
          + 'better is a complaint, and nobody under forty will read to the end '
          + 'of it.',
        '⚠ What we lost is the paragraph the company needs. It is not '
          + 'nostalgia if it names a thing that still goes wrong — once a month, '
          + 'it has not — and that sentence is how a lost habit gets argued for.'],
        vocab: ['grammar',
        'used',
        'past',
        'habit',
        'stopped',
        'disappears',
        'negative',
        'question',
        'didn\'t',
        'commonest']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '16.1.6P',
      bookRef: 'Unit 16 · 16.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Ask one question: would somebody who was not there believe this? '
  + 'Tick ✓ or cross ✗, and name the criterion each time.',
      passage: {
        title: 'From the book',
        html: '<h4>Band 3 feedback — name the criterion</h4><p>"The box says '
          + 'include something that was worse in the past. Everything here is '
          + 'better the old way — was there nothing that has '
          + 'improved?"</p><p>Quote the box, ask the question, stop. Band 3 does '
          + 'not rewrite.</p><table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td><i>used to</i>, <i>didn\'t use to</i> and '
          + '<i>there used to be</i> all '
          + 'present</td><td>&nbsp;</td></tr><tr><td>One habit per paragraph, '
          + 'with a real detail</td><td>&nbsp;</td></tr><tr><td>Something that '
          + 'was worse in the past</td><td>&nbsp;</td></tr><tr><td>A "what we '
          + 'lost" that names a thing that still goes '
          + 'wrong</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample band 3 feedback: "The box asks for the detail that makes '
              + 'it real, and the pencil marks copied every three months is '
              + 'exactly that. The line I would look at is the rest ask — ask how '
              + 'often? That would turn the loss into something a manager can act '
              + 'on."',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Ask one question: would somebody who was not there '
          + 'believe this? Tick ✓ or cross ✗, and name the criterion each time.',
        grammar: 'Grammar – used to for a past habit that has stopped',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (16.1) '
          + 'teaches: Grammar – used to for a past habit that has stopped. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        must: ['A page of company history — the shape: a title that says why it is '
          + 'being written → three or four paragraphs of used to, one habit each '
          + '→ what we gained → what we lost.',
        'One habit per paragraph, with the detail that makes it real: twice, '
          + 'once in the left column and once in the right · the lorry was older '
          + 'than the man who drove it. Without the detail it is a list of things '
          + 'that are no longer done.',
        'Include something that was worse. We didn\'t use to telephone '
          + 'customers about delays. A history in which everything used to be '
          + 'better is a complaint, and nobody under forty will read to the end '
          + 'of it.',
        '⚠ What we lost is the paragraph the company needs. It is not '
          + 'nostalgia if it names a thing that still goes wrong — once a month, '
          + 'it has not — and that sentence is how a lost habit gets argued for.'],
        vocab: ['grammar',
        'used',
        'past',
        'habit',
        'stopped',
        'disappears',
        'negative',
        'question',
        'didn\'t',
        'commonest'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '16.1.6R',
      bookRef: 'Unit 16 · 16.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their "what we lost". The class says which loss '
  + 'should be argued for at a meeting.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Read the "what we lost" paragraphs. Ask which loss should be '
              + 'argued for at a meeting, and whether anybody will',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – used to for a past habit that has stopped.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '16.1.7',
      bookRef: 'Unit 16 · 16.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about how your own work used to be done, by you or by somebody before '
  + 'you (60 to 100 words). Say what the habit was, why it existed, what replaced '
  + 'it, and one thing that stopped being true.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'used',
        'past',
        'habit',
        'stopped',
        'disappears',
        'negative',
        'question']
      },
      coach: {
        title: 'What to include',
        task: 'Write about how your own work used to be done, by you or by somebody before '
  + 'you (60 to 100 words). Say what the habit was, why it existed, what replaced '
  + 'it, and one thing that stopped being true.',
        criteria: [{ t: 'A page of company history — the shape: a title that says why it '
              + 'is being written → three or four paragraphs of used to, one '
              + 'habit each → what we gained → what we lost.' },
            { t: 'One habit per paragraph, with the detail that makes it real: '
              + 'twice, once in the left column and once in the right · the lorry '
              + 'was older than the man who drove it. Without the detail it is a '
              + 'list of things that are no longer done.' },
            { t: 'Include something that was worse. We didn\'t use to telephone '
              + 'customers about delays. A history in which everything used to be '
              + 'better is a complaint, and nobody under forty will read to the '
              + 'end of it.' },
            { t: '⚠ What we lost is the paragraph the company needs. It is not '
              + 'nostalgia if it names a thing that still goes wrong — once a '
              + 'month, it has not — and that sentence is how a lost habit gets '
              + 'argued for.' }]
      },
      aiCheck: {
        task: 'Write about how your own work used to be done, by you or by somebody '
          + 'before you (60 to 100 words). Say what the habit was, why it '
          + 'existed, what replaced it, and one thing that stopped being true.',
        grammar: 'Grammar – used to for a past habit that has stopped',
        must: ['A page of company history — the shape: a title that says why it is '
          + 'being written → three or four paragraphs of used to, one habit each '
          + '→ what we gained → what we lost.',
        'One habit per paragraph, with the detail that makes it real: twice, '
          + 'once in the left column and once in the right · the lorry was older '
          + 'than the man who drove it. Without the detail it is a list of things '
          + 'that are no longer done.',
        'Include something that was worse. We didn\'t use to telephone '
          + 'customers about delays. A history in which everything used to be '
          + 'better is a complaint, and nobody under forty will read to the end '
          + 'of it.',
        '⚠ What we lost is the paragraph the company needs. It is not '
          + 'nostalgia if it names a thing that still goes wrong — once a month, '
          + 'it has not — and that sentence is how a lost habit gets argued for.'],
        vocab: ['grammar',
        'used',
        'past',
        'habit',
        'stopped',
        'disappears',
        'negative',
        'question',
        'didn\'t',
        'commonest']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '16.1.7P',
      bookRef: 'Unit 16 · 16.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ the detail that made it real ✓ '
  + 'used to / didn\'t use to correct? ? who else remembers this?',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "after that I had the pad" ✓ used to / didn\'t use to correct. '
              + '? Could you keep the pad as well?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ the detail that made '
          + 'it real — ✓ used to / didn\'t use to correct? —? who else remembers '
          + 'this? (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – used to for a past habit that has stopped',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (16.1) teaches: Grammar – used to for a past habit that has '
          + 'stopped. Judge the language against THAT and against nothing the '
          + 'course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – used to for a past habit that '
          + 'has stopped.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'used',
        'past',
        'habit',
        'stopped',
        'disappears',
        'negative',
        'question',
        'didn\'t',
        'commonest'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – used to for a past habit that has stopped.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '16.1.7R',
      bookRef: 'Unit 16 · 16.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. Ask how many of these habits are written down anywhere. '
  + 'The answer is almost always none, and this lesson is the first time.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then ask the longest-serving person at '
          + 'your workplace one question: <i>what did we use to do that we do not '
          + 'do now?</i> Write their answer down word for word (35+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Ask how many of these habits are written down anywhere. The '
              + 'answer is almost always none, and this lesson is the first time '
              + '— say so',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – used to for a past habit that has stopped.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
