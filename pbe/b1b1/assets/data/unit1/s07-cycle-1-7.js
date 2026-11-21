/* Unit 1 · cycle 1.7 — Review & Mediate: who is on this account?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE5.page('u1-s07', {
  book: { source: 'Proactive Business English · B1 Book 1', ref: 'Unit 1 · 1.7', part: '1.7',
          section: '7', lesson: 'Review & Mediate: who is on this account?', title: 'Review & Mediate: who is on this account?' },
  objective: 'Review & Mediate: who is on this account, and who is not',
  study: {
    minutes: 96,
    objective: 'Review & Mediate: who is on this account, and who is not',
    steps: [{
          title: 'Get ready – Unit 1 quiz',
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
          title: 'Read – exam practice (B1 Business Preliminary Reading Part 1)',
          mins: 10,
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
          title: 'Write freely',
          mins: 12,
          why: 'The same writing, without the model.',
          todo: 'Write first, check the model afterwards. Looking first turns it '
            + 'into copying.',
          alone: 'Set a timer for ten minutes and do not stop to correct anything.'
        },
        {
          title: 'Unit 1 check',
          mins: 15,
          why: 'Finding out what stuck.',
          todo: 'Do it without looking back at the unit. Then look back at whatever '
            + 'you got wrong - that is the list of what to study again.',
          alone: 'Do it cold. The looking-back is the exercise.'
        }]
  },
  worked: {
    task: 'Exam task. A new arrangement with a supplier has been agreed and your '
      + 'colleagues need to know. 35 to 45 words.',
    weak: 'We have agreed something new with the supplier. Please follow it.',
    change: ['Name WHAT changed. An internal message that does not say what is '
          + 'different makes every reader come and ask.',
        'Say what they must now do, and from when - a change with no start '
          + 'date is a change nobody begins.'],
    better: 'From 1 October we order from Shamsi quarterly, not monthly: 300 rolls, '
      + '3% below the hundred price. Please put all wrap requests to me by the '
      + '20th of the month before. Do not ring Aleppo direct.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '1.7.1',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Get ready – Unit 1 quiz',
      type: 'discuss',
      title: 'Get ready – Unit 1 quiz',
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
      ref: '1.7.2',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-7',
      passage: {
        title: 'Language box',
        html: '<p><b>Mediating – explaining a page to the person who has to live '
          + 'with it</b></p><table class=\'bk\'><tr><th>To orient them</th><th>To '
          + 'find the gap</th><th>To keep it true</th></tr><tr><td>You are on it, '
          + 'as a job rather than a name.</td><td>What do they actually ask '
          + 'you?</td><td>The middle column is the part that '
          + 'lasts.</td></tr><tr><td>Read the row above it.</td><td>Then that is '
          + 'a fault on the page.</td><td>The names are in pencil for that '
          + 'reason.</td></tr></table><p>⚠ <b>A page is explained by having '
          + 'somebody use it, not by reading it to them.</b> Ask what actually '
          + 'arrives at their desk and compare it with the page; the gap is the '
          + 'improvement, and they find it, not you.</p><p>⚠ <b>Say which column '
          + 'lasts.</b> A colleague who thinks the whole page is permanent will '
          + 'not correct it; a colleague who knows the names are in pencil '
          + 'will.</p><p>⚠ When somebody says <i>I am not on it</i>, they are '
          + 'usually telling you about a <b>route that exists and is not written '
          + 'down</b>. Hear it as information, not as a complaint about '
          + 'status.</p><p><b>Practise:</b> A colleague says they are not on the '
          + 'contact page. Orient them, ask what actually reaches them, and add '
          + 'the row they have just told you about.</p><p><b>Useful phrases:</b> '
          + 'You are on it, as a job rather than a name. · What do they actually '
          + 'ask you? · Then that is a fault on the page. · the middle column is '
          + 'the part that lasts · Write it on the sheet and I will put it on '
          + 'properly.</p><p><b>Pronunciation – reading a page aloud for '
          + 'somebody.</b> 🔊 <b>Track 1.14</b> Listen to a row read aloud for a '
          + 'colleague: the three cells separated by clear pauses, the role '
          + 'stressed. Reading a table at the speed of speech makes it unusable. '
          + 'Repeat two rows.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Fadi misread on the page?',
            options: [{
              t: 'he reads the roles as a demotion',
              ok: true
            },
            {
              t: 'the telephone numbers',
              ok: false
            },
            {
              t: 'the Saturday arrangement',
              ok: false
            }]
          },
        {
            q: 'Which column of the page is in pencil, and why?',
            options: [{
              t: 'the names, because they change',
              ok: true,
              why: '"The right-hand column is today\'s names and it is in pencil '
                + 'for that reason." In a year two will be wrong.'
            },
            {
              t: 'the roles, because they are today\'s',
              ok: false,
              why: 'The role column is the part that LASTS - that is the whole '
                + 'design of the page.'
            },
            {
              t: 'the rows, because Fadi is not on the page',
              ok: false,
              why: 'Fadi IS on it, as the warehouse. His complaint is that he is '
                + 'on it as a job and not as a name.'
            }],
            evidence: 'Nour\'s answer about the middle and right-hand columns'
          },
        {
            q: 'What did Fadi\'s reading of the page actually find?',
            options: [{
              t: 'a missing row - a driver at the gate with a question',
              ok: true,
              why: 'Drivers ask him where to back up, so "a driver at the gate '
                + 'with a question - the warehouse - Abu Yasser" should be a row. '
                + 'The page was improved by somebody who uses it.'
            },
            {
              t: 'that his name was spelled wrongly',
              ok: false,
              why: 'Nothing in the exchange is about spelling. The fault is a '
                + 'route that the page does not carry at all.'
            },
            {
              t: 'that the warehouse row should come out',
              ok: false,
              why: 'The warehouse row is right and stays. A row is ADDED, not removed.'
            }],
            evidence: 'what Nour thanks him for'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'own',
      ref: '1.7.2',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'A colleague says they are not on the contact page. Orient them, '
              + 'ask what actually reaches them, and add the row they have just '
              + 'told you about.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '1.7.2',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does Nour say the middle column is for?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>Nour</i> in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What is the one line on the page that is about Fadi?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with <i>Fadi</i> in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '1.7.3',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A has a page; B cannot find themselves on it. A orients them, '
  + 'finds the missing route, and agrees the correction. Then swap.',
      scene: 'u1-1-7-pair',
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
        head: ['Pair 1 — for A',
        'Pair 2 — for B'],
        rows: [['B is a driver who is not a route on the page, and is asked '
            + 'constantly at the gate where to back up and whether we have '
            + 'signed. The missing row is <i>a driver at the gate with a question '
            + '→ the warehouse</i>.',
          'B is the accountant, who is on the page for invoices but is '
            + 'telephoned all day about chasing payment, which is sales. The '
            + 'missing row is a route that should not exist: <i>chasing payment → '
            + 'sales</i>, and somebody has to tell the customers.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '1.7.3R',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out the conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ as a job rather than a name</td><td>☐ '
          + 'What do they actually ask you?</td><td>☐ that is a fault on the '
          + 'page</td><td>☐ the middle column lasts</td><td>☐ in pencil, for that '
          + 'reason</td><td>☐ the page improved by somebody who uses '
          + 'it</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the row that was missing and say whether it is a '
              + 'route that should exist or one that should be closed. Both are '
              + 'findings, and the second kind is the rarer and more valuable',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Review & Mediate: who is on this '
        + 'account, and who is not.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '1.7.4',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Your teacher gives you a contact and routing page. Read it silently. Then '
  + 'explain it to two colleagues: one who cannot find themselves on it, and one '
  + 'who has never seen it and is about to be sent it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Who I told</th><th>What they said about '
          + 'it</th><th>The row that was missing or '
          + 'wrong</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
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
        task: 'Your teacher gives you a contact and routing page. Read it silently. '
          + 'Then explain it to two colleagues: one who cannot find themselves on '
          + 'it, and one who has never seen it and is about to be sent it.',
        grammar: 'Mediating – explaining a page to the person who has to live with it',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (1.7) teaches: Mediating – explaining a page to the person who '
          + 'has to live with it. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – explaining a page to the '
          + 'person who has to live with it.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'explaining',
        'page',
        'person',
        'live',
        'explained',
        'somebody',
        'reading',
        'actually',
        'arrives']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Review & Mediate: who is on this '
        + 'account, and who is not.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'model',
      ref: '1.7.4R',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Report – mediation',
      type: 'discuss',
      title: 'Report – mediation',
      instruction: 'Tell the class about the page. This is the first unit of this book, and the '
  + 'unwritten thing is the one the whole unit has been circling: a page of names '
  + 'tells a stranger who to ask for and goes out of date; a page of roles lasts '
  + 'and cannot be used; and nobody writes both because each half looks complete '
  + 'on its own.',
      questions: [{
            q: 'Write what you told the class.',
            model: 'This is the first unit of this book, and the unwritten thing is '
              + 'the one the whole unit has been circling: a page of names tells '
              + 'a stranger who to ask for and goes out of date; a page of roles '
              + 'lasts and cannot be used; and almost nobody writes both, because '
              + 'each half looks complete on its own. It is worth saying out loud '
              + 'at the end of the unit, because every document in Unit 1 — the '
              + 'who-we-are page, the contact page, the routing page, the card — '
              + 'is an attempt at the same problem from a different side',
            minWords: 6,
            rows: 3,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class about the page. This is the first unit of this book, '
          + 'and the unwritten thing is the one the whole unit has been circling: '
          + 'a page of names tells a stranger who to ask for and goes out of '
          + 'date; a page of roles lasts and cannot be used; and nobody writes '
          + 'both because each half looks complete on its own.',
        grammar: 'Mediating – explaining a page to the person who has to live with it',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (1.7) teaches: '
          + 'Mediating – explaining a page to the person who has to live with it. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – explaining a page to the '
          + 'person who has to live with it.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'explaining',
        'page',
        'person',
        'live',
        'explained',
        'somebody',
        'reading',
        'actually',
        'arrives'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Review & Mediate: who is on this '
        + 'account, and who is not.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '1.7.5',
      bookRef: 'Unit 1 · 1.7 · Lesson B · Writing · Read – exam practice (B1 Business '
  + 'Preliminary Reading Part 1)',
      type: 'discuss',
      title: 'Read – exam practice (B1 Business Preliminary Reading Part 1)',
      instruction: '⚠ About the exam practice in this book. B1 Business Preliminary has seven '
  + 'Reading parts, and each unit of this book practises a different one, so that '
  + 'by Unit 12 you have met every part twice. This unit is Part 1: short notices '
  + 'and messages. For each question, choose A, B or C.',
      passage: {
        title: 'From the book',
        html: '<p><b>1</b> <i><b>JABER FREIGHT — BOOKINGS BY EMAIL ONLY.</b> '
          + 'Telephone bookings cannot be guaranteed.</i> <b>A</b> Telephone to '
          + 'confirm an email booking. <b>B</b> A booking made by telephone may '
          + 'not be honoured. <b>C</b> Bookings are not taken.</p><p><b>2</b> '
          + '_Changes to a collection: <b>by 4 p.m. the day before.</b> After '
          + 'that we will try. <b>A</b> Changes after four are impossible. '
          + '<b>B</b> Changes after four are not guaranteed. <b>C</b> Four '
          + 'o\'clock is the collection time.</p><p><b>3</b> <i>Nour Mansour — '
          + 'point of contact, both sites. Anything you are not sure about.</i> '
          + '<b>A</b> Write to her only about the Mezzeh site. <b>B</b> She is '
          + 'the person to ask when you do not know who to ask. <b>C</b> She '
          + 'deals only with certainties.</p><p><b>4</b> <i>Abu Yasser signs '
          + 'nothing he has not counted.</i> <b>A</b> He refuses to sign. '
          + '<b>B</b> His signature means a count was made. <b>C</b> Somebody '
          + 'else counts.</p><p><b>5</b> <i>11 a.m. booked = 11 to 1 in '
          + 'practice.</i> <b>A</b> The lorry comes at eleven. <b>B</b> Eleven is '
          + 'the earliest it may come. <b>C</b> The lorry comes at '
          + 'one.</p><p><b>6</b> <i>Mr Ayoub approves anything over 500,000.</i> '
          + '<b>A</b> He approves every order. <b>B</b> Orders under 500,000 do '
          + 'not need him. <b>C</b> He approves nothing.</p><h4>Writer\'s '
          + 'box</h4><p><b>B1 Business Preliminary Writing Part 1 — an internal '
          + 'message, 35 to 45 words.</b> An instruction or a piece of '
          + 'information for a colleague, with <b>three content points</b>, all '
          + 'three present.</p><p>For a routing message the three points are '
          + 'nearly always: <b>what has changed</b> · <b>what the reader must now '
          + 'do</b> · <b>from when</b>.</p><p>⚠ <b>In forty words there is no '
          + 'room for a reason</b>, and the examination does not ask for one. '
          + 'That is the examination; it is not this book. Every other writing '
          + 'task in this unit asked for fifty words or more and a reason, and '
          + 'Unit 12 will ask for a hundred and forty.</p><p>⚠ Begin with the '
          + 'change, not with a greeting. <i>From Monday, all freight bookings go '
          + 'by email</i> uses six of your forty words and does the whole '
          + 'job.</p>'
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
      ref: '1.7.6',
      bookRef: 'Unit 1 · 1.7 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: '<b>Exam task — Writing Part 1.</b> A new arrangement has been agreed with a '
  + 'supplier and your colleagues need to know. Write an internal message (<b>35 '
  + 'to 45 words</b>). Say <b>what has changed</b>, <b>what they must now do</b>, '
  + 'and <b>from when</b>.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['mediating',
        'explaining',
        'page',
        'person',
        'live',
        'explained',
        'somebody',
        'reading']
      },
      coach: {
        title: 'What to include',
        task: 'Exam task — Writing Part 1. A new arrangement has been agreed with a '
  + 'supplier and your colleagues need to know. Write an internal message (35 to '
  + '45 words). Say what has changed, what they must now do, and from when.',
        criteria: [{ t: 'B1 Business Preliminary Writing Part 1 — an internal message, 35 '
              + 'to 45 words. An instruction or a piece of information for a '
              + 'colleague, with three content points, all three present.' },
            { t: 'For a routing message the three points are nearly always: what '
              + 'has changed · what the reader must now do · from when.' },
            { t: '⚠ In forty words there is no room for a reason, and the '
              + 'examination does not ask for one. That is the examination; it is '
              + 'not this book. Every other writing task in this unit asked for '
              + 'fifty words or more and a reason, and Unit 12 will ask for a '
              + 'hundred and forty.' },
            { t: '⚠ Begin with the change, not with a greeting. From Monday, all '
              + 'freight bookings go by email uses six of your forty words and '
              + 'does the whole job.' }]
      },
      aiCheck: {
        task: 'Exam task — Writing Part 1. A new arrangement has been agreed with a '
          + 'supplier and your colleagues need to know. Write an internal message '
          + '(35 to 45 words). Say what has changed, what they must now do, and '
          + 'from when.',
        grammar: 'Mediating – explaining a page to the person who has to live with it',
        must: ['B1 Business Preliminary Writing Part 1 — an internal message, 35 to '
          + '45 words. An instruction or a piece of information for a colleague, '
          + 'with three content points, all three present.',
        'For a routing message the three points are nearly always: what has '
          + 'changed · what the reader must now do · from when.',
        '⚠ In forty words there is no room for a reason, and the examination '
          + 'does not ask for one. That is the examination; it is not this book. '
          + 'Every other writing task in this unit asked for fifty words or more '
          + 'and a reason, and Unit 12 will ask for a hundred and forty.',
        '⚠ Begin with the change, not with a greeting. From Monday, all '
          + 'freight bookings go by email uses six of your forty words and does '
          + 'the whole job.'],
        vocab: ['mediating',
        'explaining',
        'page',
        'person',
        'live',
        'explained',
        'somebody',
        'reading',
        'actually',
        'arrives']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '1.7.6P',
      bookRef: 'Unit 1 · 1.7 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Count the three points and the words. Tick ✓ or cross ✗, and '
  + 'name the criterion each time.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>What has changed, in the first '
          + 'line</td><td>&nbsp;</td></tr><tr><td>What the reader must now '
          + 'do</td><td>&nbsp;</td></tr><tr><td>From '
          + 'when</td><td>&nbsp;</td></tr><tr><td>35 to 45 words — count '
          + 'them</td><td>&nbsp;</td></tr></table>'
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
        task: 'Swap books. Count the three points and the words. Tick ✓ or cross ✗, '
          + 'and name the criterion each time.',
        grammar: 'Mediating – explaining a page to the person who has to live with it',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (1.7) '
          + 'teaches: Mediating – explaining a page to the person who has to live '
          + 'with it. Judge the language against THAT and against nothing the '
          + 'course has not taught yet.',
        must: ['B1 Business Preliminary Writing Part 1 — an internal message, 35 to '
          + '45 words. An instruction or a piece of information for a colleague, '
          + 'with three content points, all three present.',
        'For a routing message the three points are nearly always: what has '
          + 'changed · what the reader must now do · from when.',
        '⚠ In forty words there is no room for a reason, and the examination '
          + 'does not ask for one. That is the examination; it is not this book. '
          + 'Every other writing task in this unit asked for fifty words or more '
          + 'and a reason, and Unit 12 will ask for a hundred and forty.',
        '⚠ Begin with the change, not with a greeting. From Monday, all '
          + 'freight bookings go by email uses six of your forty words and does '
          + 'the whole job.'],
        vocab: ['mediating',
        'explaining',
        'page',
        'person',
        'live',
        'explained',
        'somebody',
        'reading',
        'actually',
        'arrives'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      ref: '1.7.7',
      bookRef: 'Unit 1 · 1.7 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write your own entry for your workplace\'s contact page, in the three lines '
  + 'of 1.2, and then a paragraph about it (<b>100 to 140 words</b>): what you '
  + 'handle, what you are answerable for, what you only help with, and the one '
  + 'item you think is in the wrong column.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then show your three lines to the person '
          + 'who would be asked if you got something wrong, and write down what '
          + 'they moved and why (50+ words).</p>'
      },
      meter: {
        label: 'words from this lesson',
        words: ['mediating',
        'explaining',
        'page',
        'person',
        'live',
        'explained',
        'somebody',
        'reading']
      },
      coach: {
        title: 'What to include',
        task: 'Write your own entry for your workplace\'s contact page, in the three lines '
  + 'of 1.2, and then a paragraph about it (100 to 140 words): what you handle, '
  + 'what you are answerable for, what you only help with, and the one item you '
  + 'think is in the wrong column.',
        criteria: [{ t: 'B1 Business Preliminary Writing Part 1 — an internal message, 35 '
              + 'to 45 words. An instruction or a piece of information for a '
              + 'colleague, with three content points, all three present.' },
            { t: 'For a routing message the three points are nearly always: what '
              + 'has changed · what the reader must now do · from when.' },
            { t: '⚠ In forty words there is no room for a reason, and the '
              + 'examination does not ask for one. That is the examination; it is '
              + 'not this book. Every other writing task in this unit asked for '
              + 'fifty words or more and a reason, and Unit 12 will ask for a '
              + 'hundred and forty.' },
            { t: '⚠ Begin with the change, not with a greeting. From Monday, all '
              + 'freight bookings go by email uses six of your forty words and '
              + 'does the whole job.' }]
      },
      aiCheck: {
        task: 'Write your own entry for your workplace\'s contact page, in the '
          + 'three lines of 1.2, and then a paragraph about it (100 to 140 '
          + 'words): what you handle, what you are answerable for, what you only '
          + 'help with, and the one item you think is in the wrong column.',
        grammar: 'Mediating – explaining a page to the person who has to live with it',
        must: ['B1 Business Preliminary Writing Part 1 — an internal message, 35 to '
          + '45 words. An instruction or a piece of information for a colleague, '
          + 'with three content points, all three present.',
        'For a routing message the three points are nearly always: what has '
          + 'changed · what the reader must now do · from when.',
        '⚠ In forty words there is no room for a reason, and the examination '
          + 'does not ask for one. That is the examination; it is not this book. '
          + 'Every other writing task in this unit asked for fifty words or more '
          + 'and a reason, and Unit 12 will ask for a hundred and forty.',
        '⚠ Begin with the change, not with a greeting. From Monday, all '
          + 'freight bookings go by email uses six of your forty words and does '
          + 'the whole job.'],
        vocab: ['mediating',
        'explaining',
        'page',
        'person',
        'live',
        'explained',
        'somebody',
        'reading',
        'actually',
        'arrives']
      }
    },
    {
      id: 'c13',
      ref: '1.7.✓',
      bookRef: 'Unit 1 · 1.7 · Lesson B · Writing · Unit 1 check',
      type: 'scene',
      title: 'Unit 1 check',
      kind: 'own',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-7-b'
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '1.7.✓',
      bookRef: 'Unit 1 · 1.7 · Lesson B · Writing · Unit 1 check',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'A colleague says they are not on the contact page. Orient them, '
              + 'ask what actually reaches them, and add the row they have just '
              + 'told you about.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
