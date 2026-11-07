/* Unit 1 §18 — Part 8, Consolidation.

   The grammar restated as a reading, with the book's comprehension, its
   one-word gap-fill and its discussion questions. The gap-fill answers are
   derived: the key reprints that section (see the ERRATA). */
EAFM.page('u1-s18', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 8', page: 1, section: '18',
          lesson: 'Part 8 · Consolidation', title: 'The grammar, restated' },
  objective: 'Say the rule in your own words, and hear it in Fadi’s',
  prev: 's17-stakeholder', prevLabel: 'Stakeholders',
  next: 's19-cases', nextLabel: 'Case studies',
  cards: [
    {
      id: 'c1', covers: ['Part 8'], ref: '8A', bookRef: 'Unit 1 · Part 8 · A', type: 'quizset',
      title: 'Read, then answer',
      instruction: 'This is the whole unit’s grammar in one text. The first question is done for you.',
      passage: {
        style: 'article',
        title: 'Two tenses, and the questions they answer',
        listenLabel: 'Listen to the whole text',
        say: { scene: 'u1-consolidation', who: 'narr' },
        watch: { scene: 'u1-consolidation', label: 'Watch it as a scene',
          title: 'Two tenses, and the questions they answer',
          lead: 'Subtitles in English and Arabic are under the stage.' },
        paras: [
          'We use the present simple to talk about routines, habits, and facts. Fadi uses it all day. He says, I record the transactions every morning. I reconcile the cash each week. The finance team prepares a report every month. These sentences describe regular actions, so we use the present simple. With he, she, and it, we add an s to the verb. We say Fadi records, the team prepares, the manager checks.',
          'We use the present continuous for actions that happen now, at this moment. We form it with am, is, or are, plus the verb and ing. Fadi says, right now I am checking the cash box. My manager is reading the report. The donors are waiting for the numbers. These actions are in progress, so we use the present continuous.',
          'The two tenses answer different questions. The present simple answers, what do you usually do? The present continuous answers, what are you doing now? Fadi uses both tenses together very often. He often says, I usually work in the office. But today I am visiting a partner. In this one sentence, the present simple shows the routine, and the present continuous shows today.',
          'With these two tenses, Fadi describes his whole working life. He explains his daily routine, and he reports what is happening at this moment. Both tenses are simple, and both are very useful every day.'
        ]
      },
      worked: {
        q: '0. Which tense do we use for routines and habits?',
        a: 'the present simple',
        why: 'The opening sentence says so. Done for you so that you can see the shape of a good short answer: name the tense, nothing more.'
      },
      items: [
        {
          q: '1. What do we add to the verb with he, she, and it?',
          evidence: 'the sentence beginning "With he, she, and it…".',
          options: [
            { t: 'an s', ok: true,
              why: 'Right — "With he, she, and it, we add an s to the verb." The three examples that follow all show it: records, prepares, checks.' },
            { t: 'ing', ok: false,
              why: 'That belongs to the continuous, and it never goes on a present simple verb.' },
            { t: 'ed', ok: false,
              why: 'That is the past simple, which is Unit 2’s grammar, not this one’s.' },
            { t: 'nothing', ok: false,
              why: 'With <i>I</i>, <i>you</i>, <i>we</i> and <i>they</i> you add nothing — but the question asked specifically about he, she and it, which are the exception.' }
          ]
        },
        {
          q: '2. How do we form the present continuous?',
          evidence: 'the sentence beginning "We form it with…".',
          options: [
            { t: 'with the verb plus s', ok: false,
              why: 'That is the present simple with he/she/it.' },
            { t: 'with am, is, or are, plus the verb and ing', ok: true,
              why: 'Right — word for word from the text. Both halves are needed: the am/is/are AND the -ing. One without the other is the mistake §7 drills.' },
            { t: 'with do or does plus the verb', ok: false,
              why: 'That is how the present simple makes questions and negatives, not how the continuous is built.' },
            { t: 'with will plus the verb', ok: false,
              why: 'That is the future, which this unit does not teach.' }
          ]
        },
        {
          q: '3. Why does Fadi often use both tenses in one sentence? (inference)',
          evidence: 'the sentences about "I usually work in the office. But today I am visiting a partner."',
          options: [
            { t: 'Because he cannot decide which tense to use.', ok: false,
              why: 'The opposite — using both is a decision, and a precise one.' },
            { t: 'Because the routine and today are different, and he wants to show both at once.', ok: true,
              why: 'Right — "the present simple shows the routine, and the present continuous shows today." Without both tenses the contrast disappears and today sounds like every day.' },
            { t: 'Because English always needs two tenses in a sentence.', ok: false,
              why: 'It does not. Most sentences in this unit use one.' },
            { t: 'Because he is talking about the past and the present.', ok: false,
              why: 'Neither tense here is past. Both are present — one about habit, one about this moment.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 8'], ref: '8B', bookRef: 'Unit 1 · Part 8 · B', type: 'cloze',
      title: 'Complete each sentence with ONE word from the text',
      instruction: 'Every answer is a single word, and every one of them is in the text above. The first is done for you.',
      visual: { art: 'tense-timeline', caption: 'All four blanks are about the same two tenses.' },
      before: '<b>0.</b> We use the present <u>simple</u> for routines and habits.',
      text: '<div style="font-size:16px;line-height:2.6">' +
        '1. With he, she, and it, we add an [[1]] to the verb.<br>' +
        '2. We form the present continuous with am, is, or [[2]].<br>' +
        '3. The present continuous describes an action that happens [[3]].' +
        '</div>',
      answers: { '1': ['s'], '2': ['are'], '3': ['now'] },
      bank: ['s', 'are', 'now'],
      whyTitle: 'Where each word comes from',
      why: {
        '1': '"With he, she, and it, we add an s to the verb." One letter, and it is the commonest mistake in the whole unit.',
        '2': '"We form it with am, is, or are" — the list has three items and the sentence gives you the first two, so the blank can only be the third.',
        '3': '"We use the present continuous for actions that happen now, at this moment." The text says <i>now</i> first, and then explains it.'
      }
    },
    {
      id: 'c3', covers: ['Part 8'], ref: '8C', bookRef: 'Unit 1 · Part 8 · C', type: 'discuss',
      title: 'Discuss in small groups',
      instruction: 'Give reasons and examples. These are your own answers, so they are not marked — but the tenses are the ones you have just been practising.',
      visual: { spot: 'manager', caption: 'Three questions about your own work, not about Fadi’s.' },
      minWords: 12,
      questions: [
        { q: '1. Describe your daily routine at work or at home. Use the present simple.' },
        { q: '2. Say what you are doing this week that is different. Use the present continuous.' },
        { q: '3. Explain one task from your job. Use both tenses.' }
      ],
      ideas: ['every day I…', 'I usually…', 'right now I am…', 'this week I am…',
              'he/she works, checks', 'they are…ing'],
      okMsg: 'Good — that is the whole unit in three answers.',
      coach: {
        title: 'Check your three answers',
        target: 'present simple and present continuous',
        taught: ['Question 1 wants the simple throughout.',
                 'Question 2 wants the continuous, and a word like "this week".',
                 'Question 3 wants both, like the book’s "I usually work in the office, but today…".'],
        task: 'Answer the three discussion questions about your own work or home life.',
        parts: ['A routine, in the present simple.',
                'Something different this week, in the present continuous.',
                'One task explained, using both tenses.'],
        example: [
          'Every day I open the office at eight and I check yesterday’s receipts. I usually finish the cash book before lunch.',
          'This week I am covering for a colleague, so I am doing two jobs at once.',
          'I usually reconcile the cash on Thursday, but right now I am doing it early because the auditor is coming.'
        ],
        criteria: [
          { t: 'Answer 1 uses the present simple and a frequency word.' },
          { t: 'Answer 2 uses the present continuous and says what is different.' },
          { t: 'Answer 3 uses both tenses in the same answer.' }
        ]
      }
    }
  ]
});
