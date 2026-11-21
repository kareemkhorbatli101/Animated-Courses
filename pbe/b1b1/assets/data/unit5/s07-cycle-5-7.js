/* Unit 5 · cycle 5.7 — Review & Mediate: what does this require of me?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE5.page('u5-s07', {
  book: { source: 'Proactive Business English · B1 Book 1', ref: 'Unit 5 · 5.7', part: '5.7',
          section: '7', lesson: 'Review & Mediate: what does this require of me?', title: 'Review & Mediate: what does this require of me?' },
  objective: 'Review & Mediate: what does this procedure require of me?',
  study: {
    minutes: 96,
    objective: 'Review & Mediate: what does this procedure require of me?',
    steps: [{
          title: 'Get ready – Unit 5 quiz',
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
          title: 'Read – exam practice (B1 Business Preliminary Reading Part 3)',
          mins: 10,
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
          title: 'Write freely',
          mins: 12,
          why: 'The same writing, without the model.',
          todo: 'Write first, check the model afterwards. Looking first turns it '
            + 'into copying.',
          alone: 'Set a timer for ten minutes and do not stop to correct anything.'
        },
        {
          title: 'Unit 5 check',
          mins: 15,
          why: 'Finding out what stuck.',
          todo: 'Do it without looking back at the unit. Then look back at whatever '
            + 'you got wrong - that is the list of what to study again.',
          alone: 'Do it cold. The looking-back is the exercise.'
        }]
  },
  worked: {
    task: 'Exam task. A procedure has been rewritten. Write to the colleague who '
      + 'has to follow part of it. 60 to 80 words.',
    weak: 'The procedure is new. Please read it and follow it carefully.',
    change: ['Tell them which steps are THEIRS. Nobody reads a whole procedure to '
          + 'find their two lines in it.',
        'Name the step that cannot be bent, and give the alternative for when '
          + 'they cannot keep it - a rule with no exception is a rule that gets '
          + 'broken quietly.'],
    better: 'Goods-in version 3 starts on 1 October. Yours are steps 2 and 3: count '
      + 'on the bay, then enter the count you made — not the quantity on the '
      + 'note. Step 3 cannot be bent; a wrong entry makes a second record nobody '
      + 'can delete. If a driver will not wait, write "received unchecked" on his '
      + 'note, count within the hour, and tell Abu Yasser, not the office.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '5.7.1',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Get ready – Unit 5 quiz',
      type: 'discuss',
      title: 'Get ready – Unit 5 quiz',
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
      ref: '5.7.2',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u5-5-7',
      passage: {
        title: 'Language box',
        html: '<p><b>Mediating – explaining a procedure to whoever has to follow '
          + 'it</b></p><table class=\'bk\'><tr><th>To orient them</th><th>To find '
          + 'the gap</th><th>To fix it</th></tr><tr><td>Of the six, two are '
          + 'yours.</td><td>And when you cannot?</td><td>That is version six, and '
          + 'it is one clause.</td></tr><tr><td>Ignore steps one, two and '
          + 'six.</td><td>It does not say who I tell.</td><td>stop the load '
          + '<b>and tell</b> …, or … if …</td></tr></table><p>⚠ <b>Tell them '
          + 'which steps are theirs and which to ignore.</b> A six-step page '
          + 'given whole to one person is a page they will read once. <i>Two of '
          + 'these are yours</i> is the sentence that makes it usable.</p><p>⚠ '
          + '<b>Then ask the question the page cannot ask itself: <i>and when you '
          + 'cannot?</i></b> Every procedure is impossible sometimes, and the '
          + 'person who has to follow it knows exactly when.</p><p>⚠ <b>The '
          + 'missing clause is almost always "and tell whom".</b> A stop '
          + 'instruction with no name attached produces a stopped thing that '
          + 'nobody knows about, which is often worse than the thing it '
          + 'prevented.</p><p>⚠ <b>The gap exists because the writer has never '
          + 'done the job.</b> ⚠ Say so without defending yourself, and let the '
          + 'person who found it put their name on the '
          + 'version.</p><p><b>Practise:</b> Explain a procedure to the person '
          + 'who has to follow it. Say which steps are theirs, ask what they do '
          + 'when they cannot, and write the missing clause.</p><p><b>Useful '
          + 'phrases:</b> Of the six, two are yours. · Ignore steps… · And when '
          + 'you cannot? · It does not say who I tell. · That is version six, and '
          + 'it is one clause.</p><p><b>Pronunciation – reading a bold step '
          + 'aloud.</b> 🔊 <b>Track 5.14</b> Listen to the two marked steps read '
          + 'aloud slowly, with the <i>until</i> clause separated. ⚠ The person '
          + 'following a procedure hears which half is the condition; a reader '
          + 'skimming the page does not. Repeat both.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Abu Yasser want to know about '
              + 'the new page?',
            options: [{
              t: 'who wrote it',
              ok: false
            },
            {
              t: 'which of it is his, and what to do when he cannot',
              ok: true
            },
            {
              t: 'the version number',
              ok: false
            }]
          },
        {
            q: 'Which of the six steps are Abu Yasser\'s?',
            options: [{
              t: 'two of the six, and both of the ones in bold',
              ok: true,
              why: 'Steps one, two and six happen in the office, and he is told to '
                + 'ignore them.'
            },
            {
              t: 'all six, since he is at the gate',
              ok: false,
              why: 'Three of them are office steps. Handing him the whole page is '
                + 'what version five is being rescued from.'
            },
            {
              t: 'steps one, two and six',
              ok: false,
              why: 'Those are precisely the ones that are not his.'
            }],
            evidence: '"both of the bold ones are yours"'
          },
        {
            q: 'What does Nour say is better than the page?',
            options: [{
              t: 'his own one-sentence version of his part',
              ok: true,
              why: 'Pick against the list, count against the order, sign by name, '
                + 'and hold it until a difference has been seen.'
            },
            {
              t: 'the two steps being in bold type',
              ok: false,
              why: 'The bold marks them; it is not what makes his sentence better '
                + 'than the page.'
            },
            {
              t: 'the six steps written in order',
              ok: false,
              why: 'The ordered six is the page. What beats it is the one sentence '
                + 'that contains only his share.'
            }],
            evidence: '"That is the whole of your part…"'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'own',
      ref: '5.7.2',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Explain a procedure to the person who has to follow it. Say '
              + 'which steps are theirs, ask what they do when they cannot, and '
              + 'write the missing clause.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '5.7.2',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does Nour tell him to ignore?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>Nour</i> in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What does he find that the page gets wrong?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with <i>find</i> in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '5.7.3',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A has written a procedure; B has to follow it and asks and '
  + 'when I cannot?. Then swap.',
      scene: 'u5-5-7-pair',
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
        head: ['Pair 1 — for A',
        'Pair 2 — for B'],
        rows: [['A has written a cash procedure: the bag goes to the bank daily. B '
            + 'works alone on Saturdays and cannot leave the counter. The missing '
            + 'clause is what happens to Saturday\'s cash — and nobody has ever '
            + 'said.',
          'A has written a complaints procedure: every complaint is logged '
            + 'the same day. B takes complaints on the telephone while serving. '
            + 'The missing clause is what counts as a complaint, and whether an '
            + 'unhappy remark is one.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '5.7.3R',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out the conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Of the six, two are yours.</td><td>☐ '
          + 'Ignore steps…</td><td>☐ And when you cannot?</td><td>☐ It does not '
          + 'say who I tell.</td><td>☐ one clause</td><td>☐ whoever wrote it has '
          + 'never done the job</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the missing clause and say whether it is about '
              + 'telling somebody. It usually is. Typical errors: it does not say '
              + 'who I tell to · and when I can not? · of the six, two is yours · '
              + 'and the content fault, which is explaining the whole procedure '
              + 'to somebody who only needs their own part',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – explaining a procedure to '
        + 'whoever has to follow it.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '5.7.4',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Your teacher gives you a procedure. Explain it to two colleagues who have to '
  + 'follow different parts of it, and collect the missing clauses.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Who I told</th><th>Which steps were '
          + 'theirs</th><th>What they asked</th><th>The missing '
          + 'clause</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
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
        task: 'Your teacher gives you a procedure. Explain it to two colleagues who '
          + 'have to follow different parts of it, and collect the missing '
          + 'clauses.',
        grammar: 'Mediating – explaining a procedure to whoever has to follow it',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (5.7) teaches: Mediating – explaining a procedure to whoever '
          + 'has to follow it. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – explaining a procedure to '
          + 'whoever has to follow it.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'explaining',
        'procedure',
        'whoever',
        'follow',
        'steps',
        'theirs',
        'ignore',
        'six-step',
        'page']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – explaining a procedure to '
        + 'whoever has to follow it.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'model',
      ref: '5.7.4R',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Report – mediation',
      type: 'discuss',
      title: 'Report – mediation',
      instruction: 'Tell the class what the page did not say. This is the fifth unit of this '
  + 'book, and the unwritten thing is the one the whole unit has been circling: a '
  + 'procedure is written by the person who understands the process and followed '
  + 'by the person who understands the day, and the gap between them is always '
  + 'the same gap — what to do when it cannot be done, and who to tell.',
      questions: [{
            q: 'Write what you told the class.',
            model: '"Of six steps, three were his and both marked ones were his. He '
              + 'asked what to do on a Thursday with two lorries and one of him, '
              + 'and the page did not say who he tells — only stop the load."',
            minWords: 6,
            rows: 3,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class what the page did not say. This is the fifth unit of '
          + 'this book, and the unwritten thing is the one the whole unit has '
          + 'been circling: a procedure is written by the person who understands '
          + 'the process and followed by the person who understands the day, and '
          + 'the gap between them is always the same gap — what to do when it '
          + 'cannot be done, and who to tell. (The dashes are blanks the learner '
          + 'fills in with their own workplace. Judge what they wrote in them, '
          + 'not the blanks.)',
        grammar: 'Mediating – explaining a procedure to whoever has to follow it',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (5.7) teaches: '
          + 'Mediating – explaining a procedure to whoever has to follow it. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – explaining a procedure to '
          + 'whoever has to follow it.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'explaining',
        'procedure',
        'whoever',
        'follow',
        'steps',
        'theirs',
        'ignore',
        'six-step',
        'page'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – explaining a procedure to '
        + 'whoever has to follow it.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '5.7.5',
      bookRef: 'Unit 5 · 5.7 · Lesson B · Writing · Read – exam practice (B1 Business '
  + 'Preliminary Reading Part 3)',
      type: 'discuss',
      title: 'Read – exam practice (B1 Business Preliminary Reading Part 3)',
      instruction: '⚠ This unit practises Part 3: matching a question to the right part of a '
  + 'text. Read the five sections of the procedure, then answer the five '
  + 'questions by choosing the section (A–E).',
      passage: {
        title: 'From the book',
        html: '<p><b>A</b> <i>An order is written on a numbered form. A telephone '
          + 'order is read back to the customer before the call '
          + 'ends.</i></p><p><b>B</b> <i>A picking list is typed from the order, '
          + 'by whoever took it, and carries the order number and the time of '
          + 'typing.</i></p><p><b>C</b> <i>The load is counted against the order, '
          + 'by hand, by one person, and the gate sheet is signed by that person, '
          + 'by name. The sheet must not be signed before the '
          + 'count.</i></p><p><b>D</b> <i>Any difference is written on the gate '
          + 'sheet by the person who counted, and the load is not released until '
          + 'the difference has been seen by the coordinator. If both marked '
          + 'steps cannot be done, the load is stopped and the coordinator is '
          + 'told.</i></p><p><b>E</b> <i>The invoice is raised from the order by '
          + 'accounts. A difference found at the gate is not carried across '
          + 'automatically; this is a known gap.</i></p><h4>Writer\'s '
          + 'box</h4><p><b>B1 Business Preliminary Writing Part 2 — business '
          + 'correspondence, 60 to 80 words.</b> Here: a note to a colleague '
          + 'explaining which part of a new procedure is theirs.</p><p>The shape: '
          + '<b>which steps are yours</b> · <b>the one that cannot be bent</b> · '
          + '<b>what to do if you cannot, and who to tell</b>.</p><p>⚠ <b>In '
          + 'eighty words, the stop clause earns its place over everything '
          + 'else.</b> A note that explains the whole procedure and omits what to '
          + 'do on a bad Thursday has spent eighty words on the easy '
          + 'part.</p><p>⚠ No version history and no explanation of why the '
          + 'procedure changed. The reader needs their own part and nothing '
          + 'else.</p>'
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
      ref: '5.7.6',
      bookRef: 'Unit 5 · 5.7 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: '<b>Exam task — Writing Part 2.</b> A procedure at your work has been '
  + 'rewritten. Write to the colleague who has to follow part of it (<b>60 to 80 '
  + 'words</b>). Say <b>which steps are theirs</b>, <b>which one cannot be '
  + 'bent</b>, and <b>what to do if they cannot, and who to tell</b>.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['mediating',
        'explaining',
        'procedure',
        'whoever',
        'follow',
        'steps',
        'theirs',
        'ignore']
      },
      coach: {
        title: 'What to include',
        task: 'Exam task — Writing Part 2. A procedure at your work has been rewritten. '
  + 'Write to the colleague who has to follow part of it (60 to 80 words). Say '
  + 'which steps are theirs, which one cannot be bent, and what to do if they '
  + 'cannot, and who to tell.',
        criteria: [{ t: 'B1 Business Preliminary Writing Part 2 — business '
              + 'correspondence, 60 to 80 words. Here: a note to a colleague '
              + 'explaining which part of a new procedure is theirs.' },
            { t: 'The shape: which steps are yours · the one that cannot be bent · '
              + 'what to do if you cannot, and who to tell.' },
            { t: '⚠ In eighty words, the stop clause earns its place over '
              + 'everything else. A note that explains the whole procedure and '
              + 'omits what to do on a bad Thursday has spent eighty words on the '
              + 'easy part.' },
            { t: '⚠ No version history and no explanation of why the procedure '
              + 'changed. The reader needs their own part and nothing else.' }]
      },
      aiCheck: {
        task: 'Exam task — Writing Part 2. A procedure at your work has been '
          + 'rewritten. Write to the colleague who has to follow part of it (60 '
          + 'to 80 words). Say which steps are theirs, which one cannot be bent, '
          + 'and what to do if they cannot, and who to tell.',
        grammar: 'Mediating – explaining a procedure to whoever has to follow it',
        must: ['B1 Business Preliminary Writing Part 2 — business correspondence, 60 '
          + 'to 80 words. Here: a note to a colleague explaining which part of a '
          + 'new procedure is theirs.',
        'The shape: which steps are yours · the one that cannot be bent · '
          + 'what to do if you cannot, and who to tell.',
        '⚠ In eighty words, the stop clause earns its place over everything '
          + 'else. A note that explains the whole procedure and omits what to do '
          + 'on a bad Thursday has spent eighty words on the easy part.',
        '⚠ No version history and no explanation of why the procedure '
          + 'changed. The reader needs their own part and nothing else.'],
        vocab: ['mediating',
        'explaining',
        'procedure',
        'whoever',
        'follow',
        'steps',
        'theirs',
        'ignore',
        'six-step',
        'page']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '5.7.6P',
      bookRef: 'Unit 5 · 5.7 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Count the three points and the words. Tick ✓ or cross ✗, and '
  + 'name the criterion each time.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>Which steps are theirs, and which to '
          + 'ignore</td><td>&nbsp;</td></tr><tr><td>The one that cannot be bent, '
          + 'with why</td><td>&nbsp;</td></tr><tr><td>What to do if they cannot, '
          + '<b>and who to tell</b></td><td>&nbsp;</td></tr><tr><td>60 to 80 '
          + 'words — count them</td><td>&nbsp;</td></tr></table>'
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
        task: 'Swap books. Count the three points and the words. Tick ✓ or cross ✗, '
          + 'and name the criterion each time.',
        grammar: 'Mediating – explaining a procedure to whoever has to follow it',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (5.7) '
          + 'teaches: Mediating – explaining a procedure to whoever has to follow '
          + 'it. Judge the language against THAT and against nothing the course '
          + 'has not taught yet.',
        must: ['B1 Business Preliminary Writing Part 2 — business correspondence, 60 '
          + 'to 80 words. Here: a note to a colleague explaining which part of a '
          + 'new procedure is theirs.',
        'The shape: which steps are yours · the one that cannot be bent · '
          + 'what to do if you cannot, and who to tell.',
        '⚠ In eighty words, the stop clause earns its place over everything '
          + 'else. A note that explains the whole procedure and omits what to do '
          + 'on a bad Thursday has spent eighty words on the easy part.',
        '⚠ No version history and no explanation of why the procedure '
          + 'changed. The reader needs their own part and nothing else.'],
        vocab: ['mediating',
        'explaining',
        'procedure',
        'whoever',
        'follow',
        'steps',
        'theirs',
        'ignore',
        'six-step',
        'page'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      ref: '5.7.7',
      bookRef: 'Unit 5 · 5.7 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write one of your own procedures in full (<b>100 to 140 words</b>): six '
  + 'passive steps, the two that are fixed marked with <i>not … until</i>, one '
  + 'named role, a known gap, and what to do when it cannot be done.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then give one of your procedures to the '
          + 'person who has to follow it and ask them what to do when they '
          + 'cannot. Write down the clause they produce (50+ words).</p>'
      },
      meter: {
        label: 'words from this lesson',
        words: ['mediating',
        'explaining',
        'procedure',
        'whoever',
        'follow',
        'steps',
        'theirs',
        'ignore']
      },
      coach: {
        title: 'What to include',
        task: 'Write one of your own procedures in full (100 to 140 words): six passive '
  + 'steps, the two that are fixed marked with not … until, one named role, a '
  + 'known gap, and what to do when it cannot be done.',
        criteria: [{ t: 'B1 Business Preliminary Writing Part 2 — business '
              + 'correspondence, 60 to 80 words. Here: a note to a colleague '
              + 'explaining which part of a new procedure is theirs.' },
            { t: 'The shape: which steps are yours · the one that cannot be bent · '
              + 'what to do if you cannot, and who to tell.' },
            { t: '⚠ In eighty words, the stop clause earns its place over '
              + 'everything else. A note that explains the whole procedure and '
              + 'omits what to do on a bad Thursday has spent eighty words on the '
              + 'easy part.' },
            { t: '⚠ No version history and no explanation of why the procedure '
              + 'changed. The reader needs their own part and nothing else.' }]
      },
      aiCheck: {
        task: 'Write one of your own procedures in full (100 to 140 words): six '
          + 'passive steps, the two that are fixed marked with not … until, one '
          + 'named role, a known gap, and what to do when it cannot be done.',
        grammar: 'Mediating – explaining a procedure to whoever has to follow it',
        must: ['B1 Business Preliminary Writing Part 2 — business correspondence, 60 '
          + 'to 80 words. Here: a note to a colleague explaining which part of a '
          + 'new procedure is theirs.',
        'The shape: which steps are yours · the one that cannot be bent · '
          + 'what to do if you cannot, and who to tell.',
        '⚠ In eighty words, the stop clause earns its place over everything '
          + 'else. A note that explains the whole procedure and omits what to do '
          + 'on a bad Thursday has spent eighty words on the easy part.',
        '⚠ No version history and no explanation of why the procedure '
          + 'changed. The reader needs their own part and nothing else.'],
        vocab: ['mediating',
        'explaining',
        'procedure',
        'whoever',
        'follow',
        'steps',
        'theirs',
        'ignore',
        'six-step',
        'page']
      }
    },
    {
      id: 'c13',
      ref: '5.7.✓',
      bookRef: 'Unit 5 · 5.7 · Lesson B · Writing · Unit 5 check',
      type: 'scene',
      title: 'Unit 5 check',
      kind: 'own',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u5-5-7-b'
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '5.7.✓',
      bookRef: 'Unit 5 · 5.7 · Lesson B · Writing · Unit 5 check',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Explain a procedure to the person who has to follow it. Say '
              + 'which steps are theirs, ask what they do when they cannot, and '
              + 'write the missing clause.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
