/* Unit 2 · s11-listening-3 — Listening 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s11-listening-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Listening 3',
    page: 2,
    section: '11',
    lesson: 'Part 3 · Listening',
    title: 'Listening 3'
  },
  objective: 'Passage 3: The System Crash (Financial Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 2 · 3C',
      type: 'study',
      source: 'book',
      title: 'Passage 3: The System Crash (Financial Context)',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> An IT specialist explains why data processing stopped suddenly.</p><div class="script"><p>IT Specialist: "The system went down suddenly at 4:30 PM Central European Time. I was running the year-end report when the server overheated. The data entry team in Kraków was still processing the final batches of invoices, so they lost about 30 minutes of work. Fortunately, we had backed up the main ledger at 4:00 PM, so we didn\'t lose all the data. We restarted the servers 20 minutes later, and everyone went back to work."</p></div>',
      playable: [
        {
          t: 'The system went down suddenly at 4:30 PM Central European Time. I was running the year-end report when the server overheated. The data entry team in Kraków was still processing the final batches of invoices, so they lost about 30 minutes of work. Fortunately, we had backed up the main ledger at 4:00 PM, so we didn\'t lose all the data. We restarted the servers 20 minutes later, and everyone went back to work.',
          role: 'spk:IT Specialist',
          who: 'IT Specialist'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'The last listening, and the gaps below are the grammar of this unit. Play it once for the sense, then again for the form you are filling in.',
      visual: { spot: 'ledger', caption: 'Listening · Passage 3: The System Crash (Financial Context)' }
    },
    {
      id: 'c2',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 2 · 3C',
      type: 'cloze',
      title: 'Passage 3: The System Crash (Financial Context)',
      instruction: 'Complete each line.',
      text: '<div style="font-size:16px;line-height:2.4">1. Time of Crash: The system [[1]] (go down) at 4:30 PM.<br>2. Ongoing Activity: The IT specialist [[2]] (run) the year-end report when the server overheated.<br>3. Interruption: The data entry team [[3]] (still process) the final batches of invoices.<br>4. Recovery: They [[4a]] (not lose) all the data because they [[4b]] (back up) the ledger earlier.</div>',
      answers: {
        '1': ['went down'],
        '2': ['was running'],
        '3': ['was still processing'],
        '4a': ['did not lose'],
        '4b': ['had backed up']
      },
      bank: ['did not lose', 'had backed up', 'was running', 'was still processing', 'went down'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>went down</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>was running</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>was still processing</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4a': '<b>did not lose</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4b': '<b>had backed up</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> Time of Crash: The system <u>went down</u> (go down) at 4:30 PM.',
      visual: {
        spot: 'reporting',
        caption: 'Listening · Passage 3: The System Crash (Financial Context)',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's10-listening-2',
  prevLabel: 'Listening 2',
  next: 's12-speaking-phrases',
  nextLabel: 'Speaking · phrases'
});
