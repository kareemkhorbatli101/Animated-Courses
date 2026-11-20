/* Unit 4 · cycle 4.6 — I can reach it. I cannot reach that one..

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u4-s06', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 4 · 4.6', part: '4.6',
          section: '6', lesson: 'I can reach it. I cannot reach that one.', title: 'I can reach it. I cannot reach that one.' },
  objective: 'say what you can and cannot reach',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '4.6.1',
      bookRef: 'Unit 4 · 4.6 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Which shelf in this room can you reach? Which cannot you reach? Say it.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Hold your hand up. Say I can reach here. I cannot reach there.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['can and cannot'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '4.6.2',
      bookRef: 'Unit 4 · 4.6 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u4-4-6',
      passage: {
        title: 'Language box',
        html: '<p><b><i>can</i> and <i>cannot</i></b></p><table '
          + 'class=\'bk\'><tr><th>+</th><th>–</th><th>?</th></tr><tr><td><b>I '
          + 'can</b> reach shelf three.</td><td><b>I cannot</b> reach shelf '
          + 'four.</td><td><b>Can</b> you reach it? — Yes, I '
          + 'can.</td></tr><tr><td><b>He can</b> drive the lorry.</td><td><b>He '
          + 'cannot</b> drive on Friday.</td><td><b>Can</b> he drive it? — No, he '
          + 'cannot.</td></tr></table><p>⚠ <b><i>can</i> has NO -s, even for he '
          + 'and she:</b> <i>he <b>can</b></i>, <b>not</b> <s>he cans</s>. <b>It '
          + 'is the one verb in Book 1 that does not take the -s from '
          + '3.4.</b></p><p>⚠ <b>And the verb after <i>can</i> is bare:</b> <i>I '
          + 'can <b>reach</b></i>, <b>not</b> <s>I can to reach</s>, <b>not</b> '
          + '<s>I can reaching</s>.</p><p>⚠ <b><i>I cannot reach it</i> is a '
          + 'whole answer and it is not a failure.</b> <b>The failure is standing '
          + 'on a carton.</b> <b>Say the sentence, then say what you will do '
          + 'instead.</b></p><p><b>Practise:</b> Write <i>can</i> or '
          + '<i>cannot</i>.</p><p>1 I <span class="blank"></span> reach shelf '
          + 'three. It is easy. 2 I <span class="blank"></span> reach shelf four. '
          + 'It is too high. 3 He <span class="blank"></span> drive the lorry. He '
          + 'has the licence. 4 <span class="blank"></span> you reach the top '
          + 'one?</p><p><b>Useful words:</b> I can reach… · I cannot reach… · '
          + 'Wait for the ladder. · do not stand on… · and move them '
          + 'later</p><p><b>Sound — can and can\'t.</b> 🔊 <b>Track 4.12</b> '
          + 'Listen. <i>I can REACH it</i> — <b><i>can</i> is quiet.</b> <i>I '
          + 'CAN\'T reach it</i> — <b><i>can\'t</i> is LOUD.</b> <b>That is how '
          + 'you hear the difference across a store.</b> Say both four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Does Ammar use the ladder?',
            options: [{
              t: 'yes',
              ok: false,
              why: 'He cannot - the ladder is not next to the bench.'
            },
            {
              t: 'no',
              ok: false,
              why: 'True as far as it goes, but it misses what he does instead.'
            },
            {
              t: 'no, he asks for help',
              ok: true,
              why: 'The ladder is in the yard, so he puts them lower and says he '
                + 'will move them.'
            }],
            evidence: 'what Ammar says he will do instead of standing on a carton'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '4.6.2',
      bookRef: 'Unit 4 · 4.6 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Which shelf can he reach?',
            model: 'Shelf three',
            minWords: 1,
            rows: 2
          },
      {
            q: 'Where is the ladder?',
            model: 'In the yard — not next to the bench, where it should be',
            minWords: 4,
            rows: 2,
            keys: ['yard',
              'next',
              'bench'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '4.6.3',
      bookRef: 'Unit 4 · 4.6 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One gives a job. One says what they can and cannot do. Then '
  + 'change places.',
      scene: 'u4-4-6-pair',
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
        rows: [['packets · shelf 4 · shelf 3 · next to the bench · in the yard · '
            + 'stand on a carton',
          'rolls · shelf 4 · shelf 2 · behind the door · with the driver · '
            + 'climb the shelf']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '4.6.3R',
      bookRef: 'Unit 4 · 4.6 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ I can reach…</td><td>☐ I cannot '
          + 'reach…</td><td>☐ Wait for the ladder.</td><td>☐ do not stand '
          + 'on…</td><td>☐ and move them later</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['can and cannot'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '4.6.4',
      bookRef: 'Unit 4 · 4.6 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Say three things you can do at your work and three you cannot. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>I can…</th><th>I '
          + 'cannot…</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'I can… count a shelf · read a delivery note · drive the small '
              + 'van · I cannot… reach shelf four · lift a full pallet alone · '
              + 'open the safe',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Say three things you can do at your work and three you cannot. Write it.',
        grammar: 'can and cannot',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (4.6) teaches: can and cannot. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: can and cannot.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '4.6.4R',
      bookRef: 'Unit 4 · 4.6 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I can . I cannot . So I .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I can count a shelf. I cannot lift a full pallet alone. So I ask '
              + 'Samih and we do it together',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — I can —. I cannot —. So I . (The dashes are blanks '
          + 'the learner fills in with their own workplace. Judge what they wrote '
          + 'in them, not the blanks.)',
        grammar: 'can and cannot',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (4.6) teaches: '
          + 'can and cannot. Judge the language against THAT and against nothing '
          + 'the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: can and cannot.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '4.6.5',
      bookRef: 'Unit 4 · 4.6 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the paper on the ladder. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>THE LADDER — WHO, WHERE, WHEN</b></p><p><b>Where it lives:</b> '
          + 'next to the long bench. ⚠ <b>Put it back there.</b></p><p><b>Who can '
          + 'use it:</b> anybody. ⚠ <b>Two men: one up, one '
          + 'holding.</b></p><p><b>Shelf 4:</b> you need the ladder. <b>No '
          + 'exceptions.</b></p><p><b>If the ladder is not here:</b> put the '
          + 'thing on shelf 3 and tell the supervisor.</p><p>⚠ <b>DO NOT stand on '
          + 'a carton, a pallet or a chair. A man on a carton is a man in '
          + 'hospital.</b></p><h4>Writer\'s box</h4><p><b>A safety paper has four '
          + 'lines and one warning:</b> where the thing lives → who can use it → '
          + 'when you need it → <b>what to do when it is not there</b> → the '
          + 'warning.</p><p>⚠ <b>The fourth line is the one that makes the paper '
          + 'work.</b> <b>A rule with no answer for <i>what if it is not here</i> '
          + 'is a rule that gets broken by a man doing his job.</b></p><p>⚠ '
          + '<b>The warning says what will happen, not just what not to do.</b> '
          + '<i>A man on a carton is a man in hospital.</i> <b>Nine words. Nobody '
          + 'forgets them.</b></p>'
      },
      questions: [{
            q: 'Where does the ladder live?',
            model: 'Next to the long bench',
            minWords: 2,
            rows: 2,
            keys: ['next',
              'long',
              'bench'],
            need: 1
          },
      {
            q: 'How many men use it?',
            model: 'Two — one up, one holding',
            minWords: 2,
            rows: 2
          },
      {
            q: 'What do you do if it is not there?',
            model: 'Put the thing on shelf 3 and tell the supervisor',
            minWords: 3,
            rows: 2,
            keys: ['thing',
              'shelf',
              'supervisor'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '4.6.6',
      bookRef: 'Unit 4 · 4.6 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a safety paper for one thing at your work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['THE PALLET TRUCK — WHO, WHERE, WHEN',
      'Where it lives: by the loading door, against the wall'],
      stems: ['Nobody drags a full…'],
      meter: {
        label: 'words from this lesson',
        words: ['cannot',
        'even',
        'cans',
        'verb',
        'book',
        'after',
        'bare',
        'reach']
      },
      coach: {
        title: 'What to include',
        task: 'Write a safety paper for one thing at your work (15 words or more).',
        criteria: [{ t: 'A safety paper has four lines and one warning: where the thing '
              + 'lives → who can use it → when you need it → what to do when it '
              + 'is not there → the warning.' },
            { t: '⚠ The fourth line is the one that makes the paper work. A rule '
              + 'with no answer for what if it is not here is a rule that gets '
              + 'broken by a man doing his job.' },
            { t: '⚠ The warning says what will happen, not just what not to do. A '
              + 'man on a carton is a man in hospital. Nine words. Nobody forgets '
              + 'them.' }]
      },
      aiCheck: {
        task: 'Write a safety paper for one thing at your work (15 words or more).',
        grammar: 'can and cannot',
        must: ['A safety paper has four lines and one warning: where the thing lives '
          + '→ who can use it → when you need it → what to do when it is not '
          + 'there → the warning.',
        '⚠ The fourth line is the one that makes the paper work. A rule with '
          + 'no answer for what if it is not here is a rule that gets broken by a '
          + 'man doing his job.',
        '⚠ The warning says what will happen, not just what not to do. A man '
          + 'on a carton is a man in hospital. Nine words. Nobody forgets them.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '4.6.6P',
      bookRef: 'Unit 4 · 4.6 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>Where the thing '
          + 'lives</td><td>&nbsp;</td></tr><tr><td>Who can use '
          + 'it</td><td>&nbsp;</td></tr><tr><td>An answer for <i>if it is not '
          + 'here</i></td><td>&nbsp;</td></tr><tr><td>A warning that says what '
          + 'will happen</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "Do not drag a full pallet" · '
              + '(pointing) Here. (reading) nothing about this',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'can and cannot',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (4.6) '
          + 'teaches: can and cannot. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        must: ['A safety paper has four lines and one warning: where the thing lives '
          + '→ who can use it → when you need it → what to do when it is not '
          + 'there → the warning.',
        '⚠ The fourth line is the one that makes the paper work. A rule with '
          + 'no answer for what if it is not here is a rule that gets broken by a '
          + 'man doing his job.',
        '⚠ The warning says what will happen, not just what not to do. A man '
          + 'on a carton is a man in hospital. Nine words. Nobody forgets them.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '4.6.6R',
      bookRef: 'Unit 4 · 4.6 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their warning. The class says which one they would remember.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['can and cannot'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '4.6.7',
      bookRef: 'Unit 4 · 4.6 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about something at your work you cannot do alone (<b>20 to 35 '
  + 'words</b>). What is it? What do you need? What do people do instead when it '
  + 'is not there?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['I cannot lift a full pallet alone. I need the pallet truck or a second '
        + 'man. When the truck is broken the men drag the pallets, and that is '
        + 'how two backs went'],
      stems: ['I cannot lift…',
      'I need the pallet…',
      'When the truck…'],
      meter: {
        label: 'words from this lesson',
        words: ['cannot',
        'even',
        'cans',
        'verb',
        'book',
        'after',
        'bare',
        'reach']
      },
      coach: {
        title: 'What to include',
        task: 'Write about something at your work you cannot do alone (20 to 35 words). '
  + 'What is it? What do you need? What do people do instead when it is not '
  + 'there?',
        criteria: [{ t: 'A safety paper has four lines and one warning: where the thing '
              + 'lives → who can use it → when you need it → what to do when it '
              + 'is not there → the warning.' },
            { t: '⚠ The fourth line is the one that makes the paper work. A rule '
              + 'with no answer for what if it is not here is a rule that gets '
              + 'broken by a man doing his job.' },
            { t: '⚠ The warning says what will happen, not just what not to do. A '
              + 'man on a carton is a man in hospital. Nine words. Nobody forgets '
              + 'them.' }]
      },
      aiCheck: {
        task: 'Write about something at your work you cannot do alone (20 to 35 '
          + 'words). What is it? What do you need? What do people do instead when '
          + 'it is not there?',
        grammar: 'can and cannot',
        must: ['A safety paper has four lines and one warning: where the thing lives '
          + '→ who can use it → when you need it → what to do when it is not '
          + 'there → the warning.',
        '⚠ The fourth line is the one that makes the paper work. A rule with '
          + 'no answer for what if it is not here is a rule that gets broken by a '
          + 'man doing his job.',
        '⚠ The warning says what will happen, not just what not to do. A man '
          + 'on a carton is a man in hospital. Nine words. Nobody forgets them.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '4.6.7P',
      bookRef: 'Unit 4 · 4.6 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Has anybody been hurt doing '
  + 'that? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Has anybody been hurt doing that? — Two men. One was off for a month',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Has anybody been hurt '
          + 'doing that? Write the answer.',
        grammar: 'can and cannot',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (4.6) teaches: can and cannot. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: can and cannot.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '4.6.7R',
      bookRef: 'Unit 4 · 4.6 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many describe something people do that is not safe? '
  + 'Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> three things at your '
          + 'work you cannot do alone, and who you ask (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['can and cannot'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
