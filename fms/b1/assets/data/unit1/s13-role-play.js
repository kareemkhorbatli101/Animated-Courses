/* Unit 1 §13 — Part 4 - Role play.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s13', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Part 4 - Role play', part: '4', section: '13',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'By the end of Part 4 you can perform a complete reception script from '
        + 'greeting to handover, introduce yourself and your role at a formal '
        + 'reception, and say what makes a good first impression and what damages '
        + 'one.',
  prev: 's12-dialogue-script', prevLabel: 'Part 4 - The script',
  next: 's14-reading-profiles', nextLabel: 'Part 5 - Reading',
  cards: [
    {
      id: 'c1',
      covers: ['Part 4'],
      ref: '4B',
      bookRef: 'Unit 1 · Part 4 · 4B',
      type: 'roleplay',
      title: 'Role-Play: Viet Nam Foreign Investment Forum – Opening Reception',
      instruction: 'Imagine you are at the opening networking reception of the Viet Nam '
        + 'Foreign Investment Forum in Hanoi. Ministry officials are mingling with '
        + 'foreign delegates before the official program begins. Introduce yourself '
        + 'to two other participants. Use your real position or one of the ministry '
        + 'staff cards below. Take brief notes on who you meet and what they do. '
        + '(Each introduction: 3–4 sentences.)Self-Introduction Template:"Good '
        + 'evening. My name is ___. I am a ___ at the Vietnamese Ministry of Foreign '
        + 'Affairs. I work in ___. Right now, I am ___. It is a pleasure to meet '
        + 'you."Card 1: Le Quang Huy — Economic Affairs Specialist, Vietnamese MFA — '
        + 'currently coordinating the national investment facilitation frameworkCard '
        + '2: Pham Thi Mai — Protocol Officer, Vietnamese MFA — organizing the '
        + 'Forum\'s official events and all delegation schedulesCard 3: Tran Thu Ha — '
        + 'Press Attaché, Vietnamese MFA — managing media coverage and international '
        + 'press access for the ForumCard 4: Nguyen Van Duc — Consular Affairs '
        + 'Officer, Vietnamese MFA — managing diplomatic visa processing for all '
        + 'Forum participants',
      scene: 'u1-4b',
      roles: [{ who: 'huy', label: 'Card A · Huy' },
        { who: 'mai', label: 'Card B · Mai' }],
      briefs: [{ label: 'Card A', text: 'Huy — economic affairs specialist' },
        { label: 'Card B', text: 'Mai — protocol officer' }],
      remember: ['Model exchange — Le Quang Huy: Good evening. My name is Le Quang Huy. I am '
          + 'an Economic Affairs Specialist at the Vietnamese Ministry of Foreign '
          + 'Affairs. I work in trade diplomacy. Right now, I am coordinating the '
          + 'national investment facilitation framework. It is a pleasure to meet you. '
          + '— Pham Thi Mai: Good evening. I am Pham Thi Mai, Protocol Officer at the '
          + 'Ministry of Foreign Affairs. My role at this Forum is to make sure all '
          + 'events and schedules run smoothly. Right now, I am helping delegates with '
          + 'the official program. It is a pleasure to meet you. — Tran Thu Ha: Good '
          + 'evening. I am Tran Thu Ha, Press Attaché at the Ministry of Foreign '
          + 'Affairs. I work in media and communications. Right now, I am managing '
          + 'press operations for the Forum this week. It is a pleasure to meet you. — '
          + 'Nguyen Van Duc: Good evening. I am Nguyen Van Duc from the Consular '
          + 'Affairs Section of the Ministry of Foreign Affairs. My team processes '
          + 'diplomatic visas and travel documents. Right now, I am managing '
          + 'documentation for all Forum participants. I hope your entry to Viet Nam '
          + 'was smooth.',
        'Model Dialogue Le Quang Huy: Good evening. My name is Le Quang Huy. I am '
          + 'an Economic Affairs Specialist at the Vietnamese Ministry of Foreign '
          + 'Affairs. I work in trade diplomacy. Right now, I am coordinating the '
          + 'national investment facilitation framework. It is a pleasure to meet you. '
          + 'Pham Thi Mai: Good evening. I am Pham Thi Mai, Protocol Officer at the '
          + 'Ministry of Foreign Affairs. My role at this Forum is to make sure all '
          + 'events and schedules run smoothly. Right now, I am helping delegates with '
          + 'the official programme. It is a pleasure to meet you. Tran Thu Ha: Good '
          + 'evening. I am Tran Thu Ha, Press Attaché at the Ministry of Foreign '
          + 'Affairs. I work in media and communications. Right now, I am managing '
          + 'press operations for the Forum this week. It is a pleasure to meet you. '
          + 'Nguyen Van Duc: Good evening. I am Nguyen Van Duc from the Consular '
          + 'Affairs Section of the Ministry of Foreign Affairs. My team processes '
          + 'diplomatic visas and travel documents. Right now, I am managing '
          + 'documentation for all Forum participants. I hope your entry to Viet Nam '
          + 'was smooth.'],
      minWords: 30,
      modelScene: {
        id: 'u1-4b',
        label: 'Watch a worked role play',
        note: 'This is the book\'s own version, not the only one. Try yours first — the '
        + 'pop-up opens after your attempt.'
      }
    },
    {
      id: 'c2',
      covers: ['Part 4'],
      ref: '4C',
      bookRef: 'Unit 1 · Part 4 · 4C',
      type: 'discuss',
      title: 'Group Discussion: What Makes a Good First Impression?',
      instruction: 'Discuss the following questions in a small group based on the role-plays '
        + 'and introductions in exercises 4A and 4B. (Aim for 3–4 sentences per '
        + 'answer.)',
      minWords: 12,
      questions: [{ q: 'Which reception interactions felt most natural and professional? What '
          + 'specifically made them work?' },
        { q: 'What phrases sounded genuinely professional? What made some sound awkward '
          + 'or too informal?' },
        { q: 'How does body language — eye contact, posture, and a calm manner — affect '
          + 'the visitor\'s experience even before any words are spoken?' }],
      ideas: ['Which reception interactions felt most natural and professional? What '
          + 'specifically made them work?',
        'What phrases sounded genuinely professional? What made some sound awkward '
          + 'or too informal?',
        'How does body language — eye contact, posture, and a calm manner — affect '
          + 'the visitor\'s experience even before any words are spoken?'],
      okMsg: 'Good. Open the notes below and compare with the book\'s answers.',
      coach: {
        title: 'Compare with the book',
        target: 'Present simple and present continuous',
        task: 'Discuss the following questions in a small group based on the role-plays '
        + 'and introductions in exercises 4A and 4B. (Aim for 3–4 sentences per '
        + 'answer.)',
        parts: ['Which reception interactions felt most natural and professional? What '
          + 'specifically made them work?',
        'What phrases sounded genuinely professional? What made some sound awkward '
          + 'or too informal?',
        'How does body language — eye contact, posture, and a calm manner — affect '
          + 'the visitor\'s experience even before any words are spoken?'],
        example: ['B1 target — The best interactions were the ones where the officer gave the '
            + 'visitor a clear next step immediately. Using the visitor\'s name — for '
            + 'example, "Thank you, Ms. Martin" — sounded much more professional than '
            + 'just "Okay." Offering to call the contact person right away removed all '
            + 'uncertainty.',
          'B2 extension — A: The interactions that worked best were the ones where '
            + 'the officer made the visitor feel expected and welcomed immediately — even '
            + 'in the case of Mr. Chaiyaporn, who had no appointment. The best officers '
            + 'offered a clear next step right away rather than leaving the visitor to '
            + 'guess. B: Using the visitor\'s name and title consistently was the single '
            + 'most professional habit. C: Offering to notify the relevant officer '
            + 'immediately removed all uncertainty from the interaction and signalled '
            + 'that the institution was organized. D: What all three have in common is '
            + 'that none of them required extra time. The officer who used the visitor\'s '
            + 'name and offered a next step was not slower than the one who said "Okay" — '
            + 'only better prepared.',
          'B1 target — "Welcome to the Ministry of Foreign Affairs. How may I help '
            + 'you?" sounded professional because it names the institution and offers '
            + 'help immediately. Phrases like "Okay, go ahead" sounded unprofessional '
            + 'because they give no useful information. The most effective phrases showed '
            + 'both warmth and structure.',
          'B2 extension — A: "Welcome to the Ministry of Foreign Affairs. How may I '
            + 'help you?" sounds professional because it names the institution and '
            + 'immediately offers assistance. B: "Okay, go ahead" sounds unprofessional — '
            + 'it gives no useful information and seems dismissive of the visitor. C: The '
            + 'most effective phrases combine institutional warmth with a concrete next '
            + 'step, which is exactly what a diplomatic visitor expects. D: The phrases '
            + 'that failed were not rude; they were simply empty, and an empty phrase in '
            + 'a diplomatic setting is read as indifference rather than as brevity.',
          'B1 target — If a reception officer looks at a screen and does not make eye '
            + 'contact, the visitor feels unwelcome immediately. Good posture and a '
            + 'direct greeting show the officer is ready and glad to help. In a '
            + 'diplomatic context, this first impression is very important.',
          'B2 extension — A: If a reception officer looks distracted or keeps looking '
            + 'at a screen, the visitor immediately feels like an inconvenience. B: Good '
            + 'posture, a genuine greeting, and direct eye contact communicate that the '
            + 'officer is present, ready, and glad to help. C: In a diplomatic context '
            + 'the visitor reads these signals as evidence of how the whole ministry '
            + 'works, which is why body language matters before a single word is spoken.'],
        criteria: [{ t: 'Which reception interactions felt most natural and professional? What '
            + 'specifically made them work?' },
          { t: 'What phrases sounded genuinely professional? What made some sound awkward '
            + 'or too informal?' },
          { t: 'How does body language — eye contact, posture, and a calm manner — affect '
            + 'the visitor\'s experience even before any words are spoken?' }]
      }
    }
  ]
});
