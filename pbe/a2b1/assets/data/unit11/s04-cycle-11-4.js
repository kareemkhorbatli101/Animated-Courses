/* Unit 11 · cycle 11.4 — Is breakfast included?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u11-s04', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 11 · 11.4', part: '11.4',
          section: '4', lesson: 'Is breakfast included?', title: 'Is breakfast included?' },
  objective: 'ask what is and is not included',
  study: {
    minutes: 90,
    objective: 'ask what is and is not included',
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
    task: 'Write the three questions you ask the hotel before you agree.',
    weak: 'How much?',
    change: ['Ask what the price already covers, so it is really the price.',
        'Shape one question so a bare yes cannot answer it.'],
    better: 'Is breakfast included? Is there heating in the room, or only in the '
      + 'hall? And can you hold it until five?'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '11.4.1',
      bookRef: 'Unit 11 · 11.4 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Write five Is there…? / Is… included? questions you would ask '
              + 'about a hotel room.',
            model: 'Samples: Is breakfast included? · Is there Wi-Fi in the room? · '
              + 'Is parking included? · Is there hot water all day? · Is there a '
              + 'lift?',
            minWords: 6,
            rows: 3,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Which question gets more? Is breakfast included? or What\'s '
              + 'included? Say both out loud and decide.',
            model: 'What\'s included? gets more in theory and a shorter answer in '
              + 'practice — people list two things and stop. Is X included? asked '
              + 'five times gets five real answers. Ask the open one and then the '
              + 'specific ones',
            minWords: 6,
            rows: 3,
            hint: 'One of the ones named in the question - pick it and say it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '11.4.2',
      bookRef: 'Unit 11 · 11.4 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u11-11-4',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – asking what is included</b></p><table '
          + 'class=\'bk\'><tr><th>Question</th><th>Why it '
          + 'matters</th></tr><tr><td><b>Is breakfast included?</b></td><td>the '
          + 'commonest extra charge</td></tr><tr><td><b>Is there</b> Wi-Fi in the '
          + 'room, or only downstairs?</td><td>the <i>or</i> makes a vague yes '
          + 'impossible</td></tr><tr><td><b>Is there</b> hot water all '
          + 'day?</td><td>the honest answer is usually "yes, '
          + 'but…"</td></tr><tr><td><b>Is parking included?</b></td><td>often the '
          + 'biggest surprise on the invoice</td></tr><tr><td><b>Is it '
          + 'safe?</b></td><td>ask it plainly; people answer it '
          + 'plainly</td></tr><tr><td><b>What time is check-out?</b></td><td>ask '
          + 'before you need to know</td></tr></table><p>⚠ Add <b>or</b> to a '
          + 'yes/no question and you cannot be given a vague yes: <i>Is there '
          + 'Wi-Fi <b>in the room, or only downstairs</b>?</i></p><p>⚠ The useful '
          + 'information usually comes <b>after</b> the answer: <i>yes, but it is '
          + 'better in the morning</i> · <i>it is safe, but the man with the key '
          + 'is not there before six.</i> Leave a silence after the answer and it '
          + 'arrives.</p><p><b>Practise:</b> Ask each one with <b>or</b>, so that '
          + 'a vague yes is impossible.</p><p>1 Wi-Fi 2 breakfast 3 parking 4 hot '
          + 'water 5 the invoice</p><p><b>Useful phrases:</b> A few questions. · '
          + 'Is… included? · Is there…, or only…? · That is an honest answer. · '
          + 'Is it safe? · That is the most useful thing anybody has told me '
          + 'today.</p><p><b>Pronunciation – rising yes/no questions.</b> 🔊 '
          + '<b>Track 11.8</b> Listen. A yes/no question <b>rises</b> at the end: '
          + '<i>Is breakfast in↗cluded?</i> A question with <i>or</i> rises on '
          + 'the first part and <b>falls</b> on the second: <i>in the ↗room, or '
          + 'only ↘downstairs?</i></p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Where is Bassel?',
            options: [{
              t: 'at the front desk',
              ok: true,
              why: 'He is given a room number and a floor, and asks about '
                + 'breakfast, Wi-Fi and parking on the spot.'
            },
            {
              t: 'on the telephone',
              ok: false,
              why: 'The booking WAS made by telephone, in an earlier cycle, which '
                + 'is why this is tempting.'
            },
            {
              t: 'in a shop',
              ok: false,
              why: 'Nothing is being bought.'
            }],
            evidence: 'the first line - what he is handed, and what he asks about '
              + 'immediately after'
          },
        {
            q: 'Books closed. Listen. What is NOT included?',
            options: [{
              t: 'parking',
              ok: true,
              why: 'The hotel car park is full until Tuesday; the paid one behind '
                + 'costs four thousand a night.'
            },
            {
              t: 'breakfast',
              ok: false,
              why: 'Included, six thirty to ten, on the ground floor.'
            },
            {
              t: 'Wi-Fi in the room',
              ok: false,
              why: 'In the room, with the password on the card.'
            }],
            evidence: 'the desk\'s answer about the car park'
          },
        {
            q: 'What does Bassel call the most useful thing he has been told?',
            options: [{
              t: 'to park in the street under the camera, because the key man is '
                + 'not there before six',
              ok: true,
              why: 'It is the one answer that goes beyond the question and solves '
                + 'his actual five o\'clock problem.'
            },
            {
              t: 'that breakfast starts at six thirty',
              ok: false,
              why: 'He likes it - "six thirty, good" - but says nothing like that about it.'
            },
            {
              t: 'that the hot water is better in the morning',
              ok: false,
              why: 'He calls that an honest answer, which is a different compliment.'
            }],
            evidence: 'the desk\'s last answer'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '11.4.2',
      bookRef: 'Unit 11 · 11.4 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Ask each one with or, so that a vague yes is impossible.',
      questions: [{
            q: '1 Wi-Fi',
            model: 'Is there Wi-Fi in the room, or only in the lobby?',
            minWords: 4,
            rows: 2
          },
      {
            q: '2 breakfast',
            model: 'Is breakfast included, or is it extra?',
            minWords: 2,
            rows: 2
          },
      {
            q: '3 parking',
            model: 'Is parking included, or is there a charge?',
            minWords: 2,
            rows: 2
          },
      {
            q: '4 hot water',
            model: 'Is there hot water all day, or only morning and evening?',
            minWords: 3,
            rows: 2
          },
      {
            q: '5 the invoice',
            model: 'Do you give a company invoice, or only a receipt?',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '11.4.2',
      bookRef: 'Unit 11 · 11.4 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is not included?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *included* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What does the receptionist suggest instead?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with *receptionist* in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '11.4.3',
      bookRef: 'Unit 11 · 11.4 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A asks six questions at a desk; B answers honestly, including '
  + 'one "yes, but". Use the skeleton, then the role cards.',
      scene: 'u11-11-4-pair',
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
        head: ['Role card 1 — a rented flat',
        'Role card 2 — a car hire'],
        rows: [['Included: water, the cleaner once a week. Not included: '
            + 'electricity, gas, the internet. Yes-but: the water is on all day, '
            + 'but the pump is off between one and four.',
          'Included: insurance, one driver. Not included: the second driver, '
            + 'fuel, crossing the border. Yes-but: the spare wheel is there, but '
            + 'there is no jack and nobody checks.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '11.4.3R',
      bookRef: 'Unit 11 · 11.4 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ A few questions.</td><td>☐ Is… '
          + 'included?</td><td>☐ Is there…, or only…?</td><td>☐ All day, '
          + 'but…</td><td>☐ Is it safe?</td><td>☐ That\'s an honest '
          + 'answer.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the "yes, but" and whether a silence was left '
              + 'for it. The useful information nearly always comes after the '
              + 'answer, and only if nobody fills the gap. Typical errors: Is '
              + 'included the breakfast?; It has Wi-Fi? with no auxiliary; a '
              + 'vague yes accepted without the or',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – asking what is included.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '11.4.4',
      bookRef: 'Unit 11 · 11.4 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Interview three colleagues about something they pay for — a flat, a service, '
  + 'a subscription. Find one thing they thought was included and is not.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What they pay for</th><th>What is '
          + 'included</th><th>What they thought was '
          + 'included</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Grammar – asking what is included'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Interview three colleagues about something they pay for — a flat, a '
          + 'service, a subscription. Find one thing they thought was included '
          + 'and is not. (The dashes are blanks the learner fills in with their '
          + 'own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – asking what is included',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (11.4) teaches: Grammar – asking what is included. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – asking what is included.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'asking',
        'included',
        'question',
        'cannot',
        'given',
        'vague',
        'wi-fi',
        'room',
        'only']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – asking what is included.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '11.4.4R',
      bookRef: 'Unit 11 · 11.4 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: pays for . is included, but isn\'t — and he / she only found '
  + 'out when .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Grammar – asking what is included'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — pays for —. — is included, but — isn\'t — and he / '
          + 'she only found out when —. (The dashes are blanks the learner fills '
          + 'in with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'Grammar – asking what is included',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (11.4) teaches: '
          + 'Grammar – asking what is included. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – asking what is included.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'asking',
        'included',
        'question',
        'cannot',
        'given',
        'vague',
        'wi-fi',
        'room',
        'only'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – asking what is included.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '11.4.5',
      bookRef: 'Unit 11 · 11.4 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the page Nour keeps and updates after every trip, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>HOTELS WE USE — what is actually included</b> · kept by Nour, '
          + 'updated after every trip</p><p><b>Barron Street, Aleppo</b> — single '
          + '35,000. Breakfast ✓ (6.30–10). Wi-Fi ✓ in the room. Parking ✗ — '
          + '4,000 behind the building, but the key-holder is not there before '
          + 'six; park in the street under the camera instead. Hot water: better '
          + 'in the morning. <b>Invoice on paper at check-out if you ask.</b> '
          + 'Good for an early start.</p><p><b>Al-Waha, Homs</b> — single 28,000. '
          + 'Breakfast ✗ (7,000 extra; the café opposite is 3,000 and better). '
          + 'Wi-Fi ✓ lobby only. Parking ✓. Quiet. <b>They will not give a '
          + 'company invoice</b> — Bassel pays and claims. Remember to ask for a '
          + 'receipt <b>at the time</b>.</p><p><b>Sea View, Latakia</b> — single '
          + '45,000 (June–Sept 70,000). Breakfast ✓. Wi-Fi ✓. Parking ✓. <b>The '
          + 'sea side is noisy until two in summer</b> — ask for the '
          + 'back.</p><p><i>Add to this page after every trip, even when nothing '
          + 'went wrong. The things that are not included are learned once and '
          + 'forgotten by the next person.</i></p><h4>Writer\'s '
          + 'box</h4><p><b>Shape of a "what is actually included" page:</b> one '
          + 'block per place → price → each thing with <b>✓ or ✗</b> → the '
          + '<b>yes-but</b> in words → what to do about it → one line on what the '
          + 'place is good for.</p><p>Ticks and crosses are read in two seconds; '
          + 'sentences are not. Use them, and put the explanation <b>after</b> '
          + 'the cross, not instead of it.</p><p>Record <b>what to do</b>, not '
          + 'only what is wrong: <i>park in the street under the camera '
          + 'instead</i>. A list of complaints is not a useful page.</p><p>⚠ '
          + 'Update it when <b>nothing</b> went wrong. The whole value of a page '
          + 'like this is that it is written by somebody who has just learned '
          + 'something, for somebody who has not — and the day it stops being '
          + 'updated it starts going out of date.</p>'
      },
      questions: [{
            q: 'Where should you park at the Barron Street hotel, and why?',
            minWords: 6,
            rows: 2,
            hint: 'A place - a room, a floor, a town. Your own workplace, not the '
              + 'book\'s. Say it out loud once before you write it - a sentence '
              + 'or two is enough.'
          },
      {
            q: 'What must Bassel remember to do at the Homs hotel?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with *Bassel* in it.'
          },
      {
            q: 'Why does the page ask to be updated even when nothing went wrong?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with *because* and it will come out whole. '
              + 'Look in the text above for the line with *updated* in it.'
          }],
      ideas: ['Grammar – asking what is included'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '11.4.6',
      bookRef: 'Unit 11 · 11.4 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a "what is actually included" page for places or services you know (25 '
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
        'included',
        'question',
        'cannot',
        'given',
        'vague',
        'wi-fi']
      },
      coach: {
        title: 'What to include',
        task: 'Write a "what is actually included" page for places or services you know (25 '
  + 'words or more). Use the frame.',
        criteria: [{ t: 'Shape of a "what is actually included" page: one block per place '
              + '→ price → each thing with ✓ or ✗ → the yes-but in words → what '
              + 'to do about it → one line on what the place is good for.' },
            { t: 'Ticks and crosses are read in two seconds; sentences are not. '
              + 'Use them, and put the explanation after the cross, not instead '
              + 'of it.' },
            { t: 'Record what to do, not only what is wrong: park in the street '
              + 'under the camera instead. A list of complaints is not a useful '
              + 'page.' },
            { t: '⚠ Update it when nothing went wrong. The whole value of a page '
              + 'like this is that it is written by somebody who has just learned '
              + 'something, for somebody who has not — and the day it stops being '
              + 'updated it starts going out of date.' }]
      },
      aiCheck: {
        task: 'Write a "what is actually included" page for places or services you '
          + 'know (25 words or more). Use the frame.',
        grammar: 'Grammar – asking what is included',
        must: ['Shape of a "what is actually included" page: one block per place → '
          + 'price → each thing with ✓ or ✗ → the yes-but in words → what to do '
          + 'about it → one line on what the place is good for.',
        'Ticks and crosses are read in two seconds; sentences are not. Use '
          + 'them, and put the explanation after the cross, not instead of it.',
        'Record what to do, not only what is wrong: park in the street under '
          + 'the camera instead. A list of complaints is not a useful page.',
        '⚠ Update it when nothing went wrong. The whole value of a page like '
          + 'this is that it is written by somebody who has just learned '
          + 'something, for somebody who has not — and the day it stops being '
          + 'updated it starts going out of date.'],
        vocab: ['grammar',
        'asking',
        'included',
        'question',
        'cannot',
        'given',
        'vague',
        'wi-fi',
        'room',
        'only']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '11.4.6P',
      bookRef: 'Unit 11 · 11.4 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Be somebody using it for the first time, tonight. Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>Ticks and crosses, not sentences, for the '
          + 'basics</td><td>&nbsp;</td></tr><tr><td>Every cross says what to do '
          + 'instead</td><td>&nbsp;</td></tr><tr><td>At least one "yes, '
          + 'but"</td><td>&nbsp;</td></tr><tr><td>A line on what each place is '
          + 'good for</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      ideas: ['Grammar – asking what is included'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Be somebody using it for the first time, tonight. Tick ✓ '
          + 'or cross ✗.',
        grammar: 'Grammar – asking what is included',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (11.4) '
          + 'teaches: Grammar – asking what is included. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        must: ['Shape of a "what is actually included" page: one block per place → '
          + 'price → each thing with ✓ or ✗ → the yes-but in words → what to do '
          + 'about it → one line on what the place is good for.',
        'Ticks and crosses are read in two seconds; sentences are not. Use '
          + 'them, and put the explanation after the cross, not instead of it.',
        'Record what to do, not only what is wrong: park in the street under '
          + 'the camera instead. A list of complaints is not a useful page.',
        '⚠ Update it when nothing went wrong. The whole value of a page like '
          + 'this is that it is written by somebody who has just learned '
          + 'something, for somebody who has not — and the day it stops being '
          + 'updated it starts going out of date.'],
        vocab: ['grammar',
        'asking',
        'included',
        'question',
        'cannot',
        'given',
        'vague',
        'wi-fi',
        'room',
        'only'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '11.4.6R',
      bookRef: 'Unit 11 · 11.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read one block. The class says which detail they would '
  + 'not have discovered for a year.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'The detail nobody would discover for a year is usually about '
              + 'timing: the 24 hours, the key-holder at six, the pump between '
              + 'one and four',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – asking what is included.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '11.4.7',
      bookRef: 'Unit 11 · 11.4 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about something you paid for where the price was not the price (35 '
  + 'words or more). Say what was not included, how you found out, and what you '
  + 'would ask now.',
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
        'included',
        'question',
        'cannot',
        'given',
        'vague',
        'wi-fi']
      },
      coach: {
        title: 'What to include',
        task: 'Write about something you paid for where the price was not the price (35 '
  + 'words or more). Say what was not included, how you found out, and what you '
  + 'would ask now.',
        criteria: [{ t: 'Shape of a "what is actually included" page: one block per place '
              + '→ price → each thing with ✓ or ✗ → the yes-but in words → what '
              + 'to do about it → one line on what the place is good for.' },
            { t: 'Ticks and crosses are read in two seconds; sentences are not. '
              + 'Use them, and put the explanation after the cross, not instead '
              + 'of it.' },
            { t: 'Record what to do, not only what is wrong: park in the street '
              + 'under the camera instead. A list of complaints is not a useful '
              + 'page.' },
            { t: '⚠ Update it when nothing went wrong. The whole value of a page '
              + 'like this is that it is written by somebody who has just learned '
              + 'something, for somebody who has not — and the day it stops being '
              + 'updated it starts going out of date.' }]
      },
      aiCheck: {
        task: 'Write about something you paid for where the price was not the price '
          + '(35 words or more). Say what was not included, how you found out, '
          + 'and what you would ask now.',
        grammar: 'Grammar – asking what is included',
        must: ['Shape of a "what is actually included" page: one block per place → '
          + 'price → each thing with ✓ or ✗ → the yes-but in words → what to do '
          + 'about it → one line on what the place is good for.',
        'Ticks and crosses are read in two seconds; sentences are not. Use '
          + 'them, and put the explanation after the cross, not instead of it.',
        'Record what to do, not only what is wrong: park in the street under '
          + 'the camera instead. A list of complaints is not a useful page.',
        '⚠ Update it when nothing went wrong. The whole value of a page like '
          + 'this is that it is written by somebody who has just learned '
          + 'something, for somebody who has not — and the day it stops being '
          + 'updated it starts going out of date.'],
        vocab: ['grammar',
        'asking',
        'included',
        'question',
        'cannot',
        'given',
        'vague',
        'wi-fi',
        'room',
        'only']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '11.4.7P',
      bookRef: 'Unit 11 · 11.4 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ The same thing happened to me. '
  + '✓ What would you ask now? ? a question about it',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "what else will I pay before it works?" — I am writing that '
              + 'down. ✓ What would you ask now? ? Did they tell you about the '
              + 'tap, or did you find out?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ The same thing '
          + 'happened to me. — ✓ What would you ask now? —? a question about it '
          + '(The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – asking what is included',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (11.4) teaches: Grammar – asking what is included. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – asking what is included.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'asking',
        'included',
        'question',
        'cannot',
        'given',
        'vague',
        'wi-fi',
        'room',
        'only'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – asking what is included.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'own',
      ref: '11.4.7R',
      bookRef: 'Unit 11 · 11.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Collect the questions on the board. Build the class\'s own "ask before you '
  + 'pay" list, and copy it.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then take one real bill or contract you '
          + 'have at home and write down everything that is <b>not</b> included '
          + 'in it (20+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Grammar – asking what is included'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – asking what is included.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
