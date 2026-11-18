/* Unit 1 §17 — Part 6 - Writing, bios.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s17', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Part 6 - Writing, bios', part: '6', section: '17',
          lesson: 'Part 6 - Writing, bios', title: 'Part 6 - Writing, bios' },
  objective: 'By the end of Part 6 you can recognise the five parts of a professional '
        + 'introduction email and what each one is for, write a short professional '
        + 'bio, and write your own introduction email of 80 to 100 words in a formal '
        + 'register.',
  prev: 's16-writing-models', prevLabel: 'Part 6 - Writing, the models',
  next: 's18-writing-your-turn', nextLabel: 'Part 6 - Writing, your turn',
  cards: [
    {
      id: 'c1',
      covers: ['Part 6'],
      ref: '6B',
      bookRef: 'Unit 1 · Part 6 · 6B',
      type: 'writer',
      title: 'Writing Professional Bios',
      instruction: 'Using the given information, draft a professional bio (4–5 sentences) in '
        + 'the same format and tone as the model emails in exercise 6A.<br>Bio '
        + '1:<br>• Name: Vu Thi Lan<br>• Job Title: Visa and Consular Officer<br>• '
        + 'Workplace: Ministry of Foreign Affairs<br>• Responsibilities: Processing '
        + 'visa applications, assisting foreign nationals, coordinating with '
        + 'embassies on document verification<br>• Current project: Streamlining the '
        + 'diplomatic visa process for investment forum participants<br>• '
        + 'Collaboration: Works daily with foreign embassies in Hanoi<br>Bio 2:<br>• '
        + 'Name: Dang Minh Tuan<br>• Job Title: Cultural Affairs Coordinator<br>• '
        + 'Workplace: Cultural Relations Division, Ministry of Foreign Affairs<br>• '
        + 'Responsibilities: Organizing cultural exchange programs, promoting '
        + 'national cultural heritage internationally, coordinating with foreign '
        + 'cultural institutes<br>• Current project: Preparing a cultural heritage '
        + 'exhibition for three European partner capitals<br>• Collaboration: Works '
        + 'with artists, historians, and foreign cultural institutes<br>Bio 3:<br>• '
        + 'Name: Dr. Hoang Kim Ngan<br>• Job Title: Political Affairs Analyst<br>• '
        + 'Workplace: Political Affairs Directorate, Ministry of Foreign Affairs<br>• '
        + 'Responsibilities: Analyzing international political developments, '
        + 'preparing briefing papers for senior officials, monitoring bilateral '
        + 'relations<br>• Current project: Preparing a comprehensive briefing on Viet '
        + 'Nam–EU relations for the foreign minister<br>• Collaboration: Works with '
        + 'regional embassies and international think tanks',
      paras: [{ label: 'How you open',
            purpose: 'One sentence that says who you are.' },
        { label: 'The body',
            purpose: 'Two or three sentences, using this unit\'s words.' },
        { label: 'How you close',
            purpose: 'One sentence that says what happens next.' }],
      minWords: 40,
      scaffold: {
        task: 'Using the given information, draft a professional bio (4–5 sentences) in '
        + 'the same format and tone as the model emails in exercise 6A. Bio 1: • '
        + 'Name: Vu Thi Lan • Job Title: Visa and Consular Officer • Workplace: '
        + 'Ministry of Foreign Affairs • Responsibilities: Processing visa '
        + 'applications, assisting foreign nationals, coordinating with embassies on '
        + 'document verification • Current project: Streamlining the diplomatic visa '
        + 'process for investment forum participants • Collaboration: Works daily '
        + 'with foreign embassies in Hanoi Bio 2: • Name: Dang Minh Tuan • Job Title: '
        + 'Cultural Affairs Coordinator • Workplace: Cultural Relations Division, '
        + 'Ministry of Foreign Affairs • Responsibilities: Organizing cultural '
        + 'exchange programs, promoting national cultural heritage internationally, '
        + 'coordinating with foreign cultural institutes • Current project: Preparing '
        + 'a cultural heritage exhibition for three European partner capitals • '
        + 'Collaboration: Works with artists, historians, and foreign cultural '
        + 'institutes Bio 3: • Name: Dr. Hoang Kim Ngan • Job Title: Political '
        + 'Affairs Analyst • Workplace: Political Affairs Directorate, Ministry of '
        + 'Foreign Affairs • Responsibilities: Analyzing international political '
        + 'developments, preparing briefing papers for senior officials, monitoring '
        + 'bilateral relations • Current project: Preparing a comprehensive briefing '
        + 'on Viet Nam–EU relations for the foreign minister • Collaboration: Works '
        + 'with regional embassies and international think tanks',
        words: ['Writing Professional Bios'],
        must: ['opens with who you are?',
          'uses this unit\'s vocabulary?',
          '40 words or more?',
          'closes with a next step?'],
        planPlaceholder: 'Dear …, My name is … I am writing to …'
      },
      model: ['Dear Ms. Hoffmann, My name is Nguyen Van Duc, and I am a Consular Affairs '
          + 'Officer at the Vietnamese Ministry of Foreign Affairs. My primary '
          + '____________________ include processing diplomatic visas, managing travel '
          + 'documentation, and assisting foreign nationals with consular matters in '
          + 'Viet Nam. I am currently ____________________ a review of our visa '
          + 'processing procedures to reduce waiting times for diplomatic applicants. I '
          + 'welcome the opportunity to ____________________ closely with your embassy '
          + 'on any documentation and consular matters. Yours sincerely, Nguyen Van Duc',
        'Dear Mr. Watanabe, I am writing to introduce myself. My name is Tran Thu '
          + 'Ha, and I ____________________ as Press Attaché at the Vietnamese Ministry '
          + 'of Foreign Affairs. I manage media accreditation, official press '
          + 'statements, and press conferences at the ministry. At the moment, I am '
          + '____________________ the full media program for the upcoming regional '
          + 'investment conference in Hanoi. I am glad to ____________________ you with '
          + 'all the information and accreditation you need for your coverage. Best '
          + 'regards, Tran Thu Ha',
        'Dear Ms. Fischer, My name is Le Quang Huy, and I am an '
          + '____________________ Specialist at the Vietnamese Ministry of Foreign '
          + 'Affairs. I focus on trade diplomacy and international investment '
          + 'facilitation. I am currently ____________________ Viet Nam\'s '
          + 'participation in the upcoming regional investment forum and look forward '
          + 'to discussing our bilateral economic cooperation framework with your team. '
          + 'I would welcome the opportunity to ____________________ a preliminary '
          + 'meeting at your earliest convenience. Kind regards, Le Quang Huy']
    }
  ]
});
