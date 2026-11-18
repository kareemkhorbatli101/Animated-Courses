/* Unit 2 §4 — Grammar — There is / There are, Quantifiers, Prepositions.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s04', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Grammar — There is / There are, Quantifiers, Prepositions', part: '2',
          section: '4', lesson: 'Grammar — There is / There are, Quantifiers, Prepositions', title: 'Grammar — There is / There are, Quantifiers, Prepositions' },
  objective: 'By the end of Part 2 you can say what there is and what there are in '
  + 'a place, use the right quantifier, and give directions with '
  + 'prepositions.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 2 · P2 · figures',
      type: 'study',
      title: 'The pictures in Grammar — There is / There are, Quantifiers, Prepositions',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-2.3.png', caption: 'We use there is / there are to say what a place has.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 2 · P2',
      type: 'study',
      title: 'The grammar, as the book gives it',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'The grammar, as the book gives it',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'We use THERE IS with one thing (singular): There is a pool. There is '
            + 'a lift next to reception. We use THERE ARE with more than one thing '
            + '(plural): There are two restaurants. There are fifty rooms.',
          say: 'We use THERE IS with one thing (singular): There is a pool. There is '
            + 'a lift next to reception. We use THERE ARE with more than one thing '
            + '(plural): There are two restaurants. There are fifty rooms.',
          role: 'course'
        },
        {
          h: 'Negative: There isn\'t a gym on this floor. There aren\'t any shops '
            + 'in the hotel. Questions: Is there a spa? Are there any rooms free '
            + 'tonight?',
          say: 'Negative: There isn\'t a gym on this floor. There aren\'t any shops '
            + 'in the hotel. Questions: Is there a spa? Are there any rooms free '
            + 'tonight?',
          role: 'course'
        },
        {
          h: 'QUANTIFIERS tell us how many or how much. Use some in positive '
            + 'sentences (There are some towels in the room). Use any in negatives '
            + 'and questions (There aren\'t any windows. Are there any cafés near '
            + 'here?). Use a lot of for a big number (There are a lot of rooms). Use '
            + 'a few for a small number (There are a few chairs).',
          say: 'QUANTIFIERS tell us how many or how much. Use some in positive '
            + 'sentences (There are some towels in the room). Use any in negatives '
            + 'and questions (There aren\'t any windows. Are there any cafés near '
            + 'here?). Use a lot of for a big number (There are a lot of rooms). Use '
            + 'a few for a small number (There are a few chairs).',
          role: 'course'
        },
        {
          h: 'PREPOSITIONS OF PLACE tell us where: in, on, under, next to, '
            + 'opposite, near, behind, in front of, between, above, below.',
          say: 'PREPOSITIONS OF PLACE tell us where: in, on, under, next to, '
            + 'opposite, near, behind, in front of, between, above, below.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 2 · P2 A',
      type: 'cloze',
      title: 'Complete with THERE IS or THERE ARE',
      instruction: 'Complete with THERE IS or THERE ARE. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. [[1]] a swimming pool on the first floor.'
        + '<br>'
        + '2. [[2]] fifty rooms in the hotel.'
        + '<br>'
        + '3. [[3]] a garden behind the hotel.'
        + '<br>'
        + '4. [[4]] two lifts next to reception.'
        + '<br>'
        + '5. [[5]] free wifi in every room.'
        + '</div>',
      answers: {
        '1': ['There is'],
        '2': ['There are'],
        '3': ['There is'],
        '4': ['There are'],
        '5': ['There is']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>There is</b>',
        '2': '<b>There are</b>',
        '3': '<b>There is</b>',
        '4': '<b>There are</b>',
        '5': '<b>There is</b>'
      }
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 2 · P2 B',
      type: 'cloze',
      title: 'Complete with some, any, a lot of, or a few',
      instruction: 'Complete with some, any, a lot of, or a few.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. There are [[1]] towels in the bathroom. (positive)'
        + '<br>'
        + '2. There aren\'t [[2]] shops in the hotel.'
        + '<br>'
        + '3. Are there [[3]] rooms free tonight?'
        + '<br>'
        + '4. The hotel is big — there are [[4]] rooms (more than fifty).'
        + '<br>'
        + '5. There are only [[5]] tables in the small café (three or four).'
        + '</div>',
      answers: {
        '1': ['some'],
        '2': ['any'],
        '3': ['any'],
        '4': ['a lot of'],
        '5': ['a few']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>some</b>',
        '2': '<b>any</b>',
        '3': '<b>any</b>',
        '4': '<b>a lot of</b>',
        '5': '<b>a few</b>'
      }
    },
    {
      id: 'c5',
      ref: 'C',
      bookRef: 'Unit 2 · P2 C',
      type: 'cloze',
      title: 'Complete with a preposition of place',
      instruction: 'Complete with a preposition of place.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The lift is [[1]] the reception desk. (beside)'
        + '<br>'
        + '2. The restaurant is [[2]] the café. (across from)'
        + '<br>'
        + '3. The car park is [[3]] the building. (below)'
        + '<br>'
        + '4. The lamp is [[4]] the desk. (on top)'
        + '<br>'
        + '5. The pool is [[5]] the gym and the spa. (in the middle)'
        + '</div>',
      answers: {
        '1': ['next to'],
        '2': ['opposite'],
        '3': ['under'],
        '4': ['on'],
        '5': ['between']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>next to</b>',
        '2': '<b>opposite</b>',
        '3': '<b>under</b>',
        '4': '<b>on</b>',
        '5': '<b>between</b>'
      }
    }
  ]
});
