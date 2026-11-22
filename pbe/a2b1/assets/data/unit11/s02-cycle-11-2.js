/* Unit 11 · cycle 11.2 — A single room for two nights.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u11-s02', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 11 · 11.2', part: '11.2',
          section: '2', lesson: 'A single room for two nights', title: 'A single room for two nights' },
  objective: 'reserve a room, and say exactly what you need',
  study: {
    minutes: 90,
    objective: 'reserve a room, and say exactly what you need',
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
    task: 'Write the call to the hotel to book a room.',
    weak: 'A room please.',
    change: ['Say single or double, and for how many nights.',
        'Give the name and spell it, because the desk will write it down.'],
    better: 'I\'d like to reserve a single room for two nights, Tuesday and '
      + 'Wednesday. In the name of Mansour - M, A, N, S, O, U, R.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '11.2.1',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'What do you have to say to reserve a room? Write six things.',
            model: 'receipt · an extra bed',
            minWords: 1,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Your own '
              + 'workplace, not the book\'s. Say it out loud once before you '
              + 'write it - a sentence or two is enough.'
          },
      {
            q: 'a or an? single room · hour · early check-in · receipt · extra bed',
            minWords: 6,
            rows: 2,
            hint: 'One answer for each item, and every item gets one. Do the ones '
              + 'you are sure of first - what is left over pairs up.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '11.2.2',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u11-11-2',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – reserving a room</b></p><table '
          + 'class=\'bk\'><tr><th>Step</th><th>What you say</th></tr><tr><td>The '
          + 'ask</td><td>I\'d like to <b>reserve a single room for two '
          + 'nights</b>, please.</td></tr><tr><td>Which nights</td><td><b>Sunday '
          + 'the 21st and Monday the 22nd</b> — not "two nights from '
          + 'Sunday".</td></tr><tr><td>The name</td><td><b>In the name of</b> '
          + 'Bassel Nassif. N-A-S-S-I-F.</td></tr><tr><td>Who is '
          + 'paying</td><td>It\'s a <b>company reservation</b> — Sham '
          + 'Trading.</td></tr><tr><td>What is included</td><td><b>Is breakfast '
          + 'included?</b> Is there Wi-Fi?</td></tr><tr><td>The two '
          + 'extras</td><td>Can you <b>hold the room until</b> eight? A '
          + '<b>quiet</b> room, if you have one.</td></tr><tr><td>The '
          + 'record</td><td>Could you <b>send me that by '
          + 'message</b>?</td></tr></table><p>⚠ Name the <b>dates</b>, not the '
          + 'number of nights alone. "Two nights from Sunday" is read differently '
          + 'by different people, and the argument happens at midnight.</p><p>⚠ '
          + '<b>a</b> before a consonant <b>sound</b>, <b>an</b> before a vowel '
          + '<b>sound</b>: <i>a single room</i> · <i>an hour</i> · <i>an early '
          + 'check-in</i> · <i>a receipt</i>.</p><p>⚠ Ask for the confirmation '
          + '<b>in writing</b>. A reservation that exists only in a telephone '
          + 'call exists only for one of the two people.</p><p><b>Practise:</b> '
          + 'Reserve each one in three sentences.</p><p>1 a double room, three '
          + 'nights, 14–16 June 2 a single, one night, tonight, late arrival 3 '
          + 'two singles, same floor, Thursday 4 a room with an extra bed for a '
          + 'child 5 a quiet room, a week, company reservation</p><p><b>Useful '
          + 'phrases:</b> I\'d like to reserve… · In which name? · Is breakfast '
          + 'included? · Can you hold the room until…? · if you have one · Could '
          + 'you send me that by message?</p><p><b>Pronunciation – confirming a '
          + 'reservation.</b> 🔊 <b>Track 11.4</b> Listen. The confirmation is '
          + 'said as <b>one long list with small stops</b>, falling only at the '
          + 'end: <i>Bassel Nassif ‖ two nights ‖ the twenty-first and '
          + 'twenty-second ‖ single ‖ breakfast included ‖ held until '
          + 'eight.</i></p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Nour ask for that the hotel does '
              + 'not offer at first?',
            options: [{
              t: 'breakfast',
              ok: false,
              why: 'She asks about it, and the hotel says it is included - so it '
                + 'was already there.'
            },
            {
              t: 'a quiet room',
              ok: true,
              why: 'She asks for one away from the street because he has an early '
                + 'start, and is offered the fourth floor at the back.'
            },
            {
              t: 'a receipt',
              ok: false,
              why: 'Receipts belong to the expenses briefing in another cycle.'
            }],
            evidence: 'Nour\'s last two requests - one is agreed at once and one is '
              + 'asked for with \'if you have one\''
          },
        {
            q: 'Books closed. Listen. Until when will the hotel hold the room?',
            options: [{
              t: 'until eight in the evening',
              ok: true,
              why: 'And Nour asks for it to be written on the reservation, because '
                + 'a promise nobody recorded is not a promise.'
            },
            {
              t: 'until midday',
              ok: false,
              why: 'Midday is when Bassel expects to ARRIVE - which is exactly why '
                + 'she asks about being late.'
            },
            {
              t: 'until ten',
              ok: false,
              why: 'Six thirty to ten is breakfast, in the next cycle.'
            }],
            evidence: 'the desk\'s answer to Nour\'s first request'
          },
        {
            q: 'Why does Nour ask for a room at the back?',
            options: [{
              t: 'because he has an early start on Tuesday',
              ok: true,
              why: 'She gives the reason with the request, which is what gets her '
                + 'the fourth floor at the back.'
            },
            {
              t: 'because the front is more expensive',
              ok: false,
              why: 'One price is quoted, thirty-five thousand, and no other.'
            },
            {
              t: 'because he arrives at midday',
              ok: false,
              why: 'That is the reason for holding the room, not for the quiet side.'
            }],
            evidence: 'her second request'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'own',
      ref: '11.2.2',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Reserve each one in three sentences.',
      questions: [{
            q: '1 a double room, three nights, 14–16 June',
            minWords: 6,
            rows: 2
          },
      {
            q: '2 a single, one night, tonight, late arrival',
            minWords: 6,
            rows: 2
          },
      {
            q: '3 two singles, same floor, Thursday',
            minWords: 6,
            rows: 2
          },
      {
            q: '4 a room with an extra bed for a child',
            minWords: 6,
            rows: 2
          },
      {
            q: '5 a quiet room, a week, company reservation',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '11.2.2',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many nights, and which?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>nights</i> in '
              + 'it. Play it again with the subtitles on.'
          },
      {
            q: 'What two things does Nour ask at the end?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with <i>Nour</i> in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '11.2.3',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs, back to back. A reserves; B offers the basic room and must be '
  + 'asked for the extras. Then swap.',
      scene: 'u11-11-2-pair',
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
        head: ['Role card 1 — a small hotel in Latakia',
        'Role card 2 — a guest house in Homs'],
        rows: [['Singles 40,000, doubles 55,000. Breakfast 8,000 extra (not '
            + 'included). Wi-Fi only in the lobby. Will hold a room until 18.00 '
            + 'if asked. Sea side is noisy at night in summer.',
          'One price, 30,000, everything included. No single rooms — only '
            + 'doubles, used as singles. Hot water 6–9 am and 6–10 pm only. Will '
            + 'send a message if asked twice.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '11.2.3R',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs make their call for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ I\'d like to reserve…</td><td>☐ In '
          + 'which name?</td><td>☐ Is breakfast included?</td><td>☐ Can you hold '
          + 'it until…?</td><td>☐ if you have one</td><td>☐ send me that by '
          + 'message</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write what was not included and whether the caller was '
              + 'told or had to ask. In both role cards the hotel tells only when '
              + 'asked, which is realistic. Typical errors: a hour; I want a '
              + 'room; naming "two nights from Thursday" instead of the dates',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – reserving a room.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '11.2.4',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Reserve three things with three colleagues (back to back) — a room, a table, '
  + 'a repair appointment. Each time ask two extras and ask for it in writing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What</th><th>Dates / times</th><th>The '
          + 'two extras I asked for</th><th>In '
          + 'writing?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Grammar – reserving a room',
      'Dear colleagues,',
      'Nour Mansour, extension 212'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Reserve three things with three colleagues (back to back) — a room, '
          + 'a table, a repair appointment. Each time ask two extras and ask for '
          + 'it in writing. (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – reserving a room',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (11.2) teaches: Grammar – reserving a room. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – reserving a room.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'reserving',
        'room',
        'name',
        'dates',
        'number',
        'nights',
        'alone',
        'sunday',
        'differently']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – reserving a room.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '11.2.4R',
      bookRef: 'Unit 11 · 11.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I reserved for . I asked for and . They send it in writing.',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Grammar – reserving a room',
      'Dear colleagues,',
      'Nour Mansour, extension 212'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — I reserved — for —. I asked for — and —. They — '
          + 'send it in writing. (The dashes are blanks the learner fills in with '
          + 'their own workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – reserving a room',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (11.2) teaches: '
          + 'Grammar – reserving a room. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – reserving a room.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'reserving',
        'room',
        'name',
        'dates',
        'number',
        'nights',
        'alone',
        'sunday',
        'differently'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – reserving a room.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '11.2.5',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the confirmation email Nour sends to the hotel, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>To:</b> Hotel Barron Street <b>From:</b> Nour Mansour, Sham '
          + 'Trading <b>Subject:</b> Reservation — Nassif, 21–22 May (2 nights), '
          + 'confirmation</p><p>Dear colleagues,</p><p>Thank you for the room. In '
          + 'writing, so that we both have the same page:</p><p><b>Guest:</b> '
          + 'Bassel Nassif (N-A-S-S-I-F) <b>Company:</b> Sham Trading Co., '
          + 'Damascus</p><p><b>Nights:</b> Sunday 21 and Monday 22 May — <b>two '
          + 'nights</b>, checking out Tuesday 23 in the '
          + 'morning.</p><p><b>Room:</b> single, 35,000 SYP a night. Breakfast '
          + 'and Wi-Fi included. Fourth floor, back of the building (quiet '
          + 'side).</p><p><b>Arrival:</b> about midday. Please <b>hold the room '
          + 'until 20.00</b> if he is delayed on the road.</p><p><b>Payment:</b> '
          + 'the company pays. Please make the invoice to Sham Trading Co. and '
          + 'give it to Mr Nassif on paper at check-out — we need it for our '
          + 'accounts.</p><p>If anything here is different from your record, '
          + 'please tell me this week rather than on the day.</p><p>Nour Mansour, '
          + 'extension 212</p><h4>Writer\'s box</h4><p><b>Shape of a reservation '
          + 'confirmation:</b> a subject line with the <b>name, dates and '
          + 'nights</b> → <i>in writing, so that we both have the same page</i> → '
          + 'guest and company → <b>nights, spelled out as dates</b> → room and '
          + 'price, with what is <b>included</b> → arrival and how long it is '
          + 'held → <b>who pays and how the invoice is to be given</b> → an '
          + 'invitation to correct it, with a date.</p><p>Write the number of '
          + 'nights <b>and</b> the check-out day. Most hotel arguments are one of '
          + 'the two parties counting nights and the other counting '
          + 'days.</p><p>Say <b>how you want the invoice</b>: paper or email, to '
          + 'whom, and when. An expense claim without the right paper is a month '
          + 'of messages.</p><p>⚠ <i>Tell me this week rather than on the '
          + 'day.</i> A reservation that is wrong is cheap to fix on Tuesday and '
          + 'expensive to fix at eleven at night in another city.</p>'
      },
      questions: [{
            q: 'What two things are included in the price?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>included</i> in it.'
          },
      {
            q: 'Why does Nour want the invoice on paper at check-out?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with <i>because</i> and it will come out '
              + 'whole. Look in the text above for the line with <i>Nour</i> in '
              + 'it.'
          },
      {
            q: 'What does she ask the hotel to do if their record is different?',
            minWords: 6,
            rows: 2,
            hint: 'A job, in two or three words. Look in the text above for the '
              + 'line with <i>different</i> in it.'
          }],
      ideas: ['Dear colleagues,',
      'Nour Mansour, extension 212',
      'Grammar – reserving a room'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '11.2.6',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a reservation confirmation, real or invented (25 words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'reserving',
        'room',
        'name',
        'dates',
        'number',
        'nights',
        'alone']
      },
      coach: {
        title: 'What to include',
        task: 'Write a reservation confirmation, real or invented (25 words or more). Use the frame.',
        criteria: [{ t: 'Shape of a reservation confirmation: a subject line with the '
              + 'name, dates and nights → in writing, so that we both have the '
              + 'same page → guest and company → nights, spelled out as dates → '
              + 'room and price, with what is included → arrival and how long it '
              + 'is held → who pays and how the invoice is to be given → an '
              + 'invitation to correct it, with a date.' },
            { t: 'Write the number of nights and the check-out day. Most hotel '
              + 'arguments are one of the two parties counting nights and the '
              + 'other counting days.' },
            { t: 'Say how you want the invoice: paper or email, to whom, and when. '
              + 'An expense claim without the right paper is a month of messages.' },
            { t: '⚠ Tell me this week rather than on the day. A reservation that '
              + 'is wrong is cheap to fix on Tuesday and expensive to fix at '
              + 'eleven at night in another city.' }]
      },
      aiCheck: {
        task: 'Write a reservation confirmation, real or invented (25 words or '
          + 'more). Use the frame.',
        grammar: 'Grammar – reserving a room',
        must: ['Shape of a reservation confirmation: a subject line with the name, '
          + 'dates and nights → in writing, so that we both have the same page → '
          + 'guest and company → nights, spelled out as dates → room and price, '
          + 'with what is included → arrival and how long it is held → who pays '
          + 'and how the invoice is to be given → an invitation to correct it, '
          + 'with a date.',
        'Write the number of nights and the check-out day. Most hotel '
          + 'arguments are one of the two parties counting nights and the other '
          + 'counting days.',
        'Say how you want the invoice: paper or email, to whom, and when. An '
          + 'expense claim without the right paper is a month of messages.',
        '⚠ Tell me this week rather than on the day. A reservation that is '
          + 'wrong is cheap to fix on Tuesday and expensive to fix at eleven at '
          + 'night in another city.'],
        vocab: ['grammar',
        'reserving',
        'room',
        'name',
        'dates',
        'number',
        'nights',
        'alone',
        'sunday',
        'differently']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '11.2.6P',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Be the hotel, with fifty reservations. Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>Dates <b>and</b> number of nights <b>and</b> '
          + 'check-out day</td><td>&nbsp;</td></tr><tr><td>What is included, '
          + 'named</td><td>&nbsp;</td></tr><tr><td>Who pays, and how the invoice '
          + 'is given</td><td>&nbsp;</td></tr><tr><td>A deadline for '
          + 'corrections</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      ideas: ['Grammar – reserving a room',
      'Dear colleagues,',
      'Nour Mansour, extension 212'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Be the hotel, with fifty reservations. Tick ✓ or cross ✗.',
        grammar: 'Grammar – reserving a room',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (11.2) '
          + 'teaches: Grammar – reserving a room. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        must: ['Shape of a reservation confirmation: a subject line with the name, '
          + 'dates and nights → in writing, so that we both have the same page → '
          + 'guest and company → nights, spelled out as dates → room and price, '
          + 'with what is included → arrival and how long it is held → who pays '
          + 'and how the invoice is to be given → an invitation to correct it, '
          + 'with a date.',
        'Write the number of nights and the check-out day. Most hotel '
          + 'arguments are one of the two parties counting nights and the other '
          + 'counting days.',
        'Say how you want the invoice: paper or email, to whom, and when. An '
          + 'expense claim without the right paper is a month of messages.',
        '⚠ Tell me this week rather than on the day. A reservation that is '
          + 'wrong is cheap to fix on Tuesday and expensive to fix at eleven at '
          + 'night in another city.'],
        vocab: ['grammar',
        'reserving',
        'room',
        'name',
        'dates',
        'number',
        'nights',
        'alone',
        'sunday',
        'differently'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '11.2.6R',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their subject lines. The class says which could '
  + 'be filed without opening.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'A subject line that can be filed without opening carries the '
              + 'name, the dates and the word "confirmation". Anything beginning '
              + 'Re: cannot',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – reserving a room.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '11.2.7',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a place you have stayed — good or bad (35 words or more). Say '
  + 'what was included, what was not, and what you would ask before reserving it '
  + 'again.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'reserving',
        'room',
        'name',
        'dates',
        'number',
        'nights',
        'alone']
      },
      coach: {
        title: 'What to include',
        task: 'Write about a place you have stayed — good or bad (35 words or more). Say '
  + 'what was included, what was not, and what you would ask before reserving it '
  + 'again.',
        criteria: [{ t: 'Shape of a reservation confirmation: a subject line with the '
              + 'name, dates and nights → in writing, so that we both have the '
              + 'same page → guest and company → nights, spelled out as dates → '
              + 'room and price, with what is included → arrival and how long it '
              + 'is held → who pays and how the invoice is to be given → an '
              + 'invitation to correct it, with a date.' },
            { t: 'Write the number of nights and the check-out day. Most hotel '
              + 'arguments are one of the two parties counting nights and the '
              + 'other counting days.' },
            { t: 'Say how you want the invoice: paper or email, to whom, and when. '
              + 'An expense claim without the right paper is a month of messages.' },
            { t: '⚠ Tell me this week rather than on the day. A reservation that '
              + 'is wrong is cheap to fix on Tuesday and expensive to fix at '
              + 'eleven at night in another city.' }]
      },
      aiCheck: {
        task: 'Write about a place you have stayed — good or bad (35 words or '
          + 'more). Say what was included, what was not, and what you would ask '
          + 'before reserving it again.',
        grammar: 'Grammar – reserving a room',
        must: ['Shape of a reservation confirmation: a subject line with the name, '
          + 'dates and nights → in writing, so that we both have the same page → '
          + 'guest and company → nights, spelled out as dates → room and price, '
          + 'with what is included → arrival and how long it is held → who pays '
          + 'and how the invoice is to be given → an invitation to correct it, '
          + 'with a date.',
        'Write the number of nights and the check-out day. Most hotel '
          + 'arguments are one of the two parties counting nights and the other '
          + 'counting days.',
        'Say how you want the invoice: paper or email, to whom, and when. An '
          + 'expense claim without the right paper is a month of messages.',
        '⚠ Tell me this week rather than on the day. A reservation that is '
          + 'wrong is cheap to fix on Tuesday and expensive to fix at eleven at '
          + 'night in another city.'],
        vocab: ['grammar',
        'reserving',
        'room',
        'name',
        'dates',
        'number',
        'nights',
        'alone',
        'sunday',
        'differently']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '11.2.7P',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ I would / wouldn\'t stay '
  + 'there. ✓ What would you ask next time? ? a question about it',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "to them it was obvious" — that is what is never written down. '
              + '✓ What would you ask next time? ? Would you go back?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ I would / wouldn\'t '
          + 'stay there. — ✓ What would you ask next time? —? a question about it '
          + '(The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar – reserving a room',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (11.2) teaches: Grammar – reserving a room. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – reserving a room.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'reserving',
        'room',
        'name',
        'dates',
        'number',
        'nights',
        'alone',
        'sunday',
        'differently'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – reserving a room.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'own',
      ref: '11.2.7R',
      bookRef: 'Unit 11 · 11.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Collect on the board the questions people would ask next time. Which of them '
  + 'would you never have thought of before you needed it?',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then write the five questions you will ask '
          + 'the next time you reserve anything — a room, a car, a hall, a table '
          + '(20+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Grammar – reserving a room',
      'Dear colleagues,',
      'Nour Mansour, extension 212'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – reserving a room.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
