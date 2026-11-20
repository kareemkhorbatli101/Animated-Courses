/* Unit 5 · cycle 5.6 — There is no note.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u5-s06', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 5 · 5.6', part: '5.6',
          section: '6', lesson: 'There is no note', title: 'There is no note' },
  objective: 'say a paper is missing',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '5.6.1',
      bookRef: 'Unit 5 · 5.6 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'A lorry comes with no paper. What do you do? Say it in Arabic, '
              + 'then in English.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the two lines. Which is better? He did not bring the paper '
              + '· There is no delivery note. I wrote one myself.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Saying there is nothing there',
      'Driver: Marwan Haddad Lorry: 345 871'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '5.6.2',
      bookRef: 'Unit 5 · 5.6 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u5-5-6',
      passage: {
        title: 'Language box',
        html: '<p><b>Saying there is nothing there</b></p><table '
          + 'class=\'bk\'><tr><th>One thing</th><th>More than one '
          + 'thing</th></tr><tr><td><b>There is no</b> note.</td><td><b>There are '
          + 'no</b> papers.</td></tr><tr><td><b>There is no</b> '
          + 'signature.</td><td><b>There are no</b> labels on the '
          + 'boxes.</td></tr><tr><td><b>There is no</b> date on '
          + 'it.</td><td><b>There are no</b> numbers on the '
          + 'pallets.</td></tr></table><p>⚠ <b>One thing: <i>there is no</i>. '
          + 'More than one: <i>there are no</i>.</b> <b>Same split as 4.3, and '
          + 'the -s tells you which.</b></p><p>⚠ <b><i>There is no note</i> is '
          + 'not the end of the conversation. It is the start.</b> <b>The next '
          + 'sentence is the one that matters:</b> <i>Then I write '
          + 'one.</i></p><p>⚠ <b>A paper you wrote yourself, signed by the '
          + 'driver, is a real paper.</b> <b>Four things on it: his name, his '
          + 'lorry number, the quantity with its unit, the date.</b> <b>Then both '
          + 'of you have something.</b></p><p><b>Practise:</b> Write <i>there is '
          + 'no</i> or <i>there are no</i>.</p><p>1 <span class="blank"></span> '
          + 'delivery note. 2 <span class="blank"></span> papers in the lorry. 3 '
          + '<span class="blank"></span> signature at the bottom. 4 <span '
          + 'class="blank"></span> labels on the six pallets.</p><p><b>Useful '
          + 'words:</b> There is no note. · There are no papers. · Then I write '
          + 'one. · and you sign it · Slowly.</p><p><b>Sound — the calm '
          + 'problem.</b> 🔊 <b>Track 5.12</b> Listen. <i>There is no note.↘ Then '
          + 'I write one.↘</i> <b>Two flat sentences, no rise, no panic.</b> '
          + '<b>Said like that it is a procedure, not a complaint.</b> Say it '
          + 'four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Does Ammar take the goods?',
            options: [{
              t: 'yes',
              ok: false,
              why: 'True, but the point is what he does so that both men have a paper.'
            },
            {
              t: 'no',
              ok: false,
              why: 'He does take them. Listen to what he writes.'
            },
            {
              t: 'yes, and he writes his own note',
              ok: true,
              why: 'He writes the note himself and has the driver sign it.'
            }],
            evidence: 'what Ammar offers to do when there is no paper at all'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '5.6.2',
      bookRef: 'Unit 5 · 5.6 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does the driver say about the note?',
            model: 'The office did not give him one',
            minWords: 2,
            rows: 2,
            keys: ['office',
              'give'],
            need: 1
          },
      {
            q: 'What four things does Ammar write?',
            model: 'The driver\'s name, the lorry number, six pallets, today\'s date',
            minWords: 3,
            rows: 2,
            keys: ['driver\'s',
              'name',
              'lorry',
              'number'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '5.6.3',
      bookRef: 'Unit 5 · 5.6 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One is the driver with no paper. One is the storeman. Then '
  + 'change places.',
      scene: 'u5-5-6-pair',
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
        rows: [['six pallets · pallets · lorry · six pallets',
          'two hundred packets · packets · van · two hundred packets']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '5.6.3R',
      bookRef: 'Unit 5 · 5.6 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ There is no note.</td><td>☐ There are '
          + 'no papers.</td><td>☐ Then I write one.</td><td>☐ and you sign '
          + 'it</td><td>☐ Slowly.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Saying there is nothing there',
      'Driver: Marwan Haddad Lorry: 345 871'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '5.6.4',
      bookRef: 'Unit 5 · 5.6 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of a paper that is sometimes missing at your work. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The missing paper</th><th>What people do '
          + 'now</th><th>What I could write '
          + 'instead</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'The missing paper: the bread sheet, on Fridays. What people do '
              + 'now: nothing — they remember the number. What I could write '
              + 'instead: a line in a notebook: date, trays, driver\'s name, his '
              + 'signature · The missing paper: the return note for stale bread. '
              + 'What people do now: the driver takes it away and says he will '
              + 'send one. What I could write instead: two lines in my own book, '
              + 'both of us sign, I keep one',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of a paper that is sometimes missing at your work. Write it.',
        grammar: 'Saying there is nothing there',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A note you write yourself has six things: date and time → driver and '
          + 'lorry → goods with unit → what the driver SAYS → two signatures → a '
          + 'copy to the office.',
        '⚠ Write what you did NOT check as well. Not counted inside — pallets '
          + 'wrapped. That line protects you. A paper that claims you checked '
          + 'something you could not see is worse than no paper.',
        '⚠ Driver says: — put his explanation in HIS words, not yours. You do '
          + 'not know whether the Homs office gave him a note. You know what he '
          + 'said.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '5.6.4R',
      bookRef: 'Unit 5 · 5.6 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: Sometimes there is no . People . I could write .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'Sometimes there is no return note. People let the driver take it '
              + 'away. I could write two lines in my own book and we both sign',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: Sometimes there is no . People . I could write .',
        grammar: 'Saying there is nothing there',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A note you write yourself has six things: date and time → driver and '
          + 'lorry → goods with unit → what the driver SAYS → two signatures → a '
          + 'copy to the office.',
        '⚠ Write what you did NOT check as well. Not counted inside — pallets '
          + 'wrapped. That line protects you. A paper that claims you checked '
          + 'something you could not see is worse than no paper.',
        '⚠ Driver says: — put his explanation in HIS words, not yours. You do '
          + 'not know whether the Homs office gave him a note. You know what he '
          + 'said.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '5.6.5',
      bookRef: 'Unit 5 · 5.6 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the paper Ammar wrote himself. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>GOODS RECEIVED — NO DELIVERY NOTE</b></p><p><b>Date:</b> 6 '
          + 'March 2026 <b>Time:</b> 9.20</p><p><b>Driver:</b> Marwan Haddad '
          + '<b>Lorry:</b> 345 871</p><p><b>Goods:</b> 6 pallets, empty bags. ⚠ '
          + '<b>Not counted inside — pallets wrapped.</b></p><p><b>Driver '
          + 'says:</b> the office in Homs did not give him a '
          + 'note.</p><p><b>Received by:</b> <i>A. Zreik</i> <b>Driver\'s '
          + 'signature:</b> <i>M. Haddad</i></p><p>⚠ <b>Two signatures. Copy to '
          + 'the office today. A.Z.</b></p><h4>Writer\'s box</h4><p><b>A note you '
          + 'write yourself has six things:</b> date and time → driver and lorry '
          + '→ goods with unit → <b>what the driver SAYS</b> → two signatures → a '
          + 'copy to the office.</p><p>⚠ <b>Write what you did NOT check as '
          + 'well.</b> <i>Not counted inside — pallets wrapped.</i> <b>That line '
          + 'protects you.</b> <b>A paper that claims you checked something you '
          + 'could not see is worse than no paper.</b></p><p>⚠ <b><i>Driver '
          + 'says:</i> — put his explanation in HIS words, not yours.</b> <b>You '
          + 'do not know whether the Homs office gave him a note. You know what '
          + 'he said.</b></p>'
      },
      questions: [{
            q: 'What is the lorry number?',
            model: '345 871',
            minWords: 1,
            rows: 2,
            keys: ['345',
              '871'],
            need: 1
          },
      {
            q: 'Why are the bags not counted?',
            model: 'The pallets are wrapped, so he could not see inside',
            minWords: 3,
            rows: 2,
            keys: ['pallets',
              'wrapped',
              'see',
              'inside'],
            need: 1
          },
      {
            q: 'How many signatures are on this paper?',
            model: 'Two',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '5.6.6',
      bookRef: 'Unit 5 · 5.6 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a note for goods arriving with no paper (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['GOODS RECEIVED — NO RETURN NOTE',
      'Date: 13 March 2026 Time: 6.40'],
      coach: {
        title: 'What to include',
        task: 'Write a note for goods arriving with no paper (15 words or more).',
        criteria: [{ t: 'A note you write yourself has six things: date and time → driver '
              + 'and lorry → goods with unit → what the driver SAYS → two '
              + 'signatures → a copy to the office.' },
            { t: '⚠ Write what you did NOT check as well. Not counted inside — '
              + 'pallets wrapped. That line protects you. A paper that claims you '
              + 'checked something you could not see is worse than no paper.' },
            { t: '⚠ Driver says: — put his explanation in HIS words, not yours. '
              + 'You do not know whether the Homs office gave him a note. You '
              + 'know what he said.' }]
      },
      aiCheck: {
        task: 'Write a note for goods arriving with no paper (15 words or more).',
        grammar: 'Saying there is nothing there',
        must: ['A note you write yourself has six things: date and time → driver and '
          + 'lorry → goods with unit → what the driver SAYS → two signatures → a '
          + 'copy to the office.',
        '⚠ Write what you did NOT check as well. Not counted inside — pallets '
          + 'wrapped. That line protects you. A paper that claims you checked '
          + 'something you could not see is worse than no paper.',
        '⚠ Driver says: — put his explanation in HIS words, not yours. You do '
          + 'not know whether the Homs office gave him a note. You know what he '
          + 'said.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '5.6.6P',
      bookRef: 'Unit 5 · 5.6 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>The '
          + 'driver\'s name AND the lorry '
          + 'number</td><td>&nbsp;</td></tr><tr><td>A line saying what you did '
          + 'NOT check</td><td>&nbsp;</td></tr><tr><td>The driver\'s words, as '
          + 'his words</td><td>&nbsp;</td></tr><tr><td>Two '
          + 'signatures</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "The office did not give him one" · '
              + '(pointing) at the goods line. (reading) "9 trays"',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Saying there is nothing there',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A note you write yourself has six things: date and time → driver and '
          + 'lorry → goods with unit → what the driver SAYS → two signatures → a '
          + 'copy to the office.',
        '⚠ Write what you did NOT check as well. Not counted inside — pallets '
          + 'wrapped. That line protects you. A paper that claims you checked '
          + 'something you could not see is worse than no paper.',
        '⚠ Driver says: — put his explanation in HIS words, not yours. You do '
          + 'not know whether the Homs office gave him a note. You know what he '
          + 'said.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '5.6.6R',
      bookRef: 'Unit 5 · 5.6 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their not checked line. The class says if it protects the writer.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Saying there is nothing there',
      'Driver: Marwan Haddad Lorry: 345 871'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '5.6.7',
      bookRef: 'Unit 5 · 5.6 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about goods or a job that came with no paper (<b>20 to 35 words</b>). '
  + 'What was missing? What did you do? What happened later?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['The stale bread goes back every Friday with no paper. In November the '
        + 'bakery said we had sent nothing back for three weeks. We had sent '
        + 'twenty-seven trays and nobody could prove it'],
      stems: ['The stale bread…',
      'In November the bakery…',
      'We had sent…'],
      coach: {
        title: 'What to include',
        task: 'Write about goods or a job that came with no paper (20 to 35 words). What '
  + 'was missing? What did you do? What happened later?',
        criteria: [{ t: 'A note you write yourself has six things: date and time → driver '
              + 'and lorry → goods with unit → what the driver SAYS → two '
              + 'signatures → a copy to the office.' },
            { t: '⚠ Write what you did NOT check as well. Not counted inside — '
              + 'pallets wrapped. That line protects you. A paper that claims you '
              + 'checked something you could not see is worse than no paper.' },
            { t: '⚠ Driver says: — put his explanation in HIS words, not yours. '
              + 'You do not know whether the Homs office gave him a note. You '
              + 'know what he said.' }]
      },
      aiCheck: {
        task: 'Write about goods or a job that came with no paper (20 to 35 words). '
          + 'What was missing? What did you do? What happened later?',
        grammar: 'Saying there is nothing there',
        must: ['A note you write yourself has six things: date and time → driver and '
          + 'lorry → goods with unit → what the driver SAYS → two signatures → a '
          + 'copy to the office.',
        '⚠ Write what you did NOT check as well. Not counted inside — pallets '
          + 'wrapped. That line protects you. A paper that claims you checked '
          + 'something you could not see is worse than no paper.',
        '⚠ Driver says: — put his explanation in HIS words, not yours. You do '
          + 'not know whether the Homs office gave him a note. You know what he '
          + 'said.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '5.6.7P',
      bookRef: 'Unit 5 · 5.6 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did anybody ask about it later? '
  + 'Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Did anybody ask about it later? — Three weeks later. We lost the argument',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did anybody ask about '
          + 'it later? Write the answer.',
        grammar: 'Saying there is nothing there',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A note you write yourself has six things: date and time → driver and '
          + 'lorry → goods with unit → what the driver SAYS → two signatures → a '
          + 'copy to the office.',
        '⚠ Write what you did NOT check as well. Not counted inside — pallets '
          + 'wrapped. That line protects you. A paper that claims you checked '
          + 'something you could not see is worse than no paper.',
        '⚠ Driver says: — put his explanation in HIS words, not yours. You do '
          + 'not know whether the Homs office gave him a note. You know what he '
          + 'said.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '5.6.7R',
      bookRef: 'Unit 5 · 5.6 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many was somebody asked about it weeks later? '
  + 'Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> your own no-paper '
          + 'note for a real delivery, with all six things (20 words or '
          + 'more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Saying there is nothing there',
      'Driver: Marwan Haddad Lorry: 345 871'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
