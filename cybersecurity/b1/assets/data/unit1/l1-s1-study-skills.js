CSB1.page('u1-l1-s1', {
  book: { page: 4, section: 1, lesson: 'Lesson 1 · Vocabulary', title: 'Identify study skills for cyber training' },
  objective: 'Discuss study skills and U.S. cybersecurity career pathways',
  next: 'l1-s2-career-pathways', nextLabel: 'Career pathways',
  intro: 'Your cohort starts today. Before anyone touches a machine, you need a way to study — and the words to talk about it.',
  cards: [
    {
      id: 'c1a', ref: '1A', bookRef: 'p.4 · 1A', type: 'chipcols',
      title: 'Passive or active practice?',
      instruction: 'Here are twelve ways to learn and practise cybersecurity English. Sort each one into the right column: do you only <b>take English in</b>, or does it make you <b>produce</b> English? Two are already done. Press <b>Check answers</b> for your score and the reason behind every one.',
      visual: {
        art: 'active-passive',
        caption: 'Two weeks later you still have about a tenth of what you only read, and about nine tenths of what you said and did. That gap is the difference between the two columns below.'
      },
      /* the two columns are in the same order as the picture above,
         passive on the left and active on the right, so the arrow in
         the picture points the way the learner is meant to move */
      cols: [
        {
          label: 'Passive — you only take the English in',
          short: 'passive',
          seed: ['Watch a security briefing with subtitles']
        },
        {
          label: 'Active — you produce the English',
          short: 'active',
          seed: ['Explain a phishing email to a partner']
        }
      ],
      poolLabel: 'Click an activity, then click a column — or drag it there. Double-click one in a column to take it back out.',
      pool: [
        'Say the nine study skills out loud from memory',
        'Listen to a security podcast on the bus',
        'Write a short incident report every week',
        'Read one advisory a day',
        'Narrate a hands-on lab in English while you do it',
        'Re-read your own notes',
        'Teach a new term to a classmate',
        'Watch a video of someone else doing the lab',
        'Label everything in the lab in English',
        'Read the lab manual before class'
      ],
      answers: {
        'Listen to a security podcast on the bus': 0,
        'Read one advisory a day': 0,
        'Re-read your own notes': 0,
        'Watch a video of someone else doing the lab': 0,
        'Read the lab manual before class': 0,
        'Say the nine study skills out loud from memory': 1,
        'Write a short incident report every week': 1,
        'Narrate a hands-on lab in English while you do it': 1,
        'Teach a new term to a classmate': 1,
        'Label everything in the lab in English': 1
      },
      okMsg: 'All twelve in the right column.',
      whyTitle: 'Why each one is active or passive',
      why: {
        'Explain a phishing email to a partner':
          'Given as an example. You choose the words yourself and say them to another person, so you find out at once which words you are missing.',
        'Watch a security briefing with subtitles':
          'Given as an example. Useful input, and nothing more: the English arrives ready-made and you never have to build a sentence.',
        'Say the nine study skills out loud from memory':
          'Nothing is in front of you, so your own mouth has to produce the English. That is why saying it from memory sticks and re-reading it does not.',
        'Write a short incident report every week':
          'Writing is production. You pick the tense, the word order and the vocabulary yourself, and every choice is one you will have to make again at work.',
        'Narrate a hands-on lab in English while you do it':
          'You are building new sentences about what your hands are doing — the hardest kind of practice, and the one closest to the real job.',
        'Teach a new term to a classmate':
          'To explain a term you have to put it in your own words. If you cannot, you have recognised the term but not learned it.',
        'Label everything in the lab in English':
          'You have to come up with the English name for each thing before you can write the label. It is only a word at a time, but the word comes from you.',
        'Listen to a security podcast on the bus':
          'Good listening practice and a real use of dead time — but you take the English in and say nothing back.',
        'Read one advisory a day':
          'Reading grows the words you recognise. Recognising a word is not the same as being able to use it when you need it.',
        'Re-read your own notes':
          'It feels like studying because everything is familiar. Nothing is produced, so very little stays. Cover the page and say it instead.',
        'Watch a video of someone else doing the lab':
          'You are watching another person practise. Do the lab yourself and narrate it, and the same hour is worth several of these.',
        'Read the lab manual before class':
          'Reading first is a good habit, but it is still input. Turn it into output by closing the manual and saying the steps back.'
      }
    },
    {
      id: 'c1b', ref: '1B', bookRef: 'p.4 · 1B', type: 'dragmatch',
      title: 'Match the words with the pictures',
      instruction: 'Match the nine study-skill words with the nine pictures. Drag a word onto the picture it belongs to — or click the word, then click the picture. Number 1 is done for you.',
      poolLabel: 'Click a word, then click its picture — or drag it there. Double-click a picture to take the word off again.',
      cols: 3,
      /* Scattered on purpose, and scattered DIFFERENTLY from the tiles
         in 1C, which carry the same nine skills. Written in picture
         order these nine could be dragged straight down the column
         without looking at a single picture, which is the whole task.
         Fixed here in the data rather than shuffled at run time: the
         teacher key and the printout have to show what the learner
         sees, and a card that rearranges itself on every reload is a
         different exercise every time. */
      chips: [
        { id: 'w-online', label: 'search online' },
        { id: 'w-outline', label: 'make an outline' },
        { id: 'w-notes', label: 'take notes' },
        { id: 'w-memorize', label: 'memorize words' },
        { id: 'w-quiet', label: 'find a quiet place' },
        { id: 'w-schedule', label: 'make a study schedule' },
        { id: 'w-break', label: 'take a break' },
        { id: 'w-research', label: 'do research' },
        { id: 'w-organize', label: 'organize materials' }
      ],
      /* `label` here is not printed anywhere: the picture is the
         question, so a sentence describing it would be the answer.
         It is read out to a screen reader and nowhere else. */
      whyTitle: 'What is in each picture',
      targets: [
        {
          id: 't1', num: 1, art: 'take-notes', accept: 'w-notes',
          label: 'a pencil writing a fourth line in a notebook',
          why: 'The pencil is part-way through a line, not resting beside the page. Somebody is writing while something is being said.'
        },
        {
          id: 't2', num: 2, art: 'quiet-place', accept: 'w-quiet',
          label: 'a SILENCE sign above a face with one finger on the lips',
          why: 'Two signs for the same thing: the word on the wall and the finger on the lips. Both are about the room, not about the work.'
        },
        {
          id: 't3', num: 3, art: 'do-research', accept: 'w-research',
          label: 'a large magnifying glass over a report, with books behind it',
          why: 'The glass is over the open report, and the books are behind it. Going to the sources and looking closely is what research means.'
        },
        {
          id: 't4', num: 4, art: 'take-break', accept: 'w-break',
          label: 'a pause button beside a hot drink and a closed laptop',
          why: 'The laptop is shut and there is a pause button. The work has stopped on purpose, which is the difference between a break and giving up.'
        },
        {
          id: 't5', num: 5, art: 'search-online', accept: 'w-online',
          label: 'a search box on a screen with a word being typed into it',
          why: 'A search box with a cursor still in it, and results underneath. The word being typed is "phishing", so it is work, not browsing.'
        },
        {
          id: 't6', num: 6, art: 'organize', accept: 'w-organize',
          label: 'four labelled binders standing in order on a shelf',
          why: 'Every binder is upright, on the shelf, and labelled. Materials are things; organizing them is putting each one where it can be found.'
        },
        {
          id: 't7', num: 7, art: 'schedule', accept: 'w-schedule',
          label: 'a Monday-to-Thursday plan with the first day ticked off',
          why: 'Days down the side, a job beside each one, and one already ticked. A list with days on it is a schedule.'
        },
        {
          id: 't8', num: 8, art: 'memorize', accept: 'w-memorize',
          label: 'a stack of flashcards reading phishing, with a go-round-again arrow',
          why: 'One word on a card, a stack of them behind it, and an arrow going round. The arrow is the point: it is the repetition that puts the word in your head.'
        },
        {
          id: 't9', num: 9, art: 'outline', accept: 'w-outline',
          label: 'a page numbered I, II and III with indented sub-points',
          why: 'Numbered headings with smaller points stepped in underneath. That shape is a plan for writing, made before any sentences exist.'
        }
      ],
      given: { t1: 'w-notes' }
    },
    {
      id: 'c1c', ref: '1C', bookRef: 'p.4 · 1C', type: 'scene',
      title: 'Listen and complete the summary',
      instruction: 'Listen to the instructor go through her nine rules for the lab. Then complete her summary below: drag each expression into the gap where it belongs. Tap the speaker on a tile to hear the expression again and say it after her.',
      scene: 'u1-vocab-lab',
      after: 'Subtitles are under the stage: switch English and Arabic on or off in the bar at the bottom of the page. Use <b>loop</b> to repeat one line and <b>0.6×</b> to slow it down.',
      quiz: {
        type: 'dragcloze',
        say: true, voice: 'f',
        whyTitle: 'What she said, rule by rule',
        /* THIS is the card the ordering mattered most on. Written in
           rule order, the nine tiles lined up with the nine gaps one
           for one, so the summary could be completed left to right
           without listening to her at all — in the one exercise on
           the page whose entire point is listening. A different
           scatter from 1B's, so a learner who has just done 1B does
           not arrive here with the order already memorised. */
        tiles: [
          { id: 'e-break', label: 'take a break', art: 'take-break' },
          { id: 'e-organize', label: 'organize materials', art: 'organize' },
          { id: 'e-notes', label: 'take notes', art: 'take-notes' },
          { id: 'e-outline', label: 'make an outline', art: 'outline' },
          { id: 'e-research', label: 'do research', art: 'do-research' },
          { id: 'e-schedule', label: 'make a study schedule', art: 'schedule' },
          { id: 'e-quiet', label: 'find a quiet place', art: 'quiet-place' },
          { id: 'e-online', label: 'search online', art: 'search-online' },
          { id: 'e-memorize', label: 'memorize words', art: 'memorize' }
        ],
        text: '<h4>Nine rules for the lab</h4>' +
          '<p><b>1</b> The first time you hear a new term, [[b1]] — write it down there and then.<br>' +
          '<b>2</b> [[b2]]: the booth at the back has a silence sign for a reason.<br>' +
          '<b>3</b> [[b3]]. Read the advisory, read the report, then read it again.</p>' +
          '<p><b>4</b> Nobody analyses a phishing email well after four hours, so [[b4]].<br>' +
          '<b>5</b> [[b5]] — carefully, and in the databases we give you.<br>' +
          '<b>6</b> [[b6]]: cables, notebooks and folders, all in their place.</p>' +
          '<p><b>7</b> [[b7]]: Monday ports, Tuesday five new terms, Wednesday an outline.<br>' +
          '<b>8</b> [[b8]]. Phishing, payload, patch — say them until they are yours.<br>' +
          '<b>9</b> And always [[b9]] before you write any incident report.</p>',
        answers: {
          b1: 'e-notes', b2: 'e-quiet', b3: 'e-research', b4: 'e-break', b5: 'e-online',
          b6: 'e-organize', b7: 'e-schedule', b8: 'e-memorize', b9: 'e-outline'
        },
        given: { b1: 'e-notes' },
        explain: {
          b1: 'Rule one. She says to write a term down the first time you hear it — not later, when you have already half forgotten it.',
          b2: 'Rule two. The silence sign on the booth is the clue: this rule is about where you sit, not what you do.',
          b3: 'Rule three. Reading the advisory, then the report, then reading it again is research — going to the sources yourself.',
          b4: 'Rule four. Four hours without stopping is the problem, so the answer is the one that stops the clock.',
          b5: 'Rule five. The databases she gives you are online, and the word "carefully" is the warning that comes with them.',
          b6: 'Rule six. Cables, notebooks and folders "all in their place" is the definition of organizing your materials.',
          b7: 'Rule seven. Monday, Tuesday, Wednesday, each with its own job — that is a plan for the week.',
          b8: 'Rule eight. "Say them until they are yours" is repetition until you know them by heart.',
          b9: 'Rule nine. The plan comes before the writing: headings first, then the incident report.'
        }
      }
    },
    {
      id: 'c1d', ref: '1D', bookRef: 'p.4 · 1D', type: 'convo',
      title: 'Complete the conversation',
      instruction: 'Tara is asking you how you study. Her lines are already written, and each one contains the clue you need: read it, then drop in the study skill that answers it. Press <b>Check answers</b> when all five gaps are filled, then play the whole conversation and say your lines aloud.',
      visual: {
        art: 'clue-line',
        caption: 'The clue is always in the line above: "music all evening", "after four hours", "Monday, Tuesday, Wednesday". Each one leaves exactly one study skill that fits, and rules the rest out.'
      },
      lead: 'Five gaps, nine expressions — four of them belong to nobody here. Read Tara\'s line before you choose.',
      cast: {
        tara: { name: 'Tara', voice: 'f', pitch: 1.1 },
        you: { name: 'You', voice: 'm', pitch: 0.95 }
      },
      record: true,
      poolLabel: 'The nine study skills — click one, then click the gap it belongs in, or drag it there. Double-click a gap to empty it.',
      turns: [
        { who: 'tara', say: 'Our instructor gave us nine rules this morning. I want to copy one or two from you — what do you do the first time a new term comes up in the briefing?' },
        { who: 'you', frame: 'I [[g1]]. It goes straight into my notebook, before I forget it.' },
        { who: 'tara', say: 'Sensible. My flatmate plays music all evening, so I can never work at home. Where do you go?' },
        { who: 'you', frame: 'I [[g2]] — the booth at the back of the lab has a silence sign on it.' },
        { who: 'tara', say: 'I will try that. The trouble is that after four hours I start missing things in a phishing email.' },
        { who: 'you', frame: 'Then stop for ten minutes and [[g3]]. You will see more when you come back.' },
        { who: 'tara', say: 'And my week is a mess — Monday, Tuesday, Wednesday, all the same, and nothing ever finished.' },
        { who: 'you', frame: 'Every Sunday I [[g4]]: Monday ports, Tuesday five new terms, Wednesday an outline.' },
        { who: 'tara', say: 'One more. We have thirty new terms for Friday. How are you going to get them all into your head?' },
        { who: 'you', frame: 'I say them out loud again and again until they are mine — that is the only way I [[g5]].' }
      ],
      answers: {
        g1: 'take notes',
        g2: 'find a quiet place',
        g3: 'take a break',
        g4: 'make a study schedule',
        g5: 'memorize words'
      },
      clue: {
        g1: 'what do you do the first time a new term comes up?',
        g2: 'My flatmate plays music all evening',
        g3: 'after four hours I start missing things',
        g4: 'Monday, Tuesday, Wednesday, all the same',
        g5: 'thirty new terms… into your head'
      },
      whyTitle: 'What in the line told you',
      why: {
        g1: 'She asks about the first time a term comes up, and your own line ends "straight into my notebook". Writing a term down as you hear it is taking notes.',
        g2: 'Her problem is noise — music all evening — and your line names the silence sign on the booth. Noise is answered by a place, not by an activity.',
        g3: 'Four hours and "missing things" is tiredness, and your line offers ten minutes of stopping. Ten minutes is a break; it is not research and not a new room.',
        g4: 'Her week is a mess and nothing is finished. Your line then gives Monday, Tuesday and Wednesday each a job, which is what a study schedule is.',
        g5: 'Thirty terms, "into your head", and "out loud again and again". Searching online would find those terms; only repetition keeps them.'
      },
      banks: [{
        items: ['take notes', 'find a quiet place', 'do research', 'take a break', 'search online',
          'organize materials', 'make a study schedule', 'memorize words', 'make an outline']
      }]
    }
  ]
});
