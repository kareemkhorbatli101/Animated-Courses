/* Unit 3 · cycle 3.5 — Go down the stairs and turn left.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u3-s05', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 3 · 3.5', part: '3.5',
          section: '5', lesson: 'Go down the stairs and turn left', title: 'Go down the stairs and turn left' },
  objective: 'give directions inside a building or a yard',
  study: {
    minutes: 90,
    objective: 'give directions inside a building or a yard',
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
    task: 'Write the directions from the gate to the office, for a visitor.',
    weak: 'Upstairs.',
    change: ['Start where the visitor is standing, and give the turns in order.',
        'Name something they will see, so they know they got it right.'],
    better: 'Go down the corridor, turn left at the stairs and it\'s the second door '
      + '- the one with the notice on it.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '3.5.1',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Give your partner directions from your chair to the door — '
              + 'without pointing. Use: go · turn · take · walk past · it\'s on '
              + 'your…',
            model: 'Open. Check the imperative: Go straight, turn left, take the '
              + 'second door. — no you',
            minWords: 4,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Match: go down · turn · take the · walk past · it\'s on → the '
              + 'stairs · left · lift · the printer · your right',
            model: 'go down the stairs · turn left · take the lift · walk past the '
              + 'printer · it\'s on your right',
            minWords: 5,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '3.5.2',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u3-3-5',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – imperatives for directions</b></p><table '
          + 'class=\'bk\'><tr><th>Direction</th><th>Example</th></tr><tr><td><b>Go</b> '
          + 'out of / along / down / up / through</td><td>Go out of this door. · '
          + 'Go through the gate.</td></tr><tr><td><b>Turn</b> left / '
          + 'right</td><td>Turn right at the end of the '
          + 'corridor.</td></tr><tr><td><b>Take</b> the lift / the stairs / the '
          + 'first door</td><td>Take the stairs to the second '
          + 'floor.</td></tr><tr><td><b>Walk past</b> / <b>Go '
          + 'past</b></td><td>Walk past the small '
          + 'window.</td></tr><tr><td><b>Don\'t</b> + verb</td><td><b>Don\'t</b> '
          + 'park in front of the gate.</td></tr><tr><td><b>It\'s</b> on your '
          + 'left / right / at the back</td><td>It\'s the big green door at the '
          + 'back.</td></tr></table><p>⚠ The imperative has <b>no <i>you</i></b>: '
          + '<i><b>Turn</b> right</i>, not <s>you turn right</s>. For a stranger, '
          + 'add <i>please</i> or start with <i>Excuse me</i>.</p><p>⚠ Give the '
          + 'directions in the <b>order the person walks them</b>, one '
          + 'instruction at a time, and stop so they can '
          + 'repeat.</p><p><b>Practise:</b> Put in order to go from the trade '
          + 'counter to the loading door.</p><p><span class="blank"></span> turn '
          + 'right · <span class="blank"></span> go out of this door · <span '
          + 'class="blank"></span> go through the gate · <span '
          + 'class="blank"></span> walk past the small window · <span '
          + 'class="blank"></span> it\'s the big green door at the '
          + 'back</p><p><b>Useful phrases:</b> Excuse me. · Where do I go? · And '
          + 'then? · Can I…? · Don\'t park… · Ask for…</p><p><b>Pronunciation – '
          + 'one chunk at a time.</b> 🔊 <b>Track 3.10</b> Listen. Each '
          + 'instruction is one chunk with a small stop after it: <i>Go out of '
          + 'this door ‖ and turn right ‖ walk past the window ‖ and go through '
          + 'the gate.</i> Repeat.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Who is asking for directions?',
            options: [{
              t: 'a new colleague',
              ok: false,
              why: 'Directions inside the building are given, which is what a new '
                + 'colleague needs too - but nobody is starting work here.'
            },
            {
              t: 'a driver',
              ok: true,
              why: 'He has boxes for Sham Trading, asks whether he can bring the '
                + 'lorry in, and is told where to park.'
            },
            {
              t: 'a customer',
              ok: false,
              why: 'He is standing at the trade counter, which is where customers '
                + 'come. He is told that is the wrong place for him.'
            }],
            evidence: 'the first line - what the speaker says he has with him, and what '
              + 'he asks about his vehicle'
          },
        {
            q: 'Books closed. Listen. Where may the driver park?',
            options: [{
              t: 'in the yard, on the left, next to the wall',
              ok: true,
              why: 'All three parts are hers, and she gives them in the order he '
                + 'will meet them.'
            },
            {
              t: 'in front of the gate',
              ok: false,
              why: 'That is the one place she forbids - the forklift uses it all day.'
            },
            {
              t: 'at the trade counter',
              ok: false,
              why: 'That is where he is standing now, and the first thing she '
                + 'tells him is that it is the wrong place.'
            }],
            evidence: 'Nour\'s line after "Where, then?"'
          },
        {
            q: 'Why does Nour give the directions one at a time?',
            options: [{
              t: 'so the driver can repeat each step before the next',
              ok: true,
              why: 'He says "Right. And then?" and "Through the gate" - he is '
                + 'checking as he goes. That is why they are given in walking '
                + 'order.'
            },
            {
              t: 'because the yard is dangerous',
              ok: false,
              why: 'The forklift warning is one instruction among several, not the '
                + 'reason for the way she gives them.'
            },
            {
              t: 'because he does not speak English well',
              ok: false,
              why: 'He speaks it fine - he asks three good questions.'
            }],
            evidence: 'the shape of the whole exchange - he repeats each one'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '3.5.2',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Put in order to go from the trade counter to the loading door. '
              + 'turn right · go out of this door · go through the gate · walk '
              + 'past the small window · it\'s the big green door at the back',
            model: 'go out of this door · turn right · walk past the small window · '
              + 'go through the gate · it\'s the big green door at the back',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'answer',
      ref: '3.5.2',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Which way does he go first?',
            model: 'go out of this door',
            minWords: 2,
            rows: 2,
            keys: ['out',
              'door'],
            need: 1,
            hint: 'Look in the dialogue above for the line with <i>first</i> in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What must he not do?',
            model: 'turn right',
            minWords: 1,
            rows: 2,
            keys: ['turn',
              'right'],
            need: 1,
            hint: 'A thing, in a few words - not a whole sentence. It is in the '
              + 'dialogue above. Play it again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '3.5.3',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A asks the way; B gives directions, one instruction at a '
  + 'time. Use the skeleton, then the role cards.',
      scene: 'u3-3-5-pair',
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
        head: ['Role card 1 — to the office',
        'Role card 2 — to the store room'],
        rows: [['From the trade counter: through the glass door, along the '
            + 'corridor, take the lift or the stairs to the second floor, turn '
            + 'left, second door. Don\'t use the lift with a trolley.',
          'From the yard: in at the loading door, past the forklift, turn '
            + 'right at the blue line, down three steps. Don\'t walk on the blue '
            + 'line.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '3.5.3R',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Excuse me.</td><td>☐ Where do I '
          + 'go?</td><td>☐ Turn right.</td><td>☐ Walk past…</td><td>☐ Don\'t '
          + 'park…</td><td>☐ Ask for…</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners follow the route with a finger. Typical errors: You '
              + 'turn right → Turn right; Go to the stairs down → Go down the '
              + 'stairs; It\'s in your left → on your left',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – imperatives for directions.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '3.5.4',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Give two colleagues directions from the door of this room to a place in this '
  + 'building — a different place each time. They must repeat the directions back '
  + 'before you say if they are right.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Place</th><th>How many '
          + 'instructions?</th><th>Did they repeat it '
          + 'right?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Grammar – imperatives for directions',
      'Dear Mr Saeed,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Give two colleagues directions from the door of this room to a place '
          + 'in this building — a different place each time. They must repeat the '
          + 'directions back before you say if they are right. (The dashes are '
          + 'blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Grammar – imperatives for directions',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (3.5) teaches: Grammar – imperatives for directions. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – imperatives for directions.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'imperatives',
        'directions',
        'imperative',
        'turn',
        'right',
        'stranger',
        'start',
        'excuse',
        'give']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – imperatives for directions.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '3.5.4R',
      bookRef: 'Unit 3 · 3.5 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I sent to the . Go , turn , and it\'s .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Grammar – imperatives for directions',
      'Dear Mr Saeed,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — I sent — to the —. Go , turn , and it\'s —. (The '
          + 'dashes are blanks the learner fills in with their own workplace. '
          + 'Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – imperatives for directions',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (3.5) teaches: '
          + 'Grammar – imperatives for directions. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – imperatives for directions.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'imperatives',
        'directions',
        'imperative',
        'turn',
        'right',
        'stranger',
        'start',
        'excuse',
        'give'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – imperatives for directions.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '3.5.5',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the directions Nour sends to a new supplier\'s driver, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>To:</b> Hamdan Printing — Mr Saeed (driver) <b>Subject:</b> '
          + 'How to find our loading door</p><p>Dear Mr Saeed,</p><p>Please '
          + 'don\'t come to the trade counter at the front — the lorry cannot '
          + 'stop there.</p><p>From the main street, turn right before the '
          + 'pharmacy into the small street. Go to the end and you will see a '
          + 'grey gate on your left. Go through the gate into the yard. Park on '
          + 'the left, next to the wall — please don\'t park in front of the '
          + 'gate, because the forklift uses it all day.</p><p>The loading door '
          + 'is the big green door at the back of the yard. Ask for Abu Yasser; '
          + 'he is there from 7.30 until 4.30.</p><p>If you are lost, telephone '
          + 'me on extension 212.</p><p>Nour</p><h4>Writer\'s box</h4><p><b>Shape '
          + 'of written directions:</b> where <b>not</b> to go → the route, in '
          + 'the order you walk or drive it → where to park → what to look for → '
          + 'who to ask for and when → a telephone number.</p><p>Give a '
          + '<b>landmark</b>, not only a direction: <i>turn right <b>before the '
          + 'pharmacy</b></i>. People find things, not angles.</p><p>Written '
          + 'directions need <b>one instruction per sentence</b> or per clause. A '
          + 'long sentence with four turns in it gets read twice and still goes '
          + 'wrong.</p><p>⚠ Always end with a telephone number. Directions are '
          + 'never perfect, and the number is what stops a lorry standing in the '
          + 'street.</p>'
      },
      questions: [{
            q: 'Where must the driver not come, and why?',
            minWords: 6,
            rows: 2,
            hint: 'A place - a room, a floor, a town. Look in the text above for '
              + 'the line with <i>driver</i> in it.'
          },
      {
            q: 'What can the driver see from the end of the small street?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>driver</i> in it.'
          },
      {
            q: 'What should the driver do if he is lost?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>driver</i> in it.'
          }],
      ideas: ['Dear Mr Saeed,',
      'Grammar – imperatives for directions'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '3.5.6',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write directions to <b>your</b> workplace, your home or your school for '
  + 'somebody who has never been (25 words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'imperatives',
        'directions',
        'imperative',
        'turn',
        'right',
        'stranger',
        'start']
      },
      coach: {
        title: 'What to include',
        task: 'Write directions to your workplace, your home or your school for somebody '
  + 'who has never been (25 words or more). Use the frame.',
        criteria: [{ t: 'Shape of written directions: where not to go → the route, in the '
              + 'order you walk or drive it → where to park → what to look for → '
              + 'who to ask for and when → a telephone number.' },
            { t: 'Give a landmark, not only a direction: turn right before the '
              + 'pharmacy. People find things, not angles.' },
            { t: 'Written directions need one instruction per sentence or per '
              + 'clause. A long sentence with four turns in it gets read twice '
              + 'and still goes wrong.' },
            { t: '⚠ Always end with a telephone number. Directions are never '
              + 'perfect, and the number is what stops a lorry standing in the '
              + 'street.' }]
      },
      aiCheck: {
        task: 'Write directions to your workplace, your home or your school for '
          + 'somebody who has never been (25 words or more). Use the frame.',
        grammar: 'Grammar – imperatives for directions',
        must: ['Shape of written directions: where not to go → the route, in the '
          + 'order you walk or drive it → where to park → what to look for → who '
          + 'to ask for and when → a telephone number.',
        'Give a landmark, not only a direction: turn right before the '
          + 'pharmacy. People find things, not angles.',
        'Written directions need one instruction per sentence or per clause. '
          + 'A long sentence with four turns in it gets read twice and still goes '
          + 'wrong.',
        '⚠ Always end with a telephone number. Directions are never perfect, '
          + 'and the number is what stops a lorry standing in the street.'],
        vocab: ['grammar',
        'imperatives',
        'directions',
        'imperative',
        'turn',
        'right',
        'stranger',
        'start',
        'excuse',
        'give']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '3.5.6P',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Walk your partner\'s directions with your finger on a plan or in '
  + 'your head. Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>At least one landmark (a shop, a sign, a '
          + 'colour)</td><td>&nbsp;</td></tr><tr><td>One instruction per '
          + 'sentence</td><td>&nbsp;</td></tr><tr><td>Something you must '
          + '<b>not</b> do, with a reason</td><td>&nbsp;</td></tr><tr><td>A name '
          + 'and a telephone number</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample feedback: "The bakery and the barber\'s make this easy. '
              + 'Could you add which floor the brown door leads to?"',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Walk your partner\'s directions with your finger on a '
          + 'plan or in your head. Tick ✓ or cross ✗.',
        grammar: 'Grammar – imperatives for directions',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (3.5) '
          + 'teaches: Grammar – imperatives for directions. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        must: ['Shape of written directions: where not to go → the route, in the '
          + 'order you walk or drive it → where to park → what to look for → who '
          + 'to ask for and when → a telephone number.',
        'Give a landmark, not only a direction: turn right before the '
          + 'pharmacy. People find things, not angles.',
        'Written directions need one instruction per sentence or per clause. '
          + 'A long sentence with four turns in it gets read twice and still goes '
          + 'wrong.',
        '⚠ Always end with a telephone number. Directions are never perfect, '
          + 'and the number is what stops a lorry standing in the street.'],
        vocab: ['grammar',
        'imperatives',
        'directions',
        'imperative',
        'turn',
        'right',
        'stranger',
        'start',
        'excuse',
        'give'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '3.5.6R',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their directions. The class listens with eyes '
  + 'closed and says where they got lost.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Listeners usually get lost at the point where two instructions '
              + 'are joined with and in one sentence. Splitting that sentence '
              + 'fixes it without adding a word',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – imperatives for directions.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '3.5.7',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write directions from the nearest bus stop or service stop to your home, for '
  + 'a visitor carrying something heavy (35 words or more). Say where the stairs '
  + 'are, and where to rest.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'imperatives',
        'directions',
        'imperative',
        'turn',
        'right',
        'stranger',
        'start']
      },
      coach: {
        title: 'What to include',
        task: 'Write directions from the nearest bus stop or service stop to your home, for '
  + 'a visitor carrying something heavy (35 words or more). Say where the stairs '
  + 'are, and where to rest.',
        criteria: [{ t: 'Shape of written directions: where not to go → the route, in the '
              + 'order you walk or drive it → where to park → what to look for → '
              + 'who to ask for and when → a telephone number.' },
            { t: 'Give a landmark, not only a direction: turn right before the '
              + 'pharmacy. People find things, not angles.' },
            { t: 'Written directions need one instruction per sentence or per '
              + 'clause. A long sentence with four turns in it gets read twice '
              + 'and still goes wrong.' },
            { t: '⚠ Always end with a telephone number. Directions are never '
              + 'perfect, and the number is what stops a lorry standing in the '
              + 'street.' }]
      },
      aiCheck: {
        task: 'Write directions from the nearest bus stop or service stop to your '
          + 'home, for a visitor carrying something heavy (35 words or more). Say '
          + 'where the stairs are, and where to rest.',
        grammar: 'Grammar – imperatives for directions',
        must: ['Shape of written directions: where not to go → the route, in the '
          + 'order you walk or drive it → where to park → what to look for → who '
          + 'to ask for and when → a telephone number.',
        'Give a landmark, not only a direction: turn right before the '
          + 'pharmacy. People find things, not angles.',
        'Written directions need one instruction per sentence or per clause. '
          + 'A long sentence with four turns in it gets read twice and still goes '
          + 'wrong.',
        '⚠ Always end with a telephone number. Directions are never perfect, '
          + 'and the number is what stops a lorry standing in the street.'],
        vocab: ['grammar',
        'imperatives',
        'directions',
        'imperative',
        'turn',
        'right',
        'stranger',
        'start',
        'excuse',
        'give']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '3.5.7P',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s directions as the visitor. Write on a slip: ★ I would '
  + 'find it. ✓ Can you add a landmark at…? ? one thing I still don\'t know',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "stop there if you need to rest" — very kind and very useful. '
              + '✓ Can you add a landmark at the top of the slope? ? Is there a '
              + 'light on the stairs at night?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s directions as the visitor. Write on a slip: — ★ '
          + 'I would find it. — ✓ Can you add a landmark at…? —? one thing I '
          + 'still don\'t know (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – imperatives for directions',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (3.5) teaches: Grammar – imperatives for directions. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – imperatives for directions.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'imperatives',
        'directions',
        'imperative',
        'turn',
        'right',
        'stranger',
        'start',
        'excuse',
        'give'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – imperatives for directions.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '3.5.7R',
      bookRef: 'Unit 3 · 3.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Put the directions on the wall. Find the clearest one and count its '
  + 'instructions. Is clear the same as short?',
      passage: {
        title: 'Homework',
        html: '<p>Write your final directions. Then write the directions a taxi '
          + 'driver would need, in <b>three</b> sentences only (20+ words). What '
          + 'did you leave out?</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Clear is not the same as short. The clearest directions usually '
              + 'have one or two more words than the shortest — the landmark and '
              + 'the warning',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – imperatives for directions.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
