/* Unit 9 · cycle 9.2 — Fifteen verbs, and what they do in the past.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE2.page('u9-s02', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 9 · 9.2', part: '9.2',
          section: '2', lesson: 'Fifteen verbs, and what they do in the past', title: 'Fifteen verbs, and what they do in the past' },
  objective: 'say what happened — fifteen verbs in the past',
  study: {
    minutes: 90,
    objective: 'say what happened — fifteen verbs in the past',
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
    task: 'Write what you did yesterday, in order.',
    weak: 'I work in the store. I do many things.',
    change: ['Put the verbs in the past - this is the whole cycle: <i>opened</i>, '
          + '<i>checked</i>, <i>unloaded</i>.',
        'Put them in clock order and give the times of the two that matter.'],
    better: 'I opened the back store and checked the shelves. The lorry arrived at '
      + 'one o\'clock, two hours early, and we unloaded it in the dark. I did not '
      + 'count it.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '9.2.1',
      bookRef: 'Unit 9 · 9.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say three things you did yesterday. In Arabic. Your teacher '
              + 'writes the English.',
            minWords: 6,
            rows: 2,
            hint: 'Ordinary things, in order: what you did first, next, last. The '
              + 'past forms are in the box above.'
          },
      {
            q: 'Look at the fifteen verbs in the box. Which five do you use most '
              + 'at work? Say it.',
            minWords: 6,
            rows: 2,
            hint: 'Pick the five your own day is made of, then say each one in the '
              + 'past about yesterday.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
    },
    {
      id: 'c2',
      ref: '9.2.2',
      bookRef: 'Unit 9 · 9.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u9-9-2',
      passage: {
        title: 'Language box',
        html: '<p><b>Fifteen verbs. Learn these fifteen and you can tell a '
          + 'shift.</b></p><table '
          + 'class=\'bk\'><tr><th>now</th><th>yesterday</th><th>now</th><th>yesterday</th></tr><tr><td><b>start</b></td><td><b>started</b></td><td><b>take</b></td><td>⚠ '
          + '<b>took</b></td></tr><tr><td><b>finish</b></td><td><b>finished</b></td><td><b>give</b></td><td>⚠ '
          + '<b>gave</b></td></tr><tr><td><b>open</b></td><td><b>opened</b></td><td><b>find</b></td><td>⚠ '
          + '<b>found</b></td></tr><tr><td><b>close</b></td><td><b>closed</b></td><td><b>lose</b></td><td>⚠ '
          + '<b>lost</b></td></tr><tr><td><b>stop</b></td><td><b>stopped</b></td><td><b>go</b></td><td>⚠ '
          + '<b>went</b></td></tr><tr><td><b>check</b></td><td><b>checked</b></td><td><b>come</b></td><td>⚠ '
          + '<b>came</b></td></tr><tr><td><b>arrive</b></td><td><b>arrived</b></td><td><b>leave</b></td><td>⚠ '
          + '<b>left</b></td></tr><tr><td><b>happen</b></td><td><b>happened</b></td><td>&nbsp;</td><td>&nbsp;</td></tr></table><p>⚠ '
          + '<b>Eight of them just add <i>-ed</i>.</b> <b>start → started. open → '
          + 'opened.</b> <b><i>stop</i> doubles the p: stopped.</b></p><p>⚠ '
          + '<b>Seven do not, and they are the seven you use most.</b> <b>took · '
          + 'gave · found · lost · went · came · left.</b> <b>There is no rule. '
          + 'Learn the seven.</b></p><p>⚠ <b>And the past is the SAME for '
          + 'everybody:</b> <i>I opened · he opened · we opened · they '
          + 'opened.</i> <b>No -s, no change.</b> <b>After Unit 3.4 that is a '
          + 'relief, and it is worth saying so.</b></p><p><b>Practise:</b> Write '
          + 'the past.</p><p>1 I <span class="blank"></span> (start) at ten. 2 '
          + 'The light <span class="blank"></span> (go) out. 3 I <span '
          + 'class="blank"></span> (take) the torch. 4 The lorry <span '
          + 'class="blank"></span> (arrive) at one. 5 He <span '
          + 'class="blank"></span> (leave) at two.</p><p><b>Say it. Write it. '
          + 'Check it</b> — say each past verb aloud before you write it, then '
          + 'check it against the fifteen in the table.</p><p><b>Useful '
          + 'words:</b> I started… · I took… · it went out · the lorry arrived · '
          + 'he left</p><p><b>Sound — the -ed at the end.</b> 🔊 <b>Track 9.4</b> '
          + 'Listen. <b>Three sounds and you cannot choose:</b> <i>start<b>ed</b> '
          + '/ɪd/ · open<b>ed</b> /d/ · check<b>ed</b> /t/.</i> <b>Say each one '
          + 'four times. Nobody will correct you if you get it wrong, and your '
          + 'ear will get it right in a month.</b></p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What happened at eleven o\'clock?',
            options: [{
              t: 'the lorry came',
              ok: false
            },
            {
              t: 'the light went out',
              ok: true,
              why: 'the light went out'
            },
            {
              t: 'the gate closed',
              ok: false
            }]
          },
        {
            q: 'Listen again. What did Samih take from the counter?',
            options: [{
              t: 'the torch',
              ok: true,
              why: 'It is what lets him finish row one, and it is the only light '
                + 'he has when the lorry comes.'
            },
            {
              t: 'the keys',
              ok: false,
              why: 'Keys are borrowed in unit 8. Nothing here is unlocked.'
            },
            {
              t: 'the note',
              ok: false,
              why: 'The note is what he GIVES the driver at two, not what he takes.'
            }],
            evidence: 'his line after the light went out'
          },
        {
            q: 'What time did the lorry arrive, and what was wrong with that?',
            options: [{
              t: 'one o\'clock, and it was early',
              ok: true,
              why: 'Early enough that the unloading happened in the dark, which is '
                + 'why line six of his sheet says what it says.'
            },
            {
              t: 'three o\'clock, and it was late',
              ok: false,
              why: 'Three is when it was EXPECTED. The trouble is that it did not '
                + 'wait for three.'
            },
            {
              t: 'eleven, and the light had just gone',
              ok: false,
              why: 'Eleven is when the light went out. The lorry comes two hours later.'
            }],
            evidence: 'the last two lines'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '9.2.2',
      bookRef: 'Unit 9 · 9.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What did Samih do first?',
            model: 'He opened the back store and checked the shelves',
            minWords: 3,
            rows: 2,
            keys: ['opened',
              'back',
              'store',
              'checked'],
            need: 1,
            hint: 'Two actions at the start of his list, and the first is about a door.'
          },
      {
            q: 'How many things does he say happened?',
            model: 'Nine or ten, depending on how you count the unloading',
            minWords: 3,
            rows: 2,
            keys: ['depending',
              'count',
              'unloading'],
            need: 1,
            hint: 'Not a clean number - he gives a range and says what the '
              + 'uncertainty depends on. Say both.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '9.2.3',
      bookRef: 'Unit 9 · 9.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One asks. One tells the shift, in order. Then change places.',
      scene: 'u9-9-2-pair',
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
        rows: [['ten · the back store · the shelves · eleven · light went out · the '
            + 'torch · one',
          'nine · the shop · the bread · ten · water stopped · a bucket · midnight']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '9.2.3R',
      bookRef: 'Unit 9 · 9.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ I started…</td><td>☐ I took…</td><td>☐ '
          + 'it went out</td><td>☐ the lorry arrived</td><td>☐ he '
          + 'left</td></tr></table>'
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
      'I used this cycle\'s language: Fifteen verbs. Learn these fifteen and '
        + 'you can tell a shift.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '9.2.4',
      bookRef: 'Unit 9 · 9.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Six things that happened at your work yesterday. Write it with the past verb.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th></th><th>What happened</th><th>The '
          + 'verb</th></tr><tr><td><b>1</b></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><b>2</b></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><b>3</b></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><b>4</b></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><b>5</b></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><b>6</b></td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: '1 The bread came an hour late. — came · 2 I opened at six and '
              + 'nobody arrived until half past. — opened, arrived · 3 The till '
              + 'roll finished and I took the spare from the drawer. — finished, '
              + 'took · 4 A customer lost her purse in the shop. — lost · 5 We '
              + 'found it under the bread rack. — found · 6 I closed at eight and '
              + 'gave the keys to the manager. — closed, gave',
            minWords: 6,
            rows: 3,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Six things that happened at your work yesterday. Write it with the past verb.',
        grammar: 'Fifteen verbs. Learn these fifteen and you can tell a shift.',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (9.2) teaches: Fifteen verbs. Learn these fifteen and you can '
          + 'tell a shift.. Judge the language against THAT and against nothing '
          + 'the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Fifteen verbs. Learn these fifteen and '
          + 'you can tell a shift..',
        'Short enough to say in one breath, at A1.'],
        vocab: ['fifteen',
        'verbs',
        'learn',
        'shift',
        'start',
        'started',
        'open',
        'opened',
        'stop',
        'doubles']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Fifteen verbs. Learn these fifteen and '
        + 'you can tell a shift.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '9.2.4R',
      bookRef: 'Unit 9 · 9.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: Yesterday I . Then . At the .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'Yesterday the bread came late. Then the till roll finished and I '
              + 'took the spare. At four a customer lost her purse and we found '
              + 'it',
            minWords: 6,
            rows: 3,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — Yesterday I . Then —. At — the —. (The dashes are '
          + 'blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Fifteen verbs. Learn these fifteen and you can tell a shift.',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (9.2) teaches: '
          + 'Fifteen verbs. Learn these fifteen and you can tell a shift.. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Fifteen verbs. Learn these fifteen and '
          + 'you can tell a shift..',
        'Short enough to say in one breath, at A1.'],
        vocab: ['fifteen',
        'verbs',
        'learn',
        'shift',
        'start',
        'started',
        'open',
        'opened',
        'stop',
        'doubles'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Fifteen verbs. Learn these fifteen and '
        + 'you can tell a shift.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '9.2.5',
      bookRef: 'Unit 9 · 9.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the night-shift sheet. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>NIGHT SHIFT — THURSDAY INTO FRIDAY — S. QASSAR</b></p><table '
          + 'class=\'bk\'><tr><th>Time</th><th>What '
          + 'happened</th></tr><tr><td>22.00</td><td>I <b>started</b>. I '
          + '<b>opened</b> the back store.</td></tr><tr><td>22.15</td><td>I '
          + '<b>checked</b> rows one to four.</td></tr><tr><td>23.00</td><td>⚠ '
          + '<b>The light over the loading door went out.</b> I <b>stopped</b> '
          + 'work.</td></tr><tr><td>23.10</td><td>I <b>took</b> the torch from '
          + 'the counter.</td></tr><tr><td>01.00</td><td>⚠ <b>The lorry arrived — '
          + 'two hours early.</b> I <b>opened</b> the '
          + 'gate.</td></tr><tr><td>01.00–02.00</td><td>We <b>unloaded</b> in the '
          + 'dark. ⚠ <b>I did not count it.</b></td></tr><tr><td>02.00</td><td>I '
          + '<b>gave</b> the driver the note. He '
          + '<b>left</b>.</td></tr><tr><td>06.00</td><td>I <b>closed</b> the gate '
          + 'and <b>finished</b>.</td></tr></table><p>⚠ <b>The light is still '
          + 'out. Nobody has been told but you. S.Q.</b></p><h4>Writer\'s '
          + 'box</h4><p><b>A shift sheet is a TIME column and a what-happened '
          + 'column, in order, from the start to the end.</b></p><p>⚠ <b>24-hour '
          + 'time on a night shift. Always.</b> <b><i>1.00</i> on a sheet that '
          + 'covers Thursday into Friday is unreadable;</b> <b><i>01.00</i> is '
          + 'not.</b> <b>Unit 3.2 said this and a night shift is where it '
          + 'matters.</b></p><p>⚠ <b>And the line that costs money goes on the '
          + 'sheet too:</b> <i>I did not count it.</i> <b>A shift sheet with only '
          + 'the good news on it is a shift sheet the next man cannot use.</b> '
          + '<b>9.4 is about that sentence.</b></p>'
      },
      questions: [{
            q: 'What time did the light go out?',
            model: '23.00',
            minWords: 1,
            rows: 2,
            hint: 'A clock time from the night sheet above. It is late.'
          },
      {
            q: 'How early was the lorry?',
            model: 'Two hours — it came at 01.00 and was expected at 03.00',
            minWords: 3,
            rows: 2,
            keys: ['hours',
              'expected'],
            need: 1,
            hint: 'Two times - when it came and when it was expected - and then the '
              + 'difference.'
          },
      {
            q: 'Which line is the one Abu Yasser will stop at?',
            model: 'I did not count it',
            minWords: 2,
            rows: 2,
            hint: 'Find the line that reports something NOT done. That is always '
              + 'the line a supervisor reads twice.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '9.2.6',
      bookRef: 'Unit 9 · 9.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a shift sheet for your own last shift (<b>15 words or more</b>). '
  + '24-hour time, in order.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Time</th><th>What '
          + 'happened</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      model: ['EARLY SHIFT — FRIDAY — H. MOURAD'],
      meter: {
        label: 'words from this lesson',
        words: ['fifteen',
        'verbs',
        'learn',
        'shift',
        'start',
        'started',
        'open',
        'opened']
      },
      coach: {
        title: 'What to include',
        task: 'Write a shift sheet for your own last shift (15 words or more). 24-hour '
  + 'time, in order.',
        criteria: [{ t: 'A shift sheet is a TIME column and a what-happened column, in '
              + 'order, from the start to the end.' },
            { t: '⚠ 24-hour time on a night shift. Always. 1.00 on a sheet that '
              + 'covers Thursday into Friday is unreadable; 01.00 is not. Unit '
              + '3.2 said this and a night shift is where it matters.' },
            { t: '⚠ And the line that costs money goes on the sheet too: I did not '
              + 'count it. A shift sheet with only the good news on it is a shift '
              + 'sheet the next man cannot use. 9.4 is about that sentence.' }]
      },
      aiCheck: {
        task: 'Write a shift sheet for your own last shift (15 words or more). '
          + '24-hour time, in order.',
        grammar: 'Fifteen verbs. Learn these fifteen and you can tell a shift.',
        must: ['A shift sheet is a TIME column and a what-happened column, in order, '
          + 'from the start to the end.',
        '⚠ 24-hour time on a night shift. Always. 1.00 on a sheet that covers '
          + 'Thursday into Friday is unreadable; 01.00 is not. Unit 3.2 said this '
          + 'and a night shift is where it matters.',
        '⚠ And the line that costs money goes on the sheet too: I did not '
          + 'count it. A shift sheet with only the good news on it is a shift '
          + 'sheet the next man cannot use. 9.4 is about that sentence.'],
        vocab: ['fifteen',
        'verbs',
        'learn',
        'shift',
        'start',
        'started',
        'open',
        'opened',
        'stop',
        'doubles']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '9.2.6P',
      bookRef: 'Unit 9 · 9.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>24-hour time on every '
          + 'line</td><td>&nbsp;</td></tr><tr><td>The lines are in '
          + 'order</td><td>&nbsp;</td></tr><tr><td>Past verbs — no <i>goed</i>, '
          + 'no <i>taked</i></td><td>&nbsp;</td></tr><tr><td>At least one line '
          + 'that is bad news</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "1.00 lorry came" · (pointing) at six '
              + 'good lines',
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
        grammar: 'Fifteen verbs. Learn these fifteen and you can tell a shift.',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (9.2) '
          + 'teaches: Fifteen verbs. Learn these fifteen and you can tell a '
          + 'shift.. Judge the language against THAT and against nothing the '
          + 'course has not taught yet.',
        must: ['A shift sheet is a TIME column and a what-happened column, in order, '
          + 'from the start to the end.',
        '⚠ 24-hour time on a night shift. Always. 1.00 on a sheet that covers '
          + 'Thursday into Friday is unreadable; 01.00 is not. Unit 3.2 said this '
          + 'and a night shift is where it matters.',
        '⚠ And the line that costs money goes on the sheet too: I did not '
          + 'count it. A shift sheet with only the good news on it is a shift '
          + 'sheet the next man cannot use. 9.4 is about that sentence.'],
        vocab: ['fifteen',
        'verbs',
        'learn',
        'shift',
        'start',
        'started',
        'open',
        'opened',
        'stop',
        'doubles'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '9.2.6R',
      bookRef: 'Unit 9 · 9.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their bad-news line. The class says if they would have written it.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Fifteen verbs. Learn these fifteen and '
        + 'you can tell a shift.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '9.2.7',
      bookRef: 'Unit 9 · 9.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a shift that did not go to plan (<b>20 to 35 words</b>). What '
  + 'happened? When? What did you do?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['On Tuesday the water stopped at half past five and I baked on dirty '
        + 'trays. I wrote it on the sheet. Nobody read the sheet, so on Wednesday '
        + 'I baked on dirty trays again'],
      stems: ['On Tuesday the water…',
      'I wrote it…',
      'Nobody read the sheet…'],
      meter: {
        label: 'words from this lesson',
        words: ['fifteen',
        'verbs',
        'learn',
        'shift',
        'start',
        'started',
        'open',
        'opened']
      },
      coach: {
        title: 'What to include',
        task: 'Write about a shift that did not go to plan (20 to 35 words). What happened? '
  + 'When? What did you do?',
        criteria: [{ t: 'A shift sheet is a TIME column and a what-happened column, in '
              + 'order, from the start to the end.' },
            { t: '⚠ 24-hour time on a night shift. Always. 1.00 on a sheet that '
              + 'covers Thursday into Friday is unreadable; 01.00 is not. Unit '
              + '3.2 said this and a night shift is where it matters.' },
            { t: '⚠ And the line that costs money goes on the sheet too: I did not '
              + 'count it. A shift sheet with only the good news on it is a shift '
              + 'sheet the next man cannot use. 9.4 is about that sentence.' }]
      },
      aiCheck: {
        task: 'Write about a shift that did not go to plan (20 to 35 words). What '
          + 'happened? When? What did you do?',
        grammar: 'Fifteen verbs. Learn these fifteen and you can tell a shift.',
        must: ['A shift sheet is a TIME column and a what-happened column, in order, '
          + 'from the start to the end.',
        '⚠ 24-hour time on a night shift. Always. 1.00 on a sheet that covers '
          + 'Thursday into Friday is unreadable; 01.00 is not. Unit 3.2 said this '
          + 'and a night shift is where it matters.',
        '⚠ And the line that costs money goes on the sheet too: I did not '
          + 'count it. A shift sheet with only the good news on it is a shift '
          + 'sheet the next man cannot use. 9.4 is about that sentence.'],
        vocab: ['fifteen',
        'verbs',
        'learn',
        'shift',
        'start',
        'started',
        'open',
        'opened',
        'stop',
        'doubles']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '9.2.7P',
      bookRef: 'Unit 9 · 9.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did you write it down at the '
  + 'time? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Did you write it down at the time? — Yes. Twice. Nobody looked',
            minWords: 4,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did you write it down '
          + 'at the time? Write the answer.',
        grammar: 'Fifteen verbs. Learn these fifteen and you can tell a shift.',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (9.2) teaches: Fifteen verbs. Learn these fifteen and you can '
          + 'tell a shift.. Judge the language against THAT and against nothing '
          + 'the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Fifteen verbs. Learn these fifteen and '
          + 'you can tell a shift..',
        'Short enough to say in one breath, at A1.'],
        vocab: ['fifteen',
        'verbs',
        'learn',
        'shift',
        'start',
        'started',
        'open',
        'opened',
        'stop',
        'doubles'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Fifteen verbs. Learn these fifteen and '
        + 'you can tell a shift.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '9.2.7R',
      bookRef: 'Unit 9 · 9.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many was it written down at the time? Count them '
  + 'on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> your last shift as a '
          + 'sheet, with 24-hour times and eight lines (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Fifteen verbs. Learn these fifteen and '
        + 'you can tell a shift.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
