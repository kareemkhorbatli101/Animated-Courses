/* Unit 4 · cycle 4.1 — In the box, on the shelf, under the bench.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u4-s01', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 4 · 4.1', part: '4.1',
          section: '1', lesson: 'In the box, on the shelf, under the bench', title: 'In the box, on the shelf, under the bench' },
  objective: 'say where a thing is — in, on, under, behind, next to',
  cards: [
    {
      id: 'c1',
      ref: '4.1.1',
      bookRef: 'Unit 4 · 4.1 · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Put your pen in your book. on your book. under your book. Say '
              + 'what you are doing.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Where is your bag? Say it with one of the five words.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '4.1.2',
      bookRef: 'Unit 4 · 4.1 · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u4-4-1',
      passage: {
        title: 'Language box',
        html: '<p><b>The five small words</b></p><table '
          + 'class=\'bk\'><tr><th>Word</th><th>It means</th><th>At '
          + 'work</th></tr><tr><td><b>in</b></td><td>inside</td><td><b>in</b> the '
          + 'box · <b>in</b> the store</td></tr><tr><td><b>on</b></td><td>on top '
          + 'of</td><td><b>on</b> the shelf · <b>on</b> the '
          + 'table</td></tr><tr><td><b>under</b></td><td>below</td><td><b>under</b> '
          + 'the bench · <b>under</b> the '
          + 'pallet</td></tr><tr><td><b>behind</b></td><td>at the back '
          + 'of</td><td><b>behind</b> the door · <b>behind</b> the '
          + 'paper</td></tr><tr><td><b>next to</b></td><td>beside</td><td><b>next '
          + 'to</b> the bench · <b>next to</b> the gate</td></tr></table><p>⚠ '
          + '<b>The word comes BEFORE the thing:</b> <b>on</b> the shelf. '
          + '<b>Not</b> <s>the shelf on</s>.</p><p>⚠ <b><i>in</i> and <i>on</i> '
          + 'are the two that get swapped, and the difference is money.</b> '
          + '<b><i>in</i> the box is inside it; <i>on</i> the box is on the lid '
          + 'where it will fall off.</b></p><p><b>Practise:</b> Write the '
          + 'word.</p><p>1 The labels are <span class="blank"></span> the small '
          + 'box. 2 The box is <span class="blank"></span> the bench. 3 The '
          + 'ladder is <span class="blank"></span> the bench. 4 Put the paper '
          + '<span class="blank"></span> the top shelf.</p><p><b>Useful '
          + 'words:</b> in the box · on the shelf · under the bench · behind the '
          + 'door · next to the gate</p><p><b>Sound — the small words.</b> 🔊 '
          + '<b>Track 4.2</b> Listen. Say it. <b>The small word is QUIET and the '
          + 'thing is LOUD:</b> <i>on the SHELF · under the BENCH.</i> Say each '
          + 'one four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Where is the small box?',
            options: [{
              t: 'on the shelf',
              ok: false
            },
            {
              t: 'under the bench',
              ok: true,
              why: 'under the bench'
            },
            {
              t: 'behind the door',
              ok: false
            }]
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '4.1.2',
      bookRef: 'Unit 4 · 4.1 · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is next to the bench?',
            model: 'A ladder',
            minWords: 1,
            rows: 2
          },
      {
            q: 'Where does Ammar look first?',
            model: 'On the shelf',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '4.1.3',
      bookRef: 'Unit 4 · 4.1 · Practise',
      type: 'roleplay',
      title: 'Practise',
      instruction: 'Work in pairs. One asks. One answers. Then change places.',
      scene: 'u4-4-1-pair',
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
        rows: [['box of labels · on the shelf · in the big box · under the bench',
          'count sheet · on the table · behind the door · in the drawer']]
      }
    },
    {
      id: 'c5',
      ref: '4.1.3R',
      bookRef: 'Unit 4 · 4.1 · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ in the box</td><td>☐ on the '
          + 'shelf</td><td>☐ under the bench</td><td>☐ behind the door</td><td>☐ '
          + 'next to the gate</td></tr></table>'
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
      ref: '4.1.4',
      bookRef: 'Unit 4 · 4.1 · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Say where five things are at your work. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The thing</th><th>Where it '
          + 'is</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'The thing: the count sheets Where it is: on the table, next to '
              + 'the window · The thing: the spare key Where it is: behind the '
              + 'door, on the hook · The thing: the labels Where it is: in the '
              + 'small box, on the top shelf · The thing: the ladder Where it is: '
              + 'next to the long bench · The thing: the old sheets Where it is: '
              + 'under the table, in a green box',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Say where five things are at your work. Write it.',
        grammar: 'The five small words',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A where-things-are note has one line for each thing: the thing → the '
          + 'small word → the place.',
        '⚠ Two small words are better than one. In the small box, on the top '
          + 'shelf. One word tells you the container; two tell you where the '
          + 'container is.',
        '⚠ End with the line that makes the note work: put it back where this '
          + 'paper says. A note that only tells you where to FIND a thing is out '
          + 'of date the first time somebody moves it.']
      }
    },
    {
      id: 'c7',
      ref: '4.1.4R',
      bookRef: 'Unit 4 · 4.1 · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: The is the .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'The spare key is behind the door, on the hook',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: The is the .',
        grammar: 'The five small words',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A where-things-are note has one line for each thing: the thing → the '
          + 'small word → the place.',
        '⚠ Two small words are better than one. In the small box, on the top '
          + 'shelf. One word tells you the container; two tell you where the '
          + 'container is.',
        '⚠ End with the line that makes the note work: put it back where this '
          + 'paper says. A note that only tells you where to FIND a thing is out '
          + 'of date the first time somebody moves it.']
      }
    },
    {
      id: 'c8',
      ref: '4.1.5',
      bookRef: 'Unit 4 · 4.1 · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the note on the small store door. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>SMALL STORE — WHERE THINGS ARE</b></p><p><b>Labels</b> — in '
          + 'the small box, on the top shelf</p><p><b>Count sheets</b> — on the '
          + 'table, next to the window</p><p><b>Ladder</b> — next to the '
          + 'bench</p><p><b>Spare key</b> — behind the door, on the hook</p><p>⚠ '
          + '<b>Put it back where this paper says. A.Y.</b></p><h4>Writer\'s '
          + 'box</h4><p><b>A where-things-are note has one line for each '
          + 'thing:</b> the thing → the small word → the place.</p><p>⚠ <b>Two '
          + 'small words are better than one.</b> <i>In the small box, <b>on the '
          + 'top shelf</b>.</i> <b>One word tells you the container; two tell you '
          + 'where the container is.</b></p><p>⚠ <b>End with the line that makes '
          + 'the note work:</b> <i>put it back where this paper says</i>. <b>A '
          + 'note that only tells you where to FIND a thing is out of date the '
          + 'first time somebody moves it.</b></p>'
      },
      questions: [{
            q: 'Where are the labels?',
            model: 'In the small box, on the top shelf',
            minWords: 2,
            rows: 2
          },
      {
            q: 'What is behind the door?',
            model: 'The spare key, on the hook',
            minWords: 2,
            rows: 2
          },
      {
            q: 'How many places have TWO small words?',
            model: 'Three — labels, count sheets and spare key',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '4.1.6',
      bookRef: 'Unit 4 · 4.1 · Write with help',
      type: 'writer',
      title: 'Write with help',
      instruction: 'Write a where-things-are note for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['BACK STORE — WHERE THINGS ARE',
      'Count sheets — on the table, next to the window'],
      coach: {
        title: 'What to include',
        task: 'Write a where-things-are note for your own work (15 words or more).',
        criteria: [{ t: 'A where-things-are note has one line for each thing: the thing → '
              + 'the small word → the place.' },
            { t: '⚠ Two small words are better than one. In the small box, on the '
              + 'top shelf. One word tells you the container; two tell you where '
              + 'the container is.' },
            { t: '⚠ End with the line that makes the note work: put it back where '
              + 'this paper says. A note that only tells you where to FIND a '
              + 'thing is out of date the first time somebody moves it.' }]
      },
      aiCheck: {
        task: 'Write a where-things-are note for your own work (15 words or more).',
        grammar: 'The five small words',
        must: ['A where-things-are note has one line for each thing: the thing → the '
          + 'small word → the place.',
        '⚠ Two small words are better than one. In the small box, on the top '
          + 'shelf. One word tells you the container; two tell you where the '
          + 'container is.',
        '⚠ End with the line that makes the note work: put it back where this '
          + 'paper says. A note that only tells you where to FIND a thing is out '
          + 'of date the first time somebody moves it.']
      }
    },
    {
      id: 'c10',
      ref: '4.1.6P',
      bookRef: 'Unit 4 · 4.1 · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>A '
          + 'small word on every line</td><td>&nbsp;</td></tr><tr><td>Two small '
          + 'words on at least two lines</td><td>&nbsp;</td></tr><tr><td>The '
          + 'place at the top</td><td>&nbsp;</td></tr><tr><td>The <i>put it '
          + 'back</i> line at the end</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "Ladder — the bench" · (pointing) '
              + 'Here. (reading) "Labels — in the box"',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'The five small words',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A where-things-are note has one line for each thing: the thing → the '
          + 'small word → the place.',
        '⚠ Two small words are better than one. In the small box, on the top '
          + 'shelf. One word tells you the container; two tell you where the '
          + 'container is.',
        '⚠ End with the line that makes the note work: put it back where this '
          + 'paper says. A note that only tells you where to FIND a thing is out '
          + 'of date the first time somebody moves it.']
      }
    },
    {
      id: 'c11',
      ref: '4.1.6R',
      bookRef: 'Unit 4 · 4.1 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read one line. The class says if they could find the thing.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '4.1.7',
      bookRef: 'Unit 4 · 4.1 · Write freely',
      type: 'writer',
      title: 'Write freely',
      instruction: 'Write about where you keep four things at work (<b>20 to 35 words</b>). '
  + 'Which one is hardest to find? Why?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['The count sheets are on the table and the labels are in a small box on '
        + 'the top shelf. The spare key is the hardest. It is behind the door and '
        + 'only three men know'],
      coach: {
        title: 'What to include',
        task: 'Write about where you keep four things at work (20 to 35 words). Which one '
  + 'is hardest to find? Why?',
        criteria: [{ t: 'A where-things-are note has one line for each thing: the thing → '
              + 'the small word → the place.' },
            { t: '⚠ Two small words are better than one. In the small box, on the '
              + 'top shelf. One word tells you the container; two tell you where '
              + 'the container is.' },
            { t: '⚠ End with the line that makes the note work: put it back where '
              + 'this paper says. A note that only tells you where to FIND a '
              + 'thing is out of date the first time somebody moves it.' }]
      },
      aiCheck: {
        task: 'Write about where you keep four things at work (20 to 35 words). '
          + 'Which one is hardest to find? Why?',
        grammar: 'The five small words',
        must: ['A where-things-are note has one line for each thing: the thing → the '
          + 'small word → the place.',
        '⚠ Two small words are better than one. In the small box, on the top '
          + 'shelf. One word tells you the container; two tell you where the '
          + 'container is.',
        '⚠ End with the line that makes the note work: put it back where this '
          + 'paper says. A note that only tells you where to FIND a thing is out '
          + 'of date the first time somebody moves it.']
      }
    },
    {
      id: 'c13',
      ref: '4.1.7P',
      bookRef: 'Unit 4 · 4.1 · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Who else knows where that is? '
  + 'Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Who else knows where that is? — Three men. Not the new ones',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Who else knows where '
          + 'that is? Write the answer.',
        grammar: 'The five small words',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A where-things-are note has one line for each thing: the thing → the '
          + 'small word → the place.',
        '⚠ Two small words are better than one. In the small box, on the top '
          + 'shelf. One word tells you the container; two tell you where the '
          + 'container is.',
        '⚠ End with the line that makes the note work: put it back where this '
          + 'paper says. A note that only tells you where to FIND a thing is out '
          + 'of date the first time somebody moves it.']
      }
    },
    {
      id: 'c14',
      ref: '4.1.7R',
      bookRef: 'Unit 4 · 4.1 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many things does only one person know the place of? '
  + 'Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> where six things are '
          + 'at your work, with two small words each (20 words or more).</p>'
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
