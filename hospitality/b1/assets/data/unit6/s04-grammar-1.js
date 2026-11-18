/* Unit 6 §4 — Grammar — Comparatives and Superlatives.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s04', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Grammar — Comparatives and Superlatives', part: '2',
          section: '4', lesson: 'Grammar — Comparatives and Superlatives', title: 'Grammar — Comparatives and Superlatives' },
  objective: 'By the end of Part 2 you can compare two places with a comparative '
  + 'and name the best with a superlative, forming both correctly.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 6 · P2 · figures',
      type: 'study',
      title: 'The pictures in Grammar — Comparatives and Superlatives',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-6.2.png', caption: 'We compare places with comparatives and superlatives.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 6 · P2',
      type: 'study',
      title: 'The grammar, as the book gives it',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'The grammar, as the book gives it',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'We use COMPARATIVES to compare TWO things. For short adjectives, add '
            + '-er and use than: old → older than, big → bigger than, cheap → '
            + 'cheaper than. For long adjectives (two syllables or more), use more … '
            + 'than: beautiful → more beautiful than, famous → more famous than. '
            + 'Example: Palmyra is older than the citadel. The Old City is more '
            + 'beautiful than the new town.',
          say: 'We use COMPARATIVES to compare TWO things. For short adjectives, add '
            + '-er and use than: old → older than, big → bigger than, cheap → '
            + 'cheaper than. For long adjectives (two syllables or more), use more … '
            + 'than: beautiful → more beautiful than, famous → more famous than. '
            + 'Example: Palmyra is older than the citadel. The Old City is more '
            + 'beautiful than the new town.',
          role: 'course'
        },
        {
          h: 'We use SUPERLATIVES to compare THREE or more things — to say which is '
            + 'the \'most\'. For short adjectives, add the …-est: old → the oldest, '
            + 'big → the biggest. For long adjectives, use the most …: the most '
            + 'beautiful, the most famous. Example: Aleppo is the biggest city in '
            + 'the north. Palmyra is the most famous ruin in Syria.',
          say: 'We use SUPERLATIVES to compare THREE or more things — to say which is '
            + 'the \'most\'. For short adjectives, add the …-est: old → the oldest, '
            + 'big → the biggest. For long adjectives, use the most …: the most '
            + 'beautiful, the most famous. Example: Aleppo is the biggest city in '
            + 'the north. Palmyra is the most famous ruin in Syria.',
          role: 'course'
        },
        {
          h: 'Some adjectives are IRREGULAR: good → better → the best; bad → worse '
            + '→ the worst.',
          say: 'Some adjectives are IRREGULAR: good → better → the best; bad → worse '
            + '→ the worst.',
          role: 'course'
        },
        {
          h: 'Form',
          say: 'Form',
          role: 'course'
        },
        {
          h: 'Comparative: short adj + -er + than · more + long adj + than '
            + 'Superlative: the + short adj + -est · the most + long adj',
          say: 'Comparative: short adj + -er + than · more + long adj + than '
            + 'Superlative: the + short adj + -est · the most + long adj',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 6 · P2 A',
      type: 'cloze',
      title: 'Write the COMPARATIVE with than',
      instruction: 'Write the COMPARATIVE with than. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. (big) Aleppo is [[1]] Latakia.'
        + '<br>'
        + '2. (beautiful) The Old City is [[2]] the airport road.'
        + '<br>'
        + '3. (cheap) A taxi is [[3]] a private car.'
        + '<br>'
        + '4. (famous) Palmyra is [[4]] many other ruins.'
        + '</div>',
      answers: {
        '1': ['bigger than'],
        '2': ['more beautiful than'],
        '3': ['cheaper than'],
        '4': ['more famous than']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>bigger than</b>',
        '2': '<b>more beautiful than</b>',
        '3': '<b>cheaper than</b>',
        '4': '<b>more famous than</b>'
      }
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 6 · P2 B',
      type: 'cloze',
      title: 'Write the SUPERLATIVE with the',
      instruction: 'Write the SUPERLATIVE with the.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. (old) The Umayyad Mosque is one of [[1]] mosques in the world.'
        + '<br>'
        + '2. (big) Aleppo is [[2]] city in the north.'
        + '<br>'
        + '3. (famous) Palmyra is [[3]] ruin in Syria.'
        + '<br>'
        + '4. (beautiful) For many, the Old City is [[4]] place in Damascus.'
        + '</div>',
      answers: {
        '1': ['the oldest'],
        '2': ['the biggest'],
        '3': ['the most famous'],
        '4': ['the most beautiful']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>the oldest</b>',
        '2': '<b>the biggest</b>',
        '3': '<b>the most famous</b>',
        '4': '<b>the most beautiful</b>'
      }
    },
    {
      id: 'c5',
      ref: 'C',
      bookRef: 'Unit 6 · P2 C',
      type: 'cloze',
      title: 'Complete with the correct form of good or bad',
      instruction: 'Complete with the correct form of good or bad.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The weather in spring is [[1]] (good, comparative) than in summer.'
        + '<br>'
        + '2. This is [[2]] (good, superlative) view in the city.'
        + '<br>'
        + '3. The traffic at 5 p.m. is [[3]] (bad, superlative) of the day.'
        + '</div>',
      answers: {
        '1': ['better'],
        '2': ['the best'],
        '3': ['the worst']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>better</b>',
        '2': '<b>the best</b>',
        '3': '<b>the worst</b>'
      }
    }
  ]
});
