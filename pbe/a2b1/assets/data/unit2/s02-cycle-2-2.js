/* Unit 2 · cycle 2.2 — What time do you open?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u2-s02', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 2 · 2.2', part: '2.2',
          section: '2', lesson: 'What time do you open?', title: 'What time do you open?' },
  objective: 'ask and say when places open, close and start',
  study: {
    minutes: 90,
    objective: 'ask and say when places open, close and start',
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
    task: 'Write the answer you give a customer who asks what time you open.',
    weak: '8 to 4.',
    change: ['Make it a sentence a customer can repeat: <i>We\'re open from… to…</i>.',
        'Say the days as well. A time with no days is half an answer.'],
    better: 'We\'re open from eight to four, Sunday to Thursday.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '2.2.1',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      passage: {
        title: 'From the book',
        html: '<table '
          + 'class=\'bk\'><tr><th>Place</th><th>Opens</th><th>Closes</th></tr><tr><td>Office '
          + '(2nd '
          + 'floor)</td><td>8.00</td><td>4.00</td></tr><tr><td>Warehouse</td><td>7.30</td><td>4.30</td></tr><tr><td>Trade '
          + 'counter</td><td>8.30</td><td>4.00 (Thursday 2.00)</td></tr></table>'
      },
      questions: [{
            q: 'Look at the opening hours. Which place is open at 8.00 am? Which '
              + 'place is closed at 4.15 pm?',
            model: 'Open at 8.00 am: the warehouse only (it opens at 7.30). Closed '
              + 'at 4.15 pm: the office (closes 4.00) and the trade counter '
              + '(closes 4.00); the warehouse is still open until 4.30',
            minWords: 6,
            rows: 3,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          },
      {
            q: 'Say the time: 8.00 · 8.15 · 8.30 · 8.45 · 12.00 · 2.00 pm',
            model: '8.00 eight o\'clock · 8.15 quarter past eight · 8.30 half past '
              + 'eight · 8.45 quarter to nine · 12.00 twelve o\'clock / noon · '
              + '2.00 pm two o\'clock in the afternoon',
            minWords: 6,
            rows: 3,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '2.2.2',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-2',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – questions about times, and at / on / '
          + 'in</b></p><table '
          + 'class=\'bk\'><tr><th>Question</th><th>Answer</th></tr><tr><td><b>What '
          + 'time do</b> you open?</td><td>We open <b>at</b> half past '
          + 'eight.</td></tr><tr><td><b>What time does</b> it close?</td><td>It '
          + 'closes <b>at</b> four.</td></tr><tr><td><b>When</b> is the '
          + 'delivery?</td><td><b>On</b> Tuesday. · <b>In</b> the morning. · '
          + '<b>At</b> ten.</td></tr><tr><td>Are you open <b>on</b> '
          + 'Thursday?</td><td>Yes, but we close <b>at</b> '
          + 'two.</td></tr></table><p><b>at</b> + a clock time: <i>at 8.30, at '
          + 'noon, at night</i> · <b>on</b> + a day or date: <i>on Tuesday, on 1 '
          + 'April</i> · <b>in</b> + a part of the day, a month, a year: <i>in '
          + 'the morning, in April</i></p><p>⚠ <i>in the morning / in the '
          + 'afternoon / in the evening</i> — but <b>at</b> '
          + 'night.</p><p><b>Practise:</b> Complete with <i>at, on</i> or '
          + '<i>in</i>.</p><p>1 We open <span class="blank"></span> 8.30. 2 The '
          + 'lorry comes <span class="blank"></span> Tuesday. 3 I check the stock '
          + '<span class="blank"></span> the morning. 4 The counter closes <span '
          + 'class="blank"></span> two <span class="blank"></span> Thursdays. 5 '
          + 'We are closed <span class="blank"></span> Friday and '
          + 'Saturday.</p><p><b>Useful phrases:</b> What time do you open? · '
          + 'We\'re open from… to… · We close at… · Are you open on…? · See you '
          + 'then.</p><p><b>Pronunciation – saying the time.</b> 🔊 <b>Track '
          + '2.4</b> Listen and repeat: <i>eight o\'clock · half past eight · '
          + 'quarter past nine · quarter to five · ten to four · twenty past '
          + 'two</i></p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Who is telephoning?',
            options: [{
              t: 'a customer',
              ok: true,
              why: 'He asks the opening and closing times of the counter, and '
                + 'plans to come on Tuesday to buy.'
            },
            {
              t: 'a driver',
              ok: false,
              why: 'Times of the warehouse are given, which a driver would want - '
                + 'but he asks about the counter first, and names his own shop.'
            },
            {
              t: 'Nadia',
              ok: false,
              why: 'Nadia works in this office and would not ask what time her own '
                + 'company opens.'
            }],
            evidence: 'the caller\'s first line - his name, where he is, and what he '
              + 'wants to know'
          },
        {
            q: 'Books closed. Listen. What time does the trade counter close on Thursday?',
            options: [{
              t: 'at two',
              ok: true,
              why: '"At four - but on Thursday we close at two." Thursday is the '
                + 'exception, which is why it is asked.'
            },
            {
              t: 'at four',
              ok: false,
              why: 'Four is every other day. Thursday is the one that is different.'
            },
            {
              t: 'at half past four',
              ok: false,
              why: 'Half past four is the WAREHOUSE closing, in the next line.'
            }],
            evidence: 'Nour\'s line about Thursday'
          },
        {
            q: 'Why does Mr Tarabishi say he will come on Tuesday morning?',
            options: [{
              t: 'he has worked out a time when both are open',
              ok: true,
              why: 'He asks about the counter, then the warehouse, and only then '
                + 'picks a time. That is what the questions were for.'
            },
            {
              t: 'because Thursday is a short day',
              ok: false,
              why: 'True of Thursday, but he does not choose Tuesday because of '
                + 'Thursday - he never mentions it again.'
            },
            {
              t: 'because Nour asked him to come then',
              ok: false,
              why: 'She tells Abu Yasser afterwards; the time is his own choice.'
            }],
            evidence: 'the whole exchange: he asks three times about hours'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '2.2.2',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Complete with at, on or in.',
      text: '<b>1</b> We open [[1]] 8.30. &nbsp; <b>2</b> The lorry comes [[2]] '
      + 'Tuesday. &nbsp; <b>3</b> I check the stock [[3]] the morning. &nbsp; '
      + '<b>4</b> The counter closes [[4]] two [[4b]] Thursdays. &nbsp; <b>5</b> '
      + 'We are closed [[5]] Friday and Saturday.',
      plain: true,
      small: true,
      answers: {
        '1': ['at'],
        '2': ['on'],
        '3': ['in'],
        '4': ['at'],
        '4b': ['on'],
        '5': ['on']
      }
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '2.2.2',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What time does the trade counter close on Thursday?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *Thursday* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'When can the customer come?',
            minWords: 6,
            rows: 2,
            hint: 'A time or a day. Look in the dialogue above for the line with '
              + '*customer* in it. Play it again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '2.2.3',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A telephones; B answers. Use the skeleton and the opening '
  + 'hours in stage 1. Then swap, and use the role cards.',
      scene: 'u2-2-2-pair',
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
        head: ['Role card 1 — a bank',
        'Role card 2 — a workshop'],
        rows: [['Opens 9.00 · closes 2.00 · closed Friday and Saturday · busy '
            + 'between 11 and 12',
          'Opens 8.00 · closes 6.00 · closes 1.00–2.00 for lunch · open on '
            + 'Saturday morning']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '2.2.3R',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their call for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ What time do you open?</td><td>☐ We '
          + 'open at…</td><td>☐ We close at…</td><td>☐ from… to…</td><td>☐ on '
          + 'Thursday</td><td>☐ See you then.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the opening time, the closing time and the day '
              + 'of the visit. Typical errors: What time you open? → What time do '
              + 'you open?; We open in 9.00 → at 9.00; on the morning → in the '
              + 'morning',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – questions about times, and at / on / in.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '2.2.4',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Ask three colleagues about a place they know well — their office, a shop '
  + 'near their home, a government office. Make notes.',
      passage: {
        title: 'From the book',
        html: '<table '
          + 'class=\'bk\'><tr><th>Place</th><th>Opens</th><th>Closes</th><th>Closed '
          + 'on</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
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
        task: 'Ask three colleagues about a place they know well — their office, a '
          + 'shop near their home, a government office. Make notes. (The dashes '
          + 'are blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Grammar – questions about times, and at / on / in',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (2.2) teaches: Grammar – questions about times, and at / on / '
          + 'in. Judge the language against THAT and against nothing the course '
          + 'has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – questions about times, and at / on / in.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'questions',
        'about',
        'times',
        'clock',
        'time',
        'noon',
        'night',
        'date',
        'tuesday']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – questions about times, and at / on / in.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '2.2.4R',
      bookRef: 'Unit 2 · 2.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: opens at and closes at . It\'s closed on .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — opens at — and closes at —. It\'s closed on —. '
          + '(The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – questions about times, and at / on / in',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (2.2) teaches: '
          + 'Grammar – questions about times, and at / on / in. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – questions about times, and at / on / in.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'questions',
        'about',
        'times',
        'clock',
        'time',
        'noon',
        'night',
        'date',
        'tuesday'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – questions about times, and at / on / in.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '2.2.5',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the notice from the front door and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>SHAM TRADING CO. — OPENING HOURS</b></p><p>Office Sunday – '
          + 'Thursday 8.00 am – 4.00 pm</p><p>Warehouse Sunday – Thursday 7.30 am '
          + '– 4.30 pm</p><p>Trade counter Sunday – Wednesday 8.30 am – 4.00 pm · '
          + 'Thursday 8.30 am – 2.00 pm</p><p>Closed on Friday and Saturday. For '
          + 'deliveries outside these hours, please telephone extension 201 one '
          + 'day before.</p><h4>Writer\'s box</h4><p><b>Shape of an opening-hours '
          + 'notice:</b> title → one line for each place → the days → the hours → '
          + 'a line for exceptions → what to do and who to call.</p><p>On a '
          + 'notice we write the short form: <b>8.00 am – 4.00 pm</b>, <b>Sunday '
          + '– Thursday</b>. In speech we say <i>from eight to '
          + 'four</i>.</p><p>Use <b>Closed on…</b> for the whole day and '
          + '<b>closes early on…</b> for a short day.</p><p>⚠ A notice has no '
          + '<i>Dear</i> and no <i>Thank you</i> — it is information, not a '
          + 'message.</p>'
      },
      questions: [{
            q: 'Which part of the company opens first?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with *company* in it.'
          },
      {
            q: 'On which day does the trade counter close early?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the text above for the line with *counter* in it.'
          },
      {
            q: 'What must you do if you want a delivery at 6.00 pm?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Your own '
              + 'workplace, not the book\'s. Say it out loud once before you '
              + 'write it - a sentence or two is enough.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '2.2.6',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write an opening-hours notice for <b>your</b> workplace, or for Sham Trading '
  + 'with new hours (25 words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'questions',
        'about',
        'times',
        'clock',
        'time',
        'noon',
        'night']
      },
      coach: {
        title: 'What to include',
        task: 'Write an opening-hours notice for your workplace, or for Sham Trading with '
  + 'new hours (25 words or more). Use the frame.',
        criteria: [{ t: 'Shape of an opening-hours notice: title → one line for each '
              + 'place → the days → the hours → a line for exceptions → what to '
              + 'do and who to call.' },
            { t: 'On a notice we write the short form: 8.00 am – 4.00 pm, Sunday – '
              + 'Thursday. In speech we say from eight to four.' },
            { t: 'Use Closed on… for the whole day and closes early on… for a short day.' },
            { t: '⚠ A notice has no Dear and no Thank you — it is information, not '
              + 'a message.' }]
      },
      aiCheck: {
        task: 'Write an opening-hours notice for your workplace, or for Sham '
          + 'Trading with new hours (25 words or more). Use the frame.',
        grammar: 'Grammar – questions about times, and at / on / in',
        must: ['Shape of an opening-hours notice: title → one line for each place → '
          + 'the days → the hours → a line for exceptions → what to do and who to '
          + 'call.',
        'On a notice we write the short form: 8.00 am – 4.00 pm, Sunday – '
          + 'Thursday. In speech we say from eight to four.',
        'Use Closed on… for the whole day and closes early on… for a short day.',
        '⚠ A notice has no Dear and no Thank you — it is information, not a message.'],
        vocab: ['grammar',
        'questions',
        'about',
        'times',
        'clock',
        'time',
        'noon',
        'night',
        'date',
        'tuesday']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '2.2.6P',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Read your partner\'s notice. Tick ✓ or cross ✗. Underline one '
  + 'thing to fix.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>Days <b>and</b> hours for every '
          + 'place</td><td>&nbsp;</td></tr><tr><td>A line that says when it is '
          + 'closed</td><td>&nbsp;</td></tr><tr><td>A line that says who to '
          + 'call</td><td>&nbsp;</td></tr><tr><td><i>am</i> / <i>pm</i> (or the '
          + '24-hour clock) used the same way all '
          + 'through</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample feedback: "The hours are very clear. Can you add a name '
              + 'next to the number? And choose am/pm or the 24-hour clock, not '
              + 'both."',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Read your partner\'s notice. Tick ✓ or cross ✗. '
          + 'Underline one thing to fix.',
        grammar: 'Grammar – questions about times, and at / on / in',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (2.2) '
          + 'teaches: Grammar – questions about times, and at / on / in. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        must: ['Shape of an opening-hours notice: title → one line for each place → '
          + 'the days → the hours → a line for exceptions → what to do and who to '
          + 'call.',
        'On a notice we write the short form: 8.00 am – 4.00 pm, Sunday – '
          + 'Thursday. In speech we say from eight to four.',
        'Use Closed on… for the whole day and closes early on… for a short day.',
        '⚠ A notice has no Dear and no Thank you — it is information, not a message.'],
        vocab: ['grammar',
        'questions',
        'about',
        'times',
        'clock',
        'time',
        'noon',
        'night',
        'date',
        'tuesday'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '2.2.6R',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their notice. The class listens and asks one '
  + 'question that the notice does not answer.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'What happens if I come at five? Is anybody there? — a good '
              + 'question, because the notice does not say',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – questions about times, and at / on / in.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '2.2.7',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write a short message to a customer who wants to come on Thursday afternoon '
  + '(35 words or more). Say when you close on Thursday, offer another day and '
  + 'time, and ask them to confirm.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'questions',
        'about',
        'times',
        'clock',
        'time',
        'noon',
        'night']
      },
      coach: {
        title: 'What to include',
        task: 'Write a short message to a customer who wants to come on Thursday afternoon '
  + '(35 words or more). Say when you close on Thursday, offer another day and '
  + 'time, and ask them to confirm.',
        criteria: [{ t: 'Shape of an opening-hours notice: title → one line for each '
              + 'place → the days → the hours → a line for exceptions → what to '
              + 'do and who to call.' },
            { t: 'On a notice we write the short form: 8.00 am – 4.00 pm, Sunday – '
              + 'Thursday. In speech we say from eight to four.' },
            { t: 'Use Closed on… for the whole day and closes early on… for a short day.' },
            { t: '⚠ A notice has no Dear and no Thank you — it is information, not '
              + 'a message.' }]
      },
      aiCheck: {
        task: 'Write a short message to a customer who wants to come on Thursday '
          + 'afternoon (35 words or more). Say when you close on Thursday, offer '
          + 'another day and time, and ask them to confirm.',
        grammar: 'Grammar – questions about times, and at / on / in',
        must: ['Shape of an opening-hours notice: title → one line for each place → '
          + 'the days → the hours → a line for exceptions → what to do and who to '
          + 'call.',
        'On a notice we write the short form: 8.00 am – 4.00 pm, Sunday – '
          + 'Thursday. In speech we say from eight to four.',
        'Use Closed on… for the whole day and closes early on… for a short day.',
        '⚠ A notice has no Dear and no Thank you — it is information, not a message.'],
        vocab: ['grammar',
        'questions',
        'about',
        'times',
        'clock',
        'time',
        'noon',
        'night',
        'date',
        'tuesday']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '2.2.7P',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s message as the customer. Write on a slip: ★ I like… ✓ '
  + 'Can you add…? ? one question you still have',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ I like the two times — I can choose. ✓ Can you add the address '
              + 'of the counter? ? Is there parking in the morning?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s message as the customer. Write on a slip: — ★ I '
          + 'like… — ✓ Can you add…? —? one question you still have (The dashes '
          + 'are blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Grammar – questions about times, and at / on / in',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (2.2) teaches: Grammar – questions about times, and at / on / '
          + 'in. Judge the language against THAT and against nothing the course '
          + 'has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – questions about times, and at / on / in.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'questions',
        'about',
        'times',
        'clock',
        'time',
        'noon',
        'night',
        'date',
        'tuesday'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – questions about times, and at / on / in.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '2.2.7R',
      bookRef: 'Unit 2 · 2.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read two other messages. Find one that gives the customer a choice of two '
  + 'times, and say why that is better.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final message. Then copy the opening hours of a real '
          + 'place near your home (a pharmacy, a bakery, a government office) and '
          + 'write three sentences about them: when it opens, when it closes, and '
          + 'when it is closed (20+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'A message with a choice of two times is better because the '
              + 'customer can answer with one word, and nobody has to write again',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – questions about times, and at / on / in.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
