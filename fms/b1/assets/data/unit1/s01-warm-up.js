/* Unit 1 §1 — Warm Up.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s01', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Warm Up', part: '0', section: '1',
          lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'By the end of this Warm Up you can describe the kinds of foreign visitor '
        + 'your ministry now receives, say what first impression every staff member '
        + 'should aim to make, and carry out a short reception sequence - greeting a '
        + 'visitor, asking who they have come to see, and directing them to the right '
        + 'office.',
  next: 's02-fluency', nextLabel: 'Warm Up - fluency',
  cards: [
    {
      id: 'c1',
      covers: ['Warm Up'],
      ref: 'W-A',
      bookRef: 'Unit 1 · Warm Up · W-A',
      type: 'discuss',
      title: 'Pair Discussion – A Wider World, New Visitors',
      instruction: 'Talk with a partner about the following: (Aim for 3–4 sentences per '
        + 'answer.)',
      minWords: 12,
      questions: [{ q: 'What kinds of foreign visitors do you expect to come to the Ministry now '
          + 'compared to five years ago?' },
        { q: 'What first impression should every ministry staff member aim to make?' },
        { q: 'Complete this sentence with your partner: "A ministry feels welcoming '
          + 'without being informal when it has ___, ___, and ___." Then explain ONE of '
          + 'your three choices in 1–2 sentences. Why is it important?' }],
      ideas: ['What kinds of foreign visitors do you expect to come to the Ministry now '
          + 'compared to five years ago?',
        'What first impression should every ministry staff member aim to make?',
        'Complete this sentence with your partner: "A ministry feels welcoming '
          + 'without being informal when it has ___, ___, and ___." Then explain ONE of '
          + 'your three choices in 1–2 sentences. Why is it important?'],
      okMsg: 'Good. Open the notes below and compare with the book\'s answers.',
      coach: {
        title: 'Compare with the book',
        target: 'Present simple and present continuous',
        task: 'Talk with a partner about the following: (Aim for 3–4 sentences per '
        + 'answer.)',
        parts: ['What kinds of foreign visitors do you expect to come to the Ministry now '
          + 'compared to five years ago?',
        'What first impression should every ministry staff member aim to make?',
        'Complete this sentence with your partner: "A ministry feels welcoming '
          + 'without being informal when it has ___, ___, and ___." Then explain ONE of '
          + 'your three choices in 1–2 sentences. Why is it important?'],
        example: ['B1 target — Five years ago, the ministry mainly received officials from a '
            + 'small number of neighbouring countries. Now we expect many more types of '
            + 'visitors: diplomats, investors, journalists, and UN staff. The biggest '
            + 'change is the variety.',
          'B2 extension — Five years ago, visits were mostly limited to officials '
            + 'from a narrow group of regional partners and a handful of development '
            + 'agencies. Now we expect a much wider range: European diplomats, EU '
            + 'officials, investors from Japan and Korea, journalists from international '
            + 'broadcasters, World Bank representatives, citizens returning from abroad, '
            + 'and UN agency staff.',
          'B1 target — Every staff member should be professional, welcoming, and '
            + 'calm. We represent the country\'s international face. A visitor\'s first '
            + 'impression of the ministry is very important.',
          'B2 extension — Professional, welcoming, and calm. We represent the whole '
            + 'institution in the first thirty seconds. A visitor\'s first interaction at '
            + 'the ministry shapes their impression of the entire institution — and, in a '
            + 'sense, of the country\'s professionalism as a whole.',
          'A ministry feels welcoming without being informal when it has clear '
            + 'English signs, friendly staff, and short waiting times. For example, clear '
            + 'signs help visitors feel confident immediately. This is important because '
            + 'visitors form their impression very quickly.'],
        criteria: [{ t: 'What kinds of foreign visitors do you expect to come to the Ministry now '
            + 'compared to five years ago?' },
          { t: 'What first impression should every ministry staff member aim to make?' },
          { t: 'Complete this sentence with your partner: "A ministry feels welcoming '
            + 'without being informal when it has ___, ___, and ___." Then explain ONE of '
            + 'your three choices in 1–2 sentences. Why is it important?' }]
      }
    },
    {
      id: 'c2',
      covers: ['Warm Up',
        'Audio 1.2'],
      ref: 'W-B',
      bookRef: 'Unit 1 · Warm Up · W-B',
      type: 'scene',
      title: 'Group Brainstorm – Visitor Types and Their Needs',
      instruction: 'In small groups, discuss and list the following. Share your findings with '
        + 'the class. (Aim for 3–4 sentences when you share.)',
      scene: 'u1-wb',
      quiz: {
        type: 'shortanswer',
        title: 'After you listen',
        instruction: 'In small groups, discuss and list the following. Share your findings with '
        + 'the class. (Aim for 3–4 sentences when you share.)',
        items: [{ q: '1. Five types of foreign visitor who might come to the Ministry of Foreign '
                + 'Affairs, the department that handles each, and the main thing each visitor '
                + 'needs when they arrive.',
              accept: ['1. Diplomat — Protocol Department — formal reception and escort. 2. '
                  + 'Journalist — Press Office — press accreditation. 3. Investor — Economic '
                  + 'Affairs — meeting with the relevant officer. 4. UN official — Humanitarian '
                  + 'Liaison — a coordination meeting. 5. Citizen living abroad — Consular '
                  + 'Section — passport or document service.'],
              keys: ['types',
                'foreign'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' }],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
