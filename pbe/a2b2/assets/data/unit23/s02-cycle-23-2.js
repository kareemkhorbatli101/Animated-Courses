/* Unit 23 · cycle 23.2 — There is a generator, but there is no lift.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE4.page('u23-s02', {
  book: { source: 'Proactive Business English · A2 Book 2', ref: 'Unit 23 · 23.2', part: '23.2',
          section: '2', lesson: 'There is a generator, but there is no lift', title: 'There is a generator, but there is no lift' },
  objective: 'describe what there is in a place, and what there is not',
  study: {
    minutes: 90,
    objective: 'describe what there is in a place, and what there is not',
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
    task: 'Write what the building has and has not, for a visiting supplier.',
    weak: 'The building is fine.',
    change: ['Use THERE IS and THERE IS NO: a list of what exists and what does '
          + 'not is what a visitor needs.',
        'Put the awkward one in, or they find it with a lorry.'],
    better: 'There is a generator and there are two store rooms. There is no loading '
      + 'bay — the lorry unloads in the yard — and there aren\'t any steps at the '
      + 'front.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '23.2.1',
      bookRef: 'Unit 23 · 23.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Describe your workplace in four sentences, all beginning there '
              + 'is or there are.',
            minWords: 6,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Which is right? There is two offices. · There are two offices. · '
              + 'It has two offices. · There are no lift.',
            model: 'There are two offices. is right. It has two offices is '
              + 'grammatical but reads as a brochure. The other two are wrong',
            minWords: 6,
            rows: 3,
            hint: 'One of the ones named in the question - pick it and say it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '23.2.2',
      bookRef: 'Unit 23 · 23.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u23-23-2',
      passage: {
        title: 'Language box',
        html: '<p><b>There is / there are – and what there is not</b></p><table '
          + 'class=\'bk\'><tr><th>Shape</th><th>Example</th></tr><tr><td><b>There '
          + 'is</b> + singular</td><td><b>There is</b> a generator. <b>There '
          + 'is</b> parking for three cars.</td></tr><tr><td><b>There are</b> + '
          + 'plural</td><td><b>There are</b> two store '
          + 'rooms.</td></tr><tr><td><b>There is no</b> + noun</td><td><b>There '
          + 'is no</b> loading bay. <b>There is no</b> '
          + 'lift.</td></tr><tr><td><b>There aren\'t any</b> + '
          + 'plural</td><td><b>There aren\'t any</b> steps at the '
          + 'front.</td></tr><tr><td><b>Is there…? / Are '
          + 'there…?</b></td><td><b>Is there</b> parking? <b>Are there</b> '
          + 'steps?</td></tr></table><p>⚠ <b>The verb agrees with what comes '
          + 'after it</b>, not with <i>there</i>: <i>there <b>is</b> a '
          + 'generator</i> · <i>there <b>are</b> two rooms</i>. <s>There is two '
          + 'rooms</s> is the commonest error in the cycle.</p><p>⚠ <b><i>There '
          + 'is no</i> + singular; <i>there aren\'t any</i> + plural.</b> Both '
          + 'are normal. <s>There are no lift</s> mixes them.</p><p>⚠ <b>Say both '
          + 'halves — what there is and what there is not.</b> The second half is '
          + 'what makes the first believable, and it saves somebody a wasted '
          + 'journey.</p><p>⚠ Do not use <i>it has</i> for a place you are '
          + 'describing to a stranger: <i>there is</i> is the natural English and '
          + '<i>it has</i> sounds like a brochure.</p><p><b>Practise:</b> '
          + 'Describe each in two sentences — one <i>there is/are</i>, one '
          + '<i>there is no / there aren\'t any</i>. 1 your office 2 the store '
          + 'room 3 the street outside 4 the building entrance 5 the nearest '
          + 'bank</p><p><b>Useful phrases:</b> There is a generator. · There are '
          + 'two store rooms. · There is no loading bay. · There aren\'t any '
          + 'steps. · Is there parking?</p><p><b>Pronunciation – the weak '
          + '<i>there</i>.</b> 🔊 <b>Track 23.4</b> Listen: <i>there\'s a '
          + 'generator</i> — <i>there</i> almost disappears and the stress lands '
          + 'on <i>generator</i>. Said with a strong <i>there</i> it sounds like '
          + 'pointing at something. Repeat four.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does the customer most want to know?',
            options: [{
              t: 'the size of the store',
              ok: false,
              why: 'Hala\'s first answer was that it is big, and Nour says that '
                + 'tells her nothing.'
            },
            {
              t: 'whether there is parking',
              ok: true,
              why: 'She is bringing a van, and there is no loading bay - which is '
                + 'the fact that changes what she does.'
            },
            {
              t: 'the opening hours',
              ok: false,
              why: 'No hours are mentioned in this exchange.'
            }],
            evidence: 'Nour\'s reason for telling the customer what is NOT there'
          },
        {
            q: 'Books closed. Listen. What does Nour say matters more than the '
              + 'lift or the loading bay?',
            options: [{
              t: 'the generator',
              ok: true,
              why: 'It is the thing a customer in this city most needs to know.'
            },
            {
              t: 'the two store rooms',
              ok: false,
              why: 'Those are part of what the place HAS, listed first.'
            },
            {
              t: 'the counter',
              ok: false,
              why: 'The counter is the first item on Hala\'s list, and the least surprising.'
            }],
            evidence: 'her last line'
          },
        {
            q: 'Why should Hala say what is NOT there?',
            options: [{
              t: 'because the customer is bringing a van',
              ok: true,
              why: 'No loading bay and no lift are the two facts that change what she does.'
            },
            {
              t: 'because it is more honest',
              ok: false,
              why: 'Honesty is the effect; the reason Nour gives is practical.'
            },
            {
              t: 'because the list was too short',
              ok: false,
              why: 'Length is not mentioned; usefulness is.'
            }],
            evidence: 'Nour\'s reason, which names the visitor\'s problem'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '23.2.2',
      bookRef: 'Unit 23 · 23.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Describe each in two sentences — one there is/are, one there is '
              + 'no / there aren\'t any. 1 your office 2 the store room 3 the '
              + 'street outside 4 the building entrance 5 the nearest bank',
            model: 'There are six desks and there is no second door. · There are two '
              + 'store rooms; there aren\'t any windows. · There is parking for '
              + 'three cars and there is no shade. · There are eleven steps and '
              + 'there is no lift. · There is a bank two streets away; there '
              + 'isn\'t a cash machine in the district.',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '23.2.2',
      bookRef: 'Unit 23 · 23.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does Hala say about listing what there is not?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *Hala* in it. Play '
              + 'it again with the subtitles on.'
          },
      {
            q: 'Why does she mention the generator?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with *because* and it will come out whole. '
              + 'Look in the dialogue above for the line with *generator* in it. '
              + 'Play it again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '23.2.3',
      bookRef: 'Unit 23 · 23.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A describes a place with only the good half; B asks for the '
  + 'other half. Use the skeleton, then the role cards.',
      scene: 'u23-23-2-pair',
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
        head: ['Role card 1 — the workshop',
        'Role card 2 — the new office'],
        rows: [['There are three machines, a yard and a generator. There is no '
            + 'telephone line, no shade in the yard, and the gate is too narrow '
            + 'for a lorry.',
          'There are six desks and a meeting room. There is no internet yet, '
            + 'no second door, and there are eleven steps and no lift.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '23.2.3R',
      bookRef: 'Unit 23 · 23.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out the exchange for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ There is a generator.</td><td>☐ There '
          + 'are two store rooms.</td><td>☐ There is no loading bay.</td><td>☐ '
          + 'There aren\'t any steps.</td><td>☐ Is there parking?</td><td>☐ Say '
          + 'both halves.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the two halves in two columns. Typical errors: '
              + 'there is two · there are no lift · there is not any steps · and '
              + 'the content fault of a note with no absences in it at all',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: There is / there are – and what there is not.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '23.2.4',
      bookRef: 'Unit 23 · 23.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Describe your own workplace to somebody who is coming next week. Four things '
  + 'there are, and four things there are not.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>There is / there are…</th><th>There is '
          + 'no / there aren\'t '
          + 'any…</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Describe your own workplace to somebody who is coming next week. '
          + 'Four things there are, and four things there are not.',
        grammar: 'There is / there are – and what there is not',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (23.2) teaches: There is / there are – and what there is not. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: There is / there are – and what there is not.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['verb',
        'agrees',
        'after',
        'generator',
        'rooms',
        'commonest',
        'error',
        'cycle',
        'singular',
        'aren\'t']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: There is / there are – and what there is not.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '23.2.4R',
      bookRef: 'Unit 23 · 23.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: There is and there are . There is no , so bring .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — There is — and there are —. There is no , so bring '
          + '—. (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'There is / there are – and what there is not',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (23.2) teaches: '
          + 'There is / there are – and what there is not. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: There is / there are – and what there is not.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['verb',
        'agrees',
        'after',
        'generator',
        'rooms',
        'commonest',
        'error',
        'cycle',
        'singular',
        'aren\'t'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: There is / there are – and what there is not.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '23.2.5',
      bookRef: 'Unit 23 · 23.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the note sent to a visiting supplier, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>COMING TO THE MEZZEH STORE — what to '
          + 'expect</b></p><p><b>Getting here.</b> There is parking for three '
          + 'cars in front and more on the side street after nine. There is no '
          + 'loading bay: a van unloads on the street, which is legal until '
          + 'eleven and difficult afterwards.</p><p><b>The building.</b> There is '
          + 'a counter on the ground floor and two store rooms behind it. There '
          + 'is a second store room on the first floor and <b>there is no '
          + 'lift</b> — eleven steps, and everything is carried. If you are '
          + 'bringing more than ten boxes, bring a second person.</p><p><b>Power '
          + 'and water.</b> There is a generator and it runs from one until four. '
          + 'There is water in the yard tap but there is none in the upstairs '
          + 'room.</p><p><b>Nearby.</b> There is a bank two streets away and '
          + 'there are three places to eat on the corner. There isn\'t a hotel in '
          + 'the district; the nearest is fifteen minutes by taxi.</p><p><b>Ask '
          + 'for</b> Hala at the counter, or telephone 011 <span '
          + 'class="blank"></span> <span class="blank"></span> from the street '
          + 'and somebody will come down.</p><h4>Writer\'s box</h4><p><b>A "what '
          + 'to expect" note — four or five short headed parts:</b> getting here '
          + '→ the building → power and water → nearby → who to ask '
          + 'for.</p><p><b>Put the consequence next to the absence.</b> <i>There '
          + 'is no lift — eleven steps, and everything is carried. If you are '
          + 'bringing more than ten boxes, bring a second person.</i> The absence '
          + 'is information; the consequence is help.</p><p><b>Give the hours of '
          + 'everything that has hours.</b> The generator runs from one until '
          + 'four; the street is legal until eleven. A time turns a fact into a '
          + 'plan.</p><p>⚠ End with a <b>name and a telephone number</b>. A '
          + 'visitor standing in the street with a van needs a person, not a '
          + 'paragraph.</p>'
      },
      questions: [{
            q: 'Which single sentence saves the visitor most trouble?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with *visitor* in it.'
          },
      {
            q: 'Why is "legal until eleven" more useful than "there is no '
              + 'loading bay" alone?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with *because* and it will come out whole. '
              + 'Look in the text above for the line with *loading* in it.'
          },
      {
            q: 'What does the last line do that the rest does not?',
            minWords: 6,
            rows: 2,
            hint: 'A job, in two or three words. Look in the text above for the '
              + 'line with *last* in it.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '23.2.6',
      bookRef: 'Unit 23 · 23.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a "what to expect" note for your own workplace (35 words or more). Use '
  + 'the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['verb',
        'agrees',
        'after',
        'generator',
        'rooms',
        'commonest',
        'error',
        'cycle']
      },
      coach: {
        title: 'What to include',
        task: 'Write a "what to expect" note for your own workplace (35 words or more). Use '
  + 'the frame.',
        criteria: [{ t: 'A "what to expect" note — four or five short headed parts: '
              + 'getting here → the building → power and water → nearby → who to '
              + 'ask for.' },
            { t: 'Put the consequence next to the absence. There is no lift — '
              + 'eleven steps, and everything is carried. If you are bringing '
              + 'more than ten boxes, bring a second person. The absence is '
              + 'information; the consequence is help.' },
            { t: 'Give the hours of everything that has hours. The generator runs '
              + 'from one until four; the street is legal until eleven. A time '
              + 'turns a fact into a plan.' },
            { t: '⚠ End with a name and a telephone number. A visitor standing in '
              + 'the street with a van needs a person, not a paragraph.' }]
      },
      aiCheck: {
        task: 'Write a "what to expect" note for your own workplace (35 words or '
          + 'more). Use the frame.',
        grammar: 'There is / there are – and what there is not',
        must: ['A "what to expect" note — four or five short headed parts: getting '
          + 'here → the building → power and water → nearby → who to ask for.',
        'Put the consequence next to the absence. There is no lift — eleven '
          + 'steps, and everything is carried. If you are bringing more than ten '
          + 'boxes, bring a second person. The absence is information; the '
          + 'consequence is help.',
        'Give the hours of everything that has hours. The generator runs from '
          + 'one until four; the street is legal until eleven. A time turns a '
          + 'fact into a plan.',
        '⚠ End with a name and a telephone number. A visitor standing in the '
          + 'street with a van needs a person, not a paragraph.'],
        vocab: ['verb',
        'agrees',
        'after',
        'generator',
        'rooms',
        'commonest',
        'error',
        'cycle',
        'singular',
        'aren\'t']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '23.2.6P',
      bookRef: 'Unit 23 · 23.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Ask one question: could a stranger arrive without a surprise? '
  + 'Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<h4>Band 3 feedback — name the criterion</h4><p>"The box says put '
          + 'the consequence next to the absence. You have <i>there is no '
          + 'internet</i> — what should the visitor do about that?"</p><p>Quote, '
          + 'question, stop.</p><table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td><i>There is</i> / <i>there are</i> agreeing '
          + 'correctly</td><td>&nbsp;</td></tr><tr><td>At least three "there is '
          + 'no"</td><td>&nbsp;</td></tr><tr><td>A consequence next to each '
          + 'absence</td><td>&nbsp;</td></tr><tr><td>A name and a telephone '
          + 'number at the end</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample band 3 feedback: "The box says put the consequence next '
              + 'to the absence. There is no sign on the street has one — the '
              + 'green door — and that is the best line on the page. There is '
              + 'none upstairs has none: what should I do about it?"',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Ask one question: could a stranger arrive without a '
          + 'surprise? Tick ✓ or cross ✗.',
        grammar: 'There is / there are – and what there is not',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (23.2) '
          + 'teaches: There is / there are – and what there is not. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        must: ['A "what to expect" note — four or five short headed parts: getting '
          + 'here → the building → power and water → nearby → who to ask for.',
        'Put the consequence next to the absence. There is no lift — eleven '
          + 'steps, and everything is carried. If you are bringing more than ten '
          + 'boxes, bring a second person. The absence is information; the '
          + 'consequence is help.',
        'Give the hours of everything that has hours. The generator runs from '
          + 'one until four; the street is legal until eleven. A time turns a '
          + 'fact into a plan.',
        '⚠ End with a name and a telephone number. A visitor standing in the '
          + 'street with a van needs a person, not a paragraph.'],
        vocab: ['verb',
        'agrees',
        'after',
        'generator',
        'rooms',
        'commonest',
        'error',
        'cycle',
        'singular',
        'aren\'t'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'own',
      ref: '23.2.6R',
      bookRef: 'Unit 23 · 23.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their note. The class says which workplace they '
  + 'could find and enter without telephoning.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: There is / there are – and what there is not.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '23.2.7',
      bookRef: 'Unit 23 · 23.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a visit that went wrong because nobody had told you something '
  + '(60 to 100 words). Say what was missing, what it cost, and the one sentence '
  + 'that would have prevented it.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      meter: {
        label: 'words from this lesson',
        words: ['verb',
        'agrees',
        'after',
        'generator',
        'rooms',
        'commonest',
        'error',
        'cycle']
      },
      coach: {
        title: 'What to include',
        task: 'Write about a visit that went wrong because nobody had told you something '
  + '(60 to 100 words). Say what was missing, what it cost, and the one sentence '
  + 'that would have prevented it.',
        criteria: [{ t: 'A "what to expect" note — four or five short headed parts: '
              + 'getting here → the building → power and water → nearby → who to '
              + 'ask for.' },
            { t: 'Put the consequence next to the absence. There is no lift — '
              + 'eleven steps, and everything is carried. If you are bringing '
              + 'more than ten boxes, bring a second person. The absence is '
              + 'information; the consequence is help.' },
            { t: 'Give the hours of everything that has hours. The generator runs '
              + 'from one until four; the street is legal until eleven. A time '
              + 'turns a fact into a plan.' },
            { t: '⚠ End with a name and a telephone number. A visitor standing in '
              + 'the street with a van needs a person, not a paragraph.' }]
      },
      aiCheck: {
        task: 'Write about a visit that went wrong because nobody had told you '
          + 'something (60 to 100 words). Say what was missing, what it cost, and '
          + 'the one sentence that would have prevented it.',
        grammar: 'There is / there are – and what there is not',
        must: ['A "what to expect" note — four or five short headed parts: getting '
          + 'here → the building → power and water → nearby → who to ask for.',
        'Put the consequence next to the absence. There is no lift — eleven '
          + 'steps, and everything is carried. If you are bringing more than ten '
          + 'boxes, bring a second person. The absence is information; the '
          + 'consequence is help.',
        'Give the hours of everything that has hours. The generator runs from '
          + 'one until four; the street is legal until eleven. A time turns a '
          + 'fact into a plan.',
        '⚠ End with a name and a telephone number. A visitor standing in the '
          + 'street with a van needs a person, not a paragraph.'],
        vocab: ['verb',
        'agrees',
        'after',
        'generator',
        'rooms',
        'commonest',
        'error',
        'cycle',
        'singular',
        'aren\'t']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '23.2.7P',
      bookRef: 'Unit 23 · 23.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ the missing sentence ✓ there '
  + 'is / there are correct? ? did anybody apologise?',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "for them it is simply what Thursday is" ✓ there is / there '
              + 'are correct. ? Had it happened to somebody else before you?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ the missing sentence '
          + '— ✓ there is / there are correct? —? did anybody apologise? (The '
          + 'dashes are blanks the learner fills in with their own workplace. '
          + 'Judge what they wrote in them, not the blanks.)',
        grammar: 'There is / there are – and what there is not',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (23.2) teaches: There is / there are – and what there is not. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: There is / there are – and what there is not.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['verb',
        'agrees',
        'after',
        'generator',
        'rooms',
        'commonest',
        'error',
        'cycle',
        'singular',
        'aren\'t'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: There is / there are – and what there is not.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '23.2.7R',
      bookRef: 'Unit 23 · 23.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. In how many cases did somebody know and not say? That is '
  + 'the commonest answer and it is not malice; it is familiarity.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then write the four "there is no" '
          + 'sentences about your workplace that a first-time visitor most needs '
          + '(35+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'In nearly every story somebody knew and did not say, and it is '
              + 'not unkindness; it is familiarity. The fix is the note from '
              + 'stage 6, written once by somebody who has not worked there long',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: There is / there are – and what there is not.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
