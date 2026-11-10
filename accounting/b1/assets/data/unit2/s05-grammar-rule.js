/* Unit 2 §5 — Part 2, the rule.

   The learner completes the rule before reading it. The Grammar Focus
   table is the book's own. `two-actions` is the engine's subject-neutral
   drawing of a long action interrupted by a short one, which is exactly
   this unit's second tense. */
EAFM.page('u2-s05', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 2', page: 2, section: '5',
          lesson: 'Part 2 · Grammar', title: 'The past simple and the past continuous' },
  objective: 'Know which past tense does which job, and why ed never follows did',
  prev: 's04-vocab-mcq', prevLabel: 'Terminology',
  next: 's06-grammar-gap', nextLabel: 'Controlled practice',
  intro: 'Look back at Unit 1. There you used the present simple and continuous to describe your daily work. In this unit you learn the past simple. You need it to report what happened — to say what you recorded, checked, and closed last month.',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A', bookRef: 'Unit 2 · Part 2', type: 'study',
      title: 'Work out the rule, then read it',
      instruction: 'Finish the five blanks below. The examples you need are in the picture and in the text you have already read. The full explanation opens underneath once they are right.',
      visual: { art: 'two-actions',
        caption: 'A long action already running, and a short one that lands inside it. Both are past; only one of them is finished at a point.' },
      ruleGate: {
        title: 'Five blanks, and the rule is yours',
        lead: 'Fadi recorded the transaction. He wrote the entry. While he was counting the cash, Samah arrived. Everything below follows from those three sentences.',
        text: 'For a finished action in the past we use the past <b>simple</b>. Most verbs are regular, so we add [[1]].<br>' +
          'Some verbs are irregular, so we learn them one by one: the past of <i>write</i> is [[2]].<br>' +
          'For a negative we use <i>did not</i> with the [[3]] verb.<br>' +
          'We do <b>not</b> add ed after [[4]].<br>' +
          'For a longer action in progress we use was or were plus the verb and [[5]].',
        banks: {
          '1': ['ed', 's', 'ing', 'en'],
          '2': ['wrote', 'writed', 'written', 'writing'],
          '3': ['base', 'past', 'ing', 'third'],
          '4': ['did', 'was', 'not', 'ever'],
          '5': ['ing', 'ed', 's', 'to']
        },
        answers: { '1': 'ed', '2': 'wrote', '3': 'base', '4': 'did', '5': 'ing' },
        after: 'The fourth one is the mistake the book warns about twice: say <i>Did you check?</i>, never <i>Did you checked?</i>. Once <i>did</i> has carried the past, the main verb goes back to its plain form.'
      },
      tables: [
        {
          title: 'Grammar Focus — the book’s own table',
          head: ['Form', 'Example', 'Note'], grammar: true,
          rows: [
            ['Past simple (regular)', 'Fadi recorded the transaction.', 'add ed'],
            ['Past simple (irregular)', 'He wrote the entry. Money came in.', 'learn each one'],
            ['Negative / question', "He didn't forget. Did you post it?", 'did not / did + base verb'],
            ['Past continuous', 'Fadi was counting the cash when Samah arrived.', 'was/were + verb-ing']
          ]
        }
      ],
      html:
        '<div class="note"><h4>Remember</h4><p>Past simple: add ed to regular verbs; learn irregular verbs one by one; ' +
        'use did not / did + base verb for negatives and questions (no ed after did). ' +
        'Past continuous: was/were + verb-ing, for a longer action in progress in the past.</p></div>',
      doneLabel: 'I have worked out the rule'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B', bookRef: 'Unit 2 · Part 2 · Watch out', type: 'quizset',
      title: 'The two mistakes the book warns about',
      instruction: 'The book’s <b>Watch out</b> box names two errors. Each question below is one of them.',
      visual: { art: 'aux-mirror',
        caption: 'Once <i>did</i> is in the sentence, it carries the past on its own.' },
      items: [
        {
          q: '1. Which question is correct?',
          evidence: 'the Watch out box: "do NOT add ed after did".',
          options: [
            { t: 'Did you checked the receipt?', ok: false,
              why: 'This is the first mistake the book names. <i>Did</i> is already past, so the main verb has nothing left to mark — two past signals in one verb phrase.' },
            { t: 'Did you check the receipt?', ok: true,
              why: 'Right, and it is the book’s own example: "Say ‘Did you check?’, not ‘Did you checked?’". One past marker per verb phrase, and <i>did</i> has taken the job.' },
            { t: 'Did you checking the receipt?', ok: false,
              why: 'The -ing form belongs to the continuous, with was or were — never with <i>did</i>.' },
            { t: 'You did checked the receipt?', ok: false,
              why: 'Two faults: the word order of a statement, and <i>ed</i> after <i>did</i> again.' }
          ]
        },
        {
          q: '2. ‘I ______ the cash when he arrived.’ Which is correct?',
          evidence: 'the Watch out box: "use the past continuous … for the longer background action".',
          options: [
            { t: 'counted', ok: false,
              why: 'The past simple makes the counting a finished event, which puts the two actions side by side instead of one inside the other. The book warns about exactly this: use the continuous for the longer background action.' },
            { t: 'was counting', ok: true,
              why: 'Right — "I was counting the cash when he arrived." The counting was already running when the arriving happened, and only the continuous can say so.' },
            { t: 'was count', ok: false,
              why: 'The right auxiliary with the wrong form. <i>Was</i> always needs an -ing verb after it.' },
            { t: 'were counting', ok: false,
              why: 'The right tense, the wrong part of it. <i>I</i> takes <i>was</i>; <i>were</i> goes with you, we and they.' }
          ]
        },
        {
          q: '3. Which sentence puts the two tenses together the way the book shows?',
          evidence: 'the Grammar Focus row "Past continuous".',
          options: [
            { t: 'Fadi was counting the cash when Samah arrived.', ok: true,
              why: 'Right — the book’s own example. The long action is in the continuous, the short one that interrupts it is in the simple, and <i>when</i> marks the join.' },
            { t: 'Fadi counted the cash when Samah was arriving.', ok: false,
              why: 'The tenses have been swapped, so the sentence now says the arrival took a long time and the counting happened inside it — the opposite picture.' },
            { t: 'Fadi was counting the cash when Samah was arriving.', ok: false,
              why: 'Two long actions and nothing to interrupt. Grammatically possible, but it is not the shape the book is teaching.' },
            { t: 'Fadi counted the cash when Samah arrived.', ok: false,
              why: 'Both finished, so they read as two events one after the other: he counted, and then she came. The whole point is that one was already under way.' }
          ]
        }
      ]
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2C', bookRef: 'Unit 2 · Part 2', type: 'choiceinline',
      title: 'Finished, or still running?',
      instruction: 'Every sentence below is from this unit. Decide whether the verb names a finished action or one that was still running, then choose the form.',
      whyTitle: 'Which word decided it',
      items: [
        { text: 'Yesterday, Fadi {{recorded|was recording}} every transaction.', answer: 0,
          why: '"Yesterday" closes the day, so the action is finished: the past simple. A regular verb, so <i>ed</i>.' },
        { text: 'He {{writed|wrote}} the entry in the journal.', answer: 1,
          why: 'Irregular. <i>Write</i> has no <i>ed</i> form at all — the past is <b>wrote</b>, and it has to be learned rather than built.' },
        { text: 'While he {{counted|was counting}} the cash, Samah arrived.', answer: 1,
          why: '"While" is the signal for the longer action, so the continuous. The arriving is the short one that lands inside it.' },
        { text: 'The team {{didn’t forget|didn’t forgot}} the receipt.', answer: 0,
          why: '<i>Did not</i> has already made it past, so the main verb goes back to its base form: <b>forget</b>, not <i>forgot</i>.' },
        { text: '{{Did you post|Did you posted}} the entry yesterday?', answer: 0,
          why: 'The same rule in a question. This is the book’s own Watch-out sentence.' },
        { text: 'Last month, money {{comed|came}} in and went out.', answer: 1,
          why: 'Another irregular, and the opening Read uses it: "money came in and money went out". Notice that <i>went</i> in the same sentence is irregular too.' }
      ]
    }
  ]
});
