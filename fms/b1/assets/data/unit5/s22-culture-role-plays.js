/* Unit 5 §22 — Part 8 - Role plays.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s22', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Part 8 - Role plays', part: '8', section: '22',
          lesson: 'Part 8 - Role plays', title: 'Part 8 - Role plays' },
  objective: 'By the end of Part 8 you can describe how business culture shapes an '
        + 'investment meeting, compare directness, relationship-building and the pace '
        + 'of decisions in a table, and host both a German and a Gulf investor '
        + 'meeting appropriately.',
  prev: 's21-culture-meetings', prevLabel: 'Part 8 - First meetings',
  next: 's23-can-do-glossary', nextLabel: 'Part 8 - Can-Do and glossary',
  cards: [
    {
      id: 'c1',
      covers: ['Part 8'],
      ref: '8C',
      bookRef: 'Unit 5 · Part 8 · 8C',
      type: 'roleplay',
      title: 'Role Play: Hosting Klaus Richter — the German Investment Meeting',
      instruction: 'Work in pairs. One student is Dawit Bekele (Economic Affairs Specialist). '
        + 'The other is Klaus Richter (Managing Director, Richter Infrastructure '
        + 'GmbH). Klaus is data-driven, direct, and wants specific answers. (Each '
        + 'turn: 2–3 sentences per speaker.)<br>Context: This is the second meeting. '
        + 'Klaus has received the legal framework document. He has three direct '
        + 'questions.<br>Key language tips: Be precise and direct. Answer his '
        + 'questions with specific conditional language. Offer a clear next step. Do '
        + 'not be vague.<br>Useful phrases:<br>• "If you submit the application, we '
        + 'will ___."<br>• "The legal framework provides ___ — here is the specific '
        + 'clause."<br>• "If the board approves on Monday, I will arrange ___ for '
        + 'Tuesday."<br>• "I understand the concern. Here is exactly what happens if '
        + '___."<br>• "We are ready to move quickly. The next step is ___."',
      scene: 'u5-8c',
      roles: [{ who: 'klaus', label: 'Card A · Klaus Richter' },
        { who: 'dawit', label: 'Card B · Dawit' }],
      briefs: [{ label: 'Card A', text: 'Klaus Richter — investor, German Embassy' },
        { label: 'Card B', text: 'Dawit — desk officer' }],
      remember: ['Model exchange — Klaus: Dawit, I read the document. My board has three '
          + 'questions. First: what is the exact timeline if we submit the application '
          + 'today? — Dawit: If you submit today, the Investment Promotion Agency will '
          + 'begin the review immediately. We are targeting a 30-day fast-track '
          + 'process. If there are no outstanding documentation requirements, you will '
          + 'receive a formal decision within that window. — Klaus: Good. Second '
          + 'question: the arbitration clause — is it enforceable through international '
          + 'courts? — Dawit: Yes. Our investment law includes a mandatory '
          + 'international arbitration clause that references the ICSID framework. If '
          + 'any dispute arises, both parties have full recourse through international '
          + 'arbitration. I can send you the exact text this afternoon.',
        'Model Dialogue Klaus: Thank you for the document. I have three questions '
          + 'and they are all narrow. First: the thirty-day processing target — is that '
          + 'statutory or aspirational? Dawit: Aspirational, and I will not pretend '
          + 'otherwise. The statutory maximum is ninety days; thirty is the Agency\'s '
          + 'internal target for fast-tracked registered projects, and it has been met '
          + 'in the two cases we have processed so far. Two cases is not a track '
          + 'record, and your board should treat it as a target. Klaus: Understood, and '
          + 'I prefer that answer. Second: the arbitration clause — which rules? Dawit: '
          + 'ICSID, and the clause is in the investment law rather than in the '
          + 'individual agreement, which is the point that matters to your legal team. '
          + 'It applies automatically to a registered joint venture. It is section four '
          + 'of the document I sent, and the Legal Directorate can confirm the English '
          + 'text is authoritative. Klaus: Please do. Third: if my board approves on '
          + 'Monday, what can actually happen that week? Dawit: If you confirm on '
          + 'Monday, I will arrange the Investment Promotion Agency meeting for Tuesday '
          + 'or Wednesday — the room and the case officer are provisionally held. You '
          + 'would leave that meeting with a named officer and a written processing '
          + 'schedule. That is a commitment I control, so I am comfortable making it.'],
      minWords: 30,
      modelScene: {
        id: 'u5-8c',
        label: 'Watch a worked role play',
        note: 'This is the book\'s own version, not the only one. Try yours first — the '
        + 'pop-up opens after your attempt.'
      }
    },
    {
      id: 'c2',
      covers: ['Part 8'],
      ref: '8D',
      bookRef: 'Unit 5 · Part 8 · 8D',
      type: 'roleplay',
      title: 'Role Play: Hosting Ms. Al-Sayed — the Gulf Investment Meeting',
      instruction: 'Work in pairs. One student is Dawit Bekele (Economic Affairs Specialist). '
        + 'The other is Ms. Fatima Al-Sayed (Investment Director, Gulf Development '
        + 'Fund). Ms. Al-Sayed is on her first visit. She is warm but formal, and she '
        + 'needs to feel respected and confident before she will move to specific '
        + 'details.<br>Context: This is the first meeting. The meeting should begin '
        + 'with warmth and gradually move toward specifics.<br>Key language tips: '
        + 'Begin with a ceremonial welcome. Do not rush to figures or legal documents '
        + 'immediately. Build comfort. When she signals readiness to discuss '
        + 'specifics, use conditional language to give her a clear '
        + 'pathway.<br>Ceremonial Language Bank:<br>• "It is a great honour to '
        + 'welcome you to the Ministry."<br>• "We deeply appreciate your visit and '
        + 'your interest in our country."<br>• "Our country and the Gulf share a long '
        + 'history of partnership."<br>• "If there is anything we can do to make your '
        + 'visit more productive, please tell us."<br>• "We believe that if we work '
        + 'together, we can build something of lasting value."',
      scene: 'u5-8d',
      roles: [{ who: 'dawit', label: 'Card A · Dawit' },
        { who: 'salma', label: 'Card B · Salma' }],
      briefs: [{ label: 'Card A', text: 'Dawit — desk officer' },
        { label: 'Card B', text: 'Salma — liaison officer' }],
      remember: ['Model exchange — Dawit: Ms. Al-Sayed, it is a great honour to welcome you '
          + 'to the Ministry of Foreign Affairs. Our country and the Gulf have always '
          + 'been close, and we are deeply grateful that the Gulf Development Fund is '
          + 'here today to explore what we can build together. — Ms. Al-Sayed: Thank '
          + 'you, Mr. Bekele. This country holds a special place for us. We are here '
          + 'because we believe in its future. We are interested in agricultural '
          + 'investment — but before we discuss specifics, we need to feel confident in '
          + 'the relationship. — Dawit: I understand completely, and I want you to know '
          + 'that this Ministry treats every partner with the highest respect and full '
          + 'transparency. If you would like, I can begin by giving you an overview of '
          + 'our agricultural sector without any pressure — simply to share the '
          + 'picture. Then, if you would like to explore specific opportunities, we can '
          + 'take that step together at whatever pace feels right. — Ms. Al-Sayed: That '
          + 'is exactly the approach we appreciate. Please go ahead.',
        'Model Dialogue Dawit: Your visit is a great honour for the Ministry, Ms. '
          + 'Al-Sayed, and we deeply appreciate your interest in our country. Our '
          + 'country and the Gulf share a long history of partnership, and I hope this '
          + 'is the first of many visits. Please, before anything else — may I offer '
          + 'you coffee? The journey from Kuwait is not a short one. Ms. Al-Sayed: '
          + 'Thank you. You are very kind. It is a longer journey than it looks on the '
          + 'map, and I am grateful for the welcome. I have been hearing about your '
          + 'agricultural zones for two years from colleagues who have visited, and I '
          + 'wanted finally to come and see for myself rather than read another report. '
          + 'Dawit: Then I hope we can arrange that properly while you are here — the '
          + 'Awash Valley is two hours from the capital and a report does not convey '
          + 'the scale of it. Whenever you would like to turn to specifics, I am ready. '
          + 'And if it is helpful, I can tell you now that the water allocation '
          + 'framework for registered agricultural joint ventures sits in the '
          + 'investment law itself — not in administrative practice. That is what I '
          + 'would want to know first in your position, and I would rather raise it '
          + 'than wait. Ms. Al-Sayed: That is exactly the question I came with. Please '
          + 'go on.'],
      minWords: 30,
      modelScene: {
        id: 'u5-8d',
        label: 'Watch a worked role play',
        note: 'This is the book\'s own version, not the only one. Try yours first — the '
        + 'pop-up opens after your attempt.'
      }
    }
  ]
});
