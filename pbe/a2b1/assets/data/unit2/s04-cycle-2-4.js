/* Unit 2 · cycle 2.4 — I'm working on the Homs order.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u2-s04', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 2 · 2.4', part: '2.4',
          section: '4', lesson: 'I\'m working on the Homs order', title: 'I\'m working on the Homs order' },
  objective: 'say what you are doing now, and what a colleague is doing',
  study: {
    minutes: 90,
    objective: 'say what you are doing now, and what a colleague is doing',
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
    task: 'Write what you say when the manager asks what you are working on right now.',
    weak: 'The order.',
    change: ['Use the <i>-ing</i> form for the job in your hands this minute: '
          + '<i>I\'m working on…</i>.',
        'Name which order. <i>The order</i> is six orders.'],
    better: 'I\'m working on the Homs order. It goes out this afternoon.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '2.4.1',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Look around the room. Say three things: Somebody is . Two people '
              + 'are . Nobody is .',
            model: 'Open. Sample: Somebody is writing. Two people are talking. '
              + 'Nobody is sleeping',
            minWords: 4,
            rows: 2,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          },
      {
            q: 'Which sentence is about now and which is about every day? 1 I '
              + 'check the email at nine. · 2 I\'m checking the email now. · 3 '
              + 'She works in accounts. · 4 She\'s working in the warehouse this '
              + 'week.',
            model: 'Now:',
            minWords: 1,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '2.4.2',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-4',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – present continuous (now, and this '
          + 'week)</b></p><table '
          + 'class=\'bk\'><tr><th>+</th><th>–</th><th>?</th></tr><tr><td>I <b>\'m '
          + 'working</b> on the Homs order.</td><td>I <b>\'m not</b> working on '
          + 'the invoices.</td><td><b>Am</b> I working too '
          + 'slowly?</td></tr><tr><td>He <b>\'s driving</b> to Homs.</td><td>She '
          + '<b>isn\'t</b> sitting at her desk.</td><td><b>Is</b> Nadia in? – '
          + 'Yes, she is.</td></tr><tr><td>They <b>\'re loading</b> the '
          + 'van.</td><td>They <b>aren\'t</b> closing yet.</td><td><b>Are</b> you '
          + 'busy? – A little.</td></tr></table><p><b>Spelling:</b> work → '
          + 'work<b>ing</b> · driv<b>e</b> → driv<b>ing</b> · s<b>it</b> → '
          + 'si<b>tt</b>ing · ru<b>n</b> → ru<b>nn</b>ing</p><p>⚠ <b>Now</b> or '
          + '<b>around now</b> → present continuous: <i>She\'s doing the '
          + 'month-end <b>this week</b>.</i> <b>Every day</b> → present simple: '
          + '<i>She <b>does</b> the month-end <b>every '
          + 'month</b>.</i></p><p><b>Practise:</b> Present simple or present '
          + 'continuous?</p><p>1 Nour <span class="blank"></span> (work) on the '
          + 'Homs order at the moment. 2 She usually <span class="blank"></span> '
          + '(start) at eight. 3 Look — Abu Yasser <span class="blank"></span> '
          + '(count) the boxes. 4 Bassel <span class="blank"></span> (not work) '
          + 'in the office on Sundays. 5 They <span class="blank"></span> (load) '
          + 'the van now.</p><p><b>Useful phrases:</b> Are you busy? · A little. '
          + '· I\'m working on… · He isn\'t answering. · She\'s doing the '
          + 'month-end. · Everything is moving.</p><p><b>Pronunciation – weak '
          + 'forms.</b> 🔊 <b>Track 2.8</b> Listen and repeat: <i>I\'m working</i> '
          + '/aɪm ˈwɜːkɪŋ/ · <i>he\'s driving</i> /hiːz ˈdraɪvɪŋ/ · <i>are you '
          + 'busy?</i> /ə juː ˈbɪzi/ · <i>they\'re loading</i> /ðeə ˈləʊdɪŋ/</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Why does Mr Ayoub come to Nour\'s desk?',
            options: [{
              t: 'he wants the Homs order',
              ok: true,
              why: 'He asks whether she is busy, hears which order it is, and says good.'
            },
            {
              t: 'he wants a coffee',
              ok: false,
              why: 'Nothing is offered or drunk in this scene.'
            },
            {
              t: 'he wants to meet a customer',
              ok: false,
              why: 'A customer is being met at eleven, which is why this is '
                + 'tempting - but Bassel is meeting him, in another city.'
            }],
            evidence: 'the first two lines, and the word Mr Ayoub says when Nour names '
              + 'what she is doing'
          },
        {
            q: 'Books closed. Listen. Where is Nadia?',
            options: [{
              t: 'in the small room, doing the month-end',
              ok: true,
              why: 'Nour says she is here but not at her desk, and why.'
            },
            {
              t: 'at her desk',
              ok: false,
              why: 'Nour rules this out in the same breath: Nadia is in the '
                + 'building, but her desk is empty this week.'
            },
            {
              t: 'in Homs',
              ok: false,
              why: 'Bassel is driving to Homs. Nadia is in the building.'
            }],
            evidence: 'Nour\'s answer about the month-end'
          },
        {
            q: 'What are they doing in the warehouse while this conversation happens?',
            options: [{
              t: 'loading the small van',
              ok: true,
              why: '"They\'re loading the small van now", with Abu Yasser counting '
                + 'boxes at the gate.'
            },
            {
              t: 'counting the stock for the month',
              ok: false,
              why: 'The month-end is Nadia\'s, in the office. The warehouse is loading.'
            },
            {
              t: 'meeting a customer at eleven',
              ok: false,
              why: 'That is Bassel, in Homs, with Mr Tarabishi\'s cousin.'
            }],
            evidence: 'Nour\'s last answer'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '2.4.2',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Present simple or present continuous?',
      text: '<b>1</b> Nour [[1]] (work) on the Homs order at the moment. &nbsp; '
      + '<b>2</b> She usually [[2]] (start) at eight. &nbsp; <b>3</b> Look — Abu '
      + 'Yasser [[3]] (count) the boxes. &nbsp; <b>4</b> Bassel [[4]] (not work) '
      + 'in the office on Sundays. &nbsp; <b>5</b> They [[5]] (load) the van now.',
      plain: true,
      small: true,
      answers: {
        '1': ['is working'],
        '2': ['starts'],
        '3': ['is counting'],
        '4': ['doesn\'t work'],
        '5': ['are loading']
      }
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '2.4.2',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is Nour doing?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>Nour</i> in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What is Nadia doing this week?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with <i>Nadia</i> in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '2.4.3',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A is looking for somebody; B says where they are and what '
  + 'they are doing. Use the skeleton, then the role cards.',
      scene: 'u2-2-4-pair',
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
        head: ['Role card 1',
        'Role card 2'],
        rows: [['You are in the office. Nadia: small room, month-end. Bassel: on '
            + 'the road to Aleppo. The warehouse: checking a delivery.',
          'You are at the trade counter. Mr Ayoub: in a meeting. Abu Yasser: '
            + 'moving the pallets. Two drivers: waiting outside.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '2.4.3R',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Are you busy?</td><td>☐ A '
          + 'little.</td><td>☐ I\'m working on…</td><td>☐ He isn\'t '
          + 'answering.</td><td>☐ She\'s doing…</td><td>☐ They\'re '
          + 'loading…</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write what two of the people are doing now. Typical '
              + 'errors: She working → She is working; He is drive → He is '
              + 'driving; I am working every day → I work every day',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – present continuous (now, and this week).',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '2.4.4',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Telephone three colleagues (stand back to back). Ask what they are doing now '
  + 'and what they are working on this week. Make notes.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Name</th><th>Doing now</th><th>Working '
          + 'on this '
          + 'week</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Dear Mr Ayoub,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Telephone three colleagues (stand back to back). Ask what they are '
          + 'doing now and what they are working on this week. Make notes.',
        grammar: 'Grammar – present continuous (now, and this week)',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (2.4) teaches: Grammar – present continuous (now, and this '
          + 'week). Judge the language against THAT and against nothing the '
          + 'course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – present continuous (now, and this week).',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'present',
        'continuous',
        'week',
        'spelling',
        'work',
        'working',
        'drive',
        'driving',
        'sitting']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – present continuous (now, and this week).',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '2.4.4R',
      bookRef: 'Unit 2 · 2.4 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: is at the moment. This week he / she is .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Dear Mr Ayoub,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — is — at the moment. This week he / she is —. (The '
          + 'dashes are blanks the learner fills in with their own workplace. '
          + 'Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – present continuous (now, and this week)',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (2.4) teaches: '
          + 'Grammar – present continuous (now, and this week). Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – present continuous (now, and this week).',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'present',
        'continuous',
        'week',
        'spelling',
        'work',
        'working',
        'drive',
        'driving',
        'sitting'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – present continuous (now, and this week).',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '2.4.5',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Mr Ayoub asks for a short update by email on Monday afternoon. Read Nour\'s '
  + 'reply and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>To:</b> Mr Ayoub <b>From:</b> Nour Mansour <b>Subject:</b> '
          + 'Monday update</p><p>Dear Mr Ayoub,</p><p>I\'m working on the Homs '
          + 'order now; it is ready for your signature this afternoon. Nadia is '
          + 'doing the month-end this week, so she is in the small room until '
          + 'Wednesday. Bassel is driving to Homs and he is meeting the customer '
          + 'at eleven. In the warehouse they are loading the small van, and Abu '
          + 'Yasser is counting the boxes at the gate.</p><p>I am not working on '
          + 'the Aleppo invoices today. I will start them '
          + 'tomorrow.</p><p>Nour</p><h4>Writer\'s box</h4><p><b>Shape of a short '
          + 'update:</b> subject line → greeting → what <b>I</b> am doing → what '
          + '<b>others</b> are doing → one thing that is <b>not</b> happening → '
          + 'your name.</p><p>A good update answers the question the manager has '
          + '<b>not</b> asked yet: <i>when will it be ready?</i></p><p>Use the '
          + 'present continuous all through: <i>I\'m working… · she is doing… · '
          + 'they are loading…</i></p><p>⚠ Say what is <b>not</b> happening too. '
          + 'A manager who reads only good news stops trusting the update.</p>'
      },
      questions: [{
            q: 'What will be ready this afternoon?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>afternoon</i> in it.'
          },
      {
            q: 'Where is Nadia working this week, and until when?',
            minWords: 6,
            rows: 2,
            hint: 'A place - a room, a floor, a town. Look in the text above for '
              + 'the line with <i>Nadia</i> in it.'
          },
      {
            q: 'What is Nour not doing today?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>Nour</i> in it.'
          }],
      ideas: ['Dear Mr Ayoub,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '2.4.6',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a short update for <b>your</b> manager (25 words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'present',
        'continuous',
        'week',
        'spelling',
        'work',
        'working',
        'drive']
      },
      coach: {
        title: 'What to include',
        task: 'Write a short update for your manager (25 words or more). Use the frame.',
        criteria: [{ t: 'Shape of a short update: subject line → greeting → what I am '
              + 'doing → what others are doing → one thing that is not happening '
              + '→ your name.' },
            { t: 'A good update answers the question the manager has not asked '
              + 'yet: when will it be ready?' },
            { t: 'Use the present continuous all through: I\'m working… · she is '
              + 'doing… · they are loading…' },
            { t: '⚠ Say what is not happening too. A manager who reads only good '
              + 'news stops trusting the update.' }]
      },
      aiCheck: {
        task: 'Write a short update for your manager (25 words or more). Use the frame.',
        grammar: 'Grammar – present continuous (now, and this week)',
        must: ['Shape of a short update: subject line → greeting → what I am doing → '
          + 'what others are doing → one thing that is not happening → your name.',
        'A good update answers the question the manager has not asked yet: '
          + 'when will it be ready?',
        'Use the present continuous all through: I\'m working… · she is '
          + 'doing… · they are loading…',
        '⚠ Say what is not happening too. A manager who reads only good news '
          + 'stops trusting the update.'],
        vocab: ['grammar',
        'present',
        'continuous',
        'week',
        'spelling',
        'work',
        'working',
        'drive',
        'driving',
        'sitting']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '2.4.6P',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Read your partner\'s update. Tick ✓ or cross ✗. Underline one '
  + 'thing to fix.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td><i>am / is / are</i> + <b>-ing</b> in every '
          + 'sentence about now</td><td>&nbsp;</td></tr><tr><td>Something about '
          + '<b>you</b> and something about <b>somebody '
          + 'else</b></td><td>&nbsp;</td></tr><tr><td>One negative sentence (<i>I '
          + 'am not…</i>)</td><td>&nbsp;</td></tr><tr><td>A time: <i>this '
          + 'afternoon · this week · until '
          + 'Wednesday</i></td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample feedback: "The update is easy to read. Can you add when '
              + 'the order will be ready?"',
            minWords: 5,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Read your partner\'s update. Tick ✓ or cross ✗. '
          + 'Underline one thing to fix.',
        grammar: 'Grammar – present continuous (now, and this week)',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (2.4) '
          + 'teaches: Grammar – present continuous (now, and this week). Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        must: ['Shape of a short update: subject line → greeting → what I am doing → '
          + 'what others are doing → one thing that is not happening → your name.',
        'A good update answers the question the manager has not asked yet: '
          + 'when will it be ready?',
        'Use the present continuous all through: I\'m working… · she is '
          + 'doing… · they are loading…',
        '⚠ Say what is not happening too. A manager who reads only good news '
          + 'stops trusting the update.'],
        vocab: ['grammar',
        'present',
        'continuous',
        'week',
        'spelling',
        'work',
        'working',
        'drive',
        'driving',
        'sitting'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '2.4.6R',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read one sentence before and after the fix. The class '
  + 'says what changed.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Before: I work on the Aleppo order now. → After: I\'m working on '
              + 'the Aleppo order now. (now → present continuous)',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – present continuous (now, and this week).',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '2.4.7',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write an update for the end of <b>today</b> (35 words or more): what you are '
  + 'finishing now, what a colleague is doing, and one thing that is waiting '
  + 'until tomorrow.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'present',
        'continuous',
        'week',
        'spelling',
        'work',
        'working',
        'drive']
      },
      coach: {
        title: 'What to include',
        task: 'Write an update for the end of today (35 words or more): what you are '
  + 'finishing now, what a colleague is doing, and one thing that is waiting '
  + 'until tomorrow.',
        criteria: [{ t: 'Shape of a short update: subject line → greeting → what I am '
              + 'doing → what others are doing → one thing that is not happening '
              + '→ your name.' },
            { t: 'A good update answers the question the manager has not asked '
              + 'yet: when will it be ready?' },
            { t: 'Use the present continuous all through: I\'m working… · she is '
              + 'doing… · they are loading…' },
            { t: '⚠ Say what is not happening too. A manager who reads only good '
              + 'news stops trusting the update.' }]
      },
      aiCheck: {
        task: 'Write an update for the end of today (35 words or more): what you '
          + 'are finishing now, what a colleague is doing, and one thing that is '
          + 'waiting until tomorrow.',
        grammar: 'Grammar – present continuous (now, and this week)',
        must: ['Shape of a short update: subject line → greeting → what I am doing → '
          + 'what others are doing → one thing that is not happening → your name.',
        'A good update answers the question the manager has not asked yet: '
          + 'when will it be ready?',
        'Use the present continuous all through: I\'m working… · she is '
          + 'doing… · they are loading…',
        '⚠ Say what is not happening too. A manager who reads only good news '
          + 'stops trusting the update.'],
        vocab: ['grammar',
        'present',
        'continuous',
        'week',
        'spelling',
        'work',
        'working',
        'drive',
        'driving',
        'sitting']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '2.4.7P',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s update as the manager. Write on a slip: ★ This is '
  + 'clear. ✓ When will it be ready? ? a question about one job',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ This is clear — I know what is waiting. ✓ When will the Aleppo '
              + 'invoices be ready? ? Is the stock figure going up or down?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s update as the manager. Write on a slip: — ★ '
          + 'This is clear. — ✓ When will it be ready? —? a question about one '
          + 'job (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – present continuous (now, and this week)',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (2.4) teaches: Grammar – present continuous (now, and this '
          + 'week). Judge the language against THAT and against nothing the '
          + 'course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – present continuous (now, and this week).',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'present',
        'continuous',
        'week',
        'spelling',
        'work',
        'working',
        'drive',
        'driving',
        'sitting'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – present continuous (now, and this week).',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '2.4.7R',
      bookRef: 'Unit 2 · 2.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three updates. Which one could the manager read in ten seconds and '
  + 'still know everything? Say why.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final update. Then write four sentences about what the '
          + 'people in your home are doing <b>now</b>, and four about what they '
          + 'do <b>every day</b> (25+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'The ten-second update is the one with one sentence for each '
              + 'person and a time in every sentence. Long explanations belong in '
              + 'a different email',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – present continuous (now, and this week).',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
