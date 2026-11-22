/* Unit 8 · cycle 8.1 — Can I have the tape, please?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE2.page('u8-s01', {
  book: { source: 'Proactive Business English · A1 Book 2', ref: 'Unit 8 · 8.1', part: '8.1',
          section: '1', lesson: 'Can I have the tape, please?', title: 'Can I have the tape, please?' },
  objective: 'ask for a thing',
  study: {
    minutes: 90,
    objective: 'ask for a thing',
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
    task: 'Write how you ask for a thing at work.',
    weak: 'Give me the tape.',
    change: ['Ask, do not order: <i>can I have</i>, and <i>please</i>.',
        'Say WHICH one. There are two of almost everything in this store, so '
          + '\'the tape\' makes the other person ask a question.'],
    better: 'Can I have the wide tape, please? The brown one.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '8.1.1',
      bookRef: 'Unit 8 · 8.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Ask your partner for three things on the table. Say it with Can I have.',
            minWords: 6,
            rows: 2,
            hint: 'Say WHICH one each time - there are usually two of everything. '
              + 'Working alone, ask the empty room and answer yourself.'
          },
      {
            q: 'How do you ask for something at work now? Say it in Arabic. Your '
              + 'teacher writes the English.',
            minWords: 6,
            rows: 2,
            hint: 'Say what you really say, even if it is one word or a hand held '
              + 'out. Then compare it with Ammar\'s.'
          }],
      ideas: ['Asking for a thing'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
    },
    {
      id: 'c2',
      ref: '8.1.2',
      bookRef: 'Unit 8 · 8.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u8-8-1',
      passage: {
        title: 'Language box',
        html: '<p><b>Asking for a thing</b></p><table class=\'bk\'><tr><th>You '
          + 'say</th><th>When</th></tr><tr><td><b>Can I have the tape, '
          + 'please?</b></td><td>anything, to anybody — ⚠ <b>this one sentence '
          + 'does nine jobs out of ten</b></td></tr><tr><td><b>Can I borrow your '
          + 'pen?</b></td><td>you will give it back</td></tr><tr><td><b>Have you '
          + 'got any tape?</b></td><td>you do not know whether there is '
          + 'any</td></tr><tr><td><b>Where is the tape?</b></td><td>⚠ <b>only '
          + 'when you want to fetch it yourself</b> — '
          + '<b>4.3</b></td></tr></table><p>⚠ <b><i>Can I have</i> + the thing + '
          + '<i>please</i>.</b> <b>Three parts, every time, in that '
          + 'order.</b></p><p>⚠ <b>Say WHICH ONE.</b> <i>The wide one. The brown '
          + 'one.</i> <b>There are two of most things at work, and <i>can I have '
          + 'the tape</i> makes somebody ask you a question.</b></p><p>⚠ <b>And '
          + 'say what it is FOR, if you are not asked.</b> <b>Majd gave him the '
          + 'whole roll because he knew what it was for.</b> <b>A reason turns a '
          + 'borrowed thing into a lent one.</b></p><p><b>Practise:</b> Write the '
          + 'question.</p><p>1 You want the tape. <span class="blank"></span>? 2 '
          + 'You want a pen and you will give it back. <span '
          + 'class="blank"></span>? 3 You do not know if there is tape. <span '
          + 'class="blank"></span>?</p><p><b>Useful words:</b> Can I have…, '
          + 'please? · Can I borrow…? · the wide one · What is it for? · Bring it '
          + 'back at four.</p><p><b>Sound — the voice going up.</b> 🔊 <b>Track '
          + '8.2</b> Listen. <i>Can I have the tape, please?↗</i> <b>UP at the '
          + 'end.</b> <b>Said flat it is an order, and people do not like being '
          + 'given orders by a storeman.</b> Say it four times, going up.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Ammar ask for?',
            options: [{
              t: 'a pen',
              ok: false,
              why: 'Ammar is usually the one who writes, so a pen is the obvious '
                + 'guess. He asks for one thing by name.'
            },
            {
              t: 'the tape',
              ok: true,
              why: 'Majd, can I have the tape, please - and then he says which '
                + 'tape: the wide brown one.'
            },
            {
              t: 'the key',
              ok: false,
              why: 'Nothing is locked in this scene and no key is mentioned.'
            }],
            evidence: 'Ammar\'s first line, and then the words wide and brown'
          },
        {
            q: 'Listen again. Which tape does Ammar ask for?',
            options: [{
              t: 'the wide brown one',
              ok: true,
              why: 'Two words of description, and they are what turn a question '
                + 'back into a handover.'
            },
            {
              t: 'the narrow one',
              ok: false,
              why: 'There are two tapes, and the other one is not the one he names.'
            },
            {
              t: 'he does not say',
              ok: false,
              why: 'He does not say at first - and that is exactly what Majd\'s '
                + 'question corrects.'
            }],
            evidence: 'Ammar\'s second line, after Majd asks which one'
          },
        {
            q: 'Why does Majd give him the whole roll?',
            options: [{
              t: 'because Ammar said what it was for',
              ok: true,
              why: 'He is taping crushed cartons, which is a job rather than a '
                + 'moment - so Majd gives him the roll and names a time for its '
                + 'return.'
            },
            {
              t: 'because Ammar said please',
              ok: false,
              why: 'Please gets him served politely. It is the next question, '
                + 'about what it is for, that gets him more than he asked for.'
            },
            {
              t: 'because the counter has a lot of tape',
              ok: false,
              why: 'Nothing is said about how much tape there is.'
            }],
            evidence: 'the last three lines, after Majd asks what it is for'
          }],
        say: true
      }
    },
    {
      id: 'c15',
      ref: '8.1.2',
      bookRef: 'Unit 8 · 8.1 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Write the question.',
      text: '<b>1</b> You want the tape. [[1]]? &nbsp; <b>2</b> You want a pen and '
      + 'you will give it back. [[2]]? &nbsp; <b>3</b> You do not know if there '
      + 'is tape. [[3]]?',
      plain: true,
      small: true,
      answers: {
        
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '8.1.2',
      bookRef: 'Unit 8 · 8.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does Majd ask back?',
            model: 'Which tape? There are two',
            minWords: 2,
            rows: 2,
            hint: 'He cannot act on the request as it stands. His question is about '
              + 'which of two.'
          },
      {
            q: 'Why does Ammar need it?',
            model: 'Two cartons came crushed and he is taping them',
            minWords: 3,
            rows: 2,
            keys: ['cartons',
              'crushed',
              'taping'],
            need: 1,
            hint: 'The reason connects back to Unit 7 - what arrived in that state, '
              + 'and what he is doing about it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '8.1.3',
      bookRef: 'Unit 8 · 8.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One asks. One gives. Then change places.',
      scene: 'u8-8-1-pair',
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
        rows: [['Majd · tape · wide · brown',
          'Samih · key · small · black']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '8.1.3R',
      bookRef: 'Unit 8 · 8.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Can I have…, please?</td><td>☐ Can I '
          + 'borrow…?</td><td>☐ the wide one</td><td>☐ What is it for?</td><td>☐ '
          + 'Bring it back at four.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['Asking for a thing'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Asking for a thing.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '8.1.4',
      bookRef: 'Unit 8 · 8.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Four things you ask for at work. Write it. Say which one, and what for.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The thing</th><th>Which one</th><th>Who '
          + 'I ask</th><th>What it is '
          + 'for</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'The thing: tape Which one: the wide brown Who I ask: Majd What '
              + 'it is for: taping crushed cartons · The thing: the back store '
              + 'key Which one: the small black Who I ask: Samih What it is for: '
              + 'the Monday count · The thing: a pen Which one: any Who I ask: '
              + 'Nour What it is for: the count sheet · The thing: the ladder '
              + 'Which one: the long one Who I ask: nobody — it lives by the '
              + 'bench What it is for: shelf four',
            minWords: 6,
            rows: 3,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Four things you ask for at work. Write it. Say which one, and what for.',
        grammar: 'Asking for a thing',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (8.1) teaches: Asking for a thing. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Asking for a thing.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['asking',
        'thing',
        'parts',
        'time',
        'order',
        'wide',
        'brown',
        'things',
        'work',
        'tape']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Asking for a thing.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '8.1.4R',
      bookRef: 'Unit 8 · 8.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I ask for the . The one. It is for .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I ask Samih for the back store key. The small black one. It is '
              + 'for the Monday count',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — I ask — for the —. The — one. It is for —. (The '
          + 'dashes are blanks the learner fills in with their own workplace. '
          + 'Judge what they wrote in them, not the blanks.)',
        grammar: 'Asking for a thing',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (8.1) teaches: '
          + 'Asking for a thing. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Asking for a thing.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['asking',
        'thing',
        'parts',
        'time',
        'order',
        'wide',
        'brown',
        'things',
        'work',
        'tape'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Asking for a thing.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '8.1.5',
      bookRef: 'Unit 8 · 8.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the list on the store door. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>ASK ME, DO NOT TAKE — AND WHO TO ASK</b></p><table '
          + 'class=\'bk\'><tr><th>The thing</th><th>Who has it</th><th>Back '
          + 'when</th></tr><tr><td>the wide brown tape</td><td>Majd, at the '
          + 'counter</td><td>same day</td></tr><tr><td>the back store '
          + 'key</td><td>Samih</td><td>⚠ <b>never — ask him to open '
          + 'it</b></td></tr><tr><td>the long ladder</td><td>anybody, it lives by '
          + 'the bench</td><td>put it back</td></tr><tr><td>a pen</td><td>Nour, '
          + 'upstairs</td><td>⚠ <b>keep it, she has '
          + 'forty</b></td></tr></table><p>⚠ <b>Ask. A thing that walks off is a '
          + 'thing nobody can find at eight the next morning. '
          + 'A.Y.</b></p><h4>Writer\'s box</h4><p><b>An ask-me list has three '
          + 'columns:</b> the thing → <b>who has it</b> → <b>when it comes '
          + 'back</b>.</p><p>⚠ <b>The <i>who</i> column is the useful one.</b> '
          + '<b>A list of things with no names on it tells you what exists and '
          + 'not how to get it.</b></p><p>⚠ <b>And the third column must be able '
          + 'to say NEVER and KEEP IT as well as a time.</b> <b><i>Never — ask '
          + 'him to open it</i> is the most important line on this card</b>, '
          + '<b>because a key is the one thing where the answer is not <i>borrow '
          + 'it</i>.</b></p>'
      },
      questions: [{
            q: 'Who has the back store key?',
            model: 'Samih',
            minWords: 1,
            rows: 2,
            hint: 'One name, from the table above. Look at the who-has-it column.'
          },
      {
            q: 'Which thing do you not have to give back?',
            model: 'A pen — keep it, she has forty',
            minWords: 2,
            rows: 2,
            keys: ['pen',
              'keep',
              'forty'],
            need: 1,
            hint: 'The table\'s own note. One row is treated differently because '
              + 'there are so many of them.'
          },
      {
            q: 'Which thing can you take without asking anybody?',
            model: 'The long ladder — it lives by the bench',
            minWords: 2,
            rows: 2,
            keys: ['long',
              'ladder',
              'lives',
              'bench'],
            need: 1,
            hint: 'One row has nobody\'s name against it. The reason is where it lives.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '8.1.6',
      bookRef: 'Unit 8 · 8.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write an ask-me list for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The thing</th><th>Who has '
          + 'it</th><th>Back '
          + 'when</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      model: ['ASK ME, DO NOT TAKE — AND WHO TO ASK'],
      meter: {
        label: 'words from this lesson',
        words: ['asking',
        'thing',
        'parts',
        'time',
        'order',
        'wide',
        'brown',
        'things']
      },
      coach: {
        title: 'What to include',
        task: 'Write an ask-me list for your own work (15 words or more).',
        criteria: [{ t: 'An ask-me list has three columns: the thing → who has it → when '
              + 'it comes back.' },
            { t: '⚠ The who column is the useful one. A list of things with no '
              + 'names on it tells you what exists and not how to get it.' },
            { t: '⚠ And the third column must be able to say NEVER and KEEP IT as '
              + 'well as a time. Never — ask him to open it is the most important '
              + 'line on this card, because a key is the one thing where the '
              + 'answer is not borrow it.' }]
      },
      aiCheck: {
        task: 'Write an ask-me list for your own work (15 words or more).',
        grammar: 'Asking for a thing',
        must: ['An ask-me list has three columns: the thing → who has it → when it comes back.',
        '⚠ The who column is the useful one. A list of things with no names '
          + 'on it tells you what exists and not how to get it.',
        '⚠ And the third column must be able to say NEVER and KEEP IT as well '
          + 'as a time. Never — ask him to open it is the most important line on '
          + 'this card, because a key is the one thing where the answer is not '
          + 'borrow it.'],
        vocab: ['asking',
        'thing',
        'parts',
        'time',
        'order',
        'wide',
        'brown',
        'things',
        'work',
        'tape']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '8.1.6P',
      bookRef: 'Unit 8 · 8.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>A '
          + 'name in the <i>who</i> column on every '
          + 'line</td><td>&nbsp;</td></tr><tr><td>A <i>back when</i> on every '
          + 'line</td><td>&nbsp;</td></tr><tr><td>At least one line that says '
          + '<i>never</i> or <i>keep it</i></td><td>&nbsp;</td></tr><tr><td>A '
          + 'reason at the bottom</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "the till key — the office" · '
              + '(pointing) Here. (reading) "the trolley"',
            minWords: 4,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Asking for a thing',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (8.1) '
          + 'teaches: Asking for a thing. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        must: ['An ask-me list has three columns: the thing → who has it → when it comes back.',
        '⚠ The who column is the useful one. A list of things with no names '
          + 'on it tells you what exists and not how to get it.',
        '⚠ And the third column must be able to say NEVER and KEEP IT as well '
          + 'as a time. Never — ask him to open it is the most important line on '
          + 'this card, because a key is the one thing where the answer is not '
          + 'borrow it.'],
        vocab: ['asking',
        'thing',
        'parts',
        'time',
        'order',
        'wide',
        'brown',
        'things',
        'work',
        'tape'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '8.1.6R',
      bookRef: 'Unit 8 · 8.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read one line. The class says if they could get the thing in one minute.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Asking for a thing'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Asking for a thing.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '8.1.7',
      bookRef: 'Unit 8 · 8.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about something at your work that is hard to borrow (<b>20 to 35 '
  + 'words</b>). What is it? Who has it? What happens when they are away?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['The till key is the hard one. Only the manager has it and there is no '
        + 'spare. When she is late nobody can open the till and the first '
        + 'customers wait outside'],
      stems: ['The till key…',
      'Only the manager…',
      'When she is…'],
      meter: {
        label: 'words from this lesson',
        words: ['asking',
        'thing',
        'parts',
        'time',
        'order',
        'wide',
        'brown',
        'things']
      },
      coach: {
        title: 'What to include',
        task: 'Write about something at your work that is hard to borrow (20 to 35 words). '
  + 'What is it? Who has it? What happens when they are away?',
        criteria: [{ t: 'An ask-me list has three columns: the thing → who has it → when '
              + 'it comes back.' },
            { t: '⚠ The who column is the useful one. A list of things with no '
              + 'names on it tells you what exists and not how to get it.' },
            { t: '⚠ And the third column must be able to say NEVER and KEEP IT as '
              + 'well as a time. Never — ask him to open it is the most important '
              + 'line on this card, because a key is the one thing where the '
              + 'answer is not borrow it.' }]
      },
      aiCheck: {
        task: 'Write about something at your work that is hard to borrow (20 to 35 '
          + 'words). What is it? Who has it? What happens when they are away?',
        grammar: 'Asking for a thing',
        must: ['An ask-me list has three columns: the thing → who has it → when it comes back.',
        '⚠ The who column is the useful one. A list of things with no names '
          + 'on it tells you what exists and not how to get it.',
        '⚠ And the third column must be able to say NEVER and KEEP IT as well '
          + 'as a time. Never — ask him to open it is the most important line on '
          + 'this card, because a key is the one thing where the answer is not '
          + 'borrow it.'],
        vocab: ['asking',
        'thing',
        'parts',
        'time',
        'order',
        'wide',
        'brown',
        'things',
        'work',
        'tape']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '8.1.7P',
      bookRef: 'Unit 8 · 8.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Is there a spare? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Is there a spare? — No. There was one and it was lost in 2023',
            minWords: 4,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Is there a spare? Write '
          + 'the answer.',
        grammar: 'Asking for a thing',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (8.1) teaches: Asking for a thing. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Asking for a thing.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['asking',
        'thing',
        'parts',
        'time',
        'order',
        'wide',
        'brown',
        'things',
        'work',
        'tape'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Asking for a thing.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '8.1.7R',
      bookRef: 'Unit 8 · 8.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many of these things have no spare? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> six things you ask '
          + 'for at work, with who has each one (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Asking for a thing'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Asking for a thing.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
