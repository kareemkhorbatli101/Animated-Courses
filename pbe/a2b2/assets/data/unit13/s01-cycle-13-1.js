/* Unit 13 · cycle 13.1 — I have worked here for eleven years.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE4.page('u13-s01', {
  book: { source: 'Proactive Business English · A2 Book 2', ref: 'Unit 13 · 13.1', part: '13.1',
          section: '1', lesson: 'I have worked here for eleven years', title: 'I have worked here for eleven years' },
  objective: 'say how long you have done something',
  study: {
    minutes: 90,
    objective: 'say how long you have done something',
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
    task: 'Write how long you have worked where you work, for an interview.',
    weak: 'I work here long time.',
    change: ['Use the present perfect for a job you are still in: <i>I have worked</i>.',
        'Say the length with FOR, or the start with SINCE. Not both, and not neither.'],
    better: 'I have worked here for eleven years, since 2015.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '13.1.1',
      bookRef: 'Unit 13 · 13.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'How long have you been in your job? Say the number of years or '
              + 'months aloud. Now say it in English without counting first.',
            minWords: 6,
            rows: 2,
            hint: 'A length of time - two hours, three days. Your own workplace, '
              + 'not the book\'s. Say it out loud once before you write it - a '
              + 'sentence or two is enough.'
          },
      {
            q: 'for or since? 2019 · eleven years · March · six months · I left school',
            model: 'since 2019 · for eleven years · since March · for six months · '
              + 'since I left school',
            minWords: 4,
            rows: 2,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '13.1.2',
      bookRef: 'Unit 13 · 13.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u13-13-1',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – the present perfect for something that is still '
          + 'true</b></p><table '
          + 'class=\'bk\'><tr><th>Form</th><th>Example</th></tr><tr><td><b>have / '
          + 'has</b> + past participle</td><td>I <b>have worked</b> here for one '
          + 'year. She <b>has worked</b> here for '
          + 'eleven.</td></tr><tr><td><b>for</b> + a length of '
          + 'time</td><td><b>for</b> eleven years · <b>for</b> six months · '
          + '<b>for</b> a long time</td></tr><tr><td><b>since</b> + a point in '
          + 'time</td><td><b>since</b> 2015 · <b>since</b> March · <b>since</b> I '
          + 'left school</td></tr><tr><td>Question: <b>How long have '
          + 'you…?</b></td><td><b>How long have you worked</b> '
          + 'here?</td></tr><tr><td>Negative</td><td>I <b>haven\'t worked</b> '
          + 'anywhere else.</td></tr></table><p>⚠ This tense says the job <b>has '
          + 'not finished</b>. <i>I have worked here for eleven years</i> means '
          + 'she is still here. <i>I worked there for eleven years</i> means she '
          + 'has left. That one letter of difference is the whole of '
          + '13.4.</p><p>⚠ Arabic and English divide time differently here, and '
          + 'the commonest A2 mistake is <s>I am working here since 2015</s> or '
          + '<s>I work here from eleven years</s>. Learn the two shapes as '
          + 'chunks: <b>for</b> + length, <b>since</b> + '
          + 'point.</p><p><b>Practise:</b> Say each one twice — once with '
          + '<i>for</i>, once with <i>since</i>.</p><p>1 your job 2 your town 3 '
          + 'your telephone number 4 this company 5 English</p><p><b>Useful '
          + 'phrases:</b> How long have you…? · for eleven years · since March · '
          + 'I haven\'t worked anywhere else. · Ask the '
          + 'shelf.</p><p><b>Pronunciation – the weak <i>have</i>.</b> 🔊 <b>Track '
          + '13.2</b> Listen: <i>How long have you worked here?</i> — <i>have</i> '
          + 'almost disappears: /həv/, sometimes only /v/. And the answer '
          + 'contracts: <i>I\'ve worked here for a year.</i> Repeat the pair four '
          + 'times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Who has been at Sham Trading the longest?',
            options: [{
              t: 'Nadia',
              ok: false,
              why: 'Eleven years, and hers is the first answer given, which is why '
                + 'it stays in the ear.'
            },
            {
              t: 'Abu Yasser',
              ok: true,
              why: 'Nineteen years here, and thirty-one in the trade - both longer '
                + 'than anybody else\'s figure.'
            },
            {
              t: 'Mr Ayoub',
              ok: false,
              why: 'He does not speak in this exchange at all; the company is his, '
                + 'which is what makes him the plausible guess.'
            }],
            evidence: 'the two answers after Nour asks, and the two figures in the second one'
          },
        {
            q: 'Books closed. Listen. How long has Nadia worked there?',
            options: [{
              t: 'eleven years',
              ok: true,
              why: 'She says eleven, then fixes the month: since March 2015.'
            },
            {
              t: 'nineteen years',
              ok: false,
              why: 'Nineteen is Abu Yasser\'s time at this company. It is said two '
                + 'lines later, which is why it carries over.'
            },
            {
              t: 'thirty-one years',
              ok: false,
              why: 'Thirty-one is Abu Yasser\'s time in the trade, not at Sham '
                + 'Trading - and not Nadia\'s at all.'
            }],
            evidence: 'her first answer, and the correction she makes to herself'
          },
        {
            q: 'Why does Abu Yasser say ‘Ask the shelf’?',
            options: [{
              t: 'he would rather be judged by his work than by his years',
              ok: true,
              why: 'He is asked which of them is which, and sends the question to '
                + 'the thing he is responsible for.'
            },
            {
              t: 'he does not know the answer',
              ok: false,
              why: 'He has just given two exact figures. He knows them better than '
                + 'anybody in the room.'
            },
            {
              t: 'he wants Nour to check the stock',
              ok: false,
              why: 'Nothing in this exchange is about stock. The shelf stands for '
                + 'his work, not for a job he is handing out.'
            }],
            evidence: 'the last line, answering which of them is the most experienced'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '13.1.2',
      bookRef: 'Unit 13 · 13.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Say each one twice — once with for, once with since.',
      questions: [{
            q: '1 your job',
            model: 'I have worked here for two years / since 2024',
            minWords: 2,
            rows: 2
          },
      {
            q: '2 your town',
            model: 'I have lived in Jaramana for nine years / since 2017',
            minWords: 3,
            rows: 2
          },
      {
            q: '3 your telephone number',
            model: 'I have had this number for four years / since the old one stopped',
            minWords: 4,
            rows: 2
          },
      {
            q: '4 this company',
            model: 'I have been with this company for a year / since last March',
            minWords: 4,
            rows: 2
          },
      {
            q: '5 English',
            model: 'I have studied English for six years / since school',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '13.1.2',
      bookRef: 'Unit 13 · 13.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How long has Nadia worked there?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>Nadia</i> in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What does Abu Yasser say about the word experience?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with <i>Yasser</i> in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '13.1.3',
      bookRef: 'Unit 13 · 13.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A fills in a form and asks; B answers with both for and '
  + 'since. Use the skeleton, then the role cards.',
      scene: 'u13-13-1-pair',
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
        head: ['Role card 1 — the staff list',
        'Role card 2 — the bank form'],
        rows: [['You are completing a staff list for head office. You need: years '
            + 'in the company, years in the trade, and the month they started. '
            + 'Three colleagues, three different answers.',
          'You are completing a bank form for a loan. The bank wants the '
            + 'length of employment and the start date — and it will not accept '
            + '"a long time".']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '13.1.3R',
      bookRef: 'Unit 13 · 13.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ How long have you…?</td><td>☐ for '
          + 'eleven years</td><td>☐ since March</td><td>☐ in the trade</td><td>☐ '
          + 'I haven\'t worked anywhere else.</td><td>☐ so eleven in the '
          + 'spring</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners collect every for and since. Typical errors: since '
              + 'eleven years · I am working here since 2015 · from March. All '
              + 'three are the same mistake — a length treated as a point, or a '
              + 'present treated as a perfect',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – the present perfect for something '
        + 'that is still true.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '13.1.4',
      bookRef: 'Unit 13 · 13.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Ask three colleagues how long they have done three different things — the '
  + 'job, the journey to work, the city. Write their answers with for and with '
  + 'since.',
      passage: {
        title: 'From the book',
        html: '<table '
          + 'class=\'bk\'><tr><th>Who</th><th>What</th><th>for…</th><th>since…</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
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
        task: 'Ask three colleagues how long they have done three different things '
          + '— the job, the journey to work, the city. Write their answers with '
          + 'for and with since. (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – the present perfect for something that is still true',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (13.1) teaches: Grammar – the present perfect for something '
          + 'that is still true. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – the present perfect for '
          + 'something that is still true.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'present',
        'perfect',
        'something',
        'still',
        'true',
        'tense',
        'finished',
        'worked',
        'eleven']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – the present perfect for something '
        + 'that is still true.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '13.1.4R',
      bookRef: 'Unit 13 · 13.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: has for — since . The longest in this room is .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — has — for — — since —. The longest in this room is '
          + '—. (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – the present perfect for something that is still true',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (13.1) teaches: '
          + 'Grammar – the present perfect for something that is still true. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – the present perfect for '
          + 'something that is still true.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'present',
        'perfect',
        'something',
        'still',
        'true',
        'tense',
        'finished',
        'worked',
        'eleven'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – the present perfect for something '
        + 'that is still true.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '13.1.5',
      bookRef: 'Unit 13 · 13.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the top of Nadia\'s CV, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>NADIA SAYEGH</b> · Accountant · Mezzeh, Damascus · 011 <span '
          + 'class="blank"></span> <span class="blank"></span> · '
          + 'nadia.sayegh@shamtrading.sy</p><p><b>Profile</b></p><p>Accountant '
          + 'with eleven years in import and distribution. I have worked at Sham '
          + 'Trading since March 2015, where I am responsible for invoicing, '
          + 'payments and the monthly figures for a company of nineteen staff. '
          + 'Before that I worked for three years at a construction supplier in '
          + 'Homs.</p><p>I have handled the accounts through two system changes '
          + 'and one move of premises without a month being closed late. I speak '
          + 'Arabic and English, and I have taught the invoicing system to four '
          + 'colleagues.</p><h4>Writer\'s box</h4><p><b>The profile at the top of '
          + 'a CV — four sentences, in this order:</b> what you are and how long '
          + '→ where you are now and what you are responsible for → where you '
          + 'were before → <b>one sentence of evidence</b> that nobody else could '
          + 'write.</p><p>Use the <b>present perfect</b> for the job you still '
          + 'have (<i>I have worked at <span class="blank"></span> since <span '
          + 'class="blank"></span> </i>) and the <b>past simple</b> for the job '
          + 'you left (<i>I worked for three years at <span class="blank"></span> '
          + '</i>).</p><p>The evidence sentence is the only one a reader '
          + 'remembers. <i>Through two system changes and one move of premises '
          + 'without a month being closed late</i> is evidence. <i>Hard-working '
          + 'and reliable</i> is not — everybody writes it, so it says '
          + 'nothing.</p><p>⚠ Numbers do the work: eleven years · nineteen staff '
          + '· four colleagues · three years. A profile with no numbers in it '
          + 'reads as a profile with nothing to report.</p><p>⚠ <b>Length: four '
          + 'sentences.</b> A profile that runs to ten is a page nobody reads to '
          + 'the end of.</p>'
      },
      questions: [{
            q: 'Which two sentences use the present perfect, and why?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with <i>present</i> in it.'
          },
      {
            q: 'Which sentence uses the past simple, and why?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with <i>simple</i> in it.'
          },
      {
            q: 'Find the sentence that proves she is good at her job without '
              + 'saying "I am good at my job".',
            minWords: 6,
            rows: 2,
            hint: 'Look in the text above for the line with <i>without</i> in it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '13.1.6',
      bookRef: 'Unit 13 · 13.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write the profile at the top of your own CV (35 words or more). Use the frame.',
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
        'perfect',
        'something',
        'still',
        'true',
        'tense',
        'finished']
      },
      coach: {
        title: 'What to include',
        task: 'Write the profile at the top of your own CV (35 words or more). Use the frame.',
        criteria: [{ t: 'The profile at the top of a CV — four sentences, in this order: '
              + 'what you are and how long → where you are now and what you are '
              + 'responsible for → where you were before → one sentence of '
              + 'evidence that nobody else could write.' },
            { t: 'Use the present perfect for the job you still have (I have '
              + 'worked at since ) and the past simple for the job you left (I '
              + 'worked for three years at ).' },
            { t: 'The evidence sentence is the only one a reader remembers. '
              + 'Through two system changes and one move of premises without a '
              + 'month being closed late is evidence. Hard-working and reliable '
              + 'is not — everybody writes it, so it says nothing.' },
            { t: '⚠ Numbers do the work: eleven years · nineteen staff · four '
              + 'colleagues · three years. A profile with no numbers in it reads '
              + 'as a profile with nothing to report.' },
            { t: '⚠ Length: four sentences. A profile that runs to ten is a page '
              + 'nobody reads to the end of.' }]
      },
      aiCheck: {
        task: 'Write the profile at the top of your own CV (35 words or more). Use the frame.',
        grammar: 'Grammar – the present perfect for something that is still true',
        must: ['The profile at the top of a CV — four sentences, in this order: what '
          + 'you are and how long → where you are now and what you are '
          + 'responsible for → where you were before → one sentence of evidence '
          + 'that nobody else could write.',
        'Use the present perfect for the job you still have (I have worked at '
          + 'since ) and the past simple for the job you left (I worked for three '
          + 'years at ).',
        'The evidence sentence is the only one a reader remembers. Through '
          + 'two system changes and one move of premises without a month being '
          + 'closed late is evidence. Hard-working and reliable is not — '
          + 'everybody writes it, so it says nothing.',
        '⚠ Numbers do the work: eleven years · nineteen staff · four '
          + 'colleagues · three years. A profile with no numbers in it reads as a '
          + 'profile with nothing to report.'],
        vocab: ['grammar',
        'present',
        'perfect',
        'something',
        'still',
        'true',
        'tense',
        'finished',
        'worked',
        'eleven']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '13.1.6P',
      bookRef: 'Unit 13 · 13.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Ask one question: could this profile have been written by '
  + 'somebody else in this room? Tick ✓ or cross ✗, and name the criterion each '
  + 'time.',
      passage: {
        title: 'From the book',
        html: '<h4>How to give good feedback — Book 2, band 3: name the '
          + 'criterion</h4><p><b>Band 1 and 2 (Book 1):</b> be kind, be clear, '
          + 'point to one thing to fix.</p><p><b>Band 3 (from this unit on):</b> '
          + 'point to the thing to fix <b>and name the criterion from the '
          + 'Writer\'s box that it comes from.</b></p><p><b>Not yet band 3:</b> '
          + '"Add a number." <b>Band 3:</b> "The Writer\'s box asks for one '
          + 'sentence of evidence that nobody else could write — yours could have '
          + 'been written by anybody in this room. Which number would fix '
          + 'that?"</p><p>Naming the criterion does two things: it tells the '
          + 'writer where to look, and it makes you read the box again.</p><table '
          + 'class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>Present perfect for the job they still '
          + 'have</td><td>&nbsp;</td></tr><tr><td>Past simple for the job they '
          + 'left</td><td>&nbsp;</td></tr><tr><td>At least two '
          + 'numbers</td><td>&nbsp;</td></tr><tr><td>One sentence of evidence '
          + 'nobody else could write</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample band 3 feedback: "The Writer\'s box asks for one sentence '
              + 'of evidence nobody else could write. Yours is the last one, and '
              + 'it is the strongest thing on the page — would it be even harder '
              + 'if you said how many drops that is?"',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Ask one question: could this profile have been written '
          + 'by somebody else in this room? Tick ✓ or cross ✗, and name the '
          + 'criterion each time.',
        grammar: 'Grammar – the present perfect for something that is still true',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (13.1) '
          + 'teaches: Grammar – the present perfect for something that is still '
          + 'true. Judge the language against THAT and against nothing the course '
          + 'has not taught yet.',
        must: ['The profile at the top of a CV — four sentences, in this order: what '
          + 'you are and how long → where you are now and what you are '
          + 'responsible for → where you were before → one sentence of evidence '
          + 'that nobody else could write.',
        'Use the present perfect for the job you still have (I have worked at '
          + 'since ) and the past simple for the job you left (I worked for three '
          + 'years at ).',
        'The evidence sentence is the only one a reader remembers. Through '
          + 'two system changes and one move of premises without a month being '
          + 'closed late is evidence. Hard-working and reliable is not — '
          + 'everybody writes it, so it says nothing.',
        '⚠ Numbers do the work: eleven years · nineteen staff · four '
          + 'colleagues · three years. A profile with no numbers in it reads as a '
          + 'profile with nothing to report.'],
        vocab: ['grammar',
        'present',
        'perfect',
        'something',
        'still',
        'true',
        'tense',
        'finished',
        'worked',
        'eleven'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '13.1.6R',
      bookRef: 'Unit 13 · 13.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their evidence sentence only. The class says '
  + 'which one could not have been written by anybody else.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Read the evidence sentences only. The test is whether the '
              + 'sentence could have been written by anybody else in the room; '
              + 'hard-working and reliable fails it in every case, and learners '
              + 'hear that faster from each other than from a teacher',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – the present perfect for something '
        + 'that is still true.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '13.1.7',
      bookRef: 'Unit 13 · 13.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about the longest thing you have done — a job, a journey, a habit, a '
  + 'friendship (60 to 100 words). Say how long, since when, what has changed in '
  + 'that time, and what has not.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'present',
        'perfect',
        'something',
        'still',
        'true',
        'tense',
        'finished']
      },
      coach: {
        title: 'What to include',
        task: 'Write about the longest thing you have done — a job, a journey, a habit, a '
  + 'friendship (60 to 100 words). Say how long, since when, what has changed in '
  + 'that time, and what has not.',
        criteria: [{ t: 'The profile at the top of a CV — four sentences, in this order: '
              + 'what you are and how long → where you are now and what you are '
              + 'responsible for → where you were before → one sentence of '
              + 'evidence that nobody else could write.' },
            { t: 'Use the present perfect for the job you still have (I have '
              + 'worked at since ) and the past simple for the job you left (I '
              + 'worked for three years at ).' },
            { t: 'The evidence sentence is the only one a reader remembers. '
              + 'Through two system changes and one move of premises without a '
              + 'month being closed late is evidence. Hard-working and reliable '
              + 'is not — everybody writes it, so it says nothing.' },
            { t: '⚠ Numbers do the work: eleven years · nineteen staff · four '
              + 'colleagues · three years. A profile with no numbers in it reads '
              + 'as a profile with nothing to report.' },
            { t: '⚠ Length: four sentences. A profile that runs to ten is a page '
              + 'nobody reads to the end of.' }]
      },
      aiCheck: {
        task: 'Write about the longest thing you have done — a job, a journey, a '
          + 'habit, a friendship (60 to 100 words). Say how long, since when, '
          + 'what has changed in that time, and what has not.',
        grammar: 'Grammar – the present perfect for something that is still true',
        must: ['The profile at the top of a CV — four sentences, in this order: what '
          + 'you are and how long → where you are now and what you are '
          + 'responsible for → where you were before → one sentence of evidence '
          + 'that nobody else could write.',
        'Use the present perfect for the job you still have (I have worked at '
          + 'since ) and the past simple for the job you left (I worked for three '
          + 'years at ).',
        'The evidence sentence is the only one a reader remembers. Through '
          + 'two system changes and one move of premises without a month being '
          + 'closed late is evidence. Hard-working and reliable is not — '
          + 'everybody writes it, so it says nothing.',
        '⚠ Numbers do the work: eleven years · nineteen staff · four '
          + 'colleagues · three years. A profile with no numbers in it reads as a '
          + 'profile with nothing to report.'],
        vocab: ['grammar',
        'present',
        'perfect',
        'something',
        'still',
        'true',
        'tense',
        'finished',
        'worked',
        'eleven']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '13.1.7P',
      bookRef: 'Unit 13 · 13.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ the line I would keep ✓ for / '
  + 'since used correctly? ? a question about the time that has passed',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "two hundred hours a year" — keep that line. ✓ for / since '
              + 'correct throughout. ? What are you reading now?',
            minWords: 5,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ the line I would '
          + 'keep — ✓ for / since used correctly? —? a question about the time '
          + 'that has passed (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – the present perfect for something that is still true',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (13.1) teaches: Grammar – the present perfect for something '
          + 'that is still true. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – the present perfect for '
          + 'something that is still true.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'present',
        'perfect',
        'something',
        'still',
        'true',
        'tense',
        'finished',
        'worked',
        'eleven'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – the present perfect for something '
        + 'that is still true.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'own',
      ref: '13.1.7R',
      bookRef: 'Unit 13 · 13.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts aloud. Which was the longest thing in the room, and which '
  + 'was the most surprising? They are rarely the same one.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then ask one person outside the class how '
          + 'long they have done their work, and write their answer in English '
          + 'with <b>both</b> <i>for</i> and <i>since</i> (35+ words).</p>'
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
      'I used this cycle\'s language: – the present perfect for something '
        + 'that is still true.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
