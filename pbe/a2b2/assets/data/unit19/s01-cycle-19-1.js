/* Unit 19 · cycle 19.1 — We buy the boxes from Aleppo.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE4.page('u19-s01', {
  book: { source: 'Proactive Business English · A2 Book 2', ref: 'Unit 19 · 19.1', part: '19.1',
          section: '1', lesson: 'We buy the boxes from Aleppo', title: 'We buy the boxes from Aleppo' },
  objective: 'say where you buy from, and what from each',
  study: {
    minutes: 90,
    objective: 'say where you buy from, and what from each',
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
    task: 'Write where the boxes come from, for the supplier list.',
    weak: 'We buy boxes from Aleppo.',
    change: ['Name the company, not the city — a city does not send an invoice.',
        'Say how long, which is the fact that decides how a problem is handled.'],
    better: 'We buy the small boxes from Shamsi Packaging in Aleppo, and we have done '
      + 'for eleven years.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '19.1.1',
      bookRef: 'Unit 19 · 19.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Name three things your workplace buys and where each one comes from.',
            model: 'Open. Three things and three places; the lengths come in 19.4',
            minWords: 3,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Which preposition? We buy them Aleppo. · She supplies us boxes. '
              + '· They deliver us Tuesdays.',
            model: 'We buy them from Aleppo. She supplies us with boxes. They '
              + 'deliver to us on Tuesdays',
            minWords: 5,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '19.1.2',
      bookRef: 'Unit 19 · 19.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u19-19-1',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – saying where things come from</b></p><table '
          + 'class=\'bk\'><tr><th>Shape</th><th>Example</th></tr><tr><td><b>buy</b> '
          + 'something <b>from</b> somebody</td><td>We <b>buy</b> the boxes '
          + '<b>from</b> Ms Shamsi.</td></tr><tr><td><b>supply</b> somebody '
          + '<b>with</b> something</td><td>She <b>supplies us with</b> boxes and '
          + 'wrap.</td></tr><tr><td><b>get / order</b> something '
          + '<b>from</b></td><td>We <b>order</b> the tape <b>from</b> a '
          + 'wholesaler.</td></tr><tr><td><b>deliver to</b> somebody <b>on</b> a '
          + 'day</td><td>They <b>deliver to us on</b> '
          + 'Tuesdays.</td></tr><tr><td><b>come from</b> a place</td><td>The '
          + 'pallets <b>come from</b> Adra.</td></tr></table><p>⚠ <b>From</b> for '
          + 'the source, <b>to</b> for the destination, <b>with</b> after '
          + '<i>supply</i>. <i>She supplies us <b>with</b> boxes</i> — never '
          + '<s>supplies us boxes</s> and never <s>supplies boxes to us '
          + 'from</s>.</p><p>⚠ When you list suppliers, give each one <b>the '
          + 'thing, the place and how long</b>: <i>boxes and wrap from Aleppo, '
          + 'eleven years</i>. The length is not decoration; it is the part that '
          + 'tells a reader how much the relationship is worth.</p><p>⚠ There is '
          + 'always one line a company buys on price alone. Know which one it is '
          + 'and know why, because that is the line a competitor will take '
          + 'first.</p><p><b>Practise:</b> Say where each comes from, with the '
          + 'thing, the place and the length. 1 your main raw material 2 your '
          + 'packaging 3 your vehicles or tools 4 your paper 5 the thing you buy '
          + 'on price alone</p><p><b>Useful phrases:</b> We buy X from Y. · She '
          + 'supplies us with… · from whoever is cheapest that month · It is the '
          + 'only line we do that with. · worth about four per '
          + 'cent</p><p><b>Pronunciation – the new information takes the '
          + 'stress.</b> 🔊 <b>Track 19.2</b> Listen: <i>we buy the boxes from '
          + '<b>Aleppo</b></i> against <i>we buy the <b>boxes</b> from '
          + 'Aleppo</i>. The first answers "where?", the second answers "what?". '
          + 'Repeat both.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How many suppliers are named?',
            options: [{
              t: 'two',
              ok: false,
              why: 'Two are named first and at length, which is why they stay; the '
                + 'list goes on past them.'
            },
            {
              t: 'three',
              ok: false,
              why: 'Three is the easy count once the paper is heard as a habit '
                + 'rather than a supplier.'
            },
            {
              t: 'four',
              ok: true,
              why: 'Shamsi for boxes and wrap, the tape and the other line, and '
                + 'paper from whoever is cheapest - four sources in all.'
            }],
            evidence: 'count the sources Nour names, including the one that is not a company'
          },
        {
            q: 'Books closed. Listen. Which goods are bought from whoever is cheapest?',
            options: [{
              t: 'paper',
              ok: true,
              why: 'She says it is the only line they buy that way.'
            },
            {
              t: 'boxes and wrap',
              ok: false,
              why: 'Those come from Ms Shamsi, and the eleven years is the point '
                + 'of the exchange.'
            },
            {
              t: 'tape',
              ok: false,
              why: 'Tape has a named supplier too; paper is the exception.'
            }],
            evidence: 'Nour\'s answer about the one line they do that with'
          },
        {
            q: 'What does Nour say the eleven years is worth?',
            options: [{
              t: 'about four per cent',
              ok: true,
              why: 'She prices the relationship, which is what makes it an '
                + 'argument rather than a sentiment.'
            },
            {
              t: 'nine days',
              ok: false,
              why: 'Nine days is how long the Aleppo road was closed - the event '
                + 'that proved the relationship.'
            },
            {
              t: 'nothing, it is only loyalty',
              ok: false,
              why: 'She says the opposite, and gives the number.'
            }],
            evidence: 'her last line, where she puts a figure on a relationship'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'own',
      ref: '19.1.2',
      bookRef: 'Unit 19 · 19.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Say where each comes from, with the thing, the place and the '
              + 'length. 1 your main raw material 2 your packaging 3 your '
              + 'vehicles or tools 4 your paper 5 the thing you buy on price '
              + 'alone',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '19.1.2',
      bookRef: 'Unit 19 · 19.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does the company buy from each one?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *company* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What is the problem with buying everything from one place?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with *everything* in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '19.1.3',
      bookRef: 'Unit 19 · 19.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A is making a list; B gives the suppliers with the thing, the '
  + 'place and the length — and names the line bought on price alone. Use the '
  + 'skeleton, then the role cards.',
      scene: 'u19-19-1-pair',
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
        head: ['Role card 1 — a workshop',
        'Role card 2 — a shop'],
        rows: [['Steel from a stockholder in Damascus, nine years. Paint from a '
            + 'distributor in Homs, two years. Fixings from whoever is cheapest. '
            + 'The stockholder once held a price for three weeks through a '
            + 'currency move.',
          'Stock from two wholesalers — one for food, eleven years; one for '
            + 'household, four. Bags and paper from whoever is cheapest. The food '
            + 'wholesaler delivers on a Thursday even when the order is small.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '19.1.3R',
      bookRef: 'Unit 19 · 19.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their list for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ We buy X from Y.</td><td>☐ supplies us '
          + 'with</td><td>☐ eleven years</td><td>☐ from whoever is '
          + 'cheapest</td><td>☐ the only line we do that with</td><td>☐ worth '
          + 'about four per cent</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the story that proves the relationship is worth '
              + 'something. Typical errors: we buy from them boxes (the object '
              + 'follows the verb) · they supply us boxes (needs with) · we buy '
              + 'in Aleppo for from',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – saying where things come from.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '19.1.4',
      bookRef: 'Unit 19 · 19.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Make the supplier list for your own workplace: four lines, each with the '
  + 'thing, the place, how long, and one fact about the relationship.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What</th><th>From where</th><th>How '
          + 'long</th><th>One '
          + 'fact</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Make the supplier list for your own workplace: four lines, each with '
          + 'the thing, the place, how long, and one fact about the relationship.',
        grammar: 'Grammar – saying where things come from',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (19.1) teaches: Grammar – saying where things come from. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – saying where things come from.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'saying',
        'things',
        'source',
        'destination',
        'after',
        'supply',
        'supplies',
        'boxes',
        'never']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – saying where things come from.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '19.1.4R',
      bookRef: 'Unit 19 · 19.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: We buy from in , for years. The thing that proves it is worth it is .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — We buy — from — in , for — years. The thing that '
          + 'proves it is worth it is —. (The dashes are blanks the learner fills '
          + 'in with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'Grammar – saying where things come from',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (19.1) teaches: '
          + 'Grammar – saying where things come from. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – saying where things come from.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'saying',
        'things',
        'source',
        'destination',
        'after',
        'supply',
        'supplies',
        'boxes',
        'never'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – saying where things come from.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '19.1.5',
      bookRef: 'Unit 19 · 19.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the supplier list, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>SUPPLIERS — who, what, how long, and what we would do without '
          + 'them</b></p><p><b>Shamsi Packaging, Aleppo.</b> Boxes and plastic '
          + 'wrap. Eleven years. Lead time normally four days; nine in March when '
          + 'the road was closed, and she put thirty rolls on a bus without being '
          + 'asked. We are probably paying about 4% over the cheapest price and '
          + 'we know it. <b>Without her:</b> two weeks to find another and about '
          + 'a month to trust them.</p><p><b>Barakat Wholesale, Damascus.</b> '
          + 'Tape, labels, office paper. Two years. Twenty minutes away, delivers '
          + 'the same day if we telephone before ten. <b>Without them:</b> three '
          + 'other wholesalers within an hour. No difficulty.</p><p><b>Adra '
          + 'Pallets.</b> Pallets, and they take the broken ones back, which is '
          + 'the whole reason we use them. <b>Without them:</b> we would have to '
          + 'pay somebody to take broken pallets away, which is about 90,000 a '
          + 'month.</p><p><b>Paper for the counter printer.</b> Whoever is '
          + 'cheapest that month. This is the only line we buy on price '
          + 'alone.</p><p>⚠ <b>One supplier, one risk.</b> Shamsi is a sole '
          + 'supplier for wrap. We have never tested a second one, and that is a '
          + 'decision we have taken by not taking it.</p><h4>Writer\'s '
          + 'box</h4><p><b>A supplier list — one block per supplier:</b> name and '
          + 'place → what they supply → <b>how long</b> → one fact that shows '
          + 'what they are like → <b>what we would do without '
          + 'them</b>.</p><p><b>"Without them" is the useful column.</b> A list '
          + 'of names is an address book; a list with the replacement cost '
          + 'against each name is a document a manager can plan from.</p><p>Give '
          + 'the <b>lead time</b> and one number: four days normally, nine in '
          + 'March, 4% over the cheapest, 90,000 a month. A supplier list without '
          + 'numbers tells nobody anything they did not know.</p><p>⚠ End with '
          + 'the risk. A <b>sole supplier</b> for anything you cannot trade '
          + 'without is worth naming on the page, even — especially — when nobody '
          + 'wants to do anything about it.</p>'
      },
      questions: [{
            q: 'Which supplier would be hardest to replace, and how is that shown?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Look '
              + 'in the text above for the line with *supplier* in it.'
          },
      {
            q: 'What is the real reason for using Adra Pallets?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with *Adra* in it.'
          },
      {
            q: 'What does the warning at the bottom mean by "a decision we have '
              + 'taken by not taking it"?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with *decision* in it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '19.1.6',
      bookRef: 'Unit 19 · 19.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write the supplier list for your own workplace, with three suppliers (35 '
  + 'words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'saying',
        'things',
        'source',
        'destination',
        'after',
        'supply',
        'supplies']
      },
      coach: {
        title: 'What to include',
        task: 'Write the supplier list for your own workplace, with three suppliers (35 '
  + 'words or more). Use the frame.',
        criteria: [{ t: 'A supplier list — one block per supplier: name and place → what '
              + 'they supply → how long → one fact that shows what they are like '
              + '→ what we would do without them.' },
            { t: '"Without them" is the useful column. A list of names is an '
              + 'address book; a list with the replacement cost against each name '
              + 'is a document a manager can plan from.' },
            { t: 'Give the lead time and one number: four days normally, nine in '
              + 'March, 4% over the cheapest, 90,000 a month. A supplier list '
              + 'without numbers tells nobody anything they did not know.' },
            { t: '⚠ End with the risk. A sole supplier for anything you cannot '
              + 'trade without is worth naming on the page, even — especially — '
              + 'when nobody wants to do anything about it.' }]
      },
      aiCheck: {
        task: 'Write the supplier list for your own workplace, with three suppliers '
          + '(35 words or more). Use the frame.',
        grammar: 'Grammar – saying where things come from',
        must: ['A supplier list — one block per supplier: name and place → what they '
          + 'supply → how long → one fact that shows what they are like → what we '
          + 'would do without them.',
        '"Without them" is the useful column. A list of names is an address '
          + 'book; a list with the replacement cost against each name is a '
          + 'document a manager can plan from.',
        'Give the lead time and one number: four days normally, nine in '
          + 'March, 4% over the cheapest, 90,000 a month. A supplier list without '
          + 'numbers tells nobody anything they did not know.',
        '⚠ End with the risk. A sole supplier for anything you cannot trade '
          + 'without is worth naming on the page, even — especially — when nobody '
          + 'wants to do anything about it.'],
        vocab: ['grammar',
        'saying',
        'things',
        'source',
        'destination',
        'after',
        'supply',
        'supplies',
        'boxes',
        'never']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '19.1.6P',
      bookRef: 'Unit 19 · 19.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Ask one question: could a manager plan from this? Tick ✓ or '
  + 'cross ✗, and name the criterion each time.',
      passage: {
        title: 'From the book',
        html: '<h4>Band 3 feedback — name the criterion</h4><p>"The box asks for '
          + 'what you would do without each one. The second block has no answer — '
          + 'how long would it take to replace them?"</p><p>Quote the box, ask '
          + 'the question, stop.</p><table '
          + 'class=\'bk\'><tr><th>Checklist</th><th>✓ / ✗</th></tr><tr><td><i>buy '
          + 'from</i> / <i>supply with</i> used '
          + 'correctly</td><td>&nbsp;</td></tr><tr><td>How long, for every '
          + 'supplier</td><td>&nbsp;</td></tr><tr><td>A "without them" for every '
          + 'supplier</td><td>&nbsp;</td></tr><tr><td>A sole supplier named, if '
          + 'there is one</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample band 3 feedback: "The box says give the lead time and one '
              + 'number, and the paint block has the day problem but no number — '
              + 'how much does that lost Tuesday cost in a month?"',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Ask one question: could a manager plan from this? Tick ✓ '
          + 'or cross ✗, and name the criterion each time.',
        grammar: 'Grammar – saying where things come from',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (19.1) '
          + 'teaches: Grammar – saying where things come from. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        must: ['A supplier list — one block per supplier: name and place → what they '
          + 'supply → how long → one fact that shows what they are like → what we '
          + 'would do without them.',
        '"Without them" is the useful column. A list of names is an address '
          + 'book; a list with the replacement cost against each name is a '
          + 'document a manager can plan from.',
        'Give the lead time and one number: four days normally, nine in '
          + 'March, 4% over the cheapest, 90,000 a month. A supplier list without '
          + 'numbers tells nobody anything they did not know.',
        '⚠ End with the risk. A sole supplier for anything you cannot trade '
          + 'without is worth naming on the page, even — especially — when nobody '
          + 'wants to do anything about it.'],
        vocab: ['grammar',
        'saying',
        'things',
        'source',
        'destination',
        'after',
        'supply',
        'supplies',
        'boxes',
        'never'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'own',
      ref: '19.1.6R',
      bookRef: 'Unit 19 · 19.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read one "without them". The class says which '
  + 'workplace would be in the most trouble on Monday.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – saying where things come from.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '19.1.7',
      bookRef: 'Unit 19 · 19.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about one supplier your workplace depends on (60 to 100 words). Say '
  + 'what they supply, how long, one thing they did that nobody had to do, and '
  + 'what would happen if they stopped tomorrow.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 8
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'saying',
        'things',
        'source',
        'destination',
        'after',
        'supply',
        'supplies']
      },
      coach: {
        title: 'What to include',
        task: 'Write about one supplier your workplace depends on (60 to 100 words). Say '
  + 'what they supply, how long, one thing they did that nobody had to do, and '
  + 'what would happen if they stopped tomorrow.',
        criteria: [{ t: 'A supplier list — one block per supplier: name and place → what '
              + 'they supply → how long → one fact that shows what they are like '
              + '→ what we would do without them.' },
            { t: '"Without them" is the useful column. A list of names is an '
              + 'address book; a list with the replacement cost against each name '
              + 'is a document a manager can plan from.' },
            { t: 'Give the lead time and one number: four days normally, nine in '
              + 'March, 4% over the cheapest, 90,000 a month. A supplier list '
              + 'without numbers tells nobody anything they did not know.' },
            { t: '⚠ End with the risk. A sole supplier for anything you cannot '
              + 'trade without is worth naming on the page, even — especially — '
              + 'when nobody wants to do anything about it.' }]
      },
      aiCheck: {
        task: 'Write about one supplier your workplace depends on (60 to 100 '
          + 'words). Say what they supply, how long, one thing they did that '
          + 'nobody had to do, and what would happen if they stopped tomorrow.',
        grammar: 'Grammar – saying where things come from',
        must: ['A supplier list — one block per supplier: name and place → what they '
          + 'supply → how long → one fact that shows what they are like → what we '
          + 'would do without them.',
        '"Without them" is the useful column. A list of names is an address '
          + 'book; a list with the replacement cost against each name is a '
          + 'document a manager can plan from.',
        'Give the lead time and one number: four days normally, nine in '
          + 'March, 4% over the cheapest, 90,000 a month. A supplier list without '
          + 'numbers tells nobody anything they did not know.',
        '⚠ End with the risk. A sole supplier for anything you cannot trade '
          + 'without is worth naming on the page, even — especially — when nobody '
          + 'wants to do anything about it.'],
        vocab: ['grammar',
        'saying',
        'things',
        'source',
        'destination',
        'after',
        'supply',
        'supplies',
        'boxes',
        'never']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '19.1.7P',
      bookRef: 'Unit 19 · 19.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ the thing nobody had to do ✓ '
  + 'buy from / supply with correct? ? has anybody ever tested a second supplier?',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "charged us for the parts and not the journey" ✓ buy from / '
              + 'supply with correct. ? How old is he, and has anybody asked?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ the thing nobody had '
          + 'to do — ✓ buy from / supply with correct? —? has anybody ever tested '
          + 'a second supplier? (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – saying where things come from',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (19.1) teaches: Grammar – saying where things come from. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – saying where things come from.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'saying',
        'things',
        'source',
        'destination',
        'after',
        'supply',
        'supplies',
        'boxes',
        'never'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – saying where things come from.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '19.1.7R',
      bookRef: 'Unit 19 · 19.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. Count the sole suppliers in the room. Ask how many have '
  + 'ever been discussed out loud at those workplaces.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then find out your workplace\'s real lead '
          + 'time from its main supplier — in days, not "about a week" — and '
          + 'write where you found it (35+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Count the sole suppliers in the room and ask how many have ever '
              + 'been discussed out loud at those workplaces. The number is '
              + 'usually none, and that is the finding',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – saying where things come from.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
