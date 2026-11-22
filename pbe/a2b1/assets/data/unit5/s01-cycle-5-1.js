/* Unit 5 · cycle 5.1 — How much is it?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u5-s01', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 5 · 5.1', part: '5.1',
          section: '1', lesson: 'How much is it?', title: 'How much is it?' },
  objective: 'ask a price and give one, at the counter and on the telephone',
  study: {
    minutes: 90,
    objective: 'ask a price and give one, at the counter and on the telephone',
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
    task: 'Write the answer to a customer who asks the price of the tape.',
    weak: '8000.',
    change: ['Say what the figure is for - one roll, or the hundred. A number '
          + 'alone is a different price to every listener.',
        'Add the money, so nobody has to ask.'],
    better: 'It\'s 8,000 SYP each, or 750,000 for the hundred.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '5.1.1',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Ask the price of five things in this room. Use three different '
              + 'questions: How much is…? · How much are…? · How much does… cost?',
            minWords: 6,
            rows: 2,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          },
      {
            q: 'Say these prices out loud: 500 · 1,500 · 12,000 · 85,000 · '
              + '192,000 · 1,250,000',
            model: 'five hundred · one thousand five hundred · twelve thousand · '
              + 'eighty-five thousand · a hundred and ninety-two thousand · one '
              + 'million two hundred and fifty thousand',
            minWords: 6,
            rows: 3,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '5.1.2',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u5-5-1',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – asking and giving a price</b></p><table '
          + 'class=\'bk\'><tr><th>Question</th><th>Answer</th></tr><tr><td><b>How '
          + 'much is</b> the box? (one thing)</td><td>It\'s <b>800 '
          + 'pounds</b>.</td></tr><tr><td><b>How much are</b> the boxes? (more '
          + 'than one)</td><td>They\'re <b>800 each</b>.</td></tr><tr><td><b>How '
          + 'much does</b> the tape <b>cost</b>?</td><td>It <b>costs</b> 2,500 '
          + '<b>a roll</b>.</td></tr><tr><td><b>How much is</b> it <b>for</b> a '
          + 'hundred?</td><td><b>For</b> a hundred it\'s 700 <b>each</b> — 70,000 '
          + '<b>for the hundred</b>.</td></tr><tr><td>Is there a '
          + '<b>discount</b>?</td><td>There\'s <b>no discount on</b> '
          + 'tape.</td></tr></table><p><b>each · a roll · per kilo · for the '
          + 'hundred</b> — English always says <b>what the price is for</b>. A '
          + 'price with no unit is not an answer.</p><p>⚠ <i>How much <b>does</b> '
          + 'it <b>cost</b>?</i> — the verb has <b>no -s</b> after <i>does</i>: '
          + 'not <s>how much does it costs</s>.</p><p>⚠ <i>It\'s expensive</i> is '
          + 'an opinion; <i>it\'s 800 each</i> is a price. At a counter, give the '
          + 'number first.</p><p><b>Practise:</b> Write the question and the '
          + 'answer.</p><p>1 box / 800 → <span class="blank"></span> 2 boxes / '
          + '800 each → <span class="blank"></span> 3 tape / cost / 2,500 a roll '
          + '→ <span class="blank"></span> 4 100 boxes / 70,000 → <span '
          + 'class="blank"></span> 5 discount on tape? → <span '
          + 'class="blank"></span></p><p><b>Useful phrases:</b> How much is…? · '
          + '…each · …a roll · for the hundred · There\'s no discount on… · Free '
          + 'of charge.</p><p><b>Pronunciation – large numbers.</b> 🔊 <b>Track '
          + '5.2</b> Listen and repeat: <i>eight hundred</i> · <i>seventy '
          + 'thousand</i> · <i>a hundred and ninety-two thousand</i> · <i>one '
          + 'million two hundred and fifty thousand</i>. English puts <b>and</b> '
          + 'before the last part: <i>two hundred <b>and</b> fifty</i>.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does the customer want to know?',
            options: [{
              t: 'the price of boxes',
              ok: true,
              why: 'He asks how much the small boxes are, then what a hundred costs.'
            },
            {
              t: 'the opening hours',
              ok: false,
              why: 'No time of day is said in this scene.'
            },
            {
              t: 'the delivery date',
              ok: false,
              why: 'Tuesday is given for the wrap, which makes this tempting - but '
                + 'it is the answer to why there is none, not what he came to '
                + 'ask.'
            }],
            evidence: 'the customer\'s first line, and every question after it'
          },
        {
            q: 'Books closed. Listen. How much is one small box if you take a hundred?',
            options: [{
              t: 'seven hundred pounds',
              ok: true,
              why: 'Eight hundred each singly, seven hundred each for a hundred - '
                + 'and she gives the total, seventy thousand.'
            },
            {
              t: 'eight hundred pounds',
              ok: false,
              why: 'That is the price for one or two. The question is the hundred '
                + 'price, which is the whole point of asking.'
            },
            {
              t: 'two thousand five hundred',
              ok: false,
              why: 'That is a roll of TAPE, and the one thing with no discount on it.'
            }],
            evidence: 'Nour\'s second price'
          },
        {
            q: 'Why does Nour mention the wholesale list?',
            options: [{
              t: 'because the list she gave him is the retail one',
              ok: true,
              why: 'She corrects herself as she hands it over: if he has a shop, '
                + 'there is a different list with different prices.'
            },
            {
              t: 'because the price list is not free',
              ok: false,
              why: 'She says free of charge in the same breath.'
            },
            {
              t: 'because the wrap is out of stock',
              ok: false,
              why: 'The wrap is out of stock, but that is the line before, and she '
                + 'deals with it by taking his number.'
            }],
            evidence: 'her last line, after she hands over the price list'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '5.1.2',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Write the question and the answer.',
      text: '<b>1</b> box / 800 → [[1]] &nbsp; <b>2</b> boxes / 800 each → [[2]] '
      + '&nbsp; <b>3</b> tape / cost / 2,500 a roll → [[3]] &nbsp; <b>4</b> 100 '
      + 'boxes / 70,000 → [[4]] &nbsp; <b>5</b> discount on tape? → [[5]]',
      plain: true,
      small: true,
      answers: {
        
      }
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '5.1.2',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How much is one small box?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>small</i> in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What is the price for a hundred?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with <i>hundred</i> in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '5.1.3',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A asks prices at a counter; B answers from the role card. Then swap.',
      scene: 'u5-5-1-pair',
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
        head: ['Role card 1 — a stationery counter',
        'Role card 2 — a food wholesaler'],
        rows: [['A4 paper 9,000 a packet (10+ packets: 8,000) · pens 500 each (box '
            + 'of 10: 4,200) · folders 1,200 each · no discount on folders · '
            + 'price list free',
          'rice 6,500 per kilo (sack of 25 kg: 150,000) · oil 38,000 a bottle '
            + '(carton of 6: 210,000) · sugar 4,800 per kilo · no discount on '
            + 'sugar · delivery free over 500,000']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '5.1.3R',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their counter scene for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ How much is…?</td><td>☐ How much '
          + 'are…?</td><td>☐ …each</td><td>☐ …a roll / per kilo</td><td>☐ And if '
          + 'I take…?</td><td>☐ There\'s no discount on…</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write four prices with their units; a price with no '
              + 'unit scores nothing. Typical errors: how much does it costs; it '
              + 'is 800 with no each; the price is 800 for one box (correct but '
              + 'slow — teach each)',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – asking and giving a price.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '5.1.4',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Ask three colleagues the price of things they really know — bread, a bus '
  + 'ticket, an hour of their work, a kilo of something. Write the prices with '
  + 'their units.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Thing</th><th>Price</th><th>Per '
          + 'what?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Dear Mr Tarabishi,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Ask three colleagues the price of things they really know — bread, a '
          + 'bus ticket, an hour of their work, a kilo of something. Write the '
          + 'prices with their units. (The dashes are blanks the learner fills in '
          + 'with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'Grammar – asking and giving a price',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (5.1) teaches: Grammar – asking and giving a price. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – asking and giving a price.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'asking',
        'giving',
        'price',
        'roll',
        'kilo',
        'hundred',
        'english',
        'always',
        'unit']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – asking and giving a price.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '5.1.4R',
      bookRef: 'Unit 5 · 5.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: A costs per . If you take , it\'s each.',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Dear Mr Tarabishi,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — A — costs — per —. If you take , it\'s — each. '
          + '(The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – asking and giving a price',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (5.1) teaches: '
          + 'Grammar – asking and giving a price. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – asking and giving a price.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'asking',
        'giving',
        'price',
        'roll',
        'kilo',
        'hundred',
        'english',
        'always',
        'unit'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – asking and giving a price.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '5.1.5',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the price note Nour sends a customer, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>To:</b> Mr F. Tarabishi <b>From:</b> Nour Mansour, Sham '
          + 'Trading <b>Subject:</b> Prices you asked for</p><p>Dear Mr '
          + 'Tarabishi,</p><p>Thank you for your visit this morning. These are '
          + 'the prices for the three items, <b>retail</b>:</p><p>Small boxes: '
          + '<b>800 SYP each</b>. For 100 or more: <b>700 each</b> (70,000 for a '
          + 'hundred).</p><p>Tape, 48 mm: <b>2,500 SYP a roll</b>. There is no '
          + 'discount on tape.</p><p>Plastic wrap, wide: <b>9,000 SYP a roll</b>, '
          + 'when it arrives. It comes on Tuesday afternoon.</p><p>These prices '
          + 'are good until <b>the end of April</b>. VAT is included. Delivery '
          + 'inside Damascus is free of charge for orders over 300,000 '
          + 'SYP.</p><p>If you open an account with us, I can send you the '
          + 'wholesale list, which is lower on the '
          + 'boxes.</p><p>Nour</p><h4>Writer\'s box</h4><p><b>Shape of a price '
          + 'note:</b> thank them → say whether it is <b>retail or wholesale</b> '
          + '→ one line per item, with the price <b>and its unit</b> → the '
          + 'quantity price, if there is one → until when the prices are good → '
          + 'VAT and delivery → an offer.</p><p>A price in writing needs four '
          + 'things: the <b>item</b>, the <b>number</b>, the <b>unit</b>, and '
          + '<b>until when</b>. A price with no date is a promise you cannot '
          + 'keep.</p><p>Say whether <b>VAT is included</b>. In speech people '
          + 'forget; in writing it is the first thing an accountant looks '
          + 'for.</p><p>⚠ Never send one price list to a retail customer and a '
          + 'different one to a shop without saying which is which. Write '
          + '<b>retail</b> or <b>wholesale</b> at the top, every time.</p>'
      },
      questions: [{
            q: 'How much are 100 small boxes in total?',
            minWords: 6,
            rows: 2,
            hint: 'A quantity or a price. If it is money, keep the book\'s figures. '
              + 'Look in the text above for the line with <i>small</i> in it.'
          },
      {
            q: 'Until when are the prices good?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the text above for the line with <i>prices</i> in it.'
          },
      {
            q: 'What does Nour offer at the end, and what would it get the customer?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>Nour</i> in it.'
          }],
      ideas: ['Dear Mr Tarabishi,'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '5.1.6',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a price note for three things you could really sell or quote for (25 '
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
        'asking',
        'giving',
        'price',
        'roll',
        'kilo',
        'hundred',
        'english']
      },
      coach: {
        title: 'What to include',
        task: 'Write a price note for three things you could really sell or quote for (25 '
  + 'words or more). Use the frame.',
        criteria: [{ t: 'Shape of a price note: thank them → say whether it is retail or '
              + 'wholesale → one line per item, with the price and its unit → the '
              + 'quantity price, if there is one → until when the prices are good '
              + '→ VAT and delivery → an offer.' },
            { t: 'A price in writing needs four things: the item, the number, the '
              + 'unit, and until when. A price with no date is a promise you '
              + 'cannot keep.' },
            { t: 'Say whether VAT is included. In speech people forget; in writing '
              + 'it is the first thing an accountant looks for.' },
            { t: '⚠ Never send one price list to a retail customer and a different '
              + 'one to a shop without saying which is which. Write retail or '
              + 'wholesale at the top, every time.' }]
      },
      aiCheck: {
        task: 'Write a price note for three things you could really sell or quote '
          + 'for (25 words or more). Use the frame.',
        grammar: 'Grammar – asking and giving a price',
        must: ['Shape of a price note: thank them → say whether it is retail or '
          + 'wholesale → one line per item, with the price and its unit → the '
          + 'quantity price, if there is one → until when the prices are good → '
          + 'VAT and delivery → an offer.',
        'A price in writing needs four things: the item, the number, the '
          + 'unit, and until when. A price with no date is a promise you cannot '
          + 'keep.',
        'Say whether VAT is included. In speech people forget; in writing it '
          + 'is the first thing an accountant looks for.',
        '⚠ Never send one price list to a retail customer and a different one '
          + 'to a shop without saying which is which. Write retail or wholesale '
          + 'at the top, every time.'],
        vocab: ['grammar',
        'asking',
        'giving',
        'price',
        'roll',
        'kilo',
        'hundred',
        'english',
        'always',
        'unit']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '5.1.6P',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Read as the customer and look for the thing you would have to '
  + 'telephone about. Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<h4>How to give good feedback (we use this all year)</h4><p><b>Not '
          + 'helpful:</b> "Good." / "Bad." / "Many '
          + 'mistakes."</p><p><b>Helpful:</b> "Every price has its unit — good. '
          + 'You didn\'t say until when. And is VAT in the 9,000 or '
          + 'not?"</p><p>Be kind, be clear, and point to <b>one</b> thing to '
          + 'fix.</p><table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>Every price has its unit (<i>each · a roll · per '
          + 'kilo</i>)</td><td>&nbsp;</td></tr><tr><td>It says <b>retail</b> or '
          + '<b>wholesale</b></td><td>&nbsp;</td></tr><tr><td>A date: until when '
          + 'the prices are good</td><td>&nbsp;</td></tr><tr><td>VAT and '
          + 'delivery</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample feedback: "Every price has its unit — good. Add until '
              + 'when, or you will have to honour it in September."',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Read as the customer and look for the thing you would '
          + 'have to telephone about. Tick ✓ or cross ✗.',
        grammar: 'Grammar – asking and giving a price',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (5.1) '
          + 'teaches: Grammar – asking and giving a price. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        must: ['Shape of a price note: thank them → say whether it is retail or '
          + 'wholesale → one line per item, with the price and its unit → the '
          + 'quantity price, if there is one → until when the prices are good → '
          + 'VAT and delivery → an offer.',
        'A price in writing needs four things: the item, the number, the '
          + 'unit, and until when. A price with no date is a promise you cannot '
          + 'keep.',
        'Say whether VAT is included. In speech people forget; in writing it '
          + 'is the first thing an accountant looks for.',
        '⚠ Never send one price list to a retail customer and a different one '
          + 'to a shop without saying which is which. Write retail or wholesale '
          + 'at the top, every time.'],
        vocab: ['grammar',
        'asking',
        'giving',
        'price',
        'roll',
        'kilo',
        'hundred',
        'english',
        'always',
        'unit'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '5.1.6R',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read one price line before and after the fix. The '
  + 'class says what changed.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Before: Paper 9,000. → After: A4 paper: 9,000 SYP a packet, VAT '
              + 'included, until 31 May. (unit, tax and date added — the three '
              + 'things a customer telephones about)',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – asking and giving a price.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '5.1.7',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write the price note for something you would sell yourself — a service, a '
  + 'repair, lessons, a product you make (35 words or more). Price it so that '
  + 'nobody has to telephone you to understand it.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'asking',
        'giving',
        'price',
        'roll',
        'kilo',
        'hundred',
        'english']
      },
      coach: {
        title: 'What to include',
        task: 'Write the price note for something you would sell yourself — a service, a '
  + 'repair, lessons, a product you make (35 words or more). Price it so that '
  + 'nobody has to telephone you to understand it.',
        criteria: [{ t: 'Shape of a price note: thank them → say whether it is retail or '
              + 'wholesale → one line per item, with the price and its unit → the '
              + 'quantity price, if there is one → until when the prices are good '
              + '→ VAT and delivery → an offer.' },
            { t: 'A price in writing needs four things: the item, the number, the '
              + 'unit, and until when. A price with no date is a promise you '
              + 'cannot keep.' },
            { t: 'Say whether VAT is included. In speech people forget; in writing '
              + 'it is the first thing an accountant looks for.' },
            { t: '⚠ Never send one price list to a retail customer and a different '
              + 'one to a shop without saying which is which. Write retail or '
              + 'wholesale at the top, every time.' }]
      },
      aiCheck: {
        task: 'Write the price note for something you would sell yourself — a '
          + 'service, a repair, lessons, a product you make (35 words or more). '
          + 'Price it so that nobody has to telephone you to understand it.',
        grammar: 'Grammar – asking and giving a price',
        must: ['Shape of a price note: thank them → say whether it is retail or '
          + 'wholesale → one line per item, with the price and its unit → the '
          + 'quantity price, if there is one → until when the prices are good → '
          + 'VAT and delivery → an offer.',
        'A price in writing needs four things: the item, the number, the '
          + 'unit, and until when. A price with no date is a promise you cannot '
          + 'keep.',
        'Say whether VAT is included. In speech people forget; in writing it '
          + 'is the first thing an accountant looks for.',
        '⚠ Never send one price list to a retail customer and a different one '
          + 'to a shop without saying which is which. Write retail or wholesale '
          + 'at the top, every time.'],
        vocab: ['grammar',
        'asking',
        'giving',
        'price',
        'roll',
        'kilo',
        'hundred',
        'english',
        'always',
        'unit']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '5.1.7P',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s note as a customer with no money to waste. Write on a '
  + 'slip: ★ This is clear. ✓ Is… included? ? the question I would telephone '
  + 'about',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ The cancellation line is clear and fair — most people hide it. '
              + '✓ Is travel outside Mezzeh extra? ? Can two people share the '
              + 'one-to-one price?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s note as a customer with no money to waste. '
          + 'Write on a slip: — ★ This is clear. — ✓ Is… included? —? the '
          + 'question I would telephone about (The dashes are blanks the learner '
          + 'fills in with their own workplace. Judge what they wrote in them, '
          + 'not the blanks.)',
        grammar: 'Grammar – asking and giving a price',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (5.1) teaches: Grammar – asking and giving a price. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – asking and giving a price.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'asking',
        'giving',
        'price',
        'roll',
        'kilo',
        'hundred',
        'english',
        'always',
        'unit'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – asking and giving a price.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '5.1.7R',
      bookRef: 'Unit 5 · 5.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Put the notes on the wall. Find the one you would buy from and say which '
  + 'sentence made you decide.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final price note. Then write down the prices of five '
          + 'things you bought this week, each with its unit, and say which one '
          + 'you think was too expensive (20+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'The sentence that usually decides is not the price: it is the '
              + 'one that answers the fear — I can buy it for you at cost, or '
              + 'cancelled less than four hours before costs half',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – asking and giving a price.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
