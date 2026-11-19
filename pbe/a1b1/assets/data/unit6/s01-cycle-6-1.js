/* Unit 6 · cycle 6.1 — Sham Trading, good morning.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u6-s01', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 6 · 6.1', part: '6.1',
          section: '1', lesson: 'Sham Trading, good morning', title: 'Sham Trading, good morning' },
  objective: 'answer the telephone',
  cards: [
    {
      id: 'c1',
      ref: '6.1.1',
      bookRef: 'Unit 6 · 6.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'How do you answer the telephone at work now? Say it in Arabic. '
              + 'Your teacher writes the English.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Say your company name slowly, three times. Your partner writes '
              + 'it. Check it.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '6.1.2',
      bookRef: 'Unit 6 · 6.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u6-6-1',
      passage: {
        title: 'Language box',
        html: '<p><b>Answering: three things, in this order</b></p><table '
          + 'class=\'bk\'><tr><th></th><th>What you '
          + 'say</th><th>Why</th></tr><tr><td><b>1</b></td><td><b>the company '
          + 'name</b></td><td>the caller knows he has the right '
          + 'place</td></tr><tr><td><b>2</b></td><td><b>good morning / good '
          + 'afternoon</b></td><td>it gives him a second to '
          + 'start</td></tr><tr><td><b>3</b></td><td><b>nothing — you stop and '
          + 'listen</b></td><td>⚠ <b>the caller tells you what he '
          + 'wants</b></td></tr></table><p>⚠ <b>Say it SLOWLY.</b> <b>Your '
          + 'company name is two or three words you say forty times a day and the '
          + 'caller has never heard them once.</b> <b>Slowly is not polite. It is '
          + 'useful.</b></p><p>⚠ <b><i>good morning</i> before twelve · <i>good '
          + 'afternoon</i> after twelve.</b> <b>If you are not sure, say <i>good '
          + 'morning</i>. Nobody has ever complained.</b></p><p>⚠ <b>Then '
          + 'STOP.</b> <b>The hardest part of answering a telephone in a language '
          + 'you are learning is not talking.</b> <b>The caller will tell you '
          + 'what he wants if you give him two seconds of '
          + 'silence.</b></p><p><b>Practise:</b> Write the answer.</p><p>1 It is '
          + '9.00. You answer: <span class="blank"></span>. 2 It is 2.00. You '
          + 'answer: <span class="blank"></span>. 3 You did not understand. You '
          + 'say: <span class="blank"></span>.</p><p><b>Useful words:</b> Sham '
          + 'Trading, good morning. · good afternoon · Sorry? · Again, please. · '
          + 'Then stop and listen.</p><p><b>Sound — the company name, slowly.</b> '
          + '🔊 <b>Track 6.2</b> Listen. <i>Sham… Trading. Good morning.</i> <b>A '
          + 'small gap between the two words of the name.</b> <b>Say your own '
          + 'company name with a gap in it. Four times.</b></p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Ammar say first?',
            options: [{
              t: 'hello',
              ok: false
            },
            {
              t: 'the company name',
              ok: true,
              why: 'the company name'
            },
            {
              t: 'his own name',
              ok: false
            }]
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '6.1.2',
      bookRef: 'Unit 6 · 6.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What three things are in his answer?',
            model: 'The company, good morning, and then silence',
            minWords: 2,
            rows: 2
          },
      {
            q: 'Why does Nour say slowly?',
            model: 'Because Sham Trading is two words the caller has never heard, '
              + 'even though Ammar will say them forty times a day',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '6.1.3',
      bookRef: 'Unit 6 · 6.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      instruction: 'Work in pairs, back to back — you cannot see each other, like a real '
  + 'telephone. Then change places.',
      scene: 'u6-6-1-pair',
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
        head: ['Card 1',
        'Card 2'],
        rows: [['Sham Trading · morning · 9.00',
          'Barada Stores · afternoon · 2.30']]
      }
    },
    {
      id: 'c5',
      ref: '6.1.3R',
      bookRef: 'Unit 6 · 6.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — back to back, books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ [Company], good morning.</td><td>☐ '
          + 'good afternoon</td><td>☐ Sorry?</td><td>☐ Again, please.</td><td>☐ '
          + 'Then stop and listen.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      ref: '6.1.4',
      bookRef: 'Unit 6 · 6.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Answer the telephone for your own work. Say it four times. Your partner '
  + 'writes what they heard. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Time of day</th><th>What I '
          + 'say</th><th>What my partner '
          + 'heard</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'Time of day: 8.00 What I say: Barada Stores, good morning. My '
              + 'partner heard: Barada Stores ✓ · Time of day: 11.30 What I say: '
              + 'Barada Stores, good morning. My partner heard: Baradastores — '
              + 'one word · Time of day: 1.00 What I say: Barada Stores, good '
              + 'afternoon. My partner heard: Barada Stores ✓ · Time of day: 4.00 '
              + 'What I say: Barada Stores, good afternoon. My partner heard: '
              + '"something" Stores',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Answer the telephone for your own work. Say it four times. Your '
          + 'partner writes what they heard. Write it.',
        grammar: 'Answering: three things, in this order',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A telephone card has numbered lines and each line is a sentence you '
          + 'SAY, word for word.',
        '⚠ Write the words, not the idea. Say the company name is an idea. '
          + 'Sham Trading, good morning is a line you can read out loud at eight '
          + 'in the morning with a lorry outside.',
        '⚠ Put the warning in the line it belongs to, not at the bottom. '
          + 'SLOWLY next to line 1, where the man reading it will be looking.',
        '⚠ And the last line is the rule: do not invent a sixth. Five '
          + 'sentences you can say beat fifty you are thinking about.']
      }
    },
    {
      id: 'c7',
      ref: '6.1.4R',
      bookRef: 'Unit 6 · 6.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class your answer — once, slowly. Then: After twelve o\'clock I say .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'Barada Stores, good morning. After twelve o\'clock I say good afternoon',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class your answer — once, slowly. Then: After twelve o\'clock I say .',
        grammar: 'Answering: three things, in this order',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A telephone card has numbered lines and each line is a sentence you '
          + 'SAY, word for word.',
        '⚠ Write the words, not the idea. Say the company name is an idea. '
          + 'Sham Trading, good morning is a line you can read out loud at eight '
          + 'in the morning with a lorry outside.',
        '⚠ Put the warning in the line it belongs to, not at the bottom. '
          + 'SLOWLY next to line 1, where the man reading it will be looking.',
        '⚠ And the last line is the rule: do not invent a sixth. Five '
          + 'sentences you can say beat fifty you are thinking about.']
      }
    },
    {
      id: 'c8',
      ref: '6.1.5',
      bookRef: 'Unit 6 · 6.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the card taped to the store telephone. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>THE STORE TELEPHONE — SAY THIS</b></p><p><b>1</b> <i>Sham '
          + 'Trading, good morning.</i> ⚠ <b>SLOWLY. After 12.00: good '
          + 'afternoon.</b></p><p><b>2</b> Then <b>stop and '
          + 'listen</b>.</p><p><b>3</b> Not sure? <i>Sorry? Again, '
          + 'please.</i></p><p><b>4</b> Need a name? <i>Your name, '
          + 'please.</i></p><p><b>5</b> Need to write? <i>One moment, '
          + 'please.</i></p><p>⚠ <b>These five lines answer every call. Do not '
          + 'invent a sixth. N.M.</b></p><h4>Writer\'s box</h4><p><b>A telephone '
          + 'card has numbered lines and each line is a sentence you SAY, word '
          + 'for word.</b></p><p>⚠ <b>Write the words, not the idea.</b> <i>Say '
          + 'the company name</i> <b>is an idea.</b> <i>Sham Trading, good '
          + 'morning</i> <b>is a line you can read out loud at eight in the '
          + 'morning with a lorry outside.</b></p><p>⚠ <b>Put the warning in the '
          + 'line it belongs to</b>, <b>not at the bottom.</b> <i>SLOWLY</i> '
          + '<b>next to line 1, where the man reading it will be '
          + 'looking.</b></p><p>⚠ <b>And the last line is the rule:</b> <i>do not '
          + 'invent a sixth</i>. <b>Five sentences you can say beat fifty you are '
          + 'thinking about.</b></p>'
      },
      questions: [{
            q: 'What do you say after twelve o\'clock?',
            model: 'Good afternoon',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What is number 2?',
            model: 'Stop and listen',
            minWords: 1,
            rows: 2
          },
      {
            q: 'How many lines are on the card?',
            model: 'Five',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '6.1.6',
      bookRef: 'Unit 6 · 6.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      instruction: 'Write a telephone card for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['THE COUNTER TELEPHONE — SAY THIS',
      '1 Barada Stores, good morning'],
      coach: {
        title: 'What to include',
        task: 'Write a telephone card for your own work (15 words or more).',
        criteria: [{ t: 'A telephone card has numbered lines and each line is a sentence '
              + 'you SAY, word for word.' },
            { t: '⚠ Write the words, not the idea. Say the company name is an '
              + 'idea. Sham Trading, good morning is a line you can read out loud '
              + 'at eight in the morning with a lorry outside.' },
            { t: '⚠ Put the warning in the line it belongs to, not at the bottom. '
              + 'SLOWLY next to line 1, where the man reading it will be looking.' },
            { t: '⚠ And the last line is the rule: do not invent a sixth. Five '
              + 'sentences you can say beat fifty you are thinking about.' }]
      },
      aiCheck: {
        task: 'Write a telephone card for your own work (15 words or more).',
        grammar: 'Answering: three things, in this order',
        must: ['A telephone card has numbered lines and each line is a sentence you '
          + 'SAY, word for word.',
        '⚠ Write the words, not the idea. Say the company name is an idea. '
          + 'Sham Trading, good morning is a line you can read out loud at eight '
          + 'in the morning with a lorry outside.',
        '⚠ Put the warning in the line it belongs to, not at the bottom. '
          + 'SLOWLY next to line 1, where the man reading it will be looking.',
        '⚠ And the last line is the rule: do not invent a sixth. Five '
          + 'sentences you can say beat fifty you are thinking about.']
      }
    },
    {
      id: 'c10',
      ref: '6.1.6P',
      bookRef: 'Unit 6 · 6.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>Every line is words you SAY, not an '
          + 'idea</td><td>&nbsp;</td></tr><tr><td>The warning sits next to its '
          + 'own line</td><td>&nbsp;</td></tr><tr><td>Five lines, '
          + 'numbered</td><td>&nbsp;</td></tr><tr><td>A line for <i>I did not '
          + 'understand</i></td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "Be polite" · (pointing) at the '
              + 'bottom. (reading) nothing about this',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Answering: three things, in this order',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A telephone card has numbered lines and each line is a sentence you '
          + 'SAY, word for word.',
        '⚠ Write the words, not the idea. Say the company name is an idea. '
          + 'Sham Trading, good morning is a line you can read out loud at eight '
          + 'in the morning with a lorry outside.',
        '⚠ Put the warning in the line it belongs to, not at the bottom. '
          + 'SLOWLY next to line 1, where the man reading it will be looking.',
        '⚠ And the last line is the rule: do not invent a sixth. Five '
          + 'sentences you can say beat fifty you are thinking about.']
      }
    },
    {
      id: 'c11',
      ref: '6.1.6R',
      bookRef: 'Unit 6 · 6.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their line 1 out loud. The class says if they could hear '
  + 'the company name.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '6.1.7',
      bookRef: 'Unit 6 · 6.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      instruction: 'Write about the telephone at your work (<b>20 to 35 words</b>). Who answers '
  + 'it? What do they say? What goes wrong?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['At the shop the telephone is by the till and whoever is nearest '
        + 'answers it. Everybody says hello and nothing else. Callers ask twice '
        + 'if it is the right shop'],
      coach: {
        title: 'What to include',
        task: 'Write about the telephone at your work (20 to 35 words). Who answers it? '
  + 'What do they say? What goes wrong?',
        criteria: [{ t: 'A telephone card has numbered lines and each line is a sentence '
              + 'you SAY, word for word.' },
            { t: '⚠ Write the words, not the idea. Say the company name is an '
              + 'idea. Sham Trading, good morning is a line you can read out loud '
              + 'at eight in the morning with a lorry outside.' },
            { t: '⚠ Put the warning in the line it belongs to, not at the bottom. '
              + 'SLOWLY next to line 1, where the man reading it will be looking.' },
            { t: '⚠ And the last line is the rule: do not invent a sixth. Five '
              + 'sentences you can say beat fifty you are thinking about.' }]
      },
      aiCheck: {
        task: 'Write about the telephone at your work (20 to 35 words). Who answers '
          + 'it? What do they say? What goes wrong?',
        grammar: 'Answering: three things, in this order',
        must: ['A telephone card has numbered lines and each line is a sentence you '
          + 'SAY, word for word.',
        '⚠ Write the words, not the idea. Say the company name is an idea. '
          + 'Sham Trading, good morning is a line you can read out loud at eight '
          + 'in the morning with a lorry outside.',
        '⚠ Put the warning in the line it belongs to, not at the bottom. '
          + 'SLOWLY next to line 1, where the man reading it will be looking.',
        '⚠ And the last line is the rule: do not invent a sixth. Five '
          + 'sentences you can say beat fifty you are thinking about.']
      }
    },
    {
      id: 'c13',
      ref: '6.1.7P',
      bookRef: 'Unit 6 · 6.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Who does not want to answer it? '
  + 'Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Who does not want to answer it? — The two new girls. They give it to me',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Who does not want to '
          + 'answer it? Write the answer.',
        grammar: 'Answering: three things, in this order',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A telephone card has numbered lines and each line is a sentence you '
          + 'SAY, word for word.',
        '⚠ Write the words, not the idea. Say the company name is an idea. '
          + 'Sham Trading, good morning is a line you can read out loud at eight '
          + 'in the morning with a lorry outside.',
        '⚠ Put the warning in the line it belongs to, not at the bottom. '
          + 'SLOWLY next to line 1, where the man reading it will be looking.',
        '⚠ And the last line is the rule: do not invent a sixth. Five '
          + 'sentences you can say beat fifty you are thinking about.']
      }
    },
    {
      id: 'c14',
      ref: '6.1.7R',
      bookRef: 'Unit 6 · 6.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many people are afraid of the telephone at work? '
  + 'Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> your own five-line '
          + 'telephone card and tape it to a wall at home (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
