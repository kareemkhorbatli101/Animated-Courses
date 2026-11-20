/* Unit 5 · cycle 5.4 — Sign here — and what you have just said.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u5-s04', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 5 · 5.4', part: '5.4',
          section: '4', lesson: 'Sign here — and what you have just said', title: 'Sign here — and what you have just said' },
  objective: 'sign — and know what you have agreed to',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '5.4.1',
      bookRef: 'Unit 5 · 5.4 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'A driver says sign here and you have not counted. What do you '
              + 'say? Say it in Arabic, then in English.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the two lines. Which one can you say to a driver in a '
              + 'hurry? No · I have not counted it yet. Two minutes.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Goods received by: Ammar Zreik',
      'Signature: A. Zreik'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '5.4.2',
      bookRef: 'Unit 5 · 5.4 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u5-5-4',
      passage: {
        title: 'Language box',
        html: '<p><b>Signing</b></p><table class=\'bk\'><tr><th>The '
          + 'step</th><th>What you say or write</th></tr><tr><td><b>1 they '
          + 'ask</b></td><td><i>Sign here.</i></td></tr><tr><td><b>2 you are not '
          + 'ready</b></td><td>⚠ <b><i>I have not counted it yet. Two '
          + 'minutes.</i></b></td></tr><tr><td><b>3 you count</b></td><td><i>One, '
          + 'two, three… fifteen.</i></td></tr><tr><td><b>4 it is '
          + 'wrong</b></td><td><b><i>Fifteen, not sixteen.</i></b> <b>Write the '
          + 'real number.</b></td></tr><tr><td><b>5 you sign</b></td><td><b><i>I '
          + 'signed it</i></b> — <b>and write WHY beside your name:</b> <i>one '
          + 'box short</i>.</td></tr></table><p>⚠ <b><i>I have not counted it '
          + 'yet</i> is the most useful sentence in this book.</b> <b>It is not '
          + '<i>no</i>. It is <i>not yet</i>, and it comes with a number of '
          + 'minutes.</b> <b>Nobody argues with two minutes.</b></p><p>⚠ <b>If '
          + 'the number is wrong, you still sign</b> — <b>but you sign the REAL '
          + 'number and you write why.</b> <b>A refusal to sign leaves the yard '
          + 'with a lorry and no paper. A signature with <i>one box short</i> '
          + 'beside it leaves the yard with the truth.</b></p><p><b>Practise:</b> '
          + 'Write the line.</p><p>1 The driver is in a hurry and you have not '
          + 'counted. <span class="blank"></span>. 2 The paper says 16 and you '
          + 'counted 15. <span class="blank"></span>. 3 You sign. What do you '
          + 'write beside your name? <span class="blank"></span>.</p><p><b>Useful '
          + 'words:</b> Sign here. · I have not counted it yet. · Two minutes. · '
          + 'fifteen, not sixteen · one box short</p><p><b>Sound — the slow '
          + 'refusal.</b> 🔊 <b>Track 5.8</b> Listen. <i>I have not counted it '
          + 'yet.↘ Two minutes.↘</i> <b>Slow and flat. No apology.</b> <b>Said '
          + 'fast it sounds like an excuse; said slowly it sounds like a job '
          + 'being done.</b> Say it four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Does Ammar sign?',
            options: [{
              t: 'yes',
              ok: false,
              why: 'Not before counting - the order is the whole lesson.'
            },
            {
              t: 'no',
              ok: false,
              why: 'He does sign. Listen to what he writes beside his name.'
            },
            {
              t: 'yes, after he counts',
              ok: true,
              why: 'He counts first, finds fifteen, writes that, and signs.'
            }],
            evidence: 'what Ammar does in the two minutes he asks for'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '5.4.2',
      bookRef: 'Unit 5 · 5.4 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How long does he ask for?',
            model: 'Two minutes',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What does he write next to his name?',
            model: 'One box short',
            minWords: 1,
            rows: 2,
            keys: ['box',
              'short'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '5.4.3',
      bookRef: 'Unit 5 · 5.4 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One is the driver, in a hurry. One is the storeman. Then change places.',
      scene: 'u5-5-4-pair',
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
        rows: [['two · sixteen boxes · fifteen · fifteen · sixteen',
          'five · two hundred packets · one hundred and ninety · 190 · 200']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '5.4.3R',
      bookRef: 'Unit 5 · 5.4 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Sign here.</td><td>☐ I have not '
          + 'counted it yet.</td><td>☐ Two minutes.</td><td>☐ fifteen, not '
          + 'sixteen</td><td>☐ one box short</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Goods received by: Ammar Zreik',
      'Signature: A. Zreik'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '5.4.4',
      bookRef: 'Unit 5 · 5.4 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Your partner is a driver in a hurry. Ask your partner for two minutes. Then write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What the driver said</th><th>What I '
          + 'said</th><th>How long I asked for</th><th>What I '
          + 'wrote</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'He said: Sign it, I am late. I said: I have not counted it yet. '
              + 'Three minutes. I asked for: 3 minutes I wrote: 40 trays, '
              + 'counted, correct · He said: It is always forty. I said: I have '
              + 'not counted it yet. Three minutes. I asked for: 3 minutes I '
              + 'wrote: 38 trays. Two short. Driver agreed',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Your partner is a driver in a hurry. Ask your partner for two '
          + 'minutes. Then write it.',
        grammar: 'Signing',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A signature block has five lines: name → date → time → signature → the note.',
        '⚠ The note is where the whole value is. Say the number on the paper, '
          + 'the number you counted, WHICH LINE, and that the driver agreed. Four '
          + 'facts.',
        '⚠ Get the driver to sign the note too. A short delivery with two '
          + 'signatures on it is a fact. A short delivery with one signature on '
          + 'it is your word against his — and he left ten minutes ago.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '5.4.4R',
      bookRef: 'Unit 5 · 5.4 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: He said . I said . I asked for minutes. I wrote .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'He said sign it, I am late. I said I have not counted it yet, '
              + 'three minutes. I asked for three minutes. I wrote thirty-eight '
              + 'trays, two short',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: He said . I said . I asked for minutes. I wrote .',
        grammar: 'Signing',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A signature block has five lines: name → date → time → signature → the note.',
        '⚠ The note is where the whole value is. Say the number on the paper, '
          + 'the number you counted, WHICH LINE, and that the driver agreed. Four '
          + 'facts.',
        '⚠ Get the driver to sign the note too. A short delivery with two '
          + 'signatures on it is a fact. A short delivery with one signature on '
          + 'it is your word against his — and he left ten minutes ago.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '5.4.5',
      bookRef: 'Unit 5 · 5.4 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the bottom of the real note. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>BEIRUT PACKAGING CO. — note no. 4417</b></p><p><b>Goods '
          + 'received by:</b> <i>Ammar Zreik</i></p><p><b>Date received:</b> <i>4 '
          + 'March 2026</i></p><p><b>Time:</b> '
          + '<i>7.50</i></p><p><b>Signature:</b> <i>A. Zreik</i></p><p>⚠ '
          + '<b>Note:</b> <i>Paper says 16 boxes. I counted 15. ONE BOX SHORT. '
          + 'Line 1, white labels. Driver agreed and signed too — M. '
          + 'Haddad.</i></p><h4>Writer\'s box</h4><p><b>A signature block has '
          + 'five lines:</b> name → date → <b>time</b> → signature → <b>the '
          + 'note</b>.</p><p>⚠ <b>The note is where the whole value is.</b> '
          + '<b>Say the number on the paper, the number you counted, WHICH LINE, '
          + 'and that the driver agreed.</b> <b>Four facts.</b></p><p>⚠ <b>Get '
          + 'the driver to sign the note too.</b> <b>A short delivery with two '
          + 'signatures on it is a fact.</b> <b>A short delivery with one '
          + 'signature on it is your word against his</b> — <b>and he left ten '
          + 'minutes ago.</b></p>'
      },
      questions: [{
            q: 'How many boxes did Ammar count?',
            model: 'Fifteen',
            minWords: 1,
            rows: 2
          },
      {
            q: 'Which line was short?',
            model: 'Line 1 — the white labels',
            minWords: 1,
            rows: 2,
            keys: ['white',
              'labels',
              'line'],
            need: 1
          },
      {
            q: 'Who else signed the note?',
            model: 'The driver, M. Haddad',
            minWords: 1,
            rows: 2,
            keys: ['driver',
              'haddad'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '5.4.6',
      bookRef: 'Unit 5 · 5.4 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a signature block with a note on it (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['Goods received by: Samih Qassar',
      'Date received: 12 March 2026 Time: 8.05'],
      coach: {
        title: 'What to include',
        task: 'Write a signature block with a note on it (15 words or more).',
        criteria: [{ t: 'A signature block has five lines: name → date → time → signature '
              + '→ the note.' },
            { t: '⚠ The note is where the whole value is. Say the number on the '
              + 'paper, the number you counted, WHICH LINE, and that the driver '
              + 'agreed. Four facts.' },
            { t: '⚠ Get the driver to sign the note too. A short delivery with two '
              + 'signatures on it is a fact. A short delivery with one signature '
              + 'on it is your word against his — and he left ten minutes ago.' }]
      },
      aiCheck: {
        task: 'Write a signature block with a note on it (15 words or more).',
        grammar: 'Signing',
        must: ['A signature block has five lines: name → date → time → signature → the note.',
        '⚠ The note is where the whole value is. Say the number on the paper, '
          + 'the number you counted, WHICH LINE, and that the driver agreed. Four '
          + 'facts.',
        '⚠ Get the driver to sign the note too. A short delivery with two '
          + 'signatures on it is a fact. A short delivery with one signature on '
          + 'it is your word against his — and he left ten minutes ago.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '5.4.6P',
      bookRef: 'Unit 5 · 5.4 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>The '
          + 'number on the paper AND the number '
          + 'counted</td><td>&nbsp;</td></tr><tr><td>Which line was '
          + 'wrong</td><td>&nbsp;</td></tr><tr><td>A time, not just a '
          + 'date</td><td>&nbsp;</td></tr><tr><td>The driver\'s name, '
          + 'signed</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "Two trays short" · (pointing) at the '
              + 'note. (reading) "Driver agreed"',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Signing',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A signature block has five lines: name → date → time → signature → the note.',
        '⚠ The note is where the whole value is. Say the number on the paper, '
          + 'the number you counted, WHICH LINE, and that the driver agreed. Four '
          + 'facts.',
        '⚠ Get the driver to sign the note too. A short delivery with two '
          + 'signatures on it is a fact. A short delivery with one signature on '
          + 'it is your word against his — and he left ten minutes ago.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '5.4.6R',
      bookRef: 'Unit 5 · 5.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their note. The class says if a man reading it next week '
  + 'would understand.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Goods received by: Ammar Zreik',
      'Signature: A. Zreik'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '5.4.7',
      bookRef: 'Unit 5 · 5.4 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about signing at your work (<b>20 to 35 words</b>). Who asks you to '
  + 'sign? Have you ever signed something wrong? What would you do now?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['The bread man asks me to sign every morning at six. I signed for forty '
        + 'trays in January and we had thirty-six. Nobody asked me about it, but '
        + 'it came off the shop'],
      stems: ['The bread man…',
      'I signed for…',
      'Nobody asked me…'],
      coach: {
        title: 'What to include',
        task: 'Write about signing at your work (20 to 35 words). Who asks you to sign? '
  + 'Have you ever signed something wrong? What would you do now?',
        criteria: [{ t: 'A signature block has five lines: name → date → time → signature '
              + '→ the note.' },
            { t: '⚠ The note is where the whole value is. Say the number on the '
              + 'paper, the number you counted, WHICH LINE, and that the driver '
              + 'agreed. Four facts.' },
            { t: '⚠ Get the driver to sign the note too. A short delivery with two '
              + 'signatures on it is a fact. A short delivery with one signature '
              + 'on it is your word against his — and he left ten minutes ago.' }]
      },
      aiCheck: {
        task: 'Write about signing at your work (20 to 35 words). Who asks you to '
          + 'sign? Have you ever signed something wrong? What would you do now?',
        grammar: 'Signing',
        must: ['A signature block has five lines: name → date → time → signature → the note.',
        '⚠ The note is where the whole value is. Say the number on the paper, '
          + 'the number you counted, WHICH LINE, and that the driver agreed. Four '
          + 'facts.',
        '⚠ Get the driver to sign the note too. A short delivery with two '
          + 'signatures on it is a fact. A short delivery with one signature on '
          + 'it is your word against his — and he left ten minutes ago.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '5.4.7P',
      bookRef: 'Unit 5 · 5.4 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did anybody ask you why you '
  + 'signed it? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Did anybody ask you why you signed it? — No. That is the problem',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did anybody ask you why '
          + 'you signed it? Write the answer.',
        grammar: 'Signing',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A signature block has five lines: name → date → time → signature → the note.',
        '⚠ The note is where the whole value is. Say the number on the paper, '
          + 'the number you counted, WHICH LINE, and that the driver agreed. Four '
          + 'facts.',
        '⚠ Get the driver to sign the note too. A short delivery with two '
          + 'signatures on it is a fact. A short delivery with one signature on '
          + 'it is your word against his — and he left ten minutes ago.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '5.4.7R',
      bookRef: 'Unit 5 · 5.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many did somebody sign without counting? Count '
  + 'them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> the sentence you will '
          + 'say the next time a driver is in a hurry (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Goods received by: Ammar Zreik',
      'Signature: A. Zreik'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
