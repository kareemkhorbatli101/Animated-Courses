/* Unit 4 — the acted scenes. Every line is the book's own, from
   Appendix A (Audio Scripts) or the key's Spoken Sample Answer. Each subtitle is
   LOOKED UP from ar.js through FMS.ar(), so a line and its Arabic cannot drift
   apart; gates/fms_ar.py fails the build on a line whose lookup returns nothing. */
FMS.scene('u4-wb', {
  set: 'office',
  cast: {
    youssef: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.youssef)),
    dawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.dawit))
  },
  lines: [
    { who: 'youssef', cam: { shot: 'mid' }, en: 'The thing to understand about a note verbale is that it is not a letter. A '
        + 'note verbale is written in the third person throughout — no "I" or "we." '
        + 'Instead: "The Ministry of Foreign Affairs of the Republic of Kazakhstan '
        + 'presents its compliments to the Embassy of the Federal Republic of Germany '
        + 'and has the honor to inform..." Every note verbale begins with this '
        + 'formula. Every note verbale ends with a closing compliments formula: "The '
        + 'Ministry of Foreign Affairs avails itself of this opportunity to renew to '
        + 'the Embassy the assurances of its highest consideration." These are not '
        + 'optional. They are the form through which the institution speaks — and '
        + 'getting them right signals that the diplomatic service knows what it is '
        + 'doing.',
      ar: FMS.ar('The thing to understand about a note verbale is that it is not a letter. A '
        + 'note verbale is written in the third person throughout — no "I" or "we." '
        + 'Instead: "The Ministry of Foreign Affairs of the Republic of Kazakhstan '
        + 'presents its compliments to the Embassy of the Federal Republic of Germany '
        + 'and has the honor to inform..." Every note verbale begins with this '
        + 'formula. Every note verbale ends with a closing compliments formula: "The '
        + 'Ministry of Foreign Affairs avails itself of this opportunity to renew to '
        + 'the Embassy the assurances of its highest consideration." These are not '
        + 'optional. They are the form through which the institution speaks — and '
        + 'getting them right signals that the diplomatic service knows what it is '
        + 'doing.') || '' },
    { who: 'dawit', en: 'And if I write it in first person?',
      ar: FMS.ar('And if I write it in first person?') || '' },
    { who: 'youssef', en: 'Then it is not a note verbale. It is a letter — and a letter carries '
        + 'different weight and a different institutional meaning. The distinction '
        + 'matters to the receiving party. Always use the correct form for the '
        + 'correct purpose.',
      ar: FMS.ar('Then it is not a note verbale. It is a letter — and a letter carries '
        + 'different weight and a different institutional meaning. The distinction '
        + 'matters to the receiving party. Always use the correct form for the '
        + 'correct purpose.') || '' },
    { who: 'youssef', en: 'Once the note verbale is cleared, it goes to Consular Affairs for '
        + 'authentication before dispatch. Nurlan\'s section handles that — have your '
        + 'document ready 24 hours before it needs to leave the building.',
      ar: FMS.ar('Once the note verbale is cleared, it goes to Consular Affairs for '
        + 'authentication before dispatch. Nurlan\'s section handles that — have your '
        + 'document ready 24 hours before it needs to leave the building.') || '' }
  ]
});

