/* Unit 10 · cycle 10.5 — There is a light and it does not work.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE2.page('u10-s05', {
  book: { source: 'Proactive Business English · A1 Book 2', ref: 'Unit 10 · 10.5', part: '10.5',
          section: '5', lesson: 'There is a light and it does not work', title: 'There is a light and it does not work' },
  objective: 'report something unsafe, to a person',
  study: {
    minutes: 90,
    objective: 'report something unsafe, to a person',
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
    task: 'Write how you report something unsafe.',
    weak: 'I wrote it on the sheet. Nobody fixed it.',
    change: ['Writing it down is not reporting it. Say who you TOLD - a name, not a sheet.',
        'Say how long it has been like that; the number of days is what makes '
          + 'somebody move.'],
    better: 'The light over the loading door does not work. I wrote it on the '
      + 'Tuesday, Wednesday and Thursday sheets and told nobody. On Friday I told '
      + 'Abu Yasser, and an electrician comes on Monday.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '10.5.1',
      bookRef: 'Unit 10 · 10.5 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Name one unsafe thing at your work that nobody has fixed. Say '
              + 'it. How long?',
            minWords: 6,
            rows: 2,
            hint: 'The \'how long\' is the part that makes somebody move. Days or '
              + 'weeks, as near as you can.'
          },
      {
            q: 'Who would you tell? Say the person\'s name, not their job.',
            minWords: 6,
            rows: 2,
            hint: 'A job title is nobody. A name is somebody who can be asked tomorrow.'
          }],
      ideas: ['Reporting something unsafe'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
    },
    {
      id: 'c2',
      ref: '10.5.2',
      bookRef: 'Unit 10 · 10.5 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u10-10-5',
      passage: {
        title: 'Language box',
        html: '<p><b>Reporting something unsafe</b></p><table '
          + 'class=\'bk\'><tr><th></th><th>What you say</th></tr><tr><td><b>1 the '
          + 'thing</b></td><td><b>There is a light over the loading door and it '
          + 'does not work.</b></td></tr><tr><td><b>2 how '
          + 'long</b></td><td><b>Three nights. Since '
          + 'Tuesday.</b></td></tr><tr><td><b>3 what it means</b></td><td><b>We '
          + 'unloaded forty cartons in the dark.</b></td></tr><tr><td><b>4 to a '
          + 'PERSON</b></td><td>⚠ <b>and you say it to a NAME, not to a '
          + 'sheet</b></td></tr></table><p>⚠ <b><i>There is a <span '
          + 'class="blank"></span> and it <span class="blank"></span>.</i></b> '
          + '<b>The thing, then what is wrong with it.</b> <b>It is the shape '
          + 'from 5.6 — <i>there is no note</i> — turned round.</b></p><p>⚠ '
          + '<b>And the whole cycle is in the fourth line.</b> <b>A sheet is for '
          + 'the RECORD. A person is for TELLING.</b> <b>Samih wrote it correctly '
          + 'three times and told the wall.</b></p><p>⚠ <b>Say BOTH, the same '
          + 'day.</b> <b>That is Unit 6.6 — the slip and the telling — and this '
          + 'is the second time the book has needed it.</b> <b>Write it so it '
          + 'exists. Tell somebody so it happens.</b></p><p><b>Practise:</b> '
          + 'Report it in three parts.</p><p>1 The thing: <span '
          + 'class="blank"></span>. 2 How long: <span class="blank"></span>. 3 '
          + 'What it means: <span class="blank"></span>.</p><p><b>Useful '
          + 'words:</b> There is a… and it… · since Tuesday · three nights · I '
          + 'told the wall. · Both.</p><p><b>Sound — the flat report.</b> 🔊 '
          + '<b>Track 10.10</b> Listen. <i>There is a light over the loading '
          + 'door↘ and it does not work.↘</i> <b>Flat, no complaint in it.</b> '
          + '<b>A report said as a complaint gets answered as a complaint.</b> '
          + 'Say it four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Who does Samih tell in the end?',
            options: [{
              t: 'Abu Yasser',
              ok: true,
              why: 'Nour says it: this morning you told Abu Yasser.'
            },
            {
              t: 'Nour',
              ok: false,
              why: 'Nour is the one asking the question. She is not who he told.'
            },
            {
              t: 'both, and the electrician',
              ok: false,
              why: 'No electrician is in this scene at all.'
            }],
            evidence: 'Nour\'s line about what he did this morning'
          },
        {
            q: 'Listen again. How soon after Samih told Abu Yasser was the '
              + 'electrician booked?',
            options: [{
              t: 'by ten the same morning',
              ok: true,
              why: 'Three nights on a sheet did nothing; one conversation took a few hours.'
            },
            {
              t: 'the following Monday',
              ok: false,
              why: 'Monday is when the electrician COMES, in cycle 9.3. The '
                + 'booking was much faster.'
            },
            {
              t: 'after three more nights',
              ok: false,
              why: 'Nothing waited once a person had been told.'
            }],
            evidence: 'Nour\'s line about what happened this morning'
          },
        {
            q: 'What is Nour\'s distinction between the sheet and a person?',
            options: [{
              t: 'the sheet is for the record; a person is for telling',
              ok: true,
              why: 'Samih had told the wall three times - written down and '
                + 'reported are not the same act.'
            },
            {
              t: 'the sheet is faster than telling somebody',
              ok: false,
              why: 'The scene is evidence of exactly the opposite.'
            },
            {
              t: 'only the supervisor may write on the sheet',
              ok: false,
              why: 'Samih writes on it himself, three times.'
            }],
            evidence: 'her two lines about the record and the telling'
          }],
        say: true
      }
    },
    {
      id: 'c15',
      ref: '10.5.2',
      bookRef: 'Unit 10 · 10.5 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Report it in three parts.',
      text: '<b>1</b> The thing: [[1]]. &nbsp; <b>2</b> How long: [[2]]. &nbsp; '
      + '<b>3</b> What it means: [[3]].',
      plain: true,
      small: true,
      answers: {
        
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '10.5.2',
      bookRef: 'Unit 10 · 10.5 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many times had he told somebody before?',
            model: 'He had written it three times and told nobody',
            minWords: 3,
            rows: 2,
            keys: ['written',
              'nobody',
              'times'],
            need: 1,
            hint: 'He had done one thing several times and another thing not at '
              + 'all. Say both halves.'
          },
      {
            q: 'What did he do differently this time?',
            model: 'He told a person',
            minWords: 1,
            rows: 2,
            hint: 'Three words, and they are about a person rather than a form. '
              + 'Writing it down had not worked three times.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '10.5.3',
      bookRef: 'Unit 10 · 10.5 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One reports. One asks the hard question. Then change places.',
      scene: 'u10-10-5-pair',
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
        rows: [['Samih · light over the loading door · Three · three · person · wall · three',
          'Hala · water in the morning · Three · three · person · sheet · three']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '10.5.3R',
      bookRef: 'Unit 10 · 10.5 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ There is a… and it…</td><td>☐ since '
          + 'Tuesday</td><td>☐ three nights</td><td>☐ I told the wall.</td><td>☐ '
          + 'Both.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['Reporting something unsafe'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Reporting something unsafe.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '10.5.4',
      bookRef: 'Unit 10 · 10.5 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Four unsafe things at your work. Write it. And write the NAME of the person '
  + 'you will tell.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The thing</th><th>How long</th><th>What '
          + 'it means</th><th>Who I will tell — a '
          + 'NAME</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'The thing: the broken step How long: 5 weeks Means: somebody '
              + 'carries trays down it eight times a day Will tell: · The thing: '
              + 'no guard on the slicer How long: since March Means: nobody uses '
              + 'it, so we cut everything by hand Will tell: · The thing: gas '
              + 'bottle behind the oven How long: always Means: · The thing: the '
              + 'fire exit has no sign How long: always Means: the two new girls '
              + 'would go the wrong way Will tell: Nour, today',
            minWords: 6,
            rows: 3,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Four unsafe things at your work. Write it. And write the NAME of the '
          + 'person you will tell.',
        grammar: 'Reporting something unsafe',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (10.5) teaches: Reporting something unsafe. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Reporting something unsafe.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['reporting',
        'something',
        'unsafe',
        'thing',
        'wrong',
        'shape',
        'note',
        'turned',
        'round',
        'whole']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Reporting something unsafe.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '10.5.4R',
      bookRef: 'Unit 10 · 10.5 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: There is a and it . weeks. It means . I will tell .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'There is a step at the back door and it is broken. Five weeks. '
              + 'Somebody carries trays down it eight times a day. I will tell '
              + 'Nour today',
            minWords: 6,
            rows: 3,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — There is a — and it —. — weeks. It means —. I will '
          + 'tell —. (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Reporting something unsafe',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (10.5) teaches: '
          + 'Reporting something unsafe. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Reporting something unsafe.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['reporting',
        'something',
        'unsafe',
        'thing',
        'wrong',
        'shape',
        'note',
        'turned',
        'round',
        'whole'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Reporting something unsafe.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '10.5.5',
      bookRef: 'Unit 10 · 10.5 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the book Nour started. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>UNSAFE THINGS — REPORTED, TOLD, AND DONE</b></p><table '
          + 'class=\'bk\'><tr><th>The thing</th><th>Written on</th><th>Told to, '
          + 'and when</th><th>Done?</th></tr><tr><td>light over loading '
          + 'door</td><td>Tue, Wed, Thu sheets</td><td>⚠ <b>nobody until '
          + 'Friday</b></td><td>✓ Friday — electrician booked by '
          + '10.00</td></tr><tr><td>wet floor by the '
          + 'door</td><td>nothing</td><td>Majd, every morning</td><td>✗ <b>nobody '
          + 'has fixed the drain</b></td></tr><tr><td>broken step at the '
          + 'back</td><td>Jan sheet</td><td>A.Y., January</td><td>✓ '
          + 'February</td></tr><tr><td>no guard on the '
          + 'saw</td><td>nothing</td><td>nobody</td><td>⚠ <b>✗ — and nobody has '
          + 'used the saw since March</b></td></tr></table><p>⚠ <b>Written and '
          + 'not told: three days. Told and not written: nothing fixed. Both: '
          + 'fixed in a day. N.M.</b></p><h4>Writer\'s box</h4><p><b>An '
          + 'unsafe-things book has four columns:</b> the thing → <b>written '
          + 'on</b> → <b>told to, and when</b> → <b>done?</b></p><p>⚠ <b>The two '
          + 'middle columns must be SEPARATE.</b> <b>Written and told are '
          + 'different actions and the book proves it:</b> <b>written and not '
          + 'told took three days; told and not written is still not fixed; both '
          + 'took one day.</b></p><p>⚠ <b>And the saw line is the one to read '
          + 'twice.</b> <b>Nothing written, nobody told, and nobody has used it '
          + 'since March</b> — <b>which looks like a solution and is not.</b> '
          + '<b>A dangerous thing that everybody is quietly avoiding is a '
          + 'dangerous thing waiting for a new man who does not know.</b></p>'
      },
      questions: [{
            q: 'How long was the light written down before anybody was told?',
            model: 'Three days — Tuesday, Wednesday and Thursday sheets, told to '
              + 'nobody until Friday',
            minWords: 4,
            rows: 2,
            keys: ['days',
              'tuesday',
              'wednesday',
              'thursday'],
            need: 1,
            hint: 'Count the days in the log, name them, and say when a person was '
              + 'finally told.'
          },
      {
            q: 'Which thing was told to somebody every morning and still not fixed?',
            model: 'The wet floor — told to Majd every morning and the drain is '
              + 'still not fixed',
            minWords: 5,
            rows: 2,
            keys: ['wet',
              'floor',
              'majd',
              'drain'],
            need: 1,
            hint: 'Find the row that was reported most often. Say who was told, and '
              + 'what underneath it is still broken.'
          },
      {
            q: 'Which line is the most dangerous, and why?',
            model: 'The saw — nothing written, nobody told, and nobody has used it since March',
            minWords: 4,
            rows: 2,
            keys: ['saw',
              'nothing',
              'written',
              'nobody'],
            need: 1,
            hint: 'Look for the row with nothing in ANY column - not written, not '
              + 'told - and say why that silence is the danger.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '10.5.6',
      bookRef: 'Unit 10 · 10.5 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write an unsafe-things book for your own work (<b>15 words or more</b>). '
  + 'Four lines, with written and told in separate columns.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The thing</th><th>Written '
          + 'on</th><th>Told to, and '
          + 'when</th><th>Done?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      model: ['UNSAFE THINGS — REPORTED, TOLD, AND DONE'],
      meter: {
        label: 'words from this lesson',
        words: ['reporting',
        'something',
        'unsafe',
        'thing',
        'wrong',
        'shape',
        'note',
        'turned']
      },
      coach: {
        title: 'What to include',
        task: 'Write an unsafe-things book for your own work (15 words or more). Four '
  + 'lines, with written and told in separate columns.',
        criteria: [{ t: 'An unsafe-things book has four columns: the thing → written on → '
              + 'told to, and when → done?' },
            { t: '⚠ The two middle columns must be SEPARATE. Written and told are '
              + 'different actions and the book proves it: written and not told '
              + 'took three days; told and not written is still not fixed; both '
              + 'took one day.' },
            { t: '⚠ And the saw line is the one to read twice. Nothing written, '
              + 'nobody told, and nobody has used it since March — which looks '
              + 'like a solution and is not. A dangerous thing that everybody is '
              + 'quietly avoiding is a dangerous thing waiting for a new man who '
              + 'does not know.' }]
      },
      aiCheck: {
        task: 'Write an unsafe-things book for your own work (15 words or more). '
          + 'Four lines, with written and told in separate columns.',
        grammar: 'Reporting something unsafe',
        must: ['An unsafe-things book has four columns: the thing → written on → '
          + 'told to, and when → done?',
        '⚠ The two middle columns must be SEPARATE. Written and told are '
          + 'different actions and the book proves it: written and not told took '
          + 'three days; told and not written is still not fixed; both took one '
          + 'day.',
        '⚠ And the saw line is the one to read twice. Nothing written, nobody '
          + 'told, and nobody has used it since March — which looks like a '
          + 'solution and is not. A dangerous thing that everybody is quietly '
          + 'avoiding is a dangerous thing waiting for a new man who does not '
          + 'know.'],
        vocab: ['reporting',
        'something',
        'unsafe',
        'thing',
        'wrong',
        'shape',
        'note',
        'turned',
        'round',
        'whole']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '10.5.6P',
      bookRef: 'Unit 10 · 10.5 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>Written and told in separate '
          + 'columns</td><td>&nbsp;</td></tr><tr><td>A NAME in the told column, '
          + 'not <i>the office</i></td><td>&nbsp;</td></tr><tr><td>A date in the '
          + 'told column</td><td>&nbsp;</td></tr><tr><td>At least one line that '
          + 'is a quiet avoidance, not a fix</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "told the office" · (pointing) at four lines',
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
        grammar: 'Reporting something unsafe',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (10.5) '
          + 'teaches: Reporting something unsafe. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        must: ['An unsafe-things book has four columns: the thing → written on → '
          + 'told to, and when → done?',
        '⚠ The two middle columns must be SEPARATE. Written and told are '
          + 'different actions and the book proves it: written and not told took '
          + 'three days; told and not written is still not fixed; both took one '
          + 'day.',
        '⚠ And the saw line is the one to read twice. Nothing written, nobody '
          + 'told, and nobody has used it since March — which looks like a '
          + 'solution and is not. A dangerous thing that everybody is quietly '
          + 'avoiding is a dangerous thing waiting for a new man who does not '
          + 'know.'],
        vocab: ['reporting',
        'something',
        'unsafe',
        'thing',
        'wrong',
        'shape',
        'note',
        'turned',
        'round',
        'whole'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '10.5.6R',
      bookRef: 'Unit 10 · 10.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their quiet-avoidance line. The class says what happens '
  + 'when a new person arrives.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Reporting something unsafe'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Reporting something unsafe.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '10.5.7',
      bookRef: 'Unit 10 · 10.5 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about an unsafe thing at your work that everybody avoids (<b>20 to 35 '
  + 'words</b>). What is it? How do people get round it? What would happen to a '
  + 'new person?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['The slicer has had no guard since March. All of us cut by hand instead '
        + 'and nobody has written it down. A new girl started last week and '
        + 'nobody has told her about it yet'],
      stems: ['The slicer has…',
      'All of us…',
      'A new girl…'],
      meter: {
        label: 'words from this lesson',
        words: ['reporting',
        'something',
        'unsafe',
        'thing',
        'wrong',
        'shape',
        'note',
        'turned']
      },
      coach: {
        title: 'What to include',
        task: 'Write about an unsafe thing at your work that everybody avoids (20 to 35 '
  + 'words). What is it? How do people get round it? What would happen to a new '
  + 'person?',
        criteria: [{ t: 'An unsafe-things book has four columns: the thing → written on → '
              + 'told to, and when → done?' },
            { t: '⚠ The two middle columns must be SEPARATE. Written and told are '
              + 'different actions and the book proves it: written and not told '
              + 'took three days; told and not written is still not fixed; both '
              + 'took one day.' },
            { t: '⚠ And the saw line is the one to read twice. Nothing written, '
              + 'nobody told, and nobody has used it since March — which looks '
              + 'like a solution and is not. A dangerous thing that everybody is '
              + 'quietly avoiding is a dangerous thing waiting for a new man who '
              + 'does not know.' }]
      },
      aiCheck: {
        task: 'Write about an unsafe thing at your work that everybody avoids (20 '
          + 'to 35 words). What is it? How do people get round it? What would '
          + 'happen to a new person?',
        grammar: 'Reporting something unsafe',
        must: ['An unsafe-things book has four columns: the thing → written on → '
          + 'told to, and when → done?',
        '⚠ The two middle columns must be SEPARATE. Written and told are '
          + 'different actions and the book proves it: written and not told took '
          + 'three days; told and not written is still not fixed; both took one '
          + 'day.',
        '⚠ And the saw line is the one to read twice. Nothing written, nobody '
          + 'told, and nobody has used it since March — which looks like a '
          + 'solution and is not. A dangerous thing that everybody is quietly '
          + 'avoiding is a dangerous thing waiting for a new man who does not '
          + 'know.'],
        vocab: ['reporting',
        'something',
        'unsafe',
        'thing',
        'wrong',
        'shape',
        'note',
        'turned',
        'round',
        'whole']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '10.5.7P',
      bookRef: 'Unit 10 · 10.5 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Does the new man get told? '
  + 'Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Does the new man get told? — Somebody usually mentions it. Usually',
            minWords: 3,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Does the new man get '
          + 'told? Write the answer.',
        grammar: 'Reporting something unsafe',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (10.5) teaches: Reporting something unsafe. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Reporting something unsafe.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['reporting',
        'something',
        'unsafe',
        'thing',
        'wrong',
        'shape',
        'note',
        'turned',
        'round',
        'whole'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Reporting something unsafe.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '10.5.7R',
      bookRef: 'Unit 10 · 10.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many does a new person get told? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> four unsafe things at '
          + 'your work, with a NAME and a date for each (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Reporting something unsafe'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Reporting something unsafe.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
