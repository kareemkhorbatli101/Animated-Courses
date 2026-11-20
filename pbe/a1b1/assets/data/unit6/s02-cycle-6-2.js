/* Unit 6 · cycle 6.2 — Your name, please.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u6-s02', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 6 · 6.2', part: '6.2',
          section: '2', lesson: 'Your name, please', title: 'Your name, please' },
  objective: 'ask who is calling, and write a name you cannot spell',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '6.2.1',
      bookRef: 'Unit 6 · 6.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say your surname letter by letter. Your partner writes it. Check '
              + 'it. How many letters?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the two lines. Which is better on a telephone? Who are you? '
              + '· Your name, please.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '6.2.2',
      bookRef: 'Unit 6 · 6.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u6-6-2',
      passage: {
        title: 'Language box',
        html: '<p><b>Getting a name you have never heard</b></p><table '
          + 'class=\'bk\'><tr><th>Step</th><th>What you say</th></tr><tr><td><b>1 '
          + 'ask</b></td><td><b>Your name, please.</b></td></tr><tr><td><b>2 you '
          + 'did not catch it</b></td><td><b>Sorry? Again, '
          + 'please.</b></td></tr><tr><td><b>3 still not sure</b></td><td>⚠ '
          + '<b>Can you spell it, please?</b></td></tr><tr><td><b>4 read it '
          + 'back</b></td><td><b>the letters, then the number of letters, then '
          + 'the name</b></td></tr><tr><td><b>5 they confirm</b></td><td><i>That '
          + 'is it.</i> → <b>Thank you.</b></td></tr></table><p>⚠ <b><i>Your '
          + 'name, please</i> — not <i>Who are you?</i></b> <b><i>Who are '
          + 'you?</i> is a question you ask a stranger in your house.</b> '
          + '<b><i>Your name, please</i> is what an office says, and it is three '
          + 'words.</b></p><p>⚠ <b>Read the letters back AND say how many.</b> '
          + '<i>Eight letters.</i> <b>The number is the check</b> — <b>it is the '
          + 'same count as Unit 1.2 and Unit 2, and it catches a dropped letter '
          + 'that reading alone does not.</b></p><p><b>Practise:</b> Write the '
          + 'line.</p><p>1 You want the caller\'s name. <span '
          + 'class="blank"></span>. 2 You did not hear it. <span '
          + 'class="blank"></span>. 3 You cannot write it. <span '
          + 'class="blank"></span>?</p><p><b>Useful words:</b> Your name, please. '
          + '· Can you spell it, please? · M, O, U… · Eight letters. · That is '
          + 'it.</p><p><b>Sound — the letters, over a telephone.</b> 🔊 <b>Track '
          + '6.4</b> Listen. <b>On a telephone, group the letters in threes with '
          + 'a gap:</b> <i>M, O, U … A, L, L … E, M.</i> <b>Eight letters in one '
          + 'breath cannot be written down.</b> Say it four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Does Ammar get the name?',
            options: [{
              t: 'yes',
              ok: false,
              why: 'He does get it, but not first time.'
            },
            {
              t: 'no',
              ok: false,
              why: 'He gets it in the end - he reads the eight letters back.'
            },
            {
              t: 'yes, after three tries',
              ok: true,
              why: 'Sorry, again, spell it - three goes, and then he reads it back.'
            }],
            evidence: 'how many times the caller is asked to repeat or spell'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '6.2.2',
      bookRef: 'Unit 6 · 6.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does he ask the caller to do?',
            model: 'Spell it',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What does he do at the end?',
            model: 'He reads the letters back, says the number of letters, and says the name',
            minWords: 4,
            rows: 2,
            keys: ['letters',
              'back',
              'number',
              'name'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '6.2.3',
      bookRef: 'Unit 6 · 6.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs, back to back. One is the caller with a hard name. Then change places.',
      scene: 'u6-6-2-pair',
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
        rows: [['Mouallem · M O U A L L E M · 8 letters',
          'Tarabishi · T A R A B I S H I · 9 letters']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '6.2.3R',
      bookRef: 'Unit 6 · 6.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — back to back, books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Your name, please.</td><td>☐ Can you '
          + 'spell it, please?</td><td>☐ M, O, U…</td><td>☐ Eight '
          + 'letters.</td><td>☐ That is it.</td></tr></table>'
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
      ref: '6.2.4',
      bookRef: 'Unit 6 · 6.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Four hard names. Your partner says them over a telephone. You write them and '
  + 'count. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The name I '
          + 'heard</th><th>Letters</th><th>✓ '
          + 'correct?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'I heard: Mouallem Letters: 8 ✓ correct · I heard: Tarabishi '
              + 'Letters: 9 ✓ correct · I heard: Shamsi Letters: 6 ✗ it was '
              + 'Shamseddine — 12 · I heard: Nassif Letters: 6 ✓ correct',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Four hard names. Your partner says them over a telephone. You write '
          + 'them and count. Write it.',
        grammar: 'Getting a name you have never heard',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A call list has a time, a name, the letter count and whether it was spelled.',
        '⚠ Surname first on a list. Mouallem, Ghassan. It is Unit 1.3 again — '
          + 'a list is for finding a name in, and you find it by the surname.',
        '⚠ Write the LOST calls too. 11.05 — did not get it, he rang off. A '
          + 'list of three names from four calls is a lie by omission. A list '
          + 'that says one got away is honest, and somebody may know who it was.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '6.2.4R',
      bookRef: 'Unit 6 · 6.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: My partner said . I wrote . It was letters. It was right / wrong.',
      questions: [{
            q: 'Write what you told the class.',
            model: 'My partner said Shamseddine. I wrote Shamsi. I made it six '
              + 'letters. It was twelve. It was wrong',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: My partner said . I wrote . It was letters. It was '
          + 'right / wrong.',
        grammar: 'Getting a name you have never heard',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A call list has a time, a name, the letter count and whether it was spelled.',
        '⚠ Surname first on a list. Mouallem, Ghassan. It is Unit 1.3 again — '
          + 'a list is for finding a name in, and you find it by the surname.',
        '⚠ Write the LOST calls too. 11.05 — did not get it, he rang off. A '
          + 'list of three names from four calls is a lie by omission. A list '
          + 'that says one got away is honest, and somebody may know who it was.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '6.2.5',
      bookRef: 'Unit 6 · 6.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the names Ammar wrote on Monday. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>CALLS — MONDAY 16 MARCH</b></p><table '
          + 'class=\'bk\'><tr><th>Time</th><th>Name</th><th>Letters</th><th>Spelled?</th></tr><tr><td>7.50</td><td>Mouallem, '
          + 'Ghassan</td><td>8</td><td>✓ yes</td></tr><tr><td>9.10</td><td>Saeed, '
          + 'Fadi</td><td>5</td><td>— no, I know '
          + 'him</td></tr><tr><td>10.30</td><td>Tarabishi, '
          + 'Fouad</td><td>9</td><td>✓ yes</td></tr><tr><td>11.05</td><td><i>(did '
          + 'not get it)</i></td><td>—</td><td>✗ he rang '
          + 'off</td></tr></table><p>⚠ <b>Four calls. Three names. One lost — he '
          + 'rang off before I asked. A.Z.</b></p><h4>Writer\'s box</h4><p><b>A '
          + 'call list has a time, a name, the letter count and whether it was '
          + 'spelled.</b></p><p>⚠ <b>Surname first on a list.</b> <i>Mouallem, '
          + 'Ghassan.</i> <b>It is Unit 1.3 again</b> — <b>a list is for finding '
          + 'a name in, and you find it by the surname.</b></p><p>⚠ <b>Write the '
          + 'LOST calls too.</b> <i>11.05 — did not get it, he rang off.</i> <b>A '
          + 'list of three names from four calls is a lie by omission.</b> <b>A '
          + 'list that says one got away is honest, and somebody may know who it '
          + 'was.</b></p>'
      },
      questions: [{
            q: 'How many names did Ammar get?',
            model: 'Three',
            minWords: 1,
            rows: 2
          },
      {
            q: 'Which name did he not need to spell?',
            model: 'Saeed, Fadi — he knows him',
            minWords: 2,
            rows: 2,
            keys: ['saeed',
              'fadi',
              'knows'],
            need: 1
          },
      {
            q: 'What happened at 11.05?',
            model: 'The caller rang off before Ammar asked for his name',
            minWords: 3,
            rows: 2,
            keys: ['caller',
              'rang',
              'off',
              'before'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '6.2.6',
      bookRef: 'Unit 6 · 6.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a call list for one morning at your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Time</th><th>Name <i>(surname '
          + 'first)</i></th><th>Letters</th><th>Spelled?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      model: ['CALLS — TUESDAY 17 MARCH'],
      coach: {
        title: 'What to include',
        task: 'Write a call list for one morning at your own work (15 words or more).',
        criteria: [{ t: 'A call list has a time, a name, the letter count and whether it '
              + 'was spelled.' },
            { t: '⚠ Surname first on a list. Mouallem, Ghassan. It is Unit 1.3 '
              + 'again — a list is for finding a name in, and you find it by the '
              + 'surname.' },
            { t: '⚠ Write the LOST calls too. 11.05 — did not get it, he rang off. '
              + 'A list of three names from four calls is a lie by omission. A '
              + 'list that says one got away is honest, and somebody may know who '
              + 'it was.' }]
      },
      aiCheck: {
        task: 'Write a call list for one morning at your own work (15 words or more).',
        grammar: 'Getting a name you have never heard',
        must: ['A call list has a time, a name, the letter count and whether it was spelled.',
        '⚠ Surname first on a list. Mouallem, Ghassan. It is Unit 1.3 again — '
          + 'a list is for finding a name in, and you find it by the surname.',
        '⚠ Write the LOST calls too. 11.05 — did not get it, he rang off. A '
          + 'list of three names from four calls is a lie by omission. A list '
          + 'that says one got away is honest, and somebody may know who it was.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '6.2.6P',
      bookRef: 'Unit 6 · 6.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>Surname first</td><td>&nbsp;</td></tr><tr><td>A '
          + 'letter count on every name</td><td>&nbsp;</td></tr><tr><td>The lost '
          + 'calls written down too</td><td>&nbsp;</td></tr><tr><td>The totals at '
          + 'the bottom</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "Ghassan Mouallem" · (pointing) at '
              + 'the bottom. (reading) "3 names"',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Getting a name you have never heard',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A call list has a time, a name, the letter count and whether it was spelled.',
        '⚠ Surname first on a list. Mouallem, Ghassan. It is Unit 1.3 again — '
          + 'a list is for finding a name in, and you find it by the surname.',
        '⚠ Write the LOST calls too. 11.05 — did not get it, he rang off. A '
          + 'list of three names from four calls is a lie by omission. A list '
          + 'that says one got away is honest, and somebody may know who it was.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '6.2.6R',
      bookRef: 'Unit 6 · 6.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their lost line. The class says if anybody could work out '
  + 'who it was.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '6.2.7',
      bookRef: 'Unit 6 · 6.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a name you could not get on the telephone (<b>20 to 35 '
  + 'words</b>). What happened? What did you do? Did you find out who it was?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['A man rang about a big order and I could not get his name. He said it '
        + 'four times. I was too embarrassed to ask for the letters. He never '
        + 'rang back'],
      stems: ['A man rang…',
      'He said it…',
      'I was too…',
      'He never rang…'],
      coach: {
        title: 'What to include',
        task: 'Write about a name you could not get on the telephone (20 to 35 words). What '
  + 'happened? What did you do? Did you find out who it was?',
        criteria: [{ t: 'A call list has a time, a name, the letter count and whether it '
              + 'was spelled.' },
            { t: '⚠ Surname first on a list. Mouallem, Ghassan. It is Unit 1.3 '
              + 'again — a list is for finding a name in, and you find it by the '
              + 'surname.' },
            { t: '⚠ Write the LOST calls too. 11.05 — did not get it, he rang off. '
              + 'A list of three names from four calls is a lie by omission. A '
              + 'list that says one got away is honest, and somebody may know who '
              + 'it was.' }]
      },
      aiCheck: {
        task: 'Write about a name you could not get on the telephone (20 to 35 '
          + 'words). What happened? What did you do? Did you find out who it was?',
        grammar: 'Getting a name you have never heard',
        must: ['A call list has a time, a name, the letter count and whether it was spelled.',
        '⚠ Surname first on a list. Mouallem, Ghassan. It is Unit 1.3 again — '
          + 'a list is for finding a name in, and you find it by the surname.',
        '⚠ Write the LOST calls too. 11.05 — did not get it, he rang off. A '
          + 'list of three names from four calls is a lie by omission. A list '
          + 'that says one got away is honest, and somebody may know who it was.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '6.2.7P',
      bookRef: 'Unit 6 · 6.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did he ring back? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Did he ring back? — No. He went to the other shop',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did he ring back? Write '
          + 'the answer.',
        grammar: 'Getting a name you have never heard',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A call list has a time, a name, the letter count and whether it was spelled.',
        '⚠ Surname first on a list. Mouallem, Ghassan. It is Unit 1.3 again — '
          + 'a list is for finding a name in, and you find it by the surname.',
        '⚠ Write the LOST calls too. 11.05 — did not get it, he rang off. A '
          + 'list of three names from four calls is a lie by omission. A list '
          + 'that says one got away is honest, and somebody may know who it was.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '6.2.7R',
      bookRef: 'Unit 6 · 6.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many lost callers rang back? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> six surnames from '
          + 'your work, letter by letter, with the count (20 words or more).</p>'
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
