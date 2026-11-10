CSB1.page('u1-l4-s3', {
  book: { page: 12, section: 3, lesson: 'Lesson 4 · Everyday Conversation', title: 'Use adjectives and adverbs to describe your skills' },
  objective: 'Talk about career choices and your strengths and weaknesses',
  prev: 'l4-s2-pronunciation', prevLabel: 'Pronunciation',
  next: 'l4-s4-conversation-skills', nextLabel: 'Conversation skills',
  cards: [
    {
      id: 'c3a', ref: '3A', bookRef: 'p.12 · 3A', type: 'pairchart',
      title: 'Work out the rule, then study the charts',
      instruction: 'Finish the four rules below — the examples you need are in the picture. Then the charts and the chips open underneath: click an <b>adjective</b> to drop it into the noun slot, and an <b>adverb</b> to drop it into the verb slot.',
      visual: {
        art: 'adj-adv',
        caption: 'The same idea, two targets. <b>careful</b> is aimed at a person or thing; <b>carefully</b> is aimed at what they do. Everything on this page follows from that.'
      },
      ruleGate: {
        title: 'Four rules, and two of them are the awkward ones',
        lead: 'Use the picture above. Two of these you can work out; the last two you have to notice.',
        text: 'An <b>adjective</b> describes a [[1]]: <i>He is a careful worker.</i><br>' +
          'An <b>adverb</b> describes a [[2]]: <i>He works carefully.</i><br>' +
          'Most adverbs are made by adding [[3]] to the adjective.<br>' +
          'But some are irregular: the adverb of <i>good</i> is [[4]], and the adverb of <i>hard</i> is [[5]].',
        banks: {
          '1': ['noun', 'verb', 'adjective', 'adverb'],
          '2': ['noun', 'verb', 'adjective', 'adverb'],
          '3': ['-ly', '-ed', '-ing', '-er'],
          '4': ['well', 'goodly', 'better', 'good'],
          '5': ['hard', 'hardly', 'harder', 'hardily']
        },
        answers: { '1': 'noun', '2': 'verb', '3': '-ly', '4': 'well', '5': 'hard' },
        after: 'Watch the last one: <i>hardly</i> is a real word, but it means <i>almost not at all</i> — the opposite of working hard.'
      },
      tables: [
        {
          title: 'Adjectives — they describe a noun',
          head: ['Word', 'Example'], grammar: true,
          rows: [['quick', 'He\'s a <b>quick</b> learner.'], ['careful', 'He\'s a <b>careful</b> worker.'], ['hard', 'It\'s <b>hard</b> work.'], ['good', 'She got <b>good</b> grades in networking.']]
        },
        {
          title: 'Adverbs — they describe a verb',
          head: ['Word', 'Example'], grammar: true,
          rows: [['quickly', 'We finished the lesson <b>quickly</b>.'], ['carefully', 'He works <b>carefully</b>.'], ['hard', 'They work <b>hard</b>.'], ['well', 'She did <b>well</b> in the networking exam.']]
        }
      ],
      need: 6,
      pairs: [
        ['quick', 'quickly'],
        ['careful', 'carefully'],
        ['patient', 'patiently'],
        ['accurate', 'accurately'],
        ['calm', 'calmly'],
        ['hard', 'hard', 'Same form for both — an irregular pair.'],
        ['good', 'well', 'Irregular: the adverb of "good" is "well".']
      ],
      notes: '<div>• Adjectives describe nouns. <i>We took a <b>quick</b> break.</i></div>' +
        '<div>• Adverbs give more information about the verb. <i>We <u>finished</u> the lesson <b>quickly</b>.</i></div>' +
        '<div>• Most adverbs end in <i>-ly</i>, but some adjectives and adverbs have the same form (<i>hard – hard</i>).</div>' +
        '<div>• Some adjectives and adverbs are irregular (<i>good – well</i>).</div>'
    },
    {
      id: 'c3b', ref: '3B', bookRef: 'p.12 · 3B', type: 'convo',
      title: 'Talk about yourself',
      instruction: 'Work with a partner. Take turns making statements about yourselves using the job-related adjectives and adverbs. Carlos has already started — complete your three turns so the conversation keeps going, then play it back and say your lines aloud.',
      visual: {
        art: 'adj-adv',
        caption: 'Each of your turns needs one of each: an adjective before <i>worker</i>, and an adverb after <i>work</i>. Watch the shape of the gap.'
      },
      lead: 'Carlos talks about himself first each time, so your reply has to pick up from what he said.',
      cast: {
        carlos: { name: 'Carlos', voice: 'm', pitch: 0.98 },
        you: { name: 'You', voice: 'f', pitch: 1.08 }
      },
      record: true,
      distinct: true,
      poolLabel: 'Click a word, then click the gap it belongs in — or drag it there. Adjectives go before "worker", adverbs after "work".',
      turns: [
        { who: 'carlos', say: 'The mentor asked me what kind of worker I am. I said I am a patient worker, and that I like to work slowly and get it right.' },
        { who: 'you', frame: 'I am different. I am a very [[1]] worker, and it is important to me to work as [[2]] as possible.' },
        { who: 'carlos', say: 'Interesting. On the help desk last month they told me the opposite — they wanted everything finished fast.' },
        { who: 'you', frame: 'On a bad day I am a [[3]] worker too, but I still try to work [[4]].' },
        { who: 'carlos', say: 'So what would you put on an application form, if you only had room for one thing?' },
        { who: 'you', frame: 'I would write that I am a [[5]] worker who works [[6]].' }
      ],
      /* what the learner says about themselves is theirs, but the
         grammar is not: an adverb in the adjective slot gives
         "I am a very carefully worker", which used to be accepted */
      gapBank: { '1': 0, '2': 1, '3': 0, '4': 1, '5': 0, '6': 1 },
      banks: [
        { label: 'Adjective (before the noun "worker"):', items: ['careful', 'quick', 'patient', 'accurate', 'calm', 'thorough', 'hard'] },
        { label: 'Adverb (after the verb "work"):', items: ['carefully', 'quickly', 'patiently', 'accurately', 'calmly', 'thoroughly', 'hard'] }
      ]
    }
  ]
});
