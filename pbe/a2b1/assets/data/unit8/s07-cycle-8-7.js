/* Unit 8 · cycle 8.7 — Review & Mediate: what does the week's report say?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u8-s07', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 8 · 8.7', part: '8.7',
          section: '7', lesson: 'Review & Mediate: what does the week\'s report say?', title: 'Review & Mediate: what does the week\'s report say?' },
  objective: 'Review & Mediate: tell a colleague what the week\'s report says',
  study: {
    minutes: 95,
    objective: 'Review & Mediate: tell a colleague what the week\'s report says',
    steps: [{
          title: 'Get ready – Unit 8 quiz',
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
          title: 'Report – mediation',
          mins: 6,
          why: 'Saying it to a room, which is harder than saying it to one person.',
          todo: 'Stand up if you can. Say it once, slowly. Then write what you said.',
          alone: 'Say it aloud to the empty room anyway - the difficulty is the '
            + 'standing up and the once, not the audience.'
        },
        {
          title: 'Read – exam practice (A2 Key Reading Part 1)',
          mins: 10,
          why: 'Meeting the shape of the thing before you have to write one.',
          todo: 'Read the page above the questions, then answer. The answers are IN '
            + 'the page - if you cannot find one, read again rather than guess.',
          alone: 'Cover your answer and read the page again before you check.'
        },
        {
          title: 'Write with help',
          mins: 8,
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
          title: 'Write freely – exam practice (A2 Key Writing Part 6)',
          mins: 12,
          why: 'The same writing, without the model.',
          todo: 'Write first, check the model afterwards. Looking first turns it '
            + 'into copying.',
          alone: 'Set a timer for ten minutes and do not stop to correct anything.'
        },
        {
          title: 'Unit 8 check',
          mins: 15,
          why: 'Finding out what stuck.',
          todo: 'Do it without looking back at the unit. Then look back at whatever '
            + 'you got wrong - that is the list of what to study again.',
          alone: 'Do it cold. The looking-back is the exercise.'
        }]
  },
  worked: {
    task: 'Write what the week\'s report actually says about your section, for '
      + 'somebody who is worried by it.',
    weak: 'It says we were slow.',
    change: ['Quote the line, so the judgement can be checked against it.',
        'Say plainly that nobody is being blamed, if that is what the paper says.'],
    better: 'The first one is good: it says the orders went out on the day. The 4 is '
      + 'your deliveries, written as a number - nobody is being blamed.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '8.7.1',
      bookRef: 'Unit 8 · 8.7 · Lesson A · Speaking · Get ready – Unit 8 quiz',
      type: 'discuss',
      title: 'Get ready – Unit 8 quiz',
      instruction: 'In pairs, answer from memory. Then check in the unit.',
      questions: [{
            q: 'Write what you would say. Your own words.',
            minWords: 6,
            rows: 2,
            hint: 'Say it out loud first, then write that down. Use the names, '
              + 'numbers and places from your own workplace, not the book\'s.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
    },
    {
      id: 'c2',
      ref: '8.7.2',
      bookRef: 'Unit 8 · 8.7 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u8-8-7',
      passage: {
        title: 'Language box',
        html: '<p><b>Mediating – a report that mentions the listener</b></p><table '
          + 'class=\'bk\'><tr><th>To start safely</th><th>To translate a '
          + 'number</th><th>To translate a word</th></tr><tr><td>Only the <span '
          + 'class="blank"></span> parts.</td><td>It says <span '
          + 'class="blank"></span> went from <span class="blank"></span> to <span '
          + 'class="blank"></span> .</td><td>"<span class="blank"></span>" only '
          + 'means <span class="blank"></span> .</td></tr><tr><td>The first one '
          + 'is <b>good</b>: it says <span class="blank"></span> .</td><td>That '
          + 'means <span class="blank"></span> used to <span '
          + 'class="blank"></span> . Now they <span class="blank"></span> '
          + '.</td><td>Nobody is being blamed; it\'s a <span '
          + 'class="blank"></span> .</td></tr></table><p>⚠ When somebody is '
          + '<b>in</b> the document, read them a <b>good</b> part first, if there '
          + 'is one. It is not flattery: a person who is braced for criticism '
          + 'does not hear a percentage.</p><p>⚠ Turn a percentage into something '
          + 'countable: <i>nine times in a hundred → about twice</i>. Percentages '
          + 'are the commonest thing people nod at without understanding.</p><p>⚠ '
          + 'Say explicitly when nobody is being blamed. Office words — '
          + '<i>variance, discrepancy, exception</i> — all sound like accusations '
          + 'to somebody who did not grow up with them.</p><p><b>Practise:</b> '
          + 'The report says: <i>Order fulfilment improved to 96 per cent; two '
          + 'consignments were dispatched incomplete owing to a packaging '
          + 'shortfall.</i> Say it in easy English, for the '
          + 'warehouse.</p><p><b>Useful phrases:</b> Only the… parts. · The first '
          + 'one is good: it says… · "<span class="blank"></span>" only means… · '
          + 'That\'s your… , written as a number. · Nobody is being '
          + 'blamed.</p><p><b>Pronunciation – reading a number out of a text.</b> '
          + '🔊 <b>Track 8.14</b> Listen. The two numbers being compared are '
          + '<b>both</b> strong, and the voice falls on the second: <i>from '
          + '<b>nine</b> per cent to <b>two</b>.</i> Repeat the four.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Why does Abu Yasser ask about the report?',
            options: [{
              t: 'he is in it',
              ok: false,
              why: 'This is what he says first, and it is half the reason.'
            },
            {
              t: 'he cannot read the small print',
              ok: false,
              why: 'True as well - that is why he asks Nour and not somebody else.'
            },
            {
              t: 'both',
              ok: true,
              why: 'His name is in it twice, and he asks her to read it because '
                + 'the print is beyond him.'
            }],
            evidence: 'his first line, where he says two things about the paper on the board'
          },
        {
            q: 'Books closed. Listen. What does "variance" mean here?',
            options: [{
              t: 'the difference between two numbers that should be the same',
              ok: true,
              why: 'She defines it and then says nobody is being blamed - it is a '
                + 'measurement.'
            },
            {
              t: 'a mistake somebody made',
              ok: false,
              why: 'Exactly the reading she heads off, because he came in afraid '
                + 'his name was on the board twice.'
            },
            {
              t: 'the stock on the shelf',
              ok: false,
              why: 'The shelf is one of the two numbers, not the difference between them.'
            }],
            evidence: 'Nour\'s explanation in plain words'
          },
        {
            q: 'Why does Nour read him the first mention before the second?',
            options: [{
              t: 'because the first one is good news, and he came in worried',
              ok: true,
              why: '"That\'s why I read you the first one first." The order was '
                + 'chosen, not accidental.'
            },
            {
              t: 'because the first one is shorter',
              ok: false,
              why: 'Length is never mentioned - the second one is the harder '
                + 'English, not the longer.'
            },
            {
              t: 'because the second one is about somebody else',
              ok: false,
              why: 'Both are about the warehouse, and the second is his own '
                + 'morning walk in numbers.'
            }],
            evidence: 'her last line'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'own',
      ref: '8.7.2',
      bookRef: 'Unit 8 · 8.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'The report says: Order fulfilment improved to 96 per cent; two '
              + 'consignments were dispatched incomplete owing to a packaging '
              + 'shortfall. Say it in easy English, for the warehouse.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '8.7.2',
      bookRef: 'Unit 8 · 8.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does the report say about the stock card?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *report* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What does Nour say about the word "variance"?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with *Nour* in it. Play it again '
              + 'with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '8.7.3',
      bookRef: 'Unit 8 · 8.7 · Lesson A · Speaking · Practise',
      type: 'discuss',
      title: 'Practise',
      instruction: 'Work in pairs. A reads report 1 silently and tells B only the parts about B. '
  + 'B closes the book. Then swap with report 2.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Report 1 — for A</th><th>Report 2 — for '
          + 'B</th></tr><tr><td><b>WEEKLY SUMMARY, w/e 20 April.</b> Orders '
          + 'processed 23 (prior week 19). Counter revenue 1,340,000 (prior '
          + '1,180,000). Stock card revision commenced Monday; variance between '
          + 'physical and system stock reduced from 9% to 2%. One invoice '
          + 're-issued following an addressing error; no financial loss. '
          + 'Outstanding: Aleppo invoice batch, deferred.</td><td><b>WEEKLY '
          + 'SUMMARY, w/e 27 April.</b> Order fulfilment 96% (prior 91%). Two '
          + 'consignments dispatched incomplete owing to a packaging shortfall; '
          + 'both completed within 48 hours at no cost to the customer. New '
          + 'counter staff member commenced; supervision hours 11. Outstanding: '
          + 'wide wrap reorder awaiting authorisation.</td></tr></table>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Both sides: your lines, then the other person\'s. Alone, the '
              + 'engine is the other person - write what it said.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['A: Good morning. Your name, please. B: Good morning. My name is Samih '
        + 'Qassar. A: Can you spell it? B: Q, A, S, S, A, R.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '8.7.3R',
      bookRef: 'Unit 8 · 8.7 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs mediate their report for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Only the… parts.</td><td>☐ The first '
          + 'one is good:…</td><td>☐ "<span class="blank"></span>" only '
          + 'means…</td><td>☐ from… to…</td><td>☐ Nobody is being '
          + 'blamed.</td><td>☐ written as a number</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the two numbers and say what the change means in '
              + 'plain words. A speaker who reads variance between physical and '
              + 'system stock aloud has handed the problem back. Send them back '
              + 'with: say it to somebody who counts shelves',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – a report that mentions the listener.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '8.7.4',
      bookRef: 'Unit 8 · 8.7 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Your teacher gives you a short report in formal English. Read it silently. '
  + 'Then tell two colleagues the parts that are about them. Do not show them the '
  + 'paper.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Who I told</th><th>The part about '
          + 'them</th><th>The word I had to '
          + 'translate</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
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
        task: 'Your teacher gives you a short report in formal English. Read it '
          + 'silently. Then tell two colleagues the parts that are about them. Do '
          + 'not show them the paper.',
        grammar: 'Mediating – a report that mentions the listener',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (8.7) teaches: Mediating – a report that mentions the '
          + 'listener. Judge the language against THAT and against nothing the '
          + 'course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – a report that mentions the listener.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'report',
        'mentions',
        'listener',
        'somebody',
        'document',
        'good',
        'part',
        'first',
        'flattery']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – a report that mentions the listener.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'model',
      ref: '8.7.4R',
      bookRef: 'Unit 8 · 8.7 · Lesson A · Speaking · Report – mediation',
      type: 'discuss',
      title: 'Report – mediation',
      instruction: 'Tell the class about the report you mediated. This is the eighth unit of '
  + 'this book, and the mediation task comes back in every unit — so listen for '
  + 'the number that was turned into something countable.',
      questions: [{
            q: 'Write what you told the class.',
            model: 'The office-word list, continued from Unit 7: variance (the '
              + 'difference between two numbers) · revenue (money taken) · '
              + 'fulfilment (orders sent complete) · consignment (a load) · '
              + 'outstanding (still to do) · deferred (put off) · awaiting '
              + 'authorisation (somebody must say yes first) · prior week (last '
              + 'week) · re-issued (sent again) · at no cost to the customer (we '
              + 'paid)',
            minWords: 6,
            rows: 3,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class about the report you mediated. This is the eighth '
          + 'unit of this book, and the mediation task comes back in every unit — '
          + 'so listen for the number that was turned into something countable. '
          + '(The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Mediating – a report that mentions the listener',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (8.7) teaches: '
          + 'Mediating – a report that mentions the listener. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – a report that mentions the listener.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'report',
        'mentions',
        'listener',
        'somebody',
        'document',
        'good',
        'part',
        'first',
        'flattery'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – a report that mentions the listener.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '8.7.5',
      bookRef: 'Unit 8 · 8.7 · Lesson B · Writing · Read – exam practice (A2 Key Reading Part 1)',
      type: 'discuss',
      title: 'Read – exam practice (A2 Key Reading Part 1)',
      instruction: 'Read the six short workplace texts. For each one, choose A, B or C.',
      passage: {
        title: 'From the book',
        html: '<p><b>1</b> <i>Orders processed 23 (prior week 19).</i> <b>A</b> '
          + 'Fewer orders than last week. <b>B</b> Four more than last week. '
          + '<b>C</b> Nineteen orders this week.</p><p><b>2</b> <i>One invoice '
          + 're-issued following an addressing error; no financial loss.</i> '
          + '<b>A</b> Money was lost. <b>B</b> An invoice was sent again; nothing '
          + 'was lost. <b>C</b> The customer did not pay.</p><p><b>3</b> '
          + '<i>Outstanding: Aleppo invoice batch, deferred.</i> <b>A</b> The '
          + 'Aleppo invoices are finished. <b>B</b> They are still to do. '
          + '<b>C</b> They were cancelled.</p><p><b>4</b> <i>Both completed '
          + 'within 48 hours at no cost to the customer.</i> <b>A</b> The '
          + 'customer paid extra. <b>B</b> It was fixed in two days and cost the '
          + 'customer nothing. <b>C</b> It took two weeks.</p><p><b>5</b> '
          + '<i>Bassel — Tarabishi took the whole range, 1.2m. Biggest this '
          + 'year.</i> <b>A</b> The customer ordered everything. <b>B</b> The '
          + 'customer ordered the small boxes. <b>C</b> The customer '
          + 'cancelled.</p><p><b>6</b> <i>Wide wrap reorder awaiting '
          + 'authorisation.</i> <b>A</b> The wrap has been ordered. <b>B</b> '
          + 'Somebody must approve the order first. <b>C</b> The wrap has '
          + 'arrived.</p><h4>Writer\'s box</h4><p><b>A2 Key Writing Part 6 — a '
          + 'short message (25 words or more).</b> The task gives you '
          + '<b>three</b> things to write about. All three must be there, or you '
          + 'lose marks even if your English is perfect.</p><p><b>Shape:</b> '
          + 'greeting → the three points, one short sentence each → a friendly '
          + 'close and your name.</p><p>For a message about <b>something that '
          + 'happened</b>, the three points are usually: <b>what happened</b> · '
          + '<b>when</b> · <b>what you did or what you need</b>.</p><p>⚠ Count '
          + 'the three points <b>before</b> you write, and tick them off '
          + '<b>after</b>. In the past simple, check the verbs twice — this is '
          + 'the one paper where the tense itself can lose marks.</p>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Both sides: your lines, then the other person\'s. Alone, the '
              + 'engine is the other person - write what it said.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '8.7.6',
      bookRef: 'Unit 8 · 8.7 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a message to Mr Ayoub about last week. Say: <b>(1)</b> Bassel got the '
  + 'Tarabishi order for 1,200,000, <b>(2)</b> it came on Monday, <b>(3)</b> you '
  + 'need a decision on the wrap by Sunday. Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['mediating',
        'report',
        'mentions',
        'listener',
        'somebody',
        'document',
        'good',
        'part']
      },
      coach: {
        title: 'What to include',
        task: 'Write a message to Mr Ayoub about last week. Say: (1) Bassel got the '
  + 'Tarabishi order for 1,200,000, (2) it came on Monday, (3) you need a '
  + 'decision on the wrap by Sunday. Use the frame.',
        criteria: [{ t: 'A2 Key Writing Part 6 — a short message (25 words or more). The '
              + 'task gives you three things to write about. All three must be '
              + 'there, or you lose marks even if your English is perfect.' },
            { t: 'Shape: greeting → the three points, one short sentence each → a '
              + 'friendly close and your name.' },
            { t: 'For a message about something that happened, the three points '
              + 'are usually: what happened · when · what you did or what you '
              + 'need.' },
            { t: '⚠ Count the three points before you write, and tick them off '
              + 'after. In the past simple, check the verbs twice — this is the '
              + 'one paper where the tense itself can lose marks.' }]
      },
      aiCheck: {
        task: 'Write a message to Mr Ayoub about last week. Say: (1) Bassel got the '
          + 'Tarabishi order for 1,200,000, (2) it came on Monday, (3) you need a '
          + 'decision on the wrap by Sunday. Use the frame.',
        grammar: 'Mediating – a report that mentions the listener',
        must: ['A2 Key Writing Part 6 — a short message (25 words or more). The task '
          + 'gives you three things to write about. All three must be there, or '
          + 'you lose marks even if your English is perfect.',
        'Shape: greeting → the three points, one short sentence each → a '
          + 'friendly close and your name.',
        'For a message about something that happened, the three points are '
          + 'usually: what happened · when · what you did or what you need.',
        '⚠ Count the three points before you write, and tick them off after. '
          + 'In the past simple, check the verbs twice — this is the one paper '
          + 'where the tense itself can lose marks.'],
        vocab: ['mediating',
        'report',
        'mentions',
        'listener',
        'somebody',
        'document',
        'good',
        'part',
        'first',
        'flattery']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '8.7.6P',
      bookRef: 'Unit 8 · 8.7 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Count your partner\'s three points. Tick each one.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Point</th><th>In the message? ✓ / '
          + '✗</th></tr><tr><td>1 The order, with the '
          + 'figure</td><td>&nbsp;</td></tr><tr><td>2 When it '
          + 'came</td><td>&nbsp;</td></tr><tr><td>3 The decision needed, by '
          + 'Sunday</td><td>&nbsp;</td></tr><tr><td>25 words or '
          + 'more</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Count your partner\'s three points. Tick each one.',
        grammar: 'Mediating – a report that mentions the listener',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (8.7) '
          + 'teaches: Mediating – a report that mentions the listener. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        must: ['A2 Key Writing Part 6 — a short message (25 words or more). The task '
          + 'gives you three things to write about. All three must be there, or '
          + 'you lose marks even if your English is perfect.',
        'Shape: greeting → the three points, one short sentence each → a '
          + 'friendly close and your name.',
        'For a message about something that happened, the three points are '
          + 'usually: what happened · when · what you did or what you need.',
        '⚠ Count the three points before you write, and tick them off after. '
          + 'In the past simple, check the verbs twice — this is the one paper '
          + 'where the tense itself can lose marks.'],
        vocab: ['mediating',
        'report',
        'mentions',
        'listener',
        'somebody',
        'document',
        'good',
        'part',
        'first',
        'flattery'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      ref: '8.7.7',
      bookRef: 'Unit 8 · 8.7 · Lesson B · Writing · Write freely – exam practice (A2 Key '
  + 'Writing Part 6)',
      type: 'writer',
      title: 'Write freely – exam practice (A2 Key Writing Part 6)',
      kind: 'model',
      instruction: 'Something good happened to you last week. Write a message to a friend (25 '
  + 'words or more). Say: <b>(1)</b> what happened, <b>(2)</b> when, <b>(3)</b> '
  + 'one thing you want to do about it together.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      passage: {
        title: 'Homework',
        html: '<p>Write your final message. Then write the <b>reply</b> your friend '
          + 'would send, reacting to the news and asking two questions (20+ '
          + 'words).</p>'
      },
      meter: {
        label: 'words from this lesson',
        words: ['mediating',
        'report',
        'mentions',
        'listener',
        'somebody',
        'document',
        'good',
        'part']
      },
      coach: {
        title: 'What to include',
        task: 'Something good happened to you last week. Write a message to a friend (25 '
  + 'words or more). Say: (1) what happened, (2) when, (3) one thing you want to '
  + 'do about it together.',
        criteria: [{ t: 'A2 Key Writing Part 6 — a short message (25 words or more). The '
              + 'task gives you three things to write about. All three must be '
              + 'there, or you lose marks even if your English is perfect.' },
            { t: 'Shape: greeting → the three points, one short sentence each → a '
              + 'friendly close and your name.' },
            { t: 'For a message about something that happened, the three points '
              + 'are usually: what happened · when · what you did or what you '
              + 'need.' },
            { t: '⚠ Count the three points before you write, and tick them off '
              + 'after. In the past simple, check the verbs twice — this is the '
              + 'one paper where the tense itself can lose marks.' }]
      },
      aiCheck: {
        task: 'Something good happened to you last week. Write a message to a '
          + 'friend (25 words or more). Say: (1) what happened, (2) when, (3) one '
          + 'thing you want to do about it together.',
        grammar: 'Mediating – a report that mentions the listener',
        must: ['A2 Key Writing Part 6 — a short message (25 words or more). The task '
          + 'gives you three things to write about. All three must be there, or '
          + 'you lose marks even if your English is perfect.',
        'Shape: greeting → the three points, one short sentence each → a '
          + 'friendly close and your name.',
        'For a message about something that happened, the three points are '
          + 'usually: what happened · when · what you did or what you need.',
        '⚠ Count the three points before you write, and tick them off after. '
          + 'In the past simple, check the verbs twice — this is the one paper '
          + 'where the tense itself can lose marks.'],
        vocab: ['mediating',
        'report',
        'mentions',
        'listener',
        'somebody',
        'document',
        'good',
        'part',
        'first',
        'flattery']
      }
    },
    {
      id: 'c13',
      ref: '8.7.✓',
      bookRef: 'Unit 8 · 8.7 · Lesson B · Writing · Unit 8 check',
      type: 'scene',
      title: 'Unit 8 check',
      kind: 'own',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u8-8-7-b'
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '8.7.✓',
      bookRef: 'Unit 8 · 8.7 · Lesson B · Writing · Unit 8 check',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'The report says: Order fulfilment improved to 96 per cent; two '
              + 'consignments were dispatched incomplete owing to a packaging '
              + 'shortfall. Say it in easy English, for the warehouse.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
