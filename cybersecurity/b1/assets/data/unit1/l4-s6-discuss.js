CSB1.page('u1-l4-s6', {
  book: { page: 13, section: 6, lesson: 'Lesson 4 · Everyday Conversation', title: 'Discuss' },
  objective: 'Talk about career choices and your strengths and weaknesses',
  prev: 'l4-s5-listening-details', prevLabel: 'Listening for details',
  next: 'l5-s1-read-ask-allison', nextLabel: 'Lesson 5 · Reading',
  cards: [
    {
      id: 'c6a', ref: '6A', bookRef: 'p.13 · 6A', type: 'chipcols',
      title: 'What job skills do you need?',
      instruction: 'Work in a group. Read the question and collaborate to make a chart. <b>What job skills do you need for each of these cyber jobs?</b> A skill can belong to more than one job — that is the point. Add your own ideas too.',
      visual: {
        art: 'job-skills',
        caption: 'Five jobs, and a bar of skills that all five need. The interesting question is not which skills are on the list — it is which ones belong to every column.'
      },
      notes: [{
        title: 'Speaking note — agreeing',
        warm: true,
        body: '<div>I agree. · You may be right. · I see what you mean. · I completely agree. · I couldn\'t agree more.</div>' +
          '<div style="margin-top:8px"><b>A:</b> I think that a SOC analyst needs to be able to…</div><div><b>B:</b> I agree and would add…</div>'
      }],
      allowOwn: true,
      need: 8,
      /* No answers, deliberately: a skill really does belong to more
         than one job, and the card says so. But a sort that scores
         nothing must still teach something, so every skill is
         explained once the learner has committed to a placement. */
      reference: true,
      poolLabel: 'Drag each skill into a job column — or click the skill, then click a column. One skill can go in several columns if you add it more than once; put it where it matters most.',
      cols: [
        { label: 'SOC analyst' },
        { label: 'Network engineer' },
        { label: 'Penetration tester' },
        { label: 'Help-desk technician' },
        { label: 'Security awareness trainer' }
      ],
      pool: [
        'stay calm under pressure', 'write clear reports', 'read network diagrams',
        'explain things simply', 'think like an attacker', 'listen patiently',
        'work night shifts', 'configure firewalls', 'teach a class',
        'follow a procedure exactly', 'notice small details', 'be polite on the phone',
        'keep a secret', 'learn new tools quickly'
      ],
      whyTitle: 'Where a working team would put each one — and why there is no single right answer',
      why: {
        'stay calm under pressure':
          'Every column. The SOC analyst at three in the morning, the help-desk technician with an angry caller, the tester who has just broken something live. If a skill is in all five, that is the finding, not a mistake.',
        'write clear reports':
          'Every column again, and the one most people leave out. The next shift, the manager and sometimes a court read what you wrote. A finding nobody can read was not found.',
        'read network diagrams':
          'Strongest for the network engineer and the penetration tester, who both have to see the shape of a network before they touch it. The SOC analyst needs it to know what an alert is actually about.',
        'explain things simply':
          'The trainer first, then the help desk. Also the tester: a report that only another tester understands will not get the hole fixed.',
        'think like an attacker':
          'The penetration tester by definition, and the SOC analyst in reverse — to spot an attack you have to be able to imagine making one.',
        'listen patiently':
          'The help desk above all. Most of what a caller says is not the problem; the patience is what gets you to the part that is.',
        'work night shifts':
          'The SOC analyst, and sometimes the engineer doing a change window. Not a skill in the usual sense, but a real condition of the job and worth knowing before you choose it.',
        'configure firewalls':
          'The network engineer. The SOC analyst reads what the firewall logged but usually cannot change it — that separation is deliberate.',
        'teach a class':
          'The trainer. Note how few of these skills are technical: awareness training is a people job that happens to be about security.',
        'follow a procedure exactly':
          'The SOC analyst and the engineer. In an incident the procedure exists so that nobody has to invent one at speed, and improvising destroys evidence.',
        'notice small details':
          'Everyone, but it decides the SOC analyst and the tester. One character different in a domain name is the whole of a phishing attack.',
        'be polite on the phone':
          'The help desk, and more than it sounds: people who are treated well report their mistakes, and a reported mistake is one you can still fix.',
        'keep a secret':
          'Every column. You will know about holes that are not fixed yet, and saying so outside the team is how they get used.',
        'learn new tools quickly':
          'Every column. The tools in all five of these jobs will have changed within a few years; the willingness to start again is the skill that lasts.'
      }
    },
    {
      id: 'c6b', ref: '6B', bookRef: 'p.13 · 6B', type: 'report',
      title: 'Report the results of your discussion',
      instruction: 'Report the results of your discussion to the class. Use the stems, then listen to your own report.',
      visual: {
        art: 'podium-report',
        caption: 'Report the chart your group built, not your own list — and finish with the skill that turned up in every column.'
      },
      minWords: 25,
      placeholder: 'We think that a SOC analyst must know how to…',
      stems: [
        'We think that a SOC analyst must know how to…',
        'A penetration tester needs to be able to…',
        'We agreed that…',
        'I see what my group meant, but I would add…',
        'The skill that appeared in every job was…'
      ],
      coach: {
        title: 'Check your report before you give it',
        target: 'agreeing and adding: I agree and would add… · I see what you mean… · needs to be able to…',
        minWords: 25,
        taught: [
          'Agreeing: I agree. · You may be right. · I see what you mean. · I completely agree. · I couldn\'t agree more.',
          'Adjectives and adverbs for describing how somebody works (§3): careful/carefully, patient/patiently, accurate/accurately, calm/calmly, good/well, hard/hard.'
        ],
        source: {
          chart: 'Five cyber jobs — SOC analyst, network engineer, penetration tester, help-desk technician, security awareness trainer — and a pool of skills: stay calm under pressure, write clear reports, read network diagrams, explain things simply, think like an attacker, listen patiently, work night shifts, configure firewalls, teach a class, follow a procedure exactly, notice small details, be polite on the phone, keep a secret, learn new tools quickly.',
          label: 'THE CHART the learner\'s group built in 6A'
        },
        task: 'Report your group\'s chart to the class: which skills each cyber job needs, what the group agreed on, anything you would add, and which skill appeared in every job.',
        example: 'We think that a SOC analyst must know how to stay calm under pressure and write clear reports, because the next shift reads them. A penetration tester needs to be able to think like an attacker, but also to explain the problem simply afterwards. We agreed that the help-desk technician needs patience more than anything else. I see what my group meant, but I would add that a trainer has to notice small details too. The skill that appeared in every job was writing clear reports.',
        criteria: [
          { t: 'Names at least three of the five jobs.', auto: 'mentions', keys: ['soc analyst', 'analyst', 'network engineer', 'engineer', 'penetration tester', 'tester', 'help-desk', 'help desk', 'technician', 'trainer', 'awareness'], need: 3, fail: 'Name the jobs themselves — SOC analyst, penetration tester, help-desk technician — not just "the jobs".' },
          { t: 'Reports what the group agreed, not only your own view.', auto: 'mentions', keys: ['we agreed', 'we think', 'we decided', 'my group', 'our group', 'we put'], need: 1, fail: 'Use "We think that…" or "We agreed that…" — you are reporting for the team.' },
          { t: 'Names the skill that appeared in every job.', auto: 'mentions', keys: ['every job', 'all five', 'all the jobs', 'in every', 'appeared in'], need: 1, fail: 'Finish with "The skill that appeared in every job was…".' },
          { t: 'At least 25 words.', auto: 'words', min: 25 },
          { t: 'I used at least one agreeing phrase from the speaking note.', self: true },
          { t: 'I added one idea of my own as well as the group\'s.', self: true }
        ]
      }
    },
    {
      id: 'cty', ref: 'TY', bookRef: 'p.13 · Test yourself', type: 'checklist',
      title: 'Test yourself',
      instruction: 'Assess your participation in the group and class discussions. <b>Today I was able to…</b>',
      visual: {
        art: 'uncertainty-faces',
        caption: 'Two of the four things below are on this page: expressing uncertainty, and agreeing. Tick them only if you actually said something out loud.'
      },
      selfAssess: true,
      items: [
        { t: 'speak accurately' },
        { t: 'express uncertainty' },
        { t: 'ask questions' },
        { t: 'agree' }
      ]
    }
  ]
});
