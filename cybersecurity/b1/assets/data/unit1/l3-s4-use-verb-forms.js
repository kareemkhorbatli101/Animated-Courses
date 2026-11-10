CSB1.page('u1-l3-s4', {
  book: { page: 10, section: 4, lesson: 'Lesson 3 · Grammar', title: 'Use present and past verb forms' },
  objective: 'Use present and past tense to describe study habits and learning',
  prev: 'l3-s3-listen-for-tenses', prevLabel: 'Listen for the tenses',
  next: 'l4-s1-career-talk', nextLabel: 'Lesson 4 · Career talk',
  cards: [
    {
      id: 'c4', ref: '4', bookRef: 'p.10 · 4', type: 'hotspot',
      title: 'The Cyber Lab — now and at 10:30',
      instruction: 'Click a person to see what they are doing. Press <b>Rewind to 10:30</b> to see what they <b>were</b> doing. Then build four questions for the technician: <b>her answer comes straight after each gap</b>, so it tells you who she is talking about and when.',
      scene: 'lab-people',
      pastTime: '10:30',
      need: 4,
      record: true,
      /* the four tenses, on the card, instead of "see 1B of §1" */
      source: {
        label: 'The four tenses, in one line each',
        html: '<p><b>Simple present</b> — a habit or a fact: <i>The lab closes on Sunday.</i><br>' +
          '<b>Present continuous</b> — happening now: <i>Sima is reading the lab manual.</i><br>' +
          '<b>Simple past</b> — finished, at a named time: <i>The lab opened at eight.</i><br>' +
          '<b>Past continuous</b> — in progress earlier: <i>Tim was unpacking a box at half past ten.</i></p>'
      },
      tenses: ['present', 'pres-cont', 'past', 'past-cont'],
      people: [
        { name: 'Maria', at: [11, 38], now: 'Maria is sneezing. She has a cold.', past: 'Maria was looking for a tissue.' },
        { name: 'James', at: [26.8, 38], now: 'James is resting his head on the bench. He is tired.', past: 'James was reading a log file.' },
        { name: 'Tim', at: [42.8, 37], now: 'Tim is putting equipment away on the rack.', past: 'Tim was unpacking a box of hardware keys.' },
        { name: 'Sima', at: [58.5, 38], now: 'Sima is reading the lab manual.', past: 'Sima was writing in her notebook.' },
        { name: 'Andrew', at: [80.2, 38], now: 'Andrew is daydreaming about skateboarding. His foot is in a cast.', past: 'Andrew was waiting to see the nurse.' }
      ],
      frame: 'A: [[1]] [[2]] [[3]]?<br>B: [[4]].',
      convoLead: 'You have walked into the lab with the technician. Her answer follows each gap: she says what the person was doing, so the picture tells you which person it is.',
      cast: {
        tech: { name: 'Technician', voice: 'f', pitch: 1.07 },
        you: { name: 'You', voice: 'm', pitch: 0.94 }
      },
      poolLabel: 'Three lists, three gaps, in that order: the question word, then the person or place, then the verb.',
      turns: [
        { who: 'tech', say: 'Here we are. Five people in today — ask me about any of them.' },
        { who: 'you', frame: '[[1]] [[2]] [[3]]?' },
        { who: 'tech', say: 'She is reading the lab manual. She has been on that chapter all morning.' },
        { who: 'you', frame: 'I see. And at half past ten — [[4]] [[5]] [[6]]?' },
        { who: 'tech', say: 'He was unpacking a box of hardware keys. It took him nearly an hour.' },
        { who: 'you', frame: 'Right. Now about the lab itself: [[7]] [[8]] [[9]]?' },
        { who: 'tech', say: 'It closes on Sunday, every week. Every other day it is open.' },
        { who: 'you', frame: 'Good to know. Last one — [[10]] [[11]] [[12]]?' },
        { who: 'tech', say: 'It opened at eight this morning, same as always. Right — come and meet them.' }
      ],
      answers: {
        '1': 'What is', '2': 'Sima', '3': 'doing',
        '4': 'What was', '5': 'Tim', '6': 'doing at 10:30',
        '7': 'When does', '8': 'the lab', '9': 'close',
        '10': 'When did', '11': 'the lab', '12': 'open'
      },
      gapBank: {
        '1': 0, '2': 1, '3': 2, '4': 0, '5': 1, '6': 2,
        '7': 0, '8': 1, '9': 2, '10': 0, '11': 1, '12': 2
      },
      clue: {
        '1': 'She is reading the lab manual', '2': 'She is reading the lab manual', '3': 'She is reading the lab manual',
        '4': 'He was unpacking a box of hardware keys', '5': 'He was unpacking a box of hardware keys', '6': 'at half past ten — He was unpacking…',
        '7': 'It closes on Sunday, every week', '8': 'It closes on Sunday, every week', '9': 'It closes on Sunday, every week',
        '10': 'It opened at eight this morning', '11': 'It opened at eight this morning', '12': 'It opened at eight this morning'
      },
      whyTitle: 'Her answer, and the question that produced it',
      why: {
        '1': '"She is reading" is present continuous, so the question opens What is.',
        '2': 'Rewind the picture and only one woman is reading the lab manual: Sima. Maria is sneezing, so "She" cannot be her.',
        '3': 'Plain "doing" — the question is about this moment, and her answer gives no other time.',
        '4': '"He was unpacking" is past continuous, so What was.',
        '5': 'At half past ten, Tim was unpacking a box of hardware keys. James was reading a log file and Andrew was waiting for the nurse, so only Tim fits.',
        '6': 'Your own line already says "at half past ten", and the verb chip repeats it. That pairing is what makes it past continuous rather than simply past.',
        '7': '"It closes … every week" is a habit, so the simple present: When does. After does the verb drops back to "close".',
        '8': '"It" is the lab — the only thing in the lists that is not a person.',
        '9': 'She answers with the closing day, so the question asked about closing, not opening.',
        '10': '"It opened at eight this morning" is finished, at a named time, so When did.',
        '11': 'Again "It" — the lab. Same place, different tense, which is exactly the contrast this exercise is built on.',
        '12': 'After did, the base form: open, not opened. The auxiliary is already past.'
      },
      banks: [
        { label: 'Question word + auxiliary:', items: ['What is', 'What was', 'What does', 'What did', 'When does', 'When did'] },
        { label: 'Person or place:', items: ['Maria', 'James', 'Tim', 'Sima', 'Andrew', 'the lab'] },
        { label: 'Verb:', items: ['doing', 'doing at 10:30', 'do every day', 'do yesterday', 'open', 'close'] }
      ]
    },
    {
      id: 'cty', ref: 'TY', bookRef: 'p.10 · Test yourself', type: 'tensewrite',
      title: 'Test yourself',
      instruction: 'Close your book. A classmate is asking about your week. Answer each of her four questions with a statement about your own schedule — and between them use all four tenses. The checker tells you which tense it heard.',
      visual: {
        art: 'tense-timeline',
        caption: 'Four questions, four places on the timeline. Read each question and decide where on this line the answer belongs before you write it.'
      },
      lead: 'Your classmate has already asked. Write each answer so it actually answers her question.',
      cast: {
        them: { name: 'Olga', voice: 'f', pitch: 1.1 },
        me: { name: 'You', voice: 'm', pitch: 0.95 }
      },
      boxes: [
        { tense: 'past', label: 'Simple past', eg: 'I ate breakfast at 8:00 this morning.', lead: 'You look tired. Did you eat anything before class this morning?' },
        { tense: 'present', label: 'Simple present', eg: 'I wake up around 7:15 every day.', lead: 'Really? So what time do you normally get up?' },
        { tense: 'pres-cont', label: 'Present continuous', eg: 'We are learning English in class.', lead: 'That is early. And what are you working on in the course at the moment?' },
        { tense: 'past-cont', label: 'Past continuous', eg: 'I was studying at nine o\'clock last night.', lead: 'I tried to message you at nine last night. What were you doing?' }
      ],
      coach: {
        title: 'Check your four answers',
        ai: false,
        taught: 'The four tenses from §1: simple present for habits, present continuous for now, simple past for finished actions, past continuous for what was in progress.',
        criteria: [
          { t: 'Each answer actually answers the question above it.', auto: 'words', min: 16 },
          { t: 'At least four past-tense verbs across the four answers.', auto: 'past', need: 2 },
          { t: 'Every answer is about my real schedule, not a copy of the example.', self: true },
          { t: 'I read each of Olga\'s lines before I wrote my reply.', self: true }
        ]
      }
    }
  ]
});
