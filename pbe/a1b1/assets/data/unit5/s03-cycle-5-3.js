/* Unit 5 · cycle 5.3 — Twelve boxes, not twelve.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u5-s03', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 5 · 5.3', part: '5.3',
          section: '3', lesson: 'Twelve boxes, not twelve', title: 'Twelve boxes, not twelve' },
  objective: 'read a quantity and its unit',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '5.3.1',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say five quantities from your work. A number and a thing. Three '
              + 'pallets. Twelve boxes.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the two lines. Which one can you count? 12 · 12 boxes',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '5.3.2',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u5-5-3',
      passage: {
        title: 'Language box',
        html: '<p><b>A number is not a quantity until it has a unit</b></p><table '
          + 'class=\'bk\'><tr><th>Not enough</th><th>A '
          + 'quantity</th></tr><tr><td><b>12</b></td><td><b>12 '
          + 'boxes</b></td></tr><tr><td><b>3</b></td><td><b>3 '
          + 'pallets</b></td></tr><tr><td><b>1</b></td><td><b>1 '
          + 'roll</b></td></tr><tr><td><b>200</b></td><td><b>200 '
          + 'packets</b></td></tr></table><p>⚠ <b>The unit goes AFTER the number, '
          + 'and it takes an -s for more than one:</b> <b>12 box</b>es<b>. 3 '
          + 'pallet</b>s<b>.</b> <b>One: <i>1 roll</i>, no -s.</b></p><p>⚠ <b>The '
          + 'same twelve can be boxes or pallets, and the difference is '
          + 'thirty-six boxes.</b> <b>This is the most expensive missing word in '
          + 'the course.</b> <b>Ask. Every time.</b></p><p>⚠ <b>And the sentence '
          + 'that gets you the answer:</b> <i>Twelve what?</i> <b>Two words. Not '
          + 'rude. Ask them.</b></p><p><b>Practise:</b> Write the '
          + 'quantity.</p><p>1 three <i>(pallets)</i> = <span '
          + 'class="blank"></span> 2 one <i>(roll)</i> = <span '
          + 'class="blank"></span> 3 two hundred <i>(packets)</i> = <span '
          + 'class="blank"></span> 4 twelve <i>(box)</i> = <span '
          + 'class="blank"></span></p><p><b>Useful words:</b> Twelve what? · 12 '
          + 'boxes · 3 pallets · four on each · I count…</p><p><b>Sound — the '
          + 'unit at the end.</b> 🔊 <b>Track 5.6</b> Listen. Say it. <i>twelve '
          + 'BOXES · three PALLETS.</i> <b>The unit is the loud part, because the '
          + 'unit is the part people leave out.</b> Say each one four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What came off the lorry?',
            options: [{
              t: '12 boxes',
              ok: false,
              why: 'True but incomplete - the pallets are the part the paper left out.'
            },
            {
              t: '12 pallets',
              ok: false,
              why: 'Twelve is the box count, not the pallet count.'
            },
            {
              t: '12 boxes on 3 pallets',
              ok: true,
              why: 'Twelve boxes, four on each of three pallets.'
            }],
            evidence: 'the driver\'s answer when asked twelve WHAT'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '5.3.2',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many boxes on a pallet?',
            model: 'Four',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What does Ammar count?',
            model: 'Twelve boxes — not the three pallets',
            minWords: 2,
            rows: 2,
            keys: ['twelve',
              'boxes',
              'pallets'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '5.3.3',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One is the driver. One is the storeman. Then change places.',
      scene: 'u5-5-3-pair',
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
        rows: [['twelve · boxes · pallets · three pallets · four on each',
          'two hundred · packets · cartons · ten cartons · twenty on each']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '5.3.3R',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Twelve what?</td><td>☐ 12 '
          + 'boxes</td><td>☐ 3 pallets</td><td>☐ four on each</td><td>☐ I '
          + 'count…</td></tr></table>'
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
      kind: 'model',
      ref: '5.3.4',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Say six quantities from your work. Write it with the unit every time.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Number</th><th>Unit</th><th>In a '
          + 'sentence</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: '40 · trays · We get forty trays every morning · 3 · sacks · '
              + 'Three sacks of flour on Sunday · 200 · bags · Two hundred bags '
              + 'in a box · 1 · lorry · One lorry a week from Homs · 12 · boxes · '
              + 'Twelve boxes of labels · 6 · rolls · Six rolls of tape',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Say six quantities from your work. Write it with the unit every time.',
        grammar: 'A number is not a quantity until it has a unit',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (5.3) teaches: A number is not a quantity until it has a unit. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: A number is not a quantity until it has a unit.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '5.3.4R',
      bookRef: 'Unit 5 · 5.3 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: We get every week. They come on , on each.',
      questions: [{
            q: 'Write what you told the class.',
            model: 'We get forty trays every week. They come on four pallets, ten on each',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — We get — every week. They come on —, — on each. '
          + '(The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'A number is not a quantity until it has a unit',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (5.3) teaches: A '
          + 'number is not a quantity until it has a unit. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: A number is not a quantity until it has a unit.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '5.3.5',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the middle of the real note. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>BEIRUT PACKAGING CO. — note no. 4417</b></p><table '
          + 'class=\'bk\'><tr><th>Line</th><th>Goods</th><th>Quantity</th><th>Unit</th></tr><tr><td><b>1</b></td><td>labels, '
          + 'white</td><td><b>12</b></td><td><b>boxes</b></td></tr><tr><td><b>2</b></td><td>labels, '
          + 'yellow</td><td><b>4</b></td><td><b>boxes</b></td></tr><tr><td><b>3</b></td><td>tape</td><td><b>6</b></td><td><b>rolls</b></td></tr><tr><td><b>4</b></td><td>bags</td><td><b>200</b></td><td><b>packets</b></td></tr></table><p><b>Total '
          + 'lines: 4.</b> ⚠ <b>Total boxes: 16. Count the boxes, not the '
          + 'lines.</b></p><h4>Writer\'s box</h4><p><b>A quantity line has three '
          + 'parts:</b> the goods → the number → <b>the unit</b>, in three '
          + 'separate columns.</p><p>⚠ <b>Separate columns, not one box.</b> '
          + '<b><i>12 boxes</i> in one column can be read as a quantity of '
          + 'twelve-boxes.</b> <b>Two columns cannot be misread.</b></p><p>⚠ '
          + '<b>Put the total at the bottom, and say WHICH total.</b> <i>Total '
          + 'lines: 4. Total boxes: 16.</i> <b>A note that says <i>total: 4</i> '
          + 'has told you about its own layout, not about the lorry.</b></p>'
      },
      questions: [{
            q: 'How many rolls of tape?',
            model: 'Six',
            minWords: 1,
            rows: 2
          },
      {
            q: 'How many boxes of labels altogether?',
            model: 'Sixteen — twelve white and four yellow',
            minWords: 2,
            rows: 2,
            keys: ['sixteen',
              'twelve',
              'white',
              'yellow'],
            need: 1
          },
      {
            q: 'Why does the note say count the boxes, not the lines?',
            model: 'Because four lines can hold sixteen boxes, and a man who counts '
              + 'the lines counts four',
            minWords: 5,
            rows: 2,
            keys: ['because',
              'hold',
              'sixteen',
              'man'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '5.3.6',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write the goods lines of a delivery note for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      passage: {
        title: 'From the book',
        html: '<table '
          + 'class=\'bk\'><tr><th>Line</th><th>Goods</th><th>Quantity</th><th>Unit</th></tr><tr><td><b>1</b></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><b>2</b></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><b>3</b></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><b>4</b></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      model: ['Total lines: 4'],
      meter: {
        label: 'words from this lesson',
        words: ['number',
        'quantity',
        'until',
        'unit',
        'after',
        'than',
        'boxes',
        'pallets']
      },
      coach: {
        title: 'What to include',
        task: 'Write the goods lines of a delivery note for your own work (15 words or more).',
        criteria: [{ t: 'A quantity line has three parts: the goods → the number → the '
              + 'unit, in three separate columns.' },
            { t: '⚠ Separate columns, not one box. 12 boxes in one column can be '
              + 'read as a quantity of twelve-boxes. Two columns cannot be '
              + 'misread.' },
            { t: '⚠ Put the total at the bottom, and say WHICH total. Total lines: '
              + '4. Total boxes: 16. A note that says total: 4 has told you about '
              + 'its own layout, not about the lorry.' }]
      },
      aiCheck: {
        task: 'Write the goods lines of a delivery note for your own work (15 words or more).',
        grammar: 'A number is not a quantity until it has a unit',
        must: ['A quantity line has three parts: the goods → the number → the unit, '
          + 'in three separate columns.',
        '⚠ Separate columns, not one box. 12 boxes in one column can be read '
          + 'as a quantity of twelve-boxes. Two columns cannot be misread.',
        '⚠ Put the total at the bottom, and say WHICH total. Total lines: 4. '
          + 'Total boxes: 16. A note that says total: 4 has told you about its '
          + 'own layout, not about the lorry.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '5.3.6P',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>A '
          + 'unit on every line</td><td>&nbsp;</td></tr><tr><td>The number and '
          + 'the unit in separate columns</td><td>&nbsp;</td></tr><tr><td>A total '
          + 'that names what it is counting</td><td>&nbsp;</td></tr><tr><td>An -s '
          + 'on the unit where there is more than '
          + 'one</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "200" · (pointing) at the bottom. '
              + '(reading) "Total: 4"',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'A number is not a quantity until it has a unit',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (5.3) '
          + 'teaches: A number is not a quantity until it has a unit. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        must: ['A quantity line has three parts: the goods → the number → the unit, '
          + 'in three separate columns.',
        '⚠ Separate columns, not one box. 12 boxes in one column can be read '
          + 'as a quantity of twelve-boxes. Two columns cannot be misread.',
        '⚠ Put the total at the bottom, and say WHICH total. Total lines: 4. '
          + 'Total boxes: 16. A note that says total: 4 has told you about its '
          + 'own layout, not about the lorry.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '5.3.6R',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read one line. The class asks what? if the unit is missing.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '5.3.7',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about the quantities at your work (<b>20 to 35 words</b>). What unit '
  + 'do you count in? Has a number ever been counted in the wrong unit? What '
  + 'happened?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['We count in trays. The bakery counts in loaves, forty loaves to a '
        + 'tray. Once we ordered two hundred and they sent two hundred loaves, '
        + 'not two hundred trays. Five trays'],
      stems: ['We count in…',
      'The bakery counts…',
      'Once we ordered…'],
      meter: {
        label: 'words from this lesson',
        words: ['number',
        'quantity',
        'until',
        'unit',
        'after',
        'than',
        'boxes',
        'pallets']
      },
      coach: {
        title: 'What to include',
        task: 'Write about the quantities at your work (20 to 35 words). What unit do you '
  + 'count in? Has a number ever been counted in the wrong unit? What happened?',
        criteria: [{ t: 'A quantity line has three parts: the goods → the number → the '
              + 'unit, in three separate columns.' },
            { t: '⚠ Separate columns, not one box. 12 boxes in one column can be '
              + 'read as a quantity of twelve-boxes. Two columns cannot be '
              + 'misread.' },
            { t: '⚠ Put the total at the bottom, and say WHICH total. Total lines: '
              + '4. Total boxes: 16. A note that says total: 4 has told you about '
              + 'its own layout, not about the lorry.' }]
      },
      aiCheck: {
        task: 'Write about the quantities at your work (20 to 35 words). What unit '
          + 'do you count in? Has a number ever been counted in the wrong unit? '
          + 'What happened?',
        grammar: 'A number is not a quantity until it has a unit',
        must: ['A quantity line has three parts: the goods → the number → the unit, '
          + 'in three separate columns.',
        '⚠ Separate columns, not one box. 12 boxes in one column can be read '
          + 'as a quantity of twelve-boxes. Two columns cannot be misread.',
        '⚠ Put the total at the bottom, and say WHICH total. Total lines: 4. '
          + 'Total boxes: 16. A note that says total: 4 has told you about its '
          + 'own layout, not about the lorry.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '5.3.7P',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: How many in one of those? Write '
  + 'the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'How many in one of those? — Forty loaves in a tray. Ten trays on a rack',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: How many in one of '
          + 'those? Write the answer.',
        grammar: 'A number is not a quantity until it has a unit',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (5.3) teaches: A number is not a quantity until it has a unit. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: A number is not a quantity until it has a unit.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '5.3.7R',
      bookRef: 'Unit 5 · 5.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many different units does this class count in? Count '
  + 'them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> eight quantities from '
          + 'your work, with the unit on every one (20 words or more).</p>'
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
