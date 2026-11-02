CSB1.page('u1-l3-s3', {
  book: { page: 10, section: 3, lesson: 'Lesson 3 · Grammar', title: 'Listen for the tenses to determine the meaning' },
  objective: 'Use present and past tense to describe study habits and learning',
  prev: 'l3-s2-yesno-questions', prevLabel: 'Yes / no questions',
  next: 'l3-s4-use-verb-forms', nextLabel: 'Use the verb forms',
  cards: [
    {
      id: 'c3', ref: '3', bookRef: 'p.10 · 3', type: 'scene',
      title: 'Check the tense you hear each speaker use',
      instruction: 'Ten analysts each say one line on the SOC floor. Listen and check (✓) the tense you hear each speaker use. This is a listening task, so the transcript stays locked until your first attempt.',
      scene: 'u1-ten-voices',
      visual: {
        art: 'tense-timeline',
        caption: 'You are listening for the helper verb, not for the meaning. Keep this in view: "was/were + -ing" is a stretch of past time, "am/is/are + -ing" is right now.'
      },
      after: 'Tip: <b>was / were + -ing</b> is past continuous; <b>am / is / are + -ing</b> is present continuous. A plain <b>-ed</b> or an irregular form such as <i>wrote</i> is simple past.',
      quiz: {
        type: 'checkgrid',
        colGroup: 'Speaker',
        rows: ['Simple present', 'Present continuous', 'Simple past', 'Past continuous'],
        whyTitle: 'What you were listening for, speaker by speaker',
        cols: [
          {
            line: 'I check the alert queue every morning.', answer: 0, voice: 'f',
            why: 'No helper verb at all, and "every morning" after it. A bare verb plus a frequency phrase is the simple present.'
          },
          {
            line: 'I am reading the incident report right now.', answer: 1, voice: 'm',
            why: '"am" + "reading". The helper is present and the verb ends in -ing, so it is happening as she speaks — and "right now" says so twice.'
          },
          {
            line: 'We patched all the servers last night.', answer: 2, voice: 'f',
            why: '"patched" ends in -ed with no helper in front of it, and "last night" is finished time. One completed action, so the simple past.'
          },
          {
            line: 'I was watching the dashboard when the alarm started.', answer: 3, voice: 'm',
            why: '"was" + "watching" is the pair to listen for. The long action was already running when the short one — "started" — cut across it.'
          },
          {
            line: 'She writes a summary after every shift.', answer: 0, voice: 'f',
            why: 'The -s on "writes" is the only sound that marks this one, so it is the hardest to hear. "After every shift" confirms it is a habit.'
          },
          {
            line: 'They are testing the new firewall at the moment.', answer: 1, voice: 'm',
            why: '"are" + "testing". Are rather than is because "they" is plural — but the tense is decided by are being present, not by how many people there are.'
          },
          {
            line: 'He reported the phishing email on Tuesday.', answer: 2, voice: 'f',
            why: '"reported" with no helper, and a named day. Compare speaker 4: "was watching" has a helper and this does not, which is the whole difference.'
          },
          {
            line: 'We were training the new analysts all afternoon.', answer: 3, voice: 'm',
            why: '"were" + "training". Were is the plural of was, so it is still a past continuous — "all afternoon" is the stretch of time it filled.'
          },
          {
            line: 'The team backs up the files every Friday.', answer: 0, voice: 'f',
            why: '"backs" takes -s because "the team" counts as one thing. Listen past the -s to "every Friday", which is what actually fixes the tense.'
          },
          {
            line: 'I am learning five new commands this week.', answer: 1, voice: 'm',
            why: '"am" + "learning". "This week" sounds like a habit but is not finished yet, and the helper am settles it: present continuous.'
          }
        ]
      }
    }
  ]
});
