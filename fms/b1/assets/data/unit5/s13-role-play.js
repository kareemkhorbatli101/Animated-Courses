/* Unit 5 §13 — Part 4 - Role play.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s13', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Part 4 - Role play', part: '4', section: '13',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'By the end of Part 4 you can deliver an investment briefing script, take '
        + 'part in a panel discussion at a national investment forum, and say what '
        + 'makes an investment pitch work and what makes one fail.',
  prev: 's12-dialogue-script', prevLabel: 'Part 4 - The script',
  next: 's14-reading-profiles', nextLabel: 'Part 5 - Reading',
  cards: [
    {
      id: 'c1',
      covers: ['Part 4'],
      ref: '4B',
      bookRef: 'Unit 5 · Part 4 · 4B',
      type: 'roleplay',
      title: 'Role-Play: National Investment Forum – Panel Discussion',
      instruction: 'You are participating in a panel discussion at the National Development '
        + 'and Investment Forum in Addis Ababa. Ministry officials and investors are '
        + 'presenting and responding to questions about the country\'s priority '
        + 'investment sectors. Choose one role card and prepare a 3–4 sentence '
        + 'contribution. Use conditional language in at least one '
        + 'sentence.<br>Self-Introduction Template:<br>"Good morning. My name is ___. '
        + 'I am a ___ at / from ___. Our main interest today is ___. If ___, we '
        + '___."<br>Card 1: Dawit Bekele — Moderator and Economic Affairs Specialist, '
        + 'Ministry of Foreign Affairs — opens the panel and invites '
        + 'contributions<br>Card 2: Klaus Richter — Managing Director, Richter '
        + 'Infrastructure GmbH — presents his company\'s investment interest<br>Card '
        + '3: Ms. Fatima Al-Sayed — Investment Director, Gulf Development Fund — '
        + 'presents Gulf interest in agriculture<br>Card 4: Selamawit Tesfaye — '
        + 'Investment Facilitation Officer, Ministry of Foreign Affairs — manages the '
        + 'logistics and keeps the panel on schedule',
      scene: 'u5-4b',
      roles: [{ who: 'dawit', label: 'Card A · Dawit' },
        { who: 'klaus', label: 'Card B · Klaus Richter' }],
      briefs: [{ label: 'Card A', text: 'Dawit — desk officer' },
        { label: 'Card B', text: 'Klaus Richter — investor, German Embassy' }],
      remember: ['Model exchange — Dawit Bekele: Good morning. My name is Dawit Bekele, '
          + 'Economic Affairs Specialist at the Ministry of Foreign Affairs. I will be '
          + 'moderating today\'s panel. Our priority sectors are infrastructure, '
          + 'energy, agriculture, and telecommunications. If any participant has a '
          + 'question about our regulatory framework, I will address it after the '
          + 'panel. — Klaus Richter: Good morning. I am Klaus Richter, Managing '
          + 'Director of Richter Infrastructure GmbH from Germany. My company has 20 '
          + 'years of experience in road construction and energy distribution. We are '
          + 'here because we believe this country\'s infrastructure development is one '
          + 'of the most important opportunities in the region. If the legal framework '
          + 'delivers the protection described, we will begin a feasibility study '
          + 'within 90 days. — Fatima Al-Sayed: Good morning. I am Fatima Al-Sayed from '
          + 'the Gulf Development Fund. Our fund has a long-term focus on food '
          + 'security. This country\'s agricultural sector is directly aligned with our '
          + 'strategic objectives. If the land rights and water usage framework can be '
          + 'confirmed in writing, we would discuss a joint venture at a meaningful '
          + 'scale. — Selamawit Tesfaye: Good morning. I am Selamawit Tesfaye, '
          + 'Investment Facilitation Officer at the Ministry of Foreign Affairs. I '
          + 'manage the official programme for today\'s Forum. If you have a bilateral '
          + 'meeting this afternoon, please check your delegate folder for the room and '
          + 'time. If you need to arrange any additional meetings, please find me at '
          + 'the reception desk.',
        'Model Dialogue Dawit Bekele: Good morning. My name is Dawit Bekele and I '
          + 'am an Economic Affairs Specialist at the Ministry of Foreign Affairs. Our '
          + 'interest on this panel is practical rather than promotional: we want to '
          + 'hear what is actually slowing decisions down. If we understand where the '
          + 'delays are, we will fix the process rather than add another incentive. I '
          + 'will ask each panellist to be specific. Klaus Richter: Good morning. Klaus '
          + 'Richter, Managing Director of Richter Infrastructure GmbH. We came here '
          + 'two years ago to look and we are here now to commit, so I will answer the '
          + 'moderator\'s question directly: what slowed us was not cost or risk but '
          + 'the number of offices. Four separate approvals, none of which could tell '
          + 'us what the others needed. If the single-window process works as '
          + 'described, our timeline shortens by months — and that is worth more to us '
          + 'than a tax holiday. Fatima Al-Sayed: Good morning. I am Fatima Al-Sayed, '
          + 'Investment Director at the Gulf Development Fund. Our interest is '
          + 'agriculture and food security, and our horizon is fifteen years, which '
          + 'changes what we are assessing. We are not pricing this year\'s conditions; '
          + 'we are pricing the durability of the institutions. If the water rights '
          + 'framework is statutory rather than administrative, we can consider '
          + 'commitments at a scale that would not otherwise be prudent. Selamawit '
          + 'Tesfaye: Good morning. Selamawit Tesfaye, Investment Facilitation Officer '
          + 'at the Ministry of Foreign Affairs. My role is the unglamorous half of '
          + 'what the panel has described: the case officers, the processing targets, '
          + 'and the follow-up. If an investor leaves this Forum without a named '
          + 'contact and a date, we have failed regardless of what was said on stage. '
          + 'Every delegation here will have both before they fly home.'],
      minWords: 30,
      modelScene: {
        id: 'u5-4b',
        label: 'Watch a worked role play',
        note: 'This is the book\'s own version, not the only one. Try yours first — the '
        + 'pop-up opens after your attempt.'
      }
    },
    {
      id: 'c2',
      covers: ['Part 4'],
      ref: '4C',
      bookRef: 'Unit 5 · Part 4 · 4C',
      type: 'discuss',
      title: 'Group Discussion: What Makes an Investment Pitch Work?',
      instruction: 'Discuss the following questions in a small group based on the role-plays '
        + 'and presentations in exercises 4A and 4B. (Aim for 3–4 sentences per '
        + 'answer.)',
      minWords: 12,
      questions: [{ q: 'Which briefings felt most persuasive? What specifically made them work?' },
        { q: 'How does using conditional language make a ministry officer sound more '
          + 'professional when answering investor concerns?' },
        { q: 'What is the biggest mistake a ministry officer can make when pitching to a '
          + 'hesitant investor?' }],
      ideas: ['Which briefings felt most persuasive? What specifically made them work?',
        'How does using conditional language make a ministry officer sound more '
          + 'professional when answering investor concerns?',
        'What is the biggest mistake a ministry officer can make when pitching to a '
          + 'hesitant investor?'],
      okMsg: 'Good. Open the notes below and compare with the book\'s answers.',
      coach: {
        title: 'Compare with the book',
        target: 'Conditionals and the language of commitment',
        task: 'Discuss the following questions in a small group based on the role-plays '
        + 'and presentations in exercises 4A and 4B. (Aim for 3–4 sentences per '
        + 'answer.)',
        parts: ['Which briefings felt most persuasive? What specifically made them work?',
        'How does using conditional language make a ministry officer sound more '
          + 'professional when answering investor concerns?',
        'What is the biggest mistake a ministry officer can make when pitching to a '
          + 'hesitant investor?'],
        example: ['B1 target — The briefings that worked were the specific ones. A named case '
            + 'officer, a processing target, and a document the investor could take to a '
            + 'board are worth more than any description of potential. The pitches that '
            + 'failed described opportunity without describing process. The difference '
            + 'was always specificity rather than confidence, and specificity is the part '
            + 'that can be prepared in advance.',
          'B2 extension — The most persuasive briefings answered the question the '
            + 'investor actually asked, which was almost never about opportunity. They '
            + 'named the case officer, stated the processing target, and offered a '
            + 'document that could be shown to a board without translation. The weakest '
            + 'ones described the country\'s potential at length — which every competing '
            + 'country also does, and left the investor with nothing to take away. An '
            + 'investor who leaves with nothing in their hands has effectively not had '
            + 'the meeting.',
          'B1 target — Conditional language shows that you understand the investor\'s '
            + 'decision has conditions attached. "If you submit the application, we will '
            + 'fast-track it" commits to something precise without over-promising. It '
            + 'also makes clear what depends on them and what depends on us.',
          'B2 extension — Conditional language lets you make a firm commitment '
            + 'without claiming to control what you do not control. "If the feasibility '
            + 'study confirms viability, we will assign a case officer within thirty '
            + 'days" is precise, honest, and checkable. It also divides the obligations '
            + 'visibly: this is your step, this is ours. An unconditional promise sounds '
            + 'stronger in the room and is weaker on paper — because the investor knows '
            + 'it cannot be guaranteed and begins to discount everything else.',
          'B1 target — The biggest mistake is over-promising to a hesitant investor. '
            + 'A hesitant investor is testing your reliability, so an answer that is too '
            + 'good confirms their doubt rather than removing it. The right response to '
            + 'hesitation is more specificity — not more enthusiasm.',
          'B2 extension — The biggest mistake is responding to hesitation with '
            + 'enthusiasm. A hesitant investor is not short of encouragement; they are '
            + 'testing whether what you say can be relied on, so an answer that is better '
            + 'than they expected increases their suspicion rather than reducing it. The '
            + 'correct response is more specificity: a date, a clause, a name, an honest '
            + 'acknowledgment of what has not yet been tested. Meron\'s answer in Part 3 '
            + 'is the model — she conceded that the arbitration framework had never been '
            + 'challenged — and that concession is precisely what made the rest of her '
            + 'answer credible.'],
        criteria: [{ t: 'Which briefings felt most persuasive? What specifically made them work?' },
          { t: 'How does using conditional language make a ministry officer sound more '
            + 'professional when answering investor concerns?' },
          { t: 'What is the biggest mistake a ministry officer can make when pitching to a '
            + 'hesitant investor?' }]
      }
    }
  ]
});
