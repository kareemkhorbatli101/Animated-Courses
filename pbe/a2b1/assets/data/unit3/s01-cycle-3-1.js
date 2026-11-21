/* Unit 3 · cycle 3.1 — There are six desks and one printer.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u3-s01', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 3 · 3.1', part: '3.1',
          section: '1', lesson: 'There are six desks and one printer', title: 'There are six desks and one printer' },
  objective: 'say what there is in a room or a building',
  study: {
    minutes: 90,
    objective: 'say what there is in a room or a building',
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
    task: 'Write what is in the office, for somebody ordering furniture.',
    weak: 'Desks and a printer.',
    change: ['Count them. <i>There are six desks</i> is an order; <i>desks</i> is a guess.',
        'Use <i>There is</i> for the one and <i>There are</i> for the many, '
          + 'in one sentence.'],
    better: 'There are six desks and one printer, and there\'s a cupboard behind the door.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '3.1.1',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Thing</th><th>How '
          + 'many?</th></tr><tr><td>desks / '
          + 'tables</td><td>&nbsp;</td></tr><tr><td>chairs</td><td>&nbsp;</td></tr><tr><td>windows</td><td>&nbsp;</td></tr><tr><td>doors</td><td>&nbsp;</td></tr><tr><td>boards</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Count what is in your classroom. Write the number, then tell a '
              + 'partner: There are chairs. There is .',
            minWords: 6,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Singular or plural? shelf → · box → · tray → · person →',
            model: 'shelf → shelves · box → boxes · tray → trays · person → people',
            minWords: 2,
            rows: 2,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '3.1.2',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u3-3-1',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – there is / there are</b></p><table '
          + 'class=\'bk\'><tr><th>+</th><th>–</th><th>?</th></tr><tr><td><b>There\'s</b> '
          + 'a printer. (one thing)</td><td><b>There isn\'t</b> a '
          + 'photocopier.</td><td><b>Is there</b> a scanner? – No, there '
          + 'isn\'t.</td></tr><tr><td><b>There are</b> six desks. (more than '
          + 'one)</td><td><b>There aren\'t</b> any trays.</td><td><b>Are '
          + 'there</b> any chairs? – Yes, there are.</td></tr></table><p><b>How '
          + 'many…?</b> <i><b>How many</b> desks <b>are there</b>? – There are '
          + 'six.</i></p><p>⚠ <i>There is</i> tells you the thing <b>exists</b>. '
          + '<i>It is</i> tells you <b>about</b> a thing you already know: '
          + '<i><b>There\'s</b> a printer in the office. <b>It\'s</b> very '
          + 'old.</i></p><p><b>Practise:</b> Complete with <i>there is / there '
          + 'are / there isn\'t / there aren\'t</i>.</p><p>1 <span '
          + 'class="blank"></span> six desks in the office. 2 <span '
          + 'class="blank"></span> a photocopier — we use the one downstairs. 3 '
          + '<span class="blank"></span> two filing cabinets. 4 <span '
          + 'class="blank"></span> any trays on my desk. 5 How many chairs <span '
          + 'class="blank"></span>?</p><p><b>Useful phrases:</b> Let me look. · '
          + 'There\'s one… · There are two… · There isn\'t a… · Is there a…? · '
          + 'Write that down.</p><p><b>Pronunciation – weak <i>there</i>.</b> 🔊 '
          + '<b>Track 3.2</b> Listen and repeat: <i>there\'s a printer</i> /ðəzə '
          + 'ˈprɪntə/ · <i>there are six desks</i> /ðərə sɪks desks/ · <i>is '
          + 'there a scanner?</i> /ɪz ðərə ˈskænə/</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is Nour doing?',
            options: [{
              t: 'cleaning the office',
              ok: false,
              why: 'A fridge, a cupboard and a noticeboard are all named, which '
                + 'sounds like tidying. Nothing is moved or washed.'
            },
            {
              t: 'making a list of the office things',
              ok: true,
              why: 'She counts desks, chairs, cabinets, machines, and says what is '
                + 'not there.'
            },
            {
              t: 'moving to a new desk',
              ok: false,
              why: 'A desk for visitors is mentioned, which makes this tempting - '
                + 'but it is counted, not taken.'
            }],
            evidence: 'Mr Ayoub\'s first line - what the head office has asked for - '
              + 'and then everything Nour counts'
          },
        {
            q: 'Books closed. Listen. How many chairs are there?',
            options: [{
              t: 'seven',
              ok: true,
              why: 'Nour counts six; Mr Ayoub adds the visitor\'s chair by the '
                + 'window, and she corrects herself in the next line.'
            },
            {
              t: 'six',
              ok: false,
              why: 'Six is her first count, and six is right for the DESKS. The '
                + 'chairs are the ones that got corrected.'
            },
            {
              t: 'two',
              ok: false,
              why: 'Two is the filing cabinets - and the telephones. Neither is chairs.'
            }],
            evidence: 'Mr Ayoub corrects Nour\'s first count'
          },
        {
            q: 'Why does Mr Ayoub tell her to write that there is no photocopier?',
            options: [{
              t: 'so the head office does not ask why one is missing',
              ok: true,
              why: 'He says it outright: they always ask. Writing the reason with '
                + 'the gap saves the second letter.'
            },
            {
              t: 'because he wants to buy one',
              ok: false,
              why: 'Nobody asks to buy a photocopier. The buying argument in this '
                + 'unit is about the printer, in cycle 3.4.'
            },
            {
              t: 'because the one downstairs is broken',
              ok: false,
              why: 'They USE the one downstairs - that is why they manage without their own.'
            }],
            evidence: 'his line "the head office always asks why"'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '3.1.2',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Complete with there is / there are / there isn\'t / there aren\'t.',
      text: '<b>1</b> [[1]] six desks in the office. &nbsp; <b>2</b> [[2]] a '
      + 'photocopier — we use the one downstairs. &nbsp; <b>3</b> [[3]] two '
      + 'filing cabinets. &nbsp; <b>4</b> [[4]] any trays on my desk. &nbsp; '
      + '<b>5</b> How many chairs [[5]]?',
      plain: true,
      small: true,
      answers: {
        '1': ['There are'],
        '2': ['There isn\'t'],
        '3': ['There are'],
        '4': ['There aren\'t'],
        '5': ['are there']
      }
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '3.1.2',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many desks are there?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *desks* in it. Play '
              + 'it again with the subtitles on.'
          },
      {
            q: 'What is there not in the office?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with *office* in it. Play it again '
              + 'with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '3.1.3',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A asks about a room; B answers from the role card. Then swap.',
      scene: 'u3-3-1-pair',
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
        head: ['Role card 1 — the warehouse',
        'Role card 2 — the trade counter'],
        rows: [['shelves: 24 · pallets: about 60 · forklift: 1 · trolleys: 2 · '
            + 'ladder: 1 · no computer (the office has it) · no window',
          'counter: 1 long one · chairs: 2 for customers · till: 1 · printer: '
            + '1 small one · no scanner · a noticeboard by the door']]
      }
    },
    {
      id: 'c6',
      kind: 'own',
      ref: '3.1.3R',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ How many…?</td><td>☐ There '
          + 'are…</td><td>☐ There\'s one…</td><td>☐ Is there a…?</td><td>☐ No, '
          + 'there isn\'t.</td><td>☐ We use the one…</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['Dear colleagues,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – there is / there are.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '3.1.4',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Make a list of your workplace — one room. Then tell two colleagues, and ask '
  + 'about theirs. Make notes.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Room / place</th><th>There '
          + 'is…</th><th>There are…</th><th>There '
          + 'isn\'t…</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Dear colleagues,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Make a list of your workplace — one room. Then tell two colleagues, '
          + 'and ask about theirs. Make notes. (The dashes are blanks the learner '
          + 'fills in with their own workplace. Judge what they wrote in them, '
          + 'not the blanks.)',
        grammar: 'Grammar – there is / there are',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (3.1) teaches: Grammar – there is / there are. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – there is / there are.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'desks',
        'thing',
        'exists',
        'about',
        'already',
        'know',
        'there\'s',
        'printer',
        'office']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – there is / there are.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '3.1.4R',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class about one colleague\'s workplace: In \'s office there are . '
  + 'There\'s one , but there isn\'t a .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Dear colleagues,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class about one colleague\'s workplace: — In \'s office '
          + 'there are —. There\'s one , but there isn\'t a —. (The dashes are '
          + 'blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Grammar – there is / there are',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (3.1) teaches: '
          + 'Grammar – there is / there are. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – there is / there are.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'desks',
        'thing',
        'exists',
        'about',
        'already',
        'know',
        'there\'s',
        'printer',
        'office'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – there is / there are.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '3.1.5',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the list Nour sends to the head office and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>To:</b> Head Office — Equipment <b>From:</b> Nour Mansour, '
          + 'Mezzeh branch <b>Subject:</b> Office equipment list</p><p>Dear '
          + 'colleagues,</p><p>This is the list for the second-floor office. '
          + 'There are six desks and seven chairs — one chair is for visitors. '
          + 'There are two filing cabinets, one cupboard and one noticeboard. '
          + 'There is one printer and there are two telephones. There is a small '
          + 'fridge.</p><p>There isn\'t a photocopier and there isn\'t a scanner. '
          + 'We use the photocopier on the ground floor, at the trade counter. '
          + 'Please tell me if you need the warehouse list '
          + 'too.</p><p>Nour</p><h4>Writer\'s box</h4><p><b>Shape of an equipment '
          + 'list:</b> who it is for and which room → the furniture → the '
          + 'machines → what is <b>missing</b>, and what you use instead → an '
          + 'offer or a question → your name.</p><p>Group the same kind of thing '
          + 'in one sentence: <i>There are two filing cabinets, one cupboard and '
          + 'one noticeboard.</i> One thing per sentence makes a long, slow '
          + 'list.</p><p><b>Say what is missing, and why it does not matter.</b> '
          + '<i>There isn\'t a photocopier. We use the one downstairs.</i> — that '
          + 'answers the next question before it is asked.</p><p>⚠ <i>There are '
          + 'six desk</i> ✗ → <i>six desk<b>s</b></i>. After a number bigger than '
          + 'one, the noun is plural, always.</p>'
      },
      questions: [{
            q: 'Why are there seven chairs and only six desks?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with *because* and it will come out whole. '
              + 'Look in the text above for the line with *chairs* in it.'
          },
      {
            q: 'Which two machines are not in the office?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with *machines* in it.'
          },
      {
            q: 'What does Nour offer at the end?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with *Nour* in it.'
          }],
      ideas: ['Dear colleagues,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '3.1.6',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write the equipment list for <b>your</b> room (25 words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'desks',
        'thing',
        'exists',
        'about',
        'already',
        'know',
        'there\'s']
      },
      coach: {
        title: 'What to include',
        task: 'Write the equipment list for your room (25 words or more). Use the frame.',
        criteria: [{ t: 'Shape of an equipment list: who it is for and which room → the '
              + 'furniture → the machines → what is missing, and what you use '
              + 'instead → an offer or a question → your name.' },
            { t: 'Group the same kind of thing in one sentence: There are two '
              + 'filing cabinets, one cupboard and one noticeboard. One thing per '
              + 'sentence makes a long, slow list.' },
            { t: 'Say what is missing, and why it does not matter. There isn\'t a '
              + 'photocopier. We use the one downstairs. — that answers the next '
              + 'question before it is asked.' },
            { t: '⚠ There are six desk ✗ → six desks. After a number bigger than '
              + 'one, the noun is plural, always.' }]
      },
      aiCheck: {
        task: 'Write the equipment list for your room (25 words or more). Use the frame.',
        grammar: 'Grammar – there is / there are',
        must: ['Shape of an equipment list: who it is for and which room → the '
          + 'furniture → the machines → what is missing, and what you use instead '
          + '→ an offer or a question → your name.',
        'Group the same kind of thing in one sentence: There are two filing '
          + 'cabinets, one cupboard and one noticeboard. One thing per sentence '
          + 'makes a long, slow list.',
        'Say what is missing, and why it does not matter. There isn\'t a '
          + 'photocopier. We use the one downstairs. — that answers the next '
          + 'question before it is asked.',
        '⚠ There are six desk ✗ → six desks. After a number bigger than one, '
          + 'the noun is plural, always.'],
        vocab: ['grammar',
        'desks',
        'thing',
        'exists',
        'about',
        'already',
        'know',
        'there\'s',
        'printer',
        'office']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '3.1.6P',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books with your partner. Tick ✓ or cross ✗. Underline one thing to fix.',
      passage: {
        title: 'From the book',
        html: '<h4>How to give good feedback (we use this all year)</h4><p><b>Not '
          + 'helpful:</b> "Good." / "Bad." / "Many '
          + 'mistakes."</p><p><b>Helpful:</b> "The list is complete. Check <i>six '
          + 'desk</i>. Can you say what you use instead of the scanner?"</p><p>Be '
          + 'kind, be clear, and point to <b>one</b> thing to fix.</p><table '
          + 'class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td><i>there is</i> with one thing, <i>there are</i> '
          + 'with more than one</td><td>&nbsp;</td></tr><tr><td>Plural <b>-s</b> '
          + 'after every number</td><td>&nbsp;</td></tr><tr><td>At least one '
          + '<i>there isn\'t</i></td><td>&nbsp;</td></tr><tr><td>Says what you '
          + 'use instead</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample feedback: "The list is complete and easy to read. Check '
              + 'six shelf — it needs the plural."',
            minWords: 5,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books with your partner. Tick ✓ or cross ✗. Underline one thing to fix.',
        grammar: 'Grammar – there is / there are',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (3.1) '
          + 'teaches: Grammar – there is / there are. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        must: ['Shape of an equipment list: who it is for and which room → the '
          + 'furniture → the machines → what is missing, and what you use instead '
          + '→ an offer or a question → your name.',
        'Group the same kind of thing in one sentence: There are two filing '
          + 'cabinets, one cupboard and one noticeboard. One thing per sentence '
          + 'makes a long, slow list.',
        'Say what is missing, and why it does not matter. There isn\'t a '
          + 'photocopier. We use the one downstairs. — that answers the next '
          + 'question before it is asked.',
        '⚠ There are six desk ✗ → six desks. After a number bigger than one, '
          + 'the noun is plural, always.'],
        vocab: ['grammar',
        'desks',
        'thing',
        'exists',
        'about',
        'already',
        'know',
        'there\'s',
        'printer',
        'office'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '3.1.6R',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read one sentence before and after the fix. The class '
  + 'says what changed.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Before: There is two fridges. → After: There are two fridges. '
              + '(plural → there are)',
            minWords: 4,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – there is / there are.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '3.1.7',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Describe a room you know well that is <b>not</b> at work — your kitchen, a '
  + 'shop you use, the room where you study (35 words or more). Use <i>there '
  + 'is</i>, <i>there are</i> and at least one <i>there isn\'t</i>.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'desks',
        'thing',
        'exists',
        'about',
        'already',
        'know',
        'there\'s']
      },
      coach: {
        title: 'What to include',
        task: 'Describe a room you know well that is not at work — your kitchen, a shop you '
  + 'use, the room where you study (35 words or more). Use there is, there are '
  + 'and at least one there isn\'t.',
        criteria: [{ t: 'Shape of an equipment list: who it is for and which room → the '
              + 'furniture → the machines → what is missing, and what you use '
              + 'instead → an offer or a question → your name.' },
            { t: 'Group the same kind of thing in one sentence: There are two '
              + 'filing cabinets, one cupboard and one noticeboard. One thing per '
              + 'sentence makes a long, slow list.' },
            { t: 'Say what is missing, and why it does not matter. There isn\'t a '
              + 'photocopier. We use the one downstairs. — that answers the next '
              + 'question before it is asked.' },
            { t: '⚠ There are six desk ✗ → six desks. After a number bigger than '
              + 'one, the noun is plural, always.' }]
      },
      aiCheck: {
        task: 'Describe a room you know well that is not at work — your kitchen, a '
          + 'shop you use, the room where you study (35 words or more). Use there '
          + 'is, there are and at least one there isn\'t.',
        grammar: 'Grammar – there is / there are',
        must: ['Shape of an equipment list: who it is for and which room → the '
          + 'furniture → the machines → what is missing, and what you use instead '
          + '→ an offer or a question → your name.',
        'Group the same kind of thing in one sentence: There are two filing '
          + 'cabinets, one cupboard and one noticeboard. One thing per sentence '
          + 'makes a long, slow list.',
        'Say what is missing, and why it does not matter. There isn\'t a '
          + 'photocopier. We use the one downstairs. — that answers the next '
          + 'question before it is asked.',
        '⚠ There are six desk ✗ → six desks. After a number bigger than one, '
          + 'the noun is plural, always.'],
        vocab: ['grammar',
        'desks',
        'thing',
        'exists',
        'about',
        'already',
        'know',
        'there\'s',
        'printer',
        'office']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '3.1.7P',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ I can see the room. ✓ Can you '
  + 'add how many…? ? a question about the room',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "There is always bread on the table" — I can see the room. ✓ '
              + 'Can you add how many cupboards are full? ? Where is the fridge?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ I can see the room. '
          + '— ✓ Can you add how many…? —? a question about the room (The dashes '
          + 'are blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Grammar – there is / there are',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (3.1) teaches: Grammar – there is / there are. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – there is / there are.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'desks',
        'thing',
        'exists',
        'about',
        'already',
        'know',
        'there\'s',
        'printer',
        'office'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – there is / there are.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '3.1.7R',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts without the names. Guess which room belongs to whom.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then count the equipment in one more room '
          + 'at your workplace and write the list (20+ words). Bring it to the '
          + 'next lesson.</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Guessing game: the room with a broken chair and bread on the '
              + 'table is usually guessed first, because the detail is personal, '
              + 'not the furniture',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – there is / there are.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
