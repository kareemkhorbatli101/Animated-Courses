/* Unit 1 · cycle 1.1 — Good morning — I'm the new assistant.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u1-s01', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 1 · 1.1', part: '1.1',
          section: '1', lesson: 'Good morning — I\'m the new assistant', title: 'Good morning — I\'m the new assistant' },
  objective: 'greet people at work and say who you are',
  study: {
    minutes: 90,
    objective: 'greet people at work and say who you are',
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
    task: 'Write what you say to the office on your first morning: who you are and '
      + 'what you have come to do.',
    weak: 'Hello. Nour. New.',
    change: ['English needs a verb in the sentence - <i>I am</i>, not just the name.',
        'Say the job, not only that you are new. <i>The new assistant</i> '
          + 'tells them which desk you are for.'],
    better: 'Good morning. I\'m Nour Mansour. I\'m the new assistant.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '1.1.1',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>We SAY…</th><th>We '
          + 'WRITE…</th></tr><tr><td>Good morning. / Hello.</td><td>Dear '
          + 'colleagues,</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'It is your first morning in a new job. What do people say when '
              + 'they meet at work? What do they write in a first email? Tell '
              + 'your teacher. Your teacher writes your ideas on the board.',
            minWords: 6,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Match the department with the work. sales · accounts · warehouse '
              + '· reception → money and invoices · customers and orders · the '
              + 'first desk at the door · boxes and deliveries',
            model: 'money and invoices → accounts · customers and orders → sales · '
              + 'the first desk at the door → reception · boxes and deliveries → '
              + 'warehouse',
            minWords: 6,
            rows: 3,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '1.1.2',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-1',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – be (present)</b></p><table '
          + 'class=\'bk\'><tr><th>+</th><th>–</th><th>?</th></tr><tr><td>I\'m (I '
          + 'am) the new assistant.</td><td>I\'m not from Homs.</td><td>Am I '
          + 'late? – Yes, you are. / No, you aren\'t.</td></tr><tr><td>You\'re '
          + '(you are) the manager.</td><td>You aren\'t in sales.</td><td>Are you '
          + 'from Damascus? – Yes, I am. / No, I\'m not.</td></tr><tr><td>He\'s / '
          + 'She\'s our accountant.</td><td>She isn\'t in the '
          + 'warehouse.</td><td>Is the office on this floor? – Yes, it '
          + 'is.</td></tr></table><p>⚠ Every English sentence needs a verb. Say '
          + '<i>I\'m the new assistant</i>, not <s>I new assistant</s>. Use '
          + '<i>a</i> before consonant sounds (a manager) and <i>an</i> before '
          + 'vowel sounds (an assistant, an accountant).</p><p><b>Practise:</b> '
          + 'Complete with <i>\'m, \'s, \'re, isn\'t</i> or '
          + '<i>aren\'t</i>.</p><p>1 I <span class="blank"></span> the new '
          + 'assistant. 2 She <span class="blank"></span> our accountant. 3 You '
          + '<span class="blank"></span> late – we start at eight. 4 Bassel <span '
          + 'class="blank"></span> in the office today. He\'s in Homs. 5 <span '
          + 'class="blank"></span> you from Aleppo? – No, I\'m '
          + 'not.</p><p><b>Useful phrases:</b> Pleased to meet you. · Pleased to '
          + 'meet you too. · Welcome to… · I\'m the new… · This is your '
          + 'desk.</p><p><b>Pronunciation – contractions.</b> 🔊 <b>Track 1.2</b> '
          + 'Listen and repeat: <i>I\'m</i> /aɪm/ · <i>you\'re</i> /jɔː/ · '
          + '<i>he\'s</i> /hiːz/ · <i>she\'s</i> /ʃiːz/ · <i>it\'s</i> /ɪts/ · '
          + '<i>I\'m an assistant</i> /aɪmən əˈsɪstənt/</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Where is Nour?',
            options: [{
              t: 'in the warehouse',
              ok: false,
              why: 'The warehouse is mentioned, but at the end, and as somewhere '
                + 'behind the building that she has not been to yet.'
            },
            {
              t: 'at the office door',
              ok: true,
              why: 'He welcomes her to the company and then shows her the desk: '
                + 'she is arriving.'
            },
            {
              t: 'in a café',
              ok: false,
              why: 'Nothing is ordered and nobody sits down. The talk is about '
                + 'floors, desks and a supervisor.'
            }],
            evidence: 'the first three lines - what Nour says she is, and what Mr Ayoub '
              + 'welcomes her to'
          },
        {
            q: 'Books closed. Listen. Where is the warehouse?',
            options: [{
              t: 'behind the building',
              ok: true,
              why: 'His words exactly: it is behind the building, not inside it.'
            },
            {
              t: 'on the second floor',
              ok: false,
              why: 'That is the OFFICE. He says so two lines earlier, which is why '
                + 'it is an easy one to carry over.'
            },
            {
              t: 'in Mezzeh',
              ok: false,
              why: 'Mezzeh is where Nour lives, and where the company is - it does '
                + 'not say where the warehouse is inside it.'
            }],
            evidence: 'Mr Ayoub\'s last line, after Nour asks about it'
          },
        {
            q: 'Why does Mr Ayoub mention Abu Yasser at all?',
            options: [{
              t: 'to tell her who runs the place she has just asked about',
              ok: true,
              why: 'She asked where the warehouse is; he answers, then names the '
                + 'person in charge of it. A place and the person who runs it.'
            },
            {
              t: 'because Abu Yasser is her manager',
              ok: false,
              why: 'Mr Ayoub is the office manager and Nour works in the office. '
                + 'Abu Yasser runs the warehouse.'
            },
            {
              t: 'to tell her he is from Damascus',
              ok: false,
              why: 'Nobody says where Abu Yasser is from. The Damascus question '
                + 'was about Nour.'
            }],
            evidence: 'the last line: the supervisor she will meet today'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '1.1.2',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Complete with \'m, \'s, \'re, isn\'t or aren\'t.',
      text: '<b>1</b> I [[1]] the new assistant. &nbsp; <b>2</b> She [[2]] our '
      + 'accountant. &nbsp; <b>3</b> You [[3]] late – we start at eight. &nbsp; '
      + '<b>4</b> Bassel [[4]] in the office today. He\'s in Homs. &nbsp; '
      + '<b>5</b> [[5]] you from Aleppo? – No, I\'m not.',
      plain: true,
      small: true,
      answers: {
        '1': ['\'m'],
        '2': ['\'s'],
        '3': ['\'re'],
        '4': ['isn\'t'],
        '5': ['Are']
      }
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '1.1.2',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Answer the questions. What is Nour\'s job?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *Nour\'s* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'Which floor is the office on?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the dialogue above for the line with *office* in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '1.1.3',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. Use the skeleton. Then swap roles. Then use the role cards.',
      scene: 'u1-1-1-pair',
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
        rows: [['Hala Mourad · customer service · Latakia · her desk is next to the window',
          'Bassel Nassif · sales · Aleppo · his desk is next to the door']]
      }
    },
    {
      id: 'c6',
      kind: 'own',
      ref: '1.1.3R',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Good morning.</td><td>☐ I\'m the '
          + 'new…</td><td>☐ Welcome to…</td><td>☐ Pleased to meet you.</td><td>☐ '
          + 'Are you from…?</td><td>☐ This is your desk.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['Grammar – be (present)',
      'Dear colleagues,',
      'Pleased to meet you all'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – be (present).',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '1.1.4',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Stand up. Meet three colleagues. Use your real name, job and company — or '
  + 'invent them. Make notes. With the third person, try to finish in one minute.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Name</th><th>Job</th><th>Company / '
          + 'department</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Grammar – be (present)',
      'Dear colleagues,',
      'Pleased to meet you all'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Stand up. Meet three colleagues. Use your real name, job and company '
          + '— or invent them. Make notes. With the third person, try to finish '
          + 'in one minute. (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – be (present)',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (1.1) teaches: Grammar – be (present). Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – be (present).',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'present',
        'english',
        'sentence',
        'needs',
        'verb',
        'assistant',
        'before',
        'consonant',
        'sounds']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – be (present).',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '1.1.4R',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Introduce one person to the class: This is . He\'s / She\'s a / an . He\'s / '
  + 'She\'s in .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Grammar – be (present)',
      'Dear colleagues,',
      'Pleased to meet you all'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Introduce one person to the class: — This is —. He\'s / She\'s a / '
          + 'an —. He\'s / She\'s in —. (The dashes are blanks the learner fills '
          + 'in with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'Grammar – be (present)',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (1.1) teaches: '
          + 'Grammar – be (present). Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – be (present).',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'present',
        'english',
        'sentence',
        'needs',
        'verb',
        'assistant',
        'before',
        'consonant',
        'sounds'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – be (present).',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '1.1.5',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Nour writes a short message to all the staff on her first day. Read it and '
  + 'answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>To:</b> All staff <b>From:</b> Nour Mansour <b>Subject:</b> '
          + 'Hello from the new assistant</p><p>Dear colleagues,</p><p>My name is '
          + 'Nour Mansour. I\'m the new administrative assistant. I\'m 24 years '
          + 'old and I\'m from Mezzeh. My desk is on the second floor, next to '
          + 'Nadia. I look after the orders and the post. My extension is '
          + '212.</p><p>Pleased to meet you all.</p><p>Nour</p><h4>Writer\'s '
          + 'box</h4><p><b>Parts of a first message to staff:</b> subject line → '
          + 'greeting → name and job → where you sit → what you look after → how '
          + 'to reach you → friendly ending → your name.</p><p><b>Capital '
          + 'letters:</b> names (Nour), cities and countries (Damascus, Syria), '
          + 'companies (Sham Trading Co.), languages (English), and <b>I</b> – '
          + 'always.</p><p>Every sentence ends with a <b>full stop (.)</b>. A '
          + 'work message is short: one idea in each sentence.</p>'
      },
      questions: [{
            q: 'What is Nour\'s job?',
            minWords: 6,
            rows: 2,
            hint: 'A job, in two or three words. Look in the text above for the '
              + 'line with *Nour\'s* in it.'
          },
      {
            q: 'Where is her desk?',
            minWords: 6,
            rows: 2,
            hint: 'A place - a room, a floor, a town. Look in the text above for '
              + 'the line with *desk* in it.'
          },
      {
            q: 'What is her extension number?',
            minWords: 6,
            rows: 2,
            hint: 'Digits. Say them in groups, the way the book reads them back. '
              + 'Look in the text above for the line with *extension* in it.'
          }],
      ideas: ['Dear colleagues,',
      'Pleased to meet you all',
      'Grammar – be (present)'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '1.1.6',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Use the ideas on the board. Complete the message about <b>you</b>.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'present',
        'english',
        'sentence',
        'needs',
        'verb',
        'assistant',
        'before']
      },
      coach: {
        title: 'What to include',
        task: 'Use the ideas on the board. Complete the message about you.',
        criteria: [{ t: 'Parts of a first message to staff: subject line → greeting → '
              + 'name and job → where you sit → what you look after → how to '
              + 'reach you → friendly ending → your name.' },
            { t: 'Capital letters: names (Nour), cities and countries (Damascus, '
              + 'Syria), companies (Sham Trading Co.), languages (English), and I '
              + '– always.' },
            { t: 'Every sentence ends with a full stop (.). A work message is '
              + 'short: one idea in each sentence.' }]
      },
      aiCheck: {
        task: 'Use the ideas on the board. Complete the message about you.',
        grammar: 'Grammar – be (present)',
        must: ['Parts of a first message to staff: subject line → greeting → name '
          + 'and job → where you sit → what you look after → how to reach you → '
          + 'friendly ending → your name.',
        'Capital letters: names (Nour), cities and countries (Damascus, '
          + 'Syria), companies (Sham Trading Co.), languages (English), and I – '
          + 'always.',
        'Every sentence ends with a full stop (.). A work message is short: '
          + 'one idea in each sentence.'],
        vocab: ['grammar',
        'present',
        'english',
        'sentence',
        'needs',
        'verb',
        'assistant',
        'before',
        'consonant',
        'sounds']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '1.1.6P',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books with your partner. Read your partner\'s message. Tick ✓ or cross '
  + '✗. Underline one thing to fix.',
      passage: {
        title: 'From the book',
        html: '<h4>How to give good feedback (read this once – we use it all '
          + 'year)</h4><p><b>Not helpful:</b> "Good." / "Bad." / "Many '
          + 'mistakes."</p><p><b>Helpful:</b> "Your message is clear. Check the '
          + 'capital letter in <i>damascus</i>. Can you add your '
          + 'extension?"</p><p>Be kind, be clear, and point to <b>one</b> thing '
          + 'to fix.</p><p><b>Phrase bank:</b> It\'s clear. · I like… · Can you '
          + 'add…? · I think you forgot… · Check the spelling of… · Good '
          + 'idea!</p><table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>Capital letters (names, cities, company, I) and '
          + 'full stops</td><td>&nbsp;</td></tr><tr><td>A verb (<i>be</i>) in '
          + 'every sentence: <i>I\'m…</i></td><td>&nbsp;</td></tr><tr><td>he / '
          + 'she + verb: <i>she works</i> (if you write about another '
          + 'person)</td><td>&nbsp;</td></tr><tr><td>All the parts: subject, '
          + 'greeting, name, job, desk, duties, extension, '
          + 'ending</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample feedback: "Your message is clear. Check the capital '
              + 'letter in jaramana. Can you add your extension?"',
            minWords: 5,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books with your partner. Read your partner\'s message. Tick ✓ '
          + 'or cross ✗. Underline one thing to fix.',
        grammar: 'Grammar – be (present)',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (1.1) '
          + 'teaches: Grammar – be (present). Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        must: ['Parts of a first message to staff: subject line → greeting → name '
          + 'and job → where you sit → what you look after → how to reach you → '
          + 'friendly ending → your name.',
        'Capital letters: names (Nour), cities and countries (Damascus, '
          + 'Syria), companies (Sham Trading Co.), languages (English), and I – '
          + 'always.',
        'Every sentence ends with a full stop (.). A work message is short: '
          + 'one idea in each sentence.'],
        vocab: ['grammar',
        'present',
        'english',
        'sentence',
        'needs',
        'verb',
        'assistant',
        'before',
        'consonant',
        'sounds'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '1.1.6R',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read one sentence before and after the fix. The class '
  + 'says what changed.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Before: I new driver. → After: I\'m the new driver. (verb be '
              + 'added; the added)',
            minWords: 4,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – be (present).',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '1.1.7',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write your <b>real</b> first-day message to the staff of your company (35 '
  + 'words or more). Add <b>one more thing</b>: your working hours, the languages '
  + 'you speak, or where you worked before.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'present',
        'english',
        'sentence',
        'needs',
        'verb',
        'assistant',
        'before']
      },
      coach: {
        title: 'What to include',
        task: 'Write your real first-day message to the staff of your company (35 words or '
  + 'more). Add one more thing: your working hours, the languages you speak, or '
  + 'where you worked before.',
        criteria: [{ t: 'Parts of a first message to staff: subject line → greeting → '
              + 'name and job → where you sit → what you look after → how to '
              + 'reach you → friendly ending → your name.' },
            { t: 'Capital letters: names (Nour), cities and countries (Damascus, '
              + 'Syria), companies (Sham Trading Co.), languages (English), and I '
              + '– always.' },
            { t: 'Every sentence ends with a full stop (.). A work message is '
              + 'short: one idea in each sentence.' }]
      },
      aiCheck: {
        task: 'Write your real first-day message to the staff of your company (35 '
          + 'words or more). Add one more thing: your working hours, the '
          + 'languages you speak, or where you worked before.',
        grammar: 'Grammar – be (present)',
        must: ['Parts of a first message to staff: subject line → greeting → name '
          + 'and job → where you sit → what you look after → how to reach you → '
          + 'friendly ending → your name.',
        'Capital letters: names (Nour), cities and countries (Damascus, '
          + 'Syria), companies (Sham Trading Co.), languages (English), and I – '
          + 'always.',
        'Every sentence ends with a full stop (.). A work message is short: '
          + 'one idea in each sentence.'],
        vocab: ['grammar',
        'present',
        'english',
        'sentence',
        'needs',
        'verb',
        'assistant',
        'before',
        'consonant',
        'sounds']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '1.1.7P',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s message as a colleague. Write on a slip: ★ I like… ✓ '
  + 'Can you add…? ? a question about the content',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ I like the working hours — very clear. ✓ Can you add which day '
              + 'you count the stock? ? Is the store room open at seven?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s message as a colleague. Write on a slip: — ★ I '
          + 'like… — ✓ Can you add…? —? a question about the content (The dashes '
          + 'are blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Grammar – be (present)',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (1.1) teaches: Grammar – be (present). Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – be (present).',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'present',
        'english',
        'sentence',
        'needs',
        'verb',
        'assistant',
        'before',
        'consonant',
        'sounds'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – be (present).',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'own',
      ref: '1.1.7R',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Put the messages on the wall. Walk and read. Put a sticky note on one '
  + 'message: Welcome! My desk is on the second floor too.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final message. Then write a <b>reply</b> to your '
          + 'partner\'s message (20+ words), e.g. <i>Hello Nour, welcome to the '
          + 'company. I\'m in the accounts department. My extension is '
          + '208.</i></p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Grammar – be (present)',
      'Dear colleagues,',
      'Pleased to meet you all'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – be (present).',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
