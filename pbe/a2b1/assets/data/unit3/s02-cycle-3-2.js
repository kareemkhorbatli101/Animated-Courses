/* Unit 3 · cycle 3.2 — It's in the second drawer.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u3-s02', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 3 · 3.2', part: '3.2',
          section: '2', lesson: 'It\'s in the second drawer', title: 'It\'s in the second drawer' },
  objective: 'say exactly where something is, and ask for it',
  study: {
    minutes: 90,
    objective: 'say exactly where something is, and ask for it',
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
    task: 'Write where the spare keys are kept, for the next person on the desk.',
    weak: 'In the drawer.',
    change: ['Say which drawer. A room with four drawers has no <i>the drawer</i>.',
        'Add the desk it belongs to, so somebody who has never sat there can find it.'],
    better: 'They\'re in the second drawer of the desk by the window.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '3.2.1',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Put your pen on, in, under, next to and behind your book. Say '
              + 'what you are doing each time.',
            model: 'Open — a physical drill. Check the form as they speak: I\'m '
              + 'putting it on the book. · Now it\'s under the book',
            minWords: 6,
            rows: 3,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Which preposition? The folder is the shelf. · The box is the '
              + 'desk (not on it). · The printer is the two cabinets. · My bag is '
              + 'the chair.',
            model: 'The folder is on the shelf. · The box is under the desk. · The '
              + 'printer is between the two cabinets. · My bag is behind / next '
              + 'to the chair',
            minWords: 6,
            rows: 3,
            hint: 'One of the ones named in the question - pick it and say it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '3.2.2',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u3-3-2',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – prepositions of place</b></p><table '
          + 'class=\'bk\'><tr><th>Preposition</th><th>Example at '
          + 'work</th></tr><tr><td><b>in</b> / <b>on</b> / '
          + '<b>under</b></td><td>in the drawer · on the shelf · under the '
          + 'tray</td></tr><tr><td><b>next to</b> / <b>beside</b></td><td>The '
          + 'printer is next to the '
          + 'cupboard.</td></tr><tr><td><b>between</b></td><td>It\'s between the '
          + 'tray and the keyboard.</td></tr><tr><td><b>behind</b> / <b>in front '
          + 'of</b></td><td>The warehouse is behind the '
          + 'building.</td></tr><tr><td><b>above</b> / <b>below</b></td><td>The '
          + 'noticeboard is above the small table.</td></tr><tr><td><b>at</b> the '
          + 'front / the back / the top</td><td>The counter is at the front of '
          + 'the building.</td></tr></table><p>⚠ <b>in</b> = inside something '
          + 'closed (a drawer, a cupboard, a box). <b>on</b> = on a surface (a '
          + 'desk, a shelf, the wall).</p><p>⚠ <i>on the left</i> / <i>on the '
          + 'right</i> — never <s>in the left</s>.</p><p><b>Practise:</b> '
          + 'Complete with the right preposition.</p><p>1 The file is <span '
          + 'class="blank"></span> the second drawer. 2 The printer is <span '
          + 'class="blank"></span> the two cabinets. 3 Your bag is <span '
          + 'class="blank"></span> the chair. 4 The noticeboard is <span '
          + 'class="blank"></span> the door, <span class="blank"></span> the '
          + 'right. 5 The yard is <span class="blank"></span> the '
          + 'building.</p><p><b>Useful phrases:</b> Where\'s…? · It should be in… '
          + '· I looked. · Here it is. · Put it back in… · on the left / on the '
          + 'right</p><p><b>Pronunciation – stress the preposition.</b> 🔊 '
          + '<b>Track 3.4</b> Listen. The preposition is the new information, so '
          + 'it is loud: <i>It\'s <b>UN</b>der the tray, not <b>ON</b> it.</i> '
          + 'Repeat the five pairs.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is Mr Ayoub looking for?',
            options: [{
              t: 'the Homs file',
              ok: true,
              why: 'He says it is not on his desk, and it turns up under the tray '
                + 'on Nadia\'s.'
            },
            {
              t: 'the stapler',
              ok: false,
              why: 'Small office things are talked about all through this unit. '
                + 'This one is not in the scene.'
            },
            {
              t: 'his telephone',
              ok: false,
              why: 'Nobody dials and nobody rings in this exchange.'
            }],
            evidence: 'his first line, and the four places they look before they find it'
          },
        {
            q: 'Books closed. Listen. Where was the Homs file in the end?',
            options: [{
              t: 'between the tray and the keyboard on Nadia\'s desk',
              ok: true,
              why: 'Nour tells him to look UNDER the tray; he finds it between the '
                + 'tray and the keyboard, which is close but not the same place.'
            },
            {
              t: 'in the second drawer',
              ok: false,
              why: 'That is where it should have been. He looked, and found only Hama.'
            },
            {
              t: 'on Mr Ayoub\'s own desk',
              ok: false,
              why: 'His first line rules that out - that is why he is asking.'
            }],
            evidence: 'Mr Ayoub\'s line when he finds it'
          },
        {
            q: 'What does Mr Ayoub ask her to do in future?',
            options: [{
              t: 'write the room and the drawer on the front of the file',
              ok: true,
              why: 'Not an apology - an address on the file, so nobody loses '
                + 'twenty minutes next time.'
            },
            {
              t: 'always put it back the same evening',
              ok: false,
              why: 'Nour offers that herself; he answers "don\'t be sorry" and '
                + 'asks for something else.'
            },
            {
              t: 'ask Nadia before taking a file',
              ok: false,
              why: 'Nobody says that. Nadia took it for a reason - the April invoices.'
            }],
            evidence: 'his last line'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '3.2.2',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Complete with the right preposition.',
      text: '<b>1</b> The file is [[1]] the second drawer. &nbsp; <b>2</b> The '
      + 'printer is [[2]] the two cabinets. &nbsp; <b>3</b> Your bag is [[3]] the '
      + 'chair. &nbsp; <b>4</b> The noticeboard is [[4]] the door, [[4b]] the '
      + 'right. &nbsp; <b>5</b> The yard is [[5]] the building.',
      plain: true,
      small: true,
      answers: {
        '1': ['in'],
        '2': ['between'],
        '3': ['under / behind'],
        '4': ['next to'],
        '4b': ['on'],
        '5': ['behind']
      }
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '3.2.2',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Where is the file in the end?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *file* in it. Play '
              + 'it again with the subtitles on.'
          },
      {
            q: 'Why is it not in the filing cabinet?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with *because* and it will come out whole. '
              + 'Look in the dialogue above for the line with *cabinet* in it. '
              + 'Play it again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '3.2.3',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A has lost something; B says where it is. Use the skeleton, '
  + 'then the role cards.',
      scene: 'u3-3-2-pair',
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
        rows: [['Lost: the stapler. Normal place: the top drawer. Really: on the '
            + 'printer, behind the paper.',
          'Lost: the Aleppo folder. Normal place: the shelf above the '
            + 'cupboard. Really: in the car, in the back.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '3.2.3R',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Where\'s…?</td><td>☐ It should be '
          + 'in…</td><td>☐ I looked.</td><td>☐ Look under…</td><td>☐ Here it '
          + 'is.</td><td>☐ on the left</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners draw a small plan. Typical errors: in the left → on '
              + 'the left; It\'s in the shelf → on the shelf; behind of the chair '
              + '→ behind the chair (no of)',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – prepositions of place.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '3.2.4',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Hide a small object in the room. A colleague asks questions with Is it…? and '
  + 'you answer yes or no until they find it. Change roles. Do this three times.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Object</th><th>Where I hid '
          + 'it</th><th>How many '
          + 'questions?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Grammar – prepositions of place'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Hide a small object in the room. A colleague asks questions with Is '
          + 'it…? and you answer yes or no until they find it. Change roles. Do '
          + 'this three times.',
        grammar: 'Grammar – prepositions of place',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (3.2) teaches: Grammar – prepositions of place. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – prepositions of place.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'prepositions',
        'place',
        'inside',
        'something',
        'closed',
        'drawer',
        'cupboard',
        'surface',
        'desk']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – prepositions of place.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '3.2.4R',
      bookRef: 'Unit 3 · 3.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I hid the . It was the , between and . found it in questions.',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Grammar – prepositions of place'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — I hid the —. It was — the , between — and —. — '
          + 'found it in — questions. (The dashes are blanks the learner fills in '
          + 'with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'Grammar – prepositions of place',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (3.2) teaches: '
          + 'Grammar – prepositions of place. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – prepositions of place.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'prepositions',
        'place',
        'inside',
        'something',
        'closed',
        'drawer',
        'cupboard',
        'surface',
        'desk'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – prepositions of place.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '3.2.5',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the notice Nour puts on the filing cabinet, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>WHERE THINGS ARE KEPT</b> — second-floor office</p><p>Customer '
          + 'files: in the filing cabinet by the window. Drawer 1 — Damascus. '
          + 'Drawer 2 — Hama and Homs. Drawer 3 — Aleppo and the '
          + 'coast.</p><p>Invoices (this year): in the green folders on the shelf '
          + 'above the cupboard. Invoices (last year): in the cupboard, on the '
          + 'bottom shelf.</p><p>Paper, envelopes and tape: in the cupboard, on '
          + 'the middle shelf. The stapler and the scissors live in the top '
          + 'drawer of the desk next to the printer.</p><p>If you take a file, '
          + 'please write your name on the list on the noticeboard — and put it '
          + 'back the same day.</p><h4>Writer\'s box</h4><p><b>Shape of a "where '
          + 'things are kept" notice:</b> title and room → one line for each '
          + 'group of things → the exact place (furniture → drawer or shelf) → '
          + 'the rule at the end.</p><p>Go from <b>big to small</b>: <i>in the '
          + 'cupboard, on the middle shelf</i> — not <i>on the middle shelf of '
          + 'the cupboard that is next to…</i></p><p>Use <b>by</b> or <b>next '
          + 'to</b> to say which piece of furniture: <i>the filing cabinet <b>by '
          + 'the window</b></i>.</p><p>⚠ A notice is for a person who is standing '
          + 'in the room and cannot find something. Write the <b>furniture '
          + 'first</b>; that is what they can see.</p>'
      },
      questions: [{
            q: 'Where are the Homs files?',
            minWords: 6,
            rows: 2,
            hint: 'A place - a room, a floor, a town. Look in the text above for '
              + 'the line with *Homs* in it.'
          },
      {
            q: 'Where are last year\'s invoices?',
            minWords: 6,
            rows: 2,
            hint: 'A place - a room, a floor, a town. Look in the text above for '
              + 'the line with *invoices* in it.'
          },
      {
            q: 'What must you do if you take a file?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Your own '
              + 'workplace, not the book\'s. Say it out loud once before you '
              + 'write it - a sentence or two is enough.'
          }],
      ideas: ['Grammar – prepositions of place'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '3.2.6',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a "where things are kept" notice for <b>your</b> workplace or your '
  + 'home (25 words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'prepositions',
        'place',
        'inside',
        'something',
        'closed',
        'drawer',
        'cupboard']
      },
      coach: {
        title: 'What to include',
        task: 'Write a "where things are kept" notice for your workplace or your home (25 '
  + 'words or more). Use the frame.',
        criteria: [{ t: 'Shape of a "where things are kept" notice: title and room → one '
              + 'line for each group of things → the exact place (furniture → '
              + 'drawer or shelf) → the rule at the end.' },
            { t: 'Go from big to small: in the cupboard, on the middle shelf — not '
              + 'on the middle shelf of the cupboard that is next to…' },
            { t: 'Use by or next to to say which piece of furniture: the filing '
              + 'cabinet by the window.' },
            { t: '⚠ A notice is for a person who is standing in the room and '
              + 'cannot find something. Write the furniture first; that is what '
              + 'they can see.' }]
      },
      aiCheck: {
        task: 'Write a "where things are kept" notice for your workplace or your '
          + 'home (25 words or more). Use the frame.',
        grammar: 'Grammar – prepositions of place',
        must: ['Shape of a "where things are kept" notice: title and room → one line '
          + 'for each group of things → the exact place (furniture → drawer or '
          + 'shelf) → the rule at the end.',
        'Go from big to small: in the cupboard, on the middle shelf — not on '
          + 'the middle shelf of the cupboard that is next to…',
        'Use by or next to to say which piece of furniture: the filing '
          + 'cabinet by the window.',
        '⚠ A notice is for a person who is standing in the room and cannot '
          + 'find something. Write the furniture first; that is what they can '
          + 'see.'],
        vocab: ['grammar',
        'prepositions',
        'place',
        'inside',
        'something',
        'closed',
        'drawer',
        'cupboard',
        'surface',
        'desk']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '3.2.6P',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Stand up and try to find one thing in your partner\'s notice — '
  + 'can you, from the words alone? Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>Big to small: furniture → drawer or '
          + 'shelf</td><td>&nbsp;</td></tr><tr><td><i>in</i> for inside, '
          + '<i>on</i> for a surface</td><td>&nbsp;</td></tr><tr><td>Every group '
          + 'of things has a place</td><td>&nbsp;</td></tr><tr><td>A rule at the '
          + 'end</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample feedback: "I could find everything. Check in the hook — a '
              + 'hook is a surface, so it is on."',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Stand up and try to find one thing in your partner\'s '
          + 'notice — can you, from the words alone? Tick ✓ or cross ✗. (The '
          + 'dashes are blanks the learner fills in with their own workplace. '
          + 'Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – prepositions of place',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (3.2) '
          + 'teaches: Grammar – prepositions of place. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        must: ['Shape of a "where things are kept" notice: title and room → one line '
          + 'for each group of things → the exact place (furniture → drawer or '
          + 'shelf) → the rule at the end.',
        'Go from big to small: in the cupboard, on the middle shelf — not on '
          + 'the middle shelf of the cupboard that is next to…',
        'Use by or next to to say which piece of furniture: the filing '
          + 'cabinet by the window.',
        '⚠ A notice is for a person who is standing in the room and cannot '
          + 'find something. Write the furniture first; that is what they can '
          + 'see.'],
        vocab: ['grammar',
        'prepositions',
        'place',
        'inside',
        'something',
        'closed',
        'drawer',
        'cupboard',
        'surface',
        'desk'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '3.2.6R',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read one line. The class says whether they could find '
  + 'the thing with their eyes closed.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'A line passes the eyes-closed test when it names the furniture '
              + 'first: in the cupboard, on the top shelf works; on the top shelf '
              + 'alone does not, because there are four top shelves in the room',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – prepositions of place.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '3.2.7',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'A colleague is away and you must find three things on his or her desk. Write '
  + 'the message you would send asking <b>where</b> they are, and say where you '
  + 'have already looked (35 words or more).',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'prepositions',
        'place',
        'inside',
        'something',
        'closed',
        'drawer',
        'cupboard']
      },
      coach: {
        title: 'What to include',
        task: 'A colleague is away and you must find three things on his or her desk. Write '
  + 'the message you would send asking where they are, and say where you have '
  + 'already looked (35 words or more).',
        criteria: [{ t: 'Shape of a "where things are kept" notice: title and room → one '
              + 'line for each group of things → the exact place (furniture → '
              + 'drawer or shelf) → the rule at the end.' },
            { t: 'Go from big to small: in the cupboard, on the middle shelf — not '
              + 'on the middle shelf of the cupboard that is next to…' },
            { t: 'Use by or next to to say which piece of furniture: the filing '
              + 'cabinet by the window.' },
            { t: '⚠ A notice is for a person who is standing in the room and '
              + 'cannot find something. Write the furniture first; that is what '
              + 'they can see.' }]
      },
      aiCheck: {
        task: 'A colleague is away and you must find three things on his or her '
          + 'desk. Write the message you would send asking where they are, and '
          + 'say where you have already looked (35 words or more).',
        grammar: 'Grammar – prepositions of place',
        must: ['Shape of a "where things are kept" notice: title and room → one line '
          + 'for each group of things → the exact place (furniture → drawer or '
          + 'shelf) → the rule at the end.',
        'Go from big to small: in the cupboard, on the middle shelf — not on '
          + 'the middle shelf of the cupboard that is next to…',
        'Use by or next to to say which piece of furniture: the filing '
          + 'cabinet by the window.',
        '⚠ A notice is for a person who is standing in the room and cannot '
          + 'find something. Write the furniture first; that is what they can '
          + 'see.'],
        vocab: ['grammar',
        'prepositions',
        'place',
        'inside',
        'something',
        'closed',
        'drawer',
        'cupboard',
        'surface',
        'desk']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '3.2.7P',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s message and write the answer: say exactly where each of '
  + 'the three things is.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            minWords: 6,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      ideas: ['Grammar – prepositions of place'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s message and write the answer: say exactly where '
          + 'each of the three things is.',
        grammar: 'Grammar – prepositions of place',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (3.2) teaches: Grammar – prepositions of place. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – prepositions of place.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'prepositions',
        'place',
        'inside',
        'something',
        'closed',
        'drawer',
        'cupboard',
        'surface',
        'desk'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      example: ['You wrote that you check the shelves first. I asked: who reads the '
        + 'sheet after you? You said Abu Yasser reads it at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – prepositions of place.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '3.2.7R',
      bookRef: 'Unit 3 · 3.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read a question and its answer together. The class says whether the answer '
  + 'is exact enough to find the thing first time.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final message. Then draw a small plan of your desk and '
          + 'write six sentences about where things are, using six different '
          + 'prepositions (20+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'An answer is exact enough when it gives the furniture, the part '
              + 'of it and, for small things, the landmark: in the small tin on '
              + 'top of the filing cabinet, behind the plant',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – prepositions of place.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
