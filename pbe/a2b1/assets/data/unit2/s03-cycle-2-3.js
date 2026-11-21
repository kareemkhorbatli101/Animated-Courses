/* Unit 2 · cycle 2.3 — How often do you count the stock?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u2-s03', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 2 · 2.3', part: '2.3',
          section: '3', lesson: 'How often do you count the stock?', title: 'How often do you count the stock?' },
  objective: 'say how often you do something at work',
  study: {
    minutes: 90,
    objective: 'say how often you do something at work',
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
    task: 'Write how often the stock is counted, and when.',
    weak: 'Sometimes.',
    change: ['Give the number of times - <i>once a week</i>, <i>twice a month</i>.',
        'Add the day, so somebody else could do it without asking you.'],
    better: 'We count the small stock once a week, on Thursday, and the whole '
      + 'warehouse twice a year.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '2.3.1',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      passage: {
        title: 'From the book',
        html: '<table '
          + 'class=\'bk\'><tr><th>0%</th><th></th><th></th><th></th><th>100%</th></tr><tr><td>never</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>always</td></tr></table>'
      },
      questions: [{
            q: 'Put the words on the line, from 0% to 100%: never · sometimes · '
              + 'always · often · usually',
            model: '0% never · sometimes · often · usually · 100% always',
            minWords: 2,
            rows: 2,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          },
      {
            q: 'True for you? I always check my email before ten. · I sometimes '
              + 'work on Friday. · I never take work home.',
            model: 'Open. Sample: I always check my email before ten — yes, that\'s '
              + 'true for me. I sometimes work on Friday, when the month ends. I '
              + 'never take work home',
            minWords: 6,
            rows: 3,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '2.3.2',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-3',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – how often? and frequency</b></p><table '
          + 'class=\'bk\'><tr><th>Question</th><th>Answer — adverb</th><th>Answer '
          + '— expression</th></tr><tr><td><b>How often</b> do you count the '
          + 'stock?</td><td>I <b>always</b> count it.</td><td><b>Every</b> '
          + 'morning. · <b>Twice a</b> month.</td></tr><tr><td><b>How often</b> '
          + 'does he check the email?</td><td>He <b>usually</b> checks it at '
          + 'nine.</td><td><b>Once a</b> week. · <b>Every other</b> '
          + 'day.</td></tr><tr><td><b>How often</b> do you work on '
          + 'Friday?</td><td>I <b>never</b> work on Friday.</td><td>Two <b>or '
          + 'three times a</b> year.</td></tr></table><p><b>Where does the adverb '
          + 'go?</b> <b>before</b> the main verb: <i>I <b>always</b> count.</i> · '
          + '<b>after</b> <i>be</i>: <i>He <b>is</b> <b>always</b> '
          + 'late.</i></p><p>⚠ <i>Every morning</i>, <i>twice a month</i> and '
          + '<i>once a week</i> go at the <b>end</b>: <i>I count the boxes '
          + '<b>every morning</b>.</i></p><p><b>Practise:</b> Put the word in the '
          + 'right place.</p><p>1 I check my email at nine. (always) 2 She is '
          + 'late. (never) 3 We count the stock. (twice a month) 4 Bassel works '
          + 'in the office. (sometimes) 5 The lorry is on time. '
          + '(usually)</p><p><b>Useful phrases:</b> How often…? · Every morning. '
          + '· Once a week. · Twice a month. · Every other day. · Hardly '
          + 'ever.</p><p><b>Pronunciation – stress.</b> 🔊 <b>Track 2.6</b> Listen '
          + 'and repeat. The first part is strong: <b>AL</b>ways · <b>U</b>sually '
          + '· <b>OF</b>ten · <b>SOME</b>times · <b>NE</b>ver · <b>EVE</b>ry '
          + 'morning</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Where are Nour and Abu Yasser?',
            options: [{
              t: 'in the office',
              ok: false,
              why: 'Nadia and the screen are both mentioned, which sounds like an '
                + 'office - but they are where the numbers GO, not where the talk '
                + 'is.'
            },
            {
              t: 'in the warehouse',
              ok: true,
              why: 'He counts the shelves before the lorries come and then writes '
                + 'it in the book.'
            },
            {
              t: 'at the trade counter',
              ok: false,
              why: 'Nothing is sold and no customer speaks.'
            }],
            evidence: 'what the other speaker says he walks past every morning, and '
              + 'what he writes it in'
          },
        {
            q: 'Books closed. Listen. How often does Abu Yasser count the whole warehouse?',
            options: [{
              t: 'twice a month',
              ok: true,
              why: '"The last Thursday and the fifteenth" - he gives the frequency '
                + 'and then the two days.'
            },
            {
              t: 'every morning',
              ok: false,
              why: 'Every morning is the FAST things - the boxes and the tape - '
                + 'not the whole warehouse.'
            },
            {
              t: 'twice a day',
              ok: false,
              why: 'Nobody says twice a day. "Check it twice" is a rule about one '
                + 'count, not a frequency.'
            }],
            evidence: 'his first answer'
          },
        {
            q: 'Why does Abu Yasser not trust the screen?',
            options: [{
              t: 'he has found the shelf and the screen disagree',
              ok: true,
              why: '"The screen says ninety; sometimes the shelf says eighty-six." '
                + 'The reason is a thing that happened, not an opinion.'
            },
            {
              t: 'because he cannot use a computer',
              ok: false,
              why: 'He never says that. He says he checks it, which is a different thing.'
            },
            {
              t: 'because Nadia asked him to count by hand',
              ok: false,
              why: 'He tells Nadia the result; she did not set the method.'
            }],
            evidence: 'his line with two numbers in it'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '2.3.2',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Put the word in the right place.',
      questions: [{
            q: '1 I check my email at nine. (always)',
            model: 'I always check my email at nine.',
            minWords: 2,
            rows: 2
          },
      {
            q: '2 She is late. (never)',
            model: 'She is never late.',
            minWords: 1,
            rows: 2
          },
      {
            q: '3 We count the stock. (twice a month)',
            model: 'We count the stock twice a month.',
            minWords: 2,
            rows: 2
          },
      {
            q: '4 Bassel works in the office. (sometimes)',
            model: 'Bassel sometimes works in the office.',
            minWords: 2,
            rows: 2
          },
      {
            q: '5 The lorry is on time. (usually)',
            model: 'The lorry is usually on time.',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '2.3.2',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How often does Abu Yasser count the whole stock?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *Yasser* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What does he do every morning?',
            minWords: 6,
            rows: 2,
            hint: 'A job, in two or three words. Look in the dialogue above for the '
              + 'line with *morning* in it. Play it again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '2.3.3',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. Use the skeleton. Then swap roles. Then use the role cards.',
      scene: 'u2-2-3-pair',
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
        head: ['Role card 1',
        'Role card 2'],
        rows: [['Nadia · checks the bank twice a day · sends the invoices once a '
            + 'week, on Wednesday · never works at the weekend · sometimes stays '
            + 'until five at the end of the month',
          'Bassel · visits Homs every other week · telephones customers every '
            + 'morning · hardly ever writes an email · always sends a message '
            + 'after a visit']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '2.3.3R',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ How often…?</td><td>☐ always</td><td>☐ '
          + 'usually</td><td>☐ never</td><td>☐ every other…</td><td>☐ twice a '
          + 'month</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the two frequency expressions. Typical errors: I '
              + 'check always → I always check; two times a month → twice a month '
              + '(both are understood, but twice is the natural one); every two '
              + 'weeks / every other week — both correct',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – how often? and frequency.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '2.3.4',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Ask three colleagues how often they do these things at work: check email · '
  + 'write a report · meet a customer · work late · take a day off. Make notes.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Name</th><th>Does it '
          + 'often</th><th>Hardly ever does '
          + 'it</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Grammar – how often? and frequency'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Ask three colleagues how often they do these things at work: check '
          + 'email · write a report · meet a customer · work late · take a day '
          + 'off. Make notes.',
        grammar: 'Grammar – how often? and frequency',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (2.3) teaches: Grammar – how often? and frequency. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – how often? and frequency.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'often',
        'frequency',
        'adverb',
        'before',
        'main',
        'verb',
        'always',
        'count',
        'after']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – how often? and frequency.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '2.3.4R',
      bookRef: 'Unit 2 · 2.3 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: always , but he / she hardly ever .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Grammar – how often? and frequency'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — always , but he / she hardly ever —. (The dashes '
          + 'are blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Grammar – how often? and frequency',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (2.3) teaches: '
          + 'Grammar – how often? and frequency. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – how often? and frequency.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'often',
        'frequency',
        'adverb',
        'before',
        'main',
        'verb',
        'always',
        'count',
        'after'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – how often? and frequency.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '2.3.5',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the short note Abu Yasser gives to a new warehouse worker, and answer '
  + 'the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>THE STOCK ROUTINE</b> — please read and keep</p><p>We count '
          + 'the whole stock twice a month: on the fifteenth and on the last '
          + 'Thursday. I walk the shelves every morning before the door opens and '
          + 'I check the fast lines — boxes, tape, plastic wrap. I always write '
          + 'the numbers in the book, not only on the computer. If the shelf and '
          + 'the screen are different, tell me the same day. We never change a '
          + 'number without a second person.</p><h4>Writer\'s box</h4><p><b>Shape '
          + 'of a routine note:</b> what we do → how often → who does it → one '
          + 'rule that is never broken.</p><p>Join two routines with <b>and</b>: '
          + '<i>I walk the shelves <b>and</b> I check the fast lines.</i> Join a '
          + 'contrast with <b>but</b>: <i>We count twice a month, <b>but</b> I '
          + 'check the boxes every day.</i></p><p>Use <b>always</b> and '
          + '<b>never</b> for the rules of the workplace — they are strong words, '
          + 'so use them only when they are true.</p><p>⚠ <i>Every morning</i> at '
          + 'the end, the adverb <i>always</i> before the verb. Both in one '
          + 'sentence is fine: <i>I <b>always</b> check the tape <b>every '
          + 'morning</b>.</i> — but one is usually enough.</p>'
      },
      questions: [{
            q: 'How often is the whole stock counted?',
            minWords: 6,
            rows: 2,
            hint: 'How many times in what - twice a day, every Thursday. Look in '
              + 'the text above for the line with *counted* in it.'
          },
      {
            q: 'What does Abu Yasser check every morning?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with *Yasser* in it.'
          },
      {
            q: 'What must you do if the shelf and the screen are different?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Your own '
              + 'workplace, not the book\'s. Say it out loud once before you '
              + 'write it - a sentence or two is enough.'
          }],
      ideas: ['Grammar – how often? and frequency'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '2.3.6',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a short routine note for a new colleague in <b>your</b> job (25 words '
  + 'or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'often',
        'frequency',
        'adverb',
        'before',
        'main',
        'verb',
        'always']
      },
      coach: {
        title: 'What to include',
        task: 'Write a short routine note for a new colleague in your job (25 words or '
  + 'more). Use the frame.',
        criteria: [{ t: 'Shape of a routine note: what we do → how often → who does it → '
              + 'one rule that is never broken.' },
            { t: 'Join two routines with and: I walk the shelves and I check the '
              + 'fast lines. Join a contrast with but: We count twice a month, '
              + 'but I check the boxes every day.' },
            { t: 'Use always and never for the rules of the workplace — they are '
              + 'strong words, so use them only when they are true.' },
            { t: '⚠ Every morning at the end, the adverb always before the verb. '
              + 'Both in one sentence is fine: I always check the tape every '
              + 'morning. — but one is usually enough.' }]
      },
      aiCheck: {
        task: 'Write a short routine note for a new colleague in your job (25 words '
          + 'or more). Use the frame.',
        grammar: 'Grammar – how often? and frequency',
        must: ['Shape of a routine note: what we do → how often → who does it → one '
          + 'rule that is never broken.',
        'Join two routines with and: I walk the shelves and I check the fast '
          + 'lines. Join a contrast with but: We count twice a month, but I check '
          + 'the boxes every day.',
        'Use always and never for the rules of the workplace — they are '
          + 'strong words, so use them only when they are true.',
        '⚠ Every morning at the end, the adverb always before the verb. Both '
          + 'in one sentence is fine: I always check the tape every morning. — '
          + 'but one is usually enough.'],
        vocab: ['grammar',
        'often',
        'frequency',
        'adverb',
        'before',
        'main',
        'verb',
        'always',
        'count',
        'after']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '2.3.6P',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Read your partner\'s note. Tick ✓ or cross ✗. Underline one thing to fix.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>At least two frequency '
          + 'expressions</td><td>&nbsp;</td></tr><tr><td><i>always</i> / '
          + '<i>never</i> in the right place (before the main '
          + 'verb)</td><td>&nbsp;</td></tr><tr><td>One rule with '
          + '<i>never</i></td><td>&nbsp;</td></tr><tr><td>Clear who does '
          + 'what</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample feedback: "The rule with never is strong and clear. Move '
              + 'always in front of the verb: I always count it."',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Read your partner\'s note. Tick ✓ or cross ✗. Underline '
          + 'one thing to fix.',
        grammar: 'Grammar – how often? and frequency',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (2.3) '
          + 'teaches: Grammar – how often? and frequency. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        must: ['Shape of a routine note: what we do → how often → who does it → one '
          + 'rule that is never broken.',
        'Join two routines with and: I walk the shelves and I check the fast '
          + 'lines. Join a contrast with but: We count twice a month, but I check '
          + 'the boxes every day.',
        'Use always and never for the rules of the workplace — they are '
          + 'strong words, so use them only when they are true.',
        '⚠ Every morning at the end, the adverb always before the verb. Both '
          + 'in one sentence is fine: I always check the tape every morning. — '
          + 'but one is usually enough.'],
        vocab: ['grammar',
        'often',
        'frequency',
        'adverb',
        'before',
        'main',
        'verb',
        'always',
        'count',
        'after'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '2.3.6R',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read one sentence before and after the fix. The class '
  + 'says what changed.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Before: I count always it before the shop opens. → After: I '
              + 'always count it before the shop opens. (adverb before the main '
              + 'verb)',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – how often? and frequency.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '2.3.7',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about <b>your own</b> week at work (35 words or more). Use at least '
  + 'four of: <i>always · usually · often · sometimes · hardly ever · never · '
  + 'once a week · twice a month · every other day</i>.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'often',
        'frequency',
        'adverb',
        'before',
        'main',
        'verb',
        'always']
      },
      coach: {
        title: 'What to include',
        task: 'Write about your own week at work (35 words or more). Use at least four of: '
  + 'always · usually · often · sometimes · hardly ever · never · once a week · '
  + 'twice a month · every other day.',
        criteria: [{ t: 'Shape of a routine note: what we do → how often → who does it → '
              + 'one rule that is never broken.' },
            { t: 'Join two routines with and: I walk the shelves and I check the '
              + 'fast lines. Join a contrast with but: We count twice a month, '
              + 'but I check the boxes every day.' },
            { t: 'Use always and never for the rules of the workplace — they are '
              + 'strong words, so use them only when they are true.' },
            { t: '⚠ Every morning at the end, the adverb always before the verb. '
              + 'Both in one sentence is fine: I always check the tape every '
              + 'morning. — but one is usually enough.' }]
      },
      aiCheck: {
        task: 'Write about your own week at work (35 words or more). Use at least '
          + 'four of: always · usually · often · sometimes · hardly ever · never '
          + '· once a week · twice a month · every other day.',
        grammar: 'Grammar – how often? and frequency',
        must: ['Shape of a routine note: what we do → how often → who does it → one '
          + 'rule that is never broken.',
        'Join two routines with and: I walk the shelves and I check the fast '
          + 'lines. Join a contrast with but: We count twice a month, but I check '
          + 'the boxes every day.',
        'Use always and never for the rules of the workplace — they are '
          + 'strong words, so use them only when they are true.',
        '⚠ Every morning at the end, the adverb always before the verb. Both '
          + 'in one sentence is fine: I always check the tape every morning. — '
          + 'but one is usually enough.'],
        vocab: ['grammar',
        'often',
        'frequency',
        'adverb',
        'before',
        'main',
        'verb',
        'always',
        'count',
        'after']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '2.3.7P',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ I like… ✓ Can you add how '
  + 'often? ? a question about the routine',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ Six frequency words — well done. ✓ Can you add how often you '
              + 'see customers? ? Why is Thursday afternoon quiet?',
            minWords: 6,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ I like… — ✓ Can you '
          + 'add how often? —? a question about the routine (The dashes are '
          + 'blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Grammar – how often? and frequency',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (2.3) teaches: Grammar – how often? and frequency. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – how often? and frequency.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'often',
        'frequency',
        'adverb',
        'before',
        'main',
        'verb',
        'always',
        'count',
        'after'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – how often? and frequency.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '2.3.7R',
      bookRef: 'Unit 2 · 2.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Walk and read three texts. Find the person whose week is most like yours and '
  + 'tell them one thing you both do.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then write five sentences about how often '
          + 'things happen in your street or building: the rubbish, the water, '
          + 'the electricity, the post, the bread van (20+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'We both check the email twice a day and we both never work at the weekend',
            minWords: 5,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – how often? and frequency.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
