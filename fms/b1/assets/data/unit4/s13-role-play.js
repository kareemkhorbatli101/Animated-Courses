/* Unit 4 §13 — Part 4 - Role play.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u4-s13', {
  book: { source: 'FMS B1.1', ref: 'Unit 4 · Part 4 - Role play', part: '4', section: '13',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'By the end of Part 4 you can propose a toast at a formal dinner, present a '
        + 'bilateral cooperation framework, and speak about a shared future in the '
        + 'register the occasion requires.',
  prev: 's12-dialogue-script', prevLabel: 'Part 4 - The script',
  next: 's14-reading-profiles', nextLabel: 'Part 5 - Reading',
  cards: [
    {
      id: 'c1',
      covers: ['Part 4'],
      ref: '4B',
      bookRef: 'Unit 4 · Part 4 · 4B',
      type: 'roleplay',
      title: 'Role-Play: Bilateral Cooperation Presentation',
      instruction: 'Work in groups of four. Student A is Daniyar Suleimenov, Economic Affairs '
        + 'Specialist. Students B, C, and D are a French trade delegation. Daniyar '
        + 'presents the Kazakhstan–France Digital Infrastructure Cooperation '
        + 'framework and handles three follow-up questions. (Aim for 3–4 sentences '
        + 'per speaking turn.)<br>French delegation role cards:<br>Student B: Ask '
        + 'about the timeline for the first operational digital projects.<br>Student '
        + 'C: Ask about the technical requirements for French companies wishing to '
        + 'participate in the program.<br>Student D: Ask what Kazakhstan expects from '
        + 'France in return — what does Kazakhstan bring to the '
        + 'partnership?<br>Guidance: Daniyar uses a mix of future forms — will for '
        + 'predictions and announcements, going to for existing plans, Present '
        + 'Continuous for confirmed arrangements, shall for formal institutional '
        + 'commitments.',
      scene: 'u4-4b',
      roles: [{ who: 'daniyar', label: 'Card A · Daniyar Suleimenov' },
        { who: 'dawit', label: 'Card B · Dawit' }],
      briefs: [{ label: 'Card A', text: 'Daniyar Suleimenov — visiting delegate' },
        { label: 'Card B', text: 'Dawit — desk officer' }],
      remember: ['Model exchange — Daniyar Suleimenov: Distinguished colleagues, the '
          + 'Kazakhstan–France Digital Infrastructure Cooperation framework represents '
          + 'one of our most forward-looking modernization programs. The framework '
          + 'covers three areas: digital connectivity infrastructure in urban centers, '
          + 'e-government platform development, and digital skills training for public '
          + 'sector staff. A joint implementation committee is going to meet for the '
          + 'first time in September to finalize the project portfolio. — Student B: '
          + 'What is the timeline for the first operational projects? — Daniyar '
          + 'Suleimenov: The first digital connectivity projects are going to begin in '
          + 'Q1 of next year — site assessments are already underway. We are completing '
          + 'the regulatory approvals process this month, and we are meeting with the '
          + 'relevant technical ministry teams next week to confirm the implementation '
          + 'schedule. — Student C: What technical requirements apply to French '
          + 'companies?',
        'Model Dialogue Daniyar Suleimenov: Thank you. The Kazakhstan–France '
          + 'Digital Infrastructure Cooperation framework covers three strands: the '
          + 'connectivity roadmap, e-government platform development, and a joint '
          + 'technical working group. The working group is going to develop the roadmap '
          + 'by December 2025 — that deadline is in the Framework — not an aspiration. '
          + 'French technical expertise will support our e-government platform work, '
          + 'and the annual bilateral committee shall oversee implementation and report '
          + 'to both ministries. Student B: What is the timeline for the first '
          + 'operational digital projects? Daniyar Suleimenov: The roadmap is delivered '
          + 'in December, and the first two projects are going to begin in the '
          + 'following quarter — the e-government identity layer and the rural '
          + 'connectivity pilot. I would rather give you those two than a longer list — '
          + 'because those are the ones with budget attached. The rest will follow the '
          + 'roadmap\'s own sequencing. Student C: What technical requirements apply to '
          + 'French companies wishing to participate? Daniyar Suleimenov: Participation '
          + 'runs through the investment framework, which sets procurement standards '
          + 'and a dispute resolution mechanism. Companies shall register with the '
          + 'investment facilitation unit — which is the single point of contact. I '
          + 'would encourage your legal advisers to read the framework directly rather '
          + 'than rely on my summary of it. Student D: And what does Kazakhstan bring '
          + 'to this partnership in return? Daniyar Suleimenov: Scale, position, and a '
          + 'working e-government base. We have an existing digital identity system '
          + 'with national coverage, which is a test environment France does not have. '
          + 'We are a land bridge between China and Europe — which makes connectivity '
          + 'infrastructure here strategically useful to French partners. And we bring '
          + 'political continuity on this file, which is going to matter over a '
          + 'five-year framework.'],
      minWords: 30,
      modelScene: {
        id: 'u4-4b',
        label: 'Watch a worked role play',
        note: 'This is the book\'s own version, not the only one. Try yours first — the '
        + 'pop-up opens after your attempt.'
      },
      coach: {
        title: 'Compare with the book',
        target: 'Formal written structures and conditionals',
        task: 'Work in groups of four. Student A is Daniyar Suleimenov, Economic Affairs '
        + 'Specialist. Students B, C, and D are a French trade delegation. Daniyar '
        + 'presents the Kazakhstan–France Digital Infrastructure Cooperation '
        + 'framework and handles three follow-up questions. (Aim for 3–4 sentences '
        + 'per speaking turn.) French delegation role cards: Student B: Ask about the '
        + 'timeline for the first operational digital projects. Student C: Ask about '
        + 'the technical requirements for French companies wishing to participate in '
        + 'the program. Student D: Ask what Kazakhstan expects from France in return '
        + '— what does Kazakhstan bring to the partnership? Guidance: Daniyar uses a '
        + 'mix of future forms — will for predictions and announcements, going to for '
        + 'existing plans, Present Continuous for confirmed arrangements, shall for '
        + 'formal institutional commitments.',
        parts: ['Work in groups of four. Student A is Daniyar Suleimenov, Economic Affairs '
          + 'Specialist. Students B, C, and D are a French trade delegation. Daniyar '
          + 'presents the Kazakhstan–France Digital Infrastructure Cooperation '
          + 'framework and handles three follow-up questions. (Aim for 3–4 sentences '
          + 'per speaking turn.) French delegation role cards: Student B: Ask about the '
          + 'timeline for the first operational digital projects. Student C: Ask about '
          + 'the technical requirements for French companies wishing to participate in '
          + 'the program. Student D: Ask what Kazakhstan expects from France in return '
          + '— what does Kazakhstan bring to the partnership? Guidance: Daniyar uses a '
          + 'mix of future forms — will for predictions and announcements, going to for '
          + 'existing plans, Present Continuous for confirmed arrangements, shall for '
          + 'formal institutional commitments.'],
        example: ['Model Dialogue Daniyar Suleimenov: Thank you. The Kazakhstan–France '
            + 'Digital Infrastructure Cooperation framework covers three strands: the '
            + 'connectivity roadmap, e-government platform development, and a joint '
            + 'technical working group. The working group is going to develop the roadmap '
            + 'by December 2025 — that deadline is in the Framework — not an aspiration. '
            + 'French technical expertise will support our e-government platform work, '
            + 'and the annual bilateral committee shall oversee implementation and report '
            + 'to both ministries. Student B: What is the timeline for the first '
            + 'operational digital projects? Daniyar Suleimenov: The roadmap is delivered '
            + 'in December, and the first two projects are going to begin in the '
            + 'following quarter — the e-government identity layer and the rural '
            + 'connectivity pilot. I would rather give you those two than a longer list — '
            + 'because those are the ones with budget attached. The rest will follow the '
            + 'roadmap\'s own sequencing. Student C: What technical requirements apply to '
            + 'French companies wishing to participate? Daniyar Suleimenov: Participation '
            + 'runs through the investment framework, which sets procurement standards '
            + 'and a dispute resolution mechanism. Companies shall register with the '
            + 'investment facilitation unit — which is the single point of contact. I '
            + 'would encourage your legal advisers to read the framework directly rather '
            + 'than rely on my summary of it. Student D: And what does Kazakhstan bring '
            + 'to this partnership in return? Daniyar Suleimenov: Scale, position, and a '
            + 'working e-government base. We have an existing digital identity system '
            + 'with national coverage, which is a test environment France does not have. '
            + 'We are a land bridge between China and Europe — which makes connectivity '
            + 'infrastructure here strategically useful to French partners. And we bring '
            + 'political continuity on this file, which is going to matter over a '
            + 'five-year framework.'],
        criteria: [{ t: 'I answered the question that was actually asked, not a nearby one.' },
          { t: 'I used this unit\'s language: Formal written structures and conditionals.' },
          { t: 'I gave a reason as well as a fact — because…, so that…' },
          { t: 'I used the words this unit teaches, not a translation of my own.' }]
      }
    },
    {
      id: 'c2',
      covers: ['Part 4'],
      ref: '4C',
      bookRef: 'Unit 4 · Part 4 · 4C',
      type: 'discuss',
      title: 'Discussion: Bridge-Builders and Future Vision',
      instruction: 'Discuss the following questions in a small group to close this unit and '
        + 'the course.<br>Reliability — doing what you say you will do, when you said '
        + 'you would do it<br>Patience — sustaining engagement and commitment through '
        + 'slow periods<br>Genuine curiosity — real interest in other cultures and '
        + 'people, not just transactions<br>Emotional intelligence — knowing when to '
        + 'speak and when to listen<br>Precision — getting names, titles, and details '
        + 'exactly right',
      minWords: 12,
      questions: [{ q: 'Rank these five qualities of an effective bridge-builder from most to '
          + 'least important for diplomatic work. Explain your top choice in 2–3 '
          + 'sentences.' },
        { q: 'What is your country\'s unique diplomatic position in the mid-2020s, and '
          + 'how does it create both challenge and opportunity?' },
        { q: 'What is one concrete commitment you are going to make to improving your '
          + 'English for this work? Use future forms in your answer.' }],
      ideas: ['Start with what you know for certain, then say what you think — one '
          + 'sentence each.',
        'Use this unit\'s language at least once: Formal written structures and '
          + 'conditionals.',
        'Words from this unit you can use: Note Verbale, Communiqué, Aide-Mémoire, '
          + 'Protocol of Cooperation, Joint Statement, Letters of Credence.',
        'Say WHY as well as WHAT — because…, so that…, which means…'],
      okMsg: 'Good. Open the notes below and compare with the book\'s answers.',
      coach: {
        title: 'Compare with the book',
        target: 'Formal written structures and conditionals',
        task: 'Discuss the following questions in a small group to close this unit and '
        + 'the course. Reliability — doing what you say you will do, when you said '
        + 'you would do it Patience — sustaining engagement and commitment through '
        + 'slow periods Genuine curiosity — real interest in other cultures and '
        + 'people, not just transactions Emotional intelligence — knowing when to '
        + 'speak and when to listen Precision — getting names, titles, and details '
        + 'exactly right',
        parts: ['Rank these five qualities of an effective bridge-builder from most to '
          + 'least important for diplomatic work. Explain your top choice in 2–3 '
          + 'sentences.',
        'What is your country\'s unique diplomatic position in the mid-2020s, and '
          + 'how does it create both challenge and opportunity?',
        'What is one concrete commitment you are going to make to improving your '
          + 'English for this work? Use future forms in your answer.'],
        example: ['B1 target — I think reliability is the most important quality. If you do '
            + 'what you said you would do, by the day you said, everything else becomes '
            + 'possible. Without it, curiosity and emotional intelligence have nothing to '
            + 'build on.',
          'B2 extension — A: Reliability is the foundation — because it is the only '
            + 'one of the five that a counterpart can verify independently. Everything '
            + 'else they have to take on trust, and reliability is what earns that trust. '
            + 'B: I would put precision first. Getting a name or a title wrong undoes a '
            + 'year of goodwill in a single document, and the damage is disproportionate '
            + 'to the effort of checking. C: My choice is patience. Diplomatic work has '
            + 'long flat periods where nothing visible happens, and the people who '
            + 'sustain engagement through those periods are the ones who are there when '
            + 'something becomes possible. D: What is striking is that nobody chose '
            + 'genuine curiosity, although all of us think it matters. Perhaps because it '
            + 'cannot be demanded of anyone — it is either there or it is not. E: What '
            + 'the ranking exercise really reveals is that four of the five can be '
            + 'trained and one cannot, which is worth knowing when you are recruiting.',
          'B1 target — Kazakhstan sits between Europe, Russia, China, and the Turkic '
            + 'world. This creates opportunity — because we can host conversations that '
            + 'would be difficult elsewhere. It also creates challenge — because every '
            + 'partner watches how we deal with the others.',
          'B2 extension — A: Kazakhstan sits at a genuine crossroads — between '
            + 'Europe, Russia, China, and the Turkic world — and that creates a '
            + 'diplomatic opportunity no amount of effort could manufacture: we can '
            + 'convene conversations that would be awkward or impossible in other '
            + 'capitals. B: The challenge is the same fact seen from the other side. '
            + 'Every partner reads our relationship with every other partner, so a '
            + 'framework signed with one is assessed by all of them. C: That means our '
            + 'diplomacy has to be unusually consistent. A country in this position '
            + 'cannot say different things in different rooms — because the rooms compare '
            + 'notes. D: Handled well it makes us a bridge; handled carelessly it makes '
            + 'us a country that nobody fully trusts. The margin between the two is '
            + 'narrower than it looks. E: The practical discipline is to keep one version '
            + 'of every substantive position, written down, and to use it in every room — '
            + 'adapting the register and nothing else.',
          'B1 target — I am going to write one formal document in English every week, '
            + 'and I will ask a colleague to check it. I am also going to keep a list of '
            + 'the stress patterns I get wrong.',
          'B2 extension — A: I am going to practise one note verbale a week against a '
            + 'real scenario and have a colleague check it — three passes, as the unit '
            + 'recommends, with the third for formulas only. B: I will record myself '
            + 'delivering a formal welcome once a week and listen only to the endings of '
            + 'sentences — because that is my weakest point. C: I am going to keep a '
            + 'working list of the words whose stress I get wrong, and add to it rather '
            + 'than hoping to remember. D: And the one that is hardest: I am going to say '
            + '"I do not have that figure" when I do not have it, rather than estimating. '
            + 'That is a habit — not a skill, and it will take the longest to build.'],
        criteria: [{ t: 'Rank these five qualities of an effective bridge-builder from most to '
            + 'least important for diplomatic work. Explain your top choice in 2–3 '
            + 'sentences.' },
          { t: 'What is your country\'s unique diplomatic position in the mid-2020s, and '
            + 'how does it create both challenge and opportunity?' },
          { t: 'What is one concrete commitment you are going to make to improving your '
            + 'English for this work? Use future forms in your answer.' }]
      }
    }
  ]
});
