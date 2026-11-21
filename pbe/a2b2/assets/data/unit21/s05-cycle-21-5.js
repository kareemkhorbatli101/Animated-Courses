/* Unit 21 · cycle 21.5 — Goods must be checked on arrival.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE4.page('u21-s05', {
  book: { source: 'Proactive Business English · A2 Book 2', ref: 'Unit 21 · 21.5', part: '21.5',
          section: '5', lesson: 'Goods must be checked on arrival', title: 'Goods must be checked on arrival' },
  objective: 'state a quality rule',
  study: {
    minutes: 90,
    objective: 'state a quality rule',
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
    task: 'Write the goods-in rule for the warehouse notice.',
    weak: 'Check the goods when they come.',
    change: ['Use the passive and say who, or it is a duty nobody has.',
        'Say what it is checked against and by when.'],
    better: 'Goods must be checked on arrival by the person receiving them, against '
      + 'the order and not the note, before the driver leaves.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '21.5.1',
      bookRef: 'Unit 21 · 21.5 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'What is checked at your workplace when goods arrive? Who checks '
              + 'it, and against what?',
            model: 'Open. "Against what" is the question that usually has no answer, '
              + 'and it is the one that matters',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Your own '
              + 'workplace, not the book\'s. Say it out loud once before you '
              + 'write it - a sentence or two is enough.'
          },
      {
            q: 'Which is a rule? Goods should be checked. · Goods must be '
              + 'checked on arrival, against the order, before the driver leaves.',
            model: 'The second. Who, against what, before when — all three',
            minWords: 3,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '21.5.2',
      bookRef: 'Unit 21 · 21.5 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u21-21-5',
      passage: {
        title: 'Language box',
        html: '<p><b>Stating a quality rule – who, against what, before '
          + 'when</b></p><table '
          + 'class=\'bk\'><tr><th>Part</th><th>Example</th></tr><tr><td><b>must '
          + 'be</b> + past participle</td><td>Goods <b>must be checked</b> on '
          + 'arrival.</td></tr><tr><td><b>by</b> whom</td><td><b>by the person '
          + 'receiving them</b></td></tr><tr><td><b>against</b> '
          + 'what</td><td><b>against the order</b>, not the delivery '
          + 'note</td></tr><tr><td><b>before</b> when</td><td><b>before the '
          + 'driver leaves</b></td></tr><tr><td>The exception, with its own '
          + 'instruction</td><td>If the driver cannot wait, write <b>"received '
          + 'unchecked"</b> and check <b>within the '
          + 'hour</b>.</td></tr></table><p>⚠ <b>A rule without who, against what '
          + 'and before when is a hope.</b> All three, every time. The commonest '
          + 'missing one is <i>against what</i> — and checking against the '
          + 'delivery note instead of the order is how a missing line is never '
          + 'found.</p><p>⚠ <b>Every rule needs its exception written into '
          + 'it.</b> A rule that cannot be kept on a busy Thursday is a rule that '
          + 'will be broken on a Thursday and then on a Monday. Name the hard '
          + 'case and give it its own instruction.</p><p>⚠ <b>Put the reason '
          + 'underneath, in one line.</b> Unit 16 said why: a rule whose story is '
          + 'lost is dropped by the first person who never heard '
          + 'it.</p><p><b>Practise:</b> Turn each hope into a rule with all three '
          + 'parts and one exception. 1 checking goods 2 signing for things 3 '
          + 'locking up 4 answering the telephone 5 taking a '
          + 'complaint</p><p><b>Useful phrases:</b> must be checked · by the '
          + 'person receiving them · against the order, not the note · before the '
          + 'driver leaves · received unchecked · within the '
          + 'hour</p><p><b>Pronunciation – reading a rule aloud.</b> 🔊 <b>Track '
          + '21.10</b> Listen: the three parts are separated by small pauses — '
          + '<i>must be checked · by the person receiving them · against the '
          + 'order</i>. Repeat the rule twice. A rule is read aloud to a new '
          + 'person, so it must survive being said.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is the new rule?',
            options: [{
              t: 'check everything',
              ok: false,
              why: 'That is the first version, which Abu Yasser calls a hope '
                + 'rather than a rule.'
            },
            {
              t: 'check against the order before the driver leaves',
              ok: true,
              why: 'By the person receiving them, against the order and not the '
                + 'note, before he goes.'
            },
            {
              t: 'photograph everything',
              ok: false,
              why: 'Photographs are evidence in cycle 21.1, not part of this rule.'
            }],
            evidence: 'Nour\'s second version of the rule, after Abu Yasser says what a '
              + 'rule needs'
          },
        {
            q: 'Books closed. Listen. What is written when the driver cannot wait?',
            options: [{
              t: '‘received unchecked’ on his copy',
              ok: true,
              why: 'Which is the exception that stops the rule from being broken silently.'
            },
            {
              t: 'nothing, he waits',
              ok: false,
              why: 'Abu Yasser\'s whole objection is that he will not wait for '
                + 'Hala on a busy day.'
            },
            {
              t: 'a photograph is taken instead',
              ok: false,
              why: 'Photographs belong to a different cycle of this unit.'
            }],
            evidence: 'Nour\'s last version of the rule'
          },
        {
            q: 'What does Abu Yasser say a rule needs?',
            options: [{
              t: 'a person, a thing to check against, and a moment',
              ok: true,
              why: 'Without them it is a hope - which is what the first version was.'
            },
            {
              t: 'a signature from the manager',
              ok: false,
              why: 'No approval is mentioned; it is about the wording.'
            },
            {
              t: 'a penalty for breaking it',
              ok: false,
              why: 'Nothing in the exchange mentions consequences.'
            }],
            evidence: 'his first objection, before the rule is rewritten'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'own',
      ref: '21.5.2',
      bookRef: 'Unit 21 · 21.5 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Turn each hope into a rule with all three parts and one '
              + 'exception. 1 checking goods 2 signing for things 3 locking up 4 '
              + 'answering the telephone 5 taking a complaint',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '21.5.2',
      bookRef: 'Unit 21 · 21.5 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What three things does a rule need, according to Abu Yasser?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *Yasser* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What is the exception, and why is it in the rule?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with *exception* in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '21.5.3',
      bookRef: 'Unit 21 · 21.5 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A proposes a hope; B turns it into a rule and finds the hard '
  + 'case. Use the skeleton, then the role cards.',
      scene: 'u21-21-5-pair',
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
        head: ['Role card 1 — taking a complaint',
        'Role card 2 — signing for a collection'],
        rows: [['The hope: "complaints must be written down". The hard case: a '
            + 'complaint taken at the counter when there is a queue of six '
            + 'people.',
          'The hope: "collections must be signed for". The hard case: a '
            + 'customer collecting at five past seven, when the office is locked '
            + 'and only the warehouse is open.']]
      }
    },
    {
      id: 'c6',
      kind: 'own',
      ref: '21.5.3R',
      bookRef: 'Unit 21 · 21.5 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs read their finished rule aloud for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ must be checked</td><td>☐ by the '
          + 'person receiving them</td><td>☐ against the order</td><td>☐ before '
          + 'the driver leaves</td><td>☐ received unchecked</td><td>☐ within the '
          + 'hour</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Stating a quality rule – who, against '
        + 'what, before when.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '21.5.4',
      bookRef: 'Unit 21 · 21.5 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Write three real rules for your workplace. Each one: who, against what, '
  + 'before when, one exception with its own instruction, and the reason in one '
  + 'line.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The rule</th><th>Who / against what / '
          + 'before when</th><th>The hard case</th><th>The '
          + 'reason</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
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
        task: 'Write three real rules for your workplace. Each one: who, against '
          + 'what, before when, one exception with its own instruction, and the '
          + 'reason in one line.',
        grammar: 'Stating a quality rule – who, against what, before when',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (21.5) teaches: Stating a quality rule – who, against what, '
          + 'before when. Judge the language against THAT and against nothing the '
          + 'course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Stating a quality rule – who, against '
          + 'what, before when.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['stating',
        'quality',
        'rule',
        'against',
        'before',
        'without',
        'hope',
        'time',
        'commonest',
        'missing']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Stating a quality rule – who, against '
        + 'what, before when.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '21.5.4R',
      bookRef: 'Unit 21 · 21.5 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: must be by , against , before . If , then . The reason is .',
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
        task: 'Tell the class: — must be — by , against , before —. If , then —. '
          + 'The reason is —. (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Stating a quality rule – who, against what, before when',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (21.5) teaches: '
          + 'Stating a quality rule – who, against what, before when. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Stating a quality rule – who, against '
          + 'what, before when.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['stating',
        'quality',
        'rule',
        'against',
        'before',
        'without',
        'hope',
        'time',
        'commonest',
        'missing'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Stating a quality rule – who, against '
        + 'what, before when.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '21.5.5',
      bookRef: 'Unit 21 · 21.5 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the page of quality rules, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>GOODS IN — the four rules, and what to do when they cannot be '
          + 'kept</b></p><p><b>1</b> Goods <b>must be checked</b> by the person '
          + 'receiving them, <b>against the order</b>, <b>before the driver '
          + 'leaves</b>. <i>Reason: a delivery note can agree with itself and '
          + 'still be wrong. The order is the only document that says what we '
          + 'asked for.</i></p><p><b>2</b> Any damage <b>must be photographed</b> '
          + 'where it stands, with the pallet label in the picture, <b>before '
          + 'anything is moved</b>. <i>Reason: once it has been moved, the '
          + 'photograph proves nothing and the claim is a '
          + 'conversation.</i></p><p><b>3</b> The driver\'s note <b>must be '
          + 'signed with the fault written on it</b> — the number damaged, the '
          + 'number delivered, and the position. <i>Reason: "received in good '
          + 'condition" ends the matter. Three words end it the other '
          + 'way.</i></p><p><b>4</b> Damaged goods <b>must not be used or thrown '
          + 'away</b> for fourteen days. <i>Reason: a supplier may want to '
          + 'inspect, and a claim with nothing left to look at is a claim that '
          + 'gets refused.</i></p><p><b>When a rule cannot be kept.</b> If the '
          + 'driver will not wait, write <b>"received unchecked"</b> on his note '
          + 'before signing, and check within the hour. If you cannot photograph, '
          + 'write the fault on the note and tell the office the same hour. <b>A '
          + 'rule that is broken and reported is a problem; a rule that is broken '
          + 'quietly is the next complaint.</b></p><h4>Writer\'s box</h4><p><b>A '
          + 'page of quality rules — four at most, numbered, each with its reason '
          + 'underneath in italics</b>, and a final section: <b>when a rule '
          + 'cannot be kept</b>.</p><p><b>Four is the limit.</b> A page with nine '
          + 'rules is a page nobody reads; four can be read aloud to a new person '
          + 'in two minutes and remembered by the second week.</p><p><b>Each '
          + 'reason is one line and names what goes wrong without it.</b> <i>A '
          + 'delivery note can agree with itself and still be wrong.</i> The '
          + 'reason is what keeps the rule alive after the people who wrote it '
          + 'have gone.</p><p>⚠ <b>The last section is what makes the page '
          + 'honest.</b> Rules are broken; the question is whether they are '
          + 'broken loudly or quietly. Give every rule a way of being broken '
          + 'properly and you will find out about the exceptions instead of '
          + 'discovering them in a complaint.</p>'
      },
      questions: [{
            q: 'What is the reason given for checking against the order?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with *checking* in it.'
          },
      {
            q: 'Why must damaged goods not be thrown away?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with *because* and it will come out whole. '
              + 'Look in the text above for the line with *damaged* in it.'
          },
      {
            q: 'What is the difference between a rule broken and reported and '
              + 'one broken quietly?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with *difference* in it.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '21.5.6',
      bookRef: 'Unit 21 · 21.5 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a page of quality rules for your own workplace, with three rules (35 '
  + 'words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['stating',
        'quality',
        'rule',
        'against',
        'before',
        'without',
        'hope',
        'time']
      },
      coach: {
        title: 'What to include',
        task: 'Write a page of quality rules for your own workplace, with three rules (35 '
  + 'words or more). Use the frame.',
        criteria: [{ t: 'A page of quality rules — four at most, numbered, each with its '
              + 'reason underneath in italics, and a final section: when a rule '
              + 'cannot be kept.' },
            { t: 'Four is the limit. A page with nine rules is a page nobody '
              + 'reads; four can be read aloud to a new person in two minutes and '
              + 'remembered by the second week.' },
            { t: 'Each reason is one line and names what goes wrong without it. A '
              + 'delivery note can agree with itself and still be wrong. The '
              + 'reason is what keeps the rule alive after the people who wrote '
              + 'it have gone.' },
            { t: '⚠ The last section is what makes the page honest. Rules are '
              + 'broken; the question is whether they are broken loudly or '
              + 'quietly. Give every rule a way of being broken properly and you '
              + 'will find out about the exceptions instead of discovering them '
              + 'in a complaint.' }]
      },
      aiCheck: {
        task: 'Write a page of quality rules for your own workplace, with three '
          + 'rules (35 words or more). Use the frame.',
        grammar: 'Stating a quality rule – who, against what, before when',
        must: ['A page of quality rules — four at most, numbered, each with its '
          + 'reason underneath in italics, and a final section: when a rule '
          + 'cannot be kept.',
        'Four is the limit. A page with nine rules is a page nobody reads; '
          + 'four can be read aloud to a new person in two minutes and remembered '
          + 'by the second week.',
        'Each reason is one line and names what goes wrong without it. A '
          + 'delivery note can agree with itself and still be wrong. The reason '
          + 'is what keeps the rule alive after the people who wrote it have '
          + 'gone.',
        '⚠ The last section is what makes the page honest. Rules are broken; '
          + 'the question is whether they are broken loudly or quietly. Give '
          + 'every rule a way of being broken properly and you will find out '
          + 'about the exceptions instead of discovering them in a complaint.'],
        vocab: ['stating',
        'quality',
        'rule',
        'against',
        'before',
        'without',
        'hope',
        'time',
        'commonest',
        'missing']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '21.5.6P',
      bookRef: 'Unit 21 · 21.5 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Ask one question: could somebody keep these rules on a busy '
  + 'Thursday? Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<h4>Band 3 feedback — name the criterion</h4><p>"The box says every '
          + 'rule has who, against what and before when. Rule 2 has no <i>before '
          + 'when</i> — before what, exactly?"</p><p>Quote, question, '
          + 'stop.</p><table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td><i>must be</i> + past participle '
          + 'throughout</td><td>&nbsp;</td></tr><tr><td>Who, against what, before '
          + 'when — in every rule</td><td>&nbsp;</td></tr><tr><td>A one-line '
          + 'reason under each</td><td>&nbsp;</td></tr><tr><td>A "when a rule '
          + 'cannot be kept" section</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample band 3 feedback: "The box says four at most and three is '
              + 'better. The reason under rule 2 has a number in it, which is the '
              + 'strongest of the three — could rule 1\'s reason have one too? '
              + 'How many complaints were lost last year?"',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Ask one question: could somebody keep these rules on a '
          + 'busy Thursday? Tick ✓ or cross ✗.',
        grammar: 'Stating a quality rule – who, against what, before when',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (21.5) '
          + 'teaches: Stating a quality rule – who, against what, before when. '
          + 'Judge the language against THAT and against nothing the course has '
          + 'not taught yet.',
        must: ['A page of quality rules — four at most, numbered, each with its '
          + 'reason underneath in italics, and a final section: when a rule '
          + 'cannot be kept.',
        'Four is the limit. A page with nine rules is a page nobody reads; '
          + 'four can be read aloud to a new person in two minutes and remembered '
          + 'by the second week.',
        'Each reason is one line and names what goes wrong without it. A '
          + 'delivery note can agree with itself and still be wrong. The reason '
          + 'is what keeps the rule alive after the people who wrote it have '
          + 'gone.',
        '⚠ The last section is what makes the page honest. Rules are broken; '
          + 'the question is whether they are broken loudly or quietly. Give '
          + 'every rule a way of being broken properly and you will find out '
          + 'about the exceptions instead of discovering them in a complaint.'],
        vocab: ['stating',
        'quality',
        'rule',
        'against',
        'before',
        'without',
        'hope',
        'time',
        'commonest',
        'missing'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '21.5.6R',
      bookRef: 'Unit 21 · 21.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their "when a rule cannot be kept". The class '
  + 'says whose workplace would hear about the exceptions.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Read the "when a rule cannot be kept" sections. Ask whose '
              + 'workplace would hear about the exceptions rather than discover '
              + 'them',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Stating a quality rule – who, against '
        + 'what, before when.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '21.5.7',
      bookRef: 'Unit 21 · 21.5 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a rule at your work that is broken every week (60 to 100 words). '
  + 'Say what the rule is, why it is broken, what the hard case is, and what the '
  + 'rule should say instead.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      meter: {
        label: 'words from this lesson',
        words: ['stating',
        'quality',
        'rule',
        'against',
        'before',
        'without',
        'hope',
        'time']
      },
      coach: {
        title: 'What to include',
        task: 'Write about a rule at your work that is broken every week (60 to 100 words). '
  + 'Say what the rule is, why it is broken, what the hard case is, and what the '
  + 'rule should say instead.',
        criteria: [{ t: 'A page of quality rules — four at most, numbered, each with its '
              + 'reason underneath in italics, and a final section: when a rule '
              + 'cannot be kept.' },
            { t: 'Four is the limit. A page with nine rules is a page nobody '
              + 'reads; four can be read aloud to a new person in two minutes and '
              + 'remembered by the second week.' },
            { t: 'Each reason is one line and names what goes wrong without it. A '
              + 'delivery note can agree with itself and still be wrong. The '
              + 'reason is what keeps the rule alive after the people who wrote '
              + 'it have gone.' },
            { t: '⚠ The last section is what makes the page honest. Rules are '
              + 'broken; the question is whether they are broken loudly or '
              + 'quietly. Give every rule a way of being broken properly and you '
              + 'will find out about the exceptions instead of discovering them '
              + 'in a complaint.' }]
      },
      aiCheck: {
        task: 'Write about a rule at your work that is broken every week (60 to 100 '
          + 'words). Say what the rule is, why it is broken, what the hard case '
          + 'is, and what the rule should say instead.',
        grammar: 'Stating a quality rule – who, against what, before when',
        must: ['A page of quality rules — four at most, numbered, each with its '
          + 'reason underneath in italics, and a final section: when a rule '
          + 'cannot be kept.',
        'Four is the limit. A page with nine rules is a page nobody reads; '
          + 'four can be read aloud to a new person in two minutes and remembered '
          + 'by the second week.',
        'Each reason is one line and names what goes wrong without it. A '
          + 'delivery note can agree with itself and still be wrong. The reason '
          + 'is what keeps the rule alive after the people who wrote it have '
          + 'gone.',
        '⚠ The last section is what makes the page honest. Rules are broken; '
          + 'the question is whether they are broken loudly or quietly. Give '
          + 'every rule a way of being broken properly and you will find out '
          + 'about the exceptions instead of discovering them in a complaint.'],
        vocab: ['stating',
        'quality',
        'rule',
        'against',
        'before',
        'without',
        'hope',
        'time',
        'commonest',
        'missing']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '21.5.7P',
      bookRef: 'Unit 21 · 21.5 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ the hard case ✓ must be + past '
  + 'participle? ? who could change the rule?',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "the customer is standing there with the money in his hand" ✓ '
              + 'must be + past participle. ? Who could change the rule — and '
              + 'would they?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ the hard case — ✓ '
          + 'must be + past participle? —? who could change the rule? (The dashes '
          + 'are blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Stating a quality rule – who, against what, before when',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (21.5) teaches: Stating a quality rule – who, against what, '
          + 'before when. Judge the language against THAT and against nothing the '
          + 'course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Stating a quality rule – who, against '
          + 'what, before when.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['stating',
        'quality',
        'rule',
        'against',
        'before',
        'without',
        'hope',
        'time',
        'commonest',
        'missing'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Stating a quality rule – who, against '
        + 'what, before when.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'own',
      ref: '21.5.7R',
      bookRef: 'Unit 21 · 21.5 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. In how many is the rule broken because it cannot be kept, '
  + 'rather than because nobody cares? It is nearly all, and that is a management '
  + 'finding, not a discipline one.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then rewrite one real rule from your '
          + 'workplace with all three parts and a hard case, and show it to '
          + 'whoever wrote the original (35+ words).</p>'
      },
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
      'I used this cycle\'s language: Stating a quality rule – who, against '
        + 'what, before when.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
