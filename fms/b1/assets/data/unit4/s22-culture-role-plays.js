/* Unit 4 §22 — Part 8 - Role plays.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u4-s22', {
  book: { source: 'FMS B1.1', ref: 'Unit 4 · Part 8 - Role plays', part: '8', section: '22',
          lesson: 'Part 8 - Role plays', title: 'Part 8 - Role plays' },
  objective: 'By the end of Part 8 you can describe how one formal dinner is read '
        + 'differently in three cultures, compare seating, toasting and hospitality '
        + 'norms in a table, and handle both a toast at a bilateral dinner and the '
        + 'welcome of a Gulf Arab official at a formal reception.',
  prev: 's21-culture-meetings', prevLabel: 'Part 8 - First meetings',
  next: 's23-can-do-glossary', nextLabel: 'Part 8 - Can-Do and glossary',
  cards: [
    {
      id: 'c1',
      covers: ['Part 8'],
      ref: '8C',
      bookRef: 'Unit 4 · Part 8 · 8C',
      type: 'roleplay',
      title: 'Role-Play: Formal Toast at a Bilateral Dinner',
      instruction: 'Work in pairs. Student A is the host (Daniyar Suleimenov, hosting a dinner '
        + 'for the French and German delegations). Student B plays the most senior '
        + 'European guest, responding to the toast.Practice:1. Daniyar delivers a '
        + 'formal dinner toast — warm, dignified, forward-looking, using at least one '
        + 'future form2. The European guest responds — brief, gracious, reciprocal3. '
        + 'Swap rolesGuidance for the toast:• Address the guest(s) first: "Your '
        + 'Excellency, distinguished colleagues..."• Acknowledge what has been '
        + 'achieved today (signing, cooperation)• Use one future form to express what '
        + 'is coming• Propose the toast with a clear invitation',
      scene: 'u4-8c',
      roles: [{ who: 'daniyar', label: 'Card A · Daniyar Suleimenov' },
        { who: 'valentina', label: 'Card B · Valentina' }],
      briefs: [{ label: 'Card A', text: 'Daniyar Suleimenov — visiting delegate' },
        { label: 'Card B', text: 'Valentina — cultural attaché' }],
      remember: ['Model exchange — Daniyar Suleimenov: Your Excellency, distinguished '
          + 'colleagues — this evening we mark a moment that both our countries have '
          + 'worked toward with commitment and patience. The cooperation framework we '
          + 'signed today will open new doors for our students, our researchers, and '
          + 'our people. The programs we are going to build together will carry '
          + 'something real and lasting into both our societies. Please raise your '
          + 'glasses — to friendship, to cooperation, and to a future that we shall '
          + 'build together. — European Guest: Your Excellency, on behalf of the '
          + 'delegations present, I am grateful for this generous hospitality and this '
          + 'meaningful occasion. The agreement we signed today reflects a serious '
          + 'commitment from both sides, and we will honor it through implementation, '
          + 'not just celebration. To Kazakhstan — to its future, and to the '
          + 'partnership that begins today.',
        'Model Dialogue Daniyar Suleimenov: Your Excellency, distinguished '
          + 'colleagues — it is my honor to propose a toast. Today we signed a '
          + 'framework that will shape our cooperation for the next five years, in '
          + 'culture, in education, and in digital infrastructure. What I value most '
          + 'about it is that it is specific: it names the commissions, the numbers, '
          + 'and the dates, so that in three years we will be able to say plainly '
          + 'whether we did what we said. To friendship, to cooperation, and to a '
          + 'future that will be built together — please raise your glasses. European '
          + 'Guest: Thank you, Mr. Suleimenov, for your words and for your hospitality '
          + 'this evening. The specificity you mention is exactly what our delegations '
          + 'will be judged on at home, and we are glad it is in the document rather '
          + 'than only in the speeches. On behalf of the French and German delegations, '
          + 'we accept this toast with pleasure and look forward to the first '
          + 'Commission session in October. To our countries, and to the work ahead.'],
      minWords: 30,
      modelScene: {
        id: 'u4-8c',
        label: 'Watch a worked role play',
        note: 'This is the book\'s own version, not the only one. Try yours first — the '
        + 'pop-up opens after your attempt.'
      }
    },
    {
      id: 'c2',
      covers: ['Part 8'],
      ref: '8D',
      bookRef: 'Unit 4 · Part 8 · 8D',
      type: 'roleplay',
      title: 'Role-Play: Welcoming a Gulf Arab Official to a Formal Reception',
      instruction: 'Work in pairs. Student A is Aigerim Dosanova, welcoming His Excellency '
        + 'Sheikh Mohammed Al-Rashidi, Deputy Foreign Minister of a Gulf state, to a '
        + 'formal ministry reception before a dinner. Student B plays His '
        + 'Excellency.Context: His Excellency is accompanied by two senior advisers. '
        + 'The reception is in the ministry\'s formal reception room. Non-alcoholic '
        + 'refreshments are available. The dinner will follow in thirty '
        + 'minutes.Practice:1. Welcome His Excellency with full formal language, '
        + 'warmth, and patience2. Offer hospitality before any business reference3. '
        + 'Follow His Excellency\'s lead on when to move toward the formal room4. One '
        + 'of His Excellency\'s advisers offers Aigerim a small wrapped gift — how '
        + 'does she receive it?Guidance: Show genuine warmth, not performed protocol. '
        + 'His Excellency will test whether his hosts are comfortable in this '
        + 'register — not whether they have memorized a script.',
      scene: 'u4-8d',
      roles: [{ who: 'aigerim', label: 'Card A · Aigerim' },
        { who: 'daniyar', label: 'Card B · Daniyar Suleimenov' }],
      briefs: [{ label: 'Card A', text: 'Aigerim — delegation coordinator' },
        { label: 'Card B', text: 'Daniyar Suleimenov — visiting delegate' }],
      remember: ['Model exchange — Aigerim: Your Excellency, as-salamu alaykum — welcome to '
          + 'the Ministry of Foreign Affairs. It is a great honor and a genuine '
          + 'privilege to receive you here in Astana. We are truly pleased by your '
          + 'visit. — His Excellency: Wa alaykum as-salam. Thank you. Astana is always '
          + 'a pleasure to return to. — Aigerim: Your Excellency is most kind. Please, '
          + 'make yourself at home. We have prepared Arabic coffee and light '
          + 'refreshments — may I offer you a cup? — His Excellency: Please, yes. This '
          + 'is a beautiful room. Tell me, how are things at the ministry? We hear good '
          + 'things.',
        'Model Dialogue Aigerim Dosanova: Your Excellency, on behalf of the '
          + 'Ministry of Foreign Affairs, we are deeply honored by your visit to '
          + 'Astana. Please make yourself comfortable — we have arranged coffee and '
          + 'dates. May I offer you a cup? His Excellency: Thank you. You are most '
          + 'kind. It is a pleasure to be in Astana again. Aigerim Dosanova: We are '
          + 'glad to welcome you back, Your Excellency. The weather has been kinder '
          + 'this week than at your last visit, I am told. Your advisers are most '
          + 'welcome as well. His Excellency: You are generous. And the ministry has '
          + 'grown since I was last here — I noticed the new wing as we arrived. These '
          + 'are good signs. Aigerim Dosanova: Thank you, Your Excellency. The new wing '
          + 'opened in the spring. Whenever Your Excellency is ready, the dinner room '
          + 'is prepared — but there is no hurry at all; we have thirty minutes and '
          + 'more if you would like them. His Excellency: A little more coffee first, I '
          + 'think. Aigerim Dosanova: Of course, Your Excellency. It would be our '
          + 'pleasure.'],
      minWords: 30,
      modelScene: {
        id: 'u4-8d',
        label: 'Watch a worked role play',
        note: 'This is the book\'s own version, not the only one. Try yours first — the '
        + 'pop-up opens after your attempt.'
      }
    }
  ]
});
