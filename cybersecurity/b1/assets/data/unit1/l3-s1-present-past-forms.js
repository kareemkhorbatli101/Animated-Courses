CSB1.page('u1-l3-s1', {
  book: { page: 8, section: 1, lesson: 'Lesson 3 · Grammar', title: 'Review present and past verb forms' },
  objective: 'Use present and past tense to describe study habits and learning',
  prev: 'l2-s3-feedback-revise', prevLabel: 'Feedback and revise',
  next: 'l3-s2-yesno-questions', nextLabel: 'Yes / no questions',
  cards: [
    {
      id: 'c1a', ref: '1A', bookRef: 'p.8 · 1A', type: 'scene',
      title: 'Read the paragraph and the shift notebook',
      instruction: 'Read the paragraph and the notebook page — or press play and hear it read, with a cue card on each verb form. Then answer the questions below.',
      scene: 'u1-notebook',
      passage: {
        style: 'memo',
        speak: false,
        paras: [
          'I write my tasks in a notebook every day so I don\'t forget what to do. In my security class we learn five new terms every day, and I always write them down and memorize them. On Monday night, I wrote my incident report while I was eating dinner. On Tuesday night, I answered the questions for my networking class. Today is Wednesday, and I am at the lab memorizing this week\'s new terms and preparing for tomorrow\'s class.'
        ],
        html: '<div style="margin-top:14px;border-top:2px solid var(--border);padding-top:12px;font-family:var(--mono);font-size:13.5px;line-height:2">' +
          '<b>SHIFT NOTEBOOK</b><br>' +
          'Date: Mon 9/26 &nbsp; Class: Security<br>' +
          '&nbsp;&nbsp;1. Learn 5 new terms<br>' +
          '&nbsp;&nbsp;2. Write incident report — due Wed<br>' +
          '&nbsp;&nbsp;3. ______________<br>' +
          'Date: Tue 9/27 &nbsp; Class: Networking<br>' +
          '&nbsp;&nbsp;Chapter 2: questions p. 24 — due Thurs<br>' +
          'Date: Wed 9/28 &nbsp; Class: Security<br>' +
          '&nbsp;&nbsp;Learn 5 terms</div>'
      },
      quiz: {
        type: 'quizset',
        items: [
          {
            q: 'When does the student write his tasks in a notebook?',
            evidence: 'the first sentence.',
            jump: { sel: '.reading.memo' },
            display: 'drop',
            options: [
              { t: 'Every day', ok: true, why: 'Right — and "every day" is the signal for the simple present.' },
              { t: 'On Monday night', ok: false, why: 'That is when he wrote the incident report. Different sentence, different tense.' },
              { t: 'Only today', ok: false, why: '"Today" is in the last sentence, about memorizing. The notebook is a daily habit.' },
              { t: 'On Tuesday night', ok: false, why: 'Tuesday night was the networking questions.' }
            ]
          },
          {
            q: 'When did the student write his incident report?',
            evidence: 'look for "On Monday night".',
            jump: { sel: '.reading.memo' },
            display: 'drop',
            options: [
              { t: 'On Monday night', ok: true, why: 'Right — a finished action at a named past time, so the simple past: "I wrote".' },
              { t: 'On Tuesday night', ok: false, why: 'Tuesday night he answered the networking questions. Read the two sentences side by side.' },
              { t: 'Every night', ok: false, why: 'Nothing in the paragraph makes the report a habit. It happened once.' },
              { t: 'He has not written it yet', ok: false, why: 'The notebook says it was due Wednesday, but the paragraph says he wrote it on Monday night.' }
            ]
          },
          {
            q: 'What is the student doing at the same time as writing in his notebook today?',
            evidence: 'the last sentence — "Today is Wednesday, and I am…".',
            jump: { sel: '.reading.memo' },
            options: [
              { t: 'He is memorizing this week\'s new terms and preparing for tomorrow\'s class.', ok: true, why: 'Right — two present-continuous verbs, because both are going on right now.' },
              { t: 'He is writing his incident report.', ok: false, why: 'He wrote the report on Monday night. That one is finished, so it is the simple past.' },
              { t: 'He memorizes five new terms every day.', ok: false, why: 'True as a habit, but the question asks what is happening *today*, which needs the present continuous.' },
              { t: 'He was eating dinner.', ok: false, why: 'That was Monday night — past continuous, not today.' }
            ]
          },
          {
            q: 'What was the student doing on Monday night while he wrote his incident report?',
            evidence: 'look for "while I was…".',
            jump: { sel: '.reading.memo' },
            display: 'drop',
            options: [
              { t: 'He was eating dinner', ok: true, why: 'Right — the long action in the background, so past continuous, while "wrote" is the short one.' },
              { t: 'He was studying for networking', ok: false, why: 'The networking questions were Tuesday, and he was not doing them while writing the report.' },
              { t: 'He was memorizing terms', ok: false, why: 'That is today, in the present continuous.' },
              { t: 'He was taking a break', ok: false, why: 'A break is in the vocabulary list from Lesson 1, not in this paragraph.' }
            ]
          }
        ]
      }
    },
    {
      id: 'c1b', ref: '1B', bookRef: 'p.8 · 1B', type: 'chipcols',
      title: 'Build the charts — then tag the verbs',
      instruction: 'The timeline below holds all four tenses at once. <b>Press each tense to see when it happens</b> — then work out its form from the examples in 1A, check the rule, and the finished charts open underneath. Finally, drag one verb phrase from 1A into each column.',
      seeAlso: { card: 'c1a', label: 'Back to the paragraph', evidence: 'every phrase below is in the first paragraph of 1A.' },
      visual: [
        {
          live: 'tense-timeline',
          caption: 'The shapes carry the rule: a <b>simple</b> tense is a point, a <b>continuous</b> tense is a bar. Press a tense to see where it sits in time, and what the person is doing at that moment.'
        },
        {
          live: 'two-actions',
          caption: 'The pair that trips everyone up. Press play and watch what the long action does <b>after</b> the short one cuts across it.'
        }
      ],
      ruleGate: {
        title: 'Work out the four forms before you see the charts',
        lead: 'Every answer is visible in the paragraph in 1A. Read it again and complete the four forms.',
        text: 'The <b>simple present</b> uses the base verb: <i>I [[1]] new terms every day.</i><br>' +
          'The <b>present continuous</b> uses <i>am / is / are</i> + <b>-ing</b>: <i>I [[2]] new terms now.</i><br>' +
          'The <b>simple past</b> uses the past form: <i>I [[3]] the questions yesterday.</i><br>' +
          'The <b>past continuous</b> uses <i>was / were</i> + <b>-ing</b>: <i>I [[4]] dinner at eight.</i>',
        banks: {
          '1': ['learn', 'am learning', 'learned', 'was learning'],
          '2': ['learn', 'am learning', 'learned', 'was learning'],
          '3': ['answer', 'am answering', 'answered', 'was answering'],
          '4': ['eat', 'am eating', 'ate', 'was eating']
        },
        answers: { '1': 'learn', '2': 'am learning', '3': 'answered', '4': 'was eating' },
        after: 'The full charts are below. Notice that only the continuous forms need a helper verb.'
      },
      tables: [
        { title: 'Simple present', head: ['', 'Form', 'Example'], grammar: true, rows: [['I', 'learn / don\'t learn', 'new terms every day.'], ['He', 'learns / doesn\'t learn', 'new terms every day.']] },
        { title: 'Present continuous', head: ['', 'Form', 'Example'], grammar: true, rows: [['I', 'am / \'m not <b>learning</b>', 'new terms now.'], ['He', 'is / \'s not <b>learning</b>', 'new terms now.']] },
        { title: 'Simple past', head: ['', 'Form', 'Example'], grammar: true, rows: [['I', 'learned', 'new terms yesterday.'], ['He', 'didn\'t learn', 'new terms yesterday.']] },
        { title: 'Past continuous', head: ['', 'Form', 'Example'], grammar: true, rows: [['I', 'was <b>learning</b>', 'new terms yesterday at 1:00.'], ['He', 'wasn\'t <b>learning</b>', 'new terms yesterday at 1:00.']] }
      ],
      poolLabel: 'Drag each verb phrase from 1A into its column — or click it, then click a column.',
      cols: [
        { label: 'Simple present' },
        { label: 'Present continuous' },
        { label: 'Simple past' },
        { label: 'Past continuous' }
      ],
      pool: [
        'I write my tasks in a notebook',
        'we learn five new terms',
        'I always write them down',
        'I wrote my incident report',
        'I answered the questions',
        'I was eating dinner',
        'I am memorizing this week\'s new terms',
        'I am preparing for tomorrow\'s class'
      ],
      answers: {
        'I write my tasks in a notebook': 0,
        'we learn five new terms': 0,
        'I always write them down': 0,
        'I wrote my incident report': 2,
        'I answered the questions': 2,
        'I was eating dinner': 3,
        'I am memorizing this week\'s new terms': 1,
        'I am preparing for tomorrow\'s class': 1
      },
      whyTitle: 'The word in the sentence that fixes the tense',
      why: {
        'I write my tasks in a notebook':
          '"every day" follows it in the paragraph. A thing you do every day is a habit, and the base verb with no ending carries habits.',
        'we learn five new terms':
          'Also "every day". Note that the verb does not change for "we" — only he, she and it take the -s.',
        'I always write them down':
          '"always" is the signal. Frequency words — always, usually, never, often — put a sentence in the simple present whatever else is around it.',
        'I wrote my incident report':
          '"On Monday night" names a finished moment in the past, so the verb takes its past form. "Wrote" is irregular: there is no -ed to add.',
        'I answered the questions':
          '"On Tuesday night" — another finished moment. This one is regular, so it simply takes -ed.',
        'I was eating dinner':
          '"while" is the giveaway. The long action that the short one cut across takes was or were plus -ing.',
        'I am memorizing this week\'s new terms':
          '"Today is Wednesday, and I am…" — it is happening as he speaks, so am plus -ing.',
        'I am preparing for tomorrow\'s class':
          'Same sentence, same tense: two things going on right now, joined by "and". Preparing for tomorrow is still happening today.'
      }
    },
    {
      id: 'c1c', ref: '1C', bookRef: 'p.8 · 1C', type: 'choiceinline',
      title: 'Language connection',
      instruction: 'Complete the four sentences below — tap the correct tense name in each pair. Between them they are the definitions of the four tenses you have just built.',
      visual: {
        art: 'tense-timeline',
        caption: 'Use the timeline to decide each one: is the sentence talking about a habit, about now, about a finished point, or about a stretch of past time?'
      },
      whyTitle: 'The four tenses, in one sentence each',
      items: [
        {
          text: 'We can use the {{simple past|simple present}} to talk about events that happen regularly or to state facts.', answer: 1,
          why: 'Regularly means more than once, and the simple past happens once and is finished. "I write my tasks every day" is still true tomorrow; "I wrote my report" is not.'
        },
        {
          text: 'We use the {{simple past|present continuous}} to describe actions that are happening at the same time we are speaking.', answer: 1,
          why: 'Only a continuous form can be unfinished, and only a present one is happening now. Put the two together and you get am, is or are plus -ing.'
        },
        {
          text: 'The {{simple past|simple present}} is used to talk about actions that happened in the past.', answer: 0,
          why: 'The name says it: past. Watch the word "happened" in the sentence — it is itself a simple past, which is the clue.'
        },
        {
          text: 'To state what was happening at a specific time, we often use the {{simple past|past continuous}}.', answer: 1,
          why: '"Was happening" rather than "happened" — it was still going on at that moment. The simple past would close it: "at eight I ate" means I finished, "at eight I was eating" means I had not.'
        }
      ]
    },
    {
      id: 'c1d', ref: '1D', bookRef: 'p.9 · 1D', type: 'clockscrub',
      title: 'Ask questions about Danny\'s shift',
      instruction: 'Press <b>Play the day</b> and listen. Danny\'s team leader walks you through his Tuesday from eight o\'clock up to <b>now — two o\'clock</b> — and stops there, because that is as far as the day has gone. Then build the four questions below. <b>Her answer comes straight after each gap, so her answer tells you what the question must have been.</b> Between them the four questions use all four tenses.',
      visual: {
        art: 'answer-first',
        caption: 'Read down, not up. "At half past ten he was at home studying" can only be the answer to one of these four questions — and four of the twelve chips fit no question at all.'
      },
      title2: 'Danny\'s Tuesday, up to now',
      /* The day stops at two o'clock, and so does everything on this
         card. The schedule used to run to 7:00 the next morning, which
         put two rows on screen — dinner and sleep — that no question
         here can reach, and captioned them "later today": a future the
         lesson does not teach and the conversation never asks about.
         An exercise whose whole pivot is WHEN IS NOW must not also
         offer a slide into tomorrow. */
      now: '2:00 p.m.',
      nowIndex: 3,
      slots: [
        { time: '8:00 a.m.–10:00 a.m.', act: 'Attend the briefing' },
        { time: '10:30 a.m.–12:30 p.m.', act: 'Study at home' },
        { time: '12:30 p.m.–1:00 p.m.', act: 'Eat lunch, review notes' },
        { time: '1:00 p.m. – now', act: 'Shift at the SOC' }
      ],
      frame: 'A: [[1]] Danny [[2]]?<br>B: [[3]].',
      need: 4,
      tenses: ['present', 'pres-cont', 'past', 'past-cont'],
      convoLead: 'You are asking Danny\'s team leader about his Tuesday. Her answer follows each gap — read it, then build the question that produced it.',
      cast: {
        /* The team leader's four answers are written, so they can be
           recorded — and they have to be, because this card is where
           the learner LISTENS for the tense before answering. `say`
           casts her the same way a passage casts a reader. "You" has
           no `say` block and keeps the device voice: a learner's own
           sentence is new, so no recording of it can exist. */
        lead: { name: 'Team leader', voice: 'f', pitch: 1.04, say: { key: 'lead' } },
        you: { name: 'You', voice: 'm', pitch: 0.94 }
      },
      poolLabel: 'Click a phrase, then click the gap it belongs in — or drag it there. The first list fills the first gap of each question, the second list the second.',
      turns: [
        { who: 'lead', say: 'Danny is on shift until half past seven, so ask me anything you need for the handover.' },
        { who: 'you', frame: '[[1]] Danny [[2]]?' },
        { who: 'lead', say: 'Right at this moment he is at the SOC desk, an hour into the shift.' },
        { who: 'you', frame: 'Right. And [[3]] Danny [[4]]?' },
        { who: 'lead', say: 'Every Tuesday it is the same pattern: the briefing first thing, then study at home before his shift.' },
        { who: 'you', frame: 'That is useful. [[5]] Danny [[6]]?' },
        { who: 'lead', say: 'At half past ten he was at home studying. He had the room to himself.' },
        { who: 'you', frame: 'One last thing — [[7]] Danny [[8]]?' },
        { who: 'lead', say: 'He ate lunch at half past twelve and reviewed his notes at the same time. Thanks — that is the handover done.' }
      ],
      answers: {
        '1': 'What is', '2': 'doing now',
        '3': 'What does', '4': 'do every Tuesday',
        '5': 'What was', '6': 'doing at 10:30',
        '7': 'When did', '8': 'eat lunch'
      },
      gapBank: { '1': 0, '2': 1, '3': 0, '4': 1, '5': 0, '6': 1, '7': 0, '8': 1 },
      clue: {
        '1': 'Right at this moment he is at the SOC desk',
        '2': 'Right at this moment he is at the SOC desk',
        '3': 'Every Tuesday it is the same pattern',
        '4': 'Every Tuesday it is the same pattern',
        '5': 'At half past ten he was at home studying',
        '6': 'At half past ten he was at home studying',
        '7': 'He ate lunch at half past twelve',
        '8': 'He ate lunch at half past twelve'
      },
      whyTitle: 'Her answer, and the question it belongs to',
      why: {
        '1': '"Right at this moment he is…" — present continuous, so the question needs the matching auxiliary: What is.',
        '2': 'She describes him at the SOC desk now, not where he is in general, so the verb is "doing now". "Working" would need "What is Danny working?", which is not English.',
        '3': '"Every Tuesday it is the same pattern" is a habit, and a habit takes the simple present: What does.',
        '4': 'The repeated thing is what he does every Tuesday. Note the bare "do" after "does" — the auxiliary already carries the tense.',
        '5': '"he was … studying" is past continuous, so the question opens What was.',
        '6': 'She names half past ten, which is exactly the time in the chip. Careful with "studying at 11:00": check the schedule and it is perfectly true — at eleven he was still at home studying. But she did not say eleven, and the question has to match the answer she actually gave.',
        '7': 'She gives a time — half past twelve — so the question asked when. "When did" is the only past question-opener in the list.',
        '8': 'After "did" the verb goes back to its base form: eat, not ate. The auxiliary is already carrying the past.'
      },
      banks: [
        { label: 'Question word + auxiliary:', items: ['What is', 'What does', 'Where is', 'What was', 'When did', 'Where was'] },
        { label: 'Verb:', items: ['doing now', 'do every Tuesday', 'doing at 10:30', 'eat lunch', 'studying at 11:00', 'working'] }
      ]
    }
  ]
});
