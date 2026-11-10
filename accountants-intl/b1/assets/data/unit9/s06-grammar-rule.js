/* Unit 9 · s06-grammar-rule — Grammar · the rule
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s06-grammar-rule', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Grammar · the rule',
    page: 9,
    section: '06',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · the rule'
  },
  objective: 'Grammar Context: The Job Interview',
  cards: [
    {
      id: 'c1',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 9 · 2A',
      type: 'study',
      source: 'book',
      title: 'Grammar Context: The Job Interview',
      instruction: 'An applicant is describing their experience.',
      html: '<p>Interviewer: "What have you achieved since joining your current firm?"</p><p>Applicant: "Well, I have managed the entire payroll process for two years now. Also, I have recently finished a specialist course on international tax law. I have not utilized that knowledge in a live project yet, but I am ready to do so."</p>',
      playable: [
        {
          t: 'What have you achieved since joining your current firm?',
          role: 'spk:Interviewer',
          who: 'Interviewer'
        },
        {
          t: 'Well, I have managed the entire payroll process for two years now. Also, I have recently finished a specialist course on international tax law. I have not utilized that knowledge in a live project yet, but I am ready to do so.',
          role: 'spk:Applicant',
          who: 'Applicant'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'entry', caption: 'Grammar · Grammar Context: The Job Interview' }
    },
    {
      id: 'c2',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 9 · 2A',
      type: 'cloze',
      title: 'Grammar Context: The Job Interview',
      instruction: 'An applicant is describing their experience.',
      text: '<div style="font-size:16px;line-height:2.4">1. Which verbs are used to form the Present Perfect Simple in the text? (HAVE/HAS + [[1]]).</div>',
      answers: { '1': ['HAVE / HAS + the past participle.'] },
      bank: ['HAVE / HAS + the past participle.'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>HAVE / HAS + the past participle.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> Which verbs are used to form the Present Perfect Simple in the text? (HAVE/HAS + <u>HAVE / HAS + the past participle.</u>).',
      visual: { spot: 'certification', caption: 'Grammar · Grammar Context: The Job Interview', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 9 · 2A',
      type: 'study',
      source: 'key',
      title: 'Grammar Context: The Job Interview',
      instruction: 'Answer each one for yourself first, then read the answer.',
      html: '<ol><li><b>Which words (since, for, recently, yet) signal the use of the Present Perfect Simple?</b><br>since, for, recently, yet — and also just, already and ever.</li><li><b>Why is it used instead of Past Simple (e.g., I managed the payroll)?</b><br>Because the action is still connected to now: the time period is unfinished, or the result still matters today. The Past Simple would put it in a finished time.</li></ol>',
      doneLabel: 'I have checked my answers',
      visual: { spot: 'balance', caption: 'Grammar · Grammar Context: The Job Interview', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['2B'],
      ref: '2B',
      bookRef: 'Unit 9 · 2B',
      type: 'study',
      source: 'book',
      title: 'Grammar Focus Box: Present Perfect Simple',
      instruction: 'Read this before you go on.',
      html: '<table class="bt"><thead><tr><th>Form</th><th>Positive Example</th><th>Negative Example</th><th>Question Example</th></tr></thead><tbody><tr><td>HAVE / HAS + P.P. (Past Participle)</td><td>I have worked in audit since 2019.</td><td>He hasn\'t finished the report yet.</td><td>Have you ever used Xero?</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'invoice',
        caption: 'Grammar · Grammar Focus Box: Present Perfect Simple',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's05-vocab-build',
  prevLabel: 'Word building',
  next: 's07-grammar-practice',
  nextLabel: 'Grammar · practice'
});
