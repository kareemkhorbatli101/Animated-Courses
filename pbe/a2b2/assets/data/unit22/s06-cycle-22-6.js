/* Unit 22 · cycle 22.6 — The same message, two ways.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE4.page('u22-s06', {
  book: { source: 'Proactive Business English · A2 Book 2', ref: 'Unit 22 · 22.6', part: '22.6',
          section: '6', lesson: 'The same message, two ways', title: 'The same message, two ways' },
  objective: 'write the same message two ways, for two readers',
  study: {
    minutes: 90,
    objective: 'write the same message two ways, for two readers',
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
    task: 'Write the same message to a colleague and to a customer.',
    weak: 'Send the invoice.',
    change: ['Keep the ask and the date identical. Only the opening and closing change.',
        'Do not make the customer version longer; make it more explained.'],
    better: 'Hello Hala, could you send the Khalil invoice today? It has to be with '
      + 'them before the 13th. Thanks. / Dear Mr Khalil, I am writing about '
      + 'invoice 0501-3. Could you confirm by Thursday that it has reached your '
      + 'accounts? Best regards, Nour'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '22.6.1',
      bookRef: 'Unit 22 · 22.6 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say the same thing three ways: to Abu Yasser, to a customer, to '
              + 'a bank — "I need the figures by Thursday."',
            model: 'Open. Listen for the version to the bank growing longer while '
              + 'the facts stay the same — that is the unit\'s point arriving on '
              + 'its own',
            minWords: 6,
            rows: 3,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          },
      {
            q: 'What changes between the three? Make a list: words, length, what '
              + 'is explained, what is assumed.',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '22.6.2',
      bookRef: 'Unit 22 · 22.6 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u22-22-6',
      passage: {
        title: 'Language box',
        html: '<p><b>The same message, two registers</b></p><table '
          + 'class=\'bk\'><tr><th>What changes</th><th>What does '
          + 'not</th></tr><tr><td>the opening: <i>Abu Yasser,</i> / <i>Dear Mr '
          + 'Haddad,</i></td><td><b>the facts</b></td></tr><tr><td>how much is '
          + 'explained</td><td><b>the date</b></td></tr><tr><td><i>I need</i> / '
          + '<i>Could you</i></td><td><b>the reference '
          + 'number</b></td></tr><tr><td>the length</td><td><b>what you will do '
          + 'if the answer is no</b></td></tr><tr><td>the closing and the '
          + 'block</td><td><b>the truth</b></td></tr></table><p>⚠ <b>Formal means '
          + 'more explained, not more words.</b> Everything the reader cannot be '
          + 'assumed to know goes in: who you are, which account, what form, why. '
          + 'Nothing else.</p><p>⚠ <b>The facts and the date never change between '
          + 'versions.</b> Two versions of a message are a translation, not two '
          + 'stories. The day somebody compares them is the day you lose the '
          + 'argument.</p><p>⚠ Inside the company you may give an instruction: '
          + '<i>I need the figures by Thursday.</i> Outside it, the same content '
          + 'becomes a question: <i>could you send…?</i> The content is identical '
          + 'and the shape is not.</p><p><b>Practise:</b> Write both versions of '
          + 'each. 1 a deadline 2 a complaint 3 a thank-you 4 a refusal 5 bad '
          + 'news</p><p><b>Useful phrases:</b> Paper is fine. · the branch stamp '
          + 'is required · Could you confirm by…? · more explained, not more '
          + 'words · two stories, and one will be quoted '
          + 'back</p><p><b>Pronunciation – hearing the distance.</b> 🔊 <b>Track '
          + '22.12</b> Listen to the same sentence said to a colleague and to a '
          + 'stranger. The words change little; the speed and the pauses change a '
          + 'great deal. Repeat both.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is the same in both versions?',
            options: [{
              t: 'the length',
              ok: false,
              why: 'The bank version is longer, which is the thing she then has to explain.'
            },
            {
              t: 'the facts and the date',
              ok: true,
              why: 'Same message, same deadline; what changes is how much is explained.'
            },
            {
              t: 'the opening',
              ok: false,
              why: 'One begins ‘Abu Yasser —’ and the other ‘Dear Mr Haddad’.'
            }],
            evidence: 'Nour\'s comment after both versions are read out'
          },
        {
            q: 'Books closed. Listen. What does Hala need from Abu Yasser?',
            options: [{
              t: 'the March stock figures',
              ok: true,
              why: 'Short, no explanation, because he knows what an auditor is.'
            },
            {
              t: 'a certified statement',
              ok: false,
              why: 'That is what she asks the BANK for, in the second version of '
                + 'the same message.'
            },
            {
              t: 'the invoice numbers',
              ok: false,
              why: 'Invoice numbers are what Nadia asks for in A2 Book 1; nothing '
                + 'here is about them.'
            }],
            evidence: 'the message she reads out to him first'
          },
        {
            q: 'What does Nour say formal means?',
            options: [{
              t: 'more explained, which is usually longer',
              ok: true,
              why: 'She separates the two: longer is a consequence, not the definition.'
            },
            {
              t: 'more polite words',
              ok: false,
              why: 'Politeness is could and thank you, in an earlier cycle of this unit.'
            },
            {
              t: 'longer sentences',
              ok: false,
              why: 'She says plainly that it does not mean that.'
            }],
            evidence: 'her last line, correcting Hala\'s conclusion'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '22.6.2',
      bookRef: 'Unit 22 · 22.6 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Write both versions of each. 1 a deadline 2 a complaint 3 a '
              + 'thank-you 4 a refusal 5 bad news',
            model: 'Thursday — auditor on Friday / Could you confirm by Thursday '
              + 'that the 12th is possible? · Two boxes of twenty crushed, '
              + 'photographed / Six of the forty boxes contain broken tiles; we '
              + 'have photographed them on the pallet. · Thanks for Saturday / '
              + 'Thank you for coming in on Saturday; it made the Homs delivery '
              + 'possible. · No, not before the 20th / I am afraid we cannot do '
              + 'it before the 20th. We can do the 21st, if that would help. · '
              + 'The van is off the road till Tuesday / I am sorry to say the '
              + 'delivery will now be Tuesday · May rather than Friday. The '
              + 'reason is a vehicle repair.',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '22.6.2',
      bookRef: 'Unit 22 · 22.6 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does the formal version explain that the '
              + 'friendly one does not?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *friendly* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What does Nour say you must never change between versions?',
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
      ref: '22.6.3',
      bookRef: 'Unit 22 · 22.6 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A writes the friendly version; B writes the formal one; both '
  + 'check that the facts and the date are identical. Use the skeleton, then the '
  + 'role cards.',
      scene: 'u22-22-6-pair',
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
        head: ['Role card 1 — bad news',
        'Role card 2 — a refusal'],
        rows: [['A delivery will be two days late. One version to the warehouse, '
            + 'one to the customer. Same new date in both, same reason.',
          'You cannot do a job by Friday. One version to a colleague who '
            + 'asked, one to a customer who asked. Same alternative date in both.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '22.6.3R',
      bookRef: 'Unit 22 · 22.6 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs read both versions for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Paper is fine.</td><td>☐ the stamp is '
          + 'required</td><td>☐ Could you confirm…?</td><td>☐ more explained, not '
          + 'more words</td><td>☐ the facts never change</td><td>☐ two '
          + 'stories</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners check that the facts and the date match, then write '
              + 'what the formal version explained. Typical errors: a formal '
              + 'opening followed by an instruction · Dear Abu Yasser (a nickname '
              + 'with Dear) · and the content fault of a date that has quietly '
              + 'moved between the two versions',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The same message, two registers.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '22.6.4',
      bookRef: 'Unit 22 · 22.6 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Take three real messages. Write each one twice — for a colleague and for an '
  + 'outsider. Then have a partner check that nothing but the register changed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The message</th><th>To a '
          + 'colleague</th><th>To an outsider</th><th>What '
          + 'changed</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['The same message, two registers',
      'To the warehouse',
      'To the bank',
      'Dear Mr Haddad,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Take three real messages. Write each one twice — for a colleague and '
          + 'for an outsider. Then have a partner check that nothing but the '
          + 'register changed. (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'The same message, two registers',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (22.6) teaches: The same message, two registers. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The same message, two registers.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['message',
        'registers',
        'formal',
        'means',
        'explained',
        'words',
        'everything',
        'reader',
        'cannot',
        'assumed']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The same message, two registers.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '22.6.4R',
      bookRef: 'Unit 22 · 22.6 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: To I wrote . To I wrote . What changed was ; what did not was .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['The same message, two registers',
      'To the warehouse',
      'To the bank',
      'Dear Mr Haddad,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — To — I wrote —. To — I wrote —. What changed was ; '
          + 'what did not was —. (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'The same message, two registers',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (22.6) teaches: '
          + 'The same message, two registers. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The same message, two registers.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['message',
        'registers',
        'formal',
        'means',
        'explained',
        'words',
        'everything',
        'reader',
        'cannot',
        'assumed'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The same message, two registers.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '22.6.5',
      bookRef: 'Unit 22 · 22.6 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the same message written two ways, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>To the warehouse</b></p><p><b>Subject:</b> March stock figures '
          + '— need them Thursday for the auditor</p><p>Abu Yasser — I need the '
          + 'March stock figures by Thursday the 12th. The auditor is here on the '
          + '13th. Paper is fine; I will type them. If Thursday is not possible, '
          + 'tell me tomorrow and I will come and count with you on Wednesday. — '
          + 'Nour</p><p><b>To the bank</b></p><p><b>Subject:</b> Account 4471 — '
          + 'certified March statement, needed by 12 May</p><p>Dear Mr '
          + 'Haddad,</p><p>I am writing to ask for a certified copy of the March '
          + 'statement for account 4471, in the name of Sham Trading Co.</p><p>We '
          + 'need it for our auditor, who is here on 13 May. The auditor requires '
          + 'the branch stamp, so a PDF is not enough this time.</p><p>Could you '
          + 'confirm by Thursday 8 May that 12 May is possible? If it is not, '
          + 'please tell me then — there is an alternative that the auditor will '
          + 'accept, and it takes ten minutes rather than two days.</p><p>Thank '
          + 'you. Best regards, Nour Mansour · Administration · Sham Trading Co., '
          + 'Mezzeh · 011 <span class="blank"></span> <span '
          + 'class="blank"></span></p><h4>Writer\'s box</h4><p><b>Writing the '
          + 'same message twice — the method:</b> write the <b>facts, the date '
          + 'and the "if no"</b> first, in a list. Then write each version around '
          + 'that list, changing only the opening, the amount explained, the '
          + 'request form and the closing.</p><p>Writing the list first is what '
          + 'keeps the two versions honest. Most people write the friendly one '
          + 'and then dress it up, and in the dressing up a date '
          + 'moves.</p><p><b>Both versions carry an "if no".</b> To a colleague '
          + 'it is an offer of help; to a bank it is an alternative that is cheap '
          + 'for them. Same purpose, different shape.</p><p>⚠ Inside the company: '
          + 'an instruction, a first name, no signature block. Outside: a '
          + 'question, a title, the full block. Neither is more polite than the '
          + 'other; they are aimed at different distances.</p>'
      },
      questions: [{
            q: 'List everything that is the same in both messages.',
            minWords: 6,
            rows: 2,
            hint: 'Look in the text above for the line with *everything* in it.'
          },
      {
            q: 'List everything the bank version explains that the warehouse '
              + 'version does not.',
            minWords: 6,
            rows: 2,
            hint: 'Look in the text above for the line with *everything* in it.'
          },
      {
            q: 'Both versions contain an "if no". How do they differ?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the text above for the line with *versions* in it.'
          }],
      ideas: ['To the warehouse',
      'To the bank',
      'Dear Mr Haddad,',
      'The same message, two registers'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '22.6.6',
      bookRef: 'Unit 22 · 22.6 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write one real message in both registers (35 words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['message',
        'registers',
        'formal',
        'means',
        'explained',
        'words',
        'everything',
        'reader']
      },
      coach: {
        title: 'What to include',
        task: 'Write one real message in both registers (35 words or more). Use the frame.',
        criteria: [{ t: 'Writing the same message twice — the method: write the facts, '
              + 'the date and the "if no" first, in a list. Then write each '
              + 'version around that list, changing only the opening, the amount '
              + 'explained, the request form and the closing.' },
            { t: 'Writing the list first is what keeps the two versions honest. '
              + 'Most people write the friendly one and then dress it up, and in '
              + 'the dressing up a date moves.' },
            { t: 'Both versions carry an "if no". To a colleague it is an offer of '
              + 'help; to a bank it is an alternative that is cheap for them. '
              + 'Same purpose, different shape.' },
            { t: '⚠ Inside the company: an instruction, a first name, no signature '
              + 'block. Outside: a question, a title, the full block. Neither is '
              + 'more polite than the other; they are aimed at different '
              + 'distances.' }]
      },
      aiCheck: {
        task: 'Write one real message in both registers (35 words or more). Use the frame.',
        grammar: 'The same message, two registers',
        must: ['Writing the same message twice — the method: write the facts, the '
          + 'date and the "if no" first, in a list. Then write each version '
          + 'around that list, changing only the opening, the amount explained, '
          + 'the request form and the closing.',
        'Writing the list first is what keeps the two versions honest. Most '
          + 'people write the friendly one and then dress it up, and in the '
          + 'dressing up a date moves.',
        'Both versions carry an "if no". To a colleague it is an offer of '
          + 'help; to a bank it is an alternative that is cheap for them. Same '
          + 'purpose, different shape.',
        '⚠ Inside the company: an instruction, a first name, no signature '
          + 'block. Outside: a question, a title, the full block. Neither is more '
          + 'polite than the other; they are aimed at different distances.'],
        vocab: ['message',
        'registers',
        'formal',
        'means',
        'explained',
        'words',
        'everything',
        'reader',
        'cannot',
        'assumed']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '22.6.6P',
      bookRef: 'Unit 22 · 22.6 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Ask one question: if both readers compared these, would anything '
  + 'embarrass the writer? Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<h4>Band 3 feedback — name the criterion</h4><p>"The box says the '
          + 'facts and the date never change. Do the two versions here carry the '
          + 'same date, and the same \'if no\'?"</p><p>Quote, question, stop. '
          + 'Where they differ, the writer nearly always did not '
          + 'notice.</p><table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>The same facts in '
          + 'both</td><td>&nbsp;</td></tr><tr><td>The same date in '
          + 'both</td><td>&nbsp;</td></tr><tr><td>An "if no" in '
          + 'both</td><td>&nbsp;</td></tr><tr><td>Only the register '
          + 'changed</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample band 3 feedback: "The box says the facts and the date '
              + 'never change. Both of yours carry the 14th and the four a.m. — '
              + 'so the only thing I would ask is whether the colleague version '
              + 'needs not Wednesday morning at all, since he has the date."',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Ask one question: if both readers compared these, would '
          + 'anything embarrass the writer? Tick ✓ or cross ✗.',
        grammar: 'The same message, two registers',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (22.6) '
          + 'teaches: The same message, two registers. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        must: ['Writing the same message twice — the method: write the facts, the '
          + 'date and the "if no" first, in a list. Then write each version '
          + 'around that list, changing only the opening, the amount explained, '
          + 'the request form and the closing.',
        'Writing the list first is what keeps the two versions honest. Most '
          + 'people write the friendly one and then dress it up, and in the '
          + 'dressing up a date moves.',
        'Both versions carry an "if no". To a colleague it is an offer of '
          + 'help; to a bank it is an alternative that is cheap for them. Same '
          + 'purpose, different shape.',
        '⚠ Inside the company: an instruction, a first name, no signature '
          + 'block. Outside: a question, a title, the full block. Neither is more '
          + 'polite than the other; they are aimed at different distances.'],
        vocab: ['message',
        'registers',
        'formal',
        'means',
        'explained',
        'words',
        'everything',
        'reader',
        'cannot',
        'assumed'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'own',
      ref: '22.6.6R',
      bookRef: 'Unit 22 · 22.6 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read both of their versions. The class listens only '
  + 'for differences in fact or date.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['The same message, two registers',
      'To the warehouse',
      'To the bank',
      'Dear Mr Haddad,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The same message, two registers.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '22.6.7',
      bookRef: 'Unit 22 · 22.6 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a time two versions of the same thing did not match (60 to 100 '
  + 'words). It can be at work or not. Say what differed, who noticed, and what '
  + 'it cost.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      meter: {
        label: 'words from this lesson',
        words: ['message',
        'registers',
        'formal',
        'means',
        'explained',
        'words',
        'everything',
        'reader']
      },
      coach: {
        title: 'What to include',
        task: 'Write about a time two versions of the same thing did not match (60 to 100 '
  + 'words). It can be at work or not. Say what differed, who noticed, and what '
  + 'it cost.',
        criteria: [{ t: 'Writing the same message twice — the method: write the facts, '
              + 'the date and the "if no" first, in a list. Then write each '
              + 'version around that list, changing only the opening, the amount '
              + 'explained, the request form and the closing.' },
            { t: 'Writing the list first is what keeps the two versions honest. '
              + 'Most people write the friendly one and then dress it up, and in '
              + 'the dressing up a date moves.' },
            { t: 'Both versions carry an "if no". To a colleague it is an offer of '
              + 'help; to a bank it is an alternative that is cheap for them. '
              + 'Same purpose, different shape.' },
            { t: '⚠ Inside the company: an instruction, a first name, no signature '
              + 'block. Outside: a question, a title, the full block. Neither is '
              + 'more polite than the other; they are aimed at different '
              + 'distances.' }]
      },
      aiCheck: {
        task: 'Write about a time two versions of the same thing did not match (60 '
          + 'to 100 words). It can be at work or not. Say what differed, who '
          + 'noticed, and what it cost.',
        grammar: 'The same message, two registers',
        must: ['Writing the same message twice — the method: write the facts, the '
          + 'date and the "if no" first, in a list. Then write each version '
          + 'around that list, changing only the opening, the amount explained, '
          + 'the request form and the closing.',
        'Writing the list first is what keeps the two versions honest. Most '
          + 'people write the friendly one and then dress it up, and in the '
          + 'dressing up a date moves.',
        'Both versions carry an "if no". To a colleague it is an offer of '
          + 'help; to a bank it is an alternative that is cheap for them. Same '
          + 'purpose, different shape.',
        '⚠ Inside the company: an instruction, a first name, no signature '
          + 'block. Outside: a question, a title, the full block. Neither is more '
          + 'polite than the other; they are aimed at different distances.'],
        vocab: ['message',
        'registers',
        'formal',
        'means',
        'explained',
        'words',
        'everything',
        'reader',
        'cannot',
        'assumed']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '22.6.7P',
      bookRef: 'Unit 22 · 22.6 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ what differed ✓ was it '
  + 'register or fact? ? was it deliberate?',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "two people in one company had told him two different things" '
              + '✓ was it register or fact? ? Was the extra day deliberate, and '
              + 'did it ever help?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ what differed — ✓ '
          + 'was it register or fact? —? was it deliberate? (The dashes are '
          + 'blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'The same message, two registers',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (22.6) teaches: The same message, two registers. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The same message, two registers.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['message',
        'registers',
        'formal',
        'means',
        'explained',
        'words',
        'everything',
        'reader',
        'cannot',
        'assumed'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The same message, two registers.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '22.6.7R',
      bookRef: 'Unit 22 · 22.6 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. How many differences were deliberate, and how many were '
  + 'carelessness? The second kind is commoner and more damaging.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then take one message you sent to two '
          + 'people this month and check whether the facts and dates matched (35+ '
          + 'words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Sort the three texts into deliberate differences and careless '
              + 'ones. The careless kind is commoner and more damaging, because '
              + 'nobody is watching for it',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The same message, two registers.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