FMS.scene('u4-3b', {
  set: 'reception',
  cast: {
    official: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.official)),
    daniyar: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.daniyar)),
    aigerim: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.66, 0.52] }; }(FMS.art.cast.aigerim))
  },
  lines: [
    { who: 'official', cam: { shot: 'mid' }, en: 'On behalf of the Republic of Kazakhstan, I am proud to participate in this '
        + 'signing ceremony. The Memorandum of Understanding we sign today will '
        + 'create a structured framework for bilateral cooperation in infrastructure, '
        + 'education, and trade. A joint technical committee is going to meet for the '
        + 'first time within sixty days. This partnership will grow and deepen over '
        + 'the years ahead. Kazakhstan and Germany are going to build something '
        + 'lasting together.',
      ar: FMS.ar('On behalf of the Republic of Kazakhstan, I am proud to participate in this '
        + 'signing ceremony. The Memorandum of Understanding we sign today will '
        + 'create a structured framework for bilateral cooperation in infrastructure, '
        + 'education, and trade. A joint technical committee is going to meet for the '
        + 'first time within sixty days. This partnership will grow and deepen over '
        + 'the years ahead. Kazakhstan and Germany are going to build something '
        + 'lasting together.') || '' },
    { who: 'daniyar', en: 'Kazakhstan is ready to receive international investment and partnership. '
        + 'The modernization programs that are going to be implemented over the next '
        + 'three years have been designed with international standards of '
        + 'transparency and accountability. The ministry shall release a '
        + 'comprehensive investment opportunity catalog within the next thirty days. '
        + 'We are meeting with more than forty delegations over this conference to '
        + 'discuss specific programs. Kazakhstan will remember the partners who '
        + 'commit to this phase of its development.',
      ar: FMS.ar('Kazakhstan is ready to receive international investment and partnership. '
        + 'The modernization programs that are going to be implemented over the next '
        + 'three years have been designed with international standards of '
        + 'transparency and accountability. The ministry shall release a '
        + 'comprehensive investment opportunity catalog within the next thirty days. '
        + 'We are meeting with more than forty delegations over this conference to '
        + 'discuss specific programs. Kazakhstan will remember the partners who '
        + 'commit to this phase of its development.') || '' },
    { who: 'official', en: 'Your Excellency, distinguished guests — it is my honor to propose a toast '
        + 'this evening. Kazakhstan and France have signed today a framework that '
        + 'will define the next chapter of our relationship. The programs we are '
        + 'going to implement together — in culture, in education, in economic '
        + 'partnership — will benefit the people of both our countries. To '
        + 'friendship, to cooperation, and to a future that will be built together.',
      ar: FMS.ar('Your Excellency, distinguished guests — it is my honor to propose a toast '
        + 'this evening. Kazakhstan and France have signed today a framework that '
        + 'will define the next chapter of our relationship. The programs we are '
        + 'going to implement together — in culture, in education, in economic '
        + 'partnership — will benefit the people of both our countries. To '
        + 'friendship, to cooperation, and to a future that will be built together.') || '' },
    { who: 'aigerim', en: 'We are holding the first technical committee meeting on September 15th — '
        + 'that is confirmed.',
      ar: FMS.ar('We are holding the first technical committee meeting on September 15th — '
        + 'that is confirmed.') || '' },
    { who: 'daniyar', en: 'Good. And the joint investment catalog?',
      ar: FMS.ar('Good. And the joint investment catalog?') || '' },
    { who: 'aigerim', en: 'We are publishing that on August 30th — it is going to include all twelve '
        + 'priority projects.',
      ar: FMS.ar('We are publishing that on August 30th — it is going to include all twelve '
        + 'priority projects.') || '' },
    { who: 'daniyar', en: 'The minister\'s office will want a preview before it goes out.',
      ar: FMS.ar('The minister\'s office will want a preview before it goes out.') || '' },
    { who: 'aigerim', en: 'Already scheduled — we are briefing them on August 20th. And the Paris '
        + 'reception in October — I am attending that with the minister. We shall '
        + 'issue formal invitations by the end of this month.',
      ar: FMS.ar('Already scheduled — we are briefing them on August 20th. And the Paris '
        + 'reception in October — I am attending that with the minister. We shall '
        + 'issue formal invitations by the end of this month.') || '' }
  ]
});

FMS.scene('u4-4a', {
  set: 'reception',
  cast: {
    daniyar: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.daniyar)),
    valentina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.valentina))
  },
  lines: [
    { who: 'daniyar', cam: { shot: 'mid' }, en: 'Your Excellency, distinguished colleagues — this evening we mark a moment '
        + 'that both our countries have worked toward with commitment and patience. '
        + 'The cooperation framework we signed today will open new doors for our '
        + 'students, our researchers, and our people. The programs we are going to '
        + 'build together will carry something real and lasting into both our '
        + 'societies. Kazakhstan is grateful for France\'s and Germany\'s '
        + 'partnership, and for your presence here tonight. Please raise your glasses '
        + '— to friendship, to cooperation, and to a future that we shall build '
        + 'together.',
      ar: FMS.ar('Your Excellency, distinguished colleagues — this evening we mark a moment '
        + 'that both our countries have worked toward with commitment and patience. '
        + 'The cooperation framework we signed today will open new doors for our '
        + 'students, our researchers, and our people. The programs we are going to '
        + 'build together will carry something real and lasting into both our '
        + 'societies. Kazakhstan is grateful for France\'s and Germany\'s '
        + 'partnership, and for your presence here tonight. Please raise your glasses '
        + '— to friendship, to cooperation, and to a future that we shall build '
        + 'together.') || '' },
    { who: 'valentina', en: 'Your Excellency, on behalf of the French and German delegations, I am '
        + 'grateful for this generous hospitality and this meaningful occasion. The '
        + 'agreement we signed today reflects a serious commitment from both sides, '
        + 'and we will honor it through implementation, not just celebration. To '
        + 'Kazakhstan — to its future, and to the partnership that begins today.',
      ar: FMS.ar('Your Excellency, on behalf of the French and German delegations, I am '
        + 'grateful for this generous hospitality and this meaningful occasion. The '
        + 'agreement we signed today reflects a serious commitment from both sides, '
        + 'and we will honor it through implementation, not just celebration. To '
        + 'Kazakhstan — to its future, and to the partnership that begins today.') || '' }
  ]
});

