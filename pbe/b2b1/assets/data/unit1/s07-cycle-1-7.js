/* Unit 1 · cycle 1.7 — Review & Mediate: who has already decided, and who only thinks they have.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE7.page('u1-s07', {
  book: { source: 'Proactive Business English · B2 Book 1', ref: 'Unit 1 · 1.7', part: '1.7',
          section: '7', lesson: 'Review & Mediate: who has already decided, and who only thinks they have', title: 'Review & Mediate: who has already decided, and who only thinks they have' },
  objective: 'Review & Mediate: who has already decided, and who only thinks they have',
  study: {
    minutes: 96,
    objective: 'Review & Mediate: who has already decided, and who only thinks they have',
    steps: [{
          title: 'Get ready – Unit 1 quiz',
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
          title: 'Read – exam practice (B2 Business Vantage Reading Part 1)',
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
          title: 'Unit 1 check',
          mins: 15,
          why: 'Finding out what stuck.',
          todo: 'Do it without looking back at the unit. Then look back at whatever '
            + 'you got wrong - that is the list of what to study again.',
          alone: 'Do it cold. The looking-back is the exercise.'
        }]
  },
  worked: {
    task: 'Mediate: two people each believe they have already decided the same '
      + 'thing. Write the four lines that settle who has.',
    weak: 'There seems to have been a misunderstanding about who was going to '
      + 'decide this, and I think we should all sit down and clarify it.',
    change: ['Drop the meeting. The question is a matter of record and can be '
          + 'answered from the file today.',
        'Write the authority and the date on each side, then say plainly '
          + 'which one is the decision and which was an inclination said out '
          + 'loud.'],
    better: 'Mr Ayoub minuted the change on the 11th and signed it; that is the '
      + 'decision. Bassel\'s note of the 9th recommends the same thing and is not '
      + 'a decision - it says <i>recommending</i>, and he is right that nobody '
      + 'told him the 11th had happened. Nothing needs reopening; the 9th note '
      + 'should be filed behind the 11th minute.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '1.7.1',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Get ready – Unit 1 quiz',
      type: 'discuss',
      title: 'Get ready – Unit 1 quiz',
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
      ref: '1.7.2',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-7',
      passage: {
        title: 'Language box',
        html: '<p><b>Mediating – explaining a decision paper to the people it '
          + 'affects</b></p><table class=\'bk\'><tr><th>To correct the '
          + 'misreading</th><th>To sort the file for them</th><th>To stop the '
          + 'rumour</th></tr><tr><td>⚠ <i>Nothing has been decided.</i></td><td>⚠ '
          + '<i>Settled: … Closed: … Not ours: …</i></td><td>⚠ <i>The only open '
          + 'item is …</i></td></tr><tr><td>⚠ <i>The word is '
          + '<b>recommending</b>.</i></td><td><i>and it was closed on the '
          + '11th</i></td><td>⚠ <i>and it is his, and he has not taken '
          + 'it</i></td></tr><tr><td><i>A recommendation is a thing one person '
          + 'says to another who can say no.</i></td><td><i>the clause is a legal '
          + 'question</i></td><td>⚠ <i>I have written that I will carry it out '
          + 'either way.</i></td></tr></table><p>⚠ <b>An inclination said out '
          + 'loud is not a decision, and it travels faster than a paper.</b> ⚠ '
          + '<b>A thing said in a yard travels in a morning; a thing on paper '
          + 'waits for a reader</b> — ⚠ <b>and that asymmetry is not fixable by '
          + 'writing better.</b> <b>It is fixable by telling people, out loud, in '
          + 'the yard.</b></p><p>⚠ <b>Sort the file for them in four words before '
          + 'you give them any detail</b>: <i>settled · closed · not ours · '
          + 'open.</i> <b>A colleague who has the four categories stops asking '
          + 'you the same question every morning.</b></p><p>⚠ <b>Name who owns '
          + 'the open item, and say whether they have taken it.</b> ⚠ <i>It is '
          + 'his, and he has not taken it.</i> <b>Most office rumours are an open '
          + 'item with no named owner.</b></p><p>⚠ <b>And repeat the <i>overruled '
          + 'on</i> line to them, not only to your reader.</b> ⚠ <b>A department '
          + 'that knows you will carry out the opposite of your own '
          + 'recommendation without sulking stops treating the question as a '
          + 'fight</b> — ⚠ <b>and that second half is the half that stops a '
          + 'rumour.</b></p><p><b>Practise:</b> A colleague thinks something is '
          + 'settled. Correct the reading, sort the file in four words, name the '
          + 'owner of the open item, and say what you will do if you '
          + 'lose.</p><p><b>Useful phrases:</b> nothing has been decided · the '
          + 'word is <i>recommending</i> · an inclination said out loud · '
          + 'settled, closed, not ours, open · it is his, and he has not taken it '
          + '· either way, without complaining</p><p><b>Pronunciation – reading a '
          + 'paper aloud for a colleague.</b> 🔊 <b>Track 1.14</b> Listen to the '
          + 'four categories read for somebody who has to repeat them: ⚠ <b>each '
          + 'one a short phrase, a pause, then the item.</b> <b>Read as '
          + 'continuous prose they are unrepeatable</b>, and a colleague who '
          + 'cannot repeat them will invent a fifth. Repeat all four.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What has Lina misread in the paper?',
            options: [{
              t: 'the figures',
              ok: false
            },
            {
              t: 'she thinks the decision has been taken',
              ok: true
            },
            {
              t: 'the date',
              ok: false
            }]
          },
        {
            q: 'Lina says Mr Ayoub has decided. What does Nour call what he said '
              + 'in the yard?',
            options: [{
              t: 'an inclination, said out loud, before he had read anything',
              ok: true,
              why: '“That is not a decision. That is an inclination, said out '
                + 'loud, before he had read anything.”'
            },
            {
              t: 'a recommendation he can be overruled on',
              ok: false,
              why: 'A recommendation is what NOUR has written. His remark was '
                + 'neither written nor a recommendation.'
            },
            {
              t: 'a closed point that cannot be reopened',
              ok: false,
              why: 'The closed point in this unit is Ms Tannous being told on the '
                + '11th. The three-year question is the one thing still open.'
            }],
            evidence: 'her reply when Lina reports the Tuesday remark'
          },
        {
            q: 'Nour gives Lina four things to say. Which half of the last one '
              + 'does she call the half that stops a rumour?',
            options: [{
              t: 'that she will pack eleven hundred a month without complaining '
                + 'if he decides the other way',
              ok: true,
              why: '“The second half is the half that stops a rumour.” Her '
                + 'recommendation against it is the first half, and on its own it '
                + 'feeds the packing room.'
            },
            {
              t: 'that she has written against taking the three years',
              ok: false,
              why: 'That is the first half - true, and it is the part that started '
                + 'the rumour rather than the part that stops it.'
            },
            {
              t: 'that the clause is a legal question and not theirs',
              ok: false,
              why: 'That is the third of the four things, and it is about the '
                + 'clause rather than about what she thinks.'
            }],
            evidence: 'her final answer, about what to say if they ask what she thinks'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'own',
      ref: '1.7.2',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'A colleague thinks something is settled. Correct the reading, '
              + 'sort the file in four words, name the owner of the open item, '
              + 'and say what you will do if you lose.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '1.7.2',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does she point to as evidence?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>evidence</i> in '
              + 'it. Play it again with the subtitles on.'
          },
      {
            q: 'What does Nour say the paper actually asks for?',
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
      ref: '1.7.3',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A thinks something is settled; B corrects the reading, sorts '
  + 'the file and names the owner. Then swap.',
      scene: 'u1-1-7-pair',
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
        rows: [['A has read <i>I am recommending against it</i> as a decision and '
            + 'has told the packing room. ⚠ <b>B: nothing has been decided, the '
            + 'word is <i>recommending</i>, and the open item is Mr Ayoub\'s and '
            + 'he has not taken it.</b> ⚠ <b>Then B adds the line that stops the '
            + 'rumour: I will pack eleven hundred a month either way.</b>',
          'A believes a thing is open and it was closed six weeks ago. ⚠ B\'s '
            + 'job is to give the date and the closer: ⚠ <b>it was closed on the '
            + '11th, and it was closed by the person who told Ms Tannous the day '
            + 'the letter came.</b> ⚠ <b>Then ask A where they heard it was '
            + 'open</b> — ⚠ <b>and expect the answer to be somebody repeating '
            + 'something said in a yard.</b>']]
      }
    },
    {
      id: 'c6',
      kind: 'own',
      ref: '1.7.3R',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out the conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ nothing has been decided</td><td>☐ the '
          + 'word is recommending</td><td>☐ an inclination said out '
          + 'loud</td><td>☐ settled · closed · not ours · open</td><td>☐ it is '
          + 'his, and he has not taken it</td><td>☐ either way, without '
          + 'complaining</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – explaining a decision paper '
        + 'to the people it affects.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '1.7.4',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Your teacher gives you a decision paper and the covering note. Read both '
  + 'silently. Then explain them to two colleagues: one who thinks the decision '
  + 'has been taken, and one who thinks nothing is happening at all.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Who I told</th><th>What they thought had '
          + 'happened</th><th>The four categories, as I gave them</th><th>What '
          + 'they asked '
          + 'next</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
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
        task: 'Your teacher gives you a decision paper and the covering note. Read '
          + 'both silently. Then explain them to two colleagues: one who thinks '
          + 'the decision has been taken, and one who thinks nothing is happening '
          + 'at all.',
        grammar: 'Mediating – explaining a decision paper to the people it affects',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (1.7) teaches: Mediating – explaining a decision paper to the '
          + 'people it affects. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – explaining a decision paper '
          + 'to the people it affects.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'explaining',
        'decision',
        'paper',
        'people',
        'affects',
        'inclination',
        'loud',
        'travels',
        'faster']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – explaining a decision paper '
        + 'to the people it affects.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '1.7.4R',
      bookRef: 'Unit 1 · 1.7 · Lesson A · Speaking · Report – mediation',
      type: 'discuss',
      title: 'Report – mediation',
      instruction: 'Tell the class about the paper. This is the first unit of this book, and the '
  + 'unwritten thing is the one the whole unit has been circling: ⚠ a decision '
  + 'has an owner and a date, and an inclination has neither — but the '
  + 'inclination is said out loud in a yard and the decision waits on a page, so '
  + 'the building always believes the inclination, and the only remedy is a '
  + 'person willing to stand in the yard and say the four categories out loud.',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class about the paper. This is the first unit of this book, '
          + 'and the unwritten thing is the one the whole unit has been circling: '
          + '⚠ a decision has an owner and a date, and an inclination has neither '
          + '— but the inclination is said out loud in a yard and the decision '
          + 'waits on a page, so the building always believes the inclination, '
          + 'and the only remedy is a person willing to stand in the yard and say '
          + 'the four categories out loud. (The dashes are blanks the learner '
          + 'fills in with their own workplace. Judge what they wrote in them, '
          + 'not the blanks.)',
        grammar: 'Mediating – explaining a decision paper to the people it affects',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (1.7) teaches: '
          + 'Mediating – explaining a decision paper to the people it affects. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Mediating – explaining a decision paper '
          + 'to the people it affects.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['mediating',
        'explaining',
        'decision',
        'paper',
        'people',
        'affects',
        'inclination',
        'loud',
        'travels',
        'faster'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Mediating – explaining a decision paper '
        + 'to the people it affects.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '1.7.5',
      bookRef: 'Unit 1 · 1.7 · Lesson B · Writing · Read – exam practice (B2 Business '
  + 'Vantage Reading Part 1)',
      type: 'discuss',
      title: 'Read – exam practice (B2 Business Vantage Reading Part 1)',
      instruction: '⚠ About the exam practice in this book. B2 Business Vantage has five Reading '
  + 'parts, and each unit of this book practises one of them in rotation, so that '
  + 'by Unit 12 you have met every part at least twice. ⚠ This unit is Part 1: '
  + 'matching. Read the five short texts A–E, then decide which text each '
  + 'statement 1–7 refers to. A text may be used more than once.',
      passage: {
        title: 'From the book',
        html: '<p><b>A</b> <i>From Monday the night marking is done by the two '
          + 'markers appointed on 1 October. Nothing else about the night shift '
          + 'changes. Any question about a count goes to the warehouse before it '
          + 'comes to this office.</i></p><p><b>B</b> <i>Mr Dallal\'s proposal is '
          + 'attached. He wants an answer by 26 January. I am recommending '
          + 'against it in its present form. What I need from you this week is '
          + 'twenty minutes, not a decision.</i></p><p><b>C</b> <i>For the '
          + 'avoidance of doubt: the arrangement with Ms Tannous runs twelve '
          + 'months from 1 May. The terms were agreed on 28 April. Nothing in the '
          + 'Beirut correspondence alters either date.</i></p><p><b>D</b> <i>I am '
          + 'answerable for every figure in paragraph 2, which I counted myself '
          + 'over four nights in January. I am not answerable for the damages '
          + 'clause at paragraph 11, which is a legal question and on which '
          + 'advice has been sought.</i></p><p><b>E</b> <i>If the mill can supply '
          + 'four times the board we currently take, paragraph 7 is wrong and my '
          + 'recommendation changes. I have not asked them, because asking would '
          + 'tell them what we are considering.</i></p><h4>Writer\'s '
          + 'box</h4><p><b>B2 Business Vantage Writing Part 1 — an internal '
          + 'communication, 40 to 50 words, 10 marks.</b> A note, memo, message '
          + 'or email to a colleague, with <b>three content points</b>, all three '
          + 'present. ⚠ <b>Part 1 is worth half the marks of Part 2 and takes a '
          + 'third of the time: do not spend a sentence on courtesy.</b></p><p>⚠ '
          + '<b>For a decision message the three points are nearly always: what '
          + 'is being decided · who is deciding it · and what the reader should '
          + 'do in the meantime.</b></p><p>⚠ <b>In forty-five words you cannot '
          + 'sort a whole file, so sort the one item the reader has wrong.</b> '
          + '<b>That is the examination, and it is also the better '
          + 'message.</b></p><p>⚠ <b>Begin with the state, not with a '
          + 'greeting.</b> ⚠ <i>Nothing has been decided about the Beirut '
          + 'contract</i> <b>uses seven words and does the main job of the '
          + 'message.</b></p><p>⚠ <b>And name the owner.</b> <b>A forty-five-word '
          + 'message that says a thing is open without saying whose it is will '
          + 'produce four conversations tomorrow</b>, which is the thing it was '
          + 'written to prevent.</p>'
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
      ref: '1.7.6',
      bookRef: 'Unit 1 · 1.7 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: '<b>Exam task — Writing Part 1.</b> A proposal is being considered at your '
  + 'workplace and your colleagues believe it has already been accepted. Write an '
  + 'internal message to your department (<b>40 to 50 words</b>). Say <b>what is '
  + 'being decided</b>, <b>who is deciding it</b>, and <b>what they should do in '
  + 'the meantime</b>.',
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
        'decision',
        'paper',
        'people',
        'affects',
        'inclination',
        'loud']
      },
      coach: {
        title: 'What to include',
        task: 'Exam task — Writing Part 1. A proposal is being considered at your workplace '
  + 'and your colleagues believe it has already been accepted. Write an internal '
  + 'message to your department (40 to 50 words). Say what is being decided, who '
  + 'is deciding it, and what they should do in the meantime.',
        criteria: [{ t: 'B2 Business Vantage Writing Part 1 — an internal communication, '
              + '40 to 50 words, 10 marks. A note, memo, message or email to a '
              + 'colleague, with three content points, all three present. ⚠ Part '
              + '1 is worth half the marks of Part 2 and takes a third of the '
              + 'time: do not spend a sentence on courtesy.' },
            { t: '⚠ For a decision message the three points are nearly always: '
              + 'what is being decided · who is deciding it · and what the reader '
              + 'should do in the meantime.' },
            { t: '⚠ In forty-five words you cannot sort a whole file, so sort the '
              + 'one item the reader has wrong. That is the examination, and it '
              + 'is also the better message.' },
            { t: '⚠ Begin with the state, not with a greeting. ⚠ Nothing has been '
              + 'decided about the Beirut contract uses seven words and does the '
              + 'main job of the message.' },
            { t: '⚠ And name the owner. A forty-five-word message that says a '
              + 'thing is open without saying whose it is will produce four '
              + 'conversations tomorrow, which is the thing it was written to '
              + 'prevent.' }]
      },
      aiCheck: {
        task: 'Exam task — Writing Part 1. A proposal is being considered at your '
          + 'workplace and your colleagues believe it has already been accepted. '
          + 'Write an internal message to your department (40 to 50 words). Say '
          + 'what is being decided, who is deciding it, and what they should do '
          + 'in the meantime.',
        grammar: 'Mediating – explaining a decision paper to the people it affects',
        must: ['B2 Business Vantage Writing Part 1 — an internal communication, 40 '
          + 'to 50 words, 10 marks. A note, memo, message or email to a '
          + 'colleague, with three content points, all three present. ⚠ Part 1 is '
          + 'worth half the marks of Part 2 and takes a third of the time: do not '
          + 'spend a sentence on courtesy.',
        '⚠ For a decision message the three points are nearly always: what is '
          + 'being decided · who is deciding it · and what the reader should do '
          + 'in the meantime.',
        '⚠ In forty-five words you cannot sort a whole file, so sort the one '
          + 'item the reader has wrong. That is the examination, and it is also '
          + 'the better message.',
        '⚠ Begin with the state, not with a greeting. ⚠ Nothing has been '
          + 'decided about the Beirut contract uses seven words and does the main '
          + 'job of the message.'],
        vocab: ['mediating',
        'explaining',
        'decision',
        'paper',
        'people',
        'affects',
        'inclination',
        'loud',
        'travels',
        'faster']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '1.7.6P',
      bookRef: 'Unit 1 · 1.7 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. ⚠ Copy the line you are marking, then name the criterion and say '
  + 'what you found. Count the three points and the words.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>The state in the first line, not a '
          + 'greeting</td><td>&nbsp;</td></tr><tr><td>What is being '
          + 'decided</td><td>&nbsp;</td></tr><tr><td>Who is deciding it, by name '
          + 'or role</td><td>&nbsp;</td></tr><tr><td>What the reader should do in '
          + 'the meantime</td><td>&nbsp;</td></tr><tr><td>40 to 50 words — count '
          + 'them</td><td>&nbsp;</td></tr></table>'
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
        task: 'Swap books. ⚠ Copy the line you are marking, then name the criterion '
          + 'and say what you found. Count the three points and the words.',
        grammar: 'Mediating – explaining a decision paper to the people it affects',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (1.7) '
          + 'teaches: Mediating – explaining a decision paper to the people it '
          + 'affects. Judge the language against THAT and against nothing the '
          + 'course has not taught yet.',
        must: ['B2 Business Vantage Writing Part 1 — an internal communication, 40 '
          + 'to 50 words, 10 marks. A note, memo, message or email to a '
          + 'colleague, with three content points, all three present. ⚠ Part 1 is '
          + 'worth half the marks of Part 2 and takes a third of the time: do not '
          + 'spend a sentence on courtesy.',
        '⚠ For a decision message the three points are nearly always: what is '
          + 'being decided · who is deciding it · and what the reader should do '
          + 'in the meantime.',
        '⚠ In forty-five words you cannot sort a whole file, so sort the one '
          + 'item the reader has wrong. That is the examination, and it is also '
          + 'the better message.',
        '⚠ Begin with the state, not with a greeting. ⚠ Nothing has been '
          + 'decided about the Beirut contract uses seven words and does the main '
          + 'job of the message.'],
        vocab: ['mediating',
        'explaining',
        'decision',
        'paper',
        'people',
        'affects',
        'inclination',
        'loud',
        'travels',
        'faster'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      ref: '1.7.7',
      bookRef: 'Unit 1 · 1.7 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about something at your work that the building believes is settled and '
  + 'is not (<b>200 to 240 words</b>). Say what was actually said and by whom, '
  + 'where it was said, how it travelled, what is in fact settled, closed, not '
  + 'yours and open, who owns the open item, and what you would say if you had to '
  + 'stand in the yard and say it out loud.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then take the four categories to the '
          + 'person at your work who repeats things fastest, say them out loud, '
          + 'and write down what they say back (80 words or more).</p>'
      },
      meter: {
        label: 'words from this lesson',
        words: ['mediating',
        'explaining',
        'decision',
        'paper',
        'people',
        'affects',
        'inclination',
        'loud']
      },
      coach: {
        title: 'What to include',
        task: 'Write about something at your work that the building believes is settled and '
  + 'is not (200 to 240 words). Say what was actually said and by whom, where it '
  + 'was said, how it travelled, what is in fact settled, closed, not yours and '
  + 'open, who owns the open item, and what you would say if you had to stand in '
  + 'the yard and say it out loud.',
        criteria: [{ t: 'B2 Business Vantage Writing Part 1 — an internal communication, '
              + '40 to 50 words, 10 marks. A note, memo, message or email to a '
              + 'colleague, with three content points, all three present. ⚠ Part '
              + '1 is worth half the marks of Part 2 and takes a third of the '
              + 'time: do not spend a sentence on courtesy.' },
            { t: '⚠ For a decision message the three points are nearly always: '
              + 'what is being decided · who is deciding it · and what the reader '
              + 'should do in the meantime.' },
            { t: '⚠ In forty-five words you cannot sort a whole file, so sort the '
              + 'one item the reader has wrong. That is the examination, and it '
              + 'is also the better message.' },
            { t: '⚠ Begin with the state, not with a greeting. ⚠ Nothing has been '
              + 'decided about the Beirut contract uses seven words and does the '
              + 'main job of the message.' },
            { t: '⚠ And name the owner. A forty-five-word message that says a '
              + 'thing is open without saying whose it is will produce four '
              + 'conversations tomorrow, which is the thing it was written to '
              + 'prevent.' }]
      },
      aiCheck: {
        task: 'Write about something at your work that the building believes is '
          + 'settled and is not (200 to 240 words). Say what was actually said '
          + 'and by whom, where it was said, how it travelled, what is in fact '
          + 'settled, closed, not yours and open, who owns the open item, and '
          + 'what you would say if you had to stand in the yard and say it out '
          + 'loud.',
        grammar: 'Mediating – explaining a decision paper to the people it affects',
        must: ['B2 Business Vantage Writing Part 1 — an internal communication, 40 '
          + 'to 50 words, 10 marks. A note, memo, message or email to a '
          + 'colleague, with three content points, all three present. ⚠ Part 1 is '
          + 'worth half the marks of Part 2 and takes a third of the time: do not '
          + 'spend a sentence on courtesy.',
        '⚠ For a decision message the three points are nearly always: what is '
          + 'being decided · who is deciding it · and what the reader should do '
          + 'in the meantime.',
        '⚠ In forty-five words you cannot sort a whole file, so sort the one '
          + 'item the reader has wrong. That is the examination, and it is also '
          + 'the better message.',
        '⚠ Begin with the state, not with a greeting. ⚠ Nothing has been '
          + 'decided about the Beirut contract uses seven words and does the main '
          + 'job of the message.'],
        vocab: ['mediating',
        'explaining',
        'decision',
        'paper',
        'people',
        'affects',
        'inclination',
        'loud',
        'travels',
        'faster']
      }
    },
    {
      id: 'c13',
      ref: '1.7.✓',
      bookRef: 'Unit 1 · 1.7 · Lesson B · Writing · Unit 1 check',
      type: 'scene',
      title: 'Unit 1 check',
      kind: 'own',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-7-b'
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '1.7.✓',
      bookRef: 'Unit 1 · 1.7 · Lesson B · Writing · Unit 1 check',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'A colleague thinks something is settled. Correct the reading, '
              + 'sort the file in four words, name the owner of the open item, '
              + 'and say what you will do if you lose.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
