/* Unit 13 · cycle 13.2 — Have you ever used this system?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE4.page('u13-s02', {
  book: { source: 'Proactive Business English · A2 Book 2', ref: 'Unit 13 · 13.2', part: '13.2',
          section: '2', lesson: 'Have you ever used this system?', title: 'Have you ever used this system?' },
  objective: 'ask and answer about experience',
  study: {
    minutes: 90,
    objective: 'ask and answer about experience',
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
    task: 'Write the answer when you are asked whether you have ever used a system '
      + 'you have not.',
    weak: 'No.',
    change: ['Say never, plainly. A bare no sounds like a refusal to answer.',
        'Follow it with what you HAVE used, or the answer closes the conversation.'],
    better: 'No, never. I have used the old stock card every day for four years.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '13.2.1',
      bookRef: 'Unit 13 · 13.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Which of these have you done at work? used an accounts system · '
              + 'trained somebody · taken a complaint · signed for a delivery · '
              + 'spoken English on the telephone',
            model: 'Open. A show of hands is enough; the point is that everybody in '
              + 'the room has done some of these and nobody has done all of them',
            minWords: 6,
            rows: 3,
            hint: 'One of the ones named in the question - pick it and say it. Your '
              + 'own workplace, not the book\'s. Say it out loud once before you '
              + 'write it - a sentence or two is enough.'
          },
      {
            q: 'Make one question with ever and one answer with never. Say both aloud.',
            model: 'Samples: Have you ever taken a complaint? — No, never. I have '
              + 'never taken one on the telephone',
            minWords: 5,
            rows: 2,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '13.2.2',
      bookRef: 'Unit 13 · 13.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u13-13-2',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – <i>ever</i> and <i>never</i> with the present '
          + 'perfect</b></p><table '
          + 'class=\'bk\'><tr><th>Shape</th><th>Example</th></tr><tr><td><b>Have '
          + 'you ever</b> + past participle?</td><td><b>Have you ever used</b> '
          + 'this system?</td></tr><tr><td>Short answers</td><td>Yes, I have. · '
          + 'No, I haven\'t. · No, never.</td></tr><tr><td><b>I have never</b> + '
          + 'past participle</td><td>She <b>has never worked</b> in an '
          + 'office.</td></tr><tr><td><b>I had never</b> …, and that was <span '
          + 'class="blank"></span> </td><td>I <b>had never used</b> ours either, '
          + 'and that was one year ago.</td></tr><tr><td>Softer than the bare '
          + 'question</td><td>Have you <b>had the chance to</b> use '
          + 'it?</td></tr></table><p>⚠ <i>Have you ever…?</i> asks about <b>any '
          + 'time in your life up to now</b>, so it never takes a time word: '
          + '<s>Have you ever used it yesterday?</s> For a finished time, use the '
          + 'past simple — <i>Did you use it yesterday?</i></p><p>⚠ <b>Never</b> '
          + 'is already negative. <s>I haven\'t never used it.</s> One negative '
          + 'is enough in English, unlike Arabic.</p><p>⚠ Tone matters more than '
          + 'grammar here. <i>Have you ever done this?</i> with a falling, flat '
          + 'voice is a question; with a rising, sharp voice it means <i>you '
          + 'obviously have not</i>. In an interview the first gets an answer and '
          + 'the second gets a wall.</p><p><b>Practise:</b> Ask your partner five '
          + '<i>Have you ever…?</i> questions about work. Two answers must be '
          + '<i>never</i>.</p><p><b>Useful phrases:</b> Have you ever…? · No, '
          + 'never. · She has never worked in… · I had never used it either. · '
          + 'Which one has done the work?</p><p><b>Pronunciation – the question '
          + 'that is not an accusation.</b> 🔊 <b>Track 13.4</b> Listen to the '
          + 'same question twice: <i>Have you <b>ever</b> used an order '
          + 'system?</i> Once flat and once sharp. Repeat the flat one until it '
          + 'sounds like curiosity.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is Mr Ayoub deciding?',
            options: [{
              t: 'who to interview',
              ok: true,
              why: 'Three applications for one post, and he ends by asking for the '
                + 'argument again with her name in it.'
            },
            {
              t: 'which system to buy',
              ok: false,
              why: 'An order system is discussed, which is why this is tempting - '
                + 'but as something an applicant has or has not used.'
            },
            {
              t: 'who to send to Homs',
              ok: false,
              why: 'Homs is not mentioned in this exchange.'
            }],
            evidence: 'Mr Ayoub\'s first line, and what he asks Nour to do on Sunday'
          },
        {
            q: 'Books closed. Listen. What has the second applicant done?',
            options: [{
              t: 'used a stock system somewhere else',
              ok: true,
              why: 'She has used a stock system - not this company\'s, which is '
                + 'the distinction Nour is making.'
            },
            {
              t: 'used this company\'s order system',
              ok: false,
              why: 'Nour says the opposite, and then says she herself had never '
                + 'used it until a year ago.'
            },
            {
              t: 'worked in an office before',
              ok: false,
              why: 'Nour says she has never worked in an office. That is the fact '
                + 'the argument has to get past.'
            }],
            evidence: 'Nour\'s first long answer, where she separates two systems'
          },
        {
            q: 'What is Nour\'s argument for the second applicant?',
            options: [{
              t: 'that not knowing this system is not a reason, because nobody knew it',
              ok: true,
              why: 'She says she had never used it herself a year ago - the '
                + 'objection applies to everybody who ever started.'
            },
            {
              t: 'that she is the cheapest of the three',
              ok: false,
              why: 'No money is mentioned anywhere in this exchange.'
            },
            {
              t: 'that the other two are not reliable',
              ok: false,
              why: 'She says all three use the same four words, which is a point '
                + 'about CVs, not about those two people.'
            }],
            evidence: 'the line about never having used ours either'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'own',
      ref: '13.2.2',
      bookRef: 'Unit 13 · 13.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Ask your partner five Have you ever…? questions about work. Two '
              + 'answers must be never.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '13.2.2',
      bookRef: 'Unit 13 · 13.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What has the second applicant never done?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>applicant</i> in '
              + 'it. Play it again with the subtitles on.'
          },
      {
            q: 'What does Nour say about her own first week?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with <i>Nour</i> in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '13.2.3',
      bookRef: 'Unit 13 · 13.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A has a post to fill; B argues for one candidate. Use the '
  + 'skeleton, then the role cards.',
      scene: 'u13-13-2-pair',
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
        head: ['Role card 1 — a driver',
        'Role card 2 — a stock assistant'],
        rows: [['Three applicants. One has driven for a bakery for six years — '
            + 'early mornings, forty stops, no complaints. He has never driven a '
            + 'lorry over three tonnes.',
          'Two applicants. One has worked in a shoe shop for two years and '
            + 'has counted stock every Thursday night. She has never used a '
            + 'computer system of any kind.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '13.2.3R',
      bookRef: 'Unit 13 · 13.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Have you ever…?</td><td>☐ No, '
          + 'never.</td><td>☐ has never worked in</td><td>☐ Not ours.</td><td>☐ I '
          + 'had never used it either</td><td>☐ Which one has done the '
          + 'work?</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the sentence that turned a never into an '
              + 'argument for the person. Typical errors: Have you ever used it '
              + 'yesterday? (a finished time needs the past simple) and I '
              + 'haven\'t never used it (one negative is enough)',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – ever and never with the present perfect.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '13.2.4',
      bookRef: 'Unit 13 · 13.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Interview three colleagues about their experience. Ask three Have you ever…? '
  + 'questions each. Write down one thing each person has never done — and one '
  + 'reason it would not matter.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Who</th><th>Has ever…</th><th>Has '
          + 'never…</th><th>Why it would not '
          + 'matter</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
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
        task: 'Interview three colleagues about their experience. Ask three Have '
          + 'you ever…? questions each. Write down one thing each person has '
          + 'never done — and one reason it would not matter. (The dashes are '
          + 'blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Grammar – ever and never with the present perfect',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (13.2) teaches: Grammar – ever and never with the present '
          + 'perfect. Judge the language against THAT and against nothing the '
          + 'course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – ever and never with the present perfect.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'ever',
        'never',
        'present',
        'perfect',
        'asks',
        'about',
        'time',
        'life',
        'word']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – ever and never with the present perfect.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '13.2.4R',
      bookRef: 'Unit 13 · 13.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: has never . But they have for , which is .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — has never —. But they have — for , which is —. '
          + '(The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – ever and never with the present perfect',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (13.2) teaches: '
          + 'Grammar – ever and never with the present perfect. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – ever and never with the present perfect.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'ever',
        'never',
        'present',
        'perfect',
        'asks',
        'about',
        'time',
        'life',
        'word'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – ever and never with the present perfect.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '13.2.5',
      bookRef: 'Unit 13 · 13.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the experience section of Hala\'s application, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>Experience</b></p><p><b>Al Shifa Pharmacy, Latakia — counter '
          + 'assistant, 2021 to 2025 (four years)</b></p><p>I served between '
          + 'eighty and a hundred and twenty customers a day at the counter. I '
          + 'took telephone orders, explained instructions to people who were '
          + 'worried, and kept the stock card for ninety lines.</p><p>I have '
          + 'never worked in an office and I have never used an order system. I '
          + 'have used a stock system every day for four years, and I learned it '
          + 'in a week from a colleague who had no time to teach me.</p><p>In my '
          + 'last year I trained two new assistants. Both are still '
          + 'there.</p><h4>Writer\'s box</h4><p><b>Writing an experience section '
          + 'when you have the wrong experience.</b> Three moves, in this '
          + 'order:</p><p><b>1 — What you did, with numbers.</b> Not the job '
          + 'title: the work. <i>Between eighty and a hundred and twenty '
          + 'customers a day</i> is the job; <i>counter assistant</i> is only the '
          + 'name of it.</p><p><b>2 — The <i>never</i>, said first and said '
          + 'plainly.</b> If there is an obvious gap, name it yourself. A reader '
          + 'who finds it for themselves stops reading; a reader who is told it '
          + 'carries on.</p><p><b>3 — The sentence that follows the '
          + '<i>never</i>.</b> This is the one that matters: what you <b>have</b> '
          + 'done that is close, and what it proves. <i>I have used a stock '
          + 'system every day for four years, and I learned it in a '
          + 'week.</i></p><p>⚠ End with the shortest, hardest fact you have. '
          + '<i>Both are still there</i> is four words and it answers a question '
          + 'nobody asked out loud.</p>'
      },
      questions: [{
            q: 'What does she say she has never done — and where does she put it?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>never</i> in it.'
          },
      {
            q: 'What does she put immediately after the never sentence?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>immediately</i> in it.'
          },
      {
            q: 'Which sentence is the strongest, and why is it the shortest?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with <i>strongest</i> in it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '13.2.6',
      bookRef: 'Unit 13 · 13.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write the experience section for a post you would like — real or invented '
  + '(35 words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'ever',
        'never',
        'present',
        'perfect',
        'asks',
        'about',
        'time']
      },
      coach: {
        title: 'What to include',
        task: 'Write the experience section for a post you would like — real or invented '
  + '(35 words or more). Use the frame.',
        criteria: [{ t: 'Writing an experience section when you have the wrong '
              + 'experience. Three moves, in this order:' },
            { t: '1 — What you did, with numbers. Not the job title: the work. '
              + 'Between eighty and a hundred and twenty customers a day is the '
              + 'job; counter assistant is only the name of it.' },
            { t: '2 — The never, said first and said plainly. If there is an '
              + 'obvious gap, name it yourself. A reader who finds it for '
              + 'themselves stops reading; a reader who is told it carries on.' },
            { t: '3 — The sentence that follows the never. This is the one that '
              + 'matters: what you have done that is close, and what it proves. I '
              + 'have used a stock system every day for four years, and I learned '
              + 'it in a week.' },
            { t: '⚠ End with the shortest, hardest fact you have. Both are still '
              + 'there is four words and it answers a question nobody asked out '
              + 'loud.' }]
      },
      aiCheck: {
        task: 'Write the experience section for a post you would like — real or '
          + 'invented (35 words or more). Use the frame.',
        grammar: 'Grammar – ever and never with the present perfect',
        must: ['Writing an experience section when you have the wrong experience. '
          + 'Three moves, in this order:',
        '1 — What you did, with numbers. Not the job title: the work. Between '
          + 'eighty and a hundred and twenty customers a day is the job; counter '
          + 'assistant is only the name of it.',
        '2 — The never, said first and said plainly. If there is an obvious '
          + 'gap, name it yourself. A reader who finds it for themselves stops '
          + 'reading; a reader who is told it carries on.',
        '3 — The sentence that follows the never. This is the one that '
          + 'matters: what you have done that is close, and what it proves. I '
          + 'have used a stock system every day for four years, and I learned it '
          + 'in a week.'],
        vocab: ['grammar',
        'ever',
        'never',
        'present',
        'perfect',
        'asks',
        'about',
        'time',
        'life',
        'word']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '13.2.6P',
      bookRef: 'Unit 13 · 13.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Ask one question: does the never sentence have an answer under '
  + 'it? Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<h4>Band 3 feedback — name the criterion</h4><p>Point at the fix '
          + '<b>and</b> name the criterion it comes from: "Move three — the '
          + 'sentence after the <i>never</i> — is missing. What have you done '
          + 'that is close to it?"</p><p>If you cannot name a criterion, you have '
          + 'not found a fault; you have found something you would have written '
          + 'differently. Say so, and move on.</p><table '
          + 'class=\'bk\'><tr><th>Checklist</th><th>✓ / ✗</th></tr><tr><td>The '
          + 'work described, not the job title</td><td>&nbsp;</td></tr><tr><td>At '
          + 'least one number</td><td>&nbsp;</td></tr><tr><td>The gap named by '
          + 'the writer, not hidden</td><td>&nbsp;</td></tr><tr><td>A sentence '
          + 'after the <i>never</i> that answers '
          + 'it</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample band 3 feedback: "Move three — the sentence after the '
              + 'never — is doing its job here. The till system is answered by '
              + 'the cash drawer. Could the written procedure be answered too, or '
              + 'do you want to leave it?"',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Ask one question: does the never sentence have an answer '
          + 'under it? Tick ✓ or cross ✗.',
        grammar: 'Grammar – ever and never with the present perfect',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (13.2) '
          + 'teaches: Grammar – ever and never with the present perfect. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        must: ['Writing an experience section when you have the wrong experience. '
          + 'Three moves, in this order:',
        '1 — What you did, with numbers. Not the job title: the work. Between '
          + 'eighty and a hundred and twenty customers a day is the job; counter '
          + 'assistant is only the name of it.',
        '2 — The never, said first and said plainly. If there is an obvious '
          + 'gap, name it yourself. A reader who finds it for themselves stops '
          + 'reading; a reader who is told it carries on.',
        '3 — The sentence that follows the never. This is the one that '
          + 'matters: what you have done that is close, and what it proves. I '
          + 'have used a stock system every day for four years, and I learned it '
          + 'in a week.'],
        vocab: ['grammar',
        'ever',
        'never',
        'present',
        'perfect',
        'asks',
        'about',
        'time',
        'life',
        'word'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '13.2.6R',
      bookRef: 'Unit 13 · 13.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their never sentence and the one after it. The '
  + 'class says whether the second one answered the first.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'The test is whether the sentence under the never answers it. '
              + 'Most first drafts name the gap and then stop, which is worse '
              + 'than not naming it at all',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – ever and never with the present perfect.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '13.2.7',
      bookRef: 'Unit 13 · 13.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about something you have never done at work but could do tomorrow (60 '
  + 'to 100 words). Say what is close to it in what you have already done, and '
  + 'what you would need in the first week.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'ever',
        'never',
        'present',
        'perfect',
        'asks',
        'about',
        'time']
      },
      coach: {
        title: 'What to include',
        task: 'Write about something you have never done at work but could do tomorrow (60 '
  + 'to 100 words). Say what is close to it in what you have already done, and '
  + 'what you would need in the first week.',
        criteria: [{ t: 'Writing an experience section when you have the wrong '
              + 'experience. Three moves, in this order:' },
            { t: '1 — What you did, with numbers. Not the job title: the work. '
              + 'Between eighty and a hundred and twenty customers a day is the '
              + 'job; counter assistant is only the name of it.' },
            { t: '2 — The never, said first and said plainly. If there is an '
              + 'obvious gap, name it yourself. A reader who finds it for '
              + 'themselves stops reading; a reader who is told it carries on.' },
            { t: '3 — The sentence that follows the never. This is the one that '
              + 'matters: what you have done that is close, and what it proves. I '
              + 'have used a stock system every day for four years, and I learned '
              + 'it in a week.' },
            { t: '⚠ End with the shortest, hardest fact you have. Both are still '
              + 'there is four words and it answers a question nobody asked out '
              + 'loud.' }]
      },
      aiCheck: {
        task: 'Write about something you have never done at work but could do '
          + 'tomorrow (60 to 100 words). Say what is close to it in what you have '
          + 'already done, and what you would need in the first week.',
        grammar: 'Grammar – ever and never with the present perfect',
        must: ['Writing an experience section when you have the wrong experience. '
          + 'Three moves, in this order:',
        '1 — What you did, with numbers. Not the job title: the work. Between '
          + 'eighty and a hundred and twenty customers a day is the job; counter '
          + 'assistant is only the name of it.',
        '2 — The never, said first and said plainly. If there is an obvious '
          + 'gap, name it yourself. A reader who finds it for themselves stops '
          + 'reading; a reader who is told it carries on.',
        '3 — The sentence that follows the never. This is the one that '
          + 'matters: what you have done that is close, and what it proves. I '
          + 'have used a stock system every day for four years, and I learned it '
          + 'in a week.'],
        vocab: ['grammar',
        'ever',
        'never',
        'present',
        'perfect',
        'asks',
        'about',
        'time',
        'life',
        'word']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '13.2.7P',
      bookRef: 'Unit 13 · 13.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ the closest thing they have '
  + 'done ✓ ever / never used correctly? ? what would you ask them at interview?',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "most of them are not about the thing in the complaint" — that '
              + 'is the line. ✓ never used correctly. ? Who would you want '
              + 'listening to the first three?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ the closest thing '
          + 'they have done — ✓ ever / never used correctly? —? what would you '
          + 'ask them at interview? (The dashes are blanks the learner fills in '
          + 'with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'Grammar – ever and never with the present perfect',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (13.2) teaches: Grammar – ever and never with the present '
          + 'perfect. Judge the language against THAT and against nothing the '
          + 'course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – ever and never with the present perfect.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'ever',
        'never',
        'present',
        'perfect',
        'asks',
        'about',
        'time',
        'life',
        'word'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – ever and never with the present perfect.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'own',
      ref: '13.2.7R',
      bookRef: 'Unit 13 · 13.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. For each, the class decides in ten seconds: would you give '
  + 'them the week? Ten seconds is about as long as a real reader gives it.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then find a real job advertisement, in '
          + 'Arabic or English, and write the three <i>Have you ever…?</i> '
          + 'questions you think the interviewer would ask (35+ words).</p>'
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
      'I used this cycle\'s language: – ever and never with the present perfect.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
