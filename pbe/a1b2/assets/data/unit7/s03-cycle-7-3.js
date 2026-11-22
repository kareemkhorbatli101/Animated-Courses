/* Unit 7 · cycle 7.3 — Two of the ten.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE2.page('u7-s03', {
  book: { source: 'Proactive Business English · A1 Book 2', ref: 'Unit 7 · 7.3', part: '7.3',
          section: '3', lesson: 'Two of the ten', title: 'Two of the ten' },
  objective: 'say how many are bad, not just that they are bad',
  study: {
    minutes: 90,
    objective: 'say how many are bad, not just that they are bad',
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
    task: 'Write how many of a delivery are damaged.',
    weak: 'Some of them are crushed.',
    change: ['Give both numbers: how many are bad and how many came. Two of ten '
          + 'and two of two hundred are different mornings.',
        'Without a number the supervisor has to walk out and look, which is '
          + 'the work your line was supposed to save him.'],
    better: 'Two of the ten cartons are crushed. Eight are good.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '7.3.1',
      bookRef: 'Unit 7 · 7.3 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'There are ten cartons. Two are crushed. Say it in one sentence.',
            minWords: 6,
            rows: 2,
            hint: 'Both numbers in one sentence. \'Some\' is the word to avoid.'
          },
      {
            q: 'Read the two lines. Which can a supervisor use? Some of them are '
              + 'crushed · Two of the ten are crushed.',
            model: 'The second line',
            minWords: 1,
            rows: 2,
            hint: 'Ask which line he could act on without walking out to look.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '7.3.2',
      bookRef: 'Unit 7 · 7.3 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u7-7-3',
      passage: {
        title: 'Language box',
        html: '<p><b>How many are bad</b></p><table class=\'bk\'><tr><th>Vague — do '
          + 'not use at work</th><th>A quantity — use '
          + 'this</th></tr><tr><td><b>some of them</b></td><td><b>two of the '
          + 'ten</b></td></tr><tr><td><b>a few</b></td><td><b>three of the '
          + 'twelve</b></td></tr><tr><td><b>quite a lot</b></td><td><b>half of '
          + 'them — six of the twelve</b></td></tr><tr><td><b>most of '
          + 'them</b></td><td><b>nine of the twelve</b></td></tr></table><p>⚠ '
          + '<b>TWO numbers, always: how many are bad AND how many came.</b> '
          + '<b><i>Two crushed</i> is not enough.</b> <b>Two out of ten is a '
          + 'note; two out of three is a disaster. The same two.</b></p><p>⚠ '
          + '<b><i>a few</i>, <i>some</i> and <i>most</i> are real English and '
          + 'they belong in a conversation.</b> <b>They do not belong in a '
          + 'report, because nobody can act on them.</b> <b>At work, '
          + 'count.</b></p><p><b>Practise:</b> Write it with two numbers.</p><p>1 '
          + 'Twelve bags came. Three are torn. <span class="blank"></span>. 2 Six '
          + 'pallets came. All six are broken. <span class="blank"></span>. 3 '
          + 'Twenty boxes came. Ten are wet. <span '
          + 'class="blank"></span>.</p><p><b>Say it. Write it. Check it</b> — '
          + 'read your sentence back and point at the two numbers in '
          + 'it.</p><p><b>Useful words:</b> two of the ten · half of them · most '
          + 'of them · a few · how many came?</p><p><b>Sound — the two '
          + 'numbers.</b> 🔊 <b>Track 7.6</b> Listen. <i>TWO of the TEN.</i> '
          + '<b>Both numbers loud, with <i>of the</i> quiet between them.</b> Say '
          + 'it four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How many are crushed?',
            options: [{
              t: 'two of ten',
              ok: true,
              why: 'Abu Yasser asks twice, and then Ammar gives both numbers: ten '
                + 'came, two are crushed.'
            },
            {
              t: 'half',
              ok: false,
              why: 'Abu Yasser says half - but as what he would do IF it were '
                + 'half: telephone Aleppo. It is not what Ammar counted.'
            },
            {
              t: 'most of them',
              ok: false,
              why: 'He says most of them too, for the case where the lorry goes '
                + 'back full. Also not the count.'
            }],
            evidence: 'the line where Ammar finally gives two numbers'
          },
        {
            q: 'Listen again. How many cartons came altogether?',
            options: [{
              t: 'ten',
              ok: true,
              why: 'Abu Yasser asks for two numbers, not one: how many came and '
                + 'how many are crushed.'
            },
            {
              t: 'two',
              ok: false,
              why: 'Two is the number that are crushed. On its own it tells you '
                + 'nothing about how bad the delivery was.'
            },
            {
              t: 'eight',
              ok: false,
              why: 'Eight is what is left good. It is in the arithmetic, not in the answer.'
            }],
            evidence: 'Ammar\'s answer when he is finally asked both questions'
          },
        {
            q: 'What does Abu Yasser say the number decides?',
            options: [{
              t: 'whether it is a note or a lorry turning round',
              ok: true,
              why: 'Two of ten is a line on a sheet; most of them is a lorry going '
                + 'back loaded. The same damage, a different action.'
            },
            {
              t: 'whether the driver is blamed',
              ok: false,
              why: 'Blame is the next cycle\'s subject, and his answer there is '
                + 'that the driver did not load it.'
            },
            {
              t: 'whether Ammar opens the cartons',
              ok: false,
              why: 'Opening one is decided in cycle 7.5, and it is decided by '
                + 'which is worst, not by how many.'
            }],
            evidence: 'his last line, where he puts two different numbers side by side'
          }],
        say: true
      }
    },
    {
      id: 'c15',
      ref: '7.3.2',
      bookRef: 'Unit 7 · 7.3 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Write it with two numbers.',
      text: '<b>1</b> Twelve bags came. Three are torn. [[1]]. &nbsp; <b>2</b> Six '
      + 'pallets came. All six are broken. [[2]]. &nbsp; <b>3</b> Twenty boxes '
      + 'came. Ten are wet. [[3]].',
      plain: true,
      small: true,
      answers: {
        
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '7.3.2',
      bookRef: 'Unit 7 · 7.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does Abu Yasser do with the number?',
            model: 'He takes two off the invoice',
            minWords: 2,
            rows: 2,
            keys: ['off',
              'invoice'],
            need: 1,
            hint: 'He does something to a piece of paper with the two. Say what the paper is.'
          },
      {
            q: 'What would he do if it were half?',
            model: 'He telephones Aleppo',
            minWords: 1,
            rows: 2,
            keys: ['telephones',
              'aleppo'],
            need: 1,
            hint: 'A different number gets a different action, and this one '
              + 'involves a telephone and a city.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '7.3.3',
      bookRef: 'Unit 7 · 7.3 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One reports vaguely. One asks for the numbers. Then change places.',
      scene: 'u7-7-3-pair',
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
        rows: [['Aleppo cartons · crushed · ten · two',
          'Homs bags · torn · twelve · three']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '7.3.3R',
      bookRef: 'Unit 7 · 7.3 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ two of the ten</td><td>☐ half of '
          + 'them</td><td>☐ most of them</td><td>☐ a few</td><td>☐ How many '
          + 'came?</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['How many are bad'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: How many are bad.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '7.3.4',
      bookRef: 'Unit 7 · 7.3 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Four times something came damaged. Write it with two numbers each time.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What came</th><th>How many '
          + 'came</th><th>How many bad</th><th>In one '
          + 'sentence</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'What came: flour sacks Came: 20 Bad: 2 Twenty sacks came. Two of '
              + 'the twenty are torn · What came: bread trays Came: 40 Bad: 1 '
              + 'Forty trays came. One is broken · What came: oil cartons Came: 6 '
              + 'Bad: 3 Six cartons came. Three of the six are wet — half of them '
              + '· What came: sugar bags Came: 12 Bad: 11 Twelve bags came. '
              + 'Eleven of the twelve are torn',
            minWords: 6,
            rows: 3,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Four times something came damaged. Write it with two numbers each time.',
        grammar: 'How many are bad',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (7.3) teaches: How many are bad. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: How many are bad.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['numbers',
        'always',
        'crushed',
        'enough',
        'note',
        'disaster',
        'real',
        'english',
        'belong',
        'conversation']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: How many are bad.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '7.3.4R',
      bookRef: 'Unit 7 · 7.3 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: came. of the were .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'Twelve bags came. Eleven of the twelve are torn',
            minWords: 3,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — came. — of the — were —. (The dashes are blanks '
          + 'the learner fills in with their own workplace. Judge what they wrote '
          + 'in them, not the blanks.)',
        grammar: 'How many are bad',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (7.3) teaches: '
          + 'How many are bad. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: How many are bad.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['numbers',
        'always',
        'crushed',
        'enough',
        'note',
        'disaster',
        'real',
        'english',
        'belong',
        'conversation'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: How many are bad.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '7.3.5',
      bookRef: 'Unit 7 · 7.3 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the sheet on the wall. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>WHAT THE NUMBER DECIDES — ABU YASSER\'S RULE</b></p><table '
          + 'class=\'bk\'><tr><th>How many are bad</th><th>What '
          + 'happens</th></tr><tr><td><b>1 or 2 of ten</b></td><td>a note, and '
          + 'the invoice is reduced</td></tr><tr><td><b>about '
          + 'half</b></td><td>telephone the supplier the same '
          + 'day</td></tr><tr><td><b>most of them</b></td><td>⚠ <b>the lorry does '
          + 'not leave — it goes back loaded</b></td></tr><tr><td><b>all of '
          + 'them</b></td><td>⚠ <b>nothing is signed, and the office rings the '
          + 'supplier\'s office</b></td></tr></table><p>⚠ <b>Give me two numbers '
          + 'and I know which line this is. Give me "some" and I have to come and '
          + 'look. A.Y.</b></p><h4>Writer\'s box</h4><p><b>A damage report has '
          + 'the two numbers in its FIRST line.</b> <i>Ten cartons came. Two are '
          + 'crushed.</i></p><p>⚠ <b>First line, not last.</b> <b>The number '
          + 'decides what happens, so the number goes where the reader\'s eye '
          + 'lands.</b> <b>Everything else on the page is detail.</b></p><p>⚠ '
          + '<b>And the sentence that explains why this cycle exists:</b> <i>give '
          + 'me "some" and I have to come and look.</i> <b>A vague report makes '
          + 'somebody walk.</b></p>'
      },
      questions: [{
            q: 'What happens if two of ten are bad?',
            model: 'A note, and the invoice is reduced',
            minWords: 2,
            rows: 2,
            keys: ['note',
              'invoice',
              'reduced'],
            need: 1,
            hint: 'The table\'s small-damage row. Two things happen, one written '
              + 'and one financial.'
          },
      {
            q: 'What happens if most are bad?',
            model: 'The lorry does not leave — it goes back loaded',
            minWords: 3,
            rows: 2,
            keys: ['lorry',
              'leave',
              'back',
              'loaded'],
            need: 1,
            hint: 'The table\'s worst row. It is about the lorry, and about which '
              + 'direction it goes.'
          },
      {
            q: 'What does Abu Yasser have to do if you say some?',
            model: 'He has to come and look',
            minWords: 2,
            rows: 2,
            hint: 'Vagueness costs him his legs. Say what he is forced to do that a '
              + 'number would have saved him.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '7.3.6',
      bookRef: 'Unit 7 · 7.3 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a damage report for your own work (<b>15 words or more</b>). Two '
  + 'numbers in the first line.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['DAMAGE REPORT — 4 APRIL',
      'Twelve sugar bags came. Eleven are torn'],
      meter: {
        label: 'words from this lesson',
        words: ['numbers',
        'always',
        'crushed',
        'enough',
        'note',
        'disaster',
        'real',
        'english']
      },
      coach: {
        title: 'What to include',
        task: 'Write a damage report for your own work (15 words or more). Two numbers in '
  + 'the first line.',
        criteria: [{ t: 'A damage report has the two numbers in its FIRST line. Ten '
              + 'cartons came. Two are crushed.' },
            { t: '⚠ First line, not last. The number decides what happens, so the '
              + 'number goes where the reader\'s eye lands. Everything else on '
              + 'the page is detail.' },
            { t: '⚠ And the sentence that explains why this cycle exists: give me '
              + '"some" and I have to come and look. A vague report makes '
              + 'somebody walk.' }]
      },
      aiCheck: {
        task: 'Write a damage report for your own work (15 words or more). Two '
          + 'numbers in the first line.',
        grammar: 'How many are bad',
        must: ['A damage report has the two numbers in its FIRST line. Ten cartons '
          + 'came. Two are crushed.',
        '⚠ First line, not last. The number decides what happens, so the '
          + 'number goes where the reader\'s eye lands. Everything else on the '
          + 'page is detail.',
        '⚠ And the sentence that explains why this cycle exists: give me '
          + '"some" and I have to come and look. A vague report makes somebody '
          + 'walk.'],
        vocab: ['numbers',
        'always',
        'crushed',
        'enough',
        'note',
        'disaster',
        'real',
        'english',
        'belong',
        'conversation']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '7.3.6P',
      bookRef: 'Unit 7 · 7.3 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>Two '
          + 'numbers, in the FIRST line</td><td>&nbsp;</td></tr><tr><td>No '
          + '<i>some</i>, no <i>a few</i></td><td>&nbsp;</td></tr><tr><td>A place '
          + 'for the damage</td><td>&nbsp;</td></tr><tr><td>Which line of the '
          + 'rule it is</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) at the first line. (reading) "Eleven bags are torn" · '
              + '(pointing) at the bottom. (reading) nothing',
            minWords: 5,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'How many are bad',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (7.3) '
          + 'teaches: How many are bad. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        must: ['A damage report has the two numbers in its FIRST line. Ten cartons '
          + 'came. Two are crushed.',
        '⚠ First line, not last. The number decides what happens, so the '
          + 'number goes where the reader\'s eye lands. Everything else on the '
          + 'page is detail.',
        '⚠ And the sentence that explains why this cycle exists: give me '
          + '"some" and I have to come and look. A vague report makes somebody '
          + 'walk.'],
        vocab: ['numbers',
        'always',
        'crushed',
        'enough',
        'note',
        'disaster',
        'real',
        'english',
        'belong',
        'conversation'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '7.3.6R',
      bookRef: 'Unit 7 · 7.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their first line only. The class says which line of the rule it is.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['How many are bad'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: How many are bad.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '7.3.7',
      bookRef: 'Unit 7 · 7.3 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a load that came damaged (<b>20 to 35 words</b>). How many came? '
  + 'How many were bad? What did the company do?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['Last winter twelve cartons of oil came and six were wet all along the '
        + 'bottom. Half of them. The office telephoned Homs the same day and they '
        + 'sent six new ones free'],
      stems: ['Last winter twelve…',
      'Half of them…',
      'The office telephoned…'],
      meter: {
        label: 'words from this lesson',
        words: ['numbers',
        'always',
        'crushed',
        'enough',
        'note',
        'disaster',
        'real',
        'english']
      },
      coach: {
        title: 'What to include',
        task: 'Write about a load that came damaged (20 to 35 words). How many came? How '
  + 'many were bad? What did the company do?',
        criteria: [{ t: 'A damage report has the two numbers in its FIRST line. Ten '
              + 'cartons came. Two are crushed.' },
            { t: '⚠ First line, not last. The number decides what happens, so the '
              + 'number goes where the reader\'s eye lands. Everything else on '
              + 'the page is detail.' },
            { t: '⚠ And the sentence that explains why this cycle exists: give me '
              + '"some" and I have to come and look. A vague report makes '
              + 'somebody walk.' }]
      },
      aiCheck: {
        task: 'Write about a load that came damaged (20 to 35 words). How many '
          + 'came? How many were bad? What did the company do?',
        grammar: 'How many are bad',
        must: ['A damage report has the two numbers in its FIRST line. Ten cartons '
          + 'came. Two are crushed.',
        '⚠ First line, not last. The number decides what happens, so the '
          + 'number goes where the reader\'s eye lands. Everything else on the '
          + 'page is detail.',
        '⚠ And the sentence that explains why this cycle exists: give me '
          + '"some" and I have to come and look. A vague report makes somebody '
          + 'walk.'],
        vocab: ['numbers',
        'always',
        'crushed',
        'enough',
        'note',
        'disaster',
        'real',
        'english',
        'belong',
        'conversation']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '7.3.7P',
      bookRef: 'Unit 7 · 7.3 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Who paid for them? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Who paid for them? — Homs did. Because we telephoned the same day',
            minWords: 4,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Who paid for them? '
          + 'Write the answer.',
        grammar: 'How many are bad',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (7.3) teaches: How many are bad. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: How many are bad.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['numbers',
        'always',
        'crushed',
        'enough',
        'note',
        'disaster',
        'real',
        'english',
        'belong',
        'conversation'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: How many are bad.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '7.3.7R',
      bookRef: 'Unit 7 · 7.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many did the supplier pay? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> four damage reports '
          + 'from your work, each with two numbers (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['How many are bad'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: How many are bad.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