FMS.scene('u4-4b', {
  set: 'forum',
  cast: {
    daniyar: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.daniyar)),
    dawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.dawit)),
    aigerim: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.66, 0.52] }; }(FMS.art.cast.aigerim)),
    huy: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.84, 0.52] }; }(FMS.art.cast.huy))
  },
  lines: [
    { who: 'daniyar', cam: { shot: 'mid' }, en: 'Distinguished colleagues, the Kazakhstan–France Digital Infrastructure '
        + 'Cooperation framework represents one of our most forward-looking '
        + 'modernization programs. The framework covers three areas: digital '
        + 'connectivity infrastructure in urban centers, e-government platform '
        + 'development, and digital skills training for public sector staff. A joint '
        + 'implementation committee is going to meet for the first time in September '
        + 'to finalize the project portfolio.',
      ar: FMS.ar('Distinguished colleagues, the Kazakhstan–France Digital Infrastructure '
        + 'Cooperation framework represents one of our most forward-looking '
        + 'modernization programs. The framework covers three areas: digital '
        + 'connectivity infrastructure in urban centers, e-government platform '
        + 'development, and digital skills training for public sector staff. A joint '
        + 'implementation committee is going to meet for the first time in September '
        + 'to finalize the project portfolio.') || '' },
    { who: 'dawit', en: 'What is the timeline for the first operational projects?',
      ar: FMS.ar('What is the timeline for the first operational projects?') || '' },
    { who: 'daniyar', en: 'The first digital connectivity projects are going to begin in Q1 of next '
        + 'year — site assessments are already underway. We are completing the '
        + 'regulatory approvals process this month, and we are meeting with the '
        + 'relevant technical ministry teams next week to confirm the implementation '
        + 'schedule.',
      ar: FMS.ar('The first digital connectivity projects are going to begin in Q1 of next '
        + 'year — site assessments are already underway. We are completing the '
        + 'regulatory approvals process this month, and we are meeting with the '
        + 'relevant technical ministry teams next week to confirm the implementation '
        + 'schedule.') || '' },
    { who: 'aigerim', en: 'What technical requirements apply to French companies?',
      ar: FMS.ar('What technical requirements apply to French companies?') || '' },
    { who: 'daniyar', en: 'Companies will need to register through our investment facilitation office '
        + '— a single-window process that we are launching in September. They will '
        + 'need to meet standard international technical specifications and will '
        + 'operate under our investment protection agreement with France.',
      ar: FMS.ar('Companies will need to register through our investment facilitation office '
        + '— a single-window process that we are launching in September. They will '
        + 'need to meet standard international technical specifications and will '
        + 'operate under our investment protection agreement with France.') || '' },
    { who: 'huy', en: 'What does Kazakhstan bring to this partnership?',
      ar: FMS.ar('What does Kazakhstan bring to this partnership?') || '' },
    { who: 'daniyar', en: 'Kazakhstan brings three things: a real need, a strategic location, and a '
        + 'committed institutional partner. Kazakhstan is going to become a digital '
        + 'connectivity hub for Central Asia — early partners will benefit from that '
        + 'position. France will find that our team is prepared, professional, and '
        + 'reliable.',
      ar: FMS.ar('Kazakhstan brings three things: a real need, a strategic location, and a '
        + 'committed institutional partner. Kazakhstan is going to become a digital '
        + 'connectivity hub for Central Asia — early partners will benefit from that '
        + 'position. France will find that our team is prepared, professional, and '
        + 'reliable.') || '' }
  ]
});

