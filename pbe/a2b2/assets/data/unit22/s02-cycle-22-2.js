/* Unit 22 · cycle 22.2 — I am writing to ask about….

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE4.page('u22-s02', {
  book: { source: 'Proactive Business English · A2 Book 2', ref: 'Unit 22 · 22.2', part: '22.2',
          section: '2', lesson: 'I am writing to ask about…', title: 'I am writing to ask about…' },
  objective: 'state your purpose in the first line',
  study: {
    minutes: 90,
    objective: 'state your purpose in the first line',
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
    task: 'Write the first line of an email asking for a statement.',
    weak: 'I hope you are well. I am writing to you today because...',
    change: ['Cut the greeting line. It has never helped anybody.',
        'Say what you want in the first sentence, with the account number.'],
    better: 'I am writing to ask for the statement for account 4471, up to the end of April.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '22.2.1',
      bookRef: 'Unit 22 · 22.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Open the last three emails you received. How many say what they '
              + 'want in the first line?',
            model: 'Open. One in three is a generous estimate in most inboxes',
            minWords: 3,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Which first line tells you most? I hope you are well. · With '
              + 'reference to your email of 3 May. · I am writing to ask for a '
              + 'copy of invoice 0612.',
            model: 'The third — it names the thing and the number, so it can be '
              + 'acted on without opening anything',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Your '
              + 'own workplace, not the book\'s. Say it out loud once before you '
              + 'write it - a sentence or two is enough.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '22.2.2',
      bookRef: 'Unit 22 · 22.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u22-22-2',
      passage: {
        title: 'Language box',
        html: '<p><b>Stating your purpose – the first line</b></p><table '
          + 'class=\'bk\'><tr><th>Shape</th><th>Example</th></tr><tr><td><b>I am '
          + 'writing to</b> + verb</td><td><b>I am writing to ask for</b> a copy '
          + 'of the March statement.</td></tr><tr><td><b>I am writing about</b> + '
          + 'noun</td><td><b>I am writing about</b> order '
          + '0618.</td></tr><tr><td><b>With reference to</b> + '
          + 'noun</td><td><b>With reference to</b> your email of 3 '
          + 'May,</td></tr><tr><td><b>Further to</b> + noun</td><td><b>Further '
          + 'to</b> our telephone call this morning,</td></tr><tr><td>Courtesy '
          + '<b>after</b> the purpose</td><td>I hope you are '
          + 'well.</td></tr></table><p>⚠ <b>The purpose goes in the first line, '
          + 'after the greeting and nothing else.</b> Good wishes, context and '
          + 'history all go <b>after</b> it, where they are courtesy. Before it, '
          + 'they are a delay the reader pays for.</p><p>⚠ <i>With reference '
          + 'to</i> and <i>further to</i> are for replies and follow-ups and they '
          + 'must be followed by <b>the thing</b>, not by a feeling: <i>further '
          + 'to our call this morning, could you…</i></p><p>⚠ <b>Include the '
          + 'reference number in the first line</b> if there is one. <i>Invoice '
          + '0612</i> · <i>account 4471</i> · <i>order 0618</i>. It is what lets '
          + 'somebody act without opening a file.</p><p>⚠ <i>I hope you are '
          + 'well</i> is not forbidden; it is misplaced. One line, after the '
          + 'purpose, and never two.</p><p><b>Practise:</b> Write the first line '
          + 'for each. 1 asking for a statement 2 answering a complaint 3 '
          + 'following up a call 4 asking a price 5 chasing something promised a '
          + 'fortnight ago</p><p><b>Useful phrases:</b> I am writing to ask for… '
          + '· I am writing about… · With reference to your email of… · Further '
          + 'to our call this morning… · for account 4471</p><p><b>Pronunciation '
          + '– the first line read aloud.</b> 🔊 <b>Track 22.4</b> Listen to two '
          + 'first lines, one with the purpose and one without. Read your own '
          + 'first line aloud: if it does not say what you want, nothing after it '
          + 'will.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is wrong with the draft?',
            options: [{
              t: 'the purpose is in the fourth line',
              ok: true,
              why: 'He reads one to three and decides; the request is below that.'
            },
            {
              t: 'it is too short',
              ok: false,
              why: 'It is longer than the version Nour proposes, which is the '
                + 'opposite of the problem.'
            },
            {
              t: 'the name is wrong',
              ok: false,
              why: 'The name is right here - that was the fault in the previous cycle.'
            }],
            evidence: 'Nour\'s count of the lines he will read before deciding'
          },
        {
            q: 'Books closed. Listen. In which line is the request?',
            options: [{
              t: 'line five',
              ok: true,
              why: 'He reads one to three and decides, which is why it never gets read.'
            },
            {
              t: 'line one',
              ok: false,
              why: 'Line one is the greeting - the place Nour wants the request moved to.'
            },
            {
              t: 'line three',
              ok: false,
              why: 'Three is where he stops and decides; the ask is still two lines below.'
            }],
            evidence: 'Nour\'s count of the lines he will read'
          },
        {
            q: 'Why does Nour say it only feels abrupt to Hala?',
            options: [{
              t: 'because to the reader it reads as somebody who respects his time',
              ok: true,
              why: 'The same sentence is rude from inside and considerate from outside.'
            },
            {
              t: 'because the reader does not read English well',
              ok: false,
              why: 'Nothing is said about his English.'
            },
            {
              t: 'because he is a bank and banks are formal',
              ok: false,
              why: 'Formality is not the point; the position of the ask is.'
            }],
            evidence: 'her last line'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '22.2.2',
      bookRef: 'Unit 22 · 22.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Write the first line for each. 1 asking for a statement 2 '
              + 'answering a complaint 3 following up a call 4 asking a price 5 '
              + 'chasing something promised a fortnight ago',
            model: 'I am writing to ask for a copy of the March statement for '
              + 'account 4471. · With reference to your email of · May about '
              + 'order 0618, · I am writing to ask the price of 300 units of '
              + 'article 55. · Further to my emails of · May, I am still waiting '
              + 'for…',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '22.2.2',
      bookRef: 'Unit 22 · 22.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does Nour say the first line is for?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *Nour* in it. Play '
              + 'it again with the subtitles on.'
          },
      {
            q: 'When is "I hope you are well" right?',
            minWords: 6,
            rows: 2,
            hint: 'A time or a day. Look in the dialogue above for the line with '
              + '*hope* in it. Play it again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '22.2.3',
      bookRef: 'Unit 22 · 22.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A reads a draft whose purpose is buried; B moves it to the '
  + 'first line. Use the skeleton, then the role cards.',
      scene: 'u22-22-2-pair',
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
        head: ['Role card 1 — chasing a document',
        'Role card 2 — answering a complaint'],
        rows: [['Four lines of history about a loan application before the request, '
            + 'which is for one signed form. The reader is a bank officer with a '
            + 'queue of applications.',
          'Three lines of apology and company background before the thing the '
            + 'customer actually wants, which is a date for the replacement.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '22.2.3R',
      bookRef: 'Unit 22 · 22.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out the correction for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ I am writing to ask for…</td><td>☐ I '
          + 'am writing about…</td><td>☐ With reference to…</td><td>☐ Further to '
          + 'our call…</td><td>☐ after the purpose, not before</td><td>☐ whether '
          + 'this one is for them</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the new first line and count the lines it '
              + 'replaced; three to five is the usual answer. Typical errors: I '
              + 'am writing for ask · I am writing to asking · With reference to '
              + 'I hope you are well · and the content fault of a first line with '
              + 'no reference number in it',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Stating your purpose – the first line.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '22.2.4',
      bookRef: 'Unit 22 · 22.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Rewrite the first line of five real emails — yours or ones you have '
  + 'received. Each new first line: the purpose and the reference number.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The email</th><th>The old first '
          + 'line</th><th>The new first '
          + 'line</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Dear Mr Haddad,',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Rewrite the first line of five real emails — yours or ones you have '
          + 'received. Each new first line: the purpose and the reference number. '
          + '(The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Stating your purpose – the first line',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (22.2) teaches: Stating your purpose – the first line. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Stating your purpose – the first line.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['stating',
        'purpose',
        'first',
        'line',
        'after',
        'greeting',
        'nothing',
        'else',
        'good',
        'wishes']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Stating your purpose – the first line.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '22.2.4R',
      bookRef: 'Unit 22 · 22.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: It began . Now it begins . That replaced lines.',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Dear Mr Haddad,',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — It began —. Now it begins —. That replaced — '
          + 'lines. (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Stating your purpose – the first line',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (22.2) teaches: '
          + 'Stating your purpose – the first line. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Stating your purpose – the first line.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['stating',
        'purpose',
        'first',
        'line',
        'after',
        'greeting',
        'nothing',
        'else',
        'good',
        'wishes'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Stating your purpose – the first line.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '22.2.5',
      bookRef: 'Unit 22 · 22.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the two versions of the same email, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>Before</b></p><p>Dear Mr Haddad, I hope this email finds you '
          + 'well, and I hope your family are well also. We have been customers '
          + 'of your branch for a number of years now and we have always valued '
          + 'the relationship and the service we receive. I am writing to you '
          + 'today because we have a small matter which we hope you will be able '
          + 'to assist us with. We require a copy of our statement for the month '
          + 'of March for our account.</p><p><b>After</b></p><p><b>Subject:</b> '
          + 'Account 4471 — copy of the March statement, needed by 12 '
          + 'May</p><p>Dear Mr Haddad,</p><p>I am writing to ask for a copy of '
          + 'the March statement for account 4471, in the name of Sham Trading '
          + 'Co.</p><p>We need it for the auditor, who is here on 12 May. A PDF '
          + 'by email is enough; we do not need a stamped copy.</p><p>I hope you '
          + 'are well — and thank you for the quick answer about the standing '
          + 'order last month.</p><p>Thank you. Best regards, Nour Mansour · Sham '
          + 'Trading · 011 <span class="blank"></span> <span '
          + 'class="blank"></span></p><h4>Writer\'s box</h4><p><b>A request email '
          + '— four lines of work and one of warmth:</b> subject with the thing, '
          + 'the reference and the date → greeting → <b>purpose, with the '
          + 'reference number</b> → <b>why, and what form the answer should '
          + 'take</b> → the courtesy, with something specific in it → thanks, '
          + 'name, telephone.</p><p><b>Say what form the answer should take.</b> '
          + '<i>A PDF by email is enough; we do not need a stamped copy.</i> It '
          + 'removes the most common reason a reply is slow: the reader does not '
          + 'know how much trouble you want them to go to.</p><p><b>Make the '
          + 'courtesy specific.</b> <i>Thank you for the quick answer about the '
          + 'standing order last month.</i> A general good wish is wallpaper; a '
          + 'particular one is a person.</p><p>⚠ Say <b>why</b> you need it. Not '
          + 'to justify yourself — to let the reader judge the urgency honestly. '
          + '<i>The auditor is here on 12 May</i> does more than <i>urgent</i> '
          + 'ever does.</p>'
      },
      questions: [{
            q: 'In which line of the "Before" version does the purpose appear?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the text above for the line with *version* in it.'
          },
      {
            q: 'What two pieces of information in the "After" version save the '
              + 'reader a question?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with *information* in it.'
          },
      {
            q: 'Where have the good wishes gone, and what has been added to them?',
            minWords: 6,
            rows: 2,
            hint: 'A place - a room, a floor, a town. Look in the text above for '
              + 'the line with *wishes* in it.'
          }],
      ideas: ['Dear Mr Haddad,',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '22.2.6',
      bookRef: 'Unit 22 · 22.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Rewrite a real email of your own in the "After" shape (35 words or more). '
  + 'Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['stating',
        'purpose',
        'first',
        'line',
        'after',
        'greeting',
        'nothing',
        'else']
      },
      coach: {
        title: 'What to include',
        task: 'Rewrite a real email of your own in the "After" shape (35 words or more). '
  + 'Use the frame.',
        criteria: [{ t: 'A request email — four lines of work and one of warmth: subject '
              + 'with the thing, the reference and the date → greeting → purpose, '
              + 'with the reference number → why, and what form the answer should '
              + 'take → the courtesy, with something specific in it → thanks, '
              + 'name, telephone.' },
            { t: 'Say what form the answer should take. A PDF by email is enough; '
              + 'we do not need a stamped copy. It removes the most common reason '
              + 'a reply is slow: the reader does not know how much trouble you '
              + 'want them to go to.' },
            { t: 'Make the courtesy specific. Thank you for the quick answer about '
              + 'the standing order last month. A general good wish is wallpaper; '
              + 'a particular one is a person.' },
            { t: '⚠ Say why you need it. Not to justify yourself — to let the '
              + 'reader judge the urgency honestly. The auditor is here on 12 May '
              + 'does more than urgent ever does.' }]
      },
      aiCheck: {
        task: 'Rewrite a real email of your own in the "After" shape (35 words or '
          + 'more). Use the frame.',
        grammar: 'Stating your purpose – the first line',
        must: ['A request email — four lines of work and one of warmth: subject with '
          + 'the thing, the reference and the date → greeting → purpose, with the '
          + 'reference number → why, and what form the answer should take → the '
          + 'courtesy, with something specific in it → thanks, name, telephone.',
        'Say what form the answer should take. A PDF by email is enough; we '
          + 'do not need a stamped copy. It removes the most common reason a '
          + 'reply is slow: the reader does not know how much trouble you want '
          + 'them to go to.',
        'Make the courtesy specific. Thank you for the quick answer about the '
          + 'standing order last month. A general good wish is wallpaper; a '
          + 'particular one is a person.',
        '⚠ Say why you need it. Not to justify yourself — to let the reader '
          + 'judge the urgency honestly. The auditor is here on 12 May does more '
          + 'than urgent ever does.'],
        vocab: ['stating',
        'purpose',
        'first',
        'line',
        'after',
        'greeting',
        'nothing',
        'else',
        'good',
        'wishes']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '22.2.6P',
      bookRef: 'Unit 22 · 22.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Ask one question: could the reader act without asking anything? '
  + 'Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<h4>Band 3 feedback — name the criterion</h4><p>"The box says say '
          + 'what form the answer should take. Would a PDF do here, or does it '
          + 'have to be stamped? The reader cannot tell."</p><p>Quote, question, '
          + 'stop.</p><table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>The purpose in the first line, with a '
          + 'reference</td><td>&nbsp;</td></tr><tr><td>Why it is '
          + 'needed</td><td>&nbsp;</td></tr><tr><td>What form the answer should '
          + 'take</td><td>&nbsp;</td></tr><tr><td>A specific courtesy, after the '
          + 'purpose</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample band 3 feedback: "The box says say what form the answer '
              + 'should take, and yours does — ten boxes would do. The line I '
              + 'would look at is the courtesy: I hope you are well is general, '
              + 'and you have a real one two lines away in the March '
              + 'replacement."',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Ask one question: could the reader act without asking '
          + 'anything? Tick ✓ or cross ✗.',
        grammar: 'Stating your purpose – the first line',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (22.2) '
          + 'teaches: Stating your purpose – the first line. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        must: ['A request email — four lines of work and one of warmth: subject with '
          + 'the thing, the reference and the date → greeting → purpose, with the '
          + 'reference number → why, and what form the answer should take → the '
          + 'courtesy, with something specific in it → thanks, name, telephone.',
        'Say what form the answer should take. A PDF by email is enough; we '
          + 'do not need a stamped copy. It removes the most common reason a '
          + 'reply is slow: the reader does not know how much trouble you want '
          + 'them to go to.',
        'Make the courtesy specific. Thank you for the quick answer about the '
          + 'standing order last month. A general good wish is wallpaper; a '
          + 'particular one is a person.',
        '⚠ Say why you need it. Not to justify yourself — to let the reader '
          + 'judge the urgency honestly. The auditor is here on 12 May does more '
          + 'than urgent ever does.'],
        vocab: ['stating',
        'purpose',
        'first',
        'line',
        'after',
        'greeting',
        'nothing',
        'else',
        'good',
        'wishes'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'own',
      ref: '22.2.6R',
      bookRef: 'Unit 22 · 22.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their first line and their courtesy line. The '
  + 'class says which email they would answer today.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Dear Mr Haddad,',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Stating your purpose – the first line.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '22.2.7',
      bookRef: 'Unit 22 · 22.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about an email you sent that did what it was supposed to do (60 to 100 '
  + 'words). Say what you wanted, how you opened it, what you said about the '
  + 'deadline, and how fast the answer came.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      meter: {
        label: 'words from this lesson',
        words: ['stating',
        'purpose',
        'first',
        'line',
        'after',
        'greeting',
        'nothing',
        'else']
      },
      coach: {
        title: 'What to include',
        task: 'Write about an email you sent that did what it was supposed to do (60 to 100 '
  + 'words). Say what you wanted, how you opened it, what you said about the '
  + 'deadline, and how fast the answer came.',
        criteria: [{ t: 'A request email — four lines of work and one of warmth: subject '
              + 'with the thing, the reference and the date → greeting → purpose, '
              + 'with the reference number → why, and what form the answer should '
              + 'take → the courtesy, with something specific in it → thanks, '
              + 'name, telephone.' },
            { t: 'Say what form the answer should take. A PDF by email is enough; '
              + 'we do not need a stamped copy. It removes the most common reason '
              + 'a reply is slow: the reader does not know how much trouble you '
              + 'want them to go to.' },
            { t: 'Make the courtesy specific. Thank you for the quick answer about '
              + 'the standing order last month. A general good wish is wallpaper; '
              + 'a particular one is a person.' },
            { t: '⚠ Say why you need it. Not to justify yourself — to let the '
              + 'reader judge the urgency honestly. The auditor is here on 12 May '
              + 'does more than urgent ever does.' }]
      },
      aiCheck: {
        task: 'Write about an email you sent that did what it was supposed to do '
          + '(60 to 100 words). Say what you wanted, how you opened it, what you '
          + 'said about the deadline, and how fast the answer came.',
        grammar: 'Stating your purpose – the first line',
        must: ['A request email — four lines of work and one of warmth: subject with '
          + 'the thing, the reference and the date → greeting → purpose, with the '
          + 'reference number → why, and what form the answer should take → the '
          + 'courtesy, with something specific in it → thanks, name, telephone.',
        'Say what form the answer should take. A PDF by email is enough; we '
          + 'do not need a stamped copy. It removes the most common reason a '
          + 'reply is slow: the reader does not know how much trouble you want '
          + 'them to go to.',
        'Make the courtesy specific. Thank you for the quick answer about the '
          + 'standing order last month. A general good wish is wallpaper; a '
          + 'particular one is a person.',
        '⚠ Say why you need it. Not to justify yourself — to let the reader '
          + 'judge the urgency honestly. The auditor is here on 12 May does more '
          + 'than urgent ever does.'],
        vocab: ['stating',
        'purpose',
        'first',
        'line',
        'after',
        'greeting',
        'nothing',
        'else',
        'good',
        'wishes']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '22.2.7P',
      bookRef: 'Unit 22 · 22.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ the line that did the work ✓ '
  + 'purpose in the first line? ? would it work with a stranger?',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "This is the first email this week I could answer without '
              + 'opening a file." ✓ the purpose and the number in the first line. '
              + '? Would it have worked without the number in the subject line?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ the line that did '
          + 'the work — ✓ purpose in the first line? —? would it work with a '
          + 'stranger? (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Stating your purpose – the first line',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (22.2) teaches: Stating your purpose – the first line. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Stating your purpose – the first line.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['stating',
        'purpose',
        'first',
        'line',
        'after',
        'greeting',
        'nothing',
        'else',
        'good',
        'wishes'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Stating your purpose – the first line.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'own',
      ref: '22.2.7R',
      bookRef: 'Unit 22 · 22.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. What did the fast answers have in common? It is nearly '
  + 'always a reference number and a reason.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then rewrite the first line of three '
          + 'emails sitting in your sent folder, and count the lines each new '
          + 'version replaced (35+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Dear Mr Haddad,',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Stating your purpose – the first line.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
