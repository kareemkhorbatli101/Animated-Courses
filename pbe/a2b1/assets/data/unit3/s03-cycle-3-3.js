/* Unit 3 · cycle 3.3 — Have we got any plastic wrap?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u3-s03', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 3 · 3.3', part: '3.3',
          section: '3', lesson: 'Have we got any plastic wrap?', title: 'Have we got any plastic wrap?' },
  objective: 'ask and say what you have and have not got on the shelves',
  study: {
    minutes: 90,
    objective: 'ask and say what you have and have not got on the shelves',
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
    task: 'Write the answer when a colleague asks whether there is any plastic wrap left.',
    weak: 'No.',
    change: ['Say how much there is, not only that the answer is no - <i>None at '
          + 'all</i> is a different fact from <i>two rolls</i>.',
        'Add what you will do about it, or the same question comes back tomorrow.'],
    better: 'None at all - the last roll went on Sunday. I\'ll put it on the reorder '
      + 'list today.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '3.3.1',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Look in your bag. Say three sentences: I\'ve got some . I '
              + 'haven\'t got any . Have you got any ?',
            model: 'Open. Sample: I\'ve got some keys. I haven\'t got any money. '
              + 'Have you got any paper?',
            minWords: 5,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'some or any? We\'ve got boxes. · We haven\'t got tape. · Have '
              + 'you got paper? · There are pallets in the yard.',
            model: 'We\'ve got some boxes. · We haven\'t got any tape. · Have you '
              + 'got any paper? · There are some pallets in the yard',
            minWords: 6,
            rows: 3,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '3.3.2',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u3-3-3',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – some / any</b></p><table '
          + 'class=\'bk\'><tr><th>+</th><th>–</th><th>?</th></tr><tr><td>We\'ve '
          + 'got <b>some</b> tape.</td><td>We haven\'t got <b>any</b> '
          + 'wrap.</td><td>Have we got <b>any</b> wrap?</td></tr><tr><td>There '
          + 'are <b>some</b> boxes.</td><td>There aren\'t <b>any</b> '
          + 'corners.</td><td>Are there <b>any</b> '
          + 'boxes?</td></tr><tr><td>&nbsp;</td><td><b>No</b> wrap. · <b>None</b> '
          + 'at all.</td><td>How <b>much</b> tape? / How <b>many</b> '
          + 'boxes?</td></tr></table><p><b>some</b> in <b>+</b> sentences · '
          + '<b>any</b> in <b>–</b> and <b>?</b> sentences.</p><p>⚠ <b>no</b> + '
          + 'noun means the same as <b>not any</b>: <i>We\'ve got <b>no</b> '
          + 'wrap.</i> = <i>We haven\'t got <b>any</b> wrap.</i> Never use both: '
          + '<s>We haven\'t got no wrap</s>.</p><p>⚠ <i>Have you got '
          + '<b>any</b>…?</i> asks whether it exists. <i>Would you like '
          + '<b>some</b> tea?</i> — an <b>offer</b> takes <i>some</i>, not '
          + '<i>any</i>.</p><p><b>Practise:</b> Complete with <i>some, any</i> or '
          + '<i>no</i>.</p><p>1 Have we got <span class="blank"></span> plastic '
          + 'wrap? 2 We\'ve got <span class="blank"></span> tape, but <span '
          + 'class="blank"></span> wrap. 3 There aren\'t <span '
          + 'class="blank"></span> corners left. 4 There are <span '
          + 'class="blank"></span> boxes in the yard. 5 Would you like <span '
          + 'class="blank"></span> help with the list?</p><p><b>Useful '
          + 'phrases:</b> Have we got any…? · None at all. · …are not the '
          + 'problem. · How many shall I ask for? · the wide one, not the narrow '
          + 'one</p><p><b>Pronunciation – weak <i>some</i>.</b> 🔊 <b>Track '
          + '3.6</b> Listen and repeat: <i>some tape</i> /səm teɪp/ · <i>some '
          + 'boxes</i> /səm ˈbɒksɪz/. Strong /sʌm/ only when it means <i>some but '
          + 'not all</i>: <i><b>SOME</b> of the boxes are wet.</i></p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What has the warehouse not got?',
            options: [{
              t: 'boxes',
              ok: false,
              why: 'Boxes are counted in this scene - forty big and about a '
                + 'hundred small - which is why they stick in the ear.'
            },
            {
              t: 'plastic wrap',
              ok: true,
              why: 'He says the last roll finished on Sunday, and then none at all '
                + 'when she asks again.'
            },
            {
              t: 'tape',
              ok: false,
              why: 'He says there is some tape. Some is not none.'
            }],
            evidence: 'Abu Yasser\'s first answer, and what Nour decides to telephone '
              + 'Aleppo about'
          },
        {
            q: 'Books closed. Listen. How much plastic wrap is there?',
            options: [{
              t: 'none at all',
              ok: true,
              why: '"We haven\'t got any. The last roll finished on Sunday" - and '
                + 'he repeats none at all when she checks.'
            },
            {
              t: 'twelve rolls',
              ok: false,
              why: 'Twelve is how many she is going to ORDER, at the end. It is '
                + 'the number that is coming, not the number there is.'
            },
            {
              t: 'some, but not much',
              ok: false,
              why: 'There is SOME tape and SOME cardboard corners. The wrap is '
                + 'none - and the difference is this cycle\'s whole lesson.'
            }],
            evidence: 'Abu Yasser\'s first answer, and his second'
          },
        {
            q: 'Why must Nour telephone Aleppo today rather than tomorrow?',
            options: [{
              t: 'Ms Shamsi sends on Tuesday, so a day late costs a week',
              ok: true,
              why: 'His arithmetic, not hers: one sending day a week means '
                + 'tomorrow misses it.'
            },
            {
              t: 'because the Homs order goes tomorrow',
              ok: false,
              why: 'True of the order, but that is why they NEED wrap - it is not '
                + 'what makes today the deadline for the call.'
            },
            {
              t: 'because Ms Shamsi is only there today',
              ok: false,
              why: 'Nothing says when she is in. It is the sending day that is fixed.'
            }],
            evidence: 'Abu Yasser\'s line about Tuesday'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '3.3.2',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Complete with some, any or no.',
      text: '<b>1</b> Have we got [[1]] plastic wrap? &nbsp; <b>2</b> We\'ve got '
      + '[[2]] tape, but [[2b]] wrap. &nbsp; <b>3</b> There aren\'t [[3]] corners '
      + 'left. &nbsp; <b>4</b> There are [[4]] boxes in the yard. &nbsp; <b>5</b> '
      + 'Would you like [[5]] help with the list?',
      plain: true,
      small: true,
      answers: {
        '1': ['any'],
        '2': ['some'],
        '2b': ['no (or:'],
        '2c': ['but no)'],
        '3': ['any'],
        '4': ['some'],
        '5': ['some']
      }
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '3.3.2',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many big boxes are there?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>boxes</i> in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'When is the new wrap coming?',
            minWords: 6,
            rows: 2,
            hint: 'A time or a day. Look in the dialogue above for the line with '
              + '<i>coming</i> in it. Play it again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '3.3.3',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A needs materials; B checks the shelves. Use the skeleton, '
  + 'then the role cards.',
      scene: 'u3-3-3-pair',
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
        head: ['Role card 1 — the stationery cupboard',
        'Role card 2 — the van'],
        rows: [['Got: paper (6 packets), envelopes (many), pens. Not got: printer '
            + 'ink, staples. Ink finished last Thursday.',
          'Got: two trolleys, a ladder, rope. Not got: spare wheel, water. '
            + 'The spare went with the big van.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '3.3.3R',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Have we got any…?</td><td>☐ We '
          + 'haven\'t got any.</td><td>☐ None at all.</td><td>☐ There\'s '
          + 'some…</td><td>☐ …are not the problem.</td><td>☐ How many shall I ask '
          + 'for?</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write two lists. Typical errors: Have we got some '
              + 'wrap? → any in a question; We haven\'t got no wrap → one '
              + 'negative only; How much boxes → How many boxes',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – some / any.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '3.3.4',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Your team is going to do a job away from the office for one day (a delivery, '
  + 'a stock count, a repair). In threes, decide what you have got and what you '
  + 'must buy. Make the list.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>We\'ve got some…</th><th>We haven\'t got '
          + 'any…</th><th>Who buys '
          + 'it?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Grammar – some / any',
      'Abu Yasser'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Your team is going to do a job away from the office for one day (a '
          + 'delivery, a stock count, a repair). In threes, decide what you have '
          + 'got and what you must buy. Make the list.',
        grammar: 'Grammar – some / any',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (3.3) teaches: Grammar – some / any. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – some / any.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'sentences',
        'noun',
        'means',
        'we\'ve',
        'wrap',
        'haven\'t',
        'never',
        'both',
        'asks']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – some / any.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '3.3.4R',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: We\'ve got some and some . We haven\'t got any , so is buying it.',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Grammar – some / any',
      'Abu Yasser'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — We\'ve got some — and some —. We haven\'t got any '
          + ', so — is buying it. (The dashes are blanks the learner fills in '
          + 'with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'Grammar – some / any',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (3.3) teaches: '
          + 'Grammar – some / any. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – some / any.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'sentences',
        'noun',
        'means',
        'we\'ve',
        'wrap',
        'haven\'t',
        'never',
        'both',
        'asks'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – some / any.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '3.3.5',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the note Abu Yasser leaves for the office, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>STOCK NOTE — packaging</b> Thursday, end of day</p><p>We\'ve '
          + 'got some tape (about 30 rolls) and some cardboard corners (two '
          + 'boxes). We have got plenty of boxes: 40 big, about 100 small. Boxes '
          + 'are not the problem.</p><p>We haven\'t got any plastic wrap. None at '
          + 'all — the last roll finished on Sunday. We also haven\'t got any '
          + 'staples for the big stapler.</p><p>Please telephone Ms Shamsi '
          + '<b>today</b>. She sends on Tuesday. Ask for twelve rolls of the '
          + '<b>wide</b> wrap, not the narrow one.</p><p>Abu '
          + 'Yasser</p><h4>Writer\'s box</h4><p><b>Shape of a stock note:</b> '
          + 'what we have got (with numbers) → what we have <b>not</b> got → the '
          + 'action, with a <b>time</b> and a <b>reason</b>.</p><p>Put the '
          + '<b>good news first and short</b>, the problem second and clear. A '
          + 'reader who sees the problem in the first line stops reading the '
          + 'numbers.</p><p>Numbers make a stock note useful: <i>some tape</i> is '
          + 'weak; <i>about 30 rolls</i> is a fact somebody can plan '
          + 'with.</p><p>⚠ End with <b>who does what, and when</b>. A stock note '
          + 'that stops at the problem is only a complaint.</p>'
      },
      questions: [{
            q: 'What is there plenty of?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>plenty</i> in it.'
          },
      {
            q: 'What is there none of?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>none</i> in it.'
          },
      {
            q: 'Why must Nour telephone today and not tomorrow?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with <i>because</i> and it will come out '
              + 'whole. Look in the text above for the line with <i>Nour</i> in '
              + 'it.'
          }],
      ideas: ['Abu Yasser',
      'Grammar – some / any'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '3.3.6',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a stock note for your own workplace or home (25 words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'sentences',
        'noun',
        'means',
        'we\'ve',
        'wrap',
        'haven\'t',
        'never']
      },
      coach: {
        title: 'What to include',
        task: 'Write a stock note for your own workplace or home (25 words or more). Use the frame.',
        criteria: [{ t: 'Shape of a stock note: what we have got (with numbers) → what we '
              + 'have not got → the action, with a time and a reason.' },
            { t: 'Put the good news first and short, the problem second and clear. '
              + 'A reader who sees the problem in the first line stops reading '
              + 'the numbers.' },
            { t: 'Numbers make a stock note useful: some tape is weak; about 30 '
              + 'rolls is a fact somebody can plan with.' },
            { t: '⚠ End with who does what, and when. A stock note that stops at '
              + 'the problem is only a complaint.' }]
      },
      aiCheck: {
        task: 'Write a stock note for your own workplace or home (25 words or '
          + 'more). Use the frame.',
        grammar: 'Grammar – some / any',
        must: ['Shape of a stock note: what we have got (with numbers) → what we '
          + 'have not got → the action, with a time and a reason.',
        'Put the good news first and short, the problem second and clear. A '
          + 'reader who sees the problem in the first line stops reading the '
          + 'numbers.',
        'Numbers make a stock note useful: some tape is weak; about 30 rolls '
          + 'is a fact somebody can plan with.',
        '⚠ End with who does what, and when. A stock note that stops at the '
          + 'problem is only a complaint.'],
        vocab: ['grammar',
        'sentences',
        'noun',
        'means',
        'we\'ve',
        'wrap',
        'haven\'t',
        'never',
        'both',
        'asks']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '3.3.6P',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Tick ✓ or cross ✗. Underline one thing to fix.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td><i>some</i> in the positive, <i>any</i> in the '
          + 'negative</td><td>&nbsp;</td></tr><tr><td>A number with at least two '
          + 'things</td><td>&nbsp;</td></tr><tr><td>The action says <b>who</b> '
          + 'and <b>when</b></td><td>&nbsp;</td></tr><tr><td>A reason for the '
          + 'time</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample feedback: "The reason for today is strong. Who should go '
              + 'to the bank? Put a name in."',
            minWords: 6,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Tick ✓ or cross ✗. Underline one thing to fix.',
        grammar: 'Grammar – some / any',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (3.3) '
          + 'teaches: Grammar – some / any. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        must: ['Shape of a stock note: what we have got (with numbers) → what we '
          + 'have not got → the action, with a time and a reason.',
        'Put the good news first and short, the problem second and clear. A '
          + 'reader who sees the problem in the first line stops reading the '
          + 'numbers.',
        'Numbers make a stock note useful: some tape is weak; about 30 rolls '
          + 'is a fact somebody can plan with.',
        '⚠ End with who does what, and when. A stock note that stops at the '
          + 'problem is only a complaint.'],
        vocab: ['grammar',
        'sentences',
        'noun',
        'means',
        'we\'ve',
        'wrap',
        'haven\'t',
        'never',
        'both',
        'asks'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '3.3.6R',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read the last sentence of their note. The class says '
  + 'whether somebody could act on it today.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'A last sentence somebody can act on today names a person, a '
              + 'thing and a time: Please telephone Ms Shamsi today and ask for '
              + 'twelve wide rolls',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – some / any.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '3.3.7',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write the shopping list message for something you organise — a family event, '
  + 'a repair at home, a trip (35 words or more). Say what you have got, what is '
  + 'missing, who buys it and when.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'sentences',
        'noun',
        'means',
        'we\'ve',
        'wrap',
        'haven\'t',
        'never']
      },
      coach: {
        title: 'What to include',
        task: 'Write the shopping list message for something you organise — a family event, '
  + 'a repair at home, a trip (35 words or more). Say what you have got, what is '
  + 'missing, who buys it and when.',
        criteria: [{ t: 'Shape of a stock note: what we have got (with numbers) → what we '
              + 'have not got → the action, with a time and a reason.' },
            { t: 'Put the good news first and short, the problem second and clear. '
              + 'A reader who sees the problem in the first line stops reading '
              + 'the numbers.' },
            { t: 'Numbers make a stock note useful: some tape is weak; about 30 '
              + 'rolls is a fact somebody can plan with.' },
            { t: '⚠ End with who does what, and when. A stock note that stops at '
              + 'the problem is only a complaint.' }]
      },
      aiCheck: {
        task: 'Write the shopping list message for something you organise — a '
          + 'family event, a repair at home, a trip (35 words or more). Say what '
          + 'you have got, what is missing, who buys it and when.',
        grammar: 'Grammar – some / any',
        must: ['Shape of a stock note: what we have got (with numbers) → what we '
          + 'have not got → the action, with a time and a reason.',
        'Put the good news first and short, the problem second and clear. A '
          + 'reader who sees the problem in the first line stops reading the '
          + 'numbers.',
        'Numbers make a stock note useful: some tape is weak; about 30 rolls '
          + 'is a fact somebody can plan with.',
        '⚠ End with who does what, and when. A stock note that stops at the '
          + 'problem is only a complaint.'],
        vocab: ['grammar',
        'sentences',
        'noun',
        'means',
        'we\'ve',
        'wrap',
        'haven\'t',
        'never',
        'both',
        'asks']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '3.3.7P',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s message as the person who must buy. Write on a slip: ★ '
  + 'I know what to buy. ✓ How many…? ? one thing you would add',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ I know exactly what to buy and when. ✓ How many kilos of ice? '
              + '? What time does it all start?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s message as the person who must buy. Write on a '
          + 'slip: — ★ I know what to buy. — ✓ How many…? —? one thing you would '
          + 'add (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – some / any',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (3.3) teaches: Grammar – some / any. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – some / any.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'sentences',
        'noun',
        'means',
        'we\'ve',
        'wrap',
        'haven\'t',
        'never',
        'both',
        'asks'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – some / any.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '3.3.7R',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Walk and read. Find the list with the best numbers and say why numbers help.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final message. Then open one cupboard at home and '
          + 'write six sentences: three with <i>some</i> and three with '
          + '<i>any</i> or <i>no</i> (20+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Numbers help because the person buying does not have to guess, '
              + 'and because you can check the list afterwards without asking '
              + 'anybody',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – some / any.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
