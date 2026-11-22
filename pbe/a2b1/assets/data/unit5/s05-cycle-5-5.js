/* Unit 5 · cycle 5.5 — Is this invoice ours or theirs?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u5-s05', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 5 · 5.5', part: '5.5',
          section: '5', lesson: 'Is this invoice ours or theirs?', title: 'Is this invoice ours or theirs?' },
  objective: 'say whose invoice, whose money and whose mistake it is',
  study: {
    minutes: 90,
    objective: 'say whose invoice, whose money and whose mistake it is',
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
    task: 'Write what you say when a customer brings an invoice that is not ours.',
    weak: 'Not ours.',
    change: ['Take it into your hands and say so - <i>Let me see</i> - before you '
          + 'judge it across a desk.',
        'Say what it IS, not only what it is not, or the customer is left '
          + 'holding a problem.'],
    better: 'Let me see. This one is Homs Plastics\' invoice, not ours - somebody '
      + 'filed it with your papers.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '5.5.1',
      bookRef: 'Unit 5 · 5.5 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Complete the pairs: my → · your → · his → · her → · our → · their →',
            model: 'my → mine · your → yours · his → his · her → hers · our → ours · '
              + 'their → theirs',
            minWords: 4,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Hold up something of yours and something of a colleague\'s. Say: '
              + 'This is mine. That one is .',
            model: 'Open. Check there is no noun after the pronoun: That one is '
              + 'hers, not that one is hers pen',
            minWords: 6,
            rows: 3,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '5.5.2',
      bookRef: 'Unit 5 · 5.5 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u5-5-5',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – possessive adjectives and pronouns</b></p><table '
          + 'class=\'bk\'><tr><th>Adjective (+ noun)</th><th>Pronoun '
          + '(alone)</th><th>Example</th></tr><tr><td>my '
          + 'invoice</td><td><b>mine</b></td><td>That one is '
          + '<b>mine</b>.</td></tr><tr><td>your '
          + 'file</td><td><b>yours</b></td><td>Is this '
          + '<b>yours</b>?</td></tr><tr><td>his / her desk</td><td><b>his</b> / '
          + '<b>hers</b></td><td>The blue one is '
          + '<b>hers</b>.</td></tr><tr><td>our price '
          + 'list</td><td><b>ours</b></td><td>Is it <b>ours</b> or '
          + '<b>theirs</b>?</td></tr><tr><td>their '
          + 'address</td><td><b>theirs</b></td><td><b>Theirs</b> are '
          + 'plain.</td></tr></table><p>⚠ The pronoun has <b>no noun after '
          + 'it</b>: <i>It\'s <b>ours</b></i>, not <s>it\'s ours '
          + 'invoice</s>.</p><p>⚠ No apostrophe: <i><b>ours</b></i>, '
          + '<i><b>yours</b></i>, <i><b>theirs</b></i> — never <s>our\'s</s>, '
          + '<s>their\'s</s>. But a <b>name</b> does take one: <i><b>Nadia\'s</b> '
          + 'desk</i>, <i><b>the company\'s</b> address</i>.</p><p>⚠ <i>It\'s</i> '
          + '= <i>it is</i>. <i>Its</i> = belonging to it. <i>The company changed '
          + '<b>its</b> address.</i></p><p><b>Practise:</b> Complete with a '
          + 'possessive pronoun.</p><p>1 Is this invoice ours or <span '
          + 'class="blank"></span>? 2 That desk is <span class="blank"></span> '
          + '(Nadia). 3 These files are <span class="blank"></span> (we). 4 Is '
          + 'this pen <span class="blank"></span> (you)? 5 The blue header is '
          + '<span class="blank"></span> (we); the plain one is <span '
          + 'class="blank"></span> (they).</p><p><b>Useful phrases:</b> Is it '
          + 'ours or theirs? · Let me see. · Somebody filed it wrong. · You\'re '
          + 'right. · That\'s my mistake. · …isn\'t the '
          + 'test.</p><p><b>Pronunciation – the -s.</b> 🔊 <b>Track 5.10</b> '
          + 'Listen and repeat: <i>ours</i> /ˈaʊəz/ · <i>yours</i> /jɔːz/ · '
          + '<i>theirs</i> /ðeəz/ · <i>hers</i> /hɜːz/. The ending is /z/, never '
          + '/s/.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is the problem?',
            options: [{
              t: 'an invoice in the wrong file',
              ok: true,
              why: 'An incoming invoice is in the outgoing file, and a second one '
                + 'is printed on the wrong paper.'
            },
            {
              t: 'a missing payment',
              ok: false,
              why: 'Nothing is said to be unpaid in this scene.'
            },
            {
              t: 'a wrong price',
              ok: false,
              why: 'Twelve rolls and five hundred books are both mentioned, which '
                + 'sounds like a check on figures - but no figure is disputed.'
            }],
            evidence: 'Nadia\'s first question, and what Nour says about the blue header'
          },
        {
            q: 'Books closed. Listen. What finally tells them whose invoice it is?',
            options: [{
              t: 'the address at the bottom',
              ok: true,
              why: 'The blue header failed - Hamdan printed on a blue sheet Nour '
                + 'had given them. The address is the test that held.'
            },
            {
              t: 'the blue header',
              ok: false,
              why: 'That was the test they were using, and it is exactly the one '
                + 'that got them wrong.'
            },
            {
              t: 'which file it is in',
              ok: false,
              why: 'It was in the wrong file - that is what started the whole conversation.'
            }],
            evidence: 'Nadia\'s last line'
          },
        {
            q: 'Why did the blue header stop working as a test?',
            options: [{
              t: 'because Nour gave Hamdan a blue sheet to copy the layout',
              ok: true,
              why: 'She says so herself. A mark anybody can copy is not an identity.'
            },
            {
              t: 'because Nadia filed it in the wrong place',
              ok: false,
              why: 'Wrong filing is the symptom. The header was already unreliable '
                + 'before anyone filed anything.'
            },
            {
              t: 'because the printer ran out of blue',
              ok: false,
              why: 'Nothing in the exchange says that; the problem is an extra '
                + 'blue page, not a missing one.'
            }],
            evidence: 'Nour\'s line admitting her mistake'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '5.5.2',
      bookRef: 'Unit 5 · 5.5 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Complete with a possessive pronoun.',
      text: '<b>1</b> Is this invoice ours or [[1]]? &nbsp; <b>2</b> That desk is '
      + '[[2]] (Nadia). &nbsp; <b>3</b> These files are [[3]] (we). &nbsp; '
      + '<b>4</b> Is this pen [[4]] (you)? &nbsp; <b>5</b> The blue header is '
      + '[[5]] (we); the plain one is [[5b]] (they).',
      plain: true,
      small: true,
      answers: {
        '1': ['theirs'],
        '2': ['Nadia\'s'],
        '3': ['ours'],
        '4': ['yours'],
        '5': ['ours'],
        '5b': ['theirs']
      }
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '5.5.2',
      bookRef: 'Unit 5 · 5.5 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Whose invoice is it?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>invoice</i> in '
              + 'it. Play it again with the subtitles on.'
          },
      {
            q: 'Whose mistake was it, in the end?',
            minWords: 6,
            rows: 2,
            hint: 'Whose it is - a name with an apostrophe s. Look in the dialogue '
              + 'above for the line with <i>mistake</i> in it. Play it again with '
              + 'the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '5.5.3',
      bookRef: 'Unit 5 · 5.5 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A finds papers or things that may belong to several people; B '
  + 'works out whose. Use the skeleton, then the role cards.',
      scene: 'u5-5-5-pair',
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
        head: ['Role card 1 — a shared office',
        'Role card 2 — a shared flat'],
        rows: [['Two companies share one office. Ours: blue folders, extension 212. '
            + 'Theirs: green folders, extension 305. Both use the same printer '
            + 'and the same paper.',
          'Three people share. Yours: the blue cup, the shelf on the left. '
            + 'His: everything in the fridge door. Hers: the red towel and the '
            + 'small table.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '5.5.3R',
      bookRef: 'Unit 5 · 5.5 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Is it ours or theirs?</td><td>☐ Let me '
          + 'see.</td><td>☐ Ours are…</td><td>☐ Theirs are…</td><td>☐ That\'s my '
          + 'mistake.</td><td>☐ …isn\'t the test.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the test. The first test is usually the visible '
              + 'one (colour, paper) and the right one is usually the written one '
              + '(an address, a number) — that is the point of the cycle. Typical '
              + 'errors: their\'s, our\'s; it\'s for its; ours invoice',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – possessive adjectives and pronouns.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '5.5.4',
      bookRef: 'Unit 5 · 5.5 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Put five small things from the class on a table. In threes, say whose each '
  + 'one is, and how you know. Then add something nobody can identify and decide '
  + 'what to do with it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Thing</th><th>Whose?</th><th>How we '
          + 'know</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Grammar – possessive adjectives and pronouns'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Put five small things from the class on a table. In threes, say '
          + 'whose each one is, and how you know. Then add something nobody can '
          + 'identify and decide what to do with it.',
        grammar: 'Grammar – possessive adjectives and pronouns',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (5.5) teaches: Grammar – possessive adjectives and pronouns. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – possessive adjectives and pronouns.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'possessive',
        'adjectives',
        'pronouns',
        'pronoun',
        'noun',
        'after',
        'it\'s',
        'ours',
        'invoice']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – possessive adjectives and pronouns.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '5.5.4R',
      bookRef: 'Unit 5 · 5.5 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: The is . We knew because . But nobody knew whose the was, so we .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Grammar – possessive adjectives and pronouns'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — The — is —. We knew because —. But nobody knew '
          + 'whose the — was, so we —. (The dashes are blanks the learner fills '
          + 'in with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'Grammar – possessive adjectives and pronouns',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (5.5) teaches: '
          + 'Grammar – possessive adjectives and pronouns. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – possessive adjectives and pronouns.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'possessive',
        'adjectives',
        'pronouns',
        'pronoun',
        'noun',
        'after',
        'it\'s',
        'ours',
        'invoice'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – possessive adjectives and pronouns.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '5.5.5',
      bookRef: 'Unit 5 · 5.5 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the short note Nour puts in the filing cabinet, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>OUR INVOICES AND THEIRS — how to tell</b> (after the mix-up of '
          + '14 April)</p><p><b>Ours</b> (we are owed money): our address at the '
          + '<b>bottom</b>, our account number, and the words <i>Sham Trading '
          + 'Co.</i> above the total. They go in the <b>green</b> file: <i>Money '
          + 'in</i>.</p><p><b>Theirs</b> (we owe money): <b>their</b> address at '
          + 'the bottom and <b>their</b> account number. They go in the '
          + '<b>red</b> file: <i>Money out</i>.</p><p><b>The paper is not the '
          + 'test.</b> We gave Hamdan Printing a blue sheet to copy our layout, '
          + 'so one of theirs looks exactly like ours. <b>The address at the '
          + 'bottom is the test.</b> Read it every time, even when the top looks '
          + 'familiar.</p><p>If you are not sure, put it in the <b>yellow</b> '
          + 'tray and ask Nadia. An invoice in the wrong file is found in June, '
          + 'and by June nobody remembers anything.</p><h4>Writer\'s '
          + 'box</h4><p><b>Shape of a "how to tell them apart" note:</b> what '
          + 'caused it → <b>ours</b>: the signs and where they go → '
          + '<b>theirs</b>: the signs and where they go → <b>the test that does '
          + 'not work</b>, and why → <b>the test that does</b> → what to do when '
          + 'you are not sure.</p><p>Name the <b>test that does not work</b> and '
          + 'the reason. A note that only gives the right rule leaves the old '
          + 'wrong rule in everybody\'s head.</p><p>Give a <b>third place</b> for '
          + '"not sure" — a tray, a shelf, a person. Without it, people guess, '
          + 'and a guess goes in a file.</p><p>⚠ Say <b>when the mistake is '
          + 'found</b>. <i>An invoice in the wrong file is found in June</i> is '
          + 'what makes somebody read the address today.</p>'
      },
      questions: [{
            q: 'What is the test for telling the two apart?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>telling</i> in it.'
          },
      {
            q: 'Why is the paper not the test?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with <i>because</i> and it will come out '
              + 'whole. Look in the text above for the line with <i>paper</i> in '
              + 'it.'
          },
      {
            q: 'What do you do if you are not sure?',
            minWords: 6,
            rows: 2,
            hint: 'A job, in two or three words. Your own workplace, not the '
              + 'book\'s. Say it out loud once before you write it - a sentence '
              + 'or two is enough.'
          }],
      ideas: ['Grammar – possessive adjectives and pronouns'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '5.5.6',
      bookRef: 'Unit 5 · 5.5 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a "how to tell them apart" note for two things that get confused where '
  + 'you work or live (25 words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'possessive',
        'adjectives',
        'pronouns',
        'pronoun',
        'noun',
        'after',
        'it\'s']
      },
      coach: {
        title: 'What to include',
        task: 'Write a "how to tell them apart" note for two things that get confused where '
  + 'you work or live (25 words or more). Use the frame.',
        criteria: [{ t: 'Shape of a "how to tell them apart" note: what caused it → ours: '
              + 'the signs and where they go → theirs: the signs and where they '
              + 'go → the test that does not work, and why → the test that does → '
              + 'what to do when you are not sure.' },
            { t: 'Name the test that does not work and the reason. A note that '
              + 'only gives the right rule leaves the old wrong rule in '
              + 'everybody\'s head.' },
            { t: 'Give a third place for "not sure" — a tray, a shelf, a person. '
              + 'Without it, people guess, and a guess goes in a file.' },
            { t: '⚠ Say when the mistake is found. An invoice in the wrong file is '
              + 'found in June is what makes somebody read the address today.' }]
      },
      aiCheck: {
        task: 'Write a "how to tell them apart" note for two things that get '
          + 'confused where you work or live (25 words or more). Use the frame.',
        grammar: 'Grammar – possessive adjectives and pronouns',
        must: ['Shape of a "how to tell them apart" note: what caused it → ours: the '
          + 'signs and where they go → theirs: the signs and where they go → the '
          + 'test that does not work, and why → the test that does → what to do '
          + 'when you are not sure.',
        'Name the test that does not work and the reason. A note that only '
          + 'gives the right rule leaves the old wrong rule in everybody\'s head.',
        'Give a third place for "not sure" — a tray, a shelf, a person. '
          + 'Without it, people guess, and a guess goes in a file.',
        '⚠ Say when the mistake is found. An invoice in the wrong file is '
          + 'found in June is what makes somebody read the address today.'],
        vocab: ['grammar',
        'possessive',
        'adjectives',
        'pronouns',
        'pronoun',
        'noun',
        'after',
        'it\'s',
        'ours',
        'invoice']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '5.5.6P',
      bookRef: 'Unit 5 · 5.5 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Your partner describes one item in words; using the note alone, '
  + 'say which it is. Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>A test that really separates the '
          + 'two</td><td>&nbsp;</td></tr><tr><td>A wrong test named, with its '
          + 'reason</td><td>&nbsp;</td></tr><tr><td>Somewhere for each one to '
          + 'go</td><td>&nbsp;</td></tr><tr><td>Somewhere for "not '
          + 'sure"</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      ideas: ['Grammar – possessive adjectives and pronouns'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Your partner describes one item in words; using the note '
          + 'alone, say which it is. Tick ✓ or cross ✗.',
        grammar: 'Grammar – possessive adjectives and pronouns',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (5.5) '
          + 'teaches: Grammar – possessive adjectives and pronouns. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        must: ['Shape of a "how to tell them apart" note: what caused it → ours: the '
          + 'signs and where they go → theirs: the signs and where they go → the '
          + 'test that does not work, and why → the test that does → what to do '
          + 'when you are not sure.',
        'Name the test that does not work and the reason. A note that only '
          + 'gives the right rule leaves the old wrong rule in everybody\'s head.',
        'Give a third place for "not sure" — a tray, a shelf, a person. '
          + 'Without it, people guess, and a guess goes in a file.',
        '⚠ Say when the mistake is found. An invoice in the wrong file is '
          + 'found in June is what makes somebody read the address today.'],
        vocab: ['grammar',
        'possessive',
        'adjectives',
        'pronouns',
        'pronoun',
        'noun',
        'after',
        'it\'s',
        'ours',
        'invoice'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '5.5.6R',
      bookRef: 'Unit 5 · 5.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read only their test. The class decides whether a '
  + 'tired person at five o\'clock could apply it.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'A tired person at five o\'clock can apply a test that is one '
              + 'look at one place. Any test that needs two comparisons, or '
              + 'lifting something, fails at five o\'clock',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – possessive adjectives and pronouns.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '5.5.7',
      bookRef: 'Unit 5 · 5.5 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about something that was <b>nobody\'s</b> job and went wrong because '
  + 'of it — at work, at home, in a shared space (35 words or more). Use at least '
  + 'four possessive pronouns.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'possessive',
        'adjectives',
        'pronouns',
        'pronoun',
        'noun',
        'after',
        'it\'s']
      },
      coach: {
        title: 'What to include',
        task: 'Write about something that was nobody\'s job and went wrong because of it — '
  + 'at work, at home, in a shared space (35 words or more). Use at least four '
  + 'possessive pronouns.',
        criteria: [{ t: 'Shape of a "how to tell them apart" note: what caused it → ours: '
              + 'the signs and where they go → theirs: the signs and where they '
              + 'go → the test that does not work, and why → the test that does → '
              + 'what to do when you are not sure.' },
            { t: 'Name the test that does not work and the reason. A note that '
              + 'only gives the right rule leaves the old wrong rule in '
              + 'everybody\'s head.' },
            { t: 'Give a third place for "not sure" — a tray, a shelf, a person. '
              + 'Without it, people guess, and a guess goes in a file.' },
            { t: '⚠ Say when the mistake is found. An invoice in the wrong file is '
              + 'found in June is what makes somebody read the address today.' }]
      },
      aiCheck: {
        task: 'Write about something that was nobody\'s job and went wrong because '
          + 'of it — at work, at home, in a shared space (35 words or more). Use '
          + 'at least four possessive pronouns.',
        grammar: 'Grammar – possessive adjectives and pronouns',
        must: ['Shape of a "how to tell them apart" note: what caused it → ours: the '
          + 'signs and where they go → theirs: the signs and where they go → the '
          + 'test that does not work, and why → the test that does → what to do '
          + 'when you are not sure.',
        'Name the test that does not work and the reason. A note that only '
          + 'gives the right rule leaves the old wrong rule in everybody\'s head.',
        'Give a third place for "not sure" — a tray, a shelf, a person. '
          + 'Without it, people guess, and a guess goes in a file.',
        '⚠ Say when the mistake is found. An invoice in the wrong file is '
          + 'found in June is what makes somebody read the address today.'],
        vocab: ['grammar',
        'possessive',
        'adjectives',
        'pronouns',
        'pronoun',
        'noun',
        'after',
        'it\'s',
        'ours',
        'invoice']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '5.5.7P',
      bookRef: 'Unit 5 · 5.5 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ This happens everywhere. ✓ '
  + 'Whose job is it now? ? a question about how it was fixed',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "Now it is his job for ever" — that is exactly why nobody '
              + 'starts. ✓ Whose job is the bulb now, officially? ? Did the '
              + 'neighbours ever offer to share the cost?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ This happens '
          + 'everywhere. — ✓ Whose job is it now? —? a question about how it was '
          + 'fixed (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – possessive adjectives and pronouns',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (5.5) teaches: Grammar – possessive adjectives and pronouns. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – possessive adjectives and pronouns.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'possessive',
        'adjectives',
        'pronouns',
        'pronoun',
        'noun',
        'after',
        'it\'s',
        'ours',
        'invoice'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – possessive adjectives and pronouns.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '5.5.7R',
      bookRef: 'Unit 5 · 5.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. Is there one thing that is nobody\'s job in every story? '
  + 'Say what it is.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then write eight sentences about things in '
          + 'your home, four with a possessive adjective (<i>my, her, their</i>) '
          + 'and four with a pronoun (<i>mine, hers, theirs</i>) (20+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'The thing that is nobody\'s job in nearly every story is the '
              + 'shared space: the stairs, the corridor, the yard, the kitchen at '
              + 'work. It belongs to everybody, which means it belongs to nobody',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – possessive adjectives and pronouns.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
