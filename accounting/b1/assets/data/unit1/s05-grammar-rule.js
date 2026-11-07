/* Unit 1 §5 — Part 2, the rule.

   The learner completes the rule before reading it: ruleGate holds the
   explanation shut until the blanks are right, so the rule is worked out
   rather than skimmed. The Grammar Focus table is the book's own, and the
   two reused figures (tense-timeline, two-actions) are subject-neutral
   grammar drawings from the engine, not cyber content. */
EAFM.page('u1-s05', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 2', page: 1, section: '5',
          lesson: 'Part 2 · Grammar', title: 'The present simple and the present continuous' },
  objective: 'Know which tense answers which question, and why',
  prev: 's04-vocab-mcq', prevLabel: 'Terminology',
  next: 's06-grammar-gap', nextLabel: 'Controlled practice',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A', bookRef: 'Unit 1 · Part 2', type: 'study',
      title: 'Work out the rule, then read it',
      instruction: 'Finish the five blanks below. The examples you need are in the picture and in the text you have already read. The full explanation opens underneath once they are right.',
      visual: { art: 'tense-timeline',
        caption: 'Two tenses, two different questions. One is about every day; the other is about this moment.' },
      ruleGate: {
        title: 'Five blanks, and the rule is yours',
        lead: 'Fadi records the transactions every morning. Right now, he is checking the cash box. Everything below follows from those two sentences.',
        text: 'We use the present <b>simple</b> for routines, habits and [[1]].<br>' +
          'With he, she and it, we add an [[2]] to the verb: <i>Fadi record<u>s</u></i>.<br>' +
          'We use the present <b>continuous</b> for an action happening [[3]].<br>' +
          'We form it with am, is or are, plus the verb and [[4]].<br>' +
          'The present simple answers <i>what do you usually do?</i>; the present continuous answers <i>what are you doing [[5]]?</i>',
        banks: {
          '1': ['facts', 'plans', 'questions', 'mistakes'],
          '2': ['s', 'ed', 'ing', 'es only'],
          '3': ['now', 'yesterday', 'every week', 'next month'],
          '4': ['ing', 'ed', 's', 'to'],
          '5': ['now', 'usually', 'every day', 'last year']
        },
        answers: { '1': 'facts', '2': 's', '3': 'now', '4': 'ing', '5': 'now' },
        after: 'Watch the second one: the <i>s</i> goes on the verb, not on the person. <i>Fadi records</i>, never <i>Fadi record</i> — and never <i>Fadis record</i> either.'
      },
      tables: [
        {
          title: 'Grammar Focus — the book’s own table',
          head: ['Form', 'Example', 'Note'], grammar: true,
          rows: [
            ['Present simple (routine)', 'Fadi records the transactions every morning.', 'add s with he/she/it'],
            ['Present simple (fact)', 'The finance team looks after the money.', 'general truth'],
            ['Present continuous (now)', 'Right now, Fadi is checking the cash box.', 'am/is/are + verb-ing'],
            ['Both together', 'I usually work here, but today I am training Samah.', 'routine + now']
          ]
        }
      ],
      html:
        '<div class="note"><h4>Remember</h4><p>Present simple = routines, habits, facts (add s with he/she/it). ' +
        'Present continuous = am/is/are + verb-ing, for an action happening now. ' +
        'Simple answers ‘what do you usually do?’; continuous answers ‘what are you doing now?’</p></div>',
      doneLabel: 'I have worked out the rule'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B', bookRef: 'Unit 1 · Part 2 · Watch out', type: 'quizset',
      title: 'The two mistakes the book warns about',
      instruction: 'The book’s <b>Watch out</b> box names two errors. Each question below is one of them, taken from a sentence in this unit.',
      visual: { art: 'two-actions',
        caption: 'A routine runs across the whole line; what is happening now is a point on it.' },
      items: [
        {
          q: '1. Which sentence is correct?',
          evidence: 'the Watch out box: "do not forget the ‘s’ with he, she, and it".',
          options: [
            { t: 'Fadi record the cash every day.', ok: false,
              why: 'This is the first mistake the book names. <i>Fadi</i> is he, so the verb needs the s: <i>Fadi record<u>s</u></i>. The adverb "every day" is right — only the ending is wrong.' },
            { t: 'Fadi records the cash every day.', ok: true,
              why: 'Right. A routine, so the present simple; a he, so the s. Both decisions are visible in one word.' },
            { t: 'Fadi is record the cash every day.', ok: false,
              why: 'Two faults at once: the continuous is built with the -ing form (<i>is recording</i>), and "every day" wants the simple anyway.' },
            { t: 'Fadi recording the cash every day.', ok: false,
              why: 'The -ing form cannot stand alone as a verb. It always needs am, is or are in front of it.' }
          ]
        },
        {
          q: '2. Right now, Fadi _____ the bank balance. Which is correct?',
          evidence: 'the Watch out box: "use the continuous, not the simple, for right now".',
          options: [
            { t: 'checks', ok: false,
              why: 'The present simple describes a routine. With "Right now" in front of it, this says a habit is happening at this instant — which is the second mistake the book names.' },
            { t: 'check', ok: false,
              why: 'Wrong in both tenses: the simple would need <i>checks</i> for he, and the continuous would need <i>is checking</i>.' },
            { t: 'is checking', ok: true,
              why: 'Right — and it matches the book exactly: "Right now, Fadi is checking the cash box." The signpost "Right now" decides the tense before you even reach the verb.' },
            { t: 'are checking', ok: false,
              why: 'The right tense, the wrong part of it. Fadi is one person: <i>is</i>, not <i>are</i>.' }
          ]
        },
        {
          q: '3. Which sentence uses BOTH tenses the way the book shows?',
          evidence: 'the Grammar Focus row "Both together".',
          options: [
            { t: 'I usually work here, but today I am training Samah.', ok: true,
              why: 'Right — the book’s own example. The simple carries the routine ("usually work"), the continuous carries today ("am training"), and "but" marks the difference between them.' },
            { t: 'I usually am working here, but today I train Samah.', ok: false,
              why: 'The two tenses have been swapped. "Usually" wants the simple and "today" wants the continuous; this sentence does the opposite of both.' },
            { t: 'I work here, but today I work with Samah.', ok: false,
              why: 'Both halves are the simple, so nothing marks today as different from any other day — which was the whole point of the sentence.' },
            { t: 'I am working here, but today I am training Samah.', ok: false,
              why: 'Both halves are continuous, so the routine disappears. "Usually" and "today" need different tenses to make the contrast visible.' }
          ]
        }
      ]
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2C', bookRef: 'Unit 1 · Part 2', type: 'choiceinline',
      title: 'Let the time marker choose the tense',
      instruction: 'Every sentence below is from this unit. In each one the time marker has already decided the answer — find it first, then choose the verb.',
      whyTitle: 'Which word decided it',
      items: [
        { text: 'Every morning, Fadi {{records|is recording}} the transactions.', answer: 0,
          why: '"Every morning" is a routine, so the present simple — and <i>Fadi</i> is he, so the verb takes the s.' },
        { text: 'Right now, Fadi {{checks|is checking}} the cash box.', answer: 1,
          why: '"Right now" fixes the sentence to this moment, so am/is/are + -ing. This is the book’s own sentence.' },
        { text: 'The finance team {{look|looks}} after the money.', answer: 1,
          why: 'A general truth, with no time marker at all — the book calls this the "fact" use of the simple. <i>Team</i> is one thing, so it takes the s.' },
        { text: 'The donors {{wait|are waiting}} for the numbers at the moment.', answer: 1,
          why: '"At the moment" is the same signal as "right now". Note <i>are</i>, not <i>is</i>, because "donors" is plural.' },
        { text: 'Every month, I {{prepare|am preparing}} a report for the managers.', answer: 0,
          why: '"Every month" is a routine even though it is not daily. How often does not matter; being regular does. And <i>I</i> never takes the s.' },
        { text: 'I usually work in the office, but today I {{visit|am visiting}} a partner.', answer: 1,
          why: 'The book’s "both together" example. The first half is the routine, so "today" has to be the continuous — otherwise nothing marks today as different.' }
      ]
    }
  ]
});
