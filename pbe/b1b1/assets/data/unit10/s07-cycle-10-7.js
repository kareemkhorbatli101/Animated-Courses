/* Unit 10 · cycle 10.7 — Review & Mediate: telling the person who was not in the room.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE5.page('u10-s07', {
  book: { source: 'Proactive Business English · B1 Book 1', ref: 'Unit 10 · 10.7', part: '10.7',
          section: '7', lesson: 'Review & Mediate: telling the person who was not in the room', title: 'Review & Mediate: telling the person who was not in the room' },
  objective: 'Review & Mediate: telling the person who was not in the room',
  study: {
    minutes: 96,
    objective: 'Review & Mediate: telling the person who was not in the room',
    steps: [{
          title: 'Get ready – Unit 10 quiz',
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
          title: 'Read – exam practice (B1 Business Preliminary Reading Part 5)',
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
          title: 'Unit 10 check',
          mins: 15,
          why: 'Finding out what stuck.',
          todo: 'Do it without looking back at the unit. Then look back at whatever '
            + 'you got wrong - that is the list of what to study again.',
          alone: 'Do it cold. The looking-back is the exercise.'
        }]
  },
  worked: {
    task: 'Exam task. A decision affects a colleague who was not present. Write to '
      + 'them. 60 to 80 words.',
    weak: 'We decided something in the meeting that affects you. Ask me if you want '
      + 'to know more.',
    change: ['Say what was decided and when it starts. A colleague who has to ask '
          + 'what was decided hears the corridor version first.',
        'Tell them who objected and that it was not resolved, and ask what '
          + 'they know - they were not there, and that is usually why the '
          + 'objection stands.'],
    better: 'On 2 June it was decided to run Saturday deliveries in Mezzeh only for '
      + 'six weeks from the 14th, stopping below thirty orders. Abu Yasser '
      + 'objected that the warehouse start time has not been agreed, and that was '
      + 'not resolved — Mr Ayoub is to settle it by the 9th. You cover that bay '
      + 'on Saturdays. What is the earliest start that is actually workable?'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '10.7.1',
      bookRef: 'Unit 10 · 10.7 · Lesson A · Speaking · Get ready – Unit 10 quiz',
      type: 'discuss',
      title: 'Get ready – Unit 10 quiz',
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
      ref: '10.7.2',
      bookRef: 'Unit 10 · 10.7 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u10-10-7',
      passage: {
        title: 'Language box',
        html: '<p><b>Mediating – telling the person who was not in the '
          + 'room</b></p><table class=\'bk\'><tr><th>To be fair to '
          + 'them</th><th>To be fair to the meeting</th><th>To get the rest of '
          + 'it</th></tr><tr><td>You were not there and it is your '
          + 'Friday.</td><td>It is in the minutes with his name on '
          + 'it.</td><td>Nobody in that room knew that.</td></tr><tr><td>I will '
          + 'tell you who objected.</td><td>It was not resolved; the chair '
          + 'decided.</td><td>Between us the objection is twice as '
          + 'bad.</td></tr></table><p>⚠ <b>Tell the person a decision falls on, '
          + 'before it falls on them</b>, and say why you are telling them: '
          + '<i>you were not in the meeting and it is your Friday</i>.</p><p>⚠ '
          + '<b>Report the objection and whose it was.</b> Somebody affected by a '
          + 'decision is entitled to know that somebody objected and that it was '
          + 'not resolved — and they will usually have the other half of '
          + 'it.</p><p>⚠ <b>Say when nobody in the room knew something.</b> '
          + '<i>Nobody in that room drives it.</i> ⚠ Two partial objections from '
          + 'two people who each know half are a complete objection, and they '
          + 'will never meet unless somebody carries one to the other.</p><p>⚠ '
          + '<b>And say what the record is for.</b> <i>If he does, it will be on '
          + 'the record that two people said what would break — and in February '
          + 'nobody will be looking for somebody to blame; they will be looking '
          + 'at the minute.</i></p><p><b>Practise:</b> Tell somebody about a '
          + 'decision they were absent from: what was decided, who objected, what '
          + 'was not resolved, and ask what they know.</p><p><b>Useful '
          + 'phrases:</b> You were not there and it is your… · X objected; it is '
          + 'in the minutes with his name on it. · It was not resolved. · Nobody '
          + 'in that room knew that. · I will say it came from both of '
          + 'you.</p><p><b>Pronunciation – reporting an objection to somebody it '
          + 'affects.</b> 🔊 <b>Track 10.14</b> Listen: <i>Abu Yasser objected // '
          + 'he said he cannot be at the gate and on the forklift // it is in the '
          + 'minutes with his name on it</i>. ⚠ Three level statements; no '
          + 'sympathy in the voice, because sympathy invites agreement rather '
          + 'than information. Repeat the three.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Why is Nour telling Fadi about the meeting?',
            options: [{
              t: 'he was not there and a decision falls on him',
              ok: true
            },
            {
              t: 'he asked',
              ok: false
            },
            {
              t: 'to pass the time',
              ok: false
            }]
          },
        {
            q: 'Why is Friday the hard day, once Fadi has explained it?',
            options: [{
              t: 'it is the long run and the morning with no forklift',
              ok: true,
              why: 'Harasta is shut on Wednesdays, so both far drops fall on '
                + 'Friday - the same morning the wrap arrives and Abu Yasser is '
                + 'on the forklift.'
            },
            {
              t: 'the wrap comes on Wednesday',
              ok: false,
              why: 'The wrap comes FRIDAY morning. That is the whole of Abu '
                + 'Yasser\'s objection.'
            },
            {
              t: 'Harasta is shut on Fridays',
              ok: false,
              why: 'Harasta is shut on WEDNESDAYS, which is precisely why those '
                + 'drops are on the Friday run.'
            }],
            evidence: 'the two Harasta drops, and when the wrap comes'
          },
        {
            q: 'What does Nour say will matter in February?',
            options: [{
              t: 'that the record shows two people said what would break and '
                + 'what it would cost',
              ok: true,
              why: '"Nobody will be looking for somebody to blame - they will be '
                + 'looking at the minute."'
            },
            {
              t: 'that Mr Ayoub took the decision',
              ok: false,
              why: 'True, and she says it earlier as a fact about the minute. It '
                + 'is not what she says the record is FOR.'
            },
            {
              t: 'that Abu Yasser objected before Fadi did',
              ok: false,
              why: 'The order of the two objections is never the point. What '
                + 'counts is that both halves are on the record.'
            }],
            evidence: 'her last answer, after Fadi says he will do it anyway'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'own',
      ref: '10.7.2',
      bookRef: 'Unit 10 · 10.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Tell somebody about a decision they were absent from: what was '
              + 'decided, who objected, what was not resolved, and ask what they '
              + 'know.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '10.7.2',
      bookRef: 'Unit 10 · 10.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does she tell him about the objection?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>objection</i> in '
              + 'it. Play it again with the subtitles on.'
          },
      {
            q: 'What does he say that nobody in the meeting knew?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with <i>meeting</i> in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '10.7.3',
      bookRef: 'Unit 10 · 10.7 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A reports a decision to B, who was absent and is affected. Then swap.',
      scene: 'u10-10-7-pair',
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
        rows: [['A decision to recount the fourth store room on Thursdays, taken '
            + 'without the counter staff present. B works the counter and knows '
            + 'that Thursday is the day the trade customers come after their own '
            + 'closing. ⚠ The objection in the minute was about manpower; B\'s '
            + 'half is about which day.',
          'A decision that all complaints must be in writing, taken without '
            + 'B, who takes them by telephone. B\'s half: about a dozen a year '
            + 'are settled the same day and would now be irregular. ⚠ Nobody in '
            + 'the meeting knew the number.']]
      }
    },
    {
      id: 'c6',
      kind: 'own',
      ref: '10.7.3R',
      bookRef: 'Unit 10 · 10.7 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out the conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ You were not there.</td><td>☐ X '
          + 'objected — it is in the minutes.</td><td>☐ It was not '
          + 'resolved.</td><td>☐ Nobody in that room knew that.</td><td>☐ from '
          + 'both of you</td><td>☐ they will be looking at the '
          + 'minute</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – telling the person who was '
        + 'not in the room.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '10.7.4',
      bookRef: 'Unit 10 · 10.7 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Your teacher gives you a decision. Report it to two people who were not in '
  + 'the room and collect what each knows.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Who I told</th><th>What was decided and '
          + 'who objected</th><th>Their half of it</th><th>What the two halves '
          + 'add up '
          + 'to</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
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
        task: 'Your teacher gives you a decision. Report it to two people who were '
          + 'not in the room and collect what each knows.',
        grammar: 'Mediating – telling the person who was not in the room',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (10.7) teaches: Mediating – telling the person who was not in '
          + 'the room. Judge the language against THAT and against nothing the '
          + 'course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – telling the person who was '
          + 'not in the room.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'telling',
        'person',
        'room',
        'decision',
        'falls',
        'before',
        'meeting',
        'friday',
        'report']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – telling the person who was '
        + 'not in the room.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'model',
      ref: '10.7.4R',
      bookRef: 'Unit 10 · 10.7 · Lesson A · Speaking · Report – mediation',
      type: 'discuss',
      title: 'Report – mediation',
      instruction: 'Tell the class what the two halves added up to. This is the tenth unit of '
  + 'this book, and the thing nobody writes down is the one the unit has been '
  + 'building to: an objection in a meeting is almost always half an objection, '
  + 'because the person in the room knows half of it — and the other half belongs '
  + 'to somebody who was not invited, so the two halves never meet unless '
  + 'somebody carries one to the other.',
      questions: [{
            q: 'Write what you told the class.',
            model: '"The minute recorded that Abu Yasser could not be at the gate '
              + 'and on the forklift on a Friday. Fadi added that Friday is the '
              + 'long run, because the two Harasta drops are shut on Wednesdays — '
              + 'which nobody in the room knew, because nobody in the room drives '
              + 'it. Together they mean the long run falls on the morning with no '
              + 'forklift."',
            minWords: 6,
            rows: 3,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class what the two halves added up to. This is the tenth '
          + 'unit of this book, and the thing nobody writes down is the one the '
          + 'unit has been building to: an objection in a meeting is almost '
          + 'always half an objection, because the person in the room knows half '
          + 'of it — and the other half belongs to somebody who was not invited, '
          + 'so the two halves never meet unless somebody carries one to the '
          + 'other. (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Mediating – telling the person who was not in the room',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (10.7) teaches: '
          + 'Mediating – telling the person who was not in the room. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – telling the person who was '
          + 'not in the room.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'telling',
        'person',
        'room',
        'decision',
        'falls',
        'before',
        'meeting',
        'friday',
        'report'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – telling the person who was '
        + 'not in the room.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '10.7.5',
      bookRef: 'Unit 10 · 10.7 · Lesson B · Writing · Read – exam practice (B1 Business '
  + 'Preliminary Reading Part 5)',
      type: 'discuss',
      title: 'Read – exam practice (B1 Business Preliminary Reading Part 5)',
      instruction: '⚠ This unit practises Part 5: multiple choice on a longer text. Read the '
  + 'minute extract and choose A, B or C.',
      passage: {
        title: 'From the book',
        html: '<p><b>Extract from the minutes of 1 December.</b></p><p><i><b>3 · '
          + 'The Ghouta day.</b> <b>Agreed:</b> Ghouta moves to Wednesday and '
          + 'Friday from 8 December. <b>Owner:</b> N. Mansour. <b>By:</b> 4 '
          + 'December (customers to be told). <b>Reason:</b> the Saturday road '
          + 'closure and the Saturday counter. <b>Objection: Y. Khalil — Friday '
          + 'is the day the wrap arrives and he cannot be at the gate and on the '
          + 'forklift.</b> Not resolved; the chair took the decision. If this '
          + 'goes wrong it will go wrong on a Friday morning and Mr Khalil said '
          + 'so on 1 December.</i></p><p><i><b>4 · The second van.</b> '
          + '<b>Deferred to 15 December</b>, pending the repair quotes. '
          + '<b>Owner:</b> N. Mansour (to circulate the three quotes by 8 '
          + 'December). <b>Reason:</b> the hire option was costed at 1.8 million '
          + 'against a once-only loss of about 400,000 and was '
          + 'dropped.</i></p><p><i><b>Not minuted, and deliberately.</b> About '
          + 'twenty minutes on the auditor\'s visit generally, which produced no '
          + 'decision and no action.</i></p><h4>Writer\'s box</h4><p><b>B1 '
          + 'Business Preliminary Writing Part 2 — business correspondence, 60 to '
          + '80 words.</b> Here: telling somebody who was absent about a decision '
          + 'that falls on them.</p><p>The shape: <b>what was decided, with the '
          + 'date</b> · ⚠ <b>who objected and that it was not resolved</b> · '
          + '<b>what you want from them</b>.</p><p>⚠ <b>In eighty words the '
          + 'objection must survive.</b> Without it the reader cannot tell '
          + 'whether the decision was considered or merely taken, and they are '
          + 'the person who will carry it.</p><p>⚠ End by asking what they know. '
          + 'They were not in the room, and they are the only person who might '
          + 'have the other half.</p>'
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
      ref: '10.7.6',
      bookRef: 'Unit 10 · 10.7 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: '<b>Exam task — Writing Part 2.</b> A decision has been taken that affects a '
  + 'colleague who was not present. Write to them (<b>60 to 80 words</b>). Say '
  + '<b>what was decided and when it starts</b>, ⚠ <b>who objected and that it '
  + 'was not resolved</b>, and <b>ask what they know</b>.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['mediating',
        'telling',
        'person',
        'room',
        'decision',
        'falls',
        'before',
        'meeting']
      },
      coach: {
        title: 'What to include',
        task: 'Exam task — Writing Part 2. A decision has been taken that affects a '
  + 'colleague who was not present. Write to them (60 to 80 words). Say what was '
  + 'decided and when it starts, ⚠ who objected and that it was not resolved, and '
  + 'ask what they know.',
        criteria: [{ t: 'B1 Business Preliminary Writing Part 2 — business '
              + 'correspondence, 60 to 80 words. Here: telling somebody who was '
              + 'absent about a decision that falls on them.' },
            { t: 'The shape: what was decided, with the date · ⚠ who objected and '
              + 'that it was not resolved · what you want from them.' },
            { t: '⚠ In eighty words the objection must survive. Without it the '
              + 'reader cannot tell whether the decision was considered or merely '
              + 'taken, and they are the person who will carry it.' },
            { t: '⚠ End by asking what they know. They were not in the room, and '
              + 'they are the only person who might have the other half.' }]
      },
      aiCheck: {
        task: 'Exam task — Writing Part 2. A decision has been taken that affects a '
          + 'colleague who was not present. Write to them (60 to 80 words). Say '
          + 'what was decided and when it starts, ⚠ who objected and that it was '
          + 'not resolved, and ask what they know.',
        grammar: 'Mediating – telling the person who was not in the room',
        must: ['B1 Business Preliminary Writing Part 2 — business correspondence, 60 '
          + 'to 80 words. Here: telling somebody who was absent about a decision '
          + 'that falls on them.',
        'The shape: what was decided, with the date · ⚠ who objected and that '
          + 'it was not resolved · what you want from them.',
        '⚠ In eighty words the objection must survive. Without it the reader '
          + 'cannot tell whether the decision was considered or merely taken, and '
          + 'they are the person who will carry it.',
        '⚠ End by asking what they know. They were not in the room, and they '
          + 'are the only person who might have the other half.'],
        vocab: ['mediating',
        'telling',
        'person',
        'room',
        'decision',
        'falls',
        'before',
        'meeting',
        'friday',
        'report']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '10.7.6P',
      bookRef: 'Unit 10 · 10.7 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Count the three points and the words. Tick ✓ or cross ✗, and '
  + 'name the criterion each time.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>What was decided, and when it '
          + 'starts</td><td>&nbsp;</td></tr><tr><td>Who objected, and that it was '
          + 'not resolved</td><td>&nbsp;</td></tr><tr><td>A question asking what '
          + 'they know</td><td>&nbsp;</td></tr><tr><td>60 to 80 words — count '
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
        grammar: 'Mediating – telling the person who was not in the room',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (10.7) '
          + 'teaches: Mediating – telling the person who was not in the room. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        must: ['B1 Business Preliminary Writing Part 2 — business correspondence, 60 '
          + 'to 80 words. Here: telling somebody who was absent about a decision '
          + 'that falls on them.',
        'The shape: what was decided, with the date · ⚠ who objected and that '
          + 'it was not resolved · what you want from them.',
        '⚠ In eighty words the objection must survive. Without it the reader '
          + 'cannot tell whether the decision was considered or merely taken, and '
          + 'they are the person who will carry it.',
        '⚠ End by asking what they know. They were not in the room, and they '
          + 'are the only person who might have the other half.'],
        vocab: ['mediating',
        'telling',
        'person',
        'room',
        'decision',
        'falls',
        'before',
        'meeting',
        'friday',
        'report'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      ref: '10.7.7',
      bookRef: 'Unit 10 · 10.7 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write minutes of a real meeting in full (<b>100 to 140 words</b>): those '
  + 'present with the chair, three items with <i>noted</i>, <i>agreed</i> and '
  + '<i>deferred</i>, an owner and a date on every action, one line of reason on '
  + 'each, any objection with its name, and what you did not minute.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then tell one person about a decision they '
          + 'were absent from, including the objection, and write down what they '
          + 'add (50+ words).</p>'
      },
      meter: {
        label: 'words from this lesson',
        words: ['mediating',
        'telling',
        'person',
        'room',
        'decision',
        'falls',
        'before',
        'meeting']
      },
      coach: {
        title: 'What to include',
        task: 'Write minutes of a real meeting in full (100 to 140 words): those present '
  + 'with the chair, three items with noted, agreed and deferred, an owner and a '
  + 'date on every action, one line of reason on each, any objection with its '
  + 'name, and what you did not minute.',
        criteria: [{ t: 'B1 Business Preliminary Writing Part 2 — business '
              + 'correspondence, 60 to 80 words. Here: telling somebody who was '
              + 'absent about a decision that falls on them.' },
            { t: 'The shape: what was decided, with the date · ⚠ who objected and '
              + 'that it was not resolved · what you want from them.' },
            { t: '⚠ In eighty words the objection must survive. Without it the '
              + 'reader cannot tell whether the decision was considered or merely '
              + 'taken, and they are the person who will carry it.' },
            { t: '⚠ End by asking what they know. They were not in the room, and '
              + 'they are the only person who might have the other half.' }]
      },
      aiCheck: {
        task: 'Write minutes of a real meeting in full (100 to 140 words): those '
          + 'present with the chair, three items with noted, agreed and deferred, '
          + 'an owner and a date on every action, one line of reason on each, any '
          + 'objection with its name, and what you did not minute.',
        grammar: 'Mediating – telling the person who was not in the room',
        must: ['B1 Business Preliminary Writing Part 2 — business correspondence, 60 '
          + 'to 80 words. Here: telling somebody who was absent about a decision '
          + 'that falls on them.',
        'The shape: what was decided, with the date · ⚠ who objected and that '
          + 'it was not resolved · what you want from them.',
        '⚠ In eighty words the objection must survive. Without it the reader '
          + 'cannot tell whether the decision was considered or merely taken, and '
          + 'they are the person who will carry it.',
        '⚠ End by asking what they know. They were not in the room, and they '
          + 'are the only person who might have the other half.'],
        vocab: ['mediating',
        'telling',
        'person',
        'room',
        'decision',
        'falls',
        'before',
        'meeting',
        'friday',
        'report']
      }
    },
    {
      id: 'c13',
      ref: '10.7.✓',
      bookRef: 'Unit 10 · 10.7 · Lesson B · Writing · Unit 10 check',
      type: 'scene',
      title: 'Unit 10 check',
      kind: 'own',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u10-10-7-b'
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '10.7.✓',
      bookRef: 'Unit 10 · 10.7 · Lesson B · Writing · Unit 10 check',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Tell somebody about a decision they were absent from: what was '
              + 'decided, who objected, what was not resolved, and ask what they '
              + 'know.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
