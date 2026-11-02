CSB1.page('u1-l4-s2', {
  book: { page: 11, section: 2, lesson: 'Lesson 4 · Everyday Conversation', title: 'Practise your pronunciation — sh, ch and j' },
  objective: 'Talk about career choices and your strengths and weaknesses',
  prev: 'l4-s1-career-talk', prevLabel: 'Career talk',
  next: 'l4-s3-adjectives-adverbs', nextLabel: 'Adjectives and adverbs',
  cards: [
    {
      id: 'c2a', ref: '2A', bookRef: 'p.11 · 2A', type: 'scene',
      title: 'Listen to the sh, ch and j sounds',
      instruction: 'Listen to the <b>sh</b>, <b>ch</b> and <b>j</b> sounds from Tara and Joseph\'s conversation. Press the <b>mouth-cam</b> button in the player to push the camera in and watch the lips.',
      scene: 'u1-mouthcam',
      after: 'In <b>mouth-cam</b> mode the camera holds a close-up of the speaker\'s face, so you can see the lip and jaw position for each sound. Slow it to 0.6× and loop a line.',
      quiz: {
        type: 'mouthcam',
        minTries: 6,
        sounds: [
          { key: 'sh', how: 'Lips pushed forward and rounded. Air flows out — no voice.', words: ['sure', 'should', 'machine', 'phishing', 'permission'] },
          { key: 'ch', how: 'Tongue touches, then releases sharply. Like /t/ + /sh/.', words: ['choose', 'choices', 'patch', 'branch', 'watch'] },
          { key: 'j', how: 'Same shape as ch, but with your voice on.', words: ['just', 'enjoyed', 'digital', 'manager', 'engineer'] }
        ],
        pairs: [['ship', 'chip'], ['cash', 'catch'], ['chin', 'gin'], ['share', 'chair'], ['watch', 'wash'], ['cheap', 'jeep']]
      }
    },
    {
      id: 'c2b', ref: '2B', bookRef: 'p.11 · 2B', type: 'cloze',
      title: 'Listen and write the sentences',
      instruction: 'Listen and write the sentences from the conversation. Loop each line and slow it to 0.6× if you need to.',
      visual: [
        { mouth: 'sh', caption: 'sure, should, machine' },
        { mouth: 'ch', caption: 'choices, patch, watch' },
        { mouth: 'j', caption: 'just, digital, manager' }
      ],
      plain: true,
      small: true,
      text: '<div style="font-size:16px;line-height:2.4">1. I\'m [[1]] not [[2]].<br>2. There are so many [[3]].<br>3. You [[4]] think about a career in [[5]].</div>',
      answers: {
        '1': ['just'], '2': ['sure'], '3': ['choices'],
        '4': ['should'], '5': ['digital forensics', 'forensics']
      },
      bank: ['just', 'sure', 'choices', 'should', 'digital forensics'],
      whyTitle: 'The sound in each word you wrote',
      why: {
        '1': '<b>j</b> at the front of "just" — the same shape as ch, but with your voice switched on. Put a finger on your throat and you can feel the difference.',
        '2': '<b>sh</b> in "sure", even though it is spelled with an s. Spelling will not tell you this sound; only listening will.',
        '3': '<b>ch</b> in "choices" — the tongue touches and releases sharply, like a t followed straight by sh.',
        '4': '<b>sh</b> in "should", spelled sh this time. Two of the five words here spell the same sound two different ways.',
        '5': '<b>j</b> in "digital", in the middle of the word rather than at the front. The sound does not change with its position.'
      }
    },
    {
      id: 'c2c', ref: '2C', bookRef: 'p.11 · 2C', type: 'chipcols',
      title: 'Complete the sh / ch / j chart',
      instruction: 'Listen again and complete the chart with all the examples of <b>sh</b>, <b>ch</b> and <b>j</b> sounds you hear. <b>Drop each word onto the mouth that makes its sound</b> — not onto the letters, because four of these words are not spelled the way they sound.',
      /* the three mouths ARE the columns, so the card does not also
         print them above: the picture is the question here */
      poolLabel: 'Say the word out loud, then drop it on the mouth that makes the sound — or click the word, then click the mouth.',
      cols: [
        { label: 'lips forward and rounded, no voice', short: 'sh', seed: ['sure'] },
        { label: 'tongue taps, then releases sharply', short: 'ch' },
        { label: 'the same shape as ch, with your voice on', short: 'j' }
      ],
      /* the column heading IS the mouth: the word is dropped onto the
         shape that makes the sound, not onto two letters */
      colArt: [{ mouth: 'sh' }, { mouth: 'ch' }, { mouth: 'j' }],
      pool: ['should', 'machine', 'phishing', 'permission', 'choose', 'choices', 'patch', 'branch', 'just', 'enjoyed', 'digital', 'manager'],
      answers: {
        'should': 0, 'machine': 0, 'phishing': 0, 'permission': 0,
        'choose': 1, 'choices': 1, 'patch': 1, 'branch': 1,
        'just': 2, 'enjoyed': 2, 'digital': 2, 'manager': 2
      },
      whyTitle: 'Why each word sits where it does — and why spelling will not help you',
      why: {
        'sure': 'Given as an example. Spelled with an s and said with sh. If you sorted by spelling you would already be wrong on the first word.',
        'should': 'Spelled sh, said sh. The straightforward case — and the only one of the four sh words here that looks like what it sounds like.',
        'machine': 'Spelled <b>ch</b> and said <b>sh</b>. This is the trap in the exercise: the word came into English from French, and the spelling came with it.',
        'phishing': 'The sh is in the middle, after the i. Note the ph at the front is an f sound — one word, two borrowed spellings.',
        'permission': 'Spelled ss + i, said sh. A whole family of words does this: permission, mission, discussion, decision.',
        'choose': 'Tongue touches the roof of the mouth and releases sharply — t followed straight by sh. Say "choose" and "shoes" one after the other and you can feel the extra stop.',
        'choices': 'Same ch at the front. The s at the end is just a plural, not a second sh.',
        'patch': 'The ch is at the end this time, after the t that is already there in the spelling. English often writes this sound as tch after a short vowel.',
        'branch': 'ch at the end again, this time after an n. The sound is the same wherever it sits in the word.',
        'just': 'The j sound at the front — exactly the ch shape with your voice on. Whisper "just" and it turns into something close to "chust".',
        'enjoyed': 'j in the middle, spelled with a j. The -ed ending is a d sound here, not a separate syllable.',
        'digital': 'Spelled with a g and said with a j. Before an i or an e, g very often takes this sound: digital, manager, gentle.',
        'manager': 'The same g-said-as-j, and in the middle of the word. Compare "manage" with "bag", where the g keeps its hard sound.'
      }
    }
  ]
});
