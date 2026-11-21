/* Unit 18 · cycle 18.2 — First open the order screen.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE4.page('u18-s02', {
  book: { source: 'Proactive Business English · A2 Book 2', ref: 'Unit 18 · 18.2', part: '18.2',
          section: '2', lesson: 'First open the order screen', title: 'First open the order screen' },
  objective: 'give instructions in order, so somebody can follow them',
  study: {
    minutes: 90,
    objective: 'give instructions in order, so somebody can follow them',
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
    task: 'Write the first three steps of entering an order, for a new colleague.',
    weak: 'Open the system and enter the order.',
    change: ['Number the steps and name what is clicked, not what is achieved.',
        'Say what to wait for between steps — THEN is where a step goes missing.'],
    better: 'One: open the order screen — the blue tab, not the box icon. Two: type '
      + 'the customer number and wait for the green line. Three: enter the lines, '
      + 'one to a row.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '18.2.1',
      bookRef: 'Unit 18 · 18.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Tell your partner how to make tea the way it is made at your '
              + 'work. Count the steps.',
            model: 'Open. Count the steps; most people say five and produce nine '
              + 'when they write it down',
            minWords: 5,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Which is an instruction and which is a description? You click '
              + 'the middle button. / Click the middle button. Which is easier to '
              + 'follow?',
            model: 'Click the middle button. An instruction is easier to follow than '
              + 'a description of what somebody does',
            minWords: 5,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Your '
              + 'own workplace, not the book\'s. Say it out loud once before you '
              + 'write it - a sentence or two is enough.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '18.2.2',
      bookRef: 'Unit 18 · 18.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u18-18-2',
      passage: {
        title: 'Language box',
        html: '<p><b>Giving instructions – imperatives and order</b></p><table '
          + 'class=\'bk\'><tr><th>Shape</th><th>Example</th></tr><tr><td><b>Imperative</b> '
          + '— the bare verb</td><td><b>Open</b> the Deliveries screen. '
          + '<b>Enter</b> the note number.</td></tr><tr><td>Negative '
          + 'imperative</td><td><b>Do not close</b> it before the green '
          + 'line.</td></tr><tr><td><b>Sequencers</b></td><td><b>First</b> … '
          + '<b>Then</b> … <b>After that</b> … <b>Finally</b> '
          + '…</td></tr><tr><td><b>Numbers</b></td><td><b>One:</b> … <b>Two:</b> '
          + '… <b>Three:</b> …</td></tr><tr><td>Not this, but that</td><td>The '
          + '<b>lorry</b> icon, <b>not</b> the box icon.</td></tr></table><p>⚠ '
          + '<b>Use the bare imperative.</b> <i>Click the middle button</i> — not '
          + '<i>you click</i> and not <i>you should click</i>. An instruction '
          + 'that describes what somebody does is harder to follow than one that '
          + 'tells them to do it.</p><p>⚠ <b>Number the steps; do not join them '
          + 'with <i>and then</i>.</b> <i>Then</i> is the word that hides a step, '
          + 'because two actions get stuck into one sentence and the second one '
          + 'is forgotten. Numbers make that impossible.</p><p>⚠ <b>Name the '
          + 'wrong one as well as the right one.</b> <i>The lorry icon, not the '
          + 'box icon.</i> Every screen has a pair that look alike and every '
          + 'learner picks the wrong one once.</p><p>⚠ Put the <b>warning inside '
          + 'the step it belongs to</b>, not at the end: <i>check the date; it '
          + 'puts today in and your note may be '
          + 'yesterday\'s</i>.</p><p><b>Practise:</b> Give each in numbered '
          + 'steps, with one "not this, that" and one warning. 1 making tea 2 '
          + 'locking up 3 a screen 4 a machine 5 the way to your '
          + 'workplace</p><p><b>Useful phrases:</b> One: open… · not the box icon '
          + '· Everybody gets three wrong. · wait for the green line · "Then" is '
          + 'the word that hides a step.</p><p><b>Pronunciation – the instruction '
          + 'falls.</b> 🔊 <b>Track 18.4</b> Listen: <i><b>Open</b> the Deliveries '
          + 'screen.</i> The voice falls and stops. Said with a rise it sounds '
          + 'like a question, and the listener waits instead of acting. Repeat '
          + 'six.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How many steps are there?',
            options: [{
              t: 'three',
              ok: false,
              why: 'Three is the step everybody gets wrong, said in the middle of the list.'
            },
            {
              t: 'five',
              ok: true,
              why: 'He counts them himself: five steps, where Tuesday was one long sentence.'
            },
            {
              t: 'seven',
              ok: false,
              why: 'No seventh step exists; seven is the hour the course ends in '
                + 'another unit.'
            }],
            evidence: 'Nour\'s numbered instruction, and Fadi\'s count at the end'
          },
        {
            q: 'Books closed. Listen. Which step does everybody get wrong?',
            options: [{
              t: 'the third',
              ok: true,
              why: 'Fadi says it is the one he got wrong, and Nour says everybody does.'
            },
            {
              t: 'the first',
              ok: false,
              why: 'The first is the icon - she heads that off by naming the wrong one.'
            },
            {
              t: 'the fifth',
              ok: false,
              why: 'Five is the number of steps. It is the last, not the hard one.'
            }],
            evidence: 'Nour\'s line after Fadi names it himself'
          },
        {
            q: 'Why did the Tuesday explanation fail?',
            options: [{
              t: 'because it was a paragraph, and ‘then’ hid a step',
              ok: true,
              why: 'She says numbering them makes it impossible to skip one.'
            },
            {
              t: 'because Fadi was not listening',
              ok: false,
              why: 'She blames her own telling - that is her first line of the exchange.'
            },
            {
              t: 'because the screen had changed',
              ok: false,
              why: 'Nothing is said to have changed between Tuesday and now.'
            }],
            evidence: 'Nour\'s last line, about one word'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'own',
      ref: '18.2.2',
      bookRef: 'Unit 18 · 18.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Give each in numbered steps, with one "not this, that" and one '
              + 'warning. 1 making tea 2 locking up 3 a screen 4 a machine 5 the '
              + 'way to your workplace',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '18.2.2',
      bookRef: 'Unit 18 · 18.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is the warning in the middle?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *warning* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What does Nour say about the word "then"?',
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
      ref: '18.2.3',
      bookRef: 'Unit 18 · 18.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A asks to be told again; B gives numbered steps with one '
  + 'warning and one "not this, that". Use the skeleton, then the role cards.',
      scene: 'u18-18-2-pair',
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
        head: ['Role card 1 — locking up',
        'Role card 2 — the goods-in screen'],
        rows: [['Six steps: the back gate, the shutter, the two lights, the alarm, '
            + 'the front door, the key in the box. Warning: the shutter must be '
            + 'fully down before the alarm, or the alarm will not set and you '
            + 'will not know.',
          'Five steps. Not this, that: the delivery number is on the note, '
            + 'not on the box. Warning: count before you enter, not after.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '18.2.3R',
      bookRef: 'Unit 18 · 18.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs give their instructions for the class – without the book. One '
  + 'listener writes them down and reads them back.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ One: open…</td><td>☐ not the box '
          + 'icon</td><td>☐ Do not close it before…</td><td>☐ After '
          + 'that…</td><td>☐ Finally…</td><td>☐ Everybody gets three '
          + 'wrong.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the steps and compare counts. A smaller number '
              + 'means a then hid one. Typical errors: you must to click · after '
              + 'that you clicking · and the content fault of leaving the warning '
              + 'until the end, where it is read as a general remark',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Giving instructions – imperatives and order.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '18.2.4',
      bookRef: 'Unit 18 · 18.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Teach two colleagues something in numbered steps while they write it down. '
  + 'Then read their version and find the step they merged.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What I taught</th><th>My '
          + 'steps</th><th>Their steps</th><th>What got '
          + 'merged</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Giving instructions – imperatives and order',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Teach two colleagues something in numbered steps while they write it '
          + 'down. Then read their version and find the step they merged.',
        grammar: 'Giving instructions – imperatives and order',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (18.2) teaches: Giving instructions – imperatives and order. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Giving instructions – imperatives and order.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['giving',
        'instructions',
        'imperatives',
        'order',
        'bare',
        'imperative',
        'click',
        'middle',
        'button',
        'instruction']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Giving instructions – imperatives and order.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '18.2.4R',
      bookRef: 'Unit 18 · 18.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I taught in steps. They wrote . The step that got merged was .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Giving instructions – imperatives and order',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — I taught — in — steps. They wrote —. The step that '
          + 'got merged was —. (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Giving instructions – imperatives and order',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (18.2) teaches: '
          + 'Giving instructions – imperatives and order. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Giving instructions – imperatives and order.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['giving',
        'instructions',
        'imperatives',
        'order',
        'bare',
        'imperative',
        'click',
        'middle',
        'button',
        'instruction'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Giving instructions – imperatives and order.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '18.2.5',
      bookRef: 'Unit 18 · 18.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the instruction sheet, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>PUTTING A DELIVERY ON THE SCREEN — five '
          + 'steps</b></p><p><i>Written by Fadi, shown by Nour, 2 December. If '
          + 'this is wrong, correct it and put your name on '
          + 'it.</i></p><p><b>1</b> Open <b>Deliveries</b> — the lorry icon, '
          + '<b>not</b> the box icon (the box icon is Goods In).</p><p><b>2</b> '
          + 'Enter the <b>note number</b> from the paper note. It begins with D. '
          + 'The customer number begins with C and will be accepted without a '
          + 'warning.</p><p><b>3</b> <b>Check the date.</b> The screen puts '
          + 'today\'s date in. If you are entering yesterday\'s notes, change it. '
          + '⚠ <b>This is the one everybody gets wrong.</b></p><p><b>4</b> Enter '
          + 'the number of items <b>you delivered</b>, not the number on the '
          + 'note. If they are different, enter what you delivered and tell the '
          + 'office the same day.</p><p><b>5</b> Save with the <b>middle</b> '
          + 'button. Wait for the green line before you close the screen — if you '
          + 'close it first, nothing is saved and nothing tells you.</p><p><i>If '
          + 'you cannot find the delivery afterwards, do not enter it again. Ask. '
          + 'Two deliveries are much harder to remove than '
          + 'one.</i></p><h4>Writer\'s box</h4><p><b>An instruction sheet — the '
          + 'shape:</b> a title with the <b>number of steps</b> → who wrote it, '
          + 'who showed it, the date → numbered steps, one line each → <b>the '
          + 'trap marked</b> → a last line about what to do when it goes '
          + 'wrong.</p><p><b>Every step is an imperative.</b> <i>Open · Enter · '
          + 'Check · Save.</i> The reason goes after it, in brackets or after a '
          + 'dash.</p><p><b>Name the lookalike.</b> <i>The lorry icon, not the '
          + 'box icon</i> · <i>it begins with D; the customer number begins with '
          + 'C.</i> Most mistakes on a screen are two things that look alike, and '
          + 'the sheet exists to say which is which.</p><p>⚠ <b>Say when a '
          + 'failure is silent.</b> <i>If you close it first, nothing is saved '
          + 'and nothing tells you.</i> A silent failure is the most expensive '
          + 'kind, and it is the thing a new person cannot possibly work out '
          + 'alone.</p>'
      },
      questions: [{
            q: 'Which two pairs of things are named as "this, not that"?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with *things* in it.'
          },
      {
            q: 'What happens if you close the screen before the green line, and '
              + 'why is that worth a whole sentence?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Your own '
              + 'workplace, not the book\'s. Say it out loud once before you '
              + 'write it - a sentence or two is enough.'
          },
      {
            q: 'What does the last line stop somebody doing?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with *somebody* in it.'
          }],
      ideas: ['Giving instructions – imperatives and order',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '18.2.6',
      bookRef: 'Unit 18 · 18.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write an instruction sheet for something at your work (35 words or more). '
  + 'Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['giving',
        'instructions',
        'imperatives',
        'order',
        'bare',
        'imperative',
        'click',
        'middle']
      },
      coach: {
        title: 'What to include',
        task: 'Write an instruction sheet for something at your work (35 words or more). '
  + 'Use the frame.',
        criteria: [{ t: 'An instruction sheet — the shape: a title with the number of '
              + 'steps → who wrote it, who showed it, the date → numbered steps, '
              + 'one line each → the trap marked → a last line about what to do '
              + 'when it goes wrong.' },
            { t: 'Every step is an imperative. Open · Enter · Check · Save. The '
              + 'reason goes after it, in brackets or after a dash.' },
            { t: 'Name the lookalike. The lorry icon, not the box icon · it begins '
              + 'with D; the customer number begins with C. Most mistakes on a '
              + 'screen are two things that look alike, and the sheet exists to '
              + 'say which is which.' },
            { t: '⚠ Say when a failure is silent. If you close it first, nothing '
              + 'is saved and nothing tells you. A silent failure is the most '
              + 'expensive kind, and it is the thing a new person cannot possibly '
              + 'work out alone.' }]
      },
      aiCheck: {
        task: 'Write an instruction sheet for something at your work (35 words or '
          + 'more). Use the frame.',
        grammar: 'Giving instructions – imperatives and order',
        must: ['An instruction sheet — the shape: a title with the number of steps → '
          + 'who wrote it, who showed it, the date → numbered steps, one line '
          + 'each → the trap marked → a last line about what to do when it goes '
          + 'wrong.',
        'Every step is an imperative. Open · Enter · Check · Save. The reason '
          + 'goes after it, in brackets or after a dash.',
        'Name the lookalike. The lorry icon, not the box icon · it begins '
          + 'with D; the customer number begins with C. Most mistakes on a screen '
          + 'are two things that look alike, and the sheet exists to say which is '
          + 'which.',
        '⚠ Say when a failure is silent. If you close it first, nothing is '
          + 'saved and nothing tells you. A silent failure is the most expensive '
          + 'kind, and it is the thing a new person cannot possibly work out '
          + 'alone.'],
        vocab: ['giving',
        'instructions',
        'imperatives',
        'order',
        'bare',
        'imperative',
        'click',
        'middle',
        'button',
        'instruction']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '18.2.6P',
      bookRef: 'Unit 18 · 18.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap sheets with another pair and follow one. Tick ✓ or cross ✗ at the step '
  + 'where you stop.',
      passage: {
        title: 'From the book',
        html: '<h4>Band 3 feedback — name the criterion</h4><p>"The box says name '
          + 'the lookalike. Step 2 says <i>enter the number</i> — which number, '
          + 'and what else on the paper could be mistaken for it?"</p><p>Quote, '
          + 'question, stop.</p><table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>Every step an '
          + 'imperative</td><td>&nbsp;</td></tr><tr><td>A lookalike named at '
          + 'least once</td><td>&nbsp;</td></tr><tr><td>The trap '
          + 'marked</td><td>&nbsp;</td></tr><tr><td>A silent failure described, '
          + 'if there is one</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample band 3 feedback: "The box says put the warning inside the '
              + 'step it belongs to, and step 3 does. The one I would look at is '
              + 'step 5 — wait for the two beeps is an action and a warning in '
              + 'one line. Is one beep worth its own last line? You have put it '
              + 'there, so perhaps it is."',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap sheets with another pair and follow one. Tick ✓ or cross ✗ at '
          + 'the step where you stop.',
        grammar: 'Giving instructions – imperatives and order',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (18.2) '
          + 'teaches: Giving instructions – imperatives and order. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        must: ['An instruction sheet — the shape: a title with the number of steps → '
          + 'who wrote it, who showed it, the date → numbered steps, one line '
          + 'each → the trap marked → a last line about what to do when it goes '
          + 'wrong.',
        'Every step is an imperative. Open · Enter · Check · Save. The reason '
          + 'goes after it, in brackets or after a dash.',
        'Name the lookalike. The lorry icon, not the box icon · it begins '
          + 'with D; the customer number begins with C. Most mistakes on a screen '
          + 'are two things that look alike, and the sheet exists to say which is '
          + 'which.',
        '⚠ Say when a failure is silent. If you close it first, nothing is '
          + 'saved and nothing tells you. A silent failure is the most expensive '
          + 'kind, and it is the thing a new person cannot possibly work out '
          + 'alone.'],
        vocab: ['giving',
        'instructions',
        'imperatives',
        'order',
        'bare',
        'imperative',
        'click',
        'middle',
        'button',
        'instruction'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'own',
      ref: '18.2.6R',
      bookRef: 'Unit 18 · 18.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read step 3 of their sheet — the trap. The class says '
  + 'which traps they have fallen into themselves.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Giving instructions – imperatives and order',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Giving instructions – imperatives and order.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '18.2.7',
      bookRef: 'Unit 18 · 18.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write instructions for something nobody at your work has written down (60 to '
  + '100 words). Number the steps, name one lookalike, mark the trap, and say '
  + 'what to do if it goes wrong.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      meter: {
        label: 'words from this lesson',
        words: ['giving',
        'instructions',
        'imperatives',
        'order',
        'bare',
        'imperative',
        'click',
        'middle']
      },
      coach: {
        title: 'What to include',
        task: 'Write instructions for something nobody at your work has written down (60 to '
  + '100 words). Number the steps, name one lookalike, mark the trap, and say '
  + 'what to do if it goes wrong.',
        criteria: [{ t: 'An instruction sheet — the shape: a title with the number of '
              + 'steps → who wrote it, who showed it, the date → numbered steps, '
              + 'one line each → the trap marked → a last line about what to do '
              + 'when it goes wrong.' },
            { t: 'Every step is an imperative. Open · Enter · Check · Save. The '
              + 'reason goes after it, in brackets or after a dash.' },
            { t: 'Name the lookalike. The lorry icon, not the box icon · it begins '
              + 'with D; the customer number begins with C. Most mistakes on a '
              + 'screen are two things that look alike, and the sheet exists to '
              + 'say which is which.' },
            { t: '⚠ Say when a failure is silent. If you close it first, nothing '
              + 'is saved and nothing tells you. A silent failure is the most '
              + 'expensive kind, and it is the thing a new person cannot possibly '
              + 'work out alone.' }]
      },
      aiCheck: {
        task: 'Write instructions for something nobody at your work has written '
          + 'down (60 to 100 words). Number the steps, name one lookalike, mark '
          + 'the trap, and say what to do if it goes wrong.',
        grammar: 'Giving instructions – imperatives and order',
        must: ['An instruction sheet — the shape: a title with the number of steps → '
          + 'who wrote it, who showed it, the date → numbered steps, one line '
          + 'each → the trap marked → a last line about what to do when it goes '
          + 'wrong.',
        'Every step is an imperative. Open · Enter · Check · Save. The reason '
          + 'goes after it, in brackets or after a dash.',
        'Name the lookalike. The lorry icon, not the box icon · it begins '
          + 'with D; the customer number begins with C. Most mistakes on a screen '
          + 'are two things that look alike, and the sheet exists to say which is '
          + 'which.',
        '⚠ Say when a failure is silent. If you close it first, nothing is '
          + 'saved and nothing tells you. A silent failure is the most expensive '
          + 'kind, and it is the thing a new person cannot possibly work out '
          + 'alone.'],
        vocab: ['giving',
        'instructions',
        'imperatives',
        'order',
        'bare',
        'imperative',
        'click',
        'middle',
        'button',
        'instruction']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '18.2.7P',
      bookRef: 'Unit 18 · 18.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ the trap ✓ imperatives '
  + 'throughout? ? where would you keep this sheet?',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "do not buy a new roll" — somebody has done that ✓ imperatives '
              + 'throughout. ? Where will this sheet live?',
            minWords: 5,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ the trap — ✓ '
          + 'imperatives throughout? —? where would you keep this sheet? (The '
          + 'dashes are blanks the learner fills in with their own workplace. '
          + 'Judge what they wrote in them, not the blanks.)',
        grammar: 'Giving instructions – imperatives and order',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (18.2) teaches: Giving instructions – imperatives and order. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Giving instructions – imperatives and order.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['giving',
        'instructions',
        'imperatives',
        'order',
        'bare',
        'imperative',
        'click',
        'middle',
        'button',
        'instruction'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Giving instructions – imperatives and order.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '18.2.7R',
      bookRef: 'Unit 18 · 18.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. Decide, as a class, where such sheets should live at a '
  + 'workplace so that somebody finds them in two years. The answer is never "in '
  + 'an email".',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then follow somebody else\'s instruction '
          + 'sheet exactly, without asking anything, and write down the first '
          + 'step where you stopped (35+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Decide as a class where such sheets should live. The answer is '
              + 'never "in an email"; it is usually taped to the thing itself, '
              + 'and that is worth saying',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Giving instructions – imperatives and order.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
