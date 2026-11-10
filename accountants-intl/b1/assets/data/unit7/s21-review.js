/* Unit 7 · s21-review — Review
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s21-review', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Review',
    page: 7,
    section: '21',
    lesson: 'Part 8 · Review',
    title: 'Review'
  },
  objective: 'Vocabulary Quiz',
  cards: [
    {
      id: 'c1',
      covers: ['8A'],
      ref: '8A',
      bookRef: 'Unit 7 · 8A',
      type: 'dragmatch',
      title: 'Vocabulary Quiz',
      instruction: 'Match the comparison word to the appropriate category. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Category — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. Worse than expected' },
        { id: 'm-b', label: 'b. Actual results' },
        { id: 'm-c', label: 'c. Budgeted figure' },
        { id: 'm-d', label: 'd. Better than expected' },
        { id: 'm-e', label: 'e. Prediction of future results' },
        { id: 'm-f', label: 'f. Money spent' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Favorable',
          accept: 'm-d',
          why: '<b>Favorable</b> — Better than expected. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Forecast',
          accept: 'm-e',
          why: '<b>Forecast</b> — Prediction of future results. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Actuals',
          accept: 'm-b',
          why: '<b>Actuals</b> — Actual results. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Adverse',
          accept: 'm-a',
          why: '<b>Adverse</b> — Worse than expected. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Budget',
          accept: 'm-c',
          why: '<b>Budget</b> — Budgeted figure. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Underperformed',
          accept: 'm-f',
          why: '<b>Underperformed</b> — Money spent. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Favorable',
        a: 'Better than expected. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      notes: [
        {
          title: 'One option does not fit its term',
          body: '<i>Underperformed</i> means <i>achieved less than the target</i> — as Unit 7 itself defines it in 1A. The only option left for it here is <i>Money spent</i>, which defines <i>expenditure</i>. Match it by elimination; the mismatch is the book\'s, and it is in the errata.'
        }
      ],
      visual: { spot: 'forecast', caption: 'Forecast — one of the words on this list.' }
    },
    {
      id: 'c2',
      covers: ['8A'],
      ref: '8A',
      bookRef: 'Unit 7 · 8A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Favorable', 'Forecast', 'Actuals', 'Adverse', 'Budget', 'Underperformed'],
      visual: { spot: 'budget', caption: 'Review · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['8B'],
      ref: '8B',
      bookRef: 'Unit 7 · 8B',
      type: 'cloze',
      title: 'Grammar Quiz',
      instruction: 'Complete the sentence with the correct form of the adjective in parentheses. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">2. Our profit margin is much [[2]] (good) than our closest competitor.<br>3. The EUR 10,000 shortfall is the [[3]] (large) problem this month.<br>4. The salary variance is not [[4]] (alarming) as the utilities variance.<br>5. Region B is performing [[5]] (poor) than Region A.</div>',
      answers: { '2': ['better'], '3': ['largest'], '4': ['as alarming'], '5': ['worse'] },
      bank: ['as alarming', 'better', 'largest', 'worse'],
      whyTitle: 'What decided each one',
      why: {
        '2': '<b>better</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>largest</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>as alarming</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>worse</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> Our profit margin is much <u>better</u> (good) than our closest competitor.',
      visual: { spot: 'trial-balance', caption: 'Review · Grammar Quiz', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 7 · 8C',
      type: 'study',
      source: 'book',
      title: 'Real-Life Simulation: The Monthly Review Meeting',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> A meeting to discuss the monthly P&amp;L (Profit &amp; Loss) statement.</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'obsolete',
        caption: 'Review · Real-Life Simulation: The Monthly Review Meeting',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c5',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 7 · 8C',
      type: 'roleplay',
      title: 'Real-Life Simulation: The Monthly Review Meeting',
      instruction: 'Take each card in turn.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'Group CFO (Student A): Ask for the worst and best performing items (Use Superlative). ("What was the largest adverse variance, and what was the most favorable result?")'
        },
        {
          who: 'B',
          notes: 'Financial Analyst (Student B): Answer by comparing two figures (Use Comparative). ("The Marketing cost was 20% higher than the budget, but sales revenue was 5% better than last month.")'
        },
        {
          who: 'C',
          notes: 'Department Head (Student C): Justify the overspend by stating that it was necessary (Use Comparative). ("The extra spend was more beneficial than the initial budget saving would have been.")'
        }
      ],
      coach: { title: 'What this is practising', target: 'Adjectives', taught: [] },
      model: 'The largest adverse variance was payroll and the best performing item was gross profit. Payroll was more significant than we projected because we had three more employees than budgeted.',
      visual: { spot: 'variance', caption: 'Take each card in turn.' },
      remember: []
    },
    {
      id: 'c6',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 7 · 8D',
      type: 'study',
      source: 'book',
      title: 'Extension Writing: The "Efficiency Improvement" Plan',
      instruction: 'Write a short plan (80 words) on how to make two expense categories more efficient.',
      html: '<p>Style: Use Comparatives and Superlatives to justify the changes.</p>',
      playable: [{ t: 'Use Comparatives and Superlatives to justify the changes.', role: 'narrator' }],
      doneLabel: 'I have read this',
      visual: {
        spot: 'entry',
        caption: 'Review · Extension Writing: The "Efficiency Improvement" Plan',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c7',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 7 · 8D',
      type: 'writer',
      title: 'Extension Writing: The "Efficiency Improvement" Plan',
      instruction: 'Write a short plan (80 words) on how to make two expense categories more efficient.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'To improve efficiency, we must focus on utilities and travel. Travel cost is the most expensive variable cost. We will only authorize flights that are cheaper than rail tickets. For utilities, we will install smart meters, which will make our energy usage less wasteful than it is now. Our overall goal is to have the lowest operating cost in the industry.',
      coach: {
        title: 'What this is practising',
        target: 'Adjectives',
        taught: [
          'Write a short plan (80 words) on how to make two expense categories more efficient.',
          'Example: "To improve efficiency, we must focus on utilities and travel. Travel cost is the most expensive variable cost. We will only authorize flights that are cheaper than rail tickets. For utilities, we will install smart meters, which will make our energy usage less wasteful than it is now. Our overall goal is to have the lowest operating cost in the industry."'
        ]
      },
      visual: { spot: 'variance', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c8',
      covers: ['8E'],
      ref: '8E',
      bookRef: 'Unit 7 · 8E',
      type: 'checklist',
      title: 'Self-Assessment Checklist',
      instruction: 'Rate yourself (1-5):',
      selfAssess: true,
      items: [
        { t: 'I can identify favorable and adverse variances. [ ]' },
        {
          t: 'I can use Comparative adjectives (better/worse/more/less) to compare two financial figures. [ ]'
        },
        {
          t: 'I can use Superlative adjectives (best/worst/most/least) to identify the highest or lowest item. [ ]'
        },
        { t: 'I can explain why actual costs are higher than budget figures. [ ]' },
        { t: 'I can write a clear summary report using comparison language. [ ]' }
      ],
      visual: { spot: 'bookkeeping', caption: 'Review · Self-Assessment Checklist', cls: 'vis-sm' }
    }
  ],
  prev: 's20-pronunciation',
  prevLabel: 'Pronunciation',
  next: 's22-extension',
  nextLabel: 'Extension'
});
