/* Unit 1 · cycle 1.2 — This is my colleague, Nadia.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u1-s02', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 1 · 1.2', part: '1.2',
          section: '2', lesson: 'This is my colleague, Nadia', title: 'This is my colleague, Nadia' },
  objective: 'introduce a colleague to somebody else',
  study: {
    minutes: 90,
    objective: 'introduce a colleague to somebody else',
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
    task: 'Write how you introduce a colleague to a visitor at your desk.',
    weak: 'This Nadia. She work here.',
    change: ['<i>This is</i> - the verb is the whole introduction.',
        'Give her job, not the fact that she works here. A visitor needs to '
          + 'know who to ask for what.'],
    better: 'This is Nadia. She\'s our accountant.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '1.2.1',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>We SAY…</th><th>We '
          + 'WRITE…</th></tr><tr><td>This is my colleague, Nadia.</td><td>Nadia '
          + 'Sayegh '
          + '(Accounts)</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Who do you work with? Make a class list of words for people at '
              + 'work: colleague, manager, …',
            minWords: 6,
            rows: 2,
            hint: 'A person: their name, or their job if the line gives no name. '
              + 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Put the words in the right group: colleague · manager · customer '
              + '· supplier · supervisor · assistant · driver · accountant. In '
              + 'our company: Outside our company:',
            model: 'In our company: colleague, manager, supervisor, assistant, '
              + 'driver, accountant · Outside our company: customer, supplier',
            minWords: 4,
            rows: 2,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '1.2.2',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-2',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – possessives and object pronouns</b></p><table '
          + 'class=\'bk\'><tr><th>Subject</th><th>Possessive '
          + 'adjective</th><th>Object</th><th>Example</th></tr><tr><td>I</td><td>my</td><td>me</td><td>This '
          + 'is <b>my</b> desk. Ask '
          + '<b>me</b>.</td></tr><tr><td>you</td><td>your</td><td>you</td><td><b>Your</b> '
          + 'extension is 212.</td></tr><tr><td>he / she / it</td><td>his / her / '
          + 'its</td><td>him / her / it</td><td>That\'s <b>his</b> desk. Ask '
          + '<b>him</b>.</td></tr><tr><td>we / they</td><td>our / '
          + 'their</td><td>us / them</td><td><b>Our</b> office is upstairs. Call '
          + '<b>them</b>.</td></tr></table><p><b>\'s for people:</b> <i>Bassel\'s '
          + 'desk</i> · <i>the manager\'s office</i> · <i>Ms Shamsi\'s '
          + 'company</i>.</p><p>⚠ <i>his</i> and <i>her</i> follow the '
          + '<b>owner</b>, not the thing: <i>Nadia and <b>her</b> desk</i> · '
          + '<i>Bassel and <b>his</b> customers</i>.</p><p><b>Practise:</b> '
          + 'Complete with <i>my, your, his, her, our, their, him, her</i> or '
          + '<i>them</i>.</p><p>1 This is Nadia. <span class="blank"></span> desk '
          + 'is next to mine. 2 That\'s Bassel\'s desk. Ask <span '
          + 'class="blank"></span> about the Homs order. 3 We like <span '
          + 'class="blank"></span> new office. 4 Mr Ayoub is in a meeting. Please '
          + 'call <span class="blank"></span> at four. 5 The customers are '
          + 'waiting. Can you help <span class="blank"></span>?</p><p><b>Useful '
          + 'phrases:</b> This is… · Pleased to meet you. · What do you do here? '
          + '· Who is at that desk? · He / She isn\'t here '
          + 'today.</p><p><b>Pronunciation – linking.</b> 🔊 <b>Track 1.4</b> '
          + 'Listen and repeat: <i>this is</i> /ðɪsɪz/ · <i>this is my '
          + 'colleague</i> · <i>that\'s his desk</i> · <i>ask him</i> '
          + '/ɑːskɪm/</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How many people are in the conversation?',
            options: [{
              t: 'two',
              ok: false,
              why: 'Nour and Nadia do most of the talking, which is why this '
                + 'sounds right - but somebody else makes the introduction and '
                + 'speaks again near the end.'
            },
            {
              t: 'three',
              ok: true,
              why: 'Mr Ayoub introduces them, Nadia answers, and Nour asks.'
            },
            {
              t: 'four',
              ok: false,
              why: 'Four names are said aloud. One of them is away today and never speaks.'
            }],
            evidence: 'count the different voices, not the names - one person is talked '
              + 'about and never speaks'
          },
        {
            q: 'Books closed. Listen. Where is Bassel today?',
            options: [{
              t: 'in Homs, with a customer',
              ok: true,
              why: 'Nadia says it while she is explaining whose the empty desk is.'
            },
            {
              t: 'in the warehouse',
              ok: false,
              why: 'Nobody is in the warehouse in this exchange - that is the next scene.'
            },
            {
              t: 'at the desk next to Nadia',
              ok: false,
              why: 'That desk is NOUR\'s. Nadia says so in her first line.'
            }],
            evidence: 'Nadia\'s third line, about the empty desk'
          },
        {
            q: 'What does Nadia actually tell Nour about Abu Yasser?',
            options: [{
              t: 'that she can ask him anything',
              ok: true,
              why: '"Ask him anything - he knows it all." It is advice about how '
                + 'to use him, not a fact about his job.'
            },
            {
              t: 'that he is in sales',
              ok: false,
              why: 'Bassel is in sales. Abu Yasser is the warehouse supervisor.'
            },
            {
              t: 'that he is away today',
              ok: false,
              why: 'Bassel is away today. Abu Yasser is not mentioned as absent.'
            }],
            evidence: 'her last line, when Nour asks his name'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '1.2.2',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Complete with my, your, his, her, our, their, him, her or them.',
      text: '<b>1</b> This is Nadia. [[1]] desk is next to mine. &nbsp; <b>2</b> '
      + 'That\'s Bassel\'s desk. Ask [[2]] about the Homs order. &nbsp; <b>3</b> '
      + 'We like [[3]] new office. &nbsp; <b>4</b> Mr Ayoub is in a meeting. '
      + 'Please call [[4]] at four. &nbsp; <b>5</b> The customers are waiting. '
      + 'Can you help [[5]]?',
      plain: true,
      small: true,
      answers: {
        '1': ['Her'],
        '2': ['him'],
        '3': ['our'],
        '4': ['him'],
        '5': ['them']
      }
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '1.2.2',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is Nadia\'s job?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>Nadia\'s</i> in '
              + 'it. Play it again with the subtitles on.'
          },
      {
            q: 'Where is Bassel today?',
            minWords: 6,
            rows: 2,
            hint: 'A place - a room, a floor, a town. Look in the dialogue above '
              + 'for the line with <i>Bassel</i> in it. Play it again with the '
              + 'subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '1.2.3',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in threes. A introduces B to C. Then change roles. Then use the role cards.',
      scene: 'u1-1-2-pair',
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
        head: ['Role card 1',
        'Role card 2'],
        rows: [['Abu Yasser · warehouse supervisor · looks after the stock and the deliveries',
          'Hala Mourad · customer service · looks after complaints and repairs']]
      }
    },
    {
      id: 'c6',
      kind: 'own',
      ref: '1.2.3R',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two groups of three act out their introduction for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ This is…</td><td>☐ Pleased to meet '
          + 'you.</td><td>☐ What do you do here?</td><td>☐ I look '
          + 'after…</td><td>☐ That\'s … \'s desk.</td><td>☐ He / She isn\'t here '
          + 'today.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['Grammar – possessives and object pronouns',
      'Warehouse: Abu Yasser — ext. 230'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – possessives and object pronouns.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '1.2.4',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Work in threes. Introduce your real colleague (or invent one) to a third '
  + 'person. Say the person\'s name, job and one duty. Make notes.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Name</th><th>Job</th><th>Looks '
          + 'after</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Grammar – possessives and object pronouns',
      'Warehouse: Abu Yasser — ext. 230'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Work in threes. Introduce your real colleague (or invent one) to a '
          + 'third person. Say the person\'s name, job and one duty. Make notes.',
        grammar: 'Grammar – possessives and object pronouns',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (1.2) teaches: Grammar – possessives and object pronouns. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – possessives and object pronouns.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'possessives',
        'object',
        'pronouns',
        'people',
        'bassel\'s',
        'desk',
        'manager\'s',
        'office',
        'shamsi\'s']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – possessives and object pronouns.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '1.2.4R',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class about one person you met: This is . He\'s / She\'s our . He / '
  + 'She looks after .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Grammar – possessives and object pronouns',
      'Warehouse: Abu Yasser — ext. 230'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class about one person you met: — This is —. He\'s / She\'s '
          + 'our —. He / She looks after —. (The dashes are blanks the learner '
          + 'fills in with their own workplace. Judge what they wrote in them, '
          + 'not the blanks.)',
        grammar: 'Grammar – possessives and object pronouns',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (1.2) teaches: '
          + 'Grammar – possessives and object pronouns. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – possessives and object pronouns.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'possessives',
        'object',
        'pronouns',
        'people',
        'bassel\'s',
        'desk',
        'manager\'s',
        'office',
        'shamsi\'s'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – possessives and object pronouns.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '1.2.5',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Nour writes the staff list for the office door. Read it and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>SHAM TRADING CO. — SECOND FLOOR</b></p><p>Mr Khaled Ayoub — '
          + 'Office Manager — ext. 201</p><p>Nadia Sayegh — Accounts — ext. 208 — '
          + 'invoices and payments</p><p>Bassel Nassif — Sales — ext. 205 — '
          + 'customers in Homs and Aleppo</p><p>Nour Mansour — Assistant — ext. '
          + '212 — orders and post</p><p>Warehouse: Abu Yasser — ext. '
          + '230</p><h4>Writer\'s box</h4><p><b>Parts of a staff list:</b> '
          + 'company and floor → name → department or job → extension → what the '
          + 'person looks after.</p><p>Keep the <b>same order</b> in every line. '
          + 'A reader looks down the list, not across it.</p><p>Use a dash (—) or '
          + 'a comma between the parts, and use it the same way every time.</p>'
      },
      questions: [{
            q: 'Who looks after the invoices?',
            minWords: 6,
            rows: 2,
            hint: 'A person: their name, or their job if the line gives no name. '
              + 'Look in the text above for the line with <i>invoices</i> in it.'
          },
      {
            q: 'What is Bassel\'s extension?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>Bassel\'s</i> in it.'
          },
      {
            q: 'Which person is not on the second floor?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with <i>person</i> in it.'
          }],
      ideas: ['Warehouse: Abu Yasser — ext. 230',
      'Grammar – possessives and object pronouns'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '1.2.6',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Complete the staff list for <b>your</b> office or department. Write four people.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Name</th><th>Job / '
          + 'department</th><th>Ext.</th><th>Looks '
          + 'after</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'possessives',
        'object',
        'pronouns',
        'people',
        'bassel\'s',
        'desk',
        'manager\'s']
      },
      coach: {
        title: 'What to include',
        task: 'Complete the staff list for your office or department. Write four people.',
        criteria: [{ t: 'Parts of a staff list: company and floor → name → department or '
              + 'job → extension → what the person looks after.' },
            { t: 'Keep the same order in every line. A reader looks down the list, '
              + 'not across it.' },
            { t: 'Use a dash (—) or a comma between the parts, and use it the same '
              + 'way every time.' }]
      },
      aiCheck: {
        task: 'Complete the staff list for your office or department. Write four people.',
        grammar: 'Grammar – possessives and object pronouns',
        must: ['Parts of a staff list: company and floor → name → department or job '
          + '→ extension → what the person looks after.',
        'Keep the same order in every line. A reader looks down the list, not '
          + 'across it.',
        'Use a dash (—) or a comma between the parts, and use it the same way '
          + 'every time.'],
        vocab: ['grammar',
        'possessives',
        'object',
        'pronouns',
        'people',
        'bassel\'s',
        'desk',
        'manager\'s',
        'office',
        'shamsi\'s']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '1.2.6P',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Read your partner\'s list. Tick ✓ or cross ✗. Underline one thing to fix.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>Capital letters for names, departments and the '
          + 'company</td><td>&nbsp;</td></tr><tr><td>The same order in every '
          + 'line</td><td>&nbsp;</td></tr><tr><td>A job <b>and</b> a duty for '
          + 'each person</td><td>&nbsp;</td></tr><tr><td>All four lines '
          + 'complete</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      ideas: ['Grammar – possessives and object pronouns',
      'Warehouse: Abu Yasser — ext. 230'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Read your partner\'s list. Tick ✓ or cross ✗. Underline '
          + 'one thing to fix.',
        grammar: 'Grammar – possessives and object pronouns',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (1.2) '
          + 'teaches: Grammar – possessives and object pronouns. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        must: ['Parts of a staff list: company and floor → name → department or job '
          + '→ extension → what the person looks after.',
        'Keep the same order in every line. A reader looks down the list, not '
          + 'across it.',
        'Use a dash (—) or a comma between the parts, and use it the same way '
          + 'every time.'],
        vocab: ['grammar',
        'possessives',
        'object',
        'pronouns',
        'people',
        'bassel\'s',
        'desk',
        'manager\'s',
        'office',
        'shamsi\'s'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '1.2.6R',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read one line before and after the fix. The class says '
  + 'what changed.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Before: Lara Ibrahim — Reception — 100 → After: Lara Ibrahim — '
              + 'Reception — 100 — visitors and the post (duty added)',
            minWords: 4,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – possessives and object pronouns.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '1.2.7',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write a short paragraph (35 words or more) introducing <b>two</b> people in '
  + 'your office to a new colleague. Use <i>his</i>, <i>her</i> and <i>\'s</i> at '
  + 'least once each.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'possessives',
        'object',
        'pronouns',
        'people',
        'bassel\'s',
        'desk',
        'manager\'s']
      },
      coach: {
        title: 'What to include',
        task: 'Write a short paragraph (35 words or more) introducing two people in your '
  + 'office to a new colleague. Use his, her and \'s at least once each.',
        criteria: [{ t: 'Parts of a staff list: company and floor → name → department or '
              + 'job → extension → what the person looks after.' },
            { t: 'Keep the same order in every line. A reader looks down the list, '
              + 'not across it.' },
            { t: 'Use a dash (—) or a comma between the parts, and use it the same '
              + 'way every time.' }]
      },
      aiCheck: {
        task: 'Write a short paragraph (35 words or more) introducing two people in '
          + 'your office to a new colleague. Use his, her and \'s at least once '
          + 'each.',
        grammar: 'Grammar – possessives and object pronouns',
        must: ['Parts of a staff list: company and floor → name → department or job '
          + '→ extension → what the person looks after.',
        'Keep the same order in every line. A reader looks down the list, not '
          + 'across it.',
        'Use a dash (—) or a comma between the parts, and use it the same way '
          + 'every time.'],
        vocab: ['grammar',
        'possessives',
        'object',
        'pronouns',
        'people',
        'bassel\'s',
        'desk',
        'manager\'s',
        'office',
        'shamsi\'s']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '1.2.7P',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s paragraph as the new colleague. Write on a slip: ★ I '
  + 'like… ✓ Can you add…? ? one question about a person',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ I like "send him a message instead" — that is useful. ✓ Can '
              + 'you add who to ask about the post? ? Is Rasha here on Thursdays?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s paragraph as the new colleague. Write on a '
          + 'slip: — ★ I like… — ✓ Can you add…? —? one question about a person '
          + '(The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – possessives and object pronouns',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (1.2) teaches: Grammar – possessives and object pronouns. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – possessives and object pronouns.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'possessives',
        'object',
        'pronouns',
        'people',
        'bassel\'s',
        'desk',
        'manager\'s',
        'office',
        'shamsi\'s'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – possessives and object pronouns.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'own',
      ref: '1.2.7R',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read one paragraph aloud to the class. The class says which person they '
  + 'would ask about an invoice, and which about a delivery.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final paragraph. Then write a <b>reply</b> as the new '
          + 'colleague (20+ words), e.g. <i>Thank you. So I should ask Nadia '
          + 'about the invoice and Abu Yasser about the delivery.</i></p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Grammar – possessives and object pronouns',
      'Warehouse: Abu Yasser — ext. 230'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – possessives and object pronouns.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
