/* Unit 3 §22 — Part 8 - Role plays.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s22', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Part 8 - Role plays', part: '8', section: '22',
          lesson: 'Part 8 - Role plays', title: 'Part 8 - Role plays' },
  objective: 'Work through Part 8 - Role plays of unit 3.',
  prev: 's21-culture-meetings', prevLabel: 'Part 8 - First meetings',
  next: 's23-can-do-glossary', nextLabel: 'Part 8 - Can-Do and glossary',
  cards: [
    {
      id: 'c1',
      covers: ['Part 8'],
      ref: '8C',
      bookRef: 'Unit 3 · Part 8 · 8C',
      type: 'roleplay',
      title: 'Role-Play: Three Questions from a Foreign Correspondent',
      instruction: 'Work in pairs. Student A is Valentina Restrepo, Ministry Press Attaché. '
        + 'Student B is a Spanish correspondent from El País. Handle three successive '
        + 'challenging questions professionally, using phrases from this unit.The '
        + 'correspondent asks:Question 1: "Your ministry says it has signed many '
        + 'bilateral agreements. But are these real partnerships or just paper '
        + 'deals?"Question 2: "Your returning-citizens program — how many people have '
        + 'actually returned, not just applied?"Question 3: "Some civil society '
        + 'organizations say the consultation process is not genuine. How do you '
        + 'respond?"Guidance: Acknowledge the question, use passive voice where '
        + 'appropriate, provide a specific answer, and never become defensive or '
        + 'emotional.',
      scene: 'u3-8c',
      roles: [{ who: 'visitor', label: 'Card A · the visitor' },
        { who: 'valentina', label: 'Card B · Valentina' }],
      briefs: [{ label: 'Card A', text: 'the visitor — foreign visitor' },
        { label: 'Card B', text: 'Valentina — cultural attaché' }],
      remember: ['Model exchange — Journalist: Your ministry says it has signed many '
          + 'bilateral agreements. But are these real partnerships or just paper deals? '
          + '— Valentina: That is a fair challenge. The agreements that have been '
          + 'signed are legally binding documents with specific implementation '
          + 'mechanisms — not declarations. A joint technical committee has been '
          + 'established under each framework, with quarterly reporting requirements. '
          + 'Implementation has begun: the Germany working group held its inaugural '
          + 'session in March, and an aide-mémoire was signed at that session. — '
          + 'Journalist: Your returning-citizens program — how many people have '
          + 'actually returned, not just applied? — Valentina: That is exactly the '
          + 'right question to ask. Return completion numbers are compiled and '
          + 'published by the Consular Affairs Section in partnership with IOM. The gap '
          + 'between applications and completed returns reflects processing time and '
          + 'documentation challenges, which we acknowledge and are actively '
          + 'addressing.',
        'Model Dialogue Journalist: Your ministry says it has signed many bilateral '
          + 'agreements. But are these real partnerships or just paper deals? '
          + 'Valentina: It is a fair question and the answer is that it depends on the '
          + 'instrument, so let me be specific. Three agreements have entered into '
          + 'force and are operational — customs alignment with three neighbouring '
          + 'states is working today and can be verified independently. Others have '
          + 'been signed but implementation has only begun. I would rather tell you '
          + 'which is which than present signature as completion. Journalist: Your '
          + 'returning-citizens program — how many people have actually returned — not '
          + 'just applied? Valentina: Those are two different figures and I will not '
          + 'blur them. More than forty thousand applications have been received. The '
          + 'completed-return figure is substantially lower, and the gap is almost '
          + 'entirely document replacement for citizens whose papers were lost abroad. '
          + 'Legal assistance capacity is being expanded to address exactly that. '
          + 'Journalist: Some civil society organizations say the consultation process '
          + 'is not genuine. How do you respond? Valentina: I understand why that '
          + 'question is being asked, and I want to answer it carefully. The official '
          + 'position on consultation has been stated by the Foreign Minister and is a '
          + 'matter of public record. For the specific mechanisms I would direct you to '
          + 'the Political Affairs Directorate, and I can facilitate that today. What I '
          + 'will say is this: accountability is not something we are trying to avoid — '
          + 'it is something we are building into our institutional frameworks, '
          + 'precisely because we understand that international confidence depends on '
          + 'it. The quarterly reports are the test, and they are public.'],
      minWords: 30,
      modelScene: {
        id: 'u3-8c',
        label: 'Watch a worked role play',
        note: 'This is the book\'s own version, not the only one. Try yours first — the '
        + 'pop-up opens after your attempt.'
      }
    },
    {
      id: 'c2',
      covers: ['Part 8'],
      ref: '8D',
      bookRef: 'Unit 3 · Part 8 · 8D',
      type: 'report',
      title: 'Role-Play: Briefing a Gulf Arab Diplomatic Official',
      instruction: 'Work in pairs. Student A is Andrés Gaviria, Economic Affairs Specialist. '
        + 'Student B is a senior Gulf Arab diplomatic official visiting for a private '
        + 'bilateral briefing on investment opportunities.Context: The meeting is in '
        + 'the ministry\'s formal reception room. The official is accompanied by one '
        + 'adviser. The atmosphere is warm and formal. The official begins with '
        + 'social conversation before moving to business — Andrés must follow his '
        + 'lead.Practice:1. Welcome the official with appropriate formal language and '
        + 'warmth2. Allow the official to set the pace — do not rush to the agenda3. '
        + 'When the official moves to business, present the investment framework with '
        + 'clarity and confidence4. The official asks one direct private question: '
        + '"Tell me honestly — is the regulatory environment stable enough for major '
        + 'investment right now?"Guidance: Andrés gives an honest but forward-looking '
        + 'private answer — not evasion, not promotion.',
      minWords: 40,
      placeholder: 'I would like to say that…',
      stems: ['I would like to say that…']
    }
  ]
});
