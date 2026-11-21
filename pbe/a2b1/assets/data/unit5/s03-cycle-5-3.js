/* Unit 5 · cycle 5.3 — The cheapest is not always the best.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u5-s03', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 5 · 5.3', part: '5.3',
          section: '3', lesson: 'The cheapest is not always the best', title: 'The cheapest is not always the best' },
  objective: 'say which of several is the best, the cheapest or the nearest',
  study: {
    minutes: 90,
    objective: 'say which of several is the best, the cheapest or the nearest',
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
    task: 'Write why the cheapest supplier is not the one you would choose.',
    weak: 'The cheap one is bad.',
    change: ['Refuse it for a named reason that is not the price.',
        'Say what the right test is, since price is not it here.'],
    better: 'The cheapest wrap isn\'t strong enough for a full pallet. The test is '
      + 'whether the load arrives whole, not what the roll costs.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '5.3.1',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Make the superlative: cheap → · near → · easy → · expensive → · '
              + 'good → · bad →',
            model: 'cheap → the cheapest · near → the nearest · easy → the easiest · '
              + 'expensive → the most expensive · good → the best · bad → the '
              + 'worst',
            minWords: 6,
            rows: 3,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          },
      {
            q: 'Who in this room lives the nearest? Who travels the furthest? '
              + 'Ask and find out.',
            model: 'Open — a survey task. Check the question form: Who lives the '
              + 'nearest? Who travels the furthest?',
            minWords: 5,
            rows: 2,
            hint: 'A person: their name, or their job if the line gives no name.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '5.3.2',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u5-5-3',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – superlatives</b></p><table '
          + 'class=\'bk\'><tr><th>Adjective</th><th>Superlative</th><th>Example</th></tr><tr><td>short</td><td><b>the</b> '
          + '+ <b>-est</b></td><td><b>the</b> cheap<b>est</b> · <b>the</b> '
          + 'near<b>est</b> · <b>the</b> fast<b>est</b></td></tr><tr><td>ending '
          + 'in -y</td><td><b>the</b> + <b>-iest</b></td><td><b>the</b> '
          + 'eas<b>iest</b> · <b>the</b> '
          + 'busi<b>est</b></td></tr><tr><td>long</td><td><b>the most</b> '
          + '…</td><td><b>the most</b> expensive · <b>the most</b> '
          + 'difficult</td></tr><tr><td>irregular</td><td>—</td><td>good → <b>the '
          + 'best</b> · bad → <b>the worst</b> · far → <b>the '
          + 'furthest</b></td></tr></table><p><b>the</b> is part of the '
          + 'superlative — it is almost never left out: <i><b>the</b> '
          + 'cheapest</i>, not <s>cheapest</s>.</p><p><b>by a long way</b> · '
          + '<b>by far</b> = much more than the others: <i>Zahra is the cheapest '
          + '<b>by a long way</b>.</i></p><p>⚠ Two things → comparative '
          + '(<i>cheaper</i>). Three or more → superlative (<i>the cheapest</i>). '
          + 'This is the mistake to watch.</p><p><b>Practise:</b> Comparative or '
          + 'superlative?</p><p>1 Of the three quotes, Zahra is <span '
          + 'class="blank"></span> (cheap). 2 Hamdan is <span '
          + 'class="blank"></span> (near) than Zahra. 3 Noor does <span '
          + 'class="blank"></span> (good) paper of the three. 4 Which is <span '
          + 'class="blank"></span> (fast), Hamdan or Noor? 5 Thursday is <span '
          + 'class="blank"></span> (busy) day of the week.</p><p><b>Useful '
          + 'phrases:</b> Which is the cheapest? · by a long way · the best for '
          + 'us · round the corner · we know them · not always the '
          + 'best</p><p><b>Pronunciation – the before a superlative.</b> 🔊 '
          + '<b>Track 5.6</b> Listen and repeat: <i>the cheapest</i> /ðə '
          + 'ˈtʃiːpɪst/ · <i>the easiest</i> /ði ˈiːziɪst/. <b>the</b> is /ðə/ '
          + 'before a consonant sound and /ði/ before a vowel sound.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How many offers are there?',
            options: [{
              t: 'two',
              ok: false,
              why: 'Only two are compared at the end, when the choice narrows. '
                + 'Count the names in the first answer.'
            },
            {
              t: 'three',
              ok: true,
              why: 'Zahra, Hamdan and Noor - a cheapest, a middle and a best.'
            },
            {
              t: 'four',
              ok: false,
              why: 'Four figures are said aloud, including a total. Figures are not offers.'
            }],
            evidence: 'Mr Ayoub\'s first line, and the three names Nour gives'
          },
        {
            q: 'Books closed. Listen. Which printer does Nour recommend?',
            options: [{
              t: 'Hamdan',
              ok: true,
              why: 'Not the cheapest - three days, in Jaramana, and they are known.'
            },
            {
              t: 'Zahra Press',
              ok: false,
              why: 'The cheapest by a long way, and the slowest at ten days. That '
                + 'gap is the lesson.'
            },
            {
              t: 'Noor Printing',
              ok: false,
              why: 'The most expensive, with the best paper - which an invoice '
                + 'book does not need.'
            }],
            evidence: 'her last line'
          },
        {
            q: 'What is Mr Ayoub\'s conclusion worth writing on the wall?',
            options: [{
              t: 'the cheapest is not always the best',
              ok: true,
              why: 'He says it as a rule, after she has shown him why with three quotes.'
            },
            {
              t: 'always use the nearest supplier',
              ok: false,
              why: 'Hamdan happens to be nearest, but he does not turn that into the rule.'
            },
            {
              t: 'never buy the best paper',
              ok: false,
              why: 'She says they do not need it for THIS job. That is a judgement '
                + 'about invoice books, not a rule about paper.'
            }],
            evidence: 'his last line'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '5.3.2',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Comparative or superlative?',
      text: '<b>1</b> Of the three quotes, Zahra is [[1]] (cheap). &nbsp; <b>2</b> '
      + 'Hamdan is [[2]] (near) than Zahra. &nbsp; <b>3</b> Noor does [[3]] '
      + '(good) paper of the three. &nbsp; <b>4</b> Which is [[4]] (fast), Hamdan '
      + 'or Noor? &nbsp; <b>5</b> Thursday is [[5]] (busy) day of the week.',
      plain: true,
      small: true,
      answers: {
        '1': ['the cheapest'],
        '2': ['nearer'],
        '3': ['the best'],
        '4': ['faster'],
        '5': ['the busiest']
      }
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '5.3.2',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Which is the cheapest?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *cheapest* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'Which one does Nour choose, and why?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the dialogue above for the line with *Nour* in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '5.3.3',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A has three quotes; B asks which is the cheapest, the fastest '
  + 'and the best, and why. Use the skeleton, then the role cards.',
      scene: 'u5-5-3-pair',
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
        head: ['Role card 1 — three builders for a wall',
        'Role card 2 — three schools for a child'],
        rows: [['Hamdi 900,000, 3 weeks, far. Said 1,150,000, 10 days, near, did '
            + 'your neighbour\'s wall. Jamil 1,400,000, 5 days, best finish, '
            + 'never met him.',
          'School A: cheapest, biggest classes, 40 minutes away. School B: '
            + 'middle price, nearest, average results. School C: most expensive, '
            + 'best results, strictest.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '5.3.3R',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Which is the cheapest?</td><td>☐ the '
          + 'fastest</td><td>☐ the nearest</td><td>☐ by a long way</td><td>☐ the '
          + 'best for us</td><td>☐ we know them</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'The superlative that decides is almost never the cheapest: it is '
              + 'the nearest, the best for us, or an unspoken one — the one we '
              + 'know. Typical errors: a superlative used for two things (the '
              + 'cheapest of the two → the cheaper); the missing the; more '
              + 'cheapest',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – superlatives.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '5.3.4',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'In threes, agree on the best, the worst, the cheapest, the nearest and the '
  + 'busiest of something you all know — markets, bus routes, months of the year, '
  + 'places to eat near here. You must agree, so you must argue.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Superlative</th><th>Our '
          + 'answer</th><th>Who disagreed, and why</th></tr><tr><td>the '
          + 'best</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>the '
          + 'cheapest</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>the '
          + 'busiest</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>the '
          + 'worst</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Grammar – superlatives'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'In threes, agree on the best, the worst, the cheapest, the nearest '
          + 'and the busiest of something you all know — markets, bus routes, '
          + 'months of the year, places to eat near here. You must agree, so you '
          + 'must argue. (The dashes are blanks the learner fills in with their '
          + 'own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – superlatives',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (5.3) teaches: Grammar – superlatives. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – superlatives.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'superlatives',
        'part',
        'superlative',
        'almost',
        'never',
        'left',
        'cheapest',
        'long',
        'than']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – superlatives.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '5.3.4R',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: We agreed that is the , but said was the , because .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Grammar – superlatives'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — We agreed that — is the , but — said — was the , '
          + 'because —. (The dashes are blanks the learner fills in with their '
          + 'own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – superlatives',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (5.3) teaches: '
          + 'Grammar – superlatives. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – superlatives.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'superlatives',
        'part',
        'superlative',
        'almost',
        'never',
        'left',
        'cheapest',
        'long',
        'than'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – superlatives.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '5.3.5',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the quote summary Nour puts on one page, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>THREE QUOTES — 500 invoice books</b> 13 April</p><p>Zahra '
          + 'Press: <b>110,000</b> · 10 days · Qaboun · paper: ordinary · never '
          + 'used them</p><p>Hamdan Printing: <b>135,000</b> · 3 days · Jaramana '
          + '· paper: ordinary · used 4 times, no problems</p><p>Noor Printing: '
          + '<b>160,000</b> · 6 days · Mezzeh · paper: best · used once, very '
          + 'good</p><p><b>The cheapest</b> is Zahra, by 25,000. <b>The fastest '
          + 'and the nearest</b> is Hamdan. <b>The best paper</b> is '
          + 'Noor.</p><p><b>Recommendation: Hamdan.</b> An invoice book does not '
          + 'need the best paper. The 25,000 we save with Zahra costs us seven '
          + 'days and a printer we have never tried. Hamdan is three days and '
          + 'round the corner, and if a page is wrong we can walk there.</p><p>If '
          + 'this were a catalogue and not an invoice book, I would say '
          + 'Noor.</p><p>Nour</p><h4>Writer\'s box</h4><p><b>Shape of a quote '
          + 'summary:</b> one line per quote, always the <b>same facts in the '
          + 'same order</b> → a line of superlatives (cheapest / fastest / best '
          + 'at…) → <b>the recommendation, in bold, first</b> → the reason → when '
          + 'the answer would be different.</p><p>Put the recommendation '
          + '<b>before</b> the reason. The person reading has already seen the '
          + 'numbers; what they want is your sentence.</p><p>Name what the '
          + 'cheapest one <b>costs you</b>: <i>the 25,000 we save costs us seven '
          + 'days and a printer we have never tried.</i> That is the sentence '
          + 'that wins the argument.</p><p>⚠ End with <i>if this were <span '
          + 'class="blank"></span>, I would say <span class="blank"></span>.</i> '
          + 'It shows you chose for <b>this</b> job, not out of habit, and it '
          + 'saves the next conversation.</p>'
      },
      questions: [{
            q: 'Which is the cheapest, and by how much?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with *cheapest* in it.'
          },
      {
            q: 'Why does Nour not recommend the cheapest?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with *because* and it will come out whole. '
              + 'Look in the text above for the line with *Nour* in it.'
          },
      {
            q: 'When would she recommend Noor?',
            minWords: 6,
            rows: 2,
            hint: 'A time or a day. Look in the text above for the line with *Noor* in it.'
          }],
      ideas: ['Grammar – superlatives'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '5.3.6',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a three-quote summary for a real or invented job (25 words or more). '
  + 'Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'superlatives',
        'part',
        'superlative',
        'almost',
        'never',
        'left',
        'cheapest']
      },
      coach: {
        title: 'What to include',
        task: 'Write a three-quote summary for a real or invented job (25 words or more). '
  + 'Use the frame.',
        criteria: [{ t: 'Shape of a quote summary: one line per quote, always the same '
              + 'facts in the same order → a line of superlatives (cheapest / '
              + 'fastest / best at…) → the recommendation, in bold, first → the '
              + 'reason → when the answer would be different.' },
            { t: 'Put the recommendation before the reason. The person reading has '
              + 'already seen the numbers; what they want is your sentence.' },
            { t: 'Name what the cheapest one costs you: the 25,000 we save costs '
              + 'us seven days and a printer we have never tried. That is the '
              + 'sentence that wins the argument.' },
            { t: '⚠ End with if this were , I would say . It shows you chose for '
              + 'this job, not out of habit, and it saves the next conversation.' }]
      },
      aiCheck: {
        task: 'Write a three-quote summary for a real or invented job (25 words or '
          + 'more). Use the frame.',
        grammar: 'Grammar – superlatives',
        must: ['Shape of a quote summary: one line per quote, always the same facts '
          + 'in the same order → a line of superlatives (cheapest / fastest / '
          + 'best at…) → the recommendation, in bold, first → the reason → when '
          + 'the answer would be different.',
        'Put the recommendation before the reason. The person reading has '
          + 'already seen the numbers; what they want is your sentence.',
        'Name what the cheapest one costs you: the 25,000 we save costs us '
          + 'seven days and a printer we have never tried. That is the sentence '
          + 'that wins the argument.',
        '⚠ End with if this were , I would say . It shows you chose for this '
          + 'job, not out of habit, and it saves the next conversation.'],
        vocab: ['grammar',
        'superlatives',
        'part',
        'superlative',
        'almost',
        'never',
        'left',
        'cheapest',
        'long',
        'than']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '5.3.6P',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Read only the recommendation and the reason. Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>Same facts in the same order on every '
          + 'line</td><td>&nbsp;</td></tr><tr><td><i>the</i> before every '
          + 'superlative</td><td>&nbsp;</td></tr><tr><td>The recommendation comes '
          + 'before the reason</td><td>&nbsp;</td></tr><tr><td>It says what the '
          + 'cheapest one would cost you</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample feedback: "The closed-day argument is the whole note. '
              + 'Could you put a number on a closed day? Then nobody can argue."',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Read only the recommendation and the reason. Tick ✓ or cross ✗.',
        grammar: 'Grammar – superlatives',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (5.3) '
          + 'teaches: Grammar – superlatives. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        must: ['Shape of a quote summary: one line per quote, always the same facts '
          + 'in the same order → a line of superlatives (cheapest / fastest / '
          + 'best at…) → the recommendation, in bold, first → the reason → when '
          + 'the answer would be different.',
        'Put the recommendation before the reason. The person reading has '
          + 'already seen the numbers; what they want is your sentence.',
        'Name what the cheapest one costs you: the 25,000 we save costs us '
          + 'seven days and a printer we have never tried. That is the sentence '
          + 'that wins the argument.',
        '⚠ End with if this were , I would say . It shows you chose for this '
          + 'job, not out of habit, and it saves the next conversation.'],
        vocab: ['grammar',
        'superlatives',
        'part',
        'superlative',
        'almost',
        'never',
        'left',
        'cheapest',
        'long',
        'than'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '5.3.6R',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their last line (if this were…). The class says '
  + 'what it tells them about the writer.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'The if this were… line shows the writer chose for this job. A '
              + 'writer who cannot finish that sentence has usually chosen out of '
              + 'habit',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – superlatives.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '5.3.7',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about the best and the worst of something in your own life — jobs, '
  + 'journeys, meals, days (35 words or more). Use at least four superlatives and '
  + 'say <b>why</b>, not only <b>which</b>.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'superlatives',
        'part',
        'superlative',
        'almost',
        'never',
        'left',
        'cheapest']
      },
      coach: {
        title: 'What to include',
        task: 'Write about the best and the worst of something in your own life — jobs, '
  + 'journeys, meals, days (35 words or more). Use at least four superlatives and '
  + 'say why, not only which.',
        criteria: [{ t: 'Shape of a quote summary: one line per quote, always the same '
              + 'facts in the same order → a line of superlatives (cheapest / '
              + 'fastest / best at…) → the recommendation, in bold, first → the '
              + 'reason → when the answer would be different.' },
            { t: 'Put the recommendation before the reason. The person reading has '
              + 'already seen the numbers; what they want is your sentence.' },
            { t: 'Name what the cheapest one costs you: the 25,000 we save costs '
              + 'us seven days and a printer we have never tried. That is the '
              + 'sentence that wins the argument.' },
            { t: '⚠ End with if this were , I would say . It shows you chose for '
              + 'this job, not out of habit, and it saves the next conversation.' }]
      },
      aiCheck: {
        task: 'Write about the best and the worst of something in your own life — '
          + 'jobs, journeys, meals, days (35 words or more). Use at least four '
          + 'superlatives and say why, not only which.',
        grammar: 'Grammar – superlatives',
        must: ['Shape of a quote summary: one line per quote, always the same facts '
          + 'in the same order → a line of superlatives (cheapest / fastest / '
          + 'best at…) → the recommendation, in bold, first → the reason → when '
          + 'the answer would be different.',
        'Put the recommendation before the reason. The person reading has '
          + 'already seen the numbers; what they want is your sentence.',
        'Name what the cheapest one costs you: the 25,000 we save costs us '
          + 'seven days and a printer we have never tried. That is the sentence '
          + 'that wins the argument.',
        '⚠ End with if this were , I would say . It shows you chose for this '
          + 'job, not out of habit, and it saves the next conversation.'],
        vocab: ['grammar',
        'superlatives',
        'part',
        'superlative',
        'almost',
        'never',
        'left',
        'cheapest',
        'long',
        'than']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '5.3.7P',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ The best one made me smile / '
  + 'think. ✓ Can you say why it was the worst? ? a question about it',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "the same eleven sentences four hundred times" — that is the '
              + 'whole job in one line. ✓ Can you say why you left the workshop? '
              + '? Would you go back to either?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ The best one made me '
          + 'smile / think. — ✓ Can you say why it was the worst? —? a question '
          + 'about it (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – superlatives',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (5.3) teaches: Grammar – superlatives. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – superlatives.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'superlatives',
        'part',
        'superlative',
        'almost',
        'never',
        'left',
        'cheapest',
        'long',
        'than'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – superlatives.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '5.3.7R',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Collect the class\'s superlatives on the board. Which adjective was used '
  + 'most? Which was used only once?',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then write five superlative sentences '
          + 'about your country for somebody who has never been — the oldest, the '
          + 'busiest, the most beautiful, the hottest, the best (20+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'The adjective used most in a class is usually good / best; the '
              + 'ones used once are the memorable ones — the quietest, the '
              + 'longest, the strictest, the hottest. Collect them as the unit\'s '
              + 'extra vocabulary',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – superlatives.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
