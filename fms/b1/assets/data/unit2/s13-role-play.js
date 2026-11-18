/* Unit 2 §13 — Part 4 - Role play.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s13', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 4 - Role play', part: '4', section: '13',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'By the end of Part 4 you can make a coordination call that settles date, '
        + 'venue, interpretation and equipment, open a bilateral meeting formally, '
        + 'and say how a meeting is held to its agenda and its time.',
  prev: 's12-dialogue-script', prevLabel: 'Part 4 - The script',
  next: 's14-reading-profiles', nextLabel: 'Part 5 - Reading',
  cards: [
    {
      id: 'c1',
      covers: ['Part 4'],
      ref: '4B',
      bookRef: 'Unit 2 · Part 4 · 4B',
      type: 'roleplay',
      title: 'Role-Play: Opening the Bilateral Meeting',
      instruction: 'Practice opening a bilateral meeting formally. Use the three opening '
        + 'variants below. One student plays the host delegation lead; the other '
        + 'plays the visiting delegation lead. After each opening, the visiting '
        + 'delegation lead responds formally. (Each response: 2–3 '
        + 'sentences.)<br>Meeting Opening Language Bank:<br>• "On behalf of the '
        + 'Ministry of Foreign Affairs, I welcome ___ to today\'s ___."<br>• "It is '
        + 'my privilege to open today\'s bilateral session."<br>• "We value deeply '
        + 'our relationship with ___ and look forward to ___."<br>• "I propose we '
        + 'proceed according to the agreed agenda."<br>• "I suggest we begin with a '
        + 'brief round of introductions."<br>Variant 1 — Bilateral Working Group '
        + '(technical, professional):<br>"Ladies and gentlemen, on behalf of the '
        + 'Moroccan Ministry of Foreign Affairs, I welcome the German delegation to '
        + 'today\'s Morocco–Germany Infrastructure Cooperation Working Group. We are '
        + 'pleased to welcome Dr. Braun and her colleagues. I propose we proceed '
        + 'according to the agreed agenda, beginning with a review of the joint '
        + 'infrastructure assessment."<br>Variant 2 — High-Level Bilateral Meeting '
        + '(formal, senior officials):<br>"Your Excellency, distinguished colleagues '
        + '— on behalf of the Kingdom of Morocco, it is my privilege to open today\'s '
        + 'bilateral session. We value deeply our relationship with [partner country] '
        + 'and look forward to a productive exchange. I propose we begin."<br>Variant '
        + '3 — Working Lunch / Informal Coordination Session:<br>"Thank you all for '
        + 'joining us today. We have a full agenda but an informal format — this '
        + 'session is an opportunity to speak frankly and move our cooperation '
        + 'forward. I suggest we begin with a brief round of introductions before we '
        + 'turn to the agenda items."',
      scene: 'u2-4b',
      roles: [{ who: 'ambassador', label: 'Card A · the ambassador' },
        { who: 'youssef', label: 'Card B · Youssef' }],
      briefs: [{ label: 'Card A', text: 'the ambassador — ambassador' },
        { label: 'Card B', text: 'Youssef — senior officer' }],
      remember: ['Model exchange — Ambassador Hicham Alaoui: The German delegation expects a '
          + 'clean agenda and a clear position on infrastructure priorities. Brief me '
          + 'after the session. — Youssef El Amrani: Understood, Ambassador. — Youssef '
          + 'El Amrani: Ladies and gentlemen, on behalf of the Moroccan Ministry of '
          + 'Foreign Affairs, I welcome the German delegation to today\'s '
          + 'Morocco–Germany Infrastructure Cooperation Working Group. We are pleased '
          + 'to welcome Dr. Braun and her colleagues. I propose we proceed according to '
          + 'the agreed agenda, beginning with a review of the joint infrastructure '
          + 'assessment. — Dr. Braun: Thank you, Director. The German delegation is '
          + 'pleased to be here and grateful for the ministry\'s careful preparation. '
          + 'Germany fully supports the cooperative agenda we have agreed and looks '
          + 'forward to the technical discussions today.',
        'Model Dialogue Youssef El Amrani: Ladies and gentlemen, on behalf of the '
          + 'Moroccan Ministry of Foreign Affairs, I welcome the German delegation to '
          + 'today\'s Infrastructure Cooperation Working Group. Youssef El Amrani: '
          + 'Shall we begin? Youssef El Amrani: We are pleased to welcome Dr. Braun and '
          + 'her colleagues to Rabat. We value deeply our partnership with Germany, and '
          + 'this working group is the practical expression of it. I propose we proceed '
          + 'according to the agreed agenda, beginning with a review of the joint '
          + 'infrastructure assessment. I suggest we take the rail network items this '
          + 'morning and water infrastructure after lunch. Dr. Braun: Thank you, '
          + 'Director. The German delegation is pleased to be here and grateful for the '
          + 'ministry\'s careful preparation. We accept the proposed order of business. '
          + 'On behalf of my team, I would add that we come to this session with a '
          + 'mandate to agree on the monitoring committee — not only to discuss it.'],
      minWords: 30,
      modelScene: {
        id: 'u2-4b',
        label: 'Watch a worked role play',
        note: 'This is the book\'s own version, not the only one. Try yours first — the '
        + 'pop-up opens after your attempt.'
      }
    },
    {
      id: 'c2',
      covers: ['Part 4'],
      ref: '4C',
      bookRef: 'Unit 2 · Part 4 · 4C',
      type: 'discuss',
      title: 'Group Discussion: Managing a Meeting Professionally',
      instruction: 'Discuss the following questions in a small group based on the role-plays '
        + 'in exercises 4A and 4B. (Aim for 3–4 sentences per answer.)',
      minWords: 12,
      questions: [{ q: 'What makes a meeting feel professionally managed from the perspective of a '
          + 'visiting delegation?' },
        { q: 'What are three things a liaison officer must never forget on the day of a '
          + 'bilateral meeting?' },
        { q: 'How do you politely and professionally manage a meeting that is running '
          + 'significantly over time?' }],
      ideas: ['What makes a meeting feel professionally managed from the perspective of a '
          + 'visiting delegation?',
        'What are three things a liaison officer must never forget on the day of a '
          + 'bilateral meeting?',
        'How do you politely and professionally manage a meeting that is running '
          + 'significantly over time?'],
      okMsg: 'Good. Open the notes below and compare with the book\'s answers.',
      coach: {
        title: 'Compare with the book',
        target: 'Modal verbs for requests and arrangements',
        task: 'Discuss the following questions in a small group based on the role-plays '
        + 'in exercises 4A and 4B. (Aim for 3–4 sentences per answer.)',
        parts: ['What makes a meeting feel professionally managed from the perspective of a '
          + 'visiting delegation?',
        'What are three things a liaison officer must never forget on the day of a '
          + 'bilateral meeting?',
        'How do you politely and professionally manage a meeting that is running '
          + 'significantly over time?'],
        example: ['B1 target — The visiting delegation knows a meeting is well managed when '
            + 'the room is ready, the agenda is followed, and the interpretation works. '
            + 'They also notice whether someone is clearly in charge of the time. Small '
            + 'failures are what they remember.',
          'B2 extension — A: The visiting delegation reads the quality of management '
            + 'from details they are not supposed to notice — the room ready before they '
            + 'arrive, their names spelled correctly, the interpretation booth tested, '
            + 'the agenda actually followed. B: They also notice whether someone is '
            + 'visibly responsible for the clock — because a session that drifts tells '
            + 'them the host side has not thought about outcomes. C: What they remember '
            + 'afterwards is never the substance of agenda item three; it is whether the '
            + 'day felt controlled. D: And they read it from the parts nobody prepared — '
            + 'whether the coffee arrived during the break, whether their names were '
            + 'spelled correctly on the cards, whether somebody met them at the entrance. '
            + 'The agenda is assumed; the details are the evidence. E: Which is why the '
            + 'liaison officer\'s work is invisible when it succeeds.',
          'B1 target — First, confirm room readiness and the AV setup early in the '
            + 'morning — not just the day before. Second, check that the protocol brief '
            + 'and the seating plan reflect the final participant list. Third, never '
            + 'forget the interpretation — if it fails, nothing else in the day works. '
            + 'And confirm the final participant list on the morning — because a late '
            + 'addition changes the seating, the badges, and the catering at once.',
          'B2 extension — A: First, confirm room readiness and test the AV in the '
            + 'morning — not only the day before — overnight is when projectors stop '
            + 'working. B: Second, reconcile the seating plan and the protocol brief '
            + 'against the final participant list — because a late addition on either '
            + 'side changes both. C: Third, confirm the interpretation arrangement '
            + 'personally with the booth — because interpretation is the one failure that '
            + 'stops the meeting entirely rather than merely embarrassing the host. D: '
            + 'The fourth thing, which is not on most checklists, is to know who on the '
            + 'host side can authorize a change during the session — because if the '
            + 'answer is nobody, the officer will be making decisions they do not have '
            + 'the standing to make.',
          'B1 target — The liaison officer monitors the time and signals the '
            + 'delegation lead discreetly, never interrupting the discussion directly. '
            + 'The lead can then propose moving an item to the next session. The language '
            + 'should be neutral: "I suggest we return to the agenda."',
          'B2 extension — A: The liaison officer watches the clock and signals the '
            + 'delegation lead privately — a note — not an interruption. B: The lead then '
            + 'makes the intervention — because only the lead has the standing to '
            + 'redirect a counterpart: "I propose we take the remaining point on water '
            + 'infrastructure at our next session, so that we can conclude today with the '
            + 'committee framework agreed." C: The phrasing matters: a neutral, level '
            + 'tone makes it a scheduling decision rather than a criticism of whoever was '
            + 'speaking. D: What does not work is the officer intervening directly. '
            + 'However polite the wording, a liaison officer stopping a visiting '
            + 'delegation lead mid-sentence is a protocol error that will be remembered '
            + 'longer than the overrun would have been.'],
        criteria: [{ t: 'What makes a meeting feel professionally managed from the perspective of a '
            + 'visiting delegation?' },
          { t: 'What are three things a liaison officer must never forget on the day of a '
            + 'bilateral meeting?' },
          { t: 'How do you politely and professionally manage a meeting that is running '
            + 'significantly over time?' }]
      }
    }
  ]
});