FMS.scene('u4-8c', {
  set: 'reception',
  cast: {
    daniyar: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.daniyar)),
    valentina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.valentina))
  },
  lines: [
    { who: 'daniyar', cam: { shot: 'mid' }, en: 'Your Excellency, distinguished colleagues — this evening we mark a moment '
        + 'that both our countries have worked toward with commitment and patience. '
        + 'The cooperation framework we signed today will open new doors for our '
        + 'students, our researchers, and our people. The programs we are going to '
        + 'build together will carry something real and lasting into both our '
        + 'societies. Please raise your glasses — to friendship, to cooperation, and '
        + 'to a future that we shall build together.',
      ar: FMS.ar('Your Excellency, distinguished colleagues — this evening we mark a moment '
        + 'that both our countries have worked toward with commitment and patience. '
        + 'The cooperation framework we signed today will open new doors for our '
        + 'students, our researchers, and our people. The programs we are going to '
        + 'build together will carry something real and lasting into both our '
        + 'societies. Please raise your glasses — to friendship, to cooperation, and '
        + 'to a future that we shall build together.') || '' },
    { who: 'valentina', en: 'Your Excellency, on behalf of the delegations present, I am grateful for '
        + 'this generous hospitality and this meaningful occasion. The agreement we '
        + 'signed today reflects a serious commitment from both sides, and we will '
        + 'honor it through implementation, not just celebration. To Kazakhstan — to '
        + 'its future, and to the partnership that begins today.',
      ar: FMS.ar('Your Excellency, on behalf of the delegations present, I am grateful for '
        + 'this generous hospitality and this meaningful occasion. The agreement we '
        + 'signed today reflects a serious commitment from both sides, and we will '
        + 'honor it through implementation, not just celebration. To Kazakhstan — to '
        + 'its future, and to the partnership that begins today.') || '' }
  ]
});

FMS.scene('u4-8d', {
  set: 'meeting',
  cast: {
    aigerim: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.aigerim)),
    daniyar: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.daniyar))
  },
  lines: [
    { who: 'aigerim', cam: { shot: 'mid' }, en: 'Your Excellency, as-salamu alaykum — welcome to the Ministry of Foreign '
        + 'Affairs. It is a great honor and a genuine privilege to receive you here '
        + 'in Astana. We are truly pleased by your visit.',
      ar: FMS.ar('Your Excellency, as-salamu alaykum — welcome to the Ministry of Foreign '
        + 'Affairs. It is a great honor and a genuine privilege to receive you here '
        + 'in Astana. We are truly pleased by your visit.') || '' },
    { who: 'daniyar', en: 'Wa alaykum as-salam. Thank you. Astana is always a pleasure to return to.',
      ar: FMS.ar('Wa alaykum as-salam. Thank you. Astana is always a pleasure to return to.') || '' },
    { who: 'aigerim', en: 'Your Excellency is most kind. Please, make yourself at home. We have '
        + 'prepared Arabic coffee and light refreshments — may I offer you a cup?',
      ar: FMS.ar('Your Excellency is most kind. Please, make yourself at home. We have '
        + 'prepared Arabic coffee and light refreshments — may I offer you a cup?') || '' },
    { who: 'daniyar', en: 'Please, yes. This is a beautiful room. Tell me, how are things at the '
        + 'ministry? We hear good things.',
      ar: FMS.ar('Please, yes. This is a beautiful room. Tell me, how are things at the '
        + 'ministry? We hear good things.') || '' },
    { who: 'aigerim', en: 'We are working very hard, Your Excellency, and the results are beginning '
        + 'to show. Tonight\'s dinner will be a warm occasion — I hope you and your '
        + 'team will feel genuinely welcomed.',
      ar: FMS.ar('We are working very hard, Your Excellency, and the results are beginning '
        + 'to show. Tonight\'s dinner will be a warm occasion — I hope you and your '
        + 'team will feel genuinely welcomed.') || '' },
    { who: 'daniyar', en: 'Shall we proceed?',
      ar: FMS.ar('Shall we proceed?') || '' },
    { who: 'aigerim', en: 'Of course, Your Excellency — please allow me to escort you.',
      ar: FMS.ar('Of course, Your Excellency — please allow me to escort you.') || '' }
  ]
});
