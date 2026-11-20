/* Unit 9 · cycle 9.1 — Where everybody was at four o'clock.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE2.page('u9-s01', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 9 · 9.1', part: '9.1',
          section: '1', lesson: 'Where everybody was at four o\'clock', title: 'Where everybody was at four o\'clock' },
  objective: 'say where people were',
  study: {
    minutes: 90,
    objective: 'say where people were',
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
    task: 'Write where people were at four o\'clock.',
    weak: 'Everybody was working.',
    change: ['Name each person and each place, with <i>was</i> for one and '
          + '<i>were</i> for more than one.',
        'Say the gap if there is one - the time nobody can account for is the '
          + 'useful part of the answer.'],
    better: 'Nour was in the office. Ammar and Samih were in the back store. Abu Raed '
      + 'was at the small gate until 3.45. Nobody was near the big gate between '
      + '3.45 and four.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '9.1.1',
      bookRef: 'Unit 9 · 9.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Where were you at eight o\'clock this morning? Say it: I was .',
            minWords: 6,
            rows: 2,
            hint: 'One place, with \'was\'. If you were moving, say where you started.'
          },
      {
            q: 'Where were you and your family last night? Say it: We were .',
            minWords: 6,
            rows: 2,
            hint: 'More than one person, so the verb changes. That change is the '
              + 'whole point of the cycle.'
          }],
      ideas: ['was and were'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
    },
    {
      id: 'c2',
      ref: '9.1.2',
      bookRef: 'Unit 9 · 9.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u9-9-1',
      passage: {
        title: 'Language box',
        html: '<p><b><i>was</i> and <i>were</i></b></p><table '
          + 'class=\'bk\'><tr><th>was</th><th>were</th></tr><tr><td><b>I was</b> '
          + 'in the back store.</td><td><b>We were</b> on row '
          + 'three.</td></tr><tr><td><b>He was</b> on the road.</td><td><b>You '
          + 'were</b> at the counter.</td></tr><tr><td><b>She was</b> in the '
          + 'office.</td><td><b>They were</b> in the yard.</td></tr><tr><td><b>It '
          + 'was</b> open.</td><td><b>Nobody was</b> in the yard. <i>(nobody '
          + 'takes <b>was</b>)</i></td></tr></table><p>⚠ <b><i>was</i> for one '
          + 'person: I, he, she, it.</b> <b><i>were</i> for more than one: we, '
          + 'you, they.</b> ⚠ <b><i>I was</i>, not <s>I were</s></b> — <b>and '
          + 'that is the one to get right.</b></p><p>⚠ <b><i>nobody</i> and '
          + '<i>everybody</i> take <i>was</i></b>, <b>even though they feel like '
          + 'a lot of people.</b> <i>Nobody <b>was</b> in the yard.</i></p><p>⚠ '
          + '<b>And say WHERE exactly.</b> <i>In the back store, on row '
          + 'three.</i> <b>Unit 4 again: a place with a number on it is an '
          + 'answer; <i>in the store</i> is nearly an '
          + 'answer.</b></p><p><b>Practise:</b> Write <i>was</i> or '
          + '<i>were</i>.</p><p>1 I <span class="blank"></span> in the yard. 2 We '
          + '<span class="blank"></span> on row three. 3 Fadi <span '
          + 'class="blank"></span> on the road. 4 Nobody <span '
          + 'class="blank"></span> at the gate.</p><p><b>Useful words:</b> I was… '
          + '· we were… · nobody was… · at four o\'clock · on row '
          + 'three</p><p><b>Sound — was and were, both quiet.</b> 🔊 <b>Track '
          + '9.2</b> Listen. <i>I was in the BACK STORE.</i> <b><i>was</i> is '
          + 'quiet and fast; the PLACE is the loud part.</b> <b>A loud <i>was</i> '
          + 'sounds like you are arguing about it.</b> Say it four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Where was Fadi at four?',
            options: [{
              t: 'in the yard',
              ok: false
            },
            {
              t: 'on the Homs road',
              ok: true,
              why: 'on the Homs road'
            },
            {
              t: 'at the gate',
              ok: false
            }]
          },
        {
            q: 'Listen again. What time did Fadi leave?',
            options: [{
              t: 'at two',
              ok: true,
              why: 'He was on the road by four, and the leaving time is how Ammar knows it.'
            },
            {
              t: 'at four',
              ok: false,
              why: 'Four is the hour the whole scene is ABOUT - where everybody '
                + 'was then, not when anybody left.'
            },
            {
              t: 'at three forty-five',
              ok: false,
              why: 'That is when Abu Raed left the small gate, on the sheet above.'
            }],
            evidence: 'Ammar\'s line about the Homs road'
          },
        {
            q: 'Why is Abu Yasser asking at all?',
            options: [{
              t: 'somebody left the big gate open and he wants to know who was near it',
              ok: true,
              why: 'He asks about places, not about blame - and nobody turns out '
                + 'to have been in the yard.'
            },
            {
              t: 'he is writing the shift report',
              ok: false,
              why: 'The shift report is 9.7\'s subject. Here he is working out one '
                + 'thing that went wrong.'
            },
            {
              t: 'he is checking who worked overtime',
              ok: false,
              why: 'Overtime is in the unit\'s vocabulary, but nobody mentions it here.'
            }],
            evidence: 'the last line of the dialogue'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '9.1.2',
      bookRef: 'Unit 9 · 9.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Who was in the office?',
            model: 'Nour',
            minWords: 1,
            rows: 2,
            hint: 'One name. The office is upstairs and only one person works there.'
          },
      {
            q: 'Why does Abu Yasser want to know?',
            model: 'Somebody left the big gate open and he wants to know who was near it',
            minWords: 5,
            rows: 2,
            keys: ['somebody',
              'left',
              'big',
              'gate'],
            need: 1,
            hint: 'Something was left in a state it should not have been. Say what, '
              + 'and what he is trying to work out.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '9.1.3',
      bookRef: 'Unit 9 · 9.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One asks about four o\'clock. One answers. Then change places.',
      scene: 'u9-9-1-pair',
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
        rows: [['four o\'clock · in the back store · on row three · Samih · Fadi · '
            + 'on the Homs road · two',
          'six o\'clock · at the counter · by the till · Hala · the driver · '
            + 'at the bakery · five']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '9.1.3R',
      bookRef: 'Unit 9 · 9.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ I was…</td><td>☐ we were…</td><td>☐ '
          + 'nobody was…</td><td>☐ at four o\'clock</td><td>☐ on row '
          + 'three</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['was and were'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: was and were.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '9.1.4',
      bookRef: 'Unit 9 · 9.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Where were five people at your work at four o\'clock yesterday? Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Who</th><th>Where they were</th><th>was '
          + '/ '
          + 'were</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'Who: me Where: at the counter, serving was / were: was · Who: '
              + 'Hala Where: in the back, washing trays was / were: was · Who: '
              + 'the two delivery men Where: in the van, outside was / were: · '
              + 'Who: the manager Where: at the bank was / were: was · Who: '
              + 'nobody Where: in the cold room was / were:',
            minWords: 6,
            rows: 3,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Where were five people at your work at four o\'clock yesterday? Write it.',
        grammar: 'was and were',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (9.1) teaches: was and were. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: was and were.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['person',
        'than',
        'right',
        'nobody',
        'everybody',
        'even',
        'though',
        'feel',
        'like',
        'people']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: was and were.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '9.1.4R',
      bookRef: 'Unit 9 · 9.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: At four o\'clock I was . was . and were .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'At four o\'clock I was at the counter. Hala was in the back. The '
              + 'two delivery men were outside in the van',
            minWords: 6,
            rows: 3,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — At four o\'clock I was —. — was —. — and — were —. '
          + '(The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'was and were',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (9.1) teaches: '
          + 'was and were. Judge the language against THAT and against nothing '
          + 'the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: was and were.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['person',
        'than',
        'right',
        'nobody',
        'everybody',
        'even',
        'though',
        'feel',
        'like',
        'people'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: was and were.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '9.1.5',
      bookRef: 'Unit 9 · 9.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the sheet Abu Yasser filled in. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>WHERE EVERYBODY WAS — THURSDAY, 4.00 p.m.</b></p><table '
          + 'class=\'bk\'><tr><th>Who</th><th>Where</th><th>Near the big '
          + 'gate?</th></tr><tr><td>Ammar Zreik</td><td>back store, row '
          + '3</td><td>no</td></tr><tr><td>Samih Qassar</td><td>back store, row '
          + '3</td><td>no</td></tr><tr><td>Fadi Saeed</td><td>the Homs road — '
          + 'left at 2.00</td><td>no</td></tr><tr><td>Nour Mansour</td><td>the '
          + 'office</td><td>no</td></tr><tr><td>Majd Bitar</td><td>the '
          + 'counter</td><td>no</td></tr><tr><td>Abu Raed Najjar</td><td>⚠ <b>the '
          + 'small gate, until 3.45</b></td><td>⚠ <b>yes — and he went home at '
          + '3.45</b></td></tr></table><p>⚠ <b>Six people. Five were nowhere near '
          + 'it. One was, and he went home fifteen minutes before. '
          + 'A.Y.</b></p><h4>Writer\'s box</h4><p><b>A where-everybody-was sheet '
          + 'has three columns:</b> who → <b>where, exactly</b> → <b>the question '
          + 'you are actually asking</b>.</p><p>⚠ <b>The third column is the '
          + 'point.</b> <b>Abu Yasser is not interested in where people were; he '
          + 'is interested in who was near the big gate.</b> <b>A sheet with no '
          + 'third column is a sheet that answers nothing.</b></p><p>⚠ <b>And put '
          + 'the TIME in the heading, with a.m. or p.m.</b> <b><i>4.00</i> on its '
          + 'own is two different times, and 3.1 said so.</b></p>'
      },
      questions: [{
            q: 'How many people were in the back store?',
            model: 'Two — Ammar and Samih',
            minWords: 1,
            rows: 2,
            keys: ['ammar',
              'samih'],
            need: 1,
            hint: 'A number, and then the names - the names are what make the number usable.'
          },
      {
            q: 'Who was nearest the big gate, and when did he leave?',
            model: 'Abu Raed, at the small gate, and he left at 3.45',
            minWords: 3,
            rows: 2,
            keys: ['abu',
              'raed',
              'small',
              'left'],
            need: 1,
            hint: 'A name, a place and a time. The sheet above has all three in one row.'
          },
      {
            q: 'What does the sheet NOT tell you?',
            model: 'Who was near the big gate between 3.45 and 4.00 — which is '
              + 'nobody on this sheet',
            minWords: 4,
            rows: 2,
            keys: ['near',
              'big',
              'gate',
              'between'],
            need: 1,
            hint: 'Look for the gap between two times on the sheet. The answer is '
              + 'about who was there in that gap.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '9.1.6',
      bookRef: 'Unit 9 · 9.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a where-everybody-was sheet for your own work (<b>15 words or '
  + 'more</b>). Pick a question for the third column.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Who</th><th>Where</th><th><span '
          + 'class="blank"></span>?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      model: ['WHERE EVERYBODY WAS — FRIDAY, 4.00 p.m'],
      meter: {
        label: 'words from this lesson',
        words: ['person',
        'than',
        'right',
        'nobody',
        'everybody',
        'even',
        'though',
        'feel']
      },
      coach: {
        title: 'What to include',
        task: 'Write a where-everybody-was sheet for your own work (15 words or more). Pick '
  + 'a question for the third column.',
        criteria: [{ t: 'A where-everybody-was sheet has three columns: who → where, '
              + 'exactly → the question you are actually asking.' },
            { t: '⚠ The third column is the point. Abu Yasser is not interested in '
              + 'where people were; he is interested in who was near the big '
              + 'gate. A sheet with no third column is a sheet that answers '
              + 'nothing.' },
            { t: '⚠ And put the TIME in the heading, with a.m. or p.m. 4.00 on its '
              + 'own is two different times, and 3.1 said so.' }]
      },
      aiCheck: {
        task: 'Write a where-everybody-was sheet for your own work (15 words or '
          + 'more). Pick a question for the third column.',
        grammar: 'was and were',
        must: ['A where-everybody-was sheet has three columns: who → where, exactly '
          + '→ the question you are actually asking.',
        '⚠ The third column is the point. Abu Yasser is not interested in '
          + 'where people were; he is interested in who was near the big gate. A '
          + 'sheet with no third column is a sheet that answers nothing.',
        '⚠ And put the TIME in the heading, with a.m. or p.m. 4.00 on its own '
          + 'is two different times, and 3.1 said so.'],
        vocab: ['person',
        'than',
        'right',
        'nobody',
        'everybody',
        'even',
        'though',
        'feel',
        'like',
        'people']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '9.1.6P',
      bookRef: 'Unit 9 · 9.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>A '
          + 'time in the heading, with a.m. or '
          + 'p.m.</td><td>&nbsp;</td></tr><tr><td>A place with a number or a '
          + 'name, not just <i>the store</i></td><td>&nbsp;</td></tr><tr><td>A '
          + 'third column that asks something</td><td>&nbsp;</td></tr><tr><td>A '
          + 'line at the bottom saying what it adds up '
          + 'to</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) at the heading. (reading) "4.00" · (pointing) Here. '
              + '(reading) "in the shop"',
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
        grammar: 'was and were',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (9.1) '
          + 'teaches: was and were. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        must: ['A where-everybody-was sheet has three columns: who → where, exactly '
          + '→ the question you are actually asking.',
        '⚠ The third column is the point. Abu Yasser is not interested in '
          + 'where people were; he is interested in who was near the big gate. A '
          + 'sheet with no third column is a sheet that answers nothing.',
        '⚠ And put the TIME in the heading, with a.m. or p.m. 4.00 on its own '
          + 'is two different times, and 3.1 said so.'],
        vocab: ['person',
        'than',
        'right',
        'nobody',
        'everybody',
        'even',
        'though',
        'feel',
        'like',
        'people'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '9.1.6R',
      bookRef: 'Unit 9 · 9.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their third column heading. The class says what question it answers.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['was and were'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: was and were.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '9.1.7',
      bookRef: 'Unit 9 · 9.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about where you and the people at your work were at one time yesterday '
  + '(<b>20 to 35 words</b>). Who was alone? Who was with somebody?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['At four o\'clock yesterday I was at the counter alone. Hala was in the '
        + 'back and could not see me. Nobody could say where I was for an hour, '
        + 'and the till was short'],
      stems: ['At four o\'clock…',
      'Hala was in the…',
      'Nobody could say…'],
      meter: {
        label: 'words from this lesson',
        words: ['person',
        'than',
        'right',
        'nobody',
        'everybody',
        'even',
        'though',
        'feel']
      },
      coach: {
        title: 'What to include',
        task: 'Write about where you and the people at your work were at one time yesterday '
  + '(20 to 35 words). Who was alone? Who was with somebody?',
        criteria: [{ t: 'A where-everybody-was sheet has three columns: who → where, '
              + 'exactly → the question you are actually asking.' },
            { t: '⚠ The third column is the point. Abu Yasser is not interested in '
              + 'where people were; he is interested in who was near the big '
              + 'gate. A sheet with no third column is a sheet that answers '
              + 'nothing.' },
            { t: '⚠ And put the TIME in the heading, with a.m. or p.m. 4.00 on its '
              + 'own is two different times, and 3.1 said so.' }]
      },
      aiCheck: {
        task: 'Write about where you and the people at your work were at one time '
          + 'yesterday (20 to 35 words). Who was alone? Who was with somebody?',
        grammar: 'was and were',
        must: ['A where-everybody-was sheet has three columns: who → where, exactly '
          + '→ the question you are actually asking.',
        '⚠ The third column is the point. Abu Yasser is not interested in '
          + 'where people were; he is interested in who was near the big gate. A '
          + 'sheet with no third column is a sheet that answers nothing.',
        '⚠ And put the TIME in the heading, with a.m. or p.m. 4.00 on its own '
          + 'is two different times, and 3.1 said so.'],
        vocab: ['person',
        'than',
        'right',
        'nobody',
        'everybody',
        'even',
        'though',
        'feel',
        'like',
        'people']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '9.1.7P',
      bookRef: 'Unit 9 · 9.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Who could say where you were? '
  + 'Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Who could say where you were? — Nobody. The camera, maybe',
            minWords: 3,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Who could say where you '
          + 'were? Write the answer.',
        grammar: 'was and were',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (9.1) teaches: was and were. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: was and were.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['person',
        'than',
        'right',
        'nobody',
        'everybody',
        'even',
        'though',
        'feel',
        'like',
        'people'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: was and were.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '9.1.7R',
      bookRef: 'Unit 9 · 9.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many people were alone, with nobody who could say '
  + 'where they were? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> where six people at '
          + 'your work were at one time yesterday (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['was and were'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: was and were.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
