/* Unit 1 · cycle 1.6 — Reading a brief somebody wrote about you.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE7.page('u1-s06', {
  book: { source: 'Proactive Business English · B2 Book 1', ref: 'Unit 1 · 1.6', part: '1.6',
          section: '6', lesson: 'Reading a brief somebody wrote about you', title: 'Reading a brief somebody wrote about you' },
  objective: 'read a brief somebody else wrote about your own department',
  study: {
    minutes: 90,
    objective: 'read a brief somebody else wrote about your own department',
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
    task: 'Somebody has written a brief about your own department. Write four lines in reply.',
    weak: 'The brief contains a number of inaccuracies and gives a misleading '
      + 'impression of the department\'s performance.',
    change: ['Take the adjectives out and quote the sentence. <i>Misleading</i> is '
          + 'an argument about the author; a quotation is an argument about a '
          + 'line.',
        'Separate what is wrong from what is right but incomplete. Most '
          + 'unfair briefs are made of accurate sentences.'],
    better: 'Two sentences in the brief are wrong on the file. Paragraph 4 says the '
      + 'returns were late in every quarter; three of four were inside ten days '
      + 'and I can show the receipts. Paragraph 7 is accurate and, on its own, '
      + 'reads as a pattern: that was one month, and the cause has gone.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '1.6.1',
      bookRef: 'Unit 1 · 1.6 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Have you ever read something written about your own work by '
              + 'somebody outside it? Say what it got wrong.',
            minWords: 6,
            rows: 2,
            hint: 'Yes or no first - then the line that makes it so. Your own '
              + 'workplace, not the book\'s. Say it out loud once before you '
              + 'write it - a sentence or two is enough.'
          },
      {
            q: 'Which layer is which? a small workshop in Mezzeh · (says) it is '
              + 'small · (implies) it cannot refuse · (assumes) it has no other '
              + 'buyer',
            model: 'says = it is small · implies = it cannot refuse · assumes = it '
              + 'has no other buyer',
            minWords: 4,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '1.6.2',
      bookRef: 'Unit 1 · 1.6 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-6',
      passage: {
        title: 'Language box',
        html: '<p><b>Three layers of a sentence about you</b></p><table '
          + 'class=\'bk\'><tr><th>Layer</th><th>Question</th><th>In the nine '
          + 'words</th></tr><tr><td>⚠ <b>says</b></td><td><b>what is '
          + 'stated?</b></td><td>⚠ <b>small · in Mezzeh · limited export '
          + 'experience</b></td></tr><tr><td>⚠ <b>implies</b></td><td><b>what '
          + 'follows, unstated?</b></td><td>not in a position to negotiate; the '
          + 'offer is generous</td></tr><tr><td>⚠ <b>assumes</b></td><td>⚠ '
          + '<b>what must be true for it to work?</b></td><td>⚠ <b>that we have '
          + 'no other buyer</b> — <b>and that is '
          + 'false</b></td></tr><tr><td><b>then</b></td><td>⚠ <b>which layer is '
          + 'actually wrong?</b></td><td>two of the three stated facts are '
          + 'true</td></tr></table><p>⚠ <b>Separate the layers before you answer '
          + 'any of it.</b> <b>Most of the heat in reading a brief about yourself '
          + 'comes from answering the implication as though it were the '
          + 'statement.</b></p><p>⚠ <b>The assumption is where the mistakes '
          + 'live.</b> ⚠ <i>That we have no other buyer.</i> <b>A stated fact can '
          + 'be checked; an implication is arguable; an assumption is usually '
          + 'unexamined, and that is where the other side is actually '
          + 'wrong.</b></p><p>⚠ <b>A brief written by the person you are '
          + 'negotiating with is worth money.</b> ⚠ <b>Nine words telling you '
          + 'what he believes about you.</b> ⚠ <b>You would have paid for '
          + 'that.</b></p><p>⚠ <b>Correct it to your own side, once, with a '
          + 'figure. Not to him.</b> ⚠ <b>A man who thinks you are inexperienced '
          + 'will make an offer that shows what he thinks — let him make '
          + 'it.</b></p><p>⚠ <b>And accept the true part.</b> ⚠ <i>Small is true '
          + 'and it is not an insult</i>, <b>and a year spent proving otherwise '
          + 'is a year.</b></p><p><b>Practise:</b> Take a sentence somebody has '
          + 'written about your work. Say what it states, implies and assumes, '
          + 'and say which layer is wrong.</p><p><b>Useful phrases:</b> separate '
          + 'the layers · what does it say · imply · assume · the assumption is '
          + 'where the mistakes live · let him make it · small is true and it is '
          + 'not an insult</p><p><b>Pronunciation – an unflattering line read '
          + 'without heat.</b> 🔊 <b>Track 1.12</b> Listen to two speakers read '
          + '<i>a small family workshop with limited export experience</i>. ⚠ '
          + '<b>One reads it like a line of a document. The other presses on '
          + '<i>limited</i>.</b> <b>The second has started arguing</b>, and will '
          + 'answer the implication instead of the assumption. Read it flat, four '
          + 'times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Bassel say is the useful thing '
              + 'about an unflattering brief?',
            options: [{
              t: 'nothing',
              ok: false
            },
            {
              t: 'it tells you what the other side believes about you',
              ok: true
            },
            {
              t: 'it is usually right',
              ok: false
            }]
          },
        {
            q: 'Of the three layers Nour separates in Mr Dallal\'s nine words, '
              + 'which one does she call the only actual mistake?',
            options: [{
              t: 'that they have no other buyer',
              ok: true,
              why: '“That we have no other buyer. Which is the only one of the '
                + 'three that is actually a mistake” - they have Ms Tannous, a '
                + 'price list and a plater.'
            },
            {
              t: 'that they are new to export',
              ok: false,
              why: 'That is what the sentence SAYS, and it is wrong on the figures '
                + '- but she corrects it once in her own paper and lets him keep '
                + 'believing it.'
            },
            {
              t: 'that a three-year offer is generous to them',
              ok: false,
              why: 'That is what the sentence IMPLIES. An implication is in the '
                + 'text and can be argued with; she does not call it the mistake.'
            }],
            evidence: 'her answer to “what does it assume?”'
          },
        {
            q: 'What does Bassel tell her to do about the error over their '
              + 'export experience?',
            options: [{
              t: 'correct it once, with a figure, in the paper for her own employer',
              ok: true,
              why: '“Correct it once, with a figure, in the paper you are writing '
                + 'for your own employer - not in a letter to Mr Dallal.”'
            },
            {
              t: 'correct it in a letter to Mr Dallal before he makes an offer',
              ok: false,
              why: 'Exactly what he says not to do. A man who thinks you are '
                + 'inexperienced will make an offer that shows what he thinks - '
                + 'let him make it.'
            },
            {
              t: 'leave it, because small is true and not an insult',
              ok: false,
              why: 'That is his advice about the word <i>small</i>, which is a '
                + 'different one of the three descriptions.'
            }],
            evidence: 'his answer about where the correction goes'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'own',
      ref: '1.6.2',
      bookRef: 'Unit 1 · 1.6 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Take a sentence somebody has written about your work. Say what '
              + 'it states, implies and assumes, and say which layer is wrong.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '1.6.2',
      bookRef: 'Unit 1 · 1.6 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What three layers does Nour separate?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>Nour</i> in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What does the brief assume that is false?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with <i>assume</i> in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '1.6.3',
      bookRef: 'Unit 1 · 1.6 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A brings a sentence written about their work; B takes A '
  + 'through the three layers.',
      scene: 'u1-1-6-pair',
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
        head: ['Role card 1 — nine words',
        'Role card 2 — the true part'],
        rows: [['<i>A small family workshop in Mezzeh with limited export '
            + 'experience.</i> ⚠ <b>Says: small, Mezzeh, inexperienced. Implies: '
            + 'cannot negotiate. Assumes: no other buyer</b> — ⚠ <b>and that is '
            + 'the false one.</b> <b>Correct the export figure to your own '
            + 'employer, once, and let Mr Dallal make the offer he believes '
            + 'in.</b>',
          'A is angry about a sentence. ⚠ B\'s job is to find the part of it '
            + 'that is <b>true</b> and make A say so out loud. ⚠ <b>Expect '
            + 'resistance.</b> <b>Then ask what a year of proving it wrong would '
            + 'cost</b> — ⚠ <b>and whether the part that is true is actually an '
            + 'insult or only a fact A does not like.</b>']]
      }
    },
    {
      id: 'c6',
      kind: 'own',
      ref: '1.6.3R',
      bookRef: 'Unit 1 · 1.6 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out the exchange for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ separate the layers</td><td>☐ what '
          + 'does it say?</td><td>☐ what does it imply?</td><td>☐ what does it '
          + 'assume?</td><td>☐ let him make it</td><td>☐ small is '
          + 'true</td></tr></table>'
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
      'I used this cycle\'s language: Three layers of a sentence about you.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '1.6.4',
      bookRef: 'Unit 1 · 1.6 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Take four sentences written about your work by somebody outside it. Open each one up.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The '
          + 'sentence</th><th>Says</th><th>Implies</th><th>Assumes — and is it '
          + 'true?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
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
        task: 'Take four sentences written about your work by somebody outside it. '
          + 'Open each one up.',
        grammar: 'Three layers of a sentence about you',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (1.6) teaches: Three layers of a sentence about you. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Three layers of a sentence about you.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['layers',
        'sentence',
        'about',
        'separate',
        'before',
        'answer',
        'heat',
        'reading',
        'brief',
        'yourself']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Three layers of a sentence about you.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '1.6.4R',
      bookRef: 'Unit 1 · 1.6 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: The sentence says , implies , and assumes . The wrong layer '
  + 'is . The true part is , and I am going to stop arguing with it.',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — The sentence says , implies , and assumes —. The '
          + 'wrong layer is —. The true part is , and I am going to stop arguing '
          + 'with it. (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Three layers of a sentence about you',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (1.6) teaches: '
          + 'Three layers of a sentence about you. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Three layers of a sentence about you.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['layers',
        'sentence',
        'about',
        'separate',
        'before',
        'answer',
        'heat',
        'reading',
        'brief',
        'yourself'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Three layers of a sentence about you.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '1.6.5',
      bookRef: 'Unit 1 · 1.6 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the page, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>HIS LETTER, OPENED UP. 17 January. N. Mansour. ⚠ For the file, '
          + 'and not for Mr Dallal.</b></p><table class=\'bk\'><tr><th>His '
          + 'words</th><th>Says</th><th>Implies</th><th>Assumes</th><th>True?</th></tr><tr><td><i>a '
          + 'small family workshop in Mezzeh</i></td><td>size, place, '
          + 'ownership</td><td>we cannot refuse</td><td>⚠ <b>that we have no '
          + 'other buyer</b></td><td>⚠ <b>says: yes. assumes: '
          + 'no</b></td></tr><tr><td><i>with limited export '
          + 'experience</i></td><td>we are new to it</td><td>we need his '
          + 'market</td><td>⚠ <b>that we do not know our own costs '
          + 'abroad</b></td><td>⚠ <b>no — every month since '
          + 'January</b></td></tr><tr><td><i>we are prepared to offer a '
          + 'three-year term</i></td><td>a long '
          + 'commitment</td><td>generosity</td><td>⚠ <b>that length is what we '
          + 'want</b></td><td>⚠ <b>no — length is what <i>he</i> '
          + 'wants</b></td></tr><tr><td><i>at the price set out below, which is a '
          + 'condition of the term</i></td><td>a price</td><td>take it '
          + 'together</td><td>that we will read the term and not the '
          + 'price</td><td>⚠ <b>no, and only just</b></td></tr><tr><td><i>subject '
          + 'to the damages provisions at paragraph 11</i></td><td>a '
          + 'clause</td><td>a formality</td><td>that we will not price the '
          + 'risk</td><td>not yet known</td></tr><tr><td><i>we would of course '
          + 'expect to deal directly</i></td><td>no intermediary</td><td>tidier '
          + 'for everybody</td><td>⚠ <b>that Ms Tannous is a cost and not a '
          + 'reason</b></td><td>⚠ <b>no, and this is the real '
          + 'mistake</b></td></tr></table><p>⚠ <b>Six sentences, and the mistake '
          + 'that matters is in the last one.</b> <b>He reads Ms Tannous as a '
          + 'margin between him and us.</b> ⚠ <b>She is the reason there is an '
          + 'us: she found this company, she took the first order at a price that '
          + 'barely held, and she carried the risk of our first export season '
          + 'when nobody in Beirut had heard of Mezzeh.</b> ⚠ <b>A man who thinks '
          + 'she is a cost has not asked how he came to be buying our cartons at '
          + 'all.</b></p><p>⚠ <b>And the third line is the one I will use.</b> '
          + '<b>He assumes a three-year term is what a small workshop wants: '
          + 'security, a long order, a quiet year.</b> ⚠ <b>Length is what '
          + '<i>he</i> wants</b> — ⚠ <b>his board is what moves in three years, '
          + 'not ours</b> — <b>and the moment I read it that way the whole letter '
          + 'changed direction.</b></p><p>⚠ <b>What I have not done, and will '
          + 'not: write any of this to him.</b> ⚠ <b>This page is for the file '
          + 'and for Mr Ayoub.</b> <b>A letter that tells the other side what you '
          + 'have worked out about his assumptions is a letter that teaches him '
          + 'to hide them.</b></p><h4>Writer\'s box</h4><p><b>A letter, opened up '
          + '— four parts:</b> ⚠ <b>a table: <i>his words · says · implies · '
          + 'assumes · true?</b></i> → ⚠ <b>the mistake that matters</b> → <b>the '
          + 'line you will use</b> → ⚠ <b>and who the page is for.</b></p><p>⚠ '
          + '<b>Quote his words, not your summary of them.</b> <b>The sentence in '
          + 'the left-hand column must be his</b> — ⚠ <b>the moment you '
          + 'paraphrase, you are reading your own annoyance.</b></p><p>⚠ <b>Put '
          + '<i>true?</i> in its own column, and answer it layer by layer.</b> ⚠ '
          + '<i>Says: yes. Assumes: no.</i> <b>A sentence can be accurate and '
          + 'rest on something false, and that split is the whole value of the '
          + 'exercise.</b></p><p>⚠ <b>Find the assumption about the person who is '
          + 'not in the room.</b> ⚠ <i>That Ms Tannous is a cost and not a '
          + 'reason.</i> <b>It is where the other side is most often wrong, '
          + 'because nobody argues for the absent.</b></p><p>⚠ <b>Look for the '
          + 'thing he wants that he has described as something you want.</b> ⚠ '
          + '<i>Length is what he wants; his board is what moves in three years, '
          + 'not ours.</i> <b>One re-reading like that turns a letter '
          + 'round.</b></p><p>⚠ <b>And write at the top who the page is for.</b> '
          + '⚠ <b>A letter that tells the other side what you have worked out '
          + 'about his assumptions teaches him to hide them.</b> <b>This page is '
          + 'for your own file.</b></p>'
      },
      questions: [{
            q: 'How many sentences are opened up, and where is the mistake that matters?',
            minWords: 6,
            rows: 2,
            hint: 'A number, and the thing it counts - two cartons, not two. Look '
              + 'in the text above for the line with <i>mistake</i> in it.'
          },
      {
            q: 'What does the writer say the three-year term is really for?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>three-year</i> in it.'
          },
      {
            q: 'Who is this page for, and who is it not for?',
            minWords: 6,
            rows: 2,
            hint: 'A person: their name, or their job if the line gives no name. '
              + 'Look in the text above for the line with <i>page</i> in it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '1.6.6',
      bookRef: 'Unit 1 · 1.6 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Open up a letter or message written to you by somebody on the other side of '
  + 'something (<b>80 words or more</b>). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['layers',
        'sentence',
        'about',
        'separate',
        'before',
        'answer',
        'heat',
        'reading']
      },
      coach: {
        title: 'What to include',
        task: 'Open up a letter or message written to you by somebody on the other side of '
  + 'something (80 words or more). Use the frame.',
        criteria: [{ t: 'A letter, opened up — four parts: ⚠ a table: his words · says · '
              + 'implies · assumes · true? → ⚠ the mistake that matters → the '
              + 'line you will use → ⚠ and who the page is for.' },
            { t: '⚠ Quote his words, not your summary of them. The sentence in the '
              + 'left-hand column must be his — ⚠ the moment you paraphrase, you '
              + 'are reading your own annoyance.' },
            { t: '⚠ Put true? in its own column, and answer it layer by layer. ⚠ '
              + 'Says: yes. Assumes: no. A sentence can be accurate and rest on '
              + 'something false, and that split is the whole value of the '
              + 'exercise.' },
            { t: '⚠ Find the assumption about the person who is not in the room. ⚠ '
              + 'That Ms Tannous is a cost and not a reason. It is where the '
              + 'other side is most often wrong, because nobody argues for the '
              + 'absent.' },
            { t: '⚠ Look for the thing he wants that he has described as something '
              + 'you want. ⚠ Length is what he wants; his board is what moves in '
              + 'three years, not ours. One re-reading like that turns a letter '
              + 'round.' },
            { t: '⚠ And write at the top who the page is for. ⚠ A letter that '
              + 'tells the other side what you have worked out about his '
              + 'assumptions teaches him to hide them. This page is for your own '
              + 'file.' }]
      },
      aiCheck: {
        task: 'Open up a letter or message written to you by somebody on the other '
          + 'side of something (80 words or more). Use the frame.',
        grammar: 'Three layers of a sentence about you',
        must: ['A letter, opened up — four parts: ⚠ a table: his words · says · '
          + 'implies · assumes · true? → ⚠ the mistake that matters → the line '
          + 'you will use → ⚠ and who the page is for.',
        '⚠ Quote his words, not your summary of them. The sentence in the '
          + 'left-hand column must be his — ⚠ the moment you paraphrase, you are '
          + 'reading your own annoyance.',
        '⚠ Put true? in its own column, and answer it layer by layer. ⚠ Says: '
          + 'yes. Assumes: no. A sentence can be accurate and rest on something '
          + 'false, and that split is the whole value of the exercise.',
        '⚠ Find the assumption about the person who is not in the room. ⚠ '
          + 'That Ms Tannous is a cost and not a reason. It is where the other '
          + 'side is most often wrong, because nobody argues for the absent.'],
        vocab: ['layers',
        'sentence',
        'about',
        'separate',
        'before',
        'answer',
        'heat',
        'reading',
        'brief',
        'yourself']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '1.6.6P',
      bookRef: 'Unit 1 · 1.6 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. ⚠ Copy the line you are marking, then name the criterion and say '
  + 'what you found.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>His words quoted, not '
          + 'summarised</td><td>&nbsp;</td></tr><tr><td><i>true?</i> answered '
          + 'layer by layer</td><td>&nbsp;</td></tr><tr><td>An assumption about '
          + 'somebody not in the room</td><td>&nbsp;</td></tr><tr><td>Something '
          + 'he wants, described as something you '
          + 'want</td><td>&nbsp;</td></tr><tr><td>Who the page is for, at the '
          + 'top</td><td>&nbsp;</td></tr></table>'
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
          + 'and say what you found.',
        grammar: 'Three layers of a sentence about you',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (1.6) '
          + 'teaches: Three layers of a sentence about you. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        must: ['A letter, opened up — four parts: ⚠ a table: his words · says · '
          + 'implies · assumes · true? → ⚠ the mistake that matters → the line '
          + 'you will use → ⚠ and who the page is for.',
        '⚠ Quote his words, not your summary of them. The sentence in the '
          + 'left-hand column must be his — ⚠ the moment you paraphrase, you are '
          + 'reading your own annoyance.',
        '⚠ Put true? in its own column, and answer it layer by layer. ⚠ Says: '
          + 'yes. Assumes: no. A sentence can be accurate and rest on something '
          + 'false, and that split is the whole value of the exercise.',
        '⚠ Find the assumption about the person who is not in the room. ⚠ '
          + 'That Ms Tannous is a cost and not a reason. It is where the other '
          + 'side is most often wrong, because nobody argues for the absent.'],
        vocab: ['layers',
        'sentence',
        'about',
        'separate',
        'before',
        'answer',
        'heat',
        'reading',
        'brief',
        'yourself'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      kind: 'own',
      ref: '1.6.6R',
      bookRef: 'Unit 1 · 1.6 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read only the assumption they found about an absent '
  + 'person. ⚠ The class says who would have argued for them if they had been '
  + 'there.',
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
      'I used this cycle\'s language: Three layers of a sentence about you.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '1.6.7',
      bookRef: 'Unit 1 · 1.6 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about something written about you or your work by somebody outside it '
  + '(<b>200 to 240 words</b>). Say what it stated, what it assumed, which part '
  + 'was true, and what you did with it.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 10
        }],
      meter: {
        label: 'words from this lesson',
        words: ['layers',
        'sentence',
        'about',
        'separate',
        'before',
        'answer',
        'heat',
        'reading']
      },
      coach: {
        title: 'What to include',
        task: 'Write about something written about you or your work by somebody outside it '
  + '(200 to 240 words). Say what it stated, what it assumed, which part was '
  + 'true, and what you did with it.',
        criteria: [{ t: 'A letter, opened up — four parts: ⚠ a table: his words · says · '
              + 'implies · assumes · true? → ⚠ the mistake that matters → the '
              + 'line you will use → ⚠ and who the page is for.' },
            { t: '⚠ Quote his words, not your summary of them. The sentence in the '
              + 'left-hand column must be his — ⚠ the moment you paraphrase, you '
              + 'are reading your own annoyance.' },
            { t: '⚠ Put true? in its own column, and answer it layer by layer. ⚠ '
              + 'Says: yes. Assumes: no. A sentence can be accurate and rest on '
              + 'something false, and that split is the whole value of the '
              + 'exercise.' },
            { t: '⚠ Find the assumption about the person who is not in the room. ⚠ '
              + 'That Ms Tannous is a cost and not a reason. It is where the '
              + 'other side is most often wrong, because nobody argues for the '
              + 'absent.' },
            { t: '⚠ Look for the thing he wants that he has described as something '
              + 'you want. ⚠ Length is what he wants; his board is what moves in '
              + 'three years, not ours. One re-reading like that turns a letter '
              + 'round.' },
            { t: '⚠ And write at the top who the page is for. ⚠ A letter that '
              + 'tells the other side what you have worked out about his '
              + 'assumptions teaches him to hide them. This page is for your own '
              + 'file.' }]
      },
      aiCheck: {
        task: 'Write about something written about you or your work by somebody '
          + 'outside it (200 to 240 words). Say what it stated, what it assumed, '
          + 'which part was true, and what you did with it.',
        grammar: 'Three layers of a sentence about you',
        must: ['A letter, opened up — four parts: ⚠ a table: his words · says · '
          + 'implies · assumes · true? → ⚠ the mistake that matters → the line '
          + 'you will use → ⚠ and who the page is for.',
        '⚠ Quote his words, not your summary of them. The sentence in the '
          + 'left-hand column must be his — ⚠ the moment you paraphrase, you are '
          + 'reading your own annoyance.',
        '⚠ Put true? in its own column, and answer it layer by layer. ⚠ Says: '
          + 'yes. Assumes: no. A sentence can be accurate and rest on something '
          + 'false, and that split is the whole value of the exercise.',
        '⚠ Find the assumption about the person who is not in the room. ⚠ '
          + 'That Ms Tannous is a cost and not a reason. It is where the other '
          + 'side is most often wrong, because nobody argues for the absent.'],
        vocab: ['layers',
        'sentence',
        'about',
        'separate',
        'before',
        'answer',
        'heat',
        'reading',
        'brief',
        'yourself']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '1.6.7P',
      bookRef: 'Unit 1 · 1.6 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. ⚠ Copy one line, then: ★ the criterion ✓ what I '
  + 'found ? which layer is the writer angry about?',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            minWords: 6,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. ⚠ Copy one line, then: — ★ the criterion '
          + '— ✓ what I found —? which layer is the writer angry about? (The '
          + 'dashes are blanks the learner fills in with their own workplace. '
          + 'Judge what they wrote in them, not the blanks.)',
        grammar: 'Three layers of a sentence about you',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (1.6) teaches: Three layers of a sentence about you. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Three layers of a sentence about you.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['layers',
        'sentence',
        'about',
        'separate',
        'before',
        'answer',
        'heat',
        'reading',
        'brief',
        'yourself'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      example: ['You wrote that you check the shelves first. I asked: who reads the '
        + 'sheet after you? You said Abu Yasser reads it at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Three layers of a sentence about you.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'own',
      ref: '1.6.7R',
      bookRef: 'Unit 1 · 1.6 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. ⚠ In how many was the writer angry about the implication '
  + 'rather than the assumption? Usually two of three — ⚠ and in all three there '
  + 'was a true part that nobody wanted to say out loud.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then take the last letter from somebody on '
          + 'the other side of something, and write the assumption under each of '
          + 'its sentences (80+ words).</p>'
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
      'I used this cycle\'s language: Three layers of a sentence about you.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
