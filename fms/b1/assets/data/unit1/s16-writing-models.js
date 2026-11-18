/* Unit 1 §16 — Part 6 - Writing, the models.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s16', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Part 6 - Writing, the models', part: '6', section: '16',
          lesson: 'Part 6 - Writing, the models', title: 'Part 6 - Writing, the models' },
  objective: 'By the end of Part 6 you can recognise the five parts of a professional '
        + 'introduction email and what each one is for, write a short professional '
        + 'bio, and write your own introduction email of 80 to 100 words in a formal '
        + 'register.',
  prev: 's15-reading-comprehension', prevLabel: 'Part 5 - Comprehension',
  next: 's17-writing-bios', nextLabel: 'Part 6 - Writing, bios',
  cards: [
    {
      id: 'c1',
      covers: ['Part 6'],
      ref: '6A',
      bookRef: 'Unit 1 · Part 6 · 6A',
      type: 'study',
      title: 'Model Writing – Sample Professional Introduction Emails',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Email 1: Consular Affairs Officer to Foreign Embassy Counterpart' + '</p>'
        + '<p>' + '1. Dear Ms. Hoffmann, My name is Nguyen Van Duc, and I am a Consular '
          + 'Affairs Officer at the Vietnamese Ministry of Foreign Affairs. My primary '
          + '____________________ include processing diplomatic visas, managing travel '
          + 'documentation, and assisting foreign nationals with consular matters in '
          + 'Viet Nam. I am currently ____________________ a review of our visa '
          + 'processing procedures to reduce waiting times for diplomatic applicants. I '
          + 'welcome the opportunity to ____________________ closely with your embassy '
          + 'on any documentation and consular matters. Yours sincerely, Nguyen Van Duc' + '</p>'
        + '<p>' + 'Word list: a) collaborate b) responsibilities c) conducting' + '</p>'
        + '<p>' + 'Email 2: Press Attaché to Foreign Journalist Contact' + '</p>'
        + '<p>' + '2. Dear Mr. Watanabe, I am writing to introduce myself. My name is Tran '
          + 'Thu Ha, and I ____________________ as Press Attaché at the Vietnamese '
          + 'Ministry of Foreign Affairs. I manage media accreditation, official press '
          + 'statements, and press conferences at the ministry. At the moment, I am '
          + '____________________ the full media program for the upcoming regional '
          + 'investment conference in Hanoi. I am glad to ____________________ you with '
          + 'all the information and accreditation you need for your coverage. Best '
          + 'regards, Tran Thu Ha' + '</p>'
        + '<p>' + 'Word list: a) coordinating b) serve c) assist' + '</p>'
        + '<p>' + 'Email 3: Economic Affairs Specialist to German Embassy Representative' + '</p>'
        + '<p>' + '3. Dear Ms. Fischer, My name is Le Quang Huy, and I am an '
          + '____________________ Specialist at the Vietnamese Ministry of Foreign '
          + 'Affairs. I focus on trade diplomacy and international investment '
          + 'facilitation. I am currently ____________________ Viet Nam\'s '
          + 'participation in the upcoming regional investment forum and look forward '
          + 'to discussing our bilateral economic cooperation framework with your team. '
          + 'I would welcome the opportunity to ____________________ a preliminary '
          + 'meeting at your earliest convenience. Kind regards, Le Quang Huy' + '</p>'
        + '<p>' + 'Word list: a) coordinating b) Economic Affairs c) arrange' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['Email 1: Consular Affairs Officer to Foreign Embassy Counterpart',
        '1. Dear Ms. Hoffmann, My name is Nguyen Van Duc, and I am a Consular '
          + 'Affairs Officer at the Vietnamese Ministry of Foreign Affairs. My primary '
          + '____________________ include processing diplomatic visas, managing travel '
          + 'documentation, and assisting foreign nationals with consular matters in '
          + 'Viet Nam. I am currently ____________________ a review of our visa '
          + 'processing procedures to reduce waiting times for diplomatic applicants. I '
          + 'welcome the opportunity to ____________________ closely with your embassy '
          + 'on any documentation and consular matters. Yours sincerely, Nguyen Van Duc',
        'Word list: a) collaborate b) responsibilities c) conducting',
        'Email 2: Press Attaché to Foreign Journalist Contact'],
      visual: { spot: 'email-anatomy', wide: true }
    },
    {
      id: 'c2',
      covers: ['Part 6'],
      ref: '6C',
      bookRef: 'Unit 1 · Part 6 · 6C',
      type: 'dragmatch',
      title: 'Analyze the Parts of a Professional Email',
      instruction: 'Match each part (1–5) with its correct function (A–E).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 4,
      say: true,
      chips: [{ id: 'm-a', label: 'a) Explains your main responsibilities and what you are currently working '
          + 'on' },
        { id: 'm-b', label: 'b) Opens the email respectfully, using the recipient\'s full name and '
          + 'title' },
        { id: 'm-c', label: 'c) Expresses your willingness to collaborate and suggests a next step' },
        { id: 'm-d', label: 'd) States your full name and job title clearly in the first sentence' },
        { id: 'm-e', label: 'e) Establishes the topic of the email and why you are writing' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Subject Line', accept: 'm-a',
          why: '<b>Subject Line</b> — Explains your main responsibilities and what you are '
            + 'currently working on This is the book\'s own pairing, from Column A '
            + 'against Column B.' },
        { id: 't2', num: 2, label: 'Formal Greeting', accept: 'm-b',
          why: '<b>Formal Greeting</b> — Opens the email respectfully, using the '
            + 'recipient\'s full name and title This is the book\'s own pairing, from '
            + 'Column A against Column B.' },
        { id: 't3', num: 3, label: 'Opening Self-Introduction', accept: 'm-c',
          why: '<b>Opening Self-Introduction</b> — Expresses your willingness to '
            + 'collaborate and suggests a next step This is the book\'s own pairing, from '
            + 'Column A against Column B.' },
        { id: 't4', num: 4, label: 'Professional Context Paragraph', accept: 'm-d',
          why: '<b>Professional Context Paragraph</b> — States your full name and job '
            + 'title clearly in the first sentence This is the book\'s own pairing, from '
            + 'Column A against Column B.' },
        { id: 't5', num: 5, label: 'Closing and Call to Action', accept: 'm-e',
          why: '<b>Closing and Call to Action</b> — Establishes the topic of the email and '
            + 'why you are writing This is the book\'s own pairing, from Column A against '
            + 'Column B.' }]
    }
  ]
});
