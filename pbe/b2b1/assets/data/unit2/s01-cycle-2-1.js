/* Unit 2 · cycle 2.1 — The passive that hides and the passive that clarifies.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE7.page('u2-s01', {
  book: { source: 'Proactive Business English · B2 Book 1', ref: 'Unit 2 · 2.1', part: '2.1',
          section: '1', lesson: 'The passive that hides and the passive that clarifies', title: 'The passive that hides and the passive that clarifies' },
  objective: 'choose between a passive that hides and a passive that clarifies',
  study: {
    minutes: 90,
    objective: 'choose between a passive that hides and a passive that clarifies',
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
    task: 'Write the same fault twice: once in a passive that hides, once in a '
      + 'passive that clarifies. Say which is which and why.',
    weak: 'It was felt that the second consignment should be released, and it was '
      + 'subsequently released on the 14th.',
    change: ['Ask <i>by whom?</i> of both halves. The release has a date and no '
          + 'actor, which is a hole the shape of a person.',
        'Keep the passive only where the actor adds nothing a reader can use. '
          + 'A release that somebody authorised is not that case.'],
    better: 'Mr Haddad authorised the release of the second consignment on the 14th. '
      + 'The goods were loaded that evening - by which crew is not recorded and '
      + 'does not matter, because the authorisation is the act in question.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '2.1.1',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say a sentence you have read at work that told you something had '
              + 'happened and not who did it. Say whether you minded.',
            minWords: 6,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Which hides and which clarifies? The order was accepted on the '
              + '14th. · It was felt that the figures needed review.',
            model: 'The order was accepted on the 14th clarifies — the actor is '
              + 'noise. It was felt that the figures needed review hides — '
              + 'somebody has an opinion and has stepped out of the sentence',
            minWords: 6,
            rows: 3,
            hint: 'One of the ones named in the question - pick it and say it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '2.1.2',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-1',
      passage: {
        title: 'Language box',
        html: '<p><b>The two passives, and the test</b></p><table '
          + 'class=\'bk\'><tr><th>Sentence</th><th>Ask: by whom?</th><th>What the '
          + 'space is doing</th></tr><tr><td><i>The order was accepted on the '
          + '14th.</i></td><td>whoever was on the counter</td><td>⚠ <b>empty, '
          + 'because nothing goes there</b> — the actor is '
          + 'noise</td></tr><tr><td><i>It was felt that the figures needed '
          + 'review.</i></td><td>⚠ <b>somebody, and they have stepped '
          + 'back</b></td><td>⚠ <b>an opinion with the authority of the building '
          + 'and the cost of nobody</b></td></tr><tr><td><i>The nine cartons were '
          + 'found to be damp.</i></td><td>⚠ <b>by the writer, on the 8th and the '
          + '11th</b></td><td>⚠ <b>a hole the shape of a person, which the reader '
          + 'will fill</b></td></tr><tr><td><b>the test</b></td><td>⚠ <b>ask who '
          + 'out loud</b></td><td>⚠ <b>then ask what the space is '
          + 'doing</b></td></tr></table><p>⚠ <b>The passive is a tool with two '
          + 'opposite uses and no moral.</b> <b>It clarifies when the actor is '
          + 'noise</b>: <i>the order was accepted</i>, <i>the account was opened '
          + 'in July</i>, <i>the gate sheet is signed by name.</i> <b>It hides '
          + 'when the actor has stepped back out of it.</b></p><p>⚠ <b>Ask <i>by '
          + 'whom?</i> out loud, every time.</b> <b>The sentences that fail do so '
          + 'audibly</b> — <i>felt by whom? · decided by whom? · found by '
          + 'whom?</i> <b>A sentence that answers <i>nobody in particular</i> is '
          + 'sound. A sentence that answers <i>me</i> and does not say so is '
          + 'not.</b></p><p>⚠ <b>A hole the shape of a person gets filled.</b> ⚠ '
          + '<b>A reader does not leave an actor-shaped space empty; they put in '
          + 'the most likely person, which is the person nearest the thing.</b> '
          + '<b>That is not a reading fault. It is what reading is.</b></p><p>⚠ '
          + '<b>And the writer is never the one put in the hole, because the '
          + 'writer is visibly outside the sentence.</b> <b>That asymmetry is why '
          + 'the agentless passive is comfortable to write and expensive to be '
          + 'the subject of.</b></p><p>⚠ <i>It was felt · it was considered · it '
          + 'has been suggested</i> <b>are the three to be suspicious of in your '
          + 'own writing.</b> <b>All three are an opinion of yours, wearing the '
          + 'building\'s coat.</b></p><p><b>Practise:</b> Take five passives from '
          + 'your own writing. Ask <i>by whom?</i> and say what each space is '
          + 'doing.</p><p><b>Useful phrases:</b> ask who out loud · what is the '
          + 'space doing? · the actor is noise here · a hole the shape of a '
          + 'person · an opinion in the building\'s coat</p><p><b>Pronunciation – '
          + 'the agentless passive read without emphasis.</b> 🔊 <b>Track 2.2</b> '
          + 'Listen to <i>the order was accepted on the 14th</i> read twice. ⚠ '
          + '<b>The first is flat and the stress is on <i>14th</i>; the second '
          + 'stresses <i>was accepted</i>.</b> <b>The second sounds as though '
          + 'somebody is being protected</b> — <b>and a reader hears that, then '
          + 'goes looking for whom. Say it flat, four times, with the stress on '
          + 'the date.</b></p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Nadia say the passive is?',
            options: [{
              t: 'always weak writing',
              ok: false
            },
            {
              t: 'a tool with two uses',
              ok: true
            },
            {
              t: 'a thing to avoid at B2',
              ok: false
            }]
          },
        {
            q: 'Books closed. Listen. Nadia gives two passives. Which one does '
              + 'she call the kind that CLARIFIES?',
            options: [{
              t: 'the order was accepted on the 14th',
              ok: true,
              why: 'Whoever was on the counter does not matter, “and because it '
                + 'does not matter, naming them would be noise” - the passive '
                + 'puts the order and the date where the reader is looking.'
            },
            {
              t: 'it was felt that the figures needed review',
              ok: false,
              why: 'That is her example of the OTHER kind. Somebody\'s opinion '
                + 'arrives with the authority of the building and the cost of '
                + 'nobody.'
            },
            {
              t: 'the nine cartons were found to be damp',
              ok: false,
              why: 'Nour\'s own sentence, and the one Nadia turns on her: she '
                + 'found them herself, so she has stepped out of a sentence where '
                + 'she belonged.'
            }],
            evidence: 'the first example she offers, and why she approves of it'
          },
        {
            q: 'What does Nadia say a building will do with a hole the shape of a person?',
            options: [{
              t: 'it will put somebody in the hole, and not the writer',
              ok: true,
              why: '“A building reading that sentence will put somebody in the '
                + 'hole - and it will not put you in it, because you wrote it.”'
            },
            {
              t: 'it will ask who, and the writer will answer',
              ok: false,
              why: 'Asking who is the TEST Nadia teaches, not what a building does '
                + 'with the finished sentence.'
            },
            {
              t: 'it will treat the sentence as noise and ignore it',
              ok: false,
              why: 'Noise is what naming an irrelevant actor would be, in the '
                + 'first example. The hole is read, not ignored.'
            }],
            evidence: 'her last answer, about the damp cartons'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '2.1.2',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Take five passives from your own writing. Ask by whom? and say '
              + 'what each space is doing.',
            model: 'It was decided not to open on Fridays · The gate sheet is signed '
              + 'by name. By whoever counted — empty, and the phrase by name does '
              + 'the work · It has been suggested that the Ghouta run be reviewed '
              + '· Nine cartons were found to be damp',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'answer',
      ref: '2.1.2',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is her test?',
            model: 'The account was opened in July. By the bank — the actor is '
              + 'noise, and the space is empty',
            minWords: 6,
            rows: 2,
            keys: ['account',
              'opened',
              'july',
              'bank'],
            need: 1,
            hint: 'Look in the dialogue above for the line with <i>test</i> in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'Why does she say it was felt is the worse of the two?',
            model: 'It was decided not to open on Fridays',
            minWords: 2,
            rows: 2,
            keys: ['decided',
              'open',
              'fridays'],
            need: 1,
            hint: 'A reason. Start it with <i>because</i> and it will come out '
              + 'whole. Look in the dialogue above for the line with <i>worse</i> '
              + 'in it. Play it again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '2.1.3',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A reads a passive sentence of their own; B asks by whom? and '
  + 'they decide together what the space is doing.',
      scene: 'u2-2-1-pair',
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
        head: ['Role card 1 — the order and the feeling',
        'Role card 2 — the hole, filled'],
        rows: [['<i>The order was accepted on the 14th</i> against <i>it was felt '
            + 'that the figures needed review.</i> ⚠ <b>The first has an empty '
            + 'space; the second has a person standing back from one.</b> <b>B '
            + 'asks <i>felt by whom?</i> until A says <i>by me</i>, which takes '
            + 'about three attempts.</b>',
          'A reads <i>the nine cartons were found to be damp.</i> ⚠ B asks '
            + 'who the building would put in the space. ⚠ <b>The answer is the '
            + 'man nearest the shelf, which is Abu Yasser, who has never put a '
            + 'wet carton in a rack.</b> <b>Then both of them write the sentence '
            + 'with the finder in it and read it back.</b>']]
      }
    },
    {
      id: 'c6',
      kind: 'own',
      ref: '2.1.3R',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out the exchange for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ ask who out loud</td><td>☐ what is the '
          + 'space doing?</td><td>☐ the actor is noise here</td><td>☐ a hole the '
          + 'shape of a person</td><td>☐ an opinion in the building\'s '
          + 'coat</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['The two passives, and the test'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The two passives, and the test.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '2.1.4',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Take five passive sentences from things you have written. Interrogate each one.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The sentence</th><th>By '
          + 'whom?</th><th>Empty or vacated</th><th>Who the building would put in '
          + 'it</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['The two passives, and the test'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Take five passive sentences from things you have written. '
          + 'Interrogate each one.',
        grammar: 'The two passives, and the test',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (2.1) teaches: The two passives, and the test. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The two passives, and the test.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['passives',
        'test',
        'passive',
        'tool',
        'opposite',
        'uses',
        'moral',
        'clarifies',
        'actor',
        'noise']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The two passives, and the test.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '2.1.4R',
      bookRef: 'Unit 2 · 2.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: Of my five, were empty and were vacated. The worst was , and '
  + 'the building would put in it.',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['The two passives, and the test'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — Of my five, — were empty and — were vacated. The '
          + 'worst was , and the building would put — in it. (The dashes are '
          + 'blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'The two passives, and the test',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (2.1) teaches: '
          + 'The two passives, and the test. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The two passives, and the test.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['passives',
        'test',
        'passive',
        'tool',
        'opposite',
        'uses',
        'moral',
        'clarifies',
        'actor',
        'noise'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The two passives, and the test.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'answer',
      ref: '2.1.5',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the two versions, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>THE JANUARY COUNT, PARAGRAPH 4 — TWO VERSIONS OF ONE SENTENCE. '
          + '29 January. N. Mansour.</b></p><p><b>What I wrote on the 15th.</b> '
          + '<i>Nine cartons in the fourth store were found to be damp and cannot '
          + 'be sold as first quality. The store has been used for overflow since '
          + 'June. It has been noted that the roof above the north corner has not '
          + 'been inspected this year.</i></p><p>⚠ <b>Three sentences, three '
          + 'passives, and not one actor in any of them.</b> <b>Forty-one words '
          + 'and nobody in them.</b></p><p><b>What I should have written.</b> '
          + '<i>I counted the fourth store twice, on the 8th and again on the '
          + '11th, and found nine damp cartons in the north corner. They cannot '
          + 'be sold as first quality. We have used the store for overflow since '
          + 'June, which was my arrangement. Nobody has inspected the roof above '
          + 'that corner this year, and nobody was asked to.</i></p><p>⚠ '
          + '<b>Fifty-eight words, seventeen more, and four actors: me, me, '
          + 'us-and-me, and nobody-and-nobody.</b></p><table '
          + 'class=\'bk\'><tr><th>The sentence</th><th>Who was in the '
          + 'space</th><th>What happened</th></tr><tr><td><i>were found to be '
          + 'damp</i></td><td>⚠ <b>me, twice, on two dates</b></td><td>⚠ <b>read '
          + 'as a finding about the man nearest the '
          + 'shelf</b></td></tr><tr><td><i>has been used for '
          + 'overflow</i></td><td>⚠ <b>me — it was my '
          + 'arrangement</b></td><td>read as a standing practice nobody '
          + 'chose</td></tr><tr><td><i>it has been noted</i></td><td>⚠ <b>me, and '
          + 'only in that sentence</b></td><td>⚠ <b>read as though somebody '
          + 'senior had noted it</b></td></tr><tr><td><i>has not been '
          + 'inspected</i></td><td><b>genuinely nobody</b></td><td>⚠ <b>and the '
          + 'second <i>nobody</i> is the one that matters: nobody was asked '
          + 'to</b></td></tr></table><p>⚠ <b>The third row is the one I am least '
          + 'able to defend.</b> <i>It has been noted</i> <b>was me, noticing, in '
          + 'that sentence, for the first time.</b> ⚠ <b>There was no note, no '
          + 'noter and no noting</b> — <b>I wrote the words because they made the '
          + 'observation sound as though it had come from further up the building '
          + 'than my own desk.</b></p><p>⚠ <b>And the fourth row is where the two '
          + 'versions differ most.</b> <b>The first says the roof has not been '
          + 'inspected, which reads as a failure.</b> ⚠ <b>The second says nobody '
          + 'has inspected it and nobody was asked to, which reads as a gap</b> — '
          + '<b>and a gap belongs to whoever draws up the list of what gets '
          + 'inspected, which is me.</b></p><h4>Writer\'s box</h4><p><b>Writing a '
          + 'paragraph twice — four parts:</b> <b>the version you wrote</b> → ⚠ '
          + '<b>the count: words, and actors</b> → <b>a table of who was in each '
          + 'space</b> → ⚠ <b>the sentence you can least defend, '
          + 'named.</b></p><p>⚠ <b>Count the actors, not the passives.</b> ⚠ '
          + '<i>Three passives and not one actor; forty-one words and nobody in '
          + 'them.</i> <b>A count of passives is a style note. A count of actors '
          + 'is a finding.</b></p><p>⚠ <b>Expect the honest version to be '
          + 'longer.</b> <b>Fifty-eight against forty-one.</b> ⚠ <b>Putting '
          + 'people back into sentences costs words, and that cost is the reason '
          + 'the agentless version got written.</b></p><p>⚠ <b>Find the sentence '
          + 'where the actor was you and the passive borrowed somebody else\'s '
          + 'authority.</b> ⚠ <i>It has been noted</i> <b>when there was no note '
          + 'and no noter.</b> <b>That is the one to name, because it is the one '
          + 'a reader cannot detect and you can.</b></p><p>⚠ <b>Distinguish a '
          + 'failure from a gap.</b> ⚠ <i>The roof has not been inspected</i> '
          + '<b>is a failure and somebody owns it.</b> ⚠ <i>Nobody has inspected '
          + 'it and nobody was asked to</i> <b>is a gap, and it belongs to '
          + 'whoever draws up the list</b> — <b>which is usually the '
          + 'writer.</b></p><p>⚠ <b>And do not rewrite every passive.</b> <b>The '
          + 'order was accepted on the 14th stays exactly as it is</b>, and a '
          + 'learner who de-passivises a whole page has swapped one habit for '
          + 'another.</p>'
      },
      questions: [{
            q: 'How many words and actors are in each version?',
            model: 'Version 1: 41 words, three passives, nought actors. Version 2: '
              + '58 words, seventeen more, four actors — me, me, us-and-me, and '
              + 'nobody-and-nobody',
            minWords: 6,
            rows: 3,
            keys: ['passives',
              'nought',
              'seventeen',
              'us-and-me'],
            need: 1,
            hint: 'A number, and the thing it counts - two cartons, not two. Look '
              + 'in the text above for the line with <i>version</i> in it.'
          },
      {
            q: 'Which sentence can the writer least defend, and why?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with <i>writer</i> in it.'
          },
      {
            q: 'What is the difference between the two versions of the roof sentence?',
            model: 'The roof has not been inspected reads as a failure, which somebody owns',
            minWords: 4,
            rows: 2,
            keys: ['inspected',
              'failure',
              'somebody',
              'owns'],
            need: 1,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>difference</i> in it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c10',
      ref: '2.1.6',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Take a paragraph you have written and write it twice (<b>80 words or '
  + 'more</b>). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['passives',
        'test',
        'passive',
        'tool',
        'opposite',
        'uses',
        'moral',
        'clarifies']
      },
      coach: {
        title: 'What to include',
        task: 'Take a paragraph you have written and write it twice (80 words or more). Use '
  + 'the frame.',
        criteria: [{ t: 'Writing a paragraph twice — four parts: the version you wrote → '
              + '⚠ the count: words, and actors → a table of who was in each '
              + 'space → ⚠ the sentence you can least defend, named.' },
            { t: '⚠ Count the actors, not the passives. ⚠ Three passives and not '
              + 'one actor; forty-one words and nobody in them. A count of '
              + 'passives is a style note. A count of actors is a finding.' },
            { t: '⚠ Expect the honest version to be longer. Fifty-eight against '
              + 'forty-one. ⚠ Putting people back into sentences costs words, and '
              + 'that cost is the reason the agentless version got written.' },
            { t: '⚠ Find the sentence where the actor was you and the passive '
              + 'borrowed somebody else\'s authority. ⚠ It has been noted when '
              + 'there was no note and no noter. That is the one to name, because '
              + 'it is the one a reader cannot detect and you can.' },
            { t: '⚠ Distinguish a failure from a gap. ⚠ The roof has not been '
              + 'inspected is a failure and somebody owns it. ⚠ Nobody has '
              + 'inspected it and nobody was asked to is a gap, and it belongs to '
              + 'whoever draws up the list — which is usually the writer.' },
            { t: '⚠ And do not rewrite every passive. The order was accepted on '
              + 'the 14th stays exactly as it is, and a learner who de-passivises '
              + 'a whole page has swapped one habit for another.' }]
      },
      aiCheck: {
        task: 'Take a paragraph you have written and write it twice (80 words or '
          + 'more). Use the frame.',
        grammar: 'The two passives, and the test',
        must: ['Writing a paragraph twice — four parts: the version you wrote → ⚠ '
          + 'the count: words, and actors → a table of who was in each space → ⚠ '
          + 'the sentence you can least defend, named.',
        '⚠ Count the actors, not the passives. ⚠ Three passives and not one '
          + 'actor; forty-one words and nobody in them. A count of passives is a '
          + 'style note. A count of actors is a finding.',
        '⚠ Expect the honest version to be longer. Fifty-eight against '
          + 'forty-one. ⚠ Putting people back into sentences costs words, and '
          + 'that cost is the reason the agentless version got written.',
        '⚠ Find the sentence where the actor was you and the passive borrowed '
          + 'somebody else\'s authority. ⚠ It has been noted when there was no '
          + 'note and no noter. That is the one to name, because it is the one a '
          + 'reader cannot detect and you can.'],
        vocab: ['passives',
        'test',
        'passive',
        'tool',
        'opposite',
        'uses',
        'moral',
        'clarifies',
        'actor',
        'noise']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '2.1.6P',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. ⚠ Copy the line you are marking, then name the criterion and say '
  + 'what you found.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>Actors counted, not '
          + 'passives</td><td>&nbsp;</td></tr><tr><td>Both word counts, with the '
          + 'honest version longer</td><td>&nbsp;</td></tr><tr><td>The sentence '
          + 'that borrowed somebody else\'s '
          + 'authority</td><td>&nbsp;</td></tr><tr><td>A failure distinguished '
          + 'from a gap</td><td>&nbsp;</td></tr><tr><td>At least one passive left '
          + 'exactly as it was</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      ideas: ['The two passives, and the test'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. ⚠ Copy the line you are marking, then name the criterion '
          + 'and say what you found.',
        grammar: 'The two passives, and the test',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (2.1) '
          + 'teaches: The two passives, and the test. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        must: ['Writing a paragraph twice — four parts: the version you wrote → ⚠ '
          + 'the count: words, and actors → a table of who was in each space → ⚠ '
          + 'the sentence you can least defend, named.',
        '⚠ Count the actors, not the passives. ⚠ Three passives and not one '
          + 'actor; forty-one words and nobody in them. A count of passives is a '
          + 'style note. A count of actors is a finding.',
        '⚠ Expect the honest version to be longer. Fifty-eight against '
          + 'forty-one. ⚠ Putting people back into sentences costs words, and '
          + 'that cost is the reason the agentless version got written.',
        '⚠ Find the sentence where the actor was you and the passive borrowed '
          + 'somebody else\'s authority. ⚠ It has been noted when there was no '
          + 'note and no noter. That is the one to name, because it is the one a '
          + 'reader cannot detect and you can.'],
        vocab: ['passives',
        'test',
        'passive',
        'tool',
        'opposite',
        'uses',
        'moral',
        'clarifies',
        'actor',
        'noise'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      kind: 'own',
      ref: '2.1.6R',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read only the sentence they can least defend. ⚠ The '
  + 'class says who the building would have put in the space.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['The two passives, and the test'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The two passives, and the test.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '2.1.7',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a sentence that was read as being about somebody (<b>200 to 240 '
  + 'words</b>). Say what it said, who wrote it, who it was taken to be about, '
  + 'how they heard, and what the sentence would have been with an actor in it.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 10
        }],
      meter: {
        label: 'words from this lesson',
        words: ['passives',
        'test',
        'passive',
        'tool',
        'opposite',
        'uses',
        'moral',
        'clarifies']
      },
      coach: {
        title: 'What to include',
        task: 'Write about a sentence that was read as being about somebody (200 to 240 '
  + 'words). Say what it said, who wrote it, who it was taken to be about, how '
  + 'they heard, and what the sentence would have been with an actor in it.',
        criteria: [{ t: 'Writing a paragraph twice — four parts: the version you wrote → '
              + '⚠ the count: words, and actors → a table of who was in each '
              + 'space → ⚠ the sentence you can least defend, named.' },
            { t: '⚠ Count the actors, not the passives. ⚠ Three passives and not '
              + 'one actor; forty-one words and nobody in them. A count of '
              + 'passives is a style note. A count of actors is a finding.' },
            { t: '⚠ Expect the honest version to be longer. Fifty-eight against '
              + 'forty-one. ⚠ Putting people back into sentences costs words, and '
              + 'that cost is the reason the agentless version got written.' },
            { t: '⚠ Find the sentence where the actor was you and the passive '
              + 'borrowed somebody else\'s authority. ⚠ It has been noted when '
              + 'there was no note and no noter. That is the one to name, because '
              + 'it is the one a reader cannot detect and you can.' },
            { t: '⚠ Distinguish a failure from a gap. ⚠ The roof has not been '
              + 'inspected is a failure and somebody owns it. ⚠ Nobody has '
              + 'inspected it and nobody was asked to is a gap, and it belongs to '
              + 'whoever draws up the list — which is usually the writer.' },
            { t: '⚠ And do not rewrite every passive. The order was accepted on '
              + 'the 14th stays exactly as it is, and a learner who de-passivises '
              + 'a whole page has swapped one habit for another.' }]
      },
      aiCheck: {
        task: 'Write about a sentence that was read as being about somebody (200 to '
          + '240 words). Say what it said, who wrote it, who it was taken to be '
          + 'about, how they heard, and what the sentence would have been with an '
          + 'actor in it.',
        grammar: 'The two passives, and the test',
        must: ['Writing a paragraph twice — four parts: the version you wrote → ⚠ '
          + 'the count: words, and actors → a table of who was in each space → ⚠ '
          + 'the sentence you can least defend, named.',
        '⚠ Count the actors, not the passives. ⚠ Three passives and not one '
          + 'actor; forty-one words and nobody in them. A count of passives is a '
          + 'style note. A count of actors is a finding.',
        '⚠ Expect the honest version to be longer. Fifty-eight against '
          + 'forty-one. ⚠ Putting people back into sentences costs words, and '
          + 'that cost is the reason the agentless version got written.',
        '⚠ Find the sentence where the actor was you and the passive borrowed '
          + 'somebody else\'s authority. ⚠ It has been noted when there was no '
          + 'note and no noter. That is the one to name, because it is the one a '
          + 'reader cannot detect and you can.'],
        vocab: ['passives',
        'test',
        'passive',
        'tool',
        'opposite',
        'uses',
        'moral',
        'clarifies',
        'actor',
        'noise']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '2.1.7P',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. ⚠ Copy one line and write beside the copy: ★ the '
  + 'criterion ✓ what I found ? who was in the space, and who got put there',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            minWords: 6,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      ideas: ['The two passives, and the test'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. ⚠ Copy one line and write beside the '
          + 'copy: — ★ the criterion — ✓ what I found —? who was in the space, '
          + 'and who got put there (The dashes are blanks the learner fills in '
          + 'with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'The two passives, and the test',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (2.1) teaches: The two passives, and the test. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The two passives, and the test.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['passives',
        'test',
        'passive',
        'tool',
        'opposite',
        'uses',
        'moral',
        'clarifies',
        'actor',
        'noise'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      example: ['You wrote that you check the shelves first. I asked: who reads the '
        + 'sheet after you? You said Abu Yasser reads it at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The two passives, and the test.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'own',
      ref: '2.1.7R',
      bookRef: 'Unit 2 · 2.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. ⚠ In how many did the person it was taken to be about hear '
  + 'it from somebody else? Usually all three — ⚠ and in two of three the writer '
  + 'did not find out for weeks.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then take the last page you wrote, ask '
          + '<i>by whom?</i> of every passive in it, and mark each space empty or '
          + 'vacated (80 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['The two passives, and the test'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The two passives, and the test.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
