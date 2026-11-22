/* Unit 7 · cycle 7.2 — Broken, torn, wet.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE2.page('u7-s02', {
  book: { source: 'Proactive Business English · A1 Book 2', ref: 'Unit 7 · 7.2', part: '7.2',
          section: '2', lesson: 'Broken, torn, wet', title: 'Broken, torn, wet' },
  objective: 'say something is damaged',
  study: {
    minutes: 90,
    objective: 'say something is damaged',
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
    task: 'Write what you can see on a damaged carton.',
    weak: 'The box is damaged.',
    change: ['Say WHICH kind of damage - crushed, torn or wet. The three mean '
          + 'three different things happened.',
        'Say WHERE, and write what you SEE rather than what you think happened.'],
    better: 'One corner of the carton is crushed - the bottom corner. It is not torn '
      + 'and it is not wet. I have not opened it.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '7.2.1',
      bookRef: 'Unit 7 · 7.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Name three things that get damaged at your work. Say it in '
              + 'Arabic. Your teacher writes the English.',
            minWords: 6,
            rows: 2,
            hint: 'Think of what arrives wrapped, what sits on the floor, and what '
              + 'gets rained on. Three different kinds of damage.'
          },
      {
            q: 'Read the three words. Which goes with paper, which with glass, '
              + 'which with rain? broken · torn · wet',
            model: 'Torn goes with paper, broken with glass, wet with rain',
            minWords: 3,
            rows: 2,
            hint: 'Ask what each material does when it fails: paper comes apart, '
              + 'glass comes to pieces, and rain leaves something behind.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '7.2.2',
      bookRef: 'Unit 7 · 7.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u7-7-2',
      passage: {
        title: 'Language box',
        html: '<p><b>Saying what is wrong with it</b></p><table '
          + 'class=\'bk\'><tr><th>The word</th><th>It goes with</th><th>At '
          + 'work</th></tr><tr><td><b>broken</b></td><td>hard things</td><td>the '
          + 'pallet is <b>broken</b> · the handle is '
          + '<b>broken</b></td></tr><tr><td><b>torn</b></td><td>paper, bags, '
          + 'plastic</td><td>the bag is <b>torn</b> · the label is '
          + '<b>torn</b></td></tr><tr><td><b>crushed</b></td><td>cartons, '
          + 'boxes</td><td>the carton is <b>crushed</b> on one '
          + 'corner</td></tr><tr><td><b>wet</b></td><td>anything, from '
          + 'rain</td><td>the bottom is <b>wet</b></td></tr></table><p>⚠ <b>Say '
          + 'WHERE as well as WHAT:</b> <i>crushed <b>on one corner</b></i> · '
          + '<i>torn <b>at the top</b></i> · <i>wet <b>along the bottom</b></i>. '
          + '<b><i>It is broken</i> on its own tells a supervisor nothing he can '
          + 'use.</b></p><p>⚠ <b>And say what you have NOT looked at:</b> <i>I '
          + 'have not opened it. I do not know about the inside.</i> <b>Unit 5.6 '
          + 'said the same thing about a wrapped pallet, and it is the same '
          + 'reason.</b></p><p><b>Practise:</b> Write the word.</p><p>1 The paper '
          + 'bag is <span class="blank"></span>. 2 The wooden pallet is <span '
          + 'class="blank"></span>. 3 The carton is <span class="blank"></span> '
          + 'on one corner. 4 The bottom of the box is <span '
          + 'class="blank"></span>.</p><p><b>Useful words:</b> it is broken · it '
          + 'is torn · crushed on one corner · wet along the bottom · I have not '
          + 'opened it</p><p><b>Sound — the flat fact.</b> 🔊 <b>Track 7.4</b> '
          + 'Listen. <i>It is crushed.↘ One corner.↘</i> <b>Flat, short, no '
          + 'feeling in it.</b> <b>Damage said calmly gets dealt with; damage '
          + 'said loudly gets argued about.</b> Say it four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is wrong with the carton?',
            options: [{
              t: 'it is wet',
              ok: false,
              why: 'Abu Yasser does ask if it is wet, and they talk about rain. '
                + 'Listen to Ammar\'s answer: not wet, dry.'
            },
            {
              t: 'it is crushed',
              ok: true,
              why: 'Ammar says it in his first line, and again at the end - dry, '
                + 'and crushed on one corner.'
            },
            {
              t: 'it is torn',
              ok: false,
              why: 'A damaged box sounds torn, but nobody uses that word here. The '
                + 'words are crushed and dry.'
            }],
            evidence: 'Ammar\'s first line, and his answer when Abu Yasser asks about water'
          },
        {
            q: 'Listen again. Is the carton wet?',
            options: [{
              t: 'no - it is dry',
              ok: true,
              why: 'Ammar checks and says so, and dry is half of what tells Abu '
                + 'Yasser what happened to it.'
            },
            {
              t: 'yes, along the bottom',
              ok: false,
              why: 'Wet along the bottom IS described in this scene - as the mark '
                + 'rain makes, which is what this carton does NOT have.'
            },
            {
              t: 'he has not looked',
              ok: false,
              why: 'The thing he has not looked at is the inside. The outside he '
                + 'describes exactly.'
            }],
            evidence: 'the short exchange after Abu Yasser asks about rain'
          },
        {
            q: 'How does Abu Yasser know it was dropped rather than rained on?',
            options: [{
              t: 'rain marks all along the bottom; a drop crushes one corner',
              ok: true,
              why: 'Two different shapes of damage, and this one has the second. '
                + 'Twenty years of looking is how he knows which is which.'
            },
            {
              t: 'because the lorry came in the rain',
              ok: false,
              why: 'Nothing in the scene says what the weather was. He reads the '
                + 'box, not the sky.'
            },
            {
              t: 'because the driver told him',
              ok: false,
              why: 'The driver is not in this scene at all.'
            }],
            evidence: 'his last line, about what each kind of damage looks like'
          }],
        say: true
      }
    },
    {
      id: 'c15',
      ref: '7.2.2',
      bookRef: 'Unit 7 · 7.2 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Write the word.',
      text: '<b>1</b> The paper bag is [[1]]. &nbsp; <b>2</b> The wooden pallet is '
      + '[[2]]. &nbsp; <b>3</b> The carton is [[3]] on one corner. &nbsp; '
      + '<b>4</b> The bottom of the box is [[4]].',
      plain: true,
      small: true,
      answers: {
        
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '7.2.2',
      bookRef: 'Unit 7 · 7.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Which corner?',
            model: 'One corner — the bottom corner',
            minWords: 2,
            rows: 2,
            keys: ['bottom',
              'corner'],
            need: 1,
            hint: 'Not just that a corner is crushed - WHICH one. He says it, and '
              + 'the position is what tells you what happened.'
          },
      {
            q: 'What is inside?',
            model: 'He does not know; he has not opened it',
            minWords: 3,
            rows: 2,
            keys: ['know',
              'opened'],
            need: 1,
            hint: 'He is honest about this one. The answer is not a thing; it is '
              + 'what he has not done yet.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '7.2.3',
      bookRef: 'Unit 7 · 7.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One reports. One asks. Then change places.',
      scene: 'u7-7-2-pair',
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
        rows: [['carton · Aleppo · crushed · one corner · not wet, dry',
          'bag · Homs · torn · along the top · wet at the bottom']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '7.2.3R',
      bookRef: 'Unit 7 · 7.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ it is broken</td><td>☐ it is '
          + 'torn</td><td>☐ crushed on one corner</td><td>☐ wet along the '
          + 'bottom</td><td>☐ I have not opened it</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['Saying what is wrong with it'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Saying what is wrong with it.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '7.2.4',
      bookRef: 'Unit 7 · 7.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Four damaged things you have seen at work. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The thing</th><th>What is '
          + 'wrong</th><th>Where</th><th>Did you look '
          + 'inside?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'The thing: a flour sack What is wrong: torn Where: along the '
              + 'bottom seam Looked inside: yes, flour on the pallet · The thing: '
              + 'a bread tray What is wrong: broken Where: one corner of the '
              + 'frame Looked inside: no inside to look at · The thing: a carton '
              + 'of oil What is wrong: wet Where: the bottom, all along it Looked '
              + 'inside: no · The thing: a bag of sugar What is wrong: torn '
              + 'Where: a straight cut near the top Looked inside: no',
            minWords: 6,
            rows: 3,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Four damaged things you have seen at work. Write it.',
        grammar: 'Saying what is wrong with it',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (7.2) teaches: Saying what is wrong with it. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Saying what is wrong with it.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['saying',
        'wrong',
        'well',
        'crushed',
        'corner',
        'torn',
        'along',
        'bottom',
        'broken',
        'supervisor']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Saying what is wrong with it.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '7.2.4R',
      bookRef: 'Unit 7 · 7.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: The is . . I looked / did not look inside.',
      questions: [{
            q: 'Write what you told the class.',
            model: 'The flour sack is torn, along the bottom seam. I looked inside — '
              + 'there is flour on the pallet',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — The — is —. . I looked / did not look inside. (The '
          + 'dashes are blanks the learner fills in with their own workplace. '
          + 'Judge what they wrote in them, not the blanks.)',
        grammar: 'Saying what is wrong with it',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (7.2) teaches: '
          + 'Saying what is wrong with it. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Saying what is wrong with it.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['saying',
        'wrong',
        'well',
        'crushed',
        'corner',
        'torn',
        'along',
        'bottom',
        'broken',
        'supervisor'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Saying what is wrong with it.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '7.2.5',
      bookRef: 'Unit 7 · 7.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read what Abu Yasser pinned up. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>DAMAGE — WHAT THE MARK TELLS YOU</b></p><table '
          + 'class=\'bk\'><tr><th>What you see</th><th>What probably '
          + 'happened</th></tr><tr><td>crushed on <b>one corner</b></td><td>it '
          + 'was <b>dropped</b></td></tr><tr><td>crushed on <b>the '
          + 'top</b></td><td>something <b>heavy was stacked</b> on '
          + 'it</td></tr><tr><td>wet <b>along the bottom</b></td><td>it <b>stood '
          + 'in water</b>, or in the rain</td></tr><tr><td>wet <b>on the '
          + 'top</b></td><td>it was in the <b>rain</b>, '
          + 'uncovered</td></tr><tr><td>torn <b>in a straight line</b></td><td>a '
          + '<b>knife</b> — somebody opened it</td></tr></table><p>⚠ <b>Write '
          + 'what you SEE, not what you think happened. The table is mine, not '
          + 'yours. A.Y.</b></p><h4>Writer\'s box</h4><p><b>A damage line has '
          + 'three parts:</b> the thing → what is wrong → <b>where on '
          + 'it</b>.</p><p>⚠ <b>Write what you SEE. Not what happened.</b> '
          + '<i>Crushed on one corner</i> is yours to write. <i>Somebody dropped '
          + 'it</i> is not<b> — </b>you were not there, and the moment you write '
          + 'it the conversation is about a person instead of a carton.</p><p>⚠ '
          + '<b>Unit 4.4 said the same thing about an empty shelf:</b> <i>a clean '
          + 'square, no dust</i>. <b>Say what you saw and let the man with twenty '
          + 'years do the thinking.</b></p>'
      },
      questions: [{
            q: 'What does one crushed corner tell you?',
            model: 'It was dropped',
            minWords: 1,
            rows: 2,
            hint: 'A single crushed corner is not the same as a flat box. It says '
              + 'how the damage arrived.'
          },
      {
            q: 'What is the difference between wet at the bottom and wet on the top?',
            model: 'Wet at the bottom means it stood in water; wet on the top means '
              + 'rain, uncovered',
            minWords: 5,
            rows: 2,
            keys: ['means',
              'stood',
              'water',
              'rain'],
            need: 1,
            hint: 'Two different ways water gets to a carton - one from the ground, '
              + 'one from the sky. Say both halves.'
          },
      {
            q: 'What does Abu Yasser tell you to write?',
            model: 'Write what you SEE, not what happened',
            minWords: 2,
            rows: 2,
            keys: ['see',
              'happened'],
            need: 1,
            hint: 'Two words, one of them in capitals in the book. It is the '
              + 'difference between a fact and a guess.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '7.2.6',
      bookRef: 'Unit 7 · 7.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write four damage lines for things at your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['DAMAGE — TUESDAY MORNING, BACK STORE',
      '1 The flour sack is torn, along the bottom seam'],
      meter: {
        label: 'words from this lesson',
        words: ['saying',
        'wrong',
        'well',
        'crushed',
        'corner',
        'torn',
        'along',
        'bottom']
      },
      coach: {
        title: 'What to include',
        task: 'Write four damage lines for things at your own work (15 words or more).',
        criteria: [{ t: 'A damage line has three parts: the thing → what is wrong → where on it.' },
            { t: '⚠ Write what you SEE. Not what happened. Crushed on one corner '
              + 'is yours to write. Somebody dropped it is not — you were not '
              + 'there, and the moment you write it the conversation is about a '
              + 'person instead of a carton.' },
            { t: '⚠ Unit 4.4 said the same thing about an empty shelf: a clean '
              + 'square, no dust. Say what you saw and let the man with twenty '
              + 'years do the thinking.' }]
      },
      aiCheck: {
        task: 'Write four damage lines for things at your own work (15 words or more).',
        grammar: 'Saying what is wrong with it',
        must: ['A damage line has three parts: the thing → what is wrong → where on it.',
        '⚠ Write what you SEE. Not what happened. Crushed on one corner is '
          + 'yours to write. Somebody dropped it is not — you were not there, and '
          + 'the moment you write it the conversation is about a person instead '
          + 'of a carton.',
        '⚠ Unit 4.4 said the same thing about an empty shelf: a clean square, '
          + 'no dust. Say what you saw and let the man with twenty years do the '
          + 'thinking.'],
        vocab: ['saying',
        'wrong',
        'well',
        'crushed',
        'corner',
        'torn',
        'along',
        'bottom',
        'broken',
        'supervisor']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '7.2.6P',
      bookRef: 'Unit 7 · 7.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>A '
          + 'place on every line</td><td>&nbsp;</td></tr><tr><td>What you SAW, '
          + 'not what you think</td><td>&nbsp;</td></tr><tr><td>No person '
          + 'named</td><td>&nbsp;</td></tr><tr><td>A line saying what you did not '
          + 'look at</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "The tray is broken" · (pointing) '
              + 'Here. (reading) "Hani dropped the sack"',
            minWords: 4,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Saying what is wrong with it',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (7.2) '
          + 'teaches: Saying what is wrong with it. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        must: ['A damage line has three parts: the thing → what is wrong → where on it.',
        '⚠ Write what you SEE. Not what happened. Crushed on one corner is '
          + 'yours to write. Somebody dropped it is not — you were not there, and '
          + 'the moment you write it the conversation is about a person instead '
          + 'of a carton.',
        '⚠ Unit 4.4 said the same thing about an empty shelf: a clean square, '
          + 'no dust. Say what you saw and let the man with twenty years do the '
          + 'thinking.'],
        vocab: ['saying',
        'wrong',
        'well',
        'crushed',
        'corner',
        'torn',
        'along',
        'bottom',
        'broken',
        'supervisor'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '7.2.6R',
      bookRef: 'Unit 7 · 7.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read one line. The class says if a person is named in it. '
  + 'Nobody should be.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Saying what is wrong with it'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Saying what is wrong with it.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '7.2.7',
      bookRef: 'Unit 7 · 7.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about damaged goods at your work (<b>20 to 35 words</b>). What was '
  + 'damaged? Where? What happened to it in the end?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['In February six sacks of sugar came torn along the bottom. The driver '
        + 'said they were like that in Homs. The office sent them back and we got '
        + 'six new ones on Thursday'],
      stems: ['In February six…',
      'The driver said…',
      'The office sent…'],
      meter: {
        label: 'words from this lesson',
        words: ['saying',
        'wrong',
        'well',
        'crushed',
        'corner',
        'torn',
        'along',
        'bottom']
      },
      coach: {
        title: 'What to include',
        task: 'Write about damaged goods at your work (20 to 35 words). What was damaged? '
  + 'Where? What happened to it in the end?',
        criteria: [{ t: 'A damage line has three parts: the thing → what is wrong → where on it.' },
            { t: '⚠ Write what you SEE. Not what happened. Crushed on one corner '
              + 'is yours to write. Somebody dropped it is not — you were not '
              + 'there, and the moment you write it the conversation is about a '
              + 'person instead of a carton.' },
            { t: '⚠ Unit 4.4 said the same thing about an empty shelf: a clean '
              + 'square, no dust. Say what you saw and let the man with twenty '
              + 'years do the thinking.' }]
      },
      aiCheck: {
        task: 'Write about damaged goods at your work (20 to 35 words). What was '
          + 'damaged? Where? What happened to it in the end?',
        grammar: 'Saying what is wrong with it',
        must: ['A damage line has three parts: the thing → what is wrong → where on it.',
        '⚠ Write what you SEE. Not what happened. Crushed on one corner is '
          + 'yours to write. Somebody dropped it is not — you were not there, and '
          + 'the moment you write it the conversation is about a person instead '
          + 'of a carton.',
        '⚠ Unit 4.4 said the same thing about an empty shelf: a clean square, '
          + 'no dust. Say what you saw and let the man with twenty years do the '
          + 'thinking.'],
        vocab: ['saying',
        'wrong',
        'well',
        'crushed',
        'corner',
        'torn',
        'along',
        'bottom',
        'broken',
        'supervisor']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '7.2.7P',
      bookRef: 'Unit 7 · 7.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did anybody get the blame? '
  + 'Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Did anybody get the blame? — No. Nobody knew who stacked them',
            minWords: 3,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did anybody get the '
          + 'blame? Write the answer.',
        grammar: 'Saying what is wrong with it',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (7.2) teaches: Saying what is wrong with it. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Saying what is wrong with it.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['saying',
        'wrong',
        'well',
        'crushed',
        'corner',
        'torn',
        'along',
        'bottom',
        'broken',
        'supervisor'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Saying what is wrong with it.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '7.2.7R',
      bookRef: 'Unit 7 · 7.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many did somebody get the blame? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> four damage lines '
          + 'from a real day, with a place on every one (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Saying what is wrong with it'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Saying what is wrong with it.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
