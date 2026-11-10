CSB1.page('u1-l1-s2', {
  book: { page: 5, section: 2, lesson: 'Lesson 1 · Vocabulary', title: 'Learn about U.S. cybersecurity career pathways' },
  objective: 'Discuss study skills and U.S. cybersecurity career pathways',
  prev: 'l1-s1-study-skills', prevLabel: 'Study skills',
  next: 'l2-s1-prepare-to-write', nextLabel: 'Lesson 2 · Prepare to write',
  cards: [
    {
      id: 'c2a', ref: '2A', bookRef: 'p.5 · 2A', type: 'dragcloze',
      title: 'Complete the brochure',
      instruction: 'Complete the "Pathways into Cybersecurity" brochure with the names of the seven pathways. The first one is done for you.',
      /* The seven stages are a real progression, and the passage walks
         them in order — so listed in that same order the tiles went
         into the gaps one for one and the pathway could be rebuilt
         without reading the paragraph that explains it. Scattered so
         that no tile sits at its own gap. */
      tiles: [
        { id: 'p4', label: 'community college', art: 'pw-college' },
        { id: 'p6', label: 'bootcamp', art: 'pw-bootcamp' },
        { id: 'p1', label: 'IT fundamentals course', art: 'pw-itfund' },
        { id: 'p0', label: 'digital-literacy class', art: 'pw-digital' },
        { id: 'p5', label: 'university', art: 'pw-university' },
        { id: 'p3', label: 'adult school', art: 'pw-adult' },
        { id: 'p2', label: 'high-school cyber academy', art: 'pw-highschool' }
      ],
      text: '<h4>PATHWAYS INTO CYBERSECURITY</h4>' +
        '<p>In the United States, most people begin with basic digital skills. They usually take a [[0]] before anything else. ' +
        'After that, many learners go on to an [[1]]. From there, students at school can go on to a [[2]], which is usually grades nine to twelve, and receive their diploma.</p>' +
        '<p>Adults can attend an [[3]] with or without a high school diploma. Adults who attend a [[4]] or a [[5]] must have a high school diploma or a GED (general educational development certificate). ' +
        'Adults can also choose to enrol in a [[6]] to study a specific skill such as penetration testing or digital forensics.</p>',
      answers: { '0': 'p0', '1': 'p1', '2': 'p2', '3': 'p3', '4': 'p4', '5': 'p5', '6': 'p6' },
      given: { '0': 'p0' },
      explain: {
        '0': 'Basic digital skills come before everything else: a course that assumes you can already use a computer is no use to somebody who cannot.',
        '1': 'An IT fundamentals course comes first — you cannot defend what you cannot operate.',
        '2': 'A cyber academy inside a high school teaches security alongside normal school subjects.',
        '3': 'Adult school is the open door: no diploma is needed to start.',
        '4': 'A community college gives a two-year degree, usually at low cost.',
        '5': 'A university gives a four-year degree and opens research and management roles.',
        '6': 'A bootcamp teaches one specific skill fast, such as penetration testing.'
      }
    },
    {
      id: 'c2b', ref: '2B', bookRef: 'p.5 · 2B', type: 'scene',
      title: 'Ask Joseph about the pathways',
      instruction: 'Watch Tara ask her mentor about the pathways. Then you are Tara: <b>Joseph\'s answers are already written, so each one tells you which pathway you must have asked about.</b> Put the right pathway in each gap and press Check answers.',
      scene: 'u1-pathways',
      visual: {
        art: 'answer-first',
        caption: 'The answer comes after the gap here. "Any adult, with or without a diploma" fits exactly one of the seven pathways — and rules out the other six.'
      },
      quiz: {
        type: 'convo',
        lead: 'Three gaps, seven pathways. Four of them belong in no gap at all — read his answer before you choose.',
        cast: {
          joseph: { name: 'Joseph', voice: 'm', pitch: 0.92 },
          tara: { name: 'You (Tara)', voice: 'f', pitch: 1.1 }
        },
        record: true,
        poolLabel: 'Click a pathway, then click the gap it belongs in — or drag it there.',
        turns: [
          { who: 'joseph', say: 'Come in, Tara. You wanted to ask about the pathways on the poster.' },
          { who: 'tara', frame: 'Yes. Who can attend [[1]]?' },
          { who: 'joseph', say: 'Adults with a high school diploma or a GED. That is the two-year route, and it costs far less than the four-year one.' },
          { who: 'tara', frame: 'I see. And who can attend [[2]]?' },
          { who: 'joseph', say: 'Any adult, with or without a diploma. That is where a lot of people start, and nobody is turned away.' },
          { who: 'tara', frame: 'Last one — who can attend [[3]]?' },
          { who: 'joseph', say: 'Anyone who wants one specific skill fast — penetration testing, say, or digital forensics. Twelve weeks, not four years.' }
        ],
        answers: {
          '1': 'a community college',
          '2': 'an adult school',
          '3': 'a bootcamp'
        },
        clue: {
          '1': 'a high school diploma or a GED … the two-year route',
          '2': 'Any adult, with or without a diploma',
          '3': 'one specific skill fast … twelve weeks'
        },
        whyTitle: 'What his answer told you',
        why: {
          '1': 'He names two things: a diploma or GED is needed, and it is the two-year route. A university needs the same diploma but takes four years, so "two-year" is what decides it.',
          '2': '"With or without a diploma" is the giveaway. Only one pathway on the poster turns nobody away, and that is the one Allison keeps sending her readers to as well.',
          '3': 'One specific skill, named as penetration testing or digital forensics, and twelve weeks rather than years. That is a bootcamp — a college or university teaches the whole field.'
        },
        banks: [
          { label: 'Pathway:', items: ['a digital-literacy class', 'an IT fundamentals course', 'a high-school cyber academy', 'an adult school', 'a community college', 'a university', 'a bootcamp'] }
        ]
      }
    },
    {
      id: 'c2c', ref: '2C', bookRef: 'p.5 · 2C', type: 'fields',
      title: 'Find the cyber pathways near you',
      instruction: 'Work in a team. Conduct research. Look at websites and/or survey your classmates in order to report on the question below. <b>What cybersecurity pathways are located in your area? Name the one closest to you.</b>',
      visual: {
        art: 'resource-map',
        caption: 'Four kinds of place worth looking for. Most towns have at least two of them, and the library is usually the easiest door to walk through.'
      },
      /* The whole task done once, opened from the heading. Tara is
         the learner on this page — she asks Joseph about the pathways
         in 2B — so going and finding them near her is simply what
         happens next, and her voice is already cast. */
      worked: {
        label: 'See a finished example',
        title: 'A finished example — Tara\'s research and report',
        relates: ['2C', '2D'],
        about: '<b>What this is.</b> One learner\'s completed work for <b>2C</b> and <b>2D</b> on this page. ' +
          '2C is where you fill in the table of places near you; 2D is where you report what you found to the class. ' +
          '<b>It is not an answer key.</b> Tara lives somewhere else, so her places will never be yours — the answer to this exercise is about where <i>you</i> live, and nobody can give you that. ' +
          'It is here to show you two things you cannot get from the instructions: how much detail is enough, and what the report sounds like when it is said out loud.',
        visual: {
          art: 'resource-map',
          arg: {
            title: 'what Tara found within 30 minutes of home',
            pins: [
              { t: 'Grant Street Library', sub: 'free · 10 min walk', ic: 'i' },
              { t: 'Mid-City College', sub: 'AS degree · 20 min bus', ic: 'C' },
              { t: 'City Adult School', sub: 'no diploma needed · 2 stops', ic: 'A' },
              { t: 'Regional Cyber Bootcamp', sub: 'SOC track · online', ic: 'B' }
            ]
          },
          caption: 'Tara\'s map after an evening of looking. Four places, each with the one fact that decides whether she can walk into it.'
        },
        checklistTitle: 'What her research found, against the checklist on this card',
        checklist: [
          {
            t: 'At least four real places, not types of place.',
            found: 'Grant Street Library, City Adult School, Mid-City College, Regional Cyber Bootcamp. Four names a classmate could type into a map — which is the test. "A college in my city" would have failed it.'
          },
          {
            t: 'Each name is a place somebody could actually find.',
            found: 'She wrote down the street for the library and the bus route for the college, because that is what somebody standing at a bus stop actually needs.'
          },
          {
            t: 'She knows the entry requirement for the one closest to her.',
            found: 'The library is closest and needs nothing but a library card. The adult school is next and takes anyone, with or without a diploma — which is the fact Joseph gave her in 2B.'
          },
          {
            t: 'She knows what it costs, or that it is free.',
            found: 'Library free. Adult school free for residents. College tuition, but about a quarter of the four-year one. The bootcamp she could not find a price for, so she wrote "ask" rather than guessing.'
          }
        ],
        table: {
          title: 'Her table, filled in',
          head: ['Pathway', 'What she found', 'To get in you need'],
          rows: [
            ['IT fundamentals course', 'Franklin Adult Center — IT Essentials, 10 weeks', 'nothing'],
            ['High-school cyber academy', 'District Cyber Academy (grades 9–12)', 'to be at the school'],
            ['Adult school', 'City Adult School — Digital Skills & Security', 'nothing'],
            ['Community college', 'Mid-City College — AS in Cybersecurity', 'a diploma or a GED'],
            ['University', 'State University — BS in Cybersecurity', 'a diploma or a GED'],
            ['Bootcamp', 'Regional Cyber Bootcamp — SOC analyst track', 'basic IT knowledge']
          ]
        },
        reportLabel: 'And this is how she reported it to the class',
        report: 'So, our team found four pathways near us. The nearest one is the Grant Street Library — it is about ten minutes on foot, the computers are free, and all you need is a library card. ' +
          'The closest community college is Mid-City College, twenty minutes on the bus, and there you need a diploma or a GED. ' +
          'We also found the City Adult School, and that one takes anybody, with or without a diploma. ' +
          'The pathway I would choose is the community college, because a two-year degree costs much less than a university and the employers here accept it.',
        say: 'Hear Tara give the report',
        voice: { scene: 'u1-pathways', who: 'tara' },
        fallback: 'f',
        listenFor: 'Listen for what she does at the end: she stops reporting and says which one she would pick, and why. That last sentence is the part most people leave out.',
        after: '<h4>Now do your own</h4>Fill in the table on this card with the places near <b>you</b>, then write your report in 2D. ' +
          'Four real names and one sentence saying which you would choose is enough — it is what Tara did.'
      },
      coach: {
        title: 'Check your research before you report it',
        ai: false,
        taught: 'The seven U.S. pathways from 2A, and the entry requirement for each one.',
        criteria: [
          { t: 'I named at least four real places, not types of place.', auto: 'lines', min: 4 },
          { t: 'Each name is a place somebody could actually find — not "a college in my city".', self: true },
          { t: 'I know the entry requirement for the one closest to me.', self: true },
          { t: 'I know what it costs, or that it is free.', self: true }
        ]
      },
      need: 4,
      fields: [
        { label: 'IT fundamentals course:', given: 'Franklin Adult Center' },
        { label: 'High-school cyber academy:', placeholder: 'name' },
        { label: 'Adult school:', placeholder: 'name' },
        { label: 'Community college:', placeholder: 'name' },
        { label: 'University:', placeholder: 'name' },
        { label: 'Bootcamp / cyber academy:', placeholder: 'name' }
      ],
      samplesTitle: 'Sample U.S. programmes you can use as models',
      samples: {
        head: ['Pathway', 'Example programme', 'Entry requirement', 'Length'],
        rows: [
          ['IT fundamentals course', 'Community adult center — IT Essentials', 'None', '10 weeks'],
          ['High-school cyber academy', 'District Cyber Academy (grades 9–12)', 'Enrolment at the school', '4 years'],
          ['Adult school', 'City Adult School — Digital Skills & Security', 'None', '1–2 terms'],
          ['Community college', 'Mid-City College — AS in Cybersecurity', 'Diploma or GED', '2 years'],
          ['University', 'State University — BS in Cybersecurity', 'Diploma or GED', '4 years'],
          ['Bootcamp', 'Regional Cyber Bootcamp — SOC Analyst track', 'Basic IT knowledge', '12–24 weeks']
        ]
      }
    },
    {
      id: 'c2d', ref: '2D', bookRef: 'p.5 · 2D', type: 'report',
      title: 'Report the results of your research',
      instruction: 'Report the results of your research to the class. Use the sentence stems, then listen to your own report.',
      visual: {
        art: 'podium-report',
        caption: 'You are reporting for the team, so say what the team found — then say which pathway you would pick, and why.'
      },
      minWords: 25,
      placeholder: 'Our team found the following pathways in our area…',
      stems: [
        'Our team found the following pathways in our area.',
        'The nearest adult school is…',
        'The closest community college is…',
        'To attend it you need…',
        'The pathway I would choose is… because…'
      ],
      coach: {
        title: 'Check your report before you give it',
        target: 'simple present for facts; "you need…" for entry requirements',
        minWords: 25,
        taught: [
          'The seven U.S. pathways into cybersecurity (2A): digital-literacy class, IT fundamentals course, high-school cyber academy, adult school, community college, university, bootcamp.',
          'Entry requirements: adult school needs nothing; community college and university need a high school diploma or a GED; a bootcamp needs basic IT knowledge.'
        ],
        source: {
          chart: 'The learner researched real programmes near them and filled a table with six rows: IT fundamentals course, high-school cyber academy, adult school, community college, university, bootcamp.',
          label: 'WHAT THE LEARNER RESEARCHED'
        },
        task: 'Report the results of your team research to the class: what cybersecurity pathways are in your area, which is closest, what you need to attend it, and which one you would choose and why.',
        example: 'Our team found four pathways in our area. The nearest adult school is the City Adult School on Grant Street, and it has a digital skills and security course. To attend it you do not need a diploma, which is why we put it first. The closest community college is Mid-City College, about twenty minutes by bus, and you need a diploma or a GED there. The pathway I would choose is the community college, because a two-year degree costs less than a university and employers here accept it.',
        criteria: [
          { t: 'Names at least three pathways, with the real name of each place.', auto: 'mentions', keys: ['school', 'college', 'university', 'bootcamp', 'course', 'academy', 'library', 'center', 'centre'], need: 3, fail: 'Name the places themselves — adult school, community college, bootcamp — not just "some options".' },
          { t: 'Says which one is closest.', auto: 'mentions', keys: ['nearest', 'closest', 'nearby', 'near me', 'in our area'], need: 1, fail: 'Use "The nearest… is…" or "The closest… is…".' },
          { t: 'Gives the entry requirement for at least one pathway.', auto: 'mentions', keys: ['you need', 'need a', 'diploma', 'ged', 'nothing', 'no diploma', 'requirement'], need: 1, fail: 'Say what somebody has to have to get in — a diploma, a GED, or nothing at all.' },
          { t: 'Chooses one pathway and gives a reason with "because".', auto: 'mentions', keys: ['because', 'so that', 'since'], need: 1, fail: 'Finish with "The pathway I would choose is… because…".' },
          { t: 'At least 25 words.', auto: 'words', min: 25 },
          { t: 'I reported what my team found, not only my own opinion.', self: true },
          { t: 'I could say this out loud without reading every word.', self: true }
        ]
      }
    },
    {
      id: 'cty', ref: 'TY', bookRef: 'p.5 · Test yourself', type: 'flashcards',
      title: 'Test yourself',
      instruction: 'A study skill is spoken aloud — point at the picture in the Cyber Lab that shows it. Nine words, three rounds, scored. Nothing to look up: listen, then click.',
      scene: 'studylab',
      sub: 'The book does this with a partner; on your own, the drill below does the same job.',
      /* the nine centres of the 3 x 3 grid the diorama draws */
      items: [
        { id: 't1', num: 1, label: 'take notes', at: [16.7, 19.7] },
        { id: 't2', num: 2, label: 'find a quiet place', at: [50, 19.7] },
        { id: 't3', num: 3, label: 'do research', at: [83.3, 19.7] },
        { id: 't4', num: 4, label: 'take a break', at: [16.7, 51.3] },
        { id: 't5', num: 5, label: 'search online', at: [50, 51.3] },
        { id: 't6', num: 6, label: 'organize materials', at: [83.3, 51.3] },
        { id: 't7', num: 7, label: 'make a study schedule', at: [16.7, 82.9] },
        { id: 't8', num: 8, label: 'memorize words', at: [50, 82.9] },
        { id: 't9', num: 9, label: 'make an outline', at: [83.3, 82.9] }
      ]
    }
  ]
});
