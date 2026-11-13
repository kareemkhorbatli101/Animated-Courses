CSB1.page('u1-review-s1', {
  book: { page: 18, section: 'Review', lesson: 'Teamwork & Language Review', title: 'Review unit language' },
  objective: 'Review the language of Unit 1 with your team',
  prev: 'atwork-s1-active-listening', prevLabel: 'Active listening',
  next: 'review-s2-problem-solving', nextLabel: 'Problem solving',
  intro: 'Day one of the cohort. Ten people, one classroom, and every tense you have met in this unit.',
  cards: [
    {
      id: 'ca', ref: 'A', bookRef: 'p.18 · A', type: 'hotspot',
      title: 'Write three conversations',
      instruction: 'Three conversations are starting at once on the first morning. <b>Each opening line is already said — choose the reply that answers it.</b> Click any person to see who they are. Three of the six replies answer a question nobody asked.',
      scene: 'cohort',
      visual: {
        art: 'answer-first',
        caption: 'Read the opening line, then find the reply that actually answers it. A reply about the summer cannot follow a question about today.'
      },
      /* the four tenses, on the card, instead of "see 1B of Lesson 3" */
      source: {
        label: 'The four tenses, in one line each',
        html: '<p><b>Simple present</b> — a habit or a fact: <i>I take the bus every morning.</i><br>' +
          '<b>Present continuous</b> — happening now: <i>I am starting the SOC analyst track.</i><br>' +
          '<b>Simple past</b> — finished, at a named time: <i>I visited my grandkids in the summer.</i><br>' +
          '<b>Past continuous</b> — in progress earlier: <i>I was parking my car when the class started.</i></p>'
      },
      need: 3,
      record: true,
      /* no `tenses` sweep: the three replies cover the past, present
         continuous and past continuous, and claiming all four would
         be a check the card can never pass */
      notes: [
        {
          title: 'Sample conversation',
          body: '<div><b>Fred:</b> Nice to meet you, Jan. Where did you go this summer?</div>' +
            '<div><b>Jan:</b> I visited my grandkids in Oaxaca, and I took an online security course in the evenings. What did you do during the break?</div>' +
            '<div><b>Fred:</b> My family drove across the country visiting national parks.</div>'
        },
        {
          title: 'After you check — the three replies that fit nowhere',
          body: '<div>Each of these answers a real question, just not one that was asked in this room:</div>' +
            '<div style="margin-top:6px">• <i>"I am going to the lab, I always go on Mondays"</i> answers <b>What are you doing after class today?</b></div>' +
            '<div>• <i>"I studied English at the adult school last year"</i> answers <b>Did you study English before you took this class?</b></div>' +
            '<div>• <i>"No, I drive, but I was walking last week because of the snow"</i> answers <b>I take the bus here every morning. Do you?</b></div>'
        }
      ],
      people: [
        { name: 'Tony', at: [9.7, 52], now: 'Tony is unpacking his new laptop.', past: 'Tony was waiting outside the room.' },
        { name: 'Olga', at: [28.8, 52], now: 'Olga is introducing herself to the person next to her.', past: 'Olga was reading the course handbook.' },
        { name: 'Felipe', at: [48, 52], now: 'Felipe is asking the instructor a question.', past: 'Felipe was looking for the room.' },
        { name: 'Mr. Chen', at: [67.2, 52], now: 'Mr. Chen is handing out the lab login cards.', past: 'Mr. Chen was setting up the projector.' },
        { name: 'Kazuko', at: [86.3, 52], now: 'Kazuko is writing her name on a badge.', past: 'Kazuko was parking her car.' },
        { name: 'Maria', at: [6.3, 66], now: 'Maria is greeting an old classmate.', past: 'Maria was studying with Pedro last year.' },
        { name: 'Pedro', at: [25.5, 66], now: 'Pedro is showing a photo on his phone.', past: 'Pedro was travelling in the summer.' },
        { name: 'Jan', at: [44.7, 66], now: 'Jan is shaking hands with Fred.', past: 'Jan was visiting her grandkids in Oaxaca.' },
        { name: 'Myra', at: [63.8, 66], now: 'Myra is taking notes before the class even starts.', past: 'Myra was doing an online course all summer.' },
        { name: 'Fred', at: [83, 66], now: 'Fred is asking Jan about her summer.', past: 'Fred was driving across the country.' }
      ],
      frame: 'Person 1: [[1]]<br>Person 2: [[2]]',
      convoLead: 'Three short conversations, side by side in one room. In each one the first line is already said — build the reply, then the next opening, so the three run as a real first-morning.',
      cast: {
        them: { name: 'Classmate', voice: 'f', pitch: 1.09 },
        you: { name: 'You', voice: 'm', pitch: 0.95 }
      },
      poolLabel: 'Click a reply, then click the gap it belongs in — or drag it there. Three of the six fit none of the three openings.',
      turns: [
        { who: 'them', say: 'Conversation 1 — Fred to Jan: Nice to meet you, Jan. Where did you go this summer?' },
        { who: 'you', frame: 'Jan: [[1]]' },
        { who: 'them', say: 'Conversation 2 — Maria to Pedro, across the room: Hello again! Are you taking this course too?' },
        { who: 'you', frame: 'Pedro: [[2]]' },
        { who: 'them', say: 'Conversation 3 — Myra to Kazuko, at the badge table: What were you doing when the class started?' },
        { who: 'you', frame: 'Kazuko: [[3]]' },
        { who: 'them', say: 'Mr. Chen: Right, everybody — take a login card and find a machine.' }
      ],
      answers: {
        '1': 'I visited my grandkids and I took an online security course',
        '2': 'Yes, I am. I am starting the SOC analyst track',
        '3': 'I was parking my car, so I came in late'
      },
      clue: {
        '1': 'Where did you go this summer?',
        '2': 'Are you taking this course too?',
        '3': 'What were you doing when the class started?'
      },
      whyTitle: 'Which reply answers which question — and what the other three answer',
      why: {
        '1': 'Fred asks <i>where</i> and <i>did … go</i>, both in the simple past, so the reply has to be a finished thing in the summer. "I visited … and I took" matches on both counts. Note that "I studied English at the adult school last year" is also simple past, but it answers <i>when</i> you studied, not where you went.',
        '2': 'Maria asks a yes/no question with <i>Are you</i>, so the short answer has to send <i>are</i> back: "Yes, I am." Only one reply in the list begins that way, which is the whole point of the short-answer rule from Lesson 3 §2.',
        '3': 'Myra asks <i>What were you doing</i> — past continuous, about the moment the class started. "I was parking my car" is the only reply in the past continuous about that moment. "I was walking last week" is past continuous too, but about last week, which is a different moment.'
      },
      banks: [
        {
          label: 'Reply:', items: [
            'I visited my grandkids and I took an online security course',
            'Yes, I am. I am starting the SOC analyst track',
            'I am going to the lab, I always go on Mondays',
            'I studied English at the adult school last year',
            'I was parking my car, so I came in late',
            'No, I drive, but I was walking last week because of the snow'
          ]
        }
      ]
    },
    {
      id: 'cb', ref: 'B', bookRef: 'p.18 · B', type: 'tensewrite',
      title: 'Write three questions',
      instruction: 'Work in a team. You are interviewing a classmate about the room in A. She answers each question, so your next one has to follow from her answer — and your three questions must each use a <b>different</b> verb tense.',
      visual: {
        art: 'convo-frame',
        caption: 'This is one interview, not three separate questions. Read her answer, then ask the next thing a real person would ask.'
      },
      lead: 'Olga answers each question. Write the question that produced it — and use a different tense each time.',
      cast: {
        them: { name: 'Olga', voice: 'f', pitch: 1.1 },
        me: { name: 'You', voice: 'm', pitch: 0.95 }
      },
      distinct: true,
      boxes: [
        { any: true, label: 'Question 1', eg: 'What is Myra doing?', lead: 'Shall we start with the people at the back? Ask me anything about them.' },
        { any: true, label: 'Question 2', eg: 'What was Jan doing last summer?', lead: 'Myra is taking notes already — she always arrives early. Jan is the one shaking hands with Fred.' },
        { any: true, label: 'Question 3', eg: 'Where does Fred live?', lead: 'Jan was visiting her grandkids in Oaxaca all summer. Fred drove across the country with his family.' }
      ],
      coach: {
        title: 'Check your three questions',
        /* ON, as a check on QUESTION FORMATION - the thing the page's regular expression cannot
           see. It can count question marks; it cannot tell "What she was doing?" from "What was
           she doing?", and that inversion is the whole of what Lesson 3 taught. */
        task: 'Three questions the learner wrote, each one meant to follow from the answer '
          + 'printed above it. For EACH question check: it is formed as a question in English '
          + '(auxiliary and subject the right way round, "What was she doing?" not "What she '
          + 'was doing?"); its tense matches what the answer above it calls for; and it follows '
          + 'from that answer rather than starting a new topic. Do not suggest better topics.',
        taught: 'The four tenses from Lesson 3. Each question here must use a different one, and the page tells you which tense it heard.',
        criteria: [
          { t: 'All three are questions, with question marks.', auto: 'has', rx: '\\?[\\s\\S]*\\?[\\s\\S]*\\?', pass: 'Three questions found.', fail: 'All three have to be questions — check that each one ends with a question mark.' },
          { t: 'Each question follows from Olga\'s answer above it.', auto: 'words', min: 12 },
          { t: 'The three use three different tenses (the page checks this when you press Check answers).', self: true },
          { t: 'I would actually ask these, in this order, to a real classmate.', self: true }
        ]
      }
    },
    {
      id: 'cc', ref: 'C', bookRef: 'p.18 · C', type: 'discuss',
      title: 'Ask your questions to another team',
      instruction: 'Talk to people from another team. Ask your questions and write down what they say. Team 2\'s answers are below — choose which of their questions was hardest, then say why in your own words.',
      visual: {
        diorama: 'cohort',
        caption: 'The room you are both asking about. Ten people, one morning, and every tense from Lesson 3 somewhere in it.'
      },
      minWords: 8,
      questions: [
        {
          q: 'Here are the four questions Team 2 asked you. Which one needs <b>two past continuous verbs in one sentence</b> to answer properly?',
          evidence: 'look for the question with two things happening at the same time in the past.',
          options: [
            { t: 'What were the others doing while Mr. Chen was setting up?', ok: true, why: 'Right — "were doing" and "was setting up" are both past continuous, and they have to sit in the same sentence. That is what makes it the hard one.' },
            { t: 'What is Myra doing?', ok: false, why: 'One verb, present continuous. Easy to answer in four words.' },
            { t: 'Did you study English before you took this class?', ok: false, why: 'Simple past, and a yes/no question — the short answer is "Yes, I did."' },
            { t: 'Where does Fred live?', ok: false, why: 'Simple present, one verb. The shortest of the four.' }
          ]
        },
        {
          q: 'Now say why that one was harder than the others, in your own words.',
          placeholder: 'It was harder because…',
          model: 'It was harder because two things were happening at the same time in the past, so I needed two past continuous verbs in one sentence and I had to join them with "while". With the other questions I only needed one verb.'
        }
      ],
      coach: {
        title: 'Check your explanation',
        target: 'past continuous with "while"; comparing with harder / because',
        minWords: 8,
        taught: [
          'The four tenses from Lesson 3: simple present, present continuous, simple past, past continuous.',
          'Past continuous describes what was in progress; "while" joins two things happening at the same time.'
        ],
        source: {
          text: 'Team 2 asked: 1. What were the others doing while Mr. Chen was setting up?  2. What is Myra doing?  3. Did you study English before you took this class?  4. Where does Fred live?',
          label: 'THE FOUR QUESTIONS the other team asked'
        },
        task: 'Explain why "What were the others doing while Mr. Chen was setting up?" is harder to answer than the other three questions.',
        example: 'It was harder because two things were happening at the same time in the past, so I needed two past continuous verbs in one sentence and I had to join them with "while". With the other questions I only needed one verb.',
        criteria: [
          { t: 'Names the tense, not just "the grammar".', auto: 'mentions', keys: ['past continuous', 'continuous', 'was', 'were', 'ing'], need: 1, fail: 'Say which tense it needs — the past continuous.' },
          { t: 'Says that two things happen at the same time.', auto: 'mentions', keys: ['same time', 'at once', 'both', 'two verbs', 'two things', 'while', 'together'], need: 1, fail: 'That is the reason it is hard: two actions overlapping, joined by "while".' },
          { t: 'Compares it with the easier questions.', auto: 'mentions', keys: ['other', 'others', 'easier', 'only one', 'just one', 'than'], need: 1, fail: 'Compare: "with the other questions I only needed one verb".' },
          { t: 'At least eight words.', auto: 'words', min: 8 },
          { t: 'I actually tried to answer it before deciding it was hard.', self: true }
        ]
      }
    },
    {
      id: 'cd', ref: 'D', bookRef: 'p.18 · D', type: 'writer',
      title: 'Write a paragraph about the picture',
      instruction: 'Work in a team. Write a paragraph about the picture. Say what is happening now and what happened before. Share your paragraph with the class.',
      visual: [
        {
          diorama: 'cohort',
          caption: 'Box 1 is this room as it is now — present continuous and simple present.'
        },
        {
          art: 'tense-timeline',
          caption: 'Box 2 is the same room earlier — simple past and past continuous. The timeline tells you which form each box needs.'
        }
      ],
      minWords: 50,
      coach: {
        title: 'Check your paragraph',
        target: 'present continuous and simple present; simple past and past continuous',
        minWords: 50,
        taught: [
          'Simple present for habits and facts; present continuous for right now; simple past for finished actions; past continuous for what was in progress.',
          'The people in the picture and what each of them was doing before the class started.'
        ],
        source: {
          picture: 'A classroom on the first morning of a cybersecurity cohort. Ten people: Tony is unpacking his new laptop (before: waiting outside the room). Olga is introducing herself to the person next to her (before: reading the course handbook). Felipe is asking the instructor a question (before: looking for the room). Mr. Chen is handing out the lab login cards (before: setting up the projector). Kazuko is writing her name on a badge (before: parking her car). Maria is greeting an old classmate (before: studying with Pedro last year). Pedro is showing a photo on his phone (before: travelling in the summer). Jan is shaking hands with Fred (before: visiting her grandkids in Oaxaca). Myra is taking notes before the class even starts (before: doing an online course all summer). Fred is asking Jan about her summer (before: driving across the country).',
          label: 'THE PICTURE the learner is describing'
        },
        task: 'Write a paragraph about the picture in two parts: what is happening now (present continuous and simple present), and what happened before the class started (simple past and past continuous).',
        parts: [
          'Box 1 — what is happening now. Present continuous and simple present.',
          'Box 2 — what happened before. Simple past and past continuous.'
        ],
        example: [
          'In the picture, the cohort is meeting for the first time. At the front of the room Mr. Chen is handing out the lab login cards, and Felipe is asking him a question about the timetable. Myra is already taking notes, because she always arrives early. Behind them Jan is shaking hands with Fred, and Pedro is showing Maria a photo on his phone.',
          'Before the class started, most of them were somewhere else. Jan visited her grandkids in Oaxaca during the summer and Fred drove across the country with his family. While Mr. Chen was setting up the projector, Kazuko was still parking her car and Olga was reading the course handbook in the corridor.'
        ],
        criteria: [
          { t: 'Describes what is happening now, using the present continuous.', auto: 'mentions', keys: ['is ', 'are ', 'ing'], need: 2, fail: 'Box 1 needs "is/are + -ing": "Mr. Chen is handing out…".' },
          { t: 'Describes what happened before, using past verbs.', auto: 'past', need: 4 },
          { t: 'Names at least four of the people.', auto: 'mentions', keys: ['tony', 'olga', 'felipe', 'chen', 'kazuko', 'maria', 'pedro', 'jan', 'myra', 'fred'], need: 4, fail: 'Use the names — a paragraph about "some people" is not about this picture.' },
          { t: 'At least 50 words in total.', auto: 'words', min: 50 },
          { t: 'At least one sentence uses "while" to join two past actions.', self: true },
          { t: 'Box 2 is about before the class, not about the same moment as box 1.', self: true }
        ]
      },
      stems: [
        'In the picture, the cohort is meeting for the first time.',
        'At the front of the room…',
        'Before the class started…',
        'While Mr. Chen was…',
        'Every Monday the group…'
      ],
      paras: [
        { label: 'What is happening now', purpose: 'Use the present continuous and the simple present.', min: 25, rows: 4, placeholder: 'In the picture, the cohort is meeting for the first time…' },
        { label: 'What happened before', purpose: 'Use the simple past and the past continuous.', min: 20, rows: 4, placeholder: 'Before the class started…' }
      ]
    },
    {
      id: 'ce', ref: 'E', bookRef: 'p.19 · E', type: 'interview',
      title: 'Interview three classmates',
      instruction: 'Interview three classmates and write their answers. Press <b>ask</b> to hear each one — then use the last column for a real classmate if you are in a group.',
      visual: {
        art: 'group-roles',
        caption: 'Four questions, four tenses, three people. Ask them out loud before you write anything down — that is the 70% tier from Lesson 5.'
      },
      coach: {
        title: 'Check your fourth column',
        /* ON, as a tense-agreement check between each question and the answer written under it.
           These are a classmate's words, written down by the learner, so the CONTENT is not
           theirs to be marked on - only whether what they wrote down answers what was asked. */
        task: 'Four answers the learner collected from a classmate, one under each question. '
          + 'For EACH, check only that the answer is in the tense its question calls for, and '
          + 'that it answers that question rather than a different one. The words are another '
          + 'person\'s, taken down by the learner: never judge the content, the opinions or '
          + 'how interesting the answers are, and do not ask for longer answers.',
        taught: 'The four tenses from Lesson 3, one per question: simple present, present continuous, simple past, past continuous.',
        criteria: [
          { t: 'I wrote down what a real classmate said, in their words.', auto: 'words', min: 12 },
          { t: 'Their answers use the same tense as the question.', auto: 'past', need: 1 },
          { t: 'I asked the questions out loud rather than passing a notebook.', self: true },
          { t: 'I asked all four questions, not only the easy ones.', self: true }
        ]
      },
      questions: [
        'Where do you like to study? Why?',
        'Are you taking other classes in school?',
        'Did you study English before you took this class? Where? When?',
        'What were you doing today at 7:30 a.m.?'
      ],
      people: [
        {
          name: 'Olga', voice: 'f', answers: [
            'At the library, because it is quiet and the Wi-Fi is free.',
            'Yes, I am. I am taking a networking class on Wednesdays.',
            'Yes, I did. I studied English at the adult school two years ago.',
            'I was taking my daughter to school at seven thirty.'
          ]
        },
        {
          name: 'Pedro', voice: 'm', answers: [
            'At home, in the kitchen, because nobody is there in the morning.',
            'No, I\'m not. This is my only class this term.',
            'Yes, I did. I studied English in Lima before I came here.',
            'I was driving to work. I start at eight.'
          ]
        },
        {
          name: 'Myra', voice: 'f', answers: [
            'In the Cyber Lab, because I can ask the technician questions.',
            'Yes, I am. I am also doing a free online security course.',
            'No, I didn\'t. This is my first English class.',
            'I was already here. I was reading the handbook at seven thirty.'
          ]
        }
      ]
    },
    {
      id: 'cf', ref: 'F', bookRef: 'p.19 · F', type: 'pie',
      title: 'Report your results — make a pie chart',
      instruction: 'Report your results to the class. Make a pie chart with your class results for the first interview question. Change the numbers and the chart redraws.',
      seeAlso: { card: 'ce', label: 'Back to the interviews' },
      visual: {
        art: 'podium-report',
        caption: 'The chart is the easy part. What the class wants from you is the sentence that goes with it: which answer won, and by how much.'
      },
      question: 'Question 1 — Where do you like to study?',
      minTotal: 3,
      seed: [
        { label: 'At the library', value: 1 },
        { label: 'At home', value: 1 },
        { label: 'In the Cyber Lab', value: 1 },
        { label: 'Somewhere else', value: 0 }
      ]
    }
  ]
});
