/* Unit 7 · cycle 7.7 — Review & Mediate: what does the invitation say?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u7-s07', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 7 · 7.7', part: '7.7',
          section: '7', lesson: 'Review & Mediate: what does the invitation say?', title: 'Review & Mediate: what does the invitation say?' },
  objective: 'Review & Mediate: tell a colleague what a meeting invitation says',
  study: {
    minutes: 95,
    objective: 'Review & Mediate: tell a colleague what a meeting invitation says',
    steps: [{
          title: 'Get ready – Unit 7 quiz',
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
          title: 'Unit 7 check',
          mins: 15,
          why: 'Finding out what stuck.',
          todo: 'Do it without looking back at the unit. Then look back at whatever '
            + 'you got wrong - that is the list of what to study again.',
          alone: 'Do it cold. The looking-back is the exercise.'
        }]
  },
  worked: {
    task: 'Write what the invitation asks the reader to do, and by when.',
    weak: 'There is an invitation.',
    change: ['Give the day, the hour and the place - an invitation reported '
          + 'without them cannot be acted on.',
        'Say what the reader must do about it, and by which day.'],
    better: 'It\'s the opening on Thursday the 14th at six, at the Homs branch. They '
      + 'want an answer by Sunday - that\'s the part people get wrong.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '7.7.1',
      bookRef: 'Unit 7 · 7.7 · Lesson A · Speaking · Get ready – Unit 7 quiz',
      type: 'discuss',
      title: 'Get ready – Unit 7 quiz',
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
      ref: '7.7.2',
      bookRef: 'Unit 7 · 7.7 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u7-7-7',
      passage: {
        title: 'Language box',
        html: '<p><b>Mediating – a meeting invitation, for somebody who must '
          + 'act</b></p><table class=\'bk\'><tr><th>To calm and start</th><th>To '
          + 'give what matters</th><th>To warn</th></tr><tr><td>You\'re not in '
          + 'trouble.</td><td>When: <span class="blank"></span> , <span '
          + 'class="blank"></span> . Where: <span class="blank"></span> '
          + '.</td><td>One more thing: bring <span class="blank"></span> '
          + '.</td></tr><tr><td>I\'ll tell you what it means <b>for '
          + 'you</b>.</td><td>What it\'s about: <span class="blank"></span> . '
          + 'Who: <span class="blank"></span> .</td><td>That\'s the part people '
          + 'get wrong.</td></tr><tr><td>It\'s a <span class="blank"></span> '
          + '.</td><td>"Apologies" only means <span class="blank"></span> '
          + '.</td><td>Not <span class="blank"></span> — <span '
          + 'class="blank"></span> .</td></tr></table><p>⚠ When a document '
          + '<b>frightens</b> somebody, deal with the fear before the facts: '
          + '<i>you\'re not in trouble</i>. A worried listener does not hear a '
          + 'time.</p><p>⚠ Translate the <b>office word</b>, don\'t repeat it. '
          + '<i>Apologies</i> means <i>tell me if you can\'t come</i>. '
          + '<i>Attendance</i> means <i>who is coming</i>. The words are the '
          + 'reason they asked you.</p><p>⚠ End with what to <b>bring</b> and '
          + 'what <b>not</b> to bring. The commonest meeting failure is the right '
          + 'people with the wrong paper.</p><p><b>Practise:</b> The invitation '
          + 'says: <i>Attendance is required. Please forward apologies to the '
          + 'chair in advance. Agenda items to be submitted 24 hours prior.</i> '
          + 'Say it in easy English for a colleague.</p><p><b>Useful phrases:</b> '
          + 'You\'re not in trouble. · I\'ll tell you what it means for you. · It '
          + 'only means… · One more thing: bring… · Not… — … · That\'s the part '
          + 'people get wrong.</p><p><b>Pronunciation – calming, then '
          + 'informing.</b> 🔊 <b>Track 7.14</b> Listen. The calming sentence is '
          + '<b>low and slow</b>; the facts that follow are at a normal speed. '
          + 'Repeat the four pairs.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Abu Yasser want to know?',
            options: [{
              t: 'whether he must come',
              ok: false,
              why: 'This is his first worry, which is why it stands out - but he '
                + 'asks again later.'
            },
            {
              t: 'what the meeting is about',
              ok: false,
              why: 'This is real too, and it is the second half, not the whole.'
            },
            {
              t: 'both',
              ok: true,
              why: 'He asks whether he is in trouble and has to come, and then '
                + 'what it is about.'
            }],
            evidence: 'his first line and his middle question - he asks two different things'
          },
        {
            q: 'Books closed. Listen. What does "apologies" mean on the invitation?',
            options: [{
              t: 'tell me beforehand if you cannot come',
              ok: true,
              why: 'She says it plainly, and adds that it is not an apology for '
                + 'anything he has done.'
            },
            {
              t: 'that he has done something wrong',
              ok: false,
              why: 'Exactly what he fears, and exactly what she rules out.'
            },
            {
              t: 'that the meeting may be cancelled',
              ok: false,
              why: 'Nothing says the meeting is in doubt.'
            }],
            evidence: 'Nour\'s answer to Abu Yasser\'s question'
          },
        {
            q: 'What does Nour tell him to bring?',
            options: [{
              t: 'the book with the pencil marks, not the printout',
              ok: true,
              why: 'And she names it as the part people get wrong, which is why '
                + 'she says it last.'
            },
            {
              t: 'the computer figures',
              ok: false,
              why: 'The opposite - she warns against exactly that.'
            },
            {
              t: 'the stock card',
              ok: false,
              why: 'The stock card is the SUBJECT of the meeting, not the thing he '
                + 'carries in.'
            }],
            evidence: 'her last line'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'own',
      ref: '7.7.2',
      bookRef: 'Unit 7 · 7.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'The invitation says: Attendance is required. Please forward '
              + 'apologies to the chair in advance. Agenda items to be submitted '
              + '24 hours prior. Say it in easy English for a colleague.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '7.7.2',
      bookRef: 'Unit 7 · 7.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Where is the meeting, and when?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *meeting* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What must he bring?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with *bring* in it. Play it again '
              + 'with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '7.7.3',
      bookRef: 'Unit 7 · 7.7 · Lesson A · Speaking · Practise',
      type: 'discuss',
      title: 'Practise',
      instruction: 'Work in pairs. A reads invitation 1 silently and tells B what it means for '
  + 'B. B closes the book. Then swap with invitation 2.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Invitation 1 — for A</th><th>Invitation '
          + '2 — for B</th></tr><tr><td><b>MEETING NOTICE.</b> Subject: stock '
          + 'reconciliation. Venue: small meeting room, 2nd floor. Date/time: '
          + 'Thursday 20 April, 08.00–09.00. Attendance: K. Ayoub (chair), Y. '
          + 'Khalil, N. Mansour. <i>Apologies to the chair in advance. Attendees '
          + 'are requested to bring source documentation, not system printouts. '
          + 'Agenda items to be submitted 24 hours prior.</i></td><td><b>TRAINING '
          + 'NOTICE.</b> Subject: fire safety refresher, mandatory for all '
          + 'warehouse personnel. Venue: the yard, by the green door. Date/time: '
          + 'Wednesday 26 April, 15.30, duration 45 minutes. <i>Non-attendance '
          + 'must be authorised by a supervisor. Personnel are reminded that '
          + 'high-visibility clothing is required. A register will be '
          + 'taken.</i></td></tr></table>'
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
      ref: '7.7.3R',
      bookRef: 'Unit 7 · 7.7 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs mediate their invitation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ You\'re not in trouble.</td><td>☐ what '
          + 'it means for you</td><td>☐ It only means…</td><td>☐ One more thing: '
          + 'bring…</td><td>☐ Not… — …</td><td>☐ people get '
          + 'wrong</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write time, place and the one thing to bring or wear. '
              + 'A speaker who says attendance, apologies or mandatory has not '
              + 'mediated: those three words are the task. Send them back with '
              + 'say it to somebody who has never been to a meeting',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – a meeting invitation, for '
        + 'somebody who must act.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '7.7.4',
      bookRef: 'Unit 7 · 7.7 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Your teacher gives you an invitation or a notice in formal English. Read it '
  + 'silently. Then tell two colleagues what it means for them. Do not show them '
  + 'the paper.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Who I told</th><th>When and '
          + 'where</th><th>What they must bring or '
          + 'do</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
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
        task: 'Your teacher gives you an invitation or a notice in formal English. '
          + 'Read it silently. Then tell two colleagues what it means for them. '
          + 'Do not show them the paper.',
        grammar: 'Mediating – a meeting invitation, for somebody who must act',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (7.7) teaches: Mediating – a meeting invitation, for somebody '
          + 'who must act. Judge the language against THAT and against nothing '
          + 'the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – a meeting invitation, for '
          + 'somebody who must act.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'meeting',
        'invitation',
        'somebody',
        'document',
        'frightens',
        'deal',
        'fear',
        'before',
        'facts']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – a meeting invitation, for '
        + 'somebody who must act.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'model',
      ref: '7.7.4R',
      bookRef: 'Unit 7 · 7.7 · Lesson A · Speaking · Report – mediation',
      type: 'discuss',
      title: 'Report – mediation',
      instruction: 'Tell the class about the invitation you mediated. This is the seventh unit '
  + 'of this book, and the mediation task comes back in every unit — so listen '
  + 'for the office word that was explained.',
      questions: [{
            q: 'Write what you told the class.',
            model: 'The office-word list so far — worth keeping on the wall and '
              + 'adding to until Unit 12: attendance (who is coming) · apologies '
              + '(tell them if you can\'t) · mandatory (you have to) · venue '
              + '(where) · prior to (before) · discrepancy (a difference) · '
              + 'dispatch (send out) · obstruct (block) · designated (the marked '
              + 'one) · due (must be paid by)',
            minWords: 6,
            rows: 3,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class about the invitation you mediated. This is the '
          + 'seventh unit of this book, and the mediation task comes back in '
          + 'every unit — so listen for the office word that was explained. (The '
          + 'dashes are blanks the learner fills in with their own workplace. '
          + 'Judge what they wrote in them, not the blanks.)',
        grammar: 'Mediating – a meeting invitation, for somebody who must act',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (7.7) teaches: '
          + 'Mediating – a meeting invitation, for somebody who must act. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – a meeting invitation, for '
          + 'somebody who must act.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'meeting',
        'invitation',
        'somebody',
        'document',
        'frightens',
        'deal',
        'fear',
        'before',
        'facts'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – a meeting invitation, for '
        + 'somebody who must act.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '7.7.5',
      bookRef: 'Unit 7 · 7.7 · Lesson B · Writing · Read – exam practice (A2 Key Reading Part 1)',
      type: 'discuss',
      title: 'Read – exam practice (A2 Key Reading Part 1)',
      instruction: 'Read the six short workplace texts. For each one, choose A, B or C.',
      passage: {
        title: 'From the book',
        html: '<p><b>1</b> <i>Meeting Thu 20, 08.00–09.00. Apologies to the chair '
          + 'in advance.</i> <b>A</b> Say sorry to the chair after the meeting. '
          + '<b>B</b> Tell the chair before if you cannot come. <b>C</b> The '
          + 'meeting is one hour late.</p><p><b>2</b> <i>Bring source '
          + 'documentation, not system printouts.</i> <b>A</b> Bring the original '
          + 'book or paper. <b>B</b> Print the figures from the computer. '
          + '<b>C</b> Bring nothing.</p><p><b>3</b> <i>Nour — can\'t do Thursday, '
          + 'I\'m in Homs. Wednesday pm possible. — F.T.</i> <b>A</b> He is free '
          + 'on Thursday. <b>B</b> He can meet on Wednesday afternoon. <b>C</b> '
          + 'He will not meet at all.</p><p><b>4</b> <i>Fire training Wed 26, '
          + '15.30, 45 min. Mandatory, warehouse staff.</i> <b>A</b> Warehouse '
          + 'staff must attend. <b>B</b> It lasts all afternoon. <b>C</b> It is '
          + 'for office staff.</p><p><b>5</b> <i>I\'d love to, but Mr Ayoub is in '
          + 'Aleppo that day. Tuesday 25 instead?</i> <b>A</b> Nobody is coming. '
          + '<b>B</b> One person is coming; another suggests a different day. '
          + '<b>C</b> The meeting is cancelled.</p><p><b>6</b> <i>Three options '
          + 'below — please tick the ones you CAN do, by Sunday.</i> <b>A</b> '
          + 'Choose one option only. <b>B</b> Mark every option that is possible '
          + 'for you. <b>C</b> Answer after Sunday.</p><h4>Writer\'s '
          + 'box</h4><p><b>A2 Key Writing Part 6 — a short message (25 words or '
          + 'more).</b> The task gives you <b>three</b> things to write about. '
          + 'All three must be there, or you lose marks even if your English is '
          + 'perfect.</p><p><b>Shape:</b> greeting → the three points, one short '
          + 'sentence each → a friendly close and your name.</p><p>For a message '
          + 'about a <b>meeting</b>, the three points are nearly always: <b>when '
          + 'and where</b> · <b>what it is about</b> · <b>one thing to bring or '
          + 'do beforehand</b>.</p><p>⚠ Count the three points <b>before</b> you '
          + 'write, and tick them off <b>after</b>.</p>'
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
      ref: '7.7.6',
      bookRef: 'Unit 7 · 7.7 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a message to Abu Yasser about the Thursday meeting. Say: <b>(1)</b> '
  + 'when and where it is, <b>(2)</b> what it is about, <b>(3)</b> that he must '
  + 'bring the stock book, not the printout. Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['mediating',
        'meeting',
        'invitation',
        'somebody',
        'document',
        'frightens',
        'deal',
        'fear']
      },
      coach: {
        title: 'What to include',
        task: 'Write a message to Abu Yasser about the Thursday meeting. Say: (1) when and '
  + 'where it is, (2) what it is about, (3) that he must bring the stock book, '
  + 'not the printout. Use the frame.',
        criteria: [{ t: 'A2 Key Writing Part 6 — a short message (25 words or more). The '
              + 'task gives you three things to write about. All three must be '
              + 'there, or you lose marks even if your English is perfect.' },
            { t: 'Shape: greeting → the three points, one short sentence each → a '
              + 'friendly close and your name.' },
            { t: 'For a message about a meeting, the three points are nearly '
              + 'always: when and where · what it is about · one thing to bring '
              + 'or do beforehand.' },
            { t: '⚠ Count the three points before you write, and tick them off after.' }]
      },
      aiCheck: {
        task: 'Write a message to Abu Yasser about the Thursday meeting. Say: (1) '
          + 'when and where it is, (2) what it is about, (3) that he must bring '
          + 'the stock book, not the printout. Use the frame.',
        grammar: 'Mediating – a meeting invitation, for somebody who must act',
        must: ['A2 Key Writing Part 6 — a short message (25 words or more). The task '
          + 'gives you three things to write about. All three must be there, or '
          + 'you lose marks even if your English is perfect.',
        'Shape: greeting → the three points, one short sentence each → a '
          + 'friendly close and your name.',
        'For a message about a meeting, the three points are nearly always: '
          + 'when and where · what it is about · one thing to bring or do '
          + 'beforehand.',
        '⚠ Count the three points before you write, and tick them off after.'],
        vocab: ['mediating',
        'meeting',
        'invitation',
        'somebody',
        'document',
        'frightens',
        'deal',
        'fear',
        'before',
        'facts']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '7.7.6P',
      bookRef: 'Unit 7 · 7.7 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Count your partner\'s three points. Tick each one.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Point</th><th>In the message? ✓ / '
          + '✗</th></tr><tr><td>1 When and '
          + 'where</td><td>&nbsp;</td></tr><tr><td>2 What it is '
          + 'about</td><td>&nbsp;</td></tr><tr><td>3 Bring the book, not the '
          + 'printout</td><td>&nbsp;</td></tr><tr><td>25 words or '
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
        grammar: 'Mediating – a meeting invitation, for somebody who must act',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (7.7) '
          + 'teaches: Mediating – a meeting invitation, for somebody who must '
          + 'act. Judge the language against THAT and against nothing the course '
          + 'has not taught yet.',
        must: ['A2 Key Writing Part 6 — a short message (25 words or more). The task '
          + 'gives you three things to write about. All three must be there, or '
          + 'you lose marks even if your English is perfect.',
        'Shape: greeting → the three points, one short sentence each → a '
          + 'friendly close and your name.',
        'For a message about a meeting, the three points are nearly always: '
          + 'when and where · what it is about · one thing to bring or do '
          + 'beforehand.',
        '⚠ Count the three points before you write, and tick them off after.'],
        vocab: ['mediating',
        'meeting',
        'invitation',
        'somebody',
        'document',
        'frightens',
        'deal',
        'fear',
        'before',
        'facts'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      ref: '7.7.7',
      bookRef: 'Unit 7 · 7.7 · Lesson B · Writing · Write freely – exam practice (A2 Key '
  + 'Writing Part 6)',
      type: 'writer',
      title: 'Write freely – exam practice (A2 Key Writing Part 6)',
      kind: 'model',
      instruction: 'You are organising something with friends. Write a message (25 words or '
  + 'more). Say: <b>(1)</b> when and where you are meeting, <b>(2)</b> what you '
  + 'are going to do, <b>(3)</b> one thing each person should bring.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      passage: {
        title: 'Homework',
        html: '<p>Write your final message. Then write the <b>reply</b> one friend '
          + 'would send (20+ words), e.g. <i>I can come at six but not at five — '
          + 'I finish work at half past four. I\'ll bring the bread.</i></p>'
      },
      meter: {
        label: 'words from this lesson',
        words: ['mediating',
        'meeting',
        'invitation',
        'somebody',
        'document',
        'frightens',
        'deal',
        'fear']
      },
      coach: {
        title: 'What to include',
        task: 'You are organising something with friends. Write a message (25 words or '
  + 'more). Say: (1) when and where you are meeting, (2) what you are going to '
  + 'do, (3) one thing each person should bring.',
        criteria: [{ t: 'A2 Key Writing Part 6 — a short message (25 words or more). The '
              + 'task gives you three things to write about. All three must be '
              + 'there, or you lose marks even if your English is perfect.' },
            { t: 'Shape: greeting → the three points, one short sentence each → a '
              + 'friendly close and your name.' },
            { t: 'For a message about a meeting, the three points are nearly '
              + 'always: when and where · what it is about · one thing to bring '
              + 'or do beforehand.' },
            { t: '⚠ Count the three points before you write, and tick them off after.' }]
      },
      aiCheck: {
        task: 'You are organising something with friends. Write a message (25 words '
          + 'or more). Say: (1) when and where you are meeting, (2) what you are '
          + 'going to do, (3) one thing each person should bring.',
        grammar: 'Mediating – a meeting invitation, for somebody who must act',
        must: ['A2 Key Writing Part 6 — a short message (25 words or more). The task '
          + 'gives you three things to write about. All three must be there, or '
          + 'you lose marks even if your English is perfect.',
        'Shape: greeting → the three points, one short sentence each → a '
          + 'friendly close and your name.',
        'For a message about a meeting, the three points are nearly always: '
          + 'when and where · what it is about · one thing to bring or do '
          + 'beforehand.',
        '⚠ Count the three points before you write, and tick them off after.'],
        vocab: ['mediating',
        'meeting',
        'invitation',
        'somebody',
        'document',
        'frightens',
        'deal',
        'fear',
        'before',
        'facts']
      }
    },
    {
      id: 'c13',
      ref: '7.7.✓',
      bookRef: 'Unit 7 · 7.7 · Lesson B · Writing · Unit 7 check',
      type: 'scene',
      title: 'Unit 7 check',
      kind: 'own',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u7-7-7-b'
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '7.7.✓',
      bookRef: 'Unit 7 · 7.7 · Lesson B · Writing · Unit 7 check',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'The invitation says: Attendance is required. Please forward '
              + 'apologies to the chair in advance. Agenda items to be submitted '
              + '24 hours prior. Say it in easy English for a colleague.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
