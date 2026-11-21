/* Unit 24 · cycle 24.5 — We have already done three of the five.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE4.page('u24-s05', {
  book: { source: 'Proactive Business English · A2 Book 2', ref: 'Unit 24 · 24.5', part: '24.5',
          section: '5', lesson: 'We have already done three of the five', title: 'We have already done three of the five' },
  objective: 'say what has been done already, with the present perfect',
  study: {
    minutes: 90,
    objective: 'say what has been done already, with the present perfect',
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
    task: 'Write where the project has got to, for the manager.',
    weak: 'It\'s nearly finished.',
    change: ['Count it: how many of how many are done.',
        'Replace NEARLY with a date.'],
    better: 'We have already done three of the five: the customer letter, the new run '
      + 'sheet and the Tuesday stock change. We have not changed the invoice '
      + 'dates yet — that is the 8th of June.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '24.5.1',
      bookRef: 'Unit 24 · 24.5 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Name three things you have already done this week and two you '
              + 'have not done yet.',
            minWords: 6,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Which are right? We have already signed. · We have signed '
              + 'already. · We didn\'t sign yet. · We haven\'t signed yet.',
            model: 'Right: We have already signed, We have signed already, We '
              + 'haven\'t signed yet. Wrong: We didn\'t sign yet',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '24.5.2',
      bookRef: 'Unit 24 · 24.5 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u24-24-5',
      passage: {
        title: 'Language box',
        html: '<p><b>The present perfect – what is done and what is '
          + 'not</b></p><table '
          + 'class=\'bk\'><tr><th>Shape</th><th>Example</th></tr><tr><td><b>have '
          + '/ has</b> + third form</td><td>We <b>have signed</b> the '
          + 'lease.</td></tr><tr><td>with <b>already</b></td><td>We <b>have '
          + 'already ordered</b> the sign.</td></tr><tr><td>negative with '
          + '<b>yet</b></td><td>We <b>haven\'t fitted</b> the shelves '
          + '<b>yet</b>.</td></tr><tr><td>question with '
          + '<b>yet</b></td><td><b>Have</b> you stocked it '
          + '<b>yet</b>?</td></tr><tr><td>a count</td><td><b>Three of the '
          + 'five</b> steps <b>are done</b>.</td></tr></table><p>⚠ <b>Start a '
          + 'progress report with what is finished, and count it.</b> <i>Three of '
          + 'the five steps are done.</i> The reader\'s question is "should I '
          + 'worry", and a count answers it; a list of what is left does '
          + 'not.</p><p>⚠ <b><i>Haven\'t … yet</i>, not <i>didn\'t … yet</i>.</b> '
          + '<i>We haven\'t fitted the shelves yet.</i> The past simple with '
          + '<i>yet</i> is the commonest error in the cycle.</p><p>⚠ <b>Ban '
          + '<i>nearly</i>.</b> It covers anything from an hour to three weeks. '
          + 'Either it is done, or it is not done and has a date: <i>the painting '
          + 'is finished on Thursday</i>.</p><p>⚠ <i>Already</i> goes before the '
          + 'third form or at the end: <i>we have already signed</i> · <i>we have '
          + 'signed already</i>. Both are fine.</p><p><b>Practise:</b> Report '
          + 'each with a count, and a date on what is left. 1 a store opening 2 a '
          + 'stock count 3 a licence 4 a trial run 5 the year\'s '
          + 'plan</p><p><b>Useful phrases:</b> We have already… · Three of the '
          + 'five are done. · We haven\'t … yet. · not <i>nearly</i> — a date · '
          + 'Have you … yet?</p><p><b>Pronunciation – <i>we\'ve</i>.</b> 🔊 '
          + '<b>Track 24.10</b> Listen: <i>we\'ve already signed</i> — '
          + '<i>we\'ve</i> is one syllable, and the stress is on <i>already</i> '
          + 'and <i>signed</i>. Repeat four.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Nadia put first in the report?',
            options: [{
              t: 'what is left',
              ok: false,
              why: 'That is Hala\'s first version, and the one Nadia calls the '
                + 'wrong way round.'
            },
            {
              t: 'what is already done',
              ok: true,
              why: 'Lease signed, sign ordered, painting finished - the count comes first.'
            },
            {
              t: 'the problems',
              ok: false,
              why: 'No problem is reported; the two remaining items are work, not trouble.'
            }],
            evidence: 'Nadia\'s correction of the order of the report'
          },
        {
            q: 'Books closed. Listen. What is Nadia\'s objection to ‘nearly finished’?',
            options: [{
              t: 'that it is not finished, and the word is expensive',
              ok: true,
              why: 'Nearly is the most expensive word in a progress report, '
                + 'because it stops anybody asking when.'
            },
            {
              t: 'that it is too modest',
              ok: false,
              why: 'Her objection is to precision, not to tone.'
            },
            {
              t: 'that painting is not important',
              ok: false,
              why: 'It is one of the three things already done, by Hala\'s own count.'
            }],
            evidence: 'her last line'
          },
        {
            q: 'Why does Nadia want the finished things first?',
            options: [{
              t: 'because a count is evidence, not boasting',
              ok: true,
              why: 'Three of five done tells the reader where the project is; the '
                + 'list of what is left does not.'
            },
            {
              t: 'because the reader will stop reading',
              ok: false,
              why: 'Nothing is said about the length of the report.'
            },
            {
              t: 'because the problems are not important',
              ok: false,
              why: 'The two remaining things stay in; only the order changes.'
            }],
            evidence: 'her answer about what a count is'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '24.5.2',
      bookRef: 'Unit 24 · 24.5 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Report each with a count, and a date on what is left. 1 a store '
              + 'opening 2 a stock count 3 a licence 4 a trial run 5 the year\'s '
              + 'plan',
            model: 'Four of the six steps are done; the shelves are finished on · '
              + 'Three of the four rooms are counted; the upstairs room is '
              + 'Friday. · The licence has been applied for; the answer is due on '
              + '· We have run two of the six Saturdays; nineteen orders so far. '
              + '· Nine of the twelve units of the year\'s plan are done; the '
              + 'last three are November and December. · June. · May.',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '24.5.2',
      bookRef: 'Unit 24 · 24.5 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Why does she put the finished half first?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *finished* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What does she say about the word nearly?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with *nearly* in it. Play it again '
              + 'with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '24.5.3',
      bookRef: 'Unit 24 · 24.5 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A reports what is left; B turns it round and counts, then '
  + 'removes every nearly. Use the skeleton, then the role cards.',
      scene: 'u24-24-5-pair',
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
        head: ['Role card 1 — the stock count',
        'Role card 2 — the Saturday trial'],
        rows: [['Done: three of the four store rooms counted, the list printed, two '
            + 'staff trained. Not done: the upstairs room. A reports only the '
            + 'upstairs room, and calls it "nearly done".',
          'Done: the customers told, the driver hired, the route planned, two '
            + 'Saturdays run. Not done: the review. A says the trial is "going '
            + 'well", with no numbers.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '24.5.3R',
      bookRef: 'Unit 24 · 24.5 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out the exchange for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ We have already…</td><td>☐ Three of '
          + 'the five are done.</td><td>☐ We haven\'t … yet.</td><td>☐ Have you … '
          + 'yet?</td><td>☐ not nearly — a date</td><td>☐ a count is not '
          + 'boasting</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the count and any nearly that survived, with the '
              + 'date that replaced it. Typical errors: we didn\'t finish yet · '
              + 'we have finished yesterday (the present perfect with a finished '
              + 'time) · we have already two (no verb) · and the content fault of '
              + 'reporting a feeling instead of a count',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The present perfect – what is done and '
        + 'what is not.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '24.5.4',
      bookRef: 'Unit 24 · 24.5 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Report progress on something real. Four things done, two not done yet, each '
  + 'with a date — and no nearly anywhere.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Already done</th><th>Not done '
          + 'yet</th><th>Date</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Report progress on something real. Four things done, two not done '
          + 'yet, each with a date — and no nearly anywhere. (The dashes are '
          + 'blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'The present perfect – what is done and what is not',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (24.5) teaches: The present perfect – what is done and what is '
          + 'not. Judge the language against THAT and against nothing the course '
          + 'has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The present perfect – what is done and '
          + 'what is not.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['present',
        'perfect',
        'start',
        'progress',
        'report',
        'finished',
        'count',
        'steps',
        'reader\'s',
        'question']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The present perfect – what is done and '
        + 'what is not.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '24.5.4R',
      bookRef: 'Unit 24 · 24.5 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: We have already , and . of the are done. We haven\'t yet; that is .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — We have already , — and —. — of the — are done. We '
          + 'haven\'t — yet; that is —. (The dashes are blanks the learner fills '
          + 'in with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'The present perfect – what is done and what is not',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (24.5) teaches: '
          + 'The present perfect – what is done and what is not. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The present perfect – what is done and '
          + 'what is not.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['present',
        'perfect',
        'start',
        'progress',
        'report',
        'finished',
        'count',
        'steps',
        'reader\'s',
        'question'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The present perfect – what is done and '
        + 'what is not.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '24.5.5',
      bookRef: 'Unit 24 · 24.5 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the progress report, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>PROGRESS — Baghdad Street store, as at 28 '
          + 'May</b></p><p><b>Done: four of the six steps.</b> We have signed the '
          + 'lease (12 May), ordered the sign (12 May), applied for the licence '
          + '(12 May) and finished the painting (24 May, on time).</p><p><b>Not '
          + 'done yet: two.</b> The shelves are being fitted and will be finished '
          + 'on 30 May. The stock moves from Mezzeh between 1 and 5 '
          + 'June.</p><p><b>Changed.</b> The sign maker now says three and a half '
          + 'weeks, not three — so the sign arrives on 6 June, two days before '
          + 'opening instead of four. This is tight but it holds.</p><p><b>The '
          + 'one thing I am watching.</b> The licence. It was applied for on the '
          + '12th and six weeks takes us to 23 June, which is after the opening. '
          + 'We are allowed to open with it pending, and I have the paper that '
          + 'says so, so this is a thing I am watching and not a thing that stops '
          + 'us.</p><p><b>Still 8 June.</b> Nothing in this report moves the '
          + 'opening date.</p><h4>Writer\'s box</h4><p><b>A progress report — '
          + 'five short parts:</b> <b>done</b>, counted, with the date each thing '
          + 'was done → <b>not done yet</b>, with dates → <b>changed</b> since '
          + 'last time → <b>the one thing I am watching</b> → and a final line '
          + 'saying whether the end date has moved.</p><p><b>Put the date beside '
          + 'each finished item.</b> <i>Signed the lease (12 May).</i> It turns a '
          + 'claim into a record, and next month it is the only place that record '
          + 'exists.</p><p><b>Have exactly one "thing I am watching".</b> More '
          + 'than one and the reader does not know which to worry about; none at '
          + 'all and they assume you are not looking.</p><p>⚠ <b>End with the end '
          + 'date, every time</b>, even when nothing has changed — especially '
          + 'then. <i>Still 8 June. Nothing in this report moves the opening '
          + 'date.</i> That is the line the reader was looking for, and they '
          + 'should not have to work it out from the dates above.</p>'
      },
      questions: [{
            q: 'What is in brackets after each finished step, and why?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with *brackets* in it.'
          },
      {
            q: 'What is the difference between "the one thing I am watching" and '
              + 'a problem?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with *difference* in it.'
          },
      {
            q: 'Why is the last line there, when the dates above already say it?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with *because* and it will come out whole. '
              + 'Look in the text above for the line with *already* in it.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '24.5.6',
      bookRef: 'Unit 24 · 24.5 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a progress report on something real (35 words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['present',
        'perfect',
        'start',
        'progress',
        'report',
        'finished',
        'count',
        'steps']
      },
      coach: {
        title: 'What to include',
        task: 'Write a progress report on something real (35 words or more). Use the frame.',
        criteria: [{ t: 'A progress report — five short parts: done, counted, with the '
              + 'date each thing was done → not done yet, with dates → changed '
              + 'since last time → the one thing I am watching → and a final line '
              + 'saying whether the end date has moved.' },
            { t: 'Put the date beside each finished item. Signed the lease (12 '
              + 'May). It turns a claim into a record, and next month it is the '
              + 'only place that record exists.' },
            { t: 'Have exactly one "thing I am watching". More than one and the '
              + 'reader does not know which to worry about; none at all and they '
              + 'assume you are not looking.' },
            { t: '⚠ End with the end date, every time, even when nothing has '
              + 'changed — especially then. Still 8 June. Nothing in this report '
              + 'moves the opening date. That is the line the reader was looking '
              + 'for, and they should not have to work it out from the dates '
              + 'above.' }]
      },
      aiCheck: {
        task: 'Write a progress report on something real (35 words or more). Use the frame.',
        grammar: 'The present perfect – what is done and what is not',
        must: ['A progress report — five short parts: done, counted, with the date '
          + 'each thing was done → not done yet, with dates → changed since last '
          + 'time → the one thing I am watching → and a final line saying whether '
          + 'the end date has moved.',
        'Put the date beside each finished item. Signed the lease (12 May). '
          + 'It turns a claim into a record, and next month it is the only place '
          + 'that record exists.',
        'Have exactly one "thing I am watching". More than one and the reader '
          + 'does not know which to worry about; none at all and they assume you '
          + 'are not looking.',
        '⚠ End with the end date, every time, even when nothing has changed — '
          + 'especially then. Still 8 June. Nothing in this report moves the '
          + 'opening date. That is the line the reader was looking for, and they '
          + 'should not have to work it out from the dates above.'],
        vocab: ['present',
        'perfect',
        'start',
        'progress',
        'report',
        'finished',
        'count',
        'steps',
        'reader\'s',
        'question']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '24.5.6P',
      bookRef: 'Unit 24 · 24.5 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Ask one question: does the reader know whether to worry, in ten '
  + 'seconds? Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<h4>Band 3 feedback — name the criterion</h4><p>"The box says have '
          + 'exactly one thing you are watching. I can see three here — which one '
          + 'would actually move the date?"</p><p>Quote, question, '
          + 'stop.</p><table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>A count of what is '
          + 'done</td><td>&nbsp;</td></tr><tr><td>A date beside each finished '
          + 'item</td><td>&nbsp;</td></tr><tr><td><i>Haven\'t … yet</i> with '
          + 'dates, and no <i>nearly</i></td><td>&nbsp;</td></tr><tr><td>One '
          + 'watched item, and the end date '
          + 'restated</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample band 3 feedback: "The box says have exactly one thing you '
              + 'are watching, and the one you chose is a person rather than a '
              + 'date, which is braver and probably right. Has not complained is '
              + 'not the same as being all right is the best sentence in the '
              + 'report."',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Ask one question: does the reader know whether to worry, '
          + 'in ten seconds? Tick ✓ or cross ✗.',
        grammar: 'The present perfect – what is done and what is not',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (24.5) '
          + 'teaches: The present perfect – what is done and what is not. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        must: ['A progress report — five short parts: done, counted, with the date '
          + 'each thing was done → not done yet, with dates → changed since last '
          + 'time → the one thing I am watching → and a final line saying whether '
          + 'the end date has moved.',
        'Put the date beside each finished item. Signed the lease (12 May). '
          + 'It turns a claim into a record, and next month it is the only place '
          + 'that record exists.',
        'Have exactly one "thing I am watching". More than one and the reader '
          + 'does not know which to worry about; none at all and they assume you '
          + 'are not looking.',
        '⚠ End with the end date, every time, even when nothing has changed — '
          + 'especially then. Still 8 June. Nothing in this report moves the '
          + 'opening date. That is the line the reader was looking for, and they '
          + 'should not have to work it out from the dates above.'],
        vocab: ['present',
        'perfect',
        'start',
        'progress',
        'report',
        'finished',
        'count',
        'steps',
        'reader\'s',
        'question'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '24.5.6R',
      bookRef: 'Unit 24 · 24.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their last line. The class says whether they '
  + 'would need to ask a single question after reading it.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Read only the last lines. Ask whether anybody would need to put '
              + 'a single question after reading one. A report that survives that '
              + 'test is a report that will be read next month',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The present perfect – what is done and '
        + 'what is not.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '24.5.7',
      bookRef: 'Unit 24 · 24.5 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about something at your work that was reported as "nearly finished" '
  + 'for a long time (60 to 100 words). Say how long, what was actually left, and '
  + 'what finally finished it.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      meter: {
        label: 'words from this lesson',
        words: ['present',
        'perfect',
        'start',
        'progress',
        'report',
        'finished',
        'count',
        'steps']
      },
      coach: {
        title: 'What to include',
        task: 'Write about something at your work that was reported as "nearly finished" '
  + 'for a long time (60 to 100 words). Say how long, what was actually left, and '
  + 'what finally finished it.',
        criteria: [{ t: 'A progress report — five short parts: done, counted, with the '
              + 'date each thing was done → not done yet, with dates → changed '
              + 'since last time → the one thing I am watching → and a final line '
              + 'saying whether the end date has moved.' },
            { t: 'Put the date beside each finished item. Signed the lease (12 '
              + 'May). It turns a claim into a record, and next month it is the '
              + 'only place that record exists.' },
            { t: 'Have exactly one "thing I am watching". More than one and the '
              + 'reader does not know which to worry about; none at all and they '
              + 'assume you are not looking.' },
            { t: '⚠ End with the end date, every time, even when nothing has '
              + 'changed — especially then. Still 8 June. Nothing in this report '
              + 'moves the opening date. That is the line the reader was looking '
              + 'for, and they should not have to work it out from the dates '
              + 'above.' }]
      },
      aiCheck: {
        task: 'Write about something at your work that was reported as "nearly '
          + 'finished" for a long time (60 to 100 words). Say how long, what was '
          + 'actually left, and what finally finished it.',
        grammar: 'The present perfect – what is done and what is not',
        must: ['A progress report — five short parts: done, counted, with the date '
          + 'each thing was done → not done yet, with dates → changed since last '
          + 'time → the one thing I am watching → and a final line saying whether '
          + 'the end date has moved.',
        'Put the date beside each finished item. Signed the lease (12 May). '
          + 'It turns a claim into a record, and next month it is the only place '
          + 'that record exists.',
        'Have exactly one "thing I am watching". More than one and the reader '
          + 'does not know which to worry about; none at all and they assume you '
          + 'are not looking.',
        '⚠ End with the end date, every time, even when nothing has changed — '
          + 'especially then. Still 8 June. Nothing in this report moves the '
          + 'opening date. That is the line the reader was looking for, and they '
          + 'should not have to work it out from the dates above.'],
        vocab: ['present',
        'perfect',
        'start',
        'progress',
        'report',
        'finished',
        'count',
        'steps',
        'reader\'s',
        'question']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '24.5.7P',
      bookRef: 'Unit 24 · 24.5 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ how long "nearly" lasted ✓ '
  + 'have / haven\'t … yet ? what finished it in the end?',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "fourteen months of nearly and one afternoon of a date" ✓ have '
              + '/ haven\'t … yet. ? What finished it in the end?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ how long "nearly" '
          + 'lasted — ✓ have / haven\'t … yet —? what finished it in the end? '
          + '(The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'The present perfect – what is done and what is not',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (24.5) teaches: The present perfect – what is done and what is '
          + 'not. Judge the language against THAT and against nothing the course '
          + 'has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The present perfect – what is done and '
          + 'what is not.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['present',
        'perfect',
        'start',
        'progress',
        'report',
        'finished',
        'count',
        'steps',
        'reader\'s',
        'question'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The present perfect – what is done and '
        + 'what is not.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '24.5.7R',
      bookRef: 'Unit 24 · 24.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. What finished each one? It is usually a date somebody '
  + 'finally put on it, in front of other people.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then write this week\'s progress on '
          + 'something, with a count, dates in brackets, and one watched item '
          + '(35+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'What finishes a long "nearly" is almost always a date set in '
              + 'front of other people. That is not a language point and it is '
              + 'the most useful thing in the cycle',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The present perfect – what is done and '
        + 'what is not.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
