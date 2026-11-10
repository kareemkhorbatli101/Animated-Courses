/* Unit 2 §18 — Part 8, Consolidation.

   The grammar restated as a reading, with the book's comprehension, its
   one-word gap-fill and its discussion questions.

   The book's key for this part also answers P8Q1-P8Q5, five multiple-choice
   questions that appear NOWHERE in any unit of the book (see the ERRATA).
   Nothing is invented here to fill the gap: the site shows the exercises
   the book actually contains. */
EAFM.page('u2-s18', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 8', page: 2, section: '18',
          lesson: 'Part 8 · Consolidation', title: 'The grammar, restated' },
  objective: 'Say the rule in your own words, and hear it in Fadi’s',
  prev: 's17-stakeholder', prevLabel: 'Stakeholders',
  next: 's19-cases', nextLabel: 'Case studies',
  cards: [
    {
      id: 'c1', covers: ['Part 8'], ref: '8A',
      bookRef: 'Unit 2 · Part 8 · A', type: 'quizset',
      title: 'Read, then answer',
      instruction: 'This is the whole unit’s grammar in one text. The first question is done for you.',
      passage: {
        style: 'article',
        title: 'Two past tenses, and the work they do',
        listenLabel: 'Listen to the whole text',
        say: { scene: 'u2-consolidation', who: 'narr' },
        watch: { scene: 'u2-consolidation', label: 'Watch it as a scene',
          title: 'Two past tenses, and the work they do',
          lead: 'Subtitles in English and Arabic are under the stage.' },
        paras: [
          'We use the past simple to describe a completed action in the past. Most verbs are regular, so we simply add ed to the base form. Fadi recorded the transaction. He checked the receipt. The team closed the books. Some important verbs are irregular, so we memorise them individually. Fadi wrote the entry. He gave the report to his manager. Money came in, and money went out.',
          'To make a negative, we use did not, or the short form didn’t, with the base verb. Fadi did not forget the receipt. He didn’t make a mistake. To make a question, we use did with the base verb. Did you post the entry? Did the numbers agree? Notice that we do not add ed after did. We say, did you check, not did you checked.',
          'We also use the past continuous for a longer action in progress in the past. We form it with was or were, plus the verb and ing. Fadi was counting the cash when Samah arrived. The team was working late last night. Often, the two tenses appear together. A short past-simple action interrupts a longer past-continuous one. While Fadi was posting the entries, the manager called.',
          'With these two useful tenses, Fadi describes the entire story of the past. He reports the actions he completed, and he describes the situation that was developing at each particular moment. This combination makes his reports both accurate and complete. Every finance officer needs these two tenses. They are the natural language of a careful record. Fadi practised them until they felt easy. Now he uses them without any effort at all.'
        ]
      },
      worked: {
        q: '0. What do we add to a regular verb in the past simple?',
        a: 'ed',
        why: 'The second sentence: "Most verbs are regular, so we simply add ed to the base form." Two letters, and most of the tense.'
      },
      items: [
        {
          q: '1. How do we make a negative in the past simple?',
          evidence: 'the sentence beginning "To make a negative…".',
          jump: { scene: 'u2-consolidation', line: 4 },
          options: [
            { t: 'With did not (or didn’t) and the base verb.', ok: true,
              why: 'Right — "we use did not, or the short form didn’t, with the base verb." Both halves are needed: the <i>did not</i>, and the fact that the verb after it goes back to its plain form.' },
            { t: 'By adding ed and not.', ok: false,
              why: 'That would give "did not forgot" or "not forgot" — two past markers, which is exactly what the text warns against.' },
            { t: 'With was not or were not.', ok: false,
              why: 'Those make a past continuous negative. The question is about the past simple.' },
            { t: 'With do not.', ok: false,
              why: 'That is the present. The past of <i>do</i> is <i>did</i>, and carrying the tense is its whole job here.' }
          ]
        },
        {
          q: '2. How do we form the past continuous?',
          evidence: 'the sentence beginning "We form it with…".',
          jump: { scene: 'u2-consolidation', line: 8 },
          options: [
            { t: 'With did and the base verb.', ok: false,
              why: 'That is the past simple question and negative.' },
            { t: 'With was or were, plus the verb and ing.', ok: true,
              why: 'Right — word for word from the text. Both parts are required: <i>was counting</i>, never <i>was count</i> and never <i>counting</i> alone.' },
            { t: 'By adding ed to the base form.', ok: false,
              why: 'That is the regular past simple.' },
            { t: 'With have or has and the past participle.', ok: false,
              why: 'That is the present perfect, which this book teaches in Unit 8.' }
          ]
        },
        {
          q: '3. Why do we say ‘did you check’, not ‘did you checked’? (inference)',
          evidence: 'the sentences beginning "Notice that we do not add ed after did…".',
          jump: { scene: 'u2-consolidation', line: 6 },
          options: [
            { t: 'Because ‘checked’ is an irregular verb.', ok: false,
              why: 'It is perfectly regular — and the rule applies to irregular verbs too: <i>did you write</i>, not <i>did you wrote</i>.' },
            { t: 'Because ‘did’ already shows the past, so the main verb does not need to show it again.', ok: true,
              why: 'Right. The text states the rule and this is the reason behind it: one past marker per verb phrase. Once <i>did</i> has taken the job, the main verb returns to its base form.' },
            { t: 'Because questions never use the past tense.', ok: false,
              why: 'The question is firmly in the past — it is <i>did</i> that puts it there.' },
            { t: 'Because ‘check’ sounds better.', ok: false,
              why: 'It is a rule, not a preference, and it holds for every verb in English.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 8'], ref: '8B',
      bookRef: 'Unit 2 · Part 8 · B', type: 'cloze',
      title: 'Complete each sentence with ONE word from the text',
      instruction: 'Every answer is a single word, and every one of them is in the text above. The first is done for you.',
      visual: { art: 'aux-mirror', caption: 'All three blanks are about the same two tenses.' },
      before: '<b>0.</b> We add <u>ed</u> to most regular verbs in the past simple.',
      text: '<div style="font-size:16px;line-height:2.6">' +
        '1. To make a negative, we use did [[1]] with the base verb.<br>' +
        '2. To make a question, we use [[2]] with the base verb.<br>' +
        '3. We form the past continuous with was or [[3]], plus the verb and ing.' +
        '</div>',
      answers: { '1': ['not'], '2': ['did'], '3': ['were'] },
      bank: ['not', 'did', 'were'],
      whyTitle: 'Where each word comes from',
      why: {
        '1': '"we use did not, or the short form didn’t, with the base verb." The blank follows <i>did</i>, so the missing word is <b>not</b>.',
        '2': '"To make a question, we use did with the base verb." The same auxiliary does both jobs — negatives and questions.',
        '3': '"We form it with was or were" — the pair is given, and the sentence supplies the first one, so the blank can only be <b>were</b>.'
      }
    },
    {
      id: 'c3', covers: ['Part 8'], ref: '8C',
      bookRef: 'Unit 2 · Part 8 · C', type: 'discuss',
      title: 'Discuss in small groups',
      instruction: 'Give reasons and examples. These are your own answers, so they are not marked — but the tenses are the ones you have just been practising.',
      visual: { spot: 'month-end', caption: 'All three questions are about something that has already finished.' },
      minWords: 12,
      questions: [
        { q: '1. What did you do at work or at home yesterday? Use the past simple.' },
        { q: '2. Describe a busy day last week. What were you doing at different times?' },
        { q: '3. Tell the story of one thing you bought recently. What happened, step by step?' }
      ],
      ideas: ['yesterday I…', 'last week I…', 'first… then… after that…',
              'I was…ing when…', 'I didn’t…', 'did you…?'],
      okMsg: 'Good — that is the whole unit in three answers.',
      coach: {
        title: 'Check your three answers',
        target: 'past simple and past continuous',
        taught: ['Question 1 wants the past simple throughout.',
                 'Question 2 wants the past continuous — "at different times" means things in progress.',
                 'Question 3 wants a sequence with signposts, like Audio 2.3.'],
        task: 'Answer the three discussion questions about your own recent past.',
        parts: ['Yesterday, in the past simple.',
                'A busy day, in the past continuous.',
                'One purchase, step by step.'],
        example: [
          'Yesterday I checked the petty cash and I wrote the weekly summary. I did not finish the bank reconciliation.',
          'Last Tuesday was busy. At nine I was counting the cash, at eleven I was answering the auditor’s questions, and at two I was still writing the report.',
          'I bought a printer for the office. First I asked for two prices, then my manager approved the cheaper one, and after that I kept the receipt and recorded the payment.'
        ],
        criteria: [
          { t: 'Answer 1 uses the past simple, including one negative if you can.' },
          { t: 'Answer 2 uses the past continuous for different times of day.' },
          { t: 'Answer 3 tells the steps in order, with signposts.' }
        ]
      }
    }
  ]
});
