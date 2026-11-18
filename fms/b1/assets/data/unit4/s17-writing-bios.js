/* Unit 4 §17 — Part 6 - Writing, bios.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u4-s17', {
  book: { source: 'FMS B1.1', ref: 'Unit 4 · Part 6 - Writing, bios', part: '6', section: '17',
          lesson: 'Part 6 - Writing, bios', title: 'Part 6 - Writing, bios' },
  objective: 'By the end of Part 6 you can recognise the elements of a note verbale and '
        + 'what each one is for, write a formal invitation, and write a '
        + 'congratulatory note of 60 to 80 words.',
  prev: 's16-writing-models', prevLabel: 'Part 6 - Writing, the models',
  next: 's18-writing-your-turn', nextLabel: 'Part 6 - Writing, your turn',
  cards: [
    {
      id: 'c1',
      covers: ['Part 6'],
      ref: '6B',
      bookRef: 'Unit 4 · Part 6 · 6B',
      type: 'writer',
      title: 'Write a Formal Invitation',
      instruction: 'Write a formal English invitation (80–100 words) from the Kazakh Ministry '
        + 'of Foreign Affairs to the German Ambassador, inviting him to a Cultural '
        + 'Heritage Cooperation signing ceremony.<br>Given information:<br>• Host: '
        + 'Kazakh Ministry of Foreign Affairs<br>• Guest: His Excellency the '
        + 'Ambassador of the Federal Republic of Germany, Astana<br>• Event: Signing '
        + 'ceremony of the Kazakhstan–Germany Cultural Heritage Cooperation '
        + 'Protocol<br>• Date: Wednesday, 25 June 2025<br>• Time: 11:00 a.m.<br>• '
        + 'Venue: Reception Hall, Ministry of Foreign Affairs, Astana<br>• '
        + 'Additional: Formal reception to follow; interpretation '
        + 'available<br>Format: You may write this as a note verbale (third person) '
        + 'or as a formal letter (first person) — state your choice at the top.',
      paras: [{ label: 'How you open',
            purpose: 'One sentence that says who you are.' },
        { label: 'The body',
            purpose: 'Two or three sentences, using this unit\'s words.' },
        { label: 'How you close',
            purpose: 'One sentence that says what happens next.' }],
      minWords: 60,
      scaffold: {
        task: 'Write a formal English invitation (80–100 words) from the Kazakh Ministry '
        + 'of Foreign Affairs to the German Ambassador, inviting him to a Cultural '
        + 'Heritage Cooperation signing ceremony. Given information: • Host: Kazakh '
        + 'Ministry of Foreign Affairs • Guest: His Excellency the Ambassador of the '
        + 'Federal Republic of Germany, Astana • Event: Signing ceremony of the '
        + 'Kazakhstan–Germany Cultural Heritage Cooperation Protocol • Date: '
        + 'Wednesday, 25 June 2025 • Time: 11:00 a.m. • Venue: Reception Hall, '
        + 'Ministry of Foreign Affairs, Astana • Additional: Formal reception to '
        + 'follow; interpretation available Format: You may write this as a note '
        + 'verbale (third person) or as a formal letter (first person) — state your '
        + 'choice at the top.',
        words: ['Write a Formal Invitation'],
        must: ['opens with who you are?',
          'uses this unit\'s vocabulary?',
          '60 words or more?',
          'closes with a next step?'],
        planPlaceholder: 'Dear …, My name is … I am writing to …'
      },
      model: ['The Ministry of Foreign Affairs of the Republic of Kazakhstan '
          + '____________________ its compliments to the Embassy of the Italian '
          + 'Republic and has the honor to ____________________ His Excellency the '
          + 'Ambassador of Italy to the signing ceremony of the Kazakhstan–Italy '
          + 'Cultural Heritage Cooperation Protocol, to be held at the Ministry of '
          + 'Foreign Affairs, Astana, on Thursday, 19 June 2025, at ten o\'clock in the '
          + 'morning. The Ministry avails itself of this opportunity to renew to the '
          + 'Embassy the ____________________ of its highest consideration.',
        'His Excellency the Minister of Foreign Affairs of the Republic of '
          + 'Kazakhstan presents his warmest ____________________ to His Excellency the '
          + 'newly appointed Minister of Foreign Affairs of Japan upon his '
          + '____________________ to this distinguished office, and expresses his '
          + 'sincere confidence that the ties of friendship and cooperation between '
          + 'Kazakhstan and Japan will continue to ____________________ under his '
          + 'distinguished leadership.',
        'Your Excellency, On behalf of the Kazakh Ministry of Foreign Affairs, I '
          + 'have the honor to ____________________ Your Excellency to the signing '
          + 'ceremony of the Kazakhstan–Germany Bilateral Cooperation Framework, '
          + 'scheduled for Tuesday, 18 June 2025, at eleven o\'clock in the morning at '
          + 'the Ministry of Foreign Affairs in Astana. The ceremony will be attended '
          + 'by both Foreign ____________________. A formal reception will '
          + '____________________ at the Ministry following the ceremony. We look '
          + 'forward to your distinguished presence. Yours sincerely, Aigerim Dosanova, '
          + 'Protocol Department']
    }
  ]
});
