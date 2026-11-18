/* Unit 5 §17 — Part 6 - Writing, bios.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s17', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Part 6 - Writing, bios', part: '6', section: '17',
          lesson: 'Part 6 - Writing, bios', title: 'Part 6 - Writing, bios' },
  objective: 'By the end of Part 6 you can recognise the parts of a formal investment '
        + 'letter and what each one is for, write investment correspondence from a '
        + 'table of data, and write a formal investment invitation letter of 100 to '
        + '120 words.',
  prev: 's16-writing-models', prevLabel: 'Part 6 - Writing, the models',
  next: 's18-writing-your-turn', nextLabel: 'Part 6 - Writing, your turn',
  cards: [
    {
      id: 'c1',
      covers: ['Part 6'],
      ref: '6B',
      bookRef: 'Unit 5 · Part 6 · 6B',
      type: 'writer',
      title: 'Writing Investment Correspondence from Data',
      instruction: 'Using the given information, write the following three items in formal '
        + 'English. Follow the structure and tone of the models in exercise '
        + '6A.<br>Writing Task 1 — Formal Letter of Invitation:<br>• From: Selamawit '
        + 'Tesfaye, Investment Facilitation Officer, Ministry of Foreign Affairs<br>• '
        + 'To: Ms. Elena Popescu, Cultural Affairs Director, Romanian Embassy<br>• '
        + 'Purpose: Invite her delegation to a bilateral cultural and investment '
        + 'coordination meeting, 22 November 2025<br>• Key message: The country\'s '
        + 'cultural heritage creates unique soft-power opportunities for investment '
        + 'promotion; joint programming is possible<br>• Closing: Express confidence '
        + 'that if the meeting goes well, it will open the door to deeper '
        + 'cooperation<br>Writing Task 2 — Follow-Up Email Summary:<br>• From: Dawit '
        + 'Bekele<br>• To: Klaus Richter<br>• Context: Summary of the meeting on 14 '
        + 'October; three agreed next steps (1. Ministry sends legal framework '
        + 'document; 2. Klaus presents to board by Friday; 3. IPA meeting to be '
        + 'arranged for following week if board approves)<br>• Tone: Professional, '
        + 'collegial; has worked together before<br>Writing Task 3 — Briefing Note '
        + 'Paragraph (3–4 sentences):<br>• Sector: Telecommunications and digital '
        + 'infrastructure<br>• Key facts: The country has 22 million potential mobile '
        + 'subscribers; 4G coverage is currently at 60% of populated areas; a South '
        + 'Korean consortium has signed a letter of intent; if a full investment '
        + 'agreement is reached, 4G coverage will reach 90% within three years<br>• '
        + 'Audience: Senior ministry official who will brief the foreign minister',
      paras: [{ label: 'How you open',
            purpose: 'One sentence that says who you are.' },
        { label: 'The body',
            purpose: 'Two or three sentences, using this unit\'s words.' },
        { label: 'How you close',
            purpose: 'One sentence that says what happens next.' }],
      minWords: 40,
      scaffold: {
        task: 'Using the given information, write the following three items in formal '
        + 'English. Follow the structure and tone of the models in exercise 6A. '
        + 'Writing Task 1 — Formal Letter of Invitation: • From: Selamawit Tesfaye, '
        + 'Investment Facilitation Officer, Ministry of Foreign Affairs • To: Ms. '
        + 'Elena Popescu, Cultural Affairs Director, Romanian Embassy • Purpose: '
        + 'Invite her delegation to a bilateral cultural and investment coordination '
        + 'meeting, 22 November 2025 • Key message: The country\'s cultural heritage '
        + 'creates unique soft-power opportunities for investment promotion; joint '
        + 'programming is possible • Closing: Express confidence that if the meeting '
        + 'goes well, it will open the door to deeper cooperation Writing Task 2 — '
        + 'Follow-Up Email Summary: • From: Dawit Bekele • To: Klaus Richter • '
        + 'Context: Summary of the meeting on 14 October; three agreed next steps (1. '
        + 'Ministry sends legal framework document; 2. Klaus presents to board by '
        + 'Friday; 3. IPA meeting to be arranged for following week if board '
        + 'approves) • Tone: Professional, collegial; has worked together before '
        + 'Writing Task 3 — Briefing Note Paragraph (3–4 sentences): • Sector: '
        + 'Telecommunications and digital infrastructure • Key facts: The country has '
        + '22 million potential mobile subscribers; 4G coverage is currently at 60% '
        + 'of populated areas; a South Korean consortium has signed a letter of '
        + 'intent; if a full investment agreement is reached, 4G coverage will reach '
        + '90% within three years • Audience: Senior ministry official who will brief '
        + 'the foreign minister',
        words: ['Writing Investment Correspondence from Data'],
        must: ['opens with who you are?',
          'uses this unit\'s vocabulary?',
          '40 words or more?',
          'closes with a next step?'],
        planPlaceholder: 'Dear …, My name is … I am writing to …'
      },
      model: ['This briefing note ____________________ an overview of the country\'s '
          + 'three highest-priority investment sectors for the 2025–2026 period: '
          + 'infrastructure, energy, and agriculture. Each sector ____________________ '
          + 'significant opportunities for both commercial investors and development '
          + 'finance institutions. If you require more ____________________ information '
          + 'on any specific sector, the Investment Promotion Agency can provide a '
          + 'detailed sector profile on request.',
        'Dear Mr. Richter, On behalf of the Ministry of Foreign Affairs, I have the '
          + '____________________ of inviting you and your delegation to participate in '
          + 'the National Development and Investment Forum, to be held in Addis Ababa '
          + 'on 14–15 October 2025. The Forum will bring together international '
          + 'investors, development partners, and government officials to '
          + '____________________ investment opportunities across the country\'s '
          + 'priority development sectors. We believe that if your delegation '
          + '____________________ the Forum, you will find the conversations highly '
          + 'productive and the investment landscape more advanced than you may expect. '
          + 'We look forward to welcoming you to Addis Ababa. Yours sincerely, Dawit '
          + 'Bekele',
        'Dear Ms. Al-Sayed, Thank you for your visit to the Ministry yesterday and '
          + 'for the constructive ____________________ we had regarding agricultural '
          + 'investment opportunities in our country. As agreed, I am attaching the '
          + 'full legal framework ____________________ for the Awash Valley joint '
          + 'venture zone. If you have any questions after reviewing it, please do not '
          + '____________________ to contact me directly. I look forward to arranging '
          + 'your meeting with the Investment Promotion Agency at a time that is '
          + 'convenient for you. Best regards, Dawit Bekele']
    }
  ]
});
