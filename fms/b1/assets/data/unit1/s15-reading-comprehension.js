/* Unit 1 §15 — Part 5 - Comprehension.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s15', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Part 5 - Comprehension', part: '5', section: '15',
          lesson: 'Part 5 - Comprehension', title: 'Part 5 - Comprehension' },
  objective: 'By the end of Part 5 you can read a set of ministry staff profiles for '
        + 'each person\'s role, length of service and current work, discuss who is '
        + 'responsible for what, and use this unit\'s professional collocations in '
        + 'your own writing.',
  prev: 's14-reading-profiles', prevLabel: 'Part 5 - Reading',
  next: 's16-writing-models', nextLabel: 'Part 6 - Writing, the models',
  cards: [
    {
    id: 'c1',
    covers: ['Part 5'],
    ref: '5B',
    bookRef: 'Unit 1 · Part 5 · 5B',
    type: 'discuss',
    title: 'Reading Comprehension: Discussion Questions',
    instruction: 'In pairs or small groups, discuss the questions below about the four '
        + 'profiles. (Aim for 3–4 sentences per answer.)',
    questions: [{
          q: 'Which of the four roles do you think is most important for the ministry\'s '
            + 'international engagement right now, and why?',
          model: 'I think Huy\'s role is most important right now. Viet Nam needs foreign '
            + 'investment to keep growing, and his work helps make that possible. Without '
            + 'economic diplomacy, political progress does not have a real impact.',
          minWords: 6,
          rows: 3
        },
    {
          q: 'How do Mai\'s and Ha\'s responsibilities complement each other?',
          model: 'Mai manages the formal arrival and protocol — the physical and logistical '
            + 'side of official visits. Ha manages what gets reported and communicated '
            + 'about those same events. They work together to make sure visits are both '
            + 'well-organized and well-presented to the international public.',
          minWords: 6,
          rows: 3
        },
    {
          q: 'What skills do all four profiles share that are essential for working at a '
            + 'foreign ministry?',
          model: 'All four people need strong organizational skills and professional '
            + 'communication in English. They all work with time-sensitive tasks — a '
            + 'delayed visa or a poorly organized event can have real diplomatic '
            + 'consequences. They also need attention to detail and the ability to stay '
            + 'calm.',
          minWords: 6,
          rows: 3
        },
    {
          q: 'What does working at the Ministry of Foreign Affairs mean for the '
            + 'country\'s international position, based on these four profiles?',
          model: 'These profiles show that the ministry\'s international engagement is real '
            + 'and active — it is not just political speeches. The ministry is doing '
            + 'professional work every day, from visa processing to investment '
            + 'facilitation. This sends a strong message that the country has capable '
            + 'institutions.',
          minWords: 6,
          rows: 3
        }],
    okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer beside '
      + 'your own.',
    coach: {
        title: 'Compare with the book',
        target: 'Present simple and present continuous',
        task: 'In pairs or small groups, discuss the questions below about the four '
        + 'profiles. (Aim for 3–4 sentences per answer.)',
        parts: ['Which of the four roles do you think is most important for the ministry\'s '
          + 'international engagement right now, and why?',
        'How do Mai\'s and Ha\'s responsibilities complement each other?',
        'What skills do all four profiles share that are essential for working at a '
          + 'foreign ministry?',
        'What does working at the Ministry of Foreign Affairs mean for the '
          + 'country\'s international position, based on these four profiles?'],
        example: ['B1 target — I think Huy\'s role is most important right now. Viet Nam '
            + 'needs foreign investment to keep growing, and his work helps make that '
            + 'possible. Without economic diplomacy, political progress does not have a '
            + 'real impact.',
          'B2 extension — A: I think Huy\'s role is most critical at this moment. '
            + 'Viet Nam\'s economic strategy absolutely depends on attracting and '
            + 'retaining foreign investment, and his work directly creates those '
            + 'pathways. Without economic diplomacy, political engagement means very '
            + 'little in practical terms. B: I would argue for Mai\'s role — because '
            + 'protocol is what makes high-level engagement possible at all. C: Duc\'s '
            + 'work is the most visible to ordinary people, and a ministry is judged by '
            + 'how it treats them. D: What is striking is that none of us chose the role '
            + 'with the highest formal rank, which suggests we are all judging importance '
            + 'by what the work makes possible rather than by where it sits on the '
            + 'organigram. E: And all four roles depend on the other three — which is '
            + 'probably the real answer.',
          'B1 target — Mai manages the formal arrival and protocol — the physical and '
            + 'logistical side of official visits. Ha manages what gets reported and '
            + 'communicated about those same events. They work together to make sure '
            + 'visits are both well-organized and well-presented to the international '
            + 'public.',
          'B2 extension — Mai manages the formal arrival and protocol — the physical, '
            + 'logistical, and ceremonial side of official visits. Ha manages the media '
            + 'dimension — what gets photographed, reported, and communicated about those '
            + 'same events. A visit that is perfectly organized by Mai but badly '
            + 'communicated by Ha achieves only half of its diplomatic purpose, and the '
            + 'reverse is equally true. Their two calendars are effectively one calendar, '
            + 'which is why protocol and press sit in adjacent offices in most '
            + 'ministries.',
          'B1 target — All four people need strong organizational skills and '
            + 'professional communication in English. They all work with time-sensitive '
            + 'tasks — a delayed visa or a poorly organized event can have real '
            + 'diplomatic consequences. They also need attention to detail and the '
            + 'ability to stay calm.',
          'B2 extension — All four require strong organizational skills, the ability '
            + 'to communicate professionally in English with foreign counterparts, '
            + 'exceptional attention to detail, and the ability to remain calm and '
            + 'effective under time pressure. All four also work with time-sensitive '
            + 'processes where a single missed step carries a diplomatic cost, so '
            + 'discretion matters as much as competence. What is less obvious is that all '
            + 'four also need the confidence to say "I will confirm that and come back to '
            + 'you" rather than guessing — because in each of their jobs a wrong detail '
            + 'is more expensive than a short delay.',
          'B1 target — These profiles show that the ministry\'s international '
            + 'engagement is real and active — it is not just political speeches. The '
            + 'ministry is doing professional work every day, from visa processing to '
            + 'investment facilitation. This sends a strong message that the country has '
            + 'capable institutions.',
          'B2 extension — These four profiles show that the ministry\'s international '
            + 'engagement is operational and active — not just political announcements '
            + 'but real, day-to-day professional work carried out by trained and '
            + 'dedicated staff. From visa processing to investment facilitation to press '
            + 'coordination, the institutional capacity is visible to every partner who '
            + 'deals with it. The cumulative message is that the institution does not '
            + 'depend on any one person in it, which is the only kind of capacity a '
            + 'partner can plan around.'],
        criteria: [{ t: 'Which of the four roles do you think is most important for the ministry\'s '
            + 'international engagement right now, and why?' },
          { t: 'How do Mai\'s and Ha\'s responsibilities complement each other?' },
          { t: 'What skills do all four profiles share that are essential for working at a '
            + 'foreign ministry?' },
          { t: 'What does working at the Ministry of Foreign Affairs mean for the '
            + 'country\'s international position, based on these four profiles?' }]
      }
  },
    {
      id: 'c2',
      covers: ['Part 5'],
      ref: '5C',
      bookRef: 'Unit 1 · Part 5 · 5C',
      type: 'cloze',
      title: 'Language in Context: Professional Collocations for Your Writing',
      instruction: 'The sentences below are adapted from the staff profiles you read in '
        + 'exercises 5A and 5B. Complete each sentence with the best word. The '
        + 'collocations you practise here are the same ones you will need when you '
        + 'write your professional introduction email in Part 6.<br>Word list',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Pham Thi Mai is [[1]] for managing the arrival and reception of '
          + 'visiting diplomats and ensuring that all diplomatic formalities are '
          + 'correctly observed.'
        + '<br>'
        + '2. She regularly [[2]] with embassy staff from multiple countries to '
          + 'confirm schedules and protocol requirements before each visit.'
        + '<br>'
        + '3. Mai is currently [[3]] the detailed logistics for a three-day official '
          + 'visit by the UN Special Rapporteur.'
        + '<br>'
        + '4. Nguyen Van Duc is [[4]] and updating the ministry\'s diplomatic visa '
          + 'processing procedures to reduce waiting times for applicants.'
        + '<br>'
        + '5. He frequently [[5]] with foreign embassies in Hanoi to coordinate '
          + 'document verification processes.'
        + '<br>'
        + '6. Le Quang Huy is currently [[6]] Viet Nam\'s participation in a major '
          + 'regional investment forum and working with embassies on bilateral economic '
          + 'frameworks.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': []
      },
      whyTitle: 'How each gap was decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '2': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '3': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '4': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '5': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '6': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.'
      }
    }
  ]
});
