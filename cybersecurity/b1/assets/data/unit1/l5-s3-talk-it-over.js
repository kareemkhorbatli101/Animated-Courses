CSB1.page('u1-l5-s3', {
  book: { page: 16, section: 3, lesson: 'Lesson 5 · Reading', title: 'Talk it over — active and passive learning' },
  objective: 'Identify free cybersecurity learning resources',
  prev: 'l5-s2-word-study-dis', prevLabel: 'Word study: dis-',
  next: 'atwork-s1-active-listening', nextLabel: 'At Work · Active listening',
  cards: [
    {
      id: 'c3a', ref: '3A', bookRef: 'p.16 · 3A', type: 'pyramid',
      title: 'Active versus passive learning',
      instruction: 'Before the graph: work out how good readers handle a chart like this. Then the pyramid opens — hover or click a tier to see what counts, and complete the sentences underneath.',
      visual: {
        art: 'active-passive',
        caption: 'The same finding, two columns. Everything on the left you receive; everything on the right you produce. Producing is what you still remember in two weeks.'
      },
      ruleGate: {
        title: 'How many times do you read a hard chart?',
        lead: 'A complex chart is read more than once, and each pass is looking for something different. <b>Put the three passes in order.</b>',
        visual: {
          art: 'three-passes',
          caption: 'Three passes over the same text or chart. Which comes first?'
        },
        text: 'First, read for [[1]].<br>Next, read for [[2]].<br>Then, read to find and work on [[3]].',
        bank: ['the general idea', 'the details', 'difficult vocabulary'],
        answers: { '1': 'the general idea', '2': 'the details', '3': 'difficult vocabulary' },
        after: 'Use exactly that order on the pyramid below — shape first, numbers second, words last.'
      },
      tiers: [
        { pct: 10, name: 'Reading', eg: 'reading a security policy', detail: 'Reading a security policy or a vendor advisory on your own. Passive learning — the lowest recall of all.' },
        { pct: 20, name: 'Listening', eg: 'a lecture or a webinar', detail: 'A lecture, a webinar, a recorded briefing. Still passive: you receive, you do not produce.' },
        { pct: 30, name: 'Looking / seeing', eg: 'network diagrams, dashboards, charts', detail: 'Viewing network diagrams, SOC dashboards, graphs and maps. Passive, but recall doubles.' },
        { pct: 50, name: 'Seeing and hearing', eg: 'demonstrations and guided lab walkthroughs', detail: 'Videos, demonstrations, a guided lab walkthrough, watching an analyst work on location. The top of the passive range.' },
        { pct: 70, name: 'Speaking', eg: 'group discussion, presenting a phishing analysis', detail: 'Giving a talk, group discussions, multi-media work, explaining a phishing email to your team. Active learning begins here.' },
        { pct: 90, name: 'Saying and doing', eg: 'hands-on labs, CTF practice, incident role-play', detail: 'Live practice, hands-on labs, capture-the-flag exercises, incident role-plays, tutoring somebody else. The highest recall there is — and what you are doing on this page.' }
      ],
      readerNote: 'Read complex charts and texts three or more times to understand them better. First, read for the general idea. Next, read for details. Then, read to find and work on difficult vocabulary.',
      /* Every one of these five answers is printed on the chart
         immediately above, so by the answer policy every one of them
         is a selection. Two of them used to be typed, with nine and
         five accepted phrasings and no bank — a learner who wrote a
         tenth correct phrasing was told they were wrong. */
      quiz: {
        type: 'quizset',
        items: [
          {
            q: '1. Which kind of learning leads to the best remembering?',
            evidence: 'the top two tiers of the pyramid, at 70% and 90%.',
            display: 'drop',
            options: [
              { t: 'Written', ok: false, why: 'Reading is on the chart, at the very bottom with 10%. Writing is not a tier at all.' },
              { t: 'Active', ok: true, why: 'Right — the two highest tiers, speaking at 70% and saying-and-doing at 90%, are both things you produce rather than receive.' },
              { t: 'Passive', ok: false, why: 'Passive is the bottom four tiers, from 10% to 50%. Those are the ones where the English arrives ready-made.' },
              { t: 'Visual', ok: false, why: 'Looking and seeing is one tier of the chart, at 30% — not one of the two halves it is divided into.' }
            ]
          },
          {
            q: '2. Which of these is an example of active learning?',
            evidence: 'look at what sits in the 70% and 90% tiers.',
            options: [
              { t: 'Watching a recorded lab walkthrough', ok: false, why: 'That is the 50% tier: seeing and hearing. It is the best of the passive kinds, and still only half as good as doing it.' },
              { t: 'Reading the vendor advisory carefully', ok: false, why: 'Reading is 10%, the bottom of the chart — and reading it carefully does not move it up a tier.' },
              { t: 'Studying a SOC dashboard screenshot', ok: false, why: 'Looking and seeing, at 30%. A diagram is easier to remember than prose, but you still produce nothing.' },
              { t: 'Doing a hands-on firewall lab and narrating what you are doing', ok: true, why: 'Right — the 90% tier. Your hands are busy and so is your mouth, which is why it is the highest on the chart.' }
            ]
          },
          {
            q: '3. What percentage of spoken learning is usually remembered after two weeks?',
            evidence: 'the speaking tier.',
            display: 'drop',
            options: [
              { t: '70%', ok: true, why: 'Right — one tier above watching a demonstration, one below doing the thing and talking about it at the same time.' },
              { t: '50%', ok: false, why: 'That is seeing and hearing: a demonstration or a guided walkthrough. You are still watching somebody else.' },
              { t: '30%', ok: false, why: 'That is looking and seeing — diagrams, dashboards, charts.' },
              { t: '90%', ok: false, why: 'That is the top tier, saying <b>and doing</b>. Speaking alone does not reach it.' }
            ]
          },
          {
            q: '4. Which of these is a sample speaking activity from the chart?',
            evidence: 'the 70% tier names three.',
            options: [
              { t: 'Watching an analyst work through an incident', ok: false, why: 'Seeing and hearing, 50%. Watching an expert is the most convincing kind of passive learning, which is what makes it a trap.' },
              { t: 'Taking a capture-the-flag exercise', ok: false, why: 'A real activity from the chart, but from the 90% tier — saying and doing, not speaking.' },
              { t: 'Explaining a phishing email to your study group', ok: true, why: 'Right — a group discussion, in the 70% tier. You have to find the words yourself, in front of people who will ask.' },
              { t: 'Listening to a security podcast on the way to work', ok: false, why: 'Listening is the 20% tier. Good use of the journey, and still the second-lowest thing on the chart.' }
            ]
          },
          {
            q: '5. Demonstrations are an example of which kind of learning?',
            evidence: 'find demonstrations on the chart, then ask which half it is in.',
            display: 'drop',
            options: [
              { t: 'Active', ok: false, why: 'You would have to be the one demonstrating. Watching produces nothing, however carefully you watch.' },
              { t: 'Neither — it is not on the chart', ok: false, why: 'It is on the chart: "demonstrations and guided lab walkthroughs", in the 50% tier.' },
              { t: 'Both equally', ok: false, why: 'The chart divides every tier into one or the other. The question to ask is always: am I receiving this, or producing something?' },
              { t: 'Passive', ok: true, why: 'Right. A demonstration is somebody else doing it while you watch — the top of the passive range at 50%, which is exactly why it feels more useful than it is.' }
            ]
          }
        ]
      }
    },
    {
      id: 'c3b', ref: '3B', bookRef: 'p.16 · 3B', type: 'chipcols',
      title: 'Raise your own recall',
      instruction: 'The learning activities below generally help learners remember or recall 30% or more of what they learned after two weeks. With a partner, list additional activities in each area that could increase your recall. One example is given in each column.',
      visual: {
        art: 'active-passive',
        caption: 'Ask one question about each activity before you place it: am I receiving this, or producing something? That decides which half of the chart it belongs in.'
      },
      poolLabel: 'Drag each activity to the tier it belongs to — or add your own.',
      allowOwn: true,
      need: 6,
      cols: [
        { label: 'Looking / seeing (30%)', seed: ['network diagrams'] },
        { label: 'Seeing and hearing (50%)', seed: ['demo videos'] },
        { label: 'Speaking (70%)', seed: ['study-group discussion'] },
        { label: 'Saying and doing (90%)', seed: ['incident role-play'] }
      ],
      /* The first nine ran straight up the chart — two at 30%, two at
         50%, two at 70%, three at 90% — so most of the card sorted
         itself by position. Scattered across the four bands, and it
         now opens on a 90% item so the list cannot be read as a
         ladder at all. */
      pool: [
        'a hands-on firewall lab', 'SOC dashboard screenshots', 'a vendor demonstration',
        'presenting a phishing analysis', 'a packet-capture diagram', 'tutoring a new trainee',
        'a conference talk with slides', 'an annotated attack map', 'a mock shift handover',
        'explaining a term to a classmate', 'a recorded lab walkthrough', 'a capture-the-flag exercise'
      ],
      answers: {
        'SOC dashboard screenshots': 0, 'an annotated attack map': 0, 'a packet-capture diagram': 0,
        'a recorded lab walkthrough': 1, 'a conference talk with slides': 1, 'a vendor demonstration': 1,
        'explaining a term to a classmate': 2, 'presenting a phishing analysis': 2,
        'a hands-on firewall lab': 3, 'a capture-the-flag exercise': 3, 'tutoring a new trainee': 3, 'a mock shift handover': 3
      },
      whyTitle: 'One question decides every one of these: what do you produce?',
      why: {
        'network diagrams': 'Given as an example. Your eyes do the work and nothing comes out of you, so 30% — better than prose, and still the bottom half of the chart.',
        'demo videos': 'Given as an example. Sound and picture together, at 50%. Two senses are better than one, but you are still watching.',
        'study-group discussion': 'Given as an example. The moment you have to say it to somebody, you find out which words you do not have. That is why speaking is 70%.',
        'incident role-play': 'Given as an example. Saying and doing at once, at 90%, and the closest thing on this chart to the real job.',
        'SOC dashboard screenshots': 'Looking, at 30%. A still picture of a dashboard tells you what it looked like, not what you would have done about it.',
        'an annotated attack map': 'Looking, at 30%. The annotations help, but somebody else wrote them — if you annotated it yourself it would move two tiers up.',
        'a packet-capture diagram': 'Looking, at 30%. A diagram of a capture is not a capture: open the file yourself and you are at 90%.',
        'a recorded lab walkthrough': 'Seeing and hearing, at 50%. Somebody is doing the lab and explaining it, and both of those are still theirs, not yours.',
        'a conference talk with slides': 'Seeing and hearing, at 50%. The most enjoyable thing on this half of the chart, and still half as good as doing it.',
        'a vendor demonstration': 'Seeing and hearing, at 50%. Designed to be convincing, which is a reason to be careful rather than a reason it teaches more.',
        'explaining a term to a classmate': 'Speaking, at 70%. You have to put it in your own words, and their face tells you immediately whether it worked.',
        'presenting a phishing analysis': 'Speaking, at 70%. Producing the whole explanation out loud, in order, to people who can ask you questions.',
        'a hands-on firewall lab': 'Saying and doing, at 90%. Your hands are on the thing, so a mistake is real and you remember it.',
        'a capture-the-flag exercise': 'Saying and doing, at 90%. You produce the solution rather than recognise it, and nobody can tell you the answer.',
        'tutoring a new trainee': 'Saying and doing, at 90%. Teaching is the hardest test of whether you actually know something, which is why it sits at the top.',
        'a mock shift handover': 'Saying and doing, at 90%. You produce the report, say it aloud, and answer for it — exactly what the At Work lesson asks of you.'
      }
    },
    {
      id: 'c3c', ref: '3C', bookRef: 'p.16 · 3C', type: 'picker',
      title: 'Talk about your ideas',
      instruction: 'Talk about your ideas with your classmates. First commit to one change: pick the activity and the evening. Then say what passive habit it replaces.',
      visual: {
        art: 'study-week',
        caption: 'A plan with no day in it is a wish. Pick the activity <i>and</i> the evening — then the week below is yours rather than the book\'s.'
      },
      frame: 'This week I will add [[act]] to my study week, on [[day]].',
      banks: {
        act: {
          label: 'Choose an activity from the 70% or 90% tiers…',
          items: [
            'a hands-on firewall lab',
            'a capture-the-flag exercise',
            'tutoring a new trainee',
            'a mock shift handover',
            'explaining a term to a classmate',
            'presenting a phishing analysis',
            'a study-group discussion'
          ]
        },
        day: {
          label: 'Choose a day…',
          items: ['Monday evening', 'Tuesday evening', 'Wednesday evening', 'Thursday evening', 'Friday evening', 'Saturday morning', 'Sunday afternoon']
        }
      },
      answers: {
        act: [
          'a hands-on firewall lab', 'a capture-the-flag exercise', 'tutoring a new trainee',
          'a mock shift handover', 'explaining a term to a classmate',
          'presenting a phishing analysis', 'a study-group discussion'
        ]
      },
      hintText: 'Every activity in the list is from the 70% or 90% tier — so any of them is a right answer. The day is the part people leave out.',
      why: {
        q: 'Which passive activity do you do most at the moment, and how will this replace or change it?',
        placeholder: 'I usually… I could change it by…',
        minWords: 12,
        model: 'I usually just read advisories on my own, which is 10% on the pyramid. On Thursday evenings I will summarise each one out loud to my study partner instead, which moves the same half hour from 10% to 70%.'
      },
      coach: {
        title: 'Check your plan',
        target: 'will for plans; comparing with because / instead of / which moves',
        minWords: 12,
        taught: [
          'The learning pyramid: reading 10%, listening 20%, looking 30%, seeing and hearing 50%, speaking 70%, saying and doing 90%.',
          'Passive means you receive; active means you produce.'
        ],
        source: {
          chart: 'The learning pyramid: reading a security policy 10%; a lecture or webinar 20%; network diagrams and dashboards 30%; demonstrations and guided lab walkthroughs 50%; group discussion and presenting a phishing analysis 70%; hands-on labs, CTF practice, incident role-play and tutoring somebody else 90%.',
          label: 'THE CHART the learner is working from (3A)'
        },
        task: 'Name the passive activity you do most, and say how the active activity you chose will replace or change it. Refer to the percentages on the pyramid.',
        example: 'I usually just read advisories on my own, which is 10% on the pyramid. On Thursday evenings I will summarise each one out loud to my study partner instead, which moves the same half hour from 10% to 70%.',
        criteria: [
          { t: 'Names a passive activity you actually do.', auto: 'mentions', keys: ['read', 'reading', 'watch', 'watching', 'listen', 'listening', 'video', 'webinar', 'lecture', 'advisor', 'policy', 'diagram', 'dashboard'], need: 1, fail: 'Name the habit — reading advisories, watching videos, listening to a podcast.' },
          { t: 'Says what you will do instead, not only that you will do better.', auto: 'mentions', keys: ['instead', 'will', 'i could', 'i am going to', 'replace', 'change it by'], need: 1, fail: 'Say the swap: "instead I will…" or "I could change it by…".' },
          { t: 'Refers to the pyramid — a tier or a percentage.', auto: 'has', rx: '(\\d{2}\\s*%|percent|tier|active|passive|pyramid)', pass: 'Found a reference to the chart.', fail: 'Use the chart: say which tier or percentage you are moving from and to.' },
          { t: 'At least 12 words.', auto: 'words', min: 12 },
          { t: 'The swap fits in the time I actually have.', self: true },
          { t: 'I have told somebody, or written it where I will see it.', self: true }
        ]
      }
    },
    {
      id: 'cbitl', ref: 'BITL', bookRef: 'p.16 · Bring it to life', type: 'taskcard',
      title: 'Bring it to life',
      badge: 'Bring it to life',
      instruction: 'A task to do before the next class.',
      visual: {
        art: 'resource-map',
        caption: 'One of these four, with a real name and a real address. The leaflet or the link is the proof.'
      },
      body: 'Find <b>one free cybersecurity learning resource</b> in your community or online. It could be a public library computer room, a free family guide, a community college taster session, a local cyber meet-up or a free practice lab. ' +
        'Get the link, the leaflet or the application form, and bring it to class. Write below what you found — your teacher will check back next session.',
      placeholder: 'What I found, where it is, who it is for, and what it costs…',
      coach: {
        title: 'Is this ready to bring to class?',
        ai: false,
        taught: 'Free resources: libraries and librarians, community college taster sessions, meet-ups, government family guides, free practice labs, workplace awareness training.',
        criteria: [
          { t: 'Names one specific resource, not a type of resource.', auto: 'words', min: 10 },
          { t: 'Says where it is, or gives the link.', auto: 'mentions', keys: ['street', 'road', 'avenue', 'library', 'college', 'centre', 'center', 'online', 'http', 'www', '.com', '.org', '.gov', 'campus', 'near'], need: 1, fail: 'Add the place or the web address — somebody else has to be able to find it.' },
          { t: 'Says who it is for and what it costs.', auto: 'mentions', keys: ['free', 'no cost', 'anyone', 'adults', 'children', 'students', 'members', 'open to', 'costs'], need: 1, fail: 'Say who can use it and that it is free — that is what makes it usable to a classmate.' },
          { t: 'I have the leaflet, the link or the form to bring with me.', self: true }
        ]
      }
    }
  ]
});
