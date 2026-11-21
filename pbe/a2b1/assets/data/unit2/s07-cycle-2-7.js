/* Unit 2 · cycle 2.7 — Review & Mediate: what does the timetable say?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u2-s07', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 2 · 2.7', part: '2.7',
          section: '7', lesson: 'Review & Mediate: what does the timetable say?', title: 'Review & Mediate: what does the timetable say?' },
  objective: 'Review & Mediate: tell a colleague what the weekly timetable says',
  study: {
    minutes: 95,
    objective: 'Review & Mediate: tell a colleague what the weekly timetable says',
    steps: [{
          title: 'Get ready – Unit 2 quiz',
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
          title: 'Report – mediation',
          mins: 6,
          why: 'Saying it to a room, which is harder than saying it to one person.',
          todo: 'Stand up if you can. Say it once, slowly. Then write what you said.',
          alone: 'Say it aloud to the empty room anyway - the difficulty is the '
            + 'standing up and the once, not the audience.'
        },
        {
          title: 'Read – exam practice (A2 Key Reading Part 1)',
          mins: 10,
          why: 'Meeting the shape of the thing before you have to write one.',
          todo: 'Read the page above the questions, then answer. The answers are IN '
            + 'the page - if you cannot find one, read again rather than guess.',
          alone: 'Cover your answer and read the page again before you check.'
        },
        {
          title: 'Write with help',
          mins: 8,
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
          title: 'Write freely – exam practice (A2 Key Writing Part 6)',
          mins: 12,
          why: 'The same writing, without the model.',
          todo: 'Write first, check the model afterwards. Looking first turns it '
            + 'into copying.',
          alone: 'Set a timer for ten minutes and do not stop to correct anything.'
        },
        {
          title: 'Unit 2 check',
          mins: 15,
          why: 'Finding out what stuck.',
          todo: 'Do it without looking back at the unit. Then look back at whatever '
            + 'you got wrong - that is the list of what to study again.',
          alone: 'Do it cold. The looking-back is the exercise.'
        }]
  },
  worked: {
    task: 'Write what the new timetable changes, for the people it affects.',
    weak: 'The timetable changed.',
    change: ['Say how many changes there are, so nobody stops reading after the first.',
        'Give the new time against the old one, in that order.'],
    better: 'There are two changes. The Homs lorry is at six now, not at eight, and '
      + 'nothing else changes.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '2.7.1',
      bookRef: 'Unit 2 · 2.7 · Lesson A · Speaking · Get ready – Unit 2 quiz',
      type: 'discuss',
      title: 'Get ready – Unit 2 quiz',
      instruction: 'In pairs, answer from memory. Then check in the unit.',
      questions: [{
            q: 'Write what you would say. Your own words.',
            minWords: 6,
            rows: 2,
            hint: 'Say it out loud first, then write that down. Use the names, '
              + 'numbers and places from your own workplace, not the book\'s.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
    },
    {
      id: 'c2',
      ref: '2.7.2',
      bookRef: 'Unit 2 · 2.7 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-7',
      passage: {
        title: 'Language box',
        html: '<p><b>Mediating – saying what a timetable says</b></p><table '
          + 'class=\'bk\'><tr><th>To start</th><th>To give the change</th><th>To '
          + 'finish</th></tr><tr><td>It\'s about the week. · It\'s the new '
          + 'timetable.</td><td>The meeting <b>moves</b> to… · It\'s at… '
          + '<b>now</b>, not at…</td><td>Nothing else '
          + 'changes.</td></tr><tr><td>There are <b>two</b> '
          + 'changes.</td><td>Before, not after. · From next '
          + 'week.</td><td>That\'s all. · Anything else?</td></tr></table><p>⚠ '
          + 'Give the <b>important thing first</b>, not the first line of the '
          + 'paper. A timetable is read from the top; a colleague is told the '
          + 'change first.</p><p>⚠ Say what is <b>not</b> changing too: '
          + '<i>Nothing else changes</i> saves five '
          + 'questions.</p><p><b>Practise:</b> The notice says: <i>With effect '
          + 'from Sunday, the weekly stock report must be submitted to the '
          + 'accounts department prior to the management meeting.</i> Say it in '
          + 'easy English, in one sentence.</p><p><b>Useful phrases:</b> It\'s '
          + 'about… · There are two changes. · It\'s at… now, not at… · Before, '
          + 'not after. · Nothing else changes.</p><p><b>Pronunciation – contrast '
          + 'stress.</b> 🔊 <b>Track 2.14</b> Listen. Make the two different words '
          + 'loud: <i>It\'s at <b>half past eight</b> now, not at <b>ten</b>.</i> '
          + '· <i><b>Before</b> the meeting, not <b>after</b>.</i> Repeat the '
          + 'four sentences.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What has changed?',
            options: [{
              t: 'the Monday meeting',
              ok: false,
              why: 'That one is said first and most clearly, which is why it is '
                + 'the easy answer. Listen for what Abu Yasser then has to do on '
                + 'Sunday evening.'
            },
            {
              t: 'the stock count',
              ok: false,
              why: 'This one is real, but it is the second half of the notice, not '
                + 'the whole of it.'
            },
            {
              t: 'both',
              ok: true,
              why: 'The meeting moves to half past eight, and the warehouse gives '
                + 'its numbers before the meeting instead of after.'
            }],
            evidence: 'Abu Yasser\'s last line, where he counts what the paper changed'
          },
        {
            q: 'Books closed. Listen. What time is the Monday meeting now?',
            options: [{
              t: 'half past eight',
              ok: true,
              why: '"At half past eight now, not at ten" - and Abu Yasser works '
                + 'out it is before the counter opens.'
            },
            {
              t: 'ten',
              ok: false,
              why: 'Ten is the OLD time. The notice exists because it moved.'
            },
            {
              t: 'eight',
              ok: false,
              why: 'Eight is when Nour starts work, in cycle 2.1.'
            }],
            evidence: 'Nour\'s first change'
          },
        {
            q: 'What is the second change on the timetable?',
            options: [{
              t: 'the warehouse gives accounts the stock numbers BEFORE the meeting',
              ok: true,
              why: 'Before, not after - which is why Abu Yasser says he will count '
                + 'on Sunday evening.'
            },
            {
              t: 'the counter and the warehouse change their hours',
              ok: false,
              why: 'Nour says the opposite: nothing else changes, the hours stay the same.'
            },
            {
              t: 'the Aleppo lorry moves to Tuesday',
              ok: false,
              why: 'That was LAST week\'s notice, in cycle 1.7. This one is the timetable.'
            }],
            evidence: 'Nour\'s line about accounts'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'own',
      ref: '2.7.2',
      bookRef: 'Unit 2 · 2.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'The notice says: With effect from Sunday, the weekly stock '
              + 'report must be submitted to the accounts department prior to the '
              + 'management meeting. Say it in easy English, in one sentence.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '2.7.2',
      bookRef: 'Unit 2 · 2.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is the new time for the Monday meeting?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *Monday* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What must the warehouse do before the meeting?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with *warehouse* in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '2.7.3',
      bookRef: 'Unit 2 · 2.7 · Lesson A · Speaking · Practise',
      type: 'discuss',
      title: 'Practise',
      instruction: 'Work in pairs. A reads timetable 1 silently and tells B the changes. B '
  + 'closes the book. Then swap with timetable 2.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Timetable 1 — for A</th><th>Timetable 2 '
          + '— for B</th></tr><tr><td><b>WEEK BEGINNING 7 APRIL.</b> Management '
          + 'meeting: Monday 08.30 (previously 10.00). Stock figures to accounts: '
          + 'Sunday, end of day. Trade counter: no change. Deliveries to Homs: '
          + 'Tuesday only.</td><td><b>WEEK BEGINNING 14 APRIL.</b> Office closed '
          + 'Thursday afternoon for the inventory. Trade counter closes 12.00 on '
          + 'Thursday. Warehouse works normal hours. Invoices to be signed by '
          + 'Wednesday 15.00.</td></tr></table>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Both sides: your lines, then the other person\'s. Alone, the '
              + 'engine is the other person - write what it said.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['A: Good morning. Your name, please. B: Good morning. My name is Samih '
        + 'Qassar. A: Can you spell it? B: Q, A, S, S, A, R.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '2.7.3R',
      bookRef: 'Unit 2 · 2.7 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs mediate their timetable for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ It\'s about…</td><td>☐ There are two '
          + 'changes.</td><td>☐ …now, not…</td><td>☐ Before, not after.</td><td>☐ '
          + 'Nothing else changes.</td><td>☐ That\'s all.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the one thing they must do differently. Good '
              + 'mediation gives the change first and ends with nothing else '
              + 'changes. A learner who reads the words with effect from aloud '
              + 'has not mediated — note it kindly and ask for it again in easier '
              + 'words',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – saying what a timetable says.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '2.7.4',
      bookRef: 'Unit 2 · 2.7 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Your teacher gives you a short timetable in formal English. Read it '
  + 'silently. Then tell two colleagues what changes for them. Do not show them '
  + 'the paper.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Who I told</th><th>The change for '
          + 'them</th><th>Did they '
          + 'understand?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
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
        task: 'Your teacher gives you a short timetable in formal English. Read it '
          + 'silently. Then tell two colleagues what changes for them. Do not '
          + 'show them the paper.',
        grammar: 'Mediating – saying what a timetable says',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (2.7) teaches: Mediating – saying what a timetable says. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – saying what a timetable says.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'saying',
        'timetable',
        'give',
        'important',
        'thing',
        'first',
        'line',
        'paper',
        'colleague']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – saying what a timetable says.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '2.7.4R',
      bookRef: 'Unit 2 · 2.7 · Lesson A · Speaking · Report – mediation',
      type: 'discuss',
      title: 'Report – mediation',
      instruction: 'Tell the class about the timetable you mediated. This is the second unit of '
  + 'this book, and the mediation task comes back in every unit — so listen for '
  + 'what other people put first.',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class about the timetable you mediated. This is the second '
          + 'unit of this book, and the mediation task comes back in every unit — '
          + 'so listen for what other people put first. (The dashes are blanks '
          + 'the learner fills in with their own workplace. Judge what they wrote '
          + 'in them, not the blanks.)',
        grammar: 'Mediating – saying what a timetable says',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (2.7) teaches: '
          + 'Mediating – saying what a timetable says. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – saying what a timetable says.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'saying',
        'timetable',
        'give',
        'important',
        'thing',
        'first',
        'line',
        'paper',
        'colleague'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – saying what a timetable says.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '2.7.5',
      bookRef: 'Unit 2 · 2.7 · Lesson B · Writing · Read – exam practice (A2 Key Reading Part 1)',
      type: 'discuss',
      title: 'Read – exam practice (A2 Key Reading Part 1)',
      instruction: 'Read the six short workplace texts. For each one, choose A, B or C.',
      passage: {
        title: 'From the book',
        html: '<p><b>1</b> <i>Meeting Monday 8.30 — NOT 10.00.</i> <b>A</b> The '
          + 'meeting is earlier. <b>B</b> The meeting is later. <b>C</b> There is '
          + 'no meeting.</p><p><b>2</b> <i>Stock figures to accounts before the '
          + 'meeting, please.</i> <b>A</b> Send them after the meeting. <b>B</b> '
          + 'Send them on Monday morning. <b>C</b> Send them before Monday '
          + '8.30.</p><p><b>3</b> <i>Office closed Thursday pm — inventory.</i> '
          + '<b>A</b> The office is shut all Thursday. <b>B</b> The office shuts '
          + 'at midday Thursday. <b>C</b> The office is open on Thursday '
          + 'afternoon.</p><p><b>4</b> <i>Nour — Mr Tarabishi coming Tuesday '
          + '10.00. — K.A.</i> <b>A</b> Telephone Mr Tarabishi on Tuesday. '
          + '<b>B</b> Mr Tarabishi will visit on Tuesday morning. <b>C</b> Mr '
          + 'Tarabishi came on Tuesday.</p><p><b>5</b> <i>Invoices signed by Wed '
          + '15.00.</i> <b>A</b> Sign the invoices before three on Wednesday. '
          + '<b>B</b> The invoices arrive on Wednesday. <b>C</b> Wednesday is a '
          + 'holiday.</p><p><b>6</b> <i>Counter closes 2 pm Thursdays from '
          + 'April.</i> <b>A</b> The counter is closed on Thursdays. <b>B</b> The '
          + 'counter shuts early on Thursdays. <b>C</b> The counter opens at 2 on '
          + 'Thursdays.</p><h4>Writer\'s box</h4><p><b>A2 Key Writing Part 6 — a '
          + 'short message (25 words or more).</b> The task gives you '
          + '<b>three</b> things to write about. All three must be there, or you '
          + 'lose marks even if your English is perfect.</p><p><b>Shape:</b> '
          + 'greeting → the three points, one short sentence each → a friendly '
          + 'close and your name.</p><p>For a <b>change of time</b>, the three '
          + 'points are nearly always: the <b>new</b> time · what it was '
          + '<b>before</b> · what the person must <b>do</b>.</p><p>⚠ Count the '
          + 'three points <b>before</b> you write, and tick them off '
          + '<b>after</b>.</p>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Both sides: your lines, then the other person\'s. Alone, the '
              + 'engine is the other person - write what it said.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '2.7.6',
      bookRef: 'Unit 2 · 2.7 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a message to Abu Yasser. Say: <b>(1)</b> the Monday meeting is at 8.30 '
  + 'now, <b>(2)</b> it was at 10.00 before, <b>(3)</b> he must give the stock '
  + 'figures to accounts on Sunday evening. Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['mediating',
        'saying',
        'timetable',
        'give',
        'important',
        'thing',
        'first',
        'line']
      },
      coach: {
        title: 'What to include',
        task: 'Write a message to Abu Yasser. Say: (1) the Monday meeting is at 8.30 now, '
  + '(2) it was at 10.00 before, (3) he must give the stock figures to accounts '
  + 'on Sunday evening. Use the frame.',
        criteria: [{ t: 'A2 Key Writing Part 6 — a short message (25 words or more). The '
              + 'task gives you three things to write about. All three must be '
              + 'there, or you lose marks even if your English is perfect.' },
            { t: 'Shape: greeting → the three points, one short sentence each → a '
              + 'friendly close and your name.' },
            { t: 'For a change of time, the three points are nearly always: the '
              + 'new time · what it was before · what the person must do.' },
            { t: '⚠ Count the three points before you write, and tick them off after.' }]
      },
      aiCheck: {
        task: 'Write a message to Abu Yasser. Say: (1) the Monday meeting is at '
          + '8.30 now, (2) it was at 10.00 before, (3) he must give the stock '
          + 'figures to accounts on Sunday evening. Use the frame.',
        grammar: 'Mediating – saying what a timetable says',
        must: ['A2 Key Writing Part 6 — a short message (25 words or more). The task '
          + 'gives you three things to write about. All three must be there, or '
          + 'you lose marks even if your English is perfect.',
        'Shape: greeting → the three points, one short sentence each → a '
          + 'friendly close and your name.',
        'For a change of time, the three points are nearly always: the new '
          + 'time · what it was before · what the person must do.',
        '⚠ Count the three points before you write, and tick them off after.'],
        vocab: ['mediating',
        'saying',
        'timetable',
        'give',
        'important',
        'thing',
        'first',
        'line',
        'paper',
        'colleague']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '2.7.6P',
      bookRef: 'Unit 2 · 2.7 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Count your partner\'s three points. Tick each one.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Point</th><th>In the message? ✓ / '
          + '✗</th></tr><tr><td>1 The meeting is at 8.30 '
          + 'now</td><td>&nbsp;</td></tr><tr><td>2 It was at 10.00 '
          + 'before</td><td>&nbsp;</td></tr><tr><td>3 Stock figures on Sunday '
          + 'evening</td><td>&nbsp;</td></tr><tr><td>25 words or '
          + 'more</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Count your partner\'s three points. Tick each one.',
        grammar: 'Mediating – saying what a timetable says',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (2.7) '
          + 'teaches: Mediating – saying what a timetable says. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        must: ['A2 Key Writing Part 6 — a short message (25 words or more). The task '
          + 'gives you three things to write about. All three must be there, or '
          + 'you lose marks even if your English is perfect.',
        'Shape: greeting → the three points, one short sentence each → a '
          + 'friendly close and your name.',
        'For a change of time, the three points are nearly always: the new '
          + 'time · what it was before · what the person must do.',
        '⚠ Count the three points before you write, and tick them off after.'],
        vocab: ['mediating',
        'saying',
        'timetable',
        'give',
        'important',
        'thing',
        'first',
        'line',
        'paper',
        'colleague'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      ref: '2.7.7',
      bookRef: 'Unit 2 · 2.7 · Lesson B · Writing · Write freely – exam practice (A2 Key '
  + 'Writing Part 6)',
      type: 'writer',
      title: 'Write freely – exam practice (A2 Key Writing Part 6)',
      kind: 'model',
      instruction: 'Your English class moves to a new day and time. Write a message to a '
  + 'classmate who was absent (25 words or more). Say: <b>(1)</b> the new day and '
  + 'time, <b>(2)</b> where the class is now, <b>(3)</b> one thing to bring.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      passage: {
        title: 'Homework',
        html: '<p>Write your final message. Then write the <b>reply</b> your '
          + 'classmate would send (20+ words), e.g. <i>Thanks! Is the new room on '
          + 'the same floor? I\'ll bring the dictionary.</i></p>'
      },
      meter: {
        label: 'words from this lesson',
        words: ['mediating',
        'saying',
        'timetable',
        'give',
        'important',
        'thing',
        'first',
        'line']
      },
      coach: {
        title: 'What to include',
        task: 'Your English class moves to a new day and time. Write a message to a '
  + 'classmate who was absent (25 words or more). Say: (1) the new day and time, '
  + '(2) where the class is now, (3) one thing to bring.',
        criteria: [{ t: 'A2 Key Writing Part 6 — a short message (25 words or more). The '
              + 'task gives you three things to write about. All three must be '
              + 'there, or you lose marks even if your English is perfect.' },
            { t: 'Shape: greeting → the three points, one short sentence each → a '
              + 'friendly close and your name.' },
            { t: 'For a change of time, the three points are nearly always: the '
              + 'new time · what it was before · what the person must do.' },
            { t: '⚠ Count the three points before you write, and tick them off after.' }]
      },
      aiCheck: {
        task: 'Your English class moves to a new day and time. Write a message to a '
          + 'classmate who was absent (25 words or more). Say: (1) the new day '
          + 'and time, (2) where the class is now, (3) one thing to bring.',
        grammar: 'Mediating – saying what a timetable says',
        must: ['A2 Key Writing Part 6 — a short message (25 words or more). The task '
          + 'gives you three things to write about. All three must be there, or '
          + 'you lose marks even if your English is perfect.',
        'Shape: greeting → the three points, one short sentence each → a '
          + 'friendly close and your name.',
        'For a change of time, the three points are nearly always: the new '
          + 'time · what it was before · what the person must do.',
        '⚠ Count the three points before you write, and tick them off after.'],
        vocab: ['mediating',
        'saying',
        'timetable',
        'give',
        'important',
        'thing',
        'first',
        'line',
        'paper',
        'colleague']
      }
    },
    {
      id: 'c13',
      ref: '2.7.✓',
      bookRef: 'Unit 2 · 2.7 · Lesson B · Writing · Unit 2 check',
      type: 'scene',
      title: 'Unit 2 check',
      kind: 'own',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-7-b'
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '2.7.✓',
      bookRef: 'Unit 2 · 2.7 · Lesson B · Writing · Unit 2 check',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'The notice says: With effect from Sunday, the weekly stock '
              + 'report must be submitted to the accounts department prior to the '
              + 'management meeting. Say it in easy English, in one sentence.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
